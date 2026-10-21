#!/usr/bin/env python3
"""
MoneyBee Compliance rebrand layer for the Marble frontend.

Applies MoneyBee look and feel (ink / ivory / honey palette, Inter Tight, MoneyBee logo,
product naming) on top of an unmodified checkout of checkmarble/marble-frontend.

Usage:  python3 rebrand.py <path-to-marble-frontend-checkout>

Licence note: Marble is distributed under the Elastic License 2.0. This script deliberately
does NOT touch any LICENSE file or licence/copyright notice, and it adds a visible
"Powered by Marble" attribution. MoneyBee uses this deployment internally to monitor its own
transactions; it must not be offered to third parties as a hosted service without a
commercial licence from Marble.
"""
import json
import pathlib
import re
import shutil
import sys

ROOT = pathlib.Path(sys.argv[1]).resolve()
BRAND = pathlib.Path(__file__).resolve().parent / 'brand'
PKG = ROOT / 'packages'
APP = PKG / 'app-builder'
PRODUCT = 'MoneyBee Compliance'
SHORT = 'MoneyBee'
changes = []


def edit(path, fn, label):
    p = pathlib.Path(path)
    before = p.read_text(encoding='utf-8')
    after = fn(before)
    if after == before:
        raise SystemExit(f'[rebrand] no change for: {label} ({p}) - upstream file changed, update rebrand.py')
    p.write_text(after, encoding='utf-8')
    changes.append(label)


def sub1(pattern, repl, flags=0):
    def f(s):
        out, n = re.subn(pattern, repl, s, count=1, flags=flags)
        if n == 0:
            raise SystemExit(f'[rebrand] pattern not found: {pattern}')
        return out
    return f


# ---------------------------------------------------------------- palette
# Light mode: deep honey for filled actions (white text keeps >= 4.5:1 contrast),
# warm ink greys, paper surfaces.
LIGHT = {
    'grey-primary': '#14120E', 'grey-hover': '#24211A', 'grey-secondary': '#5E574B',
    'grey-placeholder': '#8A8273', 'grey-disabled': '#C8C1B3', 'grey-border': '#E8E2D6',
    'grey-background': '#F3ECDD', 'grey-background-light': '#FAF8F2', 'grey-white': '#FFFFFF',
    'purple-primary': '#9A6A1F', 'purple-hover': '#7F5715', 'purple-secondary': '#DDA85A',
    'purple-placeholder': '#6E4B12', 'purple-disabled': '#C9A56A', 'purple-border': '#EBCB97',
    'purple-border-light': '#F4E2C2', 'purple-background': '#F8EDD9',
    'purple-background-light': '#FBF6EC', 'surface-page': '#FAF8F2',
    'enum-purple': '#E9C88F',
}
DARK = {
    'grey-primary': '#F5EFE3', 'grey-hover': '#FFFFFF', 'grey-secondary': '#C9C0B0',
    'grey-placeholder': '#8F8676', 'grey-disabled': '#4A4335', 'grey-border': '#312C23',
    'grey-background-light': '#24211A', 'grey-background': '#1B1914',
    'grey-background-dark': '#14120E',
    'purple-primary': '#B8842F', 'purple-hover': '#DDA85A', 'purple-secondary': '#9A6A1F',
    'purple-placeholder': '#7F5715', 'purple-disabled': '#5E4824', 'purple-border': '#3A2E1A',
    'purple-border-light': '#F4E2C2', 'purple-background': '#FBF6EC',
    'enum-purple': '#9A6A1F',
}


def set_tokens(css, block_start, tokens):
    i = css.index(block_start)
    j = css.index('\n}', i)
    block = css[i:j]
    for name, val in tokens.items():
        block, n = re.subn(rf'(--color-{re.escape(name)}:\s*)[^;]+;', rf'\g<1>{val};', block, count=1)
        if n == 0:
            raise SystemExit(f'[rebrand] token --color-{name} not found in {block_start!r}')
    return css[:i] + block + css[j:]


def theme(css):
    css = set_tokens(css, '@theme {', LIGHT)
    css = set_tokens(css, '.dark {', DARK)
    css = css.replace('--font-sans: Inter, ui-sans-serif', "--font-sans: 'Inter Tight', Inter, ui-sans-serif", 1)
    return css


edit(PKG / 'tailwind-preset/src/tailwind.css', theme, 'palette + font tokens')

# ---------------------------------------------------------------- fonts
dst = APP / 'public/fonts/InterTight'
dst.mkdir(parents=True, exist_ok=True)
for f in (BRAND / 'fonts').iterdir():
    shutil.copy(f, dst / f.name)

ROOT_ROUTE = APP / 'src/routes/__root.tsx'
edit(ROOT_ROUTE, sub1(r"\{ title: 'Marble' \}", f"{{ title: '{PRODUCT}' }}"), 'page title')
edit(ROOT_ROUTE, sub1(r"(\{ rel: 'stylesheet', href: '/fonts/Inter/inter.css' \},)",
                      r"\1\n      { rel: 'stylesheet', href: '/fonts/InterTight/inter-tight.css' },"), 'font stylesheet')

# ---------------------------------------------------------------- logos + favicons
for f in (BRAND / 'logos').iterdir():
    shutil.copy(f, PKG / 'ui-icons/svgs/logos' / f.name)
for f in (BRAND / 'favicons').iterdir():
    target = APP / 'public' / ('favicon.ico' if f.name == 'favicon.ico' else f'favicons/{f.name}')
    shutil.copy(f, target)
manifest = APP / 'public/site.webmanifest'
m = json.loads(manifest.read_text())
m.update(name=PRODUCT, short_name=SHORT, theme_color='#14120E', background_color='#14120E')
manifest.write_text(json.dumps(m, indent=2) + '\n')

# ---------------------------------------------------------------- product naming in UI copy
# Only string VALUES change; keys stay intact. Third-party names (Firebase, Convoy...) untouched.
PROTECT = ['Marble Admin', 'marble_admin', 'Marble backend', 'Marble Backend', 'docs.checkmarble', 'checkmarble']


def rename(v):
    if not isinstance(v, str) or ('Marble' not in v and 'marbles' not in v):
        return v
    keep = {}
    for i, p in enumerate(PROTECT):
        tok = f'\u0000{i}\u0000'
        if p in v:
            keep[tok] = p
            v = v.replace(p, tok)
    v = v.replace('Marble team', 'MoneyBee compliance team').replace('Contact Marble', 'Contact your administrator')
    v = v.replace('Did you lose your marbles?', 'Something went off track.')
    v = v.replace('Marble', SHORT)
    for tok, p in keep.items():
        v = v.replace(tok, p)
    return v


def walk(o):
    if isinstance(o, dict):
        return {k: walk(v) for k, v in o.items()}
    if isinstance(o, list):
        return [walk(x) for x in o]
    return rename(o)


n_files = 0
for f in (APP / 'src/locales').rglob('*.json'):
    raw = f.read_text(encoding='utf-8')
    if 'Marble' not in raw and 'marbles' not in raw:
        continue
    data = json.loads(raw)
    new = walk(data)
    if new != data:
        f.write_text(json.dumps(new, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
        n_files += 1
changes.append(f'product naming in {n_files} locale files')

# Auth description shown on sign-in
for f in (APP / 'src/locales').glob('en/auth.json'):
    d = json.loads(f.read_text(encoding='utf-8'))
    if 'marble_description' in d:
        d['marble_description'] = ('MoneyBee Compliance is the real-time transaction monitoring, screening and case '
                                   'management workspace for MoneyBee\'s payments business.')
        f.write_text(json.dumps(d, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')

for f in (APP / 'src/components/Cases/Events').glob('*.tsx'):
    s = f.read_text(encoding='utf-8')
    if ": 'Marble'" in s:
        f.write_text(s.replace(": 'Marble'", f": '{SHORT}'"), encoding='utf-8')
        changes.append(f'case actor name ({f.name})')

edit(APP / 'src/repositories/AuthenticationRepository.ts',
     sub1(r"generateQrCodeUrl\(user\.email \?\? user\.uid, 'Marble'\)",
          f"generateQrCodeUrl(user.email ?? user.uid, '{PRODUCT}')"), '2FA issuer name')

# ---------------------------------------------------------------- sign-in screen + attribution
AUTH = APP / 'src/routes/_app/_auth.tsx'
edit(AUTH, sub1(r"cva\('flex h-screen bg-\[#080525\]'", "cva('flex h-screen bg-[#14120E]'"), 'auth background')
edit(AUTH, sub1(
    r'<div className="text-\[40px\] text-\[#ADA7FD\] font-medium text-center">\s*Iterate\. Improve\. <span className="text-grey-white">Automate\.</span>\s*</div>\s*<div className="aspect-342/198 w-full max-w-\[600px\]">\s*<img src="/img/main-illu\.svg" alt="main-illu" className="size-full" />\s*</div>',
    '<div className="text-[40px] text-[#DDA85A] font-medium text-center tracking-[-0.03em]">\n'
    '          Monitor. Investigate. <span className="text-[#F5EFE3]">Report.</span>\n'
    '        </div>\n'
    '        <div className="max-w-[520px] text-center text-[18px] leading-[1.5] text-[#A39A8B]">\n'
    '          Transaction monitoring, sanctions screening and case management for MoneyBee.\n'
    '        </div>\n'
    '        <div className="text-[13px] text-[#A39A8B]/70">\n'
    '          Powered by <a className="underline" href="https://github.com/checkmarble/marble" target="_blank" rel="noreferrer">Marble</a>, licensed under the Elastic License 2.0\n'
    '        </div>',
    flags=re.S), 'auth hero + attribution')
edit(AUTH, sub1(r'className="text-grey-white size-full h-16"', 'className="text-[#F5EFE3] size-full h-16"'), 'auth logo colour')

ONB = APP / 'src/routes/_app/onboarding.tsx'
edit(ONB, sub1(r'bg-\[#080525\]', 'bg-[#14120E]'), 'onboarding background')

HDR = APP / 'src/components/HeaderLogo.tsx'
edit(HDR, sub1(r'className="h-6 w-full opacity-0 transition-opacity group-hover/sidebar:opacity-100 delay-400 group-hover/sidebar:delay-200 dark:invert"',
               'className="h-6 w-full opacity-0 transition-opacity group-hover/sidebar:opacity-100 delay-400 group-hover/sidebar:delay-200 text-grey-primary"'),
     'sidebar wordmark colour')

print('[rebrand] applied:', *changes, sep='\n  - ')

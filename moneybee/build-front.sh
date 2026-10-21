#!/bin/bash
# Rebuild the prebuilt MoneyBee frontend bundle into moneybee/dist/app/.output
# Usage: moneybee/build-front.sh [marble-frontend tag]   (needs git, python3, bun, node; ~7 GB RAM)
set -euo pipefail
TAG="${1:-v1.11.0}"
HERE="$(cd "$(dirname "$0")" && pwd)"
WORK="$(mktemp -d)"
git clone --depth 1 --branch "$TAG" https://github.com/checkmarble/marble-frontend.git "$WORK"
python3 "$HERE/rebrand.py" "$WORK"
cd "$WORK" && bun install --frozen-lockfile
cd packages/app-builder && NODE_OPTIONS=--max-old-space-size=5000 VITE_CJS_IGNORE_WARNING=1 bun run build
rm -rf "$HERE/dist/app" && mkdir -p "$HERE/dist/app"
cp -R .output "$HERE/dist/app/.output"
echo "Built $TAG into $HERE/dist/app/.output"

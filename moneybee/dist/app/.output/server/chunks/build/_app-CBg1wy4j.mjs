import { Q as jsxRuntimeExports, ag as Outlet, L as useRouter, M as reactExports } from "./server.mjs";
import { L as LoaderRevalidatorContext, u as useLoaderRevalidator } from "./LoaderRevalidatorContext-BEuG7sHs.mjs";
import { u as useSetLanguageMutation } from "./set-language-M5uuJ5P9.mjs";
import { f as supportedLngs } from "./services-middleware-nMulUXHZ.mjs";
import { z as zt } from "./create-context-k6HmQ6bB.mjs";
import { u as useTranslation } from "./Tabs-CzpyUi7T.mjs";
import { u as useNavigate, A as AgnosticNavigationContext, T as Tooltip } from "./router-KSC-NEr8.mjs";
import { u as useSegmentPageTracking } from "./index-EgDiO0Iq.mjs";
import { Q as QueryString } from "./input-validation-D4mgQsey.mjs";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "./query-BmG5BEas.mjs";
import "./short-uuid-fTZYJj_k.mjs";
import "./useMutation-BOdeDeAR.mjs";
import "./useServerFn-oRH5Nw97.mjs";
import "node:crypto";
import "./use-callback-ref-DoQNLci-.mjs";
import "./sharpstate.es-C0BW2AZi.mjs";
import "./formatDistanceStrict-DEEeAR-Y.mjs";
import "./security-headers.server-BdP3HrPp.mjs";
import "./ThemeContext-DjRULCu0.mjs";
import "./config--RFGchua.mjs";
import "./i18n-instance-store-UssbGYOM.mjs";
import "./auth-middleware-eNRVfU3l.mjs";
import "./logger.server-DV14d0iZ.mjs";
import "node:os";
import "node:events";
import "node:diagnostics_channel";
import "fs";
import "events";
import "path";
import "assert";
import "worker_threads";
import "module";
import "node:fs";
import "node:path";
import "node:url";
import "url";
import "buffer";
import "./data-model-feature-access-D7XsjRz2.mjs";
import "./feature-access-BSdB6UiC.mjs";
import "./datetime-insWKNBy.mjs";
import "./case-detail-middleware-iDVIrW-c.mjs";
import "./inboxes-D556s0BB.mjs";
import "./async-C3pYACua.mjs";
import "./coerce-UidCu_Sb.mjs";
import "./files-fO9wUXBf.mjs";
import "./decisions--eKWwSYj.mjs";
import "./unique-cniTya2T.mjs";
import "./graph-pivots-Bblee9BN.mjs";
import "./scenarios-C5R2TE8p.mjs";
function DevLanguageShortcut() {
  const {
    t,
    i18n: { language, changeLanguage }
  } = useTranslation(["common"]);
  const setLanguageMutation = useSetLanguageMutation();
  const revalidate = useLoaderRevalidator();
  reactExports.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.shiftKey && e.key === "L") {
        e.preventDefault();
        const currentIndex = supportedLngs.indexOf(language);
        const nextIndex = (currentIndex + 1) % supportedLngs.length;
        const nextLang = supportedLngs[nextIndex];
        if (!nextLang) return;
        setLanguageMutation.mutate(
          { preferredLanguage: nextLang },
          {
            onSuccess: () => {
              changeLanguage(nextLang);
              revalidate();
            },
            onError: () => zt.error(t("common:errors.unknown"))
          }
        );
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [language, setLanguageMutation, revalidate]);
  return null;
}
function App() {
  useSegmentPageTracking();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(RootProviders, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DevLanguageShortcut, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {})
  ] });
}
function RootProviders({
  children
}) {
  const router = useRouter();
  const tsNavigate = useNavigate();
  const navigate = reactExports.useCallback((toOrDelta, options) => {
    if (typeof toOrDelta === "number") {
      window.history.go(toOrDelta);
      return;
    }
    const to = typeof toOrDelta === "string" ? toOrDelta : toOrDelta.pathname ?? "/";
    const search = typeof toOrDelta !== "string" && toOrDelta.search ? QueryString.parse(toOrDelta.search, {
      ignoreQueryPrefix: true
    }) : void 0;
    tsNavigate({
      to,
      replace: options?.replace,
      search
    });
  }, [tsNavigate]);
  const invalidate = reactExports.useCallback(() => {
    router.invalidate();
  }, [router]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderRevalidatorContext.Provider, { value: invalidate, children: /* @__PURE__ */ jsxRuntimeExports.jsx(AgnosticNavigationContext.Provider, { value: navigate, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip.Provider, { children }) }) });
}
export {
  App as component
};

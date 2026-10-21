import { Q as jsxRuntimeExports, v as isRedirect } from "./server.mjs";
import { u as useTranslation, S as Typo, B as Button, I as Icon } from "./Tabs-CzpyUi7T.mjs";
import { F as FORBIDDEN, b as captureException } from "./services-middleware-nMulUXHZ.mjs";
import { b as authI18n, E as ErrorComponent } from "./router-KSC-NEr8.mjs";
import { l as logoutFn } from "./auth-Dpo7cXsF.mjs";
import { s as segment } from "./index-EgDiO0Iq.mjs";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "./use-callback-ref-DoQNLci-.mjs";
import "./sharpstate.es-C0BW2AZi.mjs";
import "./formatDistanceStrict-DEEeAR-Y.mjs";
import "./short-uuid-fTZYJj_k.mjs";
import "node:crypto";
import "./query-BmG5BEas.mjs";
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
import "./create-context-k6HmQ6bB.mjs";
import "./case-detail-middleware-iDVIrW-c.mjs";
import "./inboxes-D556s0BB.mjs";
import "./input-validation-D4mgQsey.mjs";
import "./async-C3pYACua.mjs";
import "./coerce-UidCu_Sb.mjs";
import "./files-fO9wUXBf.mjs";
import "./decisions--eKWwSYj.mjs";
import "./unique-cniTya2T.mjs";
import "./graph-pivots-Bblee9BN.mjs";
import "./scenarios-C5R2TE8p.mjs";
function AppRouterError({
  error
}) {
  const {
    t
  } = useTranslation(authI18n);
  let errorComponent;
  if (error instanceof Response && error.status === FORBIDDEN) {
    errorComponent = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "m-auto flex flex-col items-center gap-md", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typo, { variant: "title1", className: "text-purple-hover", children: t("common:error_boundary.marble_admin.title") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-s mb-lg", children: t("common:error_boundary.marble_admin.subtitle") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "primary", onClick: () => {
        void segment.reset();
        void logoutFn({
          data: {}
        });
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "logout", className: "size-5" }),
        t("common:auth.logout")
      ] }) })
    ] });
  } else if (!isRedirect(error)) {
    captureException(error);
    errorComponent = /* @__PURE__ */ jsxRuntimeExports.jsx(ErrorComponent, { error });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-purple-background-light flex size-full items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-surface-card flex max-w-md rounded-2xl p-2xl shadow-md", children: errorComponent }) });
}
export {
  AppRouterError as errorComponent
};

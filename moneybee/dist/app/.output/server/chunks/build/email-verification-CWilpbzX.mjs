import { Q as jsxRuntimeExports, a0 as ClientOnly, U as useHydrated } from "./server.mjs";
import { u as useTranslation, I as Icon, S as Typo, B as Button } from "./Tabs-CzpyUi7T.mjs";
import { L as Link } from "./router-KSC-NEr8.mjs";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "./services-middleware-nMulUXHZ.mjs";
import "./short-uuid-fTZYJj_k.mjs";
import "node:crypto";
import "./use-callback-ref-DoQNLci-.mjs";
import "./sharpstate.es-C0BW2AZi.mjs";
import "./formatDistanceStrict-DEEeAR-Y.mjs";
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
function SendEmailVerificationButton({
  onClick,
  children
}) {
  const isHydrated = useHydrated();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", className: "w-full capitalize", onClick, disabled: !isHydrated, children });
}
function SendEmailVerification() {
  const {
    t
  } = useTranslation(["auth"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ClientOnly, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(SendEmailVerificationButton, { children: t("auth:email-verification.resend") }) });
}
function SignUp() {
  const {
    t
  } = useTranslation(["common", "auth"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex w-full flex-col gap-2xl items-center text-s", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { className: "absolute top-[60px] start-[60px] flex gap-sm text-s items-center", to: "/sign-in-email", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "arrow-left", className: "size-4" }),
      t("common:back")
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Typo, { variant: "title2", className: "text-center", children: t("auth:email-verification.title") }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-lg items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: t("auth:email-verification.email_sent") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ClientOnly, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: t("auth:email-verification.click_on_link") })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-md items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: t("auth:email-verification.not_received") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SendEmailVerification, {})
    ] })
  ] });
}
export {
  SignUp as component
};

import { Q as jsxRuntimeExports, a0 as ClientOnly } from "./server.mjs";
import { f as Route$1C, b as authI18n, L as Link } from "./router-KSC-NEr8.mjs";
import { u as useTranslation, S as Typo, T as Trans, B as Button } from "./Tabs-CzpyUi7T.mjs";
import { F as FormInput } from "./FormInput-CsT_ETvr.mjs";
import { F as FormLabel } from "./FormLabel-DseYo_2t.mjs";
import { o as object, C as email } from "./short-uuid-fTZYJj_k.mjs";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "./query-BmG5BEas.mjs";
import "./security-headers.server-BdP3HrPp.mjs";
import "./services-middleware-nMulUXHZ.mjs";
import "node:crypto";
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
import "./formatDistanceStrict-DEEeAR-Y.mjs";
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
import "./use-callback-ref-DoQNLci-.mjs";
import "./sharpstate.es-C0BW2AZi.mjs";
object({
  email: email()
});
const StaticResetPassword = ({ prefilledEmail }) => {
  const { t } = useTranslation(["auth", "common"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "flex w-full flex-col gap-md", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-start gap-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { name: "email", children: t("auth:sign_in.email") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FormInput, { type: "email", className: "w-full", defaultValue: prefilledEmail ?? "", enablePasswordManagers: true })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { children: t("auth:reset-password.send") })
  ] });
};
function ForgotPassword() {
  const {
    prefilledEmail
  } = Route$1C.useLoaderData();
  const {
    t
  } = useTranslation(authI18n);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2xl w-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Typo, { variant: "title2", className: "text-center", children: t("auth:reset-password.title") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ClientOnly, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(StaticResetPassword, { prefilledEmail }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-sm text-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trans, { t, i18nKey: "auth:reset-password.wrong_place", components: {
      SignIn: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { className: "text-purple-primary underline", to: "/sign-in-email" })
    } }) })
  ] });
}
export {
  ForgotPassword as component
};

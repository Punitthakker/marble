import { Q as jsxRuntimeExports, a0 as ClientOnly, U as useHydrated } from "./server.mjs";
import { U as UnreadyCallout, S as SignInFirstConnection, A as AuthError } from "./UnreadyCallout-CnRoXRob.mjs";
import { i as Route$1z, L as Link } from "./router-KSC-NEr8.mjs";
import { u as useTranslation, I as Icon, S as Typo, B as Button } from "./Tabs-CzpyUi7T.mjs";
import { F as FormInput } from "./FormInput-CsT_ETvr.mjs";
import { F as FormLabel } from "./FormLabel-DseYo_2t.mjs";
import { o as object, s as string, C as email } from "./short-uuid-fTZYJj_k.mjs";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "./Callout-B0OuRL3q.mjs";
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
  credentials: object({
    email: email(),
    password: string().min(1, "Required")
  })
});
const StaticSignInWithEmailAndPassword = ({
  additionalContent,
  prefilledEmail
}) => {
  const hydrated = useHydrated();
  const { t } = useTranslation(["auth", "common"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "contents", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex w-full flex-col gap-md", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-start gap-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { name: "credentials.email", children: t("auth:sign_in.email") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          FormInput,
          {
            type: "email",
            name: "credentials.email",
            disabled: !hydrated,
            className: "w-full",
            valid: true,
            defaultValue: prefilledEmail ?? "",
            enablePasswordManagers: true
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-start gap-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { name: "credentials.password", children: t("auth:sign_in.password") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          FormInput,
          {
            type: "password",
            name: "credentials.password",
            autoComplete: "current-password",
            disabled: !hydrated,
            className: "w-full",
            valid: true,
            enablePasswordManagers: true
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { className: "text-s text-purple-primary underline", to: "/create-password", children: t("auth:sign_in.forgot_password") })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", size: "large", className: "w-full justify-center", disabled: !hydrated, children: t("auth:sign_in") }),
      additionalContent
    ] })
  ] });
};
function LoginWithEmail() {
  const {
    t
  } = useTranslation(["common", "auth"]);
  const {
    authError,
    isSsoEnabled,
    isSignupReady,
    didMigrationsRun,
    isManagedMarble,
    prefilledEmail
  } = Route$1z.useLoaderData();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2xl w-full", children: [
    isSsoEnabled ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { className: "absolute top-[60px] start-[60px] flex gap-sm text-s items-center", to: "/sign-in", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "arrow-left", className: "size-4" }),
      t("common:back")
    ] }) : null,
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typo, { variant: "title2", className: "text-center", children: t("auth:sign_in") }),
      !isSignupReady ? /* @__PURE__ */ jsxRuntimeExports.jsx(UnreadyCallout, { didMigrationsRun }) : null,
      /* @__PURE__ */ jsxRuntimeExports.jsx(ClientOnly, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(StaticSignInWithEmailAndPassword, { additionalContent: isSsoEnabled ? /* @__PURE__ */ jsxRuntimeExports.jsx(SignInFirstConnection, { isSignInHomepage: false }) : null, prefilledEmail }) }),
      !isSsoEnabled ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-md self-stretch", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px bg-grey-border grow" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("common:or") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px bg-grey-border grow" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Typo, { variant: "title2", className: "text-center", children: t("auth:sign_in.first_connection") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SignInFirstConnection, { isSignInHomepage: false, showAskDemoButton: !isSsoEnabled && isManagedMarble }) })
        ] })
      ] }) : null
    ] }),
    authError ? /* @__PURE__ */ jsxRuntimeExports.jsx(AuthError, { error: authError, className: "mt-xl" }) : null
  ] });
}
export {
  LoginWithEmail as component
};

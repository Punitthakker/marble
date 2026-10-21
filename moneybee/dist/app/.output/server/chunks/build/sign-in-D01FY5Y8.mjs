import { M as reactExports, Q as jsxRuntimeExports, a0 as ClientOnly } from "./server.mjs";
import { U as UnreadyCallout, A as AuthError, S as SignInFirstConnection } from "./UnreadyCallout-CnRoXRob.mjs";
import { u as useClientServices, b as useResolveMfaTotpSignIn, c as InvalidVerificationCode } from "./init-client-D_XUnM34.mjs";
import { z as zt } from "./create-context-k6HmQ6bB.mjs";
import { u as useTranslation, S as Typo, W as CtaV2ClassName, B as Button, a6 as Input } from "./Tabs-CzpyUi7T.mjs";
import { S as Spinner } from "./Spinner-DmLieYoS.mjs";
import { b as captureException } from "./services-middleware-nMulUXHZ.mjs";
import { L as Logo } from "./Logo-3vzUxSrh.mjs";
import { a as signInFn } from "./auth-Dpo7cXsF.mjs";
import { u as useMutation } from "./useMutation-BOdeDeAR.mjs";
import { h as Route$1A, L as Link } from "./router-KSC-NEr8.mjs";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "./Callout-B0OuRL3q.mjs";
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
function MfaChallenge(props) {
  const { t } = useTranslation(["common"]);
  const totpHint = props.resolver.hints.find((hint) => hint.factorId === "totp");
  if (!totpHint) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex w-full flex-col gap-lg", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-s text-red-primary", children: t("common:errors.unknown") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", size: "large", className: "w-full justify-center", onClick: props.onCancel, children: t("common:cancel") })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(MfaTotpChallenge, { ...props, enrollmentId: totpHint.uid });
}
function MfaTotpChallenge({
  resolver,
  signIn,
  authType = "email",
  loading,
  onCancel,
  enrollmentId
}) {
  const { t } = useTranslation(["auth", "common"]);
  const { authenticationClientService } = useClientServices();
  const resolveMfaTotpSignIn = useResolveMfaTotpSignIn(authenticationClientService);
  const [code, setCode] = reactExports.useState("");
  const [error, setError] = reactExports.useState(null);
  const [pending, setPending] = reactExports.useState(false);
  const busy = pending || loading;
  const handleVerify = async () => {
    setError(null);
    setPending(true);
    try {
      const result = await resolveMfaTotpSignIn(resolver, enrollmentId, code);
      if (result) {
        signIn({ type: authType, idToken: result.idToken, refreshToken: result.refreshToken, csrf: result.csrf });
      }
    } catch (verifyError) {
      if (verifyError instanceof InvalidVerificationCode) {
        setError(t("auth:mfa.error.invalid_code"));
      } else {
        captureException(verifyError);
        zt.error(t("common:errors.unknown"));
      }
    } finally {
      setPending(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "form",
    {
      className: "flex w-full flex-col gap-lg",
      onSubmit: (e) => {
        e.preventDefault();
        handleVerify();
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-l font-semibold", children: t("auth:mfa.challenge.title") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-s text-grey-secondary", children: t("auth:mfa.challenge.totp_description") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-start gap-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "mfa-totp-code", className: "text-s", children: t("auth:mfa.challenge.code_label") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              id: "mfa-totp-code",
              inputMode: "numeric",
              autoComplete: "one-time-code",
              enablePasswordManagers: true,
              maxLength: 6,
              className: "w-full",
              value: code,
              onChange: (e) => setCode(e.currentTarget.value.replace(/\D/g, "")),
              borderColor: error ? "redfigma-47" : "greyfigma-90"
            }
          ),
          error ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { role: "alert", className: "text-xs text-red-primary", children: error }) : null
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", size: "large", className: "w-full justify-center", disabled: busy || code.length < 6, children: busy ? /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, { className: "size-4" }) : t("auth:mfa.challenge.verify") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              type: "button",
              variant: "secondary",
              size: "large",
              className: "w-full justify-center",
              disabled: busy,
              onClick: onCancel,
              children: t("common:cancel")
            }
          )
        ] })
      ]
    }
  );
}
function SignInWithGoogleButton({
  onClick,
  loading
}) {
  const {
    t
  } = useTranslation(["auth"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "secondary", color: "grey", size: "large", appearance: "stroked", className: "w-full justify-center gap-sm relative", onClick, disabled: loading, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Logo, { logo: "google-logo", className: "size-6" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-s whitespace-nowrap text-center font-medium", children: t("auth:sign_in.google") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute end-0 mx-sm size-4", children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, { className: "size-4" }) : null })
  ] });
}
function SignInWithGoogle({
  signIn,
  onMfaRequired,
  loading
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ClientOnly, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(SignInWithGoogleButton, { loading }) });
}
function MicrosoftButton({
  onClick,
  loading
}) {
  const {
    t
  } = useTranslation(["auth"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "secondary", color: "grey", size: "large", appearance: "stroked", className: "w-full justify-center gap-sm relative", onClick: () => {
    void onClick?.();
  }, disabled: loading, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Logo, { logo: "microsoft-logo", className: "size-6" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-s whitespace-nowrap text-center font-medium", children: t("auth:sign_in.microsoft") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute end-0 mx-sm size-4", children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, { className: "size-4" }) : null })
  ] });
}
function SignInWithMicrosoft({
  signIn,
  onMfaRequired,
  loading
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ClientOnly, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(MicrosoftButton, { loading }) });
}
function Login() {
  const {
    t
  } = useTranslation(["auth", "common"]);
  const {
    isSignupReady,
    authProvider,
    didMigrationsRun,
    isManagedMarble,
    authError,
    redirectTo
  } = Route$1A.useLoaderData();
  const signInMutation = useMutation({
    mutationFn: async (authPayload) => signInFn({
      data: {
        idToken: authPayload.idToken,
        refreshToken: authPayload.refreshToken,
        csrf: authPayload.csrf,
        redirectTo: redirectTo ?? void 0
      }
    }).then((r) => r.redirectTo),
    onSuccess: (destination) => {
      window.location.href = destination;
    }
  });
  const signIn = (authPayload) => signInMutation.mutate(authPayload);
  const loading = signInMutation.isPending;
  const type = signInMutation.variables?.type;
  const [mfaChallenge, setMfaChallenge] = reactExports.useState(null);
  if (mfaChallenge) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-2xl w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MfaChallenge, { resolver: mfaChallenge.resolver, authType: mfaChallenge.type, signIn, loading, onCancel: () => setMfaChallenge(null) }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2xl w-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typo, { variant: "title2", className: "text-center", children: t("auth:sign_in") }),
      !isSignupReady ? /* @__PURE__ */ jsxRuntimeExports.jsx(UnreadyCallout, { didMigrationsRun }) : null,
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-sm", children: authProvider == "oidc" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "relative flex h-10 w-full items-center rounded border-2 border-[#1a73e8] bg-[#1a73e8] transition hover:bg-[rgb(69,128,233)] disabled:cursor-wait", onClick: () => {
          window.location.href = "/oidc/auth";
        }, disabled: loading, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-s text-grey-white w-full whitespace-nowrap text-center align-middle font-medium", children: "Sign in with OpenID Connect" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute end-0 mx-sm size-4", children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, { className: "size-4" }) : null })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AuthError, { error: authError, className: "mt-xl" })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SignInWithGoogle, { signIn, onMfaRequired: (resolver) => setMfaChallenge({
          resolver,
          type: "google"
        }), loading: loading && type === "google" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SignInWithMicrosoft, { signIn, onMfaRequired: (resolver) => setMfaChallenge({
          resolver,
          type: "microsoft"
        }), loading: loading && type === "microsoft" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { className: CtaV2ClassName({
          variant: "primary",
          color: "primary",
          size: "large",
          className: "w-full justify-center"
        }), to: "/sign-in-email", children: t("auth:sign_in.with_email") })
      ] }) })
    ] }),
    authProvider == "firebase" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-md self-stretch", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px bg-grey-border grow" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("common:or") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px bg-grey-border grow" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typo, { variant: "title2", className: "text-center", children: t("auth:sign_in.first_connection") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SignInFirstConnection, { isSignInHomepage: true, showAskDemoButton: isManagedMarble }) })
      ] })
    ] }) : null
  ] });
}
export {
  Login as component
};

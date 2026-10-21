import { M as reactExports, Q as jsxRuntimeExports, $ as createServerFn } from "./server.mjs";
import { s as signInEmailFn } from "./auth-Dpo7cXsF.mjs";
import { u as useClientServices, a as useEmailAndPasswordSignIn, E as EmailUnverified, I as InvalidLoginCredentials, N as NetworkRequestFailed } from "./init-client-D_XUnM34.mjs";
import { S as Spinner } from "./Spinner-DmLieYoS.mjs";
import { u as useTranslation, S as Typo, W as CtaV2ClassName, B as Button, a6 as Input, d as cn, I as Icon } from "./Tabs-CzpyUi7T.mjs";
import { b as captureException, s as servicesMiddleware } from "./services-middleware-nMulUXHZ.mjs";
import { C as CalloutV2 } from "./Callout-B0OuRL3q.mjs";
import { F as FormErrorOrDescription } from "./FormErrorOrDescription-BncG6ljR.mjs";
import { L as LanguagePicker } from "./LanguagePicker-CJNlmdOJ.mjs";
import { c as createSsrRpc } from "./query-BmG5BEas.mjs";
import { g as getOnboardingFormSchema, c as createInitialOrgPayloadSchema, M as MIN_PASSWORD_LENGTH } from "./onboarding-XD9GD15x.mjs";
import { u as useMutation } from "./useMutation-BOdeDeAR.mjs";
import { u as useServerFn } from "./useServerFn-oRH5Nw97.mjs";
import { h as handleSubmit, g as getFieldErrors } from "./form-D2XmDKeG.mjs";
import { u as useForm } from "./useForm-qNQ8S9xN.mjs";
import { c as Route$1I, L as Link } from "./router-KSC-NEr8.mjs";
import { z as zt } from "./create-context-k6HmQ6bB.mjs";
import { L as Logo } from "./Logo-3vzUxSrh.mjs";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "./short-uuid-fTZYJj_k.mjs";
import "./use-callback-ref-DoQNLci-.mjs";
import "./sharpstate.es-C0BW2AZi.mjs";
import "./formatDistanceStrict-DEEeAR-Y.mjs";
import "node:crypto";
import "./LoaderRevalidatorContext-BEuG7sHs.mjs";
import "./set-language-M5uuJ5P9.mjs";
import "./Select-Dg3p9vJ0.mjs";
import "./isNullish-B8pc8Ntu.mjs";
import "./array-BFSjnO9c.mjs";
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
function OnboardingAutoSignIn({
  email,
  password,
  onFailure
}) {
  const { t } = useTranslation(["auth", "common"]);
  const clientServices = useClientServices();
  const emailAndPasswordSignIn = useEmailAndPasswordSignIn(clientServices.authenticationClientService);
  const startedRef = reactExports.useRef(false);
  reactExports.useEffect(() => {
    if (startedRef.current) return;
    startedRef.current = true;
    const signIn = async () => {
      const result = await emailAndPasswordSignIn(email, password);
      if (result.mfaRequired) {
        onFailure("credentials");
        return;
      }
      const { redirectTo } = await signInEmailFn({
        data: { idToken: result.idToken, refreshToken: result.refreshToken, csrf: result.csrf }
      });
      window.location.href = redirectTo;
    };
    signIn().catch((error) => {
      if (error instanceof EmailUnverified) {
        onFailure("unverified");
      } else if (error instanceof InvalidLoginCredentials) {
        onFailure("credentials");
      } else if (error instanceof NetworkRequestFailed) {
        onFailure("unknown");
      } else {
        captureException(error);
        onFailure("unknown");
      }
    });
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-lg py-xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, { className: "size-6" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-s text-grey-secondary", children: t("auth:onboarding.signing_in") })
  ] });
}
const createInitialOrgFn = createServerFn({
  method: "POST"
}).middleware([servicesMiddleware]).validator(createInitialOrgPayloadSchema).handler(createSsrRpc("c2a7d8c56cdccfb43442312d796c7f53f83a4a667378fe94a027bc9778a2cf6d"));
const useCreateInitialOrgMutation = () => {
  const createInitialOrg = useServerFn(createInitialOrgFn);
  return useMutation({
    mutationKey: ["onboarding", "create-initial-org"],
    mutationFn: async (data) => createInitialOrg({ data })
  });
};
const onBlurWhenFilled = (schema) => ({
  onBlur: ({
    value
  }) => value === "" ? void 0 : schema.safeParse(value).error?.issues[0]
});
const isLongEnough = (password) => password.length >= MIN_PASSWORD_LENGTH;
const doPasswordsMatch = ({
  password,
  passwordConfirmation
}) => password !== "" && password === passwordConfirmation;
function Onboarding() {
  const {
    t
  } = useTranslation(["auth", "common"]);
  const {
    authProvider
  } = Route$1I.useLoaderData();
  const createInitialOrgMutation = useCreateInitialOrgMutation();
  const requiresPassword = authProvider !== "oidc";
  const canAutoSignIn = authProvider === "firebase";
  const formSchema = reactExports.useMemo(() => getOnboardingFormSchema(requiresPassword), [requiresPassword]);
  const [autoSignIn, setAutoSignIn] = reactExports.useState(null);
  const [autoSignInError, setAutoSignInError] = reactExports.useState(null);
  const form = useForm({
    defaultValues: {
      organization: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passwordConfirmation: ""
    },
    validators: {
      onSubmit: formSchema
    },
    onSubmit: async ({
      value: {
        passwordConfirmation: _,
        password,
        ...rest
      }
    }) => {
      let result;
      try {
        result = await createInitialOrgMutation.mutateAsync(requiresPassword ? {
          ...rest,
          password
        } : rest);
      } catch {
        zt.error(t("common:errors.unknown"));
        return;
      }
      if (result.error === "already_initialized") {
        zt.error(t("auth:onboarding.errors.already_initialized"));
        window.location.href = "/sign-in";
        return;
      }
      if (canAutoSignIn) {
        setAutoSignIn({
          email: rest.email,
          password
        });
        return;
      }
      window.location.href = "/sign-in";
    }
  });
  const handleAutoSignInFailure = (reason) => {
    const email = autoSignIn?.email ?? "";
    setAutoSignIn(null);
    if (reason === "unverified") {
      window.location.href = "/email-verification";
      return;
    }
    setAutoSignInError({
      email
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex min-h-screen items-center justify-center bg-[#14120E] p-xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-surface-card flex w-full max-w-[min(520px,90vw)] flex-col gap-2xl rounded-2xl p-2xl shadow-md", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Logo, { logo: "logo-standard", className: "text-grey-primary h-8 w-full", preserveAspectRatio: "xMidYMid meet", "aria-labelledby": "marble" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typo, { variant: "title2", className: "text-center", children: t("auth:onboarding.title") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-s text-grey-secondary text-center", children: t("auth:onboarding.description") })
      ] }),
      autoSignInError ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-lg", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-m bg-red-background text-red-primary w-full rounded-xs p-sm font-normal", children: t("auth:onboarding.errors.auto_sign_in_failed") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { className: CtaV2ClassName({
          size: "large",
          className: "w-full justify-center"
        }), to: "/sign-in-email", search: {
          email: autoSignInError.email
        }, children: t("auth:sign_in") })
      ] }) : autoSignIn ? /* @__PURE__ */ jsxRuntimeExports.jsx(OnboardingAutoSignIn, { ...autoSignIn, onFailure: handleAutoSignInFailure }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "flex flex-col gap-lg", onSubmit: handleSubmit(form), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(form.Field, { name: "organization", validators: onBlurWhenFilled(createInitialOrgPayloadSchema.shape.organization), children: (field) => /* @__PURE__ */ jsxRuntimeExports.jsx(OnboardingField, { field, label: t("auth:onboarding.organization"), type: "text" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-lg", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(form.Field, { name: "firstName", validators: onBlurWhenFilled(createInitialOrgPayloadSchema.shape.firstName), children: (field) => /* @__PURE__ */ jsxRuntimeExports.jsx(OnboardingField, { field, label: t("auth:onboarding.first_name"), type: "text", className: "flex-1" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(form.Field, { name: "lastName", validators: onBlurWhenFilled(createInitialOrgPayloadSchema.shape.lastName), children: (field) => /* @__PURE__ */ jsxRuntimeExports.jsx(OnboardingField, { field, label: t("auth:onboarding.last_name"), type: "text", className: "flex-1" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(form.Field, { name: "email", validators: onBlurWhenFilled(createInitialOrgPayloadSchema.shape.email), children: (field) => /* @__PURE__ */ jsxRuntimeExports.jsx(OnboardingField, { field, label: t("auth:onboarding.email"), type: "email" }) }),
        !requiresPassword ? /* @__PURE__ */ jsxRuntimeExports.jsx(CalloutV2, { children: t("auth:onboarding.external_account_notice") }) : null,
        requiresPassword ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-md", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-lg", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(form.Field, { name: "password", children: (field) => /* @__PURE__ */ jsxRuntimeExports.jsx(OnboardingField, { field, label: t("auth:onboarding.password"), type: "password", className: "flex-1" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(form.Field, { name: "passwordConfirmation", children: (field) => /* @__PURE__ */ jsxRuntimeExports.jsx(OnboardingField, { field, label: t("auth:onboarding.password_confirmation"), type: "password", className: "flex-1" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(form.Subscribe, { selector: (state) => state.values, children: (values) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(PasswordCriterion, { fulfilled: isLongEnough(values.password), label: t("auth:onboarding.password_criteria.length", {
              min: MIN_PASSWORD_LENGTH
            }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(PasswordCriterion, { fulfilled: doPasswordsMatch(values), label: t("auth:onboarding.password_criteria.match") })
          ] }) })
        ] }) : null,
        /* @__PURE__ */ jsxRuntimeExports.jsx(form.Subscribe, { selector: (state) => [state.values, state.isSubmitting], children: ([values, isSubmitting]) => /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", size: "large", className: "w-full justify-center", disabled: isSubmitting || requiresPassword && (!isLongEnough(values.password) || !doPasswordsMatch(values)), children: t("auth:onboarding.submit") }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-6 end-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LanguagePicker, {}) })
  ] });
}
function OnboardingField({
  field,
  label,
  type,
  className
}) {
  const valid = field.state.meta.errors.length === 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("flex flex-col items-stretch gap-sm", className), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { htmlFor: field.name, children: [
      label,
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          type,
          id: field.name,
          name: field.name,
          className: "w-full",
          borderColor: valid ? "greyfigma-90" : "redfigma-47",
          value: field.state.value,
          onChange: (e) => field.handleChange(e.currentTarget.value),
          onBlur: field.handleBlur,
          enablePasswordManagers: true
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FormErrorOrDescription, { errors: getFieldErrors(field.state.meta.errors) })
  ] });
}
function PasswordCriterion({
  label,
  fulfilled
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: cn("text-xs flex items-center gap-xs font-medium transition-colors", fulfilled ? "text-green-primary" : "text-grey-secondary"), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: fulfilled ? "tick" : "dot", className: "size-4 shrink-0" }),
    label
  ] });
}
export {
  Onboarding as component
};

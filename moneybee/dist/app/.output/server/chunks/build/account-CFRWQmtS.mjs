import { Q as jsxRuntimeExports, a0 as ClientOnly, M as reactExports } from "./server.mjs";
import { u as useTranslation, B as Button, ab as Radio, I as Icon, g as useFormatLanguage, Z as Calendar, a as useFormatDateTime } from "./Tabs-CzpyUi7T.mjs";
import { A as Avatar } from "./Avatar-DDGL3Siw.mjs";
import { T as Tag } from "./create-context-k6HmQ6bB.mjs";
import { b4 as tKeyForUserRole, h as getDateFnsLocale } from "./services-middleware-nMulUXHZ.mjs";
import { e as AppConfigContext, j as useBuilderLayoutData, P as Page, B as BreadCrumbs } from "./router-KSC-NEr8.mjs";
import { L as LanguagePicker } from "./LanguagePicker-CJNlmdOJ.mjs";
import { u as useUnavailabilitySettings } from "./personal-settings-DIa2drLt.mjs";
import { a as Callout } from "./Callout-B0OuRL3q.mjs";
import { M as Modal } from "./Modal-CpYmGWjB.mjs";
import { e as endOfDay } from "./endOfDay-D4VMTcyc.mjs";
import { u as useTheme } from "./ThemeContext-DjRULCu0.mjs";
import { l as logoutFn } from "./auth-Dpo7cXsF.mjs";
import { u as useOrganizationDetails } from "./organization-detail-BGvqBGx1.mjs";
import { s as segment } from "./index-EgDiO0Iq.mjs";
import { g as getFullName } from "./user-Dgp6KqPL.mjs";
import { u as useServerFn } from "./useServerFn-oRH5Nw97.mjs";
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
import "./config--RFGchua.mjs";
import "./LoaderRevalidatorContext-BEuG7sHs.mjs";
import "./set-language-M5uuJ5P9.mjs";
import "./useMutation-BOdeDeAR.mjs";
import "./Select-Dg3p9vJ0.mjs";
import "./isNullish-B8pc8Ntu.mjs";
import "./settings-vUgGED-h.mjs";
import "./settings-Cx4KA480.mjs";
import "./useQuery-Bb0AEcpf.mjs";
import "./useBaseQuery-BqF2iw7Y.mjs";
import "./join-Ce2xPJwm.mjs";
function endOfToday(options) {
  return endOfDay(Date.now(), options);
}
function SetMyselfAvailable() {
  const formatDateTime = useFormatDateTime();
  const { t } = useTranslation(["common", "settings"]);
  const { query: unavailabilityQuery, deleteUnavailability } = useUnavailabilitySettings();
  const [open, setOpen] = reactExports.useState(false);
  const setMeUnavailable = () => {
    deleteUnavailability.mutate();
    setOpen(false);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal.Root, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.Trigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-sm cursor-pointer p-sm rounded-sm hover:bg-red-hover text-grey-primary font-semibold bg-red-primary transition-all duration-100", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "account-circle-off", className: "size-5" }),
      t("settings:current_state_unavailable")
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal.Content, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.Title, { children: t("settings:set_myself_available.title", {
        date: unavailabilityQuery.data?.until ? formatDateTime(unavailabilityQuery.data.until, { dateStyle: "medium" }) : null
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Callout, { variant: "outlined", className: "m-xl", children: t("settings:set_myself_available.description.callout") }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal.Footer, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.FooterButton, { isCloseButton: true, label: t("common:cancel") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Modal.FooterButton,
          {
            label: t("settings:set_myself_available.validate.button"),
            onClick: () => setMeUnavailable(),
            leadingIcon: "account-circle"
          }
        )
      ] })
    ] })
  ] });
}
function SetMyselfUnavailable() {
  const { t } = useTranslation(["common", "settings"]);
  const language = useFormatLanguage();
  const { setUnavailability } = useUnavailabilitySettings();
  const [open, setOpen] = reactExports.useState(false);
  const [dateSelected, setDateSelected] = reactExports.useState(void 0);
  const setMeUnavailable = () => {
    setOpen(false);
    if (dateSelected) {
      setUnavailability.mutate({ until: dateSelected });
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal.Root, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.Trigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-sm cursor-pointer p-sm rounded-sm hover:bg-green-34 text-grey-white font-semibold bg-green-primary transition-all duration-100", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "account-circle", className: "size-5" }),
      t("settings:current_state_available")
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal.Content, { className: "gap-md", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.Title, { children: t("settings:set_myself_unavailable.title") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Callout, { variant: "outlined", className: "m-md", children: t("settings:offline_mode_description") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-row items-center justify-center gap-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Calendar,
        {
          mode: "single",
          disabled: { before: endOfToday() },
          selected: dateSelected,
          onSelect: setDateSelected,
          locale: getDateFnsLocale(language)
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal.Footer, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.FooterButton, { isCloseButton: true, label: t("common:cancel") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Modal.FooterButton,
          {
            label: t("settings:set_myself_unavailable.validate.button"),
            onClick: setMeUnavailable,
            disabled: !dateSelected,
            leadingIcon: "account-circle-off"
          }
        )
      ] })
    ] })
  ] });
}
function UserAvailabilityStatus({ isAutoAssignmentAvailable }) {
  const { query: unavailabilityQuery } = useUnavailabilitySettings();
  if (!isAutoAssignmentAvailable) {
    return null;
  }
  if (unavailabilityQuery.isSuccess && unavailabilityQuery.data.until === null) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(SetMyselfUnavailable, {});
  }
  if (unavailabilityQuery.isSuccess && unavailabilityQuery.data.until !== null) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(SetMyselfAvailable, {});
  }
  return null;
}
function AccountPage() {
  const {
    t
  } = useTranslation(["navigation", "account", "common", "settings"]);
  const {
    currentUser,
    org
  } = useOrganizationDetails();
  const logout = useServerFn(logoutFn);
  const {
    theme,
    setTheme
  } = useTheme();
  const appConfig = AppConfigContext.useValue();
  const {
    versions
  } = appConfig;
  const isFirebaseAuth = appConfig.auth.provider === "firebase";
  const layoutData = useBuilderLayoutData();
  const isAutoAssignmentAvailable = layoutData?.featuresAccess.isAutoAssignmentAvailable ?? false;
  const {
    firstName,
    lastName,
    email
  } = currentUser.actorIdentity;
  const fullName = getFullName({
    firstName,
    lastName
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Page.Main, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Page.Header, { className: "justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(BreadCrumbs, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", onClick: () => {
        void segment.reset();
        void logout({
          data: {}
        });
      }, children: t("common:auth.logout") })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Page.Container, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Page.Content, { width: "fluid", centered: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-lg", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-md", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Avatar, { size: "xl", firstName, lastName }),
        fullName ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl font-semibold tracking-tight", children: fullName }) : null,
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { color: "purple", children: t(tKeyForUserRole(currentUser.role)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { color: "grey", children: org.name })
        ] }),
        email ? /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `mailto:${email}`, className: "text-s text-purple-primary font-medium underline", children: email }) : null
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-surface-card border-grey-border flex flex-col gap-lg rounded-lg border p-md", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex w-[272px] flex-col gap-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-s", children: t("account:language") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(LanguagePicker, {})
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-s", children: t("account:dark_mode") }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Radio.Root, { value: theme, onValueChange: (value) => setTheme(value), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Radio.Item, { value: "light", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-s", children: t("account:theme.light") }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Radio.Item, { value: "dark", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-s", children: t("account:theme.dark") }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(UserAvailabilityStatus, { isAutoAssignmentAvailable })
      ] }),
      isFirebaseAuth ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full max-w-md", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ClientOnly, { fallback: null }) }) : null,
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-grey-secondary flex items-center gap-md text-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "monitor", className: "size-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: versions.appVersion })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "dns", className: "size-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: versions.apiVersion })
        ] })
      ] })
    ] }) }) })
  ] });
}
export {
  AccountPage as component
};

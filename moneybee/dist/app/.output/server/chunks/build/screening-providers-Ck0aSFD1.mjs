import { Q as jsxRuntimeExports, M as reactExports } from "./server.mjs";
import { a as Callout } from "./Callout-B0OuRL3q.mjs";
import { U as Route$_, P as Page } from "./router-KSC-NEr8.mjs";
import { C as CollapsiblePaper } from "./Paper-HCUf48Ym.mjs";
import { u as useLoaderRevalidator } from "./LoaderRevalidatorContext-BEuG7sHs.mjs";
import { o as updateScreeningProvidersPayloadSchema } from "./settings-Cx4KA480.mjs";
import { h as updateScreeningProvidersFn } from "./settings-vUgGED-h.mjs";
import { u as useMutation } from "./useMutation-BOdeDeAR.mjs";
import { u as useServerFn } from "./useServerFn-oRH5Nw97.mjs";
import { h as handleSubmit } from "./form-D2XmDKeG.mjs";
import { u as useForm } from "./useForm-qNQ8S9xN.mjs";
import { z as zt } from "./create-context-k6HmQ6bB.mjs";
import { u as useTranslation, B as Button } from "./Tabs-CzpyUi7T.mjs";
import { S as SelectV2 } from "./Select-Dg3p9vJ0.mjs";
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
import "./short-uuid-fTZYJj_k.mjs";
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
import "./Collapsible-CKx8cmdD.mjs";
import "./index-22HmyALM.mjs";
import "./array-BFSjnO9c.mjs";
import "./isNullish-B8pc8Ntu.mjs";
const useUpdateScreeningProviders = (organizationId) => {
  const updateScreeningProviders = useServerFn(updateScreeningProvidersFn);
  return useMutation({
    mutationKey: ["settings", "organization", "update-screening-providers", organizationId],
    mutationFn: async (payload) => updateScreeningProviders({ data: { ...payload, organizationId } })
  });
};
const SCREENING_FEATURES = [
  { name: "manualSearch", labelKey: "settings:screening_providers.manual_search" },
  { name: "transactionMonitoring", labelKey: "settings:screening_providers.transaction_monitoring" },
  { name: "continuousMonitoring", labelKey: "settings:screening_providers.continuous_screening" }
];
const ScreeningProvidersSettingsPage = ({
  providers,
  organizationId,
  availableProviders
}) => {
  const { t } = useTranslation(["common", "settings"]);
  const updateScreeningProvidersMutation = useUpdateScreeningProviders(organizationId);
  const revalidate = useLoaderRevalidator();
  const [submitError, setSubmitError] = reactExports.useState(null);
  const providerLabels = {
    opensanctions: t("settings:screening_providers.provider.opensanctions"),
    lexisnexis: t("settings:screening_providers.provider.lexisnexis")
  };
  const providerOptions = availableProviders.map((provider) => ({
    value: provider,
    label: providerLabels[provider]
  }));
  const form = useForm({
    defaultValues: {
      manualSearch: providers?.manualSearch ?? "opensanctions",
      transactionMonitoring: providers?.transactionMonitoring ?? "opensanctions",
      continuousMonitoring: providers?.continuousMonitoring ?? "opensanctions"
    },
    onSubmit: ({ value }) => {
      setSubmitError(null);
      updateScreeningProvidersMutation.mutateAsync(value).then((res) => {
        if (res && "error" in res) {
          setSubmitError(res.error);
          return;
        }
        zt.success(t("common:success.save"));
        revalidate();
      }).catch((error) => {
        const message = error instanceof Error ? error.message : t("common:errors.unknown");
        setSubmitError(message);
        zt.error(message);
      });
    },
    validators: {
      onSubmit: updateScreeningProvidersPayloadSchema.omit({ organizationId: true })
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Page.Content, { width: "readable", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CollapsiblePaper.Container, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CollapsiblePaper.Title, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1", children: t("settings:screening_providers") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          variant: "secondary",
          appearance: "stroked",
          onClick: (e) => {
            e.stopPropagation();
            setSubmitError(null);
            form.reset();
          },
          children: t("settings:screening_providers.reset")
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "primary", type: "submit", form: "screening-providers-form", onClick: (e) => e.stopPropagation(), children: t("settings:screening_providers.save") })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CollapsiblePaper.Content, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Callout, { color: "red", icon: "error", iconColor: "red", className: "mb-md", children: submitError }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "form",
        {
          onSubmit: handleSubmit(form),
          className: "grid grid-cols-[300px_1fr] gap-sm items-center",
          id: "screening-providers-form",
          children: SCREENING_FEATURES.map((feature) => /* @__PURE__ */ jsxRuntimeExports.jsx(form.Field, { name: feature.name, children: (field) => /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-s text-grey-primary", children: t(feature.labelKey) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SelectV2,
              {
                value: field.state.value,
                onChange: field.handleChange,
                options: providerOptions,
                placeholder: t("settings:screening_providers.provider.opensanctions"),
                className: "w-fit"
              }
            )
          ] }) }, feature.name))
        }
      )
    ] })
  ] }) });
};
function ScreeningProvidersSettings() {
  const {
    providers,
    organizationId,
    availableProviders
  } = Route$_.useLoaderData();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ScreeningProvidersSettingsPage, { organizationId, providers, availableProviders });
}
export {
  ScreeningProvidersSettings as component
};

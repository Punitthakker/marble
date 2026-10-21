import { Q as jsxRuntimeExports } from "./server.mjs";
import { u as useLoaderRevalidator } from "./LoaderRevalidatorContext-BEuG7sHs.mjs";
import { f as createContinuousScreeningConfigurationFn } from "./continuous-screening-CrmIE_W_.mjs";
import { u as useQueryClient } from "./query-BmG5BEas.mjs";
import { u as useMutation } from "./useMutation-BOdeDeAR.mjs";
import { u as useServerFn } from "./useServerFn-oRH5Nw97.mjs";
import { u as useCallbackRef } from "./use-callback-ref-DoQNLci-.mjs";
import { z as zt, T as Tag } from "./create-context-k6HmQ6bB.mjs";
import { a3 as Route$J, P as Page, B as BreadCrumbs } from "./router-KSC-NEr8.mjs";
import { C as ContinuousScreeningConfigurationStepper } from "./continuous-screenings-CbvELuxK.mjs";
import { L as ListAndTopicDatasetConfigurationBridge, a as Stepper, O as ObjectMapping, D as DatasetSelection, S as ScoringConfiguration, F as FormPagination } from "./ScoringConfiguration-D48zWHlS.mjs";
import { a2 as M, ce as SCREENING_CATEGORY_I18N_KEY_MAP } from "./services-middleware-nMulUXHZ.mjs";
import { u as useTranslation, d as cn } from "./Tabs-CzpyUi7T.mjs";
import { d as getSectionLeafKeys } from "./dataset-utils-CXMfULsv.mjs";
import { u as useListConfigQuery } from "./lists-config-DL0Z5yQK.mjs";
import { u as useGetInboxesQuery } from "./get-inboxes-BXwOxAig.mjs";
import { g as g$2 } from "./sharpstate.es-C0BW2AZi.mjs";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "./auth-middleware-eNRVfU3l.mjs";
import "./logger.server-DV14d0iZ.mjs";
import "./short-uuid-fTZYJj_k.mjs";
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
import "./security-headers.server-BdP3HrPp.mjs";
import "./ThemeContext-DjRULCu0.mjs";
import "./config--RFGchua.mjs";
import "./i18n-instance-store-UssbGYOM.mjs";
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
import "node:crypto";
import "./DatasetSelectionContent-CIYFAVPQ.mjs";
import "./DatasetTag-RXIheIFj.mjs";
import "./Spinner-DmLieYoS.mjs";
import "./capitalize-DXXvpSFO.mjs";
import "./Checkbox-C8nszDsh.mjs";
import "./Collapsible-CKx8cmdD.mjs";
import "./index-22HmyALM.mjs";
import "./ExpandableGroupTagLine-MgT0uQKb.mjs";
import "./Popover-Cp1XdSV2.mjs";
import "./Switch-BV-_0Knl.mjs";
import "./Callout-B0OuRL3q.mjs";
import "./DatatypeOption-CVRIpFKg.mjs";
import "./get-data-model-BUauY6PR.mjs";
import "./data-9UajV2HK.mjs";
import "./data-BXamdbTM.mjs";
import "./useQuery-Bb0AEcpf.mjs";
import "./useBaseQuery-BqF2iw7Y.mjs";
import "./ScreeningThreshold-BK82ESq7.mjs";
import "./ThresholdRange-CusKNWqi.mjs";
import "./screenings-C_YbbaUO.mjs";
import "./cases-C-fVFrVL.mjs";
import "./cases-BQ48izmh.mjs";
const useCreateContinuousScreeningConfigurationMutation = () => {
  const createContinuousScreeningConfiguration = useServerFn(createContinuousScreeningConfigurationFn);
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["continuous-screening", "create-configuration"],
    mutationFn: async (payload) => {
      await createContinuousScreeningConfiguration({ data: payload });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["continuous-screening", "configurations"] });
    }
  });
};
const RecapRow = ({ children }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-row items-center gap-xs h-[25px]", children });
};
const RecapCapsule = ({ children }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Tag,
    {
      color: "grey",
      className: "bg-grey-background [.group\\/recap-valid_&]:bg-surface-card [.group\\/recap-valid_&]:dark:border [.group\\/recap-valid_&]:dark:border-green-primary",
      children
    }
  );
};
const DatasetSelectionRecap = () => {
  const { t } = useTranslation(["continuousScreening", "scenarios"]);
  const listConfigQuery = useListConfigQuery("continuous_monitoring");
  const datasets = ContinuousScreeningConfigurationStepper.select((state) => state.data.datasets);
  const enabledSections = Object.entries(listConfigQuery.data?.filters ?? {}).filter(
    ([key, section]) => !!datasets[key] && section != null
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(RecapRow, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("continuousScreening:creation.datasetSelection.recap.title", { count: enabledSections.length }) }),
    enabledSections.map(([key, section]) => {
      const leafCount = getSectionLeafKeys(section, key).filter((k) => !!datasets[k]).length;
      const sectionLabel = t(`scenarios:sanction.lists.${SCREENING_CATEGORY_I18N_KEY_MAP[key]}`);
      return /* @__PURE__ */ jsxRuntimeExports.jsx(RecapCapsule, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex flex-row items-center gap-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: sectionLabel }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("continuousScreening:creation.datasetSelection.recap.section_items", { count: leafCount }) })
      ] }) }, key);
    })
  ] });
};
const ObjectMappingRecap = () => {
  const { t } = useTranslation(["continuousScreening"]);
  const mappingConfigs = ContinuousScreeningConfigurationStepper.select((state) => state.data.mappingConfigs);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(RecapRow, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("continuousScreening:creation.objectMapping.recap.title", { count: mappingConfigs.length }) }),
    mappingConfigs.map((mappingConfig) => /* @__PURE__ */ jsxRuntimeExports.jsx(RecapCapsule, { children: mappingConfig.objectType }, mappingConfig.objectType))
  ] });
};
const ScoringConfigurationRecap = () => {
  const { t } = useTranslation(["continuousScreening"]);
  const inboxesQuery = useGetInboxesQuery();
  const inboxId = ContinuousScreeningConfigurationStepper.select((state) => state.data.$inboxId);
  const inboxName = ContinuousScreeningConfigurationStepper.select((state) => state.data.$inboxName);
  const matchThreshold = ContinuousScreeningConfigurationStepper.select((state) => state.data.matchThreshold);
  const matchLimit = ContinuousScreeningConfigurationStepper.select((state) => state.data.matchLimit);
  const inboxDisplayName = g$2(() => {
    if (inboxName.value) {
      return inboxName.value;
    }
    return inboxesQuery.data?.inboxes.find((inbox) => inbox.id === inboxId.value)?.name;
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(RecapRow, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("continuousScreening:creation.scoringConfiguration.recap.title") }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-row items-center gap-xs h-[25px]", children: [
      !isNaN(matchThreshold) ? /* @__PURE__ */ jsxRuntimeExports.jsx(RecapCapsule, { children: t("continuousScreening:creation.scoringConfiguration.recap.matchThreshold", { score: matchThreshold }) }) : null,
      !isNaN(matchLimit) ? /* @__PURE__ */ jsxRuntimeExports.jsx(RecapCapsule, { children: t("continuousScreening:creation.scoringConfiguration.recap.matchLimit", { limit: matchLimit }) }) : null,
      inboxId.value || inboxName.value ? /* @__PURE__ */ jsxRuntimeExports.jsx(RecapCapsule, { children: t("continuousScreening:creation.scoringConfiguration.recap.inbox", {
        inbox: inboxDisplayName.value
      }) }) : null
    ] })
  ] });
};
const CreationContent = () => {
  const { t } = useTranslation(["continuousScreening"]);
  const creationStepper = ContinuousScreeningConfigurationStepper.useSharp();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col flex-1 min-h-0 p-lg relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grow min-h-0 overflow-y-auto flex flex-col gap-md max-w-(--breakpoint-lg)", children: [
      M(creationStepper.computed.currentStep.value).with(1, () => /* @__PURE__ */ jsxRuntimeExports.jsx(ObjectMapping, {})).with(2, () => /* @__PURE__ */ jsxRuntimeExports.jsx(DatasetSelection, { useCase: "continuous_monitoring" })).with(3, () => /* @__PURE__ */ jsxRuntimeExports.jsx(ScoringConfiguration, {})).otherwise(() => null),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CreationContentRecap, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FormPagination, { finalButtonText: t("continuousScreening:creation.save_configuration") })
  ] });
};
const CreationContentRecap = () => {
  const creationStepper = ContinuousScreeningConfigurationStepper.useSharp();
  const currentStep = creationStepper.computed.currentStep.value;
  const isValid = creationStepper.computed.isValid.value;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: cn("bg-surface-card rounded-lg border border-grey-border p-md flex flex-col gap-sm", {
        "bg-green-background-light border-green-border dark:bg-transparent dark:border-green-primary text-green-primary group/recap-valid": isValid
      }),
      children: [
        currentStep >= 1 ? /* @__PURE__ */ jsxRuntimeExports.jsx(ObjectMappingRecap, {}) : null,
        currentStep >= 2 ? /* @__PURE__ */ jsxRuntimeExports.jsx(DatasetSelectionRecap, {}) : null,
        currentStep >= 3 ? /* @__PURE__ */ jsxRuntimeExports.jsx(ScoringConfigurationRecap, {}) : null
      ]
    }
  );
};
const CreationPage = ({ name, description }) => {
  const { t } = useTranslation(["continuousScreening", "common"]);
  const revalidate = useLoaderRevalidator();
  const createConfigurationMutation = useCreateContinuousScreeningConfigurationMutation();
  const handleSubmit = useCallbackRef((value) => {
    createConfigurationMutation.mutateAsync(value).then((_) => {
      revalidate();
    }).catch(() => {
      zt.error(t("common:errors.unknown"));
    });
  });
  const creationStepper = ContinuousScreeningConfigurationStepper.createSharp(
    "create",
    {
      mappingConfigs: [],
      matchThreshold: 70,
      matchLimit: 10,
      inboxId: null,
      inboxName: null,
      datasets: {},
      name,
      description
    },
    handleSubmit,
    { initialStep: 1 }
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ContinuousScreeningConfigurationStepper.Provider, { value: creationStepper, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ListAndTopicDatasetConfigurationBridge, { useCase: "continuous_monitoring", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Page.Main, { className: "min-h-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Page.Header, { className: "justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(BreadCrumbs, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stepper, { fromZero: true, getStepLabel: (stepName) => t(`continuousScreening:creation.stepper.${stepName}`) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Page.Container, { className: "min-h-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Page.Content, { padding: "none", className: "min-h-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CreationContent, {}) }) })
  ] }) }) });
};
function CreateContinuousScreeningConfigurationPage() {
  const {
    name,
    description
  } = Route$J.useLoaderData();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(CreationPage, { name, description });
}
export {
  CreateContinuousScreeningConfigurationPage as component
};

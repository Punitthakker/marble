import { Q as jsxRuntimeExports, M as reactExports } from "./server.mjs";
import { D as DataModelExplorerProvider, C as ClientDocumentsPopover, a as DataExplorerPanel, b as ClientTagsList, c as ClientTagsEditSelect, d as DataModelExplorerContext } from "./DataExplorerPanel-CJ4TB_XJ.mjs";
import { a2 as Route$K, P as Page, a1 as BackButton, L as Link, p as pageLayoutGutter, C as CaseStatusBadgeV2, v as clientDetailLinkParams } from "./router-KSC-NEr8.mjs";
import { g as DataFields } from "./DataField-BczNbAhi.mjs";
import { S as Spinner } from "./Spinner-DmLieYoS.mjs";
import { a1 as isAnalyst, a2 as M, bw as SCREENING_CATEGORY_COLORS, aQ as SCREENING_CATEGORIES } from "./services-middleware-nMulUXHZ.mjs";
import { u as useRelatedCasesByObjectQuery, R as ReviewStatusBadge } from "./ReviewStatusBadge-CiLqJzT4.mjs";
import { c as listActiveConfigsForObjectFn, d as listContinuousScreeningConfigurationsFn, e as updateObjectMonitoringFn } from "./continuous-screening-CrmIE_W_.mjs";
import { u as useQuery } from "./useQuery-Bb0AEcpf.mjs";
import { u as useServerFn } from "./useServerFn-oRH5Nw97.mjs";
import { u as useGetAnnotationsQuery } from "./get-annotations-DHuYMH09.mjs";
import { j as getObjectCasesFn, k as getHierarchyFn } from "./data-9UajV2HK.mjs";
import { u as useScoreLatestQuery, S as ScoreDetailPanel } from "./get-score-latest-3W-Su_jV.mjs";
import { D as DataModelContextProvider, u as useDataModel, a as useDataModelFeatureAccess } from "./data-model-Dfj0lN5a.mjs";
import { B as isAccessible, a2 as getGraphExplorationDisplay } from "./feature-access-BSdB6UiC.mjs";
import { u as useOrganizationDetails } from "./organization-detail-BGvqBGx1.mjs";
import { u as useQueryClient } from "./query-BmG5BEas.mjs";
import { u as useTranslation, I as Icon, aq as Card, S as Typo, d as cn, B as Button, an as Panel, T as Trans, M as MenuCommand, a as useFormatDateTime, W as CtaV2ClassName } from "./Tabs-CzpyUi7T.mjs";
import { P as Popover } from "./Popover-Cp1XdSV2.mjs";
import { T as Tag, z as zt } from "./create-context-k6HmQ6bB.mjs";
import { M as MainLinksGraph, m as mainLinksGraphMinHeight, D as DocumentsList } from "./DocumentsList-3HHE9UB7.mjs";
import { G as GraphSessionProvider, u as useGraphSession } from "./GraphSessionContext-DR4cbEeZ.mjs";
import { G as GraphAccessPlaceholder } from "./GraphAccessPlaceholder-DQkS9P6P.mjs";
import { C as ClientComments, S as SessionGraphCanvas } from "./SessionGraphCanvas-YTWrm3Qp.mjs";
import { f as fromUUIDtoSUUID } from "./short-uuid-fTZYJj_k.mjs";
import { u as useMutation } from "./useMutation-BOdeDeAR.mjs";
import { h as handleSubmit } from "./form-D2XmDKeG.mjs";
import { u as useStore } from "./useStore-C3gZU5bu.mjs";
import { u as useForm } from "./useForm-qNQ8S9xN.mjs";
import { M as Modal } from "./Modal-CpYmGWjB.mjs";
import { S as Switch } from "./Switch-BV-_0Knl.mjs";
import { t as toggle } from "./array-BFSjnO9c.mjs";
import { i as getCaseDetailFn } from "./cases-C-fVFrVL.mjs";
import { E as ExpandableGroupTagLine } from "./ExpandableGroupTagLine-MgT0uQKb.mjs";
import { u as useLoaderRevalidator } from "./LoaderRevalidatorContext-BEuG7sHs.mjs";
import { u as useCreateAnnotationMutation } from "./ClientCommentForm-CxGdh-J3.mjs";
import { r as riskAnnotationFormSchema } from "./annotations-Dbgxm4DN.mjs";
import { t } from "./isDeepEqual-DU8kSW6f.mjs";
import { S as SCORING_LEVELS_COLORS, a as SCORING_LEVELS_LABEL_KEYS } from "./display-TKj7AN5a.mjs";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "./use-callback-ref-DoQNLci-.mjs";
import "./useInfiniteQuery-B6vcG-7y.mjs";
import "./useBaseQuery-BqF2iw7Y.mjs";
import "./columnHelper-dCJ-kjEm.mjs";
import "./FormatData-CcbzFq6m.mjs";
import "./ThemeContext-DjRULCu0.mjs";
import "./config--RFGchua.mjs";
import "./maplibre-gl-BcA3NZzV.mjs";
import "./ExternalLink-BlVgwkVd.mjs";
import "./DownloadFilesService-B8XCR5JY.mjs";
import "./download-file-C533i5xX.mjs";
import "./useFormDropzone-DXcqE7tO.mjs";
import "./index-CBe2FUD4.mjs";
import "./TagPreview-DaOqtPxx.mjs";
import "./organization-object-tags-BKGicIcs.mjs";
import "./organization-users-CEJGnALa.mjs";
import "./Avatar-DDGL3Siw.mjs";
import "./Time-CKTfEtti.mjs";
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
import "./sharpstate.es-C0BW2AZi.mjs";
import "./tryCatch-CFf1qt2b.mjs";
import "./isNonNullish-DgEqPJBU.mjs";
import "./mapToObj-C7dg8HnM.mjs";
import "./omit-qKVZGDJg.mjs";
import "./hasAtLeast-BmuNoqMd.mjs";
import "./continuous-screenings-CbvELuxK.mjs";
import "./data-BXamdbTM.mjs";
import "./TagList-5cEiXNQD.mjs";
import "./use-debounced-callback-ref-CXwcVZ7S.mjs";
import "./helpers-D-Bggz_h.mjs";
import "./join-Ce2xPJwm.mjs";
import "./isNullish-B8pc8Ntu.mjs";
import "./isArray-gJc74O_I.mjs";
import "./list-ruleset-versions-B6atqN3Q.mjs";
import "./Select-Dg3p9vJ0.mjs";
import "./scoring-BqfH8vO5.mjs";
import "./user-scoring-BtNQ1U6a.mjs";
import "./get-custom-lists-DJnJIZcp.mjs";
import "./lists-CwYzskHN.mjs";
import "./lists-ZFx0HGFs.mjs";
import "./use-laid-out-graph-DCX5NTEx.mjs";
import "./graph-CqpSMa0d.mjs";
import "./get-scoring-settings-CNgnpjXy.mjs";
import "./graph-BtfBHESi.mjs";
import "./Checkbox-C8nszDsh.mjs";
import "./string-vnnIQF3x.mjs";
import "./value-U5z8H4N0.mjs";
import "./generate-graph-DPfNXSLe.mjs";
import "./user-Dgp6KqPL.mjs";
import "./constructNow-C55voJY_.mjs";
import "./endOfDay-D4VMTcyc.mjs";
import "./list-relations-Wj5vBboU.mjs";
import "./Markdown-Djw5Zezo.mjs";
import "./Code-NcjS_4uC.mjs";
import "./curry-D3P8tFW_.mjs";
import "./ThresholdRange-CusKNWqi.mjs";
import "./cases-BQ48izmh.mjs";
const useActiveConfigsForObjectQuery = (objectType, objectId) => {
  const listActiveConfigsForObject = useServerFn(listActiveConfigsForObjectFn);
  return useQuery({
    queryKey: ["continuous-screening", "active-configs", objectType, objectId],
    queryFn: async () => {
      const result = await listActiveConfigsForObject({ data: { objectType, objectId } });
      return result.configurations;
    }
  });
};
const useGetObjectCasesQuery = (objectType, objectId) => {
  const getObjectCases = useServerFn(getObjectCasesFn);
  return useQuery({
    queryKey: ["data", objectType, objectId, "cases"],
    queryFn: async () => {
      return getObjectCases({ data: { objectType, objectId } });
    }
  });
};
const MAX_ROWS$1 = 3;
const AlertHitsList = ({ alertHitsQuery, showAll = false }) => {
  const { t: t2 } = useTranslation(["common"]);
  const formatDateTime = useFormatDateTime();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: M(alertHitsQuery).with({ isError: true }, () => {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-sm items-center justify-center h-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-s text-grey-secondary text-center", children: t2("common:generic_fetch_data_error") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", onClick: () => alertHitsQuery.refetch(), children: t2("common:retry") })
    ] });
  }).with({ isPending: true }, () => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: t2("common:loading") });
  }).with({ isSuccess: true }, ({ data: { cases } }) => {
    if (cases.length === 0) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-sm text-small", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-grey-secondary", children: t2("common:no_data_to_display") }) });
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-md", children: (showAll ? cases : cases.slice(0, MAX_ROWS$1)).map((caseItem) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-[auto_1fr_auto] gap-sm items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-grey-secondary pe-md", children: formatDateTime(caseItem.createdAt) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-sm truncate", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: caseItem.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CaseStatusBadgeV2, { status: caseItem.status, outcome: caseItem.outcome, variant: "semi-full" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: "/cases/$caseId",
          params: { caseId: fromUUIDtoSUUID(caseItem.id) },
          className: CtaV2ClassName({ variant: "primary", appearance: "stroked" }),
          children: t2("common:open")
        }
      ) })
    ] }, caseItem.id)) });
  }).exhaustive() });
};
const useContinuousScreeningConfigurationsQuery = () => {
  const listContinuousScreeningConfigurations = useServerFn(listContinuousScreeningConfigurationsFn);
  return useQuery({
    queryKey: ["continuous-screening", "configurations"],
    queryFn: async () => {
      const result = await listContinuousScreeningConfigurations();
      return result.configurations;
    }
  });
};
const useUpdateObjectMonitoringMutation = () => {
  const updateObjectMonitoring = useServerFn(updateObjectMonitoringFn);
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["continuous-screening", "update-object-monitoring"],
    mutationFn: async (payload) => {
      return updateObjectMonitoring({ data: payload });
    },
    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["continuous-screening", "active-configs", variables.objectType, variables.objectId]
      });
    }
  });
};
const ConfigureMonitoringForObjectId = ({
  objectType,
  objectId,
  activeConfigurations,
  label
}) => {
  const { t: t2 } = useTranslation(["common", "client360"]);
  const [open, setOpen] = reactExports.useState(false);
  const configurationsQuery = useContinuousScreeningConfigurationsQuery();
  const updateMutation = useUpdateObjectMonitoringMutation();
  const activeStableIds = reactExports.useMemo(() => activeConfigurations.map((config) => config.stableId), [activeConfigurations]);
  const form = useForm({
    defaultValues: {
      configStableIds: activeStableIds,
      skipScreen: true
    },
    onSubmit: async ({ value }) => {
      await updateMutation.mutateAsync(
        {
          objectType,
          objectId,
          configStableIds: value.configStableIds,
          skipScreen: value.skipScreen
        },
        {
          onSuccess: () => zt.success(t2("common:success.save")),
          onError: () => zt.error(t2("common:errors.unknown"))
        }
      );
      setOpen(false);
    }
  });
  const selectedStableIds = useStore(form.store, (state) => state.values.configStableIds);
  const skipScreen = useStore(form.store, (state) => state.values.skipScreen);
  const isDirty = useStore(form.store, (state) => state.isDirty);
  const eligibleConfigurations = reactExports.useMemo(() => {
    const configs = configurationsQuery.data ?? [];
    return configs.filter(
      (config) => config.objectTypes.includes(objectType) && (config.enabled || activeStableIds.includes(config.stableId))
    );
  }, [configurationsQuery.data, objectType, activeStableIds]);
  const selectedConfigurations = reactExports.useMemo(
    () => eligibleConfigurations.filter((config) => selectedStableIds.includes(config.stableId)),
    [eligibleConfigurations, selectedStableIds]
  );
  const handleOpenChange = (nextOpen) => {
    if (nextOpen) {
      form.reset({ configStableIds: activeStableIds, skipScreen: true });
    }
    setOpen(nextOpen);
  };
  const handleToggleConfig = (stableId) => {
    form.setFieldValue("configStableIds", toggle(selectedStableIds, stableId));
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal.Root, { open, onOpenChange: handleOpenChange, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.Trigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { mode: label ? "normal" : "icon", appearance: label ? "link" : "stroked", variant: "secondary", children: [
      label ?? "",
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: label ? "plus" : "edit-square", className: "size-4" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal.Content, { size: "small", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.Title, { children: t2("client360:client_detail.monitoring_hits.put_under_monitoring") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("form", { id: "configure-monitoring-form", onSubmit: handleSubmit(form), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-lg p-lg", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-s font-medium", children: t2("client360:client_detail.monitoring_hits.configurations") }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(MenuCommand.Menu, { persistOnSelect: true, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Trigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                className: cn(
                  "border-grey-border bg-grey-background-light flex min-h-10 w-full items-center gap-sm rounded-md border px-sm py-xs text-start",
                  "hover:border-grey-secondary focus-visible:ring-purple-primary focus-visible:ring-2 focus-visible:outline-hidden"
                ),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-1 flex-wrap gap-xs", children: selectedConfigurations.map((config) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    RemovableConfigTag,
                    {
                      label: config.name,
                      onRemove: () => handleToggleConfig(config.stableId)
                    },
                    config.stableId
                  )) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Icon,
                    {
                      icon: "caret-down",
                      className: "text-grey-secondary size-4 shrink-0 group-radix-state-open:rotate-180 transition-transform duration-200"
                    }
                  )
                ]
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              MenuCommand.Content,
              {
                className: "w-[var(--radix-popover-trigger-width)]",
                side: "bottom",
                align: "start",
                sideOffset: 8,
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs(MenuCommand.List, { children: [
                  eligibleConfigurations.map((config) => {
                    const isSelected = selectedStableIds.includes(config.stableId);
                    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      MenuCommand.Item,
                      {
                        value: config.name,
                        className: "cursor-pointer",
                        onSelect: () => handleToggleConfig(config.stableId),
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grow truncate", children: config.name }),
                          isSelected ? /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "tick", className: "text-purple-primary size-5 shrink-0" }) : null
                        ]
                      },
                      config.stableId
                    );
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Empty, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-grey-secondary px-md py-xs text-xs", children: t2("common:no_data_to_display") }) })
                ] })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Switch,
            {
              id: "skip-initial-screening",
              checked: skipScreen,
              onCheckedChange: (checked) => form.setFieldValue("skipScreen", checked)
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "skip-initial-screening", className: "text-s text-grey-primary", children: t2("client360:client_detail.monitoring_hits.skip_initial_screening") })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal.Footer, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.FooterButton, { isCloseButton: true, label: t2("common:cancel") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Modal.FooterButton,
          {
            form: "configure-monitoring-form",
            type: "submit",
            label: t2("common:validate"),
            isLoading: updateMutation.isPending,
            disabled: !isDirty || updateMutation.isPending
          }
        )
      ] })
    ] })
  ] });
};
const RemovableConfigTag = ({ label, onRemove }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Tag,
    {
      color: "purple",
      size: "small",
      className: "group cursor-pointer hover:bg-purple-primary/20 transition-colors",
      onClick: (event) => {
        event.preventDefault();
        event.stopPropagation();
        onRemove();
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "max-w-[20ch] truncate", children: label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "cross", className: "size-3 shrink-0" })
      ] })
    }
  );
};
const useGetCaseDetailQuery = (caseId) => {
  const getCaseDetail = useServerFn(getCaseDetailFn);
  return useQuery({
    queryKey: ["cases", caseId, "get-details"],
    queryFn: async () => {
      const result = await getCaseDetail({ data: { caseId } });
      return result;
    }
  });
};
const MAX_ROWS = 3;
const MonitoringHitsList = ({ monitoringHitsQuery, showAll = false }) => {
  const { t: t2 } = useTranslation(["common"]);
  const formatDateTime = useFormatDateTime();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: M(monitoringHitsQuery).with({ isError: true }, () => {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-sm items-center justify-center h-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-s text-grey-60 text-center", children: t2("common:generic_fetch_data_error") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", onClick: () => monitoringHitsQuery.refetch(), children: t2("common:retry") })
    ] });
  }).with({ isPending: true }, () => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: t2("common:loading") });
  }).with({ isSuccess: true }, ({ data: { cases } = { cases: [] } }) => {
    if (cases.length === 0) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-sm text-small", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-grey-secondary", children: t2("common:no_data_to_display") }) });
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-md", children: (showAll ? cases : cases.slice(0, MAX_ROWS)).map((caseItem) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-[auto_1fr_auto] gap-sm items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-grey-secondary pe-md", children: formatDateTime(caseItem.createdAt) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-sm truncate", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: caseItem.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CaseStatusBadgeV2, { status: caseItem.status, outcome: caseItem.outcome, variant: "icon-only" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AsyncMonitoringReviewState, { caseId: caseItem.id })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: "/cases/$caseId",
          params: { caseId: fromUUIDtoSUUID(caseItem.id) },
          className: CtaV2ClassName({ variant: "primary", appearance: "stroked" }),
          children: t2("common:open")
        }
      ) })
    ] }, caseItem.id)) });
  }).exhaustive() });
};
function AsyncMonitoringReviewState({ caseId }) {
  const caseDetailQuery = useGetCaseDetailQuery(caseId);
  return M(caseDetailQuery).with({ isPending: true }, () => /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, { className: "size-4" })).with({ isError: true }, () => null).with({ isSuccess: true }, ({ data: { caseDetail } }) => {
    if (!caseDetail || caseDetail.continuousScreenings.length === 0) return null;
    const screening = caseDetail.continuousScreenings[0];
    if (!screening) return null;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(ReviewStatusBadge, { status: screening.status, hitsCount: screening.matches.length });
  }).exhaustive();
}
const useHierarchyQuery = (objectType, objectId, showAll) => {
  const getHierarchy = useServerFn(getHierarchyFn);
  return useQuery({
    queryKey: ["hierarchy", objectType, objectId, showAll],
    queryFn: async () => {
      return getHierarchy({ data: { objectType, objectId, showAll } });
    }
  });
};
const ObjectHierarchy = ({
  showAll = false,
  objectType,
  objectId,
  metadata,
  allMetadata,
  handleExplore: handleExploreProps,
  dataModel
}) => {
  const { t: t2 } = useTranslation(["common", "client360"]);
  const hierarchyQuery = useHierarchyQuery(objectType, objectId, showAll);
  const [selectedParent, _setSelectedParent] = reactExports.useState(null);
  const dataModelExplorerContext = DataModelExplorerContext.useValue();
  const handleExplore = (parent, child) => {
    const navigationOptions = dataModel.find((table) => table.name === parent.objectType)?.navigationOptions;
    const navigationOption = (child.navigationOptionId ? navigationOptions?.find((option) => option.id === child.navigationOptionId) : void 0) ?? navigationOptions?.find((option) => option.targetTableName === child.objectType);
    if (!navigationOption) return;
    dataModelExplorerContext.startNavigation({
      pivotObject: {
        isIngested: true,
        pivotValue: parent.data["object_id"],
        pivotObjectName: parent.objectType
      },
      sourceObject: parent.data,
      sourceTableName: navigationOption.sourceTableName,
      sourceFieldName: navigationOption.sourceFieldName,
      targetTableName: navigationOption.targetTableName,
      filterFieldName: navigationOption.filterFieldName,
      orderingFieldName: navigationOption.orderingFieldName
    });
    handleExploreProps(parent, child);
  };
  return M(hierarchyQuery).with({ isPending: true }, () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-20 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, { className: "size-6" }) })).with({ isError: true }, () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-20 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-center", children: t2("common:generic_fetch_data_error") }) })).with({ isSuccess: true }, ({ data: { hierarchy } = { hierarchy: null } }) => {
    if (!hierarchy) {
      return null;
    }
    const currentParent = selectedParent ?? hierarchy.parents[0];
    const currentParentMetadata = currentParent ? allMetadata.find((m) => m.name === currentParent.objectType) ?? null : null;
    return currentParent ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      TreeWithParent,
      {
        parent: currentParent,
        parentMetadata: currentParentMetadata,
        tree: hierarchy,
        metadata,
        allMetadata,
        dataModel,
        handleExplore
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
      TreeWithoutParent,
      {
        tree: hierarchy,
        metadata,
        allMetadata,
        dataModel,
        handleExplore
      }
    );
  }).exhaustive();
};
const TreeSeparator = ({ className }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "svg",
    {
      className: cn("w-[60px] h-[56px] text-purple-border-light dark:text-purple-border group/separator", className),
      viewBox: "0 0 60 56",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M29.5 0 L29.5 28 Z", strokeWidth: "1.5", stroke: "currentColor" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M29.5 28 L29.5 56 Z",
            strokeWidth: "1.5",
            stroke: "currentColor",
            className: "group-[.last-child]/separator:hidden"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M29 29 L60 29 Z", strokeWidth: "1.5", stroke: "currentColor", className: "group-[.parent]/separator:hidden" })
      ]
    }
  );
};
const TreeWithParent = ({
  parent,
  parentMetadata,
  tree,
  metadata,
  allMetadata,
  dataModel,
  handleExplore
}) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-[60px_60px_1fr]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(TreeItem, { item: parent, metadata: parentMetadata, dataModel, className: "col-span-full" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-subgrid col-span-full group/tree-line h-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TreeSeparator, { className: cn({ "last-child": parent.children.length === 0 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        TreeItem,
        {
          hideAction: true,
          item: tree,
          metadata,
          className: "col-span-2 bg-purple-background-light my-sm dark:bg-purple-primary/10"
        }
      )
    ] }),
    tree.children.map((child, idx) => {
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-subgrid col-span-full", children: [
        parent.children.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(TreeSeparator, { className: "parent" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TreeSeparator, { className: cn({ "last-child": idx === tree.children.length - 1 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TreeItem,
          {
            item: child,
            metadata: allMetadata.find((m) => m.name === child.objectType) ?? null,
            className: "my-sm",
            handleExplore: () => handleExplore(tree, child)
          }
        )
      ] }, `child_${child.objectType}-${idx}`);
    }),
    parent.children.map((child, idx) => {
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-subgrid col-span-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TreeSeparator, { className: cn({ "last-child": idx === parent.children.length - 1 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TreeItem,
          {
            item: child,
            metadata: allMetadata.find((m) => m.name === child.objectType) ?? null,
            className: "my-sm col-span-2",
            handleExplore: () => handleExplore(parent, child)
          }
        )
      ] }, `parent_child_${child.objectType}-${idx}`);
    })
  ] });
};
const TreeWithoutParent = ({ tree, metadata, allMetadata, handleExplore }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-[60px_1fr]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      TreeItem,
      {
        hideAction: true,
        item: tree,
        metadata,
        className: "col-span-full bg-purple-background-light dark:bg-purple-primary/10"
      }
    ),
    tree.children.map((child, idx) => {
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-subgrid col-span-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TreeSeparator, { className: cn({ "last-child": idx === tree.children.length - 1 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TreeItem,
          {
            item: child,
            metadata: allMetadata.find((m) => m.name === child.objectType) ?? null,
            className: "my-sm",
            handleExplore: () => handleExplore(tree, child)
          }
        )
      ] }, `child_${child.objectType}-${idx}`);
    })
  ] });
};
const isHierarchyLeaf = (item) => {
  return Array.isArray(item.data);
};
const TreeItem = ({
  item,
  metadata,
  dataModel,
  className,
  hideAction = false,
  handleExplore
}) => {
  const [modalOpen, setModalOpen] = reactExports.useState(false);
  const showModal = !hideAction && !isHierarchyLeaf(item) && !metadata && !!dataModel;
  const isClickable = !!handleExplore || showModal;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: cn(
          "border border-purple-border-light rounded-md p-sm h-10 flex items-center justify-between gap-md",
          "dark:border-purple-border",
          isClickable && "cursor-pointer hover:bg-purple-background-light dark:hover:bg-purple-primary/10 transition-colors",
          className
        ),
        onClick: handleExplore ?? (showModal ? () => setModalOpen(true) : void 0),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TreeItemLabel, { item, metadata }),
          !hideAction ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            isHierarchyLeaf(item) ? /* @__PURE__ */ jsxRuntimeExports.jsx(TreeItemData, { item, metadata, handleExplore }) : null,
            !isHierarchyLeaf(item) && metadata ? /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/client-detail/$objectType/$objectId",
                params: clientDetailLinkParams(item.objectType, item.data["object_id"]),
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "arrow-up-right", className: "size-5" })
              }
            ) : null,
            showModal ? /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                className: "cursor-pointer shrink-0",
                onClick: (e) => {
                  e.stopPropagation();
                  setModalOpen(true);
                },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "eye", className: "size-5" })
              }
            ) : null
          ] }) : null
        ]
      }
    ),
    showModal && modalOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      Modal.Root,
      {
        open: true,
        onOpenChange: (isOpen) => {
          if (!isOpen) setModalOpen(false);
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal.Content, { size: "large", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.Title, { children: item.objectType }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-y-auto max-h-[calc(100vh-140px)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            DataFields,
            {
              className: "p-md",
              table: item.objectType,
              object: { data: item.data },
              options: { hideLinks: true }
            }
          ) })
        ] })
      }
    ) : null
  ] });
};
const TreeItemData = ({
  item,
  metadata,
  handleExplore
}) => {
  const itemsWithLabels = item.data.map((itemObject) => ({
    itemObject,
    label: String(itemObject[metadata?.caption_field ?? ""] ?? "").trim()
  })).filter(({ label }) => label.length > 0);
  if (!metadata) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        onClick: (e) => {
          e.stopPropagation();
          handleExplore?.();
        },
        className: "cursor-pointer",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "eye", className: "size-5" })
      }
    );
  }
  const tagItems = itemsWithLabels.map(({ itemObject, label }) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { color: "white", className: "min-w-0 max-w-40 shrink overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/client-detail/$objectType/$objectId",
        params: clientDetailLinkParams(item.objectType, itemObject["object_id"]),
        className: "min-w-0 hover:underline",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block truncate", children: label })
      }
    ) }, itemObject["object_id"]);
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-w-0 flex-1 items-center overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    ExpandableGroupTagLine,
    {
      items: tagItems,
      classname: "gap-xs",
      overflowBehavior: "popover",
      moreButton: (overflow, onExpand) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Tag,
        {
          color: "white",
          className: "cursor-pointer shrink-0 hover:bg-purple-primary/20 transition-colors min-w-min",
          onClick: onExpand,
          children: [
            "+",
            overflow
          ]
        }
      )
    }
  ) });
};
const TreeItemLabel = ({
  item,
  metadata
}) => {
  const { t: t2 } = useTranslation(["client360"]);
  const entityName = metadata?.alias || metadata?.name;
  return metadata && !Array.isArray(item.data) ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2xl shrink-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: entityName }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: item.data[metadata.caption_field] })
  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "shrink-0", children: t2("client360:client_detail.hierarchy.related", { objectType: item.objectType }) });
};
function ClientRiskCategoriesEditSelect({
  caseId,
  tableName,
  objectId,
  annotations,
  onAnnotateSuccess
}) {
  const { t: t$1 } = useTranslation(["cases", "common"]);
  const createAnnotationMutation = useCreateAnnotationMutation();
  const categories = annotations.map((annotation) => annotation.payload.tag);
  const revalidate = useLoaderRevalidator();
  const form = useForm({
    defaultValues: {
      caseId,
      tableName,
      objectId,
      type: "risk_tag",
      payload: {
        categories
      }
    },
    validators: {
      onSubmit: riskAnnotationFormSchema,
      onChange: riskAnnotationFormSchema,
      onMount: riskAnnotationFormSchema
    },
    onSubmit({ value }) {
      const addedCategories = value.payload.categories.filter((t2) => !categories.includes(t2));
      const removedAnnotations = annotations.filter((annotation) => {
        return !value.payload.categories.includes(annotation.payload.tag);
      });
      createAnnotationMutation.mutateAsync({
        tableName,
        objectId,
        caseId,
        type: "risk_tag",
        payload: {
          addedCategories,
          removedAnnotations: removedAnnotations.map((annotation) => annotation.id)
        }
      }).then((result) => {
        revalidate();
        if (result.success) {
          onAnnotateSuccess?.();
        } else {
          zt.error(t$1("common:errors.unknown"));
        }
      }).catch(() => {
        zt.error(t$1("common:errors.unknown"));
      });
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit(form), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(form.Field, { name: "payload.categories", children: (field) => /* @__PURE__ */ jsxRuntimeExports.jsxs(MenuCommand.List, { children: [
      SCREENING_CATEGORIES.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsxs(MenuCommand.Item, { value: cat, onSelect: () => field.handleChange((prev) => toggle(prev, cat)), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { color: SCREENING_CATEGORY_COLORS[cat], children: cat }),
        field.state.value.includes(cat) ? /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "tick", className: "text-purple-primary size-5" }) : null
      ] }, cat)),
      /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Empty, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center", children: t$1("cases:case_detail.add_a_tag.empty") }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      form.Subscribe,
      {
        selector: (state) => [t(state.values.payload.categories, categories), state.isSubmitting],
        children: ([isDefaultValue, isSubmitting]) => !isDefaultValue ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-grey-border flex justify-end gap-sm overflow-x-auto border-t p-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.HeadlessItem, { children: isSubmitting ? /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { mode: "icon", type: "submit", disabled: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "spinner", className: "size-4 animate-spin" }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "small", type: "submit", children: t$1("common:confirm") }) }) }) : null
      }
    )
  ] });
}
const TitleBar = ({ objectType, objectId, objectDetails, annotationsQuery, metadata }) => {
  const { t: t2 } = useTranslation(["common", "client360"]);
  const [editTagsOpen, setEditTagsOpen] = reactExports.useState(false);
  const [editRiskCateogoriesOpen, setEditRiskCategoriesOpen] = reactExports.useState(false);
  const queryClient = useQueryClient();
  const entityName = metadata?.alias || metadata.name;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-md items-center min-w-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-xs items-center shrink-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typo, { variant: "title1", children: objectDetails.data[metadata.caption_field] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { color: "grey", children: entityName })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-xs items-center font-normal", children: M(annotationsQuery).with({ isPending: true }, () => /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, { className: "size-4" })).with({ isError: true }, () => /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t2("common:generic_fetch_data_error") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", onClick: () => annotationsQuery.refetch(), children: t2("common:retry") })
    ] })).with({ isSuccess: true }, ({ data: { annotations } }) => {
      const tagsAnnotations = annotations.tags;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        tagsAnnotations.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(ClientTagsList, { tagsIds: tagsAnnotations.map((annotation) => annotation.payload.tag_id) }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-normal text-s text-grey-secondary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Trans,
          {
            t: t2,
            i18nKey: "client360:entity_tags.no_tag_present",
            components: {
              Entity: /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { color: "grey" })
            },
            values: {
              objectType: entityName
            }
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(MenuCommand.Menu, { persistOnSelect: true, open: editTagsOpen, onOpenChange: setEditTagsOpen, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Trigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", mode: "icon", variant: "secondary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "edit-square", className: "size-3.5" }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Content, { side: "bottom", align: "end", sideOffset: 4, className: "w-[340px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            ClientTagsEditSelect,
            {
              tableName: objectType,
              objectId,
              annotations: tagsAnnotations,
              onAnnotateSuccess: () => {
                setEditTagsOpen(false);
                queryClient.invalidateQueries({ queryKey: ["annotations", objectType, objectId] });
              }
            }
          ) })
        ] })
      ] });
    }).exhaustive() }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-px self-stretch bg-grey-border" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-xs items-center font-normal", children: M(annotationsQuery).with({ isPending: true }, () => /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, { className: "size-4" })).with({ isError: true }, () => /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t2("common:generic_fetch_data_error") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", onClick: () => annotationsQuery.refetch(), children: t2("common:retry") })
    ] })).with({ isSuccess: true }, ({ data: { annotations } }) => {
      const riskTopicsAnnotations = annotations.risk_tags;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        riskTopicsAnnotations.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-sm", children: riskTopicsAnnotations.map((annotation) => /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { color: SCREENING_CATEGORY_COLORS[annotation.payload.tag], children: annotation.payload.tag }, annotation.id)) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-normal text-s text-grey-secondary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Trans,
          {
            t: t2,
            i18nKey: "client360:entity_tags.no_screening_tag_present",
            components: {
              Entity: /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { color: "grey" })
            },
            values: {
              objectType: entityName
            }
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          MenuCommand.Menu,
          {
            persistOnSelect: true,
            open: editRiskCateogoriesOpen,
            onOpenChange: setEditRiskCategoriesOpen,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Trigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", mode: "icon", variant: "secondary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "edit-square", className: "size-3.5" }) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Content, { side: "bottom", align: "end", sideOffset: 4, className: "w-[340px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                ClientRiskCategoriesEditSelect,
                {
                  tableName: objectType,
                  objectId,
                  annotations: riskTopicsAnnotations,
                  onAnnotateSuccess: () => {
                    setEditRiskCategoriesOpen(false);
                    queryClient.invalidateQueries({ queryKey: ["annotations", objectType, objectId] });
                  }
                }
              ) })
            ]
          }
        )
      ] });
    }).exhaustive() })
  ] });
};
const ClientDetailPage$1 = ({
  objectType,
  objectId,
  objectDetails,
  metadata,
  allMetadata,
  scoringSettings,
  activeScore,
  userScoringAccess,
  isAdmin
}) => {
  const { t: t2 } = useTranslation(["common", "client360", "user-scoring"]);
  const { currentUser } = useOrganizationDetails();
  const canConfigureUserScoring = isAccessible(userScoringAccess) && !isAnalyst(currentUser);
  const dataModel = useDataModel();
  const graphDisplay = getGraphExplorationDisplay(useDataModelFeatureAccess());
  const annotationsQuery = useGetAnnotationsQuery(objectType, objectId, true);
  const [showExplorer, setShowExplorer] = reactExports.useState(false);
  const [isEditingDocuments, setIsEditingDocuments] = reactExports.useState(false);
  const queryClient = useQueryClient();
  const containerRef = reactExports.useRef(null);
  const [showHierarchyPanel, setShowHierarchyPanel] = reactExports.useState(false);
  const [showMonitoringHitsPanel, setShowMonitoringHitsPanel] = reactExports.useState(false);
  const monitoringHitsQuery = useRelatedCasesByObjectQuery(objectType, objectId);
  const monitoringHitsCount = monitoringHitsQuery.data?.cases.length ?? 0;
  const activeConfigsQuery = useActiveConfigsForObjectQuery(objectType, objectId);
  const [showAlertHitsPanel, setShowAlertHitsPanel] = reactExports.useState(false);
  const alertHitsQuery = useGetObjectCasesQuery(objectType, objectId);
  const alertHitsCount = alertHitsQuery.data?.cases.length ?? 0;
  const [showScorePanel, setShowScorePanel] = reactExports.useState(false);
  const scoreLatestQuery = useScoreLatestQuery(objectType, objectId);
  const scoreForPanel = scoreLatestQuery.data?.score ?? activeScore;
  let [scoreColor, scoreLabel] = ["", ""];
  if (scoringSettings && activeScore) {
    scoreColor = SCORING_LEVELS_COLORS[scoringSettings.maxRiskLevel][activeScore.risk_level] ?? "inherit";
    scoreLabel = t2(
      SCORING_LEVELS_LABEL_KEYS[scoringSettings.maxRiskLevel][activeScore.risk_level] ?? activeScore.risk_level.toString()
    );
  }
  const handleScoreClick = () => setShowScorePanel(true);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(DataModelExplorerProvider, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Page.Main, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Page.Header, { className: "gap-md", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(BackButton, { back: "/client-detail" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TitleBar,
          {
            objectType,
            objectId,
            objectDetails,
            annotationsQuery,
            metadata
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Page.Container, { ref: containerRef, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Page.Content, { width: "table", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-md", children: [
          isAccessible(userScoringAccess) ? scoringSettings && activeScore ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              className: "flex flex-col gap-sm border rounded-lg p-md py-sm w-[180px] self-start shrink-0 items-start",
              style: { borderColor: scoreColor, backgroundColor: `${scoreColor}20` },
              onClick: handleScoreClick,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-small", children: t2("client360:client_detail.risk_level") }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-xs items-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-4 rounded-full", style: { backgroundColor: scoreColor } }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: scoreLabel }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "eye", className: "size-4" })
                ] })
              ]
            }
          ) : canConfigureUserScoring ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-purple-border bg-purple-background-light flex flex-col items-center gap-sm rounded-lg border p-md py-sm w-[180px] self-start shrink-0 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "comet", className: "size-10 shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs", children: t2("client360:client_detail.risk_level") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/user-scoring",
                className: "border-purple-primary text-purple-primary text-xs font-medium w-full rounded-lg border py-xs text-center hover:bg-purple-primary/10 transition-colors",
                children: t2("client360:client_detail.risk_level.configure")
              }
            )
          ] }) : null : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-purple-border bg-purple-background-light flex flex-col items-center gap-sm rounded-lg border p-md py-sm w-[180px] self-start shrink-0 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "comet", className: "size-10 shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs", children: t2("client360:client_detail.risk_level") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "https://checkmarble.com/upgrade",
                target: "_blank",
                rel: "noreferrer",
                className: "border-purple-primary text-purple-primary text-xs font-medium w-full rounded-lg border py-xs text-center hover:bg-purple-primary/10 transition-colors",
                children: t2("client360:client_detail.risk_level.upgrade")
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: cn(
                "grid grid-cols-1 grow",
                pageLayoutGutter.gap,
                graphDisplay !== "hidden" && "lg:grid-cols-2"
              ),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-[140px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  DataFields,
                  {
                    table: objectType,
                    object: objectDetails,
                    options: { displayExpandButton: true, maxVisibleFields: 12 }
                  }
                ) }) }),
                graphDisplay === "graph" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("flex flex-1 flex-col gap-sm", mainLinksGraphMinHeight), children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex shrink-0 justify-between items-center", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Typo, { variant: "title2", children: t2("cases:manager.clients.main_links_title") }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(PanelGraphLinks, { objectType, objectId })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(MainLinksGraph, { objectType, objectId, dataModel })
                ] }) : graphDisplay === "placeholder" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("flex flex-1 flex-col gap-sm", mainLinksGraphMinHeight), children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Typo, { variant: "title2", children: t2("cases:manager.clients.main_links_title") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(GraphAccessPlaceholder, {})
                ] }) : null
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("grid grid-cols-1 lg:grid-cols-[7fr_5fr]", pageLayoutGutter.gap), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("flex flex-col", pageLayoutGutter.gap), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "flex flex-col gap-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium", children: t2("client360:client_detail.monitoring_hits.title") }),
                monitoringHitsCount > 3 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { appearance: "link", onClick: () => setShowMonitoringHitsPanel(true), children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t2("common:show") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "eye", className: "size-4" })
                ] }) : null
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-sm bg-grey-background-light border border-grey-border py-sm px-md rounded-md mb-sm", children: M(activeConfigsQuery).with({ isPending: true }, () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center items-center grow py-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, { className: "size-4" }) })).with({ isError: true }, () => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-s text-grey-secondary", children: t2("common:generic_fetch_data_error") })).with({ isSuccess: true }, ({ data: activeConfigurations }) => {
                const hasActiveMonitoring = activeConfigurations.length > 0;
                return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: cn(
                        "flex items-center gap-xs shrink-0",
                        hasActiveMonitoring ? "text-green-primary" : "text-grey-secondary"
                      ),
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "span",
                          {
                            className: cn(
                              "size-2 rounded-full",
                              hasActiveMonitoring ? "bg-green-primary" : "bg-grey-secondary"
                            )
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-s font-medium", children: hasActiveMonitoring ? t2("client360:client_detail.monitoring_hits.active_monitoring") : t2("client360:client_detail.monitoring_hits.no_active_monitoring") })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-xs grow items-center", children: [
                    activeConfigurations.map((config) => /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { color: "purple", size: "small", children: config.name }, config.stableId)),
                    isAdmin ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                      ConfigureMonitoringForObjectId,
                      {
                        objectType,
                        objectId,
                        activeConfigurations,
                        label: hasActiveMonitoring ? void 0 : t2("client360:client_detail.monitoring_hits.configure")
                      }
                    ) : null
                  ] })
                ] });
              }).exhaustive() }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(MonitoringHitsList, { monitoringHitsQuery })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "flex flex-col gap-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium", children: t2("client360:client_detail.alert_hits.title") }),
                alertHitsCount > 3 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { appearance: "link", onClick: () => setShowAlertHitsPanel(true), children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t2("common:show") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "eye", className: "size-4" })
                ] }) : null
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(AlertHitsList, { alertHitsQuery })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "flex flex-col gap-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium", children: t2("client360:client_detail.hierarchy.title") }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { appearance: "link", onClick: () => setShowHierarchyPanel(true), children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t2("common:show") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "eye", className: "size-4" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              ObjectHierarchy,
              {
                objectType,
                objectId,
                metadata,
                allMetadata,
                dataModel,
                handleExplore: () => setShowExplorer(true)
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium", children: t2("client360:client_detail.documents.title") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Popover.Root, { open: isEditingDocuments, onOpenChange: setIsEditingDocuments, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Popover.Trigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "secondary", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "add-circle", className: "size-4" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t2("client360:client_detail.documents.add_button") })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Popover.Content,
                {
                  side: "bottom",
                  align: "end",
                  sideOffset: 4,
                  collisionPadding: 10,
                  className: "w-[340px]",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    ClientDocumentsPopover,
                    {
                      tableName: objectType,
                      objectId,
                      onAnnotateSuccess: () => {
                        setIsEditingDocuments(false);
                        queryClient.invalidateQueries({ queryKey: ["annotations", objectType, objectId] });
                      }
                    }
                  )
                }
              )
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "@container", children: /* @__PURE__ */ jsxRuntimeExports.jsx(DocumentsList, { objectType, objectId }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium", children: t2("client360:client_detail.comments.title") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            ClientComments,
            {
              objectType,
              objectId,
              annotationsQuery,
              root: containerRef
            }
          )
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Panel.Root, { open: showAlertHitsPanel, onOpenChange: setShowAlertHitsPanel, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Panel.Container, { size: "medium", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Panel.Content, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Panel.Header, { children: t2("client360:client_detail.alert_hits.panel_title") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AlertHitsList, { alertHitsQuery, showAll: true })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Panel.Root, { open: showMonitoringHitsPanel, onOpenChange: setShowMonitoringHitsPanel, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Panel.Container, { size: "medium", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Panel.Content, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Panel.Header, { children: t2("client360:client_detail.monitoring_hits.panel_title") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(MonitoringHitsList, { monitoringHitsQuery, showAll: true })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Panel.Root, { open: showHierarchyPanel, onOpenChange: setShowHierarchyPanel, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Panel.Container, { size: "small", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Panel.Content, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Panel.Header, { children: t2("client360:client_detail.hierarchy.title") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        ObjectHierarchy,
        {
          showAll: true,
          objectType,
          objectId,
          metadata,
          allMetadata,
          dataModel,
          handleExplore: () => setShowExplorer(true)
        }
      )
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DataExplorerPanel, { open: showExplorer, onOpenChange: setShowExplorer, dataModel }),
    scoringSettings && scoreForPanel && isAccessible(userScoringAccess) ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      ScoreDetailPanel,
      {
        open: showScorePanel,
        onOpenChange: setShowScorePanel,
        objectType,
        activeScore: scoreForPanel,
        scoringSettings
      }
    ) : null
  ] });
};
const PanelGraphLinks = ({ objectType, objectId }) => {
  const [open, setOpen] = reactExports.useState(false);
  const { t: t2 } = useTranslation(["common"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Panel.Root, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Panel.Trigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "secondary", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "eye", className: "size-4" }),
      t2("common:see_all")
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Panel.Container, { size: "full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Panel.Content, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Panel.Header, { children: t2("cases:manager.clients.main_links_title") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        GraphSessionProvider,
        {
          initialRecord: { recordType: objectType, recordId: objectId },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(LinksGraphBody, {})
        },
        `${objectType}:${objectId}`
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Panel.Footer, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Panel.FooterButton, { label: t2("common:close"), isCloseButton: true, onClick: () => setOpen(false) }) })
    ] }) })
  ] });
};
function LinksGraphBody() {
  const { isGeneratingGraph } = useGraphSession();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-0 flex-1 flex-col overflow-y-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    SessionGraphCanvas,
    {
      placeholder: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: cn("min-h-0 flex-1", isGeneratingGraph && "animate-pulse bg-grey-background") }),
      withCard: false
    }
  ) });
}
function ClientDetailPage() {
  const loaderData = Route$K.useLoaderData();
  const {
    objectType,
    objectId,
    objectDetails,
    metadata,
    allMetadata,
    dataModel,
    dataModelFeatureAccess,
    scoringSettings,
    activeScore,
    userScoringAccess,
    isAdmin
  } = loaderData;
  if (!metadata) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(DataModelContextProvider, { dataModel, dataModelFeatureAccess, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ClientDetailPage$1, { objectType, objectId, objectDetails, metadata, allMetadata, scoringSettings, activeScore, userScoringAccess, isAdmin }, `${objectType}_${objectId}`) });
}
export {
  ClientDetailPage as component
};

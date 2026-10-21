import { M as reactExports, Q as jsxRuntimeExports } from "./server.mjs";
import { u as useTranslation, S as Typo, B as Button, I as Icon, x as reactDomExports, a as useFormatDateTime, an as Panel, c as clsx, g as useFormatLanguage, f as formatDateTimeWithoutPresets, Y as formatDuration, M as MenuCommand, d as cn, a8 as useSelector, a6 as Input } from "./Tabs-CzpyUi7T.mjs";
import { a2 as M, aS as z, T as Temporal, bg as makeDatasetsMap, bh as applyUniqueLexisNexisSectionDefault, bF as syncSharpDatasets, bj as applyAliveDeceasedDefaults, bi as getCanonicalSelectedKeys, bk as isGlobalTopicSwitchSelected, bl as setGlobalTopicSwitch } from "./services-middleware-nMulUXHZ.mjs";
import { K as Route$16, P as Page, I as screeningsI18n, D as DateRangeFilter, J as TooltipV2 } from "./router-KSC-NEr8.mjs";
import { L as ListAndTopicDatasetConfiguration, D as DatasetSelectionContent } from "./DatasetSelectionContent-CIYFAVPQ.mjs";
import { S as ScreeningThreshold } from "./ScreeningThreshold-BK82ESq7.mjs";
import { S as Spinner } from "./Spinner-DmLieYoS.mjs";
import { S as SEARCH_ENTITIES } from "./screening-entity-cwm_Y847.mjs";
import { s as saveFreeformSearchFn, l as listSavedFreeformSearchesFn, a as getFreeformSearchFn, f as freeformSearchFn, b as getListFreeFormSearchPresetsFn, c as createFreeFormSearchPresetFn, d as deleteFreeFormSearchPresetFn } from "./screenings-C_YbbaUO.mjs";
import { u as useQueryClient } from "./query-BmG5BEas.mjs";
import { u as useQuery } from "./useQuery-Bb0AEcpf.mjs";
import { u as useMutation } from "./useMutation-BOdeDeAR.mjs";
import { u as useServerFn } from "./useServerFn-oRH5Nw97.mjs";
import { u as useListConfigQuery } from "./lists-config-DL0Z5yQK.mjs";
import { u as useOrganizationDetails } from "./organization-detail-BGvqBGx1.mjs";
import { u as useForm } from "./useForm-qNQ8S9xN.mjs";
import { T as Tag, z as zt } from "./create-context-k6HmQ6bB.mjs";
import { P as Popover } from "./Popover-Cp1XdSV2.mjs";
import { S as SelectV2 } from "./Select-Dg3p9vJ0.mjs";
import { s as setAdditionalFields } from "./set-additional-fields-BAjwURJS.mjs";
import { d as getSectionLeafKeys, g as getAvailableGlobalTopicConfigs } from "./dataset-utils-CXMfULsv.mjs";
import { M as Modal } from "./Modal-CpYmGWjB.mjs";
import { E as EntitySearchFormProvider, a as EntityTypePopover } from "./EntityTypePopover-CltI2FY_.mjs";
import { t } from "./isDeepEqual-DU8kSW6f.mjs";
import { u as useStore } from "./useStore-C3gZU5bu.mjs";
import { S as Switch } from "./Switch-BV-_0Knl.mjs";
import { T as ThresholdRange } from "./ThresholdRange-CusKNWqi.mjs";
import { a as Callout } from "./Callout-B0OuRL3q.mjs";
import { g as getSortedPayloadByTopics } from "./match-sorting-rekCDl1i.mjs";
import { T as TopicsDisplay, E as EntityDatasetsList, M as MatchDetails, I as IconDot, F as FreeformMatchCard } from "./FreeformMatchCard-ClTnPmkJ.mjs";
import { a as usePaginationsButton, C as CursorPaginationButtons } from "./decisions--eKWwSYj.mjs";
import { u as useOrganizationUsers } from "./organization-users-CEJGnALa.mjs";
import { o as omitUndefined } from "./omit-undefined-_jZUo5xa.mjs";
import { A as Avatar } from "./Avatar-DDGL3Siw.mjs";
import { C as Collapsible } from "./Collapsible-CKx8cmdD.mjs";
import { S as Separator } from "./Separator-D4aEwiuL.mjs";
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
import "./unique-cniTya2T.mjs";
import "./graph-pivots-Bblee9BN.mjs";
import "./scenarios-C5R2TE8p.mjs";
import "./DatasetTag-RXIheIFj.mjs";
import "./capitalize-DXXvpSFO.mjs";
import "./Checkbox-C8nszDsh.mjs";
import "./ExpandableGroupTagLine-MgT0uQKb.mjs";
import "./DataField-BczNbAhi.mjs";
import "./data-9UajV2HK.mjs";
import "./data-BXamdbTM.mjs";
import "./tryCatch-CFf1qt2b.mjs";
import "./isNonNullish-DgEqPJBU.mjs";
import "./data-model-Dfj0lN5a.mjs";
import "./mapToObj-C7dg8HnM.mjs";
import "./omit-qKVZGDJg.mjs";
import "./hasAtLeast-BmuNoqMd.mjs";
import "./ExternalLink-BlVgwkVd.mjs";
import "./useBaseQuery-BqF2iw7Y.mjs";
import "./isNullish-B8pc8Ntu.mjs";
import "./keys-DjoJs5YL.mjs";
import "./index-22HmyALM.mjs";
const PrintHeader = ({
  title,
  subtitle,
  showTimestamp = true,
  userName,
  children
}) => {
  const { t: t2 } = useTranslation(["common"]);
  const formatDateTime = useFormatDateTime();
  const timestamp = formatDateTime(/* @__PURE__ */ new Date(), { dateStyle: "short", timeStyle: "short" });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-md border-b border-grey-border pb-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Typo, { variant: "title1", children: title }),
    subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-s text-grey-placeholder mt-xs", children: subtitle }),
    showTimestamp && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-grey-placeholder mt-xs", children: t2("common:print.generated_at_by", {
      date: timestamp,
      user: userName,
      defaultValue: `Generated on ${timestamp}${userName ? ` by ${userName}` : ""}`
    }) }),
    children
  ] });
};
const PrintSection = ({ title, children, className }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: clsx("mb-md break-inside-avoid", className), children: [
    title && /* @__PURE__ */ jsxRuntimeExports.jsx(Typo, { variant: "title2", children: title }),
    children
  ] });
};
function copyStylesToWindow(printWindow) {
  const styleSheets = Array.from(document.styleSheets);
  styleSheets.forEach((sheet) => {
    try {
      if (sheet.href) {
        const link = printWindow.document.createElement("link");
        link.rel = "stylesheet";
        link.href = sheet.href;
        printWindow.document.head.appendChild(link);
      } else if (sheet.cssRules) {
        const style = printWindow.document.createElement("style");
        const cssRules = Array.from(sheet.cssRules).map((rule) => rule.cssText).join("\n");
        style.textContent = cssRules;
        printWindow.document.head.appendChild(style);
      }
    } catch {
      if (sheet.href) {
        const link = printWindow.document.createElement("link");
        link.rel = "stylesheet";
        link.href = sheet.href;
        printWindow.document.head.appendChild(link);
      }
    }
  });
  const printStyles = printWindow.document.createElement("style");
  printStyles.textContent = `
    @media print {
      body {
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
      }
      .no-print {
        display: none !important;
      }
    }
    body {
      font-family: system-ui, -apple-system, sans-serif;
      background: white;
      margin: 0;
      padding: 1rem;
    }
    .print-container {
      width: 100%;
    }
    @media print {
      body {
        padding: 0;
      }
    }
  `;
  printWindow.document.head.appendChild(printStyles);
}
const PrintView = ({ children, trigger, title = "Print", onBeforePrint }) => {
  const [printWindow, setPrintWindow] = reactExports.useState(null);
  const [container, setContainer] = reactExports.useState(null);
  const isInitializedRef = reactExports.useRef(false);
  const handlePrint = reactExports.useCallback(() => {
    onBeforePrint?.();
    const newWindow = window.open("", "_blank", "width=800,height=600");
    if (!newWindow) {
      console.error("Failed to open print window. Check popup blocker settings.");
      return;
    }
    newWindow.document.title = title;
    const charset = newWindow.document.createElement("meta");
    charset.setAttribute("charset", "utf-8");
    newWindow.document.head.appendChild(charset);
    const viewport = newWindow.document.createElement("meta");
    viewport.name = "viewport";
    viewport.content = "width=device-width, initial-scale=1";
    newWindow.document.head.appendChild(viewport);
    copyStylesToWindow(newWindow);
    const printRoot = newWindow.document.createElement("div");
    printRoot.id = "print-root";
    printRoot.className = "print-container";
    newWindow.document.body.appendChild(printRoot);
    setPrintWindow(newWindow);
    setContainer(printRoot);
    isInitializedRef.current = true;
  }, [title, onBeforePrint]);
  reactExports.useEffect(() => {
    if (printWindow && container && isInitializedRef.current) {
      const timeoutId = setTimeout(() => {
        printWindow.print();
      }, 500);
      return () => clearTimeout(timeoutId);
    }
  }, [printWindow, container]);
  reactExports.useEffect(() => {
    return () => {
      if (printWindow && !printWindow.closed) {
        printWindow.close();
      }
    };
  }, [printWindow]);
  const triggerWithHandler = reactExports.cloneElement(trigger, {
    onClick: (e) => {
      trigger.props.onClick?.(e);
      handlePrint();
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    triggerWithHandler,
    container && printWindow && !printWindow.closed && reactDomExports.createPortal(children, container)
  ] });
};
const useFreeformSearchMutation = () => {
  const freeformSearch = useServerFn(freeformSearchFn);
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["screening", "freeform-search"],
    mutationFn: async (input) => {
      return freeformSearch({ data: input });
    },
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: ["screening", "saved-searches"] });
    }
  });
};
const useSaveFreeformSearchMutation = () => {
  const queryClient = useQueryClient();
  const saveFreeformSearch = useServerFn(saveFreeformSearchFn);
  return useMutation({
    mutationKey: ["screening", "save-freeform-search"],
    mutationFn: async (input) => {
      await saveFreeformSearch({ data: input });
    },
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: ["screening", "saved-searches"] });
    }
  });
};
const useSavedFreeformSearchesQuery = (filters = {}) => {
  const listSavedSearches = useServerFn(listSavedFreeformSearchesFn);
  return useQuery({
    queryKey: ["screening", "saved-searches", filters],
    queryFn: async () => {
      return listSavedSearches({ data: filters });
    }
  });
};
const useGetFreeformSearchQuery = (id) => {
  const getFreeformSearch = useServerFn(getFreeformSearchFn);
  return useQuery({
    queryKey: ["screening", "freeform-search", id],
    queryFn: async () => {
      return getFreeformSearch({ data: { id } });
    }
  });
};
const freeformSearchPresetsQueryKey = ["screening", "freeform-search", "presets"];
const useListFreeFormSearchPresetsQuery = () => {
  const getListFFS = useServerFn(getListFreeFormSearchPresetsFn);
  return useQuery({
    queryKey: freeformSearchPresetsQueryKey,
    queryFn: async () => {
      const result = await getListFFS();
      return result;
    }
  });
};
const useCreateFreeFormSearchPresetMutation = () => {
  const createFreeFormSearchPreset = useServerFn(createFreeFormSearchPresetFn);
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["screening", "freeform-search", "preset", "create"],
    mutationFn: async ({ name, value }) => {
      return createFreeFormSearchPreset({ data: { name, value } });
    },
    onSuccess: (result) => {
      if (!result.success) return;
      queryClient.setQueryData(freeformSearchPresetsQueryKey, (old = []) => [
        ...old.filter((preset) => preset.id !== result.preset.id),
        result.preset
      ]);
      void queryClient.invalidateQueries({ queryKey: freeformSearchPresetsQueryKey });
    }
  });
};
const useDeleteFreeFormSearchPresetMutation = () => {
  const deleteFreeFormSearchPreset = useServerFn(deleteFreeFormSearchPresetFn);
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["screening", "freeform-search", "preset", "delete"],
    mutationFn: async ({ id }) => {
      return deleteFreeFormSearchPreset({ data: { id } });
    },
    onSuccess: (_, { id }) => {
      queryClient.setQueryData(
        freeformSearchPresetsQueryKey,
        (old) => old?.filter((preset) => preset.id !== id)
      );
      void queryClient.invalidateQueries({ queryKey: freeformSearchPresetsQueryKey });
    }
  });
};
const SECTION_I18N_KEYS = {
  sanctions: "sanctions",
  peps: "peps",
  "adverse-media": "adverse_media",
  "third-parties": "third_parties",
  custom: "custom",
  global: "global"
};
const DatasetsPopover = ({ selectedDatasets, onApply, disabled }) => {
  const { t: t2 } = useTranslation([...screeningsI18n, "scenarios"]);
  const listConfigQuery = useListConfigQuery("manual_search");
  const listSharp = ListAndTopicDatasetConfiguration.useSharp();
  const [open, setOpen] = reactExports.useState(false);
  const tagRef = reactExports.useRef(null);
  const listConfig = listConfigQuery.data;
  const syncFromSelected = () => {
    listSharp.update((state) => {
      if (listConfig) {
        syncSharpDatasets(state.datasets, selectedDatasets, {
          filters: listConfig.filters,
          provider: listConfig.provider
        });
      } else {
        syncSharpDatasets(state.datasets, selectedDatasets);
      }
    });
  };
  const handleOpenChange = (isOpen) => {
    if (disabled) return;
    if (isOpen) {
      syncFromSelected();
    }
    setOpen(isOpen);
  };
  const handleApply = () => {
    if (listConfig) {
      listSharp.update((state) => {
        applyUniqueLexisNexisSectionDefault(state.datasets, listConfig.filters, listConfig.provider);
      });
    }
    onApply(getCanonicalSelectedKeys(listSharp.value.datasets));
    setOpen(false);
  };
  const handleCancel = () => {
    syncFromSelected();
    setOpen(false);
  };
  const hasSelection = selectedDatasets.filter((d) => !d.startsWith("global")).length > 0;
  const selectionMap = reactExports.useMemo(() => {
    const map = makeDatasetsMap(selectedDatasets);
    if (listConfig) {
      applyUniqueLexisNexisSectionDefault(map, listConfig.filters, listConfig.provider);
    }
    return map;
  }, [selectedDatasets, listConfig]);
  const sectionTags = reactExports.useMemo(() => {
    const data = listConfigQuery.data;
    if (!data || !hasSelection) return [];
    return Object.entries(data.filters).filter(([key]) => key !== "global").flatMap(([key, section]) => {
      if (!section) return [];
      const sectionKey = key;
      const isSectionEnabled = !!selectionMap[sectionKey];
      const count = getSectionLeafKeys(section, sectionKey).filter((k) => selectionMap[k]).length;
      if (!isSectionEnabled && count === 0) return [];
      return [{ key: sectionKey, count, isEmpty: isSectionEnabled && count === 0 }];
    });
  }, [listConfigQuery.data, selectionMap, hasSelection]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-sm relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(MenuCommand.Menu, { open, onOpenChange: handleOpenChange, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Trigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", disabled, className: "flex items-center gap-sm flex-wrap", ref: tagRef, children: hasSelection ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      sectionTags.map(({ key, count, isEmpty }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Tag,
        {
          color: disabled ? "grey" : "purple",
          className: "cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium capitalize", children: [
            t2(`scenarios:sanction.lists.${SECTION_I18N_KEYS[key]}`),
            isEmpty ? ` (${t2("scenarios:sanction.lists.no_lists_selected")})` : ` (${count})`
          ] })
        },
        key
      )),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "plus", className: "size-4 text-grey-secondary" })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-xs text-grey-placeholder cursor-pointer", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "plus", className: "size-4  " }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t2("screenings:freeform_search.filter_by_list") })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Content, { align: "start", sideOffset: 4, className: "w-[280px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(DatasetSelectionContent, { useCase: "manual_search", onApply: handleApply, onCancel: handleCancel }) })
  ] }) });
};
function DeleteFreeformSearchPresetButton({ preset, onDeleted }) {
  const { t: t2 } = useTranslation(["common", "screenings"]);
  const [open, setOpen] = reactExports.useState(false);
  const descriptionId = reactExports.useId();
  const deletePresetMutation = useDeleteFreeFormSearchPresetMutation();
  const handleDelete = async () => {
    try {
      await deletePresetMutation.mutateAsync({ id: preset.id });
      setOpen(false);
      onDeleted();
      zt.success(t2("common:success.deleted"));
    } catch {
      zt.error(t2("common:errors.unknown"));
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal.Root, { open, onOpenChange: (nextOpen) => !deletePresetMutation.isPending && setOpen(nextOpen), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(TooltipV2.Provider, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TooltipV2.Tooltip, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TooltipV2.TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.Trigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          type: "button",
          variant: "secondary",
          appearance: "stroked",
          size: "medium",
          "aria-label": t2("screenings:freeform_search.delete_preset"),
          className: "me-auto",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "delete", className: "size-5 text-red-primary", "aria-hidden": "true" })
        }
      ) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TooltipV2.TooltipContent, { children: t2("screenings:freeform_search.delete_preset") })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal.Content, { size: "small", "aria-describedby": descriptionId, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.Title, { children: t2("screenings:freeform_search.delete_preset") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { id: descriptionId, className: "p-lg text-s", children: t2("screenings:freeform_search.delete_preset_confirmation", { name: preset.name }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal.Footer, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.FooterButton, { isCloseButton: true, label: t2("common:cancel"), disabled: deletePresetMutation.isPending }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Modal.FooterButton,
          {
            type: "button",
            variant: "destructive",
            label: t2("common:delete"),
            leadingIcon: "delete",
            isLoading: deletePresetMutation.isPending,
            onClick: handleDelete
          }
        )
      ] })
    ] })
  ] });
}
function buildFreeformSearchPreset(input) {
  return {
    datasets: [...input.datasets].toSorted(),
    threshold: input.threshold
  };
}
function normalizeFreeformSearchPreset(preset, defaults) {
  return {
    datasets: [...preset.datasets ?? defaults.datasets].toSorted(),
    threshold: preset.threshold ?? defaults.threshold
  };
}
function isFreeformSearchPresetDirty(current, applied) {
  return !t(current, applied);
}
function getDefaultManualSearchDatasets(listConfig, provider) {
  const initial = {};
  applyAliveDeceasedDefaults(initial, listConfig, "manual_search");
  applyUniqueLexisNexisSectionDefault(initial, listConfig, provider);
  return getCanonicalSelectedKeys(initial);
}
function hasFilledAdditionalFields(fields, entityType = "Thing") {
  return SEARCH_ENTITIES[entityType].fields.some((key) => key !== "name" && !!fields?.[key]?.trim());
}
const LIMIT_OPTIONS = [10, 20, 30, 40, 50];
const DEFAULT_LIMIT = 10;
const LimitPopover = ({
  disabled,
  originalValue,
  onApply,
  onApplyDatasets,
  selectedDatasets
}) => {
  const { t: t2 } = useTranslation(screeningsI18n);
  const listConfigQuery = useListConfigQuery("manual_search");
  const listSharp = ListAndTopicDatasetConfiguration.useSharp();
  const [open, setOpen] = reactExports.useState(false);
  const [draftLimit, setDraftLimit] = reactExports.useState(void 0);
  const form = useFormManuallSearch();
  const committedLimit = useStore(form.store, (state) => state.values.limit);
  const value = draftLimit ?? committedLimit;
  const tagRef = reactExports.useRef(null);
  const listConfig = listConfigQuery.data;
  const availableGlobalTopicConfigs = listConfig ? getAvailableGlobalTopicConfigs(listConfig.filters) : [];
  const includeDeceasedSelected = listConfig != null && availableGlobalTopicConfigs.some((config) => isGlobalTopicSwitchSelected(listSharp.value.datasets, config));
  const hasCustomValue = committedLimit !== void 0 && committedLimit !== DEFAULT_LIMIT || !!includeDeceasedSelected;
  const handleOpenChange = (isOpen) => {
    if (disabled) return;
    if (isOpen) {
      setDraftLimit(committedLimit ?? DEFAULT_LIMIT);
      listSharp.update((state) => {
        if (listConfig) {
          syncSharpDatasets(state.datasets, selectedDatasets, {
            filters: listConfig.filters,
            provider: listConfig.provider
          });
        } else {
          syncSharpDatasets(state.datasets, selectedDatasets);
        }
      });
    } else {
      setDraftLimit(void 0);
    }
    setOpen(isOpen);
  };
  const handleCancel = () => {
    form.setFieldValue("limit", originalValue);
    listSharp.update((state) => {
      if (listConfig) {
        syncSharpDatasets(state.datasets, selectedDatasets, {
          filters: listConfig.filters,
          provider: listConfig.provider
        });
      } else {
        syncSharpDatasets(state.datasets, selectedDatasets);
      }
    });
    setDraftLimit(void 0);
    setOpen(false);
  };
  const handleApply = () => {
    const nextLimit = value ?? DEFAULT_LIMIT;
    if (listConfig) {
      onApplyDatasets(getCanonicalSelectedKeys(listSharp.value.datasets));
    }
    form.setFieldValue("limit", nextLimit);
    onApply(nextLimit);
    setDraftLimit(void 0);
    setOpen(false);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Popover.Root, { open, onOpenChange: handleOpenChange, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Popover.Trigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", className: "flex items-center gap-sm cursor-pointer", disabled, children: [
      includeDeceasedSelected && /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { color: disabled ? "grey" : "purple", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: t2("screenings:freeform_search.global.liveness") }) }),
      committedLimit !== DEFAULT_LIMIT && /* @__PURE__ */ jsxRuntimeExports.jsx(
        Tag,
        {
          color: disabled ? "grey" : "purple",
          className: "cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
          ref: tagRef,
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: t2("screenings:freeform_search.limit_label", { limit: committedLimit }) })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-xs text-grey-placeholder", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "plus", className: "size-4  " }),
        !hasCustomValue && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t2("screenings:freeform_search.advanced_filters") })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Popover.Content,
      {
        className: "bg-surface-card border-grey-border z-50 flex w-[300px] flex-col rounded-lg border shadow-lg",
        sideOffset: 4,
        align: "start",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-sm p-md", children: [
            availableGlobalTopicConfigs.map((config) => /* @__PURE__ */ jsxRuntimeExports.jsx(GlobalTopicSwitch, { config }, config.groupKey)),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              ThresholdRange,
              {
                defaultDescription: t2("screenings:freeform_search.limit_description"),
                value,
                onChange: (nextValue) => setDraftLimit(nextValue),
                values: LIMIT_OPTIONS.map((option) => ({
                  value: option,
                  color: "var(--color-purple-primary)"
                })),
                initialColor: "var(--color-purple-primary)",
                max: LIMIT_OPTIONS.at(-1)
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Popover.Footer, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "secondary", size: "large", onClick: handleCancel, children: t2("common:cancel") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "primary", size: "large", onClick: handleApply, children: t2("screenings:freeform_search.apply") })
          ] })
        ]
      }
    )
  ] });
};
function GlobalTopicSwitch({ config }) {
  const listSharp = ListAndTopicDatasetConfiguration.useSharp();
  const { t: t2 } = useTranslation(screeningsI18n);
  const switchId = `global-topic-${config.groupKey}`;
  const isSelected = ListAndTopicDatasetConfiguration.select(
    (state) => isGlobalTopicSwitchSelected(state.datasets, config)
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Switch,
      {
        id: switchId,
        checked: isSelected,
        onCheckedChange: (checked) => {
          listSharp.update((state) => {
            setGlobalTopicSwitch(state.datasets, config, checked);
          });
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: switchId, className: "text-s text-grey-primary cursor-pointer", children: t2(config.label) })
  ] });
}
function useManualSearchForm({ onSubmit }) {
  const { org } = useOrganizationDetails();
  return useForm({
    defaultValues: {
      entityType: "Thing",
      fields: setAdditionalFields(SEARCH_ENTITIES["Thing"].fields, {}),
      limit: DEFAULT_LIMIT,
      threshold: org.sanctionThreshold ?? 70
    },
    onSubmit: ({ value }) => onSubmit(value)
  });
}
const ManualSearchFormContext = reactExports.createContext(null);
function useFormManuallSearch() {
  const form = reactExports.useContext(ManualSearchFormContext);
  if (!form) throw new Error("useFormManuallSearch must be used within FreeformSearchForm");
  return form;
}
function FreeformSearchForm({ onSearchComplete }) {
  const listConfigQuery = useListConfigQuery("manual_search");
  const { t: t2 } = useTranslation("common");
  return M(listConfigQuery).with({ isPending: true }, () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center h-50", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, { className: "size-10" }) })).with({ isError: true }, () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-md items-center justify-center h-50", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "", children: t2("common:generic_fetch_data_error") }) })).otherwise(({ data }) => /* @__PURE__ */ jsxRuntimeExports.jsx(FreeformSearchFormInner, { provider: data.provider, listConfig: data.filters, onSearchComplete }));
}
function FreeformSearchFormInner({
  provider,
  onSearchComplete,
  listConfig
}) {
  const { t: t2 } = useTranslation(screeningsI18n);
  const { org } = useOrganizationDetails();
  const searchMutation = useFreeformSearchMutation();
  const defaultThreshold = org.sanctionThreshold ?? 70;
  const defaultDatasets = reactExports.useMemo(() => getDefaultManualSearchDatasets(listConfig, provider), [listConfig, provider]);
  const [selectedDatasets, setSelectedDatasets] = reactExports.useState(defaultDatasets);
  const selectedDatasetsKey = reactExports.useMemo(() => selectedDatasets.toSorted().join(","), [selectedDatasets]);
  const listFreeFormSearchPresetsQuery = useListFreeFormSearchPresetsQuery();
  const [selectedPresetId, setSelectedPresetId] = reactExports.useState(void 0);
  const selectedPreset = listFreeFormSearchPresetsQuery.data?.find((preset) => preset.id === selectedPresetId);
  const [savePresetPopoverOpen, setSavePresetPopoverOpen] = reactExports.useState(false);
  const [presetName, setPresetName] = reactExports.useState("");
  const [presetNameError, setPresetNameError] = reactExports.useState(void 0);
  const [appliedPreset, setAppliedPreset] = reactExports.useState(void 0);
  const createFreeFormSearchPresetMutation = useCreateFreeFormSearchPresetMutation();
  const listSharp = ListAndTopicDatasetConfiguration.createSharp({
    datasets: (() => {
      const initial = makeDatasetsMap(selectedDatasets);
      applyUniqueLexisNexisSectionDefault(initial, listConfig, provider);
      return initial;
    })(),
    mode: "edit",
    variant: "popover",
    provider
  });
  reactExports.useEffect(() => {
    listSharp.update((state) => {
      syncSharpDatasets(state.datasets, selectedDatasets, { filters: listConfig, provider });
    });
  }, [listSharp, selectedDatasetsKey, selectedDatasets, listConfig, provider]);
  const form = useManualSearchForm({
    onSubmit: async (value) => {
      listSharp.update((state) => {
        applyUniqueLexisNexisSectionDefault(state.datasets, listConfig, provider);
      });
      const datasets = getCanonicalSelectedKeys(listSharp.value.datasets);
      const submitValue = {
        ...value,
        datasets: datasets.length > 0 ? datasets : void 0,
        limit: value.limit ?? DEFAULT_LIMIT
      };
      searchMutation.mutateAsync(submitValue).then((result) => {
        onSearchComplete(result, submitValue);
      }).catch(() => {
        zt.error(t2("common:errors.unknown"));
      });
    }
  });
  const threshold = useSelector(form.store, (state) => state.values.threshold);
  const entityType = useSelector(form.store, (state) => state.values.entityType);
  const limit = useSelector(form.store, (state) => state.values.limit);
  const fields = useSelector(form.store, (state) => state.values.fields);
  const originalLimit = reactExports.useRef(limit ?? DEFAULT_LIMIT);
  const currentPreset = buildFreeformSearchPreset({
    datasets: selectedDatasets,
    threshold: threshold ?? defaultThreshold
  });
  const isPresetDirty = !!selectedPresetId && !!appliedPreset && isFreeformSearchPresetDirty(currentPreset, appliedPreset);
  const applyPreset = (preset) => {
    const normalized = normalizeFreeformSearchPreset(preset, {
      threshold: defaultThreshold,
      datasets: defaultDatasets
    });
    form.setFieldValue("threshold", normalized.threshold);
    setSelectedDatasets(normalized.datasets ?? []);
    setAppliedPreset(normalized);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    form.handleSubmit();
  };
  const handleClearFilters = () => {
    setAppliedPreset(void 0);
    form.reset();
    setSelectedDatasets([]);
    setSelectedPresetId(void 0);
    originalLimit.current = DEFAULT_LIMIT;
  };
  const handlePresetSelect = (id) => {
    const preset = listFreeFormSearchPresetsQuery.data?.find((preset2) => preset2.id === id);
    if (!preset) return;
    setSelectedPresetId(preset.id);
    applyPreset(preset.config);
  };
  const handleSaveFilters = async () => {
    const trimmedName = presetName.trim();
    if (!trimmedName) {
      setPresetNameError(t2("screenings:freeform_search.preset_name_required"));
      return;
    }
    if (listFreeFormSearchPresetsQuery.data?.some((preset) => preset.name === trimmedName)) {
      setPresetNameError(t2("screenings:freeform_search.preset_name_already_exists"));
      return;
    }
    try {
      const result = await createFreeFormSearchPresetMutation.mutateAsync({
        name: trimmedName,
        value: currentPreset
      });
      if (result.success) {
        applyPreset(result.preset.config);
        setSelectedPresetId(result.preset.id);
        setSavePresetPopoverOpen(false);
        setPresetName("");
        setPresetNameError(void 0);
      } else if (result.error === "duplicate_name") {
        setPresetNameError(t2("screenings:freeform_search.preset_name_already_exists"));
      }
    } catch {
      zt.error(t2("common:errors.unknown"));
    }
  };
  const handleSavePresetPopoverChange = (isOpen) => {
    setSavePresetPopoverOpen(isOpen);
    if (!isOpen) {
      setPresetName("");
      setPresetNameError(void 0);
    }
  };
  const hasActiveFilters = selectedDatasets.length > 0 || entityType && entityType !== "Thing" || hasFilledAdditionalFields(fields, entityType) || limit !== void 0 && limit !== DEFAULT_LIMIT || threshold !== void 0 && threshold !== defaultThreshold;
  const hasPresetFilters = selectedDatasets.length > 0 || threshold !== void 0 && threshold !== defaultThreshold;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ManualSearchFormContext.Provider, { value: form, children: /* @__PURE__ */ jsxRuntimeExports.jsx(EntitySearchFormProvider, { form, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-md", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-surface-card border-grey-border rounded-lg border p-md space-y-md", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("form", { onSubmit: handleSubmit, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        form.Field,
        {
          name: "fields.name",
          validators: {
            onSubmit: ({ value }) => {
              const v = value ?? "";
              return v.trim().length >= 1 ? void 0 : t2("screenings:freeform_search.name_required");
            }
          },
          children: (formField) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 flex-col gap-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                name: formField.name,
                value: formField.state.value ?? "",
                onChange: (e) => formField.handleChange(e.target.value),
                className: "w-full",
                borderColor: formField.state.meta.errors.length > 0 ? "redfigma-47" : "greyfigma-90",
                placeholder: t2("screenings:freeform_search.name_placeholder")
              }
            ),
            formField.state.meta.errors.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-primary text-xs", children: formField.state.meta.errors[0] })
          ] })
        }
      ) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(EntityTypePopover, { disabled: searchMutation.isPending })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ListAndTopicDatasetConfiguration.Provider, { value: listSharp, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-surface-card border-grey-border rounded-lg border p-md space-y-md", children: [
      listFreeFormSearchPresetsQuery?.data?.length ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full [&>div]:w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        SelectV2,
        {
          options: listFreeFormSearchPresetsQuery.data.map((preset) => ({
            label: preset.name,
            value: preset.id
          })),
          placeholder: t2("screenings:freeform_search.preset_placeholder"),
          value: selectedPresetId,
          onChange: (value) => {
            if (value) handlePresetSelect(value);
          },
          displayedValue: (option) => isPresetDirty && option.value === selectedPresetId ? `${option.label} ${t2("screenings:freeform_search.preset_edited")}` : option.label,
          className: "w-full"
        }
      ) }) : null,
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        ScreeningThreshold,
        {
          threshold,
          onChange: (value) => {
            form.setFieldValue("threshold", value);
          },
          title: t2("screenings:freeform_search.threshold_label")
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        DatasetsPopover,
        {
          selectedDatasets,
          onApply: setSelectedDatasets,
          disabled: searchMutation.isPending
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        LimitPopover,
        {
          disabled: searchMutation.isPending,
          originalValue: originalLimit.current,
          selectedDatasets,
          onApply: (value) => {
            originalLimit.current = value;
          },
          onApplyDatasets: setSelectedDatasets
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-sm justify-end", children: [
      selectedPreset ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        DeleteFreeformSearchPresetButton,
        {
          preset: selectedPreset,
          onDeleted: () => {
            setSelectedPresetId(void 0);
            setAppliedPreset(void 0);
          }
        },
        selectedPreset.id
      ) : null,
      hasActiveFilters && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", appearance: "stroked", size: "medium", onClick: handleClearFilters, children: t2("screenings:freeform_search.clear_filters") }),
        isPresetDirty || hasPresetFilters && !selectedPresetId ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Popover.Root, { open: savePresetPopoverOpen, onOpenChange: handleSavePresetPopoverChange, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Popover.Trigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "primary", appearance: "stroked", size: "medium", children: t2("screenings:freeform_search.save_filters") }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Popover.Content, { side: "bottom", align: "end", sideOffset: 4, className: "w-[280px] p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "form",
            {
              onSubmit: (e) => {
                e.preventDefault();
                e.stopPropagation();
                handleSaveFilters();
              },
              className: "flex gap-2 items-center",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    autoFocus: true,
                    value: presetName,
                    onChange: (e) => {
                      setPresetName(e.target.value);
                      if (presetNameError) setPresetNameError(void 0);
                    },
                    placeholder: t2("screenings:freeform_search.preset_name_placeholder"),
                    borderColor: presetNameError ? "redfigma-47" : "greyfigma-90",
                    disabled: createFreeFormSearchPresetMutation.isPending,
                    className: "flex-1"
                  }
                ),
                presetNameError ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-primary text-xs", children: presetNameError }) : null,
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    type: "submit",
                    appearance: "stroked",
                    mode: "icon",
                    disabled: createFreeFormSearchPresetMutation.isPending,
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "tick", className: "size-5" })
                  }
                )
              ]
            }
          ) })
        ] }) : null
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(form.Subscribe, { selector: (state) => [state.canSubmit, state.isSubmitting], children: ([canSubmit, isSubmitting]) => {
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            variant: "primary",
            size: "medium",
            type: "submit",
            disabled: !canSubmit || isSubmitting,
            onClick: handleSubmit,
            className: "flex items-center gap-xs",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t2("screenings:freeform_search.submit") }),
              isSubmitting && /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "spinner", className: "size-5 animate-spin" })
            ]
          }
        );
      } })
    ] })
  ] }) }) });
}
const FreeformSearchResults = ({
  results,
  limit,
  searchTerm
}) => {
  const { t: t2 } = useTranslation(screeningsI18n);
  const effectiveLimit = limit ?? DEFAULT_LIMIT;
  const mayHaveMoreResults = results !== null && results.length === effectiveLimit;
  return M(results).with(null, () => (
    // Initial state - no search performed yet
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-surface-card border-grey-border rounded-lg border p-md", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-s text-grey-secondary", children: t2("screenings:freeform_search.initial_state") }) })
  )).with([], () => (
    // No results found
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-surface-card border-grey-border rounded-lg border p-md", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-s text-grey-secondary", children: t2("screenings:freeform_search.no_results_title") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-s text-grey-placeholder mt-xs", children: t2("screenings:freeform_search.no_results_description") })
    ] })
  )).with(z.array(), (data) => (
    // Results found
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-surface-card border-grey-border flex flex-col gap-sm rounded-md border px-sm py-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-s flex items-center gap-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-grey-primary font-semibold", children: t2("screenings:freeform_search.results_title") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-grey-placeholder", children: t2("screenings:freeform_search.results_count", { count: data.length }) })
        ] }),
        mayHaveMoreResults && /* @__PURE__ */ jsxRuntimeExports.jsx(Callout, { color: "orange", icon: "warning", children: t2("screenings:freeform_search.limit_warning") })
      ] }),
      getSortedPayloadByTopics(data).map((entity) => /* @__PURE__ */ jsxRuntimeExports.jsx(FreeformMatchCard, { entity, defaultOpen: data.length === 1, searchTerm }, entity.id))
    ] })
  )).exhaustive();
};
const FreeformSearchPage = ({ onSearchComplete, listConfig }) => {
  const [results, setResults] = reactExports.useState(null);
  const [currentLimit, setCurrentLimit] = reactExports.useState(void 0);
  const [searchTerm, setSearchTerm] = reactExports.useState(void 0);
  const handleSearchComplete = reactExports.useCallback(
    (result, inputs) => {
      setResults(result.matches);
      setCurrentLimit(inputs.limit);
      setSearchTerm(inputs.fields.name);
      onSearchComplete?.({
        searchId: result.id,
        results: result.matches,
        inputs: {
          entityType: inputs.entityType,
          fields: inputs.fields,
          datasets: inputs.datasets ?? [],
          threshold: inputs.threshold,
          limit: inputs.limit
        }
      });
    },
    [onSearchComplete]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-full flex-col gap-lg lg:flex-row", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full shrink-0 overflow-y-auto lg:w-1/4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FreeformSearchForm, { onSearchComplete: handleSearchComplete, listConfig }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-0 min-w-0 flex-1 overflow-y-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FreeformSearchResults, { results, limit: currentLimit, searchTerm }) })
  ] });
};
const PrintResultCard = ({ entity }) => {
  const { t: t2 } = useTranslation(screeningsI18n);
  const entitySchema = entity.schema.toLowerCase();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-grey-border rounded-md break-inside-avoid mb-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-sm px-md py-xs border-b border-grey-border bg-grey-background-light/30", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-s font-semibold text-grey-primary", children: entity.caption }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-s text-grey-placeholder", children: t2(`screenings:entity.schema.${entitySchema}`, {
        defaultValue: entitySchema
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { color: "grey", children: t2("screenings:match.similarity", {
        percent: Math.round(entity.score * 100)
      }) })
    ] }),
    entity.properties?.["topics"]?.length ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b border-grey-border px-md py-2xs", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TopicsDisplay, { entity, containerClassName: "flex flex-wrap gap-xs" }) }) : null,
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-s p-md", children: [
      entitySchema === "person" && entity.datasets?.length ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-[140px_1fr] gap-sm mb-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold", children: t2("screenings:match.datasets.title") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          EntityDatasetsList,
          {
            datasets: entity.datasets,
            useCase: "manual_search",
            listClassName: "list-disc list-inside",
            itemClassName: "break-all"
          }
        ) })
      ] }) : null,
      /* @__PURE__ */ jsxRuntimeExports.jsx(MatchDetails, { entity })
    ] })
  ] });
};
const PrintResults = ({ results }) => {
  const { t: t2 } = useTranslation(screeningsI18n);
  return M(results).with([], () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-grey-border rounded-md border p-xl text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-s text-grey-placeholder", children: t2("screenings:freeform_search.no_results_title") }) })).with(z.array(), (data) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Typo, { variant: "title2", className: "  mb-sm", children: [
      t2("screenings:freeform_search.results_title"),
      " (",
      t2("screenings:freeform_search.results_count", { count: data.length }),
      ")"
    ] }),
    data.map((entity) => /* @__PURE__ */ jsxRuntimeExports.jsx(PrintResultCard, { entity }, entity.id))
  ] })).exhaustive();
};
const PrintSearchSummary = ({ searchInputs }) => {
  const { t: t2 } = useTranslation(screeningsI18n);
  const entityTypeKey = searchInputs.entityType.toLowerCase();
  const activeFields = Object.entries(searchInputs.fields).filter(([, value]) => value && value.trim() !== "");
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PrintSection, { title: t2("screenings:print.search_summary"), children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border border-grey-border rounded-md p-md", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-md text-s", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-grey-placeholder", children: t2("screenings:freeform_search.entity_type_label") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-grey-primary", children: t2(`screenings:refine_modal.schema.${entityTypeKey}`) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-grey-placeholder", children: t2("screenings:freeform_search.threshold_label") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-grey-primary", children: searchInputs.threshold !== void 0 ? `${searchInputs.threshold}%` : t2("screenings:print.default_threshold") })
    ] }),
    activeFields.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-grey-placeholder", children: t2("screenings:print.search_fields") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-sm mt-sm", children: activeFields.map(([field, value]) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Tag, { color: "grey", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium", children: [
          t2(`screenings:entity.property.${field}`),
          ":"
        ] }),
        " ",
        value
      ] }, field)) })
    ] }),
    searchInputs.datasets.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-grey-placeholder", children: t2("screenings:freeform_search.datasets_label") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-s text-grey-primary mt-xs", children: searchInputs.datasets.join(", ") })
    ] })
  ] }) }) });
};
function toIsoRange(value) {
  if (!value) return {};
  if (value.type === "static") {
    return { createdAfter: value.startDate || void 0, createdBefore: value.endDate || void 0 };
  }
  const now = Temporal.Now.zonedDateTimeISO();
  return {
    createdAfter: now.add(value.fromNow).toInstant().toString(),
    createdBefore: now.toInstant().toString()
  };
}
const PAGE_SIZES = [25, 50, 100];
const ViewSavedResults = () => {
  const { t: t2 } = useTranslation(["screenings", "common"]);
  const [open, setOpen] = reactExports.useState(false);
  const [isSaved, setIsSaved] = reactExports.useState(true);
  const [dateRange, setDateRange] = reactExports.useState(null);
  const [ownerId, setOwnerId] = reactExports.useState(void 0);
  const [paginationParams, setPaginationParams] = reactExports.useState({ limit: 25 });
  const { createdAfter, createdBefore } = reactExports.useMemo(() => toIsoRange(dateRange), [dateRange]);
  const filterValues = reactExports.useMemo(
    () => omitUndefined({
      userId: ownerId,
      isSaved,
      createdAfter,
      createdBefore
    }),
    [ownerId, isSaved, createdAfter, createdBefore]
  );
  const resetPagination = () => {
    setPaginationParams((prev) => ({ limit: prev.limit ?? 25 }));
  };
  const query = useSavedFreeformSearchesQuery(
    omitUndefined({
      ...filterValues,
      ...paginationParams
    })
  );
  const data = query.data;
  const items = data?.data ?? [];
  const hasNextPage = data?.has_next_page ?? false;
  const limit = paginationParams.limit ?? 25;
  const paginationItems = reactExports.useMemo(() => items.map((item) => ({ id: item.id, createdAt: item.created_at })), [items]);
  const paginationState = usePaginationsButton({
    filterValues,
    items: paginationItems,
    initialOffsetId: paginationParams.offsetId
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "primary", appearance: "stroked", onClick: () => setOpen(true), children: t2("screenings:freeform_search.saved_results.button") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Panel.Root, { open, onOpenChange: setOpen, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Panel.Container, { size: "medium", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Panel.Content, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Panel.Header, { children: t2("screenings:freeform_search.saved_results.title") }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-md pb-md", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          PeriodFilter,
          {
            value: dateRange,
            onChange: (v) => {
              setDateRange(v);
              resetPagination();
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          OwnerFilter,
          {
            value: ownerId,
            onChange: (v) => {
              setOwnerId(v);
              resetPagination();
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-10 items-center gap-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Switch,
            {
              id: "saved-only",
              checked: isSaved,
              onCheckedChange: (value) => {
                setIsSaved(value);
                resetPagination();
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "saved-only", className: "text-s text-grey-primary", children: t2("screenings:freeform_search.saved_results.saved_only") })
        ] })
      ] }),
      query.isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-s text-grey-secondary p-md", children: t2("screenings:freeform_search.saved_results.loading") }) : query.isError ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-s text-red-primary p-md", children: t2("screenings:freeform_search.saved_results.error") }) : items.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-s text-grey-secondary p-md", children: t2("screenings:freeform_search.saved_results.empty") }) : /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "flex flex-col gap-sm", children: items.map((search) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SavedSearchRow, { search }) }, search.id)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Panel.Footer, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex w-full items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          SavedResultsPageSizeSelector,
          {
            limit,
            onLimitChange: (pageSize) => setPaginationParams({ limit: pageSize })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          CursorPaginationButtons,
          {
            items: paginationItems,
            onPaginationChange: (newPaginationParams) => setPaginationParams((prev) => ({
              limit: prev.limit ?? 25,
              ...newPaginationParams
            })),
            paginationState,
            boundariesDisplay: "dates",
            hasNextPage,
            itemsPerPage: limit
          }
        )
      ] }) })
    ] }) }) })
  ] });
};
function SavedSearchRow({ search }) {
  const { t: t2 } = useTranslation(["screenings", "common"]);
  const language = useFormatLanguage();
  const { currentUser } = useOrganizationDetails();
  const { getOrgUserById } = useOrganizationUsers();
  const owner = search.user_id ? getOrgUserById(search.user_id) : void 0;
  const isYou = currentUser.actorIdentity.userId === search.user_id;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Collapsible.Container, { defaultOpen: false, className: "bg-grey-background-light", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Collapsible.Title, { size: "small", iconPosition: "left", className: "grid", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-1 flex-wrap items-center gap-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-grey-primary", children: search.search_input.query?.["name"]?.join(", ") }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-xs text-s text-grey-secondary font-normal", children: [
        owner ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Avatar, { size: "xs", firstName: owner.firstName, lastName: owner.lastName }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-grey-primary", children: [
            `${owner.firstName} ${owner.lastName}`.trim(),
            isYou ? ` (${t2("screenings:freeform_search.saved_results.you")})` : null
          ] })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: search.user_id }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(IconDot, { spaced: true }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: formatDateTimeWithoutPresets(search.created_at, { language, dateStyle: "short" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(IconDot, { spaced: true }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t2("screenings:freeform_search.saved_results.hits", { count: search.nb_hits }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(IconDot, { spaced: true }),
        search.is_saved ? /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "star", className: "size-5 fill-none text-purple-secondary" }) : null
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Collapsible.Content, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FilterValues, { filter: search.search_config }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(QueryValues, { query: search.search_input, type: search.search_input.type }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SavedResults, { id: search.id })
    ] })
  ] });
}
function FilterValues({ filter }) {
  const { t: t2 } = useTranslation(["screenings"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-xs", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-xs", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Tag, { color: "white", appearance: "monospace", className: "gap-xs", children: [
        t2("screenings:freeform_search.threshold_label"),
        ": ",
        filter.threshold
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { color: "white", appearance: "monospace", className: "gap-xs", children: t2("screenings:freeform_search.limit_label", { limit: filter.limit }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap items-center gap-xs", children: Object.entries(filter.filters).filter(([, value]) => value.enabled).map(([key, value], index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(reactExports.Fragment, { children: [
      value?.datasets?.length && /* @__PURE__ */ jsxRuntimeExports.jsxs(Tag, { color: "white", appearance: "monospace", className: "gap-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          key,
          ":"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: value?.datasets?.length ?? 0 })
      ] }),
      value?.topics && /* @__PURE__ */ jsxRuntimeExports.jsx(TopicTag, { topics: value.topics })
    ] }, `filter-${key}-${index}`)) })
  ] });
}
function TopicTag({ topics }) {
  const { t: t2 } = useTranslation(["screeningTopics"]);
  function getKey(v) {
    if (v.startsWith("filter.")) return `lexis.${v.slice(7)}`;
    return `lexis.${v}`;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: Object.entries(topics).map(([key, value]) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Tag, { color: "white", appearance: "monospace", className: "gap-xs h-auto text-wrap items-start break-words", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
      key,
      ":"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: value.map((v) => t2(`screeningTopics:${getKey(v)}`)).join(", ") })
  ] }, key)) });
}
function QueryValues({ query, type }) {
  const { t: t2 } = useTranslation(["screenings"]);
  const entityType = query.type;
  const entityTypeFields = entityType && entityType in SEARCH_ENTITIES ? SEARCH_ENTITIES[entityType].fields.filter((f) => f !== "name") : [];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-xs", children: [
    type !== "Thing" && /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { color: "white", appearance: "monospace", className: "gap-xs", children: t2(`screenings:entity.schema.${type.toLocaleLowerCase()}`) }),
    entityTypeFields.map(
      (field) => query.query[field] ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Tag, { color: "white", appearance: "monospace", className: "gap-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t2(`screenings:entity.property.${field}`) }),
        ":",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: query.query[field].join(", ") })
      ] }, field) : null
    )
  ] });
}
function PeriodFilter({
  value,
  onChange
}) {
  const { t: t2 } = useTranslation(["screenings", "common"]);
  const language = useFormatLanguage();
  const [open, setOpen] = reactExports.useState(false);
  const [draft, setDraft] = reactExports.useState(value);
  const selectedLabel = (() => {
    if (!value) return null;
    if (value.type === "static") {
      const from = value.startDate ? formatDateTimeWithoutPresets(value.startDate, { language, dateStyle: "short" }) : "…";
      const to = value.endDate ? formatDateTimeWithoutPresets(value.endDate, { language, dateStyle: "short" }) : "…";
      return `${from} → ${to}`;
    }
    return formatDuration(value.fromNow, language);
  })();
  if (selectedLabel)
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      FilterPill,
      {
        icon: "calendar-month",
        label: selectedLabel,
        onClear: () => onChange(null),
        clearAriaLabel: t2("screenings:freeform_search.clear")
      }
    );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    MenuCommand.Menu,
    {
      open,
      onOpenChange: (o) => {
        setOpen(o);
        if (o) setDraft(value);
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Trigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "secondary", appearance: "stroked", className: "w-full justify-between h-10", size: "medium", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "calendar-month", className: "size-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: t2("screenings:freeform_search.saved_results.select_period") })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Icon,
            {
              icon: "smallarrow-up",
              className: cn("size-4 transition-transform duration-200 rotate-180", open && "rotate-0")
            }
          )
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(MenuCommand.Content, { className: "min-w-[28rem]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.List, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            DateRangeFilter.Root,
            {
              dateRangeFilter: draft,
              setDateRangeFilter: (v) => setDraft(v ?? null),
              className: "grid",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(DateRangeFilter.FromNowPicker, { title: t2("screenings:freeform_search.saved_results.select_period") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "bg-grey-border", decorative: true, orientation: "vertical" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(DateRangeFilter.Calendar, {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx(DateRangeFilter.Summary, { className: "col-span-3 row-span-1" })
              ]
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-grey-border flex justify-end gap-sm border-t p-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "secondary",
                appearance: "stroked",
                size: "large",
                onClick: () => {
                  setDraft(null);
                  onChange(null);
                  setOpen(false);
                },
                children: t2("screenings:freeform_search.clear")
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                size: "large",
                onClick: () => {
                  onChange(draft);
                  setOpen(false);
                },
                children: t2("screenings:freeform_search.apply")
              }
            )
          ] })
        ] })
      ]
    }
  );
}
function getOwnerLabel(owner) {
  return `${owner.firstName} ${owner.lastName}`.trim() || owner.email;
}
function OwnerFilter({
  value,
  onChange
}) {
  const { t: t2 } = useTranslation(["screenings", "common"]);
  const { orgUsers, getOrgUserById } = useOrganizationUsers();
  const [open, setOpen] = reactExports.useState(false);
  const owner = value ? getOrgUserById(value) : void 0;
  const ownerLabel = owner ? getOwnerLabel(owner) : null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(MenuCommand.Menu, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Trigger, { children: ownerLabel ? /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "cursor-pointer", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FilterPill, { icon: "user", label: ownerLabel }) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "secondary", appearance: "stroked", className: "w-full justify-between h-10", size: "medium", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: t2("screenings:freeform_search.saved_results.select_owner") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Icon,
        {
          icon: "smallarrow-up",
          className: cn("size-4 transition-transform duration-200 rotate-180", open && "rotate-0")
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(MenuCommand.Content, { sameWidth: true, className: "mt-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Combobox, { placeholder: t2("screenings:freeform_search.saved_results.select_owner") }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(MenuCommand.List, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          MenuCommand.Item,
          {
            value: "",
            onSelect: () => {
              onChange(void 0);
              setOpen(false);
            },
            children: t2("screenings:freeform_search.saved_results.all_owners")
          }
        ),
        orgUsers.map((user) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          MenuCommand.Item,
          {
            value: user.userId,
            onSelect: () => {
              onChange(user.userId === value ? void 0 : user.userId);
              setOpen(false);
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex w-full justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: getOwnerLabel(user) }),
              user.userId === value ? /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "tick", className: "text-purple-primary size-5" }) : null
            ] })
          },
          user.userId
        ))
      ] })
    ] })
  ] });
}
function SavedResultsPageSizeSelector({
  limit,
  onLimitChange
}) {
  const { t: t2 } = useTranslation(["screenings"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-xs", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-s text-grey-secondary", children: t2("screenings:freeform_search.saved_results.results_per_page") }),
    PAGE_SIZES.map((size) => {
      const active = size === limit;
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          variant: "secondary",
          appearance: "stroked",
          size: "medium",
          className: cn(active && "border-purple-primary text-purple-primary"),
          onClick: () => {
            if (!active) onLimitChange(size);
          },
          children: size
        },
        size
      );
    })
  ] });
}
function FilterPill({
  icon,
  label,
  onClear,
  clearAriaLabel
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Tag, { color: "purple", size: "big", className: "w-full justify-between bg-purple-primary/20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-xs truncate", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon, className: "size-4 shrink-0" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate font-medium", children: label })
    ] }),
    onClear ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      Button,
      {
        role: "button",
        appearance: "link",
        "aria-label": clearAriaLabel,
        className: "hover:text-purple-hover shrink-0 cursor-pointer",
        onClick: onClear,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "cross", className: "size-4" })
      }
    ) : null
  ] });
}
function SavedResults({ id }) {
  const query = useGetFreeformSearchQuery(id);
  return query.isSuccess && query.data && query.data.matches ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-sm mt-sm", children: query.data.matches?.map((match) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(FreeformMatchCard, { entity: match, background: "card" }, match.id);
  }) }) : null;
}
function ScreeningSearchIndexPage() {
  const {
    t: t2
  } = useTranslation(["screenings"]);
  const {
    currentUser
  } = useOrganizationDetails();
  const {
    listConfig
  } = Route$16.useLoaderData();
  const [searchState, setSearchState] = reactExports.useState(null);
  const saveSearchMutation = useSaveFreeformSearchMutation();
  const userName = [currentUser.actorIdentity.firstName, currentUser.actorIdentity.lastName].filter(Boolean).join(" ");
  const handleSearchComplete = reactExports.useCallback((state) => {
    setSearchState(state);
  }, []);
  function handleSaveSearch() {
    if (!searchState?.inputs) return;
    saveSearchMutation.mutateAsync({
      id: searchState.searchId
    }).then(() => zt.success(t2("screenings:freeform_search.save.success"))).catch(() => zt.error(t2("common:errors.unknown")));
  }
  const hasResults = searchState !== null && searchState.results.length > 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Page.Main, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Page.Content, { className: "h-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typo, { variant: "title1", children: t2("navigation:screening_search") }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-sm", children: [
        hasResults && /* @__PURE__ */ jsxRuntimeExports.jsxs(PrintView, { title: t2("screenings:print.title"), trigger: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "secondary", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "download", className: "size-4" }),
          t2("screenings:print.open_print_view")
        ] }), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(PrintHeader, { title: t2("screenings:print.title"), userName }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(PrintSearchSummary, { searchInputs: searchState.inputs }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(PrintResults, { results: searchState.results })
        ] }),
        searchState?.searchId && /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "secondary", onClick: handleSaveSearch, disabled: saveSearchMutation.isPending, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "save", className: "size-4" }),
          t2("screenings:freeform_search.save.button")
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ViewSavedResults, {})
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FreeformSearchPage, { onSearchComplete: handleSearchComplete, listConfig: listConfig.filters })
  ] }) });
}
export {
  ScreeningSearchIndexPage as component
};

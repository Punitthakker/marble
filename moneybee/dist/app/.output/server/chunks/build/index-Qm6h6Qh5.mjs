import { M as reactExports, Q as jsxRuntimeExports, L as useRouter } from "./server.mjs";
import { a as Callout } from "./Callout-B0OuRL3q.mjs";
import { A as Await } from "./awaited-DFMIBuo8.mjs";
import { a9 as Route$G, aa as getDecisionFilters, u as useNavigate, ab as buildQueryParams, P as Page, a5 as adaptFilterValues, a6 as toSubmittedDecisionFilters, T as Tooltip, C as CaseStatusBadgeV2, L as Link, a7 as e$2, a8 as emptyDecisionFilters, D as DateRangeFilter } from "./router-KSC-NEr8.mjs";
import { an as Panel, u as useTranslation, ar as SearchInput, B as Button, I as Icon, a as useFormatDateTime, aC as useTable, aD as Table, c as clsx, M as MenuCommand, T as Trans, a6 as Input } from "./Tabs-CzpyUi7T.mjs";
import { u as t$e, bW as assertNever, o as t$9, az as reviewStatuses, aA as knownOutcomes } from "./services-middleware-nMulUXHZ.mjs";
import { u as unboundedDateRange, a as usePaginationsButton, C as CursorPaginationButtons, i as isUnboundedDateRange, p as paginationSchema, d as decisionFiltersSchema } from "./decisions--eKWwSYj.mjs";
import { D as DetectionNavigationTabs } from "./Tabs-DoS4UhZR.mjs";
import { F as FiltersButton } from "./index-CFNRpINI.mjs";
import { S as Spinner } from "./Spinner-DmLieYoS.mjs";
import { u as useTanstackTableListSelection } from "./useTanstackTableListSelection-CCY_1HOg.mjs";
import { h as handleSubmit } from "./form-D2XmDKeG.mjs";
import { o as object, s as string, f as fromUUIDtoSUUID, M as intersection } from "./short-uuid-fTZYJj_k.mjs";
import { u as useForm } from "./useForm-qNQ8S9xN.mjs";
import { c as createSimpleContext, z as zt, d as distExports } from "./create-context-k6HmQ6bB.mjs";
import { u as useCallbackRef } from "./use-callback-ref-Bwe341Yf.mjs";
import { u as useStore } from "./useStore-C3gZU5bu.mjs";
import { F as FiltersDropdownMenu, A as AddNewFilterButton, C as ClearAllFiltersLink, t, a as FilterPopover, b as FilterItem, e as e$1 } from "./FiltersDropdownMenu-BSUYGlfU.mjs";
import { e } from "./isArray-gJc74O_I.mjs";
import { e as e$3 } from "./isNullish-B8pc8Ntu.mjs";
import { n as n$1 } from "./unique-cniTya2T.mjs";
import { d as decisionsI18n } from "./decisions-i18n-Cg4JM_3r.mjs";
import { H as Highlight } from "./Highlight-NVjBw0RI.mjs";
import { m as matchSorter } from "./match-sorter.esm-BRMYSlZQ.mjs";
import { t as toggle } from "./array-BFSjnO9c.mjs";
import { S as Separator } from "./Separator-D4aEwiuL.mjs";
import { S as Switch } from "./Switch-BV-_0Knl.mjs";
import { n } from "./flat-CiXFfT8Y.mjs";
import { O as OutcomeBadge } from "./OutcomeTag-DYQZ2msd.mjs";
import { E as ExternalLink, l as linkClasses } from "./ExternalLink-BlVgwkVd.mjs";
import { p as pivotValuesDocHref } from "./documentation-href-DY9fs71n.mjs";
import { u as useListScheduleExecutions } from "./list-scheduled-executions-tic-6Gm_.mjs";
import { D as DecisionRightPanel, S as Score } from "./Score-BsVZOUYI.mjs";
import { C as Checkbox } from "./Checkbox-C8nszDsh.mjs";
import { c as createColumnHelper } from "./columnHelper-dCJ-kjEm.mjs";
import { t as t$1 } from "./isDeepEqual-DU8kSW6f.mjs";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
import "util";
import "crypto";
import "async_hooks";
import "stream";
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
import "./formatDistanceStrict-DEEeAR-Y.mjs";
import "./case-detail-middleware-iDVIrW-c.mjs";
import "./inboxes-D556s0BB.mjs";
import "./input-validation-D4mgQsey.mjs";
import "./async-C3pYACua.mjs";
import "./coerce-UidCu_Sb.mjs";
import "./files-fO9wUXBf.mjs";
import "./graph-pivots-Bblee9BN.mjs";
import "./scenarios-C5R2TE8p.mjs";
import "node:crypto";
import "./use-callback-ref-DoQNLci-.mjs";
import "./sharpstate.es-C0BW2AZi.mjs";
import "./Popover-Cp1XdSV2.mjs";
import "./decisions-BECqiOw3.mjs";
import "./useQuery-Bb0AEcpf.mjs";
import "./useBaseQuery-BqF2iw7Y.mjs";
import "./useServerFn-oRH5Nw97.mjs";
import "./FormErrorOrDescription-BncG6ljR.mjs";
import "./cases-BQ48izmh.mjs";
import "./cases-C-fVFrVL.mjs";
import "./useMutation-BOdeDeAR.mjs";
import "./get-inboxes-BXwOxAig.mjs";
import "./Select-Dg3p9vJ0.mjs";
const getTableSelectColumn = (columnHelper2, selectable) => {
  return selectable ? [
    columnHelper2.display({
      id: "select",
      header: ({ table }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Checkbox,
        {
          checked: table.getIsAllPageRowsSelected() ? true : table.getIsSomeRowsSelected() ? "indeterminate" : false,
          onClick: table.getToggleAllRowsSelectedHandler(),
          className: "ms-sm"
        }
      ),
      cell: ({ row }) => /* @__PURE__ */ jsxRuntimeExports.jsx("label", { onClick: (e2) => e2.stopPropagation(), className: "block h-10 w-10 p-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Checkbox,
        {
          checked: row.getIsSelected(),
          onClick: (e2) => {
            e2.stopPropagation();
            row.getToggleSelectedHandler()(e2);
          }
        }
      ) }),
      size: 40,
      enableResizing: false
    })
  ] : [];
};
const columnHelper = createColumnHelper();
function DecisionsList({
  className,
  decisions,
  columnVisibility,
  selectable,
  selectionProps,
  tableProps
}) {
  const { t: t2 } = useTranslation(decisionsI18n);
  const formatDateTime = useFormatDateTime();
  const columns = reactExports.useMemo(
    () => [
      ...getTableSelectColumn(columnHelper, selectable),
      columnHelper.accessor((row) => row.createdAt, {
        id: "created_at",
        header: t2("decisions:created_at"),
        size: 80,
        minSize: 80,
        cell: ({ getValue: getValue2 }) => {
          const dateTime = getValue2();
          return /* @__PURE__ */ jsxRuntimeExports.jsx("time", { dateTime, children: formatDateTime(dateTime, { dateStyle: "short" }) });
        }
      }),
      columnHelper.accessor((row) => row.scenario.name, {
        id: "scenario_name",
        header: t2("decisions:scenario.name"),
        size: 200,
        minSize: 120,
        cell: ({ getValue: getValue2, row }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-row items-center gap-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip.Default, { content: getValue2(), children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-grey-primary text-s line-clamp-2 font-normal", children: getValue2() }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-grey-border text-grey-primary rounded-full border px-md py-2xs font-semibold", children: `V${row.original.scenario.version}` })
        ] })
      }),
      columnHelper.accessor((row) => row.triggerObjectType, {
        id: "trigger_object_type",
        header: t2("decisions:trigger_object.type"),
        size: 100,
        minSize: 100,
        cell: ({ getValue: getValue2 }) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-grey-primary text-s line-clamp-2 break-words font-normal", children: getValue2() })
      }),
      columnHelper.accessor((row) => row.case?.name ?? "-", {
        id: "case",
        header: t2("decisions:case"),
        size: 200,
        minSize: 150,
        cell: ({ getValue: getValue2, row }) => row.original.case ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex w-fit flex-row items-center justify-center gap-sm align-baseline", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CaseStatusBadgeV2, { status: row.original.case.status, variant: "icon-only" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip.Default, { content: getValue2(), children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-grey-background-light flex h-8 items-center justify-center rounded-sm px-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-grey-primary text-s line-clamp-1 font-normal", children: getValue2() }) }) })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-grey-background-light text-grey-primary text-s flex size-8 items-center justify-center rounded-sm font-normal", children: getValue2() })
      }),
      columnHelper.accessor((row) => row.pivotValues, {
        id: "pivot_value",
        header: t2("decisions:pivot_value"),
        size: 100,
        cell: ({ getValue: getValue2 }) => {
          const pivotValues = getValue2() ?? [];
          if (pivotValues.length === 0) return null;
          return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative flex flex-col gap-xs", children: pivotValues.map((pivotValue) => /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip.Default, { content: pivotValue.value, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-grey-primary text-s line-clamp-1 text-ellipsis", children: pivotValue.value }) }, pivotValue.id)) });
        }
      }),
      columnHelper.accessor((row) => row.score, {
        id: "score",
        header: t2("decisions:score"),
        size: 50,
        minSize: 80,
        cell: ({ getValue: getValue2 }) => /* @__PURE__ */ jsxRuntimeExports.jsx(Score, { score: getValue2() })
      }),
      columnHelper.accessor((row) => ({ outcome: row.outcome, reviewStatus: row.reviewStatus }), {
        id: "outcome",
        header: t2("decisions:outcome"),
        size: 150,
        cell: ({ getValue: getValue2 }) => {
          const { outcome, reviewStatus } = getValue2();
          return /* @__PURE__ */ jsxRuntimeExports.jsx(OutcomeBadge, { outcome, reviewStatus, size: "md" });
        }
      })
    ],
    [t2, selectable, formatDateTime]
  );
  const { table, getBodyProps, rows, getContainerProps } = useTable({
    data: decisions,
    columns,
    state: {
      columnVisibility,
      rowSelection: selectionProps?.rowSelection
    },
    columnResizeMode: "onChange",
    enableRowSelection: selectable,
    enableSorting: false,
    ...tableProps,
    rowLink: (decision) => /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/detection/decisions/$decisionId", params: { decisionId: fromUUIDtoSUUID(decision.id) } })
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Table.Container, { ...getContainerProps(), className: clsx("bg-surface-card", className), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Table.Header, { headerGroups: table.getHeaderGroups() }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Table.Body, { ...getBodyProps(), children: rows.map((row) => {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Table.Row, { row }, row.id);
    }) })
  ] });
}
const decisionFilterNames = [
  "dateRange",
  "scenarioId",
  "triggerObject",
  "triggerObjectId",
  "outcomeAndReviewStatus",
  "caseInboxId",
  "hasCase",
  "pivotValue",
  "scheduledExecutionId"
];
function getFilterIcon(filterName) {
  switch (filterName) {
    case "dateRange":
      return "calendar-month";
    case "scenarioId":
      return "scenarios";
    case "caseInboxId":
      return "inbox";
    case "outcomeAndReviewStatus":
      return "category";
    case "triggerObject":
      return "alt-route";
    case "triggerObjectId":
      return "search";
    case "hasCase":
      return "case-manager";
    case "pivotValue":
      return "tree-schema";
    case "scheduledExecutionId":
      return "scheduled-execution";
    default:
      assertNever("[DecisionFilter] unknown filter:", filterName);
  }
}
function getFilterTKey(filterName) {
  switch (filterName) {
    case "dateRange":
      return "decisions:created_at";
    case "scenarioId":
      return "decisions:scenario.name";
    case "caseInboxId":
      return "decisions:filters.inbox";
    case "outcomeAndReviewStatus":
      return "decisions:outcome";
    case "triggerObject":
      return "decisions:trigger_object.type";
    case "triggerObjectId":
      return "decisions:filters.trigger_object_id";
    case "hasCase":
      return "decisions:filters.has_case";
    case "pivotValue":
      return "decisions:filters.pivot_value";
    case "scheduledExecutionId":
      return "decisions:filters.scheduled_execution";
    default:
      assertNever("[DecisionFilter] unknown filter:", filterName);
  }
}
const DecisionFiltersContext = createSimpleContext("DecisionFiltersContext");
function DecisionFiltersProvider({
  hasPivots,
  filterValues,
  scenarios,
  inboxes,
  submitDecisionFilters: _submitDecisionFilters,
  children
}) {
  const form = useForm({
    defaultValues: adaptFilterValues(filterValues)
  });
  reactExports.useEffect(() => {
    form.reset(adaptFilterValues(filterValues));
  }, [filterValues]);
  const submitDecisionFilters = useCallbackRef((values) => {
    _submitDecisionFilters(toSubmittedDecisionFilters(values ?? form.state.values));
  });
  const onDecisionFilterClose = useCallbackRef(() => {
    if (form.state.isDirty) {
      submitDecisionFilters();
    }
  });
  const value = reactExports.useMemo(
    () => ({
      submitDecisionFilters,
      onDecisionFilterClose,
      filterValues,
      scenarios,
      hasPivots,
      inboxes,
      form
    }),
    [filterValues, hasPivots, onDecisionFilterClose, scenarios, inboxes, submitDecisionFilters, form]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx(DecisionFiltersContext.Provider, { value, children });
}
const useDecisionFiltersContext = DecisionFiltersContext.useValue;
function useDateRangeFilter() {
  const { form } = useDecisionFiltersContext();
  const dateRange = useStore(form.store, (state) => state.values.dateRange);
  const setDateRange = (value) => form.setFieldValue("dateRange", value ?? null);
  return { dateRange, setDateRange };
}
function useHasCaseFilter() {
  const { form } = useDecisionFiltersContext();
  const selectedHasCase = useStore(form.store, (state) => state.values.hasCase);
  const setSelectedHasCase = (value) => form.setFieldValue("hasCase", value);
  return { selectedHasCase, setSelectedHasCase };
}
function useOutcomeAndReviewStatusFilter() {
  const { form } = useDecisionFiltersContext();
  const selectedOutcomeAndReviewStatus = useStore(form.store, (state) => state.values.outcomeAndReviewStatus);
  const setOutcomeAndReviewStatus = (value) => form.setFieldValue("outcomeAndReviewStatus", value);
  return { selectedOutcomeAndReviewStatus, setOutcomeAndReviewStatus };
}
function usePivotValueFilter() {
  const { hasPivots, form } = useDecisionFiltersContext();
  const selectedPivotValue = useStore(form.store, (state) => state.values.pivotValue);
  const setSelectedPivotValue = (value) => form.setFieldValue("pivotValue", value);
  return { hasPivots, selectedPivotValue, setSelectedPivotValue };
}
function useScenarioFilter() {
  const { scenarios, form } = useDecisionFiltersContext();
  const selectedScenarioIds = useStore(form.store, (state) => state.values.scenarioId);
  const setSelectedScenarioIds = (value) => form.setFieldValue("scenarioId", value);
  return { scenarios, selectedScenarioIds, setSelectedScenarioIds };
}
function useScheduledExecutionFilter() {
  const { form } = useDecisionFiltersContext();
  const selectedScheduledExecutionIds = useStore(form.store, (state) => state.values.scheduledExecutionId);
  const setSelectedScheduledExecutionIds = (value) => form.setFieldValue("scheduledExecutionId", value);
  return {
    selectedScheduledExecutionIds,
    setSelectedScheduledExecutionIds
  };
}
function useCaseInboxFilter() {
  const { inboxes, form } = useDecisionFiltersContext();
  const selectedCaseInboxIds = useStore(form.store, (state) => state.values.caseInboxId);
  const setSelectedCaseInboxIds = (value) => form.setFieldValue("caseInboxId", value);
  return {
    inboxes,
    selectedCaseInboxIds,
    setSelectedCaseInboxIds
  };
}
function useTriggerObjectFilter() {
  const { scenarios, form } = useDecisionFiltersContext();
  const triggerObjects = reactExports.useMemo(
    () => t$e(
      scenarios,
      t$9((scenario) => scenario.triggerObjectType),
      n$1()
    ),
    [scenarios]
  );
  const selectedTriggerObjects = useStore(form.store, (state) => state.values.triggerObject);
  const setSelectedTriggerObjects = (value) => form.setFieldValue("triggerObject", value);
  return { triggerObjects, selectedTriggerObjects, setSelectedTriggerObjects };
}
function useTriggerObjectIdFilter() {
  const { form } = useDecisionFiltersContext();
  const selectedTriggerObjectId = useStore(form.store, (state) => state.values.triggerObjectId);
  const setSelectedTriggerObjectId = (value) => form.setFieldValue("triggerObjectId", value);
  return { selectedTriggerObjectId, setSelectedTriggerObjectId };
}
function useDecisionFiltersPartition() {
  const { filterValues } = useDecisionFiltersContext();
  const [undefinedDecisionFilterNames, definedDecisionFilterNames] = t$e(
    decisionFilterNames,
    t((filterName) => {
      const value = filterValues[filterName];
      if (filterName === "dateRange" && isUnboundedDateRange(value)) return true;
      if (e(value)) return value.length === 0;
      if (e$1(value)) return e$2(value);
      return e$3(value);
    })
  );
  return {
    undefinedDecisionFilterNames,
    definedDecisionFilterNames
  };
}
function useClearFilter() {
  const { submitDecisionFilters, form } = useDecisionFiltersContext();
  return reactExports.useCallback(
    (filterName) => {
      const cleared = emptyDecisionFilters[filterName];
      form.setFieldValue(filterName, cleared);
      submitDecisionFilters({
        ...form.state.values,
        [filterName]: cleared
      });
    },
    [form, submitDecisionFilters]
  );
}
function CaseInboxFilter() {
  const [value, setSearchValue] = reactExports.useState("");
  const { inboxes, selectedCaseInboxIds, setSelectedCaseInboxIds } = useCaseInboxFilter();
  const searchValue = reactExports.useDeferredValue(value);
  const matches = reactExports.useMemo(() => matchSorter(inboxes, searchValue, { keys: ["name"] }), [searchValue, inboxes]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-sm p-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(MenuCommand.Inline, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Combobox, { className: "m-0", onValueChange: setSearchValue }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.List, { className: "max-h-40", children: matches.map((inbox) => {
      const isSelected = selectedCaseInboxIds.includes(inbox.id);
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        MenuCommand.Item,
        {
          value: `${inbox.name} ${inbox.id}`,
          onSelect: () => setSelectedCaseInboxIds(toggle(selectedCaseInboxIds, inbox.id)),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Highlight, { text: inbox.name, query: searchValue }),
            isSelected ? /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "tick", className: "text-purple-primary size-6 shrink-0" }) : null
          ]
        },
        inbox.id
      );
    }) })
  ] }) });
}
function DecisionsDateRangeFilter() {
  const { t: t2 } = useTranslation(decisionsI18n);
  const { dateRange, setDateRange } = useDateRangeFilter();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(DateRangeFilter.Root, { dateRangeFilter: dateRange, setDateRangeFilter: setDateRange, className: "grid", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DateRangeFilter.FromNowPicker, { title: t2("decisions:filters.date_range.title") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "bg-grey-border", decorative: true, orientation: "vertical" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DateRangeFilter.Calendar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "bg-grey-border col-span-3", decorative: true, orientation: "horizontal" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DateRangeFilter.Summary, { className: "col-span-3 row-span-1" })
  ] });
}
const defaultHasCase = false;
function useDefaultHasCase() {
  const { selectedHasCase, setSelectedHasCase } = useHasCaseFilter();
  reactExports.useEffect(() => {
    if (selectedHasCase === null) {
      setSelectedHasCase(defaultHasCase);
    }
  }, [selectedHasCase, setSelectedHasCase]);
  return {
    selectedHasCase: selectedHasCase ?? defaultHasCase,
    setSelectedHasCase
  };
}
function HasCaseFilter() {
  const { t: t2 } = useTranslation(decisionsI18n);
  const { selectedHasCase, setSelectedHasCase } = useDefaultHasCase();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-row justify-between gap-sm p-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "hasCase", className: "", children: t2("decisions:filters.has_case") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Switch, { id: "hasCase", checked: selectedHasCase, onCheckedChange: setSelectedHasCase })
  ] });
}
function OutcomeAndReviewStatusFilter() {
  const { t: t$12 } = useTranslation(decisionsI18n);
  const [value, setSearchValue] = reactExports.useState("");
  const { selectedOutcomeAndReviewStatus, setOutcomeAndReviewStatus } = useOutcomeAndReviewStatusFilter();
  const deferredValue = reactExports.useDeferredValue(value);
  const outcomeAndReviewStatus = reactExports.useMemo(
    () => t$e(
      knownOutcomes,
      t$9((outcome) => {
        if (outcome === "block_and_review") {
          return reviewStatuses.map((reviewStatus) => ({
            outcomeValue: "block_and_review",
            outcomeLabel: t$12(`decisions:outcome.${outcome}`),
            reviewStatusValue: reviewStatus,
            reviewStatusLabel: t$12(`decisions:review_status.${reviewStatus}`)
          }));
        }
        return {
          outcomeValue: outcome,
          outcomeLabel: t$12(`decisions:outcome.${outcome}`),
          reviewStatusValue: void 0,
          reviewStatusLabel: void 0
        };
      }),
      n()
    ),
    []
  );
  const matches = reactExports.useMemo(
    () => matchSorter(outcomeAndReviewStatus, deferredValue, {
      keys: ["outcomeLabel", "reviewStatusLabel"]
    }),
    [deferredValue, outcomeAndReviewStatus]
  );
  const selectedValue = selectedOutcomeAndReviewStatus ? getValue(selectedOutcomeAndReviewStatus.outcome, selectedOutcomeAndReviewStatus.reviewStatus) : void 0;
  const onSelectedValueChange = reactExports.useCallback(
    (value2) => {
      setOutcomeAndReviewStatus(parseValue(value2));
    },
    [setOutcomeAndReviewStatus]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-sm p-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(MenuCommand.Inline, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Combobox, { className: "m-0", onValueChange: setSearchValue }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.List, { children: matches.map(({ outcomeValue, reviewStatusValue, outcomeLabel, reviewStatusLabel }) => {
      const itemValue = getValue(outcomeValue, reviewStatusValue);
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        MenuCommand.Item,
        {
          value: `${outcomeLabel} ${reviewStatusLabel ?? ""} ${itemValue}`,
          onSelect: () => onSelectedValueChange(itemValue),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(OutcomeBadge, { outcome: outcomeValue, reviewStatus: reviewStatusValue, size: "md" }),
            selectedValue === itemValue ? /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "tick", className: "text-purple-primary size-6 shrink-0" }) : null
          ]
        },
        itemValue
      );
    }) })
  ] }) });
}
function getValue(outcome, reviewStatus) {
  return `${outcome}-${reviewStatus ?? ""}`;
}
function parseValue(value) {
  const [outcome, reviewStatus] = value.split("-");
  return {
    outcome,
    reviewStatus: reviewStatus || void 0
  };
}
function PivotValueFilter() {
  const { t: t2 } = useTranslation(decisionsI18n);
  const { hasPivots, selectedPivotValue, setSelectedPivotValue } = usePivotValueFilter();
  const { closeMenu } = useFiltersMenuContext();
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      closeMenu();
    }
  };
  if (hasPivots) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex w-72 flex-col gap-sm p-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Callout, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "whitespace-pre-wrap text-balance", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Trans,
        {
          t: t2,
          i18nKey: "decisions:pivot_detail.description.small",
          components: {
            DocLink: /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { href: pivotValuesDocHref })
          }
        }
      ) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            className: "flex-1",
            value: selectedPivotValue ?? "",
            onChange: (event) => {
              setSelectedPivotValue(event.target.value || null);
            },
            onKeyDown: handleKeyDown,
            autoFocus: true
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", onClick: closeMenu, children: t2("common:validate") })
      ] })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-72 p-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Callout, { variant: "outlined", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "whitespace-pre-wrap text-balance", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    Trans,
    {
      t: t2,
      i18nKey: "decisions:pivot_detail.missing_pivot_definition",
      components: {
        DataModelLink: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/data/list", className: linkClasses }),
        DocLink: /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { href: pivotValuesDocHref })
      }
    }
  ) }) }) });
}
function ScenarioFilter() {
  const [value, setSearchValue] = reactExports.useState("");
  const { scenarios, selectedScenarioIds, setSelectedScenarioIds } = useScenarioFilter();
  const searchValue = reactExports.useDeferredValue(value);
  const matches = reactExports.useMemo(() => matchSorter(scenarios, searchValue, { keys: ["name"] }), [searchValue, scenarios]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-sm p-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(MenuCommand.Inline, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Combobox, { className: "m-0", onValueChange: setSearchValue }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.List, { className: "max-h-40", children: matches.map((scenario) => {
      const isSelected = selectedScenarioIds.includes(scenario.id);
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        MenuCommand.Item,
        {
          value: `${scenario.name} ${scenario.id}`,
          onSelect: () => setSelectedScenarioIds(toggle(selectedScenarioIds, scenario.id)),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Highlight, { text: scenario.name, query: searchValue }),
            isSelected ? /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "tick", className: "text-purple-primary size-6 shrink-0" }) : null
          ]
        },
        scenario.id
      );
    }) })
  ] }) });
}
function ScheduledExecutionFilter() {
  const { t: t2 } = useTranslation(decisionsI18n);
  const formatDateTime = useFormatDateTime();
  const scheduledExecutionsQuery = useListScheduleExecutions();
  const successfullScheduledExecutions = reactExports.useMemo(() => {
    if (!scheduledExecutionsQuery.data) {
      return void 0;
    }
    return scheduledExecutionsQuery.data.scheduledExecutions?.filter(({ status }) => status === "success").map((scheduledExecution) => ({
      id: scheduledExecution.id,
      scenarioName: scheduledExecution.scenarioName,
      startedAt: {
        dateTime: scheduledExecution.startedAt,
        formattedDateTime: formatDateTime(scheduledExecution.startedAt, {
          dateStyle: "short",
          timeStyle: "short"
        })
      }
    }));
  }, [formatDateTime, scheduledExecutionsQuery.data]);
  const isLoading = scheduledExecutionsQuery.isPending || successfullScheduledExecutions === void 0;
  const showSpinner = distExports.useSpinDelay(isLoading);
  const [value, setSearchValue] = reactExports.useState("");
  const { selectedScheduledExecutionIds, setSelectedScheduledExecutionIds } = useScheduledExecutionFilter();
  const searchValue = reactExports.useDeferredValue(value);
  const matches = reactExports.useMemo(
    () => matchSorter(successfullScheduledExecutions ?? [], searchValue, {
      keys: ["scenarioName", "startedAt.formattedDateTime"]
    }),
    [searchValue, successfullScheduledExecutions]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-sm p-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(MenuCommand.Inline, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      MenuCommand.Combobox,
      {
        className: "m-0",
        placeholder: t2("decisions:filters.scheduled_execution.placeholder"),
        onValueChange: setSearchValue
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(MenuCommand.List, { className: "max-h-80 w-80", children: [
      matches.map((successfullScheduledExecution) => {
        const isSelected = selectedScheduledExecutionIds.includes(successfullScheduledExecution.id);
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          MenuCommand.Item,
          {
            value: `${successfullScheduledExecution.scenarioName} ${successfullScheduledExecution.startedAt.formattedDateTime} ${successfullScheduledExecution.id}`,
            onSelect: () => setSelectedScheduledExecutionIds(
              toggle(selectedScheduledExecutionIds, successfullScheduledExecution.id)
            ),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Highlight, { text: successfullScheduledExecution.scenarioName, query: searchValue }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "time",
                  {
                    className: "text-grey-secondary text-xs",
                    dateTime: successfullScheduledExecution.startedAt.dateTime,
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Highlight, { text: successfullScheduledExecution.startedAt.formattedDateTime, query: searchValue })
                  }
                )
              ] }),
              isSelected ? /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "tick", className: "text-purple-primary size-6 shrink-0" }) : null
            ]
          },
          successfullScheduledExecution.id
        );
      }),
      showSpinner ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-grey-primary h-10 p-sm first-letter:capitalize", children: t2("common:loading") }) : matches.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-grey-secondary flex items-center justify-center p-sm", children: successfullScheduledExecutions?.length ? t2("decisions:filters.scheduled_execution.no_results") : t2("decisions:filters.scheduled_execution.no_schedule") }) : null
    ] })
  ] }) });
}
function TriggerObjectFilter() {
  const [value, setSearchValue] = reactExports.useState("");
  const { triggerObjects, selectedTriggerObjects, setSelectedTriggerObjects } = useTriggerObjectFilter();
  const searchValue = reactExports.useDeferredValue(value);
  const matches = reactExports.useMemo(() => matchSorter(triggerObjects, searchValue), [searchValue, triggerObjects]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-sm p-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(MenuCommand.Inline, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Combobox, { className: "m-0", onValueChange: setSearchValue }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.List, { className: "max-h-40", children: matches.map((triggerObject) => {
      const isSelected = selectedTriggerObjects.includes(triggerObject);
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        MenuCommand.Item,
        {
          value: triggerObject,
          onSelect: () => setSelectedTriggerObjects(toggle(selectedTriggerObjects, triggerObject)),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Highlight, { className: "first-letter:capitalize", text: triggerObject, query: searchValue }),
            isSelected ? /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "tick", className: "text-purple-primary size-6 shrink-0" }) : null
          ]
        },
        triggerObject
      );
    }) })
  ] }) });
}
function TriggerObjectIdFilter() {
  const { t: t2 } = useTranslation(decisionsI18n);
  const { selectedTriggerObjectId, setSelectedTriggerObjectId } = useTriggerObjectIdFilter();
  const { closeMenu } = useFiltersMenuContext();
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      closeMenu();
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-sm p-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Input,
      {
        className: "flex-1",
        value: selectedTriggerObjectId ?? "",
        onChange: (event) => {
          setSelectedTriggerObjectId(event.target.value || null);
        },
        onKeyDown: handleKeyDown,
        placeholder: t2("decisions:filters.trigger_object_id.placeholder"),
        autoFocus: true
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", onClick: closeMenu, children: t2("common:validate") })
  ] });
}
function FilterDetail({ filterName }) {
  switch (filterName) {
    case "dateRange":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(DecisionsDateRangeFilter, {});
    case "scenarioId":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(ScenarioFilter, {});
    case "caseInboxId":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(CaseInboxFilter, {});
    case "outcomeAndReviewStatus":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(OutcomeAndReviewStatusFilter, {});
    case "triggerObject":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(TriggerObjectFilter, {});
    case "triggerObjectId":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(TriggerObjectIdFilter, {});
    case "hasCase":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(HasCaseFilter, {});
    case "pivotValue":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(PivotValueFilter, {});
    case "scheduledExecutionId":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(ScheduledExecutionFilter, {});
    default:
      assertNever("[DecisionFilter] unknown filter:", filterName);
  }
}
const FiltersMenuContext = reactExports.createContext({
  closeMenu: () => {
  }
});
const FiltersMenuContextProvider = FiltersMenuContext.Provider;
function useFiltersMenuContext() {
  return reactExports.useContext(FiltersMenuContext);
}
function DecisionFiltersMenu({
  children,
  filterNames
}) {
  const { onDecisionFilterClose } = useDecisionFiltersContext();
  const [open, setOpen] = reactExports.useState(false);
  const onOpenChange = reactExports.useCallback(
    (newOpen) => {
      setOpen(newOpen);
      if (!newOpen) {
        onDecisionFilterClose();
      }
    },
    [onDecisionFilterClose]
  );
  const closeMenu = reactExports.useCallback(() => {
    setOpen(false);
    onDecisionFilterClose();
  }, [onDecisionFilterClose]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(FiltersDropdownMenu.Root, { open, onOpenChange, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(FiltersDropdownMenu.Trigger, { asChild: true, children }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FiltersDropdownMenu.Content, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(FilterContent, { filterNames, closeMenu }) })
  ] });
}
const FiltersMenuItem = ({
  ref,
  filterName,
  ...props
}) => {
  const { t: t2 } = useTranslation(decisionsI18n);
  const icon = getFilterIcon(filterName);
  const tKey = getFilterTKey(filterName);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(FiltersDropdownMenu.Item, { ...props, ref, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon, className: "size-5" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-s text-grey-primary font-normal first-letter:capitalize", children: t2(tKey) })
  ] });
};
function FilterContent({
  filterNames,
  closeMenu
}) {
  const [selectedFilter, setSelectedFilter] = reactExports.useState();
  const contextValue = reactExports.useMemo(() => ({ closeMenu }), [closeMenu]);
  if (selectedFilter) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(FiltersMenuContext.Provider, { value: contextValue, children: /* @__PURE__ */ jsxRuntimeExports.jsx(FilterDetail, { filterName: selectedFilter }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-xs p-sm", children: filterNames.map((filterName) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    FiltersMenuItem,
    {
      filterName,
      onClick: (e2) => {
        e2.preventDefault();
        setSelectedFilter(filterName);
      }
    },
    filterName
  )) });
}
function getFilterDisplayValue(filterName, filterValues) {
  switch (filterName) {
    case "triggerObjectId":
      return filterValues.triggerObjectId;
    case "pivotValue":
      return filterValues.pivotValue;
    default:
      return void 0;
  }
}
function DecisionFilterPopover({ filterName }) {
  const { t: t2 } = useTranslation(decisionsI18n);
  const { filterValues } = useDecisionFiltersContext();
  const [open, setOpen] = reactExports.useState(false);
  const clearFilter = useClearFilter();
  const { onDecisionFilterClose } = useDecisionFiltersContext();
  const onOpenChange = reactExports.useCallback(
    (newOpen) => {
      setOpen(newOpen);
      if (!newOpen) {
        onDecisionFilterClose();
      }
    },
    [onDecisionFilterClose]
  );
  const closeMenu = reactExports.useCallback(() => {
    setOpen(false);
    onDecisionFilterClose();
  }, [onDecisionFilterClose]);
  const contextValue = reactExports.useMemo(() => ({ closeMenu }), [closeMenu]);
  const icon = getFilterIcon(filterName);
  const tKey = getFilterTKey(filterName);
  const displayValue = getFilterDisplayValue(filterName, filterValues);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(FilterPopover.Root, { open, onOpenChange, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(FilterItem.Root, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(FilterItem.Trigger, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon, className: "size-5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-s font-semibold first-letter:capitalize", children: [
          t2(tKey),
          displayValue ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-grey-primary font-normal", children: [
            ": ",
            displayValue
          ] }) : null
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        FilterItem.Clear,
        {
          onClick: () => {
            clearFilter(filterName);
          }
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FilterPopover.Content, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(FiltersMenuContextProvider, { value: contextValue, children: /* @__PURE__ */ jsxRuntimeExports.jsx(FilterDetail, { filterName }) }) })
  ] });
}
function DecisionFiltersBar() {
  const { undefinedDecisionFilterNames, definedDecisionFilterNames } = useDecisionFiltersPartition();
  if (definedDecisionFilterNames.length === 0) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "bg-grey-border", decorative: true }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-row items-center justify-between gap-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-row flex-wrap gap-sm items-center", children: [
        definedDecisionFilterNames.map((filterName) => /* @__PURE__ */ jsxRuntimeExports.jsx(DecisionFilterPopover, { filterName }, filterName)),
        undefinedDecisionFilterNames.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(DecisionFiltersMenu, { filterNames: undefinedDecisionFilterNames, children: /* @__PURE__ */ jsxRuntimeExports.jsx(AddNewFilterButton, {}) }) : null
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ClearAllFiltersLink, { to: "/detection/decisions", search: { dateRange: unboundedDateRange }, replace: true })
    ] })
  ] });
}
intersection(decisionFiltersSchema, paginationSchema);
function DetectionDecisions() {
  const {
    decisionsPromise,
    filters,
    scenarios,
    hasPivots,
    inboxes
  } = Route$G.useLoaderData();
  const decisionFilters = getDecisionFilters(filters);
  const navigate = useNavigate();
  const navigateDecisionList = reactExports.useCallback((decisionFilters2, paginationParams) => {
    const searchPaginationParams = {
      ...filters.order ? {
        order: filters.order
      } : {},
      ...filters.sorting ? {
        sorting: filters.sorting
      } : {},
      ...filters.limit ? {
        limit: filters.limit
      } : {},
      ...paginationParams ?? {}
    };
    navigate({
      to: "/detection/decisions",
      search: buildQueryParams(decisionFilters2, searchPaginationParams),
      replace: true
    });
  }, [filters.limit, filters.order, filters.sorting, navigate]);
  const [decisionIdsToAdd, setDecisionIdsToAdd] = reactExports.useState([]);
  const getSelectedRowsRef = reactExports.useRef(() => []);
  const [hasSelectedRows, setHasSelectedRows] = reactExports.useState(false);
  const onSelectionChange = reactExports.useCallback((selection) => {
    getSelectedRowsRef.current = selection.getSelectedRows;
    setHasSelectedRows(selection.hasSelectedRows);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Panel.Root, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Page.Main, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Page.Content, { width: "table", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DetectionNavigationTabs, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-md", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DecisionFiltersProvider, { scenarios, submitDecisionFilters: navigateDecisionList, filterValues: decisionFilters, hasPivots, inboxes, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between gap-md", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SearchById, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(DecisionFiltersMenu, { filterNames: decisionFilterNames, children: /* @__PURE__ */ jsxRuntimeExports.jsx(FiltersButton, {}) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AddToCase, { hasSelection: hasSelectedRows, getSelectedDecisions: () => getSelectedRowsRef.current(), onDecisionIdsChange: setDecisionIdsToAdd })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DecisionFiltersBar, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(DecisionsListSkeleton, {}), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Await, { promise: decisionsPromise, fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(DecisionsListSkeleton, {}), children: (result) => result.listError === "request_timeout" ? /* @__PURE__ */ jsxRuntimeExports.jsx(DecisionsTimeout, { currentSearch: filters }) : /* @__PURE__ */ jsxRuntimeExports.jsx(DecisionsLoaded, { decisionsData: result.decisionsData, decisionFilters, filters, navigateDecisionList, onSelectionChange }) }) })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DecisionRightPanel, { decisionIds: decisionIdsToAdd })
  ] });
}
function DecisionsTimeout({
  currentSearch
}) {
  const {
    t: t2
  } = useTranslation(["common", ...decisionsI18n]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Callout, { variant: "outlined", color: "red", icon: "error", iconColor: "red", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-md items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-primary", children: t2("decisions:errors.request_timeout") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DecisionFilterPopover, { filterName: "dateRange" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DecisionListRetryButton, { currentSearch })
  ] }) });
}
function DecisionsLoaded({
  decisionsData,
  decisionFilters,
  filters,
  navigateDecisionList,
  onSelectionChange
}) {
  const {
    items: decisions,
    ...pagination
  } = decisionsData;
  const paginationState = usePaginationsButton({
    filterValues: decisionFilters,
    items: decisions,
    initialOffsetId: filters.offsetId
  });
  const {
    hasSelectedRows,
    getSelectedRows,
    selectionProps,
    tableProps
  } = useTanstackTableListSelection(decisions, (row) => row.id);
  reactExports.useEffect(() => {
    onSelectionChange({
      hasSelectedRows,
      getSelectedRows
    });
    return () => onSelectionChange({
      hasSelectedRows: false,
      getSelectedRows: () => []
    });
  }, [getSelectedRows, hasSelectedRows, onSelectionChange]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DecisionsList, { className: "max-h-[60dvh]", decisions, selectable: true, selectionProps, tableProps, columnVisibility: {
      pivot_value: false
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CursorPaginationButtons, { items: decisions, onPaginationChange: (paginationParams) => navigateDecisionList(decisionFilters, paginationParams), paginationState, boundariesDisplay: "dates", ...pagination })
  ] });
}
function DecisionsListSkeleton() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-grey-border rounded-md max-h-[60dvh]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-13 border-b border-grey-border" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-30 bg-grey-background animate-pulse flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, { className: "size-12" }) })
  ] });
}
function DecisionListRetryButton({
  currentSearch
}) {
  const {
    t: t2
  } = useTranslation(["common"]);
  const {
    form
  } = useDecisionFiltersContext();
  const navigate = useNavigate();
  const router = useRouter();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", onClick: () => {
    const nextFilters = toSubmittedDecisionFilters(form.state.values);
    const currentFilters = getDecisionFilters(currentSearch);
    if (t$1(nextFilters, currentFilters)) {
      void router.invalidate();
      return;
    }
    const searchPaginationParams = {
      ...currentSearch.order ? {
        order: currentSearch.order
      } : {},
      ...currentSearch.sorting ? {
        sorting: currentSearch.sorting
      } : {},
      ...currentSearch.limit ? {
        limit: currentSearch.limit
      } : {}
    };
    void navigate({
      to: "/detection/decisions",
      search: buildQueryParams(nextFilters, searchPaginationParams),
      replace: true
    });
  }, children: t2("common:retry") });
}
function AddToCase({
  hasSelection,
  getSelectedDecisions,
  onDecisionIdsChange
}) {
  const {
    t: t2
  } = useTranslation(["common", "navigation", ...decisionsI18n]);
  const getDecisionIds = (event) => {
    const selectedDecisions = getSelectedDecisions();
    if (selectedDecisions.some((decision) => decision.case)) {
      event.preventDefault();
      zt.error(t2("decisions:errors.decision_already_in_case"));
    } else {
      onDecisionIdsChange(selectedDecisions.map(({
        id
      }) => id));
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Panel.Trigger, { asChild: true, onClick: getDecisionIds, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "medium", disabled: !hasSelection, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "plus", className: "size-5" }),
    t2("decisions:add_to_case")
  ] }) });
}
const decisionIdToParams = (decisionId) => {
  try {
    return fromUUIDtoSUUID(decisionId ?? "");
  } catch {
    return decisionId;
  }
};
const searchFormSchema = object({
  decisionId: string().nonempty()
});
function SearchById() {
  const {
    t: t2
  } = useTranslation(["common", "navigation", ...decisionsI18n]);
  const navigate = useNavigate();
  const form = useForm({
    defaultValues: {
      decisionId: ""
    },
    validators: {
      onSubmit: searchFormSchema,
      onMount: searchFormSchema
    },
    onSubmit: ({
      formApi,
      value
    }) => {
      if (formApi.state.isValid) {
        const decisionId = decisionIdToParams(value.decisionId);
        navigate({
          to: "/detection/decisions/$decisionId",
          params: {
            decisionId
          }
        });
      }
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "flex gap-xs", onSubmit: handleSubmit(form), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(form.Field, { name: "decisionId", children: (field) => /* @__PURE__ */ jsxRuntimeExports.jsx(SearchInput, { size: "medium", "aria-label": t2("decisions:search.placeholder"), placeholder: t2("decisions:search.placeholder"), value: field.state.value, onChange: (value) => field.handleChange(value) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(form.Subscribe, { selector: (store) => [store.canSubmit], children: ([canSubmit]) => /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "medium", type: "submit", disabled: !canSubmit, children: t2("common:search") }) })
  ] });
}
export {
  DetectionDecisions as component
};

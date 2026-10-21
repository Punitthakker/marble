import { Q as jsxRuntimeExports } from "./server.mjs";
import { F as Route$1e, P as Page, p as pageLayoutGutter, z as DefaultTooltip, T as Tooltip } from "./router-KSC-NEr8.mjs";
import { S as ScreeningNavigationTabs, G as GridTable } from "./Tabs-euCaPBQH.mjs";
import { l as listContinuousScreeningUpdateJobsFn, a as listContinuousScreeningClientDataIndexingFn, b as listContinuousScreeningDatasetUpdatesFn } from "./continuous-screening-CrmIE_W_.mjs";
import { u as useQuery } from "./useQuery-Bb0AEcpf.mjs";
import { u as useInfiniteQuery } from "./useInfiniteQuery-B6vcG-7y.mjs";
import { w as keepPreviousData } from "./query-BmG5BEas.mjs";
import { u as useServerFn } from "./useServerFn-oRH5Nw97.mjs";
import { d as cn, u as useTranslation, aq as Card, S as Typo, I as Icon, an as Panel, ay as useFormatLanguage$1, h as formatNumber, g as useFormatLanguage, V as useFormatTimezone } from "./Tabs-CzpyUi7T.mjs";
import { a2 as M } from "./services-middleware-nMulUXHZ.mjs";
import { a as Callout } from "./Callout-B0OuRL3q.mjs";
import { S as Spinner } from "./Spinner-DmLieYoS.mjs";
import { f as formatOptionalDuration, a as formatOptionalDateAtTime } from "./datetime-insWKNBy.mjs";
import { T as Tag } from "./create-context-k6HmQ6bB.mjs";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "./security-headers.server-BdP3HrPp.mjs";
import "./ThemeContext-DjRULCu0.mjs";
import "./config--RFGchua.mjs";
import "./short-uuid-fTZYJj_k.mjs";
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
import "./use-callback-ref-DoQNLci-.mjs";
import "./sharpstate.es-C0BW2AZi.mjs";
import "./formatDistanceStrict-DEEeAR-Y.mjs";
import "./continuous-screenings-CbvELuxK.mjs";
import "./useBaseQuery-BqF2iw7Y.mjs";
const useContinuousScreeningClientDataIndexingQuery = (params = {}, options = {}) => {
  const listClientDataIndexing = useServerFn(listContinuousScreeningClientDataIndexingFn);
  return useQuery({
    queryKey: ["continuous-screening", "client-data-indexing", params],
    queryFn: async () => {
      const result = await listClientDataIndexing({ data: params });
      return result;
    },
    refetchInterval: options.refetchInterval,
    initialData: options.initialData,
    ...options.initialData ? {
      staleTime: Number.POSITIVE_INFINITY,
      refetchOnMount: false
    } : {}
  });
};
const CLIENT_DATA_INDEXING_PAGE_SIZE = 20;
const CLIENT_DATA_INDEXING_REFETCH_INTERVAL = 5e3;
const useContinuousScreeningClientDataIndexingInfiniteQuery = (limit = CLIENT_DATA_INDEXING_PAGE_SIZE) => {
  const listClientDataIndexing = useServerFn(listContinuousScreeningClientDataIndexingFn);
  return useInfiniteQuery({
    queryKey: ["continuous-screening", "client-data-indexing", "infinite", limit],
    queryFn: async ({ pageParam }) => listClientDataIndexing({ data: { limit, order: "DESC", offsetId: pageParam ?? void 0 } }),
    initialPageParam: null,
    getNextPageParam: (lastPage) => lastPage.hasNextPage ? lastPage.items[lastPage.items.length - 1]?.id ?? null : null,
    placeholderData: keepPreviousData,
    // Poll only while a single page is loaded. An infinite query refetches every
    // loaded page on each tick, so once the user paginates we stop polling to avoid
    // refetching all pages every interval. (Polling also pauses when the tab is
    // unfocused and the query unmounts entirely when the panel is closed.)
    refetchInterval: (query) => (query.state.data?.pages.length ?? 0) > 1 ? false : CLIENT_DATA_INDEXING_REFETCH_INTERVAL
  });
};
const useContinuousScreeningDatasetUpdatesQuery = (params = {}, options = {}) => {
  const listDatasetUpdates = useServerFn(listContinuousScreeningDatasetUpdatesFn);
  return useQuery({
    queryKey: ["continuous-screening", "dataset-updates", params],
    queryFn: async () => {
      const result = await listDatasetUpdates({ data: params });
      return result.items;
    },
    refetchInterval: options.refetchInterval,
    initialData: options.initialData,
    ...options.initialData ? {
      staleTime: Number.POSITIVE_INFINITY,
      refetchOnMount: false
    } : {}
  });
};
const DATASET_UPDATES_PAGE_SIZE = 5;
const useContinuousScreeningDatasetUpdatesInfiniteQuery = (limit = DATASET_UPDATES_PAGE_SIZE) => {
  const listDatasetUpdates = useServerFn(listContinuousScreeningDatasetUpdatesFn);
  return useInfiniteQuery({
    queryKey: ["continuous-screening", "dataset-updates", "infinite", limit],
    queryFn: async ({ pageParam }) => listDatasetUpdates({ data: { limit, order: "DESC", offsetId: pageParam ?? void 0 } }),
    initialPageParam: null,
    getNextPageParam: (lastPage) => lastPage.hasNextPage ? lastPage.items[lastPage.items.length - 1]?.id ?? null : null,
    placeholderData: keepPreviousData
  });
};
const useContinuousScreeningUpdateJobsQuery = (params = {}, options = {}) => {
  const listUpdateJobs = useServerFn(listContinuousScreeningUpdateJobsFn);
  return useQuery({
    queryKey: ["continuous-screening", "update-jobs", params],
    queryFn: async () => {
      const result = await listUpdateJobs({ data: params });
      return result.items;
    },
    refetchInterval: options.refetchInterval,
    initialData: options.initialData,
    ...options.initialData ? {
      staleTime: Number.POSITIVE_INFINITY,
      refetchOnMount: false
    } : {}
  });
};
const UPDATE_JOBS_PAGE_SIZE = 10;
const useContinuousScreeningUpdateJobsInfiniteQuery = (limit = UPDATE_JOBS_PAGE_SIZE) => {
  const listUpdateJobs = useServerFn(listContinuousScreeningUpdateJobsFn);
  return useInfiniteQuery({
    queryKey: ["continuous-screening", "update-jobs", "infinite", limit],
    queryFn: async ({ pageParam }) => listUpdateJobs({ data: { limit, order: "DESC", offsetId: pageParam ?? void 0 } }),
    initialPageParam: null,
    getNextPageParam: (lastPage) => lastPage.hasNextPage ? lastPage.items[lastPage.items.length - 1]?.id ?? null : null,
    placeholderData: keepPreviousData
  });
};
const LIMIT_FOR_PANELS = 20;
const OBSERVABILITY_REFETCH_INTERVAL_ACTIVE = 1e3;
const OBSERVABILITY_REFETCH_INTERVAL_IDLE = 1e4;
function getObservabilityRefetchInterval(allStatusesCompleted) {
  return allStatusesCompleted ? OBSERVABILITY_REFETCH_INTERVAL_IDLE : OBSERVABILITY_REFETCH_INTERVAL_ACTIVE;
}
function areAllStatusesCompleted(items) {
  return items.every((item) => item.status === "completed");
}
function useDateAtFormat() {
  const locale = useFormatLanguage();
  const timezone = useFormatTimezone();
  const { t } = useTranslation(["continuousScreening"]);
  const dateFormatter = (dt) => formatOptionalDateAtTime(dt, {
    locale,
    timeZone: timezone,
    todayLabel: t("continuousScreening:observability.today"),
    yesterdayLabel: t("continuousScreening:observability.yesterday"),
    atSeparator: t("continuousScreening:observability.date_time_separator")
  });
  return { dateFormatter };
}
function TagStatus({
  status,
  children,
  className
}) {
  const color = M(status).with("completed", () => "green").with("failed", () => "red").with("processing", () => "yellow").with("pending", () => "yellow").otherwise(() => "white");
  const icon = M(status).with("completed", () => "tick").with("failed", () => "x").with("processing", () => "in-progress").with("pending", () => "schedule").otherwise(() => "info");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Tag, { color, className, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon, className: "size-4" }),
    children
  ] });
}
function GridStatus({
  status,
  progressValue,
  errors = []
}) {
  const { t } = useTranslation(["continuousScreening"]);
  if (status === "completed")
    return /* @__PURE__ */ jsxRuntimeExports.jsx(TagStatus, { status: "completed", children: t("continuousScreening:observability.grid_versions_status_completed") });
  if (status === "failed") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(TagStatus, { status: "failed", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("continuousScreening:observability.grid_versions_status_failed") }),
      (errors ?? []).length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        Tooltip.Default,
        {
          content: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "max-w-lg", children: (errors ?? []).map((error) => error.details?.error).filter(Boolean).map((error) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: error }, error)) }),
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "tip", className: "size-4" })
        }
      ) : null
    ] });
  }
  if (status === "pending")
    return /* @__PURE__ */ jsxRuntimeExports.jsx(TagStatus, { status: "pending", children: t("continuousScreening:observability.grid_versions_status_pending") });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(TagStatus, { status: "processing", children: progressValue === null ? t("continuousScreening:observability.grid_versions_status_processing") : t("continuousScreening:observability.grid_versions_status_in_progress", { progressValue }) });
}
function getProgressValue({
  itemsProcessed,
  totalItems
}) {
  if (itemsProcessed === null || itemsProcessed === void 0 || !totalItems || totalItems <= 0) return 0;
  return Math.min(100, Math.round(itemsProcessed / totalItems * 100));
}
function ClientDataIndexing({ data }) {
  const { t } = useTranslation(["common", "continuousScreening"]);
  if (data === null) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "p-md grid place-items-center mb-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-grey-secondary p-md text-center text-xs", children: t("common:global_error") }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-md grid gap-sm items-start mb-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "flex justify-between items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typo, { variant: "title2", children: t("continuousScreening:observability.client_data_indexing") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DefaultTooltip, { content: t("continuousScreening:observability.client_data_indexing_tooltip"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "tip", className: "size-4" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-sm items-center", children: [
        data.pendingItems > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(TagStatus, { status: "pending", children: t("continuousScreening:observability.client_data_indexing_pending", {
          count: data.pendingItems > 1e3 ? "1000+" : data.pendingItems
        }) }) : null,
        /* @__PURE__ */ jsxRuntimeExports.jsx(PanelCientIndexing, {})
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ClientDataIndexingFreshness, { data }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Callout, { color: "purple", children: t("continuousScreening:observability.client_data_indexing_callout") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ClientDataIndexingContent, { data })
  ] });
}
function ClientDataIndexingFreshness({ data }) {
  const { t } = useTranslation(["continuousScreening"]);
  if (data.version === "") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(TagStatus, { status: "pending", className: "w-fit", children: t("continuousScreening:observability.client_data_indexing_dataset_missing") });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-sm text-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(TagStatus, { status: "completed", className: "w-fit", children: t("continuousScreening:observability.client_data_indexing_dataset_version", {
      version: data.version
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TagStatus, { status: data.indexVersion == null ? "failed" : "completed", children: data.indexVersion === null ? t("continuousScreening:observability.client_data_indexing_index_missing") : t("continuousScreening:observability.client_data_indexing_index_version", {
      version: data.indexVersion
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TagStatus, { status: data.indexCurrent ? "completed" : "pending", className: "w-fit", children: data.indexCurrent ? t("continuousScreening:observability.client_data_indexing_index_current") : data.indexVersion === null ? t("continuousScreening:observability.client_data_indexing_index_pending") : t("continuousScreening:observability.client_data_indexing_index_outdated") })
  ] });
}
function PanelCientIndexing() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Panel.Root, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Panel.Trigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "eye", className: "size-4" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Panel.Container, { size: "medium", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PanelCientIndexingContent, {}) })
  ] });
}
function PanelCientIndexingContent() {
  const { t } = useTranslation(["common", "continuousScreening"]);
  const locale = useFormatLanguage$1();
  const query = useContinuousScreeningClientDataIndexingInfiniteQuery(LIMIT_FOR_PANELS);
  const { dateFormatter } = useDateAtFormat();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Panel.Content, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Panel.Header, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typo, { variant: "title2", children: t("continuousScreening:observability.client_data_indexing") }) }),
    M(query).with({ isPending: true }, () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center p-md", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, {}) })).with({ isError: true }, () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-grey-secondary p-md text-center text-xs", children: t("common:global_error") })).otherwise((query2) => {
      const items = query2.data.pages.flatMap((page) => page.items);
      return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-md text-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(GridTable.Table, { className: "grid-cols-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(GridTable.Row, { className: "font-semibold border-b border-grey-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(GridTable.Cell, { children: t("continuousScreening:observability.dataset_updates_date") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(GridTable.Cell, { children: t("continuousScreening:observability.client_data_indexing_version") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(GridTable.Cell, { children: t("continuousScreening:observability.grid_versions_items_ingested") })
        ] }),
        items.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(GridTable.Row, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(GridTable.Cell, { children: dateFormatter(item.jobDate) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(GridTable.Cell, { children: item.version }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(GridTable.Cell, { className: "justify-end tabular-nums", children: formatNumber(item.totalItems, { language: locale }) })
        ] }, item.id))
      ] }) });
    }),
    query.hasNextPage ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Panel.Footer, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Panel.FooterButton, { label: t("common:close"), isCloseButton: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Panel.FooterButton,
        {
          label: t("common:load_more_results"),
          onClick: () => query.fetchNextPage(),
          disabled: query.isFetchingNextPage
        }
      )
    ] }) : null
  ] });
}
function ClientDataIndexingContent({ data }) {
  const locale = useFormatLanguage$1();
  const indexedItems = data.items.slice(0, 5);
  const { dateFormatter } = useDateAtFormat();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-[30%_auto_1fr] gap-md items-center", children: indexedItems.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid col-span-full grid-cols-subgrid items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("time", { dateTime: item.jobDate, className: "text-grey-secondary", children: dateFormatter(item.jobDate) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TagStatus, { status: "completed", className: "gap-sm w-fit", children: formatNumber(item.totalItems, { language: locale }) })
  ] }, item.id)) });
}
function DatasetUpdate({ data }) {
  const { t } = useTranslation(["continuousScreening"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-md grid gap-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "flex justify-between items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typo, { variant: "title2", children: t("continuousScreening:observability.dataset_updates") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DefaultTooltip, { content: t("continuousScreening:observability.dataset_updates_tooltip"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "tip", className: "size-4" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(PanelDatasetUpdate, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Callout, { color: "purple", children: t("continuousScreening:observability.dataset_updates_callout") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DatasetUpdatContent, { data })
  ] });
}
function PanelDatasetUpdate() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Panel.Root, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Panel.Trigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "eye", className: "size-4" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Panel.Container, { size: "medium", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PanelDatasetUpdateContent, {}) })
  ] });
}
function PanelDatasetUpdateContent() {
  const { t } = useTranslation(["common", "continuousScreening"]);
  const locale = useFormatLanguage$1();
  const query = useContinuousScreeningDatasetUpdatesInfiniteQuery(LIMIT_FOR_PANELS);
  const { dateFormatter } = useDateAtFormat();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Panel.Content, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Panel.Header, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typo, { variant: "title2", children: t("continuousScreening:observability.dataset_updates") }) }),
    M(query).with({ isPending: true }, () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center p-md", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, {}) })).with({ isError: true }, () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-grey-secondary p-md text-center text-xs", children: t("common:global_error") })).otherwise((query2) => {
      const updates = query2.data.pages.flatMap((page) => page.items);
      return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-md text-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(GridTable.Table, { className: "grid-cols-[repeat(5,auto)]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(GridTable.Row, { className: "font-semibold border-b border-grey-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(GridTable.Cell, { children: t("continuousScreening:observability.dataset_updates_date") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(GridTable.Cell, { children: t("continuousScreening:observability.dataset_updates_title") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(GridTable.Cell, { children: t("continuousScreening:observability.dataset_updates_version") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(GridTable.Cell, { children: t("continuousScreening:observability.dataset_updates_number_of_items") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(GridTable.Cell, { children: t("continuousScreening:observability.dataset_updates_status") })
        ] }),
        updates.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(GridTable.Row, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(GridTable.Cell, { children: dateFormatter(item.createdAt) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(GridTable.Cell, { className: "truncate", children: item.title || item.datasetName }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(GridTable.Cell, { className: "gap-sm", children: item.version }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(GridTable.Cell, { className: "justify-end tabular-nums", children: item.status === "processing" ? `${formatNumber(item.completion.itemsProcessed, { language: locale })} / ${formatNumber(
            item.completion.itemsTotal,
            { language: locale }
          )}` : formatNumber(item.totalItems, { language: locale }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(GridTable.Cell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DatasetUpdateStatus, { item }) })
        ] }, item.id))
      ] }) });
    }),
    query.hasNextPage ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Panel.Footer, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Panel.FooterButton, { label: t("common:close"), isCloseButton: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Panel.FooterButton,
        {
          label: t("common:load_more_results"),
          onClick: () => query.fetchNextPage(),
          disabled: query.isFetchingNextPage
        }
      )
    ] }) : null
  ] });
}
function DatasetUpdateStatus({ item }) {
  const { t } = useTranslation(["continuousScreening"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-start gap-2xs", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(TagStatus, { status: item.status, children: t(`continuousScreening:observability.grid_versions_status_${item.status}`) }),
    item.status !== "completed" ? /* @__PURE__ */ jsxRuntimeExports.jsx(DatasetUpdateCompletionDetails, { completion: item.completion, status: item.status }) : null
  ] });
}
function DatasetUpdateCompletionDetails({
  completion,
  status
}) {
  const { t } = useTranslation(["continuousScreening"]);
  const locale = useFormatLanguage$1();
  const details = getDatasetUpdateCompletionDetails(completion);
  if (details.length === 0) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-grey-secondary flex flex-wrap gap-x-xs gap-y-2xs text-xs", children: [
    details.map(({ status: status2, value }) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t(`continuousScreening:observability.dataset_updates_completion_${status2}`, {
      percentage: formatNumber(value, { language: locale })
    }) }, status2)),
    status === "processing" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
      formatNumber(completion.itemsProcessed, { language: locale }),
      " / ",
      formatNumber(completion.itemsTotal, { language: locale })
    ] }) : null
  ] });
}
function getDatasetUpdateCompletionDetails(completion) {
  return ["completed", "processing", "pending", "failed"].map((status) => ({
    status,
    value: getDatasetUpdateCompletionPercentage(completion[status], completion.total),
    count: completion[status]
  })).filter(({ count }) => count > 0);
}
function getDatasetUpdateCompletionPercentage(count, total) {
  if (total <= 0) return 0;
  return Math.round(count / total * 100);
}
function DatasetUpdatContent({ data }) {
  const { dateFormatter } = useDateAtFormat();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-[auto_1fr_auto_auto] gap-x-md gap-y-sm items-center", children: data.map((item) => {
    const formattedDate = dateFormatter(item.createdAt);
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid col-span-full grid-cols-subgrid items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("time", { dateTime: item.createdAt, className: "text-grey-secondary", children: formattedDate }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-w-0 items-center gap-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: item.title || item.datasetName }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TagStatus, { status: item.status ?? "completed", children: item.version }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DatasetUpdateCompletionDetails, { completion: item.completion, status: item.status })
      ] })
    ] }, item.id);
  }) });
}
function UpdateJobs({ data }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(UpdateJobsContent, { data });
}
function UpdateJobsContent({ data }) {
  const { t } = useTranslation(["continuousScreening"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-full flex flex-col gap-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Callout, { color: "purple", className: "bg-surface-card w-fit", bordered: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("continuousScreening:observability.grid_versions_callout") }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(GridContent, { data, withPanel: true })
  ] });
}
function GridContent({ data, withPanel }) {
  const { t } = useTranslation(["continuousScreening"]);
  const locale = useFormatLanguage$1();
  const { dateFormatter } = useDateAtFormat();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(GridTable.Table, { className: "grid-cols-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(GridTable.Row, { className: "font-semibold border-b border-grey-border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(GridTable.Cell, { children: t("continuousScreening:observability.grid_versions_dataset_version") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(GridTable.Cell, { children: t("continuousScreening:observability.grid_versions_reception_time") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(GridTable.Cell, { className: "hidden lg:block", children: t("continuousScreening:observability.grid_versions_jobs_start") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(GridTable.Cell, { className: "hidden lg:block", children: t("continuousScreening:observability.grid_versions_job_duration") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(GridTable.Cell, { children: t("continuousScreening:observability.grid_versions_name_of_configuration") }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(GridTable.Cell, { className: "flex items-center justify-between", children: [
        t("continuousScreening:observability.grid_versions_status"),
        withPanel && /* @__PURE__ */ jsxRuntimeExports.jsx(PanelDatasetUpdates, {})
      ] })
    ] }),
    data.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(GridTable.Row, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(GridTable.Cell, { children: item.version }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(GridTable.Cell, { children: dateFormatter(item.receptionTime) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(GridTable.Cell, { className: "hidden lg:block", children: dateFormatter(item.jobStart) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(GridTable.Cell, { className: "hidden lg:flex gap-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: formatOptionalDuration(item.jobStart, item.jobEnd, { locale }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Tooltip.Default,
          {
            content: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex gap-xs", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("continuousScreening:observability.grid_versions_jobs_end") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: ":" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: dateFormatter(item.jobEnd) })
            ] }),
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "tip", className: "size-4" })
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(GridTable.Cell, { children: item.configName }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(GridTable.Cell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(GridStatus, { status: item.status, progressValue: getProgressValue(item), errors: item.errors }) })
    ] }, item.id))
  ] });
}
function PanelDatasetUpdates() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Panel.Root, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Panel.Trigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "eye", className: "size-4" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Panel.Container, { size: "large", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PanelDatasetUpdatesContent, {}) })
  ] });
}
function PanelDatasetUpdatesContent() {
  const { t } = useTranslation(["common", "continuousScreening"]);
  const query = useContinuousScreeningUpdateJobsInfiniteQuery(LIMIT_FOR_PANELS);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Panel.Content, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Panel.Header, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typo, { variant: "title2", children: t("continuousScreening:observability.dataset_updates") }) }),
    M(query).with({ isPending: true }, () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center p-md", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, {}) })).with({ isError: true }, () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-grey-secondary p-md text-center text-xs", children: t("common:global_error") })).otherwise((query2) => {
      const data = query2.data.pages.flatMap((page) => page.items);
      return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-md text-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(GridContent, { data }) });
    }),
    query.hasNextPage ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Panel.Footer, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Panel.FooterButton, { label: t("common:close"), isCloseButton: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Panel.FooterButton,
        {
          label: t("common:load_more_results"),
          onClick: () => query.fetchNextPage(),
          disabled: query.isFetchingNextPage
        }
      )
    ] }) : null
  ] });
}
function ObservabilityPage({ datasetUpdates, updateJobs, clientDataIndexing }) {
  const updateJobsQuery = useContinuousScreeningUpdateJobsQuery(
    { limit: UPDATE_JOBS_PAGE_SIZE },
    {
      refetchInterval: (query) => getObservabilityRefetchInterval(areAllStatusesCompleted(query.state.data ?? [])),
      initialData: updateJobs
    }
  );
  const clientDataIndexingQuery = useContinuousScreeningClientDataIndexingQuery(
    { limit: CLIENT_DATA_INDEXING_PAGE_SIZE },
    {
      refetchInterval: (query) => getObservabilityRefetchInterval((query.state.data?.pendingItems ?? 0) === 0),
      ...clientDataIndexing === null ? {} : { initialData: clientDataIndexing }
    }
  );
  const datasetUpdatesQuery = useContinuousScreeningDatasetUpdatesQuery(
    { limit: DATASET_UPDATES_PAGE_SIZE },
    {
      refetchInterval: (query) => getObservabilityRefetchInterval(areAllStatusesCompleted(query.state.data ?? [])),
      initialData: datasetUpdates
    }
  );
  const clientDataIndexingData = clientDataIndexingQuery.data ?? clientDataIndexing;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Page.Main, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Page.Content, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("flex flex-col", pageLayoutGutter.gap), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(ScreeningNavigationTabs, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("grid grid-cols-1 lg:grid-cols-2", pageLayoutGutter.gap), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ClientDataIndexing, { data: clientDataIndexingData }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DatasetUpdate, { data: datasetUpdatesQuery.data ?? datasetUpdates }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(UpdateJobs, { data: updateJobsQuery.data ?? updateJobs })
    ] })
  ] }) }) });
}
function ContinuousScreeningObservability() {
  const {
    datasetUpdates,
    updateJobs,
    clientDataIndexing
  } = Route$1e.useLoaderData();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ObservabilityPage, { datasetUpdates, updateJobs, clientDataIndexing });
}
export {
  ContinuousScreeningObservability as component
};

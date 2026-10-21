import { Q as jsxRuntimeExports, M as reactExports } from "./server.mjs";
import { u as useTranslation, S as Typo, g as useFormatLanguage, a as useFormatDateTime, h as formatNumber, aF as useVirtualTable, aD as Table, I as Icon } from "./Tabs-CzpyUi7T.mjs";
import { aj as scenarioI18n, aH as Route$p, P as Page, B as BreadCrumbs, L as Link } from "./router-KSC-NEr8.mjs";
import { c as createColumnHelper } from "./columnHelper-dCJ-kjEm.mjs";
import { u as useListScheduleExecutions, g as getScheduledExecutionsRefetchInterval } from "./list-scheduled-executions-tic-6Gm_.mjs";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "./services-middleware-nMulUXHZ.mjs";
import "./short-uuid-fTZYJj_k.mjs";
import "node:crypto";
import "./use-callback-ref-DoQNLci-.mjs";
import "./sharpstate.es-C0BW2AZi.mjs";
import "./formatDistanceStrict-DEEeAR-Y.mjs";
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
import "./decisions-BECqiOw3.mjs";
import "./useQuery-Bb0AEcpf.mjs";
import "./useBaseQuery-BqF2iw7Y.mjs";
import "./useServerFn-oRH5Nw97.mjs";
const columnHelper = createColumnHelper();
function ScheduledExecutionsList({ scheduledExecutions }) {
  const { t } = useTranslation(scenarioI18n);
  const language = useFormatLanguage();
  const formatDateTime = useFormatDateTime();
  const showManifestRowsProcessed = scheduledExecutions.some((e) => e.deduplicateObjects);
  const columns = reactExports.useMemo(
    () => [
      columnHelper.accessor((s) => s.numberOfCreatedDecisions, {
        id: "number-of-created-decisions",
        cell: ({ row, getValue }) => {
          const numberOfCreatedDecisions = getValue();
          const formattedNumber = formatNumber(numberOfCreatedDecisions, {
            language
          });
          if (numberOfCreatedDecisions > 0) {
            return /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/detection/decisions",
                search: { scheduledExecutionId: [row.original.id] },
                className: "hover:text-purple-hover focus:text-purple-hover text-purple-primary relative font-semibold hover:underline focus:underline",
                children: formattedNumber
              }
            );
          }
          return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: formattedNumber });
        },
        header: t("scenarios:scheduled_execution.number_of_created_decisions"),
        size: 100
      }),
      columnHelper.accessor((s) => s.numberOfEvaluatedDecisions, {
        id: "number-of-evaluated-decisions",
        cell: ({ getValue }) => {
          const numberOfEvaluatedDecisions = getValue();
          return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: formatNumber(numberOfEvaluatedDecisions, {
            language
          }) });
        },
        header: t("scenarios:scheduled_execution.number_of_evaluated_decisions"),
        size: 100
      }),
      columnHelper.accessor((s) => s.numberOfPlannedDecisions, {
        id: "number-of-planned-decisions",
        cell: ({ getValue }) => {
          const numberOfPlannedDecisions = getValue();
          if (numberOfPlannedDecisions === null) {
            return null;
          }
          return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: formatNumber(numberOfPlannedDecisions, {
            language
          }) });
        },
        header: t("scenarios:scheduled_execution.number_of_planned_decisions"),
        size: 100
      }),
      ...showManifestRowsProcessed ? [
        columnHelper.accessor((s) => s.manifestRowsProcessed, {
          id: "manifest-rows-processed",
          cell: ({ getValue }) => {
            const manifestRowsProcessed = getValue();
            return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: formatNumber(manifestRowsProcessed, {
              language
            }) });
          },
          header: t("scenarios:scheduled_execution.manifest_rows_processed"),
          size: 100
        })
      ] : [],
      columnHelper.accessor((s) => s.status, {
        id: "status",
        cell: ({ getValue }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-row items-center gap-sm", children: [
          getStatusIcon(getValue()),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "capitalize", children: t(getStatusTKey(getValue())) })
        ] }),
        header: t("scenarios:scheduled_execution.status"),
        size: 100
      }),
      columnHelper.accessor((s) => formatDateTime(s.startedAt, { dateStyle: "short", timeStyle: "short" }), {
        id: "created_at",
        header: t("scenarios:scheduled_execution.created_at"),
        size: 100,
        cell: ({ getValue, cell }) => {
          return /* @__PURE__ */ jsxRuntimeExports.jsx("time", { dateTime: cell.row.original.startedAt, children: getValue() });
        }
      })
    ],
    [formatDateTime, language, t, showManifestRowsProcessed]
  );
  const { table, getBodyProps, rows, getContainerProps } = useVirtualTable({
    data: scheduledExecutions,
    columns,
    columnResizeMode: "onChange",
    enableSorting: false
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Table.Container, { ...getContainerProps(), className: "bg-surface-card max-h-[70dvh]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Table.Header, { headerGroups: table.getHeaderGroups() }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Table.Body, { ...getBodyProps(), children: rows.map((row) => {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Table.Row, { row }, row.id);
    }) })
  ] });
}
const getStatusIcon = (status) => {
  if (status === "success") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "tick", className: "text-green-primary size-6 shrink-0" });
  }
  if (status === "failure" || status === "partial_failure") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "cross", className: "text-red-primary size-6 shrink-0" });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "restart-alt", className: "text-grey-secondary size-6 shrink-0" });
};
const getStatusTKey = (status) => {
  if (status === "success") {
    return "scenarios:scheduled_execution.status_success";
  }
  if (status === "failure") {
    return "scenarios:scheduled_execution.status_failure";
  }
  if (status === "partial_failure") {
    return "scenarios:scheduled_execution.status_partial_failure";
  }
  if (status === "processing") {
    return "scenarios:scheduled_execution.status_processing";
  }
  return "scenarios:scheduled_execution.status_pending";
};
function ScheduledExecutions() {
  const {
    t
  } = useTranslation(scenarioI18n);
  const {
    scenarioId,
    scheduledExecutions
  } = Route$p.useLoaderData();
  const scheduledExecutionsQuery = useListScheduleExecutions({
    scenarioId,
    initialData: {
      scheduledExecutions
    },
    refetchInterval: (query) => getScheduledExecutionsRefetchInterval(query.state.data?.scheduledExecutions ?? [])
  });
  const currentScheduledExecutions = scheduledExecutionsQuery.data?.scheduledExecutions ?? scheduledExecutions;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Page.Main, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Page.Header, { className: "gap-md", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BreadCrumbs, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Page.Content, { width: "form", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typo, { variant: "title1", className: "text-grey-primary text-m", children: t("scenarios:home.execution.batch.scheduled_execution", {
        count: currentScheduledExecutions.length
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ScheduledExecutionsList, { scheduledExecutions: currentScheduledExecutions })
    ] })
  ] });
}
export {
  ScheduledExecutions as component
};

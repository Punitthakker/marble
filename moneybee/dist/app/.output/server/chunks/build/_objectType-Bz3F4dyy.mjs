import { M as reactExports, Q as jsxRuntimeExports, a0 as ClientOnly } from "./server.mjs";
import { u as useTranslation, I as Icon, T as Trans, B as Button, c as clsx, g as useFormatLanguage, a as useFormatDateTime, h as formatNumber, aF as useVirtualTable, aD as Table } from "./Tabs-CzpyUi7T.mjs";
import { Y as Route$V, P as Page } from "./router-KSC-NEr8.mjs";
import { P as Paper } from "./Paper-HCUf48Ym.mjs";
import { E as ExternalLink } from "./ExternalLink-BlVgwkVd.mjs";
import { L as LoadingIcon } from "./Spinner-DmLieYoS.mjs";
import { u as useUploadTableQuery } from "./upload-table-DaVYnXjO.mjs";
import { i as ingestingDataByCsvDocHref } from "./documentation-href-DY9fs71n.mjs";
import { z as zt } from "./create-context-k6HmQ6bB.mjs";
import { c as createColumnHelper } from "./columnHelper-dCJ-kjEm.mjs";
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
import "./Collapsible-CKx8cmdD.mjs";
import "./index-22HmyALM.mjs";
import "./data-9UajV2HK.mjs";
import "./data-BXamdbTM.mjs";
import "./useQuery-Bb0AEcpf.mjs";
import "./useBaseQuery-BqF2iw7Y.mjs";
import "./useServerFn-oRH5Nw97.mjs";
const columnHelper = createColumnHelper();
const PastUploads = ({
  uploadLogs,
  onRefresh,
  isFetching
}) => {
  const {
    t
  } = useTranslation(["upload"]);
  const language = useFormatLanguage();
  const formatDateTime = useFormatDateTime();
  const columns = reactExports.useMemo(() => [columnHelper.accessor((row) => row.started_at, {
    id: "upload.started_at",
    header: t("upload:started_at"),
    size: 200,
    cell: ({
      getValue
    }) => {
      const dateTime = getValue();
      return /* @__PURE__ */ jsxRuntimeExports.jsx("time", { dateTime, children: formatDateTime(dateTime, {
        dateStyle: "short",
        timeStyle: "short"
      }) });
    }
  }), columnHelper.accessor((row) => row.finished_at, {
    id: "upload.finished_at",
    header: t("upload:finished_at"),
    size: 200,
    cell: ({
      getValue
    }) => {
      const dateTime = getValue();
      if (!dateTime) return "";
      return /* @__PURE__ */ jsxRuntimeExports.jsx("time", { dateTime, children: formatDateTime(dateTime, {
        dateStyle: "short",
        timeStyle: "short"
      }) });
    }
  }), columnHelper.accessor((row) => row.lines_processed, {
    id: "upload.lines_processed",
    cell: ({
      getValue
    }) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: formatNumber(getValue(), {
      language
    }) }),
    header: t("upload:lines_processed"),
    size: 200
  }), columnHelper.accessor((row) => row.num_rows_ingested, {
    id: "upload.num_rows_ingested",
    cell: ({
      getValue
    }) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: formatNumber(getValue(), {
      language
    }) }),
    header: t("upload:num_rows_ingested"),
    size: 200
  }), columnHelper.accessor((row) => row.status, {
    id: "upload.status",
    cell: ({
      getValue
    }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-row items-center gap-sm", children: [
      getStatusIcon(getValue()),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "capitalize", children: t(getStatusTKey(getValue())) })
    ] }),
    header: t("upload:upload_status"),
    size: 200
  })], [formatDateTime, language, t]);
  const {
    getBodyProps,
    getContainerProps,
    table,
    rows
  } = useVirtualTable({
    data: uploadLogs,
    columns,
    columnResizeMode: "onChange",
    enableSorting: false
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Paper.Container, { className: "bg-surface-card mb-2xl w-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Paper.Title, { children: t("upload:past_uploads") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", size: "small", onClick: onRefresh, disabled: isFetching, "aria-label": t("upload:refresh"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingIcon, { icon: "restart-alt", loading: isFetching, className: "size-4" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Table.Container, { ...getContainerProps(), className: "max-h-96", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Table.Header, { headerGroups: table.getHeaderGroups() }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Table.Body, { ...getBodyProps(), children: rows.map((row) => /* @__PURE__ */ jsxRuntimeExports.jsx(Table.Row, { row }, row.id)) })
    ] })
  ] });
};
const getStatusIcon = (status) => {
  if (status === "success") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "tick", className: "text-green-primary size-6" });
  }
  if (status === "failure") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "cross", className: "text-red-primary size-6" });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "restart-alt", className: "text-grey-secondary size-6" });
};
const getStatusTKey = (status) => {
  if (status === "success") {
    return "upload:status_success";
  }
  if (status === "failure") {
    return "upload:status_failure";
  }
  if (status === "processing") {
    return "upload:status_processing";
  }
  return "upload:status_pending";
};
function Upload() {
  const {
    t
  } = useTranslation(["common", "upload"]);
  const {
    objectType,
    uploadLogs: initialUploadLogs
  } = Route$V.useLoaderData();
  const {
    data: uploadLogs = initialUploadLogs,
    refetch,
    isFetching
  } = useUploadTableQuery(objectType, true);
  const handleRefresh = reactExports.useCallback(() => {
    void refetch().then((result) => {
      if (result.isError) zt.error(t("common:errors.unknown"));
    });
  }, [refetch, t]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Page.Main, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Page.Header, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "upload", className: "me-sm size-6" }),
      t("upload:upload_cta", {
        replace: {
          objectType
        }
      })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Page.Container, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Page.Description, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "whitespace-pre-wrap", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Trans, { t, i18nKey: "upload:upload_callout_1", components: {
          DocLink: /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { href: ingestingDataByCsvDocHref })
        }, values: {
          objectType
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        t("upload:upload_callout_2")
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Page.Content, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ClientOnly, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingButton, {}) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ClientOnly, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(Loading, {}) }),
        uploadLogs.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(PastUploads, { uploadLogs, onRefresh: handleRefresh, isFetching }) : null
      ] })
    ] })
  ] });
}
const Loading = ({
  className
}) => {
  const {
    t
  } = useTranslation(["common"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: clsx(className, "border-grey-placeholder flex h-60 flex-col items-center justify-center gap-md rounded-sm border-2 border-dashed"), children: t("common:loading") });
};
const LoadingButton = () => {
  const {
    t
  } = useTranslation(["upload"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "secondary", className: "cursor-wait", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "helpcenter", className: "me-sm size-5" }),
    t("upload:download_template_cta")
  ] });
};
export {
  Upload as component
};

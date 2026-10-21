import { M as reactExports, Q as jsxRuntimeExports } from "./server.mjs";
import { c as columnHelper } from "./webhooks-3eORnZbc.mjs";
import { a as Callout } from "./Callout-B0OuRL3q.mjs";
import { u as useTranslation, aC as useTable, S as Typo, T as Trans, B as Button, I as Icon, aD as Table } from "./Tabs-CzpyUi7T.mjs";
import { b as captureException } from "./services-middleware-nMulUXHZ.mjs";
import { P as Page } from "./router-KSC-NEr8.mjs";
import { C as CollapsiblePaper } from "./Paper-HCUf48Ym.mjs";
import { E as ExternalLink } from "./ExternalLink-BlVgwkVd.mjs";
import { E as EventTypes } from "./EventTypes-BNv8nQ3g.mjs";
import { w as webhooksSetupDocHref } from "./documentation-href-DY9fs71n.mjs";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "./columnHelper-dCJ-kjEm.mjs";
import "./use-callback-ref-DoQNLci-.mjs";
import "./sharpstate.es-C0BW2AZi.mjs";
import "./formatDistanceStrict-DEEeAR-Y.mjs";
import "./short-uuid-fTZYJj_k.mjs";
import "node:crypto";
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
import "./Collapsible-CKx8cmdD.mjs";
import "./index-22HmyALM.mjs";
import "./Highlight-NVjBw0RI.mjs";
import "./match-sorter.esm-BRMYSlZQ.mjs";
import "./array-BFSjnO9c.mjs";
function WebhooksError({
  error
}) {
  captureException(error);
  const {
    t
  } = useTranslation(["settings"]);
  const columns = reactExports.useMemo(() => {
    return [columnHelper.accessor((row) => row.url, {
      id: "url",
      header: t("settings:webhooks.url"),
      size: 200
    }), columnHelper.accessor((row) => row.eventTypes, {
      id: "eventTypes",
      header: t("settings:webhooks.event_types"),
      size: 200,
      cell: ({
        getValue
      }) => {
        const eventTypes = getValue();
        if (eventTypes.length === 0) {
          return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-grey-disabled text-s", children: t("settings:webhooks.event_types.placeholder") });
        }
        return /* @__PURE__ */ jsxRuntimeExports.jsx(EventTypes, { eventTypes });
      }
    })];
  }, [t]);
  const {
    table,
    getBodyProps,
    rows,
    getContainerProps
  } = useTable({
    data: [],
    columns,
    enableSorting: false,
    enableColumnResizing: false
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Page.Content, { width: "readable", className: "relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-grey-primary/20 absolute z-50 flex size-full items-center justify-center p-md backdrop-blur-[2px] transition-all", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-surface-card border-grey-border flex max-w-[500px] flex-col items-center rounded-sm border shadow-md", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typo, { variant: "title1", className: "bg-grey-background w-full p-xl text-center", children: t("settings:webhooks.configuration_error") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full p-3xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Callout, { variant: "outlined", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "whitespace-pre-wrap", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trans, { t, i18nKey: "settings:webhooks.convoy_error", components: {
        DocLink: /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { href: webhooksSetupDocHref })
      } }) }) }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CollapsiblePaper.Container, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CollapsiblePaper.Title, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1", children: t("settings:webhooks") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "primary", disabled: true, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "plus", className: "size-5" }),
          t("settings:webhooks.new_webhook")
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CollapsiblePaper.Content, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Callout, { className: "mb-md lg:mb-lg", variant: "outlined", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "whitespace-pre-wrap", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trans, { t, i18nKey: "settings:webhooks.setup_documentation", components: {
          DocLink: /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { href: webhooksSetupDocHref })
        } }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Table.Container, { ...getContainerProps(), className: "max-h-96", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Table.Header, { headerGroups: table.getHeaderGroups() }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Table.Body, { ...getBodyProps(), children: rows.map((row) => {
            return /* @__PURE__ */ jsxRuntimeExports.jsx(Table.Row, { row }, row.id);
          }) })
        ] })
      ] })
    ] })
  ] });
}
export {
  WebhooksError as errorComponent
};

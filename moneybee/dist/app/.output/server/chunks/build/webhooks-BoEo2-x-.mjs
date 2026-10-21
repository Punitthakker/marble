import { M as reactExports, Q as jsxRuntimeExports } from "./server.mjs";
import { c as columnHelper } from "./webhooks-3eORnZbc.mjs";
import { a as Callout } from "./Callout-B0OuRL3q.mjs";
import { X as Route$X, P as Page, L as Link } from "./router-KSC-NEr8.mjs";
import { u as useTranslation, aC as useTable, B as Button, I as Icon, T as Trans, aD as Table } from "./Tabs-CzpyUi7T.mjs";
import { C as CollapsiblePaper } from "./Paper-HCUf48Ym.mjs";
import { E as ExternalLink } from "./ExternalLink-BlVgwkVd.mjs";
import { C as CreateWebhook } from "./CreateWebhook-DjTSY4qY.mjs";
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
import "./use-callback-ref-DoQNLci-.mjs";
import "./sharpstate.es-C0BW2AZi.mjs";
import "./Collapsible-CKx8cmdD.mjs";
import "./index-22HmyALM.mjs";
import "./FormErrorOrDescription-BncG6ljR.mjs";
import "./FormInput-CsT_ETvr.mjs";
import "./FormLabel-DseYo_2t.mjs";
import "./Nudge-Cmzwt2Be.mjs";
import "./LoaderRevalidatorContext-BEuG7sHs.mjs";
import "./settings-Cx4KA480.mjs";
import "./settings-vUgGED-h.mjs";
import "./useMutation-BOdeDeAR.mjs";
import "./useServerFn-oRH5Nw97.mjs";
import "./form-D2XmDKeG.mjs";
import "./array-BFSjnO9c.mjs";
import "./useForm-qNQ8S9xN.mjs";
import "./Modal-CpYmGWjB.mjs";
import "./Highlight-NVjBw0RI.mjs";
import "./match-sorter.esm-BRMYSlZQ.mjs";
function Webhooks() {
  const {
    t
  } = useTranslation(["settings"]);
  const {
    webhooks,
    isCreateWebhookAvailable,
    webhooksStatus
  } = Route$X.useLoaderData();
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
    data: webhooks,
    columns,
    columnResizeMode: "onChange",
    enableSorting: false,
    rowLink: (webhook) => /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/settings/webhooks/$webhookId", params: {
      webhookId: webhook.id
    } })
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Page.Content, { width: "readable", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CollapsiblePaper.Container, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CollapsiblePaper.Title, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1", children: t("settings:webhooks") }),
      isCreateWebhookAvailable ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { onClick: (e) => e.stopPropagation(), children: /* @__PURE__ */ jsxRuntimeExports.jsx(CreateWebhook, { webhookStatus: webhooksStatus, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "primary", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "plus", className: "size-5" }),
        t("settings:webhooks.new_webhook")
      ] }) }) }) : null
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
  ] }) });
}
export {
  Webhooks as component
};

import { Q as jsxRuntimeExports, ag as Outlet } from "./server.mjs";
import { q as Route$1q, P as Page, B as BreadCrumbs } from "./router-KSC-NEr8.mjs";
import { G as GraphSessionProvider } from "./GraphSessionContext-DR4cbEeZ.mjs";
import { G as GraphAccessPlaceholder } from "./GraphAccessPlaceholder-DQkS9P6P.mjs";
import { D as DataModelContextProvider } from "./data-model-Dfj0lN5a.mjs";
import { a2 as getGraphExplorationDisplay } from "./feature-access-BSdB6UiC.mjs";
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
import "./Tabs-CzpyUi7T.mjs";
import "./use-callback-ref-DoQNLci-.mjs";
import "./sharpstate.es-C0BW2AZi.mjs";
import "./formatDistanceStrict-DEEeAR-Y.mjs";
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
import "./graph-CqpSMa0d.mjs";
import "./get-scoring-settings-CNgnpjXy.mjs";
import "./scoring-BqfH8vO5.mjs";
import "./user-scoring-BtNQ1U6a.mjs";
import "./useQuery-Bb0AEcpf.mjs";
import "./useBaseQuery-BqF2iw7Y.mjs";
import "./useServerFn-oRH5Nw97.mjs";
import "./display-TKj7AN5a.mjs";
import "./graph-BtfBHESi.mjs";
import "./generate-graph-DPfNXSLe.mjs";
import "./list-relations-Wj5vBboU.mjs";
import "./array-BFSjnO9c.mjs";
function TestGraphLayout() {
  const {
    dataModel,
    dataModelFeatureAccess
  } = Route$1q.useLoaderData();
  const graphDisplay = getGraphExplorationDisplay(dataModelFeatureAccess);
  if (graphDisplay === "placeholder") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(Page.Main, { className: "min-h-0 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Page.Header, { className: "h-auto flex-col items-start justify-center gap-sm py-md", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BreadCrumbs, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Page.Container, { className: "min-h-0 flex flex-1 flex-col", children: /* @__PURE__ */ jsxRuntimeExports.jsx(GraphAccessPlaceholder, {}) })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(DataModelContextProvider, { dataModel, dataModelFeatureAccess, children: /* @__PURE__ */ jsxRuntimeExports.jsx(GraphSessionProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Page.Main, { className: "min-h-0 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Page.Header, { className: "h-auto flex-col items-start justify-center gap-sm py-md", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BreadCrumbs, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Page.Container, { className: "min-h-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) })
  ] }) }) });
}
export {
  TestGraphLayout as component
};

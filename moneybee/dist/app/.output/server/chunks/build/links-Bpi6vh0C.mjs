import { M as reactExports, Q as jsxRuntimeExports, ag as Outlet } from "./server.mjs";
import { g as getGraphEligiblePivots } from "./graph-pivots-Bblee9BN.mjs";
import { C as CommentContext } from "./comment-context-BW3odHTX.mjs";
import { P as PivotTabs } from "./PivotTabs-CJLofeew.mjs";
import { aL as Route$h } from "./router-KSC-NEr8.mjs";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "./Tabs-CzpyUi7T.mjs";
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
import "./scenarios-C5R2TE8p.mjs";
function RouteComponent() {
  const {
    pivotObjects,
    dataModel
  } = Route$h.useRouteContext();
  const {
    set
  } = CommentContext.useValue();
  const eligiblePivots = getGraphEligiblePivots(pivotObjects, dataModel);
  reactExports.useEffect(() => {
    set(null);
  }, [set]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-0 flex-1 flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PivotTabs, { pivots: eligiblePivots, numberedFrom: pivotObjects, to: "./links/$pivotValue" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-0 flex-1 flex-col", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) })
  ] });
}
export {
  RouteComponent as component
};

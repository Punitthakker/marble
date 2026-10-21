import { c as createServerRpc } from "./createServerRpc-Dxre0F6X.mjs";
import { p as paginationSchema, d as decisionFiltersSchema, i as isUnboundedDateRange } from "./decisions--eKWwSYj.mjs";
import { a as authMiddleware } from "./auth-middleware-eNRVfU3l.mjs";
import { aW as RequestTimeoutError } from "./services-middleware-nMulUXHZ.mjs";
import { $ as createServerFn } from "./server.mjs";
import { M as intersection } from "./short-uuid-fTZYJj_k.mjs";
import "./Tabs-CzpyUi7T.mjs";
import "./use-callback-ref-DoQNLci-.mjs";
import "./sharpstate.es-C0BW2AZi.mjs";
import "./formatDistanceStrict-DEEeAR-Y.mjs";
import "./coerce-UidCu_Sb.mjs";
import "./logger.server-DV14d0iZ.mjs";
import "node:async_hooks";
import "node:os";
import "node:events";
import "node:diagnostics_channel";
import "fs";
import "events";
import "util";
import "path";
import "assert";
import "worker_threads";
import "module";
import "node:fs";
import "node:path";
import "node:url";
import "url";
import "buffer";
import "node:crypto";
import "node:stream";
import "node:stream/web";
import "crypto";
import "async_hooks";
import "stream";
const decisionsListQueryParamsSchema = intersection(decisionFiltersSchema, paginationSchema);
const decisionsPageLoader_createServerFn_handler = createServerRpc({
  id: "fdd9ec166d963a24c1838235b18cc526be6a43078b103c76926e303b080dddf6",
  name: "decisionsPageLoader",
  filename: "src/routes/_app/_builder/detection/decisions/index.tsx"
}, (opts) => decisionsPageLoader.__executeServer(opts));
const decisionsPageLoader = createServerFn({
  method: "GET"
}).middleware([authMiddleware]).validator(decisionsListQueryParamsSchema).handler(decisionsPageLoader_createServerFn_handler, async function decisionsPageLoader2({
  context,
  data
}) {
  const {
    scenario,
    dataModelRepository,
    inbox
  } = context.authInfo;
  const [scenarios, pivots, inboxes] = await Promise.all([scenario.listScenarios(), dataModelRepository.listPivots({}), inbox.listInboxes()]);
  return {
    scenarios,
    filters: data,
    hasPivots: pivots.length > 0,
    inboxes
  };
});
const listDecisionsLoader_createServerFn_handler = createServerRpc({
  id: "938d5b05976c0a602b05a12b68c2acb76503955fb38897430b7b9f1d21bbda66",
  name: "listDecisionsLoader",
  filename: "src/routes/_app/_builder/detection/decisions/index.tsx"
}, (opts) => listDecisionsLoader.__executeServer(opts));
const listDecisionsLoader = createServerFn({
  method: "GET"
}).middleware([authMiddleware]).validator(decisionsListQueryParamsSchema).handler(listDecisionsLoader_createServerFn_handler, async function listDecisionsLoader2({
  context,
  data
}) {
  const {
    decision
  } = context.authInfo;
  const {
    outcomeAndReviewStatus,
    dateRange,
    ...filters
  } = data;
  const listDateRange = isUnboundedDateRange(dateRange) ? void 0 : dateRange;
  try {
    const decisionsData = await decision.listDecisions({
      outcome: outcomeAndReviewStatus?.outcome ? [outcomeAndReviewStatus.outcome] : [],
      reviewStatus: outcomeAndReviewStatus?.reviewStatus ? [outcomeAndReviewStatus.reviewStatus] : [],
      ...filters,
      dateRange: listDateRange
    });
    return {
      decisionsData,
      listError: void 0
    };
  } catch (error) {
    if (error instanceof RequestTimeoutError) {
      return {
        decisionsData: {
          items: [],
          hasNextPage: false
        },
        listError: "request_timeout"
      };
    }
    throw error;
  }
});
export {
  decisionsPageLoader_createServerFn_handler,
  listDecisionsLoader_createServerFn_handler
};

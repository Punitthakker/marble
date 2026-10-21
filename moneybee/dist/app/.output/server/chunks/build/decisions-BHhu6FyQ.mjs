import { c as createServerRpc } from "./createServerRpc-Dxre0F6X.mjs";
import { a as authMiddleware } from "./auth-middleware-eNRVfU3l.mjs";
import { $ as createServerFn } from "./server.mjs";
import { o as object, s as string } from "./short-uuid-fTZYJj_k.mjs";
import "./services-middleware-nMulUXHZ.mjs";
import "node:crypto";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
import "util";
import "crypto";
import "async_hooks";
import "stream";
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
const getDecisionFn_createServerFn_handler = createServerRpc({
  id: "3a651c5d7543d6a0711d8deb740e72de4c2f5a2f33409e8a72e8e4da000dad69",
  name: "getDecisionFn",
  filename: "src/server-fns/decisions.ts"
}, (opts) => getDecisionFn.__executeServer(opts));
const getDecisionFn = createServerFn({
  method: "GET"
}).middleware([authMiddleware]).validator(object({
  decisionId: string()
})).handler(getDecisionFn_createServerFn_handler, async ({
  context,
  data
}) => {
  const decision = await context.authInfo.decision.getDecisionById(data.decisionId);
  return {
    decision
  };
});
const listScheduledExecutionsFn_createServerFn_handler = createServerRpc({
  id: "c6f2dde5ef292a65f4795cd0def69043a1a11bd2b7d87d95d19293ad131fd1a0",
  name: "listScheduledExecutionsFn",
  filename: "src/server-fns/decisions.ts"
}, (opts) => listScheduledExecutionsFn.__executeServer(opts));
const listScheduledExecutionsFn = createServerFn({
  method: "GET"
}).middleware([authMiddleware]).validator(object({
  scenarioId: string().optional()
}).optional()).handler(listScheduledExecutionsFn_createServerFn_handler, async ({
  context,
  data
}) => {
  const scheduledExecutions = await context.authInfo.decision.listScheduledExecutions({
    scenarioId: data?.scenarioId
  });
  return {
    scheduledExecutions
  };
});
export {
  getDecisionFn_createServerFn_handler,
  listScheduledExecutionsFn_createServerFn_handler
};

import { c as createServerRpc } from "./createServerRpc-Dxre0F6X.mjs";
import { a as authMiddleware } from "./auth-middleware-eNRVfU3l.mjs";
import { j as fromParams } from "./short-uuid-fTZYJj_k.mjs";
import { $ as createServerFn } from "./server.mjs";
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
const scheduledExecutionsLoader_createServerFn_handler = createServerRpc({
  id: "77f970bfcb5f2e16f137b6d50579e1eaca7df3471d314b70a928bd2fffd6e4da",
  name: "scheduledExecutionsLoader",
  filename: "src/routes/_app/_builder/detection/scenarios/$scenarioId/scheduled-executions.tsx"
}, (opts) => scheduledExecutionsLoader.__executeServer(opts));
const scheduledExecutionsLoader = createServerFn().middleware([authMiddleware]).validator((input) => input).handler(scheduledExecutionsLoader_createServerFn_handler, async function scheduledExecutionsLoader2({
  data,
  context
}) {
  const scenarioId = fromParams(data?.params ?? {}, "scenarioId");
  const scheduledExecutions = await context.authInfo.decision.listScheduledExecutions({
    scenarioId
  });
  return {
    scenarioId,
    scheduledExecutions
  };
});
export {
  scheduledExecutionsLoader_createServerFn_handler
};

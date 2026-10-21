import { c as createServerRpc } from "./createServerRpc-Dxre0F6X.mjs";
import { a as authMiddleware } from "./auth-middleware-eNRVfU3l.mjs";
import { a$ as adaptScenarioIterationSummaryWithType } from "./services-middleware-nMulUXHZ.mjs";
import { j as fromParams } from "./short-uuid-fTZYJj_k.mjs";
import { $ as createServerFn } from "./server.mjs";
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
const scenarioData_createServerFn_handler = createServerRpc({
  id: "de490983d4997d232b884399c941d6395a6a47d83f1d2df248b24ed6ba673987",
  name: "scenarioData",
  filename: "src/routes/_app/_builder/detection/scenarios/$scenarioId.tsx"
}, (opts) => scenarioData.__executeServer(opts));
const scenarioData = createServerFn().middleware([authMiddleware]).validator((input) => input).handler(scenarioData_createServerFn_handler, async function scenarioLayoutLoader({
  data,
  context
}) {
  const scenarioId = fromParams(data?.params ?? {}, "scenarioId");
  const [currentScenario, scenarioIterations] = await Promise.all([context.authInfo.scenario.getScenario({
    scenarioId
  }), context.authInfo.scenario.listScenarioIterationsMetadata({
    scenarioId
  })]);
  return {
    currentScenario,
    scenarioIterations: scenarioIterations.map((dto) => adaptScenarioIterationSummaryWithType(dto, currentScenario.liveVersionId))
  };
});
export {
  scenarioData_createServerFn_handler
};

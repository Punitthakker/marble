import { c as createServerRpc } from "./createServerRpc-Dxre0F6X.mjs";
import { a as authMiddleware } from "./auth-middleware-eNRVfU3l.mjs";
import { c as isEditScenarioAvailable } from "./feature-access-BSdB6UiC.mjs";
import { $ as createServerFn } from "./server.mjs";
import "./services-middleware-nMulUXHZ.mjs";
import "./short-uuid-fTZYJj_k.mjs";
import "node:crypto";
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
import "node:stream";
import "node:stream/web";
import "crypto";
import "async_hooks";
import "stream";
const scenariosLoader_createServerFn_handler = createServerRpc({
  id: "0acb523b5f97ff683b231261a0120f2ad490d294ede3b29b519c3173ddc98731",
  name: "scenariosLoader",
  filename: "src/routes/_app/_builder/detection/scenarios/index.tsx"
}, (opts) => scenariosLoader.__executeServer(opts));
const scenariosLoader = createServerFn().middleware([authMiddleware]).handler(scenariosLoader_createServerFn_handler, async function scenariosLoader2({
  context
}) {
  const scenarios = await context.authInfo.scenario.listScenarios();
  const iterationsMetadata = await Promise.all(scenarios.map((s) => context.authInfo.scenario.listScenarioIterationsMetadata({
    scenarioId: s.id
  })));
  const scenarioMetadataMap = Object.fromEntries(scenarios.map((s, i) => {
    const iterations = iterationsMetadata[i] ?? [];
    const versions = iterations.map((it) => it.version);
    return [s.id, {
      versions
    }];
  }));
  return {
    isEditScenarioAvailable: isEditScenarioAvailable(context.authInfo.user),
    scenarios,
    scenarioMetadataMap
  };
});
export {
  scenariosLoader_createServerFn_handler
};

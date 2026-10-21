import { c as createServerRpc } from "./createServerRpc-Dxre0F6X.mjs";
import { a as authMiddleware } from "./auth-middleware-eNRVfU3l.mjs";
import { f as fromUUIDtoSUUID } from "./short-uuid-fTZYJj_k.mjs";
import { $ as createServerFn, H as redirect } from "./server.mjs";
import "./services-middleware-nMulUXHZ.mjs";
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
const analyticsIndexLoader_createServerFn_handler = createServerRpc({
  id: "1dda07efb7eddbc1a3c062ed5bae0127a4b92d7ed30c6c541cf160b40c6cd9ce",
  name: "analyticsIndexLoader",
  filename: "src/routes/_app/_builder/detection/analytics/index.tsx"
}, (opts) => analyticsIndexLoader.__executeServer(opts));
const analyticsIndexLoader = createServerFn().middleware([authMiddleware]).handler(analyticsIndexLoader_createServerFn_handler, async function analyticsIndexLoader2({
  context
}) {
  const {
    scenario
  } = context.authInfo;
  const scenarios = await scenario.listScenarios();
  const firstScenario = scenarios[0];
  if (firstScenario) {
    throw redirect({
      to: "/detection/analytics/$scenarioId",
      params: {
        scenarioId: fromUUIDtoSUUID(firstScenario.id)
      }
    });
  }
  throw redirect({
    to: "/detection/scenarios"
  });
});
export {
  analyticsIndexLoader_createServerFn_handler
};

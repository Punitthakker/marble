import { c as createServerRpc } from "./createServerRpc-Dxre0F6X.mjs";
import { a as authMiddleware } from "./auth-middleware-eNRVfU3l.mjs";
import { a as isAnalyticsAvailable } from "./feature-access-BSdB6UiC.mjs";
import { o as object, s as string, c as fromSUUIDtoUUID } from "./short-uuid-fTZYJj_k.mjs";
import { $ as createServerFn } from "./server.mjs";
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
const paramsSchema = object({
  scenarioId: string().transform((id) => fromSUUIDtoUUID(id))
});
const analyticsLoader_createServerFn_handler = createServerRpc({
  id: "05bb58e2b97b1cc2316fd5a122fc1baf8ed2ef60d1a52ae56a4f4402675f5a55",
  name: "analyticsLoader",
  filename: "src/routes/_app/_builder/detection/analytics/$scenarioId.tsx"
}, (opts) => analyticsLoader.__executeServer(opts));
const analyticsLoader = createServerFn().middleware([authMiddleware]).validator(paramsSchema).handler(analyticsLoader_createServerFn_handler, async function analyticsLoader2({
  data,
  context
}) {
  const {
    scenario,
    user,
    entitlements
  } = context.authInfo;
  const [scenarios, scenarioIterations] = await Promise.all([scenario.listScenarios(), scenario.listScenarioIterations({
    scenarioId: data.scenarioId
  })]);
  return {
    scenarioId: data.scenarioId,
    scenarios,
    scenarioVersions: scenarioIterations.filter(({
      version
    }) => version !== null).map(({
      version,
      createdAt
    }) => ({
      version,
      createdAt
    })),
    isAnalyticsAvailable: isAnalyticsAvailable(user, entitlements)
  };
});
export {
  analyticsLoader_createServerFn_handler
};

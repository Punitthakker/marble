import { c as createServerRpc } from "./createServerRpc-Dxre0F6X.mjs";
import { a as authMiddleware } from "./auth-middleware-eNRVfU3l.mjs";
import { B as isAccessible, Q as isAiRuleBuildingAvailable } from "./feature-access-BSdB6UiC.mjs";
import { $ as createServerFn } from "./server.mjs";
import "./services-middleware-nMulUXHZ.mjs";
import "./short-uuid-fTZYJj_k.mjs";
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
const rulesLoader_createServerFn_handler = createServerRpc({
  id: "896a1ecc11846a9461e21facf77adf667f611a1ae5b520fb3166be717fd06c95",
  name: "rulesLoader",
  filename: "src/routes/_app/_builder/detection/scenarios/$scenarioId/i/$iterationId/_edit-view/rules.tsx"
}, (opts) => rulesLoader.__executeServer(opts));
const rulesLoader = createServerFn().middleware([authMiddleware]).handler(rulesLoader_createServerFn_handler, async function rulesLoader2({
  context
}) {
  const {
    entitlements
  } = context.authInfo;
  return {
    isSanctionAvailable: entitlements.sanctions,
    isAiRuleDescriptionEnabled: isAiRuleBuildingAvailable(entitlements),
    isNameRecognitionAvailable: isAccessible(entitlements.nameRecognition)
  };
});
export {
  rulesLoader_createServerFn_handler
};

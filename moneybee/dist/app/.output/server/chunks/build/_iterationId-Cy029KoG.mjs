import { c as createServerRpc } from "./createServerRpc-Dxre0F6X.mjs";
import { a as authMiddleware } from "./auth-middleware-eNRVfU3l.mjs";
import { c as isEditScenarioAvailable } from "./feature-access-BSdB6UiC.mjs";
import { j as fromParams } from "./short-uuid-fTZYJj_k.mjs";
import { $ as createServerFn } from "./server.mjs";
import { e } from "./isNullish-B8pc8Ntu.mjs";
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
const iterationLayoutLoader_createServerFn_handler = createServerRpc({
  id: "fafa18929cdae382d01409ef2653af321d4e1509920f23eaf5ac11e8be1f519f",
  name: "iterationLayoutLoader",
  filename: "src/routes/_app/_builder/detection/scenarios/$scenarioId/i/$iterationId.tsx"
}, (opts) => iterationLayoutLoader.__executeServer(opts));
const iterationLayoutLoader = createServerFn().middleware([authMiddleware]).validator((input) => input).handler(iterationLayoutLoader_createServerFn_handler, async function iterationLayoutLoader2({
  data,
  context
}) {
  const {
    scenarioIterationRuleRepository,
    scenario,
    user
  } = context.authInfo;
  const iterationId = fromParams(data?.params ?? {}, "iterationId");
  const [scenarioIteration, scenarioValidation, rulesMetadata] = await Promise.all([scenario.getScenarioIterationWithoutRules({
    iterationId
  }), scenario.validate({
    iterationId
  }), scenarioIterationRuleRepository.listRulesMetadata({
    scenarioIterationId: iterationId
  })]);
  const editorMode = isEditScenarioAvailable(user) && e(scenarioIteration.version) && !scenarioIteration.archived ? "edit" : "view";
  const rulesList = [...rulesMetadata.map((r) => ({
    ...r,
    type: "rule"
  })), ...scenarioIteration.screeningConfigs.map((r) => ({
    ...r,
    type: "sanction"
  }))];
  return {
    editorMode,
    scenarioIteration,
    scenarioValidation,
    rulesMetadata,
    rulesList,
    screeningsConfigs: scenarioIteration.screeningConfigs
  };
});
export {
  iterationLayoutLoader_createServerFn_handler
};

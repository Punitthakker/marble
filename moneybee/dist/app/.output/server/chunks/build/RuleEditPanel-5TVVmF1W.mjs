import { c as createServerRpc } from "./createServerRpc-Dxre0F6X.mjs";
import { a as authMiddleware } from "./auth-middleware-eNRVfU3l.mjs";
import { $ as createServerFn } from "./server.mjs";
import { o as object, h as any, n as number, s as string } from "./short-uuid-fTZYJj_k.mjs";
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
const editRuleFormSchema = object({
  name: string().nonempty(),
  description: string().optional(),
  ruleGroup: string().optional(),
  scoreModifier: number().int().min(-1e3).max(1e3),
  formula: any()
});
const editRuleConfigurationSchema = object({
  params: object({
    ruleId: string()
  }),
  payload: editRuleFormSchema
});
const editRuleAction_createServerFn_handler = createServerRpc({
  id: "9400a11e6b2258983bbeb49c7002a1783418a7cb2735a2b7e80327517e28d11f",
  name: "editRuleAction",
  filename: "src/components/Scenario/Rules/RuleEditPanel.tsx"
}, (opts) => editRuleAction.__executeServer(opts));
const editRuleAction = createServerFn({
  method: "POST"
}).middleware([authMiddleware]).validator(editRuleConfigurationSchema).handler(editRuleAction_createServerFn_handler, async function editRuleAction2({
  context,
  data: {
    params,
    payload
  }
}) {
  const {
    scenarioIterationRuleRepository
  } = context.authInfo;
  return await scenarioIterationRuleRepository.updateRule({
    ruleId: params.ruleId,
    ...payload
  });
});
export {
  editRuleAction_createServerFn_handler
};

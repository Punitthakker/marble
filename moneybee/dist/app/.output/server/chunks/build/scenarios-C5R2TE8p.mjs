import { o as object, s as string, u as uuid, b as boolean, l as literal } from "./short-uuid-fTZYJj_k.mjs";
const activateIterationPayloadSchema = object({
  willBeLive: boolean().pipe(literal(true)),
  changeIsImmediate: boolean().pipe(literal(true))
});
const commitIterationPayloadSchema = object({
  draftIsReadOnly: boolean().pipe(literal(true)),
  activateToGoInProd: boolean().pipe(literal(true)),
  changeIsImmediate: boolean().pipe(literal(true))
});
const deactivateIterationPayloadSchema = object({
  stopOperating: boolean().pipe(literal(true)),
  changeIsImmediate: boolean().pipe(literal(true))
});
const prepareIterationPayloadSchema = object({
  activateToGoInProd: boolean().pipe(literal(true)),
  preparationIsAsync: boolean().pipe(literal(true))
});
const deleteRulePayloadSchema = object({
  ruleId: string()
});
const duplicateRulePayloadSchema = object({
  ruleId: string()
});
const archiveScenarioPayloadSchema = object({
  scenarioId: uuid()
});
const copyScenarioPayloadSchema = object({
  scenarioId: uuid(),
  name: string().optional()
});
const createScenarioPayloadSchema = object({
  name: string().min(1),
  description: string(),
  triggerObjectType: string().min(1)
});
const unarchiveScenarioPayloadSchema = object({
  scenarioId: uuid()
});
const updateScenarioPayloadSchema = object({
  scenarioId: uuid(),
  name: string().min(1),
  description: string()
});
const createTestRunPayloadSchema = object({
  refIterationId: string(),
  testIterationId: string(),
  endDate: string()
});
object({
  rule_id: string().uuid(),
  instruction: string().min(1)
});
const generateRuleInputSchema = object({
  scenarioId: string(),
  ruleId: string().uuid(),
  instruction: string().min(1)
});
const toggleScenarioDeduplicationPayloadSchema = object({
  scenarioId: uuid(),
  enabled: boolean()
});
export {
  archiveScenarioPayloadSchema as a,
  createScenarioPayloadSchema as b,
  copyScenarioPayloadSchema as c,
  updateScenarioPayloadSchema as d,
  activateIterationPayloadSchema as e,
  commitIterationPayloadSchema as f,
  generateRuleInputSchema as g,
  deactivateIterationPayloadSchema as h,
  deleteRulePayloadSchema as i,
  duplicateRulePayloadSchema as j,
  createTestRunPayloadSchema as k,
  prepareIterationPayloadSchema as p,
  toggleScenarioDeduplicationPayloadSchema as t,
  unarchiveScenarioPayloadSchema as u
};

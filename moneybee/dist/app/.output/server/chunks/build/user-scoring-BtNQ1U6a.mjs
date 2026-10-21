import { aJ as SECONDS_PER_UNIT } from "./services-middleware-nMulUXHZ.mjs";
import { o as object, a as array, h as any, s as string, n as number } from "./short-uuid-fTZYJj_k.mjs";
const ZodIssueCode = {
  custom: "custom"
};
const updateScoringRulesetPayloadSchema = object({
  id: string().optional(),
  recordType: string().nonempty(),
  name: string(),
  description: string().optional(),
  thresholds: array(number()).superRefine((arr, ctx) => {
    arr.forEach((val, i) => {
      if (i > 0 && val <= arr[i - 1]) {
        ctx.addIssue({ code: ZodIssueCode.custom, path: [i] });
      }
    });
  }),
  cooldownSeconds: number().min(SECONDS_PER_UNIT.days).optional(),
  scoringIntervalSeconds: number().min(SECONDS_PER_UNIT.days).optional(),
  rules: array(
    object({
      stableId: string().optional(),
      name: string(),
      description: string().optional(),
      riskType: string(),
      ast: any()
    })
  )
});
const updateScoringSettingsPayloadSchema = object({
  maxRiskLevel: number()
});
export {
  updateScoringSettingsPayloadSchema as a,
  updateScoringRulesetPayloadSchema as u
};

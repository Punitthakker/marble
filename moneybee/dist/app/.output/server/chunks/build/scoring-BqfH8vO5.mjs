import { c as createSsrRpc } from "./query-BmG5BEas.mjs";
import { a as authMiddleware } from "./auth-middleware-eNRVfU3l.mjs";
import { u as updateScoringRulesetPayloadSchema, a as updateScoringSettingsPayloadSchema } from "./user-scoring-BtNQ1U6a.mjs";
import { $ as createServerFn } from "./server.mjs";
import { o as object, s as string, i as union, n as number } from "./short-uuid-fTZYJj_k.mjs";
const commitScoringRulesetFn = createServerFn({
  method: "POST"
}).middleware([authMiddleware]).validator(object({
  recordType: string()
})).handler(createSsrRpc("800d797038baf8d66ec1d637c90f597245b65a7eddb551ae33ef64f74f29ac44"));
const listRulesetVersionsFn = createServerFn({
  method: "GET"
}).middleware([authMiddleware]).validator(object({
  recordType: string()
})).handler(createSsrRpc("d6d738fdfcaabc026ee9a89bb634b70594e90146acb5a6d74919ce286495ffd1"));
const listRulesetsFn = createServerFn({
  method: "GET"
}).middleware([authMiddleware]).handler(createSsrRpc("08bc5d654d0807bad820723ab83cf6e710498caf8f694cb2f435d2611d4b69c9"));
const prepareScoringRulesetFn = createServerFn({
  method: "POST"
}).middleware([authMiddleware]).validator(object({
  recordType: string()
})).handler(createSsrRpc("0c899cff78c3e6695fdb4d23a45413751555d22e51100f0f136c217b2420654f"));
const updateScoringRulesetFn = createServerFn({
  method: "POST"
}).middleware([authMiddleware]).validator(updateScoringRulesetPayloadSchema).handler(createSsrRpc("1a7b160b47d11879791526a71a49fce3e62a6ae808d0b9ac803e7bcd5fd335b6"));
const updateScoringSettingsFn = createServerFn({
  method: "POST"
}).middleware([authMiddleware]).validator(updateScoringSettingsPayloadSchema).handler(createSsrRpc("869f5d247e9a212cb4c13559fb791071613a77bbd6b823a7391a714e09347c62"));
const getScoringRulesetFn = createServerFn({
  method: "GET"
}).middleware([authMiddleware]).validator(object({
  recordType: string(),
  version: union([string(), number()]).optional()
})).handler(createSsrRpc("ad8fbd389de7e5a455788904859e3b8f3702c9f52e81c52078f165263976b78b"));
const getScoreDistributionFn = createServerFn({
  method: "GET"
}).middleware([authMiddleware]).validator(object({
  recordType: string()
})).handler(createSsrRpc("339ed5e5c8cda03774b6192da2290ac8d1bea31a91b9728c4194875f31477c01"));
const getScoringSettingsFn = createServerFn({
  method: "GET"
}).middleware([authMiddleware]).handler(createSsrRpc("eb80d39d041d4a500312cef62d9e84ae035bb19d48f065e3f80ea29ccb89081b"));
const getScoreLatestFn = createServerFn({
  method: "GET"
}).middleware([authMiddleware]).validator(object({
  objectType: string(),
  objectId: string()
})).handler(createSsrRpc("c936f761eda35384cd1c6d7aafa7b0037fb12f03b1e6eefafe382a6cdca4b8bf"));
const startScoringDryRunFn = createServerFn({
  method: "POST"
}).middleware([authMiddleware]).validator(object({
  recordType: string()
})).handler(createSsrRpc("58a731340046aa968d1ce845f3c24b38cc5bbb611eadd8c8779d808fa251a1f6"));
const getScoringDryRunFn = createServerFn({
  method: "GET"
}).middleware([authMiddleware]).validator(object({
  recordType: string()
})).handler(createSsrRpc("5cd25e5a819dc790600515fc63ca63aaf0e9acb593e23926cb1a5c8ca3d23c96"));
export {
  getScoreLatestFn as a,
  getScoringRulesetFn as b,
  listRulesetVersionsFn as c,
  getScoreDistributionFn as d,
  updateScoringSettingsFn as e,
  commitScoringRulesetFn as f,
  getScoringSettingsFn as g,
  getScoringDryRunFn as h,
  listRulesetsFn as l,
  prepareScoringRulesetFn as p,
  startScoringDryRunFn as s,
  updateScoringRulesetFn as u
};

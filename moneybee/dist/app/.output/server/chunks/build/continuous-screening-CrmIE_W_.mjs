import { c as createSsrRpc } from "./query-BmG5BEas.mjs";
import { c as createContinuousScreeningConfigSchema, r as reviewMatchPayloadSchema } from "./continuous-screenings-CbvELuxK.mjs";
import { a as authMiddleware } from "./auth-middleware-eNRVfU3l.mjs";
import { $ as createServerFn } from "./server.mjs";
import { o as object, s as string, b as boolean, a as array, _ as _enum, n as number } from "./short-uuid-fTZYJj_k.mjs";
const getContinuousScreeningConfigurationFn = createServerFn({
  method: "GET"
}).middleware([authMiddleware]).validator(object({
  stableId: string()
})).handler(createSsrRpc("8d9af50984926e24e1d954ca748ae0549e6d1b2ad9e2a9efb7e3a25c140c326e"));
const listContinuousScreeningConfigurationsFn = createServerFn({
  method: "GET"
}).middleware([authMiddleware]).handler(createSsrRpc("e2057feec54b9c65463e5e5049fab560872be0e2364a37913ed87fce9cf5c98d"));
const listContinuousScreeningDatasetUpdatesFn = createServerFn({
  method: "GET"
}).middleware([authMiddleware]).validator(object({
  offsetId: string().optional(),
  limit: number().optional(),
  order: _enum(["ASC", "DESC"]).optional(),
  sorting: string().optional()
})).handler(createSsrRpc("d1ce195302f780da95775de80d2dfe1952eac5d793fa8513aedc882e07eb6c9c"));
const listContinuousScreeningUpdateJobsFn = createServerFn({
  method: "GET"
}).middleware([authMiddleware]).validator(object({
  offsetId: string().optional(),
  limit: number().optional(),
  order: _enum(["ASC", "DESC"]).optional(),
  sorting: string().optional()
})).handler(createSsrRpc("9151ae89ac14bffe69aca665ea546a98749346fe8ec2aabe6285a23b469b08a1"));
const listContinuousScreeningClientDataIndexingFn = createServerFn({
  method: "GET"
}).middleware([authMiddleware]).validator(object({
  offsetId: string().optional(),
  limit: number().optional(),
  order: _enum(["ASC", "DESC"]).optional(),
  sorting: string().optional()
})).handler(createSsrRpc("0c8a34ddd5182b7d6a23aeacf76d2a0454490fc54077f87af2e7b78c4b085af2"));
const listActiveConfigsForObjectFn = createServerFn({
  method: "GET"
}).middleware([authMiddleware]).validator(object({
  objectType: string(),
  objectId: string()
})).handler(createSsrRpc("63d6558b168606ee61ee473de7756a49e32b7d5bfdd3e196b9795dafcc9b60f9"));
const updateObjectMonitoringFn = createServerFn({
  method: "POST"
}).middleware([authMiddleware]).validator(object({
  objectType: string(),
  objectId: string(),
  configStableIds: array(string()),
  skipScreen: boolean()
})).handler(createSsrRpc("53e44f5a8bd1d743715d7949a4eb96d113b671509a9cedf1c852310c118cb2f3"));
const createContinuousScreeningConfigurationFn = createServerFn({
  method: "POST"
}).middleware([authMiddleware]).validator(createContinuousScreeningConfigSchema).handler(createSsrRpc("4f4c03013ad5745c2e6065c2028b7d8a55eafaeb72ed4cd83c7c480865d0b881"));
const dismissContinuousScreeningFn = createServerFn({
  method: "POST"
}).middleware([authMiddleware]).validator(object({
  screeningId: string()
})).handler(createSsrRpc("1656d7f8c414c8212f0b15864ec148e50c260e727b88b57405ec2a5cd4948c8f"));
createServerFn({
  method: "POST"
}).middleware([authMiddleware]).validator(object({
  screeningId: string()
})).handler(createSsrRpc("de09a804f89994e7c4b71dfae5351566175497947b3fa1b429fd992507f6f196"));
const reviewContinuousScreeningMatchFn = createServerFn({
  method: "POST"
}).middleware([authMiddleware]).validator(reviewMatchPayloadSchema).handler(createSsrRpc("65bdacf95e97ec0a55a69b83fde6b36289c73a42072ae668760591a64c05f0ab"));
const updateContinuousScreeningConfigurationFn = createServerFn({
  method: "POST"
}).middleware([authMiddleware]).validator(createContinuousScreeningConfigSchema.and(object({
  configStableId: string()
}))).handler(createSsrRpc("f8f975475cd1f94c061db5e0fc94dc68631a5ce17d2b663c51ffc90322224c92"));
export {
  listContinuousScreeningClientDataIndexingFn as a,
  listContinuousScreeningDatasetUpdatesFn as b,
  listActiveConfigsForObjectFn as c,
  listContinuousScreeningConfigurationsFn as d,
  updateObjectMonitoringFn as e,
  createContinuousScreeningConfigurationFn as f,
  dismissContinuousScreeningFn as g,
  getContinuousScreeningConfigurationFn as h,
  listContinuousScreeningUpdateJobsFn as l,
  reviewContinuousScreeningMatchFn as r,
  updateContinuousScreeningConfigurationFn as u
};

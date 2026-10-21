import { c as createServerRpc } from "./createServerRpc-Dxre0F6X.mjs";
import { a as authMiddleware } from "./auth-middleware-eNRVfU3l.mjs";
import { a1 as isAnalyst } from "./services-middleware-nMulUXHZ.mjs";
import { d as dataModelFeatureAccessLoader } from "./data-model-feature-access-D7XsjRz2.mjs";
import { o as object, s as string, c as fromSUUIDtoUUID } from "./short-uuid-fTZYJj_k.mjs";
import { $ as createServerFn } from "./server.mjs";
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
import "node:crypto";
import "node:stream";
import "node:stream/web";
import "crypto";
import "async_hooks";
import "stream";
import "./feature-access-BSdB6UiC.mjs";
const beforeLoadFn_createServerFn_handler = createServerRpc({
  id: "c80438a9d16c46d5e503c84e3cd04cb2e0689b73f89993a2cfc89d4548a70c7b",
  name: "beforeLoadFn",
  filename: "src/routes/_app/_builder/cases/_detail/s.$caseId.tsx"
}, (opts) => beforeLoadFn.__executeServer(opts));
const beforeLoadFn = createServerFn({
  method: "GET"
}).middleware([authMiddleware]).validator(object({
  caseId: string().transform((shortuuid) => fromSUUIDtoUUID(shortuuid))
})).handler(beforeLoadFn_createServerFn_handler, async ({
  context,
  data
}) => {
  const [caseDetail, dataModel, pivotObjects, client360Tables] = await Promise.all([await context.authInfo.cases.getCase({
    caseId: data.caseId
  }), await context.authInfo.dataModelRepository.getDataModel(), await context.authInfo.cases.listPivotObjects({
    caseId: data.caseId
  }), await context.authInfo.client360.getClient360Tables()]);
  const dataModelFeatureAccess = dataModelFeatureAccessLoader(context.authInfo.user, context.authInfo.entitlements);
  const userScoringAccess = isAnalyst(context.authInfo.user) ? "restricted" : context.authInfo.entitlements.userScoring;
  return {
    caseDetail,
    dataModel,
    dataModelFeatureAccess,
    pivotObjects: pivotObjects ?? [],
    client360Tables,
    userScoringAccess,
    entitlements: context.authInfo.entitlements
  };
});
export {
  beforeLoadFn_createServerFn_handler
};

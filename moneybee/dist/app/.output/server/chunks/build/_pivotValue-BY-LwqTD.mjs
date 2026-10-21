import { c as createServerRpc } from "./createServerRpc-Dxre0F6X.mjs";
import { i as isGraphEligiblePivot } from "./graph-pivots-Bblee9BN.mjs";
import { a as authMiddleware } from "./auth-middleware-eNRVfU3l.mjs";
import { w as getPivotObjectKey } from "./services-middleware-nMulUXHZ.mjs";
import { d as dataModelFeatureAccessLoader } from "./data-model-feature-access-D7XsjRz2.mjs";
import { o as object, s as string, c as fromSUUIDtoUUID } from "./short-uuid-fTZYJj_k.mjs";
import { $ as createServerFn, H as redirect } from "./server.mjs";
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
import "./feature-access-BSdB6UiC.mjs";
import "node:stream";
import "node:stream/web";
import "crypto";
import "async_hooks";
import "stream";
const linksPivotLoader_createServerFn_handler = createServerRpc({
  id: "0a593d1eab87a44f8c965ee49dba7996bafcc217c36259ba79ab682444a5a0b0",
  name: "linksPivotLoader",
  filename: "src/routes/_app/_builder/cases/_detail/s.$caseId/links/$pivotValue.tsx"
}, (opts) => linksPivotLoader.__executeServer(opts));
const linksPivotLoader = createServerFn().middleware([authMiddleware]).validator(object({
  caseId: string(),
  pivotValue: string()
})).handler(linksPivotLoader_createServerFn_handler, async function linksPivotLoader2({
  context,
  data
}) {
  const caseId = fromSUUIDtoUUID(data.caseId);
  const dataModelFeatureAccess = dataModelFeatureAccessLoader(context.authInfo.user, context.authInfo.entitlements);
  if (!dataModelFeatureAccess.isGraphExplorationEnabled) {
    throw redirect({
      to: "/cases/s/$caseId/principal",
      params: {
        caseId: data.caseId
      }
    });
  }
  const [pivotObjects, dataModel] = await Promise.all([context.authInfo.cases.listPivotObjects({
    caseId
  }), context.authInfo.dataModelRepository.getDataModel()]);
  const pivotObject = (pivotObjects ?? []).find((p) => getPivotObjectKey(p) === data.pivotValue);
  if (!pivotObject) {
    throw redirect({
      to: "/cases/s/$caseId/principal",
      params: {
        caseId: data.caseId
      }
    });
  }
  if (!isGraphEligiblePivot(pivotObject, dataModel)) {
    throw redirect({
      to: "/cases/s/$caseId/clients/$pivotValue",
      params: {
        caseId: data.caseId,
        pivotValue: data.pivotValue
      }
    });
  }
  return {
    objectId: pivotObject.pivotObjectId,
    objectType: pivotObject.pivotObjectName
  };
});
export {
  linksPivotLoader_createServerFn_handler
};

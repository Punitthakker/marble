import { c as createServerRpc } from "./createServerRpc-Dxre0F6X.mjs";
import { a as authMiddleware } from "./auth-middleware-eNRVfU3l.mjs";
import { G as isNotFoundHttpError, e as setToast, S as isUnauthorizedHttpError, W as isForbiddenHttpError, z as isAdmin } from "./services-middleware-nMulUXHZ.mjs";
import { d as dataModelFeatureAccessLoader } from "./data-model-feature-access-D7XsjRz2.mjs";
import { $ as createServerFn, a5 as getRequest, H as redirect, v as isRedirect } from "./server.mjs";
import { o as object, s as string } from "./short-uuid-fTZYJj_k.mjs";
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
async function loadClientDetailObject(dataModelRepository, client360, objectType, objectId) {
  try {
    return await dataModelRepository.getIngestedObject(objectType, objectId);
  } catch (error) {
    if (!isNotFoundHttpError(error)) throw error;
    const searchResult = await client360.searchClient360({ table: objectType, terms: objectId });
    const item = searchResult.items.find((entry) => String(entry["object_id"]) === objectId);
    if (!item) throw error;
    return { data: item };
  }
}
const paramsSchema = object({
  objectType: string(),
  objectId: string()
});
const getDataFn_createServerFn_handler = createServerRpc({
  id: "62ebf56e36c69c039c1cc474de7eb5d971675bbdc2d6c91f69c807b1422a378b",
  name: "getDataFn",
  filename: "src/routes/_app/_builder/client-detail/$objectType.$objectId.tsx"
}, (opts) => getDataFn.__executeServer(opts));
const getDataFn = createServerFn().middleware([authMiddleware]).validator(paramsSchema).handler(getDataFn_createServerFn_handler, async ({
  context,
  data: {
    objectId,
    objectType
  }
}) => {
  try {
    const request = getRequest();
    const {
      i18nextService
    } = context.services;
    const t = await i18nextService.getFixedT(request, ["common", "client360"]);
    const {
      user,
      dataModelRepository,
      userScoring,
      client360,
      entitlements
    } = context.authInfo;
    const objectPromise = loadClientDetailObject(dataModelRepository, client360, objectType, objectId).catch(async (error) => {
      if (isNotFoundHttpError(error)) {
        await setToast({
          type: "error",
          message: t("client360:client_detail.no_object_found", {
            objectType
          })
        });
        throw redirect({
          to: "/client-detail"
        });
      }
      throw error;
    });
    const [objectDetails, scoringSettings, tables, dataModel] = await Promise.all([objectPromise, userScoring.getSettings(), client360.getClient360Tables(), dataModelRepository.getDataModel()]);
    let activeScore = null;
    try {
      activeScore = await userScoring.getScoreLatestWithEvaluation(objectType, objectId) ?? null;
    } catch (error) {
      if (!isNotFoundHttpError(error) && !isUnauthorizedHttpError(error) && !isForbiddenHttpError(error)) throw error;
    }
    const tableMetadata = tables.find((table) => table.name === objectType);
    if (!tableMetadata) {
      throw redirect({
        to: "/client-detail"
      });
    }
    const dataModelFeatureAccess = dataModelFeatureAccessLoader(user, entitlements);
    return {
      objectType,
      objectId,
      objectDetails,
      metadata: tableMetadata,
      allMetadata: tables,
      dataModel,
      dataModelFeatureAccess,
      scoringSettings,
      activeScore,
      userScoringAccess: entitlements.userScoring,
      isAdmin: isAdmin(user)
    };
  } catch (error) {
    if (isRedirect(error) || error instanceof Response) throw error;
    console.error("Failed to load client detail data", error);
    throw new Response("Internal Server Error", {
      status: 500,
      headers: {
        "Content-Type": "text/plain"
      }
    });
  }
});
export {
  getDataFn_createServerFn_handler
};

import { c as createServerRpc } from "./createServerRpc-Dxre0F6X.mjs";
import { S as SEARCH_ENTITIES } from "./screening-entity-cwm_Y847.mjs";
import { a as authMiddleware } from "./auth-middleware-eNRVfU3l.mjs";
import { I as protectArray, aX as NewUndefinedAstNode, B as pick } from "./services-middleware-nMulUXHZ.mjs";
import { $ as createServerFn } from "./server.mjs";
import { o as object, s as string, b as boolean, n as number, h as any, z as record, _ as _enum, a as array } from "./short-uuid-fTZYJj_k.mjs";
import "./DataField-BczNbAhi.mjs";
import "./create-context-k6HmQ6bB.mjs";
import "./Tabs-CzpyUi7T.mjs";
import "./use-callback-ref-DoQNLci-.mjs";
import "./sharpstate.es-C0BW2AZi.mjs";
import "./formatDistanceStrict-DEEeAR-Y.mjs";
import "./Spinner-DmLieYoS.mjs";
import "./data-9UajV2HK.mjs";
import "./query-BmG5BEas.mjs";
import "./data-BXamdbTM.mjs";
import "./useQuery-Bb0AEcpf.mjs";
import "./useBaseQuery-BqF2iw7Y.mjs";
import "./useServerFn-oRH5Nw97.mjs";
import "./tryCatch-CFf1qt2b.mjs";
import "./isNonNullish-DgEqPJBU.mjs";
import "./Switch-BV-_0Knl.mjs";
import "./data-model-Dfj0lN5a.mjs";
import "./mapToObj-C7dg8HnM.mjs";
import "./omit-qKVZGDJg.mjs";
import "./hasAtLeast-BmuNoqMd.mjs";
import "./ExternalLink-BlVgwkVd.mjs";
import "./Select-Dg3p9vJ0.mjs";
import "./isNullish-B8pc8Ntu.mjs";
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
const editScreeningFormSchema = object({
  id: string().nonempty(),
  name: string().nonempty(),
  description: string().optional(),
  ruleGroup: string().optional(),
  datasets: protectArray(array(string())),
  threshold: number().optional(),
  forcedOutcome: _enum(["review", "decline", "block_and_review"]),
  triggerRule: any(),
  entityType: _enum(["Person", "Organization", "Vehicle", "Thing"]).optional(),
  query: record(string(), any()),
  counterPartyId: any().nullish(),
  preprocessing: object({
    useNer: boolean().optional(),
    nerIgnoreClassification: boolean().optional(),
    skipIfUnder: number().nullish(),
    removeNumbers: boolean().optional(),
    blacklistListId: string().nullish()
  }).optional()
});
const editScreeningConfigurationSchema = object({
  params: object({
    scenarioId: string(),
    iterationId: string(),
    screeningId: string()
  }),
  payload: editScreeningFormSchema
});
const clearQuery = (entityType, query) => entityType ? pick(query, SEARCH_ENTITIES[entityType].fields) : query;
const editScreeningAction_createServerFn_handler = createServerRpc({
  id: "bf56d34b66baeffb8e8738a9a75b1b5f0ca8916895407c31fadab20a997e6a3c",
  name: "editScreeningAction",
  filename: "src/components/Scenario/Rules/ScreeningRuleEditPanel.tsx"
}, (opts) => editScreeningAction.__executeServer(opts));
const editScreeningAction = createServerFn({
  method: "POST"
}).middleware([authMiddleware]).validator(editScreeningConfigurationSchema).handler(editScreeningAction_createServerFn_handler, async function editScreeningAction2({
  context,
  data: {
    params,
    payload
  }
}) {
  const {
    scenarioIterationScreeningRepository
  } = context.authInfo;
  return scenarioIterationScreeningRepository.updateScreeningConfig({
    iterationId: params.iterationId,
    screeningId: params.screeningId,
    changes: {
      ...payload,
      counterPartyId: payload.counterPartyId ?? NewUndefinedAstNode(),
      query: clearQuery(payload.entityType, payload.query),
      preprocessing: {
        ...payload.preprocessing,
        useNer: payload.entityType === "Thing" ? payload.preprocessing?.useNer : void 0,
        nerIgnoreClassification: payload.preprocessing?.useNer ? payload.preprocessing?.nerIgnoreClassification : void 0,
        skipIfUnder: payload.preprocessing?.skipIfUnder ?? void 0,
        blacklistListId: payload.preprocessing?.blacklistListId ?? void 0
      }
    }
  });
});
export {
  editScreeningAction_createServerFn_handler
};

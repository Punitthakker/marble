import { c as createServerRpc } from "./createServerRpc-Dxre0F6X.mjs";
import { c as createContinuousScreeningConfigSchema, r as reviewMatchPayloadSchema } from "./continuous-screenings-CbvELuxK.mjs";
import { z as isAdmin, Y as sanitizeTruthyDatasets } from "./services-middleware-nMulUXHZ.mjs";
import { a as authMiddleware } from "./auth-middleware-eNRVfU3l.mjs";
import { b as isContinuousScreeningAvailable } from "./feature-access-BSdB6UiC.mjs";
import { $ as createServerFn, H as redirect } from "./server.mjs";
import { o as object, s as string, _ as _enum, n as number, b as boolean, a as array } from "./short-uuid-fTZYJj_k.mjs";
import "./sharpstate.es-C0BW2AZi.mjs";
import "node:crypto";
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
import "node:stream";
import "node:stream/web";
import "crypto";
import "async_hooks";
import "stream";
const getContinuousScreeningConfigurationFn_createServerFn_handler = createServerRpc({
  id: "8d9af50984926e24e1d954ca748ae0549e6d1b2ad9e2a9efb7e3a25c140c326e",
  name: "getContinuousScreeningConfigurationFn",
  filename: "src/server-fns/continuous-screening.ts"
}, (opts) => getContinuousScreeningConfigurationFn.__executeServer(opts));
const getContinuousScreeningConfigurationFn = createServerFn({
  method: "GET"
}).middleware([authMiddleware]).validator(object({
  stableId: string()
})).handler(getContinuousScreeningConfigurationFn_createServerFn_handler, async ({
  context,
  data
}) => {
  const config = await context.authInfo.continuousScreening.getConfiguration(data.stableId);
  return {
    config
  };
});
const listContinuousScreeningConfigurationsFn_createServerFn_handler = createServerRpc({
  id: "e2057feec54b9c65463e5e5049fab560872be0e2364a37913ed87fce9cf5c98d",
  name: "listContinuousScreeningConfigurationsFn",
  filename: "src/server-fns/continuous-screening.ts"
}, (opts) => listContinuousScreeningConfigurationsFn.__executeServer(opts));
const listContinuousScreeningConfigurationsFn = createServerFn({
  method: "GET"
}).middleware([authMiddleware]).handler(listContinuousScreeningConfigurationsFn_createServerFn_handler, async ({
  context
}) => {
  const {
    continuousScreening,
    entitlements,
    inbox
  } = context.authInfo;
  const configurations = isContinuousScreeningAvailable(entitlements) ? await continuousScreening.listConfigurations() : [];
  const inboxes = await inbox.listInboxes();
  const configurationsWithInbox = configurations.map((config) => {
    const inboxItem = inboxes.find((inbox2) => inbox2.id === config.inboxId);
    return {
      ...config,
      inbox: inboxItem
    };
  });
  return {
    configurations: configurationsWithInbox
  };
});
const listContinuousScreeningDatasetUpdatesFn_createServerFn_handler = createServerRpc({
  id: "d1ce195302f780da95775de80d2dfe1952eac5d793fa8513aedc882e07eb6c9c",
  name: "listContinuousScreeningDatasetUpdatesFn",
  filename: "src/server-fns/continuous-screening.ts"
}, (opts) => listContinuousScreeningDatasetUpdatesFn.__executeServer(opts));
const listContinuousScreeningDatasetUpdatesFn = createServerFn({
  method: "GET"
}).middleware([authMiddleware]).validator(object({
  offsetId: string().optional(),
  limit: number().optional(),
  order: _enum(["ASC", "DESC"]).optional(),
  sorting: string().optional()
})).handler(listContinuousScreeningDatasetUpdatesFn_createServerFn_handler, async ({
  context,
  data
}) => {
  return context.authInfo.continuousScreening.listDatasetUpdates(data);
});
const listContinuousScreeningUpdateJobsFn_createServerFn_handler = createServerRpc({
  id: "9151ae89ac14bffe69aca665ea546a98749346fe8ec2aabe6285a23b469b08a1",
  name: "listContinuousScreeningUpdateJobsFn",
  filename: "src/server-fns/continuous-screening.ts"
}, (opts) => listContinuousScreeningUpdateJobsFn.__executeServer(opts));
const listContinuousScreeningUpdateJobsFn = createServerFn({
  method: "GET"
}).middleware([authMiddleware]).validator(object({
  offsetId: string().optional(),
  limit: number().optional(),
  order: _enum(["ASC", "DESC"]).optional(),
  sorting: string().optional()
})).handler(listContinuousScreeningUpdateJobsFn_createServerFn_handler, async ({
  context,
  data
}) => {
  return context.authInfo.continuousScreening.listUpdateJobs(data);
});
const listContinuousScreeningClientDataIndexingFn_createServerFn_handler = createServerRpc({
  id: "0c8a34ddd5182b7d6a23aeacf76d2a0454490fc54077f87af2e7b78c4b085af2",
  name: "listContinuousScreeningClientDataIndexingFn",
  filename: "src/server-fns/continuous-screening.ts"
}, (opts) => listContinuousScreeningClientDataIndexingFn.__executeServer(opts));
const listContinuousScreeningClientDataIndexingFn = createServerFn({
  method: "GET"
}).middleware([authMiddleware]).validator(object({
  offsetId: string().optional(),
  limit: number().optional(),
  order: _enum(["ASC", "DESC"]).optional(),
  sorting: string().optional()
})).handler(listContinuousScreeningClientDataIndexingFn_createServerFn_handler, async ({
  context,
  data
}) => {
  return context.authInfo.continuousScreening.listClientDataIndexing(data);
});
async function getActiveConfigurations(continuousScreening, objectType, objectId) {
  const [objects, configurations] = await Promise.all([continuousScreening.listObjects({
    objectType,
    objectId
  }), continuousScreening.listConfigurations()]);
  const enrolledStableIds = new Set(objects.map((object2) => object2.configStableId));
  return configurations.filter((config) => enrolledStableIds.has(config.stableId));
}
const listActiveConfigsForObjectFn_createServerFn_handler = createServerRpc({
  id: "63d6558b168606ee61ee473de7756a49e32b7d5bfdd3e196b9795dafcc9b60f9",
  name: "listActiveConfigsForObjectFn",
  filename: "src/server-fns/continuous-screening.ts"
}, (opts) => listActiveConfigsForObjectFn.__executeServer(opts));
const listActiveConfigsForObjectFn = createServerFn({
  method: "GET"
}).middleware([authMiddleware]).validator(object({
  objectType: string(),
  objectId: string()
})).handler(listActiveConfigsForObjectFn_createServerFn_handler, async ({
  context,
  data
}) => {
  const {
    continuousScreening,
    entitlements
  } = context.authInfo;
  if (!isContinuousScreeningAvailable(entitlements)) {
    return {
      configurations: []
    };
  }
  const activeConfigurations = await getActiveConfigurations(continuousScreening, data.objectType, data.objectId);
  return {
    configurations: activeConfigurations
  };
});
const updateObjectMonitoringFn_createServerFn_handler = createServerRpc({
  id: "53e44f5a8bd1d743715d7949a4eb96d113b671509a9cedf1c852310c118cb2f3",
  name: "updateObjectMonitoringFn",
  filename: "src/server-fns/continuous-screening.ts"
}, (opts) => updateObjectMonitoringFn.__executeServer(opts));
const updateObjectMonitoringFn = createServerFn({
  method: "POST"
}).middleware([authMiddleware]).validator(object({
  objectType: string(),
  objectId: string(),
  configStableIds: array(string()),
  skipScreen: boolean()
})).handler(updateObjectMonitoringFn_createServerFn_handler, async ({
  context,
  data
}) => {
  const {
    continuousScreening,
    entitlements,
    user
  } = context.authInfo;
  if (!isContinuousScreeningAvailable(entitlements)) {
    return {
      configurations: []
    };
  }
  if (!isAdmin(user)) {
    throw new Response(null, {
      status: 403,
      statusText: "Forbidden"
    });
  }
  const currentObjects = await continuousScreening.listObjects({
    objectType: data.objectType,
    objectId: data.objectId
  });
  const currentStableIds = new Set(currentObjects.map((object2) => object2.configStableId));
  const nextStableIds = new Set(data.configStableIds);
  const toDelete = [...currentStableIds].filter((stableId) => !nextStableIds.has(stableId));
  const toCreate = [...nextStableIds].filter((stableId) => !currentStableIds.has(stableId));
  const results = await Promise.allSettled([...toDelete.map((configStableId) => continuousScreening.deleteObject({
    objectType: data.objectType,
    objectId: data.objectId,
    configStableId
  })), ...toCreate.map((configStableId) => continuousScreening.createObject({
    objectType: data.objectType,
    objectId: data.objectId,
    configStableId,
    skipScreen: data.skipScreen
  }))]);
  if (results.some((result) => result.status === "rejected")) {
    throw new Error("Failed to update object monitoring");
  }
  const activeConfigurations = await getActiveConfigurations(continuousScreening, data.objectType, data.objectId);
  return {
    configurations: activeConfigurations
  };
});
const createContinuousScreeningConfigurationFn_createServerFn_handler = createServerRpc({
  id: "4f4c03013ad5745c2e6065c2028b7d8a55eafaeb72ed4cd83c7c480865d0b881",
  name: "createContinuousScreeningConfigurationFn",
  filename: "src/server-fns/continuous-screening.ts"
}, (opts) => createContinuousScreeningConfigurationFn.__executeServer(opts));
const createContinuousScreeningConfigurationFn = createServerFn({
  method: "POST"
}).middleware([authMiddleware]).validator(createContinuousScreeningConfigSchema).handler(createContinuousScreeningConfigurationFn_createServerFn_handler, async ({
  context,
  data
}) => {
  try {
    const {
      inboxName,
      ...payload
    } = data;
    let inboxId;
    if (payload.inboxId === null) {
      if (!inboxName) {
        throw new Error("Inbox name is required when no inbox is selected");
      }
      const newInbox = await context.authInfo.inbox.createInbox({
        name: inboxName
      });
      inboxId = newInbox.id;
    } else {
      inboxId = payload.inboxId;
    }
    await context.authInfo.continuousScreening.createConfiguration({
      ...payload,
      inboxId,
      datasets: sanitizeTruthyDatasets(payload.datasets)
    });
    throw redirect({
      to: "/continuous-screening/configurations"
    });
  } catch (error) {
    if (error instanceof Response && error.status >= 300 && error.status < 400) throw error;
    throw new Error("Failed to create configuration");
  }
});
const dismissContinuousScreeningFn_createServerFn_handler = createServerRpc({
  id: "1656d7f8c414c8212f0b15864ec148e50c260e727b88b57405ec2a5cd4948c8f",
  name: "dismissContinuousScreeningFn",
  filename: "src/server-fns/continuous-screening.ts"
}, (opts) => dismissContinuousScreeningFn.__executeServer(opts));
const dismissContinuousScreeningFn = createServerFn({
  method: "POST"
}).middleware([authMiddleware]).validator(object({
  screeningId: string()
})).handler(dismissContinuousScreeningFn_createServerFn_handler, async ({
  context,
  data
}) => {
  try {
    await context.authInfo.continuousScreening.dismiss(data.screeningId);
  } catch {
    throw new Error("Failed to dismiss screening");
  }
});
const loadMoreContinuousScreeningMatchesFn_createServerFn_handler = createServerRpc({
  id: "de09a804f89994e7c4b71dfae5351566175497947b3fa1b429fd992507f6f196",
  name: "loadMoreContinuousScreeningMatchesFn",
  filename: "src/server-fns/continuous-screening.ts"
}, (opts) => loadMoreContinuousScreeningMatchesFn.__executeServer(opts));
const loadMoreContinuousScreeningMatchesFn = createServerFn({
  method: "POST"
}).middleware([authMiddleware]).validator(object({
  screeningId: string()
})).handler(loadMoreContinuousScreeningMatchesFn_createServerFn_handler, async ({
  context,
  data
}) => {
  try {
    await context.authInfo.continuousScreening.loadMoreMatches(data.screeningId);
  } catch {
    throw new Error("Failed to load more matches");
  }
});
const reviewContinuousScreeningMatchFn_createServerFn_handler = createServerRpc({
  id: "65bdacf95e97ec0a55a69b83fde6b36289c73a42072ae668760591a64c05f0ab",
  name: "reviewContinuousScreeningMatchFn",
  filename: "src/server-fns/continuous-screening.ts"
}, (opts) => reviewContinuousScreeningMatchFn.__executeServer(opts));
const reviewContinuousScreeningMatchFn = createServerFn({
  method: "POST"
}).middleware([authMiddleware]).validator(reviewMatchPayloadSchema).handler(reviewContinuousScreeningMatchFn_createServerFn_handler, async ({
  context,
  data
}) => {
  try {
    await context.authInfo.continuousScreening.updateMatchStatus(data);
  } catch {
    throw new Error("Failed to review match");
  }
});
const updateContinuousScreeningConfigurationFn_createServerFn_handler = createServerRpc({
  id: "f8f975475cd1f94c061db5e0fc94dc68631a5ce17d2b663c51ffc90322224c92",
  name: "updateContinuousScreeningConfigurationFn",
  filename: "src/server-fns/continuous-screening.ts"
}, (opts) => updateContinuousScreeningConfigurationFn.__executeServer(opts));
const updateContinuousScreeningConfigurationFn = createServerFn({
  method: "POST"
}).middleware([authMiddleware]).validator(createContinuousScreeningConfigSchema.and(object({
  configStableId: string()
}))).handler(updateContinuousScreeningConfigurationFn_createServerFn_handler, async ({
  context,
  data
}) => {
  const {
    inboxName,
    configStableId,
    ...payload
  } = data;
  let inboxId;
  if (payload.inboxId === null) {
    if (!inboxName) {
      throw new Error("Inbox name is required when no inbox is selected");
    }
    const newInbox = await context.authInfo.inbox.createInbox({
      name: inboxName
    });
    inboxId = newInbox.id;
  } else {
    inboxId = payload.inboxId;
  }
  await context.authInfo.continuousScreening.updateConfiguration(configStableId, {
    ...payload,
    inboxId,
    datasets: sanitizeTruthyDatasets(payload.datasets)
  });
});
export {
  createContinuousScreeningConfigurationFn_createServerFn_handler,
  dismissContinuousScreeningFn_createServerFn_handler,
  getContinuousScreeningConfigurationFn_createServerFn_handler,
  listActiveConfigsForObjectFn_createServerFn_handler,
  listContinuousScreeningClientDataIndexingFn_createServerFn_handler,
  listContinuousScreeningConfigurationsFn_createServerFn_handler,
  listContinuousScreeningDatasetUpdatesFn_createServerFn_handler,
  listContinuousScreeningUpdateJobsFn_createServerFn_handler,
  loadMoreContinuousScreeningMatchesFn_createServerFn_handler,
  reviewContinuousScreeningMatchFn_createServerFn_handler,
  updateContinuousScreeningConfigurationFn_createServerFn_handler,
  updateObjectMonitoringFn_createServerFn_handler
};

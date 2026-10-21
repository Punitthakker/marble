import { c as createServerRpc } from "./createServerRpc-Dxre0F6X.mjs";
import { a as authMiddleware } from "./auth-middleware-eNRVfU3l.mjs";
import { z as isAdmin } from "./services-middleware-nMulUXHZ.mjs";
import { t as tryCatch } from "./tryCatch-CFf1qt2b.mjs";
import { $ as createServerFn, H as redirect } from "./server.mjs";
import "./logger.server-DV14d0iZ.mjs";
import "node:async_hooks";
import "./short-uuid-fTZYJj_k.mjs";
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
const DATASET_UPDATES_PAGE_SIZE = 5;
const UPDATE_JOBS_PAGE_SIZE = 10;
const CLIENT_DATA_INDEXING_PAGE_SIZE = 20;
async function getObservabilityItems(request) {
  const result = await tryCatch(request);
  return result.ok ? result.value.items : [];
}
async function getObservabilityClientDataIndexing(request) {
  const result = await tryCatch(request);
  return result.ok ? result.value : null;
}
const observabilityLoader_createServerFn_handler = createServerRpc({
  id: "c285cd89b784052668bf7a4aa6e24d0a54ab894ea63dd5baa209de8633887d5e",
  name: "observabilityLoader",
  filename: "src/routes/_app/_builder/continuous-screening/observability.tsx"
}, (opts) => observabilityLoader.__executeServer(opts));
const observabilityLoader = createServerFn().middleware([authMiddleware]).handler(observabilityLoader_createServerFn_handler, async function continuousScreeningObservabilityLoader({
  context
}) {
  const {
    continuousScreening,
    user
  } = context.authInfo;
  if (!isAdmin(user)) {
    throw redirect({
      to: "/"
    });
  }
  const [datasetUpdates, updateJobs, clientDataIndexing] = await Promise.all([getObservabilityItems(continuousScreening.listDatasetUpdates({
    limit: DATASET_UPDATES_PAGE_SIZE,
    order: "DESC"
  })), getObservabilityItems(continuousScreening.listUpdateJobs({
    limit: UPDATE_JOBS_PAGE_SIZE,
    order: "DESC"
  })), getObservabilityClientDataIndexing(continuousScreening.listClientDataIndexing({
    limit: CLIENT_DATA_INDEXING_PAGE_SIZE,
    order: "DESC"
  }))]);
  return {
    datasetUpdates,
    updateJobs,
    clientDataIndexing
  };
});
export {
  observabilityLoader_createServerFn_handler
};

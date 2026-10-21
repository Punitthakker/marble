import { c as createServerRpc } from "./createServerRpc-Dxre0F6X.mjs";
import { a as authMiddleware } from "./auth-middleware-eNRVfU3l.mjs";
import { d as dataModelFeatureAccessLoader } from "./data-model-feature-access-D7XsjRz2.mjs";
import { $ as createServerFn } from "./server.mjs";
import "./services-middleware-nMulUXHZ.mjs";
import "./short-uuid-fTZYJj_k.mjs";
import "node:crypto";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "./logger.server-DV14d0iZ.mjs";
import "node:os";
import "node:events";
import "node:diagnostics_channel";
import "fs";
import "events";
import "path";
import "assert";
import "worker_threads";
import "module";
import "node:fs";
import "node:path";
import "node:url";
import "url";
import "buffer";
import "./feature-access-BSdB6UiC.mjs";
const casesLayoutLoader_createServerFn_handler = createServerRpc({
  id: "4cbe671987772f5e5209a26475aa49126a52dc94032d8df86778e6294fcc7c20",
  name: "casesLayoutLoader",
  filename: "src/routes/_app/_builder/cases.tsx"
}, (opts) => casesLayoutLoader.__executeServer(opts));
const casesLayoutLoader = createServerFn({
  method: "GET"
}).middleware([authMiddleware]).handler(casesLayoutLoader_createServerFn_handler, async function casesLayoutLoader2({
  context
}) {
  const {
    user,
    dataModelRepository,
    entitlements
  } = context.authInfo;
  const dataModel = await dataModelRepository.getDataModel();
  const dataModelFeatureAccess = dataModelFeatureAccessLoader(user, entitlements);
  return {
    dataModel,
    dataModelFeatureAccess
  };
});
export {
  casesLayoutLoader_createServerFn_handler
};

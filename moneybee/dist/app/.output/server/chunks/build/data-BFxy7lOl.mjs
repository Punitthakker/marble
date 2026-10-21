import { c as createServerRpc } from "./createServerRpc-Dxre0F6X.mjs";
import { a as authMiddleware } from "./auth-middleware-eNRVfU3l.mjs";
import { a1 as isAnalyst } from "./services-middleware-nMulUXHZ.mjs";
import { d as dataModelFeatureAccessLoader } from "./data-model-feature-access-D7XsjRz2.mjs";
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
import "./feature-access-BSdB6UiC.mjs";
import "node:stream";
import "node:stream/web";
import "crypto";
import "async_hooks";
import "stream";
const dataLayoutLoader_createServerFn_handler = createServerRpc({
  id: "0e375d3bb3847f92ec1d82fa9791a13d9afc0aafdf4095f73e9c449e03486792",
  name: "dataLayoutLoader",
  filename: "src/routes/_app/_builder/data.tsx"
}, (opts) => dataLayoutLoader.__executeServer(opts));
const dataLayoutLoader = createServerFn().middleware([authMiddleware]).handler(dataLayoutLoader_createServerFn_handler, async function dataLayout({
  context
}) {
  const {
    user,
    dataModelRepository,
    entitlements
  } = context.authInfo;
  if (isAnalyst(user)) {
    throw redirect({
      to: "/cases"
    });
  }
  const dataModel = await dataModelRepository.getDataModel();
  return {
    dataModel,
    dataModelFeatureAccess: dataModelFeatureAccessLoader(user, entitlements)
  };
});
export {
  dataLayoutLoader_createServerFn_handler
};

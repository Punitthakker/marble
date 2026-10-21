import { c as createServerRpc } from "./createServerRpc-Dxre0F6X.mjs";
import { a as authMiddleware } from "./auth-middleware-eNRVfU3l.mjs";
import { d as dataModelFeatureAccessLoader } from "./data-model-feature-access-D7XsjRz2.mjs";
import { $ as createServerFn } from "./server.mjs";
import { o as object, s as string } from "./short-uuid-fTZYJj_k.mjs";
import "./services-middleware-nMulUXHZ.mjs";
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
const queryParams = object({
  table: string().optional(),
  terms: string().optional()
});
const getClientDetailFn_createServerFn_handler = createServerRpc({
  id: "318de7514267a3ed50ed84a75ae117487815eee16ca25aa6098d21129a219ebe",
  name: "getClientDetailFn",
  filename: "src/routes/_app/_builder/client-detail/index.tsx"
}, (opts) => getClientDetailFn.__executeServer(opts));
const getClientDetailFn = createServerFn().middleware([authMiddleware]).validator(queryParams).handler(getClientDetailFn_createServerFn_handler, async function clientDetailIndexLoader({
  context,
  data: {
    table,
    terms
  }
}) {
  const {
    client360,
    user,
    dataModelRepository,
    entitlements
  } = context.authInfo;
  const dataModel = await dataModelRepository.getDataModel();
  const dataModelFeatureAccess = dataModelFeatureAccessLoader(user, entitlements);
  const tables = await client360.getClient360Tables();
  const payload = table && terms ? {
    table,
    terms
  } : null;
  return {
    tables,
    payload,
    dataModel,
    dataModelFeatureAccess
  };
});
export {
  getClientDetailFn_createServerFn_handler
};

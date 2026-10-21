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
import "node:stream";
import "node:stream/web";
import "crypto";
import "async_hooks";
import "stream";
import "./feature-access-BSdB6UiC.mjs";
const decisionsLayoutLoader_createServerFn_handler = createServerRpc({
  id: "532d11a3a313e967206b28dfb4fe70321052b586d522af5bec2717900087a9a1",
  name: "decisionsLayoutLoader",
  filename: "src/routes/_app/_builder/detection/decisions.tsx"
}, (opts) => decisionsLayoutLoader.__executeServer(opts));
const decisionsLayoutLoader = createServerFn().middleware([authMiddleware]).handler(decisionsLayoutLoader_createServerFn_handler, async function dataLayout({
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
  const dataModelFeatureAccess = dataModelFeatureAccessLoader(user, entitlements);
  return {
    dataModel,
    dataModelFeatureAccess
  };
});
export {
  decisionsLayoutLoader_createServerFn_handler
};

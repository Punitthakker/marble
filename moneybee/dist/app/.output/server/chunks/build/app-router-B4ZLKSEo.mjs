import { c as createServerRpc } from "./createServerRpc-Dxre0F6X.mjs";
import { a1 as isAnalyst } from "./services-middleware-nMulUXHZ.mjs";
import { $ as createServerFn, H as redirect } from "./server.mjs";
import { a as authMiddleware } from "./auth-middleware-eNRVfU3l.mjs";
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
const appRouterLoader_createServerFn_handler = createServerRpc({
  id: "54f6369f93f640ea9ef7a8eef3570c00b16f7ed5b44f218829d97a325a705a4f",
  name: "appRouterLoader",
  filename: "src/routes/app-router.tsx"
}, (opts) => appRouterLoader.__executeServer(opts));
const appRouterLoader = createServerFn().middleware([authMiddleware]).handler(appRouterLoader_createServerFn_handler, async function appRouterLoader2({
  context
}) {
  if (isAnalyst(context.authInfo.user)) {
    throw redirect({
      to: "/cases"
    });
  }
  const dataModel = await context.authInfo.dataModelRepository.getDataModel();
  if (dataModel.length === 0) {
    throw redirect({
      to: "/data/list"
    });
  }
  throw redirect({
    to: "/detection"
  });
});
export {
  appRouterLoader_createServerFn_handler
};

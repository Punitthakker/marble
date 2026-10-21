import { c as createServerRpc } from "./createServerRpc-Dxre0F6X.mjs";
import { a as authMiddleware } from "./auth-middleware-eNRVfU3l.mjs";
import { h as hasAnyEntitlement, a1 as isCreateListAvailable } from "./feature-access-BSdB6UiC.mjs";
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
const listsLoader_createServerFn_handler = createServerRpc({
  id: "ef0179542ce4f92a63bf12d039c8aac33a5d8d216e4258d8baa6b6d4cc611eed",
  name: "listsLoader",
  filename: "src/routes/_app/_builder/detection/lists/index.tsx"
}, (opts) => listsLoader.__executeServer(opts));
const listsLoader = createServerFn().middleware([authMiddleware]).handler(listsLoader_createServerFn_handler, async ({
  context
}) => {
  const {
    user,
    customListsRepository,
    entitlements
  } = context.authInfo;
  const customLists = await customListsRepository.listCustomLists();
  return {
    customLists,
    isCreateListAvailable: isCreateListAvailable(user),
    isIpGpsAvailable: hasAnyEntitlement(entitlements)
  };
});
export {
  listsLoader_createServerFn_handler
};

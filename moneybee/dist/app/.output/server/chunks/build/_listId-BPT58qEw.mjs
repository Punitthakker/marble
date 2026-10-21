import { c as createServerRpc } from "./createServerRpc-Dxre0F6X.mjs";
import { a as authMiddleware } from "./auth-middleware-eNRVfU3l.mjs";
import { G as isDeleteListAvailable, H as isEditListAvailable, I as isDeleteListValueAvailable, J as isCreateListValueAvailable } from "./feature-access-BSdB6UiC.mjs";
import { a as parseIdParamSafe } from "./input-validation-D4mgQsey.mjs";
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
const listLoader_createServerFn_handler = createServerRpc({
  id: "52068080343d82e992504e273fbeb1c82e4164eb84fe791f5411bab1c4a385dd",
  name: "listLoader",
  filename: "src/routes/_app/_builder/detection/lists/$listId.tsx"
}, (opts) => listLoader.__executeServer(opts));
const listLoader = createServerFn().middleware([authMiddleware]).validator((input) => input).handler(listLoader_createServerFn_handler, async function listLoader2({
  context,
  data
}) {
  const {
    user,
    customListsRepository
  } = context.authInfo;
  const parsedParams = await parseIdParamSafe(data?.params ?? {}, "listId");
  if (!parsedParams.success) {
    throw new Response(null, {
      status: 404,
      statusText: "Not Found"
    });
  }
  const customList = await customListsRepository.getCustomList(parsedParams.data.listId);
  return {
    customList,
    listFeatureAccess: {
      isCreateListValueAvailable: isCreateListValueAvailable(user),
      isDeleteListValueAvailable: isDeleteListValueAvailable(user),
      isEditListAvailable: isEditListAvailable(user),
      isDeleteListAvailable: isDeleteListAvailable(user)
    }
  };
});
export {
  listLoader_createServerFn_handler
};

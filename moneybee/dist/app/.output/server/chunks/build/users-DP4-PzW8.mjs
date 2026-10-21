import { c as createServerRpc } from "./createServerRpc-Dxre0F6X.mjs";
import { a as authMiddleware } from "./auth-middleware-eNRVfU3l.mjs";
import { i as isReadUserAvailable, C as isDeleteUserAvailable, D as isEditUserAvailable, E as isCreateUserAvailable, F as getUserRoles } from "./feature-access-BSdB6UiC.mjs";
import { $ as createServerFn, H as redirect } from "./server.mjs";
import { u as t$e, _ as t$8, $ as t$a, p as t$c } from "./services-middleware-nMulUXHZ.mjs";
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
import "node:stream";
import "node:stream/web";
import "crypto";
import "async_hooks";
import "stream";
import "node:crypto";
const usersLoader_createServerFn_handler = createServerRpc({
  id: "4ee212221fd2c5a6804cf0cbc02015d124e15beabde51f40dfd55a284d3b7eba",
  name: "usersLoader",
  filename: "src/routes/_app/_builder/settings/users.tsx"
}, (opts) => usersLoader.__executeServer(opts));
const usersLoader = createServerFn().middleware([authMiddleware]).handler(usersLoader_createServerFn_handler, async function usersLoader2({
  context
}) {
  const {
    user,
    inbox,
    entitlements
  } = context.authInfo;
  if (!isReadUserAvailable(user)) throw redirect({
    to: "/"
  });
  const inboxUsers = await inbox.listAllInboxUsers();
  const inboxUsersByUserId = t$e(inboxUsers, t$a(({
    userId
  }) => userId), t$8((value) => t$e(value, t$a((v) => v.role), t$8((v) => v.length), t$c())));
  return {
    inboxUsersByUserId,
    user,
    entitlements,
    userRoles: getUserRoles(entitlements),
    isCreateUserAvailable: isCreateUserAvailable(user),
    isEditUserAvailable: isEditUserAvailable(user),
    isDeleteUserAvailable: isDeleteUserAvailable(user)
  };
});
export {
  usersLoader_createServerFn_handler
};

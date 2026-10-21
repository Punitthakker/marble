import { c as createServerRpc } from "./createServerRpc-Dxre0F6X.mjs";
import { a as authMiddleware } from "./auth-middleware-eNRVfU3l.mjs";
import { z as isAdmin } from "./services-middleware-nMulUXHZ.mjs";
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
const scenariosLoader_createServerFn_handler = createServerRpc({
  id: "e82cb92e0a1421821b2b686ddfb11374aaf0f63a2e78c46cbf81f54b996fb5b9",
  name: "scenariosLoader",
  filename: "src/routes/_app/_builder/settings/scenarios.tsx"
}, (opts) => scenariosLoader.__executeServer(opts));
const scenariosLoader = createServerFn().middleware([authMiddleware]).handler(scenariosLoader_createServerFn_handler, async function scenariosLoader2({
  context
}) {
  const {
    organization: repository,
    user,
    entitlements
  } = context.authInfo;
  if (!isAdmin(user)) {
    throw redirect({
      to: "/"
    });
  }
  return {
    organization: await repository.getCurrentOrganization(),
    entitlements,
    user
  };
});
export {
  scenariosLoader_createServerFn_handler
};

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
const ipWhitelistingLoader_createServerFn_handler = createServerRpc({
  id: "afff74a332f61da07ae725d09d5dc8755e663effc4cc7c6dd4c465b5bb29b65b",
  name: "ipWhitelistingLoader",
  filename: "src/routes/_app/_builder/settings/ip-whitelisting.tsx"
}, (opts) => ipWhitelistingLoader.__executeServer(opts));
const ipWhitelistingLoader = createServerFn().middleware([authMiddleware]).handler(ipWhitelistingLoader_createServerFn_handler, async function ipWhitelistingLoader2({
  context
}) {
  const {
    organization: orgRepo,
    user
  } = context.authInfo;
  const {
    appConfig
  } = context;
  if (!isAdmin(user) || !appConfig.isManagedMarble) {
    throw redirect({
      to: "/"
    });
  }
  const organization = await orgRepo.getCurrentOrganization();
  return {
    allowedNetworks: organization.allowedNetworks,
    organizationId: organization.id
  };
});
export {
  ipWhitelistingLoader_createServerFn_handler
};

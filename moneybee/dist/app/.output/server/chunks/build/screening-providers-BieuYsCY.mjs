import { c as createServerRpc } from "./createServerRpc-Dxre0F6X.mjs";
import { a as authMiddleware } from "./auth-middleware-eNRVfU3l.mjs";
import { z as isAdmin } from "./services-middleware-nMulUXHZ.mjs";
import { P as isLexisNexisAvailable } from "./feature-access-BSdB6UiC.mjs";
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
const screeningProvidersLoader_createServerFn_handler = createServerRpc({
  id: "75a4947011a2503d8a104142cd6ac180bd616d9a9a6fd524eeb348bf5f5c4e54",
  name: "screeningProvidersLoader",
  filename: "src/routes/_app/_builder/settings/screening-providers.tsx"
}, (opts) => screeningProvidersLoader.__executeServer(opts));
const screeningProvidersLoader = createServerFn().middleware([authMiddleware]).handler(screeningProvidersLoader_createServerFn_handler, async function screeningProvidersLoader2({
  context
}) {
  const {
    organization: orgRepo,
    user,
    entitlements
  } = context.authInfo;
  const {
    appConfig
  } = context;
  if (!isAdmin(user) || appConfig.isManagedMarble) {
    throw redirect({
      to: "/settings"
    });
  }
  const organization = await orgRepo.getCurrentOrganization();
  const availableProviders = ["opensanctions"];
  if (isLexisNexisAvailable(entitlements)) availableProviders.push("lexisnexis");
  return {
    providers: organization.screeningProviders,
    organizationId: organization.id,
    availableProviders
  };
});
export {
  screeningProvidersLoader_createServerFn_handler
};

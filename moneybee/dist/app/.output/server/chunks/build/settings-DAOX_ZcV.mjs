import { c as createServerRpc } from "./createServerRpc-Dxre0F6X.mjs";
import { a as authMiddleware } from "./auth-middleware-eNRVfU3l.mjs";
import { a1 as isAnalyst } from "./services-middleware-nMulUXHZ.mjs";
import { g as getSettingsAccess } from "./settings-access-DVgPcSr7.mjs";
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
const settingsLoader_createServerFn_handler = createServerRpc({
  id: "20e27ce745bfa21d99c5049a732de6c906a0875b8c80d67d3c2cf4e7ba6179e2",
  name: "settingsLoader",
  filename: "src/routes/_app/_builder/settings.tsx"
}, (opts) => settingsLoader.__executeServer(opts));
const settingsLoader = createServerFn().middleware([authMiddleware]).handler(settingsLoader_createServerFn_handler, async function settingsLoader2({
  context
}) {
  const {
    user,
    entitlements,
    inbox
  } = context.authInfo;
  const appConfig = context.appConfig;
  if (isAnalyst(user)) {
    throw redirect({
      to: "/cases"
    });
  }
  const inboxes = await inbox.listInboxes();
  const sections = getSettingsAccess(user, appConfig, inboxes);
  if (appConfig.isManagedMarble) sections.screening_providers.settings = [];
  return {
    sections,
    entitlements
  };
});
export {
  settingsLoader_createServerFn_handler
};

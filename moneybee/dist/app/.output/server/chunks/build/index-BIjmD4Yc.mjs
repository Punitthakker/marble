import { c as createServerRpc } from "./createServerRpc-Dxre0F6X.mjs";
import { a as authMiddleware } from "./auth-middleware-eNRVfU3l.mjs";
import { g as getSettingsAccess } from "./settings-access-DVgPcSr7.mjs";
import { $ as createServerFn, H as redirect } from "./server.mjs";
import "./services-middleware-nMulUXHZ.mjs";
import "./short-uuid-fTZYJj_k.mjs";
import "node:crypto";
import "./logger.server-DV14d0iZ.mjs";
import "node:async_hooks";
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
import "./feature-access-BSdB6UiC.mjs";
import "node:stream";
import "node:stream/web";
import "crypto";
import "async_hooks";
import "stream";
const settingsIndexLoader_createServerFn_handler = createServerRpc({
  id: "00f474f606094326aac4853c55df25d8ac5a87795e7d4c1cf0744ba261b351f7",
  name: "settingsIndexLoader",
  filename: "src/routes/_app/_builder/settings/index.tsx"
}, (opts) => settingsIndexLoader.__executeServer(opts));
const settingsIndexLoader = createServerFn().middleware([authMiddleware]).handler(settingsIndexLoader_createServerFn_handler, async function settingsIndexLoader2({
  context
}) {
  const {
    user,
    inbox
  } = context.authInfo;
  const appConfig = context.appConfig;
  const inboxes = await inbox.listInboxes();
  const settings = getSettingsAccess(user, appConfig, inboxes);
  const firstSetting = Object.values(settings).find((s) => s.settings.length > 0)?.settings[0];
  if (firstSetting) {
    throw redirect({
      to: firstSetting.to
    });
  }
  throw redirect({
    to: "/"
  });
});
export {
  settingsIndexLoader_createServerFn_handler
};

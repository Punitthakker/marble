import { c as createServerRpc } from "./createServerRpc-Dxre0F6X.mjs";
import { a as authMiddleware } from "./auth-middleware-eNRVfU3l.mjs";
import { K as isReadWebhookAvailable, L as isDeleteWebhookAvailable, M as isEditWebhookAvailable, X as isCreateWebhookAvailable } from "./feature-access-BSdB6UiC.mjs";
import { $ as createServerFn, H as redirect } from "./server.mjs";
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
const webhooksLoader_createServerFn_handler = createServerRpc({
  id: "dc01a82806619825cf27ba790d89ffc7a69cc8ea1332600ea74ae86881644b5a",
  name: "webhooksLoader",
  filename: "src/routes/_app/_builder/settings/webhooks.tsx"
}, (opts) => webhooksLoader.__executeServer(opts));
const webhooksLoader = createServerFn().middleware([authMiddleware]).handler(webhooksLoader_createServerFn_handler, async function webhooksLoader2({
  context
}) {
  const {
    webhookRepository,
    user,
    entitlements
  } = context.authInfo;
  if (!isReadWebhookAvailable(user)) throw redirect({
    to: "/"
  });
  const webhooks = await webhookRepository.listWebhooks();
  return {
    webhooks,
    isCreateWebhookAvailable: isCreateWebhookAvailable(user),
    isEditWebhookAvailable: isEditWebhookAvailable(user),
    isDeleteWebhookAvailable: isDeleteWebhookAvailable(user),
    webhooksStatus: entitlements.webhooks
  };
});
export {
  webhooksLoader_createServerFn_handler
};

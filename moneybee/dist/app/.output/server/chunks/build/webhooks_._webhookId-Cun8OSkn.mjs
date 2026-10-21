import { c as createServerRpc } from "./createServerRpc-Dxre0F6X.mjs";
import { a as authMiddleware } from "./auth-middleware-eNRVfU3l.mjs";
import { K as isReadWebhookAvailable, L as isDeleteWebhookAvailable, M as isEditWebhookAvailable } from "./feature-access-BSdB6UiC.mjs";
import { $ as createServerFn, H as redirect } from "./server.mjs";
import { q as invariant } from "./short-uuid-fTZYJj_k.mjs";
import "./services-middleware-nMulUXHZ.mjs";
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
const webhookDetailLoader_createServerFn_handler = createServerRpc({
  id: "536c5d483d909feb789f3e636c7a91e9cadfdd2c714c28b79a89a7bb02ac6d13",
  name: "webhookDetailLoader",
  filename: "src/routes/_app/_builder/settings/webhooks_.$webhookId.tsx"
}, (opts) => webhookDetailLoader.__executeServer(opts));
const webhookDetailLoader = createServerFn().middleware([authMiddleware]).validator((input) => input).handler(webhookDetailLoader_createServerFn_handler, async function webhookDetailLoader2({
  context,
  data
}) {
  const {
    webhookRepository,
    user,
    entitlements
  } = context.authInfo;
  if (!isReadWebhookAvailable(user)) throw redirect({
    to: "/"
  });
  const webhookId = data?.params?.["webhookId"];
  invariant(webhookId);
  const webhook = await webhookRepository.getWebhook({
    webhookId
  });
  return {
    webhook,
    isEditWebhookAvailable: isEditWebhookAvailable(user),
    isDeleteWebhookAvailable: isDeleteWebhookAvailable(user),
    webhookStatus: entitlements.webhooks
  };
});
export {
  webhookDetailLoader_createServerFn_handler
};

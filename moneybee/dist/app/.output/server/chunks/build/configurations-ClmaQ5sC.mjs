import { c as createServerRpc } from "./createServerRpc-Dxre0F6X.mjs";
import { a as authMiddleware } from "./auth-middleware-eNRVfU3l.mjs";
import { z as isAdmin } from "./services-middleware-nMulUXHZ.mjs";
import { b as isContinuousScreeningAvailable } from "./feature-access-BSdB6UiC.mjs";
import { $ as createServerFn } from "./server.mjs";
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
const configurationsLoader_createServerFn_handler = createServerRpc({
  id: "a140ea9b3129290100dd40aa3114c38f68c58f854cd3ca6624c3b39efdd53a4e",
  name: "configurationsLoader",
  filename: "src/routes/_app/_builder/continuous-screening/configurations.tsx"
}, (opts) => configurationsLoader.__executeServer(opts));
const configurationsLoader = createServerFn().middleware([authMiddleware]).handler(configurationsLoader_createServerFn_handler, async function continuousScreeningConfigurationsLoader({
  context
}) {
  const {
    continuousScreening,
    entitlements,
    inbox,
    screening,
    user
  } = context.authInfo;
  const configurationsPromise = isContinuousScreeningAvailable(entitlements) ? continuousScreening.listConfigurations() : Promise.resolve([]);
  const [configurationItems, datasets, inboxes] = await Promise.all([configurationsPromise, screening.getAvailableFilters({
    feature: "continuous_monitoring"
  }), inbox.listInboxes()]);
  const configurations = configurationItems.map((config) => {
    const inboxItem = inboxes.find((inboxItem2) => inboxItem2.id === config.inboxId);
    return {
      ...config,
      inbox: inboxItem
    };
  });
  return {
    canEdit: ["ADMIN", "PUBLISHER"].includes(user.role),
    isAdmin: isAdmin(user),
    configurations,
    datasets
  };
});
export {
  configurationsLoader_createServerFn_handler
};

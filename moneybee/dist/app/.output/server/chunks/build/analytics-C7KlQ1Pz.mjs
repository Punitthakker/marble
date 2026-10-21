import { c as createServerRpc } from "./createServerRpc-Dxre0F6X.mjs";
import { a as authMiddleware } from "./auth-middleware-eNRVfU3l.mjs";
import { z as isAdmin } from "./services-middleware-nMulUXHZ.mjs";
import { d as isInboxAdmin, B as isAccessible } from "./feature-access-BSdB6UiC.mjs";
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
const casesAnalyticsLoader_createServerFn_handler = createServerRpc({
  id: "35ab51f7cbac3061cb7d3973f74ba220112989bf839f06f7ada19addb0361183",
  name: "casesAnalyticsLoader",
  filename: "src/routes/_app/_builder/cases/analytics.tsx"
}, (opts) => casesAnalyticsLoader.__executeServer(opts));
const casesAnalyticsLoader = createServerFn().middleware([authMiddleware]).handler(casesAnalyticsLoader_createServerFn_handler, async function casesAnalyticsLoader2({
  context
}) {
  const {
    user,
    entitlements,
    inbox: inboxRepository,
    organization
  } = context.authInfo;
  const [inboxes, users] = await Promise.all([inboxRepository.listInboxes(), organization.listUsers()]);
  const canViewAdminSections = isAdmin(user) || inboxes.some((inbox) => isInboxAdmin(user, inbox));
  if (!canViewAdminSections) {
    throw new Response(null, {
      status: 403
    });
  }
  return {
    inboxes,
    users,
    isAnalyticsAvailable: isAccessible(entitlements.analytics)
  };
});
export {
  casesAnalyticsLoader_createServerFn_handler
};

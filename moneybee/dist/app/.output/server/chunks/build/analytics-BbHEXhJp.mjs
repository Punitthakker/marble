import { c as createServerRpc } from "./createServerRpc-Dxre0F6X.mjs";
import { a as authMiddleware } from "./auth-middleware-eNRVfU3l.mjs";
import { a as isAnalyticsAvailable } from "./feature-access-BSdB6UiC.mjs";
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
const analyticsLayoutLoader_createServerFn_handler = createServerRpc({
  id: "be70655bf46ebde519b189f0f0a811452f0cf60518a6ffc381b86125323c6449",
  name: "analyticsLayoutLoader",
  filename: "src/routes/_app/_builder/detection/analytics.tsx"
}, (opts) => analyticsLayoutLoader.__executeServer(opts));
const analyticsLayoutLoader = createServerFn().middleware([authMiddleware]).handler(analyticsLayoutLoader_createServerFn_handler, async function analyticsLayout({
  context
}) {
  const {
    user,
    entitlements
  } = context.authInfo;
  if (!isAnalyticsAvailable(user, entitlements)) {
    throw redirect({
      to: "/detection"
    });
  }
  return null;
});
export {
  analyticsLayoutLoader_createServerFn_handler
};

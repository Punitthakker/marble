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
const analyticsLegacyLoader_createServerFn_handler = createServerRpc({
  id: "f83b5212fec014171a188acfaf7c75cdb389ad95ff8015a1b0d5e8fe47315f6b",
  name: "analyticsLegacyLoader",
  filename: "src/routes/_app/_builder/analytics-legacy.tsx"
}, (opts) => analyticsLegacyLoader.__executeServer(opts));
const analyticsLegacyLoader = createServerFn().middleware([authMiddleware]).handler(analyticsLegacyLoader_createServerFn_handler, async function analyticsLegacyLoader2({
  context
}) {
  const {
    user,
    analytics,
    entitlements
  } = context.authInfo;
  if (!isAnalyticsAvailable(user, entitlements)) {
    throw redirect({
      to: "/"
    });
  }
  const analyticsList = await analytics.legacyListAnalytics();
  const globalDashbord = analyticsList.find(({
    embeddingType
  }) => embeddingType === "global_dashboard");
  if (!globalDashbord) {
    throw new Response("Global dashboard doesn't exist", {
      status: 404
    });
  }
  return {
    globalDashbord: {
      title: "Global Dashboard",
      src: globalDashbord.signedEmbeddingUrl
    }
  };
});
export {
  analyticsLegacyLoader_createServerFn_handler
};

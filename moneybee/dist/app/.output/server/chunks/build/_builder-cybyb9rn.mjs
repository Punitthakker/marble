import { c as createServerRpc } from "./createServerRpc-Dxre0F6X.mjs";
import { a as authMiddleware } from "./auth-middleware-eNRVfU3l.mjs";
import { a1 as isAnalyst } from "./services-middleware-nMulUXHZ.mjs";
import { m as isScreeningSearchAvailable, l as isAutoAssignmentAvailable, a as isAnalyticsAvailable } from "./feature-access-BSdB6UiC.mjs";
import { g as getSettingsAccess } from "./settings-access-DVgPcSr7.mjs";
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
const appBuilderLayoutLoader_createServerFn_handler = createServerRpc({
  id: "84eac02c9d8f666b46122a63a8c2d500f028fba6ad6fe0463043c6d76a73a221",
  name: "appBuilderLayoutLoader",
  filename: "src/routes/_app/_builder.tsx"
}, (opts) => appBuilderLayoutLoader.__executeServer(opts));
const appBuilderLayoutLoader = createServerFn({
  method: "GET"
}).middleware([authMiddleware]).handler(appBuilderLayoutLoader_createServerFn_handler, async function appBuilderLayout({
  context
}) {
  const {
    user,
    inbox,
    organization,
    entitlements
  } = context.authInfo;
  const [organizationDetail, orgUsers, orgTags, orgObjectTags, inboxes] = await Promise.all([organization.getCurrentOrganization(), organization.listUsers(), organization.listTags(), organization.listTags({
    target: "object"
  }), inbox.listInboxes()]);
  const settingsSections = getSettingsAccess(user, context.appConfig, inboxes);
  const firstSetting = Object.values(settingsSections).find((s) => s.settings.length > 0)?.settings[0];
  return {
    user,
    orgUsers,
    organization: organizationDetail,
    orgTags,
    orgObjectTags,
    featuresAccess: {
      isAnalyticsAvailable: isAnalyticsAvailable(user, entitlements),
      analytics: entitlements.analytics,
      settings: !isAnalyst(user) && firstSetting !== void 0 ? {
        isAvailable: true,
        to: firstSetting.to
      } : {
        isAvailable: false
      },
      isAutoAssignmentAvailable: isAutoAssignmentAvailable(entitlements),
      continuousScreening: entitlements.continuousScreening,
      isScreeningSearchAvailable: isScreeningSearchAvailable(entitlements),
      userScoring: isAnalyst(user) ? "restricted" : entitlements.userScoring
    },
    authProvider: context.appConfig.auth.provider,
    sentryReplayEnabled: organizationDetail.sentryReplayEnabled
  };
});
export {
  appBuilderLayoutLoader_createServerFn_handler
};

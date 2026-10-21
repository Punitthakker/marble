import { c as createServerRpc } from "./createServerRpc-Dxre0F6X.mjs";
import { s as servicesMiddleware } from "./services-middleware-nMulUXHZ.mjs";
import { $ as createServerFn, H as redirect } from "./server.mjs";
import "./short-uuid-fTZYJj_k.mjs";
import "node:crypto";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
import "util";
import "crypto";
import "async_hooks";
import "stream";
const onboardingLoader_createServerFn_handler = createServerRpc({
  id: "e2bcbb7a524b63816c0513cb2183a4a7a7e7967f259d2fe2f841228030e849d2",
  name: "onboardingLoader",
  filename: "src/routes/_app/onboarding.tsx"
}, (opts) => onboardingLoader.__executeServer(opts));
const onboardingLoader = createServerFn().middleware([servicesMiddleware]).handler(onboardingLoader_createServerFn_handler, async function onboardingLoader2({
  context
}) {
  const appConfig = context.appConfig;
  if (!appConfig || !appConfig.status.migrations || appConfig.status.hasOrg) {
    throw redirect({
      to: "/sign-in"
    });
  }
  return {
    authProvider: appConfig.auth.provider
  };
});
export {
  onboardingLoader_createServerFn_handler
};

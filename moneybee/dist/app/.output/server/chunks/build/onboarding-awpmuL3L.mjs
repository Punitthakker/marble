import { c as createServerRpc } from "./createServerRpc-Dxre0F6X.mjs";
import { s as servicesMiddleware, H as isStatusConflictHttpError } from "./services-middleware-nMulUXHZ.mjs";
import { c as createInitialOrgPayloadSchema, M as MIN_PASSWORD_LENGTH } from "./onboarding-XD9GD15x.mjs";
import { $ as createServerFn } from "./server.mjs";
import "./short-uuid-fTZYJj_k.mjs";
import "node:crypto";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
import "util";
import "crypto";
import "async_hooks";
import "stream";
const createInitialOrgFn_createServerFn_handler = createServerRpc({
  id: "c2a7d8c56cdccfb43442312d796c7f53f83a4a667378fe94a027bc9778a2cf6d",
  name: "createInitialOrgFn",
  filename: "src/server-fns/onboarding.ts"
}, (opts) => createInitialOrgFn.__executeServer(opts));
const createInitialOrgFn = createServerFn({
  method: "POST"
}).middleware([servicesMiddleware]).validator(createInitialOrgPayloadSchema).handler(createInitialOrgFn_createServerFn_handler, async ({
  context,
  data
}) => {
  const {
    password,
    ...rest
  } = data;
  const requiresPassword = context.appConfig?.auth.provider !== "oidc";
  if (requiresPassword && (!password || password.length < MIN_PASSWORD_LENGTH)) {
    throw new Error(`A password of at least ${MIN_PASSWORD_LENGTH} characters is required`);
  }
  try {
    await context.services.onboardingRepository.createInitialOrg(requiresPassword ? {
      ...rest,
      password
    } : rest);
    return {
      error: null
    };
  } catch (error) {
    if (isStatusConflictHttpError(error)) {
      return {
        error: "already_initialized"
      };
    }
    throw error;
  }
});
export {
  createInitialOrgFn_createServerFn_handler
};

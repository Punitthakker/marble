import { c as createServerRpc } from "./createServerRpc-Dxre0F6X.mjs";
import { a as authMiddleware } from "./auth-middleware-eNRVfU3l.mjs";
import { a1 as isAnalyst } from "./services-middleware-nMulUXHZ.mjs";
import { N as isUserScoringAvailable } from "./feature-access-BSdB6UiC.mjs";
import { $ as createServerFn, H as redirect } from "./server.mjs";
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
const userScoringLayoutLoader_createServerFn_handler = createServerRpc({
  id: "69c1121ba3b9733ad8a1ec4ec65753e354d35c7612bd9734056c85c59b5b1017",
  name: "userScoringLayoutLoader",
  filename: "src/routes/_app/_builder/user-scoring.tsx"
}, (opts) => userScoringLayoutLoader.__executeServer(opts));
const userScoringLayoutLoader = createServerFn().middleware([authMiddleware]).handler(userScoringLayoutLoader_createServerFn_handler, async function userScoringLayout({
  context
}) {
  const {
    user,
    entitlements,
    userScoring
  } = context.authInfo;
  if (isAnalyst(user) || !isUserScoringAvailable(entitlements)) {
    throw redirect({
      to: "/"
    });
  }
  const settings = await userScoring.getSettings();
  return {
    settings
  };
});
export {
  userScoringLayoutLoader_createServerFn_handler
};

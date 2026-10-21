import { c as createServerRpc } from "./createServerRpc-Dxre0F6X.mjs";
import { a as authMiddleware } from "./auth-middleware-eNRVfU3l.mjs";
import { a1 as isAnalyst } from "./services-middleware-nMulUXHZ.mjs";
import { b as isContinuousScreeningAvailable } from "./feature-access-BSdB6UiC.mjs";
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
const continuousScreeningLayoutLoader_createServerFn_handler = createServerRpc({
  id: "9e373c98a7ca5a88e36577c19656bba7280c710ca1f4b629f115dca016dcf558",
  name: "continuousScreeningLayoutLoader",
  filename: "src/routes/_app/_builder/continuous-screening.tsx"
}, (opts) => continuousScreeningLayoutLoader.__executeServer(opts));
const continuousScreeningLayoutLoader = createServerFn().middleware([authMiddleware]).handler(continuousScreeningLayoutLoader_createServerFn_handler, async function continuousScreeningLayout({
  context
}) {
  const {
    user,
    entitlements
  } = context.authInfo;
  if (isAnalyst(user)) {
    throw redirect({
      to: "/cases"
    });
  }
  if (!isContinuousScreeningAvailable(entitlements)) {
    throw redirect({
      to: "/"
    });
  }
  return null;
});
export {
  continuousScreeningLayoutLoader_createServerFn_handler
};

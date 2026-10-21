import { c as createServerRpc } from "./createServerRpc-Dxre0F6X.mjs";
import { a as authMiddleware } from "./auth-middleware-eNRVfU3l.mjs";
import { m as isScreeningSearchAvailable } from "./feature-access-BSdB6UiC.mjs";
import { $ as createServerFn, H as redirect } from "./server.mjs";
import "./services-middleware-nMulUXHZ.mjs";
import "./short-uuid-fTZYJj_k.mjs";
import "node:crypto";
import "./logger.server-DV14d0iZ.mjs";
import "node:async_hooks";
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
import "node:stream";
import "node:stream/web";
import "crypto";
import "async_hooks";
import "stream";
const screeningSearchLayoutLoader_createServerFn_handler = createServerRpc({
  id: "2d2244244a5c168d712065e928972a8ce0e9d423fb5e81e7fd9a076255d70447",
  name: "screeningSearchLayoutLoader",
  filename: "src/routes/_app/_builder/screening-search.tsx"
}, (opts) => screeningSearchLayoutLoader.__executeServer(opts));
const screeningSearchLayoutLoader = createServerFn().middleware([authMiddleware]).handler(screeningSearchLayoutLoader_createServerFn_handler, async function screeningSearchLayout({
  context
}) {
  const {
    entitlements
  } = context.authInfo;
  if (!isScreeningSearchAvailable(entitlements)) {
    throw redirect({
      to: "/"
    });
  }
  return null;
});
export {
  screeningSearchLayoutLoader_createServerFn_handler
};

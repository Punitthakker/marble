import { c as createServerRpc } from "./createServerRpc-Dxre0F6X.mjs";
import { a as authMiddleware } from "./auth-middleware-eNRVfU3l.mjs";
import { a1 as isAnalyst } from "./services-middleware-nMulUXHZ.mjs";
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
const detectionLayoutLoader_createServerFn_handler = createServerRpc({
  id: "96e778b85525688a73f39daf945f12d0e8bf1582e4d62ff331d7c45582857d17",
  name: "detectionLayoutLoader",
  filename: "src/routes/_app/_builder/detection.tsx"
}, (opts) => detectionLayoutLoader.__executeServer(opts));
const detectionLayoutLoader = createServerFn().middleware([authMiddleware]).handler(detectionLayoutLoader_createServerFn_handler, async function detectionLayout({
  context
}) {
  if (isAnalyst(context.authInfo.user)) {
    throw redirect({
      to: "/cases"
    });
  }
  return null;
});
export {
  detectionLayoutLoader_createServerFn_handler
};

import { c as createServerRpc } from "./createServerRpc-Dxre0F6X.mjs";
import { a as authMiddleware } from "./auth-middleware-eNRVfU3l.mjs";
import { $ as createServerFn } from "./server.mjs";
import { o as object, s as string } from "./short-uuid-fTZYJj_k.mjs";
import "./services-middleware-nMulUXHZ.mjs";
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
const createConfigurationLoader_createServerFn_handler = createServerRpc({
  id: "35b91dd8aa3e517665c46541765abb8b29e3966a38ce7df8784c8847df4244f1",
  name: "createConfigurationLoader",
  filename: "src/routes/_app/_builder/continuous-screening/create/index.tsx"
}, (opts) => createConfigurationLoader.__executeServer(opts));
const createConfigurationLoader = createServerFn().middleware([authMiddleware]).validator(object({
  name: string(),
  description: string().optional()
})).handler(createConfigurationLoader_createServerFn_handler, async function continuousScreeningCreateLoader({
  data: {
    name,
    description
  }
}) {
  return {
    name,
    description: description ?? ""
  };
});
export {
  createConfigurationLoader_createServerFn_handler
};

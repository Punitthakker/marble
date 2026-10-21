import { c as createServerRpc } from "./createServerRpc-Dxre0F6X.mjs";
import { s as servicesMiddleware } from "./services-middleware-nMulUXHZ.mjs";
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
const getAppConfigFn_createServerFn_handler = createServerRpc({
  id: "9675e53932d479c3dca797a1ff9bfad4f8a7229c662af881bd200287d2a19dbe",
  name: "getAppConfigFn",
  filename: "src/server-fns/core.ts"
}, (opts) => getAppConfigFn.__executeServer(opts));
const getAppConfigFn = createServerFn({
  method: "GET"
}).middleware([servicesMiddleware]).handler(getAppConfigFn_createServerFn_handler, async ({
  context
}) => {
  return context.appConfig;
});
export {
  getAppConfigFn_createServerFn_handler
};

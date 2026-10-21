import { c as createServerRpc } from "./createServerRpc-Dxre0F6X.mjs";
import { f as supportedLngs, s as servicesMiddleware } from "./services-middleware-nMulUXHZ.mjs";
import { $ as createServerFn } from "./server.mjs";
import { o as object, _ as _enum } from "./short-uuid-fTZYJj_k.mjs";
import "node:crypto";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
import "util";
import "crypto";
import "async_hooks";
import "stream";
const setLanguagePayloadSchema = object({
  preferredLanguage: _enum(supportedLngs)
});
const setLanguageFn_createServerFn_handler = createServerRpc({
  id: "56f0cc55efe9f42480c18332b978130eb1b8c834d27c7b8d818d11fbe9a9fefe",
  name: "setLanguageFn",
  filename: "src/server-fns/user.ts"
}, (opts) => setLanguageFn.__executeServer(opts));
const setLanguageFn = createServerFn({
  method: "POST"
}).middleware([servicesMiddleware]).validator(setLanguagePayloadSchema).handler(setLanguageFn_createServerFn_handler, async ({
  context,
  data
}) => {
  try {
    await context.services.i18nextService.setLanguage(data.preferredLanguage);
  } catch {
    throw new Error("Failed to set language");
  }
});
export {
  setLanguageFn_createServerFn_handler
};

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
const checkVersionUpdateFn_createServerFn_handler = createServerRpc({
  id: "61e04074ce129bbfdce54aba5d0f8d00a509af97018b86bcbf7811789406c510",
  name: "checkVersionUpdateFn",
  filename: "src/server-fns/version.ts"
}, (opts) => checkVersionUpdateFn.__executeServer(opts));
const checkVersionUpdateFn = createServerFn({
  method: "GET"
}).middleware([servicesMiddleware]).handler(checkVersionUpdateFn_createServerFn_handler, async ({
  context
}) => {
  const {
    outdated,
    versions
  } = await context.services.appConfigRepository.getReleaseNotes();
  return {
    needsUpdate: outdated.isOutdated,
    version: outdated.latestVersion ?? versions.apiVersion,
    releaseNotes: outdated.releaseNotes?.join("\n\n") ?? "",
    releaseUrl: outdated.latestUrl ?? ""
  };
});
export {
  checkVersionUpdateFn_createServerFn_handler
};

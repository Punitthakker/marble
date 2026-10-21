import { c as createServerRpc } from "./createServerRpc-Dxre0F6X.mjs";
import { a as authMiddleware } from "./auth-middleware-eNRVfU3l.mjs";
import { n as normalizeListConfig } from "./lists-config-DL0Z5yQK.mjs";
import { $ as createServerFn } from "./server.mjs";
import "./services-middleware-nMulUXHZ.mjs";
import "./short-uuid-fTZYJj_k.mjs";
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
import "./screenings-C_YbbaUO.mjs";
import "./query-BmG5BEas.mjs";
import "./coerce-UidCu_Sb.mjs";
import "./useQuery-Bb0AEcpf.mjs";
import "./useBaseQuery-BqF2iw7Y.mjs";
import "./useServerFn-oRH5Nw97.mjs";
const screeningSearchLoader_createServerFn_handler = createServerRpc({
  id: "ed369d932318dab0b42256698a8e38d6f47487bdb776a258c2db28c0893fff84",
  name: "screeningSearchLoader",
  filename: "src/routes/_app/_builder/screening-search/index.tsx"
}, (opts) => screeningSearchLoader.__executeServer(opts));
const screeningSearchLoader = createServerFn().middleware([authMiddleware]).handler(screeningSearchLoader_createServerFn_handler, async function screeningSearchLoader2({
  context
}) {
  const rawListConfig = await context.authInfo.screening.getAvailableFilters({
    feature: "manual_search"
  });
  return {
    listConfig: normalizeListConfig(rawListConfig)
  };
});
export {
  screeningSearchLoader_createServerFn_handler
};

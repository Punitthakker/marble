import { c as createServerRpc } from "./createServerRpc-Dxre0F6X.mjs";
import { a as authMiddleware } from "./auth-middleware-eNRVfU3l.mjs";
import { j as fromParams } from "./short-uuid-fTZYJj_k.mjs";
import { $ as createServerFn } from "./server.mjs";
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
const screeningFilesLoader_createServerFn_handler = createServerRpc({
  id: "4a28384f0c1ddd01ba12aeab2b2ace7744773b2f0c0f887d7cbabaa408dd4843",
  name: "screeningFilesLoader",
  filename: "src/routes/_app/_builder/cases/$caseId/d/$decisionId/screenings/$screeningId/files.tsx"
}, (opts) => screeningFilesLoader.__executeServer(opts));
const screeningFilesLoader = createServerFn().middleware([authMiddleware]).validator((input) => input).handler(screeningFilesLoader_createServerFn_handler, async function screeningFilesLoader2({
  context,
  data
}) {
  const {
    screening: screeningRepository
  } = context.authInfo;
  const decisionId = fromParams(data?.params ?? {}, "decisionId");
  const screeningId = fromParams(data?.params ?? {}, "screeningId");
  const screenings = await screeningRepository.listScreenings({
    decisionId
  });
  const screening = screenings.find((s) => s.id === screeningId);
  if (!screening) {
    throw new Response(null, {
      status: 404,
      statusText: "Not Found"
    });
  }
  return {
    files: await screeningRepository.listScreeningFiles({
      screeningId: screening.id
    }),
    screening
  };
});
export {
  screeningFilesLoader_createServerFn_handler
};

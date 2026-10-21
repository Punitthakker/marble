import { c as createServerRpc } from "./createServerRpc-Dxre0F6X.mjs";
import { a as authMiddleware } from "./auth-middleware-eNRVfU3l.mjs";
import { f as fromUUIDtoSUUID } from "./short-uuid-fTZYJj_k.mjs";
import { $ as createServerFn, H as redirect } from "./server.mjs";
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
const screeningIndexLoader_createServerFn_handler = createServerRpc({
  id: "fae90b50f659174fbb10c5c418df19bf152d84db7c54afb41783f3357caf76e7",
  name: "screeningIndexLoader",
  filename: "src/routes/_app/_builder/cases/$caseId/d/$decisionId/screenings/$screeningId/index.tsx"
}, (opts) => screeningIndexLoader.__executeServer(opts));
const screeningIndexLoader = createServerFn().middleware([authMiddleware]).validator((input) => input).handler(screeningIndexLoader_createServerFn_handler, async function screeningIndexLoader2({
  data
}) {
  const caseId = data?.params?.["caseId"];
  if (!caseId) {
    throw redirect({
      to: "/cases/inboxes"
    });
  }
  const decisionId = data?.params?.["decisionId"];
  const screeningId = data?.params?.["screeningId"];
  if (!decisionId || !screeningId) {
    throw redirect({
      to: "/cases/$caseId",
      params: {
        caseId: fromUUIDtoSUUID(caseId)
      }
    });
  }
  throw redirect({
    to: "/cases/$caseId/d/$decisionId/screenings/$screeningId/hits",
    params: {
      caseId: fromUUIDtoSUUID(caseId),
      decisionId: fromUUIDtoSUUID(decisionId),
      screeningId: fromUUIDtoSUUID(screeningId)
    }
  });
});
export {
  screeningIndexLoader_createServerFn_handler
};

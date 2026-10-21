import { c as createServerRpc } from "./createServerRpc-Dxre0F6X.mjs";
import { a as authMiddleware } from "./auth-middleware-eNRVfU3l.mjs";
import { c as caseDetailMiddleware } from "./case-detail-middleware-iDVIrW-c.mjs";
import { o as object, s as string, z as record, f as fromUUIDtoSUUID } from "./short-uuid-fTZYJj_k.mjs";
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
import "./inboxes-D556s0BB.mjs";
import "./input-validation-D4mgQsey.mjs";
import "./async-C3pYACua.mjs";
const caseDetailLoader_createServerFn_handler = createServerRpc({
  id: "8370bb112072e4230aaa7c77c7ba194d39985d69e4c9b7700b9e6ed1c051793d",
  name: "caseDetailLoader",
  filename: "src/routes/_app/_builder/cases/$caseId/index.tsx"
}, (opts) => caseDetailLoader.__executeServer(opts));
const caseDetailLoader = createServerFn().middleware([authMiddleware, caseDetailMiddleware]).validator(object({
  params: record(string(), string()).optional(),
  search: object({
    fromInbox: string().optional()
  }).optional()
})).handler(caseDetailLoader_createServerFn_handler, async function caseDetailLoader2({
  context,
  data
}) {
  const {
    detail: caseDetail
  } = context.case;
  const fromInbox = data.search?.fromInbox;
  const search = fromInbox ? {
    fromInbox
  } : void 0;
  if (caseDetail.type === "continuous_screening") {
    throw redirect({
      to: "/cases/m/$caseId",
      params: {
        caseId: fromUUIDtoSUUID(caseDetail.id)
      },
      search
    });
  }
  throw redirect({
    to: "/cases/s/$caseId",
    params: {
      caseId: fromUUIDtoSUUID(caseDetail.id)
    },
    search
  });
});
export {
  caseDetailLoader_createServerFn_handler
};

import { c as createServerRpc } from "./createServerRpc-Dxre0F6X.mjs";
import { a as authMiddleware } from "./auth-middleware-eNRVfU3l.mjs";
import { o as object, s as string, c as fromSUUIDtoUUID } from "./short-uuid-fTZYJj_k.mjs";
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
const beforeLoadFn_createServerFn_handler = createServerRpc({
  id: "d919209ec64b26007ada86318123630032b1e88e73234609fed0872d0ce2ffac",
  name: "beforeLoadFn",
  filename: "src/routes/_app/_builder/cases/_detail/m.$caseId/index.tsx"
}, (opts) => beforeLoadFn.__executeServer(opts));
const beforeLoadFn = createServerFn({
  method: "GET"
}).middleware([authMiddleware]).validator(object({
  caseId: string().transform((shortuuid) => fromSUUIDtoUUID(shortuuid))
})).handler(beforeLoadFn_createServerFn_handler, async ({
  context,
  data
}) => {
  const caseDetail = await context.authInfo.cases.getCase({
    caseId: data.caseId
  });
  const screening = caseDetail.continuousScreenings[0];
  if (!screening) {
    throw redirect({
      to: "/cases/inboxes/$inboxId",
      params: {
        inboxId: caseDetail.inboxId
      }
    });
  }
  return {
    caseDetail,
    screening
  };
});
export {
  beforeLoadFn_createServerFn_handler
};

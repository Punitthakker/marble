import { c as createServerRpc } from "./createServerRpc-Dxre0F6X.mjs";
import { a as authMiddleware } from "./auth-middleware-eNRVfU3l.mjs";
import { c as caseDetailMiddleware } from "./case-detail-middleware-iDVIrW-c.mjs";
import { $ as createServerFn } from "./server.mjs";
import { t } from "./pick-zDxvbwOs.mjs";
import "./services-middleware-nMulUXHZ.mjs";
import "./short-uuid-fTZYJj_k.mjs";
import "node:crypto";
import "./logger.server-DV14d0iZ.mjs";
import "node:async_hooks";
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
import "./inboxes-D556s0BB.mjs";
import "./input-validation-D4mgQsey.mjs";
import "./async-C3pYACua.mjs";
import "node:stream";
import "node:stream/web";
import "crypto";
import "async_hooks";
import "stream";
const beforeLoadFn_createServerFn_handler = createServerRpc({
  id: "14e7d5aa898d82c7977f719e8dd399a2a401db0c7f57634d9f4772dbc350ab28",
  name: "beforeLoadFn",
  filename: "src/routes/_app/_builder/cases/_detail.tsx"
}, (opts) => beforeLoadFn.__executeServer(opts));
const beforeLoadFn = createServerFn({
  method: "GET"
}).middleware([authMiddleware]).handler(beforeLoadFn_createServerFn_handler, async ({
  context
}) => {
  return {
    inboxes: await context.authInfo.inbox.listInboxes()
  };
});
const caseDetailLayoutLoader_createServerFn_handler = createServerRpc({
  id: "ad3d01eeafa29cd4f2088158bee9026204a9de5c16c52683ac5449c13384cb30",
  name: "caseDetailLayoutLoader",
  filename: "src/routes/_app/_builder/cases/_detail.tsx"
}, (opts) => caseDetailLayoutLoader.__executeServer(opts));
const caseDetailLayoutLoader = createServerFn().middleware([authMiddleware, caseDetailMiddleware]).validator((input) => input).handler(caseDetailLayoutLoader_createServerFn_handler, async function caseDetailLayoutLoader2({
  context
}) {
  return {
    detail: t(context.case.detail, ["id", "name", "dueAt", "status"]),
    inbox: t(context.case.inbox, ["id", "name"])
  };
});
export {
  beforeLoadFn_createServerFn_handler,
  caseDetailLayoutLoader_createServerFn_handler
};

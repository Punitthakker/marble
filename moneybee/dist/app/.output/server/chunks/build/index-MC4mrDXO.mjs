import { c as createServerRpc } from "./createServerRpc-Dxre0F6X.mjs";
import { M as MY_INBOX_ID } from "./inboxes-D556s0BB.mjs";
import { a as authMiddleware } from "./auth-middleware-eNRVfU3l.mjs";
import { g as getPreferencesCookie } from "./preferences-cookie-read.server-BnyhPC_r.mjs";
import { c as fromSUUIDtoUUID } from "./short-uuid-fTZYJj_k.mjs";
import { $ as createServerFn, a5 as getRequest, H as redirect } from "./server.mjs";
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
import "./config--RFGchua.mjs";
const casesInboxesIndexLoader_createServerFn_handler = createServerRpc({
  id: "657390759bf41fc09b64c2cb7e4f77389c9d27685c05d104e7d2f738d4daaacc",
  name: "casesInboxesIndexLoader",
  filename: "src/routes/_app/_builder/cases/inboxes/index.tsx"
}, (opts) => casesInboxesIndexLoader.__executeServer(opts));
const casesInboxesIndexLoader = createServerFn().middleware([authMiddleware]).handler(casesInboxesIndexLoader_createServerFn_handler, async function casesInboxesIndexLoader2({
  context
}) {
  const request = getRequest();
  const {
    inbox: inboxRepository
  } = context.authInfo;
  const favoriteInboxId = getPreferencesCookie(request, "favInbox");
  let targetInboxId = MY_INBOX_ID;
  if (favoriteInboxId && favoriteInboxId !== MY_INBOX_ID) {
    const inboxes = await inboxRepository.listInboxesWithCaseCount();
    const favoriteUUID = fromSUUIDtoUUID(favoriteInboxId);
    const inboxExists = inboxes.some((inbox) => inbox.id === favoriteUUID);
    if (inboxExists) {
      targetInboxId = favoriteInboxId;
    }
  } else if (favoriteInboxId === MY_INBOX_ID) {
    targetInboxId = MY_INBOX_ID;
  }
  throw redirect({
    to: "/cases/inboxes/$inboxId",
    params: {
      inboxId: targetInboxId
    }
  });
});
export {
  casesInboxesIndexLoader_createServerFn_handler
};

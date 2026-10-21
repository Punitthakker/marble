import { c as createServerRpc } from "./createServerRpc-Dxre0F6X.mjs";
import { M as MY_INBOX_ID } from "./inboxes-D556s0BB.mjs";
import { a as authMiddleware } from "./auth-middleware-eNRVfU3l.mjs";
import { z as isAdmin } from "./services-middleware-nMulUXHZ.mjs";
import { d as isInboxAdmin } from "./feature-access-BSdB6UiC.mjs";
import { $ as createServerFn, H as redirect } from "./server.mjs";
import "./logger.server-DV14d0iZ.mjs";
import "node:async_hooks";
import "./short-uuid-fTZYJj_k.mjs";
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
import "node:crypto";
import "node:stream";
import "node:stream/web";
import "crypto";
import "async_hooks";
import "stream";
const casesIndexLoader_createServerFn_handler = createServerRpc({
  id: "17ca890b622271b903097bbbed576a63389f3e45f0e5e1b1486d9f95d5f111f1",
  name: "casesIndexLoader",
  filename: "src/routes/_app/_builder/cases/index.tsx"
}, (opts) => casesIndexLoader.__executeServer(opts));
const casesIndexLoader = createServerFn().middleware([authMiddleware]).handler(casesIndexLoader_createServerFn_handler, async function casesIndexLoader2({
  context
}) {
  const {
    user,
    inbox: inboxRepository
  } = context.authInfo;
  const inboxes = await inboxRepository.listInboxes();
  if (isAdmin(user) || inboxes.some((inbox) => isInboxAdmin(user, inbox))) {
    throw redirect({
      to: "/cases/overview"
    });
  }
  throw redirect({
    to: "/cases/inboxes/$inboxId",
    params: {
      inboxId: MY_INBOX_ID
    }
  });
});
export {
  casesIndexLoader_createServerFn_handler
};

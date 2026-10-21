import { c as createServerRpc } from "./createServerRpc-Dxre0F6X.mjs";
import { M as MY_INBOX_ID } from "./inboxes-D556s0BB.mjs";
import { a as authMiddleware } from "./auth-middleware-eNRVfU3l.mjs";
import { D as DEFAULT_CASE_PAGINATION_SIZE, z as isAdmin } from "./services-middleware-nMulUXHZ.mjs";
import { d as isInboxAdmin } from "./feature-access-BSdB6UiC.mjs";
import { g as getPreferencesCookie } from "./preferences-cookie-read.server-BnyhPC_r.mjs";
import { o as object, _ as _enum, s as string, c as fromSUUIDtoUUID } from "./short-uuid-fTZYJj_k.mjs";
import { $ as createServerFn, a5 as getRequest } from "./server.mjs";
import { n as number } from "./coerce-UidCu_Sb.mjs";
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
import "node:crypto";
import "node:stream";
import "node:stream/web";
import "crypto";
import "async_hooks";
import "stream";
import "./config--RFGchua.mjs";
const pageQueryStringSchema = object({
  q: string().optional().default(""),
  limit: number().optional().default(DEFAULT_CASE_PAGINATION_SIZE),
  order: _enum(["ASC", "DESC"]).optional().default("DESC")
});
const casesInboxesLoaderSchema = object({
  params: object({
    inboxId: string().transform((id) => id === MY_INBOX_ID ? id : fromSUUIDtoUUID(id))
  }),
  query: pageQueryStringSchema
});
const casesInboxesLoader_createServerFn_handler = createServerRpc({
  id: "390480427159ce14e4675efd04896a7ca68c435f7c2dcb40fb7d839403ae4157",
  name: "casesInboxesLoader",
  filename: "src/routes/_app/_builder/cases/inboxes.$inboxId.tsx"
}, (opts) => casesInboxesLoader.__executeServer(opts));
const casesInboxesLoader = createServerFn().middleware([authMiddleware]).validator(casesInboxesLoaderSchema).handler(casesInboxesLoader_createServerFn_handler, async function casesInboxesLoader2({
  context,
  data: {
    params,
    query
  }
}) {
  const request = getRequest();
  const {
    user,
    inbox: inboxRepository
  } = context.authInfo;
  const inboxes = await inboxRepository.listInboxesWithCaseCount();
  const canViewNavigationTabs = isAdmin(user) || inboxes.some((inbox) => isInboxAdmin(user, inbox));
  let inboxUsersIds = [];
  let currentInbox = inboxes.find((inbox) => inbox.id === params.inboxId);
  if (currentInbox) {
    inboxUsersIds = currentInbox.users.map((user2) => user2.userId);
  }
  const favoriteInboxId = getPreferencesCookie(request, "favInbox") || void 0;
  return {
    inboxId: params.inboxId,
    currentInbox,
    inboxes,
    inboxUsersIds,
    canViewNavigationTabs,
    query: query.q,
    limit: query.limit,
    order: query.order,
    favoriteInboxId
  };
});
export {
  casesInboxesLoader_createServerFn_handler
};

import { c as createServerRpc } from "./createServerRpc-Dxre0F6X.mjs";
import { a as authMiddleware } from "./auth-middleware-eNRVfU3l.mjs";
import { z as isAdmin } from "./services-middleware-nMulUXHZ.mjs";
import { d as isInboxAdmin, R as isDeleteInboxUserAvailable, S as isEditInboxUserAvailable, T as isCreateInboxUserAvailable, U as isDeleteInboxAvailable, V as isEditInboxAvailable, W as getInboxUserRoles, l as isAutoAssignmentAvailable } from "./feature-access-BSdB6UiC.mjs";
import { j as fromParams } from "./short-uuid-fTZYJj_k.mjs";
import { $ as createServerFn, H as redirect } from "./server.mjs";
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
const inboxDetailLoader_createServerFn_handler = createServerRpc({
  id: "8a7664c76b372de8d60a46557e4b07a41388d73db5069a7aab81083cfa29607f",
  name: "inboxDetailLoader",
  filename: "src/routes/_app/_builder/settings/inboxes/$inboxId.tsx"
}, (opts) => inboxDetailLoader.__executeServer(opts));
const inboxDetailLoader = createServerFn().middleware([authMiddleware]).validator((input) => input).handler(inboxDetailLoader_createServerFn_handler, async function inboxDetailLoader2({
  context,
  data
}) {
  const {
    user,
    inbox: inboxApi,
    entitlements
  } = context.authInfo;
  const inboxId = fromParams(data?.params ?? {}, "inboxId");
  const inboxesList = await inboxApi.listInboxesWithCaseCount();
  const inbox = inboxesList.find((inbox2) => inbox2.id === inboxId);
  if (!inbox) throw redirect({
    to: "/settings/inboxes"
  });
  if (!isAdmin(user) && !isInboxAdmin(user, inbox)) {
    throw redirect({
      to: "/"
    });
  }
  const escalationInboxes = await inboxApi.listInboxesMetadata();
  const result = {
    inbox,
    inboxesList,
    escalationInboxes,
    escalationInbox: inbox.escalationInboxId ? await inboxApi.getInboxMetadata(inbox.escalationInboxId) : null,
    caseCount: inbox.casesCount,
    hasCases: inbox.hasCases,
    entitlements,
    isAutoAssignmentAvailable: isAutoAssignmentAvailable(entitlements),
    inboxUserRoles: getInboxUserRoles(entitlements),
    isEditInboxAvailable: isEditInboxAvailable(user, inbox),
    isDeleteInboxAvailable: isDeleteInboxAvailable(user),
    isCreateInboxUserAvailable: isCreateInboxUserAvailable(user, inbox),
    isEditInboxUserAvailable: isEditInboxUserAvailable(user, inbox),
    isDeleteInboxUserAvailable: isDeleteInboxUserAvailable(user, inbox)
  };
  return result;
});
export {
  inboxDetailLoader_createServerFn_handler
};

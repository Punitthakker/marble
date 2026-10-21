import { c as createServerRpc } from "./createServerRpc-Dxre0F6X.mjs";
import { a as authMiddleware } from "./auth-middleware-eNRVfU3l.mjs";
import { z as isAdmin } from "./services-middleware-nMulUXHZ.mjs";
import { d as isInboxAdmin, e as isReadTagAvailable, f as isDeleteTagAvailable, g as isEditTagAvailable, j as isCreateTagAvailable, k as isCreateInboxAvailable, l as isAutoAssignmentAvailable } from "./feature-access-BSdB6UiC.mjs";
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
const inboxesLoader_createServerFn_handler = createServerRpc({
  id: "17fe49fd9649a743daee9b2db7caa3d15a925dc14b9480bad78ab09d42f3167f",
  name: "inboxesLoader",
  filename: "src/routes/_app/_builder/settings/inboxes/index.tsx"
}, (opts) => inboxesLoader.__executeServer(opts));
const inboxesLoader = createServerFn().middleware([authMiddleware]).handler(inboxesLoader_createServerFn_handler, async function inboxesLoader2({
  context
}) {
  const {
    entitlements,
    inbox,
    user,
    organization
  } = context.authInfo;
  const [allInboxes, currentOrganization] = await Promise.all([inbox.listInboxesWithCaseCount(), organization.getCurrentOrganization()]);
  const inboxes = allInboxes.filter((inbox2) => isAdmin(user) || isInboxAdmin(user, inbox2));
  if (inboxes.length === 0 && !isAdmin(user)) {
    throw redirect({
      to: "/"
    });
  }
  const canReadTags = isReadTagAvailable(user);
  let tags = [];
  if (canReadTags) {
    const [caseTags, objectTags] = await Promise.all([organization.listTags({
      withCaseCount: true
    }).then((tags2) => tags2.map((t) => ({
      ...t,
      target: "case"
    }))), organization.listTags({
      target: "object"
    }).then((tags2) => tags2.map((t) => ({
      ...t,
      target: "object"
    })))]);
    tags = [...caseTags, ...objectTags];
  }
  return {
    isAutoAssignmentAvailable: isAutoAssignmentAvailable(entitlements),
    inboxes,
    organizationId: currentOrganization.id,
    isCreateInboxAvailable: isCreateInboxAvailable(user),
    autoAssignQueueLimit: currentOrganization.autoAssignQueueLimit ?? 0,
    canReadTags,
    tags,
    isCreateTagAvailable: canReadTags && isCreateTagAvailable(user),
    isEditTagAvailable: canReadTags && isEditTagAvailable(user),
    isDeleteTagAvailable: canReadTags && isDeleteTagAvailable(user)
  };
});
export {
  inboxesLoader_createServerFn_handler
};

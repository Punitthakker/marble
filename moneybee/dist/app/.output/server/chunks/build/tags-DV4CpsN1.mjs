import { c as createServerRpc } from "./createServerRpc-Dxre0F6X.mjs";
import { a as authMiddleware } from "./auth-middleware-eNRVfU3l.mjs";
import { e as isReadTagAvailable, f as isDeleteTagAvailable, g as isEditTagAvailable, j as isCreateTagAvailable } from "./feature-access-BSdB6UiC.mjs";
import { $ as createServerFn, H as redirect } from "./server.mjs";
import "./services-middleware-nMulUXHZ.mjs";
import "./short-uuid-fTZYJj_k.mjs";
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
const tagsLoader_createServerFn_handler = createServerRpc({
  id: "7742794cc8be33a097adf2021e2e520283bee78d2312e4fcf4ba47a465cadff1",
  name: "tagsLoader",
  filename: "src/routes/_app/_builder/settings/tags.tsx"
}, (opts) => tagsLoader.__executeServer(opts));
const tagsLoader = createServerFn().middleware([authMiddleware]).handler(tagsLoader_createServerFn_handler, async function tagsLoader2({
  context
}) {
  const {
    organization,
    user
  } = context.authInfo;
  if (!isReadTagAvailable(user)) throw redirect({
    to: "/"
  });
  const [caseTags, objectTags] = await Promise.all([organization.listTags({
    withCaseCount: true
  }).then((tags) => tags.map((t) => ({
    ...t,
    target: "case"
  }))), organization.listTags({
    target: "object"
  }).then((tags) => tags.map((t) => ({
    ...t,
    target: "object"
  })))]);
  return {
    tags: [...caseTags, ...objectTags],
    isCreateTagAvailable: isCreateTagAvailable(user),
    isEditTagAvailable: isEditTagAvailable(user),
    isDeleteTagAvailable: isDeleteTagAvailable(user)
  };
});
export {
  tagsLoader_createServerFn_handler
};

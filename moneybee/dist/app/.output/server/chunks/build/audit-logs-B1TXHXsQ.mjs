import { c as createServerRpc } from "./createServerRpc-Dxre0F6X.mjs";
import { a as authMiddleware } from "./auth-middleware-eNRVfU3l.mjs";
import { z as isAdmin } from "./services-middleware-nMulUXHZ.mjs";
import { $ as createServerFn, H as redirect } from "./server.mjs";
import { o as object, s as string } from "./short-uuid-fTZYJj_k.mjs";
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
const DEFAULT_LIMIT = 25;
const pageQueryStringSchema = object({
  q: string().optional().default(""),
  limit: number().optional().default(DEFAULT_LIMIT)
});
const activityFollowUpLoaderSchema = object({
  query: pageQueryStringSchema
});
const activityFollowUpLoader_createServerFn_handler = createServerRpc({
  id: "3b96000682e0b8b7a52a852b0752ff57a7956f274a561ca3c1cc9ac7a2b0fd9d",
  name: "activityFollowUpLoader",
  filename: "src/routes/_app/_builder/settings/audit-logs.tsx"
}, (opts) => activityFollowUpLoader.__executeServer(opts));
const activityFollowUpLoader = createServerFn().middleware([authMiddleware]).validator(activityFollowUpLoaderSchema).handler(activityFollowUpLoader_createServerFn_handler, async function activityFollowUpLoader2({
  context,
  data: {
    query
  }
}) {
  const {
    user,
    apiKey
  } = context.authInfo;
  if (!isAdmin(user)) {
    throw redirect({
      to: "/"
    });
  }
  const apiKeys = await apiKey.listApiKeys();
  return {
    query: query.q,
    limit: query.limit,
    apiKeys
  };
});
export {
  activityFollowUpLoader_createServerFn_handler
};

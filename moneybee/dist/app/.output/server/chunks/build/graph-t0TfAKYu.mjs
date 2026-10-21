import { c as createServerRpc } from "./createServerRpc-Dxre0F6X.mjs";
import { a as authMiddleware } from "./auth-middleware-eNRVfU3l.mjs";
import { c as createGraphRelationPayloadSchema, d as deleteGraphRelationPayloadSchema, g as generateGraphPayloadSchema } from "./graph-BtfBHESi.mjs";
import { $ as createServerFn } from "./server.mjs";
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
import "node:stream";
import "node:stream/web";
import "crypto";
import "async_hooks";
import "stream";
function forbidUnlessCanEditDataModel(user) {
  if (!user.permissions.canEditDataModel) {
    throw new Response(null, {
      status: 403,
      statusText: "Forbidden"
    });
  }
}
const listGraphRelationsFn_createServerFn_handler = createServerRpc({
  id: "e2755ded24ab75a65182f9d344e1bcdbabb59bc0006326ee12f6ea28148e9d31",
  name: "listGraphRelationsFn",
  filename: "src/server-fns/graph.ts"
}, (opts) => listGraphRelationsFn.__executeServer(opts));
const listGraphRelationsFn = createServerFn({
  method: "GET"
}).middleware([authMiddleware]).handler(listGraphRelationsFn_createServerFn_handler, async ({
  context
}) => {
  return context.authInfo.graph.listRelations();
});
const createGraphRelationFn_createServerFn_handler = createServerRpc({
  id: "16f403ee2c116a47e34c8e0d80818169de6c59dfb15b1c1e36c0e75446a45492",
  name: "createGraphRelationFn",
  filename: "src/server-fns/graph.ts"
}, (opts) => createGraphRelationFn.__executeServer(opts));
const createGraphRelationFn = createServerFn({
  method: "POST"
}).middleware([authMiddleware]).validator(createGraphRelationPayloadSchema).handler(createGraphRelationFn_createServerFn_handler, async ({
  context,
  data
}) => {
  forbidUnlessCanEditDataModel(context.authInfo.user);
  return context.authInfo.graph.createRelation(data);
});
const deleteGraphRelationFn_createServerFn_handler = createServerRpc({
  id: "91752b0b19d58937cf2547bbabc3b35394836d2eff0d6c812426be6efa333f04",
  name: "deleteGraphRelationFn",
  filename: "src/server-fns/graph.ts"
}, (opts) => deleteGraphRelationFn.__executeServer(opts));
const deleteGraphRelationFn = createServerFn({
  method: "POST"
}).middleware([authMiddleware]).validator(deleteGraphRelationPayloadSchema).handler(deleteGraphRelationFn_createServerFn_handler, async ({
  context,
  data
}) => {
  forbidUnlessCanEditDataModel(context.authInfo.user);
  await context.authInfo.graph.deleteRelation(data.relationId);
});
const generateGraphFn_createServerFn_handler = createServerRpc({
  id: "c112d63aab77b948e02a72bf3aab3960f4092cc4820615953a537641eba464e7",
  name: "generateGraphFn",
  filename: "src/server-fns/graph.ts"
}, (opts) => generateGraphFn.__executeServer(opts));
const generateGraphFn = createServerFn({
  method: "POST"
}).middleware([authMiddleware]).validator(generateGraphPayloadSchema).handler(generateGraphFn_createServerFn_handler, async ({
  context,
  data
}) => {
  return context.authInfo.graph.generateGraph(data.recordType, data.recordId, {
    degrees: data.degrees,
    types: data.types,
    skipSameFieldRelations: data.skip_same_field_relations,
    sameFieldRelations: data.same_field_relations
  });
});
export {
  createGraphRelationFn_createServerFn_handler,
  deleteGraphRelationFn_createServerFn_handler,
  generateGraphFn_createServerFn_handler,
  listGraphRelationsFn_createServerFn_handler
};

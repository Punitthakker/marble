import { c as createServerRpc } from "./createServerRpc-Dxre0F6X.mjs";
import { a as authMiddleware } from "./auth-middleware-eNRVfU3l.mjs";
import { _ as isWorkflowsAvailable, k as isCreateInboxAvailable } from "./feature-access-BSdB6UiC.mjs";
import { f as fromUUIDtoSUUID, j as fromParams } from "./short-uuid-fTZYJj_k.mjs";
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
const workflowLoader_createServerFn_handler = createServerRpc({
  id: "b715dbcb72c4e13f7f23e5042eb58c4dc63388e4054266d8c58a136fdf4c4189",
  name: "workflowLoader",
  filename: "src/routes/_app/_builder/detection/scenarios/$scenarioId/workflow.tsx"
}, (opts) => workflowLoader.__executeServer(opts));
const workflowLoader = createServerFn().middleware([authMiddleware]).validator((input) => input).handler(workflowLoader_createServerFn_handler, async function workflowLoader2({
  data,
  context
}) {
  const {
    dataModelRepository,
    entitlements,
    user
  } = context.authInfo;
  if (!isWorkflowsAvailable(entitlements)) {
    throw redirect({
      to: "/detection/scenarios/$scenarioId/home",
      params: {
        scenarioId: fromUUIDtoSUUID(fromParams(data?.params ?? {}, "scenarioId"))
      }
    });
  }
  const [dataModel] = await Promise.all([dataModelRepository.getDataModel()]);
  return {
    scenarioId: fromParams(data?.params ?? {}, "scenarioId"),
    dataModel,
    workflowFeatureAccess: {
      isCreateInboxAvailable: isCreateInboxAvailable(user)
    }
  };
});
export {
  workflowLoader_createServerFn_handler
};

import { c as createServerRpc } from "./createServerRpc-Dxre0F6X.mjs";
import { a as authMiddleware } from "./auth-middleware-eNRVfU3l.mjs";
import { $ as isDeploymentActionsAvailable, a0 as isCreateDraftAvailable, c as isEditScenarioAvailable } from "./feature-access-BSdB6UiC.mjs";
import { j as fromParams } from "./short-uuid-fTZYJj_k.mjs";
import { $ as createServerFn } from "./server.mjs";
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
const editViewLoader_createServerFn_handler = createServerRpc({
  id: "ba9c379c3bd9fefe648e379845f78650c969c6a20b6cd18078d4a9a7a1545fbb",
  name: "editViewLoader",
  filename: "src/routes/_app/_builder/detection/scenarios/$scenarioId/i/$iterationId/_edit-view.tsx"
}, (opts) => editViewLoader.__executeServer(opts));
const editViewLoader = createServerFn().middleware([authMiddleware]).validator((input) => input).handler(editViewLoader_createServerFn_handler, async function editViewLoader2({
  data,
  context
}) {
  const {
    scenario,
    user
  } = context.authInfo;
  const iterationId = fromParams(data?.params ?? {}, "iterationId");
  if (!isDeploymentActionsAvailable(user)) {
    return {
      isEditScenarioAvailable: isEditScenarioAvailable(user),
      isDeploymentActionsAvailable: false,
      isCreateDraftAvailable: isCreateDraftAvailable(user)
    };
  }
  const publicationPreparationStatus = await scenario.getPublicationPreparationStatus({
    iterationId
  });
  return {
    isEditScenarioAvailable: isEditScenarioAvailable(user),
    isDeploymentActionsAvailable: true,
    isCreateDraftAvailable: isCreateDraftAvailable(user),
    publicationPreparationStatus
  };
});
export {
  editViewLoader_createServerFn_handler
};

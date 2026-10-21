import { c as createServerRpc } from "./createServerRpc-Dxre0F6X.mjs";
import { a as authMiddleware } from "./auth-middleware-eNRVfU3l.mjs";
import { G as isNotFoundHttpError, W as isForbiddenHttpError } from "./services-middleware-nMulUXHZ.mjs";
import { j as fromParams } from "./short-uuid-fTZYJj_k.mjs";
import { $ as createServerFn } from "./server.mjs";
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
const screeningLayoutLoader_createServerFn_handler = createServerRpc({
  id: "ec8c4b7b0966af1bbe93faf723d4a1602ac35ba6bcaa41896162c40e24575da0",
  name: "screeningLayoutLoader",
  filename: "src/routes/_app/_builder/cases/$caseId/d/$decisionId/screenings/$screeningId.tsx"
}, (opts) => screeningLayoutLoader.__executeServer(opts));
const screeningLayoutLoader = createServerFn().middleware([authMiddleware]).validator((input) => input).handler(screeningLayoutLoader_createServerFn_handler, async function screeningLayoutLoader2({
  context,
  data
}) {
  const {
    user,
    entitlements,
    cases,
    dataModelRepository,
    inbox,
    screening: screeningRepository
  } = context.authInfo;
  const caseId = fromParams(data?.params ?? {}, "caseId");
  const decisionId = fromParams(data?.params ?? {}, "decisionId");
  const screeningId = fromParams(data?.params ?? {}, "screeningId");
  try {
    const caseDetail = await cases.getCase({
      caseId
    });
    const decision = caseDetail.decisions.find((d) => d.id === decisionId);
    const screenings = await screeningRepository.listScreenings({
      decisionId
    });
    const currentInbox = await inbox.getInbox(caseDetail.inboxId);
    const screening = screenings.find((s) => s.id === screeningId);
    if (!decision || !screening) {
      throw new Response(null, {
        status: 404,
        statusText: "Not Found"
      });
    }
    return {
      inbox: currentInbox,
      caseDetail,
      decision,
      user,
      entitlements,
      screening,
      dataModel: await dataModelRepository.getDataModel(),
      pivots: await dataModelRepository.listPivots({})
    };
  } catch (error) {
    if (isNotFoundHttpError(error) || isForbiddenHttpError(error)) {
      throw new Response(null, {
        status: 404,
        statusText: "Not Found"
      });
    } else {
      throw error;
    }
  }
});
export {
  screeningLayoutLoader_createServerFn_handler
};

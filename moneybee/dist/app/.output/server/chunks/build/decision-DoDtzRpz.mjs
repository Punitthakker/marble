import { c as createServerRpc } from "./createServerRpc-Dxre0F6X.mjs";
import { a as authMiddleware } from "./auth-middleware-eNRVfU3l.mjs";
import { o as object, n as number, z as record, s as string, t as treeifyError, j as fromParams } from "./short-uuid-fTZYJj_k.mjs";
import { $ as createServerFn, a5 as getRequest } from "./server.mjs";
import { n as number$1 } from "./coerce-UidCu_Sb.mjs";
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
const MAX_THRESHOLD = 1e4;
function getFormSchema(t) {
  return object({
    scoreReviewThreshold: number$1({
      message: t("scenarios:validation.decision.score_threshold_missing")
    }).max(MAX_THRESHOLD, {
      message: t("scenarios:validation.decision.score_threshold_max", {
        replace: {
          max: MAX_THRESHOLD
        }
      })
    }).min(-MAX_THRESHOLD, {
      message: t("scenarios:validation.decision.score_threshold_min", {
        replace: {
          min: -MAX_THRESHOLD
        }
      })
    }).int(),
    scoreBlockAndReviewThreshold: number$1({
      message: t("scenarios:validation.decision.score_threshold_missing")
    }).max(MAX_THRESHOLD, {
      message: t("scenarios:validation.decision.score_threshold_max", {
        replace: {
          max: MAX_THRESHOLD
        }
      })
    }).min(-MAX_THRESHOLD, {
      message: t("scenarios:validation.decision.score_threshold_min", {
        replace: {
          min: -MAX_THRESHOLD
        }
      })
    }).int(),
    scoreDeclineThreshold: number$1({
      message: t("scenarios:validation.decision.score_threshold_missing")
    }).max(MAX_THRESHOLD, {
      message: t("scenarios:validation.decision.score_threshold_max", {
        replace: {
          max: MAX_THRESHOLD
        }
      })
    }).min(-MAX_THRESHOLD, {
      message: t("scenarios:validation.decision.score_threshold_min", {
        replace: {
          min: -MAX_THRESHOLD
        }
      })
    }).int()
  }).superRefine(({
    scoreReviewThreshold,
    scoreBlockAndReviewThreshold,
    scoreDeclineThreshold
  }, ctx) => {
    if (scoreBlockAndReviewThreshold < scoreReviewThreshold) {
      ctx.issues.push({
        code: "custom",
        path: ["scoreBlockAndReviewThreshold"],
        message: t("scenarios:validation.decision.score_threshold_min", {
          replace: {
            min: scoreReviewThreshold
          }
        }),
        input: ""
      });
    }
    if (scoreDeclineThreshold < scoreBlockAndReviewThreshold) {
      ctx.issues.push({
        code: "custom",
        path: ["scoreDeclineThreshold"],
        message: t("scenarios:validation.decision.score_threshold_min", {
          replace: {
            min: scoreBlockAndReviewThreshold
          }
        }),
        input: ""
      });
    }
  });
}
const saveDecisionInputSchema = object({
  params: record(string(), string()),
  scoreReviewThreshold: number(),
  scoreBlockAndReviewThreshold: number(),
  scoreDeclineThreshold: number()
});
const saveDecisionAction_createServerFn_handler = createServerRpc({
  id: "bdda9c0781c975539c593039fa8c7b3413d8e3550b1457c51cbe91dd66dbbb66",
  name: "saveDecisionAction",
  filename: "src/routes/_app/_builder/detection/scenarios/$scenarioId/i/$iterationId/_edit-view/decision.tsx"
}, (opts) => saveDecisionAction.__executeServer(opts));
const saveDecisionAction = createServerFn({
  method: "POST"
}).middleware([authMiddleware]).validator((input) => saveDecisionInputSchema.parse(input)).handler(saveDecisionAction_createServerFn_handler, async function saveDecisionAction2({
  context,
  data
}) {
  const request = getRequest();
  const {
    i18nextService
  } = context.services;
  const {
    scenario
  } = context.authInfo;
  const t = await i18nextService.getFixedT(request, ["common", "scenarios"]);
  const {
    params,
    scoreReviewThreshold,
    scoreBlockAndReviewThreshold,
    scoreDeclineThreshold
  } = data;
  const result = getFormSchema(t).safeParse({
    scoreReviewThreshold,
    scoreBlockAndReviewThreshold,
    scoreDeclineThreshold
  });
  if (!result.success) {
    return {
      status: "error",
      errors: treeifyError(result.error)
    };
  }
  try {
    const iterationId = fromParams(params, "iterationId");
    await scenario.updateScenarioIteration(iterationId, result.data);
    return {
      status: "success",
      errors: []
    };
  } catch (_error) {
    return {
      status: "error",
      errors: []
    };
  }
});
export {
  saveDecisionAction_createServerFn_handler
};

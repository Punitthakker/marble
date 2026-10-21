import { c as createServerRpc } from "./createServerRpc-Dxre0F6X.mjs";
import { a as authMiddleware } from "./auth-middleware-eNRVfU3l.mjs";
import { G as isNotFoundHttpError, T as Temporal } from "./services-middleware-nMulUXHZ.mjs";
import { h as hasAnyEntitlement } from "./feature-access-BSdB6UiC.mjs";
import { n as normalizeTimestampForInstant } from "./datetime-insWKNBy.mjs";
import { t as tryCatch } from "./tryCatch-CFf1qt2b.mjs";
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
import "./formatDistanceStrict-DEEeAR-Y.mjs";
import "node:stream";
import "node:stream/web";
import "crypto";
import "async_hooks";
import "stream";
const DRY_RUN_STALE_LIMIT_IN_DAYS = 7;
function isValidDryRun(createdAt) {
  if (!createdAt) return false;
  const isValid = tryCatch(() => {
    const createdAtInstant = Temporal.Instant.from(normalizeTimestampForInstant(createdAt));
    const now = Temporal.Now.zonedDateTimeISO();
    const windowStart = now.subtract({
      days: DRY_RUN_STALE_LIMIT_IN_DAYS
    }).toInstant();
    const windowEnd = now.toInstant();
    return Temporal.Instant.compare(createdAtInstant, windowStart) >= 0 && Temporal.Instant.compare(createdAtInstant, windowEnd) <= 0;
  });
  return isValid.ok && isValid.value;
}
const scoringRulesetLoader_createServerFn_handler = createServerRpc({
  id: "18da7f26386e7ebb5a2edc840704787f306fb5982648e912fd5a034dc3e9f640",
  name: "scoringRulesetLoader",
  filename: "src/routes/_app/_builder/user-scoring/$recordType.$version.tsx"
}, (opts) => scoringRulesetLoader.__executeServer(opts));
const scoringRulesetLoader = createServerFn().middleware([authMiddleware]).validator((input) => input).handler(scoringRulesetLoader_createServerFn_handler, async function scoringRulesetLoader2({
  data,
  context
}) {
  const {
    userScoring,
    customListsRepository,
    entitlements
  } = context.authInfo;
  const recordType = data?.params?.["recordType"] ?? "";
  const version = data?.params?.["version"] ?? "";
  let ruleset = null;
  try {
    ruleset = await userScoring.getRulesetWithRules(recordType, version);
  } catch (err) {
    if (isNotFoundHttpError(err)) {
      throw redirect({
        to: "/user-scoring/overview"
      });
    }
    throw err;
  }
  const customLists = await customListsRepository.listCustomLists();
  const lastDryRun = await userScoring.getScoringDryRun(recordType);
  let preparationStatus = null;
  if (ruleset.status === "draft") {
    preparationStatus = await userScoring.getRulesetPreparationStatus(recordType);
  }
  return {
    ruleset,
    customLists,
    preparationStatus,
    lastDryRun: isValidDryRun(lastDryRun?.createdAt) ? lastDryRun : null,
    hasValidLicense: hasAnyEntitlement(entitlements)
  };
});
export {
  scoringRulesetLoader_createServerFn_handler
};

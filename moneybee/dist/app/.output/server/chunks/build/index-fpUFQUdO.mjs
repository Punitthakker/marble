import { c as createServerRpc } from "./createServerRpc-Dxre0F6X.mjs";
import { a as authMiddleware } from "./auth-middleware-eNRVfU3l.mjs";
import { G as isNotFoundHttpError, W as isForbiddenHttpError } from "./services-middleware-nMulUXHZ.mjs";
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
const testRunsLoader_createServerFn_handler = createServerRpc({
  id: "1f732cf3a73e1a42731c4409721b5978c2deb610e7593242c697a8b12223b92b",
  name: "testRunsLoader",
  filename: "src/routes/_app/_builder/detection/scenarios/$scenarioId/test-run/index.tsx"
}, (opts) => testRunsLoader.__executeServer(opts));
const testRunsLoader = createServerFn().middleware([authMiddleware]).validator((input) => input).handler(testRunsLoader_createServerFn_handler, async function testRunsLoader2({
  data,
  context
}) {
  const scenarioId = fromParams(data?.params ?? {}, "scenarioId");
  const {
    testRun
  } = context.authInfo;
  try {
    return {
      runs: await testRun.listTestRuns({
        scenarioId
      })
    };
  } catch (error) {
    if (isNotFoundHttpError(error) || isForbiddenHttpError(error)) {
      throw redirect({
        to: "/detection/scenarios"
      });
    } else {
      throw error;
    }
  }
});
export {
  testRunsLoader_createServerFn_handler
};

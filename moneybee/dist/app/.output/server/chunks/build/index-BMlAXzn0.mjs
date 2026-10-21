import { c as createServerRpc } from "./createServerRpc-Dxre0F6X.mjs";
import { a as authMiddleware } from "./auth-middleware-eNRVfU3l.mjs";
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
const testRunLoader_createServerFn_handler = createServerRpc({
  id: "3e3dd68bddc4fccfe463f50bf405f3ecaaa57570ec973292136a0b24e4393746",
  name: "testRunLoader",
  filename: "src/routes/_app/_builder/detection/scenarios/$scenarioId/test-run/$testRunId/index.tsx"
}, (opts) => testRunLoader.__executeServer(opts));
const testRunLoader = createServerFn().middleware([authMiddleware]).validator((input) => input).handler(testRunLoader_createServerFn_handler, async function testRunLoader2({
  data,
  context
}) {
  const testRunId = fromParams(data?.params ?? {}, "testRunId");
  const {
    testRun
  } = context.authInfo;
  const decisionsPromise = testRun.listDecisions({
    testRunId
  });
  const rulesPromise = testRun.listRuleExecutions({
    testRunId
  });
  const run = await testRun.getTestRun({
    testRunId
  });
  return {
    run,
    decisionsPromise,
    rulesPromise
  };
});
export {
  testRunLoader_createServerFn_handler
};

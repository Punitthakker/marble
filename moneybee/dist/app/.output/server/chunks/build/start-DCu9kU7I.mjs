import { a4 as createMiddleware, v as isRedirect, a5 as getRequest } from "./server.mjs";
import { b as setRequestServerFn, l as logger, r as runWithLogger, g as getRequestUserEmail, c as getRequestOrgId, d as getRequestServerFn } from "./logger.server-DV14d0iZ.mjs";
import { g as getServerEnv, f as fromUUIDtoSUUID, u as uuid } from "./short-uuid-fTZYJj_k.mjs";
import { r as runWithSecurityHeadersStore, a as getContentSecurityPolicy } from "./security-headers.server-BdP3HrPp.mjs";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
import "util";
import "crypto";
import "async_hooks";
import "stream";
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
function dedupeSerializationAdapters(deduped, serializationAdapters) {
  for (let i = 0, len = serializationAdapters.length; i < len; i++) {
    const current = serializationAdapters[i];
    if (!deduped.has(current)) {
      deduped.add(current);
      if (current.extends) dedupeSerializationAdapters(deduped, current.extends);
    }
  }
}
var createStart = (getOptions) => {
  return {
    getOptions: async () => {
      const options = await getOptions();
      if (options.serializationAdapters) {
        const deduped = /* @__PURE__ */ new Set();
        dedupeSerializationAdapters(deduped, options.serializationAdapters);
        options.serializationAdapters = Array.from(deduped);
      }
      return options;
    },
    createMiddleware
  };
};
const convertRedirectErrorToExceptionMiddleware = createMiddleware({ type: "function" }).server(
  async ({ next }) => {
    const result = await next();
    if ("error" in result && isRedirect(result.error)) {
      throw result.error;
    }
    return result;
  }
);
const serverFnLoggingMiddleware = createMiddleware({ type: "function" }).server(
  async ({ next, serverFnMeta }) => {
    setRequestServerFn(serverFnMeta.name);
    return next();
  }
);
const SAMPLE_INTERVAL_MS = 6e4;
const MAX_SERVER_FN_NAMES = 30;
const enabled = getServerEnv("MEMORY_OBSERVABILITY") === "true";
const processInstanceId = crypto.randomUUID();
const finishDisabledObservation = () => void 0;
let activeHandlers = 0;
let completedHandlers = 0;
let completedOtherRequests = 0;
let completedOverflowServerFns = 0;
let lastSampleAt = Date.now();
let timer;
const completedServerFns = /* @__PURE__ */ new Map();
function emitMemorySample() {
  const now = Date.now();
  const memory = process.memoryUsage();
  logger.info(
    {
      event: "server_memory_sample",
      runtime: process.versions["bun"] ? "bun" : "node",
      process_instance_id: processInstanceId,
      revision: process.env["K_REVISION"],
      app_version: process.env["APP_VERSION"],
      pid: process.pid,
      uptime_seconds: Math.round(process.uptime()),
      interval_seconds: Math.round((now - lastSampleAt) / 1e3),
      rss_bytes: memory.rss,
      heap_used_bytes: memory.heapUsed,
      heap_total_bytes: memory.heapTotal,
      external_bytes: memory.external,
      array_buffers_bytes: memory.arrayBuffers,
      active_handlers: activeHandlers,
      completed_handlers: completedHandlers,
      completed_other_requests: completedOtherRequests,
      completed_server_fns: Object.fromEntries(completedServerFns),
      completed_other_server_fns: completedOverflowServerFns
    },
    "Server memory sample"
  );
  completedHandlers = 0;
  completedOtherRequests = 0;
  completedOverflowServerFns = 0;
  completedServerFns.clear();
  lastSampleAt = now;
}
function observeRequestMemory() {
  if (!enabled) return finishDisabledObservation;
  if (!timer) {
    emitMemorySample();
    timer = setInterval(emitMemorySample, SAMPLE_INTERVAL_MS);
    timer.unref();
  }
  activeHandlers++;
  return (serverFn) => {
    activeHandlers--;
    completedHandlers++;
    if (!serverFn) {
      completedOtherRequests++;
    } else if (completedServerFns.has(serverFn)) {
      completedServerFns.set(serverFn, (completedServerFns.get(serverFn) ?? 0) + 1);
    } else if (completedServerFns.size < MAX_SERVER_FN_NAMES) {
      completedServerFns.set(serverFn, 1);
    } else {
      completedOverflowServerFns++;
    }
    if (Date.now() - lastSampleAt >= SAMPLE_INTERVAL_MS) emitMemorySample();
  };
}
const EXCLUDE_PREFIXES = ["/healthcheck"];
function resolveRequestId(request) {
  const cloudTrace = request.headers.get("x-cloud-trace-context");
  if (cloudTrace) {
    const requestId = cloudTrace.split("/")[0]?.trim();
    if (requestId) return requestId;
  }
  const requestIdHeader = request.headers.get("x-request-id");
  if (requestIdHeader) return requestIdHeader;
  const traceparent = request.headers.get("traceparent");
  if (traceparent) {
    const traceId = traceparent.split("-")[1]?.trim();
    if (traceId) return traceId;
  }
  return crypto.randomUUID();
}
const requestLoggingMiddleware = createMiddleware().server(async ({ next }) => {
  const request = getRequest();
  const url = new URL(request.url);
  const finishMemoryObservation = observeRequestMemory();
  if (EXCLUDE_PREFIXES.some((prefix) => url.pathname.startsWith(prefix))) {
    try {
      return await next();
    } finally {
      finishMemoryObservation();
    }
  }
  const requestId = resolveRequestId(request);
  const ip = request.headers.get("x-real-ip") ?? request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  const child = logger.child({ request_id: requestId });
  const start = performance.now();
  const fields = {
    method: request.method,
    path: url.pathname,
    user_agent: request.headers.get("user-agent") ?? void 0,
    ip
  };
  const message = `${request.method} ${url.pathname}`;
  return runWithLogger(child, async () => {
    try {
      const result = await next();
      child.info(
        {
          ...fields,
          serverfn: getRequestServerFn(),
          org_id: getRequestOrgId(),
          user: getRequestUserEmail(),
          status: result.response.status,
          latency: Math.round(performance.now() - start)
        },
        message
      );
      return result;
    } catch (err) {
      child.error(
        {
          ...fields,
          err,
          serverfn: getRequestServerFn(),
          org_id: getRequestOrgId(),
          user: getRequestUserEmail(),
          status: 500,
          latency: Math.round(performance.now() - start)
        },
        message
      );
      throw err;
    } finally {
      finishMemoryObservation(getRequestServerFn());
    }
  });
});
const securityHeadersMiddleware = createMiddleware().server(({ next }) => {
  const nonce = crypto.randomUUID().replace(/-/g, "");
  return runWithSecurityHeadersStore(nonce, async () => {
    const result = await next();
    const csp = getContentSecurityPolicy();
    if (csp && !result.response.headers.has("content-security-policy")) {
      result.response.headers.set("Content-Security-Policy", csp);
    }
    if (!result.response.headers.has("x-frame-options")) {
      result.response.headers.set("X-Frame-Options", "DENY");
    }
    return result;
  });
});
const isLongUUID = (value) => uuid().safeParse(value).success;
const SKIP_PREFIXES = ["/client-detail/", "/ressources/", "/oidc/"];
const protectsLastSegment = (pathname) => pathname.startsWith("/cases/s/") && (pathname.includes("/clients/") || pathname.includes("/links/"));
const shortUUIDRedirectMiddleware = createMiddleware().server(async ({ next }) => {
  const request = getRequest();
  if (request.method === "GET") {
    const url = new URL(request.url);
    if (!SKIP_PREFIXES.some((prefix) => url.pathname.startsWith(prefix))) {
      const segments = url.pathname.split("/");
      const protectedIndex = protectsLastSegment(url.pathname) ? segments.length - 1 : -1;
      let changed = false;
      const rewritten = segments.map((segment, index) => {
        if (index === protectedIndex || !isLongUUID(segment)) return segment;
        try {
          const short = fromUUIDtoSUUID(segment);
          changed = true;
          return short;
        } catch {
          return segment;
        }
      }).join("/");
      if (changed) {
        const safePathname = "/" + rewritten.replace(/^\/+/, "");
        return new Response(null, {
          status: 302,
          headers: { Location: safePathname + url.search + url.hash }
        });
      }
    }
  }
  return next();
});
const startInstance = createStart(() => {
  return {
    requestMiddleware: [requestLoggingMiddleware, shortUUIDRedirectMiddleware, securityHeadersMiddleware],
    functionMiddleware: [convertRedirectErrorToExceptionMiddleware, serverFnLoggingMiddleware]
  };
});
export {
  startInstance
};

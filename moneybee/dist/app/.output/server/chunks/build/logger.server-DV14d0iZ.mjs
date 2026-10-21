import { AsyncLocalStorage } from "node:async_hooks";
import { g as getServerEnv } from "./short-uuid-fTZYJj_k.mjs";
import { a1 as getDefaultExportFromCjs, ad as commonjsGlobal } from "./server.mjs";
import os from "node:os";
import require$$0$4 from "node:events";
import diagnosticsChannel from "node:diagnostics_channel";
import fs from "fs";
import require$$1 from "events";
import require$$0$1 from "util";
import path from "path";
import require$$5 from "assert";
import require$$2 from "worker_threads";
import require$$0$2 from "module";
import require$$0$3 from "node:fs";
import require$$1$1 from "node:path";
import require$$4$1 from "node:url";
import require$$4 from "url";
import require$$7 from "buffer";
var pino$1 = { exports: {} };
var errHelpers;
var hasRequiredErrHelpers;
function requireErrHelpers() {
  if (hasRequiredErrHelpers) return errHelpers;
  hasRequiredErrHelpers = 1;
  const isErrorLike = (err2) => {
    return err2 && typeof err2.message === "string";
  };
  const getErrorCause = (err2) => {
    if (!err2) return;
    const cause = err2.cause;
    if (typeof cause === "function") {
      const causeResult = err2.cause();
      return isErrorLike(causeResult) ? causeResult : void 0;
    } else {
      return isErrorLike(cause) ? cause : void 0;
    }
  };
  const _stackWithCauses = (err2, seen) => {
    if (!isErrorLike(err2)) return "";
    const stack = err2.stack || "";
    if (seen.has(err2)) {
      return stack + "\ncauses have become circular...";
    }
    const cause = getErrorCause(err2);
    if (cause) {
      seen.add(err2);
      return stack + "\ncaused by: " + _stackWithCauses(cause, seen);
    } else {
      return stack;
    }
  };
  const stackWithCauses = (err2) => _stackWithCauses(err2, /* @__PURE__ */ new Set());
  const _messageWithCauses = (err2, seen, skip) => {
    if (!isErrorLike(err2)) return "";
    const message = skip ? "" : err2.message || "";
    if (seen.has(err2)) {
      return message + ": ...";
    }
    const cause = getErrorCause(err2);
    if (cause) {
      seen.add(err2);
      const skipIfVErrorStyleCause = typeof err2.cause === "function";
      return message + (skipIfVErrorStyleCause ? "" : ": ") + _messageWithCauses(cause, seen, skipIfVErrorStyleCause);
    } else {
      return message;
    }
  };
  const messageWithCauses = (err2) => _messageWithCauses(err2, /* @__PURE__ */ new Set());
  errHelpers = {
    isErrorLike,
    getErrorCause,
    stackWithCauses,
    messageWithCauses
  };
  return errHelpers;
}
var errProto;
var hasRequiredErrProto;
function requireErrProto() {
  if (hasRequiredErrProto) return errProto;
  hasRequiredErrProto = 1;
  const seen = /* @__PURE__ */ Symbol("circular-ref-tag");
  const rawSymbol = /* @__PURE__ */ Symbol("pino-raw-err-ref");
  const pinoErrProto = Object.create({}, {
    type: {
      enumerable: true,
      writable: true,
      value: void 0
    },
    message: {
      enumerable: true,
      writable: true,
      value: void 0
    },
    stack: {
      enumerable: true,
      writable: true,
      value: void 0
    },
    aggregateErrors: {
      enumerable: true,
      writable: true,
      value: void 0
    },
    raw: {
      enumerable: false,
      get: function() {
        return this[rawSymbol];
      },
      set: function(val) {
        this[rawSymbol] = val;
      }
    }
  });
  Object.defineProperty(pinoErrProto, rawSymbol, {
    writable: true,
    value: {}
  });
  errProto = {
    pinoErrProto,
    pinoErrorSymbols: {
      seen,
      rawSymbol
    }
  };
  return errProto;
}
var err;
var hasRequiredErr;
function requireErr() {
  if (hasRequiredErr) return err;
  hasRequiredErr = 1;
  err = errSerializer;
  const { messageWithCauses, stackWithCauses, isErrorLike } = requireErrHelpers();
  const { pinoErrProto, pinoErrorSymbols } = requireErrProto();
  const { seen } = pinoErrorSymbols;
  const { toString } = Object.prototype;
  function errSerializer(err2) {
    if (!isErrorLike(err2)) {
      return err2;
    }
    err2[seen] = void 0;
    const _err = Object.create(pinoErrProto);
    _err.type = toString.call(err2.constructor) === "[object Function]" ? err2.constructor.name : err2.name;
    _err.message = messageWithCauses(err2);
    _err.stack = stackWithCauses(err2);
    if (Array.isArray(err2.errors)) {
      _err.aggregateErrors = err2.errors.map((err3) => errSerializer(err3));
    }
    for (const key in err2) {
      if (_err[key] === void 0) {
        const val = err2[key];
        if (isErrorLike(val)) {
          if (key !== "cause" && !Object.prototype.hasOwnProperty.call(val, seen)) {
            _err[key] = errSerializer(val);
          }
        } else {
          _err[key] = val;
        }
      }
    }
    delete err2[seen];
    _err.raw = err2;
    return _err;
  }
  return err;
}
var errWithCause;
var hasRequiredErrWithCause;
function requireErrWithCause() {
  if (hasRequiredErrWithCause) return errWithCause;
  hasRequiredErrWithCause = 1;
  errWithCause = errWithCauseSerializer;
  const { isErrorLike } = requireErrHelpers();
  const { pinoErrProto, pinoErrorSymbols } = requireErrProto();
  const { seen } = pinoErrorSymbols;
  const { toString } = Object.prototype;
  function errWithCauseSerializer(err2) {
    if (!isErrorLike(err2)) {
      return err2;
    }
    err2[seen] = void 0;
    const _err = Object.create(pinoErrProto);
    _err.type = toString.call(err2.constructor) === "[object Function]" ? err2.constructor.name : err2.name;
    _err.message = err2.message;
    _err.stack = err2.stack;
    if (Array.isArray(err2.errors)) {
      _err.aggregateErrors = err2.errors.map((err3) => errWithCauseSerializer(err3));
    }
    if (isErrorLike(err2.cause) && !Object.prototype.hasOwnProperty.call(err2.cause, seen)) {
      _err.cause = errWithCauseSerializer(err2.cause);
    }
    for (const key in err2) {
      if (_err[key] === void 0) {
        const val = err2[key];
        if (isErrorLike(val)) {
          if (!Object.prototype.hasOwnProperty.call(val, seen)) {
            _err[key] = errWithCauseSerializer(val);
          }
        } else {
          _err[key] = val;
        }
      }
    }
    delete err2[seen];
    _err.raw = err2;
    return _err;
  }
  return errWithCause;
}
var req;
var hasRequiredReq;
function requireReq() {
  if (hasRequiredReq) return req;
  hasRequiredReq = 1;
  req = {
    mapHttpRequest,
    reqSerializer
  };
  const rawSymbol = /* @__PURE__ */ Symbol("pino-raw-req-ref");
  const pinoReqProto = Object.create({}, {
    id: {
      enumerable: true,
      writable: true,
      value: ""
    },
    method: {
      enumerable: true,
      writable: true,
      value: ""
    },
    url: {
      enumerable: true,
      writable: true,
      value: ""
    },
    query: {
      enumerable: true,
      writable: true,
      value: ""
    },
    params: {
      enumerable: true,
      writable: true,
      value: ""
    },
    headers: {
      enumerable: true,
      writable: true,
      value: {}
    },
    remoteAddress: {
      enumerable: true,
      writable: true,
      value: ""
    },
    remotePort: {
      enumerable: true,
      writable: true,
      value: ""
    },
    raw: {
      enumerable: false,
      get: function() {
        return this[rawSymbol];
      },
      set: function(val) {
        this[rawSymbol] = val;
      }
    }
  });
  Object.defineProperty(pinoReqProto, rawSymbol, {
    writable: true,
    value: {}
  });
  function reqSerializer(req2) {
    const connection = req2.info || req2.socket;
    const _req = Object.create(pinoReqProto);
    _req.id = typeof req2.id === "function" ? req2.id() : req2.id || (req2.info ? req2.info.id : void 0);
    _req.method = req2.method;
    if (req2.originalUrl) {
      _req.url = req2.originalUrl;
    } else {
      const path2 = req2.path;
      _req.url = typeof path2 === "string" ? path2 : req2.url ? req2.url.path || req2.url : void 0;
    }
    if (req2.query) {
      _req.query = req2.query;
    }
    if (req2.params) {
      _req.params = req2.params;
    }
    _req.headers = req2.headers;
    _req.remoteAddress = connection && connection.remoteAddress;
    _req.remotePort = connection && connection.remotePort;
    _req.raw = req2.raw || req2;
    return _req;
  }
  function mapHttpRequest(req2) {
    return {
      req: reqSerializer(req2)
    };
  }
  return req;
}
var res;
var hasRequiredRes;
function requireRes() {
  if (hasRequiredRes) return res;
  hasRequiredRes = 1;
  res = {
    mapHttpResponse,
    resSerializer
  };
  const rawSymbol = /* @__PURE__ */ Symbol("pino-raw-res-ref");
  const pinoResProto = Object.create({}, {
    statusCode: {
      enumerable: true,
      writable: true,
      value: 0
    },
    headers: {
      enumerable: true,
      writable: true,
      value: ""
    },
    raw: {
      enumerable: false,
      get: function() {
        return this[rawSymbol];
      },
      set: function(val) {
        this[rawSymbol] = val;
      }
    }
  });
  Object.defineProperty(pinoResProto, rawSymbol, {
    writable: true,
    value: {}
  });
  function resSerializer(res2) {
    const _res = Object.create(pinoResProto);
    _res.statusCode = res2.headersSent ? res2.statusCode : null;
    _res.headers = res2.getHeaders ? res2.getHeaders() : res2._headers;
    _res.raw = res2;
    return _res;
  }
  function mapHttpResponse(res2) {
    return {
      res: resSerializer(res2)
    };
  }
  return res;
}
var pinoStdSerializers;
var hasRequiredPinoStdSerializers;
function requirePinoStdSerializers() {
  if (hasRequiredPinoStdSerializers) return pinoStdSerializers;
  hasRequiredPinoStdSerializers = 1;
  const errSerializer = requireErr();
  const errWithCauseSerializer = requireErrWithCause();
  const reqSerializers = requireReq();
  const resSerializers = requireRes();
  pinoStdSerializers = {
    err: errSerializer,
    errWithCause: errWithCauseSerializer,
    mapHttpRequest: reqSerializers.mapHttpRequest,
    mapHttpResponse: resSerializers.mapHttpResponse,
    req: reqSerializers.reqSerializer,
    res: resSerializers.resSerializer,
    wrapErrorSerializer: function wrapErrorSerializer(customSerializer) {
      if (customSerializer === errSerializer) return customSerializer;
      return function wrapErrSerializer(err2) {
        return customSerializer(errSerializer(err2));
      };
    },
    wrapRequestSerializer: function wrapRequestSerializer(customSerializer) {
      if (customSerializer === reqSerializers.reqSerializer) return customSerializer;
      return function wrappedReqSerializer(req2) {
        return customSerializer(reqSerializers.reqSerializer(req2));
      };
    },
    wrapResponseSerializer: function wrapResponseSerializer(customSerializer) {
      if (customSerializer === resSerializers.resSerializer) return customSerializer;
      return function wrappedResSerializer(res2) {
        return customSerializer(resSerializers.resSerializer(res2));
      };
    }
  };
  return pinoStdSerializers;
}
var caller;
var hasRequiredCaller;
function requireCaller() {
  if (hasRequiredCaller) return caller;
  hasRequiredCaller = 1;
  function noOpPrepareStackTrace(_, stack) {
    return stack;
  }
  caller = function getCallers() {
    const originalPrepare = Error.prepareStackTrace;
    Error.prepareStackTrace = noOpPrepareStackTrace;
    const stack = new Error().stack;
    Error.prepareStackTrace = originalPrepare;
    if (!Array.isArray(stack)) {
      return void 0;
    }
    const entries = stack.slice(2);
    const fileNames = [];
    for (const entry of entries) {
      if (!entry) {
        continue;
      }
      fileNames.push(entry.getFileName());
    }
    return fileNames;
  };
  return caller;
}
var redact;
var hasRequiredRedact;
function requireRedact() {
  if (hasRequiredRedact) return redact;
  hasRequiredRedact = 1;
  function deepClone(obj) {
    if (obj === null || typeof obj !== "object") {
      return obj;
    }
    if (obj instanceof Date) {
      return new Date(obj.getTime());
    }
    if (obj instanceof Array) {
      const cloned = [];
      for (let i = 0; i < obj.length; i++) {
        cloned[i] = deepClone(obj[i]);
      }
      return cloned;
    }
    if (typeof obj === "object") {
      const cloned = Object.create(Object.getPrototypeOf(obj));
      for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          cloned[key] = deepClone(obj[key]);
        }
      }
      return cloned;
    }
    return obj;
  }
  function parsePath(path2) {
    const parts = [];
    let current = "";
    let inBrackets = false;
    let inQuotes = false;
    let quoteChar = "";
    for (let i = 0; i < path2.length; i++) {
      const char = path2[i];
      if (!inBrackets && char === ".") {
        if (current) {
          parts.push(current);
          current = "";
        }
      } else if (char === "[") {
        if (current) {
          parts.push(current);
          current = "";
        }
        inBrackets = true;
      } else if (char === "]" && inBrackets) {
        parts.push(current);
        current = "";
        inBrackets = false;
        inQuotes = false;
      } else if ((char === '"' || char === "'") && inBrackets) {
        if (!inQuotes) {
          inQuotes = true;
          quoteChar = char;
        } else if (char === quoteChar) {
          inQuotes = false;
          quoteChar = "";
        } else {
          current += char;
        }
      } else {
        current += char;
      }
    }
    if (current) {
      parts.push(current);
    }
    return parts;
  }
  function setValue(obj, parts, value) {
    let current = obj;
    for (let i = 0; i < parts.length - 1; i++) {
      const key = parts[i];
      if (typeof current !== "object" || current === null || !(key in current)) {
        return false;
      }
      if (typeof current[key] !== "object" || current[key] === null) {
        return false;
      }
      current = current[key];
    }
    const lastKey = parts[parts.length - 1];
    if (lastKey === "*") {
      if (Array.isArray(current)) {
        for (let i = 0; i < current.length; i++) {
          current[i] = value;
        }
      } else if (typeof current === "object" && current !== null) {
        for (const key in current) {
          if (Object.prototype.hasOwnProperty.call(current, key)) {
            current[key] = value;
          }
        }
      }
    } else {
      if (typeof current === "object" && current !== null && lastKey in current && Object.prototype.hasOwnProperty.call(current, lastKey)) {
        current[lastKey] = value;
      }
    }
    return true;
  }
  function removeKey(obj, parts) {
    let current = obj;
    for (let i = 0; i < parts.length - 1; i++) {
      const key = parts[i];
      if (typeof current !== "object" || current === null || !(key in current)) {
        return false;
      }
      if (typeof current[key] !== "object" || current[key] === null) {
        return false;
      }
      current = current[key];
    }
    const lastKey = parts[parts.length - 1];
    if (lastKey === "*") {
      if (Array.isArray(current)) {
        for (let i = 0; i < current.length; i++) {
          current[i] = void 0;
        }
      } else if (typeof current === "object" && current !== null) {
        for (const key in current) {
          if (Object.prototype.hasOwnProperty.call(current, key)) {
            delete current[key];
          }
        }
      }
    } else {
      if (typeof current === "object" && current !== null && lastKey in current && Object.prototype.hasOwnProperty.call(current, lastKey)) {
        delete current[lastKey];
      }
    }
    return true;
  }
  const PATH_NOT_FOUND = /* @__PURE__ */ Symbol("PATH_NOT_FOUND");
  function getValueIfExists(obj, parts) {
    let current = obj;
    for (const part of parts) {
      if (current === null || current === void 0) {
        return PATH_NOT_FOUND;
      }
      if (typeof current !== "object" || current === null) {
        return PATH_NOT_FOUND;
      }
      if (!(part in current)) {
        return PATH_NOT_FOUND;
      }
      current = current[part];
    }
    return current;
  }
  function getValue(obj, parts) {
    let current = obj;
    for (const part of parts) {
      if (current === null || current === void 0) {
        return void 0;
      }
      if (typeof current !== "object" || current === null) {
        return void 0;
      }
      current = current[part];
    }
    return current;
  }
  function redactPaths(obj, paths, censor, remove = false) {
    for (const path2 of paths) {
      const parts = parsePath(path2);
      if (parts.includes("*")) {
        redactWildcardPath(obj, parts, censor, path2, remove);
      } else {
        if (remove) {
          removeKey(obj, parts);
        } else {
          const value = getValueIfExists(obj, parts);
          if (value === PATH_NOT_FOUND) {
            continue;
          }
          const actualCensor = typeof censor === "function" ? censor(value, parts) : censor;
          setValue(obj, parts, actualCensor);
        }
      }
    }
  }
  function redactWildcardPath(obj, parts, censor, originalPath, remove = false) {
    const wildcardIndex = parts.indexOf("*");
    if (wildcardIndex === parts.length - 1) {
      const parentParts = parts.slice(0, -1);
      let current = obj;
      for (const part of parentParts) {
        if (current === null || current === void 0) return;
        if (typeof current !== "object" || current === null) return;
        current = current[part];
      }
      if (Array.isArray(current)) {
        if (remove) {
          for (let i = 0; i < current.length; i++) {
            current[i] = void 0;
          }
        } else {
          for (let i = 0; i < current.length; i++) {
            const indexPath = [...parentParts, i.toString()];
            const actualCensor = typeof censor === "function" ? censor(current[i], indexPath) : censor;
            current[i] = actualCensor;
          }
        }
      } else if (typeof current === "object" && current !== null) {
        if (remove) {
          const keysToDelete = [];
          for (const key in current) {
            if (Object.prototype.hasOwnProperty.call(current, key)) {
              keysToDelete.push(key);
            }
          }
          for (const key of keysToDelete) {
            delete current[key];
          }
        } else {
          for (const key in current) {
            const keyPath = [...parentParts, key];
            const actualCensor = typeof censor === "function" ? censor(current[key], keyPath) : censor;
            current[key] = actualCensor;
          }
        }
      }
    } else {
      redactIntermediateWildcard(obj, parts, censor, wildcardIndex, originalPath, remove);
    }
  }
  function redactIntermediateWildcard(obj, parts, censor, wildcardIndex, originalPath, remove = false) {
    const beforeWildcard = parts.slice(0, wildcardIndex);
    const afterWildcard = parts.slice(wildcardIndex + 1);
    const pathArray = [];
    function traverse(current, pathLength) {
      if (pathLength === beforeWildcard.length) {
        if (Array.isArray(current)) {
          for (let i = 0; i < current.length; i++) {
            pathArray[pathLength] = i.toString();
            traverse(current[i], pathLength + 1);
          }
        } else if (typeof current === "object" && current !== null) {
          for (const key in current) {
            pathArray[pathLength] = key;
            traverse(current[key], pathLength + 1);
          }
        }
      } else if (pathLength < beforeWildcard.length) {
        const nextKey = beforeWildcard[pathLength];
        if (current && typeof current === "object" && current !== null && nextKey in current) {
          pathArray[pathLength] = nextKey;
          traverse(current[nextKey], pathLength + 1);
        }
      } else {
        if (afterWildcard.includes("*")) {
          const wrappedCensor = typeof censor === "function" ? (value, path2) => {
            const fullPath = [...pathArray.slice(0, pathLength), ...path2];
            return censor(value, fullPath);
          } : censor;
          redactWildcardPath(current, afterWildcard, wrappedCensor, originalPath, remove);
        } else {
          if (remove) {
            removeKey(current, afterWildcard);
          } else {
            const actualCensor = typeof censor === "function" ? censor(getValue(current, afterWildcard), [...pathArray.slice(0, pathLength), ...afterWildcard]) : censor;
            setValue(current, afterWildcard, actualCensor);
          }
        }
      }
    }
    if (beforeWildcard.length === 0) {
      traverse(obj, 0);
    } else {
      let current = obj;
      for (let i = 0; i < beforeWildcard.length; i++) {
        const part = beforeWildcard[i];
        if (current === null || current === void 0) return;
        if (typeof current !== "object" || current === null) return;
        current = current[part];
        pathArray[i] = part;
      }
      if (current !== null && current !== void 0) {
        traverse(current, beforeWildcard.length);
      }
    }
  }
  function buildPathStructure(pathsToClone) {
    if (pathsToClone.length === 0) {
      return null;
    }
    const pathStructure = /* @__PURE__ */ new Map();
    for (const path2 of pathsToClone) {
      const parts = parsePath(path2);
      let current = pathStructure;
      for (let i = 0; i < parts.length; i++) {
        const part = parts[i];
        if (!current.has(part)) {
          current.set(part, /* @__PURE__ */ new Map());
        }
        current = current.get(part);
      }
    }
    return pathStructure;
  }
  function selectiveClone(obj, pathStructure) {
    if (!pathStructure) {
      return obj;
    }
    function cloneSelectively(source, pathMap, depth = 0) {
      if (!pathMap || pathMap.size === 0) {
        return source;
      }
      if (source === null || typeof source !== "object") {
        return source;
      }
      if (source instanceof Date) {
        return new Date(source.getTime());
      }
      if (Array.isArray(source)) {
        const cloned2 = [];
        for (let i = 0; i < source.length; i++) {
          const indexStr = i.toString();
          if (pathMap.has(indexStr) || pathMap.has("*")) {
            cloned2[i] = cloneSelectively(source[i], pathMap.get(indexStr) || pathMap.get("*"));
          } else {
            cloned2[i] = source[i];
          }
        }
        return cloned2;
      }
      const cloned = Object.create(Object.getPrototypeOf(source));
      for (const key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          if (pathMap.has(key) || pathMap.has("*")) {
            cloned[key] = cloneSelectively(source[key], pathMap.get(key) || pathMap.get("*"));
          } else {
            cloned[key] = source[key];
          }
        }
      }
      return cloned;
    }
    return cloneSelectively(obj, pathStructure);
  }
  function validatePath(path2) {
    if (typeof path2 !== "string") {
      throw new Error("Paths must be (non-empty) strings");
    }
    if (path2 === "") {
      throw new Error("Invalid redaction path ()");
    }
    if (path2.includes("..")) {
      throw new Error(`Invalid redaction path (${path2})`);
    }
    if (path2.includes(",")) {
      throw new Error(`Invalid redaction path (${path2})`);
    }
    let bracketCount = 0;
    let inQuotes = false;
    let quoteChar = "";
    for (let i = 0; i < path2.length; i++) {
      const char = path2[i];
      if ((char === '"' || char === "'") && bracketCount > 0) {
        if (!inQuotes) {
          inQuotes = true;
          quoteChar = char;
        } else if (char === quoteChar) {
          inQuotes = false;
          quoteChar = "";
        }
      } else if (char === "[" && !inQuotes) {
        bracketCount++;
      } else if (char === "]" && !inQuotes) {
        bracketCount--;
        if (bracketCount < 0) {
          throw new Error(`Invalid redaction path (${path2})`);
        }
      }
    }
    if (bracketCount !== 0) {
      throw new Error(`Invalid redaction path (${path2})`);
    }
  }
  function validatePaths(paths) {
    if (!Array.isArray(paths)) {
      throw new TypeError("paths must be an array");
    }
    for (const path2 of paths) {
      validatePath(path2);
    }
  }
  function slowRedact(options = {}) {
    const {
      paths = [],
      censor = "[REDACTED]",
      serialize = JSON.stringify,
      strict = true,
      remove = false
    } = options;
    validatePaths(paths);
    const pathStructure = buildPathStructure(paths);
    return function redact2(obj) {
      if (strict && (obj === null || typeof obj !== "object")) {
        if (obj === null || obj === void 0) {
          return serialize ? serialize(obj) : obj;
        }
        if (typeof obj !== "object") {
          return serialize ? serialize(obj) : obj;
        }
      }
      const cloned = selectiveClone(obj, pathStructure);
      const original = obj;
      let actualCensor = censor;
      if (typeof censor === "function") {
        actualCensor = censor;
      }
      redactPaths(cloned, paths, actualCensor, remove);
      if (serialize === false) {
        cloned.restore = function() {
          return deepClone(original);
        };
        return cloned;
      }
      if (typeof serialize === "function") {
        return serialize(cloned);
      }
      return JSON.stringify(cloned);
    };
  }
  redact = slowRedact;
  return redact;
}
var symbols;
var hasRequiredSymbols;
function requireSymbols() {
  if (hasRequiredSymbols) return symbols;
  hasRequiredSymbols = 1;
  const setLevelSym = /* @__PURE__ */ Symbol("pino.setLevel");
  const getLevelSym = /* @__PURE__ */ Symbol("pino.getLevel");
  const levelValSym = /* @__PURE__ */ Symbol("pino.levelVal");
  const levelCompSym = /* @__PURE__ */ Symbol("pino.levelComp");
  const useLevelLabelsSym = /* @__PURE__ */ Symbol("pino.useLevelLabels");
  const useOnlyCustomLevelsSym = /* @__PURE__ */ Symbol("pino.useOnlyCustomLevels");
  const mixinSym = /* @__PURE__ */ Symbol("pino.mixin");
  const lsCacheSym = /* @__PURE__ */ Symbol("pino.lsCache");
  const chindingsSym = /* @__PURE__ */ Symbol("pino.chindings");
  const asJsonSym = /* @__PURE__ */ Symbol("pino.asJson");
  const writeSym = /* @__PURE__ */ Symbol("pino.write");
  const redactFmtSym = /* @__PURE__ */ Symbol("pino.redactFmt");
  const timeSym = /* @__PURE__ */ Symbol("pino.time");
  const timeSliceIndexSym = /* @__PURE__ */ Symbol("pino.timeSliceIndex");
  const streamSym = /* @__PURE__ */ Symbol("pino.stream");
  const stringifySym = /* @__PURE__ */ Symbol("pino.stringify");
  const stringifySafeSym = /* @__PURE__ */ Symbol("pino.stringifySafe");
  const stringifiersSym = /* @__PURE__ */ Symbol("pino.stringifiers");
  const endSym = /* @__PURE__ */ Symbol("pino.end");
  const formatOptsSym = /* @__PURE__ */ Symbol("pino.formatOpts");
  const messageKeySym = /* @__PURE__ */ Symbol("pino.messageKey");
  const errorKeySym = /* @__PURE__ */ Symbol("pino.errorKey");
  const nestedKeySym = /* @__PURE__ */ Symbol("pino.nestedKey");
  const nestedKeyStrSym = /* @__PURE__ */ Symbol("pino.nestedKeyStr");
  const mixinMergeStrategySym = /* @__PURE__ */ Symbol("pino.mixinMergeStrategy");
  const msgPrefixSym = /* @__PURE__ */ Symbol("pino.msgPrefix");
  const wildcardFirstSym = /* @__PURE__ */ Symbol("pino.wildcardFirst");
  const serializersSym = /* @__PURE__ */ Symbol.for("pino.serializers");
  const formattersSym = /* @__PURE__ */ Symbol.for("pino.formatters");
  const hooksSym = /* @__PURE__ */ Symbol.for("pino.hooks");
  const needsMetadataGsym = /* @__PURE__ */ Symbol.for("pino.metadata");
  symbols = {
    setLevelSym,
    getLevelSym,
    levelValSym,
    levelCompSym,
    useLevelLabelsSym,
    mixinSym,
    lsCacheSym,
    chindingsSym,
    asJsonSym,
    writeSym,
    serializersSym,
    redactFmtSym,
    timeSym,
    timeSliceIndexSym,
    streamSym,
    stringifySym,
    stringifySafeSym,
    stringifiersSym,
    endSym,
    formatOptsSym,
    messageKeySym,
    errorKeySym,
    nestedKeySym,
    wildcardFirstSym,
    needsMetadataGsym,
    useOnlyCustomLevelsSym,
    formattersSym,
    hooksSym,
    nestedKeyStrSym,
    mixinMergeStrategySym,
    msgPrefixSym
  };
  return symbols;
}
var redaction_1;
var hasRequiredRedaction;
function requireRedaction() {
  if (hasRequiredRedaction) return redaction_1;
  hasRequiredRedaction = 1;
  const Redact = requireRedact();
  const { redactFmtSym, wildcardFirstSym } = requireSymbols();
  const rx = /[^.[\]]+|\[([^[\]]*?)\]/g;
  const CENSOR = "[Redacted]";
  const strict = false;
  function redaction(opts, serialize) {
    const { paths, censor, remove } = handle(opts);
    const shape = paths.reduce((o, str) => {
      rx.lastIndex = 0;
      const first = rx.exec(str);
      const next = rx.exec(str);
      let ns = first[1] !== void 0 ? first[1].replace(/^(?:"|'|`)(.*)(?:"|'|`)$/, "$1") : first[0];
      if (ns === "*") {
        ns = wildcardFirstSym;
      }
      if (next === null) {
        o[ns] = null;
        return o;
      }
      if (o[ns] === null) {
        return o;
      }
      const { index } = next;
      const nextPath = `${str.substr(index, str.length - 1)}`;
      o[ns] = o[ns] || [];
      if (ns !== wildcardFirstSym && o[ns].length === 0) {
        o[ns].push(...o[wildcardFirstSym] || []);
      }
      if (ns === wildcardFirstSym) {
        Object.keys(o).forEach(function(k) {
          if (o[k]) {
            o[k].push(nextPath);
          }
        });
      }
      o[ns].push(nextPath);
      return o;
    }, {});
    const result = {
      [redactFmtSym]: Redact({ paths, censor, serialize, strict, remove })
    };
    const topCensor = (...args) => {
      return typeof censor === "function" ? serialize(censor(...args)) : serialize(censor);
    };
    return [...Object.keys(shape), ...Object.getOwnPropertySymbols(shape)].reduce((o, k) => {
      if (shape[k] === null) {
        o[k] = (value) => topCensor(value, [k]);
      } else {
        const wrappedCensor = typeof censor === "function" ? (value, path2) => {
          return censor(value, [k, ...path2]);
        } : censor;
        o[k] = Redact({
          paths: shape[k],
          censor: wrappedCensor,
          serialize,
          strict,
          remove
        });
      }
      return o;
    }, result);
  }
  function handle(opts) {
    if (Array.isArray(opts)) {
      opts = { paths: opts, censor: CENSOR };
      return opts;
    }
    let { paths, censor = CENSOR, remove } = opts;
    if (Array.isArray(paths) === false) {
      throw Error("pino – redact must contain an array of strings");
    }
    if (remove === true) censor = void 0;
    return { paths, censor, remove };
  }
  redaction_1 = redaction;
  return redaction_1;
}
var time;
var hasRequiredTime;
function requireTime() {
  if (hasRequiredTime) return time;
  hasRequiredTime = 1;
  const nullTime = () => "";
  const epochTime = () => `,"time":${Date.now()}`;
  const unixTime = () => `,"time":${Math.round(Date.now() / 1e3)}`;
  const isoTime = () => `,"time":"${new Date(Date.now()).toISOString()}"`;
  const NS_PER_MS = 1000000n;
  const NS_PER_SEC = 1000000000n;
  const startWallTimeNs = BigInt(Date.now()) * NS_PER_MS;
  const startHrTime = process.hrtime.bigint();
  const isoTimeNano = () => {
    const elapsedNs = process.hrtime.bigint() - startHrTime;
    const currentTimeNs = startWallTimeNs + elapsedNs;
    const secondsSinceEpoch = currentTimeNs / NS_PER_SEC;
    const nanosWithinSecond = currentTimeNs % NS_PER_SEC;
    const msSinceEpoch = Number(secondsSinceEpoch * 1000n + nanosWithinSecond / 1000000n);
    const date = new Date(msSinceEpoch);
    const year = date.getUTCFullYear();
    const month = (date.getUTCMonth() + 1).toString().padStart(2, "0");
    const day = date.getUTCDate().toString().padStart(2, "0");
    const hours = date.getUTCHours().toString().padStart(2, "0");
    const minutes = date.getUTCMinutes().toString().padStart(2, "0");
    const seconds = date.getUTCSeconds().toString().padStart(2, "0");
    return `,"time":"${year}-${month}-${day}T${hours}:${minutes}:${seconds}.${nanosWithinSecond.toString().padStart(9, "0")}Z"`;
  };
  time = { nullTime, epochTime, unixTime, isoTime, isoTimeNano };
  return time;
}
var quickFormatUnescaped;
var hasRequiredQuickFormatUnescaped;
function requireQuickFormatUnescaped() {
  if (hasRequiredQuickFormatUnescaped) return quickFormatUnescaped;
  hasRequiredQuickFormatUnescaped = 1;
  function tryStringify(o) {
    try {
      return JSON.stringify(o);
    } catch (e) {
      return '"[Circular]"';
    }
  }
  quickFormatUnescaped = format;
  function format(f, args, opts) {
    var ss = opts && opts.stringify || tryStringify;
    var offset = 1;
    if (typeof f === "object" && f !== null) {
      var len = args.length + offset;
      if (len === 1) return f;
      var objects = new Array(len);
      objects[0] = ss(f);
      for (var index = 1; index < len; index++) {
        objects[index] = ss(args[index]);
      }
      return objects.join(" ");
    }
    if (typeof f !== "string") {
      return f;
    }
    var argLen = args.length;
    if (argLen === 0) return f;
    var str = "";
    var a = 1 - offset;
    var lastPos = -1;
    var flen = f && f.length || 0;
    for (var i = 0; i < flen; ) {
      if (f.charCodeAt(i) === 37 && i + 1 < flen) {
        lastPos = lastPos > -1 ? lastPos : 0;
        switch (f.charCodeAt(i + 1)) {
          case 100:
          // 'd'
          case 102:
            if (a >= argLen)
              break;
            if (args[a] == null) break;
            if (lastPos < i)
              str += f.slice(lastPos, i);
            str += Number(args[a]);
            lastPos = i + 2;
            i++;
            break;
          case 105:
            if (a >= argLen)
              break;
            if (args[a] == null) break;
            if (lastPos < i)
              str += f.slice(lastPos, i);
            str += Math.floor(Number(args[a]));
            lastPos = i + 2;
            i++;
            break;
          case 79:
          // 'O'
          case 111:
          // 'o'
          case 106:
            if (a >= argLen)
              break;
            if (args[a] === void 0) break;
            if (lastPos < i)
              str += f.slice(lastPos, i);
            var type = typeof args[a];
            if (type === "string") {
              str += "'" + args[a] + "'";
              lastPos = i + 2;
              i++;
              break;
            }
            if (type === "function") {
              str += args[a].name || "<anonymous>";
              lastPos = i + 2;
              i++;
              break;
            }
            str += ss(args[a]);
            lastPos = i + 2;
            i++;
            break;
          case 115:
            if (a >= argLen)
              break;
            if (lastPos < i)
              str += f.slice(lastPos, i);
            str += String(args[a]);
            lastPos = i + 2;
            i++;
            break;
          case 37:
            if (lastPos < i)
              str += f.slice(lastPos, i);
            str += "%";
            lastPos = i + 2;
            i++;
            a--;
            break;
        }
        ++a;
      }
      ++i;
    }
    if (lastPos === -1)
      return f;
    else if (lastPos < flen) {
      str += f.slice(lastPos);
    }
    return str;
  }
  return quickFormatUnescaped;
}
var atomicSleep = { exports: {} };
var hasRequiredAtomicSleep;
function requireAtomicSleep() {
  if (hasRequiredAtomicSleep) return atomicSleep.exports;
  hasRequiredAtomicSleep = 1;
  if (typeof SharedArrayBuffer !== "undefined" && typeof Atomics !== "undefined") {
    let sleep = function(ms) {
      const valid = ms > 0 && ms < Infinity;
      if (valid === false) {
        if (typeof ms !== "number" && typeof ms !== "bigint") {
          throw TypeError("sleep: ms must be a number");
        }
        throw RangeError("sleep: ms must be a number that is greater than 0 but less than Infinity");
      }
      Atomics.wait(nil, 0, 0, Number(ms));
    };
    const nil = new Int32Array(new SharedArrayBuffer(4));
    atomicSleep.exports = sleep;
  } else {
    let sleep = function(ms) {
      const valid = ms > 0 && ms < Infinity;
      if (valid === false) {
        if (typeof ms !== "number" && typeof ms !== "bigint") {
          throw TypeError("sleep: ms must be a number");
        }
        throw RangeError("sleep: ms must be a number that is greater than 0 but less than Infinity");
      }
    };
    atomicSleep.exports = sleep;
  }
  return atomicSleep.exports;
}
var sonicBoom;
var hasRequiredSonicBoom;
function requireSonicBoom() {
  if (hasRequiredSonicBoom) return sonicBoom;
  hasRequiredSonicBoom = 1;
  const fs$1 = fs;
  const EventEmitter = require$$1;
  const inherits = require$$0$1.inherits;
  const path$1 = path;
  const sleep = requireAtomicSleep();
  const assert = require$$5;
  const BUSY_WRITE_TIMEOUT = 100;
  const kEmptyBuffer = Buffer.allocUnsafe(0);
  const MAX_WRITE = 16 * 1024;
  const kContentModeBuffer = "buffer";
  const kContentModeUtf8 = "utf8";
  const [major, minor] = (process.versions.node || "0.0").split(".").map(Number);
  const kCopyBuffer = major >= 22 && minor >= 7;
  function openFile(file, sonic) {
    sonic._opening = true;
    sonic._writing = true;
    sonic._asyncDrainScheduled = false;
    function fileOpened(err2, fd) {
      if (err2) {
        sonic._reopening = false;
        sonic._writing = false;
        sonic._opening = false;
        if (sonic.sync) {
          process.nextTick(() => {
            if (sonic.listenerCount("error") > 0) {
              sonic.emit("error", err2);
            }
          });
        } else {
          sonic.emit("error", err2);
        }
        return;
      }
      const reopening = sonic._reopening;
      sonic.fd = fd;
      sonic.file = file;
      sonic._reopening = false;
      sonic._opening = false;
      sonic._writing = false;
      if (sonic.sync) {
        process.nextTick(() => sonic.emit("ready"));
      } else {
        sonic.emit("ready");
      }
      if (sonic.destroyed) {
        return;
      }
      if (!sonic._writing && sonic._len > sonic.minLength || sonic._flushPending) {
        sonic._actualWrite();
      } else if (reopening) {
        process.nextTick(() => sonic.emit("drain"));
      }
    }
    const flags = sonic.append ? "a" : "w";
    const mode = sonic.mode;
    if (sonic.sync) {
      try {
        if (sonic.mkdir) fs$1.mkdirSync(path$1.dirname(file), { recursive: true });
        const fd = fs$1.openSync(file, flags, mode);
        fileOpened(null, fd);
      } catch (err2) {
        fileOpened(err2);
        throw err2;
      }
    } else if (sonic.mkdir) {
      fs$1.mkdir(path$1.dirname(file), { recursive: true }, (err2) => {
        if (err2) return fileOpened(err2);
        fs$1.open(file, flags, mode, fileOpened);
      });
    } else {
      fs$1.open(file, flags, mode, fileOpened);
    }
  }
  function SonicBoom(opts) {
    if (!(this instanceof SonicBoom)) {
      return new SonicBoom(opts);
    }
    let { fd, dest, minLength, maxLength, maxWrite, periodicFlush, sync, append = true, mkdir, retryEAGAIN, fsync, contentMode, mode } = opts || {};
    fd = fd || dest;
    this._len = 0;
    this.fd = -1;
    this._bufs = [];
    this._lens = [];
    this._writing = false;
    this._ending = false;
    this._reopening = false;
    this._asyncDrainScheduled = false;
    this._flushPending = false;
    this._hwm = Math.max(minLength || 0, 16387);
    this.file = null;
    this.destroyed = false;
    this.minLength = minLength || 0;
    this.maxLength = maxLength || 0;
    this.maxWrite = maxWrite || MAX_WRITE;
    this._periodicFlush = periodicFlush || 0;
    this._periodicFlushTimer = void 0;
    this.sync = sync || false;
    this.writable = true;
    this._fsync = fsync || false;
    this.append = append || false;
    this.mode = mode;
    this.retryEAGAIN = retryEAGAIN || (() => true);
    this.mkdir = mkdir || false;
    let fsWriteSync;
    let fsWrite;
    if (contentMode === kContentModeBuffer) {
      this._writingBuf = kEmptyBuffer;
      this.write = writeBuffer;
      this.flush = flushBuffer;
      this.flushSync = flushBufferSync;
      this._actualWrite = actualWriteBuffer;
      fsWriteSync = () => fs$1.writeSync(this.fd, this._writingBuf);
      fsWrite = () => fs$1.write(this.fd, this._writingBuf, this.release);
    } else if (contentMode === void 0 || contentMode === kContentModeUtf8) {
      this._writingBuf = "";
      this.write = write;
      this.flush = flush;
      this.flushSync = flushSync;
      this._actualWrite = actualWrite;
      fsWriteSync = () => {
        if (Buffer.isBuffer(this._writingBuf)) {
          return fs$1.writeSync(this.fd, this._writingBuf);
        }
        return fs$1.writeSync(this.fd, this._writingBuf, "utf8");
      };
      fsWrite = () => {
        if (Buffer.isBuffer(this._writingBuf)) {
          return fs$1.write(this.fd, this._writingBuf, this.release);
        }
        return fs$1.write(this.fd, this._writingBuf, "utf8", this.release);
      };
    } else {
      throw new Error(`SonicBoom supports "${kContentModeUtf8}" and "${kContentModeBuffer}", but passed ${contentMode}`);
    }
    if (typeof fd === "number") {
      this.fd = fd;
      process.nextTick(() => this.emit("ready"));
    } else if (typeof fd === "string") {
      openFile(fd, this);
    } else {
      throw new Error("SonicBoom supports only file descriptors and files");
    }
    if (this.minLength >= this.maxWrite) {
      throw new Error(`minLength should be smaller than maxWrite (${this.maxWrite})`);
    }
    this.release = (err2, n) => {
      if (err2) {
        if ((err2.code === "EAGAIN" || err2.code === "EBUSY") && this.retryEAGAIN(err2, this._writingBuf.length, this._len - this._writingBuf.length)) {
          if (this.sync) {
            try {
              sleep(BUSY_WRITE_TIMEOUT);
              this.release(void 0, 0);
            } catch (err3) {
              this.release(err3);
            }
          } else {
            setTimeout(fsWrite, BUSY_WRITE_TIMEOUT);
          }
        } else {
          this._writing = false;
          this.emit("error", err2);
        }
        return;
      }
      this.emit("write", n);
      const releasedBufObj = releaseWritingBuf(this._writingBuf, this._len, n);
      this._len = releasedBufObj.len;
      this._writingBuf = releasedBufObj.writingBuf;
      if (this._writingBuf.length) {
        if (!this.sync) {
          fsWrite();
          return;
        }
        try {
          do {
            const n2 = fsWriteSync();
            const releasedBufObj2 = releaseWritingBuf(this._writingBuf, this._len, n2);
            this._len = releasedBufObj2.len;
            this._writingBuf = releasedBufObj2.writingBuf;
          } while (this._writingBuf.length);
        } catch (err3) {
          this.release(err3);
          return;
        }
      }
      if (this._fsync) {
        fs$1.fsyncSync(this.fd);
      }
      const len = this._len;
      if (this._reopening) {
        this._writing = false;
        this._reopening = false;
        this.reopen();
      } else if (len > this.minLength) {
        this._actualWrite();
      } else if (this._ending) {
        if (len > 0) {
          this._actualWrite();
        } else {
          this._writing = false;
          actualClose(this);
        }
      } else {
        this._writing = false;
        if (this.sync) {
          if (!this._asyncDrainScheduled) {
            this._asyncDrainScheduled = true;
            process.nextTick(emitDrain, this);
          }
        } else {
          this.emit("drain");
        }
      }
    };
    this.on("newListener", function(name) {
      if (name === "drain") {
        this._asyncDrainScheduled = false;
      }
    });
    if (this._periodicFlush !== 0) {
      this._periodicFlushTimer = setInterval(() => this.flush(null), this._periodicFlush);
      this._periodicFlushTimer.unref();
    }
  }
  function releaseWritingBuf(writingBuf, len, n) {
    if (typeof writingBuf === "string") {
      writingBuf = Buffer.from(writingBuf);
    }
    len = Math.max(len - n, 0);
    writingBuf = writingBuf.subarray(n);
    return { writingBuf, len };
  }
  function emitDrain(sonic) {
    const hasListeners = sonic.listenerCount("drain") > 0;
    if (!hasListeners) return;
    sonic._asyncDrainScheduled = false;
    sonic.emit("drain");
  }
  inherits(SonicBoom, EventEmitter);
  function mergeBuf(bufs, len) {
    if (bufs.length === 0) {
      return kEmptyBuffer;
    }
    if (bufs.length === 1) {
      return bufs[0];
    }
    return Buffer.concat(bufs, len);
  }
  function write(data) {
    if (this.destroyed) {
      throw new Error("SonicBoom destroyed");
    }
    data = "" + data;
    const dataLen = Buffer.byteLength(data);
    const len = this._len + dataLen;
    const bufs = this._bufs;
    if (this.maxLength && len > this.maxLength) {
      this.emit("drop", data);
      return this._len < this._hwm;
    }
    if (bufs.length === 0 || Buffer.byteLength(bufs[bufs.length - 1]) + dataLen > this.maxWrite) {
      bufs.push(data);
    } else {
      bufs[bufs.length - 1] += data;
    }
    this._len = len;
    if (!this._writing && this._len >= this.minLength) {
      this._actualWrite();
    }
    return this._len < this._hwm;
  }
  function writeBuffer(data) {
    if (this.destroyed) {
      throw new Error("SonicBoom destroyed");
    }
    const len = this._len + data.length;
    const bufs = this._bufs;
    const lens = this._lens;
    if (this.maxLength && len > this.maxLength) {
      this.emit("drop", data);
      return this._len < this._hwm;
    }
    if (bufs.length === 0 || lens[lens.length - 1] + data.length > this.maxWrite) {
      bufs.push([data]);
      lens.push(data.length);
    } else {
      bufs[bufs.length - 1].push(data);
      lens[lens.length - 1] += data.length;
    }
    this._len = len;
    if (!this._writing && this._len >= this.minLength) {
      this._actualWrite();
    }
    return this._len < this._hwm;
  }
  function callFlushCallbackOnDrain(cb) {
    this._flushPending = true;
    const onDrain = () => {
      if (!this._fsync) {
        try {
          fs$1.fsync(this.fd, (err2) => {
            this._flushPending = false;
            cb(err2);
          });
        } catch (err2) {
          cb(err2);
        }
      } else {
        this._flushPending = false;
        cb();
      }
      this.off("error", onError);
    };
    const onError = (err2) => {
      this._flushPending = false;
      cb(err2);
      this.off("drain", onDrain);
    };
    this.once("drain", onDrain);
    this.once("error", onError);
  }
  function flush(cb) {
    if (cb != null && typeof cb !== "function") {
      throw new Error("flush cb must be a function");
    }
    if (this.destroyed) {
      const error = new Error("SonicBoom destroyed");
      if (cb) {
        cb(error);
        return;
      }
      throw error;
    }
    if (this.minLength <= 0) {
      cb?.();
      return;
    }
    if (cb) {
      callFlushCallbackOnDrain.call(this, cb);
    }
    if (this._writing) {
      return;
    }
    if (this._bufs.length === 0) {
      this._bufs.push("");
    }
    this._actualWrite();
  }
  function flushBuffer(cb) {
    if (cb != null && typeof cb !== "function") {
      throw new Error("flush cb must be a function");
    }
    if (this.destroyed) {
      const error = new Error("SonicBoom destroyed");
      if (cb) {
        cb(error);
        return;
      }
      throw error;
    }
    if (this.minLength <= 0) {
      cb?.();
      return;
    }
    if (cb) {
      callFlushCallbackOnDrain.call(this, cb);
    }
    if (this._writing) {
      return;
    }
    if (this._bufs.length === 0) {
      this._bufs.push([]);
      this._lens.push(0);
    }
    this._actualWrite();
  }
  SonicBoom.prototype.reopen = function(file) {
    if (this.destroyed) {
      throw new Error("SonicBoom destroyed");
    }
    if (this._opening) {
      this.once("ready", () => {
        this.reopen(file);
      });
      return;
    }
    if (this._ending) {
      return;
    }
    if (!this.file) {
      throw new Error("Unable to reopen a file descriptor, you must pass a file to SonicBoom");
    }
    if (file) {
      this.file = file;
    }
    this._reopening = true;
    if (this._writing) {
      return;
    }
    const fd = this.fd;
    this.once("ready", () => {
      if (fd !== this.fd) {
        fs$1.close(fd, (err2) => {
          if (err2) {
            return this.emit("error", err2);
          }
        });
      }
    });
    openFile(this.file, this);
  };
  SonicBoom.prototype.end = function() {
    if (this.destroyed) {
      throw new Error("SonicBoom destroyed");
    }
    if (this._opening) {
      this.once("ready", () => {
        this.end();
      });
      return;
    }
    if (this._ending) {
      return;
    }
    this._ending = true;
    if (this._writing) {
      return;
    }
    if (this._len > 0 && this.fd >= 0) {
      this._actualWrite();
    } else {
      actualClose(this);
    }
  };
  function flushSync() {
    if (this.destroyed) {
      throw new Error("SonicBoom destroyed");
    }
    if (this.fd < 0) {
      throw new Error("sonic boom is not ready yet");
    }
    if (!this._writing && this._writingBuf.length > 0) {
      this._bufs.unshift(this._writingBuf);
      this._writingBuf = "";
    }
    let buf = "";
    while (this._bufs.length || buf.length) {
      if (buf.length <= 0) {
        buf = this._bufs[0];
      }
      try {
        const n = Buffer.isBuffer(buf) ? fs$1.writeSync(this.fd, buf) : fs$1.writeSync(this.fd, buf, "utf8");
        const releasedBufObj = releaseWritingBuf(buf, this._len, n);
        buf = releasedBufObj.writingBuf;
        this._len = releasedBufObj.len;
        if (buf.length <= 0) {
          this._bufs.shift();
        }
      } catch (err2) {
        const shouldRetry = err2.code === "EAGAIN" || err2.code === "EBUSY";
        if (shouldRetry && !this.retryEAGAIN(err2, buf.length, this._len - buf.length)) {
          throw err2;
        }
        sleep(BUSY_WRITE_TIMEOUT);
      }
    }
    try {
      fs$1.fsyncSync(this.fd);
    } catch {
    }
  }
  function flushBufferSync() {
    if (this.destroyed) {
      throw new Error("SonicBoom destroyed");
    }
    if (this.fd < 0) {
      throw new Error("sonic boom is not ready yet");
    }
    if (!this._writing && this._writingBuf.length > 0) {
      this._bufs.unshift([this._writingBuf]);
      this._writingBuf = kEmptyBuffer;
    }
    let buf = kEmptyBuffer;
    while (this._bufs.length || buf.length) {
      if (buf.length <= 0) {
        buf = mergeBuf(this._bufs[0], this._lens[0]);
      }
      try {
        const n = fs$1.writeSync(this.fd, buf);
        buf = buf.subarray(n);
        this._len = Math.max(this._len - n, 0);
        if (buf.length <= 0) {
          this._bufs.shift();
          this._lens.shift();
        }
      } catch (err2) {
        const shouldRetry = err2.code === "EAGAIN" || err2.code === "EBUSY";
        if (shouldRetry && !this.retryEAGAIN(err2, buf.length, this._len - buf.length)) {
          throw err2;
        }
        sleep(BUSY_WRITE_TIMEOUT);
      }
    }
  }
  SonicBoom.prototype.destroy = function() {
    if (this.destroyed) {
      return;
    }
    actualClose(this);
  };
  function actualWrite() {
    const release = this.release;
    this._writing = true;
    this._writingBuf = this._writingBuf.length ? this._writingBuf : this._bufs.shift() || "";
    if (this.sync) {
      try {
        const written = Buffer.isBuffer(this._writingBuf) ? fs$1.writeSync(this.fd, this._writingBuf) : fs$1.writeSync(this.fd, this._writingBuf, "utf8");
        release(null, written);
      } catch (err2) {
        release(err2);
      }
    } else {
      fs$1.write(this.fd, this._writingBuf, release);
    }
  }
  function actualWriteBuffer() {
    const release = this.release;
    this._writing = true;
    this._writingBuf = this._writingBuf.length ? this._writingBuf : mergeBuf(this._bufs.shift(), this._lens.shift());
    if (this.sync) {
      try {
        const written = fs$1.writeSync(this.fd, this._writingBuf);
        release(null, written);
      } catch (err2) {
        release(err2);
      }
    } else {
      if (kCopyBuffer) {
        this._writingBuf = Buffer.from(this._writingBuf);
      }
      fs$1.write(this.fd, this._writingBuf, release);
    }
  }
  function actualClose(sonic) {
    if (sonic.fd === -1) {
      sonic.once("ready", actualClose.bind(null, sonic));
      return;
    }
    if (sonic._periodicFlushTimer !== void 0) {
      clearInterval(sonic._periodicFlushTimer);
    }
    sonic.destroyed = true;
    sonic._bufs = [];
    sonic._lens = [];
    assert(typeof sonic.fd === "number", `sonic.fd must be a number, got ${typeof sonic.fd}`);
    try {
      fs$1.fsync(sonic.fd, closeWrapped);
    } catch {
    }
    function closeWrapped() {
      if (sonic.fd !== 1 && sonic.fd !== 2) {
        fs$1.close(sonic.fd, done);
      } else {
        done();
      }
    }
    function done(err2) {
      if (err2) {
        sonic.emit("error", err2);
        return;
      }
      if (sonic._ending && !sonic._writing) {
        sonic.emit("finish");
      }
      sonic.emit("close");
    }
  }
  SonicBoom.SonicBoom = SonicBoom;
  SonicBoom.default = SonicBoom;
  sonicBoom = SonicBoom;
  return sonicBoom;
}
var onExitLeakFree;
var hasRequiredOnExitLeakFree;
function requireOnExitLeakFree() {
  if (hasRequiredOnExitLeakFree) return onExitLeakFree;
  hasRequiredOnExitLeakFree = 1;
  const refs = {
    exit: [],
    beforeExit: []
  };
  const functions = {
    exit: onExit,
    beforeExit: onBeforeExit
  };
  let registry;
  function ensureRegistry() {
    if (registry === void 0) {
      registry = new FinalizationRegistry(clear);
    }
  }
  function install(event) {
    if (refs[event].length > 0) {
      return;
    }
    process.on(event, functions[event]);
  }
  function uninstall(event) {
    if (refs[event].length > 0) {
      return;
    }
    process.removeListener(event, functions[event]);
    if (refs.exit.length === 0 && refs.beforeExit.length === 0) {
      registry = void 0;
    }
  }
  function onExit() {
    callRefs("exit");
  }
  function onBeforeExit() {
    callRefs("beforeExit");
  }
  function callRefs(event) {
    for (const ref of refs[event]) {
      const obj = ref.deref();
      const fn = ref.fn;
      if (obj !== void 0) {
        fn(obj, event);
      }
    }
    refs[event] = [];
  }
  function clear(ref) {
    for (const event of ["exit", "beforeExit"]) {
      const index = refs[event].indexOf(ref);
      refs[event].splice(index, index + 1);
      uninstall(event);
    }
  }
  function _register(event, obj, fn) {
    if (obj === void 0) {
      throw new Error("the object can't be undefined");
    }
    install(event);
    const ref = new WeakRef(obj);
    ref.fn = fn;
    ensureRegistry();
    registry.register(obj, ref);
    refs[event].push(ref);
  }
  function register(obj, fn) {
    _register("exit", obj, fn);
  }
  function registerBeforeExit(obj, fn) {
    _register("beforeExit", obj, fn);
  }
  function unregister(obj) {
    if (registry === void 0) {
      return;
    }
    registry.unregister(obj);
    for (const event of ["exit", "beforeExit"]) {
      refs[event] = refs[event].filter((ref) => {
        const _obj = ref.deref();
        return _obj && _obj !== obj;
      });
      uninstall(event);
    }
  }
  onExitLeakFree = {
    register,
    registerBeforeExit,
    unregister
  };
  return onExitLeakFree;
}
const version = "4.2.0";
const require$$0 = {
  version
};
var wait_1;
var hasRequiredWait;
function requireWait() {
  if (hasRequiredWait) return wait_1;
  hasRequiredWait = 1;
  const WAIT_MS = 1e4;
  function wait(state, index, expected, timeout, done) {
    const max = timeout === Infinity ? Infinity : Date.now() + timeout;
    const check = () => {
      const current = Atomics.load(state, index);
      if (current === expected) {
        done(null, "ok");
        return;
      }
      if (max !== Infinity && Date.now() > max) {
        done(null, "timed-out");
        return;
      }
      const remaining = max === Infinity ? WAIT_MS : Math.min(WAIT_MS, Math.max(1, max - Date.now()));
      const result = Atomics.waitAsync(state, index, current, remaining);
      if (result.async) {
        result.value.then(check);
      } else {
        setImmediate(check);
      }
    };
    check();
  }
  function waitDiff(state, index, expected, timeout, done) {
    const max = timeout === Infinity ? Infinity : Date.now() + timeout;
    const check = () => {
      const current = Atomics.load(state, index);
      if (current !== expected) {
        done(null, "ok");
        return;
      }
      if (max !== Infinity && Date.now() > max) {
        done(null, "timed-out");
        return;
      }
      const remaining = max === Infinity ? WAIT_MS : Math.min(WAIT_MS, Math.max(1, max - Date.now()));
      const result = Atomics.waitAsync(state, index, expected, remaining);
      if (result.async) {
        result.value.then((res2) => {
          if (res2 === "ok") {
            done(null, "ok");
            return;
          }
          check();
        });
      } else {
        setImmediate(check);
      }
    };
    check();
  }
  wait_1 = { wait, waitDiff };
  return wait_1;
}
var indexes;
var hasRequiredIndexes;
function requireIndexes() {
  if (hasRequiredIndexes) return indexes;
  hasRequiredIndexes = 1;
  const SEQ_INDEX = 2;
  const WRITE_INDEX = 4;
  const READ_INDEX = 8;
  indexes = {
    WRITE_INDEX,
    READ_INDEX,
    SEQ_INDEX
  };
  return indexes;
}
var threadStream;
var hasRequiredThreadStream;
function requireThreadStream() {
  if (hasRequiredThreadStream) return threadStream;
  hasRequiredThreadStream = 1;
  const { version: version2 } = require$$0;
  const { EventEmitter } = require$$1;
  const { Worker } = require$$2;
  const { join } = path;
  const { pathToFileURL } = require$$4;
  const { wait } = requireWait();
  const {
    WRITE_INDEX,
    READ_INDEX,
    SEQ_INDEX
  } = requireIndexes();
  const buffer = require$$7;
  const assert = require$$5;
  const kImpl = /* @__PURE__ */ Symbol("kImpl");
  const MAX_STRING = buffer.constants.MAX_STRING_LENGTH;
  function noop() {
  }
  function updateState(stream, fn) {
    Atomics.add(stream[kImpl].state, SEQ_INDEX, 1);
    fn();
    Atomics.add(stream[kImpl].state, SEQ_INDEX, 1);
    Atomics.notify(stream[kImpl].state, SEQ_INDEX);
  }
  function resetIndexes(stream) {
    updateState(stream, () => {
      Atomics.store(stream[kImpl].state, READ_INDEX, 0);
      Atomics.store(stream[kImpl].state, WRITE_INDEX, 0);
    });
  }
  class FakeWeakRef {
    constructor(value) {
      this._value = value;
    }
    deref() {
      return this._value;
    }
  }
  class FakeFinalizationRegistry {
    register() {
    }
    unregister() {
    }
  }
  const FinalizationRegistry2 = process.env.NODE_V8_COVERAGE ? FakeFinalizationRegistry : commonjsGlobal.FinalizationRegistry || FakeFinalizationRegistry;
  const WeakRef2 = process.env.NODE_V8_COVERAGE ? FakeWeakRef : commonjsGlobal.WeakRef || FakeWeakRef;
  const registry = new FinalizationRegistry2((worker) => {
    if (worker.exited) {
      return;
    }
    worker.terminate();
  });
  function createWorker(stream, opts) {
    const { filename, workerData } = opts;
    const bundlerOverrides = "__bundlerPathsOverrides" in globalThis ? globalThis.__bundlerPathsOverrides : {};
    const toExecute = bundlerOverrides["thread-stream-worker"] || join(__dirname, "lib", "worker.js");
    const worker = new Worker(toExecute, {
      ...opts.workerOpts,
      name: opts.workerOpts?.name || "thread-stream",
      trackUnmanagedFds: false,
      workerData: {
        filename: filename.indexOf("file://") === 0 ? filename : pathToFileURL(filename).href,
        dataBuf: stream[kImpl].dataBuf,
        stateBuf: stream[kImpl].stateBuf,
        workerData: {
          $context: {
            threadStreamVersion: version2
          },
          ...workerData
        }
      }
    });
    worker.stream = new FakeWeakRef(stream);
    worker.on("message", onWorkerMessage);
    worker.on("exit", onWorkerExit);
    registry.register(stream, worker);
    return worker;
  }
  function drain(stream) {
    assert(!stream[kImpl].sync);
    if (stream[kImpl].needDrain) {
      stream[kImpl].needDrain = false;
      stream.emit("drain");
    }
  }
  function nextFlush(stream) {
    while (true) {
      const writeIndex = Atomics.load(stream[kImpl].state, WRITE_INDEX);
      const leftover = stream[kImpl].data.length - writeIndex;
      if (leftover > 0) {
        if (stream[kImpl].bufLen === 0) {
          stream[kImpl].flushing = false;
          if (stream[kImpl].ending) {
            end(stream);
          } else if (stream[kImpl].needDrain) {
            process.nextTick(drain, stream);
          }
          return;
        }
        write(stream, leftover, noop);
        continue;
      }
      if (leftover === 0) {
        if (writeIndex === 0 && stream[kImpl].bufLen === 0) {
          return;
        }
        waitForRead(stream, () => {
          if (stream.destroyed) {
            return;
          }
          resetIndexes(stream);
          nextFlush(stream);
        });
        return;
      }
      destroy(stream, new Error("overwritten"));
      return;
    }
  }
  function onWorkerMessage(msg) {
    const stream = this.stream.deref();
    if (stream === void 0) {
      this.exited = true;
      this.terminate();
      return;
    }
    if (msg?.code == null) {
      return;
    }
    switch (msg.code) {
      case "READY":
        this.stream = new WeakRef2(stream);
        waitForRead(stream, () => {
          stream[kImpl].ready = true;
          stream.emit("ready");
        });
        break;
      case "ERROR":
        destroy(stream, msg.err);
        break;
      case "EVENT":
        if (Array.isArray(msg.args)) {
          stream.emit(msg.name, ...msg.args);
        } else {
          stream.emit(msg.name, msg.args);
        }
        break;
      case "FLUSHED": {
        if (msg.context !== "thread-stream") {
          destroy(stream, new Error("this should not happen: " + msg.code));
          break;
        }
        const cb = stream[kImpl].flushCallbacks.get(msg.id);
        if (cb) {
          stream[kImpl].flushCallbacks.delete(msg.id);
          process.nextTick(cb);
        }
        break;
      }
      case "WARNING":
        process.emitWarning(msg.err);
        break;
      default:
        destroy(stream, new Error("this should not happen: " + msg.code));
    }
  }
  function onWorkerExit(code) {
    const stream = this.stream.deref();
    if (stream === void 0) {
      return;
    }
    registry.unregister(stream);
    stream.worker.exited = true;
    stream.worker.off("exit", onWorkerExit);
    destroy(stream, code !== 0 ? new Error("the worker thread exited") : null);
  }
  class ThreadStream extends EventEmitter {
    constructor(opts = {}) {
      super();
      if (opts.bufferSize < 4) {
        throw new Error("bufferSize must at least fit a 4-byte utf-8 char");
      }
      this[kImpl] = {};
      this[kImpl].stateBuf = new SharedArrayBuffer(128);
      this[kImpl].state = new Int32Array(this[kImpl].stateBuf);
      this[kImpl].dataBuf = new SharedArrayBuffer(opts.bufferSize || 4 * 1024 * 1024);
      this[kImpl].data = Buffer.from(this[kImpl].dataBuf);
      this[kImpl].sync = opts.sync || false;
      this[kImpl].ending = false;
      this[kImpl].ended = false;
      this[kImpl].needDrain = false;
      this[kImpl].destroyed = false;
      this[kImpl].flushing = false;
      this[kImpl].ready = false;
      this[kImpl].finished = false;
      this[kImpl].errored = null;
      this[kImpl].closed = false;
      this[kImpl].buf = [];
      this[kImpl].bufHead = 0;
      this[kImpl].bufLen = 0;
      this[kImpl].flushCallbacks = /* @__PURE__ */ new Map();
      this[kImpl].nextFlushId = 0;
      this.worker = createWorker(this, opts);
      this.on("message", (message, transferList) => {
        this.worker.postMessage(message, transferList);
      });
    }
    write(data) {
      const dataBuf = Buffer.isBuffer(data) ? data : Buffer.from(data);
      if (this[kImpl].destroyed) {
        error(this, new Error("the worker has exited"));
        return false;
      }
      if (this[kImpl].ending) {
        error(this, new Error("the worker is ending"));
        return false;
      }
      if (this[kImpl].flushing && this[kImpl].bufLen + dataBuf.length >= MAX_STRING) {
        try {
          writeSync(this);
          this[kImpl].flushing = true;
        } catch (err2) {
          destroy(this, err2);
          return false;
        }
      }
      this[kImpl].buf.push(dataBuf);
      this[kImpl].bufLen += dataBuf.length;
      if (this[kImpl].sync) {
        try {
          writeSync(this);
          return true;
        } catch (err2) {
          destroy(this, err2);
          return false;
        }
      }
      if (!this[kImpl].flushing) {
        this[kImpl].flushing = true;
        setImmediate(nextFlush, this);
      }
      this[kImpl].needDrain = this[kImpl].data.length - this[kImpl].bufLen - Atomics.load(this[kImpl].state, WRITE_INDEX) <= 0;
      return !this[kImpl].needDrain;
    }
    end() {
      if (this[kImpl].destroyed) {
        return;
      }
      this[kImpl].ending = true;
      end(this);
    }
    flush(cb) {
      cb = typeof cb === "function" ? cb : noop;
      flushBuffer(this, (err2) => {
        if (err2) {
          process.nextTick(cb, err2);
          return;
        }
        requestWorkerFlush(this, cb);
      });
    }
    flushSync() {
      if (this[kImpl].destroyed) {
        return;
      }
      writeSync(this);
      flushSync(this);
    }
    unref() {
      this.worker.unref();
    }
    ref() {
      this.worker.ref();
    }
    get ready() {
      return this[kImpl].ready;
    }
    get destroyed() {
      return this[kImpl].destroyed;
    }
    get closed() {
      return this[kImpl].closed;
    }
    get writable() {
      return !this[kImpl].destroyed && !this[kImpl].ending;
    }
    get writableEnded() {
      return this[kImpl].ending;
    }
    get writableFinished() {
      return this[kImpl].finished;
    }
    get writableNeedDrain() {
      return this[kImpl].needDrain;
    }
    get writableObjectMode() {
      return false;
    }
    get writableErrored() {
      return this[kImpl].errored;
    }
  }
  function flushBuffer(stream, cb) {
    if (stream[kImpl].destroyed) {
      process.nextTick(cb, new Error("the worker has exited"));
      return;
    }
    if (!stream[kImpl].sync && (stream[kImpl].flushing || stream[kImpl].bufLen > 0)) {
      setImmediate(flushBuffer, stream, cb);
      return;
    }
    waitForRead(stream, cb);
  }
  function waitForRead(stream, cb) {
    const writeIndex = Atomics.load(stream[kImpl].state, WRITE_INDEX);
    wait(stream[kImpl].state, READ_INDEX, writeIndex, Infinity, (err2, res2) => {
      if (err2) {
        destroy(stream, err2);
        cb(err2);
        return;
      }
      if (res2 !== "ok") {
        waitForRead(stream, cb);
        return;
      }
      cb();
    });
  }
  function requestWorkerFlush(stream, cb) {
    if (stream[kImpl].destroyed) {
      process.nextTick(cb, new Error("the worker has exited"));
      return;
    }
    if (!stream[kImpl].ready) {
      const onReady = () => {
        cleanup();
        requestWorkerFlush(stream, cb);
      };
      const onClose = () => {
        cleanup();
        process.nextTick(cb, new Error("the worker has exited"));
      };
      const cleanup = () => {
        stream.off("ready", onReady);
        stream.off("close", onClose);
      };
      stream.once("ready", onReady);
      stream.once("close", onClose);
      return;
    }
    const id = ++stream[kImpl].nextFlushId;
    stream[kImpl].flushCallbacks.set(id, cb);
    try {
      stream.worker.postMessage({
        code: "FLUSH",
        context: "thread-stream",
        id
      });
    } catch (err2) {
      stream[kImpl].flushCallbacks.delete(id);
      destroy(stream, err2);
      process.nextTick(cb, err2);
    }
  }
  function failPendingFlushCallbacks(stream, err2) {
    const callbacks = stream[kImpl].flushCallbacks;
    if (callbacks.size === 0) {
      return;
    }
    const flushErr = err2 || new Error("the worker has exited");
    for (const cb of callbacks.values()) {
      process.nextTick(cb, flushErr);
    }
    callbacks.clear();
  }
  function error(stream, err2) {
    setImmediate(() => {
      stream.emit("error", err2);
    });
  }
  function destroy(stream, err2) {
    if (stream[kImpl].destroyed) {
      return;
    }
    stream[kImpl].destroyed = true;
    failPendingFlushCallbacks(stream, err2);
    if (err2) {
      stream[kImpl].errored = err2;
      error(stream, err2);
    }
    if (!stream.worker.exited) {
      stream.worker.terminate().catch(() => {
      }).then(() => {
        stream[kImpl].closed = true;
        stream.emit("close");
      });
    } else {
      setImmediate(() => {
        stream[kImpl].closed = true;
        stream.emit("close");
      });
    }
  }
  function write(stream, maxBytes, cb) {
    const current = Atomics.load(stream[kImpl].state, WRITE_INDEX);
    let offset = current;
    let remaining = maxBytes;
    while (remaining > 0 && stream[kImpl].bufLen !== 0) {
      const head = stream[kImpl].bufHead;
      const buf = stream[kImpl].buf[head];
      if (buf.length <= remaining) {
        buf.copy(stream[kImpl].data, offset);
        offset += buf.length;
        remaining -= buf.length;
        stream[kImpl].bufLen -= buf.length;
        stream[kImpl].bufHead = head + 1;
        if (stream[kImpl].bufHead === stream[kImpl].buf.length) {
          stream[kImpl].buf.length = 0;
          stream[kImpl].bufHead = 0;
        } else if (stream[kImpl].bufHead >= 1024 && stream[kImpl].bufHead * 2 >= stream[kImpl].buf.length) {
          stream[kImpl].buf.splice(0, stream[kImpl].bufHead);
          stream[kImpl].bufHead = 0;
        }
        continue;
      }
      buf.copy(stream[kImpl].data, offset, 0, remaining);
      stream[kImpl].buf[head] = buf.subarray(remaining);
      stream[kImpl].bufLen -= remaining;
      offset += remaining;
      remaining = 0;
    }
    updateState(stream, () => {
      Atomics.store(stream[kImpl].state, WRITE_INDEX, offset);
    });
    cb();
    return true;
  }
  function end(stream) {
    if (stream[kImpl].ended || !stream[kImpl].ending || stream[kImpl].flushing) {
      return;
    }
    stream[kImpl].ended = true;
    try {
      stream.flushSync();
      let readIndex = Atomics.load(stream[kImpl].state, READ_INDEX);
      updateState(stream, () => {
        Atomics.store(stream[kImpl].state, WRITE_INDEX, -1);
      });
      let spins = 0;
      while (readIndex !== -1) {
        Atomics.wait(stream[kImpl].state, READ_INDEX, readIndex, 1e3);
        readIndex = Atomics.load(stream[kImpl].state, READ_INDEX);
        if (readIndex === -2) {
          destroy(stream, new Error("end() failed"));
          return;
        }
        if (++spins === 10) {
          destroy(stream, new Error("end() took too long (10s)"));
          return;
        }
      }
      process.nextTick(() => {
        stream[kImpl].finished = true;
        stream.emit("finish");
      });
    } catch (err2) {
      destroy(stream, err2);
    }
  }
  function writeSync(stream) {
    const cb = () => {
      if (stream[kImpl].ending) {
        end(stream);
      } else if (stream[kImpl].needDrain) {
        process.nextTick(drain, stream);
      }
    };
    stream[kImpl].flushing = false;
    while (stream[kImpl].bufLen !== 0) {
      const writeIndex = Atomics.load(stream[kImpl].state, WRITE_INDEX);
      const leftover = stream[kImpl].data.length - writeIndex;
      if (leftover === 0) {
        flushSync(stream);
        resetIndexes(stream);
        continue;
      } else if (leftover < 0) {
        throw new Error("overwritten");
      }
      write(stream, leftover, cb);
    }
  }
  function flushSync(stream) {
    if (stream[kImpl].flushing) {
      throw new Error("unable to flush while flushing");
    }
    const writeIndex = Atomics.load(stream[kImpl].state, WRITE_INDEX);
    let spins = 0;
    while (true) {
      const readIndex = Atomics.load(stream[kImpl].state, READ_INDEX);
      if (readIndex === -2) {
        throw Error("_flushSync failed");
      }
      if (readIndex !== writeIndex) {
        Atomics.wait(stream[kImpl].state, READ_INDEX, readIndex, 1e3);
      } else {
        break;
      }
      if (++spins === 10) {
        throw new Error("_flushSync took too long (10s)");
      }
    }
  }
  threadStream = ThreadStream;
  return threadStream;
}
var transport_1;
var hasRequiredTransport;
function requireTransport() {
  if (hasRequiredTransport) return transport_1;
  hasRequiredTransport = 1;
  const { createRequire } = require$$0$2;
  const { existsSync } = require$$0$3;
  const getCallers = requireCaller();
  const { join, isAbsolute, sep } = require$$1$1;
  const { fileURLToPath } = require$$4$1;
  const sleep = requireAtomicSleep();
  const onExit = requireOnExitLeakFree();
  const ThreadStream = requireThreadStream();
  function setupOnExit(stream) {
    onExit.register(stream, autoEnd);
    onExit.registerBeforeExit(stream, flush);
    stream.on("close", function() {
      onExit.unregister(stream);
    });
  }
  function hasPreloadFlags() {
    const execArgv = process.execArgv;
    for (let i = 0; i < execArgv.length; i++) {
      const arg = execArgv[i];
      if (arg === "--import" || arg === "--require" || arg === "-r") {
        return true;
      }
      if (arg.startsWith("--import=") || arg.startsWith("--require=") || arg.startsWith("-r=")) {
        return true;
      }
    }
    return false;
  }
  function sanitizeNodeOptions(nodeOptions) {
    const tokens = nodeOptions.match(/(?:[^\s"']+|"[^"]*"|'[^']*')+/g);
    if (!tokens) {
      return nodeOptions;
    }
    const sanitized = [];
    let changed = false;
    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];
      if (token === "--require" || token === "-r" || token === "--import") {
        const next = tokens[i + 1];
        if (next && shouldDropPreload(next)) {
          changed = true;
          i++;
          continue;
        }
        sanitized.push(token);
        if (next) {
          sanitized.push(next);
          i++;
        }
        continue;
      }
      if (token.startsWith("--require=") || token.startsWith("-r=") || token.startsWith("--import=")) {
        const value = token.slice(token.indexOf("=") + 1);
        if (shouldDropPreload(value)) {
          changed = true;
          continue;
        }
      }
      sanitized.push(token);
    }
    return changed ? sanitized.join(" ") : nodeOptions;
  }
  function shouldDropPreload(value) {
    const unquoted = stripQuotes(value);
    if (!unquoted) {
      return false;
    }
    let path2 = unquoted;
    if (path2.startsWith("file://")) {
      try {
        path2 = fileURLToPath(path2);
      } catch {
        return false;
      }
    }
    return isAbsolute(path2) && !existsSync(path2);
  }
  function stripQuotes(value) {
    const first = value[0];
    const last = value[value.length - 1];
    if (first === '"' && last === '"' || first === "'" && last === "'") {
      return value.slice(1, -1);
    }
    return value;
  }
  function buildStream(filename, workerData, workerOpts, sync, name) {
    if (!workerOpts.execArgv && hasPreloadFlags() && require.main === void 0) {
      workerOpts = {
        ...workerOpts,
        execArgv: []
      };
    }
    if (!workerOpts.env && process.env.NODE_OPTIONS) {
      const nodeOptions = sanitizeNodeOptions(process.env.NODE_OPTIONS);
      if (nodeOptions !== process.env.NODE_OPTIONS) {
        workerOpts = {
          ...workerOpts,
          env: {
            ...process.env,
            NODE_OPTIONS: nodeOptions
          }
        };
      }
    }
    workerOpts = { ...workerOpts, name };
    const stream = new ThreadStream({
      filename,
      workerData,
      workerOpts,
      sync
    });
    stream.on("ready", onReady);
    stream.on("close", function() {
      process.removeListener("exit", onExit2);
    });
    process.on("exit", onExit2);
    function onReady() {
      process.removeListener("exit", onExit2);
      stream.unref();
      if (workerOpts.autoEnd !== false) {
        setupOnExit(stream);
      }
    }
    function onExit2() {
      if (stream.closed) {
        return;
      }
      stream.flushSync();
      sleep(100);
      stream.end();
    }
    return stream;
  }
  function autoEnd(stream) {
    stream.ref();
    stream.flushSync();
    stream.end();
    stream.once("close", function() {
      stream.unref();
    });
  }
  function flush(stream) {
    stream.flushSync();
  }
  function transport(fullOptions) {
    const { pipeline, targets, levels: levels2, dedupe, worker = {}, caller: caller2 = getCallers(), sync = false } = fullOptions;
    const options = {
      ...fullOptions.options
    };
    const callers = typeof caller2 === "string" ? [caller2] : caller2;
    const bundlerOverrides = typeof globalThis === "object" && Object.prototype.hasOwnProperty.call(globalThis, "__bundlerPathsOverrides") && globalThis.__bundlerPathsOverrides && typeof globalThis.__bundlerPathsOverrides === "object" ? globalThis.__bundlerPathsOverrides : /* @__PURE__ */ Object.create(null);
    let target = fullOptions.target;
    if (target && targets) {
      throw new Error("only one of target or targets can be specified");
    }
    if (targets) {
      target = bundlerOverrides["pino-worker"] || join(__dirname, "worker.js");
      options.targets = targets.filter((dest) => dest.target).map((dest) => {
        return {
          ...dest,
          target: fixTarget(dest.target)
        };
      });
      options.pipelines = targets.filter((dest) => dest.pipeline).map((dest) => {
        return dest.pipeline.map((t) => {
          return {
            ...t,
            level: dest.level,
            // duplicate the pipeline `level` property defined in the upper level
            target: fixTarget(t.target)
          };
        });
      });
    } else if (pipeline) {
      target = bundlerOverrides["pino-worker"] || join(__dirname, "worker.js");
      options.pipelines = [pipeline.map((dest) => {
        return {
          ...dest,
          target: fixTarget(dest.target)
        };
      })];
    }
    if (levels2) {
      options.levels = levels2;
    }
    if (dedupe) {
      options.dedupe = dedupe;
    }
    options.pinoWillSendConfig = true;
    const name = targets || pipeline ? "pino.transport" : target;
    return buildStream(fixTarget(target), options, worker, sync, name);
    function fixTarget(origin) {
      origin = bundlerOverrides[origin] || origin;
      if (isAbsolute(origin) || origin.indexOf("file://") === 0) {
        return origin;
      }
      if (origin === "pino/file") {
        return join(__dirname, "..", "file.js");
      }
      let fixTarget2;
      for (const filePath of callers) {
        try {
          const context = filePath === "node:repl" ? process.cwd() + sep : filePath;
          fixTarget2 = createRequire(context).resolve(origin);
          break;
        } catch (err2) {
          continue;
        }
      }
      if (!fixTarget2) {
        throw new Error(`unable to determine transport target for "${origin}"`);
      }
      return fixTarget2;
    }
  }
  transport_1 = transport;
  return transport_1;
}
var tools;
var hasRequiredTools;
function requireTools() {
  if (hasRequiredTools) return tools;
  hasRequiredTools = 1;
  const diagChan = diagnosticsChannel;
  const format = requireQuickFormatUnescaped();
  const { mapHttpRequest, mapHttpResponse } = requirePinoStdSerializers();
  const SonicBoom = requireSonicBoom();
  const onExit = requireOnExitLeakFree();
  const {
    lsCacheSym,
    chindingsSym,
    writeSym,
    serializersSym,
    formatOptsSym,
    endSym,
    stringifiersSym,
    stringifySym,
    stringifySafeSym,
    wildcardFirstSym,
    nestedKeySym,
    formattersSym,
    messageKeySym,
    errorKeySym,
    nestedKeyStrSym,
    msgPrefixSym
  } = requireSymbols();
  const { isMainThread } = require$$2;
  const transport = requireTransport();
  const [nodeMajor] = process.versions.node.split(".").map((v) => Number(v));
  const asJsonChan = diagChan.tracingChannel("pino_asJson");
  const asString = nodeMajor >= 25 ? (str) => JSON.stringify(str) : _asString;
  function noop() {
  }
  function genLog(level2, hook) {
    if (!hook) return LOG;
    return function hookWrappedLog(...args) {
      hook.call(this, args, LOG, level2);
    };
    function LOG(o, ...n) {
      if (typeof o === "object") {
        let msg = o;
        if (o !== null) {
          if (o.method && o.headers && o.socket) {
            o = mapHttpRequest(o);
          } else if (typeof o.setHeader === "function") {
            o = mapHttpResponse(o);
          }
        }
        let formatParams;
        if (msg === null && n.length === 0) {
          formatParams = [null];
        } else {
          msg = n.shift();
          formatParams = n;
        }
        if (typeof this[msgPrefixSym] === "string" && msg !== void 0 && msg !== null) {
          msg = this[msgPrefixSym] + msg;
        }
        this[writeSym](o, format(msg, formatParams, this[formatOptsSym]), level2);
      } else {
        let msg = o === void 0 ? n.shift() : o;
        if (typeof this[msgPrefixSym] === "string" && msg !== void 0 && msg !== null) {
          msg = this[msgPrefixSym] + msg;
        }
        this[writeSym](null, format(msg, n, this[formatOptsSym]), level2);
      }
    }
  }
  function _asString(str) {
    let result = "";
    let last = 0;
    let found = false;
    let point = 255;
    const l = str.length;
    if (l > 100) {
      return JSON.stringify(str);
    }
    for (var i = 0; i < l && point >= 32; i++) {
      point = str.charCodeAt(i);
      if (point === 34 || point === 92) {
        result += str.slice(last, i) + "\\";
        last = i;
        found = true;
      }
    }
    if (!found) {
      result = str;
    } else {
      result += str.slice(last);
    }
    return point < 32 ? JSON.stringify(str) : '"' + result + '"';
  }
  function asJson(obj, msg, num, time2) {
    if (asJsonChan.hasSubscribers === false) {
      return _asJson.call(this, obj, msg, num, time2);
    }
    const store = { instance: this, arguments };
    return asJsonChan.traceSync(_asJson, store, this, obj, msg, num, time2);
  }
  function _asJson(obj, msg, num, time2) {
    const stringify2 = this[stringifySym];
    const stringifySafe = this[stringifySafeSym];
    const stringifiers = this[stringifiersSym];
    const end = this[endSym];
    const chindings = this[chindingsSym];
    const serializers = this[serializersSym];
    const formatters = this[formattersSym];
    const messageKey = this[messageKeySym];
    const errorKey = this[errorKeySym];
    let data = this[lsCacheSym][num] + time2;
    data = data + chindings;
    let value;
    if (formatters.log) {
      obj = formatters.log(obj);
    }
    const wildcardStringifier = stringifiers[wildcardFirstSym];
    let propStr = "";
    for (const key in obj) {
      value = obj[key];
      if (Object.prototype.hasOwnProperty.call(obj, key) && value !== void 0) {
        if (serializers[key]) {
          value = serializers[key](value);
        } else if (key === errorKey && serializers.err) {
          value = serializers.err(value);
        }
        const stringifier = stringifiers[key] || wildcardStringifier;
        switch (typeof value) {
          case "undefined":
          case "function":
            continue;
          case "number":
            if (Number.isFinite(value) === false) {
              value = null;
            }
          // this case explicitly falls through to the next one
          case "boolean":
            if (stringifier) value = stringifier(value);
            break;
          case "string":
            value = (stringifier || asString)(value);
            break;
          default:
            value = (stringifier || stringify2)(value, stringifySafe);
        }
        if (value === void 0) continue;
        const strKey = asString(key);
        propStr += "," + strKey + ":" + value;
      }
    }
    let msgStr = "";
    if (msg !== void 0) {
      value = serializers[messageKey] ? serializers[messageKey](msg) : msg;
      const stringifier = stringifiers[messageKey] || wildcardStringifier;
      switch (typeof value) {
        case "function":
          break;
        case "number":
          if (Number.isFinite(value) === false) {
            value = null;
          }
        // this case explicitly falls through to the next one
        case "boolean":
          if (stringifier) value = stringifier(value);
          msgStr = ',"' + messageKey + '":' + value;
          break;
        case "string":
          value = (stringifier || asString)(value);
          msgStr = ',"' + messageKey + '":' + value;
          break;
        default:
          value = (stringifier || stringify2)(value, stringifySafe);
          msgStr = ',"' + messageKey + '":' + value;
      }
    }
    if (this[nestedKeySym] && propStr) {
      return data + this[nestedKeyStrSym] + propStr.slice(1) + "}" + msgStr + end;
    } else {
      return data + propStr + msgStr + end;
    }
  }
  function asChindings(instance, bindings) {
    let value;
    let data = instance[chindingsSym];
    const stringify2 = instance[stringifySym];
    const stringifySafe = instance[stringifySafeSym];
    const stringifiers = instance[stringifiersSym];
    const wildcardStringifier = stringifiers[wildcardFirstSym];
    const serializers = instance[serializersSym];
    const formatter = instance[formattersSym].bindings;
    bindings = formatter(bindings);
    for (const key in bindings) {
      value = bindings[key];
      const valid = (key.length < 5 || key !== "level" && key !== "serializers" && key !== "formatters" && key !== "customLevels") && bindings.hasOwnProperty(key) && value !== void 0;
      if (valid === true) {
        value = serializers[key] ? serializers[key](value) : value;
        value = (stringifiers[key] || wildcardStringifier || stringify2)(value, stringifySafe);
        if (value === void 0) continue;
        data += ',"' + key + '":' + value;
      }
    }
    return data;
  }
  function hasBeenTampered(stream) {
    return stream.write !== stream.constructor.prototype.write;
  }
  function buildSafeSonicBoom(opts) {
    const stream = new SonicBoom(opts);
    stream.on("error", filterBrokenPipe);
    if (!opts.sync && isMainThread) {
      onExit.register(stream, autoEnd);
      stream.on("close", function() {
        onExit.unregister(stream);
      });
    }
    return stream;
    function filterBrokenPipe(err2) {
      if (err2.code === "EPIPE") {
        stream.write = noop;
        stream.end = noop;
        stream.flushSync = noop;
        stream.destroy = noop;
        return;
      }
      stream.removeListener("error", filterBrokenPipe);
      stream.emit("error", err2);
    }
  }
  function autoEnd(stream, eventName) {
    if (stream.destroyed) {
      return;
    }
    if (eventName === "beforeExit") {
      stream.flush();
      stream.on("drain", function() {
        stream.end();
      });
    } else {
      stream.flushSync();
    }
  }
  function createArgsNormalizer(defaultOptions) {
    return function normalizeArgs(instance, caller2, opts = {}, stream) {
      if (typeof opts === "string") {
        stream = buildSafeSonicBoom({ dest: opts });
        opts = {};
      } else if (typeof stream === "string") {
        if (opts && opts.transport) {
          throw Error("only one of option.transport or stream can be specified");
        }
        stream = buildSafeSonicBoom({ dest: stream });
      } else if (opts instanceof SonicBoom || opts.writable || opts._writableState) {
        stream = opts;
        opts = {};
      } else if (opts.transport) {
        if (opts.transport instanceof SonicBoom || opts.transport.writable || opts.transport._writableState) {
          throw Error("option.transport do not allow stream, please pass to option directly. e.g. pino(transport)");
        }
        if (opts.transport.targets && opts.transport.targets.length && opts.formatters && typeof opts.formatters.level === "function") {
          throw Error("option.transport.targets do not allow custom level formatters");
        }
        let customLevels;
        if (opts.customLevels) {
          customLevels = opts.useOnlyCustomLevels ? opts.customLevels : Object.assign({}, opts.levels, opts.customLevels);
        }
        stream = transport({ caller: caller2, ...opts.transport, levels: customLevels });
      }
      opts = Object.assign({}, defaultOptions, opts);
      opts.serializers = Object.assign({}, defaultOptions.serializers, opts.serializers);
      opts.formatters = Object.assign({}, defaultOptions.formatters, opts.formatters);
      if (opts.prettyPrint) {
        throw new Error("prettyPrint option is no longer supported, see the pino-pretty package (https://github.com/pinojs/pino-pretty)");
      }
      const { enabled, onChild } = opts;
      if (enabled === false) opts.level = "silent";
      if (!onChild) opts.onChild = noop;
      if (!stream) {
        if (!hasBeenTampered(process.stdout)) {
          stream = buildSafeSonicBoom({ fd: process.stdout.fd || 1 });
        } else {
          stream = process.stdout;
        }
      }
      return { opts, stream };
    };
  }
  function stringify(obj, stringifySafeFn) {
    try {
      return JSON.stringify(obj);
    } catch (_) {
      try {
        const stringify2 = stringifySafeFn || this[stringifySafeSym];
        return stringify2(obj);
      } catch (_2) {
        return '"[unable to serialize, circular reference is too complex to analyze]"';
      }
    }
  }
  function buildFormatters(level2, bindings, log) {
    return {
      level: level2,
      bindings,
      log
    };
  }
  function normalizeDestFileDescriptor(destination) {
    const fd = Number(destination);
    if (typeof destination === "string" && Number.isFinite(fd)) {
      return fd;
    }
    if (destination === void 0) {
      return 1;
    }
    return destination;
  }
  tools = {
    noop,
    buildSafeSonicBoom,
    asChindings,
    asJson,
    genLog,
    createArgsNormalizer,
    stringify,
    buildFormatters,
    normalizeDestFileDescriptor
  };
  return tools;
}
var constants;
var hasRequiredConstants;
function requireConstants() {
  if (hasRequiredConstants) return constants;
  hasRequiredConstants = 1;
  const DEFAULT_LEVELS = {
    trace: 10,
    debug: 20,
    info: 30,
    warn: 40,
    error: 50,
    fatal: 60
  };
  const SORTING_ORDER = {
    ASC: "ASC",
    DESC: "DESC"
  };
  constants = {
    DEFAULT_LEVELS,
    SORTING_ORDER
  };
  return constants;
}
var levels;
var hasRequiredLevels;
function requireLevels() {
  if (hasRequiredLevels) return levels;
  hasRequiredLevels = 1;
  const {
    lsCacheSym,
    levelValSym,
    useOnlyCustomLevelsSym,
    streamSym,
    formattersSym,
    hooksSym,
    levelCompSym
  } = requireSymbols();
  const { noop, genLog } = requireTools();
  const { DEFAULT_LEVELS, SORTING_ORDER } = requireConstants();
  const levelMethods = {
    fatal: (hook) => {
      const logFatal = genLog(DEFAULT_LEVELS.fatal, hook);
      return function(...args) {
        const stream = this[streamSym];
        logFatal.call(this, ...args);
        if (typeof stream.flushSync === "function") {
          try {
            stream.flushSync();
          } catch (e) {
          }
        }
      };
    },
    error: (hook) => genLog(DEFAULT_LEVELS.error, hook),
    warn: (hook) => genLog(DEFAULT_LEVELS.warn, hook),
    info: (hook) => genLog(DEFAULT_LEVELS.info, hook),
    debug: (hook) => genLog(DEFAULT_LEVELS.debug, hook),
    trace: (hook) => genLog(DEFAULT_LEVELS.trace, hook)
  };
  const nums = Object.keys(DEFAULT_LEVELS).reduce((o, k) => {
    o[DEFAULT_LEVELS[k]] = k;
    return o;
  }, {});
  const initialLsCache = Object.keys(nums).reduce((o, k) => {
    o[k] = '{"level":' + Number(k);
    return o;
  }, {});
  function genLsCache(instance) {
    const formatter = instance[formattersSym].level;
    const { labels } = instance.levels;
    const cache = {};
    for (const label in labels) {
      const level2 = formatter(labels[label], Number(label));
      cache[label] = JSON.stringify(level2).slice(0, -1);
    }
    instance[lsCacheSym] = cache;
    return instance;
  }
  function isStandardLevel(level2, useOnlyCustomLevels) {
    if (useOnlyCustomLevels) {
      return false;
    }
    switch (level2) {
      case "fatal":
      case "error":
      case "warn":
      case "info":
      case "debug":
      case "trace":
        return true;
      default:
        return false;
    }
  }
  function setLevel(level2) {
    const { labels, values } = this.levels;
    if (typeof level2 === "number") {
      if (labels[level2] === void 0) throw Error("unknown level value" + level2);
      level2 = labels[level2];
    }
    if (values[level2] === void 0) throw Error("unknown level " + level2);
    const preLevelVal = this[levelValSym];
    const levelVal = this[levelValSym] = values[level2];
    const useOnlyCustomLevelsVal = this[useOnlyCustomLevelsSym];
    const levelComparison = this[levelCompSym];
    const hook = this[hooksSym].logMethod;
    for (const key in values) {
      if (levelComparison(values[key], levelVal) === false) {
        this[key] = noop;
        continue;
      }
      this[key] = isStandardLevel(key, useOnlyCustomLevelsVal) ? levelMethods[key](hook) : genLog(values[key], hook);
    }
    this.emit(
      "level-change",
      level2,
      levelVal,
      labels[preLevelVal],
      preLevelVal,
      this
    );
  }
  function getLevel(level2) {
    const { levels: levels2, levelVal } = this;
    return levels2 && levels2.labels ? levels2.labels[levelVal] : "";
  }
  function isLevelEnabled(logLevel) {
    const { values } = this.levels;
    const logLevelVal = values[logLevel];
    return logLevelVal !== void 0 && this[levelCompSym](logLevelVal, this[levelValSym]);
  }
  function compareLevel(direction, current, expected) {
    if (direction === SORTING_ORDER.DESC) {
      return current <= expected;
    }
    return current >= expected;
  }
  function genLevelComparison(levelComparison) {
    if (typeof levelComparison === "string") {
      return compareLevel.bind(null, levelComparison);
    }
    return levelComparison;
  }
  function mappings(customLevels = null, useOnlyCustomLevels = false) {
    const customNums = customLevels ? Object.keys(customLevels).reduce((o, k) => {
      o[customLevels[k]] = k;
      return o;
    }, {}) : null;
    const labels = Object.assign(
      Object.create(Object.prototype, { Infinity: { value: "silent" } }),
      useOnlyCustomLevels ? null : nums,
      customNums
    );
    const values = Object.assign(
      Object.create(Object.prototype, { silent: { value: Infinity } }),
      useOnlyCustomLevels ? null : DEFAULT_LEVELS,
      customLevels
    );
    return { labels, values };
  }
  function assertDefaultLevelFound(defaultLevel, customLevels, useOnlyCustomLevels) {
    if (typeof defaultLevel === "number") {
      const values = [].concat(
        Object.keys(customLevels || {}).map((key) => customLevels[key]),
        useOnlyCustomLevels ? [] : Object.keys(nums).map((level2) => +level2),
        Infinity
      );
      if (!values.includes(defaultLevel)) {
        throw Error(`default level:${defaultLevel} must be included in custom levels`);
      }
      return;
    }
    const labels = Object.assign(
      Object.create(Object.prototype, { silent: { value: Infinity } }),
      useOnlyCustomLevels ? null : DEFAULT_LEVELS,
      customLevels
    );
    if (!(defaultLevel in labels)) {
      throw Error(`default level:${defaultLevel} must be included in custom levels`);
    }
  }
  function assertNoLevelCollisions(levels2, customLevels) {
    const { labels, values } = levels2;
    for (const k in customLevels) {
      if (k in values) {
        throw Error("levels cannot be overridden");
      }
      if (customLevels[k] in labels) {
        throw Error("pre-existing level values cannot be used for new levels");
      }
    }
  }
  function assertLevelComparison(levelComparison) {
    if (typeof levelComparison === "function") {
      return;
    }
    if (typeof levelComparison === "string" && Object.values(SORTING_ORDER).includes(levelComparison)) {
      return;
    }
    throw new Error('Levels comparison should be one of "ASC", "DESC" or "function" type');
  }
  levels = {
    initialLsCache,
    genLsCache,
    levelMethods,
    getLevel,
    setLevel,
    isLevelEnabled,
    mappings,
    assertNoLevelCollisions,
    assertDefaultLevelFound,
    genLevelComparison,
    assertLevelComparison
  };
  return levels;
}
var meta;
var hasRequiredMeta;
function requireMeta() {
  if (hasRequiredMeta) return meta;
  hasRequiredMeta = 1;
  meta = { version: "10.3.1" };
  return meta;
}
var proto;
var hasRequiredProto;
function requireProto() {
  if (hasRequiredProto) return proto;
  hasRequiredProto = 1;
  const { EventEmitter } = require$$0$4;
  const {
    lsCacheSym,
    levelValSym,
    setLevelSym,
    getLevelSym,
    chindingsSym,
    mixinSym,
    asJsonSym,
    writeSym,
    mixinMergeStrategySym,
    timeSym,
    timeSliceIndexSym,
    streamSym,
    serializersSym,
    formattersSym,
    errorKeySym,
    messageKeySym,
    useOnlyCustomLevelsSym,
    needsMetadataGsym,
    redactFmtSym,
    stringifySym,
    formatOptsSym,
    stringifiersSym,
    msgPrefixSym,
    hooksSym
  } = requireSymbols();
  const {
    getLevel,
    setLevel,
    isLevelEnabled,
    mappings,
    initialLsCache,
    genLsCache,
    assertNoLevelCollisions
  } = requireLevels();
  const {
    asChindings,
    asJson,
    buildFormatters,
    stringify,
    noop
  } = requireTools();
  const {
    version: version2
  } = requireMeta();
  const redaction = requireRedaction();
  const constructor = class Pino {
  };
  const prototype = {
    constructor,
    child,
    bindings,
    setBindings,
    flush,
    isLevelEnabled,
    version: version2,
    get level() {
      return this[getLevelSym]();
    },
    set level(lvl) {
      this[setLevelSym](lvl);
    },
    get levelVal() {
      return this[levelValSym];
    },
    set levelVal(n) {
      throw Error("levelVal is read-only");
    },
    get msgPrefix() {
      return this[msgPrefixSym];
    },
    get [Symbol.toStringTag]() {
      return "Pino";
    },
    [lsCacheSym]: initialLsCache,
    [writeSym]: write,
    [asJsonSym]: asJson,
    [getLevelSym]: getLevel,
    [setLevelSym]: setLevel
  };
  Object.setPrototypeOf(prototype, EventEmitter.prototype);
  proto = function() {
    return Object.create(prototype);
  };
  const resetChildingsFormatter = (bindings2) => bindings2;
  function child(bindings2, options) {
    if (!bindings2) {
      throw Error("missing bindings for child Pino");
    }
    const serializers = this[serializersSym];
    const formatters = this[formattersSym];
    const instance = Object.create(this);
    if (options == null) {
      if (instance[formattersSym].bindings !== resetChildingsFormatter) {
        instance[formattersSym] = buildFormatters(
          formatters.level,
          resetChildingsFormatter,
          formatters.log
        );
      }
      instance[chindingsSym] = asChindings(instance, bindings2);
      if (this.onChild !== noop) {
        this.onChild(instance);
      }
      return instance;
    }
    if (options.hasOwnProperty("serializers") === true) {
      instance[serializersSym] = /* @__PURE__ */ Object.create(null);
      for (const k in serializers) {
        instance[serializersSym][k] = serializers[k];
      }
      const parentSymbols = Object.getOwnPropertySymbols(serializers);
      for (var i = 0; i < parentSymbols.length; i++) {
        const ks = parentSymbols[i];
        instance[serializersSym][ks] = serializers[ks];
      }
      for (const bk in options.serializers) {
        instance[serializersSym][bk] = options.serializers[bk];
      }
      const bindingsSymbols = Object.getOwnPropertySymbols(options.serializers);
      for (var bi = 0; bi < bindingsSymbols.length; bi++) {
        const bks = bindingsSymbols[bi];
        instance[serializersSym][bks] = options.serializers[bks];
      }
    } else instance[serializersSym] = serializers;
    if (options.hasOwnProperty("formatters")) {
      const { level: level2, bindings: chindings, log } = options.formatters;
      instance[formattersSym] = buildFormatters(
        level2 || formatters.level,
        chindings || resetChildingsFormatter,
        log || formatters.log
      );
    } else {
      instance[formattersSym] = buildFormatters(
        formatters.level,
        resetChildingsFormatter,
        formatters.log
      );
    }
    if (options.hasOwnProperty("customLevels") === true) {
      assertNoLevelCollisions(this.levels, options.customLevels);
      instance.levels = mappings(options.customLevels, instance[useOnlyCustomLevelsSym]);
      genLsCache(instance);
    }
    if (typeof options.redact === "object" && options.redact !== null || Array.isArray(options.redact)) {
      instance.redact = options.redact;
      const stringifiers = redaction(instance.redact, stringify);
      const formatOpts = { stringify: stringifiers[redactFmtSym] };
      instance[stringifySym] = stringify;
      instance[stringifiersSym] = stringifiers;
      instance[formatOptsSym] = formatOpts;
    }
    if (typeof options.msgPrefix === "string") {
      instance[msgPrefixSym] = (this[msgPrefixSym] || "") + options.msgPrefix;
    }
    instance[chindingsSym] = asChindings(instance, bindings2);
    if (options.level !== void 0 && options.level !== this.level || options.hasOwnProperty("customLevels")) {
      const childLevel = options.level || this.level;
      instance[setLevelSym](childLevel);
    }
    this.onChild(instance);
    return instance;
  }
  function bindings() {
    const chindings = this[chindingsSym];
    const chindingsJson = `{${chindings.substr(1)}}`;
    const bindingsFromJson = JSON.parse(chindingsJson);
    delete bindingsFromJson.pid;
    delete bindingsFromJson.hostname;
    return bindingsFromJson;
  }
  function setBindings(newBindings) {
    const chindings = asChindings(this, newBindings);
    this[chindingsSym] = chindings;
  }
  function defaultMixinMergeStrategy(mergeObject, mixinObject) {
    return Object.assign(mixinObject, mergeObject);
  }
  function write(_obj, msg, num) {
    const t = this[timeSym]();
    const mixin = this[mixinSym];
    const errorKey = this[errorKeySym];
    const messageKey = this[messageKeySym];
    const mixinMergeStrategy = this[mixinMergeStrategySym] || defaultMixinMergeStrategy;
    let obj;
    const streamWriteHook = this[hooksSym].streamWrite;
    if (_obj === void 0 || _obj === null) {
      obj = {};
    } else if (_obj instanceof Error) {
      obj = { [errorKey]: _obj };
      if (msg === void 0) {
        msg = _obj.message;
      }
    } else {
      obj = _obj;
      if (msg === void 0 && _obj[messageKey] === void 0 && _obj[errorKey]) {
        msg = _obj[errorKey].message;
      }
    }
    if (mixin) {
      obj = mixinMergeStrategy(obj, mixin(obj, num, this));
    }
    const s = this[asJsonSym](obj, msg, num, t);
    const stream = this[streamSym];
    if (stream[needsMetadataGsym] === true) {
      stream.lastLevel = num;
      stream.lastObj = obj;
      stream.lastMsg = msg;
      stream.lastTime = t.slice(this[timeSliceIndexSym]);
      stream.lastLogger = this;
    }
    stream.write(streamWriteHook ? streamWriteHook(s) : s);
  }
  function flush(cb) {
    if (cb != null && typeof cb !== "function") {
      throw Error("callback must be a function");
    }
    const stream = this[streamSym];
    if (typeof stream.flush === "function") {
      stream.flush(cb || noop);
    } else if (cb) cb();
  }
  return proto;
}
var safeStableStringify = { exports: {} };
var hasRequiredSafeStableStringify;
function requireSafeStableStringify() {
  if (hasRequiredSafeStableStringify) return safeStableStringify.exports;
  hasRequiredSafeStableStringify = 1;
  (function(module, exports) {
    const { hasOwnProperty } = Object.prototype;
    const stringify = configure();
    stringify.configure = configure;
    stringify.stringify = stringify;
    stringify.default = stringify;
    exports.stringify = stringify;
    exports.configure = configure;
    module.exports = stringify;
    const strEscapeSequencesRegExp = /[\u0000-\u001f\u0022\u005c\ud800-\udfff]/;
    function strEscape(str) {
      if (str.length < 5e3 && !strEscapeSequencesRegExp.test(str)) {
        return `"${str}"`;
      }
      return JSON.stringify(str);
    }
    function sort(array, comparator) {
      if (array.length > 200 || comparator) {
        return array.sort(comparator);
      }
      for (let i = 1; i < array.length; i++) {
        const currentValue = array[i];
        let position = i;
        while (position !== 0 && array[position - 1] > currentValue) {
          array[position] = array[position - 1];
          position--;
        }
        array[position] = currentValue;
      }
      return array;
    }
    const typedArrayPrototypeGetSymbolToStringTag = Object.getOwnPropertyDescriptor(
      Object.getPrototypeOf(
        Object.getPrototypeOf(
          new Int8Array()
        )
      ),
      Symbol.toStringTag
    ).get;
    function isTypedArrayWithEntries(value) {
      return typedArrayPrototypeGetSymbolToStringTag.call(value) !== void 0 && value.length !== 0;
    }
    function stringifyTypedArray(array, separator, maximumBreadth) {
      if (array.length < maximumBreadth) {
        maximumBreadth = array.length;
      }
      const whitespace = separator === "," ? "" : " ";
      let res2 = `"0":${whitespace}${array[0]}`;
      for (let i = 1; i < maximumBreadth; i++) {
        res2 += `${separator}"${i}":${whitespace}${array[i]}`;
      }
      return res2;
    }
    function getCircularValueOption(options) {
      if (hasOwnProperty.call(options, "circularValue")) {
        const circularValue = options.circularValue;
        if (typeof circularValue === "string") {
          return `"${circularValue}"`;
        }
        if (circularValue == null) {
          return circularValue;
        }
        if (circularValue === Error || circularValue === TypeError) {
          return {
            toString() {
              throw new TypeError("Converting circular structure to JSON");
            }
          };
        }
        throw new TypeError('The "circularValue" argument must be of type string or the value null or undefined');
      }
      return '"[Circular]"';
    }
    function getDeterministicOption(options) {
      let value;
      if (hasOwnProperty.call(options, "deterministic")) {
        value = options.deterministic;
        if (typeof value !== "boolean" && typeof value !== "function") {
          throw new TypeError('The "deterministic" argument must be of type boolean or comparator function');
        }
      }
      return value === void 0 ? true : value;
    }
    function getBooleanOption(options, key) {
      let value;
      if (hasOwnProperty.call(options, key)) {
        value = options[key];
        if (typeof value !== "boolean") {
          throw new TypeError(`The "${key}" argument must be of type boolean`);
        }
      }
      return value === void 0 ? true : value;
    }
    function getPositiveIntegerOption(options, key) {
      let value;
      if (hasOwnProperty.call(options, key)) {
        value = options[key];
        if (typeof value !== "number") {
          throw new TypeError(`The "${key}" argument must be of type number`);
        }
        if (!Number.isInteger(value)) {
          throw new TypeError(`The "${key}" argument must be an integer`);
        }
        if (value < 1) {
          throw new RangeError(`The "${key}" argument must be >= 1`);
        }
      }
      return value === void 0 ? Infinity : value;
    }
    function getItemCount(number) {
      if (number === 1) {
        return "1 item";
      }
      return `${number} items`;
    }
    function getUniqueReplacerSet(replacerArray) {
      const replacerSet = /* @__PURE__ */ new Set();
      for (const value of replacerArray) {
        if (typeof value === "string" || typeof value === "number") {
          replacerSet.add(String(value));
        }
      }
      return replacerSet;
    }
    function getStrictOption(options) {
      if (hasOwnProperty.call(options, "strict")) {
        const value = options.strict;
        if (typeof value !== "boolean") {
          throw new TypeError('The "strict" argument must be of type boolean');
        }
        if (value) {
          return (value2) => {
            let message = `Object can not safely be stringified. Received type ${typeof value2}`;
            if (typeof value2 !== "function") message += ` (${value2.toString()})`;
            throw new Error(message);
          };
        }
      }
    }
    function configure(options) {
      options = { ...options };
      const fail = getStrictOption(options);
      if (fail) {
        if (options.bigint === void 0) {
          options.bigint = false;
        }
        if (!("circularValue" in options)) {
          options.circularValue = Error;
        }
      }
      const circularValue = getCircularValueOption(options);
      const bigint = getBooleanOption(options, "bigint");
      const deterministic = getDeterministicOption(options);
      const comparator = typeof deterministic === "function" ? deterministic : void 0;
      const maximumDepth = getPositiveIntegerOption(options, "maximumDepth");
      const maximumBreadth = getPositiveIntegerOption(options, "maximumBreadth");
      function stringifyFnReplacer(key, parent, stack, replacer, spacer, indentation) {
        let value = parent[key];
        if (typeof value === "object" && value !== null && typeof value.toJSON === "function") {
          value = value.toJSON(key);
        }
        value = replacer.call(parent, key, value);
        switch (typeof value) {
          case "string":
            return strEscape(value);
          case "object": {
            if (value === null) {
              return "null";
            }
            if (stack.indexOf(value) !== -1) {
              return circularValue;
            }
            let res2 = "";
            let join = ",";
            const originalIndentation = indentation;
            if (Array.isArray(value)) {
              if (value.length === 0) {
                return "[]";
              }
              if (maximumDepth < stack.length + 1) {
                return '"[Array]"';
              }
              stack.push(value);
              if (spacer !== "") {
                indentation += spacer;
                res2 += `
${indentation}`;
                join = `,
${indentation}`;
              }
              const maximumValuesToStringify = Math.min(value.length, maximumBreadth);
              let i = 0;
              for (; i < maximumValuesToStringify - 1; i++) {
                const tmp2 = stringifyFnReplacer(String(i), value, stack, replacer, spacer, indentation);
                res2 += tmp2 !== void 0 ? tmp2 : "null";
                res2 += join;
              }
              const tmp = stringifyFnReplacer(String(i), value, stack, replacer, spacer, indentation);
              res2 += tmp !== void 0 ? tmp : "null";
              if (value.length - 1 > maximumBreadth) {
                const removedKeys = value.length - maximumBreadth - 1;
                res2 += `${join}"... ${getItemCount(removedKeys)} not stringified"`;
              }
              if (spacer !== "") {
                res2 += `
${originalIndentation}`;
              }
              stack.pop();
              return `[${res2}]`;
            }
            let keys = Object.keys(value);
            const keyLength = keys.length;
            if (keyLength === 0) {
              return "{}";
            }
            if (maximumDepth < stack.length + 1) {
              return '"[Object]"';
            }
            let whitespace = "";
            let separator = "";
            if (spacer !== "") {
              indentation += spacer;
              join = `,
${indentation}`;
              whitespace = " ";
            }
            const maximumPropertiesToStringify = Math.min(keyLength, maximumBreadth);
            if (deterministic && !isTypedArrayWithEntries(value)) {
              keys = sort(keys, comparator);
            }
            stack.push(value);
            for (let i = 0; i < maximumPropertiesToStringify; i++) {
              const key2 = keys[i];
              const tmp = stringifyFnReplacer(key2, value, stack, replacer, spacer, indentation);
              if (tmp !== void 0) {
                res2 += `${separator}${strEscape(key2)}:${whitespace}${tmp}`;
                separator = join;
              }
            }
            if (keyLength > maximumBreadth) {
              const removedKeys = keyLength - maximumBreadth;
              res2 += `${separator}"...":${whitespace}"${getItemCount(removedKeys)} not stringified"`;
              separator = join;
            }
            if (spacer !== "" && separator.length > 1) {
              res2 = `
${indentation}${res2}
${originalIndentation}`;
            }
            stack.pop();
            return `{${res2}}`;
          }
          case "number":
            return isFinite(value) ? String(value) : fail ? fail(value) : "null";
          case "boolean":
            return value === true ? "true" : "false";
          case "undefined":
            return void 0;
          case "bigint":
            if (bigint) {
              return String(value);
            }
          // fallthrough
          default:
            return fail ? fail(value) : void 0;
        }
      }
      function stringifyArrayReplacer(key, value, stack, replacer, spacer, indentation) {
        if (typeof value === "object" && value !== null && typeof value.toJSON === "function") {
          value = value.toJSON(key);
        }
        switch (typeof value) {
          case "string":
            return strEscape(value);
          case "object": {
            if (value === null) {
              return "null";
            }
            if (stack.indexOf(value) !== -1) {
              return circularValue;
            }
            const originalIndentation = indentation;
            let res2 = "";
            let join = ",";
            if (Array.isArray(value)) {
              if (value.length === 0) {
                return "[]";
              }
              if (maximumDepth < stack.length + 1) {
                return '"[Array]"';
              }
              stack.push(value);
              if (spacer !== "") {
                indentation += spacer;
                res2 += `
${indentation}`;
                join = `,
${indentation}`;
              }
              const maximumValuesToStringify = Math.min(value.length, maximumBreadth);
              let i = 0;
              for (; i < maximumValuesToStringify - 1; i++) {
                const tmp2 = stringifyArrayReplacer(String(i), value[i], stack, replacer, spacer, indentation);
                res2 += tmp2 !== void 0 ? tmp2 : "null";
                res2 += join;
              }
              const tmp = stringifyArrayReplacer(String(i), value[i], stack, replacer, spacer, indentation);
              res2 += tmp !== void 0 ? tmp : "null";
              if (value.length - 1 > maximumBreadth) {
                const removedKeys = value.length - maximumBreadth - 1;
                res2 += `${join}"... ${getItemCount(removedKeys)} not stringified"`;
              }
              if (spacer !== "") {
                res2 += `
${originalIndentation}`;
              }
              stack.pop();
              return `[${res2}]`;
            }
            stack.push(value);
            let whitespace = "";
            if (spacer !== "") {
              indentation += spacer;
              join = `,
${indentation}`;
              whitespace = " ";
            }
            let separator = "";
            for (const key2 of replacer) {
              const tmp = stringifyArrayReplacer(key2, value[key2], stack, replacer, spacer, indentation);
              if (tmp !== void 0) {
                res2 += `${separator}${strEscape(key2)}:${whitespace}${tmp}`;
                separator = join;
              }
            }
            if (spacer !== "" && separator.length > 1) {
              res2 = `
${indentation}${res2}
${originalIndentation}`;
            }
            stack.pop();
            return `{${res2}}`;
          }
          case "number":
            return isFinite(value) ? String(value) : fail ? fail(value) : "null";
          case "boolean":
            return value === true ? "true" : "false";
          case "undefined":
            return void 0;
          case "bigint":
            if (bigint) {
              return String(value);
            }
          // fallthrough
          default:
            return fail ? fail(value) : void 0;
        }
      }
      function stringifyIndent(key, value, stack, spacer, indentation) {
        switch (typeof value) {
          case "string":
            return strEscape(value);
          case "object": {
            if (value === null) {
              return "null";
            }
            if (typeof value.toJSON === "function") {
              value = value.toJSON(key);
              if (typeof value !== "object") {
                return stringifyIndent(key, value, stack, spacer, indentation);
              }
              if (value === null) {
                return "null";
              }
            }
            if (stack.indexOf(value) !== -1) {
              return circularValue;
            }
            const originalIndentation = indentation;
            if (Array.isArray(value)) {
              if (value.length === 0) {
                return "[]";
              }
              if (maximumDepth < stack.length + 1) {
                return '"[Array]"';
              }
              stack.push(value);
              indentation += spacer;
              let res3 = `
${indentation}`;
              const join2 = `,
${indentation}`;
              const maximumValuesToStringify = Math.min(value.length, maximumBreadth);
              let i = 0;
              for (; i < maximumValuesToStringify - 1; i++) {
                const tmp2 = stringifyIndent(String(i), value[i], stack, spacer, indentation);
                res3 += tmp2 !== void 0 ? tmp2 : "null";
                res3 += join2;
              }
              const tmp = stringifyIndent(String(i), value[i], stack, spacer, indentation);
              res3 += tmp !== void 0 ? tmp : "null";
              if (value.length - 1 > maximumBreadth) {
                const removedKeys = value.length - maximumBreadth - 1;
                res3 += `${join2}"... ${getItemCount(removedKeys)} not stringified"`;
              }
              res3 += `
${originalIndentation}`;
              stack.pop();
              return `[${res3}]`;
            }
            let keys = Object.keys(value);
            const keyLength = keys.length;
            if (keyLength === 0) {
              return "{}";
            }
            if (maximumDepth < stack.length + 1) {
              return '"[Object]"';
            }
            indentation += spacer;
            const join = `,
${indentation}`;
            let res2 = "";
            let separator = "";
            let maximumPropertiesToStringify = Math.min(keyLength, maximumBreadth);
            if (isTypedArrayWithEntries(value)) {
              res2 += stringifyTypedArray(value, join, maximumBreadth);
              keys = keys.slice(value.length);
              maximumPropertiesToStringify -= value.length;
              separator = join;
            }
            if (deterministic) {
              keys = sort(keys, comparator);
            }
            stack.push(value);
            for (let i = 0; i < maximumPropertiesToStringify; i++) {
              const key2 = keys[i];
              const tmp = stringifyIndent(key2, value[key2], stack, spacer, indentation);
              if (tmp !== void 0) {
                res2 += `${separator}${strEscape(key2)}: ${tmp}`;
                separator = join;
              }
            }
            if (keyLength > maximumBreadth) {
              const removedKeys = keyLength - maximumBreadth;
              res2 += `${separator}"...": "${getItemCount(removedKeys)} not stringified"`;
              separator = join;
            }
            if (separator !== "") {
              res2 = `
${indentation}${res2}
${originalIndentation}`;
            }
            stack.pop();
            return `{${res2}}`;
          }
          case "number":
            return isFinite(value) ? String(value) : fail ? fail(value) : "null";
          case "boolean":
            return value === true ? "true" : "false";
          case "undefined":
            return void 0;
          case "bigint":
            if (bigint) {
              return String(value);
            }
          // fallthrough
          default:
            return fail ? fail(value) : void 0;
        }
      }
      function stringifySimple(key, value, stack) {
        switch (typeof value) {
          case "string":
            return strEscape(value);
          case "object": {
            if (value === null) {
              return "null";
            }
            if (typeof value.toJSON === "function") {
              value = value.toJSON(key);
              if (typeof value !== "object") {
                return stringifySimple(key, value, stack);
              }
              if (value === null) {
                return "null";
              }
            }
            if (stack.indexOf(value) !== -1) {
              return circularValue;
            }
            let res2 = "";
            const hasLength = value.length !== void 0;
            if (hasLength && Array.isArray(value)) {
              if (value.length === 0) {
                return "[]";
              }
              if (maximumDepth < stack.length + 1) {
                return '"[Array]"';
              }
              stack.push(value);
              const maximumValuesToStringify = Math.min(value.length, maximumBreadth);
              let i = 0;
              for (; i < maximumValuesToStringify - 1; i++) {
                const tmp2 = stringifySimple(String(i), value[i], stack);
                res2 += tmp2 !== void 0 ? tmp2 : "null";
                res2 += ",";
              }
              const tmp = stringifySimple(String(i), value[i], stack);
              res2 += tmp !== void 0 ? tmp : "null";
              if (value.length - 1 > maximumBreadth) {
                const removedKeys = value.length - maximumBreadth - 1;
                res2 += `,"... ${getItemCount(removedKeys)} not stringified"`;
              }
              stack.pop();
              return `[${res2}]`;
            }
            let keys = Object.keys(value);
            const keyLength = keys.length;
            if (keyLength === 0) {
              return "{}";
            }
            if (maximumDepth < stack.length + 1) {
              return '"[Object]"';
            }
            let separator = "";
            let maximumPropertiesToStringify = Math.min(keyLength, maximumBreadth);
            if (hasLength && isTypedArrayWithEntries(value)) {
              res2 += stringifyTypedArray(value, ",", maximumBreadth);
              keys = keys.slice(value.length);
              maximumPropertiesToStringify -= value.length;
              separator = ",";
            }
            if (deterministic) {
              keys = sort(keys, comparator);
            }
            stack.push(value);
            for (let i = 0; i < maximumPropertiesToStringify; i++) {
              const key2 = keys[i];
              const tmp = stringifySimple(key2, value[key2], stack);
              if (tmp !== void 0) {
                res2 += `${separator}${strEscape(key2)}:${tmp}`;
                separator = ",";
              }
            }
            if (keyLength > maximumBreadth) {
              const removedKeys = keyLength - maximumBreadth;
              res2 += `${separator}"...":"${getItemCount(removedKeys)} not stringified"`;
            }
            stack.pop();
            return `{${res2}}`;
          }
          case "number":
            return isFinite(value) ? String(value) : fail ? fail(value) : "null";
          case "boolean":
            return value === true ? "true" : "false";
          case "undefined":
            return void 0;
          case "bigint":
            if (bigint) {
              return String(value);
            }
          // fallthrough
          default:
            return fail ? fail(value) : void 0;
        }
      }
      function stringify2(value, replacer, space) {
        if (arguments.length > 1) {
          let spacer = "";
          if (typeof space === "number") {
            spacer = " ".repeat(Math.min(space, 10));
          } else if (typeof space === "string") {
            spacer = space.slice(0, 10);
          }
          if (replacer != null) {
            if (typeof replacer === "function") {
              return stringifyFnReplacer("", { "": value }, [], replacer, spacer, "");
            }
            if (Array.isArray(replacer)) {
              return stringifyArrayReplacer("", value, [], getUniqueReplacerSet(replacer), spacer, "");
            }
          }
          if (spacer.length !== 0) {
            return stringifyIndent("", value, [], spacer, "");
          }
        }
        return stringifySimple("", value, []);
      }
      return stringify2;
    }
  })(safeStableStringify, safeStableStringify.exports);
  return safeStableStringify.exports;
}
var multistream_1;
var hasRequiredMultistream;
function requireMultistream() {
  if (hasRequiredMultistream) return multistream_1;
  hasRequiredMultistream = 1;
  const metadata = /* @__PURE__ */ Symbol.for("pino.metadata");
  const { DEFAULT_LEVELS } = requireConstants();
  const DEFAULT_INFO_LEVEL = DEFAULT_LEVELS.info;
  function multistream(streamsArray, opts) {
    streamsArray = streamsArray || [];
    opts = opts || { dedupe: false };
    const streamLevels = Object.create(DEFAULT_LEVELS);
    streamLevels.silent = Infinity;
    if (opts.levels && typeof opts.levels === "object") {
      Object.keys(opts.levels).forEach((i) => {
        streamLevels[i] = opts.levels[i];
      });
    }
    const res2 = {
      write,
      add,
      remove,
      emit,
      flushSync,
      end,
      minLevel: 0,
      lastId: 0,
      streams: [],
      clone,
      [metadata]: true,
      streamLevels
    };
    if (Array.isArray(streamsArray)) {
      streamsArray.forEach(add, res2);
    } else {
      add.call(res2, streamsArray);
    }
    streamsArray = null;
    return res2;
    function write(data) {
      let dest;
      const level2 = this.lastLevel;
      const { streams } = this;
      let recordedLevel = 0;
      let stream;
      for (let i = initLoopVar(streams.length, opts.dedupe); checkLoopVar(i, streams.length, opts.dedupe); i = adjustLoopVar(i, opts.dedupe)) {
        dest = streams[i];
        if (dest.level <= level2) {
          if (recordedLevel !== 0 && recordedLevel !== dest.level) {
            break;
          }
          stream = dest.stream;
          if (stream[metadata]) {
            const { lastTime, lastMsg, lastObj, lastLogger } = this;
            stream.lastLevel = level2;
            stream.lastTime = lastTime;
            stream.lastMsg = lastMsg;
            stream.lastObj = lastObj;
            stream.lastLogger = lastLogger;
          }
          stream.write(data);
          if (opts.dedupe) {
            recordedLevel = dest.level;
          }
        } else if (!opts.dedupe) {
          break;
        }
      }
    }
    function emit(...args) {
      for (const { stream } of this.streams) {
        if (typeof stream.emit === "function") {
          stream.emit(...args);
        }
      }
    }
    function flushSync() {
      for (const { stream } of this.streams) {
        if (typeof stream.flushSync === "function") {
          stream.flushSync();
        }
      }
    }
    function add(dest) {
      if (!dest) {
        return res2;
      }
      const isStream = typeof dest.write === "function" || dest.stream;
      const stream_ = dest.write ? dest : dest.stream;
      if (!isStream) {
        throw Error("stream object needs to implement either StreamEntry or DestinationStream interface");
      }
      const { streams, streamLevels: streamLevels2 } = this;
      let level2;
      if (typeof dest.levelVal === "number") {
        level2 = dest.levelVal;
      } else if (typeof dest.level === "string") {
        level2 = streamLevels2[dest.level];
      } else if (typeof dest.level === "number") {
        level2 = dest.level;
      } else {
        level2 = DEFAULT_INFO_LEVEL;
      }
      const dest_ = {
        stream: stream_,
        level: level2,
        levelVal: void 0,
        id: ++res2.lastId
      };
      streams.unshift(dest_);
      streams.sort(compareByLevel);
      this.minLevel = streams[0].level;
      return res2;
    }
    function remove(id) {
      const { streams } = this;
      const index = streams.findIndex((s) => s.id === id);
      if (index >= 0) {
        streams.splice(index, 1);
        streams.sort(compareByLevel);
        this.minLevel = streams.length > 0 ? streams[0].level : -1;
      }
      return res2;
    }
    function end() {
      for (const { stream } of this.streams) {
        if (typeof stream.flushSync === "function") {
          stream.flushSync();
        }
        stream.end();
      }
    }
    function clone(level2) {
      const streams = new Array(this.streams.length);
      for (let i = 0; i < streams.length; i++) {
        streams[i] = {
          level: level2,
          stream: this.streams[i].stream
        };
      }
      return {
        write,
        add,
        remove,
        minLevel: level2,
        streams,
        clone,
        emit,
        flushSync,
        [metadata]: true
      };
    }
  }
  function compareByLevel(a, b) {
    return a.level - b.level;
  }
  function initLoopVar(length, dedupe) {
    return dedupe ? length - 1 : 0;
  }
  function adjustLoopVar(i, dedupe) {
    return dedupe ? i - 1 : i + 1;
  }
  function checkLoopVar(i, length, dedupe) {
    return dedupe ? i >= 0 : i < length;
  }
  multistream_1 = multistream;
  return multistream_1;
}
var hasRequiredPino;
function requirePino() {
  if (hasRequiredPino) return pino$1.exports;
  hasRequiredPino = 1;
  const os$1 = os;
  const stdSerializers = requirePinoStdSerializers();
  const caller2 = requireCaller();
  const redaction = requireRedaction();
  const time2 = requireTime();
  const proto2 = requireProto();
  const symbols2 = requireSymbols();
  const { configure } = requireSafeStableStringify();
  const { assertDefaultLevelFound, mappings, genLsCache, genLevelComparison, assertLevelComparison } = requireLevels();
  const { DEFAULT_LEVELS, SORTING_ORDER } = requireConstants();
  const {
    createArgsNormalizer,
    asChindings,
    buildSafeSonicBoom,
    buildFormatters,
    stringify,
    normalizeDestFileDescriptor,
    noop
  } = requireTools();
  const { version: version2 } = requireMeta();
  const {
    chindingsSym,
    redactFmtSym,
    serializersSym,
    timeSym,
    timeSliceIndexSym,
    streamSym,
    stringifySym,
    stringifySafeSym,
    stringifiersSym,
    setLevelSym,
    endSym,
    formatOptsSym,
    messageKeySym,
    errorKeySym,
    nestedKeySym,
    mixinSym,
    levelCompSym,
    useOnlyCustomLevelsSym,
    formattersSym,
    hooksSym,
    nestedKeyStrSym,
    mixinMergeStrategySym,
    msgPrefixSym
  } = symbols2;
  const { epochTime, nullTime } = time2;
  const { pid } = process;
  const hostname = os$1.hostname();
  const defaultErrorSerializer = stdSerializers.err;
  const defaultOptions = {
    level: "info",
    levelComparison: SORTING_ORDER.ASC,
    levels: DEFAULT_LEVELS,
    messageKey: "msg",
    errorKey: "err",
    nestedKey: null,
    enabled: true,
    base: { pid, hostname },
    serializers: Object.assign(/* @__PURE__ */ Object.create(null), {
      err: defaultErrorSerializer
    }),
    formatters: Object.assign(/* @__PURE__ */ Object.create(null), {
      bindings(bindings) {
        return bindings;
      },
      level(label, number) {
        return { level: number };
      }
    }),
    hooks: {
      logMethod: void 0,
      streamWrite: void 0
    },
    timestamp: epochTime,
    name: void 0,
    redact: null,
    customLevels: null,
    useOnlyCustomLevels: false,
    depthLimit: 5,
    edgeLimit: 100
  };
  const normalize = createArgsNormalizer(defaultOptions);
  const serializers = Object.assign(/* @__PURE__ */ Object.create(null), stdSerializers);
  function pino2(...args) {
    const instance = {};
    const { opts, stream } = normalize(instance, caller2(), ...args);
    if (opts.level && typeof opts.level === "string" && DEFAULT_LEVELS[opts.level.toLowerCase()] !== void 0) opts.level = opts.level.toLowerCase();
    const {
      redact: redact2,
      crlf,
      serializers: serializers2,
      timestamp,
      messageKey,
      errorKey,
      nestedKey,
      base,
      name,
      level: level2,
      customLevels,
      levelComparison,
      mixin,
      mixinMergeStrategy,
      useOnlyCustomLevels,
      formatters,
      hooks,
      depthLimit,
      edgeLimit,
      onChild,
      msgPrefix
    } = opts;
    const stringifySafe = configure({
      maximumDepth: depthLimit,
      maximumBreadth: edgeLimit
    });
    const allFormatters = buildFormatters(
      formatters.level,
      formatters.bindings,
      formatters.log
    );
    const stringifyFn = stringify.bind({
      [stringifySafeSym]: stringifySafe
    });
    const stringifiers = redact2 ? redaction(redact2, stringifyFn) : {};
    const formatOpts = redact2 ? { stringify: stringifiers[redactFmtSym] } : { stringify: stringifyFn };
    const end = "}" + (crlf ? "\r\n" : "\n");
    const coreChindings = asChindings.bind(null, {
      [chindingsSym]: "",
      [serializersSym]: serializers2,
      [stringifiersSym]: stringifiers,
      [stringifySym]: stringify,
      [stringifySafeSym]: stringifySafe,
      [formattersSym]: allFormatters
    });
    let chindings = "";
    if (base !== null) {
      if (name === void 0) {
        chindings = coreChindings(base);
      } else {
        chindings = coreChindings(Object.assign({}, base, { name }));
      }
    }
    const time3 = timestamp instanceof Function ? timestamp : timestamp ? epochTime : nullTime;
    const timeSliceIndex = time3().indexOf(":") + 1;
    if (useOnlyCustomLevels && !customLevels) throw Error("customLevels is required if useOnlyCustomLevels is set true");
    if (mixin && typeof mixin !== "function") throw Error(`Unknown mixin type "${typeof mixin}" - expected "function"`);
    if (msgPrefix && typeof msgPrefix !== "string") throw Error(`Unknown msgPrefix type "${typeof msgPrefix}" - expected "string"`);
    assertDefaultLevelFound(level2, customLevels, useOnlyCustomLevels);
    const levels2 = mappings(customLevels, useOnlyCustomLevels);
    if (typeof stream.emit === "function") {
      stream.emit("message", { code: "PINO_CONFIG", config: { levels: levels2, messageKey, errorKey } });
    }
    assertLevelComparison(levelComparison);
    const levelCompFunc = genLevelComparison(levelComparison);
    Object.assign(instance, {
      levels: levels2,
      [levelCompSym]: levelCompFunc,
      [useOnlyCustomLevelsSym]: useOnlyCustomLevels,
      [streamSym]: stream,
      [timeSym]: time3,
      [timeSliceIndexSym]: timeSliceIndex,
      [stringifySym]: stringify,
      [stringifySafeSym]: stringifySafe,
      [stringifiersSym]: stringifiers,
      [endSym]: end,
      [formatOptsSym]: formatOpts,
      [messageKeySym]: messageKey,
      [errorKeySym]: errorKey,
      [nestedKeySym]: nestedKey,
      // protect against injection
      [nestedKeyStrSym]: nestedKey ? `,${JSON.stringify(nestedKey)}:{` : "",
      [serializersSym]: serializers2,
      [mixinSym]: mixin,
      [mixinMergeStrategySym]: mixinMergeStrategy,
      [chindingsSym]: chindings,
      [formattersSym]: allFormatters,
      [hooksSym]: hooks,
      silent: noop,
      onChild,
      [msgPrefixSym]: msgPrefix
    });
    Object.setPrototypeOf(instance, proto2());
    genLsCache(instance);
    instance[setLevelSym](level2);
    return instance;
  }
  pino$1.exports = pino2;
  pino$1.exports.destination = (dest = process.stdout.fd) => {
    if (typeof dest === "object") {
      dest.dest = normalizeDestFileDescriptor(dest.dest || process.stdout.fd);
      return buildSafeSonicBoom(dest);
    } else {
      return buildSafeSonicBoom({ dest: normalizeDestFileDescriptor(dest), minLength: 0 });
    }
  };
  pino$1.exports.transport = requireTransport();
  pino$1.exports.multistream = requireMultistream();
  pino$1.exports.levels = mappings();
  pino$1.exports.stdSerializers = serializers;
  pino$1.exports.stdTimeFunctions = Object.assign({}, time2);
  pino$1.exports.symbols = symbols2;
  pino$1.exports.version = version2;
  pino$1.exports.default = pino2;
  pino$1.exports.pino = pino2;
  return pino$1.exports;
}
var pinoExports = requirePino();
const pino = /* @__PURE__ */ getDefaultExportFromCjs(pinoExports);
const level = getServerEnv("LOG_LEVEL") || "info";
const baseOptions = {
  level,
  messageKey: "message",
  timestamp: pino.stdTimeFunctions.isoTime,
  base: void 0,
  formatters: {
    level: (label) => ({ level: label })
  },
  serializers: {
    err: pino.stdSerializers.err
  }
};
const logger = pino(baseOptions);
const loggerStorage = new AsyncLocalStorage();
function runWithLogger(child, fn) {
  return loggerStorage.run({ logger: child }, fn);
}
function setRequestUserEmail(email) {
  const store = loggerStorage.getStore();
  if (store && email) store.user = email;
}
function getRequestUserEmail() {
  return loggerStorage.getStore()?.user;
}
function setRequestOrgId(orgId) {
  const store = loggerStorage.getStore();
  if (store && orgId) store.orgId = orgId;
}
function getRequestOrgId() {
  return loggerStorage.getStore()?.orgId;
}
function setRequestServerFn(name) {
  const store = loggerStorage.getStore();
  if (store && name) store.serverFn = name;
}
function getRequestServerFn() {
  return loggerStorage.getStore()?.serverFn;
}
export {
  setRequestOrgId as a,
  setRequestServerFn as b,
  getRequestOrgId as c,
  getRequestServerFn as d,
  getRequestUserEmail as g,
  logger as l,
  runWithLogger as r,
  setRequestUserEmail as s
};

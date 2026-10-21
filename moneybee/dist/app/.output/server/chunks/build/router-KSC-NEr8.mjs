import { M as reactExports, Q as jsxRuntimeExports, c as compileDecodeCharMap, b as createLRUCache, t as trimPath, r as rewriteBasepath, d as composeRewrites, p as processRouteTree, e as processRouteMasks, g as resolvePath, h as findRouteMatch, i as trimPathRight, j as findFlatMatch, k as deepEqual, l as isDangerousProtocol, m as loadRouteChunk, n as preloadClientRoute, o as findSingleMatch, D as DEFAULT_PROTOCOL_ALLOWLIST, q as buildRouteBranch, s as interpolatePath, u as isNotFound, v as isRedirect, w as nullReplaceEqualDeep, x as replaceEqualDeep, y as last, z as decodePath, A as executeRewriteInput, B as parseHref, C as hasKeys, f as functionalUpdate$1, E as executeRewriteOutput, F as encodePathLikeUrl, H as redirect, G as rootRouteId, a0 as ClientOnly, $ as createServerFn, a as arraysEqual, L as useRouter, R as React, _ as _getAssetMatches, a1 as getDefaultExportFromCjs, S as isModuleNotFoundError, T as reactUse, V as escapeHtml, W as getAssetCrossOrigin, X as getScriptPreloadAttrs, Y as appendUniqueUserTags, U as useHydrated, I as invariant$1, J as trimPathLeft, K as joinPaths, N as useForwardedRef, O as exactPathTest, P as removeTrailingSlash, Z as resolveManifestCssLink, a2 as useMatches, a3 as notFound } from "./server.mjs";
import { m as matchQuery, Q as QueryClientProvider, f as focusManager, o as onlineManager, r as resolveQueryValue, h as functionalUpdate, n as notifyManager, a as noop, i as hashKey, p as partialMatchKey, j as hashQueryKeyByOptions, k as skipToken, S as Subscribable, l as matchMutation, q as Query, R as Removable, v as createRetryer, c as createSsrRpc } from "./query-BmG5BEas.mjs";
import { g as getRequestNonce } from "./security-headers.server-BdP3HrPp.mjs";
import { x as instance, b as captureException, s as servicesMiddleware, d as initServerServices, r as resources, g as getOauth2Cookie, m as makeOidcService, e as setToast, c as createInstance, i as initReactI18next, A as ALL_NAMESPACES, a as i18nConfig, F as FORBIDDEN, N as NOT_FOUND$1, f as supportedLngs, T as Temporal, D as DEFAULT_CASE_PAGINATION_SIZE, w as getPivotObjectKey, h as getDateFnsLocale, k as NewPayloadAstNode, j as add$3, l as NewDatabaseAccessAstNode, u as t$e, v as n$7, o as t$9, n as isKnownOperandAstNode, p as t$c, q as isLeafOperandAstNode, t as t$g } from "./services-middleware-nMulUXHZ.mjs";
import { L as I18nContext$1, N as iconsSVGSpriteHref, O as I18nProvider, F as FormatContext, c as clsx, u as useTranslation, Q as createSimpleContext, S as Typo, B as Button, I as Icon, d as cn$1, U as StickyComponent, V as useFormatTimezone, j as cva, W as CtaV2ClassName, g as useFormatLanguage, X as formatDateRelative, Y as formatDuration, Z as Calendar, M as MenuCommand, _ as sub, a as useFormatDateTime, y as createContextScope, r as createPopperScope, q as useId, H as useControllableState, J as Root2$2, k as useComposedRefs, A as Anchor, P as Primitive, l as composeEventHandlers, o as Presence, n as Portal$2, m as useLayoutEffect2, D as DismissableLayer, C as Content$1, $ as Arrow, a0 as createSlottable } from "./Tabs-CzpyUi7T.mjs";
import { T as ThemeProvider } from "./ThemeContext-DjRULCu0.mjs";
import { g as getSSRInstance } from "./i18n-instance-store-UssbGYOM.mjs";
import { q as invariant, j as fromParams, f as fromUUIDtoSUUID, g as getServerEnv, _ as _enum, s as string, R as useMatch, S as useParams, o as object, M as intersection, c as fromSUUIDtoUUID, z as record, T as useParam, h as any, e as unknown } from "./short-uuid-fTZYJj_k.mjs";
import { a as authMiddleware } from "./auth-middleware-eNRVfU3l.mjs";
import { d as dataModelFeatureAccessLoader } from "./data-model-feature-access-D7XsjRz2.mjs";
import { g as getDueDateUrgency } from "./datetime-insWKNBy.mjs";
import { C as CopyToClipboardButton, T as Tag, c as createSimpleContext$1, R as Root } from "./create-context-k6HmQ6bB.mjs";
import { c as caseDetailMiddleware } from "./case-detail-middleware-iDVIrW-c.mjs";
import { n as number } from "./coerce-UidCu_Sb.mjs";
import { e as getCaseInvestigationDataDownloadEndpoint } from "./files-fO9wUXBf.mjs";
import { M as MY_INBOX_ID } from "./inboxes-D556s0BB.mjs";
import { u as unboundedDateRange, p as paginationSchema, d as decisionFiltersSchema } from "./decisions--eKWwSYj.mjs";
import { n as n$1 } from "./unique-cniTya2T.mjs";
import { g as getGraphEligiblePivots } from "./graph-pivots-Bblee9BN.mjs";
import { u as unarchiveScenarioPayloadSchema, b as createScenarioPayloadSchema, t as toggleScenarioDeduplicationPayloadSchema, d as updateScenarioPayloadSchema, c as copyScenarioPayloadSchema, a as archiveScenarioPayloadSchema, k as createTestRunPayloadSchema, f as commitIterationPayloadSchema, p as prepareIterationPayloadSchema, e as activateIterationPayloadSchema, h as deactivateIterationPayloadSchema, j as duplicateRulePayloadSchema, i as deleteRulePayloadSchema, g as generateRuleInputSchema } from "./scenarios-C5R2TE8p.mjs";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "node:crypto";
import "./use-callback-ref-DoQNLci-.mjs";
import "./sharpstate.es-C0BW2AZi.mjs";
import "./formatDistanceStrict-DEEeAR-Y.mjs";
import "./config--RFGchua.mjs";
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
import "./feature-access-BSdB6UiC.mjs";
import "./input-validation-D4mgQsey.mjs";
import "./async-C3pYACua.mjs";
function encode(obj, stringify = String) {
  const result = new URLSearchParams();
  for (const key in obj) {
    const val = obj[key];
    if (val !== void 0) result.set(key, stringify(val));
  }
  return result.toString();
}
function toValue(str) {
  if (!str) return "";
  if (str === "false") return false;
  if (str === "true") return true;
  return +str * 0 === 0 && +str + "" === str ? +str : str;
}
function decode(str) {
  const searchParams = new URLSearchParams(str);
  const result = /* @__PURE__ */ Object.create(null);
  for (const [key, value] of searchParams.entries()) {
    const previousValue = result[key];
    if (previousValue == null) result[key] = toValue(value);
    else if (Array.isArray(previousValue)) previousValue.push(toValue(value));
    else result[key] = [previousValue, toValue(value)];
  }
  return result;
}
const jsonStart = /^(?:\s|["[{\d-]|fa|nu|tr)/;
const defaultParseSearch = parseSearchWith(JSON.parse);
const defaultStringifySearch = stringifySearchWith(JSON.stringify, JSON.parse);
function parseSearchWith(parser) {
  return (searchStr) => {
    if (searchStr[0] === "?") searchStr = searchStr.substring(1);
    const query = decode(searchStr);
    for (const key in query) {
      const value = query[key];
      if (typeof value === "string") try {
        query[key] = parser(value);
      } catch (_err) {
      }
    }
    return query;
  };
}
function stringifySearchWith(stringify, parser) {
  const isJsonParser = parser === JSON.parse;
  function stringifyValue(val) {
    if (val && typeof val === "object") try {
      return stringify(val);
    } catch (_err) {
    }
    else if (parser && typeof val === "string") {
      if (isJsonParser && !jsonStart.test(val)) return val;
      try {
        parser(val);
        return stringify(val);
      } catch (_err) {
      }
    }
    return val;
  }
  return (search) => {
    const searchStr = encode(search, stringifyValue);
    return searchStr ? `?${searchStr}` : "";
  };
}
function createNonReactiveMutableStore(initialValue) {
  let value = initialValue;
  return {
    get() {
      return value;
    },
    set(nextOrUpdater) {
      value = functionalUpdate$1(nextOrUpdater, value);
    }
  };
}
function createNonReactiveReadonlyStore(read) {
  return { get() {
    return read();
  } };
}
function createRouterStores(initialLocation, config) {
  const { createMutableStore, createReadonlyStore, batch } = config;
  const byRoute = /* @__PURE__ */ new Map();
  const status = createMutableStore("idle");
  const location = createMutableStore(initialLocation);
  const resolvedLocation = createMutableStore(void 0);
  const ids = createMutableStore([]);
  const matches = createReadonlyStore(() => ids.get().map((id) => byRoute.get(id).get()));
  const __store = createReadonlyStore(() => ({
    status: status.get(),
    isLoading: status.get() === "pending",
    matches: matches.get(),
    location: location.get(),
    resolvedLocation: resolvedLocation.get()
  }));
  function getMatchStore(routeId) {
    let matchStore = byRoute.get(routeId);
    if (!matchStore) {
      matchStore = createMutableStore(void 0);
      byRoute.set(routeId, matchStore);
    }
    return matchStore;
  }
  const store = {
    status,
    location,
    resolvedLocation,
    ids,
    matches,
    byRoute,
    __store,
    getMatchStore,
    setMatches
  };
  function setMatches(nextMatches) {
    const previousIds = ids.get();
    const nextIds = nextMatches.map((match) => match.routeId);
    batch(() => {
      if (!arraysEqual(previousIds, nextIds)) ids.set(nextIds);
      for (const id of previousIds) if (!nextIds.includes(id)) byRoute.get(id).set(() => void 0);
      for (const nextMatch of nextMatches) {
        const matchStore = getMatchStore(nextMatch.routeId);
        if (matchStore.get() !== nextMatch) matchStore.set(nextMatch);
      }
    });
  }
  return store;
}
function routeNeedsLoad(route) {
  return route.options.loader || route.options.beforeLoad || route.lazyFn || route.options.component?.preload || route.options.pendingComponent?.preload;
}
function defaultSerializeError(err) {
  if (err instanceof Error) {
    const obj = {
      name: err.name,
      message: err.message
    };
    return obj;
  }
  return { data: err };
}
function getLocationChangeInfo(location, resolvedLocation) {
  return {
    fromLocation: resolvedLocation,
    toLocation: location,
    pathChanged: resolvedLocation?.pathname !== location.pathname,
    hrefChanged: resolvedLocation?.href !== location.href,
    hashChanged: resolvedLocation?.hash !== location.hash
  };
}
function _getUserHistoryState({ key: _key, __TSR_key: _tsrKey, __TSR_index: _tsrIndex, __hashScrollIntoViewOptions: _hashScroll, ...state }) {
  return state;
}
function runRouteLifecycle(router2, previous, matches, owner) {
  for (const match of previous) {
    if (!matches.some((candidate) => candidate.routeId === match.routeId)) router2.routesById[match.routeId].options.onLeave?.(match);
  }
  for (const match of matches) {
    router2.routesById[match.routeId].options[previous.some((candidate) => candidate.routeId === match.routeId) ? "onStay" : "onEnter"]?.(match);
  }
}
var RouterCore = class {
  /**
  * @deprecated Use the `createRouter` function instead
  */
  constructor(options, getStoreConfig) {
    this.tempLocationKey = `${Math.round(Math.random() * 1e7)}`;
    this._scroll = { next: true };
    this.subscribers = /* @__PURE__ */ new Set();
    this._cache = /* @__PURE__ */ new Map();
    this._committed = [];
    this.routeBranchCache = /* @__PURE__ */ new WeakMap();
    this.lightweightCache = /* @__PURE__ */ new WeakMap();
    this.startTransition = async (fn2) => {
      fn2();
      return false;
    };
    this.update = (newOptions) => {
      const prevOptions = this.options;
      const prevBasepath = this.basepath ?? prevOptions?.basepath ?? "/";
      const basepathWasUnset = this.basepath === void 0;
      const prevRewriteOption = prevOptions?.rewrite;
      this.options = {
        ...prevOptions,
        ...newOptions
      };
      this.isServer = this.options.isServer ?? isServer ?? typeof document === "undefined";
      this.protocolAllowlist = new Set(this.options.protocolAllowlist);
      if (this.options.pathParamsAllowedCharacters) this.pathParamsDecoder = compileDecodeCharMap(this.options.pathParamsAllowedCharacters);
      if (!this.history || this.options.history && this.options.history !== this.history) if (!this.options.history) ;
      else this.history = this.options.history;
      this.origin = this.options.origin;
      if (!this.origin) this.origin = "http://localhost";
      if (this.history) this.updateLatestLocation();
      if (this.options.routeTree !== this.routeTree) {
        this.routeTree = this.options.routeTree;
        let processRouteTreeResult;
        if (globalThis.__TSR_CACHE__ && globalThis.__TSR_CACHE__.routeTree === this.routeTree) {
          const cached = globalThis.__TSR_CACHE__;
          this.resolvePathCache = cached.resolvePathCache;
          processRouteTreeResult = cached.processRouteTreeResult;
        } else {
          this.resolvePathCache = createLRUCache(1e3);
          processRouteTreeResult = this.buildRouteTree();
          if (globalThis.__TSR_CACHE__ === void 0) globalThis.__TSR_CACHE__ = {
            routeTree: this.routeTree,
            processRouteTreeResult,
            resolvePathCache: this.resolvePathCache
          };
        }
        this.setRoutes(processRouteTreeResult);
      }
      if (!this.stores && this.latestLocation) {
        const config = this.getStoreConfig(this);
        this.batch = config.batch;
        this.stores = createRouterStores(this.latestLocation, config);
      }
      const nextBasepath = this.options.basepath ?? "/";
      const nextRewriteOption = this.options.rewrite;
      if (basepathWasUnset || prevBasepath !== nextBasepath || prevRewriteOption !== nextRewriteOption) {
        this.basepath = nextBasepath;
        const rewrites = [];
        const trimmed = trimPath(nextBasepath);
        if (trimmed && trimmed !== "/") rewrites.push(rewriteBasepath({ basepath: nextBasepath }));
        if (nextRewriteOption) rewrites.push(nextRewriteOption);
        this.rewrite = rewrites.length === 0 ? void 0 : rewrites.length === 1 ? rewrites[0] : composeRewrites(rewrites);
        if (this.history) this.updateLatestLocation();
        if (this.stores) this.stores.location.set(this.latestLocation);
      }
    };
    this.updateLatestLocation = () => {
      this.latestLocation = this.parseLocation(this.history.location, this.latestLocation);
    };
    this.buildRouteTree = () => {
      const result = processRouteTree(this.routeTree, this.options.caseSensitive, (route, i) => {
        route.init({ originalIndex: i });
      });
      if (this.options.routeMasks) processRouteMasks(this.options.routeMasks, result.processedTree);
      return result;
    };
    this.subscribe = (eventType, fn2) => {
      const listener = {
        eventType,
        fn: fn2
      };
      this.subscribers.add(listener);
      return () => {
        this.subscribers.delete(listener);
      };
    };
    this.emit = (routerEvent) => {
      for (const listener of this.subscribers) if (listener.eventType === routerEvent.type) try {
        listener.fn(routerEvent);
      } catch (e2) {
        console.error(e2);
      }
    };
    this.parseLocation = (locationToParse, previousLocation) => {
      const parse = ({ pathname, search, hash, href, state }) => {
        if (!this.rewrite && !/[ \x00-\x1f\x7f\u0080-\uffff]/.test(pathname)) {
          const parsedSearch2 = this.options.parseSearch(search);
          const searchStr2 = this.options.stringifySearch(parsedSearch2);
          return {
            href: pathname + searchStr2 + hash,
            publicHref: pathname + searchStr2 + hash,
            pathname: decodePath(pathname).path,
            external: false,
            searchStr: searchStr2,
            search: nullReplaceEqualDeep(previousLocation?.search, parsedSearch2),
            hash: decodePath(hash.slice(1)).path,
            state: replaceEqualDeep(previousLocation?.state, state)
          };
        }
        const fullUrl = new URL(href, this.origin);
        const url = executeRewriteInput(this.rewrite, fullUrl);
        const parsedSearch = this.options.parseSearch(url.search);
        const searchStr = this.options.stringifySearch(parsedSearch);
        url.search = searchStr;
        return {
          href: url.href.replace(url.origin, ""),
          publicHref: href,
          pathname: decodePath(url.pathname).path,
          external: !!this.rewrite && url.origin !== this.origin,
          searchStr,
          search: nullReplaceEqualDeep(previousLocation?.search, parsedSearch),
          hash: decodePath(url.hash.slice(1)).path,
          state: replaceEqualDeep(previousLocation?.state, state)
        };
      };
      const location = parse(locationToParse);
      const { __tempLocation, __tempKey } = location.state;
      if (__tempLocation && (!__tempKey || __tempKey === this.tempLocationKey)) {
        const parsedTempLocation = parse(__tempLocation);
        parsedTempLocation.state.key = location.state.key;
        parsedTempLocation.state.__TSR_key = location.state.__TSR_key;
        delete parsedTempLocation.state.__tempLocation;
        return {
          ...parsedTempLocation,
          maskedLocation: location
        };
      }
      return location;
    };
    this.resolvePathWithBase = (from, path) => {
      return resolvePath({
        base: from,
        to: path,
        trailingSlash: this.options.trailingSlash,
        cache: this.resolvePathCache
      });
    };
    this.matchRoutes = (pathnameOrNext, locationSearchOrOpts, opts) => {
      if (typeof pathnameOrNext === "string") return this.matchRoutesInternal({
        pathname: pathnameOrNext,
        search: locationSearchOrOpts
      }, opts);
      return this.matchRoutesInternal(pathnameOrNext, locationSearchOrOpts);
    };
    this.getMatchedRoutes = (pathname) => {
      const rawParams = /* @__PURE__ */ Object.create(null);
      const match = findRouteMatch(trimPathRight(pathname), this.processedTree, true);
      if (match) Object.assign(rawParams, match.rawParams);
      return [
        match?.branch || [this.routesById["__root__"]],
        rawParams,
        match?.route
      ];
    };
    this.buildLocation = (opts) => {
      const build = (dest = {}) => {
        if (dest.href) {
          const parsed = parseHref(dest.href, {});
          dest = {
            ...dest,
            to: executeRewriteInput(this.rewrite, new URL(parsed.pathname, this.origin)).pathname,
            search: this.options.parseSearch(parsed.search),
            hash: parsed.hash.slice(1)
          };
        }
        const currentLocation = dest._fromLocation || this._pendingLocation || this.latestLocation;
        const lightweightResult = this.matchRoutesLightweight(currentLocation);
        if (dest.from && false) ;
        const defaultedFromPath = dest.unsafeRelative === "path" ? currentLocation.pathname : dest.from ?? lightweightResult[1];
        const fromSearch = lightweightResult[2];
        const fromParams2 = lightweightResult[3];
        const nextTo = this.resolvePathWithBase(defaultedFromPath, dest.to ? `${dest.to}` : ".");
        let nextParams = resolveNextParams(dest.params, fromParams2);
        const destRoute = this.routesByPath[trimPathRight(nextTo)];
        let destRoutes;
        if (destRoute) destRoutes = this.getRouteBranch(destRoute);
        else if (nextTo.includes("$")) destRoutes = [];
        else {
          const [matchedRoutes, rawParams, foundRoute] = this.getMatchedRoutes(nextTo);
          destRoutes = matchedRoutes;
          if (this.options.notFoundRoute && (!foundRoute || foundRoute.path !== "/" && rawParams["**"])) destRoutes = [...destRoutes, this.options.notFoundRoute];
        }
        if (destRoutes.length && hasKeys(nextParams)) for (const route of destRoutes) {
          const fn2 = route.options.params?.stringify ?? route.options.stringifyParams;
          if (fn2) {
            if (nextParams === fromParams2) nextParams = Object.assign(/* @__PURE__ */ Object.create(null), nextParams);
            try {
              Object.assign(nextParams, fn2(nextParams));
            } catch {
            }
          }
        }
        const nextPathname = opts.leaveParams ? nextTo : decodePath(interpolatePath({
          path: nextTo,
          params: nextParams,
          decoder: this.pathParamsDecoder,
          server: this.isServer
        }).interpolatedPath).path;
        let nextSearch = fromSearch;
        if (opts._includeValidateSearch && this.options.search?.strict) {
          const validatedSearch = {};
          destRoutes.forEach((route) => {
            if (route.options.validateSearch) try {
              Object.assign(validatedSearch, validateSearch(route.options.validateSearch, {
                ...validatedSearch,
                ...nextSearch
              }));
            } catch {
            }
          });
          nextSearch = validatedSearch;
        }
        nextSearch = applySearchMiddleware(nextSearch, dest, destRoutes, opts._includeValidateSearch);
        nextSearch = nullReplaceEqualDeep(fromSearch, nextSearch);
        const searchStr = this.options.stringifySearch(nextSearch);
        const hash = dest.hash === true ? currentLocation.hash : dest.hash ? functionalUpdate$1(dest.hash, currentLocation.hash) : void 0;
        const hashStr = hash ? `#${hash}` : "";
        let nextState = dest.state === true ? currentLocation.state : dest.state ? functionalUpdate$1(dest.state, currentLocation.state) : {};
        if (dest.state) nextState = replaceEqualDeep(currentLocation.state, nextState);
        const fullPath = `${nextPathname}${searchStr}${hashStr}`;
        let href;
        let publicHref;
        let external = false;
        if (this.rewrite) {
          const url = new URL(fullPath, this.origin);
          const rewrittenUrl = executeRewriteOutput(this.rewrite, url);
          href = url.href.replace(url.origin, "");
          if (rewrittenUrl.origin !== this.origin) {
            publicHref = rewrittenUrl.href;
            external = true;
          } else publicHref = rewrittenUrl.pathname + rewrittenUrl.search + rewrittenUrl.hash;
        } else {
          href = encodePathLikeUrl(fullPath);
          publicHref = href;
        }
        return {
          publicHref,
          href,
          pathname: nextPathname,
          search: nextSearch,
          searchStr,
          state: nextState,
          hash: hash ?? "",
          external,
          unmaskOnReload: dest.unmaskOnReload
        };
      };
      const next = build(opts);
      if (opts.mask) next.maskedLocation = build({
        from: opts.from,
        ...opts.mask
      });
      else if (this.options.routeMasks) {
        const match = findFlatMatch(next.pathname, this.processedTree);
        if (match) {
          const params = Object.assign(/* @__PURE__ */ Object.create(null), match.rawParams);
          const { from: _from, params: maskParams, ...maskProps } = match.route;
          const nextParams = resolveNextParams(maskParams, params);
          next.maskedLocation = build({
            from: opts.from,
            ...maskProps,
            params: nextParams
          });
        }
      }
      return next;
    };
    this.commitLocation = async ({ viewTransition, ignoreBlocker, ...next }) => {
      let historyAction;
      const isSameLocation = trimPathRight(this.latestLocation.href) === trimPathRight(next.href) && deepEqual(_getUserHistoryState(next.state), _getUserHistoryState(this.latestLocation.state));
      const previousCommitPromise = this._commitPromise;
      let resolve;
      const commitPromise = new Promise((done) => {
        resolve = done;
      });
      commitPromise.resolve = () => {
        resolve();
        previousCommitPromise?.resolve();
      };
      this._commitPromise = commitPromise;
      if (isSameLocation) this.load();
      else {
        let { maskedLocation, hashScrollIntoView, ...nextHistory } = next;
        if (maskedLocation) {
          nextHistory = {
            ...maskedLocation,
            state: {
              ...maskedLocation.state,
              __tempKey: void 0,
              __tempLocation: {
                ...nextHistory,
                search: nextHistory.searchStr,
                state: {
                  ...nextHistory.state,
                  __tempKey: void 0,
                  __tempLocation: void 0,
                  __TSR_key: void 0,
                  key: void 0
                }
              }
            }
          };
          if (nextHistory.unmaskOnReload ?? this.options.unmaskOnReload ?? false) nextHistory.state.__tempKey = this.tempLocationKey;
        }
        nextHistory.state.__hashScrollIntoViewOptions = hashScrollIntoView ?? this.options.defaultHashScrollIntoView ?? true;
        this.shouldViewTransition = viewTransition;
        historyAction = next.replace ? "REPLACE" : "PUSH";
        this.history[historyAction === "REPLACE" ? "replace" : "push"](nextHistory.publicHref, nextHistory.state, { ignoreBlocker });
        if (!this.history.subscribers.size) this.load({ action: { type: historyAction } });
      }
      this._scroll.next = next.resetScroll ?? true;
      return this._commitPromise;
    };
    this.buildAndCommitLocation = ({ replace, resetScroll, hashScrollIntoView, viewTransition, ignoreBlocker, ...rest } = {}) => {
      const location = this.buildLocation({
        ...rest,
        _includeValidateSearch: true
      });
      this._pendingLocation = location;
      const commitPromise = this.commitLocation({
        ...location,
        viewTransition,
        replace,
        resetScroll,
        hashScrollIntoView,
        ignoreBlocker
      });
      queueMicrotask(() => {
        if (this._pendingLocation === location) this._pendingLocation = void 0;
      });
      return commitPromise;
    };
    this.navigate = async ({ to, reloadDocument, href, publicHref, ...rest }) => {
      let hrefIsUrl = false;
      if (href) try {
        new URL(`${href}`);
        hrefIsUrl = true;
      } catch {
      }
      if (hrefIsUrl && !reloadDocument) reloadDocument = true;
      if (reloadDocument) {
        if (to !== void 0 || !href) {
          const location = this.buildLocation({
            to,
            ...rest
          });
          href = href ?? location.publicHref;
          publicHref = publicHref ?? location.publicHref;
        }
        const reloadHref = !hrefIsUrl && publicHref ? publicHref : href;
        if (isDangerousProtocol(reloadHref, this.protocolAllowlist)) {
          return;
        }
        if (!rest.ignoreBlocker) {
          const blockers = this.history.getBlockers?.() ?? [];
          for (const blocker of blockers) if (blocker?.blockerFn) {
            if (await blocker.blockerFn({
              currentLocation: this.latestLocation,
              nextLocation: this.latestLocation,
              action: "PUSH"
            })) return;
          }
        }
        if (rest.replace) window.location.replace(reloadHref);
        else window.location.href = reloadHref;
        return;
      }
      return this.buildAndCommitLocation({
        ...rest,
        href,
        to,
        _isNavigate: true
      });
    };
    this.load = async (opts) => {
      return loadServerRoute(this, opts);
    };
    this.startViewTransition = (fn2) => {
      this.shouldViewTransition ?? this.options.defaultViewTransition;
      this.shouldViewTransition = void 0;
      return fn2();
    };
    this.invalidate = (opts) => {
      const committedMatches = this._committed;
      const filter = opts?.filter;
      const preloads = this._preloads;
      const invalidIds = new Set([
        ...committedMatches,
        ...this._cache.values(),
        ...[...preloads?.values() ?? []].flat(),
        ...this._tx?.[3] ?? []
      ].filter((match) => !filter || filter(match)).map((match) => match.id));
      const discardedPreloads = [];
      for (const [controller, matches] of preloads ?? []) if (matches.some((match) => invalidIds.has(match.id))) {
        preloads.delete(controller);
        discardedPreloads.push(controller);
      }
      const invalidate = (d) => {
        if (invalidIds.has(d.id)) {
          const route = this.routesById[d.routeId];
          const next = {
            ...d,
            invalid: true,
            ...(opts?.forcePending || d.status === "error" || d.status === "notFound") && routeNeedsLoad(route) ? {
              status: "pending",
              error: void 0
            } : void 0
          };
          d._flight = void 0;
          return next;
        }
        return d;
      };
      this._committed = committedMatches.map(invalidate);
      for (const [id, match] of this._cache) if (invalidIds.has(id)) {
        match.invalid = true;
        if (opts?.forcePending) match.status = "pending";
      }
      for (const id of invalidIds) this._flights?.delete(id);
      for (const controller of discardedPreloads) controller.abort();
      this.shouldViewTransition = false;
      return this.load({ sync: opts?.sync });
    };
    this.resolveRedirect = (redirect2) => {
      const locationHeader = redirect2.headers.get("Location");
      if (!redirect2.options.href) {
        const href = this.buildLocation(redirect2.options).publicHref || "/";
        redirect2.options.href = href;
        redirect2.headers.set("Location", href);
      } else if (locationHeader) try {
        const url = new URL(locationHeader);
        if (this.origin && url.origin === this.origin) {
          const href = url.pathname + url.search + url.hash;
          redirect2.options.href = href;
          redirect2.headers.set("Location", href);
        }
      } catch {
      }
      if (redirect2.options.href && isDangerousProtocol(redirect2.options.href, this.protocolAllowlist)) throw new Error("Redirect blocked: unsafe protocol");
      if (!redirect2.headers.get("Location")) redirect2.headers.set("Location", redirect2.options.href);
      return redirect2;
    };
    this.clearCache = (opts) => {
      const cached = this._cache;
      const preloads = this._preloads;
      const filter = opts?.filter;
      const discarded = [];
      const discardedIds = [];
      for (const [id, match] of cached) if (!filter || filter(match)) {
        discardedIds.push(id);
        discarded.push(match);
      }
      const abort = [];
      for (const [controller, matches] of preloads ?? []) if (!filter || matches.some(filter)) {
        abort.push(controller);
        discarded.push(...matches);
      }
      for (const id of discardedIds) cached.delete(id);
      for (const controller of abort) preloads.delete(controller);
      for (const match of discarded) {
        const flight = match._flight;
        match._flight = void 0;
        if (flight && !--flight[2]) {
          if (this._flights?.get(match.id) === flight) this._flights.delete(match.id);
          abort.push(flight[1]);
        }
      }
      for (const controller of abort) controller.abort();
    };
    this.loadRouteChunk = loadRouteChunk;
    this.preloadRoute = (opts) => preloadClientRoute(this, opts);
    this.matchRoute = (location, opts) => {
      const matchLocation = {
        ...location,
        to: location.to ? this.resolvePathWithBase(location.from || "", location.to) : void 0,
        params: location.params || {},
        leaveParams: true
      };
      const next = this.buildLocation(matchLocation);
      const isPending = this.stores.status.get() === "pending";
      if (opts?.pending && !isPending) return false;
      const baseLocation = opts?.pending ?? !isPending ? this.latestLocation : this.stores.resolvedLocation.get() || this.stores.location.get();
      const match = findSingleMatch(next.pathname, opts?.caseSensitive ?? false, opts?.fuzzy ?? false, baseLocation.pathname, this.processedTree);
      if (!match) return false;
      if (location.params) {
        if (!deepEqual(match.rawParams, location.params, { partial: true })) return false;
      }
      if (opts?.includeSearch ?? true) return deepEqual(baseLocation.search, next.search, { partial: true }) ? match.rawParams : false;
      return match.rawParams;
    };
    this.getStoreConfig = getStoreConfig;
    this.update({
      defaultPreloadDelay: 50,
      defaultPendingMs: 1e3,
      defaultPendingMinMs: 500,
      context: void 0,
      ...options,
      caseSensitive: options.caseSensitive ?? false,
      notFoundMode: options.notFoundMode ?? "fuzzy",
      stringifySearch: options.stringifySearch ?? defaultStringifySearch,
      parseSearch: options.parseSearch ?? defaultParseSearch,
      protocolAllowlist: options.protocolAllowlist ?? DEFAULT_PROTOCOL_ALLOWLIST
    });
  }
  isShell() {
    return !!this.options.isShell;
  }
  get state() {
    return this.stores.__store.get();
  }
  setRoutes({ routesById, routesByPath, processedTree }) {
    this.routesById = routesById;
    this.routesByPath = routesByPath;
    this.processedTree = processedTree;
    const notFoundRoute = this.options.notFoundRoute;
    if (notFoundRoute) {
      notFoundRoute.init({ originalIndex: 99999999999 });
      this.routesById[notFoundRoute.id] = notFoundRoute;
    }
  }
  getRouteBranch(route) {
    let branch = this.routeBranchCache.get(route);
    if (!branch) {
      branch = buildRouteBranch(route);
      this.routeBranchCache.set(route, branch);
    }
    return branch;
  }
  matchRoutesInternal(next, opts) {
    const [initialMatchedRoutes, rawParams, foundRoute] = this.getMatchedRoutes(next.pathname);
    let matchedRoutes = initialMatchedRoutes;
    let isGlobalNotFound = false;
    if (foundRoute ? foundRoute.path !== "/" && rawParams["**"] : trimPathRight(next.pathname)) if (this.options.notFoundRoute) matchedRoutes = [...matchedRoutes, this.options.notFoundRoute];
    else isGlobalNotFound = true;
    const _notFoundRouteId = isGlobalNotFound ? findGlobalNotFoundRouteId(this.options.notFoundMode, matchedRoutes) : void 0;
    const matches = new Array(matchedRoutes.length);
    const committed = this._committed;
    const previousAt = (route, index) => {
      const match = committed[index];
      return match?.routeId === route.id ? match : route === this.options.notFoundRoute ? committed.find((candidate) => candidate.routeId === route.id) : void 0;
    };
    let strictParams;
    for (let index = 0; index < matchedRoutes.length; index++) {
      const route = matchedRoutes[index];
      const parentMatch = matches[index - 1];
      let preMatchSearch;
      let strictMatchSearch;
      let searchError;
      {
        const parentSearch = parentMatch?.search ?? next.search;
        const parentStrictSearch = parentMatch?._strictSearch ?? void 0;
        try {
          const strictSearch = validateSearch(route.options.validateSearch, { ...parentSearch }) ?? void 0;
          preMatchSearch = {
            ...parentSearch,
            ...strictSearch
          };
          strictMatchSearch = {
            ...parentStrictSearch,
            ...strictSearch
          };
        } catch (err) {
          let searchParamError = err;
          if (!(err instanceof SearchParamError)) searchParamError = new SearchParamError(err.message, { cause: err });
          if (opts?.throwOnError) throw searchParamError;
          preMatchSearch = parentSearch;
          strictMatchSearch = {};
          searchError = searchParamError;
        }
      }
      let loaderDeps = "";
      let loaderDepsHash = "";
      try {
        loaderDeps = route.options.loaderDeps?.({ search: preMatchSearch }) ?? "";
        loaderDepsHash = loaderDeps ? JSON.stringify(loaderDeps) || "" : "";
      } catch (cause2) {
        if (opts?.throwOnError) throw cause2;
        searchError ??= cause2;
      }
      const { interpolatedPath, usedParams } = interpolatePath({
        path: route.fullPath,
        params: rawParams,
        decoder: this.pathParamsDecoder,
        server: this.isServer
      });
      const matchId = route.id + interpolatedPath + loaderDepsHash;
      const previousMatch = previousAt(route, index);
      const existingMatch = this._cache.get(matchId) ?? (previousMatch?.id === matchId ? previousMatch : void 0);
      strictParams = existingMatch?._strictParams ?? Object.assign(usedParams, strictParams);
      let paramsError;
      if (!existingMatch) try {
        extractStrictParams(route, strictParams);
      } catch (err) {
        if (isNotFound(err) || isRedirect(err)) paramsError = err;
        else paramsError = new PathParamError(err.message, { cause: err });
        if (opts?.throwOnError) throw paramsError;
      }
      const cause = previousMatch ? "stay" : "enter";
      let match;
      if (existingMatch) match = {
        ...existingMatch,
        cause,
        search: previousMatch ? nullReplaceEqualDeep(previousMatch.search, preMatchSearch) : nullReplaceEqualDeep(existingMatch.search, preMatchSearch),
        _strictSearch: strictMatchSearch,
        searchError
      };
      else {
        const status = routeNeedsLoad(route) ? "pending" : "success";
        match = {
          id: matchId,
          ssr: void 0,
          index,
          routeId: route.id,
          params: previousMatch?.params ?? strictParams,
          _strictParams: strictParams,
          pathname: interpolatedPath,
          updatedAt: Date.now(),
          search: previousMatch ? nullReplaceEqualDeep(previousMatch.search, preMatchSearch) : preMatchSearch,
          _strictSearch: strictMatchSearch,
          searchError,
          status,
          isFetching: false,
          error: void 0,
          paramsError,
          context: {},
          abortController: opts?._controller ?? new AbortController(),
          cause,
          loaderDeps: previousMatch ? replaceEqualDeep(previousMatch.loaderDeps, loaderDeps) : loaderDeps,
          invalid: false,
          preload: false,
          staticData: route.options.staticData || {},
          fullPath: route.fullPath
        };
      }
      const _notFound = _notFoundRouteId === route.id;
      if (match._notFound && !_notFound) match.error = void 0;
      match._notFound = _notFound;
      matches[index] = match;
    }
    for (let index = 0; index < matches.length; index++) {
      const match = matches[index];
      match.params = match.cause === "stay" ? nullReplaceEqualDeep(match.params, strictParams) : strictParams;
      if (opts?._controller) match.context = {};
    }
    return matches;
  }
  /**
  * Lightweight route matching for buildLocation.
  * Only computes fullPath, accumulated search, and params - skipping expensive
  * operations like AbortController, loaderDeps, and full match objects.
  */
  matchRoutesLightweight(location) {
    const lastRouteId = last(this.stores.ids.get());
    const lastStateMatch = lastRouteId ? this.stores.byRoute.get(lastRouteId).get() : void 0;
    const lastStateMatchId = lastStateMatch?.id;
    const cached = this.lightweightCache.get(location);
    if (cached && cached[0] === lastStateMatchId) return cached[1];
    const [matchedRoutes, rawParams] = this.getMatchedRoutes(location.pathname);
    const lastRoute = last(matchedRoutes);
    const accumulatedSearch = { ...location.search };
    for (const route of matchedRoutes) try {
      Object.assign(accumulatedSearch, validateSearch(route.options.validateSearch, accumulatedSearch));
    } catch {
    }
    const canReuseParams = lastStateMatch && lastStateMatch.routeId === lastRoute.id && lastStateMatch.pathname === location.pathname;
    let params;
    if (canReuseParams) params = lastStateMatch.params;
    else {
      const strictParams = Object.assign(/* @__PURE__ */ Object.create(null), rawParams);
      for (const route of matchedRoutes) try {
        extractStrictParams(route, strictParams);
      } catch {
      }
      params = strictParams;
    }
    const result = [
      matchedRoutes,
      lastRoute.fullPath,
      accumulatedSearch,
      params
    ];
    this.lightweightCache.set(location, [lastStateMatchId, result]);
    return result;
  }
};
var SearchParamError = class extends Error {
};
var PathParamError = class extends Error {
};
function validateSearch(validateSearch2, input) {
  if (validateSearch2 == null) return {};
  if ("~standard" in validateSearch2) {
    const result = validateSearch2["~standard"].validate(input);
    if (result instanceof Promise) throw new SearchParamError("Async validation not supported");
    if (result.issues) throw new SearchParamError(JSON.stringify(result.issues, void 0, 2), { cause: result });
    return result.value;
  }
  if ("parse" in validateSearch2) return validateSearch2.parse(input);
  if (typeof validateSearch2 === "function") return validateSearch2(input);
  return {};
}
function applySearchMiddleware(search, dest, destRoutes, includeValidateSearch) {
  const middlewares = [];
  for (const route of destRoutes) {
    const routeOptions = route.options;
    if ("search" in routeOptions) {
      if (routeOptions.search?.middlewares) middlewares.push(...routeOptions.search.middlewares);
    } else if (routeOptions.preSearchFilters || routeOptions.postSearchFilters) {
      const legacyMiddleware = ({ search: search2, next }) => {
        const result = next(routeOptions.preSearchFilters ? routeOptions.preSearchFilters.reduce((prev, next2) => next2(prev), search2) : search2);
        return routeOptions.postSearchFilters ? routeOptions.postSearchFilters.reduce((prev, next2) => next2(prev), result) : result;
      };
      middlewares.push(legacyMiddleware);
    }
    const routeValidateSearch = routeOptions.validateSearch;
    if (includeValidateSearch && routeValidateSearch) {
      const validate = ({ search: search2, next, meta }) => {
        const result = next(search2);
        try {
          const validated = validateSearch(routeValidateSearch, result);
          if (meta && validated) {
            for (const key in validated) if (!(key in result)) (meta.defaulted ||= /* @__PURE__ */ new Map()).set(key, validated[key]);
          }
          return {
            ...result,
            ...validated
          };
        } catch {
        }
        return result;
      };
      middlewares.push(validate);
    }
  }
  const applyNext = (index, currentSearch, meta) => {
    if (index >= middlewares.length) {
      if (!dest.search) return {};
      if (dest.search === true) return currentSearch;
      const result = functionalUpdate$1(dest.search, currentSearch);
      if (meta) meta.explicit = result;
      return result;
    }
    const next = (newSearch, collectMeta) => {
      if (collectMeta) {
        const nextMeta = meta || {};
        return {
          search: applyNext(index + 1, newSearch, nextMeta),
          meta: nextMeta
        };
      }
      return applyNext(index + 1, newSearch, meta);
    };
    return middlewares[index]({
      search: currentSearch,
      next,
      meta
    });
  };
  return applyNext(0, search);
}
function findGlobalNotFoundRouteId(notFoundMode, routes) {
  if (notFoundMode !== "root") {
    let fallback;
    for (let i = routes.length - 1; i >= 0; i--) {
      const route = routes[i];
      if (route.options.notFoundComponent) return route.id;
      fallback ||= route.children && route.id;
    }
    if (fallback) return fallback;
  }
  return rootRouteId;
}
function resolveNextParams(spec, base) {
  if (spec === false || spec === null) return /* @__PURE__ */ Object.create(null);
  if ((spec ?? true) === true) return base;
  const next = Object.assign(/* @__PURE__ */ Object.create(null), base);
  return Object.assign(next, functionalUpdate$1(spec, next));
}
function extractStrictParams(route, accumulatedParams) {
  const parseParams = route.options.params?.parse ?? route.options.parseParams;
  if (parseParams) Object.assign(accumulatedParams, parseParams(accumulatedParams));
}
function waitForReason(value, signal, onLate) {
  const promise = Promise.resolve(value);
  if (signal.aborted) {
    return Promise.race([Promise.reject(signal.reason), promise]);
  }
  return new Promise((resolve, reject) => {
    const abort = () => reject(signal.reason);
    signal.addEventListener("abort", abort, { once: true });
    promise.then((result) => {
      if (signal.aborted) ;
      else resolve(result);
    }, reject).finally(() => signal.removeEventListener("abort", abort));
  });
}
const SUCCESS = 0;
const ERROR = 1;
const NOT_FOUND = 2;
const REDIRECTED = 3;
const SKIPPED = 4;
function getRoute(router2, match) {
  return router2.routesById[match.routeId];
}
function normalize(value, rejected) {
  if (isRedirect(value)) return [REDIRECTED, value];
  if (isNotFound(value)) return [NOT_FOUND, value];
  if (rejected && typeof value?.then === "function") value = new Error("A Promise was thrown", { cause: value });
  return rejected ? [ERROR, value] : [SUCCESS, value];
}
function normalizeError(router2, lane, route, cause, signal, notify = true) {
  signal?.throwIfAborted();
  let outcome = normalize(cause, true);
  if (outcome[0] !== ERROR) return materializeRedirect(router2, lane, route, outcome, signal, notify);
  try {
    route.options.onError?.(outcome[1]);
  } catch (onErrorCause) {
    outcome = normalize(onErrorCause, true);
  }
  signal?.throwIfAborted();
  return materializeRedirect(router2, lane, route, outcome, signal, notify);
}
function materializeRedirect(router2, lane, route, outcome, signal, notify = true) {
  if (outcome[0] !== REDIRECTED) return outcome;
  signal?.throwIfAborted();
  try {
    outcome[1].options._fromLocation = lane.location;
    router2.resolveRedirect(outcome[1]);
    signal?.throwIfAborted();
    return outcome;
  } catch (cause) {
    signal?.throwIfAborted();
    return notify ? normalizeError(router2, lane, route, cause, signal, false) : [ERROR, cause];
  }
}
function maybe(value, cause) {
  if (cause !== void 0) return {
    status: "error",
    error: cause
  };
  return {
    status: "success",
    value
  };
}
function navigateFrom(router2, location) {
  return (options) => router2.navigate({
    ...options,
    _fromLocation: location
  });
}
function waitFor(value, signal) {
  return signal ? waitForReason(value, signal) : value;
}
async function resolveSsr(router2, lane, index) {
  const match = lane.matches[index];
  const route = getRoute(router2, match);
  const parentSsr = lane.matches[index - 1]?.ssr;
  if (router2.isShell()) return route.id === rootRouteId;
  if (parentSsr === false) return false;
  const inherit = (value) => {
    return value === true && parentSsr === "data-only" ? "data-only" : value;
  };
  const defaultSsr = router2.options.defaultSsr ?? true;
  const inheritedDefault = inherit(defaultSsr);
  match.ssr = inheritedDefault;
  const option = route.options.ssr;
  if (option === void 0) return inheritedDefault;
  if (typeof option !== "function") return inherit(option);
  return inherit(await option({
    search: maybe(match.search, match.searchError),
    params: maybe(match.params, match.paramsError),
    location: lane.location,
    matches: lane.matches.map((candidate) => ({
      index: candidate.index,
      pathname: candidate.pathname,
      fullPath: candidate.fullPath,
      staticData: candidate.staticData,
      id: candidate.id,
      routeId: candidate.routeId,
      search: maybe(candidate.search, candidate.searchError),
      params: maybe(candidate.params, candidate.paramsError),
      ssr: candidate.ssr
    }))
  }) ?? defaultSsr);
}
function stampNotFound(match, outcome) {
  if (outcome[0] === NOT_FOUND && !outcome[1].routeId) outcome[1].routeId = match.routeId;
  return outcome;
}
async function contextualize(router2, lane, signal) {
  const globalBoundary = lane.matches.findIndex((match) => match._notFound);
  let end = globalBoundary < 0 ? lane.matches.length : globalBoundary + 1;
  let failure;
  let parentContext = { ...router2.options.context ?? {} };
  for (let index = 0; index < end; index++) {
    const match = lane.matches[index];
    const route = getRoute(router2, match);
    try {
      match.ssr = await resolveSsr(router2, lane, index);
    } catch (cause) {
      signal?.throwIfAborted();
      failure = [index, stampNotFound(match, normalizeError(router2, lane, route, cause, signal))];
      end = index;
    }
    signal?.throwIfAborted();
    if (failure?.[1][0] === REDIRECTED) break;
    match.__beforeLoadContext = void 0;
    let context = parentContext;
    try {
      let routeContext;
      if (route.options.context) {
        const routeContextOptions = {
          deps: match.loaderDeps,
          params: match.params,
          context: parentContext,
          location: lane.location,
          navigate: navigateFrom(router2, lane.location),
          buildLocation: router2.buildLocation,
          cause: match.cause,
          abortController: match.abortController,
          preload: false,
          matches: lane.matches,
          routeId: route.id
        };
        routeContext = route.options.context(routeContextOptions) ?? void 0;
      }
      context = {
        ...parentContext,
        ...routeContext
      };
      match.context = context;
    } catch (cause) {
      signal?.throwIfAborted();
      if (!failure) failure = [index, stampNotFound(match, normalizeError(router2, lane, route, cause, signal))];
      end = index;
      break;
    }
    signal?.throwIfAborted();
    if (failure) break;
    const validationError = match.paramsError ?? match.searchError;
    if (validationError !== void 0) {
      failure = [index, stampNotFound(match, normalizeError(router2, lane, route, validationError, signal))];
      end = index;
      break;
    }
    signal?.throwIfAborted();
    if (match.ssr === false || !route.options.beforeLoad) {
      parentContext = context;
      continue;
    }
    const abortController = match.abortController;
    const options = {
      search: match.search,
      abortController,
      params: match.params,
      preload: false,
      context,
      location: lane.location,
      navigate: navigateFrom(router2, lane.location),
      buildLocation: router2.buildLocation,
      cause: match.cause,
      matches: lane.matches,
      routeId: route.id,
      ...router2.options.additionalContext
    };
    try {
      const beforeLoadContext = await route.options.beforeLoad(options);
      signal?.throwIfAborted();
      const outcome = stampNotFound(match, materializeRedirect(router2, lane, route, normalize(beforeLoadContext, false), signal));
      if (outcome[0] !== SUCCESS) {
        failure = [index, outcome];
        end = index;
        break;
      }
      match.__beforeLoadContext = beforeLoadContext;
      match.context = {
        ...context,
        ...beforeLoadContext
      };
      parentContext = match.context;
    } catch (cause) {
      signal?.throwIfAborted();
      failure = [index, stampNotFound(match, normalizeError(router2, lane, route, cause, signal))];
      end = index;
      break;
    }
  }
  return {
    location: lane.location,
    matches: lane.matches,
    end,
    failure
  };
}
function getLoaderContext(router2, lane, match, route, index, tasks) {
  return {
    params: match.params,
    deps: match.loaderDeps,
    preload: false,
    parentMatchPromise: tasks[index - 1]?.match,
    abortController: match.abortController,
    context: match.context,
    location: lane.location,
    navigate: navigateFrom(router2, lane.location),
    cause: match.cause,
    route,
    ...router2.options.additionalContext
  };
}
function createLoaderTask(router2, lane, index, tasks, signal) {
  const match = lane.matches[index];
  const route = getRoute(router2, match);
  let outcome;
  if (match.ssr === false) outcome = Promise.resolve([SKIPPED]);
  else {
    const routeLoader = route.options.loader;
    const loader = typeof routeLoader === "function" ? routeLoader : routeLoader?.handler;
    if (!loader) outcome = Promise.resolve([SUCCESS, void 0]);
    else outcome = Promise.resolve().then(() => loader(getLoaderContext(router2, lane, match, route, index, tasks))).then((result) => normalize(result, false), (cause) => normalize(cause, true)).then((result) => {
      if (signal?.aborted || match.abortController.signal.reason === lane) return [SKIPPED];
      if (result[0] === ERROR) result = normalizeError(router2, lane, route, result[1], signal);
      else result = materializeRedirect(router2, lane, route, result, signal);
      return stampNotFound(match, result);
    });
  }
  const parentMatch = outcome.then((result) => {
    const snapshot = { ...match };
    if (result[0] === SUCCESS) {
      snapshot.loaderData = result[1];
      snapshot.status = "success";
      snapshot.error = void 0;
      snapshot.invalid = false;
      snapshot.isFetching = false;
    } else if (result[0] === ERROR) {
      snapshot.status = "error";
      snapshot.error = result[1];
    } else if (result[0] === NOT_FOUND) {
      snapshot.status = "notFound";
      snapshot.error = result[1];
    }
    return snapshot;
  });
  return {
    index,
    outcome,
    match: parentMatch
  };
}
async function getNotFoundBoundary(router2, matches, indexed, signal, fallback = 0) {
  const cause = indexed?.[1][1];
  let index = cause?.routeId ? matches.findIndex((match) => match.routeId === cause.routeId) : indexed?.[0] ?? matches.length - 1;
  if (index < 0) index = 0;
  for (let candidate = index; candidate >= 0; candidate--) {
    const route = getRoute(router2, matches[candidate]);
    try {
      const loading = loadRouteChunk(route, false);
      if (loading) await loading;
    } catch {
      signal?.throwIfAborted();
    }
    signal?.throwIfAborted();
    if (route.options.notFoundComponent) return candidate;
  }
  return cause?.routeId ? index : fallback;
}
function abortMatches(matches, start = 0, reason) {
  for (let index = start; index < matches.length; index++) matches[index].abortController.abort(reason);
}
async function applyFailure(router2, lane, indexed, signal) {
  if (!indexed) {
    const boundary2 = lane.matches.findIndex((match2) => match2._notFound);
    if (boundary2 >= 0) {
      abortMatches(lane.matches, boundary2 + 1);
      return {
        status: 404,
        boundary: boundary2,
        kind: NOT_FOUND
      };
    }
    return { status: 200 };
  }
  const [index, outcome] = indexed;
  if (outcome[0] === ERROR) {
    const match2 = lane.matches[index];
    match2._notFound = void 0;
    match2.status = "error";
    match2.error = outcome[1];
    match2.isFetching = false;
    abortMatches(lane.matches, index + 1);
    return {
      status: 500,
      boundary: index,
      kind: ERROR
    };
  }
  const boundary = indexed[2] ?? await getNotFoundBoundary(router2, lane.matches, indexed, signal);
  const match = lane.matches[boundary];
  const cause = outcome[1];
  cause.routeId = match.routeId;
  match._notFound = void 0;
  if (match.routeId === router2.routeTree.id) {
    match.status = "success";
    match._notFound = true;
    match.error = cause;
  } else {
    match.status = "notFound";
    match.error = cause;
  }
  match.isFetching = false;
  abortMatches(lane.matches, boundary + 1);
  return {
    status: 404,
    boundary,
    kind: NOT_FOUND
  };
}
async function loadNormalChunks(router2, lane, end, signal) {
  const chunks = [];
  for (let index = 0; index < lane.matches.length; index++) {
    const match = lane.matches[index];
    if (index >= end || match.ssr !== true || match.status !== "success") continue;
    const route = getRoute(router2, match);
    try {
      const loading = loadRouteChunk(route);
      if (loading) {
        const chunk = loading.then(() => {
          signal?.throwIfAborted();
        }, (cause) => {
          signal?.throwIfAborted();
          return [index, stampNotFound(match, normalizeError(router2, lane, route, cause, signal))];
        });
        chunk.catch(() => {
        });
        chunks.push(chunk);
      }
    } catch (cause) {
      signal?.throwIfAborted();
      chunks.push([index, stampNotFound(match, normalizeError(router2, lane, route, cause, signal))]);
    }
  }
  for (const chunk of chunks) {
    const indexed = Array.isArray(chunk) ? chunk : await chunk;
    if (indexed) return indexed;
  }
}
async function projectLane(router2, lane, signal) {
  for (const match of lane.matches) {
    const routeOptions = getRoute(router2, match).options;
    if (routeOptions.head || routeOptions.scripts || routeOptions.headers) {
      const context = {
        ssr: router2.options.ssr,
        matches: lane.matches,
        match,
        params: match.params,
        loaderData: match.loaderData
      };
      try {
        const [head, scripts, headers] = await Promise.all([
          routeOptions.head?.(context),
          routeOptions.scripts?.(context),
          routeOptions.headers?.(context)
        ]);
        signal?.throwIfAborted();
        match.meta = head?.meta;
        match.links = head?.links;
        match.headScripts = head?.scripts;
        match.styles = head?.styles;
        match.scripts = scripts;
        match.headers = headers;
      } catch (cause) {
        signal?.throwIfAborted();
        console.error(cause);
      }
    }
    if (match.ssr === false || match.status !== "success" || match._notFound) break;
  }
}
async function executeServerLane(router2, location, matchedMatches, signal) {
  const matched = {
    location,
    matches: matchedMatches.map((match) => ({
      ...match,
      __beforeLoadContext: void 0,
      context: {},
      isFetching: false,
      abortController: new AbortController()
    }))
  };
  const abortLane = () => abortMatches(matched.matches, 0, signal?.reason);
  if (signal?.aborted) {
    abortLane();
    signal.throwIfAborted();
  }
  signal?.addEventListener("abort", abortLane, { once: true });
  try {
    const plannedGlobalBoundary = matched.matches.findIndex((match) => match._notFound);
    if (router2.options.notFoundMode !== "root" && plannedGlobalBoundary >= 0) {
      const boundary = await getNotFoundBoundary(router2, matched.matches, void 0, signal, plannedGlobalBoundary);
      if (boundary !== plannedGlobalBoundary) {
        matched.matches[plannedGlobalBoundary]._notFound = void 0;
        matched.matches[boundary]._notFound = true;
      }
    }
    const lane = await contextualize(router2, matched, signal);
    signal?.throwIfAborted();
    let loaderEnd = lane.end;
    if (lane.failure?.[1][0] === REDIRECTED) loaderEnd = 0;
    else if (lane.failure?.[1][0] === NOT_FOUND) {
      lane.failure[2] = await getNotFoundBoundary(router2, lane.matches, lane.failure, signal);
      loaderEnd = Math.min(loaderEnd, lane.failure[2] + 1);
    }
    const tasks = [];
    for (let index = 0; index < loaderEnd; index++) {
      const task = createLoaderTask(router2, lane, index, tasks, signal);
      tasks.push(task);
    }
    let loaderFailure;
    let control = lane.failure?.[1][0] === REDIRECTED ? lane.failure : void 0;
    try {
      await Promise.all(tasks.map((task) => task.outcome.then((loadedOutcome) => {
        const match = lane.matches[task.index];
        const outcome = loadedOutcome;
        if (outcome[0] === SUCCESS) {
          match.loaderData = outcome[1];
          match.status = "success";
          match.error = void 0;
          match.invalid = false;
          match.isFetching = false;
          match.updatedAt = Date.now();
        } else if (outcome[0] === REDIRECTED) {
          control = [task.index, outcome];
          throw control;
        } else {
          if (match.ssr !== false) {
            match.status = "success";
            match.error = void 0;
            match.invalid = true;
            match.isFetching = false;
          }
          if (!loaderFailure && outcome[0] !== SKIPPED) loaderFailure = [task.index, outcome];
        }
      })));
    } catch (cause) {
      if (!Array.isArray(cause)) throw cause;
      control = cause;
    }
    signal?.throwIfAborted();
    if (control?.[1][0] === REDIRECTED) {
      abortMatches(lane.matches, 0, lane);
      return {
        type: "redirect",
        redirect: control[1][1]
      };
    }
    let failure = lane.failure ?? loaderFailure;
    const plannedBoundary = lane.matches.findIndex((match) => match._notFound);
    let readinessEnd;
    if (failure) {
      const outcomeEnd = failure[2] ??= failure[1][0] === NOT_FOUND ? await getNotFoundBoundary(router2, lane.matches, failure, signal) : failure[0];
      for (const task of tasks) {
        if (task.index >= outcomeEnd) break;
        const outcome = await task.outcome;
        if (outcome[0] !== SUCCESS && outcome[0] < REDIRECTED && !("loaderData" in lane.matches[task.index])) {
          failure = [task.index, outcome];
          failure[2] = outcome[0] === NOT_FOUND ? await getNotFoundBoundary(router2, lane.matches, failure, signal) : task.index;
          break;
        }
      }
      readinessEnd = failure[2];
    } else readinessEnd = plannedBoundary < 0 ? lane.matches.length : plannedBoundary;
    const requiredFailure = await loadNormalChunks(router2, lane, readinessEnd, signal);
    signal?.throwIfAborted();
    if (requiredFailure) {
      if (requiredFailure[1][0] === REDIRECTED) {
        abortMatches(lane.matches);
        return {
          type: "redirect",
          redirect: requiredFailure[1][1]
        };
      }
      failure = requiredFailure;
    }
    const terminal = await applyFailure(router2, lane, failure, signal);
    if (terminal.boundary !== void 0) {
      const match = lane.matches[terminal.boundary];
      if (match.ssr === true) {
        const route = getRoute(router2, match);
        try {
          if (terminal.kind === ERROR) await loadRouteChunk(route, "errorComponent");
          else if (match._notFound) await Promise.all([loadRouteChunk(route), loadRouteChunk(route, "notFoundComponent")]);
          else await loadRouteChunk(route, "notFoundComponent");
        } catch {
        }
        signal?.throwIfAborted();
      }
    }
    signal?.throwIfAborted();
    await projectLane(router2, {
      location: lane.location,
      matches: lane.matches
    }, signal);
    signal?.throwIfAborted();
    router2.serverSsr?.onCleanup(abortLane);
    return {
      type: "render",
      status: terminal.status,
      matches: lane.matches
    };
  } finally {
    signal?.removeEventListener("abort", abortLane);
  }
}
async function loadServerRoute(router2, opts) {
  router2.updateLatestLocation();
  const next = router2.latestLocation;
  const previous = router2._committed;
  let result;
  try {
    const canonical = router2.buildLocation({
      to: next.pathname,
      search: true,
      params: true,
      hash: true,
      state: true,
      _includeValidateSearch: true
    });
    if (next.publicHref !== canonical.publicHref) throw redirect({ href: canonical.publicHref || "/" });
    const changeInfo = getLocationChangeInfo(next, router2.stores.resolvedLocation.get());
    router2.emit({
      type: "onBeforeNavigate",
      ...changeInfo
    });
    router2.emit({
      type: "onBeforeLoad",
      ...changeInfo
    });
    opts?._signal?.throwIfAborted();
    result = await waitFor(executeServerLane(router2, next, router2.matchRoutes(next), opts?._signal), opts?._signal);
    opts?._signal?.throwIfAborted();
  } catch (cause) {
    opts?._signal?.throwIfAborted();
    if (!isRedirect(cause)) throw cause;
    cause.options._fromLocation = next;
    result = {
      type: "redirect",
      redirect: router2.resolveRedirect(cause)
    };
  }
  router2._serverResult = result;
  router2.batch(() => {
    router2.stores.location.set(next);
    router2.stores.status.set("idle");
    if (result.type === "render") {
      router2.stores.setMatches(result.matches);
      router2.stores.resolvedLocation.set(next);
    }
  });
  if (result.type === "render") {
    router2._committed = result.matches;
    runRouteLifecycle(router2, previous, result.matches);
  }
  router2._commitPromise?.resolve();
  router2._commitPromise = void 0;
}
const isServer = true;
var BaseRoute = class {
  get to() {
    return this._to;
  }
  get id() {
    return this._id;
  }
  get path() {
    return this._path;
  }
  get fullPath() {
    return this._fullPath;
  }
  constructor(options) {
    this.init = (opts) => {
      this.originalIndex = opts.originalIndex;
      const options2 = this.options;
      const isRoot = !options2?.path && !options2?.id;
      this.parentRoute = this.options.getParentRoute?.();
      if (isRoot) this._path = rootRouteId;
      else if (!this.parentRoute) {
        invariant$1();
      }
      let path = isRoot ? rootRouteId : options2?.path;
      if (path && path !== "/") path = trimPathLeft(path);
      const customId = options2?.id || path;
      let id = isRoot ? rootRouteId : joinPaths([this.parentRoute.id === "__root__" ? "" : this.parentRoute.id, customId]);
      if (path === "__root__") path = "/";
      if (id !== "__root__") id = joinPaths(["/", id]);
      const fullPath = id === "__root__" ? "/" : joinPaths([this.parentRoute.fullPath, path]);
      this._path = path;
      this._id = id;
      this._fullPath = fullPath;
      this._to = trimPathRight(fullPath);
    };
    this.addChildren = (children) => {
      return this._addFileChildren(children);
    };
    this._addFileChildren = (children) => {
      if (Array.isArray(children)) this.children = children;
      if (typeof children === "object" && children !== null) this.children = Object.values(children);
      return this;
    };
    this._addFileTypes = () => {
      return this;
    };
    this.updateLoader = (options2) => {
      Object.assign(this.options, options2);
      return this;
    };
    this.update = (options2) => {
      Object.assign(this.options, options2);
      return this;
    };
    this.lazy = (lazyFn) => {
      this.lazyFn = lazyFn;
      return this;
    };
    this.redirect = (opts) => redirect({
      from: this.fullPath,
      ...opts
    });
    this.options = options || {};
    this.isRoot = !options?.getParentRoute;
    if (options?.id && options?.path) throw new Error(`Route cannot have both an 'id' and a 'path' option.`);
  }
};
var BaseRootRoute = class extends BaseRoute {
  constructor(options) {
    super(options);
  }
};
function useLoaderData(opts) {
  return useMatch({
    from: opts.from,
    strict: opts.strict,
    structuralSharing: opts.structuralSharing,
    select: (match) => {
      return opts.select ? opts.select(match.loaderData) : match.loaderData;
    }
  });
}
function useLoaderDeps(opts) {
  const { select, ...rest } = opts;
  return useMatch({
    ...rest,
    select: (match) => {
      return select ? select(match.loaderDeps) : match.loaderDeps;
    }
  });
}
function useSearch(opts) {
  return useMatch({
    from: opts.from,
    strict: opts.strict,
    shouldThrow: opts.shouldThrow,
    structuralSharing: opts.structuralSharing,
    select: (match) => {
      return opts.select ? opts.select(match.search) : match.search;
    }
  });
}
function useNavigate(_defaultOpts) {
  const router2 = useRouter();
  return reactExports.useCallback((options) => {
    return router2.navigate({
      ...options,
      from: options.from ?? _defaultOpts?.from
    });
  }, [_defaultOpts?.from, router2]);
}
function useRouteContext(opts) {
  return useMatch({
    ...opts,
    select: (match) => opts.select ? opts.select(match.context) : match.context
  });
}
function useLinkProps(options, forwardedRef) {
  const router2 = useRouter();
  const innerRef = useForwardedRef(forwardedRef);
  const { activeProps, inactiveProps, activeOptions, to, preload: userPreload, preloadDelay: userPreloadDelay, preloadIntentProximity: _preloadIntentProximity, hashScrollIntoView, replace, startTransition, resetScroll, viewTransition, children, target, disabled, style, className, onClick, onBlur, onFocus, onMouseEnter, onMouseLeave, onTouchStart, ignoreBlocker, params: _params, search: _search, hash: _hash, state: _state, mask: _mask, reloadDocument: _reloadDocument, unsafeRelative: _unsafeRelative, from: _from, _fromLocation, ...propsSafeToSpread } = options;
  {
    const safeInternal = isSafeInternal(to);
    if (typeof to === "string" && !safeInternal && to.indexOf(":") > -1) try {
      new URL(to);
      if (isDangerousProtocol(to, router2.protocolAllowlist)) {
        if (false) ;
        return {
          ...propsSafeToSpread,
          ref: innerRef,
          href: void 0,
          ...children && { children },
          ...target && { target },
          ...disabled && { disabled },
          ...style && { style },
          ...className && { className }
        };
      }
      return {
        ...propsSafeToSpread,
        ref: innerRef,
        href: to,
        ...children && { children },
        ...target && { target },
        ...disabled && { disabled },
        ...style && { style },
        ...className && { className }
      };
    } catch {
    }
    const next = router2.buildLocation({
      ...options,
      from: options.from
    });
    const hrefOption = getHrefOption(next.maskedLocation ? next.maskedLocation.publicHref : next.publicHref, next.maskedLocation ? next.maskedLocation.external : next.external, router2.history, disabled);
    const externalLink2 = (() => {
      if (hrefOption?.external) {
        if (isDangerousProtocol(hrefOption.href, router2.protocolAllowlist)) {
          return;
        }
        return hrefOption.href;
      }
      if (safeInternal) return void 0;
      if (typeof to === "string" && to.indexOf(":") > -1) try {
        new URL(to);
        if (isDangerousProtocol(to, router2.protocolAllowlist)) {
          if (false) ;
          return;
        }
        return to;
      } catch {
      }
    })();
    const isActive2 = (() => {
      if (externalLink2) return false;
      const currentLocation = router2.stores.location.get();
      const exact = activeOptions?.exact ?? false;
      if (exact) {
        if (!exactPathTest(currentLocation.pathname, next.pathname, router2.basepath)) return false;
      } else {
        const currentPathSplit = removeTrailingSlash(currentLocation.pathname, router2.basepath);
        const nextPathSplit = removeTrailingSlash(next.pathname, router2.basepath);
        if (!(currentPathSplit.startsWith(nextPathSplit) && (currentPathSplit.length === nextPathSplit.length || currentPathSplit[nextPathSplit.length] === "/"))) return false;
      }
      if (activeOptions?.includeSearch ?? true) {
        if (currentLocation.search !== next.search) {
          const currentSearchEmpty = !currentLocation.search || typeof currentLocation.search === "object" && !hasKeys(currentLocation.search);
          const nextSearchEmpty = !next.search || typeof next.search === "object" && !hasKeys(next.search);
          if (!(currentSearchEmpty && nextSearchEmpty)) {
            if (!deepEqual(currentLocation.search, next.search, {
              partial: !exact,
              ignoreUndefined: !activeOptions?.explicitUndefined
            })) return false;
          }
        }
      }
      if (activeOptions?.includeHash) return false;
      return true;
    })();
    if (externalLink2) return {
      ...propsSafeToSpread,
      ref: innerRef,
      href: externalLink2,
      ...children && { children },
      ...target && { target },
      ...disabled && { disabled },
      ...style && { style },
      ...className && { className }
    };
    const resolvedActiveProps2 = isActive2 ? functionalUpdate$1(activeProps, {}) ?? STATIC_ACTIVE_OBJECT : STATIC_EMPTY_OBJECT;
    const resolvedInactiveProps2 = isActive2 ? STATIC_EMPTY_OBJECT : functionalUpdate$1(inactiveProps, {}) ?? STATIC_EMPTY_OBJECT;
    const resolvedStyle2 = (() => {
      const baseStyle = style;
      const activeStyle = resolvedActiveProps2.style;
      const inactiveStyle = resolvedInactiveProps2.style;
      if (!baseStyle && !activeStyle && !inactiveStyle) return;
      if (baseStyle && !activeStyle && !inactiveStyle) return baseStyle;
      if (!baseStyle && activeStyle && !inactiveStyle) return activeStyle;
      if (!baseStyle && !activeStyle && inactiveStyle) return inactiveStyle;
      return {
        ...baseStyle,
        ...activeStyle,
        ...inactiveStyle
      };
    })();
    const resolvedClassName2 = (() => {
      const baseClassName = className;
      const activeClassName = resolvedActiveProps2.className;
      const inactiveClassName = resolvedInactiveProps2.className;
      if (!baseClassName && !activeClassName && !inactiveClassName) return "";
      let out = "";
      if (baseClassName) out = baseClassName;
      if (activeClassName) out = out ? `${out} ${activeClassName}` : activeClassName;
      if (inactiveClassName) out = out ? `${out} ${inactiveClassName}` : inactiveClassName;
      return out;
    })();
    return {
      ...propsSafeToSpread,
      ...resolvedActiveProps2,
      ...resolvedInactiveProps2,
      href: hrefOption?.href,
      ref: innerRef,
      disabled: !!disabled,
      target,
      ...resolvedStyle2 && { style: resolvedStyle2 },
      ...resolvedClassName2 && { className: resolvedClassName2 },
      ...disabled && STATIC_DISABLED_PROPS,
      ...isActive2 && STATIC_ACTIVE_PROPS
    };
  }
}
var STATIC_EMPTY_OBJECT = {};
var STATIC_ACTIVE_OBJECT = { className: "active" };
var STATIC_DISABLED_PROPS = {
  role: "link",
  "aria-disabled": true
};
var STATIC_ACTIVE_PROPS = {
  "data-status": "active",
  "aria-current": "page"
};
function getHrefOption(publicHref, external, history, disabled) {
  if (disabled) return void 0;
  if (external) return {
    href: publicHref,
    external: true
  };
  return {
    href: history.createHref(publicHref) || "/",
    external: false
  };
}
function isSafeInternal(to) {
  if (typeof to !== "string") return false;
  const zero = to.charCodeAt(0);
  if (zero === 47) return to.charCodeAt(1) !== 47;
  return zero === 46;
}
function createLink(Comp) {
  return reactExports.forwardRef(function CreatedLink(props, ref) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Link, {
      ...props,
      _asChild: Comp,
      ref
    });
  });
}
var Link = reactExports.forwardRef((props, ref) => {
  const { _asChild, ...rest } = props;
  const { type: _type, ...linkProps } = useLinkProps(rest, ref);
  const children = typeof rest.children === "function" ? rest.children({ isActive: linkProps["data-status"] === "active" }) : rest.children;
  if (!_asChild) {
    const { disabled: _, ...rest2 } = linkProps;
    return reactExports.createElement("a", rest2, children);
  }
  return reactExports.createElement(_asChild, linkProps, children);
});
var Route$1R = class Route extends BaseRoute {
  /**
  * @deprecated Use the `createRoute` function instead.
  */
  constructor(options) {
    super(options);
    this.useMatch = (opts) => {
      return useMatch({
        select: opts?.select,
        from: this.id,
        structuralSharing: opts?.structuralSharing
      });
    };
    this.useRouteContext = (opts) => {
      return useRouteContext({
        ...opts,
        from: this.id
      });
    };
    this.useSearch = (opts) => {
      return useSearch({
        select: opts?.select,
        structuralSharing: opts?.structuralSharing,
        from: this.id
      });
    };
    this.useParams = (opts) => {
      return useParams({
        select: opts?.select,
        structuralSharing: opts?.structuralSharing,
        from: this.id
      });
    };
    this.useLoaderDeps = (opts) => {
      return useLoaderDeps({
        ...opts,
        from: this.id
      });
    };
    this.useLoaderData = (opts) => {
      return useLoaderData({
        ...opts,
        from: this.id
      });
    };
    this.useNavigate = () => {
      return useNavigate({ from: this.fullPath });
    };
    this.Link = React.forwardRef((props, ref) => {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Link, {
        ref,
        from: this.fullPath,
        ...props
      });
    });
  }
};
function createRoute(options) {
  return new Route$1R(options);
}
function createRootRouteWithContext() {
  return (options) => {
    return createRootRoute(options);
  };
}
var RootRoute = class extends BaseRootRoute {
  /**
  * @deprecated `RootRoute` is now an internal implementation detail. Use `createRootRoute()` instead.
  */
  constructor(options) {
    super(options);
    this.useMatch = (opts) => {
      return useMatch({
        select: opts?.select,
        from: this.id,
        structuralSharing: opts?.structuralSharing
      });
    };
    this.useRouteContext = (opts) => {
      return useRouteContext({
        ...opts,
        from: this.id
      });
    };
    this.useSearch = (opts) => {
      return useSearch({
        select: opts?.select,
        structuralSharing: opts?.structuralSharing,
        from: this.id
      });
    };
    this.useParams = (opts) => {
      return useParams({
        select: opts?.select,
        structuralSharing: opts?.structuralSharing,
        from: this.id
      });
    };
    this.useLoaderDeps = (opts) => {
      return useLoaderDeps({
        ...opts,
        from: this.id
      });
    };
    this.useLoaderData = (opts) => {
      return useLoaderData({
        ...opts,
        from: this.id
      });
    };
    this.useNavigate = () => {
      return useNavigate({ from: this.fullPath });
    };
    this.Link = React.forwardRef((props, ref) => {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Link, {
        ref,
        from: this.fullPath,
        ...props
      });
    });
  }
};
function createRootRoute(options) {
  return new RootRoute(options);
}
function createFileRoute(path) {
  return (options) => {
    const route = createRoute(options);
    route.isRoot = false;
    return route;
  };
}
function lazyRouteComponent(importer, exportName) {
  let loadPromise;
  let comp;
  let error;
  const load = () => {
    if (!loadPromise) {
      error = void 0;
      loadPromise = importer().then((res) => {
        comp = res[exportName ?? "default"];
      }).catch((err) => {
        loadPromise = void 0;
        error = err;
      });
    }
    return loadPromise;
  };
  const lazyComp = function Lazy(props) {
    if (error) {
      if (isModuleNotFoundError(error) && false) ;
      throw error;
    }
    if (!comp) if (reactUse) reactUse(load());
    else throw load();
    return reactExports.createElement(comp, props);
  };
  lazyComp.preload = load;
  return lazyComp;
}
var getStoreFactory = (opts) => {
  return {
    createMutableStore: createNonReactiveMutableStore,
    createReadonlyStore: createNonReactiveReadonlyStore,
    batch: (fn2) => fn2()
  };
};
var createRouter = (options) => {
  return new Router(options);
};
var Router = class extends RouterCore {
  constructor(options) {
    super(options, getStoreFactory);
  }
};
function useLocation(opts) {
  const router2 = useRouter();
  {
    const location = router2.stores.location.get();
    return location;
  }
}
function useCanGoBack() {
  const router2 = useRouter();
  return router2.stores.location.get().state.__TSR_index !== 0;
}
var noopScriptHandler = () => {
};
function setScriptAttrs(script, attrs) {
  if (!attrs) return;
  for (const [key, value] of Object.entries(attrs)) if (key !== "suppressHydrationWarning" && value !== void 0 && value !== false) script.setAttribute(key, typeof value === "boolean" ? "" : String(value));
}
function Asset(asset) {
  const { attrs, children, nonce, preventScriptHoist } = asset;
  switch (asset.tag) {
    case "title":
      return /* @__PURE__ */ jsxRuntimeExports.jsx("title", {
        ...attrs,
        suppressHydrationWarning: true,
        children
      });
    case "meta":
      return /* @__PURE__ */ jsxRuntimeExports.jsx("meta", {
        ...attrs,
        suppressHydrationWarning: true
      });
    case "link":
      return /* @__PURE__ */ jsxRuntimeExports.jsx("link", {
        ...attrs,
        precedence: attrs?.precedence ?? (attrs?.rel === "stylesheet" ? "default" : void 0),
        nonce,
        suppressHydrationWarning: true
      });
    case "style":
      if (asset.inlineCss && false) ;
      return /* @__PURE__ */ jsxRuntimeExports.jsx("style", {
        ...attrs,
        dangerouslySetInnerHTML: { __html: children },
        nonce
      });
    case "script":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Script, {
        attrs,
        preventScriptHoist,
        children
      });
    default:
      return null;
  }
}
function Script({ attrs, children, preventScriptHoist }) {
  useRouter();
  useHydrated();
  const dataScript = typeof attrs?.type === "string" && attrs.type !== "" && attrs.type !== "text/javascript" && attrs.type !== "module";
  reactExports.useEffect(() => {
    if (dataScript) return;
    if (attrs?.src) {
      const normSrc = (() => {
        try {
          const base = document.baseURI || window.location.href;
          return new URL(attrs.src, base).href;
        } catch {
          return attrs.src;
        }
      })();
      for (const el of document.querySelectorAll("script[src]")) if (el.src === normSrc) return;
      const script = document.createElement("script");
      setScriptAttrs(script, attrs);
      document.head.appendChild(script);
      return () => script.remove();
    }
    if (typeof children === "string") {
      const typeAttr = typeof attrs?.type === "string" ? attrs.type : "text/javascript";
      const nonceAttr = typeof attrs?.nonce === "string" ? attrs.nonce : void 0;
      for (const el of document.querySelectorAll("script:not([src])")) {
        if (!(el instanceof HTMLScriptElement)) continue;
        const sType = el.getAttribute("type") ?? "text/javascript";
        const sNonce = el.getAttribute("nonce") ?? void 0;
        if (el.textContent === children && sType === typeAttr && sNonce === nonceAttr) return;
      }
      const script = document.createElement("script");
      script.textContent = children;
      setScriptAttrs(script, attrs);
      document.head.appendChild(script);
      return () => script.remove();
    }
  }, [
    attrs,
    children,
    dataScript
  ]);
  {
    if (attrs?.src) {
      if (!preventScriptHoist) return /* @__PURE__ */ jsxRuntimeExports.jsx("script", {
        ...attrs,
        suppressHydrationWarning: true
      });
      return /* @__PURE__ */ jsxRuntimeExports.jsx("script", {
        ...attrs,
        onLoad: noopScriptHandler,
        suppressHydrationWarning: true
      });
    }
    if (typeof children === "string") return /* @__PURE__ */ jsxRuntimeExports.jsx("script", {
      ...attrs,
      dangerouslySetInnerHTML: { __html: children },
      suppressHydrationWarning: true
    });
    return null;
  }
}
function buildTagsFromMatches(router2, nonce, matches, assetCrossOrigin) {
  matches = _getAssetMatches(matches);
  const routeMeta = matches.map((match) => match.meta).filter((meta) => meta !== void 0);
  const resultMeta = [];
  const metaByAttribute = {};
  let title;
  for (let i = routeMeta.length - 1; i >= 0; i--) {
    const metas = routeMeta[i];
    for (let j = metas.length - 1; j >= 0; j--) {
      const m = metas[j];
      if (!m) continue;
      if (m.title) {
        if (!title) title = {
          tag: "title",
          children: m.title
        };
      } else if ("script:ld+json" in m) try {
        const json = JSON.stringify(m["script:ld+json"]);
        resultMeta.push({
          tag: "script",
          attrs: { type: "application/ld+json" },
          children: escapeHtml(json)
        });
      } catch {
      }
      else {
        const attribute = m.name ?? m.property;
        if (attribute) if (metaByAttribute[attribute]) continue;
        else metaByAttribute[attribute] = true;
        resultMeta.push({
          tag: "meta",
          attrs: {
            ...m,
            nonce
          }
        });
      }
    }
  }
  if (title) resultMeta.push(title);
  if (nonce) resultMeta.push({
    tag: "meta",
    attrs: {
      property: "csp-nonce",
      content: nonce
    }
  });
  resultMeta.reverse();
  const constructedLinks = matches.flatMap((match) => match.links ?? []).filter((link) => link !== void 0).map((link) => ({
    tag: "link",
    attrs: {
      ...link,
      nonce
    }
  }));
  const manifest = router2.ssr?.manifest;
  const manifestCssTags = [];
  if (manifest) {
    matches.forEach((match) => {
      manifest.routes[match.routeId]?.css?.forEach((link) => {
        const resolvedLink = resolveManifestCssLink(link);
        manifestCssTags.push({
          tag: "link",
          attrs: {
            rel: "stylesheet",
            ...resolvedLink,
            crossOrigin: getAssetCrossOrigin(assetCrossOrigin, "stylesheet") ?? resolvedLink.crossOrigin,
            suppressHydrationWarning: true,
            nonce
          }
        });
      });
    });
    if (manifest.inlineStyle) manifestCssTags.push({
      tag: "style",
      attrs: {
        ...manifest.inlineStyle.attrs,
        nonce
      },
      children: manifest.inlineStyle.children,
      inlineCss: true
    });
  }
  const preloadLinks = [];
  if (manifest) matches.forEach((match) => {
    manifest.routes[match.routeId]?.preloads?.forEach((preload) => {
      preloadLinks.push({
        tag: "link",
        attrs: {
          ...getScriptPreloadAttrs(manifest, preload, assetCrossOrigin),
          nonce
        }
      });
    });
  });
  const styles = matches.flatMap((match) => match.styles ?? []).filter((style) => style !== void 0).map(({ children, ...attrs }) => ({
    tag: "style",
    attrs: {
      ...attrs,
      nonce
    },
    children
  }));
  const headScripts = matches.flatMap((match) => match.headScripts ?? []).filter((script) => script !== void 0).map(({ children, ...script }) => ({
    tag: "script",
    attrs: {
      ...script,
      nonce
    },
    children
  }));
  const tags = [];
  appendUniqueUserTags(tags, resultMeta);
  tags.push(...preloadLinks);
  appendUniqueUserTags(tags, constructedLinks);
  tags.push(...manifestCssTags);
  appendUniqueUserTags(tags, styles);
  appendUniqueUserTags(tags, headScripts);
  return tags;
}
var useTags = (assetCrossOrigin) => {
  const router2 = useRouter();
  const nonce = router2.options.ssr?.nonce;
  return buildTagsFromMatches(router2, nonce, router2.stores.matches.get(), assetCrossOrigin);
};
function HeadContent(props) {
  const tags = useTags(props.assetCrossOrigin);
  const nonce = useRouter().options.ssr?.nonce;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: tags.map((tag) => /* @__PURE__ */ reactExports.createElement(Asset, {
    ...tag,
    key: `tsr-meta-${JSON.stringify(tag)}`,
    nonce
  })) });
}
var Scripts = () => {
  const router2 = useRouter();
  const nonce = router2.options.ssr?.nonce;
  const getScripts = (matches) => {
    matches = _getAssetMatches(matches);
    const scripts = matches.flatMap((match) => match.scripts ?? []).filter(Boolean).map(({ children, ...script }) => ({
      tag: "script",
      attrs: {
        ...script,
        suppressHydrationWarning: true,
        nonce
      },
      children
    }));
    const manifest = router2.ssr?.manifest;
    if (!manifest) return scripts;
    for (const match of matches) {
      const manifestScripts = manifest.routes[match.routeId]?.scripts;
      if (!manifestScripts) continue;
      for (const asset of manifestScripts) scripts.push({
        tag: "script",
        attrs: {
          ...asset.attrs,
          nonce
        },
        children: asset.children,
        ...typeof asset.attrs?.src === "string" ? { preventScriptHoist: true } : {}
      });
    }
    return scripts;
  };
  return renderScripts(router2, getScripts(router2.stores.matches.get()));
};
function renderScripts(router2, scripts) {
  if (router2.serverSsr) {
    const serverBufferedScript = router2.serverSsr.takeBufferedScripts();
    if (serverBufferedScript) scripts.unshift(serverBufferedScript);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: scripts.map((asset, i) => /* @__PURE__ */ reactExports.createElement(Asset, {
    ...asset,
    key: `tsr-scripts-${asset.tag}-${i}`
  })) });
}
function t(...t2) {
  return t$g(n, t2);
}
const n = (e2, t2) => [...e2, ...t2];
function e(e2) {
  return e2 === `` || e2 === void 0 ? true : Array.isArray(e2) ? e2.length === 0 : Object.keys(e2).length === 0;
}
function I18nextProvider({
  i18n,
  defaultNS,
  children
}) {
  const value = reactExports.useMemo(() => ({
    i18n,
    defaultNS
  }), [i18n, defaultNS]);
  return reactExports.createElement(I18nContext$1.Provider, {
    value
  }, children);
}
const logosSVGSpriteHref = "/assets/logos-svg-sprite-5-gy8QgQ.svg";
var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var [createTooltipContext, createTooltipScope] = createContextScope("Tooltip", [
  createPopperScope
]);
var usePopperScope = createPopperScope();
var PROVIDER_NAME = "TooltipProvider";
var DEFAULT_DELAY_DURATION = 700;
var TOOLTIP_OPEN = "tooltip.open";
var [TooltipProviderContextProvider, useTooltipProviderContext] = createTooltipContext(PROVIDER_NAME);
var TooltipProvider = /* @__PURE__ */ __name((props) => {
  const {
    __scopeTooltip,
    delayDuration = DEFAULT_DELAY_DURATION,
    skipDelayDuration = 300,
    disableHoverableContent = false,
    children
  } = props;
  const isOpenDelayedRef = reactExports.useRef(true);
  const isPointerInTransitRef = reactExports.useRef(false);
  const skipDelayTimerRef = reactExports.useRef(0);
  reactExports.useEffect(() => {
    const skipDelayTimer = skipDelayTimerRef.current;
    return () => window.clearTimeout(skipDelayTimer);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    TooltipProviderContextProvider,
    {
      scope: __scopeTooltip,
      isOpenDelayedRef,
      delayDuration,
      onOpen: reactExports.useCallback(() => {
        if (skipDelayDuration <= 0) return;
        window.clearTimeout(skipDelayTimerRef.current);
        isOpenDelayedRef.current = false;
      }, [skipDelayDuration]),
      onClose: reactExports.useCallback(() => {
        if (skipDelayDuration <= 0) return;
        window.clearTimeout(skipDelayTimerRef.current);
        skipDelayTimerRef.current = window.setTimeout(
          () => isOpenDelayedRef.current = true,
          skipDelayDuration
        );
      }, [skipDelayDuration]),
      isPointerInTransitRef,
      onPointerInTransitChange: reactExports.useCallback((inTransit) => {
        isPointerInTransitRef.current = inTransit;
      }, []),
      disableHoverableContent,
      children
    }
  );
}, "TooltipProvider");
var TOOLTIP_NAME = "Tooltip";
var [TooltipContextProvider, useTooltipContext] = createTooltipContext(TOOLTIP_NAME);
var Tooltip$1 = /* @__PURE__ */ __name((props) => {
  const {
    __scopeTooltip,
    children,
    open: openProp,
    defaultOpen,
    onOpenChange,
    disableHoverableContent: disableHoverableContentProp,
    delayDuration: delayDurationProp
  } = props;
  const providerContext = useTooltipProviderContext(TOOLTIP_NAME, props.__scopeTooltip);
  const popperScope = usePopperScope(__scopeTooltip);
  const [trigger, setTrigger] = reactExports.useState(null);
  const [contentIdState, setContentId] = reactExports.useState(void 0);
  const generatedContentId = useId();
  const openTimerRef = reactExports.useRef(0);
  const disableHoverableContent = disableHoverableContentProp ?? providerContext.disableHoverableContent;
  const delayDuration = delayDurationProp ?? providerContext.delayDuration;
  const wasOpenDelayedRef = reactExports.useRef(false);
  const [open, setOpen] = useControllableState({
    prop: openProp,
    defaultProp: defaultOpen ?? false,
    onChange: /* @__PURE__ */ __name((open2) => {
      if (open2) {
        providerContext.onOpen();
        document.dispatchEvent(new CustomEvent(TOOLTIP_OPEN));
      } else {
        providerContext.onClose();
      }
      onOpenChange?.(open2);
    }, "onChange"),
    caller: TOOLTIP_NAME
  });
  const stateAttribute = reactExports.useMemo(() => {
    return open ? wasOpenDelayedRef.current ? "delayed-open" : "instant-open" : "closed";
  }, [open]);
  const handleOpen = reactExports.useCallback(() => {
    window.clearTimeout(openTimerRef.current);
    openTimerRef.current = 0;
    wasOpenDelayedRef.current = false;
    setOpen(true);
  }, [setOpen]);
  const handleClose = reactExports.useCallback(() => {
    window.clearTimeout(openTimerRef.current);
    openTimerRef.current = 0;
    setOpen(false);
  }, [setOpen]);
  const handleDelayedOpen = reactExports.useCallback(() => {
    window.clearTimeout(openTimerRef.current);
    openTimerRef.current = window.setTimeout(() => {
      wasOpenDelayedRef.current = true;
      setOpen(true);
      openTimerRef.current = 0;
    }, delayDuration);
  }, [delayDuration, setOpen]);
  reactExports.useEffect(() => {
    return () => {
      if (openTimerRef.current) {
        window.clearTimeout(openTimerRef.current);
        openTimerRef.current = 0;
      }
    };
  }, []);
  const contentId = contentIdState ?? generatedContentId;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Root2$2, { ...popperScope, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    TooltipContextProvider,
    {
      scope: __scopeTooltip,
      contentId,
      setContentId,
      open,
      stateAttribute,
      trigger,
      onTriggerChange: setTrigger,
      onTriggerEnter: reactExports.useCallback(() => {
        if (providerContext.isOpenDelayedRef.current) handleDelayedOpen();
        else handleOpen();
      }, [providerContext.isOpenDelayedRef, handleDelayedOpen, handleOpen]),
      onTriggerLeave: reactExports.useCallback(() => {
        if (disableHoverableContent) {
          handleClose();
        } else {
          window.clearTimeout(openTimerRef.current);
          openTimerRef.current = 0;
        }
      }, [handleClose, disableHoverableContent]),
      onOpen: handleOpen,
      onClose: handleClose,
      disableHoverableContent,
      children
    }
  ) });
}, "Tooltip");
var TRIGGER_NAME = "TooltipTrigger";
var TooltipTrigger = /* @__PURE__ */ reactExports.forwardRef(
  /* @__PURE__ */ __name(function TooltipTrigger2(props, forwardedRef) {
    const { __scopeTooltip, ...triggerProps } = props;
    const context = useTooltipContext(TRIGGER_NAME, __scopeTooltip);
    const providerContext = useTooltipProviderContext(TRIGGER_NAME, __scopeTooltip);
    const popperScope = usePopperScope(__scopeTooltip);
    const ref = reactExports.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, ref, context.onTriggerChange);
    const isPointerDownRef = reactExports.useRef(false);
    const hasPointerMoveOpenedRef = reactExports.useRef(false);
    const handlePointerUp = reactExports.useCallback(() => isPointerDownRef.current = false, []);
    reactExports.useEffect(() => {
      return () => document.removeEventListener("pointerup", handlePointerUp);
    }, [handlePointerUp]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Anchor, { asChild: true, ...popperScope, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.button,
      {
        "aria-describedby": context.open ? context.contentId : void 0,
        "data-state": context.stateAttribute,
        ...triggerProps,
        ref: composedRefs,
        onPointerMove: composeEventHandlers(props.onPointerMove, (event) => {
          if (event.pointerType === "touch") return;
          if (!hasPointerMoveOpenedRef.current && !providerContext.isPointerInTransitRef.current) {
            context.onTriggerEnter();
            hasPointerMoveOpenedRef.current = true;
          }
        }),
        onPointerLeave: composeEventHandlers(props.onPointerLeave, () => {
          context.onTriggerLeave();
          hasPointerMoveOpenedRef.current = false;
        }),
        onPointerDown: composeEventHandlers(props.onPointerDown, () => {
          if (context.open) {
            context.onClose();
          }
          isPointerDownRef.current = true;
          document.addEventListener("pointerup", handlePointerUp, { once: true });
        }),
        onFocus: composeEventHandlers(props.onFocus, () => {
          if (!isPointerDownRef.current) context.onOpen();
        }),
        onBlur: composeEventHandlers(props.onBlur, context.onClose),
        onClick: composeEventHandlers(props.onClick, context.onClose)
      }
    ) });
  }, "TooltipTrigger")
);
var PORTAL_NAME = "TooltipPortal";
var [PortalProvider, usePortalContext] = createTooltipContext(PORTAL_NAME, {
  forceMount: void 0
});
var TooltipPortal = /* @__PURE__ */ __name((props) => {
  const { __scopeTooltip, forceMount, children, container } = props;
  const context = useTooltipContext(PORTAL_NAME, __scopeTooltip);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PortalProvider, { scope: __scopeTooltip, forceMount, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Presence, { present: forceMount || context.open, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Portal$2, { asChild: true, container, children }) }) });
}, "TooltipPortal");
var CONTENT_NAME = "TooltipContent";
var TooltipContent$1 = /* @__PURE__ */ reactExports.forwardRef(
  /* @__PURE__ */ __name(function TooltipContent2(props, forwardedRef) {
    const portalContext = usePortalContext(CONTENT_NAME, props.__scopeTooltip);
    const { forceMount = portalContext.forceMount, side = "top", ...contentProps } = props;
    const context = useTooltipContext(CONTENT_NAME, props.__scopeTooltip);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Presence, { present: forceMount || context.open, children: context.disableHoverableContent ? /* @__PURE__ */ jsxRuntimeExports.jsx(TooltipContentImpl, { side, ...contentProps, ref: forwardedRef }) : /* @__PURE__ */ jsxRuntimeExports.jsx(TooltipContentHoverable, { side, ...contentProps, ref: forwardedRef }) });
  }, "TooltipContent")
);
var TooltipContentHoverable = /* @__PURE__ */ reactExports.forwardRef(/* @__PURE__ */ __name(function TooltipContentHoverable2(props, forwardedRef) {
  const context = useTooltipContext(CONTENT_NAME, props.__scopeTooltip);
  const providerContext = useTooltipProviderContext(CONTENT_NAME, props.__scopeTooltip);
  const ref = reactExports.useRef(null);
  const composedRefs = useComposedRefs(forwardedRef, ref);
  const [pointerGraceArea, setPointerGraceArea] = reactExports.useState(null);
  const { trigger, onClose } = context;
  const content = ref.current;
  const { onPointerInTransitChange } = providerContext;
  const handleRemoveGraceArea = reactExports.useCallback(() => {
    setPointerGraceArea(null);
    onPointerInTransitChange(false);
  }, [onPointerInTransitChange]);
  const handleCreateGraceArea = reactExports.useCallback(
    (event, hoverTarget) => {
      const currentTarget = event.currentTarget;
      const exitPoint = { x: event.clientX, y: event.clientY };
      const exitSide = getExitSideFromRect(exitPoint, currentTarget.getBoundingClientRect());
      const paddedExitPoints = getPaddedExitPoints(exitPoint, exitSide);
      const hoverTargetPoints = getPointsFromRect(hoverTarget.getBoundingClientRect());
      const graceArea = getHull([...paddedExitPoints, ...hoverTargetPoints]);
      setPointerGraceArea(graceArea);
      onPointerInTransitChange(true);
    },
    [onPointerInTransitChange]
  );
  reactExports.useEffect(() => {
    return () => handleRemoveGraceArea();
  }, [handleRemoveGraceArea]);
  reactExports.useEffect(() => {
    if (trigger && content) {
      const handleTriggerLeave = /* @__PURE__ */ __name((event) => handleCreateGraceArea(event, content), "handleTriggerLeave");
      const handleContentLeave = /* @__PURE__ */ __name((event) => handleCreateGraceArea(event, trigger), "handleContentLeave");
      trigger.addEventListener("pointerleave", handleTriggerLeave);
      content.addEventListener("pointerleave", handleContentLeave);
      return () => {
        trigger.removeEventListener("pointerleave", handleTriggerLeave);
        content.removeEventListener("pointerleave", handleContentLeave);
      };
    }
  }, [trigger, content, handleCreateGraceArea, handleRemoveGraceArea]);
  reactExports.useEffect(() => {
    if (pointerGraceArea) {
      const handleTrackPointerGrace = /* @__PURE__ */ __name((event) => {
        const target = event.target;
        const pointerPosition = { x: event.clientX, y: event.clientY };
        const hasEnteredTarget = trigger?.contains(target) || content?.contains(target);
        const isPointerOutsideGraceArea = !isPointInPolygon(pointerPosition, pointerGraceArea);
        if (hasEnteredTarget) {
          handleRemoveGraceArea();
        } else if (isPointerOutsideGraceArea) {
          handleRemoveGraceArea();
          onClose();
        }
      }, "handleTrackPointerGrace");
      document.addEventListener("pointermove", handleTrackPointerGrace);
      return () => document.removeEventListener("pointermove", handleTrackPointerGrace);
    }
  }, [trigger, content, pointerGraceArea, onClose, handleRemoveGraceArea]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(TooltipContentImpl, { ...props, ref: composedRefs });
}, "TooltipContentHoverable"));
var Slottable = createSlottable("TooltipContent");
var TooltipContentImpl = /* @__PURE__ */ reactExports.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ __name(function TooltipContentImpl2(props, forwardedRef) {
    const {
      __scopeTooltip,
      children,
      "aria-label": ariaLabel,
      id: idProp,
      onEscapeKeyDown,
      onPointerDownOutside,
      ...contentProps
    } = props;
    const context = useTooltipContext(CONTENT_NAME, __scopeTooltip);
    const popperScope = usePopperScope(__scopeTooltip);
    const { onClose } = context;
    reactExports.useEffect(() => {
      document.addEventListener(TOOLTIP_OPEN, onClose);
      return () => document.removeEventListener(TOOLTIP_OPEN, onClose);
    }, [onClose]);
    reactExports.useEffect(() => {
      if (context.trigger) {
        const handleScroll = /* @__PURE__ */ __name((event) => {
          if (event.target instanceof Node && event.target.contains(context.trigger)) {
            onClose();
          }
        }, "handleScroll");
        window.addEventListener("scroll", handleScroll, { capture: true });
        return () => window.removeEventListener("scroll", handleScroll, { capture: true });
      }
    }, [context.trigger, onClose]);
    const { setContentId } = context;
    useLayoutEffect2(() => {
      setContentId(idProp);
      return () => {
        setContentId(void 0);
      };
    }, [idProp, setContentId]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      DismissableLayer,
      {
        asChild: true,
        disableOutsidePointerEvents: false,
        onEscapeKeyDown,
        onPointerDownOutside,
        onFocusOutside: (event) => event.preventDefault(),
        onDismiss: onClose,
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Content$1,
          {
            "data-state": context.stateAttribute,
            role: ariaLabel ? void 0 : "tooltip",
            id: ariaLabel ? void 0 : context.contentId,
            ...popperScope,
            ...contentProps,
            ref: forwardedRef,
            style: {
              ...contentProps.style,
              // re-namespace exposed content custom properties
              ...{
                "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
              }
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Slottable, { children }),
              ariaLabel ? /* @__PURE__ */ jsxRuntimeExports.jsx(Root, { id: context.contentId, role: "tooltip", children: ariaLabel }) : null
            ]
          }
        )
      }
    );
  }, "TooltipContentImpl")
);
var TooltipArrow = /* @__PURE__ */ reactExports.forwardRef(
  /* @__PURE__ */ __name(function TooltipArrow2(props, forwardedRef) {
    const { __scopeTooltip, ...arrowProps } = props;
    const popperScope = usePopperScope(__scopeTooltip);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Arrow, { ...popperScope, ...arrowProps, ref: forwardedRef });
  }, "TooltipArrow")
);
function getExitSideFromRect(point, rect) {
  const top = Math.abs(rect.top - point.y);
  const bottom = Math.abs(rect.bottom - point.y);
  const right = Math.abs(rect.right - point.x);
  const left = Math.abs(rect.left - point.x);
  switch (Math.min(top, bottom, right, left)) {
    case left:
      return "left";
    case right:
      return "right";
    case top:
      return "top";
    case bottom:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
__name(getExitSideFromRect, "getExitSideFromRect");
function getPaddedExitPoints(exitPoint, exitSide, padding = 5) {
  const paddedExitPoints = [];
  switch (exitSide) {
    case "top":
      paddedExitPoints.push(
        { x: exitPoint.x - padding, y: exitPoint.y + padding },
        { x: exitPoint.x + padding, y: exitPoint.y + padding }
      );
      break;
    case "bottom":
      paddedExitPoints.push(
        { x: exitPoint.x - padding, y: exitPoint.y - padding },
        { x: exitPoint.x + padding, y: exitPoint.y - padding }
      );
      break;
    case "left":
      paddedExitPoints.push(
        { x: exitPoint.x + padding, y: exitPoint.y - padding },
        { x: exitPoint.x + padding, y: exitPoint.y + padding }
      );
      break;
    case "right":
      paddedExitPoints.push(
        { x: exitPoint.x - padding, y: exitPoint.y - padding },
        { x: exitPoint.x - padding, y: exitPoint.y + padding }
      );
      break;
  }
  return paddedExitPoints;
}
__name(getPaddedExitPoints, "getPaddedExitPoints");
function getPointsFromRect(rect) {
  const { top, right, bottom, left } = rect;
  return [
    { x: left, y: top },
    { x: right, y: top },
    { x: right, y: bottom },
    { x: left, y: bottom }
  ];
}
__name(getPointsFromRect, "getPointsFromRect");
function isPointInPolygon(point, polygon) {
  const { x, y } = point;
  let inside = false;
  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    const ii = polygon[i];
    const jj = polygon[j];
    const xi = ii.x;
    const yi = ii.y;
    const xj = jj.x;
    const yj = jj.y;
    const intersect = yi > y !== yj > y && x < (xj - xi) * (y - yi) / (yj - yi) + xi;
    if (intersect) inside = !inside;
  }
  return inside;
}
__name(isPointInPolygon, "isPointInPolygon");
function getHull(points) {
  const newPoints = points.slice();
  newPoints.sort((a, b) => {
    if (a.x < b.x) return -1;
    else if (a.x > b.x) return 1;
    else if (a.y < b.y) return -1;
    else if (a.y > b.y) return 1;
    else return 0;
  });
  return getHullPresorted(newPoints);
}
__name(getHull, "getHull");
function getHullPresorted(points) {
  if (points.length <= 1) return points.slice();
  const upperHull = [];
  for (let i = 0; i < points.length; i++) {
    const p = points[i];
    while (upperHull.length >= 2) {
      const q2 = upperHull[upperHull.length - 1];
      const r = upperHull[upperHull.length - 2];
      if ((q2.x - r.x) * (p.y - r.y) >= (q2.y - r.y) * (p.x - r.x)) upperHull.pop();
      else break;
    }
    upperHull.push(p);
  }
  upperHull.pop();
  const lowerHull = [];
  for (let i = points.length - 1; i >= 0; i--) {
    const p = points[i];
    while (lowerHull.length >= 2) {
      const q2 = lowerHull[lowerHull.length - 1];
      const r = lowerHull[lowerHull.length - 2];
      if ((q2.x - r.x) * (p.y - r.y) >= (q2.y - r.y) * (p.x - r.x)) lowerHull.pop();
      else break;
    }
    lowerHull.push(p);
  }
  lowerHull.pop();
  if (upperHull.length === 1 && lowerHull.length === 1 && upperHull[0].x === lowerHull[0].x && upperHull[0].y === lowerHull[0].y) {
    return upperHull;
  } else {
    return upperHull.concat(lowerHull);
  }
}
__name(getHullPresorted, "getHullPresorted");
var Provider$1 = TooltipProvider;
var Root3 = Tooltip$1;
var Trigger = TooltipTrigger;
var Portal = TooltipPortal;
var Content2 = TooltipContent$1;
var Arrow2 = TooltipArrow;
function DefaultTooltip({
  delayDuration = 700,
  arrow = true,
  children,
  content,
  open,
  defaultOpen,
  onOpenChange,
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Root3,
    {
      open,
      defaultOpen,
      onOpenChange,
      delayDuration,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Trigger, { asChild: true, children }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Portal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Content2, { side: "top", align: "center", className: "z-50 drop-shadow-sm", ...props, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn$1("bg-surface-card max-h-40 overflow-y-auto rounded-sm p-sm", className), children: content }),
          arrow ? /* @__PURE__ */ jsxRuntimeExports.jsx(Arrow2, { width: 11, height: 5, className: "fill-grey-white" }) : null
        ] }) })
      ]
    }
  );
}
const Tooltip = {
  Default: DefaultTooltip,
  Provider: Provider$1
};
const TooltipContent = ({
  ref,
  className,
  sideOffset = 4,
  ...props
}) => /* @__PURE__ */ jsxRuntimeExports.jsx(Portal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
  Content2,
  {
    ref,
    sideOffset,
    className: cn$1(
      "border-grey-border bg-surface-card text-grey-primary animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 origin-radix-tooltip overflow-hidden rounded-sm border p-xs text-xs",
      className
    ),
    ...props
  }
) });
const TooltipV2 = {
  Provider: Provider$1,
  Tooltip: Root3,
  TooltipTrigger: Trigger,
  TooltipContent
};
function dehydratePromise(query, serializeData, shouldRedactErrors) {
  const promise = query.promise?.then(serializeData).catch((error) => {
    if (shouldRedactErrors?.(error) === false) return Promise.reject(error);
    return Promise.reject(/* @__PURE__ */ new Error("redacted"));
  });
  promise?.catch(noop);
  return promise;
}
function dehydrateQuery(query, serializeData, shouldRedactErrors) {
  return {
    dehydratedAt: Date.now(),
    state: {
      ...query.state,
      ...query.state.data !== void 0 && { data: serializeData ? serializeData(query.state.data) : query.state.data }
    },
    queryKey: query.queryKey,
    queryHash: query.queryHash,
    ...query.state.status === "pending" && { promise: dehydratePromise(query, serializeData, shouldRedactErrors) },
    ...query.meta && { meta: query.meta },
    ...query.queryType && { queryType: query.queryType }
  };
}
var Mutation = class extends Removable {
  #client;
  #observers;
  #mutationCache;
  #retryer;
  constructor(config) {
    super();
    this.#client = config.client;
    this.mutationId = config.mutationId;
    this.#mutationCache = config.mutationCache;
    this.#observers = [];
    this.state = config.state || getDefaultState();
    this.setOptions(config.options);
    this.scheduleGc();
  }
  setOptions(options) {
    this.options = options;
    this.updateGcTime(this.options.gcTime);
  }
  get meta() {
    return this.options.meta;
  }
  addObserver(observer) {
    if (!this.#observers.includes(observer)) {
      this.#observers.push(observer);
      this.clearGcTimeout();
      this.#mutationCache.notify({
        type: "observerAdded",
        mutation: this,
        observer
      });
    }
  }
  removeObserver(observer) {
    this.#observers = this.#observers.filter((x) => x !== observer);
    this.scheduleGc();
    this.#mutationCache.notify({
      type: "observerRemoved",
      mutation: this,
      observer
    });
  }
  optionalRemove() {
    if (!this.#observers.length) {
      if (this.state.status === "pending") this.scheduleGc();
      else this.#mutationCache.remove(this);
    }
  }
  continue() {
    return this.#retryer?.continue() ?? (this.state.status === "pending" ? this.execute(this.state.variables) : Promise.resolve());
  }
  async execute(variables) {
    const onContinue = () => {
      this.#dispatch({ type: "continue" });
    };
    const mutationFnContext = {
      client: this.#client,
      meta: this.options.meta,
      mutationKey: this.options.mutationKey
    };
    const retryer = this.#retryer = createRetryer({
      fn: () => {
        if (!this.options.mutationFn) return Promise.reject(/* @__PURE__ */ new Error("No mutationFn found"));
        return this.options.mutationFn(variables, mutationFnContext);
      },
      onFail: (failureCount, error) => {
        this.#dispatch({
          type: "failed",
          failureCount,
          error
        });
      },
      onPause: () => {
        this.#dispatch({ type: "pause" });
      },
      onContinue,
      retry: this.options.retry ?? 0,
      retryDelay: this.options.retryDelay,
      networkMode: this.options.networkMode,
      canRun: () => this.#mutationCache.canRun(this)
    });
    const restored = this.state.status === "pending";
    const isPaused = !retryer.canStart();
    try {
      if (restored) onContinue();
      else {
        this.#dispatch({
          type: "pending",
          variables,
          isPaused
        });
        if (this.#mutationCache.config.onMutate) await this.#mutationCache.config.onMutate(variables, this, mutationFnContext);
        const context = await this.options.onMutate?.(variables, mutationFnContext);
        if (context !== this.state.context) this.#dispatch({
          type: "pending",
          context,
          variables,
          isPaused
        });
      }
      const data = await retryer.start();
      await this.#mutationCache.config.onSuccess?.(data, variables, this.state.context, this, mutationFnContext);
      await this.options.onSuccess?.(data, variables, this.state.context, mutationFnContext);
      await this.#mutationCache.config.onSettled?.(data, null, this.state.variables, this.state.context, this, mutationFnContext);
      await this.options.onSettled?.(data, null, variables, this.state.context, mutationFnContext);
      this.#dispatch({
        type: "success",
        data
      });
      return data;
    } catch (error) {
      try {
        await this.#mutationCache.config.onError?.(error, variables, this.state.context, this, mutationFnContext);
      } catch (e2) {
        Promise.reject(e2);
      }
      try {
        await this.options.onError?.(error, variables, this.state.context, mutationFnContext);
      } catch (e2) {
        Promise.reject(e2);
      }
      try {
        await this.#mutationCache.config.onSettled?.(void 0, error, this.state.variables, this.state.context, this, mutationFnContext);
      } catch (e2) {
        Promise.reject(e2);
      }
      try {
        await this.options.onSettled?.(void 0, error, variables, this.state.context, mutationFnContext);
      } catch (e2) {
        Promise.reject(e2);
      }
      this.#dispatch({
        type: "error",
        error
      });
      throw error;
    } finally {
      if (this.#retryer === retryer) this.#retryer = void 0;
      this.#mutationCache.runNext(this);
    }
  }
  #dispatch(action) {
    const reducer = (state) => {
      switch (action.type) {
        case "failed":
          return {
            ...state,
            failureCount: action.failureCount,
            failureReason: action.error
          };
        case "pause":
          return {
            ...state,
            isPaused: true
          };
        case "continue":
          return {
            ...state,
            isPaused: false
          };
        case "pending":
          return {
            ...state,
            context: action.context,
            data: void 0,
            failureCount: 0,
            failureReason: null,
            error: null,
            isPaused: action.isPaused,
            status: "pending",
            variables: action.variables,
            submittedAt: Date.now()
          };
        case "success":
          return {
            ...state,
            data: action.data,
            failureCount: 0,
            failureReason: null,
            error: null,
            status: "success",
            isPaused: false
          };
        case "error":
          return {
            ...state,
            data: void 0,
            error: action.error,
            failureCount: state.failureCount + 1,
            failureReason: action.error,
            isPaused: false,
            status: "error"
          };
      }
    };
    this.state = reducer(this.state);
    notifyManager.batch(() => {
      this.#observers.forEach((observer) => {
        observer.onMutationUpdate(action);
      });
      this.#mutationCache.notify({
        mutation: this,
        type: "updated",
        action
      });
    });
  }
};
function getDefaultState() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: false,
    status: "idle",
    variables: void 0,
    submittedAt: 0
  };
}
var MutationCache = class extends Subscribable {
  #mutations;
  #scopes;
  #mutationId;
  constructor(config = {}) {
    super();
    this.config = config;
    this.#mutations = /* @__PURE__ */ new Set();
    this.#scopes = /* @__PURE__ */ new Map();
    this.#mutationId = 0;
  }
  build(client, options, state) {
    const mutation = new Mutation({
      client,
      mutationCache: this,
      mutationId: ++this.#mutationId,
      options: client.defaultMutationOptions(options),
      state
    });
    this.add(mutation);
    return mutation;
  }
  add(mutation) {
    this.#mutations.add(mutation);
    const scope = scopeFor(mutation);
    if (typeof scope === "string") {
      const scopedMutations = this.#scopes.get(scope);
      if (scopedMutations) scopedMutations.push(mutation);
      else this.#scopes.set(scope, [mutation]);
    }
    this.notify({
      type: "added",
      mutation
    });
  }
  remove(mutation) {
    if (this.#mutations.delete(mutation)) {
      const scope = scopeFor(mutation);
      if (typeof scope === "string") {
        const scopedMutations = this.#scopes.get(scope);
        if (scopedMutations) {
          if (scopedMutations.length > 1) {
            const index = scopedMutations.indexOf(mutation);
            if (index !== -1) scopedMutations.splice(index, 1);
          } else if (scopedMutations[0] === mutation) this.#scopes.delete(scope);
        }
      }
    }
    this.notify({
      type: "removed",
      mutation
    });
  }
  canRun(mutation) {
    const scope = scopeFor(mutation);
    if (typeof scope === "string") {
      const firstPendingMutation = this.#scopes.get(scope)?.find((m) => m.state.status === "pending");
      return !firstPendingMutation || firstPendingMutation === mutation;
    } else return true;
  }
  runNext(mutation) {
    const scope = scopeFor(mutation);
    if (typeof scope === "string") return this.#scopes.get(scope)?.find((m) => m !== mutation && m.state.isPaused)?.continue() ?? Promise.resolve();
    else return Promise.resolve();
  }
  clear() {
    notifyManager.batch(() => {
      this.#mutations.forEach((mutation) => {
        this.notify({
          type: "removed",
          mutation
        });
      });
      this.#mutations.clear();
      this.#scopes.clear();
    });
  }
  getAll() {
    return Array.from(this.#mutations);
  }
  find(filters) {
    const defaultedFilters = {
      exact: true,
      ...filters
    };
    return this.getAll().find((mutation) => matchMutation(defaultedFilters, mutation));
  }
  findAll(filters = {}) {
    return this.getAll().filter((mutation) => matchMutation(filters, mutation));
  }
  notify(event) {
    notifyManager.batch(() => {
      this.listeners.forEach((listener) => {
        listener(event);
      });
    });
  }
  resumePausedMutations() {
    const pausedMutations = this.getAll().filter((x) => x.state.isPaused);
    return notifyManager.batch(() => Promise.all(pausedMutations.map((mutation) => mutation.continue().catch(noop))));
  }
};
function scopeFor(mutation) {
  return mutation.options.scope?.id;
}
var QueryCache = class extends Subscribable {
  #queries;
  constructor(config = {}) {
    super();
    this.config = config;
    this.#queries = /* @__PURE__ */ new Map();
  }
  build(client, options, state) {
    const queryKey = options.queryKey;
    const queryHash = options.queryHash ?? hashQueryKeyByOptions(queryKey, options);
    let query = this.get(queryHash);
    if (!query) {
      query = new Query({
        client,
        queryKey,
        queryHash,
        options: client.defaultQueryOptions(options),
        state,
        defaultOptions: client.getQueryDefaults(queryKey)
      });
      this.add(query);
    }
    return query;
  }
  add(query) {
    if (!this.#queries.has(query.queryHash)) {
      this.#queries.set(query.queryHash, query);
      this.notify({
        type: "added",
        query
      });
    }
  }
  remove(query) {
    const queryInMap = this.#queries.get(query.queryHash);
    if (queryInMap) {
      query.destroy();
      if (queryInMap === query) this.#queries.delete(query.queryHash);
      this.notify({
        type: "removed",
        query
      });
    }
  }
  clear() {
    notifyManager.batch(() => {
      this.getAll().forEach((query) => {
        this.remove(query);
      });
    });
  }
  get(queryHash) {
    return this.#queries.get(queryHash);
  }
  getAll() {
    return [...this.#queries.values()];
  }
  find(filters) {
    const defaultedFilters = {
      exact: true,
      ...filters
    };
    return this.getAll().find((query) => matchQuery(defaultedFilters, query));
  }
  findAll(filters = {}) {
    const queries = this.getAll();
    return Object.keys(filters).length > 0 ? queries.filter((query) => matchQuery(filters, query)) : queries;
  }
  notify(event) {
    notifyManager.batch(() => {
      this.listeners.forEach((listener) => {
        listener(event);
      });
    });
  }
  onFocus() {
    notifyManager.batch(() => {
      this.getAll().forEach((query) => {
        query.onFocus();
      });
    });
  }
  onOnline() {
    notifyManager.batch(() => {
      this.getAll().forEach((query) => {
        query.onOnline();
      });
    });
  }
};
var QueryClient = class {
  #queryCache;
  #mutationCache;
  #defaultOptions;
  #queryDefaults;
  #mutationDefaults;
  #mountCount;
  #unsubscribeFocus;
  #unsubscribeOnline;
  constructor(config = {}) {
    this.#queryCache = config.queryCache || new QueryCache();
    this.#mutationCache = config.mutationCache || new MutationCache();
    this.#defaultOptions = config.defaultOptions || {};
    this.#queryDefaults = /* @__PURE__ */ new Map();
    this.#mutationDefaults = /* @__PURE__ */ new Map();
    this.#mountCount = 0;
  }
  mount() {
    this.#mountCount++;
    if (this.#mountCount !== 1) return;
    this.#unsubscribeFocus = focusManager.subscribe(async (focused) => {
      if (focused) {
        await this.resumePausedMutations();
        this.#queryCache.onFocus();
      }
    });
    this.#unsubscribeOnline = onlineManager.subscribe(async (online) => {
      if (online) {
        await this.resumePausedMutations();
        this.#queryCache.onOnline();
      }
    });
  }
  unmount() {
    this.#mountCount--;
    if (this.#mountCount !== 0) return;
    this.#unsubscribeFocus?.();
    this.#unsubscribeFocus = void 0;
    this.#unsubscribeOnline?.();
    this.#unsubscribeOnline = void 0;
  }
  isFetching(filters) {
    return this.#queryCache.findAll({
      ...filters,
      fetchStatus: "fetching"
    }).length;
  }
  isMutating(filters) {
    return this.#mutationCache.findAll({
      ...filters,
      status: "pending"
    }).length;
  }
  /**
  * Imperative (non-reactive) way to retrieve data for a QueryKey.
  * Should only be used in callbacks or functions where reading the latest data is necessary, e.g. for optimistic updates.
  *
  * Hint: Do not use this function inside a component, because it won't receive updates.
  * Use `useQuery` to create a `QueryObserver` that subscribes to changes.
  */
  getQueryData(queryKey) {
    const options = this.defaultQueryOptions({ queryKey });
    return this.#queryCache.get(options.queryHash)?.state.data;
  }
  /**
  * @deprecated Use queryClient.query({ ...options, staleTime: 'static' }) instead. This method will be removed in the next major version.
  */
  ensureQueryData(options) {
    const defaultedOptions = this.defaultQueryOptions(options);
    const query = this.#queryCache.build(this, defaultedOptions);
    const cachedData = query.state.data;
    if (cachedData === void 0) return this.fetchQuery(options);
    if (options.revalidateIfStale && query.isStaleByTime(resolveQueryValue(defaultedOptions.staleTime, query))) this.prefetchQuery(defaultedOptions);
    return Promise.resolve(cachedData);
  }
  getQueriesData(filters) {
    return this.#queryCache.findAll(filters).map(({ queryKey, state }) => {
      return [queryKey, state.data];
    });
  }
  setQueryData(queryKey, updater, options) {
    const defaultedOptions = this.defaultQueryOptions({ queryKey });
    const prevData = this.#queryCache.get(defaultedOptions.queryHash)?.state.data;
    const data = functionalUpdate(updater, prevData);
    if (data === void 0) return;
    return this.#queryCache.build(this, defaultedOptions).setData(data, {
      ...options,
      manual: true
    });
  }
  setQueriesData(filters, updater, options) {
    return notifyManager.batch(() => this.#queryCache.findAll(filters).map(({ queryKey }) => [queryKey, this.setQueryData(queryKey, updater, options)]));
  }
  getQueryState(queryKey) {
    const options = this.defaultQueryOptions({ queryKey });
    return this.#queryCache.get(options.queryHash)?.state;
  }
  removeQueries(filters) {
    const queryCache = this.#queryCache;
    notifyManager.batch(() => {
      queryCache.findAll(filters).forEach((query) => {
        queryCache.remove(query);
      });
    });
  }
  resetQueries(filters, options) {
    const queryCache = this.#queryCache;
    return notifyManager.batch(() => {
      const matched = queryCache.findAll(filters);
      const queriesToRefetch = new Set(matched);
      matched.forEach((query) => {
        query.reset();
      });
      return this.refetchQueries({
        type: "active",
        predicate: (query) => queriesToRefetch.has(query)
      }, options);
    });
  }
  cancelQueries(filters, cancelOptions = {}) {
    const defaultedCancelOptions = {
      revert: true,
      ...cancelOptions
    };
    const promises = notifyManager.batch(() => this.#queryCache.findAll(filters).map((query) => query.cancel(defaultedCancelOptions)));
    return Promise.all(promises).then(noop).catch(noop);
  }
  invalidateQueries(filters, options = {}) {
    return notifyManager.batch(() => {
      this.#queryCache.findAll(filters).forEach((query) => {
        query.invalidate();
      });
      if (filters?.refetchType === "none") return Promise.resolve();
      return this.refetchQueries({
        ...filters,
        type: filters?.refetchType ?? filters?.type ?? "active"
      }, options);
    });
  }
  refetchQueries(filters, options = {}) {
    const fetchOptions = {
      ...options,
      cancelRefetch: options.cancelRefetch ?? true
    };
    const promises = notifyManager.batch(() => this.#queryCache.findAll(filters).filter((query) => !query.isDisabled() && !query.isStatic()).map((query) => {
      let promise = query.fetch(void 0, fetchOptions);
      if (!fetchOptions.throwOnError) promise = promise.catch(noop);
      return query.state.fetchStatus === "paused" ? Promise.resolve() : promise;
    }));
    return Promise.all(promises).then(noop);
  }
  async query(options) {
    const defaultedOptions = this.defaultQueryOptions(options);
    if (defaultedOptions.retry === void 0) defaultedOptions.retry = false;
    const query = this.#queryCache.build(this, defaultedOptions);
    const queryData = query.isStaleByTime(resolveQueryValue(defaultedOptions.staleTime, query)) ? await query.fetch(defaultedOptions) : query.state.data;
    const select = defaultedOptions.select;
    if (select) return select(queryData);
    return queryData;
  }
  /**
  * @deprecated Use queryClient.query(options) instead. This method will be removed in the next major version.
  */
  fetchQuery(options) {
    const defaultedOptions = this.defaultQueryOptions(options);
    if (defaultedOptions.retry === void 0) defaultedOptions.retry = false;
    const query = this.#queryCache.build(this, defaultedOptions);
    return query.isStaleByTime(resolveQueryValue(defaultedOptions.staleTime, query)) ? query.fetch(defaultedOptions) : Promise.resolve(query.state.data);
  }
  /**
  * @deprecated Use queryClient.query(options) instead. You can swallow errors with `.catch(noop)`. This method will be removed in the next major version.
  */
  prefetchQuery(options) {
    return this.fetchQuery(options).then(noop).catch(noop);
  }
  infiniteQuery(options) {
    options._type = "infinite";
    return this.query(options);
  }
  /**
  * @deprecated Use queryClient.infiniteQuery(options) instead. This method will be removed in the next major version.
  */
  fetchInfiniteQuery(options) {
    options._type = "infinite";
    return this.fetchQuery(options);
  }
  /**
  * @deprecated Use queryClient.infiniteQuery(options) instead. You can swallow errors with `.catch(noop)`. This method will be removed in the next major version.
  */
  prefetchInfiniteQuery(options) {
    return this.fetchInfiniteQuery(options).then(noop).catch(noop);
  }
  /**
  * @deprecated Use queryClient.infiniteQuery({ ...options, staleTime: 'static' }) instead. This method will be removed in the next major version.
  */
  ensureInfiniteQueryData(options) {
    options._type = "infinite";
    return this.ensureQueryData(options);
  }
  resumePausedMutations() {
    if (onlineManager.isOnline()) return this.#mutationCache.resumePausedMutations();
    return Promise.resolve();
  }
  getQueryCache() {
    return this.#queryCache;
  }
  getMutationCache() {
    return this.#mutationCache;
  }
  getDefaultOptions() {
    return this.#defaultOptions;
  }
  setDefaultOptions(options) {
    this.#defaultOptions = options;
  }
  setQueryDefaults(queryKey, options) {
    this.#queryDefaults.set(hashKey(queryKey), {
      queryKey,
      defaultOptions: options
    });
  }
  getQueryDefaults(queryKey) {
    const defaults = [...this.#queryDefaults.values()];
    const result = {};
    defaults.forEach((queryDefault) => {
      if (partialMatchKey(queryKey, queryDefault.queryKey)) Object.assign(result, queryDefault.defaultOptions);
    });
    return result;
  }
  setMutationDefaults(mutationKey, options) {
    this.#mutationDefaults.set(hashKey(mutationKey), {
      mutationKey,
      defaultOptions: options
    });
  }
  getMutationDefaults(mutationKey) {
    const defaults = [...this.#mutationDefaults.values()];
    const result = {};
    defaults.forEach((queryDefault) => {
      if (partialMatchKey(mutationKey, queryDefault.mutationKey)) Object.assign(result, queryDefault.defaultOptions);
    });
    return result;
  }
  defaultQueryOptions(options) {
    if (options._defaulted) return options;
    const defaultedOptions = {
      ...this.#defaultOptions.queries,
      ...this.getQueryDefaults(options.queryKey),
      ...options,
      _defaulted: true
    };
    if (!defaultedOptions.queryHash) defaultedOptions.queryHash = hashQueryKeyByOptions(defaultedOptions.queryKey, defaultedOptions);
    if (defaultedOptions.refetchOnReconnect === void 0) defaultedOptions.refetchOnReconnect = defaultedOptions.networkMode !== "always";
    if (defaultedOptions.throwOnError === void 0) defaultedOptions.throwOnError = !!defaultedOptions.suspense;
    if (!defaultedOptions.networkMode && defaultedOptions.persister) defaultedOptions.networkMode = "offlineFirst";
    if (defaultedOptions.queryFn === skipToken) defaultedOptions.enabled = false;
    return defaultedOptions;
  }
  defaultMutationOptions(options) {
    if (options?._defaulted) return options;
    return {
      ...this.#defaultOptions.mutations,
      ...options?.mutationKey && this.getMutationDefaults(options.mutationKey),
      ...options,
      _defaulted: true
    };
  }
  clear() {
    this.#queryCache.clear();
    this.#mutationCache.clear();
  }
};
const screeningsI18n = ["common", "screenings"];
const __variableDynamicImportRuntimeHelper = (glob$1, path$13, segs) => {
  const v = glob$1[path$13];
  if (v) return typeof v === "function" ? v() : Promise.resolve(v);
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(reject.bind(null, /* @__PURE__ */ new Error("Unknown variable dynamic import: " + path$13 + (path$13.split("/").length !== segs ? ". Note that variables only represent file names one level deep." : ""))));
  });
};
class DoubleIndexedKV {
  constructor() {
    this.keyToValue = /* @__PURE__ */ new Map();
    this.valueToKey = /* @__PURE__ */ new Map();
  }
  set(key, value) {
    this.keyToValue.set(key, value);
    this.valueToKey.set(value, key);
  }
  getByKey(key) {
    return this.keyToValue.get(key);
  }
  getByValue(value) {
    return this.valueToKey.get(value);
  }
  clear() {
    this.keyToValue.clear();
    this.valueToKey.clear();
  }
}
class Registry {
  constructor(generateIdentifier) {
    this.generateIdentifier = generateIdentifier;
    this.kv = new DoubleIndexedKV();
  }
  register(value, identifier) {
    if (this.kv.getByValue(value)) {
      return;
    }
    if (!identifier) {
      identifier = this.generateIdentifier(value);
    }
    this.kv.set(identifier, value);
  }
  clear() {
    this.kv.clear();
  }
  getIdentifier(value) {
    return this.kv.getByValue(value);
  }
  getValue(identifier) {
    return this.kv.getByKey(identifier);
  }
}
class ClassRegistry extends Registry {
  constructor() {
    super((c) => c.name);
    this.classToAllowedProps = /* @__PURE__ */ new Map();
  }
  register(value, options) {
    if (typeof options === "object") {
      if (options.allowProps) {
        this.classToAllowedProps.set(value, options.allowProps);
      }
      super.register(value, options.identifier);
    } else {
      super.register(value, options);
    }
  }
  getAllowedProps(value) {
    return this.classToAllowedProps.get(value);
  }
}
function valuesOfObj(record2) {
  if ("values" in Object) {
    return Object.values(record2);
  }
  const values = [];
  for (const key in record2) {
    if (record2.hasOwnProperty(key)) {
      values.push(record2[key]);
    }
  }
  return values;
}
function find(record2, predicate) {
  const values = valuesOfObj(record2);
  if ("find" in values) {
    return values.find(predicate);
  }
  const valuesNotNever = values;
  for (let i = 0; i < valuesNotNever.length; i++) {
    const value = valuesNotNever[i];
    if (predicate(value)) {
      return value;
    }
  }
  return void 0;
}
function forEach(record2, run) {
  Object.entries(record2).forEach(([key, value]) => run(value, key));
}
function includes(arr, value) {
  return arr.indexOf(value) !== -1;
}
function findArr(record2, predicate) {
  for (let i = 0; i < record2.length; i++) {
    const value = record2[i];
    if (predicate(value)) {
      return value;
    }
  }
  return void 0;
}
class CustomTransformerRegistry {
  constructor() {
    this.transfomers = {};
  }
  register(transformer) {
    this.transfomers[transformer.name] = transformer;
  }
  findApplicable(v) {
    return find(this.transfomers, (transformer) => transformer.isApplicable(v));
  }
  findByName(name) {
    return this.transfomers[name];
  }
}
const getType = (payload) => Object.prototype.toString.call(payload).slice(8, -1);
const isUndefined = (payload) => typeof payload === "undefined";
const isNull = (payload) => payload === null;
const isPlainObject$1 = (payload) => {
  if (typeof payload !== "object" || payload === null)
    return false;
  if (payload === Object.prototype)
    return false;
  if (Object.getPrototypeOf(payload) === null)
    return true;
  return Object.getPrototypeOf(payload) === Object.prototype;
};
const isEmptyObject = (payload) => isPlainObject$1(payload) && Object.keys(payload).length === 0;
const isArray = (payload) => Array.isArray(payload);
const isString = (payload) => typeof payload === "string";
const isNumber = (payload) => typeof payload === "number" && !isNaN(payload);
const isBoolean = (payload) => typeof payload === "boolean";
const isRegExp = (payload) => payload instanceof RegExp;
const isMap = (payload) => payload instanceof Map;
const isSet = (payload) => payload instanceof Set;
const isSymbol = (payload) => getType(payload) === "Symbol";
const isDate = (payload) => payload instanceof Date && !isNaN(payload.valueOf());
const isError = (payload) => payload instanceof Error;
const isNaNValue = (payload) => typeof payload === "number" && isNaN(payload);
const isPrimitive = (payload) => isBoolean(payload) || isNull(payload) || isUndefined(payload) || isNumber(payload) || isString(payload) || isSymbol(payload);
const isBigint = (payload) => typeof payload === "bigint";
const isInfinite = (payload) => payload === Infinity || payload === -Infinity;
const isTypedArray = (payload) => ArrayBuffer.isView(payload) && !(payload instanceof DataView);
const isURL = (payload) => payload instanceof URL;
const escapeKey = (key) => key.replace(/\\/g, "\\\\").replace(/\./g, "\\.");
const stringifyPath = (path) => path.map(String).map(escapeKey).join(".");
const parsePath = (string2, legacyPaths) => {
  const result = [];
  let segment = "";
  for (let i = 0; i < string2.length; i++) {
    let char = string2.charAt(i);
    if (!legacyPaths && char === "\\") {
      const escaped = string2.charAt(i + 1);
      if (escaped === "\\") {
        segment += "\\";
        i++;
        continue;
      } else if (escaped !== ".") {
        throw Error("invalid path");
      }
    }
    const isEscapedDot = char === "\\" && string2.charAt(i + 1) === ".";
    if (isEscapedDot) {
      segment += ".";
      i++;
      continue;
    }
    const isEndOfSegment = char === ".";
    if (isEndOfSegment) {
      result.push(segment);
      segment = "";
      continue;
    }
    segment += char;
  }
  const lastSegment = segment;
  result.push(lastSegment);
  return result;
};
function simpleTransformation(isApplicable, annotation, transform, untransform) {
  return {
    isApplicable,
    annotation,
    transform,
    untransform
  };
}
const simpleRules = [
  simpleTransformation(isUndefined, "undefined", () => null, () => void 0),
  simpleTransformation(isBigint, "bigint", (v) => v.toString(), (v) => {
    if (typeof BigInt !== "undefined") {
      return BigInt(v);
    }
    console.error("Please add a BigInt polyfill.");
    return v;
  }),
  simpleTransformation(isDate, "Date", (v) => v.toISOString(), (v) => new Date(v)),
  simpleTransformation(isError, "Error", (v, superJson) => {
    const baseError = {
      name: v.name,
      message: v.message
    };
    if ("cause" in v) {
      baseError.cause = v.cause;
    }
    superJson.allowedErrorProps.forEach((prop) => {
      baseError[prop] = v[prop];
    });
    return baseError;
  }, (v, superJson) => {
    const e2 = new Error(v.message, { cause: v.cause });
    e2.name = v.name;
    e2.stack = v.stack;
    superJson.allowedErrorProps.forEach((prop) => {
      e2[prop] = v[prop];
    });
    return e2;
  }),
  simpleTransformation(isRegExp, "regexp", (v) => "" + v, (regex) => {
    const body = regex.slice(1, regex.lastIndexOf("/"));
    const flags = regex.slice(regex.lastIndexOf("/") + 1);
    return new RegExp(body, flags);
  }),
  simpleTransformation(
    isSet,
    "set",
    // (sets only exist in es6+)
    // eslint-disable-next-line es5/no-es6-methods
    (v) => [...v.values()],
    (v) => new Set(v)
  ),
  simpleTransformation(isMap, "map", (v) => [...v.entries()], (v) => new Map(v)),
  simpleTransformation((v) => isNaNValue(v) || isInfinite(v), "number", (v) => {
    if (isNaNValue(v)) {
      return "NaN";
    }
    if (v > 0) {
      return "Infinity";
    } else {
      return "-Infinity";
    }
  }, Number),
  simpleTransformation((v) => v === 0 && 1 / v === -Infinity, "number", () => {
    return "-0";
  }, Number),
  simpleTransformation(isURL, "URL", (v) => v.toString(), (v) => new URL(v))
];
function compositeTransformation(isApplicable, annotation, transform, untransform) {
  return {
    isApplicable,
    annotation,
    transform,
    untransform
  };
}
const symbolRule = compositeTransformation((s, superJson) => {
  if (isSymbol(s)) {
    const isRegistered = !!superJson.symbolRegistry.getIdentifier(s);
    return isRegistered;
  }
  return false;
}, (s, superJson) => {
  const identifier = superJson.symbolRegistry.getIdentifier(s);
  return ["symbol", identifier];
}, (v) => v.description, (_, a, superJson) => {
  const value = superJson.symbolRegistry.getValue(a[1]);
  if (!value) {
    throw new Error("Trying to deserialize unknown symbol");
  }
  return value;
});
const constructorToName = [
  Int8Array,
  Uint8Array,
  Int16Array,
  Uint16Array,
  Int32Array,
  Uint32Array,
  Float32Array,
  Float64Array,
  Uint8ClampedArray
].reduce((obj, ctor) => {
  obj[ctor.name] = ctor;
  return obj;
}, {});
const typedArrayRule = compositeTransformation(isTypedArray, (v) => ["typed-array", v.constructor.name], (v) => [...v], (v, a) => {
  const ctor = constructorToName[a[1]];
  if (!ctor) {
    throw new Error("Trying to deserialize unknown typed array");
  }
  return new ctor(v);
});
function isInstanceOfRegisteredClass(potentialClass, superJson) {
  if (potentialClass?.constructor) {
    const isRegistered = !!superJson.classRegistry.getIdentifier(potentialClass.constructor);
    return isRegistered;
  }
  return false;
}
const classRule = compositeTransformation(isInstanceOfRegisteredClass, (clazz, superJson) => {
  const identifier = superJson.classRegistry.getIdentifier(clazz.constructor);
  return ["class", identifier];
}, (clazz, superJson) => {
  const allowedProps = superJson.classRegistry.getAllowedProps(clazz.constructor);
  if (!allowedProps) {
    return { ...clazz };
  }
  const result = {};
  allowedProps.forEach((prop) => {
    result[prop] = clazz[prop];
  });
  return result;
}, (v, a, superJson) => {
  const clazz = superJson.classRegistry.getValue(a[1]);
  if (!clazz) {
    throw new Error(`Trying to deserialize unknown class '${a[1]}' - check https://github.com/blitz-js/superjson/issues/116#issuecomment-773996564`);
  }
  return Object.assign(Object.create(clazz.prototype), v);
});
const customRule = compositeTransformation((value, superJson) => {
  return !!superJson.customTransformerRegistry.findApplicable(value);
}, (value, superJson) => {
  const transformer = superJson.customTransformerRegistry.findApplicable(value);
  return ["custom", transformer.name];
}, (value, superJson) => {
  const transformer = superJson.customTransformerRegistry.findApplicable(value);
  return transformer.serialize(value);
}, (v, a, superJson) => {
  const transformer = superJson.customTransformerRegistry.findByName(a[1]);
  if (!transformer) {
    throw new Error("Trying to deserialize unknown custom value");
  }
  return transformer.deserialize(v);
});
const compositeRules = [classRule, symbolRule, customRule, typedArrayRule];
const transformValue = (value, superJson) => {
  const applicableCompositeRule = findArr(compositeRules, (rule) => rule.isApplicable(value, superJson));
  if (applicableCompositeRule) {
    return {
      value: applicableCompositeRule.transform(value, superJson),
      type: applicableCompositeRule.annotation(value, superJson)
    };
  }
  const applicableSimpleRule = findArr(simpleRules, (rule) => rule.isApplicable(value, superJson));
  if (applicableSimpleRule) {
    return {
      value: applicableSimpleRule.transform(value, superJson),
      type: applicableSimpleRule.annotation
    };
  }
  return void 0;
};
const simpleRulesByAnnotation = {};
simpleRules.forEach((rule) => {
  simpleRulesByAnnotation[rule.annotation] = rule;
});
const untransformValue = (json, type, superJson) => {
  if (isArray(type)) {
    switch (type[0]) {
      case "symbol":
        return symbolRule.untransform(json, type, superJson);
      case "class":
        return classRule.untransform(json, type, superJson);
      case "custom":
        return customRule.untransform(json, type, superJson);
      case "typed-array":
        return typedArrayRule.untransform(json, type, superJson);
      default:
        throw new Error("Unknown transformation: " + type);
    }
  } else {
    const transformation = simpleRulesByAnnotation[type];
    if (!transformation) {
      throw new Error("Unknown transformation: " + type);
    }
    return transformation.untransform(json, superJson);
  }
};
const getNthKey = (value, n2) => {
  if (n2 > value.size)
    throw new Error("index out of bounds");
  const keys = value.keys();
  while (n2 > 0) {
    keys.next();
    n2--;
  }
  return keys.next().value;
};
function validatePath(path) {
  if (includes(path, "__proto__")) {
    throw new Error("__proto__ is not allowed as a property");
  }
  if (includes(path, "prototype")) {
    throw new Error("prototype is not allowed as a property");
  }
  if (includes(path, "constructor")) {
    throw new Error("constructor is not allowed as a property");
  }
}
const getDeep = (object2, path) => {
  validatePath(path);
  for (let i = 0; i < path.length; i++) {
    const key = path[i];
    if (isSet(object2)) {
      object2 = getNthKey(object2, +key);
    } else if (isMap(object2)) {
      const row = +key;
      const type = +path[++i] === 0 ? "key" : "value";
      const keyOfRow = getNthKey(object2, row);
      switch (type) {
        case "key":
          object2 = keyOfRow;
          break;
        case "value":
          object2 = object2.get(keyOfRow);
          break;
      }
    } else {
      object2 = object2[key];
    }
  }
  return object2;
};
const setDeep = (object2, path, mapper) => {
  validatePath(path);
  if (path.length === 0) {
    return mapper(object2);
  }
  let parent = object2;
  for (let i = 0; i < path.length - 1; i++) {
    const key = path[i];
    if (isArray(parent)) {
      const index = +key;
      parent = parent[index];
    } else if (isPlainObject$1(parent)) {
      parent = parent[key];
    } else if (isSet(parent)) {
      const row = +key;
      parent = getNthKey(parent, row);
    } else if (isMap(parent)) {
      const isEnd = i === path.length - 2;
      if (isEnd) {
        break;
      }
      const row = +key;
      const type = +path[++i] === 0 ? "key" : "value";
      const keyOfRow = getNthKey(parent, row);
      switch (type) {
        case "key":
          parent = keyOfRow;
          break;
        case "value":
          parent = parent.get(keyOfRow);
          break;
      }
    }
  }
  const lastKey = path[path.length - 1];
  if (isArray(parent)) {
    parent[+lastKey] = mapper(parent[+lastKey]);
  } else if (isPlainObject$1(parent)) {
    parent[lastKey] = mapper(parent[lastKey]);
  }
  if (isSet(parent)) {
    const oldValue = getNthKey(parent, +lastKey);
    const newValue = mapper(oldValue);
    if (oldValue !== newValue) {
      parent.delete(oldValue);
      parent.add(newValue);
    }
  }
  if (isMap(parent)) {
    const row = +path[path.length - 2];
    const keyToRow = getNthKey(parent, row);
    const type = +lastKey === 0 ? "key" : "value";
    switch (type) {
      case "key": {
        const newKey = mapper(keyToRow);
        parent.set(newKey, parent.get(keyToRow));
        if (newKey !== keyToRow) {
          parent.delete(keyToRow);
        }
        break;
      }
      case "value": {
        parent.set(keyToRow, mapper(parent.get(keyToRow)));
        break;
      }
    }
  }
  return object2;
};
const enableLegacyPaths = (version) => version < 1;
function traverse(tree, walker2, version, origin = []) {
  if (!tree) {
    return;
  }
  const legacyPaths = enableLegacyPaths(version);
  if (!isArray(tree)) {
    forEach(tree, (subtree, key) => traverse(subtree, walker2, version, [
      ...origin,
      ...parsePath(key, legacyPaths)
    ]));
    return;
  }
  const [nodeValue, children] = tree;
  if (children) {
    forEach(children, (child, key) => {
      traverse(child, walker2, version, [
        ...origin,
        ...parsePath(key, legacyPaths)
      ]);
    });
  }
  walker2(nodeValue, origin);
}
function applyValueAnnotations(plain, annotations, version, superJson) {
  traverse(annotations, (type, path) => {
    plain = setDeep(plain, path, (v) => untransformValue(v, type, superJson));
  }, version);
  return plain;
}
function applyReferentialEqualityAnnotations(plain, annotations, version) {
  const legacyPaths = enableLegacyPaths(version);
  function apply(identicalPaths, path) {
    const object2 = getDeep(plain, parsePath(path, legacyPaths));
    identicalPaths.map((path2) => parsePath(path2, legacyPaths)).forEach((identicalObjectPath) => {
      plain = setDeep(plain, identicalObjectPath, () => object2);
    });
  }
  if (isArray(annotations)) {
    const [root, other] = annotations;
    root.forEach((identicalPath) => {
      plain = setDeep(plain, parsePath(identicalPath, legacyPaths), () => plain);
    });
    if (other) {
      forEach(other, apply);
    }
  } else {
    forEach(annotations, apply);
  }
  return plain;
}
const isDeep = (object2, superJson) => isPlainObject$1(object2) || isArray(object2) || isMap(object2) || isSet(object2) || isError(object2) || isInstanceOfRegisteredClass(object2, superJson);
function addIdentity(object2, path, identities) {
  const existingSet = identities.get(object2);
  if (existingSet) {
    existingSet.push(path);
  } else {
    identities.set(object2, [path]);
  }
}
function generateReferentialEqualityAnnotations(identitites, dedupe) {
  const result = {};
  let rootEqualityPaths = void 0;
  identitites.forEach((paths) => {
    if (paths.length <= 1) {
      return;
    }
    if (!dedupe) {
      paths = paths.map((path) => path.map(String)).sort((a, b) => a.length - b.length);
    }
    const [representativePath, ...identicalPaths] = paths;
    if (representativePath.length === 0) {
      rootEqualityPaths = identicalPaths.map(stringifyPath);
    } else {
      result[stringifyPath(representativePath)] = identicalPaths.map(stringifyPath);
    }
  });
  if (rootEqualityPaths) {
    if (isEmptyObject(result)) {
      return [rootEqualityPaths];
    } else {
      return [rootEqualityPaths, result];
    }
  } else {
    return isEmptyObject(result) ? void 0 : result;
  }
}
const walker = (object2, identities, superJson, dedupe, path = [], objectsInThisPath = [], seenObjects = /* @__PURE__ */ new Map()) => {
  const primitive = isPrimitive(object2);
  if (!primitive) {
    addIdentity(object2, path, identities);
    const seen = seenObjects.get(object2);
    if (seen) {
      return dedupe ? {
        transformedValue: null
      } : seen;
    }
  }
  if (!isDeep(object2, superJson)) {
    const transformed2 = transformValue(object2, superJson);
    const result2 = transformed2 ? {
      transformedValue: transformed2.value,
      annotations: [transformed2.type]
    } : {
      transformedValue: object2
    };
    if (!primitive) {
      seenObjects.set(object2, result2);
    }
    return result2;
  }
  if (includes(objectsInThisPath, object2)) {
    return {
      transformedValue: null
    };
  }
  const transformationResult = transformValue(object2, superJson);
  const transformed = transformationResult?.value ?? object2;
  const transformedValue = isArray(transformed) ? [] : {};
  const innerAnnotations = {};
  forEach(transformed, (value, index) => {
    if (index === "__proto__" || index === "constructor" || index === "prototype") {
      throw new Error(`Detected property ${index}. This is a prototype pollution risk, please remove it from your object.`);
    }
    const recursiveResult = walker(value, identities, superJson, dedupe, [...path, index], [...objectsInThisPath, object2], seenObjects);
    transformedValue[index] = recursiveResult.transformedValue;
    if (isArray(recursiveResult.annotations)) {
      innerAnnotations[escapeKey(index)] = recursiveResult.annotations;
    } else if (isPlainObject$1(recursiveResult.annotations)) {
      forEach(recursiveResult.annotations, (tree, key) => {
        innerAnnotations[escapeKey(index) + "." + key] = tree;
      });
    }
  });
  const result = isEmptyObject(innerAnnotations) ? {
    transformedValue,
    annotations: !!transformationResult ? [transformationResult.type] : void 0
  } : {
    transformedValue,
    annotations: !!transformationResult ? [transformationResult.type, innerAnnotations] : innerAnnotations
  };
  if (!primitive) {
    seenObjects.set(object2, result);
  }
  return result;
};
function assignProp(carry, key, newVal, originalObject) {
  if (Object.prototype.propertyIsEnumerable.call(originalObject, key)) {
    carry[key] = newVal;
    return;
  }
  Object.defineProperty(carry, key, {
    value: newVal,
    enumerable: false,
    writable: true,
    configurable: true
  });
}
function isPlainObject(value) {
  return Object.getPrototypeOf(value) === Object.prototype && Object.prototype.toString.call(value) === "[object Object]";
}
function cloneRef(value, clones, sources, dests) {
  if (typeof value !== "object" || value === null)
    return value;
  const array = Array.isArray(value);
  if (!array && !isPlainObject(value))
    return value;
  const existing = clones.get(value);
  if (existing !== void 0)
    return existing;
  const clone = array ? new Array(value.length) : {};
  clones.set(value, clone);
  sources.push(value);
  dests.push(clone);
  return clone;
}
function copy(target, options = {}) {
  if (typeof target !== "object" || target === null)
    return target;
  const clones = /* @__PURE__ */ new Map();
  const sources = [];
  const dests = [];
  const result = cloneRef(target, clones, sources, dests);
  const onlyProps = Array.isArray(options.props) ? options.props : void 0;
  const nonenumerable = options.nonenumerable === true;
  while (sources.length) {
    const source = sources.pop();
    const dest = dests.pop();
    if (Array.isArray(source)) {
      for (let i = 0; i < source.length; i++) {
        if (i in source)
          dest[i] = cloneRef(source[i], clones, sources, dests);
      }
      continue;
    }
    if (nonenumerable) {
      for (const key of Object.getOwnPropertyNames(source)) {
        if (key === "__proto__")
          continue;
        if (onlyProps && !onlyProps.includes(key))
          continue;
        const newVal = cloneRef(source[key], clones, sources, dests);
        assignProp(dest, key, newVal, source);
      }
    } else {
      for (const key in source) {
        if (!Object.prototype.hasOwnProperty.call(source, key))
          continue;
        if (key === "__proto__")
          continue;
        if (onlyProps && !onlyProps.includes(key))
          continue;
        dest[key] = cloneRef(source[key], clones, sources, dests);
      }
    }
    for (const key of Object.getOwnPropertySymbols(source)) {
      if (onlyProps && !onlyProps.includes(key))
        continue;
      if (!nonenumerable && !Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      const newVal = cloneRef(source[key], clones, sources, dests);
      assignProp(dest, key, newVal, source);
    }
  }
  return result;
}
class SuperJSON {
  /**
   * @param dedupeReferentialEqualities  If true, SuperJSON will make sure only one instance of referentially equal objects are serialized and the rest are replaced with `null`.
   */
  constructor({ dedupe = false } = {}) {
    this.classRegistry = new ClassRegistry();
    this.symbolRegistry = new Registry((s) => s.description ?? "");
    this.customTransformerRegistry = new CustomTransformerRegistry();
    this.allowedErrorProps = [];
    this.dedupe = dedupe;
  }
  serialize(object2) {
    const identities = /* @__PURE__ */ new Map();
    const output = walker(object2, identities, this, this.dedupe);
    const res = {
      json: output.transformedValue
    };
    if (output.annotations) {
      res.meta = {
        ...res.meta,
        values: output.annotations
      };
    }
    const equalityAnnotations = generateReferentialEqualityAnnotations(identities, this.dedupe);
    if (equalityAnnotations) {
      res.meta = {
        ...res.meta,
        referentialEqualities: equalityAnnotations
      };
    }
    if (res.meta)
      res.meta.v = 1;
    return res;
  }
  deserialize(payload, options) {
    const { json, meta } = payload;
    let result = options?.inPlace ? json : copy(json);
    if (meta?.values) {
      result = applyValueAnnotations(result, meta.values, meta.v ?? 0, this);
    }
    if (meta?.referentialEqualities) {
      result = applyReferentialEqualityAnnotations(result, meta.referentialEqualities, meta.v ?? 0);
    }
    return result;
  }
  stringify(object2) {
    return JSON.stringify(this.serialize(object2));
  }
  parse(string2) {
    return this.deserialize(JSON.parse(string2), { inPlace: true });
  }
  registerClass(v, options) {
    this.classRegistry.register(v, options);
  }
  registerSymbol(v, identifier) {
    this.symbolRegistry.register(v, identifier);
  }
  registerCustom(transformer, name) {
    this.customTransformerRegistry.register({
      name,
      ...transformer
    });
  }
  allowErrorProps(...props) {
    this.allowedErrorProps.push(...props);
  }
}
SuperJSON.defaultInstance = new SuperJSON();
SuperJSON.serialize = SuperJSON.defaultInstance.serialize.bind(SuperJSON.defaultInstance);
SuperJSON.deserialize = SuperJSON.defaultInstance.deserialize.bind(SuperJSON.defaultInstance);
SuperJSON.stringify = SuperJSON.defaultInstance.stringify.bind(SuperJSON.defaultInstance);
SuperJSON.parse = SuperJSON.defaultInstance.parse.bind(SuperJSON.defaultInstance);
SuperJSON.registerClass = SuperJSON.defaultInstance.registerClass.bind(SuperJSON.defaultInstance);
SuperJSON.registerSymbol = SuperJSON.defaultInstance.registerSymbol.bind(SuperJSON.defaultInstance);
SuperJSON.registerCustom = SuperJSON.defaultInstance.registerCustom.bind(SuperJSON.defaultInstance);
SuperJSON.allowErrorProps = SuperJSON.defaultInstance.allowErrorProps.bind(SuperJSON.defaultInstance);
function getContext() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 10 * 1e3,
        retry(failureCount, error) {
          if (error instanceof Response && error.status >= 300 && error.status < 400) {
            return false;
          }
          return failureCount < 3;
        }
      },
      dehydrate: { serializeData: SuperJSON.serialize },
      hydrate: { deserializeData: SuperJSON.deserialize }
    },
    mutationCache: new MutationCache({
      onSuccess(_data, variables, _context, mutation) {
        const invalidates = mutation.meta?.invalidates;
        if (!invalidates) {
          return;
        }
        const queryKeys = invalidates(variables);
        if (queryKeys.length === 0) {
          return;
        }
        queryClient.invalidateQueries({
          predicate(query) {
            return queryKeys.some((queryKey) => matchQuery({ queryKey }, query));
          }
        });
      }
    })
  });
  return {
    queryClient
  };
}
function Provider({
  children,
  queryClient
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children });
}
var shouldDehydrateAllQueries = () => true;
function setupCoreRouterSsrQueryIntegration({ router: router2, queryClient, dehydrateOptions, hydrateOptions, handleRedirects = true }) {
  {
    const originalDehydrate = router2.options.dehydrate;
    let streamState;
    let cleanedUp = false;
    const finalizeQueryStream = (failure) => {
      const state = streamState;
      streamState = void 0;
      if (!state) return;
      state.unsubscribe();
      try {
        if (failure) state.controller.error(failure.error);
        else state.controller.close();
      } catch {
      }
    };
    const teardown = () => {
      cleanedUp = true;
      finalizeQueryStream();
      queryClient.clear();
    };
    router2.serverSsrLifecycle = {
      ...router2.serverSsrLifecycle,
      onServerSsrAttach: [...router2.serverSsrLifecycle?.onServerSsrAttach ?? [], (serverSsr) => serverSsr.onCleanup(teardown)]
    };
    router2.options.dehydrate = async () => {
      let originalDehydrated;
      try {
        originalDehydrated = await originalDehydrate?.();
      } finally {
        if (cleanedUp) queryClient.clear();
      }
      if (cleanedUp) return;
      const currentDehydrateOptions = queryClient.getDefaultOptions().dehydrate;
      const shouldDehydrateQuery = dehydrateOptions?.shouldDehydrateQuery ?? currentDehydrateOptions?.shouldDehydrateQuery ?? shouldDehydrateAllQueries;
      const serializeData = dehydrateOptions?.serializeData ?? currentDehydrateOptions?.serializeData;
      const shouldRedactErrors = dehydrateOptions?.shouldRedactErrors ?? currentDehydrateOptions?.shouldRedactErrors;
      const initialQueries = new Array();
      const sentQueries = /* @__PURE__ */ new Set();
      for (const query of queryClient.getQueryCache().getAll()) if (shouldDehydrateQuery(query)) {
        initialQueries.push(dehydrateQuery(query, serializeData, shouldRedactErrors));
        sentQueries.add(query.queryHash);
      }
      let controller;
      const stream = new ReadableStream({ start(value) {
        controller = value;
      } });
      const flushPendingQueries = () => {
        const state = streamState;
        const queries = state?.pendingQueries;
        if (!state || !queries) return;
        state.pendingQueries = void 0;
        const dehydratedQueries = new Array();
        for (const query of queries.values()) {
          if (state.sentQueries.has(query.queryHash) || !shouldDehydrateQuery(query)) continue;
          dehydratedQueries.push(dehydrateQuery(query, serializeData, shouldRedactErrors));
          state.sentQueries.add(query.queryHash);
        }
        if (dehydratedQueries.length > 0) state.controller.enqueue(dehydratedQueries);
      };
      const unsubscribe = queryClient.getQueryCache().subscribe((event) => {
        const state = streamState;
        if (!state) return;
        if (state.sentQueries.has(event.query.queryHash) || !event.query.promise) return;
        if (!state.pendingQueries) {
          state.pendingQueries = /* @__PURE__ */ new Map();
          queueMicrotask(() => {
            try {
              flushPendingQueries();
            } catch (error) {
              finalizeQueryStream({ error });
            }
          });
        }
        state.pendingQueries.set(event.query.queryHash, event.query);
      });
      streamState = {
        controller,
        sentQueries,
        unsubscribe
      };
      const finishRendering = () => {
        try {
          flushPendingQueries();
        } catch (error) {
          finalizeQueryStream({ error });
          return;
        }
        finalizeQueryStream();
      };
      router2.serverSsr.onRenderFinished(finishRendering);
      return {
        ...originalDehydrated,
        query: {
          ...initialQueries.length > 0 && { initial: initialQueries },
          stream
        }
      };
    };
    return;
  }
}
function setupRouterSsrQueryIntegration(opts) {
  setupCoreRouterSsrQueryIntegration(opts);
  if (opts.wrapQueryClient === false) return;
  const OGWrap = opts.router.options.Wrap || reactExports.Fragment;
  opts.router.options.Wrap = ({ children }) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, {
      client: opts.queryClient,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(OGWrap, { children })
    });
  };
}
var UNSAFE_KEYS = ["__proto__", "constructor", "prototype"];
var isSafeIdentifier = function isSafeIdentifier2(v, allowSlash) {
  if (typeof v !== "string") return false;
  if (v.length > 128) return false;
  if (UNSAFE_KEYS.indexOf(v) > -1) return false;
  if (v.indexOf("..") > -1) return false;
  if (v.indexOf("\\") > -1) return false;
  if (!allowSlash && v.indexOf("/") > -1) return false;
  if (/[\x00-\x1F\x7F]/.test(v)) return false;
  return true;
};
var resourcesToBackend = function resourcesToBackend2(res) {
  return {
    type: "backend",
    init: function init(services, backendOptions, i18nextOptions) {
    },
    read: function read(language, namespace, callback) {
      if (!isSafeIdentifier(language, false) || !isSafeIdentifier(namespace, true)) {
        return callback(new Error("i18next-resources-to-backend: unsafe language/namespace value"), false);
      }
      if (typeof res === "function") {
        if (res.length < 3) {
          try {
            var r = res(language, namespace);
            if (r && typeof r.then === "function") {
              r.then(function(data) {
                return callback(null, data && data.default || data);
              }).catch(callback);
            } else {
              callback(null, r);
            }
          } catch (err) {
            callback(err);
          }
          return;
        }
        res(language, namespace, callback);
        return;
      }
      callback(null, res && res[language] && res[language][namespace]);
    }
  };
};
const handle$1 = {
  i18n: ["common"]
};
const ErrorComponent = ({ error }) => {
  const router2 = useRouter();
  const canGoBack = useCanGoBack();
  const { t: t2 } = useTranslation(handle$1.i18n);
  let title, subtitle;
  if (error instanceof Response && error.status === FORBIDDEN) {
    title = t2("common:errors.forbidden.title");
    subtitle = t2("common:errors.forbidden.subtitle");
  } else if (error instanceof Response && error.status === NOT_FOUND$1) {
    title = t2("common:errors.not_found");
    subtitle = null;
  } else {
    title = t2("common:error_boundary.default.title");
    subtitle = t2("common:error_boundary.default.subtitle");
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 flex-col items-center justify-center gap-md", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Typo, { variant: "title1", className: "text-purple-hover", children: title }),
    subtitle ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-grey-primary text-s mb-lg", children: subtitle }) : null,
    canGoBack ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Button,
      {
        variant: "primary",
        onClick: () => {
          router2.history.back();
        },
        children: t2("common:go_back")
      }
    ) }) : null,
    null
  ] });
};
const AppConfigContext = createSimpleContext("AppConfig");
const getRootLoaderDataFn = createServerFn({
  method: "GET"
}).middleware([servicesMiddleware]).handler(createSsrRpc("2434b75a233407e6a0f02cb1d65aff801cf21dbf917ed2a61d873f754edc5c16"));
function makeI18nInstance(locale) {
  const instance2 = createInstance();
  instance2.use(initReactI18next).init({
    ...i18nConfig,
    resources,
    lng: locale,
    ns: ALL_NAMESPACES,
    initAsync: false
  });
  return instance2;
}
function SegmentScript({ script, nonce }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "script",
    {
      async: true,
      nonce,
      suppressHydrationWarning: true,
      dangerouslySetInnerHTML: {
        __html: script
      }
    }
  );
}
const tailwindStyles = "/assets/tailwind-BxU_b8EK.css";
const CsrfContext = reactExports.createContext("");
function useCsrfToken() {
  return reactExports.useContext(CsrfContext);
}
const NonceContext = reactExports.createContext("");
const NonceProvider = NonceContext.Provider;
const Route$1Q = createRootRouteWithContext()({
  head: () => ({
    meta: [{
      charSet: "utf-8"
    }, {
      name: "viewport",
      content: "width=device-width,initial-scale=1"
    }, {
      title: "MoneyBee Compliance"
    }],
    links: [{
      rel: "preload",
      href: logosSVGSpriteHref,
      as: "image"
    }, {
      rel: "preload",
      href: iconsSVGSpriteHref,
      as: "image"
    }, {
      rel: "stylesheet",
      href: tailwindStyles
    }, {
      rel: "stylesheet",
      href: "/fonts/Inter/inter.css"
    }, {
      rel: "stylesheet",
      href: "/fonts/InterTight/inter-tight.css"
    }, {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/favicons/apple-touch-icon.png"
    }, {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/favicons/favicon-32x32.png"
    }, {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/favicons/favicon-16x16.png"
    }, {
      rel: "manifest",
      href: "/site.webmanifest"
    }, {
      rel: "icon",
      href: "/favicon.ico"
    }]
  }),
  loader: () => getRootLoaderDataFn(),
  shellComponent: RootShell,
  errorComponent: RootErrorBoundary
});
function useRootLoaderData() {
  const match = useMatch({
    from: "__root__",
    shouldThrow: false
  });
  return match?.loaderData;
}
function RootShell({
  children
}) {
  const loaderData = useRootLoaderData();
  const locale = loaderData?.locale ?? "en";
  const theme = loaderData?.theme ?? "light";
  const timezone = loaderData?.timezone ?? "UTC";
  const nonce = loaderData?.nonce ?? "";
  const csrf = loaderData?.csrf ?? "";
  const appConfig = loaderData?.appConfig;
  const segmentScript = loaderData?.segmentScript;
  const env = loaderData?.ENV ?? {};
  const [i18n] = reactExports.useState(() => getSSRInstance(locale) ?? makeI18nInstance(locale));
  reactExports.useEffect(() => {
    if (i18n.language !== locale) {
      void i18n.changeLanguage(locale);
    }
  }, [i18n, locale]);
  const [hydrated, setHydrated] = reactExports.useState(false);
  reactExports.useEffect(() => {
    setHydrated(true);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: locale, dir: i18n.dir(), className: clsx("overscroll-y-none", theme === "dark" && "dark"), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("head", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}),
      segmentScript ? /* @__PURE__ */ jsxRuntimeExports.jsx(SegmentScript, { nonce, script: segmentScript }) : null
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { "data-hydrated": hydrated || void 0, className: "bg-surface-page selection:text-grey-white selection:bg-purple-primary min-h-screen w-full antialiased text-grey-primary", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(I18nextProvider, { i18n, children: /* @__PURE__ */ jsxRuntimeExports.jsx(I18nProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(NonceProvider, { value: nonce, children: /* @__PURE__ */ jsxRuntimeExports.jsx(FormatContext.Provider, { value: {
        locale,
        timezone
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CsrfContext.Provider, { value: csrf, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeProvider, { defaultTheme: theme, children: appConfig ? /* @__PURE__ */ jsxRuntimeExports.jsx(AppConfigContext.Provider, { value: appConfig, children }) : children }) }) }) }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("script", { suppressHydrationWarning: true, nonce, dangerouslySetInnerHTML: {
        __html: `window.ENV = ${JSON.stringify(env)}`
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ClientOnly, {})
    ] })
  ] });
}
function RootErrorBoundary({
  error
}) {
  reactExports.useEffect(() => {
    captureException(error);
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(RootErrorBoundaryBody, { error });
}
function RootErrorBoundaryBody({
  error
}) {
  useTranslation();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-surface-page flex size-full flex-col items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-surface-card mt-sm0 flex shrink-0 rounded-2xl p-2xl text-center shadow-md", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ErrorComponent, { error }) }) });
}
const Route$1P = createFileRoute()({
  server: {
    handlers: {
      GET: async () => {
        return new Response(null, { status: 302, headers: { Location: "/sign-in" } });
      }
    }
  }
});
const catchAllLoader = createServerFn().middleware([servicesMiddleware]).handler(createSsrRpc("1d24681fb4d9e54ee3acace0e37203e5829742ae19c4e9685f9dbc807c49ceff"));
const Route$1O = createFileRoute()({
  loader: () => catchAllLoader()
});
const $$splitComponentImporter$1k = () => import("./_app-CBg1wy4j.mjs");
const Route$1N = createFileRoute()({
  component: lazyRouteComponent($$splitComponentImporter$1k, "component")
});
const $$splitErrorComponentImporter$f = () => import("./app-router-B7s5GfVz.mjs");
const appRouterLoader = createServerFn().middleware([authMiddleware]).handler(createSsrRpc("54f6369f93f640ea9ef7a8eef3570c00b16f7ed5b44f218829d97a325a705a4f"));
const Route$1M = createFileRoute()({
  loader: () => appRouterLoader(),
  errorComponent: lazyRouteComponent($$splitErrorComponentImporter$f, "errorComponent")
});
const Route$1L = createFileRoute()({
  server: {
    handlers: {
      GET: async () => {
        try {
          return new Response("OK");
        } catch (error) {
          console.error("healthcheck ❌", { error });
          return new Response("ERROR", { status: 500 });
        }
      }
    }
  }
});
const authI18n = ["auth", "common"];
const $$splitComponentImporter$1j = () => import("./_auth-PioSyuZp.mjs");
const Route$1K = createFileRoute()({
  staticData: {
    i18n: authI18n
  },
  beforeLoad: async ({
    context
  }) => {
    await context.i18n.loadNamespaces(["common", "auth"]);
  },
  component: lazyRouteComponent($$splitComponentImporter$1j, "component")
});
const $$splitComponentImporter$1i = () => import("./_builder-BInKvwRs.mjs");
const appBuilderLayoutLoader = createServerFn({
  method: "GET"
}).middleware([authMiddleware]).handler(createSsrRpc("84eac02c9d8f666b46122a63a8c2d500f028fba6ad6fe0463043c6d76a73a221"));
const Route$1J = createFileRoute()({
  loader: () => appBuilderLayoutLoader(),
  component: lazyRouteComponent($$splitComponentImporter$1i, "component")
});
const $$splitComponentImporter$1h = () => import("./onboarding-0bnN9aiU.mjs");
const onboardingLoader = createServerFn().middleware([servicesMiddleware]).handler(createSsrRpc("e2bcbb7a524b63816c0513cb2183a4a7a7e7967f259d2fe2f841228030e849d2"));
const Route$1I = createFileRoute()({
  staticData: {
    i18n: authI18n
  },
  beforeLoad: async ({
    context
  }) => {
    await context.i18n.loadNamespaces(["common", "auth"]);
  },
  loader: () => onboardingLoader(),
  component: lazyRouteComponent($$splitComponentImporter$1h, "component")
});
const Route$1H = createFileRoute()({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const { appConfigRepository } = initServerServices(request);
        const appConfig = await appConfigRepository.getAppConfig();
        if (appConfig.auth.provider !== "oidc") {
          return Response.redirect(new URL("/sign-in", request.url).toString(), 302);
        }
        const oidc = await makeOidcService(appConfig);
        const { url, state, codeVerifier } = await oidc.buildAuthorizationUrl();
        const proto = request.headers.get("x-forwarded-proto") ?? new URL(request.url).protocol;
        const oauth2Cookie = getOauth2Cookie({
          secrets: [getServerEnv("SESSION_SECRET")],
          secure: proto === "https:"
        });
        const cookieHeader = await oauth2Cookie.serialize(JSON.stringify({ state, codeVerifier }));
        return new Response(null, {
          status: 302,
          headers: {
            Location: url,
            "Set-Cookie": cookieHeader
          }
        });
      }
    }
  }
});
const Route$1G = createFileRoute()({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const url = new URL(request.url);
        const code = url.searchParams.get("code");
        const state = url.searchParams.get("state");
        const proto = request.headers.get("x-forwarded-proto") ?? url.protocol;
        const secrets = [getServerEnv("SESSION_SECRET")];
        const secure = proto === "https:";
        const oauth2Cookie = getOauth2Cookie({ secrets, secure });
        const rawCookie = await oauth2Cookie.parse(request.headers.get("cookie"));
        const { appConfigRepository, authService } = initServerServices(request);
        const clearOauth2Cookie = await oauth2Cookie.serialize("", { maxAge: 0 });
        if (!code || !state || !rawCookie) {
          return Response.redirect(new URL("/sign-in", request.url).toString(), 302);
        }
        let storedState;
        let codeVerifier;
        try {
          const parsed = JSON.parse(rawCookie);
          storedState = parsed.state;
          codeVerifier = parsed.codeVerifier;
        } catch {
          return new Response("Invalid oauth2 cookie", {
            status: 400,
            headers: { "Set-Cookie": clearOauth2Cookie }
          });
        }
        if (state !== storedState) {
          return new Response("State mismatch", {
            status: 400,
            headers: { "Set-Cookie": clearOauth2Cookie }
          });
        }
        const appConfig = await appConfigRepository.getAppConfig();
        const oidc = await makeOidcService(appConfig);
        let tokens;
        try {
          tokens = await oidc.exchangeCode(code, codeVerifier);
        } catch (err) {
          if (err instanceof Error) {
            await setToast({ type: "error", message: err.message });
          }
          return new Response(null, {
            status: 302,
            headers: [
              ["Location", new URL("/sign-in", request.url).toString()],
              ["Set-Cookie", clearOauth2Cookie]
            ]
          });
        }
        try {
          await authService.authenticateOidc(request, tokens, {
            successRedirect: "/app-router",
            failureRedirect: "/sign-in"
          });
          return new Response(null, { status: 302, headers: { Location: "/sign-in" } });
        } catch (err) {
          if (err instanceof Response && err.status >= 300 && err.status < 400) {
            const headers = new Headers(err.headers);
            headers.append("Set-Cookie", clearOauth2Cookie);
            return new Response(null, { status: err.status, headers });
          }
          throw err;
        }
      }
    }
  }
});
var timestring$1;
var hasRequiredTimestring;
function requireTimestring() {
  if (hasRequiredTimestring) return timestring$1;
  hasRequiredTimestring = 1;
  timestring$1 = parseTimestring;
  const DEFAULT_OPTS = {
    hoursPerDay: 24,
    daysPerWeek: 7,
    weeksPerMonth: 4,
    monthsPerYear: 12,
    daysPerYear: 365.25
  };
  const UNIT_MAP = {
    ms: ["ms", "milli", "millisecond", "milliseconds"],
    s: ["s", "sec", "secs", "second", "seconds"],
    m: ["m", "min", "mins", "minute", "minutes"],
    h: ["h", "hr", "hrs", "hour", "hours"],
    d: ["d", "day", "days"],
    w: ["w", "week", "weeks"],
    mth: ["mon", "mth", "mths", "month", "months"],
    y: ["y", "yr", "yrs", "year", "years"]
  };
  function parseTimestring(string2, returnUnit, opts) {
    opts = Object.assign({}, DEFAULT_OPTS, opts || {});
    let totalSeconds = 0;
    let unitValues = getUnitValues(opts);
    let groups = string2.toLowerCase().replace(/[^.\w+-]+/g, "").match(/[-+]?[0-9.]+[a-z]+/g);
    if (groups === null) {
      throw new Error(`The string [${string2}] could not be parsed by timestring`);
    }
    groups.forEach((group) => {
      let value = group.match(/[0-9.]+/g)[0];
      let unit = group.match(/[a-z]+/g)[0];
      totalSeconds += getSeconds(value, unit, unitValues);
    });
    if (returnUnit) {
      return convert(totalSeconds, returnUnit, unitValues);
    }
    return totalSeconds;
  }
  function getUnitValues(opts) {
    let unitValues = {
      ms: 1e-3,
      s: 1,
      m: 60,
      h: 3600
    };
    unitValues.d = opts.hoursPerDay * unitValues.h;
    unitValues.w = opts.daysPerWeek * unitValues.d;
    unitValues.mth = opts.daysPerYear / opts.monthsPerYear * unitValues.d;
    unitValues.y = opts.daysPerYear * unitValues.d;
    return unitValues;
  }
  function getUnitKey(unit) {
    for (let key of Object.keys(UNIT_MAP)) {
      if (UNIT_MAP[key].indexOf(unit) > -1) {
        return key;
      }
    }
    throw new Error(`The unit [${unit}] is not supported by timestring`);
  }
  function getSeconds(value, unit, unitValues) {
    return value * unitValues[getUnitKey(unit)];
  }
  function convert(value, unit, unitValues) {
    return value / unitValues[getUnitKey(unit)];
  }
  return timestring$1;
}
var timestringExports = requireTimestring();
const timestring = /* @__PURE__ */ getDefaultExportFromCjs(timestringExports);
function cacheHeader(params) {
  const transformed = Object.entries(params).reduce((acc, [key, value]) => {
    const kebabKey = key.replace(/[A-Z]/g, (char) => "-" + char.toLowerCase());
    return typeof value === "string" || value === true ? [...acc, value === true ? kebabKey : `${kebabKey}=${timestring(value)}`] : acc;
  }, []);
  return transformed.join(", ");
}
const Route$1F = createFileRoute()({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const url = new URL(request.url);
        const lng = _enum(supportedLngs).parse(url.searchParams.get("lng"));
        const namespaces = resources[lng];
        const ns = string().refine((key) => Object.keys(namespaces).includes(String(key))).parse(url.searchParams.get("ns"));
        const headers = new Headers();
        {
          headers.set(
            "Cache-Control",
            cacheHeader({
              maxAge: "1d",
              staleWhileRevalidate: "7d",
              staleIfError: "7d"
            })
          );
        }
        return Response.json(namespaces[ns], { headers });
      }
    }
  }
});
const Route$1E = createFileRoute()({
  server: {
    handlers: {
      GET: async () => {
        const content = ["User-agent: *", "Disallow: /"];
        return new Response(content.join("\n"), {
          status: 200,
          headers: {
            "content-type": "text/plain"
          }
        });
      }
    }
  }
});
const authRedirectLoader = createServerFn().middleware([servicesMiddleware]).handler(createSsrRpc("e43e9eeaeb4c49ea457b7f8042a90611c35a760ccb59ce0e4665bdd220dc0283"));
const Route$1D = createFileRoute()({
  loader: () => authRedirectLoader()
});
const $$splitComponentImporter$1g = () => import("./create-password-BR5NbQ0n.mjs");
const createPasswordLoader = createServerFn().middleware([servicesMiddleware]).handler(createSsrRpc("6da7fd1e937eb76a3da98c1eae2f5b00ba1261770e9e39059ea4e42fb39c05a0"));
const Route$1C = createFileRoute()({
  staticData: {
    i18n: authI18n
  },
  loader: () => createPasswordLoader(),
  component: lazyRouteComponent($$splitComponentImporter$1g, "component")
});
const $$splitComponentImporter$1f = () => import("./email-verification-CWilpbzX.mjs");
const emailVerificationLoader = createServerFn().middleware([servicesMiddleware]).handler(createSsrRpc("f6ade2d030bce8b55f721d90fa3d9327598258d26781c52971bd4ed5ea65533e"));
const Route$1B = createFileRoute()({
  staticData: {
    i18n: authI18n,
    alignment: "reverse"
  },
  loader: () => emailVerificationLoader(),
  component: lazyRouteComponent($$splitComponentImporter$1f, "component")
});
const $$splitErrorComponentImporter$e = () => import("./sign-in-CgmcWezo.mjs");
const $$splitComponentImporter$1e = () => import("./sign-in-D01FY5Y8.mjs");
const signInLoader = createServerFn().middleware([servicesMiddleware]).handler(createSsrRpc("35a259fecdcb9b6f37e5d9af14cde2d19eb31c44df12758aaa353d284a9d912b"));
const Route$1A = createFileRoute()({
  staticData: {
    i18n: authI18n
  },
  loader: () => signInLoader(),
  component: lazyRouteComponent($$splitComponentImporter$1e, "component"),
  errorComponent: lazyRouteComponent($$splitErrorComponentImporter$e, "errorComponent")
});
const $$splitComponentImporter$1d = () => import("./sign-in-email-ANtCBfz-.mjs");
const signInEmailLoader = createServerFn().middleware([servicesMiddleware]).handler(createSsrRpc("bf0a785a637f5f2a759fbb1e8081bc8508a66bcb98e6fac8cace8c3cf4b681c8"));
const Route$1z = createFileRoute()({
  staticData: {
    i18n: authI18n
  },
  loader: () => signInEmailLoader(),
  component: lazyRouteComponent($$splitComponentImporter$1d, "component")
});
const AgnosticNavigationContext = createSimpleContext("AgnosticNavigation");
const useAgnosticNavigation = () => {
  return AgnosticNavigationContext.useValue();
};
const pageLayoutGutter = {
  padding: "p-md gap-md md:p-lg md:gap-lg lg:px-2xl lg:gap-2xl lg:py-lg",
  gap: "gap-md md:gap-lg lg:gap-2xl",
  paddingX: "px-md md:px-lg lg:px-2xl",
  paddingTop: "pt-md md:pt-lg lg:pt-lg",
  bleedX: "-mx-md md:-mx-lg lg:-mx-2xl",
  bleedBottom: "-mb-md md:-mb-lg lg:-mb-lg",
  footerPaddingY: "pt-md pb-md md:pb-lg lg:pb-lg"
};
const PageStickyFooter = function PageStickyFooter2({
  ref,
  className,
  surface = "page",
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      ref,
      className: cn$1(
        "sticky bottom-0 flex items-center justify-between border-t border-transparent",
        surface === "page" ? "bg-surface-page" : "bg-surface-card",
        pageLayoutGutter.bleedX,
        pageLayoutGutter.bleedBottom,
        pageLayoutGutter.paddingX,
        pageLayoutGutter.footerPaddingY,
        className
      ),
      ...props
    }
  );
};
function PageMain({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: cn$1("relative bg-surface-page flex flex-1 flex-col", className), ...props });
}
function PageHeader({ className, children, color, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(StickyComponent, { sentinelClassName: "top-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: cn$1(
        "sticky top-0 z-1 h-12 text-l flex shrink-0 flex-row items-center font-semibold px-md bg-surface-page border-y border-transparent sentinel-intersect:border-b-grey-border sentinel-intersect:shadow-sticky-top",
        className
      ),
      ...props,
      children
    }
  ) });
}
const PageContainer = function PageContainer2({
  ref,
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, className: cn$1("flex min-w-0 flex-1 flex-col", className), ...props, children });
};
const pageDescriptionClassName = cva(
  "bg-grey-white text-s text-grey-secondary flex flex-row gap-sm p-md font-normal border-grey-border dark:bg-grey-background",
  {
    variants: {
      headerBanner: {
        true: "border-b",
        false: "border rounded-md "
      }
    },
    defaultVariants: {
      headerBanner: false
    }
  }
);
function PageDescription({
  className,
  withIcon = true,
  headerBanner = false,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: cn$1(pageDescriptionClassName({ headerBanner }), className), ...props, children: [
    withIcon ? /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "tip", className: "size-5 shrink-0" }) : null,
    props.children
  ] });
}
const PageContentClassName = cva("flex flex-1 flex-col text-default", {
  variants: {
    padding: {
      default: pageLayoutGutter.padding,
      compact: "p-md gap-md",
      none: "p-0"
    },
    width: {
      fluid: null,
      readable: "w-full max-w-(--breakpoint-xl)",
      form: "w-full max-w-(--breakpoint-lg)",
      table: "min-w-0 w-full"
    },
    centered: {
      true: "mx-auto",
      false: null
    }
  },
  defaultVariants: {
    padding: "default",
    width: "fluid",
    centered: false
  }
});
function PageContent({ className, centered, padding, width, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: PageContentClassName({ centered, padding, width, className }), ...props });
}
function PageBackLink({ className: _className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { className: cn$1(CtaV2ClassName({ variant: "secondary", appearance: "stroked", mode: "icon" })), ...props, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "arrow-left", className: "size-4 rtl:rotate-180", "aria-hidden": true }) });
}
const Page = {
  Main: PageMain,
  Header: PageHeader,
  BackLink: PageBackLink,
  Container: PageContainer,
  Content: PageContent,
  StickyFooter: PageStickyFooter,
  Description: PageDescription
};
const BreadCrumbLinkInner = ({
  ref,
  isLast,
  className,
  children,
  ...props
}) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "a",
  {
    ref,
    ...props,
    className: cn$1(
      "text-h2 flex items-center font-semibold transition-colors shrink-0",
      { "text-grey-placeholder hover:text-grey-primary": !isLast },
      className
    ),
    children
  }
);
const CreatedBreadCrumbLink = createLink(BreadCrumbLinkInner);
const BreadCrumbLink = (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(CreatedBreadCrumbLink, { preload: "intent", ...props });
const BreadCrumbs = ({ back }) => {
  const matches = useMatches();
  const links = reactExports.useMemo(
    () => matches.filter((match) => Boolean(match.staticData?.BreadCrumbs)).map((match) => ({
      Elements: match.staticData?.BreadCrumbs?.filter(Boolean),
      pathname: match.pathname,
      data: match.loaderData
    })),
    [matches]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-row items-center gap-md", children: [
    back ? /* @__PURE__ */ jsxRuntimeExports.jsx(Page.BackLink, { to: back }) : links.length > 1 ? /* @__PURE__ */ jsxRuntimeExports.jsx(Page.BackLink, { to: links.at(-2).pathname }) : null,
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-sm items-center", children: links.map(({ Elements, pathname, data }, linkIndex) => {
      const isLastLink = linkIndex === links.length - 1;
      return Elements ? Elements.map((Element, elementIndex) => {
        const isLastElement = elementIndex === Elements.length - 1;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(reactExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Element, { isLast: isLastElement && isLastLink, data }, pathname),
          !(isLastElement && isLastLink) ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-h2 text-grey-disabled font-semibold", children: "/" }) : null
        ] }, `${pathname}-${elementIndex}`);
      }) : null;
    }) })
  ] });
};
const BackButton = ({ back }) => {
  const matches = useMatches();
  const links = reactExports.useMemo(
    () => matches.filter((match) => Boolean(match.staticData?.BreadCrumbs)).map((match) => ({
      Elements: match.staticData?.BreadCrumbs?.filter(Boolean),
      pathname: match.pathname
    })),
    [matches]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "shrink-0", children: back ? /* @__PURE__ */ jsxRuntimeExports.jsx(Page.BackLink, { to: back }) : links.length > 1 ? /* @__PURE__ */ jsxRuntimeExports.jsx(Page.BackLink, { to: links.at(-2).pathname }) : null });
};
const $$splitComponentImporter$1c = () => import("./account-CFRWQmtS.mjs");
const Route$1y = createFileRoute()({
  staticData: {
    BreadCrumbs: [({
      isLast
    }) => {
      const {
        t: t2
      } = useTranslation(["navigation"]);
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(BreadCrumbLink, { to: "/account", isLast, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "user", className: "me-sm size-6" }),
        t2("navigation:my_account")
      ] });
    }]
  },
  component: lazyRouteComponent($$splitComponentImporter$1c, "component")
});
const $$splitErrorComponentImporter$d = () => import("./analytics-legacy-D4MsX3NE.mjs");
const $$splitComponentImporter$1b = () => import("./analytics-legacy-09mnFY1b.mjs");
const analyticsLegacyLoader = createServerFn().middleware([authMiddleware]).handler(createSsrRpc("f83b5212fec014171a188acfaf7c75cdb389ad95ff8015a1b0d5e8fe47315f6b"));
const Route$1x = createFileRoute()({
  staticData: {
    BreadCrumbs: [({
      isLast
    }) => {
      const {
        t: t2
      } = useTranslation(["navigation"]);
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(BreadCrumbLink, { to: "/detection/analytics", isLast, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "analytics", className: "me-sm size-6" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "line-clamp-1 text-start", children: t2("navigation:analytics") })
      ] });
    }]
  },
  staleTime: Infinity,
  loader: () => analyticsLegacyLoader(),
  component: lazyRouteComponent($$splitComponentImporter$1b, "component"),
  errorComponent: lazyRouteComponent($$splitErrorComponentImporter$d, "errorComponent")
});
const $$splitComponentImporter$1a = () => import("./cases-DGO0c7WT.mjs");
const casesLayoutLoader = createServerFn({
  method: "GET"
}).middleware([authMiddleware]).handler(createSsrRpc("4cbe671987772f5e5209a26475aa49126a52dc94032d8df86778e6294fcc7c20"));
const Route$1w = createFileRoute()({
  staticData: {
    BreadCrumbs: [({
      isLast
    }) => {
      const {
        t: t2
      } = useTranslation(["navigation"]);
      return /* @__PURE__ */ jsxRuntimeExports.jsx(BreadCrumbLink, { to: "/cases", isLast, children: t2("navigation:case_manager") });
    }]
  },
  loader: () => casesLayoutLoader(),
  component: lazyRouteComponent($$splitComponentImporter$1a, "component")
});
const $$splitComponentImporter$19 = () => import("./continuous-screening-Bb1zhBpt.mjs");
const continuousScreeningLayoutLoader = createServerFn().middleware([authMiddleware]).handler(createSsrRpc("9e373c98a7ca5a88e36577c19656bba7280c710ca1f4b629f115dca016dcf558"));
const Route$1v = createFileRoute()({
  loader: () => continuousScreeningLayoutLoader(),
  component: lazyRouteComponent($$splitComponentImporter$19, "component")
});
const $$splitComponentImporter$18 = () => import("./data-CIOHe7EM.mjs");
const dataLayoutLoader = createServerFn().middleware([authMiddleware]).handler(createSsrRpc("0e375d3bb3847f92ec1d82fa9791a13d9afc0aafdf4095f73e9c449e03486792"));
const Route$1u = createFileRoute()({
  staticData: {
    i18n: ["navigation", "data"]
  },
  loader: () => dataLayoutLoader(),
  component: lazyRouteComponent($$splitComponentImporter$18, "component")
});
const $$splitComponentImporter$17 = () => import("./detection-Bb1zhBpt.mjs");
const detectionLayoutLoader = createServerFn().middleware([authMiddleware]).handler(createSsrRpc("96e778b85525688a73f39daf945f12d0e8bf1582e4d62ff331d7c45582857d17"));
const Route$1t = createFileRoute()({
  loader: () => detectionLayoutLoader(),
  staticData: {
    BreadCrumbs: [({
      isLast
    }) => {
      const {
        t: t2
      } = useTranslation(["navigation"]);
      return /* @__PURE__ */ jsxRuntimeExports.jsx(BreadCrumbLink, { to: "/detection", isLast, children: t2("navigation:detection") });
    }]
  },
  component: lazyRouteComponent($$splitComponentImporter$17, "component")
});
const $$splitComponentImporter$16 = () => import("./screening-search-Bb1zhBpt.mjs");
const screeningSearchLayoutLoader = createServerFn().middleware([authMiddleware]).handler(createSsrRpc("2d2244244a5c168d712065e928972a8ce0e9d423fb5e81e7fd9a076255d70447"));
const Route$1s = createFileRoute()({
  loader: () => screeningSearchLayoutLoader(),
  staticData: {
    BreadCrumbs: [({
      isLast
    }) => {
      const {
        t: t2
      } = useTranslation(["navigation"]);
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(BreadCrumbLink, { to: "/screening-search", isLast, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "search", className: "me-sm size-6" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t2("navigation:screening_search") })
      ] });
    }]
  },
  component: lazyRouteComponent($$splitComponentImporter$16, "component")
});
const $$splitComponentImporter$15 = () => import("./settings-DMqWbyNs.mjs");
const settingsLoader = createServerFn().middleware([authMiddleware]).handler(createSsrRpc("20e27ce745bfa21d99c5049a732de6c906a0875b8c80d67d3c2cf4e7ba6179e2"));
const Route$1r = createFileRoute()({
  staticData: {
    BreadCrumbs: [({
      isLast
    }) => {
      const {
        t: t2
      } = useTranslation(["settings"]);
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/settings/api-keys", className: cn$1("text-s flex items-center font-bold transition-colors", {
        "text-grey-secondary hover:text-grey-primary": !isLast
      }), children: t2("settings:api") });
    }]
  },
  loader: () => settingsLoader(),
  component: lazyRouteComponent($$splitComponentImporter$15, "component")
});
const $$splitComponentImporter$14 = () => import("./test-graph-CsJnGuwv.mjs");
const Route$1q = createFileRoute()({
  staticData: {
    BreadCrumbs: [({
      isLast
    }) => /* @__PURE__ */ jsxRuntimeExports.jsx(BreadCrumbLink, { to: "/test-graph", isLast, children: "Test graph" })]
  },
  loader: () => createServerFn().middleware([authMiddleware]).handler(async function testGraphLayoutLoader({
    context
  }) {
    const {
      user,
      dataModelRepository,
      entitlements
    } = context.authInfo;
    const dataModelFeatureAccess = dataModelFeatureAccessLoader(user, entitlements);
    if (!dataModelFeatureAccess.isGraphExplorationEnabled) {
      throw redirect({
        to: "/"
      });
    }
    const dataModel = await dataModelRepository.getDataModel();
    return {
      dataModel,
      dataModelFeatureAccess
    };
  })(),
  component: lazyRouteComponent($$splitComponentImporter$14, "component")
});
const $$splitComponentImporter$13 = () => import("./user-scoring-i_04fXFI.mjs");
const userScoringLayoutLoader = createServerFn().middleware([authMiddleware]).handler(createSsrRpc("69c1121ba3b9733ad8a1ec4ec65753e354d35c7612bd9734056c85c59b5b1017"));
const Route$1p = createFileRoute()({
  staticData: {
    i18n: ["common", "user-scoring"]
  },
  loader: () => userScoringLayoutLoader(),
  component: lazyRouteComponent($$splitComponentImporter$13, "component")
});
const Route$1o = createFileRoute()({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const { authService } = initServerServices(request);
        const { organization } = await authService.isAuthenticated(request, {
          failureRedirect: "/sign-in"
        });
        const exportData = await organization.exportOrganization();
        return new Response(JSON.stringify(exportData), {
          headers: {
            "Content-Type": "application/json",
            "Content-Disposition": 'attachment; filename="org-export.json"'
          }
        });
      }
    }
  }
});
const casesIndexLoader = createServerFn().middleware([authMiddleware]).handler(createSsrRpc("17ca890b622271b903097bbbed576a63389f3e45f0e5e1b1486d9f95d5f111f1"));
const Route$1n = createFileRoute()({
  loader: () => casesIndexLoader()
});
const $$splitComponentImporter$12 = () => import("./_caseId-Bb1zhBpt.mjs");
const Route$1m = createFileRoute()({
  component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
function CaseDueDateUrgencyTag({ dueAt, status }) {
  const { t: t2 } = useTranslation(["cases"]);
  const timeZone = useFormatTimezone();
  if (status === "closed") return null;
  const urgency = getDueDateUrgency(dueAt, { timeZone });
  if (!urgency) return null;
  if (urgency.kind === "left") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { color: "orange", size: "small", children: t2("cases:inbox.due.left", { count: urgency.days }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { color: "red", size: "small", children: t2("cases:inbox.due.late", { count: urgency.days }) });
}
const $$splitComponentImporter$11 = () => import("./_detail-Bb1zhBpt.mjs");
const beforeLoadFn$2 = createServerFn({
  method: "GET"
}).middleware([authMiddleware]).handler(createSsrRpc("14e7d5aa898d82c7977f719e8dd399a2a401db0c7f57634d9f4772dbc350ab28"));
const caseDetailLayoutLoader = createServerFn().middleware([authMiddleware, caseDetailMiddleware]).validator((input) => input).handler(createSsrRpc("ad3d01eeafa29cd4f2088158bee9026204a9de5c16c52683ac5449c13384cb30"));
const Route$1l = createFileRoute()({
  staticData: {
    BreadCrumbs: [({
      isLast,
      data
    }) => {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(BreadCrumbLink, { to: "/cases/inboxes/$inboxId", params: {
        inboxId: fromUUIDtoSUUID(data.inbox.id)
      }, isLast, children: data.inbox.name });
    }, ({
      isLast,
      data
    }) => {
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(BreadCrumbLink, { to: "/cases/$caseId", params: {
          caseId: fromUUIDtoSUUID(data.detail.id)
        }, isLast, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "line-clamp-2 text-start", children: data.detail.name }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CaseDueDateUrgencyTag, { dueAt: data.detail.dueAt, status: data.detail.status })
      ] });
    }]
  },
  beforeLoad: () => beforeLoadFn$2(),
  loader: ({
    params
  }) => caseDetailLayoutLoader({
    data: {
      params
    }
  }),
  component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
const $$splitComponentImporter$10 = () => import("./analytics-UC5m3MuC.mjs");
const casesAnalyticsLoader = createServerFn().middleware([authMiddleware]).handler(createSsrRpc("35ab51f7cbac3061cb7d3973f74ba220112989bf839f06f7ada19addb0361183"));
const Route$1k = createFileRoute()({
  loader: () => casesAnalyticsLoader(),
  component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
const $$splitComponentImporter$$ = () => import("./inboxes-Bb1zhBpt.mjs");
const Route$1j = createFileRoute()({
  component: lazyRouteComponent($$splitComponentImporter$$, "component")
});
const $$splitComponentImporter$_ = () => import("./overview-C7ChR0-c.mjs");
const casesOverviewLoader = createServerFn().middleware([authMiddleware]).handler(createSsrRpc("bf5a68bbacfe67480da132d5c9fb36f5e78e973d9ade9e1c58238089302d1de2"));
const Route$1i = createFileRoute()({
  loader: () => casesOverviewLoader(),
  component: lazyRouteComponent($$splitComponentImporter$_, "component")
});
const $$splitComponentImporter$Z = () => import("./index-xGlxwJFK.mjs");
const queryParams = object({
  table: string().optional(),
  terms: string().optional()
});
const getClientDetailFn = createServerFn().middleware([authMiddleware]).validator(queryParams).handler(createSsrRpc("318de7514267a3ed50ed84a75ae117487815eee16ca25aa6098d21129a219ebe"));
const Route$1h = createFileRoute()({
  validateSearch: queryParams,
  loaderDeps: ({
    search: {
      table,
      terms
    }
  }) => ({
    table,
    terms
  }),
  loader: ({
    deps
  }) => getClientDetailFn({
    data: deps
  }),
  component: lazyRouteComponent($$splitComponentImporter$Z, "component")
});
const Route$1g = createFileRoute()({
  beforeLoad: () => {
    throw redirect({ to: "/continuous-screening/configurations" });
  }
});
const $$splitComponentImporter$Y = () => import("./configurations-ifaLSYt7.mjs");
const configurationsLoader = createServerFn().middleware([authMiddleware]).handler(createSsrRpc("a140ea9b3129290100dd40aa3114c38f68c58f854cd3ca6624c3b39efdd53a4e"));
const Route$1f = createFileRoute()({
  staticData: {
    i18n: ["navigation", "continuousScreening"],
    BreadCrumbs: [({
      isLast
    }) => {
      const {
        t: t2
      } = useTranslation(["navigation"]);
      return /* @__PURE__ */ jsxRuntimeExports.jsx(BreadCrumbLink, { to: "/continuous-screening/configurations", isLast, children: t2("navigation:continuous-screening.configurations") });
    }]
  },
  loader: () => configurationsLoader(),
  component: lazyRouteComponent($$splitComponentImporter$Y, "component")
});
const $$splitComponentImporter$X = () => import("./observability-CTnB2yDH.mjs");
const observabilityLoader = createServerFn().middleware([authMiddleware]).handler(createSsrRpc("c285cd89b784052668bf7a4aa6e24d0a54ab894ea63dd5baa209de8633887d5e"));
const Route$1e = createFileRoute()({
  staticData: {
    i18n: ["navigation", "continuousScreening", "screenings"],
    BreadCrumbs: [({
      isLast
    }) => {
      const {
        t: t2
      } = useTranslation(["screenings"]);
      return /* @__PURE__ */ jsxRuntimeExports.jsx(BreadCrumbLink, { to: "/continuous-screening/observability", isLast, children: t2("screenings:navigation.observability") });
    }]
  },
  loader: () => observabilityLoader(),
  component: lazyRouteComponent($$splitComponentImporter$X, "component")
});
const Route$1d = createFileRoute()({
  beforeLoad: () => {
    throw redirect({ to: "/data/list" });
  }
});
const dataI18n = ["common", "data"];
var Te = Object.defineProperty;
var In = (e2, n2, t2) => n2 in e2 ? Te(e2, n2, { enumerable: true, configurable: true, writable: true, value: t2 }) : e2[n2] = t2;
var Sn = (e2, n2) => {
  for (var t2 in n2) Te(e2, t2, { get: n2[t2], enumerable: true });
};
var je = (e2, n2, t2) => In(e2, n2 + "", t2);
var ie = {};
Sn(ie, { Graph: () => T, alg: () => H });
var Mn = Object.defineProperty, Se = (e2, n2) => {
  for (var t2 in n2) Mn(e2, t2, { get: n2[t2], enumerable: true });
}, Q = class {
  constructor(e2) {
    this._isDirected = true, this._isMultigraph = false, this._isCompound = false, this._nodes = {}, this._in = {}, this._preds = {}, this._out = {}, this._sucs = {}, this._edgeObjs = {}, this._edgeLabels = {}, this._nodeCount = 0, this._edgeCount = 0, this._defaultNodeLabelFn = () => {
    }, this._defaultEdgeLabelFn = () => {
    }, e2 && (this._isDirected = "directed" in e2 ? e2.directed : true, this._isMultigraph = "multigraph" in e2 ? e2.multigraph : false, this._isCompound = "compound" in e2 ? e2.compound : false), this._isCompound && (this._parent = {}, this._children = {}, this._children["\0"] = {});
  }
  isDirected() {
    return this._isDirected;
  }
  isMultigraph() {
    return this._isMultigraph;
  }
  isCompound() {
    return this._isCompound;
  }
  setGraph(e2) {
    return this._label = e2, this;
  }
  graph() {
    return this._label;
  }
  setDefaultNodeLabel(e2) {
    return typeof e2 != "function" ? this._defaultNodeLabelFn = () => e2 : this._defaultNodeLabelFn = e2, this;
  }
  nodeCount() {
    return this._nodeCount;
  }
  nodes() {
    return Object.keys(this._nodes);
  }
  sources() {
    return this.nodes().filter((e2) => Object.keys(this._in[e2]).length === 0);
  }
  sinks() {
    return this.nodes().filter((e2) => Object.keys(this._out[e2]).length === 0);
  }
  setNodes(e2, n2) {
    return e2.forEach((t2) => {
      n2 !== void 0 ? this.setNode(t2, n2) : this.setNode(t2);
    }), this;
  }
  setNode(e2, n2) {
    return e2 in this._nodes ? (arguments.length > 1 && (this._nodes[e2] = n2), this) : (this._nodes[e2] = arguments.length > 1 ? n2 : this._defaultNodeLabelFn(e2), this._isCompound && (this._parent[e2] = "\0", this._children[e2] = {}, this._children["\0"][e2] = true), this._in[e2] = {}, this._preds[e2] = {}, this._out[e2] = {}, this._sucs[e2] = {}, ++this._nodeCount, this);
  }
  node(e2) {
    return this._nodes[e2];
  }
  hasNode(e2) {
    return e2 in this._nodes;
  }
  removeNode(e2) {
    if (e2 in this._nodes) {
      let n2 = (t2) => this.removeEdge(this._edgeObjs[t2]);
      delete this._nodes[e2], this._isCompound && (this._removeFromParentsChildList(e2), delete this._parent[e2], this.children(e2).forEach((t2) => {
        this.setParent(t2);
      }), delete this._children[e2]), Object.keys(this._in[e2]).forEach(n2), delete this._in[e2], delete this._preds[e2], Object.keys(this._out[e2]).forEach(n2), delete this._out[e2], delete this._sucs[e2], --this._nodeCount;
    }
    return this;
  }
  setParent(e2, n2) {
    if (!this._isCompound) throw new Error("Cannot set parent in a non-compound graph");
    if (n2 === void 0) n2 = "\0";
    else {
      n2 += "";
      for (let t2 = n2; t2 !== void 0; t2 = this.parent(t2)) if (t2 === e2) throw new Error("Setting " + n2 + " as parent of " + e2 + " would create a cycle");
      this.setNode(n2);
    }
    return this.setNode(e2), this._removeFromParentsChildList(e2), this._parent[e2] = n2, this._children[n2][e2] = true, this;
  }
  parent(e2) {
    if (this._isCompound) {
      let n2 = this._parent[e2];
      if (n2 !== "\0") return n2;
    }
  }
  children(e2 = "\0") {
    if (this._isCompound) {
      let n2 = this._children[e2];
      if (n2) return Object.keys(n2);
    } else {
      if (e2 === "\0") return this.nodes();
      if (this.hasNode(e2)) return [];
    }
    return [];
  }
  predecessors(e2) {
    let n2 = this._preds[e2];
    if (n2) return Object.keys(n2);
  }
  successors(e2) {
    let n2 = this._sucs[e2];
    if (n2) return Object.keys(n2);
  }
  neighbors(e2) {
    let n2 = this.predecessors(e2);
    if (n2) {
      let t2 = new Set(n2), r = this.successors(e2);
      if (r) for (let o of r) t2.add(o);
      return Array.from(t2.values());
    }
  }
  isLeaf(e2) {
    var n2;
    let t2;
    return this.isDirected() ? t2 = this.successors(e2) : t2 = this.neighbors(e2), ((n2 = t2 == null ? void 0 : t2.length) != null ? n2 : 0) === 0;
  }
  filterNodes(e2) {
    let n2 = new this.constructor({ directed: this._isDirected, multigraph: this._isMultigraph, compound: this._isCompound });
    n2.setGraph(this.graph()), Object.entries(this._nodes).forEach(([o, i]) => {
      e2(o) && n2.setNode(o, i);
    }), Object.values(this._edgeObjs).forEach((o) => {
      n2.hasNode(o.v) && n2.hasNode(o.w) && n2.setEdge(o, this.edge(o));
    });
    let t2 = {}, r = (o) => {
      let i = this.parent(o);
      return !i || n2.hasNode(i) ? (t2[o] = i, i) : i in t2 ? t2[i] : r(i);
    };
    return this._isCompound && n2.nodes().forEach((o) => n2.setParent(o, r(o))), n2;
  }
  setDefaultEdgeLabel(e2) {
    return typeof e2 != "function" ? this._defaultEdgeLabelFn = () => e2 : this._defaultEdgeLabelFn = e2, this;
  }
  edgeCount() {
    return this._edgeCount;
  }
  edges() {
    return Object.values(this._edgeObjs);
  }
  setPath(e2, n2) {
    return e2.reduce((t2, r) => (n2 !== void 0 ? this.setEdge(t2, r, n2) : this.setEdge(t2, r), r)), this;
  }
  setEdge(e2, n2, t2, r) {
    let o, i, s, a, l = false;
    typeof e2 == "object" && e2 !== null && "v" in e2 ? (o = e2.v, i = e2.w, s = e2.name, arguments.length === 2 && (a = n2, l = true)) : (o = e2, i = n2, s = r, arguments.length > 2 && (a = t2, l = true)), o = "" + o, i = "" + i, s !== void 0 && (s = "" + s);
    let u = z(this._isDirected, o, i, s);
    if (u in this._edgeLabels) return l && (this._edgeLabels[u] = a), this;
    if (s !== void 0 && !this._isMultigraph) throw new Error("Cannot set a named edge when isMultigraph = false");
    this.setNode(o), this.setNode(i), this._edgeLabels[u] = l ? a : this._defaultEdgeLabelFn(o, i, s);
    let d = Pn(this._isDirected, o, i, s);
    return o = d.v, i = d.w, Object.freeze(d), this._edgeObjs[u] = d, Re(this._preds[i], o), Re(this._sucs[o], i), this._in[i][u] = d, this._out[o][u] = d, this._edgeCount++, this;
  }
  edge(e2, n2, t2) {
    let r = arguments.length === 1 ? oe(this._isDirected, e2) : z(this._isDirected, e2, n2, t2);
    return this._edgeLabels[r];
  }
  edgeAsObj(e2, n2, t2) {
    let r = arguments.length === 1 ? this.edge(e2) : this.edge(e2, n2, t2);
    return typeof r != "object" || r === null ? { label: r } : r;
  }
  hasEdge(e2, n2, t2) {
    return (arguments.length === 1 ? oe(this._isDirected, e2) : z(this._isDirected, e2, n2, t2)) in this._edgeLabels;
  }
  removeEdge(e2, n2, t2) {
    let r = arguments.length === 1 ? oe(this._isDirected, e2) : z(this._isDirected, e2, n2, t2), o = this._edgeObjs[r];
    if (o) {
      let i = o.v, s = o.w;
      delete this._edgeLabels[r], delete this._edgeObjs[r], Ie(this._preds[s], i), Ie(this._sucs[i], s), delete this._in[s][r], delete this._out[i][r], this._edgeCount--;
    }
    return this;
  }
  inEdges(e2, n2) {
    return this.isDirected() ? this.filterEdges(this._in[e2], e2, n2) : this.nodeEdges(e2, n2);
  }
  outEdges(e2, n2) {
    return this.isDirected() ? this.filterEdges(this._out[e2], e2, n2) : this.nodeEdges(e2, n2);
  }
  nodeEdges(e2, n2) {
    if (e2 in this._nodes) return this.filterEdges({ ...this._in[e2], ...this._out[e2] }, e2, n2);
  }
  _removeFromParentsChildList(e2) {
    delete this._children[this._parent[e2]][e2];
  }
  filterEdges(e2, n2, t2) {
    if (!e2) return;
    let r = Object.values(e2);
    return t2 ? r.filter((o) => o.v === n2 && o.w === t2 || o.v === t2 && o.w === n2) : r;
  }
};
function Re(e2, n2) {
  e2[n2] ? e2[n2]++ : e2[n2] = 1;
}
function Ie(e2, n2) {
  e2[n2] !== void 0 && !--e2[n2] && delete e2[n2];
}
function z(e2, n2, t2, r) {
  let o = "" + n2, i = "" + t2;
  if (!e2 && o > i) {
    let s = o;
    o = i, i = s;
  }
  return o + "" + i + "" + (r === void 0 ? "\0" : r);
}
function Pn(e2, n2, t2, r) {
  let o = "" + n2, i = "" + t2;
  if (!e2 && o > i) {
    let a = o;
    o = i, i = a;
  }
  let s = { v: o, w: i };
  return r && (s.name = r), s;
}
function oe(e2, n2) {
  return z(e2, n2.v, n2.w, n2.name);
}
var Fn = {};
Se(Fn, { read: () => Yn, write: () => An });
function An(e2) {
  let n2 = { options: { directed: e2.isDirected(), multigraph: e2.isMultigraph(), compound: e2.isCompound() }, nodes: Vn(e2), edges: Dn(e2) }, t2 = e2.graph();
  return t2 !== void 0 && (n2.value = structuredClone(t2)), n2;
}
function Vn(e2) {
  return e2.nodes().map((n2) => {
    let t2 = e2.node(n2), r = e2.parent(n2), o = { v: n2 };
    return t2 !== void 0 && (o.value = t2), r !== void 0 && (o.parent = r), o;
  });
}
function Dn(e2) {
  return e2.edges().map((n2) => {
    let t2 = e2.edge(n2), r = { v: n2.v, w: n2.w };
    return n2.name !== void 0 && (r.name = n2.name), t2 !== void 0 && (r.value = t2), r;
  });
}
function Yn(e2) {
  let n2 = new Q(e2.options);
  return e2.value !== void 0 && n2.setGraph(e2.value), e2.nodes.forEach((t2) => {
    n2.setNode(t2.v, t2.value), t2.parent && n2.setParent(t2.v, t2.parent);
  }), e2.edges.forEach((t2) => {
    n2.setEdge({ v: t2.v, w: t2.w, name: t2.name }, t2.value);
  }), n2;
}
var H = {};
Se(H, { CycleException: () => K, bellmanFord: () => Me, components: () => Xn, dijkstra: () => J, dijkstraAll: () => qn, findCycles: () => $n, floydWarshall: () => Jn, isAcyclic: () => Qn, postorder: () => et, preorder: () => nt, prim: () => tt, shortestPaths: () => rt, tarjan: () => Fe, topsort: () => Ae });
var Wn = () => 1;
function Me(e2, n2, t2, r) {
  return Bn(e2, String(n2), t2 || Wn, r || function(o) {
    var i;
    return (i = e2.outEdges(o)) != null ? i : [];
  });
}
function Bn(e2, n2, t2, r) {
  let o = {}, i, s = 0, a = e2.nodes(), l = function(c) {
    let f = o[c.v], h = o[c.w];
    if (!f || !h) return;
    let p = t2(c);
    f.distance + p < h.distance && (o[c.w] = { distance: f.distance + p, predecessor: c.v }, i = true);
  }, u = function() {
    a.forEach(function(c) {
      r(c).forEach(function(f) {
        let h = f.v === c ? f.v : f.w, p = h === f.v ? f.w : f.v;
        l({ v: h, w: p });
      });
    });
  };
  a.forEach(function(c) {
    let f = c === n2 ? 0 : Number.POSITIVE_INFINITY;
    o[c] = { distance: f, predecessor: "" };
  });
  let d = a.length;
  for (let c = 1; c < d && (i = false, s++, u(), !!i); c++) ;
  if (s === d - 1 && (i = false, u(), i)) throw new Error("The graph contains a negative weight cycle");
  return o;
}
function Xn(e2) {
  let n2 = {}, t2 = [], r;
  function o(i) {
    var s, a;
    i in n2 || (n2[i] = true, r.push(i), (s = e2.successors(i)) == null || s.forEach(o), (a = e2.predecessors(i)) == null || a.forEach(o));
  }
  return e2.nodes().forEach(function(i) {
    r = [], o(i), r.length && t2.push(r);
  }), t2;
}
var Pe = class {
  constructor() {
    this._arr = [], this._keyIndices = {};
  }
  size() {
    return this._arr.length;
  }
  keys() {
    return this._arr.map((e2) => e2.key);
  }
  has(e2) {
    return e2 in this._keyIndices;
  }
  priority(e2) {
    let n2 = this._keyIndices[e2];
    if (n2 !== void 0) return this._arr[n2].priority;
  }
  min() {
    if (this.size() === 0) throw new Error("Queue underflow");
    return this._arr[0].key;
  }
  add(e2, n2) {
    let t2 = this._keyIndices, r = String(e2);
    if (!(r in t2)) {
      let o = this._arr, i = o.length;
      return t2[r] = i, o.push({ key: r, priority: n2 }), this._decrease(i), true;
    }
    return false;
  }
  removeMin() {
    if (this.size() === 0) throw new Error("Queue underflow");
    this._swap(0, this._arr.length - 1);
    let e2 = this._arr.pop();
    return delete this._keyIndices[e2.key], this._heapify(0), e2.key;
  }
  decrease(e2, n2) {
    let t2 = this._keyIndices[e2];
    if (t2 === void 0) throw new Error(`Key not found: ${e2}`);
    let r = this._arr[t2].priority;
    if (n2 > r) throw new Error(`New priority is greater than current priority. Key: ${e2} Old: ${r} New: ${n2}`);
    this._arr[t2].priority = n2, this._decrease(t2);
  }
  _heapify(e2) {
    let n2 = this._arr, t2 = 2 * e2, r = t2 + 1, o = e2;
    t2 < n2.length && (o = n2[t2].priority < n2[o].priority ? t2 : o, r < n2.length && (o = n2[r].priority < n2[o].priority ? r : o), o !== e2 && (this._swap(e2, o), this._heapify(o)));
  }
  _decrease(e2) {
    let n2 = this._arr, t2 = n2[e2].priority, r;
    for (; e2 !== 0 && (r = e2 >> 1, !(n2[r].priority < t2)); ) this._swap(e2, r), e2 = r;
  }
  _swap(e2, n2) {
    let t2 = this._arr, r = this._keyIndices, o = t2[e2], i = t2[n2];
    t2[e2] = i, t2[n2] = o, r[i.key] = e2, r[o.key] = n2;
  }
}, zn = () => 1;
function J(e2, n2, t2, r) {
  let o = function(i) {
    var s;
    return (s = e2.outEdges(i)) != null ? s : [];
  };
  return Hn(e2, String(n2), t2 || zn, r || o);
}
function Hn(e2, n2, t2, r) {
  let o = {}, i = new Pe(), s, a, l = function(u) {
    let d = u.v !== s ? u.v : u.w, c = o[d];
    if (!c) return;
    let f = t2(u), h = a.distance + f;
    if (f < 0) throw new Error("dijkstra does not allow negative edge weights. Bad edge: " + u + " Weight: " + f);
    h < c.distance && (c.distance = h, c.predecessor = s, i.decrease(d, h));
  };
  for (e2.nodes().forEach(function(u) {
    let d = u === n2 ? 0 : Number.POSITIVE_INFINITY;
    o[u] = { distance: d, predecessor: "" }, i.add(u, d);
  }); i.size() > 0; ) {
    s = i.removeMin();
    let u = o[s];
    if (!u || u.distance === Number.POSITIVE_INFINITY) break;
    a = u, r(s).forEach(l);
  }
  return o;
}
function qn(e2, n2, t2) {
  return e2.nodes().reduce(function(r, o) {
    return r[o] = J(e2, o, n2, t2), r;
  }, {});
}
function Fe(e2) {
  let n2 = 0, t2 = [], r = {}, o = [];
  function i(s) {
    var a;
    let l = r[s] = { onStack: true, lowlink: n2, index: n2++ };
    if (t2.push(s), (a = e2.successors(s)) == null || a.forEach(function(u) {
      if (u in r) {
        let d = r[u];
        d != null && d.onStack && (l.lowlink = Math.min(l.lowlink, d.index));
      } else {
        i(u);
        let d = r[u];
        d && (l.lowlink = Math.min(l.lowlink, d.lowlink));
      }
    }), l.lowlink === l.index) {
      let u = [], d;
      do {
        d = t2.pop();
        let c = r[d];
        c && (c.onStack = false), u.push(d);
      } while (s !== d);
      o.push(u);
    }
  }
  return e2.nodes().forEach(function(s) {
    s in r || i(s);
  }), o;
}
function $n(e2) {
  return Fe(e2).filter(function(n2) {
    var t2;
    let r = n2[0];
    return r ? n2.length > 1 || n2.length === 1 && ((t2 = e2.outEdges(r, r)) != null ? t2 : []).length > 0 : false;
  });
}
var Un = () => 1;
function Jn(e2, n2, t2) {
  return Kn(e2, n2 || Un, t2 || function(r) {
    var o;
    return (o = e2.outEdges(r)) != null ? o : [];
  });
}
function Kn(e2, n2, t2) {
  let r = {}, o = e2.nodes();
  return o.forEach(function(i) {
    let s = {};
    r[i] = s, s[i] = { distance: 0, predecessor: "" }, o.forEach(function(a) {
      i !== a && (s[a] = { distance: Number.POSITIVE_INFINITY, predecessor: "" });
    }), t2(i).forEach(function(a) {
      let l = a.v === i ? a.w : a.v, u = n2(a);
      s[l] = { distance: u, predecessor: i };
    });
  }), o.forEach(function(i) {
    let s = r[i];
    s && o.forEach(function(a) {
      let l = r[a];
      l && o.forEach(function(u) {
        let d = l[i], c = s[u], f = l[u];
        if (d && c && f) {
          let h = d.distance + c.distance;
          h < f.distance && (f.distance = h, f.predecessor = c.predecessor);
        }
      });
    });
  }), r;
}
var K = class extends Error {
  constructor(e2) {
    super(e2), this.name = "CycleException";
  }
};
function Ae(e2) {
  let n2 = {}, t2 = {}, r = [];
  function o(i) {
    var s;
    if (i in t2) throw new K();
    i in n2 || (t2[i] = true, n2[i] = true, (s = e2.predecessors(i)) == null || s.forEach(o), delete t2[i], r.push(i));
  }
  if (e2.sinks().forEach(o), Object.keys(n2).length !== e2.nodeCount()) throw new K();
  return r;
}
function Qn(e2) {
  try {
    Ae(e2);
  } catch (n2) {
    if (n2 instanceof K) return false;
    throw n2;
  }
  return true;
}
function Zn(e2, n2, t2, r, o) {
  Array.isArray(n2) || (n2 = [n2]);
  let i = ((a) => {
    var l;
    return (l = e2.isDirected() ? e2.successors(a) : e2.neighbors(a)) != null ? l : [];
  }), s = {};
  return n2.forEach(function(a) {
    if (!e2.hasNode(a)) throw new Error("Graph does not have node: " + a);
    o = Ve(e2, a, t2 === "post", s, i, r, o);
  }), o;
}
function Ve(e2, n2, t2, r, o, i, s) {
  return n2 in r || (r[n2] = true, t2 || (s = i(s, n2)), o(n2).forEach(function(a) {
    s = Ve(e2, a, t2, r, o, i, s);
  }), t2 && (s = i(s, n2))), s;
}
function De(e2, n2, t2) {
  return Zn(e2, n2, t2, function(r, o) {
    return r.push(o), r;
  }, []);
}
function et(e2, n2) {
  return De(e2, n2, "post");
}
function nt(e2, n2) {
  return De(e2, n2, "pre");
}
function tt(e2, n2) {
  var t2;
  let r = new Q(), o = {}, i = new Pe(), s;
  function a(d) {
    let c = d.v === s ? d.w : d.v, f = i.priority(c);
    if (f !== void 0) {
      let h = n2(d);
      h < f && (o[c] = s, i.decrease(c, h));
    }
  }
  if (e2.nodeCount() === 0) return r;
  e2.nodes().forEach(function(d) {
    i.add(d, Number.POSITIVE_INFINITY), r.setNode(d);
  });
  let l = e2.nodes()[0];
  l !== void 0 && i.decrease(l, 0);
  let u = false;
  for (; i.size() > 0; ) {
    if (s = i.removeMin(), s in o) r.setEdge(s, o[s]);
    else {
      if (u) throw new Error("Input graph is not connected: " + e2);
      u = true;
    }
    (t2 = e2.nodeEdges(s)) == null || t2.forEach(a);
  }
  return r;
}
function rt(e2, n2, t2, r) {
  return ot(e2, n2, t2, r != null ? r : ((o) => {
    var i;
    return (i = e2.outEdges(o)) != null ? i : [];
  }));
}
function ot(e2, n2, t2, r) {
  if (t2 === void 0) return J(e2, n2, t2, r);
  let o = false, i = e2.nodes();
  for (let s = 0; s < i.length; s++) {
    let a = i[s];
    if (a === void 0) continue;
    let l = r(a);
    for (let u = 0; u < l.length; u++) {
      let d = l[u];
      if (!d) continue;
      let c = d.v === a ? d.v : d.w, f = c === d.v ? d.w : d.v;
      t2({ v: c, w: f }) < 0 && (o = true);
    }
    if (o) return Me(e2, n2, t2, r);
  }
  return J(e2, n2, t2, r);
}
var T = Q;
function M(e2, n2, t2, r) {
  let o = r;
  for (; e2.hasNode(o); ) o = $(r);
  return t2.dummy = n2, e2.setNode(o, t2), o;
}
function Ye(e2) {
  let n2 = new T().setGraph(e2.graph());
  return e2.nodes().forEach((t2) => n2.setNode(t2, e2.node(t2))), e2.edges().forEach((t2) => {
    let r = n2.edge(t2.v, t2.w) || { weight: 0, minlen: 1 }, o = e2.edge(t2);
    n2.setEdge(t2.v, t2.w, { weight: r.weight + o.weight, minlen: Math.max(r.minlen, o.minlen) });
  }), n2;
}
function Z(e2) {
  let n2 = new T({ multigraph: e2.isMultigraph() }).setGraph(e2.graph());
  return e2.nodes().forEach((t2) => {
    e2.children(t2).length || n2.setNode(t2, e2.node(t2));
  }), e2.edges().forEach((t2) => {
    n2.setEdge(t2, e2.edge(t2));
  }), n2;
}
function se(e2, n2) {
  let t2 = e2.x, r = e2.y, o = n2.x - t2, i = n2.y - r, s = e2.width / 2, a = e2.height / 2;
  if (!o && !i) throw new Error("Not possible to find intersection inside of the rectangle");
  let l, u;
  return Math.abs(i) * s > Math.abs(o) * a ? (i < 0 && (a = -a), l = a * o / i, u = a) : (o < 0 && (s = -s), l = s, u = s * i / o), { x: t2 + l, y: r + u };
}
function P(e2) {
  let n2 = A(de(e2) + 1).map(() => []);
  return e2.nodes().forEach((t2) => {
    let r = e2.node(t2), o = r.rank;
    o !== void 0 && (n2[o] || (n2[o] = []), n2[o][r.order] = t2);
  }), n2;
}
function We(e2) {
  let n2 = e2.nodes().map((r) => {
    let o = e2.node(r).rank;
    return o === void 0 ? Number.MAX_VALUE : o;
  }), t2 = R(Math.min, n2);
  e2.nodes().forEach((r) => {
    let o = e2.node(r);
    Object.hasOwn(o, "rank") && (o.rank -= t2);
  });
}
function Be(e2) {
  let n2 = e2.nodes().map((s) => e2.node(s).rank).filter((s) => s !== void 0), t2 = R(Math.min, n2), r = [];
  e2.nodes().forEach((s) => {
    let a = e2.node(s).rank - t2;
    r[a] || (r[a] = []), r[a].push(s);
  });
  let o = 0, i = e2.graph().nodeRankFactor;
  Array.from(r).forEach((s, a) => {
    s === void 0 && a % i !== 0 ? --o : s !== void 0 && o && s.forEach((l) => e2.node(l).rank += o);
  });
}
function ae(e2, n2, t2, r) {
  let o = { width: 0, height: 0 };
  return arguments.length >= 4 && (o.rank = t2, o.order = r), M(e2, "border", o, n2);
}
function it(e2, n2 = Xe) {
  let t2 = [];
  for (let r = 0; r < e2.length; r += n2) {
    let o = e2.slice(r, r + n2);
    t2.push(o);
  }
  return t2;
}
var Xe = 65535;
function R(e2, n2) {
  if (n2.length > Xe) {
    let t2 = it(n2);
    return e2(...t2.map((r) => e2(...r)));
  } else return e2(...n2);
}
function de(e2) {
  let t2 = e2.nodes().map((r) => {
    let o = e2.node(r).rank;
    return o === void 0 ? Number.MIN_VALUE : o;
  });
  return R(Math.max, t2);
}
function ze(e2, n2) {
  let t2 = { lhs: [], rhs: [] };
  return e2.forEach((r) => {
    n2(r) ? t2.lhs.push(r) : t2.rhs.push(r);
  }), t2;
}
function le(e2, n2) {
  let t2 = Date.now();
  try {
    return n2();
  } finally {
    console.log(e2 + " time: " + (Date.now() - t2) + "ms");
  }
}
function q(e2, n2) {
  return n2();
}
var st = 0;
function $(e2) {
  let n2 = ++st;
  return e2 + ("" + n2);
}
function A(e2, n2, t2 = 1) {
  n2 == null && (n2 = e2, e2 = 0);
  let r = (i) => i < n2;
  t2 < 0 && (r = (i) => n2 < i);
  let o = [];
  for (let i = e2; r(i); i += t2) o.push(i);
  return o;
}
function B(e2, n2) {
  let t2 = {};
  for (let r of n2) e2[r] !== void 0 && (t2[r] = e2[r]);
  return t2;
}
function X(e2, n2) {
  let t2;
  return typeof n2 == "string" ? t2 = (r) => r[n2] : t2 = n2, Object.entries(e2).reduce((r, [o, i]) => (r[o] = t2(i, o), r), {});
}
function He(e2, n2) {
  return e2.reduce((t2, r, o) => (t2[r] = n2[o], t2), {});
}
var D = "\0";
function ee(e2, n2, t2) {
  var u, d, c, f, h, p;
  if (!(e2 && n2 && t2 && n2.dummy === "edge" && t2.dummy === "edge" && n2.edgeObj && t2.edgeObj && e2[n2.edgeObj.v] && e2[t2.edgeObj.v] && e2[n2.edgeObj.w] && e2[t2.edgeObj.w])) return 0;
  let r = true;
  n2.edgeObj.w === t2.edgeObj.w && (r = false);
  let o = r ? (d = (u = e2[n2.edgeObj.v]) == null ? void 0 : u.rank) != null ? d : NaN + 1 : (f = (c = e2[n2.edgeObj.w]) == null ? void 0 : c.rank) != null ? f : NaN - 1, i = Object.entries(e2).find((E) => {
    var y, L;
    return ((y = E[1].edgeObj) == null ? void 0 : y.v) === n2.edgeObj.v && ((L = E[1].edgeObj) == null ? void 0 : L.w) === n2.edgeObj.w && E[1].rank === o;
  }), s = Object.entries(e2).find((E) => {
    var y, L;
    return ((y = E[1].edgeObj) == null ? void 0 : y.v) === t2.edgeObj.v && ((L = E[1].edgeObj) == null ? void 0 : L.w) === t2.edgeObj.w && E[1].rank === o;
  });
  if (!i || !s) return 0;
  let a = (h = i[1].order) != null ? h : NaN, l = (p = s[1].order) != null ? p : NaN;
  return isNaN(a - l) ? 0 : a - l;
}
var ue = "3.1.1";
var ce = class {
  constructor() {
    je(this, "_sentinel");
    let n2 = {};
    n2._next = n2._prev = n2, this._sentinel = n2;
  }
  dequeue() {
    let n2 = this._sentinel, t2 = n2._prev;
    if (t2 !== n2) return qe(t2), t2;
  }
  enqueue(n2) {
    let t2 = this._sentinel;
    n2._prev && n2._next && qe(n2), n2._next = t2._next, t2._next._prev = n2, t2._next = n2, n2._prev = t2;
  }
  toString() {
    let n2 = [], t2 = this._sentinel, r = t2._prev;
    for (; r !== t2; ) n2.push(JSON.stringify(r, at)), r = r._prev;
    return "[" + n2.join(", ") + "]";
  }
};
function qe(e2) {
  e2._prev._next = e2._next, e2._next._prev = e2._prev, delete e2._next, delete e2._prev;
}
function at(e2, n2) {
  if (e2 !== "_next" && e2 !== "_prev") return n2;
}
var $e = ce;
var dt = () => 1;
function be(e2, n2) {
  if (e2.nodeCount() <= 1) return [];
  let t2 = ut(e2, n2 || dt);
  return lt(t2.graph, t2.buckets, t2.zeroIdx).flatMap((o) => e2.outEdges(o.v, o.w) || []);
}
function lt(e2, n2, t2) {
  var a;
  let r = [], o = n2[n2.length - 1], i = n2[0], s;
  for (; e2.nodeCount(); ) {
    for (; s = i.dequeue(); ) fe(e2, n2, t2, s);
    for (; s = o.dequeue(); ) fe(e2, n2, t2, s);
    if (e2.nodeCount()) {
      for (let l = n2.length - 2; l > 0; --l) if (s = (a = n2[l]) == null ? void 0 : a.dequeue(), s) {
        r = r.concat(fe(e2, n2, t2, s, true) || []);
        break;
      }
    }
  }
  return r;
}
function fe(e2, n2, t2, r, o) {
  let i = [], s = o ? i : void 0;
  return (e2.inEdges(r.v) || []).forEach((a) => {
    let l = e2.edge(a), u = e2.node(a.v);
    o && i.push({ v: a.v, w: a.w }), u.out -= l, he(n2, t2, u);
  }), (e2.outEdges(r.v) || []).forEach((a) => {
    let l = e2.edge(a), u = a.w, d = e2.node(u);
    d.in -= l, he(n2, t2, d);
  }), e2.removeNode(r.v), s;
}
function ut(e2, n2) {
  let t2 = new T(), r = 0, o = 0;
  e2.nodes().forEach((a) => {
    t2.setNode(a, { v: a, in: 0, out: 0 });
  }), e2.edges().forEach((a) => {
    let l = t2.edge(a.v, a.w) || 0, u = n2(a), d = l + u;
    t2.setEdge(a.v, a.w, d);
    let c = t2.node(a.v), f = t2.node(a.w);
    o = Math.max(o, c.out += u), r = Math.max(r, f.in += u);
  });
  let i = ct(o + r + 3).map(() => new $e()), s = r + 1;
  return t2.nodes().forEach((a) => {
    he(i, s, t2.node(a));
  }), { graph: t2, buckets: i, zeroIdx: s };
}
function he(e2, n2, t2) {
  var r, o, i;
  t2.out ? t2.in ? (i = e2[t2.out - t2.in + n2]) == null || i.enqueue(t2) : (o = e2[e2.length - 1]) == null || o.enqueue(t2) : (r = e2[0]) == null || r.enqueue(t2);
}
function ct(e2) {
  let n2 = [];
  for (let t2 = 0; t2 < e2; t2++) n2.push(t2);
  return n2;
}
function Ue(e2, n2) {
  (e2.graph().acyclicer === "greedy" ? be(e2, r(e2)) : ft(e2, n2 != null ? n2 : null)).forEach((o) => {
    let i = e2.edge(o);
    e2.removeEdge(o), i.forwardName = o.name, i.reversed = true, e2.setEdge(o.w, o.v, i, $("rev"));
  });
  function r(o) {
    return (i) => o.edge(i).weight;
  }
}
function ft(e2, n2) {
  let t2 = [], r = {}, o = {};
  function i(l) {
    Object.hasOwn(o, l) || (o[l] = true, r[l] = true, e2.outEdges(l).forEach((u) => {
      Object.hasOwn(r, u.w) ? t2.push(u) : i(u.w);
    }), delete r[l]);
  }
  function s(l) {
    var u;
    Object.hasOwn(o, l) || (o[l] = true, r[l] = true, (u = e2.outEdges(l)) == null || u.forEach((d) => {
      var c, f;
      Object.hasOwn(r, d.w) || ((c = n2.node(l)) == null ? void 0 : c.rank) > ((f = n2.node(d.w)) == null ? void 0 : f.rank) && ht(e2, d.w, d) ? t2.push(d) : s(d.w);
    }), delete r[l]);
  }
  let a = i;
  return n2 && typeof n2.node == "function" && (a = s), e2.sources().forEach(a), e2.nodes().forEach(a), t2;
}
function Je(e2) {
  e2.edges().forEach((n2) => {
    let t2 = e2.edge(n2);
    if (t2.reversed) {
      e2.removeEdge(n2);
      let r = t2.forwardName;
      delete t2.reversed, delete t2.forwardName, e2.setEdge(n2.w, n2.v, t2, r);
    }
  });
}
function ht(e2, n2, t2) {
  let r = /* @__PURE__ */ new Set();
  function o(i) {
    var s;
    if (e2.sources().includes(i)) return true;
    r.add(i);
    for (let a of (s = e2.inEdges(i)) != null ? s : []) if (!(a.v === t2.v && a.w === t2.w) && !r.has(a.v) && o(a.v)) return true;
    return false;
  }
  return o(n2);
}
function Ke(e2) {
  e2.graph().dummyChains = [], e2.edges().forEach((n2) => gt(e2, n2));
}
function gt(e2, n2) {
  let t2 = n2.v, r = e2.node(t2).rank, o = n2.w, i = e2.node(o).rank, s = n2.name, a = e2.edge(n2), l = a.labelRank;
  if (i === r + 1) return;
  e2.removeEdge(n2);
  let u, d, c;
  for (c = 0, ++r; r < i; ++c, ++r) a.points = [], d = { width: 0, height: 0, edgeLabel: a, edgeObj: n2, rank: r }, u = M(e2, "edge", d, "_d"), r === l && (d.width = a.width, d.height = a.height, d.dummy = "edge-label", d.labelpos = a.labelpos), e2.setEdge(t2, u, { weight: a.weight }, s), c === 0 && e2.graph().dummyChains.push(u), t2 = u;
  e2.setEdge(t2, o, { weight: a.weight }, s);
}
function Qe(e2) {
  e2.graph().dummyChains.forEach((n2) => {
    let t2 = e2.node(n2), r = t2.edgeLabel, o;
    for (e2.setEdge(t2.edgeObj, r); t2.dummy; ) o = e2.successors(n2)[0], e2.removeNode(n2), r.points.push({ x: t2.x, y: t2.y }), t2.dummy === "edge-label" && (r.x = t2.x, r.y = t2.y, r.width = t2.width, r.height = t2.height), n2 = o, t2 = e2.node(n2);
  });
}
function U(e2) {
  let n2 = {};
  function t2(r) {
    let o = e2.node(r);
    if (Object.hasOwn(n2, r)) return o.rank;
    n2[r] = true;
    let i = e2.outEdges(r), s = i ? i.map((l) => l == null ? Number.POSITIVE_INFINITY : t2(l.w) - e2.edge(l).minlen) : [], a = R(Math.min, s);
    return a === Number.POSITIVE_INFINITY && (a = 0), o.rank = a;
  }
  e2.sources().forEach(t2);
}
function V(e2, n2) {
  return e2.node(n2.w).rank - e2.node(n2.v).rank - e2.edge(n2).minlen;
}
var ne = mt;
function mt(e2) {
  let n2 = new T({ directed: false }), t2 = e2.nodes();
  if (t2.length === 0) throw new Error("Graph must have at least one node");
  let r = t2[0], o = e2.nodeCount();
  n2.setNode(r, {});
  let i, s;
  for (; Et(n2, e2) < o && (i = Lt(n2, e2), !!i); ) s = n2.hasNode(i.v) ? V(e2, i) : -V(e2, i), yt(n2, e2, s);
  return n2;
}
function Et(e2, n2) {
  function t2(r) {
    let o = n2.nodeEdges(r);
    o && o.forEach((i) => {
      let s = i.v, a = r === s ? i.w : s;
      !e2.hasNode(a) && !V(n2, i) && (e2.setNode(a, {}), e2.setEdge(r, a, {}), t2(a));
    });
  }
  return e2.nodes().forEach(t2), e2.nodeCount();
}
function Lt(e2, n2) {
  return n2.edges().reduce((r, o) => {
    let i = Number.POSITIVE_INFINITY;
    return e2.hasNode(o.v) !== e2.hasNode(o.w) && (i = V(n2, o)), i < r[0] ? [i, o] : r;
  }, [Number.POSITIVE_INFINITY, null])[1];
}
function yt(e2, n2, t2) {
  e2.nodes().forEach((r) => n2.node(r).rank += t2);
}
var { preorder: wt, postorder: Nt } = H, en = Y;
Y.initLowLimValues = pe;
Y.initCutValues = ge;
Y.calcCutValue = nn;
Y.leaveEdge = rn;
Y.enterEdge = on;
Y.exchangeEdges = sn;
function Y(e2) {
  e2 = Ye(e2), U(e2);
  let n2 = ne(e2);
  pe(n2), ge(n2, e2);
  let t2, r;
  for (; t2 = rn(n2); ) r = on(n2, e2, t2), sn(n2, e2, t2, r);
}
function ge(e2, n2) {
  let t2 = Nt(e2, e2.nodes());
  t2 = t2.slice(0, t2.length - 1), t2.forEach((r) => Gt(e2, n2, r));
}
function Gt(e2, n2, t2) {
  let o = e2.node(t2).parent, i = e2.edge(t2, o);
  i.cutvalue = nn(e2, n2, t2);
}
function nn(e2, n2, t2) {
  let o = e2.node(t2).parent, i = true, s = n2.edge(t2, o), a = 0;
  s || (i = false, s = n2.edge(o, t2)), a = s.weight;
  let l = n2.nodeEdges(t2);
  return l && l.forEach((u) => {
    let d = u.v === t2, c = d ? u.w : u.v;
    if (c !== o) {
      let f = d === i, h = n2.edge(u).weight;
      if (a += f ? h : -h, kt(e2, t2, c)) {
        let E = e2.edge(t2, c).cutvalue;
        a += f ? -E : E;
      }
    }
  }), a;
}
function pe(e2, n2) {
  arguments.length < 2 && (n2 = e2.nodes()[0]), tn(e2, {}, 1, n2);
}
function tn(e2, n2, t2, r, o) {
  let i = t2, s = e2.node(r);
  n2[r] = true;
  let a = e2.neighbors(r);
  return a && a.forEach((l) => {
    Object.hasOwn(n2, l) || (t2 = tn(e2, n2, t2, l, r));
  }), s.low = i, s.lim = t2++, o ? s.parent = o : delete s.parent, t2;
}
function rn(e2) {
  return e2.edges().find((n2) => e2.edge(n2).cutvalue < 0);
}
function on(e2, n2, t2) {
  let r = t2.v, o = t2.w;
  n2.hasEdge(r, o) || (r = t2.w, o = t2.v);
  let i = e2.node(r), s = e2.node(o), a = i, l = false;
  return i.lim > s.lim && (a = s, l = true), n2.edges().filter((d) => l === Ze(e2, e2.node(d.v), a) && l !== Ze(e2, e2.node(d.w), a)).reduce((d, c) => V(n2, c) < V(n2, d) ? c : d);
}
function sn(e2, n2, t2, r) {
  let o = t2.v, i = t2.w;
  e2.removeEdge(o, i), e2.setEdge(r.v, r.w, {}), pe(e2), ge(e2, n2), vt(e2, n2);
}
function vt(e2, n2) {
  let t2 = e2.nodes().find((o) => !e2.node(o).parent);
  if (!t2) return;
  let r = wt(e2, [t2]);
  r = r.slice(1), r.forEach((o) => {
    let s = e2.node(o).parent, a = n2.edge(o, s), l = false;
    a || (a = n2.edge(s, o), l = true), n2.node(o).rank = n2.node(s).rank + (l ? a.minlen : -a.minlen);
  });
}
function kt(e2, n2, t2) {
  return e2.hasEdge(n2, t2);
}
function Ze(e2, n2, t2) {
  return t2.low <= n2.lim && n2.lim <= t2.lim;
}
var dn = xt;
function xt(e2) {
  let n2 = e2.graph().ranker;
  if (typeof n2 == "function") return n2(e2);
  switch (n2) {
    case "network-simplex":
      an(e2);
      break;
    case "tight-tree":
      Ot(e2);
      break;
    case "longest-path":
      _t(e2);
      break;
    case "none":
      break;
    default:
      an(e2);
  }
}
var _t = U;
function Ot(e2) {
  U(e2), ne(e2);
}
function an(e2) {
  en(e2);
}
var ln = Ct;
function Ct(e2) {
  let n2 = jt(e2), t2 = e2.graph();
  if (!Array.isArray(t2.dummyChains)) return;
  t2.dummyChains.forEach((o) => {
    let i = e2.node(o), s = i.edgeObj, a = Tt(e2, n2, s.v, s.w), l = a.path, u = a.lca, d = 0, c = l[d], f = true;
    for (; o !== s.w; ) {
      if (i = e2.node(o), f) {
        for (; (c = l[d]) !== u && e2.node(c).maxRank < i.rank; ) d++;
        c === u && (f = false);
      }
      if (!f) {
        for (; d < l.length - 1 && e2.node(l[d + 1]).minRank <= i.rank; ) d++;
        c = l[d];
      }
      c !== void 0 && e2.setParent(o, c), o = e2.successors(o)[0];
    }
  });
}
function Tt(e2, n2, t2, r) {
  let o = [], i = [], s = Math.min(n2[t2].low, n2[r].low), a = Math.max(n2[t2].lim, n2[r].lim), l;
  l = t2;
  do
    l = e2.parent(l), o.push(l);
  while (l && (n2[l].low > s || a > n2[l].lim));
  let u = l, d = r;
  for (; (d = e2.parent(d)) !== u; ) i.push(d);
  return { path: o.concat(i.reverse()), lca: u };
}
function jt(e2) {
  let n2 = {}, t2 = 0;
  function r(o) {
    let i = t2;
    e2.children(o).forEach(r), n2[o] = { low: i, lim: t2++ };
  }
  return e2.children(D).forEach(r), n2;
}
function un(e2) {
  let n2 = M(e2, "root", {}, "_root"), t2 = Rt(e2), r = Object.values(t2), o = R(Math.max, r) - 1, i = 2 * o + 1;
  e2.graph().nestingRoot = n2, e2.edges().forEach((a) => e2.edge(a).minlen *= i);
  let s = It(e2) + 1;
  e2.children(D).forEach((a) => {
    cn(e2, n2, i, s, o, t2, a);
  }), e2.graph().nodeRankFactor = i;
}
function cn(e2, n2, t2, r, o, i, s) {
  var c;
  let a = e2.children(s);
  if (!a.length) {
    s !== n2 && e2.setEdge(n2, s, { weight: 0, minlen: t2 });
    return;
  }
  let l = ae(e2, "_bt"), u = ae(e2, "_bb"), d = e2.node(s);
  e2.setParent(l, s), d.borderTop = l, e2.setParent(u, s), d.borderBottom = u, a.forEach((f) => {
    var b;
    cn(e2, n2, t2, r, o, i, f);
    let h = e2.node(f), p = h.borderTop ? h.borderTop : f, E = h.borderBottom ? h.borderBottom : f, y = h.borderTop ? r : 2 * r, L = p !== E ? 1 : o - ((b = i[s]) != null ? b : 0) + 1;
    e2.setEdge(l, p, { weight: y, minlen: L, nestingEdge: true }), e2.setEdge(E, u, { weight: y, minlen: L, nestingEdge: true });
  }), e2.parent(s) || e2.setEdge(n2, l, { weight: 0, minlen: o + ((c = i[s]) != null ? c : 0) });
}
function Rt(e2) {
  let n2 = {};
  function t2(r, o) {
    let i = e2.children(r);
    i && i.length && i.forEach((s) => t2(s, o + 1)), n2[r] = o;
  }
  return e2.children(D).forEach((r) => t2(r, 1)), n2;
}
function It(e2) {
  return e2.edges().reduce((n2, t2) => n2 + e2.edge(t2).weight, 0);
}
function fn(e2) {
  let n2 = e2.graph();
  e2.removeNode(n2.nestingRoot), delete n2.nestingRoot, e2.edges().forEach((t2) => {
    e2.edge(t2).nestingEdge && e2.removeEdge(t2);
  });
}
var bn = Mt;
function Mt(e2) {
  function n2(t2) {
    let r = e2.children(t2), o = e2.node(t2);
    if (r.length && r.forEach(n2), o && Object.hasOwn(o, "minRank")) {
      o.borderLeft = [], o.borderRight = [];
      for (let i = o.minRank, s = o.maxRank + 1; i < s; ++i) hn(e2, "borderLeft", "_bl", t2, o, i), hn(e2, "borderRight", "_br", t2, o, i);
    }
  }
  e2.children(D).forEach(n2);
}
function hn(e2, n2, t2, r, o, i) {
  let s = { width: 0, height: 0, rank: i, borderType: n2 }, a = o[n2][i - 1], l = M(e2, "border", s, t2);
  o[n2][i] = l, e2.setParent(l, r), a && e2.setEdge(a, l, { weight: 1 });
}
function pn(e2) {
  var t2;
  let n2 = (t2 = e2.graph().rankdir) == null ? void 0 : t2.toLowerCase();
  (n2 === "lr" || n2 === "rl") && En(e2);
}
function mn(e2) {
  var t2;
  let n2 = (t2 = e2.graph().rankdir) == null ? void 0 : t2.toLowerCase();
  (n2 === "bt" || n2 === "rl") && Pt(e2), (n2 === "lr" || n2 === "rl") && (Ft(e2), En(e2));
}
function En(e2) {
  e2.nodes().forEach((n2) => gn(e2.node(n2))), e2.edges().forEach((n2) => gn(e2.edge(n2)));
}
function gn(e2) {
  let n2 = e2.width;
  e2.width = e2.height, e2.height = n2;
}
function Pt(e2) {
  e2.nodes().forEach((n2) => me(e2.node(n2))), e2.edges().forEach((n2) => {
    var r;
    let t2 = e2.edge(n2);
    (r = t2.points) == null || r.forEach(me), Object.hasOwn(t2, "y") && me(t2);
  });
}
function me(e2) {
  e2.y = -e2.y;
}
function Ft(e2) {
  e2.nodes().forEach((n2) => Ee(e2.node(n2))), e2.edges().forEach((n2) => {
    var r;
    let t2 = e2.edge(n2);
    (r = t2.points) == null || r.forEach(Ee), Object.hasOwn(t2, "x") && Ee(t2);
  });
}
function Ee(e2) {
  let n2 = e2.x;
  e2.x = e2.y, e2.y = n2;
}
function Le(e2, n2 = null) {
  let t2 = {}, r = e2.nodes().filter((d) => !e2.children(d).length), o = r.map((d) => e2.node(d).rank), i = R(Math.max, o), s = A(i + 1).map(() => []);
  function a(d) {
    if (t2[d]) return;
    t2[d] = true;
    let c = e2.node(d);
    s[c.rank].push(d);
    let f = e2.successors(d);
    f && [...f].sort((p, E) => u(p, E)).forEach(a);
  }
  r.sort((d, c) => e2.node(d).rank - e2.node(c).rank).forEach(a);
  function u(d, c) {
    let f = e2.node(d), h = e2.node(c);
    return ee(n2, f, h);
  }
  return s;
}
function ye(e2, n2) {
  let t2 = 0;
  for (let r = 1; r < n2.length; ++r) t2 += Vt(e2, n2[r - 1], n2[r]);
  return t2;
}
function Vt(e2, n2, t2) {
  let r = He(t2, t2.map((u, d) => d)), o = n2.flatMap((u) => {
    let d = e2.outEdges(u);
    return d ? d.map((c) => ({ pos: r[c.w], weight: e2.edge(c).weight })).sort((c, f) => c.pos - f.pos) : [];
  }), i = 1;
  for (; i < t2.length; ) i <<= 1;
  let s = 2 * i - 1;
  i -= 1;
  let a = new Array(s).fill(0), l = 0;
  return o.forEach((u) => {
    let d = u.pos + i;
    a[d] += u.weight;
    let c = 0;
    for (; d > 0; ) d % 2 && (c += a[d + 1]), d = d - 1 >> 1, a[d] += u.weight;
    l += u.weight * c;
  }), l;
}
function we(e2, n2 = []) {
  return n2.map((t2) => {
    let r = e2.inEdges(t2);
    if (!r || !r.length) return { v: t2 };
    {
      let o = r.reduce((i, s) => {
        let a = e2.edge(s), l = e2.node(s.v);
        return { sum: i.sum + a.weight * l.order, weight: i.weight + a.weight };
      }, { sum: 0, weight: 0 });
      return { v: t2, barycenter: o.sum / o.weight, weight: o.weight };
    }
  });
}
function Ne(e2, n2) {
  let t2 = {};
  e2.forEach((o, i) => {
    let s = { indegree: 0, in: [], out: [], vs: [o.v], i };
    o.barycenter !== void 0 && (s.barycenter = o.barycenter, s.weight = o.weight), t2[o.v] = s;
  }), n2.edges().forEach((o) => {
    let i = t2[o.v], s = t2[o.w];
    i !== void 0 && s !== void 0 && (s.indegree++, i.out.push(s));
  });
  let r = Object.values(t2).filter((o) => !o.indegree);
  return Dt(r);
}
function Dt(e2) {
  let n2 = [];
  function t2(o) {
    return (i) => {
      i.merged || (i.barycenter === void 0 || o.barycenter === void 0 || i.barycenter >= o.barycenter) && Yt(o, i);
    };
  }
  function r(o) {
    return (i) => {
      i.in.push(o), --i.indegree === 0 && e2.push(i);
    };
  }
  for (; e2.length; ) {
    let o = e2.pop();
    n2.push(o), o.in.reverse().forEach(t2(o)), o.out.forEach(r(o));
  }
  return n2.filter((o) => !o.merged).map((o) => B(o, ["vs", "i", "barycenter", "weight"]));
}
function Yt(e2, n2) {
  let t2 = 0, r = 0;
  e2.weight && (t2 += e2.barycenter * e2.weight, r += e2.weight), n2.weight && (t2 += n2.barycenter * n2.weight, r += n2.weight), e2.vs = n2.vs.concat(e2.vs), e2.barycenter = t2 / r, e2.weight = r, e2.i = Math.min(n2.i, e2.i), n2.merged = true;
}
function Ge(e2, n2, t2, r, o) {
  let i = {}, s = null, a = null, l = o;
  typeof n2 == "boolean" ? (l = n2, i = {}) : n2 && (i = n2, s = t2 != null ? t2 : null, a = r != null ? r : null);
  let u = ze(e2, (L) => Object.hasOwn(L, "barycenter")), d = u.lhs, c = u.rhs.sort((L, b) => b.i - L.i), f = [], h = 0, p = 0, E = 0;
  d.sort(Wt(a, s, !!l));
  for (let [L, b] of Object.entries(i)) {
    let g = d.findIndex((m) => m.vs[0] === L);
    d.splice(g + 1, 0, b);
  }
  E = Ln(f, c, E), d.forEach((L) => {
    E += L.vs.length, f.push(L.vs), h += L.barycenter * L.weight, p += L.weight, E = Ln(f, c, E);
  });
  let y = { vs: f.flat(1) };
  return p && (y.barycenter = h / p, y.weight = p), y;
}
function Ln(e2, n2, t2) {
  let r;
  for (; n2.length && (r = n2[n2.length - 1]).i <= t2; ) n2.pop(), e2.push(r.vs), t2++;
  return t2;
}
function Wt(e2, n2, t2) {
  return (r, o) => {
    if (r.barycenter < o.barycenter) return -1;
    if (r.barycenter > o.barycenter) return 1;
    if (e2 && (typeof r.vs[0] == "string" || typeof o.vs[0] == "string")) {
      let i = e2.node(r.vs[0]), s = e2.node(o.vs[0]), a = ee(n2, i, s);
      if (a !== 0) return a;
    }
    return t2 ? o.i - r.i : r.i - o.i;
  };
}
function te(e2, n2, t2, r, o) {
  var L, b, g, m, w, k, _, C, j, I, S;
  let i = null, s = o;
  typeof r == "boolean" ? (s = r, i = null) : r !== void 0 && (i = r);
  let a = e2.children(n2), l = e2.node(n2), u = l ? l.borderLeft : void 0, d = l ? l.borderRight : void 0, c = {};
  u && (a = a.filter((G) => G !== u && G !== d));
  let f = we(e2, a);
  f.forEach((G) => {
    if (e2.children(G.v).length) {
      let { result: x } = te(e2, G.v, t2, i, s);
      c[G.v] = x, Object.hasOwn(x, "barycenter") && Xt(G, x);
    }
  });
  let h = Ne(f, t2);
  Bt(h, c);
  let p = {}, E = false;
  for (let G = 0; G < h.length; G++) for (let x = G + 1; x < h.length; x++) if (!(!h[G] || !h[x] || !((L = h[G]) != null && L.barycenter) || !((b = h[x]) != null && b.barycenter)) && ((g = h[G]) == null ? void 0 : g.barycenter) === h[x].barycenter) {
    let v = (w = (m = h[G]) == null ? void 0 : m.vs[0]) != null ? w : "", N = (_ = (k = h[x]) == null ? void 0 : k.vs[0]) != null ? _ : "", O = e2.node(v), W = e2.node(N);
    if (O.dummy === "edge" && W.dummy === "edge" && ((C = O.edgeObj) == null ? void 0 : C.v) === ((j = W.edgeObj) == null ? void 0 : j.v) && ((I = O.edgeObj) == null ? void 0 : I.w) === ((S = W.edgeObj) == null ? void 0 : S.w)) if (O.edgeLabel.reversed) {
      p[N] = h[G], h.splice(G, 1), G--;
      break;
    } else p[v] = h[x], h.splice(x, 1), x--;
    else E = true;
  }
  let y = Ge(h, p, i, e2, s);
  if (u && d) {
    y.vs = [u, y.vs, d].flat(1);
    let G = e2.predecessors(u);
    if (G && G.length) {
      let x = e2.node(G[0]), v = e2.predecessors(d), N = e2.node(v[0]);
      Object.hasOwn(y, "barycenter") || (y.barycenter = 0, y.weight = 0), y.barycenter = (y.barycenter * y.weight + x.order + N.order) / (y.weight + 2), y.weight += 2;
    }
  }
  return Object.defineProperty(y, "result", { value: y, enumerable: false, configurable: true, writable: true }), Object.defineProperty(y, "usedBias", { value: E, enumerable: false, configurable: true, writable: true }), y;
}
function Bt(e2, n2) {
  e2.forEach((t2) => {
    t2.vs = t2.vs.flatMap((r) => n2[r] ? n2[r].vs : r);
  });
}
function Xt(e2, n2) {
  e2.barycenter !== void 0 ? (e2.barycenter = (e2.barycenter * e2.weight + n2.barycenter * n2.weight) / (e2.weight + n2.weight), e2.weight += n2.weight) : (e2.barycenter = n2.barycenter, e2.weight = n2.weight);
}
function ve(e2, n2, t2, r) {
  r || (r = e2.nodes());
  let o = zt(e2), i = new T({ compound: true }).setGraph({ root: o }).setDefaultNodeLabel((s) => e2.node(s));
  return r.forEach((s) => {
    let a = e2.node(s), l = e2.parent(s);
    if (a.rank === n2 || a.minRank <= n2 && n2 <= a.maxRank) {
      i.setNode(s), i.setParent(s, l || o);
      let u = e2[t2](s);
      u && u.forEach((d) => {
        let c = d.v === s ? d.w : d.v, f = i.edge(c, s), h = f !== void 0 ? f.weight : 0;
        i.setEdge(c, s, { weight: e2.edge(d).weight + h });
      }), Object.hasOwn(a, "minRank") && i.setNode(s, { borderLeft: a.borderLeft[n2], borderRight: a.borderRight[n2] });
    }
  }), i;
}
function zt(e2) {
  let n2;
  for (; e2.hasNode(n2 = $("_root")); ) ;
  return n2;
}
function ke(e2, n2, t2) {
  let r = {}, o;
  t2.forEach((i) => {
    let s = e2.parent(i), a, l;
    for (; s; ) {
      if (a = e2.parent(s), a ? (l = r[a], r[a] = s) : (l = o, o = s), l && l !== s) {
        n2.setEdge(l, s);
        return;
      }
      s = a;
    }
  });
}
function re(e2, n2 = {}, t2 = null) {
  if (typeof n2.customOrder == "function") {
    n2.customOrder(e2, re);
    return;
  }
  let r = de(e2), o = yn(e2, A(1, r + 1), "inEdges"), i = yn(e2, A(r - 1, -1, -1), "outEdges"), s = Le(e2, t2);
  if (wn(e2, s), n2.disableOptimalOrderHeuristic) return;
  let a = Number.POSITIVE_INFINITY, l, u = n2.constraints || [];
  for (let d = 0, c = 0; c < 4; ++d, ++c) {
    Ht(d % 2 ? o : i, d % 4 >= 2, u, t2), s = P(e2);
    let f = ye(e2, s);
    f < a ? (c = 0, l = Object.assign({}, s), a = f) : f === a && (l = structuredClone(s));
  }
  wn(e2, l);
}
function yn(e2, n2, t2) {
  let r = /* @__PURE__ */ new Map(), o = (i, s) => {
    r.has(i) || r.set(i, []), r.get(i).push(s);
  };
  for (let i of e2.nodes()) {
    let s = e2.node(i);
    if (typeof s.rank == "number" && o(s.rank, i), typeof s.minRank == "number" && typeof s.maxRank == "number") for (let a = s.minRank; a <= s.maxRank; a++) a !== s.rank && o(a, i);
  }
  return n2.map(function(i) {
    return ve(e2, i, t2, r.get(i) || []);
  });
}
function Ht(e2, n2, t2, r) {
  let o = true, i = new T();
  e2.forEach(function(s) {
    t2.forEach((d) => i.setEdge(d.left, d.right));
    let a = s.graph().root, { result: l, usedBias: u } = te(s, a, i, r, o);
    n2 && u && (o = !o), l.vs.forEach((d, c) => s.node(d).order = c), ke(s, i, l.vs);
  });
}
function wn(e2, n2) {
  Object.values(n2).forEach((t2) => t2.forEach((r, o) => e2.node(r).order = o));
}
function qt(e2, n2) {
  let t2 = {};
  function r(o, i) {
    let s = 0, a = 0, l = o.length, u = i[i.length - 1];
    return i.forEach((d, c) => {
      let f = Ut(e2, d), h = f ? e2.node(f).order : l;
      (f || d === u) && (i.slice(a, c + 1).forEach((p) => {
        let E = e2.predecessors(p);
        E && E.forEach((y) => {
          let L = e2.node(y), b = L.order;
          (b < s || h < b) && !(L.dummy && e2.node(p).dummy) && Gn(t2, y, p);
        });
      }), a = c + 1, s = h);
    }), i;
  }
  return n2.length && n2.reduce(r), t2;
}
function $t(e2, n2) {
  let t2 = {};
  function r(i, s, a, l, u) {
    A(s, a).forEach((d) => {
      let c = i[d];
      if (c !== void 0 && e2.node(c).dummy) {
        let f = e2.predecessors(c);
        f && f.forEach((h) => {
          if (h === void 0) return;
          let p = e2.node(h);
          p.dummy && (p.order < l || p.order > u) && Gn(t2, h, c);
        });
      }
    });
  }
  function o(i, s) {
    let a = -1, l = -1, u = 0;
    return s.forEach((d, c) => {
      if (e2.node(d).dummy === "border") {
        let f = e2.predecessors(d);
        if (f && f.length) {
          let h = f[0];
          if (h === void 0) return;
          l = e2.node(h).order, r(s, u, c, a, l), u = c, a = l;
        }
      }
      r(s, u, s.length, l, i.length);
    }), s;
  }
  return n2.length && n2.reduce(o), t2;
}
function Ut(e2, n2) {
  if (e2.node(n2).dummy) {
    let t2 = e2.predecessors(n2);
    if (t2) return t2.find((r) => e2.node(r).dummy);
  }
}
function Gn(e2, n2, t2) {
  if (n2 > t2) {
    let o = n2;
    n2 = t2, t2 = o;
  }
  let r = e2[n2];
  r || (e2[n2] = r = {}), r[t2] = true;
}
function Jt(e2, n2, t2) {
  if (n2 > t2) {
    let o = n2;
    n2 = t2, t2 = o;
  }
  let r = e2[n2];
  return r !== void 0 && Object.hasOwn(r, t2);
}
function Kt(e2, n2, t2, r, o) {
  let i = {}, s = {}, a = {};
  return n2.forEach((l) => {
    l.forEach((u, d) => {
      i[u] = u, s[u] = u, a[u] = d;
    });
  }), n2.forEach((l) => {
    let u = -1, d = -1, c = false, f = l, h = l.findIndex((p) => (o == null ? void 0 : o.includes(p)) || Nn(p, e2, o));
    h > 0 && (f = [l[h], ...l.slice(0, h), ...l.slice(h + 1)], c = true), f.forEach((p) => {
      var y;
      let E = r(p);
      if (E && E.length) {
        o != null && o.includes(p) && (E = E.filter((g) => Nn(g, e2, o)));
        let L = E.sort((g, m) => {
          let w = a[g], k = a[m];
          return (w !== void 0 ? w : 0) - (k !== void 0 ? k : 0);
        }), b = (L.length - 1) / 2;
        for (let g = Math.floor(b), m = Math.ceil(b); g <= m; ++g) {
          let w = L[g];
          if (w === void 0) continue;
          let k = a[w];
          if (k !== void 0 && s[p] === p && u < k && a[w] !== d && !Jt(t2, p, w)) {
            let _ = i[w];
            _ !== void 0 && (s[w] = p, s[p] = i[p] = _, u = k, c && (u = -1, d = (y = a[w]) != null ? y : -1, c = false));
          }
        }
      }
    });
  }), { root: i, align: s };
}
function Qt(e2, n2, t2, r, o = false) {
  let i = {}, s = Zt(e2, n2, t2, o), a = o ? "borderLeft" : "borderRight";
  function l(h, p) {
    let E = s.nodes().slice(), y = {}, L = E.pop();
    for (; L; ) {
      if (y[L]) h(L);
      else {
        y[L] = true, E.push(L);
        for (let b of p(L)) E.push(b);
      }
      L = E.pop();
    }
  }
  function u(h) {
    let p = s.inEdges(h);
    p ? i[h] = p.reduce((E, y) => {
      var g;
      let L = (g = i[y.v]) != null ? g : 0, b = s.edge(y);
      return Math.max(E, L + (b !== void 0 ? b : 0));
    }, 0) : i[h] = 0;
  }
  function d(h) {
    let p = s.outEdges(h), E = Number.POSITIVE_INFINITY;
    p && (E = p.reduce((L, b) => {
      let g = i[b.w], m = s.edge(b);
      return Math.min(L, (g !== void 0 ? g : 0) - (m !== void 0 ? m : 0));
    }, Number.POSITIVE_INFINITY));
    let y = e2.node(h);
    E !== Number.POSITIVE_INFINITY && y.borderType !== a && (i[h] = Math.max(i[h] !== void 0 ? i[h] : 0, E));
  }
  function c(h) {
    return s.predecessors(h) || [];
  }
  function f(h) {
    return s.successors(h) || [];
  }
  return l(u, c), l(d, f), Object.keys(r).forEach((h) => {
    var E;
    let p = t2[h];
    p !== void 0 && (i[h] = (E = i[p]) != null ? E : 0);
  }), i;
}
function Zt(e2, n2, t2, r) {
  let o = new T(), i = e2.graph(), s = rr(i.nodesep, i.edgesep, r);
  return n2.forEach((a) => {
    let l;
    a.forEach((u) => {
      let d = t2[u];
      if (d !== void 0) {
        if (o.setNode(d), l !== void 0) {
          let c = t2[l];
          if (c !== void 0) {
            let f = o.edge(c, d);
            o.setEdge(c, d, Math.max(s(e2, u, l), f || 0));
          }
        }
        l = u;
      }
    });
  }), o;
}
function er(e2, n2) {
  return Object.values(n2).reduce((t2, r) => {
    let o = Number.NEGATIVE_INFINITY, i = Number.POSITIVE_INFINITY;
    Object.entries(r).forEach(([a, l]) => {
      let u = or(e2, a) / 2;
      o = Math.max(l + u, o), i = Math.min(l - u, i);
    });
    let s = o - i;
    return s < t2[0] && (t2 = [s, r]), t2;
  }, [Number.POSITIVE_INFINITY, null])[1];
}
function nr(e2, n2) {
  let t2 = Object.values(n2), r = R(Math.min, t2), o = R(Math.max, t2);
  ["u", "d"].forEach((i) => {
    ["l", "r"].forEach((s) => {
      let a = i + s, l = e2[a];
      if (!l || l === n2) return;
      let u = Object.values(l), d = r - R(Math.min, u);
      s !== "l" && (d = o - R(Math.max, u)), d && (e2[a] = X(l, (c) => c + d));
    });
  });
}
function tr(e2, n2 = void 0) {
  let t2 = e2.ul;
  return t2 ? X(t2, (r, o) => {
    var s, a;
    if (n2) {
      let l = n2.toLowerCase(), u = e2[l];
      if (u && u[o] !== void 0) return u[o];
    }
    let i = Object.values(e2).map((l) => {
      let u = l[o];
      return u !== void 0 ? u : 0;
    }).sort((l, u) => l - u);
    return (((s = i[1]) != null ? s : 0) + ((a = i[2]) != null ? a : 0)) / 2;
  }) : {};
}
function vn(e2, n2) {
  let t2 = P(e2), r = Object.assign(qt(e2, t2), $t(e2, t2)), o = {}, i;
  ["u", "d"].forEach((a) => {
    i = a === "u" ? t2 : Object.values(t2).reverse(), ["l", "r"].forEach((l) => {
      l === "r" && (i = i.map((f) => Object.values(f).reverse()));
      let d = Kt(e2, i, r, (f) => (a === "u" ? e2.predecessors(f) : e2.successors(f)) || [], n2), c = Qt(e2, i, d.root, d.align, l === "r");
      l === "r" && (c = X(c, (f) => -f)), o[a + l] = c;
    });
  });
  let s = er(e2, o);
  return nr(o, s), tr(o, e2.graph().align);
}
function rr(e2, n2, t2) {
  return (r, o, i) => {
    let s = r.node(o), a = r.node(i), l = 0, u;
    if (l += s.width / 2, Object.hasOwn(s, "labelpos")) switch (s.labelpos.toLowerCase()) {
      case "l":
        u = -s.width / 2;
        break;
      case "r":
        u = s.width / 2;
        break;
    }
    if (u && (l += t2 ? u : -u), u = void 0, l += (s.dummy ? n2 : e2) / 2, l += (a.dummy ? n2 : e2) / 2, l += a.width / 2, Object.hasOwn(a, "labelpos")) switch (a.labelpos.toLowerCase()) {
      case "l":
        u = a.width / 2;
        break;
      case "r":
        u = -a.width / 2;
        break;
    }
    return u && (l += t2 ? u : -u), l;
  };
}
function or(e2, n2) {
  return e2.node(n2).width;
}
function Nn(e2, n2, t2) {
  var s;
  if (!t2) return false;
  let r = (s = n2.node(e2)) == null ? void 0 : s.edgeObj;
  if (!r || n2.node(e2).edgeLabel.reversed) return false;
  let o = t2.indexOf(r == null ? void 0 : r.v), i = t2.indexOf(r == null ? void 0 : r.w);
  return o !== -1 && i !== -1 && o === (i + 1) % t2.length || o === (i - 1) % t2.length;
}
function kn(e2, n2) {
  e2 = Z(e2), ir(e2), Object.entries(vn(e2, n2)).forEach(([t2, r]) => e2.node(t2).x = r);
}
function ir(e2) {
  let n2 = P(e2), t2 = e2.graph(), r = t2.ranksep, o = t2.rankalign, i = 0;
  n2.forEach((s) => {
    let a = s.reduce((l, u) => {
      var c;
      let d = (c = e2.node(u).height) != null ? c : 0;
      return l > d ? l : d;
    }, 0);
    s.forEach((l) => {
      let u = e2.node(l);
      o === "top" ? u.y = i + u.height / 2 : o === "bottom" ? u.y = i + a - u.height / 2 : u.y = i + a / 2;
    }), i += a + r;
  });
}
var xn = /* @__PURE__ */ new WeakMap();
function Oe(e2, n2 = {}) {
  return Rn(e2, q, n2), e2;
}
function _n(e2, n2, t2) {
  let r = n2;
  for (; r !== void 0; ) {
    let o = e2.parent(r);
    if (o === t2) return r;
    r = o;
  }
}
function Rn(e2, n2, t2) {
  var L;
  let r = e2.nodes().filter((b) => e2.children(b).length), o = {};
  r.forEach((b) => {
    let g = e2.node(b);
    if (g && g.rankdir) {
      let m = new T({ multigraph: true, compound: true });
      m.setGraph({ rankdir: g.rankdir });
      let w = e2.children(b);
      w.forEach((v) => {
        let N = { ...e2.node(v) };
        m.setNode(v, N);
        let O = e2.parent(v);
        O && O !== b && w.includes(O) && m.setParent(v, O);
      });
      let k = /* @__PURE__ */ new Set();
      e2.edges().forEach((v) => {
        let N = _n(e2, v.v, b), O = _n(e2, v.w, b);
        if (N && O && N !== O) {
          let W = `${N}\0${O}`;
          k.has(W) || (k.add(W), m.setEdge(N, O, { ...e2.edge(v) }));
        }
      }), Rn(m, n2, t2);
      let _ = jn(m);
      On(_, n2, t2, null), Cn(m, _);
      let C = 1 / 0, j = 1 / 0, I = -1 / 0, S = -1 / 0;
      m.nodes().forEach((v) => {
        if (v === b) return;
        let N = m.node(v);
        N && typeof N.x == "number" && typeof N.y == "number" && typeof N.width == "number" && typeof N.height == "number" && (C = Math.min(C, N.x - N.width / 2), I = Math.max(I, N.x + N.width / 2), j = Math.min(j, N.y - N.height / 2), S = Math.max(S, N.y + N.height / 2));
      }), (!isFinite(C) || !isFinite(j) || !isFinite(I) || !isFinite(S)) && (C = j = 0, I = S = 0);
      let G = I - C, x = S - j;
      o[b] = { minX: C, minY: j, maxX: I, maxY: S, width: G, height: x, offsetX: C, offsetY: j }, g._dagreClusterSubgraph = m;
    }
  });
  let i = [], s = (b) => {
    let g = [], m = (e2.children(b) || []).filter((w) => w !== b);
    for (; m.length > 0; ) {
      let w = m.shift();
      g.push(w), (e2.children(w) || []).filter((k) => k !== w).forEach((k) => m.push(k));
    }
    return g;
  }, a = /* @__PURE__ */ new Map();
  r.forEach((b) => {
    let g = e2.node(b);
    g && g.rankdir && o[b] && a.set(b, (e2.children(b) || []).filter((m) => m !== b));
  });
  let l = new Set([...a.values()].flat()), u = /* @__PURE__ */ new Map();
  a.forEach((b, g) => {
    l.has(g) || u.set(g, s(g));
  });
  let d = new Set([...u.values()].flat()), c = (b) => {
    for (let [g, m] of u) if (m.includes(b)) return g;
    return b;
  }, f = [];
  e2.edges().forEach((b) => {
    (d.has(b.v) || d.has(b.w)) && f.push({ edge: b, label: e2.edge(b) });
  });
  let h = /* @__PURE__ */ new Map();
  d.forEach((b) => {
    let g = e2.parent(b);
    h.set(b, typeof g == "string" ? g : void 0);
  }), u.forEach((b, g) => {
    let m = e2.node(g), w = [];
    b.forEach((C) => {
      let j = e2.node(C);
      j && (w.push({ id: C, node: j, parent: h.get(C) }), e2.removeNode(C));
    });
    let k = f.filter(({ edge: C }) => b.includes(C.v) || b.includes(C.w)), _ = o[g];
    m && (i.push({ clusterId: g, subgraph: m._dagreClusterSubgraph, bounds: _, children: b, removedNodes: w, removedEdges: k }), m.width = _.width, m.height = _.height);
  });
  let p = /* @__PURE__ */ new Set();
  f.forEach(({ edge: b, label: g }) => {
    let m = c(b.v), w = c(b.w);
    if (m !== w && e2.hasNode(m) && e2.hasNode(w)) {
      let k = `${m}\0${w}`;
      p.has(k) || (p.add(k), e2.setEdge(m, w, { ...g, width: 0, height: 0 }));
    }
  });
  let E = jn(e2), y = On(E, n2, t2, (L = xn.get(e2)) != null ? L : null);
  xn.set(e2, y), Cn(e2, E), p.forEach((b) => {
    let g = b.indexOf("\0"), m = b.slice(0, g), w = b.slice(g + 1);
    e2.hasEdge(m, w) && e2.removeEdge(m, w);
  }), i.forEach(({ clusterId: b, subgraph: g, bounds: m, removedNodes: w, removedEdges: k }) => {
    var G, x;
    let _ = e2.node(b), C = (G = _ == null ? void 0 : _.x) != null ? G : 0, j = (x = _ == null ? void 0 : _.y) != null ? x : 0, I = (m.minX + m.maxX) / 2, S = (m.minY + m.maxY) / 2;
    w.forEach(({ id: v, node: N, parent: O }) => {
      e2.setNode(v, N), O !== void 0 && e2.setParent(v, O);
    }), k.forEach(({ edge: v, label: N }) => {
      e2.setEdge(v, N);
    }), g.nodes().forEach((v) => {
      if (v === b) return;
      let N = g.node(v), O = e2.node(v);
      O && N && typeof N.x == "number" && typeof N.y == "number" && (O.x = C + (N.x - I), O.y = j + (N.y - S));
    }), delete _._dagreClusterSubgraph;
  }), r.forEach((b) => {
    var w, k;
    let g = e2.node(b), m = o[b];
    if (g && g.rankdir && g._dagreClusterSubgraph && m) {
      let _ = g._dagreClusterSubgraph, C = (w = g.x) != null ? w : 0, j = (k = g.y) != null ? k : 0, I = (m.minX + m.maxX) / 2, S = (m.minY + m.maxY) / 2;
      _.nodes().forEach((G) => {
        if (G === b) return;
        let x = _.node(G), v = e2.node(G);
        if (v && x && typeof x.x == "number" && typeof x.y == "number") {
          let N = x.x - I, O = x.y - S;
          v.x = C + N, v.y = j + O;
        }
      }), delete g._dagreClusterSubgraph;
    }
  });
}
function On(e2, n2, t2, r = null) {
  var l, u;
  let o = (t2 == null ? void 0 : t2.useDynamic) !== false, i = o && (l = r == null ? void 0 : r.graph) != null ? l : null, s = o && (u = r == null ? void 0 : r.rawNodes) != null ? u : null;
  n2("    makeSpaceForEdgeLabels", () => hr(e2)), n2("    removeSelfEdges", () => Nr(e2)), n2("    acyclic", () => Ue(e2, i)), n2("    nestingGraph.run", () => un(e2)), n2("    rank", () => dn(Z(e2))), n2("    injectEdgeLabelProxies", () => br(e2)), n2("    removeEmptyRanks", () => Be(e2)), n2("    nestingGraph.cleanup", () => fn(e2)), n2("    normalizeRanks", () => We(e2)), n2("    assignRankMinMax", () => gr(e2)), n2("    removeEdgeLabelProxies", () => pr(e2)), n2("    normalize.run", () => Ke(e2)), n2("    parentDummyChains", () => ln(e2)), n2("    addBorderSegments", () => bn(e2)), n2("    order", () => re(e2, t2, s)), n2("    insertSelfEdges", () => Gr(e2)), n2("    adjustCoordinateSystem", () => pn(e2)), n2("    position", () => kn(e2, t2.corePath)), n2("    positionSelfEdges", () => vr(e2));
  let a = JSON.parse(JSON.stringify(e2._nodes));
  return n2("    removeBorderNodes", () => wr(e2)), n2("    normalize.undo", () => Qe(e2)), n2("    fixupEdgeLabelCoords", () => Lr(e2)), n2("    undoCoordinateSystem", () => mn(e2)), n2("    translateGraph", () => mr(e2)), n2("    assignNodeIntersects", () => Er(e2)), n2("    reversePoints", () => yr(e2)), n2("    acyclic.undo", () => Je(e2)), { graph: e2, rawNodes: a };
}
function Cn(e2, n2) {
  e2.nodes().forEach((t2) => {
    let r = e2.node(t2), o = n2.node(t2);
    r && (r.x = o.x, r.y = o.y, r.order = o.order, r.rank = o.rank, n2.children(t2).length && (r.width = o.width, r.height = o.height));
  }), e2.edges().forEach((t2) => {
    let r = e2.edge(t2), o = n2.edge(t2);
    r.points = o.points, Object.hasOwn(o, "x") && (r.x = o.x, r.y = o.y);
  }), e2.graph().width = n2.graph().width, e2.graph().height = n2.graph().height;
}
var sr = ["nodesep", "edgesep", "ranksep", "marginx", "marginy"], ar = { ranksep: 50, edgesep: 20, nodesep: 50, rankdir: "TB", rankalign: "center" }, dr = ["acyclicer", "ranker", "rankdir", "align", "rankalign"], lr = ["width", "height", "rank"], Tn = { width: 0, height: 0 }, ur = ["minlen", "weight", "width", "height", "labeloffset"], cr = { minlen: 1, weight: 1, width: 0, height: 0, labeloffset: 10, labelpos: "r" }, fr = ["labelpos"];
function jn(e2) {
  let n2 = new T({ multigraph: true, compound: true }), t2 = _e(e2.graph());
  return n2.setGraph(Object.assign({}, ar, xe(t2, sr), B(t2, dr))), e2.nodes().forEach((r) => {
    let o = _e(e2.node(r)), i = xe(o, lr);
    Object.keys(Tn).forEach((a) => {
      i[a] === void 0 && (i[a] = Tn[a]);
    }), n2.setNode(r, i);
    let s = e2.parent(r);
    s !== void 0 && n2.setParent(r, s);
  }), e2.edges().forEach((r) => {
    let o = _e(e2.edge(r));
    n2.setEdge(r, Object.assign({}, cr, xe(o, ur), B(o, fr)));
  }), n2;
}
function hr(e2) {
  let n2 = e2.graph();
  n2.ranksep /= 2, e2.edges().forEach((t2) => {
    var o;
    let r = e2.edge(t2);
    r.minlen *= 2, ((o = r.labelpos) != null ? o : "r").toLowerCase() !== "c" && (n2.rankdir === "TB" || n2.rankdir === "BT" ? r.width += r.labeloffset : r.height += r.labeloffset);
  });
}
function br(e2) {
  e2.edges().forEach((n2) => {
    let t2 = e2.edge(n2);
    if (t2.width && t2.height) {
      let r = e2.node(n2.v), i = { rank: (e2.node(n2.w).rank - r.rank) / 2 + r.rank, e: n2 };
      M(e2, "edge-proxy", i, "_ep");
    }
  });
}
function gr(e2) {
  let n2 = 0;
  e2.nodes().forEach((t2) => {
    let r = e2.node(t2);
    r.borderTop && (r.minRank = e2.node(r.borderTop).rank, r.maxRank = e2.node(r.borderBottom).rank, n2 = Math.max(n2, r.maxRank));
  }), e2.graph().maxRank = n2;
}
function pr(e2) {
  e2.nodes().forEach((n2) => {
    let t2 = e2.node(n2);
    if (t2.dummy === "edge-proxy") {
      let r = t2;
      e2.edge(r.e).labelRank = t2.rank, e2.removeNode(n2);
    }
  });
}
function mr(e2) {
  let n2 = Number.POSITIVE_INFINITY, t2 = 0, r = Number.POSITIVE_INFINITY, o = 0, i = e2.graph(), s = i.marginx || 0, a = i.marginy || 0;
  function l(u) {
    let d = u.x, c = u.y, f = u.width, h = u.height;
    n2 = Math.min(n2, d - f / 2), t2 = Math.max(t2, d + f / 2), r = Math.min(r, c - h / 2), o = Math.max(o, c + h / 2);
  }
  e2.nodes().forEach((u) => l(e2.node(u))), e2.edges().forEach((u) => {
    let d = e2.edge(u);
    Object.hasOwn(d, "x") && l(d);
  }), n2 -= s, r -= a, e2.nodes().forEach((u) => {
    let d = e2.node(u);
    d.x -= n2, d.y -= r;
  }), e2.edges().forEach((u) => {
    let d = e2.edge(u);
    d.points.forEach((c) => {
      c.x -= n2, c.y -= r;
    }), Object.hasOwn(d, "x") && (d.x -= n2), Object.hasOwn(d, "y") && (d.y -= r);
  }), i.width = t2 - n2 + s, i.height = o - r + a;
}
function Er(e2) {
  e2.edges().forEach((n2) => {
    if (n2.v === n2.w) return;
    let t2 = e2.edge(n2), r = e2.node(n2.v), o = e2.node(n2.w), i, s;
    t2.points ? (i = t2.points[0], s = t2.points[t2.points.length - 1]) : (t2.points = [], i = o, s = r), t2.points.unshift(se(r, i)), t2.points.push(se(o, s));
  });
}
function Lr(e2) {
  e2.edges().forEach((n2) => {
    let t2 = e2.edge(n2);
    if (Object.hasOwn(t2, "x")) switch ((t2.labelpos === "l" || t2.labelpos === "r") && (t2.width -= t2.labeloffset), t2.labelpos) {
      case "l":
        t2.x -= t2.width / 2 + t2.labeloffset;
        break;
      case "r":
        t2.x += t2.width / 2 + t2.labeloffset;
        break;
    }
  });
}
function yr(e2) {
  e2.edges().forEach((n2) => {
    let t2 = e2.edge(n2);
    t2.reversed && t2.points.reverse();
  });
}
function wr(e2) {
  e2.nodes().forEach((n2) => {
    if (e2.children(n2).length) {
      let t2 = e2.node(n2), r = e2.node(t2.borderTop), o = e2.node(t2.borderBottom), i = e2.node(t2.borderLeft[t2.borderLeft.length - 1]), s = e2.node(t2.borderRight[t2.borderRight.length - 1]);
      t2.width = Math.abs(s.x - i.x), t2.height = Math.abs(o.y - r.y), t2.x = i.x + t2.width / 2, t2.y = r.y + t2.height / 2;
    }
  }), e2.nodes().forEach((n2) => {
    e2.node(n2).dummy === "border" && e2.removeNode(n2);
  });
}
function Nr(e2) {
  e2.edges().forEach((n2) => {
    if (n2.v === n2.w) {
      let t2 = e2.node(n2.v);
      t2.selfEdges || (t2.selfEdges = []), t2.selfEdges.push({ e: n2, label: e2.edge(n2) }), e2.removeEdge(n2);
    }
  });
}
function Gr(e2) {
  P(e2).forEach((t2) => {
    let r = 0;
    t2.forEach((o, i) => {
      let s = e2.node(o);
      typeof s.rank != "number" && (s.rank = 0), s.order = i + r, (s.selfEdges || []).forEach((a) => {
        M(e2, "selfedge", { width: a.label.width, height: a.label.height, rank: s.rank, order: i + ++r, e: a.e, edgeLabel: a.label }, "_se"), (!Array.isArray(a.label.points) || a.label.points.length !== 7) && (a.label.points = [{ x: 0, y: -10 }, { x: 0, y: -10 }, { x: 0, y: 0 }, { x: 0, y: 10 }, { x: 0, y: 10 }, { x: 0, y: 0 }, { x: 0, y: 0 }]);
      }), delete s.selfEdges;
    });
  });
}
function vr(e2) {
  e2.nodes().forEach((n2) => {
    let t2 = e2.node(n2), r = (o) => typeof o == "number" && isFinite(o);
    if (t2.dummy === "selfedge") {
      let o = t2, i = e2.node(o.e.v), s = r(i == null ? void 0 : i.x) ? i.x : 0, a = r(i == null ? void 0 : i.y) ? i.y : 0, l = r(i == null ? void 0 : i.width) ? i.width : 0, u = r(i == null ? void 0 : i.height) ? i.height : 0, d = r(t2.x) ? t2.x : s, c = r(t2.y) ? t2.y : a, f = l / 2, h = u / 2;
      o.edgeLabel.points = [{ x: d + f, y: c - h }, { x: d + f, y: c - h }, { x: d, y: c }, { x: d - f, y: c + h }, { x: d - f, y: c + h }, { x: d, y: c }, { x: d, y: c }], o.edgeLabel.x = d, o.edgeLabel.y = c, e2.setEdge(o.e, o.edgeLabel), e2.removeNode(n2);
    } else t2 && Array.isArray(t2.selfEdges) && t2.selfEdges.forEach((o) => {
      if (!Array.isArray(o.label.points) || o.label.points.length !== 7) {
        let i = r(t2.x) ? t2.x : 0, s = r(t2.y) ? t2.y : 0, a = r(t2.width) ? t2.width : 0, l = r(t2.height) ? t2.height : 0, u = a / 2, d = l / 2;
        o.label.points = [{ x: i + u, y: s - d }, { x: i + u, y: s - d }, { x: i, y: s }, { x: i - u, y: s + d }, { x: i - u, y: s + d }, { x: i, y: s }, { x: i, y: s }];
      }
    });
  });
}
function xe(e2, n2) {
  return X(B(e2, n2), Number);
}
function _e(e2) {
  let n2 = {};
  return e2 && Object.entries(e2).forEach(([t2, r]) => {
    typeof t2 == "string" && (t2 = t2.toLowerCase()), n2[t2] = r;
  }), n2;
}
function Ce(e2) {
  let n2 = P(e2), t2 = new T({ compound: true, multigraph: true }).setGraph({});
  return e2.nodes().forEach((r) => {
    t2.setNode(r, { label: r }), t2.setParent(r, "layer" + e2.node(r).rank);
  }), e2.edges().forEach((r) => t2.setEdge(r.v, r.w, {}, r.name)), n2.forEach((r, o) => {
    let i = "layer" + o;
    t2.setNode(i, { rank: "same" }), r.reduce((s, a) => (t2.setEdge(s, a, { style: "invis" }), a));
  }), t2;
}
var kr = { graphlib: ie, version: ue, layout: Oe, debug: Ce, util: { time: le, notime: q } }, $o = kr;
const reactflowStyles = "/assets/style-BnuhLJ6X.css";
const dataModelFlowStyles = reactflowStyles;
const $$splitComponentImporter$W = () => import("./list-NVPmWECq.mjs");
const Route$1c = createFileRoute()({
  staticData: {
    i18n: dataI18n
  },
  component: lazyRouteComponent($$splitComponentImporter$W, "component"),
  head: () => ({
    links: [{
      rel: "stylesheet",
      href: dataModelFlowStyles
    }]
  })
});
const handle = {
  i18n: dataI18n
};
const Route$1b = createFileRoute()({
  beforeLoad: () => {
    throw redirect({ to: "/detection/scenarios" });
  }
});
const $$splitComponentImporter$V = () => import("./analytics-Bb1zhBpt.mjs");
const analyticsLayoutLoader = createServerFn().middleware([authMiddleware]).handler(createSsrRpc("be70655bf46ebde519b189f0f0a811452f0cf60518a6ffc381b86125323c6449"));
const Route$1a = createFileRoute()({
  loader: () => analyticsLayoutLoader(),
  staticData: {
    BreadCrumbs: [({
      isLast
    }) => {
      const {
        t: t2
      } = useTranslation(["navigation"]);
      return /* @__PURE__ */ jsxRuntimeExports.jsx(BreadCrumbLink, { to: "/detection/analytics", isLast, children: t2("navigation:analytics") });
    }]
  },
  component: lazyRouteComponent($$splitComponentImporter$V, "component")
});
const $$splitComponentImporter$U = () => import("./decisions-hyxS_CfF.mjs");
const decisionsLayoutLoader = createServerFn().middleware([authMiddleware]).handler(createSsrRpc("532d11a3a313e967206b28dfb4fe70321052b586d522af5bec2717900087a9a1"));
const Route$19 = createFileRoute()({
  loader: () => decisionsLayoutLoader(),
  staticData: {
    BreadCrumbs: [({
      isLast
    }) => {
      const {
        t: t2
      } = useTranslation(["navigation"]);
      return /* @__PURE__ */ jsxRuntimeExports.jsx(BreadCrumbLink, { to: "/detection/decisions", isLast, children: t2("navigation:decisions") });
    }]
  },
  component: lazyRouteComponent($$splitComponentImporter$U, "component")
});
const $$splitComponentImporter$T = () => import("./lists-Bb1zhBpt.mjs");
const Route$18 = createFileRoute()({
  staticData: {
    BreadCrumbs: [({
      isLast
    }) => {
      const {
        t: t2
      } = useTranslation(["navigation"]);
      return /* @__PURE__ */ jsxRuntimeExports.jsx(BreadCrumbLink, { to: "/detection/lists", isLast, children: t2("navigation:lists") });
    }]
  },
  component: lazyRouteComponent($$splitComponentImporter$T, "component")
});
const $$splitComponentImporter$S = () => import("./scenarios-Bb1zhBpt.mjs");
const Route$17 = createFileRoute()({
  staticData: {
    BreadCrumbs: [({
      isLast
    }) => {
      const {
        t: t2
      } = useTranslation(["navigation"]);
      return /* @__PURE__ */ jsxRuntimeExports.jsx(BreadCrumbLink, { to: "/detection/scenarios", isLast, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t2("navigation:scenarios") }) });
    }]
  },
  component: lazyRouteComponent($$splitComponentImporter$S, "component")
});
const $$splitComponentImporter$R = () => import("./index-YJLwm1rf.mjs");
const $$splitErrorComponentImporter$c = () => import("./index-gz05v0jO.mjs");
const screeningSearchLoader = createServerFn().middleware([authMiddleware]).handler(createSsrRpc("ed369d932318dab0b42256698a8e38d6f47487bdb776a258c2db28c0893fff84"));
const Route$16 = createFileRoute()({
  staticData: {
    i18n: ["common", "screenings", "navigation"]
  },
  loader: () => screeningSearchLoader(),
  errorComponent: lazyRouteComponent($$splitErrorComponentImporter$c, "errorComponent"),
  component: lazyRouteComponent($$splitComponentImporter$R, "component")
});
const settingsIndexLoader = createServerFn().middleware([authMiddleware]).handler(createSsrRpc("00f474f606094326aac4853c55df25d8ac5a87795e7d4c1cf0744ba261b351f7"));
const Route$15 = createFileRoute()({
  loader: () => settingsIndexLoader()
});
const $$splitComponentImporter$Q = () => import("./analytics-CwppTVvB.mjs");
const Route$14 = createFileRoute()({
  component: lazyRouteComponent($$splitComponentImporter$Q, "component")
});
const $$splitComponentImporter$P = () => import("./api-keys-C_D-wD4S.mjs");
const apiKeysLoader = createServerFn().middleware([authMiddleware]).handler(createSsrRpc("9a9ceeadd477b9b71ffa23dfcfc00027094ddb47f7d18acd749a9f69fcc0b4b2"));
const Route$13 = createFileRoute()({
  loader: () => apiKeysLoader(),
  component: lazyRouteComponent($$splitComponentImporter$P, "component")
});
const DEFAULT_LIMIT = 25;
const $$splitComponentImporter$O = () => import("./audit-logs-BsetSOnE.mjs");
const pageQueryStringSchema$1 = object({
  q: string().optional().default(""),
  limit: number().optional().default(DEFAULT_LIMIT)
});
const activityFollowUpLoaderSchema = object({
  query: pageQueryStringSchema$1
});
const activityFollowUpLoader = createServerFn().middleware([authMiddleware]).validator(activityFollowUpLoaderSchema).handler(createSsrRpc("3b96000682e0b8b7a52a852b0752ff57a7956f274a561ca3c1cc9ac7a2b0fd9d"));
const Route$12 = createFileRoute()({
  validateSearch: pageQueryStringSchema$1,
  loaderDeps: ({
    search
  }) => search,
  loader: ({
    deps
  }) => activityFollowUpLoader({
    data: {
      query: deps
    }
  }),
  component: lazyRouteComponent($$splitComponentImporter$O, "component")
});
const $$splitComponentImporter$N = () => import("./inboxes-CwppTVvB.mjs");
const Route$11 = createFileRoute()({
  component: lazyRouteComponent($$splitComponentImporter$N, "component")
});
const $$splitComponentImporter$M = () => import("./ip-whitelisting-DOBSfBvp.mjs");
const ipWhitelistingLoader = createServerFn().middleware([authMiddleware]).handler(createSsrRpc("afff74a332f61da07ae725d09d5dc8755e663effc4cc7c6dd4c465b5bb29b65b"));
const Route$10 = createFileRoute()({
  loader: () => ipWhitelistingLoader(),
  component: lazyRouteComponent($$splitComponentImporter$M, "component")
});
const $$splitComponentImporter$L = () => import("./scenarios-BSNzXHQg.mjs");
const scenariosLoader$1 = createServerFn().middleware([authMiddleware]).handler(createSsrRpc("e82cb92e0a1421821b2b686ddfb11374aaf0f63a2e78c46cbf81f54b996fb5b9"));
const Route$$ = createFileRoute()({
  loader: () => scenariosLoader$1(),
  component: lazyRouteComponent($$splitComponentImporter$L, "component")
});
const $$splitComponentImporter$K = () => import("./screening-providers-Ck0aSFD1.mjs");
const screeningProvidersLoader = createServerFn().middleware([authMiddleware]).handler(createSsrRpc("75a4947011a2503d8a104142cd6ac180bd616d9a9a6fd524eeb348bf5f5c4e54"));
const Route$_ = createFileRoute()({
  loader: () => screeningProvidersLoader(),
  component: lazyRouteComponent($$splitComponentImporter$K, "component")
});
const $$splitComponentImporter$J = () => import("./tags-BsqhiTqg.mjs");
const tagsLoader = createServerFn().middleware([authMiddleware]).handler(createSsrRpc("7742794cc8be33a097adf2021e2e520283bee78d2312e4fcf4ba47a465cadff1"));
const Route$Z = createFileRoute()({
  loader: () => tagsLoader(),
  component: lazyRouteComponent($$splitComponentImporter$J, "component")
});
const $$splitComponentImporter$I = () => import("./users-DXkKEi-q.mjs");
const usersLoader = createServerFn().middleware([authMiddleware]).handler(createSsrRpc("4ee212221fd2c5a6804cf0cbc02015d124e15beabde51f40dfd55a284d3b7eba"));
const Route$Y = createFileRoute()({
  loader: () => usersLoader(),
  component: lazyRouteComponent($$splitComponentImporter$I, "component")
});
const $$splitErrorComponentImporter$b = () => import("./webhooks-DygTbGlV.mjs");
const $$splitComponentImporter$H = () => import("./webhooks-BoEo2-x-.mjs");
const webhooksLoader = createServerFn().middleware([authMiddleware]).handler(createSsrRpc("dc01a82806619825cf27ba790d89ffc7a69cc8ea1332600ea74ae86881644b5a"));
const Route$X = createFileRoute()({
  loader: () => webhooksLoader(),
  component: lazyRouteComponent($$splitComponentImporter$H, "component"),
  errorComponent: lazyRouteComponent($$splitErrorComponentImporter$b, "errorComponent")
});
const $$splitComponentImporter$G = () => import("./index-CMWxWvzp.mjs");
const Route$W = createFileRoute()({
  component: lazyRouteComponent($$splitComponentImporter$G, "component")
});
const $$splitComponentImporter$F = () => import("./_objectType-Bz3F4dyy.mjs");
const uploadLoader = createServerFn().middleware([authMiddleware]).validator((input) => input).handler(createSsrRpc("700b8869e924868568e980111bd9786fcca6b7b6bd9ab16530036194587957dc"));
const Route$V = createFileRoute()({
  staticData: {
    i18n: ["common", "upload"]
  },
  loader: ({
    params
  }) => uploadLoader({
    data: {
      params
    }
  }),
  component: lazyRouteComponent($$splitComponentImporter$F, "component")
});
const Route$U = createFileRoute()({
  beforeLoad: () => {
    throw redirect({ to: "/user-scoring/overview" });
  }
});
const $$splitComponentImporter$E = () => import("./overview-DRvAJ9kp.mjs");
const Route$T = createFileRoute()({
  staticData: {
    showCreateRulesetButton: true
  },
  component: lazyRouteComponent($$splitComponentImporter$E, "component")
});
const Route$S = createFileRoute()({
  server: {
    handlers: {
      GET: async ({ request, params }) => {
        const { authService } = initServerServices(request);
        const { tokenService } = await authService.isAuthenticated(request, {
          failureRedirect: "/sign-in"
        });
        const caseId = params["caseId"];
        invariant(caseId);
        return fetch(`${getServerEnv("MARBLE_API_URL")}${getCaseInvestigationDataDownloadEndpoint(caseId)}`, {
          headers: {
            Authorization: `Bearer ${await tokenService.getToken()}`
          }
        });
      }
    }
  }
});
const Route$R = createFileRoute()({
  server: {
    handlers: {
      GET: async ({ request, params }) => {
        const { authService } = initServerServices(request);
        const { cases: caseRepository } = await authService.isAuthenticated(request, {
          failureRedirect: "/sign-in"
        });
        const fileId = params["fileId"];
        invariant(fileId);
        return Response.json(await caseRepository.getCaseFileDownloadLink(fileId));
      }
    }
  }
});
const Route$Q = createFileRoute()({
  server: {
    handlers: {
      GET: async ({ request, params }) => {
        const { authService } = initServerServices(request);
        const { cases } = await authService.isAuthenticated(request, {
          failureRedirect: "/sign-in"
        });
        const fallback = `/cases/inboxes/${MY_INBOX_ID}`;
        try {
          const caseId = fromParams(params, "caseId");
          const nextCaseId = await cases.getNextUnassignedCaseId({ caseId });
          return new Response(null, {
            status: 302,
            headers: { Location: nextCaseId ? `/cases/${fromUUIDtoSUUID(nextCaseId)}` : fallback }
          });
        } catch {
          return new Response(null, { status: 302, headers: { Location: fallback } });
        }
      }
    }
  }
});
const Route$P = createFileRoute()({
  server: {
    handlers: {
      GET: async ({ request, params }) => {
        const { authService } = initServerServices(request);
        const { customListsRepository } = await authService.isAuthenticated(request, {
          failureRedirect: "/sign-in"
        });
        const listId = fromParams(params, "listId");
        const fileContents = await customListsRepository.downloadValues(listId);
        return new Response(fileContents, {
          headers: {
            "Content-Disposition": `attachment; filename="list-${listId}.csv"`,
            "Content-Type": "text/csv"
          }
        });
      }
    }
  }
});
const caseDetailLoader = createServerFn().middleware([authMiddleware, caseDetailMiddleware]).validator(object({
  params: record(string(), string()).optional(),
  search: object({
    fromInbox: string().optional()
  }).optional()
})).handler(createSsrRpc("8370bb112072e4230aaa7c77c7ba194d39985d69e4c9b7700b9e6ed1c051793d"));
const Route$O = createFileRoute()({
  validateSearch: object({
    fromInbox: string().optional()
  }),
  loaderDeps: ({
    search: {
      fromInbox
    }
  }) => ({
    fromInbox
  }),
  loader: ({
    params,
    deps
  }) => caseDetailLoader({
    data: {
      params,
      search: deps
    }
  })
});
const $$splitComponentImporter$D = () => import("./d-Bb1zhBpt.mjs");
const Route$N = createFileRoute()({
  component: lazyRouteComponent($$splitComponentImporter$D, "component")
});
const casesInboxesIndexLoader = createServerFn().middleware([authMiddleware]).handler(createSsrRpc("657390759bf41fc09b64c2cb7e4f77389c9d27685c05d104e7d2f738d4daaacc"));
const Route$M = createFileRoute()({
  loader: () => casesInboxesIndexLoader()
});
const $$splitComponentImporter$C = () => import("./inboxes._inboxId-Csn6EUrr.mjs");
const pageQueryStringSchema = object({
  q: string().optional().default(""),
  limit: number().optional().default(DEFAULT_CASE_PAGINATION_SIZE),
  order: _enum(["ASC", "DESC"]).optional().default("DESC")
});
const casesInboxesLoaderSchema = object({
  params: object({
    inboxId: string().transform((id) => id === MY_INBOX_ID ? id : fromSUUIDtoUUID(id))
  }),
  query: pageQueryStringSchema
});
const casesInboxesLoader = createServerFn().middleware([authMiddleware]).validator(casesInboxesLoaderSchema).handler(createSsrRpc("390480427159ce14e4675efd04896a7ca68c435f7c2dcb40fb7d839403ae4157"));
const Route$L = createFileRoute()({
  validateSearch: pageQueryStringSchema,
  loaderDeps: ({
    search
  }) => search,
  loader: ({
    params,
    deps
  }) => casesInboxesLoader({
    data: {
      params,
      query: deps
    }
  }),
  component: lazyRouteComponent($$splitComponentImporter$C, "component")
});
const B64_PREFIX = "b64.";
function toBase64Url(value) {
  const bytes = new TextEncoder().encode(value);
  let binary = "";
  for (const byte of bytes) {
    binary += String.fromCharCode(byte);
  }
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
function fromBase64Url(encoded) {
  const base64 = encoded.replace(/-/g, "+").replace(/_/g, "/");
  const padding = "=".repeat((4 - base64.length % 4) % 4);
  const binary = atob(base64 + padding);
  const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0));
  return new TextDecoder().decode(bytes);
}
function encodeClientDetailObjectIdParam(objectId) {
  if (!objectId.includes("/") && !objectId.startsWith(B64_PREFIX)) {
    return objectId;
  }
  return `${B64_PREFIX}${toBase64Url(objectId)}`;
}
function decodeClientDetailObjectIdParam(objectIdParam) {
  if (!objectIdParam.startsWith(B64_PREFIX)) {
    return objectIdParam;
  }
  return fromBase64Url(objectIdParam.slice(B64_PREFIX.length));
}
function clientDetailLinkParams(objectType, objectId) {
  return { objectType, objectId: encodeClientDetailObjectIdParam(objectId) };
}
const $$splitComponentImporter$B = () => import("./_objectType._objectId-JAvYcU74.mjs");
const $$splitErrorComponentImporter$a = () => import("./_objectType._objectId-DkTNbFGZ.mjs");
const paramsSchema$1 = object({
  objectType: string(),
  objectId: string()
});
const getDataFn = createServerFn().middleware([authMiddleware]).validator(paramsSchema$1).handler(createSsrRpc("62ebf56e36c69c039c1cc474de7eb5d971675bbdc2d6c91f69c807b1422a378b"));
const Route$K = createFileRoute()({
  loader: ({
    params: {
      objectType,
      objectId
    }
  }) => getDataFn({
    data: {
      objectType,
      objectId: decodeClientDetailObjectIdParam(objectId)
    }
  }),
  errorComponent: lazyRouteComponent($$splitErrorComponentImporter$a, "errorComponent"),
  component: lazyRouteComponent($$splitComponentImporter$B, "component")
});
const $$splitComponentImporter$A = () => import("./index-DWoUTg_y.mjs");
const searchSchema = object({
  name: string().optional(),
  description: string().optional()
});
const createConfigurationLoader = createServerFn().middleware([authMiddleware]).validator(object({
  name: string(),
  description: string().optional()
})).handler(createSsrRpc("35b91dd8aa3e517665c46541765abb8b29e3966a38ce7df8784c8847df4244f1"));
const Route$J = createFileRoute()({
  validateSearch: searchSchema,
  loaderDeps: ({
    search: {
      name,
      description
    }
  }) => ({
    name,
    description
  }),
  loader: ({
    deps
  }) => {
    if (!deps.name) {
      throw redirect({
        to: "/continuous-screening/configurations"
      });
    }
    return createConfigurationLoader({
      data: {
        name: deps.name,
        description: deps.description
      }
    });
  },
  staticData: {
    i18n: ["continuousScreening"],
    BreadCrumbs: [(_) => {
      const {
        t: t2
      } = useTranslation(["continuousScreening"]);
      const {
        name
      } = Route$J.useLoaderData();
      return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t2("continuousScreening:creation.title", {
        name
      }) });
    }]
  },
  component: lazyRouteComponent($$splitComponentImporter$A, "component")
});
const $$splitComponentImporter$z = () => import("./index-BTU5dmpx.mjs");
const analyticsIndexLoader = createServerFn().middleware([authMiddleware]).handler(createSsrRpc("1dda07efb7eddbc1a3c062ed5bae0127a4b92d7ed30c6c541cf160b40c6cd9ce"));
const Route$I = createFileRoute()({
  loader: () => analyticsIndexLoader(),
  component: lazyRouteComponent($$splitComponentImporter$z, "component")
});
const $$splitComponentImporter$y = () => import("./_scenarioId-DE3EBSMr.mjs");
const $$splitErrorComponentImporter$9 = () => import("./_scenarioId-ylW8qQjb.mjs");
const paramsSchema = object({
  scenarioId: string().transform((id) => fromSUUIDtoUUID(id))
});
const searchParamsSchema = object({
  q: string().default(() => btoa(JSON.stringify({
    range: {
      type: "dynamic",
      fromNow: "-P30D"
    }
  })))
});
const analyticsLoader = createServerFn().middleware([authMiddleware]).validator(paramsSchema).handler(createSsrRpc("05bb58e2b97b1cc2316fd5a122fc1baf8ed2ef60d1a52ae56a4f4402675f5a55"));
const Route$H = createFileRoute()({
  validateSearch: searchParamsSchema,
  loader: ({
    params
  }) => analyticsLoader({
    data: params
  }),
  staleTime: Infinity,
  errorComponent: lazyRouteComponent($$splitErrorComponentImporter$9, "errorComponent"),
  component: lazyRouteComponent($$splitComponentImporter$y, "component")
});
function getDecisionFilters(filters) {
  const dateRange = filters.dateRange;
  return {
    outcomeAndReviewStatus: filters.outcomeAndReviewStatus,
    triggerObject: filters.triggerObject?.length ? filters.triggerObject : void 0,
    triggerObjectId: filters.triggerObjectId,
    // Keep URL, form, and pagination representations equivalent.
    dateRange: dateRange?.type === "static" ? {
      type: "static",
      startDate: dateRange.startDate || void 0,
      endDate: dateRange.endDate || void 0
    } : dateRange ?? unboundedDateRange,
    pivotValue: filters.pivotValue,
    scenarioId: filters.scenarioId?.length ? filters.scenarioId : void 0,
    scheduledExecutionId: filters.scheduledExecutionId?.length ? filters.scheduledExecutionId : void 0,
    caseInboxId: filters.caseInboxId?.length ? filters.caseInboxId : void 0,
    hasCase: filters.hasCase
  };
}
const emptyDecisionFilters = {
  dateRange: null,
  hasCase: null,
  outcomeAndReviewStatus: null,
  pivotValue: null,
  scenarioId: [],
  scheduledExecutionId: [],
  caseInboxId: [],
  triggerObject: [],
  triggerObjectId: null
};
function toSubmittedDecisionFilters(formValues) {
  return getDecisionFilters({
    ...formValues,
    outcomeAndReviewStatus: formValues.outcomeAndReviewStatus ?? void 0,
    dateRange: formValues.dateRange ?? unboundedDateRange,
    hasCase: formValues.hasCase ?? void 0,
    pivotValue: formValues.pivotValue ?? void 0,
    triggerObjectId: formValues.triggerObjectId ?? void 0
  });
}
function adaptFilterValues(filterValues) {
  let dateRange = null;
  if (filterValues.dateRange?.type === "static") {
    dateRange = {
      type: "static",
      startDate: filterValues.dateRange.startDate ?? "",
      endDate: filterValues.dateRange.endDate ?? ""
    };
  } else if (filterValues.dateRange?.type === "dynamic" && filterValues.dateRange.fromNow) {
    dateRange = { type: "dynamic", fromNow: filterValues.dateRange.fromNow };
  }
  return {
    dateRange,
    hasCase: filterValues.hasCase ?? null,
    outcomeAndReviewStatus: filterValues.outcomeAndReviewStatus ?? null,
    pivotValue: filterValues.pivotValue ?? null,
    scenarioId: filterValues.scenarioId ?? [],
    scheduledExecutionId: filterValues.scheduledExecutionId ?? [],
    caseInboxId: filterValues.caseInboxId ?? [],
    triggerObject: filterValues.triggerObject ?? [],
    triggerObjectId: filterValues.triggerObjectId ?? null
  };
}
const filtersI18n = ["filters"];
function adaptStaticDateRangeFilterType({ from, to }) {
  const startDate = from?.toISOString() ?? "";
  const endDate = to ? add$3(to, { days: 1 }).toISOString() : "";
  return {
    type: "static",
    startDate,
    endDate
  };
}
function adaptDateRange({ startDate, endDate }) {
  const from = startDate ? new Date(startDate) : void 0;
  const to = endDate ? sub(new Date(endDate), { days: 1 }) : void 0;
  return from || to ? { from, to } : void 0;
}
const DateRangeFilterContext = createSimpleContext$1("DateRangeFilterContext");
const useDateRangeFilterContext = DateRangeFilterContext.useValue;
function DateRangeFilterRoot({
  dateRangeFilter,
  setDateRangeFilter,
  children,
  className
}) {
  const calendarSelected = dateRangeFilter?.type === "static" ? adaptDateRange(dateRangeFilter) : void 0;
  const onCalendarSelect = reactExports.useCallback(
    (range) => {
      setDateRangeFilter(adaptStaticDateRangeFilterType(range ?? { from: void 0 }));
    },
    [setDateRangeFilter]
  );
  const fromNow = dateRangeFilter?.type === "dynamic" ? dateRangeFilter.fromNow : void 0;
  const onFromNowSelect = reactExports.useCallback(
    (fromNow2) => {
      setDateRangeFilter({
        type: "dynamic",
        fromNow: fromNow2
      });
    },
    [setDateRangeFilter]
  );
  const value = {
    fromNow,
    calendarSelected,
    onCalendarSelect,
    onFromNowSelect
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(DateRangeFilterContext.Provider, { value, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className, children }) });
}
const last30DaysDuration = Temporal.Duration.from({ days: -30 }).toString();
const fromNowDurations = [
  Temporal.Duration.from({ days: -7 }).toString(),
  Temporal.Duration.from({ days: -14 }).toString(),
  last30DaysDuration,
  Temporal.Duration.from({ months: -3 }).toString(),
  Temporal.Duration.from({ months: -6 }).toString(),
  Temporal.Duration.from({ months: -12 }).toString()
];
function isSameFromNow(fromNow, duration) {
  if (!fromNow) return false;
  if (fromNow === duration) return true;
  try {
    return Temporal.Duration.from(fromNow).toString() === Temporal.Duration.from(duration).toString();
  } catch {
    return false;
  }
}
function DateRangeFilterFromNowPicker({ title, className }) {
  const language = useFormatLanguage();
  const { onFromNowSelect } = useDateRangeFilterContext();
  const { fromNow } = useDateRangeFilterContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn$1("flex flex-col gap-md p-md", className), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-grey-primary text-s font-normal first-letter:capitalize", children: title }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-xs", children: fromNowDurations.map((duration) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: () => {
          onFromNowSelect(duration);
        },
        className: cn$1(
          "text-s bg-surface-card text-grey-primary border-grey-white dark:border-grey-border flex h-10 items-center rounded-sm border p-sm outline-hidden",
          "hover:bg-purple-background-light active:bg-purple-background hover:text-purple-primary dark:hover:bg-grey-background-light dark:hover:text-purple-hover",
          isSameFromNow(fromNow, duration) && "bg-purple-background border-purple-primary text-purple-primary dark:bg-grey-background-light dark:text-purple-hover"
        ),
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("time", { dateTime: duration, children: formatDuration(duration, language) })
      },
      duration
    )) })
  ] });
}
function DateRangeFilterCalendar({ className }) {
  const language = useFormatLanguage();
  const { calendarSelected, onCalendarSelect } = useDateRangeFilterContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn$1("p-md", className), children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    Calendar,
    {
      mode: "range",
      selected: calendarSelected,
      onSelect: onCalendarSelect,
      defaultMonth: calendarSelected?.from,
      locale: getDateFnsLocale(language)
    }
  ) });
}
function DateRangeFilterSummary({ className }) {
  const language = useFormatLanguage();
  const { t: t2 } = useTranslation(filtersI18n);
  const { fromNow, calendarSelected } = useDateRangeFilterContext();
  if (fromNow) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn$1("m-md flex h-10 w-full items-center justify-center", className), children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "time",
      {
        className: "text-s text-grey-primary flex h-10 items-center rounded-sm p-sm outline-hidden",
        dateTime: fromNow,
        children: t2("filters:up_to", {
          duration: formatDuration(fromNow, language)
        })
      }
    ) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn$1("grid grid-cols-[1fr_max-content_1fr] gap-xs p-md", className), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(FormatStaticDate, { className: "justify-self-end", date: calendarSelected?.from }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-l self-center", children: "→" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FormatStaticDate, { date: calendarSelected?.to })
  ] });
}
function FormatStaticDate({ date, className }) {
  const formatDateTime = useFormatDateTime();
  const dateTime = typeof date === "string" ? date : date?.toDateString();
  const formattedDate = date ? formatDateTime(date, { dateStyle: "short" }) : "--/--/----";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "time",
    {
      dateTime,
      className: cn$1(
        "border-grey-border h-10 w-fit rounded-sm border p-sm",
        date ? "text-grey-primary" : "text-grey-secondary",
        className
      ),
      children: formattedDate
    }
  );
}
const DateRangeFilter = {
  Root: DateRangeFilterRoot,
  FromNowPicker: DateRangeFilterFromNowPicker,
  Calendar: DateRangeFilterCalendar,
  Summary: DateRangeFilterSummary
};
const $$splitComponentImporter$x = () => import("./index-Qm6h6Qh5.mjs");
const $$splitErrorComponentImporter$8 = () => import("./index-CLi5nruT.mjs");
const DEFAULT_DECISIONS_DATE_RANGE = {
  type: "dynamic",
  fromNow: last30DaysDuration
};
const decisionsListQueryParamsSchema = intersection(decisionFiltersSchema, paginationSchema);
function hasOtherDecisionFilters(params) {
  const filters = getDecisionFilters(params);
  return filters.outcomeAndReviewStatus !== void 0 || (filters.triggerObject?.length ?? 0) > 0 || filters.triggerObjectId !== void 0 || filters.pivotValue !== void 0 || (filters.scenarioId?.length ?? 0) > 0 || (filters.scheduledExecutionId?.length ?? 0) > 0 || (filters.caseInboxId?.length ?? 0) > 0 || filters.hasCase !== void 0;
}
const buildQueryParams = (filters, paginationParams) => {
  return {
    ...getDecisionFilters(filters),
    offsetId: paginationParams?.offsetId,
    next: paginationParams?.next,
    previous: paginationParams?.previous,
    order: paginationParams?.order,
    sorting: paginationParams?.sorting,
    limit: paginationParams?.limit
  };
};
const decisionsPageLoader = createServerFn({
  method: "GET"
}).middleware([authMiddleware]).validator(decisionsListQueryParamsSchema).handler(createSsrRpc("fdd9ec166d963a24c1838235b18cc526be6a43078b103c76926e303b080dddf6"));
const listDecisionsLoader = createServerFn({
  method: "GET"
}).middleware([authMiddleware]).validator(decisionsListQueryParamsSchema).handler(createSsrRpc("938d5b05976c0a602b05a12b68c2acb76503955fb38897430b7b9f1d21bbda66"));
const Route$G = createFileRoute()({
  validateSearch: decisionsListQueryParamsSchema,
  beforeLoad: ({
    search
  }) => {
    if (search.dateRange || hasOtherDecisionFilters(search)) {
      return;
    }
    throw redirect({
      to: "/detection/decisions",
      search: {
        ...search,
        dateRange: DEFAULT_DECISIONS_DATE_RANGE
      },
      replace: true
    });
  },
  loaderDeps: ({
    search
  }) => search,
  loader: ({
    deps
  }) => {
    const decisionsPromise = listDecisionsLoader({
      data: deps
    });
    return decisionsPageLoader({
      data: deps
    }).then((page) => ({
      ...page,
      decisionsPromise
    }));
  },
  errorComponent: lazyRouteComponent($$splitErrorComponentImporter$8, "errorComponent"),
  component: lazyRouteComponent($$splitComponentImporter$x, "component")
});
const statusIconMap = {
  pending: "status-pending",
  investigating: "search",
  closed: "resolved",
  waiting_for_action: "waiting_for_action",
  snoozed: "status_snoozed"
};
const badgeTextVariants = cva("", {
  variants: {
    status: {
      pending: "text-yellow-primary",
      investigating: "text-purple-primary",
      closed: "text-green-primary",
      waiting_for_action: "text-orange-primary",
      snoozed: "text-grey-secondary"
    }
  }
});
const badgeBackgroundVariants = cva("", {
  variants: {
    status: {
      pending: "bg-yellow-background-light",
      investigating: "bg-purple-background-light",
      closed: "bg-green-background-light",
      waiting_for_action: "bg-orange-background-light",
      snoozed: "bg-grey-background-light"
    }
  }
});
const badgeBorderVariants = cva("border", {
  variants: {
    status: {
      pending: "border-yellow-primary",
      investigating: "border-purple-primary",
      closed: "border-green-primary",
      waiting_for_action: "border-orange-primary",
      snoozed: "border-grey-secondary"
    }
  }
});
const outcomeVariants = cva("border rounded-full px-sm h-6 flex items-center", {
  variants: {
    outcome: {
      false_positive: "text-green-secondary border-green-secondary",
      valuable_alert: "text-orange-primary border-orange-primary",
      confirmed_risk: "text-red-primary border-red-primary"
    }
  }
});
const CaseStatusBadgeV2 = ({ status, outcome, variant }) => {
  const { t: t2 } = useTranslation(["cases"]);
  const resolvedOutcome = outcome ?? "unset";
  if (variant === "text-only") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn$1(badgeTextVariants({ status }), "text-small font-medium whitespace-nowrap"), children: t2(`cases:case.status.${status}`) });
  }
  if (variant === "full") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: cn$1(badgeTextVariants({ status }), "inline-flex items-center gap-sm text-small whitespace-nowrap"),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-xs shrink-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: statusIconMap[status], className: "size-5 shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: t2(`cases:case.status.${status}`) })
          ] }),
          resolvedOutcome !== "unset" ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn$1(outcomeVariants({ outcome: resolvedOutcome }), "shrink-0 whitespace-nowrap"), children: t2(`cases:case.outcome.${resolvedOutcome}`) }) : null
        ]
      }
    );
  }
  if (variant === "icon-only") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip.Default, { content: t2(`cases:case.status.${status}`), children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        role: "img",
        "aria-label": t2(`cases:case.status.${status}`),
        className: cn$1(
          badgeBackgroundVariants({ status }),
          badgeTextVariants({ status }),
          "flex items-center justify-center size-8 rounded-sm"
        ),
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: statusIconMap[status], className: "size-5 shrink-0" })
      }
    ) });
  }
  if (variant === "semi-full") {
    if (status !== "closed") {
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: cn$1(
            badgeTextVariants({ status }),
            badgeBorderVariants({ status }),
            "inline-flex items-center gap-xs h-6 rounded-full px-sm text-small whitespace-nowrap"
          ),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: statusIconMap[status], className: "size-4 shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "shrink-0 whitespace-nowrap", children: t2(`cases:case.status.${status}`) })
          ]
        }
      );
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-xs text-small whitespace-nowrap", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: statusIconMap[status], className: cn$1(badgeTextVariants({ status }), "size-5 shrink-0") }),
      resolvedOutcome !== "unset" ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn$1(outcomeVariants({ outcome: resolvedOutcome }), "shrink-0 whitespace-nowrap"), children: t2(`cases:case.outcome.${resolvedOutcome}`) }) : null
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: cn$1(
        badgeTextVariants({ status }),
        badgeBorderVariants({ status }),
        "flex items-center gap-sm h-10 rounded-sm px-sm text-default font-medium whitespace-nowrap"
      ),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: statusIconMap[status], className: "size-5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t2(`cases:case.status.${status}`) })
      ]
    }
  );
};
function adaptUnifiedEvaluationError(error) {
  return {
    error: error.error,
    message: error.message,
    path: error.path ?? error.argumentIndex?.toString() ?? error.argumentName
  };
}
function getErrorsForChild(errors, indexOrKey) {
  return t$e(errors, n$7((err) => {
    if (err.path === void 0) return false;
    return err.path === indexOrKey || err.path.startsWith(`${indexOrKey}.`);
  }), t$9((err) => {
    let fieldPath = err.path;
    if (fieldPath != void 0) {
      if (fieldPath === indexOrKey) {
        fieldPath = void 0;
      } else if (fieldPath?.toString().startsWith(`${indexOrKey}.`)) {
        fieldPath = fieldPath.replace(new RegExp(`^${indexOrKey}\\.`), "");
      }
    }
    return {
      ...err,
      path: fieldPath
    };
  }));
}
function generateFlatEvaluation(node, evaluation, relatedIds = []) {
  const isOperandNode = isKnownOperandAstNode(node);
  const errors = t$9(evaluation.errors, adaptUnifiedEvaluationError);
  const currentRelatedId = isOperandNode ? [node.id] : [...relatedIds, node.id];
  const childrenEvaluations = node.children.flatMap((childNode, i) => {
    const childEvaluation = evaluation.children[i];
    if (!childEvaluation) return [];
    const childErrorsFromParent = getErrorsForChild(errors, i.toString());
    const childEvaluationWithParentError = {
      ...childEvaluation,
      errors: [...childEvaluation.errors, ...childErrorsFromParent]
    };
    return generateFlatEvaluation(childNode, childEvaluationWithParentError, currentRelatedId);
  });
  const namedChildrenEvaluations = t$c(node.namedChildren).flatMap(([key, childNode]) => {
    const childEvaluation = evaluation.namedChildren[key];
    if (!childEvaluation) return [];
    const childErrorsFromParent = getErrorsForChild(errors, key);
    const childEvaluationWithParentError = {
      ...childEvaluation,
      errors: [...childEvaluation.errors, ...childErrorsFromParent]
    };
    return generateFlatEvaluation(childNode, childEvaluationWithParentError, currentRelatedId);
  });
  const hasChildError = childrenEvaluations.filter((e2) => e2.errors.length > 0).length > 0 || namedChildrenEvaluations.filter((e2) => e2.errors.length > 0).length > 0;
  const currentErrors = [...errors.filter((err) => !err.path), ...hasChildError && isLeafOperandAstNode(node) ? [{
    error: "FUNCTION_ERROR",
    message: "function has error"
  }] : []];
  const currentNodeEvaluation = {
    returnValue: evaluation.returnValue,
    errors: currentErrors,
    skipped: evaluation.skipped,
    nodeId: node.id,
    relatedIds: [...relatedIds, node.id]
  };
  return [currentNodeEvaluation, ...childrenEvaluations, ...namedChildrenEvaluations];
}
function buildPayloadAccessorsFromDataModel(dataModel, triggerObjectType) {
  const table = dataModel.find((t2) => t2.name === triggerObjectType);
  if (!table) return [];
  return table.fields.map((f) => NewPayloadAstNode(f.name));
}
function buildDatabaseAccessorsFromDataModel(dataModel, triggerObjectType) {
  const triggerTable = dataModel.find((t2) => t2.name === triggerObjectType);
  if (!triggerTable) return [];
  const accessors = [];
  function recurse(path, linksToSingle, visited) {
    for (const link of linksToSingle) {
      const linkedTable = dataModel.find((t2) => t2.name === link.parentTableName);
      if (!linkedTable || visited.includes(linkedTable.name)) continue;
      const pathForLink = [...path, link.name];
      for (const field of linkedTable.fields) {
        if (field.hidden) continue;
        accessors.push(NewDatabaseAccessAstNode({
          tableName: triggerObjectType,
          fieldName: field.name,
          path: pathForLink
        }));
      }
      recurse(pathForLink, linkedTable.linksToSingle, [...visited, linkedTable.name]);
    }
  }
  recurse([], triggerTable.linksToSingle, [triggerTable.name]);
  return accessors;
}
const archiveScenarioFn = createServerFn({
  method: "POST"
}).middleware([authMiddleware]).validator(archiveScenarioPayloadSchema).handler(createSsrRpc("2d7100b40687945ab2456f35825bd6c33aaf217a51654dc55ee46af8bd1d928b"));
const copyScenarioFn = createServerFn({
  method: "POST"
}).middleware([authMiddleware]).validator(copyScenarioPayloadSchema).handler(createSsrRpc("9c16c172bca160e3f7fc361739140c28a4097f84a9be3fdb80c65789479f4796"));
const createScenarioFn = createServerFn({
  method: "POST"
}).middleware([authMiddleware]).validator(createScenarioPayloadSchema).handler(createSsrRpc("f5641a95755d85fbbf752d30ca29b5a241cd44bb012fada0dbea71e1fe4dc7de"));
const unarchiveScenarioFn = createServerFn({
  method: "POST"
}).middleware([authMiddleware]).validator(unarchiveScenarioPayloadSchema).handler(createSsrRpc("07f381cd947e2ce40d42defed41552acd2e4dc177cdb37795e212a29db386ba7"));
const updateScenarioFn = createServerFn({
  method: "POST"
}).middleware([authMiddleware]).validator(updateScenarioPayloadSchema).handler(createSsrRpc("edda937b3a03ff8cb495aeb66e4a69707d30c5b9c271d98d9fd6dabac503df33"));
const toggleScenarioDeduplicationFn = createServerFn({
  method: "POST"
}).middleware([authMiddleware]).validator(toggleScenarioDeduplicationPayloadSchema).handler(createSsrRpc("83e7a488d77d1dcef5b179cb17b141dd1da576789512e9c0f6e824b43ae602d7"));
const getRuleDescriptionFn = createServerFn({
  method: "POST"
}).middleware([authMiddleware]).validator(object({
  scenarioId: string(),
  astNode: unknown()
})).handler(createSsrRpc("769522befd24b072c6865643d892e7ef5f97ce5a3401a8595862240f4cb9111f"));
const getBuilderOptionsFn = createServerFn({
  method: "GET"
}).middleware([authMiddleware]).validator(object({
  scenarioId: string()
})).handler(createSsrRpc("97aa765bfb2425b7c56f6b542173eb05eeb7bd8739a091781ebe74dfa31d9861"));
const validateAstFn = createServerFn({
  method: "POST"
}).middleware([authMiddleware]).validator(object({
  scenarioId: string(),
  node: unknown(),
  expectedReturnType: string().optional()
})).handler(createSsrRpc("a3f82d4acb2686ffe2e5b001f8c0c3edc2466641ccea4fb25f9ad76c4d0fcc41"));
const generateAstFn = createServerFn({
  method: "POST"
}).middleware([authMiddleware]).validator(generateRuleInputSchema).handler(createSsrRpc("3face8d1e66d149b4aab1655e42cd59c7efb3b66972849e778b5022a4a3f4ad7"));
const getRuleCatalogFn = createServerFn({
  method: "GET"
}).middleware([authMiddleware]).handler(createSsrRpc("ae8661cd94a90c76da4a26bc4ea6f72914e09f4428f6dc8f3dd438a9720ae4c0"));
const saveTriggerPayloadSchema = object({
  iterationId: string(),
  schedule: string(),
  astNode: any()
});
const saveTriggerFn = createServerFn({
  method: "POST"
}).middleware([authMiddleware]).validator(saveTriggerPayloadSchema).handler(createSsrRpc("2d8e3f709e51112f7756b3d1ab577bb35b7e3324c07eaf86864aa59ebbfebfeb"));
const activateIterationFn = createServerFn({
  method: "POST"
}).middleware([authMiddleware]).validator(activateIterationPayloadSchema.and(object({
  scenarioId: string(),
  iterationId: string()
}))).handler(createSsrRpc("7de8f78e734f6d311b0794592f0fe7afa5c18a13e3c5015554d865d34486a594"));
const commitIterationFn = createServerFn({
  method: "POST"
}).middleware([authMiddleware]).validator(commitIterationPayloadSchema.and(object({
  scenarioId: string(),
  iterationId: string()
}))).handler(createSsrRpc("4db6bfc45b50793333de3ae326dcbab4aec61b81c44aeb67d54a0544c0d06df2"));
const createDraftIterationFn = createServerFn({
  method: "POST"
}).middleware([authMiddleware]).validator(object({
  scenarioId: string(),
  iterationId: string()
})).handler(createSsrRpc("7d98973cbaea0952d4593fcae71ef17fff2105f0f55b0362b6496a5a00f21399"));
const deactivateIterationFn = createServerFn({
  method: "POST"
}).middleware([authMiddleware]).validator(deactivateIterationPayloadSchema.and(object({
  scenarioId: string(),
  iterationId: string()
}))).handler(createSsrRpc("550320d30c99ef1dc46ef4d34361dd96ea62195dd39befd7f0c642c2e7a0537d"));
const prepareIterationFn = createServerFn({
  method: "POST"
}).middleware([authMiddleware]).validator(prepareIterationPayloadSchema.and(object({
  scenarioId: string(),
  iterationId: string()
}))).handler(createSsrRpc("2ef10e921f72f4e8e31b7e4b2ec61553aa85ceb906bfa1c87c2e3d46dacf4a1f"));
const getPublicationPreparationStatusFn = createServerFn({
  method: "GET"
}).middleware([authMiddleware]).validator(object({
  scenarioId: string(),
  iterationId: string()
})).handler(createSsrRpc("3cdce8234c75f1241e5f5a9a3bc4efa972d6329e9c37991994653b6488e308e7"));
const getRuleSnoozeFn = createServerFn({
  method: "GET"
}).middleware([authMiddleware]).validator(object({
  iterationId: string()
})).handler(createSsrRpc("b649b4f8bcb365c4a1d6fba3e15603506e752a6c72da13f32da492c5d9391cf9"));
const createRuleFn = createServerFn({
  method: "POST"
}).middleware([authMiddleware]).validator(object({
  scenarioId: string(),
  iterationId: string()
})).handler(createSsrRpc("7a5cf6ff5d57a37f56f723fe4f0b562bb341aec5227b7fc6ce6ac710588c3bfb"));
const deleteRuleFn = createServerFn({
  method: "POST"
}).middleware([authMiddleware]).validator(deleteRulePayloadSchema.and(object({
  scenarioId: string(),
  iterationId: string()
}))).handler(createSsrRpc("bcd60fdf1b642255312a33581a43354f2ff1a39b21a48272ce313b562293ed46"));
const duplicateRuleFn = createServerFn({
  method: "POST"
}).middleware([authMiddleware]).validator(duplicateRulePayloadSchema.and(object({
  scenarioId: string(),
  iterationId: string()
}))).handler(createSsrRpc("556d8a7680f56e413a90f30867650c09c290af8cf9bcb9bff6b92a9f3e7eeb2d"));
const createScreeningRuleFn = createServerFn({
  method: "POST"
}).middleware([authMiddleware]).validator(object({
  scenarioId: string(),
  iterationId: string()
})).handler(createSsrRpc("4c9de4d330ace79a796e7585a6df95ddb3068812db24b1f202bd377cf0ce6664"));
const deleteScreeningRuleFn = createServerFn({
  method: "POST"
}).middleware([authMiddleware]).validator(object({
  scenarioId: string(),
  iterationId: string(),
  screeningId: string()
})).handler(createSsrRpc("3c7b9ca97df43ba2c4ebde6883b549e1ae7f45aa8843c816b74de7a5fddb4126"));
const cancelTestRunFn = createServerFn({
  method: "POST"
}).middleware([authMiddleware]).validator(object({
  scenarioId: string(),
  testRunId: string()
})).handler(createSsrRpc("dae75fa64d986db72e5cabd904f22228db84e30d97fed369b04d3ff497ccdc02"));
const createTestRunFn = createServerFn({
  method: "POST"
}).middleware([authMiddleware]).validator(createTestRunPayloadSchema.and(object({
  scenarioId: string()
}))).handler(createSsrRpc("88c9ce0e9be42b3075dec429a85b9229e9ed0fd7288600c5bacafbcb50e93ae7"));
const getIterationRulesFn = createServerFn({
  method: "GET"
}).middleware([authMiddleware]).validator(object({
  iterationId: string()
})).handler(createSsrRpc("0609578262a15348986f5154cf9f83165e3b77426ebd476d8dbb607ad42ca5d5"));
const getIterationRuleFn = createServerFn({
  method: "GET"
}).middleware([authMiddleware]).validator(object({
  ruleId: string()
})).handler(createSsrRpc("a81c48bc85c5208715b1ec58392c10a1ba8978e0e1bffe47b2426ae602ca368f"));
const scenarioI18n = ["common", "scenarios"];
const $$splitComponentImporter$w = () => import("./_decisionId-BNaJFoSW.mjs");
const $$splitErrorComponentImporter$7 = () => import("./_decisionId-DLXUWKHM.mjs");
const decisionLoader = createServerFn().middleware([authMiddleware]).validator((input) => input).handler(createSsrRpc("190e537a41b695e9074030a843c24f85222ff378bd328c6084ee189e8cf0869f"));
const Route$F = createFileRoute()({
  loader: ({
    params
  }) => decisionLoader({
    data: {
      params
    }
  }),
  staticData: {
    BreadCrumbs: [({
      isLast
    }) => {
      const {
        t: t2
      } = useTranslation(["decisions"]);
      const {
        decision
      } = Route$F.useLoaderData();
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-md", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(BreadCrumbLink, { isLast, to: "/detection/decisions/$decisionId", params: {
          decisionId: fromUUIDtoSUUID(decision.id)
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "line-clamp-1 text-start", children: t2("decisions:decision") }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CopyToClipboardButton, { toCopy: decision.id, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-s line-clamp-1 max-w-40 font-normal", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: "ID" }),
          " ",
          decision.id
        ] }) })
      ] });
    }]
  },
  errorComponent: lazyRouteComponent($$splitErrorComponentImporter$7, "errorComponent"),
  component: lazyRouteComponent($$splitComponentImporter$w, "component")
});
const $$splitComponentImporter$v = () => import("./index-DKymi0Dn.mjs");
const $$splitErrorComponentImporter$6 = () => import("./index-BrnN85Bg.mjs");
const listsLoader = createServerFn().middleware([authMiddleware]).handler(createSsrRpc("ef0179542ce4f92a63bf12d039c8aac33a5d8d216e4258d8baa6b6d4cc611eed"));
const Route$E = createFileRoute()({
  loader: () => listsLoader(),
  errorComponent: lazyRouteComponent($$splitErrorComponentImporter$6, "errorComponent"),
  component: lazyRouteComponent($$splitComponentImporter$v, "component")
});
const $$splitComponentImporter$u = () => import("./_listId-BA05P1Gd.mjs");
const $$splitErrorComponentImporter$5 = () => import("./_listId-BUizQkKU.mjs");
const listLoader = createServerFn().middleware([authMiddleware]).validator((input) => input).handler(createSsrRpc("52068080343d82e992504e273fbeb1c82e4164eb84fe791f5411bab1c4a385dd"));
const Route$D = createFileRoute()({
  loader: ({
    params
  }) => listLoader({
    data: {
      params
    }
  }),
  staticData: {
    BreadCrumbs: [({
      isLast
    }) => {
      const {
        customList
      } = Route$D.useLoaderData();
      return /* @__PURE__ */ jsxRuntimeExports.jsx(BreadCrumbLink, { to: "/detection/lists/$listId", params: {
        listId: fromUUIDtoSUUID(customList.id)
      }, isLast, children: customList.name });
    }]
  },
  errorComponent: lazyRouteComponent($$splitErrorComponentImporter$5, "errorComponent"),
  component: lazyRouteComponent($$splitComponentImporter$u, "component")
});
const $$splitComponentImporter$t = () => import("./index-BzacWraL.mjs");
const $$splitErrorComponentImporter$4 = () => import("./index-853-owf0.mjs");
const scenariosLoader = createServerFn().middleware([authMiddleware]).handler(createSsrRpc("0acb523b5f97ff683b231261a0120f2ad490d294ede3b29b519c3173ddc98731"));
const Route$C = createFileRoute()({
  loader: () => scenariosLoader(),
  errorComponent: lazyRouteComponent($$splitErrorComponentImporter$4, "errorComponent"),
  component: lazyRouteComponent($$splitComponentImporter$t, "component")
});
function TriggerObjectTag({ children }) {
  const { t: t2 } = useTranslation(["scenarios"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Tag, { size: "small", color: "grey", className: "flex items-center gap-sm", children: [
    children,
    /* @__PURE__ */ jsxRuntimeExports.jsxs(TooltipV2.Tooltip, { delayDuration: 0, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TooltipV2.TooltipTrigger, { tabIndex: -1, className: "cursor-pointer transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "tip", className: "size-3.5" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        TooltipV2.TooltipContent,
        {
          side: "bottom",
          align: "start",
          sideOffset: 8,
          className: "bg-surface-card border-grey-border flex w-fit max-w-80 rounded-sm border p-sm z-50 shadow-md",
          children: t2("scenarios:trigger_object.description")
        }
      )
    ] })
  ] });
}
const $$splitComponentImporter$s = () => import("./_scenarioId-Bb1zhBpt.mjs");
const $$splitErrorComponentImporter$3 = () => import("./_scenarioId-C0N8DAqO.mjs");
const scenarioData = createServerFn().middleware([authMiddleware]).validator((input) => input).handler(createSsrRpc("de490983d4997d232b884399c941d6395a6a47d83f1d2df248b24ed6ba673987"));
const Route$B = createFileRoute()({
  beforeLoad: ({
    params
  }) => scenarioData({
    data: {
      params
    }
  }),
  staticData: {
    BreadCrumbs: [({
      isLast
    }) => {
      const {
        currentScenario
      } = Route$B.useRouteContext();
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-row items-center gap-md", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(BreadCrumbLink, { isLast, to: "/detection/scenarios/$scenarioId", params: {
          scenarioId: fromUUIDtoSUUID(currentScenario.id)
        }, children: currentScenario.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TriggerObjectTag, { children: currentScenario.triggerObjectType })
      ] });
    }]
  },
  errorComponent: lazyRouteComponent($$splitErrorComponentImporter$3, "errorComponent"),
  component: lazyRouteComponent($$splitComponentImporter$s, "component")
});
const $$splitComponentImporter$r = () => import("./filters-6r9-bT4Q.mjs");
const filtersLoader = createServerFn().middleware([authMiddleware]).handler(createSsrRpc("4d86840ff3e9c7863c69d2b486dfb6807b55958410e70bdf312d7b4e94cd18f0"));
const Route$A = createFileRoute()({
  loader: () => filtersLoader(),
  component: lazyRouteComponent($$splitComponentImporter$r, "component")
});
const $$splitComponentImporter$q = () => import("./index-CbISqffM.mjs");
const inboxesLoader = createServerFn().middleware([authMiddleware]).handler(createSsrRpc("17fe49fd9649a743daee9b2db7caa3d15a925dc14b9480bad78ab09d42f3167f"));
const Route$z = createFileRoute()({
  loader: () => inboxesLoader(),
  component: lazyRouteComponent($$splitComponentImporter$q, "component")
});
const $$splitComponentImporter$p = () => import("./_inboxId-K-QwLhV3.mjs");
const inboxDetailLoader = createServerFn().middleware([authMiddleware]).validator((input) => input).handler(createSsrRpc("8a7664c76b372de8d60a46557e4b07a41388d73db5069a7aab81083cfa29607f"));
const Route$y = createFileRoute()({
  loader: ({
    params
  }) => inboxDetailLoader({
    data: {
      params
    }
  }),
  component: lazyRouteComponent($$splitComponentImporter$p, "component")
});
const $$splitComponentImporter$o = () => import("./webhooks_._webhookId-CfirKI_d.mjs");
const webhookDetailLoader = createServerFn().middleware([authMiddleware]).validator((input) => input).handler(createSsrRpc("536c5d483d909feb789f3e636c7a91e9cadfdd2c714c28b79a89a7bb02ac6d13"));
const Route$x = createFileRoute()({
  staticData: {
    hideTabs: true,
    BreadCrumbs: [({
      isLast: _
    }) => {
      const {
        t: t2
      } = useTranslation(["settings"]);
      return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-s font-bold", children: t2("settings:webhook_details") });
    }]
  },
  loader: ({
    params
  }) => webhookDetailLoader({
    data: {
      params
    }
  }),
  component: lazyRouteComponent($$splitComponentImporter$o, "component")
});
const $$splitComponentImporter$n = () => import("./_recordType._version-Bp0Zn61F.mjs");
const scoringRulesetLoader = createServerFn().middleware([authMiddleware]).validator((input) => input).handler(createSsrRpc("18da7f26386e7ebb5a2edc840704787f306fb5982648e912fd5a034dc3e9f640"));
const Route$w = createFileRoute()({
  loader: ({
    params
  }) => scoringRulesetLoader({
    data: {
      params
    }
  }),
  component: lazyRouteComponent($$splitComponentImporter$n, "component")
});
const Route$v = createFileRoute()({
  server: {
    handlers: {
      GET: async ({ request, params }) => {
        const { authService } = initServerServices(request);
        const { apiClient } = await authService.isAuthenticated(request, {
          failureRedirect: "/sign-in"
        });
        const annotationId = params["annotationId"];
        invariant(annotationId);
        const fileId = params["fileId"];
        invariant(fileId);
        return Response.json(await apiClient.downloadAnnotationFile(annotationId, fileId));
      }
    }
  }
});
const Route$u = createFileRoute()({
  server: {
    handlers: {
      GET: async ({ request, params }) => {
        const { authService } = initServerServices(request);
        const { apiClient } = await authService.isAuthenticated(request, {
          failureRedirect: "/sign-in"
        });
        const screeningId = params["screeningId"];
        invariant(screeningId);
        const fileId = params["fileId"];
        invariant(fileId);
        return Response.json(await apiClient.downloadScreeningFile(screeningId, fileId));
      }
    }
  }
});
const $$splitComponentImporter$m = () => import("./_decisionId-Bb1zhBpt.mjs");
const Route$t = createFileRoute()({
  component: lazyRouteComponent($$splitComponentImporter$m, "component")
});
const $$splitComponentImporter$l = () => import("./s._caseId-QwnkX-8Y.mjs");
const beforeLoadFn$1 = createServerFn({
  method: "GET"
}).middleware([authMiddleware]).validator(object({
  caseId: string().transform((shortuuid) => fromSUUIDtoUUID(shortuuid))
})).handler(createSsrRpc("c80438a9d16c46d5e503c84e3cd04cb2e0689b73f89993a2cfc89d4548a70c7b"));
const Route$s = createFileRoute()({
  beforeLoad: async ({
    params
  }) => {
    return beforeLoadFn$1({
      data: {
        caseId: params.caseId
      }
    });
  },
  component: lazyRouteComponent($$splitComponentImporter$l, "component")
});
const Route$r = createFileRoute()({
  beforeLoad: ({ params }) => {
    const { scenarioId } = params;
    throw redirect({
      to: "/detection/scenarios/$scenarioId/home",
      params: { scenarioId }
    });
  }
});
const $$splitComponentImporter$k = () => import("./home-BcOxNzUc.mjs");
const homeLoader = createServerFn().middleware([authMiddleware]).validator((input) => input).handler(createSsrRpc("6c2d4274b8efb35e2bf7bcda438ff0aa337178dc081d76f95ef653851647b81d"));
const Route$q = createFileRoute()({
  loader: ({
    params
  }) => homeLoader({
    data: {
      params
    }
  }),
  component: lazyRouteComponent($$splitComponentImporter$k, "component")
});
const useBuilderLayoutData = () => {
  return useLoaderData({
    from: "/_app/_builder"
  });
};
const useDetectionScenarioData = () => {
  return useRouteContext({
    from: "/_app/_builder/detection/scenarios/$scenarioId"
  });
};
const useDetectionScenarioIterationData = () => {
  return useRouteContext({
    from: "/_app/_builder/detection/scenarios/$scenarioId/i/$iterationId"
  });
};
const useDerivedIterationRuleGroupsData = () => {
  const {
    rulesMetadata,
    scenarioIteration: { screeningConfigs }
  } = useDetectionScenarioIterationData();
  const configGroups = reactExports.useMemo(
    () => t$e(
      screeningConfigs,
      t$9((c) => c.ruleGroup),
      n$7((group) => group !== void 0)
    ),
    [screeningConfigs]
  );
  return reactExports.useMemo(
    () => t$e(
      rulesMetadata,
      t$9((r) => r.ruleGroup),
      t(configGroups),
      n$7((val) => !e(val)),
      n$1()
    ),
    [rulesMetadata, configGroups]
  );
};
const $$splitComponentImporter$j = () => import("./scheduled-executions-FxHs2OUS.mjs");
const $$splitErrorComponentImporter$2 = () => import("./scheduled-executions-D3XftUf2.mjs");
const scheduledExecutionsLoader = createServerFn().middleware([authMiddleware]).validator((input) => input).handler(createSsrRpc("77f970bfcb5f2e16f137b6d50579e1eaca7df3471d314b70a928bd2fffd6e4da"));
const Route$p = createFileRoute()({
  loader: ({
    params
  }) => scheduledExecutionsLoader({
    data: {
      params
    }
  }),
  staticData: {
    BreadCrumbs: [({
      isLast
    }) => {
      const {
        t: t2
      } = useTranslation(scenarioI18n);
      const {
        currentScenario
      } = useDetectionScenarioData();
      return /* @__PURE__ */ jsxRuntimeExports.jsx(BreadCrumbLink, { to: "/detection/scenarios/$scenarioId/scheduled-executions", params: {
        scenarioId: fromUUIDtoSUUID(currentScenario.id)
      }, isLast, children: t2("scenarios:home.execution") });
    }]
  },
  errorComponent: lazyRouteComponent($$splitErrorComponentImporter$2, "errorComponent"),
  component: lazyRouteComponent($$splitComponentImporter$j, "component")
});
const $$splitComponentImporter$i = () => import("./test-run-Bb1zhBpt.mjs");
const Route$o = createFileRoute()({
  staticData: {
    BreadCrumbs: [({
      isLast
    }) => {
      const {
        t: t2
      } = useTranslation(["scenarios"]);
      const {
        currentScenario
      } = useDetectionScenarioData();
      return /* @__PURE__ */ jsxRuntimeExports.jsx(BreadCrumbLink, { isLast, to: "/detection/scenarios/$scenarioId/test-run", params: {
        scenarioId: fromUUIDtoSUUID(currentScenario.id)
      }, children: t2("scenarios:testrun.home") });
    }]
  },
  component: lazyRouteComponent($$splitComponentImporter$i, "component")
});
const $$splitComponentImporter$h = () => import("./workflow-KH-YMFoQ.mjs");
const $$splitErrorComponentImporter$1 = () => import("./workflow-CqxdMz2K.mjs");
const workflowLoader = createServerFn().middleware([authMiddleware]).validator((input) => input).handler(createSsrRpc("b715dbcb72c4e13f7f23e5042eb58c4dc63388e4054266d8c58a136fdf4c4189"));
const Route$n = createFileRoute()({
  loader: ({
    params
  }) => workflowLoader({
    data: {
      params
    }
  }),
  staticData: {
    BreadCrumbs: [({
      isLast
    }) => {
      const {
        t: t2
      } = useTranslation(["scenarios"]);
      const {
        currentScenario
      } = useDetectionScenarioData();
      return /* @__PURE__ */ jsxRuntimeExports.jsx(BreadCrumbLink, { isLast, to: "/detection/scenarios/$scenarioId/workflow", params: {
        scenarioId: fromUUIDtoSUUID(currentScenario.id)
      }, children: t2("scenarios:home.workflow") });
    }]
  },
  errorComponent: lazyRouteComponent($$splitErrorComponentImporter$1, "errorComponent"),
  component: lazyRouteComponent($$splitComponentImporter$h, "component")
});
const Route$m = createFileRoute()({
  server: {
    handlers: {
      GET: async ({ request, params }) => {
        const { authService } = initServerServices(request);
        const { apiClient } = await authService.isAuthenticated(request, {
          failureRedirect: "/sign-in"
        });
        const caseId = params["caseId"];
        invariant(caseId);
        const reportId = params["reportId"];
        invariant(reportId);
        return Response.json(await apiClient.sarDownload(caseId, reportId));
      }
    }
  }
});
const $$splitComponentImporter$g = () => import("./screenings-Bb1zhBpt.mjs");
const Route$l = createFileRoute()({
  component: lazyRouteComponent($$splitComponentImporter$g, "component")
});
const $$splitComponentImporter$f = () => import("./index-MyYKJLJT.mjs");
const beforeLoadFn = createServerFn({
  method: "GET"
}).middleware([authMiddleware]).validator(object({
  caseId: string().transform((shortuuid) => fromSUUIDtoUUID(shortuuid))
})).handler(createSsrRpc("d919209ec64b26007ada86318123630032b1e88e73234609fed0872d0ce2ffac"));
const Route$k = createFileRoute()({
  beforeLoad: async ({
    params
  }) => {
    return beforeLoadFn({
      data: {
        caseId: params.caseId
      }
    });
  },
  component: lazyRouteComponent($$splitComponentImporter$f, "component")
});
const Route$j = createFileRoute()({
  beforeLoad: () => {
    throw redirect({ from: "/cases/s/$caseId", to: "./principal" });
  }
});
const $$splitComponentImporter$e = () => import("./clients-MwXD4TF8.mjs");
const Route$i = createFileRoute()({
  component: lazyRouteComponent($$splitComponentImporter$e, "component")
});
const $$splitComponentImporter$d = () => import("./links-Bpi6vh0C.mjs");
const Route$h = createFileRoute()({
  beforeLoad: ({
    context
  }) => {
    if (!context.dataModelFeatureAccess.isGraphExplorationEnabled) {
      throw redirect({
        from: "/cases/s/$caseId/",
        to: "./principal"
      });
    }
  },
  component: lazyRouteComponent($$splitComponentImporter$d, "component")
});
const $$splitComponentImporter$c = () => import("./principal-DLaMEDvD.mjs");
const Route$g = createFileRoute()({
  component: lazyRouteComponent($$splitComponentImporter$c, "component")
});
function getFormattedVersion({ version }, t2) {
  return version ? `V${version}` : t2("scenarios:draft");
}
function getFormattedLive({ type }, t2) {
  return type === "live version" ? t2("scenarios:live") : void 0;
}
function getFormattedArchived({ archived }, t2) {
  return archived ? t2("scenarios:archived") : void 0;
}
function sortScenarioIteration(lhs, rhs) {
  if (lhs.type === "draft" && rhs.type !== "draft") {
    return -1;
  }
  if (lhs.type !== "draft" && rhs.type === "draft") {
    return 1;
  }
  return lhs.updatedAt > rhs.updatedAt ? -1 : 1;
}
function ScenarioIterationMenu({
  labelledScenarioIteration: scenarioIterations,
  children,
  scenario
}) {
  const [open, setOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(MenuCommand.Menu, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Trigger, { children }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      MenuCommand.Content,
      {
        align: "start",
        sideOffset: 8,
        className: "max-h-[min(400px,var(--radix-popover-content-available-height))] min-w-48",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(ScenarioIterationContent, { labelledScenarioIteration: scenarioIterations, scenario })
      }
    )
  ] });
}
function ScenarioIterationContent({ labelledScenarioIteration, scenario }) {
  const { t: t2 } = useTranslation(["common", "scenarios"]);
  const iterations = reactExports.useMemo(
    () => [...labelledScenarioIteration].sort(sortScenarioIteration),
    [labelledScenarioIteration]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(MenuCommand.List, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      MenuCommand.Group,
      {
        className: "flex flex-col gap-sm",
        heading: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-sm", children: t2("scenarios:home.versions_label") }),
        children: iterations.map((iteration) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          MenuCommand.Item,
          {
            value: iteration.id,
            keywords: [
              iteration.formattedVersion,
              iteration.formattedUpdatedAt,
              ...iteration.formattedLive ? [iteration.formattedLive] : []
            ],
            asChild: true,
            className: "bg-surface-card aria-selected:border-purple-primary h-auto scroll-my-sm py-xs px-sm",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: iteration.linkTo, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-s flex flex-row gap-xs", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn$1("capitalize", { "text-purple-primary": iteration.id === scenario.id }), children: iteration.formattedVersion }),
                iteration.formattedLive ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-purple-primary capitalize", children: iteration.formattedLive }) : null,
                iteration.formattedArchived ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-grey-secondary capitalize", children: iteration.formattedArchived }) : null
              ] }),
              iteration.id === scenario.id ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-purple-primary ms-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "tick", className: "size-4" }) }) : null
            ] })
          },
          iteration.id
        ))
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Empty, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-grey-disabled w-full text-center", children: t2("common:help_center.no_results") }) })
  ] }) });
}
const $$splitComponentImporter$b = () => import("./_iterationId-QFyTEMmv.mjs");
const iterationLayoutLoader = createServerFn().middleware([authMiddleware]).validator((input) => input).handler(createSsrRpc("fafa18929cdae382d01409ef2653af321d4e1509920f23eaf5ac11e8be1f519f"));
const Route$f = createFileRoute()({
  beforeLoad: ({
    params
  }) => iterationLayoutLoader({
    data: {
      params
    }
  }),
  staticData: {
    BreadCrumbs: [({
      isLast
    }) => {
      const {
        t: t2
      } = useTranslation(["scenarios"]);
      const {
        scenarioIterations
      } = Route$f.useRouteContext();
      const iterationId = useParam("iterationId");
      const currentIteration = React.useMemo(() => {
        const currentIteration2 = scenarioIterations.find(({
          id
        }) => id === iterationId);
        invariant(currentIteration2);
        return currentIteration2;
      }, [iterationId, scenarioIterations]);
      const currentFormattedVersion = getFormattedVersion(currentIteration, t2);
      const currentFormattedLive = getFormattedLive(currentIteration, t2);
      const currentFormattedArchived = getFormattedArchived(currentIteration, t2);
      if (!isLast) {
        return /* @__PURE__ */ jsxRuntimeExports.jsx(BreadCrumbLink, { isLast, to: "/detection/scenarios/$scenarioId/i/$iterationId", params: {
          scenarioId: fromUUIDtoSUUID(currentIteration.scenarioId),
          iterationId: fromUUIDtoSUUID(currentIteration.id)
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-s flex flex-row gap-xs font-semibold", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "capitalize", children: currentFormattedVersion }),
          currentFormattedLive ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-purple-primary capitalize", children: currentFormattedLive }) : null,
          currentFormattedArchived ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-grey-secondary capitalize", children: currentFormattedArchived }) : null
        ] }) });
      }
      return /* @__PURE__ */ jsxRuntimeExports.jsx(VersionSelect, { currentIteration, scenarioIterations });
    }]
  },
  component: lazyRouteComponent($$splitComponentImporter$b, "component")
});
function VersionSelect({
  currentIteration,
  scenarioIterations
}) {
  const {
    t: t2
  } = useTranslation(["scenarios"]);
  const location = useLocation();
  const language = useFormatLanguage();
  const {
    currentScenario
  } = useDetectionScenarioData();
  const labelledScenarioIteration = React.useMemo(() => scenarioIterations.map((si) => ({
    id: si.id,
    type: si.type,
    version: si.version,
    updatedAt: si.updatedAt,
    linkTo: location.pathname.replace(fromUUIDtoSUUID(currentIteration.id), fromUUIDtoSUUID(si.id)),
    formattedVersion: getFormattedVersion(si, t2),
    formattedLive: getFormattedLive(si, t2),
    formattedArchived: getFormattedArchived(si, t2),
    formattedUpdatedAt: formatDateRelative(si.updatedAt, {
      language
    })
  })), [currentIteration.id, language, location.pathname, scenarioIterations, t2]);
  const currentFormattedVersion = getFormattedVersion(currentIteration, t2);
  const currentFormattedLive = getFormattedLive(currentIteration, t2);
  const currentFormattedArchived = getFormattedArchived(currentIteration, t2);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ScenarioIterationMenu, { labelledScenarioIteration, scenario: currentScenario, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", className: "text-s text-purple-primary border-purple-border focus:border-purple-primary flex items-center rounded-full border py-xs px-sm gap-xs outline-hidden font-normal", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex gap-xs", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "capitalize", children: currentFormattedVersion }),
      currentFormattedLive ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-purple-primary capitalize font-bold", children: currentFormattedLive }) : null,
      currentFormattedArchived ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-grey-secondary capitalize", children: currentFormattedArchived }) : null
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { "aria-hidden": true, icon: "caret-down", className: "size-6 shrink-0" })
  ] }) });
}
const $$splitComponentImporter$a = () => import("./index-s2rM-v-z.mjs");
const $$splitErrorComponentImporter = () => import("./index-BJ9xot_k.mjs");
const testRunsLoader = createServerFn().middleware([authMiddleware]).validator((input) => input).handler(createSsrRpc("1f732cf3a73e1a42731c4409721b5978c2deb610e7593242c697a8b12223b92b"));
const Route$e = createFileRoute()({
  loader: ({
    params
  }) => testRunsLoader({
    data: {
      params
    }
  }),
  errorComponent: lazyRouteComponent($$splitErrorComponentImporter, "errorComponent"),
  component: lazyRouteComponent($$splitComponentImporter$a, "component")
});
const screeningStatusMapping = {
  in_review: { color: "orange", tKey: "screenings:status.in_review" },
  confirmed_hit: { color: "red", tKey: "screenings:status.confirmed_hit" },
  no_hit: { color: "green", tKey: "screenings:status.no_hit" },
  error: { color: "red", tKey: "screenings:status.error" }
};
function ScreeningStatusTag({
  status,
  pendingHitCount,
  className
}) {
  const { t: t2 } = useTranslation(screeningsI18n);
  const screeningStatus = screeningStatusMapping[status];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { color: screeningStatus.color, className, children: t2(screeningStatus.tKey, { count: pendingHitCount ?? 0 }) });
}
const $$splitComponentImporter$9 = () => import("./_screeningId-dg7Rhj4D.mjs");
const screeningLayoutLoader = createServerFn().middleware([authMiddleware]).validator((input) => input).handler(createSsrRpc("ec8c4b7b0966af1bbe93faf723d4a1602ac35ba6bcaa41896162c40e24575da0"));
const Route$d = createFileRoute()({
  staticData: {
    BreadCrumbs: [({
      isLast
    }) => {
      const {
        t: t2
      } = useTranslation(["navigation"]);
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(BreadCrumbLink, { to: "/cases", isLast, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "case-manager", className: "me-sm size-6" }),
        t2("navigation:case_manager")
      ] });
    }, ({
      isLast
    }) => {
      const {
        inbox
      } = Route$d.useLoaderData();
      return /* @__PURE__ */ jsxRuntimeExports.jsx(BreadCrumbLink, { to: "/cases/inboxes/$inboxId", params: {
        inboxId: fromUUIDtoSUUID(inbox.id)
      }, isLast, children: inbox.name });
    }, ({
      isLast
    }) => {
      const {
        t: t2
      } = useTranslation(["cases"]);
      const {
        caseDetail
      } = Route$d.useLoaderData();
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(BreadCrumbLink, { to: "/cases/$caseId", params: {
          caseId: fromUUIDtoSUUID(caseDetail.id)
        }, isLast, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "line-clamp-2 text-start", children: t2("cases:case.page_title") }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-s border-grey-border text-grey-secondary inline-flex gap-sm rounded-sm border px-xs font-normal", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: "ID" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-rtl max-w-20 truncate", children: caseDetail.id })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CaseStatusBadgeV2, { status: caseDetail.status, outcome: caseDetail.outcome, variant: "semi-full" })
      ] });
    }, ({
      isLast
    }) => {
      const {
        caseDetail,
        decision,
        screening
      } = Route$d.useLoaderData();
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(BreadCrumbLink, { to: "/cases/$caseId/d/$decisionId/screenings/$screeningId", params: {
          caseId: fromUUIDtoSUUID(caseDetail.id),
          decisionId: fromUUIDtoSUUID(decision.id),
          screeningId: fromUUIDtoSUUID(screening.id)
        }, isLast, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "line-clamp-2 text-start", children: screening.config.name }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ScreeningStatusTag, { status: screening.status, pendingHitCount: screening.matches.filter((m) => m.status === "pending").length })
      ] });
    }]
  },
  loader: ({
    params
  }) => screeningLayoutLoader({
    data: {
      params
    }
  }),
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const Route$c = createFileRoute()({
  beforeLoad: async ({ context }) => {
    const { pivotObjects } = context;
    if (pivotObjects.length > 0 && pivotObjects[0]) {
      throw redirect({
        from: "/cases/s/$caseId/clients",
        to: "./$pivotValue",
        params: { pivotValue: getPivotObjectKey(pivotObjects[0]) }
      });
    }
    throw notFound();
  }
});
const $$splitComponentImporter$8 = () => import("./_pivotValue-udiq1LFA.mjs");
const Route$b = createFileRoute()({
  beforeLoad: ({
    context,
    params
  }) => {
    const {
      pivotObjects
    } = context;
    const pivotObject = (pivotObjects ?? []).find((p) => getPivotObjectKey(p) === params.pivotValue);
    if (!pivotObject) {
      throw redirect({
        from: "/cases/s/$caseId/",
        to: "./principal"
      });
    }
    return {
      pivotObject
    };
  },
  loader: ({
    context: {
      pivotObject
    }
  }) => {
    return {
      objectId: pivotObject.pivotObjectId,
      objectType: pivotObject.pivotObjectName
    };
  },
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const Route$a = createFileRoute()({
  beforeLoad: async ({ context }) => {
    const { pivotObjects, dataModel } = context;
    const eligiblePivots = getGraphEligiblePivots(pivotObjects ?? [], dataModel);
    const first = eligiblePivots[0];
    if (first) {
      throw redirect({
        from: "/cases/s/$caseId/links",
        to: "./$pivotValue",
        params: { pivotValue: getPivotObjectKey(first) }
      });
    }
    throw redirect({ from: "/cases/s/$caseId/", to: "./principal" });
  }
});
const $$splitComponentImporter$7 = () => import("./_pivotValue-Bhvfp1Ur.mjs");
const linksPivotLoader = createServerFn().middleware([authMiddleware]).validator(object({
  caseId: string(),
  pivotValue: string()
})).handler(createSsrRpc("0a593d1eab87a44f8c965ee49dba7996bafcc217c36259ba79ab682444a5a0b0"));
const Route$9 = createFileRoute()({
  staticData: {
    BreadCrumbs: [({
      isLast
    }) => {
      const {
        t: t2
      } = useTranslation(["cases"]);
      const {
        caseId,
        pivotValue
      } = Route$9.useParams();
      return /* @__PURE__ */ jsxRuntimeExports.jsx(BreadCrumbLink, { to: "/cases/s/$caseId/links/$pivotValue", params: {
        caseId,
        pivotValue
      }, isLast, children: t2("cases:manager.tab.links_to_other") });
    }]
  },
  loader: ({
    params
  }) => linksPivotLoader({
    data: {
      caseId: params.caseId,
      pivotValue: params.pivotValue
    }
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./_edit-view-pTEpMZzs.mjs");
const editViewLoader = createServerFn().middleware([authMiddleware]).validator((input) => input).handler(createSsrRpc("ba9c379c3bd9fefe648e379845f78650c969c6a20b6cd18078d4a9a7a1545fbb"));
const Route$8 = createFileRoute()({
  loader: ({
    params
  }) => editViewLoader({
    data: {
      params
    }
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./index-CqRO7VNy.mjs");
const testRunLoader = createServerFn().middleware([authMiddleware]).validator((input) => input).handler(createSsrRpc("3e3dd68bddc4fccfe463f50bf405f3ecaaa57570ec973292136a0b24e4393746"));
const Route$7 = createFileRoute()({
  loader: ({
    params
  }) => testRunLoader({
    data: {
      params
    }
  }),
  staticData: {
    BreadCrumbs: [({
      isLast
    }) => {
      const {
        run
      } = Route$7.useLoaderData();
      const {
        t: t2
      } = useTranslation(["scenarios"]);
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-md", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(BreadCrumbLink, { isLast, to: "/detection/scenarios/$scenarioId/test-run/$testRunId", params: {
          scenarioId: fromUUIDtoSUUID(run.scenarioId),
          testRunId: fromUUIDtoSUUID(run.id)
        }, children: t2("scenarios:home.testrun") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CopyToClipboardButton, { toCopy: run.id, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-s line-clamp-1 max-w-40 font-normal", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: "ID" }),
          " ",
          run.id
        ] }) })
      ] });
    }]
  },
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const screeningIndexLoader = createServerFn().middleware([authMiddleware]).validator((input) => input).handler(createSsrRpc("fae90b50f659174fbb10c5c418df19bf152d84db7c54afb41783f3357caf76e7"));
const Route$6 = createFileRoute()({
  loader: ({
    params
  }) => screeningIndexLoader({
    data: {
      params
    }
  })
});
const $$splitComponentImporter$4 = () => import("./files-eXL6x0B-.mjs");
const screeningFilesLoader = createServerFn().middleware([authMiddleware]).validator((input) => input).handler(createSsrRpc("4a28384f0c1ddd01ba12aeab2b2ace7744773b2f0c0f887d7cbabaa408dd4843"));
const Route$5 = createFileRoute()({
  loader: ({
    params
  }) => screeningFilesLoader({
    data: {
      params
    }
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./hits-CPwK4haT.mjs");
const Route$4 = createFileRoute()({
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const Route$3 = createFileRoute()({
  beforeLoad: ({ params }) => {
    throw redirect({
      to: "/detection/scenarios/$scenarioId/i/$iterationId/trigger",
      params: { scenarioId: params.scenarioId, iterationId: params.iterationId }
    });
  }
});
const $$splitComponentImporter$2 = () => import("./decision-BONyQW9V.mjs");
const Route$2 = createFileRoute()({
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./rules-Do4-XvQv.mjs");
const rulesLoader = createServerFn().middleware([authMiddleware]).handler(createSsrRpc("896a1ecc11846a9461e21facf77adf667f611a1ae5b520fb3166be717fd06c95"));
const Route$1 = createFileRoute()({
  loader: () => rulesLoader(),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./trigger-xPlMWY9-.mjs");
const Route2 = createFileRoute()({
  loader: ({
    params
  }) => getBuilderOptionsFn({
    data: {
      scenarioId: fromSUUIDtoUUID(params.scenarioId)
    }
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const IndexRoute = Route$1P.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$1Q
});
const SplatRoute = Route$1O.update({
  id: "/$",
  path: "/$",
  getParentRoute: () => Route$1Q
});
const AppRoute = Route$1N.update({
  id: "/_app",
  getParentRoute: () => Route$1Q
});
const AppRouterRoute = Route$1M.update({
  id: "/app-router",
  path: "/app-router",
  getParentRoute: () => Route$1Q
});
const HealthcheckRoute = Route$1L.update({
  id: "/healthcheck",
  path: "/healthcheck",
  getParentRoute: () => Route$1Q
});
const AppAuthRoute = Route$1K.update({
  id: "/_auth",
  getParentRoute: () => AppRoute
});
const AppBuilderRoute = Route$1J.update({
  id: "/_builder",
  getParentRoute: () => AppRoute
});
const AppOnboardingRoute = Route$1I.update({
  id: "/onboarding",
  path: "/onboarding",
  getParentRoute: () => AppRoute
});
const OidcAuthRoute = Route$1H.update({
  id: "/oidc/auth",
  path: "/oidc/auth",
  getParentRoute: () => Route$1Q
});
const OidcCallbackRoute = Route$1G.update({
  id: "/oidc/callback",
  path: "/oidc/callback",
  getParentRoute: () => Route$1Q
});
const RessourcesLocalesRoute = Route$1F.update({
  id: "/ressources/locales",
  path: "/ressources/locales",
  getParentRoute: () => Route$1Q
});
const RobotsTxtRoute = Route$1E.update({
  id: "/robots/txt",
  path: "/robots/txt",
  getParentRoute: () => Route$1Q
});
const AppAuthAuthRedirectRoute = Route$1D.update({
  id: "/auth-redirect",
  path: "/auth-redirect",
  getParentRoute: () => AppAuthRoute
});
const AppAuthCreatePasswordRoute = Route$1C.update({
  id: "/create-password",
  path: "/create-password",
  getParentRoute: () => AppAuthRoute
});
const AppAuthEmailVerificationRoute = Route$1B.update({
  id: "/email-verification",
  path: "/email-verification",
  getParentRoute: () => AppAuthRoute
});
const AppAuthSignInRoute = Route$1A.update({
  id: "/sign-in",
  path: "/sign-in",
  getParentRoute: () => AppAuthRoute
});
const AppAuthSignInEmailRoute = Route$1z.update({
  id: "/sign-in-email",
  path: "/sign-in-email",
  getParentRoute: () => AppAuthRoute
});
const AppBuilderAccountRoute = Route$1y.update({
  id: "/account",
  path: "/account",
  getParentRoute: () => AppBuilderRoute
});
const AppBuilderAnalyticsLegacyRoute = Route$1x.update({
  id: "/analytics-legacy",
  path: "/analytics-legacy",
  getParentRoute: () => AppBuilderRoute
});
const AppBuilderCasesRoute = Route$1w.update({
  id: "/cases",
  path: "/cases",
  getParentRoute: () => AppBuilderRoute
});
const AppBuilderContinuousScreeningRoute = Route$1v.update({
  id: "/continuous-screening",
  path: "/continuous-screening",
  getParentRoute: () => AppBuilderRoute
});
const AppBuilderDataRoute = Route$1u.update({
  id: "/data",
  path: "/data",
  getParentRoute: () => AppBuilderRoute
});
const AppBuilderDetectionRoute = Route$1t.update({
  id: "/detection",
  path: "/detection",
  getParentRoute: () => AppBuilderRoute
});
const AppBuilderScreeningSearchRoute = Route$1s.update({
  id: "/screening-search",
  path: "/screening-search",
  getParentRoute: () => AppBuilderRoute
});
const AppBuilderSettingsRoute = Route$1r.update({
  id: "/settings",
  path: "/settings",
  getParentRoute: () => AppBuilderRoute
});
const AppBuilderTestGraphRoute = Route$1q.update({
  id: "/test-graph",
  path: "/test-graph",
  getParentRoute: () => AppBuilderRoute
});
const AppBuilderUserScoringRoute = Route$1p.update({
  id: "/user-scoring",
  path: "/user-scoring",
  getParentRoute: () => AppBuilderRoute
});
const RessourcesDataExportOrgRoute = Route$1o.update({
  id: "/ressources/data/export-org",
  path: "/ressources/data/export-org",
  getParentRoute: () => Route$1Q
});
const AppBuilderCasesIndexRoute = Route$1n.update({
  id: "/",
  path: "/",
  getParentRoute: () => AppBuilderCasesRoute
});
const AppBuilderCasesCaseIdRoute = Route$1m.update({
  id: "/$caseId",
  path: "/$caseId",
  getParentRoute: () => AppBuilderCasesRoute
});
const AppBuilderCasesDetailRoute = Route$1l.update({
  id: "/_detail",
  getParentRoute: () => AppBuilderCasesRoute
});
const AppBuilderCasesAnalyticsRoute = Route$1k.update({
  id: "/analytics",
  path: "/analytics",
  getParentRoute: () => AppBuilderCasesRoute
});
const AppBuilderCasesInboxesRoute = Route$1j.update({
  id: "/inboxes",
  path: "/inboxes",
  getParentRoute: () => AppBuilderCasesRoute
});
const AppBuilderCasesOverviewRoute = Route$1i.update({
  id: "/overview",
  path: "/overview",
  getParentRoute: () => AppBuilderCasesRoute
});
const AppBuilderClientDetailIndexRoute = Route$1h.update({
  id: "/client-detail/",
  path: "/client-detail/",
  getParentRoute: () => AppBuilderRoute
});
const AppBuilderContinuousScreeningIndexRoute = Route$1g.update({
  id: "/",
  path: "/",
  getParentRoute: () => AppBuilderContinuousScreeningRoute
});
const AppBuilderContinuousScreeningConfigurationsRoute = Route$1f.update({
  id: "/configurations",
  path: "/configurations",
  getParentRoute: () => AppBuilderContinuousScreeningRoute
});
const AppBuilderContinuousScreeningObservabilityRoute = Route$1e.update({
  id: "/observability",
  path: "/observability",
  getParentRoute: () => AppBuilderContinuousScreeningRoute
});
const AppBuilderDataIndexRoute = Route$1d.update({
  id: "/",
  path: "/",
  getParentRoute: () => AppBuilderDataRoute
});
const AppBuilderDataListRoute = Route$1c.update({
  id: "/list",
  path: "/list",
  getParentRoute: () => AppBuilderDataRoute
});
const AppBuilderDetectionIndexRoute = Route$1b.update({
  id: "/",
  path: "/",
  getParentRoute: () => AppBuilderDetectionRoute
});
const AppBuilderDetectionAnalyticsRoute = Route$1a.update({
  id: "/analytics",
  path: "/analytics",
  getParentRoute: () => AppBuilderDetectionRoute
});
const AppBuilderDetectionDecisionsRoute = Route$19.update({
  id: "/decisions",
  path: "/decisions",
  getParentRoute: () => AppBuilderDetectionRoute
});
const AppBuilderDetectionListsRoute = Route$18.update({
  id: "/lists",
  path: "/lists",
  getParentRoute: () => AppBuilderDetectionRoute
});
const AppBuilderDetectionScenariosRoute = Route$17.update({
  id: "/scenarios",
  path: "/scenarios",
  getParentRoute: () => AppBuilderDetectionRoute
});
const AppBuilderScreeningSearchIndexRoute = Route$16.update({
  id: "/",
  path: "/",
  getParentRoute: () => AppBuilderScreeningSearchRoute
});
const AppBuilderSettingsIndexRoute = Route$15.update({
  id: "/",
  path: "/",
  getParentRoute: () => AppBuilderSettingsRoute
});
const AppBuilderSettingsAnalyticsRoute = Route$14.update({
  id: "/analytics",
  path: "/analytics",
  getParentRoute: () => AppBuilderSettingsRoute
});
const AppBuilderSettingsApiKeysRoute = Route$13.update({
  id: "/api-keys",
  path: "/api-keys",
  getParentRoute: () => AppBuilderSettingsRoute
});
const AppBuilderSettingsAuditLogsRoute = Route$12.update({
  id: "/audit-logs",
  path: "/audit-logs",
  getParentRoute: () => AppBuilderSettingsRoute
});
const AppBuilderSettingsInboxesRoute = Route$11.update({
  id: "/inboxes",
  path: "/inboxes",
  getParentRoute: () => AppBuilderSettingsRoute
});
const AppBuilderSettingsIpWhitelistingRoute = Route$10.update({
  id: "/ip-whitelisting",
  path: "/ip-whitelisting",
  getParentRoute: () => AppBuilderSettingsRoute
});
const AppBuilderSettingsScenariosRoute = Route$$.update({
  id: "/scenarios",
  path: "/scenarios",
  getParentRoute: () => AppBuilderSettingsRoute
});
const AppBuilderSettingsScreeningProvidersRoute = Route$_.update({
  id: "/screening-providers",
  path: "/screening-providers",
  getParentRoute: () => AppBuilderSettingsRoute
});
const AppBuilderSettingsTagsRoute = Route$Z.update({
  id: "/tags",
  path: "/tags",
  getParentRoute: () => AppBuilderSettingsRoute
});
const AppBuilderSettingsUsersRoute = Route$Y.update({
  id: "/users",
  path: "/users",
  getParentRoute: () => AppBuilderSettingsRoute
});
const AppBuilderSettingsWebhooksRoute = Route$X.update({
  id: "/webhooks",
  path: "/webhooks",
  getParentRoute: () => AppBuilderSettingsRoute
});
const AppBuilderTestGraphIndexRoute = Route$W.update({
  id: "/",
  path: "/",
  getParentRoute: () => AppBuilderTestGraphRoute
});
const AppBuilderUploadObjectTypeRoute = Route$V.update({
  id: "/upload/$objectType",
  path: "/upload/$objectType",
  getParentRoute: () => AppBuilderRoute
});
const AppBuilderUserScoringIndexRoute = Route$U.update({
  id: "/",
  path: "/",
  getParentRoute: () => AppBuilderUserScoringRoute
});
const AppBuilderUserScoringOverviewRoute = Route$T.update({
  id: "/overview",
  path: "/overview",
  getParentRoute: () => AppBuilderUserScoringRoute
});
const RessourcesCasesDownloadDataCaseIdRoute = Route$S.update({
  id: "/ressources/cases/download-data/$caseId",
  path: "/ressources/cases/download-data/$caseId",
  getParentRoute: () => Route$1Q
});
const RessourcesCasesDownloadFileFileIdRoute = Route$R.update({
  id: "/ressources/cases/download-file/$fileId",
  path: "/ressources/cases/download-file/$fileId",
  getParentRoute: () => Route$1Q
});
const RessourcesCasesNextUnassignedCaseIdRoute = Route$Q.update({
  id: "/ressources/cases/next-unassigned/$caseId",
  path: "/ressources/cases/next-unassigned/$caseId",
  getParentRoute: () => Route$1Q
});
const RessourcesListsDownloadCsvFileListIdRoute = Route$P.update({
  id: "/ressources/lists/download-csv-file/$listId",
  path: "/ressources/lists/download-csv-file/$listId",
  getParentRoute: () => Route$1Q
});
const AppBuilderCasesCaseIdIndexRoute = Route$O.update({
  id: "/",
  path: "/",
  getParentRoute: () => AppBuilderCasesCaseIdRoute
});
const AppBuilderCasesCaseIdDRoute = Route$N.update({
  id: "/d",
  path: "/d",
  getParentRoute: () => AppBuilderCasesCaseIdRoute
});
const AppBuilderCasesInboxesIndexRoute = Route$M.update({
  id: "/",
  path: "/",
  getParentRoute: () => AppBuilderCasesInboxesRoute
});
const AppBuilderCasesInboxesInboxIdRoute = Route$L.update({
  id: "/$inboxId",
  path: "/$inboxId",
  getParentRoute: () => AppBuilderCasesInboxesRoute
});
const AppBuilderClientDetailObjectTypeObjectIdRoute = Route$K.update({
  id: "/client-detail/$objectType/$objectId",
  path: "/client-detail/$objectType/$objectId",
  getParentRoute: () => AppBuilderRoute
});
const AppBuilderContinuousScreeningCreateIndexRoute = Route$J.update({
  id: "/create/",
  path: "/create/",
  getParentRoute: () => AppBuilderContinuousScreeningRoute
});
const AppBuilderDetectionAnalyticsIndexRoute = Route$I.update({
  id: "/",
  path: "/",
  getParentRoute: () => AppBuilderDetectionAnalyticsRoute
});
const AppBuilderDetectionAnalyticsScenarioIdRoute = Route$H.update({
  id: "/$scenarioId",
  path: "/$scenarioId",
  getParentRoute: () => AppBuilderDetectionAnalyticsRoute
});
const AppBuilderDetectionDecisionsIndexRoute = Route$G.update({
  id: "/",
  path: "/",
  getParentRoute: () => AppBuilderDetectionDecisionsRoute
});
const AppBuilderDetectionDecisionsDecisionIdRoute = Route$F.update({
  id: "/$decisionId",
  path: "/$decisionId",
  getParentRoute: () => AppBuilderDetectionDecisionsRoute
});
const AppBuilderDetectionListsIndexRoute = Route$E.update({
  id: "/",
  path: "/",
  getParentRoute: () => AppBuilderDetectionListsRoute
});
const AppBuilderDetectionListsListIdRoute = Route$D.update({
  id: "/$listId",
  path: "/$listId",
  getParentRoute: () => AppBuilderDetectionListsRoute
});
const AppBuilderDetectionScenariosIndexRoute = Route$C.update({
  id: "/",
  path: "/",
  getParentRoute: () => AppBuilderDetectionScenariosRoute
});
const AppBuilderDetectionScenariosScenarioIdRoute = Route$B.update({
  id: "/$scenarioId",
  path: "/$scenarioId",
  getParentRoute: () => AppBuilderDetectionScenariosRoute
});
const AppBuilderSettingsAnalyticsFiltersRoute = Route$A.update({
  id: "/filters",
  path: "/filters",
  getParentRoute: () => AppBuilderSettingsAnalyticsRoute
});
const AppBuilderSettingsInboxesIndexRoute = Route$z.update({
  id: "/",
  path: "/",
  getParentRoute: () => AppBuilderSettingsInboxesRoute
});
const AppBuilderSettingsInboxesInboxIdRoute = Route$y.update({
  id: "/$inboxId",
  path: "/$inboxId",
  getParentRoute: () => AppBuilderSettingsInboxesRoute
});
const AppBuilderSettingsWebhooksWebhookIdRoute = Route$x.update({
  id: "/webhooks_/$webhookId",
  path: "/webhooks/$webhookId",
  getParentRoute: () => AppBuilderSettingsRoute
});
const AppBuilderUserScoringRecordTypeVersionRoute = Route$w.update({
  id: "/$recordType/$version",
  path: "/$recordType/$version",
  getParentRoute: () => AppBuilderUserScoringRoute
});
const RessourcesAnnotationsDownloadFileAnnotationIdFileIdRoute = Route$v.update({
  id: "/ressources/annotations/download-file/$annotationId/$fileId",
  path: "/ressources/annotations/download-file/$annotationId/$fileId",
  getParentRoute: () => Route$1Q
});
const RessourcesScreeningsDownloadScreeningIdFileIdRoute = Route$u.update({
  id: "/ressources/screenings/download/$screeningId/$fileId",
  path: "/ressources/screenings/download/$screeningId/$fileId",
  getParentRoute: () => Route$1Q
});
const AppBuilderCasesCaseIdDDecisionIdRoute = Route$t.update({
  id: "/$decisionId",
  path: "/$decisionId",
  getParentRoute: () => AppBuilderCasesCaseIdDRoute
});
const AppBuilderCasesDetailSCaseIdRoute = Route$s.update({
  id: "/s/$caseId",
  path: "/s/$caseId",
  getParentRoute: () => AppBuilderCasesDetailRoute
});
const AppBuilderDetectionScenariosScenarioIdIndexRoute = Route$r.update({
  id: "/",
  path: "/",
  getParentRoute: () => AppBuilderDetectionScenariosScenarioIdRoute
});
const AppBuilderDetectionScenariosScenarioIdHomeRoute = Route$q.update({
  id: "/home",
  path: "/home",
  getParentRoute: () => AppBuilderDetectionScenariosScenarioIdRoute
});
const AppBuilderDetectionScenariosScenarioIdScheduledExecutionsRoute = Route$p.update({
  id: "/scheduled-executions",
  path: "/scheduled-executions",
  getParentRoute: () => AppBuilderDetectionScenariosScenarioIdRoute
});
const AppBuilderDetectionScenariosScenarioIdTestRunRoute = Route$o.update({
  id: "/test-run",
  path: "/test-run",
  getParentRoute: () => AppBuilderDetectionScenariosScenarioIdRoute
});
const AppBuilderDetectionScenariosScenarioIdWorkflowRoute = Route$n.update({
  id: "/workflow",
  path: "/workflow",
  getParentRoute: () => AppBuilderDetectionScenariosScenarioIdRoute
});
const RessourcesCasesSarDownloadCaseIdReportIdRoute = Route$m.update({
  id: "/ressources/cases/sar/download/$caseId/$reportId",
  path: "/ressources/cases/sar/download/$caseId/$reportId",
  getParentRoute: () => Route$1Q
});
const AppBuilderCasesCaseIdDDecisionIdScreeningsRoute = Route$l.update({
  id: "/screenings",
  path: "/screenings",
  getParentRoute: () => AppBuilderCasesCaseIdDDecisionIdRoute
});
const AppBuilderCasesDetailMCaseIdIndexRoute = Route$k.update({
  id: "/m/$caseId/",
  path: "/m/$caseId/",
  getParentRoute: () => AppBuilderCasesDetailRoute
});
const AppBuilderCasesDetailSCaseIdIndexRoute = Route$j.update({
  id: "/",
  path: "/",
  getParentRoute: () => AppBuilderCasesDetailSCaseIdRoute
});
const AppBuilderCasesDetailSCaseIdClientsRoute = Route$i.update({
  id: "/clients",
  path: "/clients",
  getParentRoute: () => AppBuilderCasesDetailSCaseIdRoute
});
const AppBuilderCasesDetailSCaseIdLinksRoute = Route$h.update({
  id: "/links",
  path: "/links",
  getParentRoute: () => AppBuilderCasesDetailSCaseIdRoute
});
const AppBuilderCasesDetailSCaseIdPrincipalRoute = Route$g.update({
  id: "/principal",
  path: "/principal",
  getParentRoute: () => AppBuilderCasesDetailSCaseIdRoute
});
const AppBuilderDetectionScenariosScenarioIdIIterationIdRoute = Route$f.update({
  id: "/i/$iterationId",
  path: "/i/$iterationId",
  getParentRoute: () => AppBuilderDetectionScenariosScenarioIdRoute
});
const AppBuilderDetectionScenariosScenarioIdTestRunIndexRoute = Route$e.update({
  id: "/",
  path: "/",
  getParentRoute: () => AppBuilderDetectionScenariosScenarioIdTestRunRoute
});
const AppBuilderCasesCaseIdDDecisionIdScreeningsScreeningIdRoute = Route$d.update({
  id: "/$screeningId",
  path: "/$screeningId",
  getParentRoute: () => AppBuilderCasesCaseIdDDecisionIdScreeningsRoute
});
const AppBuilderCasesDetailSCaseIdClientsIndexRoute = Route$c.update({
  id: "/",
  path: "/",
  getParentRoute: () => AppBuilderCasesDetailSCaseIdClientsRoute
});
const AppBuilderCasesDetailSCaseIdClientsPivotValueRoute = Route$b.update({
  id: "/$pivotValue",
  path: "/$pivotValue",
  getParentRoute: () => AppBuilderCasesDetailSCaseIdClientsRoute
});
const AppBuilderCasesDetailSCaseIdLinksIndexRoute = Route$a.update({
  id: "/",
  path: "/",
  getParentRoute: () => AppBuilderCasesDetailSCaseIdLinksRoute
});
const AppBuilderCasesDetailSCaseIdLinksPivotValueRoute = Route$9.update({
  id: "/$pivotValue",
  path: "/$pivotValue",
  getParentRoute: () => AppBuilderCasesDetailSCaseIdLinksRoute
});
const AppBuilderDetectionScenariosScenarioIdIIterationIdEditViewRoute = Route$8.update({
  id: "/_edit-view",
  getParentRoute: () => AppBuilderDetectionScenariosScenarioIdIIterationIdRoute
});
const AppBuilderDetectionScenariosScenarioIdTestRunTestRunIdIndexRoute = Route$7.update(
  {
    id: "/$testRunId/",
    path: "/$testRunId/",
    getParentRoute: () => AppBuilderDetectionScenariosScenarioIdTestRunRoute
  }
);
const AppBuilderCasesCaseIdDDecisionIdScreeningsScreeningIdIndexRoute = Route$6.update({
  id: "/",
  path: "/",
  getParentRoute: () => AppBuilderCasesCaseIdDDecisionIdScreeningsScreeningIdRoute
});
const AppBuilderCasesCaseIdDDecisionIdScreeningsScreeningIdFilesRoute = Route$5.update({
  id: "/files",
  path: "/files",
  getParentRoute: () => AppBuilderCasesCaseIdDDecisionIdScreeningsScreeningIdRoute
});
const AppBuilderCasesCaseIdDDecisionIdScreeningsScreeningIdHitsRoute = Route$4.update({
  id: "/hits",
  path: "/hits",
  getParentRoute: () => AppBuilderCasesCaseIdDDecisionIdScreeningsScreeningIdRoute
});
const AppBuilderDetectionScenariosScenarioIdIIterationIdEditViewIndexRoute = Route$3.update(
  {
    id: "/",
    path: "/",
    getParentRoute: () => AppBuilderDetectionScenariosScenarioIdIIterationIdEditViewRoute
  }
);
const AppBuilderDetectionScenariosScenarioIdIIterationIdEditViewDecisionRoute = Route$2.update(
  {
    id: "/decision",
    path: "/decision",
    getParentRoute: () => AppBuilderDetectionScenariosScenarioIdIIterationIdEditViewRoute
  }
);
const AppBuilderDetectionScenariosScenarioIdIIterationIdEditViewRulesRoute = Route$1.update(
  {
    id: "/rules",
    path: "/rules",
    getParentRoute: () => AppBuilderDetectionScenariosScenarioIdIIterationIdEditViewRoute
  }
);
const AppBuilderDetectionScenariosScenarioIdIIterationIdEditViewTriggerRoute = Route2.update(
  {
    id: "/trigger",
    path: "/trigger",
    getParentRoute: () => AppBuilderDetectionScenariosScenarioIdIIterationIdEditViewRoute
  }
);
const AppAuthRouteChildren = {
  AppAuthAuthRedirectRoute,
  AppAuthCreatePasswordRoute,
  AppAuthEmailVerificationRoute,
  AppAuthSignInRoute,
  AppAuthSignInEmailRoute
};
const AppAuthRouteWithChildren = AppAuthRoute._addFileChildren(AppAuthRouteChildren);
const AppBuilderCasesCaseIdDDecisionIdScreeningsScreeningIdRouteChildren = {
  AppBuilderCasesCaseIdDDecisionIdScreeningsScreeningIdFilesRoute,
  AppBuilderCasesCaseIdDDecisionIdScreeningsScreeningIdHitsRoute,
  AppBuilderCasesCaseIdDDecisionIdScreeningsScreeningIdIndexRoute
};
const AppBuilderCasesCaseIdDDecisionIdScreeningsScreeningIdRouteWithChildren = AppBuilderCasesCaseIdDDecisionIdScreeningsScreeningIdRoute._addFileChildren(
  AppBuilderCasesCaseIdDDecisionIdScreeningsScreeningIdRouteChildren
);
const AppBuilderCasesCaseIdDDecisionIdScreeningsRouteChildren = {
  AppBuilderCasesCaseIdDDecisionIdScreeningsScreeningIdRoute: AppBuilderCasesCaseIdDDecisionIdScreeningsScreeningIdRouteWithChildren
};
const AppBuilderCasesCaseIdDDecisionIdScreeningsRouteWithChildren = AppBuilderCasesCaseIdDDecisionIdScreeningsRoute._addFileChildren(
  AppBuilderCasesCaseIdDDecisionIdScreeningsRouteChildren
);
const AppBuilderCasesCaseIdDDecisionIdRouteChildren = {
  AppBuilderCasesCaseIdDDecisionIdScreeningsRoute: AppBuilderCasesCaseIdDDecisionIdScreeningsRouteWithChildren
};
const AppBuilderCasesCaseIdDDecisionIdRouteWithChildren = AppBuilderCasesCaseIdDDecisionIdRoute._addFileChildren(
  AppBuilderCasesCaseIdDDecisionIdRouteChildren
);
const AppBuilderCasesCaseIdDRouteChildren = {
  AppBuilderCasesCaseIdDDecisionIdRoute: AppBuilderCasesCaseIdDDecisionIdRouteWithChildren
};
const AppBuilderCasesCaseIdDRouteWithChildren = AppBuilderCasesCaseIdDRoute._addFileChildren(
  AppBuilderCasesCaseIdDRouteChildren
);
const AppBuilderCasesCaseIdRouteChildren = {
  AppBuilderCasesCaseIdDRoute: AppBuilderCasesCaseIdDRouteWithChildren,
  AppBuilderCasesCaseIdIndexRoute
};
const AppBuilderCasesCaseIdRouteWithChildren = AppBuilderCasesCaseIdRoute._addFileChildren(
  AppBuilderCasesCaseIdRouteChildren
);
const AppBuilderCasesDetailSCaseIdClientsRouteChildren = {
  AppBuilderCasesDetailSCaseIdClientsPivotValueRoute,
  AppBuilderCasesDetailSCaseIdClientsIndexRoute
};
const AppBuilderCasesDetailSCaseIdClientsRouteWithChildren = AppBuilderCasesDetailSCaseIdClientsRoute._addFileChildren(
  AppBuilderCasesDetailSCaseIdClientsRouteChildren
);
const AppBuilderCasesDetailSCaseIdLinksRouteChildren = {
  AppBuilderCasesDetailSCaseIdLinksPivotValueRoute,
  AppBuilderCasesDetailSCaseIdLinksIndexRoute
};
const AppBuilderCasesDetailSCaseIdLinksRouteWithChildren = AppBuilderCasesDetailSCaseIdLinksRoute._addFileChildren(
  AppBuilderCasesDetailSCaseIdLinksRouteChildren
);
const AppBuilderCasesDetailSCaseIdRouteChildren = {
  AppBuilderCasesDetailSCaseIdClientsRoute: AppBuilderCasesDetailSCaseIdClientsRouteWithChildren,
  AppBuilderCasesDetailSCaseIdLinksRoute: AppBuilderCasesDetailSCaseIdLinksRouteWithChildren,
  AppBuilderCasesDetailSCaseIdPrincipalRoute,
  AppBuilderCasesDetailSCaseIdIndexRoute
};
const AppBuilderCasesDetailSCaseIdRouteWithChildren = AppBuilderCasesDetailSCaseIdRoute._addFileChildren(
  AppBuilderCasesDetailSCaseIdRouteChildren
);
const AppBuilderCasesDetailRouteChildren = {
  AppBuilderCasesDetailSCaseIdRoute: AppBuilderCasesDetailSCaseIdRouteWithChildren,
  AppBuilderCasesDetailMCaseIdIndexRoute
};
const AppBuilderCasesDetailRouteWithChildren = AppBuilderCasesDetailRoute._addFileChildren(
  AppBuilderCasesDetailRouteChildren
);
const AppBuilderCasesInboxesRouteChildren = {
  AppBuilderCasesInboxesInboxIdRoute,
  AppBuilderCasesInboxesIndexRoute
};
const AppBuilderCasesInboxesRouteWithChildren = AppBuilderCasesInboxesRoute._addFileChildren(
  AppBuilderCasesInboxesRouteChildren
);
const AppBuilderCasesRouteChildren = {
  AppBuilderCasesCaseIdRoute: AppBuilderCasesCaseIdRouteWithChildren,
  AppBuilderCasesDetailRoute: AppBuilderCasesDetailRouteWithChildren,
  AppBuilderCasesAnalyticsRoute,
  AppBuilderCasesInboxesRoute: AppBuilderCasesInboxesRouteWithChildren,
  AppBuilderCasesOverviewRoute,
  AppBuilderCasesIndexRoute
};
const AppBuilderCasesRouteWithChildren = AppBuilderCasesRoute._addFileChildren(
  AppBuilderCasesRouteChildren
);
const AppBuilderContinuousScreeningRouteChildren = {
  AppBuilderContinuousScreeningConfigurationsRoute,
  AppBuilderContinuousScreeningObservabilityRoute,
  AppBuilderContinuousScreeningIndexRoute,
  AppBuilderContinuousScreeningCreateIndexRoute
};
const AppBuilderContinuousScreeningRouteWithChildren = AppBuilderContinuousScreeningRoute._addFileChildren(
  AppBuilderContinuousScreeningRouteChildren
);
const AppBuilderDataRouteChildren = {
  AppBuilderDataListRoute,
  AppBuilderDataIndexRoute
};
const AppBuilderDataRouteWithChildren = AppBuilderDataRoute._addFileChildren(
  AppBuilderDataRouteChildren
);
const AppBuilderDetectionAnalyticsRouteChildren = {
  AppBuilderDetectionAnalyticsScenarioIdRoute,
  AppBuilderDetectionAnalyticsIndexRoute
};
const AppBuilderDetectionAnalyticsRouteWithChildren = AppBuilderDetectionAnalyticsRoute._addFileChildren(
  AppBuilderDetectionAnalyticsRouteChildren
);
const AppBuilderDetectionDecisionsRouteChildren = {
  AppBuilderDetectionDecisionsDecisionIdRoute,
  AppBuilderDetectionDecisionsIndexRoute
};
const AppBuilderDetectionDecisionsRouteWithChildren = AppBuilderDetectionDecisionsRoute._addFileChildren(
  AppBuilderDetectionDecisionsRouteChildren
);
const AppBuilderDetectionListsRouteChildren = {
  AppBuilderDetectionListsListIdRoute,
  AppBuilderDetectionListsIndexRoute
};
const AppBuilderDetectionListsRouteWithChildren = AppBuilderDetectionListsRoute._addFileChildren(
  AppBuilderDetectionListsRouteChildren
);
const AppBuilderDetectionScenariosScenarioIdTestRunRouteChildren = {
  AppBuilderDetectionScenariosScenarioIdTestRunIndexRoute,
  AppBuilderDetectionScenariosScenarioIdTestRunTestRunIdIndexRoute
};
const AppBuilderDetectionScenariosScenarioIdTestRunRouteWithChildren = AppBuilderDetectionScenariosScenarioIdTestRunRoute._addFileChildren(
  AppBuilderDetectionScenariosScenarioIdTestRunRouteChildren
);
const AppBuilderDetectionScenariosScenarioIdIIterationIdEditViewRouteChildren = {
  AppBuilderDetectionScenariosScenarioIdIIterationIdEditViewDecisionRoute,
  AppBuilderDetectionScenariosScenarioIdIIterationIdEditViewRulesRoute,
  AppBuilderDetectionScenariosScenarioIdIIterationIdEditViewTriggerRoute,
  AppBuilderDetectionScenariosScenarioIdIIterationIdEditViewIndexRoute
};
const AppBuilderDetectionScenariosScenarioIdIIterationIdEditViewRouteWithChildren = AppBuilderDetectionScenariosScenarioIdIIterationIdEditViewRoute._addFileChildren(
  AppBuilderDetectionScenariosScenarioIdIIterationIdEditViewRouteChildren
);
const AppBuilderDetectionScenariosScenarioIdIIterationIdRouteChildren = {
  AppBuilderDetectionScenariosScenarioIdIIterationIdEditViewRoute: AppBuilderDetectionScenariosScenarioIdIIterationIdEditViewRouteWithChildren
};
const AppBuilderDetectionScenariosScenarioIdIIterationIdRouteWithChildren = AppBuilderDetectionScenariosScenarioIdIIterationIdRoute._addFileChildren(
  AppBuilderDetectionScenariosScenarioIdIIterationIdRouteChildren
);
const AppBuilderDetectionScenariosScenarioIdRouteChildren = {
  AppBuilderDetectionScenariosScenarioIdHomeRoute,
  AppBuilderDetectionScenariosScenarioIdScheduledExecutionsRoute,
  AppBuilderDetectionScenariosScenarioIdTestRunRoute: AppBuilderDetectionScenariosScenarioIdTestRunRouteWithChildren,
  AppBuilderDetectionScenariosScenarioIdWorkflowRoute,
  AppBuilderDetectionScenariosScenarioIdIndexRoute,
  AppBuilderDetectionScenariosScenarioIdIIterationIdRoute: AppBuilderDetectionScenariosScenarioIdIIterationIdRouteWithChildren
};
const AppBuilderDetectionScenariosScenarioIdRouteWithChildren = AppBuilderDetectionScenariosScenarioIdRoute._addFileChildren(
  AppBuilderDetectionScenariosScenarioIdRouteChildren
);
const AppBuilderDetectionScenariosRouteChildren = {
  AppBuilderDetectionScenariosScenarioIdRoute: AppBuilderDetectionScenariosScenarioIdRouteWithChildren,
  AppBuilderDetectionScenariosIndexRoute
};
const AppBuilderDetectionScenariosRouteWithChildren = AppBuilderDetectionScenariosRoute._addFileChildren(
  AppBuilderDetectionScenariosRouteChildren
);
const AppBuilderDetectionRouteChildren = {
  AppBuilderDetectionAnalyticsRoute: AppBuilderDetectionAnalyticsRouteWithChildren,
  AppBuilderDetectionDecisionsRoute: AppBuilderDetectionDecisionsRouteWithChildren,
  AppBuilderDetectionListsRoute: AppBuilderDetectionListsRouteWithChildren,
  AppBuilderDetectionScenariosRoute: AppBuilderDetectionScenariosRouteWithChildren,
  AppBuilderDetectionIndexRoute
};
const AppBuilderDetectionRouteWithChildren = AppBuilderDetectionRoute._addFileChildren(AppBuilderDetectionRouteChildren);
const AppBuilderScreeningSearchRouteChildren = {
  AppBuilderScreeningSearchIndexRoute
};
const AppBuilderScreeningSearchRouteWithChildren = AppBuilderScreeningSearchRoute._addFileChildren(
  AppBuilderScreeningSearchRouteChildren
);
const AppBuilderSettingsAnalyticsRouteChildren = {
  AppBuilderSettingsAnalyticsFiltersRoute
};
const AppBuilderSettingsAnalyticsRouteWithChildren = AppBuilderSettingsAnalyticsRoute._addFileChildren(
  AppBuilderSettingsAnalyticsRouteChildren
);
const AppBuilderSettingsInboxesRouteChildren = {
  AppBuilderSettingsInboxesInboxIdRoute,
  AppBuilderSettingsInboxesIndexRoute
};
const AppBuilderSettingsInboxesRouteWithChildren = AppBuilderSettingsInboxesRoute._addFileChildren(
  AppBuilderSettingsInboxesRouteChildren
);
const AppBuilderSettingsRouteChildren = {
  AppBuilderSettingsAnalyticsRoute: AppBuilderSettingsAnalyticsRouteWithChildren,
  AppBuilderSettingsApiKeysRoute,
  AppBuilderSettingsAuditLogsRoute,
  AppBuilderSettingsInboxesRoute: AppBuilderSettingsInboxesRouteWithChildren,
  AppBuilderSettingsIpWhitelistingRoute,
  AppBuilderSettingsScenariosRoute,
  AppBuilderSettingsScreeningProvidersRoute,
  AppBuilderSettingsTagsRoute,
  AppBuilderSettingsUsersRoute,
  AppBuilderSettingsWebhooksRoute,
  AppBuilderSettingsIndexRoute,
  AppBuilderSettingsWebhooksWebhookIdRoute
};
const AppBuilderSettingsRouteWithChildren = AppBuilderSettingsRoute._addFileChildren(AppBuilderSettingsRouteChildren);
const AppBuilderTestGraphRouteChildren = {
  AppBuilderTestGraphIndexRoute
};
const AppBuilderTestGraphRouteWithChildren = AppBuilderTestGraphRoute._addFileChildren(AppBuilderTestGraphRouteChildren);
const AppBuilderUserScoringRouteChildren = {
  AppBuilderUserScoringOverviewRoute,
  AppBuilderUserScoringIndexRoute,
  AppBuilderUserScoringRecordTypeVersionRoute
};
const AppBuilderUserScoringRouteWithChildren = AppBuilderUserScoringRoute._addFileChildren(
  AppBuilderUserScoringRouteChildren
);
const AppBuilderRouteChildren = {
  AppBuilderAccountRoute,
  AppBuilderAnalyticsLegacyRoute,
  AppBuilderCasesRoute: AppBuilderCasesRouteWithChildren,
  AppBuilderContinuousScreeningRoute: AppBuilderContinuousScreeningRouteWithChildren,
  AppBuilderDataRoute: AppBuilderDataRouteWithChildren,
  AppBuilderDetectionRoute: AppBuilderDetectionRouteWithChildren,
  AppBuilderScreeningSearchRoute: AppBuilderScreeningSearchRouteWithChildren,
  AppBuilderSettingsRoute: AppBuilderSettingsRouteWithChildren,
  AppBuilderTestGraphRoute: AppBuilderTestGraphRouteWithChildren,
  AppBuilderUserScoringRoute: AppBuilderUserScoringRouteWithChildren,
  AppBuilderUploadObjectTypeRoute,
  AppBuilderClientDetailIndexRoute,
  AppBuilderClientDetailObjectTypeObjectIdRoute
};
const AppBuilderRouteWithChildren = AppBuilderRoute._addFileChildren(
  AppBuilderRouteChildren
);
const AppRouteChildren = {
  AppAuthRoute: AppAuthRouteWithChildren,
  AppBuilderRoute: AppBuilderRouteWithChildren,
  AppOnboardingRoute
};
const AppRouteWithChildren = AppRoute._addFileChildren(AppRouteChildren);
const rootRouteChildren = {
  IndexRoute,
  SplatRoute,
  AppRoute: AppRouteWithChildren,
  AppRouterRoute,
  HealthcheckRoute,
  OidcAuthRoute,
  OidcCallbackRoute,
  RessourcesLocalesRoute,
  RobotsTxtRoute,
  RessourcesDataExportOrgRoute,
  RessourcesCasesDownloadDataCaseIdRoute,
  RessourcesCasesDownloadFileFileIdRoute,
  RessourcesCasesNextUnassignedCaseIdRoute,
  RessourcesListsDownloadCsvFileListIdRoute,
  RessourcesAnnotationsDownloadFileAnnotationIdFileIdRoute,
  RessourcesScreeningsDownloadScreeningIdFileIdRoute,
  RessourcesCasesSarDownloadCaseIdReportIdRoute
};
const routeTree = Route$1Q._addFileChildren(rootRouteChildren)._addFileTypes();
const getNonce = () => getRequestNonce();
const routerI18n = instance.createInstance();
routerI18n.use(initReactI18next).use(resourcesToBackend((language, namespace) => __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "./locales/ar/account.json": () => import("./services-middleware-nMulUXHZ.mjs").then((n2) => n2.dY), "./locales/ar/analytics.json": () => import("./services-middleware-nMulUXHZ.mjs").then((n2) => n2.dZ), "./locales/ar/api.json": () => import("./services-middleware-nMulUXHZ.mjs").then((n2) => n2.d_), "./locales/ar/auth.json": () => import("./services-middleware-nMulUXHZ.mjs").then((n2) => n2.d$), "./locales/ar/cases.json": () => import("./services-middleware-nMulUXHZ.mjs").then((n2) => n2.e0), "./locales/ar/client360.json": () => import("./services-middleware-nMulUXHZ.mjs").then((n2) => n2.e1), "./locales/ar/common.json": () => import("./services-middleware-nMulUXHZ.mjs").then((n2) => n2.e2), "./locales/ar/continuous-screening.json": () => import("./services-middleware-nMulUXHZ.mjs").then((n2) => n2.e3), "./locales/ar/data.json": () => import("./services-middleware-nMulUXHZ.mjs").then((n2) => n2.e4), "./locales/ar/decisions.json": () => import("./services-middleware-nMulUXHZ.mjs").then((n2) => n2.e5), "./locales/ar/filters.json": () => import("./services-middleware-nMulUXHZ.mjs").then((n2) => n2.e6), "./locales/ar/graph.json": () => import("./services-middleware-nMulUXHZ.mjs").then((n2) => n2.e7), "./locales/ar/lists.json": () => import("./services-middleware-nMulUXHZ.mjs").then((n2) => n2.e8), "./locales/ar/navigation.json": () => import("./services-middleware-nMulUXHZ.mjs").then((n2) => n2.e9), "./locales/ar/scenarios.json": () => import("./services-middleware-nMulUXHZ.mjs").then((n2) => n2.ea), "./locales/ar/screening-topics.json": () => import("./services-middleware-nMulUXHZ.mjs").then((n2) => n2.eb), "./locales/ar/screenings.json": () => import("./services-middleware-nMulUXHZ.mjs").then((n2) => n2.ec), "./locales/ar/settings.json": () => import("./services-middleware-nMulUXHZ.mjs").then((n2) => n2.ed), "./locales/ar/upload.json": () => import("./services-middleware-nMulUXHZ.mjs").then((n2) => n2.ee), "./locales/ar/user-scoring.json": () => import("./services-middleware-nMulUXHZ.mjs").then((n2) => n2.ef), "./locales/ar/workflows.json": () => import("./services-middleware-nMulUXHZ.mjs").then((n2) => n2.eg), "./locales/en/account.json": () => import("./services-middleware-nMulUXHZ.mjs").then((n2) => n2.eh), "./locales/en/analytics.json": () => import("./services-middleware-nMulUXHZ.mjs").then((n2) => n2.ei), "./locales/en/api.json": () => import("./services-middleware-nMulUXHZ.mjs").then((n2) => n2.ej), "./locales/en/auth.json": () => import("./services-middleware-nMulUXHZ.mjs").then((n2) => n2.ek), "./locales/en/cases.json": () => import("./services-middleware-nMulUXHZ.mjs").then((n2) => n2.el), "./locales/en/client360.json": () => import("./services-middleware-nMulUXHZ.mjs").then((n2) => n2.em), "./locales/en/common.json": () => import("./services-middleware-nMulUXHZ.mjs").then((n2) => n2.en), "./locales/en/continuous-screening.json": () => import("./services-middleware-nMulUXHZ.mjs").then((n2) => n2.eo), "./locales/en/data.json": () => import("./services-middleware-nMulUXHZ.mjs").then((n2) => n2.ep), "./locales/en/decisions.json": () => import("./services-middleware-nMulUXHZ.mjs").then((n2) => n2.eq), "./locales/en/filters.json": () => import("./services-middleware-nMulUXHZ.mjs").then((n2) => n2.er), "./locales/en/graph.json": () => import("./services-middleware-nMulUXHZ.mjs").then((n2) => n2.es), "./locales/en/lists.json": () => import("./services-middleware-nMulUXHZ.mjs").then((n2) => n2.et), "./locales/en/navigation.json": () => import("./services-middleware-nMulUXHZ.mjs").then((n2) => n2.eu), "./locales/en/scenarios.json": () => import("./services-middleware-nMulUXHZ.mjs").then((n2) => n2.ev), "./locales/en/screening-topics.json": () => import("./services-middleware-nMulUXHZ.mjs").then((n2) => n2.ew), "./locales/en/screenings.json": () => import("./services-middleware-nMulUXHZ.mjs").then((n2) => n2.ex), "./locales/en/settings.json": () => import("./services-middleware-nMulUXHZ.mjs").then((n2) => n2.ey), "./locales/en/upload.json": () => import("./services-middleware-nMulUXHZ.mjs").then((n2) => n2.ez), "./locales/en/user-scoring.json": () => import("./services-middleware-nMulUXHZ.mjs").then((n2) => n2.eA), "./locales/en/workflows.json": () => import("./services-middleware-nMulUXHZ.mjs").then((n2) => n2.eB), "./locales/fr/account.json": () => import("./services-middleware-nMulUXHZ.mjs").then((n2) => n2.eC), "./locales/fr/analytics.json": () => import("./services-middleware-nMulUXHZ.mjs").then((n2) => n2.eD), "./locales/fr/api.json": () => import("./services-middleware-nMulUXHZ.mjs").then((n2) => n2.eE), "./locales/fr/auth.json": () => import("./services-middleware-nMulUXHZ.mjs").then((n2) => n2.eF), "./locales/fr/cases.json": () => import("./services-middleware-nMulUXHZ.mjs").then((n2) => n2.eG), "./locales/fr/client360.json": () => import("./services-middleware-nMulUXHZ.mjs").then((n2) => n2.eH), "./locales/fr/common.json": () => import("./services-middleware-nMulUXHZ.mjs").then((n2) => n2.eI), "./locales/fr/continuous-screening.json": () => import("./services-middleware-nMulUXHZ.mjs").then((n2) => n2.eJ), "./locales/fr/data.json": () => import("./services-middleware-nMulUXHZ.mjs").then((n2) => n2.eK), "./locales/fr/decisions.json": () => import("./services-middleware-nMulUXHZ.mjs").then((n2) => n2.eL), "./locales/fr/filters.json": () => import("./services-middleware-nMulUXHZ.mjs").then((n2) => n2.eM), "./locales/fr/graph.json": () => import("./services-middleware-nMulUXHZ.mjs").then((n2) => n2.eN), "./locales/fr/lists.json": () => import("./services-middleware-nMulUXHZ.mjs").then((n2) => n2.eO), "./locales/fr/navigation.json": () => import("./services-middleware-nMulUXHZ.mjs").then((n2) => n2.eP), "./locales/fr/scenarios.json": () => import("./services-middleware-nMulUXHZ.mjs").then((n2) => n2.eQ), "./locales/fr/screening-topics.json": () => import("./services-middleware-nMulUXHZ.mjs").then((n2) => n2.eR), "./locales/fr/screenings.json": () => import("./services-middleware-nMulUXHZ.mjs").then((n2) => n2.eS), "./locales/fr/settings.json": () => import("./services-middleware-nMulUXHZ.mjs").then((n2) => n2.eT), "./locales/fr/upload.json": () => import("./services-middleware-nMulUXHZ.mjs").then((n2) => n2.eU), "./locales/fr/user-scoring.json": () => import("./services-middleware-nMulUXHZ.mjs").then((n2) => n2.eV), "./locales/fr/workflows.json": () => import("./services-middleware-nMulUXHZ.mjs").then((n2) => n2.eW) }), `./locales/${language}/${namespace}.json`, 4))).init({
  lng: "en",
  fallbackLng: "en",
  ns: ALL_NAMESPACES
});
function getRouter() {
  const rqContext = getContext();
  const router2 = createRouter({
    routeTree,
    context: {
      ...rqContext,
      i18n: routerI18n
    },
    scrollRestoration: true,
    // Start route loaders on hover/focus so data is usually ready by click time,
    // hiding loader RPC latency behind the intent-to-click gap.
    defaultPreload: "intent",
    ssr: {
      nonce: getNonce()
    },
    Wrap: (props) => {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(I18nextProvider, { i18n: routerI18n, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Provider, { ...rqContext, children: props.children }) });
    }
  });
  setupRouterSsrQueryIntegration({
    router: router2,
    queryClient: rqContext.queryClient
  });
  router2.serverSsr?.onCleanup(() => {
    rqContext.queryClient.clear();
  });
  return router2;
}
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  $o as $,
  AgnosticNavigationContext as A,
  BreadCrumbs as B,
  CaseStatusBadgeV2 as C,
  DateRangeFilter as D,
  ErrorComponent as E,
  Route$1e as F,
  handle as G,
  Route$19 as H,
  screeningsI18n as I,
  TooltipV2 as J,
  Route$16 as K,
  Link as L,
  Route$13 as M,
  Route$12 as N,
  DEFAULT_LIMIT as O,
  Page as P,
  Route$10 as Q,
  Route$1J as R,
  Route$$ as S,
  Tooltip as T,
  Route$_ as U,
  Route$Z as V,
  Route$Y as W,
  Route$X as X,
  Route$V as Y,
  useLoaderData as Z,
  CaseDueDateUrgencyTag as _,
  useLocation as a,
  getRuleSnoozeFn as a$,
  Route$L as a0,
  BackButton as a1,
  Route$K as a2,
  Route$J as a3,
  Route$H as a4,
  adaptFilterValues as a5,
  toSubmittedDecisionFilters as a6,
  e as a7,
  emptyDecisionFilters as a8,
  Route$G as a9,
  Route$s as aA,
  toggleScenarioDeduplicationFn as aB,
  Route$q as aC,
  useDetectionScenarioData as aD,
  createTestRunFn as aE,
  createDraftIterationFn as aF,
  TriggerObjectTag as aG,
  Route$p as aH,
  Route$n as aI,
  Route$k as aJ,
  Route$i as aK,
  Route$h as aL,
  getIterationRulesFn as aM,
  Route$g as aN,
  getFormattedArchived as aO,
  getFormattedLive as aP,
  ScenarioIterationMenu as aQ,
  Route$f as aR,
  Route$e as aS,
  Route$d as aT,
  Route$b as aU,
  Route$9 as aV,
  deactivateIterationFn as aW,
  activateIterationFn as aX,
  commitIterationFn as aY,
  prepareIterationFn as aZ,
  getPublicationPreparationStatusFn as a_,
  getDecisionFilters as aa,
  buildQueryParams as ab,
  defaultSerializeError as ac,
  filtersI18n as ad,
  ScreeningStatusTag as ae,
  Route$F as af,
  generateFlatEvaluation as ag,
  validateAstFn as ah,
  getBuilderOptionsFn as ai,
  scenarioI18n as aj,
  Route$E as ak,
  Route$D as al,
  archiveScenarioFn as am,
  copyScenarioFn as an,
  createScenarioFn as ao,
  unarchiveScenarioFn as ap,
  Route$C as aq,
  getFormattedVersion as ar,
  updateScenarioFn as as,
  Route$A as at,
  Route$z as au,
  Route$y as av,
  Route$x as aw,
  buildPayloadAccessorsFromDataModel as ax,
  buildDatabaseAccessorsFromDataModel as ay,
  Route$w as az,
  authI18n as b,
  useDetectionScenarioIterationData as b0,
  Route$8 as b1,
  VersionSelect as b2,
  cancelTestRunFn as b3,
  Route$7 as b4,
  Route$5 as b5,
  dataI18n as b6,
  Route$2 as b7,
  createScreeningRuleFn as b8,
  getIterationRuleFn as b9,
  createRuleFn as ba,
  getRuleDescriptionFn as bb,
  deleteRuleFn as bc,
  duplicateRuleFn as bd,
  generateAstFn as be,
  getRuleCatalogFn as bf,
  deleteScreeningRuleFn as bg,
  Route$1 as bh,
  useDerivedIterationRuleGroupsData as bi,
  saveTriggerFn as bj,
  Route2 as bk,
  router as bl,
  Route$1I as c,
  useCsrfToken as d,
  AppConfigContext as e,
  Route$1C as f,
  getDefaultState as g,
  Route$1A as h,
  Route$1z as i,
  useBuilderLayoutData as j,
  Route$1x as k,
  logosSVGSpriteHref as l,
  Route$1w as m,
  Route$1u as n,
  Route$1r as o,
  pageLayoutGutter as p,
  Route$1q as q,
  Route$1p as r,
  Route$1k as s,
  Route$1i as t,
  useNavigate as u,
  clientDetailLinkParams as v,
  Route$1h as w,
  useAgnosticNavigation as x,
  Route$1f as y,
  DefaultTooltip as z
};

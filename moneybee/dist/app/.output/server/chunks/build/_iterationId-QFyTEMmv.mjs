import { R as React, Q as jsxRuntimeExports, ag as Outlet } from "./server.mjs";
import { a as useLocation, aD as useDetectionScenarioData, aO as getFormattedArchived, aP as getFormattedLive, ar as getFormattedVersion, aQ as ScenarioIterationMenu, aR as Route$f } from "./router-KSC-NEr8.mjs";
import { E as EditorModeContextProvider } from "./editor-mode-D7ckZpf3.mjs";
import { u as useTranslation, g as useFormatLanguage, X as formatDateRelative, I as Icon } from "./Tabs-CzpyUi7T.mjs";
import { f as fromUUIDtoSUUID } from "./short-uuid-fTZYJj_k.mjs";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "./query-BmG5BEas.mjs";
import "./security-headers.server-BdP3HrPp.mjs";
import "./services-middleware-nMulUXHZ.mjs";
import "node:crypto";
import "./ThemeContext-DjRULCu0.mjs";
import "./config--RFGchua.mjs";
import "./i18n-instance-store-UssbGYOM.mjs";
import "./auth-middleware-eNRVfU3l.mjs";
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
import "./data-model-feature-access-D7XsjRz2.mjs";
import "./feature-access-BSdB6UiC.mjs";
import "./datetime-insWKNBy.mjs";
import "./formatDistanceStrict-DEEeAR-Y.mjs";
import "./create-context-k6HmQ6bB.mjs";
import "./case-detail-middleware-iDVIrW-c.mjs";
import "./inboxes-D556s0BB.mjs";
import "./input-validation-D4mgQsey.mjs";
import "./async-C3pYACua.mjs";
import "./coerce-UidCu_Sb.mjs";
import "./files-fO9wUXBf.mjs";
import "./decisions--eKWwSYj.mjs";
import "./unique-cniTya2T.mjs";
import "./graph-pivots-Bblee9BN.mjs";
import "./scenarios-C5R2TE8p.mjs";
import "./use-callback-ref-DoQNLci-.mjs";
import "./sharpstate.es-C0BW2AZi.mjs";
function CurrentScenarioIterationProvider() {
  const {
    editorMode,
    scenarioIteration
  } = Route$f.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(EditorModeContextProvider, { value: editorMode, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}, scenarioIteration.id) });
}
function VersionSelect({
  currentIteration,
  scenarioIterations
}) {
  const {
    t
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
    formattedVersion: getFormattedVersion(si, t),
    formattedLive: getFormattedLive(si, t),
    formattedArchived: getFormattedArchived(si, t),
    formattedUpdatedAt: formatDateRelative(si.updatedAt, {
      language
    })
  })), [currentIteration.id, language, location.pathname, scenarioIterations, t]);
  const currentFormattedVersion = getFormattedVersion(currentIteration, t);
  const currentFormattedLive = getFormattedLive(currentIteration, t);
  const currentFormattedArchived = getFormattedArchived(currentIteration, t);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ScenarioIterationMenu, { labelledScenarioIteration, scenario: currentScenario, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", className: "text-s text-purple-primary border-purple-border focus:border-purple-primary flex items-center rounded-full border py-xs px-sm gap-xs outline-hidden font-normal", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex gap-xs", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "capitalize", children: currentFormattedVersion }),
      currentFormattedLive ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-purple-primary capitalize font-bold", children: currentFormattedLive }) : null,
      currentFormattedArchived ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-grey-secondary capitalize", children: currentFormattedArchived }) : null
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { "aria-hidden": true, icon: "caret-down", className: "size-6 shrink-0" })
  ] }) });
}
export {
  VersionSelect,
  CurrentScenarioIterationProvider as component
};

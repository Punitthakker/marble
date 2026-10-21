import { a2 as useMatches, Q as jsxRuntimeExports, ag as Outlet } from "./server.mjs";
import { d as cn, u as useTranslation, S as Typo, al as Tabs, am as tabClassName } from "./Tabs-CzpyUi7T.mjs";
import { o as Route$1r, P as Page, p as pageLayoutGutter, L as Link } from "./router-KSC-NEr8.mjs";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "./services-middleware-nMulUXHZ.mjs";
import "./short-uuid-fTZYJj_k.mjs";
import "node:crypto";
import "./use-callback-ref-DoQNLci-.mjs";
import "./sharpstate.es-C0BW2AZi.mjs";
import "./formatDistanceStrict-DEEeAR-Y.mjs";
import "./query-BmG5BEas.mjs";
import "./security-headers.server-BdP3HrPp.mjs";
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
const sectionTKeys = {
  api: "settings:api",
  users: "settings:users",
  scenarios: "settings:scenarios",
  case_manager: "settings:case_manager",
  audit: "settings:audit",
  ip_whitelisting: "settings:ip_whitelisting",
  screening_providers: "settings:screening_providers"
};
function SettingsNavigationTabs({ sections }) {
  const { t } = useTranslation(["navigation", "settings"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Typo, { variant: "title1", children: t("navigation:settings") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Tabs, { children: Object.keys(sections).map((sectionKey) => {
      const { settings } = sections[sectionKey];
      if (settings.length === 0) return null;
      const firstSetting = settings[0];
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: firstSetting.to, className: tabClassName, children: t(sectionTKeys[sectionKey]) }, sectionKey);
    }) })
  ] });
}
function Settings() {
  const {
    sections
  } = Route$1r.useLoaderData();
  const matches = useMatches();
  const hideTabs = matches.some((m) => m.staticData?.hideTabs);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Page.Main, { children: [
    hideTabs ? null : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn(pageLayoutGutter.paddingX, pageLayoutGutter.paddingTop, "pb-0"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(SettingsNavigationTabs, { sections }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {})
  ] });
}
export {
  Settings as component
};

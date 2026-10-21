import { Q as jsxRuntimeExports } from "./server.mjs";
import { L as Link } from "./router-KSC-NEr8.mjs";
import { u as useTranslation, S as Typo, al as Tabs, am as tabClassName } from "./Tabs-CzpyUi7T.mjs";
function DetectionNavigationTabs({ actions }) {
  const { t } = useTranslation(["navigation"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Typo, { variant: "title1", children: t("navigation:detection") }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/detection/scenarios", className: tabClassName, children: t("navigation:scenarios") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/detection/lists", className: tabClassName, children: t("navigation:lists") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/detection/analytics", className: tabClassName, children: t("navigation:analytics") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/detection/decisions", className: tabClassName, children: t("navigation:decisions") })
      ] }),
      actions
    ] })
  ] });
}
export {
  DetectionNavigationTabs as D
};

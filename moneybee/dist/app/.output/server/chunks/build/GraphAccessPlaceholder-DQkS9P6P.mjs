import { Q as jsxRuntimeExports } from "./server.mjs";
import { u as useTranslation, I as Icon } from "./Tabs-CzpyUi7T.mjs";
function GraphAccessPlaceholder() {
  const { t } = useTranslation(["graph", "common"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-purple-border bg-purple-background-light flex flex-col items-center justify-center gap-sm rounded-lg border p-md py-sm text-center min-h-0 flex-1 max-h-min", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "comet", className: "size-10 shrink-0" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs", children: t("graph:access.title") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "a",
      {
        href: "https://checkmarble.com/upgrade",
        target: "_blank",
        rel: "noreferrer",
        className: "border-purple-primary text-purple-primary text-xs font-medium w-full max-w-56 rounded-lg border py-xs text-center hover:bg-purple-primary/10 transition-colors",
        children: t("graph:access.upgrade")
      }
    )
  ] });
}
export {
  GraphAccessPlaceholder as G
};

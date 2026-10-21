import { Q as jsxRuntimeExports } from "./server.mjs";
import { u as useTranslation, S as Typo, al as Tabs, am as tabClassName, d as cn } from "./Tabs-CzpyUi7T.mjs";
import { L as Link } from "./router-KSC-NEr8.mjs";
const classNameHeader = "font-semibold border-b border-grey-border";
const Table = ({ className, children }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("grid border border-grey-border rounded-lg bg-surface-card", className), children });
};
const TableRow = ({ className, children, isHeader, ...props }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: cn(
        "group/row grid grid-cols-subgrid col-span-full items-center",
        isHeader && classNameHeader,
        className
      ),
      ...props,
      children
    }
  );
};
const TableCell = ({ className, children }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("p-md flex gap-sm items-center", className), children });
};
const GridTable = {
  Table,
  Row: TableRow,
  Cell: TableCell
};
function ScreeningNavigationTabs({ actions }) {
  const { t } = useTranslation(["navigation", "screenings"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Typo, { variant: "title1", children: t("navigation:continuous_screening") }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/continuous-screening/configurations", className: tabClassName, children: t("screenings:navigation.configurations") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/continuous-screening/observability", className: tabClassName, children: t("screenings:navigation.observability") })
      ] }),
      actions
    ] })
  ] });
}
export {
  GridTable as G,
  ScreeningNavigationTabs as S
};

import { Q as jsxRuntimeExports } from "./server.mjs";
import { w as getPivotObjectKey } from "./services-middleware-nMulUXHZ.mjs";
import { L as Link } from "./router-KSC-NEr8.mjs";
import { u as useTranslation } from "./Tabs-CzpyUi7T.mjs";
function PivotTabs({ pivots, numberedFrom = pivots, to }) {
  const { t } = useTranslation(["cases"]);
  if (pivots.length <= 1) return null;
  const orderedKeys = numberedFrom.map(getPivotObjectKey);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-lg flex shrink-0 gap-sm", children: pivots.map((pivot) => {
    const pivotValue = getPivotObjectKey(pivot);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        className: "px-sm h-8 rounded-md border border-grey-border flex items-center aria-[current=page]:border-purple-primary",
        from: "/cases/s/$caseId/",
        to,
        params: { pivotValue },
        children: t("cases:case_manager.client_panel.label", { index: orderedKeys.indexOf(pivotValue) + 1 })
      },
      pivotValue
    );
  }) });
}
export {
  PivotTabs as P
};

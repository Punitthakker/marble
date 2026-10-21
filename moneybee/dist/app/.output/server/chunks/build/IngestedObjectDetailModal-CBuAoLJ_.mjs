import { Q as jsxRuntimeExports } from "./server.mjs";
import { G as isNotFoundHttpError } from "./services-middleware-nMulUXHZ.mjs";
import { u as useObjectDetailsQuery, g as DataFields } from "./DataField-BczNbAhi.mjs";
import { u as useTranslation } from "./Tabs-CzpyUi7T.mjs";
import { M as Modal } from "./Modal-CpYmGWjB.mjs";
function IngestedObjectDetailModal({
  dataModel,
  tableName,
  objectId,
  onClose
}) {
  const { t } = useTranslation(["data"]);
  const { data: object, isPending, error } = useObjectDetailsQuery(tableName, objectId);
  if (isPending) {
    return null;
  }
  const noObjectFound = isNotFoundHttpError(error);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Modal.Root,
    {
      open: true,
      onOpenChange: (isOpen) => {
        if (!isOpen) onClose();
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal.Content, { size: "large", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.Title, { children: tableName }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-y-auto max-h-[calc(100vh-140px)]", children: object && !noObjectFound ? /* @__PURE__ */ jsxRuntimeExports.jsx(DataFields, { table: tableName, object, options: { hideLinks: true } }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-md text-center", children: t("data:viewer.no_object_found", { tableName, objectId }) }) })
      ] })
    }
  );
}
export {
  IngestedObjectDetailModal as I
};

import { Q as jsxRuntimeExports, M as reactExports } from "./server.mjs";
import { a2 as M, bv as getDataTypeIcon } from "./services-middleware-nMulUXHZ.mjs";
import { I as Icon, d as cn } from "./Tabs-CzpyUi7T.mjs";
const dataTypeOptions = [
  { value: "String", labelKey: "String" },
  { value: "Timestamp", labelKey: "Timestamp" },
  { value: "Float", labelKey: "Number" },
  { value: "Bool", labelKey: "Boolean" },
  { value: "Coords", labelKey: "GPS Coords" },
  { value: "IpAddress", labelKey: "IP Address" }
];
function DatatypeOption({
  dataType,
  label,
  size = "medium"
}) {
  const labelKey = label ?? dataTypeOptions.find((opt) => opt.value === dataType)?.labelKey ?? dataType;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DatatypeIcon, { dataType, size }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: labelKey })
  ] });
}
function DatatypeIcon({ dataType, size = "medium" }) {
  const labelKey = dataTypeOptions.find((opt) => opt.value === dataType)?.labelKey;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      className: cn(
        "text-grey-secondary bg-grey-background grid shrink-0 place-items-center rounded",
        size === "small" ? "p-xs" : "p-sm"
      ),
      title: labelKey,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: getDataTypeIcon(dataType) ?? "string", className: size === "small" ? "size-3" : "size-4" })
    }
  );
}
function useDatatypeOptions() {
  return reactExports.useMemo(
    () => dataTypeOptions.map((opt) => ({
      label: /* @__PURE__ */ jsxRuntimeExports.jsx(DatatypeOption, { dataType: opt.value }),
      value: opt.value
    })),
    []
  );
}
function DatatypeToPrimitiveType(dataType) {
  return M(dataType).with("Timestamp", "Timestamp[]", () => "Timestamp").with("String", "String[]", () => "String").with("Float", "Float[]", () => "Float").with("Bool", "Bool[]", () => "Bool").with("Coords", "Coords[]", () => "Coords").with("IpAddress", "IpAddress[]", () => "IpAddress").with("Int", "Int[]", () => "Int").otherwise(() => "String");
}
export {
  DatatypeIcon as D,
  DatatypeToPrimitiveType as a,
  DatatypeOption as b,
  useDatatypeOptions as u
};

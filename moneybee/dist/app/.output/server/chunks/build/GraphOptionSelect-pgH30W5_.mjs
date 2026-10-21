import { M as reactExports, Q as jsxRuntimeExports } from "./server.mjs";
import { b as DatatypeOption, a as DatatypeToPrimitiveType } from "./DatatypeOption-CVRIpFKg.mjs";
import { M as MenuCommand, d as cn, u as useTranslation } from "./Tabs-CzpyUi7T.mjs";
import { T as Tag } from "./create-context-k6HmQ6bB.mjs";
function OptionLabel({ option, fallback }) {
  if (!option) return fallback;
  if (!option.dataType) return option.label;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(DatatypeOption, { dataType: DatatypeToPrimitiveType(option.dataType), label: option.label, size: "small" });
}
function SemanticTypeTag({ semanticType }) {
  const { t } = useTranslation(["data"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { color: "grey", size: "xs", className: "shrink-0", children: t(`data:upload_data.field_semantic.${semanticType}`) });
}
function GraphOptionSelect({
  value,
  options,
  placeholder,
  onChange,
  disabled,
  size,
  className
}) {
  const [open, setOpen] = reactExports.useState(false);
  const selected = options.find((option) => option.value === value);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(MenuCommand.Menu, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Trigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(MenuCommand.SelectButton, { className: cn("gap-sm", className), size, disabled, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(OptionLabel, { option: selected, fallback: value || placeholder }),
      selected?.semanticType ? /* @__PURE__ */ jsxRuntimeExports.jsx(SemanticTypeTag, { semanticType: selected.semanticType }) : null
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Content, { sameWidth: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.List, { children: options.map((option) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      MenuCommand.Item,
      {
        value: option.value,
        onSelect: () => {
          onChange(option.value);
          setOpen(false);
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(OptionLabel, { option }),
          option.semanticType ? /* @__PURE__ */ jsxRuntimeExports.jsx(SemanticTypeTag, { semanticType: option.semanticType }) : null
        ]
      },
      option.value
    )) }) })
  ] });
}
export {
  GraphOptionSelect as G
};

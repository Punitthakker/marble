import { M as reactExports, Q as jsxRuntimeExports } from "./server.mjs";
import { u as useDebouncedCallbackRef } from "./use-debounced-callback-ref-CXwcVZ7S.mjs";
import { B as Button, I as Icon, M as MenuCommand, d as cn } from "./Tabs-CzpyUi7T.mjs";
import { T as Tag } from "./create-context-k6HmQ6bB.mjs";
function TagList({ tags, value, editable, align = "start", ...rest }) {
  const [open, setOpen] = reactExports.useState(false);
  const [internalValue, setInternalValue] = reactExports.useState(value);
  reactExports.useEffect(() => {
    setInternalValue(value);
  }, [value]);
  const debouncedOnChange = useDebouncedCallbackRef(rest.onChange, rest.debounceDelay ?? 300);
  const handleClick = () => {
    setOpen((o) => !o);
  };
  const handleSelect = (tag) => {
    const tagsIds = internalValue.includes(tag.id) ? internalValue.filter((tagId) => tagId !== tag.id) : [...internalValue, tag.id];
    setInternalValue(tagsIds);
    debouncedOnChange?.(tagsIds);
  };
  const anchor = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-xs items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(ListContainer, { tags, value: internalValue, onClick: handleClick }),
    editable ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Button,
      {
        variant: "secondary",
        appearance: "link",
        mode: internalValue.length > 0 ? "icon" : "normal",
        onClick: handleClick,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "plus", className: "size-4" }),
          internalValue.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: rest.placeholder }) : null
        ]
      }
    ) : null
  ] });
  return !editable ? anchor : /* @__PURE__ */ jsxRuntimeExports.jsxs(MenuCommand.Menu, { persistOnSelect: true, open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Anchor, { children: anchor }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Content, { sideOffset: 4, align, className: "min-w-[16rem]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.List, { children: tags.map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsxs(MenuCommand.Item, { onSelect: () => handleSelect(tag), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { children: tag.name }),
      internalValue.includes(tag.id) ? /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "tick", className: "size-4" }) : null
    ] }, tag.id)) }) })
  ] });
}
function ListContainer({ tags, value, onClick }) {
  const valueTags = value.map((id) => tags.find((t) => t.id === id)).filter(Boolean);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("flex gap-xs", { "cursor-pointer": !!onClick, hidden: value.length === 0 }), children: valueTags.map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { tabIndex: 0, onClick, children: tag.name }, tag.id)) });
}
export {
  TagList as T
};

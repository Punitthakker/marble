import { Q as jsxRuntimeExports } from "./server.mjs";
import { C as Content, R as Root, T as Trigger } from "./index-22HmyALM.mjs";
import { d as cn, I as Icon, j as cva } from "./Tabs-CzpyUi7T.mjs";
const HeadlessCollapsibleRoot = Root;
const HeadlessCollapsibleTrigger = Trigger;
const CollapsibleContainer = function CollapsibleContainer2({
  ref,
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    HeadlessCollapsibleRoot,
    {
      defaultOpen: true,
      ref,
      className: cn("border-grey-border flex w-full flex-col overflow-hidden rounded-lg border", className),
      ...props
    }
  );
};
const collapsibleSize = {
  default: "p-md lg:p-lg",
  small: "p-md",
  xs: "p-xs",
  null: "p-0"
};
const collapsibleTitle = cva("group flex cursor-pointer items-center justify-between gap-md font-semibold", {
  variants: {
    size: collapsibleSize
  },
  defaultVariants: {
    size: "default"
  }
});
const collapsibleContent = cva("", {
  variants: {
    size: collapsibleSize
  },
  defaultVariants: {
    size: "default"
  }
});
const CollapsibleTitle = function CollapsibleTitle2({
  ref,
  className,
  children,
  size,
  iconPosition = "right",
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(HeadlessCollapsibleTrigger, { ref, className: collapsibleTitle({ size, className }), asChild: true, ...props, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: cn(
        "focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-purple-primary",
        iconPosition === "left" && "grid grid-cols-[auto_1fr]"
      ),
      children: [
        iconPosition === "left" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Icon,
            {
              icon: "smallarrow-up",
              "aria-hidden": true,
              className: " group-radix-state-open:rotate-180 size-6 rounded-sm  transition-transform duration-200 self-start"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children })
        ] }) : children,
        iconPosition === "right" && /* @__PURE__ */ jsxRuntimeExports.jsx(
          Icon,
          {
            icon: "smallarrow-up",
            "aria-hidden": true,
            className: "border-grey-border group-radix-state-open:rotate-180 size-6 rounded-sm border transition-transform duration-200"
          }
        )
      ]
    }
  ) });
};
const content = "border-grey-border border-t radix-state-open:animate-slide-down radix-state-closed:animate-slide-up overflow-hidden";
const CollapsibleContent = function CollapsibleContent2({
  ref,
  children,
  className,
  size,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Content, { className: cn(content, className), ...props, ref, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: collapsibleContent({ size }), children }) });
};
const Collapsible = {
  Container: CollapsibleContainer,
  Title: CollapsibleTitle,
  Content: CollapsibleContent
};
export {
  Collapsible as C
};

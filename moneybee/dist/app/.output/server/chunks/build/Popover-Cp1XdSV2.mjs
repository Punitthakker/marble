import { Q as jsxRuntimeExports } from "./server.mjs";
import { as as Popover$1, at as PopoverTrigger, au as PopoverPortal, av as PopoverContent$1, d as cn, aw as PopoverAnchor, U as StickyComponent } from "./Tabs-CzpyUi7T.mjs";
const PopoverContent = function PopoverContent2({
  ref,
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PopoverPortal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    PopoverContent$1,
    {
      ref,
      ...props,
      className: cn(
        className,
        "bg-surface-card border-grey-border z-50 flex max-h-[min(var(--radix-popover-content-available-height),800px)] flex-col overflow-x-hidden overflow-y-auto rounded-sm border text-xs shadow-lg"
      ),
      children
    }
  ) });
};
function PopoverFooter({ children, className }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(StickyComponent, { inFlow: "after", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: cn(
        "sticky bottom-0 z-10 border-t border-transparent bg-surface-card flex justify-end gap-sm p-md sentinel-intersect:border-t-grey-border sentinel-intersect:shadow-sticky-bottom",
        className
      ),
      children
    }
  ) });
}
const Popover = {
  Root: Popover$1,
  Anchor: PopoverAnchor,
  Trigger: PopoverTrigger,
  Content: PopoverContent,
  Footer: PopoverFooter
};
export {
  Popover as P
};

import { Q as jsxRuntimeExports } from "./server.mjs";
import { I as Icon, d as cn, j as cva } from "./Tabs-CzpyUi7T.mjs";
const iconColorClassName = {
  grey: "text-grey-primary",
  purple: "text-purple-primary",
  red: "text-red-primary",
  orange: "text-orange-primary",
  yellow: "text-yellow-primary"
};
const callout = cva("text-s grid grid-cols-[2px_1fr] rounded-md font-normal overflow-hidden", {
  variants: {
    /**
     * Outlined variant is usefull when you want to use the callout on non white background
     * @default soft
     */
    variant: {
      outlined: "bg-surface-card border-grey-border border",
      soft: "bg-grey-background-light"
    },
    bordered: {
      true: "border border-grey-border",
      false: null
    }
  }
});
const calloutBorder = cva("w-0.5", {
  variants: {
    color: {
      grey: "bg-grey-border",
      purple: "bg-purple-primary",
      red: "bg-red-primary",
      orange: "bg-orange-primary",
      yellow: "bg-yellow-primary"
    }
  }
});
function Callout({
  children,
  className,
  color = "purple",
  variant = "soft",
  bordered,
  icon = "lightbulb",
  iconColor = "grey",
  ...otherProps
}) {
  if (!children) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: callout({ variant, className, bordered }), ...otherProps, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: calloutBorder({ color }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-row items-center gap-sm p-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon, className: cn("size-4 shrink-0", iconColorClassName[iconColor ?? "grey"]) }),
      children
    ] })
  ] });
}
function CalloutV2({ children, className, ...otherProps }) {
  if (!children) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "aside",
    {
      className: cn(
        "bg-purple-background-light text-s text-purple-primary flex flex-row gap-sm rounded-lg p-md font-normal items-center dark:text-grey-primary",
        className
      ),
      ...otherProps,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "tip", className: "size-4 shrink-0" }),
        children
      ]
    }
  );
}
export {
  CalloutV2 as C,
  Callout as a
};

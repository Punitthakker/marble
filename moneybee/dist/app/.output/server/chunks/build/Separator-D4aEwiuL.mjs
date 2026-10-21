import { Q as jsxRuntimeExports, M as reactExports } from "./server.mjs";
import { c as clsx, P as Primitive } from "./Tabs-CzpyUi7T.mjs";
var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var DEFAULT_ORIENTATION = "horizontal";
var ORIENTATIONS = ["horizontal", "vertical"];
var Separator$1 = /* @__PURE__ */ reactExports.forwardRef(
  /* @__PURE__ */ __name(function Separator2(props, forwardedRef) {
    const { decorative, orientation: orientationProp = DEFAULT_ORIENTATION, ...domProps } = props;
    const orientation = isValidOrientation(orientationProp) ? orientationProp : DEFAULT_ORIENTATION;
    const ariaOrientation = orientation === "vertical" ? orientation : void 0;
    const semanticProps = decorative ? { role: "none" } : { "aria-orientation": ariaOrientation, role: "separator" };
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.div,
      {
        "data-orientation": orientation,
        ...semanticProps,
        ...domProps,
        ref: forwardedRef
      }
    );
  }, "Separator")
);
function isValidOrientation(orientation) {
  return ORIENTATIONS.includes(orientation);
}
__name(isValidOrientation, "isValidOrientation");
function Separator({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Separator$1,
    {
      className: clsx(
        "radix-orientation-horizontal:h-px radix-orientation-horizontal:w-full",
        "radix-orientation-vertical:w-px radix-orientation-vertical:h-full",
        className
      ),
      ...props
    }
  );
}
export {
  Separator as S
};

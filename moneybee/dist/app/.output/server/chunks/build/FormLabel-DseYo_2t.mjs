import { Q as jsxRuntimeExports, M as reactExports } from "./server.mjs";
import { d as cn, P as Primitive } from "./Tabs-CzpyUi7T.mjs";
var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var Label = /* @__PURE__ */ reactExports.forwardRef(
  /* @__PURE__ */ __name(function Label2(props, forwardedRef) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.label,
      {
        ...props,
        ref: forwardedRef,
        onMouseDown: (event) => {
          const target = event.target;
          if (target.closest("button, input, select, textarea")) return;
          props.onMouseDown?.(event);
          if (!event.defaultPrevented && event.detail > 1) event.preventDefault();
        }
      }
    );
  }, "Label")
);
var Root = Label;
const FormLabel = function FormLabel2({
  ref,
  className,
  valid,
  name,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Root,
    {
      ref,
      htmlFor: name,
      className: cn(className, {
        "text-red-primary": valid !== void 0 && !valid
      }),
      ...props
    }
  );
};
export {
  FormLabel as F
};

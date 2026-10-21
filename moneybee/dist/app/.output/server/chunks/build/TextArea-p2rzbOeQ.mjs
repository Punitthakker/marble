import { M as reactExports, Q as jsxRuntimeExports } from "./server.mjs";
import { c as clsx, j as cva } from "./Tabs-CzpyUi7T.mjs";
const textarea = cva(
  "text-s text-grey-primary placeholder:text-grey-disabled disabled:bg-grey-background read-only:bg-grey-background-light read-only:border-transparent rounded-sm p-sm font-medium outline-hidden border focus:not-read-only:border-purple-primary row-start-1 row-end-2 col-start-1 col-end-2",
  {
    variants: {
      borderColor: {
        "greyfigma-90": "border-grey-border",
        "redfigma-87": "border-red-secondary",
        "redfigma-47": "border-red-primary"
      },
      resize: {
        none: "resize-none",
        both: "resize",
        horizontal: "resize-x",
        vertical: "resize-y"
      }
    },
    defaultVariants: {
      borderColor: "greyfigma-90",
      resize: "none"
    }
  }
);
const TextArea = function TextArea2({
  ref,
  className,
  borderColor,
  resize,
  ...props
}) {
  const [_, setValue] = reactExports.useState(props?.value?.toString() || "");
  const sharedClassNames = textarea({ borderColor, resize, className });
  const internalRef = reactExports.useRef(null);
  reactExports.useImperativeHandle(ref, () => internalRef.current);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: clsx("grid", className), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: clsx("invisible whitespace-pre-wrap", sharedClassNames), children: `${internalRef.current?.value} ` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "textarea",
      {
        ref: internalRef,
        placeholder: "Write a note",
        className: clsx("overflow-hidden", sharedClassNames),
        onChangeCapture: (e) => {
          setValue(e.currentTarget.value);
        },
        ...props
      }
    )
  ] });
};
export {
  TextArea as T
};

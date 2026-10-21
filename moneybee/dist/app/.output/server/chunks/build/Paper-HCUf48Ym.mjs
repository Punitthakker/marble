import { Q as jsxRuntimeExports } from "./server.mjs";
import { c as clsx } from "./Tabs-CzpyUi7T.mjs";
import { C as Collapsible } from "./Collapsible-CKx8cmdD.mjs";
function PaperContainer({ children, className }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: clsx(
        "border-grey-border w-full rounded-lg border",
        "flex flex-col gap-md p-md lg:gap-lg lg:p-lg",
        className
      ),
      children
    }
  );
}
function PaperTitle({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: clsx("text-m text-grey-primary font-semibold", className), ...props });
}
const Paper = {
  Container: PaperContainer,
  Title: PaperTitle
};
const CollapsiblePaperContainer = function CollapsiblePaperContainer2({
  ref,
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Collapsible.Container, { ref, className: clsx("bg-surface-card", className), ...props });
};
const CollapsiblePaperTitle = function CollapsiblePaperContainer3({
  ref,
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Collapsible.Title, { ref, className: "bg-surface-card", ...props, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: clsx(
        "flex min-w-0 max-w-full flex-1 flex-row items-center gap-sm overflow-hidden text-start font-bold",
        className
      ),
      children
    }
  ) });
};
const CollapsiblePaper = {
  Container: CollapsiblePaperContainer,
  Title: CollapsiblePaperTitle,
  Content: Collapsible.Content
};
export {
  CollapsiblePaper as C,
  Paper as P
};

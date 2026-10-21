import { Q as jsxRuntimeExports } from "./server.mjs";
import { d as cn } from "./Tabs-CzpyUi7T.mjs";
const linkClasses = "hover:text-purple-hover focus:text-purple-hover font-semibold lowercase text-purple-primary hover:underline focus:underline";
const ExternalLink = function ExternalLink2({
  ref,
  className,
  children,
  ...otherProps
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("a", { ref, className: cn(linkClasses, className), target: "_blank", rel: "noopener noreferrer", ...otherProps, children });
};
export {
  ExternalLink as E,
  linkClasses as l
};

import { Q as jsxRuntimeExports } from "./server.mjs";
import { l as logosSVGSpriteHref } from "./router-KSC-NEr8.mjs";
function Logo({
  ref,
  logo,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { ...props, ref, children: /* @__PURE__ */ jsxRuntimeExports.jsx("use", { href: `${logosSVGSpriteHref}#${logo}` }) });
}
export {
  Logo as L
};

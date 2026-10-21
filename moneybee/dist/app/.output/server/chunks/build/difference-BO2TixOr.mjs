import { aP as r$5, a0 as t$f } from "./services-middleware-nMulUXHZ.mjs";
import { t } from "./unique-cniTya2T.mjs";
function r(...e) {
  return t(i, e);
}
function i(n) {
  if (n.length === 0) return r$5;
  let r2 = /* @__PURE__ */ new Map();
  for (let e of n) r2.set(e, (r2.get(e) ?? 0) + 1);
  return (e) => {
    let n2 = r2.get(e);
    return n2 === void 0 || n2 === 0 ? { done: false, hasNext: true, next: e } : (r2.set(e, n2 - 1), t$f);
  };
}
export {
  r
};

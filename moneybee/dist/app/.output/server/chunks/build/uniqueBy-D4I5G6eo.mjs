import { a0 as t$f } from "./services-middleware-nMulUXHZ.mjs";
import { t } from "./unique-cniTya2T.mjs";
function n(...e) {
  return t(r, e);
}
function r(t2) {
  let n2 = t2, r2 = /* @__PURE__ */ new Set();
  return (t3, i, a) => {
    let o = n2(t3, i, a);
    return r2.has(o) ? t$f : (r2.add(o), { done: false, hasNext: true, next: t3 });
  };
}
export {
  n
};

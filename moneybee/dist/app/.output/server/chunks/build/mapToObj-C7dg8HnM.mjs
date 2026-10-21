import { t as t$g } from "./services-middleware-nMulUXHZ.mjs";
function t(...t2) {
  return t$g(n, t2);
}
function n(e, t2) {
  let n2 = {};
  for (let [r, i] of e.entries()) {
    let [a, o] = t2(i, r, e);
    n2[a] = o;
  }
  return n2;
}
export {
  t
};

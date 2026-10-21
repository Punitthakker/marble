import { t as t$g } from "./services-middleware-nMulUXHZ.mjs";
function t(...t2) {
  return t$g(n, t2, r);
}
const n = (e, t2) => e.flatMap(t2), r = (e) => (t2, n2, r2) => {
  let i = e(t2, n2, r2);
  return Array.isArray(i) ? { done: false, hasNext: true, hasMany: true, next: i } : { done: false, hasNext: true, next: i };
};
export {
  t
};

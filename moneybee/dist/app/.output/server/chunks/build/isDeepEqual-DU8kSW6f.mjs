import { t as t$g } from "./services-middleware-nMulUXHZ.mjs";
function t(...t2) {
  return t$g(n, t2);
}
function n(e, t2) {
  if (e === t2 || Object.is(e, t2)) return true;
  if (typeof e != `object` || typeof t2 != `object` || e === null || t2 === null || !r(e, t2)) return false;
  if (Array.isArray(e)) return i(e, t2);
  if (e instanceof Map) return a(e, t2);
  if (e instanceof Set) return o(e, t2);
  if (e instanceof Date) return e.getTime() === t2.getTime();
  if (e instanceof RegExp) return e.toString() === t2.toString();
  if (Object.keys(e).length !== Object.keys(t2).length) return false;
  for (let [r2, i2] of Object.entries(e)) if (!Object.hasOwn(t2, r2) || !n(i2, t2[r2])) return false;
  return true;
}
function r(e, t2) {
  let n2 = Object.getPrototypeOf(e), r2 = Object.getPrototypeOf(t2);
  return n2 === r2 ? true : n2 === null ? r2 === Object.prototype : n2 === Object.prototype && r2 === null;
}
function i(e, t2) {
  if (e.length !== t2.length) return false;
  for (let [r2, i2] of e.entries()) if (!n(i2, t2[r2])) return false;
  return true;
}
function a(e, t2) {
  if (e.size !== t2.size) return false;
  for (let [r2, i2] of e) if (!t2.has(r2) || !n(i2, t2.get(r2))) return false;
  return true;
}
function o(e, t2) {
  if (e.size !== t2.size) return false;
  let r2 = [...t2];
  for (let t3 of e) {
    let e2 = r2.findIndex((e3) => n(t3, e3));
    if (e2 === -1) return false;
    r2.splice(e2, 1);
  }
  return true;
}
export {
  t
};

import { u as t$e, a0 as t$f } from "./services-middleware-nMulUXHZ.mjs";
function t(t2, n2) {
  let r2 = n2.length - t2.length;
  if (r2 === 1) {
    let [r3, ...i] = n2;
    return t$e(r3, { lazy: t2, lazyArgs: i });
  }
  if (r2 === 0) {
    let r3 = { lazy: t2, lazyArgs: n2 };
    return Object.assign((t3) => t$e(t3, r3), r3);
  }
  throw Error(`Wrong number of arguments`);
}
function n(...e) {
  return t(r, e);
}
function r() {
  let t2 = /* @__PURE__ */ new Set();
  return (n2) => t2.has(n2) ? t$f : (t2.add(n2), { done: false, hasNext: true, next: n2 });
}
export {
  n,
  t
};

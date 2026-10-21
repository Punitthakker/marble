import { t as t$g } from "./services-middleware-nMulUXHZ.mjs";
function t(...t2) {
  return t$g(n, t2);
}
const n = (e, t2) => {
  let n2 = e.entries(), r = n2.next();
  if (`done` in r && r.done) return 0;
  let { value: i } = r, a = t2(i[1], 0, e);
  for (let [r2, i2] of n2) {
    let n3 = t2(i2, r2, e);
    a += n3;
  }
  return a;
};
export {
  t
};

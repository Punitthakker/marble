import { t as t$g } from "./services-middleware-nMulUXHZ.mjs";
import { t } from "./hasAtLeast-BmuNoqMd.mjs";
function n(...t$12) {
  return t$g(r, t$12);
}
function r(e, n2) {
  if (!t(n2, 1)) return { ...e };
  if (!t(n2, 2)) {
    let { [n2[0]]: t2, ...r3 } = e;
    return r3;
  }
  let r2 = { ...e };
  for (let e2 of n2) delete r2[e2];
  return r2;
}
export {
  n
};

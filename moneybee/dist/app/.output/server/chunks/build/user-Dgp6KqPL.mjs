import { u as t$e, v as n$7 } from "./services-middleware-nMulUXHZ.mjs";
import { t } from "./join-Ce2xPJwm.mjs";
function e(e2) {
  return !!e2;
}
function getFullName(user) {
  return t$e([user?.firstName, user?.lastName], n$7(e), t(" "));
}
export {
  getFullName as g
};

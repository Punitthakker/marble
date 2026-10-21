import { H as _coercedNumber, I as ZodNumber, J as _coercedBoolean, K as ZodBoolean } from "./short-uuid-fTZYJj_k.mjs";
function number(params) {
  return _coercedNumber(ZodNumber, params);
}
function boolean(params) {
  return _coercedBoolean(ZodBoolean, params);
}
export {
  boolean as b,
  number as n
};

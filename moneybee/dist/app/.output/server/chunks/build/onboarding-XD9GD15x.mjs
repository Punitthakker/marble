import { o as object, s as string, C as email } from "./short-uuid-fTZYJj_k.mjs";
const MIN_PASSWORD_LENGTH = 8;
const createInitialOrgPayloadSchema = object({
  organization: string().nonempty(),
  firstName: string().nonempty(),
  lastName: string().nonempty(),
  email: email(),
  password: string().min(MIN_PASSWORD_LENGTH).optional()
});
const getOnboardingFormSchema = (requiresPassword) => createInitialOrgPayloadSchema.omit({ password: true }).extend({
  password: string(),
  passwordConfirmation: string()
}).refine(
  ({ password, passwordConfirmation }) => !requiresPassword || password.length >= MIN_PASSWORD_LENGTH && password === passwordConfirmation,
  { path: ["password"] }
);
export {
  MIN_PASSWORD_LENGTH as M,
  createInitialOrgPayloadSchema as c,
  getOnboardingFormSchema as g
};

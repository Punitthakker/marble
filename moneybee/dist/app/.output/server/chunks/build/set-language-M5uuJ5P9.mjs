import { c as createSsrRpc } from "./query-BmG5BEas.mjs";
import { s as servicesMiddleware, f as supportedLngs } from "./services-middleware-nMulUXHZ.mjs";
import { $ as createServerFn } from "./server.mjs";
import { o as object, _ as _enum } from "./short-uuid-fTZYJj_k.mjs";
import { u as useMutation } from "./useMutation-BOdeDeAR.mjs";
import { u as useServerFn } from "./useServerFn-oRH5Nw97.mjs";
const setLanguagePayloadSchema = object({
  preferredLanguage: _enum(supportedLngs)
});
const setLanguageFn = createServerFn({
  method: "POST"
}).middleware([servicesMiddleware]).validator(setLanguagePayloadSchema).handler(createSsrRpc("56f0cc55efe9f42480c18332b978130eb1b8c834d27c7b8d818d11fbe9a9fefe"));
const useSetLanguageMutation = () => {
  const setLanguage = useServerFn(setLanguageFn);
  return useMutation({
    mutationKey: ["settings", "set-language"],
    mutationFn: async (payload) => setLanguage({ data: payload })
  });
};
export {
  useSetLanguageMutation as u
};

import { Q as jsxRuntimeExports } from "./server.mjs";
import { u as useLoaderRevalidator } from "./LoaderRevalidatorContext-BEuG7sHs.mjs";
import { u as useSetLanguageMutation } from "./set-language-M5uuJ5P9.mjs";
import { f as supportedLngs, b1 as languageNames } from "./services-middleware-nMulUXHZ.mjs";
import { z as zt } from "./create-context-k6HmQ6bB.mjs";
import { u as useTranslation } from "./Tabs-CzpyUi7T.mjs";
import { S as SelectV2 } from "./Select-Dg3p9vJ0.mjs";
const languageOptions = supportedLngs.map((lng) => ({
  value: lng,
  label: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { dir: languageNames[lng].dir, children: languageNames[lng].name })
}));
function LanguagePicker() {
  const {
    t,
    i18n: { language, changeLanguage }
  } = useTranslation("common");
  const setLanguageMutation = useSetLanguageMutation();
  const revalidate = useLoaderRevalidator();
  if (supportedLngs.every((lng) => lng.startsWith("en"))) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    SelectV2,
    {
      options: languageOptions,
      value: language,
      onChange: (newPreferredLanguage) => {
        setLanguageMutation.mutateAsync({ preferredLanguage: newPreferredLanguage }).then(() => {
          changeLanguage(newPreferredLanguage);
          revalidate();
        }).catch(() => {
          zt.error(t("common:errors.unknown"));
        });
      },
      placeholder: languageNames["en-GB"].name
    }
  );
}
export {
  LanguagePicker as L
};

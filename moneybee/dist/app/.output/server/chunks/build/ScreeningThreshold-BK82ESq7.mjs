import { Q as jsxRuntimeExports } from "./server.mjs";
import { u as useTranslation } from "./Tabs-CzpyUi7T.mjs";
import { T as ThresholdRange } from "./ThresholdRange-CusKNWqi.mjs";
const ScreeningThreshold = ({ threshold, onChange, title, disabled, className }) => {
  const { t } = useTranslation(["common", "scenarios"]);
  const values = [
    { value: 0, color: "var(--color-red-hover)" },
    { value: 40, label: t("screenings:freeform_search.threshold.40"), color: "var(--color-red-secondary)" },
    {
      value: 50,
      label: t("screenings:freeform_search.threshold.50"),
      color: "var(--color-orange-secondary)"
    },
    { value: 60, label: t("screenings:freeform_search.threshold.60"), color: "var(--color-yellow-primary)" },
    { value: 70, label: t("screenings:freeform_search.threshold.70"), color: "var(--color-green-disabled)" },
    { value: 80, label: t("screenings:freeform_search.threshold.80"), color: "var(--color-green-primary)" },
    { value: 90, label: t("screenings:freeform_search.threshold.90"), color: "var(--color-green-hover)" }
  ];
  if (threshold && values.findIndex((v) => v.value === threshold) === -1) {
    values.push({
      value: threshold,
      label: t("settings:scenario_sanction_threshold_actual"),
      color: "var(--color-grey-placeholder)"
    });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    ThresholdRange,
    {
      title,
      defaultDescription: t("screenings:freeform_search.threshold_description"),
      value: threshold,
      onChange,
      values,
      initialColor: "var(--color-red-hover)",
      disabled,
      learnMoreUrl: "https://docs.checkmarble.com/docs/search-scoring-algorithm",
      className
    }
  );
};
export {
  ScreeningThreshold as S
};

import { Q as jsxRuntimeExports } from "./server.mjs";
import { bw as SCREENING_CATEGORY_COLORS, a2 as M } from "./services-middleware-nMulUXHZ.mjs";
import { u as useTranslation } from "./Tabs-CzpyUi7T.mjs";
import { T as Tag } from "./create-context-k6HmQ6bB.mjs";
const DatasetTag = ({ category }) => {
  const { getLaTagLabel } = useDatasetTag();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { color: SCREENING_CATEGORY_COLORS[category], children: getLaTagLabel(category) });
};
function useDatasetTag() {
  const { t } = useTranslation(["scenarios"]);
  function getLaTagLabel(category) {
    return M(category).with("peps", () => t(`scenarios:sanction.lists.peps`)).with("third-parties", () => t(`scenarios:sanction.lists.third_parties`)).with("sanctions", () => t(`scenarios:sanction.lists.sanctions`)).with("adverse-media", () => t(`scenarios:sanction.lists.adverse_media`)).with("custom", () => t(`scenarios:sanction.lists.custom`)).with("global", () => t(`scenarios:sanction.lists.global`)).otherwise(() => t(`scenarios:sanction.lists.other`));
  }
  return { getLaTagLabel };
}
export {
  DatasetTag as D,
  useDatasetTag as u
};

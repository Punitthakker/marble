import { u as useTranslation } from "./Tabs-CzpyUi7T.mjs";
import { a2 as M } from "./services-middleware-nMulUXHZ.mjs";
import { aj as scenarioI18n } from "./router-KSC-NEr8.mjs";
function useEntityName() {
  const { t } = useTranslation(scenarioI18n);
  function getEntityName(entityType) {
    return M(entityType).with("Thing", () => t("scenarios:edit_sanction.entity_type.thing")).with("Person", () => t("scenarios:edit_sanction.entity_type.person")).with("Organization", () => t("scenarios:edit_sanction.entity_type.organization")).with("Vehicle", () => t("scenarios:edit_sanction.entity_type.vehicle")).otherwise(() => entityType ?? "Thing");
  }
  return { getEntityName, t };
}
export {
  useEntityName as u
};

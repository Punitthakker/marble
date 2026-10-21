import { j as getRelatedCasesByObjectFn } from "./cases-C-fVFrVL.mjs";
import { u as useQuery } from "./useQuery-Bb0AEcpf.mjs";
import { u as useServerFn } from "./useServerFn-oRH5Nw97.mjs";
import { Q as jsxRuntimeExports } from "./server.mjs";
import { u as useTranslation } from "./Tabs-CzpyUi7T.mjs";
import { T as Tag } from "./create-context-k6HmQ6bB.mjs";
const useRelatedCasesByObjectQuery = (objectType, objectId) => {
  const getRelatedCasesByObject = useServerFn(getRelatedCasesByObjectFn);
  return useQuery({
    queryKey: ["cases", "related", objectType, objectId],
    queryFn: async () => {
      return getRelatedCasesByObject({ data: { objectType, objectId } });
    }
  });
};
const CONTINUOUS_SCREENING_STATUS_COLOR_MAP = {
  in_review: "orange",
  confirmed_hit: "red",
  no_hit: "green"
};
function ReviewStatusBadge({
  status,
  hitsCount
}) {
  const { t } = useTranslation(["screenings"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { color: CONTINUOUS_SCREENING_STATUS_COLOR_MAP[status], children: t(`screenings:status.${status}`, { count: hitsCount }) });
}
export {
  ReviewStatusBadge as R,
  useRelatedCasesByObjectQuery as u
};

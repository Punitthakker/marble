import { $ as createServerFn, M as reactExports, Q as jsxRuntimeExports } from "./server.mjs";
import { u as useGetScoringSettingsQuery } from "./get-scoring-settings-CNgnpjXy.mjs";
import { c as createSimpleContext } from "./create-context-k6HmQ6bB.mjs";
import { i as isMaxRiskLevelInRange } from "./display-TKj7AN5a.mjs";
import { c as createSsrRpc } from "./query-BmG5BEas.mjs";
import { a as authMiddleware } from "./auth-middleware-eNRVfU3l.mjs";
import { g as generateGraphPayloadSchema, c as createGraphRelationPayloadSchema, d as deleteGraphRelationPayloadSchema } from "./graph-BtfBHESi.mjs";
function useControllableState(defaultValue, value, onChange) {
  const [uncontrolled, setUncontrolled] = reactExports.useState(defaultValue);
  const isControlled = value !== void 0;
  const set = reactExports.useCallback(
    (next) => {
      onChange?.(next);
      if (!isControlled) setUncontrolled(next);
    },
    [isControlled, onChange]
  );
  return [isControlled ? value : uncontrolled, set];
}
const CLUSTER_THRESHOLD_OPTIONS = [0, 1, 2, 3, 5, 8, 13, 21, 34];
const DEFAULT_CLUSTER_THRESHOLD = 8;
const GraphViewSettingsContext = createSimpleContext("GraphViewSettings");
const useGraphViewSettings = GraphViewSettingsContext.useValue;
function GraphViewSettingsProvider({
  children,
  showRiskScore: controlledShowRiskScore,
  onShowRiskScoreChange,
  showTags: controlledShowTags,
  onShowTagsChange,
  showHypernodes: controlledShowHypernodes,
  onShowHypernodesChange,
  showEdgeLabels: controlledShowEdgeLabels,
  onShowEdgeLabelsChange,
  clusterThreshold: controlledClusterThreshold,
  onClusterThresholdChange
}) {
  const [showRiskScore, setShowRiskScore] = useControllableState(false, controlledShowRiskScore, onShowRiskScoreChange);
  const settingsQuery = useGetScoringSettingsQuery(showRiskScore);
  const scoringSettings = settingsQuery.data?.settings ?? void 0;
  const rawMaxRiskLevel = scoringSettings?.maxRiskLevel;
  const maxRiskLevel = rawMaxRiskLevel != null && isMaxRiskLevelInRange(rawMaxRiskLevel) ? rawMaxRiskLevel : void 0;
  const [showTags, setShowTags] = useControllableState(false, controlledShowTags, onShowTagsChange);
  const [showHypernodes, setShowHypernodes] = useControllableState(
    true,
    controlledShowHypernodes,
    onShowHypernodesChange
  );
  const [showEdgeLabels, setShowEdgeLabels] = useControllableState(
    false,
    controlledShowEdgeLabels,
    onShowEdgeLabelsChange
  );
  const [clusterThreshold, setClusterThreshold] = useControllableState(
    DEFAULT_CLUSTER_THRESHOLD,
    controlledClusterThreshold,
    onClusterThresholdChange
  );
  const value = reactExports.useMemo(
    () => ({
      showRiskScore,
      setShowRiskScore,
      scoringSettings,
      maxRiskLevel,
      showTags,
      setShowTags,
      showHypernodes,
      setShowHypernodes,
      showEdgeLabels,
      setShowEdgeLabels,
      clusterThreshold,
      setClusterThreshold
    }),
    [
      showRiskScore,
      setShowRiskScore,
      scoringSettings,
      maxRiskLevel,
      showTags,
      setShowTags,
      showHypernodes,
      setShowHypernodes,
      showEdgeLabels,
      setShowEdgeLabels,
      clusterThreshold,
      setClusterThreshold
    ]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx(GraphViewSettingsContext.Provider, { value, children });
}
const listGraphRelationsFn = createServerFn({
  method: "GET"
}).middleware([authMiddleware]).handler(createSsrRpc("e2755ded24ab75a65182f9d344e1bcdbabb59bc0006326ee12f6ea28148e9d31"));
const createGraphRelationFn = createServerFn({
  method: "POST"
}).middleware([authMiddleware]).validator(createGraphRelationPayloadSchema).handler(createSsrRpc("16f403ee2c116a47e34c8e0d80818169de6c59dfb15b1c1e36c0e75446a45492"));
const deleteGraphRelationFn = createServerFn({
  method: "POST"
}).middleware([authMiddleware]).validator(deleteGraphRelationPayloadSchema).handler(createSsrRpc("91752b0b19d58937cf2547bbabc3b35394836d2eff0d6c812426be6efa333f04"));
const generateGraphFn = createServerFn({
  method: "POST"
}).middleware([authMiddleware]).validator(generateGraphPayloadSchema).handler(createSsrRpc("c112d63aab77b948e02a72bf3aab3960f4092cc4820615953a537641eba464e7"));
export {
  CLUSTER_THRESHOLD_OPTIONS as C,
  DEFAULT_CLUSTER_THRESHOLD as D,
  GraphViewSettingsProvider as G,
  createGraphRelationFn as c,
  deleteGraphRelationFn as d,
  generateGraphFn as g,
  listGraphRelationsFn as l,
  useGraphViewSettings as u
};

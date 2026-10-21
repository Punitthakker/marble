import { Q as jsxRuntimeExports, M as reactExports } from "./server.mjs";
import { u as useCreateAnnotationMutation } from "./ClientCommentForm-CxGdh-J3.mjs";
import { u as useGetAnnotationsQuery } from "./get-annotations-DHuYMH09.mjs";
import { u as useOrganizationObjectTags } from "./organization-object-tags-BKGicIcs.mjs";
import { u as useQueryClient } from "./query-BmG5BEas.mjs";
import { T as Tag, z as zt } from "./create-context-k6HmQ6bB.mjs";
import { u as useTranslation, a as useFormatDateTime, an as Panel, S as Typo } from "./Tabs-CzpyUi7T.mjs";
import { a2 as M, aS as z, bO as adaptNodeEvaluation, bP as isConstant, bQ as hasReturnValue, bR as RISK_TYPES } from "./services-middleware-nMulUXHZ.mjs";
import { T as TagList } from "./TagList-5cEiXNQD.mjs";
import { f as formatReturnValue } from "./helpers-D-Bggz_h.mjs";
import { S as Spinner } from "./Spinner-DmLieYoS.mjs";
import { u as useListScoringRulesetVersionsQuery, i as isSwitchAstNode, t as transformAstNodeToModel, a as isCompleteRule, b as isScoreComputationAstNode, S as SwitchNodeView } from "./list-ruleset-versions-B6atqN3Q.mjs";
import { u as useGetCustomListsQuery } from "./get-custom-lists-DJnJIZcp.mjs";
import { a as getScoreLatestFn, b as getScoringRulesetFn } from "./scoring-BqfH8vO5.mjs";
import { u as useQuery } from "./useQuery-Bb0AEcpf.mjs";
import { u as useServerFn } from "./useServerFn-oRH5Nw97.mjs";
import { u as useDataModel } from "./data-model-Dfj0lN5a.mjs";
import { S as SCORING_LEVELS_COLORS, a as SCORING_LEVELS_LABEL_KEYS, s as scoringLevelEntries, i as isMaxRiskLevelInRange } from "./display-TKj7AN5a.mjs";
function isNodeEvaluation(value) {
  return "returnValue" in value;
}
function adaptEvaluation(value) {
  return isNodeEvaluation(value) ? value : adaptNodeEvaluation(value);
}
function getScoreImpactFromAstChild(child) {
  if (!isScoreComputationAstNode(child)) return null;
  if (!isConstant(child.namedChildren.modifier)) return null;
  const impact = { modifier: child.namedChildren.modifier.constant };
  if (child.namedChildren.floor && isConstant(child.namedChildren.floor)) {
    impact.floor = child.namedChildren.floor.constant;
  }
  return impact;
}
function getSwitchReturnValue(evaluation) {
  if (!hasReturnValue(evaluation.returnValue)) return null;
  const value = evaluation.returnValue.value;
  if (value === null || typeof value !== "object" || Array.isArray(value)) return null;
  return value;
}
function getAppliedModifier(evaluation) {
  if (!hasReturnValue(evaluation.returnValue)) return null;
  const value = evaluation.returnValue.value;
  if (typeof value === "number") return value;
  const switchReturn = getSwitchReturnValue(evaluation);
  return typeof switchReturn?.modifier === "number" ? switchReturn.modifier : null;
}
function findMatchedBranchIndex(evaluation, astChildren) {
  const switchReturn = getSwitchReturnValue(evaluation);
  if (typeof switchReturn?.branch === "number" && Number.isInteger(switchReturn.branch) && switchReturn.branch >= 0 && switchReturn.branch < astChildren.length) {
    return switchReturn.branch;
  }
  const appliedModifier = getAppliedModifier(evaluation);
  if (appliedModifier !== null) {
    const matchingIndices = [];
    for (let i = 0; i < astChildren.length; i++) {
      const impact = getScoreImpactFromAstChild(astChildren[i]);
      if (impact && impact.modifier === appliedModifier) {
        matchingIndices.push(i);
      }
    }
    if (matchingIndices.length === 1) {
      return matchingIndices[0];
    }
    if (matchingIndices.length > 1) {
      const nonSkippedAmongMatches = matchingIndices.filter((i) => evaluation.children[i]?.skipped !== true);
      const hasExplicitlySkippedSibling = matchingIndices.some((i) => evaluation.children[i]?.skipped === true);
      if (nonSkippedAmongMatches.length === 1 && hasExplicitlySkippedSibling) {
        return nonSkippedAmongMatches[0];
      }
      return matchingIndices[matchingIndices.length - 1];
    }
  }
  const nonSkipped = evaluation.children.map((child, index) => ({ child, index })).filter(({ child }) => child.skipped !== true);
  const hasExplicitlySkipped = evaluation.children.some((child) => child.skipped === true);
  if (nonSkipped.length === 1 && hasExplicitlySkipped) {
    return nonSkipped[0].index;
  }
  return null;
}
function getMatchedRuleModifier(matched) {
  return matched.appliedModifier ?? (matched.matchedBranchIndex !== null ? matched.impact?.modifier ?? null : null);
}
function getMatchedRuleFloor(matched) {
  return matched.matchedBranchIndex !== null ? matched.impact?.floor : void 0;
}
function computeScoreFromMatchedRules(rules) {
  let score = 0;
  let floor;
  for (const rule of rules) {
    score += getMatchedRuleModifier(rule) ?? 0;
    const ruleFloor = getMatchedRuleFloor(rule);
    if (ruleFloor !== void 0) {
      floor = floor === void 0 ? ruleFloor : Math.max(floor, ruleFloor);
    }
  }
  return { score, floor };
}
function matchScoreEvaluationsToRules(evaluations, rules, entityType, dataModel) {
  if (evaluations.length !== rules.length) {
    return { ok: false, reason: "length_mismatch" };
  }
  const adapted = evaluations.map(adaptEvaluation);
  const matched = [];
  for (let i = 0; i < rules.length; i++) {
    const rule = rules[i];
    const evaluation = adapted[i];
    if (!isSwitchAstNode(rule.ast)) {
      return { ok: false, reason: "structure_mismatch" };
    }
    if (evaluation.children.length > rule.ast.children.length) {
      return { ok: false, reason: "structure_mismatch" };
    }
    const matchedBranchIndex = findMatchedBranchIndex(evaluation, rule.ast.children);
    const impact = matchedBranchIndex !== null ? getScoreImpactFromAstChild(rule.ast.children[matchedBranchIndex]) : null;
    const draftModel = transformAstNodeToModel(rule.ast, entityType, dataModel);
    const model = draftModel && isCompleteRule(draftModel) ? draftModel : null;
    matched.push({
      rule,
      model,
      evaluation,
      matchedBranchIndex,
      impact,
      appliedModifier: getAppliedModifier(evaluation)
    });
  }
  return { ok: true, rules: matched };
}
function ClientObjectTagList({
  caseId,
  tableName,
  objectId,
  annotations,
  placeholder,
  onTagIdsChange
}) {
  const { t } = useTranslation(["common"]);
  const queryClient = useQueryClient();
  const { orgObjectTags } = useOrganizationObjectTags();
  const createAnnotationMutation = useCreateAnnotationMutation();
  const internalQuery = useGetAnnotationsQuery(tableName, objectId);
  const tagAnnotations = annotations ?? internalQuery.data?.annotations.tags ?? [];
  const serverTagIds = tagAnnotations.map((a) => a.payload.tag_id);
  const [pendingTagIds, setPendingTagIds] = reactExports.useState(null);
  const displayedTagIds = pendingTagIds ?? serverTagIds;
  const handleChange = (next) => {
    const previous = pendingTagIds ?? serverTagIds;
    const addedTags = next.filter((id) => !previous.includes(id));
    const removedAnnotations = tagAnnotations.filter((a) => !next.includes(a.payload.tag_id)).map((a) => a.id);
    if (addedTags.length === 0 && removedAnnotations.length === 0) return;
    setPendingTagIds(next);
    onTagIdsChange?.(next);
    createAnnotationMutation.mutateAsync({
      tableName,
      objectId,
      caseId,
      type: "tag",
      payload: { addedTags, removedAnnotations }
    }).then(async (result) => {
      if (!result.success) {
        zt.error(t("common:errors.unknown"));
        setPendingTagIds(null);
        onTagIdsChange?.(previous);
        return;
      }
      await queryClient.invalidateQueries({ queryKey: ["annotations", tableName, objectId] });
      setPendingTagIds(null);
    }).catch(() => {
      zt.error(t("common:errors.unknown"));
      setPendingTagIds(null);
      onTagIdsChange?.(previous);
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    TagList,
    {
      editable: true,
      tags: orgObjectTags,
      value: displayedTagIds,
      onChange: handleChange,
      placeholder: placeholder ?? "Add a tag"
    }
  );
}
const useGetScoringRulesetQuery = (recordType, version, options) => {
  const getScoringRuleset = useServerFn(getScoringRulesetFn);
  const resolvedVersion = version ?? "committed";
  return useQuery({
    queryKey: ["scoring", "ruleset", recordType, resolvedVersion],
    queryFn: () => getScoringRuleset({ data: { recordType, version: resolvedVersion } }),
    enabled: !!recordType && (options?.enabled ?? true)
  });
};
const useGetScoringRulesetForScoreQuery = (recordType, rulesetId) => {
  const versionsQuery = useListScoringRulesetVersionsQuery(recordType);
  const versionNumber = rulesetId ? versionsQuery.data?.versions.find((v) => v.id === rulesetId)?.version : void 0;
  const waitingForVersion = !!rulesetId && versionsQuery.isPending;
  const resolvedVersion = waitingForVersion ? void 0 : versionNumber ?? "committed";
  const rulesetQuery = useGetScoringRulesetQuery(recordType, resolvedVersion, {
    enabled: !!recordType && !waitingForVersion
  });
  return {
    ...rulesetQuery,
    isPending: waitingForVersion || rulesetQuery.isPending
  };
};
function ScoreDetailPanel({
  open,
  onOpenChange,
  objectType,
  activeScore,
  scoringSettings
}) {
  const { t } = useTranslation(["client360", "user-scoring"]);
  const formatDateTime = useFormatDateTime();
  const dataModel = useDataModel();
  const rulesetQuery = useGetScoringRulesetForScoreQuery(objectType, activeScore.ruleset_id);
  const thresholds = rulesetQuery.data?.ruleset.thresholds;
  const maxRiskLevel = scoringSettings.maxRiskLevel;
  const scoreColor = SCORING_LEVELS_COLORS[maxRiskLevel][activeScore.risk_level] ?? "inherit";
  const scoreLabel = t(
    SCORING_LEVELS_LABEL_KEYS[maxRiskLevel][activeScore.risk_level] ?? activeScore.risk_level.toString()
  );
  const scoreValue = activeScore.evaluations && rulesetQuery.data ? M(
    matchScoreEvaluationsToRules(activeScore.evaluations, rulesetQuery.data.ruleset.rules, objectType, dataModel)
  ).with({ ok: true }, ({ rules }) => computeScoreFromMatchedRules(rules).score).with({ ok: false }, () => void 0).exhaustive() : void 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Panel.Root, { open, onOpenChange, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Panel.Container, { size: "small", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Panel.Content, { className: "flex flex-col gap-lg", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Panel.Header, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-xs", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typo, { variant: "title2", children: t("client360:client_detail.score_panel.title") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { color: "grey", children: objectType }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { color: "grey", children: t("client360:client_detail.score_panel.last_computed", {
        date: formatDateTime(activeScore.created_at, { dateStyle: "medium" })
      }) })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex items-center gap-sm rounded-lg border p-md",
        style: { borderColor: scoreColor, backgroundColor: `${scoreColor}20` },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-4 shrink-0 rounded-full", style: { backgroundColor: scoreColor } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: scoreLabel }),
          activeScore.source === "override" && /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { color: "grey", children: t("client360:client_detail.score_panel.source_override") })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-sm border border-grey-border rounded-md p-md", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-s font-medium text-grey-primary flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typo, { variant: "subtitle1", children: t("client360:client_detail.score_panel.score_scale") }),
        scoreValue !== void 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { children: scoreValue })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        ScoreScale,
        {
          maxRiskLevel,
          currentLevel: activeScore.risk_level,
          thresholds,
          scoreValue
        }
      )
    ] }),
    activeScore.source === "ruleset" && activeScore.evaluations && activeScore.evaluations.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(ScoreEvaluationBreakdown, { activeScore, objectType, maxRiskLevel }) : null
  ] }) }) });
}
function ScoreScale({ maxRiskLevel, currentLevel, thresholds, scoreValue }) {
  const colorMap = SCORING_LEVELS_COLORS[maxRiskLevel];
  const colorEntries = scoringLevelEntries(colorMap);
  const proportional = thresholds && thresholds.length === maxRiskLevel - 1 ? (() => {
    const minValue = thresholds[0] > 10 ? thresholds[0] - 10 : 0;
    const maxValue = thresholds[thresholds.length - 1] + 10;
    const totalRange = maxValue - minValue;
    const showZeroLabel = thresholds[0] !== 0;
    const zeroLabelPct = (0 - minValue) / totalRange * 100;
    const segmentWidths = colorEntries.map((_, i) => {
      const segStart = i === 0 ? minValue : thresholds[i - 1];
      const segEnd = i === thresholds.length ? maxValue : thresholds[i];
      return (segEnd - segStart) / totalRange * 100;
    });
    const markerPositions = thresholds.map((v) => (v - minValue) / totalRange * 100);
    const markerPct = scoreValue !== void 0 ? Math.min(100, Math.max(0, (scoreValue - minValue) / totalRange * 100)) : void 0;
    const allLabels = [];
    if (showZeroLabel) {
      allLabels.push({ value: "0", pct: zeroLabelPct, staggered: false });
    }
    for (let i = 0; i < thresholds.length; i++) {
      allLabels.push({ value: String(thresholds[i]), pct: markerPositions[i], staggered: false });
    }
    allLabels.sort((a, b) => a.pct - b.pct);
    const minGap = 5;
    for (let i = 1; i < allLabels.length; i++) {
      if (allLabels[i].pct - allLabels[i - 1].pct < minGap) {
        allLabels[i].staggered = !allLabels[i - 1].staggered;
      }
    }
    return { segmentWidths, markerPositions, markerPct, showZeroLabel, zeroLabelPct, allLabels };
  })() : void 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-xs", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex w-full overflow-hidden rounded-lg gap-px mt-sm", children: [
        colorEntries.map(([level, color], i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "h-2",
            style: {
              backgroundColor: color,
              ...proportional ? { width: `${proportional.segmentWidths[i]}%` } : { flex: 1 }
            }
          },
          level
        )),
        proportional?.showZeroLabel ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-y-0 w-px bg-white", style: { left: `${proportional.zeroLabelPct}%` } }) : null
      ] }),
      proportional?.markerPct !== void 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute top-1/2 size-6 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white shadow-sm",
          style: {
            left: `${proportional.markerPct}%`,
            backgroundColor: colorMap[currentLevel]
          }
        }
      ) : null
    ] }),
    proportional ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mt-xs", style: { height: proportional.allLabels.some((l) => l.staggered) ? 32 : 16 }, children: proportional.allLabels.map((label) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute text-xs text-grey-secondary",
        style: {
          left: `${label.pct}%`,
          top: label.staggered ? 16 : 0,
          ...label.pct > 0 && { transform: "translateX(-50%)" }
        },
        children: label.value
      },
      label.value
    )) }) : null
  ] });
}
function MatchedRuleCard({
  matched,
  objectType,
  maxRiskLevel,
  customLists
}) {
  const { t } = useTranslation(["user-scoring", "client360"]);
  const {
    t: tFunction,
    i18n: { language }
  } = useTranslation(["common", "scenarios"]);
  const dataModel = useDataModel();
  const { rule, matchedBranchIndex, evaluation } = matched;
  const modifier = getMatchedRuleModifier(matched);
  const floor = getMatchedRuleFloor(matched);
  const floorColors = isMaxRiskLevelInRange(maxRiskLevel) ? SCORING_LEVELS_COLORS[maxRiskLevel] : {};
  const formattedRuleValue = formatReturnValue(evaluation.namedChildren["field"]?.returnValue, {
    t: tFunction,
    language
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-sm border border-grey-border rounded-md p-md", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-md", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-w-0 flex-wrap items-center gap-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-s font-medium text-grey-primary", children: rule.name }),
        rule.riskType && RISK_TYPES.includes(rule.riskType) ? /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { color: "grey", children: t(`user-scoring:risk_type.${rule.riskType}`) }) : rule.riskType ? /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { color: "grey", children: rule.riskType }) : null
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex shrink-0 items-center gap-xs", children: modifier !== null ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Tag, { color: "purple", className: "flex items-center gap-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("client360:client_detail.score_panel.score_modifier") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          modifier > 0 ? "+" : "",
          modifier
        ] }),
        floor !== void 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-xs", children: [
          t("user-scoring:switch.floor_label"),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "size-3 rounded-full", style: { backgroundColor: floorColors[floor] } })
        ] }) : null
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { color: "grey", children: t("client360:client_detail.score_panel.no_modification") }) })
    ] }),
    formattedRuleValue ? /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { color: "white", size: "medium", className: "w-fit", children: t("client360:client_detail.score_panel.value_label", { value: formattedRuleValue }) }) : null,
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SwitchNodeView,
      {
        node: rule.ast,
        dataModel,
        entityType: objectType,
        maxRiskLevel,
        customLists,
        matchedBranchIndex
      }
    )
  ] });
}
function ScoreEvaluationBreakdown({
  activeScore,
  objectType,
  maxRiskLevel
}) {
  const { t } = useTranslation(["client360"]);
  const dataModel = useDataModel();
  const rulesetQuery = useGetScoringRulesetForScoreQuery(objectType, activeScore.ruleset_id);
  const customListsQuery = useGetCustomListsQuery();
  const unavailable = /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-s text-grey-secondary", children: t("client360:client_detail.score_panel.evaluation_unavailable") });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Typo, { variant: "subtitle1", className: "flex items-center gap-xs justify-between", children: [
      t("client360:client_detail.score_panel.applied_rules"),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { color: "grey", children: objectType }),
        rulesetQuery.data?.ruleset.version ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Tag, { color: "grey", children: [
          "v",
          rulesetQuery.data.ruleset.version
        ] }) : null
      ] })
    ] }),
    M([rulesetQuery, customListsQuery]).with([{ isPending: true }, z.any], [z.any, { isPending: true }], () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center py-md", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, { className: "size-6" }) })).with([{ isError: true }, z.any], [z.any, { isError: true }], () => unavailable).with([{ isSuccess: true }, { isSuccess: true }], ([rulesetResult, customListsResult]) => {
      if (!rulesetResult.data || !customListsResult.data || !activeScore.evaluations) {
        return unavailable;
      }
      return M(
        matchScoreEvaluationsToRules(
          activeScore.evaluations,
          rulesetResult.data.ruleset.rules,
          objectType,
          dataModel
        )
      ).with({ ok: false }, () => unavailable).with(
        { ok: true },
        ({ rules }) => rules.map((matched) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          MatchedRuleCard,
          {
            matched,
            objectType,
            maxRiskLevel,
            customLists: customListsResult.data
          },
          matched.rule.stableId
        ))
      ).exhaustive();
    }).otherwise(() => unavailable)
  ] });
}
const useScoreLatestQuery = (objectType, objectId, enabled = true) => {
  const getScoreLatest = useServerFn(getScoreLatestFn);
  return useQuery({
    queryKey: ["scoring", "score-latest", objectType, objectId],
    queryFn: () => getScoreLatest({ data: { objectType, objectId } }),
    enabled: enabled && !!objectType && !!objectId
  });
};
export {
  ClientObjectTagList as C,
  ScoreDetailPanel as S,
  useScoreLatestQuery as u
};

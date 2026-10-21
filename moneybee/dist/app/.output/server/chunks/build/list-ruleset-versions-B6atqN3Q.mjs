import { Q as jsxRuntimeExports } from "./server.mjs";
import { bP as isConstant, a2 as M, cc as isPayload, b_ as isAggregation, cd as topicsToCategories, ce as SCREENING_CATEGORY_I18N_KEY_MAP, cg as NewConstantAstNode, aX as NewUndefinedAstNode, ch as v7, ci as isRecordHasPastAlertAstNode, c7 as isMonitoringListCheckAstNode, cj as isRecordHasTagsAstNode, ck as isMainAstBinaryNode, bY as isCustomListAccess, cl as NewRecordHasPastAlertsAstNode, cm as NewTagCheckAstNode, bv as getDataTypeIcon, cn as monitoringListCheckAstNodeName, co as recordHasTagsAstNodeName, cp as NewCustomListAstNode } from "./services-middleware-nMulUXHZ.mjs";
import { g as getAstNodeDisplayName } from "./helpers-D-Bggz_h.mjs";
import { u as useOrganizationObjectTags } from "./organization-object-tags-BKGicIcs.mjs";
import { u as useTranslation, I as Icon, d as cn } from "./Tabs-CzpyUi7T.mjs";
import { T as Tag } from "./create-context-k6HmQ6bB.mjs";
import { S as SelectV2 } from "./Select-Dg3p9vJ0.mjs";
import { S as SCORING_LEVELS_COLORS, i as isMaxRiskLevelInRange, s as scoringLevelEntries } from "./display-TKj7AN5a.mjs";
import { c as listRulesetVersionsFn } from "./scoring-BqfH8vO5.mjs";
import { u as useQuery } from "./useQuery-Bb0AEcpf.mjs";
import { u as useServerFn } from "./useServerFn-oRH5Nw97.mjs";
const switchAstNodeName = "Switch";
function isSwitchAstNode(node) {
  return node.name === switchAstNodeName && "field" in node.namedChildren && "type" in node.namedChildren;
}
function NewSwitchAstNode(ruleType, field) {
  return {
    id: v7(),
    name: switchAstNodeName,
    constant: void 0,
    children: [],
    namedChildren: {
      field: field ?? NewUndefinedAstNode(),
      type: NewConstantAstNode({ constant: ruleType })
    }
  };
}
const scoreComputationAstNodeName = "ScoreComputation";
function isScoreComputationAstNode(node) {
  return node.name === scoreComputationAstNodeName;
}
const allowedRuleSourceTypes = ["Bool", "Int", "Float", "String"];
function isAllowedScoringRuleType(type) {
  return allowedRuleSourceTypes.includes(type);
}
function getAggregationReturnType(aggregationNode, dataModel) {
  const aggregator = aggregationNode.namedChildren.aggregator.constant;
  if (aggregator === "COUNT" || aggregator === "COUNT_DISTINCT") return "Int";
  const tableName = aggregationNode.namedChildren.tableName.constant;
  const fieldName = aggregationNode.namedChildren.fieldName.constant;
  if (!tableName || !fieldName) return "Undefined";
  const field = dataModel.find((t) => t.name === tableName)?.fields.find((f) => f.name === fieldName);
  if (!field) return "Undefined";
  if (aggregator === "SUM" || aggregator === "AVG" || aggregator === "PCTILE") {
    return field.dataType === "Int" ? "Int" : "Float";
  }
  if (aggregator === "MIN" || aggregator === "MAX") {
    return isAllowedScoringRuleType(field.dataType) ? field.dataType : null;
  }
  return null;
}
function getOperationType(entityType, dataModel, node) {
  const entityTable = dataModel.find((table) => table.name === entityType);
  if (!entityTable || !node.namedChildren.type || !isConstant(node.namedChildren.type)) {
    return null;
  }
  switch (node.namedChildren.type.constant) {
    case "user_attribute": {
      const astField = node.namedChildren.field;
      if (!astField || !isPayload(astField)) {
        return "Undefined";
      }
      const field = entityTable.fields.find((f) => f.name === astField.children[0].constant);
      if (!field || !isAllowedScoringRuleType(field.dataType)) {
        return null;
      }
      return field.dataType;
    }
    case "aggregate": {
      const astField = node.namedChildren.field;
      if (!astField || !isAggregation(astField)) return "Undefined";
      return getAggregationReturnType(astField, dataModel ?? []);
    }
    default:
      return null;
  }
}
function transformAstNodeToModel(node, entityType, dataModel) {
  if (!isSwitchAstNode(node)) return null;
  return transformSwitchAstNodeToModel(node, entityType, dataModel);
}
function transformSwitchAstNodeToModel(node, entityType, dataModel) {
  if (!isConstant(node.namedChildren.type)) return null;
  const type = node.namedChildren.type.constant;
  if (type !== "user_attribute" && type !== "aggregate" && type !== "screening_tags" && type !== "entity_tags" && type !== "past_alerts")
    return null;
  if (type === "past_alerts") {
    const scoreComputationNodes2 = node.children.filter(isScoreComputationAstNode);
    if (scoreComputationNodes2.length === 0) {
      return { type: "past_alerts", conditions: { type: "bool", ifTrue: { modifier: 0 }, ifFalse: { modifier: 0 } } };
    }
    const conditions2 = parsePastAlertsBranches(scoreComputationNodes2);
    if (!conditions2) return null;
    return { type: "past_alerts", conditions: conditions2 };
  }
  if (type === "screening_tags" || type === "entity_tags") {
    const scoreComputationNodes2 = node.children.filter(isScoreComputationAstNode);
    if (scoreComputationNodes2.length === 0) {
      return {
        type,
        conditions: { type: "tags", branches: [{ value: [], impact: { modifier: 0 } }], default: { modifier: 0 } }
      };
    }
    const conditions2 = parseTagsBranches(scoreComputationNodes2);
    if (!conditions2) return null;
    return { type, conditions: conditions2 };
  }
  const scoreComputationNodes = node.children.filter(isScoreComputationAstNode);
  if (scoreComputationNodes.length === 0) return { type, field: null, conditions: null };
  const fieldType = entityType && dataModel ? getOperationType(entityType, dataModel, node) : null;
  const conditions = M(fieldType).with("Bool", () => parseBoolBranches(scoreComputationNodes)).with("String", () => parseStringBranches(scoreComputationNodes)).with("Int", "Float", () => parseNumberBranches(scoreComputationNodes)).otherwise(() => null);
  if (!conditions) return null;
  if (type === "user_attribute") {
    if (!isPayload(node.namedChildren.field)) return null;
    return { type: "user_attribute", field: node.namedChildren.field, conditions };
  }
  if (type === "aggregate") {
    if (!isAggregation(node.namedChildren.field)) return null;
    return { type: "aggregate", field: node.namedChildren.field, conditions };
  }
  return null;
}
function buildAstNodeFromModel(model, ctx = {}) {
  if (model.type === "past_alerts") {
    return {
      id: v7(),
      name: switchAstNodeName,
      constant: void 0,
      namedChildren: {
        field: NewConstantAstNode({ constant: null }),
        type: NewConstantAstNode({ constant: model.type })
      },
      children: buildPastAlertsSwitchChildren(model.conditions)
    };
  }
  if (model.type === "screening_tags" || model.type === "entity_tags") {
    if (!ctx.entityType) {
      throw new Error(`buildAstNodeFromModel: entityType is required to build a "${model.type}" rule`);
    }
    return {
      id: v7(),
      name: switchAstNodeName,
      constant: void 0,
      namedChildren: {
        field: NewConstantAstNode({ constant: null }),
        type: NewConstantAstNode({ constant: model.type })
      },
      children: buildTagsSwitchChildren(model.type, model.conditions, ctx.entityType)
    };
  }
  const children = buildConditionChildren(model.field, model.conditions);
  return {
    id: v7(),
    name: switchAstNodeName,
    constant: void 0,
    namedChildren: {
      field: model.field,
      type: NewConstantAstNode({ constant: model.type })
    },
    children
  };
}
function buildPastAlertsSwitchChildren(conditions) {
  return [
    buildScoreComputationAstNode(NewRecordHasPastAlertsAstNode(), conditions.ifTrue),
    buildScoreComputationAstNode(NewConstantAstNode({ constant: true }), conditions.ifFalse)
  ];
}
function parsePastAlertsBranches(nodes) {
  if (nodes.length !== 2) return null;
  const [trueNode, falseNode] = nodes;
  const trueCondition = trueNode.children[0];
  if (!trueCondition || !isRecordHasPastAlertAstNode(trueCondition)) return null;
  const falseCondition = falseNode.children[0];
  if (!falseCondition || !isConstant(falseCondition) || falseCondition.constant !== true) return null;
  const ifTrue = { modifier: trueNode.namedChildren.modifier.constant };
  if (trueNode.namedChildren.floor) ifTrue.floor = trueNode.namedChildren.floor.constant;
  const ifFalse = { modifier: falseNode.namedChildren.modifier.constant };
  if (falseNode.namedChildren.floor) ifFalse.floor = falseNode.namedChildren.floor.constant;
  return { type: "bool", ifTrue, ifFalse };
}
function buildTagsSwitchChildren(type, conditions, entityType) {
  const branchNodes = conditions.branches.map((branch) => {
    const config = { targetTableName: entityType, topicFilters: branch.value };
    const branchCondition = type === "screening_tags" ? NewTagCheckAstNode(monitoringListCheckAstNodeName, config) : NewTagCheckAstNode(recordHasTagsAstNodeName, config);
    return buildScoreComputationAstNode(branchCondition, branch.impact);
  });
  return [...branchNodes, buildScoreComputationAstNode(NewConstantAstNode({ constant: true }), conditions.default)];
}
function parseTagsBranches(nodes) {
  const lastNode = nodes[nodes.length - 1];
  const lastCondition = lastNode.children[0];
  if (!lastCondition || !isConstant(lastCondition) || lastCondition.constant !== true) return null;
  const defaultImpact = { modifier: lastNode.namedChildren.modifier.constant };
  if (lastNode.namedChildren.floor) defaultImpact.floor = lastNode.namedChildren.floor.constant;
  const branches = nodes.slice(0, -1).map((branchNode) => {
    const branchImpact = { modifier: branchNode.namedChildren.modifier.constant };
    if (branchNode.namedChildren.floor) branchImpact.floor = branchNode.namedChildren.floor.constant;
    const conditionNode = branchNode.children[0];
    let tagValues = [];
    if (conditionNode && (isMonitoringListCheckAstNode(conditionNode) || isRecordHasTagsAstNode(conditionNode))) {
      tagValues = conditionNode.namedChildren.config.constant.topicFilters;
    }
    return { value: tagValues, impact: branchImpact };
  });
  return { type: "tags", branches, default: defaultImpact };
}
function buildConditionChildren(field, conditions) {
  switch (conditions.type) {
    case "number":
      return buildNumberSwitchChildren(field, conditions);
    case "bool":
      return buildBoolSwitchChildren(field, conditions);
    case "string":
      return buildStringSwitchChildren(field, conditions);
  }
}
function buildNumberSwitchChildren(field, conditions) {
  return [
    ...conditions.branches.map(
      (branch) => buildScoreComputationAstNode(buildLessThanOrEqualNode(field, branch.value), branch.impact)
    ),
    buildScoreComputationAstNode(NewConstantAstNode({ constant: true }), conditions.default)
  ];
}
function buildLessThanOrEqualNode(field, threshold) {
  return {
    id: v7(),
    name: "<=",
    constant: void 0,
    children: [{ ...field, id: v7() }, NewConstantAstNode({ constant: threshold })],
    namedChildren: {}
  };
}
function buildBoolSwitchChildren(field, conditions) {
  return [
    buildScoreComputationAstNode(buildEqualNode(field, true), conditions.ifTrue),
    buildScoreComputationAstNode(buildEqualNode(field, false), conditions.ifFalse)
  ];
}
function buildEqualNode(field, value) {
  return {
    id: v7(),
    name: "=",
    constant: void 0,
    children: [{ ...field, id: v7() }, NewConstantAstNode({ constant: value })],
    namedChildren: {}
  };
}
function buildStringSwitchChildren(field, conditions) {
  return [
    ...conditions.branches.map(
      (branch) => buildScoreComputationAstNode(buildStringOperatorNode(field, branch.value), branch.impact)
    ),
    buildScoreComputationAstNode(NewConstantAstNode({ constant: true }), conditions.default)
  ];
}
function buildStringOperatorNode(field, operation) {
  const lhs = { ...field, id: v7() };
  if (operation.op === "IsInList" || operation.op === "IsNotInList") {
    const rhs = operation.value.type === "customList" ? NewCustomListAstNode(operation.value.listId) : NewConstantAstNode({ constant: operation.value.values });
    return { id: v7(), name: operation.op, constant: void 0, children: [lhs, rhs], namedChildren: {} };
  }
  return {
    id: v7(),
    name: operation.op,
    constant: void 0,
    children: [lhs, NewConstantAstNode({ constant: operation.value })],
    namedChildren: {}
  };
}
const stringOps = /* @__PURE__ */ new Set([
  "=",
  "≠",
  "StringContains",
  "StringNotContain",
  "StringStartsWith",
  "StringEndsWith",
  "IsInList",
  "IsNotInList"
]);
function parseStringBranches(nodes) {
  if (nodes.length === 0) return null;
  const lastNode = nodes[nodes.length - 1];
  const lastCondition = lastNode.children[0];
  if (!lastCondition || !isConstant(lastCondition) || lastCondition.constant !== true) return null;
  const nonDefaultNodes = nodes.slice(0, -1);
  const branches = [];
  for (const n of nonDefaultNodes) {
    const condition = n.children[0];
    if (!condition || !isMainAstBinaryNode(condition) || !stringOps.has(condition.name)) return null;
    const rhs = condition.children[1];
    const impact = { modifier: n.namedChildren.modifier.constant };
    if (n.namedChildren.floor) impact.floor = n.namedChildren.floor.constant;
    const isListOp = condition.name === "IsInList" || condition.name === "IsNotInList";
    if (isListOp) {
      if (isCustomListAccess(rhs)) {
        branches.push({
          value: {
            op: condition.name,
            value: { type: "customList", listId: rhs.namedChildren.customListId.constant }
          },
          impact
        });
      } else if (isConstant(rhs) && Array.isArray(rhs.constant) && rhs.constant.every((s) => typeof s === "string")) {
        branches.push({
          value: {
            op: condition.name,
            value: { type: "stringList", values: rhs.constant }
          },
          impact
        });
      } else {
        return null;
      }
    } else {
      if (!isConstant(rhs) || typeof rhs.constant !== "string") return null;
      branches.push({ value: { op: condition.name, value: rhs.constant }, impact });
    }
  }
  const defaultImpact = { modifier: lastNode.namedChildren.modifier.constant };
  if (lastNode.namedChildren.floor) defaultImpact.floor = lastNode.namedChildren.floor.constant;
  return { type: "string", branches, default: defaultImpact };
}
function parseNumberBranchValues(nodes) {
  const branches = [];
  for (const n of nodes) {
    const condition = n.children[0];
    if (!condition || !isMainAstBinaryNode(condition) || condition.name !== "<=") return null;
    const valueNode = condition.children[1];
    if (!isConstant(valueNode) || typeof valueNode.constant !== "number") return null;
    const impact = { modifier: n.namedChildren.modifier.constant };
    if (n.namedChildren.floor) impact.floor = n.namedChildren.floor.constant;
    branches.push({ value: valueNode.constant, impact });
  }
  return branches;
}
function parseNumberBranches(nodes) {
  if (nodes.length === 0) return null;
  const lastNode = nodes[nodes.length - 1];
  const lastCondition = lastNode.children[0];
  if (!lastCondition || !isConstant(lastCondition) || lastCondition.constant !== true) return null;
  const nonDefaultNodes = nodes.slice(0, -1);
  const branches = parseNumberBranchValues(nonDefaultNodes);
  if (!branches) return null;
  const defaultImpact = { modifier: lastNode.namedChildren.modifier.constant };
  if (lastNode.namedChildren.floor) defaultImpact.floor = lastNode.namedChildren.floor.constant;
  return { type: "number", branches, default: defaultImpact };
}
function parseBoolBranches(nodes) {
  if (nodes.length !== 2) return null;
  const [trueNode, falseNode] = nodes;
  const trueCondition = trueNode.children[0];
  const falseCondition = falseNode.children[0];
  if (!trueCondition || !isMainAstBinaryNode(trueCondition) || trueCondition.name !== "=" || !falseCondition || !isMainAstBinaryNode(falseCondition) || falseCondition.name !== "=")
    return null;
  const trueRhs = trueCondition.children[1];
  const falseRhs = falseCondition.children[1];
  if (!isConstant(trueRhs) || trueRhs.constant !== true) return null;
  if (!isConstant(falseRhs) || falseRhs.constant !== false) return null;
  const ifTrue = { modifier: trueNode.namedChildren.modifier.constant };
  if (trueNode.namedChildren.floor) ifTrue.floor = trueNode.namedChildren.floor.constant;
  const ifFalse = { modifier: falseNode.namedChildren.modifier.constant };
  if (falseNode.namedChildren.floor) ifFalse.floor = falseNode.namedChildren.floor.constant;
  return { type: "bool", ifTrue, ifFalse };
}
function buildScoreComputationAstNode(conditionNode, impact) {
  const namedChildren = {
    modifier: NewConstantAstNode({ constant: impact.modifier })
  };
  if (impact.floor !== void 0) {
    namedChildren.floor = NewConstantAstNode({ constant: impact.floor });
  }
  return {
    id: v7(),
    name: scoreComputationAstNodeName,
    constant: void 0,
    children: [conditionNode],
    namedChildren
  };
}
const RULE_TYPES = ["user_attribute", "aggregate", "screening_tags", "entity_tags", "past_alerts"];
function isCompleteRule(model) {
  if (model.type === "user_attribute" || model.type === "aggregate") {
    return model.field !== null && model.conditions !== null;
  }
  return true;
}
function FieldPill({ field, fieldType }) {
  const typeIcon = isAllowedScoringRuleType(fieldType) ? getDataTypeIcon(fieldType) : null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Tag, { color: "grey", className: "gap-sm", children: [
    getFieldLabel(field),
    typeIcon ? /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: typeIcon, className: "size-4" }) : null
  ] });
}
function getFieldLabel(field) {
  if (isPayload(field)) return field.children[0].constant;
  if (isAggregation(field)) return field.namedChildren["fieldName"].constant;
  return "…";
}
function SwitchCaseRow({ impact, children, maxRiskLevel, matched = false }) {
  const { t } = useTranslation(["user-scoring"]);
  const colors = isMaxRiskLevelInRange(maxRiskLevel) ? SCORING_LEVELS_COLORS[maxRiskLevel] : {};
  return /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: cn("flex items-center gap-sm", matched && "text-grey-primary font-medium"), children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("ms-md list-item list-disc whitespace-nowrap", matched && "marker:text-purple-primary"), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: cn("flex items-center gap-sm", matched && "rounded-sm bg-purple-background-light px-xs py-0.5"),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-sm", children: [
          children,
          " ",
          t("user-scoring:switch.then")
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Tag, { color: "grey", children: [
          "score ",
          impact.modifier > 0 ? "+" : "",
          impact.modifier
        ] }),
        impact.floor !== void 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("user-scoring:switch.and") }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Tag, { color: "grey", className: "gap-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("user-scoring:switch.floor_label") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-full size-3", style: { backgroundColor: colors[impact.floor] } })
          ] })
        ] }) : null
      ]
    }
  ) }) });
}
function RiskLevelSelect({ floor, maxRiskLevel, onChange }) {
  const { t } = useTranslation(["user-scoring"]);
  const levelEntries = isMaxRiskLevelInRange(maxRiskLevel) ? scoringLevelEntries(SCORING_LEVELS_COLORS[maxRiskLevel]) : [];
  const options = [
    { label: t("user-scoring:switch.add_floor"), value: null },
    ...levelEntries.map(([level, color]) => ({
      label: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex gap-xs items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          t("user-scoring:switch.floor_label"),
          " "
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-4 rounded-full shrink-0", style: { backgroundColor: color } })
      ] }),
      value: level
    }))
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    SelectV2,
    {
      value: floor ?? null,
      placeholder: t("user-scoring:switch.add_floor"),
      options,
      onChange: (v) => onChange(v ?? void 0),
      className: "w-30"
    }
  );
}
function BoolSwitchDescription({ conditions, maxRiskLevel, matchedBranchIndex }) {
  const { t } = useTranslation(["user-scoring"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "flex flex-col gap-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SwitchCaseRow, { impact: conditions.ifTrue, maxRiskLevel, matched: matchedBranchIndex === 0, children: t("user-scoring:switch.description.if_true") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SwitchCaseRow, { impact: conditions.ifFalse, maxRiskLevel, matched: matchedBranchIndex === 1, children: t("user-scoring:switch.description.if_false") })
  ] });
}
function NumberSwitchDescription({
  conditions,
  maxRiskLevel,
  matchedBranchIndex
}) {
  const { t } = useTranslation(["user-scoring"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "flex flex-col gap-sm", children: [
    conditions.branches.map((branch, idx) => {
      const label = idx === 0 ? t("user-scoring:switch.description.if_value_lte", { value: branch.value }) : t("user-scoring:switch.description.if_value_between", {
        from: conditions.branches[idx - 1].value + 1,
        to: branch.value
      });
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        SwitchCaseRow,
        {
          impact: branch.impact,
          maxRiskLevel,
          matched: matchedBranchIndex === idx,
          children: label
        },
        idx
      );
    }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SwitchCaseRow,
      {
        impact: conditions.default,
        maxRiskLevel,
        matched: matchedBranchIndex === conditions.branches.length,
        children: t("user-scoring:switch.description.else")
      }
    )
  ] });
}
function StringOperationValue({ operation, customLists }) {
  if (operation.op === "IsInList" || operation.op === "IsNotInList") {
    const listValue = operation.value;
    if (listValue.type === "customList") {
      const list = customLists.find((l) => l.id === listValue.listId);
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(Tag, { color: "grey", className: "flex items-center gap-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "list", className: "size-3" }),
        list?.name ?? listValue.listId
      ] });
    }
    const MAX_VISIBLE = 3;
    const visible = listValue.values.slice(0, MAX_VISIBLE);
    const overflow = listValue.values.length - MAX_VISIBLE;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex flex-wrap items-center gap-xs", children: [
      visible.map((v, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { color: "grey", children: v }, i)),
      overflow > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Tag, { color: "grey", children: [
        "+",
        overflow
      ] })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { color: "grey", children: operation.value });
}
function StringSwitchDescription({
  conditions,
  maxRiskLevel,
  customLists = [],
  matchedBranchIndex
}) {
  const { t } = useTranslation(["user-scoring"]);
  const opLabels = {
    "=": t("user-scoring:switch.string.op.eq"),
    "≠": t("user-scoring:switch.string.op.neq"),
    StringContains: t("user-scoring:switch.string.op.contains"),
    StringNotContain: t("user-scoring:switch.string.op.not_contains"),
    StringStartsWith: t("user-scoring:switch.string.op.starts_with"),
    StringEndsWith: t("user-scoring:switch.string.op.ends_with"),
    IsInList: t("user-scoring:switch.string.op.in_list"),
    IsNotInList: t("user-scoring:switch.string.op.not_in_list")
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "flex flex-col gap-sm", children: [
    conditions.branches.map((branch, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      SwitchCaseRow,
      {
        impact: branch.impact,
        maxRiskLevel,
        matched: matchedBranchIndex === idx,
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-sm", children: [
          t("user-scoring:switch.description.if_value", { op: opLabels[branch.value.op] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(StringOperationValue, { operation: branch.value, customLists })
        ] })
      },
      idx
    )),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SwitchCaseRow,
      {
        impact: conditions.default,
        maxRiskLevel,
        matched: matchedBranchIndex === conditions.branches.length,
        children: t("user-scoring:switch.description.else")
      }
    )
  ] });
}
function TagsSwitchDescription({
  conditions,
  maxRiskLevel,
  getTagLabel,
  matchedBranchIndex
}) {
  const { t } = useTranslation(["user-scoring"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "flex flex-col gap-sm", children: [
    conditions.branches.map((branch, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      SwitchCaseRow,
      {
        impact: branch.impact,
        maxRiskLevel,
        matched: matchedBranchIndex === idx,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("user-scoring:switch.screening_tags.if_tags_include") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex flex-wrap gap-xs", children: branch.value.map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { color: "grey", children: getTagLabel(tag) }, tag)) })
        ]
      },
      idx
    )),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SwitchCaseRow,
      {
        impact: conditions.default,
        maxRiskLevel,
        matched: matchedBranchIndex === conditions.branches.length,
        children: t("user-scoring:switch.description.else")
      }
    )
  ] });
}
function SwitchNodeView({
  node,
  dataModel,
  entityType,
  maxRiskLevel,
  customLists,
  matchedBranchIndex
}) {
  const { t: tAstBuilder } = useTranslation(["common", "scenarios"]);
  const {
    t,
    i18n: { language }
  } = useTranslation(["user-scoring", "scenarios"]);
  const { getTagById } = useOrganizationObjectTags();
  const fieldType = isSwitchAstNode(node) ? getOperationType(entityType, dataModel, node) : null;
  const model = transformAstNodeToModel(node, entityType, dataModel);
  const hasChildren = isSwitchAstNode(node) ? node.children.length > 0 : true;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-sm ps-2xl text-xs text-grey-secondary", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap items-center gap-sm", children: model ? M(model).with(
      { type: "user_attribute" },
      (m) => isCompleteRule(m) ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("user-scoring:switch.depending_on") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(FieldPill, { field: m.field, fieldType }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          ", ",
          t("user-scoring:switch.apply_conditions")
        ] })
      ] }) : null
    ).with(
      { type: "aggregate" },
      (m) => isCompleteRule(m) ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("user-scoring:switch.depending_on") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Tag, { color: "grey", className: "gap-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: getAstNodeDisplayName(m.field, {
            customLists: [],
            language,
            t: tAstBuilder
          }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "function", className: "size-4" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          ", ",
          t("user-scoring:switch.apply_conditions")
        ] })
      ] }) : null
    ).with({ type: "screening_tags" }, () => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("user-scoring:switch.screening_tags.depending_on") })).with({ type: "entity_tags" }, () => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("user-scoring:switch.entity_tags.depending_on") })).with({ type: "past_alerts" }, () => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("user-scoring:switch.past_alerts.depending_on") })).exhaustive() : null }),
    !hasChildren ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "italic text-grey-placeholder", children: t("user-scoring:switch.no_condition") }) : model && isCompleteRule(model) ? M(model).with(
      { type: "user_attribute" },
      { type: "aggregate" },
      (m) => M(m.conditions).with({ type: "number" }, (c) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        NumberSwitchDescription,
        {
          conditions: c,
          maxRiskLevel,
          matchedBranchIndex
        }
      )).with({ type: "bool" }, (c) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        BoolSwitchDescription,
        {
          conditions: c,
          maxRiskLevel,
          matchedBranchIndex
        }
      )).with({ type: "string" }, (c) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        StringSwitchDescription,
        {
          conditions: c,
          maxRiskLevel,
          customLists,
          matchedBranchIndex
        }
      )).exhaustive()
    ).with({ type: "screening_tags" }, (m) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      TagsSwitchDescription,
      {
        conditions: m.conditions,
        maxRiskLevel,
        matchedBranchIndex,
        getTagLabel: (value) => {
          const cats = topicsToCategories([value]);
          const cat = cats[0];
          return cat ? t(`scenarios:monitoring_list_check.hit_type.${SCREENING_CATEGORY_I18N_KEY_MAP[cat]}`) : value;
        }
      }
    )).with({ type: "entity_tags" }, (m) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      TagsSwitchDescription,
      {
        conditions: m.conditions,
        maxRiskLevel,
        matchedBranchIndex,
        getTagLabel: (value) => getTagById(value)?.name ?? value
      }
    )).with({ type: "past_alerts" }, (m) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      BoolSwitchDescription,
      {
        conditions: m.conditions,
        maxRiskLevel,
        matchedBranchIndex
      }
    )).exhaustive() : null
  ] });
}
const useListScoringRulesetVersionsQuery = (recordType) => {
  const listRulesetVersions = useServerFn(listRulesetVersionsFn);
  return useQuery({
    queryKey: ["scoring", "ruleset-versions", recordType],
    queryFn: async () => {
      const result = await listRulesetVersions({ data: { recordType } });
      return result;
    },
    enabled: !!recordType
  });
};
export {
  NewSwitchAstNode as N,
  RULE_TYPES as R,
  SwitchNodeView as S,
  isCompleteRule as a,
  isScoreComputationAstNode as b,
  buildAstNodeFromModel as c,
  isAllowedScoringRuleType as d,
  RiskLevelSelect as e,
  getAggregationReturnType as g,
  isSwitchAstNode as i,
  transformAstNodeToModel as t,
  useListScoringRulesetVersionsQuery as u
};

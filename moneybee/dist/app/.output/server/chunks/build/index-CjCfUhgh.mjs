import { Q as jsxRuntimeExports, M as reactExports } from "./server.mjs";
import { a2 as M, dh as isAndAstNode, di as isOrWithAndAstNode, aZ as findDataModelTableByName, aS as z, ck as isMainAstBinaryNode, dc as isMainAstNode, dd as isMainAstUnaryNode, n as isKnownOperandAstNode, t as t$g, cg as NewConstantAstNode, aX as NewUndefinedAstNode, dg as NewAndAstNode, de as isUnaryMainAstOperatorFunction, df as isBinaryMainAstOperatorFunction, c9 as isValueSwitchAstNode, cZ as isEditableAstNode, ca as isUndefinedAstNode, cS as injectIdToNode, $ as t$a, p as t$c, c_ as isBinaryAggregationFilter, c$ as isComplexAggregationFilter, d0 as aggregationFilterOperators, d1 as isUnaryAggregationFilterOperator, d2 as isBinaryAggregationFilterOperator, d3 as NewFuzzyMatchFilterOptionsAstNode, c6 as isFuzzyMatchFilterOptionsAstNode, d4 as NewAggregatorFilterAstNode, bX as undefinedAstNodeName, cp as NewCustomListAstNode, c4 as isIsMultipleOf, b$ as isTimeAdd, c1 as isTimestampExtract, c3 as isFuzzyMatchComparator, b_ as isAggregation, c5 as isStringTemplateAstNode, c7 as isMonitoringListCheckAstNode, c2 as isIpHasFlag, c8 as isRecordRiskLevelCheckAstNode, bv as getDataTypeIcon, cb as isDatabaseAccess, cc as isPayload, cC as NewAggregatorAstNode, cD as NewFuzzyMatchComparatorAstNode, cE as NewTimeAddAstNode, cF as NewTimestampExtractAstNode, cG as NewTimeNowAstNode, cH as NewIsMultipleOfAstNode, cI as NewIpHasFlagAstNode, cJ as NewValueSwitchAstNode, cm as NewTagCheckAstNode, cn as monitoringListCheckAstNodeName, cK as NewRecordRiskLevelCheckAstNode, bP as isConstant, bZ as isDataAccessorAstNode, c0 as isTimeNow, cA as e$3, bY as isCustomListAccess, db as isTimestampFieldAstNode, bS as validTimestampExtractParts, d5 as AggregationFuzzyMatchConfig, d7 as fromPathToTarget, cd as topicsToCategories, d8 as fromLinkedTableChecks, bT as validIpFlags, d6 as isIpFieldAstNode, cf as parseValueSwitchAstNode, cV as createEmptyValueSwitchModel, cM as getValueSwitchDimensionKey, cW as valueSwitchModelToAst, cN as isValueSwitchModelComplete, cU as getConstantDataTypeTKey, aY as findDataModelField, cz as findDataModelTable, bW as assertNever, cP as getDataTypeTKey, T as Temporal, z as isAdmin, cB as createBaseFuzzyMatchConfig, ce as SCREENING_CATEGORY_I18N_KEY_MAP, aQ as SCREENING_CATEGORIES, d9 as toMonitoringListCheckConfig, cO as getValueSwitchCellKey, cX as normalizeValueSwitchThresholds, u as t$e, _ as t$8, cL as t$5, cT as stripIdFromNode, cR as recordRiskLevelCheckAstNodeName, cQ as isUnaryAggregationFilter, da as STRING_TEMPLATE_VARIABLE_REGEXP, o as t$9, v as n$7, cY as getValueSwitchCombinations } from "./services-middleware-nMulUXHZ.mjs";
import { c as clsx, u as useTranslation, I as Icon, d as cn, a6 as Input, g as useFormatLanguage, M as MenuCommand, T as Trans, B as Button, j as cva, a2 as HoverCard, a3 as HoverCardTrigger, a4 as HoverCardPortal, a5 as HoverCardContent, h as formatNumber, ap as NumberInput, aq as Card, ab as Radio, W as CtaV2ClassName, aX as useVirtualizer } from "./Tabs-CzpyUi7T.mjs";
import { u as useCallbackRef$1 } from "./use-callback-ref-Bwe341Yf.mjs";
import { ai as getBuilderOptionsFn, ah as validateAstFn, T as Tooltip, aj as scenarioI18n, L as Link } from "./router-KSC-NEr8.mjs";
import { f as fromUUIDtoSUUID, q as invariant } from "./short-uuid-fTZYJj_k.mjs";
import { u as useQuery } from "./useQuery-Bb0AEcpf.mjs";
import { u as useServerFn } from "./useServerFn-oRH5Nw97.mjs";
import { B, g as g$2 } from "./sharpstate.es-C0BW2AZi.mjs";
import { n as getResolvedEnumValues, k as dateTimeDataTypeSchema, o as isEnumField, q as resolveEnumValues, s as resolveEnumDisplay, E as EnumTag } from "./DataField-BczNbAhi.mjs";
import { a as aggregatorOperators, b as aggregatorHasParams, i as isRestrictedAggregator, f as formatReturnValue, c as adaptBooleanOrNullReturnValue, d as getOperatorName, e as isPerformanceHeavyAggregator, g as getAstNodeDisplayName, h as e$1, j as e, t as timeAddOperators, k as getDataAccessorDisplayName, l as formatConstant, m as e$2 } from "./helpers-D-Bggz_h.mjs";
import { e as e$4 } from "./isArray-gJc74O_I.mjs";
import { T as Tag, z as zt } from "./create-context-k6HmQ6bB.mjs";
import { i as isMaxRiskLevelInRange, s as scoringLevelEntries, S as SCORING_LEVELS_COLORS, a as SCORING_LEVELS_LABEL_KEYS } from "./display-TKj7AN5a.mjs";
import { u as useMutation } from "./useMutation-BOdeDeAR.mjs";
import { u as useCallbackRef } from "./use-callback-ref-DoQNLci-.mjs";
import { t as t$1 } from "./hasAtLeast-BmuNoqMd.mjs";
import { a as Callout } from "./Callout-B0OuRL3q.mjs";
import { E as ExternalLink } from "./ExternalLink-BlVgwkVd.mjs";
import { d as dateDocHref, b as aggregationDocHref, s as stringTemplatingDocHref, f as fuzzyMatchingDocHref } from "./documentation-href-DY9fs71n.mjs";
import { L as Logo } from "./Logo-3vzUxSrh.mjs";
import { M as Modal } from "./Modal-CpYmGWjB.mjs";
import { a as adaptEvaluationErrorViewModels, c as commonErrorMessages } from "./scenario-validation-error-messages-DGyZ9TEq.mjs";
import { t as t$2 } from "./flatMap-CdA7bREZ.mjs";
import { N as Nudge } from "./Nudge-Cmzwt2Be.mjs";
import { S as SelectV2, a as Select } from "./Select-Dg3p9vJ0.mjs";
import { u as useCreateNavigationOptionForAstMutation } from "./create-navigation-option-CCfvMbYU.mjs";
import { S as Stepper } from "./Stepper-D5HOcTsM.mjs";
import { C as Checkbox } from "./Checkbox-C8nszDsh.mjs";
import { u as useOrganizationDetails } from "./organization-detail-BGvqBGx1.mjs";
import { H as Highlight } from "./Highlight-NVjBw0RI.mjs";
import { m as matchSorter } from "./match-sorter.esm-BRMYSlZQ.mjs";
import { e as e$5 } from "./isNonNullish-DgEqPJBU.mjs";
import { E as ExpandableGroupTagLine } from "./ExpandableGroupTagLine-MgT0uQKb.mjs";
function t(...t2) {
  return t$g(n, t2);
}
function n(e2, t2 = [], n2 = []) {
  if (typeof e2 == `function`) return e2;
  if (typeof e2 != `object` || !e2) return structuredClone(e2);
  let a = Object.getPrototypeOf(e2);
  if (a !== null && a !== Object.prototype && !Array.isArray(e2)) return structuredClone(e2);
  let o = t2.indexOf(e2);
  return o === -1 ? (t2.push(e2), Array.isArray(e2) ? i(e2, t2, n2) : r(e2, t2, n2)) : n2[o];
}
function r(e2, t2, r2) {
  let i2 = {};
  r2.push(i2);
  for (let [a, o] of Object.entries(e2)) i2[a] = n(o, t2, r2);
  return i2;
}
function i(e2, t2, r2) {
  let i2 = [];
  r2.push(i2);
  for (let [a, o] of e2.entries()) i2[a] = n(o, t2, r2);
  return i2;
}
function getDataAccessorAstNodeField(astNode, context) {
  if (isPayload(astNode)) {
    return findDataModelField({
      table: context.triggerObjectTable,
      fieldName: astNode.children[0].constant
    });
  }
  if (isDatabaseAccess(astNode)) {
    const table = findDataModelTable({
      dataModel: context.dataModel,
      tableName: astNode.namedChildren.tableName.constant,
      path: astNode.namedChildren.path.constant
    });
    return findDataModelField({
      table,
      fieldName: astNode.namedChildren.fieldName.constant
    });
  }
  assertNever("Unsupported DataAccessorAstNode", astNode);
}
function getAstNodeDataType(astNode, context) {
  if (isConstant(astNode)) {
    return getConstantAstNodeDataType(astNode);
  }
  if (isDataAccessorAstNode(astNode)) {
    const field = getDataAccessorAstNodeField(astNode, context);
    return field.dataType;
  }
  if (isStringTemplateAstNode(astNode)) {
    return "String";
  }
  if (isFuzzyMatchComparator(astNode) || isIsMultipleOf(astNode)) {
    return "Bool";
  }
  if (isTimestampExtract(astNode)) {
    return "Int";
  }
  if (isTimeNow(astNode) || isTimeAdd(astNode)) {
    return "Timestamp";
  }
  if (isIpHasFlag(astNode)) {
    return "Bool";
  }
  if (isValueSwitchAstNode(astNode)) {
    const values = [
      astNode.namedChildren.fallback.constant,
      ...astNode.children.map((child) => child.children[1]?.constant)
    ];
    return values.every((value) => typeof value === "number" && Number.isInteger(value)) ? "Int" : "Float";
  }
  return "unknown";
}
function getConstantAstNodeDataType(astNode) {
  const { constant } = astNode;
  if (e(constant)) {
    const parsedConstant = dateTimeDataTypeSchema.safeParse(constant);
    if (parsedConstant.success) {
      return "Timestamp";
    }
    return "String";
  }
  if (e$1(constant)) {
    return Number.isInteger(constant) ? "Int" : "Float";
  }
  if (e$2(constant)) {
    return "Bool";
  }
  if (e$4(constant)) {
    if (constant.every(e)) return "String[]";
    if (constant.every(e$1)) {
      return constant.every(Number.isInteger) ? "Int[]" : "Float[]";
    }
    if (constant.every(e$2)) return "Bool[]";
  }
  return "unknown";
}
function getAstNodeOperandType(astNode, context) {
  if (isConstant(astNode)) {
    const { constant } = astNode;
    if (e$3(context.enumValues) && context.enumValues.length > 0 && (e$1(constant) || e(constant)) && context.enumValues.includes(constant)) {
      return "Enum";
    }
    return "Constant";
  }
  if (isCustomListAccess(astNode)) {
    return "CustomList";
  }
  if (isMonitoringListCheckAstNode(astNode)) {
    return "ClientRisk";
  }
  if (isDataAccessorAstNode(astNode)) {
    return "Field";
  }
  if (isAggregation(astNode) || isTimeAdd(astNode) || isTimeNow(astNode) || isFuzzyMatchComparator(astNode) || isTimestampExtract(astNode) || isIsMultipleOf(astNode) || isStringTemplateAstNode(astNode) || isIpHasFlag(astNode) || isValueSwitchAstNode(astNode)) {
    return "Function";
  }
  if (isUndefinedAstNode(astNode)) {
    return "Undefined";
  }
  return "unknown";
}
const ComparatorFuzzyMatchConfig = createBaseFuzzyMatchConfig({
  algorithms: /* @__PURE__ */ new Set(["ratio", "token_set_ratio", "bag_of_words_similarity"]),
  defaultAlgorithm: "ratio",
  editablesAlgorithms: /* @__PURE__ */ new Set(["ratio", "token_set_ratio"]),
  defaultEditableAlgorithm: "token_set_ratio",
  thresholds: {
    low: 55,
    medium: 70,
    high: 85
  },
  defaultLevel: "high",
  examples: [
    {
      left: "Cabinet Dupond",
      right: "Jean-Charles Dupond",
      resultsScores: {
        ratio: 61,
        token_set_ratio: 61
      }
    },
    {
      left: "Mr Mrs John Jane OR Doe Smith",
      right: "John Doe",
      resultsScores: {
        ratio: 43,
        token_set_ratio: 100
      }
    },
    {
      left: "the dog was walking on the sidewalk",
      right: "the d og as walkin' on the side alk",
      resultsScores: {
        ratio: 91,
        token_set_ratio: 72
      }
    }
  ]
});
const fuzzyMatchConfig$2 = ComparatorFuzzyMatchConfig;
const FUNCTIONS_OPTIONS = [
  NewFuzzyMatchComparatorAstNode({ funcName: "FuzzyMatch", config: fuzzyMatchConfig$2 }),
  NewTimeAddAstNode(),
  NewTimestampExtractAstNode(),
  NewTimeNowAstNode(),
  NewIsMultipleOfAstNode(),
  NewIpHasFlagAstNode(),
  NewValueSwitchAstNode()
].map((n2) => ({ astNode: n2 }));
const MODELING_OPTIONS = ({
  currentNode,
  t: t2
}) => [
  {
    astNode: NewUndefinedAstNode({
      children: [currentNode, NewUndefinedAstNode()]
    }),
    dataType: "unknown",
    operandType: "Modeling",
    displayName: t2("scenarios:edit_operand.modeling.open_nesting"),
    // searchShortcut: '(',
    icon: "parentheses"
  }
];
const AST_BUILDER_STATIC_OPTIONS = [
  ...aggregatorOperators.map((operator) => ({
    astNode: NewAggregatorAstNode(operator)
  })),
  ...FUNCTIONS_OPTIONS
];
const CLIENT_RISK_OPTIONS = ({
  t: t2
}) => [
  {
    astNode: NewTagCheckAstNode(monitoringListCheckAstNodeName),
    displayName: t2("scenarios:monitoring_list_check.menu_label"),
    operandType: "ClientRisk",
    dataType: "Bool"
  },
  {
    astNode: NewRecordRiskLevelCheckAstNode(),
    displayName: t2("scenarios:record_risk_level_check.menu_label"),
    operandType: "ClientRisk",
    dataType: "Bool"
  }
];
function getFieldName(astNode) {
  return M(astNode).when(isDatabaseAccess, (n2) => n2.namedChildren.fieldName.constant).when(isPayload, (n2) => n2.children[0].constant).otherwise(() => "unknown");
}
function getDataAccessorPath(astNode) {
  if (isDatabaseAccess(astNode)) {
    const { tableName, path } = astNode.namedChildren;
    return [tableName.constant, ...path.constant].join(".");
  }
  return null;
}
function getOperandMenuOptions(params) {
  const mapOption = createMapOption({
    enumValues: params.enums,
    triggerObjectTable: params.triggerObjectTable,
    dataModel: params.data.dataModel,
    customLists: params.data.customLists,
    language: params.language,
    t: params.t
  });
  return [
    ...AST_BUILDER_STATIC_OPTIONS,
    ...params.data.databaseAccessors.filter((a) => !params.excludeFields?.includes(getFieldName(a))).map((a) => ({
      astNode: a,
      displayName: a.namedChildren.fieldName.constant
    })),
    ...params.data.payloadAccessors.filter((a) => !params.excludeFields?.includes(getFieldName(a))).map((a) => ({
      astNode: a
    })),
    ...params.data.customLists.map((l) => ({
      astNode: NewCustomListAstNode(l.id)
    })),
    ...(params.enums ?? []).map((enumValue) => ({
      astNode: NewConstantAstNode({ constant: enumValue })
    })),
    ...MODELING_OPTIONS({ currentNode: params.node, t: params.t }),
    ...CLIENT_RISK_OPTIONS({ t: params.t })
  ].map(mapOption);
}
function groupByOperandType(operandMenuOptions, context) {
  return t$e(
    operandMenuOptions,
    t$a((option) => option.operandType),
    // biome-ignore lint/suspicious/noShadowRestrictedNames: <TBD>
    ({ Enum, CustomList, Function, Field, Modeling, ClientRisk }) => {
      const fieldOptions = Field ? t$e(
        Field,
        t$a((option) => {
          const path = getDataAccessorPath(option.astNode);
          if (path) return path;
          if (isPayload(option.astNode)) {
            return context.triggerObjectTable.name;
          }
        }),
        t$8((value) => t$5(value, (opt) => getFieldName(opt.astNode))),
        t$c(),
        t$5(([path]) => path)
      ) : [];
      return {
        fieldOptions,
        enumOptions: Enum ?? [],
        customListOptions: CustomList ?? [],
        functionOptions: Function ?? [],
        modelingOptions: Modeling ?? [],
        clientRiskOptions: ClientRisk ?? []
      };
    }
  );
}
function createMapOption({ enumValues, customLists, language, t: t2, ...modelData }) {
  return function({ astNode, operandType, displayName, dataType, ...rest }) {
    return {
      astNode,
      operandType: operandType ?? getAstNodeOperandType(astNode, {
        enumValues
      }),
      displayName: displayName ?? getAstNodeDisplayName(astNode, {
        customLists,
        language,
        t: t2
      }),
      dataType: dataType ?? getAstNodeDataType(astNode, modelData),
      ...rest
    };
  };
}
function getOptionDisplayName(option, context) {
  return option.displayName ?? getAstNodeDisplayName(option.astNode, context);
}
function getEvaluationForNode(evaluation, nodeId) {
  return evaluation.filter((e2) => e2.relatedIds.includes(nodeId));
}
function getErrorsForNode(validation, nodeIds, direct = false) {
  if (!nodeIds) return [];
  const nodeIdsArr = typeof nodeIds === "string" ? [nodeIds] : nodeIds;
  return validation.evaluation.filter(
    (e2) => direct ? nodeIdsArr.includes(e2.nodeId) : nodeIdsArr.some((nodeId) => e2.relatedIds.includes(nodeId))
  ).flatMap((e2) => e2.errors);
}
function getValidationStatus(validation, nodeIds, direct = false) {
  const errors = getErrorsForNode(validation, nodeIds, direct);
  return errors.length > 0 ? "error" : "valid";
}
const ColoredNumberOptions = {
  thresholds: [
    { threshold: 0, comparison: "<", color: "green" },
    { threshold: 0, comparison: ">", color: "red" }
  ],
  defaultColor: "primary"
};
function useValidateAstMutation(params) {
  const validateAst = useServerFn(validateAstFn);
  return useMutation({
    mutationFn: async (payload) => {
      if (!params.scenarioId) {
        return { errors: [], evaluation: [] };
      }
      const result = await validateAst({
        data: {
          scenarioId: params.scenarioId,
          node: payload.node,
          expectedReturnType: payload.expectedReturnType
        }
      });
      return result.flat;
    }
  });
}
function useBuilderOptionsQuery(params) {
  const getBuilderOptions = useServerFn(getBuilderOptionsFn);
  const queryKey = ["resources", "builder-options", fromUUIDtoSUUID(params.scenarioId)];
  return useQuery({
    queryKey,
    queryFn: async () => getBuilderOptions({ data: { scenarioId: params.scenarioId } }),
    initialData: params.initialData
  });
}
const AstBuilderDataSharpFactory = B({
  name: "AstBuilderData",
  initializer(init) {
    return { ...init, isValueSwitchOpen: false };
  }
}).withComputed({
  triggerObjectTable(state) {
    return findDataModelTableByName({
      dataModel: state.data.dataModel,
      tableName: state.data.triggerObjectType
    });
  }
});
function AstBuilderInternalProvider(props) {
  const store = AstBuilderDataSharpFactory.createSharp({
    scenarioId: props.scenarioId,
    data: props.data,
    mode: props.mode,
    showValues: props.showValues,
    onValueSwitchOpenChange: props.onValueSwitchOpenChange
  });
  reactExports.useEffect(() => {
    store.value.showValues = props.showValues;
  }, [store, props.showValues]);
  reactExports.useEffect(() => {
    store.value.data = props.data;
  }, [store, props.data]);
  reactExports.useEffect(() => {
    store.value.onValueSwitchOpenChange = props.onValueSwitchOpenChange;
  }, [store, props.onValueSwitchOpenChange]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AstBuilderDataSharpFactory.Provider, { value: store, children: props.children });
}
function AstBuilderStaticProvider(props) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    AstBuilderInternalProvider,
    {
      scenarioId: void 0,
      data: props.data,
      mode: props.mode ?? "edit",
      showValues: props.showValues ?? false,
      children: props.children
    }
  );
}
function AstBuilderProvider(props) {
  const builderOptionsQuery = useBuilderOptionsQuery(props);
  if (builderOptionsQuery.isLoading || builderOptionsQuery.isPending) {
    return props.renderLoading ? props.renderLoading() : "Loading...";
  }
  if (builderOptionsQuery.isError) {
    return props.renderError ? props.renderError(builderOptionsQuery.error) : "Error...";
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    AstBuilderInternalProvider,
    {
      mode: props.mode ?? "view",
      scenarioId: props.scenarioId,
      data: builderOptionsQuery.data,
      showValues: props.showValues ?? false,
      onValueSwitchOpenChange: props.onValueSwitchOpenChange,
      children: props.children
    }
  );
}
function parsePath(stringPath) {
  const rawPath = stringPath.split(".");
  const root = rawPath.shift();
  if (root !== "root") throw new Error("root path is missing");
  const path = [];
  while (rawPath.length > 0) {
    const type = rawPath.shift();
    invariant(type);
    const value = rawPath.shift();
    invariant(value);
    switch (type) {
      case "children": {
        const index = parseInt(value, 10);
        if (Number.isNaN(index)) {
          throw new Error("invalid path: index must be a number");
        }
        path.push({ type: "children", index });
        break;
      }
      case "namedChildren": {
        path.push({ type: "namedChildren", key: value });
        break;
      }
      default:
        throw new Error(`invalid path: unknown type ${type}`);
    }
  }
  return path;
}
function getParentPath(path) {
  if (t$1(path, 1)) {
    return {
      path: path.slice(0, -1),
      childPathSegment: path[path.length - 1]
    };
  }
  return void 0;
}
function getAtPathSegment(tree, pathSegment) {
  switch (pathSegment.type) {
    case "children": {
      const { index } = pathSegment;
      return tree.children[index];
    }
    case "namedChildren": {
      const { key } = pathSegment;
      return tree.namedChildren[key];
    }
  }
}
function getAtPath(tree, path) {
  const [pathSegment, ...restPath] = path;
  if (pathSegment === void 0) {
    return tree;
  }
  const child = getAtPathSegment(tree, pathSegment);
  if (child === void 0) {
    return void 0;
  }
  return getAtPath(child, restPath);
}
const AstBuilderNodeSharpFactory = B({
  name: "AstBuilderNode",
  initializer({
    initialNode,
    initialValidation,
    validationFn,
    updateFn
  }) {
    return {
      node: t(initialNode),
      validation: initialValidation,
      copiedNode: null,
      validationFn,
      updateFn
    };
  }
}).withActions({
  setNodeAtPath(api, path, newNode) {
    const parentPath = getParentPath(parsePath(path));
    if (!parentPath) {
      api.value.node = newNode;
    } else {
      const parentNode = getAtPath(api.value.node, parentPath.path);
      if (!parentNode) {
        return;
      }
      M(parentPath.childPathSegment).with({ type: "children", index: z.select() }, (index) => {
        parentNode.children[index] = newNode;
      }).with({ type: "namedChildren", key: z.select() }, (key) => {
        parentNode.namedChildren[key] = newNode;
      }).exhaustive();
    }
    api.value.updateFn?.(t(api.value.node));
  },
  async validate(api) {
    try {
      const evaluation = await api.value.validationFn(api.value.node);
      api.batch(() => {
        api.value.validation = evaluation;
      });
    } catch (err) {
      if (err === "VALIDATION_ABORTED") {
        return;
      }
      throw err;
    }
  },
  copyNode(api, node) {
    api.value.copiedNode = t(node);
  },
  triggerUpdate(api) {
    api.value.updateFn?.(t(api.value.node));
  }
});
function useRoot(props, autoValidate = true) {
  const scenarioId = AstBuilderDataSharpFactory.select((s) => s.scenarioId);
  const onStoreChange = useCallbackRef(props.onStoreChange);
  const onValidationUpdate = useCallbackRef(props.onValidationUpdate);
  const onUpdate = useCallbackRef(props.onUpdate);
  const mutation = useValidateAstMutation({ scenarioId });
  const mutationAbortController = reactExports.useRef(null);
  const validationFn = useCallbackRef(async (node) => {
    if (!scenarioId) {
      const empty = { errors: [], evaluation: [] };
      onValidationUpdate(empty);
      return empty;
    }
    if (mutationAbortController.current) {
      mutationAbortController.current.abort("VALIDATION_ABORTED");
    }
    mutationAbortController.current = new AbortController();
    const result = await mutation.mutateAsync({
      node,
      expectedReturnType: props.returnType,
      ac: mutationAbortController.current
    }).finally(() => {
      mutationAbortController.current = null;
    });
    onValidationUpdate(result);
    return result;
  });
  const updateFn = useCallbackRef(async (node) => {
    onUpdate(node);
  });
  const nodeStore = AstBuilderNodeSharpFactory.createSharp({
    initialNode: props.node,
    initialValidation: props.validation ?? { errors: [], evaluation: [] },
    validationFn,
    updateFn
  });
  reactExports.useEffect(() => {
    if (autoValidate) {
      nodeStore.actions.validate();
    }
  }, [autoValidate, nodeStore, onValidationUpdate]);
  reactExports.useEffect(() => {
    onStoreChange(nodeStore);
    return () => {
      onStoreChange(null);
    };
  }, [onStoreChange, nodeStore]);
  return nodeStore;
}
const aggregatorMetadata = {
  COUNT: {
    tooltipKey: "scenarios:aggregator.count.tooltip",
    dataTypeRequirement: "any"
  },
  COUNT_DISTINCT: {
    tooltipKey: "scenarios:aggregator.count_distinct.tooltip",
    dataTypeRequirement: "any"
  },
  AVG: {
    tooltipKey: "scenarios:aggregator.average.tooltip",
    dataTypeRequirement: "numeric"
  },
  SUM: {
    tooltipKey: "scenarios:aggregator.sum.tooltip",
    dataTypeRequirement: "numeric"
  },
  MIN: {
    tooltipKey: "scenarios:aggregator.min.tooltip",
    dataTypeRequirement: "numeric-or-timestamp"
  },
  MAX: {
    tooltipKey: "scenarios:aggregator.max.tooltip",
    dataTypeRequirement: "numeric-or-timestamp"
  },
  STDDEV: {
    tooltipKey: "scenarios:aggregator.stddev.tooltip",
    dataTypeRequirement: "numeric"
  },
  PCTILE: {
    tooltipKey: "scenarios:aggregator.pctile.tooltip",
    dataTypeRequirement: "numeric"
  },
  MEDIAN: {
    tooltipKey: "scenarios:aggregator.median.tooltip",
    dataTypeRequirement: "numeric"
  }
};
const EditionEvaluationErrors = reactExports.memo(function(props) {
  const { t: t2 } = useTranslation(["scenarios"]);
  const nodeSharp = AstBuilderNodeSharpFactory.useOptionalSharp();
  const evaluation = nodeSharp?.select((s) => s.validation.evaluation);
  const errors = g$2(() => {
    if (!evaluation) return [];
    return t$e(
      evaluation,
      n$7((row) => props.direct ? row.nodeId === props.id : row.relatedIds.includes(props.id)),
      t$2((row) => row.errors),
      n$7((err) => !(props.filterOut ?? []).includes(err.error))
    );
  });
  const errorModels = adaptEvaluationErrorViewModels(errors.value);
  const translateError = commonErrorMessages(t2);
  if (errorModels.length === 0) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("flex flex-row flex-wrap gap-sm", props.className), children: errorModels.map((errorModel, i2) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      className: "bg-red-background text-s text-red-primary flex h-8 items-center justify-center rounded-sm border border-transparent px-xs py-2xs font-medium dark:bg-transparent dark:border-red-primary",
      children: translateError(errorModel)
    },
    i2
  )) });
});
EditionEvaluationErrors.displayName = "EditionEvaluationErrors";
const operatorContainerClassnames = cva(
  [
    "flex h-10 min-w-10 items-center justify-between outline-hidden gap-sm rounded-sm px-xs border group",
    "bg-surface-card disabled:border-grey-border disabled:bg-grey-background-light disabled:text-grey-disabled",
    "radix-state-open:border-purple-primary  radix-state-open:bg-purple-background-light"
  ],
  {
    variants: {
      validationStatus: {
        valid: "border-grey-border focus:border-purple-primary",
        error: "border-red-primary focus:border-purple-primary"
      }
    },
    defaultVariants: {
      validationStatus: "valid"
    }
  }
);
function OperatorTooltip({ tooltipKey }) {
  const { t: t2 } = useTranslation(["scenarios"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Tooltip.Default,
    {
      className: "max-h-none overflow-visible",
      content: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-s max-w-xs whitespace-pre-wrap", children: t2(tooltipKey) }),
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-purple-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "tip", className: "size-4" }) })
    }
  );
}
function OperatorSelect({
  options: options2,
  operator,
  onOperatorChange,
  validationStatus,
  isFilter = false,
  hideArrow = false,
  featureAccess,
  isOperatorRestricted
}) {
  const [open, setOpen] = reactExports.useState(false);
  const { t: t2 } = useTranslation(["common", "scenarios"]);
  const mappedOptions = mapOptions(options2);
  const isValueSwitchOpen = AstBuilderDataSharpFactory.select((s) => s.isValueSwitchOpen);
  const _value = operator !== undefinedAstNodeName && operator !== null ? operator : null;
  const isRestricted = featureAccess && featureAccess !== "allowed";
  const isCurrentRestricted = _value ? isOperatorRestricted?.(_value) ?? false : false;
  const showTriggerNudge = isCurrentRestricted && isRestricted && featureAccess;
  const currentTooltipKey = _value ? mappedOptions.find((op) => op.value === _value)?.tooltipKey : void 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    MenuCommand.Menu,
    {
      open: isValueSwitchOpen ? false : open,
      onOpenChange: (nextOpen) => {
        if (!isValueSwitchOpen) setOpen(nextOpen);
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Trigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            disabled: isValueSwitchOpen,
            className: operatorContainerClassnames({ validationStatus }),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-s text-grey-primary group-disabled:text-grey-disabled w-full text-center font-medium", children: _value ? getOperatorName(t2, _value, isFilter) : "..." }),
              currentTooltipKey ? /* @__PURE__ */ jsxRuntimeExports.jsx(OperatorTooltip, { tooltipKey: currentTooltipKey }) : null,
              showTriggerNudge ? /* @__PURE__ */ jsxRuntimeExports.jsx(Nudge, { kind: featureAccess, content: t2("common:premium"), className: "size-5" }) : null,
              !showTriggerNudge && !hideArrow ? /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Arrow, {}) : null
            ]
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(MenuCommand.Content, { sameWidth: true, sideOffset: 4, align: "start", className: "min-w-24", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Combobox, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.List, { children: mappedOptions.map((op) => {
            const isOpRestricted = isOperatorRestricted?.(op.value) ?? false;
            const showNudge = isOpRestricted && isRestricted && featureAccess;
            return /* @__PURE__ */ jsxRuntimeExports.jsx(
              MenuCommand.Item,
              {
                keywords: op.keywords ?? [op.value],
                onSelect: () => onOperatorChange(op.value),
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex w-full items-center justify-between gap-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-sm", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: getOperatorName(t2, op.value, isFilter) }),
                    op.tooltipKey ? /* @__PURE__ */ jsxRuntimeExports.jsx(OperatorTooltip, { tooltipKey: op.tooltipKey }) : null
                  ] }),
                  showNudge ? /* @__PURE__ */ jsxRuntimeExports.jsx(Nudge, { kind: featureAccess, content: t2("common:premium"), className: "size-5" }) : null
                ] })
              },
              op.value
            );
          }) })
        ] })
      ]
    }
  );
}
function mapOptions(options2) {
  const isOpSelect = isOperationSelectOptions(options2);
  const values = isOpSelect ? Object.keys(options2) : options2;
  return values.map((value) => {
    if (isOpSelect) {
      return { value, ...options2[value] };
    } else {
      return { value };
    }
  });
}
function isOperationSelectOptions(opts) {
  return !Array.isArray(opts);
}
function OperandEditModalContainer({ className, ...props }) {
  const { t: t2 } = useTranslation(["common"]);
  const nodeSharp = AstBuilderNodeSharpFactory.useSharp();
  const handleOpenChange = useCallbackRef((open) => {
    if (!open) {
      props.onCancel();
    }
  });
  const handleImplicitClose = useCallbackRef((event) => {
    event.preventDefault();
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.Root, { open: true, onOpenChange: handleOpenChange, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal.Content, { size: props.size, onInteractOutside: handleImplicitClose, onEscapeKeyDown: handleImplicitClose, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.Title, { children: props.title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("flex flex-col gap-md p-md", className), children: props.children }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal.Footer, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.FooterButton, { isCloseButton: true, label: t2("common:cancel") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Modal.FooterButton,
        {
          label: props.saveLabel ?? t2("common:save"),
          onClick: () => props.onSave(nodeSharp.value.node),
          disabled: props.saveDisabled
        }
      )
    ] })
  ] }) });
}
function getDataModelFieldLabel(dataModelField) {
  if (!dataModelField?.fieldName || !dataModelField.tableName) {
    return { rawValue: null, value: null };
  }
  return {
    rawValue: dataModelField,
    value: [dataModelField?.tableName, dataModelField?.fieldName].filter(Boolean).join(".")
  };
}
const EditDataModelField = ({
  disabled,
  tableName,
  value,
  dataModel,
  onChange,
  placeholder
}) => {
  const { t: t2 } = useTranslation(["scenarios"]);
  const [open, setOpen] = reactExports.useState(false);
  const options2 = dataModel.flatMap(
    (table) => table.fields.map((field) => ({
      tableName: table.name,
      fieldName: field.name,
      field
    }))
  );
  const groups = t$a(options2, (option) => option.tableName ?? "");
  const optionsEntries = t$c(groups);
  const { rawValue, value: selectedValue } = getDataModelFieldLabel(value);
  const showPlaceholder = !selectedValue;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(MenuCommand.Menu, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Trigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        disabled,
        className: "border-grey-border text-s bg-surface-card aria-disabled:bg-grey-background-light text-grey-primary flex h-10 items-center justify-between rounded-sm border px-xs",
        children: [
          showPlaceholder ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: placeholder }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trans, { t: t2, i18nKey: "scenarios:edit_aggregation.field_in_table", values: rawValue }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "arrow-2-down", className: "size-5" })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Content, { className: "text-s w-[300px]", align: "start", sideOffset: 4, children: !tableName ? /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.List, { children: optionsEntries.map(([tableName2, fields]) => {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.SubMenu, { trigger: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tableName2 }), className: "text-s w-[300px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(EditDataModelFieldTableMenu, { tableName: tableName2, fields, onChange }) }, tableName2);
    }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(EditDataModelFieldTableMenu, { tableName, fields: options2, onChange }) })
  ] });
};
const EditDataModelFieldTableMenu = ({ tableName, fields, onChange }) => {
  const { t: t2 } = useTranslation(["scenarios"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.List, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    MenuCommand.Group,
    {
      heading: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-grey-secondary mb-sm items-center px-sm pb-sm text-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trans, { t: t2, i18nKey: "scenarios:edit_aggregation.available_fields", values: { tableName } }) }),
      children: fields.map((field) => {
        const typeIcon = getDataTypeIcon(field.field.dataType);
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          MenuCommand.Item,
          {
            className: "data-active-item:bg-purple-background-light group grid w-full select-none grid-cols-[20px_1fr] gap-xs rounded-xs p-sm outline-hidden",
            onSelect: () => onChange(field),
            children: [
              typeIcon ? /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: typeIcon, className: "col-start-1 size-5 shrink-0" }) : null,
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-start-2 flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: field.fieldName }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(FieldInfo, { field: field.field })
              ] })
            ]
          },
          field.fieldName
        );
      })
    }
  ) });
};
function FieldInfo({ field }) {
  const { i18n } = useTranslation();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Tooltip.Default,
    {
      arrow: false,
      delayDuration: 0,
      side: i18n.dir() === "ltr" ? "right" : "left",
      align: "start",
      sideOffset: 24,
      alignOffset: -8,
      content: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-md", children: field.description }),
      className: "border-grey-border text-s flex max-h-[min(var(--radix-tooltip-content-available-height),400px)] max-w-(--radix-tooltip-content-available-width) border p-0 shadow-md",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { tabIndex: 0, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Icon,
        {
          icon: "tip",
          className: "hover:group-hover:text-purple-primary group-hover:text-purple-disabled size-5 shrink-0 text-transparent transition-colors"
        }
      ) })
    }
  );
}
const RemoveButton = ({ ref, className, ...props }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      type: "button",
      className: clsx(
        "size-fit rounded-xs border p-xs text-xs transition-colors duration-200 ease-in-out",
        "bg-surface-card text-grey-secondary border-grey-border",
        "hover:text-grey-white hover:border-red-primary hover:bg-red-primary",
        "active:bg-red-hover active:border-red-hover",
        "disabled:bg-grey-background-light disabled:text-grey-disabled disabled:border-grey-border",
        "disabled:hover:text-grey-disabled disabled:hover:border-grey-border disabled:hover:bg-grey-background-light",
        className
      ),
      ...props,
      tabIndex: -1,
      ref,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "delete", className: "size-3" })
    }
  );
};
function getOperandTypeIcon(operandType) {
  switch (operandType) {
    case "CustomList":
      return "list";
    case "Field":
      return "field";
    case "Function":
      return "function";
    case "Enum":
      return "enum";
    case "Modeling":
      return "modeling";
    case "ClientRisk":
      return "scan-eye";
    default:
      return void 0;
  }
}
function getOperandTypeTKey(operandType) {
  switch (operandType) {
    case "CustomList":
      return "edit_operand.operator_type.list";
    case "Field":
      return "edit_operand.operator_type.field";
    case "Function":
      return "edit_operand.operator_type.function";
    case "Enum":
      return "edit_operand.operator_type.enum";
    case "Modeling":
      return "edit_operand.operator_type.modeling";
    case "ClientRisk":
      return "edit_operand.operator_type.client_risk";
    default:
      return void 0;
  }
}
const logicalOperatorClassnames = cva(
  "flex h-fit min-h-[40px] min-w-[40px] flex-wrap items-center justify-center gap-xs rounded-sm p-sm border",
  {
    variants: {
      type: {
        text: "",
        contained: "bg-grey-background-light"
      },
      validationStatus: {
        valid: "text-grey-secondary",
        error: "text-red-primary border-red-primary"
      }
    },
    compoundVariants: [
      {
        type: "text",
        validationStatus: "valid",
        className: "border-transparent"
      },
      {
        type: "contained",
        validationStatus: "valid",
        className: "border-transparent"
      }
    ]
  }
);
function LogicalOperatorLabel({
  operator,
  type = "text",
  validationStatus = "valid",
  className
}) {
  const { t: t2 } = useTranslation(["common", "scenarios"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: logicalOperatorClassnames({
        type,
        validationStatus,
        className
      }),
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-s w-full text-center font-semibold", children: t2(`scenarios:logical_operator.${operator}`) })
    }
  );
}
function isNumericDimension(dimension, field) {
  if (dimension?.type !== "field") return false;
  if (field) return field.dataType === "Int" || field.dataType === "Float";
  return dimension.values.length > 0 && dimension.values.every((value) => typeof value === "number");
}
function getValueSwitchFieldOption(accessor, field, currentValues = []) {
  if (!["String", "Int", "Float"].includes(field.dataType)) return void 0;
  const resolved = field.dataType === "String" && isEnumField(field) ? resolveEnumValues(field, currentValues) : void 0;
  const dimension = { type: "field", field: accessor };
  return {
    key: getValueSwitchDimensionKey(dimension),
    label: getDataAccessorDisplayName(accessor),
    dimension,
    field,
    closed: resolved?.closed,
    knownValues: field.dataType === "String" ? (resolved?.values ?? field.values ?? []).filter((value) => typeof value === "string") : []
  };
}
function ValueSwitchValueTag({
  dimension,
  value,
  field,
  className
}) {
  const { t: t2 } = useTranslation(["user-scoring"]);
  const data = AstBuilderDataSharpFactory.select((state) => state.data);
  const scoringSettings = data.scoringSettings;
  if (field && isEnumField(field)) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(EnumTag, { field, value, className });
  }
  if (dimension.type === "risk-level" && typeof value === "number" && scoringSettings && isMaxRiskLevelInRange(scoringSettings.maxRiskLevel)) {
    const color = SCORING_LEVELS_COLORS[scoringSettings.maxRiskLevel][value];
    const labelKey = SCORING_LEVELS_LABEL_KEYS[scoringSettings.maxRiskLevel][value];
    const label2 = labelKey ? t2(labelKey) : String(value);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Tag,
      {
        className: cn("flex min-w-0 overflow-hidden rounded-sm", className),
        style: { borderColor: color, color },
        title: label2,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "min-w-0 truncate", children: label2 })
      }
    );
  }
  const label = String(value) || "—";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { className: cn("flex min-w-0 overflow-hidden rounded-sm", className), title: label, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "min-w-0 truncate", children: label }) });
}
const MAX_PREVIEW_VALUES = 6;
function ValueSwitchDescription({ node }) {
  const { t: t2 } = useTranslation("scenarios");
  const language = useFormatLanguage();
  const dataSharp = AstBuilderDataSharpFactory.useSharp();
  const data = dataSharp.select((state) => state.data);
  const model = parseValueSwitchAstNode(node);
  if (!model || !isValueSwitchModelComplete(model)) return null;
  const [rowDimension, columnDimension] = model.dimensions;
  if (!rowDimension) return null;
  function dimensionLabel(dimension) {
    return dimension.type === "field" ? getDataAccessorDisplayName(dimension.field) : t2("scenarios:value_switch.customer_risk_level");
  }
  function dimensionField(dimension) {
    if (dimension?.type !== "field") return void 0;
    try {
      return getDataAccessorAstNodeField(dimension.field, {
        dataModel: data.dataModel,
        triggerObjectTable: dataSharp.computed.triggerObjectTable.value
      });
    } catch {
      return void 0;
    }
  }
  const rowField = dimensionField(rowDimension);
  const columnField = dimensionField(columnDimension);
  const rows = rowDimension.values.slice(0, MAX_PREVIEW_VALUES);
  const columns = columnDimension?.values.slice(0, MAX_PREVIEW_VALUES) ?? [];
  const omittedRows = rowDimension.values.length - rows.length;
  const omittedColumns = (columnDimension?.values.length ?? 0) - columns.length;
  const headerClassName = "border-grey-border border-b p-sm text-start font-medium break-words";
  const isNumeric = isNumericDimension(rowDimension, rowField);
  const lastRowValue = rows.at(-1);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "text-grey-secondary flex max-w-full flex-col gap-sm text-xs font-normal",
      style: { width: `${columnDimension ? 12 + columns.length * 7 : 24}rem` },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-grey-border overflow-hidden rounded-md border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full table-fixed border-collapse", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: columnDimension ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { scope: "col", rowSpan: 2, className: cn(headerClassName, "w-1/4"), children: dimensionLabel(rowDimension) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { scope: "colgroup", colSpan: columns.length, className: cn(headerClassName, "text-center"), children: dimensionLabel(columnDimension) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: columns.map((value) => /* @__PURE__ */ jsxRuntimeExports.jsx("th", { scope: "col", className: headerClassName, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              ValueSwitchValueTag,
              {
                dimension: columnDimension,
                value,
                field: columnField,
                className: "max-w-full"
              }
            ) }, value)) })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { scope: "col", className: headerClassName, children: t2("scenarios:value_switch.if_value_is", { variable: dimensionLabel(rowDimension) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { scope: "col", className: headerClassName, children: t2("scenarios:value_switch.then_score") })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: rows.map((rowValue, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { scope: "row", className: "overflow-hidden p-sm text-start font-normal", children: isNumeric ? /* @__PURE__ */ jsxRuntimeExports.jsx(NumericRowValue, { rows, index }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
              ValueSwitchValueTag,
              {
                dimension: rowDimension,
                value: rowValue,
                field: rowField,
                className: "max-w-full"
              }
            ) }),
            columnDimension ? columns.map((columnValue) => /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-sm text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { dir: "ltr", children: model.thresholds[getValueSwitchCellKey([rowValue, columnValue])] }) }, columnValue)) : /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { dir: "ltr", children: model.thresholds[getValueSwitchCellKey([rowValue])] }) })
          ] }, rowValue)) })
        ] }) }),
        omittedRows > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: t2("scenarios:value_switch.preview_omitted_rows", { count: omittedRows }) }) : null,
        omittedColumns > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: t2("scenarios:value_switch.preview_omitted_columns", { count: omittedColumns }) }) : null,
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          t2("scenarios:value_switch.else"),
          isNumeric && typeof lastRowValue === "number" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { dir: "ltr", children: [
            " > ",
            formatNumber(lastRowValue, { language })
          ] }) : null,
          ": ",
          model.fallback
        ] })
      ]
    }
  );
}
function NumericRowValue({ rows, index }) {
  const { t: t2 } = useTranslation("user-scoring");
  const language = useFormatLanguage();
  const value = rows[index];
  if (index === 0)
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
      "≤",
      " ",
      formatNumber(value ?? 0, { language })
    ] });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex gap-xs", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t2("user-scoring:switch.number.middle") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: formatNumber(rows[index - 1] ?? 0, { language }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
      "& ",
      formatNumber(value ?? 0, { language })
    ] })
  ] });
}
const viewingOperandLabelClassnames = cva(
  [
    "group",
    "size-fit min-h-[40px] min-w-[40px] rounded-sm outline-hidden",
    "flex flex-row items-center justify-between gap-sm px-xs",
    "bg-grey-background-light"
  ],
  {
    variants: {
      validationStatus: {
        valid: "border border-transparent",
        error: "border border-red-primary",
        "light-error": "border border-red-secondary"
      }
    },
    defaultVariants: {
      validationStatus: "valid"
    }
  }
);
function ViewingAstBuilderOperand({ validationStatus, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: viewingOperandLabelClassnames({ validationStatus }), children: /* @__PURE__ */ jsxRuntimeExports.jsx(OperandDisplayName, { interactionMode: "viewer", ...props }) });
}
function ViewingOperator({ operator, isFilter = false }) {
  const { t: t2 } = useTranslation(["common", "scenarios"]);
  const _value = operator !== undefinedAstNodeName && operator !== null ? operator : null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-grey-background-light flex h-10 min-w-[40px] items-center justify-between gap-sm rounded-sm px-xs outline-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-s text-grey-primary w-full text-center font-medium", children: _value ? getOperatorName(t2, _value, isFilter) : "..." }) });
}
const MAX_ENUM_VALUES = 50;
const contentClassnames = cn([
  "flex flex-col w-full flex-1 overflow-hidden z-50",
  "bg-surface-card border-grey-border rounded-sm border shadow-md outline-hidden"
]);
function OperandInfos(props) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(HoverCard, { openDelay: 50, closeDelay: 200, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(HoverCardTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Icon,
      {
        icon: "tip",
        className: "hover:group-hover:text-purple-primary group-hover:text-purple-disabled data-[state=open]:text-purple-primary size-5 shrink-0 text-transparent"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(HoverCardPortal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      HoverCardContent,
      {
        side: "right",
        align: "start",
        sideOffset: 20,
        alignOffset: -8,
        className: cn(contentClassnames, isValueSwitchAstNode(props.node) && "max-w-[calc(100vw-2rem)]"),
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-surface-card flex flex-col gap-sm overflow-auto p-md", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TypeInfos, { operandType: props.operandType, dataType: props.dataType }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-grey-primary text-s text-ellipsis wrap-break-word hyphens-auto font-normal", children: props.displayName })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(OperandDescription, { node: props.node })
        ] })
      }
    ) })
  ] });
}
function TypeInfos({ operandType, dataType }) {
  const { t: t2 } = useTranslation(["scenarios"]);
  const typeInfos = [
    {
      icon: getOperandTypeIcon(operandType),
      tKey: getOperandTypeTKey(operandType)
    },
    {
      icon: getDataTypeIcon(dataType),
      tKey: getDataTypeTKey(dataType)
    }
  ];
  if (typeInfos.filter(({ tKey }) => !!tKey).length === 0) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-row gap-sm", children: typeInfos.map(({ icon, tKey }) => {
    if (!tKey) return null;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-purple-disabled inline-flex items-center gap-2xs text-xs font-normal", children: [
      icon ? /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon, className: "size-3" }) : null,
      t2(tKey, { count: 1 })
    ] }, tKey);
  }) });
}
function OperandDescription({ node }) {
  const { t: t2 } = useTranslation(["scenarios"]);
  const dataSharp = AstBuilderDataSharpFactory.useSharp();
  const data = dataSharp.select((s) => s.data);
  if (isAggregation(node)) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(AggregatorDescription, { node });
  }
  if (isValueSwitchAstNode(node)) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(ValueSwitchDescription, { node });
  }
  if (isFuzzyMatchComparator(node)) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(FuzzyMatchComparatorDescription, { node });
  }
  if (isCustomListAccess(node)) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(CustomListAccessDescription, { node, customLists: data.customLists });
  }
  if (isDataAccessorAstNode(node)) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      DataAccessorDescription,
      {
        node,
        dataModel: data.dataModel,
        triggerObjectTable: dataSharp.computed.triggerObjectTable.value
      }
    );
  }
  if (isTimeAdd(node)) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Description, { description: t2("scenarios:edit_date.now.description") });
  }
  if (isIpHasFlag(node)) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Description, { description: t2("scenarios:edit_ip_has_flag.description") });
  }
  if (isRecordRiskLevelCheckAstNode(node) && node.children[0].constant.length > 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(RecordRiskLevelDescription, { node });
  }
}
function Description({ description }) {
  return description ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-grey-secondary max-w-75 text-xs font-normal first-letter:capitalize", children: description }) : null;
}
function RecordRiskLevelDescription({ node }) {
  const { t: t2 } = useTranslation(["user-scoring"]);
  const scoringSettings = AstBuilderDataSharpFactory.select((s) => s.data.scoringSettings);
  if (!scoringSettings || !isMaxRiskLevelInRange(scoringSettings.maxRiskLevel)) {
    return null;
  }
  const levelColorsMap = SCORING_LEVELS_COLORS[scoringSettings.maxRiskLevel];
  const levelLabelsMap = SCORING_LEVELS_LABEL_KEYS[scoringSettings.maxRiskLevel];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-xs items-center", children: node.children[0].constant.map((level) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "flex gap-xs items-center border rounded-full px-sm py-xs text-small",
      style: { borderColor: levelColorsMap[level] },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-4 rounded-full", style: { backgroundColor: levelColorsMap[level] } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t2(levelLabelsMap[level]) })
      ]
    },
    level
  )) }) });
}
function AggregatorDescription({ node }) {
  const { t: t2 } = useTranslation(["scenarios"]);
  const { aggregator, tableName, fieldName, filters, percentile } = node.namedChildren;
  if (!tableName.constant && !fieldName.constant && filters.children.length === 0) return null;
  const aggregatedFieldName = `${tableName.constant}.${fieldName.constant}`;
  const percentileValue = percentile?.constant;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-[min-content_1fr] items-center gap-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-purple-primary text-center font-bold", children: aggregator.constant }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold", children: aggregatedFieldName }),
    percentileValue !== void 0 && aggregator.constant === "PCTILE" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-grey-50 text-xs", children: t2("scenarios:edit_aggregation.percentile_value") }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-grey-00 text-xs font-medium", children: [
        percentileValue * 100,
        "%"
      ] })
    ] }) : null,
    filters.children.map((filter, index) => {
      const { operator, fieldName: fieldName2 } = filter.namedChildren;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(reactExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(LogicalOperatorLabel, { operator: index === 0 ? "where" : "and", type: "text" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "bg-grey-background-light whitespace-nowrap p-sm text-end", children: fieldName2.constant ?? "..." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ViewingOperator, { operator: operator.constant, isFilter: true }),
          !isUnaryAggregationFilter(filter) ? /* @__PURE__ */ jsxRuntimeExports.jsx(ViewingAstBuilderOperand, { node: filter.namedChildren.value }) : null
        ] })
      ] }, `filter_${index}`);
    })
  ] });
}
function FuzzyMatchComparatorDescription({ node }) {
  const { t: t2 } = useTranslation(["scenarios"]);
  const threshold = node.children[1]?.constant;
  const level = threshold !== void 0 ? ComparatorFuzzyMatchConfig.adaptLevel(threshold) : void 0;
  if (!level) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-grey-50 text-xs", children: t2("scenarios:edit_fuzzy_match.level.label") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-grey-00 text-xs font-medium uppercase", children: t2(`scenarios:edit_fuzzy_match.level.${level}`) })
  ] });
}
function CustomListAccessDescription({ node, customLists }) {
  const customList = customLists.find((list) => list.id === node.namedChildren.customListId.constant);
  if (!customList) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Description, { description: customList.description });
}
function DataAccessorDescription({ node, dataModel, triggerObjectTable }) {
  const { t: t2 } = useTranslation(["scenarios"]);
  const language = useFormatLanguage();
  const field = getDataAccessorAstNodeField(node, { triggerObjectTable, dataModel });
  const values = isEnumField(field) ? resolveEnumValues(field).values : [];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Description, { description: field.description }),
    values.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-grey-secondary flex max-w-75 flex-col gap-xs", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-s", children: t2("scenarios:enum_options") }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "flex flex-col", children: [
        values.slice(0, MAX_ENUM_VALUES).map((value) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "truncate text-xs font-normal", children: resolveEnumDisplay(field, value, language).label }, String(value))),
        values.length > MAX_ENUM_VALUES ? /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "text-xs font-normal", children: "..." }) : null
      ] })
    ] }) : null
  ] });
}
const operandTypeInfosClassnames = cva("flex items-center justify-center rounded-xs p-xs text-grey-primary", {
  variants: {
    interactionMode: {
      viewer: "bg-grey-border",
      editor: "bg-grey-background-light group-aria-expanded:bg-purple-background group-aria-expanded:text-purple-primary dark:group-aria-expanded:bg-purple-primary/10"
    }
  },
  defaultVariants: {
    interactionMode: "editor"
  }
});
function OperandTypeInfos({ t: t2, operandType, dataType, interactionMode }) {
  const typeInfos = [
    {
      icon: getOperandTypeIcon(operandType),
      tKey: getOperandTypeTKey(operandType)
    },
    {
      icon: getDataTypeIcon(dataType),
      tKey: getDataTypeTKey(dataType)
    }
  ];
  if (typeInfos.filter(({ icon }) => icon !== void 0).length === 0) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-row gap-xs", children: typeInfos.map(({ icon, tKey }) => {
    if (!icon) return null;
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: operandTypeInfosClassnames({ interactionMode }), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon, className: "size-4 shrink-0", "aria-label": tKey ? t2(`scenarios:${tKey}`) : void 0 }) }, tKey);
  }) });
}
const operandDisplayNameClassnames = cva(
  "text-s font-medium group-aria-expanded:text-purple-primary break-all max-w-[200px] @xl:max-w-[300px] truncate",
  {
    variants: {
      type: {
        placeholder: "text-grey-disabled",
        value: "text-grey-primary"
      }
    },
    defaultVariants: {
      type: "value"
    }
  }
);
function OperandDisplayName({ node, enumValues, interactionMode, returnValue }) {
  const { t: t2 } = useTranslation(["common", "scenarios"]);
  const language = useFormatLanguage();
  const dataSharp = AstBuilderDataSharpFactory.useSharp();
  const data = dataSharp.select((s) => s.data);
  const showValues = dataSharp.select((s) => s.showValues);
  const triggerObjectTable = dataSharp.computed.triggerObjectTable.value;
  const shouldDisplayReturnValue = showValues && returnValue !== void 0;
  const displayName = getAstNodeDisplayName(node, {
    t: t2,
    language,
    customLists: data.customLists
  });
  const dataType = getAstNodeDataType(node, {
    triggerObjectTable,
    dataModel: data.dataModel
  });
  const operandType = getAstNodeOperandType(node, {
    enumValues
  });
  return shouldDisplayReturnValue ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: operandDisplayNameClassnames(), children: returnValue }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(OperandInfos, { dataType, displayName, node, operandType })
  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(OperandTypeInfos, { interactionMode, t: t2, dataType, operandType }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: operandDisplayNameClassnames(), children: displayName }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(OperandInfos, { dataType, displayName, node, operandType })
  ] });
}
function MenuOption({
  option,
  value,
  onSelect,
  rightElement,
  highlightSearch = true,
  showFieldPath = false
}) {
  const { t: t2 } = useTranslation(["common"]);
  const searchValue = MenuCommand.State.useSharp().value.search;
  const leftIcon = option.icon ?? getDataTypeIcon(option.dataType);
  const hasValidLicense = AstBuilderDataSharpFactory.select((s) => s.data.hasValidLicense);
  const fieldPath = showFieldPath ? getDataAccessorPath(option.astNode) : null;
  const hasContinuousScreening = AstBuilderDataSharpFactory.select((s) => s.data.hasContinuousScreening);
  const hasScoringRuleset = AstBuilderDataSharpFactory.select((s) => s.data.hasScoringRuleset);
  const isRestrictedOption = isAggregation(option.astNode) && isRestrictedAggregator(option.astNode.namedChildren.aggregator.constant);
  const isRestrictedClientRisk = option.operandType === "ClientRisk" && option.astNode.name === monitoringListCheckAstNodeName && !hasContinuousScreening;
  const showNudge = isRestrictedOption && !hasValidLicense || isRestrictedClientRisk;
  const showIpNudge = isIpHasFlag(option.astNode) && !hasValidLicense;
  const disabledScoringCheck = option.astNode.name === recordRiskLevelCheckAstNodeName && !hasScoringRuleset;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    MenuCommand.Item,
    {
      disabled: disabledScoringCheck,
      className: "group",
      value,
      onSelect: () => onSelect(injectIdToNode(option.astNode)),
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid w-full grid-cols-[20px_1fr] gap-xs", children: [
        leftIcon ? /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { "aria-hidden": "true", className: "col-start-1 size-5 shrink-0", icon: leftIcon }) : null,
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-start-2 flex flex-row gap-xs overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-s w-full break-all text-start font-normal", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-grey-primary", children: searchValue && highlightSearch ? /* @__PURE__ */ jsxRuntimeExports.jsx(Highlight, { text: option.displayName, query: searchValue }) : option.displayName }),
            fieldPath ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-grey-secondary ms-xs", children: [
              "(",
              fieldPath,
              ")"
            ] }) : null
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ms-auto flex shrink-0 items-center gap-xs", children: [
            rightElement ?? /* @__PURE__ */ jsxRuntimeExports.jsx(
              OperandInfos,
              {
                node: option.astNode,
                dataType: option.dataType,
                operandType: option.operandType,
                displayName: option.displayName
              }
            ),
            showNudge ? /* @__PURE__ */ jsxRuntimeExports.jsx(Nudge, { kind: "restricted", content: t2("common:premium"), className: "size-5" }) : null,
            showIpNudge ? /* @__PURE__ */ jsxRuntimeExports.jsx(Nudge, { kind: "restricted", content: t2("common:premium"), className: "size-5" }) : null
          ] })
        ] })
      ] })
    }
  );
}
function DiscoveryList({ onSelect }) {
  const dataSharp = AstBuilderDataSharpFactory.useSharp();
  const options2 = EditionOperandSharpFactory.useSharp().computed.filteredOptions.value;
  const enumValues = EditionOperandSharpFactory.useSharp().value.enumValues;
  const triggerObjectTable = dataSharp.computed.triggerObjectTable;
  const groupedOptions = reactExports.useMemo(() => {
    return groupByOperandType(options2, {
      triggerObjectTable: triggerObjectTable.value
    });
  }, [triggerObjectTable.value, enumValues, options2]);
  const { enumOptions, fieldOptions, functionOptions, modelingOptions, customListOptions, clientRiskOptions } = groupedOptions;
  const subMenus = [
    { options: customListOptions, type: "CustomList" },
    { options: clientRiskOptions, type: "ClientRisk" },
    { options: functionOptions, type: "Function" },
    { options: modelingOptions, type: "Modeling" }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.List, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-sm", children: [
    enumOptions.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      SubMenu,
      {
        onSelect,
        trigger: /* @__PURE__ */ jsxRuntimeExports.jsx(MenuTitle, { operandType: "Enum", count: enumOptions.length }),
        options: enumOptions
      }
    ) : null,
    fieldOptions.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      MenuCommand.Group,
      {
        forceMount: true,
        heading: /* @__PURE__ */ jsxRuntimeExports.jsx(
          MenuTitle,
          {
            operandType: "Field",
            count: fieldOptions.reduce((acc, [_, subOpts]) => acc + subOpts.length, 0),
            className: "min-h-10 p-sm"
          }
        ),
        children: fieldOptions.map(([_path, options22]) => {
          const path = _path.split(".");
          const label = path.pop() ?? "";
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            SubMenu,
            {
              value: _path,
              onSelect,
              trigger: /* @__PURE__ */ jsxRuntimeExports.jsx(SubMenuFieldTrigger, { ...{ label, depth: path.length, options: options22 } }),
              options: options22
            },
            _path
          );
        })
      }
    ) : null,
    subMenus.map(
      (subMenu) => subMenu.options.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        SubMenu,
        {
          onSelect,
          trigger: /* @__PURE__ */ jsxRuntimeExports.jsx(MenuTitle, { operandType: subMenu.type, count: subMenu.options.length }),
          options: subMenu.options
        },
        subMenu.type
      ) : null
    )
  ] }) });
}
function SubMenuFieldTrigger(props) {
  const { t: t2 } = useTranslation("scenarios");
  const padding = 24 + Math.max(props.depth - 1, 0) * 20 + (props.depth > 0 ? 8 : 0);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "span",
    {
      className: "text-grey-primary text-s flex select-none flex-row items-baseline gap-xs break-all",
      style: { paddingLeft: `${padding}px` },
      children: [
        props.depth === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "line-clamp-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Trans,
          {
            t: t2,
            i18nKey: "edit_operand.operator_discovery.from",
            components: {
              Path: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold" })
            },
            values: { path: props.label }
          }
        ) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-baseline gap-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Icon,
            {
              icon: "subdirectory-arrow-right",
              className: "text-grey-disabled group-aria-selected/menu-item:text-grey-primary size-4 shrink-0 self-center"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "line-clamp-1 shrink font-semibold", children: props.label })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-grey-disabled shrink-0 text-xs font-medium", children: props.options.length })
      ]
    }
  ) });
}
function MenuTitle({ operandType, count, className }) {
  const { t: t2 } = useTranslation("scenarios");
  const icon = getOperandTypeIcon(operandType);
  const tKey = getOperandTypeTKey(operandType);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: clsx("flex grow select-none flex-row items-center gap-xs", className), children: [
    icon ? /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { "aria-hidden": "true", className: "text-purple-primary size-5 shrink-0", icon }) : null,
    tKey ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-grey-primary text-m flex flex-1 flex-row items-baseline gap-xs break-all", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: t2(tKey, { count }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-grey-disabled text-xs font-medium", children: count })
    ] }) : null
  ] });
}
function SubMenu({ value, trigger, options: options2, onSelect }) {
  const { t: t2 } = useTranslation(["common", "scenarios"]);
  const language = useFormatLanguage();
  const customLists = AstBuilderDataSharpFactory.useSharp().value.data.customLists;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.SubMenu, { value, forceMount: true, trigger, className: "w-96", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.List, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Group, { children: options2.map((option) => {
    const displayName = getOptionDisplayName(option, {
      customLists,
      language,
      t: t2
    });
    return /* @__PURE__ */ jsxRuntimeExports.jsx(MenuOption, { option, onSelect }, displayName);
  }) }) }) });
}
function coerceToConstantAstNode(search, options2) {
  const { isCoerceableToBoolean, coerceToBoolean } = getBooleanCoercionLogic(options2.booleans);
  const results = [];
  const searchLowerCase = search.trim().toLocaleLowerCase();
  if (searchLowerCase.length === 0) {
    return [];
  }
  const parsedNumber = Number(searchLowerCase);
  if (Number.isFinite(parsedNumber)) {
    const astNode2 = NewConstantAstNode({
      constant: parsedNumber
    });
    results.push(stripIdFromNode(astNode2));
  }
  if (isCoerceableToBoolean(searchLowerCase)) {
    const astNode2 = NewConstantAstNode({
      constant: coerceToBoolean(searchLowerCase)
    });
    results.push(stripIdFromNode(astNode2));
  }
  results.push(...coerceToConstantArray(search));
  const astNode = NewConstantAstNode({
    constant: search
  });
  results.push(stripIdFromNode(astNode));
  return results;
}
const isNumberArray = /^\[(\s*(\d+(\.\d+)?)\s*,?)*(\s*|\])$/;
const isStringArray = /^\[(\s*"?([^",[\]]+)"?\s*,?)*\s*\]?$/;
const captureNumbers = /(?:\s*(?<numbers>\d+(\.\d+)?)\s*,?)/g;
const captureStrings = /(?:\s*"?(?<strings>[^",[\]]*[^",[\]\s])"?\s*,?)/g;
function coerceToConstantArray(search) {
  const trimSearch = search.trim();
  if (isNumberArray.test(trimSearch)) {
    const astNode = t$e(
      Array.from(trimSearch.matchAll(captureNumbers)),
      t$9((match) => match.groups?.["numbers"]),
      n$7(e$5),
      t$9(Number),
      (constant) => NewConstantAstNode({
        constant
      })
    );
    return [astNode];
  }
  if (isStringArray.test(trimSearch)) {
    const astNode = t$e(
      Array.from(trimSearch.matchAll(captureStrings)),
      t$9((match) => match.groups?.["strings"]),
      n$7(e$5),
      (constant) => NewConstantAstNode({
        constant
      })
    );
    return [astNode];
  }
  return [];
}
function getBooleanCoercionLogic(options2) {
  const sanitizedOptions = {
    true: options2.true.map((value) => value.trim().toLocaleLowerCase()),
    false: options2.false.map((value) => value.trim().toLocaleLowerCase())
  };
  return {
    isCoerceableToBoolean: (search) => {
      const sanitizedSearch = search.trim().toLocaleLowerCase();
      return sanitizedOptions.true.includes(sanitizedSearch) || sanitizedOptions.false.includes(sanitizedSearch);
    },
    coerceToBoolean: (search) => {
      const sanitizedSearch = search.trim().toLocaleLowerCase();
      return sanitizedOptions.true.includes(sanitizedSearch);
    }
  };
}
function getUniqueOptionKey(astNode, displayName, dataType, operandType) {
  const path = getDataAccessorPath(astNode);
  if (path) {
    if (isDatabaseAccess(astNode)) {
      const fieldName = astNode.namedChildren.fieldName.constant;
      return `${path}.${fieldName}-${dataType}-${operandType}`;
    }
  }
  if (isPayload(astNode)) {
    return `payload.${astNode.children[0].constant}-${dataType}-${operandType}`;
  }
  return `${displayName}-${dataType}-${operandType}`;
}
function SearchResults({ onSelect, search }) {
  const { t: t2 } = useTranslation(["common", "scenarios"]);
  const language = useFormatLanguage();
  const options2 = EditionOperandSharpFactory.useSharp().computed.filteredOptions.value;
  const coerceDataType = EditionOperandSharpFactory.select((s) => s.coerceDataType);
  const matchOptions = reactExports.useMemo(() => {
    return matchSorter(options2, search, {
      keys: ["displayName", "searchShortcut"]
    }).map(({ astNode, ...option }) => {
      const uniqueKey = getUniqueOptionKey(astNode, option.displayName, option.dataType, option.operandType);
      return {
        key: uniqueKey,
        ...option,
        astNode,
        onClick: () => {
          onSelect(injectIdToNode(astNode));
        }
      };
    });
  }, [onSelect, options2, search]);
  const coercedOptions = reactExports.useMemo(() => {
    const coerceOpts = coerceToConstantAstNode(search, {
      booleans: {
        true: ["true", t2("common:true")],
        false: ["false", t2("common:false")]
      }
    }).map(
      (node) => ({
        astNode: node,
        displayName: formatConstant(node.constant, { t: t2, language }),
        operandType: "Constant",
        dataType: getConstantAstNodeDataType(node)
      })
    );
    return coerceDataType ? coerceOpts.filter((o) => coerceDataType.includes(o.dataType)) : coerceOpts;
  }, [t2, language, search, coerceDataType]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(MenuCommand.List, { children: [
    coercedOptions.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Group, { forceMount: true, children: coercedOptions.map((option) => {
      const dataTypeTkey = getConstantDataTypeTKey(option.dataType);
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        MenuOption,
        {
          highlightSearch: false,
          value: `${option.displayName}-${option.dataType}`,
          option,
          onSelect,
          rightElement: dataTypeTkey ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-s text-purple-primary font-semibold", children: t2(`scenarios:${dataTypeTkey}`) }) : void 0
        },
        `${option.displayName}-${option.dataType}-${option.operandType}`
      );
    }) }) : null,
    /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Group, { forceMount: true, heading: /* @__PURE__ */ jsxRuntimeExports.jsx(ResultTitle, { count: matchOptions.length }), children: matchOptions.map((option) => /* @__PURE__ */ jsxRuntimeExports.jsx(MenuOption, { value: option.key, option, onSelect, showFieldPath: true }, option.key)) })
  ] });
}
function ResultTitle({ count }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-10 select-none flex-row items-center gap-xs p-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex w-full items-baseline gap-xs", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-grey-primary text-m flex items-baseline whitespace-pre font-semibold", children: "Results" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-grey-disabled text-xs font-medium", children: count })
  ] }) });
}
function AstBuilderOperandMenu({
  children,
  defaultOpen = false,
  onSelect,
  bottomActions,
  disabled = false
}) {
  const [open, setOpen] = reactExports.useState(defaultOpen);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    MenuCommand.Menu,
    {
      open: disabled ? false : open,
      onOpenChange: (nextOpen) => {
        if (!disabled) setOpen(nextOpen);
      },
      children: [
        children,
        /* @__PURE__ */ jsxRuntimeExports.jsxs(MenuCommand.Content, { sameWidth: true, sideOffset: 4, align: "start", className: "w-96", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Combobox, { placeholder: "Select or create an operand" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SmartMenuList, { onSelect }),
          bottomActions.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-grey-border flex gap-sm overflow-x-auto border-t p-sm", children: bottomActions.map((action) => {
            return /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.HeadlessItem, { forceMount: true, onSelect: action.onSelect, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { type: "button", variant: "secondary", children: [
              action.icon ? /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: action.icon, className: "size-4" }) : null,
              action.label
            ] }) }, action.id);
          }) }) : null
        ] })
      ]
    }
  );
}
function SmartMenuList(props) {
  const search = MenuCommand.State.useSharp().value.search;
  return search.trim().length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(DiscoveryList, { ...props }) : /* @__PURE__ */ jsxRuntimeExports.jsx(SearchResults, { search, ...props });
}
const VIRTUALIZE_AFTER = 50;
const ENUM_ITEM_HEIGHT = 40;
function EnumValueMenu(props) {
  const { field, selectedValues, currentValues = selectedValues, unavailableValues = [] } = props;
  const { t: t2 } = useTranslation(["scenarios"]);
  const language = useFormatLanguage();
  const [search, setSearch] = reactExports.useState("");
  const resolved = resolveEnumValues(field, currentValues);
  const values = resolved.values;
  const searchValue = search.trim();
  const numeric = field.dataType === "Int" || field.dataType === "Float";
  const parsedValue = numeric ? Number(searchValue) : searchValue;
  const validValue = !numeric || Number.isFinite(parsedValue) && (field.dataType !== "Int" || Number.isInteger(parsedValue));
  const customValue = !resolved.closed && searchValue && validValue && !values.includes(parsedValue) && !unavailableValues.includes(parsedValue) ? parsedValue : void 0;
  const staleValues = selectedValues.filter((value) => value !== "" && !values.includes(value));
  const virtualize = values.length > VIRTUALIZE_AFTER;
  const catalogValues = reactExports.useMemo(
    () => virtualize ? values.filter((value) => matchesEnumSearch(field, value, language, searchValue)) : values,
    [field, language, searchValue, values, virtualize]
  );
  const visibleStaleValues = virtualize ? staleValues.filter((value) => matchesEnumSearch(field, value, language, searchValue)) : staleValues;
  function select(value) {
    if (props.multiple)
      props.onChange(
        selectedValues.includes(value) ? selectedValues.filter((current) => current !== value) : [...selectedValues, value]
      );
    else props.onChange(value);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(MenuCommand.Menu, { persistOnSelect: props.multiple, onOpenChange: () => setSearch(""), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Trigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.SelectButton, { className: "h-auto min-h-10 w-full min-w-0 overflow-hidden py-sm", children: selectedValues.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      ExpandableGroupTagLine,
      {
        classname: "gap-xs pe-lg",
        overflowBehavior: "popover",
        items: selectedValues.map((value) => /* @__PURE__ */ jsxRuntimeExports.jsx(EnumTag, { field, value, className: "max-w-full" }, value))
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pe-lg", children: t2("scenarios:value_switch.select_values") }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(MenuCommand.Content, { align: "start", sideOffset: 4, sameWidth: true, shouldFilter: !virtualize, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Combobox, { placeholder: t2("scenarios:value_switch.search_values"), onValueChange: setSearch }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(MenuCommand.List, { children: [
        virtualize ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          VirtualizedEnumItems,
          {
            field,
            values: catalogValues,
            selectedValues,
            unavailableValues,
            language,
            onSelect: select
          }
        ) : catalogValues.map((value) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          EnumValueItem,
          {
            field,
            value,
            language,
            disabled: unavailableValues.includes(value),
            onSelect: select,
            actionIcon: selectedValues.includes(value) ? "tick" : void 0
          },
          value
        )),
        visibleStaleValues.map((value) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          EnumValueItem,
          {
            field,
            value,
            language,
            disabled: !props.multiple,
            onSelect: select,
            actionIcon: props.multiple ? "delete" : void 0
          },
          value
        )),
        customValue !== void 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Item, { value: searchValue, onSelect: () => select(customValue), children: t2("scenarios:value_switch.use_custom_value", { value: String(customValue) }) }) : null
      ] })
    ] })
  ] });
}
function matchesEnumSearch(field, value, language, search) {
  if (!search) return true;
  const query = search.toLowerCase();
  return `${value} ${resolveEnumDisplay(field, value, language).label}`.toLowerCase().includes(query);
}
function EnumValueItem({
  field,
  value,
  language,
  disabled,
  onSelect,
  actionIcon
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    MenuCommand.Item,
    {
      value: `${value} ${resolveEnumDisplay(field, value, language).label}`,
      disabled,
      onSelect: () => onSelect(value),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(EnumTag, { field, value }),
        actionIcon ? /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: actionIcon, className: "size-4" }) : null
      ]
    }
  );
}
function VirtualizedEnumItems({
  field,
  values,
  selectedValues,
  unavailableValues,
  language,
  onSelect
}) {
  const scrollRef = reactExports.useRef(null);
  const viewportHeight = Math.min(320, Math.max(values.length, 1) * ENUM_ITEM_HEIGHT);
  const fitsInViewport = values.length * ENUM_ITEM_HEIGHT <= 320;
  const virtualizer = useVirtualizer({
    count: values.length,
    getScrollElement: () => scrollRef.current,
    estimateSize: () => ENUM_ITEM_HEIGHT,
    overscan: 8,
    observeElementRect: (_instance, cb) => {
      const element = scrollRef.current;
      cb({ width: element?.clientWidth || 400, height: element?.clientHeight || viewportHeight });
    }
  });
  const virtualRows = virtualizer.getVirtualItems();
  const totalSize = virtualizer.getTotalSize();
  const paddingTop = !fitsInViewport ? virtualRows[0]?.start ?? 0 : 0;
  const paddingBottom = !fitsInViewport && virtualRows.length > 0 ? totalSize - (virtualRows.at(-1)?.end ?? 0) : 0;
  const visibleValues = fitsInViewport ? values : virtualRows.flatMap((row) => values[row.index] ?? []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: scrollRef, className: "overflow-y-auto", style: { height: viewportHeight }, children: [
    paddingTop > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "shrink-0", style: { height: paddingTop } }) : null,
    visibleValues.map((value) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      EnumValueItem,
      {
        field,
        value,
        language,
        disabled: unavailableValues.includes(value),
        onSelect,
        actionIcon: selectedValues.includes(value) ? "tick" : void 0
      },
      value
    )),
    paddingBottom > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "shrink-0", style: { height: paddingBottom } }) : null
  ] });
}
const VALUE_SWITCH_GRID_CELL_ATTRIBUTE = "data-value-switch-cell";
function getValueSwitchGridCellSelector(rowIndex, columnIndex) {
  return `[${VALUE_SWITCH_GRID_CELL_ATTRIBUTE}="${rowIndex}:${columnIndex}"]`;
}
function getValueSwitchGridCellFocusable(container, rowIndex, columnIndex) {
  const cell = container?.querySelector(getValueSwitchGridCellSelector(rowIndex, columnIndex));
  if (!cell) return null;
  if (cell instanceof HTMLElement && cell.matches("input, button") && !cell.matches(":disabled, [readonly]")) {
    return cell;
  }
  return cell.querySelector("input:not(:disabled):not([readonly]), button:not(:disabled)");
}
function focusValueSwitchGridCell(container, rowIndex, columnIndex) {
  const focusable = getValueSwitchGridCellFocusable(container, rowIndex, columnIndex);
  if (!focusable) return;
  focusable.focus();
  if (focusable instanceof HTMLInputElement) focusable.select();
}
function handleValueSwitchGridKeyDown(event, {
  container,
  rowCount,
  columnCount,
  direction
}) {
  if (event.metaKey || event.ctrlKey || event.altKey) return;
  if (!["ArrowDown", "ArrowLeft", "ArrowRight", "ArrowUp", "Enter"].includes(event.key)) return;
  const target = event.target;
  if (!(target instanceof HTMLElement) || !container?.contains(target)) return;
  const cell = target.closest(`[${VALUE_SWITCH_GRID_CELL_ATTRIBUTE}]`);
  if (!(cell instanceof HTMLElement) || !container.contains(cell)) return;
  const isMenuButton = Boolean(target.closest("button"));
  if (isMenuButton && event.key === "Enter") return;
  const [rowIndex, columnIndex] = (cell.getAttribute(VALUE_SWITCH_GRID_CELL_ATTRIBUTE) ?? "").split(":").map((part) => Number(part));
  if (rowIndex === void 0 || columnIndex === void 0 || Number.isNaN(rowIndex) || Number.isNaN(columnIndex)) {
    return;
  }
  const next = getTwoDimensionGridNavigationTarget({
    key: event.key,
    shiftKey: event.shiftKey,
    direction,
    rowIndex,
    columnIndex,
    rowCount,
    columnCount
  });
  if (!next) return;
  event.preventDefault();
  focusValueSwitchGridCell(container, next.rowIndex, next.columnIndex);
}
function getTwoDimensionGridNavigationTarget({
  key,
  shiftKey,
  direction,
  rowIndex,
  columnIndex,
  rowCount,
  columnCount
}) {
  if (rowCount === 0 || columnCount === 0) return null;
  if (key === "ArrowUp" || key === "Enter" && shiftKey) {
    return rowIndex > 0 ? { rowIndex: rowIndex - 1, columnIndex } : null;
  }
  if (key === "ArrowDown" || key === "Enter") {
    return rowIndex < rowCount - 1 ? { rowIndex: rowIndex + 1, columnIndex } : null;
  }
  const cellCount = rowCount * columnCount;
  const currentIndex = rowIndex * columnCount + columnIndex;
  const movesForward = key === "ArrowRight" && direction === "ltr" || key === "ArrowLeft" && direction === "rtl";
  const nextIndex = (currentIndex + (movesForward ? 1 : -1) + cellCount) % cellCount;
  return {
    rowIndex: Math.floor(nextIndex / columnCount),
    columnIndex: nextIndex % columnCount
  };
}
function scrollTwoDimensionGridCellIntoView({
  cell,
  container,
  rowIndex,
  columnIndex,
  rowCount,
  columnCount
}) {
  const cellElement = cell.closest("td") ?? cell;
  const cellRect = cellElement.getBoundingClientRect();
  const containerRect = container.getBoundingClientRect();
  const stickyInsets = getStickyInsets(container);
  const maxScrollLeft = Math.max(0, container.scrollWidth - container.clientWidth);
  const maxScrollTop = Math.max(0, container.scrollHeight - container.clientHeight);
  container.scrollLeft = getSnappedOrAlignedScroll({
    currentScroll: container.scrollLeft,
    maxScroll: maxScrollLeft,
    index: columnIndex,
    count: columnCount,
    cellStart: cellRect.left,
    cellEnd: cellRect.right,
    viewportStart: containerRect.left + stickyInsets.left,
    viewportEnd: containerRect.right
  });
  container.scrollTop = getSnappedOrAlignedScroll({
    currentScroll: container.scrollTop,
    maxScroll: maxScrollTop,
    index: rowIndex,
    count: rowCount,
    cellStart: cellRect.top,
    cellEnd: cellRect.bottom,
    viewportStart: containerRect.top + stickyInsets.top,
    viewportEnd: containerRect.bottom
  });
}
function getStickyInsets(container) {
  return {
    top: container.querySelector("thead")?.getBoundingClientRect().height ?? 0,
    left: container.querySelector("tbody th")?.getBoundingClientRect().width ?? 0
  };
}
function getSnappedOrAlignedScroll({
  currentScroll,
  maxScroll,
  index,
  count,
  cellStart,
  cellEnd,
  viewportStart,
  viewportEnd
}) {
  if (index <= 0) return 0;
  if (index >= count - 1) return maxScroll;
  let nextScroll = currentScroll;
  if (cellStart < viewportStart) {
    nextScroll -= viewportStart - cellStart;
  } else if (cellEnd > viewportEnd) {
    nextScroll += cellEnd - viewportEnd;
  }
  return Math.min(maxScroll, Math.max(0, nextScroll));
}
function getInsertedNumericBound(bounds, index) {
  const current = bounds[index];
  if (current === void 0) return null;
  const next = bounds[index + 1];
  return next === void 0 ? current + 1 : current + (next - current) / 2;
}
function getNumericValues(values) {
  return values.filter((value) => typeof value === "number");
}
function EditValueSwitch({ onDraftChange, ...props }) {
  const { t: t2 } = useTranslation(["scenarios", "common", "user-scoring"]);
  const nodeSharp = AstBuilderNodeSharpFactory.useSharp();
  const node = nodeSharp.select((state) => state.node);
  const data = AstBuilderDataSharpFactory.select((state) => state.data);
  const triggerObjectTable = AstBuilderDataSharpFactory.useSharp().computed.triggerObjectTable.value;
  const onCancel = useCallbackRef$1(props.onCancel);
  const initialModel = reactExports.useMemo(
    () => parseValueSwitchAstNode(node) ?? createEmptyValueSwitchModel(node.namedChildren.fallback.constant),
    [node]
  );
  const [model, setModel] = reactExports.useState(initialModel);
  reactExports.useEffect(() => {
    function onKeyDown(event) {
      if (event.key !== "Escape" || event.defaultPrevented) return;
      event.preventDefault();
      onCancel();
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onCancel]);
  const dimensionOptions = reactExports.useMemo(() => {
    const accessors = [...data.payloadAccessors, ...data.databaseAccessors];
    const fieldOptions = accessors.flatMap((rawField) => {
      const field = rawField;
      const definition = getDataAccessorAstNodeField(field, { dataModel: data.dataModel, triggerObjectTable });
      const existingValues = model.dimensions.find(
        (dimension) => dimension && getValueSwitchDimensionKey(dimension) === getValueSwitchDimensionKey({ type: "field", field })
      )?.values ?? [];
      const option = getValueSwitchFieldOption(field, definition, existingValues);
      return option ? [option] : [];
    });
    const scoringSettings = data.scoringSettings;
    const options2 = [...fieldOptions];
    if (data.hasValidLicense && scoringSettings && isMaxRiskLevelInRange(scoringSettings.maxRiskLevel)) {
      options2.push({
        key: "risk-level",
        label: t2("scenarios:value_switch.customer_risk_level"),
        dimension: { type: "risk-level" },
        knownValues: scoringLevelEntries(SCORING_LEVELS_COLORS[scoringSettings.maxRiskLevel]).map(([level]) => level)
      });
    }
    for (const dimension of model.dimensions) {
      if (!dimension) continue;
      const key = getValueSwitchDimensionKey(dimension);
      if (options2.some((option) => option.key === key)) continue;
      options2.push({
        key,
        label: dimension.type === "field" ? getDataAccessorDisplayName(dimension.field) : t2("scenarios:value_switch.customer_risk_level"),
        dimension: dimension.type === "field" ? { type: "field", field: dimension.field } : { type: "risk-level" },
        knownValues: [...dimension.values]
      });
    }
    return options2;
  }, [data, model.dimensions, t2, triggerObjectTable]);
  const lastDraftModel = reactExports.useRef(model);
  reactExports.useEffect(() => {
    if (lastDraftModel.current === model) return;
    lastDraftModel.current = model;
    const nextAst = valueSwitchModelToAst(model, node.id);
    Object.assign(nodeSharp.value.node, nextAst);
    onDraftChange?.(nodeSharp.value.node);
  }, [model, node.id, nodeSharp, onDraftChange]);
  function updateModel(updater) {
    setModel((current) => normalizeValueSwitchThresholds(updater(current)));
  }
  function setDimensionCount(dimensionCount) {
    updateModel((current) => ({
      ...current,
      dimensionCount,
      dimensions: dimensionCount === 1 ? [current.dimensions[0] ?? null] : [current.dimensions[0] ?? null, null],
      thresholds: {}
    }));
  }
  function setDimension(index, option) {
    updateModel((current) => {
      const numeric = option.field && ["Int", "Float"].includes(option.field.dataType);
      const values = numeric ? [0] : option.knownValues.length > 0 ? [option.knownValues[0]] : option.dimension.type === "field" && !option.closed && current.dimensionCount === 1 ? [""] : [];
      const dimensions = [...current.dimensions];
      dimensions[index] = { ...option.dimension, values };
      return { ...current, dimensions, thresholds: {} };
    });
  }
  function setDimensionValues(index, values) {
    updateModel((current) => {
      const dimensions = [...current.dimensions];
      const dimension = dimensions[index];
      if (!dimension) return current;
      dimensions[index] = { ...dimension, values };
      return { ...current, dimensions };
    });
  }
  function replaceDimensionValue(dimensionIndex, valueIndex, value) {
    updateModel((current) => {
      const dimension = current.dimensions[dimensionIndex];
      if (!dimension) return current;
      const previousValue = dimension.values[valueIndex];
      if (previousValue === void 0) return current;
      const values = dimension.values.map(
        (currentValue, currentIndex) => currentIndex === valueIndex ? value : currentValue
      );
      const dimensions = [...current.dimensions];
      dimensions[dimensionIndex] = { ...dimension, values };
      const thresholds = { ...current.thresholds };
      for (const combination of getValueSwitchCombinations(current)) {
        if (combination[dimensionIndex] !== previousValue) continue;
        const nextCombination = [...combination];
        nextCombination[dimensionIndex] = value;
        thresholds[getValueSwitchCellKey(nextCombination)] = current.thresholds[getValueSwitchCellKey(combination)] ?? current.fallback;
      }
      return {
        ...current,
        dimensions,
        thresholds
      };
    });
  }
  function setThreshold(values, threshold) {
    updateModel((current) => ({
      ...current,
      thresholds: { ...current.thresholds, [getValueSwitchCellKey(values)]: threshold }
    }));
  }
  const selectedKeys = model.dimensions.map((dimension) => dimension ? getValueSwitchDimensionKey(dimension) : null);
  const content = /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-sm", role: "group", "aria-label": t2("scenarios:value_switch.dimension_count"), children: [1, 2].map((count) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      Button,
      {
        appearance: "stroked",
        variant: model.dimensionCount === count ? "primary" : "secondary",
        "aria-pressed": model.dimensionCount === count,
        onClick: () => setDimensionCount(count),
        children: t2(`scenarios:value_switch.${count === 1 ? "one_variable" : "two_variables"}`)
      },
      count
    )) }),
    model.dimensionCount === 1 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      OneDimensionEditor,
      {
        model,
        options: dimensionOptions,
        selectedKeys,
        onDimensionChange: (option) => setDimension(0, option),
        onValuesChange: (values) => setDimensionValues(0, values),
        onValueChange: (index, value) => replaceDimensionValue(0, index, value),
        onThresholdChange: setThreshold
      },
      selectedKeys[0] ?? "empty"
    ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
      TwoDimensionEditor,
      {
        model,
        options: dimensionOptions,
        selectedKeys,
        onDimensionChange: setDimension,
        onValuesChange: setDimensionValues,
        onValueChange: replaceDimensionValue,
        onThresholdChange: setThreshold,
        onFallbackChange: (fallback) => updateModel((current) => ({ ...current, fallback }))
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-md", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-default text-grey-secondary font-medium", children: t2("scenarios:value_switch.else") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        NumberInput,
        {
          size: "medium",
          className: "w-40",
          "aria-label": t2("scenarios:value_switch.fallback"),
          value: model.fallback,
          onChange: (fallback) => updateModel((current) => ({ ...current, fallback }))
        }
      )
    ] })
  ] });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "flex w-full min-w-0 max-w-full flex-col gap-lg overflow-hidden shadow-sm", children: [
    content,
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { appearance: "stroked", variant: "secondary", onClick: onCancel, children: t2("common:cancel") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          variant: "primary",
          onClick: () => props.onSave(nodeSharp.value.node),
          disabled: !isValueSwitchModelComplete(model),
          children: t2("common:validate")
        }
      )
    ] })
  ] });
}
function EditValueSwitchCard({
  node,
  onDraftChange,
  ...props
}) {
  const validation = AstBuilderNodeSharpFactory.useOptionalSharp()?.select((state) => state.validation);
  const nodeSharp = useRoot(
    {
      node,
      validation: {
        errors: [],
        evaluation: getEvaluationForNode(validation?.evaluation ?? [], node.id)
      }
    },
    false
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AstBuilderNodeSharpFactory.Provider, { value: nodeSharp, children: /* @__PURE__ */ jsxRuntimeExports.jsx(EditValueSwitch, { ...props, onDraftChange }) });
}
function OneDimensionEditor({
  model,
  options: options2,
  selectedKeys,
  onDimensionChange,
  onValuesChange,
  onValueChange,
  onThresholdChange
}) {
  const { t: t2, i18n } = useTranslation(["scenarios"]);
  const gridRef = reactExports.useRef(null);
  const dimension = model.dimensions[0];
  const currentOption = dimension ? options2.find((option) => option.key === getValueSwitchDimensionKey(dimension)) : null;
  const numeric = isNumericDimension(dimension, currentOption?.field);
  const availableValues = currentOption?.knownValues ?? [];
  const canAddValue = !!dimension && (availableValues.some((value) => !dimension.values.includes(value)) || dimension.type === "field" && !currentOption?.closed && !dimension.values.includes(""));
  function addValue() {
    if (!dimension) return;
    const unusedValue = availableValues.find((value) => !dimension.values.includes(value));
    const nextValue = unusedValue ?? (dimension.type === "field" && !currentOption?.closed && !dimension.values.includes("") ? "" : void 0);
    if (nextValue === void 0) return;
    const nextRowIndex = dimension.values.length;
    onValuesChange([...dimension.values, nextValue]);
    requestAnimationFrame(() => {
      focusValueSwitchGridCell(gridRef.current, nextRowIndex, 0);
    });
  }
  function replaceValue(index, value) {
    if (!dimension) return;
    onValueChange(index, value);
  }
  function removeValue(index) {
    if (!dimension) return;
    onValuesChange(dimension.values.filter((_, currentIndex) => currentIndex !== index));
  }
  const parentGridClassName = "grid grid-cols-[minmax(10rem,1fr)_7rem_auto] gap-x-md gap-y-sm";
  const rowSubgridClassName = "col-span-full grid grid-cols-subgrid items-center";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-md", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex max-w-xl items-center gap-md", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-default text-grey-secondary shrink-0 font-medium", children: t2("scenarios:value_switch.variable_is") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        DimensionSelect,
        {
          options: options2,
          selectedKey: selectedKeys[0] ?? null,
          excludedKey: selectedKeys[1] ?? null,
          allowNumeric: true,
          onChange: onDimensionChange
        }
      )
    ] }),
    dimension ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-grey-border bg-grey-background-light flex flex-col gap-md rounded-md border p-md", children: numeric ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      NumericOneDimensionEditor,
      {
        dimension,
        fallback: model.fallback,
        thresholds: model.thresholds,
        onValuesChange,
        onValueChange,
        onThresholdChange
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          ref: gridRef,
          className: parentGridClassName,
          onKeyDown: (event) => handleValueSwitchGridKeyDown(event, {
            container: gridRef.current,
            rowCount: dimension.values.length,
            columnCount: 2,
            direction: i18n.dir()
          }),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn(rowSubgridClassName, "text-default text-grey-secondary font-medium"), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "whitespace-nowrap", children: t2("scenarios:value_switch.if_value_is", { variable: currentOption?.label ?? "" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "whitespace-nowrap", children: t2("scenarios:value_switch.then_score") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": true })
            ] }),
            dimension.values.map((value, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: rowSubgridClassName, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-value-switch-cell": `${index}:0`, className: "min-w-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                DimensionValueInput,
                {
                  dimension,
                  value,
                  field: currentOption?.field,
                  knownValues: availableValues,
                  unavailableValues: dimension.values.filter((_, currentIndex) => currentIndex !== index),
                  onChange: (next) => replaceValue(index, next)
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-value-switch-cell": `${index}:1`, className: "min-w-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                ScoreInput,
                {
                  value: model.thresholds[getValueSwitchCellKey([value])] ?? model.fallback,
                  onChange: (threshold) => onThresholdChange([value], threshold)
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  mode: "icon",
                  variant: "secondary",
                  appearance: "stroked",
                  className: "shrink-0",
                  "aria-label": t2("scenarios:value_switch.remove_value"),
                  onClick: () => removeValue(index),
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "delete", className: "size-4" })
                }
              )
            ] }, index))
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          appearance: "stroked",
          variant: "secondary",
          className: "self-start",
          onClick: addValue,
          disabled: !canAddValue,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "plus", className: "size-4" }),
            t2("scenarios:value_switch.add_value")
          ]
        }
      )
    ] }) }) : null
  ] });
}
function ScoreInput({ value, onChange }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(NumberInput, { className: "w-full", value, onChange });
}
const NUMERIC_BAND_EDITOR_WIDTH_REM = 24;
const NUMERIC_ROW_HEADER_WIDTH_REM = NUMERIC_BAND_EDITOR_WIDTH_REM + 1;
function NumericBandOperator({ kind }) {
  const { t: t2 } = useTranslation(["user-scoring"]);
  const isBadge = kind !== "middle";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      className: CtaV2ClassName({
        variant: "secondary",
        mode: isBadge ? "icon" : "normal",
        appearance: isBadge ? "stroked" : "link"
      }),
      "aria-disabled": isBadge,
      children: kind === "overflow" ? ">" : kind === "first" ? "≤" : t2("user-scoring:switch.number.middle")
    }
  );
}
function NumericBandRow({ bounds, index, onValueChange, onValuesChange, trailing, cellRow }) {
  const { t: t2 } = useTranslation(["scenarios", "user-scoring"]);
  const bound = bounds[index] ?? 0;
  const insertedBound = getInsertedNumericBound(bounds, index);
  const hasError = index > 0 && bound <= (bounds[index - 1] ?? 0);
  function insertBound() {
    if (insertedBound === null) return;
    const next = [...bounds];
    next.splice(index + 1, 0, insertedBound);
    onValuesChange(next);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: cn(
          "grid items-center gap-sm",
          trailing ? "grid-cols-[3rem_7rem_2rem_7rem_minmax(7rem,1fr)_3rem]" : "grid-cols-[3rem_7rem_2rem_7rem_3rem]"
        ),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(NumericBandOperator, { kind: index === 0 ? "first" : "middle" }),
          index > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { disabled: true, value: (bounds[index - 1] ?? 0) + 1 }) : null,
          index > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-grey-secondary text-center", children: t2("user-scoring:switch.number.and") }) : null,
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            NumberInput,
            {
              "data-value-switch-threshold-input": true,
              "data-value-switch-cell": cellRow === void 0 ? void 0 : `${cellRow}:0`,
              className: index === 0 ? "col-start-2 col-span-3" : void 0,
              value: bound,
              onChange: onValueChange,
              borderColor: hasError ? "redfigma-47" : "greyfigma-90",
              "aria-invalid": hasError
            }
          ),
          trailing,
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              mode: "icon",
              variant: "secondary",
              appearance: "stroked",
              "aria-label": t2("scenarios:value_switch.remove_value"),
              disabled: bounds.length === 1,
              onClick: () => onValuesChange(bounds.filter((_, currentIndex) => currentIndex !== index)),
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "delete", className: "size-4" })
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      InsertThresholdControl,
      {
        disabled: insertedBound === null,
        onClick: insertBound,
        label: t2("scenarios:value_switch.add_value")
      }
    )
  ] });
}
function NumericBandOverflow({ bound }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-[3rem_1fr_3rem] items-center gap-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(NumericBandOperator, { kind: "overflow" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { readOnly: true, disabled: true, value: bound ?? "" })
  ] });
}
function NumericOneDimensionEditor({
  dimension,
  fallback,
  thresholds,
  onValuesChange,
  onValueChange,
  onThresholdChange
}) {
  const { i18n } = useTranslation(["scenarios"]);
  const gridRef = reactExports.useRef(null);
  const bounds = getNumericValues(dimension.values);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      ref: gridRef,
      className: "flex flex-col",
      onKeyDown: (event) => handleValueSwitchGridKeyDown(event, {
        container: gridRef.current,
        rowCount: bounds.length,
        columnCount: 2,
        direction: i18n.dir()
      }),
      children: [
        bounds.map((bound, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          NumericBandRow,
          {
            bounds,
            index,
            cellRow: index,
            onValueChange: (value) => onValueChange(index, value),
            onValuesChange,
            trailing: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-value-switch-cell": `${index}:1`, className: "min-w-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              ScoreInput,
              {
                value: thresholds[getValueSwitchCellKey([bound])] ?? fallback,
                onChange: (value) => onThresholdChange([bound], value)
              }
            ) })
          },
          `numeric-bound-${index}`
        )),
        /* @__PURE__ */ jsxRuntimeExports.jsx(NumericBandOverflow, { bound: bounds.at(-1) })
      ]
    }
  );
}
function InsertThresholdControl({
  disabled,
  onClick,
  label
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "group h-4 w-full", children: !disabled ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "button",
    {
      type: "button",
      className: "opacity-0 transition-opacity group-hover:opacity-100 focus:opacity-100 flex items-center w-full gap-2xs",
      "aria-label": label,
      onClick: (event) => {
        onClick();
        focusNextThresholdInput(event.currentTarget);
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "plus", className: "size-4 border border-purple-primary rounded-full text-purple-primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-purple-primary h-0.5 w-full" })
      ]
    }
  ) : null });
}
function focusNextThresholdInput(control) {
  requestAnimationFrame(() => {
    const nextInput = [...document.querySelectorAll("[data-value-switch-threshold-input]")].find(
      (input) => control.compareDocumentPosition(input) & Node.DOCUMENT_POSITION_FOLLOWING
    );
    nextInput?.focus();
    nextInput?.select();
  });
}
function TwoDimensionEditor({
  model,
  options: options2,
  selectedKeys,
  onDimensionChange,
  onValuesChange,
  onValueChange,
  onThresholdChange,
  onFallbackChange
}) {
  const { t: t2, i18n } = useTranslation(["scenarios"]);
  const [rowDimension, columnDimension] = model.dimensions;
  const cellRefs = reactExports.useRef([]);
  const tableScrollRef = reactExports.useRef(null);
  const columnCount = columnDimension?.values.length ?? 0;
  const hasCompactCells = columnCount > 4;
  const rowOption = rowDimension ? options2.find((option) => option.key === getValueSwitchDimensionKey(rowDimension)) : void 0;
  const numericRows = isNumericDimension(rowDimension, rowOption?.field);
  const numericBounds = numericRows && rowDimension ? getNumericValues(rowDimension.values) : [];
  const rowHeaderWidthRem = numericRows ? NUMERIC_ROW_HEADER_WIDTH_REM : 12;
  const columnWidthRem = hasCompactCells ? 6.5 : 7;
  function handleCellKeyDown(event, rowIndex, columnIndex) {
    if (!["ArrowDown", "ArrowLeft", "ArrowRight", "ArrowUp", "Enter"].includes(event.key)) return;
    event.preventDefault();
    const rowCount = rowDimension?.values.length ?? 0;
    const target = getTwoDimensionGridNavigationTarget({
      key: event.key,
      shiftKey: event.shiftKey,
      direction: i18n.dir(),
      rowIndex,
      columnIndex,
      rowCount,
      columnCount
    });
    if (!target) return;
    const targetInput = cellRefs.current[target.rowIndex * columnCount + target.columnIndex];
    if (!targetInput) return;
    targetInput.focus({ preventScroll: true });
    targetInput.select();
    if (!tableScrollRef.current) return;
    scrollTwoDimensionGridCellIntoView({
      cell: targetInput,
      container: tableScrollRef.current,
      ...target,
      rowCount,
      columnCount
    });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-w-0 flex-col gap-md isolate", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid min-w-0 grid-cols-1 gap-md md:grid-cols-2", children: [0, 1].map((index) => {
      const dimension = model.dimensions[index];
      const currentOption = dimension ? options2.find((option) => option.key === getValueSwitchDimensionKey(dimension)) : null;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "border-grey-border bg-grey-background-light flex min-w-0 flex-col gap-md rounded-md border p-md",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-w-0 flex-col gap-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-default text-grey-secondary font-medium", children: t2(index === 0 ? "scenarios:value_switch.rows_based_on" : "scenarios:value_switch.columns_based_on") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                DimensionSelect,
                {
                  options: options2,
                  selectedKey: selectedKeys[index] ?? null,
                  excludedKey: selectedKeys[index === 0 ? 1 : 0] ?? null,
                  allowNumeric: index === 0,
                  onChange: (option) => onDimensionChange(index, option)
                }
              )
            ] }),
            dimension && !isNumericDimension(dimension, currentOption?.field) ? /* @__PURE__ */ jsxRuntimeExports.jsx(
              DimensionValuesSelect,
              {
                dimension,
                field: currentOption?.field,
                knownValues: currentOption?.knownValues ?? [],
                onChange: (values) => onValuesChange(index, values)
              }
            ) : null
          ]
        },
        index
      );
    }) }),
    rowDimension && columnDimension && rowDimension.values.length > 0 && columnDimension.values.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        ref: tableScrollRef,
        className: "border-grey-border max-h-[30vh] w-full min-w-0 overflow-auto rounded-md border",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "table",
          {
            className: "table-fixed border-collapse",
            style: { width: `${rowHeaderWidthRem + columnCount * columnWidthRem}rem` },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("colgroup", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("col", { style: { width: `${rowHeaderWidthRem}rem` } }),
                columnDimension.values.map((value) => /* @__PURE__ */ jsxRuntimeExports.jsx("col", { style: { width: `${columnWidthRem}rem` } }, `${typeof value}:${String(value)}`))
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "border-grey-border bg-surface-card sticky top-0 left-0 z-20 border-r border-b p-sm" }),
                columnDimension.values.map((value) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "th",
                  {
                    className: cn(
                      "border-grey-border bg-surface-card sticky top-0 z-10 max-w-0 overflow-hidden border-b text-start font-normal",
                      hasCompactCells ? "p-xs" : "p-sm"
                    ),
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-0 min-w-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      ValueSwitchValueTag,
                      {
                        dimension: columnDimension,
                        value,
                        field: options2.find((option) => option.key === getValueSwitchDimensionKey(columnDimension))?.field,
                        className: "w-full"
                      }
                    ) })
                  },
                  `${typeof value}:${String(value)}`
                ))
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
                rowDimension.values.map((rowValue, rowIndex) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "th",
                    {
                      className: cn(
                        "border-grey-border bg-surface-card sticky left-0 z-10 border-r text-start font-normal",
                        numericRows ? "overflow-visible align-top p-sm pb-0" : "overflow-hidden",
                        !numericRows && (hasCompactCells ? "p-xs" : "p-sm")
                      ),
                      children: numericRows && typeof rowValue === "number" ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                        NumericBandRow,
                        {
                          bounds: numericBounds,
                          index: rowIndex,
                          onValueChange: (value) => onValueChange(0, rowIndex, value),
                          onValuesChange: (values) => onValuesChange(0, values)
                        }
                      ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-0 min-w-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        ValueSwitchValueTag,
                        {
                          dimension: rowDimension,
                          value: rowValue,
                          field: rowOption?.field,
                          className: "w-full"
                        }
                      ) })
                    }
                  ),
                  columnDimension.values.map((columnValue, columnIndex) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "td",
                    {
                      className: cn(hasCompactCells ? "p-xs" : "p-sm", numericRows && "pt-sm align-top"),
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        NumberInput,
                        {
                          ref: (element) => {
                            cellRefs.current[rowIndex * columnCount + columnIndex] = element;
                          },
                          size: "medium",
                          className: "min-w-24",
                          "aria-label": t2("scenarios:value_switch.cell_value", {
                            row: String(rowValue),
                            column: String(columnValue)
                          }),
                          value: model.thresholds[getValueSwitchCellKey([rowValue, columnValue])] ?? model.fallback,
                          onChange: (threshold) => onThresholdChange([rowValue, columnValue], threshold),
                          onKeyDown: (event) => handleCellKeyDown(event, rowIndex, columnIndex)
                        }
                      )
                    },
                    numericRows ? `${rowIndex}:${columnIndex}` : getValueSwitchCellKey([rowValue, columnValue])
                  ))
                ] }, numericRows ? `numeric-row-${rowIndex}` : `${typeof rowValue}:${String(rowValue)}`)),
                numericRows ? /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "border-grey-border bg-surface-card sticky left-0 z-10 border-r p-sm text-start align-top font-normal", children: /* @__PURE__ */ jsxRuntimeExports.jsx(NumericBandOverflow, { bound: numericBounds.at(-1) }) }) }) : null
              ] })
            ]
          }
        )
      }
    ) : null
  ] });
}
function DimensionSelect({
  options: options2,
  selectedKey,
  excludedKey,
  allowNumeric,
  onChange
}) {
  const { t: t2 } = useTranslation(["common", "scenarios"]);
  const language = useFormatLanguage();
  const dataSharp = AstBuilderDataSharpFactory.useSharp();
  const data = dataSharp.select((state) => state.$data);
  const triggerObjectTable = dataSharp.computed.triggerObjectTable.value;
  const selected = options2.find((option) => option.key === selectedKey);
  const selectedNode = reactExports.useMemo(
    () => selected?.dimension.type === "field" ? selected.dimension.field : selected?.dimension.type === "risk-level" ? NewRecordRiskLevelCheckAstNode() : NewUndefinedAstNode(),
    [selected]
  );
  const menuOptions = reactExports.useMemo(
    () => getOperandMenuOptions({
      node: selectedNode,
      enums: void 0,
      data: data.value,
      triggerObjectTable,
      language,
      t: t2
    }).filter((option) => {
      const optionKey = getDimensionKeyForAstNode(option.astNode);
      if (!optionKey || optionKey === excludedKey) return false;
      if (isRecordRiskLevelCheckAstNode(option.astNode)) return options2.some(({ key }) => key === "risk-level");
      return option.operandType === "Field" && (option.dataType === "String" || allowNumeric && ["Int", "Float"].includes(option.dataType));
    }),
    [allowNumeric, data.value, excludedKey, language, options2, selectedNode, t2, triggerObjectTable]
  );
  const operandSharp = EditionOperandSharpFactory.createSharp({
    enumValues: void 0,
    options: menuOptions,
    optionsDataType: void 0,
    coerceDataType: [],
    excludeFields: void 0,
    excludeFuntionsType: void 0
  });
  reactExports.useEffect(() => {
    operandSharp.actions.setEnumsAndOptions(void 0, menuOptions, void 0);
  }, [menuOptions, operandSharp]);
  function selectNode(node) {
    const key = getDimensionKeyForAstNode(node);
    const option = options2.find((candidate) => candidate.key === key);
    if (option) onChange(option);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(EditionOperandSharpFactory.Provider, { value: operandSharp, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex min-w-0 flex-col gap-sm self-start", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AstBuilderOperandMenu, { onSelect: selectNode, bottomActions: [], children: /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Trigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", className: editionOperandLabelClassnames(), children: [
    selected ? /* @__PURE__ */ jsxRuntimeExports.jsx(OperandDisplayName, { interactionMode: "editor", node: selectedNode }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: operandDisplayNameClassnames({ type: "placeholder" }), children: t2("scenarios:value_switch.select_variable") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Arrow, {})
  ] }) }) }) }) });
}
function getDimensionKeyForAstNode(node) {
  if (isRecordRiskLevelCheckAstNode(node)) return "risk-level";
  if (isPayload(node)) return `payload:${node.children[0].constant}`;
  if (isDatabaseAccess(node)) {
    return [
      "database",
      node.namedChildren.tableName.constant,
      ...node.namedChildren.path.constant,
      node.namedChildren.fieldName.constant
    ].join(":");
  }
  return null;
}
function DimensionValueInput({
  dimension,
  field,
  value,
  knownValues,
  unavailableValues,
  onChange
}) {
  if (field && isEnumField(field))
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      EnumValueMenu,
      {
        field,
        selectedValues: [value],
        currentValues: dimension.values,
        unavailableValues,
        onChange
      }
    );
  if (dimension.type === "field" && knownValues.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { className: "w-full", value: String(value), onChange: (event) => onChange(event.target.value) });
  }
  const availableValues = [.../* @__PURE__ */ new Set([...knownValues, value])];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(MenuCommand.Menu, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Trigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.SelectButton, { className: "w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ValueSwitchValueTag, { dimension, value }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Content, { align: "start", sideOffset: 4, sameWidth: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.List, { children: availableValues.map((option) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      MenuCommand.Item,
      {
        disabled: unavailableValues.includes(option),
        onSelect: () => onChange(option),
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(ValueSwitchValueTag, { dimension, value: option })
      },
      `${typeof option}:${String(option)}`
    )) }) })
  ] });
}
function DimensionValuesSelect({
  dimension,
  field,
  knownValues,
  onChange
}) {
  const { t: t2 } = useTranslation(["scenarios"]);
  const [manualValue, setManualValue] = reactExports.useState("");
  const availableValues = [.../* @__PURE__ */ new Set([...knownValues, ...dimension.values])];
  function toggle(value) {
    onChange(
      dimension.values.includes(value) ? dimension.values.filter((current) => current !== value) : [...dimension.values, value]
    );
  }
  function addManualValue(e2) {
    e2.preventDefault();
    const value = manualValue.trim();
    if (dimension.type !== "field" || !value || dimension.values.includes(value)) return;
    onChange([...dimension.values, value]);
    setManualValue("");
  }
  if (field && isEnumField(field))
    return /* @__PURE__ */ jsxRuntimeExports.jsx(EnumValueMenu, { multiple: true, field, selectedValues: dimension.values, onChange });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(MenuCommand.Menu, { persistOnSelect: true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Trigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.SelectButton, { className: "h-auto min-h-10 w-full min-w-0 overflow-hidden py-sm", children: dimension.values.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      ExpandableGroupTagLine,
      {
        classname: "gap-xs pe-lg",
        overflowBehavior: "popover",
        items: dimension.values.map((value) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          ValueSwitchValueTag,
          {
            dimension,
            value,
            className: "max-w-full"
          },
          `${typeof value}:${String(value)}`
        ))
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pe-lg", children: t2("scenarios:value_switch.select_values") }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Content, { align: "start", sideOffset: 4, sameWidth: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(MenuCommand.List, { children: [
      availableValues.map((value) => /* @__PURE__ */ jsxRuntimeExports.jsxs(MenuCommand.Item, { onSelect: () => toggle(value), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ValueSwitchValueTag, { dimension, value }),
        dimension.values.includes(value) ? /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "tick", className: "size-4" }) : null
      ] }, `${typeof value}:${String(value)}`)),
      dimension.type === "field" ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          size: "medium",
          className: "flex-1",
          value: manualValue,
          placeholder: t2("scenarios:value_switch.manual_value"),
          onChange: (event) => setManualValue(event.target.value),
          onKeyDown: (event) => event.key === "Enter" && addManualValue(event)
        }
      ) }) : null
    ] }) })
  ] }) });
}
const editionOperandLabelClassnames = cva(
  [
    "group",
    "size-fit min-h-10 min-w-10 rounded-sm outline-hidden",
    "flex flex-row items-center justify-between gap-sm px-xs",
    "bg-surface-card aria-expanded:bg-purple-background-light aria-expanded:border-purple-primary",
    "disabled:bg-grey-background-light disabled:border-grey-border disabled:text-grey-disabled",
    "disabled:**:text-grey-disabled"
  ],
  {
    variants: {
      validationStatus: {
        valid: "border enabled:border-grey-border enabled:aria-[expanded=false]:focus:border-purple-primary",
        error: "border enabled:border-red-primary enabled:aria-[expanded=false]:focus:border-purple-primary",
        "light-error": "border enabled:border-red-secondary enabled:aria-[expanded=false]:focus:border-purple-primary"
      }
    },
    defaultVariants: {
      validationStatus: "valid"
    }
  }
);
function optionMatchesDataTypeFilter(option, filter) {
  return typeof filter === "function" ? filter(option) : filter.includes(option.dataType);
}
const EditionOperandSharpFactory = B({
  name: "EditionOperand",
  initializer: (initialData) => ({
    ...initialData
  })
}).withActions({
  setEnumsAndOptions(api, enums, options2, excludeFields) {
    api.batch(() => {
      api.value.enumValues = enums;
      api.value.options = options2;
      api.value.excludeFields = excludeFields;
    });
  }
}).withComputed({
  filteredOptions(state) {
    const dataTypes = state.optionsDataType;
    const excludeFields = state.excludeFields;
    const excludeFuntionsType = state.excludeFuntionsType;
    return state.options.filter((option) => {
      const matchesDataType = !dataTypes || optionMatchesDataTypeFilter(option, dataTypes);
      const fieldName = getFieldName(option.astNode);
      const isExcludedField = fieldName !== "unknown" ? excludeFields?.includes(fieldName) : false;
      const isExcludedFunction = option.operandType === "Function" && !!excludeFuntionsType && optionMatchesDataTypeFilter(option, excludeFuntionsType);
      return matchesDataType && !isExcludedField && !isExcludedFunction;
    });
  }
});
function EditionAstBuilderOperand({ onChange, ...props }) {
  const { node } = props;
  const { t: t$12 } = useTranslation(["common", "scenarios"]);
  const language = useFormatLanguage();
  const dataSharp = AstBuilderDataSharpFactory.useSharp();
  const nodeSharp = AstBuilderNodeSharpFactory.useOptionalSharp();
  const [editedNode, setEditedNode] = reactExports.useState(null);
  const [restoreNodeOnCancel, setRestoreNodeOnCancel] = reactExports.useState(null);
  const data = dataSharp.select((s) => s.$data);
  const triggerObjectTable = dataSharp.computed.triggerObjectTable;
  const validationStatus = props.validationStatus;
  const operandSharp = EditionOperandSharpFactory.createSharp({
    enumValues: props.enumValues,
    options: getOperandMenuOptions({
      enums: props.enumValues,
      data: data.value,
      triggerObjectTable: triggerObjectTable.value,
      node,
      language,
      t: t$12,
      excludeFields: props.excludeFields
    }),
    optionsDataType: props.optionsDataType,
    excludeFuntionsType: props.excludeFuntionsType,
    coerceDataType: props.coerceDataType,
    excludeFields: props.excludeFields
  });
  const onSelect = useCallbackRef$1(onChange);
  const closeEditor = useCallbackRef$1(() => {
    setEditedNode(null);
    setRestoreNodeOnCancel(null);
  });
  const onCreateSelect = useCallbackRef$1((selectedNode) => {
    if (isValueSwitchAstNode(selectedNode)) {
      setRestoreNodeOnCancel(node);
      onSelect(selectedNode);
      setEditedNode(selectedNode);
      return;
    }
    if (isEditableAstNode(selectedNode)) {
      setEditedNode(selectedNode);
      return;
    }
    onSelect(selectedNode);
  });
  const onEditSave = useCallbackRef$1((savedNode) => {
    onSelect(savedNode);
    closeEditor();
  });
  const onEditCancel = useCallbackRef$1(() => {
    if (restoreNodeOnCancel) {
      onSelect(restoreNodeOnCancel);
    }
    closeEditor();
  });
  reactExports.useEffect(() => {
    operandSharp.actions.setEnumsAndOptions(
      props.enumValues,
      getOperandMenuOptions({
        enums: props.enumValues,
        data: data.value,
        triggerObjectTable: triggerObjectTable.value,
        node,
        language,
        t: t$12,
        excludeFields: props.excludeFields
      }),
      props.excludeFields
    );
  }, [operandSharp, props.enumValues, props.excludeFields, data.value, triggerObjectTable.value, node, t$12, language]);
  const bottomActions = [
    ...!isUndefinedAstNode(node) ? [
      {
        id: "clean",
        label: t$12("scenarios:edit_operand.clear_operand"),
        icon: "restart-alt",
        onSelect: () => {
          closeEditor();
          onSelect(NewUndefinedAstNode());
        }
      }
    ] : [],
    ...isEditableAstNode(node) ? [
      {
        id: "edit",
        label: t$12("common:edit"),
        icon: "edit-square",
        onSelect: () => {
          setRestoreNodeOnCancel(null);
          setEditedNode(t(node));
        }
      }
    ] : [],
    ...nodeSharp && !isUndefinedAstNode(node) ? [
      {
        id: "copy",
        label: t$12("common:copy"),
        icon: "copy",
        onSelect: () => {
          nodeSharp.actions.copyNode(node);
        }
      }
    ] : [],
    ...nodeSharp && nodeSharp.value.copiedNode ? [
      {
        id: "paste",
        label: t$12("common:paste"),
        icon: "paste",
        onSelect: () => {
          if (nodeSharp.value.copiedNode) {
            onSelect(injectIdToNode(nodeSharp.value.copiedNode));
          }
        }
      }
    ] : []
  ];
  const isEditingValueSwitch = editedNode !== null && isValueSwitchAstNode(editedNode);
  const isValueSwitchOpen = dataSharp.select((s) => s.isValueSwitchOpen);
  reactExports.useLayoutEffect(() => {
    if (!isEditingValueSwitch) return;
    dataSharp.value.isValueSwitchOpen = true;
    dataSharp.value.onValueSwitchOpenChange?.(true);
    return () => {
      dataSharp.value.isValueSwitchOpen = false;
      dataSharp.value.onValueSwitchOpenChange?.(false);
    };
  }, [dataSharp, isEditingValueSwitch]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(EditionOperandSharpFactory.Provider, { value: operandSharp, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex flex-col gap-sm self-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        AstBuilderOperandMenu,
        {
          disabled: isValueSwitchOpen || isEditingValueSwitch,
          onSelect: onCreateSelect,
          bottomActions,
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Trigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              disabled: isValueSwitchOpen || isEditingValueSwitch,
              className: editionOperandLabelClassnames({ validationStatus }),
              children: [
                M(node).when(isUndefinedAstNode, () => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: operandDisplayNameClassnames({
                      type: "placeholder"
                    }),
                    children: props.placeholder ?? t$12("scenarios:edit_operand.placeholder")
                  }
                )).otherwise(() => /* @__PURE__ */ jsxRuntimeExports.jsx(OperandDisplayName, { interactionMode: "editor", ...props })),
                /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Arrow, {})
              ]
            }
          ) })
        }
      ),
      editedNode && !isValueSwitchAstNode(editedNode) ? /* @__PURE__ */ jsxRuntimeExports.jsx(OperandEditModal, { node: editedNode, onSave: onEditSave, onCancel: onEditCancel }) : null,
      props.showErrors ? /* @__PURE__ */ jsxRuntimeExports.jsx(EditionEvaluationErrors, { id: node.id }) : null
    ] }),
    isEditingValueSwitch ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full min-w-0 basis-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      EditValueSwitchCard,
      {
        node: editedNode,
        onSave: onEditSave,
        onCancel: onEditCancel,
        onDraftChange: props.onReplaceNode
      }
    ) }) : null
  ] }) });
}
function EditFilters({ aggregatedField, dataModel, onChange }) {
  const { t: t$12 } = useTranslation(scenarioI18n);
  const { t: stringifyContextT } = useTranslation(["common", "scenarios"]);
  const language = useFormatLanguage();
  const customLists = AstBuilderDataSharpFactory.select((s) => s.data.customLists);
  const nodeSharp = AstBuilderNodeSharpFactory.useSharp();
  const filters = nodeSharp.select((s) => s.node.namedChildren.filters.children);
  const evaluation = nodeSharp.select((s) => s.validation);
  const [filterEditedIndex, setEditedFilterIndex] = reactExports.useState(null);
  const tableName = aggregatedField?.tableName;
  const options2 = reactExports.useMemo(() => {
    return tableName ? dataModel.find((t2) => t2.name === tableName)?.fields.map((f) => ({ tableName, fieldName: f.name, field: f })) : null;
  }, [tableName, dataModel]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-md", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-m", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Trans,
      {
        t: t$12,
        i18nKey: tableName ? "scenarios:edit_aggregation.filters_in" : "scenarios:edit_aggregation.filters",
        values: { tableName }
      }
    ) }),
    filters.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-sm", children: filters.map((filter, filterIndex) => {
      const binaryFilter = isBinaryAggregationFilter(filter);
      const complexFilter = isComplexAggregationFilter(filter);
      const isLastFilter = filterIndex === filters.length - 1;
      const filteredFieldErrors = getErrorsForNode(evaluation, [
        filter.namedChildren.fieldName.id,
        filter.namedChildren.tableName.id
      ]);
      const operatorErrors = getErrorsForNode(evaluation, filter.namedChildren.operator.id);
      const valueErrors = binaryFilter ? getErrorsForNode(evaluation, filter.namedChildren.value.id, true) : [];
      const displayName = complexFilter && !isUndefinedAstNode(filter.namedChildren.value.namedChildren.value) ? getAstNodeDisplayName(filter.namedChildren.value, {
        t: stringifyContextT,
        language,
        customLists
      }) : "...";
      const enumValues = filter.namedChildren.tableName.constant && filter.namedChildren.fieldName.constant ? getResolvedEnumValues(
        dataModel,
        filter.namedChildren.tableName.constant,
        filter.namedChildren.fieldName.constant
      ) : [];
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(reactExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-grey-border flex flex-col gap-md rounded-md border-[0.5px] p-md", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-grey-secondary flex items-center gap-sm ps-sm text-xs", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t$12("scenarios:edit_aggregation.filter_field_label") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                FieldSelect,
                {
                  tableName,
                  options: options2,
                  trigger: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      className: cn(
                        "text-s bg-surface-card aria-disabled:bg-grey-background-light text-grey-primary flex h-10 items-center justify-between rounded-sm border px-xs",
                        filteredFieldErrors.length > 0 ? "border-red-primary" : "border-grey-border"
                      ),
                      children: [
                        filter.namedChildren.fieldName.constant,
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "arrow-2-down", className: "size-5" })
                      ]
                    }
                  ),
                  onChange: (filteredField) => {
                    nodeSharp.update(() => {
                      filter.namedChildren.tableName.constant = filteredField.tableName;
                      filter.namedChildren.fieldName.constant = filteredField.fieldName;
                    });
                    nodeSharp.actions.validate();
                    onChange?.();
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t$12("scenarios:edit_aggregation.filter_operator_label") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                OperatorSelect,
                {
                  isFilter: true,
                  options: aggregationFilterOperators,
                  operator: filter.namedChildren.operator.constant,
                  onOperatorChange: (operator) => {
                    nodeSharp.update(() => {
                      if (isUnaryAggregationFilterOperator(operator)) {
                        filter.namedChildren = {
                          tableName: filter.namedChildren.tableName,
                          fieldName: filter.namedChildren.fieldName,
                          operator: NewConstantAstNode({ constant: operator })
                        };
                        return;
                      }
                      if (isBinaryAggregationFilterOperator(operator)) {
                        const valueNode2 = M(filter).when(
                          isBinaryAggregationFilter,
                          (binFilter) => binFilter.namedChildren.value
                        ).when(
                          isComplexAggregationFilter,
                          (compFilter) => compFilter.namedChildren.value.namedChildren.value
                        ).otherwise(() => NewUndefinedAstNode());
                        filter.namedChildren = {
                          tableName: filter.namedChildren.tableName,
                          fieldName: filter.namedChildren.fieldName,
                          operator: NewConstantAstNode({ constant: operator }),
                          value: valueNode2
                        };
                        return;
                      }
                      const valueNode = M(filter).when(
                        isBinaryAggregationFilter,
                        (binFilter) => binFilter.namedChildren.value
                      ).when(
                        isComplexAggregationFilter,
                        (compFilter) => compFilter.namedChildren.value.namedChildren.value
                      ).otherwise(() => NewUndefinedAstNode());
                      filter.namedChildren = {
                        tableName: filter.namedChildren.tableName,
                        fieldName: filter.namedChildren.fieldName,
                        operator: NewConstantAstNode({ constant: operator }),
                        value: NewFuzzyMatchFilterOptionsAstNode({ value: valueNode })
                      };
                    });
                    nodeSharp.actions.validate();
                    onChange?.();
                  },
                  validationStatus: operatorErrors.length > 0 ? "error" : "valid"
                }
              ),
              binaryFilter && filter.namedChildren.operator.constant ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t$12("scenarios:edit_aggregation.filter_value_label") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  EditionAstBuilderOperand,
                  {
                    node: filter.namedChildren.value,
                    onChange: (node) => {
                      if (isKnownOperandAstNode(node)) {
                        filter.namedChildren.value = node;
                        nodeSharp.actions.validate();
                        onChange?.();
                      }
                    },
                    optionsDataType: (opt) => opt.operandType !== "Modeling",
                    validationStatus: valueErrors.length > 0 ? "error" : "valid",
                    enumValues: ["=", "!="].includes(filter.namedChildren.operator.constant) ? enumValues : void 0
                  }
                )
              ] }) : null,
              complexFilter && filter.namedChildren.operator.constant ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", onClick: () => setEditedFilterIndex(filterIndex), children: displayName }),
                filter.namedChildren.value && filterEditedIndex === filterIndex ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                  OperandEditModal,
                  {
                    node: t(filter.namedChildren.value),
                    onSave: (astNode) => {
                      if (isFuzzyMatchFilterOptionsAstNode(astNode)) {
                        filter.namedChildren.value = astNode;
                        nodeSharp.actions.validate();
                        onChange?.();
                      }
                      setEditedFilterIndex(null);
                    },
                    onCancel: () => {
                      setEditedFilterIndex(null);
                    }
                  }
                ) : null
              ] }) : null
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              RemoveButton,
              {
                onClick: () => {
                  filters.splice(filterIndex, 1);
                  onChange?.();
                }
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(EditionEvaluationErrors, { id: filter.id })
        ] }),
        !isLastFilter ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-grey-secondary text-xs", children: t$12("scenarios:logical_operator.and") }) : null
      ] }, filterIndex);
    }) }) : null,
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-row justify-start gap-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        FieldSelect,
        {
          tableName,
          options: options2,
          trigger: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { disabled: !tableName, className: "h-fit", variant: "secondary", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "plus", className: "size-5" }),
            t$12("scenarios:edit_aggregation.add_filter")
          ] }),
          onChange: (filteredField) => {
            nodeSharp.update(() => {
              filters.push(
                NewAggregatorFilterAstNode({
                  namedChildren: {
                    fieldName: NewConstantAstNode({ constant: filteredField.fieldName }),
                    tableName: NewConstantAstNode({ constant: filteredField.tableName }),
                    operator: NewConstantAstNode({ constant: null }),
                    value: NewUndefinedAstNode()
                  }
                })
              );
            });
            nodeSharp.actions.validate();
            onChange?.();
          }
        }
      ),
      filters.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(Callout, { children: t$12("scenarios:edit_aggregation.add_filter.callout") }) : null
    ] })
  ] });
}
function FieldSelect({
  tableName,
  options: options2,
  trigger,
  onChange
}) {
  const [open, setOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(MenuCommand.Menu, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Trigger, { children: trigger }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Content, { className: "text-s w-75", align: "start", sideOffset: 4, children: tableName && options2 ? /* @__PURE__ */ jsxRuntimeExports.jsx(EditDataModelFieldTableMenu, { tableName, fields: options2, onChange }) : null })
  ] });
}
function AggregationEditContent({ onChange } = {}) {
  const { t: t2 } = useTranslation(["scenarios"]);
  const dataModel = AstBuilderDataSharpFactory.select((s) => s.data.dataModel);
  const hasValidLicense = AstBuilderDataSharpFactory.select((s) => s.data.hasValidLicense);
  const nodeSharp = AstBuilderNodeSharpFactory.useSharp();
  const node = nodeSharp.select((s) => s.node);
  const currentAggregator = node.namedChildren.aggregator.constant;
  const isCurrentRestricted = isRestrictedAggregator(currentAggregator);
  const isCurrentPerformanceHeavy = isPerformanceHeavyAggregator(currentAggregator);
  const aggregatedField = g$2(() => {
    const tableName = node.namedChildren.tableName.constant;
    const fieldName = node.namedChildren.fieldName.constant;
    const dataModelField = dataModel.find((t22) => t22.name === tableName)?.fields.find((f) => f.name === fieldName);
    return dataModelField ? {
      tableName,
      fieldName,
      field: dataModelField
    } : null;
  });
  const aggregatorOptions = aggregatorOperators.reduce(
    (acc, op) => {
      acc[op] = { tooltipKey: aggregatorMetadata[op].tooltipKey };
      return acc;
    },
    {}
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 flex-col gap-md", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "aggregation.label", children: t2("scenarios:edit_aggregation.label_title") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            type: "text",
            id: "aggregation.label",
            placeholder: t2("scenarios:edit_aggregation.label_placeholder"),
            value: node.namedChildren.label.constant,
            onChange: (e2) => {
              node.namedChildren.label.constant = e2.target.value;
              onChange?.();
            }
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: `grid ${aggregatorHasParams(currentAggregator) ? "grid-cols-[240px_120px_1fr]" : "grid-cols-[240px_1fr]"} gap-sm`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: t2("scenarios:edit_aggregation.function_title") }),
            aggregatorHasParams(currentAggregator) ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-xs", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t2("scenarios:edit_aggregation.percentile_value") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Tooltip.Default,
                {
                  className: "max-h-none overflow-visible",
                  content: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-s max-w-xs whitespace-pre-wrap", children: t2("scenarios:edit_aggregation.percentile_value_tooltip") }),
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-purple-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "tip", className: "size-4" }) })
                }
              )
            ] }) : null,
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: t2("scenarios:edit_aggregation.object_field_title") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              OperatorSelect,
              {
                options: aggregatorOptions,
                operator: node.namedChildren.aggregator.constant,
                onOperatorChange: (aggregator) => {
                  node.namedChildren.aggregator.constant = aggregator;
                  if (aggregatorHasParams(aggregator)) {
                    if (!node.namedChildren.percentile) {
                      node.namedChildren.percentile = NewConstantAstNode({ constant: 0.5 });
                    }
                  } else {
                    delete node.namedChildren.percentile;
                  }
                  nodeSharp.actions.validate();
                  onChange?.();
                },
                featureAccess: hasValidLicense ? void 0 : "restricted",
                isOperatorRestricted: isRestrictedAggregator
              }
            ) }),
            aggregatorHasParams(currentAggregator) ? /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                type: "text",
                id: "aggregation.percentile_value",
                defaultValue: String((node.namedChildren.percentile?.constant ?? 0.5) * 100),
                onBlur: (e2) => {
                  const normalizedValue = e2.target.value.replace(",", ".");
                  const value = parseFloat(normalizedValue);
                  if (!isNaN(value)) {
                    const clamped = Math.max(0, Math.min(100, value));
                    node.namedChildren.percentile = NewConstantAstNode({ constant: clamped / 100 });
                    e2.target.value = String(clamped);
                    onChange?.();
                  }
                }
              }
            ) : null,
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                EditDataModelField,
                {
                  placeholder: t2("scenarios:edit_aggregation.select_a_field"),
                  value: aggregatedField.value,
                  dataModel,
                  onChange: (aggregatedField2) => {
                    nodeSharp.update(() => {
                      node.namedChildren.tableName.constant = aggregatedField2.tableName;
                      node.namedChildren.fieldName.constant = aggregatedField2.fieldName;
                    });
                    nodeSharp.actions.validate();
                    onChange?.();
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(EditionEvaluationErrors, { direct: true, id: node.namedChildren.fieldName.id })
            ] })
          ]
        }
      ),
      isCurrentRestricted && !hasValidLicense ? /* @__PURE__ */ jsxRuntimeExports.jsx(Callout, { icon: "lock", variant: "outlined", color: "red", children: t2("scenarios:edit_aggregation.premium_callout") }) : null,
      isCurrentPerformanceHeavy && hasValidLicense ? /* @__PURE__ */ jsxRuntimeExports.jsx(Callout, { icon: "warning", variant: "outlined", color: "yellow", children: t2("scenarios:edit_aggregation.performance_warning") }) : null
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(EditFilters, { aggregatedField: aggregatedField.value, dataModel, onChange })
  ] });
}
function EditAggregation(props) {
  const { t: t2 } = useTranslation(["scenarios"]);
  const nodeSharp = AstBuilderNodeSharpFactory.useSharp();
  const node = nodeSharp.select((s) => s.node);
  const hasValidLicense = AstBuilderDataSharpFactory.select((s) => s.data.hasValidLicense);
  const isCurrentRestricted = isRestrictedAggregator(node.namedChildren.aggregator.constant);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    OperandEditModalContainer,
    {
      ...props,
      saveDisabled: isCurrentRestricted && !hasValidLicense,
      title: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-row items-center justify-center gap-md", children: [
        t2("scenarios:edit_aggregation.title"),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-row items-center justify-center gap-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Logo, { logo: "logo", className: "size-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-grey-secondary text-xs font-light", children: t2("scenarios:edit_aggregation.subtitle") })
        ] })
      ] }),
      size: "large",
      className: "max-h-[70dvh] gap-2xl overflow-auto",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Callout, { variant: "outlined", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.Description, { className: "whitespace-pre-wrap", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Trans,
          {
            t: t2,
            i18nKey: "scenarios:edit_aggregation.description",
            components: {
              DocLink: /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { href: aggregationDocHref })
            }
          }
        ) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AggregationEditContent, {})
      ]
    }
  );
}
function EditAlgorithm({ fuzzyMatchConfig: fuzzyMatchConfig2, algorithm, onChange }) {
  const { t: t2 } = useTranslation(["common", "scenarios"]);
  const onValueChange = useCallbackRef(onChange);
  if (fuzzyMatchConfig2.isEditableAlgorithm(algorithm)) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 flex-col gap-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "algorithm", className: "text-m text-grey-primary font-normal", children: t2("scenarios:edit_fuzzy_match.algorithm.label") }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Select.Root, { value: algorithm, onValueChange, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Select.Trigger, { id: "algorithm", className: operatorContainerClassnames(), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-s text-grey-primary w-full text-center font-medium", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Select.Value, { placeholder: "..." }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip.Default, { content: t2(`scenarios:edit_fuzzy_match.algorithm.description.${algorithm}`), children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Icon,
            {
              icon: "tip",
              className: "hover:text-purple-primary text-purple-disabled size-5 shrink-0 transition-colors"
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Select.Content, { className: "max-h-60", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Select.Viewport, { children: Array.from(fuzzyMatchConfig2.editablesAlgorithms).map((fuzzyMatchAlgorithm) => {
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Select.Item,
            {
              className: "flex min-w-[110px] flex-col gap-xs",
              value: fuzzyMatchAlgorithm,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Select.ItemText, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  FuzzyMatchAlgorithmLabel,
                  {
                    fuzzyMatchConfig: fuzzyMatchConfig2,
                    fuzzyMatchAlgorithm
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-s text-grey-secondary", children: t2(`scenarios:edit_fuzzy_match.algorithm.description.${fuzzyMatchAlgorithm}`) })
              ]
            },
            fuzzyMatchAlgorithm
          );
        }) }) })
      ] })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 flex-col gap-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-m text-grey-primary font-normal", children: t2("scenarios:edit_fuzzy_match.threshold.label") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-grey-background-light border-grey-border flex h-10 items-center justify-center rounded-sm border p-sm text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FuzzyMatchAlgorithmLabel, { fuzzyMatchConfig: fuzzyMatchConfig2, fuzzyMatchAlgorithm: algorithm }) })
  ] });
}
function FuzzyMatchAlgorithmLabel({
  fuzzyMatchConfig: fuzzyMatchConfig2,
  fuzzyMatchAlgorithm
}) {
  const { t: t2 } = useTranslation(["common", "scenarios"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-s text-grey-primary font-semibold", children: fuzzyMatchConfig2.getAlgorithmName(t2, fuzzyMatchAlgorithm) });
}
function EditLevel({ config, level, setLevel }) {
  const { t: t2 } = useTranslation(["common", "scenarios"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 flex-col gap-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "level", className: "text-m text-grey-primary font-normal", children: t2("scenarios:edit_fuzzy_match.level.label") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SelectV2,
      {
        value: level,
        onChange: setLevel,
        placeholder: "...",
        className: operatorContainerClassnames(),
        options: config.getLevels().map((level2) => ({
          label: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-s text-grey-primary font-semibold uppercase", children: t2(`scenarios:edit_fuzzy_match.level.${level2}`, {
            defaultValue: level2
          }) }),
          value: level2
        }))
      }
    )
  ] });
}
function EditThreshold({ threshold, setThreshold }) {
  const { t: t2 } = useTranslation(["common", "scenarios"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 flex-col gap-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "threshold", className: "text-m text-grey-primary font-normal", children: t2("scenarios:edit_fuzzy_match.threshold.label") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Input,
      {
        id: "threshold",
        type: "number",
        value: threshold,
        onChange: (e2) => {
          const newThreshold = parseInt(e2.target.value, 10);
          if (isNaN(newThreshold)) {
            setThreshold(0);
            return;
          }
          if (newThreshold < 0) {
            setThreshold(0);
            return;
          }
          if (newThreshold > 100) {
            setThreshold(100);
            return;
          }
          setThreshold(newThreshold);
        },
        min: 0,
        max: 100
      }
    )
  ] });
}
function Examples$1({
  config,
  algorithm,
  threshold
}) {
  const { t: t2 } = useTranslation(["common", "scenarios"]);
  if (!config.isEditableAlgorithm(algorithm)) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "border-grey-border table-auto border-collapse border", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("caption", { className: "sr-only", children: t2("scenarios:edit_fuzzy_match.examples.caption") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-grey-primary bg-grey-background-light border-grey-border border px-xs text-start text-xs font-normal", children: t2("scenarios:edit_fuzzy_match.examples.left") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-grey-primary bg-grey-background-light border-grey-border border px-xs text-start text-xs font-normal", children: t2("scenarios:edit_fuzzy_match.examples.right") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-grey-primary bg-grey-background-light border-grey-border border px-xs text-start text-xs font-normal", children: t2("scenarios:edit_fuzzy_match.examples.result") })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: config.examples.map(({ left, right, resultsScores }) => {
      if (!(algorithm in resultsScores)) return null;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-grey-primary border-grey-border border px-xs text-xs font-normal", children: left }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-grey-primary border-grey-border border px-xs text-xs font-normal", children: right }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-grey-primary border-grey-border border px-xs text-xs font-normal", children: t2(`common:${resultsScores[algorithm] > threshold}`) })
      ] }, `${left}-${right}`);
    }) })
  ] });
}
function InnerEditFuzzyMatchModal(props) {
  const { t: t2 } = useTranslation(["scenarios"]);
  const nodeSharp = AstBuilderNodeSharpFactory.useSharp();
  const evaluation = nodeSharp.select((s) => s.validation);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Callout, { variant: "outlined", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.Description, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Trans,
      {
        t: t2,
        i18nKey: "scenarios:edit_fuzzy_match.description",
        components: {
          DocLink: /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { href: fuzzyMatchingDocHref })
        }
      }
    ) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-md", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-row gap-md", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          EditAlgorithm,
          {
            fuzzyMatchConfig: props.fuzzMatchConfig,
            algorithm: props.algorithm,
            onChange: (value) => {
              props.onAlorithmChange(value);
            }
          }
        ),
        props.threshold.mode === "level" ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          EditLevel,
          {
            config: props.fuzzMatchConfig,
            level: props.threshold.level,
            setLevel: (level) => {
              props.onThresholdChange({ mode: "level", level });
            }
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
          EditThreshold,
          {
            threshold: props.threshold.value,
            setThreshold: (newValue) => {
              props.onThresholdChange({ mode: "threshold", value: newValue });
            }
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Examples$1, { config: props.fuzzMatchConfig, algorithm: props.algorithm, threshold: props.threshold.value })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { id: "level", className: "text-m text-grey-primary font-normal", children: t2("scenarios:edit_fuzzy_match.operands.label") }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-sm", children: [
        props.left ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            EditionAstBuilderOperand,
            {
              node: props.left,
              coerceDataType: ["String"],
              optionsDataType: ["String"],
              onChange: (newNode) => {
                props.onLeftChange?.(newNode);
              },
              validationStatus: getValidationStatus(evaluation, props.left.id)
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-grey-border bg-grey-background-light flex h-10 w-fit min-w-[40px] items-center justify-center rounded-sm border p-sm text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-s text-grey-primary font-medium", children: props.operatorDisplay }) })
        ] }) : null,
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          EditionAstBuilderOperand,
          {
            node: props.right,
            coerceDataType: ["String", "String[]"],
            optionsDataType: props.rightOperandFilter,
            onChange: (newNode) => {
              props.onRightChange(newNode);
            },
            validationStatus: getValidationStatus(evaluation, props.right.id)
          }
        )
      ] })
    ] })
  ] });
}
const fuzzyMatchConfig$1 = AggregationFuzzyMatchConfig;
function EditFuzzyMatchAggregation(props) {
  const defaultAlgorithm = fuzzyMatchConfig$1.defaultAlgorithm;
  const defaultThreshold = fuzzyMatchConfig$1.getDefaultThreshold();
  const { t: t2 } = useTranslation(["scenarios"]);
  const nodeSharp = AstBuilderNodeSharpFactory.useSharp();
  const fuzzyMatchNode = nodeSharp.select((s) => s.node);
  const algorithmNode = fuzzyMatchNode.namedChildren.algorithm;
  const thresholdNode = fuzzyMatchNode.namedChildren.threshold;
  const thresholdField = g$2(() => {
    const thresholdValue = thresholdNode.constant ?? defaultThreshold;
    const level = fuzzyMatchConfig$1.adaptLevel(thresholdValue);
    return level !== void 0 ? { mode: "level", value: thresholdValue, level } : { mode: "threshold", value: thresholdValue };
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(OperandEditModalContainer, { ...props, title: t2("scenarios:edit_fuzzy_match.title.aggregation"), size: "medium", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    InnerEditFuzzyMatchModal,
    {
      fuzzMatchConfig: fuzzyMatchConfig$1,
      right: fuzzyMatchNode.namedChildren.value,
      algorithm: algorithmNode.constant ?? defaultAlgorithm,
      threshold: thresholdField.value,
      rightOperandFilter: (option) => ["String", "String[]"].includes(option.dataType) && option.operandType === "Field",
      onRightChange: (newNode) => {
        nodeSharp.update(() => {
          if (isKnownOperandAstNode(newNode)) {
            fuzzyMatchNode.namedChildren.value = newNode;
          }
        });
        nodeSharp.actions.validate();
      },
      onAlorithmChange: (algorithm) => {
        algorithmNode.constant = algorithm;
      },
      onThresholdChange: (params) => {
        if (params.mode === "threshold") {
          thresholdNode.constant = params.value;
        } else {
          thresholdNode.constant = fuzzyMatchConfig$1.adaptThreshold(params.level);
        }
      }
    }
  ) });
}
const funcNameTKeys = {
  FuzzyMatch: "scenarios:edit_fuzzy_match.fuzzy_match",
  FuzzyMatchAnyOf: "scenarios:edit_fuzzy_match.fuzzy_match_any_of"
};
const fuzzyMatchConfig = ComparatorFuzzyMatchConfig;
function EditFuzzyMatchComparator(props) {
  const { t: t2 } = useTranslation(["scenarios"]);
  const nodeSharp = AstBuilderNodeSharpFactory.useSharp();
  const dataSharp = AstBuilderDataSharpFactory.useSharp();
  const dataModel = dataSharp.select((s) => s.data.dataModel);
  const triggerObjectTable = dataSharp.computed.triggerObjectTable;
  const node = nodeSharp.select((s) => s.node);
  const fuzzyMatchNode = node.children[0];
  const algorithmNode = fuzzyMatchNode.namedChildren.algorithm;
  const thresholdNode = node.children[1];
  const thresholdField = g$2(() => {
    const thresholdValue = thresholdNode.constant ?? fuzzyMatchConfig.getDefaultThreshold();
    const level = fuzzyMatchConfig.adaptLevel(thresholdValue);
    return level !== void 0 ? { mode: "level", value: thresholdValue, level } : { mode: "threshold", value: thresholdValue };
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(OperandEditModalContainer, { ...props, title: t2("scenarios:edit_fuzzy_match.title"), size: "medium", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    InnerEditFuzzyMatchModal,
    {
      fuzzMatchConfig: fuzzyMatchConfig,
      operatorDisplay: t2(funcNameTKeys[fuzzyMatchNode.name]),
      left: fuzzyMatchNode.children[0],
      right: fuzzyMatchNode.children[1],
      algorithm: algorithmNode.constant ?? fuzzyMatchConfig.defaultAlgorithm,
      threshold: thresholdField.value,
      rightOperandFilter: (option) => option.operandType === "CustomList" || ["String", "String[]"].includes(option.dataType),
      onLeftChange: (newNode) => {
        fuzzyMatchNode.children[0] = newNode;
        nodeSharp.actions.validate();
      },
      onRightChange: (newNode) => {
        nodeSharp.update(() => {
          fuzzyMatchNode.name = getAstNodeDataType(newNode, {
            dataModel,
            triggerObjectTable: triggerObjectTable.value
          }) === "String" ? "FuzzyMatch" : "FuzzyMatchAnyOf";
          fuzzyMatchNode.children[1] = newNode;
        });
        nodeSharp.actions.validate();
      },
      onAlorithmChange: (algorithm) => {
        algorithmNode.constant = algorithm;
      },
      onThresholdChange: (params) => {
        if (params.mode === "threshold") {
          thresholdNode.constant = params.value;
        } else {
          thresholdNode.constant = fuzzyMatchConfig.adaptThreshold(params.level);
        }
      }
    }
  ) });
}
function EditIpHasFlag(props) {
  const { t: t2 } = useTranslation(["scenarios", "common"]);
  const hasValidLicense = AstBuilderDataSharpFactory.select((s) => s.data.hasValidLicense);
  const nodeSharp = AstBuilderNodeSharpFactory.useSharp();
  const node = nodeSharp.select((s) => s.node);
  const evaluation = nodeSharp.select((s) => s.validation);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    OperandEditModalContainer,
    {
      ...props,
      saveDisabled: !hasValidLicense,
      title: t2("scenarios:edit_ip_has_flag.title"),
      size: "medium",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Callout, { variant: "outlined", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.Description, { className: "whitespace-pre-wrap", children: t2("scenarios:edit_ip_has_flag.description") }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "first-letter:uppercase", children: t2("scenarios:edit_ip_has_flag.extract") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              OperatorSelect,
              {
                options: validIpFlags,
                operator: node.namedChildren.flag.constant,
                onOperatorChange: (part) => {
                  node.namedChildren.flag.constant = part;
                  nodeSharp.actions.validate();
                }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t2("scenarios:edit_ip_has_flag.from") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              EditionAstBuilderOperand,
              {
                node: node.namedChildren.ip,
                onChange: (newNode) => {
                  if (isIpFieldAstNode(newNode)) {
                    node.namedChildren.ip = newNode;
                    nodeSharp.actions.validate();
                  }
                },
                optionsDataType: ["IpAddress"],
                coerceDataType: ["IpAddress"],
                validationStatus: getValidationStatus(evaluation, node.namedChildren.ip.id)
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(EditionEvaluationErrors, { id: node.id, filterOut: ["FUNCTION_ERROR"] })
        ] }),
        !hasValidLicense ? /* @__PURE__ */ jsxRuntimeExports.jsx(Callout, { icon: "lock", variant: "outlined", color: "red", children: t2("scenarios:edit_ip_has_flag.premium_callout") }) : null
      ]
    }
  );
}
function Examples({ divider }) {
  const { t: t2 } = useTranslation(["common", "scenarios"]);
  const language = useFormatLanguage();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "border-grey-border table-auto border-collapse border", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("caption", { className: "sr-only", children: t2("scenarios:edit_is_multiple_of.examples.caption") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-grey-primary bg-grey-background-light border-grey-border border px-xs text-start text-xs font-normal capitalize", children: t2("scenarios:edit_is_multiple_of.examples.value") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-grey-primary bg-grey-background-light border-grey-border border px-xs text-start text-xs font-normal capitalize", children: t2("scenarios:edit_is_multiple_of.examples.result") })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: [
      {
        left: 5
      },
      {
        left: 20
      },
      {
        left: 700
      },
      {
        left: 2e3
      },
      {
        left: 38e4
      },
      {
        left: 380002
      },
      {
        left: 380002.1
      }
    ].map(({ left }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-grey-primary border-grey-border border px-xs text-xs font-normal", children: formatNumber(left, {
        language,
        style: void 0
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-grey-primary border-grey-border border px-xs text-xs font-normal", children: t2(`common:${left % divider === 0}`) })
    ] }, `${left}`)) })
  ] });
}
const dividerOptions = [
  { value: 1 },
  { value: 10 },
  { value: 100 },
  { value: 1e3 },
  { value: 1e4 },
  { value: 1e5 },
  { value: 1e6 },
  { value: 1e7 },
  { value: 1e8 },
  { value: 1e9 }
];
function EditIsMultipleOf(props) {
  const { t: t2 } = useTranslation(["scenarios"]);
  const language = useFormatLanguage();
  const nodeSharp = AstBuilderNodeSharpFactory.useSharp();
  const node = nodeSharp.select((s) => s.node);
  const evaluation = nodeSharp.select((s) => s.validation);
  const divider = node.namedChildren.divider.constant ?? 1;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(OperandEditModalContainer, { ...props, title: t2("scenarios:edit_is_multiple_of.title"), size: "large", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-md", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          EditionAstBuilderOperand,
          {
            node: node.namedChildren.value,
            optionsDataType: ["Int", "Float"],
            coerceDataType: ["Int"],
            onChange: (newValue) => {
              if (isKnownOperandAstNode(newValue)) {
                node.namedChildren.value = newValue;
                nodeSharp.actions.validate();
              }
            },
            validationStatus: getValidationStatus(evaluation, node.namedChildren.value.id)
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-grey-border bg-grey-background-light flex h-10 w-fit min-w-[40px] items-center justify-center rounded-sm border p-sm text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-s text-grey-primary font-medium", children: t2("scenarios:edit_is_multiple_of.label") }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(MenuCommand.Menu, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Trigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.SelectButton, { children: formatNumber(divider, {
            language,
            style: void 0
          }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Content, { align: "start", sideOffset: 4, children: /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.List, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Group, { children: dividerOptions.map((dividerOption) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            MenuCommand.Item,
            {
              onSelect: () => {
                node.namedChildren.divider.constant = dividerOption.value;
              },
              children: formatNumber(dividerOption.value, {
                language,
                style: void 0
              })
            },
            dividerOption.value
          )) }) }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(EditionEvaluationErrors, { id: node.id, filterOut: ["FUNCTION_ERROR"] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-md", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Examples, { divider }) })
  ] }) });
}
const downFkField = (o) => o.navigationOptionRef?.targetFieldName ?? o.baseNavRef?.targetFieldName ?? "";
const getOptionKey = (o) => [o.direction, o.tableName, o.fieldPath[0]?.linkName ?? "", downFkField(o)].join("::");
const checkMatchesOption = (check, option) => {
  if (check.tableName !== option.tableName || check.direction !== option.direction) {
    return false;
  }
  const optionLinkName = option.fieldPath[0]?.linkName ?? "";
  const checkLinkName = check.fieldPath[0]?.linkName ?? "";
  if (optionLinkName && checkLinkName) {
    return optionLinkName === checkLinkName;
  }
  const optionFkField = downFkField(option);
  return optionFkField !== "" && optionFkField === (check.navigationOptionRef?.targetFieldName ?? "");
};
const AdvancedSetupsSection = ({
  dataModel,
  selectedTable,
  screeningConfigs,
  linkedObjectChecks,
  onLinkedObjectChecksChange,
  onPendingNavigationOptionAdd
}) => {
  const { t: t2 } = useTranslation(["scenarios"]);
  const monitoredTableNames = reactExports.useMemo(() => {
    return new Set(screeningConfigs.flatMap((config) => config.objectTypes));
  }, [screeningConfigs]);
  const linkedTableOptions = reactExports.useMemo(() => {
    const options2 = [];
    for (const link of selectedTable.linksToSingle) {
      if (monitoredTableNames.has(link.parentTableName)) {
        options2.push({
          tableName: link.parentTableName,
          fieldPath: [{ linkName: link.name, tableName: link.parentTableName }],
          direction: "up",
          displayLabel: link.parentTableName,
          linkDescription: t2("scenarios:monitoring_list_check.linked_up", {
            tableName: link.parentTableName,
            selectedTable: selectedTable.name
          }),
          linkToSingleName: link.name,
          hasNavigationOptions: false
        });
      }
    }
    for (const table of dataModel) {
      if (table.name === selectedTable.name) {
        continue;
      }
      for (const link of table.linksToSingle) {
        if (link.parentTableName === selectedTable.name && monitoredTableNames.has(table.name)) {
          const navOption = selectedTable.navigationOptions?.find(
            (nav) => nav.sourceTableName === selectedTable.name && nav.targetTableName === table.name && nav.filterFieldName === link.childFieldName
          );
          const hasNavOptions = !!navOption;
          const timestampFields = table.fields.filter((f) => f.dataType === "Timestamp").map((f) => ({ name: f.name, id: f.id }));
          const navigationOptionRef = navOption ? {
            targetTableName: navOption.targetTableName,
            targetFieldName: navOption.filterFieldName,
            sourceTableName: navOption.sourceTableName,
            sourceFieldName: navOption.sourceFieldName,
            orderingFieldName: navOption.orderingFieldName
          } : void 0;
          const baseNavRef = {
            targetTableName: table.name,
            targetFieldName: link.childFieldName,
            sourceTableName: selectedTable.name,
            sourceFieldName: link.parentFieldName
          };
          options2.push({
            tableName: table.name,
            fieldPath: [{ linkName: link.name, tableName: table.name }],
            direction: "down",
            displayLabel: table.name,
            linkDescription: t2("scenarios:monitoring_list_check.linked_down", {
              tableName: table.name,
              selectedTable: selectedTable.name
            }),
            navigationOptionRef,
            baseNavRef: hasNavOptions ? void 0 : baseNavRef,
            timestampFields,
            hasNavigationOptions: hasNavOptions,
            link: hasNavOptions ? void 0 : link
          });
        }
      }
    }
    return options2;
  }, [dataModel, selectedTable, monitoredTableNames, t2]);
  const getCheckForOption = (option) => {
    return linkedObjectChecks.find((c) => checkMatchesOption(c, option));
  };
  const handleToggleCheck = (option, enabled) => {
    const existingCheck = getCheckForOption(option);
    if (enabled) {
      if (existingCheck) {
        onLinkedObjectChecksChange(
          linkedObjectChecks.map((c) => checkMatchesOption(c, option) ? { ...c, enabled: true } : c)
        );
      } else {
        const newCheck = {
          tableName: option.tableName,
          fieldPath: option.fieldPath,
          direction: option.direction,
          enabled: true,
          // "up" direction is always validated, "down" with pre-configured navOptions is also validated
          validated: option.direction === "up" || option.hasNavigationOptions,
          // Store the navigation option ref for "down" direction
          navigationOptionRef: option.direction === "down" ? option.navigationOptionRef : void 0
        };
        onLinkedObjectChecksChange([...linkedObjectChecks, newCheck]);
      }
    } else {
      onLinkedObjectChecksChange(
        linkedObjectChecks.map((c) => checkMatchesOption(c, option) ? { ...c, enabled: false } : c)
      );
    }
  };
  const handleNavigationFieldChange = (orderingFieldName, option) => {
    const navigationOptionRef = option.baseNavRef ? { ...option.baseNavRef, orderingFieldName } : option.navigationOptionRef;
    onLinkedObjectChecksChange(
      linkedObjectChecks.map((check) => {
        if (!checkMatchesOption(check, option)) {
          return check;
        }
        return {
          ...check,
          validated: true,
          navigationOptionRef,
          orderingFieldName
        };
      })
    );
  };
  if (linkedTableOptions.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-s text-grey-secondary", children: t2("scenarios:monitoring_list_check.no_linked_objects") });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-lg", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-s font-medium text-grey-primary", children: t2("scenarios:monitoring_list_check.advanced_question", { tableName: selectedTable.name }) }),
    linkedTableOptions.map((option) => {
      const check = getCheckForOption(option);
      const isEnabled = check?.enabled ?? false;
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        LinkedObjectCheckItem,
        {
          option,
          check,
          isEnabled,
          onToggle: (enabled) => handleToggleCheck(option, enabled),
          onNavigationFieldChange: (fieldName) => handleNavigationFieldChange(fieldName, option),
          onPendingNavigationOptionAdd
        },
        getOptionKey(option)
      );
    })
  ] });
};
const LinkedObjectCheckItem = ({
  option,
  check,
  isEnabled,
  onToggle,
  onNavigationFieldChange,
  onPendingNavigationOptionAdd
}) => {
  const { t: t2 } = useTranslation(["scenarios"]);
  const [selectedFieldName, setSelectedFieldName] = reactExports.useState(check?.orderingFieldName ?? "");
  const [menuOpen, setMenuOpen] = reactExports.useState(false);
  const needsNavigationConfig = option.direction === "down" && !option.hasNavigationOptions;
  const handleFieldChange = (fieldId, fieldName) => {
    setSelectedFieldName(fieldName);
    setMenuOpen(false);
    if (option.link) {
      onPendingNavigationOptionAdd({
        tableName: option.tableName,
        tableId: option.link.parentTableId,
        sourceFieldId: option.link.parentFieldId,
        targetTableId: option.link.childTableId,
        filterFieldId: option.link.childFieldId,
        orderingFieldId: fieldId
      });
    }
    onNavigationFieldChange(fieldName);
  };
  const displayValue = selectedFieldName || t2("scenarios:monitoring_list_check.select_field");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-md rounded-lg border border-grey-border p-md", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex cursor-pointer items-center gap-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Checkbox, { checked: isEnabled, onCheckedChange: onToggle }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-s font-medium text-grey-primary", children: option.linkDescription }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: option.direction === "up" ? "arrow-up" : "arrow-down", className: "size-4 text-grey-secondary" })
    ] }),
    isEnabled && needsNavigationConfig && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ms-lg flex items-center gap-sm rounded-md bg-grey-background-light p-md", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-grey-primary", children: t2("scenarios:monitoring_list_check.order_by_label") }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(MenuCommand.Menu, { open: menuOpen, onOpenChange: setMenuOpen, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Trigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.SelectButton, { className: "w-48", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: displayValue }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Content, { sameWidth: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.List, { children: option.timestampFields?.map((field) => /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Item, { onSelect: () => handleFieldChange(field.id, field.name), children: field.name }, field.id)) }) })
      ] })
    ] })
  ] });
};
function FilterSection({ selectedTopics, onTopicsChange }) {
  const { t: t2 } = useTranslation(["scenarios"]);
  const [filterEnabled, setFilterEnabled] = reactExports.useState(selectedTopics.length > 0);
  const [menuOpen, setMenuOpen] = reactExports.useState(false);
  const handleFilterToggle = (checked) => {
    setFilterEnabled(checked);
    if (!checked) {
      onTopicsChange([]);
    }
  };
  const handleTopicToggle = (topic, checked) => {
    if (checked) {
      onTopicsChange([...selectedTopics, topic]);
    } else {
      onTopicsChange(selectedTopics.filter((t22) => t22 !== topic));
    }
  };
  const selectedTopicsDisplay = reactExports.useMemo(() => {
    if (selectedTopics.length === 0) {
      return t2("scenarios:monitoring_list_check.select_hit_types");
    }
    return selectedTopics.map((topic) => t2(`scenarios:monitoring_list_check.hit_type.${SCREENING_CATEGORY_I18N_KEY_MAP[topic]}`)).join(", ");
  }, [selectedTopics, t2]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-md", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-s font-medium text-grey-primary", children: t2("scenarios:monitoring_list_check.filter_question") }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex shrink-0 cursor-pointer items-center gap-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Checkbox, { checked: filterEnabled, onCheckedChange: handleFilterToggle }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-s text-grey-primary", children: t2("scenarios:monitoring_list_check.hit_types_label") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "tip", className: "size-5 text-purple-primary" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(MenuCommand.Menu, { open: menuOpen, onOpenChange: setMenuOpen, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Trigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.SelectButton, { className: "flex-1", disabled: !filterEnabled, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: selectedTopicsDisplay }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Content, { className: "min-w-[250px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-xs p-sm", children: SCREENING_CATEGORIES.map((topic) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "label",
          {
            className: "flex cursor-pointer items-center gap-sm rounded p-sm hover:bg-grey-02",
            onClick: (e2) => e2.stopPropagation(),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Checkbox,
                {
                  checked: selectedTopics.includes(topic),
                  onCheckedChange: (checked) => handleTopicToggle(topic, checked === true)
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-s text-grey-primary", children: t2(`scenarios:monitoring_list_check.hit_type.${SCREENING_CATEGORY_I18N_KEY_MAP[topic]}`) })
            ]
          },
          topic
        )) }) })
      ] })
    ] })
  ] });
}
const ObjectSelector = ({
  dataModel,
  triggerObjectTable,
  screeningConfigs,
  currentTableName,
  currentPath,
  onChange
}) => {
  const { t: t2 } = useTranslation(["scenarios"]);
  const objectOptions = reactExports.useMemo(() => {
    const options2 = [];
    const visited = /* @__PURE__ */ new Set();
    const getActiveMonitorings = (tableName) => screeningConfigs.filter((config) => config.objectTypes.includes(tableName));
    const queue = [
      { table: triggerObjectTable, path: [], pathSegments: [triggerObjectTable.name] }
    ];
    while (queue.length > 0) {
      const { table, path, pathSegments } = queue.shift();
      options2.push({
        tableName: table.name,
        path,
        displayLabel: table.name,
        pathSegments,
        activeMonitorings: getActiveMonitorings(table.name)
      });
      for (const link of table.linksToSingle) {
        const visitKey = `${table.name}→${link.name}`;
        if (visited.has(visitKey)) continue;
        visited.add(visitKey);
        const linkedTable = dataModel.find((tbl) => tbl.name === link.parentTableName);
        if (linkedTable) {
          queue.push({
            table: linkedTable,
            path: [...path, { linkName: link.name, tableName: linkedTable.name }],
            pathSegments: [...pathSegments, linkedTable.name]
          });
        }
      }
    }
    return options2.filter((option) => option.activeMonitorings.length > 0);
  }, [dataModel, triggerObjectTable, screeningConfigs]);
  const currentValue = reactExports.useMemo(() => {
    const index = objectOptions.findIndex(
      (opt) => opt.tableName === currentTableName && opt.path.length === currentPath.length && opt.path.every((seg, i2) => seg.linkName === currentPath[i2]?.linkName)
    );
    return index >= 0 ? String(index) : "";
  }, [objectOptions, currentTableName, currentPath]);
  const handleChange = (value) => {
    const option = objectOptions[Number(value)];
    if (!option) return;
    onChange(option.tableName, option.path);
  };
  if (objectOptions.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-s text-grey-primary", children: t2("scenarios:monitoring_list_check.object_label") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-s text-grey-secondary", children: t2("scenarios:monitoring_list_check.no_objects_under_monitoring") })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-s text-grey-primary", children: t2("scenarios:monitoring_list_check.object_label") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Radio.Root, { value: currentValue, onValueChange: handleChange, className: "flex flex-col gap-md", children: objectOptions.map((option, index) => {
      const value = String(index);
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Radio.Item, { value, className: "gap-md", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-s font-medium text-grey-primary", children: option.displayLabel }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ActiveMonitoringsTooltip, { monitorings: option.activeMonitorings })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(PathBreadcrumb, { segments: option.pathSegments })
      ] }) }, value);
    }) })
  ] });
};
const PathBreadcrumb = ({ segments }) => {
  if (segments.length === 0) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-xs", children: segments.map((segment, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-xs", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-grey-secondary", children: segment }),
    index < segments.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "arrow-right", className: "size-4 text-grey-secondary" })
  ] }, index)) });
};
const ActiveMonitoringsTooltip = ({ monitorings }) => {
  const { t: t2 } = useTranslation(["scenarios"]);
  if (monitorings.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Tooltip.Default,
      {
        content: t2("scenarios:monitoring_list_check.no_active_monitoring"),
        className: "border border-grey-border",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "tip", className: "size-5 text-grey-disabled" })
      }
    );
  }
  const content = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-xs", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium", children: t2("scenarios:monitoring_list_check.active_monitorings") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "list-disc ps-md", children: monitorings.map((config) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "text-xs", children: config.name }, config.id)) })
  ] });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip.Default, { content, className: "border border-grey-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "tip", className: "size-5 text-purple-primary" }) });
};
const EditMonitoringListCheck = (props) => {
  const { t: t2 } = useTranslation(["common", "scenarios"]);
  const scenarioId = AstBuilderDataSharpFactory.select((s) => s.scenarioId ?? "");
  const dataModel = AstBuilderDataSharpFactory.select((s) => s.data.dataModel);
  const hasContinuousScreening = AstBuilderDataSharpFactory.select((s) => s.data.hasContinuousScreening);
  const screeningConfigs = AstBuilderDataSharpFactory.select((s) => s.data.screeningConfigs) ?? [];
  const triggerObjectTable = AstBuilderDataSharpFactory.useSharp().computed.triggerObjectTable.value;
  const nodeSharp = AstBuilderNodeSharpFactory.useSharp();
  const node = nodeSharp.select((s) => s.node);
  const [currentStep, setCurrentStep] = reactExports.useState(1);
  const config = node.namedChildren.config.constant;
  const [targetTableName, setTargetTableName] = reactExports.useState(config.targetTableName);
  const [pathToTarget, setPathToTarget] = reactExports.useState(
    () => fromPathToTarget(config.pathToTarget, dataModel, triggerObjectTable.name)
  );
  const [selectedTopics, setSelectedTopics] = reactExports.useState(
    () => topicsToCategories(config.topicFilters)
  );
  const [linkedObjectChecks, setLinkedObjectChecks] = reactExports.useState(
    () => fromLinkedTableChecks(config.linkedTableChecks)
  );
  const [pendingNavigationOptions, setPendingNavigationOptions] = reactExports.useState([]);
  const selectedTable = dataModel.find((t22) => t22.name === targetTableName);
  const createNavigationOptionMutation = useCreateNavigationOptionForAstMutation();
  const hasLinkedObjectsUnderMonitoring = reactExports.useMemo(() => {
    if (!selectedTable) return false;
    const monitoredTables = new Set(screeningConfigs.flatMap((config2) => config2.objectTypes));
    const hasParentUnderMonitoring = selectedTable.linksToSingle.some(
      (link) => monitoredTables.has(link.parentTableName)
    );
    const hasChildUnderMonitoring = dataModel.some((table) => {
      if (table.name === selectedTable.name) return false;
      return table.linksToSingle.some(
        (link) => link.parentTableName === selectedTable.name && monitoredTables.has(table.name)
      );
    });
    return hasParentUnderMonitoring || hasChildUnderMonitoring;
  }, [selectedTable, dataModel, screeningConfigs]);
  const totalSteps = hasLinkedObjectsUnderMonitoring ? 3 : 2;
  const steps = [
    { key: "object", label: t2("scenarios:monitoring_list_check.step_object") },
    { key: "options", label: t2("scenarios:monitoring_list_check.step_options") },
    ...hasLinkedObjectsUnderMonitoring ? [{ key: "advanced", label: t2("scenarios:monitoring_list_check.step_advanced") }] : []
  ];
  const handleObjectChange = (tableName, path) => {
    setTargetTableName(tableName);
    setPathToTarget(path);
    setLinkedObjectChecks([]);
  };
  const handlePendingNavigationOptionAdd = (pending) => {
    setPendingNavigationOptions((prev) => {
      const existing = prev.findIndex((p) => p.tableName === pending.tableName);
      if (existing >= 0) {
        const updated = [...prev];
        updated[existing] = pending;
        return updated;
      }
      return [...prev, pending];
    });
  };
  const handleOpenChange = useCallbackRef((open) => {
    if (!open) {
      props.onCancel();
    }
  });
  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };
  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };
  const handleSave = async () => {
    try {
      if (pendingNavigationOptions.length > 0) {
        await Promise.all(
          pendingNavigationOptions.map(
            (pending) => createNavigationOptionMutation.mutateAsync({
              scenarioId,
              tableId: pending.tableId,
              sourceFieldId: pending.sourceFieldId,
              targetTableId: pending.targetTableId,
              filterFieldId: pending.filterFieldId,
              orderingFieldId: pending.orderingFieldId
            })
          )
        );
      }
      const newConfig = toMonitoringListCheckConfig(targetTableName, pathToTarget, selectedTopics, linkedObjectChecks);
      const updatedNode = NewTagCheckAstNode(monitoringListCheckAstNodeName, newConfig);
      updatedNode.id = node.id;
      props.onSave(updatedNode);
    } catch {
      zt.error(t2("common:errors.unknown"));
    }
  };
  const canProceedFromStep1 = !!targetTableName;
  const isLastStep = currentStep === totalSteps;
  const hasUnvalidatedDownChecks = linkedObjectChecks.some(
    (check) => check.enabled && check.direction === "down" && !check.validated
  );
  const canSaveFromStep3 = !hasUnvalidatedDownChecks;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.Root, { open: true, onOpenChange: handleOpenChange, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal.Content, { size: "medium", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.Title, { children: t2("scenarios:monitoring_list_check.title") }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex max-h-[70dvh] flex-col gap-lg overflow-auto p-md", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stepper, { steps, currentStep: currentStep - 1 }),
      currentStep === 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(Callout, { variant: "outlined", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.Description, { className: "whitespace-pre-wrap", children: t2("scenarios:monitoring_list_check.description") }) }),
      !hasContinuousScreening ? /* @__PURE__ */ jsxRuntimeExports.jsx(Callout, { icon: "lock", variant: "outlined", color: "red", children: t2("scenarios:monitoring_list_check.premium_callout") }) : null,
      currentStep === 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(
        ObjectSelector,
        {
          dataModel,
          triggerObjectTable,
          screeningConfigs,
          currentTableName: targetTableName,
          currentPath: pathToTarget,
          onChange: handleObjectChange
        }
      ),
      currentStep === 2 && /* @__PURE__ */ jsxRuntimeExports.jsx(FilterSection, { selectedTopics, onTopicsChange: setSelectedTopics }),
      currentStep === 3 && selectedTable && /* @__PURE__ */ jsxRuntimeExports.jsx(
        AdvancedSetupsSection,
        {
          dataModel,
          selectedTable,
          screeningConfigs,
          linkedObjectChecks,
          onLinkedObjectChecksChange: setLinkedObjectChecks,
          onPendingNavigationOptionAdd: handlePendingNavigationOptionAdd
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal.Footer, { children: [
      currentStep > 1 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        Modal.FooterButton,
        {
          variant: "secondary",
          label: t2("scenarios:monitoring_list_check.back"),
          onClick: handleBack
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.FooterButton, { isCloseButton: true, label: t2("common:cancel") }),
      isLastStep ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        Modal.FooterButton,
        {
          label: t2("scenarios:monitoring_list_check.validate"),
          onClick: handleSave,
          disabled: !hasContinuousScreening || createNavigationOptionMutation.isPending || currentStep === 3 && !canSaveFromStep3
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
        Modal.FooterButton,
        {
          label: t2("scenarios:monitoring_list_check.next"),
          onClick: handleNext,
          disabled: !hasContinuousScreening || !canProceedFromStep1
        }
      )
    ] })
  ] }) });
};
function EditRecordRiskLevelCheck(props) {
  const { t: t2 } = useTranslation(["scenarios", "common", "user-scoring"]);
  const hasValidLicense = AstBuilderDataSharpFactory.select((s) => s.data.hasValidLicense);
  const nodeSharp = AstBuilderNodeSharpFactory.useSharp();
  const node = nodeSharp.select((s) => s.node);
  const scoringSettings = AstBuilderDataSharpFactory.select((s) => s.data.scoringSettings);
  const levelColorsEntries = scoringSettings && isMaxRiskLevelInRange(scoringSettings.maxRiskLevel) ? scoringLevelEntries(SCORING_LEVELS_COLORS[scoringSettings.maxRiskLevel]) : null;
  const levelLabelsMap = scoringSettings && isMaxRiskLevelInRange(scoringSettings.maxRiskLevel) ? SCORING_LEVELS_LABEL_KEYS[scoringSettings.maxRiskLevel] : null;
  const levelsOptions = levelColorsEntries && levelLabelsMap ? levelColorsEntries.map(([level, color]) => {
    const label = t2(levelLabelsMap[level]);
    return {
      value: level,
      label: () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-sm items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-4 rounded-full shrink-0", style: { backgroundColor: color } }),
        label
      ] })
    };
  }) : [];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    OperandEditModalContainer,
    {
      ...props,
      saveDisabled: !hasValidLicense,
      title: t2("scenarios:edit_record_risk_level_check.title"),
      size: "medium",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Callout, { variant: "outlined", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.Description, { className: "whitespace-pre-wrap", children: t2("scenarios:edit_record_risk_level_check.description") }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "first-letter:uppercase", children: t2("scenarios:edit_record_risk_level_check.match") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SelectV2,
              {
                multiple: true,
                options: levelsOptions,
                value: node.children[0].constant,
                placeholder: t2("scenarios:edit_record_risk_level_check.placeholder"),
                onChange: (value) => {
                  node.children[0].constant = value;
                }
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(EditionEvaluationErrors, { id: node.id, filterOut: ["FUNCTION_ERROR"] })
        ] })
      ]
    }
  );
}
const extractVariablesNamesFromTemplate = (template) => {
  const res = template.matchAll(STRING_TEMPLATE_VARIABLE_REGEXP).toArray();
  return res.reduce((acc, match) => {
    return match[1] && !acc.includes(match[1]) ? [...acc, match[1]] : acc;
  }, []);
};
const StringTemplateForm = () => {
  const { t: t2 } = useTranslation(["scenarios", "common"]);
  const nodeSharp = AstBuilderNodeSharpFactory.useSharp();
  const node = nodeSharp.select((s) => s.node);
  const template = node.children[0].constant;
  const handleTemplateChange = (event) => {
    node.children[0].constant = event.target.value;
  };
  const variableNames = extractVariablesNamesFromTemplate(template);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-md", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-md", children: [
      t2("scenarios:edit_string_template.template_field.label"),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          value: template,
          onChange: handleTemplateChange,
          placeholder: t2("scenarios:edit_string_template.template_field.placeholder")
        }
      )
    ] }),
    variableNames.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-md", children: [
      t2("scenarios:edit_string_template.variables.label"),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ms-xl grid grid-cols-[150px_1fr] gap-x-xs gap-y-2xs", children: variableNames.map((name) => {
        const variable = node.namedChildren[name];
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(reactExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-s bg-grey-background-light text-purple-primary flex size-fit min-h-[40px] min-w-[40px] flex-wrap items-center justify-center gap-xs rounded-sm p-sm font-semibold", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "max-w-[140px] truncate", title: name, children: name }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            EditionAstBuilderOperand,
            {
              node: variable && isKnownOperandAstNode(variable) ? variable : NewUndefinedAstNode(),
              onChange: (newNode) => {
                if (isKnownOperandAstNode(newNode)) {
                  node.namedChildren[name] = newNode;
                }
              },
              optionsDataType: ["String", "Int", "Float"]
            }
          ) })
        ] }, name);
      }) })
    ] }) : null
  ] });
};
function EditStringTemplate(props) {
  const { t: t2 } = useTranslation(["scenarios", "common"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(OperandEditModalContainer, { ...props, title: t2("scenarios:edit_string_template.title"), size: "medium", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Callout, { variant: "outlined", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.Description, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Trans,
      {
        t: t2,
        i18nKey: "scenarios:edit_string_template.description",
        components: {
          DocLink: /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { href: stringTemplatingDocHref })
        }
      }
    ) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(StringTemplateForm, {})
  ] });
}
const options = ["seconds", "minutes", "hours", "days"];
function DurationUnitSelect({ value, disabled, onChange }) {
  const { t: t2 } = useTranslation(["scenarios"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    SelectV2,
    {
      disabled,
      value: value ?? void 0,
      onChange: (selectedValue) => {
        if (selectedValue === void 0) return;
        onChange(selectedValue);
      },
      placeholder: "...",
      className: "min-w-fit",
      options: options.map((option) => ({
        label: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-s text-grey-primary", children: t2(`scenarios:edit_date.duration_unit_${option}`) }),
        value: option
      }))
    }
  );
}
const adaptDurationAndUnitFromTemporalDuration = (temporalDuration) => {
  if (temporalDuration.seconds > 0) {
    return {
      duration: temporalDuration.total("second"),
      durationUnit: "seconds"
    };
  } else if (temporalDuration.minutes > 0) {
    return {
      duration: temporalDuration.total("minute"),
      durationUnit: "minutes"
    };
  } else if (temporalDuration.hours > 0) {
    return {
      duration: temporalDuration.total("hour"),
      durationUnit: "hours"
    };
  }
  return {
    duration: temporalDuration.total("day"),
    durationUnit: "days"
  };
};
const defaultISO8601Duration = "PT0S";
function getTemporalDuration(duration, durationUnit) {
  return Temporal.Duration.from({ [durationUnit]: duration }).toString();
}
function EditTimeAdd(props) {
  const { t: t2 } = useTranslation(["scenarios"]);
  const nodeSharp = AstBuilderNodeSharpFactory.useSharp();
  const node = nodeSharp.select((s) => s.node);
  const evaluation = nodeSharp.select((s) => s.validation);
  const durationData = g$2(() => {
    const durationNode = node.namedChildren.duration;
    const iso8601Duration = durationNode.constant !== "" ? durationNode.constant : defaultISO8601Duration;
    const temporalDuration = Temporal.Duration.from(iso8601Duration).round("seconds");
    return adaptDurationAndUnitFromTemporalDuration(temporalDuration);
  });
  const [selectedDurationUnit, setSelectedDurationUnit] = reactExports.useState(durationData.value.durationUnit);
  reactExports.useEffect(() => {
    node.namedChildren.duration.constant = getTemporalDuration(durationData.value.duration, selectedDurationUnit);
    nodeSharp.actions.validate();
  }, [nodeSharp, node, durationData.value.duration, selectedDurationUnit]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(OperandEditModalContainer, { ...props, title: t2("scenarios:edit_date.title"), size: "small", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Callout, { variant: "outlined", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.Description, { className: "whitespace-pre-wrap", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Trans,
      {
        t: t2,
        i18nKey: "scenarios:edit_date.description",
        components: {
          DocLink: /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { href: dateDocHref })
        }
      }
    ) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          EditionAstBuilderOperand,
          {
            node: node.namedChildren.timestampField,
            onChange: (newNode) => {
              if (isTimestampFieldAstNode(newNode)) {
                node.namedChildren.timestampField = newNode;
                nodeSharp.actions.validate();
              }
            },
            coerceDataType: ["Timestamp"],
            optionsDataType: ["Timestamp"],
            validationStatus: getValidationStatus(evaluation, node.namedChildren.timestampField.id)
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          OperatorSelect,
          {
            options: timeAddOperators,
            operator: node.namedChildren.sign.constant,
            onOperatorChange: (sign) => {
              node.namedChildren.sign.constant = sign;
              nodeSharp.actions.validate();
            },
            validationStatus: getValidationStatus(evaluation, node.namedChildren.sign.id)
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            value: durationData.value.duration ?? "",
            onChange: (e2) => {
              const value = Number.isFinite(e2.target.valueAsNumber) ? e2.target.valueAsNumber : 0;
              node.namedChildren.duration.constant = getTemporalDuration(value, durationData.value.durationUnit);
              nodeSharp.actions.validate();
            },
            min: "0",
            placeholder: "0",
            type: "number",
            className: "basis-[60px]"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DurationUnitSelect, { value: selectedDurationUnit, onChange: setSelectedDurationUnit })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(EditionEvaluationErrors, { id: node.id, filterOut: ["FUNCTION_ERROR"] })
    ] })
  ] });
}
function getNoTimezoneSetupWarning(currentUser, t2) {
  return isAdmin(currentUser) ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    Trans,
    {
      t: t2,
      i18nKey: "scenarios:edit_timestamp_extract.missing_default_timezone_admin",
      components: {
        SettingsLink: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            className: "text-m hover:text-purple-hover focus:text-purple-hover text-purple-primary relative font-normal hover:underline focus:underline",
            to: "/settings/scenarios"
          }
        )
      }
    }
  ) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-primary", children: t2("scenarios:edit_timestamp_extract.missing_default_timezone_non_admin") });
}
function returnTimestampExtractInformation(t2, part) {
  switch (part) {
    case "year":
      return t2(`scenarios:edit_timestamp_extract.explanation.year`);
    case "month":
      return t2(`scenarios:edit_timestamp_extract.explanation.month`);
    case "day_of_month":
      return t2(`scenarios:edit_timestamp_extract.explanation.day_of_month`);
    case "day_of_week":
      return t2(`scenarios:edit_timestamp_extract.explanation.day_of_week`);
    case "hour":
      return t2(`scenarios:edit_timestamp_extract.explanation.hour`);
    default:
      assertNever("Untranslated operator", part);
  }
}
function EditTimestampExtract(props) {
  const { t: t2 } = useTranslation(["scenarios", "common"]);
  const { org, currentUser } = useOrganizationDetails();
  const nodeSharp = AstBuilderNodeSharpFactory.useSharp();
  const node = nodeSharp.select((s) => s.node);
  const evaluation = nodeSharp.select((s) => s.validation);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(OperandEditModalContainer, { ...props, title: t2("scenarios:edit_timestamp_extract.title"), size: "medium", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Callout, { variant: "outlined", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.Description, { className: "whitespace-pre-wrap", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Trans,
      {
        t: t2,
        i18nKey: "scenarios:edit_timestamp_extract.description",
        components: {
          DocLink: /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { href: dateDocHref })
        }
      }
    ) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "first-letter:uppercase", children: t2("scenarios:edit_timestamp_extract.extract_the") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          OperatorSelect,
          {
            options: validTimestampExtractParts,
            operator: node.namedChildren.part.constant,
            onOperatorChange: (part) => {
              node.namedChildren.part.constant = part;
              nodeSharp.actions.validate();
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t2("scenarios:edit_timestamp_extract.from") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          EditionAstBuilderOperand,
          {
            node: node.namedChildren.timestamp,
            onChange: (newNode) => {
              if (isTimestampFieldAstNode(newNode)) {
                node.namedChildren.timestamp = newNode;
                nodeSharp.actions.validate();
              }
            },
            optionsDataType: ["Timestamp"],
            coerceDataType: ["Timestamp"],
            validationStatus: getValidationStatus(evaluation, node.namedChildren.timestamp.id)
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(EditionEvaluationErrors, { id: node.id, filterOut: ["FUNCTION_ERROR"] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: returnTimestampExtractInformation(t2, node.namedChildren.part.constant) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: org.defaultScenarioTimezone ? t2("scenarios:edit_timestamp_extract.interpreted_in_timezone", {
      replace: { timezone: org.defaultScenarioTimezone }
    }) : getNoTimezoneSetupWarning(currentUser, t2) })
  ] });
}
function OperandEditModal({ node, ...props }) {
  const validation = AstBuilderNodeSharpFactory.useOptionalSharp()?.select((s) => s.validation);
  const nodeSharp = useRoot(
    {
      node,
      validation: {
        errors: [],
        evaluation: getEvaluationForNode(validation?.evaluation ?? [], node.id)
      }
    },
    false
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AstBuilderNodeSharpFactory.Provider, { value: nodeSharp, children: M(node).when(isIsMultipleOf, () => /* @__PURE__ */ jsxRuntimeExports.jsx(EditIsMultipleOf, { ...props })).when(isTimeAdd, () => /* @__PURE__ */ jsxRuntimeExports.jsx(EditTimeAdd, { ...props })).when(isTimestampExtract, () => /* @__PURE__ */ jsxRuntimeExports.jsx(EditTimestampExtract, { ...props })).when(isFuzzyMatchComparator, () => /* @__PURE__ */ jsxRuntimeExports.jsx(EditFuzzyMatchComparator, { ...props })).when(isAggregation, () => /* @__PURE__ */ jsxRuntimeExports.jsx(EditAggregation, { ...props })).when(isStringTemplateAstNode, () => /* @__PURE__ */ jsxRuntimeExports.jsx(EditStringTemplate, { ...props })).when(isFuzzyMatchFilterOptionsAstNode, () => /* @__PURE__ */ jsxRuntimeExports.jsx(EditFuzzyMatchAggregation, { ...props })).when(isMonitoringListCheckAstNode, () => /* @__PURE__ */ jsxRuntimeExports.jsx(EditMonitoringListCheck, { ...props })).when(isIpHasFlag, () => /* @__PURE__ */ jsxRuntimeExports.jsx(EditIpHasFlag, { ...props })).when(isRecordRiskLevelCheckAstNode, () => /* @__PURE__ */ jsxRuntimeExports.jsx(EditRecordRiskLevelCheck, { ...props })).exhaustive() });
}
function AstBuilderOperand(props) {
  const builderMode = AstBuilderDataSharpFactory.select((s) => s.mode);
  return builderMode === "edit" ? /* @__PURE__ */ jsxRuntimeExports.jsx(EditionAstBuilderOperand, { ...props }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ViewingAstBuilderOperand, { ...props });
}
const AddLogicalOperatorButton = function AddLogicalOperatorButton2({
  ref,
  className,
  operator,
  ...props
}) {
  const { t: t2 } = useTranslation(["scenarios"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "button",
    {
      type: "button",
      className: clsx(
        "flex size-fit flex-row items-center justify-center gap-xs rounded-sm border px-sm py-xs outline-hidden text-xs font-semibold",
        "bg-transparent border-purple-primary text-purple-primary",
        "hover:bg-purple-background hover:border-purple-hover hover:text-purple-hover",
        "disabled:bg-grey-background disabled:border-grey-border disabled:text-grey-disabled",
        "disabled:hover:bg-grey-background disabled:hover:border-grey-border disabled:hover:text-grey-disabled",
        "dark:border-purple-hover dark:text-purple-hover",
        "dark:hover:bg-transparent dark:hover:border-purple-hover dark:hover:text-purple-hover",
        "dark:disabled:bg-transparent dark:disabled:border-purple-disabled dark:disabled:text-purple-disabled",
        "dark:disabled:hover:bg-transparent dark:disabled:hover:border-purple-disabled dark:disabled:hover:text-purple-disabled",
        className
      ),
      ...props,
      ref,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "plus", className: "size-4" }),
        t2(`scenarios:logical_operator.${operator}_button`)
      ]
    }
  );
};
function NodeTypeError() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-red-background text-red-primary border-red-primary h-10 w-fit min-w-10 rounded-sm border-[0.5px] p-sm", children: "Wrong node type" });
}
function useSiblings(stringPath) {
  const rootNode = AstBuilderNodeSharpFactory.useSharp().value.node;
  const path = parsePath(stringPath);
  const parentPath = getParentPath(path);
  if (!parentPath || parentPath.childPathSegment?.type !== "children") {
    return [];
  }
  const childIndex = parentPath.childPathSegment.index;
  const parentNode = getAtPath(rootNode, parentPath.path);
  if (!parentNode || parentNode.name !== "=") {
    return [];
  }
  return [...parentNode.children.slice(0, childIndex), ...parentNode.children.slice(childIndex + 1)];
}
const allMainAstOperatorFunctionsOptions = {
  "=": {},
  "≠": { keywords: ["!="] },
  "<": {},
  "<=": {},
  ">": {},
  ">=": {},
  "+": {},
  "-": {},
  "*": {},
  "/": {},
  IsInList: {},
  IsNotInList: {},
  StringContains: {},
  StringNotContain: {},
  StringStartsWith: {},
  StringEndsWith: {},
  ContainsAnyOf: {},
  ContainsNoneOf: {},
  IsEmpty: {},
  IsNotEmpty: {}
};
const EditionAstBuilderNode = reactExports.memo(function EditionAstBuilderNode2(props) {
  const operandProps = {
    coerceDataType: props.coerceDataType,
    optionsDataType: props.optionsDataType,
    excludeFuntionsType: props.excludeFuntionsType,
    excludeFields: props.excludeFields
  };
  const dataSharp = AstBuilderDataSharpFactory.useSharp();
  const data = dataSharp.value.$data.value;
  const nodeSharp = AstBuilderNodeSharpFactory.useSharp();
  const node = g$2(() => getAtPath(nodeSharp.value.node, parsePath(props.path)));
  invariant(node.value, `Couldn't find node at path: ${props.path}`);
  const siblings = useSiblings(props.path);
  const enumValues = g$2(() => {
    const enums = [];
    const triggerTable = data.dataModel.find((t2) => t2.name === data.triggerObjectType);
    if (!triggerTable) {
      return;
    }
    for (const neighbourNode of siblings) {
      if (isDataAccessorAstNode(neighbourNode)) {
        const field = getDataAccessorAstNodeField(neighbourNode, {
          dataModel: data.dataModel,
          triggerObjectTable: triggerTable
        });
        if (isEnumField(field)) {
          enums.push(...resolveEnumValues(field).values);
        }
      }
    }
    return enums;
  });
  const setNode = (newNode) => {
    nodeSharp.actions.setNodeAtPath(props.path, newNode);
    nodeSharp.actions.validate();
  };
  const replaceNode = (newNode) => {
    nodeSharp.actions.setNodeAtPath(props.path, newNode);
  };
  const setOperator = (operator) => {
    if (node.value) {
      node.value.name = operator;
      if (isUnaryMainAstOperatorFunction(operator) && node.value.children.length > 1) {
        node.value.children = [node.value.children[0]];
      } else if (isBinaryMainAstOperatorFunction(operator) && node.value.children.length < 2) {
        node.value.children = [node.value.children[0], NewUndefinedAstNode()];
      }
      nodeSharp.actions.triggerUpdate();
      nodeSharp.actions.validate();
    }
  };
  const children = M(node.value).when(isMainAstBinaryNode, (node2) => {
    const hasNestedLeftChild = isMainAstNode(node2.children[0]) && node2.children[0].children.length > 0;
    const hasNestedRightChild = isMainAstNode(node2.children[1]) && node2.children[1].children.length > 0;
    const hasAllNestedChildren = hasNestedLeftChild && hasNestedRightChild;
    const hasDirectError = getErrorsForNode(nodeSharp.value.validation, node2.id, true).length > 0;
    const showBrackets = !props.root || hasAllNestedChildren;
    const children2 = /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(EditionAstBuilderNode2, { path: `${props.path}.children.0`, ...operandProps }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        OperatorSelect,
        {
          hideArrow: true,
          options: allMainAstOperatorFunctionsOptions,
          validationStatus: hasDirectError ? "error" : "valid",
          operator: node2.name,
          onOperatorChange: setOperator
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(EditionAstBuilderNode2, { path: `${props.path}.children.1`, ...operandProps })
    ] });
    const wrappedChildren = showBrackets ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      Brackets$1,
      {
        removeNesting: () => {
          setNode(node2.children[0]);
          nodeSharp.actions.validate();
        },
        addNesting: () => {
          setNode(NewUndefinedAstNode({ children: [node2, NewUndefinedAstNode()] }));
        },
        invertOperands: () => {
          const left = node2.children[0];
          const right = node2.children[1];
          nodeSharp.update(() => {
            node2.children[0] = right;
            node2.children[1] = left;
          });
        },
        children: children2
      }
    ) : children2;
    return props.root ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex w-full min-w-0 flex-row flex-wrap items-start gap-sm", children: wrappedChildren }) : wrappedChildren;
  }).when(isMainAstUnaryNode, (node2) => {
    const hasDirectError = getErrorsForNode(nodeSharp.value.validation, node2.id, true).length > 0;
    const showBrackets = !props.root;
    const children2 = /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(EditionAstBuilderNode2, { path: `${props.path}.children.0`, ...operandProps }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        OperatorSelect,
        {
          hideArrow: true,
          options: allMainAstOperatorFunctionsOptions,
          validationStatus: hasDirectError ? "error" : "valid",
          operator: node2.name,
          onOperatorChange: setOperator
        }
      )
    ] });
    const wrappedChildren = showBrackets ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      Brackets$1,
      {
        unary: true,
        removeNesting: () => {
          setNode(node2.children[0]);
          nodeSharp.actions.validate();
        },
        addNesting: () => {
          setNode(NewUndefinedAstNode({ children: [node2, NewUndefinedAstNode()] }));
        },
        children: children2
      }
    ) : children2;
    return props.root ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex w-full min-w-0 flex-row flex-wrap items-start gap-sm", children: wrappedChildren }) : wrappedChildren;
  }).when(isKnownOperandAstNode, (node2) => {
    const hasDirectError = getErrorsForNode(nodeSharp.value.validation, node2.id, true).length > 0;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      EditionAstBuilderOperand,
      {
        node: node2,
        onChange: setNode,
        onReplaceNode: replaceNode,
        enumValues: enumValues.value,
        validationStatus: hasDirectError ? "error" : "valid",
        ...operandProps
      }
    );
  }).otherwise(() => /* @__PURE__ */ jsxRuntimeExports.jsx(NodeTypeError, {}));
  return children;
});
EditionAstBuilderNode.displayName = "EditionAstBuilderNode";
function Brackets$1({ children, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group/nest contents", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Bracket, { ...props, children: "(" }),
    children,
    /* @__PURE__ */ jsxRuntimeExports.jsx(Bracket, { ...props, children: ")" })
  ] });
}
const Bracket = ({ children, removeNesting, addNesting, ...props }) => {
  const { t: t2 } = useTranslation(["scenarios"]);
  const [open, setOpen] = reactExports.useState(false);
  const isValueSwitchOpen = AstBuilderDataSharpFactory.select((s) => s.isValueSwitchOpen);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    MenuCommand.Menu,
    {
      open: isValueSwitchOpen ? false : open,
      onOpenChange: (nextOpen) => {
        if (!isValueSwitchOpen) setOpen(nextOpen);
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Trigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            disabled: isValueSwitchOpen,
            className: "text-grey-primary border-grey-border [.group\\/nest:hover:not(:has(.group\\/nest:hover))_>_&]:bg-grey-background [.group\\/nest:hover:not(:has(.group\\/nest:hover))_>_&]:border-grey-placeholder disabled:text-grey-disabled disabled:bg-grey-background-light disabled:border-grey-border flex h-10 items-center justify-center rounded-sm border px-xs",
            children
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Content, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(MenuCommand.List, { children: [
          !props.unary ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
            MenuCommand.Item,
            {
              onSelect: props.invertOperands,
              className: "data-active-item:bg-purple-background-light grid w-full select-none grid-cols-[20px_1fr] gap-xs rounded-xs p-sm outline-hidden",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { "aria-hidden": "true", className: "col-start-1 size-5 shrink-0", icon: "swap" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-start-2 flex flex-row gap-xs overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-grey-primary text-s w-full break-all text-start font-normal", children: t2("scenarios:nesting.swap_operands") }) })
              ]
            }
          ) : null,
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            MenuCommand.Item,
            {
              onSelect: addNesting,
              className: "data-active-item:bg-purple-background-light grid w-full select-none grid-cols-[20px_1fr] gap-xs rounded-xs p-sm outline-hidden",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { "aria-hidden": "true", className: "col-start-1 size-5 shrink-0", icon: "parentheses" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-start-2 flex flex-row gap-xs overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-grey-primary text-s w-full break-all text-start font-normal", children: t2("scenarios:nesting.add_right_nesting") }) })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            MenuCommand.Item,
            {
              onSelect: removeNesting,
              className: "data-active-item:bg-red-background grid w-full select-none grid-cols-[20px_1fr] gap-xs rounded-xs p-sm outline-hidden",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { "aria-hidden": "true", className: "text-red-hover col-start-1 size-5 shrink-0", icon: "delete" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-start-2 flex flex-row gap-xs overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-grey-primary text-s w-full break-all text-start font-normal", children: t2("scenarios:nesting.remove") }) })
              ]
            }
          )
        ] }) })
      ]
    }
  );
};
function NewAndChild() {
  return NewUndefinedAstNode({
    children: [NewUndefinedAstNode(), NewUndefinedAstNode()]
  });
}
function EditionAstBuilderAndRoot(props) {
  const dataSharp = AstBuilderDataSharpFactory.useSharp();
  const nodeStore = useRoot(props);
  const isValueSwitchOpen = dataSharp.select((s) => s.isValueSwitchOpen);
  const appendChild = () => {
    nodeStore.value.node.children.push(NewAndChild());
    nodeStore.actions.validate();
    nodeStore.actions.triggerUpdate();
  };
  const removeChild = (index) => {
    nodeStore.value.node.children.splice(index, 1);
    nodeStore.actions.validate();
    nodeStore.actions.triggerUpdate();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AstBuilderNodeSharpFactory.Provider, { value: nodeStore, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-w-0 flex-col gap-sm lg:gap-md", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-s grid min-w-0 grid-cols-[8px_16px_max-content_minmax(0,1fr)_max-content]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-s bg-grey-background-light text-purple-primary col-span-5 flex size-fit min-h-[40px] min-w-10 flex-wrap items-center justify-center gap-xs rounded-sm p-sm font-semibold", children: dataSharp.value.data.$triggerObjectType }),
      nodeStore.value.node.children.map((child, i2, children) => {
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          EditionRootAndLine,
          {
            isFirst: i2 === 0,
            isLast: i2 === children.length - 1,
            path: `root.children.${i2}`,
            nodeId: child.id,
            removeNode: () => {
              removeChild(i2);
            }
          },
          child.id
        );
      })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-row flex-wrap gap-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(AddLogicalOperatorButton, { onClick: appendChild, operator: "and", disabled: isValueSwitchOpen }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(EditionEvaluationErrors, { direct: true, id: nodeStore.value.node.id, filterOut: ["ARGUMENT_MUST_BE_BOOLEAN"] })
    ] })
  ] }) });
}
function EditionRootAndLine({ isFirst, isLast, path, nodeId, removeNode }) {
  const isValueSwitchOpen = AstBuilderDataSharpFactory.select((s) => s.isValueSwitchOpen);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: clsx("border-grey-border col-span-5 w-2 border-e", isFirst ? "h-4" : "h-2") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: clsx("border-grey-border col-start-1 border-e", isLast && "h-5") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-grey-border col-start-2 h-5 border-b" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(LogicalOperatorLabel, { operator: isFirst ? "where" : "and", className: "col-start-3", type: "contained" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: clsx("col-span-1 col-start-4 flex min-w-0 flex-col gap-sm px-sm"), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(EditionAstBuilderNode, { path, root: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(EditionEvaluationErrors, { id: nodeId })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-start-5 flex h-10 flex-col items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(RemoveButton, { onClick: removeNode, disabled: isValueSwitchOpen }) })
  ] });
}
function EditionAstBuilderAnyRoot(props) {
  const nodeStore = useRoot(props);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(AstBuilderNodeSharpFactory.Provider, { value: nodeStore, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      EditionAstBuilderNode,
      {
        root: true,
        path: "root",
        coerceDataType: props.coerceDataType,
        optionsDataType: props.optionsDataType,
        excludeFuntionsType: props.excludeFuntionsType,
        excludeFields: props.excludeFields
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(EditionEvaluationErrors, { id: nodeStore.value.node.id })
  ] });
}
function NewChildForAnd() {
  return NewUndefinedAstNode({
    children: [NewUndefinedAstNode(), NewUndefinedAstNode()]
  });
}
function NewChildForOr() {
  return NewAndAstNode({
    children: [NewChildForAnd()]
  });
}
function EditionAstBuilderOrWithAndRoot(props) {
  const nodeStore = useRoot(props);
  const isValueSwitchOpen = AstBuilderDataSharpFactory.select((s) => s.isValueSwitchOpen);
  const appendChild = () => {
    nodeStore.value.node.children.push(NewChildForOr());
    nodeStore.actions.validate();
    nodeStore.actions.triggerUpdate();
  };
  const removeChild = (index) => {
    nodeStore.value.node.children.splice(index, 1);
    nodeStore.actions.validate();
    nodeStore.actions.triggerUpdate();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AstBuilderNodeSharpFactory.Provider, { value: nodeStore, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid min-w-0 grid-cols-[40px_minmax(0,1fr)_max-content] gap-sm", children: [
    nodeStore.value.node.children.map((child, i2) => {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        EditionRootOrGroup,
        {
          isFirst: i2 === 0,
          path: `root.children.${i2}`,
          nodeId: child.id,
          removeNode: () => {
            removeChild(i2);
          }
        },
        child.id
      );
    }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-3 flex flex-row flex-wrap gap-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(AddLogicalOperatorButton, { onClick: appendChild, operator: "or", disabled: isValueSwitchOpen }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(EditionEvaluationErrors, { direct: true, id: nodeStore.value.node.id })
    ] })
  ] }) });
}
function EditionRootOrGroup({ isFirst, path, removeNode }) {
  const nodeSharp = AstBuilderNodeSharpFactory.useSharp();
  const isValueSwitchOpen = AstBuilderDataSharpFactory.select((s) => s.isValueSwitchOpen);
  const node = g$2(() => getAtPath(nodeSharp.value.node, parsePath(path)));
  invariant(node.value);
  const appendChild = () => {
    if (!node.value) return;
    node.value.children.push(NewChildForAnd());
    nodeSharp.actions.validate();
  };
  const removeChild = (index) => {
    if (!node.value) return;
    if (node.value.children.length === 1) {
      removeNode();
      return;
    }
    node.value.children.splice(index, 1);
    nodeSharp.actions.validate();
    nodeSharp.actions.triggerUpdate();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    !isFirst ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(LogicalOperatorLabel, { operator: "or", className: "uppercase", type: "contained" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-2 flex flex-1 items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-grey-border h-px w-full" }) })
    ] }) : null,
    node.value.children.map((child, i2) => {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        EditionRootOrWithAndLine,
        {
          isFirst: i2 === 0,
          path: `${path}.children.${i2}`,
          nodeId: child.id,
          removeNode: () => {
            removeChild(i2);
          }
        },
        child.id
      );
    }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-2 col-start-2 flex flex-row flex-wrap gap-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(AddLogicalOperatorButton, { onClick: appendChild, operator: "and", disabled: isValueSwitchOpen }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(EditionEvaluationErrors, { direct: true, id: node.value.id, filterOut: ["ARGUMENT_MUST_BE_BOOLEAN"] })
    ] })
  ] });
}
function EditionRootOrWithAndLine({ isFirst, path, nodeId, removeNode }) {
  const isValueSwitchOpen = AstBuilderDataSharpFactory.select((s) => s.isValueSwitchOpen);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(LogicalOperatorLabel, { operator: isFirst ? "if" : "and", type: "contained" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-w-0 flex-col gap-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(EditionAstBuilderNode, { path, root: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(EditionEvaluationErrors, { id: nodeId })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-10 flex-col items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(RemoveButton, { onClick: removeNode, disabled: isValueSwitchOpen }) })
  ] });
}
const ViewingEvaluationErrors = reactExports.memo(function ViewingEvaluationErrors2({
  direct,
  id,
  className,
  evaluation
}) {
  const { t: t2 } = useTranslation(["scenarios"]);
  const errors = reactExports.useMemo(() => {
    return evaluation.filter((row) => direct ? row.nodeId === id : row.relatedIds.includes(id)).flatMap((row) => row.errors);
  }, [evaluation, direct, id]);
  const errorModels = adaptEvaluationErrorViewModels(errors);
  const translateError = commonErrorMessages(t2);
  if (errorModels.length === 0) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("flex flex-row flex-wrap gap-sm", className), children: errorModels.map((errorModel, i2) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      className: "bg-red-background text-s text-red-primary flex h-8 items-center justify-center rounded-sm px-xs py-2xs font-medium",
      children: translateError(errorModel)
    },
    i2
  )) });
});
ViewingEvaluationErrors.displayName = "ViewingEvaluationErrors";
const ViewingAstBuilderNode = reactExports.memo(function ViewingAstBuilderNode2(props) {
  const { t: t2 } = useTranslation(["common", "scenarios"]);
  const language = useFormatLanguage();
  const children = M(props.node).when(isMainAstBinaryNode, (node) => {
    const hasNestedLeftChild = isMainAstNode(node.children[0]) && node.children[0].children.length > 0;
    const hasNestedRightChild = isMainAstNode(node.children[1]) && node.children[1].children.length > 0;
    const hasAllNestedChildren = hasNestedLeftChild && hasNestedRightChild;
    const showBrackets = !props.root || hasAllNestedChildren;
    const children2 = /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        ViewingAstBuilderNode2,
        {
          path: `${props.path}.children.0`,
          node: node.children[0],
          validation: props.validation
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ViewingOperator, { operator: node.name }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        ViewingAstBuilderNode2,
        {
          path: `${props.path}.children.1`,
          node: node.children[1],
          validation: props.validation
        }
      )
    ] });
    const wrappedChildren = showBrackets ? /* @__PURE__ */ jsxRuntimeExports.jsx(Brackets, { children: children2 }) : children2;
    return props.root ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex flex-row flex-wrap items-center gap-sm", children: wrappedChildren }) : wrappedChildren;
  }).when(isMainAstUnaryNode, (node) => {
    const showBrackets = !props.root;
    const children2 = /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        ViewingAstBuilderNode2,
        {
          path: `${props.path}.children.0`,
          node: node.children[0],
          validation: props.validation
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ViewingOperator, { operator: node.name })
    ] });
    const wrappedChildren = showBrackets ? /* @__PURE__ */ jsxRuntimeExports.jsx(Brackets, { children: children2 }) : children2;
    return props.root ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex flex-row flex-wrap items-center gap-sm", children: wrappedChildren }) : wrappedChildren;
  }).when(isKnownOperandAstNode, (node) => {
    const directEvaluation = props.validation.evaluation.find((e2) => e2.nodeId === node.id);
    const hasDirectError = !!directEvaluation?.errors.length;
    const returnValue = formatReturnValue(directEvaluation?.returnValue, {
      t: t2,
      language
    });
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      ViewingAstBuilderOperand,
      {
        node,
        validationStatus: hasDirectError ? "error" : "valid",
        returnValue
      }
    );
  }).otherwise(() => /* @__PURE__ */ jsxRuntimeExports.jsx(NodeTypeError, {}));
  return children;
});
ViewingAstBuilderNode.displayName = "ViewingAstBuilderNode";
function Brackets({ children }) {
  const className = "text-grey-primary border-grey-border [.group/nest:hover:not(:has(.group/nest:hover))_>_&]:bg-grey-background [.group/nest:hover:not(:has(.group/nest:hover))_>_&]:border-grey-placeholder flex h-10 items-center justify-center rounded border px-xs";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group/nest contents", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className, children: "(" }),
    children,
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className, children: ")" })
  ] });
}
function ViewingAstBuilderAndRoot(props) {
  const dataSharp = AstBuilderDataSharpFactory.useSharp();
  const validation = reactExports.useMemo(() => props.validation ?? { errors: [], evaluation: [] }, [props.validation]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-sm lg:gap-md", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-s grid grid-cols-[8px_16px_max-content_1fr_max-content]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-s bg-grey-background-light text-purple-primary col-span-5 flex size-fit min-h-[40px] min-w-[40px] flex-wrap items-center justify-center gap-xs rounded-sm p-sm font-semibold", children: dataSharp.value.data.$triggerObjectType }),
      props.node.children.map((child, i2, children) => {
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          ViewingRootAndLine,
          {
            isFirst: i2 === 0,
            isLast: i2 === children.length - 1,
            path: `root.children.${i2}`,
            node: child,
            validation
          },
          child.id
        );
      })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-row flex-wrap gap-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ViewingEvaluationErrors, { direct: true, id: props.node.id, evaluation: validation.evaluation }) })
  ] });
}
function ViewingRootAndLine({ isFirst, isLast, path, validation, node }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: clsx("border-grey-border col-span-5 w-2 border-e", isFirst ? "h-4" : "h-2") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: clsx("border-grey-border col-start-1 border-e", isLast && "h-5") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-grey-border col-start-2 h-5 border-b" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(LogicalOperatorLabel, { operator: isFirst ? "where" : "and", className: "col-start-3", type: "contained" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: clsx("col-span-2 col-start-4 flex flex-col gap-sm px-xs"), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ViewingAstBuilderNode, { path, node, validation, root: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ViewingEvaluationErrors, { id: node.id, evaluation: validation.evaluation })
    ] })
  ] });
}
function ViewingAstBuilderOrWithAndRoot(props) {
  const validation = reactExports.useMemo(() => props.validation ?? { errors: [], evaluation: [] }, [props.validation]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-[40px_1fr_max-content] gap-sm", children: [
    props.node.children.map((child, i2) => {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        ViewingRootOrGroup,
        {
          isFirst: i2 === 0,
          path: `root.children.${i2}`,
          node: child,
          validation
        },
        child.id
      );
    }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ViewingEvaluationErrors, { direct: true, id: props.node.id, evaluation: validation.evaluation, className: "col-span-3" })
  ] });
}
function ViewingRootOrGroup({ isFirst, path, node, validation }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    !isFirst ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(LogicalOperatorLabel, { operator: "or", className: "uppercase", type: "contained" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-2 flex flex-1 items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-grey-border h-px w-full" }) })
    ] }) : null,
    node.children.map((child, i2) => {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        ViewingRootOrWithAndLine,
        {
          isFirst: i2 === 0,
          path: `${path}.children.${i2}`,
          node: child,
          validation
        },
        child.id
      );
    }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ViewingEvaluationErrors,
      {
        direct: true,
        id: node.id,
        evaluation: validation.evaluation,
        className: "col-span-2 col-start-2"
      }
    )
  ] });
}
function ViewingRootOrWithAndLine({ isFirst, path, node, validation }) {
  const { t: t2 } = useTranslation(["common"]);
  const showValues = AstBuilderDataSharpFactory.select((s) => s.showValues);
  const directEvaluation = validation.evaluation.find((e2) => e2.nodeId === node.id);
  let rightComponent = null;
  if (showValues && directEvaluation) {
    const hasDirectError = directEvaluation.errors.length ?? 0 > 0;
    const isOmitted = directEvaluation.returnValue.isOmitted;
    if (!hasDirectError && !isOmitted) {
      const adaptedValue = adaptBooleanOrNullReturnValue(directEvaluation.returnValue);
      if (adaptedValue.isBooleanOrNull) {
        const { value } = adaptedValue;
        const tKey = value === null ? "null" : value;
        let color = "red";
        if (directEvaluation.skipped) {
          color = "grey";
        } else if (value === null) {
          color = "orange";
        } else if (value) {
          color = "green";
        }
        rightComponent = /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-10 items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { className: "w-full", color, children: t2(`common:${directEvaluation.skipped ? "skipped" : tKey}`) }) });
      }
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(LogicalOperatorLabel, { operator: isFirst ? "if" : "and", type: "text" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: clsx("flex flex-col gap-sm", rightComponent === null && "col-span-2"), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ViewingAstBuilderNode, { root: true, path, node, validation }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ViewingEvaluationErrors, { id: node.id, evaluation: validation.evaluation })
    ] }),
    rightComponent
  ] });
}
function AstBuilderRoot({ node: _node, ...props }) {
  return M(_node).when(isAndAstNode, (node) => /* @__PURE__ */ jsxRuntimeExports.jsx(AstBuilderAndRoot, { ...props, node })).when(isOrWithAndAstNode, (node) => /* @__PURE__ */ jsxRuntimeExports.jsx(AstBuilderOrWithAndRoot, { ...props, node })).otherwise((node) => /* @__PURE__ */ jsxRuntimeExports.jsx(AstBuilderAnyRoot, { ...props, node }));
}
function AstBuilderAnyRoot(props) {
  const builderMode = AstBuilderDataSharpFactory.select((s) => s.mode);
  return builderMode === "edit" ? /* @__PURE__ */ jsxRuntimeExports.jsx(EditionAstBuilderAnyRoot, { ...props }) : "view mode not supported yet!";
}
function AstBuilderOrWithAndRoot(props) {
  const builderMode = AstBuilderDataSharpFactory.select((s) => s.mode);
  return builderMode === "edit" ? /* @__PURE__ */ jsxRuntimeExports.jsx(EditionAstBuilderOrWithAndRoot, { ...props }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ViewingAstBuilderOrWithAndRoot, { ...props });
}
function AstBuilderAndRoot(props) {
  const builderMode = AstBuilderDataSharpFactory.select((s) => s.mode);
  return builderMode === "edit" ? /* @__PURE__ */ jsxRuntimeExports.jsx(EditionAstBuilderAndRoot, { ...props }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ViewingAstBuilderAndRoot, { ...props });
}
const AstBuilder = {
  Root: AstBuilderRoot,
  Operand: AstBuilderOperand,
  Provider: AstBuilderProvider,
  StaticProvider: AstBuilderStaticProvider
};
export {
  AstBuilder as A,
  ColoredNumberOptions as C,
  AstBuilderNodeSharpFactory as a,
  AggregationEditContent as b,
  t,
  useRoot as u
};

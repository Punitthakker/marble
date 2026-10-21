import { _ as t$8, bP as isConstant, bY as isCustomListAccess, bZ as isDataAccessorAstNode, b_ as isAggregation, b$ as isTimeAdd, c0 as isTimeNow, c1 as isTimestampExtract, c2 as isIpHasFlag, c3 as isFuzzyMatchComparator, c4 as isIsMultipleOf, c5 as isStringTemplateAstNode, c6 as isFuzzyMatchFilterOptionsAstNode, c7 as isMonitoringListCheckAstNode, c8 as isRecordRiskLevelCheckAstNode, c9 as isValueSwitchAstNode, ca as isUndefinedAstNode, u as t$e, o as t$9, p as t$c, v as n$7, cb as isDatabaseAccess, cc as isPayload, T as Temporal, cd as topicsToCategories, ce as SCREENING_CATEGORY_I18N_KEY_MAP, cf as parseValueSwitchAstNode, t as t$g, bW as assertNever, bX as undefinedAstNodeName, bU as isMainAstOperatorFunction, bV as isAggregationFilterOperator, bS as validTimestampExtractParts, bT as validIpFlags, a0 as t$f } from "./services-middleware-nMulUXHZ.mjs";
import { f as formatDateTimeWithoutPresets, h as formatNumber } from "./Tabs-CzpyUi7T.mjs";
import { q as invariant } from "./short-uuid-fTZYJj_k.mjs";
import { t } from "./join-Ce2xPJwm.mjs";
import { k as dateTimeDataTypeSchema } from "./DataField-BczNbAhi.mjs";
import { e as e$4 } from "./isNullish-B8pc8Ntu.mjs";
import { e as e$5 } from "./isArray-gJc74O_I.mjs";
const e$3 = (e2) => Object.assign(e2, { single: true });
function r(...t$12) {
  return t$g(i, t$12, e$3(a));
}
const i = (e2, t2) => e2.find(t2), a = (e2) => (n2, r2, i2) => e2(n2, r2, i2) ? { done: true, hasNext: true, next: n2 } : t$f;
function e$2(e2) {
  return typeof e2 == `boolean`;
}
function e$1(e2) {
  return typeof e2 == `number` && !Number.isNaN(e2);
}
function e(e2) {
  return typeof e2 == `string`;
}
const aggregatorOperators = [
  "AVG",
  "COUNT",
  "COUNT_DISTINCT",
  "MAX",
  "MIN",
  "SUM",
  "STDDEV",
  "PCTILE",
  "MEDIAN"
];
function isAggregatorOperator(value) {
  return aggregatorOperators.includes(value);
}
const aggregatorsWithParams = ["PCTILE"];
function aggregatorHasParams(aggregator) {
  return aggregatorsWithParams.includes(aggregator);
}
const restrictedAggregators = ["STDDEV", "PCTILE", "MEDIAN"];
function isRestrictedAggregator(aggregator) {
  return restrictedAggregators.includes(aggregator);
}
const performanceHeavyAggregators = ["PCTILE", "MEDIAN"];
function isPerformanceHeavyAggregator(aggregator) {
  return performanceHeavyAggregators.includes(aggregator);
}
const timeAddOperators = ["+", "-"];
function isTimeAddOperator(value) {
  return timeAddOperators.includes(value);
}
function isTimestampPart(value) {
  return validTimestampExtractParts.includes(value);
}
function isIpFlag(value) {
  return validIpFlags.includes(value);
}
function isOperatorOption(value) {
  return value == "Undefined" || isMainAstOperatorFunction(value) || isAggregationFilterOperator(value) || isTimeAddOperator(value) || isAggregatorOperator(value) || isTimestampPart(value) || isIpFlag(value);
}
function getOperatorName(t2, operatorName, isAggregationFilter) {
  if (isOperatorOption(operatorName)) {
    switch (operatorName) {
      case "+":
        return "+";
      case "-":
        return "-";
      case "<":
        return isAggregationFilter ? t2("scenarios:operator.filter_lt") : "<";
      case "=":
        return isAggregationFilter ? t2("scenarios:operator.filter_eq") : "=";
      case "≠":
      case "!=":
        return isAggregationFilter ? t2("scenarios:operator.filter_neq") : "≠";
      case ">":
        return isAggregationFilter ? t2("scenarios:operator.filter_gt") : ">";
      case ">=":
        return isAggregationFilter ? t2("scenarios:operator.filter_gte") : "≥";
      case "<=":
        return isAggregationFilter ? t2("scenarios:operator.filter_lte") : "≤";
      case "*":
        return "×";
      case "/":
        return "÷";
      case "IsInList":
        return isAggregationFilter ? t2("scenarios:operator.filter_is_in") : t2("scenarios:operator.is_in");
      case "IsEmpty":
        return isAggregationFilter ? t2("scenarios:operator.filter_is_empty") : t2("scenarios:operator.is_empty");
      case "IsNotEmpty":
        return isAggregationFilter ? t2("scenarios:operator.filter_is_not_empty") : t2("scenarios:operator.is_not_empty");
      case "IsNotInList":
        return isAggregationFilter ? t2("scenarios:operator.filter_is_not_in") : t2("scenarios:operator.is_not_in");
      case "StringContains":
        return isAggregationFilter ? t2("scenarios:operator.filter_contains") : t2("scenarios:operator.contains");
      case "StringNotContain":
        return isAggregationFilter ? t2("scenarios:operator.filter_does_not_contain") : t2("scenarios:operator.does_not_contain");
      case "StringStartsWith":
        return isAggregationFilter ? t2("scenarios:operator.filter_starts_with") : t2("scenarios:operator.starts_with");
      case "StringEndsWith":
        return isAggregationFilter ? t2("scenarios:operator.filter_ends_with") : t2("scenarios:operator.ends_with");
      case "ContainsAnyOf":
        return isAggregationFilter ? t2("scenarios:operator.filter_contains_any_of") : t2("scenarios:operator.contains_any_of");
      case "ContainsNoneOf":
        return isAggregationFilter ? t2("scenarios:operator.filter_contains_none_of") : t2("scenarios:operator.contains_none_of");
      case "FuzzyMatch":
        return isAggregationFilter ? t2("scenarios:operator.filter_fuzzy-match") : "≈";
      case "AVG":
        return t2("scenarios:aggregator.average");
      case "COUNT":
        return t2("scenarios:aggregator.count");
      case "COUNT_DISTINCT":
        return t2("scenarios:aggregator.count_distinct");
      case "MAX":
        return t2("scenarios:aggregator.max");
      case "MIN":
        return t2("scenarios:aggregator.min");
      case "SUM":
        return t2("scenarios:aggregator.sum");
      case "STDDEV":
        return t2("scenarios:aggregator.stddev");
      case "PCTILE":
        return t2("scenarios:aggregator.pctile");
      case "MEDIAN":
        return t2("scenarios:aggregator.median");
      case "year":
        return t2("scenarios:timestamp_part.year");
      case "month":
        return t2("scenarios:timestamp_part.month");
      case "day_of_month":
        return t2("scenarios:timestamp_part.day_of_month");
      case "day_of_week":
        return t2("scenarios:timestamp_part.day_of_week");
      case "hour":
        return t2("scenarios:timestamp_part.hour");
      case "abuse":
        return t2("scenarios:ip_flag.abuse");
      case "vpn":
        return t2("scenarios:ip_flag.vpn");
      case "tor_exit_node":
        return t2("scenarios:ip_flag.tor_exit_node");
      case "cloud_provider":
        return t2("scenarios:ip_flag.cloud_provider");
      case undefinedAstNodeName:
        return "...";
      default:
        assertNever("Untranslated operator", operatorName);
    }
  }
  return operatorName;
}
function formatConstant(constant, context) {
  if (e$4(constant)) return "NULL";
  if (e$5(constant)) {
    return `[${constant.map((constant2) => formatConstant(constant2, context)).join(", ")}]`;
  }
  if (e(constant)) {
    const parsedConstant = dateTimeDataTypeSchema.safeParse(constant);
    if (parsedConstant.success) {
      return formatDateTimeWithoutPresets(parsedConstant.data, {
        language: context.language,
        dateStyle: "short",
        timeStyle: "short"
      });
    }
    return `"${constant.toString()}"`;
  }
  if (e$1(constant)) {
    return formatNumber(constant, {
      language: context.language,
      maximumFractionDigits: 2
    });
  }
  if (e$2(constant)) {
    return context.t(`common:${constant}`);
  }
  return JSON.stringify(t$8(constant, (constant2) => formatConstant(constant2, context)));
}
function getCustomListAccessCustomList(astNode, context) {
  return t$e(
    context.customLists,
    r(({ id }) => id === astNode.namedChildren.customListId.constant)
  );
}
function getAstNodeDisplayName(astNode, context) {
  if (isConstant(astNode)) {
    return formatConstant(astNode.constant, context);
  }
  if (isCustomListAccess(astNode)) {
    const customList = getCustomListAccessCustomList(astNode, context);
    return customList?.name ?? context.t("scenarios:custom_list.unknown");
  }
  if (isDataAccessorAstNode(astNode)) {
    return getDataAccessorDisplayName(astNode);
  }
  if (isAggregation(astNode)) {
    return getAggregatorDisplayName(astNode, context);
  }
  if (isTimeAdd(astNode)) {
    return getTimeAddDisplayName(astNode, context);
  }
  if (isTimeNow(astNode)) {
    return context.t("scenarios:edit_date.now");
  }
  if (isTimestampExtract(astNode)) {
    return getTimestampExtractDisplayName(astNode, context);
  }
  if (isIpHasFlag(astNode)) {
    return getIpHasFlagDisplayName(astNode, context);
  }
  if (isFuzzyMatchComparator(astNode)) {
    return getFuzzyMatchComparatorDisplayName(astNode, context);
  }
  if (isIsMultipleOf(astNode)) {
    return getIsMultipleOfDisplayName(astNode, context);
  }
  if (isStringTemplateAstNode(astNode)) {
    return getStringTemplateDisplayName(astNode, context);
  }
  if (isFuzzyMatchFilterOptionsAstNode(astNode)) {
    return getAstNodeDisplayName(astNode.namedChildren.value, context);
  }
  if (isMonitoringListCheckAstNode(astNode)) {
    return getMonitoringListCheckDisplayName(astNode, context);
  }
  if (isRecordRiskLevelCheckAstNode(astNode)) {
    return context.t("scenarios:record_risk_level_check.menu_label");
  }
  if (isValueSwitchAstNode(astNode)) {
    return getValueSwitchDisplayName(astNode, context);
  }
  if (isUndefinedAstNode(astNode)) {
    return "";
  }
  if (!astNode.name) return "🤷";
  const childrenArgs = t$e(
    astNode.children,
    t$9((child) => getAstNodeDisplayName(child, context)),
    t(", ")
  );
  const namedChildrenArgs = t$e(
    t$c(astNode.namedChildren),
    t$9(([name, child]) => `${name}: ${getAstNodeDisplayName(child, context)}`),
    t(", ")
  );
  const args = t$e(
    [childrenArgs, namedChildrenArgs],
    n$7((arg) => arg !== ""),
    t(", ")
  );
  return `${astNode.name}(${args})`;
}
function getDataAccessorDisplayName(astNode) {
  if (isDatabaseAccess(astNode)) {
    const { path, fieldName } = astNode.namedChildren;
    return [...path.constant, fieldName.constant].join(".");
  }
  if (isPayload(astNode)) {
    return astNode.children[0].constant;
  }
  throw invariant("never encountered");
}
function getValueSwitchDisplayName(astNode, context) {
  const model = parseValueSwitchAstNode(astNode);
  if (!model?.dimensions[0]) {
    return context.t("scenarios:value_switch.menu_label");
  }
  const variable = model.dimensions.flatMap(
    (dimension) => dimension ? [
      dimension.type === "risk-level" ? context.t("scenarios:value_switch.customer_risk_level") : getDataAccessorDisplayName(dimension.field)
    ] : []
  ).join("; ");
  return context.t("scenarios:value_switch.display_name_with_variable", { variable });
}
function getTimeAddDisplayName(astNode, context) {
  const sign = astNode.namedChildren["sign"]?.constant ?? "";
  const isoDuration = astNode.namedChildren["duration"]?.constant ?? "";
  const timestampField = astNode.namedChildren["timestampField"];
  const timestamp = getAstNodeDisplayName(timestampField, context);
  if (sign === "" || isoDuration === "" || timestamp === "") {
    return context.t("scenarios:edit_date.date");
  }
  const temporalDuration = Temporal.Duration.from(isoDuration);
  return `${timestamp} ${sign} ${temporalDurationToString(temporalDuration)}`;
}
const temporalDurationToString = (temporalDuration) => {
  let durationString = "";
  if (temporalDuration.days !== 0) {
    durationString += `${pluralizeTemporalDurationUnit(temporalDuration.days, "day")}`;
  }
  if (temporalDuration.hours !== 0) {
    durationString += `${pluralizeTemporalDurationUnit(temporalDuration.hours, "hour")}`;
  }
  if (temporalDuration.minutes !== 0) {
    durationString += `${pluralizeTemporalDurationUnit(temporalDuration.minutes, "minute")}`;
  }
  if (temporalDuration.seconds !== 0) {
    durationString += `${pluralizeTemporalDurationUnit(temporalDuration.seconds, "second")}`;
  }
  if (durationString === "") {
    durationString += `${pluralizeTemporalDurationUnit(temporalDuration.seconds, "second")}`;
  }
  return durationString;
};
const pluralizeTemporalDurationUnit = (unit, type) => {
  if (unit === 1) {
    return `${unit} ${type}`;
  }
  return `${unit} ${type}s`;
};
function getAggregatorDisplayName(astNode, context) {
  const { aggregator, label } = astNode.namedChildren;
  if (label?.constant !== void 0 && label?.constant !== "") {
    return label?.constant;
  }
  const aggregatorName = aggregator.constant;
  if (isAggregatorOperator(aggregatorName)) {
    return getOperatorName(context.t, aggregatorName);
  }
  return aggregatorName;
}
function getFuzzyMatchComparatorDisplayName(astNode, context) {
  const fuzzyMatch = astNode.children[0];
  const left = fuzzyMatch.children[0];
  const right = fuzzyMatch.children[1];
  if (isUndefinedAstNode(left) && isUndefinedAstNode(right)) {
    return context.t("scenarios:edit_fuzzy_match.string_similarity");
  }
  const formatLeft = getAstNodeDisplayName(left, context) || "?";
  const formatRight = getAstNodeDisplayName(right, context) || "?";
  return `${formatLeft} ≈ ${formatRight}`;
}
function getTimestampExtractDisplayName(astNode, context) {
  const part = astNode.namedChildren["part"]?.constant ?? "";
  const timestamp = astNode.namedChildren["timestamp"];
  const timestampStr = getAstNodeDisplayName(timestamp, context);
  if (timestampStr === "") {
    return context.t("scenarios:edit_timestamp_extract.title");
  }
  return context.t("scenarios:edit_timestamp_extract.display_name", {
    replace: {
      operator: getOperatorName(context.t, part),
      timestamp: timestampStr
    }
  });
}
function getIpHasFlagDisplayName(astNode, context) {
  const flag = astNode.namedChildren["flag"]?.constant ?? "";
  const ip = astNode.namedChildren["ip"];
  const ipStr = getAstNodeDisplayName(ip, context);
  if (ipStr === "") {
    return context.t("scenarios:edit_ip_has_flag.title");
  }
  return context.t("scenarios:edit_ip_has_flag.display_name", {
    replace: {
      flag: getOperatorName(context.t, flag),
      ip: ipStr
    }
  });
}
function getIsMultipleOfDisplayName(astNode, context) {
  const value = astNode.namedChildren.value;
  const divider = astNode.namedChildren.divider.constant;
  const valueStr = getAstNodeDisplayName(value, context);
  if (valueStr === "") {
    return context.t("scenarios:edit_is_multiple_of.title");
  }
  return context.t("scenarios:edit_is_multiple_of.display_name", {
    replace: {
      value: valueStr,
      divider: formatNumber(divider, {
        language: context.language,
        style: void 0
      })
    }
  });
}
function getStringTemplateDisplayName(astNode, context) {
  const value = astNode.children[0]?.constant ?? "";
  if (!value) {
    return context.t("scenarios:edit_string_template.title");
  }
  return value;
}
function getMonitoringListCheckDisplayName(astNode, context) {
  const config = astNode.namedChildren.config.constant;
  const objectTableName = config.targetTableName;
  const topicFilters = config.topicFilters;
  if (!objectTableName) {
    return context.t("scenarios:monitoring_list_check.title");
  }
  if (topicFilters.length === 0) {
    return context.t("scenarios:monitoring_list_check.display_name_any", {
      replace: { objectTableName }
    });
  }
  const categories = topicsToCategories(topicFilters);
  const hitTypes = categories.map(
    (category) => context.t(`scenarios:monitoring_list_check.hit_type.${SCREENING_CATEGORY_I18N_KEY_MAP[category]}`)
  ).join(", ");
  return context.t("scenarios:monitoring_list_check.display_name", {
    replace: { hitTypes, objectTableName }
  });
}
function formatReturnValue(returnValue, config) {
  if (returnValue?.isOmitted === false) {
    return formatConstant(returnValue.value, config);
  }
  return void 0;
}
function adaptBooleanOrNullReturnValue(returnValue) {
  if (typeof returnValue.value === "boolean" || returnValue.value === null) {
    return { value: returnValue.value, isBooleanOrNull: true };
  }
  return { isBooleanOrNull: false };
}
export {
  aggregatorOperators as a,
  aggregatorHasParams as b,
  adaptBooleanOrNullReturnValue as c,
  getOperatorName as d,
  isPerformanceHeavyAggregator as e,
  formatReturnValue as f,
  getAstNodeDisplayName as g,
  e$1 as h,
  isRestrictedAggregator as i,
  e as j,
  getDataAccessorDisplayName as k,
  formatConstant as l,
  e$2 as m,
  timeAddOperators as t
};

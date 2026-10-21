import { M as reactExports, Q as jsxRuntimeExports } from "./server.mjs";
import { D as DEFAULT_CLUSTER_THRESHOLD } from "./graph-CqpSMa0d.mjs";
import { u as useGetGenerateGraphQuery } from "./generate-graph-DPfNXSLe.mjs";
import { u as useListGraphRelationsQuery } from "./list-relations-Wj5vBboU.mjs";
import { u as useDataModel } from "./data-model-Dfj0lN5a.mjs";
import { z as zt, c as createSimpleContext } from "./create-context-k6HmQ6bB.mjs";
import { u as useTranslation } from "./Tabs-CzpyUi7T.mjs";
import { t as toggle } from "./array-BFSjnO9c.mjs";
function personTableNames(dataModel) {
  return dataModel.filter((table) => table.semanticType === "person").map((table) => table.name);
}
function tableFilterOptions(dataModel) {
  return dataModel.map((table) => ({ value: table.name, label: table.alias || table.name })).sort((a, b) => a.label.localeCompare(b.label));
}
function relationGroupsFromRelations(relations) {
  const groups = /* @__PURE__ */ new Map();
  for (const relation of relations) {
    if (!groups.has(relation.groupId)) {
      groups.set(relation.groupId, { value: relation.groupId, label: relation.label });
    }
  }
  return [...groups.values()].sort((a, b) => a.label.localeCompare(b.label));
}
function sortedJoin(values) {
  return [...values].sort((a, b) => a.localeCompare(b)).join(",");
}
function toGenerateGraphFilterParams(input) {
  const types = sortedJoin(input.selectedTableNames);
  if (input.selectedRelationGroupIds == null) return { types };
  return { types, same_field_relations: sortedJoin(input.selectedRelationGroupIds) };
}
function graphFilterParamsEqual(left, right) {
  return left.types === right.types && left.same_field_relations === right.same_field_relations;
}
const GRAPH_DEGREE_OPTIONS = [1, 2, 3, 4, 5];
const DEFAULT_GRAPH_DEGREES = 2;
function isGraphDegree(value) {
  return GRAPH_DEGREE_OPTIONS.includes(value);
}
const GraphSessionContext = createSimpleContext("GraphSession");
const useGraphSession = GraphSessionContext.useValue;
function toLoadedRecord(record) {
  if (!record) return null;
  const recordId = record.recordId.trim();
  if (!record.recordType || !recordId) return null;
  return { recordType: record.recordType, recordId };
}
function GraphSessionProvider({
  children,
  initialRecord
}) {
  const { t } = useTranslation(["common"]);
  const dataModel = useDataModel();
  const seed = toLoadedRecord(initialRecord);
  const initialTableNames = personTableNames(dataModel);
  const [recordType, setRecordType] = reactExports.useState(seed?.recordType ?? "");
  const [recordId, setRecordId] = reactExports.useState(seed?.recordId ?? "");
  const [degrees, setDegrees] = reactExports.useState(DEFAULT_GRAPH_DEGREES);
  const [committedDegrees, setCommittedDegrees] = reactExports.useState(DEFAULT_GRAPH_DEGREES);
  const [loadedRecord, setLoadedRecord] = reactExports.useState(seed);
  const [selectedTableNames, setSelectedTableNames] = reactExports.useState(initialTableNames);
  const [relationGroupSelection, setRelationGroupSelection] = reactExports.useState(null);
  const [committedFilterParams, setCommittedFilterParams] = reactExports.useState(
    () => toGenerateGraphFilterParams({ selectedTableNames: initialTableNames, selectedRelationGroupIds: null })
  );
  const [showRiskScore, setShowRiskScore] = reactExports.useState(true);
  const [showTags, setShowTags] = reactExports.useState(false);
  const [showHypernodes, setShowHypernodes] = reactExports.useState(true);
  const [showEdgeLabels, setShowEdgeLabels] = reactExports.useState(false);
  const [clusterThreshold, setClusterThreshold] = reactExports.useState(DEFAULT_CLUSTER_THRESHOLD);
  const relationsQuery = useListGraphRelationsQuery();
  const relationGroups = reactExports.useMemo(() => relationGroupsFromRelations(relationsQuery.data ?? []), [relationsQuery.data]);
  const allGroupIds = reactExports.useMemo(() => relationGroups.map((group) => group.value), [relationGroups]);
  const activeGroupIds = reactExports.useMemo(
    () => relationGroupSelection?.filter((id) => allGroupIds.includes(id)) ?? null,
    [relationGroupSelection, allGroupIds]
  );
  const draftFilterParams = reactExports.useMemo(
    () => toGenerateGraphFilterParams({ selectedTableNames, selectedRelationGroupIds: activeGroupIds }),
    [selectedTableNames, activeGroupIds]
  );
  const isFilterDirty = !graphFilterParamsEqual(draftFilterParams, committedFilterParams);
  const { data, dataUpdatedAt, error, isFetching, refetch } = useGetGenerateGraphQuery(
    {
      recordType: loadedRecord?.recordType ?? "",
      recordId: loadedRecord?.recordId ?? "",
      degrees: committedDegrees,
      ...committedFilterParams
    },
    loadedRecord != null
  );
  reactExports.useEffect(() => {
    if (!error) return;
    zt.error(error.message ?? t("common:errors.unknown"));
  }, [error, t]);
  const loadGraph = reactExports.useCallback(() => {
    const trimmedRecordId = recordId.trim();
    if (!recordType || !trimmedRecordId) return;
    const sameFilters = graphFilterParamsEqual(draftFilterParams, committedFilterParams);
    const sameDegrees = degrees === committedDegrees;
    setCommittedFilterParams(draftFilterParams);
    setCommittedDegrees(degrees);
    if (loadedRecord?.recordType === recordType && loadedRecord?.recordId === trimmedRecordId) {
      if (sameFilters && sameDegrees) void refetch();
      return;
    }
    setLoadedRecord({ recordType, recordId: trimmedRecordId });
  }, [
    committedDegrees,
    committedFilterParams,
    degrees,
    draftFilterParams,
    loadedRecord,
    recordId,
    recordType,
    refetch
  ]);
  const refreshGraph = reactExports.useCallback(() => {
    setCommittedFilterParams(draftFilterParams);
  }, [draftFilterParams]);
  const toggleTableName = reactExports.useCallback((name) => {
    setSelectedTableNames((prev) => toggle(prev, name));
  }, []);
  const toggleRelationGroup = reactExports.useCallback(
    (groupId) => {
      setRelationGroupSelection((prev) => {
        const next = toggle(prev?.filter((id) => allGroupIds.includes(id)) ?? allGroupIds, groupId);
        return next.length === allGroupIds.length ? null : next;
      });
    },
    [allGroupIds]
  );
  const graphSettings = reactExports.useMemo(
    () => ({
      showRiskScore,
      onShowRiskScoreChange: setShowRiskScore,
      showTags,
      onShowTagsChange: setShowTags,
      showHypernodes,
      onShowHypernodesChange: setShowHypernodes,
      showEdgeLabels,
      onShowEdgeLabelsChange: setShowEdgeLabels,
      clusterThreshold,
      onClusterThresholdChange: setClusterThreshold
    }),
    [showRiskScore, showTags, showHypernodes, showEdgeLabels, clusterThreshold]
  );
  const value = reactExports.useMemo(
    () => ({
      recordType,
      setRecordType,
      recordId,
      setRecordId,
      degrees,
      setDegrees,
      graphData: data ?? null,
      graphGeneration: dataUpdatedAt,
      isGeneratingGraph: isFetching,
      loadGraph,
      selectedTableNames,
      toggleTableName,
      relationGroups,
      selectedRelationGroupIds: activeGroupIds ?? allGroupIds,
      toggleRelationGroup,
      isFilterDirty,
      refreshGraph,
      graphSettings
    }),
    [
      recordType,
      recordId,
      degrees,
      data,
      dataUpdatedAt,
      isFetching,
      loadGraph,
      selectedTableNames,
      toggleTableName,
      relationGroups,
      activeGroupIds,
      allGroupIds,
      toggleRelationGroup,
      isFilterDirty,
      refreshGraph,
      graphSettings
    ]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx(GraphSessionContext.Provider, { value, children });
}
export {
  GraphSessionProvider as G,
  GRAPH_DEGREE_OPTIONS as a,
  isGraphDegree as i,
  tableFilterOptions as t,
  useGraphSession as u
};

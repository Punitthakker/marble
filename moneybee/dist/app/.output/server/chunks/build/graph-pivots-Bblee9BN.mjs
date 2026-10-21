function createGraphTypeHelpers(dataModel) {
  const byName = new Map(dataModel.map((t) => [t.name, t]));
  return {
    isPersonType(objectType) {
      return byName.get(objectType)?.semanticType === "person";
    },
    getPersonSubEntity(objectType) {
      const table = byName.get(objectType);
      return table?.semanticType === "person" ? table.subEntity ?? "generic" : "generic";
    },
    getSemanticType(objectType) {
      return byName.get(objectType)?.semanticType ?? "other";
    }
  };
}
function isGraphEligiblePivot(pivot, dataModel) {
  if (!pivot.isIngested || !pivot.pivotObjectId) return false;
  return createGraphTypeHelpers(dataModel).isPersonType(pivot.pivotObjectName);
}
function getGraphEligiblePivots(pivotObjects, dataModel) {
  return pivotObjects.filter((pivot) => isGraphEligiblePivot(pivot, dataModel));
}
export {
  createGraphTypeHelpers as c,
  getGraphEligiblePivots as g,
  isGraphEligiblePivot as i
};

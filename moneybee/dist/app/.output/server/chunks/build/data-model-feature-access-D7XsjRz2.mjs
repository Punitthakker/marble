import { p as isGraphExplorationAvailable, h as hasAnyEntitlement, q as isDeleteDataModelPivotAvailable, r as isDeleteDataModelLinkAvailable, s as isDeleteDataModelFieldAvailable, t as isDeleteDataModelTableAvailable, u as isIngestDataAvailable, v as isCreateDataModelPivotAvailable, w as isCreateDataModelLinkAvailable, x as isEditDataModelFieldAvailable, y as isCreateDataModelFieldAvailable, z as isEditDataModelInfoAvailable, A as isCreateDataModelTableAvailable } from "./feature-access-BSdB6UiC.mjs";
import { L as isFlagActive, g as getServerEnv } from "./short-uuid-fTZYJj_k.mjs";
function dataModelFeatureAccessLoader(user, entitlements) {
  return {
    isCreateDataModelTableAvailable: isCreateDataModelTableAvailable(user),
    isEditDataModelInfoAvailable: isEditDataModelInfoAvailable(user),
    isCreateDataModelFieldAvailable: isCreateDataModelFieldAvailable(user),
    isEditDataModelFieldAvailable: isEditDataModelFieldAvailable(user),
    isCreateDataModelLinkAvailable: isCreateDataModelLinkAvailable(user),
    isCreateDataModelPivotAvailable: isCreateDataModelPivotAvailable(user),
    isIngestDataAvailable: isIngestDataAvailable(user),
    isDeleteDataModelTableAvailable: isDeleteDataModelTableAvailable(user),
    isDeleteDataModelFieldAvailable: isDeleteDataModelFieldAvailable(user),
    isDeleteDataModelLinkAvailable: isDeleteDataModelLinkAvailable(user),
    isDeleteDataModelPivotAvailable: isDeleteDataModelPivotAvailable(user),
    isIpGpsAvailable: hasAnyEntitlement(entitlements),
    isGraphExplorationEnabled: isFlagActive(getServerEnv("ENABLE_GRAPH_EXPLORATION"), user.organizationId),
    isGraphExplorationAvailable: isGraphExplorationAvailable(entitlements)
  };
}
export {
  dataModelFeatureAccessLoader as d
};

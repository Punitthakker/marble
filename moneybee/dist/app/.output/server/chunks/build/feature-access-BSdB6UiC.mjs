import { z as isAdmin } from "./services-middleware-nMulUXHZ.mjs";
const isAccessible = (featureAccess) => featureAccess !== "restricted" && featureAccess !== "missing_configuration";
const isRestricted = (featureAccess) => featureAccess === "restricted";
const isAnalyticsAvailable = ({ permissions }, entitlements) => isAccessible(entitlements.analytics) && permissions.canReadAnalytics;
const isReadUserAvailable = ({ role }) => role === "ADMIN" || role === "MARBLE_ADMIN";
const isInboxAdmin = ({ actorIdentity: { userId } }, inbox) => inbox.users.some((inboxUser) => inboxUser.userId === userId && inboxUser.role === "admin");
const canAccessInboxesSettings = (user, inboxes) => isAdmin(user) || inboxes.some((inbox) => isInboxAdmin(user, inbox));
const isReadTagAvailable = ({ role }) => role === "ADMIN" || role === "MARBLE_ADMIN";
const isReadApiKeyAvailable = ({ permissions }) => permissions.canReadApiKey;
const isReadWebhookAvailable = ({ permissions }) => permissions.canManageWebhooks;
const isCreateInboxAvailable = ({ permissions }) => permissions.canEditInboxes;
const isCreateDataModelTableAvailable = ({ permissions }) => permissions.canEditDataModel;
const isEditDataModelInfoAvailable = ({ permissions }) => permissions.canEditDataModel;
const isCreateDataModelFieldAvailable = ({ permissions }) => permissions.canEditDataModel;
const isEditDataModelFieldAvailable = ({ permissions }) => permissions.canEditDataModel;
const isCreateDataModelLinkAvailable = ({ permissions }) => permissions.canEditDataModel;
const isCreateDataModelPivotAvailable = ({ permissions }) => permissions.canEditDataModel;
const isIngestDataAvailable = ({ permissions }) => permissions.canIngestData;
const isDeleteDataModelTableAvailable = ({ permissions }) => permissions.canEditDataModel;
const isDeleteDataModelFieldAvailable = ({ permissions }) => permissions.canEditDataModel;
const isDeleteDataModelLinkAvailable = ({ permissions }) => permissions.canEditDataModel;
const isDeleteDataModelPivotAvailable = ({ permissions }) => permissions.canEditDataModel;
const isCreateListAvailable = ({ permissions }) => permissions.canManageList;
const isCreateListValueAvailable = ({ permissions }) => permissions.canManageListItem;
const isDeleteListValueAvailable = ({ permissions }) => permissions.canManageListItem;
const isEditListAvailable = ({ permissions }) => permissions.canManageList;
const isDeleteListAvailable = ({ permissions }) => permissions.canManageList;
const isEditScenarioAvailable = ({ permissions }) => permissions.canManageScenario;
const isManualTriggerScenarioAvailable = ({ permissions }) => permissions.canManageDecision;
const isWorkflowsAvailable = (entitlements) => isAccessible(entitlements.workflows);
const isDeploymentActionsAvailable = ({ permissions }) => permissions.canPublishScenario;
const isCreateDraftAvailable = ({ permissions }) => permissions.canManageScenario;
const isCreateApiKeyAvailable = ({ permissions }) => permissions.canCreateApiKey;
const isDeleteApiKeyAvailable = ({ permissions }) => permissions.canCreateApiKey;
const getInboxUserRoles = (entitlements) => isAccessible(entitlements.userRoles) ? ["admin", "member"] : ["admin"];
const isEditInboxAvailable = (user, inbox) => user.permissions.canEditInboxes || isInboxAdmin(user, inbox);
const isDeleteInboxAvailable = ({ permissions }) => permissions.canEditInboxes;
const isCreateInboxUserAvailable = (user, inbox) => user.permissions.canEditInboxes || isInboxAdmin(user, inbox);
const isEditInboxUserAvailable = (user, inbox) => user.permissions.canEditInboxes || isInboxAdmin(user, inbox);
const isDeleteInboxUserAvailable = (user, inbox) => user.permissions.canEditInboxes || isInboxAdmin(user, inbox);
const isCreateTagAvailable = ({ permissions }) => permissions.canEditInboxes;
const isEditTagAvailable = ({ permissions }) => permissions.canEditInboxes;
const isDeleteTagAvailable = ({ permissions }) => permissions.canEditInboxes;
const getUserRoles = (entitlements) => isAccessible(entitlements.userRoles) ? ["VIEWER", "BUILDER", "PUBLISHER", "ADMIN", "ANALYST"] : ["ADMIN"];
const isCreateUserAvailable = ({ permissions }) => permissions.canCreateUser;
const isEditUserAvailable = ({ permissions }) => permissions.canCreateUser;
const isDeleteUserAvailable = ({ permissions }) => permissions.canDeleteUser;
const isCreateWebhookAvailable = ({ permissions }) => permissions.canManageWebhooks;
const isEditWebhookAvailable = ({ permissions }) => permissions.canManageWebhooks;
const isDeleteWebhookAvailable = ({ permissions }) => permissions.canManageWebhooks;
const isAutoAssignmentAvailable = (entitlements) => isAccessible(entitlements.autoAssignment);
const hasAnyEntitlement = (entitlements) => Object.values(entitlements).some(isAccessible);
const isContinuousScreeningAvailable = (entitlements) => isAccessible(entitlements.continuousScreening);
const isScreeningSearchAvailable = (entitlements) => isAccessible(entitlements.sanctions) || isContinuousScreeningAvailable(entitlements);
const isLexisNexisAvailable = (entitlements) => isAccessible(entitlements.lexisnexis);
const isAiRuleBuildingAvailable = (entitlements) => isAccessible(entitlements.aiRuleBuilding);
const isUserScoringAvailable = (entitlements) => isAccessible(entitlements.userScoring);
const isGraphExplorationAvailable = (entitlements) => isAccessible(entitlements.graphExploration);
function getGraphExplorationDisplay({
  isGraphExplorationEnabled,
  isGraphExplorationAvailable: isGraphExplorationAvailable2
}) {
  if (!isGraphExplorationEnabled) return "hidden";
  if (!isGraphExplorationAvailable2) return "placeholder";
  return "graph";
}
export {
  isDeploymentActionsAvailable as $,
  isCreateDataModelTableAvailable as A,
  isAccessible as B,
  isDeleteUserAvailable as C,
  isEditUserAvailable as D,
  isCreateUserAvailable as E,
  getUserRoles as F,
  isDeleteListAvailable as G,
  isEditListAvailable as H,
  isDeleteListValueAvailable as I,
  isCreateListValueAvailable as J,
  isReadWebhookAvailable as K,
  isDeleteWebhookAvailable as L,
  isEditWebhookAvailable as M,
  isUserScoringAvailable as N,
  isManualTriggerScenarioAvailable as O,
  isLexisNexisAvailable as P,
  isAiRuleBuildingAvailable as Q,
  isDeleteInboxUserAvailable as R,
  isEditInboxUserAvailable as S,
  isCreateInboxUserAvailable as T,
  isDeleteInboxAvailable as U,
  isEditInboxAvailable as V,
  getInboxUserRoles as W,
  isCreateWebhookAvailable as X,
  isDeleteApiKeyAvailable as Y,
  isCreateApiKeyAvailable as Z,
  isWorkflowsAvailable as _,
  isAnalyticsAvailable as a,
  isCreateDraftAvailable as a0,
  isCreateListAvailable as a1,
  getGraphExplorationDisplay as a2,
  isRestricted as a3,
  isContinuousScreeningAvailable as b,
  isEditScenarioAvailable as c,
  isInboxAdmin as d,
  isReadTagAvailable as e,
  isDeleteTagAvailable as f,
  isEditTagAvailable as g,
  hasAnyEntitlement as h,
  isReadUserAvailable as i,
  isCreateTagAvailable as j,
  isCreateInboxAvailable as k,
  isAutoAssignmentAvailable as l,
  isScreeningSearchAvailable as m,
  canAccessInboxesSettings as n,
  isReadApiKeyAvailable as o,
  isGraphExplorationAvailable as p,
  isDeleteDataModelPivotAvailable as q,
  isDeleteDataModelLinkAvailable as r,
  isDeleteDataModelFieldAvailable as s,
  isDeleteDataModelTableAvailable as t,
  isIngestDataAvailable as u,
  isCreateDataModelPivotAvailable as v,
  isCreateDataModelLinkAvailable as w,
  isEditDataModelFieldAvailable as x,
  isCreateDataModelFieldAvailable as y,
  isEditDataModelInfoAvailable as z
};

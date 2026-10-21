import { Q as jsxRuntimeExports, M as reactExports, a0 as ClientOnly } from "./server.mjs";
import { u as useTranslation, I as Icon } from "./Tabs-CzpyUi7T.mjs";
import { a2 as M } from "./services-middleware-nMulUXHZ.mjs";
import { aI as Route$n, E as ErrorComponent } from "./router-KSC-NEr8.mjs";
import { u as useListRulesQuery, c as createWorkflowRuleFn, d as deleteWorkflowRuleFn, r as reorderWorkflowsFn } from "./list-rules-Co9PNGqZ.mjs";
import { u as useQueryClient } from "./query-BmG5BEas.mjs";
import { u as useMutation } from "./useMutation-BOdeDeAR.mjs";
import { u as useServerFn } from "./useServerFn-oRH5Nw97.mjs";
import { z as zt } from "./create-context-k6HmQ6bB.mjs";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "./use-callback-ref-DoQNLci-.mjs";
import "./sharpstate.es-C0BW2AZi.mjs";
import "./formatDistanceStrict-DEEeAR-Y.mjs";
import "./short-uuid-fTZYJj_k.mjs";
import "node:crypto";
import "./security-headers.server-BdP3HrPp.mjs";
import "./ThemeContext-DjRULCu0.mjs";
import "./config--RFGchua.mjs";
import "./i18n-instance-store-UssbGYOM.mjs";
import "./auth-middleware-eNRVfU3l.mjs";
import "./logger.server-DV14d0iZ.mjs";
import "node:os";
import "node:events";
import "node:diagnostics_channel";
import "fs";
import "events";
import "path";
import "assert";
import "worker_threads";
import "module";
import "node:fs";
import "node:path";
import "node:url";
import "url";
import "buffer";
import "./data-model-feature-access-D7XsjRz2.mjs";
import "./feature-access-BSdB6UiC.mjs";
import "./datetime-insWKNBy.mjs";
import "./case-detail-middleware-iDVIrW-c.mjs";
import "./inboxes-D556s0BB.mjs";
import "./input-validation-D4mgQsey.mjs";
import "./async-C3pYACua.mjs";
import "./coerce-UidCu_Sb.mjs";
import "./files-fO9wUXBf.mjs";
import "./decisions--eKWwSYj.mjs";
import "./unique-cniTya2T.mjs";
import "./graph-pivots-Bblee9BN.mjs";
import "./scenarios-C5R2TE8p.mjs";
import "./update-workflow-rule-D3RfDBaF.mjs";
import "./isDeepEqual-DU8kSW6f.mjs";
import "./useQuery-Bb0AEcpf.mjs";
import "./useBaseQuery-BqF2iw7Y.mjs";
function useCreateRuleMutation() {
  const createWorkflowRule = useServerFn(createWorkflowRuleFn);
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (input) => {
      await createWorkflowRule({ data: input });
      return input;
    },
    onSuccess: ({ scenarioId }) => {
      queryClient.invalidateQueries({ queryKey: ["workflow-rules", scenarioId] });
    }
  });
}
function useDeleteRuleMutation() {
  const deleteWorkflowRule = useServerFn(deleteWorkflowRuleFn);
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ ruleId, scenarioId }) => {
      await deleteWorkflowRule({ data: { ruleId } });
      return { ruleId, scenarioId };
    },
    onSuccess: ({ scenarioId }) => {
      queryClient.invalidateQueries({
        queryKey: ["workflow-rules", scenarioId]
      });
    }
  });
}
function useReorderRulesMutation() {
  const reorderWorkflows = useServerFn(reorderWorkflowsFn);
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ scenarioId, ruleIds }) => {
      queryClient.setQueryData(["workflow-rules", scenarioId], (oldData) => {
        if (!oldData?.workflow) return oldData;
        const ruleMap = new Map(oldData.workflow.map((rule) => [rule.id, rule]));
        const reorderedRules = ruleIds.map((id) => ruleMap.get(id)).filter(Boolean);
        return { ...oldData, workflow: reorderedRules };
      });
      try {
        await reorderWorkflows({ data: { scenarioId, ruleIds } });
      } catch {
        queryClient.invalidateQueries({ queryKey: ["workflow-rules", scenarioId] });
        throw new Error("Failed to reorder rules");
      }
      return { scenarioId, ruleIds };
    },
    onSuccess: ({ scenarioId }) => {
      queryClient.invalidateQueries({ queryKey: ["workflow-rules", scenarioId] });
    }
  });
}
const WorkflowContext = reactExports.createContext(null);
function WorkflowProvider({
  children,
  scenarioId,
  dataModel,
  workflowDataFeatureAccess
}) {
  const { t } = useTranslation(["workflows"]);
  const rulesQuery = useListRulesQuery(scenarioId);
  const createRuleMutation = useCreateRuleMutation();
  const deleteRuleMutation = useDeleteRuleMutation();
  const reorderRulesMutation = useReorderRulesMutation();
  const [ruleOrder, setRuleOrder] = reactExports.useState([]);
  const [isDragging, setIsDragging] = reactExports.useState(false);
  const [justReordered, setJustReordered] = reactExports.useState(false);
  const [shouldScrollToBottom, setShouldScrollToBottom] = reactExports.useState(false);
  const [editingRuleId, setEditingRuleId] = reactExports.useState(null);
  const [deleteModalOpen, setDeleteModalOpen] = reactExports.useState(false);
  const [ruleToDelete, setRuleToDelete] = reactExports.useState(null);
  reactExports.useEffect(() => {
    if (rulesQuery.data?.workflow && !justReordered) {
      const order = rulesQuery.data.workflow.map((rule) => rule.id);
      setRuleOrder(order);
    }
  }, [rulesQuery.data?.workflow, justReordered]);
  const createRule = async () => {
    try {
      await createRuleMutation.mutateAsync({
        scenarioId,
        name: "New Rule",
        fallthrough: false
      });
      setShouldScrollToBottom(true);
    } catch (error) {
      console.error("Failed to create rule:", error);
      zt.error("Failed to create rule");
    }
  };
  const deleteRule = (ruleId, ruleName) => {
    setRuleToDelete({ id: ruleId, name: ruleName });
    setDeleteModalOpen(true);
  };
  const confirmDeleteRule = async () => {
    if (!ruleToDelete) return;
    try {
      await deleteRuleMutation.mutateAsync({
        ruleId: ruleToDelete.id,
        scenarioId
      });
      setDeleteModalOpen(false);
      setRuleToDelete(null);
    } catch (error) {
      console.error("Failed to delete rule:", error);
      zt.error("Failed to delete rule");
    }
  };
  const cancelDeleteRule = () => {
    setDeleteModalOpen(false);
    setRuleToDelete(null);
  };
  const reorderRules = async (sourceIndex, destinationIndex) => {
    const newOrder = Array.from(ruleOrder);
    const [reorderedItem] = newOrder.splice(sourceIndex, 1);
    if (reorderedItem) {
      newOrder.splice(destinationIndex, 0, reorderedItem);
      setRuleOrder(newOrder);
      setJustReordered(true);
      try {
        await reorderRulesMutation.mutateAsync({
          scenarioId,
          ruleIds: newOrder
        });
        setJustReordered(false);
      } catch (error) {
        console.error("Failed to reorder rules:", error);
        if (rulesQuery.data?.workflow) {
          setRuleOrder(rulesQuery.data.workflow.map((rule) => rule.id));
        }
        setJustReordered(false);
        zt.error(t("workflows:rules_reorder.toast.error"));
      }
    }
  };
  const value = {
    // Data
    rules: rulesQuery.data?.workflow || [],
    dataModel,
    workflowDataFeatureAccess,
    triggerObjectType: rulesQuery.data?.triggerObjectType,
    isLoading: rulesQuery.isLoading,
    isError: rulesQuery.isError,
    error: rulesQuery.error,
    scenarioId,
    // State
    ruleOrder,
    isDragging,
    shouldScrollToBottom,
    editingRuleId,
    // Modal state
    deleteModalOpen,
    ruleToDelete,
    // Workflow-level actions only
    createRule,
    deleteRule,
    confirmDeleteRule,
    cancelDeleteRule,
    reorderRules,
    // Drag and drop
    setIsDragging,
    setShouldScrollToBottom,
    setDeleteModalOpen,
    // Editing state
    setEditingRuleId
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(WorkflowContext.Provider, { value, children });
}
function useWorkflow() {
  const context = reactExports.useContext(WorkflowContext);
  if (!context) {
    throw new Error("useWorkflow must be used within a WorkflowProvider");
  }
  return context;
}
function WorkflowContent() {
  const {
    t
  } = useTranslation(["common"]);
  const {
    isLoading,
    isError,
    error
  } = useWorkflow();
  return M({
    isLoading,
    isError
  }).with({
    isError: true
  }, () => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(ErrorComponent, { error });
  }).with({
    isLoading: true
  }, () => {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center h-full w-full text-purple-hover gap-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "spinner", className: "size-10 animate-spin" }),
      t("common:loading")
    ] });
  }).otherwise(() => /* @__PURE__ */ jsxRuntimeExports.jsx(ClientOnly, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {}) }));
}
function WorkflowPage() {
  const {
    scenarioId,
    dataModel,
    workflowFeatureAccess
  } = Route$n.useLoaderData();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(WorkflowProvider, { scenarioId, dataModel, workflowDataFeatureAccess: workflowFeatureAccess, children: /* @__PURE__ */ jsxRuntimeExports.jsx(WorkflowContent, {}) });
}
export {
  WorkflowPage as component
};

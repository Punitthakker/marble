import { cs as hasInProgressScheduledExecution } from "./services-middleware-nMulUXHZ.mjs";
import { l as listScheduledExecutionsFn } from "./decisions-BECqiOw3.mjs";
import { u as useQuery } from "./useQuery-Bb0AEcpf.mjs";
import { u as useServerFn } from "./useServerFn-oRH5Nw97.mjs";
const SCHEDULED_EXECUTIONS_REFETCH_INTERVAL_MS = 1e3;
function getScheduledExecutionsRefetchInterval(executions) {
  return hasInProgressScheduledExecution(executions) ? SCHEDULED_EXECUTIONS_REFETCH_INTERVAL_MS : false;
}
function useListScheduleExecutions({
  scenarioId,
  initialData,
  refetchInterval
} = {}) {
  const listScheduledExecutions = useServerFn(listScheduledExecutionsFn);
  return useQuery({
    queryKey: ["decisions", "list-scheduled-executions", { scenarioId }],
    queryFn: () => listScheduledExecutions({ data: { scenarioId } }),
    initialData,
    refetchInterval
  });
}
export {
  getScheduledExecutionsRefetchInterval as g,
  useListScheduleExecutions as u
};

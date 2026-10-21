import { as as updateScenarioFn } from "./router-KSC-NEr8.mjs";
import { u as useMutation } from "./useMutation-BOdeDeAR.mjs";
import { u as useServerFn } from "./useServerFn-oRH5Nw97.mjs";
const useUpdateScenarioMutation = () => {
  const updateScenario = useServerFn(updateScenarioFn);
  return useMutation({
    mutationKey: ["scenarios", "update"],
    mutationFn: async (data) => updateScenario({ data })
  });
};
export {
  useUpdateScenarioMutation as u
};

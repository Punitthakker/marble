import { o as createNavigationOptionFn } from "./data-9UajV2HK.mjs";
import { f as fromUUIDtoSUUID } from "./short-uuid-fTZYJj_k.mjs";
import { u as useQueryClient } from "./query-BmG5BEas.mjs";
import { u as useMutation } from "./useMutation-BOdeDeAR.mjs";
import { u as useServerFn } from "./useServerFn-oRH5Nw97.mjs";
const useCreateNavigationOptionMutation = (tableId) => {
  const createNavigationOption = useServerFn(createNavigationOptionFn);
  return useMutation({
    mutationKey: ["data", "create-navigation-option"],
    mutationFn: async (value) => createNavigationOption({ data: { tableId, ...value } })
  });
};
const useCreateNavigationOptionForAstMutation = () => {
  const queryClient = useQueryClient();
  const createNavigationOption = useServerFn(createNavigationOptionFn);
  return useMutation({
    mutationKey: ["data", "create-navigation-option"],
    mutationFn: async ({ tableId, scenarioId: _, ...value }) => createNavigationOption({ data: { tableId, ...value } }),
    onSuccess: (_, { scenarioId }) => {
      queryClient.invalidateQueries({
        queryKey: ["resources", "builder-options", fromUUIDtoSUUID(scenarioId)]
      });
    }
  });
};
export {
  useCreateNavigationOptionMutation as a,
  useCreateNavigationOptionForAstMutation as u
};

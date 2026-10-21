import { t as closeCaseFn, v as openCaseFn } from "./cases-C-fVFrVL.mjs";
import { u as useQueryClient } from "./query-BmG5BEas.mjs";
import { u as useMutation } from "./useMutation-BOdeDeAR.mjs";
import { u as useServerFn } from "./useServerFn-oRH5Nw97.mjs";
const useCloseCaseMutation = () => {
  const closeCase = useServerFn(closeCaseFn);
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["cases", "close-case"],
    mutationFn: async (payload) => closeCase({ data: payload }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cases"] });
    }
  });
};
const useOpenCaseMutation = () => {
  const openCase = useServerFn(openCaseFn);
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["cases", "open-case"],
    mutationFn: async (payload) => openCase({ data: payload }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cases"] });
    }
  });
};
export {
  useOpenCaseMutation as a,
  useCloseCaseMutation as u
};

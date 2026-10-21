import { w as addCommentFn } from "./cases-C-fVFrVL.mjs";
import { u as useQueryClient } from "./query-BmG5BEas.mjs";
import { u as useMutation } from "./useMutation-BOdeDeAR.mjs";
import { u as useServerFn } from "./useServerFn-oRH5Nw97.mjs";
import { s as serialize } from "./Time-CKTfEtti.mjs";
const useAddCommentMutation = () => {
  const addComment = useServerFn(addCommentFn);
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["cases", "add-comment"],
    mutationFn: async (payload) => addComment({ data: serialize(payload, { indices: true }) }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cases"] });
    }
  });
};
export {
  useAddCommentMutation as u
};

import { k as refineScreeningFn, m as searchScreeningMatchesFn } from "./screenings-C_YbbaUO.mjs";
import { u as useMutation } from "./useMutation-BOdeDeAR.mjs";
import { u as useServerFn } from "./useServerFn-oRH5Nw97.mjs";
const useRefineScreeningMutation = () => {
  const refineScreening = useServerFn(refineScreeningFn);
  return useMutation({
    mutationFn: async (formValues) => {
      return refineScreening({ data: formValues });
    }
  });
};
const useSearchScreeningMatchesMutation = () => {
  const searchScreeningMatches = useServerFn(searchScreeningMatchesFn);
  return useMutation({
    mutationFn: async (formValues) => {
      return searchScreeningMatches({ data: formValues });
    }
  });
};
export {
  useSearchScreeningMatchesMutation as a,
  useRefineScreeningMutation as u
};

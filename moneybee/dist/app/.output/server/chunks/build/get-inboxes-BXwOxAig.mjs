import { e as getInboxesFn } from "./cases-C-fVFrVL.mjs";
import { u as useQuery } from "./useQuery-Bb0AEcpf.mjs";
import { u as useServerFn } from "./useServerFn-oRH5Nw97.mjs";
const useGetInboxesQuery = () => {
  const getInboxes = useServerFn(getInboxesFn);
  return useQuery({
    queryKey: ["cases", "inboxes"],
    queryFn: async () => {
      return getInboxes();
    }
  });
};
export {
  useGetInboxesQuery as u
};

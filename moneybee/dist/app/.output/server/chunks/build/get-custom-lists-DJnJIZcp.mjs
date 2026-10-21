import { g as getListsFn } from "./lists-CwYzskHN.mjs";
import { u as useQuery } from "./useQuery-Bb0AEcpf.mjs";
import { u as useServerFn } from "./useServerFn-oRH5Nw97.mjs";
function useGetCustomListsQuery() {
  const getLists = useServerFn(getListsFn);
  return useQuery({
    queryKey: ["custom-lists"],
    queryFn: () => getLists()
  });
}
export {
  useGetCustomListsQuery as u
};

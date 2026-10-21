import { l as listGraphRelationsFn } from "./graph-CqpSMa0d.mjs";
import { u as useQuery } from "./useQuery-Bb0AEcpf.mjs";
import { u as useServerFn } from "./useServerFn-oRH5Nw97.mjs";
const graphRelationsQueryKey = ["graph", "relations"];
function useListGraphRelationsQuery() {
  const listGraphRelations = useServerFn(listGraphRelationsFn);
  return useQuery({
    queryKey: graphRelationsQueryKey,
    queryFn: async () => listGraphRelations()
  });
}
export {
  graphRelationsQueryKey as g,
  useListGraphRelationsQuery as u
};

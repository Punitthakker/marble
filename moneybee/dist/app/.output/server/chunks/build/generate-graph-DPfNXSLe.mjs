import { g as generateGraphFn } from "./graph-CqpSMa0d.mjs";
import { u as useQuery } from "./useQuery-Bb0AEcpf.mjs";
import { u as useServerFn } from "./useServerFn-oRH5Nw97.mjs";
function useGetGenerateGraphQuery(payload, enabled = true) {
  const generateGraph = useServerFn(generateGraphFn);
  return useQuery({
    queryKey: [
      "graph",
      "generate",
      payload.recordType,
      payload.recordId,
      payload.degrees,
      payload.types,
      payload.skip_same_field_relations,
      payload.same_field_relations
    ],
    queryFn: async () => generateGraph({ data: payload }),
    enabled: enabled && !!payload.recordType && !!payload.recordId,
    refetchOnWindowFocus: false,
    retry: false
  });
}
export {
  useGetGenerateGraphQuery as u
};

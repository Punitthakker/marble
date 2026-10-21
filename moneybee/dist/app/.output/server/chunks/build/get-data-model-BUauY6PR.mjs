import { a as getDataModelFn } from "./data-9UajV2HK.mjs";
import { u as useQuery } from "./useQuery-Bb0AEcpf.mjs";
import { u as useServerFn } from "./useServerFn-oRH5Nw97.mjs";
const DATA_MODEL_QUERY_KEY = ["data-model"];
const useDataModelQuery = () => {
  const getDataModel = useServerFn(getDataModelFn);
  return useQuery({
    queryKey: DATA_MODEL_QUERY_KEY,
    queryFn: async () => getDataModel({})
  });
};
export {
  useDataModelQuery as u
};

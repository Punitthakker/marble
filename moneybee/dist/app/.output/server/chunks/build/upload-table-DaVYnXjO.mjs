import { c as getUploadLogsFn } from "./data-9UajV2HK.mjs";
import { u as useQuery } from "./useQuery-Bb0AEcpf.mjs";
import { u as useServerFn } from "./useServerFn-oRH5Nw97.mjs";
const useUploadTableQuery = (tableName, enabled, options = {}) => {
  const getUploadLogs = useServerFn(getUploadLogsFn);
  return useQuery({
    queryKey: ["ingestion", "upload-logs", tableName],
    queryFn: async () => getUploadLogs({ data: { objectType: tableName } }),
    enabled,
    refetchInterval: options.refetchInterval
  });
};
export {
  useUploadTableQuery as u
};

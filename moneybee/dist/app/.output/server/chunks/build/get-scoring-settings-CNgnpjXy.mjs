import { g as getScoringSettingsFn } from "./scoring-BqfH8vO5.mjs";
import { u as useQuery } from "./useQuery-Bb0AEcpf.mjs";
import { u as useServerFn } from "./useServerFn-oRH5Nw97.mjs";
const useGetScoringSettingsQuery = (enabled = true) => {
  const getScoringSettings = useServerFn(getScoringSettingsFn);
  return useQuery({
    queryKey: ["scoring", "settings"],
    queryFn: () => getScoringSettings(),
    staleTime: 5 * 60 * 1e3,
    enabled
  });
};
export {
  useGetScoringSettingsQuery as u
};

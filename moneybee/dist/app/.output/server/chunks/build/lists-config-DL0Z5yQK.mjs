import { $ as t$a, b0 as buildDatasetKey } from "./services-middleware-nMulUXHZ.mjs";
import { g as getListConfigFn } from "./screenings-C_YbbaUO.mjs";
import { u as useQuery } from "./useQuery-Bb0AEcpf.mjs";
import { u as useServerFn } from "./useServerFn-oRH5Nw97.mjs";
function groupBySection(datasets, name) {
  return Object.entries(t$a(datasets, (d) => d.section ?? d.name)).map(([section, items]) => ({
    name: buildDatasetKey(name, section),
    title: section,
    datasets: items.map(({ name: name2, title }) => ({ name: name2, title })).sort((a, b) => a.title.localeCompare(b.title))
  })).sort((a, b) => a.name.localeCompare(b.name));
}
function normalizeListConfig(config) {
  function normalize(section, name) {
    if (!section) return void 0;
    const adaptedSection = {
      topics: section.topics ? Object.fromEntries(
        Object.entries(section.topics).map(([key, value]) => [
          key,
          value.map((t2) => ({ name: t2.name, title: t2.title })).sort((a, b) => a.title.localeCompare(b.title))
        ])
      ) : void 0,
      datasets: Array.isArray(section?.datasets) ? groupBySection(section.datasets, name) : void 0
    };
    if (config.conditional_filters && section.topics) {
      for (const cf of config.conditional_filters) {
        if (cf.key && cf.key in section.topics) {
          adaptedSection.conditionalTopics ??= {};
          adaptedSection.conditionalTopics[cf.name] = {
            items: cf.topics.map((t2) => ({
              name: t2.name,
              key: t2.name,
              title: t2.title
            })),
            dependsOn: cf.key
          };
        }
      }
    }
    return adaptedSection;
  }
  if (!config) return { filters: {}, provider: "opensanctions" };
  return {
    filters: {
      sanctions: normalize(config.sections.sanctions, "sanctions"),
      peps: normalize(config.sections.peps, "peps"),
      "adverse-media": normalize(config.sections.adverse_media, "adverse-media"),
      "third-parties": normalize(config.sections.other, "third-parties"),
      custom: normalize(config.sections.custom, "custom"),
      global: normalize(config.sections.global, "global")
    },
    provider: config.provider
  };
}
const useListConfigQuery = (useCase) => {
  const getListConfig = useServerFn(getListConfigFn);
  return useQuery({
    queryKey: ["screening", "datasets", useCase],
    queryFn: async () => {
      const result = await getListConfig({ data: { feature: useCase } });
      return normalizeListConfig(result);
    }
  });
};
export {
  normalizeListConfig as n,
  useListConfigQuery as u
};

import { b as getAnnotationsFn } from "./data-9UajV2HK.mjs";
import { u as useQuery } from "./useQuery-Bb0AEcpf.mjs";
import { u as useServerFn } from "./useServerFn-oRH5Nw97.mjs";
const EMPTY_GROUPED_ANNOTATIONS = {
  comments: [],
  tags: [],
  files: [],
  risk_tags: []
};
const useGetAnnotationsQuery = (objectType, objectId, loadThumbnails = false, enabled = true) => {
  const getAnnotations = useServerFn(getAnnotationsFn);
  return useQuery({
    queryKey: ["annotations", objectType, objectId, loadThumbnails],
    queryFn: async () => {
      const result = await getAnnotations({ data: { objectType, objectId, loadThumbnails } });
      return result ?? { annotations: EMPTY_GROUPED_ANNOTATIONS };
    },
    enabled: enabled && !!objectType && !!objectId
  });
};
export {
  useGetAnnotationsQuery as u
};

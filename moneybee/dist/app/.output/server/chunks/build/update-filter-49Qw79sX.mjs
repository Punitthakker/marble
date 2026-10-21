import { p as deleteExportedFieldFn, q as updateExportedFieldFn } from "./settings-vUgGED-h.mjs";
import { u as useMutation } from "./useMutation-BOdeDeAR.mjs";
import { u as useServerFn } from "./useServerFn-oRH5Nw97.mjs";
const useDeleteFilterMutation = () => {
  const deleteExportedField = useServerFn(deleteExportedFieldFn);
  return useMutation({
    mutationKey: ["settings", "data-model", "exported-fields", "delete"],
    mutationFn: async ({ tableId, payload }) => deleteExportedField({ data: { ...payload, tableId } })
  });
};
const useCreateFilterMutation = () => {
  const updateExportedField = useServerFn(updateExportedFieldFn);
  return useMutation({
    mutationKey: ["settings", "data-model", "exported-fields", "create"],
    mutationFn: async ({ tableId, payload }) => updateExportedField({ data: { ...payload, tableId } })
  });
};
export {
  useDeleteFilterMutation as a,
  useCreateFilterMutation as u
};

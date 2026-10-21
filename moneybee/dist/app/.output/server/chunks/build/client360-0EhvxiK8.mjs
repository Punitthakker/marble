import { o as object, s as string, _ as _enum, u as uuid } from "./short-uuid-fTZYJj_k.mjs";
const semanticTypes = ["person", "company"];
const client360SearchPayloadSchema = object({
  table: string(),
  terms: string()
});
const addConfigurationPayloadSchema = object({
  tableId: uuid(),
  semanticType: _enum(semanticTypes),
  captionField: string().min(1),
  alias: string().optional()
});
export {
  addConfigurationPayloadSchema as a,
  client360SearchPayloadSchema as c
};

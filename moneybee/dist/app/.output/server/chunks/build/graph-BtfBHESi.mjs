import { o as object, s as string, b as boolean, n as number, u as uuid } from "./short-uuid-fTZYJj_k.mjs";
const createGraphRelationPayloadSchema = object({
  /** Omit to create a new group; the response carries the group id to reuse for the next relations. */
  groupId: uuid().optional(),
  label: string().min(1),
  leftType: string().min(1),
  leftField: string().min(1),
  rightType: string().min(1),
  rightField: string().min(1)
});
const deleteGraphRelationPayloadSchema = object({
  relationId: uuid()
});
const generateGraphPayloadSchema = object({
  recordType: string().min(1),
  recordId: string().min(1),
  degrees: number().int().min(1).max(5).optional(),
  types: string().optional(),
  skip_same_field_relations: boolean().optional(),
  same_field_relations: string().optional()
});
export {
  createGraphRelationPayloadSchema as c,
  deleteGraphRelationPayloadSchema as d,
  generateGraphPayloadSchema as g
};

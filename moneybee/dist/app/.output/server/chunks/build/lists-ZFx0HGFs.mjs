import { o as object, _ as _enum, s as string, u as uuid, l as literal, F as ipv4, G as ipv6, i as union, D as cidrv4, E as cidrv6 } from "./short-uuid-fTZYJj_k.mjs";
const createListPayloadSchema = object({
  name: string().nonempty(),
  description: string(),
  kind: _enum(["text", "cidrs"])
});
const deleteListPayloadSchema = object({
  listId: uuid()
});
const editListPayloadSchema = object({
  listId: uuid(),
  name: string().nonempty(),
  description: string()
});
const cidrValueSchema = union([cidrv4(), cidrv6(), ipv4(), ipv6()]);
function normalizeCidr(value) {
  const trimmed = value.trim();
  if (trimmed.includes("/")) return trimmed;
  if (ipv4().safeParse(trimmed).success) return `${trimmed}/32`;
  if (ipv6().safeParse(trimmed).success) return `${trimmed}/128`;
  return trimmed;
}
const addValuePayloadSchema = object({
  listId: uuid(),
  value: string().nonempty(),
  kind: _enum(["text", "cidrs"])
});
const addCidrValuePayloadSchema = object({
  listId: uuid(),
  value: cidrValueSchema,
  kind: literal("cidrs")
});
const deleteValuePayloadSchema = object({
  listId: uuid(),
  listValueId: uuid()
});
export {
  addValuePayloadSchema as a,
  deleteValuePayloadSchema as b,
  createListPayloadSchema as c,
  deleteListPayloadSchema as d,
  editListPayloadSchema as e,
  addCidrValuePayloadSchema as f,
  normalizeCidr as n
};

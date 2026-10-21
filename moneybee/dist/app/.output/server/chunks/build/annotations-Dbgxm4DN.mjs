import { I as protectArray, aQ as SCREENING_CATEGORIES } from "./services-middleware-nMulUXHZ.mjs";
import { M as intersection, o as object, a as array, N as _instanceof, l as literal, _ as _enum, u as uuid, s as string, i as union } from "./short-uuid-fTZYJj_k.mjs";
const baseCreateAnnotationSchema = object({
  tableName: string(),
  objectId: string(),
  caseId: uuid().optional()
});
const createTagAnnotationSchema = intersection(
  baseCreateAnnotationSchema,
  object({
    type: literal("tag"),
    payload: object({
      addedTags: protectArray(array(uuid())).optional(),
      removedAnnotations: protectArray(array(uuid())).optional()
    })
  })
);
const tagAnnotationFormSchema = intersection(
  baseCreateAnnotationSchema,
  object({
    type: literal("tag"),
    payload: object({
      tags: protectArray(array(string()))
    })
  })
);
const createFileAnnotationSchema = intersection(
  baseCreateAnnotationSchema,
  object({
    type: literal("file"),
    payload: object({
      files: protectArray(array(_instanceof(File)).min(1))
    })
  })
);
const createCommentAnnotationSchema = intersection(
  baseCreateAnnotationSchema,
  object({
    type: literal("comment"),
    payload: object({
      text: string().nonempty()
    })
  })
);
const createRiskAnnotationSchema = intersection(
  baseCreateAnnotationSchema,
  object({
    type: literal("risk_tag"),
    payload: object({
      addedCategories: protectArray(array(_enum(SCREENING_CATEGORIES))).optional(),
      removedAnnotations: protectArray(array(uuid())).optional()
    })
  })
);
const riskAnnotationFormSchema = intersection(
  baseCreateAnnotationSchema,
  object({
    type: literal("risk_tag"),
    payload: object({
      categories: protectArray(array(_enum(SCREENING_CATEGORIES)))
    })
  })
);
const createAnnotationPayloadSchema = union([
  createTagAnnotationSchema,
  createFileAnnotationSchema,
  createCommentAnnotationSchema,
  createRiskAnnotationSchema
]);
export {
  createCommentAnnotationSchema as a,
  createFileAnnotationSchema as b,
  createAnnotationPayloadSchema as c,
  riskAnnotationFormSchema as r,
  tagAnnotationFormSchema as t
};

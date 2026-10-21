import { M as reactExports, Q as jsxRuntimeExports, a0 as ClientOnly, L as useRouter } from "./server.mjs";
import { C as CalloutV2, a as Callout } from "./Callout-B0OuRL3q.mjs";
import { u as useTranslation, S as Typo, M as MenuCommand, B as Button, I as Icon, an as Panel, aq as Card, d as cn, a6 as Input, c as clsx, Q as createSimpleContext, ax as ScrollAreaV2, ap as NumberInput } from "./Tabs-CzpyUi7T.mjs";
import { a2 as M, bz as ftmEntities, by as ftmEntityPersonOptions, aR as semanticTypesByDataType, bA as isSemanticTypeField, bB as countryCodeFormatSchema, bC as currencyCodeFormatSchema, bx as enumEntriesSchema, bD as enumColors, aV as linkRelationTypes, bE as createEnumEntry } from "./services-middleware-nMulUXHZ.mjs";
import { G as handle, P as Page } from "./router-KSC-NEr8.mjs";
import { u as useLoaderRevalidator } from "./LoaderRevalidatorContext-BEuG7sHs.mjs";
import { d as createTableFn, i as importOrgFileFn, e as importOrgFn, l as listArchetypesFn, f as applyArchetypeFn } from "./data-9UajV2HK.mjs";
import { u as useMutation } from "./useMutation-BOdeDeAR.mjs";
import { u as useServerFn } from "./useServerFn-oRH5Nw97.mjs";
import { z as zt } from "./create-context-k6HmQ6bB.mjs";
import { M as Modal } from "./Modal-CpYmGWjB.mjs";
import { i as isLinkableTable, f as isValidDataModelName, g as getSemanticSubOptions, h as getMockValue, j as dataModelNameRegex } from "./data-BXamdbTM.mjs";
import { u as useQuery } from "./useQuery-Bb0AEcpf.mjs";
import { u as useDatatypeOptions, D as DatatypeIcon, a as DatatypeToPrimitiveType } from "./DatatypeOption-CVRIpFKg.mjs";
import { F as FormErrorOrDescription } from "./FormErrorOrDescription-BncG6ljR.mjs";
import { C as CustomerGraphProvider, R as ReactFlowProvider, u as useLaidOutGraph, a as useGraphInteractionActions, E as EMPTY_HOVER_TRAIL, s as shortestPathUnion, G as GraphIndexProvider, i as index, g as graphFitViewOptions, b as graphEdgeTypes, c as graphNodeTypes, d as GraphMeasuredLayout } from "./use-laid-out-graph-DCX5NTEx.mjs";
import { G as GraphOptionSelect } from "./GraphOptionSelect-pgH30W5_.mjs";
import { S as Spinner } from "./Spinner-DmLieYoS.mjs";
import { c as createGraphRelationFn, d as deleteGraphRelationFn } from "./graph-CqpSMa0d.mjs";
import { u as useQueryClient } from "./query-BmG5BEas.mjs";
import { u as useListGraphRelationsQuery, g as graphRelationsQueryKey } from "./list-relations-Wj5vBboU.mjs";
import { c as createGraphRelationPayloadSchema } from "./graph-BtfBHESi.mjs";
import { u as useDataModel, a as useDataModelFeatureAccess } from "./data-model-Dfj0lN5a.mjs";
import { h as handleSubmit, g as getFieldErrors$1 } from "./form-D2XmDKeG.mjs";
import { u as useForm } from "./useForm-qNQ8S9xN.mjs";
import { s as string, o as object, _ as _enum, i as union, l as literal } from "./short-uuid-fTZYJj_k.mjs";
import { u as useStore } from "./useStore-C3gZU5bu.mjs";
import { S as Stepper } from "./Stepper-D5HOcTsM.mjs";
import { F as FormInput } from "./FormInput-CsT_ETvr.mjs";
import { F as FormLabel } from "./FormLabel-DseYo_2t.mjs";
import { S as SelectV2 } from "./Select-Dg3p9vJ0.mjs";
import { S as Switch } from "./Switch-BV-_0Knl.mjs";
import { h as DataField, i as inferSemanticTypeFromName } from "./DataField-BczNbAhi.mjs";
import { D as DragDropContext, C as ConnectedDroppable, P as PublicDraggable } from "./dnd.esm-C_wuw2VJ.mjs";
import { u as useCallbackRef } from "./use-callback-ref-DoQNLci-.mjs";
import { C as Collapsible } from "./Collapsible-CKx8cmdD.mjs";
import { i as isTableMutationError, f as formatTableMutationError } from "./table-mutation-errors-DIfNyvDh.mjs";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "./sharpstate.es-C0BW2AZi.mjs";
import "./formatDistanceStrict-DEEeAR-Y.mjs";
import "node:crypto";
import "./security-headers.server-BdP3HrPp.mjs";
import "./ThemeContext-DjRULCu0.mjs";
import "./config--RFGchua.mjs";
import "./i18n-instance-store-UssbGYOM.mjs";
import "./auth-middleware-eNRVfU3l.mjs";
import "./logger.server-DV14d0iZ.mjs";
import "node:os";
import "node:events";
import "node:diagnostics_channel";
import "fs";
import "events";
import "path";
import "assert";
import "worker_threads";
import "module";
import "node:fs";
import "node:path";
import "node:url";
import "url";
import "buffer";
import "./data-model-feature-access-D7XsjRz2.mjs";
import "./feature-access-BSdB6UiC.mjs";
import "./datetime-insWKNBy.mjs";
import "./case-detail-middleware-iDVIrW-c.mjs";
import "./inboxes-D556s0BB.mjs";
import "./input-validation-D4mgQsey.mjs";
import "./async-C3pYACua.mjs";
import "./coerce-UidCu_Sb.mjs";
import "./files-fO9wUXBf.mjs";
import "./decisions--eKWwSYj.mjs";
import "./unique-cniTya2T.mjs";
import "./graph-pivots-Bblee9BN.mjs";
import "./scenarios-C5R2TE8p.mjs";
import "./useBaseQuery-BqF2iw7Y.mjs";
import "./Checkbox-C8nszDsh.mjs";
import "./get-annotations-DHuYMH09.mjs";
import "./organization-object-tags-BKGicIcs.mjs";
import "./ExpandableGroupTagLine-MgT0uQKb.mjs";
import "./Popover-Cp1XdSV2.mjs";
import "./display-TKj7AN5a.mjs";
import "./string-vnnIQF3x.mjs";
import "./value-U5z8H4N0.mjs";
import "./get-scoring-settings-CNgnpjXy.mjs";
import "./scoring-BqfH8vO5.mjs";
import "./user-scoring-BtNQ1U6a.mjs";
import "./array-BFSjnO9c.mjs";
import "./isNullish-B8pc8Ntu.mjs";
import "./tryCatch-CFf1qt2b.mjs";
import "./isNonNullish-DgEqPJBU.mjs";
import "./mapToObj-C7dg8HnM.mjs";
import "./omit-qKVZGDJg.mjs";
import "./hasAtLeast-BmuNoqMd.mjs";
import "./index-22HmyALM.mjs";
const defaultCreateTableFields = [
  {
    id: "default_object_id",
    name: "object_id",
    description: "",
    dataType: "String",
    tableId: "",
    isEnum: false,
    nullable: false,
    alias: "object_id",
    hidden: false,
    unicityConstraint: "no_unicity_constraint",
    semanticType: "unique_id",
    semanticSubType: "opaque_id",
    isNew: false,
    locked: true
  },
  {
    id: "default_updated_at",
    name: "updated_at",
    description: "",
    dataType: "Timestamp",
    tableId: "",
    isEnum: false,
    nullable: false,
    alias: "updated_at",
    hidden: false,
    unicityConstraint: "no_unicity_constraint",
    semanticType: "last_update",
    semanticSubType: void 0,
    isNew: false,
    locked: true
  }
];
const defaultCreateTableFormValues = {
  tableId: "",
  name: "",
  alias: "",
  entityType: "person",
  subEntity: "moral",
  belongsToTableId: "",
  fields: defaultCreateTableFields,
  mainTimestampFieldName: "updated_at",
  links: [],
  metaData: {},
  isCanceled: false,
  isVisited: false
};
const entityTypesRequiringLink = ["transaction", "event", "account"];
const tableEntityStepCommonShape = {
  alias: string(),
  belongsToTableId: string()
};
const createTableEntityStepSchema = object({
  ...tableEntityStepCommonShape,
  name: string().min(1).regex(dataModelNameRegex, {
    error: "Table/name: Only lower case alphanumeric and _, must start with a letter"
  }),
  entityType: _enum(ftmEntities),
  subEntity: _enum(ftmEntityPersonOptions).optional()
}).refine(
  (data) => {
    if (data.entityType === "person") return !!data.subEntity;
    return true;
  },
  { error: "Please select a sub-entity", path: ["subEntity"] }
).refine(
  (data) => {
    if (requiresLink(data.entityType)) return data.belongsToTableId.length > 0;
    return true;
  },
  { error: "Please select a destination table", path: ["belongsToTableId"] }
);
const editTableEntityStepSchema = object({
  ...tableEntityStepCommonShape,
  name: string().min(1),
  entityType: union([_enum(ftmEntities), literal("unset")]),
  subEntity: union([_enum(ftmEntityPersonOptions), literal("unset")]).optional()
}).refine(
  (data) => {
    if (data.entityType === "person") return !!data.subEntity && data.subEntity !== "unset";
    return true;
  },
  { error: "Please select a sub-entity", path: ["subEntity"] }
).refine(
  (data) => {
    if (data.entityType === "unset") return true;
    if (requiresLink(data.entityType)) return data.belongsToTableId.length > 0;
    return true;
  },
  { error: "Please select a destination table", path: ["belongsToTableId"] }
);
function requiresLink(entityType) {
  return entityTypesRequiringLink.includes(entityType);
}
function adaptSemanticField(semanticType, subType) {
  return M(semanticType).with(void 0, () => void 0).with("text", () => void 0).with(
    "name",
    () => M(subType).with(void 0, () => void 0).with("first_name", () => "first_name").with("middle_name", () => "middle_name").with("last_name", () => "last_name").with("caption", () => "name").otherwise(() => void 0)
  ).with("enum", () => "enum").with("currency_code", () => "currency").with("foreign_key", () => "foreign_key").with("country", () => "country").with("address", () => "address").with("unique_id", () => "id").with(
    "link",
    () => M(subType).with(void 0, () => void 0).with("url", () => "url").with("email", () => "email").with("phone", () => "phone_number").otherwise(() => void 0)
  ).with(
    "account_identifier",
    () => M(subType).with(void 0, () => void 0).with("account_number", () => "account_number").with("iban", () => "iban").with("bic", () => "bic").otherwise(() => void 0)
  ).with("timestamp", () => void 0).with("date_of_birth", () => "date_of_birth").with("last_update", () => "last_update").with("creation_date", () => "creation_date").with("deletion_date", () => "deletion_date").with("initiation_date", () => "initiation_date").with("validation_date", () => "validation_date").with("number", () => void 0).with("monetary_amount", () => "monetary_amount").with("percentage", () => "percentage").otherwise(() => void 0);
}
function adaptCreateTableValue(values) {
  return {
    name: values.name,
    alias: values.alias || values.name,
    semantic_type: getEntityType(
      values.entityType === "unset" ? "other" : values.entityType,
      values.subEntity === "unset" ? "moral" : values.subEntity
    ),
    description: "",
    fields: values.fields.map(adaptTableField),
    links: values.links.map(adaptLink),
    primary_ordering_field: values.mainTimestampFieldName || "updated_at",
    metadata: {
      belongsToTableId: values.belongsToTableId || void 0,
      fieldOrder: values.fields.map((f) => f.name).join(",")
    }
  };
}
function adaptTableField(field) {
  return {
    name: field.name,
    description: field.description,
    type: field.dataType,
    alias: field.alias || field.name,
    nullable: field.nullable,
    is_enum: field.isEnum || field.semanticType === "enum",
    is_unique: field.unicityConstraint === "active_unique_constraint",
    semantic_type: adaptSemanticField(field.semanticType, field.semanticSubType),
    metadata: {
      semanticTypeForFront: field.semanticType,
      semanticSubType: field.semanticSubType,
      currencyExponent: field.currencyExponent,
      decimalPrecision: field.decimalPrecision,
      currencyFieldId: field.currencyFieldId,
      foreignkeyTable: field.foreignkeyTable,
      hidden: field.hidden,
      booleanDisplay: field.booleanDisplay,
      isInteger: field.isInteger,
      enumValues: field.enumValues,
      countryCodeFormat: field.countryCodeFormat,
      currencyCodeFormat: field.currencyCodeFormat
    }
  };
}
function adaptLink(link) {
  return {
    name: link.name,
    child_field_name: link.tableFieldId,
    link_type: link.relationType,
    parent_table_id: link.targetTableId
  };
}
function getEntityType(entityType, subEntity) {
  const fieldEntity = M(entityType).with("person", () => getEntitySubtype(subEntity)).with("transaction", () => "transaction").with("event", () => "event").with("other", () => "other").with("account", () => "account").exhaustive();
  return fieldEntity;
}
function getEntitySubtype(subEntity) {
  return M(subEntity).with("moral", () => "company").with("natural", () => "person").with("generic", () => "partner").exhaustive();
}
const tableConstraints = [
  { name: "object_id", type: "unique_id", subType: "opaque_id" },
  { name: "updated_at", type: "last_update" },
  { type: "name", dataType: "person" }
];
const knownTableFields = ["name", "entityType", "subEntity", "belongsToTableId"];
function getTablePropertyErrors(values, creationMode = false) {
  const parsing = creationMode ? createTableEntityStepSchema.safeParse(values) : editTableEntityStepSchema.safeParse(values);
  if (!parsing.success) {
    return parsing.error.issues.map((issue) => ({
      kind: "table",
      field: knownTableFields.includes(issue.path[0]) ? issue.path[0] : "name",
      message: issue.message
    }));
  }
  return [];
}
function resolveBelongsToParentTableId(table) {
  return table.belongsToTableId ?? table.linksToSingle.find((link) => link.relationType === "belongs_to")?.parentTableId;
}
function getEntityTypeChangeErrors(values, t, tables) {
  if (!tables || !values.tableId) return [];
  const previousTable = tables.find((table) => table.id === values.tableId);
  if (!previousTable) return [];
  const previousEntityType = previousTable.semanticType ?? "";
  const nextEntityType = values.entityType === "unset" ? "" : values.entityType;
  if (previousEntityType !== "person" || nextEntityType === "person") return [];
  const hasBlockingChild = tables.some((table) => {
    if (table.id === values.tableId) return false;
    if (!requiresLink(table.semanticType ?? "")) return false;
    return resolveBelongsToParentTableId(table) === values.tableId;
  });
  if (!hasBlockingChild) return [];
  return [
    {
      kind: "table",
      field: "entityType",
      message: t("data:create_table.person_parent_entity_type_change_forbidden")
    }
  ];
}
function getConstraintErrors(values, t) {
  const errors = [];
  const constraints = [...tableConstraints];
  const entityType = values.entityType === "unset" ? "" : values.entityType;
  for (const constraint of constraints) {
    if (constraint) {
      const { name, type, subType, dataType } = constraint;
      if (dataType !== void 0 && dataType !== entityType) continue;
      const found = values.fields.some((f) => {
        if (name && f.name !== name) return false;
        if (type && f.semanticType !== type) return false;
        if (subType && f.semanticSubType !== subType) return false;
        return true;
      });
      if (!found) {
        errors.push({
          kind: "table",
          field: "name",
          message: t("data:create_table.missing_required_field", { field: name ?? type })
        });
      }
    }
  }
  return errors;
}
function getFieldErrors(values, t) {
  const errors = [];
  const nameCounts = /* @__PURE__ */ new Map();
  for (const field of values.fields) {
    if (field.semanticType === "enum" && field.semanticSubType === "key_color_value" && !enumEntriesSchema.safeParse(field.enumValues).success) {
      errors.push({
        kind: "field",
        fieldId: field.id,
        message: t("data:create_table.invalid_enum_entries", { field: field.alias || field.name })
      });
    }
    if (!field.name.trim()) {
      errors.push({
        kind: "field",
        fieldId: field.id,
        message: t("data:create_table.field_name_required", { field: field.alias || field.id })
      });
    } else if (!dataModelNameRegex.test(field.name)) {
      errors.push({
        kind: "field",
        fieldId: field.id,
        message: t("data:create_table.field_name_regex_error", { field: field.name })
      });
    } else {
      const ids = nameCounts.get(field.name) ?? [];
      ids.push(field.id);
      nameCounts.set(field.name, ids);
    }
  }
  for (const [name, ids] of nameCounts) {
    if (ids.length > 1) {
      for (const fieldId of ids) {
        errors.push({ kind: "field", fieldId, message: t("data:create_table.duplicate_field_name", { name }) });
      }
    }
  }
  return errors;
}
function getLinkErrors(values, t) {
  const errors = [];
  const nameCounts = /* @__PURE__ */ new Map();
  const entityType = values.entityType === "unset" ? "" : values.entityType;
  const hasBelongsToLink = values.links.some((link) => link.relationType === "belongs_to");
  for (const link of values.links) {
    const linkField = values.fields.find((field) => field.name === link.tableFieldId);
    const trimmedName = link.name.trim();
    if (!trimmedName) {
      errors.push({ kind: "link", linkId: link.linkId, message: t("data:create_table.link_missing_name") });
    } else if (!dataModelNameRegex.test(trimmedName)) {
      errors.push({
        kind: "link",
        linkId: link.linkId,
        message: t("data:create_table.link_name_regex_error", { link: link.name })
      });
    } else {
      const ids = nameCounts.get(trimmedName) ?? [];
      ids.push(link.linkId);
      nameCounts.set(trimmedName, ids);
    }
    if (!link.targetTableId) {
      errors.push({
        kind: "link",
        linkId: link.linkId,
        message: t("data:create_table.link_target_table_required", { link: link.name || "(unnamed)" })
      });
    }
    if (!link.tableFieldId) {
      errors.push({
        kind: "link",
        linkId: link.linkId,
        message: t("data:create_table.link_field_required", { link: link.name || "(unnamed)" })
      });
    }
    if (linkField?.name === "object_id") {
      errors.push({
        kind: "link",
        linkId: link.linkId,
        message: t("data:create_table.link_object_id_cannot_point_to_current_table", {
          link: link.name || "(unnamed)"
        })
      });
    }
    if (requiresLink(entityType) && !hasBelongsToLink) {
      errors.push({
        kind: "link",
        linkId: link.linkId,
        message: t("data:create_table.link_to_related_table_required")
      });
    }
  }
  for (const [name, ids] of nameCounts) {
    if (ids.length > 1) {
      for (const linkId of ids) {
        errors.push({ kind: "link", linkId, message: t("data:create_table.duplicate_link_name", { name }) });
      }
    }
  }
  return errors;
}
function validateValues(values, scope = "all", t, creationMode = false, tables) {
  const errors = [];
  if (scope === "table" || scope === "all") {
    const hasUpdatedAt = values.fields.some((f) => f.name === "updated_at");
    if (!values.mainTimestampFieldName && hasUpdatedAt) values.mainTimestampFieldName = "updated_at";
    errors.push(...getTablePropertyErrors(values, creationMode));
    if (!creationMode) {
      errors.push(...getEntityTypeChangeErrors(values, t, tables));
    }
    if (!values.mainTimestampFieldName) {
      errors.push({
        kind: "table",
        field: "mainTimestampFieldName",
        message: t("data:create_table.one_timestamp_field_should_be_selected_as_the_main_ordering_field")
      });
    }
  }
  if (scope === "fields" || scope === "all") {
    errors.push(...getConstraintErrors(values, t), ...getFieldErrors(values, t));
  }
  if (scope === "links" || scope === "all") {
    errors.push(...getLinkErrors(values, t));
  }
  return errors.length > 0 ? { ok: false, errors } : { ok: true };
}
const CREATE_TABLE_SELF_LINK_TARGET_ID = "__create_table_self_link__";
const LinksEditorContext = createSimpleContext("LinksEditor");
const FieldsEditorContext = createSimpleContext("FieldsEditor");
function FieldDetailPanel({
  fieldId,
  onClose,
  title,
  tableOptions,
  links,
  removeLink
}) {
  const { fields, updateField, removeField, mainTimestampFieldName, setMainTimestampFieldName } = FieldsEditorContext.useValue();
  const dataModel = useDataModel();
  const { isEditDataModelInfoAvailable, isDeleteDataModelFieldAvailable } = useDataModelFeatureAccess();
  const [hasBeenChangedManually, setHasBeenChangedManually] = reactExports.useState(false);
  const { t } = useTranslation(["data", "common"]);
  const [confirmDeleteOpen, setConfirmDeleteOpen] = reactExports.useState(false);
  const field = fields.find((f) => f.id === fieldId);
  const typeSelectRef = reactExports.useRef(null);
  const aliasInputRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (field?.isNew) {
      typeSelectRef.current?.focus();
    } else {
      aliasInputRef.current?.focus();
    }
    setHasBeenChangedManually(false);
  }, [fieldId]);
  const isNameDuplicate = reactExports.useMemo(() => {
    if (!field) return false;
    return fields.some((f) => f.id !== fieldId && f.name === field.name);
  }, [field, fieldId, fields]);
  const typeSelectOptions = useDatatypeOptions();
  const resolvedTableOptions = reactExports.useMemo(() => {
    const dataModelTableOptions = dataModel.map((table) => ({
      label: table.alias || table.name,
      value: table.name
    }));
    return [...dataModelTableOptions, ...tableOptions ?? []].filter(
      (option, index2, allOptions) => allOptions.findIndex(({ value }) => value === option.value) === index2
    );
  }, [dataModel, tableOptions]);
  const semanticOptions = reactExports.useMemo(() => {
    if (!field) return [];
    const options = semanticTypesByDataType[field.dataType];
    if (!options) return [];
    return options.filter((opt) => opt.value !== "foreign_key" || resolvedTableOptions.length > 0).map(
      (opt) => ({
        label: t(`data:upload_data.field_semantic.${opt.value}`),
        value: opt.value
      })
    );
  }, [field, resolvedTableOptions.length, t]);
  const semanticSubOptions = reactExports.useMemo(() => {
    if (!field || !field.semanticType) return [];
    const subOpts = getSemanticSubOptions(field.dataType, field.semanticType);
    if (!subOpts) return [];
    return subOpts.map(
      (opt) => ({
        label: t(`data:upload_data.field_semantic_sub.${opt.value}`),
        value: opt.value
      })
    );
  }, [field, t]);
  const currencyFieldOptions = reactExports.useMemo(
    () => fields.filter((f) => f.id !== fieldId && f.semanticType === "currency_code").map((f) => ({ label: f.alias || f.name, value: f.name })),
    [fields, fieldId]
  );
  const linkedLinks = reactExports.useMemo(
    () => (links ?? []).filter((l) => l.tableFieldId === field?.name || l.tableFieldId === fieldId),
    [links, field?.name, fieldId]
  );
  if (!field) return null;
  const isLocked = field.locked ?? false;
  const hasLinks = linkedLinks.length > 0;
  const canDeleteField = (field.isNew || isDeleteDataModelFieldAvailable) && !field.locked && !hasLinks;
  function update(values) {
    if (isEditDataModelInfoAvailable) updateField(fieldId, values);
  }
  function handleDeleteClick() {
    if (linkedLinks.length > 0) {
      setConfirmDeleteOpen(true);
    } else {
      performDelete();
    }
  }
  function performDelete() {
    if (!canDeleteField) return;
    if (field?.name === mainTimestampFieldName) {
      setMainTimestampFieldName("updated_at");
    }
    removeField(fieldId);
    for (const link of linkedLinks) {
      removeLink?.(link.linkId);
    }
    onClose();
  }
  function inferTypeFromName(field2) {
    if (hasBeenChangedManually) return;
    if (!field2.isNew) return;
    const { semanticType, semanticSubType } = inferSemanticTypeFromName(field2.name, field2.dataType, field2.isEnum);
    update({
      semanticType,
      semanticSubType
    });
  }
  const mockedValue = getMockValue(field);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "flex w-1/2 shrink-0 flex-col overflow-y-auto shadow-xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-md", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: onClose, className: "rounded-lg p-xs hover:bg-grey-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "x", className: "size-4" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Typo, { variant: "title2", children: title ?? t("data:upload_data.field_detail_title") })
        ] }),
        canDeleteField ? /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "destructive", onClick: handleDeleteClick, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "delete", className: "size-4" }) }) : null,
        hasLinks && /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "linked-services", className: "size-4" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-lg p-lg", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-s text-grey-secondary", children: t("data:upload_data.field_type_label") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SelectV2,
            {
              ref: typeSelectRef,
              value: field.dataType,
              placeholder: "",
              onChange: (value) => update({
                dataType: value,
                semanticType: void 0,
                semanticSubType: void 0,
                foreignkeyTable: void 0,
                currencyFieldId: void 0,
                currencyExponent: void 0,
                decimalPrecision: void 0,
                booleanDisplay: void 0,
                isInteger: void 0,
                enumValues: void 0
              }),
              options: typeSelectOptions,
              disabled: isLocked || !field.isNew
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-s text-grey-secondary", children: t("data:upload_data.field_name_label") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              value: field.name,
              onChange: (e) => update({ name: e.currentTarget.value }),
              disabled: isLocked || !field.isNew,
              onBlur: () => inferTypeFromName(field)
            }
          ),
          isNameDuplicate ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-red-primary", children: t("data:upload_data.field_name_unique_error") }) : null,
          !field.name ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-red-primary", children: t("data:upload_data.field_name_required_error") }) : null,
          field.name && !isValidDataModelName(field.name) ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-red-primary", children: t("data:create_field.name_regex_error") }) : null
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-s text-grey-secondary", children: t("data:upload_data.field_alias") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { ref: aliasInputRef, value: field.alias, onChange: (e) => update({ alias: e.currentTarget.value }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-md", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "text-s font-medium text-grey-secondary", children: t("data:upload_data.field_advanced_settings") }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-s text-grey-secondary", children: t("data:upload_data.field_description_label") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                value: field.description,
                onChange: (e) => update({ description: e.currentTarget.value }),
                placeholder: t("data:upload_data.field_description_placeholder")
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-sm cursor-pointer", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Switch,
              {
                checked: !field.nullable,
                onCheckedChange: (checked) => update({ nullable: !checked }),
                disabled: isLocked
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-s", children: t("data:upload_data.field_required") })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-sm cursor-pointer", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Switch, { checked: field.hidden, onCheckedChange: (checked) => update({ hidden: checked }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-s", children: t("data:upload_data.field_hidden") })
          ] })
        ] }),
        semanticOptions.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-s text-grey-secondary", children: t("data:upload_data.field_semantic_type") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SelectV2,
            {
              value: field.semanticType,
              placeholder: t("data:upload_data.field_semantic_placeholder"),
              onChange: (value) => {
                if (!isSemanticTypeField(value)) return;
                const subOpts = getSemanticSubOptions(field.dataType, value);
                const isCurrentSubTypeValid = subOpts?.some((opt) => opt.value === field.semanticSubType) ?? false;
                const firstSubType = subOpts?.[0]?.value;
                setHasBeenChangedManually(true);
                update({
                  semanticType: value,
                  semanticSubType: isCurrentSubTypeValid ? field.semanticSubType : firstSubType
                });
              },
              options: semanticOptions,
              disabled: isLocked
            }
          )
        ] }) : null,
        semanticSubOptions.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-s text-grey-secondary", children: t("data:upload_data.field_semantic_sub_type") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SelectV2,
            {
              value: field.semanticSubType,
              placeholder: "",
              onChange: (value) => {
                setHasBeenChangedManually(true);
                const semanticSubType = value;
                update({
                  semanticSubType,
                  ...semanticSubType === "currency" && !field.currencyCodeFormat ? { currencyCodeFormat: "ISO 4217" } : {},
                  ...semanticSubType === "country" && !field.countryCodeFormat ? { countryCodeFormat: "alpha2" } : {}
                });
              },
              options: semanticSubOptions,
              disabled: isLocked
            }
          )
        ] }) : null,
        field.semanticType === "foreign_key" ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          ForeignKeySettings,
          {
            foreignkeyTable: field.foreignkeyTable,
            onChange: update,
            tableOptions: resolvedTableOptions,
            disabled: isLocked
          }
        ) : null,
        field.semanticType === "monetary_amount" ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          CurrencySettings,
          {
            field,
            currencyFieldOptions,
            onChange: update,
            disabled: isLocked
          }
        ) : null,
        field.semanticType === "number" ? /* @__PURE__ */ jsxRuntimeExports.jsx(NumberSettings, { field, onChange: update, disabled: isLocked }) : null,
        field.semanticType === "enum" && field.semanticSubType === "key_color_value" ? /* @__PURE__ */ jsxRuntimeExports.jsx(EnumValuesSettings, { field, onChange: update, disabled: isLocked }) : null,
        field.semanticType === "country" || field.semanticType === "enum" && field.semanticSubType === "country" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-s text-grey-secondary", children: t("data:upload_data.country_code_format") }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(MenuCommand.Menu, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Trigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.SelectButton, { disabled: isLocked, children: field.countryCodeFormat === "alpha3" ? "Alpha-3 (FRA)" : "Alpha-2 (FR)" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Content, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.List, { children: countryCodeFormatSchema.options.map((format) => /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Item, { onSelect: () => update({ countryCodeFormat: format }), children: format === "alpha3" ? "Alpha-3 (FRA)" : "Alpha-2 (FR)" }, format)) }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-grey-secondary", children: t("data:upload_data.country_code_format_help") })
        ] }) : null,
        field.semanticType === "currency_code" || field.semanticType === "enum" && field.semanticSubType === "currency" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-s text-grey-secondary", children: t("data:upload_data.currency_code_format") }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(MenuCommand.Menu, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Trigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.SelectButton, { disabled: isLocked, children: field.currencyCodeFormat === "Number" ? "Number (978)" : "ISO 4217 (EUR)" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Content, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.List, { children: currencyCodeFormatSchema.options.map((format) => /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Item, { onSelect: () => update({ currencyCodeFormat: format }), children: format === "ISO 4217" ? "ISO 4217 (EUR)" : "Number (978)" }, format)) }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-grey-secondary", children: t("data:upload_data.currency_code_format_help") })
        ] }) : null,
        field.dataType === "Bool" ? /* @__PURE__ */ jsxRuntimeExports.jsx(BooleanSettings, { booleanDisplay: field.booleanDisplay, onChange: update, disabled: isLocked }) : null,
        field.dataType === "Timestamp" ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          TimestampSettings,
          {
            fieldName: field.name,
            mainTimestampFieldName,
            setMainTimestampFieldName,
            disabled: isLocked
          }
        ) : null,
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-s text-grey-secondary italic", children: t("data:upload_data.field_visual_example") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-lg border border-grey-border bg-grey-98 p-md", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-md", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-xs rounded border border-grey-border font-mono w-full text-xs text-grey-secondary", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: `${t("data:upload_data.raw_data")} { "${field.name}": ${typeof mockedValue === "string" ? '"' : ""}${mockedValue}${typeof mockedValue === "string" ? '"' : ""}}` }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              DataField,
              {
                field: {
                  id: field.id,
                  dataType: field.dataType,
                  description: field.description,
                  isEnum: field.isEnum || field.semanticType === "enum",
                  enumValues: field.enumValues,
                  countryCodeFormat: field.countryCodeFormat,
                  name: field.alias || field.name,
                  nullable: field.nullable,
                  tableId: "id",
                  unicityConstraint: "no_unicity_constraint",
                  semanticType: field.semanticType,
                  semanticSubType: field.semanticSubType,
                  currencyExponent: field.currencyExponent,
                  decimalPrecision: field.decimalPrecision,
                  currencyFieldId: field.currencyFieldId,
                  booleanDisplay: field.booleanDisplay,
                  isInteger: field.isInteger,
                  foreignkeyTable: field.foreignkeyTable
                },
                value: mockedValue
              }
            )
          ] }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.Root, { open: confirmDeleteOpen, onOpenChange: setConfirmDeleteOpen, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal.Content, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.Title, { children: t("data:delete_field.title", { name: field.alias || field.name }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-s text-grey-primary", children: t("data:delete_field.confirm_with_links", {
        linkNames: linkedLinks.map((l) => l.name).join(", ")
      }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal.Footer, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.FooterButton, { isCloseButton: true, label: t("common:cancel") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Modal.FooterButton,
          {
            label: t("common:delete"),
            onClick: performDelete,
            variant: "destructive",
            leadingIcon: "delete"
          }
        )
      ] })
    ] }) })
  ] });
}
function CurrencySettings({
  field,
  currencyFieldOptions,
  onChange,
  disabled
}) {
  const { t } = useTranslation(["data"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-sm rounded-lg border border-grey-border p-md", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-s text-grey-secondary", children: t("data:upload_data.field_currency_settings") }),
    currencyFieldOptions.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-xs", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-s text-grey-secondary", children: t("data:upload_data.field_currency_field") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SelectV2,
        {
          value: field.currencyFieldId,
          placeholder: t("data:upload_data.field_currency_field_placeholder"),
          onChange: (value) => onChange({ currencyFieldId: value }),
          options: currencyFieldOptions,
          disabled
        }
      )
    ] }) : null,
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-xs", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-s text-grey-secondary", children: t("data:upload_data.field_currency_exponent") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        NumberInput,
        {
          min: 0,
          max: 10,
          value: field.currencyExponent ?? 0,
          onChange: (value) => onChange({ currencyExponent: Math.min(10, Math.max(0, value)) }),
          disabled
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-xs", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-s text-grey-secondary", children: t("data:upload_data.field_decimal_precision") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        NumberInput,
        {
          min: 0,
          max: 10,
          value: field.decimalPrecision ?? 2,
          onChange: (value) => onChange({ decimalPrecision: Math.min(10, Math.max(0, value)) }),
          disabled
        }
      )
    ] })
  ] });
}
function NumberSettings({
  field,
  onChange,
  disabled
}) {
  const { t } = useTranslation(["data"]);
  const isInteger = field.isInteger ?? true;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-sm rounded-lg border border-grey-border p-md", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-s text-grey-secondary", children: t("data:upload_data.field_number_settings") }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-sm cursor-pointer", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Switch,
        {
          checked: isInteger,
          onCheckedChange: (checked) => onChange({ isInteger: checked }),
          disabled
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-s", children: t("data:upload_data.field_is_integer") })
    ] }),
    !isInteger ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-xs", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-s text-grey-secondary", children: t("data:upload_data.field_decimal_precision") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        NumberInput,
        {
          min: 0,
          max: 10,
          value: field.decimalPrecision ?? 2,
          onChange: (value) => onChange({ decimalPrecision: Math.min(10, Math.max(0, value)) }),
          disabled
        }
      )
    ] }) : null
  ] });
}
function BooleanSettings({
  booleanDisplay,
  onChange,
  disabled
}) {
  const { t } = useTranslation(["data"]);
  const options = [
    { label: t("data:upload_data.field_boolean_display_switch"), value: "checkbox" },
    { label: t("data:upload_data.field_boolean_display_yes_no"), value: "yes_no" }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-sm rounded-lg border border-grey-border p-md", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-s text-grey-secondary", children: t("data:upload_data.field_boolean_settings") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-sm", children: options.map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        onClick: () => onChange({ booleanDisplay: opt.value }),
        className: `flex-1 rounded-lg border px-sm py-xs text-s transition-colors ${(booleanDisplay ?? "checkbox") === opt.value ? "border-purple-primary bg-purple-10 text-purple-primary" : "border-grey-border text-grey-secondary hover:bg-grey-border"}`,
        disabled,
        children: opt.label
      },
      opt.value
    )) })
  ] });
}
function ForeignKeySettings({
  foreignkeyTable,
  onChange,
  tableOptions,
  disabled
}) {
  const { t } = useTranslation(["data"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-sm rounded-lg border border-grey-border p-md", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-s text-grey-secondary", children: t("data:upload_data.field_foreign_key_settings") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SelectV2,
      {
        value: foreignkeyTable,
        placeholder: t("data:upload_data.field_foreign_key_placeholder"),
        onChange: (value) => onChange({ foreignkeyTable: value }),
        options: tableOptions,
        disabled
      }
    ),
    !foreignkeyTable ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-red-primary", children: t("data:upload_data.field_foreign_key_required_error") }) : null
  ] });
}
function EnumValuesSettings({
  field,
  onChange,
  disabled
}) {
  const { t } = useTranslation(["data"]);
  const enumValues = field.enumValues ?? [];
  const colorOptions = reactExports.useMemo(
    () => enumColors.map((color) => ({
      value: color,
      label: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-4 rounded-full border border-grey-border", style: { backgroundColor: color }, children: " " })
    })),
    []
  );
  function addValue() {
    onChange({ enumValues: [...enumValues, createEnumEntry()] });
  }
  function updateValue(index2, patch) {
    onChange({ enumValues: enumValues.map((entry, i) => i === index2 ? { ...entry, ...patch } : entry) });
  }
  function removeValue(index2) {
    onChange({ enumValues: enumValues.filter((_, i) => i !== index2) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-sm rounded-lg border border-grey-border p-md", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-s text-grey-secondary", children: t("data:upload_data.field_enum_settings") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-grey-secondary", children: t("data:upload_data.field_enum_key_help") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-sm", children: enumValues.map((enumValue, index2) => {
      const isDuplicate = enumValue.key.trim().length > 0 && enumValues.some((v, i) => i !== index2 && v.key === enumValue.key);
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-max shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            SelectV2,
            {
              value: enumValue.color,
              placeholder: "",
              onChange: (value) => updateValue(index2, { color: value }),
              options: colorOptions,
              disabled
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              className: "min-w-0 flex-1 font-mono",
              value: enumValue.key,
              "aria-label": t("data:upload_data.field_enum_key_placeholder"),
              placeholder: t("data:upload_data.field_enum_key_placeholder"),
              onChange: (e) => updateValue(index2, { key: e.currentTarget.value }),
              disabled,
              "aria-invalid": isDuplicate || !enumValue.key.trim()
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => removeValue(index2),
              "aria-label": t("data:upload_data.field_enum_remove_value"),
              className: "shrink-0 rounded-lg p-xs text-grey-secondary hover:bg-grey-border hover:text-red-primary",
              disabled,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "delete", className: "size-4" })
            }
          )
        ] }),
        isDuplicate ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-red-primary", children: t("data:upload_data.field_enum_value_unique_error") }) : null
      ] }, index2);
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "secondary", appearance: "stroked", onClick: addValue, disabled, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "plus", className: "size-4" }),
      t("data:upload_data.field_enum_add_value")
    ] })
  ] });
}
function TimestampSettings({
  fieldName,
  mainTimestampFieldName,
  setMainTimestampFieldName,
  disabled
}) {
  const { t } = useTranslation(["data"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-sm rounded-lg border border-grey-border p-md", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-s text-grey-secondary", children: t("data:upload_data.field_timestamp_settings") }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-sm cursor-pointer", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Switch,
        {
          checked: mainTimestampFieldName === fieldName,
          onCheckedChange: (checked) => setMainTimestampFieldName(checked ? fieldName : "updated_at"),
          disabled
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-s", children: t("data:upload_data.field_main_ordering_timestamp") })
    ] })
  ] });
}
function FieldsForm({
  onFieldSelect,
  selectedFieldId,
  title,
  description,
  droppableId = "fields-list",
  errorFieldIds,
  hasError
}) {
  const { isCreateDataModelFieldAvailable } = useDataModelFeatureAccess();
  const { fields, reorderFields, addField } = FieldsEditorContext.useValue();
  const { t } = useTranslation(["data"]);
  const buttonRefs = reactExports.useRef([]);
  const handleDragEnd = useCallbackRef((result) => {
    if (!result.destination || result.source.index === result.destination.index) return;
    reorderFields(result.source.index, result.destination.index);
  });
  const handleFieldKeyDown = reactExports.useCallback(
    (e, index2) => {
      const isCmd = e.metaKey || e.ctrlKey;
      if (e.key === "ArrowDown") {
        e.preventDefault();
        if (isCmd) {
          if (index2 < fields.length - 1) {
            reorderFields(index2, index2 + 1);
            setTimeout(() => buttonRefs.current[index2 + 1]?.focus(), 0);
          }
        } else {
          buttonRefs.current[index2 + 1]?.focus();
        }
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        if (isCmd) {
          if (index2 > 0) {
            reorderFields(index2, index2 - 1);
            setTimeout(() => buttonRefs.current[index2 - 1]?.focus(), 0);
          }
        } else {
          buttonRefs.current[index2 - 1]?.focus();
        }
      }
    },
    [fields.length, reorderFields]
  );
  function handleAddField() {
    const fieldId = addField("");
    onFieldSelect(fieldId);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      className: cn("flex flex-1 min-h-0 flex-col gap-md rounded-lg", hasError && "border border-red-primary p-md"),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex shrink-0 items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typo, { variant: "subtitle2", children: title ?? t("data:upload_data.fields_title") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-s text-grey-secondary", children: description ?? t("data:upload_data.fields_description") })
          ] }),
          isCreateDataModelFieldAvailable && /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "primary", appearance: "stroked", onClick: handleAddField, className: "shrink-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "plus", className: "size-4" }),
            t("data:upload_data.field_add")
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollAreaV2, { className: "flex-1 min-h-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(DragDropContext, { onDragEnd: handleDragEnd, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ConnectedDroppable, { droppableId, children: (dropProvided) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: dropProvided.innerRef, ...dropProvided.droppableProps, className: "flex flex-col gap-sm pe-sm", children: [
          fields.map((field, index2) => /* @__PURE__ */ jsxRuntimeExports.jsx(PublicDraggable, { draggableId: field.id, index: index2, children: (dragProvided, snapshot) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              ref: dragProvided.innerRef,
              ...dragProvided.draggableProps,
              className: cn(snapshot.isDragging && "opacity-80"),
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                FieldRow,
                {
                  field,
                  isSelected: field.id === selectedFieldId,
                  onSelect: () => onFieldSelect(field.id),
                  dragHandleProps: dragProvided.dragHandleProps,
                  hasError: errorFieldIds?.has(field.id) ?? false,
                  buttonRef: (el) => {
                    buttonRefs.current[index2] = el;
                  },
                  onKeyDown: (e) => handleFieldKeyDown(e, index2)
                }
              )
            }
          ) }, field.id)),
          dropProvided.placeholder
        ] }) }) }) })
      ]
    }
  );
}
function FieldRow({
  field,
  isSelected,
  onSelect,
  dragHandleProps,
  hasError,
  buttonRef,
  onKeyDown
}) {
  const { t } = useTranslation(["data"]);
  const { mainTimestampFieldName: orderingFieldName } = FieldsEditorContext.useValue();
  const isOrderingField = orderingFieldName !== "" && field.name === orderingFieldName;
  const semanticLabel = getSemanticLabel(field, t);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-md rtl:flex-row-reverse", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ...dragHandleProps, className: "flex shrink-0 items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "drag", className: "size-4 text-grey-secondary cursor-grab" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        ref: buttonRef,
        type: "button",
        onClick: onSelect,
        onKeyDown,
        className: cn(
          "flex flex-1 items-center gap-md rounded-lg border p-md transition-colors rtl:flex-row-reverse",
          hasError ? "border-red-primary" : isSelected ? "border-purple-primary" : "border-grey-border hover:bg-grey-98",
          isSelected ? "bg-purple-96" : "",
          field.hidden && "opacity-50"
        ),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DatatypeIcon, { dataType: field.dataType }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-s font-medium", children: field.alias || field.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "me-auto flex items-center gap-sm rtl:flex-row-reverse", children: [
            semanticLabel ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-sm border border-grey-border bg-grey-98 px-sm py-0.5 text-xs text-grey-secondary", children: semanticLabel }) : null,
            isOrderingField ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { title: t("data:upload_data.field_main_ordering_timestamp"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "filters", className: "size-4 text-grey-secondary" }) }) : null,
            field.locked ? /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "lock", className: "size-4 text-grey-secondary" }) : null,
            !field.nullable ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "size-2 rounded-full bg-purple-primary" }) : null,
            field.hidden ? /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "visibility_off", className: "size-4 text-grey-secondary" }) : null,
            /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "arrow-right", className: "size-4 text-grey-secondary rtl:rotate-180" })
          ] })
        ]
      }
    )
  ] });
}
const getSemanticLabel = (field, t) => {
  const subOpts = getSemanticSubOptions(field.dataType, field.semanticType);
  if (field.dataType === "Bool") return t("data:upload_data.field_semantic.boolean");
  if (field.dataType === "IpAddress") return t("data:upload_data.field_semantic.ip_address");
  if (field.dataType === "Coords") return t("data:upload_data.field_semantic.coords");
  if (subOpts?.length && subOpts.some((opt) => opt.value === field.semanticSubType))
    return t(`data:upload_data.field_semantic_sub.${field.semanticSubType}`);
  if (field.semanticType) return t(`data:upload_data.field_semantic.${field.semanticType}`);
  return null;
};
function LinkForm({
  compact,
  errorLinkIds,
  hasError
}) {
  const { links, sourceTableName, addLink, destinationTableOptions } = LinksEditorContext.useValue();
  const { t } = useTranslation(["data"]);
  const { isCreateDataModelLinkAvailable } = useDataModelFeatureAccess();
  const tableLabel = sourceTableName.trim() || t("data:upload_data.table_name_fallback");
  const belongsToLinks = links.filter((link) => link.relationType === "belongs_to");
  const belongsToFieldNames = belongsToLinks.map((link) => link.tableFieldId).filter(Boolean);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Collapsible.Container, { className: cn("border-none p-0", hasError && "bg-red-primary/5"), defaultOpen: true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Collapsible.Title, { size: "xs", iconPosition: "left", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typo, { variant: "subtitle2", children: t("data:upload_data.links_title") }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Collapsible.Content, { className: "border-none", size: "xs", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-md", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-s text-grey-secondary font-normal", children: t("data:upload_data.links_description", { tableName: tableLabel }) }),
      belongsToLinks.length > 1 ? /* @__PURE__ */ jsxRuntimeExports.jsx(Callout, { color: "orange", icon: "warning", iconColor: "orange", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        t("data:upload_data.multiple_belongs_to_warning", { tableName: tableLabel }),
        belongsToFieldNames.length > 0 ? ` ${t("data:upload_data.multiple_belongs_to_warning_fields", {
          fields: belongsToFieldNames.join(", ")
        })}` : null
      ] }) }) : null,
      links.map((link) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        LinkRow,
        {
          linkId: link.linkId,
          compact,
          hasError: errorLinkIds?.has(link.linkId)
        },
        link.linkId
      )),
      isCreateDataModelLinkAvailable && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            variant: "primary",
            appearance: "stroked",
            onClick: () => addLink(),
            disabled: !destinationTableOptions.length,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "plus", className: "size-4" }),
              t("data:upload_data.link_add")
            ]
          }
        ),
        !destinationTableOptions.length && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-grey-secondary", children: t("data:create_table.link_destination_table_required") })
      ] })
    ] }) })
  ] });
}
function LinkRow({ linkId, compact, hasError }) {
  const { links, sourceTableFields, destinationTableOptions, updateLink, removeLink } = LinksEditorContext.useValue();
  const { t } = useTranslation(["data"]);
  const { isDeleteDataModelLinkAvailable } = useDataModelFeatureAccess();
  const link = links.find((l) => l.linkId === linkId);
  const fieldOptions = reactExports.useMemo(
    () => sourceTableFields.filter((field) => field.dataType === "String" && field.name !== "object_id").map((field) => ({
      label: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-sm", title: field.alias !== field.name ? field.name : void 0, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DatatypeIcon, { dataType: field.dataType }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: field.alias || field.name })
      ] }),
      value: field.name
    })),
    [sourceTableFields]
  );
  const relationOptions = reactExports.useMemo(
    () => linkRelationTypes.map((rel) => ({
      label: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Icon,
          {
            icon: rel === "belongs_to" ? "arrow-forward" : "arrow-range",
            className: "size-4 text-purple-primary"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t(`data:upload_data.link_relation_${rel}`) })
      ] }),
      value: rel
    })),
    [t]
  );
  const destinationOptions = reactExports.useMemo(
    () => destinationTableOptions.map((t2) => ({
      label: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t2.label }),
      value: t2.tableId
    })),
    [destinationTableOptions]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: cn(
        "flex gap-x-md gap-y-sm rounded-lg",
        compact ? "flex-wrap items-start" : "items-center",
        hasError && "border border-red-primary/40 bg-red-primary/5 p-sm"
      ),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            value: link.name,
            onChange: (e) => updateLink(linkId, { name: e.currentTarget.value }),
            placeholder: t("data:upload_data.link_name_placeholder"),
            className: "w-36 min-w-fit",
            disabled: link.isNew === false
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          SelectV2,
          {
            value: link.tableFieldId,
            placeholder: t("data:upload_data.link_field_placeholder"),
            onChange: (value) => updateLink(linkId, { tableFieldId: value }),
            options: fieldOptions,
            className: "flex-1 min-w-fit",
            disabled: link.isNew === false
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          SelectV2,
          {
            value: link.relationType,
            placeholder: "",
            onChange: (value) => updateLink(linkId, { relationType: value }),
            options: relationOptions,
            className: "w-40 min-w-fit"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          SelectV2,
          {
            value: link.targetTableId,
            placeholder: t("data:upload_data.link_destination_placeholder"),
            onChange: (value) => updateLink(linkId, { targetTableId: value }),
            options: destinationOptions,
            className: "flex-1 min-w-fit",
            disabled: link.isNew === false
          }
        ),
        isDeleteDataModelLinkAvailable && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => removeLink(linkId),
            className: "shrink-0 rounded-lg p-sm text-grey-secondary hover:bg-grey-border hover:text-red-primary",
            title: t("data:upload_data.link_delete"),
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "delete", className: "size-4" })
          }
        )
      ]
    }
  );
}
function UnsavedChangesDialog({ open, onOpenChange, onConfirm }) {
  const { t } = useTranslation(["data", "common"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.Root, { open, onOpenChange, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal.Content, { onClick: (event) => event.stopPropagation(), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.Title, { children: t("data:unsaved_changes.title") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-s text-grey-primary", children: t("data:unsaved_changes.description") }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal.Footer, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.FooterButton, { isCloseButton: true, label: t("common:cancel") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.FooterButton, { label: t("data:unsaved_changes.confirm"), onClick: onConfirm })
    ] })
  ] }) });
}
const useImportOrgFromFileMutation = () => {
  const importOrgFile = useServerFn(importOrgFileFn);
  return useMutation({
    mutationKey: ["data", "import-org-file"],
    mutationFn: async (file) => {
      const formData = new FormData();
      formData.append("file", file);
      return importOrgFile({ data: formData });
    }
  });
};
const useImportOrgMutation = () => {
  const importOrg = useServerFn(importOrgFn);
  return useMutation({
    mutationKey: ["data", "import-org"],
    mutationFn: async (fileContent) => importOrg({ data: { body: fileContent } })
  });
};
function ImportOrg({ children }) {
  const { t } = useTranslation(["data", "common"]);
  const [isOpen, setIsOpen] = reactExports.useState(false);
  const [selectedFile, setSelectedFile] = reactExports.useState(null);
  const [jsonContent, setJsonContent] = reactExports.useState("");
  const [jsonError, setJsonError] = reactExports.useState(null);
  const [isParsing, setIsParsing] = reactExports.useState(false);
  const fileInputRef = reactExports.useRef(null);
  const importFileMutation = useImportOrgFromFileMutation();
  const importBodyMutation = useImportOrgMutation();
  const revalidate = useLoaderRevalidator();
  const [errorMessage, setErrorMessage] = reactExports.useState(null);
  const hasFile = selectedFile !== null;
  const hasJson = jsonContent.trim().length > 0;
  const canImport = (hasFile || hasJson) && !(hasFile && hasJson);
  const resetState = () => {
    setSelectedFile(null);
    setJsonContent("");
    setJsonError(null);
    setIsParsing(false);
    setErrorMessage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };
  const handleImport = async () => {
    setErrorMessage(null);
    if (hasFile) {
      setIsParsing(true);
      importFileMutation.mutate(selectedFile, {
        onSuccess: (result) => {
          if (result.success) {
            revalidate();
            zt.success(t("data:import_org.success"));
            setIsOpen(false);
            resetState();
          } else {
            setErrorMessage(result.message);
            setIsParsing(false);
          }
        },
        onError: () => {
          zt.error(t("common:errors.backend_global_error.unknown"));
          setIsParsing(false);
        }
      });
    } else if (hasJson) {
      try {
        setIsParsing(true);
        const parsed = JSON.parse(jsonContent);
        setJsonError(null);
        importBodyMutation.mutate(parsed, {
          onSuccess: (result) => {
            if (result.success) {
              zt.success(t("data:import_org.success"));
              revalidate();
              setIsOpen(false);
              resetState();
            } else {
              setErrorMessage(result.message);
              setIsParsing(false);
            }
          },
          onError: () => {
            zt.error(t("common:errors.backend_global_error.unknown"));
            setIsParsing(false);
          }
        });
      } catch {
        setJsonError(t("data:import_org.invalid_json"));
      }
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Modal.Root,
    {
      open: isOpen,
      onOpenChange: (open) => {
        setIsOpen(open);
        if (!open) resetState();
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.Trigger, { asChild: true, children }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal.Content, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.Title, { children: t("data:import_org.title") }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-md p-lg", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-s font-medium text-grey-primary", children: t("data:import_org.method_file") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  ref: fileInputRef,
                  type: "file",
                  accept: ".json",
                  disabled: hasJson,
                  onChange: (e) => setSelectedFile(e.target.files?.[0] ?? null),
                  className: "hidden"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  variant: "secondary",
                  appearance: "stroked",
                  disabled: hasJson,
                  onClick: () => fileInputRef.current?.click(),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "upload", className: "size-5" }),
                    selectedFile ? selectedFile.name : t("data:import_org.select_file")
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-md", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-grey-border h-px flex-1" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-grey-secondary", children: t("common:or") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-grey-border h-px flex-1" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-s font-medium text-grey-primary", children: t("data:import_org.method_body") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "textarea",
                {
                  className: "border-grey-border focus:border-purple-primary text-s min-h-[120px] w-full rounded-lg border p-md font-mono outline-none disabled:opacity-50",
                  placeholder: t("data:import_org.json_placeholder"),
                  disabled: hasFile,
                  value: jsonContent,
                  onChange: (e) => {
                    setJsonContent(e.target.value);
                    setJsonError(null);
                  }
                }
              ),
              jsonError ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-red-primary", children: jsonError }) : null,
              errorMessage ? /* @__PURE__ */ jsxRuntimeExports.jsx(Callout, { color: "red", icon: "error", iconColor: "red", children: errorMessage }) : null
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal.Footer, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.FooterButton, { isCloseButton: true, label: t("common:cancel") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Modal.FooterButton,
              {
                label: t("data:import_org.button_accept"),
                type: "submit",
                disabled: !canImport || isParsing,
                isLoading: isParsing,
                onClick: handleImport
              }
            )
          ] })
        ] })
      ]
    }
  );
}
const useApplyArchetypeMutation = () => {
  const applyArchetype = useServerFn(applyArchetypeFn);
  return useMutation({
    mutationKey: ["data", "apply-archetype"],
    mutationFn: async (payload) => applyArchetype({ data: payload })
  });
};
const useListArchetypesQuery = () => {
  const listArchetypes = useServerFn(listArchetypesFn);
  return useQuery({
    queryKey: ["data", "archetypes"],
    queryFn: () => {
      return listArchetypes({});
    }
  });
};
function SelectArchetype({ children }) {
  const { t } = useTranslation(["data", "common"]);
  const { data: archetypes, isLoading } = useListArchetypesQuery();
  const applyArchetypeMutation = useApplyArchetypeMutation();
  const [isOpen, setIsOpen] = reactExports.useState(false);
  const [selectedArchetype, setSelectedArchetype] = reactExports.useState(null);
  const revalidate = useLoaderRevalidator();
  const handleApply = () => {
    if (!selectedArchetype) return;
    applyArchetypeMutation.mutateAsync({ name: selectedArchetype.name }).then((result) => {
      revalidate();
      if (result.success) {
        zt.success(t("data:apply_archetype.success"));
        setIsOpen(false);
        setSelectedArchetype(null);
      } else {
        zt.error(t("common:errors.unknown"));
      }
    }).catch(() => {
      zt.error(t("common:errors.unknown"));
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Modal.Root,
    {
      open: isOpen,
      onOpenChange: (open) => {
        setIsOpen(open);
        if (!open) {
          setSelectedArchetype(null);
        }
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.Trigger, { asChild: true, children }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal.Content, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.Title, { children: t("data:select_archetype.title") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-md p-lg", children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center py-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "spinner", className: "size-8 animate-spin" }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-sm", children: archetypes?.map((archetype) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            ArchetypeCard,
            {
              archetype,
              isSelected: selectedArchetype?.name === archetype.name,
              onSelect: () => setSelectedArchetype(archetype)
            },
            archetype.name
          )) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal.Footer, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.FooterButton, { isCloseButton: true, label: t("common:cancel") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Modal.FooterButton,
              {
                label: t("data:select_archetype.button_accept"),
                disabled: !selectedArchetype || applyArchetypeMutation.isPending,
                onClick: handleApply,
                isLoading: applyArchetypeMutation.isPending
              }
            )
          ] })
        ] })
      ]
    }
  );
}
function ArchetypeCard({
  archetype,
  isSelected,
  onSelect
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "button",
    {
      type: "button",
      onClick: onSelect,
      className: clsx(
        "flex flex-col gap-xs rounded-lg border-2 p-md text-left transition-colors",
        isSelected ? "border-purple-primary bg-purple-background dark:bg-purple-border" : "border-grey-border hover:border-grey-placeholder"
      ),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-s font-semibold text-grey-primary", children: archetype.label ?? archetype.name }),
        archetype.description ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-s text-grey-secondary", children: archetype.description }) : null
      ]
    }
  );
}
function useCreateGraphRelationMutation() {
  const createGraphRelation = useServerFn(createGraphRelationFn);
  const queryClient = useQueryClient();
  const { t } = useTranslation(["common"]);
  return useMutation({
    mutationKey: ["graph", "create-relation"],
    mutationFn: async (payload) => createGraphRelation({ data: payload }),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: graphRelationsQueryKey });
      zt.success(t("common:success.save"));
    },
    onError: (error) => {
      zt.error(error.message ?? t("common:errors.unknown"));
    }
  });
}
function useDeleteGraphRelationMutation() {
  const deleteGraphRelation = useServerFn(deleteGraphRelationFn);
  const queryClient = useQueryClient();
  const { t } = useTranslation(["common"]);
  return useMutation({
    mutationKey: ["graph", "delete-relation"],
    mutationFn: async (payload) => deleteGraphRelation({ data: payload }),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: graphRelationsQueryKey });
      zt.success(t("common:success.deleted"));
    },
    onError: (error) => {
      zt.error(error.message ?? t("common:errors.unknown"));
    }
  });
}
function useDeleteGraphRelationsMutation() {
  const deleteGraphRelation = useServerFn(deleteGraphRelationFn);
  const queryClient = useQueryClient();
  const { t } = useTranslation(["common"]);
  return useMutation({
    mutationKey: ["graph", "delete-relations"],
    mutationFn: async (relationIds) => {
      const results = await Promise.allSettled(
        relationIds.map((relationId) => deleteGraphRelation({ data: { relationId } }))
      );
      const failed = results.find((result) => result.status === "rejected");
      if (failed?.status === "rejected") throw failed.reason;
    },
    onSettled: async () => {
      await queryClient.invalidateQueries({ queryKey: graphRelationsQueryKey });
    },
    onSuccess: () => {
      zt.success(t("common:success.deleted"));
    },
    onError: (error) => {
      zt.error(error.message ?? t("common:errors.unknown"));
    }
  });
}
function personTableName(dataModel) {
  return dataModel.find((table) => table.semanticType === "person" && table.subEntity === "natural")?.name ?? dataModel.find((table) => table.semanticType === "person")?.name ?? "users";
}
function useDefaultGraph(dataModel) {
  const personTable = personTableName(dataModel);
  return reactExports.useMemo(
    () => ({
      start: { type: personTable, id: "jd" },
      nodes: [
        {
          type: personTable,
          id: "jd",
          kind: "record",
          metadata: {
            label: "John Doe",
            riskLevel: 3,
            tagIds: []
          }
        },
        {
          type: personTable,
          id: "jsd",
          kind: "record",
          metadata: {
            label: "Jane Smith Doe",
            riskLevel: 1,
            tagIds: []
          }
        },
        {
          type: personTable,
          id: "js",
          kind: "record",
          metadata: {
            label: "Julian Smith",
            riskLevel: 2,
            tagIds: []
          }
        },
        {
          type: personTable,
          id: "jhs",
          kind: "record",
          metadata: {
            label: "John Smith",
            riskLevel: 2,
            tagIds: []
          }
        },
        {
          type: "iban",
          id: "IT4761510285733272204979028",
          kind: "connector",
          metadata: {
            label: "IBAN",
            tagIds: []
          }
        }
      ],
      edges: [
        {
          from: { type: personTable, id: "jd" },
          to: { type: personTable, id: "jsd" },
          kind: "link",
          label: "iban",
          through: ["transaction"],
          field: "person_id",
          value: "jd"
        },
        {
          from: { type: personTable, id: "jd" },
          to: { type: personTable, id: "jhs" },
          kind: "link",
          label: "iban",
          through: ["account"],
          field: "account_id",
          value: "account_1"
        },
        {
          from: { type: personTable, id: "js" },
          to: { type: personTable, id: "jhs" },
          kind: "link",
          label: "iban",
          through: ["account"],
          field: "account_id",
          value: "account_1"
        },
        {
          from: { type: personTable, id: "jd" },
          to: { type: personTable, id: "js" },
          kind: "link",
          label: "iban",
          through: ["transaction"],
          field: "person_id",
          value: "jd"
        },
        {
          from: { type: personTable, id: "jd" },
          to: { type: "iban", id: "IT4761510285733272204979028" },
          kind: "match",
          label: "iban",
          through: ["transaction", "account", "transaction"],
          field: "transaction_iban",
          value: "IT4761510285733272204979028"
        },
        {
          from: { type: personTable, id: "jsd" },
          to: { type: "iban", id: "IT4761510285733272204979028" },
          kind: "match",
          label: "iban",
          through: ["transaction", "account", "transaction"],
          field: "transaction_iban",
          value: "IT4761510285733272204979028"
        },
        {
          from: { type: personTable, id: "jhs" },
          to: { type: "iban", id: "IT4761510285733272204979028" },
          kind: "match",
          label: "iban",
          through: ["transaction", "account", "transaction"],
          field: "transaction_iban",
          value: "IT4761510285733272204979028"
        }
      ]
    }),
    [dataModel]
  );
}
const SAMPLE_START_ID = "jd";
const SAMPLE_FIRST_NAMES = ["Jane", "Julian", "Alice", "Robert", "Maria", "James", "Sofia", "David"];
const SAMPLE_LAST_NAMES = ["Smith", "Martin", "Chen", "Garcia", "Patel", "Nguyen", "Cohen", "Berg"];
function pickRandomName(names) {
  return names[Math.floor(Math.random() * names.length)] ?? names[0] ?? "";
}
function relatedPersonLabel() {
  return `${pickRandomName(SAMPLE_FIRST_NAMES)} ${pickRandomName(SAMPLE_LAST_NAMES)}`;
}
function labelForRelation(labels, relationId) {
  const existing = labels.get(relationId);
  if (existing) return existing;
  const label = relatedPersonLabel();
  labels.set(relationId, label);
  return label;
}
function relationThrough(relation) {
  return relation.leftType === relation.rightType ? [relation.leftType] : [relation.leftType, relation.rightType];
}
function matchEdges(relation, from, to, connector) {
  const through = relationThrough(relation);
  return [
    {
      from,
      to: connector,
      kind: "match",
      label: relation.label,
      through,
      field: relation.leftField,
      value: connector.id
    },
    {
      from: to,
      to: connector,
      kind: "match",
      label: relation.label,
      through,
      field: relation.rightField,
      value: connector.id
    }
  ];
}
function useRelationGraph(dataModel, relations) {
  const personTable = personTableName(dataModel);
  const labelsByRelationId = reactExports.useRef(/* @__PURE__ */ new Map());
  return reactExports.useMemo(() => {
    const labels = labelsByRelationId.current;
    const activeIds = new Set(relations.map((relation) => relation.id));
    for (const id of labels.keys()) {
      if (!activeIds.has(id)) labels.delete(id);
    }
    const start = { type: personTable, id: SAMPLE_START_ID };
    const nodes = [
      {
        type: personTable,
        id: SAMPLE_START_ID,
        kind: "record",
        metadata: {
          label: "John Doe",
          tagIds: []
        }
      }
    ];
    const edges = [];
    for (const [index2, relation] of relations.entries()) {
      const related = { type: personTable, id: relation.id };
      nodes.push({
        ...related,
        kind: "record",
        metadata: { label: labelForRelation(labels, relation.id), tagIds: [] }
      });
      const connector = { type: relation.label, id: `${relation.label}-${index2 + 1}` };
      nodes.push({
        ...connector,
        kind: "connector",
        metadata: {
          label: relation.label,
          tagIds: []
        }
      });
      edges.push(...matchEdges(relation, start, related, connector));
    }
    return { start, nodes, edges };
  }, [personTable, relations]);
}
function SampleGraph({ data, dataModel }) {
  const { nodes, edges, onNodesChange, onEdgesChange, autoLayoutElements, graphIndex, flatGraph } = useLaidOutGraph({
    data,
    dataModel
  });
  const { hoverNode, hoverEdge } = useGraphInteractionActions();
  const onNodeMouseEnter = reactExports.useCallback(
    (_event, node) => {
      hoverNode(
        node.id,
        node.type === "person" ? shortestPathUnion(graphIndex, flatGraph.startKey, node.id) : EMPTY_HOVER_TRAIL
      );
    },
    [hoverNode, graphIndex, flatGraph.startKey]
  );
  const onNodeMouseLeave = reactExports.useCallback(() => {
    hoverNode(null);
  }, [hoverNode]);
  const onEdgeMouseEnter = reactExports.useCallback(
    (_event, edge) => hoverEdge(edge.id),
    [hoverEdge]
  );
  const onEdgeMouseLeave = reactExports.useCallback(
    (event) => {
      const next = event.relatedTarget;
      if (next instanceof Element && next.closest("[data-graph-edge-label]")) return;
      hoverEdge(null);
    },
    [hoverEdge]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx(GraphIndexProvider, { index: graphIndex, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    index,
    {
      className: "h-full min-h-0",
      nodeTypes: graphNodeTypes,
      edgeTypes: graphEdgeTypes,
      nodes,
      edges,
      onNodesChange,
      onEdgesChange,
      onNodeMouseEnter,
      onNodeMouseLeave,
      onEdgeMouseEnter,
      onEdgeMouseLeave,
      fitView: true,
      fitViewOptions: graphFitViewOptions,
      maxZoom: 5,
      minZoom: 0.1,
      nodesConnectable: false,
      zoomOnScroll: false,
      proOptions: { hideAttribution: true },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(GraphMeasuredLayout, { layoutElements: autoLayoutElements })
    }
  ) });
}
const COMPATIBLE_SEMANTIC_TYPES = [
  /* @__PURE__ */ new Set(["foreign_key", "unique_id"])
];
function CreateRelationsPanel({ open, onClose }) {
  const { t } = useTranslation(["data", "common"]);
  const { isCreateDataModelTableAvailable: canEdit } = useDataModelFeatureAccess();
  const relationsQuery = useListGraphRelationsQuery();
  const groups = reactExports.useMemo(
    () => relationsQuery.data ? groupRelationsByGroupId(relationsQuery.data) : [],
    [relationsQuery.data]
  );
  const [addAttribute, setAddAttribute] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Panel.Root,
    {
      open,
      onOpenChange: (state) => {
        if (!state) onClose();
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Panel.Container, { size: "medium", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Panel.Content, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Panel.Header, { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Typo, { variant: "title1", children: t("data:create_relations.panel_title") }),
          canEdit && !addAttribute ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "primary", appearance: "stroked", onClick: () => setAddAttribute(true), children: [
            t("data:create_relations.panel_button"),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "plus", className: "size-4" })
          ] }) : null
        ] }),
        M(relationsQuery).with({ isLoading: true }, () => /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, {})).with({ isError: true }, () => /* @__PURE__ */ jsxRuntimeExports.jsx(CalloutV2, { className: "text-red-primary", children: t("data:create_relations.error") })).otherwise(
          () => canEdit && addAttribute ? /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { color: "grey", className: "p-md text-grey-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(RelationGroupEdit, {}) }) : groups.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-md", children: groups.map((g) => /* @__PURE__ */ jsxRuntimeExports.jsx(RelationGroupDisplay, { group: g, canEdit }, g.id)) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, {})
        ),
        canEdit && addAttribute ? /* @__PURE__ */ jsxRuntimeExports.jsx(Panel.Footer, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Panel.FooterButton,
          {
            onClick: () => setAddAttribute(false),
            variant: "secondary",
            label: t("common:close")
          }
        ) }) : null
      ] }) })
    }
  );
}
function EmptyState() {
  const { t } = useTranslation(["data"]);
  const dataModel = useDataModel();
  const sampleGraphData = useDefaultGraph(dataModel);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-md h-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: t("data:create_relations.empty_state.p1") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: t("data:create_relations.empty_state.p2") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CustomerGraphProvider, { showRiskScore: true, showTags: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ReactFlowProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative min-h-0 flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SampleGraph, { data: sampleGraphData, dataModel }) }) }) })
  ] });
}
function RelationGroupDisplay({ group, canEdit }) {
  const { t } = useTranslation("graph");
  const [isEditing, setIsEditing] = reactExports.useState(false);
  const [isViewing, setIsViewing] = reactExports.useState(false);
  const dataModel = useDataModel();
  const showEdit = canEdit && isEditing;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { color: "grey", className: "p-md text-grey-primary flex flex-col gap-md", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-xs justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs ", children: t("graph:settings.create_label.field") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold", children: group.label })
      ] }),
      showEdit ? /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "primary", appearance: "stroked", mode: "icon", onClick: () => setIsEditing(false), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "x", className: "size-4" }) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "primary", appearance: "stroked", mode: "icon", onClick: () => setIsViewing(!isViewing), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: isViewing ? "eye-slash" : "eye", className: "size-4" }) }),
        canEdit ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "primary", appearance: "stroked", mode: "icon", onClick: () => setIsEditing(true), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "edit-square", className: "size-4" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(DeleteSettingModal, { group })
        ] }) : null
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: showEdit ? /* @__PURE__ */ jsxRuntimeExports.jsx(RelationGroupEdit, { group }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      isViewing && /* @__PURE__ */ jsxRuntimeExports.jsx(RelationPreviewGraph, { relations: group.relations, dataModel }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs ", children: t("graph:settings.create_label.related-fields") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "flex flex-col gap-sm", children: group.relations.map((relation) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "li",
        {
          className: "border-grey-border flex items-center justify-between gap-md rounded-md border px-md py-sm",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(RelationEndpoints, { relation })
        },
        `${relation.groupId}-${relation.id}`
      )) }) })
    ] }) })
  ] });
}
const relationFormSchema = createGraphRelationPayloadSchema.omit({ groupId: true }).extend({ label: string().trim().min(1) });
const emptyRelationEndpoints = { leftType: "", leftField: "", rightType: "", rightField: "" };
function RelationGroupEdit({ group }) {
  const { t } = useTranslation(["graph", "common"]);
  const isNew = group === void 0;
  const createMutation = useCreateGraphRelationMutation();
  const deleteMutation = useDeleteGraphRelationMutation();
  const dataModel = useDataModel();
  const relationsQuery = useListGraphRelationsQuery();
  const [groupId, setGroupId] = reactExports.useState(group?.id ?? null);
  const [isAdding, setIsAdding] = reactExports.useState(isNew);
  const groupIdRef = reactExports.useRef(groupId);
  groupIdRef.current = groupId;
  const relations = reactExports.useMemo(() => {
    if (!groupId) return [];
    const all = relationsQuery.data ?? group?.relations ?? [];
    return all.filter((relation) => relation.groupId === groupId);
  }, [groupId, relationsQuery.data, group?.relations]);
  const relationsRef = reactExports.useRef(relations);
  relationsRef.current = relations;
  const form = useForm({
    defaultValues: { label: group?.label ?? "", ...emptyRelationEndpoints },
    validators: { onSubmit: relationFormSchema },
    onSubmit: ({ value, formApi }) => {
      if (!formApi.state.isValid || isDuplicateRelation(relationsRef.current, value)) return;
      const trimmedLabel = value.label.trim();
      createMutation.mutate(
        { ...value, label: trimmedLabel, groupId: groupIdRef.current ?? void 0 },
        {
          onSuccess: (created) => {
            setGroupId(created.groupId);
            formApi.setFieldValue("label", trimmedLabel);
            formApi.setFieldValue("leftType", "");
            formApi.setFieldValue("leftField", "");
            formApi.setFieldValue("rightType", "");
            formApi.setFieldValue("rightField", "");
            setIsAdding(false);
          }
        }
      );
    }
  });
  const clearEndpoints = () => {
    form.setFieldValue("leftType", "");
    form.setFieldValue("leftField", "");
    form.setFieldValue("rightType", "");
    form.setFieldValue("rightField", "");
  };
  const discardDraft = () => {
    clearEndpoints();
    setIsAdding(false);
  };
  const isLabelLocked = groupId !== null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit(form), className: "flex flex-col gap-lg", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      form.Field,
      {
        name: "label",
        validators: {
          onBlur: relationFormSchema.shape.label,
          onChange: relationFormSchema.shape.label
        },
        children: (field) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { htmlFor: field.name, className: "text-grey-secondary text-xs", children: [
            t("graph:settings.create_label.field"),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: field.name,
                name: field.name,
                value: field.state.value,
                onChange: (event) => field.handleChange(event.currentTarget.value),
                onBlur: field.handleBlur,
                borderColor: field.state.meta.errors.length === 0 ? "greyfigma-90" : "redfigma-47",
                placeholder: t("graph:settings.create_label.placeholder"),
                disabled: isLabelLocked,
                autoFocus: !isLabelLocked
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(FormErrorOrDescription, { errors: getFieldErrors$1(field.state.meta.errors) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "flex flex-col gap-md", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-grey-primary text-sm font-semibold", children: t("graph:settings.relations") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "primary",
            appearance: "stroked",
            mode: "icon",
            "aria-label": t("graph:settings.add_relation"),
            disabled: isAdding,
            onClick: () => setIsAdding(true),
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "plus", className: "size-4" })
          }
        )
      ] }),
      relations.length === 0 && !isAdding ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-grey-secondary text-sm", children: t("graph:settings.relations_empty") }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "flex flex-col gap-sm", children: [
        relations.map((relation) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center justify-between gap-md", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-grey-border  rounded-md border px-md py-sm flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(RelationEndpoints, { relation }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "secondary",
              appearance: "stroked",
              mode: "icon",
              "aria-label": t("graph:settings.delete_relation"),
              disabled: deleteMutation.isPending,
              onClick: () => {
                const isLast = relations.length === 1;
                deleteMutation.mutate(
                  { relationId: relation.id },
                  {
                    onSuccess: () => {
                      if (isNew && isLast) {
                        setGroupId(null);
                        setIsAdding(true);
                      }
                    }
                  }
                );
              },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "x", className: "size-4" })
            }
          )
        ] }, relation.id)),
        isAdding ? /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "border-grey-border flex flex-col gap-md rounded-md border p-md", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-grey-primary text-sm font-semibold", children: t("graph:settings.add_relation") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(form.Subscribe, { selector: (state) => state.values, children: (values) => {
            const { leftType, leftField, rightType, rightField } = values;
            const leftFieldOptions = semanticFields(dataModel.find((table) => table.name === leftType));
            const selectedLeftField = leftFieldOptions.find((field) => field.name === leftField);
            const isComplete = relationFormSchema.safeParse(values).success;
            const isDuplicate = isComplete && isDuplicateRelation(relations, values);
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              isDuplicate ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-primary text-xs", children: t("graph:settings.duplicate") }) : null,
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-end gap-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-w-0 flex-1 flex-wrap gap-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    TableFieldSelect,
                    {
                      label: t("graph:settings.endpoint.left"),
                      tables: dataModel,
                      tableName: leftType,
                      fieldName: leftField,
                      fieldOptions: leftFieldOptions,
                      onTableChange: (name) => {
                        form.setFieldValue("leftType", name);
                        form.setFieldValue("leftField", "");
                      },
                      onFieldChange: (name) => {
                        form.setFieldValue("leftField", name);
                        form.setFieldValue("rightField", "");
                      }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    TableFieldSelect,
                    {
                      label: t("graph:settings.endpoint.right"),
                      tables: dataModel,
                      tableName: rightType,
                      fieldName: rightField,
                      fieldOptions: joinableFields(
                        dataModel.find((table) => table.name === rightType),
                        selectedLeftField
                      ),
                      onTableChange: (name) => {
                        form.setFieldValue("rightType", name);
                        form.setFieldValue("rightField", "");
                      },
                      onFieldChange: (name) => {
                        form.setFieldValue("rightField", name);
                      },
                      disabled: !selectedLeftField
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex shrink-0 gap-xs", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      variant: "secondary",
                      appearance: "stroked",
                      mode: "icon",
                      "aria-label": t("common:cancel"),
                      disabled: createMutation.isPending,
                      onClick: discardDraft,
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "x", className: "size-4" })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      variant: "primary",
                      mode: "icon",
                      type: "submit",
                      "aria-label": t("graph:settings.create_relation"),
                      disabled: !isComplete || isDuplicate || createMutation.isPending,
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "tick", className: "size-4" })
                    }
                  )
                ] })
              ] })
            ] });
          } })
        ] }) : null
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(RelationPreviewGraph, { relations, dataModel })
    ] })
  ] });
}
function RelationPreviewGraph({ relations, dataModel }) {
  const data = useRelationGraph(dataModel, relations);
  if (relations.length === 0) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "relative h-[calc(7.5rem*var(--number-of-relations))]",
      style: { "--number-of-relations": relations.length },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(CustomerGraphProvider, { showRiskScore: true, showTags: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ReactFlowProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full min-h-0 w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SampleGraph, { data, dataModel }) }) }) })
    }
  );
}
function DeleteSettingModal({ group }) {
  const { t } = useTranslation(["graph", "common"]);
  const relationCount = group.relations.length;
  const deleteRelationsMutation = useDeleteGraphRelationsMutation();
  const onDeleteSetting = () => {
    deleteRelationsMutation.mutate(group.relations.map((relation) => relation.id));
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal.Root, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.Trigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "destructive", appearance: "stroked", mode: "icon", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "delete", className: "size-4" }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal.Content, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.Title, { children: t("graph:settings.delete.title") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-lg p-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-s text-grey-primary text-center", children: t("graph:settings.delete.description", { label: group.label, count: relationCount }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal.Footer, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.FooterButton, { isCloseButton: true, label: t("common:cancel"), disabled: deleteRelationsMutation.isPending }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Modal.FooterButton,
          {
            variant: "destructive",
            label: t("common:delete"),
            leadingIcon: "delete",
            onClick: onDeleteSetting,
            disabled: deleteRelationsMutation.isPending
          }
        )
      ] })
    ] })
  ] });
}
function TableFieldSelect({
  label,
  tables,
  tableName,
  fieldName,
  onTableChange,
  onFieldChange,
  fieldOptions,
  disabled,
  tableDisabled
}) {
  const { t } = useTranslation("graph");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-xs", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-grey-secondary text-xs", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        GraphOptionSelect,
        {
          className: "min-w-40",
          value: tableName,
          placeholder: t("graph:settings.placeholder.table"),
          disabled: disabled || tableDisabled,
          options: tables.map((table) => ({ value: table.name, label: table.name })),
          onChange: onTableChange
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        GraphOptionSelect,
        {
          className: "min-w-40",
          value: fieldName,
          placeholder: t("graph:settings.placeholder.field"),
          disabled: disabled || !tableName,
          options: fieldOptions.map((field) => ({
            value: field.name,
            label: field.alias || field.name,
            dataType: field.dataType,
            semanticType: field.semanticType
          })),
          onChange: onFieldChange
        }
      )
    ] })
  ] });
}
function RelationEndpoints({ relation }) {
  const dataModel = useDataModel();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-grey-secondary flex min-w-0 items-center gap-xs text-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(EndpointLabel, { dataModel, tableName: relation.leftType, fieldName: relation.leftField }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "arrow-forward", className: "size-4 shrink-0 text-purple-primary" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(EndpointLabel, { dataModel, tableName: relation.rightType, fieldName: relation.rightField })
  ] });
}
function EndpointLabel({
  dataModel,
  tableName,
  fieldName
}) {
  const field = dataModel.find((table) => table.name === tableName)?.fields.find((f) => f.name === fieldName);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex min-w-0 items-center gap-xs", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "truncate", children: [
      tableName,
      "."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-xs bg-surface-card p-2xs rounded-xs border border-grey-border", children: [
      field ? /* @__PURE__ */ jsxRuntimeExports.jsx(DatatypeIcon, { dataType: DatatypeToPrimitiveType(field.dataType), size: "small" }) : null,
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: fieldName })
    ] })
  ] });
}
function fieldSemanticKey(field) {
  if (!field.semanticType) return null;
  return `${field.semanticType}:${field.semanticSubType ?? ""}`;
}
function areSemanticTypesCompatible(left, right) {
  if (left === right) return true;
  return COMPATIBLE_SEMANTIC_TYPES.some((group) => group.has(left) && group.has(right));
}
function areFieldsJoinable(left, right) {
  const leftKey = fieldSemanticKey(left);
  const rightKey = fieldSemanticKey(right);
  if (!leftKey || !rightKey || !left.semanticType || !right.semanticType) return false;
  if (leftKey === rightKey) return true;
  if (left.semanticType === right.semanticType && left.semanticSubType !== right.semanticSubType) return false;
  return areSemanticTypesCompatible(left.semanticType, right.semanticType);
}
function semanticFields(table) {
  return (table?.fields ?? []).filter((field) => fieldSemanticKey(field) != null);
}
function joinableFields(rightTable, leftField) {
  if (!rightTable || !leftField) return [];
  return rightTable.fields.filter((field) => areFieldsJoinable(leftField, field));
}
function groupRelationsByGroupId(relations) {
  const groups = /* @__PURE__ */ new Map();
  for (const relation of relations) {
    const existing = groups.get(relation.groupId);
    if (existing) {
      existing.relations.push(relation);
    } else {
      groups.set(relation.groupId, { id: relation.groupId, label: relation.label, relations: [relation] });
    }
  }
  return [...groups.values()];
}
function isDuplicateRelation(relations, candidate) {
  return relations.some(
    (relation) => relation.leftType === candidate.leftType && relation.leftField === candidate.leftField && relation.rightType === candidate.rightType && relation.rightField === candidate.rightField
  );
}
function useCreateTableForm(onSubmit) {
  return useForm({
    defaultValues: defaultCreateTableFormValues,
    onSubmit: ({ value }) => onSubmit(value)
  });
}
const CreateTableFormContext = reactExports.createContext(null);
function useCreateTableFormContext() {
  const ctx = reactExports.useContext(CreateTableFormContext);
  if (!ctx) throw new Error("useCreateTableFormContext must be used within CreateTableDrawer");
  return ctx;
}
function CreateTableEntityStep({ errorFields }) {
  const form = useCreateTableFormContext();
  const { t } = useTranslation(["data"]);
  const dataModel = useDataModel();
  const selectedEntityType = useStore(form.store, (state) => state.values.entityType);
  const selectedSubEntity = useStore(form.store, (state) => state.values.subEntity);
  const selectedBelongsToTableId = useStore(form.store, (state) => state.values.belongsToTableId);
  const personOrOtherTables = reactExports.useMemo(() => dataModel.filter(isLinkableTable), [dataModel]);
  const canSelectTypeThatNeedsAPerson = personOrOtherTables.length > 0;
  const hasNameError = errorFields?.has("name") ?? false;
  const hasEntityTypeError = errorFields?.has("entityType") ?? false;
  const hasSubEntityError = errorFields?.has("subEntity") ?? false;
  const hasBelongsToError = errorFields?.has("belongsToTableId") ?? false;
  const linkTargetOptions = reactExports.useMemo(
    () => personOrOtherTables.map((table) => ({
      label: table.alias || table.name,
      value: table.id
    })),
    [personOrOtherTables]
  );
  function handleEntitySelect(entity) {
    form.setFieldValue("entityType", entity);
    form.setFieldValue("subEntity", "moral");
    form.setFieldValue("belongsToTableId", "");
  }
  function handleSubEntitySelect(sub) {
    form.setFieldValue("subEntity", sub);
  }
  function isEntityDisabled(entity) {
    return requiresLink(entity) && !canSelectTypeThatNeedsAPerson;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-lg", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-md", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        form.Field,
        {
          name: "name",
          validators: {
            onChange: ({ value }) => {
              if (value.length > 0 && !isValidDataModelName(value)) {
                return { message: t("data:create_table.name_regex_error") };
              }
              return void 0;
            }
          },
          children: (field) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 flex-col gap-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { name: field.name, children: t("data:create_table.name_label") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              FormInput,
              {
                type: "text",
                name: field.name,
                defaultValue: field.state.value,
                onChange: (e) => field.handleChange(e.currentTarget.value),
                onBlur: field.handleBlur,
                valid: field.state.meta.errors.length === 0 && !hasNameError,
                placeholder: t("data:create_table.name_placeholder")
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(FormErrorOrDescription, { errors: getFieldErrors$1(field.state.meta.errors) })
          ] })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(form.Field, { name: "alias", children: (field) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 flex-col gap-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { name: field.name, children: t("data:create_table.alias_label") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          FormInput,
          {
            type: "text",
            name: field.name,
            defaultValue: field.state.value,
            onChange: (e) => field.handleChange(e.currentTarget.value),
            onBlur: field.handleBlur,
            valid: field.state.meta.errors.length === 0,
            placeholder: t("data:create_table.alias_placeholder")
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(FormErrorOrDescription, { errors: getFieldErrors$1(field.state.meta.errors) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("flex flex-col gap-md rounded-lg", hasEntityTypeError && "border border-red-primary p-md"), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-s font-medium", children: t("data:create_table.choose_entity") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-sm", children: ftmEntities.map((entity) => {
        const isSelected = selectedEntityType === entity;
        const disabled = isEntityDisabled(entity);
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: () => !disabled && handleEntitySelect(entity),
              disabled,
              className: cn(
                "flex items-center gap-sm rounded-md px-md py-xs text-left text-s transition-colors",
                isSelected && "text-purple-primary font-medium",
                !isSelected && !disabled && "text-grey-primary hover:bg-grey-bg",
                disabled && "cursor-not-allowed opacity-50"
              ),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: cn(
                      "flex size-4 shrink-0 items-center justify-center rounded-full border-2 transition-colors",
                      isSelected ? "border-purple-primary" : "border-grey-border"
                    ),
                    children: isSelected ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "size-2 rounded-full bg-purple-primary" }) : null
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t(`data:upload_data.ftm_entity.${entity}`) })
              ]
            }
          ),
          disabled ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ms-3xl text-xs text-grey-secondary", children: t("data:create_table.entity_disabled_hint") }) : null,
          isSelected && entity === "person" ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            SubEntityOptions,
            {
              options: [...ftmEntityPersonOptions],
              selected: selectedSubEntity,
              onSelect: handleSubEntitySelect,
              labelPrefix: "data:upload_data.ftm_entity_person",
              hasError: hasSubEntityError
            }
          ) : null,
          isSelected && requiresLink(entity) ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ms-3xl mt-xs flex items-center gap-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-grey-secondary", children: t("data:create_table.belongs_to") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SelectV2,
              {
                value: selectedBelongsToTableId,
                placeholder: t("data:create_table.select_destination_table"),
                onChange: (value) => form.setFieldValue("belongsToTableId", value),
                options: linkTargetOptions,
                className: cn("w-60", hasBelongsToError && "border-red-primary")
              }
            )
          ] }) : null
        ] }, entity);
      }) })
    ] })
  ] });
}
function SubEntityOptions({
  options,
  selected,
  onSelect,
  labelPrefix,
  hasError
}) {
  const { t } = useTranslation(["data"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: cn("ms-3xl flex flex-col gap-xs rounded-md bg-grey-bg p-sm", hasError && "border border-red-primary"),
      children: options.map((option) => {
        const isSelected = selected === option;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => onSelect(option),
            className: cn(
              "flex items-center gap-sm rounded px-xs py-2xs text-left text-s transition-colors",
              isSelected && "text-purple-primary font-medium",
              !isSelected && "text-grey-primary hover:bg-grey-border"
            ),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: cn(
                    "flex size-3.5 shrink-0 items-center justify-center rounded-full border-2 transition-colors",
                    isSelected ? "border-purple-primary" : "border-grey-border"
                  ),
                  children: isSelected ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "size-1.5 rounded-full bg-purple-primary" }) : null
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t(`${labelPrefix}.${option}`) })
            ]
          },
          option
        );
      })
    }
  );
}
function CreateTableFieldsStep({
  errorFieldIds,
  hasError
}) {
  const { t } = useTranslation(["data"]);
  const form = useCreateTableFormContext();
  const dataModel = useDataModel();
  const fields = useStore(form.store, (s) => s.values.fields);
  const mainTimestampFieldName = useStore(form.store, (s) => s.values.mainTimestampFieldName);
  const entityType = useStore(form.store, (s) => s.values.entityType);
  const belongsToTableId = useStore(form.store, (s) => s.values.belongsToTableId);
  const [selectedFieldId, setSelectedFieldId] = reactExports.useState(null);
  const belongsToTableName = reactExports.useMemo(
    () => dataModel.find((table) => table.id === belongsToTableId)?.name,
    [belongsToTableId, dataModel]
  );
  reactExports.useEffect(() => {
    form.setFieldValue("fields", (prev) => {
      const withoutDefault = prev.filter((field) => !field.isDefaultBelongsTo);
      if (!belongsToTableName) return withoutDefault;
      const fieldName = `${belongsToTableName}_id`;
      const hasExistingForeignKeyField = withoutDefault.some(
        (field) => field.name === fieldName || field.foreignkeyTable === belongsToTableName
      );
      if (hasExistingForeignKeyField) return withoutDefault;
      const defaultForeignKeyField = {
        id: crypto.randomUUID(),
        name: fieldName,
        description: "",
        dataType: "String",
        tableId: "",
        isEnum: false,
        nullable: true,
        alias: fieldName,
        hidden: false,
        unicityConstraint: "no_unicity_constraint",
        semanticType: "foreign_key",
        foreignkeyTable: belongsToTableName,
        isDefaultBelongsTo: true,
        isNew: true
      };
      return [...withoutDefault, defaultForeignKeyField];
    });
  }, [belongsToTableName, form]);
  const updateField = reactExports.useCallback(
    (fieldId, values) => {
      form.setFieldValue("fields", (prev) => prev.map((f) => f.id === fieldId ? { ...f, ...values } : f));
    },
    [form]
  );
  const reorderFields = reactExports.useCallback(
    (startIndex, endIndex) => {
      form.setFieldValue("fields", (prev) => {
        const next = [...prev];
        const [moved] = next.splice(startIndex, 1);
        next.splice(endIndex, 0, moved);
        return next;
      });
    },
    [form]
  );
  const addField = reactExports.useCallback(
    (name) => {
      const fieldId = crypto.randomUUID();
      form.setFieldValue("fields", (prev) => [
        ...prev,
        {
          id: fieldId,
          name,
          description: "",
          dataType: "String",
          isEnum: false,
          nullable: true,
          alias: name,
          hidden: false,
          unicityConstraint: "no_unicity_constraint",
          isNew: true,
          semanticType: "text",
          tableId: ""
        }
      ]);
      return fieldId;
    },
    [form]
  );
  const removeField = reactExports.useCallback(
    (fieldId) => {
      form.setFieldValue("fields", (prev) => prev.filter((f) => f.id !== fieldId));
      if (selectedFieldId === fieldId) setSelectedFieldId(null);
    },
    [form, selectedFieldId]
  );
  const setMainTimestampFieldName = reactExports.useCallback(
    (fieldName) => {
      form.setFieldValue("mainTimestampFieldName", fieldName);
    },
    [form]
  );
  const editorValue = reactExports.useMemo(
    () => ({
      fields,
      mainTimestampFieldName,
      updateField,
      reorderFields,
      addField,
      removeField,
      setMainTimestampFieldName
    }),
    [fields, mainTimestampFieldName, updateField, reorderFields, addField, removeField, setMainTimestampFieldName]
  );
  const title = entityType ? t("data:create_table.suggested_fields_title", {
    entity: t(`data:upload_data.ftm_entity.${entityType}`)
  }) : t("data:create_table.suggested_fields_title_default");
  return /* @__PURE__ */ jsxRuntimeExports.jsx(FieldsEditorContext.Provider, { value: editorValue, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 min-h-0 gap-lg", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-w-0 flex-1 min-h-0 flex flex-col", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      FieldsForm,
      {
        onFieldSelect: setSelectedFieldId,
        selectedFieldId,
        title,
        description: t("data:create_table.suggested_fields_description"),
        droppableId: "create-table-fields",
        errorFieldIds,
        hasError
      }
    ) }),
    selectedFieldId ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      FieldDetailPanel,
      {
        fieldId: selectedFieldId,
        onClose: () => setSelectedFieldId(null),
        title: t("data:create_table.detailed_setup_title")
      }
    ) : null
  ] }) });
}
function CreateTableLinksStep({
  errorLinkIds,
  hasError
}) {
  const form = useCreateTableFormContext();
  const { t } = useTranslation(["data"]);
  const dataModel = useDataModel();
  const tableName = useStore(form.store, (s) => s.values.name);
  const tableAlias = useStore(form.store, (s) => s.values.alias);
  const fields = useStore(form.store, (s) => s.values.fields);
  const links = useStore(form.store, (s) => s.values.links);
  const initializedRef = reactExports.useRef(false);
  reactExports.useEffect(() => {
    if (initializedRef.current) return;
    initializedRef.current = true;
    if (links.length > 0) return;
    const inferred = fields.filter((f) => f.foreignkeyTable).map((f) => {
      const savedTarget = dataModel.find((t2) => t2.name === f.foreignkeyTable);
      const targetTableId = savedTarget?.id ?? "";
      return {
        linkId: crypto.randomUUID(),
        name: `${tableName}_${f.foreignkeyTable}_link`,
        tableFieldId: f.name,
        relationType: f.isDefaultBelongsTo ? "belongs_to" : "related",
        targetTableId,
        sourceTableId: ""
      };
    });
    if (inferred.length > 0) form.setFieldValue("links", inferred);
  }, [fields, dataModel, form, links.length]);
  const destinationTableOptions = reactExports.useMemo(
    () => [
      ...dataModel.map((table) => ({ tableId: table.id, label: table.name })),
      {
        tableId: CREATE_TABLE_SELF_LINK_TARGET_ID,
        label: tableAlias.trim() || tableName.trim() || t("data:create_table.current_table_option"),
        isCurrentTable: true
      }
    ],
    [dataModel, tableAlias, tableName, t]
  );
  const updateLink = reactExports.useCallback(
    (linkId, values) => form.setFieldValue("links", (prev) => prev.map((l) => l.linkId === linkId ? { ...l, ...values } : l)),
    [form]
  );
  const addLink = reactExports.useCallback(
    () => form.setFieldValue("links", (prev) => [
      ...prev,
      {
        linkId: crypto.randomUUID(),
        name: "",
        tableFieldId: "",
        relationType: "related",
        targetTableId: "",
        sourceTableId: ""
      }
    ]),
    [form]
  );
  const removeLink = reactExports.useCallback(
    (linkId) => form.setFieldValue("links", (prev) => prev.filter((l) => l.linkId !== linkId)),
    [form]
  );
  const editorValue = {
    links,
    sourceTableName: tableAlias.trim() || tableName.trim(),
    sourceTableFields: fields,
    destinationTableOptions,
    updateLink,
    addLink,
    removeLink
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(LinksEditorContext.Provider, { value: editorValue, children: /* @__PURE__ */ jsxRuntimeExports.jsx(LinkForm, { errorLinkIds, hasError }) });
}
function CreateTableDrawer({
  open,
  onClose,
  onSave
}) {
  const { t } = useTranslation(["data", "common"]);
  const dataModel = useDataModel();
  const [currentStep, setCurrentStep] = reactExports.useState(0);
  const [validationErrors, setValidationErrors] = reactExports.useState([]);
  const [isUnsavedChangesDialogOpen, setIsUnsavedChangesDialogOpen] = reactExports.useState(false);
  const form = useCreateTableForm(async (value) => {
    if (!form.state.isValid) return;
    const checkValidation = validateValues(value, "all", t, false, dataModel);
    if (!checkValidation.ok) {
      setValidationErrors(checkValidation.errors);
      return;
    }
    setValidationErrors([]);
    const saved = await onSave(value);
    if (!saved) return;
    form.reset();
    setCurrentStep(0);
  });
  const handleClose = reactExports.useCallback(() => {
    setIsUnsavedChangesDialogOpen(false);
    setValidationErrors([]);
    form.reset();
    setCurrentStep(0);
    onClose();
  }, [form, onClose]);
  const steps = reactExports.useMemo(
    () => [
      { key: "entity", label: t("data:create_table.step_entity") },
      { key: "fields", label: t("data:create_table.step_fields") },
      { key: "links", label: t("data:create_table.step_links") }
    ],
    [t]
  );
  const formValues = useStore(form.store, (state) => state.values);
  const isDirty = useStore(form.store, (state) => state.isDirty);
  const currentValidationScope = reactExports.useMemo(() => {
    if (currentStep === 0) return "table";
    if (currentStep === 1) return "fields";
    return "links";
  }, [currentStep]);
  const handleBackdropClose = reactExports.useCallback(() => {
    if (!isDirty) {
      handleClose();
      return;
    }
    setIsUnsavedChangesDialogOpen(true);
  }, [handleClose, isDirty]);
  const handleConfirmDiscardChanges = reactExports.useCallback(() => {
    handleClose();
  }, [handleClose]);
  const tableErrorFields = reactExports.useMemo(
    () => new Set(
      validationErrors.filter((error) => error.kind === "table").map((error) => error.field)
    ),
    [validationErrors]
  );
  const fieldErrorIds = reactExports.useMemo(
    () => new Set(
      validationErrors.filter((error) => error.kind === "field").map((error) => error.fieldId)
    ),
    [validationErrors]
  );
  const linkErrorIds = reactExports.useMemo(
    () => new Set(
      validationErrors.filter((error) => error.kind === "link").map((error) => error.linkId)
    ),
    [validationErrors]
  );
  function handleNext(e) {
    e.preventDefault();
    e.stopPropagation();
    const result = validateValues(formValues, currentValidationScope, t, true, dataModel);
    if (!result.ok) {
      setValidationErrors(result.errors);
      return;
    }
    setValidationErrors([]);
    setCurrentStep((s) => s + 1);
  }
  function handleBack() {
    if (currentStep > 0) {
      setValidationErrors([]);
      setCurrentStep((s) => s - 1);
    }
  }
  if (!open) return;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(CreateTableFormContext.Provider, { value: form, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Panel.Root,
      {
        open,
        onOpenChange: (state) => {
          if (!state) {
            handleBackdropClose();
          }
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Panel.Container, { size: "large", children: /* @__PURE__ */ jsxRuntimeExports.jsx("form", { onSubmit: handleSubmit(form), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Panel.Content, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Panel.Header, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex shrink-0 items-center gap-md", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typo, { variant: "subtitle1", className: "flex-1", children: t("data:create_table.title") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Stepper, { steps, currentStep })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col", children: [
            currentStep === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(CreateTableEntityStep, { errorFields: tableErrorFields }) : null,
            currentStep === 1 ? /* @__PURE__ */ jsxRuntimeExports.jsx(CreateTableFieldsStep, { errorFieldIds: fieldErrorIds, hasError: validationErrors.length > 0 }) : null,
            currentStep === 2 ? /* @__PURE__ */ jsxRuntimeExports.jsx(CreateTableLinksStep, { errorLinkIds: linkErrorIds, hasError: validationErrors.length > 0 }) : null
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Panel.Footer, { children: [
            validationErrors.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(Callout, { color: "red", icon: "lightbulb", iconColor: "red", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "flex flex-col gap-xs ps-md", children: validationErrors.map((error, index2) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: error.message }, `${error.kind}-${index2}`)) }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-md ms-auto", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Panel.FooterButton, { variant: "secondary", onClick: handleBackdropClose, label: t("common:cancel") }),
              currentStep > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                Panel.FooterButton,
                {
                  variant: "secondary",
                  onClick: handleBack,
                  label: t("data:create_table.button_back")
                }
              ) : null,
              currentStep === 2 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                Panel.FooterButton,
                {
                  variant: "primary",
                  type: "submit",
                  label: t("data:create_table.button_save_table")
                }
              ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                Panel.FooterButton,
                {
                  variant: "primary",
                  onClick: handleNext,
                  type: "button",
                  label: t("data:create_table.button_next")
                }
              )
            ] })
          ] })
        ] }) }) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      UnsavedChangesDialog,
      {
        open: isUnsavedChangesDialogOpen,
        onOpenChange: setIsUnsavedChangesDialogOpen,
        onConfirm: handleConfirmDiscardChanges
      }
    )
  ] });
}
const useExportOrgMutation = () => {
  const router = useRouter();
  return useMutation({
    mutationKey: ["data", "export-org"],
    mutationFn: async () => {
      const endpoint = router.buildLocation({ to: "/ressources/data/export-org" });
      const response = await fetch(endpoint.href);
      if (!response.ok) {
        throw new Error("Export failed");
      }
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "org-export.json";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      return { success: true };
    }
  });
};
function DataPageHeader({
  handleOpenCreateDrawer,
  handleCreateRelations
}) {
  const { t } = useTranslation(["navigation"]);
  const { isCreateDataModelTableAvailable, isGraphExplorationEnabled, isGraphExplorationAvailable } = useDataModelFeatureAccess();
  const exportOrgMutation = useExportOrgMutation();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-md", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Typo, { variant: "title1", children: t("navigation:data") }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          variant: "secondary",
          appearance: "stroked",
          onClick: () => exportOrgMutation.mutate(),
          disabled: exportOrgMutation.isPending,
          children: [
            exportOrgMutation.isPending ? /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "spinner", className: "size-5 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "download", className: "size-5" }),
            t("data:export_org.button")
          ]
        }
      ),
      isCreateDataModelTableAvailable && isGraphExplorationEnabled && isGraphExplorationAvailable ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "primary", appearance: "stroked", onClick: handleCreateRelations, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "filters", className: "size-5" }),
        t("data:create_relations.title")
      ] }) : null,
      isCreateDataModelTableAvailable ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "primary", onClick: handleOpenCreateDrawer, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "plus", className: "size-5" }),
        t("data:create_table.title")
      ] }) : null
    ] })
  ] });
}
const useCreateTableMutation = () => {
  const createTable = useServerFn(createTableFn);
  return useMutation({
    mutationKey: ["data", "create-table"],
    mutationFn: async (table) => createTable({ data: table }),
    onError: (error) => {
      if (isTableMutationError(error)) {
        zt.error(formatTableMutationError(error));
      }
    }
  });
};
function DataList() {
  const {
    t
  } = useTranslation(handle.i18n);
  const dataModel = useDataModel();
  const {
    isGraphExplorationEnabled,
    isGraphExplorationAvailable
  } = useDataModelFeatureAccess();
  const revalidate = useLoaderRevalidator();
  const createTableMutation = useCreateTableMutation();
  const [isCreateDrawerOpen, setIsCreateDrawerOpen] = reactExports.useState(false);
  const [isCreateRelationsOpen, setIsCreateRelationsOpen] = reactExports.useState(false);
  const isEmpty = dataModel.length === 0;
  const handleOpenCreateDrawer = () => setIsCreateDrawerOpen(true);
  const handleCreateRelations = () => setIsCreateRelationsOpen(true);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-full min-h-0 flex-1 flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Page.Content, { width: "fluid", className: "min-h-0 flex-1", children: [
      isEmpty ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyHeader, { onCreateTable: handleOpenCreateDrawer }) : /* @__PURE__ */ jsxRuntimeExports.jsx(DataPageHeader, { handleOpenCreateDrawer, handleCreateRelations }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CalloutV2, { children: t("data:callout") }),
      isEmpty ? /* @__PURE__ */ jsxRuntimeExports.jsx(DataListEmptyState, { onCreateTable: handleOpenCreateDrawer }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-[min(600px,75vh)] w-full min-h-[min(600px,75vh)] flex-1 flex-col", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ClientOnly, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex size-full items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, { className: "size-8" }) }) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CreateTableDrawer, { open: isCreateDrawerOpen, onClose: () => setIsCreateDrawerOpen(false), onSave: async (values) => {
      try {
        await createTableMutation.mutateAsync(adaptCreateTableValue(values));
        setIsCreateDrawerOpen(false);
        revalidate();
        return true;
      } catch {
        return false;
      }
    } }),
    isGraphExplorationEnabled && isGraphExplorationAvailable ? /* @__PURE__ */ jsxRuntimeExports.jsx(CreateRelationsPanel, { open: isCreateRelationsOpen, onClose: () => setIsCreateRelationsOpen(false) }) : null
  ] });
}
function EmptyHeader({
  onCreateTable
}) {
  const {
    t
  } = useTranslation(["navigation", "data"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-md", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Typo, { variant: "title1", className: "flex-1", children: t("data:data-model") }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(MenuCommand.Menu, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Trigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { type: "button", size: "medium", children: [
        t("data:empty_state.create_table.title"),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "plus", className: " size-4" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Content, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(MenuCommand.List, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Item, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(ImportOrg, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-sm cursor-pointer", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "upload", className: "size-4" }),
          t("data:create_new_table.from_file")
        ] }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Item, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "flex items-center gap-sm", onClick: onCreateTable, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "edit", className: "size-4" }),
          t("data:create_new_table.manually")
        ] }) })
      ] }) })
    ] })
  ] }) });
}
function DataListEmptyState({
  onCreateTable
}) {
  const {
    t
  } = useTranslation(handle.i18n);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "px-lg py-2xl grid gap-md", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid py-xl w-full place-items-center gap-lg", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold", children: t("data:empty_state.title") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-grey-secondary", children: t("data:empty_state.description") })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectArchetype, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { type: "button", appearance: "stroked", size: "medium", className: "w-full justify-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("data:empty_state.select_archetype.title") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "category", className: "size-4" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ImportOrg, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { type: "button", appearance: "stroked", size: "medium", className: "w-full justify-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("data:empty_state.import_org.title") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "upload", className: "size-4" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { type: "button", appearance: "stroked", size: "medium", className: "w-full justify-center", onClick: onCreateTable, children: [
        t("data:empty_state.create_table.title"),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "plus", className: " size-4" })
      ] })
    ] })
  ] }) });
}
export {
  DataList as component
};

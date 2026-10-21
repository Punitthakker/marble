import { M as reactExports, Q as jsxRuntimeExports, R as React } from "./server.mjs";
import { u as useTranslation, B as Button, I as Icon, al as Tabs, am as tabClassName, d as cn, T as Trans, a6 as Input, c as clsx } from "./Tabs-CzpyUi7T.mjs";
import { u as t$e, v as n$7, o as t$9, ct as isScreeningError, du as isScreeningReviewCompleted, a2 as M, cu as t$1 } from "./services-middleware-nMulUXHZ.mjs";
import { c as casesI18n } from "./cases-i18n-CKTv5qXV.mjs";
import { Z as useLoaderData, x as useAgnosticNavigation, I as screeningsI18n, T as Tooltip, ae as ScreeningStatusTag, b6 as dataI18n } from "./router-KSC-NEr8.mjs";
import { T as Tag, C as CopyToClipboardButton, z as zt } from "./create-context-k6HmQ6bB.mjs";
import { S as ScreeningErrors, g as getPivotDisplayValue } from "./ScreeningErrors-B_SEPr63.mjs";
import { C as Code } from "./Code-NcjS_4uC.mjs";
import { I as IngestedObjectDetailModal } from "./IngestedObjectDetailModal-CBuAoLJ_.mjs";
import { C as CaseDetailTriggerObject, M as MatchCard } from "./TriggerObjectDetail-7kaKKuXk.mjs";
import { F as FormatData } from "./FormatData-CcbzFq6m.mjs";
import { u as useEntityName } from "./useEntityName-D6YnMwkD.mjs";
import { p as parseUnknownData } from "./DataField-BczNbAhi.mjs";
import { a as Callout } from "./Callout-B0OuRL3q.mjs";
import { S as SEARCH_ENTITIES } from "./screening-entity-cwm_Y847.mjs";
import { a as useSearchScreeningMatchesMutation, u as useRefineScreeningMutation } from "./search-screening-matches-R0JT2NOa.mjs";
import { r as refineSearchSchema } from "./screenings-C_YbbaUO.mjs";
import { h as handleSubmit } from "./form-D2XmDKeG.mjs";
import { u as useCallbackRef } from "./use-callback-ref-Bwe341Yf.mjs";
import { u as useStore } from "./useStore-C3gZU5bu.mjs";
import { u as useForm } from "./useForm-qNQ8S9xN.mjs";
import { M as Modal } from "./Modal-CpYmGWjB.mjs";
import { a as Select } from "./Select-Dg3p9vJ0.mjs";
import { s as setAdditionalFields } from "./set-additional-fields-BAjwURJS.mjs";
import { n } from "./flat-CiXFfT8Y.mjs";
import { t } from "./flatMap-CdA7bREZ.mjs";
import { t as t$2 } from "./keys-DjoJs5YL.mjs";
import { e } from "./isNonNullish-DgEqPJBU.mjs";
import { f as fromUUIDtoSUUID } from "./short-uuid-fTZYJj_k.mjs";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "./use-callback-ref-DoQNLci-.mjs";
import "./sharpstate.es-C0BW2AZi.mjs";
import "./formatDistanceStrict-DEEeAR-Y.mjs";
import "node:crypto";
import "./decisions-i18n-Cg4JM_3r.mjs";
import "./query-BmG5BEas.mjs";
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
import "./LoaderRevalidatorContext-BEuG7sHs.mjs";
import "./useMutation-BOdeDeAR.mjs";
import "./useServerFn-oRH5Nw97.mjs";
import "./Collapsible-CKx8cmdD.mjs";
import "./index-22HmyALM.mjs";
import "./FreeformMatchCard-ClTnPmkJ.mjs";
import "./Spinner-DmLieYoS.mjs";
import "./useQuery-Bb0AEcpf.mjs";
import "./useBaseQuery-BqF2iw7Y.mjs";
import "./dataset-utils-CXMfULsv.mjs";
import "./lists-config-DL0Z5yQK.mjs";
import "./ExpandableGroupTagLine-MgT0uQKb.mjs";
import "./Popover-Cp1XdSV2.mjs";
import "./cases-BQ48izmh.mjs";
import "./cases-C-fVFrVL.mjs";
import "./Switch-BV-_0Knl.mjs";
import "./TextArea-p2rzbOeQ.mjs";
import "./CommentLine-D8LO9NpB.mjs";
import "./organization-users-CEJGnALa.mjs";
import "./user-Dgp6KqPL.mjs";
import "./join-Ce2xPJwm.mjs";
import "./Avatar-DDGL3Siw.mjs";
import "./mapToObj-C7dg8HnM.mjs";
import "./maplibre-gl-BcA3NZzV.mjs";
import "./ExternalLink-BlVgwkVd.mjs";
import "./data-9UajV2HK.mjs";
import "./data-BXamdbTM.mjs";
import "./tryCatch-CFf1qt2b.mjs";
import "./data-model-Dfj0lN5a.mjs";
import "./omit-qKVZGDJg.mjs";
import "./hasAtLeast-BmuNoqMd.mjs";
import "./array-BFSjnO9c.mjs";
import "./isNullish-B8pc8Ntu.mjs";
function PivotDetails({ pivot }) {
  const { t: t2 } = useTranslation(dataI18n);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-start gap-md", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-wrap", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PivotDescription, { ...{ pivot } }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-row items-center gap-md", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-grey-secondary text-s min-w-[90px]", children: t2("data:view_pivot.table") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-m text-grey-primary", children: pivot.type === "link" ? pivot.pivotTable : pivot.baseTable })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-row items-center gap-md", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-grey-secondary text-s min-w-[90px]", children: t2("data:view_pivot.definition") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: getPivotDisplayValue(pivot) })
    ] })
  ] });
}
function PivotDescription({ pivot }) {
  const { t: t2 } = useTranslation(dataI18n);
  if (pivot.type === "link") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Trans,
      {
        i18nKey: "data:view_pivot.link.description",
        values: {
          child: pivot.baseTable,
          parent: pivot.pivotTable,
          link: getPivotDisplayValue(pivot)
        },
        components: {
          Code: /* @__PURE__ */ jsxRuntimeExports.jsx(Code, {})
        }
      }
    );
  }
  if (pivot.type === "field" && pivot.field === "object_id") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Trans,
      {
        t: t2,
        i18nKey: "data:view_pivot.self_link.description",
        values: { table: pivot.baseTable },
        components: {
          Code: /* @__PURE__ */ jsxRuntimeExports.jsx(Code, {})
        }
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Trans,
    {
      t: t2,
      i18nKey: "data:view_pivot.field.description",
      values: { table: pivot.baseTable, field: pivot.field },
      components: {
        Code: /* @__PURE__ */ jsxRuntimeExports.jsx(Code, {})
      }
    }
  );
}
function CasePivotValues({
  pivotValues
}) {
  const { i18n } = useTranslation(casesI18n);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-[repeat(2,max-content)] items-center gap-sm", children: pivotValues.map(({ pivot, value }) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(React.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Tag,
        {
          size: "big",
          color: pivot.type === "field" ? "grey" : "purple",
          className: "col-start-1 flex flex-row gap-sm",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1", children: pivot.type }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Tooltip.Default,
              {
                arrow: false,
                delayDuration: 0,
                side: i18n.dir() === "ltr" ? "right" : "left",
                sideOffset: 16,
                content: /* @__PURE__ */ jsxRuntimeExports.jsx(PivotDetails, { pivot }),
                className: "border-grey-border flex max-h-none w-fit border shadow-md",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    className: cn(
                      "cursor-pointer transition-colors",
                      pivot.type === "field" && "text-grey-disabled hover:text-grey-secondary",
                      pivot.type === "link" && "hover:text-purple-primary text-purple-disabled"
                    ),
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "tip", className: "size-5" })
                  }
                )
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CopyToClipboardButton, { toCopy: value, className: "bg-surface-card", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-s line-clamp-1 max-w-40 font-normal", children: value }) })
    ] }, pivot.id);
  }) });
}
const QueryObjectDetail = ({ query }) => {
  const { getEntityName } = useEntityName();
  const parsed = reactExports.useMemo(
    () => Object.entries(query.properties).map(([k, v]) => [k, parseUnknownData(v)]),
    [query.properties]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-s text-grey-primary bg-grey-background-light grid grid-cols-[max-content_1fr] gap-md gap-x-4 break-all rounded-lg p-md mb-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "type" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: getEntityName(query.schema) }),
    parsed.map(([property, data]) => /* @__PURE__ */ jsxRuntimeExports.jsxs(reactExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: property }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FormatData, { data })
    ] }, property))
  ] });
};
function ScreeningQueryDetail({
  request,
  initialQuery
}) {
  const { t: t2 } = useTranslation(screeningsI18n);
  const processedQueries = Object.values(request.queries);
  const hasInitialQuery = Array.isArray(initialQuery) && initialQuery.length > 0;
  const [activeTab, setActiveTab] = reactExports.useState("preprocessed");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { children: [
      hasInitialQuery && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          className: tabClassName,
          "data-status": activeTab === "initial" ? "active" : void 0,
          onClick: () => setActiveTab("initial"),
          children: t2("screenings:initial_query")
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          className: tabClassName,
          "data-status": activeTab === "preprocessed" ? "active" : void 0,
          onClick: () => setActiveTab("preprocessed"),
          children: !hasInitialQuery ? t2("screenings:query") : t2("screenings:processed_query")
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-sm", children: [
      activeTab === "initial" && hasInitialQuery && /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: initialQuery.map((q, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(QueryObjectDetail, { query: q }, i)) }),
      activeTab === "preprocessed" && /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: processedQueries.map((q, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(QueryObjectDetail, { query: q }, i)) })
    ] })
  ] });
}
function MatchResult({ entity }) {
  const { t: t2 } = useTranslation(screeningsI18n);
  const entitySchema = entity.schema.toLowerCase();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-s bg-grey-background-light flex items-center rounded-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-sm p-md", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "max-w-60 truncate font-semibold", children: entity.caption }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t2(`screenings:entity.schema.${entitySchema}`, { defaultValue: entitySchema }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { color: "grey", className: "shrink-0", children: t2("screenings:match.similarity", {
      percent: Math.round(entity.score * 100)
    }) })
  ] }) });
}
function RefineSearchModal({
  open,
  screeningId,
  screening,
  onRefineSuccess: _onRefineSuccess,
  onClose: _onClose
}) {
  const { t: t2 } = useTranslation(screeningsI18n);
  const formValuesRef = reactExports.useRef(null);
  const onClose = useCallbackRef(_onClose);
  const onRefineSuccess = useCallbackRef(_onRefineSuccess);
  const [searchResults, setSearchResults] = reactExports.useState(null);
  const searchMutation = useSearchScreeningMatchesMutation();
  const refineMutation = useRefineScreeningMutation();
  const form = useForm({
    defaultValues: {
      screeningId,
      fields: {}
    },
    validators: {
      onChange: refineSearchSchema
    },
    onSubmit: ({ value }) => {
      formValuesRef.current = value;
      searchMutation.mutateAsync(value).then((data) => {
        setSearchResults(data);
      }).catch(() => {
        zt.error(t2("common:errors.unknown"));
      });
    }
  });
  const entityType = useStore(form.store, (state) => state.values.entityType);
  const additionalFields = entityType ? SEARCH_ENTITIES[entityType].fields : [];
  const onSearchEntityChange = ({ value }) => {
    if (value) {
      form.setFieldValue("fields", setAdditionalFields(SEARCH_ENTITIES[value].fields, form.state.values.fields));
    }
  };
  const handleBackToSearch = () => {
    setSearchResults(null);
  };
  const handleRefine = () => {
    if (formValuesRef.current) {
      refineMutation.mutateAsync(formValuesRef.current).then((data) => {
        onRefineSuccess(data.id);
        onClose();
      });
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Modal.Root,
    {
      open,
      onOpenChange: (isOpen) => {
        if (!isOpen) onClose();
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Modal.Content,
        {
          fixedHeight: !searchResults,
          size: "medium",
          className: clsx({ "h-[80vh]": !searchResults }, "max-h-[80vh]"),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.Title, { children: t2("screenings:refine_modal.title") }),
            searchResults ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-xl overflow-y-scroll p-lg", children: searchResults.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: t2("screenings:refine_modal.result_label"), children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex grow flex-col gap-sm", children: searchResults.map((match) => {
                  return /* @__PURE__ */ jsxRuntimeExports.jsx(MatchResult, { entity: match }, match.id);
                }) }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Callout, { bordered: true, children: t2("screenings:refine_modal.refine_callout") })
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t2("screenings:refine_modal.no_match_label") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Callout, { bordered: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col items-start gap-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Trans,
                  {
                    t: t2,
                    i18nKey: "screenings:refine_modal.no_match_callout",
                    components: {
                      Status: /* @__PURE__ */ jsxRuntimeExports.jsx(ScreeningStatusTag, { status: "no_hit", pendingHitCount: 0 })
                    }
                  }
                ) }) })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal.Footer, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Modal.FooterButton,
                  {
                    variant: "secondary",
                    label: t2("screenings:refine_modal.back_search"),
                    onClick: handleBackToSearch
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Modal.FooterButton,
                  {
                    label: t2("screenings:refine_modal.apply_search"),
                    onClick: handleRefine,
                    disabled: searchResults.length > (screening.request?.limit ?? Infinity),
                    isLoading: refineMutation.isPending
                  }
                )
              ] })
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit(form), className: "contents", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-full flex-col gap-lg overflow-y-scroll p-xl", children: [
                screening.request ? /* @__PURE__ */ jsxRuntimeExports.jsx(SearchInput, { request: screening.request }) : null,
                /* @__PURE__ */ jsxRuntimeExports.jsx(form.Field, { name: "entityType", listeners: { onChange: onSearchEntityChange }, children: (field) => /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: t2("screenings:search_entity_type"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(EntitySelect, { name: field.name, value: field.state.value, onChange: field.handleChange }) }) }),
                additionalFields.map((field) => /* @__PURE__ */ jsxRuntimeExports.jsx(form.Field, { name: `fields.${field}`, children: (formField) => /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: t2(`screenings:entity.property.${field}`), children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    name: formField.name,
                    value: formField.state.value,
                    onChange: (e2) => formField.handleChange(e2.target.value),
                    className: "grow"
                  }
                ) }) }, field))
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal.Footer, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.FooterButton, { isCloseButton: true, label: t2("common:cancel") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(form.Subscribe, { selector: (state) => [state.isPristine, state.canSubmit, state.isSubmitting], children: ([isPristine, canSubmit, isSubmitting]) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Modal.FooterButton,
                  {
                    label: isSubmitting ? "..." : t2("screenings:refine_modal.test_search"),
                    type: "submit",
                    disabled: isPristine || !canSubmit,
                    isLoading: isSubmitting
                  }
                ) })
              ] })
            ] })
          ]
        }
      )
    }
  );
}
function Field({ label, children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-sm", children })
  ] });
}
function EntitySelect({ name, value, onChange }) {
  const { t: t2 } = useTranslation(screeningsI18n);
  const schemas = t$2(SEARCH_ENTITIES);
  const lowerCasedSchema = value?.toLowerCase();
  const handleChange = (v) => {
    if (v) {
      onChange(v);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Select.Root, { name, value, onValueChange: handleChange, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Select.Trigger, { className: "grow", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Select.Value, { align: "start", placeholder: "Select", children: lowerCasedSchema ? t2(`screenings:refine_modal.schema.${lowerCasedSchema}`) : "" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Select.Arrow, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Select.Content, { className: "min-w-(--radix-select-trigger-width)", align: "start", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Select.Viewport, { children: schemas.map((schema) => {
      const schemaKey = schema.toLowerCase();
      const fieldForSchema = SEARCH_ENTITIES[schema].fields;
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Select.Item, { value: schema, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-sm p-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "plus", className: "size-5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t2(`screenings:refine_modal.schema.${schemaKey}`) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-grey-secondary text-xs", children: [
            t2("screenings:refine_modal.search_by"),
            " ",
            fieldForSchema.map((f) => t2(`screenings:entity.property.${f}`)).join(", ")
          ] })
        ] })
      ] }) }, schema);
    }) }) })
  ] });
}
function SearchInput({ request }) {
  const { t: t$32 } = useTranslation(["screenings"]);
  const searchInputs = t$e(
    t$1(request.queries),
    t((query) => t$1(query.properties)),
    n()
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: t$32("screenings:refine_modal.search_input_label"), children: searchInputs.map((input, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-grey-border flex items-center gap-sm rounded-sm border p-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-grey-background size-6 rounded-xs p-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "string", className: "size-4" }) }),
    input
  ] }, i)) });
}
function ScreeningReviewSection({ screening, onRefineSuccess }) {
  const { t: t2 } = useTranslation(screeningsI18n);
  const [isRefining, setIsRefining] = reactExports.useState(false);
  const matchesToReviewCount = n$7(screening.matches, (m) => m.status === "pending").length;
  const hasError = isScreeningError(screening);
  const isRefinable = !isScreeningReviewCompleted(screening);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-fit flex-2 flex-col gap-lg", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-md", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-m font-semibold", children: t2("screenings:potential_matches") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-grey-secondary text-s", children: t2("screenings:callout.needs_review", {
          toReview: matchesToReviewCount,
          totalMatches: screening.matches.length
        }) }),
        isRefinable ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { className: "ms-auto", variant: "secondary", onClick: () => setIsRefining(true), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "restart-alt", className: "size-5" }),
          t2("screenings:refine_search")
        ] }) : null
      ] }),
      M(screening).when(isScreeningError, (sc) => /* @__PURE__ */ jsxRuntimeExports.jsx(ScreeningErrors, { screening: sc })).when(
        (sc) => sc.status === "in_review" && sc.partial,
        (sc) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-s bg-red-background text-red-primary flex items-center gap-sm rounded-sm p-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "error", className: "size-5 shrink-0" }),
          t2("screenings:callout.needs_refine", {
            matchCount: sc.request.limit
          })
        ] })
      ).when(
        (sc) => sc.status === "in_review",
        () => /* @__PURE__ */ jsxRuntimeExports.jsx(Callout, { bordered: true, children: t2("screenings:callout.review") })
      ).otherwise(() => null)
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-sm", children: screening.matches.map((screeningMatch) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      MatchCard,
      {
        screening,
        match: screeningMatch,
        unreviewable: hasError,
        defaultOpen: screening.matches.length === 1
      },
      screeningMatch.id
    )) }),
    isRefining ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      RefineSearchModal,
      {
        screeningId: screening.id,
        screening,
        open: isRefining,
        onClose: () => setIsRefining(false),
        onRefineSuccess
      }
    ) : null
  ] });
}
function usePivotValues(pivotValues, pivots) {
  const value = reactExports.useMemo(() => {
    return t$e(
      pivotValues,
      t$9(({ id, value: value2 }) => {
        const pivot = pivots.find((p) => p.id === id);
        if (!pivot || !value2) {
          return null;
        }
        return { pivot, value: value2 };
      }),
      n$7(e)
    );
  }, [pivotValues, pivots]);
  return value;
}
function CaseSanctionsHitsPage() {
  const {
    t: t2
  } = useTranslation(casesI18n);
  const {
    caseDetail,
    screening,
    decision,
    dataModel,
    pivots
  } = useLoaderData({
    from: "/_app/_builder/cases/$caseId/d/$decisionId/screenings/$screeningId"
  });
  const pivotValues = usePivotValues(decision.pivotValues, pivots);
  const [objectLink, setObjectLink] = reactExports.useState(null);
  const navigate = useAgnosticNavigation();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-surface-card border-grey-border grid grid-cols-[max-content_2fr_1fr_repeat(3,max-content)] gap-x-6 gap-y-2 rounded-md border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-full flex flex-row gap-3xl p-md", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(ScreeningReviewSection, { screening, onRefineSuccess: (screeningId) => {
      navigate(`/cases/${fromUUIDtoSUUID(caseDetail.id)}/d/${fromUUIDtoSUUID(decision.id)}/screenings/${fromUUIDtoSUUID(screeningId)}`);
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sticky top-0 flex h-fit flex-1 flex-col gap-lg", children: [
      screening.request ? /* @__PURE__ */ jsxRuntimeExports.jsx(ScreeningQueryDetail, { request: screening.request, initialQuery: screening.initialQuery }) : null,
      pivotValues.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-fit flex-col gap-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-start-2 row-start-1 flex flex-row items-center justify-between gap-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-grey-primary text-xs font-medium first-letter:capitalize", children: t2("cases:case_detail.pivot_values") }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CasePivotValues, { pivotValues })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-fit flex-col gap-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-row items-center justify-between gap-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-grey-primary text-xs font-medium first-letter:capitalize", children: t2("cases:case_detail.trigger_object") }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CaseDetailTriggerObject, { className: "h-fit max-h-[50dvh] overflow-auto", dataModel, triggerObject: decision.triggerObject, triggerObjectType: decision.triggerObjectType, onLinkClicked: (tableName, objectId) => setObjectLink({
          tableName,
          objectId
        }) }),
        objectLink ? /* @__PURE__ */ jsxRuntimeExports.jsx(IngestedObjectDetailModal, { dataModel, tableName: objectLink.tableName, objectId: objectLink.objectId, onClose: () => setObjectLink(null) }) : null
      ] })
    ] })
  ] }) });
}
export {
  CaseSanctionsHitsPage as component
};

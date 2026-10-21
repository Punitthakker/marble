import { Q as jsxRuntimeExports, M as reactExports, L as useRouter } from "./server.mjs";
import { C as ClientObjectTagList } from "./get-score-latest-3W-Su_jV.mjs";
import { aN as Route$g, C as CaseStatusBadgeV2, L as Link, p as pageLayoutGutter, v as clientDetailLinkParams, T as Tooltip, I as screeningsI18n, ae as ScreeningStatusTag, aM as getIterationRulesFn } from "./router-KSC-NEr8.mjs";
import { z as isAdmin, a2 as M, dv as getTriggerObjectFields, cv as isRuleExecutionHit, h as getDateFnsLocale, u as t$e, o as t$9, t as t$g, v as n$7, dw as adaptDateTimeFieldCodes, du as isScreeningReviewCompleted, aN as nonPendingReviewStatuses, dt as n$9 } from "./services-middleware-nMulUXHZ.mjs";
import { i as getScreeningDetailFn, j as getScreeningAiSuggestionsFn, r as refineSearchSchema } from "./screenings-C_YbbaUO.mjs";
import { u as useQueryClient } from "./query-BmG5BEas.mjs";
import { u as useQuery } from "./useQuery-Bb0AEcpf.mjs";
import { u as useServerFn } from "./useServerFn-oRH5Nw97.mjs";
import { u as useTranslation, aq as Card, B as Button, I as Icon, W as CtaV2ClassName, d as cn, an as Panel, g as useFormatLanguage, a as useFormatDateTime, al as Tabs, am as tabClassName, b0 as formatRelative, S as Typo, T as Trans } from "./Tabs-CzpyUi7T.mjs";
import { g as DataFields, p as parseUnknownData } from "./DataField-BczNbAhi.mjs";
import { E as ExpandableGroupTagLine } from "./ExpandableGroupTagLine-MgT0uQKb.mjs";
import { T as Tag, z as zt, C as CopyToClipboardButton } from "./create-context-k6HmQ6bB.mjs";
import { d as decisionsI18n } from "./decisions-i18n-Cg4JM_3r.mjs";
import { F as FormatData } from "./FormatData-CcbzFq6m.mjs";
import { a as Callout, C as CalloutV2 } from "./Callout-B0OuRL3q.mjs";
import { L as LoaderRevalidatorContext, u as useLoaderRevalidator } from "./LoaderRevalidatorContext-BEuG7sHs.mjs";
import { B as listCaseDecisionsFn, C as enqueueReviewFn, D as listCaseReviewsFn, E as getRulesByPivotFn, F as getCaseReviewFn, G as setAllMatchesToNoHitFn, H as addRuleSnoozeFn, I as addCaseReviewFeedbackFn, J as addReviewToCaseCommentsFn, K as reviewDecisionFn } from "./cases-C-fVFrVL.mjs";
import { u as useInfiniteQuery } from "./useInfiniteQuery-B6vcG-7y.mjs";
import { u as useMutation } from "./useMutation-BOdeDeAR.mjs";
import { u as useRefineScreeningMutation, a as useSearchScreeningMatchesMutation } from "./search-screening-matches-R0JT2NOa.mjs";
import { C as Checkbox } from "./Checkbox-C8nszDsh.mjs";
import { S as Spinner, L as LoadingIcon } from "./Spinner-DmLieYoS.mjs";
import { s as sortScreeningMatchesByTopics } from "./match-sorting-rekCDl1i.mjs";
import { u as useEntityName } from "./useEntityName-D6YnMwkD.mjs";
import { S as SEARCH_ENTITIES } from "./screening-entity-cwm_Y847.mjs";
import { s as submitOnCtrlEnter, g as getFieldErrors, h as handleSubmit } from "./form-D2XmDKeG.mjs";
import { u as useCallbackRef } from "./use-callback-ref-Bwe341Yf.mjs";
import { u as useForm } from "./useForm-qNQ8S9xN.mjs";
import { E as EntitySearchFormProvider, a as EntityTypePopover } from "./EntityTypePopover-CltI2FY_.mjs";
import { s as setAdditionalFields } from "./set-additional-fields-BAjwURJS.mjs";
import { C as CaseDetailTriggerObject, M as MatchCard } from "./TriggerObjectDetail-7kaKKuXk.mjs";
import { c as casesI18n } from "./cases-i18n-CKTv5qXV.mjs";
import { I as IngestedObjectDetailModal } from "./IngestedObjectDetailModal-CBuAoLJ_.mjs";
import { f as editTagsPayloadSchema, i as addRuleSnoozePayloadSchema, A as durationUnitOptions, r as reviewDecisionPayloadSchema } from "./cases-BQ48izmh.mjs";
import { M as Modal } from "./Modal-CpYmGWjB.mjs";
import { T as TextArea } from "./TextArea-p2rzbOeQ.mjs";
import { F as FormErrorOrDescription } from "./FormErrorOrDescription-BncG6ljR.mjs";
import { a as RulesExecutionsContainer, b as RuleExecutionCollapsible, c as RuleExecutionTitle, d as RuleExecutionContent, e as RuleExecutionDescription, f as RuleExecutionDetail } from "./RulesDetail-OXyNaILQ.mjs";
import { g as getDecisionFn } from "./decisions-BECqiOw3.mjs";
import { S as Switch } from "./Switch-BV-_0Knl.mjs";
import { D as DataModelExplorerProvider, a as DataExplorerPanel } from "./DataExplorerPanel-CJ4TB_XJ.mjs";
import { u as useEditTagsMutation, E as EscalateCaseButton, C as CaseInfo, a as CaseEvents$1, b as CaseInvestigation } from "./EscalateCaseButton-DsPzYYcG.mjs";
import { u as useOrganizationDetails } from "./organization-detail-BGvqBGx1.mjs";
import { u as useOrganizationTags } from "./organization-tags-CGghbGcj.mjs";
import { T as TagList } from "./TagList-5cEiXNQD.mjs";
import { R as RuleGroup, A as AIText } from "./RuleGroup-D3mD2q18.mjs";
import { M as Markdown } from "./Markdown-Djw5Zezo.mjs";
import { u as useDownloadFile, A as AlreadyDownloadingError, a as AuthRequestError } from "./DownloadFilesService-B8XCR5JY.mjs";
import { U as UserScoreBadge, N as NavigationOptions } from "./UserScoreBadge-BSdB4Yr6.mjs";
import { S as SelectV2 } from "./Select-Dg3p9vJ0.mjs";
import { E as ExternalLink } from "./ExternalLink-BlVgwkVd.mjs";
import { F as FormInput } from "./FormInput-CsT_ETvr.mjs";
import { F as FormLabel } from "./FormLabel-DseYo_2t.mjs";
import { r as ruleSnoozesDocHref } from "./documentation-href-DY9fs71n.mjs";
import { N as Nudge } from "./Nudge-Cmzwt2Be.mjs";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "./ClientCommentForm-CxGdh-J3.mjs";
import "./data-9UajV2HK.mjs";
import "./auth-middleware-eNRVfU3l.mjs";
import "./logger.server-DV14d0iZ.mjs";
import "./short-uuid-fTZYJj_k.mjs";
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
import "./data-BXamdbTM.mjs";
import "./Time-CKTfEtti.mjs";
import "./annotations-Dbgxm4DN.mjs";
import "./use-callback-ref-DoQNLci-.mjs";
import "./get-annotations-DHuYMH09.mjs";
import "./organization-object-tags-BKGicIcs.mjs";
import "./helpers-D-Bggz_h.mjs";
import "./join-Ce2xPJwm.mjs";
import "./isNullish-B8pc8Ntu.mjs";
import "./isArray-gJc74O_I.mjs";
import "./list-ruleset-versions-B6atqN3Q.mjs";
import "./display-TKj7AN5a.mjs";
import "./scoring-BqfH8vO5.mjs";
import "./user-scoring-BtNQ1U6a.mjs";
import "./get-custom-lists-DJnJIZcp.mjs";
import "./lists-CwYzskHN.mjs";
import "./lists-ZFx0HGFs.mjs";
import "./data-model-Dfj0lN5a.mjs";
import "./security-headers.server-BdP3HrPp.mjs";
import "./ThemeContext-DjRULCu0.mjs";
import "./config--RFGchua.mjs";
import "./i18n-instance-store-UssbGYOM.mjs";
import "./data-model-feature-access-D7XsjRz2.mjs";
import "./feature-access-BSdB6UiC.mjs";
import "./datetime-insWKNBy.mjs";
import "./formatDistanceStrict-DEEeAR-Y.mjs";
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
import "node:crypto";
import "./sharpstate.es-C0BW2AZi.mjs";
import "./useBaseQuery-BqF2iw7Y.mjs";
import "./tryCatch-CFf1qt2b.mjs";
import "./isNonNullish-DgEqPJBU.mjs";
import "./mapToObj-C7dg8HnM.mjs";
import "./omit-qKVZGDJg.mjs";
import "./hasAtLeast-BmuNoqMd.mjs";
import "./Popover-Cp1XdSV2.mjs";
import "./maplibre-gl-BcA3NZzV.mjs";
import "./FreeformMatchCard-ClTnPmkJ.mjs";
import "./Collapsible-CKx8cmdD.mjs";
import "./index-22HmyALM.mjs";
import "./dataset-utils-CXMfULsv.mjs";
import "./lists-config-DL0Z5yQK.mjs";
import "./array-BFSjnO9c.mjs";
import "./useStore-C3gZU5bu.mjs";
import "./keys-DjoJs5YL.mjs";
import "./CommentLine-D8LO9NpB.mjs";
import "./organization-users-CEJGnALa.mjs";
import "./user-Dgp6KqPL.mjs";
import "./Avatar-DDGL3Siw.mjs";
import "./Paper-HCUf48Ym.mjs";
import "./index-CjCfUhgh.mjs";
import "./Logo-3vzUxSrh.mjs";
import "./scenario-validation-error-messages-DGyZ9TEq.mjs";
import "./flatMap-CdA7bREZ.mjs";
import "./create-navigation-option-CCfvMbYU.mjs";
import "./Stepper-D5HOcTsM.mjs";
import "./Highlight-NVjBw0RI.mjs";
import "./match-sorter.esm-BRMYSlZQ.mjs";
import "./columnHelper-dCJ-kjEm.mjs";
import "./useFormDropzone-DXcqE7tO.mjs";
import "./index-CBe2FUD4.mjs";
import "./TagPreview-DaOqtPxx.mjs";
import "./isDeepEqual-DU8kSW6f.mjs";
import "./get-inboxes-BXwOxAig.mjs";
import "./add-comment-YfEwin_9.mjs";
import "./OutcomeTag-DYQZ2msd.mjs";
import "./Code-NcjS_4uC.mjs";
import "./endOfDay-D4VMTcyc.mjs";
import "./allPass-grBz5uBv.mjs";
import "./curry-D3P8tFW_.mjs";
import "./use-debounced-callback-ref-CXwcVZ7S.mjs";
import "./download-file-C533i5xX.mjs";
import "./uniqueBy-D4I5G6eo.mjs";
import "./get-scoring-settings-CNgnpjXy.mjs";
function n$1(...t2) {
  return t$g(r$1, t2, i$1);
}
const r$1 = (e2, t2) => t2 < 0 ? [] : e2.slice(0, t2);
function i$1(e2) {
  if (e2 <= 0) return n$9;
  let n2 = e2;
  return (e3) => (--n2, { done: n2 <= 0, hasNext: true, next: e3 });
}
const getScreeningDetailQueryKey = (decisionId, screeningId) => [
  "screenings",
  "detail",
  decisionId,
  screeningId
];
function useScreeningDetailQuery(decisionId, screeningId, enabled) {
  const getScreeningDetail = useServerFn(getScreeningDetailFn);
  return useQuery({
    queryKey: getScreeningDetailQueryKey(decisionId, screeningId),
    queryFn: async () => {
      const result = await getScreeningDetail({ data: { decisionId, screeningId } });
      return result.screening;
    },
    enabled
  });
}
function useInvalidateScreeningDetail() {
  const queryClient = useQueryClient();
  return reactExports.useCallback(
    (decisionId, screeningId) => {
      queryClient.invalidateQueries({
        queryKey: getScreeningDetailQueryKey(decisionId, screeningId)
      });
    },
    [queryClient]
  );
}
const reviewStatusMapping = {
  pending: {
    color: "orange",
    tKey: "decisions:review_status.pending"
  },
  approve: { color: "green", tKey: "decisions:review_status.approve" },
  decline: { color: "red", tKey: "decisions:review_status.decline" }
};
function ReviewStatusTag({ reviewStatus, disabled, ...tagProps }) {
  const { t: t2 } = useTranslation(decisionsI18n);
  const { color, tKey } = reviewStatusMapping[reviewStatus];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { ...tagProps, color: disabled ? "grey" : color, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-center capitalize", children: t2(tKey) }) });
}
const caseDecisionsQueryKey = ["cases", "list-decisions"];
function useInvalidateCaseDecisions() {
  const queryClient = useQueryClient();
  return reactExports.useCallback(() => {
    queryClient.invalidateQueries({ queryKey: caseDecisionsQueryKey });
  }, [queryClient]);
}
function useCaseDecisionsQuery(caseId) {
  const listCaseDecisions = useServerFn(listCaseDecisionsFn);
  const queryKey = [...caseDecisionsQueryKey, caseId];
  return useInfiniteQuery({
    queryKey,
    queryFn: async ({ pageParam }) => {
      return listCaseDecisions({
        data: { caseId, cursorId: pageParam ?? void 0 }
      });
    },
    initialPageParam: null,
    getNextPageParam: (lastPage) => {
      if (!lastPage) return null;
      return lastPage.pagination.hasMore ? lastPage.pagination.cursorId : null;
    }
  });
}
const useBulkReviewMatchesMutation = () => {
  const setAllMatchesToNoHit = useServerFn(setAllMatchesToNoHitFn);
  return useMutation({
    mutationFn: async (matchIds) => {
      return setAllMatchesToNoHit({ data: { matchIds } });
    }
  });
};
const getScreeningAiSuggestionsQueryKey = (screeningId) => ["screenings", "ai-suggestions", screeningId];
function useScreeningAiSuggestionsQuery(screeningId, enabled) {
  const getScreeningAiSuggestions = useServerFn(getScreeningAiSuggestionsFn);
  return useQuery({
    queryKey: getScreeningAiSuggestionsQueryKey(screeningId),
    queryFn: async () => {
      const result = await getScreeningAiSuggestions({ data: { screeningId } });
      return result.suggestions;
    },
    enabled
  });
}
function useInvalidateScreeningAiSuggestions() {
  const queryClient = useQueryClient();
  return reactExports.useCallback(
    (screeningId) => {
      queryClient.invalidateQueries({
        queryKey: getScreeningAiSuggestionsQueryKey(screeningId)
      });
    },
    [queryClient]
  );
}
function getScreeningSearchName(screening) {
  const request = screening.request;
  if (!request) return "";
  const queries = Object.values(request.queries);
  const name = queries.flatMap((query) => query.properties["name"] ?? [])[0];
  if (name) return name;
  return queries.flatMap((query) => Object.values(query.properties).flat()).join(" ");
}
function getRefineSearchDefaultValues(screening, searchName) {
  const base = {
    screeningId: screening.id,
    entityType: "Thing",
    fields: { name: searchName }
  };
  const request = screening.request;
  if (!request) return base;
  const query = Object.values(request.queries)[0];
  if (!query) return base;
  const schema = query.schema;
  if (!(schema in SEARCH_ENTITIES)) return base;
  const entityType = schema;
  const properties = { name: searchName };
  for (const [key, values] of Object.entries(query.properties)) {
    if (key !== "name") properties[key] = values[0];
  }
  return {
    screeningId: screening.id,
    entityType,
    fields: setAdditionalFields(SEARCH_ENTITIES[entityType].fields, properties)
  };
}
function withSearchName(value, searchName) {
  return { ...value, fields: { ...value.fields, name: searchName } };
}
function InlineRefineSearch({
  screening,
  onBack: _onBack,
  onSearchComplete: _onSearchComplete
}) {
  const { t: t2 } = useTranslation(screeningsI18n);
  const onBack = useCallbackRef(_onBack);
  const onSearchComplete = useCallbackRef(_onSearchComplete);
  const searchMutation = useSearchScreeningMatchesMutation();
  const searchName = getScreeningSearchName(screening);
  const form = useForm({
    defaultValues: getRefineSearchDefaultValues(screening, searchName),
    validators: {
      onChange: refineSearchSchema
    },
    onSubmit: ({ value }) => {
      const submitValue = withSearchName(value, searchName);
      searchMutation.mutateAsync(submitValue).then((data) => {
        onSearchComplete(data, submitValue);
      }).catch(() => {
        zt.error(t2("common:errors.unknown"));
      });
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sticky top-0 flex h-fit w-[360px] shrink-0 flex-col gap-md border-l border-grey-border ps-md", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-m font-medium", children: t2("screenings:panel.search_details") }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-md rounded-lg border border-purple-primary bg-purple-background-light p-md", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-s font-medium", children: t2("screenings:refine_inline.edit_search_label") }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit(form), className: "contents", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-md", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-sm", children: [
          searchName ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-clip text-purple-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate text-s font-medium", children: searchName }) }) : null,
          /* @__PURE__ */ jsxRuntimeExports.jsx(EntitySearchFormProvider, { form, children: /* @__PURE__ */ jsxRuntimeExports.jsx(EntityTypePopover, { disabled: searchMutation.isPending }) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-end gap-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", appearance: "stroked", size: "small", onClick: onBack, children: t2("screenings:refine_inline.back") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(form.Subscribe, { selector: (state) => [state.isPristine, state.canSubmit, state.isSubmitting], children: ([isPristine, canSubmit, isSubmitting]) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              type: "submit",
              size: "small",
              disabled: isPristine || !canSubmit || !searchName.trim(),
              variant: "primary",
              children: isSubmitting ? "..." : t2("screenings:refine_inline.search")
            }
          ) })
        ] })
      ] })
    ] })
  ] });
}
function PanelSearchDetails({
  screening,
  onRefineSuccess,
  onSearchComplete
}) {
  const { t: t2 } = useTranslation(screeningsI18n);
  const [isRefining, setIsRefining] = reactExports.useState(false);
  const isRefinable = !isScreeningReviewCompleted(screening);
  const request = screening.request;
  const queries = request ? Object.values(request.queries) : [];
  if (isRefining) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      InlineRefineSearch,
      {
        screening,
        onBack: () => setIsRefining(false),
        onSearchComplete
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sticky top-0 flex h-fit w-[360px] shrink-0 flex-col gap-md ps-md", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-m font-medium", children: t2("screenings:panel.search_details") }),
    request ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-grey-background-light border border-grey-border flex flex-col rounded-lg p-md", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-s font-medium", children: t2("screenings:panel.search_label") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-sm", children: queries.map((query, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(QueryProperties, { query }, idx)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-grey-border my-sm" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SearchDetailRow, { label: t2("screenings:match_threshold"), children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: `> ${request.threshold}%` }) }) })
    ] }) : null,
    isRefinable ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      Button,
      {
        variant: "primary",
        appearance: "stroked",
        size: "small",
        className: "w-fit",
        onClick: () => setIsRefining(true),
        children: t2("screenings:refine_search")
      }
    ) : null
  ] });
}
function SearchDetailRow({ label, children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-md items-start text-s", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-[133px] shrink-0 opacity-50", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 min-w-0", children })
  ] });
}
function QueryProperties({ query }) {
  const { getEntityName, t: t2 } = useEntityName();
  const entityTypeLabel = getEntityName(query.schema);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    Object.entries(query.properties).map(([key, values]) => /* @__PURE__ */ jsxRuntimeExports.jsx(SearchDetailRow, { label: key, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: values.join(", ") }) }, key)),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SearchDetailRow, { label: t2("screenings:search_entity_type"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { color: "grey", children: entityTypeLabel }) })
  ] });
}
function ScreeningHitsPanel({
  open,
  onOpenChange,
  decisionId,
  screeningId: initialScreeningId,
  screeningName,
  screeningStatus
}) {
  const { t: t2 } = useTranslation([...screeningsI18n, "common"]);
  const [currentScreeningId, setCurrentScreeningId] = reactExports.useState(initialScreeningId);
  reactExports.useEffect(() => {
    setCurrentScreeningId(initialScreeningId);
  }, [initialScreeningId]);
  const invalidateScreeningDetail = useInvalidateScreeningDetail();
  const invalidateCaseDecisions = useInvalidateCaseDecisions();
  const handleOpenChange = reactExports.useCallback(
    (isOpen) => {
      onOpenChange(isOpen);
      if (!isOpen) {
        invalidateCaseDecisions();
      }
    },
    [onOpenChange, invalidateCaseDecisions]
  );
  const screeningQuery = useScreeningDetailQuery(decisionId, currentScreeningId, open);
  const aiSuggestionsQuery = useScreeningAiSuggestionsQuery(currentScreeningId, open);
  const invalidateAiSuggestions = useInvalidateScreeningAiSuggestions();
  const bulkReviewMutation = useBulkReviewMatchesMutation();
  const [selectedMatchIds, setSelectedMatchIds] = reactExports.useState([]);
  const revalidate = reactExports.useCallback(() => {
    invalidateScreeningDetail(decisionId, currentScreeningId);
  }, [invalidateScreeningDetail, decisionId, currentScreeningId]);
  const revalidateAfterBulk = reactExports.useCallback(() => {
    invalidateScreeningDetail(decisionId, currentScreeningId);
    invalidateAiSuggestions(currentScreeningId);
  }, [invalidateScreeningDetail, invalidateAiSuggestions, decisionId, currentScreeningId]);
  const handleRefineSuccess = reactExports.useCallback(
    (newScreeningId) => {
      setCurrentScreeningId(newScreeningId);
      setPreviewResults(null);
      invalidateScreeningDetail(decisionId, newScreeningId);
    },
    [invalidateScreeningDetail, decisionId]
  );
  const [previewResults, setPreviewResults] = reactExports.useState(null);
  const previewFormValuesRef = reactExports.useRef(null);
  const refineMutation = useRefineScreeningMutation();
  const handleSearchComplete = reactExports.useCallback((results, formValues) => {
    setPreviewResults(results);
    previewFormValuesRef.current = formValues;
  }, []);
  const handleValidate = reactExports.useCallback(() => {
    if (previewFormValuesRef.current) {
      refineMutation.mutateAsync(previewFormValuesRef.current).then((data) => {
        handleRefineSuccess(data.id);
      });
    }
  }, [refineMutation]);
  const handleCancelPreview = reactExports.useCallback(() => {
    setPreviewResults(null);
    previewFormValuesRef.current = null;
  }, []);
  const currentName = screeningQuery.data?.config.name ?? screeningName;
  const currentStatus = screeningQuery.data?.status ?? screeningStatus;
  const screening = screeningQuery.data;
  const aiSuggestions = aiSuggestionsQuery.data ?? [];
  const isInPreview = !!previewResults;
  const pendingMatches = reactExports.useMemo(
    () => screening ? n$7(screening.matches, (m2) => m2.status === "pending") : [],
    [screening]
  );
  const aiSuggestionsByMatchId = reactExports.useMemo(() => {
    const map = /* @__PURE__ */ new Map();
    for (const suggestion of aiSuggestions) {
      map.set(suggestion.matchId, suggestion);
    }
    return map;
  }, [aiSuggestions]);
  const probableFalsePositiveMatchIds = reactExports.useMemo(
    () => pendingMatches.filter((m2) => aiSuggestionsByMatchId.get(m2.id)?.confidence === "probable_false_positive").map((m2) => m2.id),
    [pendingMatches, aiSuggestionsByMatchId]
  );
  const showDismissButton = !isInPreview && probableFalsePositiveMatchIds.length >= 1;
  const showBulkButton = !isInPreview && selectedMatchIds.length >= 2;
  const handleDismissFalsePositives = reactExports.useCallback(() => {
    bulkReviewMutation.mutate(probableFalsePositiveMatchIds, {
      onSuccess: revalidateAfterBulk,
      onError: () => zt.error(t2("common:errors.unknown"))
    });
  }, [bulkReviewMutation, probableFalsePositiveMatchIds, revalidateAfterBulk, t2]);
  const handleBulkMarkFalsePositive = reactExports.useCallback(() => {
    bulkReviewMutation.mutate(selectedMatchIds, {
      onSuccess: revalidateAfterBulk,
      onError: () => zt.error(t2("common:errors.unknown"))
    });
  }, [bulkReviewMutation, selectedMatchIds, revalidateAfterBulk, t2]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Panel.Root, { open, onOpenChange: handleOpenChange, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Panel.Container, { size: "large", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Panel.Content, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Panel.Header, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-md pb-lg", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 items-center gap-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typo, { variant: "title2", children: currentName }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          ScreeningStatusTag,
          {
            status: currentStatus,
            pendingHitCount: screeningQuery.data?.matches.filter((m2) => m2.status === "pending").length
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-sm shrink-0", children: [
        showBulkButton ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "primary",
            size: "small",
            onClick: handleBulkMarkFalsePositive,
            disabled: bulkReviewMutation.isPending,
            children: t2("screenings:panel.mark_all_false_positive")
          }
        ) : null,
        showDismissButton ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            variant: "secondary",
            appearance: "stroked",
            size: "small",
            onClick: handleDismissFalsePositives,
            disabled: bulkReviewMutation.isPending,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "wand", className: "size-4" }),
              t2("screenings:panel.dismiss_false_positives")
            ]
          }
        ) : null
      ] })
    ] }) }),
    M(screeningQuery).with({ isPending: true }, () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center p-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, {}) })).with({ isError: true }, () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-grey-secondary p-xl text-center text-s", children: t2("common:global_error") })).otherwise((query) => {
      const screeningData = query.data;
      if (!screeningData) {
        return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-grey-secondary p-xl text-center text-s", children: t2("common:global_error") });
      }
      return /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderRevalidatorContext.Provider, { value: revalidate, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-full items-start", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          PanelMatchList,
          {
            screening: screeningData,
            previewResults,
            onValidate: handleValidate,
            onCancel: handleCancelPreview,
            aiSuggestionsByMatchId,
            selectedMatchIds,
            setSelectedMatchIds,
            isInPreview
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "shrink-0 border-l border-grey-border self-stretch" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          PanelSearchDetails,
          {
            screening: screeningData,
            onRefineSuccess: handleRefineSuccess,
            onSearchComplete: handleSearchComplete
          }
        )
      ] }) });
    })
  ] }) }) });
}
function PanelMatchList({
  screening,
  previewResults,
  onValidate,
  onCancel,
  aiSuggestionsByMatchId,
  selectedMatchIds,
  setSelectedMatchIds,
  isInPreview
}) {
  const { t: t2 } = useTranslation(screeningsI18n);
  const pendingMatches = reactExports.useMemo(() => n$7(screening.matches, (m2) => m2.status === "pending"), [screening.matches]);
  const matchesToReviewCount = pendingMatches.length;
  const toggleMatch = reactExports.useCallback(
    (matchId, checked) => {
      setSelectedMatchIds((prev) => {
        if (checked) {
          return prev.includes(matchId) ? prev : [...prev, matchId];
        }
        return prev.filter((id) => id !== matchId);
      });
    },
    [setSelectedMatchIds]
  );
  const pendingMatchIds = reactExports.useMemo(() => pendingMatches.map((m2) => m2.id), [pendingMatches]);
  const pendingMatchIdsSet = reactExports.useMemo(() => new Set(pendingMatchIds), [pendingMatchIds]);
  const selectedMatchIdsSet = reactExports.useMemo(() => new Set(selectedMatchIds), [selectedMatchIds]);
  reactExports.useEffect(() => {
    setSelectedMatchIds((prev) => {
      const next = prev.filter((id) => pendingMatchIdsSet.has(id));
      return next.length === prev.length ? prev : next;
    });
  }, [pendingMatchIdsSet, setSelectedMatchIds]);
  const toggleAll = reactExports.useCallback(() => {
    setSelectedMatchIds((prev) => {
      const allSelected2 = pendingMatchIds.every((id) => prev.includes(id));
      return allSelected2 ? [] : pendingMatchIds;
    });
  }, [pendingMatchIds, setSelectedMatchIds]);
  const showSelectControls = !isInPreview && pendingMatches.length >= 1;
  const allSelected = pendingMatchIds.length > 0 && pendingMatchIds.every((id) => selectedMatchIdsSet.has(id));
  const previewMatches = reactExports.useMemo(() => {
    if (!previewResults) return null;
    return previewResults.map((payload) => ({
      id: payload.id,
      entityId: payload.id,
      queryIds: [],
      status: "pending",
      enriched: false,
      payload,
      comments: []
    }));
  }, [previewResults]);
  const matches = previewMatches ?? screening.matches;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 flex-col gap-sm pe-md", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-m font-medium", children: t2("screenings:potential_matches") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-s opacity-50", children: t2("screenings:callout.needs_review", {
      toReview: matchesToReviewCount,
      totalMatches: screening.matches.length
    }) }),
    showSelectControls ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        className: "text-s text-purple-primary hover:text-purple-hover w-fit cursor-pointer",
        onClick: toggleAll,
        children: allSelected ? t2("screenings:panel.deselect_all") : t2("screenings:panel.select_all")
      }
    ) : null,
    previewMatches ? /* @__PURE__ */ jsxRuntimeExports.jsx(CalloutV2, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 items-center justify-between gap-md", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-s", children: t2("screenings:refine_inline.new_results_callout") }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-sm shrink-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", appearance: "stroked", size: "small", onClick: onCancel, children: t2("screenings:refine_inline.cancel") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "primary", size: "small", onClick: onValidate, children: t2("screenings:refine_inline.validate_results") })
      ] })
    ] }) }) : null,
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-sm mt-sm", children: [...matches].sort(sortScreeningMatchesByTopics).map((screeningMatch) => {
      const isPending = screeningMatch.status === "pending";
      const showCheckbox = showSelectControls && isPending;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-sm", children: [
        showCheckbox ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex shrink-0 items-start pt-md w-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Checkbox,
          {
            size: "small",
            checked: selectedMatchIdsSet.has(screeningMatch.id),
            onCheckedChange: (checked) => toggleMatch(screeningMatch.id, checked === true)
          }
        ) }) : null,
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 min-w-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          MatchCard,
          {
            screening,
            match: screeningMatch,
            defaultOpen: matches.length === 1,
            hideEnrich: true,
            hideReview: !!previewMatches,
            aiSuggestion: aiSuggestionsByMatchId.get(screeningMatch.id)
          }
        ) })
      ] }, screeningMatch.id);
    }) })
  ] });
}
const useReviewDecisionMutation = () => {
  const reviewDecision = useServerFn(reviewDecisionFn);
  const invalidateCaseDecisions = useInvalidateCaseDecisions();
  return useMutation({
    mutationKey: ["cases", "review-decision"],
    mutationFn: async (payload) => reviewDecision({ data: payload }),
    onSuccess: () => {
      invalidateCaseDecisions();
    }
  });
};
function ReviewDecisionModal({
  decisionId,
  screenings,
  children,
  defaultOpened
}) {
  const [open, setOpen] = reactExports.useState(defaultOpened);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal.Root, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.Trigger, { asChild: true, children }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.Content, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(ReviewDecisionContent, { setOpen, decisionId, screenings }) })
  ] });
}
function ReviewDecisionContent({
  decisionId,
  screenings,
  setOpen
}) {
  const { t: t2 } = useTranslation(["common", "cases"]);
  const reviewDecisionMutation = useReviewDecisionMutation();
  const hasScreeningsUnconfirmed = screenings?.some((screening) => ["in_review", "pending"].includes(screening.status));
  const form = useForm({
    defaultValues: {
      decisionId,
      reviewComment: "",
      reviewStatus: ""
    },
    onSubmit: ({ value, formApi }) => {
      if (formApi.state.isValid) {
        reviewDecisionMutation.mutate(value, {
          onSuccess: (res) => {
            if (res.status === "error") {
              zt.error(t2("common:errors.unknown"));
              return;
            }
            zt.success(t2("common:success.save"));
            setOpen(false);
          },
          onError: () => {
            zt.error(t2("common:errors.unknown"));
          }
        });
      }
    },
    validators: {
      onSubmit: reviewDecisionPayloadSchema
    }
  });
  return (
    // Stop React synthetic events from bubbling through the portal to the parent AlertCard
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "form",
      {
        onClick: (e2) => e2.stopPropagation(),
        onKeyDown: (e2) => e2.stopPropagation(),
        onSubmit: (e2) => {
          e2.preventDefault();
          e2.stopPropagation();
          form.handleSubmit();
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-sm p-md", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-grey-primary text-base font-semibold leading-[1.1]", children: t2("cases:case_detail.review_decision.title") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.Description, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-grey-primary text-s leading-[1.4]", children: t2("cases:case_detail.review_decision.description") }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              form.Field,
              {
                name: "reviewStatus",
                validators: {
                  onChange: reviewDecisionPayloadSchema.shape.reviewStatus
                },
                children: (field) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-sm", children: [
                  nonPendingReviewStatuses.map((reviewStatus) => {
                    const isSelected = field.state.value === reviewStatus;
                    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2xs", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex cursor-pointer items-center gap-sm", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "input",
                          {
                            type: "radio",
                            name: "reviewStatus",
                            value: reviewStatus,
                            checked: isSelected,
                            onChange: () => field.handleChange(reviewStatus),
                            className: cn(
                              "size-4 shrink-0 appearance-none rounded-full border",
                              isSelected ? "border-[5px] border-purple-primary" : "border border-purple-primary bg-white"
                            )
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ReviewStatusTag, { size: "small", className: "w-fit", reviewStatus })
                      ] }),
                      hasScreeningsUnconfirmed && reviewStatus === "approve" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Callout, { icon: "warning", iconColor: "orange", color: "orange", className: "text-orange-primary text-xs", children: t2("cases:case_detail.review_decision.warning_approve") }) : null
                    ] }, reviewStatus);
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FormErrorOrDescription, { errors: getFieldErrors(field.state.meta.errors) })
                ] })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              form.Field,
              {
                name: "reviewComment",
                validators: {
                  onChange: reviewDecisionPayloadSchema.shape.reviewComment
                },
                children: (field) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  TextArea,
                  {
                    className: "w-full",
                    name: field.name,
                    defaultValue: field.state.value,
                    onChange: (e2) => field.handleChange(e2.currentTarget.value),
                    borderColor: field.state.meta.errors.length === 0 ? "greyfigma-90" : "redfigma-47",
                    placeholder: t2("cases:case_detail.review_decision.comment.placeholder")
                  }
                )
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal.Footer, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.FooterButton, { isCloseButton: true, label: t2("cases:case_detail.review_decision.go_back") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Modal.FooterButton,
              {
                variant: "primary",
                type: "submit",
                label: t2("common:validate"),
                disabled: reviewDecisionMutation.isPending,
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingIcon, { icon: "case-manager", className: "size-5", loading: reviewDecisionMutation.isPending })
              }
            )
          ] })
        ]
      }
    )
  );
}
const ScoreModifier = ({ score, className, ...rest }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Tag, { color: "grey", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: score >= 0 ? "+" : "-" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: Math.abs(score) })
  ] });
};
const useDetailDecisionQuery = (decisionId) => {
  const getDecision = useServerFn(getDecisionFn);
  return useQuery({
    queryKey: ["decisions", decisionId],
    queryFn: async () => getDecision({ data: { decisionId } })
  });
};
function useScenarioIterationRules(scenarioIterationId) {
  const getIterationRules = useServerFn(getIterationRulesFn);
  return useQuery({
    queryKey: ["scenario-iteration-rules", scenarioIterationId],
    queryFn: async () => getIterationRules({ data: { iterationId: scenarioIterationId } })
  });
}
function DecisionPanel({
  decision,
  dataModel,
  onScreeningSelect,
  withReviewOpened = false
}) {
  const { t: t2 } = useTranslation(casesI18n);
  const detailDecisionQuery = useDetailDecisionQuery(decision.id);
  const [showHitOnly, setShowHitOnly] = reactExports.useState(true);
  const screenings = decision.screenings ?? [];
  const [objectLink, setObjectLink] = reactExports.useState(null);
  const isPendingReview = decision.outcome === "block_and_review" && decision.reviewStatus === "pending";
  const scenarioIterationRules = useScenarioIterationRules(
    detailDecisionQuery.data?.decision.scenario.scenarioIterationId ?? ""
  );
  const filteredRuleExecutions = reactExports.useMemo(() => {
    if (!detailDecisionQuery.data) return [];
    const rules = detailDecisionQuery.data.decision.rules;
    if (showHitOnly) {
      return rules.filter((r2) => r2.outcome === "hit");
    }
    return rules;
  }, [detailDecisionQuery.data, showHitOnly]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Panel.Content, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Panel.Header, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 flex-col gap-xs", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(AlertOutcomeIcon, { outcome: decision.outcome, reviewStatus: decision.reviewStatus, showLabel: false }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-grey-primary font-semibold", children: decision.scenario.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ScoreModifier, { score: decision.score })
        ] }),
        isPendingReview ? /* @__PURE__ */ jsxRuntimeExports.jsx(ReviewDecisionModal, { defaultOpened: withReviewOpened, decisionId: decision.id, screenings, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "primary", size: "small", children: t2("cases:decisions.approve_or_decline") }) }) : null
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CopyToClipboardButton, { size: "sm", toCopy: decision.id, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-normal", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: "ID" }),
        " ",
        decision.id
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-md", children: [
      screenings.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-m text-grey-primary font-medium", children: t2("cases:decisions.screenings_rules") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-sm", children: screenings.map((screening) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-grey-placeholder text-xs font-medium", children: "•" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-grey-placeholder text-xs font-medium", children: screening.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              role: "button",
              tabIndex: 0,
              onClick: (e2) => {
                e2.stopPropagation();
                onScreeningSelect(screening.id);
              },
              onKeyDown: (e2) => {
                if (e2.key === "Enter" || e2.key === " ") {
                  e2.stopPropagation();
                  onScreeningSelect(screening.id);
                }
              },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                ScreeningStatusBadge,
                {
                  status: screening.status,
                  decisionId: decision.id,
                  screeningId: screening.id,
                  nbHits: screening.count
                }
              )
            }
          )
        ] }, screening.id)) })
      ] }) : null,
      M(detailDecisionQuery).with({ isPending: true }, () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center p-md", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, { className: "size-8" }) })).with({ isError: true }, () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-grey-secondary p-md text-center text-xs", children: t2("common:global_error") })).otherwise(() => {
        const allRules = detailDecisionQuery.data?.decision.rules ?? [];
        if (allRules.length === 0) return null;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-m text-grey-primary font-medium", children: t2("cases:decisions.rules") }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "showHitOnly", className: "text-grey-primary cursor-pointer select-none text-xs", children: t2("cases:case_detail.rules_execution.show_hit_only") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Switch, { id: "showHitOnly", checked: showHitOnly, onCheckedChange: setShowHitOnly })
            ] })
          ] }),
          filteredRuleExecutions.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(RulesExecutionsContainer, { className: "h-fit", children: filteredRuleExecutions.map((ruleExecution) => /* @__PURE__ */ jsxRuntimeExports.jsxs(RuleExecutionCollapsible, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(RuleExecutionTitle, { ruleExecution }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(RuleExecutionContent, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(RuleExecutionDescription, { description: ruleExecution.description }),
              scenarioIterationRules.data ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                RuleExecutionDetail,
                {
                  scenarioId: detailDecisionQuery.data?.decision.scenario.id ?? "",
                  ruleExecution,
                  rules: scenarioIterationRules.data.rules,
                  isIterationArchived: scenarioIterationRules.data.archived
                }
              ) : null
            ] })
          ] }, ruleExecution.ruleId)) }) : null
        ] });
      }),
      detailDecisionQuery.data ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-m text-grey-primary font-medium", children: t2("cases:case_detail.trigger_object") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          CaseDetailTriggerObject,
          {
            className: "max-h-[50dvh] overflow-auto",
            dataModel,
            triggerObject: detailDecisionQuery.data.decision.triggerObject,
            triggerObjectType: detailDecisionQuery.data.decision.triggerObjectType,
            onLinkClicked: (tableName, objectId) => setObjectLink({ tableName, objectId })
          }
        ),
        objectLink ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          IngestedObjectDetailModal,
          {
            dataModel,
            tableName: objectLink.tableName,
            objectId: objectLink.objectId,
            onClose: () => setObjectLink(null)
          }
        ) : null
      ] }) : null
    ] })
  ] });
}
const MAX_RULES_DISPLAYED = 3;
const CaseAlerts = ({ caseDecisionsQuery, dataModel }) => {
  const { t: t2 } = useTranslation(casesI18n);
  return M(caseDecisionsQuery).with({ isPending: true }, () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center p-md", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, {}) })).with({ isError: true }, () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-grey-secondary p-md text-center text-xs", children: t2("common:global_error") })).otherwise((query) => {
    const decisions = query.data.pages.flatMap((page) => page.decisions);
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-sm", children: decisions.map((decision) => {
        const triggerObjectFields = getTriggerObjectFields(dataModel, decision.triggerObjectType);
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          AlertCard,
          {
            dataModel,
            decision,
            triggerObjectFields
          },
          decision.id
        );
      }) }),
      query.hasNextPage ? /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", onClick: () => query.fetchNextPage(), children: t2("common:load_more_results") }) : null
    ] });
  });
};
const AlertCard = ({
  dataModel,
  decision,
  triggerObjectFields
}) => {
  const { t: t2 } = useTranslation(casesI18n);
  const formatDateTime = useFormatDateTime();
  const [panelScreeningId, setPanelScreeningId] = reactExports.useState(null);
  const [openDetails, setOpenDetails] = reactExports.useState(null);
  const screenings = decision.screenings ?? [];
  const hitRules = decision.rules.filter((r2) => r2.outcome === "hit");
  const isPendingReview = decision.outcome === "block_and_review" && decision.reviewStatus === "pending";
  const openScreening = screenings.find((s2) => s2.id === panelScreeningId);
  const onSelect = () => {
    setOpenDetails({ withReview: false });
  };
  const onReview = (e2) => {
    e2.stopPropagation();
    setOpenDetails({ withReview: true });
  };
  const handleOpenChange = (state) => {
    if (!state) {
      setOpenDetails(null);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        tabIndex: 0,
        role: "button",
        className: cn(
          "border-grey-border bg-surface-card flex flex-col gap-xs rounded-lg border p-md transition-colors cursor-pointer hover:bg-purple-background-light",
          { "bg-purple-background-light": openDetails }
        ),
        onClick: () => {
          onSelect();
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-sm overflow-hidden", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(AlertOutcomeIcon, { outcome: decision.outcome, reviewStatus: decision.reviewStatus }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate text-xs font-normal", children: decision.scenario.name }),
              decision.rules.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "border-grey-placeholder text-grey-placeholder inline-flex shrink-0 items-center gap-xs rounded-full border px-xs py-0.5 text-xs font-normal", children: [
                decision.score >= 0 ? "+" : "",
                decision.score
              ] }) : null
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-sm", children: [
              decision.reviewStatus === "approve" ? /* @__PURE__ */ jsxRuntimeExports.jsx(ReviewStatusTag, { reviewStatus: decision.reviewStatus }) : isPendingReview ? /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "primary", appearance: "stroked", size: "small", onClick: onReview, children: t2("cases:decisions.approve_or_decline") }) : null,
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", size: "small", appearance: "stroked", mode: "icon", onClick: onSelect, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "eye", className: "size-4" }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-6 items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-grey-secondary text-xs font-normal", children: formatDateTime(decision.createdAt, { dateStyle: "short" }) }) }),
          triggerObjectFields.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(TriggerFieldsRow, { fields: triggerObjectFields, triggerObject: decision.triggerObject }) : null,
          hitRules.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-xs text-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-grey-secondary shrink-0", children: t2("cases:decisions.rule_hits") }),
            t$e(
              hitRules,
              n$1(MAX_RULES_DISPLAYED),
              t$9((r2) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "span",
                {
                  className: "border-grey-border truncate rounded-sm border px-xs py-2xs text-xs font-normal",
                  children: [
                    r2.scoreModifier > 0 ? "+" : "",
                    r2.scoreModifier,
                    " ",
                    r2.name
                  ]
                },
                r2.ruleId || r2.name
              ))
            ),
            hitRules.length > MAX_RULES_DISPLAYED ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "border-grey-border rounded-sm border px-xs py-2xs text-xs font-medium", children: [
              "+",
              hitRules.length - MAX_RULES_DISPLAYED
            ] }) : null
          ] }) : null,
          screenings.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-grey-secondary text-xs", children: t2("cases:decisions.status_on_hits") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-sm", children: screenings.map((screening) => {
              return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-grey-placeholder text-xs font-medium", children: "•" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-grey-placeholder text-xs font-medium", children: screening.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    role: "button",
                    tabIndex: 0,
                    onClick: (e2) => {
                      e2.stopPropagation();
                      setPanelScreeningId(screening.id);
                    },
                    onKeyDown: (e2) => {
                      if (e2.key === "Enter" || e2.key === " ") {
                        e2.stopPropagation();
                        setPanelScreeningId(screening.id);
                      }
                    },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      ScreeningStatusBadge,
                      {
                        status: screening.status,
                        decisionId: decision.id,
                        screeningId: screening.id,
                        nbHits: screening.count
                      }
                    )
                  }
                )
              ] }, screening.id);
            }) })
          ] }) : null
        ]
      }
    ),
    openDetails ? /* @__PURE__ */ jsxRuntimeExports.jsx(Panel.Root, { open: true, onOpenChange: handleOpenChange, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Panel.Container, { size: "medium", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      DecisionPanel,
      {
        dataModel,
        decision,
        onScreeningSelect: setPanelScreeningId,
        withReviewOpened: openDetails.withReview
      }
    ) }) }) : null,
    openScreening ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      ScreeningHitsPanel,
      {
        open: true,
        onOpenChange: (isOpen) => {
          if (!isOpen) setPanelScreeningId(null);
        },
        decisionId: decision.id,
        screeningId: openScreening.id,
        screeningName: openScreening.name,
        screeningStatus: openScreening.status
      }
    ) : null
  ] });
};
const TriggerFieldsRow = ({
  fields,
  triggerObject
}) => {
  const { t: t2 } = useTranslation(casesI18n);
  const renderField = (field, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { "data-field-item": true, className: "inline-flex shrink-0 items-baseline gap-xs", children: [
    index > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-grey-placeholder", children: "·" }) : null,
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium", children: [
      field.name,
      ":"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "max-w-30 truncate", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FormatData, { data: parseUnknownData(triggerObject[field.name]) }) })
  ] }, field.id);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative text-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-grey-secondary shrink-0", children: t2("cases:decisions.trigger_objects") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ExpandableGroupTagLine,
      {
        items: fields.map(renderField),
        moreButton: (overflow) => /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip.Default, { content: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap w-min text-xs", children: fields.map(renderField) }), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "border-grey-border ms-xs inline-flex shrink-0 rounded-sm border px-xs py-2xs text-xs font-medium", children: [
          "+",
          overflow
        ] }) }),
        overflowTagWidth: 40,
        classname: "gap-xs"
      }
    )
  ] }) });
};
const AlertOutcomeIcon = ({
  outcome,
  reviewStatus,
  showLabel = true
}) => {
  const { t: t2 } = useTranslation(casesI18n);
  const icon = M(outcome).with("approve", () => /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "accepted", className: "size-4 text-green-primary" })).with("decline", () => /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "denied", className: "size-4 text-red-primary" })).with("review", () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-3.5 rounded-full border-2 border-yellow-primary" })).with("unknown", () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-grey-placeholder size-4 rounded-full border-2" })).with(
    "block_and_review",
    () => M(reviewStatus).with("approve", () => /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "manually_accepted", className: "size-4 text-green-primary" })).with("decline", () => /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "manually_denied", className: "size-4 text-red-primary" })).otherwise(() => /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "block_and_review", className: "size-4 text-orange-primary" }))
  ).exhaustive();
  const label = M(outcome).with("approve", () => t2("decisions:outcome.tag.approved.label")).with("decline", () => t2("decisions:outcome.tag.declined.label")).with("review", () => t2("decisions:outcome.tag.review.label")).with("unknown", () => t2("decisions:outcome.tag.unknown.label")).with(
    "block_and_review",
    () => M(reviewStatus).with("approve", () => t2("decisions:outcome.tag.manually_approved.label")).with("decline", () => t2("decisions:outcome.tag.manually_declined.label")).otherwise(() => t2("decisions:outcome.block_and_review"))
  ).exhaustive();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex shrink-0 items-center gap-xs", children: [
    icon,
    showLabel ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium", children: label }) : null
  ] });
};
const screeningButtonStatusConfig = {
  in_review: { variant: "primary" },
  error: { variant: "secondary" }
};
const screeningLabelColors = {
  confirmed_hit: "text-red-primary",
  no_hit: "text-green-primary"
};
const ScreeningStatusBadge = ({
  status,
  decisionId,
  screeningId,
  nbHits
}) => {
  const { t: t2 } = useTranslation(casesI18n);
  const screeningQuery = useScreeningDetailQuery(decisionId, screeningId, true);
  if (status === "confirmed_hit" || status === "no_hit") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: cn("inline-flex items-center gap-xs text-xs font-medium", screeningLabelColors[status]), children: [
      t2(`screenings:status.${status}`),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "eye", className: "size-4 shrink-0" })
    ] });
  }
  const config = screeningButtonStatusConfig[status];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: config.variant, size: "small", className: "shadow-sm", tabIndex: -1, children: M(screeningQuery).with({ isPending: true }, () => /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, { className: "size-4" })).with({ isError: true }, () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-grey-secondary p-xl text-center text-s", children: t2("common:global_error") })).otherwise((query) => {
    const screeningData = query.data;
    if (!screeningData) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-grey-secondary p-xl text-center text-s", children: t2("common:global_error") });
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: t2(`screenings:status.${status}`, { count: nbHits }) }, status),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "eye", className: "size-4 shrink-0" })
    ] });
  }) });
};
function useEnqueueCaseReviewMutation() {
  const enqueueReview = useServerFn(enqueueReviewFn);
  return useMutation({
    mutationFn: async (caseId) => {
      await enqueueReview({ data: { caseId } });
    }
  });
}
function useCaseReviewQuery(caseId, reviewId) {
  const getCaseReview = useServerFn(getCaseReviewFn);
  return useQuery({
    queryKey: ["cases", caseId, "review", reviewId],
    queryFn: async () => {
      const result = await getCaseReview({ data: { caseId, reviewId } });
      return result.review;
    },
    enabled: !!caseId && !!reviewId
  });
}
function useCaseReviewsQuery(caseId, options) {
  const listCaseReviews = useServerFn(listCaseReviewsFn);
  return useQuery({
    queryKey: ["cases", caseId, "reviews"],
    queryFn: async () => {
      const result = await listCaseReviews({ data: { caseId } });
      return result.reviews;
    },
    enabled: !!caseId,
    refetchInterval: options?.refetchInterval
  });
}
function useAddReviewToCaseCommentsMutation(caseId, reviewId) {
  const queryClient = useQueryClient();
  const addReviewToCaseComments = useServerFn(addReviewToCaseCommentsFn);
  return useMutation({
    mutationFn: async () => {
      if (!reviewId) {
        throw new Error("Review ID is required");
      }
      await addReviewToCaseComments({ data: { caseId, reviewId } });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cases", caseId, "reviews"] });
    }
  });
}
function useCaseReviewFeedbackMutation(caseId, reviewId) {
  const queryClient = useQueryClient();
  const addCaseReviewFeedback = useServerFn(addCaseReviewFeedbackFn);
  return useMutation({
    mutationFn: async (reaction) => {
      if (!reviewId) {
        throw new Error("Review ID is required");
      }
      await addCaseReviewFeedback({ data: { caseId, reviewId, reaction } });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cases", caseId, "reviews"] });
    }
  });
}
function AiReviewStatusMessage({ status, className }) {
  const { t: t2 } = useTranslation(["cases"]);
  return M(status).with("pending", () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("flex items-center gap-xs text-small text-grey-secondary", className), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "spinner", className: "size-4 animate-spin" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t2("cases:case.ai_reviews.generating") })
  ] })).with("failed", "insufficient_funds", (s2) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("flex items-center gap-xs text-small text-red-primary", className), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "warning", className: "size-4 shrink-0" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: s2 === "insufficient_funds" ? t2("cases:case.ai_reviews.insufficient_funds") : t2("cases:case.ai_reviews.failed") })
  ] })).with("completed", () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("flex items-center gap-xs text-small text-grey-secondary", className), children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t2("cases:case.ai_reviews.no_content") }) })).exhaustive();
}
function AiReviewPanel({ caseId, canManuallyReview, open, onOpenChange, reviews }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Panel.Root, { open, onOpenChange, children: /* @__PURE__ */ jsxRuntimeExports.jsx(AiReviewPanelContent, { ...{ caseId, canManuallyReview, open, onOpenChange, reviews } }) });
}
function AiReviewPanelContent({ caseId, canManuallyReview, onOpenChange, reviews }) {
  const { t: t2 } = useTranslation(["cases", "common"]);
  const formatDateTime = useFormatDateTime();
  const enqueueReviewMutation = useEnqueueCaseReviewMutation();
  const [selectedIndex, setSelectedIndex] = reactExports.useState(0);
  const selectedListItem = reviews[selectedIndex] ?? reviews[0];
  const reviewQuery = useCaseReviewQuery(caseId, selectedListItem?.id ?? "");
  const review = reviewQuery.data;
  const hasPreviousReport = selectedIndex < reviews.length - 1;
  const hasNextReport = selectedIndex > 0;
  if (!selectedListItem) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Panel.Container, { size: "medium", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Panel.Content, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Panel.Header, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "ai-review", className: "size-4 text-purple-primary shrink-0" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typo, { variant: "title2", className: "text-grey-primary shrink-0", children: t2("cases:case_detail.ai_review.panel.title") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ReviewStatusBadge, { status: selectedListItem.status }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("time", { className: "text-xs text-grey-secondary shrink-0", dateTime: selectedListItem.createdAt, children: formatDateTime(selectedListItem.createdAt, { dateStyle: "short", timeStyle: "short" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ms-auto flex items-center gap-xs flex-wrap justify-end", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "secondary",
            size: "small",
            onClick: () => setSelectedIndex((i2) => Math.min(i2 + 1, reviews.length - 1)),
            disabled: !hasPreviousReport,
            children: t2("cases:case.ai_reviews.see_previous_report")
          }
        ),
        hasNextReport ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "secondary",
            size: "small",
            onClick: () => setSelectedIndex((i2) => Math.max(i2 - 1, 0)),
            disabled: !hasNextReport,
            children: t2("cases:case.ai_reviews.see_next_report")
          }
        ) : null,
        canManuallyReview ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            variant: "secondary",
            size: "small",
            onClick: () => enqueueReviewMutation.mutate(caseId),
            disabled: enqueueReviewMutation.isPending,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "wand", className: "size-4 text-purple-primary" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-purple-primary", children: t2("cases:case.ai_reviews.generate") })
            ]
          }
        ) : null
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-md flex-1 overflow-y-auto py-md", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 min-w-0 text-small", children: reviewQuery.isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-full items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "spinner", className: "size-6 animate-spin text-grey-secondary" }) }) : reviewQuery.isError ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-full items-center justify-center text-s text-red-primary", children: t2("cases:case.ai_reviews.error_loading") }) : review?.review ? /* @__PURE__ */ jsxRuntimeExports.jsx(Markdown, { children: review.review.output }) : review ? /* @__PURE__ */ jsxRuntimeExports.jsx(AiReviewStatusMessage, { status: selectedListItem.status, className: "h-full justify-center" }) : null }),
      review?.review && !review.review.ok ? /* @__PURE__ */ jsxRuntimeExports.jsx(SanityCheckWarning, { message: review.review.sanityCheck }) : null
    ] }),
    review?.review ? /* @__PURE__ */ jsxRuntimeExports.jsx(PanelFooter, { caseId, reviewId: review.id, reaction: review.reaction }) : null
  ] }) });
}
function SanityCheckWarning({ message }) {
  const { t: t2 } = useTranslation(["cases"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("aside", { className: "w-[403px] shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-red-background-light border border-red-border rounded-md p-md flex flex-col gap-xs", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-xs", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "warning", className: "size-4 text-red-primary shrink-0" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-default font-medium text-red-primary", children: t2("cases:case_detail.ai_review.sanity_check_warning_title") })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-small text-grey-primary whitespace-pre-line", children: message })
  ] }) });
}
function PanelFooter({
  caseId,
  reviewId,
  reaction
}) {
  const { t: t2 } = useTranslation(["cases", "common"]);
  const feedbackMutation = useCaseReviewFeedbackMutation(caseId, reviewId);
  const addCommentMutation = useAddReviewToCaseCommentsMutation(caseId, reviewId);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Panel.Footer, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Panel.FooterButton,
      {
        variant: reaction === "ok" ? "primary" : "secondary",
        onClick: () => feedbackMutation.mutate("ok"),
        label: t2("cases:case_detail.ai_review.actions.feedback_ok"),
        leadingIcon: "thumb-up"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Panel.FooterButton,
      {
        variant: reaction === "ko" ? "primary" : "secondary",
        label: t2("cases:case_detail.ai_review.actions.feedback_ko"),
        leadingIcon: "thumb-down",
        onClick: () => feedbackMutation.mutate("ko")
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Panel.FooterButton,
      {
        variant: "secondary",
        label: t2("cases:case_detail.ai_review.actions.add_to_comment"),
        leadingIcon: "comment",
        onClick: () => addCommentMutation.mutate(void 0, {
          onSuccess: () => zt.success(t2("cases:case_detail.ai_review.actions.add_to_comment.success")),
          onError: () => zt.error(t2("common:errors.unknown"))
        })
      }
    )
  ] });
}
function ReviewStatusBadge({ status }) {
  const { t: t2 } = useTranslation(["cases"]);
  switch (status) {
    case "completed":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { color: "green", size: "small", children: t2("cases:case.ai_reviews.status.completed") });
    case "pending":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { color: "grey", size: "small", children: t2("cases:case.ai_reviews.status.pending") });
    case "failed":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { color: "red", size: "small", children: t2("cases:case.ai_reviews.status.failed") });
    case "insufficient_funds":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { color: "orange", size: "small", children: t2("cases:case.ai_reviews.status.insufficient_funds") });
  }
}
const PENDING_POLL_INTERVAL_MS = 5e3;
function AiReviewCard({ caseId, canManuallyReview }) {
  const [panelOpen, setPanelOpen] = reactExports.useState(false);
  const enqueueReviewMutation = useEnqueueCaseReviewMutation();
  const queryClient = useQueryClient();
  const reviewsQuery = useCaseReviewsQuery(caseId, {
    refetchInterval: (query) => (query.state.data ?? []).some((r2) => r2.status === "pending") ? PENDING_POLL_INTERVAL_MS : false
  });
  const reviews = reviewsQuery.data ?? [];
  const latestReview = reviews[0];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { color: "purple", className: "flex flex-col gap-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Header, { showSeeAll: !!latestReview, onSeeAll: () => setPanelOpen(true) }),
      M(reviewsQuery).with({ isLoading: true }, () => /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingBody, {})).with({ isError: true }, () => /* @__PURE__ */ jsxRuntimeExports.jsx(ErrorBody, {})).otherwise(
        () => !latestReview ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          EmptyBody,
          {
            canManuallyReview,
            onGenerate: () => enqueueReviewMutation.mutateAsync(caseId).then(() => {
              queryClient.invalidateQueries({ queryKey: ["cases", caseId, "reviews"] });
            }),
            isGenerating: enqueueReviewMutation.isPending
          }
        ) : latestReview.status === "completed" ? /* @__PURE__ */ jsxRuntimeExports.jsx(PopulatedBody, { review: reviewsQuery.data?.[0] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(AiReviewStatusMessage, { status: latestReview.status })
      )
    ] }),
    latestReview ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      AiReviewPanel,
      {
        caseId,
        canManuallyReview,
        open: panelOpen,
        onOpenChange: setPanelOpen,
        reviews
      }
    ) : null
  ] });
}
function Header({ showSeeAll, onSeeAll }) {
  const { t: t2 } = useTranslation(["cases"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-xs", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "ai-review", className: "size-4 text-purple-primary shrink-0" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1 text-default font-medium text-purple-primary", children: t2("cases:case.ai_reviews.extract_title") }),
    showSeeAll ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "secondary", size: "small", onClick: onSeeAll, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "visibility", className: "size-4" }),
      t2("cases:case.ai_reviews.see_all")
    ] }) : null
  ] });
}
function EmptyBody({
  canManuallyReview,
  onGenerate,
  isGenerating
}) {
  const { t: t2 } = useTranslation(["cases"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-small text-grey-secondary", children: t2("cases:case.ai_reviews.empty") }),
    canManuallyReview ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "secondary", size: "small", onClick: onGenerate, disabled: isGenerating, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: isGenerating ? "spinner" : "wand", className: `size-4 ${isGenerating ? "animate-spin" : ""}` }),
      t2("cases:case.ai_reviews.generate")
    ] }) : null
  ] });
}
function LoadingBody() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-xs text-small text-grey-secondary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "spinner", className: "size-4 animate-spin" }) });
}
function ErrorBody() {
  const { t: t2 } = useTranslation(["cases"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-small text-red-primary", children: t2("cases:case.ai_reviews.error_loading") });
}
function PopulatedBody({ review }) {
  const reviewQuery = useCaseReviewQuery(review?.caseId ?? "", review?.id ?? "");
  if (reviewQuery.isLoading) return /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingBody, {});
  if (reviewQuery.isError) return /* @__PURE__ */ jsxRuntimeExports.jsx(ErrorBody, {});
  if (reviewQuery.data) {
    const content = reviewQuery.data.review;
    const excerpt = content?.summary || stripMarkdown(content?.output?.trim() ?? "");
    if (!excerpt) return /* @__PURE__ */ jsxRuntimeExports.jsx(AiReviewStatusMessage, { status: "completed" });
    return /* @__PURE__ */ jsxRuntimeExports.jsx(AIText, { text: excerpt, maxLines: 6 });
  }
  return null;
}
function stripMarkdown(text) {
  return text.replace(/^#{1,6}\s+/gm, "").replace(/\*\*(.*?)\*\*/g, "$1").replace(/\*(.*?)\*/g, "$1").replace(/`([^`]+)`/g, "$1").replace(/^>\s+/gm, "").replace(/^[-*]\s+/gm, "").replace(/!\[[^\]]*\]\([^)]*\)/g, "").replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");
}
function CaseFileButton({ file, className, ...buttonProps }) {
  const { t: t2 } = useTranslation(["cases"]);
  const router = useRouter();
  const downloadEndpoint = router.buildLocation({
    to: "/ressources/cases/download-file/$fileId",
    params: { fileId: file.id }
  });
  const { downloadCaseFile, downloadingCaseFile } = useDownloadFile(downloadEndpoint.href, {
    onError: (e2) => {
      if (e2 instanceof AlreadyDownloadingError) {
        return;
      } else if (e2 instanceof AuthRequestError) {
        zt.error(t2("cases:case.file.errors.downloading_link.auth_error"));
      } else {
        zt.error(t2("cases:case.file.errors.downloading_link.unknown"));
      }
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Button,
    {
      variant: "secondary",
      className,
      ...buttonProps,
      onClick: () => {
        void downloadCaseFile();
      },
      disabled: downloadingCaseFile,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Icon,
          {
            icon: downloadingCaseFile ? "spinner" : "download",
            className: cn("size-3.5", { "animate-spin": downloadingCaseFile })
          }
        ),
        file.fileName
      ]
    }
  );
}
function CaseDocuments({ files }) {
  const { t: t2 } = useTranslation(["common"]);
  if (files.length === 0) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col justify-start gap-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-default text-grey-primary px-2xs font-medium", children: t2("common:documents") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-grey-border bg-surface-card flex flex-wrap gap-sm rounded-lg border p-md", children: files.map((file) => /* @__PURE__ */ jsxRuntimeExports.jsx(CaseFileButton, { file }, file.id)) })
  ] });
}
const useAddRuleSnoozeMutation = () => {
  const addRuleSnooze = useServerFn(addRuleSnoozeFn);
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["cases", "add-rule-snooze"],
    mutationFn: async (payload) => addRuleSnooze({ data: payload }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cases"] });
    }
  });
};
function AddRuleSnooze({
  decisionId,
  ruleId,
  children
}) {
  const [open, setOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal.Root, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.Trigger, { asChild: true, children }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.Content, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(AddRuleSnoozeContent, { setOpen, decisionId, ruleId }) })
  ] });
}
function AddRuleSnoozeContent({
  decisionId,
  ruleId,
  setOpen
}) {
  const { t: t2 } = useTranslation(["common", "cases"]);
  const language = useFormatLanguage();
  const addRuleSnoozeMutation = useAddRuleSnoozeMutation();
  const revalidate = useLoaderRevalidator();
  const queryClient = useQueryClient();
  const dateTimeFieldNames = reactExports.useMemo(
    () => new Intl.DisplayNames(language, {
      type: "dateTimeField"
    }),
    [language]
  );
  const form = useForm({
    defaultValues: {
      decisionId,
      ruleId,
      durationValue: 1,
      durationUnit: "days"
    },
    onSubmit: ({ value, formApi }) => {
      if (formApi.state.isValid) {
        addRuleSnoozeMutation.mutateAsync(value).then((res) => {
          if (res.status === "success") {
            queryClient.invalidateQueries({ queryKey: ["cases", "rulesByPivot"] });
            setOpen(false);
          } else if ("error" in res && res.error === "duplicate_rule_snooze") {
            zt.error(t2("cases:case_detail.add_rule_snooze.errors.duplicate_rule_snooze"));
          }
          revalidate();
        }).catch(() => {
          zt.error(t2("common:errors.unknown"));
        });
      }
    },
    validators: {
      onSubmit: addRuleSnoozePayloadSchema
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "form",
    {
      onSubmit: (e2) => {
        e2.preventDefault();
        e2.stopPropagation();
        form.handleSubmit();
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.Title, { children: t2("cases:case_detail.add_rule_snooze.title") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-lg p-lg", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.Description, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Callout, { variant: "outlined", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "whitespace-pre-wrap", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Trans,
            {
              t: t2,
              i18nKey: "cases:case_detail.add_rule_snooze.callout",
              components: {
                DocLink: /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { href: ruleSnoozesDocHref })
              }
            }
          ) }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            form.Field,
            {
              name: "comment",
              validators: {
                onBlur: addRuleSnoozePayloadSchema.shape.comment,
                onChange: addRuleSnoozePayloadSchema.shape.comment
              },
              children: (field) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "row-span-full grid grid-rows-subgrid gap-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { name: field.name, children: t2("cases:case_detail.add_rule_snooze.comment.label") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  TextArea,
                  {
                    className: "w-full",
                    defaultValue: field.state.value,
                    onChange: (e2) => field.handleChange(e2.currentTarget.value),
                    onKeyDown: submitOnCtrlEnter,
                    name: field.name,
                    onBlur: field.handleBlur,
                    borderColor: field.state.meta.errors.length === 0 ? "greyfigma-90" : "redfigma-47",
                    placeholder: t2("cases:case_detail.add_rule_snooze.comment.placeholder")
                  }
                )
              ] })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid w-full grid-cols-2 grid-rows-[repeat(3,max-content)] gap-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              form.Field,
              {
                name: "durationValue",
                validators: {
                  onBlur: addRuleSnoozePayloadSchema.shape.durationValue,
                  onChange: addRuleSnoozePayloadSchema.shape.durationValue
                },
                children: (field) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "row-span-full grid grid-rows-subgrid gap-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { name: field.name, valid: field.state.meta.errors.length === 0, children: t2("cases:case_detail.add_rule_snooze.duration_value") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    FormInput,
                    {
                      type: "number",
                      name: field.name,
                      defaultValue: field.state.value,
                      onChange: (e2) => field.handleChange(+e2.currentTarget.value),
                      onBlur: field.handleBlur,
                      valid: field.state.meta.errors.length === 0,
                      className: "w-full"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FormErrorOrDescription, { errors: getFieldErrors(field.state.meta.errors) })
                ] })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              form.Field,
              {
                name: "durationUnit",
                validators: {
                  onBlur: addRuleSnoozePayloadSchema.shape.durationUnit,
                  onChange: addRuleSnoozePayloadSchema.shape.durationUnit
                },
                children: (field) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "row-span-full grid grid-rows-subgrid gap-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { name: field.name, children: t2("cases:case_detail.add_rule_snooze.duration_unit") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    SelectV2,
                    {
                      className: "h-10 w-full",
                      value: field.state.value,
                      onChange: (unit) => field.handleChange(unit),
                      placeholder: t2("cases:case_detail.add_rule_snooze.duration_unit"),
                      options: durationUnitOptions.map((unit) => ({
                        label: dateTimeFieldNames.of(adaptDateTimeFieldCodes(unit)),
                        value: unit
                      }))
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FormErrorOrDescription, { errors: getFieldErrors(field.state.meta.errors) })
                ] })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal.Footer, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.FooterButton, { isCloseButton: true, label: t2("common:cancel") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Modal.FooterButton,
            {
              label: t2("cases:decisions.rule.snooze"),
              type: "submit",
              name: "update",
              isLoading: addRuleSnoozeMutation.isPending
            }
          )
        ] })
      ]
    }
  );
}
const useRulesByPivotQuery = (caseId) => {
  const getRulesByPivot = useServerFn(getRulesByPivotFn);
  return useQuery({
    queryKey: ["cases", "rulesByPivot", caseId],
    queryFn: async () => {
      return getRulesByPivot({ data: { caseId } });
    }
  });
};
var t = function(t2) {
  return Object.keys(t2);
}, n = function(t2) {
  return Object.values(t2);
}, r = Object.prototype.hasOwnProperty, e = { __proto__: null, fromEntries: Object.fromEntries, entries: function(t2) {
  return Object.entries(t2);
}, keys: t, values: n, fromOptional: function(t2) {
  var n2 = {};
  for (var e2 in t2) if (r.call(t2, e2)) {
    var u2 = t2[e2];
    if (void 0 === u2) continue;
    u2.isSome() && (n2[e2] = u2.get());
  }
  return n2;
} }, u = /* @__PURE__ */ new WeakMap(), o = "function" == typeof WeakRef ? WeakRef : /* @__PURE__ */ (function() {
  function t2(t3) {
    u.set(this, t3);
  }
  return t2.prototype.deref = function() {
    return u.get(this);
  }, t2;
})(), i = function() {
  var t2 = /* @__PURE__ */ new Map(), n2 = "function" == typeof FinalizationRegistry ? new FinalizationRegistry(function(n3) {
    t2.delete(n3);
  }) : void 0;
  return { set: function(r2, e2) {
    t2.set(r2, new o(e2)), void 0 !== n2 && n2.register(e2, r2);
  }, get: function(n3) {
    var r2 = t2.get(n3);
    if (void 0 !== r2) return r2.deref();
  } };
}, a = /* @__PURE__ */ Symbol.for("__boxed_type__"), c = function(t2, n2) {
  for (var r2 = Math.min(t2.length, n2.length), e2 = Array(r2), u2 = -1; ++u2 < r2; ) e2[u2] = [t2[u2], n2[u2]];
  return e2;
}, f = i(), s = /* @__PURE__ */ (function() {
  function t2() {
  }
  t2.fromPredicate = function(t3, n3) {
    return n3(t3) ? p.Some(t3) : v;
  };
  var n2 = t2.prototype;
  return n2.map = function(t3) {
    return this === v ? this : p.Some(t3(this.value));
  }, n2.flatMap = function(t3) {
    return this === v ? this : t3(this.value);
  }, n2.filter = function(t3) {
    return this === v || t3(this.value) ? this : v;
  }, n2.get = function() {
    return this.value;
  }, n2.getWithDefault = function(t3) {
    return this === v ? t3 : this.value;
  }, n2.getOr = function(t3) {
    return this === v ? t3 : this.value;
  }, n2.orElse = function(t3) {
    return this === v ? t3 : this;
  }, n2.mapOr = function(t3, n3) {
    return this === v ? t3 : n3(this.value);
  }, n2.match = function(t3) {
    return this === v ? t3.None() : t3.Some(this.value);
  }, n2.tap = function(t3) {
    return t3(this), this;
  }, n2.tapSome = function(t3) {
    return this === v || t3(this.value), this;
  }, n2.toUndefined = function() {
    if (this !== v) return this.value;
  }, n2.toNull = function() {
    return this === v ? null : this.value;
  }, n2.toResult = function(t3) {
    return this.match({ Some: function(t4) {
      return k.Ok(t4);
    }, None: function() {
      return k.Error(t3);
    } });
  }, n2.isSome = function() {
    return this !== v;
  }, n2.isNone = function() {
    return this === v;
  }, n2.toJSON = function() {
    return this.match({ None: function() {
      var t3;
      return (t3 = {})[a] = "Option", t3.tag = "None", t3;
    }, Some: function(t3) {
      var n3;
      return (n3 = {})[a] = "Option", n3.tag = "Some", n3.value = t3, n3;
    } });
  }, t2;
})();
s.P = { Some: function(t2) {
  return { tag: "Some", value: t2 };
}, None: { tag: "None" } }, s.Some = function(t2) {
  var n2 = f.get(t2);
  if (null == n2) {
    var r2 = Object.create(h);
    return r2.tag = "Some", r2.value = t2, Object.freeze(r2), f.set(t2, r2), r2;
  }
  return n2;
}, s.None = function() {
  return v;
}, s.isOption = function(t2) {
  return null != t2 && "Option" === t2.__boxed_type__;
}, s.fromNullable = function(t2) {
  return null == t2 ? v : p.Some(t2);
}, s.fromNull = function(t2) {
  return null === t2 ? v : p.Some(t2);
}, s.fromUndefined = function(t2) {
  return void 0 === t2 ? v : p.Some(t2);
}, s.all = function(t2) {
  for (var n2, r2 = t2.length, e2 = p.Some([]), u2 = 0, o2 = function() {
    if (u2 >= r2) return { v: e2 };
    var n3 = t2[u2];
    null != n3 && (e2 = e2.flatMap(function(t3) {
      return n3.map(function(n4) {
        return t3.push(n4), t3;
      });
    })), u2++;
  }; ; ) if (n2 = o2()) return n2.v;
}, s.allFromDict = function(r2) {
  var e2 = t(r2);
  return p.all(n(r2)).map(function(t2) {
    return Object.fromEntries(c(e2, t2));
  });
}, s.equals = function(t2, n2, r2) {
  return t2.isSome() && n2.isSome() ? r2(t2.get(), n2.get()) : t2.tag === n2.tag;
}, s.fromJSON = function(t2) {
  return "None" === t2.tag ? p.None() : p.Some(t2.value);
}, s.prototype.__boxed_type__ = "Option";
var l, h = s.prototype, v = ((l = Object.create(h)).tag = "None", Object.freeze(l), l), p = s, m = i(), g = i(), O = /* @__PURE__ */ (function() {
  function t2() {
  }
  var n2 = t2.prototype;
  return n2.map = function(t3) {
    return "Ok" === this.tag ? k.Ok(t3(this.value)) : this;
  }, n2.mapError = function(t3) {
    return "Ok" === this.tag ? this : k.Error(t3(this.error));
  }, n2.flatMap = function(t3) {
    return "Ok" === this.tag ? t3(this.value) : this;
  }, n2.flatMapError = function(t3) {
    return "Ok" === this.tag ? this : t3(this.error);
  }, n2.get = function() {
    return this.value;
  }, n2.getError = function() {
    return this.error;
  }, n2.getWithDefault = function(t3) {
    return "Ok" === this.tag ? this.value : t3;
  }, n2.getOr = function(t3) {
    return "Ok" === this.tag ? this.value : t3;
  }, n2.mapOr = function(t3, n3) {
    return "Error" === this.tag ? t3 : n3(this.value);
  }, n2.match = function(t3) {
    return "Ok" === this.tag ? t3.Ok(this.value) : t3.Error(this.error);
  }, n2.tap = function(t3) {
    return t3(this), this;
  }, n2.tapOk = function(t3) {
    return "Ok" === this.tag && t3(this.value), this;
  }, n2.tapError = function(t3) {
    return "Error" === this.tag && t3(this.error), this;
  }, n2.toOption = function() {
    return "Ok" === this.tag ? p.Some(this.value) : v;
  }, n2.isOk = function() {
    return "Ok" === this.tag;
  }, n2.isError = function() {
    return "Error" === this.tag;
  }, n2.toJSON = function() {
    return this.match({ Ok: function(t3) {
      var n3;
      return (n3 = {})[a] = "Result", n3.tag = "Ok", n3.value = t3, n3;
    }, Error: function(t3) {
      var n3;
      return (n3 = {})[a] = "Result", n3.tag = "Error", n3.error = t3, n3;
    } });
  }, t2;
})();
O.P = { Ok: function(t2) {
  return { tag: "Ok", value: t2 };
}, Error: function(t2) {
  return { tag: "Error", error: t2 };
} }, O.Ok = function(t2) {
  var n2 = m.get(t2);
  if (null == n2) {
    var r2 = Object.create(_);
    return r2.tag = "Ok", r2.value = t2, Object.freeze(r2), m.set(t2, r2), r2;
  }
  return n2;
}, O.Error = function(t2) {
  var n2 = g.get(t2);
  if (null == n2) {
    var r2 = Object.create(_);
    return r2.tag = "Error", r2.error = t2, Object.freeze(r2), g.set(t2, r2), r2;
  }
  return n2;
}, O.isResult = function(t2) {
  return null != t2 && "Result" === t2.__boxed_type__;
}, O.fromExecution = function(t2) {
  try {
    return k.Ok(t2());
  } catch (t3) {
    return k.Error(t3);
  }
}, O.fromPromise = function(t2) {
  try {
    return Promise.resolve((function(n2, r2) {
      try {
        var e2 = Promise.resolve(t2).then(function(t3) {
          return k.Ok(t3);
        });
      } catch (t3) {
        return r2(t3);
      }
      return e2 && e2.then ? e2.then(void 0, r2) : e2;
    })(0, function(t3) {
      return k.Error(t3);
    }));
  } catch (t3) {
    return Promise.reject(t3);
  }
}, O.fromOption = function(t2, n2) {
  return t2.toResult(n2);
}, O.all = function(t2) {
  for (var n2, r2 = t2.length, e2 = k.Ok([]), u2 = 0, o2 = function() {
    if (u2 >= r2) return { v: e2 };
    var n3 = t2[u2];
    null != n3 && (e2 = e2.flatMap(function(t3) {
      return n3.map(function(n4) {
        return t3.push(n4), t3;
      });
    })), u2++;
  }; ; ) if (n2 = o2()) return n2.v;
}, O.allFromDict = function(r2) {
  var e2 = t(r2);
  return k.all(n(r2)).map(function(t2) {
    return Object.fromEntries(c(e2, t2));
  });
}, O.equals = function(t2, n2, r2) {
  return t2.tag === n2.tag && (!(!t2.isError() || !n2.isError()) || !(!t2.isOk() || !n2.isOk()) && r2(t2.get(), n2.get()));
}, O.fromJSON = function(t2) {
  return "Ok" === t2.tag ? k.Ok(t2.value) : k.Error(t2.error);
}, O.prototype.__boxed_type__ = "Result";
var _ = O.prototype, k = O, E = i(), b = /* @__PURE__ */ (function() {
  function t2() {
  }
  var n2 = t2.prototype;
  return n2.map = function(t3) {
    return this === D || this === j ? this : R.Done(t3(this.value));
  }, n2.flatMap = function(t3) {
    return this === D || this === j ? this : t3(this.value);
  }, n2.mapOkToResult = function(t3) {
    return this.map(function(n3) {
      return n3.match({ Ok: function(n4) {
        return t3(n4);
      }, Error: function() {
        return n3;
      } });
    });
  }, n2.mapErrorToResult = function(t3) {
    return this.map(function(n3) {
      return n3.match({ Error: function(n4) {
        return t3(n4);
      }, Ok: function() {
        return n3;
      } });
    });
  }, n2.mapOk = function(t3) {
    return this.map(function(n3) {
      return n3.match({ Ok: function(n4) {
        return k.Ok(t3(n4));
      }, Error: function() {
        return n3;
      } });
    });
  }, n2.mapError = function(t3) {
    return this.map(function(n3) {
      return n3.match({ Ok: function() {
        return n3;
      }, Error: function(n4) {
        return k.Error(t3(n4));
      } });
    });
  }, n2.flatMapOk = function(t3) {
    return this.flatMap(function(n3) {
      return n3.match({ Ok: function(n4) {
        return t3(n4);
      }, Error: function() {
        return R.Done(n3);
      } });
    });
  }, n2.flatMapError = function(t3) {
    return this.flatMap(function(n3) {
      return n3.match({ Ok: function() {
        return R.Done(n3);
      }, Error: function(n4) {
        return t3(n4);
      } });
    });
  }, n2.get = function() {
    return this.value;
  }, n2.getWithDefault = function(t3) {
    return this === D || this === j ? t3 : this.value;
  }, n2.getOr = function(t3) {
    return this === D || this === j ? t3 : this.value;
  }, n2.mapOr = function(t3, n3) {
    return this === D || this === j ? t3 : n3(this.value);
  }, n2.match = function(t3) {
    return this === D ? t3.NotAsked() : this === j ? t3.Loading() : t3.Done(this.value);
  }, n2.tap = function(t3) {
    return t3(this), this;
  }, n2.toOption = function() {
    return this === D || this === j ? p.None() : p.Some(this.value);
  }, n2.isDone = function() {
    return this !== D && this !== j;
  }, n2.isLoading = function() {
    return this === j;
  }, n2.isNotAsked = function() {
    return this === D;
  }, n2.toJSON = function() {
    return this.match({ NotAsked: function() {
      var t3;
      return (t3 = {})[a] = "AsyncData", t3.tag = "NotAsked", t3;
    }, Loading: function() {
      var t3;
      return (t3 = {})[a] = "AsyncData", t3.tag = "Loading", t3;
    }, Done: function(t3) {
      var n3;
      return (n3 = {})[a] = "AsyncData", n3.tag = "Done", n3.value = t3, n3;
    } });
  }, t2;
})();
b.P = { Done: function(t2) {
  return { tag: "Done", value: t2 };
}, NotAsked: { tag: "NotAsked" }, Loading: { tag: "Loading" } }, b.Done = function(t2) {
  var n2 = E.get(t2);
  if (null == n2) {
    var r2 = Object.create(S);
    return r2.tag = "Done", r2.value = t2, Object.freeze(r2), E.set(t2, r2), r2;
  }
  return n2;
}, b.Loading = function() {
  return j;
}, b.NotAsked = function() {
  return D;
}, b.all = function(t2) {
  for (var n2, r2 = t2.length, e2 = R.Done([]), u2 = 0, o2 = function() {
    if (u2 >= r2) return { v: e2 };
    var n3 = t2[u2];
    null != n3 && (e2 = e2.flatMap(function(t3) {
      return n3.map(function(n4) {
        return t3.push(n4), t3;
      });
    })), u2++;
  }; ; ) if (n2 = o2()) return n2.v;
}, b.allFromDict = function(r2) {
  var e2 = t(r2);
  return R.all(n(r2)).map(function(t2) {
    return Object.fromEntries(c(e2, t2));
  });
}, b.equals = function(t2, n2, r2) {
  return "Done" === t2.tag && "Done" === n2.tag ? r2(t2.value, n2.value) : t2.tag === n2.tag;
}, b.isAsyncData = function(t2) {
  return null != t2 && "AsyncData" === t2.__boxed_type__;
}, b.fromJSON = function(t2) {
  return "NotAsked" === t2.tag ? R.NotAsked() : "Loading" === t2.tag ? R.Loading() : R.Done(t2.value);
}, b.prototype.__boxed_type__ = "AsyncData";
var N, S = b.prototype, j = ((N = Object.create(S)).tag = "Loading", Object.freeze(N), N), D = (function() {
  var t2 = Object.create(S);
  return t2.tag = "NotAsked", Object.freeze(t2), t2;
})(), R = b;
function PivotObjectDetails({ tableModel, dataModel, pivotObject }) {
  const { t: t2 } = useTranslation(["common", "cases"]);
  const { data, relatedObjects } = pivotObject.pivotObjectData;
  const filteredRelatedObjects = relatedObjects.filter((r2) => !!r2.relatedObjectDetail?.metadata);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DataFields, { table: tableModel.name, object: { data } }),
    filteredRelatedObjects.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "", children: filteredRelatedObjects.map((relatedObject) => {
      if (!relatedObject.relatedObjectDetail?.metadata) return null;
      const relatedObjectType = relatedObject.relatedObjectDetail.metadata.objectType;
      const relatedObjectTable = dataModel.find((tm) => tm.name === relatedObjectType);
      if (!relatedObjectTable) return null;
      const tableName = relatedObject.linkName ?? relatedObjectType;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(reactExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Typo,
          {
            variant: "subtitle2",
            className: "border-grey-border mb-md border-b text-right text-xs font-semibold",
            children: t2("cases:case_detail.pivot_panel.related_object", {
              tableName
            })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DataFields, { table: relatedObjectType, object: { data: relatedObject.relatedObjectDetail.data } })
      ] }, relatedObjectType);
    }) }) : null
  ] }) });
}
const findDataFromPivotValue = (pivots, pivotValue) => {
  return pivots.find((p2) => p2.pivotValue === pivotValue);
};
function CaseSnoozePanel({ onClose, caseDetail, dataModel, pivotObjects, entitlements }) {
  const { t: t2 } = useTranslation(casesI18n);
  const language = useFormatLanguage();
  const formatDateTime = useFormatDateTime();
  const rulesByPivotQuery = useRulesByPivotQuery(caseDetail.id);
  const pivotKeys = rulesByPivotQuery.data ? Object.keys(rulesByPivotQuery.data.rulesByPivot) : [];
  const [activeTab, setActiveTab] = reactExports.useState(null);
  const effectiveActiveTab = activeTab ?? pivotKeys[0] ?? null;
  if (rulesByPivotQuery.isPending) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Loading..." });
  }
  if (rulesByPivotQuery.isError) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Error" });
  }
  const rulesByPivot = rulesByPivotQuery.data.rulesByPivot;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Panel.Header, { children: "Rules" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex w-full flex-col gap-lg px-sm", children: pivotKeys.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center gap-md py-xl text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "inbox", className: "size-8 text-grey-secondary" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-grey-secondary", children: t2("cases:case_detail.rules.no_rules") })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex w-full flex-col", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Tabs, { children: pivotKeys.map((pivotValue) => {
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            className: cn(tabClassName, "gap-sm"),
            "data-status": effectiveActiveTab === pivotValue ? "active" : void 0,
            onClick: () => setActiveTab(pivotValue),
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: pivotValue })
          },
          `trigger-${pivotValue}`
        );
      }) }),
      e.entries(rulesByPivot).map(([pivotValue, rules]) => {
        if (effectiveActiveTab !== pivotValue) return null;
        const client = findDataFromPivotValue(pivotObjects, pivotValue);
        const table = dataModel.find((t22) => t22.name === client?.pivotObjectName);
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-lg flex w-full flex-col items-start gap-lg", children: [
          table && client ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-grey-border flex flex-col gap-md border p-md bg-grey-background-light rounded-lg", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "capitalize font-semibold", children: table.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(PivotObjectDetails, { tableModel: table, dataModel, pivotObject: client })
          ] }) : null,
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-grey-border bg-surface-card relative w-full rounded-lg border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-2xs text-grey-secondary relative grid grid-cols-[150px_120px_1fr_1fr_0.5fr_0.5fr_150px] font-normal", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-sm p-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t2("cases:decisions.rule.snooze") }),
                entitlements.ruleSnoozes !== "allowed" ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Nudge,
                  {
                    className: "size-4",
                    iconClass: "size-2.5",
                    kind: entitlements.ruleSnoozes,
                    link: "https://docs.checkmarble.com/docs/rule-snoozes",
                    content: entitlements.ruleSnoozes === "missing_configuration" ? t2("common:missing_configuration") : t2("cases:case_detail.add_rule_snooze.nudge")
                  }
                ) : null
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "p-sm", children: t2("cases:decisions.rule.last_hit_timestamp") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "p-sm", children: t2("cases:decisions.rule.name_and_score") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "p-sm", children: t2("cases:decisions.rule.description") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "p-sm", children: t2("cases:decisions.rule.rule_group") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "p-sm", children: t2("cases:decisions.rule.snooze_until") })
            ] }),
            rules.map((r2) => {
              const formattedHitAt = /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("text-grey-secondary text-xs", { "opacity-30": r2.isSnoozed }), children: formatDateTime(r2.hitAt, { dateStyle: "short" }) });
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "border-grey-border hover:bg-purple-background-light grid grid-cols-[150px_120px_1fr_1fr_0.5fr_0.5fr_150px] items-center border-t transition-colors",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-full items-center justify-center p-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AddRuleSnooze, { decisionId: r2.decisionId, ruleId: r2.ruleId, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Button,
                      {
                        variant: "secondary",
                        size: "small",
                        className: cn({ "bg-purple-background": r2.isSnoozed }),
                        disabled: r2.isSnoozed || entitlements.ruleSnoozes !== "allowed" && entitlements.ruleSnoozes !== "test",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: r2.isSnoozed ? "snooze-on" : "snooze", className: "size-4", "aria-hidden": true }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium", children: t2("cases:decisions.rule.snooze") })
                        ]
                      }
                    ) }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-grey-border flex min-h-full items-center justify-center border-x p-sm", children: formattedHitAt }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-grey-border flex min-h-full items-center justify-between border-r p-sm", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: cn("text-grey-primary text-xs font-normal", {
                            "opacity-30": r2.isSnoozed
                          }),
                          children: r2.name
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        ScoreModifier,
                        {
                          score: isRuleExecutionHit(r2) ? r2.scoreModifier : 0,
                          className: cn({ "opacity-30": r2.isSnoozed })
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-grey-border flex min-h-full items-center border-r p-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("text-xs", { "opacity-30": r2.isSnoozed }), children: r2.description }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-grey-border flex min-h-full items-center border-r p-sm", children: r2.ruleGroup ? /* @__PURE__ */ jsxRuntimeExports.jsx(RuleGroup, { className: cn({ "opacity-30": r2.isSnoozed }), ruleGroup: r2.ruleGroup }) : null }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-full items-center p-sm", children: r2.isSnoozed && r2.end ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "opacity-30", children: formatRelative(r2.end, /* @__PURE__ */ new Date(), {
                      locale: getDateFnsLocale(language)
                    }) }) : null })
                  ]
                },
                r2.ruleId
              );
            })
          ] })
        ] }, `content-${pivotValue}`);
      })
    ] }) })
  ] });
}
function getClientDisplayInfo(pivotObject, client360Tables) {
  const metadata = client360Tables.find((t2) => t2.name === pivotObject.pivotObjectName);
  const entityName = metadata?.alias || metadata?.name || pivotObject.pivotObjectName;
  const clientName = metadata ? pivotObject.pivotObjectData.data[metadata.caption_field] : "";
  return { metadata, entityName, clientName };
}
function CaseManagerPrincipalPage({
  caseDetail,
  dataModel,
  pivotObjects,
  inboxes,
  client360Tables,
  userScoringAccess,
  entitlements
}) {
  const { t: t2 } = useTranslation(["common", "cases"]);
  const { orgTags } = useOrganizationTags();
  const { currentUser } = useOrganizationDetails();
  const caseInbox = inboxes.find((inbox) => inbox.id === caseDetail.inboxId) ?? null;
  const mainPivotObject = pivotObjects?.[0] ?? null;
  const caseDecisionsQuery = useCaseDecisionsQuery(caseDetail.id);
  const hasRuleHits = caseDecisionsQuery.data?.pages.some(
    (page) => page?.decisions?.some((d) => d.rules?.some((r2) => r2.outcome === "hit"))
  );
  const rootRef = reactExports.useRef(null);
  const editTagsMutation = useEditTagsMutation();
  const caseTagsIds = caseDetail.tags.map((t22) => t22.tagId);
  const tagsForm = useForm({
    onSubmit: ({ value }) => {
      editTagsMutation.mutateAsync(value);
    },
    defaultValues: {
      caseId: caseDetail.id,
      tagIds: caseTagsIds
    },
    validators: {
      onSubmit: editTagsPayloadSchema
    }
  });
  const [snoozePanelOpen, setSnoozePanelOpen] = reactExports.useState(false);
  const handleDisplaySnoozePanel = () => setSnoozePanelOpen(true);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("grid grid-cols-1 lg:grid-cols-2", pageLayoutGutter.gap), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-lg", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "flex flex-col gap-sm text-small", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CaseStatusBadgeV2, { status: caseDetail.status, outcome: caseDetail.outcome, variant: "semi-full" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(tagsForm.Field, { name: "tagIds", children: (field) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              TagList,
              {
                editable: true,
                placeholder: t2("cases:manager.principal.add_tag_placeholder"),
                tags: orgTags,
                value: field.state.value,
                onChange: (tags) => {
                  tagsForm.setFieldValue("tagIds", tags);
                  tagsForm.handleSubmit();
                }
              }
            ) }),
            caseDetail.status !== "closed" ? /* @__PURE__ */ jsxRuntimeExports.jsx(EscalateCaseButton, { caseId: caseDetail.id, inboxId: caseDetail.inboxId, className: "ms-auto" }) : null
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-[2fr_1fr] gap-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CaseInfo, { caseDetail, currentUser }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              CaseEvents$1,
              {
                events: caseDetail.events,
                currentInboxId: caseDetail.inboxId,
                inboxes,
                includeEventTypes: ["case_created", "inbox_changed", "case_snoozed", "case_unsnoozed", "case_assigned"],
                dueAt: caseDetail.dueAt,
                status: caseDetail.status
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AiReviewCard, { caseId: caseDetail.id, canManuallyReview: caseInbox?.caseReviewManual ?? false }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col justify-start gap-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-default text-grey-primary flex items-center justify-between px-2xs font-medium", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t2("cases:alerts") }),
            hasRuleHits ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "secondary", onClick: () => handleDisplaySnoozePanel(), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "snooze", className: "size-3.5" }),
              t2("cases:decisions.snooze_rules")
            ] }) : null
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CaseAlerts, { caseDecisionsQuery, dataModel })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-lg", children: [
        mainPivotObject ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          ClientCard,
          {
            caseId: caseDetail.id,
            pivotObject: mainPivotObject,
            dataModel,
            client360Tables,
            userScoringAccess
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "flex flex-col items-center justify-center gap-sm text-small text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-grey-secondary", children: isAdmin(currentUser) ? t2("cases:case_detail.pivot_panel.missing_pivot.admin") : t2("cases:case_detail.pivot_panel.missing_pivot") }),
          isAdmin(currentUser) ? /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/data", className: CtaV2ClassName({ variant: "primary", appearance: "stroked" }), children: t2("cases:case_detail.pivot_panel.missing_pivot_cta") }) : null
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CaseDocuments, { files: caseDetail.files }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          CaseInvestigation,
          {
            root: rootRef,
            caseId: caseDetail.id,
            currentInboxId: caseDetail.inboxId,
            events: caseDetail.events,
            inboxes
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Panel.Root, { open: snoozePanelOpen, onOpenChange: setSnoozePanelOpen, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Panel.Container, { size: "medium", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Panel.Content, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      CaseSnoozePanel,
      {
        onClose: () => setSnoozePanelOpen(false),
        caseDetail,
        dataModel,
        pivotObjects: pivotObjects ?? [],
        entitlements
      }
    ) }) }) })
  ] });
}
function ClientCard({ caseId, pivotObject, dataModel, client360Tables, userScoringAccess }) {
  const { t: t2 } = useTranslation(["common"]);
  const { currentUser } = useOrganizationDetails();
  const currentTable = dataModel.find((t22) => t22.name === pivotObject.pivotObjectName);
  const { metadata, entityName, clientName } = getClientDisplayInfo(pivotObject, client360Tables);
  const [explorationOpen, setExplorationOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "flex flex-col gap-sm text-small", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: clientName }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-sm", children: [
        pivotObject.pivotObjectId ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          UserScoreBadge,
          {
            objectType: pivotObject.pivotObjectName,
            objectId: pivotObject.pivotObjectId,
            userScoringAccess
          }
        ) : null,
        metadata && pivotObject.isIngested ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: "/client-detail/$objectType/$objectId",
            params: clientDetailLinkParams(pivotObject.pivotObjectName, pivotObject.pivotObjectId),
            className: CtaV2ClassName({ appearance: "link", variant: "primary" }),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "eye", className: "size-4" }),
              t2("common:see_all")
            ]
          }
        ) : null
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-xs items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { color: "grey", className: "capitalize", children: entityName }),
      pivotObject.pivotObjectId ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        ClientObjectTagList,
        {
          caseId,
          tableName: pivotObject.pivotObjectName,
          objectId: pivotObject.pivotObjectId
        }
      ) : null
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        DataFields,
        {
          options: { layout: "2-columns", maxVisibleFields: 6, displayExpandButton: false },
          object: pivotObject.pivotObjectData,
          table: pivotObject.pivotObjectName
        }
      ),
      currentTable ? /* @__PURE__ */ jsxRuntimeExports.jsxs(DataModelExplorerProvider, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          NavigationOptions,
          {
            currentUser,
            pivotObject,
            table: currentTable,
            dataModel,
            onExplore: () => setExplorationOpen(true)
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DataExplorerPanel, { dataModel, open: explorationOpen, onOpenChange: setExplorationOpen })
      ] }) : null
    ] })
  ] });
}
function RouteComponent() {
  const {
    caseDetail,
    dataModel,
    pivotObjects,
    inboxes,
    client360Tables,
    userScoringAccess,
    entitlements
  } = Route$g.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(CaseManagerPrincipalPage, { caseDetail, dataModel, pivotObjects, inboxes, client360Tables, userScoringAccess, entitlements });
}
export {
  RouteComponent as component
};

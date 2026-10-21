import { Q as jsxRuntimeExports, M as reactExports, L as useRouter } from "./server.mjs";
import { aJ as Route$k, P as Page, B as BreadCrumbs, p as pageLayoutGutter, C as CaseStatusBadgeV2, L as Link } from "./router-KSC-NEr8.mjs";
import { u as useLoaderRevalidator } from "./LoaderRevalidatorContext-BEuG7sHs.mjs";
import { z as isAdmin, dp as isDirectContinuousScreening, a2 as M, ds as isIndirectContinuousScreening, dn as getMatchEntityType, dq as isDirectContinuousScreeningMatch, dr as isIndirectContinuousScreeningMatch, aS as z, p as t$c, u as t$e, _ as t$8 } from "./services-middleware-nMulUXHZ.mjs";
import { u as useCloseCaseMutation, a as useOpenCaseMutation } from "./open-case-CeN6gENK.mjs";
import { u as useEditTagsMutation, E as EscalateCaseButton, C as CaseInfo, a as CaseEvents$1, b as CaseInvestigation } from "./EscalateCaseButton-DsPzYYcG.mjs";
import { n as getNextUnassignedCaseFn } from "./cases-C-fVFrVL.mjs";
import { u as useOrganizationDetails } from "./organization-detail-BGvqBGx1.mjs";
import { u as useOrganizationTags } from "./organization-tags-CGghbGcj.mjs";
import { f as fromUUIDtoSUUID } from "./short-uuid-fTZYJj_k.mjs";
import { u as useForm } from "./useForm-qNQ8S9xN.mjs";
import { u as useServerFn } from "./useServerFn-oRH5Nw97.mjs";
import { z as zt, T as Tag } from "./create-context-k6HmQ6bB.mjs";
import { u as useTranslation, B as Button, I as Icon, d as cn, W as CtaV2ClassName, aq as Card, S as Typo, T as Trans, an as Panel, M as MenuCommand, ab as Radio, a as useFormatDateTime } from "./Tabs-CzpyUi7T.mjs";
import { T as TagList } from "./TagList-5cEiXNQD.mjs";
import { R as ReviewStatusBadge, u as useRelatedCasesByObjectQuery } from "./ReviewStatusBadge-CiLqJzT4.mjs";
import { s as sortScreeningMatchesByTopics } from "./match-sorting-rekCDl1i.mjs";
import { a as Callout } from "./Callout-B0OuRL3q.mjs";
import { g as dismissContinuousScreeningFn, r as reviewContinuousScreeningMatchFn, h as getContinuousScreeningConfigurationFn } from "./continuous-screening-CrmIE_W_.mjs";
import { u as useMutation } from "./useMutation-BOdeDeAR.mjs";
import { M as Modal } from "./Modal-CpYmGWjB.mjs";
import { C as CommentLine } from "./CommentLine-D8LO9NpB.mjs";
import { b as TopicTag, M as MatchDetails, c as EntityProperties, E as EntityDatasetsList } from "./FreeformMatchCard-ClTnPmkJ.mjs";
import { R as Root, T as Trigger, C as Content } from "./index-22HmyALM.mjs";
import { u as useObjectDetailsQuery, g as DataFields, p as parseUnknownData } from "./DataField-BczNbAhi.mjs";
import { S as Spinner } from "./Spinner-DmLieYoS.mjs";
import { u as useDataModelQuery } from "./get-data-model-BUauY6PR.mjs";
import { T as TextArea } from "./TextArea-p2rzbOeQ.mjs";
import { r as reviewMatchPayloadSchema } from "./continuous-screenings-CbvELuxK.mjs";
import { h as handleSubmit } from "./form-D2XmDKeG.mjs";
import { u as useStore } from "./useStore-C3gZU5bu.mjs";
import { F as FormatData } from "./FormatData-CcbzFq6m.mjs";
import { u as useDatasetTitle, h as buildCategoryDatasetSummaries } from "./dataset-utils-CXMfULsv.mjs";
import { D as DatasetTag } from "./DatasetTag-RXIheIFj.mjs";
import { u as useQuery } from "./useQuery-Bb0AEcpf.mjs";
import { u as useListConfigQuery } from "./lists-config-DL0Z5yQK.mjs";
import { E as ExpandableGroupTagLine } from "./ExpandableGroupTagLine-MgT0uQKb.mjs";
import { f as editTagsPayloadSchema } from "./cases-BQ48izmh.mjs";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
import "util";
import "crypto";
import "async_hooks";
import "stream";
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
import "./use-callback-ref-DoQNLci-.mjs";
import "./sharpstate.es-C0BW2AZi.mjs";
import "./FormErrorOrDescription-BncG6ljR.mjs";
import "./organization-users-CEJGnALa.mjs";
import "./Avatar-DDGL3Siw.mjs";
import "./get-inboxes-BXwOxAig.mjs";
import "./cases-i18n-CKTv5qXV.mjs";
import "./decisions-i18n-Cg4JM_3r.mjs";
import "./useFormDropzone-DXcqE7tO.mjs";
import "./index-CBe2FUD4.mjs";
import "./add-comment-YfEwin_9.mjs";
import "./Time-CKTfEtti.mjs";
import "./array-BFSjnO9c.mjs";
import "./user-Dgp6KqPL.mjs";
import "./join-Ce2xPJwm.mjs";
import "./Markdown-Djw5Zezo.mjs";
import "./Code-NcjS_4uC.mjs";
import "./OutcomeTag-DYQZ2msd.mjs";
import "./IngestedObjectDetailModal-CBuAoLJ_.mjs";
import "./TagPreview-DaOqtPxx.mjs";
import "./organization-object-tags-BKGicIcs.mjs";
import "./Checkbox-C8nszDsh.mjs";
import "./endOfDay-D4VMTcyc.mjs";
import "./allPass-grBz5uBv.mjs";
import "./curry-D3P8tFW_.mjs";
import "./use-debounced-callback-ref-CXwcVZ7S.mjs";
import "./screenings-C_YbbaUO.mjs";
import "./Collapsible-CKx8cmdD.mjs";
import "./screening-entity-cwm_Y847.mjs";
import "./ExternalLink-BlVgwkVd.mjs";
import "./tryCatch-CFf1qt2b.mjs";
import "./Select-Dg3p9vJ0.mjs";
import "./isNullish-B8pc8Ntu.mjs";
import "./data-9UajV2HK.mjs";
import "./data-BXamdbTM.mjs";
import "./isNonNullish-DgEqPJBU.mjs";
import "./Switch-BV-_0Knl.mjs";
import "./data-model-Dfj0lN5a.mjs";
import "./mapToObj-C7dg8HnM.mjs";
import "./omit-qKVZGDJg.mjs";
import "./hasAtLeast-BmuNoqMd.mjs";
import "./maplibre-gl-BcA3NZzV.mjs";
import "./useBaseQuery-BqF2iw7Y.mjs";
import "./Popover-Cp1XdSV2.mjs";
const useDismissContinuousScreeningMutation = () => {
  const dismissContinuousScreening = useServerFn(dismissContinuousScreeningFn);
  return useMutation({
    mutationFn: async (screeningId) => {
      await dismissContinuousScreening({ data: { screeningId } });
    }
  });
};
function DismissAlertButton({ screening }) {
  const { t: t2 } = useTranslation(["common", "continuousScreening"]);
  const dismissMutation = useDismissContinuousScreeningMutation();
  const revalidate = useLoaderRevalidator();
  const [open, setOpen] = reactExports.useState(false);
  const dismissAlert = () => {
    dismissMutation.mutateAsync(screening.id).then(() => {
      zt.success(t2("continuousScreening:success.dismissed"));
      revalidate();
      setOpen(false);
    }).catch(() => {
      zt.error(t2("common:errors.unknown"));
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal.Root, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.Trigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "secondary", size: "small", disabled: screening.status !== "in_review", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "snooze-stroke", className: "size-4" }),
      t2("continuousScreening:review.dismiss_alert")
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal.Content, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.Title, { children: t2("continuousScreening:review.dismiss_alert") }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-lg p-lg", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: t2("continuousScreening:review.dismiss_alert_modal.warning_text") }),
        screening.partial ? /* @__PURE__ */ jsxRuntimeExports.jsx(Callout, { color: "red", children: t2("continuousScreening:review.dismiss_alert_modal.partial_search_warning") }) : null,
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: t2("continuousScreening:review.dismiss_alert_modal.confirmation_text") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal.Footer, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.FooterButton, { isCloseButton: true, label: t2("common:cancel") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Modal.FooterButton,
          {
            label: t2("continuousScreening:review.dismiss_alert_modal.confirm_button"),
            onClick: dismissAlert
          }
        )
      ] })
    ] })
  ] });
}
function ObjectRelatedCases({
  currentCase,
  objectType,
  objectId,
  className
}) {
  const { t: t2 } = useTranslation(["common", "cases"]);
  const casesQuery = useRelatedCasesByObjectQuery(objectType, objectId);
  const formatDateTime = useFormatDateTime();
  return M(casesQuery).with({ isError: true }, () => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-red-disabled bg-red-background text-red-primary mt-md rounded-sm border p-sm", children: t2("common:global_error") });
  }).with({ isPending: true }, () => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, { className: "size-6" });
  }).otherwise((query) => {
    const cases = query.data?.cases.filter((caseObj) => caseObj.id !== currentCase.id) ?? [];
    if (cases.length === 0) {
      return null;
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("p-md rounded-md", className), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-md", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium", children: t2("cases:case_detail.pivot_panel.case_history") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid w-full grid-cols-[auto_1fr_auto] items-center gap-md", children: cases.map((caseObj) => {
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(reactExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: formatDateTime(caseObj.createdAt, { dateStyle: "short" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-sm items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: caseObj.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CaseStatusBadgeV2, { status: caseObj.status, variant: "icon-only", outcome: caseObj.outcome })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/cases/$caseId",
              params: { caseId: fromUUIDtoSUUID(caseObj.id) },
              className: CtaV2ClassName({ variant: "secondary", appearance: "link", mode: "icon" }),
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "external-link", className: "size-4" })
            }
          ) })
        ] }, caseObj.id);
      }) })
    ] }) });
  });
}
const ObjectDetails = ({ objectType, objectId, currentCase }) => {
  const { t: t2 } = useTranslation(["common", "continuousScreening"]);
  const dataModelQuery = useDataModelQuery();
  const objectDetailsQuery = useObjectDetailsQuery(objectType, objectId);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-sm", children: M([dataModelQuery, objectDetailsQuery]).with([{ isPending: true }, z.any], () => {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, { className: "size-6" });
    }).with([z.any, { isPending: true }], () => {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, { className: "size-6" });
    }).with([{ isError: true }, z.any], () => {
      return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: t2("common:generic_fetch_data_error") });
    }).with([z.any, { isError: true }], () => {
      return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: t2("common:generic_fetch_data_error") });
    }).with([{ isSuccess: true }, { isSuccess: true }], ([dmQuery, objQuery]) => {
      const tableModel = dmQuery.data.dataModel.find((t22) => t22.name === objectType);
      if (!tableModel) return null;
      return /* @__PURE__ */ jsxRuntimeExports.jsx(DataFields, { table: tableModel.name, object: { data: objQuery.data.data } });
    }).exhaustive() }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ObjectRelatedCases,
      {
        objectType,
        objectId,
        currentCase,
        className: "bg-grey-background-light border border-grey-border"
      }
    )
  ] });
};
const useReviewContinuousScreeningMatchMutation = () => {
  const reviewContinuousScreeningMatch = useServerFn(reviewContinuousScreeningMatchFn);
  return useMutation({
    mutationFn: async (payload) => {
      await reviewContinuousScreeningMatch({ data: payload });
    }
  });
};
const ReviewScreeningMatch = ({
  screeningMatch,
  automaticallyConfirmScreening = false,
  open,
  onOpenChange
}) => {
  const { t: t2 } = useTranslation(["common", "screenings"]);
  const reviewScreeningMatchMutation = useReviewContinuousScreeningMatchMutation();
  const revalidate = useLoaderRevalidator();
  const form = useForm({
    defaultValues: {
      matchId: screeningMatch.id,
      status: "no_hit",
      comment: ""
    },
    onSubmit: async ({ value }) => {
      reviewScreeningMatchMutation.mutateAsync(value).then(() => {
        onOpenChange(false);
        revalidate();
      }).catch(() => {
        zt.error(t2("common:errors.unknown"));
      });
    },
    validators: {
      onSubmit: reviewMatchPayloadSchema
    }
  });
  const currentStatus = useStore(form.store, (state) => state.values.status);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(MenuCommand.Menu, { open, onOpenChange, persistOnSelect: true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Trigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Button,
      {
        variant: "primary",
        size: "small",
        onClick: (e) => {
          e.stopPropagation();
        },
        children: [
          t2("screenings:start_reviewing"),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "caret-down", className: "size-4" })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(MenuCommand.Content, { align: "end", sideOffset: 4, className: "w-[420px]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "form",
        {
          id: `match_review_form_${screeningMatch.id}`,
          className: "flex flex-col gap-sm p-md",
          onSubmit: handleSubmit(form),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-s font-medium", children: t2("screenings:review_modal.status_label") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(form.Field, { name: "status", children: (field) => /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Radio.Root,
                {
                  value: field.state.value,
                  onValueChange: (value) => field.handleChange(value),
                  className: "flex flex-col gap-sm",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Radio.Item,
                      {
                        value: "confirmed_hit",
                        className: "text-grey-secondary data-[state=checked]:text-purple-primary rounded-sm transition-colors",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs", children: t2("screenings:match.status.confirmed_hit") })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Radio.Item,
                      {
                        value: "no_hit",
                        className: "text-grey-secondary data-[state=checked]:text-purple-primary rounded-sm transition-colors",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs", children: t2("screenings:match.status.no_hit") })
                      }
                    )
                  ]
                }
              ),
              currentStatus === "confirmed_hit" && automaticallyConfirmScreening ? /* @__PURE__ */ jsxRuntimeExports.jsx(Callout, { children: t2("screenings:review_modal.callout_confirmed_hit") }) : null
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(form.Field, { name: "comment", children: (field) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              TextArea,
              {
                name: field.name,
                value: field.state.value,
                onChange: (e) => field.handleChange(e.target.value),
                placeholder: t2("screenings:review_modal.comment_label"),
                className: "h-[100px]"
              }
            ) })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal.Footer, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.FooterButton, { variant: "secondary", label: t2("common:cancel"), onClick: () => onOpenChange(false) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Modal.FooterButton,
          {
            type: "submit",
            form: `match_review_form_${screeningMatch.id}`,
            label: t2("common:save"),
            disabled: !currentStatus || reviewScreeningMatchMutation.isPending
          }
        )
      ] })
    ] })
  ] });
};
function MatchCard({ caseDetail, screening, screeningMatch }) {
  const { t: t2 } = useTranslation(["screenings"]);
  const [popoverOpen, setPopoverOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Root, { defaultOpen: screening.matches.length === 1, className: "overflow-hidden group/collapsible", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Trigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-sm items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Icon,
          {
            icon: "caret-down",
            className: "self-start mt-xs size-4 group-radix-state-open/collapsible:rotate-180 transition-transform duration-200"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-row gap-sm items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: screeningMatch.payload.caption }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-tiny p-xs border border-grey-border rounded-sm", children: getMatchEntityType(screeningMatch) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-grey-border rounded-full size-1.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { color: "grey", className: "shrink-0", children: t2("screenings:match.score", { score: Math.round(screeningMatch.payload.score * 100) }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-row flex-wrap gap-xs", children: screeningMatch.payload.properties["topics"]?.map((topic) => {
            return /* @__PURE__ */ jsxRuntimeExports.jsx(TopicTag, { topic, className: "text-small" }, topic);
          }) }),
          screeningMatch.comments.map((comment) => {
            return /* @__PURE__ */ jsxRuntimeExports.jsx(CommentLine, { comment }, comment.id);
          })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: M(screeningMatch.status).with("confirmed_hit", () => /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { color: "red", children: t2("screenings:match.status.confirmed_hit") })).with("no_hit", () => /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { color: "green", children: t2("screenings:match.status.no_hit") })).with("pending", () => /* @__PURE__ */ jsxRuntimeExports.jsx(
        ReviewScreeningMatch,
        {
          screeningMatch,
          automaticallyConfirmScreening: isDirectContinuousScreening(screening),
          open: popoverOpen,
          onOpenChange: setPopoverOpen
        }
      )).with("skipped", () => /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { color: "grey", children: t2("screenings:match.status.skipped") })).exhaustive() })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Content, { className: "mt-md radix-state-open:animate-slide-down radix-state-closed:animate-slide-up", children: M(screeningMatch).when(isDirectContinuousScreeningMatch, (directMatch) => {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        MatchDetails,
        {
          entity: directMatch.payload,
          before: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold capitalize", children: t2("screenings:dataset", { count: directMatch.payload.datasets.length }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-row flex-wrap", children: directMatch.payload.datasets.map((dataset, index) => {
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(reactExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: dataset }),
                index < directMatch.payload.datasets.length - 1 ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mx-xs", children: "·" }) : null
              ] }, dataset);
            }) })
          ] })
        }
      );
    }).when(isIndirectContinuousScreeningMatch, (indirectMatch) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-md", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      ObjectDetails,
      {
        objectType: indirectMatch.objectType,
        objectId: indirectMatch.objectId,
        currentCase: caseDetail
      }
    ) })).exhaustive() })
  ] }) });
}
function ScreeningMatchList({ screening, caseDetail, isUserAdmin }) {
  const { t: t2 } = useTranslation(["continuousScreening"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-sm order-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-default font-medium", children: t2("continuousScreening:review.matches.title") }),
      isUserAdmin ? /* @__PURE__ */ jsxRuntimeExports.jsx(DismissAlertButton, { screening }) : null
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-sm", children: [...screening.matches].sort(sortScreeningMatchesByTopics).map((screeningMatch) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      MatchCard,
      {
        caseDetail,
        screening,
        screeningMatch
      },
      screeningMatch.id
    )) })
  ] });
}
const DataListGrid = ({ className, children }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("grid grid-cols-[116px_1fr] gap-x-3 gap-y-2", className), children });
};
const SquareTag = ({ children, className }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      className: cn(
        "text-small border border-grey-border rounded-sm h-6 px-xs text-grey-primary inline-flex items-center bg-surface-card",
        className
      ),
      children
    }
  );
};
const useContinuousScreeningConfigurationQuery = (stableId) => {
  const getContinuousScreeningConfiguration = useServerFn(getContinuousScreeningConfigurationFn);
  return useQuery({
    queryKey: ["continuous-screening", "configuration", stableId],
    queryFn: async () => {
      const result = await getContinuousScreeningConfiguration({ data: { stableId } });
      return result.config;
    }
  });
};
const INNER_LIMIT = 2;
function GroupSummaryText({ titles }) {
  const shown = titles.slice(0, INNER_LIMIT);
  const overflow = titles.length - shown.length;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "truncate", children: [
    shown.join(", "),
    overflow > 0 ? `, +${overflow}` : null
  ] });
}
function SearchParameters({ configStableId }) {
  const { t: t2 } = useTranslation(["common"]);
  const { formatItemName } = useDatasetTitle();
  const configQuery = useContinuousScreeningConfigurationQuery(configStableId);
  const datasetsQuery = useListConfigQuery("continuous_monitoring");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "flex flex-col gap-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium", children: t2("continuousScreening:review.search_parameters_subtitle") }),
    M([configQuery, datasetsQuery]).with([{ isError: true }, z.any], [z.any, { isError: true }], () => {
      return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: t2("common:generic_fetch_data_error") });
    }).with([{ isPending: true }, z.any], [z.any, { isPending: true }], () => {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, { className: "size-6" });
    }).with([{ isSuccess: true }, { isSuccess: true }], ([{ data: config }, { data: datasets }]) => {
      if (!config) return null;
      const summaries = buildCategoryDatasetSummaries(config.datasets, datasets.filters, formatItemName);
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(DataListGrid, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-grey-secondary truncate leading-6 capitalize", children: t2("screenings:dataset", { count: config.datasets.length }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-sm min-w-0", children: summaries.map(({ category, items }) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          ExpandableGroupTagLine,
          {
            items: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(DatasetTag, { category }, `${category}-dataset`),
              ...items.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-small text-grey-primary flex items-center", children: [
                index > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "me-sm size-1.5 bg-grey-border rounded-full" }) : null,
                /* @__PURE__ */ jsxRuntimeExports.jsx(GroupSummaryText, { titles: item.titles })
              ] }, item.id))
            ],
            moreButton: (overflow, onExpand) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "span",
              {
                className: "text-small text-grey-secondary flex cursor-pointer items-center",
                onClick: onExpand,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "me-sm size-1.5 bg-grey-border rounded-full" }),
                  "+",
                  overflow
                ]
              }
            )
          }
        ) }, category)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-grey-secondary truncate leading-6", children: t2("screenings:match_threshold") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "truncate", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SquareTag, { children: config.matchThreshold }) })
      ] });
    }).exhaustive()
  ] });
}
const RequestDetail = ({ configStableId, request }) => {
  const { t: t$3 } = useTranslation(["common", "continuousScreening", "screenings"]);
  const queries = t$c(request.searchInput.queries).map(([key, value]) => value);
  if (!queries[0]) return null;
  const queryEntries = t$e(
    queries[0].properties,
    t$8((property) => parseUnknownData(property[0])),
    t$c()
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "flex flex-col gap-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium", children: t$3("continuousScreening:review.request_detail_subtitle") }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DataListGrid, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-grey-placeholder truncate leading-6", children: t$3("continuousScreening:review.entity_type_label") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SquareTag, { className: "", children: queries[0]?.schema }) }),
        queryEntries.map(([key, value]) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: cn("grid col-span-full grid-cols-subgrid", {
              "bg-purple-background-light border border-purple-border p-sm rounded-md": key === "name"
            }),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-grey-secondary truncate", children: t$3(`screenings:entity.property.${key}`) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(FormatData, { data: value, className: cn("truncate", { "text-purple-primary": key === "name" }) })
            ]
          },
          key
        ))
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SearchParameters, { configStableId })
  ] });
};
function RequestSideInfo({ screening, caseDetail }) {
  const { t: t2 } = useTranslation(["continuousScreening"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-md order-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typo, { variant: "title2", children: t2("continuousScreening:review.information_title") }),
      isDirectContinuousScreening(screening) ? /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { children: t2(`continuousScreening:review.search_tag.${screening.triggerType}`) }) : null
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Callout, { variant: "outlined", color: "purple", className: "text-small", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-[1fr_auto] items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Trans,
        {
          i18nKey: `continuousScreening:review.callout.${screening.triggerType}`,
          components: {
            EntityType: /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { color: "grey", children: getEntityType(screening) })
          }
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CaseSourceType, { type: isDirectContinuousScreening(screening) ? "direct" : "indirect" })
    ] }) }),
    M(screening).when(isDirectContinuousScreening, (directScreening) => {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(DirectScreeningRequestDetail, { screening: directScreening, caseDetail });
    }).when(isIndirectContinuousScreening, (indirectScreening) => {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(IndirectScreeningRequestDetail, { screening: indirectScreening });
    }).exhaustive()
  ] });
}
const getEntityType = (screening) => {
  if (isDirectContinuousScreening(screening)) {
    return screening.objectType;
  }
  return screening.opensanctionEntityPayload.schema;
};
const DirectScreeningRequestDetail = ({
  screening,
  caseDetail
}) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(ObjectDetails, { objectType: screening.objectType, objectId: screening.objectId, currentCase: caseDetail }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(RequestDetail, { configStableId: screening.continuousScreeningConfigStableId, request: screening.request })
  ] });
};
const IndirectScreeningRequestDetail = ({ screening }) => {
  const { t: t2 } = useTranslation(["continuousScreening", "screenings"]);
  const [open, setOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-sm p-md bg-surface-card rounded-lg border border-grey-border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center gap-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: screening.opensanctionEntityPayload.caption }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-small text-grey-placeholder me-auto", children: screening.opensanctionEntityPayload.schema }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "primary", mode: "icon", appearance: "link", onClick: () => setOpen(true), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "eye", className: "size-4" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap items-center gap-sm", children: screening.opensanctionEntityPayload.properties["topics"]?.map((topic) => {
        return /* @__PURE__ */ jsxRuntimeExports.jsx(TopicTag, { topic, className: "text-small" }, topic);
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DataListGrid, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-grey-placeholder truncate leading-6", children: t2("screenings:dataset", { count: screening.opensanctionEntityPayload.datasets.length }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "truncate flex flex-row flex-wrap gap-sm", children: screening.opensanctionEntityPayload.datasets.map((dataset) => {
          return /* @__PURE__ */ jsxRuntimeExports.jsx(SquareTag, { children: dataset }, dataset);
        }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(RequestDetail, { configStableId: screening.continuousScreeningConfigStableId, request: screening.request }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Panel.Root, { open, onOpenChange: setOpen, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ScreeningEntityDetailsPanel, { entity: screening.opensanctionEntityPayload }) })
  ] });
};
const ScreeningEntityDetailsPanel = ({ entity }) => {
  const { t: t2 } = useTranslation(["continuousScreening", "screenings"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Panel.Container, { size: "medium", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Panel.Content, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Panel.Header, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-h1", children: t2("continuousScreening:review.entity_details.title") }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-md", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: entity.caption }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-small text-grey-placeholder", children: entity.schema })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-sm", children: entity.properties["topics"]?.map((topic) => {
        return /* @__PURE__ */ jsxRuntimeExports.jsx(TopicTag, { topic, className: "text-small" }, topic);
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        EntityProperties,
        {
          entity,
          before: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold", children: t2("screenings:dataset", { count: entity.datasets.length }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              EntityDatasetsList,
              {
                datasets: entity.datasets,
                useCase: "transaction_monitoring",
                listClassName: "list-disc list-inside"
              }
            ) })
          ] })
        }
      )
    ] })
  ] }) });
};
const CaseSourceType = ({ type }) => {
  const { t: t2 } = useTranslation(["continuousScreening"]);
  const circleClassName = "absolute size-18 p-sm grid place-content-center rounded-full border border-grey-border bg-surface-elevated/40 text-center";
  const selectedClassName = " data-[selected=true]:border-purple-primary data-[selected=true]:bg-purple-primary/70 data-[selected=true]:text-white";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-33 h-18", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        "data-selected": type === "direct",
        className: cn(circleClassName, selectedClassName, "text-small top-0 inset-s-0"),
        children: "Marble"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        "data-selected": type === "indirect",
        className: cn(circleClassName, selectedClassName, "text-tiny top-0 inset-e-0"),
        children: t2("continuousScreening:review.source_type.screening_lists")
      }
    )
  ] });
};
function ContinuousScreeningPage({ caseDetail, inboxes, screening }) {
  const { t: t2 } = useTranslation(["common"]);
  const { currentUser } = useOrganizationDetails();
  const { orgTags } = useOrganizationTags();
  const isUserAdmin = isAdmin(currentUser);
  const revalidate = useLoaderRevalidator();
  const rootRef = reactExports.useRef(null);
  const hasRemainingMatchesToExamine = screening.matches.some((match) => match.status === "pending");
  const getNextUnassignedCase = useServerFn(getNextUnassignedCaseFn);
  const router = useRouter();
  const nextUnassignedCaseHref = router.buildLocation({
    to: "/ressources/cases/next-unassigned/$caseId",
    params: { caseId: fromUUIDtoSUUID(caseDetail.id) }
  }).href;
  const closeCaseMutation = useCloseCaseMutation();
  const reopenCaseMutation = useOpenCaseMutation();
  const handleCloseCase = () => {
    closeCaseMutation.mutateAsync({ caseId: caseDetail.id, comment: "" }).then(() => revalidate()).catch(() => zt.error(t2("common:errors.unknown")));
  };
  const handleReopenCase = () => {
    reopenCaseMutation.mutateAsync({ caseId: caseDetail.id, comment: "" }).then(() => revalidate()).catch(() => zt.error(t2("common:errors.unknown")));
  };
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Page.Main, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Page.Header, { className: "justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(BreadCrumbs, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-sm", children: [
        caseDetail.status !== "closed" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            variant: "primary",
            className: "flex-1 first-letter:capitalize",
            disabled: hasRemainingMatchesToExamine,
            onClick: handleCloseCase,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "save", className: "size-3.5" }),
              t2("cases:case.close")
            ]
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "primary", className: "flex-1 first-letter:capitalize", onClick: handleReopenCase, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "save", className: "size-3.5" }),
          t2("cases:case.reopen")
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: nextUnassignedCaseHref,
            "aria-label": t2("cases:next_unassigned_case"),
            className: cn(CtaV2ClassName({ variant: "secondary" }), "hover:bg-grey-background"),
            onClick: (e) => {
              if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
              e.preventDefault();
              getNextUnassignedCase({ data: { caseId: caseDetail.id } });
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t2("cases:next_unassigned_case") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "arrow-right", className: "size-4" })
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Page.Container, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Page.Content, { className: cn("grid grid-cols-1 lg:grid-cols-[2fr_1fr]", pageLayoutGutter.padding), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-lg not-lg:contents", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-sm order-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between gap-md", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ReviewStatusBadge, { status: screening.status, hitsCount: screening.matches.length }),
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
              ) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: caseDetail.status !== "closed" ? /* @__PURE__ */ jsxRuntimeExports.jsx(EscalateCaseButton, { caseId: caseDetail.id, inboxId: caseDetail.inboxId, className: "ms-auto" }) : null })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "grid grid-cols-[2fr_1fr] gap-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CaseInfo, { caseDetail, currentUser }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              CaseEvents$1,
              {
                events: caseDetail.events,
                currentInboxId: caseDetail.inboxId,
                inboxes,
                includeEventTypes: [
                  "case_created",
                  "inbox_changed",
                  "case_snoozed",
                  "case_unsnoozed",
                  "case_assigned"
                ],
                dueAt: caseDetail.dueAt,
                status: caseDetail.status
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ScreeningMatchList, { screening, isUserAdmin, caseDetail }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          CaseInvestigation,
          {
            root: rootRef,
            caseId: caseDetail.id,
            currentInboxId: caseDetail.inboxId,
            events: caseDetail.events,
            inboxes,
            className: "order-4"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(RequestSideInfo, { caseDetail, screening })
    ] }) })
  ] });
}
function RouteComponent() {
  const {
    caseDetail,
    inboxes,
    screening
  } = Route$k.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ContinuousScreeningPage, { caseDetail, inboxes, screening });
}
export {
  RouteComponent as component
};

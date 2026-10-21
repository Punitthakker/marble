import { Q as jsxRuntimeExports, M as reactExports } from "./server.mjs";
import { I as screeningsI18n } from "./router-KSC-NEr8.mjs";
import { u as useLoaderRevalidator } from "./LoaderRevalidatorContext-BEuG7sHs.mjs";
import { h as enrichMatchFn } from "./screenings-C_YbbaUO.mjs";
import { u as useMutation } from "./useMutation-BOdeDeAR.mjs";
import { u as useServerFn } from "./useServerFn-oRH5Nw97.mjs";
import { u as useCallbackRef } from "./use-callback-ref-Bwe341Yf.mjs";
import { T as Tag, z as zt } from "./create-context-k6HmQ6bB.mjs";
import { u as useTranslation, I as Icon, B as Button, M as MenuCommand, ab as Radio, c as clsx, aq as Card, d as cn } from "./Tabs-CzpyUi7T.mjs";
import { u as t$e, p as t$c, _ as t$8 } from "./services-middleware-nMulUXHZ.mjs";
import { C as Collapsible } from "./Collapsible-CKx8cmdD.mjs";
import { T as TopicsDisplay, E as EntityDatasetsList, M as MatchDetails } from "./FreeformMatchCard-ClTnPmkJ.mjs";
import { j as reviewScreeningMatchPayloadSchema } from "./cases-BQ48izmh.mjs";
import { r as reviewScreeningMatchFn } from "./cases-C-fVFrVL.mjs";
import { h as handleSubmit } from "./form-D2XmDKeG.mjs";
import { u as useStore } from "./useStore-C3gZU5bu.mjs";
import { u as useForm } from "./useForm-qNQ8S9xN.mjs";
import { M as Modal } from "./Modal-CpYmGWjB.mjs";
import { S as Switch } from "./Switch-BV-_0Knl.mjs";
import { T as TextArea } from "./TextArea-p2rzbOeQ.mjs";
import { C as CommentLine } from "./CommentLine-D8LO9NpB.mjs";
import { g as DataFields, p as parseUnknownData } from "./DataField-BczNbAhi.mjs";
import { F as FormatData } from "./FormatData-CcbzFq6m.mjs";
import { d as decisionsI18n } from "./decisions-i18n-Cg4JM_3r.mjs";
import { t } from "./mapToObj-C7dg8HnM.mjs";
const useEnrichMatchMutation = () => {
  const enrichMatch = useServerFn(enrichMatchFn);
  return useMutation({
    mutationKey: ["screening", "enrich-match"],
    mutationFn: async (matchId) => {
      return enrichMatch({ data: { matchId } });
    }
  });
};
function EnrichMatchButton({ matchId }) {
  const { t: t2 } = useTranslation(screeningsI18n);
  const enrichMatchMutation = useEnrichMatchMutation();
  const revalidate = useLoaderRevalidator();
  const handleButtonClick = useCallbackRef(() => {
    enrichMatchMutation.mutateAsync(matchId).then((res) => {
      if (res && "error" in res) {
        zt.error(t2("screenings:error.match_already_enriched"));
        return;
      }
      zt.success(t2("screenings:success.match_enriched"));
      revalidate();
    }).catch(() => {
      zt.error(t2("common:errors.unknown"));
    });
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { type: "button", variant: "secondary", className: "h-8", onClick: handleButtonClick, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "download", className: "size-5" }),
    t2("screenings:enrich_button")
  ] });
}
const useReviewScreeningMatchMutation = () => {
  const reviewScreeningMatch = useServerFn(reviewScreeningMatchFn);
  return useMutation({
    mutationFn: async (payload) => reviewScreeningMatch({ data: payload })
  });
};
function ReviewMatchPopover({
  screening,
  screeningMatch,
  open,
  onOpenChange
}) {
  const { t: t2 } = useTranslation(["common", ...screeningsI18n]);
  const reviewScreeningMatchMutation = useReviewScreeningMatchMutation();
  const revalidate = useLoaderRevalidator();
  const form = useForm({
    defaultValues: {
      matchId: screeningMatch.id,
      status: "no_hit",
      comment: "",
      whitelist: true
    },
    onSubmit: async ({ value }) => {
      try {
        await reviewScreeningMatchMutation.mutateAsync(value);
        onOpenChange(false);
        revalidate();
      } catch {
        zt.error(t2("common:errors.unknown"));
      }
    },
    validators: {
      onSubmit: reviewScreeningMatchPayloadSchema
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
            /* @__PURE__ */ jsxRuntimeExports.jsx(form.Field, { name: "status", children: (field) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
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
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(form.Field, { name: "comment", children: (field) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              TextArea,
              {
                name: field.name,
                value: field.state.value,
                onChange: (e) => field.handleChange(e.target.value),
                placeholder: t2("screenings:review_modal.comment_label"),
                className: "h-[100px]"
              }
            ) }),
            currentStatus === "no_hit" && screening.uniqueCounterpartyIdentifier ? /* @__PURE__ */ jsxRuntimeExports.jsx(form.Field, { name: "whitelist", children: (field) => {
              return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Switch, { name: field.name, checked: field.state.value, onCheckedChange: field.handleChange }),
                  " ",
                  t2("screenings:review_modal.whitelist_label")
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-grey-border bg-grey-background-light flex flex-col gap-sm rounded-sm border p-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: t2("screenings:match.unique_counterparty_identifier") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: screening.uniqueCounterpartyIdentifier })
                ] })
              ] });
            } }) : null
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
}
const statusTagColors = {
  pending: "orange",
  no_hit: "grey",
  confirmed_hit: "red",
  skipped: "grey"
};
function StatusTag({ status, disabled, onClick }) {
  const { t: t2 } = useTranslation(screeningsI18n);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Tag,
    {
      color: statusTagColors[status],
      onClick: () => !disabled && onClick?.(),
      className: clsx("inline-flex h-8 gap-xs", {
        "cursor-pointer": !!onClick && !disabled
      }),
      children: [
        t2(`screenings:match.status.${status}`),
        !disabled ? /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "caret-down", className: "size-5" }) : null
      ]
    }
  );
}
const AiSuggestionReason = ({ reason }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "border-l-purple-primary text-grey-primary text-s border-l-2 pl-sm whitespace-pre-wrap", children: reason });
};
const MatchCard = ({
  screening,
  match,
  readonly,
  unreviewable,
  defaultOpen,
  hideEnrich,
  hideReview,
  aiSuggestion
}) => {
  const { t: t2 } = useTranslation(screeningsI18n);
  const [isPopoverOpen, setIsPopoverOpen] = reactExports.useState(false);
  const entity = match.payload;
  const entitySchema = entity.schema.toLowerCase();
  const canReview = match.status === "pending" && !readonly && !unreviewable;
  const hasAiSuggestion = aiSuggestion && match.status === "pending";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Collapsible.Container, { defaultOpen, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Collapsible.Title, { size: "small", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex grow items-center justify-between gap-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-s font-medium", children: entity.caption }),
          hasAiSuggestion ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Tag, { color: "grey", children: [
            t2(`screenings:match.ai_suggestion.${aiSuggestion.confidence}`),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "wand", className: "size-4" })
          ] }) : null,
          /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { color: "grey", children: t2("screenings:match.similarity", {
            percent: Math.round(entity.score * 100)
          }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-sm", onClick: (e) => e.stopPropagation(), children: [
          !hideEnrich && !match.enriched ? /* @__PURE__ */ jsxRuntimeExports.jsx(EnrichMatchButton, { matchId: match.id }) : null,
          !hideReview ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex h-8 shrink-0 text-nowrap", children: unreviewable ? /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { color: "grey", children: t2("screenings:match.not_reviewable") }) : canReview ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            ReviewMatchPopover,
            {
              screening,
              screeningMatch: match,
              open: isPopoverOpen,
              onOpenChange: setIsPopoverOpen
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx(StatusTag, { status: match.status, disabled: true }) }) : null
        ] })
      ] }),
      match.comments.map((comment) => {
        return /* @__PURE__ */ jsxRuntimeExports.jsx(CommentLine, { comment }, comment.id);
      })
    ] }) }),
    hasAiSuggestion && aiSuggestion.reason ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-md pb-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AiSuggestionReason, { reason: aiSuggestion.reason }) }) : null,
    entity.properties["topics"]?.length ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-md pb-md", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TopicsDisplay, { entity, containerClassName: "flex flex-wrap gap-xs" }) }) : null,
    /* @__PURE__ */ jsxRuntimeExports.jsx(Collapsible.Content, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-grey-background-light border-grey-border flex flex-col gap-sm rounded-lg border p-sm", children: [
      entitySchema === "person" && entity.datasets?.length ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-[146px_1fr] gap-md", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs opacity-50", children: t2("screenings:match.datasets.title") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          EntityDatasetsList,
          {
            datasets: entity.datasets,
            useCase: "transaction_monitoring",
            listClassName: "list-disc ps-md",
            itemClassName: "break-all text-xs"
          }
        ) })
      ] }) : null,
      /* @__PURE__ */ jsxRuntimeExports.jsx(MatchDetails, { entity })
    ] }) })
  ] });
};
function useParsedTriggerObject(triggerObject) {
  return reactExports.useMemo(() => t$e(triggerObject, t$8(parseUnknownData), t$c()), [triggerObject]);
}
function DecisionDetailTriggerObject({
  table,
  triggerObject
}) {
  const { t: t2 } = useTranslation(decisionsI18n);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Collapsible.Container, { className: "bg-surface-card", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Collapsible.Title, { children: t2("decisions:trigger_object.type") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Collapsible.Content, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DataFields, { table, object: { data: triggerObject }, options: { mapHeight: 200 } }) })
  ] });
}
function CaseDetailTriggerObject({
  dataModel,
  triggerObject,
  triggerObjectType,
  className,
  onLinkClicked
}) {
  const parsedTriggerObject = useParsedTriggerObject(triggerObject);
  const dataModelTable = dataModel.find((table) => table.name === triggerObjectType);
  const links = t$e(
    dataModelTable?.linksToSingle ?? [],
    t((link) => {
      return [link.childFieldName, link.parentTableName];
    })
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: dataModelTable?.name ? /* @__PURE__ */ jsxRuntimeExports.jsx(
    DataFields,
    {
      table: dataModelTable.name,
      object: { data: triggerObject },
      options: { hideLinks: true, withOptionalHidden: true },
      className
    }
  ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("grid grid-cols-[max-content_1fr] gap-md ", className), children: parsedTriggerObject.map(([property, data]) => {
    const fieldType = dataModelTable?.fields?.find((f) => f.name === property)?.dataType;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(reactExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: property }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex items-center gap-sm", children: links[property] && data.value ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          className: "text-purple-primary group flex items-center gap-xs text-left",
          onClick: () => onLinkClicked(links[property], data.value),
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(FormatData, { type: fieldType, data, mapHeight: 200 })
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsx(FormatData, { type: fieldType, data, mapHeight: 200 }) })
    ] }, property);
  }) }) });
}
export {
  CaseDetailTriggerObject as C,
  DecisionDetailTriggerObject as D,
  MatchCard as M
};

import { Q as jsxRuntimeExports, M as reactExports } from "./server.mjs";
import { an as Panel, d as cn, u as useTranslation, B as Button, I as Icon, a as useFormatDateTime, T as Trans, aF as useVirtualTable, aD as Table } from "./Tabs-CzpyUi7T.mjs";
import { u as t$e, v as n$7, o as t$9, ct as isScreeningError, cu as t$1, p as t$c } from "./services-middleware-nMulUXHZ.mjs";
import { af as Route$F, P as Page, B as BreadCrumbs, p as pageLayoutGutter, L as Link, C as CaseStatusBadgeV2, ae as ScreeningStatusTag, T as Tooltip } from "./router-KSC-NEr8.mjs";
import { a as Callout } from "./Callout-B0OuRL3q.mjs";
import { C as Collapsible } from "./Collapsible-CKx8cmdD.mjs";
import { S as ScreeningErrors, g as getPivotDisplayValue } from "./ScreeningErrors-B_SEPr63.mjs";
import { p as pivotValuesDocHref } from "./documentation-href-DY9fs71n.mjs";
import { D as DateBirthdateComponent, m as StringMainComponent, d as DateDatetimeComponent, g as DataFields } from "./DataField-BczNbAhi.mjs";
import { T as Tag } from "./create-context-k6HmQ6bB.mjs";
import { E as ExternalLink, l as linkClasses } from "./ExternalLink-BlVgwkVd.mjs";
import { c as createColumnHelper } from "./columnHelper-dCJ-kjEm.mjs";
import { d as decisionsI18n } from "./decisions-i18n-Cg4JM_3r.mjs";
import { a as ScorePanel, D as DecisionRightPanel } from "./Score-BsVZOUYI.mjs";
import { D as DatatypeIcon, a as DatatypeToPrimitiveType } from "./DatatypeOption-CVRIpFKg.mjs";
import { D as DecisionDetailTriggerObject, M as MatchCard } from "./TriggerObjectDetail-7kaKKuXk.mjs";
import { t } from "./flatMap-CdA7bREZ.mjs";
import { f as fromUUIDtoSUUID } from "./short-uuid-fTZYJj_k.mjs";
import { R as RulesDetail } from "./RulesDetail-OXyNaILQ.mjs";
import { a as OutcomePanel } from "./OutcomeTag-DYQZ2msd.mjs";
import { e } from "./isNonNullish-DgEqPJBU.mjs";
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
import "./index-22HmyALM.mjs";
import "./Spinner-DmLieYoS.mjs";
import "./data-9UajV2HK.mjs";
import "./data-BXamdbTM.mjs";
import "./useQuery-Bb0AEcpf.mjs";
import "./useBaseQuery-BqF2iw7Y.mjs";
import "./useServerFn-oRH5Nw97.mjs";
import "./tryCatch-CFf1qt2b.mjs";
import "./Switch-BV-_0Knl.mjs";
import "./data-model-Dfj0lN5a.mjs";
import "./mapToObj-C7dg8HnM.mjs";
import "./omit-qKVZGDJg.mjs";
import "./hasAtLeast-BmuNoqMd.mjs";
import "./FormErrorOrDescription-BncG6ljR.mjs";
import "./cases-BQ48izmh.mjs";
import "./cases-C-fVFrVL.mjs";
import "./useMutation-BOdeDeAR.mjs";
import "./get-inboxes-BXwOxAig.mjs";
import "./form-D2XmDKeG.mjs";
import "./array-BFSjnO9c.mjs";
import "./useForm-qNQ8S9xN.mjs";
import "./Select-Dg3p9vJ0.mjs";
import "./isNullish-B8pc8Ntu.mjs";
import "./LoaderRevalidatorContext-BEuG7sHs.mjs";
import "./screenings-C_YbbaUO.mjs";
import "./use-callback-ref-Bwe341Yf.mjs";
import "./FreeformMatchCard-ClTnPmkJ.mjs";
import "./dataset-utils-CXMfULsv.mjs";
import "./screening-entity-cwm_Y847.mjs";
import "./lists-config-DL0Z5yQK.mjs";
import "./ExpandableGroupTagLine-MgT0uQKb.mjs";
import "./Popover-Cp1XdSV2.mjs";
import "./Modal-CpYmGWjB.mjs";
import "./useStore-C3gZU5bu.mjs";
import "./TextArea-p2rzbOeQ.mjs";
import "./CommentLine-D8LO9NpB.mjs";
import "./organization-users-CEJGnALa.mjs";
import "./user-Dgp6KqPL.mjs";
import "./join-Ce2xPJwm.mjs";
import "./Avatar-DDGL3Siw.mjs";
import "./FormatData-CcbzFq6m.mjs";
import "./maplibre-gl-BcA3NZzV.mjs";
import "./Paper-HCUf48Ym.mjs";
import "./index-CjCfUhgh.mjs";
import "./helpers-D-Bggz_h.mjs";
import "./isArray-gJc74O_I.mjs";
import "./display-TKj7AN5a.mjs";
import "./Logo-3vzUxSrh.mjs";
import "./scenario-validation-error-messages-DGyZ9TEq.mjs";
import "./Nudge-Cmzwt2Be.mjs";
import "./create-navigation-option-CCfvMbYU.mjs";
import "./Stepper-D5HOcTsM.mjs";
import "./Checkbox-C8nszDsh.mjs";
import "./organization-detail-BGvqBGx1.mjs";
import "./Highlight-NVjBw0RI.mjs";
import "./match-sorter.esm-BRMYSlZQ.mjs";
function DecisionDetail({ decision }) {
  const { t: t2 } = useTranslation(decisionsI18n);
  const formatDateTime = useFormatDateTime();
  const { case: caseDetail, createdAt, scenario, triggerObjectType } = decision;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Collapsible.Container, { className: "bg-surface-card", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Collapsible.Title, { children: t2("decisions:decision_detail.title") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Collapsible.Content, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid auto-rows-fr grid-cols-[max-content_1fr] items-center gap-x-10 gap-y-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DetailLabel, { children: t2("decisions:created_at") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("time", { dateTime: createdAt, children: formatDateTime(createdAt, {
        dateStyle: "short",
        timeStyle: "short"
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DetailLabel, { children: t2("decisions:scenario.name") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: "/detection/scenarios/$scenarioId",
          params: { scenarioId: fromUUIDtoSUUID(scenario.id) },
          className: "hover:text-purple-hover focus:text-purple-hover text-purple-primary font-semibold hover:underline focus:underline",
          children: scenario.name
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DetailLabel, { children: t2("decisions:scenario.version") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: "/detection/scenarios/$scenarioId/i/$iterationId",
          params: {
            scenarioId: fromUUIDtoSUUID(scenario.id),
            iterationId: fromUUIDtoSUUID(scenario.scenarioIterationId)
          },
          className: "hover:text-purple-hover focus:text-purple-hover text-purple-primary font-semibold hover:underline focus:underline",
          children: `V${scenario.version}`
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DetailLabel, { children: t2("decisions:object_type") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: triggerObjectType }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DetailLabel, { children: t2("decisions:case") }),
      caseDetail ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex w-fit flex-row items-center justify-center gap-xs align-baseline", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CaseStatusBadgeV2, { status: caseDetail.status, variant: "semi-full" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/cases/$caseId",
            params: { caseId: fromUUIDtoSUUID(caseDetail.id) },
            className: "hover:text-purple-hover focus:text-purple-hover text-purple-primary font-semibold hover:underline focus:underline",
            children: caseDetail.name
          }
        )
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "-" })
    ] }) })
  ] });
}
const DetailLabel = ({ children }) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold first-letter:capitalize", children });
function PivotType({ type }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { size: "small", color: type === "field" ? "grey" : "purple", className: "w-fit", children: type });
}
function PivotDetail({ pivotValues, existingPivotDefinition }) {
  const { t: t2 } = useTranslation(decisionsI18n);
  let content;
  if (pivotValues.length > 0) {
    content = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-md", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Callout, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "whitespace-pre text-balance", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Trans,
        {
          t: t2,
          i18nKey: "decisions:pivot_detail.description",
          components: {
            DocLink: /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { href: pivotValuesDocHref })
          }
        }
      ) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(PivotList, { pivotValues })
    ] });
  } else if (existingPivotDefinition) {
    content = /* @__PURE__ */ jsxRuntimeExports.jsx(Callout, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "whitespace-pre text-balance", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Trans,
      {
        t: t2,
        i18nKey: "decisions:pivot_detail.no_pivot_description",
        components: {
          DocLink: /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { href: pivotValuesDocHref })
        }
      }
    ) }) });
  } else {
    content = /* @__PURE__ */ jsxRuntimeExports.jsx(Callout, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "whitespace-pre text-balance", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Trans,
      {
        t: t2,
        i18nKey: "decisions:pivot_detail.missing_pivot_definition",
        components: {
          DataModelLink: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/data/list", className: linkClasses }),
          DocLink: /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { href: pivotValuesDocHref })
        }
      }
    ) }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Collapsible.Container, { className: "bg-surface-card", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Collapsible.Title, { children: t2("decisions:pivot_detail.title") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Collapsible.Content, { children: content })
  ] });
}
function PivotList({ pivotValues }) {
  const { t: t2 } = useTranslation(decisionsI18n);
  const columnHelper = reactExports.useMemo(
    () => createColumnHelper(),
    []
  );
  const columns = reactExports.useMemo(
    () => [
      columnHelper.accessor((row) => row.pivot.type, {
        id: "type",
        header: t2("decisions:pivot_detail.type"),
        size: 50,
        cell: ({ getValue }) => {
          const type = getValue();
          return /* @__PURE__ */ jsxRuntimeExports.jsx(PivotType, { ...{ type } });
        }
      }),
      columnHelper.accessor((row) => getPivotDisplayValue(row.pivot), {
        id: "definition",
        header: t2("decisions:pivot_detail.definition"),
        size: 160,
        cell: ({ getValue }) => {
          const definition = getValue();
          return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: definition });
        }
      }),
      columnHelper.accessor(
        (row) => ({
          value: row.value,
          table: row.pivot.type === "field" ? row.pivot.baseTable : row.pivot.pivotTable,
          object: row.object
        }),
        {
          id: "filter_decisions",
          header: t2("decisions:pivot_detail.pivot_value"),
          size: 240,
          cell: ({ getValue }) => /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip.Default, { content: t2("decisions:pivot_detail.pivot_value.tooltip"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/detection/decisions", search: { pivotValue: getValue().value }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(PivotDetails, { value: getValue().value, table: getValue().table, object: getValue().object }) }) })
        }
      )
    ],
    [t2, columnHelper]
  );
  const { table, getBodyProps, rows, getContainerProps } = useVirtualTable({
    data: pivotValues,
    columns,
    columnResizeMode: "onChange",
    enableSorting: false
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Table.Container, { ...getContainerProps(), className: "bg-surface-card", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Table.Header, { headerGroups: table.getHeaderGroups() }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Table.Body, { ...getBodyProps(), children: rows.map((row) => {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Table.Row, { row }, row.id);
    }) })
  ] });
}
function PivotDetails({ value, table, object }) {
  if (!object) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hover:text-purple-hover focus:text-purple-hover text-purple-primary relative font-semibold hover:underline focus:underline", children: value });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    DataFields,
    {
      table,
      object,
      preset: "essentials",
      options: { withId: true },
      className: "p-sm my-sm bg-surface-card rounded-lg border-grey-border border cursor-pointer"
    }
  );
}
function ScreeningDetail({ screening, table }) {
  const hasError = isScreeningError(screening);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Collapsible.Container, { className: "bg-surface-card", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Collapsible.Title, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex grow items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: screening.config.name }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        ScreeningStatusTag,
        {
          status: screening.status,
          pendingHitCount: screening.matches.filter((m) => m.status === "pending").length,
          className: "h-8"
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Collapsible.Content, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-md", children: [
      hasError ? /* @__PURE__ */ jsxRuntimeExports.jsx(ScreeningErrors, { screening }) : null,
      screening.request ? /* @__PURE__ */ jsxRuntimeExports.jsx(SearchInput, { request: screening.request, fields: table?.fields }) : null,
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-2", children: screening.matches.map((match) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        MatchCard,
        {
          readonly: true,
          screening,
          unreviewable: hasError || screening.partial,
          match
        },
        match.id
      )) })
    ] }) })
  ] });
}
function toSearchInputItem(value, field) {
  return {
    value,
    type: field?.dataType ?? "String",
    semanticType: field?.semanticType ?? "text"
  };
}
const SearchInput = ({
  request,
  fields
}) => {
  const { t: t$42 } = useTranslation(decisionsI18n);
  const searchInputList = t$e(
    t$1(request.queries),
    t(
      (query) => t$e(
        t$c(query.properties),
        t(([ftmProperty, values]) => {
          const field = fields?.find((f) => f.ftmProperty === ftmProperty);
          return values.map((value) => toSearchInputItem(value, field));
        })
      )
    )
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-[auto_1fr] gap-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid items-center h-[50px]", children: t$42("screenings:search_input") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-w-0 flex-wrap gap-sm", children: searchInputList.map(({ value, type, semanticType }, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "border-grey-border flex min-w-0 items-center gap-sm break-words rounded-sm border p-sm",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DatatypeIcon, { dataType: DatatypeToPrimitiveType(type) }),
          semanticType === "date_of_birth" ? /* @__PURE__ */ jsxRuntimeExports.jsx(DateBirthdateComponent, { value, compact: true }) : semanticType === "name" ? /* @__PURE__ */ jsxRuntimeExports.jsx(StringMainComponent, { value }) : type === "Timestamp" ? /* @__PURE__ */ jsxRuntimeExports.jsx(DateDatetimeComponent, { value }) : value
        ]
      },
      i
    )) })
  ] });
};
function DecisionPage() {
  const {
    decision,
    pivots,
    pivotObjects,
    scenarioRules,
    screening,
    isIterationArchived,
    dataModel
  } = Route$F.useLoaderData();
  const pivotValues = t$e(decision.pivotValues, t$9(({
    id,
    value
  }) => {
    if (!id || !value) return null;
    const pivot = pivots.find((p) => p.id === id);
    if (!pivot) return null;
    const pivotObject = pivotObjects.find((o) => o.pivotId === id && o.value === value);
    return {
      pivot,
      value,
      object: pivotObject?.object ?? null
    };
  }), n$7(e));
  const table = dataModel.find((table2) => table2.name == decision.triggerObjectType);
  const existingPivotDefinition = pivots.some((pivot) => pivot.baseTable === decision.triggerObjectType);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Panel.Root, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Page.Main, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Page.Header, { className: "justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(BreadCrumbs, {}),
        !decision.case ? /* @__PURE__ */ jsxRuntimeExports.jsx(AddToCase, {}) : null
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Page.Container, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Page.Content, { className: cn("grid grid-areas-[aside,main] xl:grid-areas-[main_aside] grid-cols-1 xl:grid-cols-[3fr_1fr]", pageLayoutGutter.gap), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("flex flex-col area-[main]", pageLayoutGutter.gap), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DecisionDetail, { decision }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(PivotDetail, { pivotValues, existingPivotDefinition }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(RulesDetail, { scenarioId: decision.scenario.id, ruleExecutions: decision.rules, rules: scenarioRules, isIterationArchived }),
          screening.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(ScreeningDetail, { screening: s, table }, s.id))
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("flex flex-col shrink-0 area-[aside]", pageLayoutGutter.gap), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("flex flex-row", pageLayoutGutter.gap), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ScorePanel, { score: decision.score }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(OutcomePanel, { outcome: decision.outcome })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(DecisionDetailTriggerObject, { table: decision.triggerObjectType, triggerObject: decision.triggerObject })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DecisionRightPanel, { decisionIds: [decision.id] })
  ] });
}
function AddToCase() {
  const {
    t: t2
  } = useTranslation(decisionsI18n);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Panel.Trigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "primary", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "plus", className: "size-5" }),
    t2("decisions:add_to_case")
  ] }) });
}
export {
  DecisionPage as component
};

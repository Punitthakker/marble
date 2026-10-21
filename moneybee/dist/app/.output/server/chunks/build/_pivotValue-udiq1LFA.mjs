import { Q as jsxRuntimeExports, M as reactExports } from "./server.mjs";
import { D as DataModelExplorerProvider, a as DataExplorerPanel, C as ClientDocumentsPopover } from "./DataExplorerPanel-CJ4TB_XJ.mjs";
import { C as ClientObjectTagList } from "./get-score-latest-3W-Su_jV.mjs";
import { M as MainLinksGraph, m as mainLinksGraphMinHeight, D as DocumentsList } from "./DocumentsList-3HHE9UB7.mjs";
import { g as DataFields } from "./DataField-BczNbAhi.mjs";
import { w as getPivotObjectKey, a2 as M } from "./services-middleware-nMulUXHZ.mjs";
import { u as useGetAnnotationsQuery } from "./get-annotations-DHuYMH09.mjs";
import { a as useDataModelFeatureAccess } from "./data-model-Dfj0lN5a.mjs";
import { a2 as getGraphExplorationDisplay } from "./feature-access-BSdB6UiC.mjs";
import { u as useOrganizationDetails } from "./organization-detail-BGvqBGx1.mjs";
import { aU as Route$b, L as Link, v as clientDetailLinkParams, p as pageLayoutGutter, C as CaseStatusBadgeV2 } from "./router-KSC-NEr8.mjs";
import { u as useQueryClient } from "./query-BmG5BEas.mjs";
import { u as useTranslation, I as Icon, W as CtaV2ClassName, aq as Card, S as Typo, d as cn, B as Button, a as useFormatDateTime } from "./Tabs-CzpyUi7T.mjs";
import { P as Popover } from "./Popover-Cp1XdSV2.mjs";
import { T as Tag } from "./create-context-k6HmQ6bB.mjs";
import { G as GraphAccessPlaceholder } from "./GraphAccessPlaceholder-DQkS9P6P.mjs";
import { a as ClientCommentsListCard } from "./ClientComments-DuL5CZgm.mjs";
import { L as getPivotRelatedCasesFn } from "./cases-C-fVFrVL.mjs";
import { u as useQuery } from "./useQuery-Bb0AEcpf.mjs";
import { u as useServerFn } from "./useServerFn-oRH5Nw97.mjs";
import { f as fromUUIDtoSUUID } from "./short-uuid-fTZYJj_k.mjs";
import { i as isGraphEligiblePivot } from "./graph-pivots-Bblee9BN.mjs";
import { C as CommentContext } from "./comment-context-BW3odHTX.mjs";
import { U as UserScoreBadge, N as NavigationOptions } from "./UserScoreBadge-BSdB4Yr6.mjs";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "./use-callback-ref-DoQNLci-.mjs";
import "./data-9UajV2HK.mjs";
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
import "./data-BXamdbTM.mjs";
import "./useInfiniteQuery-B6vcG-7y.mjs";
import "./useBaseQuery-BqF2iw7Y.mjs";
import "./columnHelper-dCJ-kjEm.mjs";
import "./FormatData-CcbzFq6m.mjs";
import "./ThemeContext-DjRULCu0.mjs";
import "./config--RFGchua.mjs";
import "./maplibre-gl-BcA3NZzV.mjs";
import "./Modal-CpYmGWjB.mjs";
import "./ExternalLink-BlVgwkVd.mjs";
import "./ClientCommentForm-CxGdh-J3.mjs";
import "./LoaderRevalidatorContext-BEuG7sHs.mjs";
import "./useMutation-BOdeDeAR.mjs";
import "./Time-CKTfEtti.mjs";
import "./annotations-Dbgxm4DN.mjs";
import "./form-D2XmDKeG.mjs";
import "./array-BFSjnO9c.mjs";
import "./useForm-qNQ8S9xN.mjs";
import "./DownloadFilesService-B8XCR5JY.mjs";
import "./download-file-C533i5xX.mjs";
import "./useFormDropzone-DXcqE7tO.mjs";
import "./index-CBe2FUD4.mjs";
import "./TagPreview-DaOqtPxx.mjs";
import "./organization-object-tags-BKGicIcs.mjs";
import "./isDeepEqual-DU8kSW6f.mjs";
import "./organization-users-CEJGnALa.mjs";
import "./Avatar-DDGL3Siw.mjs";
import "./TagList-5cEiXNQD.mjs";
import "./use-debounced-callback-ref-CXwcVZ7S.mjs";
import "./helpers-D-Bggz_h.mjs";
import "./join-Ce2xPJwm.mjs";
import "./isNullish-B8pc8Ntu.mjs";
import "./isArray-gJc74O_I.mjs";
import "./Spinner-DmLieYoS.mjs";
import "./list-ruleset-versions-B6atqN3Q.mjs";
import "./Select-Dg3p9vJ0.mjs";
import "./display-TKj7AN5a.mjs";
import "./scoring-BqfH8vO5.mjs";
import "./user-scoring-BtNQ1U6a.mjs";
import "./get-custom-lists-DJnJIZcp.mjs";
import "./lists-CwYzskHN.mjs";
import "./lists-ZFx0HGFs.mjs";
import "./use-laid-out-graph-DCX5NTEx.mjs";
import "./graph-CqpSMa0d.mjs";
import "./get-scoring-settings-CNgnpjXy.mjs";
import "./graph-BtfBHESi.mjs";
import "./Checkbox-C8nszDsh.mjs";
import "./ExpandableGroupTagLine-MgT0uQKb.mjs";
import "./string-vnnIQF3x.mjs";
import "./value-U5z8H4N0.mjs";
import "./generate-graph-DPfNXSLe.mjs";
import "./user-Dgp6KqPL.mjs";
import "./constructNow-C55voJY_.mjs";
import "./endOfDay-D4VMTcyc.mjs";
import "./formatDistanceStrict-DEEeAR-Y.mjs";
import "./tryCatch-CFf1qt2b.mjs";
import "./isNonNullish-DgEqPJBU.mjs";
import "./Switch-BV-_0Knl.mjs";
import "./mapToObj-C7dg8HnM.mjs";
import "./omit-qKVZGDJg.mjs";
import "./hasAtLeast-BmuNoqMd.mjs";
import "node:crypto";
import "./security-headers.server-BdP3HrPp.mjs";
import "./i18n-instance-store-UssbGYOM.mjs";
import "./data-model-feature-access-D7XsjRz2.mjs";
import "./datetime-insWKNBy.mjs";
import "./case-detail-middleware-iDVIrW-c.mjs";
import "./inboxes-D556s0BB.mjs";
import "./input-validation-D4mgQsey.mjs";
import "./async-C3pYACua.mjs";
import "./coerce-UidCu_Sb.mjs";
import "./files-fO9wUXBf.mjs";
import "./decisions--eKWwSYj.mjs";
import "./unique-cniTya2T.mjs";
import "./scenarios-C5R2TE8p.mjs";
import "./sharpstate.es-C0BW2AZi.mjs";
import "./index-22HmyALM.mjs";
import "./Markdown-Djw5Zezo.mjs";
import "./Code-NcjS_4uC.mjs";
import "./cases-BQ48izmh.mjs";
import "./FormErrorOrDescription-BncG6ljR.mjs";
import "./create-navigation-option-CCfvMbYU.mjs";
import "./uniqueBy-D4I5G6eo.mjs";
import "./flatMap-CdA7bREZ.mjs";
function usePivotRelatedCasesQuery(pivotValue) {
  const getPivotRelatedCases = useServerFn(getPivotRelatedCasesFn);
  return useQuery({
    queryKey: ["pivot", "relatedCases", pivotValue],
    queryFn: async () => {
      return getPivotRelatedCases({ data: { pivotValue } });
    }
  });
}
function ClientRelatedAlertCasesCard({ caseId, pivotValue }) {
  const { t } = useTranslation(["common", "cases"]);
  const casesQuery = usePivotRelatedCasesQuery(pivotValue);
  const formatDateTime = useFormatDateTime();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: M(casesQuery).with({ isError: true }, () => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-red-disabled bg-red-background text-red-primary mt-md rounded-sm border", children: t("common:global_error") });
  }).with({ isPending: true }, () => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: t("common:loading") });
  }).otherwise((query) => {
    const cases = query.data.cases.filter((caseObj) => caseObj.id !== caseId);
    if (cases.length === 0) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: t("cases:manager.related_cases.no_cases") });
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid w-full grid-cols-[minmax(8rem,_auto)_1fr_auto] gap-sm", children: cases.map((caseObj, idx) => {
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-subgrid col-span-full items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-grey-secondary", children: formatDateTime(caseObj.createdAt, { dateStyle: "short" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: caseObj.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CaseStatusBadgeV2, { status: caseObj.status, variant: "icon-only" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/cases/s/$caseId",
            params: { caseId: fromUUIDtoSUUID(caseObj.id) },
            className: CtaV2ClassName({ variant: "primary", appearance: "stroked" }),
            children: t("common:open")
          }
        )
      ] }, caseObj.id);
    }) });
  }) });
}
const clientColumnMinHeight = "min-h-[calc(100dvh-12rem)]";
function CaseManagerClientsPage({
  caseDetail,
  dataModel,
  pivotObject,
  ingestedInfo,
  client360Tables,
  userScoringAccess
}) {
  const { t } = useTranslation(["common", "cases"]);
  const queryClient = useQueryClient();
  const { currentUser } = useOrganizationDetails();
  const dmfa = useDataModelFeatureAccess();
  const graphDisplay = getGraphExplorationDisplay(dmfa);
  const { set } = CommentContext.useValue();
  const annotationsQuery = useGetAnnotationsQuery(pivotObject.pivotObjectName, pivotObject.pivotObjectId, true);
  const [isEditingDocuments, setIsEditingDocuments] = reactExports.useState(false);
  const [explorationOpen, setExplorationOpen] = reactExports.useState(false);
  const currentTable = dataModel.find((t2) => t2.name === pivotObject.pivotObjectName);
  const metadata = client360Tables.find((t2) => t2.name === pivotObject.pivotObjectName);
  const entityName = metadata?.alias || metadata?.name || pivotObject.pivotObjectName;
  const clientName = metadata ? pivotObject.pivotObjectData.data[metadata.caption_field] : "";
  const showMainLinks = graphDisplay !== "hidden" && isGraphEligiblePivot(pivotObject, dataModel);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("grid grid-cols-1 lg:grid-cols-2", pageLayoutGutter.gap), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("flex flex-col gap-sm", showMainLinks && ingestedInfo && clientColumnMinHeight), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: clientName }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-sm", children: [
          ingestedInfo ? /* @__PURE__ */ jsxRuntimeExports.jsx(UserScoreBadge, { userScoringAccess, ...ingestedInfo }) : null,
          metadata && ingestedInfo ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/client-detail/$objectType/$objectId",
              params: clientDetailLinkParams(ingestedInfo.objectType, ingestedInfo.objectId),
              className: CtaV2ClassName({ appearance: "link", variant: "primary" }),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "eye", className: "size-4" }),
                t("common:see_all")
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
            caseId: caseDetail.id,
            tableName: pivotObject.pivotObjectName,
            objectId: pivotObject.pivotObjectId,
            annotations: annotationsQuery.data?.annotations.tags,
            placeholder: t("cases:manager.principal.add_tag_placeholder")
          }
        ) : null
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "flex flex-col gap-sm text-small", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          DataFields,
          {
            object: pivotObject.pivotObjectData,
            table: pivotObject.pivotObjectName,
            options: { layout: "2-columns" }
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
      ] }) }),
      showMainLinks && ingestedInfo ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("flex flex-1 flex-col gap-sm", mainLinksGraphMinHeight), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex shrink-0 justify-between items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Typo, { variant: "title2", children: t("cases:manager.clients.main_links_title") }),
          graphDisplay === "graph" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              from: "/cases/s/$caseId/clients/$pivotValue",
              to: "/cases/s/$caseId/links/$pivotValue",
              params: { pivotValue: getPivotObjectKey(pivotObject) },
              className: CtaV2ClassName({ appearance: "link", variant: "primary" }),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "eye", className: "size-4" }),
                t("common:see_all")
              ]
            }
          ) : null
        ] }),
        graphDisplay === "graph" ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          MainLinksGraph,
          {
            objectType: ingestedInfo.objectType,
            objectId: ingestedInfo.objectId,
            dataModel
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsx(GraphAccessPlaceholder, {})
      ] }) : null
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-lg", children: [
      ingestedInfo ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: t("cases:manager.clients.last_comments_title") }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "secondary", onClick: () => set(ingestedInfo), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "plus", className: "size-4" }),
            t("common:add")
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ClientCommentsListCard, { annotationsQuery })
      ] }) : null,
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium", children: t("cases:case_detail.pivot_panel.case_history") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ClientRelatedAlertCasesCard, { pivotValue: pivotObject.pivotValue, caseId: caseDetail.id })
      ] }),
      ingestedInfo ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium", children: t("client360:client_detail.documents.title") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Popover.Root, { open: isEditingDocuments, onOpenChange: setIsEditingDocuments, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Popover.Trigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "secondary", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "plus", className: "size-4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("common:add") })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Popover.Content, { side: "bottom", align: "end", sideOffset: 4, collisionPadding: 10, className: "w-[340px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              ClientDocumentsPopover,
              {
                tableName: ingestedInfo.objectType,
                objectId: ingestedInfo.objectId,
                onAnnotateSuccess: () => {
                  setIsEditingDocuments(false);
                  queryClient.invalidateQueries({
                    queryKey: ["annotations", ingestedInfo.objectType, ingestedInfo.objectId]
                  });
                }
              }
            ) })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "@container", children: /* @__PURE__ */ jsxRuntimeExports.jsx(DocumentsList, { objectType: ingestedInfo.objectType, objectId: ingestedInfo.objectId }) })
      ] }) : null
    ] })
  ] });
}
function RouteComponent() {
  const {
    caseDetail,
    dataModel,
    pivotObject,
    client360Tables,
    userScoringAccess
  } = Route$b.useRouteContext();
  const {
    objectId,
    objectType
  } = Route$b.useLoaderData();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(CaseManagerClientsPage, { ingestedInfo: pivotObject.isIngested ? {
    objectId,
    objectType
  } : null, caseDetail, dataModel, pivotObject, client360Tables, userScoringAccess });
}
export {
  RouteComponent as component
};

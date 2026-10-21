import { Q as jsxRuntimeExports } from "./server.mjs";
import { G as GraphSessionProvider, u as useGraphSession } from "./GraphSessionContext-DR4cbEeZ.mjs";
import { G as GraphAccessPlaceholder } from "./GraphAccessPlaceholder-DQkS9P6P.mjs";
import { S as SessionGraphCanvas } from "./SessionGraphCanvas-YTWrm3Qp.mjs";
import { a as useDataModelFeatureAccess } from "./data-model-Dfj0lN5a.mjs";
import { a2 as getGraphExplorationDisplay } from "./feature-access-BSdB6UiC.mjs";
import { aq as Card, d as cn } from "./Tabs-CzpyUi7T.mjs";
import { aV as Route$9 } from "./router-KSC-NEr8.mjs";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "./graph-CqpSMa0d.mjs";
import "./get-scoring-settings-CNgnpjXy.mjs";
import "./scoring-BqfH8vO5.mjs";
import "./query-BmG5BEas.mjs";
import "./auth-middleware-eNRVfU3l.mjs";
import "./services-middleware-nMulUXHZ.mjs";
import "./short-uuid-fTZYJj_k.mjs";
import "node:crypto";
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
import "./user-scoring-BtNQ1U6a.mjs";
import "./useQuery-Bb0AEcpf.mjs";
import "./useBaseQuery-BqF2iw7Y.mjs";
import "./useServerFn-oRH5Nw97.mjs";
import "./create-context-k6HmQ6bB.mjs";
import "./display-TKj7AN5a.mjs";
import "./graph-BtfBHESi.mjs";
import "./generate-graph-DPfNXSLe.mjs";
import "./list-relations-Wj5vBboU.mjs";
import "./array-BFSjnO9c.mjs";
import "./use-laid-out-graph-DCX5NTEx.mjs";
import "./Checkbox-C8nszDsh.mjs";
import "./get-annotations-DHuYMH09.mjs";
import "./data-9UajV2HK.mjs";
import "./data-BXamdbTM.mjs";
import "./organization-object-tags-BKGicIcs.mjs";
import "./ExpandableGroupTagLine-MgT0uQKb.mjs";
import "./Popover-Cp1XdSV2.mjs";
import "./string-vnnIQF3x.mjs";
import "./value-U5z8H4N0.mjs";
import "./graph-pivots-Bblee9BN.mjs";
import "./ThemeContext-DjRULCu0.mjs";
import "./config--RFGchua.mjs";
import "./TagPreview-DaOqtPxx.mjs";
import "./ClientCommentForm-CxGdh-J3.mjs";
import "./LoaderRevalidatorContext-BEuG7sHs.mjs";
import "./useMutation-BOdeDeAR.mjs";
import "./Time-CKTfEtti.mjs";
import "./annotations-Dbgxm4DN.mjs";
import "./form-D2XmDKeG.mjs";
import "./use-callback-ref-DoQNLci-.mjs";
import "./useForm-qNQ8S9xN.mjs";
import "./get-score-latest-3W-Su_jV.mjs";
import "./TagList-5cEiXNQD.mjs";
import "./use-debounced-callback-ref-CXwcVZ7S.mjs";
import "./helpers-D-Bggz_h.mjs";
import "./join-Ce2xPJwm.mjs";
import "./DataField-BczNbAhi.mjs";
import "./Spinner-DmLieYoS.mjs";
import "./tryCatch-CFf1qt2b.mjs";
import "./isNonNullish-DgEqPJBU.mjs";
import "./Switch-BV-_0Knl.mjs";
import "./mapToObj-C7dg8HnM.mjs";
import "./omit-qKVZGDJg.mjs";
import "./hasAtLeast-BmuNoqMd.mjs";
import "./isNullish-B8pc8Ntu.mjs";
import "./isArray-gJc74O_I.mjs";
import "./list-ruleset-versions-B6atqN3Q.mjs";
import "./Select-Dg3p9vJ0.mjs";
import "./get-custom-lists-DJnJIZcp.mjs";
import "./lists-CwYzskHN.mjs";
import "./lists-ZFx0HGFs.mjs";
import "./organization-users-CEJGnALa.mjs";
import "./Markdown-Djw5Zezo.mjs";
import "./Code-NcjS_4uC.mjs";
import "./Avatar-DDGL3Siw.mjs";
import "./curry-D3P8tFW_.mjs";
import "./ThresholdRange-CusKNWqi.mjs";
import "./sharpstate.es-C0BW2AZi.mjs";
import "./formatDistanceStrict-DEEeAR-Y.mjs";
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
function CaseManagerLinksPage({ objectType, objectId }) {
  const graphDisplay = getGraphExplorationDisplay(useDataModelFeatureAccess());
  if (graphDisplay === "hidden") return null;
  if (graphDisplay !== "graph") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-0 flex-1 flex-col", children: /* @__PURE__ */ jsxRuntimeExports.jsx(GraphAccessPlaceholder, {}) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    GraphSessionProvider,
    {
      initialRecord: { recordType: objectType, recordId: objectId },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(LinksGraphBody, {})
    },
    `${objectType}:${objectId}`
  );
}
function LinksGraphBody() {
  const { isGeneratingGraph } = useGraphSession();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-0 flex-1 flex-col", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    SessionGraphCanvas,
    {
      placeholder: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: cn("min-h-0 flex-1", isGeneratingGraph && "animate-pulse bg-grey-background") })
    }
  ) });
}
function RouteComponent() {
  const {
    objectId,
    objectType
  } = Route$9.useLoaderData();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(CaseManagerLinksPage, { objectType, objectId });
}
export {
  RouteComponent as component
};

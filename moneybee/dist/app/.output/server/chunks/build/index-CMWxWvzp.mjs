import { Q as jsxRuntimeExports } from "./server.mjs";
import { aq as Card, a6 as Input, B as Button, I as Icon } from "./Tabs-CzpyUi7T.mjs";
import { T as ThresholdRange } from "./ThresholdRange-CusKNWqi.mjs";
import { P as Page } from "./router-KSC-NEr8.mjs";
import { u as useGraphSession, a as GRAPH_DEGREE_OPTIONS, i as isGraphDegree } from "./GraphSessionContext-DR4cbEeZ.mjs";
import { G as GraphOptionSelect } from "./GraphOptionSelect-pgH30W5_.mjs";
import { S as SessionGraphCanvas } from "./SessionGraphCanvas-YTWrm3Qp.mjs";
import { u as useDataModel } from "./data-model-Dfj0lN5a.mjs";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "./services-middleware-nMulUXHZ.mjs";
import "./short-uuid-fTZYJj_k.mjs";
import "node:crypto";
import "./use-callback-ref-DoQNLci-.mjs";
import "./sharpstate.es-C0BW2AZi.mjs";
import "./formatDistanceStrict-DEEeAR-Y.mjs";
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
import "./create-context-k6HmQ6bB.mjs";
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
import "./graph-CqpSMa0d.mjs";
import "./get-scoring-settings-CNgnpjXy.mjs";
import "./scoring-BqfH8vO5.mjs";
import "./user-scoring-BtNQ1U6a.mjs";
import "./useQuery-Bb0AEcpf.mjs";
import "./useBaseQuery-BqF2iw7Y.mjs";
import "./useServerFn-oRH5Nw97.mjs";
import "./display-TKj7AN5a.mjs";
import "./graph-BtfBHESi.mjs";
import "./generate-graph-DPfNXSLe.mjs";
import "./list-relations-Wj5vBboU.mjs";
import "./array-BFSjnO9c.mjs";
import "./DatatypeOption-CVRIpFKg.mjs";
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
import "./TagPreview-DaOqtPxx.mjs";
import "./ClientCommentForm-CxGdh-J3.mjs";
import "./LoaderRevalidatorContext-BEuG7sHs.mjs";
import "./useMutation-BOdeDeAR.mjs";
import "./Time-CKTfEtti.mjs";
import "./annotations-Dbgxm4DN.mjs";
import "./form-D2XmDKeG.mjs";
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
const GRAPH_DEGREE_COLORS = {
  1: "var(--color-green-primary)",
  2: "var(--color-green-primary)",
  3: "var(--color-yellow-primary)",
  4: "var(--color-orange-primary)",
  5: "var(--color-red-primary)"
};
const GRAPH_DEGREE_STEPS = GRAPH_DEGREE_OPTIONS.map((value) => ({
  value,
  color: GRAPH_DEGREE_COLORS[value]
}));
function StartRecordPicker({
  tableNames,
  recordType,
  recordId,
  degrees,
  onRecordTypeChange,
  onRecordIdChange,
  onDegreesChange,
  onLoad,
  isLoading
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("form", { onSubmit: (e) => {
    e.preventDefault();
    onLoad();
  }, className: "flex flex-col gap-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-end gap-md", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-xs", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-grey-secondary text-xs", children: "Table" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(GraphOptionSelect, { className: "min-w-40", size: "small", value: recordType, placeholder: "Select table", options: tableNames.map((name) => ({
        value: name,
        label: name
      })), onChange: onRecordTypeChange })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-xs", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "graph-record-id", className: "text-grey-secondary text-xs", children: "Object id" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "graph-record-id", size: "small", value: recordId, onChange: (event) => onRecordIdChange(event.target.value), placeholder: "object id", className: "min-w-56" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ThresholdRange, { title: "Degrees", value: degrees, onChange: (value) => {
      if (isGraphDegree(value)) onDegreesChange(value);
    }, values: GRAPH_DEGREE_STEPS, initialColor: GRAPH_DEGREE_COLORS[1], min: GRAPH_DEGREE_OPTIONS[0], max: GRAPH_DEGREE_OPTIONS.at(-1), className: "w-56 pb-md" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "primary", disabled: !recordType || !recordId.trim() || isLoading, type: "submit", children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "restart-alt", className: "size-4 animate-spin" }),
      "Loading"
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "search", className: "size-4" }),
      "Load"
    ] }) })
  ] }) });
}
function TestGraphRoute() {
  const dataModel = useDataModel();
  const {
    recordType,
    setRecordType,
    recordId,
    setRecordId,
    degrees,
    setDegrees,
    isGeneratingGraph,
    loadGraph
  } = useGraphSession();
  const tableNames = dataModel.map((table) => table.name).sort((a, b) => a.localeCompare(b));
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Page.Content, { className: "min-h-0 flex-1", width: "fluid", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-0 flex-1 flex-col gap-md", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(StartRecordPicker, { tableNames, recordType, recordId, degrees, onRecordTypeChange: setRecordType, onRecordIdChange: setRecordId, onDegreesChange: setDegrees, onLoad: loadGraph, isLoading: isGeneratingGraph }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SessionGraphCanvas, { placeholder: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "text-grey-secondary flex min-h-0 flex-1 items-center justify-center p-lg text-sm", children: "Select a table and object id, then load the graph." }) })
  ] }) });
}
export {
  TestGraphRoute as component
};

import { M as reactExports, Q as jsxRuntimeExports } from "./server.mjs";
import { u as useTranslation, aC as useTable, aD as Table } from "./Tabs-CzpyUi7T.mjs";
import { V as Route$Z, P as Page } from "./router-KSC-NEr8.mjs";
import { C as CollapsiblePaper } from "./Paper-HCUf48Ym.mjs";
import { C as ColorPreview, U as UpdateTag, D as DeleteTag, a as CreateTag } from "./UpdateTag-BH5W6_v-.mjs";
import { c as createColumnHelper } from "./columnHelper-dCJ-kjEm.mjs";
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
import "./Collapsible-CKx8cmdD.mjs";
import "./index-22HmyALM.mjs";
import "./FormErrorOrDescription-BncG6ljR.mjs";
import "./FormInput-CsT_ETvr.mjs";
import "./FormLabel-DseYo_2t.mjs";
import "./LoaderRevalidatorContext-BEuG7sHs.mjs";
import "./settings-Cx4KA480.mjs";
import "./settings-vUgGED-h.mjs";
import "./useMutation-BOdeDeAR.mjs";
import "./useServerFn-oRH5Nw97.mjs";
import "./form-D2XmDKeG.mjs";
import "./array-BFSjnO9c.mjs";
import "./useForm-qNQ8S9xN.mjs";
import "./Modal-CpYmGWjB.mjs";
const columnHelper = createColumnHelper();
function Tags() {
  const {
    t
  } = useTranslation(["settings"]);
  const {
    tags,
    isCreateTagAvailable,
    isEditTagAvailable,
    isDeleteTagAvailable
  } = Route$Z.useLoaderData();
  const columns = reactExports.useMemo(() => {
    return [columnHelper.accessor((row) => row.name, {
      id: "name",
      header: t("settings:tags.name"),
      size: 200
    }), columnHelper.accessor((row) => row.color, {
      id: "color",
      header: t("settings:tags.color"),
      size: 100,
      cell: ({
        getValue
      }) => /* @__PURE__ */ jsxRuntimeExports.jsx(ColorPreview, { color: getValue() })
    }), columnHelper.accessor((row) => row.cases_count, {
      id: "cases",
      header: t("settings:tags.cases"),
      size: 200
    }), columnHelper.accessor((row) => row.target, {
      id: "target",
      header: t("settings:tags.target"),
      cell: ({
        cell
      }) => {
        return t(`settings:tags.target.${cell.getValue()}`);
      },
      size: 100
    }), ...isEditTagAvailable || isDeleteTagAvailable ? [columnHelper.display({
      id: "actions",
      size: 100,
      cell: ({
        cell
      }) => {
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-sm", children: [
          isEditTagAvailable ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "group-hover:text-grey-primary focus-within:text-grey-primary text-transparent", children: /* @__PURE__ */ jsxRuntimeExports.jsx(UpdateTag, { tag: cell.row.original }) }) : null,
          isDeleteTagAvailable ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "group-hover:text-grey-primary focus-within:text-grey-primary text-transparent", children: /* @__PURE__ */ jsxRuntimeExports.jsx(DeleteTag, { tag: cell.row.original }) }) : null
        ] });
      }
    })] : []];
  }, [isDeleteTagAvailable, isEditTagAvailable, t]);
  const {
    table,
    getBodyProps,
    rows,
    getContainerProps
  } = useTable({
    data: tags,
    columns,
    columnResizeMode: "onChange",
    enableSorting: false
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Page.Content, { width: "readable", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CollapsiblePaper.Container, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CollapsiblePaper.Title, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1", children: t("settings:tags") }),
      isCreateTagAvailable ? /* @__PURE__ */ jsxRuntimeExports.jsx(CreateTag, {}) : null
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CollapsiblePaper.Content, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table.Container, { ...getContainerProps(), className: "max-h-96", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Table.Header, { headerGroups: table.getHeaderGroups() }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Table.Body, { ...getBodyProps(), children: rows.map((row) => {
        return /* @__PURE__ */ jsxRuntimeExports.jsx(Table.Row, { className: "hover:bg-surface-row-hover group", row }, row.id);
      }) })
    ] }) })
  ] }) });
}
export {
  Tags as component
};

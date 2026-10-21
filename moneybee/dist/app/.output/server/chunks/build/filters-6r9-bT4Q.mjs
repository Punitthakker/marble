import { M as reactExports, Q as jsxRuntimeExports } from "./server.mjs";
import { u as useTranslation, B as Button, I as Icon, aC as useTable, aD as Table, M as MenuCommand } from "./Tabs-CzpyUi7T.mjs";
import { M as Modal } from "./Modal-CpYmGWjB.mjs";
import { at as Route$A, P as Page } from "./router-KSC-NEr8.mjs";
import { C as CollapsiblePaper } from "./Paper-HCUf48Ym.mjs";
import { u as useLoaderRevalidator } from "./LoaderRevalidatorContext-BEuG7sHs.mjs";
import { a as useDeleteFilterMutation, u as useCreateFilterMutation } from "./update-filter-49Qw79sX.mjs";
import { h as handleSubmit } from "./form-D2XmDKeG.mjs";
import { u as useForm } from "./useForm-qNQ8S9xN.mjs";
import { z as zt } from "./create-context-k6HmQ6bB.mjs";
import { e as exportedFieldSchema } from "./settings-Cx4KA480.mjs";
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
import "./settings-vUgGED-h.mjs";
import "./useMutation-BOdeDeAR.mjs";
import "./useServerFn-oRH5Nw97.mjs";
import "./array-BFSjnO9c.mjs";
function CreateFilter({
  dataModel,
  triggerFieldItems,
  linkedFieldItems
}) {
  const { t } = useTranslation(["common", "settings"]);
  const [open, setOpen] = reactExports.useState(false);
  const [openUnifiedMenu, setOpenUnifiedMenu] = reactExports.useState(false);
  const [selectedTableId, setSelectedTableId] = reactExports.useState(dataModel[0]?.id ?? "");
  const createFilterMutation = useCreateFilterMutation();
  const selectedTable = dataModel.find((t2) => t2.id === selectedTableId);
  const revalidate = useLoaderRevalidator();
  function summaryLabel() {
    const v = form.state.values;
    if ("ingestedDataField" in v && v.ingestedDataField) {
      return `->${v.ingestedDataField.path.join("->")}.${v.ingestedDataField.name}`;
    }
    if ("triggerObjectField" in v && v.triggerObjectField) {
      const tableName = selectedTable?.name ?? "";
      return tableName ? `${tableName}.${v.triggerObjectField}` : v.triggerObjectField;
    }
    return "Choose a field";
  }
  const form = useForm({
    defaultValues: {},
    onSubmit: ({ value, formApi }) => {
      if (formApi.state.isValid) {
        createFilterMutation.mutateAsync({ tableId: selectedTableId, payload: value }).then(() => {
          setOpen(false);
          revalidate();
          form.reset();
        }).catch(() => {
          zt.error(t("common:errors.unknown"));
        });
      }
    },
    validators: {
      onSubmit: exportedFieldSchema
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal.Root, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.Trigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: (e) => e.stopPropagation(), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "plus", className: "size-4" }),
      t("settings:scenarios.filters.new_filter.create.button.label")
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.Content, { onClick: (e) => e.stopPropagation(), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit(form), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.Title, { children: t("settings:scenarios.filters.new_filter.title") }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-lg p-lg", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(MenuCommand.Menu, { open: openUnifiedMenu, onOpenChange: setOpenUnifiedMenu, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Trigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.SelectButton, { children: summaryLabel() }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(MenuCommand.Content, { align: "start", sameWidth: true, sideOffset: 4, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Combobox, { placeholder: "Search fields" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(MenuCommand.List, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Group, { children: triggerFieldItems.map((item) => {
                return /* @__PURE__ */ jsxRuntimeExports.jsx(
                  MenuCommand.Item,
                  {
                    onSelect: () => {
                      setSelectedTableId(item.tableId);
                      form.setFieldValue("ingestedDataField", void 0);
                      form.setFieldValue("triggerObjectField", item.fieldName);
                      setOpenUnifiedMenu(false);
                    },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: item.label })
                  },
                  `trigger-${item.tableId}-${item.fieldName}`
                );
              }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Separator, {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Group, { children: linkedFieldItems.map((item) => {
                return /* @__PURE__ */ jsxRuntimeExports.jsx(
                  MenuCommand.Item,
                  {
                    onSelect: () => {
                      setSelectedTableId(item.baseTableId);
                      form.setFieldValue("triggerObjectField", void 0);
                      form.setFieldValue(
                        "ingestedDataField",
                        {
                          path: item.pathLinks,
                          name: item.fieldName
                        }
                      );
                      setOpenUnifiedMenu(false);
                    },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: item.label })
                  },
                  `pivot-${item.baseTableId}-${item.label}`
                );
              }) })
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 gap-sm justify-end", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.Close, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", onClick: () => setOpen(false), children: t("common:cancel") }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "primary", type: "submit", className: "align-baseline", children: t("common:save") })
        ] })
      ] })
    ] }) })
  ] });
}
const columnHelper = createColumnHelper();
function Filters() {
  const revalidate = useLoaderRevalidator();
  const {
    t
  } = useTranslation(["settings", "common"]);
  const {
    filters,
    dataModel,
    triggerFieldItems,
    linkedFieldItems
  } = Route$A.useLoaderData();
  const deleteFilterMutation = useDeleteFilterMutation();
  const [isConfirmOpen, setIsConfirmOpen] = reactExports.useState(false);
  const [itemToDelete, setItemToDelete] = reactExports.useState(null);
  const columns = reactExports.useMemo(() => {
    return [columnHelper.accessor((row) => row.associatedObject, {
      id: "associatedObject",
      header: t("settings:filters.associated-object.row.header.label"),
      size: 240
    }), columnHelper.accessor((row) => row.definition, {
      id: "definition",
      header: t("settings:filters.definition.row.header.label")
    }), columnHelper.display({
      id: "actions",
      size: 80,
      cell: ({
        row
      }) => {
        return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", mode: "icon", className: "opacity-0 group-hover:opacity-100 transition-opacity", onClick: async (e) => {
          e.stopPropagation();
          setItemToDelete(row.original);
          setIsConfirmOpen(true);
        }, "aria-label": "Delete filter", title: "Delete filter", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "delete", className: "size-4" }) }) });
      }
    })];
  }, [columnHelper, deleteFilterMutation]);
  const {
    table,
    getBodyProps,
    rows: tableRows,
    getContainerProps
  } = useTable({
    data: filters,
    columns,
    columnResizeMode: "onChange",
    enableSorting: false
  });
  const handleDeleteFilter = () => {
    if (!itemToDelete) return;
    const payload = itemToDelete.kind === "trigger" ? {
      triggerObjectField: itemToDelete.field
    } : {
      ingestedDataField: {
        path: itemToDelete.path ?? [],
        name: itemToDelete.name
      }
    };
    deleteFilterMutation.mutateAsync({
      tableId: itemToDelete.tableId,
      payload
    }).then(() => {
      setIsConfirmOpen(false);
      setItemToDelete(null);
      revalidate();
    }).catch(() => {
      zt.error(t("common:errors.unknown"));
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Page.Content, { width: "readable", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CollapsiblePaper.Container, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CollapsiblePaper.Title, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1", children: t("settings:filters-settings") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CreateFilter, { dataModel, triggerFieldItems, linkedFieldItems })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CollapsiblePaper.Content, { className: "flex flex-col h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-md flex-1 min-h-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table.Container, { ...getContainerProps(), className: "flex-1 min-h-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Table.Header, { headerGroups: table.getHeaderGroups() }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Table.Body, { ...getBodyProps(), children: tableRows.map((row) => /* @__PURE__ */ jsxRuntimeExports.jsx(Table.Row, { row, className: "hover:bg-purple-background-light group" }, row.id)) })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.Root, { open: isConfirmOpen, onOpenChange: setIsConfirmOpen, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal.Content, { size: "medium", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.Title, { children: t("settings:filters.delete_filter.title") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.Description, { className: "p-lg text-left", children: t("settings:filters.delete_filter.content") }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal.Footer, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.FooterButton, { isCloseButton: true, variant: "secondary", label: t("common:cancel"), onClick: () => setIsConfirmOpen(false) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.FooterButton, { variant: "destructive", label: t("settings:filters.delete_filter"), onClick: handleDeleteFilter, leadingIcon: "delete", isLoading: deleteFilterMutation.isPending })
      ] })
    ] }) })
  ] });
}
export {
  Filters as component
};

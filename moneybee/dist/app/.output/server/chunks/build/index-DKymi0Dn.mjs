import { M as reactExports, Q as jsxRuntimeExports } from "./server.mjs";
import { u as useTranslation, aF as useVirtualTable, aD as Table, B as Button, I as Icon } from "./Tabs-CzpyUi7T.mjs";
import { T as Tag, z as zt } from "./create-context-k6HmQ6bB.mjs";
import { ak as Route$E, L as Link, P as Page } from "./router-KSC-NEr8.mjs";
import { D as DetectionNavigationTabs } from "./Tabs-DoS4UhZR.mjs";
import { F as FormErrorOrDescription } from "./FormErrorOrDescription-BncG6ljR.mjs";
import { F as FormInput } from "./FormInput-CsT_ETvr.mjs";
import { F as FormLabel } from "./FormLabel-DseYo_2t.mjs";
import { c as createListFn } from "./lists-CwYzskHN.mjs";
import { u as useMutation } from "./useMutation-BOdeDeAR.mjs";
import { u as useServerFn } from "./useServerFn-oRH5Nw97.mjs";
import { c as createListPayloadSchema } from "./lists-ZFx0HGFs.mjs";
import { g as getFieldErrors } from "./form-D2XmDKeG.mjs";
import { u as useForm } from "./useForm-qNQ8S9xN.mjs";
import { M as Modal } from "./Modal-CpYmGWjB.mjs";
import { S as SelectV2 } from "./Select-Dg3p9vJ0.mjs";
import { N as Nudge } from "./Nudge-Cmzwt2Be.mjs";
import { f as fromUUIDtoSUUID } from "./short-uuid-fTZYJj_k.mjs";
import { c as createColumnHelper } from "./columnHelper-dCJ-kjEm.mjs";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "./services-middleware-nMulUXHZ.mjs";
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
import "./array-BFSjnO9c.mjs";
import "./isNullish-B8pc8Ntu.mjs";
const useCreateListMutation = () => {
  const createList = useServerFn(createListFn);
  return useMutation({
    mutationKey: ["lists", "create"],
    mutationFn: async (data) => createList({ data })
  });
};
function CreateListModal({ isIpGpsAvailable }) {
  const { t } = useTranslation(["lists", "navigation", "common"]);
  const createListMutation = useCreateListMutation();
  const form = useForm({
    defaultValues: {
      name: "",
      description: "",
      kind: "text"
    },
    onSubmit: ({ value, formApi }) => {
      if (formApi.state.isValid) {
        createListMutation.mutateAsync(value).then((res) => {
          if (res && "error" in res) {
            zt.error(t("common:errors.list.duplicate_list_name"));
            return;
          }
        }).catch(() => {
          zt.error(t("common:errors.unknown"));
        });
      }
    },
    validators: {
      onSubmitAsync: createListPayloadSchema
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal.Root, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.Trigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "medium", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "plus", className: "size-5" }),
      t("lists:create_list.title")
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.Content, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "form",
      {
        onSubmit: (e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.Title, { children: t("lists:create_list.title") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-lg p-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 flex-col gap-md", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(form.Field, { name: "name", children: (field) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { name: field.name, children: t("lists:name") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                FormInput,
                {
                  type: "text",
                  name: field.name,
                  defaultValue: field.state.value,
                  onChange: (e) => field.handleChange(e.currentTarget.value),
                  onBlur: field.handleBlur,
                  valid: field.state.meta.errors.length === 0,
                  placeholder: t("lists:create_list.name_placeholder")
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(FormErrorOrDescription, { errors: getFieldErrors(field.state.meta.errors) })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(form.Field, { name: "description", children: (field) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { name: field.name, children: t("lists:description") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                FormInput,
                {
                  type: "text",
                  name: field.name,
                  defaultValue: field.state.value,
                  onChange: (e) => field.handleChange(e.currentTarget.value),
                  onBlur: field.handleBlur,
                  valid: field.state.meta.errors.length === 0,
                  placeholder: t("lists:create_list.description_placeholder")
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(FormErrorOrDescription, { errors: getFieldErrors(field.state.meta.errors) })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(form.Field, { name: "kind", children: (field) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 flex-col gap-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { name: field.name, children: t("lists:kind") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                SelectV2,
                {
                  className: "w-full overflow-hidden",
                  value: field.state.value,
                  onChange: (value) => field.handleChange(value),
                  placeholder: t("lists:kind"),
                  options: [
                    {
                      label: t("lists:kind.text"),
                      value: "text"
                    },
                    {
                      label: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex w-full items-center gap-sm", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("lists:kind.cidrs") }),
                        !isIpGpsAvailable ? /* @__PURE__ */ jsxRuntimeExports.jsx(Nudge, { kind: "restricted", content: t("common:premium") }) : null
                      ] }),
                      value: "cidrs"
                    }
                  ].filter((option) => isIpGpsAvailable || option.value !== "cidrs")
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(FormErrorOrDescription, { errors: getFieldErrors(field.state.meta.errors) })
            ] }) })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal.Footer, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.FooterButton, { isCloseButton: true, label: t("common:cancel") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Modal.FooterButton,
              {
                label: t("lists:create_list.button_accept"),
                type: "submit",
                name: "create",
                isLoading: createListMutation.isPending
              }
            )
          ] })
        ]
      }
    ) })
  ] });
}
const columnHelper = createColumnHelper();
function DetectionListsPage() {
  const {
    t
  } = useTranslation(["lists", "navigation"]);
  const {
    customLists,
    isCreateListAvailable,
    isIpGpsAvailable
  } = Route$E.useLoaderData();
  const columns = reactExports.useMemo(() => [columnHelper.accessor("name", {
    id: "name",
    header: t("lists:name"),
    size: 200,
    sortFn: "text",
    enableSorting: true
  }), columnHelper.accessor("description", {
    id: "description",
    header: t("lists:description"),
    size: 400
  }), columnHelper.accessor("kind", {
    id: "kind",
    header: t("lists:kind"),
    size: 180,
    cell: ({
      getValue
    }) => {
      const kind = getValue();
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { color: "purple", children: t(`lists:kind.${kind}`) });
    }
  }), columnHelper.accessor("ValuesCount", {
    id: "valuesCount",
    header: t("lists:values_count"),
    size: 80,
    cell: ({
      getValue
    }) => {
      const {
        count,
        hasMore
      } = getValue();
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        count,
        hasMore ? "+" : null,
        " ",
        t("lists:list.row.values_count", {
          count
        })
      ] });
    }
  })], [t]);
  const {
    table,
    isEmpty,
    getBodyProps,
    rows,
    getContainerProps
  } = useVirtualTable({
    data: customLists,
    columns,
    columnResizeMode: "onChange",
    manualSorting: false,
    rowLink: ({
      id
    }) => /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/detection/lists/$listId", params: {
      listId: fromUUIDtoSUUID(id)
    } })
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Page.Main, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Page.Content, { width: "table", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DetectionNavigationTabs, { actions: isCreateListAvailable ? /* @__PURE__ */ jsxRuntimeExports.jsx(CreateListModal, { isIpGpsAvailable }) : void 0 }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-md", children: isEmpty ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-surface-card border-grey-border flex h-28 max-w-3xl flex-col items-center justify-center rounded-lg border border-solid p-md", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-s font-medium", children: t("lists:empty_custom_lists_list") }) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(Table.Container, { ...getContainerProps(), className: "bg-surface-card max-h-[70dvh]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Table.Header, { headerGroups: table.getHeaderGroups() }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Table.Body, { ...getBodyProps(), children: rows.map((row) => /* @__PURE__ */ jsxRuntimeExports.jsx(Table.Row, { row }, row.id)) })
    ] }) })
  ] }) });
}
export {
  DetectionListsPage as component
};

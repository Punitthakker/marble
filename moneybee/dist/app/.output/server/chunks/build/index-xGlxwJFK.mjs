import { Q as jsxRuntimeExports, M as reactExports, $ as createServerFn } from "./server.mjs";
import { u as useDataModelQuery } from "./get-data-model-BUauY6PR.mjs";
import { u as useTranslation, aq as Card, I as Icon, B as Button, a6 as Input, ar as SearchInput } from "./Tabs-CzpyUi7T.mjs";
import { a2 as M } from "./services-middleware-nMulUXHZ.mjs";
import { w as Route$1h, P as Page, u as useNavigate, L as Link, v as clientDetailLinkParams } from "./router-KSC-NEr8.mjs";
import { u as useLoaderRevalidator } from "./LoaderRevalidatorContext-BEuG7sHs.mjs";
import { c as createSsrRpc } from "./query-BmG5BEas.mjs";
import { a as authMiddleware } from "./auth-middleware-eNRVfU3l.mjs";
import { a as addConfigurationPayloadSchema, c as client360SearchPayloadSchema } from "./client360-0EhvxiK8.mjs";
import { u as useMutation } from "./useMutation-BOdeDeAR.mjs";
import { u as useServerFn } from "./useServerFn-oRH5Nw97.mjs";
import { h as handleSubmit } from "./form-D2XmDKeG.mjs";
import { u as useStore } from "./useStore-C3gZU5bu.mjs";
import { u as useForm } from "./useForm-qNQ8S9xN.mjs";
import { z as zt, T as Tag } from "./create-context-k6HmQ6bB.mjs";
import { M as Modal } from "./Modal-CpYmGWjB.mjs";
import { S as SelectV2 } from "./Select-Dg3p9vJ0.mjs";
import { u as uuid, o as object, i as union, s as string } from "./short-uuid-fTZYJj_k.mjs";
import { u as useInfiniteQuery } from "./useInfiniteQuery-B6vcG-7y.mjs";
import { u as useGetAnnotationsQuery } from "./get-annotations-DHuYMH09.mjs";
import { u as useOrganizationObjectTags } from "./organization-object-tags-BKGicIcs.mjs";
import { g as DataFields } from "./DataField-BczNbAhi.mjs";
import { H as Highlight } from "./Highlight-NVjBw0RI.mjs";
import { S as Spinner } from "./Spinner-DmLieYoS.mjs";
import { D as DataModelContextProvider } from "./data-model-Dfj0lN5a.mjs";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "./data-9UajV2HK.mjs";
import "./data-BXamdbTM.mjs";
import "./useQuery-Bb0AEcpf.mjs";
import "./useBaseQuery-BqF2iw7Y.mjs";
import "./use-callback-ref-DoQNLci-.mjs";
import "./sharpstate.es-C0BW2AZi.mjs";
import "./formatDistanceStrict-DEEeAR-Y.mjs";
import "node:crypto";
import "./security-headers.server-BdP3HrPp.mjs";
import "./ThemeContext-DjRULCu0.mjs";
import "./config--RFGchua.mjs";
import "./i18n-instance-store-UssbGYOM.mjs";
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
import "./array-BFSjnO9c.mjs";
import "./isNullish-B8pc8Ntu.mjs";
import "./tryCatch-CFf1qt2b.mjs";
import "./isNonNullish-DgEqPJBU.mjs";
import "./Switch-BV-_0Knl.mjs";
import "./mapToObj-C7dg8HnM.mjs";
import "./omit-qKVZGDJg.mjs";
import "./hasAtLeast-BmuNoqMd.mjs";
const DEFAULT_INTERACTIVE_SELECTOR = 'a, button, input, select, textarea, summary, [role="button"], [role="link"]';
const getRowLink = (currentTarget) => {
  if (!(currentTarget instanceof HTMLElement)) return null;
  const rowLink = currentTarget.querySelector("[data-row-link]");
  return rowLink instanceof HTMLAnchorElement ? rowLink : null;
};
const isInteractiveTarget = (target, currentTarget, interactiveSelector) => {
  if (!(target instanceof HTMLElement)) return false;
  const interactiveTarget = target.closest(interactiveSelector);
  return interactiveTarget !== null && interactiveTarget !== currentTarget;
};
function LinkWrapper({
  children,
  interactiveSelector = DEFAULT_INTERACTIVE_SELECTOR,
  link,
  onClick,
  onKeyDown,
  role = "link",
  tabIndex = 0,
  ...props
}) {
  const handleClick = (event) => {
    if (isInteractiveTarget(event.target, event.currentTarget, interactiveSelector)) return;
    onClick?.(event);
    if (event.defaultPrevented) return;
    const rowLink = getRowLink(event.currentTarget);
    if (rowLink) {
      rowLink.dispatchEvent(new MouseEvent(event.type, event.nativeEvent));
    }
  };
  const handleKeyDown = (event) => {
    if (isInteractiveTarget(event.target, event.currentTarget, interactiveSelector)) return;
    onKeyDown?.(event);
    if (event.defaultPrevented) return;
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    getRowLink(event.currentTarget)?.click();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ...props, onClick: handleClick, onKeyDown: handleKeyDown, role, tabIndex, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "hidden", children: reactExports.cloneElement(link, {
      "data-row-link": "",
      tabIndex: -1
    }) }),
    children
  ] });
}
const addClient360ConfigurationFn = createServerFn({
  method: "POST"
}).middleware([authMiddleware]).validator(addConfigurationPayloadSchema).handler(createSsrRpc("880d65aaf841161add62f19fc5a167b5b04291f468a24ee61ce02619a0370e1b"));
const searchClient360Fn = createServerFn({
  method: "POST"
}).middleware([authMiddleware]).validator(client360SearchPayloadSchema).handler(createSsrRpc("c31af8b0b868ea45fe4522ba4e6e65a83ef5425f85581ff7f1d23c50fe1b8e9d"));
const useAddConfigurationMutation = () => {
  const addConfiguration = useServerFn(addClient360ConfigurationFn);
  return useMutation({
    mutationKey: ["client360", "add-configuration"],
    mutationFn: (payload) => addConfiguration({ data: payload })
  });
};
const AddConfigurationModal = ({
  tables,
  dataModel,
  disabled
}) => {
  const { t } = useTranslation(["common", "client360"]);
  const [open, setOpen] = reactExports.useState(false);
  const addConfigurationMutation = useAddConfigurationMutation();
  const revalidate = useLoaderRevalidator();
  const form = useForm({
    defaultValues: {
      tableId: "",
      semanticType: "person",
      captionField: "",
      alias: ""
    },
    validators: {
      onSubmit: addConfigurationPayloadSchema,
      onChange: addConfigurationPayloadSchema,
      onMount: addConfigurationPayloadSchema
    },
    onSubmit: ({ value, formApi }) => {
      if (formApi.state.isValid) {
        addConfigurationMutation.mutateAsync(value).then(() => {
          zt.success(t("common:success.save"));
          setOpen(false);
          form.reset();
          revalidate();
        }).catch(() => {
          zt.error(t("common:errors.unknown"));
        });
      }
    }
  });
  const availableTables = dataModel.filter((table) => {
    if (tables.some((t2) => t2.id === table.id)) return false;
    if (table.semanticType === "transaction" || table.semanticType === "event" || table.semanticType === "account")
      return false;
    if (table.semanticType === "person" && table.subEntity === "generic") return false;
    const hasPersonOrCompany = table.semanticType === "person" && (table.subEntity === "natural" || table.subEntity === "moral");
    if (hasPersonOrCompany && table.captionField) return false;
    const hasNoName = table.fields.every((field) => field.semanticType !== "name");
    const hasFieldWithNoSemantic = table.fields.some((field) => !field.semanticType);
    if (hasNoName && !hasFieldWithNoSemantic) return false;
    return true;
  });
  const selectedTable = useStore(
    form.store,
    (state) => state.values.tableId ? dataModel.find((table) => table.id === state.values.tableId) : null
  );
  const tableFields = selectedTable ? selectedTable.fields.filter((field) => field.dataType === "String") : [];
  const selectedTableId = selectedTable?.id;
  reactExports.useEffect(() => {
    if (selectedTable) {
      form.setFieldValue("alias", selectedTable.alias || "");
      form.setFieldValue("captionField", selectedTable.captionField || "");
      if (selectedTable.semanticType === "person" && selectedTable.subEntity === "moral") {
        form.setFieldValue("semanticType", "company");
      } else if (selectedTable.semanticType === "person" && selectedTable.subEntity === "natural") {
        form.setFieldValue("semanticType", "person");
      }
    }
  }, [selectedTableId]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal.Root, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.Trigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Button,
      {
        variant: "primary",
        size: "small",
        appearance: tables.length > 0 ? "stroked" : "filled",
        disabled,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "plus", className: "size-4" }),
          t("client360:client_detail.add_configuration_modal.button")
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal.Content, { size: "medium", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.Title, { children: t("client360:client_detail.add_configuration_modal.title") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.Description, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-grey-secondary text-small text-center pt-sm", children: t("client360:client_detail.add_configuration_modal.description") }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-md", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "form",
        {
          id: "add-configuration-form",
          className: "grid grid-cols-2 gap-y-sm gap-x-md p-sm bg-surface-card rounded-lg border border-grey-border text-small",
          onSubmit: handleSubmit(form),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(form.Field, { name: "tableId", children: (field) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-[40px_1fr] items-center gap-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("client360:client_detail.add_configuration_modal.table_label") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                SelectV2,
                {
                  value: field.state.value,
                  placeholder: t("client360:client_detail.add_configuration_modal.table_placeholder"),
                  onChange: field.handleChange,
                  options: availableTables.map((table) => ({
                    label: table.name,
                    value: table.id,
                    rowValue: table.name
                  })),
                  className: "w-full"
                }
              )
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(form.Field, { name: "semanticType", children: (field) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-[40px_1fr] items-center gap-sm col-start-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("client360:client_detail.add_configuration_modal.type_label") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                SelectV2,
                {
                  value: field.state.value,
                  placeholder: t("client360:client_detail.add_configuration_modal.type_placeholder"),
                  onChange: field.handleChange,
                  options: [
                    { label: t("client360:client_detail.add_configuration_modal.type_person"), value: "person" },
                    { label: t("client360:client_detail.add_configuration_modal.type_company"), value: "company" }
                  ],
                  className: "w-full"
                }
              )
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(form.Field, { name: "captionField", children: (field) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-[40px_1fr] items-center gap-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("client360:client_detail.add_configuration_modal.name_label") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                SelectV2,
                {
                  disabled: !selectedTable,
                  value: field.state.value,
                  placeholder: t("client360:client_detail.add_configuration_modal.caption_field_placeholder"),
                  onChange: field.handleChange,
                  options: tableFields.map((field2) => ({ label: field2.name, value: field2.name })),
                  className: "w-full"
                }
              )
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(form.Field, { name: "alias", children: (field) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-[40px_1fr] items-center gap-sm col-start-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("client360:client_detail.add_configuration_modal.alias_label") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  value: field.state.value,
                  onChange: (e) => field.handleChange(e.currentTarget.value),
                  placeholder: t("client360:client_detail.add_configuration_modal.alias_placeholder")
                }
              ) })
            ] }) })
          ]
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal.Footer, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.FooterButton, { isCloseButton: true, label: t("common:cancel") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(form.Subscribe, { selector: (state) => state.canSubmit, children: (canSubmit) => {
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            Modal.FooterButton,
            {
              disabled: !canSubmit,
              form: "add-configuration-form",
              type: "submit",
              label: t("common:save")
            }
          );
        } })
      ] })
    ] })
  ] });
};
const searchFormSchema = object({
  value: union([uuid(), string().min(2)])
});
const SearchForm = ({ table }) => {
  const { t } = useTranslation(["client360"]);
  const navigate = useNavigate();
  const tableName = table.alias || table.name;
  const form = useForm({
    defaultValues: {
      value: ""
    },
    validators: {
      onSubmit: searchFormSchema,
      onChange: searchFormSchema,
      onMount: searchFormSchema
    },
    onSubmit: ({ value, formApi }) => {
      if (formApi.state.isValid) {
        const trimmedValue = value.value.trim();
        if (uuid().safeParse(trimmedValue).success) {
          navigate({
            to: "/client-detail/$objectType/$objectId",
            params: clientDetailLinkParams(table.name, trimmedValue)
          });
        } else {
          navigate({
            to: "/client-detail",
            search: { table: table.name, terms: trimmedValue }
          });
        }
      }
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "flex flex-col gap-sm", onSubmit: handleSubmit(form), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { htmlFor: `search_${table.id}`, className: "flex items-center gap-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: t("client360:client_detail.search_form.search_by", { name: tableName.toLowerCase() }) }),
      !table.ready ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-grey-text text-small flex items-center gap-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "warning", className: "size-4 text-yellow-primary" }),
        " ",
        t("client360:client_detail.search_form.table_not_ready")
      ] }) : null
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(form.Field, { name: "value", children: (field) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        SearchInput,
        {
          size: "medium",
          value: field.state.value,
          onChange: (value) => field.handleChange(value),
          placeholder: `${tableName}...`,
          className: "grow",
          disabled: !table.ready
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(form.Subscribe, { selector: (state) => state.canSubmit, children: (canSubmit) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          disabled: !table.ready || !canSubmit,
          variant: "primary",
          size: "medium",
          className: "shrink-0",
          type: "submit",
          children: t("client360:client_detail.search_form.search_button")
        }
      ) })
    ] })
  ] });
};
const useSearchClient360Query = (payload) => {
  const searchClient360 = useServerFn(searchClient360Fn);
  return useInfiniteQuery({
    queryKey: ["client360", "search", payload.table, payload.terms],
    queryFn: async () => searchClient360({ data: payload }),
    getNextPageParam: (lastPage, pages) => {
      return lastPage.hasNextPage ? pages.length + 1 : null;
    },
    initialPageParam: 1
  });
};
const SearchResults = ({ payload, tables }) => {
  const { t } = useTranslation(["common", "client360"]);
  const searchQuery = useSearchClient360Query(payload);
  const metadata = tables.find((table) => table.name === payload.table);
  if (!metadata) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: t("client360:client_detail.search_results.metadata_not_found", { table: payload.table }) });
  }
  return M(searchQuery).with({ isPending: true }, () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-lg h-50 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, { className: "size-10" }) })).with({ isError: true }, () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-lg h-50 flex items-center justify-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-center", children: t("common:generic_fetch_data_error") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", onClick: () => searchQuery.refetch(), children: t("common:retry") })
  ] })).with({ isSuccess: true }, ({ data }) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-sm mt-lg", children: [
      data.pages.flatMap((page) => page.items).map((item) => {
        const objectId = item["object_id"];
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          LinkWrapper,
          {
            link: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/client-detail/$objectType/$objectId",
                params: clientDetailLinkParams(payload.table, objectId)
              }
            ),
            className: "p-md flex items-center border border-grey-border rounded-md bg-surface-card hover:shadow-md dark:hover:border-purple-primary",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Highlight,
                {
                  text: String(item[metadata.caption_field] ?? ""),
                  query: payload.terms,
                  markClassName: "bg-yellow-background dark:bg-yellow-primary/30 text-grey-primary",
                  className: "min-w-100"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                DataFields,
                {
                  table: payload.table,
                  object: { data: item },
                  preset: "essentials",
                  options: { withId: true, hideLinks: true }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(EntityTags, { objectType: payload.table, objectId })
            ]
          },
          objectId
        );
      }),
      searchQuery.hasNextPage ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", size: "small", onClick: () => searchQuery.fetchNextPage(), children: t("common:load_more_results") }) }) : null
    ] });
  }).exhaustive();
};
const EntityTags = ({ objectType, objectId }) => {
  const { t } = useTranslation(["common"]);
  const annotationsQuery = useGetAnnotationsQuery(objectType, objectId);
  const { orgObjectTags } = useOrganizationObjectTags();
  return M(annotationsQuery).with({ isPending: true }, () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: t("common:loading") })).with({ isError: true }, () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: t("common:global_error") })).with({ isSuccess: true }, ({ data }) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-sm ms-2xl", children: data.annotations.tags.map((tagAnnotation) => {
      const tag = orgObjectTags.find((t2) => t2.id === tagAnnotation.payload.tag_id);
      return tag ? /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { children: tag.name }, tag.id) : null;
    }) });
  }).exhaustive();
};
const ClientDetailSearchPage$1 = ({
  tables,
  payload
}) => {
  const { t } = useTranslation(["common", "client360"]);
  const [currentSearchPayload, setCurrentSearchPayload] = reactExports.useState(payload);
  const dataModelQuery = useDataModelQuery();
  reactExports.useEffect(() => {
    setCurrentSearchPayload(payload);
  }, [payload]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Page.Main, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Page.Content, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between mb-md", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-h1 font-semibold", children: t("client360:client_detail.search_page.breadcrumb") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        AddConfigurationModal,
        {
          disabled: !dataModelQuery.isSuccess,
          tables,
          dataModel: dataModelQuery.data?.dataModel ?? []
        }
      )
    ] }),
    tables.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "flex items-center gap-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "tip", className: "size-5" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("client360:client_detail.search_page.no_configuration") })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-[1fr_40px_1fr] gap-lg border border-grey-border rounded-lg p-md bg-surface-card", children: tables.map((table, idx) => {
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(reactExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SearchForm, { table }),
        idx < tables.length - 1 && idx % 2 === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center self-center pt-lg", children: t("common:or") }) : null
      ] }, table.id);
    }) }),
    currentSearchPayload ? /* @__PURE__ */ jsxRuntimeExports.jsx(SearchResults, { payload: currentSearchPayload, tables }) : null
  ] }) });
};
function ClientDetailSearchPage() {
  const {
    tables,
    payload,
    dataModel,
    dataModelFeatureAccess
  } = Route$1h.useLoaderData();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(DataModelContextProvider, { dataModel, dataModelFeatureAccess, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ClientDetailSearchPage$1, { tables, payload }) });
}
export {
  ClientDetailSearchPage as component
};

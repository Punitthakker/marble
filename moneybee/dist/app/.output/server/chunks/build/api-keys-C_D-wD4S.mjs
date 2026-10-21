import { M as reactExports, Q as jsxRuntimeExports } from "./server.mjs";
import { a as Callout } from "./Callout-B0OuRL3q.mjs";
import { z as zt, C as CopyToClipboardButton } from "./create-context-k6HmQ6bB.mjs";
import { M as Route$13, P as Page, L as Link } from "./router-KSC-NEr8.mjs";
import { u as useTranslation, aC as useTable, B as Button, I as Icon, aD as Table, S as Typo, T as Trans } from "./Tabs-CzpyUi7T.mjs";
import { aI as apiKeyRoleOptions } from "./services-middleware-nMulUXHZ.mjs";
import { C as CollapsiblePaper } from "./Paper-HCUf48Ym.mjs";
import { E as ExternalLink } from "./ExternalLink-BlVgwkVd.mjs";
import { N as Nudge } from "./Nudge-Cmzwt2Be.mjs";
import { F as FormErrorOrDescription } from "./FormErrorOrDescription-BncG6ljR.mjs";
import { F as FormInput } from "./FormInput-CsT_ETvr.mjs";
import { F as FormLabel } from "./FormLabel-DseYo_2t.mjs";
import { u as useLoaderRevalidator } from "./LoaderRevalidatorContext-BEuG7sHs.mjs";
import { c as createApiKeyPayloadSchema } from "./settings-Cx4KA480.mjs";
import { d as deleteApiKeyFn, a as createApiKeyFn } from "./settings-vUgGED-h.mjs";
import { u as useMutation } from "./useMutation-BOdeDeAR.mjs";
import { u as useServerFn } from "./useServerFn-oRH5Nw97.mjs";
import { g as getFieldErrors, h as handleSubmit } from "./form-D2XmDKeG.mjs";
import { u as useForm } from "./useForm-qNQ8S9xN.mjs";
import { M as Modal } from "./Modal-CpYmGWjB.mjs";
import { S as SelectV2 } from "./Select-Dg3p9vJ0.mjs";
import { C as CreateWebhook } from "./CreateWebhook-DjTSY4qY.mjs";
import { E as EventTypes } from "./EventTypes-BNv8nQ3g.mjs";
import { w as webhooksSetupDocHref } from "./documentation-href-DY9fs71n.mjs";
import { B as isAccessible } from "./feature-access-BSdB6UiC.mjs";
import { d as downloadFile } from "./download-file-C533i5xX.mjs";
import { c as createColumnHelper } from "./columnHelper-dCJ-kjEm.mjs";
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
import "./short-uuid-fTZYJj_k.mjs";
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
import "./Collapsible-CKx8cmdD.mjs";
import "./index-22HmyALM.mjs";
import "./array-BFSjnO9c.mjs";
import "./isNullish-B8pc8Ntu.mjs";
import "./Highlight-NVjBw0RI.mjs";
import "./match-sorter.esm-BRMYSlZQ.mjs";
const useCreateApiKeyMutation = () => {
  const createApiKey = useServerFn(createApiKeyFn);
  return useMutation({
    mutationKey: ["settings", "api-keys", "create"],
    mutationFn: async (payload) => createApiKey({ data: payload })
  });
};
function tKeyForApiKeyRole(role) {
  switch (role) {
    case "API_CLIENT":
      return "settings:api_keys.role.api_client";
    default:
      return "settings:api_keys.role.unknown";
  }
}
function CreateApiKey() {
  const { t } = useTranslation(["settings"]);
  const [open, setOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal.Root, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.Trigger, { onClick: (e) => e.stopPropagation(), asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { type: "button", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "plus", className: "size-5" }),
      t("settings:api_keys.new_api_key")
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.Content, { onClick: (e) => e.stopPropagation(), children: /* @__PURE__ */ jsxRuntimeExports.jsx(CreateApiKeyContent, { onSuccess: () => setOpen(false) }) })
  ] });
}
const CreateApiKeyContent = ({ onSuccess }) => {
  const { t } = useTranslation(["settings", "common"]);
  const createApiKeyMutation = useCreateApiKeyMutation();
  const revalidate = useLoaderRevalidator();
  const form = useForm({
    onSubmit: ({ value, formApi }) => {
      if (formApi.state.isValid) {
        createApiKeyMutation.mutateAsync(value).then(() => {
          onSuccess();
          revalidate();
        }).catch(() => {
          zt.error(t("common:errors.unknown"));
        });
      }
    },
    defaultValues: { description: "", role: "API_CLIENT" },
    validators: {
      onChange: createApiKeyPayloadSchema,
      onSubmit: createApiKeyPayloadSchema
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit(form), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.Title, { children: t("settings:api_keys.new_api_key") }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-surface-card flex flex-col gap-lg p-lg", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(form.Field, { name: "description", children: (field) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group flex flex-col gap-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { name: field.name, children: t("settings:api_keys.description") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          FormInput,
          {
            name: field.name,
            onBlur: field.handleBlur,
            onChange: (e) => field.handleChange(e.currentTarget.value),
            valid: field.state.meta.errors.length === 0,
            type: "text"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(FormErrorOrDescription, { errors: getFieldErrors(field.state.meta.errors) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(form.Field, { name: "role", children: (field) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group flex flex-col gap-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { name: field.name, children: t("settings:api_keys.role") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          SelectV2,
          {
            disabled: apiKeyRoleOptions.length === 1,
            value: field.state.value,
            onChange: (role) => field.handleChange(role),
            placeholder: t("settings:api_keys.role"),
            options: apiKeyRoleOptions.map((role) => ({
              label: t(tKeyForApiKeyRole(role)),
              value: role
            }))
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(FormErrorOrDescription, { errors: getFieldErrors(field.state.meta.errors) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal.Footer, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.FooterButton, { isCloseButton: true, label: t("common:cancel") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.FooterButton, { label: t("settings:api_keys.create"), type: "submit" })
    ] })
  ] });
};
const useDeleteApiKeyMutation = () => {
  const deleteApiKey = useServerFn(deleteApiKeyFn);
  return useMutation({
    mutationKey: ["settings", "api-keys", "delete"],
    mutationFn: async (payload) => deleteApiKey({ data: payload })
  });
};
function DeleteApiKey({ apiKey }) {
  const { t } = useTranslation(["settings"]);
  const [open, setOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal.Root, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.Trigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "delete", className: "size-6 shrink-0", "aria-label": t("settings:api_keys.delete") }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.Content, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DeleteApiKeyContent, { apiKey, onSuccess: () => setOpen(false) }) })
  ] });
}
function DeleteApiKeyContent({ apiKey, onSuccess }) {
  const { t } = useTranslation(["settings", "common"]);
  const deleteApiKeyMutation = useDeleteApiKeyMutation();
  const revalidate = useLoaderRevalidator();
  const handleDeleteApiKey = () => {
    deleteApiKeyMutation.mutateAsync({ apiKeyId: apiKey.id }).then((res) => {
      if (!res) {
        onSuccess();
      }
      revalidate();
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.Title, { children: t("settings:api_keys.delete") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-lg p-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-s flex flex-1 flex-col gap-md", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { name: "apiKeyId", value: apiKey.id, type: "hidden" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center", children: t("settings:api_keys.delete.content") })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal.Footer, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.FooterButton, { isCloseButton: true, label: t("common:cancel") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Modal.FooterButton,
        {
          label: t("common:delete"),
          variant: "destructive",
          onClick: handleDeleteApiKey,
          leadingIcon: "delete",
          isLoading: deleteApiKeyMutation.isPending
        }
      )
    ] })
  ] });
}
const apiKeyColumnHelper = createColumnHelper();
const webhookColumnHelper = createColumnHelper();
function ApiKeys() {
  const {
    t
  } = useTranslation(["common", "settings", "api"]);
  const {
    apiKeys,
    openapiV1,
    createdApiKey,
    isCreateApiKeyAvailable,
    isDeleteApiKeyAvailable,
    webhooks,
    canReadWebhooks,
    webhooksError,
    isCreateWebhookAvailable,
    webhooksStatus
  } = Route$13.useLoaderData();
  const apiKeyColumns = reactExports.useMemo(() => {
    return [apiKeyColumnHelper.accessor((row) => row.prefix, {
      id: "prefix",
      header: t("settings:api_keys.value"),
      size: 100,
      cell: ({
        getValue
      }) => {
        return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: `${getValue()}*************` });
      }
    }), apiKeyColumnHelper.accessor((row) => row.description, {
      id: "description",
      header: t("settings:api_keys.description"),
      size: 300
    }), apiKeyColumnHelper.accessor((row) => row.role, {
      id: "role",
      header: t("settings:api_keys.role"),
      size: 150,
      cell: ({
        getValue
      }) => t(tKeyForApiKeyRole(getValue()))
    }), ...isDeleteApiKeyAvailable ? [apiKeyColumnHelper.display({
      id: "actions",
      size: 100,
      cell: ({
        cell
      }) => {
        return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "group-hover:text-grey-primary focus-within:text-grey-primary text-transparent", children: /* @__PURE__ */ jsxRuntimeExports.jsx(DeleteApiKey, { apiKey: cell.row.original }) });
      }
    })] : []];
  }, [isDeleteApiKeyAvailable, t]);
  const apiKeyTable = useTable({
    data: apiKeys,
    columns: apiKeyColumns,
    columnResizeMode: "onChange"
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Page.Content, { width: "readable", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col items-start gap-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "secondary", onClick: () => {
      try {
        const blob = new Blob([JSON.stringify(openapiV1)], {
          type: "application/json;charset=utf-8,"
        });
        const url = URL.createObjectURL(blob);
        void downloadFile(url, "openapi-v1.json");
      } catch (_error) {
        zt.error(t("common:errors.unknown"));
      }
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "download", className: "me-sm size-5" }),
      t("api:download_openapi_spec_v1")
    ] }) }),
    createdApiKey ? /* @__PURE__ */ jsxRuntimeExports.jsx(CreatedAPIKey, { createdApiKey }) : null,
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CollapsiblePaper.Container, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CollapsiblePaper.Title, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1", children: t("settings:api_keys") }),
        isCreateApiKeyAvailable ? /* @__PURE__ */ jsxRuntimeExports.jsx(CreateApiKey, {}) : null
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CollapsiblePaper.Content, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table.Container, { ...apiKeyTable.getContainerProps(), className: "max-h-96", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Table.Header, { headerGroups: apiKeyTable.table.getHeaderGroups() }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Table.Body, { ...apiKeyTable.getBodyProps(), children: apiKeyTable.rows.map((row) => {
          return /* @__PURE__ */ jsxRuntimeExports.jsx(Table.Row, { className: "hover:bg-purple-background-light group", row }, row.id);
        }) })
      ] }) })
    ] }),
    canReadWebhooks ? /* @__PURE__ */ jsxRuntimeExports.jsx(WebhooksSection, { webhooks, webhooksError, isCreateWebhookAvailable, webhooksStatus }) : null
  ] });
}
function CreatedAPIKey({
  createdApiKey
}) {
  const {
    t
  } = useTranslation(["settings"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Callout, { variant: "outlined", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-xs", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold", children: t("settings:api_keys.new_api_key") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("settings:api_keys.copy_api_key") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CopyToClipboardButton, { toCopy: createdApiKey.key, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-s line-clamp-1 font-semibold", children: createdApiKey.key }) })
  ] }) });
}
function WebhooksSection({
  webhooks,
  webhooksError,
  isCreateWebhookAvailable,
  webhooksStatus
}) {
  const {
    t
  } = useTranslation(["settings"]);
  const columns = reactExports.useMemo(() => {
    return [webhookColumnHelper.accessor((row) => row.url, {
      id: "url",
      header: t("settings:webhooks.url"),
      size: 200
    }), webhookColumnHelper.accessor((row) => row.eventTypes, {
      id: "eventTypes",
      header: t("settings:webhooks.event_types"),
      size: 200,
      cell: ({
        getValue
      }) => {
        const eventTypes = getValue();
        if (eventTypes.length === 0) {
          return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-grey-disabled text-s", children: t("settings:webhooks.event_types.placeholder") });
        }
        return /* @__PURE__ */ jsxRuntimeExports.jsx(EventTypes, { eventTypes });
      }
    })];
  }, [t]);
  const {
    table,
    getBodyProps,
    rows,
    getContainerProps
  } = useTable({
    data: webhooks,
    columns,
    columnResizeMode: "onChange",
    enableSorting: false,
    rowLink: (webhook) => /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/settings/webhooks/$webhookId", params: {
      webhookId: webhook.id
    } })
  });
  const webhooksTitleContent = /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex flex-1 items-center gap-sm", children: [
    t("settings:webhooks"),
    webhooksStatus !== "allowed" && !isAccessible(webhooksStatus) ? /* @__PURE__ */ jsxRuntimeExports.jsx(Nudge, { content: "", kind: webhooksStatus, className: "size-5" }) : null
  ] });
  if (webhooksError || !isAccessible(webhooksStatus)) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(CollapsiblePaper.Container, { defaultOpen: false, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CollapsiblePaper.Title, { children: [
        webhooksTitleContent,
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "primary", disabled: true, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "plus", className: "size-5" }),
          t("settings:webhooks.new_webhook")
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CollapsiblePaper.Content, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-md py-xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typo, { variant: "title2", className: "text-grey-primary", children: t("settings:webhooks.configuration_error") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Callout, { variant: "outlined", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "whitespace-pre-wrap", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trans, { t, i18nKey: "settings:webhooks.convoy_error", components: {
          DocLink: /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { href: webhooksSetupDocHref })
        } }) }) })
      ] }) })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(CollapsiblePaper.Container, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CollapsiblePaper.Title, { children: [
      webhooksTitleContent,
      isCreateWebhookAvailable ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { onClick: (e) => e.stopPropagation(), children: /* @__PURE__ */ jsxRuntimeExports.jsx(CreateWebhook, { webhookStatus: webhooksStatus, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "primary", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "plus", className: "size-5" }),
        t("settings:webhooks.new_webhook")
      ] }) }) }) : null
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CollapsiblePaper.Content, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Callout, { className: "mb-md lg:mb-lg", variant: "outlined", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "whitespace-pre-wrap", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trans, { t, i18nKey: "settings:webhooks.setup_documentation", components: {
        DocLink: /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { href: webhooksSetupDocHref })
      } }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Table.Container, { ...getContainerProps(), className: "max-h-96", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Table.Header, { headerGroups: table.getHeaderGroups() }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Table.Body, { ...getBodyProps(), children: rows.map((row) => {
          return /* @__PURE__ */ jsxRuntimeExports.jsx(Table.Row, { row }, row.id);
        }) })
      ] })
    ] })
  ] });
}
export {
  ApiKeys as component
};

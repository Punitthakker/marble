import { M as reactExports, Q as jsxRuntimeExports } from "./server.mjs";
import { u as useTranslation, I as Icon, aC as useTable, aD as Table, B as Button, d as cn } from "./Tabs-CzpyUi7T.mjs";
import { u as t$e, o as t$9, dj as tKeyForInboxUserRole, p as t$c, $ as t$a } from "./services-middleware-nMulUXHZ.mjs";
import { au as Route$z, L as Link, P as Page } from "./router-KSC-NEr8.mjs";
import { C as CollapsiblePaper } from "./Paper-HCUf48Ym.mjs";
import { F as FormErrorOrDescription } from "./FormErrorOrDescription-BncG6ljR.mjs";
import { F as FormInput } from "./FormInput-CsT_ETvr.mjs";
import { F as FormLabel } from "./FormLabel-DseYo_2t.mjs";
import { u as useLoaderRevalidator } from "./LoaderRevalidatorContext-BEuG7sHs.mjs";
import { m as updateOrganizationPayloadSchema, f as createInboxPayloadSchema } from "./settings-Cx4KA480.mjs";
import { r as updateOrganizationFn, t as createInboxFn } from "./settings-vUgGED-h.mjs";
import { u as useMutation } from "./useMutation-BOdeDeAR.mjs";
import { u as useServerFn } from "./useServerFn-oRH5Nw97.mjs";
import { g as getFieldErrors, h as handleSubmit } from "./form-D2XmDKeG.mjs";
import { u as useForm } from "./useForm-qNQ8S9xN.mjs";
import { u as useQueryClient } from "./query-BmG5BEas.mjs";
import { z as zt } from "./create-context-k6HmQ6bB.mjs";
import { H as HiddenInputs } from "./HiddenInputs-ClV3ikBJ.mjs";
import { M as Modal } from "./Modal-CpYmGWjB.mjs";
import { N as Nudge } from "./Nudge-Cmzwt2Be.mjs";
import { f as fromUUIDtoSUUID, n as number } from "./short-uuid-fTZYJj_k.mjs";
import { C as ColorPreview, U as UpdateTag, D as DeleteTag, a as CreateTag } from "./UpdateTag-BH5W6_v-.mjs";
import { c as createColumnHelper } from "./columnHelper-dCJ-kjEm.mjs";
import { t } from "./join-Ce2xPJwm.mjs";
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
import "./array-BFSjnO9c.mjs";
const useCreateInboxMutation = () => {
  const createInbox = useServerFn(createInboxFn);
  return useMutation({
    mutationKey: ["settings", "inboxes", "create"],
    mutationFn: async (payload) => createInbox({ data: payload })
  });
};
function CreateInbox({
  redirectRoutePath,
  onInboxCreated,
  className,
  size
}) {
  const { t: t2 } = useTranslation(["common", "settings"]);
  const [open, setOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal.Root, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.Trigger, { onClick: (e) => e.stopPropagation(), asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { className: cn("whitespace-nowrap", className), variant: "secondary", appearance: "stroked", size, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "new-inbox", className: "size-5 shrink-0" }),
      t2("settings:inboxes.new_inbox.create")
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.Content, { onClick: (e) => e.stopPropagation(), children: /* @__PURE__ */ jsxRuntimeExports.jsx(CreateInboxContent, { setOpen, redirectRoutePath, onInboxCreated }) })
  ] });
}
function CreateInboxContent({
  redirectRoutePath,
  setOpen,
  onInboxCreated
}) {
  const { t: t2 } = useTranslation(["common", "settings"]);
  const createInboxMutation = useCreateInboxMutation();
  const revalidate = useLoaderRevalidator();
  const queryClient = useQueryClient();
  const form = useForm({
    defaultValues: { name: "", redirectRoute: redirectRoutePath },
    validators: {
      onSubmit: createInboxPayloadSchema
    },
    onSubmit: ({ value, formApi }) => {
      if (formApi.state.isValid) {
        createInboxMutation.mutateAsync(value).then((result) => {
          zt.success(t2("common:success.save"));
          setOpen(false);
          queryClient.invalidateQueries({ queryKey: ["inboxes"] });
          revalidate();
          if (result?.inboxId) {
            onInboxCreated?.(result.inboxId);
          }
        }).catch(() => {
          zt.error(t2("common:errors.unknown"));
        });
      }
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "form",
    {
      onSubmit: (e) => {
        e.preventDefault();
        e.stopPropagation();
        form.handleSubmit();
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.Title, { children: t2("settings:inboxes.new_inbox.explain") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-lg p-lg", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(HiddenInputs, { redirectRoute: redirectRoutePath }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(form.Field, { name: "name", children: (field) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group flex flex-col gap-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { name: field.name, children: t2("settings:inboxes.new_inbox.name") }),
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
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal.Footer, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.FooterButton, { isCloseButton: true, label: t2("common:cancel") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Modal.FooterButton,
            {
              label: t2("settings:inboxes.new_inbox.create"),
              type: "submit",
              name: "create",
              disabled: createInboxMutation.isPending,
              leadingIcon: "new-inbox"
            }
          )
        ] })
      ]
    }
  );
}
const useUpdateOrganizationMutation = () => {
  const updateOrganization = useServerFn(updateOrganizationFn);
  return useMutation({
    mutationFn: async (payload) => updateOrganization({ data: payload })
  });
};
function UpdateOrganizationSettings({
  organizationId,
  autoAssignQueueLimit,
  isAutoAssignmentAvailable = false
}) {
  const { t: t2 } = useTranslation(["common", "settings"]);
  const [open, setOpen] = reactExports.useState(false);
  if (!isAutoAssignmentAvailable) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { className: "w-fit whitespace-nowrap", disabled: true, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "edit-square", className: "size-5" }),
        t2("common:edit")
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Nudge,
        {
          className: "absolute -top-1 -end-xs size-4",
          iconClass: "size-2.5",
          kind: "restricted",
          content: t2("settings:inboxes.auto_assign_queue_limit.nudge", {
            defaultValue: "N/A"
          })
        }
      )
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal.Root, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.Trigger, { asChild: true, onClick: (e) => e.stopPropagation(), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { className: "w-fit whitespace-nowrap", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "edit-square", className: "size-5" }),
      t2("common:edit")
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.Content, { onClick: (e) => e.stopPropagation(), children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      UpdateOrganizationSettingsContents,
      {
        organizationId,
        autoAssignQueueLimit,
        closeModal: () => setOpen(false)
      }
    ) })
  ] });
}
function UpdateOrganizationSettingsContents({
  organizationId,
  autoAssignQueueLimit,
  closeModal
}) {
  const { t: t2 } = useTranslation(["common", "settings"]);
  const updateOrganizationMutation = useUpdateOrganizationMutation();
  const revalidate = useLoaderRevalidator();
  const form = useForm({
    defaultValues: {
      organizationId,
      autoAssignQueueLimit
    },
    onSubmit: ({ value, formApi }) => {
      if (formApi.state.isValid) {
        updateOrganizationMutation.mutateAsync(value).then(() => {
          zt.success(t2("common:success.save"));
          closeModal();
          revalidate();
        }).catch(() => {
          zt.error(t2("common:errors.unknown"));
        });
      }
    },
    validators: {
      onSubmit: updateOrganizationPayloadSchema.pick({ organizationId: true, autoAssignQueueLimit: true }).required({ autoAssignQueueLimit: true })
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit(form), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.Title, { children: t2("settings:global_settings.title") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-surface-card flex flex-col gap-lg p-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      form.Field,
      {
        name: "autoAssignQueueLimit",
        validators: {
          onChange: number().min(0),
          onBlur: number().min(0)
        },
        children: (field) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group flex flex-col gap-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { name: field.name, children: t2("settings:global_settings.auto_assign_queue_limit") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            FormInput,
            {
              type: "number",
              min: 0,
              step: 1,
              placeholder: t2("settings:global_settings.auto_assign_queue_limit"),
              max: 1e3,
              name: field.name,
              onBlur: field.handleBlur,
              onChange: (e) => field.handleChange(+e.currentTarget.value),
              defaultValue: field.state.value,
              valid: field.state.meta.errors.length === 0
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(FormErrorOrDescription, { errors: getFieldErrors(field.state.meta.errors) })
        ] })
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal.Footer, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.FooterButton, { isCloseButton: true, label: t2("common:cancel") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Modal.FooterButton,
        {
          label: t2("common:save"),
          type: "submit",
          name: "update",
          disabled: updateOrganizationMutation.isPending
        }
      )
    ] })
  ] });
}
const inboxColumnHelper = createColumnHelper();
const tagColumnHelper = createColumnHelper();
function CaseManagerSettings() {
  const {
    t: t$5
  } = useTranslation(["common", "settings"]);
  const {
    isAutoAssignmentAvailable,
    inboxes,
    isCreateInboxAvailable,
    autoAssignQueueLimit,
    organizationId,
    canReadTags,
    tags,
    isCreateTagAvailable,
    isEditTagAvailable,
    isDeleteTagAvailable
  } = Route$z.useLoaderData();
  const inboxColumns = reactExports.useMemo(() => {
    return [inboxColumnHelper.accessor((row) => row.name, {
      id: "name",
      header: t$5("settings:inboxes.name"),
      size: 100
    }), inboxColumnHelper.accessor((row) => row.users, {
      id: "users",
      header: t$5("settings:inboxes.users"),
      size: 200,
      cell: ({
        getValue
      }) => {
        const users = getValue();
        if (!users) return null;
        return t$e(users, t$a((u) => u.role), t$c(), t$9(([role, users2]) => {
          return t$5(tKeyForInboxUserRole(role), {
            count: users2.length
          });
        }), t(", "));
      }
    }), inboxColumnHelper.accessor((row) => row.casesCount, {
      id: "cases",
      header: t$5("settings:inboxes.cases"),
      size: 100
    }), inboxColumnHelper.accessor((row) => row.hasCases, {
      id: "hasCases",
      header: t$5("settings:inboxes.hasCases"),
      size: 100,
      cell: ({
        getValue
      }) => {
        return getValue() ? /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "tick", className: "size-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "x", className: "size-4" });
      }
    })];
  }, [t$5]);
  const inboxTable = useTable({
    data: inboxes,
    columns: inboxColumns,
    columnResizeMode: "onChange",
    enableSorting: false,
    rowLink: ({
      id
    }) => /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/settings/inboxes/$inboxId", params: {
      inboxId: fromUUIDtoSUUID(id)
    } })
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Page.Content, { width: "readable", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CollapsiblePaper.Container, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CollapsiblePaper.Title, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1", children: t$5("settings:inboxes") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(UpdateOrganizationSettings, { isAutoAssignmentAvailable, organizationId, autoAssignQueueLimit }),
        isCreateInboxAvailable ? /* @__PURE__ */ jsxRuntimeExports.jsx(CreateInbox, { redirectRoutePath: "/settings/inboxes/$inboxId" }) : null
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CollapsiblePaper.Content, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table.Container, { ...inboxTable.getContainerProps(), className: "max-h-96", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Table.Header, { headerGroups: inboxTable.table.getHeaderGroups() }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Table.Body, { ...inboxTable.getBodyProps(), children: inboxTable.rows.map((row) => {
          return /* @__PURE__ */ jsxRuntimeExports.jsx(Table.Row, { row }, row.id);
        }) })
      ] }) })
    ] }),
    canReadTags ? /* @__PURE__ */ jsxRuntimeExports.jsx(TagsSection, { tags, isCreateTagAvailable, isEditTagAvailable, isDeleteTagAvailable }) : null
  ] });
}
function TagsSection({
  tags,
  isCreateTagAvailable,
  isEditTagAvailable,
  isDeleteTagAvailable
}) {
  const {
    t: t2
  } = useTranslation(["settings"]);
  const columns = reactExports.useMemo(() => {
    return [tagColumnHelper.accessor((row) => row.name, {
      id: "name",
      header: t2("settings:tags.name"),
      size: 200
    }), tagColumnHelper.accessor((row) => row.color, {
      id: "color",
      header: t2("settings:tags.color"),
      size: 100,
      cell: ({
        getValue
      }) => /* @__PURE__ */ jsxRuntimeExports.jsx(ColorPreview, { color: getValue() })
    }), tagColumnHelper.accessor((row) => row.cases_count, {
      id: "cases",
      header: t2("settings:tags.cases"),
      size: 200
    }), tagColumnHelper.accessor((row) => row.target, {
      id: "target",
      header: t2("settings:tags.target"),
      cell: ({
        cell
      }) => {
        return t2(`settings:tags.target.${cell.getValue()}`);
      },
      size: 100
    }), ...isEditTagAvailable || isDeleteTagAvailable ? [tagColumnHelper.display({
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
  }, [isDeleteTagAvailable, isEditTagAvailable, t2]);
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(CollapsiblePaper.Container, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CollapsiblePaper.Title, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1", children: t2("settings:tags") }),
      isCreateTagAvailable ? /* @__PURE__ */ jsxRuntimeExports.jsx(CreateTag, {}) : null
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CollapsiblePaper.Content, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table.Container, { ...getContainerProps(), className: "max-h-96", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Table.Header, { headerGroups: table.getHeaderGroups() }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Table.Body, { ...getBodyProps(), children: rows.map((row) => {
        return /* @__PURE__ */ jsxRuntimeExports.jsx(Table.Row, { className: "hover:bg-surface-row-hover group", row }, row.id);
      }) })
    ] }) })
  ] });
}
export {
  CaseManagerSettings as component
};

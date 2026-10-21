import { M as reactExports, Q as jsxRuntimeExports } from "./server.mjs";
import { u as useTranslation, aC as useTable, d as cn, aD as Table, I as Icon, B as Button, c as clsx, M as MenuCommand } from "./Tabs-CzpyUi7T.mjs";
import { av as Route$y, P as Page, T as Tooltip } from "./router-KSC-NEr8.mjs";
import { dj as tKeyForInboxUserRole } from "./services-middleware-nMulUXHZ.mjs";
import { S as Switch } from "./Switch-BV-_0Knl.mjs";
import { C as CollapsiblePaper } from "./Paper-HCUf48Ym.mjs";
import { N as Nudge } from "./Nudge-Cmzwt2Be.mjs";
import { F as FormErrorOrDescription } from "./FormErrorOrDescription-BncG6ljR.mjs";
import { F as FormLabel } from "./FormLabel-DseYo_2t.mjs";
import { u as useLoaderRevalidator } from "./LoaderRevalidatorContext-BEuG7sHs.mjs";
import { k as updateInboxUserPayloadSchema, u as updateInboxPayloadSchema, h as createInboxUserPayloadSchema } from "./settings-Cx4KA480.mjs";
import { v as editInboxUserAutoAssignFn, w as updateInboxUserFn, x as deleteInboxUserFn, y as updateInboxFn, z as createInboxUserFn, A as deleteInboxFn } from "./settings-vUgGED-h.mjs";
import { u as useMutation } from "./useMutation-BOdeDeAR.mjs";
import { u as useServerFn } from "./useServerFn-oRH5Nw97.mjs";
import { B as isAccessible } from "./feature-access-BSdB6UiC.mjs";
import { g as getFieldErrors } from "./form-D2XmDKeG.mjs";
import { u as useForm } from "./useForm-qNQ8S9xN.mjs";
import { m as matchSorter } from "./match-sorter.esm-BRMYSlZQ.mjs";
import { z as zt } from "./create-context-k6HmQ6bB.mjs";
import { M as Modal } from "./Modal-CpYmGWjB.mjs";
import { F as FormInput } from "./FormInput-CsT_ETvr.mjs";
import { S as SelectV2 } from "./Select-Dg3p9vJ0.mjs";
import { u as useOrganizationUsers } from "./organization-users-CEJGnALa.mjs";
import { c as createColumnHelper } from "./columnHelper-dCJ-kjEm.mjs";
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
import "./Collapsible-CKx8cmdD.mjs";
import "./index-22HmyALM.mjs";
import "./array-BFSjnO9c.mjs";
import "./isNullish-B8pc8Ntu.mjs";
const useCreateInboxUserMutation = () => {
  const createInboxUser = useServerFn(createInboxUserFn);
  return useMutation({
    mutationKey: ["settings", "inboxes", "inbox-users", "create"],
    mutationFn: async (payload) => createInboxUser({ data: payload })
  });
};
function CreateInboxUser({
  inboxId,
  users,
  inboxUserRoles,
  access,
  isAutoAssignmentAvailable = false
}) {
  const { t } = useTranslation(["common", "settings"]);
  const [open, setOpen] = reactExports.useState(false);
  const handleOnSuccess = () => {
    setOpen(false);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal.Root, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.Trigger, { asChild: true, onClick: (e) => e.stopPropagation(), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "plus", className: "size-5" }),
      t("settings:inboxes.inbox_details.add_member")
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.Content, { onClick: (e) => e.stopPropagation(), "aria-describedby": void 0, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      CreateInboxUserContent,
      {
        currentInboxId: inboxId,
        users,
        inboxUserRoles,
        access,
        isAutoAssignmentAvailable,
        onSuccess: handleOnSuccess
      }
    ) })
  ] });
}
function CreateInboxUserContent({
  currentInboxId,
  users,
  inboxUserRoles,
  access,
  isAutoAssignmentAvailable = false,
  onSuccess
}) {
  const { t } = useTranslation(["common", "settings"]);
  const createInboxUserMutation = useCreateInboxUserMutation();
  const revalidate = useLoaderRevalidator();
  const [searchValue, setSearchValue] = reactExports.useState("");
  const [userMenuOpen, setUserMenuOpen] = reactExports.useState(false);
  const [roleMenuOpen, setRoleMenuOpen] = reactExports.useState(false);
  const deferredSearchValue = reactExports.useDeferredValue(searchValue);
  const filteredUsers = reactExports.useMemo(
    () => matchSorter(users, deferredSearchValue, {
      keys: [(u) => `${u.firstName ?? ""} ${u.lastName ?? ""}`.trim(), "firstName", "lastName"]
    }),
    [deferredSearchValue, users]
  );
  const form = useForm({
    defaultValues: {
      userId: "",
      inboxId: currentInboxId,
      role: "admin",
      autoAssignable: false
    },
    onSubmit: ({ value }) => {
      createInboxUserMutation.mutateAsync(value).then(() => {
        onSuccess();
        revalidate();
      }).catch(() => {
        zt.error(t("common:errors.unknown"));
      });
    },
    validators: {
      onSubmit: createInboxUserPayloadSchema
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
        /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.Title, { children: t("settings:inboxes.inbox_details.add_member") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-surface-card flex flex-col gap-lg p-lg", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            form.Field,
            {
              name: "userId",
              validators: {
                onChange: createInboxUserPayloadSchema.shape.userId
              },
              children: (field) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group flex flex-col gap-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { name: field.name, children: t("settings:inboxes.inbox_details.user") }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(MenuCommand.Menu, { open: userMenuOpen, onOpenChange: setUserMenuOpen, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Trigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.SelectButton, { hasError: field.state.meta.errors.length > 0, className: "w-full", children: users.find((u) => u.userId === field.state.value) ? `${users.find((u) => u.userId === field.state.value)?.firstName ?? ""} ${users.find((u) => u.userId === field.state.value)?.lastName ?? ""}` : "" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(MenuCommand.Content, { sameWidth: true, align: "start", className: "min-w-(--radix-popover-trigger-width)", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Combobox, { placeholder: t("common:search"), onValueChange: setSearchValue }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(MenuCommand.List, { className: "max-h-60", children: [
                      filteredUsers.map(({ userId, firstName, lastName }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                        MenuCommand.Item,
                        {
                          value: `${firstName ?? ""} ${lastName ?? ""}`.trim(),
                          onSelect: () => {
                            field.handleChange(userId);
                            setUserMenuOpen(false);
                            setSearchValue("");
                          },
                          children: `${firstName} ${lastName}`
                        },
                        userId
                      )),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Empty, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center p-sm", children: t("common:no_results", { defaultValue: "" }) }) })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(FormErrorOrDescription, { errors: getFieldErrors(field.state.meta.errors) })
              ] })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            form.Field,
            {
              name: "role",
              validators: {
                onChange: createInboxUserPayloadSchema.shape.role
              },
              children: (field) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group flex flex-col gap-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(FormLabel, { name: field.name, className: "flex gap-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: clsx({ "text-grey-disabled": access === "restricted" }), children: t("settings:inboxes.inbox_details.role") }),
                  access === "allowed" ? null : /* @__PURE__ */ jsxRuntimeExports.jsx(Nudge, { content: t("settings:users.role.nudge"), className: "size-6", kind: access })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(MenuCommand.Menu, { open: roleMenuOpen, onOpenChange: setRoleMenuOpen, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Trigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    MenuCommand.SelectButton,
                    {
                      hasError: field.state.meta.errors.length > 0,
                      className: "w-full",
                      disabled: !isAccessible(access),
                      children: field.state.value ? t(tKeyForInboxUserRole(field.state.value)) : ""
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Content, { sameWidth: true, align: "start", className: "min-w-(--radix-popover-trigger-width)", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.List, { children: inboxUserRoles.map((role) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    MenuCommand.Item,
                    {
                      value: role,
                      onSelect: () => {
                        field.handleChange(role);
                        setRoleMenuOpen(false);
                      },
                      children: t(tKeyForInboxUserRole(role))
                    },
                    role
                  )) }) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(FormErrorOrDescription, { errors: getFieldErrors(field.state.meta.errors) })
              ] })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            form.Field,
            {
              name: "autoAssignable",
              validators: {
                onChange: createInboxUserPayloadSchema.shape.autoAssignable
              },
              children: (field) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group flex justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { name: field.name, className: "flex items-center gap-sm", children: t("settings:inboxes.inbox_details.auto_assign_enabled.label") }),
                  !isAutoAssignmentAvailable ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Nudge,
                    {
                      className: "size-5",
                      kind: "restricted",
                      content: t("settings:inboxes.auto_assign_queue_limit.nudge", {
                        defaultValue: "N/A"
                      })
                    }
                  ) : null
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Switch,
                  {
                    checked: isAutoAssignmentAvailable ? field.state.value : false,
                    onCheckedChange: field.handleChange,
                    disabled: !isAutoAssignmentAvailable
                  }
                )
              ] })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal.Footer, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.FooterButton, { isCloseButton: true, label: t("common:cancel") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Modal.FooterButton,
            {
              label: t("settings:inboxes.inbox_details.create_user"),
              type: "submit",
              name: "create",
              leadingIcon: "new-inbox",
              isLoading: createInboxUserMutation.isPending
            }
          )
        ] })
      ]
    }
  );
}
const useDeleteInboxMutation = () => {
  const deleteInbox = useServerFn(deleteInboxFn);
  return useMutation({
    mutationKey: ["settings", "inboxes", "delete"],
    mutationFn: async (payload) => deleteInbox({ data: payload })
  });
};
function DeleteInbox({ inbox, disabled }) {
  const { t } = useTranslation(["common", "settings"]);
  const [open, setOpen] = reactExports.useState(false);
  const handleOnSettled = () => setOpen(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal.Root, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.Trigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "destructive", name: "delete", disabled, className: "w-fit", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "delete", className: "size-5", "aria-label": t("settings:inboxes.delete_inbox") }),
      t("settings:inboxes.delete_inbox")
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.Content, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DeleteInboxContent, { inboxId: inbox.id, onSettled: handleOnSettled }) })
  ] });
}
const DeleteInboxContent = ({ inboxId, onSettled }) => {
  const { t } = useTranslation(["common", "settings"]);
  const deleteInboxMutation = useDeleteInboxMutation();
  const revalidate = useLoaderRevalidator();
  const handleDeleteInbox = () => {
    deleteInboxMutation.mutateAsync(
      { inboxId },
      {
        onError: (error) => zt.error(error.message),
        onSuccess: () => revalidate(),
        onSettled: () => onSettled()
      }
    );
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.Title, { children: t("settings:inboxes.delete_inbox") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-surface-card flex flex-col gap-lg p-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-s flex flex-1 flex-col gap-md", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { name: "inboxId", value: inboxId, type: "hidden" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center", children: t("settings:inboxes.delete_inbox.content") })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal.Footer, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.FooterButton, { isCloseButton: true, label: t("common:cancel") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Modal.FooterButton,
        {
          label: t("common:delete"),
          variant: "destructive",
          onClick: handleDeleteInbox,
          disabled: deleteInboxMutation.isPending,
          leadingIcon: "delete"
        }
      )
    ] })
  ] });
};
const useDeleteInboxUserMutation = () => {
  const deleteInboxUser = useServerFn(deleteInboxUserFn);
  return useMutation({
    mutationKey: ["settings", "inboxes", "inbox-users", "delete"],
    mutationFn: async (payload) => deleteInboxUser({ data: payload })
  });
};
function DeleteInboxUser({ inboxUser }) {
  const { t } = useTranslation(["common", "settings"]);
  const [open, setOpen] = reactExports.useState(false);
  const handleOnSuccess = () => {
    setOpen(false);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal.Root, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.Trigger, { className: "cursor-pointer block hover:text-red-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "delete", className: "size-6 shrink-0", "aria-label": t("settings:inboxes.inbox_user.delete") }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.Content, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DeleteInboxUserContent, { inboxUser, onSuccess: handleOnSuccess }) })
  ] });
}
const DeleteInboxUserContent = ({ inboxUser, onSuccess }) => {
  const { t } = useTranslation(["common", "settings"]);
  const deleteInboxUserMutation = useDeleteInboxUserMutation();
  const revalidate = useLoaderRevalidator();
  const handleDeleteInboxUser = () => {
    deleteInboxUserMutation.mutateAsync({ inboxId: inboxUser.inboxId, inboxUserId: inboxUser.id }).then((res) => {
      if (!res) {
        onSuccess();
      }
      revalidate();
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.Title, { children: t("settings:inboxes.inbox_user.delete") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-surface-card flex flex-col gap-lg p-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-s flex flex-1 flex-col gap-md", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { name: "inboxUserId", value: inboxUser.id, type: "hidden" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { name: "inboxId", value: inboxUser.inboxId, type: "hidden" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center", children: t("settings:inboxes.inbox_user.delete.content") })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal.Footer, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.FooterButton, { isCloseButton: true, label: t("common:cancel") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Modal.FooterButton,
        {
          label: t("common:delete"),
          variant: "destructive",
          onClick: handleDeleteInboxUser,
          disabled: deleteInboxUserMutation.isPending,
          leadingIcon: "delete"
        }
      )
    ] })
  ] });
};
const useUpdateInboxMutation = () => {
  const updateInbox = useServerFn(updateInboxFn);
  return useMutation({
    mutationKey: ["settings", "inboxes", "update"],
    mutationFn: async (payload) => updateInbox({ data: payload })
  });
};
function UpdateInbox({
  inbox,
  escalationInboxes,
  redirectRoutePath,
  isAutoAssignmentAvailable = false
}) {
  const { t } = useTranslation(["common", "settings"]);
  const [open, setOpen] = reactExports.useState(false);
  const handleOnSuccess = () => {
    setOpen(false);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal.Root, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.Trigger, { asChild: true, onClick: (e) => e.stopPropagation(), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { className: "w-fit whitespace-nowrap", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "edit-square", className: "size-5" }),
      t("settings:inboxes.update_inbox")
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.Content, { onClick: (e) => e.stopPropagation(), children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      UpdateInboxContent,
      {
        inbox,
        escalationInboxes,
        redirectRoutePath,
        isAutoAssignmentAvailable,
        onSuccess: handleOnSuccess
      }
    ) })
  ] });
}
function UpdateInboxContent({
  inbox,
  escalationInboxes,
  redirectRoutePath,
  isAutoAssignmentAvailable = false,
  onSuccess
}) {
  const { t } = useTranslation(["common", "settings"]);
  const updateInboxMutation = useUpdateInboxMutation();
  const revalidate = useLoaderRevalidator();
  const [isEscalationInboxOpen, setEscalationOpen] = reactExports.useState(false);
  const otherInboxes = escalationInboxes.filter((i) => i.id !== inbox.id);
  const form = useForm({
    defaultValues: {
      ...inbox,
      escalationInboxId: inbox.escalationInboxId ?? null,
      redirectRoute: redirectRoutePath
    },
    onSubmit: ({ value, formApi }) => {
      if (formApi.state.isValid) {
        updateInboxMutation.mutateAsync(value).then(() => {
          onSuccess();
          revalidate();
        }).catch(() => {
          zt.error(t("common:errors.unknown"));
        });
      }
    },
    validators: {
      onSubmit: updateInboxPayloadSchema
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
        /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.Title, { children: t("settings:inboxes.update_inbox") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-surface-card flex flex-col gap-lg p-lg", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            form.Field,
            {
              name: "name",
              validators: {
                onChange: updateInboxPayloadSchema.shape.name
              },
              children: (field) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group flex flex-col gap-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { name: field.name, children: t("settings:inboxes.name") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  FormInput,
                  {
                    type: "text",
                    name: field.name,
                    onBlur: field.handleBlur,
                    onChange: (e) => field.handleChange(e.currentTarget.value),
                    defaultValue: field.state.value,
                    valid: field.state.meta.errors.length === 0
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(FormErrorOrDescription, { errors: getFieldErrors(field.state.meta.errors) })
              ] })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            form.Field,
            {
              name: "escalationInboxId",
              validators: {
                onChange: updateInboxPayloadSchema.shape.escalationInboxId
              },
              children: (field) => {
                const selectedInbox = escalationInboxes.find((inbox2) => inbox2.id === field.state.value);
                return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group flex flex-col gap-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { name: field.name, children: t("settings:inboxes.escalation_inbox") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(MenuCommand.Menu, { open: isEscalationInboxOpen, onOpenChange: setEscalationOpen, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Trigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.SelectButton, { children: selectedInbox ? selectedInbox.name : t("settings:inboxes.inbox_details.no_escalation_inbox") }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Content, { align: "start", sameWidth: true, sideOffset: 4, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(MenuCommand.List, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Item, { value: "", onSelect: () => field.handleChange(null), children: t("settings:inboxes.inbox_details.no_escalation_inbox") }),
                      otherInboxes.map((inbox2) => /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Item, { value: inbox2.id, onSelect: field.handleChange, children: inbox2.name }, inbox2.id))
                    ] }) })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FormErrorOrDescription, { errors: getFieldErrors(field.state.meta.errors) })
                ] });
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            form.Field,
            {
              name: "autoAssignEnabled",
              validators: {
                onChange: updateInboxPayloadSchema.shape.autoAssignEnabled
              },
              children: (field) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group flex justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { name: field.name, children: t("settings:inboxes.inbox_details.auto_assign_enabled.label") }),
                  !isAutoAssignmentAvailable ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Nudge,
                    {
                      className: "size-5",
                      kind: "restricted",
                      content: t("settings:inboxes.auto_assign_queue_limit.nudge", {
                        defaultValue: "N/A"
                      })
                    }
                  ) : null
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Switch,
                  {
                    checked: isAutoAssignmentAvailable ? field.state.value : false,
                    onCheckedChange: field.handleChange,
                    disabled: !isAutoAssignmentAvailable
                  }
                )
              ] })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal.Footer, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.FooterButton, { isCloseButton: true, label: t("common:cancel") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Modal.FooterButton,
            {
              label: t("common:save"),
              type: "submit",
              name: "update",
              disabled: updateInboxMutation.isPending
            }
          )
        ] })
      ]
    }
  );
}
const useUpdateInboxUserMutation = () => {
  const updateInboxUser = useServerFn(updateInboxUserFn);
  return useMutation({
    mutationKey: ["settings", "inboxes", "inbox-users", "update"],
    mutationFn: async (payload) => updateInboxUser({ data: payload })
  });
};
function UpdateInboxUser({
  inboxUser,
  inboxUserRoles,
  access
}) {
  const { t } = useTranslation(["common", "settings"]);
  const [open, setOpen] = reactExports.useState(false);
  const handleOnSuccess = () => {
    setOpen(false);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal.Root, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.Trigger, { className: "cursor-pointer block", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "edit-square", className: "size-6 shrink-0", "aria-label": t("settings:tags.update_tag") }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.Content, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      UpdateInboxUserContent,
      {
        currentInboxUser: inboxUser,
        inboxUserRoles,
        access,
        onSuccess: handleOnSuccess
      }
    ) })
  ] });
}
function UpdateInboxUserContent({
  currentInboxUser,
  inboxUserRoles,
  access,
  onSuccess
}) {
  const { t } = useTranslation(["common", "settings"]);
  const updateInboxUserMutation = useUpdateInboxUserMutation();
  const revalidate = useLoaderRevalidator();
  const form = useForm({
    defaultValues: currentInboxUser,
    onSubmit: ({ value, formApi }) => {
      if (formApi.state.isValid) {
        updateInboxUserMutation.mutateAsync(value).then(() => {
          onSuccess();
          revalidate();
        }).catch(() => {
          zt.error(t("common:errors.unknown"));
        });
      }
    },
    validators: {
      onSubmit: updateInboxUserPayloadSchema
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
        /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.Title, { children: t("settings:inboxes.inbox_user.update") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-surface-card flex flex-col gap-lg p-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          form.Field,
          {
            name: "role",
            validators: {
              onChange: updateInboxUserPayloadSchema.shape.role
            },
            children: (field) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group flex flex-col gap-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(FormLabel, { name: field.name, className: "flex gap-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: clsx({
                      "text-grey-disabled": access === "restricted"
                    }),
                    children: t("settings:inboxes.inbox_details.role")
                  }
                ),
                access === "allowed" ? null : /* @__PURE__ */ jsxRuntimeExports.jsx(Nudge, { content: t("settings:users.role.nudge"), className: "size-6", kind: access })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                SelectV2,
                {
                  value: field.state.value,
                  onChange: (value) => field.handleChange(value),
                  placeholder: t("settings:inboxes.inbox_details.role"),
                  disabled: !isAccessible(access),
                  options: inboxUserRoles.map((role) => ({
                    label: t(tKeyForInboxUserRole(role)),
                    value: role
                  }))
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(FormErrorOrDescription, { errors: getFieldErrors(field.state.meta.errors) })
            ] })
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal.Footer, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.FooterButton, { isCloseButton: true, label: t("common:cancel") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Modal.FooterButton,
            {
              label: t("common:save"),
              type: "submit",
              name: "update",
              disabled: updateInboxUserMutation.isPending
            }
          )
        ] })
      ]
    }
  );
}
function useEditInboxUserAutoAssignMutation() {
  const editInboxUserAutoAssign = useServerFn(editInboxUserAutoAssignFn);
  return useMutation({
    mutationFn: async (payload) => editInboxUserAutoAssign({ data: payload })
  });
}
const columnHelper = createColumnHelper();
function Inbox() {
  const {
    caseCount,
    hasCases,
    inbox,
    escalationInboxes,
    escalationInbox,
    inboxUserRoles,
    entitlements,
    isEditInboxAvailable,
    isDeleteInboxAvailable,
    isCreateInboxUserAvailable,
    isEditInboxUserAvailable,
    isDeleteInboxUserAvailable,
    isAutoAssignmentAvailable
  } = Route$y.useLoaderData();
  const {
    t
  } = useTranslation(["settings", "common"]);
  const {
    orgUsers
  } = useOrganizationUsers();
  const editAutoAssignMutation = useEditInboxUserAutoAssignMutation();
  const columns = reactExports.useMemo(() => {
    return [columnHelper.accessor((row) => row.userId, {
      id: "name",
      header: t("settings:inboxes.name"),
      size: 200,
      cell: ({
        getValue
      }) => {
        const user = orgUsers.find((u) => u.userId === getValue());
        if (!user) return;
        return `${user.firstName} ${user.lastName}`;
      }
    }), columnHelper.accessor((row) => row.role, {
      id: "role",
      header: t("settings:inboxes.inbox_details.role"),
      size: 200,
      cell: ({
        getValue
      }) => t(tKeyForInboxUserRole(getValue()))
    }), ...isAutoAssignmentAvailable ? [columnHelper.accessor((row) => row.autoAssignable, {
      id: "autoAssignable",
      header: t("settings:inboxes.inbox_details.auto_assign_enabled.label"),
      size: 150,
      cell: ({
        getValue,
        row
      }) => {
        const [value, setValue] = reactExports.useState(getValue());
        const handleChange = (checked) => {
          setValue(checked);
          editAutoAssignMutation.mutateAsync({
            id: row.original.id,
            autoAssignable: checked
          });
        };
        return isEditInboxUserAvailable ? /* @__PURE__ */ jsxRuntimeExports.jsx(Switch, { checked: value, onCheckedChange: handleChange, disabled: !isEditInboxUserAvailable }) : getValue() ? t("settings:inboxes.inbox_details.auto_assign_enabled") : t("settings:inboxes.inbox_details.auto_assign_disabled");
      }
    })] : [], ...isEditInboxUserAvailable || isDeleteInboxUserAvailable ? [columnHelper.display({
      id: "actions",
      size: 100,
      cell: ({
        cell
      }) => {
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-sm", children: [
          isEditInboxUserAvailable ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "group-hover/row:text-grey-primary focus-within:text-grey-primary text-transparent cursor-pointer", children: /* @__PURE__ */ jsxRuntimeExports.jsx(UpdateInboxUser, { inboxUser: cell.row.original, inboxUserRoles, access: entitlements.userRoles }) }) : null,
          isDeleteInboxUserAvailable ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "group-hover/row:text-grey-primary focus-within:text-grey-primary text-transparent cursor-pointer", children: /* @__PURE__ */ jsxRuntimeExports.jsx(DeleteInboxUser, { inboxUser: cell.row.original }) }) : null
        ] });
      }
    })] : []];
  }, [inboxUserRoles, isDeleteInboxUserAvailable, isEditInboxUserAvailable, orgUsers, t, entitlements.userRoles]);
  const {
    table,
    getBodyProps,
    rows,
    getContainerProps
  } = useTable({
    data: inbox.users ?? [],
    columns,
    columnResizeMode: "onChange",
    manualSorting: false
  });
  const nonInboxUsers = orgUsers.filter((user) => !inbox.users?.some((u) => u.userId === user.userId));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Page.Content, { width: "readable", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CollapsiblePaper.Container, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CollapsiblePaper.Title, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1", children: t("settings:inboxes.inbox_details.title") }),
        isEditInboxAvailable ? /* @__PURE__ */ jsxRuntimeExports.jsx(UpdateInbox, { inbox, escalationInboxes, redirectRoutePath: "/settings/inboxes/$inboxId", isAutoAssignmentAvailable }) : null
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CollapsiblePaper.Content, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid auto-rows-fr grid-cols-[max-content_1fr] items-center gap-x-10 gap-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold", children: t("settings:inboxes.name") }),
        inbox.name,
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold", children: t("settings:inboxes.inbox_details.case_count") }),
        caseCount,
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold", children: t("settings:inboxes.inbox_details.has_cases") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Switch, { checked: hasCases, disabled: true }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold", children: t("settings:inboxes.inbox_details.escalation_inbox") }),
        escalationInbox?.name ?? t("settings:inboxes.inbox_details.no_escalation_inbox"),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold flex items-center gap-sm", children: [
          t("settings:inboxes.inbox_details.auto_assign_enabled.label"),
          !isAutoAssignmentAvailable ? /* @__PURE__ */ jsxRuntimeExports.jsx(Nudge, { className: "size-5", kind: "restricted", content: t("settings:inboxes.auto_assign_queue_limit.nudge", {
            defaultValue: "N/A"
          }) }) : null
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn({
          "blur-xs": !isAutoAssignmentAvailable
        }), children: inbox.autoAssignEnabled ? t("settings:inboxes.inbox_details.auto_assign_enabled") : t("settings:inboxes.inbox_details.auto_assign_disabled") })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CollapsiblePaper.Container, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CollapsiblePaper.Title, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1", children: t("settings:inboxes.inbox_details.members") }),
        isCreateInboxUserAvailable ? /* @__PURE__ */ jsxRuntimeExports.jsx(CreateInboxUser, { inboxId: inbox.id, users: nonInboxUsers, inboxUserRoles, access: entitlements.userRoles, isAutoAssignmentAvailable }) : null
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CollapsiblePaper.Content, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table.Container, { ...getContainerProps(), className: "max-h-96", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Table.Header, { headerGroups: table.getHeaderGroups() }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Table.Body, { ...getBodyProps(), children: rows.map((row) => {
          return /* @__PURE__ */ jsxRuntimeExports.jsx(Table.Row, { row }, row.id);
        }) })
      ] }) })
    ] }),
    isDeleteInboxAvailable ? !hasCases ? /* @__PURE__ */ jsxRuntimeExports.jsx(DeleteInbox, { inbox }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip.Default, { content: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "p-sm", children: t("settings:inboxes.inbox_details.delete_inbox.tooltip") }), children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-fit", children: /* @__PURE__ */ jsxRuntimeExports.jsx(DeleteInbox, { inbox, disabled: true }) }) }) : null
  ] });
}
export {
  Inbox as component
};

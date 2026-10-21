import { M as reactExports, Q as jsxRuntimeExports } from "./server.mjs";
import { E as ExternalLink } from "./ExternalLink-BlVgwkVd.mjs";
import { F as FormErrorOrDescription } from "./FormErrorOrDescription-BncG6ljR.mjs";
import { F as FormInput } from "./FormInput-CsT_ETvr.mjs";
import { F as FormLabel } from "./FormLabel-DseYo_2t.mjs";
import { N as Nudge } from "./Nudge-Cmzwt2Be.mjs";
import { S as SelectEvents } from "./EventTypes-BNv8nQ3g.mjs";
import { u as useLoaderRevalidator } from "./LoaderRevalidatorContext-BEuG7sHs.mjs";
import { w as createWebhookPayloadSchema } from "./settings-Cx4KA480.mjs";
import { b as createWebhookFn } from "./settings-vUgGED-h.mjs";
import { u as useMutation } from "./useMutation-BOdeDeAR.mjs";
import { u as useServerFn } from "./useServerFn-oRH5Nw97.mjs";
import { a as webhooksEventsDocHref } from "./documentation-href-DY9fs71n.mjs";
import { g as getFieldErrors } from "./form-D2XmDKeG.mjs";
import { u as useForm } from "./useForm-qNQ8S9xN.mjs";
import { z as zt } from "./create-context-k6HmQ6bB.mjs";
import { a2 as M } from "./services-middleware-nMulUXHZ.mjs";
import { u as useTranslation, T as Trans } from "./Tabs-CzpyUi7T.mjs";
import { M as Modal } from "./Modal-CpYmGWjB.mjs";
const useCreateWebhookMutation = () => {
  const createWebhook = useServerFn(createWebhookFn);
  return useMutation({
    mutationFn: async (payload) => createWebhook({ data: payload })
  });
};
function CreateWebhook({
  children,
  webhookStatus
}) {
  const [open, setOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal.Root, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.Trigger, { asChild: true, children }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.Content, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CreateWebhookContent, { webhookStatus, onSuccess: () => setOpen(false) }) })
  ] });
}
function CreateWebhookContent({
  webhookStatus,
  onSuccess
}) {
  const { t } = useTranslation(["common", "settings"]);
  const createWebhookMutation = useCreateWebhookMutation();
  const revalidate = useLoaderRevalidator();
  const form = useForm({
    defaultValues: {
      url: "",
      eventTypes: []
    },
    onSubmit: ({ value, formApi }) => {
      if (formApi.state.isValid) {
        createWebhookMutation.mutateAsync(value).then(() => {
          onSuccess();
          revalidate();
        }).catch(() => {
          zt.error(t("common:errors.unknown"));
        });
      }
    },
    validators: {
      onSubmit: createWebhookPayloadSchema
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
        /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.Title, { children: t("settings:webhooks.new_webhook") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-lg p-lg", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            form.Field,
            {
              name: "url",
              validators: {
                onChange: createWebhookPayloadSchema.shape.url
              },
              children: (field) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-start gap-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { name: field.name, children: t("settings:webhooks.url") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  FormInput,
                  {
                    type: "url",
                    name: field.name,
                    onBlur: field.handleBlur,
                    onChange: (e) => field.handleChange(e.currentTarget.value),
                    defaultValue: field.state.value,
                    valid: field.state.meta.errors.length === 0,
                    className: "w-full"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(FormErrorOrDescription, { errors: getFieldErrors(field.state.meta.errors) })
              ] })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            form.Field,
            {
              name: "eventTypes",
              validators: {
                onChange: createWebhookPayloadSchema.shape.eventTypes
              },
              children: (field) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-start gap-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(FormLabel, { name: field.name, className: "flex items-center gap-sm", children: [
                  t("settings:webhooks.event_types"),
                  M(webhookStatus).with("allowed", () => null).otherwise((status) => /* @__PURE__ */ jsxRuntimeExports.jsx(Nudge, { kind: status, content: t("settings:webhooks.nudge"), className: "size-6" }))
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  SelectEvents,
                  {
                    selectedEventTypes: field.state.value,
                    className: "w-full",
                    name: field.name,
                    onBlur: field.handleBlur,
                    onChange: (types) => field.handleChange(types),
                    webhookStatus
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  FormErrorOrDescription,
                  {
                    errors: getFieldErrors(field.state.meta.errors),
                    description: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "whitespace-pre-wrap", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Trans,
                      {
                        t,
                        i18nKey: "settings:webhooks.events_documentation",
                        components: {
                          DocLink: /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { href: webhooksEventsDocHref })
                        }
                      }
                    ) })
                  }
                )
              ] })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            form.Field,
            {
              name: "httpTimeout",
              validators: {
                onChange: createWebhookPayloadSchema.shape.httpTimeout
              },
              children: (field) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-start gap-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { name: field.name, children: t("settings:webhooks.http_timeout") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  FormInput,
                  {
                    type: "number",
                    name: field.name,
                    onBlur: field.handleBlur,
                    onChange: (e) => field.handleChange(+e.currentTarget.value),
                    defaultValue: field.state.value,
                    valid: field.state.meta.errors.length === 0,
                    className: "w-full"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  FormErrorOrDescription,
                  {
                    errors: getFieldErrors(field.state.meta.errors),
                    description: t("settings:webhooks.http_timeout.description")
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
              label: t("settings:webhooks.new_webhook.create"),
              type: "submit",
              name: "create",
              isLoading: createWebhookMutation.isPending,
              leadingIcon: "plus"
            }
          )
        ] })
      ]
    }
  );
}
export {
  CreateWebhook as C
};

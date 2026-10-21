import { Q as jsxRuntimeExports, M as reactExports } from "./server.mjs";
import { F as FormError } from "./FormError-B7yEmqP1.mjs";
import { Q as Route$10, P as Page } from "./router-KSC-NEr8.mjs";
import { C as CollapsiblePaper } from "./Paper-HCUf48Ym.mjs";
import { u as useLoaderRevalidator } from "./LoaderRevalidatorContext-BEuG7sHs.mjs";
import { l as updateAllowedNetworksPayloadSchema } from "./settings-Cx4KA480.mjs";
import { u as updateAllowedNetworksFn } from "./settings-vUgGED-h.mjs";
import { u as useMutation } from "./useMutation-BOdeDeAR.mjs";
import { u as useServerFn } from "./useServerFn-oRH5Nw97.mjs";
import { h as handleSubmit } from "./form-D2XmDKeG.mjs";
import { u as useStore } from "./useStore-C3gZU5bu.mjs";
import { u as useForm } from "./useForm-qNQ8S9xN.mjs";
import { z as zt } from "./create-context-k6HmQ6bB.mjs";
import { u as useTranslation, B as Button, a6 as Input, I as Icon } from "./Tabs-CzpyUi7T.mjs";
import { M as Modal } from "./Modal-CpYmGWjB.mjs";
import { r } from "./difference-BO2TixOr.mjs";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "./query-BmG5BEas.mjs";
import "./security-headers.server-BdP3HrPp.mjs";
import "./services-middleware-nMulUXHZ.mjs";
import "./short-uuid-fTZYJj_k.mjs";
import "node:crypto";
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
import "./use-callback-ref-DoQNLci-.mjs";
import "./sharpstate.es-C0BW2AZi.mjs";
import "./Collapsible-CKx8cmdD.mjs";
import "./index-22HmyALM.mjs";
import "./array-BFSjnO9c.mjs";
const useUpdateAllowedNetworks = (organizationId) => {
  const updateAllowedNetworks = useServerFn(updateAllowedNetworksFn);
  return useMutation({
    mutationKey: ["settings", "organization", "update-allowed-networks", organizationId],
    mutationFn: async (payload) => updateAllowedNetworks({ data: { ...payload, organizationId } })
  });
};
const ConfirmSaveModal = ({ onConfirm, children }) => {
  const { t } = useTranslation(["common", "settings"]);
  const [open, setOpen] = reactExports.useState(false);
  const handleSaveClick = () => {
    setOpen(false);
    onConfirm();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal.Root, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.Trigger, { asChild: true, children }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal.Content, { onClick: (e) => e.stopPropagation(), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.Title, { children: t("settings:ip_whitelisting.save") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-lg p-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-s flex flex-1 flex-col gap-md", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center", children: t("settings:ip_whitelisting.save_confirm.content") }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal.Footer, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.FooterButton, { isCloseButton: true, label: t("common:cancel") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.FooterButton, { label: t("common:save"), onClick: handleSaveClick })
      ] })
    ] })
  ] });
};
const IpWhitelistingSettingsPage = ({
  allowedNetworks,
  organizationId
}) => {
  const { t } = useTranslation(["common", "settings"]);
  const updateAllowedNetworksMutation = useUpdateAllowedNetworks(organizationId);
  const revalidate = useLoaderRevalidator();
  const form = useForm({
    defaultValues: {
      allowedNetworks
    },
    onSubmit: ({ value }) => {
      updateAllowedNetworksMutation.mutateAsync(value).then((res) => {
        if (res && "error" in res) {
          zt.error(t("settings:ip_whitelisting.errors.ip_not_in_range"));
          return;
        }
        if (res?.subnets) {
          form.setFieldValue("allowedNetworks", res.subnets);
        }
        zt.success(t("common:success.save"));
        revalidate();
      }).catch(() => {
        zt.error(t("common:errors.unknown"));
      });
    },
    validators: {
      onSubmit: updateAllowedNetworksPayloadSchema
    }
  });
  const removedNetworks = useStore(form.store, (state) => r(allowedNetworks, state.values.allowedNetworks));
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Page.Content, { width: "readable", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CollapsiblePaper.Container, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CollapsiblePaper.Title, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1", children: t("settings:ip_whitelisting") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          variant: "secondary",
          appearance: "stroked",
          onClick: (e) => {
            e.stopPropagation();
            form.reset();
          },
          children: t("settings:ip_whitelisting.reset")
        }
      ),
      removedNetworks.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(ConfirmSaveModal, { onConfirm: () => form.handleSubmit(), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "primary", onClick: (e) => e.stopPropagation(), children: t("settings:ip_whitelisting.save") }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "primary", type: "submit", form: "ip-whitelisting-form", onClick: (e) => e.stopPropagation(), children: t("settings:ip_whitelisting.save") })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CollapsiblePaper.Content, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "form",
      {
        onSubmit: handleSubmit(form),
        className: "grid grid-cols-[300px_1fr] gap-sm items-center",
        id: "ip-whitelisting-form",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(form.Field, { name: "allowedNetworks", mode: "array", children: (networksField) => /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          networksField.state.value.map((_, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(form.Field, { name: `allowedNetworks[${idx}]`, children: (field) => /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                value: field.state.value,
                onChange: (e) => {
                  field.handleChange(e.target.value);
                  networksField.validate("change");
                },
                placeholder: t("settings:ip_whitelisting.placeholder")
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { mode: "icon", variant: "secondary", onClick: () => networksField.removeValue(idx), children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Icon,
                {
                  icon: "delete",
                  className: "size-3.5 shrink-0 cursor-pointer",
                  "aria-label": t("settings:ip_whitelisting.delete")
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                FormError,
                {
                  field,
                  asString: true,
                  translations: {
                    invalid_union: t("settings:ip_whitelisting.add_new.error")
                  }
                }
              )
            ] })
          ] }) }, idx)),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-md items-center col-span-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "primary", className: "w-fit", onClick: () => networksField.pushValue(""), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "plus", className: "size-3.5 shrink-0 cursor-pointer" }),
            t("settings:ip_whitelisting.add_new")
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(FormError, { field: networksField, className: "col-span-full" })
        ] }) })
      }
    ) })
  ] }) });
};
function IpWhitelistingSettings() {
  const {
    allowedNetworks,
    organizationId
  } = Route$10.useLoaderData();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(IpWhitelistingSettingsPage, { organizationId, allowedNetworks });
}
export {
  IpWhitelistingSettings as component
};

import { M as reactExports, Q as jsxRuntimeExports } from "./server.mjs";
import { u as useLoaderRevalidator } from "./LoaderRevalidatorContext-BEuG7sHs.mjs";
import { h as createAnnotationFn } from "./data-9UajV2HK.mjs";
import { u as useMutation } from "./useMutation-BOdeDeAR.mjs";
import { u as useServerFn } from "./useServerFn-oRH5Nw97.mjs";
import { s as serialize } from "./Time-CKTfEtti.mjs";
import { a as createCommentAnnotationSchema } from "./annotations-Dbgxm4DN.mjs";
import { s as submitOnCtrlEnter, h as handleSubmit } from "./form-D2XmDKeG.mjs";
import { u as useCallbackRef } from "./use-callback-ref-DoQNLci-.mjs";
import { u as useForm } from "./useForm-qNQ8S9xN.mjs";
import { u as useTranslation, B as Button, I as Icon, c as clsx, d as cn } from "./Tabs-CzpyUi7T.mjs";
import { z as zt } from "./create-context-k6HmQ6bB.mjs";
const useCreateAnnotationMutation = () => {
  const createAnnotation = useServerFn(createAnnotationFn);
  return useMutation({
    mutationKey: ["annotations", "create"],
    mutationFn: async (payload) => {
      const formData = serialize(payload, { dotsForObjectNotation: true, indices: true });
      return createAnnotation({ data: formData });
    }
  });
};
function ClientCommentForm({
  caseId,
  tableName,
  objectId,
  className,
  onAnnotateSuccess: onAnnotateSuccessProps
}) {
  const { t } = useTranslation(["common", "cases"]);
  const createAnnotationMutation = useCreateAnnotationMutation();
  const onAnnotateSuccess = useCallbackRef(onAnnotateSuccessProps);
  const revalidate = useLoaderRevalidator();
  const form = useForm({
    defaultValues: {
      caseId,
      tableName,
      objectId,
      type: "comment",
      payload: {
        text: ""
      }
    },
    validators: {
      onSubmit: createCommentAnnotationSchema,
      onChange: createCommentAnnotationSchema,
      onMount: createCommentAnnotationSchema
    },
    onSubmit({ value }) {
      createAnnotationMutation.mutateAsync(value).then((result) => {
        revalidate();
        if (result.success) {
          form.setFieldValue("payload.text", "");
          onAnnotateSuccess();
        } else {
          zt.error(t("common:errors.unknown"));
        }
      }).catch(() => {
        zt.error(t("common:errors.unknown"));
      });
    }
  });
  reactExports.useEffect(() => {
    form.validate("mount");
  }, [form]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "form",
    {
      onSubmit: handleSubmit(form),
      className: cn("flex justify-between rounded-md px-md py-md bg-surface-elevated", className),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(form.Field, { name: "payload.text", children: (field) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex grow flex-col gap-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "textarea",
          {
            value: field.state.value,
            onChange: (e) => field.handleChange(e.currentTarget.value),
            onKeyDown: submitOnCtrlEnter,
            name: field.name,
            placeholder: t("cases:case_detail.add_a_comment.placeholder"),
            className: "form-textarea text-small max-h-40 w-full grow resize-none overflow-y-scroll border-none bg-transparent outline-hidden"
          }
        ) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(form.Subscribe, { selector: (state) => [state.canSubmit, state.isSubmitting], children: ([canSubmit, isSubmitting]) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            type: "submit",
            mode: "icon",
            variant: "primary",
            className: "shrink-0",
            disabled: !canSubmit || isSubmitting,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Icon,
              {
                icon: isSubmitting ? "spinner" : "send",
                className: clsx("size-3.5", { "animate-spin": isSubmitting })
              }
            )
          }
        ) })
      ]
    }
  );
}
export {
  ClientCommentForm as C,
  useCreateAnnotationMutation as u
};

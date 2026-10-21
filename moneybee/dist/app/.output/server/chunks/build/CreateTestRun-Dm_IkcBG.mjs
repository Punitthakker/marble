import { M as reactExports, Q as jsxRuntimeExports } from "./server.mjs";
import { a as Callout } from "./Callout-B0OuRL3q.mjs";
import { u as useTranslation, B as Button, I as Icon, T as Trans, M as MenuCommand, a as useFormatDateTime, d as cn, Z as Calendar } from "./Tabs-CzpyUi7T.mjs";
import { T as Tooltip, aE as createTestRunFn } from "./router-KSC-NEr8.mjs";
import { M as Modal } from "./Modal-CpYmGWjB.mjs";
import { E as ExternalLink } from "./ExternalLink-BlVgwkVd.mjs";
import { P as Popover } from "./Popover-Cp1XdSV2.mjs";
import { F as FormErrorOrDescription } from "./FormErrorOrDescription-BncG6ljR.mjs";
import { F as FormLabel } from "./FormLabel-DseYo_2t.mjs";
import { u as useLoaderRevalidator } from "./LoaderRevalidatorContext-BEuG7sHs.mjs";
import { k as createTestRunPayloadSchema } from "./scenarios-C5R2TE8p.mjs";
import { u as useMutation } from "./useMutation-BOdeDeAR.mjs";
import { u as useServerFn } from "./useServerFn-oRH5Nw97.mjs";
import { c as scenarioObjectDocHref } from "./documentation-href-DY9fs71n.mjs";
import { g as getFieldErrors } from "./form-D2XmDKeG.mjs";
import { u as useForm } from "./useForm-qNQ8S9xN.mjs";
import { z as zt } from "./create-context-k6HmQ6bB.mjs";
const DateSelector = function DateSelector2({ name, description, ...props }) {
  const [selectedDate, selectDate] = reactExports.useState(props.defaultValue);
  const [open, setOpen] = reactExports.useState(false);
  const formatDateTime = useFormatDateTime();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-row items-center gap-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Popover.Root, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Popover.Trigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "secondary", size: "medium", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Icon,
        {
          icon: "calendar-month",
          className: cn("size-5", selectedDate ? "text-grey-primary" : "text-grey-secondary")
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("font-normal", selectedDate ? "text-grey-primary" : "text-grey-secondary"), children: selectedDate ? formatDateTime(selectedDate, { dateStyle: "short" }) : props.placeholder })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Popover.Content,
      {
        className: "bg-surface-card border-grey-border isolate rounded-md border p-md",
        align: "start",
        sideOffset: 2,
        side: "bottom",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Calendar,
          {
            mode: "single",
            hidden: { before: /* @__PURE__ */ new Date() },
            selected: props.defaultValue,
            onSelect: (date) => {
              if (date) {
                selectDate(date);
                props.onChange?.(date);
                setOpen(false);
              }
            }
          }
        )
      }
    )
  ] }) });
};
const useCreateTestRunMutation = (scenarioId) => {
  const createTestRun = useServerFn(createTestRunFn);
  return useMutation({
    mutationKey: ["scenarios", "testrun", "create", scenarioId],
    mutationFn: async (payload) => createTestRun({ data: { ...payload, scenarioId } })
  });
};
function CreateTestRun({
  children,
  currentScenario,
  scenarioIterations,
  atLeastOneActiveTestRun
}) {
  const { t } = useTranslation(["common", "scenarios"]);
  const [open, setOpen] = reactExports.useState(false);
  const hasLiveVersion = reactExports.useMemo(() => scenarioIterations.some((i) => i.type === "live version"), [scenarioIterations]);
  const hasTestableVersions = reactExports.useMemo(
    () => scenarioIterations.some(({ type, archived }) => type !== "live version" && type !== "draft" && !archived),
    [scenarioIterations]
  );
  const shouldAllowCreate = hasLiveVersion && hasTestableVersions && !atLeastOneActiveTestRun;
  if (shouldAllowCreate)
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal.Root, { open, onOpenChange: setOpen, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.Trigger, { asChild: true, children }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.Content, { className: "overflow-visible", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CreateTestRunToContent, { currentScenario, scenarioIterations }) })
    ] });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip.Default, { content: t("scenarios:testrun.not_allowed"), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { disabled: true, variant: "primary", className: "isolate cursor-not-allowed", appearance: "stroked", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "plus", className: "size-4", "aria-hidden": true }),
    t("scenarios:create_testrun.title")
  ] }) });
}
function CreateTestRunToContent({
  currentScenario,
  scenarioIterations
}) {
  const { t } = useTranslation(["common", "scenarios"]);
  const createTestRunMutation = useCreateTestRunMutation(currentScenario.id);
  const revalidate = useLoaderRevalidator();
  const refIterations = reactExports.useMemo(
    () => scenarioIterations.filter(({ type }) => type === "live version"),
    [scenarioIterations]
  );
  const testIterations = reactExports.useMemo(
    () => scenarioIterations.filter(({ type, archived }) => type !== "live version" && type !== "draft" && !archived),
    [scenarioIterations]
  );
  const refIterationsOptions = reactExports.useMemo(() => refIterations.map(({ id }) => id), [refIterations]);
  const testIterationsOptions = reactExports.useMemo(() => testIterations.map(({ id }) => id), [testIterations]);
  const [testIterationMenuOpen, setTestIterationMenuOpen] = reactExports.useState(false);
  const form = useForm({
    defaultValues: {
      refIterationId: refIterationsOptions[0],
      testIterationId: testIterationsOptions[0],
      endDate: (/* @__PURE__ */ new Date()).toISOString()
    },
    onSubmit: ({ value, formApi }) => {
      if (formApi.state.isValid) {
        createTestRunMutation.mutateAsync(value).then((res) => {
          if (res?.error === "duplicate_test_run") {
            zt.error(t("common:errors.data.duplicate_test_run"));
          } else if (res?.error) {
            zt.error(t("common:errors.unknown"));
          } else {
            revalidate();
          }
        }).catch(() => {
          zt.error(t("common:errors.unknown"));
        });
      }
    },
    validators: {
      onSubmitAsync: createTestRunPayloadSchema
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
        /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.Title, { children: t("scenarios:create_testrun.title") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-lg p-lg", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.Description, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Callout, { variant: "outlined", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "whitespace-pre-wrap", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Trans,
            {
              t,
              i18nKey: "scenarios:create_testrun.callout",
              components: {
                DocLink: /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { href: scenarioObjectDocHref })
              }
            }
          ) }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 flex-col gap-md", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-row items-start gap-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                form.Field,
                {
                  name: "refIterationId",
                  validators: {
                    onBlur: createTestRunPayloadSchema.shape.refIterationId,
                    onChange: createTestRunPayloadSchema.shape.refIterationId
                  },
                  children: (field) => {
                    const selectedRefIteration = refIterations.find(({ id }) => id === field.state.value);
                    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group flex w-full flex-col gap-sm", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { name: field.name, children: t("scenarios:create_testrun.ref") }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.SelectButton, { name: field.name, disabled: true, children: selectedRefIteration ? `V${selectedRefIteration.version} ${selectedRefIteration.type === "live version" ? t("scenarios:live") : ""}` : null }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(FormErrorOrDescription, { errors: getFieldErrors(field.state.meta.errors) })
                    ] });
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                form.Field,
                {
                  name: "testIterationId",
                  validators: {
                    onBlur: createTestRunPayloadSchema.shape.testIterationId,
                    onChange: createTestRunPayloadSchema.shape.testIterationId
                  },
                  children: (field) => {
                    const selectedTestIteration = testIterations.find(({ id }) => id === field.state.value);
                    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group flex w-full flex-col gap-sm", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { name: field.name, children: t("scenarios:create_testrun.phantom") }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(MenuCommand.Menu, { open: testIterationMenuOpen, onOpenChange: setTestIterationMenuOpen, children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Trigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.SelectButton, { name: field.name, children: selectedTestIteration ? `V${selectedTestIteration.version}` : t("scenarios:create_testrun.phantom_placeholder") }) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Content, { sameWidth: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.List, { children: testIterations.map(({ id, version }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                          MenuCommand.Item,
                          {
                            value: id,
                            onSelect: () => {
                              field.handleChange(id);
                              setTestIterationMenuOpen(false);
                            },
                            children: `V${version}`
                          },
                          id
                        )) }) })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(FormErrorOrDescription, { errors: getFieldErrors(field.state.meta.errors) })
                    ] });
                  }
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              form.Field,
              {
                name: "endDate",
                validators: {
                  onBlur: createTestRunPayloadSchema.shape.endDate,
                  onChange: createTestRunPayloadSchema.shape.endDate
                },
                children: (field) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group flex w-full flex-col gap-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { name: field.name, className: "flex flex-row items-center gap-xs", children: t("scenarios:create_testrun.end_date") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    DateSelector,
                    {
                      name: field.name,
                      placeholder: t("scenarios:create_testrun.end_date_placeholder"),
                      onChange: (d) => field.handleChange(d.toISOString()),
                      defaultValue: new Date(field.state.value)
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FormErrorOrDescription, { errors: getFieldErrors(field.state.meta.errors) })
                ] })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal.Footer, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.FooterButton, { isCloseButton: true, label: t("common:cancel") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.FooterButton, { label: t("common:save"), type: "submit", isLoading: createTestRunMutation.isPending })
        ] })
      ]
    }
  );
}
export {
  CreateTestRun as C
};

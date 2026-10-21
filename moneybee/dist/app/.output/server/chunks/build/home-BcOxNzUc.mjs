import { M as reactExports, Q as jsxRuntimeExports, $ as createServerFn } from "./server.mjs";
import { c as createSsrRpc } from "./query-BmG5BEas.mjs";
import { a as Callout, C as CalloutV2 } from "./Callout-B0OuRL3q.mjs";
import { C as CopyToClipboardButton, z as zt } from "./create-context-k6HmQ6bB.mjs";
import { aC as Route$q, aD as useDetectionScenarioData, P as Page, L as Link, p as pageLayoutGutter, T as Tooltip, aB as toggleScenarioDeduplicationFn } from "./router-KSC-NEr8.mjs";
import { u as useTranslation, I as Icon, W as CtaV2ClassName, S as Typo, d as cn, T as Trans, a$ as formatSchedule, B as Button } from "./Tabs-CzpyUi7T.mjs";
import { C as Checkbox } from "./Checkbox-C8nszDsh.mjs";
import { a2 as M, cs as hasInProgressScheduledExecution } from "./services-middleware-nMulUXHZ.mjs";
import { S as Separator } from "./Separator-D4aEwiuL.mjs";
import { S as Switch } from "./Switch-BV-_0Knl.mjs";
import { E as ExternalLink } from "./ExternalLink-BlVgwkVd.mjs";
import { N as Nudge } from "./Nudge-Cmzwt2Be.mjs";
import { C as CreateTestRun } from "./CreateTestRun-Dm_IkcBG.mjs";
import { S as ScenarioHeader, a as ScenarioDescriptionEditable, C as CreateDraftIteration } from "./ScenarioHeader-XOC4HUGX.mjs";
import { S as Spinner } from "./Spinner-DmLieYoS.mjs";
import { u as useLoaderRevalidator } from "./LoaderRevalidatorContext-BEuG7sHs.mjs";
import { a as authMiddleware } from "./auth-middleware-eNRVfU3l.mjs";
import { u as useMutation } from "./useMutation-BOdeDeAR.mjs";
import { u as useServerFn } from "./useServerFn-oRH5Nw97.mjs";
import { u as useListRulesQuery } from "./list-rules-Co9PNGqZ.mjs";
import { e as createDecisionDocHref } from "./documentation-href-DY9fs71n.mjs";
import { f as fromUUIDtoSUUID, o as object, b as boolean, s as string } from "./short-uuid-fTZYJj_k.mjs";
import { u as useForm } from "./useForm-qNQ8S9xN.mjs";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "./security-headers.server-BdP3HrPp.mjs";
import "./ThemeContext-DjRULCu0.mjs";
import "./config--RFGchua.mjs";
import "./i18n-instance-store-UssbGYOM.mjs";
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
import "node:crypto";
import "./use-callback-ref-DoQNLci-.mjs";
import "./sharpstate.es-C0BW2AZi.mjs";
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
import "./Modal-CpYmGWjB.mjs";
import "./Popover-Cp1XdSV2.mjs";
import "./FormErrorOrDescription-BncG6ljR.mjs";
import "./FormLabel-DseYo_2t.mjs";
import "./form-D2XmDKeG.mjs";
import "./array-BFSjnO9c.mjs";
import "./update-scenario-DZ099VpZ.mjs";
import "./update-workflow-rule-D3RfDBaF.mjs";
import "./isDeepEqual-DU8kSW6f.mjs";
import "./useQuery-Bb0AEcpf.mjs";
import "./useBaseQuery-BqF2iw7Y.mjs";
const TestRunNudge = ({ kind }) => {
  const { t } = useTranslation(["scenarios"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      className: cn("bg-surface-card relative flex h-fit max-w-[500px] flex-col gap-md rounded-lg border-2 p-xl", {
        "border-purple-disabled": kind === "restricted",
        "border-yellow-primary": kind === "missing_configuration"
      }),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typo, { variant: "subtitle1", children: t("scenarios:home.testrun") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Nudge, { kind, className: "absolute -end-[12px] -top-3 size-6", content: t("scenarios:testrun.nudge") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CalloutV2, { children: t("scenarios:testrun.description") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-row gap-md", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "primary", disabled: true, className: "isolate h-10 w-fit", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "plus", className: "size-5", "aria-hidden": true }),
          t("scenarios:create_testrun.title")
        ] }) })
      ]
    }
  );
};
const WorkflowNudge = ({ kind }) => {
  const { t } = useTranslation(["scenarios", "workflows"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      className: cn("bg-surface-card relative flex h-fit max-w-[500px] flex-col gap-md rounded-lg border-2 p-xl", {
        "border-purple-disabled": kind === "restricted",
        "border-yellow-primary": kind === "missing_configuration"
      }),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typo, { variant: "subtitle1", children: t("scenarios:home.workflow") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Nudge, { kind, className: "absolute -end-[12px] -top-3 size-6", content: t("workflows:nudge") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CalloutV2, { children: t("scenarios:home.workflow_description") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-row gap-md", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "primary", disabled: true, className: "isolate h-10 w-fit", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "plus", className: "size-5", "aria-hidden": true }),
          t("scenarios:home.workflow.create")
        ] }) })
      ]
    }
  );
};
const useToggleScenarioDeduplicationMutation = () => {
  const toggleDeduplication = useServerFn(toggleScenarioDeduplicationFn);
  return useMutation({
    mutationKey: ["scenarios", "toggle-deduplication"],
    mutationFn: async (data) => toggleDeduplication({ data })
  });
};
const triggerManualExecutionPayloadSchema = object({
  params: object({
    iterationId: string()
  }),
  forceRescore: boolean().optional()
});
const triggerManualExecutionAction = createServerFn().middleware([authMiddleware]).validator(triggerManualExecutionPayloadSchema).handler(createSsrRpc("d070b3a7453d9a246e8b18cf318e8ca84bcf66985b248c4167766e8837922aaf"));
function ScenarioHome() {
  const {
    t
  } = useTranslation(["common", "scenarios"]);
  const {
    featureAccess,
    scheduledExecutions,
    liveIterationSchedule
  } = Route$q.useLoaderData();
  const {
    scenarioIterations,
    currentScenario
  } = useDetectionScenarioData();
  const liveScenarioIteration = reactExports.useMemo(() => scenarioIterations.find(({
    type
  }) => type === "live version"), [scenarioIterations]);
  const lastScenarioIteration = reactExports.useMemo(() => scenarioIterations.filter(({
    type
  }) => type === "version").sort((a, b) => (b.version ?? 0) - (a.version ?? 0))[0], [scenarioIterations]);
  const draftScenario = reactExports.useMemo(() => scenarioIterations.find(({
    type
  }) => type === "draft"), [scenarioIterations]);
  const scenarioToWatch = liveScenarioIteration ?? lastScenarioIteration;
  const scenarioToEdit = liveScenarioIteration ?? lastScenarioIteration;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Page.Main, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Page.Header, { className: "justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-row items-center gap-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ScenarioHeader, { isEditScenarioAvailable: featureAccess.isEditScenarioAvailable, scenario: currentScenario }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Page.Content, { width: "readable", children: [
      currentScenario.archived ? /* @__PURE__ */ jsxRuntimeExports.jsx(Callout, { color: "red", icon: "warning", className: "mb-md", children: t("scenarios:archived_scenario_banner") }) : null,
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "flex flex-row gap-lg items-center", children: [
        currentScenario.description || featureAccess.isEditScenarioAvailable ? /* @__PURE__ */ jsxRuntimeExports.jsx(Page.Description, { withIcon: false, className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ScenarioDescriptionEditable, { isEditScenarioAvailable: featureAccess.isEditScenarioAvailable, scenario: currentScenario }) }) : null,
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-row gap-md", children: [
          scenarioToWatch ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/detection/scenarios/$scenarioId/i/$iterationId", params: {
            scenarioId: fromUUIDtoSUUID(scenarioToWatch.scenarioId),
            iterationId: fromUUIDtoSUUID(scenarioToWatch.id)
          }, className: CtaV2ClassName({
            variant: "primary",
            appearance: "stroked",
            size: "medium"
          }), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "eye", className: "size-4" }),
            liveScenarioIteration ? t("scenarios:home.live_version") : t("scenarios:home.last_version")
          ] }) : null,
          draftScenario ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/detection/scenarios/$scenarioId/i/$iterationId", params: {
            scenarioId: fromUUIDtoSUUID(draftScenario.scenarioId),
            iterationId: fromUUIDtoSUUID(draftScenario.id)
          }, className: CtaV2ClassName({
            variant: "primary",
            appearance: "filled",
            size: "medium"
          }), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "edit", className: "size-4" }),
            t("scenarios:update_scenario.title")
          ] }) : scenarioToEdit?.id ? /* @__PURE__ */ jsxRuntimeExports.jsx(CreateDraftIteration, { iterationId: scenarioToEdit.id, scenarioId: currentScenario.id, draftId: void 0 }) : null
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: cn("flex flex-col", pageLayoutGutter.gap), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typo, { variant: "title2", className: "text-grey-primary", children: t("scenarios:home.execution") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("grid grid-cols-2", pageLayoutGutter.gap), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(RealTimeSection, { scenarioId: currentScenario.id, liveScenarioIteration }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(BatchSection, { currentScenario, scenarioId: currentScenario.id, isManualTriggerScenarioAvailable: featureAccess.isManualTriggerScenarioAvailable, scheduledExecutions, liveIterationSchedule, liveIterationId: liveScenarioIteration?.id }),
          M(featureAccess.isTestRunAvailable).with("missing_configuration", (status) => /* @__PURE__ */ jsxRuntimeExports.jsx(TestRunNudge, { kind: status })).with("restricted", (status) => /* @__PURE__ */ jsxRuntimeExports.jsx(TestRunNudge, { kind: status })).otherwise(() => /* @__PURE__ */ jsxRuntimeExports.jsx(TestRunSection, { scenarioId: currentScenario.id, access: featureAccess.isTestRunAvailable })),
          M(featureAccess.isWorkflowsAvailable).with("missing_configuration", (status) => /* @__PURE__ */ jsxRuntimeExports.jsx(WorkflowNudge, { kind: status })).with("restricted", (status) => /* @__PURE__ */ jsxRuntimeExports.jsx(WorkflowNudge, { kind: status })).otherwise(() => /* @__PURE__ */ jsxRuntimeExports.jsx(WorkflowSection, { scenario: currentScenario, access: featureAccess.isWorkflowsAvailable }))
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ResourcesSection, {})
    ] })
  ] });
}
function TestRunSection({
  scenarioId,
  access
}) {
  const {
    t
  } = useTranslation();
  const {
    currentScenario,
    scenarioIterations
  } = useDetectionScenarioData();
  const {
    testRuns
  } = Route$q.useLoaderData();
  const currentTestRun = reactExports.useMemo(() => testRuns.filter((r) => r.status === "up"), [testRuns]);
  const isExecutionOngoing = reactExports.useMemo(() => currentTestRun.length > 0, [currentTestRun]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(TabHeader, { title: t("scenarios:home.testrun"), spinner: isExecutionOngoing }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: cn("bg-surface-card border-grey-border relative flex flex-col gap-md rounded-lg border p-md rounded-tl-none flex-1", isExecutionOngoing && "border-purple-primary"), children: [
      access === "test" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Nudge, { className: "absolute -end-[12px] -top-[12px] size-6", content: t("scenarios:testrun.nudge"), kind: "test" }) : null,
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: t("scenarios:testrun.description") }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-row gap-md mt-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CreateTestRun, { currentScenario, scenarioIterations, atLeastOneActiveTestRun: currentTestRun.length > 0, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "primary", appearance: "stroked", className: "isolate", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "plus", className: "size-4", "aria-hidden": true }),
          t("scenarios:create_testrun.title")
        ] }) }),
        currentTestRun.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { className: CtaV2ClassName({
          variant: "secondary"
        }), to: "/detection/scenarios/$scenarioId/test-run/$testRunId", params: {
          scenarioId: fromUUIDtoSUUID(scenarioId),
          testRunId: fromUUIDtoSUUID(currentTestRun[0].id)
        }, children: t("scenarios:testrun.current_run") }) : null,
        testRuns.length ? /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { className: CtaV2ClassName({
          variant: "secondary"
        }), to: "/detection/scenarios/$scenarioId/test-run", params: {
          scenarioId: fromUUIDtoSUUID(scenarioId)
        }, children: t("scenarios:testrun.archived") }) : null
      ] })
    ] })
  ] });
}
function RealTimeSection({
  scenarioId,
  liveScenarioIteration
}) {
  const {
    t
  } = useTranslation(["scenarios"]);
  const isLive = liveScenarioIteration !== void 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(TabHeader, { title: t("scenarios:home.execution.real_time"), spinner: false }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-surface-card border-grey-border flex flex-1 flex-col gap-md rounded-lg border p-md rounded-tl-none", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex flex-col gap-md", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trans, { t, i18nKey: "scenarios:home.execution.real_time.callout", components: {
        DocLink: /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { href: createDecisionDocHref })
      } }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("text-grey-primary text-s inline-flex items-center font-semibold", {
        "whitespace-pre": isLive
      }), children: isLive ? /* @__PURE__ */ jsxRuntimeExports.jsx(Trans, { t, i18nKey: "scenarios:home.execution.real_time.callout.scenario_id", components: {
        CopyScenarioId: /* @__PURE__ */ jsxRuntimeExports.jsx(CopyToClipboardButton, { toCopy: scenarioId, className: "ms-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: `ID ${scenarioId.slice(0, 15)}...` }) })
      } }) : t("scenarios:home.execution.real_time.callout.no_live_version") })
    ] }) })
  ] });
}
function TabHeader({
  title,
  spinner
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-md border-l border-t border-r bg-surface-card border-grey-border rounded-t-md py-xs px-sm w-fit", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Typo, { variant: "subtitle1", className: "text-grey-secondary", children: title }),
    spinner ? /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, { className: "size-3" }) : null
  ] });
}
function BatchSection({
  currentScenario,
  scenarioId,
  scheduledExecutions,
  liveIterationSchedule,
  liveIterationId,
  isManualTriggerScenarioAvailable
}) {
  const {
    t,
    i18n: {
      language
    }
  } = useTranslation(["common", "scenarios"]);
  const revalidate = useLoaderRevalidator();
  const toggleDeduplicationMutation = useToggleScenarioDeduplicationMutation();
  const isLive = !!liveIterationId;
  const schedule = liveIterationSchedule;
  const formattedSchedule = reactExports.useMemo(() => {
    try {
      if (!schedule) return void 0;
      return formatSchedule(schedule, {
        language,
        throwExceptionOnParseError: true
      });
    } catch (_e) {
      return void 0;
    }
  }, [language, schedule]);
  const isExecutionOngoing = hasInProgressScheduledExecution(scheduledExecutions);
  const handleToggleDeduplicate = (checked) => {
    toggleDeduplicationMutation.mutate({
      scenarioId: currentScenario.id,
      enabled: checked
    }, {
      onSuccess: () => {
        zt.success(t("common:success.save"));
        revalidate();
      },
      onError: () => {
        zt.error(t("common:errors.unknown"));
      }
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(TabHeader, { title: t("scenarios:home.execution.batch"), spinner: isExecutionOngoing }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("bg-surface-card border-grey-border relative flex flex-1 flex-col gap-md rounded-lg border p-md rounded-tl-none", isExecutionOngoing && "border-purple-primary"), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-row items-center gap-md", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip.Default, { content: t("scenarios:home.execution.batch.deduplicate_batch_objects_tooltip"), arrow: true, delayDuration: 0, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { htmlFor: "deduplicate-toggle", className: "flex flex-row items-center gap-sm cursor-pointer", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Switch, { id: "deduplicate-toggle", checked: currentScenario.deduplicateBatchObjects, onCheckedChange: handleToggleDeduplicate, disabled: toggleDeduplicationMutation.isPending }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium", children: t("scenarios:home.execution.batch.deduplicate_batch_objects") })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "bg-grey-border" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex flex-col gap-md", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("scenarios:home.execution.batch.callout") }),
        formattedSchedule ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-grey-primary text-s text-balance font-semibold", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trans, { t, i18nKey: "scenarios:scheduled", components: {
          ScheduleLocale: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-purple-primary" })
        }, values: {
          schedule: formattedSchedule
        } }) }) : null
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-md", children: isManualTriggerScenarioAvailable && isLive && liveIterationId ? /* @__PURE__ */ jsxRuntimeExports.jsx(ManualTriggerScenarioExecutionForm, { iterationId: liveIterationId, scenario: currentScenario, disabled: isExecutionOngoing }) : null }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "bg-grey-border" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { className: CtaV2ClassName({
        variant: "secondary"
      }), to: "/detection/scenarios/$scenarioId/scheduled-executions", params: {
        scenarioId: fromUUIDtoSUUID(scenarioId)
      }, children: t("scenarios:home.execution.batch.scheduled_execution", {
        count: scheduledExecutions.length
      }) })
    ] })
  ] });
}
function ManualTriggerScenarioExecutionForm({
  iterationId,
  scenario,
  disabled
}) {
  const {
    t
  } = useTranslation(["scenarios"]);
  const revalidate = useLoaderRevalidator();
  const mutation = useMutation({
    mutationFn: async (value) => {
      return triggerManualExecutionAction({
        data: {
          params: {
            iterationId: value.iterationId
          },
          forceRescore: value.forceRescore
        }
      });
    },
    onSuccess: () => {
      revalidate();
    }
  });
  const form = useForm({
    onSubmit: ({
      value,
      formApi
    }) => {
      if (formApi.state.isValid) {
        mutation.mutate(value);
      }
    },
    defaultValues: {
      iterationId,
      forceRescore: false
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("form", { onSubmit: (e) => {
    e.preventDefault();
    e.stopPropagation();
    form.handleSubmit();
  }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-row items-center gap-md", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { type: "submit", disabled: disabled || mutation.isPending, appearance: "stroked", className: "shrink-0 whitespace-nowrap", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "play", className: "size-4 shrink-0", "aria-hidden": true }),
      t("scenarios:home.execution.batch.trigger_manual_execution")
    ] }),
    scenario.deduplicateBatchObjects ? /* @__PURE__ */ jsxRuntimeExports.jsx(form.Field, { name: "forceRescore", children: (field) => /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { htmlFor: "force-rescore", className: "flex flex-row items-center gap-sm cursor-pointer", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Checkbox, { size: "small", checked: field.state.value, onCheckedChange: (checked) => {
        if (checked === "indeterminate") return;
        field.handleChange(checked);
      }, onBlur: field.handleBlur, id: "force-rescore" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: t("scenarios:home.execution.batch.force_rescore_all_objects") })
    ] }) }) : null
  ] }) });
}
function WorkflowSection({
  scenario,
  access
}) {
  const {
    t
  } = useTranslation(["common", "scenarios", "workflows"]);
  const rulesQuery = useListRulesQuery(scenario.id);
  const isEdit = (rulesQuery.data?.workflow?.length ?? 0) > 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(TabHeader, { title: t("scenarios:home.workflow"), spinner: false }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "bg-surface-card border-grey-border relative flex flex-col gap-md rounded-lg border p-md rounded-tl-none flex-1", children: [
      access === "test" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Nudge, { className: "absolute -end-[12px] -top-[12px] size-6", content: t("workflows:nudge"), link: "https://docs.checkmarble.com/docs/introduction-5", kind: "test" }) : null,
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: t("scenarios:home.workflow_description") }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-row gap-md", children: [
        null,
        rulesQuery.isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-grey-border h-7 w-30 animate-pulse rounded-md flex items-center gap-xs px-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-grey-disabled size-3.5 animate-pulse rounded-sm" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-grey-disabled h-4 w-16 animate-pulse rounded-sm" })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { className: CtaV2ClassName({
          variant: isEdit ? "secondary" : "primary",
          appearance: "stroked"
        }), to: "/detection/scenarios/$scenarioId/workflow", params: {
          scenarioId: fromUUIDtoSUUID(scenario.id)
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: isEdit ? "edit-square" : "plus", className: "size-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: t(isEdit ? "scenarios:home.workflow.edit" : "scenarios:home.workflow.create") })
        ] })
      ] })
    ] })
  ] });
}
const resources = [{
  tKey: "scenarios:home.resources.scenario_guide",
  href: "https://docs.checkmarble.com/docs/executing-a-scenario",
  src: "/img/home/scenario-guide.png"
}, {
  tKey: "scenarios:home.resources.api",
  href: "https://docs.checkmarble.com/reference/intro-getting-started",
  src: "/img/home/api.png"
}, {
  tKey: "scenarios:home.workflow",
  href: "https://docs.checkmarble.com/docs/introduction-5",
  src: "/img/home/workflow.png"
}];
function ResourcesSection() {
  const {
    t
  } = useTranslation(["common", "scenarios"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "flex flex-col gap-sm mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Typo, { variant: "title2", className: "text-grey-primary", children: t("scenarios:home.resources") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-row gap-sm", children: resources.map(({
      tKey,
      href,
      src
    }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href, className: "border-grey-border hover:border-purple-primary focus:border-purple-primary group flex flex-col overflow-hidden rounded-lg border outline-hidden transition-colors", target: "_blank", rel: "noopener noreferrer", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src, alt: "", className: "aspect-[21/9] object-cover" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "border-grey-border bg-surface-card text-s group-hover:border-purple-primary group-focus:border-purple-primary flex flex-row items-center justify-between border-t p-sm font-medium transition-colors", children: [
        t(tKey),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { "aria-hidden": true, icon: "arrow-right", className: "size-3.5" })
      ] })
    ] }, tKey)) })
  ] });
}
export {
  ScenarioHome as component
};

import { M as reactExports, Q as jsxRuntimeExports } from "./server.mjs";
import { a as Callout } from "./Callout-B0OuRL3q.mjs";
import { C as CopyToClipboardButton, z as zt, T as Tag } from "./create-context-k6HmQ6bB.mjs";
import { u as useTranslation, T as Trans, B as Button, I as Icon, g as useFormatLanguage, a$ as formatSchedule } from "./Tabs-CzpyUi7T.mjs";
import { C as Collapsible } from "./Collapsible-CKx8cmdD.mjs";
import { aX as NewUndefinedAstNode, ca as isUndefinedAstNode, dD as NewEmptyTriggerAstNode } from "./services-middleware-nMulUXHZ.mjs";
import { aj as scenarioI18n, b0 as useDetectionScenarioIterationData, bk as Route2, aD as useDetectionScenarioData, bj as saveTriggerFn, T as Tooltip } from "./router-KSC-NEr8.mjs";
import { A as AstBuilder } from "./index-CjCfUhgh.mjs";
import { E as ExternalLink } from "./ExternalLink-BlVgwkVd.mjs";
import { E as EvaluationErrors } from "./ScenarioValidationError-JSEokjBd.mjs";
import { u as useMutation } from "./useMutation-BOdeDeAR.mjs";
import { u as useServerFn } from "./useServerFn-oRH5Nw97.mjs";
import { h as executeAScenarioDocHref, e as createDecisionDocHref } from "./documentation-href-DY9fs71n.mjs";
import { u as useEditorMode } from "./editor-mode-D7ckZpf3.mjs";
import { u as useGetScenarioErrorMessage } from "./scenario-validation-error-messages-DGyZ9TEq.mjs";
import { C as Checkbox } from "./Checkbox-C8nszDsh.mjs";
import { S as SelectV2 } from "./Select-Dg3p9vJ0.mjs";
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
import "./index-22HmyALM.mjs";
import "./short-uuid-fTZYJj_k.mjs";
import "node:crypto";
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
import "./use-callback-ref-Bwe341Yf.mjs";
import "./useQuery-Bb0AEcpf.mjs";
import "./useBaseQuery-BqF2iw7Y.mjs";
import "./DataField-BczNbAhi.mjs";
import "./Spinner-DmLieYoS.mjs";
import "./data-9UajV2HK.mjs";
import "./data-BXamdbTM.mjs";
import "./tryCatch-CFf1qt2b.mjs";
import "./isNonNullish-DgEqPJBU.mjs";
import "./Switch-BV-_0Knl.mjs";
import "./data-model-Dfj0lN5a.mjs";
import "./mapToObj-C7dg8HnM.mjs";
import "./omit-qKVZGDJg.mjs";
import "./hasAtLeast-BmuNoqMd.mjs";
import "./helpers-D-Bggz_h.mjs";
import "./join-Ce2xPJwm.mjs";
import "./isNullish-B8pc8Ntu.mjs";
import "./isArray-gJc74O_I.mjs";
import "./display-TKj7AN5a.mjs";
import "./Logo-3vzUxSrh.mjs";
import "./Modal-CpYmGWjB.mjs";
import "./flatMap-CdA7bREZ.mjs";
import "./Nudge-Cmzwt2Be.mjs";
import "./create-navigation-option-CCfvMbYU.mjs";
import "./Stepper-D5HOcTsM.mjs";
import "./organization-detail-BGvqBGx1.mjs";
import "./Highlight-NVjBw0RI.mjs";
import "./match-sorter.esm-BRMYSlZQ.mjs";
import "./ExpandableGroupTagLine-MgT0uQKb.mjs";
import "./Popover-Cp1XdSV2.mjs";
const editableCron = [
  {
    frequency: "daily",
    regex: new RegExp(/^0 (?<scheduleDetail>([0-9]|1[0-9]|[2][0-3])) \* \* \*$/)
  },
  {
    frequency: "weekly",
    regex: new RegExp(/^0 0 \* \* (?<scheduleDetail>[0-6])$/)
  },
  {
    frequency: "monthly",
    regex: new RegExp(/^0 0 (?<scheduleDetail>([1-9]|[12][0-9]|3[01])) \* \*$/)
  }
];
function isEditableScheduleOption(schedule) {
  if (!schedule) return true;
  for (const { regex } of editableCron) {
    if (regex.test(schedule)) {
      return true;
    }
  }
  return false;
}
function adaptScheduleOption(schedule) {
  for (const { frequency, regex } of editableCron) {
    const match = schedule.trim().match(regex);
    const scheduleDetail = match?.groups?.["scheduleDetail"];
    if (scheduleDetail) {
      return {
        isScenarioScheduled: true,
        frequency,
        scheduleDetail
      };
    }
  }
  return {
    isScenarioScheduled: false,
    frequency: "daily",
    scheduleDetail: "0"
  };
}
function adaptScheduleOptionToCron({ isScenarioScheduled, frequency, scheduleDetail }) {
  if (!isScenarioScheduled) {
    return "";
  }
  switch (frequency) {
    case "daily":
      return `0 ${scheduleDetail} * * *`;
    case "weekly":
      return `0 0 * * ${scheduleDetail}`;
    case "monthly":
      return `0 0 ${scheduleDetail} * *`;
  }
}
const textForFrequency = {
  daily: "scenarios:trigger.schedule_scenario.schedule_detail_daily_label",
  weekly: "scenarios:trigger.schedule_scenario.schedule_detail_weekly_label",
  monthly: "scenarios:trigger.schedule_scenario.schedule_detail_monthly_label"
};
function ScheduleOptionEditor({
  scheduleOption,
  setScheduleOption,
  deduplicationEnabled
}) {
  const { t } = useTranslation(scenarioI18n);
  const language = useFormatLanguage();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { htmlFor: "scheduleScenario", className: "text-s flex items-center gap-xs font-normal cursor-pointer", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Checkbox,
        {
          id: "scheduleScenario",
          name: "scheduleScenario",
          defaultChecked: scheduleOption.isScenarioScheduled,
          onCheckedChange: () => setScheduleOption({
            ...scheduleOption,
            isScenarioScheduled: !scheduleOption.isScenarioScheduled
          })
        }
      ),
      t("scenarios:trigger.schedule_scenario.option")
    ] }),
    scheduleOption.isScenarioScheduled ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-s flex items-center gap-sm", children: [
        t("scenarios:trigger.schedule_scenario.frequency_label"),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          ScheduleFrequencySelect,
          {
            onChange: (frequency) => {
              const scheduleDetail = getScheduleDetailOptions(frequency, language)[0];
              if (!scheduleDetail) return;
              setScheduleOption({
                ...scheduleOption,
                frequency,
                scheduleDetail
              });
            },
            value: scheduleOption.frequency
          }
        ),
        t(textForFrequency[scheduleOption.frequency]),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          ScheduleDetailSelect,
          {
            frequency: scheduleOption.frequency,
            onChange: (value) => setScheduleOption({ ...scheduleOption, scheduleDetail: value }),
            value: scheduleOption.scheduleDetail
          }
        ),
        deduplicationEnabled ? /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip.Default, { content: t("scenarios:deduplication_badge_tooltip"), arrow: true, delayDuration: 0, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Tag,
          {
            color: "purple",
            size: "small",
            className: "cursor-help focus-visible:outline-2 outline-offset-2 focus-visible:outline-purple-primary",
            tabIndex: 0,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "copy", className: "size-3", "aria-hidden": true }),
              t("scenarios:deduplication_badge")
            ]
          }
        ) }) : null
      ] }),
      scheduleOption.frequency === "monthly" && ["29", "30", "31"].includes(scheduleOption.scheduleDetail) ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-s text-purple-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Trans,
        {
          t,
          i18nKey: "scenarios:trigger.schedule_scenario.monthly_warning",
          values: { scheduleDetail: scheduleOption.scheduleDetail }
        }
      ) }) : null
    ] }) : null
  ] });
}
const scheduleFrequencyOptions = [
  {
    value: "daily",
    labelTKey: "scenarios:trigger.schedule_scenario.frequency_daily"
  },
  {
    value: "weekly",
    labelTKey: "scenarios:trigger.schedule_scenario.frequency_weekly"
  },
  {
    value: "monthly",
    labelTKey: "scenarios:trigger.schedule_scenario.frequency_monthly"
  }
];
const ScheduleFrequencySelect = ({
  value,
  onChange
}) => {
  const { t } = useTranslation(scenarioI18n);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    SelectV2,
    {
      value,
      onChange,
      placeholder: "...",
      options: scheduleFrequencyOptions.map(({ value: value2, labelTKey }) => ({
        label: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-s text-grey-primary", children: t(labelTKey) }),
        value: value2
      }))
    }
  );
};
const ScheduleDetailSelect = ({
  value,
  onChange,
  frequency
}) => {
  const {
    i18n: { language }
  } = useTranslation(scenarioI18n);
  const scheduleDetailOptions = getScheduleDetailOptions(frequency, language);
  const displayNameForFrequency = (frequency2) => (option) => {
    switch (frequency2) {
      case "daily":
        return option.padStart(2, "0") + ":00";
      case "weekly":
        return getWeekDayName(option, language);
      case "monthly":
        return option;
    }
  };
  const displayName = displayNameForFrequency(frequency);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    SelectV2,
    {
      value,
      onChange,
      placeholder: "...",
      options: scheduleDetailOptions.map((option) => ({
        label: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-s text-grey-primary", children: displayName(option) }),
        value: option
      }))
    }
  );
};
const getScheduleDetailOptions = (frequency, locale) => {
  switch (frequency) {
    case "daily":
      return dailyScheduleOptions;
    case "weekly":
      return weeklyScheduleOptions(locale);
    case "monthly":
      return monthlyScheduleOptions;
  }
};
const dailyScheduleOptions = Array.from({ length: 24 }, (_, i) => `${i}`);
const weekDays = Array.from({ length: 7 }, (_, i) => `${i}`);
const getWeekInfo = (locale) => {
  const intl = new Intl.Locale(locale);
  return (
    // @ts-expect-error Property 'weekInfo' does not exist on type 'Locale'.
    intl.weekInfo ?? intl.getWeekInfo?.() ?? { firstDay: 1, weekend: [6, 7], minimalDays: 4 }
  );
};
const weeklyScheduleOptions = (locale) => {
  const weekInfo = getWeekInfo(locale);
  if (weekInfo.firstDay === 1) {
    return [...weekDays.slice(1), ...weekDays.slice(0, 1)];
  }
  return weekDays;
};
const monthlyScheduleOptions = Array.from({ length: 31 }, (_, i) => `${i + 1}`);
const getWeekDayName = (option, locale, format) => {
  const formatter = new Intl.DateTimeFormat(locale, {
    weekday: "long",
    timeZone: "UTC"
  });
  const day = parseInt(option) + 1;
  const date = /* @__PURE__ */ new Date(`2017-01-0${day}T00:00:00+00:00`);
  return formatter.format(date);
};
const ScheduleOptionViewer = ({ schedule }) => {
  const {
    t,
    i18n: { language }
  } = useTranslation(scenarioI18n);
  const formattedSchedule = reactExports.useMemo(() => {
    try {
      return formatSchedule(schedule, {
        language,
        throwExceptionOnParseError: true
      });
    } catch (_e) {
      return void 0;
    }
  }, [language, schedule]);
  if (!formattedSchedule) return t("scenarios:no_scheduled");
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Trans,
    {
      t,
      i18nKey: "scenarios:scheduled",
      components: {
        ScheduleLocale: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontWeight: "bold" } })
      },
      values: {
        schedule: formattedSchedule
      }
    }
  );
};
function ScheduleOption({
  schedule,
  setSchedule,
  viewOnly,
  deduplicationEnabled
}) {
  if (!viewOnly && isEditableScheduleOption(schedule)) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      ScheduleOptionEditor,
      {
        scheduleOption: adaptScheduleOption(schedule),
        setScheduleOption: (scheduleOption) => {
          setSchedule(adaptScheduleOptionToCron(scheduleOption));
        },
        deduplicationEnabled
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ScheduleOptionViewer, { schedule });
}
const useSaveTriggerMutation = () => {
  const saveTrigger = useServerFn(saveTriggerFn);
  return useMutation({
    mutationFn: (payload) => saveTrigger({ data: payload })
  });
};
function Trigger() {
  const {
    t
  } = useTranslation([...scenarioI18n, "common"]);
  const {
    scenarioIteration,
    scenarioValidation
  } = useDetectionScenarioIterationData();
  const [validationErrors, setValidationErrors] = reactExports.useState(scenarioValidation.trigger.errors);
  const saveTriggerMutation = useSaveTriggerMutation();
  const builderOptions = Route2.useLoaderData();
  const editorMode = useEditorMode();
  const [schedule, setSchedule] = reactExports.useState(scenarioIteration.schedule ?? "");
  const {
    currentScenario
  } = useDetectionScenarioData();
  const getScenarioErrorMessage = useGetScenarioErrorMessage();
  const [trigger, setTrigger] = reactExports.useState(scenarioIteration.trigger ?? NewUndefinedAstNode());
  const isTriggerNull = isUndefinedAstNode(trigger);
  const nodeStoreRef = reactExports.useRef(null);
  const handleSave = async () => {
    const node = nodeStoreRef.current ? nodeStoreRef.current.select((s) => s.$node).peek() : NewUndefinedAstNode();
    try {
      await saveTriggerMutation.mutateAsync({
        iterationId: scenarioIteration.id,
        schedule,
        astNode: node
      });
      zt.success(t("common:success.save"));
    } catch {
      zt.error(t("common:errors.unknown"));
    }
  };
  const handleAddTrigger = () => {
    setTrigger(NewEmptyTriggerAstNode());
  };
  const handleDeleteTrigger = () => {
    setTrigger(NewUndefinedAstNode());
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Collapsible.Container, { className: "bg-surface-card max-w-3xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Collapsible.Title, { children: t("scenarios:trigger.run_scenario.title") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Collapsible.Content, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trans, { t, i18nKey: "scenarios:trigger.run_scenario.description", components: {
          DocLink: /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { href: executeAScenarioDocHref })
        } }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ol", { className: "list-outside list-decimal space-y-md ps-lg", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Trans, { t, i18nKey: "scenarios:trigger.run_scenario.description.api_execution", components: {
              DocLink: /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { href: createDecisionDocHref })
            } }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "list-outside space-y-xs ps-md", children: /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trans, { t, i18nKey: "scenarios:trigger.run_scenario.description.api_execution.scenario_id", components: {
              ScenarioIdLabel: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "select-none" }),
              ScenarioIdValue: /* @__PURE__ */ jsxRuntimeExports.jsx(CopyToClipboardButton, { toCopy: scenarioIteration.scenarioId, className: "inline-flex" })
            }, values: {
              scenarioId: scenarioIteration.scenarioId
            } }) }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Trans, { t, i18nKey: "scenarios:trigger.run_scenario.description.batch_execution" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "list-outside space-y-xs ps-md", children: /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(ScheduleOption, { schedule, setSchedule, viewOnly: editorMode === "view", deduplicationEnabled: currentScenario.deduplicateBatchObjects }) }) })
          ] })
        ] })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Collapsible.Container, { className: "bg-surface-card max-w-3xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Collapsible.Title, { children: t("scenarios:trigger.trigger_object.title") }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Collapsible.Content, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Callout, { variant: "outlined", className: "mb-md lg:mb-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "whitespace-pre-wrap", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trans, { t, i18nKey: "scenarios:trigger.trigger_object.callout", components: {
          DocLink: /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { href: executeAScenarioDocHref })
        } }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-sm lg:gap-md", children: [
          isTriggerNull ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-blue-58 bg-blue-96 text-blue-58 flex items-center rounded-sm border p-sm dark:bg-transparent", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trans, { t, i18nKey: "scenarios:trigger.trigger_object.no_trigger", values: {
            objectType: currentScenario.triggerObjectType
          } }) }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(AstBuilder.Provider, { scenarioId: currentScenario.id, initialData: {
            ...builderOptions
          }, mode: editorMode, children: /* @__PURE__ */ jsxRuntimeExports.jsx(AstBuilder.Root, { node: trigger, onStoreChange: (nodeStore) => {
            nodeStoreRef.current = nodeStore;
          }, onValidationUpdate: (validation) => {
            setValidationErrors(validation.errors);
          }, returnType: "bool" }) }),
          editorMode === "edit" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-row-reverse items-center justify-between gap-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-sm", children: [
              isTriggerNull ? /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "secondary", onClick: handleAddTrigger, children: t("scenarios:trigger.trigger_object.add_trigger") }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "secondary", onClick: handleDeleteTrigger, children: t("scenarios:trigger.trigger_object.delete_trigger") }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "primary", type: "submit", onClick: handleSave, disabled: saveTriggerMutation.isPending, children: [
                saveTriggerMutation.isPending ? /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "spinner", className: "size-4" }) : null,
                t("common:save")
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(EvaluationErrors, { errors: validationErrors.filter((error) => error != "TRIGGER_CONDITION_REQUIRED").map(getScenarioErrorMessage) })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(EvaluationErrors, { errors: scenarioValidation.trigger.errors.filter((error) => error != "TRIGGER_CONDITION_REQUIRED").map(getScenarioErrorMessage) })
        ] })
      ] })
    ] })
  ] });
}
export {
  Trigger as component
};

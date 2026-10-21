import { Q as jsxRuntimeExports, M as reactExports, L as useRouter } from "./server.mjs";
import { d as cn, u as useTranslation, a as useFormatDateTime, aq as Card, B as Button, I as Icon, an as Panel, M as MenuCommand, ao as PanelSharpFactory, ay as useFormatLanguage$1, S as Typo, h as formatNumber, ap as NumberInput, a6 as Input } from "./Tabs-CzpyUi7T.mjs";
import { a2 as M, dk as secondsToDisplay, dl as NewAstNode, cC as NewAggregatorAstNode, ch as v7, bR as RISK_TYPES, aJ as SECONDS_PER_UNIT, bv as getDataTypeIcon, aQ as SCREENING_CATEGORIES, ce as SCREENING_CATEGORY_I18N_KEY_MAP, cd as topicsToCategories, k as NewPayloadAstNode } from "./services-middleware-nMulUXHZ.mjs";
import { az as Route$w, Z as useLoaderData, p as pageLayoutGutter, x as useAgnosticNavigation, u as useNavigate, T as Tooltip, ax as buildPayloadAccessorsFromDataModel, ay as buildDatabaseAccessorsFromDataModel } from "./router-KSC-NEr8.mjs";
import { p as prepareScoringRulesetFn, f as commitScoringRulesetFn, s as startScoringDryRunFn, h as getScoringDryRunFn } from "./scoring-BqfH8vO5.mjs";
import { u as useQueryClient } from "./query-BmG5BEas.mjs";
import { u as useMutation } from "./useMutation-BOdeDeAR.mjs";
import { u as useServerFn } from "./useServerFn-oRH5Nw97.mjs";
import { u as useQuery } from "./useQuery-Bb0AEcpf.mjs";
import { u as useListScoringRulesetVersionsQuery, R as RULE_TYPES, N as NewSwitchAstNode, c as buildAstNodeFromModel, t as transformAstNodeToModel, a as isCompleteRule, S as SwitchNodeView, d as isAllowedScoringRuleType, e as RiskLevelSelect, g as getAggregationReturnType } from "./list-ruleset-versions-B6atqN3Q.mjs";
import { u as useUpdateScoringRulesetMutation, S as ScoringLevelThresholds } from "./ScoringLevelThresholds-Dec01Ypr.mjs";
import { u as updateScoringRulesetPayloadSchema } from "./user-scoring-BtNQ1U6a.mjs";
import { h as handleSubmit } from "./form-D2XmDKeG.mjs";
import { u as useForm } from "./useForm-qNQ8S9xN.mjs";
import { z as zt, T as Tag } from "./create-context-k6HmQ6bB.mjs";
import { M as Modal } from "./Modal-CpYmGWjB.mjs";
import { S as SelectV2 } from "./Select-Dg3p9vJ0.mjs";
import { t as te } from "./nivo-pie-rbhDIret.mjs";
import { S as Spinner } from "./Spinner-DmLieYoS.mjs";
import { i as isMaxRiskLevelInRange, s as scoringLevelEntries, S as SCORING_LEVELS_COLORS, a as SCORING_LEVELS_LABEL_KEYS } from "./display-TKj7AN5a.mjs";
import { u as useDataModelQuery } from "./get-data-model-BUauY6PR.mjs";
import { A as AstBuilder, u as useRoot, a as AstBuilderNodeSharpFactory, b as AggregationEditContent, t } from "./index-CjCfUhgh.mjs";
import { u as useOrganizationObjectTags } from "./organization-object-tags-BKGicIcs.mjs";
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
import "./short-uuid-fTZYJj_k.mjs";
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
import "./useBaseQuery-BqF2iw7Y.mjs";
import "./helpers-D-Bggz_h.mjs";
import "./join-Ce2xPJwm.mjs";
import "./DataField-BczNbAhi.mjs";
import "./data-9UajV2HK.mjs";
import "./data-BXamdbTM.mjs";
import "./tryCatch-CFf1qt2b.mjs";
import "./isNonNullish-DgEqPJBU.mjs";
import "./Switch-BV-_0Knl.mjs";
import "./data-model-Dfj0lN5a.mjs";
import "./mapToObj-C7dg8HnM.mjs";
import "./omit-qKVZGDJg.mjs";
import "./hasAtLeast-BmuNoqMd.mjs";
import "./isNullish-B8pc8Ntu.mjs";
import "./isArray-gJc74O_I.mjs";
import "./array-BFSjnO9c.mjs";
import "./nivo-legends-OEmxTBfh.mjs";
import "./string-vnnIQF3x.mjs";
import "./line-CXsqndjH.mjs";
import "./use-callback-ref-Bwe341Yf.mjs";
import "./Callout-B0OuRL3q.mjs";
import "./ExternalLink-BlVgwkVd.mjs";
import "./documentation-href-DY9fs71n.mjs";
import "./Logo-3vzUxSrh.mjs";
import "./scenario-validation-error-messages-DGyZ9TEq.mjs";
import "./flatMap-CdA7bREZ.mjs";
import "./Nudge-Cmzwt2Be.mjs";
import "./create-navigation-option-CCfvMbYU.mjs";
import "./Stepper-D5HOcTsM.mjs";
import "./Checkbox-C8nszDsh.mjs";
import "./organization-detail-BGvqBGx1.mjs";
import "./Highlight-NVjBw0RI.mjs";
import "./match-sorter.esm-BRMYSlZQ.mjs";
import "./ExpandableGroupTagLine-MgT0uQKb.mjs";
import "./Popover-Cp1XdSV2.mjs";
const useCommitScoringRulesetMutation = () => {
  const commitScoringRuleset = useServerFn(commitScoringRulesetFn);
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["scoring", "commit-ruleset"],
    mutationFn: async (recordType) => {
      await commitScoringRuleset({ data: { recordType } });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["scoring"] });
    }
  });
};
const SCORING_DRY_RUN_POLL_INTERVAL_MS = 1e3;
const useGetScoringDryRunQuery = (recordType, options) => {
  const getScoringDryRun = useServerFn(getScoringDryRunFn);
  return useQuery({
    queryKey: ["scoring", "dry-run", recordType],
    queryFn: () => getScoringDryRun({ data: { recordType } }),
    enabled: !!recordType && (options?.enabled ?? true),
    // forced refesh or depending of the status
    refetchInterval: options?.refetchInterval ?? ((query) => {
      const status = query.state.data?.dryRun?.status;
      return status === "running" || status === "pending" ? SCORING_DRY_RUN_POLL_INTERVAL_MS : false;
    })
  });
};
const usePrepareScoringRulesetMutation = () => {
  const prepareScoringRuleset = useServerFn(prepareScoringRulesetFn);
  const router = useRouter();
  return useMutation({
    mutationKey: ["scoring", "prepare-ruleset"],
    mutationFn: async (recordType) => {
      await prepareScoringRuleset({ data: { recordType } });
    },
    onSuccess: () => {
      router.invalidate();
    }
  });
};
const useStartScoringDryRunMutation = () => {
  const startScoringDryRun = useServerFn(startScoringDryRunFn);
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["scoring", "start-dry-run"],
    mutationFn: async (recordType) => {
      return startScoringDryRun({ data: { recordType } });
    },
    onSuccess: (result, recordType) => {
      queryClient.setQueryData(["scoring", "dry-run", recordType], result);
    }
  });
};
function ScoringBatchTest({ ruleset, settings, lastDryRun }) {
  const { t: t2 } = useTranslation(["user-scoring"]);
  const language = useFormatLanguage$1();
  const formatDateTime = useFormatDateTime();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "grid min-w-0 flex-1 gap-sm lg:max-w-md", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Typo, { variant: "title2", className: "flex min-w-0 items-center gap-sm p-md", children: [
      t2("user-scoring:batch_test.title", { name: ruleset.name }),
      M(lastDryRun).with({ status: "pending" }, () => /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { color: "orange", children: t2("user-scoring:batch_test.pending") })).with({ status: "completed" }, () => /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { color: "purple", children: t2("user-scoring:batch_test.completed") })).with({ status: "running" }, () => /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { color: "green", children: t2("user-scoring:batch_test.running") })).with({ status: "cancelled" }, () => /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { color: "red", children: t2("user-scoring:batch_test.cancelled") })).otherwise(() => /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, {}))
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-w-0 gap-sm justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "min-w-0 text-grey-placeholder", children: t2("user-scoring:ruleset.batch_test.progress", {
        total: lastDryRun?.recordCount ?? 0,
        progress: formatNumber(lastDryRun?.progress ?? 0, { language, style: "percent" })
      }) }),
      lastDryRun?.createdAt ? /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { color: "grey", children: formatDateTime(lastDryRun?.createdAt) }) : null
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PieDistribution, { distribution: lastDryRun?.distribution ?? [], settings })
  ] });
}
function PieDistribution({
  distribution,
  settings
}) {
  const { t: t2 } = useTranslation(["user-scoring", "common"]);
  const language = useFormatLanguage$1();
  if (!distribution.length) return /* @__PURE__ */ jsxRuntimeExports.jsx(PieSkeletton, {});
  const maxRiskLevel = settings.maxRiskLevel;
  if (!isMaxRiskLevelInRange(maxRiskLevel)) return null;
  const colors = SCORING_LEVELS_COLORS[maxRiskLevel];
  const labelKeys = SCORING_LEVELS_LABEL_KEYS[maxRiskLevel];
  const total = distribution.reduce((sum, item) => sum + item.count, 0);
  const pieData = distribution.filter((item) => item.count > 0).map((item) => ({
    id: item.riskLevel,
    label: t2(labelKeys[item.riskLevel] ?? item.riskLevel.toString()),
    value: item.count,
    color: colors[item.riskLevel] ?? "#ccc"
  }));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid min-w-0 grid-cols-[auto_minmax(0,1fr)] gap-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-sm", children: pieData.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-xs", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "size-3 rounded-full shrink-0", style: { backgroundColor: item.color } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium text-grey-secondary", children: item.label })
    ] }, item.id)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative h-80 min-w-0 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      te,
      {
        data: pieData,
        innerRadius: 0.7,
        padAngle: 1,
        colors: { datum: "data.color" },
        enableArcLabels: false,
        tooltip: ({ datum }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-xs bg-surface-card p-xs rounded-lg border border-grey-border shadow-sm text-s text-grey-primary whitespace-nowrap", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "size-3 rounded-full shrink-0", style: { backgroundColor: datum.color } }),
          datum.label,
          ": ",
          datum.value,
          " (",
          Math.round(datum.value / total * 100),
          "%)"
        ] }),
        margin: { top: 20, right: 20, bottom: 20, left: 20 },
        arcLinkLabel: (datum) => formatNumber(datum.value / total, { language, style: "percent", maximumFractionDigits: 1 }),
        activeOuterRadiusOffset: 10,
        arcLinkLabelsStraightLength: 0,
        arcLinkLabelsThickness: 0,
        arcLinkLabelsSkipAngle: 8
      }
    ) })
  ] });
}
function PieSkeletton() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid min-w-0 animate-pulse grid-cols-[auto_minmax(0,1fr)] gap-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-sm", children: Array.from({ length: 5 }).map((_, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-4 w-8 rounded-xs bg-grey-placeholder" }, index)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-80 min-w-0 items-center justify-center overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "size-full max-h-80 max-w-80 text-grey-placeholder", viewBox: "0 0 100 100", children: /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "50", cy: "50", r: "40", stroke: "currentColor", strokeWidth: "14", fill: "none" }) }) })
  ] });
}
function formatDuration(seconds, t2) {
  const { value, unit } = secondsToDisplay(seconds);
  if (!unit) return null;
  return `${value} ${t2(`common:duration_unit.${unit}`)}`;
}
function GeneralInfoCard({ ruleset, settings, preparationStatus, lastDryRun }) {
  const { t: t2 } = useTranslation(["user-scoring", "common"]);
  const [viewBatchTest, setViewBatchTest] = reactExports.useState(false);
  const navigate = useAgnosticNavigation();
  const formatDateTime = useFormatDateTime();
  const prepareMutation = usePrepareScoringRulesetMutation();
  const commitMutation = useCommitScoringRulesetMutation();
  const cooldownLabel = formatDuration(ruleset.cooldownSeconds, t2);
  const scoringIntervalLabel = formatDuration(ruleset.scoringIntervalSeconds, t2);
  const versionsQuery = useListScoringRulesetVersionsQuery(ruleset.recordType);
  const versionOptions = (versionsQuery.data?.versions ?? []).map((v) => ({
    value: v.status === "committed" ? v.version.toString() : "draft",
    label: v.status === "committed" ? `V${v.version}` : "draft"
  }));
  const [editPanelOpen, setEditPanelOpen] = reactExports.useState(false);
  const startDryRun = useStartScoringDryRunMutation();
  const { data: newDryRun } = useGetScoringDryRunQuery(ruleset.recordType, {
    enabled: viewBatchTest || lastDryRun != null
  });
  const handleVersionChange = (version) => {
    navigate(`/user-scoring/${ruleset.recordType}/${version}`);
  };
  const onLaunchTests = () => {
    setViewBatchTest(true);
    startDryRun.mutate(ruleset.recordType, {
      onError: () => {
        zt.error(t2("common:errors.unknown"));
        if (lastDryRun == null) setViewBatchTest(false);
      }
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("flex min-w-0 w-full flex-col lg:flex-row", pageLayoutGutter.gap), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "flex min-w-0 flex-1 flex-col gap-md p-md", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-h3 font-semibold text-grey-primary", children: t2("user-scoring:ruleset.title") }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SelectV2,
            {
              options: versionOptions,
              placeholder: t2("user-scoring:ruleset.version_placeholder"),
              value: ruleset.status === "draft" ? "draft" : ruleset.version.toString(),
              onChange: handleVersionChange,
              variant: "tag",
              menuClassName: "min-w-30"
            }
          ),
          ruleset.status === "draft" && /* @__PURE__ */ jsxRuntimeExports.jsx(BatchTest, { onLaunchTest: onLaunchTests, isLaunching: startDryRun.isPending }),
          preparationStatus ? preparationStatus.status === "required" ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              disabled: preparationStatus.serviceStatus === "occupied" || prepareMutation.isPending || ruleset.rules.length === 0,
              onClick: () => prepareMutation.mutate(ruleset.recordType, {
                onError: () => zt.error(t2("common:errors.unknown"))
              }),
              children: t2("user-scoring:ruleset.prepare")
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              disabled: commitMutation.isPending || ruleset.rules.length === 0,
              onClick: () => commitMutation.mutate(ruleset.recordType, {
                onError: () => zt.error(t2("common:errors.unknown"))
              }),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "commit", className: "size-4" }),
                t2("user-scoring:ruleset.commit")
              ]
            }
          ) : null,
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", mode: "icon", onClick: () => setEditPanelOpen(true), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "edit", className: "size-4" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-md text-s text-grey-secondary", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          t2("user-scoring:ruleset.last_update"),
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-grey-primary", children: formatDateTime(ruleset.createdAt, { dateStyle: "medium", timeStyle: "short" }) })
        ] }),
        cooldownLabel ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-grey-border", children: "|" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            t2("user-scoring:ruleset.cooldown"),
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-grey-primary", children: cooldownLabel })
          ] })
        ] }) : null,
        scoringIntervalLabel ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-grey-border", children: "|" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            t2("user-scoring:ruleset.score_renew"),
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-grey-primary", children: scoringIntervalLabel })
          ] })
        ] }) : null
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(RiskLevelBadges, { maxRiskLevel: settings.maxRiskLevel, thresholds: ruleset.thresholds }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Panel.Root, { open: editPanelOpen, onOpenChange: setEditPanelOpen, children: /* @__PURE__ */ jsxRuntimeExports.jsx(EditGeneralSettingsPanel, { ruleset, maxRiskLevel: settings.maxRiskLevel }) })
    ] }),
    viewBatchTest || lastDryRun != null ? /* @__PURE__ */ jsxRuntimeExports.jsx(ScoringBatchTest, { ruleset, settings, lastDryRun: newDryRun?.dryRun ?? lastDryRun }) : null
  ] });
}
function DurationDaysField({
  value,
  onChange
}) {
  const { t: t2 } = useTranslation(["common"]);
  const [days, setDays] = reactExports.useState(value !== void 0 ? value / SECONDS_PER_UNIT.days : 0);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      NumberInput,
      {
        className: "max-w-15",
        borderColor: days < 1 ? "redfigma-47" : "greyfigma-90",
        value: days,
        onChange: (v) => {
          setDays(v);
          onChange(v > 0 ? v * SECONDS_PER_UNIT.days : void 0);
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-grey-secondary", children: t2("common:duration_unit.days") })
  ] });
}
function EditGeneralSettingsPanel({
  ruleset,
  maxRiskLevel
}) {
  const { t: t2 } = useTranslation(["common", "user-scoring"]);
  const router = useRouter();
  const navigate = useNavigate();
  const updateMutation = useUpdateScoringRulesetMutation();
  const panelSharp = PanelSharpFactory.useSharp();
  const form = useForm({
    defaultValues: {
      id: ruleset.id,
      recordType: ruleset.recordType,
      name: ruleset.name,
      thresholds: ruleset.thresholds,
      cooldownSeconds: ruleset.cooldownSeconds,
      scoringIntervalSeconds: ruleset.scoringIntervalSeconds,
      rules: ruleset.rules.map((r) => ({
        stableId: r.stableId,
        name: r.name,
        description: r.description,
        riskType: r.riskType,
        ast: r.ast
      }))
    },
    validators: {
      onChange: updateScoringRulesetPayloadSchema
    },
    onSubmit: async ({ formApi, value }) => {
      if (formApi.state.isValid) {
        try {
          await updateMutation.mutateAsync(value);
          zt.success(t2("common:success.save"));
          panelSharp.actions.close();
          await router.invalidate();
          navigate({
            to: "/user-scoring/$recordType/$version",
            params: { recordType: ruleset.recordType, version: "draft" }
          });
        } catch {
          zt.error(t2("common:errors.unknown"));
        }
      }
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Panel.Container, { size: "small", children: /* @__PURE__ */ jsxRuntimeExports.jsx("form", { className: "contents", onSubmit: handleSubmit(form), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Panel.Content, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Panel.Header, { children: t2("user-scoring:ruleset.edit_settings_title") }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-md", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-sm", children: [
        t2("user-scoring:section.create_panel.general_settings"),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-grey-border rounded-md p-md grid grid-cols-[1fr_repeat(3,_auto)] gap-x-sm gap-y-md", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-subgrid col-span-full items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-s", children: t2("user-scoring:section.create_panel.lower_score_duration") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(form.Field, { name: "cooldownSeconds", children: (field) => /* @__PURE__ */ jsxRuntimeExports.jsx(DurationDaysField, { value: field.state.value, onChange: field.handleChange }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip.Default, { content: t2("user-scoring:section.create_panel.lower_score_duration_tooltip"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "helpcenter", className: "size-5 text-grey-secondary" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-subgrid col-span-full items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-s", children: t2("user-scoring:section.create_panel.recalculation_duration") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(form.Field, { name: "scoringIntervalSeconds", children: (field) => /* @__PURE__ */ jsxRuntimeExports.jsx(DurationDaysField, { value: field.state.value, onChange: field.handleChange }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip.Default, { content: t2("user-scoring:section.create_panel.recalculation_duration_tooltip"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "helpcenter", className: "size-5 text-grey-secondary" }) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(form.Field, { name: "thresholds", children: (field) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        ScoringLevelThresholds,
        {
          maxRiskLevel,
          thresholds: field.state.value,
          onThresholdsChange: field.handleChange
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Panel.Footer, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Panel.FooterButton,
        {
          variant: "secondary",
          onClick: () => panelSharp.actions.close(),
          label: t2("user-scoring:section.create_panel.cancel")
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(form.Subscribe, { selector: (s) => [s.canSubmit, s.isSubmitting], children: ([canSubmit, isSubmitting]) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Panel.FooterButton,
        {
          disabled: !canSubmit,
          isLoading: isSubmitting,
          type: "submit",
          label: t2("user-scoring:section.create_panel.validate")
        }
      ) })
    ] })
  ] }) }) });
}
function RiskLevelBadges({ maxRiskLevel, thresholds }) {
  const { t: t2 } = useTranslation(["user-scoring"]);
  if (!isMaxRiskLevelInRange(maxRiskLevel)) {
    return null;
  }
  const colorEntries = scoringLevelEntries(SCORING_LEVELS_COLORS[maxRiskLevel]);
  const labelKeys = SCORING_LEVELS_LABEL_KEYS[maxRiskLevel];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-s text-grey-secondary", children: t2("user-scoring:ruleset.risk_level") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-sm", children: colorEntries.map(([level, color], i) => {
      const isLast = i === colorEntries.length - 1;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(reactExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-xs h-6 px-xs rounded-full border", style: { borderColor: color }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-3 rounded-full shrink-0", style: { backgroundColor: color } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-grey-primary", children: t2(labelKeys[level] ?? "") })
        ] }),
        !isLast ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium text-grey-placeholder", children: `≤ ${thresholds[i]} <` }) : null
      ] }, level);
    }) })
  ] });
}
function BatchTest({ onLaunchTest, isLaunching }) {
  const { t: t2 } = useTranslation(["user-scoring", "common"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal.Root, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.Trigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "primary", appearance: "stroked", children: t2("user-scoring:ruleset.batch_test_button") }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal.Content, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.Title, { children: t2("user-scoring:ruleset.batch_test_title") }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-sm p-md", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: t2("user-scoring:ruleset.batch_test_description1") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: t2("user-scoring:ruleset.batch_test_description2") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal.Footer, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.FooterButton, { variant: "secondary", isCloseButton: true, label: t2("common:cancel") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Modal.FooterButton,
          {
            variant: "primary",
            onClick: onLaunchTest,
            isCloseButton: true,
            isLoading: isLaunching,
            label: t2("user-scoring:ruleset.batch_test_run")
          }
        )
      ] })
    ] })
  ] });
}
function BoolSwitchEdit({ conditions, maxRiskLevel, onChange }) {
  const { t: t2 } = useTranslation(["user-scoring"]);
  const setIfTrue = (impact) => onChange({ ...conditions, ifTrue: impact });
  const setIfFalse = (impact) => onChange({ ...conditions, ifFalse: impact });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      BoolRow,
      {
        label: t2("user-scoring:switch.bool.if_true"),
        showThen: true,
        impact: conditions.ifTrue,
        maxRiskLevel,
        onImpactChange: setIfTrue
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      BoolRow,
      {
        label: t2("user-scoring:switch.bool.if_false"),
        impact: conditions.ifFalse,
        maxRiskLevel,
        onImpactChange: setIfFalse
      }
    )
  ] });
}
function BoolRow({ label, showThen = false, impact, maxRiskLevel, onImpactChange }) {
  const { t: t2 } = useTranslation(["user-scoring"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-[164px_minmax(auto,_40px)_70px_auto] items-center gap-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-right text-purple-primary", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-center text-grey-secondary", children: showThen ? t2("user-scoring:switch.bool.then") : "" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(NumberInput, { value: impact.modifier, onChange: (value) => onImpactChange({ ...impact, modifier: value }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      RiskLevelSelect,
      {
        floor: impact.floor,
        maxRiskLevel,
        onChange: (floor) => onImpactChange({ ...impact, floor })
      }
    )
  ] });
}
function createDefaultConditions(fieldType) {
  switch (fieldType) {
    case "Int":
    case "Float":
      return {
        type: "number",
        branches: [{ value: 0, impact: { modifier: 0 } }],
        default: { modifier: 0 }
      };
    case "String":
      return {
        type: "string",
        branches: [{ value: { op: "=", value: "" }, impact: { modifier: 0 } }],
        default: { modifier: 0 }
      };
    case "Bool":
      return { type: "bool", ifTrue: { modifier: 0 }, ifFalse: { modifier: 0 } };
  }
}
function NumberSwitchEdit({ conditions, maxRiskLevel, onChange }) {
  const { t: t2 } = useTranslation(["user-scoring"]);
  const { branches, default: defaultImpact } = conditions;
  const setThreshold = (idx, value) => {
    const next = branches.map((b, i) => i === idx ? { ...b, value } : b);
    onChange({ ...conditions, branches: next });
  };
  const setImpact = (idx, impact) => {
    if (idx === "default") {
      onChange({ ...conditions, default: impact });
    } else {
      const next = branches.map((b, i) => i === idx ? { ...b, impact } : b);
      onChange({ ...conditions, branches: next });
    }
  };
  const addBranch = () => {
    const lastValue = branches.at(-1)?.value ?? 0;
    onChange({ ...conditions, branches: [...branches, { value: lastValue + 1, impact: { modifier: 0 } }] });
  };
  const removeBranch = (idx) => {
    onChange({ ...conditions, branches: branches.filter((_, i) => i !== idx) });
  };
  const swapImpacts = (idx, dir) => {
    const target = dir === "up" ? idx - 1 : idx + 1;
    if (target < 0 || target >= branches.length) return;
    const next = branches.map((b, i) => {
      if (i === idx) return { ...b, impact: branches[target].impact };
      if (i === target) return { ...b, impact: branches[idx].impact };
      return b;
    });
    onChange({ ...conditions, branches: next });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-sm", children: [
    branches[0] && /* @__PURE__ */ jsxRuntimeExports.jsx(
      BranchRow,
      {
        variant: "first",
        threshold: branches[0].value,
        impact: branches[0].impact,
        maxRiskLevel,
        onThresholdChange: (v) => setThreshold(0, v),
        onImpactChange: (imp) => setImpact(0, imp)
      }
    ),
    branches.slice(1).map((branch, i) => {
      const realIdx = i + 1;
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        BranchRow,
        {
          variant: "middle",
          rangeStart: branches[realIdx - 1].value + 1,
          threshold: branch.value,
          impact: branch.impact,
          maxRiskLevel,
          onThresholdChange: (v) => setThreshold(realIdx, v),
          onImpactChange: (imp) => setImpact(realIdx, imp),
          onMoveUp: () => swapImpacts(realIdx, "up"),
          onMoveDown: () => swapImpacts(realIdx, "down"),
          onDelete: () => removeBranch(realIdx)
        },
        realIdx
      );
    }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      BranchRow,
      {
        variant: "default",
        rangeStart: branches.at(-1) != null ? branches.at(-1).value + 1 : null,
        impact: defaultImpact,
        maxRiskLevel,
        onImpactChange: (imp) => setImpact("default", imp)
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: addBranch, className: "self-start shadow-sm", appearance: "stroked", children: t2("user-scoring:switch.add_condition") })
  ] });
}
function BranchRow({
  variant,
  threshold,
  rangeStart,
  impact,
  maxRiskLevel,
  onThresholdChange,
  onImpactChange,
  onMoveUp,
  onMoveDown,
  onDelete
}) {
  const { t: t2 } = useTranslation(["user-scoring"]);
  const label = variant === "first" ? t2("user-scoring:switch.number.first") : variant === "middle" ? t2("user-scoring:switch.number.middle") : t2("user-scoring:switch.number.default");
  const reorderButtons = /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: onMoveUp, className: "leading-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "arrow-2-up", className: "size-4" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: onMoveDown, className: "leading-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "arrow-2-down", className: "size-4" }) })
  ] });
  let conditionRow;
  if (variant === "middle") {
    conditionRow = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-[24px_164px_70px_minmax(auto,_40px)_70px_1fr_24px] items-center gap-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col", children: reorderButtons }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-right text-purple-primary", children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { readOnly: true, value: rangeStart ?? "" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-center text-grey-secondary", children: t2("user-scoring:switch.number.and") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(NumberInput, { value: threshold ?? 0, onChange: (value) => onThresholdChange?.(value) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: onDelete, className: "text-grey-secondary hover:text-red-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "delete", className: "size-5" }) })
    ] });
  } else {
    conditionRow = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-[24px_164px_70px] items-center gap-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "invisible flex flex-col", children: reorderButtons }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-right text-purple-primary", children: label }),
      variant === "first" ? /* @__PURE__ */ jsxRuntimeExports.jsx(NumberInput, { value: threshold ?? 0, onChange: (value) => onThresholdChange?.(value) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { readOnly: true, value: rangeStart ?? "" })
    ] });
  }
  const impactRow = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-[24px_164px_minmax(auto,_40px)_70px_auto] items-center gap-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-center text-grey-secondary", children: t2("user-scoring:switch.number.then") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(NumberInput, { value: impact.modifier, onChange: (value) => onImpactChange({ ...impact, modifier: value }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      RiskLevelSelect,
      {
        floor: impact.floor,
        maxRiskLevel,
        onChange: (floor) => onImpactChange({ ...impact, floor })
      }
    )
  ] });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-sm", children: [
    conditionRow,
    impactRow
  ] });
}
function ListValueInput({ value, customLists, onChange }) {
  const { t: t2 } = useTranslation(["user-scoring"]);
  const [inputText, setInputText] = reactExports.useState("");
  const [isDropdownOpen, setIsDropdownOpen] = reactExports.useState(false);
  const containerRef = reactExports.useRef(null);
  const inputRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const handleMouseDown = (e) => {
      if (!containerRef.current?.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleMouseDown);
    return () => document.removeEventListener("mousedown", handleMouseDown);
  }, []);
  const isCustomListSelected = value.type === "customList" && value.listId !== "";
  const stringValues = value.type === "stringList" ? value.values : [];
  const isStringListMode = stringValues.length > 0;
  const filteredLists = reactExports.useMemo(
    () => customLists.filter((l) => l.name.toLowerCase().includes(inputText.toLowerCase())),
    [customLists, inputText]
  );
  const shouldShowDropdown = isDropdownOpen && !isStringListMode && !isCustomListSelected && filteredLists.length > 0;
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputText.trim()) {
      e.preventDefault();
      onChange({ type: "stringList", values: [...stringValues, inputText.trim()] });
      setInputText("");
      setIsDropdownOpen(false);
    }
    if (e.key === "Backspace" && inputText === "" && stringValues.length > 0) {
      onChange({ type: "stringList", values: stringValues.slice(0, -1) });
    }
    if (e.key === "Escape") {
      setIsDropdownOpen(false);
    }
  };
  if (isCustomListSelected) {
    const list = customLists.find((l) => l.id === value.listId);
    const listName = list?.name ?? value.listId;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "flex flex-1 items-center gap-sm rounded-md border border-grey-border px-xs h-10 cursor-pointer hover:bg-grey-bg",
        onClick: () => {
          onChange({ type: "customList", listId: "" });
          setInputText(listName);
          setTimeout(() => inputRef.current?.focus(), 0);
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1 text-s text-grey-primary", children: listName })
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: containerRef, className: "relative flex-1", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex flex-wrap items-center gap-xs rounded-md border border-grey-border px-xs py-2xs min-h-10 cursor-text",
        onClick: () => inputRef.current?.focus(),
        children: [
          stringValues.map((v, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "span",
            {
              className: "flex items-center gap-xs rounded-full border border-grey-border bg-grey-bg px-xs py-0.5 text-xs text-grey-primary",
              children: [
                v,
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: (e) => {
                      e.stopPropagation();
                      onChange({ type: "stringList", values: stringValues.filter((_, j) => j !== i) });
                    },
                    className: "text-grey-secondary hover:text-grey-primary",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "cross", className: "size-3" })
                  }
                )
              ]
            },
            i
          )),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              ref: inputRef,
              type: "text",
              value: inputText,
              onChange: (e) => {
                setInputText(e.target.value);
                setIsDropdownOpen(true);
              },
              onKeyDown: handleKeyDown,
              className: "flex-1 min-w-20 bg-transparent text-s text-grey-primary outline-none",
              placeholder: stringValues.length === 0 ? t2("user-scoring:switch.string.search_placeholder") : ""
            }
          )
        ]
      }
    ),
    shouldShowDropdown && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute z-50 mt-xs w-full rounded-md border border-grey-border bg-white shadow-md max-h-48 overflow-y-auto", children: filteredLists.map((list) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        className: "w-full px-md py-xs text-left text-s text-grey-primary hover:bg-grey-bg flex items-center gap-sm",
        onMouseDown: (e) => {
          e.preventDefault();
          onChange({ type: "customList", listId: list.id });
          setInputText("");
          setIsDropdownOpen(false);
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "list", className: "size-4" }),
          list.name
        ]
      },
      list.id
    )) })
  ] });
}
function StringSwitchEdit({ conditions, maxRiskLevel, onChange, customLists = [] }) {
  const { t: t2 } = useTranslation(["user-scoring"]);
  const { branches, default: defaultImpact } = conditions;
  const opOptions = [
    { label: t2("user-scoring:switch.string.op.eq"), value: "=" },
    { label: t2("user-scoring:switch.string.op.neq"), value: "≠" },
    { label: t2("user-scoring:switch.string.op.contains"), value: "StringContains" },
    { label: t2("user-scoring:switch.string.op.not_contains"), value: "StringNotContain" },
    { label: t2("user-scoring:switch.string.op.starts_with"), value: "StringStartsWith" },
    { label: t2("user-scoring:switch.string.op.ends_with"), value: "StringEndsWith" },
    { label: t2("user-scoring:switch.string.op.in_list"), value: "IsInList" },
    { label: t2("user-scoring:switch.string.op.not_in_list"), value: "IsNotInList" }
  ];
  const setOp = (idx, op) => {
    const isListOp = op === "IsInList" || op === "IsNotInList";
    const defaultValue = isListOp ? { type: "customList", listId: "" } : "";
    const next = branches.map(
      (b, i) => i === idx ? { ...b, value: { op, value: defaultValue } } : b
    );
    onChange({ ...conditions, branches: next });
  };
  const setValue = (idx, value) => {
    const next = branches.map((b, i) => {
      if (i !== idx) return b;
      return { ...b, value: { ...b.value, value } };
    });
    onChange({ ...conditions, branches: next });
  };
  const setImpact = (idx, impact) => {
    if (idx === "default") {
      onChange({ ...conditions, default: impact });
    } else {
      const next = branches.map((b, i) => i === idx ? { ...b, impact } : b);
      onChange({ ...conditions, branches: next });
    }
  };
  const addBranch = () => {
    onChange({
      ...conditions,
      branches: [...branches, { value: { op: "=", value: "" }, impact: { modifier: 0 } }]
    });
  };
  const removeBranch = (idx) => {
    onChange({ ...conditions, branches: branches.filter((_, i) => i !== idx) });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-sm", children: [
    branches.map((branch, idx) => {
      const op = branch.value.op;
      const isListOp = op === "IsInList" || op === "IsNotInList";
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SelectV2,
            {
              value: op,
              placeholder: "=",
              options: opOptions,
              onChange: (v) => v && setOp(idx, v),
              className: "w-[200px]"
            }
          ),
          isListOp ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            ListValueInput,
            {
              value: branch.value.value,
              customLists,
              onChange: (v) => setValue(idx, v)
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              className: "flex-1",
              value: branch.value.value,
              onChange: (e) => setValue(idx, e.target.value)
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => removeBranch(idx),
              className: "text-grey-secondary hover:text-red-primary",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "delete", className: "size-5" })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-[200px_minmax(auto,_40px)_70px_auto] items-center gap-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-center text-grey-secondary", children: t2("user-scoring:switch.string.then") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            NumberInput,
            {
              value: branch.impact.modifier,
              onChange: (value) => setImpact(idx, { ...branch.impact, modifier: value })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            RiskLevelSelect,
            {
              floor: branch.impact.floor,
              maxRiskLevel,
              onChange: (floor) => setImpact(idx, { ...branch.impact, floor })
            }
          )
        ] })
      ] }, idx);
    }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-[200px_minmax(auto,_40px)_70px_auto] items-center gap-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-right text-purple-primary", children: t2("user-scoring:switch.string.else") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        NumberInput,
        {
          value: defaultImpact.modifier,
          onChange: (value) => setImpact("default", { ...defaultImpact, modifier: value })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        RiskLevelSelect,
        {
          floor: defaultImpact.floor,
          maxRiskLevel,
          onChange: (floor) => setImpact("default", { ...defaultImpact, floor })
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: addBranch, className: "self-start shadow-sm", appearance: "stroked", children: t2("user-scoring:switch.add_condition") })
  ] });
}
function InlineAggregationEditorContent({ onChange }) {
  const nodeSharp = AstBuilderNodeSharpFactory.useSharp();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AggregationEditContent, { onChange: () => onChange(t(nodeSharp.value.node)) });
}
function InlineAggregationEditor({
  node,
  onChange
}) {
  const nodeSharp = useRoot({ node, validation: { errors: [], evaluation: [] } }, false);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AstBuilderNodeSharpFactory.Provider, { value: nodeSharp, children: /* @__PURE__ */ jsxRuntimeExports.jsx(InlineAggregationEditorContent, { onChange }) });
}
function AggregateRuleEdit({
  model,
  maxRiskLevel,
  dataModel,
  customLists,
  onModelChange
}) {
  const { t: t2 } = useTranslation(["user-scoring"]);
  const [conditions, setConditions] = reactExports.useState(model.conditions);
  const [aggregationNode, setAggregationNode] = reactExports.useState(model.field);
  const handleAggregationChange = (updatedNode) => {
    const newReturnType = getAggregationReturnType(updatedNode, dataModel);
    const prevReturnType = aggregationNode ? getAggregationReturnType(aggregationNode, dataModel) : null;
    let newConditions = conditions;
    if (!newConditions || newReturnType !== prevReturnType) {
      newConditions = newReturnType && isAllowedScoringRuleType(newReturnType) ? createDefaultConditions(newReturnType) : null;
      setConditions(newConditions);
    }
    setAggregationNode(updatedNode);
    onModelChange?.({ type: "aggregate", field: updatedNode, conditions: newConditions });
  };
  const handleConditionsChange = (next) => {
    setConditions(next);
    onModelChange?.({ type: "aggregate", field: aggregationNode, conditions: next });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: t2("user-scoring:switch.depending_on") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-md bg-grey-background-light border border-grey-border rounded-md flex flex-col gap-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        InlineAggregationEditor,
        {
          node: aggregationNode ?? NewAggregatorAstNode("SUM"),
          onChange: handleAggregationChange
        }
      ) })
    ] }),
    conditions ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: t2("user-scoring:switch.apply_conditions") }),
      M(conditions).with({ type: "number" }, (c) => /* @__PURE__ */ jsxRuntimeExports.jsx(NumberSwitchEdit, { conditions: c, maxRiskLevel, onChange: handleConditionsChange })).with({ type: "bool" }, (c) => /* @__PURE__ */ jsxRuntimeExports.jsx(BoolSwitchEdit, { conditions: c, maxRiskLevel, onChange: handleConditionsChange })).with({ type: "string" }, (c) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        StringSwitchEdit,
        {
          conditions: c,
          maxRiskLevel,
          customLists,
          onChange: handleConditionsChange
        }
      )).exhaustive()
    ] }) : null
  ] });
}
function PastAlertsRuleEdit({ model, maxRiskLevel, onModelChange }) {
  const { t: t2 } = useTranslation(["user-scoring"]);
  const [conditions, setConditions] = reactExports.useState(model.conditions);
  const handleConditionsChange = (next) => {
    setConditions(next);
    onModelChange?.({ type: "past_alerts", conditions: next });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: t2("user-scoring:switch.past_alerts.depending_on") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: t2("user-scoring:switch.apply_conditions") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(BoolSwitchEdit, { conditions, maxRiskLevel, onChange: handleConditionsChange })
  ] });
}
function TagsSwitchEdit({ options, conditions, maxRiskLevel, onChange, normalizeValue }) {
  const { t: t2 } = useTranslation(["user-scoring"]);
  const { branches, default: defaultImpact } = conditions;
  const setBranch = (idx, branch) => {
    onChange({ ...conditions, branches: branches.map((b, i) => i === idx ? branch : b) });
  };
  const addBranch = () => {
    onChange({ ...conditions, branches: [...branches, { value: [], impact: { modifier: 0 } }] });
  };
  const removeBranch = (idx) => {
    onChange({ ...conditions, branches: branches.filter((_, i) => i !== idx) });
  };
  const setDefaultImpact = (impact) => {
    onChange({ ...conditions, default: impact });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-sm", children: [
    branches.map((branch, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-[1fr_minmax(auto,_40px)_70px_auto_auto] items-center gap-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SelectV2,
        {
          multiple: true,
          options,
          placeholder: t2("user-scoring:switch.screening_tags.tags_placeholder"),
          value: normalizeValue ? normalizeValue(branch.value) : branch.value,
          onChange: (values) => setBranch(idx, { ...branch, value: values }),
          className: "flex-1"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-center text-grey-secondary", children: t2("user-scoring:switch.then") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        NumberInput,
        {
          value: branch.impact.modifier,
          onChange: (value) => setBranch(idx, { ...branch, impact: { ...branch.impact, modifier: value } })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        RiskLevelSelect,
        {
          floor: branch.impact.floor,
          maxRiskLevel,
          onChange: (floor) => setBranch(idx, { ...branch, impact: { ...branch.impact, floor } })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => removeBranch(idx),
          className: "text-grey-secondary hover:text-red-primary",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "delete", className: "size-5" })
        }
      )
    ] }, idx)),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-[1fr_minmax(auto,_40px)_70px_auto_auto] items-center gap-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-right text-purple-primary", children: t2("user-scoring:switch.else") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        NumberInput,
        {
          value: defaultImpact.modifier,
          onChange: (value) => setDefaultImpact({ ...defaultImpact, modifier: value })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        RiskLevelSelect,
        {
          floor: defaultImpact.floor,
          maxRiskLevel,
          onChange: (floor) => setDefaultImpact({ ...defaultImpact, floor })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: addBranch, className: "self-start shadow-sm", appearance: "stroked", children: t2("user-scoring:switch.screening_tags.add_branch") })
  ] });
}
function TagsRuleEdit({ model, maxRiskLevel, onModelChange }) {
  const { t: t2 } = useTranslation(["user-scoring", "scenarios"]);
  const { orgObjectTags } = useOrganizationObjectTags();
  const [conditions, setConditions] = reactExports.useState(model.conditions);
  const handleConditionsChange = (next) => {
    setConditions(next);
    onModelChange?.({ type: model.type, conditions: next });
  };
  const tagOptions = M(model).with(
    { type: "screening_tags" },
    () => SCREENING_CATEGORIES.map((cat) => ({
      value: cat,
      label: t2(`scenarios:monitoring_list_check.hit_type.${SCREENING_CATEGORY_I18N_KEY_MAP[cat]}`)
    }))
  ).with({ type: "entity_tags" }, () => orgObjectTags.map((tag) => ({ value: tag.id, label: tag.name }))).exhaustive();
  const normalizeValue = model.type === "screening_tags" ? topicsToCategories : void 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: M(model).with({ type: "screening_tags" }, () => t2("user-scoring:switch.screening_tags.depending_on")).with({ type: "entity_tags" }, () => t2("user-scoring:switch.entity_tags.depending_on")).exhaustive() }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: t2("user-scoring:switch.apply_conditions") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      TagsSwitchEdit,
      {
        conditions,
        maxRiskLevel,
        options: tagOptions,
        normalizeValue,
        onChange: handleConditionsChange
      }
    )
  ] });
}
function UserAttributeRuleEdit({
  model,
  maxRiskLevel,
  dataModel,
  entityType,
  customLists,
  onModelChange
}) {
  const { t: t2 } = useTranslation(["user-scoring"]);
  const [conditions, setConditions] = reactExports.useState(model.conditions);
  const [selectedField, setSelectedField] = reactExports.useState(() => model.field?.children[0].constant ?? null);
  const handleFieldChange = (newField) => {
    setSelectedField(newField);
    const entityTable = dataModel.find((t22) => t22.name === entityType);
    const fieldDef = newField ? entityTable?.fields.find((f) => f.name === newField) : void 0;
    const fieldType = fieldDef && isAllowedScoringRuleType(fieldDef.dataType) ? fieldDef.dataType : null;
    const newConditions = fieldType ? createDefaultConditions(fieldType) : null;
    setConditions(newConditions);
    onModelChange?.({
      type: "user_attribute",
      field: newField ? NewPayloadAstNode(newField) : null,
      conditions: newConditions
    });
  };
  const handleConditionsChange = (next) => {
    setConditions(next);
    onModelChange?.({
      type: "user_attribute",
      field: selectedField ? NewPayloadAstNode(selectedField) : null,
      conditions: next
    });
  };
  const fieldOptions = reactExports.useMemo(() => {
    const entityTable = dataModel.find((t22) => t22.name === entityType);
    if (!entityTable) return [];
    return entityTable.fields.filter((f) => isAllowedScoringRuleType(f.dataType)).map((f) => ({
      label: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-xs", children: [
        getDataTypeIcon(f.dataType) ? /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: getDataTypeIcon(f.dataType), className: "size-4 shrink-0" }) : null,
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: f.name })
      ] }),
      value: f.name
    }));
  }, [dataModel, entityType]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: t2("user-scoring:switch.depending_on") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SelectV2,
        {
          value: selectedField,
          placeholder: "—",
          options: fieldOptions,
          onChange: handleFieldChange,
          className: "w-[164px]"
        }
      )
    ] }),
    conditions ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: t2("user-scoring:switch.apply_conditions") }),
      M(conditions).with({ type: "number" }, (c) => /* @__PURE__ */ jsxRuntimeExports.jsx(NumberSwitchEdit, { conditions: c, maxRiskLevel, onChange: handleConditionsChange })).with({ type: "bool" }, (c) => /* @__PURE__ */ jsxRuntimeExports.jsx(BoolSwitchEdit, { conditions: c, maxRiskLevel, onChange: handleConditionsChange })).with({ type: "string" }, (c) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        StringSwitchEdit,
        {
          conditions: c,
          maxRiskLevel,
          customLists,
          onChange: handleConditionsChange
        }
      )).exhaustive()
    ] }) : null
  ] });
}
function SwitchNodeEdit({
  node,
  maxRiskLevel,
  dataModel,
  entityType,
  customLists,
  onModelChange
}) {
  const model = transformAstNodeToModel(node, entityType, dataModel);
  if (!model) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-sm text-s text-grey-secondary", children: M(model).with({ type: "user_attribute" }, (m) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    UserAttributeRuleEdit,
    {
      model: m,
      maxRiskLevel,
      dataModel,
      entityType,
      customLists,
      onModelChange
    }
  )).with({ type: "aggregate" }, (m) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    AggregateRuleEdit,
    {
      model: m,
      maxRiskLevel,
      dataModel,
      customLists,
      onModelChange
    }
  )).with({ type: "screening_tags" }, { type: "entity_tags" }, (m) => /* @__PURE__ */ jsxRuntimeExports.jsx(TagsRuleEdit, { model: m, maxRiskLevel, onModelChange })).with({ type: "past_alerts" }, (m) => /* @__PURE__ */ jsxRuntimeExports.jsx(PastAlertsRuleEdit, { model: m, maxRiskLevel, onModelChange })).exhaustive() });
}
function SwitchNode({
  node,
  mode,
  dataModel,
  entityType,
  maxRiskLevel,
  customLists,
  onModelChange
}) {
  if (mode === "view")
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      SwitchNodeView,
      {
        node,
        dataModel,
        entityType,
        maxRiskLevel,
        customLists
      }
    );
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    SwitchNodeEdit,
    {
      node,
      maxRiskLevel,
      dataModel,
      entityType,
      customLists,
      onModelChange
    }
  );
}
function ScoringRuleEditPanel({
  rule,
  dataModel,
  entityType,
  maxRiskLevel,
  customLists = [],
  hasValidLicense,
  onChange,
  onDelete
}) {
  const { t: t2 } = useTranslation(["user-scoring"]);
  const sharp = PanelSharpFactory.useSharp();
  const payloadAccessors = reactExports.useMemo(
    () => buildPayloadAccessorsFromDataModel(dataModel, entityType),
    [dataModel, entityType]
  );
  const databaseAccessors = reactExports.useMemo(
    () => buildDatabaseAccessorsFromDataModel(dataModel, entityType),
    [dataModel, entityType]
  );
  const builderOptionsData = reactExports.useMemo(
    () => ({
      dataModel,
      triggerObjectType: entityType,
      customLists,
      databaseAccessors,
      payloadAccessors,
      hasValidLicense,
      hasContinuousScreening: false,
      screeningConfigs: [],
      hasScoringRuleset: false,
      scoringSettings: null
    }),
    [dataModel, entityType, customLists, databaseAccessors, payloadAccessors, hasValidLicense]
  );
  const nameInputRef = reactExports.useRef(null);
  const [name, setName] = reactExports.useState(rule.name);
  const [nameTouched, setNameTouched] = reactExports.useState(false);
  const [riskType, setRiskType] = reactExports.useState(rule.riskType);
  reactExports.useEffect(() => {
    if (!rule.name) {
      const id = setTimeout(() => nameInputRef.current?.focus(), 50);
      return () => clearTimeout(id);
    }
  }, []);
  const [currentModel, setCurrentModel] = reactExports.useState(
    () => transformAstNodeToModel(rule.ast, entityType, dataModel)
  );
  const RISK_TYPE_OPTIONS = RISK_TYPES.map((v) => ({
    value: v,
    label: t2(`user-scoring:risk_type.${v}`)
  }));
  const isValid = !!name.trim() && !!riskType && !!currentModel && isCompleteRule(currentModel);
  const handleValidate = async () => {
    if (isValid && currentModel && isCompleteRule(currentModel) && onChange) {
      const result = await onChange({
        ...rule,
        name,
        riskType,
        ast: buildAstNodeFromModel(currentModel, { entityType })
      });
      if (result) {
        sharp.actions.close();
      }
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AstBuilder.StaticProvider, { data: builderOptionsData, mode: "edit", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Panel.Container, { size: "small", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Panel.Content, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Panel.Header, { className: "flex items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 flex-col", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            ref: nameInputRef,
            className: cn(
              "text-h2 font-semibold outline-none h-6",
              nameTouched && !name.trim() ? "border-b border-red-primary" : ""
            ),
            value: name,
            onChange: (e) => setName(e.target.value),
            onBlur: () => setNameTouched(true),
            placeholder: t2("user-scoring:rule_edit.name_placeholder")
          }
        ),
        nameTouched && !name.trim() ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-red-primary mt-1", children: t2("user-scoring:rule_edit.name_required") }) : null
      ] }),
      onDelete ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: onDelete,
          className: "ms-auto flex size-6 shrink-0 items-center justify-center rounded-lg border border-red-primary text-red-primary hover:bg-red-primary hover:text-white",
          "aria-label": "Delete rule",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "delete", className: "size-4" })
        }
      ) : null
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2 pb-md", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { color: "grey", children: entityType }),
      currentModel ? /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { color: "grey", children: M(currentModel).with({ type: "user_attribute" }, () => t2("user-scoring:rule_edit.model_type.user_attribute")).with({ type: "aggregate" }, () => t2("user-scoring:rule_edit.model_type.aggregate")).with({ type: "screening_tags" }, () => t2("user-scoring:rule_edit.model_type.screening_tags")).with({ type: "entity_tags" }, () => t2("user-scoring:rule_edit.model_type.entity_tags")).with({ type: "past_alerts" }, () => t2("user-scoring:rule_edit.model_type.past_alerts")).exhaustive() }) : null,
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SelectV2,
        {
          variant: "tag",
          options: RISK_TYPE_OPTIONS,
          value: riskType,
          onChange: setRiskType,
          placeholder: t2("user-scoring:rule_edit.risk_type_placeholder"),
          menuClassName: "min-w-40"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-md p-md border border-grey-border rounded-md", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      SwitchNode,
      {
        mode: "edit",
        node: rule.ast,
        dataModel,
        entityType,
        maxRiskLevel,
        customLists,
        onModelChange: (model) => setCurrentModel(model)
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Panel.Footer, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Panel.FooterButton,
        {
          variant: "secondary",
          onClick: sharp.actions.close,
          label: t2("user-scoring:rule_edit.cancel")
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Panel.FooterButton,
        {
          variant: "primary",
          onClick: handleValidate,
          disabled: !isValid,
          label: t2("user-scoring:rule_edit.save")
        }
      )
    ] })
  ] }) }) });
}
function AddRuleMenuContent({ onConfirm, onCancel }) {
  const { t: t2 } = useTranslation(["user-scoring"]);
  const [selectedType, setSelectedType] = reactExports.useState("user_attribute");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(MenuCommand.Content, { align: "end", sideOffset: 4, className: "min-w-80", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.List, { className: "p-md", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Group, { heading: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-md", children: t2("user-scoring:ruleset.rule_type_heading") }), children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-sm", children: RULE_TYPES.map((value) => /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.HeadlessItem, { value, onSelect: () => setSelectedType(value), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: cn(
            "border-purple-primary flex size-4 shrink-0 items-center justify-center rounded-full border",
            selectedType === value ? "bg-purple-primary" : "bg-white"
          ),
          children: selectedType === value && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-2 rounded-full bg-white" })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "span",
        {
          className: cn("text-s text-grey-primary", selectedType === value ? "font-semibold" : "font-normal"),
          children: t2(`user-scoring:ruleset.rule_type.${value}`)
        }
      )
    ] }) }, value)) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-grey-border flex items-center justify-end gap-sm border-t p-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", size: "small", onClick: onCancel, children: t2("user-scoring:ruleset.cancel") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "primary", size: "small", onClick: () => onConfirm(selectedType), children: t2("user-scoring:ruleset.create_rule") })
    ] })
  ] });
}
function RulesTable({ ruleset, maxRiskLevel, customLists, hasValidLicense }) {
  const { t: t2 } = useTranslation(["user-scoring"]);
  const router = useRouter();
  const navigate = useNavigate();
  const { rules, recordType: entityType } = ruleset;
  const [open, setOpen] = reactExports.useState(false);
  const [panelRule, setPanelRule] = reactExports.useState(null);
  const dataModelQuery = useDataModelQuery();
  const mutation = useUpdateScoringRulesetMutation();
  const handleConfirm = (ruleType) => {
    const ast = M(ruleType).with("user_attribute", () => NewSwitchAstNode(ruleType, NewAstNode())).with("aggregate", () => NewSwitchAstNode(ruleType, NewAggregatorAstNode("SUM"))).with(
      "screening_tags",
      "entity_tags",
      () => buildAstNodeFromModel(
        {
          type: ruleType,
          conditions: {
            type: "tags",
            branches: [{ value: [], impact: { modifier: 0 } }],
            default: { modifier: 0 }
          }
        },
        { entityType }
      )
    ).with(
      "past_alerts",
      () => buildAstNodeFromModel({
        type: "past_alerts",
        conditions: { type: "bool", ifTrue: { modifier: 0 }, ifFalse: { modifier: 0 } }
      })
    ).exhaustive();
    setPanelRule({
      stableId: v7(),
      name: "",
      description: "",
      riskType: "customer_features",
      ast
    });
    setOpen(false);
  };
  const onSaveSuccess = async (ruleset2) => {
    zt.success(t2("common:success.save"));
    await router.invalidate();
    if (ruleset2) {
      navigate({
        to: "/user-scoring/$recordType/$version",
        params: {
          recordType: ruleset2.recordType,
          version: "draft"
        }
      });
    }
    return true;
  };
  const onSaveError = async () => {
    zt.error(t2("common:errors.unknown"));
    return false;
  };
  const handleRuleChange = async (stableId, newRule) => {
    return mutation.mutateAsync({
      id: ruleset.id,
      recordType: ruleset.recordType,
      name: ruleset.name,
      thresholds: ruleset.thresholds,
      cooldownSeconds: ruleset.cooldownSeconds,
      scoringIntervalSeconds: ruleset.scoringIntervalSeconds,
      rules: ruleset.rules.map(
        (r) => r.stableId === stableId ? {
          stableId: r.stableId,
          name: newRule.name,
          description: newRule.description,
          riskType: newRule.riskType,
          ast: newRule.ast
        } : { stableId: r.stableId, name: r.name, description: r.description, riskType: r.riskType, ast: r.ast }
      )
    }).then(onSaveSuccess).catch(onSaveError);
  };
  const handleRuleAdd = async (newRule) => {
    return mutation.mutateAsync({
      id: ruleset.id,
      recordType: ruleset.recordType,
      name: ruleset.name,
      thresholds: ruleset.thresholds,
      cooldownSeconds: ruleset.cooldownSeconds,
      scoringIntervalSeconds: ruleset.scoringIntervalSeconds,
      rules: [
        ...ruleset.rules.map((r) => ({
          stableId: r.stableId,
          name: r.name,
          description: r.description,
          riskType: r.riskType,
          ast: r.ast
        })),
        {
          stableId: newRule.stableId,
          name: newRule.name,
          description: newRule.description,
          riskType: newRule.riskType,
          ast: newRule.ast
        }
      ]
    }).then((ruleset2) => {
      setPanelRule(null);
      return onSaveSuccess(ruleset2);
    }).catch(onSaveError);
  };
  const handleRuleDelete = (stableId) => {
    mutation.mutateAsync({
      id: ruleset.id,
      recordType: ruleset.recordType,
      name: ruleset.name,
      thresholds: ruleset.thresholds,
      cooldownSeconds: ruleset.cooldownSeconds,
      scoringIntervalSeconds: ruleset.scoringIntervalSeconds,
      rules: ruleset.rules.filter((r) => r.stableId !== stableId).map((r) => ({
        stableId: r.stableId,
        name: r.name,
        description: r.description,
        riskType: r.riskType,
        ast: r.ast
      }))
    }).then(onSaveSuccess).catch(onSaveError);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-surface-card border-grey-border rounded-md overflow-hidden border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-grey-border flex items-center justify-between border-b px-md py-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-s text-grey-secondary grid flex-1 grid-cols-[150px_1fr] gap-md font-semibold", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t2("user-scoring:ruleset.risk_types_column") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t2("user-scoring:ruleset.rules_column") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(MenuCommand.Menu, { open, onOpenChange: setOpen, persistOnSelect: true, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Trigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "secondary", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "plus", className: "size-4" }),
            t2("user-scoring:ruleset.add_rule")
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AddRuleMenuContent, { onConfirm: handleConfirm, onCancel: () => setOpen(false) })
        ] })
      ] }),
      rules.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-s text-grey-secondary flex items-center justify-center py-xl", children: t2("user-scoring:ruleset.no_rules") }) : M(dataModelQuery).with({ isPending: true }, () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center py-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, {}) })).with({ isError: true }, () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-s text-red-primary flex items-center justify-center py-xl", children: t2("user-scoring:ruleset.error") })).with(
        { isSuccess: true },
        ({ data: { dataModel } }) => rules.map((rule) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          RuleRow,
          {
            rule,
            dataModel,
            entityType,
            maxRiskLevel,
            customLists,
            hasValidLicense,
            onRuleChange: (newRule) => handleRuleChange(rule.stableId, newRule),
            onRuleDelete: () => handleRuleDelete(rule.stableId)
          },
          rule.stableId
        ))
      ).exhaustive()
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Panel.Root,
      {
        open: panelRule !== null,
        onOpenChange: (isOpen) => {
          if (!isOpen) setPanelRule(null);
        },
        children: panelRule && dataModelQuery.data ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          ScoringRuleEditPanel,
          {
            rule: panelRule,
            dataModel: dataModelQuery.data.dataModel,
            entityType,
            maxRiskLevel,
            customLists,
            hasValidLicense,
            onChange: handleRuleAdd
          }
        ) : null
      }
    )
  ] });
}
function RuleRow({
  rule,
  dataModel,
  entityType,
  maxRiskLevel,
  customLists,
  hasValidLicense,
  onRuleChange,
  onRuleDelete
}) {
  const { t: t2 } = useTranslation(["user-scoring"]);
  const [isEditing, setIsEditing] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-grey-border flex border-b last:border-b-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex w-[150px] shrink-0 items-center px-md py-sm", children: rule.riskType ? /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { color: "grey", children: t2(`user-scoring:risk_type.${rule.riskType}`) }) : null }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 flex-col gap-sm px-md py-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-grey-primary text-s font-medium", children: rule.name }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SwitchNode,
        {
          node: rule.ast,
          mode: "view",
          dataModel,
          entityType,
          maxRiskLevel,
          customLists
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex shrink-0 items-center justify-end px-md py-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          className: "border-purple-primary text-purple-primary flex size-6 items-center justify-center rounded-lg border shadow-sm",
          "aria-label": "Edit rule",
          onClick: () => setIsEditing(true),
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "edit", className: "size-4" })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Panel.Root, { open: isEditing, onOpenChange: setIsEditing, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        ScoringRuleEditPanel,
        {
          rule,
          dataModel,
          entityType,
          maxRiskLevel,
          customLists,
          hasValidLicense,
          onChange: onRuleChange,
          onDelete: onRuleDelete ? () => {
            onRuleDelete();
            setIsEditing(false);
          } : void 0
        }
      ) })
    ] })
  ] });
}
function ScoringRulesetPage({
  ruleset,
  settings,
  customLists,
  preparationStatus,
  hasValidLicense,
  lastDryRun
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("flex flex-col", pageLayoutGutter.gap), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      GeneralInfoCard,
      {
        ruleset,
        settings,
        preparationStatus,
        lastDryRun
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      RulesTable,
      {
        ruleset,
        maxRiskLevel: settings.maxRiskLevel,
        customLists,
        hasValidLicense
      }
    )
  ] });
}
function UserScoringRulesetRoute() {
  const loaderData = Route$w.useLoaderData();
  const parentData = useLoaderData({
    from: "/_app/_builder/user-scoring"
  });
  if (!loaderData || !parentData?.settings) return null;
  const {
    ruleset,
    customLists,
    preparationStatus,
    hasValidLicense,
    lastDryRun
  } = loaderData;
  const {
    settings
  } = parentData;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ScoringRulesetPage, { ruleset, settings, customLists, preparationStatus, hasValidLicense, lastDryRun }, ruleset.recordType);
}
export {
  UserScoringRulesetRoute as component
};

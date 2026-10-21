import { Q as jsxRuntimeExports, M as reactExports } from "./server.mjs";
import { S as Spinner } from "./Spinner-DmLieYoS.mjs";
import { u as useDataModelQuery } from "./get-data-model-BUauY6PR.mjs";
import { d as getScoreDistributionFn, e as updateScoringSettingsFn } from "./scoring-BqfH8vO5.mjs";
import { u as useQuery } from "./useQuery-Bb0AEcpf.mjs";
import { u as useServerFn } from "./useServerFn-oRH5Nw97.mjs";
import { C as CreateRulesetPanelContext, u as useListScoringRulesetsQuery } from "./ScoringSectionLayout-BA09Wd-A.mjs";
import { t as te } from "./nivo-pie-rbhDIret.mjs";
import { a2 as M } from "./services-middleware-nMulUXHZ.mjs";
import { u as useTranslation, B as Button, d as cn } from "./Tabs-CzpyUi7T.mjs";
import { u as useLoaderRevalidator } from "./LoaderRevalidatorContext-BEuG7sHs.mjs";
import { u as useQueryClient } from "./query-BmG5BEas.mjs";
import { u as useMutation } from "./useMutation-BOdeDeAR.mjs";
import { z as zt } from "./create-context-k6HmQ6bB.mjs";
import { S as SCORING_LEVELS_COLORS, a as SCORING_LEVELS_LABEL_KEYS, M as MAX_RISK_LEVELS, i as isMaxRiskLevelInRange, s as scoringLevelEntries } from "./display-TKj7AN5a.mjs";
import { Z as useLoaderData } from "./router-KSC-NEr8.mjs";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "./data-9UajV2HK.mjs";
import "./auth-middleware-eNRVfU3l.mjs";
import "./logger.server-DV14d0iZ.mjs";
import "./short-uuid-fTZYJj_k.mjs";
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
import "./data-BXamdbTM.mjs";
import "./user-scoring-BtNQ1U6a.mjs";
import "./useBaseQuery-BqF2iw7Y.mjs";
import "./ScoringLevelThresholds-Dec01Ypr.mjs";
import "./form-D2XmDKeG.mjs";
import "./array-BFSjnO9c.mjs";
import "./useForm-qNQ8S9xN.mjs";
import "./Select-Dg3p9vJ0.mjs";
import "./isNullish-B8pc8Ntu.mjs";
import "./nivo-legends-OEmxTBfh.mjs";
import "./string-vnnIQF3x.mjs";
import "./line-CXsqndjH.mjs";
import "node:crypto";
import "./use-callback-ref-DoQNLci-.mjs";
import "./sharpstate.es-C0BW2AZi.mjs";
import "./formatDistanceStrict-DEEeAR-Y.mjs";
import "./security-headers.server-BdP3HrPp.mjs";
import "./ThemeContext-DjRULCu0.mjs";
import "./config--RFGchua.mjs";
import "./i18n-instance-store-UssbGYOM.mjs";
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
const useGetScoreDistributionQuery = (recordType) => {
  const getScoreDistribution = useServerFn(getScoreDistributionFn);
  return useQuery({
    queryKey: ["scoring", "distribution", recordType],
    queryFn: () => getScoreDistribution({ data: { recordType } }),
    enabled: !!recordType
  });
};
const useUpdateScoringSettingsMutation = () => {
  const updateScoringSettings = useServerFn(updateScoringSettingsFn);
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["scoring", "update-settings"],
    mutationFn: async (payload) => {
      await updateScoringSettings({ data: payload });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["scoring"] });
    }
  });
};
function ScoringSettings({ settings }) {
  return settings ? /* @__PURE__ */ jsxRuntimeExports.jsx(ScoringSettingsDisplay, { settings }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ScoringSettingsForm, {});
}
function ScoringSettingsDisplay({ settings }) {
  const { t } = useTranslation(["user-scoring"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-surface-card border border-grey-border rounded-md p-md flex gap-md items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("user-scoring:settings.scale_used") }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-md items-center py-sm px-md bg-grey-background-light border border-grey-border rounded-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("user-scoring:settings.risk_levels_count", { count: settings.maxRiskLevel }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ScoringLevels, { maxLevel: settings.maxRiskLevel, className: "flex items-center gap-md" })
    ] })
  ] });
}
function ScoringSettingsForm() {
  const { t } = useTranslation(["user-scoring", "common"]);
  const [maxRiskLevel, setMaxRiskLevel] = reactExports.useState(3);
  const updateScoringSettingsMutation = useUpdateScoringSettingsMutation();
  const revalidate = useLoaderRevalidator();
  const handleValidateScale = () => {
    updateScoringSettingsMutation.mutateAsync({ maxRiskLevel }).then(() => {
      revalidate();
    }).catch(() => {
      zt.error(t("common:errors.unknown"));
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-surface-card border border-grey-border rounded-md p-md flex flex-col gap-md", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("user-scoring:settings.define_scale") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { appearance: "stroked", onClick: handleValidateScale, disabled: updateScoringSettingsMutation.isPending, children: t("user-scoring:settings.validate_scale") })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-4 gap-md", children: MAX_RISK_LEVELS.map((v) => /* @__PURE__ */ jsxRuntimeExports.jsx(ScoringScaleCard, { maxLevel: v, selected: maxRiskLevel === v, onSelect: () => setMaxRiskLevel(v) }, v)) })
  ] });
}
function ScoringScaleCard({ maxLevel, selected, onSelect }) {
  const { t } = useTranslation(["user-scoring"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "button",
    {
      type: "button",
      className: cn(
        "bg-grey-background-light border border-grey-border p-md rounded-md flex flex-col gap-md text-left",
        {
          "bg-purple-background-light border-purple-primary": selected
        }
      ),
      onClick: onSelect,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: t("user-scoring:settings.levels", { count: maxLevel }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ScoringLevels, { maxLevel, className: "flex flex-col gap-md" })
      ]
    }
  );
}
function ScoringLevels({ maxLevel, className }) {
  const { t } = useTranslation(["user-scoring"]);
  if (!isMaxRiskLevelInRange(maxLevel)) {
    return null;
  }
  const colorEntries = scoringLevelEntries(SCORING_LEVELS_COLORS[maxLevel]);
  const labelKeys = SCORING_LEVELS_LABEL_KEYS[maxLevel];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn(className), children: colorEntries.map(([level, color]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-sm items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-4 rounded-full", style: { backgroundColor: color } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t(labelKeys[level] ?? "") })
  ] }, level)) });
}
function ScoringOverviewPage({ settings }) {
  const { t } = useTranslation(["common", "user-scoring"]);
  const { setOpen } = CreateRulesetPanelContext.useValue();
  const rulesetsQuery = useListScoringRulesetsQuery();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-md", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(ScoringSettings, { settings }),
    settings ? M(rulesetsQuery).with({ isPending: true }, () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, {}) })).with({ isError: true }, () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-sm items-center justify-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-s text-grey-60 text-center", children: t("common:generic_fetch_data_error") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", onClick: () => rulesetsQuery.refetch(), children: t("common:retry") })
    ] })).with({ isSuccess: true }, ({ data }) => {
      const rulesets = data?.rulesets ?? [];
      if (rulesets.length > 0) {
        return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-[repeat(auto-fill,minmax(500px,1fr))] gap-md", children: rulesets.map((ruleset) => /* @__PURE__ */ jsxRuntimeExports.jsx(ScoringRulesetCard, { ruleset, settings }, ruleset.id)) });
      }
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-surface-card border border-grey-border p-md rounded-md flex flex-col gap-md", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("user-scoring:overview.no_ruleset") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { appearance: "stroked", onClick: () => setOpen(true), children: t("user-scoring:overview.configure_score") })
      ] });
    }).exhaustive() : null
  ] });
}
function ScoringRulesetCard({ ruleset, settings }) {
  const { t } = useTranslation(["user-scoring", "common"]);
  const distributionQuery = useGetScoreDistributionQuery(ruleset.recordType);
  const dataModel = useDataModelQuery().data?.dataModel ?? [];
  const entityName = dataModel.find((table) => table.name === ruleset.recordType)?.alias || ruleset.recordType;
  const maxRiskLevel = settings.maxRiskLevel;
  const colors = SCORING_LEVELS_COLORS[maxRiskLevel];
  const labelKeys = SCORING_LEVELS_LABEL_KEYS[maxRiskLevel];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-surface-card border border-grey-border rounded-md p-md flex flex-col gap-md h-[400px]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-s font-medium", children: t("user-scoring:overview.ruleset_card.title", { name: entityName }) }),
    M(distributionQuery).with({ isPending: true }, () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-1 items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, { className: "size-10" }) })).with({ isError: true }, () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-1 items-center justify-center text-s text-grey-secondary", children: t("common:generic_fetch_data_error") })).with({ isSuccess: true }, (query) => {
      const distribution = query.data?.distribution ?? [];
      const total = distribution.reduce((sum, item) => sum + item.count, 0);
      if (total === 0)
        return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-1 items-center justify-center text-s text-grey-secondary", children: t("user-scoring:overview.ruleset_card.no_distribution") });
      const pieData = distribution.filter((item) => item.count > 0).map((item) => ({
        id: item.risk_level,
        label: t(labelKeys[item.risk_level] ?? item.risk_level.toString()),
        value: item.count,
        color: colors[item.risk_level] ?? "#ccc"
      }));
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 flex-col gap-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
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
            enableArcLinkLabels: false,
            margin: { top: 20, right: 20, bottom: 20, left: 20 }
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap items-center justify-center gap-x-md gap-y-xs", children: pieData.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "size-3 rounded-full shrink-0", style: { backgroundColor: item.color } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium text-grey-secondary", children: item.label })
        ] }, item.id)) })
      ] });
    }).exhaustive()
  ] });
}
function UserScoringIndex() {
  const {
    settings
  } = useLoaderData({
    from: "/_app/_builder/user-scoring"
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ScoringOverviewPage, { settings });
}
export {
  UserScoringIndex as component
};

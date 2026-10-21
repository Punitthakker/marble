import { M as reactExports, Q as jsxRuntimeExports } from "./server.mjs";
import { u as useTranslation, B as Button, I as Icon, c as clsx, aY as RadioGroup$1, aZ as RadioGroupItem$1, g as useFormatLanguage, h as formatNumber, j as cva } from "./Tabs-CzpyUi7T.mjs";
import { t as t$1 } from "./mapToObj-C7dg8HnM.mjs";
import { t as t$2 } from "./pick-zDxvbwOs.mjs";
import { _ as t$8, $ as t$a, p as t$c, t as t$g, cu as t$1$1, dC as t$6 } from "./services-middleware-nMulUXHZ.mjs";
import { A as Await } from "./awaited-DFMIBuo8.mjs";
import { b4 as Route$7, aD as useDetectionScenarioData, P as Page, B as BreadCrumbs, b3 as cancelTestRunFn } from "./router-KSC-NEr8.mjs";
import { a as Callout } from "./Callout-B0OuRL3q.mjs";
import { M as Modal } from "./Modal-CpYmGWjB.mjs";
import { u as useLoaderRevalidator } from "./LoaderRevalidatorContext-BEuG7sHs.mjs";
import { u as useMutation } from "./useMutation-BOdeDeAR.mjs";
import { u as useServerFn } from "./useServerFn-oRH5Nw97.mjs";
import { z as zt, T as Tag } from "./create-context-k6HmQ6bB.mjs";
import { C as Collapsible } from "./Collapsible-CKx8cmdD.mjs";
import { t as t$3 } from "./keys-DjoJs5YL.mjs";
import { t as t$4 } from "./sumBy-C9HT3LW-.mjs";
import { n as n$1 } from "./unique-cniTya2T.mjs";
import { t as toggle } from "./array-BFSjnO9c.mjs";
import { n as n$3 } from "./flat-CiXFfT8Y.mjs";
import { t as t$5 } from "./isDeepEqual-DU8kSW6f.mjs";
import { n as n$2 } from "./omit-qKVZGDJg.mjs";
import { S as Switch } from "./Switch-BV-_0Knl.mjs";
import { A as Avatar } from "./Avatar-DDGL3Siw.mjs";
import { T as TestRunVersions, a as TestRunPeriod, b as TestRunStatus } from "./TestRunVersions-B9g4to7z.mjs";
import { u as useOrganizationUsers } from "./organization-users-CEJGnALa.mjs";
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
import "./graph-pivots-Bblee9BN.mjs";
import "./scenarios-C5R2TE8p.mjs";
import "./index-22HmyALM.mjs";
import "./hasAtLeast-BmuNoqMd.mjs";
import "./Spinner-DmLieYoS.mjs";
function t(...t2) {
  return t$g(n, t2);
}
function n(e, t2) {
  let n2 = { ...e };
  for (let [r, i] of Object.entries(n2)) t2(i, r, e) && delete n2[r];
  return n2;
}
const radioGroup = cva(["flex flex-row w-fit", "p-xs", "rounded-lg", "bg-purple-background-light"]);
const RadioGroup = function RadioGroup2({
  ref,
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(RadioGroup$1, { ...props, ref, className: radioGroup({ className }) });
};
const radioGroupItem = cva([
  "flex",
  "flex-row",
  "items-center",
  "gap-sm",
  "text-purple-disabled",
  "text-s",
  "font-medium",
  "data-[state=checked]:bg-purple-primary data-[state=checked]:text-grey-white",
  "px-xs",
  "py-2xs",
  "rounded-[4px]"
]);
const RadioGroupItem = function RadioGroupItem2({
  ref,
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(RadioGroupItem$1, { ...props, className: radioGroupItem({ className }), ref });
};
const useCancelTestRunMutation = (scenarioId, testRunId) => {
  const cancelTestRun = useServerFn(cancelTestRunFn);
  return useMutation({
    mutationKey: ["scenarios", "testrun", "cancel", scenarioId, testRunId],
    mutationFn: async () => cancelTestRun({ data: { scenarioId, testRunId } })
  });
};
function CancelTestRun({
  children,
  currentScenario,
  testRunId
}) {
  const [open, setOpen] = reactExports.useState(false);
  const cancelTestRunMutation = useCancelTestRunMutation(currentScenario.id, testRunId);
  const { t: t2 } = useTranslation(["scenarios", "common"]);
  const revalidate = useLoaderRevalidator();
  const handleCancelScenario = () => {
    cancelTestRunMutation.mutateAsync().then(() => {
      revalidate();
    }).catch(() => {
      zt.error(t2("common:errors.unknown"));
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal.Root, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.Trigger, { asChild: true, children }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal.Content, { className: "overflow-visible", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.Title, { children: t2("scenarios:testrun.cancel") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.Description, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Callout, { variant: "outlined", className: "m-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "whitespace-pre-wrap", children: t2("scenarios:testrun.cancel.callout") }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal.Footer, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.FooterButton, { isCloseButton: true, label: t2("common:cancel") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Modal.FooterButton,
          {
            label: t2("scenarios:testrun.cancel"),
            onClick: handleCancelScenario,
            isLoading: cancelTestRunMutation.isPending
          }
        )
      ] })
    ] })
  ] });
}
function Hamburger({
  version,
  summary,
  type,
  legend,
  mapping
}) {
  const language = useFormatLanguage();
  const { t: t2 } = useTranslation(["common"]);
  const pairs = reactExports.useMemo(() => {
    const result = [];
    for (const status of legend) {
      if (summary[status] !== void 0) result.push([status, summary[status]]);
    }
    return result;
  }, [summary, legend]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex size-full flex-col items-center gap-md", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Tag, { size: "big", color: "grey", className: "border-grey-border gap-xs border px-sm py-xs", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-grey-primary font-semibold", children: `V${version.value}` }),
      version.type === "live version" ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-purple-primary font-semibold", children: t2("common:live") }) : null
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex size-full flex-col gap-xs", children: pairs.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-grey-border size-full rounded-lg border-2" }) : pairs.map(([status, count]) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        style: {
          flexBasis: `${Math.round(count * 100 / summary.total)}%`
        },
        className: clsx(
          "flex min-h-[24px] w-full shrink grow flex-row items-center justify-center rounded-[4px]",
          mapping[status].background
        ),
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: clsx("text-s font-medium", mapping[status].text), children: type === "percentage" ? formatNumber(count * 100 / summary.total / 100, {
          language,
          style: "percent"
        }) : formatNumber(count, {
          language,
          compactDisplay: "short"
        }) })
      },
      status
    )) })
  ] });
}
function HamburgerChart({
  items,
  versions: { ref, test },
  mapping
}) {
  const { t: t$12 } = useTranslation(["scenarios", "decisions"]);
  const options = reactExports.useMemo(() => {
    const foundOptions = n$1(items.map((i) => i.option));
    const orderedOptions = [];
    for (const option of t$3(mapping)) {
      if (foundOptions.includes(option)) {
        orderedOptions.push(option);
      }
    }
    return orderedOptions;
  }, [items, mapping]);
  const [type, setType] = reactExports.useState("percentage");
  const [legend, updateLegend] = reactExports.useState(options);
  const summaryByVersions = reactExports.useMemo(() => {
    const result = {
      [ref.value]: {
        total: 0
      },
      [test.value]: {
        total: 0
      }
    };
    return {
      ...result,
      ...t$8(
        t$a(items, (i) => i.version),
        (itemsByVersion) => ({
          total: t$4(itemsByVersion, (d) => d.count),
          ...t(
            t$8(
              t$a(itemsByVersion, (d) => d.option),
              (itemsByOption) => t$4(itemsByOption, (d) => d.count)
            ),
            (count) => count === 0
          )
        })
      )
    };
  }, [items, ref, test]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(RadioGroup, { onValueChange: (type2) => setType(type2), value: type, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(RadioGroupItem, { value: "absolute", children: t$12("scenarios:testrun.distribution.absolute") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(RadioGroupItem, { value: "percentage", children: t$12("scenarios:testrun.distribution.percentage") })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-60 w-full flex-row items-center justify-center gap-md px-xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Hamburger,
        {
          type,
          legend,
          version: ref,
          summary: summaryByVersions[ref.value],
          mapping
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "arrow-forward", className: "text-grey-primary h-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Hamburger,
        {
          type,
          legend,
          version: test,
          summary: summaryByVersions[test.value],
          mapping
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-row justify-center gap-sm px-xs4", children: options.map((option) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Button,
      {
        variant: "secondary",
        appearance: "link",
        className: "gap-md",
        onClick: () => updateLegend((prev) => {
          const newLegend = toggle(prev, option);
          const orderedOptions = [];
          for (const option2 of t$3(mapping)) {
            if (newLegend.includes(option2)) {
              orderedOptions.push(option2);
            }
          }
          return orderedOptions;
        }),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: clsx("size-4 rounded-[4px]", {
                [`${mapping[option].border} border-2`]: !legend.includes(option),
                [mapping[option].background]: legend.includes(option)
              })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-grey-primary", children: mapping[option].name })
        ]
      },
      option
    )) })
  ] });
}
const DistributionOfDecisionChart = ({
  decisions,
  versions
}) => {
  const { t: t2 } = useTranslation(["scenarios", "decisions"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Collapsible.Container, { className: "bg-surface-card", defaultOpen: true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Collapsible.Title, { children: t2("scenarios:testrun.distribution") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Collapsible.Content, { children: decisions.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-grey-secondary inline-block w-full text-center font-semibold", children: t2("scenarios:testrun.no_decisions") }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
      HamburgerChart,
      {
        versions,
        items: decisions.filter((d) => d.count > 0).map((d) => ({
          version: d.version,
          count: d.count,
          option: d.outcome
        })),
        mapping: {
          approve: {
            background: "bg-green-primary",
            border: "border-green-primary",
            text: "text-grey-white",
            name: t2("decisions:outcome.approve")
          },
          decline: {
            background: "bg-red-primary",
            border: "border-red-primary",
            text: "text-grey-white",
            name: t2("decisions:outcome.decline")
          },
          block_and_review: {
            background: "bg-orange-primary",
            border: "border-orange-primary",
            text: "text-grey-white",
            name: t2("decisions:outcome.block_and_review")
          },
          review: {
            background: "bg-yellow-primary",
            border: "border-yellow-primary",
            text: "text-grey-primary",
            name: t2("decisions:outcome.review")
          }
        }
      }
    ) })
  ] });
};
const TestRunRuleName = ({
  rulesByVersion,
  versions: { ref, test }
}) => {
  const refRuleName = rulesByVersion[ref.value]?.[0]?.name;
  const testRuleName = rulesByVersion[test.value]?.[0]?.name;
  if (refRuleName !== void 0 && testRuleName !== void 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-s font-normal", children: testRuleName }),
      refRuleName !== testRuleName ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-grey-secondary inline-flex flex-row items-center gap-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "arrow-top-left", className: "size-2" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs", children: refRuleName })
      ] }) : null
    ] });
  }
  if (refRuleName === void 0 && testRuleName !== void 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-row items-baseline gap-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-s font-normal", children: testRuleName }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-green-primary text-xs font-semibold", children: [
        "(",
        t$6("scenarios:testrun.rule.new"),
        ")"
      ] })
    ] });
  }
  if (refRuleName !== void 0 && testRuleName === void 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-row items-baseline gap-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-s font-normal", children: refRuleName }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-grey-disabled text-xs font-semibold", children: [
        "(",
        t$6("scenarios:testrun.rule.old"),
        ")"
      ] })
    ] });
  }
};
const TestRunRuleHitPercentage = ({
  rulesByVersion,
  versions: { ref, test }
}) => {
  const language = useFormatLanguage();
  const refRuleHitPercentage = reactExports.useMemo(() => {
    const refRuleTotal = rulesByVersion[ref.value]?.reduce((acc, rule) => acc + rule.total, 0);
    const refRuleHitTotal = rulesByVersion[ref.value]?.filter((r) => r.status === "hit").reduce((acc, rule) => acc + rule.total, 0);
    if (refRuleTotal === void 0 || refRuleHitTotal === void 0) {
      return void 0;
    }
    return refRuleTotal === 0 || refRuleHitTotal === 0 ? 0 : Math.round(refRuleHitTotal * 100 / refRuleTotal);
  }, [rulesByVersion, ref]);
  const testRuleHitPercentage = reactExports.useMemo(() => {
    const testRuleTotal = rulesByVersion[test.value]?.reduce((acc, rule) => acc + rule.total, 0);
    const testRuleHitTotal = rulesByVersion[test.value]?.filter((r) => r.status === "hit").reduce((acc, rule) => acc + rule.total, 0);
    if (testRuleTotal === void 0 || testRuleHitTotal === void 0) {
      return void 0;
    }
    return testRuleTotal === 0 || testRuleHitTotal === 0 ? 0 : Math.round(testRuleHitTotal * 100 / testRuleTotal);
  }, [rulesByVersion, test]);
  let direction = "equal";
  if (refRuleHitPercentage !== void 0 && testRuleHitPercentage !== void 0) {
    direction = refRuleHitPercentage - testRuleHitPercentage < 0 ? "up" : refRuleHitPercentage - testRuleHitPercentage > 0 ? "down" : "equal";
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-row items-center gap-sm", children: [
    direction !== "equal" ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-s text-grey-secondary font-normal", children: formatNumber(refRuleHitPercentage / 100, {
      language,
      style: "percent"
    }) }) : null,
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: clsx("flex flex-row items-center justify-center rounded-sm p-xs", {
          "bg-purple-background": direction === "up" || direction === "down",
          "bg-grey-background": direction === "equal"
        }),
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Icon,
          {
            icon: direction === "up" || direction === "down" ? "arrow-forward" : "dash",
            className: clsx({
              "size-1.5": direction === "equal",
              "text-purple-primary size-2.5": direction === "up" || direction === "down",
              "rotate-90": direction === "down",
              "-rotate-90": direction === "up",
              "text-green-primary": direction === "equal"
            })
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-s text-grey-primary font-medium", children: formatNumber((testRuleHitPercentage !== void 0 ? testRuleHitPercentage : refRuleHitPercentage) / 100, {
      language,
      style: "percent"
    }) })
  ] });
};
const RuleExecution = ({
  rules,
  versions
}) => {
  const { t: t2 } = useTranslation(["decisions"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Collapsible.Container, { defaultOpen: false, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid w-full grid-cols-[9%_40%_25%_auto] items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Collapsible.Title, { size: "small" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TestRunRuleName, { rulesByVersion: rules, versions }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TestRunRuleHitPercentage, { rulesByVersion: rules, versions })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Collapsible.Content, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      HamburgerChart,
      {
        versions,
        items: n$3(t$1$1(rules)).map((r) => ({
          version: r.version,
          count: r.total,
          option: r.status
        })),
        mapping: {
          hit: {
            border: "border-green-border",
            background: "bg-green-background",
            text: "text-grey-primary",
            name: t2("decisions:rules.status.hit")
          },
          no_hit: {
            border: "border-grey-border",
            background: "bg-grey-border",
            text: "text-grey-primary",
            name: t2("decisions:rules.status.no_hit")
          },
          error: {
            border: "border-red-disabled",
            background: "bg-red-disabled",
            text: "text-grey-primary",
            name: t2("decisions:rules.status.error")
          },
          snoozed: {
            border: "border-[#AAA6CC]",
            background: "bg-[#AAA6CC]",
            text: "text-grey-white",
            name: t2("decisions:rules.status.snoozed")
          }
        }
      }
    ) })
  ] });
};
const FilterTransactionByDecision = ({
  rules,
  versions
}) => {
  const { t: t2 } = useTranslation(["scenarios"]);
  const [displayChangedRules, toggleChangedRulesDisplay] = reactExports.useState(true);
  const rulesByRuleId = reactExports.useMemo(() => {
    const rulesSummary = t$8(
      t$a(rules, ({ ruleId }) => ruleId ?? `random_${crypto.randomUUID()}`),
      (rulesByVersion) => t$a(rulesByVersion, ({ version }) => version)
    );
    return displayChangedRules ? t(
      rulesSummary,
      (rs) => t$5(
        rs[versions.ref.value]?.map((r) => n$2(r, ["version"])),
        rs[versions.test.value]?.map((r) => n$2(r, ["version"]))
      )
    ) : rulesSummary;
  }, [displayChangedRules, rules, versions]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Collapsible.Container, { className: "bg-surface-card", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Collapsible.Title, { children: t2("scenarios:testrun.transaction_by_decision") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Collapsible.Content, { children: rules.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-grey-secondary inline-block w-full text-center font-semibold", children: t2("scenarios:testrun.no_rules") }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex w-full flex-row items-center justify-end gap-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-s text-grey-primary font-medium", children: t2("scenarios:testrun.show_rules_changes") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Switch, { checked: displayChangedRules, onCheckedChange: toggleChangedRulesDisplay })
      ] }),
      t$3(rulesByRuleId).length ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-s grid w-full grid-cols-[9%_40%_25%_auto] font-semibold", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t2("scenarios:testrun.filters.rule_name") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t2("testrun.filters.hit") })
        ] }),
        t$c(rulesByRuleId).map(([ruleId, rules2]) => /* @__PURE__ */ jsxRuntimeExports.jsx(RuleExecution, { rules: rules2, versions }, ruleId))
      ] }) : null
    ] }) })
  ] });
};
const DistributionOfDecisionChartSkeleton = () => {
  const { t: t2 } = useTranslation(["scenarios"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Collapsible.Container, { className: "bg-surface-card", defaultOpen: true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Collapsible.Title, { children: t2("scenarios:testrun.distribution") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Collapsible.Content, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-grey-background w-48 animate-pulse rounded-lg p-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex space-x-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 w-24 rounded-md" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-grey-border h-8 w-24 animate-pulse rounded-md" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex size-full flex-row items-center justify-center gap-2xl px-xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex size-full flex-col items-center gap-md", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-grey-border size-6 animate-pulse rounded-md" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex size-full flex-col gap-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-green-background-light h-10 w-full animate-pulse rounded-md" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-red-background h-10 w-full animate-pulse rounded-md" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-orange-background-light h-10 w-full animate-pulse rounded-md" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-yellow-background h-10 w-full animate-pulse rounded-md" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-grey-background h-6 w-16 animate-pulse rounded-md" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex size-full flex-col items-center gap-md", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-grey-border size-6 animate-pulse rounded-md" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex size-full flex-col gap-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-green-background-light h-10 w-full animate-pulse rounded-md" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-red-background h-10 w-full animate-pulse rounded-md" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-orange-background-light h-10 w-full animate-pulse rounded-md" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-yellow-background h-10 w-full animate-pulse rounded-md" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-row justify-center gap-md px-xs4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-grey-border h-6 w-11 animate-pulse rounded-md" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-grey-border h-6 w-16 animate-pulse rounded-md" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-grey-border h-6 w-8 animate-pulse rounded-md" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-grey-border h-6 w-24 animate-pulse rounded-md" })
      ] })
    ] }) })
  ] });
};
const FilterTransactionByDecisionSkeleton = () => {
  const { t: t2 } = useTranslation(["scenarios"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Collapsible.Container, { className: "bg-surface-card", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Collapsible.Title, { children: t2("scenarios:testrun.transaction_by_decision") }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Collapsible.Content, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-lg flex items-center justify-end space-x-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-s text-grey-primary font-medium", children: t2("scenarios:testrun.show_rules_changes") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Switch, { id: "show-changes", disabled: true })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-md grid grid-cols-2 gap-md", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-grey-border h-4 w-24 animate-pulse rounded-sm" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-grey-border h-4 w-16 animate-pulse rounded-sm" })
        ] }),
        [1, 2, 3, 4].map((index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "border-grey-border grid grid-cols-2 gap-md rounded-lg border p-md transition-colors",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-grey-border size-4 animate-pulse rounded-sm" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-grey-border h-4 w-32 animate-pulse rounded-sm" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-grey-border h-4 w-16 animate-pulse rounded-sm" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-grey-border size-4 animate-pulse rounded-sm" })
              ] })
            ]
          },
          index
        ))
      ] })
    ] })
  ] });
};
const TestRunDetails = ({
  refIterationId,
  testIterationId,
  startDate,
  status,
  endDate,
  iterations,
  creator
}) => {
  const { t: t2 } = useTranslation(["common", "scenarios"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-surface-card border-grey-border flex flex-row gap-2xl rounded-lg border p-xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-grey-primary font-semibold", children: t2("scenarios:testrun.filters.version") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TestRunVersions, { iterations, refIterationId, testIterationId })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-grey-primary font-semibold", children: t2("scenarios:testrun.filters.period") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TestRunPeriod, { className: "h-10", startDate, endDate })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-grey-primary font-semibold", children: t2("scenarios:testrun.filters.creator") }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-row items-center gap-md", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Avatar, { firstName: creator?.firstName, lastName: creator?.lastName, size: "m" }),
        creator ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-grey-primary text-s", children: [
          creator.firstName,
          " ",
          creator.lastName
        ] }) : null
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-grey-primary font-semibold", children: t2("scenarios:testrun.filters.status") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-row items-center gap-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TestRunStatus, { status }) })
    ] })
  ] });
};
function TestRun() {
  const {
    run,
    decisionsPromise,
    rulesPromise
  } = Route$7.useLoaderData();
  const {
    currentScenario,
    scenarioIterations
  } = useDetectionScenarioData();
  const {
    orgUsers
  } = useOrganizationUsers();
  const {
    t: t2
  } = useTranslation(["scenarios"]);
  const iterations = reactExports.useMemo(() => t$1(scenarioIterations, (i) => [i.id, t$2(i, ["version", "type"])]), [scenarioIterations]);
  const versions = reactExports.useMemo(() => ({
    ref: {
      value: `${iterations[run.refIterationId].version}`,
      type: iterations[run.refIterationId].type
    },
    test: {
      value: `${iterations[run.testIterationId].version}`,
      type: iterations[run.testIterationId].type
    }
  }), [iterations, run.refIterationId, run.testIterationId]);
  const creator = reactExports.useMemo(() => orgUsers.find((u) => u.userId === run.creatorId), [orgUsers, run.creatorId]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Page.Main, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Page.Header, { className: "justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(BreadCrumbs, {}),
      run.status === "up" ? /* @__PURE__ */ jsxRuntimeExports.jsx(CancelTestRun, { currentScenario, testRunId: run.id, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "destructive", className: "isolate h-10 w-fit", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "stop", className: "size-5" }),
        t2("scenarios:testrun.cancel")
      ] }) }) : null
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Page.Content, { width: "form", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TestRunDetails, { ...run, iterations, creator }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Await, { promise: decisionsPromise, fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(DistributionOfDecisionChartSkeleton, {}), children: (decisions) => /* @__PURE__ */ jsxRuntimeExports.jsx(DistributionOfDecisionChart, { versions, decisions }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Await, { promise: rulesPromise, fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(FilterTransactionByDecisionSkeleton, {}), children: (rules) => /* @__PURE__ */ jsxRuntimeExports.jsx(FilterTransactionByDecision, { versions, rules }) })
    ] })
  ] });
}
export {
  TestRun as component
};

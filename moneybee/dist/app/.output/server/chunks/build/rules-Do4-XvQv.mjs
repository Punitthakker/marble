import { L as useRouter, Q as jsxRuntimeExports, M as reactExports, $ as createServerFn } from "./server.mjs";
import { A as AstBuilder, C as ColoredNumberOptions } from "./index-CjCfUhgh.mjs";
import { O as OutcomeBadge } from "./OutcomeTag-DYQZ2msd.mjs";
import { F as FiltersButton, R as Root2, T as Trigger, C as Content2 } from "./index-CFNRpINI.mjs";
import { u as useDatasetTitle, e as findDatasetByName } from "./dataset-utils-CXMfULsv.mjs";
import { b0 as useDetectionScenarioIterationData, aD as useDetectionScenarioData, bh as Route$1, bi as useDerivedIterationRuleGroupsData, b9 as getIterationRuleFn, T as Tooltip, aj as scenarioI18n, ba as createRuleFn, b8 as createScreeningRuleFn, bb as getRuleDescriptionFn, bg as deleteScreeningRuleFn, bd as duplicateRuleFn, bc as deleteRuleFn, be as generateAstFn, bf as getRuleCatalogFn } from "./router-KSC-NEr8.mjs";
import { u as useMutation } from "./useMutation-BOdeDeAR.mjs";
import { u as useServerFn } from "./useServerFn-oRH5Nw97.mjs";
import { B as isAccessible } from "./feature-access-BSdB6UiC.mjs";
import { u as useTranslation, g as useFormatLanguage, ar as SearchInput, an as Panel, I as Icon, W as CtaV2ClassName, d as cn, h as formatNumber, T as Trans, ao as PanelSharpFactory, B as Button, aq as Card, ap as NumberInput, b1 as Root2$1, b2 as Trigger$1$1, c as clsx, b3 as Content2$1, M as MenuCommand, a6 as Input, S as Typo, b4 as _e, b5 as inputIconClassName } from "./Tabs-CzpyUi7T.mjs";
import { ca as isUndefinedAstNode, bZ as isDataAccessorAstNode, a2 as M, dM as findScreeningValidation, dN as getScreeningQueryFieldLabel, dO as normalizeScreeningQueryLists, dP as collectFormValidationIssues, dQ as hasScreeningErrors, dR as collectScreeningValidationIssues, dS as mergeScreeningValidationIssues, dT as hasRequiredScreeningCriteria, dU as screeningFieldHasError, dV as screeningSectionHasError, dW as issueDedupeKey, aX as NewUndefinedAstNode, aA as knownOutcomes, dX as isKnownOperandListAstNode, u as t$e, cL as t$5, v as n$7, p as t$c, dE as findRuleValidation, dF as hasRuleErrors, dG as collectRuleValidationMessages, dH as NewEmptyRuleAstNode, I as protectArray, n as isKnownOperandAstNode, dK as isListAstNode, dL as isStringConcatAstNode, dD as NewEmptyTriggerAstNode, dJ as NewStringConcatAstNode, dI as NewListAstNode, bg as makeDatasetsMap, bh as applyUniqueLexisNexisSectionDefault, bi as getCanonicalSelectedKeys } from "./services-middleware-nMulUXHZ.mjs";
import { N as Nudge } from "./Nudge-Cmzwt2Be.mjs";
import { u as useDatasetTag } from "./DatasetTag-RXIheIFj.mjs";
import { u as useGetCustomListsQuery } from "./get-custom-lists-DJnJIZcp.mjs";
import { u as useQuery } from "./useQuery-Bb0AEcpf.mjs";
import { u as useListConfigQuery } from "./lists-config-DL0Z5yQK.mjs";
import { k as getDataAccessorDisplayName, g as getAstNodeDisplayName } from "./helpers-D-Bggz_h.mjs";
import { u as useOrganizationDetails } from "./organization-detail-BGvqBGx1.mjs";
import { R as Root, T as Trigger$1, C as Content } from "./index-22HmyALM.mjs";
import { E as ExpandableGroupTagLine } from "./ExpandableGroupTagLine-MgT0uQKb.mjs";
import { T as Tag, z as zt } from "./create-context-k6HmQ6bB.mjs";
import { c as createSsrRpc } from "./query-BmG5BEas.mjs";
import { a as Callout } from "./Callout-B0OuRL3q.mjs";
import { F as FormErrorOrDescription } from "./FormErrorOrDescription-BncG6ljR.mjs";
import { a as authMiddleware } from "./auth-middleware-eNRVfU3l.mjs";
import { t as t$1 } from "./isDeepEqual-DU8kSW6f.mjs";
import { u as useGetScenarioErrorMessage } from "./scenario-validation-error-messages-DGyZ9TEq.mjs";
import { g as getFieldErrors, h as handleSubmit } from "./form-D2XmDKeG.mjs";
import { u as useDebouncedCallbackRef } from "./use-debounced-callback-ref-CXwcVZ7S.mjs";
import { u as useStore } from "./useStore-C3gZU5bu.mjs";
import { u as useForm } from "./useForm-qNQ8S9xN.mjs";
import { u as useEditorMode } from "./editor-mode-D7ckZpf3.mjs";
import { E as EvaluationErrors } from "./ScenarioValidationError-JSEokjBd.mjs";
import { n as n$1 } from "./unique-cniTya2T.mjs";
import { R as RuleGroup, A as AIText } from "./RuleGroup-D3mD2q18.mjs";
import { M as Modal } from "./Modal-CpYmGWjB.mjs";
import { H as Highlight } from "./Highlight-NVjBw0RI.mjs";
import { T as useParam, o as object, s as string, b as boolean, n as number, h as any, z as record, _ as _enum, a as array, L as isFlagActive, U as getClientEnv } from "./short-uuid-fTZYJj_k.mjs";
import { P as Popover } from "./Popover-Cp1XdSV2.mjs";
import { E as ExternalLink } from "./ExternalLink-BlVgwkVd.mjs";
import { S as ScreeningThreshold } from "./ScreeningThreshold-BK82ESq7.mjs";
import { S as Switch } from "./Switch-BV-_0Knl.mjs";
import { L as ListAndTopicDatasetConfiguration, D as DatasetSelectionContent } from "./DatasetSelectionContent-CIYFAVPQ.mjs";
import { S as Spinner } from "./Spinner-DmLieYoS.mjs";
import { u as useSignalEffect } from "./sharpstate.es-C0BW2AZi.mjs";
import { u as useEntityName } from "./useEntityName-D6YnMwkD.mjs";
import { r as replace } from "./array-BFSjnO9c.mjs";
import { D as DragDropContext, C as ConnectedDroppable, P as PublicDraggable } from "./dnd.esm-C_wuw2VJ.mjs";
import { r } from "./difference-BO2TixOr.mjs";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "./use-callback-ref-Bwe341Yf.mjs";
import "./DataField-BczNbAhi.mjs";
import "./data-9UajV2HK.mjs";
import "./data-BXamdbTM.mjs";
import "./tryCatch-CFf1qt2b.mjs";
import "./isNonNullish-DgEqPJBU.mjs";
import "./data-model-Dfj0lN5a.mjs";
import "./mapToObj-C7dg8HnM.mjs";
import "./omit-qKVZGDJg.mjs";
import "./hasAtLeast-BmuNoqMd.mjs";
import "./isArray-gJc74O_I.mjs";
import "./display-TKj7AN5a.mjs";
import "./use-callback-ref-DoQNLci-.mjs";
import "./documentation-href-DY9fs71n.mjs";
import "./Logo-3vzUxSrh.mjs";
import "./flatMap-CdA7bREZ.mjs";
import "./Select-Dg3p9vJ0.mjs";
import "./isNullish-B8pc8Ntu.mjs";
import "./create-navigation-option-CCfvMbYU.mjs";
import "./Stepper-D5HOcTsM.mjs";
import "./Checkbox-C8nszDsh.mjs";
import "./match-sorter.esm-BRMYSlZQ.mjs";
import "./decisions-i18n-Cg4JM_3r.mjs";
import "./security-headers.server-BdP3HrPp.mjs";
import "./ThemeContext-DjRULCu0.mjs";
import "./config--RFGchua.mjs";
import "./i18n-instance-store-UssbGYOM.mjs";
import "./data-model-feature-access-D7XsjRz2.mjs";
import "./datetime-insWKNBy.mjs";
import "./formatDistanceStrict-DEEeAR-Y.mjs";
import "./case-detail-middleware-iDVIrW-c.mjs";
import "./inboxes-D556s0BB.mjs";
import "./input-validation-D4mgQsey.mjs";
import "./async-C3pYACua.mjs";
import "./coerce-UidCu_Sb.mjs";
import "./files-fO9wUXBf.mjs";
import "./decisions--eKWwSYj.mjs";
import "./graph-pivots-Bblee9BN.mjs";
import "./scenarios-C5R2TE8p.mjs";
import "node:crypto";
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
import "./lists-CwYzskHN.mjs";
import "./lists-ZFx0HGFs.mjs";
import "./useBaseQuery-BqF2iw7Y.mjs";
import "./screenings-C_YbbaUO.mjs";
import "./join-Ce2xPJwm.mjs";
import "./Markdown-Djw5Zezo.mjs";
import "./Code-NcjS_4uC.mjs";
import "./ThresholdRange-CusKNWqi.mjs";
import "./capitalize-DXXvpSFO.mjs";
import "./Collapsible-CKx8cmdD.mjs";
function e(e2, t2, n2) {
  return e2(n2[0]) ? (e3) => t2(e3, ...n2) : t2(...n2);
}
function t(...t2) {
  return e((e2) => typeof e2 == `number`, n, t2);
}
function n(e2, t2, n2, r2 = []) {
  let i = [...e2];
  return i.splice(t2, n2, ...r2), i;
}
const Command = ({
  ref,
  className,
  ...props
}) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  _e,
  {
    ref,
    className: cn("bg-surface-card border-grey-border flex flex-col overflow-hidden rounded-sm border p-sm", className),
    ...props
  }
);
const CommandInput = ({
  ref,
  className,
  ...props
}) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  _e.Input,
  {
    ref,
    className: cn(
      "placeholder:text-grey-secondary text-s bg-transparent outline-hidden disabled:cursor-not-allowed disabled:opacity-50",
      className
    ),
    ...props
  }
);
const CommandList = ({
  ref,
  className,
  ...props
}) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  _e.List,
  {
    ref,
    className: cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className),
    ...props
  }
);
const CommandEmpty = ({
  ref,
  ...props
}) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  _e.Empty,
  {
    ref,
    className: "text-grey-disabled inline-flex items-center gap-sm p-sm text-xs",
    ...props
  }
);
const CommandGroup = ({
  ref,
  className,
  ...props
}) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  _e.Group,
  {
    ref,
    className: cn(
      "text-grey-secondary [&_[cmdk-group-heading]]:text-grey-secondary overflow-hidden p-xs [&_[cmdk-group-heading]]:px-xs [&_[cmdk-group-heading]]:py-xs [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium",
      className
    ),
    ...props
  }
);
const CommandItem = ({
  ref,
  className,
  ...props
}) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  _e.Item,
  {
    ref,
    className: cn(
      "text-s relative flex cursor-pointer select-none items-center gap-sm rounded-xs px-xs py-xs outline-hidden data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50",
      className
    ),
    ...props
  }
);
const useCreateScreeningRuleMutation = (scenarioId, iterationId) => {
  const createScreeningRule = useServerFn(createScreeningRuleFn);
  return useMutation({
    mutationKey: ["scenarios", "iteration", "create-screening-rule", scenarioId, iterationId],
    mutationFn: async () => createScreeningRule({ data: { scenarioId, iterationId } })
  });
};
function CreateScreeningButton({
  scenarioId,
  iterationId,
  isSanctionAvailable,
  onSuccess
}) {
  const { t: t2 } = useTranslation(["scenarios"]);
  const createScreeningRuleMutation = useCreateScreeningRuleMutation(scenarioId, iterationId);
  const disabled = reactExports.useMemo(() => !isAccessible(isSanctionAvailable), [isSanctionAvailable]);
  const handleCreateScreeningRule = () => {
    createScreeningRuleMutation.mutateAsync().then((screeningConfig) => {
      onSuccess(screeningConfig.id);
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Button,
    {
      type: "submit",
      variant: "secondary",
      appearance: "link",
      disabled,
      className: "w-full gap-sm",
      onClick: handleCreateScreeningRule,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-md", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "plus", className: "size-5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-normal", children: t2("scenarios:create_sanction.title") })
        ] }),
        isSanctionAvailable !== "allowed" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Nudge, { kind: isSanctionAvailable, content: t2("scenarios:sanction.nudge"), className: "p-xs" }) : null
      ]
    }
  );
}
function useScenarioIterationRule(ruleId) {
  const getIterationRule = useServerFn(getIterationRuleFn);
  return useQuery({
    queryKey: ["scenario-iteration-rule", ruleId],
    queryFn: async () => getIterationRule({ data: { ruleId } })
  });
}
const useCreateRuleMutation = (scenarioId, iterationId) => {
  const createRule = useServerFn(createRuleFn);
  return useMutation({
    mutationKey: ["scenarios", "iteration", "create-rule", scenarioId],
    mutationFn: async () => createRule({ data: { scenarioId, iterationId } })
  });
};
function CreateRule({
  scenarioId,
  iterationId,
  onSuccess
}) {
  const { t: t2 } = useTranslation(["scenarios"]);
  const createRuleMutation = useCreateRuleMutation(scenarioId, iterationId);
  const handleCreateRule = () => {
    createRuleMutation.mutateAsync().then((rule) => {
      onSuccess(rule.id);
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Button,
    {
      variant: "secondary",
      appearance: "link",
      disabled: createRuleMutation.isPending,
      className: "w-full gap-sm",
      onClick: handleCreateRule,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-md", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "plus", className: "size-5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-normal", children: t2("scenarios:create_rule.title") })
      ] })
    }
  );
}
const useRuleDescriptionMutation = (identifier) => {
  const getRuleDescription = useServerFn(getRuleDescriptionFn);
  return useMutation({
    mutationKey: ["scenario-iteration-rule", "rule-description", identifier],
    mutationFn: async (payload) => {
      const result = await getRuleDescription({
        data: { scenarioId: payload.scenarioId, astNode: payload.astNode }
      });
      return { success: true, data: result };
    }
  });
};
const EvaluationErrorsWrapper = ({
  errors,
  evaluation
}) => {
  const getScenarioErrorMessage = useGetScenarioErrorMessage();
  const hasMeaningfulErrors = evaluation ? evaluation.some((node) => node.errors.filter((err) => err.error != "ARGUMENT_MUST_BE_BOOLEAN").length > 0) : false;
  const filteredErrors = errors.filter((error) => {
    if (error === "FORMULA_MUST_RETURN_BOOLEAN" || error.startsWith("FORMULA_INCORRECT_RETURN_TYPE")) {
      return !hasMeaningfulErrors;
    }
    return true;
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(EvaluationErrors, { errors: filteredErrors.map(getScenarioErrorMessage) });
};
const FieldAstFormula = ({
  type,
  astNode,
  scenarioId,
  triggerObjectType,
  options,
  onChange,
  onBlur,
  onValueSwitchOpenChange,
  defaultValue
}) => {
  const { t: t2 } = useTranslation(["scenarios"]);
  const editor = useEditorMode();
  const formula = astNode ?? defaultValue;
  const isAstNull = isUndefinedAstNode(formula);
  const nodeStoreRef = reactExports.useRef(null);
  const [validationErrors, setValidationErrors] = reactExports.useState([]);
  const [validationEvaluation, setValidationEvaluation] = reactExports.useState([]);
  const handleAddTrigger = () => {
    onChange?.(NewEmptyTriggerAstNode());
  };
  const handleDeleteTrigger = () => {
    onChange?.(NewUndefinedAstNode());
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { onBlur, className: "flex min-w-0 flex-col gap-md", children: [
    isAstNull ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-blue-58 bg-blue-96 text-blue-58 text-s flex items-center rounded-sm border p-sm dark:bg-transparent", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Trans,
      {
        t: t2,
        i18nKey: "scenarios:trigger.trigger_object.no_trigger",
        values: { objectType: triggerObjectType }
      }
    ) }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
      AstBuilder.Provider,
      {
        scenarioId,
        initialData: options,
        mode: editor,
        onValueSwitchOpenChange,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          AstBuilder.Root,
          {
            node: formula,
            onStoreChange: (nodeStore) => {
              nodeStoreRef.current = nodeStore;
            },
            onValidationUpdate: (validation) => {
              setValidationErrors(validation.errors);
              setValidationEvaluation(validation.evaluation);
            },
            onUpdate: onChange,
            returnType: "bool"
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      EvaluationErrorsWrapper,
      {
        errors: isAstNull ? [] : validationErrors,
        evaluation: isAstNull ? [] : validationEvaluation
      }
    ),
    type === "screening" && editor === "edit" ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end", children: isAstNull ? /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "secondary", onClick: handleAddTrigger, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs", children: t2("scenarios:trigger.trigger_object.add_trigger") }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "secondary", onClick: handleDeleteTrigger, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs", children: t2("scenarios:trigger.trigger_object.delete_trigger") }) }) }) : null
  ] });
};
const FieldRuleGroup = ({
  selectedRuleGroup,
  ruleGroups,
  disabled,
  onChange,
  onBlur
}) => {
  const { t: t2 } = useTranslation(["scenarios"]);
  const [newRule, setNewRule] = reactExports.useState();
  const [value, setValue] = reactExports.useState();
  const finalRuleGroups = reactExports.useMemo(
    () => n$1([selectedRuleGroup, newRule, ...ruleGroups].filter(Boolean)),
    [selectedRuleGroup, ruleGroups, newRule]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Root2$1,
    {
      defaultOpen: false,
      onOpenChange: (open) => {
        if (open === false) {
          setValue("");
          onBlur?.();
        }
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-sm", children: [
          selectedRuleGroup ? /* @__PURE__ */ jsxRuntimeExports.jsx(RuleGroup, { ruleGroup: selectedRuleGroup }) : null,
          /* @__PURE__ */ jsxRuntimeExports.jsx(Trigger$1$1, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              disabled,
              variant: "secondary",
              mode: selectedRuleGroup ? "icon" : void 0,
              className: clsx({ "w-fit": !selectedRuleGroup }),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: selectedRuleGroup ? "edit-square" : "plus", className: "text-grey-disabled size-4" }),
                !selectedRuleGroup ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t2("scenarios:rules.add_group") }) : null
              ]
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Content2$1, { className: "mt-xs min-w-[280px] shadow-md", align: "start", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Command, { className: "flex flex-col gap-sm p-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-grey-border flex items-center gap-sm border-b p-sm pb-md", children: [
            selectedRuleGroup ? /* @__PURE__ */ jsxRuntimeExports.jsx(RuleGroup, { ruleGroup: selectedRuleGroup, onClear: () => onChange?.("") }) : null,
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              CommandInput,
              {
                placeholder: t2("scenarios:rules.new_group"),
                value,
                onInput: (e2) => setValue(e2.currentTarget.value),
                onKeyDown: (e2) => {
                  if (e2.key === "Enter" && value) {
                    setNewRule(value);
                    onChange?.(value);
                    setValue("");
                  }
                }
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CommandList, { children: [
            finalRuleGroups.length ? /* @__PURE__ */ jsxRuntimeExports.jsx(CommandGroup, { heading: t2("scenarios:rules.heading"), children: finalRuleGroups.map((r2) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              CommandItem,
              {
                className: "data-[selected=true]:bg-purple-background-light rounded-sm",
                onSelect: () => onChange?.(r2),
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(RuleGroup, { ruleGroup: r2 })
              },
              r2
            )) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(CommandEmpty, { className: "flex items-center gap-sm p-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "plus", className: "text-grey-disabled size-4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-grey-disabled", children: t2("scenarios:rules.empty_groups") })
            ] }),
            value && !finalRuleGroups.includes(value) ? /* @__PURE__ */ jsxRuntimeExports.jsx(CommandItem, { asChild: true, forceMount: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                variant: "secondary",
                appearance: "link",
                onClick: () => {
                  setNewRule(value);
                  onChange?.(value);
                  setValue("");
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "plus", className: "text-grey-primary size-4" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-grey-primary text-s inline-flex items-center gap-sm", children: [
                    t2("scenarios:rules.create"),
                    value ? /* @__PURE__ */ jsxRuntimeExports.jsx(RuleGroup, { ruleGroup: value }) : null
                  ] })
                ]
              }
            ) }) : null
          ] })
        ] }) })
      ]
    }
  );
};
const useDeleteRuleMutation = (scenarioId, iterationId) => {
  const deleteRule = useServerFn(deleteRuleFn);
  return useMutation({
    mutationKey: ["scenarios", "iteration", "delete-rule", scenarioId],
    mutationFn: async (payload) => deleteRule({ data: { ...payload, scenarioId, iterationId } })
  });
};
function DeleteRule({
  ruleId,
  scenarioId,
  iterationId,
  children,
  onDeleteSuccess
}) {
  const { t: t2 } = useTranslation(["common", "scenarios"]);
  const deleteRuleMutation = useDeleteRuleMutation(scenarioId, iterationId);
  const [open, setOpen] = reactExports.useState(false);
  const handleDeleteRule = () => {
    deleteRuleMutation.mutateAsync({ ruleId }).then(() => {
      setOpen(false);
      onDeleteSuccess();
      zt.success(t2("scenarios:delete_rule.success"));
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal.Root, { open, onOpenChange: setOpen, children: [
    children ? /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.Trigger, { asChild: true, children }) : null,
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal.Content, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.Title, { children: t2("scenarios:delete_rule.title") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center", children: t2("scenarios:delete_rule.content") }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal.Footer, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.FooterButton, { isCloseButton: true, label: t2("common:cancel") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Modal.FooterButton,
          {
            label: t2("common:delete"),
            variant: "destructive",
            onClick: handleDeleteRule,
            isLoading: deleteRuleMutation.isPending,
            leadingIcon: "delete"
          }
        )
      ] })
    ] })
  ] });
}
const useDuplicateRuleMutation = (scenarioId, iterationId) => {
  const duplicateRule = useServerFn(duplicateRuleFn);
  return useMutation({
    mutationKey: ["scenarios", "iteration", "duplicate-rule", scenarioId],
    mutationFn: async (payload) => duplicateRule({ data: { ...payload, scenarioId, iterationId } })
  });
};
function DuplicateRule({
  ruleId,
  scenarioId,
  iterationId,
  children,
  onDuplicateSuccess
}) {
  const { t: t2 } = useTranslation(["common", "scenarios"]);
  const duplicateRuleMutation = useDuplicateRuleMutation(scenarioId, iterationId);
  const [open, setOpen] = reactExports.useState(false);
  const handleDuplicateRule = () => {
    duplicateRuleMutation.mutateAsync({ ruleId }).then((rule) => {
      setOpen(false);
      onDuplicateSuccess(rule.id);
      zt.success(t2("scenarios:duplicate_rule.success"));
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal.Root, { open, onOpenChange: setOpen, children: [
    children ? /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.Trigger, { asChild: true, children }) : null,
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal.Content, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.Title, { children: t2("scenarios:clone_rule.title") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-lg p-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: t2("scenarios:clone_rule.content") }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal.Footer, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.FooterButton, { isCloseButton: true, label: t2("common:cancel") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Modal.FooterButton,
          {
            label: t2("scenarios:clone_rule.confirmation_button"),
            onClick: handleDuplicateRule,
            isLoading: duplicateRuleMutation.isPending,
            leadingIcon: "copy"
          }
        )
      ] })
    ] })
  ] });
}
function AiDescription({ isPending, description, className }) {
  const { t: t2 } = useTranslation(["scenarios"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: cn(
        "text-default rounded-md border border-purple-border bg-purple-background-light text-purple-primary flex flex-col gap-sm p-md dark:border-grey-border",
        className
      ),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "ai-review", className: "size-5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: t2("scenarios:rules.ai_description.title") })
        ] }),
        description ? /* @__PURE__ */ jsxRuntimeExports.jsx(AIText, { text: description }) : null,
        isPending && description ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: t2("scenarios:rules.ai_description.check_reformulation") }) : null
      ]
    }
  );
}
function useGenerateRuleMutation(scenarioId) {
  const generateAst = useServerFn(generateAstFn);
  return useMutation({
    mutationKey: ["scenario", "generate-ast", scenarioId],
    mutationFn: async ({ ruleId, instruction }) => generateAst({ data: { scenarioId, ruleId, instruction } })
  });
}
function useRuleCatalogQuery({ isEnabled = true } = {}) {
  const getRuleCatalog = useServerFn(getRuleCatalogFn);
  console.log("rule catalog enabled", isEnabled);
  return useQuery({
    queryKey: ["scenario", "rule-catalog"],
    queryFn: () => getRuleCatalog(),
    enabled: isEnabled
  });
}
function AiRuleCatalogSelect({ disabled, isGenerating, onSelect }) {
  const { t: t2, i18n } = useTranslation(["scenarios"]);
  const { org } = useOrganizationDetails();
  const isRuleCatalogEnabled = isFlagActive(getClientEnv("AI_RULE_CATALOG_ENABLED"), org.id);
  const ruleCatalogQuery = useRuleCatalogQuery({ isEnabled: isRuleCatalogEnabled });
  const [open, setOpen] = reactExports.useState(false);
  const [search, setSearch] = reactExports.useState("");
  const language = i18n.language;
  const endIconClass = inputIconClassName({ inputSize: "large", placement: "end" });
  const normalizedSearch = search.trim().toLowerCase();
  const matchingPrompts = ruleCatalogQuery.data?.rules.filter((catalogPrompt) => {
    const name = catalogPrompt.name[language] ?? catalogPrompt.name["en"];
    return [name].some((text) => text.toLowerCase().includes(normalizedSearch));
  }) ?? [];
  const selectInstruction = (instruction, catalogInfo) => {
    onSelect(instruction, catalogInfo);
    setOpen(false);
    setSearch("");
  };
  const inputEl = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Input,
      {
        value: search,
        disabled,
        endAdornment: "caret-down",
        className: "[&>svg]:invisible",
        placeholder: t2("scenarios:rules.ai_generate.placeholder"),
        onFocus: () => setTimeout(() => setOpen(true), 0),
        onChange: (event) => {
          setSearch(event.currentTarget.value);
          setOpen(true);
        },
        onEnterKeyDown: (event) => {
          if (!search.trim()) return;
          event.preventDefault();
          selectInstruction(search.trim());
        }
      }
    ),
    isRuleCatalogEnabled ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      Icon,
      {
        icon: isGenerating ? "spinner" : "caret-down",
        className: cn("pointer-events-none", endIconClass, { "animate-spin": isGenerating })
      }
    ) : null
  ] });
  return isRuleCatalogEnabled ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Popover.Root, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Popover.Anchor, { asChild: true, children: inputEl }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Popover.Content,
      {
        align: "start",
        side: "bottom",
        sideOffset: 4,
        onOpenAutoFocus: (event) => event.preventDefault(),
        className: "w-(--radix-popover-trigger-width)",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col p-xs", role: "listbox", onMouseDown: (event) => event.preventDefault(), children: [
          M(ruleCatalogQuery).with({ isPending: true }, () => /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-s text-grey-secondary p-sm", children: t2("scenarios:rules.ai_generate.catalog_loading") })).with({ isError: true }, () => /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-s text-grey-secondary p-sm", children: t2("scenarios:rules.ai_generate.catalog_unavailable") })).with({ isSuccess: true }, () => {
            return matchingPrompts.map((catalogPrompt) => {
              const name = catalogPrompt.name[language] ?? catalogPrompt.name["en"];
              const description = catalogPrompt.description[language] ?? catalogPrompt.description["en"];
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  role: "option",
                  className: "hover:bg-purple-background-light focus-visible:ring-purple-primary flex w-full flex-col gap-xs rounded-xs p-md text-start outline-hidden focus-visible:ring-2",
                  onClick: () => selectInstruction(catalogPrompt.prompt, { name, description }),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Highlight,
                      {
                        text: name,
                        query: search,
                        className: "text-grey-primary font-medium",
                        markClassName: "bg-transparent text-purple-primary"
                      }
                    ),
                    description ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-grey-secondary text-tiny", children: description }) : null
                  ]
                },
                catalogPrompt.prompt
              );
            });
          }).exhaustive(),
          !ruleCatalogQuery.isPending && matchingPrompts.length === 0 ? search.trim() ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              className: "hover:bg-purple-background-light focus-visible:ring-purple-primary rounded-xs p-sm text-start text-s outline-hidden focus-visible:ring-2",
              onClick: () => selectInstruction(search.trim()),
              children: t2("scenarios:rules.ai_generate.use_free_text", { instruction: search.trim() })
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-s text-grey-secondary p-sm", children: t2("scenarios:rules.ai_generate.catalog_empty") }) : null
        ] })
      }
    )
  ] }) : inputEl;
}
function AiGenerateRule({
  scenarioId,
  ruleId,
  estimatedGenerationDurationMs,
  onFormulaGenerated
}) {
  const { t: t2 } = useTranslation(["scenarios", "common"]);
  const mutation = useGenerateRuleMutation(scenarioId);
  const handleGenerate = async (instruction, catalogInfo) => {
    const result = await mutation.mutateAsync({ ruleId, instruction }).catch(() => null);
    if (result === null || !result.success) {
      zt.error(t2("scenarios:rules.ai_generate.error_generating"));
      return;
    }
    if (result.ruleAst) {
      onFormulaGenerated(result.ruleAst, catalogInfo);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Typo, { variant: "subtitle1", className: "text-s font-medium mb-md flex gap-xs items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "ai-stars", className: "size-6 text-purple-primary" }),
      t2("scenarios:rules.ai_generate.title")
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-md", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        AiRuleCatalogSelect,
        {
          disabled: mutation.isPending,
          isGenerating: mutation.isPending,
          onSelect: handleGenerate
        }
      ),
      mutation.isPending ? /* @__PURE__ */ jsxRuntimeExports.jsx(GenerationProgress, { estimatedDurationMs: estimatedGenerationDurationMs }) : null
    ] })
  ] });
}
function GenerationProgress({ estimatedDurationMs }) {
  const { t: t2 } = useTranslation(["scenarios"]);
  const [progress, setProgress] = reactExports.useState(0);
  const seconds = Math.ceil(estimatedDurationMs / 1e3);
  reactExports.useEffect(() => {
    const startedAt = performance.now();
    const updateProgress = () => {
      const elapsed = performance.now() - startedAt;
      const normalizedElapsed = elapsed / Math.max(estimatedDurationMs, 1);
      const logarithmicProgress = Math.log1p(7 * normalizedElapsed);
      setProgress(Math.min(95, 95 * (logarithmicProgress / Math.log1p(7))));
    };
    updateProgress();
    const interval = window.setInterval(updateProgress, 250);
    return () => window.clearInterval(interval);
  }, [estimatedDurationMs]);
  const label = t2("scenarios:rules.ai_generate.estimated_duration", { seconds });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-small text-purple-primary font-medium", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        role: "progressbar",
        "aria-label": label,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(progress),
        className: "h-2 w-28 max-w-full overflow-hidden rounded-full relative",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-purple-background-light border-purple-border-light h-full w-full border rounded-full" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-s-0 top-0 bg-purple-primary h-full rounded-full transition-[width] duration-200 ease-out",
              style: { width: `${progress}%` }
            }
          )
        ]
      }
    )
  ] });
}
function RuleEditPanel({
  ruleId,
  ...props
}) {
  const {
    t: t2
  } = useTranslation(["common"]);
  const ruleQuery = useScenarioIterationRule(ruleId);
  return M(ruleQuery).with({
    isError: true
  }, ({
    error
  }) => /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: error.message })).with({
    isPending: true
  }, () => /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: t2("common:loading") })).with({
    isSuccess: true
  }, ({
    data
  }) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(RuleEditForm, { rule: data.rule, ...props });
  }).exhaustive();
}
const editRuleFormSchema = object({
  name: string().nonempty(),
  description: string().optional(),
  ruleGroup: string().optional(),
  scoreModifier: number().int().min(-1e3).max(1e3),
  formula: any()
});
const editRuleConfigurationSchema = object({
  params: object({
    ruleId: string()
  }),
  payload: editRuleFormSchema
});
const editRuleAction = createServerFn({
  method: "POST"
}).middleware([authMiddleware]).validator(editRuleConfigurationSchema).handler(createSsrRpc("9400a11e6b2258983bbeb49c7002a1783418a7cb2735a2b7e80327517e28d11f"));
function RuleEditForm({
  rule,
  scenario,
  scenarioValidation,
  ruleGroups,
  isAiRuleDescriptionEnabled,
  onSuccess,
  onDelete
}) {
  const {
    t: t2
  } = useTranslation(["common"]);
  const panelSharp = PanelSharpFactory.useSharp();
  const nameInputRef = reactExports.useRef(null);
  const mutation = useMutation({
    mutationFn: (value) => editRuleAction({
      data: {
        params: {
          ruleId: rule.id
        },
        payload: value
      }
    }),
    onSuccess: async () => {
      zt.success(t2("common:success.save"));
      await onSuccess();
    },
    onError: () => {
      zt.error(t2("common:errors.unknown"));
    },
    meta: {
      invalidates: () => [["scenario-iteration-rule", rule.id]]
    }
  });
  const ruleDescriptionMutation = useRuleDescriptionMutation(rule.id);
  const [ruleDescription, setRuleDescription] = reactExports.useState(void 0);
  const getScenarioErrorMessage = useGetScenarioErrorMessage();
  const ruleValidation = reactExports.useMemo(() => findRuleValidation(scenarioValidation, rule.id), [scenarioValidation, rule.id]);
  const form = useForm({
    onSubmitMeta: {
      closeOnSuccess: false
    },
    onSubmit: async ({
      value,
      formApi,
      meta
    }) => {
      if (serverValidationMessages.length > 0 || !formApi.state.isValid) {
        return;
      }
      await mutation.mutateAsync(value);
      if (meta.closeOnSuccess) {
        panelSharp.actions.close();
      }
    },
    validators: {
      // onMount is required so canSubmit is false for invalid default values
      // (TanStack keeps canSubmit true until the form is touched otherwise).
      onMount: editRuleFormSchema,
      onChange: editRuleFormSchema,
      onSubmit: editRuleFormSchema
    },
    defaultValues: {
      name: rule.name ?? "",
      description: rule.description ?? "",
      ruleGroup: rule.ruleGroup,
      scoreModifier: rule.scoreModifier,
      formula: rule.formula
    }
  });
  const formFormula = useStore(form.store, (state) => state.values.formula);
  const [formulaKey, setFormulaKey] = reactExports.useState(0);
  const [isDebouncing, setIsDebouncing] = reactExports.useState(false);
  const [isValueSwitchOpen, setIsValueSwitchOpen] = reactExports.useState(false);
  const serverValidationMessages = reactExports.useMemo(() => {
    if (!t$1(formFormula, rule.formula)) {
      return [];
    }
    if (!hasRuleErrors(ruleValidation, {
      formFormula
    })) {
      return [];
    }
    return collectRuleValidationMessages(ruleValidation, getScenarioErrorMessage, t2("scenarios:edit_rule.formula"), {
      formFormula
    });
  }, [ruleValidation, formFormula, rule.formula, getScenarioErrorMessage, t2]);
  const innerHandleFormulaChange = useDebouncedCallbackRef((value) => {
    setIsDebouncing(false);
    if (value) {
      ruleDescriptionMutation.mutateAsync({
        scenarioId: scenario.id,
        astNode: value
      }).then((res) => {
        if (res.success && res.data.isRuleValid) {
          setRuleDescription(res.data.description);
        }
      });
    }
  }, 3e3);
  const handleFormulaChange = (value) => {
    if (!isAiRuleDescriptionEnabled) return;
    setIsDebouncing(true);
    innerHandleFormulaChange(value);
  };
  const handleRuleSubmit = async (closeOnSuccess) => {
    await form.handleSubmit({
      closeOnSuccess
    });
  };
  const handleRuleDelete = async () => {
    await onDelete();
  };
  const handleRuleDuplicate = async (ruleId) => {
    await onSuccess(ruleId);
  };
  reactExports.useEffect(() => {
    if (!isAiRuleDescriptionEnabled) return;
    setRuleDescription(void 0);
    if (rule.formula) {
      ruleDescriptionMutation.mutateAsync({
        scenarioId: scenario.id,
        astNode: rule.formula
      }).then((res) => {
        if (res.success && res.data.isRuleValid) {
          setRuleDescription((prevDesc) => prevDesc ?? res.data.description);
        }
      });
    }
  }, [rule.id]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("form", { onSubmit: handleSubmit(form), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Panel.Content, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Panel.Header, { className: "flex justify-between items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(form.Field, { name: "name", children: (field) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Panel.HeaderInput, { ref: nameInputRef, name: field.name, value: field.state.value, onChange: (e2) => field.handleChange(e2.target.value), onBlur: field.handleBlur, placeholder: t2("scenarios:edit_rule.name_placeholder"), "data-testid": "rule_edit_panel.name_input", "aria-invalid": field.state.meta.errors.length > 0 || void 0 }),
          field.state.meta.isTouched ? /* @__PURE__ */ jsxRuntimeExports.jsx(FormErrorOrDescription, { errors: getFieldErrors(field.state.meta.errors) }) : null
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(form.Field, { name: "ruleGroup", validators: {
          onChange: editRuleFormSchema.shape.ruleGroup,
          onBlur: editRuleFormSchema.shape.ruleGroup
        }, children: (field) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FieldRuleGroup, { onChange: field.handleChange, onBlur: field.handleBlur, selectedRuleGroup: field.state.value, ruleGroups }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(FormErrorOrDescription, { errors: getFieldErrors(field.state.meta.errors) })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DuplicateRule, { ruleId: rule.id, iterationId: rule.scenarioIterationId, scenarioId: scenario.id, onDuplicateSuccess: handleRuleDuplicate, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "small", variant: "primary", appearance: "stroked", mode: "icon", "aria-label": "Clone rule", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "copy", className: "size-4" }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DeleteRule, { ruleId: rule.id, iterationId: rule.scenarioIterationId, scenarioId: scenario.id, onDeleteSuccess: handleRuleDelete, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "small", variant: "destructive", appearance: "stroked", mode: "icon", "aria-label": "Delete rule", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "delete", className: "size-4" }) }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-w-0 flex-col gap-md", children: [
      serverValidationMessages.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(Callout, { color: "red", icon: "lightbulb", iconColor: "red", className: "max-w-3xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "flex flex-col gap-xs ps-md", children: serverValidationMessages.map((message) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: message }, message)) }) }) : null,
      /* @__PURE__ */ jsxRuntimeExports.jsx(form.Field, { name: "description", validators: {
        onChange: editRuleFormSchema.shape.description,
        onBlur: editRuleFormSchema.shape.description
      }, children: (field) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "flex w-full flex-col gap-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { name: field.name, value: field.state.value, onChange: (e2) => field.handleChange(e2.currentTarget.value), onBlur: field.handleBlur, className: "form-textarea text-grey-primary text-s w-full resize-none border-none bg-transparent font-medium outline-hidden", placeholder: t2("scenarios:edit_rule.description_placeholder") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(FormErrorOrDescription, { errors: getFieldErrors(field.state.meta.errors) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("grid min-w-0 grid-cols-1 transition-[grid-template-columns,gap] duration-300 ease-in-out", {
        "grid-cols-[minmax(0,2fr)_minmax(0,1fr)] gap-md": isAiRuleDescriptionEnabled && !isValueSwitchOpen,
        "grid-cols-[minmax(0,1fr)_minmax(0,0fr)] gap-0": isAiRuleDescriptionEnabled && isValueSwitchOpen
      }), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-w-0 flex-col gap-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-w-0 flex-col gap-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-s font-medium", children: t2("scenarios:edit_rule.formula") }),
          isAiRuleDescriptionEnabled ? /* @__PURE__ */ jsxRuntimeExports.jsx(AiGenerateRule, { scenarioId: scenario.id, ruleId: rule.id, estimatedGenerationDurationMs: RULE_GENERATION_ESTIMATED_DURATION_MS, onFormulaGenerated: (ruleAst, catalogInfo) => {
            form.setFieldValue("formula", ruleAst);
            if (catalogInfo) {
              form.setFieldValue("name", catalogInfo.name);
              form.setFieldValue("description", catalogInfo.description);
            }
            handleFormulaChange(ruleAst);
            setFormulaKey((k) => k + 1);
          } }) : null,
          /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: cn("min-w-0 overflow-hidden", {
            "border-red-primary": serverValidationMessages.length > 0
          }), children: /* @__PURE__ */ jsxRuntimeExports.jsx(form.Field, { name: "formula", validators: {
            onChange: editRuleFormSchema.shape.formula,
            onBlur: editRuleFormSchema.shape.formula
          }, children: (field) => /* @__PURE__ */ jsxRuntimeExports.jsx(FieldAstFormula, { type: "rule", scenarioId: scenario.id, triggerObjectType: scenario.triggerObjectType, onBlur: field.handleBlur, onValueSwitchOpenChange: setIsValueSwitchOpen, onChange: (node) => {
            field.handleChange(node);
            handleFormulaChange(node);
          }, astNode: field.state.value, defaultValue: NewEmptyRuleAstNode() }, formulaKey) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-grey-background text-grey-secondary dark:text-grey-secondary text-s inline-flex rounded-sm p-sm font-medium", children: t2("scenarios:edit_rule.score_heading") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(form.Field, { name: "scoreModifier", validators: {
              onChange: editRuleFormSchema.shape.scoreModifier,
              onBlur: editRuleFormSchema.shape.scoreModifier
            }, children: (field) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-xs", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(NumberInput, { name: field.name, value: field.state.value, onBlur: field.handleBlur, onChange: field.handleChange, borderColor: field.state.meta.errors?.length === 0 ? "greyfigma-90" : "redfigma-47", colorByValue: ColoredNumberOptions, forceSign: true }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(FormErrorOrDescription, { errors: getFieldErrors(field.state.meta.errors) })
            ] }) })
          ] }) })
        ] }) }),
        isAiRuleDescriptionEnabled ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("min-w-0 overflow-hidden transition-[opacity,transform] duration-300 ease-in-out", {
          "translate-x-0 opacity-100": !isValueSwitchOpen,
          "pointer-events-none translate-x-md opacity-0": isValueSwitchOpen
        }), "aria-hidden": isValueSwitchOpen, children: /* @__PURE__ */ jsxRuntimeExports.jsx(AiDescription, { isPending: isDebouncing || ruleDescriptionMutation.isPending, description: ruleDescription, className: "self-start max-w-2xl" }) }) : null
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Panel.Footer, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(form.Subscribe, { selector: (state) => [state.canSubmit, state.isSubmitting], children: ([canSubmit, isSubmitting]) => /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Panel.FooterButton, { disabled: !canSubmit || isSubmitting, isCloseButton: true, label: t2("common:cancel") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Panel.FooterButton, { type: "submit", disabled: !canSubmit || isSubmitting, isLoading: isSubmitting, variant: "primary-outline", label: t2("common:save") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Panel.FooterButton, { type: "button", disabled: !canSubmit || isSubmitting, isLoading: isSubmitting, onClick: () => handleRuleSubmit(true), trailingIcon: "save", variant: "primary", label: t2("common:save_and_close") })
    ] }) }) })
  ] }) });
}
const RULE_GENERATION_ESTIMATED_DURATION_MS = 3e4;
const useDeleteScreeningRuleMutation = (scenarioId, iterationId) => {
  const deleteScreeningRule = useServerFn(deleteScreeningRuleFn);
  return useMutation({
    mutationKey: ["scenarios", "iteration", "delete-screening-rule", scenarioId, iterationId],
    mutationFn: async (screeningId) => deleteScreeningRule({ data: { scenarioId, iterationId, screeningId } })
  });
};
function DeleteScreeningRule({
  scenarioId,
  iterationId,
  screeningId,
  children,
  onDeleteSuccess
}) {
  const { t: t2 } = useTranslation(["common", "scenarios"]);
  const deleteScreeningRuleMutation = useDeleteScreeningRuleMutation(scenarioId, iterationId);
  const handleDeleteScreeningRule = () => {
    deleteScreeningRuleMutation.mutateAsync(screeningId).then(() => {
      onDeleteSuccess();
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal.Root, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.Trigger, { asChild: true, children }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal.Content, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.Title, { children: t2("scenarios:delete_sanction.title") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-lg p-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: t2("scenarios:delete_sanction.content") }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal.Footer, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.FooterButton, { isCloseButton: true, label: t2("common:cancel") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Modal.FooterButton,
          {
            label: t2("common:delete"),
            variant: "destructive",
            onClick: handleDeleteScreeningRule,
            isLoading: deleteScreeningRuleMutation.isPending,
            leadingIcon: "delete"
          }
        )
      ] })
    ] })
  ] });
}
function getDatasetsKey(datasets) {
  return [...datasets].sort().join(",");
}
const FieldDataset = ({ value, onChange, readOnly = false }) => {
  const { t: t2 } = useTranslation();
  const listConfigQuery = useListConfigQuery("transaction_monitoring");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-s font-semibold", children: t2("scenarios:sanction.lists.title") }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-surface-card border-grey-border flex flex-col gap-md rounded-sm border p-md", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Callout, { variant: "outlined", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "whitespace-pre-wrap", children: t2("scenarios:sanction.lists.callout") }) }),
      M(listConfigQuery).with({ isPending: true }, () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center h-50", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, { className: "size-10" }) })).with({ isError: true }, () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-md items-center justify-center h-50", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "", children: t2("common:generic_fetch_data_error") }) })).otherwise(({ data }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        FieldDatasetInner,
        {
          provider: data.provider,
          filters: data.filters,
          value,
          onChange,
          readOnly
        }
      ))
    ] })
  ] });
};
const FieldDatasetInner = ({
  provider,
  filters,
  value,
  onChange,
  readOnly
}) => {
  const valueKey = reactExports.useMemo(() => getDatasetsKey(value ?? []), [value]);
  const listSharp = ListAndTopicDatasetConfiguration.createSharp({
    datasets: (() => {
      const initial = makeDatasetsMap(value ?? []);
      applyUniqueLexisNexisSectionDefault(initial, filters, provider);
      return initial;
    })(),
    mode: readOnly ? "view" : "edit",
    provider
  });
  const onChangeRef = reactExports.useRef(onChange);
  onChangeRef.current = onChange;
  const lastValueKeyRef = reactExports.useRef(valueKey);
  lastValueKeyRef.current = valueKey;
  reactExports.useEffect(() => {
    const nextDatasets = makeDatasetsMap(value ?? []);
    applyUniqueLexisNexisSectionDefault(nextDatasets, filters, provider);
    const expectedKey = getDatasetsKey(getCanonicalSelectedKeys(nextDatasets));
    const selectedKey = getDatasetsKey(getCanonicalSelectedKeys(listSharp.value.datasets));
    if (selectedKey === expectedKey) return;
    listSharp.update((state) => {
      for (const key of Object.keys(state.datasets)) {
        delete state.datasets[key];
      }
      for (const [key, isSelected] of Object.entries(nextDatasets)) {
        state.datasets[key] = isSelected;
      }
    });
  }, [listSharp, value, valueKey, filters, provider]);
  useSignalEffect(() => {
    const selectedDatasets = getCanonicalSelectedKeys(listSharp.value.datasets);
    const selectedKey = getDatasetsKey(selectedDatasets);
    if (selectedKey === lastValueKeyRef.current) {
      return;
    }
    lastValueKeyRef.current = selectedKey;
    onChangeRef.current?.(selectedDatasets);
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ListAndTopicDatasetConfiguration.Provider, { value: listSharp, children: /* @__PURE__ */ jsxRuntimeExports.jsx(DatasetSelectionContent, { useCase: "transaction_monitoring" }) });
};
const FieldEntityType = ({
  entityType,
  onChange
}) => {
  const editor = useEditorMode();
  const { getEntityName } = useEntityName();
  const [open, setOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-md", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(MenuCommand.Menu, { persistOnSelect: false, open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Trigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.SelectButton, { className: "w-52", disabled: editor === "view", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-grey-primary text-s font-medium", children: getEntityName(entityType) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Content, { sameWidth: true, className: "mt-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(MenuCommand.List, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Item, { onSelect: () => onChange("Thing"), children: getEntityName("Thing") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Item, { onSelect: () => onChange("Person"), children: getEntityName("Person") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Item, { onSelect: () => onChange("Organization"), children: getEntityName("Organization") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Item, { onSelect: () => onChange("Vehicle"), children: getEntityName("Vehicle") })
    ] }) })
  ] }) });
};
const MatchOperand = reactExports.memo(function MatchOperand2({
  node,
  onSave,
  placeholder,
  withDate
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    AstBuilder.Operand,
    {
      placeholder,
      node: node ?? NewUndefinedAstNode(),
      optionsDataType: withDate === "all" || withDate === "fields" ? ["String", "Timestamp"] : ["String"],
      excludeFuntionsType: withDate === "fields" ? ["Timestamp"] : [],
      excludeFields: withDate ? ["updated_at"] : void 0,
      validationStatus: "valid",
      onChange: onSave
    }
  );
});
const FieldNode = ({
  value,
  placeholder,
  onChange,
  onBlur
}) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { onBlur, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
  MatchOperand,
  {
    node: value,
    placeholder,
    onSave: (node) => {
      if (isKnownOperandAstNode(node)) {
        onChange?.(!isUndefinedAstNode(node) ? node : null);
      }
    }
  }
) });
function nodeFromNodes(nodes, output) {
  const finalNodes = nodes.filter((n2) => !isUndefinedAstNode(n2));
  if (finalNodes.length === 0) return null;
  return output === "List" ? NewListAstNode(finalNodes) : NewStringConcatAstNode(finalNodes, { withSeparator: true });
}
function FieldNodeReferences({
  value,
  output,
  limit,
  onBlur,
  onChange,
  viewOnly,
  placeholder,
  withDate
}) {
  const { t: t$12 } = useTranslation(["scenarios"]);
  const [nodes, setNodes] = reactExports.useState(
    () => value?.children?.length ? value.children : [NewUndefinedAstNode()]
  );
  const onChangeRef = reactExports.useRef(onChange);
  onChangeRef.current = onChange;
  const emitFromNodes = (nextNodes) => {
    onChangeRef.current?.(nodeFromNodes(nextNodes, output));
  };
  const applyNodes = (nextNodes) => {
    setNodes(nextNodes);
    emitFromNodes(nextNodes);
  };
  reactExports.useEffect(() => {
    setNodes((prev) => {
      const filled = prev.filter((node) => !isUndefinedAstNode(node));
      if (value?.children?.length) {
        const isOwnEcho = value.children.length === filled.length && value.children.every((child, index) => child.id === filled[index]?.id);
        return isOwnEcho ? prev : value.children;
      }
      return filled.length === 0 ? prev : [NewUndefinedAstNode()];
    });
  }, [value]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { onBlur, className: "flex flex-col gap-sm", children: nodes.map((node, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2xs", children: [
    !viewOnly ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-row", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          mode: "icon",
          variant: "secondary",
          appearance: "link",
          "aria-label": t$12("scenarios:edit_sanction.remove_operand"),
          onClick: () => applyNodes(nodes.length === 1 ? [NewUndefinedAstNode()] : t(nodes, index, 1, [])),
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "cross", className: "size-4" })
        }
      ),
      !limit || nodes.length < limit ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          mode: "icon",
          variant: "secondary",
          appearance: "link",
          "aria-label": t$12("scenarios:edit_sanction.insert_operand"),
          disabled: nodes.length === limit,
          onClick: () => applyNodes(
            t(nodes, index, 1, [{ ...nodes[index], id: nodes[index].id }, NewUndefinedAstNode()])
          ),
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "plus", className: "size-4" })
        }
      ) : null
    ] }) : null,
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      MatchOperand,
      {
        node,
        placeholder,
        onSave: (savedNode) => {
          if (isKnownOperandAstNode(savedNode)) {
            applyNodes(replace(nodes, { ...savedNode, id: node.id }, (_, i) => i === index));
          }
        },
        withDate
      },
      `node-${index}`
    )
  ] }, node.id)) });
}
function FieldNodeList(props) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(FieldNodeReferences, { ...props, value: props.value, output: "List" });
}
function reorder(list, startIndex, endIndex) {
  const result = [...list];
  const [removed] = result.splice(startIndex, 1);
  if (removed) result.splice(endIndex, 0, removed);
  return result;
}
function isStringConcatListAstNode(node) {
  return isListAstNode(node) && node.children.every(isStringConcatAstNode);
}
function newEmptyConcat() {
  return NewStringConcatAstNode([NewUndefinedAstNode()], { withSeparator: true });
}
function withPlaceholder(concat) {
  return concat.children.length > 0 ? concat : { ...concat, children: [NewUndefinedAstNode()] };
}
function listFromConcats(concats) {
  const filledConcats = concats.flatMap((concat) => {
    const children = concat.children.filter((child) => !isUndefinedAstNode(child));
    return children.length > 0 ? [{ ...concat, children }] : [];
  });
  return filledConcats.length > 0 ? NewListAstNode(filledConcats) : null;
}
function sameAstNodeContents(left, right) {
  if (!left || !right) return left === right;
  if (left.id !== right.id || left.name !== right.name || JSON.stringify(left.constant) !== JSON.stringify(right.constant) || left.children.length !== right.children.length) {
    return false;
  }
  const leftNamedChildKeys = Object.keys(left.namedChildren).sort();
  const rightNamedChildKeys = Object.keys(right.namedChildren).sort();
  if (leftNamedChildKeys.length !== rightNamedChildKeys.length || leftNamedChildKeys.some((key, index) => key !== rightNamedChildKeys[index])) {
    return false;
  }
  return left.children.every((child, index) => sameAstNodeContents(child, right.children[index])) && leftNamedChildKeys.every((key) => sameAstNodeContents(left.namedChildren[key], right.namedChildren[key]));
}
function sameConcatContents(left, right) {
  return left.length === right.length && left.every((concat, index) => sameAstNodeContents(concat, right[index]));
}
function FieldNodeConcatList({
  value,
  limit,
  concatLimit,
  placeholder,
  onChange,
  onBlur,
  viewOnly
}) {
  const { t: t$12 } = useTranslation(["common", "scenarios"]);
  const [concats, setConcats] = reactExports.useState(
    () => value?.children.length ? value.children.map(withPlaceholder) : [newEmptyConcat()]
  );
  const onChangeRef = reactExports.useRef(onChange);
  onChangeRef.current = onChange;
  const applyConcats = (nextConcats) => {
    setConcats(nextConcats);
    onChangeRef.current?.(listFromConcats(nextConcats));
  };
  reactExports.useEffect(() => {
    setConcats((previous) => {
      const filled = listFromConcats(previous)?.children ?? [];
      if (value?.children.length) {
        return sameConcatContents(value.children, filled) ? previous : value.children.map(withPlaceholder);
      }
      return filled.length === 0 ? previous : [newEmptyConcat()];
    });
  }, [value]);
  const onDragEnd = (result) => {
    if (!result.destination || result.destination.droppableId !== result.source.droppableId || result.destination.index === result.source.index) {
      return;
    }
    const concatIndex = concats.findIndex((concat2) => concat2.id === result.source.droppableId);
    const concat = concats[concatIndex];
    if (!concat) return;
    updateConcat(concatIndex, {
      ...concat,
      children: reorder(concat.children, result.source.index, result.destination.index)
    });
  };
  const updateConcat = (index, concat) => {
    applyConcats(replace(concats, concat, (_, concatIndex) => concatIndex === index));
  };
  const clearOperand = (concatIndex, operandIndex) => {
    const concat = concats[concatIndex];
    updateConcat(concatIndex, {
      ...concat,
      children: concat.children.length === 1 ? [NewUndefinedAstNode()] : t(concat.children, operandIndex, 1, [])
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(DragDropContext, { onDragEnd, autoScrollerOptions: { disabled: true }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { onBlur, className: "flex flex-col gap-sm", children: [
    concats.length === 0 && !viewOnly ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      Button,
      {
        mode: "icon",
        variant: "secondary",
        appearance: "link",
        "aria-label": t$12("scenarios:edit_sanction.add_concatenation_row"),
        onClick: () => applyConcats([newEmptyConcat()]),
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "plus", className: "size-4" })
      }
    ) : null,
    concats.map((concat, concatIndex) => /* @__PURE__ */ jsxRuntimeExports.jsxs(reactExports.Fragment, { children: [
      concatIndex > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-grey-secondary text-xs font-medium uppercase", children: t$12("common:or") }) : null,
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2xs", children: [
        !viewOnly ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-row", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              mode: "icon",
              variant: "secondary",
              appearance: "link",
              "aria-label": t$12("scenarios:edit_sanction.remove_concatenation_row"),
              onClick: () => applyConcats(
                limit === 1 && concats.length === 1 ? [newEmptyConcat()] : t(concats, concatIndex, 1, [])
              ),
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "cross", className: "size-4" })
            }
          ),
          !limit || concats.length < limit ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              mode: "icon",
              variant: "secondary",
              appearance: "link",
              "aria-label": t$12("scenarios:edit_sanction.insert_concatenation_row"),
              onClick: () => applyConcats(t(concats, concatIndex + 1, 0, [newEmptyConcat()])),
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "plus", className: "size-4" })
            }
          ) : null
        ] }) : null,
        /* @__PURE__ */ jsxRuntimeExports.jsx(ConnectedDroppable, { isDropDisabled: viewOnly, droppableId: concat.id, direction: "horizontal", type: concat.id, children: (dropProvided) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "flex flex-1 flex-wrap items-center gap-xs",
            ref: dropProvided.innerRef,
            ...dropProvided.droppableProps,
            children: [
              concat.children.map((operand, operandIndex) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                PublicDraggable,
                {
                  isDragDisabled: viewOnly,
                  draggableId: operand.id,
                  index: operandIndex,
                  children: (dragProvided) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      ref: dragProvided.innerRef,
                      ...dragProvided.draggableProps,
                      className: "flex items-center gap-2xs",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-stretch", children: [
                          !viewOnly ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "div",
                            {
                              className: "border-grey-border hover:bg-grey-background flex w-6 shrink-0 items-center justify-center rounded-s-sm border border-e-0",
                              ...dragProvided.dragHandleProps,
                              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "drag", className: "text-grey-disabled size-3" })
                            }
                          ) : null,
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            MatchOperand,
                            {
                              node: operand,
                              placeholder,
                              onSave: (savedNode) => {
                                if (!isKnownOperandAstNode(savedNode)) return;
                                updateConcat(concatIndex, {
                                  ...concat,
                                  children: replace(
                                    concat.children,
                                    { ...savedNode, id: operand.id },
                                    (_, index) => index === operandIndex
                                  )
                                });
                              }
                            }
                          ),
                          !viewOnly ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Button,
                            {
                              mode: "icon",
                              variant: "secondary",
                              appearance: "link",
                              className: "border-grey-border h-auto min-w-6 self-stretch rounded-e-sm rounded-s-none border border-s-0",
                              "aria-label": t$12("scenarios:edit_sanction.remove_operand"),
                              onClick: () => clearOperand(concatIndex, operandIndex),
                              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "cross", className: "size-4" })
                            }
                          ) : null
                        ] }),
                        !viewOnly && operandIndex === concat.children.length - 1 && (!concatLimit || concat.children.length < concatLimit) ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Button,
                          {
                            mode: "icon",
                            variant: "secondary",
                            appearance: "link",
                            "aria-label": t$12("scenarios:edit_sanction.insert_operand"),
                            onClick: () => updateConcat(concatIndex, {
                              ...concat,
                              children: t(concat.children, operandIndex + 1, 0, [NewUndefinedAstNode()])
                            }),
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "link", className: "size-4" })
                          }
                        ) : null
                      ]
                    }
                  )
                },
                operand.id
              )),
              dropProvided.placeholder
            ]
          }
        ) })
      ] })
    ] }, concat.id))
  ] }) });
}
const FieldOutcomes = ({
  selectedOutcome,
  outcomes,
  disabled,
  name,
  onChange,
  onBlur
}) => {
  const [open, setOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    MenuCommand.Menu,
    {
      open,
      onOpenChange: (nextOpen) => {
        setOpen(nextOpen);
        if (!nextOpen) {
          onBlur?.();
        }
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Trigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          MenuCommand.SelectButton,
          {
            name,
            disabled,
            className: "hover:bg-grey-background-light w-full border-0 transition-colors",
            children: selectedOutcome ? /* @__PURE__ */ jsxRuntimeExports.jsx(OutcomeBadge, { size: "sm", outcome: selectedOutcome }) : null
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Content, { align: "start", className: "mt-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.List, { children: outcomes.map((outcome) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          MenuCommand.Item,
          {
            value: outcome,
            onSelect: () => {
              onChange?.(outcome);
              setOpen(false);
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(OutcomeBadge, { size: "sm", outcome })
          },
          outcome
        )) }) })
      ]
    }
  );
};
const FieldSkipIfUnder = ({ value, onBlur, onChange, editor, name }) => {
  const { t: t2 } = useTranslation(scenarioI18n);
  const [inputValue, setInputValue] = reactExports.useState(value ?? 5);
  const handleInputChange = (e2) => {
    const newValue = +e2.currentTarget.value;
    setInputValue(newValue);
    onChange(newValue);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Switch,
      {
        checked: value !== null,
        onCheckedChange: (checked) => onChange(checked ? inputValue : null),
        onBlur,
        disabled: editor === "view",
        id: "ignore-check-if-under"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "ignore-check-if-under", className: "text-s flex flex-row items-center gap-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Trans,
      {
        t: t2,
        i18nKey: "scenarios:edit_sanction.ignore_check_if_under",
        components: {
          NbNumbers: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              size: "small",
              type: "number",
              name,
              className: "z-0 w-14 py-0",
              value: inputValue,
              min: 0,
              onChange: handleInputChange,
              disabled: editor === "view" || value === null
            }
          )
        }
      }
    ) })
  ] });
};
const FieldToolTip = ({ children, label }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Tooltip.Default,
    {
      arrow: false,
      delayDuration: 0,
      side: "right",
      sideOffset: 16,
      content: children,
      className: "border-grey-border text-s flex w-fit max-w-80 border shadow-md",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          "aria-label": label,
          className: "hover:text-purple-primary text-purple-disabled cursor-pointer transition-colors",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "tip", className: "size-5" })
        }
      )
    }
  );
};
const ScreeningTermIgnoreList = ({ value, onBlur, onChange, editor }) => {
  const { t: t2 } = useTranslation(scenarioI18n);
  const [selectedListId, setSelectedListId] = reactExports.useState(value ?? null);
  const [open, setOpen] = reactExports.useState(false);
  const customListsQuery = useGetCustomListsQuery();
  const handleListSelect = (listId) => {
    setSelectedListId(listId);
    onChange(listId);
  };
  return M(customListsQuery).with({ isPending: true }, () => /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: "Loading..." })).with({ isError: true }, () => /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: "Error" })).with({ isSuccess: true }, ({ data: customLists }) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Switch,
          {
            checked: value !== null,
            onBlur,
            onCheckedChange: (checked) => onChange(checked ? selectedListId ?? customLists[0]?.id ?? null : null),
            disabled: editor === "view",
            id: "remove-terms-from-list"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "remove-terms-from-list", className: "text-s", children: t2("scenarios:edit_sanction.remove_terms_from_list") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(FieldToolTip, { label: t2("scenarios:field_tooltip.aria_label"), children: t2("scenarios:edit_sanction.remove_terms_from_list.tooltip") })
      ] }),
      value ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(MenuCommand.Menu, { persistOnSelect: false, open, onOpenChange: setOpen, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Trigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.SelectButton, { className: "w-52", disabled: editor === "view", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-grey-primary text-s font-medium", children: customLists.find((list) => list.id === selectedListId)?.name || t2("scenarios:edit_sanction.select_list") }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Content, { sameWidth: true, className: "mt-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.List, { children: customLists.map((list) => /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Item, { onSelect: () => handleListSelect(list.id), children: list.name }, list.id)) }) })
      ] }) }) : null
    ] });
  }).exhaustive();
};
const editScreeningFormSchema = object({
  id: string().nonempty(),
  name: string().nonempty(),
  description: string().optional(),
  ruleGroup: string().optional(),
  datasets: protectArray(array(string())),
  threshold: number().optional(),
  forcedOutcome: _enum(["review", "decline", "block_and_review"]),
  triggerRule: any(),
  entityType: _enum(["Person", "Organization", "Vehicle", "Thing"]).optional(),
  query: record(string(), any()),
  counterPartyId: any().nullish(),
  preprocessing: object({
    useNer: boolean().optional(),
    nerIgnoreClassification: boolean().optional(),
    skipIfUnder: number().nullish(),
    removeNumbers: boolean().optional(),
    blacklistListId: string().nullish()
  }).optional()
});
const editScreeningConfigurationSchema = object({
  params: object({
    scenarioId: string(),
    iterationId: string(),
    screeningId: string()
  }),
  payload: editScreeningFormSchema
});
const editScreeningAction = createServerFn({
  method: "POST"
}).middleware([authMiddleware]).validator(editScreeningConfigurationSchema).handler(createSsrRpc("bf56d34b66baeffb8e8738a9a75b1b5f0ca8916895407c31fadab20a997e6a3c"));
function ScreeningRuleEditPanel({
  configs,
  rule,
  scenario,
  iterationId,
  ruleGroups,
  scenarioValidation,
  isNameRecognitionAvailable,
  onSuccess,
  onDelete
}) {
  const {
    t: t2
  } = useTranslation(["common", "scenarios", "decisions"]);
  const panelSharp = PanelSharpFactory.useSharp();
  const [showValidationSummary, setShowValidationSummary] = reactExports.useState(false);
  const {
    org
  } = useOrganizationDetails();
  const getScenarioErrorMessage = useGetScenarioErrorMessage();
  const screeningValidationIndex = reactExports.useMemo(() => configs.findIndex((c) => c.id === rule.id).toString(), [configs, rule]);
  const screeningValidation = reactExports.useMemo(() => findScreeningValidation(scenarioValidation, screeningValidationIndex), [scenarioValidation, screeningValidationIndex]);
  const screeningValidationLabels = reactExports.useMemo(() => ({
    trigger: t2("scenarios:edit_sanction.trigger_title"),
    counterparty: t2("scenarios:sanction_counterparty_id"),
    matchCriteria: t2("scenarios:sanction.match_settings.title"),
    queryField: (fieldKey) => getScreeningQueryFieldLabel(fieldKey, t2)
  }), [t2]);
  const mutation = useMutation({
    mutationFn: (value) => editScreeningAction({
      data: {
        params: {
          scenarioId: scenario.id,
          iterationId,
          screeningId: rule.id
        },
        payload: value
      }
    }),
    onSuccess: () => {
      zt.success(t2("common:success.save"));
      onSuccess();
    },
    onError: () => {
      zt.error(t2("common:errors.unknown"));
    }
  });
  const nameInputRef = reactExports.useRef(null);
  const initialQuery = reactExports.useMemo(() => normalizeScreeningQueryLists(rule?.query), [rule?.query]);
  const form = useForm({
    onSubmitMeta: {
      closeOnSuccess: false
    },
    onSubmit: async ({
      value,
      meta
    }) => {
      const submitValidationOptions = {
        ignoreLegacyAggregateQuery: true,
        formQuery: value.query ?? {},
        entityType: value.entityType
      };
      const formIssues = collectFormValidationIssues(value, editScreeningFormSchema, t2);
      const serverIssues = hasScreeningErrors(screeningValidation, submitValidationOptions) ? collectScreeningValidationIssues(screeningValidation, getScenarioErrorMessage, screeningValidationLabels, submitValidationOptions) : [];
      const blockingServerIssues = serverIssues.filter((issue) => !(issue.source.type === "section" && (issue.source.section === "trigger" || issue.source.section === "counterparty")));
      const allIssues = mergeScreeningValidationIssues(formIssues, blockingServerIssues);
      if (allIssues.length > 0) {
        setShowValidationSummary(true);
        return;
      }
      if (form.state.isValid) {
        await mutation.mutateAsync({
          ...value,
          threshold: value.threshold === org.sanctionThreshold ? void 0 : value.threshold
        });
        if (meta.closeOnSuccess) {
          panelSharp.actions.close();
        }
      }
    },
    onSubmitInvalid: () => {
      setShowValidationSummary(true);
    },
    validators: {
      // onMount is required so canSubmit is false for invalid default values
      // (TanStack keeps canSubmit true until the form is touched otherwise).
      onMount: editScreeningFormSchema,
      onChange: editScreeningFormSchema,
      onSubmit: editScreeningFormSchema
    },
    defaultValues: {
      id: rule?.id,
      name: rule?.name ?? "",
      description: rule?.description ?? "",
      ruleGroup: rule?.ruleGroup ?? "Screening",
      datasets: rule?.datasets ?? [],
      threshold: rule?.threshold ?? org.sanctionThreshold ?? 70,
      forcedOutcome: rule?.forcedOutcome ?? "block_and_review",
      triggerRule: rule?.triggerRule,
      entityType: rule?.entityType,
      query: initialQuery,
      counterPartyId: rule?.counterPartyId,
      preprocessing: rule?.preprocessing
    }
  });
  const formValues = useStore(form.store, (state) => state.values);
  const entityType = formValues.entityType;
  const query = formValues.query;
  const useNerEnabled = formValues.preprocessing?.useNer === true;
  const hasRequiredFields = hasRequiredScreeningCriteria(entityType, query);
  const screeningValidationOptions = reactExports.useMemo(() => ({
    ignoreLegacyAggregateQuery: true,
    formQuery: query ?? {},
    entityType
  }), [query, entityType]);
  const serverValidationIssues = reactExports.useMemo(() => {
    if (!showValidationSummary) {
      return [];
    }
    if (!hasScreeningErrors(screeningValidation, screeningValidationOptions)) {
      return [];
    }
    return collectScreeningValidationIssues(screeningValidation, getScenarioErrorMessage, screeningValidationLabels, screeningValidationOptions);
  }, [showValidationSummary, screeningValidation, getScenarioErrorMessage, screeningValidationLabels, screeningValidationOptions]);
  const formValidationIssues = reactExports.useMemo(() => {
    if (!showValidationSummary) {
      return [];
    }
    return collectFormValidationIssues(formValues, editScreeningFormSchema, t2);
  }, [showValidationSummary, formValues, t2]);
  const validationIssues = reactExports.useMemo(() => mergeScreeningValidationIssues(formValidationIssues, serverValidationIssues), [formValidationIssues, serverValidationIssues]);
  const highlight = reactExports.useMemo(() => ({
    name: screeningFieldHasError(validationIssues, "name"),
    trigger: screeningSectionHasError(validationIssues, "trigger"),
    counterparty: screeningSectionHasError(validationIssues, "counterparty"),
    matchSettings: screeningSectionHasError(validationIssues, "matchSettings"),
    queryField: (fieldKey) => screeningFieldHasError(validationIssues, `query.${fieldKey}`)
  }), [validationIssues]);
  const screeningCardClassName = (hasError, className) => cn("bg-surface-card border-grey-border flex flex-col gap-md rounded-md border p-md", hasError && "border-red-primary", className);
  const queryFieldHighlightClassName = (fieldKey) => cn(highlight.queryField(fieldKey) && "rounded-sm border border-red-primary p-xs");
  const handleRuleSubmit = async (closeOnSuccess) => {
    await form.handleSubmit({
      closeOnSuccess
    });
  };
  const handleRuleDelete = async () => {
    await onDelete();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("form", { onSubmit: handleSubmit(form), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Panel.Content, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Panel.Header, { className: "flex justify-between items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(form.Field, { name: "name", children: (field) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Panel.HeaderInput, { ref: nameInputRef, name: field.name, value: field.state.value, onChange: (e2) => field.handleChange(e2.target.value), onBlur: field.handleBlur, "aria-invalid": field.state.meta.errors.length > 0 || void 0 }),
          field.state.meta.isTouched ? /* @__PURE__ */ jsxRuntimeExports.jsx(FormErrorOrDescription, { errors: getFieldErrors(field.state.meta.errors) }) : null
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(form.Field, { name: "ruleGroup", children: (field) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FieldRuleGroup, { onChange: field.handleChange, onBlur: field.handleBlur, selectedRuleGroup: field.state.value, ruleGroups }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(FormErrorOrDescription, { errors: getFieldErrors(field.state.meta.errors) })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-sm", children: rule.id ? /* @__PURE__ */ jsxRuntimeExports.jsx(DeleteScreeningRule, { screeningId: rule.id, iterationId, scenarioId: scenario.id, onDeleteSuccess: handleRuleDelete, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "small", variant: "destructive", appearance: "stroked", mode: "icon", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "delete", className: "size-4" }) }) }) : null })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-md", children: [
      validationIssues.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(Callout, { color: "red", icon: "lightbulb", iconColor: "red", className: "max-w-3xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "flex flex-col gap-xs ps-md", children: validationIssues.map((issue) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: issue.message }, issueDedupeKey(issue))) }) }) : null,
      /* @__PURE__ */ jsxRuntimeExports.jsx(form.Field, { name: "description", children: (field) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "flex w-full flex-col gap-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { name: field.name, defaultValue: field.state.value, onChange: (e2) => field.handleChange(e2.currentTarget.value), onBlur: field.handleBlur, className: "form-textarea text-grey-primary text-s w-full resize-none border-none bg-transparent font-medium outline-hidden", placeholder: t2("scenarios:edit_rule.description_placeholder") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(FormErrorOrDescription, { errors: getFieldErrors(field.state.meta.errors) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-s font-semibold", children: t2("scenarios:edit_sanction.global_settings") }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: screeningCardClassName(highlight.trigger), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Callout, { variant: "outlined", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trans, { t: t2, i18nKey: "scenarios:sanction.trigger_object.callout", components: {
              DocLink: /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { href: "https://docs.checkmarble.com/docs/getting-started" })
            } }) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(form.Field, { name: "triggerRule", validators: {
              onChange: editScreeningFormSchema.shape.triggerRule,
              onBlur: editScreeningFormSchema.shape.triggerRule
            }, children: (field) => /* @__PURE__ */ jsxRuntimeExports.jsx(FieldAstFormula, { type: "screening", scenarioId: scenario.id, triggerObjectType: scenario.triggerObjectType, onBlur: field.handleBlur, onChange: field.handleChange, astNode: field.state.value, defaultValue: NewUndefinedAstNode() }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-surface-card border-grey-border flex flex-col gap-sm rounded-md border p-md", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(form.Field, { name: "threshold", validators: {
              onChange: editScreeningFormSchema.shape.threshold,
              onBlur: editScreeningFormSchema.shape.threshold
            }, children: (field) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-xs", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ScreeningThreshold, { threshold: field.state.value, onChange: (value) => form.setFieldValue(field.name, value), title: t2("scenarios:edit_sanction.consideration_matchings") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(FormErrorOrDescription, { errors: getFieldErrors(field.state.meta.errors) })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-s", children: t2("scenarios:sanction_forced_outcome_heading") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(form.Field, { name: "forcedOutcome", children: (field) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-xs", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(FieldOutcomes, { name: field.name, onChange: field.handleChange, onBlur: field.handleBlur, selectedOutcome: field.state.value, outcomes: r(knownOutcomes, ["approve"]) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(FormErrorOrDescription, { errors: getFieldErrors(field.state.meta.errors) })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-s", children: t2("scenarios:sanction_forced_outcome_suffix") })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-s inline-flex items-center gap-sm font-semibold", children: [
            t2("scenarios:sanction_counterparty_id"),
            /* @__PURE__ */ jsxRuntimeExports.jsx(FieldToolTip, { label: t2("scenarios:field_tooltip.aria_label"), children: t2("scenarios:sanction_counterparty_id.tooltip") })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(form.Field, { name: "counterPartyId", children: (field) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: screeningCardClassName(highlight.counterparty, "rounded-sm"), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(AstBuilder.Provider, { scenarioId: scenario.id, mode: "edit", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FieldNode, { value: field.state.value, onChange: field.handleChange, onBlur: field.handleBlur, placeholder: t2("scenarios:sanction_counterparty_id_placeholder") }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(FormErrorOrDescription, { errors: getFieldErrors(field.state.meta.errors) })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AstBuilder.Provider, { scenarioId: scenario.id, mode: "edit", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-s font-semibold", children: t2("scenarios:sanction.match_settings.title") }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: screeningCardClassName(highlight.matchSettings, "rounded-sm"), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Callout, { variant: "outlined", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "whitespace-pre-wrap", children: t2("scenarios:sanction.match_settings.callout") }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-xs", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-s inline-flex items-center gap-xs", children: [
                t2("scenarios:edit_sanction.entity_type.heading"),
                /* @__PURE__ */ jsxRuntimeExports.jsx(FieldToolTip, { label: t2("scenarios:field_tooltip.aria_label"), children: t2("scenarios:edit_sanction.entity_type.tooltip") })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(form.Field, { name: "entityType", children: (field) => /* @__PURE__ */ jsxRuntimeExports.jsx(FieldEntityType, { entityType: field.state.value, onChange: field.handleChange }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-surface-card border-grey-border flex flex-col gap-sm rounded-sm border p-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(form.Field, { name: "query.name", children: (field) => {
                  const value = field.state.value;
                  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("flex flex-col gap-xs", queryFieldHighlightClassName("name")), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-xs", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-s inline-flex items-center gap-xs", children: [
                      t2("scenarios:screening.filter.name"),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(FieldToolTip, { label: t2("scenarios:field_tooltip.aria_label"), children: t2("scenarios:screening.filter.name.tooltip") })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(FieldNodeConcatList, { value: value && isStringConcatListAstNode(value) ? value : void 0, onChange: field.handleChange, onBlur: field.handleBlur, placeholder: t2("scenarios:screening.filter.name_placeholder"), limit: 1, concatLimit: 5 }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(FormErrorOrDescription, { errors: getFieldErrors(field.state.meta.errors) })
                  ] }) });
                } }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(form.Field, { name: "preprocessing.blacklistListId", children: (field) => /* @__PURE__ */ jsxRuntimeExports.jsx(ScreeningTermIgnoreList, { value: field.state.value ?? null, onBlur: field.handleBlur, onChange: field.handleChange, editor: "edit" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(form.Field, { name: "preprocessing.removeNumbers", children: (field) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Switch, { checked: field.state.value, onCheckedChange: field.handleChange, onBlur: field.handleBlur, id: "exclude-numbers" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "exclude-numbers", className: "text-s", children: t2("scenarios:edit_sanction.exclude_numbers") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FieldToolTip, { label: t2("scenarios:field_tooltip.aria_label"), children: t2("scenarios:edit_sanction.exclude_numbers.tooltip") })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(form.Field, { name: "preprocessing.skipIfUnder", children: (field) => /* @__PURE__ */ jsxRuntimeExports.jsx(FieldSkipIfUnder, { value: field.state.value ?? null, onBlur: field.handleBlur, onChange: field.handleChange, editor: "edit", name: field.name }) }),
                entityType === "Thing" ? /* @__PURE__ */ jsxRuntimeExports.jsx(form.Field, { name: "preprocessing.useNer", children: (field) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Switch, { checked: field.state.value, onCheckedChange: (checked) => field.handleChange(checked), onBlur: field.handleBlur, disabled: !isNameRecognitionAvailable, id: "enable-entity-recognition" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "enable-entity-recognition", className: "text-s", children: t2("scenarios:edit_sanction.enable_entity_recognition") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FieldToolTip, { label: t2("scenarios:field_tooltip.aria_label"), children: t2("scenarios:edit_sanction.enable_entity_recognition.tooltip") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs rounded-full bg-purple-primary px-xs py-0.5 text-grey-white", children: t2("common:beta") })
                ] }) }) : null,
                useNerEnabled ? /* @__PURE__ */ jsxRuntimeExports.jsx(form.Field, { name: "preprocessing.nerIgnoreClassification", children: (field) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-sm ms-3xl mt-xs", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Switch, { checked: field.state.value, onCheckedChange: (checked) => field.handleChange(checked), onBlur: field.handleBlur }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-s", children: t2("scenarios:edit_sanction.skip_entity_recognition") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FieldToolTip, { label: t2("scenarios:field_tooltip.aria_label"), children: t2("scenarios:edit_sanction.skip_entity_recognition.tooltip") })
                ] }) }) : null
              ] }),
              M(entityType).with("Person", () => /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(form.Field, { name: "query.birthDate", children: (field) => {
                  const value = field.state.value;
                  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("flex flex-col gap-xs", queryFieldHighlightClassName("birthDate")), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-xs", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-s inline-flex items-center gap-xs", children: t2("scenarios:edit_sanction.birthdate") }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(FieldNodeList, { value: value && isKnownOperandListAstNode(value) ? value : void 0, onChange: field.handleChange, onBlur: field.handleBlur, placeholder: t2("scenarios:edit_sanction.birthdate_placeholder"), limit: 5, withDate: "fields" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(FormErrorOrDescription, { errors: getFieldErrors(field.state.meta.errors) })
                  ] }) });
                } }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(form.Field, { name: "query.nationality", children: (field) => {
                  const value = field.state.value;
                  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("flex flex-col gap-xs", queryFieldHighlightClassName("nationality")), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-xs", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-s inline-flex items-center gap-xs", children: t2("scenarios:edit_sanction.nationality") }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(FieldNodeList, { value: value && isKnownOperandListAstNode(value) ? value : void 0, onChange: field.handleChange, onBlur: field.handleBlur, placeholder: t2("scenarios:edit_sanction.nationality_placeholder"), limit: 5 }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(FormErrorOrDescription, { errors: getFieldErrors(field.state.meta.errors) })
                  ] }) });
                } }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(form.Field, { name: "query.passportNumber", children: (field) => {
                  const value = field.state.value;
                  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("flex flex-col gap-xs", queryFieldHighlightClassName("passportNumber")), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-xs", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-s inline-flex items-center gap-xs", children: t2("scenarios:edit_sanction.passport_number") }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(FieldNodeList, { value: value && isKnownOperandListAstNode(value) ? value : void 0, onChange: field.handleChange, onBlur: field.handleBlur, placeholder: t2("scenarios:edit_sanction.passport_number_placeholder"), limit: 5 }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(FormErrorOrDescription, { errors: getFieldErrors(field.state.meta.errors) })
                  ] }) });
                } }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(form.Field, { name: "query.address", children: (field) => {
                  const value = field.state.value;
                  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("flex flex-col gap-xs", queryFieldHighlightClassName("address")), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-xs", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-s inline-flex items-center gap-xs", children: t2("scenarios:edit_sanction.address") }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(FieldNodeConcatList, { value: value && isStringConcatListAstNode(value) ? value : void 0, onChange: field.handleChange, onBlur: field.handleBlur, placeholder: t2("scenarios:edit_sanction.address_placeholder"), limit: 5, concatLimit: 5 }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(FormErrorOrDescription, { errors: getFieldErrors(field.state.meta.errors) })
                  ] }) });
                } })
              ] })).with("Organization", () => /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(form.Field, { name: "query.country", children: (field) => {
                  const value = field.state.value;
                  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("flex flex-col gap-xs", queryFieldHighlightClassName("country")), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-xs", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-s inline-flex items-center gap-xs", children: t2("scenarios:edit_sanction.country") }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(FieldNodeList, { value: value && isKnownOperandListAstNode(value) ? value : void 0, onChange: field.handleChange, onBlur: field.handleBlur, placeholder: t2("scenarios:edit_sanction.country_placeholder"), limit: 5 }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(FormErrorOrDescription, { errors: getFieldErrors(field.state.meta.errors) })
                  ] }) });
                } }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(form.Field, { name: "query.registrationNumber", children: (field) => {
                  const value = field.state.value;
                  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("flex flex-col gap-xs", queryFieldHighlightClassName("registrationNumber")), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-xs", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-s inline-flex items-center gap-xs", children: t2("scenarios:edit_sanction.registrationnumber") }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(FieldNodeList, { value: value && isKnownOperandListAstNode(value) ? value : void 0, onChange: field.handleChange, onBlur: field.handleBlur, placeholder: t2("scenarios:edit_sanction.registrationnumber_placeholder"), limit: 5 }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(FormErrorOrDescription, { errors: getFieldErrors(field.state.meta.errors) })
                  ] }) });
                } }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(form.Field, { name: "query.address", children: (field) => {
                  const value = field.state.value;
                  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("flex flex-col gap-xs", queryFieldHighlightClassName("address")), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-xs", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-s inline-flex items-center gap-xs", children: t2("scenarios:edit_sanction.address") }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(FieldNodeConcatList, { value: value && isStringConcatListAstNode(value) ? value : void 0, onChange: field.handleChange, onBlur: field.handleBlur, placeholder: t2("scenarios:edit_sanction.address_placeholder"), limit: 5, concatLimit: 5 }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(FormErrorOrDescription, { errors: getFieldErrors(field.state.meta.errors) })
                  ] }) });
                } })
              ] })).with("Vehicle", () => /* @__PURE__ */ jsxRuntimeExports.jsx(form.Field, { name: "query.registrationNumber", children: (field) => {
                const value = field.state.value;
                return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("flex flex-col gap-xs", queryFieldHighlightClassName("registrationNumber")), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-xs", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-s inline-flex items-center gap-xs", children: t2("scenarios:edit_sanction.registrationnumber") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FieldNodeList, { value: value && isKnownOperandListAstNode(value) ? value : void 0, onChange: field.handleChange, onBlur: field.handleBlur, placeholder: t2("scenarios:edit_sanction.registrationnumber_placeholder"), limit: 5 }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FormErrorOrDescription, { errors: getFieldErrors(field.state.meta.errors) })
                ] }) });
              } })).otherwise(() => null)
            ] }),
            !hasRequiredFields && /* @__PURE__ */ jsxRuntimeExports.jsx(Callout, { icon: "warning", color: "yellow", children: t2("scenarios:edit_sanction.required_fields_disclaimer") }),
            !hasRequiredFields && /* @__PURE__ */ jsxRuntimeExports.jsx(EvaluationErrors, { errors: [t2("scenarios:edit_sanction.required_fields_error")] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(form.Field, { name: "datasets", children: (field) => /* @__PURE__ */ jsxRuntimeExports.jsx(FieldDataset, { value: field.state.value, onChange: field.handleChange }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Panel.Footer, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(form.Subscribe, { selector: (state) => [state.canSubmit, state.isSubmitting], children: ([canSubmit, isSubmitting]) => /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Panel.FooterButton, { type: "button", disabled: !canSubmit, onClick: () => handleRuleSubmit(false), variant: "primary-outline", label: t2("common:save") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Panel.FooterButton, { type: "button", disabled: !canSubmit || isSubmitting, onClick: () => handleRuleSubmit(true), trailingIcon: "save", variant: "primary", label: t2("common:save_and_close") })
    ] }) }) })
  ] }) });
}
const getRowLink = (currentTarget) => {
  if (!(currentTarget instanceof HTMLElement)) return null;
  const rowLink = currentTarget.querySelector("[data-row-button]");
  return rowLink instanceof HTMLButtonElement ? rowLink : null;
};
const handleRowClick = (e2) => {
  const rowLink = getRowLink(e2.currentTarget);
  if (rowLink && rowLink !== e2.target) {
    rowLink.dispatchEvent(new MouseEvent(e2.type, e2.nativeEvent));
  }
};
const handleRowKeyDown = (e2) => {
  if (e2.key !== "Enter" && e2.key !== " ") return;
  e2.preventDefault();
  getRowLink(e2.currentTarget)?.click();
};
function RulesPage({
  scenario,
  iterationId,
  screeningConfigs,
  scenarioValidation,
  editorMode,
  list,
  ruleGroups,
  isSanctionAvailable,
  isAiRuleDescriptionEnabled,
  isNameRecognitionAvailable,
  onRuleEditSuccess
}) {
  const { t: t2 } = useTranslation(["common", "scenarios"]);
  const language = useFormatLanguage();
  const [searchValue, setSearchValue] = reactExports.useState("");
  const [currentEditing, setCurrentEditing] = reactExports.useState(null);
  const { org } = useOrganizationDetails();
  const currentScreeningRule = currentEditing?.type === "sanction" ? screeningConfigs.find((sc) => sc.id === currentEditing.id) : null;
  const onPanelOpenChange = (state) => {
    if (!state) {
      setCurrentEditing(null);
    }
  };
  const handleRuleEditSuccess = async (ruleId) => {
    await onRuleEditSuccess();
    if (ruleId) {
      setCurrentEditing({ id: ruleId, type: "rule" });
    }
  };
  const handleScreeningRuleEditSuccess = async (ruleId) => {
    await onRuleEditSuccess();
    if (ruleId) {
      setCurrentEditing({ id: ruleId, type: "sanction" });
    }
  };
  const handleRuleDelete = async () => {
    setCurrentEditing(null);
    await onRuleEditSuccess();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-md", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between gap-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SearchInput, { size: "medium", value: searchValue, onChange: setSearchValue, className: "w-100" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FiltersButton, {}),
        editorMode === "edit" ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          AddRuleOrScreening,
          {
            scenarioId: scenario.id,
            iterationId,
            isSanctionAvailable,
            onSuccess: async (value) => {
              await onRuleEditSuccess();
              setCurrentEditing(value);
            }
          }
        ) : null
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-[0px_auto_2fr_12.5rem_12.5rem] border border-grey-border rounded-md bg-surface-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-subgrid col-span-full items-center group/table-row not-last:border-b border-grey-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(HeaderCell, { className: "col-span-2", children: t2("scenarios:rules.title") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(HeaderCell, { children: t2("scenarios:rules.description") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(HeaderCell, { children: t2("scenarios:rules.rule_group") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(HeaderCell, { children: t2("scenarios:rules.score_or_outcome") })
      ] }),
      list.map((rule) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        ScenarioRuleRow,
        {
          rule,
          scenario,
          editorMode,
          language,
          org,
          onEditRequest: setCurrentEditing
        },
        `${rule.type}_${rule.id}`
      ))
    ] }) }),
    editorMode === "edit" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Panel.Root, { open: currentEditing?.type === "rule", onOpenChange: onPanelOpenChange, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Panel.Container, { size: isAiRuleDescriptionEnabled ? "large" : "medium", children: currentEditing?.type === "rule" ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        RuleEditPanel,
        {
          scenario,
          ruleId: currentEditing.id,
          ruleGroups,
          scenarioValidation,
          isAiRuleDescriptionEnabled,
          onSuccess: handleRuleEditSuccess,
          onDelete: handleRuleDelete
        }
      ) : null }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Panel.Root, { open: currentEditing?.type === "sanction", onOpenChange: onPanelOpenChange, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Panel.Container, { size: "medium", children: currentScreeningRule ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        ScreeningRuleEditPanel,
        {
          rule: currentScreeningRule,
          scenario,
          iterationId,
          configs: screeningConfigs,
          ruleGroups,
          scenarioValidation,
          isNameRecognitionAvailable,
          onSuccess: handleScreeningRuleEditSuccess,
          onDelete: handleRuleDelete
        }
      ) : null }) })
    ] }) : null
  ] });
}
function ScenarioRuleRow({ rule, scenario, editorMode, language, org, onEditRequest }) {
  const { t: t2 } = useTranslation(["common", "scenarios"]);
  const isExpandable = editorMode === "view";
  const [open, setOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Root,
    {
      open: isExpandable && open,
      onOpenChange: isExpandable ? setOpen : void 0,
      className: "overflow-hidden grid grid-cols-subgrid col-span-full group/table-row hover:bg-purple-background-light cursor-pointer ",
      onClick: handleRowClick,
      onKeyDown: handleRowKeyDown,
      "data-row": true,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Trigger$1, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            role: "link",
            tabIndex: 0,
            className: "grid grid-cols-subgrid col-span-full items-start focus-visible:outline-2 -outline-offset-2 outline-purple-primary",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "invisible", children: editorMode === "edit" ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  "data-row-button": true,
                  "aria-label": t2("scenarios:rules.edit_rule_aria_label"),
                  onClick: () => {
                    if (rule.id) {
                      onEditRequest({ id: rule.id, type: rule.type });
                    }
                  }
                }
              ) : null }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(GridCell, { className: cn({ "grid grid-cols-[1rem_1fr] items-center gap-x-sm": editorMode === "view" }), children: [
                editorMode === "view" ? /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "caret-down", className: cn("size-4 transition-transform", { "rotate-180": open }) }) }) : null,
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: rule.name })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(GridCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(RuleDescription, { rule, clamp: !open }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(GridCell, { children: rule.ruleGroup ? /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { children: rule.ruleGroup }) : null }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(GridCell, { children: rule.type === "rule" ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: rule.scoreModifier < 0 ? "text-green-primary" : "text-red-primary", children: formatNumber(rule.scoreModifier, {
                language,
                signDisplay: "exceptZero"
              }) }) : rule.forcedOutcome ? /* @__PURE__ */ jsxRuntimeExports.jsx(OutcomeBadge, { outcome: rule.forcedOutcome, size: "md" }) : null })
            ]
          }
        ) }),
        rule.type === "rule" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Content, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-full p-md grid grid-cols-[1rem_1fr] items-center gap-x-sm radix-state-open:animate-slide-down radix-state-closed:animate-slide-up", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border border-grey-border rounded-md px-md py-sm bg-surface-card max-w-3/4 col-start-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(RuleView, { scenarioId: scenario.id, ruleId: rule.id }) }) }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Content, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-full p-md grid grid-cols-[1rem_1fr] items-center gap-x-sm radix-state-open:animate-slide-down radix-state-closed:animate-slide-up", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-grey-border rounded-md px-md py-sm bg-surface-card max-w-3/4 col-start-2 flex flex-col gap-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Trans,
            {
              t: t2,
              i18nKey: "scenarios:rules.screening_view.trigger_intro",
              values: { triggerObject: scenario.triggerObjectType },
              components: { Tag: /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { color: "grey" }) }
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc flex flex-col gap-sm pl-5", children: [
            rule.triggerRule && !isUndefinedAstNode(rule.triggerRule) ? /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "list-item", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-col gap-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t2("scenarios:rules.screening_view.trigger_condition") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(AstBuilder.Provider, { scenarioId: scenario.id, mode: "view", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AstBuilder.Root, { node: rule.triggerRule }) })
            ] }) }) : null,
            rule.counterPartyId && isDataAccessorAstNode(rule.counterPartyId) ? /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "list-item", children: [
              t2("scenarios:rules.screening_view.counterparty_id"),
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { color: "grey", children: getDataAccessorDisplayName(rule.counterPartyId) })
            ] }) : null,
            rule.entityType && rule.query ? /* @__PURE__ */ jsxRuntimeExports.jsx(
              ScreeningRuleQueryView,
              {
                entityType: rule.entityType,
                query: rule.query,
                preprocessing: rule.preprocessing
              }
            ) : null,
            rule.datasets && rule.datasets.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(ScreeningDatasetsView, { datasets: rule.datasets }) : null
          ] }),
          rule.forcedOutcome ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Trans,
            {
              t: t2,
              i18nKey: "scenarios:rules.screening_view.match_outcome",
              values: { threshold: rule.threshold ?? org.sanctionThreshold },
              components: {
                Tag: /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { color: "grey" }),
                Outcome: /* @__PURE__ */ jsxRuntimeExports.jsx(OutcomeBadge, { outcome: rule.forcedOutcome, className: "align-middle" })
              }
            }
          ) }) : null
        ] }) }) })
      ]
    }
  );
}
function GridCell({ children, className }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("p-md", className), children });
}
function HeaderCell({ children, className }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(GridCell, { className: cn("font-normal text-left not-first:border-l border-grey-border", className), children });
}
const RuleDescription = ({ rule, clamp }) => {
  if (rule.description) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: cn({ "line-clamp-2": clamp }), children: rule.description });
  }
  if (rule.type === "rule" && rule.aiDescription) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: cn({ "line-clamp-2": clamp }), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "wand", className: "inline size-4 align-text-bottom mr-xs text-purple-primary" }),
      rule.aiDescription
    ] });
  }
  return null;
};
const RuleView = ({ scenarioId, ruleId }) => {
  const { t: t2 } = useTranslation(["common"]);
  const ruleQuery = useScenarioIterationRule(ruleId);
  return M(ruleQuery).with({ isError: true }, ({ error }) => /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: error.message })).with({ isPending: true }, () => /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: t2("common:loading") })).with({ isSuccess: true }, ({ data }) => {
    if (!data.rule.formula) {
      return null;
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx(AstBuilder.Provider, { scenarioId, mode: "view", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AstBuilder.Root, { node: data.rule.formula }) });
  }).exhaustive();
};
const AddRuleOrScreening = ({
  scenarioId,
  iterationId,
  isSanctionAvailable,
  onSuccess
}) => {
  const { t: t2 } = useTranslation(["common", "scenarios", "decisions", "filters"]);
  const [open, setOpen] = reactExports.useState(false);
  const handleSuccess = (value) => {
    setOpen(false);
    onSuccess(value);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Root2, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Trigger, { className: CtaV2ClassName({ variant: "primary", color: "primary", size: "medium" }), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "plus", className: "size-6" }),
      t2("common:add")
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Content2,
      {
        align: "end",
        className: "bg-surface-card border-grey-border z-10 mt-sm flex flex-col gap-sm rounded-sm border p-sm",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            CreateRule,
            {
              scenarioId,
              iterationId,
              onSuccess: (ruleId) => handleSuccess({ id: ruleId, type: "rule" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            CreateScreeningButton,
            {
              scenarioId,
              iterationId,
              isSanctionAvailable,
              onSuccess: (screeningId) => handleSuccess({ id: screeningId, type: "sanction" })
            }
          )
        ]
      }
    )
  ] });
};
const filterNodes = (value) => {
  return !!value[1] && (isStringConcatAstNode(value[1]) || isListAstNode(value[1]));
};
const ScreeningRuleQueryView = ({ entityType, query, preprocessing }) => {
  const { t: t2 } = useTranslation(["common", "scenarios"]);
  const queries = t$e(
    t$c(query),
    n$7(filterNodes),
    // Show the "name" filter first when present
    t$5(([k]) => k === "name" ? 0 : 1)
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "list-item", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Trans,
      {
        t: t2,
        i18nKey: "scenarios:rules.screening_view.we_look_for",
        values: { entityType },
        components: { Tag: /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { color: "grey" }) }
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "list-disc flex flex-col gap-sm pl-5", children: queries.map(([k, q]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "list-item", children: [
      k === "name" ? /* @__PURE__ */ jsxRuntimeExports.jsx(NameQueryFieldTag, { label: k, preprocessing }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { color: "grey", children: k }),
      t2("scenarios:rules.screening_view.matching"),
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(ScreeningQueryNodeTags, { node: q })
    ] }, q.id)) })
  ] }) });
};
const ScreeningQueryNodeTags = ({ node }) => {
  if (isStringConcatAstNode(node)) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(StringConcatNodeTags, { node });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex flex-wrap items-center gap-xs", children: node.children.map((child, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-xs", children: [
    index > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "," }) : null,
    isStringConcatAstNode(child) ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "border-grey-border inline-flex items-center gap-xs rounded-sm border px-xs py-2xs", children: /* @__PURE__ */ jsxRuntimeExports.jsx(StringConcatNodeTags, { node: child }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ScreeningOperandAstNodeTag, { node: child })
  ] }, child.id)) });
};
const StringConcatNodeTags = ({ node }) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex flex-wrap items-center gap-xs", children: node.children.map((child, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-xs", children: [
  index > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "+" }) : null,
  /* @__PURE__ */ jsxRuntimeExports.jsx(ScreeningOperandAstNodeTag, { node: child })
] }, child.id)) });
const ScreeningOperandAstNodeTag = ({ node }) => {
  const { t: t2 } = useTranslation(["common", "scenarios"]);
  const language = useFormatLanguage();
  const customListsQuery = useGetCustomListsQuery();
  if (!isKnownOperandAstNode(node)) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { color: "grey", children: getAstNodeDisplayName(node, { t: t2, language, customLists: customListsQuery.data ?? [] }) });
};
const hasMatchSettings = (preprocessing) => !!preprocessing && (!!preprocessing.removeNumbers || preprocessing.skipIfUnder != null || !!preprocessing.useNer || !!preprocessing.nerIgnoreClassification || !!preprocessing.blacklistListId);
const NameQueryFieldTag = ({
  label,
  preprocessing
}) => {
  if (!hasMatchSettings(preprocessing)) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { color: "grey", children: label });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip.Default, { content: /* @__PURE__ */ jsxRuntimeExports.jsx(MatchSettingsTooltip, { preprocessing }), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Tag, { color: "grey", className: "gap-xs", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "tip", className: "size-4" })
  ] }) });
};
const MatchSettingsTooltip = ({ preprocessing }) => {
  const { t: t2 } = useTranslation(["scenarios"]);
  const customListsQuery = useGetCustomListsQuery();
  const listName = preprocessing.blacklistListId ? customListsQuery.data?.find((list) => list.id === preprocessing.blacklistListId)?.name ?? preprocessing.blacklistListId : null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-s flex flex-col gap-xs text-left", children: [
    preprocessing.removeNumbers ? /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: t2("scenarios:edit_sanction.exclude_numbers") }) : null,
    preprocessing.skipIfUnder != null ? /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Trans,
      {
        t: t2,
        i18nKey: "scenarios:edit_sanction.ignore_check_if_under",
        components: { NbNumbers: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: preprocessing.skipIfUnder }) }
      }
    ) }) : null,
    preprocessing.useNer ? /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: t2("scenarios:edit_sanction.enable_entity_recognition") }) : null,
    preprocessing.nerIgnoreClassification ? /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: t2("scenarios:edit_sanction.skip_entity_recognition") }) : null,
    listName ? /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-xs", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t2("scenarios:edit_sanction.remove_terms_from_list") }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Tag, { color: "grey", className: "gap-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "list", className: "size-4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: listName })
      ] })
    ] }) }) : null
  ] });
};
const ScreeningDatasetsView = ({ datasets }) => {
  const { t: t2 } = useTranslation(["scenarios"]);
  const filtersQuery = useListConfigQuery("transaction_monitoring");
  const { formatItemName, formatDatasetTitle } = useDatasetTitle();
  const { getLaTagLabel } = useDatasetTag();
  const resolveName = (key) => {
    if (!key.includes(":")) return getLaTagLabel(key);
    const parts = key.split(":");
    if (parts[1] === "dataset") {
      const resolved = findDatasetByName(filtersQuery.data?.filters, parts.slice(2).join(":"));
      if (resolved) return formatItemName(resolved);
    }
    return formatDatasetTitle(key);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "list-item", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    ExpandableGroupTagLine,
    {
      classname: "gap-xs",
      overflowBehavior: "popover",
      items: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "shrink-0", children: t2("scenarios:rules.screening_view.relevant_lists") }),
        ...datasets.map((key) => /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { color: "grey", className: "self-start", children: resolveName(key) }, key))
      ],
      moreButton: (overflow, onExpand) => /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { color: "grey", className: "cursor-pointer shrink-0", onClick: onExpand, children: t2("scenarios:rules.screening_view.datasets_overflow", { count: overflow }) })
    }
  ) });
};
function PageComponent() {
  const router = useRouter();
  const iterationId = useParam("iterationId");
  const {
    editorMode,
    rulesList,
    screeningsConfigs,
    scenarioValidation
  } = useDetectionScenarioIterationData();
  const {
    currentScenario
  } = useDetectionScenarioData();
  const {
    isAiRuleDescriptionEnabled,
    isSanctionAvailable,
    isNameRecognitionAvailable
  } = Route$1.useLoaderData();
  const ruleGroups = useDerivedIterationRuleGroupsData();
  const handleRuleEditSuccess = async () => {
    await router.invalidate();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(RulesPage, { scenario: currentScenario, iterationId, screeningConfigs: screeningsConfigs, scenarioValidation, editorMode, list: rulesList, ruleGroups, isSanctionAvailable, isAiRuleDescriptionEnabled, isNameRecognitionAvailable, onRuleEditSuccess: handleRuleEditSuccess });
}
export {
  PageComponent as component
};

import { M as reactExports, Q as jsxRuntimeExports } from "./server.mjs";
import { u as t$e, v as n$7, z as isAdmin } from "./services-middleware-nMulUXHZ.mjs";
import { u as useTranslation, I as Icon, B as Button, M as MenuCommand } from "./Tabs-CzpyUi7T.mjs";
import { F as FormErrorOrDescription } from "./FormErrorOrDescription-BncG6ljR.mjs";
import { u as useLoaderRevalidator } from "./LoaderRevalidatorContext-BEuG7sHs.mjs";
import { a as useCreateNavigationOptionMutation } from "./create-navigation-option-CCfvMbYU.mjs";
import { g as getFieldErrors, h as handleSubmit } from "./form-D2XmDKeG.mjs";
import { u as useCallbackRef } from "./use-callback-ref-DoQNLci-.mjs";
import { u as useForm } from "./useForm-qNQ8S9xN.mjs";
import { z as zt } from "./create-context-k6HmQ6bB.mjs";
import { M as Modal } from "./Modal-CpYmGWjB.mjs";
import { a as createNavigationOptionSchema } from "./data-BXamdbTM.mjs";
import { d as DataModelExplorerContext } from "./DataExplorerPanel-CJ4TB_XJ.mjs";
import { n } from "./uniqueBy-D4I5G6eo.mjs";
import { t } from "./flatMap-CdA7bREZ.mjs";
import { u as useScoreLatestQuery, S as ScoreDetailPanel } from "./get-score-latest-3W-Su_jV.mjs";
import { u as useGetScoringSettingsQuery } from "./get-scoring-settings-CNgnpjXy.mjs";
import { B as isAccessible } from "./feature-access-BSdB6UiC.mjs";
import { S as SCORING_LEVELS_COLORS, a as SCORING_LEVELS_LABEL_KEYS } from "./display-TKj7AN5a.mjs";
function CreateNavigationOptionModal({ dataModel, link, children }) {
  const { t: t2 } = useTranslation(["common", "data"]);
  const targetTable = dataModel.find((table) => {
    return table.name === link.childTableName;
  });
  const [open, setOpen] = reactExports.useState(false);
  const createNavigationOptionMutation = useCreateNavigationOptionMutation(link.parentTableId);
  const revalidate = useLoaderRevalidator();
  const handleOpenChange = useCallbackRef((open2) => {
    if (!open2) {
      form.resetField("orderingFieldId");
      setOpen(false);
    }
  });
  const form = useForm({
    defaultValues: {
      sourceFieldId: link.parentFieldId,
      targetTableId: link.childTableId,
      filterFieldId: link.childFieldId,
      orderingFieldId: ""
    },
    validators: {
      onChange: createNavigationOptionSchema
    },
    onSubmit({ value, formApi }) {
      if (formApi.state.isValid) {
        createNavigationOptionMutation.mutateAsync(value).then((res) => {
          if ("error" in res && res.error === "duplicate_pivot_value") {
            zt.error(t2("data:create_navigation_option.errors.duplicate_pivot_value"));
            return;
          }
          zt.success(t2("common:success.save"));
          revalidate();
        }).catch(() => {
          zt.error(t2("common:errors.unknown"));
        });
      }
    }
  });
  if (!targetTable) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal.Root, { onOpenChange: handleOpenChange, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.Trigger, { asChild: true, children }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal.Content, { size: "medium", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.Title, { children: t2("data:create_navigation_option.title") }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "form",
        {
          id: `create_navigation_option_form_${link.parentTableId}_${link.childTableId}`,
          className: "grid grid-cols-[auto_1fr] items-center gap-sm p-xl",
          onSubmit: handleSubmit(form),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t2("data:create_navigation_option.labels.from") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.SelectButton, { disabled: true, noArrow: true, children: link.parentTableName }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t2("data:create_navigation_option.labels.to") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.SelectButton, { disabled: true, noArrow: true, children: link.childTableName }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-10 place-self-start leading-10", children: t2("data:create_navigation_option.labels.ordered_by") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              form.Field,
              {
                name: "orderingFieldId",
                validators: {
                  onChange: createNavigationOptionSchema.shape.orderingFieldId,
                  onBlur: createNavigationOptionSchema.shape.orderingFieldId
                },
                children: (formField) => {
                  const selectedField = targetTable.fields.find((tableField) => tableField.id === formField.state.value);
                  const fieldErrors = formField.state.meta.errors;
                  const targetFields = targetTable.fields.filter((tableField) => tableField.id !== link.childFieldId);
                  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(MenuCommand.Menu, { open, onOpenChange: setOpen, children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Trigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        MenuCommand.SelectButton,
                        {
                          className: "inline-flex min-w-[264px]",
                          hasError: fieldErrors.length > 0,
                          children: selectedField ? selectedField.name : t2("data:create_navigation_option.placeholders.ordered_by")
                        }
                      ) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Content, { align: "start", sameWidth: true, sideOffset: 4, children: /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.List, { children: targetFields.map((field) => /* @__PURE__ */ jsxRuntimeExports.jsxs(MenuCommand.Item, { value: field.id, onSelect: formField.handleChange, children: [
                        field.name,
                        selectedField?.name === field.name ? /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "tick", className: "text-purple-primary size-6" }) : null
                      ] }, field.id)) }) })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(FormErrorOrDescription, { errors: getFieldErrors(fieldErrors) })
                  ] });
                }
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-full mt-md", children: t2("data:create_navigation_option.explanation_text") })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal.Footer, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.FooterButton, { isCloseButton: true, label: t2("common:cancel") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Modal.FooterButton,
          {
            label: t2("common:save"),
            type: "submit",
            form: `create_navigation_option_form_${link.parentTableId}_${link.childTableId}`
          }
        )
      ] })
    ] })
  ] });
}
function NavigationOptions({ currentUser, pivotObject, table, dataModel, onExplore }) {
  const linksToTable = reactExports.useMemo(() => {
    return t$e(
      dataModel,
      n$7((dataModelTable) => dataModelTable.name !== table.name),
      t((dataModelTable) => dataModelTable.linksToSingle),
      n$7((dataModelTable) => dataModelTable.parentTableName === table.name),
      // Several links can point at the same child table; the nav options are filtered by
      // child table name below, so keep one entry per child table to avoid rendering the
      // same options twice.
      n((link) => link.childTableName)
    );
  }, [table, dataModel]);
  const dataModelExplorerContext = DataModelExplorerContext.useValue();
  if (linksToTable.length === 0) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-sm flex-wrap", children: linksToTable.map((linkToTable, idx) => {
    const navOptions = table.navigationOptions?.filter((no) => no.targetTableName === linkToTable.childTableName) ?? [];
    return navOptions.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Fragment, { children: navOptions.map((navOption, idx2) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Button,
      {
        variant: "primary",
        appearance: "link",
        className: "shrink-0",
        disabled: navOption.status === "pending",
        onClick: () => {
          dataModelExplorerContext.startNavigation({
            pivotObject,
            sourceObject: pivotObject.pivotObjectData.data,
            navigationOptionId: navOption.id,
            sourceTableName: table.name,
            sourceFieldName: navOption.sourceFieldName,
            targetTableName: navOption.targetTableName,
            filterFieldName: navOption.filterFieldName,
            orderingFieldName: navOption.orderingFieldName
          });
          onExplore();
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            navOption.targetTableName,
            navOptions.length > 1 ? ` (${navOption.orderingFieldName})` : null
          ] }),
          navOption.status === "pending" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "spinner", className: "size-4 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "eye", className: "size-4" })
        ]
      },
      `${navOption.id}-${idx2}`
    )) }, `${linkToTable.childTableName}-${idx}`) : isAdmin(currentUser) ? /* @__PURE__ */ jsxRuntimeExports.jsx(CreateNavigationOptionModal, { dataModel, link: linkToTable, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "primary", appearance: "link", className: "shrink-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: linkToTable.childTableName }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "plus", className: "size-4" })
    ] }) }, linkToTable.childTableName) : null;
  }) });
}
function UserScoreBadge({ objectType, objectId, userScoringAccess }) {
  const { t: t2 } = useTranslation(["cases", "user-scoring"]);
  const [panelOpen, setPanelOpen] = reactExports.useState(false);
  const settingsQuery = useGetScoringSettingsQuery();
  const scoreQuery = useScoreLatestQuery(objectType, objectId);
  if (!isAccessible(userScoringAccess)) return null;
  const settings = settingsQuery.data?.settings;
  const score = scoreQuery.data?.score;
  if (!settings || !score) return null;
  const maxRiskLevel = settings.maxRiskLevel;
  const scoreColor = SCORING_LEVELS_COLORS[maxRiskLevel][score.risk_level] ?? "inherit";
  const scoreLabel = t2(SCORING_LEVELS_LABEL_KEYS[maxRiskLevel][score.risk_level] ?? score.risk_level.toString());
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        onClick: () => setPanelOpen(true),
        className: "inline-flex items-center gap-xs rounded-md border px-sm py-xs text-small cursor-pointer",
        style: { backgroundColor: `${scoreColor}20`, borderColor: scoreColor },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "size-3 rounded-full shrink-0", style: { backgroundColor: scoreColor } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t2("cases:manager.client.risk_label") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: scoreLabel }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "visibility", className: "size-4" })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ScoreDetailPanel,
      {
        open: panelOpen,
        onOpenChange: setPanelOpen,
        objectType,
        activeScore: score,
        scoringSettings: settings
      }
    )
  ] });
}
export {
  NavigationOptions as N,
  UserScoreBadge as U
};

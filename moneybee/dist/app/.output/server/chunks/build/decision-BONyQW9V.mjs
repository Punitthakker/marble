import { Q as jsxRuntimeExports, M as reactExports, $ as createServerFn } from "./server.mjs";
import { c as createSsrRpc } from "./query-BmG5BEas.mjs";
import { a as Callout } from "./Callout-B0OuRL3q.mjs";
import { u as useTranslation, T as Trans, B as Button } from "./Tabs-CzpyUi7T.mjs";
import { C as Collapsible } from "./Collapsible-CKx8cmdD.mjs";
import { u as t$e, o as t$9, v as n$7 } from "./services-middleware-nMulUXHZ.mjs";
import { aj as scenarioI18n, b0 as useDetectionScenarioIterationData, b7 as Route$2 } from "./router-KSC-NEr8.mjs";
import { S as ScoreOutcomeThresholds } from "./ScoreOutcomeThresholds-B9n3OH43.mjs";
import { E as ExternalLink } from "./ExternalLink-BlVgwkVd.mjs";
import { F as FormErrorOrDescription } from "./FormErrorOrDescription-BncG6ljR.mjs";
import { F as FormInput } from "./FormInput-CsT_ETvr.mjs";
import { F as FormLabel } from "./FormLabel-DseYo_2t.mjs";
import { E as EvaluationErrors } from "./ScenarioValidationError-JSEokjBd.mjs";
import { u as useLoaderRevalidator } from "./LoaderRevalidatorContext-BEuG7sHs.mjs";
import { a as authMiddleware } from "./auth-middleware-eNRVfU3l.mjs";
import { g as scenarioDecisionDocHref } from "./documentation-href-DY9fs71n.mjs";
import { u as useEditorMode } from "./editor-mode-D7ckZpf3.mjs";
import { u as useGetScenarioErrorMessage } from "./scenario-validation-error-messages-DGyZ9TEq.mjs";
import { g as getFieldErrors } from "./form-D2XmDKeG.mjs";
import { u as useStore } from "./useStore-C3gZU5bu.mjs";
import { u as useForm } from "./useForm-qNQ8S9xN.mjs";
import { u as useMutation } from "./useMutation-BOdeDeAR.mjs";
import { z as zt } from "./create-context-k6HmQ6bB.mjs";
import { d as decisionsI18n } from "./decisions-i18n-Cg4JM_3r.mjs";
import { n as number, o as object, z as record, s as string } from "./short-uuid-fTZYJj_k.mjs";
import { O as OutcomeBadge } from "./OutcomeTag-DYQZ2msd.mjs";
import { n as number$1 } from "./coerce-UidCu_Sb.mjs";
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
import "node:crypto";
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
import "./files-fO9wUXBf.mjs";
import "./decisions--eKWwSYj.mjs";
import "./unique-cniTya2T.mjs";
import "./graph-pivots-Bblee9BN.mjs";
import "./scenarios-C5R2TE8p.mjs";
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
import "./array-BFSjnO9c.mjs";
const MAX_THRESHOLD = 1e4;
const conflictingWithSchemaValidationErrors = ["SCORE_THRESHOLDS_MISMATCH", "SCORE_THRESHOLD_MISSING"];
function getFormSchema(t2) {
  return object({
    scoreReviewThreshold: number$1({
      message: t2("scenarios:validation.decision.score_threshold_missing")
    }).max(MAX_THRESHOLD, {
      message: t2("scenarios:validation.decision.score_threshold_max", {
        replace: {
          max: MAX_THRESHOLD
        }
      })
    }).min(-MAX_THRESHOLD, {
      message: t2("scenarios:validation.decision.score_threshold_min", {
        replace: {
          min: -MAX_THRESHOLD
        }
      })
    }).int(),
    scoreBlockAndReviewThreshold: number$1({
      message: t2("scenarios:validation.decision.score_threshold_missing")
    }).max(MAX_THRESHOLD, {
      message: t2("scenarios:validation.decision.score_threshold_max", {
        replace: {
          max: MAX_THRESHOLD
        }
      })
    }).min(-MAX_THRESHOLD, {
      message: t2("scenarios:validation.decision.score_threshold_min", {
        replace: {
          min: -MAX_THRESHOLD
        }
      })
    }).int(),
    scoreDeclineThreshold: number$1({
      message: t2("scenarios:validation.decision.score_threshold_missing")
    }).max(MAX_THRESHOLD, {
      message: t2("scenarios:validation.decision.score_threshold_max", {
        replace: {
          max: MAX_THRESHOLD
        }
      })
    }).min(-MAX_THRESHOLD, {
      message: t2("scenarios:validation.decision.score_threshold_min", {
        replace: {
          min: -MAX_THRESHOLD
        }
      })
    }).int()
  }).superRefine(({
    scoreReviewThreshold,
    scoreBlockAndReviewThreshold,
    scoreDeclineThreshold
  }, ctx) => {
    if (scoreBlockAndReviewThreshold < scoreReviewThreshold) {
      ctx.issues.push({
        code: "custom",
        path: ["scoreBlockAndReviewThreshold"],
        message: t2("scenarios:validation.decision.score_threshold_min", {
          replace: {
            min: scoreReviewThreshold
          }
        }),
        input: ""
      });
    }
    if (scoreDeclineThreshold < scoreBlockAndReviewThreshold) {
      ctx.issues.push({
        code: "custom",
        path: ["scoreDeclineThreshold"],
        message: t2("scenarios:validation.decision.score_threshold_min", {
          replace: {
            min: scoreBlockAndReviewThreshold
          }
        }),
        input: ""
      });
    }
  });
}
const handle = {
  i18n: [...decisionsI18n, ...scenarioI18n, "common"]
};
const saveDecisionInputSchema = object({
  params: record(string(), string()),
  scoreReviewThreshold: number(),
  scoreBlockAndReviewThreshold: number(),
  scoreDeclineThreshold: number()
});
const saveDecisionAction = createServerFn({
  method: "POST"
}).middleware([authMiddleware]).validator((input) => saveDecisionInputSchema.parse(input)).handler(createSsrRpc("bdda9c0781c975539c593039fa8c7b3413d8e3550b1457c51cbe91dd66dbbb66"));
function Decision() {
  const {
    t: t2
  } = useTranslation(handle.i18n);
  const editorMode = useEditorMode();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Collapsible.Container, { className: "bg-surface-card max-w-3xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Collapsible.Title, { children: t2("scenarios:decision.score_based.title") }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Collapsible.Content, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Callout, { variant: "outlined", className: "mb-md lg:mb-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "whitespace-pre-wrap", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trans, { t: t2, i18nKey: "scenarios:decision.score_based.callout", components: {
        DocLink: /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { href: scenarioDecisionDocHref })
      } }) }) }),
      editorMode === "view" ? /* @__PURE__ */ jsxRuntimeExports.jsx(ViewScoreThresholds, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(EditScoreThresholds, {})
    ] })
  ] });
}
function ViewScoreThresholds() {
  const {
    scenarioIteration: {
      scoreReviewThreshold,
      scoreBlockAndReviewThreshold,
      scoreDeclineThreshold
    }
  } = useDetectionScenarioIterationData();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ScoreOutcomeThresholds, { scoreReviewThreshold, scoreBlockAndReviewThreshold, scoreDeclineThreshold });
}
function EditScoreThresholds() {
  const {
    t: t$2
  } = useTranslation(handle.i18n);
  const params = Route$2.useParams();
  const {
    scenarioIteration,
    scenarioValidation
  } = useDetectionScenarioIterationData();
  const revalidate = useLoaderRevalidator();
  const getScenarioErrorMessage = useGetScenarioErrorMessage();
  const mutation = useMutation({
    mutationFn: (value) => {
      return saveDecisionAction({
        data: {
          params,
          ...value
        }
      });
    },
    onSuccess: (result) => {
      if (result.status === "success") {
        zt.success(t$2("common:success.save"));
        revalidate();
        return;
      }
      zt.error(t$2("common:errors.unknown"));
    },
    onError: () => {
      zt.error(t$2("common:errors.unknown"));
    }
  });
  const editorMode = useEditorMode();
  const schema = reactExports.useMemo(() => getFormSchema(t$2), [t$2]);
  const fieldValidators = reactExports.useMemo(() => {
    return {
      scoreReviewThreshold: number({
        message: t$2("scenarios:validation.decision.score_threshold_missing")
      }).max(MAX_THRESHOLD, {
        message: t$2("scenarios:validation.decision.score_threshold_max", {
          replace: {
            max: MAX_THRESHOLD
          }
        })
      }).min(-MAX_THRESHOLD, {
        message: t$2("scenarios:validation.decision.score_threshold_min", {
          replace: {
            min: -MAX_THRESHOLD
          }
        })
      }).int(),
      scoreBlockAndReviewThreshold: number({
        message: t$2("scenarios:validation.decision.score_threshold_missing")
      }).max(MAX_THRESHOLD, {
        message: t$2("scenarios:validation.decision.score_threshold_max", {
          replace: {
            max: MAX_THRESHOLD
          }
        })
      }).min(-MAX_THRESHOLD, {
        message: t$2("scenarios:validation.decision.score_threshold_min", {
          replace: {
            min: -MAX_THRESHOLD
          }
        })
      }).int(),
      scoreDeclineThreshold: number({
        message: t$2("scenarios:validation.decision.score_threshold_missing")
      }).max(MAX_THRESHOLD, {
        message: t$2("scenarios:validation.decision.score_threshold_max", {
          replace: {
            max: MAX_THRESHOLD
          }
        })
      }).min(-MAX_THRESHOLD, {
        message: t$2("scenarios:validation.decision.score_threshold_min", {
          replace: {
            min: -MAX_THRESHOLD
          }
        })
      }).int()
    };
  }, [t$2]);
  const form = useForm({
    defaultValues: {
      scoreReviewThreshold: scenarioIteration.scoreReviewThreshold ?? 0,
      scoreBlockAndReviewThreshold: scenarioIteration.scoreBlockAndReviewThreshold ?? 0,
      scoreDeclineThreshold: scenarioIteration.scoreDeclineThreshold ?? 0
    },
    validators: {
      onSubmit: schema
    },
    onSubmit: ({
      value,
      formApi
    }) => {
      if (formApi.state.isValid) {
        mutation.mutate(value);
      }
    }
  });
  const scoreReviewThreshold = useStore(form.store, (store) => store.values.scoreReviewThreshold);
  const scoreBlockAndReviewThreshold = useStore(form.store, (store) => store.values.scoreBlockAndReviewThreshold);
  const scoreDeclineThreshold = useStore(form.store, (store) => store.values.scoreDeclineThreshold);
  const serverErrors = t$e(scenarioValidation.decision.errors, n$7((error) => !conflictingWithSchemaValidationErrors.includes(error)), t$9(getScenarioErrorMessage));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "flex flex-col gap-sm", onSubmit: (e) => {
    e.preventDefault();
    e.stopPropagation();
    form.handleSubmit();
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-[max-content_auto] items-center gap-x-1 gap-y-2 lg:gap-x-2 lg:gap-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(OutcomeBadge, { size: "md", outcome: "approve", className: "w-full justify-center" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(form.Field, { name: "scoreReviewThreshold", validators: {
        onChange: fieldValidators.scoreReviewThreshold,
        onBlur: fieldValidators.scoreReviewThreshold
      }, children: (field) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-row flex-wrap items-center gap-xs lg:gap-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { name: field.name, className: "sr-only", children: t$2("scenarios:decision.score_based.score_review_threshold") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Trans, { t: t$2, i18nKey: "scenarios:decision.score_based.approve_condition", components: {
          ReviewThreshold: /* @__PURE__ */ jsxRuntimeExports.jsx(FormInput, { type: "number", name: field.name, onBlur: field.handleBlur, className: "relative w-fit", defaultValue: field.state.value, onChange: (e) => field.handleChange(+e.currentTarget.value), valid: field.state.meta.errors?.length === 0 })
        }, shouldUnescape: true }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(FormErrorOrDescription, { errors: getFieldErrors(field.state.meta.errors), errorClassName: style.errorMessage })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(OutcomeBadge, { size: "md", outcome: "review", className: "w-full justify-center" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(form.Field, { name: "scoreBlockAndReviewThreshold", validators: {
        onChange: fieldValidators.scoreBlockAndReviewThreshold,
        onBlur: fieldValidators.scoreBlockAndReviewThreshold
      }, children: (field) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-row flex-wrap items-center gap-xs lg:gap-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { name: field.name, className: "sr-only", children: t$2("scenarios:decision.score_based.score_block_and_review_threshold") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Trans, { t: t$2, i18nKey: "scenarios:decision.score_based.review_condition", values: {
          reviewThreshold: scoreReviewThreshold
        }, components: {
          BlockAndReviewThreshold: /* @__PURE__ */ jsxRuntimeExports.jsx(FormInput, { type: "number", name: field.name, onBlur: field.handleBlur, min: scoreReviewThreshold, className: "relative w-fit", defaultValue: scoreBlockAndReviewThreshold, onChange: (e) => field.handleChange(+e.currentTarget.value), valid: field.state.meta.errors?.length === 0 })
        }, shouldUnescape: true }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(FormErrorOrDescription, { errors: getFieldErrors(field.state.meta.errors), errorClassName: style.errorMessage })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(OutcomeBadge, { size: "md", outcome: "block_and_review", className: "w-full justify-center" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(form.Field, { name: "scoreDeclineThreshold", validators: {
        onChange: fieldValidators.scoreDeclineThreshold,
        onBlur: fieldValidators.scoreDeclineThreshold
      }, children: (field) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-row flex-wrap items-center gap-xs lg:gap-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { name: field.name, className: "sr-only", children: t$2("scenarios:decision.score_based.score_decline_threshold") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Trans, { t: t$2, i18nKey: "scenarios:decision.score_based.score_block_and_review_condition", values: {
          blockAndReviewThreshold: scoreBlockAndReviewThreshold
        }, components: {
          DeclineThreshold: /* @__PURE__ */ jsxRuntimeExports.jsx(FormInput, { type: "number", name: field.name, onBlur: field.handleBlur, className: "relative w-fit", min: scoreBlockAndReviewThreshold, defaultValue: scoreDeclineThreshold, onChange: (e) => field.handleChange(+e.currentTarget.value), valid: field.state.meta.errors?.length === 0 })
        }, shouldUnescape: true }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(FormErrorOrDescription, { errors: getFieldErrors(field.state.meta.errors), errorClassName: style.errorMessage })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(OutcomeBadge, { size: "md", outcome: "decline", className: "w-full justify-center" }),
      t$2("scenarios:decision.score_based.decline_condition", {
        replace: {
          declineThreshold: scoreDeclineThreshold
        }
      })
    ] }),
    editorMode === "edit" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-row-reverse items-center justify-between gap-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "primary", type: "submit", children: t$2("common:save") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(EvaluationErrors, { errors: serverErrors })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(EvaluationErrors, { errors: serverErrors })
  ] });
}
const style = {
  errorMessage: "bg-red-background rounded-sm px-xs py-2xs h-8 flex items-center justify-center"
};
export {
  Decision as component
};

import { M as reactExports, Q as jsxRuntimeExports, ag as Outlet, a2 as useMatches, L as useRouter } from "./server.mjs";
import { C as CommentContext } from "./comment-context-BW3odHTX.mjs";
import { u as useTranslation, I as Icon, d as cn, W as CtaV2ClassName, al as Tabs, am as tabClassName, a as useFormatDateTime, B as Button, M as MenuCommand, Z as Calendar, aY as RadioGroup, aZ as RadioGroupItem, S as Typo, ab as Radio, an as Panel, a_ as isSameDay } from "./Tabs-CzpyUi7T.mjs";
import { w as getPivotObjectKey, a2 as M, at as isBefore, aL as finalOutcomes, aq as addDays, a7 as addMonths, a9 as toDate, a8 as constructFrom, b as captureException, dm as millisecondsInHour } from "./services-middleware-nMulUXHZ.mjs";
import { M as Modal } from "./Modal-CpYmGWjB.mjs";
import { S as useParams, f as fromUUIDtoSUUID } from "./short-uuid-fTZYJj_k.mjs";
import { aA as Route$s, P as Page, B as BreadCrumbs, L as Link } from "./router-KSC-NEr8.mjs";
import { u as useFormDropzone } from "./useFormDropzone-DXcqE7tO.mjs";
import { s as snoozeCasePayloadSchema, c as closeCasePayloadSchema, o as openCasePayloadSchema, g as editSuspicionPayloadSchema } from "./cases-BQ48izmh.mjs";
import { n as getNextUnassignedCaseFn, o as listSuspicionActivityReportsFn, s as snoozeCaseFn, p as editSuspicionFn, q as enrichKycFn } from "./cases-C-fVFrVL.mjs";
import { u as useQueryClient } from "./query-BmG5BEas.mjs";
import { u as useMutation } from "./useMutation-BOdeDeAR.mjs";
import { u as useServerFn } from "./useServerFn-oRH5Nw97.mjs";
import { s as serialize } from "./Time-CKTfEtti.mjs";
import { u as useQuery } from "./useQuery-Bb0AEcpf.mjs";
import { u as useGetAnnotationsQuery } from "./get-annotations-DHuYMH09.mjs";
import { D as DataModelContextProvider } from "./data-model-Dfj0lN5a.mjs";
import { a2 as getGraphExplorationDisplay } from "./feature-access-BSdB6UiC.mjs";
import { u as useStore } from "./useStore-C3gZU5bu.mjs";
import { u as useForm } from "./useForm-qNQ8S9xN.mjs";
import { z as zt } from "./create-context-k6HmQ6bB.mjs";
import { c as casesI18n } from "./cases-i18n-CKTv5qXV.mjs";
import { F as FormErrorOrDescription } from "./FormErrorOrDescription-BncG6ljR.mjs";
import { F as FormLabel } from "./FormLabel-DseYo_2t.mjs";
import { F as FormTextArea } from "./FormTextArea-B4SoHPli.mjs";
import { u as useLoaderRevalidator } from "./LoaderRevalidatorContext-BEuG7sHs.mjs";
import { u as useCloseCaseMutation, a as useOpenCaseMutation } from "./open-case-CeN6gENK.mjs";
import { g as getFieldErrors, s as submitOnCtrlEnter, h as handleSubmit } from "./form-D2XmDKeG.mjs";
import { a as Callout } from "./Callout-B0OuRL3q.mjs";
import { u as useDownloadFile, A as AlreadyDownloadingError, a as AuthRequestError } from "./DownloadFilesService-B8XCR5JY.mjs";
import { c as constructNow } from "./constructNow-C55voJY_.mjs";
import { C as ClientCommentForm } from "./ClientComments-DuL5CZgm.mjs";
import { g as getGraphEligiblePivots } from "./graph-pivots-Bblee9BN.mjs";
import { u as useAddCommentMutation } from "./add-comment-YfEwin_9.mjs";
import { M as Markdown } from "./Markdown-Djw5Zezo.mjs";
import { S as Spinner } from "./Spinner-DmLieYoS.mjs";
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
import "./datetime-insWKNBy.mjs";
import "./case-detail-middleware-iDVIrW-c.mjs";
import "./inboxes-D556s0BB.mjs";
import "./input-validation-D4mgQsey.mjs";
import "./async-C3pYACua.mjs";
import "./coerce-UidCu_Sb.mjs";
import "./files-fO9wUXBf.mjs";
import "./decisions--eKWwSYj.mjs";
import "./unique-cniTya2T.mjs";
import "./scenarios-C5R2TE8p.mjs";
import "./index-CBe2FUD4.mjs";
import "./useBaseQuery-BqF2iw7Y.mjs";
import "./data-9UajV2HK.mjs";
import "./data-BXamdbTM.mjs";
import "./decisions-i18n-Cg4JM_3r.mjs";
import "./TextArea-p2rzbOeQ.mjs";
import "./array-BFSjnO9c.mjs";
import "./download-file-C533i5xX.mjs";
import "./organization-users-CEJGnALa.mjs";
import "./index-22HmyALM.mjs";
import "./Avatar-DDGL3Siw.mjs";
import "./ClientCommentForm-CxGdh-J3.mjs";
import "./annotations-Dbgxm4DN.mjs";
import "./Code-NcjS_4uC.mjs";
function addMilliseconds(date, amount, options) {
  return constructFrom(date, +toDate(date) + amount);
}
function addHours(date, amount, options) {
  return addMilliseconds(date, amount * millisecondsInHour);
}
function getDay(date, options) {
  return toDate(date, options?.in).getDay();
}
function isMonday(date, options) {
  return toDate(date, options?.in).getDay() === 1;
}
function startOfHour(date, options) {
  const _date = toDate(date, options?.in);
  _date.setMinutes(0, 0, 0);
  return _date;
}
function nextDay(date, day, options) {
  let delta = day - getDay(date, options);
  if (delta <= 0) delta += 7;
  return addDays(date, delta, options);
}
function nextMonday(date, options) {
  return nextDay(date, 1, options);
}
function startOfTomorrow(options) {
  const now = constructNow(options?.in);
  const year = now.getFullYear();
  const month = now.getMonth();
  const day = now.getDate();
  const date = constructFrom(options?.in, 0);
  date.setFullYear(year, month, day + 1);
  date.setHours(0, 0, 0, 0);
  return date;
}
function ActionBar({ children, more }) {
  const childrenArray = reactExports.Children.toArray(children);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex gap-sm bg-purple-background-light border border-purple-border rounded-md dark:bg-grey-background-light dark:border-grey-border p-sm", children: [
    childrenArray.map((child, i, arr) => {
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(reactExports.Fragment, { children: [
        child,
        i < arr.length - 1 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "self-stretch w-px bg-purple-border dark:bg-grey-border" }) : null
      ] }, i);
    }),
    more ? /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", appearance: "stroked", mode: "icon", onClick: more.onClick, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: more.icon, className: "size-4" }) }) : null
  ] });
}
function ActionButton({ icon, disabled, text, onClick }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { disabled, appearance: "link", onClick, children: [
    icon ? /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon, className: "size-4" }) : null,
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: text })
  ] });
}
const useEditSuspicionMutation = () => {
  const editSuspicion = useServerFn(editSuspicionFn);
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["cases", "edit-suspicion"],
    mutationFn: async (payload) => editSuspicion({ data: serialize(payload) }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cases"] });
    }
  });
};
function useSarReportsQuery(caseId) {
  const listSuspicionActivityReports = useServerFn(listSuspicionActivityReportsFn);
  return useQuery({
    queryKey: ["sar-reports", caseId],
    queryFn: () => {
      return listSuspicionActivityReports({ data: { caseId } });
    }
  });
}
const CloseCase = ({
  id,
  disabled,
  withoutOutcome
}) => {
  const { t } = useTranslation([...casesI18n, "common"]);
  const closeCaseMutation = useCloseCaseMutation();
  const revalidate = useLoaderRevalidator();
  const [open, setOpen] = reactExports.useState(false);
  const form = useForm({
    defaultValues: {
      caseId: id,
      comment: "",
      outcome: void 0
    },
    onSubmit: ({ value }) => {
      closeCaseMutation.mutateAsync(value).then(() => {
        setOpen(false);
        revalidate();
      }).catch(() => {
        zt.error(t("common:errors.unknown"));
      });
    },
    validators: {
      onSubmit: closeCasePayloadSchema
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal.Root, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.Trigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "primary", className: "flex-1 first-letter:capitalize", disabled, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "save", className: "size-3.5" }),
      t("cases:case.close")
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal.Content, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.Title, { children: t("cases:case.close") }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit(form), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-xl p-xl", children: [
          !withoutOutcome ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            form.Field,
            {
              name: "outcome",
              validators: {
                onChange: closeCasePayloadSchema.shape.outcome,
                onBlur: closeCasePayloadSchema.shape.outcome
              },
              children: (field) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { name: field.name, children: t("cases:case.close.choose_outcome") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  RadioGroup,
                  {
                    name: field.name,
                    onValueChange: (v) => field.handleChange(v),
                    onBlur: field.handleBlur,
                    className: "flex items-center gap-xs rtl:flex-row-reverse",
                    children: finalOutcomes.map((s) => {
                      return /* @__PURE__ */ jsxRuntimeExports.jsx(
                        RadioGroupItem,
                        {
                          value: s,
                          className: "border-grey-border data-[state=checked]:border-purple-hover flex items-center justify-center rounded-[20px] border bg-transparent p-xs",
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "span",
                            {
                              className: cn("rounded-full border px-sm py-2xs text-xs", {
                                "border-red-primary text-red-primary": s === "confirmed_risk",
                                "border-green-secondary text-green-secondary": s === "false_positive",
                                "border-orange-primary text-orange-primary": s === "valuable_alert"
                              }),
                              children: M(s).with("confirmed_risk", () => t("cases:case.outcome.confirmed_risk")).with("valuable_alert", () => t("cases:case.outcome.valuable_alert")).with("false_positive", () => t("cases:case.outcome.false_positive")).exhaustive()
                            }
                          )
                        },
                        s
                      );
                    })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(FormErrorOrDescription, { errors: getFieldErrors(field.state.meta.errors) })
              ] })
            }
          ) : null,
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            form.Field,
            {
              name: "comment",
              validators: {
                onChange: closeCasePayloadSchema.shape.comment,
                onBlur: closeCasePayloadSchema.shape.comment
              },
              children: (field) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  FormTextArea,
                  {
                    name: field.name,
                    defaultValue: field.state.value,
                    placeholder: t("cases:case.close.add_comment_placeholder"),
                    valid: field.state.meta.errors.length === 0,
                    onChange: (e) => field.handleChange(e.currentTarget.value),
                    onKeyDown: submitOnCtrlEnter
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(FormErrorOrDescription, { errors: getFieldErrors(field.state.meta.errors) })
              ] })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal.Footer, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.FooterButton, { isCloseButton: true, label: t("common:cancel") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.FooterButton, { label: t("common:validate"), type: "submit" })
        ] })
      ] })
    ] })
  ] });
};
const OpenCase = ({ id }) => {
  const { t } = useTranslation([...casesI18n, "common"]);
  const openCaseMutation = useOpenCaseMutation();
  const revalide = useLoaderRevalidator();
  const [open, setOpen] = reactExports.useState(false);
  const form = useForm({
    defaultValues: { caseId: id, comment: "" },
    onSubmit: ({ value }) => {
      openCaseMutation.mutateAsync(value).then(() => {
        setOpen(false);
        revalide();
      }).catch(() => {
        zt.error(t("common:errors.unknown"));
      });
    },
    validators: {
      onSubmit: openCasePayloadSchema
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal.Root, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.Trigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "primary", className: "flex-1 first-letter:capitalize", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "save", className: "size-3.5" }),
      t("cases:case.reopen")
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal.Content, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.Title, { children: t("cases:case.reopen") }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit(form), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-xl p-xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Callout, { children: t("cases:reopen-case.modal.callout") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            form.Field,
            {
              name: "comment",
              validators: {
                onChange: openCasePayloadSchema.shape.comment,
                onBlur: openCasePayloadSchema.shape.comment
              },
              children: (field) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { name: field.name, children: "Add a comment" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  FormTextArea,
                  {
                    name: field.name,
                    defaultValue: field.state.value,
                    placeholder: "Input your comment here",
                    valid: field.state.meta.errors.length === 0,
                    onChange: (e) => field.handleChange(e.currentTarget.value),
                    onKeyDown: submitOnCtrlEnter
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(FormErrorOrDescription, { errors: getFieldErrors(field.state.meta.errors) })
              ] })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal.Footer, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.FooterButton, { isCloseButton: true, label: t("common:cancel") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.FooterButton, { label: t("cases:reopen-case.modal.submit-button.label"), type: "submit" })
        ] })
      ] })
    ] })
  ] });
};
function SarReportDownload({ caseId, reportId, variant = "button" }) {
  const { t } = useTranslation(["cases"]);
  const router = useRouter();
  const downloadEndpoint = router.buildLocation({
    to: "/ressources/cases/sar/download/$caseId/$reportId",
    params: { caseId, reportId }
  });
  const { downloadCaseFile, downloadingCaseFile } = useDownloadFile(downloadEndpoint.href, {
    onError: (e) => {
      if (e instanceof AlreadyDownloadingError) {
        return;
      } else if (e instanceof AuthRequestError) {
        zt.error(t("cases:case.file.errors.downloading_link.auth_error"));
      } else {
        zt.error(t("cases:case.file.errors.downloading_link.unknown"));
      }
    }
  });
  if (variant === "action") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      ActionButton,
      {
        icon: downloadingCaseFile ? "spinner" : "download",
        text: t("cases:sar.action.download"),
        disabled: downloadingCaseFile,
        onClick: () => {
          void downloadCaseFile();
        }
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Button,
    {
      variant: "secondary",
      size: "small",
      onClick: () => {
        void downloadCaseFile();
      },
      disabled: downloadingCaseFile,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Icon,
          {
            icon: downloadingCaseFile ? "spinner" : "download",
            className: cn("size-3.5", { "animate-spin": downloadingCaseFile })
          }
        ),
        t("cases:sar.action.download")
      ]
    }
  );
}
const useSnoozeCaseMutation = () => {
  const snoozeCase = useServerFn(snoozeCaseFn);
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["cases", "snooze-case"],
    mutationFn: async (payload) => snoozeCase({ data: payload }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cases"] });
    }
  });
};
const setTo9AM = (date) => {
  const d = new Date(date);
  d.setHours(9, 0, 0, 0);
  return d;
};
const getDurations = () => {
  const now = /* @__PURE__ */ new Date();
  const tomorrow = addDays(now, 1);
  const oneWeek = addDays(now, 7);
  const oneMonth = addMonths(now, 1);
  const nextMon = nextMonday(now);
  const options = [
    { duration: "tomorrow", date: setTo9AM(tomorrow) },
    { duration: "oneWeek", date: setTo9AM(oneWeek) },
    { duration: "oneMonth", date: setTo9AM(oneMonth) }
  ];
  if (!isMonday(tomorrow) && !isSameDay(nextMon, oneWeek)) {
    options.splice(1, 0, { duration: "nextMonday", date: setTo9AM(nextMon) });
  }
  return options;
};
function SnoozeCase({ caseId, snoozeUntil }) {
  const { t } = useTranslation(casesI18n);
  const formatDateTime = useFormatDateTime();
  const snoozeCaseMutation = useSnoozeCaseMutation();
  const revalidate = useLoaderRevalidator();
  const [isOpen, setIsOpen] = reactExports.useState(false);
  const formatDate = (date) => formatDateTime(date, { dateStyle: "medium", timeStyle: "short" });
  const form = useForm({
    onSubmit: ({ value }) => {
      const finalValue = {
        ...value,
        snoozeUntil: snoozeUntil ? null : value.snoozeUntil
      };
      snoozeCaseMutation.mutateAsync(finalValue).then(() => {
        revalidate();
      });
    },
    validators: {
      onSubmitAsync: snoozeCasePayloadSchema
    },
    defaultValues: {
      snoozeUntil: snoozeUntil ?? null,
      caseId
    }
  });
  useStore(form.store, (state) => state.values.snoozeUntil);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    form.Field,
    {
      name: "snoozeUntil",
      validators: {
        onBlur: snoozeCasePayloadSchema.shape.snoozeUntil,
        onChange: snoozeCasePayloadSchema.shape.snoozeUntil
      },
      children: (field) => field.state.value ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          variant: "secondary",
          onClick: () => {
            field.handleChange(null);
            form.handleSubmit();
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "snooze-on", className: "size-5", "aria-hidden": true }),
            t("cases:unsnooze_case.title")
          ]
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(MenuCommand.Menu, { open: isOpen, onOpenChange: setIsOpen, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Trigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "secondary", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "snooze", className: "size-4", "aria-hidden": true }),
          t("cases:snooze_case.title")
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Content, { className: "mt-sm min-w-[264px]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(MenuCommand.List, { children: [
          getDurations().map(({ duration, date }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            MenuCommand.Item,
            {
              onSelect: () => {
                field.handleChange(field.state.value === date.toISOString() ? null : date.toISOString());
                form.handleSubmit();
              },
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-r inline-flex items-center gap-xs", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: M(duration).with("tomorrow", () => t("common:snooze.tomorrow")).with("oneWeek", () => t("common:snooze.oneWeek")).with("oneMonth", () => t("common:snooze.oneMonth")).with("nextMonday", () => t("common:snooze.nextMonday")).exhaustive() }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xs text-grey-secondary", children: formatDate(date) })
              ] })
            },
            duration
          )),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            MenuCommand.SubMenu,
            {
              arrow: false,
              hover: false,
              trigger: /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-r inline-flex h-full items-center gap-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("common:snooze.custom") }) }) }),
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.List, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Calendar,
                {
                  mode: "single",
                  selected: field.state.value ? new Date(field.state.value) : void 0,
                  disabled: { before: startOfTomorrow() },
                  onSelect: (date) => {
                    if (date) {
                      field.handleChange(
                        isBefore(date, /* @__PURE__ */ new Date()) ? startOfHour(addHours(/* @__PURE__ */ new Date(), 3)).toISOString() : setTo9AM(date).toISOString()
                      );
                      setIsOpen(false);
                      form.handleSubmit();
                    }
                  }
                }
              ) })
            }
          )
        ] }) })
      ] })
    }
  );
}
const useCreateKycEnrichmentQuery = (caseId) => {
  const enrichKyc = useServerFn(enrichKycFn);
  return useQuery({
    queryKey: ["cases", "create-kyc-enrichment", caseId],
    queryFn: async () => enrichKyc({ data: { caseId } }),
    enabled: false,
    staleTime: Infinity
  });
};
function KycEnrichmentPanel({ caseId, open, onOpenChange }) {
  const { t } = useTranslation(["cases", "common"]);
  const revalidate = useLoaderRevalidator();
  const [isCommentAdded, setIsCommentAdded] = reactExports.useState(false);
  const { data, isPending, error, refetch, isSuccess, status } = useCreateKycEnrichmentQuery(caseId);
  const addCommentMutation = useAddCommentMutation();
  const kycCaseEnrichment = data?.kycCaseEnrichments[0];
  reactExports.useEffect(() => {
    if (open && status !== "success") {
      refetch();
    }
  }, [open, status, refetch]);
  reactExports.useEffect(() => {
    if ((error || isSuccess && !data.success) && open) {
      zt.error(t("cases:kyc_enrichment.loading.toaster.error"));
      onOpenChange(false);
    }
  }, [error, isSuccess, data?.success, open, onOpenChange, t]);
  const handleAddComment = async () => {
    if (!kycCaseEnrichment) return;
    const comment = kycCaseEnrichment.analysis + "\n\n" + kycCaseEnrichment.citations.map((citation, index) => `\\[${index + 1}\\] [${citation.title}](${citation.url} "${citation.title}")`).join("\n");
    try {
      await addCommentMutation.mutateAsync({ caseId, comment, files: [] });
      setIsCommentAdded(true);
      zt.success(t("cases:kyc_enrichment.comment_added.toaster.success"));
      revalidate();
      onOpenChange(false);
    } catch (e) {
      captureException(e);
      zt.error(t("cases:kyc_enrichment.comment_added.toaster.error"));
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Panel.Root, { open, onOpenChange, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Panel.Container, { size: "medium", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Panel.Content, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Panel.Header, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "ai-review", className: "size-5 text-purple-primary shrink-0" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typo, { variant: "title2", className: "flex-1 text-grey-primary", children: t("cases:kyc_enrichment.title") })
    ] }) }),
    isPending ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-md", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-center gap-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, { className: "size-6" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("cases:kyc_enrichment.loading") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AnalysisSkeleton, {})
    ] }) : null,
    error ? /* @__PURE__ */ jsxRuntimeExports.jsx(Callout, { variant: "outlined", children: error.message }) : null,
    isSuccess && data.success && kycCaseEnrichment ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-md", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Callout, { variant: "outlined", children: [
        t("cases:kyc_enrichment.for"),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: kycCaseEnrichment.entityName })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Markdown, { children: kycCaseEnrichment.analysis }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-md", children: kycCaseEnrichment.citations.map((citation, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-sm flex gap-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          "[",
          index + 1,
          "]"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            className: "text-purple-primary hover:bg-purple-background hover:text-grey-secondary",
            href: citation.url,
            children: citation.title
          }
        )
      ] }, `citation.${index}`)) })
    ] }) : null,
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Panel.Footer, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Panel.FooterButton,
        {
          isCloseButton: true,
          disabled: addCommentMutation.isPending,
          variant: "secondary",
          onClick: () => onOpenChange(false),
          label: t("common:close")
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Panel.FooterButton,
        {
          disabled: addCommentMutation.isPending || !isSuccess || isCommentAdded,
          variant: "primary",
          onClick: () => handleAddComment(),
          label: t("cases:kyc_enrichment.attach_to_case")
        }
      )
    ] })
  ] }) }) });
}
function AnalysisSkeleton() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-row gap-lg p-md", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-fit flex-2 flex-col gap-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-row items-center justify-between gap-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-grey-border h-4 w-32 animate-pulse rounded-md" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-grey-border h-12 animate-pulse rounded-lg" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-grey-border h-14 animate-pulse rounded-lg" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-grey-border h-12 animate-pulse rounded-lg" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-grey-border h-16 animate-pulse rounded-lg" })
  ] }) });
}
function CaseManagerPageLayout({
  children,
  caseDetail,
  pivotObjects,
  dataModel,
  dataModelFeatureAccess
}) {
  const { t } = useTranslation(["cases"]);
  const [sarReportModalOpen, setSarReportModalOpen] = reactExports.useState(false);
  const [kycEnrichmentPanelOpen, setKycEnrichmentPanelOpen] = reactExports.useState(false);
  const { info } = CommentContext.useValue();
  const sarReportsQuery = useSarReportsQuery(caseDetail.id);
  const params = useParams({ strict: false });
  const currentPivotValue = typeof params.pivotValue === "string" ? params.pivotValue : void 0;
  const eligiblePivots = getGraphEligiblePivots(pivotObjects, dataModel);
  const graphDisplay = getGraphExplorationDisplay(dataModelFeatureAccess);
  const clientsPivotValue = currentPivotValue && pivotObjects.some((p) => getPivotObjectKey(p) === currentPivotValue) ? currentPivotValue : void 0;
  const linksPivotValue = currentPivotValue && eligiblePivots.some((p) => getPivotObjectKey(p) === currentPivotValue) ? currentPivotValue : void 0;
  const defaultClientsPivotValue = clientsPivotValue ?? (pivotObjects[0] ? getPivotObjectKey(pivotObjects[0]) : void 0);
  const defaultLinksPivotValue = linksPivotValue ?? (eligiblePivots[0] ? getPivotObjectKey(eligiblePivots[0]) : void 0);
  const isLinksTab = useMatches({
    select: (matches) => matches.some((m) => m.routeId === "/_app/_builder/cases/_detail/s/$caseId/links")
  });
  const getNextUnassignedCase = useServerFn(getNextUnassignedCaseFn);
  const router = useRouter();
  const nextUnassignedCaseHref = router.buildLocation({
    to: "/ressources/cases/next-unassigned/$caseId",
    params: { caseId: fromUUIDtoSUUID(caseDetail.id) }
  }).href;
  const handleSarAction = () => {
    setSarReportModalOpen(true);
  };
  const handleKycEnrichAction = () => {
    setKycEnrichmentPanelOpen(true);
  };
  const sarReport = sarReportsQuery.data?.[0];
  const sarStatus = sarReport?.status;
  const isSarCompleted = sarStatus === "completed";
  const hasSarFile = sarReport?.hasFile === true;
  const sarActionText = M(sarStatus).with(void 0, () => t("cases:manager.actions.create_sar")).with("pending", () => t("cases:manager.actions.complete_sar")).with("completed", () => t("cases:manager.actions.sar_completed")).exhaustive();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Page.Main, { className: isLinksTab ? "min-h-0 overflow-hidden" : void 0, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Page.Header, { color: "page", className: "justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(BreadCrumbs, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-sm", children: [
        caseDetail.status !== "closed" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SnoozeCase, { caseId: caseDetail.id, snoozeUntil: caseDetail.snoozedUntil }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CloseCase, { id: caseDetail.id })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(OpenCase, { id: caseDetail.id }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: nextUnassignedCaseHref,
            "aria-label": t("cases:next_unassigned_case"),
            className: cn(CtaV2ClassName({ variant: "secondary" }), "hover:bg-grey-background"),
            onClick: (e) => {
              if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
              e.preventDefault();
              getNextUnassignedCase({ data: { caseId: caseDetail.id } });
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("cases:next_unassigned_case") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "arrow-right", className: "size-4" })
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Page.Container, { className: isLinksTab ? "min-h-0" : void 0, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Page.Content, { className: cn("relative", isLinksTab && "min-h-0 overflow-hidden"), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between mb-lg shrink-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { className: tabClassName, from: "/cases/s/$caseId", to: "./principal", preload: "render", children: t("cases:case_detail.tab.principal") }),
          defaultClientsPivotValue ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              className: tabClassName,
              from: "/cases/s/$caseId",
              to: "./clients/$pivotValue",
              params: { pivotValue: defaultClientsPivotValue },
              preload: "render",
              children: t("cases:manager.tab.clients_concerned")
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { disabled: true, className: tabClassName, from: "/cases/s/$caseId", to: "./clients", preload: false, children: t("cases:manager.tab.clients_concerned") }),
          graphDisplay !== "hidden" ? defaultLinksPivotValue ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              className: tabClassName,
              from: "/cases/s/$caseId",
              to: "./links/$pivotValue",
              params: { pivotValue: defaultLinksPivotValue },
              preload: "render",
              children: t("cases:manager.tab.links_to_other")
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { disabled: true, className: tabClassName, from: "/cases/s/$caseId", to: "./links", preload: false, children: t("cases:manager.tab.links_to_other") }) : null
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(ActionBar, { children: [
          isSarCompleted && hasSarFile && sarReport ? /* @__PURE__ */ jsxRuntimeExports.jsx(SarReportDownload, { variant: "action", caseId: caseDetail.id, reportId: sarReport.id }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ActionButton, { icon: "plus", text: sarActionText, onClick: handleSarAction }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            ActionButton,
            {
              disabled: pivotObjects.length === 0,
              icon: "plus",
              text: t("cases:manager.actions.enrich_kyc_profile"),
              onClick: handleKycEnrichAction
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DataModelContextProvider, { dataModel, dataModelFeatureAccess, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn(isLinksTab && "flex min-h-0 flex-1 flex-col"), children }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SarReportModal,
        {
          open: sarReportModalOpen,
          onOpenChange: setSarReportModalOpen,
          caseId: caseDetail.id,
          report: sarReport
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        KycEnrichmentPanel,
        {
          caseId: caseDetail.id,
          open: kycEnrichmentPanelOpen,
          onOpenChange: setKycEnrichmentPanelOpen
        }
      ),
      info ? /* @__PURE__ */ jsxRuntimeExports.jsx(StickyCommentForm, { ...info }) : null
    ] }) })
  ] });
}
function StickyCommentForm({ objectId, objectType }) {
  const annotationsQuery = useGetAnnotationsQuery(objectType, objectId, true);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sticky flex justify-end end-lg bottom-lg mt-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ClientCommentForm, { annotationsQuery, objectId, objectType }) });
}
function SarReportModal({ open, onOpenChange, caseId, report }) {
  const { t } = useTranslation(["common", "cases"]);
  const editSuspicionMutation = useEditSuspicionMutation();
  const initialStatus = report?.status;
  const queryClient = useQueryClient();
  const { getRootProps, getInputProps, isDragActive } = useFormDropzone({
    multiple: false,
    onDrop: (acceptedFiles) => {
      form.setFieldValue("file", acceptedFiles[0]);
      form.validate("change");
    }
  });
  const form = useForm({
    onSubmit: ({ value }) => {
      editSuspicionMutation.mutateAsync(value).then((res) => {
        if (!res.success) {
          zt.error(t("common:errors.unknown"));
          return;
        }
        onOpenChange(false);
        form.setFieldValue("reportId", res.data?.id);
        queryClient.invalidateQueries({ queryKey: ["sar-reports", caseId] });
        form.reset();
      }).catch(() => {
        zt.error(t("common:errors.unknown"));
      });
    },
    defaultValues: {
      caseId,
      status: !initialStatus ? "none" : "completed",
      reportId: editSuspicionMutation.data?.data?.id ?? report?.id
    },
    validators: {
      onSubmit: editSuspicionPayloadSchema
    }
  });
  const reportFile = useStore(form.store, (state) => state.values.file);
  const newStatus = useStore(form.store, (state) => state.values.status);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.Root, { open, onOpenChange, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal.Content, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-md p-md", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typo, { variant: "title2", children: t("cases:manager.sar_modal.title") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: initialStatus ? t("cases:sar.modale.callout_add_documents") : t("cases:sar.modale.callout_new_report") }),
      !initialStatus ? /* @__PURE__ */ jsxRuntimeExports.jsx(form.Field, { name: "status", children: (field) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Radio.Root,
        {
          value: field.state.value,
          onValueChange: (v) => field.handleChange(v),
          className: "flex flex-col",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Radio.Item, { value: "pending", className: "gap-md px-md h-9", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: t("cases:manager.sar_modal.status_pending") }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Radio.Item, { value: "completed", className: "gap-md px-md h-9", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: t("cases:manager.sar_modal.status_completed") }) })
          ]
        }
      ) }) : null,
      report?.hasFile ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-start", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SarReportDownload, { caseId, reportId: report.id }) }) : null,
      newStatus === "completed" && !report?.hasFile ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          ...getRootProps(),
          className: cn(
            "flex flex-col items-center justify-center gap-lg rounded-sm border-2 border-dashed p-lg",
            isDragActive ? "bg-purple-background border-purple-disabled opacity-90" : "border-grey-border"
          ),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { ...getInputProps() }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-xs justify-center text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex gap-sm items-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "attachment", className: "size-6 -rotate-45 text-grey-secondary" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-purple-primary font-medium", children: t("cases:manager.sar_modal.add_documents") })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-tiny text-grey-secondary", children: t("cases:drop_file_accepted_types") })
            ] }),
            reportFile ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "border-grey-border flex items-center gap-xs rounded-sm border px-xs py-2xs text-xs font-medium", children: [
              reportFile.name,
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  variant: "secondary",
                  appearance: "link",
                  mode: "icon",
                  onClick: () => form.setFieldValue("file", void 0),
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "cross", className: "text-grey-primary size-4" })
                }
              )
            ] }) : null
          ]
        }
      ) : null
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal.Footer, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.FooterButton, { isCloseButton: true, label: t("common:cancel") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.FooterButton, { label: t("common:validate"), onClick: () => form.handleSubmit() })
    ] })
  ] }) });
}
function RouteComponent() {
  const routeContext = Route$s.useRouteContext();
  const [currentlyInvestigated, setCurrentlyInvestigated] = reactExports.useState(null);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(CommentContext.Provider, { value: {
    info: currentlyInvestigated,
    set: setCurrentlyInvestigated
  }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CaseManagerPageLayout, { ...routeContext, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }) });
}
export {
  RouteComponent as component
};

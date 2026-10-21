import { e as escalateCasePayloadSchema, a as editAssigneePayloadSchema, b as editInboxPayloadSchema, h as addCommentPayloadSchema } from "./cases-BQ48izmh.mjs";
import { x as editTagsFn, y as escalateCaseFn, z as editAssigneeFn, A as editInboxFn } from "./cases-C-fVFrVL.mjs";
import { u as useQueryClient } from "./query-BmG5BEas.mjs";
import { u as useMutation } from "./useMutation-BOdeDeAR.mjs";
import { u as useServerFn } from "./useServerFn-oRH5Nw97.mjs";
import { Q as jsxRuntimeExports, M as reactExports } from "./server.mjs";
import { n as normalizeTimestampForInstant, g as getDueDateUrgency, b as getCalendarDayDistance } from "./datetime-insWKNBy.mjs";
import { u as useTranslation, B as Button, I as Icon, V as useFormatTimezone, d as cn, an as Panel, S as Typo, M as MenuCommand, T as Trans, a as useFormatDateTime, g as useFormatLanguage, Z as Calendar } from "./Tabs-CzpyUi7T.mjs";
import { z as isAdmin, a2 as M, v as n$7, h as getDateFnsLocale, ab as startOfDay, ay as datetime, I as protectArray } from "./services-middleware-nMulUXHZ.mjs";
import { F as FormErrorOrDescription } from "./FormErrorOrDescription-BncG6ljR.mjs";
import { u as useLoaderRevalidator } from "./LoaderRevalidatorContext-BEuG7sHs.mjs";
import { u as useOrganizationUsers } from "./organization-users-CEJGnALa.mjs";
import { h as handleSubmit, g as getFieldErrors, s as submitOnCtrlEnter } from "./form-D2XmDKeG.mjs";
import { u as useStore } from "./useStore-C3gZU5bu.mjs";
import { u as useForm } from "./useForm-qNQ8S9xN.mjs";
import { A as Avatar } from "./Avatar-DDGL3Siw.mjs";
import { j as capitalize } from "./dataset-utils-CXMfULsv.mjs";
import { u as useGetInboxesQuery } from "./get-inboxes-BXwOxAig.mjs";
import { S as Spinner } from "./Spinner-DmLieYoS.mjs";
import { z as zt, C as CopyToClipboardButton } from "./create-context-k6HmQ6bB.mjs";
import { c as casesI18n } from "./cases-i18n-CKTv5qXV.mjs";
import { J as TooltipV2, L as Link, T as Tooltip } from "./router-KSC-NEr8.mjs";
import { u as useFormDropzone } from "./useFormDropzone-DXcqE7tO.mjs";
import { u as useAddCommentMutation } from "./add-comment-YfEwin_9.mjs";
import { t as toggle, d as diff } from "./array-BFSjnO9c.mjs";
import { a as EventTimeSuffixContext, E as EventTime } from "./Time-CKTfEtti.mjs";
import { g as getFullName } from "./user-Dgp6KqPL.mjs";
import { M as Markdown } from "./Markdown-Djw5Zezo.mjs";
import { O as OutcomeBadge } from "./OutcomeTag-DYQZ2msd.mjs";
import { I as IngestedObjectDetailModal } from "./IngestedObjectDetailModal-CBuAoLJ_.mjs";
import { T as TagPreview } from "./TagPreview-DaOqtPxx.mjs";
import { u as useOrganizationObjectTags } from "./organization-object-tags-BKGicIcs.mjs";
import { C as Code } from "./Code-NcjS_4uC.mjs";
import { u as useOrganizationTags } from "./organization-tags-CGghbGcj.mjs";
import { C as Checkbox } from "./Checkbox-C8nszDsh.mjs";
import { e as endOfDay } from "./endOfDay-D4VMTcyc.mjs";
import { f as fromUUIDtoSUUID, o as object, a as array, _ as _enum } from "./short-uuid-fTZYJj_k.mjs";
import { t } from "./allPass-grBz5uBv.mjs";
import { d as debounce } from "./curry-D3P8tFW_.mjs";
import { a as Callout } from "./Callout-B0OuRL3q.mjs";
import { M as Modal } from "./Modal-CpYmGWjB.mjs";
import { u as useOrganizationDetails } from "./organization-detail-BGvqBGx1.mjs";
const useEditTagsMutation = () => {
  const editTags = useServerFn(editTagsFn);
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["cases", "edit-tags"],
    mutationFn: async (payload) => editTags({ data: payload }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cases"] });
    }
  });
};
const CaseAssignedDetail = ({ event }) => {
  const { getOrgUserById } = useOrganizationUsers();
  const { t: t2 } = useTranslation(casesI18n);
  const user = reactExports.useMemo(() => event.userId ? getOrgUserById(event.userId) : void 0, [event.userId, getOrgUserById]);
  const assignee = reactExports.useMemo(() => {
    return getOrgUserById(event.assignedTo);
  }, [event.assignedTo, getOrgUserById]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex w-full items-center gap-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-surface-card border-grey-border flex size-6 shrink-0 grow-0 items-center justify-center rounded-full border", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "case-manager", className: "text-grey-primary size-3" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-grey-primary inline-flex h-full items-center whitespace-pre text-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Trans,
      {
        t: t2,
        i18nKey: event.assignedTo === event.userId ? "case_detail.history.event_detail.case_assigned_himself" : "case_detail.history.event_detail.case_assigned",
        components: { Style: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold capitalize" }) },
        values: { actor: user ? getFullName(user) : "Workflow", assignee: getFullName(assignee) }
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(EventTime, { time: event.createdAt })
  ] }, event.id);
};
const CaseCreatedDetail = ({ event }) => {
  const { getOrgUserById } = useOrganizationUsers();
  const { t: t2 } = useTranslation(casesI18n);
  const user = reactExports.useMemo(() => event.userId ? getOrgUserById(event.userId) : void 0, [event.userId, getOrgUserById]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex w-full items-center gap-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-surface-card border-grey-border flex size-6 shrink-0 grow-0 items-center justify-center rounded-full border", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "case-manager", className: "text-grey-primary size-3" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-grey-primary inline-flex h-full items-center whitespace-pre text-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Trans,
      {
        t: t2,
        i18nKey: "cases:case_detail.history.event_detail.created_by",
        components: { Actor: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold capitalize" }) },
        values: { actor: user ? getFullName(user) : "Workflow" }
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(EventTime, { time: event.createdAt })
  ] }, event.id);
};
const CaseSnoozedDetail = ({ event }) => {
  const { getOrgUserById } = useOrganizationUsers();
  const { t: t2 } = useTranslation(casesI18n);
  const formatDateTime = useFormatDateTime();
  const user = reactExports.useMemo(() => event.userId ? getOrgUserById(event.userId) : void 0, [event.userId, getOrgUserById]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex w-full items-center gap-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-surface-card border-grey-border flex size-6 shrink-0 grow-0 items-center justify-center rounded-full border", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "snooze", className: "text-grey-primary size-3" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-grey-primary inline-flex h-full items-center whitespace-pre text-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Trans,
      {
        t: t2,
        i18nKey: "cases:case_detail.history.event_detail.case_snoozed",
        components: { Style: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold capitalize" }) },
        values: {
          actor: user ? getFullName(user) : "MoneyBee",
          date: formatDateTime(event.snoozeUntil, { dateStyle: "short", timeStyle: "short" })
        }
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(EventTime, { time: event.createdAt })
  ] }, event.id);
};
const CaseUnsnoozedDetail = ({ event }) => {
  const { getOrgUserById } = useOrganizationUsers();
  const { t: t2 } = useTranslation(casesI18n);
  const user = reactExports.useMemo(() => event.userId ? getOrgUserById(event.userId) : void 0, [event.userId, getOrgUserById]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex w-full items-center gap-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-surface-card border-grey-border flex size-6 shrink-0 grow-0 items-center justify-center rounded-full border", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "snooze-on", className: "text-grey-primary size-3" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-grey-primary inline-flex h-full items-center whitespace-pre text-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Trans,
      {
        t: t2,
        i18nKey: "cases:case_detail.history.event_detail.case_unsnoozed",
        components: { Style: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold capitalize" }) },
        values: { actor: user ? getFullName(user) : "MoneyBee" }
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(EventTime, { time: event.createdAt })
  ] }, event.id);
};
const CommentAddedDetail = ({ event }) => {
  const { getOrgUserById } = useOrganizationUsers();
  const user = reactExports.useMemo(() => event.userId ? getOrgUserById(event.userId) : void 0, [event.userId, getOrgUserById]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Avatar, { firstName: user?.firstName, lastName: user?.lastName, size: "xxs", color: "grey" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-grey-primary whitespace-pre-wrap text-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Markdown, { children: event.comment }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(EventTime, { time: event.createdAt })
  ] }, event.id);
};
const DecisionAddedDetail = ({ event }) => {
  const { getOrgUserById } = useOrganizationUsers();
  const { t: t2 } = useTranslation(casesI18n);
  const user = reactExports.useMemo(() => event.userId ? getOrgUserById(event.userId) : void 0, [event.userId, getOrgUserById]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex w-full items-center gap-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-surface-card border-grey-border flex size-6 shrink-0 grow-0 items-center justify-center rounded-full border", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "decision", className: "text-grey-primary size-3" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-grey-primary inline-flex h-full items-center whitespace-pre text-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Trans,
      {
        t: t2,
        i18nKey: "cases:case_detail.history.event_detail.decision_added",
        components: { Actor: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold capitalize" }) },
        values: { actor: user ? getFullName(user) : "Workflow" }
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(EventTime, { time: event.createdAt })
  ] }, event.id);
};
const DecisionReviewedDetail = ({ event }) => {
  const { t: t2 } = useTranslation(casesI18n);
  const { getOrgUserById } = useOrganizationUsers();
  const user = reactExports.useMemo(() => event.userId ? getOrgUserById(event.userId) : void 0, [event.userId, getOrgUserById]);
  const i18nKey = event.comment ? "cases:case_detail.history.event_detail.decision_reviewed_with_comment" : "cases:case_detail.history.event_detail.decision_reviewed";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex w-full items-center gap-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-surface-card border-grey-border flex size-6 shrink-0 grow-0 items-center justify-center rounded-full border", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "manage-search", className: "text-grey-primary size-3" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-grey-primary inline-flex h-full items-center whitespace-pre text-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Trans,
        {
          t: t2,
          i18nKey,
          components: {
            Actor: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold capitalize" }),
            Status: /* @__PURE__ */ jsxRuntimeExports.jsx(OutcomeBadge, { outcome: event.status })
          },
          values: { actor: user ? getFullName(user) : "Workflow" }
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(EventTime, { time: event.createdAt })
    ] }, event.id),
    event.comment && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-sm ps-xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "comment", className: "text-grey-primary size-3 shrink-0 mt-xs" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-grey-primary text-xs italic", children: event.comment })
    ] })
  ] });
};
const ClickableCode = ({ children, onClick }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Code, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick, children }) });
};
function EntityAnnotated({ event }) {
  const { getOrgUserById } = useOrganizationUsers();
  const { getTagById } = useOrganizationObjectTags();
  const { t: t2 } = useTranslation(casesI18n);
  const [open, setOpen] = reactExports.useState(false);
  const user = reactExports.useMemo(() => event.userId ? getOrgUserById(event.userId) : void 0, [event.userId, getOrgUserById]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex w-full items-start gap-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-surface-card border-grey-border flex size-6 shrink-0 grow-0 items-center justify-center rounded-full border", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "comment", className: "text-grey-primary size-3" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-xs", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-grey-primary inline-flex h-full items-center whitespace-pre text-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Trans,
        {
          t: t2,
          i18nKey: "case_detail.history.event_detail.entity_annotated",
          components: {
            Actor: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold capitalize" }),
            ObjectType: /* @__PURE__ */ jsxRuntimeExports.jsx(ClickableCode, { onClick: () => setOpen(true), children: "dummyChild" }),
            Type: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold" })
          },
          values: {
            actor: user ? getFullName(user) : "Workflow",
            objectType: event.annotation.object_type,
            type: event.annotation.type
          }
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: M(event.annotation).with({ type: "tag" }, (annotation) => {
        const tag = getTagById(annotation.payload.tag_id);
        return tag ? /* @__PURE__ */ jsxRuntimeExports.jsx(TagPreview, { name: tag.name, className: "ms-sm" }) : null;
      }).with({ type: "file" }, (annotation) => {
        return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "border-grey-border ms-sm flex items-center gap-xs rounded-sm border px-xs py-2xs text-xs font-medium", children: annotation.payload.files[0]?.filename });
      }).with({ type: "comment" }, (annotation) => {
        return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "border-grey-border ms-sm border-l ps-sm", children: annotation.payload.text });
      }).exhaustive() }),
      open ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        IngestedObjectDetailModal,
        {
          dataModel: [],
          tableName: event.annotation.object_type,
          objectId: event.annotation.object_id,
          onClose: () => setOpen(false)
        }
      ) : null
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(EventTime, { time: event.createdAt })
  ] }, event.id);
}
const FileAddedDetail = ({ event }) => {
  const { getOrgUserById } = useOrganizationUsers();
  const { t: t2 } = useTranslation(casesI18n);
  const user = reactExports.useMemo(() => event.userId ? getOrgUserById(event.userId) : void 0, [event.userId, getOrgUserById]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex w-full items-center gap-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-surface-card border-grey-border flex size-6 shrink-0 grow-0 items-center justify-center rounded-full border", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "decision", className: "text-grey-primary size-3" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-grey-primary inline-flex h-full items-center whitespace-pre text-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Trans,
      {
        t: t2,
        i18nKey: "cases:case_detail.history.event_detail.file_added",
        components: {
          Actor: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold capitalize" }),
          File: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "border-grey-border flex items-center gap-xs rounded-sm border px-xs py-2xs text-xs font-medium" })
        },
        values: {
          actor: user ? getFullName(user) : "MoneyBee",
          file: event.fileName
        }
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(EventTime, { time: event.createdAt })
  ] }, event.id);
};
const InboxChangedDetail = ({ event }) => {
  const { getOrgUserById } = useOrganizationUsers();
  const { t: t2 } = useTranslation(casesI18n);
  const user = reactExports.useMemo(() => event.userId ? getOrgUserById(event.userId) : void 0, [event.userId, getOrgUserById]);
  const inboxesQuery = useGetInboxesQuery();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex w-full items-center gap-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-surface-card border-grey-border flex size-6 shrink-0 grow-0 items-center justify-center rounded-full border", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "decision", className: "text-grey-primary size-3" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-grey-primary inline-flex h-full items-center whitespace-pre text-xs", children: M(inboxesQuery).with({ isPending: true }, () => /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, { className: "size-4" })).with({ isError: true }, () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: t2("common:generic_fetch_data_error") })).with({ isSuccess: true }, ({ data }) => {
      const inboxes = data?.inboxes ?? [];
      const inboxName = inboxes.find((i) => i.id === event.newInboxId)?.name ?? "Unknown";
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        Trans,
        {
          t: t2,
          i18nKey: "cases:case_detail.history.event_detail.inbox_changed",
          components: {
            Style: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold capitalize" })
          },
          values: {
            actor: user ? getFullName(user) : "MoneyBee",
            inbox: inboxName
          }
        }
      );
    }).exhaustive() }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(EventTime, { time: event.createdAt })
  ] }, event.id);
};
const NameUpdatedDetail = ({ event }) => {
  const { getOrgUserById } = useOrganizationUsers();
  const { t: t2 } = useTranslation(casesI18n);
  const user = reactExports.useMemo(() => event.userId ? getOrgUserById(event.userId) : void 0, [event.userId, getOrgUserById]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex w-full items-center gap-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-surface-card border-grey-border flex size-6 shrink-0 grow-0 items-center justify-center rounded-full border", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "edit", className: "text-grey-primary size-3" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-grey-primary inline-flex h-full items-center whitespace-pre text-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Trans,
      {
        t: t2,
        i18nKey: "cases:case_detail.history.event_detail.name_updated",
        components: { Style: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold capitalize" }) },
        values: { actor: user ? getFullName(user) : "Workflow", name: event.newName }
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(EventTime, { time: event.createdAt })
  ] }, event.id);
};
const OutcomeUpdatedDetail = ({ event }) => {
  const { t: t2 } = useTranslation(casesI18n);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex w-full items-center gap-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-surface-card border-grey-border flex size-6 shrink-0 grow-0 items-center justify-center rounded-full border", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "edit", className: "text-grey-primary size-3" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-grey-primary inline-flex h-full items-center whitespace-pre text-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Trans,
      {
        t: t2,
        i18nKey: "cases:case_detail.history.event_detail.outcome_updated",
        components: { Style: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold capitalize" }) },
        values: { outcome: t2(`cases:case.outcome.${event.newOutcome}`) }
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(EventTime, { time: event.createdAt })
  ] }, event.id);
};
const RuleSnoozeCreatedDetail = ({ event }) => {
  const { t: t2 } = useTranslation(casesI18n);
  const { getOrgUserById } = useOrganizationUsers();
  const user = reactExports.useMemo(() => event.userId ? getOrgUserById(event.userId) : void 0, [event.userId, getOrgUserById]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex w-full items-center gap-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-surface-card border-grey-border flex size-6 shrink-0 grow-0 items-center justify-center rounded-full border", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "snooze", className: "text-grey-primary size-3" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-grey-primary inline-flex h-full items-center whitespace-pre text-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Trans,
      {
        t: t2,
        i18nKey: "cases:case_detail.history.event_detail.rule_snooze_created",
        components: {
          Actor: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold capitalize" })
        },
        values: { actor: user ? getFullName(user) : "Workflow" }
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(EventTime, { time: event.createdAt })
  ] }, event.id);
};
const SarCreatedDetail = ({ event }) => {
  const { getOrgUserById } = useOrganizationUsers();
  const { t: t2 } = useTranslation(casesI18n);
  const user = reactExports.useMemo(() => event.userId ? getOrgUserById(event.userId) : void 0, [event.userId, getOrgUserById]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex w-full items-center gap-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-surface-card border-grey-border flex size-6 shrink-0 grow-0 items-center justify-center rounded-full border", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "full-flag", className: "text-grey-primary size-3" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-grey-primary inline-flex h-full items-center whitespace-pre text-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Trans,
      {
        t: t2,
        i18nKey: "case_detail.history.event_detail.sar_requested",
        components: {
          Actor: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold capitalize" })
        },
        values: { actor: user ? getFullName(user) : "Workflow" }
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(EventTime, { time: event.createdAt })
  ] }, event.id);
};
const SarDeletedDetail = ({ event }) => {
  const { getOrgUserById } = useOrganizationUsers();
  const { t: t2 } = useTranslation(casesI18n);
  const user = reactExports.useMemo(() => event.userId ? getOrgUserById(event.userId) : void 0, [event.userId, getOrgUserById]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex w-full items-center gap-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-surface-card border-grey-border flex size-6 shrink-0 grow-0 items-center justify-center rounded-full border", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "full-flag", className: "text-grey-primary size-3" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-grey-primary inline-flex h-full items-center whitespace-pre text-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Trans,
      {
        t: t2,
        i18nKey: "case_detail.history.event_detail.sar_deleted",
        components: {
          Actor: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold capitalize" })
        },
        values: { actor: user ? getFullName(user) : "Workflow" }
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(EventTime, { time: event.createdAt })
  ] }, event.id);
};
const SarFileUploadedDetail = ({ event }) => {
  const { getOrgUserById } = useOrganizationUsers();
  const { t: t2 } = useTranslation(casesI18n);
  const user = reactExports.useMemo(() => event.userId ? getOrgUserById(event.userId) : void 0, [event.userId, getOrgUserById]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex w-full items-center gap-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-surface-card border-grey-border flex size-6 shrink-0 grow-0 items-center justify-center rounded-full border", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "full-flag", className: "text-grey-primary size-3" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-grey-primary inline-flex h-full items-center whitespace-pre text-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Trans,
      {
        t: t2,
        i18nKey: "case_detail.history.event_detail.sar_file_uploaded",
        components: {
          Actor: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold capitalize" }),
          File: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold" })
        },
        values: {
          actor: user ? getFullName(user) : "Workflow",
          file: event.filename
        }
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(EventTime, { time: event.createdAt })
  ] }, event.id);
};
const SarStatusChangedDetail = ({ event }) => {
  const { getOrgUserById } = useOrganizationUsers();
  const { t: t2 } = useTranslation(casesI18n);
  const user = reactExports.useMemo(() => event.userId ? getOrgUserById(event.userId) : void 0, [event.userId, getOrgUserById]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex w-full items-center gap-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-surface-card border-grey-border flex size-6 shrink-0 grow-0 items-center justify-center rounded-full border", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "full-flag", className: "text-grey-primary size-3" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-grey-primary inline-flex h-full items-center whitespace-pre text-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Trans,
      {
        t: t2,
        i18nKey: event.status === "pending" ? "case_detail.history.event_detail.sar_requested" : "case_detail.history.event_detail.sar_reported",
        components: {
          Actor: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold capitalize" })
        },
        values: { actor: user ? getFullName(user) : "Workflow" }
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(EventTime, { time: event.createdAt })
  ] }, event.id);
};
const StatusUpdatedDetail = ({ event }) => {
  const { t: t2 } = useTranslation(casesI18n);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex w-full items-center gap-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-surface-card border-grey-border flex size-6 shrink-0 grow-0 items-center justify-center rounded-full border", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "manage-search", className: "text-grey-primary size-3" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-grey-primary inline-flex h-full items-center whitespace-pre text-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Trans,
      {
        t: t2,
        i18nKey: "cases:case_detail.history.event_detail.status_updated",
        components: { Style: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold capitalize" }) },
        values: { status: t2(`cases:case.status.${event.newStatus}`) }
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(EventTime, { time: event.createdAt })
  ] }, event.id);
};
function CaseTags({ caseTagIds, orgTags }) {
  const { t: t2 } = useTranslation(casesI18n);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Tooltip.Default,
    {
      content: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex max-w-sm flex-wrap gap-xs", children: caseTagIds.map((caseTagId) => /* @__PURE__ */ jsxRuntimeExports.jsx(CaseTag, { tag: orgTags.find((t22) => t22.id === caseTagId) }, caseTagId)) }),
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex w-fit flex-wrap items-center gap-xs", children: [
        caseTagIds.slice(0, 3).map((caseTagId) => /* @__PURE__ */ jsxRuntimeExports.jsx(CaseTag, { tag: orgTags.find((t22) => t22.id === caseTagId) }, caseTagId)),
        caseTagIds.length > 3 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-grey-primary bg-grey-background flex h-6 items-center rounded-sm px-xs text-xs font-normal", children: t2("cases:case_detail.other_tags_count", {
          count: caseTagIds.length - 3
        }) }) : null
      ] })
    }
  );
}
function CaseTag({ tag }) {
  const { t: t2 } = useTranslation(casesI18n);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-grey-background flex h-6 items-center rounded-sm px-xs", style: { backgroundColor: tag?.color }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-grey-primary line-clamp-1 text-xs font-normal", children: tag?.name || t2("cases:case_detail.unknown_tag") }) });
}
const TagsUpdatedDetail = ({ event }) => {
  const { getOrgUserById } = useOrganizationUsers();
  const { t: t2 } = useTranslation(casesI18n);
  const { orgTags } = useOrganizationTags();
  const user = reactExports.useMemo(() => event.userId ? getOrgUserById(event.userId) : void 0, [event.userId, getOrgUserById]);
  const finalTags = reactExports.useMemo(() => event.tagIds.filter((id) => id !== ""), [event.tagIds]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex w-full items-center gap-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-surface-card border-grey-border flex size-6 shrink-0 grow-0 items-center justify-center rounded-full border", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "decision", className: "text-grey-primary size-3" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-grey-primary inline-flex h-full items-center whitespace-pre text-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Trans,
      {
        t: t2,
        i18nKey: finalTags.length === 0 ? "cases:case_detail.history.event_detail.tags_removed" : "cases:case_detail.history.event_detail.tags_updated",
        components: {
          Actor: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold capitalize" }),
          Tags: /* @__PURE__ */ jsxRuntimeExports.jsx(CaseTags, { caseTagIds: finalTags, orgTags })
        },
        values: {
          actor: user ? getFullName(user) : "Workflow"
        }
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(EventTime, { time: event.createdAt })
  ] }, event.id);
};
function CaseEventDetail({
  event,
  currentInboxId,
  inboxes
}) {
  const inboxName = event.inboxId && event.inboxId !== currentInboxId ? inboxes.find(({ id }) => id === event.inboxId)?.name : void 0;
  const detail = M(event).with({ eventType: "case_created" }, (e) => /* @__PURE__ */ jsxRuntimeExports.jsx(CaseCreatedDetail, { event: e })).with({ eventType: "status_updated" }, (e) => /* @__PURE__ */ jsxRuntimeExports.jsx(StatusUpdatedDetail, { event: e })).with({ eventType: "outcome_updated" }, (e) => /* @__PURE__ */ jsxRuntimeExports.jsx(OutcomeUpdatedDetail, { event: e })).with({ eventType: "decision_added" }, (e) => /* @__PURE__ */ jsxRuntimeExports.jsx(DecisionAddedDetail, { event: e })).with({ eventType: "comment_added" }, (e) => /* @__PURE__ */ jsxRuntimeExports.jsx(CommentAddedDetail, { event: e })).with({ eventType: "name_updated" }, (e) => /* @__PURE__ */ jsxRuntimeExports.jsx(NameUpdatedDetail, { event: e })).with({ eventType: "tags_updated" }, (e) => /* @__PURE__ */ jsxRuntimeExports.jsx(TagsUpdatedDetail, { event: e })).with({ eventType: "file_added" }, (e) => /* @__PURE__ */ jsxRuntimeExports.jsx(FileAddedDetail, { event: e })).with({ eventType: "inbox_changed" }, (e) => /* @__PURE__ */ jsxRuntimeExports.jsx(InboxChangedDetail, { event: e })).with({ eventType: "rule_snooze_created" }, (e) => /* @__PURE__ */ jsxRuntimeExports.jsx(RuleSnoozeCreatedDetail, { event: e })).with({ eventType: "decision_reviewed" }, (e) => /* @__PURE__ */ jsxRuntimeExports.jsx(DecisionReviewedDetail, { event: e })).with({ eventType: "case_snoozed" }, (e) => /* @__PURE__ */ jsxRuntimeExports.jsx(CaseSnoozedDetail, { event: e })).with({ eventType: "case_unsnoozed" }, (e) => /* @__PURE__ */ jsxRuntimeExports.jsx(CaseUnsnoozedDetail, { event: e })).with({ eventType: "case_assigned" }, (e) => /* @__PURE__ */ jsxRuntimeExports.jsx(CaseAssignedDetail, { event: e })).with({ eventType: "sar_created" }, (e) => /* @__PURE__ */ jsxRuntimeExports.jsx(SarCreatedDetail, { event: e })).with({ eventType: "sar_deleted" }, (e) => /* @__PURE__ */ jsxRuntimeExports.jsx(SarDeletedDetail, { event: e })).with({ eventType: "sar_status_changed" }, (e) => /* @__PURE__ */ jsxRuntimeExports.jsx(SarStatusChangedDetail, { event: e })).with({ eventType: "sar_file_uploaded" }, (e) => /* @__PURE__ */ jsxRuntimeExports.jsx(SarFileUploadedDetail, { event: e })).with({ eventType: "entity_annotated" }, (e) => /* @__PURE__ */ jsxRuntimeExports.jsx(EntityAnnotated, { event: e })).exhaustive();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    EventTimeSuffixContext.Provider,
    {
      value: inboxName ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        Trans,
        {
          i18nKey: "cases:case_detail.history.event_detail.event_inbox",
          components: { Inbox: /* @__PURE__ */ jsxRuntimeExports.jsx("bdi", { dir: "auto", className: "text-grey-primary font-medium" }) },
          values: { inbox: inboxName }
        }
      ) : null,
      children: detail
    }
  );
}
function CaseEvents$1({
  events,
  currentInboxId,
  inboxes,
  includeEventTypes,
  excludeEventTypes,
  dueAt,
  status
}) {
  const { t: t2 } = useTranslation(["cases"]);
  const timeZone = useFormatTimezone();
  const [panelOpen, setPanelOpen] = reactExports.useState(false);
  const filteredEvents = reactExports.useMemo(() => {
    return events.filter((event) => {
      if (includeEventTypes !== void 0 && !includeEventTypes.includes(event.eventType)) {
        return false;
      }
      if (excludeEventTypes?.includes(event.eventType)) {
        return false;
      }
      return true;
    });
  }, [events, excludeEventTypes, includeEventTypes]);
  const allEvents = reactExports.useMemo(() => {
    return [...events].sort((a, b) => {
      const byDate = new Date(normalizeTimestampForInstant(a.createdAt)).getTime() - new Date(normalizeTimestampForInstant(b.createdAt)).getTime();
      if (byDate !== 0) return byDate;
      return a.id.localeCompare(b.id);
    });
  }, [events]);
  const steps = reactExports.useMemo(() => {
    const timelineSteps = filteredEvents.map((event) => ({
      kind: "event",
      id: event.id,
      at: event.createdAt,
      eventType: event.eventType
    }));
    if (status !== "closed") {
      const urgency = getDueDateUrgency(dueAt, { timeZone });
      if (urgency && dueAt) {
        timelineSteps.push({
          kind: "due",
          id: "due",
          at: dueAt,
          isLate: urgency.kind === "late"
        });
      }
    }
    return timelineSteps.sort((a, b) => {
      const byDate = new Date(normalizeTimestampForInstant(a.at)).getTime() - new Date(normalizeTimestampForInstant(b.at)).getTime();
      if (byDate !== 0) return byDate;
      return a.id.localeCompare(b.id);
    });
  }, [dueAt, filteredEvents, status, timeZone]);
  if (steps.length === 0) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
    allEvents.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-e-0 top-0 z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Button,
      {
        variant: "primary",
        mode: "icon",
        appearance: "link",
        onClick: () => setPanelOpen(true),
        "aria-label": t2("cases:manager.timeline.view_all"),
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "eye", className: "size-4" })
      }
    ) }) : null,
    /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: cn("max-h-50 overflow-y-auto", allEvents.length > 0 && "pe-lg"), children: steps.map((step, index) => {
      const distance = getCalendarDayDistance(step.at, { timeZone });
      const relativeLabel = formatCalendarDayDistance(distance, t2);
      const isLast = index === steps.length - 1;
      const isLateDue = step.kind === "due" && step.isLate;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex w-2 shrink-0 flex-col items-center", "aria-hidden": true, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: cn("mt-1 size-2 shrink-0 rounded-full", isLateDue ? "bg-red-primary" : "bg-grey-border")
            }
          ),
          !isLast ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-grey-border w-px min-h-sm flex-1" }) : null
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: cn(
              "flex min-w-0 items-center gap-2xs pb-sm text-xs text-grey-secondary",
              isLast && "pb-0",
              isLateDue && "text-red-primary"
            ),
            children: [
              isLateDue ? /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "error", className: "size-3.5 shrink-0" }) : null,
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "truncate", children: [
                step.kind === "event" ? t2(`cases:case_detail.history.event_type.${step.eventType}`) : t2("cases:manager.timeline.due"),
                " ",
                relativeLabel
              ] })
            ]
          }
        )
      ] }, step.id);
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Panel.Root, { open: panelOpen, onOpenChange: setPanelOpen, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Panel.Container, { size: "small", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Panel.Content, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Panel.Header, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typo, { variant: "title2", className: "text-grey-primary", children: t2("cases:manager.timeline.panel_title") }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex flex-col gap-md py-md", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-s-0 top-0 flex h-full w-6 flex-col items-center", "aria-hidden": true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-grey-border -z-10 h-full w-px" }) }),
        allEvents.map((event) => /* @__PURE__ */ jsxRuntimeExports.jsx(CaseEventDetail, { event, currentInboxId, inboxes }, event.id))
      ] })
    ] }) }) })
  ] });
}
function formatCalendarDayDistance(distance, t2) {
  if (!distance) return "";
  return M(distance).with({ kind: "today" }, () => t2("cases:manager.timeline.today")).with({ kind: "yesterday" }, () => t2("cases:manager.timeline.yesterday")).with({ kind: "tomorrow" }, () => t2("cases:manager.timeline.tomorrow")).with({ kind: "ago" }, ({ days }) => t2("cases:manager.timeline.days_ago", { count: days })).with({ kind: "in" }, ({ days }) => t2("cases:manager.timeline.in_days", { count: days })).exhaustive();
}
const useEditAssigneeMutation = () => {
  const editAssignee = useServerFn(editAssigneeFn);
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["cases", "edit-assignee"],
    mutationFn: async (payload) => editAssignee({ data: payload }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cases"] });
    }
  });
};
const EditCaseAssignee = ({
  disabled,
  assigneeId,
  currentUser,
  id
}) => {
  const { t: t2 } = useTranslation(["cases"]);
  const editAssigneeMutation = useEditAssigneeMutation();
  const revalidate = useLoaderRevalidator();
  const [open, setOpen] = reactExports.useState(false);
  const { getOrgUserById, orgUsers } = useOrganizationUsers();
  const form = useForm({
    defaultValues: { assigneeId, caseId: id },
    onSubmit: ({ value }) => {
      editAssigneeMutation.mutateAsync(value).then(() => {
        revalidate();
      });
    },
    validators: {
      onSubmit: editAssigneePayloadSchema
    }
  });
  const selectedUserId = useStore(form.store, (state) => state.values.assigneeId);
  const assignee = reactExports.useMemo(
    () => selectedUserId ? getOrgUserById(selectedUserId) : null,
    [selectedUserId, getOrgUserById]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    form.Field,
    {
      name: "assigneeId",
      validators: {
        onBlur: editAssigneePayloadSchema.shape.assigneeId,
        onChange: editAssigneePayloadSchema.shape.assigneeId
      },
      children: (field) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex w-full gap-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-sm", children: [
          assignee ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Avatar, { size: "xs", firstName: assignee?.firstName, lastName: assignee?.lastName }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex gap-2xs text-xs font-medium", children: [
              `${capitalize(assignee?.firstName)} ${capitalize(assignee?.lastName)}`,
              currentUser.actorIdentity.userId === assignee?.userId ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium", children: "(you)" }) : null
            ] })
          ] }) : !disabled ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              variant: "secondary",
              onClick: () => {
                if (editAssigneeMutation.isPending) return;
                field.handleChange(currentUser.actorIdentity.userId);
                form.handleSubmit();
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "plus", className: "text-grey-secondary size-4" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-grey-secondary text-xs", children: t2("cases:case_detail.assign_to_myself_button.label") })
              ]
            }
          ) : null,
          !disabled ? /* @__PURE__ */ jsxRuntimeExports.jsxs(MenuCommand.Menu, { open, onOpenChange: setOpen, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Trigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "secondary", mode: assignee ? "icon" : "normal", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: assignee ? "edit-square" : "plus", className: "text-grey-secondary size-4" }),
              !assignee ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-grey-secondary text-xs", children: "Add" }) : null
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(MenuCommand.Content, { sameWidth: true, className: "mt-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Combobox, { placeholder: "Search..." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.List, { children: orgUsers.map(({ userId, firstName, lastName, email }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                MenuCommand.Item,
                {
                  className: "cursor-pointer",
                  value: `${userId} ${firstName} ${lastName}`,
                  onSelect: () => {
                    field.handleChange(userId === selectedUserId ? null : userId);
                    form.handleSubmit();
                  },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex w-full justify-between", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: `${capitalize(firstName)} ${capitalize(lastName)}`.trim() || email }),
                    userId === selectedUserId ? /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "tick", className: "text-purple-primary size-6" }) : null
                  ] })
                },
                userId
              )) })
            ] })
          ] }) : null
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(FormErrorOrDescription, { errors: getFieldErrors(field.state.meta.errors) })
      ] })
    }
  );
};
const useEditInboxMutation = () => {
  const editInbox = useServerFn(editInboxFn);
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["cases", "edit-inbox"],
    mutationFn: async (payload) => editInbox({ data: payload }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cases"] });
    }
  });
};
const EditCaseInbox = ({ inboxId, id }) => {
  const editInboxMutation = useEditInboxMutation();
  const revalidate = useLoaderRevalidator();
  const inboxesQuery = useGetInboxesQuery();
  const [open, setOpen] = reactExports.useState(false);
  const form = useForm({
    onSubmit: ({ value }) => {
      editInboxMutation.mutateAsync(value).then(() => {
        revalidate();
      });
    },
    defaultValues: { inboxId, caseId: id },
    validators: {
      onSubmit: editInboxPayloadSchema
    }
  });
  const selectedInboxId = useStore(form.store, (state) => state.values.inboxId);
  const selectedInbox = inboxesQuery.data?.inboxes.find(({ id: inboxId2 }) => inboxId2 === selectedInboxId) ?? null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    form.Field,
    {
      name: "inboxId",
      validators: {
        onBlur: editInboxPayloadSchema.shape.inboxId,
        onChange: editInboxPayloadSchema.shape.inboxId
      },
      children: (field) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex w-full gap-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-sm", children: [
          selectedInbox ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: selectedInbox.name }) : null,
          /* @__PURE__ */ jsxRuntimeExports.jsxs(MenuCommand.Menu, { open, onOpenChange: setOpen, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Trigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { disabled: !inboxesQuery.isSuccess, variant: "secondary", mode: "icon", size: "small", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "edit-square", className: "text-grey-secondary size-4" }) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Content, { className: "mt-sm min-w-[250px]", children: M(inboxesQuery).with({ isPending: true }, () => /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, { className: "size-4" })).with({ isError: true }, () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Error..." })).with({ isSuccess: true }, ({ data }) => {
              const inboxes = data?.inboxes ?? [];
              return /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.List, { children: inboxes.map(({ id: id2, name }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                MenuCommand.Item,
                {
                  className: "cursor-pointer",
                  onSelect: () => {
                    field.handleChange(id2);
                    form.handleSubmit();
                  },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex w-full justify-between", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-s", children: name }),
                    id2 === selectedInboxId ? /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "tick", className: "text-purple-primary size-6" }) : null
                  ] })
                },
                id2
              )) });
            }).exhaustive() })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(FormErrorOrDescription, { errors: getFieldErrors(field.state.meta.errors) })
      ] })
    }
  );
};
function CaseInfo({ caseDetail, currentUser }) {
  const { t: t2 } = useTranslation(["cases"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-[6rem_1fr] gap-y-sm gap-x-md items-center h-fit", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-grey-secondary", children: t2("cases:case.id") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CopyToClipboardButton, { toCopy: caseDetail.id, children: caseDetail.id }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-grey-secondary", children: t2("cases:assigned_to") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      EditCaseAssignee,
      {
        disabled: false,
        id: caseDetail.id,
        assigneeId: caseDetail.assignedTo,
        currentUser
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-grey-secondary", children: t2("cases:case.inbox") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(EditCaseInbox, { id: caseDetail.id, inboxId: caseDetail.inboxId })
  ] });
}
function AddComment({ caseId }) {
  const { t: t2 } = useTranslation([...casesI18n, "common"]);
  const addCommentMutation = useAddCommentMutation();
  const revalidate = useLoaderRevalidator();
  const form = useForm({
    defaultValues: { caseId, comment: "", files: [] },
    onSubmit: ({ value }) => {
      addCommentMutation.mutateAsync(value).then(() => {
        form.reset();
        form.validate("mount");
        revalidate();
      }).catch(() => {
        zt.error(t2("common:errors.unknown"));
      });
    },
    validators: {
      onSubmit: addCommentPayloadSchema
    }
  });
  const { getInputProps, getRootProps } = useFormDropzone({
    onDrop: (acceptedFiles) => {
      form.setFieldValue("files", (prev) => [...prev, ...acceptedFiles]);
      form.validate("change");
    }
  });
  const hasContent = useStore(form.store, (s) => s.values.comment.length > 0);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("form", { onSubmit: handleSubmit(form), className: "bg-surface-elevated border-grey-border gap-md border-t p-md", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "grid grid-cols-[auto_1fr_auto] gap-sm items-start group/comment-form",
      "data-has-content": hasContent,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(form.Field, { name: "files", children: (field) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { ...getInputProps() }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-sm invisible group-focus-within/comment-form:visible group-data-[has-content='true']/comment-form:visible", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "secondary", mode: "icon", ...getRootProps(), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "attachment", className: "text-grey-secondary size-3.5" }) }),
            field.state.value.map((file) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "border-grey-border flex items-center gap-xs rounded-sm border px-2xs py-2xs",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium", children: file.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Icon,
                    {
                      icon: "cross",
                      className: "text-grey-secondary hover:text-grey-primary size-4 cursor-pointer",
                      onClick: (e) => {
                        e.preventDefault();
                        field.handleChange((prev) => toggle(prev, file));
                        form.validate("change");
                      }
                    }
                  )
                ]
              },
              file.name
            ))
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(form.Field, { name: "comment", children: (field) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "textarea",
          {
            value: field.state.value,
            onChange: (e) => field.handleChange(e.currentTarget.value),
            onBlur: field.handleBlur,
            onKeyDown: submitOnCtrlEnter,
            name: field.name,
            placeholder: t2("cases:case_detail.add_a_comment.placeholder"),
            className: "form-textarea text-s w-full resize-none border-none bg-transparent outline-hidden"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(form.Subscribe, { selector: (state) => [state.canSubmit, state.isSubmitSuccessful], children: ([canSubmit, isSubmitSuccessful]) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            type: "submit",
            variant: "primary",
            mode: "icon",
            "aria-label": t2("cases:case_detail.add_a_comment.post"),
            disabled: !canSubmit || isSubmitSuccessful,
            className: "invisible group-focus-within/comment-form:visible group-data-[has-content='true']/comment-form:visible",
            children: isSubmitSuccessful ? /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "spinner", className: "size-3.5 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "send", className: "size-3.5" })
          }
        ) })
      ]
    }
  ) });
}
const CASE_EVENT_CATEGORIES = ["case_review_action", "case_assignation", "sar_related", "others"];
const CASE_EVENT_CATEGORY_TO_EVENTS_MAPPING = {
  others: [
    "case_created",
    "decision_reviewed",
    "name_updated",
    "tags_updated",
    "status_updated",
    "case_snoozed",
    "case_unsnoozed",
    "rule_snooze_created",
    "outcome_updated"
  ],
  case_assignation: ["inbox_changed", "case_assigned"],
  sar_related: ["sar_created", "sar_deleted", "sar_status_changed", "sar_file_uploaded"],
  case_review_action: ["comment_added", "file_added", "decision_reviewed", "entity_annotated"]
};
const DEFAULT_CASE_EVENT_CATEGORIES_FILTER = ["case_review_action"];
object({
  types: protectArray(array(_enum(CASE_EVENT_CATEGORIES))),
  startDate: datetime().optional(),
  endDate: datetime().optional()
});
const Badge = ({ children }) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-purple-primary text-grey-white text-small rounded-sm px-xs py-2xs", children });
const CaseEventFilters = ({ filters, setFilters }) => {
  const { t: t2 } = useTranslation(casesI18n);
  const language = useFormatLanguage();
  const formatDateTime = useFormatDateTime();
  const isDirty = reactExports.useMemo(
    () => diff(filters.types, DEFAULT_CASE_EVENT_CATEGORIES_FILTER).length !== 0 || filters.types.length === 0 || filters.startDate || filters.endDate,
    [filters]
  );
  const checked = M(filters.types.length).with(CASE_EVENT_CATEGORIES.length, () => true).with(0, () => false).otherwise(() => "indeterminate");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-sm", children: [
    isDirty ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "secondary", onClick: () => setFilters({ types: DEFAULT_CASE_EVENT_CATEGORIES_FILTER }), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "cross", className: "size-4" }),
      t2("cases:case_detail.history.filter_reset")
    ] }) : null,
    /* @__PURE__ */ jsxRuntimeExports.jsxs(MenuCommand.Menu, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Trigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "secondary", appearance: "link", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "plus", className: "size-4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Type" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(MenuCommand.Content, { sideOffset: 4, className: "max-h-[400px] max-w-[210px]", align: "end", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Combobox, { className: "m-xs mb-0 h-8 p-0", iconClasses: "size-4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(MenuCommand.List, { className: "p-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            MenuCommand.Item,
            {
              className: "flex min-h-0 cursor-pointer items-center justify-start p-xs",
              onSelect: () => {
                setFilters({ types: checked === true ? [] : [...CASE_EVENT_CATEGORIES] });
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Checkbox, { size: "small", checked }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-s", children: t2(`common:${checked === true ? "select_none" : "select_all"}`) })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Separator, { className: "-mx-xs" }),
          CASE_EVENT_CATEGORIES.map((type) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            MenuCommand.Item,
            {
              onSelect: () => setFilters((prev) => ({ ...prev, types: toggle(prev.types, type) })),
              className: "flex min-h-0 cursor-pointer items-center justify-start p-xs",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Checkbox, { size: "small", checked: filters?.types.includes(type) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-s", children: t2(`cases:case_detail.history.event_type_category.${type}`) })
              ]
            },
            type
          ))
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(MenuCommand.Menu, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Trigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "secondary", appearance: "link", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "plus", className: "size-4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Date" }),
        filters.startDate || filters.endDate ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-grey-disabled mx-xs h-3 w-px" }) : null,
        filters.startDate ? /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { children: t2("common:from", {
          input: formatDateTime(filters.startDate, { dateStyle: "short", timeStyle: "short" })
        }) }) : null,
        filters.endDate ? /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { children: t2("common:to", {
          input: formatDateTime(filters.endDate, { dateStyle: "short", timeStyle: "short" })
        }) }) : null
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Content, { className: "mt-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.List, { className: "p-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Calendar,
        {
          mode: "range",
          selected: {
            from: filters.startDate ? new Date(filters.startDate) : void 0,
            to: filters.endDate ? new Date(filters.endDate) : void 0
          },
          onSelect: (range) => {
            setFilters((prev) => ({
              ...prev,
              startDate: range?.from ? startOfDay(range.from).toString() : void 0,
              endDate: range?.to ? endOfDay(range.to).toString() : void 0
            }));
          },
          defaultMonth: filters.startDate ? new Date(filters.startDate) : void 0,
          locale: getDateFnsLocale(language)
        }
      ) }) })
    ] })
  ] });
};
const MAX_EVENTS_BEFORE_DEBOUNCE = 60;
const EVENT_DELAY = 100;
function CaseEvents({
  events,
  currentInboxId,
  inboxes,
  root
}) {
  const { t: t$1 } = useTranslation(["common", "cases"]);
  const containerRef = reactExports.useRef(null);
  const [showAll, setShowAll] = reactExports.useState(false);
  const [olderEvents, setOlderEventsCount] = reactExports.useState(0);
  const [newerEvents, setNewerEventsCount] = reactExports.useState(0);
  const [filters, setFilters] = reactExports.useState({
    types: DEFAULT_CASE_EVENT_CATEGORIES_FILTER
  });
  const orderedEvents = reactExports.useMemo(
    () => events.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()),
    [events]
  );
  const filteredEvents = reactExports.useMemo(() => {
    if (!filters) return orderedEvents;
    const { types: type, startDate, endDate } = filters;
    return n$7(
      orderedEvents,
      (event) => t(event, [
        (e) => {
          if (type.length === 0) return true;
          const typesAllowed = type.flatMap((t2) => CASE_EVENT_CATEGORY_TO_EVENTS_MAPPING[t2]);
          return typesAllowed.includes(e.eventType);
        },
        (e) => !startDate || new Date(e.createdAt).getTime() >= new Date(startDate).getTime(),
        (e) => !endDate || new Date(e.createdAt).getTime() <= new Date(endDate).getTime()
      ])
    );
  }, [orderedEvents, filters]);
  reactExports.useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const containerRect = container.getBoundingClientRect();
    const items = Array.from(container.children);
    let callback = () => {
      let itemsBeforeVisible = 0;
      let itemsAfterVisible = 0;
      for (const item of items) {
        const itemRect = item.getBoundingClientRect();
        if (itemRect.bottom + (root.current?.scrollTop ?? 0) < containerRect.top) {
          itemsBeforeVisible++;
        } else if (itemRect.top + (root.current?.scrollTop ?? 0) > containerRect.bottom) {
          itemsAfterVisible++;
        }
      }
      setNewerEventsCount(itemsBeforeVisible);
      setOlderEventsCount(itemsAfterVisible);
    };
    if (filteredEvents.length > MAX_EVENTS_BEFORE_DEBOUNCE) {
      callback = debounce({ delay: EVENT_DELAY }, callback);
    }
    callback();
    container.addEventListener("scroll", callback);
    return () => container.removeEventListener("scroll", callback);
  }, [filteredEvents]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-0 flex w-full flex-col gap-md", children: [
    filteredEvents.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute start-0 top-0 flex h-full w-6 flex-col items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-grey-border -z-10 h-full w-px" }) }) : null,
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-surface-card sticky start-0 top-0 z-[-15] flex w-full items-center justify-between ps-lg", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("text-grey-secondary text-small"), children: t$1("cases:investigation.more_recent", { number: newerEvents }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CaseEventFilters, { filters, setFilters }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "secondary", appearance: "link", onClick: () => setShowAll(!showAll), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: showAll ? "eye-slash" : "eye", className: "size-3.5" }),
          showAll ? t$1("cases:investigation.collapse") : t$1("cases:investigation.expand")
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        ref: containerRef,
        className: cn("flex flex-col gap-md overflow-x-hidden", {
          "max-h-[400px] overflow-y-scroll": !showAll
        }),
        children: filteredEvents.map((event) => /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CaseEventDetail, { event, currentInboxId, inboxes }) }, event.id))
      }
    ),
    showAll ? null : /* @__PURE__ */ jsxRuntimeExports.jsx(
      "span",
      {
        className: cn("bg-surface-card text-grey-secondary sticky start-0 top-0 z-[-15] ps-lg text-xs", {
          "text-grey-white": showAll
        }),
        children: filteredEvents.length === 0 || olderEvents === 0 ? t$1("cases:investigation.no_older") : t$1("cases:investigation.older", { number: olderEvents })
      }
    )
  ] });
}
const CaseInvestigation = ({
  caseId,
  currentInboxId,
  events,
  inboxes,
  root,
  className
}) => {
  const { t: t2 } = useTranslation(["cases"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("flex flex-col justify-start gap-sm", className), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-default text-grey-primary px-2xs font-medium", children: t2("cases:investigation") }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-grey-border bg-surface-card flex flex-col rounded-lg border overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-md", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CaseEvents, { events, currentInboxId, inboxes, root }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AddComment, { caseId })
    ] })
  ] });
};
const useEscalateCaseMutation = () => {
  const escalateCase = useServerFn(escalateCaseFn);
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["cases", "escalate-case"],
    mutationFn: async (payload) => escalateCase({ data: payload }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cases"] });
    }
  });
};
function EscalateCaseButton({ caseId, inboxId, className }) {
  const { t: t2 } = useTranslation([...casesI18n, "common"]);
  const escalateCaseMutation = useEscalateCaseMutation();
  const revalidate = useLoaderRevalidator();
  const inboxesQuery = useGetInboxesQuery();
  const { currentUser } = useOrganizationDetails();
  const isAdminUser = isAdmin(currentUser);
  const inboxes = inboxesQuery.data?.inboxes ?? [];
  const inboxDetail = inboxes.find((inbox) => inbox.id === inboxId);
  const targetInbox = inboxes.find((inbox) => inbox.id === inboxDetail?.escalationInboxId);
  const canEscalate = !!inboxDetail?.escalationInboxId;
  const form = useForm({
    onSubmit: async ({ value }) => {
      escalateCaseMutation.mutateAsync(value).then(() => {
        revalidate();
      }).catch(() => {
        zt.error(t2("common:errors.unknown"));
      });
    },
    defaultValues: { caseId, inboxId },
    validators: {
      onSubmit: escalateCasePayloadSchema
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal.Root, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(TooltipV2.Tooltip, { delayDuration: 0, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TooltipV2.TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.Trigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          variant: "secondary",
          size: "small",
          className,
          disabled: !canEscalate,
          "aria-label": t2("cases:escalate-button.label"),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "arrow-up", className: "size-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t2("cases:escalate-button.label") })
          ]
        }
      ) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TooltipV2.TooltipContent, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: canEscalate ? t2("cases:escalate-button.hint", { inboxName: targetInbox?.name }) : isAdminUser ? t2("cases:escalate-button.forbidden.hint.admin") : t2("cases:escalate-button.forbidden.hint") }),
        !canEscalate && isAdminUser ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/settings/inboxes/$inboxId",
            params: { inboxId: fromUUIDtoSUUID(inboxId) },
            className: "hover:text-purple-hover focus:text-purple-hover text-purple-primary font-semibold hover:underline focus:underline",
            children: t2("cases:case.inbox_settings_link")
          }
        ) : null
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal.Content, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.Title, { children: t2("cases:escalate-case.modal.title") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-md text-balance", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Callout, { children: t2("cases:escalate-case.modal.callout") }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("form", { onSubmit: handleSubmit(form), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal.Footer, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.FooterButton, { isCloseButton: true, label: t2("common:cancel") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.FooterButton, { label: t2("cases:escalate-case.modal.submit-button.label"), type: "submit" })
      ] }) })
    ] })
  ] });
}
export {
  CaseInfo as C,
  EscalateCaseButton as E,
  CaseEvents$1 as a,
  CaseInvestigation as b,
  useEditTagsMutation as u
};

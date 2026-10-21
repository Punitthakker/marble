import { Q as jsxRuntimeExports, M as reactExports } from "./server.mjs";
import { u as useTranslation, d as cn, ar as SearchInput, B as Button, I as Icon, an as Panel, W as CtaV2ClassName, M as MenuCommand, a6 as Input, g as useFormatLanguage, a as useFormatDateTime, X as formatDateRelative, aC as useTable, aD as Table, U as StickyComponent, Y as formatDuration } from "./Tabs-CzpyUi7T.mjs";
import { a2 as M, D as DEFAULT_CASE_PAGINATION_SIZE, u as t$e, o as t$9, aS as z, bN as differenceInDays, aK as qualificationLevels } from "./services-middleware-nMulUXHZ.mjs";
import { u as useNavigate, a0 as Route$L, x as useAgnosticNavigation, P as Page, L as Link, C as CaseStatusBadgeV2, T as Tooltip, _ as CaseDueDateUrgencyTag, D as DateRangeFilter } from "./router-KSC-NEr8.mjs";
import { T as TagPreview } from "./TagPreview-DaOqtPxx.mjs";
import { M as MY_INBOX_ID } from "./inboxes-D556s0BB.mjs";
import { u as useOrganizationTags } from "./organization-tags-CGghbGcj.mjs";
import { i as isUnsetTimestamp } from "./datetime-insWKNBy.mjs";
import { f as fromUUIDtoSUUID, u as uuid } from "./short-uuid-fTZYJj_k.mjs";
import { C as Checkbox } from "./Checkbox-C8nszDsh.mjs";
import { z as zt, T as Tag } from "./create-context-k6HmQ6bB.mjs";
import { u as useOrganizationUsers } from "./organization-users-CEJGnALa.mjs";
import { g as getFullName } from "./user-Dgp6KqPL.mjs";
import { A as Avatar } from "./Avatar-DDGL3Siw.mjs";
import { t as t$1 } from "./sumBy-C9HT3LW-.mjs";
import { c as createColumnHelper } from "./columnHelper-dCJ-kjEm.mjs";
import { s as setPreferencesCookie } from "./ThemeContext-DjRULCu0.mjs";
import { u as useCallbackRef } from "./use-callback-ref-DoQNLci-.mjs";
import { t } from "./capitalize-DXXvpSFO.mjs";
import { S as Separator } from "./Separator-D4aEwiuL.mjs";
import { u as useBase64Query } from "./useBase64Query-DaxjXy2D.mjs";
import { u as useTanstackTableListSelection } from "./useTanstackTableListSelection-CCY_1HOg.mjs";
import { w as filtersSchema, x as createCasePayloadSchema } from "./cases-BQ48izmh.mjs";
import { f as getCasesFn, m as massUpdateCasesFn, h as createCaseFn } from "./cases-C-fVFrVL.mjs";
import { u as useInfiniteQuery } from "./useInfiniteQuery-B6vcG-7y.mjs";
import { u as useQueryClient, w as keepPreviousData } from "./query-BmG5BEas.mjs";
import { u as useServerFn } from "./useServerFn-oRH5Nw97.mjs";
import { u as useMutation } from "./useMutation-BOdeDeAR.mjs";
import { S as Spinner } from "./Spinner-DmLieYoS.mjs";
import { F as FormErrorOrDescription } from "./FormErrorOrDescription-BncG6ljR.mjs";
import { F as FormInput } from "./FormInput-CsT_ETvr.mjs";
import { F as FormLabel } from "./FormLabel-DseYo_2t.mjs";
import { u as useLoaderRevalidator } from "./LoaderRevalidatorContext-BEuG7sHs.mjs";
import { u as useGetInboxesQuery } from "./get-inboxes-BXwOxAig.mjs";
import { g as getFieldErrors, h as handleSubmit } from "./form-D2XmDKeG.mjs";
import { u as useForm } from "./useForm-qNQ8S9xN.mjs";
import { S as SelectV2 } from "./Select-Dg3p9vJ0.mjs";
import { C as CalloutV2 } from "./Callout-B0OuRL3q.mjs";
import { C as CasesNavigationTabs } from "./Tabs-xSTCMHAL.mjs";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "./sharpstate.es-C0BW2AZi.mjs";
import "./formatDistanceStrict-DEEeAR-Y.mjs";
import "node:crypto";
import "./security-headers.server-BdP3HrPp.mjs";
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
import "./case-detail-middleware-iDVIrW-c.mjs";
import "./input-validation-D4mgQsey.mjs";
import "./async-C3pYACua.mjs";
import "./coerce-UidCu_Sb.mjs";
import "./files-fO9wUXBf.mjs";
import "./decisions--eKWwSYj.mjs";
import "./unique-cniTya2T.mjs";
import "./graph-pivots-Bblee9BN.mjs";
import "./scenarios-C5R2TE8p.mjs";
import "./config--RFGchua.mjs";
import "./join-Ce2xPJwm.mjs";
import "./useBaseQuery-BqF2iw7Y.mjs";
import "./useQuery-Bb0AEcpf.mjs";
import "./array-BFSjnO9c.mjs";
import "./isNullish-B8pc8Ntu.mjs";
const AssignedContributors = ({
  assignedTo,
  contributors
}) => {
  const { getOrgUserById } = useOrganizationUsers();
  const assignedUser = assignedTo ? getOrgUserById(assignedTo) : void 0;
  const contributorsUsers = contributors.map((contributor) => getOrgUserById(contributor.userId));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-sm", children: [
    assignedTo ? /* @__PURE__ */ jsxRuntimeExports.jsx(AvatarWithTooltip, { user: assignedUser }) : null,
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "lg:flex items-center gap-xs group/contributors hidden", children: contributorsUsers.map(
      (user, idx) => user ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "w-4 group-hover/contributors:w-9 rotate-0 overflow-visible transition-all",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(AvatarWithTooltip, { user })
        },
        user.userId
      ) : null
    ) })
  ] });
};
const AvatarWithTooltip = ({ user, className }) => {
  const { t: t2 } = useTranslation(["cases"]);
  const avatar = /* @__PURE__ */ jsxRuntimeExports.jsx(Avatar, { size: "s", firstName: user?.firstName, lastName: user?.lastName }, user?.userId);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Tooltip.Default,
    {
      content: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-row items-center gap-xs", children: [
        avatar,
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-grey-primary text-xs font-normal capitalize", children: getFullName(user) || t2("cases:case_detail.unknown_user") })
      ] }, user?.userId ?? 0),
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex w-fit flex-row items-center gap-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("border-purple-border rounded-full", className), children: avatar }) })
    }
  );
};
const PaginationRow = ({
  ref,
  casesQuery,
  currentPage,
  currentLimit,
  setCurrentPage,
  setLimit,
  className
}) => {
  const { t: t$32 } = useTranslation(["cases"]);
  const pagesRanges = reactExports.useMemo(() => {
    if (!casesQuery.data?.pages) return [];
    const pagesStartIndexes = t$e(
      casesQuery.data.pages,
      t$9(
        (_, index) => t$e(
          casesQuery.data.pages.slice(0, index),
          t$1((page) => page?.items.length ?? 0)
        )
      )
    );
    return casesQuery.data.pages.map((page, index) => {
      if (!page || page.items.length === 0) {
        return {
          startIndex: 0,
          endIndex: 0
        };
      }
      const startIndex = pagesStartIndexes[index] !== void 0 ? pagesStartIndexes[index] + 1 : 0;
      const pageLength = page?.items.length !== void 0 ? page?.items.length - 1 : 0;
      return {
        startIndex,
        endIndex: startIndex + pageLength
      };
    });
  }, [casesQuery.data?.pages]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Page.StickyFooter, { ref, surface: "page", className, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-xs", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t$32("cases:list.results_per_page") }),
      [25, 50, 100].map((limit) => {
        const isActive = limit === currentLimit;
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "secondary",
            appearance: "stroked",
            size: "medium",
            className: cn(isActive && "border-purple-primary text-purple-primary"),
            onClick: () => {
              if (!isActive) {
                setLimit(limit);
              }
            },
            children: limit
          },
          `pagination-limit-${limit}`
        );
      })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-xs", children: [
      casesQuery.isFetchingNextPage ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Loading..." }) : pagesRanges[currentPage] ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        "From ",
        pagesRanges[currentPage].startIndex,
        " to ",
        pagesRanges[currentPage].endIndex
      ] }) : null,
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          mode: "icon",
          size: "medium",
          variant: "secondary",
          appearance: "stroked",
          disabled: currentPage === 0,
          onClick: () => {
            setCurrentPage(currentPage - 1);
          },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "arrow-left", className: "size-5" })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          mode: "icon",
          size: "medium",
          variant: "secondary",
          appearance: "stroked",
          disabled: currentPage === casesQuery.data.pages.length - 1 && !casesQuery.hasNextPage || casesQuery.isFetchingNextPage,
          onClick: () => {
            if (currentPage === casesQuery.data.pages.length - 1) {
              casesQuery.fetchNextPage();
            }
            setCurrentPage(currentPage + 1);
          },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "arrow-right", className: "size-5" })
        }
      )
    ] })
  ] });
};
const columnHelper = createColumnHelper();
function CasesList({
  sorting,
  onSortingChange,
  casesQuery,
  limit,
  setLimit,
  currentPage,
  setCurrentPage,
  fromInboxId,
  selectable,
  selectionProps,
  tableProps
}) {
  const { t: t2 } = useTranslation(["cases"]);
  const language = useFormatLanguage();
  const formatDateTime = useFormatDateTime();
  const lastPageRef = reactExports.useRef(0);
  const lastActionRef = reactExports.useRef(null);
  const cases = casesQuery.data?.pages[currentPage]?.items ?? casesQuery.data?.pages[lastPageRef.current]?.items ?? [];
  const { orgTags } = useOrganizationTags();
  reactExports.useEffect(() => {
    if (casesQuery.data?.pages[currentPage]?.items) {
      lastPageRef.current = currentPage;
    }
  }, [casesQuery.data?.pages[currentPage]?.items, currentPage]);
  const sortingState = reactExports.useMemo(() => [{ id: "created_at", desc: sorting === "DESC" }], [sorting]);
  const handleSortingChange = (updater) => {
    const next = typeof updater === "function" ? updater(sortingState) : updater;
    const sort = next.find((entry) => entry.id === "created_at") ?? next[0];
    if (!sort) return;
    onSortingChange(sort.desc ? "DESC" : "ASC");
  };
  const columns = reactExports.useMemo(
    () => [
      columnHelper.display({
        id: "status",
        header: ({ table: table2 }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex items-center gap-sm ps-md", children: [
          selectable ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute start-0 top-1/2 -translate-y-1/2 -translate-x-1/2 p-md",
              onClick: (e) => {
                e.stopPropagation();
                table2.getToggleAllPageRowsSelectedHandler()(e);
                lastActionRef.current = null;
              },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Checkbox,
                {
                  "aria-label": t2("cases:inbox.select_all_cases"),
                  checked: table2.getIsAllPageRowsSelected() ? true : table2.getIsSomePageRowsSelected() ? "indeterminate" : false
                }
              )
            }
          ) : null,
          t2("cases:inbox.heading.status")
        ] }),
        size: 100,
        minSize: 80,
        enableSorting: false,
        enableResizing: false,
        cell: ({ row, table: table2 }) => {
          const isSelected = row.getIsSelected();
          const handleSelect = (e) => {
            e.stopPropagation();
            const id = row.id;
            const lastAction = lastActionRef.current;
            const isIntendingMultiSelection = e.shiftKey;
            const isMultiSelectionPossible = lastAction !== null && lastAction[1] === "select" && !isSelected;
            if (isIntendingMultiSelection && isMultiSelectionPossible) {
              const rows2 = table2.getRowModel().rows;
              const lastClickedIdIndex = rows2.findIndex((r) => r.id === lastAction[0]);
              if (lastClickedIdIndex >= 0) {
                const currentIndex = row.index;
                const [start, end] = currentIndex > lastClickedIdIndex ? [lastClickedIdIndex, currentIndex] : [currentIndex, lastClickedIdIndex];
                table2.setRowSelection((prev) => {
                  const next = { ...prev };
                  for (let i = start; i <= end; i++) {
                    const rangeRow = rows2[i];
                    if (rangeRow) next[rangeRow.id] = true;
                  }
                  return next;
                });
                lastActionRef.current = [id, "select"];
                return;
              }
            }
            row.toggleSelected(!isSelected);
            lastActionRef.current = [id, isSelected ? "unselect" : "select"];
          };
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex items-center ps-md", children: [
            selectable ? /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: cn(
                  "absolute start-0 top-1/2 -translate-x-1/2 -translate-y-1/2 p-md opacity-0 focus-within:opacity-100 group-hover/row:opacity-100",
                  isSelected && "opacity-100"
                ),
                onClick: handleSelect,
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Checkbox,
                  {
                    "aria-label": t2("cases:inbox.select_case", { name: row.original.name }),
                    checked: isSelected
                  }
                )
              }
            ) : null,
            /* @__PURE__ */ jsxRuntimeExports.jsx(CaseStatusBadgeV2, { status: row.original.status, variant: "icon-only" })
          ] });
        }
      }),
      columnHelper.accessor("name", {
        id: "name",
        header: t2("cases:inbox.heading.name"),
        size: 280,
        minSize: 160,
        enableSorting: false,
        cell: ({ getValue }) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "group-hover/row-link:text-purple-primary group-hover/row-link:underline", children: getValue() })
      }),
      columnHelper.accessor("type", {
        id: "type",
        header: t2("cases:inbox.heading.type"),
        size: 64,
        minSize: 64,
        enableSorting: false,
        enableResizing: false,
        cell: ({ getValue }) => {
          const type = getValue();
          return /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip.Default, { content: t2(`cases:inbox.tooltip.${type}`), children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Icon,
            {
              icon: type === "continuous_screening" ? "scan-eye" : "case-manager",
              className: cn("size-5", {
                "text-blue-58": type === "decision",
                "text-grey-secondary": type === "continuous_screening"
              })
            }
          ) });
        }
      }),
      columnHelper.display({
        id: "review_status",
        header: t2("cases:inbox.heading.review_status"),
        size: 180,
        minSize: 140,
        enableSorting: false,
        cell: ({ row }) => {
          const { outcome, reviewLevel } = row.original;
          const renderStatus = (icon, color, label) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center size-6 rounded-full border border-grey-placeholder", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon, className: "size-4 text-grey-placeholder" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { color, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: label }) })
          ] });
          return M({ outcome, reviewLevel }).with(
            { outcome: "confirmed_risk" },
            ({ outcome: outcome2 }) => renderStatus("user", "red", t2(`cases:case.outcome.${outcome2}`))
          ).with(
            { outcome: "valuable_alert" },
            ({ outcome: outcome2 }) => renderStatus("user", "yellow", t2(`cases:case.outcome.${outcome2}`))
          ).with(
            { outcome: "false_positive" },
            ({ outcome: outcome2 }) => renderStatus("user", "green", t2(`cases:case.outcome.${outcome2}`))
          ).with(
            { reviewLevel: "escalate" },
            ({ reviewLevel: reviewLevel2 }) => renderStatus("wand", "red", t2(`cases:case.review_level.${reviewLevel2}`))
          ).with(
            { reviewLevel: "investigate" },
            ({ reviewLevel: reviewLevel2 }) => renderStatus("wand", "yellow", t2(`cases:case.review_level.${reviewLevel2}`))
          ).with(
            { reviewLevel: "probable_false_positive" },
            ({ reviewLevel: reviewLevel2 }) => renderStatus("wand", "green", t2(`cases:case.review_level.${reviewLevel2}`))
          ).otherwise(() => "-");
        }
      }),
      columnHelper.accessor("createdAt", {
        id: "created_at",
        header: t2("cases:inbox.heading.date"),
        size: 200,
        minSize: 160,
        enableSorting: true,
        cell: ({ getValue, row }) => {
          const createdAt = getValue();
          const dueAt = row.original.dueAt;
          const hasDueAt = !isUnsetTimestamp(dueAt);
          const formattedCreatedAt = formatDateTime(createdAt, {
            dateStyle: "long",
            timeStyle: "short"
          });
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            Tooltip.Default,
            {
              content: hasDueAt && dueAt ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-xs", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t2("cases:inbox.tooltip.created", { date: formattedCreatedAt }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t2("cases:inbox.tooltip.due", {
                  date: formatDateTime(dueAt, {
                    dateStyle: "long",
                    timeStyle: "short"
                  })
                }) })
              ] }) : formattedCreatedAt,
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("time", { dateTime: createdAt, children: formatDateRelative(createdAt, { language }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(CaseDueDateUrgencyTag, { dueAt, status: row.original.status })
              ] })
            }
          );
        }
      }),
      columnHelper.accessor("tags", {
        id: "tags",
        header: t2("cases:inbox.heading.tags"),
        size: 160,
        minSize: 100,
        enableSorting: false,
        cell: ({ getValue }) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-sm", children: getValue().map((tagItem) => {
          const tag = orgTags.find((orgTag) => orgTag.id === tagItem.tagId);
          if (!tag) return null;
          return /* @__PURE__ */ jsxRuntimeExports.jsx(TagPreview, { name: tag.name }, tag.id);
        }) })
      }),
      columnHelper.display({
        id: "assigned",
        header: () => /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden lg:inline", children: t2("cases:inbox.heading.assigned_and_contributors") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "lg:hidden", children: t2("cases:inbox.heading.assignee") })
        ] }),
        size: 140,
        minSize: 100,
        enableSorting: false,
        cell: ({ row }) => /* @__PURE__ */ jsxRuntimeExports.jsx(AssignedContributors, { assignedTo: row.original.assignedTo, contributors: row.original.contributors })
      })
    ],
    [t2, selectable, formatDateTime, language, orgTags]
  );
  const { table, getBodyProps, rows, getContainerProps } = useTable({
    data: cases,
    columns,
    state: {
      sorting: sortingState,
      rowSelection: selectionProps?.rowSelection
    },
    columnResizeMode: "onChange",
    enableRowSelection: selectable,
    enableSorting: true,
    enableSortingRemoval: false,
    manualSorting: true,
    onSortingChange: handleSortingChange,
    ...tableProps,
    rowLink: (caseItem) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/cases/$caseId",
        params: { caseId: fromUUIDtoSUUID(caseItem.id) },
        search: {
          fromInbox: fromInboxId === MY_INBOX_ID ? void 0 : fromUUIDtoSUUID(fromInboxId)
        }
      }
    )
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col text-small bg-surface-card", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Table.Container, { ...getContainerProps(), className: "bg-surface-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Table.Header, { headerGroups: table.getHeaderGroups() }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Table.Body, { ...getBodyProps(), children: rows.map((row) => /* @__PURE__ */ jsxRuntimeExports.jsx(Table.Row, { row }, row.id)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(StickyComponent, { sentinelClassName: "bottom-0 h-px", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      PaginationRow,
      {
        casesQuery,
        currentPage,
        currentLimit: limit,
        setCurrentPage,
        setLimit,
        className: "sentinel-intersect:shadow-sticky-bottom sentinel-intersect:border-grey-border"
      }
    ) })
  ] });
}
const FavoriteInboxButton = ({ inboxId, isFavorite, onToggle }) => {
  const { t: t2 } = useTranslation(["cases"]);
  const handleClick = () => {
    if (isFavorite) {
      setPreferencesCookie("favInbox", void 0);
      onToggle(void 0);
    } else {
      const inboxIdToStore = inboxId === MY_INBOX_ID ? inboxId : fromUUIDtoSUUID(inboxId);
      setPreferencesCookie("favInbox", inboxIdToStore);
      onToggle(inboxIdToStore);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Button,
    {
      variant: isFavorite ? "primary" : "secondary",
      appearance: "stroked",
      size: "medium",
      onClick: handleClick,
      title: isFavorite ? t2("cases:inbox.remove_favorite") : t2("cases:inbox.set_as_favorite"),
      className: "group",
      children: [
        t2("cases:inbox.favorite"),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Icon,
          {
            icon: "star",
            className: isFavorite ? "size-5 fill-purple-primary text-purple-primary group-hover:fill-white group-hover:text-white dark:fill-purple-hover dark:text-purple-hover dark:group-hover:fill-grey-white dark:group-hover:text-grey-white" : "size-5 fill-none text-grey-secondary group-hover:text-grey-primary"
          }
        )
      ]
    }
  );
};
const AssigneeFilterMenuItem = ({ onSelect }) => {
  const { orgUsers } = useOrganizationUsers();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Combobox, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.List, { children: orgUsers.map((user) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      MenuCommand.Item,
      {
        value: `${user.userId} ${user.firstName} ${user.lastName}`,
        onSelect: () => onSelect(user.userId),
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Avatar, { size: "xs", firstName: user.firstName, lastName: user.lastName }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: `${t(user.firstName)} ${t(user.lastName)}` })
        ] })
      },
      user.userId
    )) })
  ] });
};
const DateRangeFilterMenu = ({ onSelect }) => {
  const { t: t2 } = useTranslation(["common", "cases"]);
  const [value, setValue] = reactExports.useState(null);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.List, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DateRangeFilter.Root, { dateRangeFilter: value, setDateRangeFilter: setValue, className: "grid", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DateRangeFilter.FromNowPicker, { title: t2("cases:filters.date_range.title") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "bg-grey-border", decorative: true, orientation: "vertical" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DateRangeFilter.Calendar, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "bg-grey-border col-span-3", decorative: true, orientation: "horizontal" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DateRangeFilter.Summary, { className: "col-span-3 row-span-1" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-grey-border flex gap-sm overflow-x-auto border-t p-sm justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      MenuCommand.HeadlessItem,
      {
        onSelect: () => {
          if (value) {
            onSelect(value);
          }
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { disabled: !value, size: "medium", children: t2("common:save") })
      }
    ) })
  ] });
};
const InboxFilterLabel = ({ name }) => {
  const { t: t2 } = useTranslation(["cases"]);
  return M(name).with("name", () => t2("cases:case.name")).with("statuses", () => t2("cases:filter.closed_only.label")).with("includeSnoozed", () => t2("cases:filter.include_snoozed.label")).with("excludeAssigned", () => t2("cases:filter.exclude_assigned.label")).with("assignee", () => t2("cases:filter.assignee.label")).with("dateRange", () => t2("cases:case.date")).with("tagId", () => t2("cases:filter.tags.label")).with("qualification", () => t2("cases:filter.qualification.label")).exhaustive();
};
const QualificationLevelFilterMenuItem = ({ onSelect }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.List, { children: qualificationLevels.map((level) => /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Item, { value: level, onSelect: () => onSelect(level), children: /* @__PURE__ */ jsxRuntimeExports.jsx(QualificationLevelLabel, { level }) }, level)) });
};
const QualificationLevelLabel = ({ level }) => {
  const { t: t2 } = useTranslation(["cases"]);
  const label = t2(`cases:filter.qualification.${level}`);
  const colorClass = level === "green" ? "text-green-primary" : level === "yellow" ? "text-yellow-primary" : "text-red-primary";
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: colorClass, children: label });
};
const TagsFilterMenuItem = ({ onSelect }) => {
  const { t: t2 } = useTranslation(["cases"]);
  const { orgTags } = useOrganizationTags();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Combobox, { placeholder: t2("cases:filter.tags.search_placeholder") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.List, { children: orgTags.map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Item, { value: tag.name, onSelect: () => onSelect(tag.id), children: /* @__PURE__ */ jsxRuntimeExports.jsx(TagPreview, { name: tag.name }) }, tag.id)) })
  ] });
};
const EDITABLE_FILTERS = [
  "dateRange",
  "assignee",
  "tagId",
  "qualification"
];
const ActivatedFilterItem = ({ filter, onUpdate, onClear }) => {
  const [open, setOpen] = reactExports.useState(false);
  const isEditable = EDITABLE_FILTERS.includes(filter[0]);
  const handleClearClick = useCallbackRef((e) => {
    e.stopPropagation();
    onClear();
  });
  const button = /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "h-8 bg-purple-background-light border border-purple-border rounded-md p-sm text-default flex items-center gap-xs", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DisplayFilterValue, { filter }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: handleClearClick, className: "cursor-pointer", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "cross", className: "size-4" }) })
  ] });
  if (isEditable) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(MenuCommand.Menu, { open, onOpenChange: setOpen, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Trigger, { children: button }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Content, { sameWidth: true, align: "start", sideOffset: 4, className: "max-h-[600px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.List, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(EditFilterContent, { filter, onUpdate }) }) })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "h-8 bg-purple-background-light border border-purple-border rounded-md p-sm text-default flex items-center gap-xs", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DisplayFilterValue, { filter }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: onClear, className: "cursor-pointer", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "x", className: "size-4" }) })
  ] });
};
const DisplayFilterValue = ({ filter }) => {
  const { t: t2, i18n } = useTranslation(["filters", "cases"]);
  const formatDateTime = useFormatDateTime();
  return M(filter).with(["name", z.string], ([name, value]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(InboxFilterLabel, { name }),
    ": ",
    value
  ] })).with(["statuses", z.array(z.string)], ([name, value]) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(InboxFilterLabel, { name }) })).with(["includeSnoozed", z.boolean], ([name]) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(InboxFilterLabel, { name }) })).with(["excludeAssigned", z.boolean], ([name]) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(InboxFilterLabel, { name }) })).with(["assignee", z.string], ([name, value]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(InboxFilterLabel, { name }),
    ": ",
    /* @__PURE__ */ jsxRuntimeExports.jsx(AssigneeFilterValue, { value })
  ] })).with(["dateRange", z.shape({ type: "static" })], ([name, value]) => {
    const startDate = formatDateTime(value.startDate);
    const endDate = formatDateTime(value.endDate);
    const diff = differenceInDays(new Date(value.endDate), new Date(value.startDate));
    const dateDisplay = diff <= 1 ? startDate : t2("filters:date_range.range_value", { startDate, endDate });
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(InboxFilterLabel, { name }),
      ": ",
      dateDisplay
    ] });
  }).with(["dateRange", z.shape({ type: "dynamic" })], ([name, value]) => {
    const duration = formatDuration(value.fromNow, i18n.language);
    const dateDisplay = t2("filters:date_range.duration", { duration });
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(InboxFilterLabel, { name }),
      ": ",
      dateDisplay
    ] });
  }).with(["tagId", z.string], ([name, tagId]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-xs", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(InboxFilterLabel, { name }),
    ": ",
    /* @__PURE__ */ jsxRuntimeExports.jsx(TagFilterValue, { tagId })
  ] })).with(["qualification", z.string], ([name, level]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-xs", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(InboxFilterLabel, { name }),
    ": ",
    /* @__PURE__ */ jsxRuntimeExports.jsx(QualificationLevelLabel, { level })
  ] })).exhaustive();
};
const AssigneeFilterValue = ({ value }) => {
  const { t: t2 } = useTranslation(["cases"]);
  const { orgUsers } = useOrganizationUsers();
  const user = orgUsers.find((user2) => user2.userId === value);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-xs", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Avatar, { size: "xs", firstName: user?.firstName, lastName: user?.lastName }),
    user ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: `${t(user.firstName)} ${t(user.lastName)}` }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t2("cases:case_detail.unknown_user") })
  ] });
};
const TagFilterValue = ({ tagId }) => {
  const { orgTags } = useOrganizationTags();
  const tag = orgTags.find((t2) => t2.id === tagId);
  return tag ? /* @__PURE__ */ jsxRuntimeExports.jsx(TagPreview, { name: tag.name }) : null;
};
const EditFilterContent = ({ filter, onUpdate }) => {
  return M(filter).with(["assignee", z.string], ([name]) => /* @__PURE__ */ jsxRuntimeExports.jsx(AssigneeFilterMenuItem, { onSelect: (userId) => onUpdate({ [name]: userId }) })).with(["dateRange", z.any], ([name]) => /* @__PURE__ */ jsxRuntimeExports.jsx(DateRangeFilterMenu, { onSelect: (value) => onUpdate({ [name]: value }) })).with(["tagId", z.string], ([name]) => /* @__PURE__ */ jsxRuntimeExports.jsx(TagsFilterMenuItem, { onSelect: (newTagId) => onUpdate({ [name]: newTagId }) })).with(["qualification", z.string], ([name]) => /* @__PURE__ */ jsxRuntimeExports.jsx(QualificationLevelFilterMenuItem, { onSelect: (level) => onUpdate({ [name]: level }) })).with(["name", z.string], ([name, value]) => null).with(["statuses", z.array(z.string)], ([name, value]) => null).with(["includeSnoozed", z.boolean], ([name]) => null).with(["excludeAssigned", z.boolean], ([name]) => null).exhaustive();
};
const DisplayFilterMenuItem = ({ filterName, onSelect }) => {
  return M(filterName).with("name", () => null).with("statuses", () => /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Item, { value: filterName, onSelect: () => onSelect({ [filterName]: ["closed"] }), children: /* @__PURE__ */ jsxRuntimeExports.jsx(InboxFilterLabel, { name: filterName }) })).with("includeSnoozed", () => /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Item, { value: filterName, onSelect: () => onSelect({ [filterName]: true }), children: /* @__PURE__ */ jsxRuntimeExports.jsx(InboxFilterLabel, { name: filterName }) })).with("excludeAssigned", () => /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Item, { value: filterName, onSelect: () => onSelect({ [filterName]: true }), children: /* @__PURE__ */ jsxRuntimeExports.jsx(InboxFilterLabel, { name: filterName }) })).with("assignee", () => /* @__PURE__ */ jsxRuntimeExports.jsx(
    MenuCommand.SubMenu,
    {
      arrow: false,
      hover: false,
      trigger: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(InboxFilterLabel, { name: filterName }) }),
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(AssigneeFilterMenuItem, { onSelect: (userId) => onSelect({ [filterName]: userId }) })
    }
  )).with("dateRange", () => /* @__PURE__ */ jsxRuntimeExports.jsx(
    MenuCommand.SubMenu,
    {
      arrow: false,
      hover: false,
      trigger: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(InboxFilterLabel, { name: filterName }) }),
      className: "max-h-[600px]",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(DateRangeFilterMenu, { onSelect: (value) => onSelect({ [filterName]: value }) })
    }
  )).with("tagId", () => /* @__PURE__ */ jsxRuntimeExports.jsx(
    MenuCommand.SubMenu,
    {
      arrow: false,
      hover: false,
      trigger: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(InboxFilterLabel, { name: filterName }) }),
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(TagsFilterMenuItem, { onSelect: (tagId) => onSelect({ [filterName]: tagId }) })
    }
  )).with("qualification", () => /* @__PURE__ */ jsxRuntimeExports.jsx(
    MenuCommand.SubMenu,
    {
      arrow: false,
      hover: false,
      trigger: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(InboxFilterLabel, { name: filterName }) }),
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(QualificationLevelFilterMenuItem, { onSelect: (level) => onSelect({ [filterName]: level }) })
    }
  )).exhaustive();
};
const FilterInboxSelector = ({ inboxes, selectedInbox, onSelectInbox }) => {
  const { t: t2 } = useTranslation(["cases"]);
  const [open, setOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(MenuCommand.Menu, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Trigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "primary", size: "medium", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        t2("cases:case.inbox"),
        ": ",
        selectedInbox.name
      ] }),
      selectedInbox.casesCount !== void 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-xs py-2xs rounded-full bg-surface-card border border-grey-border text-purple-primary dark:text-grey-primary text-small", children: [
        selectedInbox.casesCount,
        " cases"
      ] }) : null,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "caret-down", className: "size-4" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Content, { align: "start", sideOffset: 4, sameWidth: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.List, { children: inboxes.map((inbox) => /* @__PURE__ */ jsxRuntimeExports.jsxs(MenuCommand.Item, { value: `${inbox.id} ${inbox.name}`, onSelect: () => onSelectInbox(inbox), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-[20px_1fr] items-center gap-xs", children: [
        inbox.id === selectedInbox.id ? /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "tick", className: "size-4 text-purple-primary" }) : null,
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "col-start-2", children: inbox.name })
      ] }),
      inbox.casesCount !== void 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-small text-grey-secondary", children: t2("cases:inbox.cases_count", { count: inbox.casesCount }) }) : null
    ] }, inbox.id)) }) })
  ] });
};
const InboxFilterBar = ({
  inboxId,
  inboxes,
  filters,
  allowedFilters,
  updateFilters,
  onInboxSelect
}) => {
  const { t: t2 } = useTranslation(["cases"]);
  const allInboxes = [{ id: MY_INBOX_ID, name: t2("cases:inbox.my-inbox.link") }, ...inboxes];
  const selectedInbox = allInboxes.find((inbox) => inbox.id === inboxId) ?? allInboxes[0];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      FilterInboxSelector,
      {
        inboxes: allInboxes,
        selectedInbox,
        onSelectInbox: (inbox) => {
          onInboxSelect(inbox.id);
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(InboxFilters, { allowedFilters, filters, updateFilters })
  ] });
};
const InboxFilters = ({ allowedFilters, filters, updateFilters }) => {
  const { t: t2 } = useTranslation(["filters"]);
  const [open, setOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    filters.map((filter) => {
      const [filterName] = filter;
      const handleClear = () => updateFilters({ [filterName]: void 0 });
      return /* @__PURE__ */ jsxRuntimeExports.jsx(ActivatedFilterItem, { onUpdate: updateFilters, onClear: handleClear, filter }, filterName);
    }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(MenuCommand.Menu, { open, onOpenChange: setOpen, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Trigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "secondary", size: "medium", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "plus", className: "size-4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t2("filters:ds.addNewFilter.label") })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Content, { sameWidth: true, align: "start", sideOffset: 4, children: /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.List, { children: allowedFilters.map((filter) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        DisplayFilterMenuItem,
        {
          filterName: filter,
          onSelect: (filters2) => {
            updateFilters(filters2);
            setOpen(false);
          }
        },
        filter
      )) }) })
    ] })
  ] });
};
const useGetCasesQuery = (inboxId, filters, limit, order) => {
  const getCases = useServerFn(getCasesFn);
  return useInfiniteQuery({
    queryKey: ["cases", "get-cases", inboxId, filters, limit, order],
    queryFn: async ({ pageParam }) => {
      const result = await getCases({
        data: {
          inboxId,
          ...filters ?? {},
          offsetId: pageParam ?? void 0,
          limit,
          order
        }
      });
      return result;
    },
    initialPageParam: null,
    getNextPageParam: (page, _pages) => {
      return page?.hasNextPage ? page.items[page.items.length - 1]?.id : null;
    },
    placeholderData: keepPreviousData
  });
};
const useMassUpdateCasesMutation = () => {
  const massUpdateCases = useServerFn(massUpdateCasesFn);
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["cases", "mass-update"],
    mutationFn: async (payload) => massUpdateCases({ data: payload }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cases"] });
    }
  });
};
const useCreateCaseMutation = () => {
  const createCase = useServerFn(createCaseFn);
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["cases", "create-case"],
    mutationFn: async (payload) => createCase({ data: payload }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cases"] });
    }
  });
};
function CreateCase({ inboxId }) {
  const { t: t2 } = useTranslation(["cases", "common"]);
  const inboxesQuery = useGetInboxesQuery();
  const createCaseMutation = useCreateCaseMutation();
  const revalidate = useLoaderRevalidator();
  const queryClient = useQueryClient();
  const form = useForm({
    defaultValues: {
      name: "",
      inboxId: inboxId ?? ""
    },
    onSubmit: ({ value, formApi }) => {
      if (formApi.state.isValid) {
        createCaseMutation.mutateAsync(value).then(() => {
          queryClient.invalidateQueries({ queryKey: ["cases", "get-cases", value.inboxId] });
          revalidate();
        }).catch(() => {
          zt.error(t2("common:errors.unknown"));
        });
      }
    },
    validators: {
      onSubmit: createCasePayloadSchema
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Panel.Container, { size: "small", children: /* @__PURE__ */ jsxRuntimeExports.jsx("form", { onSubmit: handleSubmit(form), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Panel.Content, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Panel.Header, { children: t2("cases:case.new_case") }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-md", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        form.Field,
        {
          name: "name",
          validators: {
            onBlur: createCasePayloadSchema.shape.name,
            onChange: createCasePayloadSchema.shape.name
          },
          children: (field) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { name: field.name, className: "text-xs first-letter:capitalize", children: t2("cases:case.name") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              FormInput,
              {
                type: "text",
                name: field.name,
                defaultValue: field.state.value,
                onChange: (e) => field.handleChange(e.currentTarget.value),
                valid: field.state.meta.errors.length === 0,
                placeholder: t2("cases:case.new_case.placeholder")
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(FormErrorOrDescription, { errors: getFieldErrors(field.state.meta.errors) })
          ] })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        form.Field,
        {
          name: "inboxId",
          validators: {
            onBlur: createCasePayloadSchema.shape.inboxId,
            onChange: createCasePayloadSchema.shape.inboxId
          },
          children: (field) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 flex-col gap-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { name: field.name, className: "text-xs first-letter:capitalize", children: t2("cases:case.new_case.select_inbox") }),
            inboxesQuery.isSuccess ? /* @__PURE__ */ jsxRuntimeExports.jsx(
              SelectV2,
              {
                className: "w-full overflow-hidden",
                placeholder: "",
                value: field.state.value,
                options: inboxesQuery.data.inboxes.map(({ name, id }) => ({ label: name, value: id })),
                onChange: (inboxId2) => {
                  field.handleChange(inboxId2);
                }
              }
            ) : null,
            /* @__PURE__ */ jsxRuntimeExports.jsx(FormErrorOrDescription, { errors: getFieldErrors(field.state.meta.errors) })
          ] })
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Panel.Footer, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Panel.FooterButton, { type: "submit", label: t2("cases:case.new_case.create"), leadingIcon: "plus" }) })
  ] }) }) });
}
const BatchActions = ({ onMassUpdateCases, assignableUsers, inboxes, selectedCases }) => {
  const [open, setOpen] = reactExports.useState(false);
  const { t: t2 } = useTranslation(["common", "cases"]);
  const canReopen = selectedCases.some(({ status }) => status === "closed");
  const canClose = selectedCases.some(({ status }) => status !== "closed");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(MenuCommand.Menu, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Trigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "medium", variant: "secondary", appearance: "stroked", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "checked", className: "size-4" }),
      t2("common:actions"),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "arrow-right", className: "size-4" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Content, { side: "right", align: "start", sideOffset: 4, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(MenuCommand.List, { children: [
      canReopen ? /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Item, { onSelect: () => onMassUpdateCases(selectedCases, { action: "reopen" }), children: t2("cases:case.batch_actions.reopen") }) : null,
      canClose ? /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Item, { onSelect: () => onMassUpdateCases(selectedCases, { action: "close" }), children: t2("cases:case.batch_actions.lose") }) : null,
      assignableUsers.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.SubMenu, { trigger: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t2("cases:case.batch_actions.assign") }), children: /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.List, { children: assignableUsers.map(({ userId, firstName, lastName }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        MenuCommand.Item,
        {
          onSelect: () => onMassUpdateCases(selectedCases, { action: "assign", assigneeId: userId }),
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Avatar, { size: "xs", firstName, lastName }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: `${t(firstName)} ${t(lastName)}` })
          ] })
        },
        userId
      )) }) }) : null,
      inboxes.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.SubMenu, { trigger: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t2("cases:case.batch_actions.move_to_inbox") }), children: /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.List, { children: inboxes.map(({ id, name }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        MenuCommand.Item,
        {
          onSelect: () => onMassUpdateCases(selectedCases, { action: "move_to_inbox", inboxId: id }),
          children: name
        },
        id
      )) }) }) : null
    ] }) })
  ] });
};
function InboxEmptyState({ canManageInboxes }) {
  const { t: t2 } = useTranslation(["cases"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-grey-border bg-surface-card flex flex-col items-center gap-md rounded-lg border p-xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-purple-background-light flex size-12 items-center justify-center rounded-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "inbox", className: "text-purple-primary size-6" }) }),
    canManageInboxes ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-grey-secondary text-center text-s font-medium", children: t2("cases:inbox.need_first_inbox") }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/settings/inboxes", className: CtaV2ClassName({ variant: "primary", size: "medium" }), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "settings", className: "size-4" }),
        t2("cases:inbox.go_to_inbox_settings")
      ] })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(CalloutV2, { children: t2("cases:inbox.need_inbox_contact_admin") })
  ] });
}
const SelectCaseById = ({ onNavigate }) => {
  const [open, setOpen] = reactExports.useState(false);
  const [value, setValue] = reactExports.useState("");
  const { t: t2 } = useTranslation(["cases"]);
  const buttonText = t2("cases:search.select_by_id");
  const handleSubmitValue = () => {
    const valueTrimmed = value.trim();
    if (uuid().safeParse(valueTrimmed).success) {
      onNavigate(valueTrimmed);
    }
  };
  const handleKeyDown = (e) => {
    if (e.key !== "Enter") {
      return;
    }
    handleSubmitValue();
  };
  return open ? /* @__PURE__ */ jsxRuntimeExports.jsx(
    Input,
    {
      size: "medium",
      type: "text",
      placeholder: buttonText,
      value,
      onChange: (e) => setValue(e.target.value),
      onKeyDown: handleKeyDown,
      autoFocus: true,
      className: "w-85",
      endAdornment: "arrow-right",
      onEnterKeyDown: handleSubmitValue
    }
  ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "secondary", size: "medium", onClick: () => setOpen(true), children: [
    buttonText,
    /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "arrow-right", className: "size-4" })
  ] });
};
const ALLOWED_FILTERS = [
  "dateRange",
  "statuses",
  "qualification",
  "includeSnoozed",
  "excludeAssigned",
  "assignee",
  "tagId"
];
const EXCLUDED_FILTERS = ["excludeAssigned", "assignee"];
const InboxPage = ({
  inboxId,
  inboxes,
  inboxUsersIds,
  canViewNavigationTabs,
  query,
  limit,
  order,
  updatePage,
  onInboxSelect,
  favoriteInboxId: initialFavoriteInboxId
}) => {
  const { t: t2 } = useTranslation(["common", "cases"]);
  const [searchValue, setSearchValue] = reactExports.useState("");
  const [favoriteInboxId, setFavoriteInboxId] = reactExports.useState(initialFavoriteInboxId);
  const [isAddingCase, setIsAddingCase] = reactExports.useState(false);
  const { orgUsers } = useOrganizationUsers();
  const navigate = useAgnosticNavigation();
  const assignableUsers = reactExports.useMemo(() => {
    return orgUsers.filter(({ userId, role }) => inboxUsersIds.includes(userId) || role === "ADMIN");
  }, [orgUsers, inboxUsersIds]);
  const allowedFilters = reactExports.useMemo(() => {
    if (inboxId === MY_INBOX_ID) {
      return ALLOWED_FILTERS.filter((filter) => !EXCLUDED_FILTERS.includes(filter));
    }
    return ALLOWED_FILTERS;
  }, [inboxId]);
  const parsedQuery = useBase64Query(filtersSchema, query, {
    onUpdate(newQuery) {
      updatePage(newQuery, limit, order);
    }
  });
  const casesQuery = useGetCasesQuery(inboxId, parsedQuery.data, limit, order);
  const massUpdateCasesMutation = useMassUpdateCasesMutation();
  const queryClient = useQueryClient();
  const isSubsequentlyFetching = casesQuery.isFetchingNextPage || casesQuery.isFetching && !casesQuery.isPending;
  const [currentPage, setCurrentPage] = reactExports.useState(0);
  const lastFirstPageResultRef = reactExports.useRef(void 0);
  const hasChangedFiltersOrInboxRef = reactExports.useRef(false);
  reactExports.useEffect(() => {
    hasChangedFiltersOrInboxRef.current = true;
  }, [inboxId, query]);
  reactExports.useEffect(() => {
    if (lastFirstPageResultRef.current !== casesQuery.data?.pages[0]) {
      lastFirstPageResultRef.current = casesQuery.data?.pages[0];
      if (hasChangedFiltersOrInboxRef.current) {
        hasChangedFiltersOrInboxRef.current = false;
        setCurrentPage(0);
      }
    }
  }, [casesQuery.data?.pages[0]]);
  const casesForSelection = casesQuery.data?.pages[currentPage]?.items ?? [];
  const { hasSelectedRows, getSelectedRows, selectionProps, tableProps, setRowSelection } = useTanstackTableListSelection(casesForSelection, (row) => row.id);
  reactExports.useEffect(() => {
    setRowSelection({});
  }, [currentPage, limit, order, query, inboxId, setRowSelection]);
  const onMassUpdateCases = (items, params) => {
    const caseIds = items.map((item) => item.id);
    massUpdateCasesMutation.mutateAsync({ caseIds, ...params }).then((res) => {
      queryClient.invalidateQueries();
    });
  };
  const handleNavigate = (caseId) => {
    navigate({
      pathname: `/cases/${fromUUIDtoSUUID(caseId)}`,
      search: inboxId === MY_INBOX_ID ? void 0 : `?fromInbox=${fromUUIDtoSUUID(inboxId)}`
    });
  };
  if (inboxes.length === 0 && inboxId === MY_INBOX_ID) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Page.Main, { className: "flex flex-col", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Page.Content, { children: [
      canViewNavigationTabs ? /* @__PURE__ */ jsxRuntimeExports.jsx(CasesNavigationTabs, {}) : null,
      /* @__PURE__ */ jsxRuntimeExports.jsx(InboxEmptyState, { canManageInboxes: canViewNavigationTabs })
    ] }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Page.Main, { className: "flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: cn(
          "h-1 animate-gradient bg-linear-to-r from-transparent from-25% via-purple-primary to-transparent to-75% invisible",
          {
            visible: isSubsequentlyFetching
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Page.Content, { width: "table", children: [
      canViewNavigationTabs ? /* @__PURE__ */ jsxRuntimeExports.jsx(CasesNavigationTabs, {}) : null,
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-md relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-sm items-center", children: [
            hasSelectedRows && casesQuery.isSuccess ? /* @__PURE__ */ jsxRuntimeExports.jsx(
              BatchActions,
              {
                selectedCases: getSelectedRows(),
                inboxes,
                assignableUsers,
                onMassUpdateCases
              }
            ) : null,
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              InboxFilterBar,
              {
                inboxId,
                inboxes,
                allowedFilters,
                filters: parsedQuery.asArray,
                updateFilters: parsedQuery.update,
                onInboxSelect
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-sm items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              FavoriteInboxButton,
              {
                inboxId,
                isFavorite: favoriteInboxId === (inboxId === MY_INBOX_ID ? inboxId : fromUUIDtoSUUID(inboxId)),
                onToggle: setFavoriteInboxId
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectCaseById, { onNavigate: handleNavigate }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SearchInput,
              {
                size: "medium",
                className: "w-60",
                placeholder: t2("cases:search.placeholder"),
                value: searchValue,
                onChange: setSearchValue,
                onEnterKeyDown: (value) => {
                  parsedQuery.update({ name: value });
                  setSearchValue("");
                }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                size: "medium",
                variant: "primary",
                appearance: "stroked",
                mode: "icon",
                "data-test": "create-case-trigger",
                onClick: () => {
                  setIsAddingCase(true);
                },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "plus", className: "size-4" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Panel.Root, { open: isAddingCase, onOpenChange: setIsAddingCase, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CreateCase, { inboxId: inboxId === MY_INBOX_ID ? null : inboxId }) })
          ] })
        ] }),
        M(casesQuery).with({ isPending: true }, () => {
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: " border border-grey-border rounded-md", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-13 border-b border-grey-border" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-30 bg-grey-background animate-pulse flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, { className: "size-12" }) })
          ] });
        }).with({ isError: true }, () => {
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-red-disabled bg-red-background text-red-primary mt-md rounded-sm border p-lg flex flex-col gap-sm items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t2("cases:errors.fetching_cases") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", onClick: () => casesQuery.refetch(), children: t2("common:retry") })
          ] });
        }).with({ isSuccess: true }, (successCasesQuery) => {
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            CasesList,
            {
              casesQuery: successCasesQuery,
              sorting: order,
              limit,
              setLimit: (newLimit) => updatePage(query, newLimit, order),
              onSortingChange: (newOrder) => updatePage(query, limit, newOrder),
              currentPage,
              setCurrentPage,
              fromInboxId: inboxId,
              selectable: true,
              selectionProps,
              tableProps
            },
            inboxId
          );
        }).exhaustive()
      ] })
    ] })
  ] });
};
function CasesInboxesPage() {
  const navigate = useNavigate();
  const {
    inboxId,
    inboxes,
    inboxUsersIds,
    canViewNavigationTabs,
    query,
    limit,
    order,
    favoriteInboxId
  } = Route$L.useLoaderData();
  const updatePage = (newQuery, newLimit, newOrder) => {
    navigate({
      to: ".",
      from: "/cases/inboxes/$inboxId",
      search: {
        q: newQuery !== "" ? newQuery : void 0,
        limit: newLimit !== DEFAULT_CASE_PAGINATION_SIZE ? newLimit : void 0,
        order: newOrder !== "DESC" ? newOrder : void 0
      },
      replace: true
    });
  };
  const onInboxSelect = (inboxId2) => {
    const inboxIdSUUID = inboxId2 === MY_INBOX_ID ? inboxId2 : fromUUIDtoSUUID(inboxId2);
    navigate({
      to: `/cases/inboxes/$inboxId`,
      params: {
        inboxId: inboxIdSUUID
      }
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(InboxPage, { inboxId, inboxes, inboxUsersIds, canViewNavigationTabs, query, limit, order, updatePage, onInboxSelect, favoriteInboxId });
}
export {
  CasesInboxesPage as component
};

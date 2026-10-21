import { Q as jsxRuntimeExports } from "./server.mjs";
import { S as Spinner } from "./Spinner-DmLieYoS.mjs";
import { a2 as M } from "./services-middleware-nMulUXHZ.mjs";
import { u as useTranslation, I as Icon, a as useFormatDateTime, T as Trans, c as clsx } from "./Tabs-CzpyUi7T.mjs";
import { T as Tag } from "./create-context-k6HmQ6bB.mjs";
const TestRunStatus = ({ status }) => {
  const { t } = useTranslation(["scenarios"]);
  return M(status).with("up", () => /* @__PURE__ */ jsxRuntimeExports.jsxs(Tag, { size: "big", color: "purple", className: "bg-purple-primary gap-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, { className: "text-grey-white size-3" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-s text-grey-white font-semibold", children: t("scenarios:testrun.status.up") })
  ] })).with("down", () => /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { size: "big", color: "red", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-s font-semibold", children: t("scenarios:testrun.status.down") }) })).with("unknown", () => /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { size: "big", color: "orange", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-s font-semibold", children: t("scenarios:testrun.status.unknown") }) })).with("pending", () => /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { size: "big", color: "yellow", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-s font-semibold", children: t("scenarios:testrun.status.pending") }) })).exhaustive();
};
const TestRunPeriod = ({
  startDate,
  endDate,
  className,
  ...props
}) => {
  const { t } = useTranslation(["common", "scenarios"]);
  const formatDateTime = useFormatDateTime();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: clsx("text-s inline-flex h-10 flex-row items-center gap-xs", className), ...props, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    Trans,
    {
      t,
      i18nKey: "common:from_to",
      components: {
        // Hack because remix cannot handle properly hydratation of Date
        Date: /* @__PURE__ */ jsxRuntimeExports.jsx("time", { suppressHydrationWarning: true, className: "font-semibold" })
      },
      values: {
        start_date: formatDateTime(startDate, { dateStyle: "short" }),
        end_date: formatDateTime(endDate, { dateStyle: "short" })
      }
    }
  ) });
};
const TestRunVersions = ({
  iterations,
  refIterationId,
  testIterationId
}) => {
  const { t } = useTranslation(["common"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-row items-center gap-xs", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Tag, { size: "big", color: "grey", className: "border-grey-border gap-xs border px-sm py-xs", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-grey-primary font-semibold", children: `V${iterations[refIterationId]?.version}` }),
      iterations[refIterationId]?.type === "live version" ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-purple-primary font-semibold", children: t("common:live") }) : null
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "arrow-range", className: "text-grey-primary size-5" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { size: "big", color: "grey", className: "border-grey-border border px-sm py-xs", children: `V${iterations[testIterationId]?.version}` })
  ] });
};
export {
  TestRunVersions as T,
  TestRunPeriod as a,
  TestRunStatus as b
};

import { a2 as useMatches, M as reactExports, Q as jsxRuntimeExports, ag as Outlet } from "./server.mjs";
import { L as LanguagePicker } from "./LanguagePicker-CJNlmdOJ.mjs";
import { u as useQueryClient } from "./query-BmG5BEas.mjs";
import { j as cva } from "./Tabs-CzpyUi7T.mjs";
import { L as Logo } from "./Logo-3vzUxSrh.mjs";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "./LoaderRevalidatorContext-BEuG7sHs.mjs";
import "./set-language-M5uuJ5P9.mjs";
import "./services-middleware-nMulUXHZ.mjs";
import "./short-uuid-fTZYJj_k.mjs";
import "node:crypto";
import "./useMutation-BOdeDeAR.mjs";
import "./router-KSC-NEr8.mjs";
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
import "./formatDistanceStrict-DEEeAR-Y.mjs";
import "./create-context-k6HmQ6bB.mjs";
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
import "./use-callback-ref-DoQNLci-.mjs";
import "./sharpstate.es-C0BW2AZi.mjs";
import "./useServerFn-oRH5Nw97.mjs";
import "./Select-Dg3p9vJ0.mjs";
import "./isNullish-B8pc8Ntu.mjs";
const layoutClassName = cva("flex h-screen bg-[#14120E]", {
  variants: {
    alignment: {
      reverse: "flex-row-reverse",
      default: null
    }
  },
  defaultVariants: {
    alignment: "default"
  }
});
function AuthLayout() {
  const matches = useMatches();
  const {
    alignment
  } = matches[matches.length - 1]?.staticData ?? {};
  const queryClient = useQueryClient();
  reactExports.useEffect(() => {
    queryClient.resetQueries();
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: layoutClassName({
    alignment
  }), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col grow gap-4xl justify-center items-center p-[120px]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Logo, { logo: "logo-standard", className: "text-[#F5EFE3] size-full h-16", preserveAspectRatio: "xMinYMid meet", "aria-labelledby": "marble" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[40px] text-[#DDA85A] font-medium text-center tracking-[-0.03em]", children: [
        "Monitor. Investigate. ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#F5EFE3]", children: "Report." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-[520px] text-center text-[18px] leading-[1.5] text-[#A39A8B]", children: "Transaction monitoring, sanctions screening and case management for MoneyBee." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[13px] text-[#A39A8B]/70", children: [
        "Powered by ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "underline", href: "https://github.com/checkmarble/marble", target: "_blank", rel: "noreferrer", children: "Marble" }),
        ", licensed under the Elastic License 2.0"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative bg-surface-card basis-[600px] px-[120px] py-[124px] grid place-items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-6 end-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LanguagePicker, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-[500px] w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) })
    ] })
  ] });
}
export {
  AuthLayout as component
};

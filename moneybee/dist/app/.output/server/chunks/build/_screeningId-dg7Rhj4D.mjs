import { Q as jsxRuntimeExports, ag as Outlet } from "./server.mjs";
import { u as useTranslation, I as Icon, B as Button } from "./Tabs-CzpyUi7T.mjs";
import { c as casesI18n } from "./cases-i18n-CKTv5qXV.mjs";
import { T as TabLink } from "./Navigation-Bu_HXTJe.mjs";
import { aT as Route$d, P as Page, B as BreadCrumbs } from "./router-KSC-NEr8.mjs";
import { u as useUploadScreeningFile, U as UploadFile } from "./upload-screening-file-B1nEkCUG.mjs";
import { f as fromUUIDtoSUUID } from "./short-uuid-fTZYJj_k.mjs";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "./services-middleware-nMulUXHZ.mjs";
import "node:crypto";
import "./use-callback-ref-DoQNLci-.mjs";
import "./sharpstate.es-C0BW2AZi.mjs";
import "./formatDistanceStrict-DEEeAR-Y.mjs";
import "./decisions-i18n-Cg4JM_3r.mjs";
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
import "./LoaderRevalidatorContext-BEuG7sHs.mjs";
import "./useFormDropzone-DXcqE7tO.mjs";
import "./index-CBe2FUD4.mjs";
import "./Modal-CpYmGWjB.mjs";
import "./hasAtLeast-BmuNoqMd.mjs";
import "./screenings-C_YbbaUO.mjs";
import "./useMutation-BOdeDeAR.mjs";
import "./useServerFn-oRH5Nw97.mjs";
function CaseSanctionReviewPage() {
  const {
    t
  } = useTranslation([...casesI18n, "common", "navigation"]);
  const {
    caseDetail,
    screening
  } = Route$d.useLoaderData();
  const {
    mutateAsync: uploadScreeningFile
  } = useUploadScreeningFile(screening.id);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Page.Main, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Page.Header, { className: "justify-between gap-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BreadCrumbs, { back: `/cases/${fromUUIDtoSUUID(caseDetail.id)}` }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex size-full flex-col overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Page.Container, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Page.Content, { width: "readable", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "bg-surface-card border-grey-border inline-flex flex-row gap-sm rounded-lg border p-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(TabLink, { labelTKey: "navigation:case_manager.hits", to: "./hits", Icon: (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { ...props, icon: "tip" }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(TabLink, { labelTKey: "navigation:case_manager.files", to: "./files", Icon: (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { ...props, icon: "attachment" }) }) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {})
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-surface-card border-t-grey-border flex shrink-0 flex-row items-center justify-end gap-md border-t p-md", children: /* @__PURE__ */ jsxRuntimeExports.jsx(UploadFile, { uploadFileEndpoint: uploadScreeningFile, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { className: "h-14 w-fit whitespace-nowrap", variant: "secondary", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "attachment", className: "size-5" }),
        t("cases:add_file")
      ] }) }) })
    ] })
  ] });
}
export {
  CaseSanctionReviewPage as component
};

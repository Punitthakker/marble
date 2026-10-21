import { Q as jsxRuntimeExports } from "./server.mjs";
import { u as useOrganizationUsers } from "./organization-users-CEJGnALa.mjs";
import { g as getFullName } from "./user-Dgp6KqPL.mjs";
import { a as useFormatDateTime } from "./Tabs-CzpyUi7T.mjs";
import { A as Avatar } from "./Avatar-DDGL3Siw.mjs";
const CommentLine = ({ comment }) => {
  const formatDateTime = useFormatDateTime();
  const { getOrgUserById } = useOrganizationUsers();
  const user = getOrgUserById(comment.authorId);
  const fullName = getFullName(user);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col text-s gap-sm font-normal", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-xs", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Avatar, { size: "xs", firstName: user?.firstName, lastName: user?.lastName }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-baseline gap-xs", children: [
        fullName,
        /* @__PURE__ */ jsxRuntimeExports.jsx("time", { className: "text-grey-secondary text-xs", dateTime: comment.createdAt, children: formatDateTime(comment.createdAt, { dateStyle: "short", timeStyle: "short" }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: comment.comment })
  ] }, comment.id);
};
export {
  CommentLine as C
};

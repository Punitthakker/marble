import { Q as jsxRuntimeExports } from "./server.mjs";
import { L as Link } from "./router-KSC-NEr8.mjs";
import { u as useTranslation, j as cva, c as clsx } from "./Tabs-CzpyUi7T.mjs";
const navigationI18n = ["navigation"];
const sidebarLink = cva("text-s flex flex-row items-center gap-sm rounded-xs p-sm font-medium w-full", {
  variants: {
    isActive: {
      true: "bg-purple-background text-purple-primary dark:bg-grey-background-light dark:text-purple-hover",
      false: "text-grey-primary hover:bg-purple-background hover:text-purple-primary dark:text-grey-primary dark:hover:bg-grey-background-light dark:hover:text-purple-hover"
    }
  },
  defaultVariants: {
    isActive: false
  }
});
function SidebarLink({ Icon, labelTKey, to, children, className }) {
  const { t } = useTranslation(navigationI18n);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Link,
    {
      className: sidebarLink({ className }),
      activeProps: { className: sidebarLink({ isActive: true, className }) },
      to,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "size-6 shrink-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "line-clamp-1 text-start opacity-0 transition-opacity group-hover/sidebar:opacity-100 delay-400 group-hover/sidebar:delay-200", children: t(labelTKey) }),
        children
      ]
    }
  );
}
function TabLink({ Icon, labelTKey, to }) {
  const { t } = useTranslation(navigationI18n);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Link,
    {
      className: clsx(
        "text-s flex flex-row items-center gap-sm rounded-sm px-md py-sm font-medium",
        "text-grey-primary hover:bg-purple-background hover:text-purple-primary dark:text-grey-primary dark:hover:bg-grey-background-light dark:hover:text-purple-hover"
      ),
      activeProps: {
        className: clsx(
          "text-s flex flex-row items-center gap-sm rounded-sm px-md py-sm font-medium",
          "bg-purple-background text-purple-primary dark:bg-grey-background-light dark:text-purple-hover"
        )
      },
      to,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "size-6 shrink-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "first-letter:capitalize", children: t(labelTKey) })
      ]
    }
  );
}
export {
  SidebarLink as S,
  TabLink as T,
  navigationI18n as n
};

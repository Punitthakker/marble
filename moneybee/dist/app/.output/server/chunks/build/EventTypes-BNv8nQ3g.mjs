import { Q as jsxRuntimeExports, M as reactExports } from "./server.mjs";
import { H as Highlight } from "./Highlight-NVjBw0RI.mjs";
import { aH as eventTypes } from "./services-middleware-nMulUXHZ.mjs";
import { c as clsx, u as useTranslation, M as MenuCommand, I as Icon } from "./Tabs-CzpyUi7T.mjs";
import { m as matchSorter } from "./match-sorter.esm-BRMYSlZQ.mjs";
import { T as Tooltip } from "./router-KSC-NEr8.mjs";
import { t as toggle } from "./array-BFSjnO9c.mjs";
function SelectEvents({
  selectedEventTypes,
  className,
  webhookStatus,
  name,
  onChange,
  onBlur,
  disabled
}) {
  const { t } = useTranslation(["settings"]);
  const [open, setOpen] = reactExports.useState(false);
  const [searchValue, setSearchValue] = reactExports.useState("");
  const deferredSearchValue = reactExports.useDeferredValue(searchValue);
  const matches = reactExports.useMemo(() => matchSorter(eventTypes, deferredSearchValue), [deferredSearchValue]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    MenuCommand.Menu,
    {
      persistOnSelect: true,
      open,
      onOpenChange: (next) => {
        setOpen(next);
        if (!next) setSearchValue("");
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Trigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          MenuCommand.SelectButton,
          {
            name,
            disabled,
            onBlur,
            className: clsx("h-auto min-h-10", className),
            children: selectedEventTypes.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(EventTypes, { eventTypes: selectedEventTypes }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-grey-disabled text-s", children: t("settings:webhooks.event_types.placeholder") })
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(MenuCommand.Content, { align: "start", sideOffset: 4, sameWidth: true, className: "z-50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCommand.Combobox, { onValueChange: setSearchValue }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(MenuCommand.List, { children: [
            matches.map((event) => {
              const isSelected = selectedEventTypes.includes(event);
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                MenuCommand.Item,
                {
                  value: event,
                  disabled: webhookStatus === "restricted" && !event.includes("decision."),
                  onSelect: () => onChange?.(toggle(selectedEventTypes, event)),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(EventType, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Highlight, { text: event, query: deferredSearchValue }) }),
                    isSelected ? /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "tick", className: "text-purple-primary size-6 shrink-0" }) : null
                  ]
                },
                event
              );
            }),
            matches.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-grey-secondary flex items-center justify-center p-sm", children: t("settings:webhooks.event_types.empty_matches") }) : null
          ] })
        ] })
      ]
    }
  );
}
function EventTypes({ className, eventTypes: eventTypes2 }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Tooltip.Default,
    {
      content: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex max-w-sm flex-wrap gap-xs", children: eventTypes2.map((event) => /* @__PURE__ */ jsxRuntimeExports.jsx(EventType, { children: event }, event)) }),
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: clsx("flex w-fit flex-wrap items-center gap-xs", className), children: [
        eventTypes2.slice(0, 3).map((event) => /* @__PURE__ */ jsxRuntimeExports.jsx(EventType, { children: event }, event)),
        eventTypes2.length > 3 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-grey-primary bg-grey-background flex h-6 items-center rounded-full px-xs text-xs font-normal", children: `+${eventTypes2.length - 3}` }) : null
      ] })
    }
  );
}
function EventType({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-grey-background flex h-6 items-center rounded-sm px-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-grey-primary line-clamp-1 text-xs font-normal", children }) });
}
export {
  EventTypes as E,
  SelectEvents as S
};

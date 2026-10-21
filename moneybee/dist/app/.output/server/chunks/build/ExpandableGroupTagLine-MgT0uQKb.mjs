import { M as reactExports, Q as jsxRuntimeExports } from "./server.mjs";
import { d as cn, I as Icon } from "./Tabs-CzpyUi7T.mjs";
import { P as Popover } from "./Popover-Cp1XdSV2.mjs";
import { T as Tag } from "./create-context-k6HmQ6bB.mjs";
const useIsomorphicLayoutEffect = reactExports.useEffect;
const OVERFLOW_TAG_WIDTH_PX = 36;
function getElementWidth(el) {
  const { width: rectWidth } = el.getBoundingClientRect();
  return Math.max(rectWidth, el.offsetWidth || 0, el.scrollWidth || 0);
}
const overflowButtonClassName = "cursor-pointer shrink-0 hover:bg-purple-primary/20 transition-colors min-w-min";
const DefaultMoreButton = function DefaultMoreButton2({
  ref,
  overflow,
  onExpand
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Tag, { ref, color: "purple", size: "small", className: overflowButtonClassName, onClick: onExpand, children: [
    "+",
    overflow
  ] });
};
function DefaultLessButton({ onCollapse }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { color: "purple", size: "small", className: overflowButtonClassName, onClick: onCollapse, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "minus", className: "size-3" }) });
}
function ExpandableGroupTagLine({
  items,
  moreButton,
  lessButton,
  classname,
  trailing,
  overflowTagWidth = OVERFLOW_TAG_WIDTH_PX,
  overflowBehavior = "expand"
}) {
  const [isExpanded, setIsExpanded] = reactExports.useState(false);
  const [isPopoverOpen, setIsPopoverOpen] = reactExports.useState(false);
  const containerRef = reactExports.useRef(null);
  const ghostRef = reactExports.useRef(null);
  const [maxVisible, setMaxVisible] = reactExports.useState(1);
  const [renderedCount, setRenderedCount] = reactExports.useState(0);
  const [isMeasured, setIsMeasured] = reactExports.useState(false);
  useIsomorphicLayoutEffect(() => {
    setIsMeasured(false);
    setMaxVisible(1);
    setRenderedCount(0);
  }, [items.length]);
  useIsomorphicLayoutEffect(() => {
    if (isExpanded) return;
    const container = containerRef.current;
    const ghost = ghostRef.current;
    if (!container || !ghost) return;
    const recalculate = () => {
      const availableWidth = container.offsetWidth;
      if (availableWidth === 0) return;
      const gap = parseFloat(getComputedStyle(ghost).gap) || 4;
      const tagEls = Array.from(ghost.children);
      let used = 0;
      let count = 0;
      for (let i = 0; i < tagEls.length; i++) {
        const tw = getElementWidth(tagEls[i]);
        const gapBefore = i > 0 ? gap : 0;
        const isLast = i === tagEls.length - 1;
        const needed = used + gapBefore + tw + (isLast ? 0 : gap + overflowTagWidth);
        if (needed <= availableWidth) {
          used += gapBefore + tw;
          count++;
        } else {
          break;
        }
      }
      const nextMaxVisible = Math.max(count, 1);
      const nextRenderedCount = tagEls.length;
      setRenderedCount(nextRenderedCount);
      setMaxVisible(nextMaxVisible);
      setIsMeasured(true);
    };
    const observer = new ResizeObserver(recalculate);
    observer.observe(container);
    recalculate();
    return () => observer.disconnect();
  }, [isExpanded, items.length, overflowTagWidth]);
  const effectiveMaxVisible = isMeasured ? maxVisible : Math.min(1, items.length);
  const effectiveRenderedCount = isMeasured ? renderedCount : items.length;
  const canExpandInline = overflowBehavior === "expand";
  const overflow = canExpandInline && isExpanded ? 0 : Math.max(0, effectiveRenderedCount - effectiveMaxVisible);
  const visibleItems = canExpandInline && isExpanded ? items : overflow > 0 ? items.slice(0, effectiveMaxVisible) : items;
  const overflowItems = overflow > 0 ? items.slice(effectiveMaxVisible) : [];
  const handleExpand = (event) => {
    event.stopPropagation();
    setIsExpanded(true);
  };
  const handleCollapse = (event) => {
    event.stopPropagation();
    setIsExpanded(false);
  };
  const handleShowOverflow = (event) => {
    event.stopPropagation();
    setIsPopoverOpen(true);
  };
  const moreButtonNode = overflow > 0 ? moreButton ? moreButton(overflow, overflowBehavior === "popover" ? handleShowOverflow : handleExpand) : /* @__PURE__ */ jsxRuntimeExports.jsx(
    DefaultMoreButton,
    {
      overflow,
      onExpand: overflowBehavior === "popover" ? handleShowOverflow : handleExpand
    }
  ) : null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: containerRef, className: "relative min-w-0 w-full flex-1", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        ref: ghostRef,
        className: cn(
          "pointer-events-none invisible absolute top-0 end-0 start-0 flex items-center gap-sm overflow-x-hidden [&>*]:shrink-0",
          classname
        ),
        "aria-hidden": "true",
        children: items
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: cn(
          "flex min-w-0 items-center gap-sm [&>*]:shrink-0",
          isExpanded ? "flex-wrap" : "overflow-hidden",
          classname
        ),
        children: [
          visibleItems,
          overflowBehavior === "popover" && overflow > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Popover.Root, { open: isPopoverOpen, onOpenChange: setIsPopoverOpen, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Popover.Trigger, { asChild: true, children: moreButtonNode }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Popover.Content, { sideOffset: 4, align: "end", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("flex max-h-[400px] flex-col gap-sm overflow-auto p-md", classname), children: overflowItems }) })
          ] }) : moreButtonNode,
          canExpandInline && isExpanded && (lessButton ? lessButton(handleCollapse) : /* @__PURE__ */ jsxRuntimeExports.jsx(DefaultLessButton, { onCollapse: handleCollapse })),
          trailing
        ]
      }
    )
  ] });
}
export {
  ExpandableGroupTagLine as E
};

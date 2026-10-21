import { M as reactExports, Q as jsxRuntimeExports } from "./server.mjs";
import { I as Icon, d as cn } from "./Tabs-CzpyUi7T.mjs";
const RAIL_HEIGHT = 4;
const INACTIVE_DOT_SIZE = 8;
const ACTIVE_DOT_SIZE = 16;
const LABEL_GAP = 4;
const LABEL_TOP_OFFSET = RAIL_HEIGHT / 2 + ACTIVE_DOT_SIZE / 2 + LABEL_GAP;
function getSortedSteps(values) {
  return [...values].sort((a, b) => a.value - b.value);
}
function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}
function isRtlElement(element) {
  return getComputedStyle(element).direction === "rtl";
}
function getHorizontalRatio(clientX, element) {
  const rect = element.getBoundingClientRect();
  const ratio = clamp((clientX - rect.left) / rect.width, 0, 1);
  return isRtlElement(element) ? 1 - ratio : ratio;
}
function getSegments(steps, min, initialColor) {
  const firstStep = steps[0];
  if (!firstStep) return [];
  const segments = [];
  if (firstStep.value > 0) {
    segments.push({
      key: `initial-${firstStep.value}`,
      startValue: min,
      endValue: firstStep.value,
      fromColor: initialColor,
      toColor: firstStep.color,
      completedStepIndex: 0
    });
  }
  for (let index = 0; index < steps.length - 1; index += 1) {
    const step = steps[index];
    const nextStep = steps[index + 1];
    segments.push({
      key: `${step.value}-${nextStep.value}`,
      startValue: step.value,
      endValue: nextStep.value,
      fromColor: step.color,
      toColor: nextStep.color,
      completedStepIndex: index + 1
    });
  }
  return segments;
}
function ThresholdRange({
  title,
  defaultDescription,
  values,
  value,
  onChange,
  min = 0,
  max = 100,
  initialColor,
  name,
  onBlur,
  disabled = false,
  className,
  learnMoreUrl
}) {
  const railRef = reactExports.useRef(null);
  const hasDraggedRef = reactExports.useRef(false);
  const [isDragging, setIsDragging] = reactExports.useState(false);
  const steps = getSortedSteps(values);
  if (steps.length === 0) {
    throw new Error("ThresholdRange requires at least one step.");
  }
  const normalizedMax = Math.max(max, steps.at(-1).value, 1);
  const firstStep = steps[0];
  const lastStep = steps.at(-1);
  const activeIndex = steps.findIndex((step) => step.value === value);
  const activeStep = activeIndex >= 0 ? steps[activeIndex] : void 0;
  const segments = getSegments(steps, min, initialColor);
  const selectStepAtIndex = (index) => {
    if (disabled) return;
    const nextStep = steps[clamp(index, 0, steps.length - 1)];
    if (!nextStep) return;
    if (nextStep.value !== value) {
      onChange(nextStep.value);
    }
  };
  const selectNearestStep = (clientX, element) => {
    if (disabled) return;
    const targetValue = getHorizontalRatio(clientX, element) * normalizedMax;
    let nearestIndex = 0;
    let nearestDistance = Number.POSITIVE_INFINITY;
    steps.forEach((step, index) => {
      const distance = Math.abs(step.value - targetValue);
      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearestIndex = index;
      }
    });
    selectStepAtIndex(nearestIndex);
  };
  const updateFromPointer = (clientX) => {
    const rail = railRef.current;
    if (!rail) return;
    selectNearestStep(clientX, rail);
  };
  const endThumbDrag = (event) => {
    const rail = railRef.current;
    if (rail?.hasPointerCapture(event.pointerId)) {
      rail.releasePointerCapture(event.pointerId);
    }
    setIsDragging(false);
  };
  const handleActiveThumbPointerDown = (event) => {
    if (disabled) return;
    const rail = railRef.current;
    if (!rail) return;
    event.preventDefault();
    event.stopPropagation();
    hasDraggedRef.current = false;
    rail.setPointerCapture(event.pointerId);
    setIsDragging(true);
    updateFromPointer(event.clientX);
  };
  const handleRailPointerMove = (event) => {
    const rail = railRef.current;
    if (!rail?.hasPointerCapture(event.pointerId)) return;
    hasDraggedRef.current = true;
    updateFromPointer(event.clientX);
  };
  const handleKeyDown = (event) => {
    if (disabled) return;
    const selectNext = () => {
      event.preventDefault();
      if (activeIndex < 0) {
        selectStepAtIndex(0);
        return;
      }
      selectStepAtIndex(activeIndex + 1);
    };
    const selectPrevious = () => {
      event.preventDefault();
      if (activeIndex < 0) {
        selectStepAtIndex(steps.length - 1);
        return;
      }
      selectStepAtIndex(activeIndex - 1);
    };
    switch (event.key) {
      case "ArrowUp":
        selectNext();
        return;
      case "ArrowDown":
        selectPrevious();
        return;
      case "ArrowRight":
        if (isRtlElement(event.currentTarget)) {
          selectPrevious();
          return;
        }
        selectNext();
        return;
      case "ArrowLeft":
        if (isRtlElement(event.currentTarget)) {
          selectNext();
          return;
        }
        selectPrevious();
        return;
      case "Home":
        event.preventDefault();
        selectStepAtIndex(0);
        return;
      case "End":
        event.preventDefault();
        selectStepAtIndex(steps.length - 1);
        return;
      default:
        return;
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("flex flex-col gap-md", className), children: [
    name ? /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "hidden", name, value: value ?? "" }) : null,
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-md", children: [
      title ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-grey-primary text-s font-medium", children: title }),
        learnMoreUrl ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: learnMoreUrl,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "text-grey-50 text-purple-primary hover:text-purple-hover",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "helpcenter", className: "size-4" })
          }
        ) : null
      ] }) : null,
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          role: "slider",
          tabIndex: disabled ? -1 : 0,
          "aria-disabled": disabled,
          "aria-valuemin": firstStep.value,
          "aria-valuemax": lastStep.value,
          "aria-valuenow": value,
          "aria-valuetext": activeStep?.value.toString() ?? "",
          className: cn(
            "rounded-lg px-xs pb-sm pt-md focus-visible:outline-2 focus-visible:outline-offset-6 focus-visible:outline-purple-primary",
            disabled ? "cursor-not-allowed opacity-60" : "cursor-pointer",
            isDragging && "select-none"
          ),
          onKeyDown: handleKeyDown,
          onBlur,
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-md pb-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                ref: railRef,
                "data-testid": "threshold-range-rail",
                className: "bg-grey-border relative w-full rounded-full before:absolute before:inset-x-0 before:-top-5 before:-bottom-5 before:content-['']",
                style: { height: `${RAIL_HEIGHT}px` },
                onClick: (event) => {
                  if (hasDraggedRef.current) {
                    hasDraggedRef.current = false;
                    return;
                  }
                  selectNearestStep(event.clientX, event.currentTarget);
                },
                onPointerMove: handleRailPointerMove,
                onPointerUp: endThumbDrag,
                onPointerCancel: endThumbDrag,
                children: [
                  segments.map((segment) => {
                    const start = segment.startValue / normalizedMax * 100;
                    const end = segment.endValue / normalizedMax * 100;
                    const width = end - start;
                    const isCompleted = activeIndex >= segment.completedStepIndex;
                    return /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        "aria-hidden": "true",
                        className: cn("absolute rounded-full", isCompleted ? "rtl:-scale-x-100" : "bg-grey-border"),
                        style: {
                          insetInlineStart: `${start}%`,
                          width: `${width}%`,
                          height: `${RAIL_HEIGHT}px`,
                          background: isCompleted ? `linear-gradient(to right, ${segment.fromColor} 0%, ${segment.toColor} 100%)` : void 0
                        }
                      },
                      segment.key
                    );
                  }),
                  steps.map((step, index) => {
                    const position = step.value / normalizedMax * 100;
                    const isActive = index === activeIndex;
                    const isCompleted = activeIndex >= index;
                    const size = isActive ? ACTIVE_DOT_SIZE : INACTIVE_DOT_SIZE;
                    const backgroundColor = isCompleted ? step.color : "var(--color-grey-border)";
                    return /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        tabIndex: -1,
                        "aria-label": `${title} ${step.value.toString()}`,
                        disabled,
                        "data-testid": isActive ? "threshold-range-thumb-active" : void 0,
                        className: cn(
                          "absolute top-1/2 -translate-y-1/2 rounded-full border-0 p-0 touch-none",
                          disabled ? "cursor-not-allowed" : isActive ? isDragging ? "cursor-grabbing" : "cursor-grab" : "cursor-pointer"
                        ),
                        style: {
                          insetInlineStart: `${position}%`,
                          marginInlineStart: `-${size / 2}px`,
                          width: `${size}px`,
                          height: `${size}px`,
                          backgroundColor
                        },
                        onClick: (event) => {
                          event.stopPropagation();
                          if (hasDraggedRef.current) {
                            hasDraggedRef.current = false;
                            return;
                          }
                          selectStepAtIndex(index);
                        },
                        onPointerDown: isActive ? handleActiveThumbPointerDown : void 0
                      },
                      step.value
                    );
                  })
                ]
              }
            ),
            activeStep ? /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "absolute text-s leading-none font-medium pointer-events-none -translate-x-1/2 rtl:translate-x-1/2",
                style: {
                  top: `${LABEL_TOP_OFFSET}px`,
                  insetInlineStart: `${activeStep.value / normalizedMax * 100}%`,
                  color: activeStep.color
                },
                children: activeStep.value.toString()
              }
            ) : null,
            activeStep?.value !== lastStep.value ? /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "text-grey-placeholder absolute text-s leading-none font-medium pointer-events-none -translate-x-1/2 rtl:translate-x-1/2",
                style: {
                  top: `${LABEL_TOP_OFFSET}px`,
                  insetInlineStart: `${lastStep.value / normalizedMax * 100}%`
                },
                children: lastStep.value.toString()
              }
            ) : null
          ] }) })
        }
      ),
      activeStep?.label || defaultDescription ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-grey-placeholder text-xs leading-tight", children: activeStep?.label ?? defaultDescription }) : null
    ] })
  ] });
}
export {
  ThresholdRange as T
};

import { Q as jsxRuntimeExports, M as reactExports } from "./server.mjs";
import { d as cn, j as cva } from "./Tabs-CzpyUi7T.mjs";
const stepperRoot = cva(["flex flex-row items-center gap-sm text-s font-normal"]);
const stepNumber = cva(["flex size-5 items-center justify-center rounded-full text-xs transition-colors"], {
  variants: {
    active: {
      true: "bg-purple-primary text-white",
      false: "bg-purple-background text-grey-secondary"
    }
  },
  defaultVariants: {
    active: false
  }
});
const stepLabel = cva(["transition-colors"], {
  variants: {
    active: {
      true: "text-purple-primary",
      false: "text-grey-secondary"
    },
    clickable: {
      true: "cursor-pointer",
      false: ""
    }
  },
  defaultVariants: {
    active: false,
    clickable: false
  }
});
const Stepper = function Stepper2({
  ref,
  steps,
  currentStep,
  onStepClick,
  className,
  ...props
}) {
  const isClickable = !!onStepClick;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, className: cn(stepperRoot(), className), ...props, children: steps.map((step, index) => {
    const isActive = currentStep === index;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(reactExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: stepNumber({ active: isActive }), children: index + 1 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "span",
        {
          className: stepLabel({ active: isActive, clickable: isClickable }),
          onClick: onStepClick ? () => onStepClick(index) : void 0,
          "aria-current": isActive ? "step" : void 0,
          children: step.label
        }
      ),
      index < steps.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px w-6 border-b border-dashed border-grey-border" })
    ] }, step.key);
  }) });
};
export {
  Stepper as S
};

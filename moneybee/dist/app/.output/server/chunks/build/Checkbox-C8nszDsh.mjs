import { Q as jsxRuntimeExports, M as reactExports } from "./server.mjs";
import { I as Icon, j as cva, y as createContextScope, o as Presence, P as Primitive, k as useComposedRefs, K as useSize, l as composeEventHandlers, H as useControllableState } from "./Tabs-CzpyUi7T.mjs";
var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var CHECKBOX_NAME = "Checkbox";
var [createCheckboxContext, createCheckboxScope] = createContextScope(CHECKBOX_NAME);
var [CheckboxProviderImpl, useCheckboxContext] = createCheckboxContext(CHECKBOX_NAME);
function CheckboxProvider(props) {
  const {
    __scopeCheckbox,
    checked: checkedProp,
    children,
    defaultChecked,
    disabled,
    form,
    name,
    onCheckedChange,
    required,
    value = "on",
    // @ts-expect-error
    internal_do_not_use_render
  } = props;
  const [checked, setChecked] = useControllableState({
    prop: checkedProp,
    defaultProp: defaultChecked ?? false,
    onChange: onCheckedChange,
    caller: CHECKBOX_NAME
  });
  const [control, setControl] = reactExports.useState(null);
  const [bubbleInput, setBubbleInput] = reactExports.useState(null);
  const hasConsumerStoppedPropagationRef = reactExports.useRef(false);
  const [userInteractionCount, onUserInteraction] = reactExports.useReducer(
    (count) => count + 1,
    0
  );
  const isFormControl = control ? !!form || !!control.closest("form") : (
    // We set this to true by default so that events bubble to forms without JS (SSR)
    true
  );
  const context = {
    checked,
    disabled,
    setChecked,
    control,
    setControl,
    name,
    form,
    value,
    hasConsumerStoppedPropagationRef,
    userInteractionCount,
    onUserInteraction,
    required,
    defaultChecked: isIndeterminate(defaultChecked) ? false : defaultChecked,
    isFormControl,
    bubbleInput,
    setBubbleInput
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    CheckboxProviderImpl,
    {
      scope: __scopeCheckbox,
      ...context,
      children: isFunction(internal_do_not_use_render) ? internal_do_not_use_render(context) : children
    }
  );
}
__name(CheckboxProvider, "CheckboxProvider");
var TRIGGER_NAME = "CheckboxTrigger";
var CheckboxTrigger = /* @__PURE__ */ reactExports.forwardRef(
  /* @__PURE__ */ __name(function CheckboxTrigger2({ __scopeCheckbox, onKeyDown, onClick, ...checkboxProps }, forwardedRef) {
    const {
      control,
      value,
      disabled,
      checked,
      required,
      setControl,
      setChecked,
      hasConsumerStoppedPropagationRef,
      onUserInteraction,
      isFormControl,
      bubbleInput
    } = useCheckboxContext(TRIGGER_NAME, __scopeCheckbox);
    const composedRefs = useComposedRefs(forwardedRef, setControl);
    const initialCheckedStateRef = reactExports.useRef(checked);
    reactExports.useEffect(() => {
      const form = control?.form;
      if (form) {
        const reset = /* @__PURE__ */ __name(() => setChecked(initialCheckedStateRef.current), "reset");
        form.addEventListener("reset", reset);
        return () => form.removeEventListener("reset", reset);
      }
    }, [control, setChecked]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.button,
      {
        type: "button",
        role: "checkbox",
        "aria-checked": isIndeterminate(checked) ? "mixed" : checked,
        "aria-required": required,
        "data-state": getState(checked),
        "data-disabled": disabled ? "" : void 0,
        disabled,
        value,
        ...checkboxProps,
        ref: composedRefs,
        onKeyDown: composeEventHandlers(onKeyDown, (event) => {
          if (event.key === "Enter") event.preventDefault();
        }),
        onClick: composeEventHandlers(onClick, (event) => {
          onUserInteraction();
          setChecked((prevChecked) => isIndeterminate(prevChecked) ? true : !prevChecked);
          if (bubbleInput && isFormControl) {
            hasConsumerStoppedPropagationRef.current = event.isPropagationStopped();
            if (!hasConsumerStoppedPropagationRef.current) event.stopPropagation();
          }
        })
      }
    );
  }, "CheckboxTrigger")
);
var Checkbox$1 = /* @__PURE__ */ reactExports.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ __name(function Checkbox2(props, forwardedRef) {
    const {
      __scopeCheckbox,
      name,
      checked,
      defaultChecked,
      required,
      disabled,
      value,
      onCheckedChange,
      form,
      ...checkboxProps
    } = props;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      CheckboxProvider,
      {
        __scopeCheckbox,
        checked,
        defaultChecked,
        disabled,
        required,
        onCheckedChange,
        name,
        form,
        value,
        internal_do_not_use_render: ({ isFormControl }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            CheckboxTrigger,
            {
              ...checkboxProps,
              ref: forwardedRef,
              __scopeCheckbox
            }
          ),
          isFormControl && /* @__PURE__ */ jsxRuntimeExports.jsx(
            CheckboxBubbleInput,
            {
              __scopeCheckbox
            }
          )
        ] })
      }
    );
  }, "Checkbox")
);
var INDICATOR_NAME = "CheckboxIndicator";
var CheckboxIndicator = /* @__PURE__ */ reactExports.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ __name(function CheckboxIndicator2(props, forwardedRef) {
    const { __scopeCheckbox, forceMount, ...indicatorProps } = props;
    const context = useCheckboxContext(INDICATOR_NAME, __scopeCheckbox);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Presence,
      {
        present: forceMount || isIndeterminate(context.checked) || context.checked === true,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Primitive.span,
          {
            "data-state": getState(context.checked),
            "data-disabled": context.disabled ? "" : void 0,
            ...indicatorProps,
            ref: forwardedRef,
            style: { pointerEvents: "none", ...props.style }
          }
        )
      }
    );
  }, "CheckboxIndicator")
);
var BUBBLE_INPUT_NAME = "CheckboxBubbleInput";
var CheckboxBubbleInput = /* @__PURE__ */ reactExports.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ __name(function CheckboxBubbleInput2({ __scopeCheckbox, onClick, ...props }, forwardedRef) {
    const {
      control,
      hasConsumerStoppedPropagationRef,
      userInteractionCount,
      checked,
      defaultChecked,
      required,
      disabled,
      name,
      value,
      form,
      bubbleInput,
      setBubbleInput
    } = useCheckboxContext(BUBBLE_INPUT_NAME, __scopeCheckbox);
    const composedRefs = useComposedRefs(forwardedRef, setBubbleInput);
    const controlSize = useSize(control);
    const shouldStopClickPropagationRef = reactExports.useRef(false);
    const prevCheckedRef = reactExports.useRef(checked);
    const prevUserInteractionCountRef = reactExports.useRef(userInteractionCount);
    reactExports.useEffect(() => {
      const input = bubbleInput;
      if (!input) return;
      const inputProto = window.HTMLInputElement.prototype;
      const descriptor = Object.getOwnPropertyDescriptor(
        inputProto,
        "checked"
      );
      const setChecked = descriptor.set;
      const isUserInteraction = userInteractionCount !== prevUserInteractionCountRef.current;
      prevUserInteractionCountRef.current = userInteractionCount;
      const checkedChanged = prevCheckedRef.current !== checked;
      prevCheckedRef.current = checked;
      const bubbles = !(isUserInteraction && hasConsumerStoppedPropagationRef.current);
      if (checkedChanged && setChecked) {
        shouldStopClickPropagationRef.current = !isUserInteraction;
        const event = new Event("click", { bubbles });
        input.indeterminate = isIndeterminate(checked);
        setChecked.call(input, isIndeterminate(checked) ? false : checked);
        input.dispatchEvent(event);
        shouldStopClickPropagationRef.current = false;
      }
    }, [bubbleInput, checked, hasConsumerStoppedPropagationRef, userInteractionCount]);
    const defaultCheckedRef = reactExports.useRef(isIndeterminate(checked) ? false : checked);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.input,
      {
        type: "checkbox",
        "aria-hidden": true,
        defaultChecked: defaultChecked ?? defaultCheckedRef.current,
        required,
        disabled,
        name,
        value,
        form,
        ...props,
        tabIndex: -1,
        ref: composedRefs,
        onClick: composeEventHandlers(onClick, (event) => {
          if (shouldStopClickPropagationRef.current) {
            event.stopPropagation();
          }
        }),
        style: {
          ...props.style,
          ...controlSize,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0,
          // We transform because the input is absolutely positioned but we have
          // rendered it **after** the button. This pulls it back to sit on top
          // of the button.
          transform: "translateX(-100%)"
        }
      }
    );
  }, "CheckboxBubbleInput")
);
function isFunction(value) {
  return typeof value === "function";
}
__name(isFunction, "isFunction");
function isIndeterminate(checked) {
  return checked === "indeterminate";
}
__name(isIndeterminate, "isIndeterminate");
function getState(checked) {
  return isIndeterminate(checked) ? "indeterminate" : checked ? "checked" : "unchecked";
}
__name(getState, "getState");
const checkbox = cva(
  [
    "group flex shrink-0 items-center justify-center rounded-sm border outline-hidden transition-colors",
    // Unchecked
    "border-purple-primary bg-grey-white",
    "hover:bg-purple-background",
    "dark:bg-grey-background dark:hover:border-purple-hover dark:hover:bg-grey-background",
    // Checked
    "enabled:radix-state-checked:bg-purple-primary enabled:radix-state-checked:border-transparent",
    "enabled:radix-state-checked:hover:bg-purple-hover",
    // Indeterminate (some selected)
    "enabled:radix-state-indeterminate:bg-grey-white enabled:radix-state-indeterminate:border-purple-primary",
    "enabled:radix-state-indeterminate:hover:bg-purple-background enabled:radix-state-indeterminate:hover:border-purple-hover",
    "dark:enabled:radix-state-indeterminate:bg-grey-background",
    "dark:enabled:radix-state-indeterminate:hover:bg-grey-background dark:enabled:radix-state-indeterminate:hover:border-purple-hover",
    // Disabled — unchecked
    "disabled:cursor-not-allowed",
    "disabled:radix-state-unchecked:bg-grey-background disabled:radix-state-unchecked:border-grey-border disabled:radix-state-unchecked:border-[0.5px]",
    "dark:disabled:radix-state-unchecked:bg-grey-background dark:disabled:radix-state-unchecked:border-purple-disabled",
    // Disabled — checked / indeterminate
    "disabled:radix-state-checked:bg-grey-disabled disabled:radix-state-checked:border-transparent",
    "dark:disabled:radix-state-checked:bg-purple-disabled",
    "disabled:radix-state-indeterminate:bg-grey-disabled disabled:radix-state-indeterminate:border-transparent",
    "dark:disabled:radix-state-indeterminate:bg-purple-disabled"
  ],
  {
    variants: {
      size: {
        regular: "size-6",
        small: "size-4"
      }
    },
    defaultVariants: {
      size: "regular"
    }
  }
);
const Checkbox = function Checkbox22({
  ref,
  className,
  checked,
  size = "regular",
  stopPropagation = false,
  onClick,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Checkbox$1,
    {
      ref,
      id: props.name,
      className: checkbox({ size, className }),
      checked,
      ...props,
      onClick: (e) => {
        if (stopPropagation) e.stopPropagation();
        onClick?.(e);
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(CheckboxIndicator, { asChild: true, children: checked === "indeterminate" ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        Icon,
        {
          icon: "check-indeterminate-small",
          className: "text-purple-primary group-hover:text-purple-hover group-disabled:text-grey-white"
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "tick", className: "text-grey-white" }) })
    }
  );
};
export {
  Checkbox as C
};

import { Q as jsxRuntimeExports } from "./server.mjs";
import { ac as DialogTrigger, ad as DialogDescription, ae as Dialog, af as DialogPortal, ag as DialogOverlay, ah as DialogContent, d as cn, U as StickyComponent, ai as DialogTitle, aj as typoClassName, B as Button, I as Icon, ak as DialogClose, j as cva } from "./Tabs-CzpyUi7T.mjs";
import { a2 as M } from "./services-middleware-nMulUXHZ.mjs";
function ModalRoot(props) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { ...props });
}
const modalContentClassnames = cva(
  "bg-surface-card top-[10vh] flex w-full flex-col rounded-lg drop-shadow-xl overflow-x-hidden overflow-y-auto max-h-[80vh]",
  {
    variants: {
      size: {
        small: "max-w-lg",
        medium: "max-w-2xl",
        large: "max-w-5xl",
        xlarge: "max-w-7xl",
        full: "max-w-[90vw]"
      },
      fixedHeight: {
        true: null,
        false: "h-fit"
      }
    },
    defaultVariants: {
      size: "medium"
    }
  }
);
const ModalContent = function ModalContent2({
  ref,
  className,
  size,
  fixedHeight,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogPortal, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogOverlay, { className: "animate-overlay-show bg-grey-primary/20 fixed inset-0 z-50 flex items-center justify-center p-md backdrop-blur-xs" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      DialogContent,
      {
        ref,
        ...props,
        className: modalContentClassnames({
          size,
          fixedHeight,
          className: cn("fixed left-1/2 z-50 -translate-x-1/2", className)
        }),
        children
      }
    )
  ] });
};
const ModalTitle = function ModalTitle2({
  ref,
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(StickyComponent, { inFlow: "before", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    DialogTitle,
    {
      ref,
      className: typoClassName({
        variant: "title2",
        className: cn(
          "sticky top-0 z-10 border-b border-transparent p-md bg-surface-card sentinel-intersect:border-b-grey-border sentinel-intersect:shadow-sticky-top",
          className
        )
      }),
      ...props
    }
  ) });
};
const ModalFooter = function ModalFooter2({
  ref,
  children,
  className
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(StickyComponent, { inFlow: "after", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      ref,
      className: cn(
        "sticky bottom-0 z-10 border-t border-transparent bg-surface-card flex justify-end gap-sm p-md sentinel-intersect:border-t-grey-border sentinel-intersect:shadow-sticky-bottom",
        className
      ),
      children
    }
  ) });
};
const ModalFooterButton = function ModalFooterButton2({
  ref,
  variant,
  isCloseButton,
  isLoading,
  leadingIcon,
  trailingIcon,
  disabled,
  label,
  children,
  className,
  ...props
}) {
  const { variant: buttonVariant, appearance } = M(variant).with("secondary", () => ({
    variant: "secondary",
    appearance: "stroked"
  })).with("destructive", () => ({
    variant: "destructive",
    appearance: "filled"
  })).otherwise(() => ({
    variant: isCloseButton ? variant ?? "secondary" : "primary",
    appearance: isCloseButton && variant !== "primary" ? "stroked" : "filled"
  }));
  const button = /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Button,
    {
      ref,
      variant: buttonVariant,
      appearance,
      disabled: disabled || isLoading,
      "aria-busy": isLoading || void 0,
      "aria-disabled": disabled || isLoading || void 0,
      size: "large",
      className: cn(isLoading && "pointer-events-none", className),
      ...props,
      children: [
        leadingIcon ? isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "spinner", className: "size-5 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: leadingIcon, className: "size-5" }) : null,
        label,
        children,
        trailingIcon ? isLoading && !leadingIcon ? /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "spinner", className: "size-5 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: trailingIcon, className: "size-5" }) : null,
        isLoading && !leadingIcon && !trailingIcon ? /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "spinner", className: "size-5 animate-spin" }) : null
      ]
    }
  );
  if (isCloseButton) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(DialogClose, { asChild: true, children: button });
  }
  return button;
};
const Modal = {
  Root: ModalRoot,
  Trigger: DialogTrigger,
  Close: DialogClose,
  Description: DialogDescription,
  Content: ModalContent,
  Title: ModalTitle,
  Footer: ModalFooter,
  FooterButton: ModalFooterButton
};
export {
  Modal as M
};

import { Q as jsxRuntimeExports, M as reactExports } from "./server.mjs";
import { j as cva, y as createContextScope, P as Primitive, p as useCallbackRef$1, m as useLayoutEffect2 } from "./Tabs-CzpyUi7T.mjs";
var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var AVATAR_NAME = "Avatar";
var [createAvatarContext, createAvatarScope] = createContextScope(AVATAR_NAME);
var STATIC_IMAGE_COUNT_STATE = [
  0,
  () => void 0
];
var [AvatarProvider, useAvatarContext] = createAvatarContext(AVATAR_NAME);
var Avatar$1 = /* @__PURE__ */ reactExports.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ __name(function Avatar2(props, forwardedRef) {
    const { __scopeAvatar, ...avatarProps } = props;
    const [imageLoadingStatus, setImageLoadingStatus] = reactExports.useState("idle");
    const [imageCount, setImageCount] = useImageCount();
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      AvatarProvider,
      {
        scope: __scopeAvatar,
        imageLoadingStatus,
        setImageLoadingStatus,
        imageCount,
        setImageCount,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Primitive.span, { ...avatarProps, ref: forwardedRef })
      }
    );
  }, "Avatar")
);
var IMAGE_NAME = "AvatarImage";
var AvatarImage = /* @__PURE__ */ reactExports.forwardRef(
  /* @__PURE__ */ __name(function AvatarImage2(props, forwardedRef) {
    const { __scopeAvatar, src, onLoadingStatusChange, ...imageProps } = props;
    const context = useAvatarContext(IMAGE_NAME, __scopeAvatar);
    useUpdateImageCount(context.setImageCount);
    const imageLoadingStatus = useImageLoadingStatus(src, {
      referrerPolicy: imageProps.referrerPolicy,
      crossOrigin: imageProps.crossOrigin,
      loadingStatus: context.imageLoadingStatus,
      setLoadingStatus: context.setImageLoadingStatus
    });
    const handleLoadingStatusChange = useCallbackRef$1((status) => {
      onLoadingStatusChange?.(status);
    });
    const loadingStatusRef = reactExports.useRef(imageLoadingStatus);
    useLayoutEffect2(() => {
      const previousLoadingStatus = loadingStatusRef.current;
      loadingStatusRef.current = imageLoadingStatus;
      if (imageLoadingStatus !== previousLoadingStatus) {
        handleLoadingStatusChange(imageLoadingStatus);
      }
    }, [imageLoadingStatus, handleLoadingStatusChange]);
    return imageLoadingStatus === "loaded" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Primitive.img, { ...imageProps, ref: forwardedRef, src }) : null;
  }, "AvatarImage")
);
var FALLBACK_NAME = "AvatarFallback";
var AvatarFallback = /* @__PURE__ */ reactExports.forwardRef(
  /* @__PURE__ */ __name(function AvatarFallback2(props, forwardedRef) {
    const { __scopeAvatar, delayMs, ...fallbackProps } = props;
    const context = useAvatarContext(FALLBACK_NAME, __scopeAvatar);
    const [canRender, setCanRender] = reactExports.useState(delayMs === void 0);
    reactExports.useEffect(() => {
      if (delayMs !== void 0) {
        const timerId = window.setTimeout(() => setCanRender(true), delayMs);
        return () => window.clearTimeout(timerId);
      }
    }, [delayMs]);
    return canRender && context.imageLoadingStatus !== "loaded" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Primitive.span, { ...fallbackProps, ref: forwardedRef }) : null;
  }, "AvatarFallback")
);
function useImageLoadingStatus(src, {
  loadingStatus,
  setLoadingStatus,
  referrerPolicy,
  crossOrigin
}) {
  useLayoutEffect2(() => {
    if (!src) {
      setLoadingStatus("error");
      return;
    }
    const image = new window.Image();
    const handleLoad = /* @__PURE__ */ __name((event) => {
      const image2 = event.currentTarget;
      setLoadingStatus(getImageLoadingStatus(image2));
    }, "handleLoad");
    const handleError = /* @__PURE__ */ __name(() => setLoadingStatus("error"), "handleError");
    image.addEventListener("load", handleLoad);
    image.addEventListener("error", handleError);
    if (referrerPolicy) {
      image.referrerPolicy = referrerPolicy;
    }
    image.crossOrigin = crossOrigin ?? null;
    image.src = src;
    setLoadingStatus(getImageLoadingStatus(image));
    return () => {
      image.removeEventListener("load", handleLoad);
      image.removeEventListener("error", handleError);
      setLoadingStatus("idle");
    };
  }, [src, crossOrigin, referrerPolicy, setLoadingStatus]);
  return loadingStatus;
}
__name(useImageLoadingStatus, "useImageLoadingStatus");
function getImageLoadingStatus(image) {
  return image.complete ? image.naturalWidth > 0 ? "loaded" : "error" : "loading";
}
__name(getImageLoadingStatus, "getImageLoadingStatus");
function useImageCount() {
  let state = STATIC_IMAGE_COUNT_STATE;
  return state;
}
__name(useImageCount, "useImageCount");
function useUpdateImageCount(setImageCount) {
}
__name(useUpdateImageCount, "useUpdateImageCount");
const avatar = cva("inline-flex select-none items-center justify-center overflow-hidden rounded-full shrink-0", {
  variants: {
    color: {
      default: "bg-purple-background border-2 border-purple-primary dark:bg-grey-background dark:text-purple-primary",
      grey: "bg-grey-border",
      transparent: "bg-transparent border border-grey-border"
    },
    size: {
      xxs: "size-6 text-2xs",
      xs: "size-6 text-small",
      s: "size-8 text-s",
      m: "size-10 text-m",
      l: "size-14 text-l",
      xl: "size-16 text-l"
    }
  },
  defaultVariants: {
    size: "m",
    color: "default"
  }
});
function Avatar({ firstName, lastName, src, size, color, className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Avatar$1,
    {
      className: avatar({
        size,
        color,
        className
      }),
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          AvatarImage,
          {
            referrerPolicy: "no-referrer",
            className: "size-full object-cover",
            src,
            alt: firstName || lastName ? `${firstName ?? ""} ${lastName ?? ""}` : "Unknown user"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          AvatarFallback,
          {
            className: "text-grey-primary dark:text-purple-primary flex size-full items-center justify-center text-center font-normal uppercase",
            delayMs: src ? 400 : 0,
            children: `${firstName?.[0] ?? ""}${lastName?.[0] ?? ""}` || "👤"
          }
        )
      ]
    }
  );
}
export {
  Avatar as A
};

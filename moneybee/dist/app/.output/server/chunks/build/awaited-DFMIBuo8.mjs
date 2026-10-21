import { Q as jsxRuntimeExports, M as reactExports, T as reactUse } from "./server.mjs";
import { ac as defaultSerializeError } from "./router-KSC-NEr8.mjs";
const TSR_DEFERRED_PROMISE = /* @__PURE__ */ Symbol.for("TSR_DEFERRED_PROMISE");
function defer(_promise, options) {
  const promise = _promise;
  if (promise[TSR_DEFERRED_PROMISE]) return promise;
  promise[TSR_DEFERRED_PROMISE] = { status: "pending" };
  promise.then((data) => {
    promise[TSR_DEFERRED_PROMISE].status = "success";
    promise[TSR_DEFERRED_PROMISE].data = data;
  }).catch((error) => {
    promise[TSR_DEFERRED_PROMISE].status = "error";
    promise[TSR_DEFERRED_PROMISE].error = {
      data: defaultSerializeError(error),
      __isServerError: true
    };
  });
  return promise;
}
function useAwaited({ promise: _promise }) {
  if (reactUse) return reactUse(_promise);
  const promise = defer(_promise);
  if (promise[TSR_DEFERRED_PROMISE].status === "pending") throw promise;
  if (promise[TSR_DEFERRED_PROMISE].status === "error") throw promise[TSR_DEFERRED_PROMISE].error;
  return promise[TSR_DEFERRED_PROMISE].data;
}
function Await(props) {
  const inner = /* @__PURE__ */ jsxRuntimeExports.jsx(AwaitInner, { ...props });
  if (props.fallback) return /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, {
    fallback: props.fallback,
    children: inner
  });
  return inner;
}
function AwaitInner(props) {
  const data = useAwaited(props);
  return props.children(data);
}
export {
  Await as A
};

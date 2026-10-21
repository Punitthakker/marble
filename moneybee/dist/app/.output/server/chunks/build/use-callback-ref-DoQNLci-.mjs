import { M as reactExports } from "./server.mjs";
function useCallbackRef(callback) {
  const callbackRef = reactExports.useRef(void 0);
  callbackRef.current = callback;
  return reactExports.useMemo(() => ((...args) => callbackRef.current?.(...args)), []);
}
export {
  useCallbackRef as u
};

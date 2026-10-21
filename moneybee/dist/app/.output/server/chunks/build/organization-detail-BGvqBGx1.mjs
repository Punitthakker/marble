import { M as reactExports, Q as jsxRuntimeExports } from "./server.mjs";
import { c as createSimpleContext } from "./create-context-k6HmQ6bB.mjs";
const OrganizationDetailsContext = createSimpleContext("OrganizationDetails");
function OrganizationDetailsContextProvider({
  org,
  currentUser,
  children
}) {
  const value = reactExports.useMemo(() => ({ org, currentUser }), [org, currentUser]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(OrganizationDetailsContext.Provider, { value, children });
}
const useOrganizationDetails = () => OrganizationDetailsContext.useValue();
export {
  OrganizationDetailsContextProvider as O,
  useOrganizationDetails as u
};

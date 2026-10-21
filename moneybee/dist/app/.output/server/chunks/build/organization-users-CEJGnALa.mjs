import { M as reactExports, Q as jsxRuntimeExports } from "./server.mjs";
import { c as createSimpleContext } from "./create-context-k6HmQ6bB.mjs";
const OrganizationUsersContext = createSimpleContext("OrganizationUsers");
function OrganizationUsersContextProvider({
  orgUsers,
  children
}) {
  const value = reactExports.useMemo(() => {
    const orgUserMap = new Map(orgUsers.map((user) => [user.userId, user]));
    return {
      orgUsers,
      getOrgUserById: (userId) => orgUserMap.get(userId)
    };
  }, [orgUsers]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(OrganizationUsersContext.Provider, { value, children });
}
const useOrganizationUsers = () => OrganizationUsersContext.useValue();
export {
  OrganizationUsersContextProvider as O,
  useOrganizationUsers as u
};

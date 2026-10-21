import { M as reactExports, Q as jsxRuntimeExports } from "./server.mjs";
import { c as createSimpleContext } from "./create-context-k6HmQ6bB.mjs";
const OrganizationTagsContext = createSimpleContext("OrganizationTags");
function OrganizationTagsContextProvider({ orgTags, children }) {
  const value = reactExports.useMemo(() => {
    const orgUserMap = new Map(orgTags.map((tag) => [tag.id, tag]));
    return {
      orgTags,
      getTagById: (tagid) => orgUserMap.get(tagid)
    };
  }, [orgTags]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(OrganizationTagsContext.Provider, { value, children });
}
const useOrganizationTags = () => OrganizationTagsContext.useValue();
export {
  OrganizationTagsContextProvider as O,
  useOrganizationTags as u
};

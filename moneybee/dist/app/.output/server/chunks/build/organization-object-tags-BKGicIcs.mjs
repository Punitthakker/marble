import { M as reactExports, Q as jsxRuntimeExports } from "./server.mjs";
import { c as createSimpleContext } from "./create-context-k6HmQ6bB.mjs";
const OrganizationObjectTagsContext = createSimpleContext("OrganizationTags");
function OrganizationObjectTagsContextProvider({ tags, children }) {
  const value = reactExports.useMemo(() => {
    const orgUserMap = new Map(tags.map((tag) => [tag.id, tag]));
    return {
      orgObjectTags: tags,
      getTagById: (tagid) => orgUserMap.get(tagid)
    };
  }, [tags]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(OrganizationObjectTagsContext.Provider, { value, children });
}
const useOrganizationObjectTags = () => OrganizationObjectTagsContext.useValue();
export {
  OrganizationObjectTagsContextProvider as O,
  useOrganizationObjectTags as u
};

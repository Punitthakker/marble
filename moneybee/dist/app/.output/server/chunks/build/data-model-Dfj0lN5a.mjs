import { Q as jsxRuntimeExports } from "./server.mjs";
import { c as createSimpleContext } from "./create-context-k6HmQ6bB.mjs";
const DataModelContext = createSimpleContext("DataModelContext");
const DataModelFeatureAccessContext = createSimpleContext("DataModelFeatureAccessContext");
function DataModelContextProvider({
  dataModel,
  dataModelFeatureAccess,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(DataModelContext.Provider, { value: dataModel, children: /* @__PURE__ */ jsxRuntimeExports.jsx(DataModelFeatureAccessContext.Provider, { value: dataModelFeatureAccess, children }) });
}
const useDataModel = DataModelContext.useValue;
const useDataModelFeatureAccess = DataModelFeatureAccessContext.useValue;
export {
  DataModelContextProvider as D,
  useDataModelFeatureAccess as a,
  useDataModel as u
};

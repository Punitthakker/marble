import { a8 as useSelector } from "./Tabs-CzpyUi7T.mjs";
const useStore = (source, selector = (s) => s, compare) => useSelector(source, selector, { compare });
export {
  useStore as u
};

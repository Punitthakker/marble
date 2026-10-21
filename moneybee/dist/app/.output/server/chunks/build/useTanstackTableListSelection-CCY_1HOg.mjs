import { M as reactExports } from "./server.mjs";
import { u as useCallbackRef } from "./use-callback-ref-DoQNLci-.mjs";
function useTanstackTableListSelection(data, getRowId) {
  const [rowSelection, setRowSelection] = reactExports.useState({});
  const _getRowId = useCallbackRef((item) => getRowId(item));
  const getSelectedRows = useCallbackRef(() => {
    return data.filter((item) => rowSelection[_getRowId(item)]);
  });
  return {
    hasSelectedRows: getSelectedRows().length > 0,
    setRowSelection,
    rowSelection,
    tableProps: {
      getRowId: _getRowId,
      onRowSelectionChange: setRowSelection
    },
    selectionProps: {
      rowSelection
    },
    getSelectedRows
  };
}
export {
  useTanstackTableListSelection as u
};

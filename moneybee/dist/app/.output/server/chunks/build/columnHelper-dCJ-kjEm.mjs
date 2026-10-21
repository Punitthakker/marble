function createColumnHelper() {
  return {
    accessor: (accessor, column) => {
      return typeof accessor === "function" ? {
        ...column,
        accessorFn: accessor
      } : {
        ...column,
        accessorKey: accessor
      };
    },
    columns: (columns) => columns,
    display: (column) => column,
    group: (column) => column
  };
}
export {
  createColumnHelper as c
};

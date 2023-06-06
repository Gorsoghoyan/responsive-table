import { useTable } from "./useTable";
import Table from "./Table";
import TablePagination from "./TablePagination";
import TabelSearchAndColumnVisibility from "./TabelSearchAndColumnVisibility";
import s from "./styles.module.scss";

export default function ResponsiveTable() {
  const {
    table,
    showColumnsDropDown,
    showColumnsDropDownRef,
    handleShowColumnsDropDown,
  } = useTable();

  return (
    <div className={s.container}>
      <TabelSearchAndColumnVisibility
        table={table}
        showColumnsDropDown={showColumnsDropDown}
        showColumnsDropDownRef={showColumnsDropDownRef}
        handleShowColumnsDropDown={handleShowColumnsDropDown}
      />
      <Table table={table} />
      <TablePagination
        page={""}
        count={""}
        rowsPerPage={""}
        onPageChange={""}
        rowsPerPageOptions={[10, 25, 50]}
        onRowsPerPageChange={""}
      />
    </div>
  );
}
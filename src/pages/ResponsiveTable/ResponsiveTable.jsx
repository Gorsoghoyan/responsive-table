import { useTable } from "./useTable";
import TabelSearchAndColumnVisibility from "./TabelSearchAndColumnVisibility";
import TablePagination from "./TablePagination";
import Table from "./Table";
import s from "./styles.module.scss";

export default function ResponsiveTable() {
  const {
    users,
    columns,
    showColumnsRef,
    showColumnsDropDown,
    handleShowColumnsDropDown,
    handleColumnChange
  } = useTable();

  return (
    <div className={s.container}>
      <TabelSearchAndColumnVisibility
        columns={columns}
        showColumnsRef={showColumnsRef}
        showColumns={showColumnsDropDown}
        handleShowColumns={handleShowColumnsDropDown}
        handleColumnChange={handleColumnChange}
      />
      <Table 
        users={users}
        columns={columns}
      />
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
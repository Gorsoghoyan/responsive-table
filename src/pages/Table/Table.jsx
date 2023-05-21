import TabelSearchAndColumnVisibility from "./TabelSearchAndColumnVisibility";
import TablePagination from "./TablePagination";
import s from "./styles.module.scss";

export default function Table() {
  return (
    <div className={s.tableContainer}>
      <TabelSearchAndColumnVisibility />
      <table className={s.table}>
        <thead>

        </thead>
        <tbody>

        </tbody>
      </table>
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
import TabelSearchAndColumnVisibility from "./TabelSearchAndColumnVisibility";
import TablePagination from "./TablePagination";
import s from "./styles.module.scss";

const TableRow = ({ children }) => <tr>{children}</tr>;

const TableHeadCell = ({ children }) => <th>{children}</th>;

const TableBodyCell = ({ children }) => <td>{children}</td>;

export default function Table() {
  return (
    <div className={s.tableContainer}>
      <TabelSearchAndColumnVisibility />
      <table className={s.table}>
        <thead>
          <TableRow>
            {}
          </TableRow>
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
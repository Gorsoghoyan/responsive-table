import { users } from "../../db/users";
import { columns } from "../../configs/table";
import { MdOutlineArrowDropUp, MdOutlineArrowDropDown } from "react-icons/md";
import TabelSearchAndColumnVisibility from "./TabelSearchAndColumnVisibility";
import TablePagination from "./TablePagination";
import s from "./styles.module.scss";

const TableRow = ({ children }) => <tr>{children}</tr>;

const TableHeadCell = ({ children }) => <th>{children}</th>;

const TableBodyCell = ({ children }) => <td>{children}</td>;

export default function Table() {
  return (
    <div className={s.container}>
      <TabelSearchAndColumnVisibility />
      <div className={s.tableContainer}>
        <table border={1} className={s.table}>
          <thead>
            <TableRow>
              {columns.map(column => (
                <TableHeadCell key={column.id}>
                  <div className={s.wrapper}>
                    <span>{column.title}</span>
                    <div className={s.arrows}>
                      {/* <MdOutlineArrowDropUp />
                      <MdOutlineArrowDropDown /> */}
                    </div>
                  </div>
                </TableHeadCell>
              ))}
            </TableRow>
          </thead>
          <tbody>
            {users.map(user => (
              <TableRow key={user.id}>
                <TableBodyCell>{user.id}</TableBodyCell>
                <TableBodyCell>
                  <img src={user.photo} alt="user" />
                  <span>{user.displayName}</span>
                </TableBodyCell>
                <TableBodyCell>{user.email}</TableBodyCell>
                <TableBodyCell>{user.profession}</TableBodyCell>
                <TableBodyCell>{user.gender}</TableBodyCell>
              </TableRow>
            ))}
          </tbody>
        </table>
      </div>
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
import TablePagination from "./TablePagination";
import TabelAutocompleteAndColumnVisibility from "./TabelAutocompleteAndColumnVisibility";
import s from "../sass/table.module.scss";

const columns = [
  { id: "column1", title: "User" },
  { id: "column2", title: "Email" }
];

const rows = [
  { id: "user1", displayName: "Gor Soghoyan", email: "soghoyangor@gmail.com" },
  { id: "user2", displayName: "Gor Soghoyan", email: "soghoyangor@gmail.com" },
  { id: "user3", displayName: "Gor Soghoyan", email: "soghoyangor@gmail.com" },
  { id: "user4", displayName: "Gor Soghoyan", email: "soghoyangor@gmail.com" },
  { id: "user5", displayName: "Gor Soghoyan", email: "soghoyangor@gmail.com" },
  { id: "user6", displayName: "Gor Soghoyan", email: "soghoyangor@gmail.com" },
  { id: "user7", displayName: "Gor Soghoyan", email: "soghoyangor@gmail.com" },
  { id: "user8", displayName: "Gor Soghoyan", email: "soghoyangor@gmail.com" },
  { id: "user9", displayName: "Gor Soghoyan", email: "soghoyangor@gmail.com" },
  { id: "user10", displayName: "Gor Soghoyan", email: "soghoyangor@gmail.com" },
  { id: "user11", displayName: "Gor Soghoyan", email: "soghoyangor@gmail.com" },
  { id: "user12", displayName: "Gor Soghoyan", email: "soghoyangor@gmail.com" }
];

export default function Table() {
  return (
    <div className={s.container}>
      <TabelAutocompleteAndColumnVisibility />
      <table className={s.table}>
        <thead>
          <TableRow>
            {columns.map(column => (
              <TableHeadCell key={column.id}>
                {column.title}
              </TableHeadCell>
            ))}
          </TableRow>
        </thead>
        <tbody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableBodyCell>{row.displayName}</TableBodyCell>
              <TableBodyCell>{row.email}</TableBodyCell>
            </TableRow>
          ))}
        </tbody>
      </table>
      <TablePagination />
    </div>
  );
}

const TableRow = ({ children }) => <tr>{children}</tr>;

const TableHeadCell = ({ children }) => <th>{children}</th>;

const TableBodyCell = ({ children }) => <td>{children}</td>;
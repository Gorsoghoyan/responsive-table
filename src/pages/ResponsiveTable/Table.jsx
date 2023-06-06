import { flexRender } from "@tanstack/react-table";
import s from "./styles.module.scss";

const TableRow = ({ children }) => <tr>{children}</tr>;

const TableHeadCell = ({ children }) => <th>{children}</th>;

const TableBodyCell = ({ children, minWidth }) => {
  return <td style={{ minWidth }}>{children}</td>;
};

export default function Table({ table }) {
  return (
    <div className={s.tableContainer}>
      {table.getRowModel().rows.length ? (
        <table border={1} className={s.table}>
          <thead>
            {table.getHeaderGroups().map(headerGroup => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <TableHeadCell key={header.id}>
                    <div className={s.wrapper}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                      )}
                      <div className={s.arrows}></div>
                    </div>
                  </TableHeadCell>
                ))}
              </TableRow>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map(row => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map(cell => (
                  <TableBodyCell key={cell.id}>
                    {flexRender(
                      cell.column.columnDef.cell,
                      cell.getContext()
                    )}
                  </TableBodyCell>
                ))}
              </TableRow>
            ))}
          </tbody>
        </table>
      ) : (
        <span>No matching records found !!!</span>
      )}
    </div>
  );
}
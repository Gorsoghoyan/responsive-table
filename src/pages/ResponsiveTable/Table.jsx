import s from "./styles.module.scss";

const TableRow = ({ children }) => <tr>{children}</tr>;

const TableHeadCell = ({ children }) => <th>{children}</th>;

const TableBodyCell = ({ children, minWidth }) => {
  return <td style={{ minWidth }}>{children}</td>;
};

export default function Table({
  users,
  columns,
}) {
  return (
    <div className={s.tableContainer}>
      <table border={1} className={s.table}>
        <thead>
          <TableRow>
            {columns.map(column => column.visibility && (
              <TableHeadCell key={column.id}>
                <div className={s.wrapper}>
                  <span>{column.title}</span>
                  <div className={s.arrows}></div>
                </div>
              </TableHeadCell>
            ))}
          </TableRow>
        </thead>
        <tbody>
          {users.map(user => (
            <TableRow key={user.id}>
              {/* <TableBodyCell minWidth={20}>{user.id}</TableBodyCell> */}
              <TableBodyCell minWidth={150}>
                <img src={user.photo} alt="user" />
                <span>{user.displayName}</span>
              </TableBodyCell>
              <TableBodyCell minWidth={180}>{user.email}</TableBodyCell>
              <TableBodyCell minWidth={150}>{user.profession}</TableBodyCell>
              <TableBodyCell minWidth={100}>{user.gender}</TableBodyCell>
            </TableRow>
          ))}
        </tbody>
      </table>
    </div>
  );
}
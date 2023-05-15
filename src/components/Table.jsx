import TablePagination from "./TablePagination";
import TabelAutocompleteAndColumnVisibility from "./TabelAutocompleteAndColumnVisibility";
import s from "../sass/table.module.scss";

export default function Table() {

  return (
    <div className={s.container}>
      <TabelAutocompleteAndColumnVisibility />
      <table className={s.body}>
        body
      </table>
      <TablePagination />
    </div>
  );
}
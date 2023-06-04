import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Select from "../../components/ui/Select/Select";
import s from "./styles.module.scss";

export default function TablePagination({
  page,
  count,
  rowsPerPage,
  onPageChange,
  rowsPerPageOptions,
  onRowsPerPageChange 
}) {
  return (
    <div className={s.pagination}>
      <div className={s.rowsPerPage}>
        <span>Rows per page:</span>
        <Select
          options={rowsPerPageOptions}
          onRowsPerPageChange={onRowsPerPageChange}
        />
      </div>
      <div className={s.dataInfo}>
        {1} - {10} of {100}
      </div>
      <div className={s.arrows}>
        <IoIosArrowBack />
        <IoIosArrowForward />
      </div>
    </div>
  );
}
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Input from "../../components/ui/Input/Input";
import s from "./styles.module.scss";

export default function TabelSearchAndColumnVisibility({
  columns,
  showColumns,
  showColumnsRef,
  handleShowColumns,
  handleColumnChange
}) {
  return (
    <div className={s.searchAndVisibility}>
      <Input
        variant={"s"}
        type={"search"}
        placeholder={"Search..."}
      />
      <div 
        className={s.selectColumn} 
        onClick={handleShowColumns}
        ref={showColumnsRef} 
      >
        <span>Show columns</span>
        <MdOutlineKeyboardArrowDown />
        {showColumns && (
          <div className={s.dropDownWrapper}>
            {columns.map((column, index) => (
              <label key={column.id}>
                <span>{index === 0 ? "Id" : column.title}</span>
                <Input 
                  type={"checkbox"} 
                  checked={column.visibility} 
                  onChange={e => handleColumnChange(e, column.id)}
                />
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
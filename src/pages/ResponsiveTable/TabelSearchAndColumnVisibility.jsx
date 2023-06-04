import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Input from "../../components/ui/Input/Input";
import s from "./styles.module.scss";

export default function TabelSearchAndColumnVisibility({
  columns,
  showColumnsRef,
  showColumnsDropDown,
  handleShowColumnsDropDown,
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
        onClick={handleShowColumnsDropDown}
        ref={showColumnsRef} 
      >
        <span>Show columns</span>
        <MdOutlineKeyboardArrowDown />
        {showColumnsDropDown && (
          <div className={s.dropDownWrapper}>
            {columns.map(column => (
              <label key={column.id}>
                <span>{column.title}</span>
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
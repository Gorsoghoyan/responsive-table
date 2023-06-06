import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Input from "../../components/ui/Input/Input";
import s from "./styles.module.scss";

function LabelItem({ title, checked, onChange }) {
  return (
    <label>
      <span>{title}</span>
      <Input
        type={"checkbox"}
        checked={checked}
        onChange={onChange}
      />
    </label>
  );
}

export default function TabelSearchAndColumnVisibility({
  table,
  showColumnsDropDown,
  showColumnsDropDownRef,
  handleShowColumnsDropDown,
}) {
  return (
    <div className={s.searchAndVisibility}>
      <Input
        variant={"s"}
        type={"search"}
        placeholder={"Search all columns..."}
      />
      <div
        className={s.selectColumn}
        onClick={handleShowColumnsDropDown}
        ref={showColumnsDropDownRef}
      >
        <span>Show columns</span>
        <MdOutlineKeyboardArrowDown />
        {showColumnsDropDown && (
          <div className={s.dropDownWrapper}>
            <LabelItem
              title={"Toggle All"}
              checked={table.getIsAllColumnsVisible()}
              onChange={table.getToggleAllColumnsVisibilityHandler()}
            />
            {table.getAllLeafColumns().map(column => (
              <LabelItem
                key={column.id}
                title={column.id}
                checked={column.getIsVisible()}
                onChange={column.getToggleVisibilityHandler()}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
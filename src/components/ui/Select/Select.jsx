import Input from "../Input/Input";
import useSelect from "./useSelect";
import s from "./styles.module.scss";
import c from "classnames";

export default function Select({ options, onRowsPerPageChange }) {
  const {
    value,
    clickRef,
    openOptions,
    handleClick,
    onOpenOptions
  } = useSelect(options && options[0], onRowsPerPageChange);

  return (
    <div className={s.container} onClick={onOpenOptions}>
      <Input value={value} readOnly={true} />
      <div
        ref={clickRef}
        className={c(s.options, { [s.open]: openOptions })}
      >
        {options?.map((option, index) => (
          <OptionItem
            key={index}
            optionName={option}
            background={option === value && "#dddddd"}
            onClick={handleClick}
          />
        ))}
      </div>
    </div>
  );
}

function OptionItem({ optionName, onClick, background }) {
  return (
    <div 
      onClick={onClick} 
      className={s.optionItem}
      style={{ background: background || null }}
    >
      {optionName}
    </div>
  );
}
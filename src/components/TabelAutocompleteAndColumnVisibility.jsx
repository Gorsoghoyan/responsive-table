import Input from "./ui/Input";
import s from "../sass/table.module.scss";

export default function TabelAutocompleteAndColumnVisibility() {
  return (
    <div className={s.top}>
      <div className={s.autocomplete}>
        <Input type={"text"} />
      </div>
    </div> 
  );
}
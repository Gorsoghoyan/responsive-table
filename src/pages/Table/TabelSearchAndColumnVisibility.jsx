import Input from "../../components/ui/Input/Input";
import s from "./styles.module.scss";

export default function TabelSearchAndColumnVisibility() {
  return (
    <div className={s.searchAndVisibility}> 
      <Input 
        variant={"s"}
        type={"search"}
        placeholder={"Search by name..."}
      />
    </div>
  );
}
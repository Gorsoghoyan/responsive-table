import { Link } from "react-router-dom";
import s from "./styles.module.scss";

export default function Header() {
  return (
    <header className={s.header}>
      <Link className={s.logo} to={"/"}>
        Reac<b>T</b>ask
      </Link>
      <nav>
        <Link to={"/binary-tree"}>Binary tree</Link>
      </nav>
    </header>
  );
}
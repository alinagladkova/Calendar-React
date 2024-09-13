import Header from "../header/Header";
import cn from "classnames";
import styles from "./wrapper.module.scss";
import Main from "../main/Main";

export default function Wrapper() {
  return (
    <div className={cn(styles.wrapper)}>
      <Header />
      <Main />
    </div>
  );
}

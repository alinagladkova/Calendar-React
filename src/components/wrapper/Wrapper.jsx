import Header from "../header/Header";
import cn from "classnames";
import styles from "./wrapper.module.scss";
import Main from "../main/Main";
import { useState } from "react";

export default function Wrapper() {
  const [useBtnState, setUseState] = useState(null);
  const date = new Date();
  const currentYear = date.getFullYear();
  const currentMonth = date.getMonth();

  const switchMonthHandler = (use) => {
    setUseState(use);
  };

  return (
    <div className={cn(styles.wrapper)}>
      <Header currentYear={currentYear} currentMonth={currentMonth} switchMonthHandler={switchMonthHandler} />
      <Main currentYear={currentYear} currentMonth={currentMonth} useStatus={useBtnState} />
    </div>
  );
}

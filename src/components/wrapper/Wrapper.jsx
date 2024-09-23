import { months } from "../../arrays.js";
import cn from "classnames";
import styles from "./wrapper.module.scss";
import Main from "../main/Main";
import Button from "../button/Button";
import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";
import { useState } from "react";

export default function Wrapper() {
  // const [useBtnState, setUseState] = useState(null);
  const date = new Date();
  const [currMonth, setCurrMonth] = useState(date.getMonth());
  const [currYear, setCurrYear] = useState(date.getFullYear());

  const setNextMonthHandler = () => {
    // currMonth===11
    setCurrMonth(currMonth + 1);
    // setCurrYear();
  };

  const setPrevMonthHandler = () => {
    setCurrMonth(currMonth - 1);
  };

  const switchHandler = (use) => {
    // switchHandler(use);
  };

  //надо зациклить прогулку по массиву.

  return (
    <div className={cn(styles.wrapper)}>
      <div className={cn(styles["wrapper-header"])}>
        <h1 className={cn(styles["wrapper-header__dateTitle"])}>
          {`${months[currMonth].slice(0, 1).toUpperCase() + months[currMonth].slice(1)} ${currYear}`}{" "}
        </h1>
        <div className={cn(styles["wrapper-header__control"])}>
          <Button icon={<BsChevronLeft />} use="left" setMonthHandler={setPrevMonthHandler} switchHandler={switchHandler} />
          <Button icon={<BsChevronRight />} use="right" setMonthHandler={setNextMonthHandler} switchHandler={switchHandler} />
        </div>
      </div>
      <Main currentYear={currYear} currentMonth={currMonth} />
    </div>
  );
}

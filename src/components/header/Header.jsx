import { months } from "../../arrays.js";
import { useState } from "react";
import styles from "./header.module.scss";
import cn from "classnames";
import Button from "../button/Button";
import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";

export default function Header({ currentYear, currentMonth, switchMonthHandler }) {
  const [currMonth, setCurrMonth] = useState(currentMonth);
  const [currYear, setCurrYear] = useState(currentYear);

  const switchHandler = (use) => {
    switchMonthHandler(use);
    //отправляем эти данные во wrapper, а оттуда в main и в monthdays

    //если клик на left, то в monthdays рисуем следующий месяц
  };

  // console.log(currMonth);
  const setNextMonthHandler = () => {
    // currMonth===11
    setCurrMonth(currMonth + 1);
    // setCurrYear();
  };

  const setPrevMonthHandler = () => {
    setCurrMonth(currMonth - 1);
  };

  return (
    <div className={cn(styles.header)}>
      <h1 className={cn(styles.header__dateTitle)}>{`${months[currMonth].slice(0, 1).toUpperCase() + months[currMonth].slice(1)} ${currentYear}`} </h1>
      <div className={cn(styles.header__control)}>
        <Button icon={<BsChevronLeft />} use="left" setMonthHandler={setPrevMonthHandler} switchHandler={switchHandler} />
        <Button icon={<BsChevronRight />} use="right" setMonthHandler={setNextMonthHandler} switchHandler={switchHandler} />
      </div>
    </div>
  );
}

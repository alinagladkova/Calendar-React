import { months } from "../../arrays.js";
import cn from "classnames";
import styles from "./calendar.module.scss";
import Main from "../main/Main.jsx";
import Button from "../button/Button.jsx";
import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";
import { useState } from "react";

export default function Calendar() {
  const date = new Date();
  const [currMonth, setCurrMonth] = useState(date.getMonth());
  const [currYear, setCurrYear] = useState(date.getFullYear());

  const setNextMonthHandler = () => {
    if (currMonth === 11) {
      setCurrMonth(0);
      setCurrYear(currYear + 1);
    } else {
      setCurrMonth(currMonth + 1);
    }
  };

  const setPrevMonthHandler = () => {
    if (currMonth === 0) {
      setCurrMonth(11);
      setCurrYear(currYear - 1);
    } else {
      setCurrMonth(currMonth - 1);
    }
  };

  return (
    <div className={cn(styles.calendar)}>
      <div className={cn(styles["calendar-header"])}>
        <h1 className={cn(styles["calendar-header__dateTitle"])}>
          {`${months[currMonth].slice(0, 1).toUpperCase() + months[currMonth].slice(1)} ${currYear}`}
        </h1>
        <div className={cn(styles["calendar-header__control"])}>
          <Button icon={<BsChevronLeft />} use="left" setMonthHandler={setPrevMonthHandler} />
          <Button icon={<BsChevronRight />} use="right" setMonthHandler={setNextMonthHandler} />
        </div>
      </div>
      <Main currentYear={currYear} currentMonth={currMonth} date={date} />
    </div>
  );
}

// - показывать текущую дату
// -показывать дни прошлого месяца
// -показывать дни будущего месяца

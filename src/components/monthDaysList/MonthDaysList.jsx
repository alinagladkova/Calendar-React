import { useState } from "react";
import Day from "../day/Day";
import styles from "./monthDaysList.module.scss";
import cn from "classnames";

export default function MonthDaysList({ currentYear, currentMonth, useStatus }) {
  const [lastDay, setLastDay] = useState(new Date(currentYear, currentMonth + 1, 0).getDate());
  const lastDateOfMonth = new Date(currentYear, currentMonth + 1, 0).getDate(); //get lastDate of Month

  const switchMonthHandler = () => {
    if (useStatus === "left") {
      lastDay = new Date(currentYear, currentMonth, 0).getDate();
      setLastDay(lastDay);
      // console.log(lastDay);
    } else lastDay = new Date(currentYear, currentMonth + 2, 0).getDate();
    setLastDay(lastDay);
  };

  const setDays = () => {
    const days = [];
    for (let i = 1; i <= lastDay; i++) {
      console.log(lastDay);

      days.push(i);
    }
    return days;
  };

  return (
    <ul className={cn(styles[`month-list`])}>
      {setDays().map((day) => {
        return <Day key={day} text={day}></Day>;
      })}
    </ul>
  );
}

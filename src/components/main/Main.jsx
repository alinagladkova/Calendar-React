import MonthDaysList from "../monthDaysList/MonthDaysList";
import WeekdaysList from "../weekdaysList/WeekdaysList";
import styles from "./main.module.scss";
import cn from "classnames";

export default function Main({ currentYear, currentMonth, date }) {
  return (
    <div className={cn(styles.main)}>
      <div className={cn(styles.main__weekdays)}>
        <WeekdaysList></WeekdaysList>
      </div>
      <div className={cn(styles.main__monthdays)}>
        <MonthDaysList currentYear={currentYear} currentMonth={currentMonth} date={date}></MonthDaysList>
      </div>
    </div>
  );
}

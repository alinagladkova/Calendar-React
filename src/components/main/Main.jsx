import MonthDaysList from "../monthDaysList/MonthDaysList";
import WeekdaysList from "../weekdaysList/WeekdaysList";
import styles from "./main.module.scss";
import cn from "classnames";

export default function Main() {
  return (
    <div className={cn(styles.main)}>
      <WeekdaysList></WeekdaysList>
      <MonthDaysList></MonthDaysList>
    </div>
  );
}

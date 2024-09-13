import Day from "../day/Day";
import styles from "./monthDaysList.module.scss";
import cn from "classnames";

export default function MonthDaysList() {
  return <ul className={cn(styles[`month-list`])}>{<Day />}</ul>;
}

import Day from "../day/Day";
import styles from "./monthDaysList.module.scss";
import cn from "classnames";

export default function MonthDaysList({ currentYear, currentMonth }) {
  const lastDateOfMonth = new Date(currentYear, currentMonth + 1, 0).getDate(); //get lastDate of Month

  const setDays = () => {
    const days = [];
    for (let i = 1; i <= lastDateOfMonth; i++) {
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

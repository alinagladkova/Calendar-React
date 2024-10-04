import Day from "../day/Day";
import styles from "./monthDaysList.module.scss";
import cn from "classnames";

export default function MonthDaysList({ currentYear, currentMonth, date }) {
  const firstDayOfMonth = new Date(currentYear, currentMonth, 0).getDay(); //get first day of month
  const lastDateOfMonth = new Date(currentYear, currentMonth + 1, 0).getDate(); //get last date of Month
  const lastDayOfMonth = new Date(currentYear, currentMonth, lastDateOfMonth).getDay(); //get last day of Month
  const lastDateOfPrevMonth = new Date(currentYear, currentMonth, 0).getDate(); //get last date of prev Month

  const setDays = () => {
    const days = [];
    //last days of prev month
    for (let i = firstDayOfMonth; i > 0; i--) {
      days.push(lastDateOfPrevMonth - i + 1);
    }
    //curr month days
    for (let i = 1; i <= lastDateOfMonth; i++) {
      days.push(i);
    }
    //first days of next month
    for (let i = lastDayOfMonth; i < 7; i++) {
      if (lastDayOfMonth !== 0) {
        days.push(i - lastDayOfMonth + 1);
      }
    }
    return days;
  };

  return (
    <ul className={cn(styles[`month-list`])}>
      {setDays().map((day, i) => {
        return (
          <Day
            key={i}
            text={day}
            notCurrent={(i < 6 && day > 20) || (i > 24 && day < 8) ? "inactive" : ""}
            today={i === date.getDate() && currentMonth === date.getMonth() && currentYear === date.getFullYear() ? "today" : ""} //!!!
          ></Day>
        );
      })}
    </ul>
  );
}

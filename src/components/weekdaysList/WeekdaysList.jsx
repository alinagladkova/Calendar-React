import weekdays from "../../arrays.js";
import Weekday from "../weekday/Weekday";
import styles from "./weekdaysList.module.scss";
import cn from "classnames";

export default function Weekdays() {
  return (
    <ul className={cn(styles[`weekdays-list`])}>
      {weekdays.map((weekday) => {
        return <Weekday key={weekday} text={weekday}></Weekday>;
      })}
    </ul>
  );
}

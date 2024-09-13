import styles from "./weekday.module.scss";
import cn from "classnames";

export default function Weekday({ text }) {
  return <li className={cn(styles.weekday)}>{text}</li>;
}

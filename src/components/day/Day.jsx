import styles from "./day.module.scss";
import cn from "classnames";

export default function Day({ text, notCurrent, today }) {
  return <li className={cn(styles.day, styles[`day--${notCurrent}`], styles[`day--${today}`])}>{text}</li>;
}

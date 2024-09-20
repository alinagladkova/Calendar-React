import styles from "./day.module.scss";
import cn from "classnames";

export default function Day({ text }) {
  return <li className={cn(styles.day)}>{text}</li>;
}

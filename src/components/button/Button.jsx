import styles from "./button.module.scss";
import cn from "classnames";

export default function Button({ icon }) {
  return <button className={cn(styles.btn, styles[`btn--${"switchLeft"}`])}>{icon}</button>;
}

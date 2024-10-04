import styles from "./button.module.scss";
import cn from "classnames";

export default function Button({ icon, use, setMonthHandler }) {
  const clickAction = () => {
    setMonthHandler();
  };

  return (
    <button className={cn(styles.btn, styles[`btn--${use}`])} onClick={clickAction}>
      {icon}
    </button>
  );
}

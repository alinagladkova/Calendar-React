import styles from "./button.module.scss";
import cn from "classnames";

export default function Button({ icon, use, setMonthHandler, switchHandler }) {
  const clickAction = () => {
    setMonthHandler();
    switchHandler(use);
  };

  return (
    <button className={cn(styles.btn, styles[`btn--${use}`])} onClick={clickAction}>
      {icon}
    </button>
  );
}

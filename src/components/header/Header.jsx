import styles from "./header.module.scss";
import cn from "classnames";
import Button from "../button/Button";
import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";

export default function Header() {
  return (
    <div className={cn(styles.header)}>
      <h1 className={cn(styles.header__dateTitle)}>September 2022</h1>
      <div className={cn(styles.header__control)}>
        <Button icon={<BsChevronLeft />} />
        <Button icon={<BsChevronRight />} />
      </div>
    </div>
  );
}

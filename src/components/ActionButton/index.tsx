import { MouseEventHandler } from "react";

import styles from "./styles.module.css";

type ActionButtonProps = {
  handleClick: MouseEventHandler<HTMLButtonElement>;
  children: string;
};

export default function ActionButton({
  handleClick,
  children,
}: ActionButtonProps) {
  return (
    <button className={styles.action_btn} onClick={handleClick}>
      {children}
    </button>
  );
}

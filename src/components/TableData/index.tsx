import styles from "./styles.module.css";

type TableDataProps = {
  isButton: boolean;
  children: React.ReactNode;
};

export default function TableData({ isButton, children }: TableDataProps) {
  return (
    <td
      className={
        isButton
          ? `${styles.table_data} ${styles.is_btn}`
          : `${styles.table_data}`
      }
    >
      {children}
    </td>
  );
}

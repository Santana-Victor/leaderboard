import styles from "./styles.module.css";

export default function TableRow({ children }: { children: React.ReactNode }) {
  return <tr className={styles.table_row}>{children}</tr>;
}

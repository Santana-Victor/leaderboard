import styles from "./styles.module.css";

type TableHeadProps = {
  scope: string;
  colSpan: number;
  children: string;
};

export default function TableHead({
  scope,
  colSpan,
  children,
}: TableHeadProps) {
  return (
    <th className={styles.table_head} scope={scope} colSpan={colSpan}>
      {children}
    </th>
  );
}

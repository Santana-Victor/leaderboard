import styles from "./styles.module.css";

export default function Table({ children }: { children: React.ReactNode }) {
  return <table className={styles.table}>{children}</table>;
}

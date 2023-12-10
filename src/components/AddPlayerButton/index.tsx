import styles from "./styles.module.css";

export default function AddPlayerButton({ children }: { children: string }) {
  return <button className={styles.add_player_btn}>{children}</button>;
}

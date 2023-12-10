import styles from "./styles.module.css";

import { usePlayerNameStore } from "../../store/PlayerNameStore";

type InputPlayerNameProps = {
  type: string;
  id: string;
  placeHolder: string;
};

export default function InputPlayerName({
  type,
  id,
  placeHolder,
}: InputPlayerNameProps) {
  const [playerName, setPlayerName] = usePlayerNameStore((state) => [
    state.playerName,
    state.setPlayerName,
  ]);

  return (
    <input
      type={type}
      className={styles.input_player_name}
      id={id}
      placeholder={placeHolder}
      onChange={(event) => setPlayerName(event.target.value)}
      value={playerName}
    />
  );
}

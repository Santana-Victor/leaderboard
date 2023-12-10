import styles from "./styles.module.css";

import InputPlayerName from "../InputPlayerName";
import AddPlayerButton from "../AddPlayerButton";

import useHandleSubmitPlayerName from "../../hooks/useHandleSubmitPlayerName";

export default function FormAddPlayer() {
  const { handleSubmitPlayerName } = useHandleSubmitPlayerName();

  return (
    <form className={styles.form} onSubmit={handleSubmitPlayerName}>
      <label htmlFor={"input"} className={styles.label}>
        Nome do jogador:
      </label>
      <InputPlayerName
        type={"text"}
        id={"input"}
        placeHolder={"Digite o nome do jogador"}
      />
      <AddPlayerButton>Adicionar jogador</AddPlayerButton>
    </form>
  );
}

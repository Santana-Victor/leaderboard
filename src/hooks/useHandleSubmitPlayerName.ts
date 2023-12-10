import { FormEvent } from "react";

import { usePlayerNameStore } from "../store/PlayerNameStore";
import { useListPlayersStore } from "../store/ListPlayersStore";

export default function useHandleSubmitPlayerName() {
  const [playerName, setPlayerName] = usePlayerNameStore((state) => [
    state.playerName,
    state.setPlayerName,
  ]);
  const addPlayer = useListPlayersStore((state) => state.addPlayer);

  const handleSubmitPlayerName = (event: FormEvent) => {
    event.preventDefault();

    addPlayer({
      playerName: playerName,
      playerId: Math.floor(Math.random() * 1_000_000_000),
    });

    setPlayerName("");
  };

  return { handleSubmitPlayerName };
}

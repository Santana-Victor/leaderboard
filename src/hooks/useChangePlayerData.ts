import { useState } from "react";

export default function useChangePlayerData() {
  const [playerWins, setPlayerWins] = useState(0);
  const [playerDraws, setPlayerDraws] = useState(0);
  const [playerDefeats, setPlayerDefeats] = useState(0);
  const [playerPoints, setPlayerPoints] = useState(0);

  const addWins = () => {
    setPlayerWins((prev) => prev + 1);
    setPlayerPoints((prev) => prev + 3);
  };

  const addDraws = () => {
    setPlayerDraws((prev) => prev + 1);
    setPlayerPoints((prev) => prev + 1);
  };

  const addDefeats = () => {
    setPlayerDefeats((prev) => prev + 1);
  };

  return {
    playerData: { playerWins, playerDraws, playerDefeats, playerPoints },
    addWins,
    addDraws,
    addDefeats,
  };
}

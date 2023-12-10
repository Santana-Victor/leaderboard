import TableData from "../TableData";
import ActionButton from "../ActionButton";

import useChangePlayerData from "../../hooks/useChangePlayerData";

export default function PlayerData({ playerName }: { playerName: string }) {
  const { playerData, addWins, addDraws, addDefeats } = useChangePlayerData();

  return (
    <>
      <TableData isButton={false}>{playerName}</TableData>
      <TableData isButton={false}>{playerData.playerWins}</TableData>
      <TableData isButton={false}>{playerData.playerDraws}</TableData>
      <TableData isButton={false}>{playerData.playerDefeats}</TableData>
      <TableData isButton={false}>{playerData.playerPoints}</TableData>
      <TableData isButton={true}>
        <ActionButton handleClick={addWins}>Vitória</ActionButton>
      </TableData>
      <TableData isButton={true}>
        <ActionButton handleClick={addDraws}>Empate</ActionButton>
      </TableData>
      <TableData isButton={true}>
        <ActionButton handleClick={addDefeats}>Derrota</ActionButton>
      </TableData>
    </>
  );
}

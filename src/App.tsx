import Main from "./components/Main";
import Title from "./components/Title";
import FormAddPlayer from "./components/FormAddPlayer";
import Table from "./components/Table";
import TableRow from "./components/TableRow";
import TableHead from "./components/TableHead";
import PlayerData from "./components/PlayerData";

import { useListPlayersStore } from "./store/ListPlayersStore";

import infosTableHeadProps from "./informations/infoTableHeadProps";

export default function App() {
  const listPlayers = useListPlayersStore((state) => state.listPlayers);

  return (
    <>
      <Main>
        <Title>Tabela de classificação</Title>
        <FormAddPlayer />
        <Table>
          <thead>
            <TableRow>
              {infosTableHeadProps.length > 0 &&
                infosTableHeadProps.map((item) => (
                  <TableHead
                    scope={item.scope}
                    colSpan={item.colSpan}
                    key={item.id}
                  >
                    {item.text}
                  </TableHead>
                ))}
            </TableRow>
          </thead>
          <tbody>
            {listPlayers.length > 0 &&
              listPlayers.map((player) => (
                <TableRow key={player.playerId}>
                  <PlayerData playerName={player.playerName} />
                </TableRow>
              ))}
          </tbody>
        </Table>
      </Main>
    </>
  );
}

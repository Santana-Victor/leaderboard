import { create } from "zustand";

import PlayerProps from "../types/PlayerProps";

type StoreProps = {
  listPlayers: PlayerProps[];
  addPlayer: (newPlayer: PlayerProps) => void;
};

export const useListPlayersStore = create<StoreProps>((set) => ({
  listPlayers: [],
  addPlayer: (newPlayer) =>
    set((state) => ({
      listPlayers: [...state.listPlayers, newPlayer],
    })),
}));

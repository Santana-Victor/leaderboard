import { create } from "zustand";

type StoreProps = {
  playerName: string;
  setPlayerName: (newPlayerName: string) => void;
};

export const usePlayerNameStore = create<StoreProps>((set) => ({
  playerName: "",
  setPlayerName: (newPlayerName) => set(() => ({ playerName: newPlayerName })),
}));

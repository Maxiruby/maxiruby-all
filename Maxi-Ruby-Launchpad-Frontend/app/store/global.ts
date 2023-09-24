import { StateCreator } from "zustand";

// config
import { Constants } from "~/config";

// utils
import { storage } from "~/utils/storage";

// types
import { Theme } from "~/types/context.types";

export type GlobalState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

export const createGlobalStore: StateCreator<GlobalState> = (set) => ({
  theme: Theme.Dark,
  setTheme: (theme: Theme) => {
    set((state) => ({ ...state, theme }));
    storage.set(Constants.Theme, theme);
  },
});

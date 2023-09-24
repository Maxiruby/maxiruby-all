import { create } from "zustand";

// slices
import { createGlobalStore, type GlobalState } from "./global";
import { createAuthStore, type AuthState } from "./auth";

type AppState = GlobalState & AuthState;

export const useAppStore = create<AppState>((...store) => ({
  ...createGlobalStore(...store),
  ...createAuthStore(...store),
  // ...createAuthStore(...store),
}));

import { StateCreator } from "zustand";

interface Profile {
  password: string;
  email: string;
  oauthProvider: string;
  oauthId: string;
  wallets: any;
  holderCount: number;
  isWhitelisted: boolean;
  userVerified: boolean;
  username: string;
  surname: string;
  isAdmin: boolean;
}

export type AuthState = {
  profile: Profile | undefined;
  token: string | undefined;
  setProfile: (profile: any) => void;
  setToken: (token: string) => void;
};

export const createAuthStore: StateCreator<AuthState> = (set) => ({
  profile: undefined,
  token: "",
  setProfile: (profile: Profile) => {
    set((state) => ({ ...state, profile }));
  },
  setToken: (token: string) => {
    set((state) => ({ ...state, token }));
  },
});

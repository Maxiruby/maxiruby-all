export enum Theme {
  Dark,
  Light,
}

export type AppState = {
  theme: Theme;
  changeTheme: (theme: Theme) => void;
};

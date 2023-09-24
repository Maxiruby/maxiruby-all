import { persistentDevCache } from "~/utils/dev";

export const route = persistentDevCache("route", () => {
  previous: null;
});

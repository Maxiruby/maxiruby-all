import { isSSR } from "~/utils/ssr";

class Storage {
  private storage: typeof window.localStorage | undefined = undefined;

  // parse json
  private parse<T>(data: T) {
    const parsed = typeof data === "string" ? JSON.parse(data) : data;
    return parsed;
  }

  // stringify json
  private stringify<T>(data: T) {
    const stringified = typeof data !== "string" ? JSON.stringify(data) : data;
    return stringified;
  }

  // initialize storage on create
  public initialize() {
    if (isSSR()) return undefined;

    this.storage = window.localStorage;
  }

  // read storage
  public get(key: string) {
    if (!this.storage) return undefined;

    const property = this.storage.getItem(key);

    if (property === undefined || property === null) {
      return undefined;
    }

    return this.parse(property);
  }

  // write storage
  public set<T>(key: string, value: T) {
    if (!this.storage) return undefined;

    if (typeof key === "undefined") {
      return console.error("[storage] Key is must be set.");
    }

    if (typeof value === "undefined") {
      return console.error("[storage] Value is must be set.");
    }

    const stringifiedValue = this.stringify(value);
    this.storage.setItem(key, stringifiedValue);
  }

  // remove storage
  public remove(key: string) {
    if (!this.storage) return undefined;

    if (typeof key === "undefined" || typeof key !== "string") {
      return console.error(`[storage] Key is must be set in string. key: ${key || "none"}`);
    }

    this.storage.removeItem(key);
  }
}

export const storage = new Storage();
storage.initialize();

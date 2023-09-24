import TTLCache from "@isaacs/ttlcache";

// utils
import { persistentDevCache } from "~/utils/dev";

export enum GenericCache {}
// ... if dynamic cache is neededs

class Cache {
  // ttl is in milliseconds
  //
  // example of:
  // 1000 (milliseconds) * 60 (seconds) * x (minutes) * x (hour)
  public generic: TTLCache<string, any> = new TTLCache<string, any>({
    ttl: 1_000 * 60 * 30 * 1, // half an hour,
    max: 5000
  });

  public nfts: TTLCache<string, any> = new TTLCache<string, any>({
    ttl: 1_000 * 60 * 60 * 1, // an hour,
    max: 3000
  });

  public collections: TTLCache<string, any> = new TTLCache<string, any>({
    ttl: 1000 * 60 * 60 * 3, // 3 hours,
    max: 1500
  });

  // TODO:
  // - clear cache function
  // - getter and setter functions for each cache
}

export const cache = persistentDevCache("cache", () => new Cache());

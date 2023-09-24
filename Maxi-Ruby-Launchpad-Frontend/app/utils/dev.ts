// as remix rebuilds everything in development, caching doesn't work, so this is a helper for that.
export function persistentDevCache<T>(name: string, builder: () => T): T {
  if (process.env.NODE_ENV === "production") {
    return builder();
  }

  if (global[name as keyof typeof global] === undefined) {
    // @ts-ignore
    global[name as keyof typeof global] = builder();
  }

  return global[name as keyof typeof global];
}

export function isSSR(): boolean {
  return typeof document === "undefined";
}

export function sharedEnv(): any {
  return isSSR() ? process.env : (window as any).env;
}

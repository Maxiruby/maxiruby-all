import {
  require_with_selector
} from "/build/_shared/chunk-65R6ZMAR.js";
import {
  createHotContext
} from "/build/_shared/chunk-HBGEQ2HX.js";
import {
  require_react
} from "/build/_shared/chunk-6NJTHYWJ.js";
import {
  __toESM
} from "/build/_shared/chunk-DPSM2F2X.js";

// app/utils/ssr.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/utils/ssr.ts"
  );
  import.meta.hot.lastModified = "1691945345609.1829";
}
function isSSR() {
  return typeof document === "undefined";
}

// app/utils/storage.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/utils/storage.ts"
  );
  import.meta.hot.lastModified = "1691945345609.251";
}
var Storage = class {
  storage = void 0;
  // parse json
  parse(data) {
    const parsed = typeof data === "string" ? JSON.parse(data) : data;
    return parsed;
  }
  // stringify json
  stringify(data) {
    const stringified = typeof data !== "string" ? JSON.stringify(data) : data;
    return stringified;
  }
  // initialize storage on create
  initialize() {
    if (isSSR())
      return void 0;
    this.storage = window.localStorage;
  }
  // read storage
  get(key) {
    if (!this.storage)
      return void 0;
    const property = this.storage.getItem(key);
    if (property === void 0 || property === null) {
      return void 0;
    }
    return this.parse(property);
  }
  // write storage
  set(key, value) {
    if (!this.storage)
      return void 0;
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
  remove(key) {
    if (!this.storage)
      return void 0;
    if (typeof key === "undefined" || typeof key !== "string") {
      return console.error(`[storage] Key is must be set in string. key: ${key || "none"}`);
    }
    this.storage.removeItem(key);
  }
};
var storage = new Storage();
storage.initialize();

// node_modules/zustand/esm/vanilla.mjs
var createStoreImpl = (createState) => {
  let state;
  const listeners = /* @__PURE__ */ new Set();
  const setState = (partial, replace) => {
    const nextState = typeof partial === "function" ? partial(state) : partial;
    if (!Object.is(nextState, state)) {
      const previousState = state;
      state = (replace != null ? replace : typeof nextState !== "object") ? nextState : Object.assign({}, state, nextState);
      listeners.forEach((listener) => listener(state, previousState));
    }
  };
  const getState = () => state;
  const subscribe = (listener) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  };
  const destroy = () => {
    if ((import.meta.env ? import.meta.env.MODE : void 0) !== "production") {
      console.warn(
        "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
      );
    }
    listeners.clear();
  };
  const api = { setState, getState, subscribe, destroy };
  state = createState(setState, getState, api);
  return api;
};
var createStore = (createState) => createState ? createStoreImpl(createState) : createStoreImpl;

// node_modules/zustand/esm/index.mjs
var import_react = __toESM(require_react(), 1);
var import_with_selector = __toESM(require_with_selector(), 1);
var { useSyncExternalStoreWithSelector } = import_with_selector.default;
function useStore(api, selector = api.getState, equalityFn) {
  if ((import.meta.env ? import.meta.env.MODE : void 0) !== "production" && equalityFn) {
    console.warn(
      "[DEPRECATED] Use `createWithEqualityFn` from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"
    );
  }
  const slice = useSyncExternalStoreWithSelector(
    api.subscribe,
    api.getState,
    api.getServerState || api.getState,
    selector,
    equalityFn
  );
  (0, import_react.useDebugValue)(slice);
  return slice;
}
var createImpl = (createState) => {
  if ((import.meta.env ? import.meta.env.MODE : void 0) !== "production" && typeof createState !== "function") {
    console.warn(
      "[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`."
    );
  }
  const api = typeof createState === "function" ? createStore(createState) : createState;
  const useBoundStore = (selector, equalityFn) => useStore(api, selector, equalityFn);
  Object.assign(useBoundStore, api);
  return useBoundStore;
};
var create = (createState) => createState ? createImpl(createState) : createImpl;

// app/store/global.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/store/global.ts"
  );
  import.meta.hot.lastModified = "1691945345608.1956";
}
var createGlobalStore = (set) => ({
  theme: 0 /* Dark */,
  setTheme: (theme) => {
    set((state) => ({ ...state, theme }));
    storage.set("maxiruby-theme" /* Theme */, theme);
  }
});

// app/store/auth.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/store/auth.ts"
  );
  import.meta.hot.lastModified = "1693669641487.6042";
}
var createAuthStore = (set) => ({
  profile: void 0,
  token: "",
  setProfile: (profile) => {
    set((state) => ({ ...state, profile }));
  },
  setToken: (token) => {
    set((state) => ({ ...state, token }));
  }
});

// app/store/index.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/store/index.ts"
  );
  import.meta.hot.lastModified = "1691945345608.2651";
}
var useAppStore = create((...store) => ({
  ...createGlobalStore(...store),
  ...createAuthStore(...store)
  // ...createAuthStore(...store),
}));

export {
  storage,
  useAppStore
};
//# sourceMappingURL=/build/_shared/chunk-J3LEAWOY.js.map

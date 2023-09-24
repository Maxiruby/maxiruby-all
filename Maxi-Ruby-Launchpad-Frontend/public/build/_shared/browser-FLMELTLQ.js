import {
  __esm
} from "/build/_shared/chunk-DPSM2F2X.js";

// node_modules/isomorphic-ws/browser.js
var ws, browser_default;
var init_browser = __esm({
  "node_modules/isomorphic-ws/browser.js"() {
    ws = null;
    if (typeof WebSocket !== "undefined") {
      ws = WebSocket;
    } else if (typeof MozWebSocket !== "undefined") {
      ws = MozWebSocket;
    } else if (typeof globalThis !== "undefined") {
      ws = globalThis.WebSocket || globalThis.MozWebSocket;
    } else if (typeof window !== "undefined") {
      ws = window.WebSocket || window.MozWebSocket;
    } else if (typeof self !== "undefined") {
      ws = self.WebSocket || self.MozWebSocket;
    }
    browser_default = ws;
  }
});
init_browser();
export {
  browser_default as default
};
//# sourceMappingURL=/build/_shared/browser-FLMELTLQ.js.map
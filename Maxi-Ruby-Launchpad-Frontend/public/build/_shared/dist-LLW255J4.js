import {
  ne,
  p,
  se,
  y
} from "/build/_shared/chunk-CJGOLUMR.js";
import "/build/_shared/chunk-DPSM2F2X.js";

// node_modules/@walletconnect/modal/dist/index.js
var d = class {
  constructor(e) {
    this.openModal = se.open, this.closeModal = se.close, this.subscribeModal = se.subscribe, this.setTheme = ne.setThemeConfig, ne.setThemeConfig(e), y.setConfig(e), this.initUi();
  }
  async initUi() {
    if (typeof window < "u") {
      await import("/build/_shared/dist-ACQZ6YZJ.js");
      const e = document.createElement("wcm-modal");
      document.body.insertAdjacentElement("beforeend", e), p.setIsUiLoaded(true);
    }
  }
};
export {
  d as WalletConnectModal
};
//# sourceMappingURL=/build/_shared/dist-LLW255J4.js.map

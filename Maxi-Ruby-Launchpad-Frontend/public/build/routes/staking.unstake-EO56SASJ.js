import {
  StakingCard
} from "/build/_shared/chunk-WA7V5MFT.js";
import "/build/_shared/chunk-FVLKBUYM.js";
import "/build/_shared/chunk-N3SURL52.js";
import "/build/_shared/chunk-MW7V54UB.js";
import "/build/_shared/chunk-IEEYB6LV.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-7PGEV6FY.js";
import {
  createHotContext
} from "/build/_shared/chunk-HBGEQ2HX.js";
import "/build/_shared/chunk-DDY2UGSS.js";
import {
  require_react
} from "/build/_shared/chunk-6NJTHYWJ.js";
import {
  __toESM
} from "/build/_shared/chunk-DPSM2F2X.js";

// app/routes/staking.unstake.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/staking.unstake.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/staking.unstake.tsx"
  );
  import.meta.hot.lastModified = "1691945345604.891";
}
function StakingUnstake() {
  _s();
  const [lockDuration, setLockDuration] = import_react.default.useState("7");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 flex-col justify-center items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StakingCard, { type: "unstake", lockDuration, setLockDuration }, void 0, false, {
    fileName: "app/routes/staking.unstake.tsx",
    lineNumber: 28,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/staking.unstake.tsx",
    lineNumber: 27,
    columnNumber: 10
  }, this);
}
_s(StakingUnstake, "jHK+u17mM7Am21MzCvAjmMIJ3D8=");
_c = StakingUnstake;
var _c;
$RefreshReg$(_c, "StakingUnstake");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  StakingUnstake as default
};
//# sourceMappingURL=/build/routes/staking.unstake-EO56SASJ.js.map

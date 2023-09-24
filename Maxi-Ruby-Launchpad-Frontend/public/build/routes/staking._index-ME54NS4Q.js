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

// app/routes/staking._index.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/staking._index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/staking._index.tsx"
  );
  import.meta.hot.lastModified = "1691945345604.712";
}
function StakingIndex() {
  _s();
  const [lockDuration, setLockDuration] = import_react.default.useState("7");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 flex-col justify-center items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StakingCard, { type: "stake", lockDuration, setLockDuration }, void 0, false, {
    fileName: "app/routes/staking._index.tsx",
    lineNumber: 28,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/staking._index.tsx",
    lineNumber: 27,
    columnNumber: 10
  }, this);
}
_s(StakingIndex, "jHK+u17mM7Am21MzCvAjmMIJ3D8=");
_c = StakingIndex;
var _c;
$RefreshReg$(_c, "StakingIndex");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  StakingIndex as default
};
//# sourceMappingURL=/build/routes/staking._index-ME54NS4Q.js.map

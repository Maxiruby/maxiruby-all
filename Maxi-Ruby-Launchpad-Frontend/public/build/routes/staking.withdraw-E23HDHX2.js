import {
  Input_default
} from "/build/_shared/chunk-N3SURL52.js";
import {
  Button_default
} from "/build/_shared/chunk-IEEYB6LV.js";
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

// app/routes/staking.withdraw.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/staking.withdraw.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/staking.withdraw.tsx"
  );
  import.meta.hot.lastModified = "1691945345604.967";
}
function StakingWithdraw() {
  _s();
  const [lockDuration, setLockDuration] = import_react.default.useState("7");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 flex-col justify-center items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WithdrawCard, {}, void 0, false, {
    fileName: "app/routes/staking.withdraw.tsx",
    lineNumber: 29,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/staking.withdraw.tsx",
    lineNumber: 28,
    columnNumber: 10
  }, this);
}
_s(StakingWithdraw, "jHK+u17mM7Am21MzCvAjmMIJ3D8=");
_c = StakingWithdraw;
function WithdrawCard() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 flex-col w-full max-w-[700px] mx-auto bg-card rounded-xl py-8 px-6 gap-y-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: "flex flex-1 justify-center items-center divide-x divide-solid divide-border", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col justify-center items-center text-center gap-y-1 mr-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-muted-foreground text-sm font-semibold", children: "Total Token Amount" }, void 0, false, {
          fileName: "app/routes/staking.withdraw.tsx",
          lineNumber: 38,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-sm font-bold", children: "100" }, void 0, false, {
          fileName: "app/routes/staking.withdraw.tsx",
          lineNumber: 42,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/staking.withdraw.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col justify-center items-center text-center gap-y-1 pl-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-muted-foreground text-sm font-semibold", children: "Available to Withdrawal" }, void 0, false, {
          fileName: "app/routes/staking.withdraw.tsx",
          lineNumber: 46,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-sm font-bold", children: "50" }, void 0, false, {
          fileName: "app/routes/staking.withdraw.tsx",
          lineNumber: 50,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/staking.withdraw.tsx",
        lineNumber: 45,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/staking.withdraw.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 flex-col gap-y-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 items-center justify-between gap-x-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-muted-foreground font-semibold", children: "Amount to Withdraw" }, void 0, false, {
          fileName: "app/routes/staking.withdraw.tsx",
          lineNumber: 56,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-muted-foreground font-semibold", children: "BNB" }, void 0, false, {
          fileName: "app/routes/staking.withdraw.tsx",
          lineNumber: 59,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/staking.withdraw.tsx",
        lineNumber: 55,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative flex flex-1 items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input_default, { type: "text", placeholder: "0.00", value: "", onChange: () => {
        }, className: "pr-12 py-4 bg-transparent" }, void 0, false, {
          fileName: "app/routes/staking.withdraw.tsx",
          lineNumber: 63,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { type: "button", title: "MAX", variant: "ghost", className: "absolute right-0.5 top-0.5 bottom-0.5 hover:bg-secondary hover:text-foreground", size: "small", children: "MAX" }, void 0, false, {
          fileName: "app/routes/staking.withdraw.tsx",
          lineNumber: 64,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/staking.withdraw.tsx",
        lineNumber: 62,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/staking.withdraw.tsx",
      lineNumber: 54,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { type: "button", title: "Withdraw", variant: "primary", className: "w-fit mx-auto px-8", children: "Withdraw" }, void 0, false, {
      fileName: "app/routes/staking.withdraw.tsx",
      lineNumber: 70,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/staking.withdraw.tsx",
    lineNumber: 35,
    columnNumber: 10
  }, this);
}
_c2 = WithdrawCard;
var _c;
var _c2;
$RefreshReg$(_c, "StakingWithdraw");
$RefreshReg$(_c2, "WithdrawCard");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  StakingWithdraw as default
};
//# sourceMappingURL=/build/routes/staking.withdraw-E23HDHX2.js.map

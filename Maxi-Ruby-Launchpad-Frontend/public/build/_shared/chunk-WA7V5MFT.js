import {
  Container,
  Section
} from "/build/_shared/chunk-FVLKBUYM.js";
import {
  Input_default
} from "/build/_shared/chunk-N3SURL52.js";
import {
  NavLink,
  Outlet
} from "/build/_shared/chunk-MW7V54UB.js";
import {
  Button_default,
  cn
} from "/build/_shared/chunk-IEEYB6LV.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-7PGEV6FY.js";
import {
  createHotContext
} from "/build/_shared/chunk-HBGEQ2HX.js";
import {
  __toESM
} from "/build/_shared/chunk-DPSM2F2X.js";

// app/routes/staking.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/staking.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/staking.tsx"
  );
  import.meta.hot.lastModified = "1691945345604.8147";
}
var meta = () => {
  return [{
    title: "Staking \u2014 Maxiruby"
  }, {
    name: "description",
    content: "Staking \u2014 Maxiruby"
  }];
};
function Staking() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 flex-col h-full min-h-[75vh]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 flex-col gap-y-16", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StakingStats, {}, void 0, false, {
      fileName: "app/routes/staking.tsx",
      lineNumber: 44,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 justify-center items-center gap-x-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: "/staking", end: true, children: ({
        isActive
      }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { type: "button", title: "Stake", variant: isActive ? "primary" : "secondary", children: "Stake" }, void 0, false, {
        fileName: "app/routes/staking.tsx",
        lineNumber: 50,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/staking.tsx",
        lineNumber: 47,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: "/staking/unstake", end: true, children: ({
        isActive
      }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { type: "button", title: "Unstake", variant: isActive ? "primary" : "secondary", children: "Unstake" }, void 0, false, {
        fileName: "app/routes/staking.tsx",
        lineNumber: 58,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/staking.tsx",
        lineNumber: 55,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: "/staking/withdraw", end: true, children: ({
        isActive
      }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { type: "button", title: "Withdraw", variant: isActive ? "primary" : "secondary", children: "Withdraw" }, void 0, false, {
        fileName: "app/routes/staking.tsx",
        lineNumber: 66,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/staking.tsx",
        lineNumber: 63,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/staking.tsx",
      lineNumber: 46,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
      fileName: "app/routes/staking.tsx",
      lineNumber: 72,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/staking.tsx",
    lineNumber: 43,
    columnNumber: 11
  }, this) }, void 0, false, {
    fileName: "app/routes/staking.tsx",
    lineNumber: 42,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/routes/staking.tsx",
    lineNumber: 41,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/staking.tsx",
    lineNumber: 40,
    columnNumber: 10
  }, this);
}
_c = Staking;
function StakingStats() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 flex-row flex-wrap items-stretch gap-y-5 gap-x-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 flex-row items-center justify-center gap-3 px-3 py-6 border border-solid border-border rounded-xl", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col justify-center items-center px-3 gap-y-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { className: "text-muted-foreground font-semibold", children: "Number of Stakers" }, void 0, false, {
          fileName: "app/routes/staking.tsx",
          lineNumber: 83,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-lg font-medium border-x border-solid border-border py-1 px-5", children: "123456" }, void 0, false, {
          fileName: "app/routes/staking.tsx",
          lineNumber: 86,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/staking.tsx",
        lineNumber: 82,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col justify-center items-center px-3 gap-y-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { className: "text-muted-foreground font-semibold", children: "Total Maxiruby Staked" }, void 0, false, {
          fileName: "app/routes/staking.tsx",
          lineNumber: 91,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-lg font-medium border-x border-solid border-border py-1 px-5", children: "123456789" }, void 0, false, {
          fileName: "app/routes/staking.tsx",
          lineNumber: 94,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/staking.tsx",
        lineNumber: 90,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col justify-center items-center px-3 gap-y-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { className: "text-muted-foreground font-semibold", children: "APY" }, void 0, false, {
          fileName: "app/routes/staking.tsx",
          lineNumber: 99,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-lg font-medium border-x border-solid border-border py-1 px-5", children: "15%" }, void 0, false, {
          fileName: "app/routes/staking.tsx",
          lineNumber: 100,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/staking.tsx",
        lineNumber: 98,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/staking.tsx",
      lineNumber: 81,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 flex-row items-center justify-center gap-3 px-3 py-4 border border-solid border-border rounded-xl", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col justify-center items-center px-3 gap-y-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { className: "text-muted-foreground font-semibold", children: "Your Staked" }, void 0, false, {
          fileName: "app/routes/staking.tsx",
          lineNumber: 108,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-lg font-medium border-x border-solid border-border py-1 px-5", children: "0.00 BNB" }, void 0, false, {
          fileName: "app/routes/staking.tsx",
          lineNumber: 111,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/staking.tsx",
        lineNumber: 107,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col justify-center items-center px-3 gap-y-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { className: "text-muted-foreground font-semibold", children: "Your Unstaked" }, void 0, false, {
          fileName: "app/routes/staking.tsx",
          lineNumber: 116,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-lg font-medium border-x border-solid border-border py-1 px-5", children: "0.00 BNB" }, void 0, false, {
          fileName: "app/routes/staking.tsx",
          lineNumber: 119,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/staking.tsx",
        lineNumber: 115,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col justify-center items-center px-3 gap-y-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { className: "text-muted-foreground font-semibold", children: "Your Rewards" }, void 0, false, {
          fileName: "app/routes/staking.tsx",
          lineNumber: 124,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-lg font-medium border-x border-solid border-border py-1 px-5", children: "0.00 BNB" }, void 0, false, {
          fileName: "app/routes/staking.tsx",
          lineNumber: 127,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/staking.tsx",
        lineNumber: 123,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/staking.tsx",
      lineNumber: 106,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/staking.tsx",
    lineNumber: 80,
    columnNumber: 10
  }, this);
}
_c2 = StakingStats;
function StakingCard({
  type,
  lockDuration,
  setLockDuration
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 flex-col w-full max-w-[700px] mx-auto bg-card rounded-xl py-8 px-6 gap-y-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: "flex flex-1 flex-col justify-center items-center gap-y-5", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h6", { className: "text-lg text-muted-foreground font-semibold uppercase", children: "Lock Duration" }, void 0, false, {
        fileName: "app/routes/staking.tsx",
        lineNumber: 142,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 flex-wrap items-center justify-center gap-3", children: ["7", "14", "30", "60", "90", "180"].map((duration) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { type: "button", title: `${duration} Days`, variant: "secondary", onClick: () => setLockDuration(duration), className: cn("py-2 px-6 bg-background flex-col justify-center items-center text-center border border-solid", {
        "border-accent": lockDuration === duration
      }), children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-base", children: duration }, void 0, false, {
          fileName: "app/routes/staking.tsx",
          lineNumber: 150,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-muted-foreground text-xs uppercase", children: "Days" }, void 0, false, {
          fileName: "app/routes/staking.tsx",
          lineNumber: 151,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/staking.tsx",
        lineNumber: 147,
        columnNumber: 65
      }, this)) }, void 0, false, {
        fileName: "app/routes/staking.tsx",
        lineNumber: 146,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/staking.tsx",
      lineNumber: 141,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 flex-col gap-y-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 items-center justify-between gap-x-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-muted-foreground font-semibold", children: [
          "Amount to ",
          type === "stake" ? "Stake" : "Unstake"
        ] }, void 0, true, {
          fileName: "app/routes/staking.tsx",
          lineNumber: 160,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-muted-foreground font-semibold", children: "BNB" }, void 0, false, {
          fileName: "app/routes/staking.tsx",
          lineNumber: 163,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/staking.tsx",
        lineNumber: 159,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative flex flex-1 items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input_default, { type: "text", placeholder: "0.00", value: "", onChange: () => {
        }, className: "pr-12 py-4 bg-transparent" }, void 0, false, {
          fileName: "app/routes/staking.tsx",
          lineNumber: 167,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { type: "button", title: "MAX", variant: "ghost", className: "absolute right-0.5 top-0.5 bottom-0.5 hover:bg-secondary hover:text-foreground", size: "small", children: "MAX" }, void 0, false, {
          fileName: "app/routes/staking.tsx",
          lineNumber: 168,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/staking.tsx",
        lineNumber: 166,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/staking.tsx",
      lineNumber: 158,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StakingCountdown, { type }, void 0, false, {
      fileName: "app/routes/staking.tsx",
      lineNumber: 174,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { type: "button", title: type === "stake" ? "Stake" : "Unstake", variant: "primary", className: "w-fit mx-auto px-8", children: type === "stake" ? "Stake" : "Unstake" }, void 0, false, {
      fileName: "app/routes/staking.tsx",
      lineNumber: 176,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/staking.tsx",
    lineNumber: 140,
    columnNumber: 10
  }, this);
}
_c3 = StakingCard;
function StakingCountdown({
  type
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col py-3 px-4 gap-y-3", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { className: "font-semibold text-foreground/75 text-center", children: [
      type === "stake" ? "Staking" : "Unstaking",
      " ends in"
    ] }, void 0, true, {
      fileName: "app/routes/staking.tsx",
      lineNumber: 186,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-wrap items-center space-x-3 space-y-3 w-full max-w-[400px] mx-auto", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col flex-1 justify-center items-center gap-y-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { className: "text-xl font-bold text-accent", children: "03" }, void 0, false, {
          fileName: "app/routes/staking.tsx",
          lineNumber: 192,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-sm text-foreground/60 font-semibold", children: "DAYS" }, void 0, false, {
          fileName: "app/routes/staking.tsx",
          lineNumber: 193,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/staking.tsx",
        lineNumber: 191,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col flex-1 justify-center items-center gap-y-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { className: "text-xl font-bold text-accent", children: "12" }, void 0, false, {
          fileName: "app/routes/staking.tsx",
          lineNumber: 196,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-sm text-foreground/60 font-semibold", children: "MINUTES" }, void 0, false, {
          fileName: "app/routes/staking.tsx",
          lineNumber: 197,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/staking.tsx",
        lineNumber: 195,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col flex-1 justify-center items-center gap-y-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { className: "text-xl font-bold text-accent", children: "17" }, void 0, false, {
          fileName: "app/routes/staking.tsx",
          lineNumber: 202,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-sm text-foreground/60 font-semibold", children: "HOURS" }, void 0, false, {
          fileName: "app/routes/staking.tsx",
          lineNumber: 203,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/staking.tsx",
        lineNumber: 201,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col flex-1 justify-center items-center gap-y-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { className: "text-xl font-bold text-accent", children: "23" }, void 0, false, {
          fileName: "app/routes/staking.tsx",
          lineNumber: 208,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-sm text-foreground/60 font-semibold", children: "SECONDS" }, void 0, false, {
          fileName: "app/routes/staking.tsx",
          lineNumber: 209,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/staking.tsx",
        lineNumber: 207,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/staking.tsx",
      lineNumber: 190,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/staking.tsx",
    lineNumber: 185,
    columnNumber: 10
  }, this);
}
_c4 = StakingCountdown;
var _c;
var _c2;
var _c3;
var _c4;
$RefreshReg$(_c, "Staking");
$RefreshReg$(_c2, "StakingStats");
$RefreshReg$(_c3, "StakingCard");
$RefreshReg$(_c4, "StakingCountdown");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  meta,
  Staking,
  StakingCard
};
//# sourceMappingURL=/build/_shared/chunk-WA7V5MFT.js.map

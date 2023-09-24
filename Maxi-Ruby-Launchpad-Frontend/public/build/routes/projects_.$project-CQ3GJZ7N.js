import {
  ProjectCountdown,
  ProjectCurrency,
  ProjectSocialLinks,
  ProjectStatus
} from "/build/_shared/chunk-6N3ANJXK.js";
import {
  $5d3850c4d0b4e6c7$export$393edc798c47379d,
  $5d3850c4d0b4e6c7$export$41fb9f06171c75f4,
  $5d3850c4d0b4e6c7$export$602eac185826482c,
  $5d3850c4d0b4e6c7$export$7c6e2c02157bb7d2,
  $5d3850c4d0b4e6c7$export$be92b6f5f03c0fe9,
  $5d3850c4d0b4e6c7$export$c6fdb837b070b4ff,
  $5d3850c4d0b4e6c7$export$f39c2d165cd861fe,
  $5d3850c4d0b4e6c7$export$f99233281efd08a0
} from "/build/_shared/chunk-VHET5CVE.js";
import {
  Icon
} from "/build/_shared/chunk-TTUX7L3Z.js";
import "/build/_shared/chunk-ABUHE4LZ.js";
import {
  Container,
  Section
} from "/build/_shared/chunk-FVLKBUYM.js";
import {
  Input_default
} from "/build/_shared/chunk-N3SURL52.js";
import {
  Link,
  useLoaderData
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
import "/build/_shared/chunk-DDY2UGSS.js";
import {
  require_react
} from "/build/_shared/chunk-6NJTHYWJ.js";
import {
  __toESM
} from "/build/_shared/chunk-DPSM2F2X.js";

// app/routes/projects_.$project.tsx
var import_react2 = __toESM(require_react());

// app/components/shared/Dialog.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/shared/Dialog.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/shared/Dialog.tsx"
  );
  import.meta.hot.lastModified = "1691945345600.898";
}
var Dialog = $5d3850c4d0b4e6c7$export$be92b6f5f03c0fe9;
var DialogTrigger = $5d3850c4d0b4e6c7$export$41fb9f06171c75f4;
var DialogPortal = ({
  className,
  ...props
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($5d3850c4d0b4e6c7$export$602eac185826482c, { className: cn(className), ...props }, void 0, false, {
  fileName: "app/components/shared/Dialog.tsx",
  lineNumber: 35,
  columnNumber: 7
}, this);
_c = DialogPortal;
DialogPortal.displayName = $5d3850c4d0b4e6c7$export$602eac185826482c.displayName;
var DialogOverlay = import_react.default.forwardRef(_c2 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($5d3850c4d0b4e6c7$export$c6fdb837b070b4ff, { ref, className: cn("fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className), ...props }, void 0, false, {
  fileName: "app/components/shared/Dialog.tsx",
  lineNumber: 41,
  columnNumber: 12
}, this));
_c3 = DialogOverlay;
DialogOverlay.displayName = $5d3850c4d0b4e6c7$export$c6fdb837b070b4ff.displayName;
var DialogContent = import_react.default.forwardRef(_c4 = ({
  className,
  children,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogPortal, { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogOverlay, {}, void 0, false, {
    fileName: "app/components/shared/Dialog.tsx",
    lineNumber: 49,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($5d3850c4d0b4e6c7$export$7c6e2c02157bb7d2, { ref, className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-solid border-input rounded-xl bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] md:w-full", className), ...props, children: [
    children,
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($5d3850c4d0b4e6c7$export$f39c2d165cd861fe, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { icon: "cross" }, void 0, false, {
        fileName: "app/components/shared/Dialog.tsx",
        lineNumber: 53,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "sr-only", children: "Close" }, void 0, false, {
        fileName: "app/components/shared/Dialog.tsx",
        lineNumber: 54,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/shared/Dialog.tsx",
      lineNumber: 52,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/shared/Dialog.tsx",
    lineNumber: 50,
    columnNumber: 5
  }, this)
] }, void 0, true, {
  fileName: "app/components/shared/Dialog.tsx",
  lineNumber: 48,
  columnNumber: 12
}, this));
_c5 = DialogContent;
DialogContent.displayName = $5d3850c4d0b4e6c7$export$7c6e2c02157bb7d2.displayName;
var DialogHeader = ({
  className,
  ...props
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className), ...props }, void 0, false, {
  fileName: "app/components/shared/Dialog.tsx",
  lineNumber: 63,
  columnNumber: 7
}, this);
_c6 = DialogHeader;
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({
  className,
  ...props
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className), ...props }, void 0, false, {
  fileName: "app/components/shared/Dialog.tsx",
  lineNumber: 69,
  columnNumber: 7
}, this);
_c7 = DialogFooter;
DialogFooter.displayName = "DialogFooter";
var DialogTitle = import_react.default.forwardRef(_c8 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($5d3850c4d0b4e6c7$export$f99233281efd08a0, { ref, className: cn("text-lg font-semibold leading-none tracking-tight", className), ...props }, void 0, false, {
  fileName: "app/components/shared/Dialog.tsx",
  lineNumber: 75,
  columnNumber: 12
}, this));
_c9 = DialogTitle;
DialogTitle.displayName = $5d3850c4d0b4e6c7$export$f99233281efd08a0.displayName;
var DialogDescription = import_react.default.forwardRef(_c10 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($5d3850c4d0b4e6c7$export$393edc798c47379d, { ref, className: cn("text-sm text-muted-foreground", className), ...props }, void 0, false, {
  fileName: "app/components/shared/Dialog.tsx",
  lineNumber: 81,
  columnNumber: 12
}, this));
_c11 = DialogDescription;
DialogDescription.displayName = $5d3850c4d0b4e6c7$export$393edc798c47379d.displayName;
var _c;
var _c2;
var _c3;
var _c4;
var _c5;
var _c6;
var _c7;
var _c8;
var _c9;
var _c10;
var _c11;
$RefreshReg$(_c, "DialogPortal");
$RefreshReg$(_c2, "DialogOverlay$React.forwardRef");
$RefreshReg$(_c3, "DialogOverlay");
$RefreshReg$(_c4, "DialogContent$React.forwardRef");
$RefreshReg$(_c5, "DialogContent");
$RefreshReg$(_c6, "DialogHeader");
$RefreshReg$(_c7, "DialogFooter");
$RefreshReg$(_c8, "DialogTitle$React.forwardRef");
$RefreshReg$(_c9, "DialogTitle");
$RefreshReg$(_c10, "DialogDescription$React.forwardRef");
$RefreshReg$(_c11, "DialogDescription");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/project/ClaimModal.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/project/ClaimModal.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/project/ClaimModal.tsx"
  );
  import.meta.hot.lastModified = "1691945345600.4778";
}
function ClaimModal({
  project,
  trigger
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Dialog, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DialogTrigger, { asChild: true, children: trigger }, void 0, false, {
      fileName: "app/components/project/ClaimModal.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DialogContent, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grid gap-10 pb-4 pt-12", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-wrap items-center justify-between gap-y-5 gap-x-8", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center gap-x-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex w-12 h-12 rounded-full bg-secondary overflow-hidden" }, void 0, false, {
              fileName: "app/components/project/ClaimModal.tsx",
              lineNumber: 37,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("strong", { className: "text-lg font-semibold", children: project.name }, void 0, false, {
              fileName: "app/components/project/ClaimModal.tsx",
              lineNumber: 41,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/project/ClaimModal.tsx",
            lineNumber: 36,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center divide-x divide-solid divide-border text-sm", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-col justify-center items-center text-center gap-0.5", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("strong", { className: "font-semibold text-muted-foreground", children: "Claimable Tokens" }, void 0, false, {
                fileName: "app/components/project/ClaimModal.tsx",
                lineNumber: 46,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "font-medium", children: "50" }, void 0, false, {
                fileName: "app/components/project/ClaimModal.tsx",
                lineNumber: 49,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/project/ClaimModal.tsx",
              lineNumber: 45,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-col justify-center items-center text-center gap-0.5 pl-3 ml-3", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("strong", { className: "font-semibold text-muted-foreground", children: "Your Allocation" }, void 0, false, {
                fileName: "app/components/project/ClaimModal.tsx",
                lineNumber: 53,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "font-medium", children: "Public" }, void 0, false, {
                fileName: "app/components/project/ClaimModal.tsx",
                lineNumber: 56,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/project/ClaimModal.tsx",
              lineNumber: 52,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/project/ClaimModal.tsx",
            lineNumber: 44,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/project/ClaimModal.tsx",
          lineNumber: 35,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ProjectCountdown, { project, showClaimCoundown: true }, void 0, false, {
          fileName: "app/components/project/ClaimModal.tsx",
          lineNumber: 61,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-col gap-y-2 w-full max-w-[400px] mx-auto", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center justify-between gap-x-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "text-muted-foreground font-semibold", children: "Amount to Claim" }, void 0, false, {
              fileName: "app/components/project/ClaimModal.tsx",
              lineNumber: 65,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "text-muted-foreground font-semibold", children: "BNB" }, void 0, false, {
              fileName: "app/components/project/ClaimModal.tsx",
              lineNumber: 68,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/project/ClaimModal.tsx",
            lineNumber: 64,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "relative flex items-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Input_default, { type: "text", placeholder: "0.00", value: "", onChange: () => {
            }, className: "pr-12" }, void 0, false, {
              fileName: "app/components/project/ClaimModal.tsx",
              lineNumber: 72,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { type: "button", title: "MAX", variant: "ghost", className: "absolute right-0.5 top-0.5 bottom-0.5 hover:bg-secondary hover:text-foreground", size: "small", children: "MAX" }, void 0, false, {
              fileName: "app/components/project/ClaimModal.tsx",
              lineNumber: 73,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/project/ClaimModal.tsx",
            lineNumber: 71,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/project/ClaimModal.tsx",
          lineNumber: 63,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/project/ClaimModal.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DialogFooter, { className: "sm:justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { type: "submit", title: "Claim", variant: "primary", className: "px-8", children: "Claim" }, void 0, false, {
        fileName: "app/components/project/ClaimModal.tsx",
        lineNumber: 80,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/project/ClaimModal.tsx",
        lineNumber: 79,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/project/ClaimModal.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/project/ClaimModal.tsx",
    lineNumber: 30,
    columnNumber: 10
  }, this);
}
_c12 = ClaimModal;
var _c12;
$RefreshReg$(_c12, "ClaimModal");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/project/JoinModal.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/project/JoinModal.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/project/JoinModal.tsx"
  );
  import.meta.hot.lastModified = "1691945345600.5652";
}
function JoinModal({
  project,
  trigger
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dialog, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(DialogTrigger, { asChild: true, children: trigger }, void 0, false, {
      fileName: "app/components/project/JoinModal.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(DialogContent, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "grid gap-10 pb-4 pt-12", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex flex-col gap-y-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("small", { className: "font-medium text-muted-foreground text-sm", children: "Progress" }, void 0, false, {
            fileName: "app/components/project/JoinModal.tsx",
            lineNumber: 35,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "w-full h-3 bg-secondary/50 rounded-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "h-2.5 rounded-full bg-accent", style: {
            width: "50%"
          } }, void 0, false, {
            fileName: "app/components/project/JoinModal.tsx",
            lineNumber: 39,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/components/project/JoinModal.tsx",
            lineNumber: 38,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex flex-1 items-center justify-between gap-x-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text-sm", children: "0/200 BNB" }, void 0, false, {
              fileName: "app/components/project/JoinModal.tsx",
              lineNumber: 44,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text-sm", children: "50%" }, void 0, false, {
              fileName: "app/components/project/JoinModal.tsx",
              lineNumber: 45,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/project/JoinModal.tsx",
            lineNumber: 43,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/project/JoinModal.tsx",
          lineNumber: 34,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex flex-1 items-center justify-between gap-x-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex flex-col gap-y-2 text-start", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("strong", { className: "font-medium uppercase text-sm text-muted-foreground", children: "MIN LIMIT" }, void 0, false, {
              fileName: "app/components/project/JoinModal.tsx",
              lineNumber: 51,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "font-semibold text-foreground uppercase", children: "0.01 BNB" }, void 0, false, {
              fileName: "app/components/project/JoinModal.tsx",
              lineNumber: 54,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/project/JoinModal.tsx",
            lineNumber: 50,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex flex-col gap-y-2 text-end", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("strong", { className: "font-medium uppercase text-sm text-muted-foreground", children: "MAX LIMIT" }, void 0, false, {
              fileName: "app/components/project/JoinModal.tsx",
              lineNumber: 60,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "font-semibold text-foreground uppercase", children: "10.00 BNB" }, void 0, false, {
              fileName: "app/components/project/JoinModal.tsx",
              lineNumber: 63,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/project/JoinModal.tsx",
            lineNumber: 59,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/project/JoinModal.tsx",
          lineNumber: 49,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex flex-col gap-y-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex items-center justify-between gap-x-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "text-muted-foreground font-semibold", children: "Enter Amount" }, void 0, false, {
              fileName: "app/components/project/JoinModal.tsx",
              lineNumber: 71,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "text-muted-foreground font-semibold", children: "BNB" }, void 0, false, {
              fileName: "app/components/project/JoinModal.tsx",
              lineNumber: 74,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/project/JoinModal.tsx",
            lineNumber: 70,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "relative flex items-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Input_default, { type: "text", placeholder: "0.00", value: "", onChange: () => {
            }, className: "pr-12" }, void 0, false, {
              fileName: "app/components/project/JoinModal.tsx",
              lineNumber: 78,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button_default, { type: "button", title: "MAX", variant: "ghost", className: "absolute right-0.5 top-0.5 bottom-0.5 hover:bg-secondary hover:text-foreground", size: "small", children: "MAX" }, void 0, false, {
              fileName: "app/components/project/JoinModal.tsx",
              lineNumber: 79,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/project/JoinModal.tsx",
            lineNumber: 77,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/project/JoinModal.tsx",
          lineNumber: 69,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/project/JoinModal.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(DialogFooter, { className: "sm:justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button_default, { type: "submit", title: "Claim", variant: "primary", className: "px-8", children: "Claim" }, void 0, false, {
        fileName: "app/components/project/JoinModal.tsx",
        lineNumber: 86,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/project/JoinModal.tsx",
        lineNumber: 85,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/project/JoinModal.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/project/JoinModal.tsx",
    lineNumber: 29,
    columnNumber: 10
  }, this);
}
_c13 = JoinModal;
var _c13;
$RefreshReg$(_c13, "JoinModal");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/projects_.$project.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/projects_.$project.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/projects_.$project.tsx"
  );
  import.meta.hot.lastModified = "1691945345604.3843";
}
var meta = ({
  data
}) => {
  const {
    project
  } = data;
  return [{
    title: `${project.name} \u2014 Maxiruby`
  }, {
    name: "description",
    content: "Launchpad Projects \u2014 Maxiruby"
  }];
};
function Project() {
  _s();
  const {
    project
  } = useLoaderData();
  const [projectStatus, setProjectStatus] = import_react2.default.useState(project.status);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex flex-1 flex-col h-full min-h-[75vh]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Container, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Section, { className: "pb-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex flex-1 flex-col gap-y-5", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("header", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Link, { to: "/projects", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Button_default, { type: "button", title: "Back to projects", variant: "secondary", size: "small", className: "text-muted-foreground", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Icon, { icon: "arrow-left", className: "w-4 h-4" }, void 0, false, {
          fileName: "app/routes/projects_.$project.tsx",
          lineNumber: 76,
          columnNumber: 19
        }, this),
        "Back to projects"
      ] }, void 0, true, {
        fileName: "app/routes/projects_.$project.tsx",
        lineNumber: 75,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/projects_.$project.tsx",
        lineNumber: 74,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/projects_.$project.tsx",
        lineNumber: 73,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex flex-1 flex-col border border-solid border-border rounded-xl py-6 px-5 gap-y-8", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex flex-row flex-wrap items-center justify-between gap-5", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex flex-wrap items-start gap-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex w-24 h-24 rounded-full bg-secondary overflow-hidden" }, void 0, false, {
              fileName: "app/routes/projects_.$project.tsx",
              lineNumber: 85,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex flex-col gap-y-3", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h1", { className: "text-xl font-semibold", children: project.name }, void 0, false, {
                fileName: "app/routes/projects_.$project.tsx",
                lineNumber: 90,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex flex-row items-center gap-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex flex-row flex-wrap items-center gap-3", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ProjectStatus, { status: project.status }, void 0, false, {
                  fileName: "app/routes/projects_.$project.tsx",
                  lineNumber: 94,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ProjectCurrency, { currency: project.currency }, void 0, false, {
                  fileName: "app/routes/projects_.$project.tsx",
                  lineNumber: 96,
                  columnNumber: 25
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/projects_.$project.tsx",
                lineNumber: 93,
                columnNumber: 23
              }, this) }, void 0, false, {
                fileName: "app/routes/projects_.$project.tsx",
                lineNumber: 92,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "mt-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ProjectSocialLinks, {}, void 0, false, {
                fileName: "app/routes/projects_.$project.tsx",
                lineNumber: 101,
                columnNumber: 23
              }, this) }, void 0, false, {
                fileName: "app/routes/projects_.$project.tsx",
                lineNumber: 100,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/projects_.$project.tsx",
              lineNumber: 89,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/projects_.$project.tsx",
            lineNumber: 84,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ProjectCountdown, { project }, void 0, false, {
            fileName: "app/routes/projects_.$project.tsx",
            lineNumber: 106,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex flex-col items-center justify-center gap-y-4 md:items-end md:justify-end", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Link, { to: "/", target: "_blank", rel: "noopener noreferrer", className: "flex items-center gap-x-2 text-muted-foreground text-sm font-semibold hover:text-foreground transition-colors duration-150", children: [
              "Whitepaper",
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Icon, { icon: "external", className: "w-3.5 h-3.5" }, void 0, false, {
                fileName: "app/routes/projects_.$project.tsx",
                lineNumber: 111,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/projects_.$project.tsx",
              lineNumber: 109,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex flex-row items-center gap-x-2", children: project.status === "closed" ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ClaimModal, { project, trigger: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Button_default, { type: "button", title: "Claim", variant: "primary", children: "Claim" }, void 0, false, {
              fileName: "app/routes/projects_.$project.tsx",
              lineNumber: 115,
              columnNumber: 91
            }, this) }, void 0, false, {
              fileName: "app/routes/projects_.$project.tsx",
              lineNumber: 115,
              columnNumber: 52
            }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react2.default.Fragment, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Button_default, { type: "button", title: "View Whitelist", variant: "invert", children: "View Whitelist" }, void 0, false, {
                fileName: "app/routes/projects_.$project.tsx",
                lineNumber: 118,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(JoinModal, { project, trigger: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Button_default, { type: "button", title: "Join", variant: "primary", disabled: project.status !== "open", children: "Join" }, void 0, false, {
                fileName: "app/routes/projects_.$project.tsx",
                lineNumber: 122,
                columnNumber: 63
              }, this) }, void 0, false, {
                fileName: "app/routes/projects_.$project.tsx",
                lineNumber: 122,
                columnNumber: 25
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/projects_.$project.tsx",
              lineNumber: 117,
              columnNumber: 43
            }, this) }, void 0, false, {
              fileName: "app/routes/projects_.$project.tsx",
              lineNumber: 114,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/projects_.$project.tsx",
            lineNumber: 108,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/projects_.$project.tsx",
          lineNumber: 83,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex flex-1 flex-col gap-y-3 text-foreground/80", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "Lorem ipsum dolor sit amet consectetur. Odio vivamus in eu gravida maecenas felis faucibus adipiscing. Amet leo augue bibendum magnis ridiculus. In sagittis vitae dictum lectus venenatis malesuada dolor eu. In mi commodo arcu mattis sagittis sed adipiscing rhoncus. Ultricies tempus sed lectus adipiscing in augue." }, void 0, false, {
            fileName: "app/routes/projects_.$project.tsx",
            lineNumber: 131,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "Lorem ipsum dolor sit amet consectetur. Odio vivamus in eu gravida maecenas felis faucibus adipiscing. Amet leo augue bibendum magnis ridiculus. In sagittis vitae dictum lectus venenatis malesuada dolor eu. In mi commodo arcu mattis sagittis sed adipiscing rhoncus. Ultricies tempus sed lectus adipiscing in augue." }, void 0, false, {
            fileName: "app/routes/projects_.$project.tsx",
            lineNumber: 139,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/projects_.$project.tsx",
          lineNumber: 130,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/projects_.$project.tsx",
        lineNumber: 82,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/projects_.$project.tsx",
      lineNumber: 72,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/projects_.$project.tsx",
      lineNumber: 71,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Section, { className: "py-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex flex-1 flex-row flex-wrap gap-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex flex-1 flex-col border border-solid border-border rounded-xl py-6 px-5 gap-y-5 min-w-[340px]", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h3", { className: "text-xl text-foreground/80 font-bold", children: "Pool Information" }, void 0, false, {
          fileName: "app/routes/projects_.$project.tsx",
          lineNumber: 155,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex flex-1 flex-col gap-y-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { className: "flex flex-1 flex-wrap items-center justify-between gap-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("strong", { className: "text-foreground/60 font-medium uppercase", children: "TOKEN DISTRIBUTION" }, void 0, false, {
              fileName: "app/routes/projects_.$project.tsx",
              lineNumber: 161,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "text-foreground font-semibold", children: "Date UTC" }, void 0, false, {
              fileName: "app/routes/projects_.$project.tsx",
              lineNumber: 164,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/projects_.$project.tsx",
            lineNumber: 160,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { className: "flex flex-1 flex-wrap items-center justify-between gap-1.5", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("strong", { className: "text-foreground/60 font-medium uppercase", children: "MIN. ALLOCATION" }, void 0, false, {
              fileName: "app/routes/projects_.$project.tsx",
              lineNumber: 170,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "text-foreground font-semibold", children: "0.01 BNB" }, void 0, false, {
              fileName: "app/routes/projects_.$project.tsx",
              lineNumber: 173,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/projects_.$project.tsx",
            lineNumber: 169,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { className: "flex flex-1 flex-wrap items-center justify-between gap-1.5", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("strong", { className: "text-foreground/60 font-medium uppercase", children: "MAX. ALLOCATION" }, void 0, false, {
              fileName: "app/routes/projects_.$project.tsx",
              lineNumber: 179,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "text-foreground font-semibold", children: "1111.11 BNB" }, void 0, false, {
              fileName: "app/routes/projects_.$project.tsx",
              lineNumber: 182,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/projects_.$project.tsx",
            lineNumber: 178,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { className: "flex flex-1 flex-wrap items-center justify-between gap-1.5", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("strong", { className: "text-foreground/60 font-medium uppercase", children: "TOKEN PRICE" }, void 0, false, {
              fileName: "app/routes/projects_.$project.tsx",
              lineNumber: 188,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "text-foreground font-semibold", children: "1 BUSD = 11.11 LRM" }, void 0, false, {
              fileName: "app/routes/projects_.$project.tsx",
              lineNumber: 191,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/projects_.$project.tsx",
            lineNumber: 187,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { className: "flex flex-1 flex-wrap items-center justify-between gap-1.5", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("strong", { className: "text-foreground/60 font-medium uppercase", children: "ACCESS TYPE" }, void 0, false, {
              fileName: "app/routes/projects_.$project.tsx",
              lineNumber: 197,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "text-foreground font-semibold", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "py-1 px-3 rounded-full bg-accent text-accent-foreground text-sm font-semibold", children: "Public" }, void 0, false, {
              fileName: "app/routes/projects_.$project.tsx",
              lineNumber: 201,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/routes/projects_.$project.tsx",
              lineNumber: 200,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/projects_.$project.tsx",
            lineNumber: 196,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/projects_.$project.tsx",
          lineNumber: 159,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/projects_.$project.tsx",
        lineNumber: 154,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex flex-1 flex-col border border-solid border-border rounded-xl py-6 px-5 gap-y-5 min-w-[340px]", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h3", { className: "text-xl text-foreground/60 font-bold", children: "Token Information" }, void 0, false, {
          fileName: "app/routes/projects_.$project.tsx",
          lineNumber: 210,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex flex-1 flex-col gap-y-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { className: "flex flex-1 flex-wrap items-center justify-between gap-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("strong", { className: "text-foreground/60 font-medium uppercase", children: "NAME" }, void 0, false, {
              fileName: "app/routes/projects_.$project.tsx",
              lineNumber: 216,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "text-foreground font-semibold", children: "Lorem Ipsum" }, void 0, false, {
              fileName: "app/routes/projects_.$project.tsx",
              lineNumber: 219,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/projects_.$project.tsx",
            lineNumber: 215,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { className: "flex flex-1 flex-wrap items-center justify-between gap-1.5", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("strong", { className: "text-foreground/60 font-medium uppercase", children: "SYMBOL" }, void 0, false, {
              fileName: "app/routes/projects_.$project.tsx",
              lineNumber: 225,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "text-foreground font-semibold", children: "LRM" }, void 0, false, {
              fileName: "app/routes/projects_.$project.tsx",
              lineNumber: 228,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/projects_.$project.tsx",
            lineNumber: 224,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { className: "flex flex-1 flex-wrap items-center justify-between gap-1.5", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("strong", { className: "text-foreground/60 font-medium uppercase", children: "DECIMALS" }, void 0, false, {
              fileName: "app/routes/projects_.$project.tsx",
              lineNumber: 232,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "text-foreground font-semibold", children: "18" }, void 0, false, {
              fileName: "app/routes/projects_.$project.tsx",
              lineNumber: 235,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/projects_.$project.tsx",
            lineNumber: 231,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { className: "flex flex-1 flex-wrap items-center justify-between gap-1.5", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("strong", { className: "text-foreground/60 font-medium uppercase", children: "ADDRESS" }, void 0, false, {
              fileName: "app/routes/projects_.$project.tsx",
              lineNumber: 239,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "text-foreground font-semibold", children: "0x475fvb898y908tu098908t90" }, void 0, false, {
              fileName: "app/routes/projects_.$project.tsx",
              lineNumber: 242,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/projects_.$project.tsx",
            lineNumber: 238,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { className: "flex flex-1 flex-wrap items-center justify-between gap-1.5", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("strong", { className: "text-foreground/60 font-medium uppercase", children: "TOTAL SUPPLY" }, void 0, false, {
              fileName: "app/routes/projects_.$project.tsx",
              lineNumber: 248,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "text-foreground font-semibold", children: "100000000" }, void 0, false, {
              fileName: "app/routes/projects_.$project.tsx",
              lineNumber: 251,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/projects_.$project.tsx",
            lineNumber: 247,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/projects_.$project.tsx",
          lineNumber: 214,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/projects_.$project.tsx",
        lineNumber: 209,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/projects_.$project.tsx",
      lineNumber: 153,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/projects_.$project.tsx",
      lineNumber: 152,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Section, { className: "pt-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex flex-1 flex-col border border-solid border-border rounded-xl py-6 px-5 gap-y-5", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h3", { className: "text-xl text-foreground/80 font-bold", children: "Total Raised" }, void 0, false, {
        fileName: "app/routes/projects_.$project.tsx",
        lineNumber: 262,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex flex-1 flex-row flex-wrap items-center justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h6", { className: "text-2xl text-foreground font-bold", children: "300000.00 BNB" }, void 0, false, {
          fileName: "app/routes/projects_.$project.tsx",
          lineNumber: 267,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "text-foreground font-semibold", children: "Filled" }, void 0, false, {
          fileName: "app/routes/projects_.$project.tsx",
          lineNumber: 271,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/projects_.$project.tsx",
        lineNumber: 266,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex flex-col gap-y-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex flex-1 flex-row flex-wrap items-center justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("strong", { className: "flex items-center gap-x-1.5 text-foreground/60 uppercase", children: [
            "PROGRESS",
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "text-foreground font-bold", children: "100%" }, void 0, false, {
              fileName: "app/routes/projects_.$project.tsx",
              lineNumber: 278,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/projects_.$project.tsx",
            lineNumber: 276,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "text-foreground font-medium", children: [
            "129222922 /",
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "text-foreground/60", children: "129222922 LRM" }, void 0, false, {
              fileName: "app/routes/projects_.$project.tsx",
              lineNumber: 283,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/projects_.$project.tsx",
            lineNumber: 281,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/projects_.$project.tsx",
          lineNumber: 275,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "w-full h-4 mb-4 bg-secondary/50 rounded-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "h-4 rounded-full bg-gradient-to-l from-bg-background from-accent", style: {
          width: "100%"
        } }, void 0, false, {
          fileName: "app/routes/projects_.$project.tsx",
          lineNumber: 289,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/projects_.$project.tsx",
          lineNumber: 288,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/projects_.$project.tsx",
        lineNumber: 274,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex flex-1 flex-row flex-wrap items-center justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("strong", { className: "flex flex-col gap-y-1.5 text-foreground/60", children: [
          "Limited",
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "text-foreground", children: "Participants: 6069" }, void 0, false, {
            fileName: "app/routes/projects_.$project.tsx",
            lineNumber: 298,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/projects_.$project.tsx",
          lineNumber: 296,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "py-2.5 px-4 rounded-xl bg-secondary/70 text-secondary-foreground text-sm font-semibold", children: "1 BNB = 11.11 LRM" }, void 0, false, {
          fileName: "app/routes/projects_.$project.tsx",
          lineNumber: 301,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/projects_.$project.tsx",
        lineNumber: 295,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/projects_.$project.tsx",
      lineNumber: 261,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/projects_.$project.tsx",
      lineNumber: 260,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/projects_.$project.tsx",
    lineNumber: 70,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/projects_.$project.tsx",
    lineNumber: 69,
    columnNumber: 10
  }, this);
}
_s(Project, "pvftO06bc0/c7mGZ6w7D7Optu4s=", false, function() {
  return [useLoaderData];
});
_c14 = Project;
var _c14;
$RefreshReg$(_c14, "Project");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Project as default,
  meta
};
//# sourceMappingURL=/build/routes/projects_.$project-CQ3GJZ7N.js.map

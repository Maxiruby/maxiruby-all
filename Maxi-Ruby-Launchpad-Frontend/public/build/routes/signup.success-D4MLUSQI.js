import {
  useAppStore
} from "/build/_shared/chunk-J3LEAWOY.js";
import {
  Image_default,
  Images
} from "/build/_shared/chunk-QGJQCNHW.js";
import "/build/_shared/chunk-65R6ZMAR.js";
import {
  NavLink,
  useNavigate
} from "/build/_shared/chunk-MW7V54UB.js";
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
import "/build/_shared/chunk-6NJTHYWJ.js";
import {
  __toESM
} from "/build/_shared/chunk-DPSM2F2X.js";

// app/routes/signup.success.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/signup.success.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/signup.success.tsx"
  );
  import.meta.hot.lastModified = "1693669692610.2832";
}
var meta = () => {
  return [{
    title: "Create Account \u2014 Maxiruby Launchpad"
  }, {
    name: "description",
    content: "Login \u2014 Maxiruby Launchpad"
  }];
};
function SignupSuccess() {
  _s();
  const navigate = useNavigate();
  const {
    profile,
    setProfile,
    token,
    setToken
  } = useAppStore((store) => store);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 flex-row flex-wrap items-start justify-start columns-1 md:columns-2 h-fit md:h-screen", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative flex flex-1 flex-col md:border-r md:border-solid md:border-border min-w-[400px] h-full overflow-hidden", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: "/", className: "flex p-5 w-fit", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image_default, { src: Images.Logo, alt: "Maxiruby", width: 215, height: 26, objectFit: "contain" }, void 0, false, {
        fileName: "app/routes/signup.success.tsx",
        lineNumber: 51,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/signup.success.tsx",
        lineNumber: 50,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute top-0 w-screen h-screen md:-mt-24 -z-1 pointer-events-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative inset-0 w-full h-0 pb-[61.783525291304635%]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 w-full h-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image_default, { src: Images.HomeBackground, alt: "MaxiRuby", width: "100%", height: "auto", objectFit: "cover" }, void 0, false, {
        fileName: "app/routes/signup.success.tsx",
        lineNumber: 57,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/signup.success.tsx",
        lineNumber: 56,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/signup.success.tsx",
        lineNumber: 55,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/signup.success.tsx",
        lineNumber: 54,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/signup.success.tsx",
      lineNumber: 49,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 h-full min-w-[340px]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 flex-col items-center justify-center p-10 gap-y-16", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: "flex flex-col justify-center items-center gap-y-10", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image_default, { src: Images.EmailSuccess, alt: "Success", width: 64, height: 64 }, void 0, false, {
          fileName: "app/routes/signup.success.tsx",
          lineNumber: 67,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-[max(3vw,36px)] text-center text-foreground font-heading font-bold", children: "Check your email" }, void 0, false, {
          fileName: "app/routes/signup.success.tsx",
          lineNumber: 68,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/signup.success.tsx",
        lineNumber: 66,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col gap-y-8 w-full max-w-[600px] mx-auto", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col text-center text-lg", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "We've sent a verification link to" }, void 0, false, {
            fileName: "app/routes/signup.success.tsx",
            lineNumber: 75,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { className: "text-accent font-semibold", children: profile?.email }, void 0, false, {
            fileName: "app/routes/signup.success.tsx",
            lineNumber: 76,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/signup.success.tsx",
          lineNumber: 74,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col gap-y-4 justify-center items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("small", { className: "text-foreground/50", children: [
            "Didn\u2019t receive the email?",
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: "#", className: "text-foreground font-bold pl-0.5", children: "Click the resend" }, void 0, false, {
              fileName: "app/routes/signup.success.tsx",
              lineNumber: 84,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/signup.success.tsx",
            lineNumber: 82,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { type: "button", title: "Create Account", variant: "secondary", className: "w-fit min-w-[160px]", onClick: () => navigate("/"), children: "Back to homepage" }, void 0, false, {
            fileName: "app/routes/signup.success.tsx",
            lineNumber: 89,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/signup.success.tsx",
          lineNumber: 81,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/signup.success.tsx",
        lineNumber: 73,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/signup.success.tsx",
      lineNumber: 65,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/signup.success.tsx",
      lineNumber: 64,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/signup.success.tsx",
    lineNumber: 47,
    columnNumber: 10
  }, this);
}
_s(SignupSuccess, "hzYXHBxQrF3iEAfuCRPXcicCeM4=", false, function() {
  return [useNavigate, useAppStore];
});
_c = SignupSuccess;
var _c;
$RefreshReg$(_c, "SignupSuccess");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  SignupSuccess as default,
  meta
};
//# sourceMappingURL=/build/routes/signup.success-D4MLUSQI.js.map

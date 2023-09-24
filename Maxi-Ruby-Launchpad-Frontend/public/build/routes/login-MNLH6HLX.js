import {
  useAppStore
} from "/build/_shared/chunk-J3LEAWOY.js";
import {
  Image_default,
  Images
} from "/build/_shared/chunk-QGJQCNHW.js";
import "/build/_shared/chunk-65R6ZMAR.js";
import {
  Input_default
} from "/build/_shared/chunk-N3SURL52.js";
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
import {
  require_react
} from "/build/_shared/chunk-6NJTHYWJ.js";
import {
  __toESM
} from "/build/_shared/chunk-DPSM2F2X.js";

// app/routes/login.tsx
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/login.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/login.tsx"
  );
  import.meta.hot.lastModified = "1693670811697.305";
}
var meta = () => {
  return [{
    title: "Login \u2014 Maxiruby Launchpad"
  }, {
    name: "description",
    content: "Login \u2014 Maxiruby Launchpad"
  }];
};
function Login() {
  _s();
  const {
    profile,
    setProfile,
    token,
    setToken
  } = useAppStore((store) => store);
  const navigate = useNavigate();
  const user = localStorage.getItem("token");
  const [email, setEmail] = (0, import_react2.useState)("");
  const [password, setPassword] = (0, import_react2.useState)("");
  const [loading, setLoading] = (0, import_react2.useState)(false);
  const [error, setError] = (0, import_react2.useState)("");
  const [success, setSuccess] = (0, import_react2.useState)("");
  const handleLogin = async () => {
    if (!email || !password)
      return setError("Please fill all the fields");
    setLoading(true);
    setSuccess("");
    setError("");
    try {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      var raw = JSON.stringify({
        email,
        password
      });
      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
      };
      const response = fetch("http://api.maxiruby.com/api/users/auth/login", requestOptions);
      const data = await (await response).json();
      console.log(data);
      setLoading(false);
      setToken(data.token);
      setProfile(data.user);
      localStorage.setItem("profile", JSON.stringify(data.user));
      localStorage.setItem("token", JSON.stringify(data.token));
      navigate("/");
      console.log("Success");
      setSuccess("Success");
    } catch (error2) {
      console.log(error2);
      setError(error2.message);
      setSuccess("");
      setLoading(false);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "flex flex-1 flex-row flex-wrap items-start justify-start columns-1 md:columns-2 h-fit md:h-screen", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "relative flex flex-1 flex-col md:border-r md:border-solid md:border-border min-w-[400px] h-full overflow-hidden", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, {
        to: "/", className: "flex p-5 w-fit", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image_default, { src: Images.Logo, alt: "Maxiruby", width: 215, height: 26, objectFit: "contain" }, void 0, false, {
          fileName: "app/routes/login.tsx",
          lineNumber: 99,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: "app/routes/login.tsx",
        lineNumber: 98,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "absolute top-0 w-screen h-screen md:-mt-24 -z-1 pointer-events-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "relative inset-0 w-full h-0 pb-[61.783525291304635%]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "absolute inset-0 w-full h-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image_default, { src: Images.HomeBackground, alt: "MaxiRuby", width: "100%", height: "auto", objectFit: "cover" }, void 0, false, {
              fileName: "app/routes/login.tsx",
              lineNumber: 105,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: "app/routes/login.tsx",
            lineNumber: 104,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: "app/routes/login.tsx",
          lineNumber: 103,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: "app/routes/login.tsx",
        lineNumber: 102,
        columnNumber: 9
      }, this)
      ]
    }, void 0, true, {
      fileName: "app/routes/login.tsx",
      lineNumber: 97,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "flex flex-1 h-full min-w-[340px]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex flex-1 flex-col items-center justify-center p-10 gap-y-16", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", {
          className: "flex justify-center items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-[max(3vw,36px)] text-center text-foreground font-heading font-bold", children: "Welcome" }, void 0, false, {
            fileName: "app/routes/login.tsx",
            lineNumber: 115,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: "app/routes/login.tsx",
          lineNumber: 114,
          columnNumber: 11
        }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "flex flex-col gap-y-8 w-full max-w-[600px] mx-auto", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "flex flex-col gap-y-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "font-semibold text-foreground/70 pl-1", children: "Email" }, void 0, false, {
              fileName: "app/routes/login.tsx",
              lineNumber: 122,
              columnNumber: 15
            }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input_default, {
              type: "text", placeholder: "Enter your e-mail here", value: email, onChange: (e) => {
                setEmail(e.target.value);
              }, className: "py-4 px-5 placeholder:text-muted-foreground/60"
            }, void 0, false, {
              fileName: "app/routes/login.tsx",
              lineNumber: 125,
              columnNumber: 15
            }, this)
            ]
          }, void 0, true, {
            fileName: "app/routes/login.tsx",
            lineNumber: 121,
            columnNumber: 13
          }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "flex flex-col gap-y-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "font-semibold text-foreground/70 pl-1", children: "Password" }, void 0, false, {
              fileName: "app/routes/login.tsx",
              lineNumber: 131,
              columnNumber: 15
            }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input_default, {
              type: "password", placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", value: password, onChange: (e) => {
                setPassword(e.target.value);
              }, className: "py-4 px-5 placeholder:text-muted-foreground/60"
            }, void 0, false, {
              fileName: "app/routes/login.tsx",
              lineNumber: 134,
              columnNumber: 15
            }, this)
            ]
          }, void 0, true, {
            fileName: "app/routes/login.tsx",
            lineNumber: 130,
            columnNumber: 13
          }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "flex flex-col gap-y-4 justify-center items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { type: "button", title: "Log in", variant: "invert", className: "w-fit min-w-[160px]", onClick: handleLogin, disabled: loading, children: loading ? "Loading..." : "Log in" }, void 0, false, {
              fileName: "app/routes/login.tsx",
              lineNumber: 140,
              columnNumber: 15
            }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("small", {
              style: {
                color: "red"
              }, children: [
                " ",
                error
              ]
            }, void 0, true, {
              fileName: "app/routes/login.tsx",
              lineNumber: 143,
              columnNumber: 15
            }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("small", {
              style: {
                color: "green"
              }, children: [
                " ",
                success
              ]
            }, void 0, true, {
              fileName: "app/routes/login.tsx",
              lineNumber: 146,
              columnNumber: 15
            }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("small", {
              className: "text-foreground/50", children: [
                "Don\u2019t you have an account?",
                " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: "/signup", className: "text-foreground font-bold pl-0.5", children: "Sign Up" }, void 0, false, {
                  fileName: "app/routes/login.tsx",
                  lineNumber: 151,
                  columnNumber: 17
                }, this)
              ]
            }, void 0, true, {
              fileName: "app/routes/login.tsx",
              lineNumber: 149,
              columnNumber: 15
            }, this)
            ]
          }, void 0, true, {
            fileName: "app/routes/login.tsx",
            lineNumber: 139,
            columnNumber: 13
          }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "flex flex-col justify-center items-center pt-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { className: "text-xl font-semibold", children: "OR" }, void 0, false, {
              fileName: "app/routes/login.tsx",
              lineNumber: 158,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: "app/routes/login.tsx",
            lineNumber: 157,
            columnNumber: 13
          }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "flex flex-row flex-wrap items-center justify-center gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
              type: "button", title: "Log in", variant: "secondary", className: "w-fit min-w-[100px]", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image_default, { src: Images.GoogleG, alt: "Google", width: 24, height: 24 }, void 0, false, {
                fileName: "app/routes/login.tsx",
                lineNumber: 163,
                columnNumber: 17
              }, this),
                "Log in with Google"
              ]
            }, void 0, true, {
              fileName: "app/routes/login.tsx",
              lineNumber: 162,
              columnNumber: 15
            }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
              type: "button", title: "Log in", variant: "secondary", className: "w-fit min-w-[100px]", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image_default, { src: Images.Twitter, alt: "Twitter", width: 24, height: 24 }, void 0, false, {
                fileName: "app/routes/login.tsx",
                lineNumber: 167,
                columnNumber: 17
              }, this),
                "Log in with Twitter"
              ]
            }, void 0, true, {
              fileName: "app/routes/login.tsx",
              lineNumber: 166,
              columnNumber: 15
            }, this)
            ]
          }, void 0, true, {
            fileName: "app/routes/login.tsx",
            lineNumber: 161,
            columnNumber: 13
          }, this)
          ]
        }, void 0, true, {
          fileName: "app/routes/login.tsx",
          lineNumber: 120,
          columnNumber: 11
        }, this)
        ]
      }, void 0, true, {
        fileName: "app/routes/login.tsx",
        lineNumber: 113,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: "app/routes/login.tsx",
      lineNumber: 112,
      columnNumber: 7
    }, this)
    ]
  }, void 0, true, {
    fileName: "app/routes/login.tsx",
    lineNumber: 95,
    columnNumber: 10
  }, this);
}
_s(Login, "Nz1y/m0OqJJyxvIj9ObAMaGI4bc=", false, function () {
  return [useAppStore, useNavigate];
});
_c = Login;
var _c;
$RefreshReg$(_c, "Login");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Login as default,
  meta
};
//# sourceMappingURL=/build/routes/login-MNLH6HLX.js.map
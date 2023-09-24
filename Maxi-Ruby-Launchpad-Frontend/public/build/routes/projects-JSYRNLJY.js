import {
  Project,
  Projects
} from "/build/_shared/chunk-6N3ANJXK.js";
import "/build/_shared/chunk-TTUX7L3Z.js";
import {
  Container,
  Section
} from "/build/_shared/chunk-FVLKBUYM.js";
import "/build/_shared/chunk-MW7V54UB.js";
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

// app/routes/projects.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/projects.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/projects.tsx"
  );
  import.meta.hot.lastModified = "1691945345604.3098";
}
var meta = () => {
  return [{
    title: "Launchpad Projects \u2014 Maxiruby"
  }, {
    name: "description",
    content: "Launchpad Projects \u2014 Maxiruby"
  }];
};
function Projects2() {
  _s();
  const [filter, setFilter] = import_react.default.useState("all");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 flex-col h-full min-h-[75vh]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 flex-col gap-y-10", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: "flex flex-1 flex-row flex-wrap items-center justify-between gap-5", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-3xl font-medium font-heading", children: "Projects" }, void 0, false, {
        fileName: "app/routes/projects.tsx",
        lineNumber: 46,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { type: "button", title: "All", variant: filter === "all" ? "primary" : "secondary", onClick: () => setFilter("all"), children: "All" }, void 0, false, {
          fileName: "app/routes/projects.tsx",
          lineNumber: 49,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { type: "button", title: "Upcoming", variant: filter === "upcoming" ? "primary" : "secondary", onClick: () => setFilter("upcoming"), children: "Upcoming" }, void 0, false, {
          fileName: "app/routes/projects.tsx",
          lineNumber: 52,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { type: "button", title: "Open", variant: filter === "open" ? "primary" : "secondary", onClick: () => setFilter("open"), children: "Open" }, void 0, false, {
          fileName: "app/routes/projects.tsx",
          lineNumber: 55,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { type: "button", title: "Closed", variant: filter === "closed" ? "primary" : "secondary", onClick: () => setFilter("closed"), children: "Closed" }, void 0, false, {
          fileName: "app/routes/projects.tsx",
          lineNumber: 58,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/projects.tsx",
        lineNumber: 48,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/projects.tsx",
      lineNumber: 45,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "flex flex-1 flex-wrap items-start justify-start gap-6", children: Projects.map((p, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Project, { project: p }, i, false, {
      fileName: "app/routes/projects.tsx",
      lineNumber: 65,
      columnNumber: 45
    }, this)) }, void 0, false, {
      fileName: "app/routes/projects.tsx",
      lineNumber: 64,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/projects.tsx",
    lineNumber: 44,
    columnNumber: 11
  }, this) }, void 0, false, {
    fileName: "app/routes/projects.tsx",
    lineNumber: 43,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/routes/projects.tsx",
    lineNumber: 42,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/projects.tsx",
    lineNumber: 41,
    columnNumber: 10
  }, this);
}
_s(Projects2, "boPJerHaELAyf+PNkR+Y8+JetQg=");
_c = Projects2;
var _c;
$RefreshReg$(_c, "Projects");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Projects2 as default,
  meta
};
//# sourceMappingURL=/build/routes/projects-JSYRNLJY.js.map

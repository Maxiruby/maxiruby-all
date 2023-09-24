import {
  Icon
} from "/build/_shared/chunk-TTUX7L3Z.js";
import {
  Link,
  NavLink
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

// app/config/projects.config.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/config/projects.config.ts"
  );
  import.meta.hot.lastModified = "1691945345602.4897";
}
var Projects = [
  {
    id: 0,
    name: "Project 1",
    description: "Project 1 description",
    image: "",
    status: "open",
    currency: "busd",
    swap_rate: "xxxx",
    cap: "xxxx",
    access: "xxxx",
    progress: "5",
    participants: "0",
    website: "https://www.google.com",
    twitter: "https://www.google.com",
    telegram: "https://www.google.com"
  },
  {
    id: 1,
    name: "Project 2",
    description: "Project 2 description",
    image: "",
    status: "upcoming",
    currency: "busd",
    swap_rate: "xxxx",
    cap: "xxxx",
    access: "xxxx",
    progress: "5",
    participants: "0",
    website: "https://www.google.com",
    twitter: "https://www.google.com",
    telegram: "https://www.google.com"
  },
  {
    id: 2,
    name: "Project 3",
    description: "Project 3 description",
    image: "",
    status: "closed",
    currency: "busd",
    swap_rate: "xxxx",
    cap: "xxxx",
    access: "xxxx",
    progress: "5",
    participants: "0",
    website: "https://www.google.com",
    twitter: "https://www.google.com",
    telegram: "https://www.google.com"
  }
];

// app/components/Project.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Project.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Project.tsx"
  );
  import.meta.hot.lastModified = "1691945345599.8818";
}
function Project({
  project
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 flex-col min-w-[340px] max-w-[426px] rounded-xl bg-card py-6 px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 flex-col gap-y-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: "flex flex-col justify-center items-center gap-y-5", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative w-24 h-24 rounded-full bg-secondary overflow-hidden" }, void 0, false, {
        fileName: "app/components/Project.tsx",
        lineNumber: 35,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { className: "text-xl font-medium", children: project.name }, void 0, false, {
        fileName: "app/components/Project.tsx",
        lineNumber: 39,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-row items-center gap-x-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProjectStatus, { status: project.status }, void 0, false, {
          fileName: "app/components/Project.tsx",
          lineNumber: 42,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProjectCurrency, { currency: project.currency }, void 0, false, {
          fileName: "app/components/Project.tsx",
          lineNumber: 44,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Project.tsx",
        lineNumber: 41,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProjectSocialLinks, {}, void 0, false, {
        fileName: "app/components/Project.tsx",
        lineNumber: 47,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Project.tsx",
      lineNumber: 34,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "flex flex-col py-4 pb-2 gap-y-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProjectCountdown, { project }, void 0, false, {
        fileName: "app/components/Project.tsx",
        lineNumber: 51,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "flex flex-col gap-y-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "flex flex-row items-center justify-between gap-x-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { className: "text-lg", children: "Swap Rate" }, void 0, false, {
            fileName: "app/components/Project.tsx",
            lineNumber: 55,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-lg text-foreground/60 text-semibold", children: project.swap_rate }, void 0, false, {
            fileName: "app/components/Project.tsx",
            lineNumber: 56,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Project.tsx",
          lineNumber: 54,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "flex flex-row items-center justify-between gap-x-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { className: "text-lg", children: "Cap" }, void 0, false, {
            fileName: "app/components/Project.tsx",
            lineNumber: 61,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-lg text-foreground/60 text-semibold", children: project.cap }, void 0, false, {
            fileName: "app/components/Project.tsx",
            lineNumber: 62,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Project.tsx",
          lineNumber: 60,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "flex flex-row items-center justify-between gap-x-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { className: "text-lg", children: "Access" }, void 0, false, {
            fileName: "app/components/Project.tsx",
            lineNumber: 67,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-lg text-foreground/60 text-semibold", children: project.access }, void 0, false, {
            fileName: "app/components/Project.tsx",
            lineNumber: 68,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Project.tsx",
          lineNumber: 66,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Project.tsx",
        lineNumber: 53,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col gap-y-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between text-foreground/60", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Progress" }, void 0, false, {
            fileName: "app/components/Project.tsx",
            lineNumber: 76,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Participants" }, void 0, false, {
            fileName: "app/components/Project.tsx",
            lineNumber: 77,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Project.tsx",
          lineNumber: 75,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative flex flex-1 flex-col", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative w-full h-2 rounded-full bg-background", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute left-0 top-0 bottom-0 h-full rounded-full bg-accent", style: {
          width: `${project.progress}%`
        } }, void 0, false, {
          fileName: "app/components/Project.tsx",
          lineNumber: 81,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/components/Project.tsx",
          lineNumber: 80,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/components/Project.tsx",
          lineNumber: 79,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between text-lg font-semibold", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
            Math.ceil(project.progress),
            "%"
          ] }, void 0, true, {
            fileName: "app/components/Project.tsx",
            lineNumber: 88,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: project.participants }, void 0, false, {
            fileName: "app/components/Project.tsx",
            lineNumber: 89,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Project.tsx",
          lineNumber: 87,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Project.tsx",
        lineNumber: 74,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Project.tsx",
      lineNumber: 50,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("footer", { className: "flex flex-row items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: `/projects/${project.id}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { type: "button", title: "View More", variant: "border", className: "bg-background", children: "View More" }, void 0, false, {
      fileName: "app/components/Project.tsx",
      lineNumber: 96,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/Project.tsx",
      lineNumber: 95,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/Project.tsx",
      lineNumber: 94,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Project.tsx",
    lineNumber: 33,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Project.tsx",
    lineNumber: 32,
    columnNumber: 10
  }, this);
}
_c = Project;
function ProjectStatus({
  status
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: cn("flex items-center py-1 px-3 gap-x-2 border border-solid rounded-full text-xs font-semibold", {
    "border-accent text-accent": status === "open",
    "border-upcoming text-upcoming": status === "upcoming",
    "border-closed text-closed": status === "closed"
  }), children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: cn("w-2 h-2 rounded-full", {
      "bg-accent shadow-[0_0_8px_1px_rgba(235,224,22,0.6)]": status === "open",
      "bg-upcoming shadow-[0_0_8px_1px_rgba(0,227,166,0.6)]": status === "upcoming",
      "bg-closed shadow-[0_0_8px_1px_rgba(158,158,158,0.6)]": status === "closed"
    }) }, void 0, false, {
      fileName: "app/components/Project.tsx",
      lineNumber: 113,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "capitalize", children: status }, void 0, false, {
      fileName: "app/components/Project.tsx",
      lineNumber: 118,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Project.tsx",
    lineNumber: 108,
    columnNumber: 10
  }, this);
}
_c2 = ProjectStatus;
function ProjectCurrency({
  currency
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center py-1 px-3 gap-x-2 bg-foreground/[.15] rounded-full text-sm font-bold", children: currency.toUpperCase() }, void 0, false, {
    fileName: "app/components/Project.tsx",
    lineNumber: 125,
    columnNumber: 10
  }, this);
}
_c3 = ProjectCurrency;
function ProjectSocialLinks() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "flex flex-row items-center gap-x-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", target: "_blank", rel: "norefeerer noopenner", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { icon: "globe", className: "w-6 h-6" }, void 0, false, {
      fileName: "app/components/Project.tsx",
      lineNumber: 134,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/Project.tsx",
      lineNumber: 133,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/Project.tsx",
      lineNumber: 132,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", target: "_blank", rel: "norefeerer noopenner", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { icon: "twitter", className: "w-6 h-6" }, void 0, false, {
      fileName: "app/components/Project.tsx",
      lineNumber: 139,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/Project.tsx",
      lineNumber: 138,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/Project.tsx",
      lineNumber: 137,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", target: "_blank", rel: "norefeerer noopenner", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { icon: "telegram", className: "w-6 h-6" }, void 0, false, {
      fileName: "app/components/Project.tsx",
      lineNumber: 144,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/Project.tsx",
      lineNumber: 143,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/Project.tsx",
      lineNumber: 142,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Project.tsx",
    lineNumber: 131,
    columnNumber: 10
  }, this);
}
_c4 = ProjectSocialLinks;
function ProjectCountdown({
  project,
  showClaimCoundown = false
}) {
  const isClaim = project.status === "closed";
  if (!showClaimCoundown && project.status === "closed")
    return null;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col py-3 px-4 gap-y-3 bg-background rounded-xl", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { className: "font-semibold text-foreground/75 text-center", children: [
      isClaim ? "Claim" : "Project",
      " ",
      project.status === "open" || project.status === "closed" ? "ends" : "starts",
      " ",
      "in"
    ] }, void 0, true, {
      fileName: "app/components/Project.tsx",
      lineNumber: 157,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 flex-wrap items-center space-x-3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col flex-1 justify-center items-center gap-y-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { className: cn("text-xl font-bold", {
          "text-accent": project.status === "open",
          "text-upcoming": project.status === "upcoming"
        }), children: "03" }, void 0, false, {
          fileName: "app/components/Project.tsx",
          lineNumber: 165,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-sm text-foreground/60 font-semibold", children: "DAYS" }, void 0, false, {
          fileName: "app/components/Project.tsx",
          lineNumber: 171,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Project.tsx",
        lineNumber: 164,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col flex-1 justify-center items-center gap-y-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { className: cn("text-xl font-bold", {
          "text-accent": project.status === "open",
          "text-upcoming": project.status === "upcoming"
        }), children: "12" }, void 0, false, {
          fileName: "app/components/Project.tsx",
          lineNumber: 174,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-sm text-foreground/60 font-semibold", children: "MINUTES" }, void 0, false, {
          fileName: "app/components/Project.tsx",
          lineNumber: 180,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Project.tsx",
        lineNumber: 173,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col flex-1 justify-center items-center gap-y-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { className: cn("text-xl font-bold", {
          "text-accent": project.status === "open",
          "text-upcoming": project.status === "upcoming"
        }), children: "17" }, void 0, false, {
          fileName: "app/components/Project.tsx",
          lineNumber: 185,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-sm text-foreground/60 font-semibold", children: "HOURS" }, void 0, false, {
          fileName: "app/components/Project.tsx",
          lineNumber: 191,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Project.tsx",
        lineNumber: 184,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col flex-1 justify-center items-center gap-y-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { className: cn("text-xl font-bold", {
          "text-accent": project.status === "open",
          "text-upcoming": project.status === "upcoming"
        }), children: "23" }, void 0, false, {
          fileName: "app/components/Project.tsx",
          lineNumber: 196,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-sm text-foreground/60 font-semibold", children: "SECONDS" }, void 0, false, {
          fileName: "app/components/Project.tsx",
          lineNumber: 202,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Project.tsx",
        lineNumber: 195,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Project.tsx",
      lineNumber: 163,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Project.tsx",
    lineNumber: 156,
    columnNumber: 10
  }, this);
}
_c5 = ProjectCountdown;
var _c;
var _c2;
var _c3;
var _c4;
var _c5;
$RefreshReg$(_c, "Project");
$RefreshReg$(_c2, "ProjectStatus");
$RefreshReg$(_c3, "ProjectCurrency");
$RefreshReg$(_c4, "ProjectSocialLinks");
$RefreshReg$(_c5, "ProjectCountdown");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  Projects,
  Project,
  ProjectStatus,
  ProjectCurrency,
  ProjectSocialLinks,
  ProjectCountdown
};
//# sourceMappingURL=/build/_shared/chunk-6N3ANJXK.js.map

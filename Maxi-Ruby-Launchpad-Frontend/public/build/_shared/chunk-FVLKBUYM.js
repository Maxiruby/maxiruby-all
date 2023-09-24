import {
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

// app/components/Layout.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Layout.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Layout.tsx"
  );
  import.meta.hot.lastModified = "1691945345599.744";
}
function Container({
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "block w-full h-full max-w-[1400px] mx-auto px-10", children }, void 0, false, {
    fileName: "app/components/Layout.tsx",
    lineNumber: 26,
    columnNumber: 10
  }, this);
}
_c = Container;
function Section({
  title,
  className,
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: cn("flex flex-1 flex-col gap-y-2 py-12", className), children: [
    title && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-xl sm:text-3xl font-bold", children: title }, void 0, false, {
      fileName: "app/components/Layout.tsx",
      lineNumber: 37,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 flex-col", children }, void 0, false, {
      fileName: "app/components/Layout.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Layout.tsx",
    lineNumber: 36,
    columnNumber: 10
  }, this);
}
_c2 = Section;
var _c;
var _c2;
$RefreshReg$(_c, "Container");
$RefreshReg$(_c2, "Section");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  Container,
  Section
};
//# sourceMappingURL=/build/_shared/chunk-FVLKBUYM.js.map

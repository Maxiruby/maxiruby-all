import {
  __esm,
  __export
} from "/build/_shared/chunk-DPSM2F2X.js";

// node_modules/preact/dist/preact.module.js
var preact_module_exports = {};
__export(preact_module_exports, {
  Component: () => b,
  Fragment: () => k,
  cloneElement: () => F,
  createContext: () => G,
  createElement: () => y,
  createRef: () => _,
  h: () => y,
  hydrate: () => E,
  isValidElement: () => t,
  options: () => l,
  render: () => D,
  toChildArray: () => C
});
function v(n2, l3) {
  for (var u3 in l3)
    n2[u3] = l3[u3];
  return n2;
}
function p(n2) {
  var l3 = n2.parentNode;
  l3 && l3.removeChild(n2);
}
function y(l3, u3, t3) {
  var i3, o3, r3, f3 = {};
  for (r3 in u3)
    "key" == r3 ? i3 = u3[r3] : "ref" == r3 ? o3 = u3[r3] : f3[r3] = u3[r3];
  if (arguments.length > 2 && (f3.children = arguments.length > 3 ? n.call(arguments, 2) : t3), "function" == typeof l3 && null != l3.defaultProps)
    for (r3 in l3.defaultProps)
      void 0 === f3[r3] && (f3[r3] = l3.defaultProps[r3]);
  return d(l3, f3, i3, o3, null);
}
function d(n2, t3, i3, o3, r3) {
  var f3 = { type: n2, props: t3, key: i3, ref: o3, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: null == r3 ? ++u : r3 };
  return null == r3 && null != l.vnode && l.vnode(f3), f3;
}
function _() {
  return { current: null };
}
function k(n2) {
  return n2.children;
}
function b(n2, l3) {
  this.props = n2, this.context = l3;
}
function g(n2, l3) {
  if (null == l3)
    return n2.__ ? g(n2.__, n2.__.__k.indexOf(n2) + 1) : null;
  for (var u3; l3 < n2.__k.length; l3++)
    if (null != (u3 = n2.__k[l3]) && null != u3.__e)
      return u3.__e;
  return "function" == typeof n2.type ? g(n2) : null;
}
function m(n2) {
  var l3, u3;
  if (null != (n2 = n2.__) && null != n2.__c) {
    for (n2.__e = n2.__c.base = null, l3 = 0; l3 < n2.__k.length; l3++)
      if (null != (u3 = n2.__k[l3]) && null != u3.__e) {
        n2.__e = n2.__c.base = u3.__e;
        break;
      }
    return m(n2);
  }
}
function w(n2) {
  (!n2.__d && (n2.__d = true) && i.push(n2) && !x.__r++ || o !== l.debounceRendering) && ((o = l.debounceRendering) || r)(x);
}
function x() {
  var n2, l3, u3, t3, o3, r3, e3, c3, s3;
  for (i.sort(f); n2 = i.shift(); )
    n2.__d && (l3 = i.length, t3 = void 0, o3 = void 0, r3 = void 0, c3 = (e3 = (u3 = n2).__v).__e, (s3 = u3.__P) && (t3 = [], o3 = [], (r3 = v({}, e3)).__v = e3.__v + 1, L(s3, e3, r3, u3.__n, void 0 !== s3.ownerSVGElement, null != e3.__h ? [c3] : null, t3, null == c3 ? g(e3) : c3, e3.__h, o3), M(t3, e3, o3), e3.__e != c3 && m(e3)), i.length > l3 && i.sort(f));
  x.__r = 0;
}
function P(n2, l3, u3, t3, i3, o3, r3, f3, e3, a3, v3) {
  var p3, y3, _3, b3, m3, w3, x3, P3, C2, H2 = 0, I2 = t3 && t3.__k || s, T3 = I2.length, j3 = T3, z3 = l3.length;
  for (u3.__k = [], p3 = 0; p3 < z3; p3++)
    null != (b3 = u3.__k[p3] = null == (b3 = l3[p3]) || "boolean" == typeof b3 || "function" == typeof b3 ? null : "string" == typeof b3 || "number" == typeof b3 || "bigint" == typeof b3 ? d(null, b3, null, null, b3) : h(b3) ? d(k, { children: b3 }, null, null, null) : b3.__b > 0 ? d(b3.type, b3.props, b3.key, b3.ref ? b3.ref : null, b3.__v) : b3) ? (b3.__ = u3, b3.__b = u3.__b + 1, -1 === (P3 = A(b3, I2, x3 = p3 + H2, j3)) ? _3 = c : (_3 = I2[P3] || c, I2[P3] = void 0, j3--), L(n2, b3, _3, i3, o3, r3, f3, e3, a3, v3), m3 = b3.__e, (y3 = b3.ref) && _3.ref != y3 && (_3.ref && O(_3.ref, null, b3), v3.push(y3, b3.__c || m3, b3)), null != m3 && (null == w3 && (w3 = m3), (C2 = _3 === c || null === _3.__v) ? -1 == P3 && H2-- : P3 !== x3 && (P3 === x3 + 1 ? H2++ : P3 > x3 ? j3 > z3 - x3 ? H2 += P3 - x3 : H2-- : H2 = P3 < x3 && P3 == x3 - 1 ? P3 - x3 : 0), x3 = p3 + H2, "function" != typeof b3.type || P3 === x3 && _3.__k !== b3.__k ? "function" == typeof b3.type || P3 === x3 && !C2 ? void 0 !== b3.__d ? (e3 = b3.__d, b3.__d = void 0) : e3 = m3.nextSibling : e3 = S(n2, m3, e3) : e3 = $(b3, e3, n2), "function" == typeof u3.type && (u3.__d = e3))) : (_3 = I2[p3]) && null == _3.key && _3.__e && (_3.__e == e3 && (e3 = g(_3)), q(_3, _3, false), I2[p3] = null);
  for (u3.__e = w3, p3 = T3; p3--; )
    null != I2[p3] && ("function" == typeof u3.type && null != I2[p3].__e && I2[p3].__e == u3.__d && (u3.__d = I2[p3].__e.nextSibling), q(I2[p3], I2[p3]));
}
function $(n2, l3, u3) {
  for (var t3, i3 = n2.__k, o3 = 0; i3 && o3 < i3.length; o3++)
    (t3 = i3[o3]) && (t3.__ = n2, l3 = "function" == typeof t3.type ? $(t3, l3, u3) : S(u3, t3.__e, l3));
  return l3;
}
function C(n2, l3) {
  return l3 = l3 || [], null == n2 || "boolean" == typeof n2 || (h(n2) ? n2.some(function(n3) {
    C(n3, l3);
  }) : l3.push(n2)), l3;
}
function S(n2, l3, u3) {
  return null == u3 || u3.parentNode !== n2 ? n2.insertBefore(l3, null) : l3 == u3 && null != l3.parentNode || n2.insertBefore(l3, u3), l3.nextSibling;
}
function A(n2, l3, u3, t3) {
  var i3 = n2.key, o3 = n2.type, r3 = u3 - 1, f3 = u3 + 1, e3 = l3[u3];
  if (null === e3 || e3 && i3 == e3.key && o3 === e3.type)
    return u3;
  if (t3 > (null != e3 ? 1 : 0))
    for (; r3 >= 0 || f3 < l3.length; ) {
      if (r3 >= 0) {
        if ((e3 = l3[r3]) && i3 == e3.key && o3 === e3.type)
          return r3;
        r3--;
      }
      if (f3 < l3.length) {
        if ((e3 = l3[f3]) && i3 == e3.key && o3 === e3.type)
          return f3;
        f3++;
      }
    }
  return -1;
}
function H(n2, l3, u3, t3, i3) {
  var o3;
  for (o3 in u3)
    "children" === o3 || "key" === o3 || o3 in l3 || T(n2, o3, null, u3[o3], t3);
  for (o3 in l3)
    i3 && "function" != typeof l3[o3] || "children" === o3 || "key" === o3 || "value" === o3 || "checked" === o3 || u3[o3] === l3[o3] || T(n2, o3, l3[o3], u3[o3], t3);
}
function I(n2, l3, u3) {
  "-" === l3[0] ? n2.setProperty(l3, null == u3 ? "" : u3) : n2[l3] = null == u3 ? "" : "number" != typeof u3 || a.test(l3) ? u3 : u3 + "px";
}
function T(n2, l3, u3, t3, i3) {
  var o3;
  n:
    if ("style" === l3) {
      if ("string" == typeof u3)
        n2.style.cssText = u3;
      else {
        if ("string" == typeof t3 && (n2.style.cssText = t3 = ""), t3)
          for (l3 in t3)
            u3 && l3 in u3 || I(n2.style, l3, "");
        if (u3)
          for (l3 in u3)
            t3 && u3[l3] === t3[l3] || I(n2.style, l3, u3[l3]);
      }
    } else if ("o" === l3[0] && "n" === l3[1])
      o3 = l3 !== (l3 = l3.replace(/(PointerCapture)$|Capture$/, "$1")), l3 = l3.toLowerCase() in n2 ? l3.toLowerCase().slice(2) : l3.slice(2), n2.l || (n2.l = {}), n2.l[l3 + o3] = u3, u3 ? t3 || n2.addEventListener(l3, o3 ? z : j, o3) : n2.removeEventListener(l3, o3 ? z : j, o3);
    else if ("dangerouslySetInnerHTML" !== l3) {
      if (i3)
        l3 = l3.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if ("width" !== l3 && "height" !== l3 && "href" !== l3 && "list" !== l3 && "form" !== l3 && "tabIndex" !== l3 && "download" !== l3 && "rowSpan" !== l3 && "colSpan" !== l3 && l3 in n2)
        try {
          n2[l3] = null == u3 ? "" : u3;
          break n;
        } catch (n3) {
        }
      "function" == typeof u3 || (null == u3 || false === u3 && "-" !== l3[4] ? n2.removeAttribute(l3) : n2.setAttribute(l3, u3));
    }
}
function j(n2) {
  return this.l[n2.type + false](l.event ? l.event(n2) : n2);
}
function z(n2) {
  return this.l[n2.type + true](l.event ? l.event(n2) : n2);
}
function L(n2, u3, t3, i3, o3, r3, f3, e3, c3, s3) {
  var a3, p3, y3, d3, _3, g3, m3, w3, x3, $2, C2, S2, A3, H2, I2, T3 = u3.type;
  if (void 0 !== u3.constructor)
    return null;
  null != t3.__h && (c3 = t3.__h, e3 = u3.__e = t3.__e, u3.__h = null, r3 = [e3]), (a3 = l.__b) && a3(u3);
  n:
    if ("function" == typeof T3)
      try {
        if (w3 = u3.props, x3 = (a3 = T3.contextType) && i3[a3.__c], $2 = a3 ? x3 ? x3.props.value : a3.__ : i3, t3.__c ? m3 = (p3 = u3.__c = t3.__c).__ = p3.__E : ("prototype" in T3 && T3.prototype.render ? u3.__c = p3 = new T3(w3, $2) : (u3.__c = p3 = new b(w3, $2), p3.constructor = T3, p3.render = B), x3 && x3.sub(p3), p3.props = w3, p3.state || (p3.state = {}), p3.context = $2, p3.__n = i3, y3 = p3.__d = true, p3.__h = [], p3._sb = []), null == p3.__s && (p3.__s = p3.state), null != T3.getDerivedStateFromProps && (p3.__s == p3.state && (p3.__s = v({}, p3.__s)), v(p3.__s, T3.getDerivedStateFromProps(w3, p3.__s))), d3 = p3.props, _3 = p3.state, p3.__v = u3, y3)
          null == T3.getDerivedStateFromProps && null != p3.componentWillMount && p3.componentWillMount(), null != p3.componentDidMount && p3.__h.push(p3.componentDidMount);
        else {
          if (null == T3.getDerivedStateFromProps && w3 !== d3 && null != p3.componentWillReceiveProps && p3.componentWillReceiveProps(w3, $2), !p3.__e && (null != p3.shouldComponentUpdate && false === p3.shouldComponentUpdate(w3, p3.__s, $2) || u3.__v === t3.__v)) {
            for (u3.__v !== t3.__v && (p3.props = w3, p3.state = p3.__s, p3.__d = false), u3.__e = t3.__e, u3.__k = t3.__k, u3.__k.forEach(function(n3) {
              n3 && (n3.__ = u3);
            }), C2 = 0; C2 < p3._sb.length; C2++)
              p3.__h.push(p3._sb[C2]);
            p3._sb = [], p3.__h.length && f3.push(p3);
            break n;
          }
          null != p3.componentWillUpdate && p3.componentWillUpdate(w3, p3.__s, $2), null != p3.componentDidUpdate && p3.__h.push(function() {
            p3.componentDidUpdate(d3, _3, g3);
          });
        }
        if (p3.context = $2, p3.props = w3, p3.__P = n2, p3.__e = false, S2 = l.__r, A3 = 0, "prototype" in T3 && T3.prototype.render) {
          for (p3.state = p3.__s, p3.__d = false, S2 && S2(u3), a3 = p3.render(p3.props, p3.state, p3.context), H2 = 0; H2 < p3._sb.length; H2++)
            p3.__h.push(p3._sb[H2]);
          p3._sb = [];
        } else
          do {
            p3.__d = false, S2 && S2(u3), a3 = p3.render(p3.props, p3.state, p3.context), p3.state = p3.__s;
          } while (p3.__d && ++A3 < 25);
        p3.state = p3.__s, null != p3.getChildContext && (i3 = v(v({}, i3), p3.getChildContext())), y3 || null == p3.getSnapshotBeforeUpdate || (g3 = p3.getSnapshotBeforeUpdate(d3, _3)), P(n2, h(I2 = null != a3 && a3.type === k && null == a3.key ? a3.props.children : a3) ? I2 : [I2], u3, t3, i3, o3, r3, f3, e3, c3, s3), p3.base = u3.__e, u3.__h = null, p3.__h.length && f3.push(p3), m3 && (p3.__E = p3.__ = null);
      } catch (n3) {
        u3.__v = null, (c3 || null != r3) && (u3.__e = e3, u3.__h = !!c3, r3[r3.indexOf(e3)] = null), l.__e(n3, u3, t3);
      }
    else
      null == r3 && u3.__v === t3.__v ? (u3.__k = t3.__k, u3.__e = t3.__e) : u3.__e = N(t3.__e, u3, t3, i3, o3, r3, f3, c3, s3);
  (a3 = l.diffed) && a3(u3);
}
function M(n2, u3, t3) {
  for (var i3 = 0; i3 < t3.length; i3++)
    O(t3[i3], t3[++i3], t3[++i3]);
  l.__c && l.__c(u3, n2), n2.some(function(u4) {
    try {
      n2 = u4.__h, u4.__h = [], n2.some(function(n3) {
        n3.call(u4);
      });
    } catch (n3) {
      l.__e(n3, u4.__v);
    }
  });
}
function N(l3, u3, t3, i3, o3, r3, f3, e3, s3) {
  var a3, v3, y3, d3 = t3.props, _3 = u3.props, k3 = u3.type, b3 = 0;
  if ("svg" === k3 && (o3 = true), null != r3) {
    for (; b3 < r3.length; b3++)
      if ((a3 = r3[b3]) && "setAttribute" in a3 == !!k3 && (k3 ? a3.localName === k3 : 3 === a3.nodeType)) {
        l3 = a3, r3[b3] = null;
        break;
      }
  }
  if (null == l3) {
    if (null === k3)
      return document.createTextNode(_3);
    l3 = o3 ? document.createElementNS("http://www.w3.org/2000/svg", k3) : document.createElement(k3, _3.is && _3), r3 = null, e3 = false;
  }
  if (null === k3)
    d3 === _3 || e3 && l3.data === _3 || (l3.data = _3);
  else {
    if (r3 = r3 && n.call(l3.childNodes), v3 = (d3 = t3.props || c).dangerouslySetInnerHTML, y3 = _3.dangerouslySetInnerHTML, !e3) {
      if (null != r3)
        for (d3 = {}, b3 = 0; b3 < l3.attributes.length; b3++)
          d3[l3.attributes[b3].name] = l3.attributes[b3].value;
      (y3 || v3) && (y3 && (v3 && y3.__html == v3.__html || y3.__html === l3.innerHTML) || (l3.innerHTML = y3 && y3.__html || ""));
    }
    if (H(l3, _3, d3, o3, e3), y3)
      u3.__k = [];
    else if (P(l3, h(b3 = u3.props.children) ? b3 : [b3], u3, t3, i3, o3 && "foreignObject" !== k3, r3, f3, r3 ? r3[0] : t3.__k && g(t3, 0), e3, s3), null != r3)
      for (b3 = r3.length; b3--; )
        null != r3[b3] && p(r3[b3]);
    e3 || ("value" in _3 && void 0 !== (b3 = _3.value) && (b3 !== l3.value || "progress" === k3 && !b3 || "option" === k3 && b3 !== d3.value) && T(l3, "value", b3, d3.value, false), "checked" in _3 && void 0 !== (b3 = _3.checked) && b3 !== l3.checked && T(l3, "checked", b3, d3.checked, false));
  }
  return l3;
}
function O(n2, u3, t3) {
  try {
    "function" == typeof n2 ? n2(u3) : n2.current = u3;
  } catch (n3) {
    l.__e(n3, t3);
  }
}
function q(n2, u3, t3) {
  var i3, o3;
  if (l.unmount && l.unmount(n2), (i3 = n2.ref) && (i3.current && i3.current !== n2.__e || O(i3, null, u3)), null != (i3 = n2.__c)) {
    if (i3.componentWillUnmount)
      try {
        i3.componentWillUnmount();
      } catch (n3) {
        l.__e(n3, u3);
      }
    i3.base = i3.__P = null, n2.__c = void 0;
  }
  if (i3 = n2.__k)
    for (o3 = 0; o3 < i3.length; o3++)
      i3[o3] && q(i3[o3], u3, t3 || "function" != typeof n2.type);
  t3 || null == n2.__e || p(n2.__e), n2.__ = n2.__e = n2.__d = void 0;
}
function B(n2, l3, u3) {
  return this.constructor(n2, u3);
}
function D(u3, t3, i3) {
  var o3, r3, f3, e3;
  l.__ && l.__(u3, t3), r3 = (o3 = "function" == typeof i3) ? null : i3 && i3.__k || t3.__k, f3 = [], e3 = [], L(t3, u3 = (!o3 && i3 || t3).__k = y(k, null, [u3]), r3 || c, c, void 0 !== t3.ownerSVGElement, !o3 && i3 ? [i3] : r3 ? null : t3.firstChild ? n.call(t3.childNodes) : null, f3, !o3 && i3 ? i3 : r3 ? r3.__e : t3.firstChild, o3, e3), M(f3, u3, e3);
}
function E(n2, l3) {
  D(n2, l3, E);
}
function F(l3, u3, t3) {
  var i3, o3, r3, f3, e3 = v({}, l3.props);
  for (r3 in l3.type && l3.type.defaultProps && (f3 = l3.type.defaultProps), u3)
    "key" == r3 ? i3 = u3[r3] : "ref" == r3 ? o3 = u3[r3] : e3[r3] = void 0 === u3[r3] && void 0 !== f3 ? f3[r3] : u3[r3];
  return arguments.length > 2 && (e3.children = arguments.length > 3 ? n.call(arguments, 2) : t3), d(l3.type, e3, i3 || l3.key, o3 || l3.ref, null);
}
function G(n2, l3) {
  var u3 = { __c: l3 = "__cC" + e++, __: n2, Consumer: function(n3, l4) {
    return n3.children(l4);
  }, Provider: function(n3) {
    var u4, t3;
    return this.getChildContext || (u4 = [], (t3 = {})[l3] = this, this.getChildContext = function() {
      return t3;
    }, this.shouldComponentUpdate = function(n4) {
      this.props.value !== n4.value && u4.some(function(n5) {
        n5.__e = true, w(n5);
      });
    }, this.sub = function(n4) {
      u4.push(n4);
      var l4 = n4.componentWillUnmount;
      n4.componentWillUnmount = function() {
        u4.splice(u4.indexOf(n4), 1), l4 && l4.call(n4);
      };
    }), n3.children;
  } };
  return u3.Provider.__ = u3.Consumer.contextType = u3;
}
var n, l, u, t, i, o, r, f, e, c, s, a, h;
var init_preact_module = __esm({
  "node_modules/preact/dist/preact.module.js"() {
    c = {};
    s = [];
    a = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
    h = Array.isArray;
    n = s.slice, l = { __e: function(n2, l3, u3, t3) {
      for (var i3, o3, r3; l3 = l3.__; )
        if ((i3 = l3.__c) && !i3.__)
          try {
            if ((o3 = i3.constructor) && null != o3.getDerivedStateFromError && (i3.setState(o3.getDerivedStateFromError(n2)), r3 = i3.__d), null != i3.componentDidCatch && (i3.componentDidCatch(n2, t3 || {}), r3 = i3.__d), r3)
              return i3.__E = i3;
          } catch (l4) {
            n2 = l4;
          }
      throw n2;
    } }, u = 0, t = function(n2) {
      return null != n2 && void 0 === n2.constructor;
    }, b.prototype.setState = function(n2, l3) {
      var u3;
      u3 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = v({}, this.state), "function" == typeof n2 && (n2 = n2(v({}, u3), this.props)), n2 && v(u3, n2), null != n2 && this.__v && (l3 && this._sb.push(l3), w(this));
    }, b.prototype.forceUpdate = function(n2) {
      this.__v && (this.__e = true, n2 && this.__h.push(n2), w(this));
    }, b.prototype.render = k, i = [], r = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, f = function(n2, l3) {
      return n2.__v.__b - l3.__v.__b;
    }, x.__r = 0, e = 0;
  }
});

// node_modules/preact/hooks/dist/hooks.module.js
var hooks_module_exports = {};
__export(hooks_module_exports, {
  useCallback: () => T2,
  useContext: () => q2,
  useDebugValue: () => x2,
  useEffect: () => p2,
  useErrorBoundary: () => P2,
  useId: () => V,
  useImperativeHandle: () => A2,
  useLayoutEffect: () => y2,
  useMemo: () => F2,
  useReducer: () => s2,
  useRef: () => _2,
  useState: () => h2
});
function d2(t3, u3) {
  l.__h && l.__h(r2, t3, o2 || u3), o2 = 0;
  var i3 = r2.__H || (r2.__H = { __: [], __h: [] });
  return t3 >= i3.__.length && i3.__.push({ __V: c2 }), i3.__[t3];
}
function h2(n2) {
  return o2 = 1, s2(B2, n2);
}
function s2(n2, u3, i3) {
  var o3 = d2(t2++, 2);
  if (o3.t = n2, !o3.__c && (o3.__ = [i3 ? i3(u3) : B2(void 0, u3), function(n3) {
    var t3 = o3.__N ? o3.__N[0] : o3.__[0], r3 = o3.t(t3, n3);
    t3 !== r3 && (o3.__N = [r3, o3.__[1]], o3.__c.setState({}));
  }], o3.__c = r2, !r2.u)) {
    var f3 = function(n3, t3, r3) {
      if (!o3.__c.__H)
        return true;
      var u4 = o3.__c.__H.__.filter(function(n4) {
        return n4.__c;
      });
      if (u4.every(function(n4) {
        return !n4.__N;
      }))
        return !c3 || c3.call(this, n3, t3, r3);
      var i4 = false;
      return u4.forEach(function(n4) {
        if (n4.__N) {
          var t4 = n4.__[0];
          n4.__ = n4.__N, n4.__N = void 0, t4 !== n4.__[0] && (i4 = true);
        }
      }), !(!i4 && o3.__c.props === n3) && (!c3 || c3.call(this, n3, t3, r3));
    };
    r2.u = true;
    var c3 = r2.shouldComponentUpdate, e3 = r2.componentWillUpdate;
    r2.componentWillUpdate = function(n3, t3, r3) {
      if (this.__e) {
        var u4 = c3;
        c3 = void 0, f3(n3, t3, r3), c3 = u4;
      }
      e3 && e3.call(this, n3, t3, r3);
    }, r2.shouldComponentUpdate = f3;
  }
  return o3.__N || o3.__;
}
function p2(u3, i3) {
  var o3 = d2(t2++, 3);
  !l.__s && z2(o3.__H, i3) && (o3.__ = u3, o3.i = i3, r2.__H.__h.push(o3));
}
function y2(u3, i3) {
  var o3 = d2(t2++, 4);
  !l.__s && z2(o3.__H, i3) && (o3.__ = u3, o3.i = i3, r2.__h.push(o3));
}
function _2(n2) {
  return o2 = 5, F2(function() {
    return { current: n2 };
  }, []);
}
function A2(n2, t3, r3) {
  o2 = 6, y2(function() {
    return "function" == typeof n2 ? (n2(t3()), function() {
      return n2(null);
    }) : n2 ? (n2.current = t3(), function() {
      return n2.current = null;
    }) : void 0;
  }, null == r3 ? r3 : r3.concat(n2));
}
function F2(n2, r3) {
  var u3 = d2(t2++, 7);
  return z2(u3.__H, r3) ? (u3.__V = n2(), u3.i = r3, u3.__h = n2, u3.__V) : u3.__;
}
function T2(n2, t3) {
  return o2 = 8, F2(function() {
    return n2;
  }, t3);
}
function q2(n2) {
  var u3 = r2.context[n2.__c], i3 = d2(t2++, 9);
  return i3.c = n2, u3 ? (null == i3.__ && (i3.__ = true, u3.sub(r2)), u3.props.value) : n2.__;
}
function x2(t3, r3) {
  l.useDebugValue && l.useDebugValue(r3 ? r3(t3) : t3);
}
function P2(n2) {
  var u3 = d2(t2++, 10), i3 = h2();
  return u3.__ = n2, r2.componentDidCatch || (r2.componentDidCatch = function(n3, t3) {
    u3.__ && u3.__(n3, t3), i3[1](n3);
  }), [i3[0], function() {
    i3[1](void 0);
  }];
}
function V() {
  var n2 = d2(t2++, 11);
  if (!n2.__) {
    for (var u3 = r2.__v; null !== u3 && !u3.__m && null !== u3.__; )
      u3 = u3.__;
    var i3 = u3.__m || (u3.__m = [0, 0]);
    n2.__ = "P" + i3[0] + "-" + i3[1]++;
  }
  return n2.__;
}
function b2() {
  for (var t3; t3 = f2.shift(); )
    if (t3.__P && t3.__H)
      try {
        t3.__H.__h.forEach(k2), t3.__H.__h.forEach(w2), t3.__H.__h = [];
      } catch (r3) {
        t3.__H.__h = [], l.__e(r3, t3.__v);
      }
}
function j2(n2) {
  var t3, r3 = function() {
    clearTimeout(u3), g2 && cancelAnimationFrame(t3), setTimeout(n2);
  }, u3 = setTimeout(r3, 100);
  g2 && (t3 = requestAnimationFrame(r3));
}
function k2(n2) {
  var t3 = r2, u3 = n2.__c;
  "function" == typeof u3 && (n2.__c = void 0, u3()), r2 = t3;
}
function w2(n2) {
  var t3 = r2;
  n2.__c = n2.__(), r2 = t3;
}
function z2(n2, t3) {
  return !n2 || n2.length !== t3.length || t3.some(function(t4, r3) {
    return t4 !== n2[r3];
  });
}
function B2(n2, t3) {
  return "function" == typeof t3 ? t3(n2) : t3;
}
var t2, r2, u2, i2, o2, f2, c2, e2, a2, v2, l2, m2, g2;
var init_hooks_module = __esm({
  "node_modules/preact/hooks/dist/hooks.module.js"() {
    init_preact_module();
    o2 = 0;
    f2 = [];
    c2 = [];
    e2 = l.__b;
    a2 = l.__r;
    v2 = l.diffed;
    l2 = l.__c;
    m2 = l.unmount;
    l.__b = function(n2) {
      r2 = null, e2 && e2(n2);
    }, l.__r = function(n2) {
      a2 && a2(n2), t2 = 0;
      var i3 = (r2 = n2.__c).__H;
      i3 && (u2 === r2 ? (i3.__h = [], r2.__h = [], i3.__.forEach(function(n3) {
        n3.__N && (n3.__ = n3.__N), n3.__V = c2, n3.__N = n3.i = void 0;
      })) : (i3.__h.forEach(k2), i3.__h.forEach(w2), i3.__h = [], t2 = 0)), u2 = r2;
    }, l.diffed = function(t3) {
      v2 && v2(t3);
      var o3 = t3.__c;
      o3 && o3.__H && (o3.__H.__h.length && (1 !== f2.push(o3) && i2 === l.requestAnimationFrame || ((i2 = l.requestAnimationFrame) || j2)(b2)), o3.__H.__.forEach(function(n2) {
        n2.i && (n2.__H = n2.i), n2.__V !== c2 && (n2.__ = n2.__V), n2.i = void 0, n2.__V = c2;
      })), u2 = r2 = null;
    }, l.__c = function(t3, r3) {
      r3.some(function(t4) {
        try {
          t4.__h.forEach(k2), t4.__h = t4.__h.filter(function(n2) {
            return !n2.__ || w2(n2);
          });
        } catch (u3) {
          r3.some(function(n2) {
            n2.__h && (n2.__h = []);
          }), r3 = [], l.__e(u3, t4.__v);
        }
      }), l2 && l2(t3, r3);
    }, l.unmount = function(t3) {
      m2 && m2(t3);
      var r3, u3 = t3.__c;
      u3 && u3.__H && (u3.__H.__.forEach(function(n2) {
        try {
          k2(n2);
        } catch (n3) {
          r3 = n3;
        }
      }), u3.__H = void 0, r3 && l.__e(r3, u3.__v));
    };
    g2 = "function" == typeof requestAnimationFrame;
  }
});

export {
  l,
  y,
  _,
  k,
  b,
  C,
  D,
  E,
  F,
  G,
  preact_module_exports,
  init_preact_module,
  h2 as h,
  s2 as s,
  p2 as p,
  y2,
  _2,
  A2 as A,
  F2,
  T2 as T,
  q2 as q,
  x2 as x,
  P2 as P,
  V,
  hooks_module_exports,
  init_hooks_module
};
//# sourceMappingURL=/build/_shared/chunk-QMY2EA2J.js.map
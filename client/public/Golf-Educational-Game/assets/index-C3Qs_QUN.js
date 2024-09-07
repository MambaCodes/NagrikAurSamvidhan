var e = Object.defineProperty;
import { p as n, P as r, g as t } from "./phaser-BhdgLZzI.js";
!(function () {
  const e = document.createElement("link").relList;
  if (!(e && e.supports && e.supports("modulepreload"))) {
    for (const e of document.querySelectorAll('link[rel="modulepreload"]'))
      t(e);
    new MutationObserver((e) => {
      for (const n of e)
        if ("childList" === n.type)
          for (const e of n.addedNodes)
            "LINK" === e.tagName && "modulepreload" === e.rel && t(e);
    }).observe(document, { childList: !0, subtree: !0 });
  }
  function t(e) {
    if (e.ep) return;
    e.ep = !0;
    const t = (function (e) {
      const t = {};
      return (
        e.integrity && (t.integrity = e.integrity),
        e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy),
        "use-credentials" === e.crossOrigin
          ? (t.credentials = "include")
          : "anonymous" === e.crossOrigin
          ? (t.credentials = "omit")
          : (t.credentials = "same-origin"),
        t
      );
    })(e);
    fetch(e.href, t);
  }
})();
var a = { exports: {} },
  i = {},
  o = { exports: {} },
  l = {},
  s = Symbol.for("react.element"),
  u = Symbol.for("react.portal"),
  c = Symbol.for("react.fragment"),
  d = Symbol.for("react.strict_mode"),
  f = Symbol.for("react.profiler"),
  h = Symbol.for("react.provider"),
  p = Symbol.for("react.context"),
  g = Symbol.for("react.forward_ref"),
  m = Symbol.for("react.suspense"),
  y = Symbol.for("react.memo"),
  v = Symbol.for("react.lazy"),
  b = Symbol.iterator,
  w = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  _ = Object.assign,
  k = {};
function S(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = k),
    (this.updater = n || w);
}
function x() {}
function C(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = k),
    (this.updater = n || w);
}
(S.prototype.isReactComponent = {}),
  (S.prototype.setState = function (e, t) {
    if ("object" != typeof e && "function" != typeof e && null != e)
      throw Error(
        "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, e, t, "setState");
  }),
  (S.prototype.forceUpdate = function (e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate");
  }),
  (x.prototype = S.prototype);
var P = (C.prototype = new x());
(P.constructor = C), _(P, S.prototype), (P.isPureReactComponent = !0);
var q = Array.isArray,
  E = Object.prototype.hasOwnProperty,
  T = { current: null },
  L = { key: !0, ref: !0, __self: !0, __source: !0 };
function N(e, t, n) {
  var r,
    a = {},
    i = null,
    o = null;
  if (null != t)
    for (r in (void 0 !== t.ref && (o = t.ref),
    void 0 !== t.key && (i = "" + t.key),
    t))
      E.call(t, r) && !L.hasOwnProperty(r) && (a[r] = t[r]);
  var l = arguments.length - 2;
  if (1 === l) a.children = n;
  else if (1 < l) {
    for (var u = Array(l), c = 0; c < l; c++) u[c] = arguments[c + 2];
    a.children = u;
  }
  if (e && e.defaultProps)
    for (r in (l = e.defaultProps)) void 0 === a[r] && (a[r] = l[r]);
  return { $$typeof: s, type: e, key: i, ref: o, props: a, _owner: T.current };
}
function O(e) {
  return "object" == typeof e && null !== e && e.$$typeof === s;
}
var z = /\/+/g;
function A(e, t) {
  return "object" == typeof e && null !== e && null != e.key
    ? (function (e) {
        var t = { "=": "=0", ":": "=2" };
        return (
          "$" +
          e.replace(/[=:]/g, function (e) {
            return t[e];
          })
        );
      })("" + e.key)
    : t.toString(36);
}
function I(e, t, n, r, a) {
  var i = typeof e;
  ("undefined" !== i && "boolean" !== i) || (e = null);
  var o = !1;
  if (null === e) o = !0;
  else
    switch (i) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case s:
          case u:
            o = !0;
        }
    }
  if (o)
    return (
      (a = a((o = e))),
      (e = "" === r ? "." + A(o, 0) : r),
      q(a)
        ? ((n = ""),
          null != e && (n = e.replace(z, "$&/") + "/"),
          I(a, t, n, "", function (e) {
            return e;
          }))
        : null != a &&
          (O(a) &&
            (a = (function (e, t) {
              return {
                $$typeof: s,
                type: e.type,
                key: t,
                ref: e.ref,
                props: e.props,
                _owner: e._owner,
              };
            })(
              a,
              n +
                (!a.key || (o && o.key === a.key)
                  ? ""
                  : ("" + a.key).replace(z, "$&/") + "/") +
                e
            )),
          t.push(a)),
      1
    );
  if (((o = 0), (r = "" === r ? "." : r + ":"), q(e)))
    for (var l = 0; l < e.length; l++) {
      var c = r + A((i = e[l]), l);
      o += I(i, t, n, c, a);
    }
  else if (
    ((c = (function (e) {
      return null === e || "object" != typeof e
        ? null
        : "function" == typeof (e = (b && e[b]) || e["@@iterator"])
        ? e
        : null;
    })(e)),
    "function" == typeof c)
  )
    for (e = c.call(e), l = 0; !(i = e.next()).done; )
      o += I((i = i.value), t, n, (c = r + A(i, l++)), a);
  else if ("object" === i)
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          ("[object Object]" === t
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return o;
}
function B(e, t, n) {
  if (null == e) return e;
  var r = [],
    a = 0;
  return (
    I(e, r, "", "", function (e) {
      return t.call(n, e, a++);
    }),
    r
  );
}
function D(e) {
  if (-1 === e._status) {
    var t = e._result;
    (t = t()).then(
      function (t) {
        (0 !== e._status && -1 !== e._status) ||
          ((e._status = 1), (e._result = t));
      },
      function (t) {
        (0 !== e._status && -1 !== e._status) ||
          ((e._status = 2), (e._result = t));
      }
    ),
      -1 === e._status && ((e._status = 0), (e._result = t));
  }
  if (1 === e._status) return e._result.default;
  throw e._result;
}
var F = { current: null },
  R = { transition: null },
  M = {
    ReactCurrentDispatcher: F,
    ReactCurrentBatchConfig: R,
    ReactCurrentOwner: T,
  };
(l.Children = {
  map: B,
  forEach: function (e, t, n) {
    B(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      B(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      B(e, function (e) {
        return e;
      }) || []
    );
  },
  only: function (e) {
    if (!O(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
}),
  (l.Component = S),
  (l.Fragment = c),
  (l.Profiler = f),
  (l.PureComponent = C),
  (l.StrictMode = d),
  (l.Suspense = m),
  (l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = M),
  (l.cloneElement = function (e, t, n) {
    if (null == e)
      throw Error(
        "React.cloneElement(...): The argument must be a React element, but you passed " +
          e +
          "."
      );
    var r = _({}, e.props),
      a = e.key,
      i = e.ref,
      o = e._owner;
    if (null != t) {
      if (
        (void 0 !== t.ref && ((i = t.ref), (o = T.current)),
        void 0 !== t.key && (a = "" + t.key),
        e.type && e.type.defaultProps)
      )
        var l = e.type.defaultProps;
      for (u in t)
        E.call(t, u) &&
          !L.hasOwnProperty(u) &&
          (r[u] = void 0 === t[u] && void 0 !== l ? l[u] : t[u]);
    }
    var u = arguments.length - 2;
    if (1 === u) r.children = n;
    else if (1 < u) {
      l = Array(u);
      for (var c = 0; c < u; c++) l[c] = arguments[c + 2];
      r.children = l;
    }
    return { $$typeof: s, type: e.type, key: a, ref: i, props: r, _owner: o };
  }),
  (l.createContext = function (e) {
    return (
      ((e = {
        $$typeof: p,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null,
      }).Provider = { $$typeof: h, _context: e }),
      (e.Consumer = e)
    );
  }),
  (l.createElement = N),
  (l.createFactory = function (e) {
    var t = N.bind(null, e);
    return (t.type = e), t;
  }),
  (l.createRef = function () {
    return { current: null };
  }),
  (l.forwardRef = function (e) {
    return { $$typeof: g, render: e };
  }),
  (l.isValidElement = O),
  (l.lazy = function (e) {
    return { $$typeof: v, _payload: { _status: -1, _result: e }, _init: D };
  }),
  (l.memo = function (e, t) {
    return { $$typeof: y, type: e, compare: void 0 === t ? null : t };
  }),
  (l.startTransition = function (e) {
    var t = R.transition;
    R.transition = {};
    try {
      e();
    } finally {
      R.transition = t;
    }
  }),
  (l.unstable_act = function () {
    throw Error("act(...) is not supported in production builds of React.");
  }),
  (l.useCallback = function (e, t) {
    return F.current.useCallback(e, t);
  }),
  (l.useContext = function (e) {
    return F.current.useContext(e);
  }),
  (l.useDebugValue = function () {}),
  (l.useDeferredValue = function (e) {
    return F.current.useDeferredValue(e);
  }),
  (l.useEffect = function (e, t) {
    return F.current.useEffect(e, t);
  }),
  (l.useId = function () {
    return F.current.useId();
  }),
  (l.useImperativeHandle = function (e, t, n) {
    return F.current.useImperativeHandle(e, t, n);
  }),
  (l.useInsertionEffect = function (e, t) {
    return F.current.useInsertionEffect(e, t);
  }),
  (l.useLayoutEffect = function (e, t) {
    return F.current.useLayoutEffect(e, t);
  }),
  (l.useMemo = function (e, t) {
    return F.current.useMemo(e, t);
  }),
  (l.useReducer = function (e, t, n) {
    return F.current.useReducer(e, t, n);
  }),
  (l.useRef = function (e) {
    return F.current.useRef(e);
  }),
  (l.useState = function (e) {
    return F.current.useState(e);
  }),
  (l.useSyncExternalStore = function (e, t, n) {
    return F.current.useSyncExternalStore(e, t, n);
  }),
  (l.useTransition = function () {
    return F.current.useTransition();
  }),
  (l.version = "18.2.0"),
  (o.exports = l);
var V = o.exports;
const j = t(V);
var U = V,
  W = Symbol.for("react.element"),
  H = Symbol.for("react.fragment"),
  Q = Object.prototype.hasOwnProperty,
  $ = U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  G = { key: !0, ref: !0, __self: !0, __source: !0 };
function Y(e, t, n) {
  var r,
    a = {},
    i = null,
    o = null;
  for (r in (void 0 !== n && (i = "" + n),
  void 0 !== t.key && (i = "" + t.key),
  void 0 !== t.ref && (o = t.ref),
  t))
    Q.call(t, r) && !G.hasOwnProperty(r) && (a[r] = t[r]);
  if (e && e.defaultProps)
    for (r in (t = e.defaultProps)) void 0 === a[r] && (a[r] = t[r]);
  return { $$typeof: W, type: e, key: i, ref: o, props: a, _owner: $.current };
}
(i.Fragment = H), (i.jsx = Y), (i.jsxs = Y), (a.exports = i);
var K = a.exports,
  X = {},
  J = { exports: {} },
  Z = {},
  ee = { exports: {} },
  te = {};
!(function (e) {
  function t(e, t) {
    var n = e.length;
    e.push(t);
    e: for (; 0 < n; ) {
      var r = (n - 1) >>> 1,
        i = e[r];
      if (!(0 < a(i, t))) break e;
      (e[r] = t), (e[n] = i), (n = r);
    }
  }
  function n(e) {
    return 0 === e.length ? null : e[0];
  }
  function r(e) {
    if (0 === e.length) return null;
    var t = e[0],
      n = e.pop();
    if (n !== t) {
      e[0] = n;
      e: for (var r = 0, i = e.length, o = i >>> 1; r < o; ) {
        var l = 2 * (r + 1) - 1,
          s = e[l],
          u = l + 1,
          c = e[u];
        if (0 > a(s, n))
          u < i && 0 > a(c, s)
            ? ((e[r] = c), (e[u] = n), (r = u))
            : ((e[r] = s), (e[l] = n), (r = l));
        else {
          if (!(u < i && 0 > a(c, n))) break e;
          (e[r] = c), (e[u] = n), (r = u);
        }
      }
    }
    return t;
  }
  function a(e, t) {
    var n = e.sortIndex - t.sortIndex;
    return 0 !== n ? n : e.id - t.id;
  }
  if ("object" == typeof performance && "function" == typeof performance.now) {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var o = Date,
      l = o.now();
    e.unstable_now = function () {
      return o.now() - l;
    };
  }
  var s = [],
    u = [],
    c = 1,
    d = null,
    f = 3,
    h = !1,
    p = !1,
    g = !1,
    m = "function" == typeof setTimeout ? setTimeout : null,
    y = "function" == typeof clearTimeout ? clearTimeout : null,
    v = "undefined" != typeof setImmediate ? setImmediate : null;
  function b(e) {
    for (var a = n(u); null !== a; ) {
      if (null === a.callback) r(u);
      else {
        if (!(a.startTime <= e)) break;
        r(u), (a.sortIndex = a.expirationTime), t(s, a);
      }
      a = n(u);
    }
  }
  function w(e) {
    if (((g = !1), b(e), !p))
      if (null !== n(s)) (p = !0), O(_);
      else {
        var t = n(u);
        null !== t && z(w, t.startTime - e);
      }
  }
  function _(t, a) {
    (p = !1), g && ((g = !1), y(C), (C = -1)), (h = !0);
    var i = f;
    try {
      for (
        b(a), d = n(s);
        null !== d && (!(d.expirationTime > a) || (t && !E()));

      ) {
        var o = d.callback;
        if ("function" == typeof o) {
          (d.callback = null), (f = d.priorityLevel);
          var l = o(d.expirationTime <= a);
          (a = e.unstable_now()),
            "function" == typeof l ? (d.callback = l) : d === n(s) && r(s),
            b(a);
        } else r(s);
        d = n(s);
      }
      if (null !== d) var c = !0;
      else {
        var m = n(u);
        null !== m && z(w, m.startTime - a), (c = !1);
      }
      return c;
    } finally {
      (d = null), (f = i), (h = !1);
    }
  }
  "undefined" != typeof navigator &&
    void 0 !== navigator.scheduling &&
    void 0 !== navigator.scheduling.isInputPending &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  var k,
    S = !1,
    x = null,
    C = -1,
    P = 5,
    q = -1;
  function E() {
    return !(e.unstable_now() - q < P);
  }
  function T() {
    if (null !== x) {
      var t = e.unstable_now();
      q = t;
      var n = !0;
      try {
        n = x(!0, t);
      } finally {
        n ? k() : ((S = !1), (x = null));
      }
    } else S = !1;
  }
  if ("function" == typeof v)
    k = function () {
      v(T);
    };
  else if ("undefined" != typeof MessageChannel) {
    var L = new MessageChannel(),
      N = L.port2;
    (L.port1.onmessage = T),
      (k = function () {
        N.postMessage(null);
      });
  } else
    k = function () {
      m(T, 0);
    };
  function O(e) {
    (x = e), S || ((S = !0), k());
  }
  function z(t, n) {
    C = m(function () {
      t(e.unstable_now());
    }, n);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (e) {
      e.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      p || h || ((p = !0), O(_));
    }),
    (e.unstable_forceFrameRate = function (e) {
      0 > e || 125 < e
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (P = 0 < e ? Math.floor(1e3 / e) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (e) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var t = 3;
          break;
        default:
          t = f;
      }
      var n = f;
      f = t;
      try {
        return e();
      } finally {
        f = n;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (e, t) {
      switch (e) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          e = 3;
      }
      var n = f;
      f = e;
      try {
        return t();
      } finally {
        f = n;
      }
    }),
    (e.unstable_scheduleCallback = function (r, a, i) {
      var o = e.unstable_now();
      switch (
        ((i =
          "object" == typeof i &&
          null !== i &&
          "number" == typeof (i = i.delay) &&
          0 < i
            ? o + i
            : o),
        r)
      ) {
        case 1:
          var l = -1;
          break;
        case 2:
          l = 250;
          break;
        case 5:
          l = 1073741823;
          break;
        case 4:
          l = 1e4;
          break;
        default:
          l = 5e3;
      }
      return (
        (r = {
          id: c++,
          callback: a,
          priorityLevel: r,
          startTime: i,
          expirationTime: (l = i + l),
          sortIndex: -1,
        }),
        i > o
          ? ((r.sortIndex = i),
            t(u, r),
            null === n(s) &&
              r === n(u) &&
              (g ? (y(C), (C = -1)) : (g = !0), z(w, i - o)))
          : ((r.sortIndex = l), t(s, r), p || h || ((p = !0), O(_))),
        r
      );
    }),
    (e.unstable_shouldYield = E),
    (e.unstable_wrapCallback = function (e) {
      var t = f;
      return function () {
        var n = f;
        f = t;
        try {
          return e.apply(this, arguments);
        } finally {
          f = n;
        }
      };
    });
})(te),
  (ee.exports = te);
var ne = ee.exports,
  re = V,
  ae = ne;
function ie(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var oe = new Set(),
  le = {};
function se(e, t) {
  ue(e, t), ue(e + "Capture", t);
}
function ue(e, t) {
  for (le[e] = t, e = 0; e < t.length; e++) oe.add(t[e]);
}
var ce = !(
    "undefined" == typeof window ||
    void 0 === window.document ||
    void 0 === window.document.createElement
  ),
  de = Object.prototype.hasOwnProperty,
  fe =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  he = {},
  pe = {};
function ge(e, t, n, r, a, i, o) {
  (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
    (this.attributeName = r),
    (this.attributeNamespace = a),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = o);
}
var me = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    me[e] = new ge(e, 0, !1, e, null, !1, !1);
  }),
  [
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
  ].forEach(function (e) {
    var t = e[0];
    me[t] = new ge(t, 1, !1, e[1], null, !1, !1);
  }),
  ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
    me[e] = new ge(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }),
  [
    "autoReverse",
    "externalResourcesRequired",
    "focusable",
    "preserveAlpha",
  ].forEach(function (e) {
    me[e] = new ge(e, 2, !1, e, null, !1, !1);
  }),
  "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
    .split(" ")
    .forEach(function (e) {
      me[e] = new ge(e, 3, !1, e.toLowerCase(), null, !1, !1);
    }),
  ["checked", "multiple", "muted", "selected"].forEach(function (e) {
    me[e] = new ge(e, 3, !0, e, null, !1, !1);
  }),
  ["capture", "download"].forEach(function (e) {
    me[e] = new ge(e, 4, !1, e, null, !1, !1);
  }),
  ["cols", "rows", "size", "span"].forEach(function (e) {
    me[e] = new ge(e, 6, !1, e, null, !1, !1);
  }),
  ["rowSpan", "start"].forEach(function (e) {
    me[e] = new ge(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
var ye = /[\-:]([a-z])/g;
function ve(e) {
  return e[1].toUpperCase();
}
function be(e, t, n, r) {
  var a = me.hasOwnProperty(t) ? me[t] : null;
  (null !== a
    ? 0 !== a.type
    : r ||
      !(2 < t.length) ||
      ("o" !== t[0] && "O" !== t[0]) ||
      ("n" !== t[1] && "N" !== t[1])) &&
    ((function (e, t, n, r) {
      if (
        null == t ||
        (function (e, t, n, r) {
          if (null !== n && 0 === n.type) return !1;
          switch (typeof t) {
            case "function":
            case "symbol":
              return !0;
            case "boolean":
              return (
                !r &&
                (null !== n
                  ? !n.acceptsBooleans
                  : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                    "aria-" !== e)
              );
            default:
              return !1;
          }
        })(e, t, n, r)
      )
        return !0;
      if (r) return !1;
      if (null !== n)
        switch (n.type) {
          case 3:
            return !t;
          case 4:
            return !1 === t;
          case 5:
            return isNaN(t);
          case 6:
            return isNaN(t) || 1 > t;
        }
      return !1;
    })(t, n, a, r) && (n = null),
    r || null === a
      ? (function (e) {
          return (
            !!de.call(pe, e) ||
            (!de.call(he, e) &&
              (fe.test(e) ? (pe[e] = !0) : ((he[e] = !0), !1)))
          );
        })(t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : a.mustUseProperty
      ? (e[a.propertyName] = null === n ? 3 !== a.type && "" : n)
      : ((t = a.attributeName),
        (r = a.attributeNamespace),
        null === n
          ? e.removeAttribute(t)
          : ((n = 3 === (a = a.type) || (4 === a && !0 === n) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ye, ve);
    me[t] = new ge(t, 1, !1, e, null, !1, !1);
  }),
  "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(ye, ve);
      me[t] = new ge(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
    }),
  ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
    var t = e.replace(ye, ve);
    me[t] = new ge(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }),
  ["tabIndex", "crossOrigin"].forEach(function (e) {
    me[e] = new ge(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }),
  (me.xlinkHref = new ge(
    "xlinkHref",
    1,
    !1,
    "xlink:href",
    "http://www.w3.org/1999/xlink",
    !0,
    !1
  )),
  ["src", "href", "action", "formAction"].forEach(function (e) {
    me[e] = new ge(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
var we = re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  _e = Symbol.for("react.element"),
  ke = Symbol.for("react.portal"),
  Se = Symbol.for("react.fragment"),
  xe = Symbol.for("react.strict_mode"),
  Ce = Symbol.for("react.profiler"),
  Pe = Symbol.for("react.provider"),
  qe = Symbol.for("react.context"),
  Ee = Symbol.for("react.forward_ref"),
  Te = Symbol.for("react.suspense"),
  Le = Symbol.for("react.suspense_list"),
  Ne = Symbol.for("react.memo"),
  Oe = Symbol.for("react.lazy"),
  ze = Symbol.for("react.offscreen"),
  Ae = Symbol.iterator;
function Ie(e) {
  return null === e || "object" != typeof e
    ? null
    : "function" == typeof (e = (Ae && e[Ae]) || e["@@iterator"])
    ? e
    : null;
}
var Be,
  De = Object.assign;
function Fe(e) {
  if (void 0 === Be)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Be = (t && t[1]) || "";
    }
  return "\n" + Be + e;
}
var Re = !1;
function Me(e, t) {
  if (!e || Re) return "";
  Re = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        "object" == typeof Reflect && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && "string" == typeof u.stack) {
      for (
        var a = u.stack.split("\n"),
          i = r.stack.split("\n"),
          o = a.length - 1,
          l = i.length - 1;
        1 <= o && 0 <= l && a[o] !== i[l];

      )
        l--;
      for (; 1 <= o && 0 <= l; o--, l--)
        if (a[o] !== i[l]) {
          if (1 !== o || 1 !== l)
            do {
              if ((o--, 0 > --l || a[o] !== i[l])) {
                var s = "\n" + a[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            } while (1 <= o && 0 <= l);
          break;
        }
    }
  } finally {
    (Re = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Fe(e) : "";
}
function Ve(e) {
  switch (e.tag) {
    case 5:
      return Fe(e.type);
    case 16:
      return Fe("Lazy");
    case 13:
      return Fe("Suspense");
    case 19:
      return Fe("SuspenseList");
    case 0:
    case 2:
    case 15:
      return Me(e.type, !1);
    case 11:
      return Me(e.type.render, !1);
    case 1:
      return Me(e.type, !0);
    default:
      return "";
  }
}
function je(e) {
  if (null == e) return null;
  if ("function" == typeof e) return e.displayName || e.name || null;
  if ("string" == typeof e) return e;
  switch (e) {
    case Se:
      return "Fragment";
    case ke:
      return "Portal";
    case Ce:
      return "Profiler";
    case xe:
      return "StrictMode";
    case Te:
      return "Suspense";
    case Le:
      return "SuspenseList";
  }
  if ("object" == typeof e)
    switch (e.$$typeof) {
      case qe:
        return (e.displayName || "Context") + ".Consumer";
      case Pe:
        return (e._context.displayName || "Context") + ".Provider";
      case Ee:
        var t = e.render;
        return (
          (e = e.displayName) ||
            (e =
              "" !== (e = t.displayName || t.name || "")
                ? "ForwardRef(" + e + ")"
                : "ForwardRef"),
          e
        );
      case Ne:
        return null !== (t = e.displayName || null) ? t : je(e.type) || "Memo";
      case Oe:
        (t = e._payload), (e = e._init);
        try {
          return je(e(t));
        } catch (n) {}
    }
  return null;
}
function Ue(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = (e = t.render).displayName || e.name || ""),
        t.displayName || ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return je(t);
    case 8:
      return t === xe ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if ("function" == typeof t) return t.displayName || t.name || null;
      if ("string" == typeof t) return t;
  }
  return null;
}
function We(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
    case "object":
      return e;
    default:
      return "";
  }
}
function He(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    "input" === e.toLowerCase() &&
    ("checkbox" === t || "radio" === t)
  );
}
function Qe(e) {
  e._valueTracker ||
    (e._valueTracker = (function (e) {
      var t = He(e) ? "checked" : "value",
        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        r = "" + e[t];
      if (
        !e.hasOwnProperty(t) &&
        void 0 !== n &&
        "function" == typeof n.get &&
        "function" == typeof n.set
      ) {
        var a = n.get,
          i = n.set;
        return (
          Object.defineProperty(e, t, {
            configurable: !0,
            get: function () {
              return a.call(this);
            },
            set: function (e) {
              (r = "" + e), i.call(this, e);
            },
          }),
          Object.defineProperty(e, t, { enumerable: n.enumerable }),
          {
            getValue: function () {
              return r;
            },
            setValue: function (e) {
              r = "" + e;
            },
            stopTracking: function () {
              (e._valueTracker = null), delete e[t];
            },
          }
        );
      }
    })(e));
}
function $e(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = He(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r) !== n && (t.setValue(e), !0)
  );
}
function Ge(e) {
  if (
    void 0 === (e = e || ("undefined" != typeof document ? document : void 0))
  )
    return null;
  try {
    return e.activeElement || e.body;
  } catch (t) {
    return e.body;
  }
}
function Ye(e, t) {
  var n = t.checked;
  return De({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: null != n ? n : e._wrapperState.initialChecked,
  });
}
function Ke(e, t) {
  var n = null == t.defaultValue ? "" : t.defaultValue,
    r = null != t.checked ? t.checked : t.defaultChecked;
  (n = We(null != t.value ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        "checkbox" === t.type || "radio" === t.type
          ? null != t.checked
          : null != t.value,
    });
}
function Xe(e, t) {
  null != (t = t.checked) && be(e, "checked", t, !1);
}
function Je(e, t) {
  Xe(e, t);
  var n = We(t.value),
    r = t.type;
  if (null != n)
    "number" === r
      ? ((0 === n && "" === e.value) || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if ("submit" === r || "reset" === r)
    return void e.removeAttribute("value");
  t.hasOwnProperty("value")
    ? et(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && et(e, t.type, We(t.defaultValue)),
    null == t.checked &&
      null != t.defaultChecked &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Ze(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        ("submit" !== r && "reset" !== r) ||
        (void 0 !== t.value && null !== t.value)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  "" !== (n = e.name) && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    "" !== n && (e.name = n);
}
function et(e, t, n) {
  ("number" === t && Ge(e.ownerDocument) === e) ||
    (null == n
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var tt = Array.isArray;
function nt(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
    for (n = 0; n < e.length; n++)
      (a = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== a && (e[n].selected = a),
        a && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + We(n), t = null, a = 0; a < e.length; a++) {
      if (e[a].value === n)
        return (e[a].selected = !0), void (r && (e[a].defaultSelected = !0));
      null !== t || e[a].disabled || (t = e[a]);
    }
    null !== t && (t.selected = !0);
  }
}
function rt(e, t) {
  if (null != t.dangerouslySetInnerHTML) throw Error(ie(91));
  return De({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function at(e, t) {
  var n = t.value;
  if (null == n) {
    if (((n = t.children), (t = t.defaultValue), null != n)) {
      if (null != t) throw Error(ie(92));
      if (tt(n)) {
        if (1 < n.length) throw Error(ie(93));
        n = n[0];
      }
      t = n;
    }
    null == t && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: We(n) };
}
function it(e, t) {
  var n = We(t.value),
    r = We(t.defaultValue);
  null != n &&
    ((n = "" + n) !== e.value && (e.value = n),
    null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)),
    null != r && (e.defaultValue = "" + r);
}
function ot(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && "" !== t && null !== t && (e.value = t);
}
function lt(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function st(e, t) {
  return null == e || "http://www.w3.org/1999/xhtml" === e
    ? lt(t)
    : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var ut,
  ct,
  dt =
    ((ct = function (e, t) {
      if ("http://www.w3.org/2000/svg" !== e.namespaceURI || "innerHTML" in e)
        e.innerHTML = t;
      else {
        for (
          (ut = ut || document.createElement("div")).innerHTML =
            "<svg>" + t.valueOf().toString() + "</svg>",
            t = ut.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    }),
    "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction
      ? function (e, t, n, r) {
          MSApp.execUnsafeLocalFunction(function () {
            return ct(e, t);
          });
        }
      : ct);
function ft(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && 3 === n.nodeType)
      return void (n.nodeValue = t);
  }
  e.textContent = t;
}
var ht = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  pt = ["Webkit", "ms", "Moz", "O"];
function gt(e, t, n) {
  return null == t || "boolean" == typeof t || "" === t
    ? ""
    : n || "number" != typeof t || 0 === t || (ht.hasOwnProperty(e) && ht[e])
    ? ("" + t).trim()
    : t + "px";
}
function mt(e, t) {
  for (var n in ((e = e.style), t))
    if (t.hasOwnProperty(n)) {
      var r = 0 === n.indexOf("--"),
        a = gt(n, t[n], r);
      "float" === n && (n = "cssFloat"), r ? e.setProperty(n, a) : (e[n] = a);
    }
}
Object.keys(ht).forEach(function (e) {
  pt.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (ht[t] = ht[e]);
  });
});
var yt = De(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function vt(e, t) {
  if (t) {
    if (yt[e] && (null != t.children || null != t.dangerouslySetInnerHTML))
      throw Error(ie(137, e));
    if (null != t.dangerouslySetInnerHTML) {
      if (null != t.children) throw Error(ie(60));
      if (
        "object" != typeof t.dangerouslySetInnerHTML ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(ie(61));
    }
    if (null != t.style && "object" != typeof t.style) throw Error(ie(62));
  }
}
function bt(e, t) {
  if (-1 === e.indexOf("-")) return "string" == typeof t.is;
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var wt = null;
function _t(e) {
  return (
    (e = e.target || e.srcElement || window).correspondingUseElement &&
      (e = e.correspondingUseElement),
    3 === e.nodeType ? e.parentNode : e
  );
}
var kt = null,
  St = null,
  xt = null;
function Ct(e) {
  if ((e = bi(e))) {
    if ("function" != typeof kt) throw Error(ie(280));
    var t = e.stateNode;
    t && ((t = _i(t)), kt(e.stateNode, e.type, t));
  }
}
function Pt(e) {
  St ? (xt ? xt.push(e) : (xt = [e])) : (St = e);
}
function qt() {
  if (St) {
    var e = St,
      t = xt;
    if (((xt = St = null), Ct(e), t)) for (e = 0; e < t.length; e++) Ct(t[e]);
  }
}
function Et(e, t) {
  return e(t);
}
function Tt() {}
var Lt = !1;
function Nt(e, t, n) {
  if (Lt) return e(t, n);
  Lt = !0;
  try {
    return Et(e, t, n);
  } finally {
    (Lt = !1), (null !== St || null !== xt) && (Tt(), qt());
  }
}
function Ot(e, t) {
  var n = e.stateNode;
  if (null === n) return null;
  var r = _i(n);
  if (null === r) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        (r = !(
          "button" === (e = e.type) ||
          "input" === e ||
          "select" === e ||
          "textarea" === e
        )),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && "function" != typeof n) throw Error(ie(231, t, typeof n));
  return n;
}
var zt = !1;
if (ce)
  try {
    var At = {};
    Object.defineProperty(At, "passive", {
      get: function () {
        zt = !0;
      },
    }),
      window.addEventListener("test", At, At),
      window.removeEventListener("test", At, At);
  } catch (ct) {
    zt = !1;
  }
function It(e, t, n, r, a, i, o, l, s) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var Bt = !1,
  Dt = null,
  Ft = !1,
  Rt = null,
  Mt = {
    onError: function (e) {
      (Bt = !0), (Dt = e);
    },
  };
function Vt(e, t, n, r, a, i, o, l, s) {
  (Bt = !1), (Dt = null), It.apply(Mt, arguments);
}
function jt(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do {
      0 != (4098 & (t = e).flags) && (n = t.return), (e = t.return);
    } while (e);
  }
  return 3 === t.tag ? n : null;
}
function Ut(e) {
  if (13 === e.tag) {
    var t = e.memoizedState;
    if (
      (null === t && null !== (e = e.alternate) && (t = e.memoizedState),
      null !== t)
    )
      return t.dehydrated;
  }
  return null;
}
function Wt(e) {
  if (jt(e) !== e) throw Error(ie(188));
}
function Ht(e) {
  return null !==
    (e = (function (e) {
      var t = e.alternate;
      if (!t) {
        if (null === (t = jt(e))) throw Error(ie(188));
        return t !== e ? null : e;
      }
      for (var n = e, r = t; ; ) {
        var a = n.return;
        if (null === a) break;
        var i = a.alternate;
        if (null === i) {
          if (null !== (r = a.return)) {
            n = r;
            continue;
          }
          break;
        }
        if (a.child === i.child) {
          for (i = a.child; i; ) {
            if (i === n) return Wt(a), e;
            if (i === r) return Wt(a), t;
            i = i.sibling;
          }
          throw Error(ie(188));
        }
        if (n.return !== r.return) (n = a), (r = i);
        else {
          for (var o = !1, l = a.child; l; ) {
            if (l === n) {
              (o = !0), (n = a), (r = i);
              break;
            }
            if (l === r) {
              (o = !0), (r = a), (n = i);
              break;
            }
            l = l.sibling;
          }
          if (!o) {
            for (l = i.child; l; ) {
              if (l === n) {
                (o = !0), (n = i), (r = a);
                break;
              }
              if (l === r) {
                (o = !0), (r = i), (n = a);
                break;
              }
              l = l.sibling;
            }
            if (!o) throw Error(ie(189));
          }
        }
        if (n.alternate !== r) throw Error(ie(190));
      }
      if (3 !== n.tag) throw Error(ie(188));
      return n.stateNode.current === n ? e : t;
    })(e))
    ? Qt(e)
    : null;
}
function Qt(e) {
  if (5 === e.tag || 6 === e.tag) return e;
  for (e = e.child; null !== e; ) {
    var t = Qt(e);
    if (null !== t) return t;
    e = e.sibling;
  }
  return null;
}
var $t = ae.unstable_scheduleCallback,
  Gt = ae.unstable_cancelCallback,
  Yt = ae.unstable_shouldYield,
  Kt = ae.unstable_requestPaint,
  Xt = ae.unstable_now,
  Jt = ae.unstable_getCurrentPriorityLevel,
  Zt = ae.unstable_ImmediatePriority,
  en = ae.unstable_UserBlockingPriority,
  tn = ae.unstable_NormalPriority,
  nn = ae.unstable_LowPriority,
  rn = ae.unstable_IdlePriority,
  an = null,
  on = null,
  ln = Math.clz32
    ? Math.clz32
    : function (e) {
        return 0 === (e >>>= 0) ? 32 : (31 - ((sn(e) / un) | 0)) | 0;
      },
  sn = Math.log,
  un = Math.LN2,
  cn = 64,
  dn = 4194304;
function fn(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return 4194240 & e;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return 130023424 & e;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function hn(e, t) {
  var n = e.pendingLanes;
  if (0 === n) return 0;
  var r = 0,
    a = e.suspendedLanes,
    i = e.pingedLanes,
    o = 268435455 & n;
  if (0 !== o) {
    var l = o & ~a;
    0 !== l ? (r = fn(l)) : 0 != (i &= o) && (r = fn(i));
  } else 0 != (o = n & ~a) ? (r = fn(o)) : 0 !== i && (r = fn(i));
  if (0 === r) return 0;
  if (
    0 !== t &&
    t !== r &&
    0 == (t & a) &&
    ((a = r & -r) >= (i = t & -t) || (16 === a && 0 != (4194240 & i)))
  )
    return t;
  if ((0 != (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
    for (e = e.entanglements, t &= r; 0 < t; )
      (a = 1 << (n = 31 - ln(t))), (r |= e[n]), (t &= ~a);
  return r;
}
function pn(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    default:
      return -1;
  }
}
function gn(e) {
  return 0 != (e = -1073741825 & e.pendingLanes)
    ? e
    : 1073741824 & e
    ? 1073741824
    : 0;
}
function mn() {
  var e = cn;
  return 0 == (4194240 & (cn <<= 1)) && (cn = 64), e;
}
function yn(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function vn(e, t, n) {
  (e.pendingLanes |= t),
    536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    ((e = e.eventTimes)[(t = 31 - ln(t))] = n);
}
function bn(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - ln(n),
      a = 1 << r;
    (a & t) | (e[r] & t) && (e[r] |= t), (n &= ~a);
  }
}
var wn = 0;
function _n(e) {
  return 1 < (e &= -e)
    ? 4 < e
      ? 0 != (268435455 & e)
        ? 16
        : 536870912
      : 4
    : 1;
}
var kn,
  Sn,
  xn,
  Cn,
  Pn,
  qn = !1,
  En = [],
  Tn = null,
  Ln = null,
  Nn = null,
  On = new Map(),
  zn = new Map(),
  An = [],
  In =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Bn(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Tn = null;
      break;
    case "dragenter":
    case "dragleave":
      Ln = null;
      break;
    case "mouseover":
    case "mouseout":
      Nn = null;
      break;
    case "pointerover":
    case "pointerout":
      On.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      zn.delete(t.pointerId);
  }
}
function Dn(e, t, n, r, a, i) {
  return null === e || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [a],
      }),
      null !== t && null !== (t = bi(t)) && Sn(t),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      null !== a && -1 === t.indexOf(a) && t.push(a),
      e);
}
function Fn(e) {
  var t = vi(e.target);
  if (null !== t) {
    var n = jt(t);
    if (null !== n)
      if (13 === (t = n.tag)) {
        if (null !== (t = Ut(n)))
          return (
            (e.blockedOn = t),
            void Pn(e.priority, function () {
              xn(n);
            })
          );
      } else if (3 === t && n.stateNode.current.memoizedState.isDehydrated)
        return void (e.blockedOn =
          3 === n.tag ? n.stateNode.containerInfo : null);
  }
  e.blockedOn = null;
}
function Rn(e) {
  if (null !== e.blockedOn) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Kn(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (null !== n) return null !== (t = bi(n)) && Sn(t), (e.blockedOn = n), !1;
    var r = new (n = e.nativeEvent).constructor(n.type, n);
    (wt = r), n.target.dispatchEvent(r), (wt = null), t.shift();
  }
  return !0;
}
function Mn(e, t, n) {
  Rn(e) && n.delete(t);
}
function Vn() {
  (qn = !1),
    null !== Tn && Rn(Tn) && (Tn = null),
    null !== Ln && Rn(Ln) && (Ln = null),
    null !== Nn && Rn(Nn) && (Nn = null),
    On.forEach(Mn),
    zn.forEach(Mn);
}
function jn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    qn ||
      ((qn = !0),
      ae.unstable_scheduleCallback(ae.unstable_NormalPriority, Vn)));
}
function Un(e) {
  function t(t) {
    return jn(t, e);
  }
  if (0 < En.length) {
    jn(En[0], e);
    for (var n = 1; n < En.length; n++) {
      var r = En[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    null !== Tn && jn(Tn, e),
      null !== Ln && jn(Ln, e),
      null !== Nn && jn(Nn, e),
      On.forEach(t),
      zn.forEach(t),
      n = 0;
    n < An.length;
    n++
  )
    (r = An[n]).blockedOn === e && (r.blockedOn = null);
  for (; 0 < An.length && null === (n = An[0]).blockedOn; )
    Fn(n), null === n.blockedOn && An.shift();
}
var Wn = we.ReactCurrentBatchConfig,
  Hn = !0;
function Qn(e, t, n, r) {
  var a = wn,
    i = Wn.transition;
  Wn.transition = null;
  try {
    (wn = 1), Gn(e, t, n, r);
  } finally {
    (wn = a), (Wn.transition = i);
  }
}
function $n(e, t, n, r) {
  var a = wn,
    i = Wn.transition;
  Wn.transition = null;
  try {
    (wn = 4), Gn(e, t, n, r);
  } finally {
    (wn = a), (Wn.transition = i);
  }
}
function Gn(e, t, n, r) {
  if (Hn) {
    var a = Kn(e, t, n, r);
    if (null === a) Wa(e, t, r, Yn, n), Bn(e, r);
    else if (
      (function (e, t, n, r, a) {
        switch (t) {
          case "focusin":
            return (Tn = Dn(Tn, e, t, n, r, a)), !0;
          case "dragenter":
            return (Ln = Dn(Ln, e, t, n, r, a)), !0;
          case "mouseover":
            return (Nn = Dn(Nn, e, t, n, r, a)), !0;
          case "pointerover":
            var i = a.pointerId;
            return On.set(i, Dn(On.get(i) || null, e, t, n, r, a)), !0;
          case "gotpointercapture":
            return (
              (i = a.pointerId),
              zn.set(i, Dn(zn.get(i) || null, e, t, n, r, a)),
              !0
            );
        }
        return !1;
      })(a, e, t, n, r)
    )
      r.stopPropagation();
    else if ((Bn(e, r), 4 & t && -1 < In.indexOf(e))) {
      for (; null !== a; ) {
        var i = bi(a);
        if (
          (null !== i && kn(i),
          null === (i = Kn(e, t, n, r)) && Wa(e, t, r, Yn, n),
          i === a)
        )
          break;
        a = i;
      }
      null !== a && r.stopPropagation();
    } else Wa(e, t, r, null, n);
  }
}
var Yn = null;
function Kn(e, t, n, r) {
  if (((Yn = null), null !== (e = vi((e = _t(r))))))
    if (null === (t = jt(e))) e = null;
    else if (13 === (n = t.tag)) {
      if (null !== (e = Ut(t))) return e;
      e = null;
    } else if (3 === n) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return 3 === t.tag ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Yn = e), null;
}
function Xn(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Jt()) {
        case Zt:
          return 1;
        case en:
          return 4;
        case tn:
        case nn:
          return 16;
        case rn:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Jn = null,
  Zn = null,
  er = null;
function tr() {
  if (er) return er;
  var e,
    t,
    n = Zn,
    r = n.length,
    a = "value" in Jn ? Jn.value : Jn.textContent,
    i = a.length;
  for (e = 0; e < r && n[e] === a[e]; e++);
  var o = r - e;
  for (t = 1; t <= o && n[r - t] === a[i - t]; t++);
  return (er = a.slice(e, 1 < t ? 1 - t : void 0));
}
function nr(e) {
  var t = e.keyCode;
  return (
    "charCode" in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : (e = t),
    10 === e && (e = 13),
    32 <= e || 13 === e ? e : 0
  );
}
function rr() {
  return !0;
}
function ar() {
  return !1;
}
function ir(e) {
  function t(t, n, r, a, i) {
    for (var o in ((this._reactName = t),
    (this._targetInst = r),
    (this.type = n),
    (this.nativeEvent = a),
    (this.target = i),
    (this.currentTarget = null),
    e))
      e.hasOwnProperty(o) && ((t = e[o]), (this[o] = t ? t(a) : a[o]));
    return (
      (this.isDefaultPrevented = (
        null != a.defaultPrevented ? a.defaultPrevented : !1 === a.returnValue
      )
        ? rr
        : ar),
      (this.isPropagationStopped = ar),
      this
    );
  }
  return (
    De(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var e = this.nativeEvent;
        e &&
          (e.preventDefault
            ? e.preventDefault()
            : "unknown" != typeof e.returnValue && (e.returnValue = !1),
          (this.isDefaultPrevented = rr));
      },
      stopPropagation: function () {
        var e = this.nativeEvent;
        e &&
          (e.stopPropagation
            ? e.stopPropagation()
            : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0),
          (this.isPropagationStopped = rr));
      },
      persist: function () {},
      isPersistent: rr,
    }),
    t
  );
}
var or,
  lr,
  sr,
  ur = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  cr = ir(ur),
  dr = De({}, ur, { view: 0, detail: 0 }),
  fr = ir(dr),
  hr = De({}, dr, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Cr,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return void 0 === e.relatedTarget
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== sr &&
            (sr && "mousemove" === e.type
              ? ((or = e.screenX - sr.screenX), (lr = e.screenY - sr.screenY))
              : (lr = or = 0),
            (sr = e)),
          or);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : lr;
    },
  }),
  pr = ir(hr),
  gr = ir(De({}, hr, { dataTransfer: 0 })),
  mr = ir(De({}, dr, { relatedTarget: 0 })),
  yr = ir(De({}, ur, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })),
  vr = De({}, ur, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  br = ir(vr),
  wr = ir(De({}, ur, { data: 0 })),
  _r = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  kr = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  Sr = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function xr(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : !!(e = Sr[e]) && !!t[e];
}
function Cr() {
  return xr;
}
var Pr = De({}, dr, {
    key: function (e) {
      if (e.key) {
        var t = _r[e.key] || e.key;
        if ("Unidentified" !== t) return t;
      }
      return "keypress" === e.type
        ? 13 === (e = nr(e))
          ? "Enter"
          : String.fromCharCode(e)
        : "keydown" === e.type || "keyup" === e.type
        ? kr[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Cr,
    charCode: function (e) {
      return "keypress" === e.type ? nr(e) : 0;
    },
    keyCode: function (e) {
      return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
    },
    which: function (e) {
      return "keypress" === e.type
        ? nr(e)
        : "keydown" === e.type || "keyup" === e.type
        ? e.keyCode
        : 0;
    },
  }),
  qr = ir(Pr),
  Er = ir(
    De({}, hr, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    })
  ),
  Tr = ir(
    De({}, dr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Cr,
    })
  ),
  Lr = ir(De({}, ur, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
  Nr = De({}, hr, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Or = ir(Nr),
  zr = [9, 13, 27, 32],
  Ar = ce && "CompositionEvent" in window,
  Ir = null;
ce && "documentMode" in document && (Ir = document.documentMode);
var Br = ce && "TextEvent" in window && !Ir,
  Dr = ce && (!Ar || (Ir && 8 < Ir && 11 >= Ir)),
  Fr = String.fromCharCode(32),
  Rr = !1;
function Mr(e, t) {
  switch (e) {
    case "keyup":
      return -1 !== zr.indexOf(t.keyCode);
    case "keydown":
      return 229 !== t.keyCode;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Vr(e) {
  return "object" == typeof (e = e.detail) && "data" in e ? e.data : null;
}
var jr = !1,
  Ur = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
function Wr(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return "input" === t ? !!Ur[e.type] : "textarea" === t;
}
function Hr(e, t, n, r) {
  Pt(r),
    0 < (t = Qa(t, "onChange")).length &&
      ((n = new cr("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Qr = null,
  $r = null;
function Gr(e) {
  Fa(e, 0);
}
function Yr(e) {
  if ($e(wi(e))) return e;
}
function Kr(e, t) {
  if ("change" === e) return t;
}
var Xr = !1;
if (ce) {
  var Jr;
  if (ce) {
    var Zr = "oninput" in document;
    if (!Zr) {
      var ea = document.createElement("div");
      ea.setAttribute("oninput", "return;"),
        (Zr = "function" == typeof ea.oninput);
    }
    Jr = Zr;
  } else Jr = !1;
  Xr = Jr && (!document.documentMode || 9 < document.documentMode);
}
function ta() {
  Qr && (Qr.detachEvent("onpropertychange", na), ($r = Qr = null));
}
function na(e) {
  if ("value" === e.propertyName && Yr($r)) {
    var t = [];
    Hr(t, $r, e, _t(e)), Nt(Gr, t);
  }
}
function ra(e, t, n) {
  "focusin" === e
    ? (ta(), ($r = n), (Qr = t).attachEvent("onpropertychange", na))
    : "focusout" === e && ta();
}
function aa(e) {
  if ("selectionchange" === e || "keyup" === e || "keydown" === e)
    return Yr($r);
}
function ia(e, t) {
  if ("click" === e) return Yr(t);
}
function oa(e, t) {
  if ("input" === e || "change" === e) return Yr(t);
}
var la =
  "function" == typeof Object.is
    ? Object.is
    : function (e, t) {
        return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t);
      };
function sa(e, t) {
  if (la(e, t)) return !0;
  if ("object" != typeof e || null === e || "object" != typeof t || null === t)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var a = n[r];
    if (!de.call(t, a) || !la(e[a], t[a])) return !1;
  }
  return !0;
}
function ua(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function ca(e, t) {
  var n,
    r = ua(e);
  for (e = 0; r; ) {
    if (3 === r.nodeType) {
      if (((n = e + r.textContent.length), e <= t && n >= t))
        return { node: r, offset: t - e };
      e = n;
    }
    e: {
      for (; r; ) {
        if (r.nextSibling) {
          r = r.nextSibling;
          break e;
        }
        r = r.parentNode;
      }
      r = void 0;
    }
    r = ua(r);
  }
}
function da(e, t) {
  return (
    !(!e || !t) &&
    (e === t ||
      ((!e || 3 !== e.nodeType) &&
        (t && 3 === t.nodeType
          ? da(e, t.parentNode)
          : "contains" in e
          ? e.contains(t)
          : !!e.compareDocumentPosition &&
            !!(16 & e.compareDocumentPosition(t)))))
  );
}
function fa() {
  for (var e = window, t = Ge(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = "string" == typeof t.contentWindow.location.href;
    } catch (r) {
      n = !1;
    }
    if (!n) break;
    t = Ge((e = t.contentWindow).document);
  }
  return t;
}
function ha(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    (("input" === t &&
      ("text" === e.type ||
        "search" === e.type ||
        "tel" === e.type ||
        "url" === e.type ||
        "password" === e.type)) ||
      "textarea" === t ||
      "true" === e.contentEditable)
  );
}
function pa(e) {
  var t = fa(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    da(n.ownerDocument.documentElement, n)
  ) {
    if (null !== r && ha(n))
      if (
        ((t = r.start),
        void 0 === (e = r.end) && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        (e = ((t = n.ownerDocument || document) && t.defaultView) || window)
          .getSelection
      ) {
        e = e.getSelection();
        var a = n.textContent.length,
          i = Math.min(r.start, a);
        (r = void 0 === r.end ? i : Math.min(r.end, a)),
          !e.extend && i > r && ((a = r), (r = i), (i = a)),
          (a = ca(n, i));
        var o = ca(n, r);
        a &&
          o &&
          (1 !== e.rangeCount ||
            e.anchorNode !== a.node ||
            e.anchorOffset !== a.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()).setStart(a.node, a.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    for (t = [], e = n; (e = e.parentNode); )
      1 === e.nodeType &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for ("function" == typeof n.focus && n.focus(), n = 0; n < t.length; n++)
      ((e = t[n]).element.scrollLeft = e.left), (e.element.scrollTop = e.top);
  }
}
var ga = ce && "documentMode" in document && 11 >= document.documentMode,
  ma = null,
  ya = null,
  va = null,
  ba = !1;
function wa(e, t, n) {
  var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
  ba ||
    null == ma ||
    ma !== Ge(r) ||
    ((r =
      "selectionStart" in (r = ma) && ha(r)
        ? { start: r.selectionStart, end: r.selectionEnd }
        : {
            anchorNode: (r = (
              (r.ownerDocument && r.ownerDocument.defaultView) ||
              window
            ).getSelection()).anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset,
          }),
    (va && sa(va, r)) ||
      ((va = r),
      0 < (r = Qa(ya, "onSelect")).length &&
        ((t = new cr("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = ma))));
}
function _a(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var ka = {
    animationend: _a("Animation", "AnimationEnd"),
    animationiteration: _a("Animation", "AnimationIteration"),
    animationstart: _a("Animation", "AnimationStart"),
    transitionend: _a("Transition", "TransitionEnd"),
  },
  Sa = {},
  xa = {};
function Ca(e) {
  if (Sa[e]) return Sa[e];
  if (!ka[e]) return e;
  var t,
    n = ka[e];
  for (t in n) if (n.hasOwnProperty(t) && t in xa) return (Sa[e] = n[t]);
  return e;
}
ce &&
  ((xa = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete ka.animationend.animation,
    delete ka.animationiteration.animation,
    delete ka.animationstart.animation),
  "TransitionEvent" in window || delete ka.transitionend.transition);
var Pa = Ca("animationend"),
  qa = Ca("animationiteration"),
  Ea = Ca("animationstart"),
  Ta = Ca("transitionend"),
  La = new Map(),
  Na =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Oa(e, t) {
  La.set(e, t), se(t, [e]);
}
for (var za = 0; za < Na.length; za++) {
  var Aa = Na[za];
  Oa(Aa.toLowerCase(), "on" + (Aa[0].toUpperCase() + Aa.slice(1)));
}
Oa(Pa, "onAnimationEnd"),
  Oa(qa, "onAnimationIteration"),
  Oa(Ea, "onAnimationStart"),
  Oa("dblclick", "onDoubleClick"),
  Oa("focusin", "onFocus"),
  Oa("focusout", "onBlur"),
  Oa(Ta, "onTransitionEnd"),
  ue("onMouseEnter", ["mouseout", "mouseover"]),
  ue("onMouseLeave", ["mouseout", "mouseover"]),
  ue("onPointerEnter", ["pointerout", "pointerover"]),
  ue("onPointerLeave", ["pointerout", "pointerover"]),
  se(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(
      " "
    )
  ),
  se(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ),
  se("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
  se(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ),
  se(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ),
  se(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
var Ia =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Ba = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ia));
function Da(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n),
    (function (e, t, n, r, a, i, o, l, s) {
      if ((Vt.apply(this, arguments), Bt)) {
        if (!Bt) throw Error(ie(198));
        var u = Dt;
        (Bt = !1), (Dt = null), Ft || ((Ft = !0), (Rt = u));
      }
    })(r, t, void 0, e),
    (e.currentTarget = null);
}
function Fa(e, t) {
  t = 0 != (4 & t);
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      a = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var l = r[o],
            s = l.instance,
            u = l.currentTarget;
          if (((l = l.listener), s !== i && a.isPropagationStopped())) break e;
          Da(a, l, u), (i = s);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((s = (l = r[o]).instance),
            (u = l.currentTarget),
            (l = l.listener),
            s !== i && a.isPropagationStopped())
          )
            break e;
          Da(a, l, u), (i = s);
        }
    }
  }
  if (Ft) throw ((e = Rt), (Ft = !1), (Rt = null), e);
}
function Ra(e, t) {
  var n = t[gi];
  void 0 === n && (n = t[gi] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Ua(t, e, 2, !1), n.add(r));
}
function Ma(e, t, n) {
  var r = 0;
  t && (r |= 4), Ua(n, e, r, t);
}
var Va = "_reactListening" + Math.random().toString(36).slice(2);
function ja(e) {
  if (!e[Va]) {
    (e[Va] = !0),
      oe.forEach(function (t) {
        "selectionchange" !== t && (Ba.has(t) || Ma(t, !1, e), Ma(t, !0, e));
      });
    var t = 9 === e.nodeType ? e : e.ownerDocument;
    null === t || t[Va] || ((t[Va] = !0), Ma("selectionchange", !1, t));
  }
}
function Ua(e, t, n, r) {
  switch (Xn(t)) {
    case 1:
      var a = Qn;
      break;
    case 4:
      a = $n;
      break;
    default:
      a = Gn;
  }
  (n = a.bind(null, t, n, e)),
    (a = void 0),
    !zt ||
      ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
      (a = !0),
    r
      ? void 0 !== a
        ? e.addEventListener(t, n, { capture: !0, passive: a })
        : e.addEventListener(t, n, !0)
      : void 0 !== a
      ? e.addEventListener(t, n, { passive: a })
      : e.addEventListener(t, n, !1);
}
function Wa(e, t, n, r, a) {
  var i = r;
  if (0 == (1 & t) && 0 == (2 & t) && null !== r)
    e: for (;;) {
      if (null === r) return;
      var o = r.tag;
      if (3 === o || 4 === o) {
        var l = r.stateNode.containerInfo;
        if (l === a || (8 === l.nodeType && l.parentNode === a)) break;
        if (4 === o)
          for (o = r.return; null !== o; ) {
            var s = o.tag;
            if (
              (3 === s || 4 === s) &&
              ((s = o.stateNode.containerInfo) === a ||
                (8 === s.nodeType && s.parentNode === a))
            )
              return;
            o = o.return;
          }
        for (; null !== l; ) {
          if (null === (o = vi(l))) return;
          if (5 === (s = o.tag) || 6 === s) {
            r = i = o;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  Nt(function () {
    var r = i,
      a = _t(n),
      o = [];
    e: {
      var l = La.get(e);
      if (void 0 !== l) {
        var s = cr,
          u = e;
        switch (e) {
          case "keypress":
            if (0 === nr(n)) break e;
          case "keydown":
          case "keyup":
            s = qr;
            break;
          case "focusin":
            (u = "focus"), (s = mr);
            break;
          case "focusout":
            (u = "blur"), (s = mr);
            break;
          case "beforeblur":
          case "afterblur":
            s = mr;
            break;
          case "click":
            if (2 === n.button) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            s = pr;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            s = gr;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            s = Tr;
            break;
          case Pa:
          case qa:
          case Ea:
            s = yr;
            break;
          case Ta:
            s = Lr;
            break;
          case "scroll":
            s = fr;
            break;
          case "wheel":
            s = Or;
            break;
          case "copy":
          case "cut":
          case "paste":
            s = br;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            s = Er;
        }
        var c = 0 != (4 & t),
          d = !c && "scroll" === e,
          f = c ? (null !== l ? l + "Capture" : null) : l;
        c = [];
        for (var h, p = r; null !== p; ) {
          var g = (h = p).stateNode;
          if (
            (5 === h.tag &&
              null !== g &&
              ((h = g),
              null !== f && null != (g = Ot(p, f)) && c.push(Ha(p, g, h))),
            d)
          )
            break;
          p = p.return;
        }
        0 < c.length &&
          ((l = new s(l, u, null, n, a)), o.push({ event: l, listeners: c }));
      }
    }
    if (0 == (7 & t)) {
      if (
        ((s = "mouseout" === e || "pointerout" === e),
        (!(l = "mouseover" === e || "pointerover" === e) ||
          n === wt ||
          !(u = n.relatedTarget || n.fromElement) ||
          (!vi(u) && !u[pi])) &&
          (s || l) &&
          ((l =
            a.window === a
              ? a
              : (l = a.ownerDocument)
              ? l.defaultView || l.parentWindow
              : window),
          s
            ? ((s = r),
              null !==
                (u = (u = n.relatedTarget || n.toElement) ? vi(u) : null) &&
                (u !== (d = jt(u)) || (5 !== u.tag && 6 !== u.tag)) &&
                (u = null))
            : ((s = null), (u = r)),
          s !== u))
      ) {
        if (
          ((c = pr),
          (g = "onMouseLeave"),
          (f = "onMouseEnter"),
          (p = "mouse"),
          ("pointerout" !== e && "pointerover" !== e) ||
            ((c = Er),
            (g = "onPointerLeave"),
            (f = "onPointerEnter"),
            (p = "pointer")),
          (d = null == s ? l : wi(s)),
          (h = null == u ? l : wi(u)),
          ((l = new c(g, p + "leave", s, n, a)).target = d),
          (l.relatedTarget = h),
          (g = null),
          vi(a) === r &&
            (((c = new c(f, p + "enter", u, n, a)).target = h),
            (c.relatedTarget = d),
            (g = c)),
          (d = g),
          s && u)
        )
          e: {
            for (f = u, p = 0, h = c = s; h; h = $a(h)) p++;
            for (h = 0, g = f; g; g = $a(g)) h++;
            for (; 0 < p - h; ) (c = $a(c)), p--;
            for (; 0 < h - p; ) (f = $a(f)), h--;
            for (; p--; ) {
              if (c === f || (null !== f && c === f.alternate)) break e;
              (c = $a(c)), (f = $a(f));
            }
            c = null;
          }
        else c = null;
        null !== s && Ga(o, l, s, c, !1),
          null !== u && null !== d && Ga(o, d, u, c, !0);
      }
      if (
        "select" ===
          (s = (l = r ? wi(r) : window).nodeName && l.nodeName.toLowerCase()) ||
        ("input" === s && "file" === l.type)
      )
        var m = Kr;
      else if (Wr(l))
        if (Xr) m = oa;
        else {
          m = aa;
          var y = ra;
        }
      else
        (s = l.nodeName) &&
          "input" === s.toLowerCase() &&
          ("checkbox" === l.type || "radio" === l.type) &&
          (m = ia);
      switch (
        (m && (m = m(e, r))
          ? Hr(o, m, n, a)
          : (y && y(e, l, r),
            "focusout" === e &&
              (y = l._wrapperState) &&
              y.controlled &&
              "number" === l.type &&
              et(l, "number", l.value)),
        (y = r ? wi(r) : window),
        e)
      ) {
        case "focusin":
          (Wr(y) || "true" === y.contentEditable) &&
            ((ma = y), (ya = r), (va = null));
          break;
        case "focusout":
          va = ya = ma = null;
          break;
        case "mousedown":
          ba = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (ba = !1), wa(o, n, a);
          break;
        case "selectionchange":
          if (ga) break;
        case "keydown":
        case "keyup":
          wa(o, n, a);
      }
      var v;
      if (Ar)
        e: {
          switch (e) {
            case "compositionstart":
              var b = "onCompositionStart";
              break e;
            case "compositionend":
              b = "onCompositionEnd";
              break e;
            case "compositionupdate":
              b = "onCompositionUpdate";
              break e;
          }
          b = void 0;
        }
      else
        jr
          ? Mr(e, n) && (b = "onCompositionEnd")
          : "keydown" === e && 229 === n.keyCode && (b = "onCompositionStart");
      b &&
        (Dr &&
          "ko" !== n.locale &&
          (jr || "onCompositionStart" !== b
            ? "onCompositionEnd" === b && jr && (v = tr())
            : ((Zn = "value" in (Jn = a) ? Jn.value : Jn.textContent),
              (jr = !0))),
        0 < (y = Qa(r, b)).length &&
          ((b = new wr(b, e, null, n, a)),
          o.push({ event: b, listeners: y }),
          (v || null !== (v = Vr(n))) && (b.data = v))),
        (v = Br
          ? (function (e, t) {
              switch (e) {
                case "compositionend":
                  return Vr(t);
                case "keypress":
                  return 32 !== t.which ? null : ((Rr = !0), Fr);
                case "textInput":
                  return (e = t.data) === Fr && Rr ? null : e;
                default:
                  return null;
              }
            })(e, n)
          : (function (e, t) {
              if (jr)
                return "compositionend" === e || (!Ar && Mr(e, t))
                  ? ((e = tr()), (er = Zn = Jn = null), (jr = !1), e)
                  : null;
              switch (e) {
                case "paste":
                default:
                  return null;
                case "keypress":
                  if (
                    !(t.ctrlKey || t.altKey || t.metaKey) ||
                    (t.ctrlKey && t.altKey)
                  ) {
                    if (t.char && 1 < t.char.length) return t.char;
                    if (t.which) return String.fromCharCode(t.which);
                  }
                  return null;
                case "compositionend":
                  return Dr && "ko" !== t.locale ? null : t.data;
              }
            })(e, n)) &&
          0 < (r = Qa(r, "onBeforeInput")).length &&
          ((a = new wr("onBeforeInput", "beforeinput", null, n, a)),
          o.push({ event: a, listeners: r }),
          (a.data = v));
    }
    Fa(o, t);
  });
}
function Ha(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Qa(e, t) {
  for (var n = t + "Capture", r = []; null !== e; ) {
    var a = e,
      i = a.stateNode;
    5 === a.tag &&
      null !== i &&
      ((a = i),
      null != (i = Ot(e, n)) && r.unshift(Ha(e, i, a)),
      null != (i = Ot(e, t)) && r.push(Ha(e, i, a))),
      (e = e.return);
  }
  return r;
}
function $a(e) {
  if (null === e) return null;
  do {
    e = e.return;
  } while (e && 5 !== e.tag);
  return e || null;
}
function Ga(e, t, n, r, a) {
  for (var i = t._reactName, o = []; null !== n && n !== r; ) {
    var l = n,
      s = l.alternate,
      u = l.stateNode;
    if (null !== s && s === r) break;
    5 === l.tag &&
      null !== u &&
      ((l = u),
      a
        ? null != (s = Ot(n, i)) && o.unshift(Ha(n, s, l))
        : a || (null != (s = Ot(n, i)) && o.push(Ha(n, s, l)))),
      (n = n.return);
  }
  0 !== o.length && e.push({ event: t, listeners: o });
}
var Ya = /\r\n?/g,
  Ka = /\u0000|\uFFFD/g;
function Xa(e) {
  return ("string" == typeof e ? e : "" + e).replace(Ya, "\n").replace(Ka, "");
}
function Ja(e, t, n) {
  if (((t = Xa(t)), Xa(e) !== t && n)) throw Error(ie(425));
}
function Za() {}
var ei = null,
  ti = null;
function ni(e, t) {
  return (
    "textarea" === e ||
    "noscript" === e ||
    "string" == typeof t.children ||
    "number" == typeof t.children ||
    ("object" == typeof t.dangerouslySetInnerHTML &&
      null !== t.dangerouslySetInnerHTML &&
      null != t.dangerouslySetInnerHTML.__html)
  );
}
var ri = "function" == typeof setTimeout ? setTimeout : void 0,
  ai = "function" == typeof clearTimeout ? clearTimeout : void 0,
  ii = "function" == typeof Promise ? Promise : void 0,
  oi =
    "function" == typeof queueMicrotask
      ? queueMicrotask
      : void 0 !== ii
      ? function (e) {
          return ii.resolve(null).then(e).catch(li);
        }
      : ri;
function li(e) {
  setTimeout(function () {
    throw e;
  });
}
function si(e, t) {
  var n = t,
    r = 0;
  do {
    var a = n.nextSibling;
    if ((e.removeChild(n), a && 8 === a.nodeType))
      if ("/$" === (n = a.data)) {
        if (0 === r) return e.removeChild(a), void Un(t);
        r--;
      } else ("$" !== n && "$?" !== n && "$!" !== n) || r++;
    n = a;
  } while (n);
  Un(t);
}
function ui(e) {
  for (; null != e; e = e.nextSibling) {
    var t = e.nodeType;
    if (1 === t || 3 === t) break;
    if (8 === t) {
      if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
      if ("/$" === t) return null;
    }
  }
  return e;
}
function ci(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (8 === e.nodeType) {
      var n = e.data;
      if ("$" === n || "$!" === n || "$?" === n) {
        if (0 === t) return e;
        t--;
      } else "/$" === n && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var di = Math.random().toString(36).slice(2),
  fi = "__reactFiber$" + di,
  hi = "__reactProps$" + di,
  pi = "__reactContainer$" + di,
  gi = "__reactEvents$" + di,
  mi = "__reactListeners$" + di,
  yi = "__reactHandles$" + di;
function vi(e) {
  var t = e[fi];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[pi] || n[fi])) {
      if (
        ((n = t.alternate),
        null !== t.child || (null !== n && null !== n.child))
      )
        for (e = ci(e); null !== e; ) {
          if ((n = e[fi])) return n;
          e = ci(e);
        }
      return t;
    }
    n = (e = n).parentNode;
  }
  return null;
}
function bi(e) {
  return !(e = e[fi] || e[pi]) ||
    (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
    ? null
    : e;
}
function wi(e) {
  if (5 === e.tag || 6 === e.tag) return e.stateNode;
  throw Error(ie(33));
}
function _i(e) {
  return e[hi] || null;
}
var ki = [],
  Si = -1;
function xi(e) {
  return { current: e };
}
function Ci(e) {
  0 > Si || ((e.current = ki[Si]), (ki[Si] = null), Si--);
}
function Pi(e, t) {
  Si++, (ki[Si] = e.current), (e.current = t);
}
var qi = {},
  Ei = xi(qi),
  Ti = xi(!1),
  Li = qi;
function Ni(e, t) {
  var n = e.type.contextTypes;
  if (!n) return qi;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var a,
    i = {};
  for (a in n) i[a] = t[a];
  return (
    r &&
      (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function Oi(e) {
  return null != e.childContextTypes;
}
function zi() {
  Ci(Ti), Ci(Ei);
}
function Ai(e, t, n) {
  if (Ei.current !== qi) throw Error(ie(168));
  Pi(Ei, t), Pi(Ti, n);
}
function Ii(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), "function" != typeof r.getChildContext))
    return n;
  for (var a in (r = r.getChildContext()))
    if (!(a in t)) throw Error(ie(108, Ue(e) || "Unknown", a));
  return De({}, n, r);
}
function Bi(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || qi),
    (Li = Ei.current),
    Pi(Ei, e),
    Pi(Ti, Ti.current),
    !0
  );
}
function Di(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(ie(169));
  n
    ? ((e = Ii(e, t, Li)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      Ci(Ti),
      Ci(Ei),
      Pi(Ei, e))
    : Ci(Ti),
    Pi(Ti, n);
}
var Fi = null,
  Ri = !1,
  Mi = !1;
function Vi(e) {
  null === Fi ? (Fi = [e]) : Fi.push(e);
}
function ji() {
  if (!Mi && null !== Fi) {
    Mi = !0;
    var e = 0,
      t = wn;
    try {
      var n = Fi;
      for (wn = 1; e < n.length; e++) {
        var r = n[e];
        do {
          r = r(!0);
        } while (null !== r);
      }
      (Fi = null), (Ri = !1);
    } catch (a) {
      throw (null !== Fi && (Fi = Fi.slice(e + 1)), $t(Zt, ji), a);
    } finally {
      (wn = t), (Mi = !1);
    }
  }
  return null;
}
var Ui = [],
  Wi = 0,
  Hi = null,
  Qi = 0,
  $i = [],
  Gi = 0,
  Yi = null,
  Ki = 1,
  Xi = "";
function Ji(e, t) {
  (Ui[Wi++] = Qi), (Ui[Wi++] = Hi), (Hi = e), (Qi = t);
}
function Zi(e, t, n) {
  ($i[Gi++] = Ki), ($i[Gi++] = Xi), ($i[Gi++] = Yi), (Yi = e);
  var r = Ki;
  e = Xi;
  var a = 32 - ln(r) - 1;
  (r &= ~(1 << a)), (n += 1);
  var i = 32 - ln(t) + a;
  if (30 < i) {
    var o = a - (a % 5);
    (i = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (a -= o),
      (Ki = (1 << (32 - ln(t) + a)) | (n << a) | r),
      (Xi = i + e);
  } else (Ki = (1 << i) | (n << a) | r), (Xi = e);
}
function eo(e) {
  null !== e.return && (Ji(e, 1), Zi(e, 1, 0));
}
function to(e) {
  for (; e === Hi; )
    (Hi = Ui[--Wi]), (Ui[Wi] = null), (Qi = Ui[--Wi]), (Ui[Wi] = null);
  for (; e === Yi; )
    (Yi = $i[--Gi]),
      ($i[Gi] = null),
      (Xi = $i[--Gi]),
      ($i[Gi] = null),
      (Ki = $i[--Gi]),
      ($i[Gi] = null);
}
var no = null,
  ro = null,
  ao = !1,
  io = null;
function oo(e, t) {
  var n = Oc(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    null === (t = e.deletions)
      ? ((e.deletions = [n]), (e.flags |= 16))
      : t.push(n);
}
function lo(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        null !==
          (t =
            1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t) && ((e.stateNode = t), (no = e), (ro = ui(t.firstChild)), !0)
      );
    case 6:
      return (
        null !== (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
        ((e.stateNode = t), (no = e), (ro = null), !0)
      );
    case 13:
      return (
        null !== (t = 8 !== t.nodeType ? null : t) &&
        ((n = null !== Yi ? { id: Ki, overflow: Xi } : null),
        (e.memoizedState = {
          dehydrated: t,
          treeContext: n,
          retryLane: 1073741824,
        }),
        ((n = Oc(18, null, null, 0)).stateNode = t),
        (n.return = e),
        (e.child = n),
        (no = e),
        (ro = null),
        !0)
      );
    default:
      return !1;
  }
}
function so(e) {
  return 0 != (1 & e.mode) && 0 == (128 & e.flags);
}
function uo(e) {
  if (ao) {
    var t = ro;
    if (t) {
      var n = t;
      if (!lo(e, t)) {
        if (so(e)) throw Error(ie(418));
        t = ui(n.nextSibling);
        var r = no;
        t && lo(e, t)
          ? oo(r, n)
          : ((e.flags = (-4097 & e.flags) | 2), (ao = !1), (no = e));
      }
    } else {
      if (so(e)) throw Error(ie(418));
      (e.flags = (-4097 & e.flags) | 2), (ao = !1), (no = e);
    }
  }
}
function co(e) {
  for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag; )
    e = e.return;
  no = e;
}
function fo(e) {
  if (e !== no) return !1;
  if (!ao) return co(e), (ao = !0), !1;
  var t;
  if (
    ((t = 3 !== e.tag) &&
      !(t = 5 !== e.tag) &&
      (t =
        "head" !== (t = e.type) &&
        "body" !== t &&
        !ni(e.type, e.memoizedProps)),
    t && (t = ro))
  ) {
    if (so(e)) throw (ho(), Error(ie(418)));
    for (; t; ) oo(e, t), (t = ui(t.nextSibling));
  }
  if ((co(e), 13 === e.tag)) {
    if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
      throw Error(ie(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (8 === e.nodeType) {
          var n = e.data;
          if ("/$" === n) {
            if (0 === t) {
              ro = ui(e.nextSibling);
              break e;
            }
            t--;
          } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
        }
        e = e.nextSibling;
      }
      ro = null;
    }
  } else ro = no ? ui(e.stateNode.nextSibling) : null;
  return !0;
}
function ho() {
  for (var e = ro; e; ) e = ui(e.nextSibling);
}
function po() {
  (ro = no = null), (ao = !1);
}
function go(e) {
  null === io ? (io = [e]) : io.push(e);
}
var mo = we.ReactCurrentBatchConfig;
function yo(e, t) {
  if (e && e.defaultProps) {
    for (var n in ((t = De({}, t)), (e = e.defaultProps)))
      void 0 === t[n] && (t[n] = e[n]);
    return t;
  }
  return t;
}
var vo = xi(null),
  bo = null,
  wo = null,
  _o = null;
function ko() {
  _o = wo = bo = null;
}
function So(e) {
  var t = vo.current;
  Ci(vo), (e._currentValue = t);
}
function xo(e, t, n) {
  for (; null !== e; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
        : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Co(e, t) {
  (bo = e),
    (_o = wo = null),
    null !== (e = e.dependencies) &&
      null !== e.firstContext &&
      (0 != (e.lanes & t) && (ws = !0), (e.firstContext = null));
}
function Po(e) {
  var t = e._currentValue;
  if (_o !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), null === wo)) {
      if (null === bo) throw Error(ie(308));
      (wo = e), (bo.dependencies = { lanes: 0, firstContext: e });
    } else wo = wo.next = e;
  return t;
}
var qo = null;
function Eo(e) {
  null === qo ? (qo = [e]) : qo.push(e);
}
function To(e, t, n, r) {
  var a = t.interleaved;
  return (
    null === a ? ((n.next = n), Eo(t)) : ((n.next = a.next), (a.next = n)),
    (t.interleaved = n),
    Lo(e, r)
  );
}
function Lo(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
    (e.childLanes |= t),
      null !== (n = e.alternate) && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return 3 === n.tag ? n.stateNode : null;
}
var No = !1;
function Oo(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function zo(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Ao(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Io(e, t, n) {
  var r = e.updateQueue;
  if (null === r) return null;
  if (((r = r.shared), 0 != (2 & Tu))) {
    var a = r.pending;
    return (
      null === a ? (t.next = t) : ((t.next = a.next), (a.next = t)),
      (r.pending = t),
      Lo(e, n)
    );
  }
  return (
    null === (a = r.interleaved)
      ? ((t.next = t), Eo(r))
      : ((t.next = a.next), (a.next = t)),
    (r.interleaved = t),
    Lo(e, n)
  );
}
function Bo(e, t, n) {
  if (null !== (t = t.updateQueue) && ((t = t.shared), 0 != (4194240 & n))) {
    var r = t.lanes;
    (n |= r &= e.pendingLanes), (t.lanes = n), bn(e, n);
  }
}
function Do(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (null !== r && n === (r = r.updateQueue)) {
    var a = null,
      i = null;
    if (null !== (n = n.firstBaseUpdate)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        null === i ? (a = i = o) : (i = i.next = o), (n = n.next);
      } while (null !== n);
      null === i ? (a = i = t) : (i = i.next = t);
    } else a = i = t;
    return (
      (n = {
        baseState: r.baseState,
        firstBaseUpdate: a,
        lastBaseUpdate: i,
        shared: r.shared,
        effects: r.effects,
      }),
      void (e.updateQueue = n)
    );
  }
  null === (e = n.lastBaseUpdate) ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Fo(e, t, n, r) {
  var a = e.updateQueue;
  No = !1;
  var i = a.firstBaseUpdate,
    o = a.lastBaseUpdate,
    l = a.shared.pending;
  if (null !== l) {
    a.shared.pending = null;
    var s = l,
      u = s.next;
    (s.next = null), null === o ? (i = u) : (o.next = u), (o = s);
    var c = e.alternate;
    null !== c &&
      (l = (c = c.updateQueue).lastBaseUpdate) !== o &&
      (null === l ? (c.firstBaseUpdate = u) : (l.next = u),
      (c.lastBaseUpdate = s));
  }
  if (null !== i) {
    var d = a.baseState;
    for (o = 0, c = u = s = null, l = i; ; ) {
      var f = l.lane,
        h = l.eventTime;
      if ((r & f) === f) {
        null !== c &&
          (c = c.next =
            {
              eventTime: h,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var p = e,
            g = l;
          switch (((f = t), (h = n), g.tag)) {
            case 1:
              if ("function" == typeof (p = g.payload)) {
                d = p.call(h, d, f);
                break e;
              }
              d = p;
              break e;
            case 3:
              p.flags = (-65537 & p.flags) | 128;
            case 0:
              if (
                null ==
                (f = "function" == typeof (p = g.payload) ? p.call(h, d, f) : p)
              )
                break e;
              d = De({}, d, f);
              break e;
            case 2:
              No = !0;
          }
        }
        null !== l.callback &&
          0 !== l.lane &&
          ((e.flags |= 64),
          null === (f = a.effects) ? (a.effects = [l]) : f.push(l));
      } else
        (h = {
          eventTime: h,
          lane: f,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          null === c ? ((u = c = h), (s = d)) : (c = c.next = h),
          (o |= f);
      if (null === (l = l.next)) {
        if (null === (l = a.shared.pending)) break;
        (l = (f = l).next),
          (f.next = null),
          (a.lastBaseUpdate = f),
          (a.shared.pending = null);
      }
    }
    if (
      (null === c && (s = d),
      (a.baseState = s),
      (a.firstBaseUpdate = u),
      (a.lastBaseUpdate = c),
      null !== (t = a.shared.interleaved))
    ) {
      a = t;
      do {
        (o |= a.lane), (a = a.next);
      } while (a !== t);
    } else null === i && (a.shared.lanes = 0);
    (Du |= o), (e.lanes = o), (e.memoizedState = d);
  }
}
function Ro(e, t, n) {
  if (((e = t.effects), (t.effects = null), null !== e))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        a = r.callback;
      if (null !== a) {
        if (((r.callback = null), (r = n), "function" != typeof a))
          throw Error(ie(191, a));
        a.call(r);
      }
    }
}
var Mo = new re.Component().refs;
function Vo(e, t, n, r) {
  (n = null == (n = n(r, (t = e.memoizedState))) ? t : De({}, t, n)),
    (e.memoizedState = n),
    0 === e.lanes && (e.updateQueue.baseState = n);
}
var jo = {
  isMounted: function (e) {
    return !!(e = e._reactInternals) && jt(e) === e;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = tc(),
      a = nc(e),
      i = Ao(r, a);
    (i.payload = t),
      null != n && (i.callback = n),
      null !== (t = Io(e, i, a)) && (rc(t, e, a, r), Bo(t, e, a));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = tc(),
      a = nc(e),
      i = Ao(r, a);
    (i.tag = 1),
      (i.payload = t),
      null != n && (i.callback = n),
      null !== (t = Io(e, i, a)) && (rc(t, e, a, r), Bo(t, e, a));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = tc(),
      r = nc(e),
      a = Ao(n, r);
    (a.tag = 2),
      null != t && (a.callback = t),
      null !== (t = Io(e, a, r)) && (rc(t, e, r, n), Bo(t, e, r));
  },
};
function Uo(e, t, n, r, a, i, o) {
  return "function" == typeof (e = e.stateNode).shouldComponentUpdate
    ? e.shouldComponentUpdate(r, i, o)
    : !(
        t.prototype &&
        t.prototype.isPureReactComponent &&
        sa(n, r) &&
        sa(a, i)
      );
}
function Wo(e, t, n) {
  var r = !1,
    a = qi,
    i = t.contextType;
  return (
    "object" == typeof i && null !== i
      ? (i = Po(i))
      : ((a = Oi(t) ? Li : Ei.current),
        (i = (r = null != (r = t.contextTypes)) ? Ni(e, a) : qi)),
    (t = new t(n, i)),
    (e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null),
    (t.updater = jo),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = a),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function Ho(e, t, n, r) {
  (e = t.state),
    "function" == typeof t.componentWillReceiveProps &&
      t.componentWillReceiveProps(n, r),
    "function" == typeof t.UNSAFE_componentWillReceiveProps &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && jo.enqueueReplaceState(t, t.state, null);
}
function Qo(e, t, n, r) {
  var a = e.stateNode;
  (a.props = n), (a.state = e.memoizedState), (a.refs = Mo), Oo(e);
  var i = t.contextType;
  "object" == typeof i && null !== i
    ? (a.context = Po(i))
    : ((i = Oi(t) ? Li : Ei.current), (a.context = Ni(e, i))),
    (a.state = e.memoizedState),
    "function" == typeof (i = t.getDerivedStateFromProps) &&
      (Vo(e, t, i, n), (a.state = e.memoizedState)),
    "function" == typeof t.getDerivedStateFromProps ||
      "function" == typeof a.getSnapshotBeforeUpdate ||
      ("function" != typeof a.UNSAFE_componentWillMount &&
        "function" != typeof a.componentWillMount) ||
      ((t = a.state),
      "function" == typeof a.componentWillMount && a.componentWillMount(),
      "function" == typeof a.UNSAFE_componentWillMount &&
        a.UNSAFE_componentWillMount(),
      t !== a.state && jo.enqueueReplaceState(a, a.state, null),
      Fo(e, n, a, r),
      (a.state = e.memoizedState)),
    "function" == typeof a.componentDidMount && (e.flags |= 4194308);
}
function $o(e, t, n) {
  if (null !== (e = n.ref) && "function" != typeof e && "object" != typeof e) {
    if (n._owner) {
      if ((n = n._owner)) {
        if (1 !== n.tag) throw Error(ie(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(ie(147, e));
      var a = r,
        i = "" + e;
      return null !== t &&
        null !== t.ref &&
        "function" == typeof t.ref &&
        t.ref._stringRef === i
        ? t.ref
        : (((t = function (e) {
            var t = a.refs;
            t === Mo && (t = a.refs = {}),
              null === e ? delete t[i] : (t[i] = e);
          })._stringRef = i),
          t);
    }
    if ("string" != typeof e) throw Error(ie(284));
    if (!n._owner) throw Error(ie(290, e));
  }
  return e;
}
function Go(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      ie(
        31,
        "[object Object]" === e
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Yo(e) {
  return (0, e._init)(e._payload);
}
function Ko(e) {
  function t(t, n) {
    if (e) {
      var r = t.deletions;
      null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
    }
  }
  function n(n, r) {
    if (!e) return null;
    for (; null !== r; ) t(n, r), (r = r.sibling);
    return null;
  }
  function r(e, t) {
    for (e = new Map(); null !== t; )
      null !== t.key ? e.set(t.key, t) : e.set(t.index, t), (t = t.sibling);
    return e;
  }
  function a(e, t) {
    return ((e = Ac(e, t)).index = 0), (e.sibling = null), e;
  }
  function i(t, n, r) {
    return (
      (t.index = r),
      e
        ? null !== (r = t.alternate)
          ? (r = r.index) < n
            ? ((t.flags |= 2), n)
            : r
          : ((t.flags |= 2), n)
        : ((t.flags |= 1048576), n)
    );
  }
  function o(t) {
    return e && null === t.alternate && (t.flags |= 2), t;
  }
  function l(e, t, n, r) {
    return null === t || 6 !== t.tag
      ? (((t = Fc(n, e.mode, r)).return = e), t)
      : (((t = a(t, n)).return = e), t);
  }
  function s(e, t, n, r) {
    var i = n.type;
    return i === Se
      ? c(e, t, n.props.children, r, n.key)
      : null !== t &&
        (t.elementType === i ||
          ("object" == typeof i &&
            null !== i &&
            i.$$typeof === Oe &&
            Yo(i) === t.type))
      ? (((r = a(t, n.props)).ref = $o(e, t, n)), (r.return = e), r)
      : (((r = Ic(n.type, n.key, n.props, null, e.mode, r)).ref = $o(e, t, n)),
        (r.return = e),
        r);
  }
  function u(e, t, n, r) {
    return null === t ||
      4 !== t.tag ||
      t.stateNode.containerInfo !== n.containerInfo ||
      t.stateNode.implementation !== n.implementation
      ? (((t = Rc(n, e.mode, r)).return = e), t)
      : (((t = a(t, n.children || [])).return = e), t);
  }
  function c(e, t, n, r, i) {
    return null === t || 7 !== t.tag
      ? (((t = Bc(n, e.mode, r, i)).return = e), t)
      : (((t = a(t, n)).return = e), t);
  }
  function d(e, t, n) {
    if (("string" == typeof t && "" !== t) || "number" == typeof t)
      return ((t = Fc("" + t, e.mode, n)).return = e), t;
    if ("object" == typeof t && null !== t) {
      switch (t.$$typeof) {
        case _e:
          return (
            ((n = Ic(t.type, t.key, t.props, null, e.mode, n)).ref = $o(
              e,
              null,
              t
            )),
            (n.return = e),
            n
          );
        case ke:
          return ((t = Rc(t, e.mode, n)).return = e), t;
        case Oe:
          return d(e, (0, t._init)(t._payload), n);
      }
      if (tt(t) || Ie(t)) return ((t = Bc(t, e.mode, n, null)).return = e), t;
      Go(e, t);
    }
    return null;
  }
  function f(e, t, n, r) {
    var a = null !== t ? t.key : null;
    if (("string" == typeof n && "" !== n) || "number" == typeof n)
      return null !== a ? null : l(e, t, "" + n, r);
    if ("object" == typeof n && null !== n) {
      switch (n.$$typeof) {
        case _e:
          return n.key === a ? s(e, t, n, r) : null;
        case ke:
          return n.key === a ? u(e, t, n, r) : null;
        case Oe:
          return f(e, t, (a = n._init)(n._payload), r);
      }
      if (tt(n) || Ie(n)) return null !== a ? null : c(e, t, n, r, null);
      Go(e, n);
    }
    return null;
  }
  function h(e, t, n, r, a) {
    if (("string" == typeof r && "" !== r) || "number" == typeof r)
      return l(t, (e = e.get(n) || null), "" + r, a);
    if ("object" == typeof r && null !== r) {
      switch (r.$$typeof) {
        case _e:
          return s(t, (e = e.get(null === r.key ? n : r.key) || null), r, a);
        case ke:
          return u(t, (e = e.get(null === r.key ? n : r.key) || null), r, a);
        case Oe:
          return h(e, t, n, (0, r._init)(r._payload), a);
      }
      if (tt(r) || Ie(r)) return c(t, (e = e.get(n) || null), r, a, null);
      Go(t, r);
    }
    return null;
  }
  return function l(s, u, c, p) {
    if (
      ("object" == typeof c &&
        null !== c &&
        c.type === Se &&
        null === c.key &&
        (c = c.props.children),
      "object" == typeof c && null !== c)
    ) {
      switch (c.$$typeof) {
        case _e:
          e: {
            for (var g = c.key, m = u; null !== m; ) {
              if (m.key === g) {
                if ((g = c.type) === Se) {
                  if (7 === m.tag) {
                    n(s, m.sibling),
                      ((u = a(m, c.props.children)).return = s),
                      (s = u);
                    break e;
                  }
                } else if (
                  m.elementType === g ||
                  ("object" == typeof g &&
                    null !== g &&
                    g.$$typeof === Oe &&
                    Yo(g) === m.type)
                ) {
                  n(s, m.sibling),
                    ((u = a(m, c.props)).ref = $o(s, m, c)),
                    (u.return = s),
                    (s = u);
                  break e;
                }
                n(s, m);
                break;
              }
              t(s, m), (m = m.sibling);
            }
            c.type === Se
              ? (((u = Bc(c.props.children, s.mode, p, c.key)).return = s),
                (s = u))
              : (((p = Ic(c.type, c.key, c.props, null, s.mode, p)).ref = $o(
                  s,
                  u,
                  c
                )),
                (p.return = s),
                (s = p));
          }
          return o(s);
        case ke:
          e: {
            for (m = c.key; null !== u; ) {
              if (u.key === m) {
                if (
                  4 === u.tag &&
                  u.stateNode.containerInfo === c.containerInfo &&
                  u.stateNode.implementation === c.implementation
                ) {
                  n(s, u.sibling),
                    ((u = a(u, c.children || [])).return = s),
                    (s = u);
                  break e;
                }
                n(s, u);
                break;
              }
              t(s, u), (u = u.sibling);
            }
            ((u = Rc(c, s.mode, p)).return = s), (s = u);
          }
          return o(s);
        case Oe:
          return l(s, u, (m = c._init)(c._payload), p);
      }
      if (tt(c))
        return (function (a, o, l, s) {
          for (
            var u = null, c = null, p = o, g = (o = 0), m = null;
            null !== p && g < l.length;
            g++
          ) {
            p.index > g ? ((m = p), (p = null)) : (m = p.sibling);
            var y = f(a, p, l[g], s);
            if (null === y) {
              null === p && (p = m);
              break;
            }
            e && p && null === y.alternate && t(a, p),
              (o = i(y, o, g)),
              null === c ? (u = y) : (c.sibling = y),
              (c = y),
              (p = m);
          }
          if (g === l.length) return n(a, p), ao && Ji(a, g), u;
          if (null === p) {
            for (; g < l.length; g++)
              null !== (p = d(a, l[g], s)) &&
                ((o = i(p, o, g)),
                null === c ? (u = p) : (c.sibling = p),
                (c = p));
            return ao && Ji(a, g), u;
          }
          for (p = r(a, p); g < l.length; g++)
            null !== (m = h(p, a, g, l[g], s)) &&
              (e &&
                null !== m.alternate &&
                p.delete(null === m.key ? g : m.key),
              (o = i(m, o, g)),
              null === c ? (u = m) : (c.sibling = m),
              (c = m));
          return (
            e &&
              p.forEach(function (e) {
                return t(a, e);
              }),
            ao && Ji(a, g),
            u
          );
        })(s, u, c, p);
      if (Ie(c))
        return (function (a, o, l, s) {
          var u = Ie(l);
          if ("function" != typeof u) throw Error(ie(150));
          if (null == (l = u.call(l))) throw Error(ie(151));
          for (
            var c = (u = null), p = o, g = (o = 0), m = null, y = l.next();
            null !== p && !y.done;
            g++, y = l.next()
          ) {
            p.index > g ? ((m = p), (p = null)) : (m = p.sibling);
            var v = f(a, p, y.value, s);
            if (null === v) {
              null === p && (p = m);
              break;
            }
            e && p && null === v.alternate && t(a, p),
              (o = i(v, o, g)),
              null === c ? (u = v) : (c.sibling = v),
              (c = v),
              (p = m);
          }
          if (y.done) return n(a, p), ao && Ji(a, g), u;
          if (null === p) {
            for (; !y.done; g++, y = l.next())
              null !== (y = d(a, y.value, s)) &&
                ((o = i(y, o, g)),
                null === c ? (u = y) : (c.sibling = y),
                (c = y));
            return ao && Ji(a, g), u;
          }
          for (p = r(a, p); !y.done; g++, y = l.next())
            null !== (y = h(p, a, g, y.value, s)) &&
              (e &&
                null !== y.alternate &&
                p.delete(null === y.key ? g : y.key),
              (o = i(y, o, g)),
              null === c ? (u = y) : (c.sibling = y),
              (c = y));
          return (
            e &&
              p.forEach(function (e) {
                return t(a, e);
              }),
            ao && Ji(a, g),
            u
          );
        })(s, u, c, p);
      Go(s, c);
    }
    return ("string" == typeof c && "" !== c) || "number" == typeof c
      ? ((c = "" + c),
        null !== u && 6 === u.tag
          ? (n(s, u.sibling), ((u = a(u, c)).return = s), (s = u))
          : (n(s, u), ((u = Fc(c, s.mode, p)).return = s), (s = u)),
        o(s))
      : n(s, u);
  };
}
var Xo = Ko(!0),
  Jo = Ko(!1),
  Zo = {},
  el = xi(Zo),
  tl = xi(Zo),
  nl = xi(Zo);
function rl(e) {
  if (e === Zo) throw Error(ie(174));
  return e;
}
function al(e, t) {
  switch ((Pi(nl, t), Pi(tl, e), Pi(el, Zo), (e = t.nodeType))) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : st(null, "");
      break;
    default:
      t = st(
        (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
        (e = e.tagName)
      );
  }
  Ci(el), Pi(el, t);
}
function il() {
  Ci(el), Ci(tl), Ci(nl);
}
function ol(e) {
  rl(nl.current);
  var t = rl(el.current),
    n = st(t, e.type);
  t !== n && (Pi(tl, e), Pi(el, n));
}
function ll(e) {
  tl.current === e && (Ci(el), Ci(tl));
}
var sl = xi(0);
function ul(e) {
  for (var t = e; null !== t; ) {
    if (13 === t.tag) {
      var n = t.memoizedState;
      if (
        null !== n &&
        (null === (n = n.dehydrated) || "$?" === n.data || "$!" === n.data)
      )
        return t;
    } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
      if (0 != (128 & t.flags)) return t;
    } else if (null !== t.child) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; null === t.sibling; ) {
      if (null === t.return || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var cl = [];
function dl() {
  for (var e = 0; e < cl.length; e++)
    cl[e]._workInProgressVersionPrimary = null;
  cl.length = 0;
}
var fl = we.ReactCurrentDispatcher,
  hl = we.ReactCurrentBatchConfig,
  pl = 0,
  gl = null,
  ml = null,
  yl = null,
  vl = !1,
  bl = !1,
  wl = 0,
  _l = 0;
function kl() {
  throw Error(ie(321));
}
function Sl(e, t) {
  if (null === t) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!la(e[n], t[n])) return !1;
  return !0;
}
function xl(e, t, n, r, a, i) {
  if (
    ((pl = i),
    (gl = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (fl.current = null === e || null === e.memoizedState ? ls : ss),
    (e = n(r, a)),
    bl)
  ) {
    i = 0;
    do {
      if (((bl = !1), (wl = 0), 25 <= i)) throw Error(ie(301));
      (i += 1),
        (yl = ml = null),
        (t.updateQueue = null),
        (fl.current = us),
        (e = n(r, a));
    } while (bl);
  }
  if (
    ((fl.current = os),
    (t = null !== ml && null !== ml.next),
    (pl = 0),
    (yl = ml = gl = null),
    (vl = !1),
    t)
  )
    throw Error(ie(300));
  return e;
}
function Cl() {
  var e = 0 !== wl;
  return (wl = 0), e;
}
function Pl() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return null === yl ? (gl.memoizedState = yl = e) : (yl = yl.next = e), yl;
}
function ql() {
  if (null === ml) {
    var e = gl.alternate;
    e = null !== e ? e.memoizedState : null;
  } else e = ml.next;
  var t = null === yl ? gl.memoizedState : yl.next;
  if (null !== t) (yl = t), (ml = e);
  else {
    if (null === e) throw Error(ie(310));
    (e = {
      memoizedState: (ml = e).memoizedState,
      baseState: ml.baseState,
      baseQueue: ml.baseQueue,
      queue: ml.queue,
      next: null,
    }),
      null === yl ? (gl.memoizedState = yl = e) : (yl = yl.next = e);
  }
  return yl;
}
function El(e, t) {
  return "function" == typeof t ? t(e) : t;
}
function Tl(e) {
  var t = ql(),
    n = t.queue;
  if (null === n) throw Error(ie(311));
  n.lastRenderedReducer = e;
  var r = ml,
    a = r.baseQueue,
    i = n.pending;
  if (null !== i) {
    if (null !== a) {
      var o = a.next;
      (a.next = i.next), (i.next = o);
    }
    (r.baseQueue = a = i), (n.pending = null);
  }
  if (null !== a) {
    (i = a.next), (r = r.baseState);
    var l = (o = null),
      s = null,
      u = i;
    do {
      var c = u.lane;
      if ((pl & c) === c)
        null !== s &&
          (s = s.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var d = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        null === s ? ((l = s = d), (o = r)) : (s = s.next = d),
          (gl.lanes |= c),
          (Du |= c);
      }
      u = u.next;
    } while (null !== u && u !== i);
    null === s ? (o = r) : (s.next = l),
      la(r, t.memoizedState) || (ws = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (null !== (e = n.interleaved)) {
    a = e;
    do {
      (i = a.lane), (gl.lanes |= i), (Du |= i), (a = a.next);
    } while (a !== e);
  } else null === a && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Ll(e) {
  var t = ql(),
    n = t.queue;
  if (null === n) throw Error(ie(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    a = n.pending,
    i = t.memoizedState;
  if (null !== a) {
    n.pending = null;
    var o = (a = a.next);
    do {
      (i = e(i, o.action)), (o = o.next);
    } while (o !== a);
    la(i, t.memoizedState) || (ws = !0),
      (t.memoizedState = i),
      null === t.baseQueue && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function Nl() {}
function Ol(e, t) {
  var n = gl,
    r = ql(),
    a = t(),
    i = !la(r.memoizedState, a);
  if (
    (i && ((r.memoizedState = a), (ws = !0)),
    (r = r.queue),
    Wl(Il.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (null !== yl && 1 & yl.memoizedState.tag))
  ) {
    if (
      ((n.flags |= 2048),
      Rl(9, Al.bind(null, n, r, a, t), void 0, null),
      null === Lu)
    )
      throw Error(ie(349));
    0 != (30 & pl) || zl(n, t, a);
  }
  return a;
}
function zl(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    null === (t = gl.updateQueue)
      ? ((t = { lastEffect: null, stores: null }),
        (gl.updateQueue = t),
        (t.stores = [e]))
      : null === (n = t.stores)
      ? (t.stores = [e])
      : n.push(e);
}
function Al(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Bl(t) && Dl(e);
}
function Il(e, t, n) {
  return n(function () {
    Bl(t) && Dl(e);
  });
}
function Bl(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !la(e, n);
  } catch (r) {
    return !0;
  }
}
function Dl(e) {
  var t = Lo(e, 1);
  null !== t && rc(t, e, 1, -1);
}
function Fl(e) {
  var t = Pl();
  return (
    "function" == typeof e && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: El,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = ns.bind(null, gl, e)),
    [t.memoizedState, e]
  );
}
function Rl(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    null === (t = gl.updateQueue)
      ? ((t = { lastEffect: null, stores: null }),
        (gl.updateQueue = t),
        (t.lastEffect = e.next = e))
      : null === (n = t.lastEffect)
      ? (t.lastEffect = e.next = e)
      : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
    e
  );
}
function Ml() {
  return ql().memoizedState;
}
function Vl(e, t, n, r) {
  var a = Pl();
  (gl.flags |= e),
    (a.memoizedState = Rl(1 | t, n, void 0, void 0 === r ? null : r));
}
function jl(e, t, n, r) {
  var a = ql();
  r = void 0 === r ? null : r;
  var i = void 0;
  if (null !== ml) {
    var o = ml.memoizedState;
    if (((i = o.destroy), null !== r && Sl(r, o.deps)))
      return void (a.memoizedState = Rl(t, n, i, r));
  }
  (gl.flags |= e), (a.memoizedState = Rl(1 | t, n, i, r));
}
function Ul(e, t) {
  return Vl(8390656, 8, e, t);
}
function Wl(e, t) {
  return jl(2048, 8, e, t);
}
function Hl(e, t) {
  return jl(4, 2, e, t);
}
function Ql(e, t) {
  return jl(4, 4, e, t);
}
function $l(e, t) {
  return "function" == typeof t
    ? ((e = e()),
      t(e),
      function () {
        t(null);
      })
    : null != t
    ? ((e = e()),
      (t.current = e),
      function () {
        t.current = null;
      })
    : void 0;
}
function Gl(e, t, n) {
  return (
    (n = null != n ? n.concat([e]) : null), jl(4, 4, $l.bind(null, t, e), n)
  );
}
function Yl() {}
function Kl(e, t) {
  var n = ql();
  t = void 0 === t ? null : t;
  var r = n.memoizedState;
  return null !== r && null !== t && Sl(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Xl(e, t) {
  var n = ql();
  t = void 0 === t ? null : t;
  var r = n.memoizedState;
  return null !== r && null !== t && Sl(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Jl(e, t, n) {
  return 0 == (21 & pl)
    ? (e.baseState && ((e.baseState = !1), (ws = !0)), (e.memoizedState = n))
    : (la(n, t) || ((n = mn()), (gl.lanes |= n), (Du |= n), (e.baseState = !0)),
      t);
}
function Zl(e, t) {
  var n = wn;
  (wn = 0 !== n && 4 > n ? n : 4), e(!0);
  var r = hl.transition;
  hl.transition = {};
  try {
    e(!1), t();
  } finally {
    (wn = n), (hl.transition = r);
  }
}
function es() {
  return ql().memoizedState;
}
function ts(e, t, n) {
  var r = nc(e);
  (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }),
    rs(e)
      ? as(t, n)
      : null !== (n = To(e, t, n, r)) && (rc(n, e, r, tc()), is(n, t, r));
}
function ns(e, t, n) {
  var r = nc(e),
    a = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (rs(e)) as(t, a);
  else {
    var i = e.alternate;
    if (
      0 === e.lanes &&
      (null === i || 0 === i.lanes) &&
      null !== (i = t.lastRenderedReducer)
    )
      try {
        var o = t.lastRenderedState,
          l = i(o, n);
        if (((a.hasEagerState = !0), (a.eagerState = l), la(l, o))) {
          var s = t.interleaved;
          return (
            null === s
              ? ((a.next = a), Eo(t))
              : ((a.next = s.next), (s.next = a)),
            void (t.interleaved = a)
          );
        }
      } catch (u) {}
    null !== (n = To(e, t, a, r)) && (rc(n, e, r, (a = tc())), is(n, t, r));
  }
}
function rs(e) {
  var t = e.alternate;
  return e === gl || (null !== t && t === gl);
}
function as(e, t) {
  bl = vl = !0;
  var n = e.pending;
  null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function is(e, t, n) {
  if (0 != (4194240 & n)) {
    var r = t.lanes;
    (n |= r &= e.pendingLanes), (t.lanes = n), bn(e, n);
  }
}
var os = {
    readContext: Po,
    useCallback: kl,
    useContext: kl,
    useEffect: kl,
    useImperativeHandle: kl,
    useInsertionEffect: kl,
    useLayoutEffect: kl,
    useMemo: kl,
    useReducer: kl,
    useRef: kl,
    useState: kl,
    useDebugValue: kl,
    useDeferredValue: kl,
    useTransition: kl,
    useMutableSource: kl,
    useSyncExternalStore: kl,
    useId: kl,
    unstable_isNewReconciler: !1,
  },
  ls = {
    readContext: Po,
    useCallback: function (e, t) {
      return (Pl().memoizedState = [e, void 0 === t ? null : t]), e;
    },
    useContext: Po,
    useEffect: Ul,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = null != n ? n.concat([e]) : null),
        Vl(4194308, 4, $l.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Vl(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Vl(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Pl();
      return (
        (t = void 0 === t ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Pl();
      return (
        (t = void 0 !== n ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = ts.bind(null, gl, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      return (e = { current: e }), (Pl().memoizedState = e);
    },
    useState: Fl,
    useDebugValue: Yl,
    useDeferredValue: function (e) {
      return (Pl().memoizedState = e);
    },
    useTransition: function () {
      var e = Fl(!1),
        t = e[0];
      return (e = Zl.bind(null, e[1])), (Pl().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = gl,
        a = Pl();
      if (ao) {
        if (void 0 === n) throw Error(ie(407));
        n = n();
      } else {
        if (((n = t()), null === Lu)) throw Error(ie(349));
        0 != (30 & pl) || zl(r, t, n);
      }
      a.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (a.queue = i),
        Ul(Il.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        Rl(9, Al.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Pl(),
        t = Lu.identifierPrefix;
      if (ao) {
        var n = Xi;
        (t =
          ":" +
          t +
          "R" +
          (n = (Ki & ~(1 << (32 - ln(Ki) - 1))).toString(32) + n)),
          0 < (n = wl++) && (t += "H" + n.toString(32)),
          (t += ":");
      } else t = ":" + t + "r" + (n = _l++).toString(32) + ":";
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  ss = {
    readContext: Po,
    useCallback: Kl,
    useContext: Po,
    useEffect: Wl,
    useImperativeHandle: Gl,
    useInsertionEffect: Hl,
    useLayoutEffect: Ql,
    useMemo: Xl,
    useReducer: Tl,
    useRef: Ml,
    useState: function () {
      return Tl(El);
    },
    useDebugValue: Yl,
    useDeferredValue: function (e) {
      return Jl(ql(), ml.memoizedState, e);
    },
    useTransition: function () {
      return [Tl(El)[0], ql().memoizedState];
    },
    useMutableSource: Nl,
    useSyncExternalStore: Ol,
    useId: es,
    unstable_isNewReconciler: !1,
  },
  us = {
    readContext: Po,
    useCallback: Kl,
    useContext: Po,
    useEffect: Wl,
    useImperativeHandle: Gl,
    useInsertionEffect: Hl,
    useLayoutEffect: Ql,
    useMemo: Xl,
    useReducer: Ll,
    useRef: Ml,
    useState: function () {
      return Ll(El);
    },
    useDebugValue: Yl,
    useDeferredValue: function (e) {
      var t = ql();
      return null === ml ? (t.memoizedState = e) : Jl(t, ml.memoizedState, e);
    },
    useTransition: function () {
      return [Ll(El)[0], ql().memoizedState];
    },
    useMutableSource: Nl,
    useSyncExternalStore: Ol,
    useId: es,
    unstable_isNewReconciler: !1,
  };
function cs(e, t) {
  try {
    var n = "",
      r = t;
    do {
      (n += Ve(r)), (r = r.return);
    } while (r);
    var a = n;
  } catch (i) {
    a = "\nError generating stack: " + i.message + "\n" + i.stack;
  }
  return { value: e, source: t, stack: a, digest: null };
}
function ds(e, t, n) {
  return {
    value: e,
    source: null,
    stack: null != n ? n : null,
    digest: null != t ? t : null,
  };
}
function fs(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var hs = "function" == typeof WeakMap ? WeakMap : Map;
function ps(e, t, n) {
  ((n = Ao(-1, n)).tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Hu || ((Hu = !0), (Qu = r)), fs(0, t);
    }),
    n
  );
}
function gs(e, t, n) {
  (n = Ao(-1, n)).tag = 3;
  var r = e.type.getDerivedStateFromError;
  if ("function" == typeof r) {
    var a = t.value;
    (n.payload = function () {
      return r(a);
    }),
      (n.callback = function () {
        fs(0, t);
      });
  }
  var i = e.stateNode;
  return (
    null !== i &&
      "function" == typeof i.componentDidCatch &&
      (n.callback = function () {
        fs(0, t),
          "function" != typeof r &&
            (null === $u ? ($u = new Set([this])) : $u.add(this));
        var e = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: null !== e ? e : "",
        });
      }),
    n
  );
}
function ms(e, t, n) {
  var r = e.pingCache;
  if (null === r) {
    r = e.pingCache = new hs();
    var a = new Set();
    r.set(t, a);
  } else void 0 === (a = r.get(t)) && ((a = new Set()), r.set(t, a));
  a.has(n) || (a.add(n), (e = Pc.bind(null, e, t, n)), t.then(e, e));
}
function ys(e) {
  do {
    var t;
    if (
      ((t = 13 === e.tag) &&
        (t = null === (t = e.memoizedState) || null !== t.dehydrated),
      t)
    )
      return e;
    e = e.return;
  } while (null !== e);
  return null;
}
function vs(e, t, n, r, a) {
  return 0 == (1 & e.mode)
    ? (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          1 === n.tag &&
            (null === n.alternate
              ? (n.tag = 17)
              : (((t = Ao(-1, 1)).tag = 2), Io(n, t, 1))),
          (n.lanes |= 1)),
      e)
    : ((e.flags |= 65536), (e.lanes = a), e);
}
var bs = we.ReactCurrentOwner,
  ws = !1;
function _s(e, t, n, r) {
  t.child = null === e ? Jo(t, null, n, r) : Xo(t, e.child, n, r);
}
function ks(e, t, n, r, a) {
  n = n.render;
  var i = t.ref;
  return (
    Co(t, a),
    (r = xl(e, t, n, r, i, a)),
    (n = Cl()),
    null === e || ws
      ? (ao && n && eo(t), (t.flags |= 1), _s(e, t, r, a), t.child)
      : ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~a),
        Hs(e, t, a))
  );
}
function Ss(e, t, n, r, a) {
  if (null === e) {
    var i = n.type;
    return "function" != typeof i ||
      zc(i) ||
      void 0 !== i.defaultProps ||
      null !== n.compare ||
      void 0 !== n.defaultProps
      ? (((e = Ic(n.type, null, r, t, t.mode, a)).ref = t.ref),
        (e.return = t),
        (t.child = e))
      : ((t.tag = 15), (t.type = i), xs(e, t, i, r, a));
  }
  if (((i = e.child), 0 == (e.lanes & a))) {
    var o = i.memoizedProps;
    if ((n = null !== (n = n.compare) ? n : sa)(o, r) && e.ref === t.ref)
      return Hs(e, t, a);
  }
  return (
    (t.flags |= 1), ((e = Ac(i, r)).ref = t.ref), (e.return = t), (t.child = e)
  );
}
function xs(e, t, n, r, a) {
  if (null !== e) {
    var i = e.memoizedProps;
    if (sa(i, r) && e.ref === t.ref) {
      if (((ws = !1), (t.pendingProps = r = i), 0 == (e.lanes & a)))
        return (t.lanes = e.lanes), Hs(e, t, a);
      0 != (131072 & e.flags) && (ws = !0);
    }
  }
  return qs(e, t, n, r, a);
}
function Cs(e, t, n) {
  var r = t.pendingProps,
    a = r.children,
    i = null !== e ? e.memoizedState : null;
  if ("hidden" === r.mode)
    if (0 == (1 & t.mode))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        Pi(Au, zu),
        (zu |= n);
    else {
      if (0 == (1073741824 & n))
        return (
          (e = null !== i ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          Pi(Au, zu),
          (zu |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = null !== i ? i.baseLanes : n),
        Pi(Au, zu),
        (zu |= r);
    }
  else
    null !== i ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      Pi(Au, zu),
      (zu |= r);
  return _s(e, t, a, n), t.child;
}
function Ps(e, t) {
  var n = t.ref;
  ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function qs(e, t, n, r, a) {
  var i = Oi(n) ? Li : Ei.current;
  return (
    (i = Ni(t, i)),
    Co(t, a),
    (n = xl(e, t, n, r, i, a)),
    (r = Cl()),
    null === e || ws
      ? (ao && r && eo(t), (t.flags |= 1), _s(e, t, n, a), t.child)
      : ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~a),
        Hs(e, t, a))
  );
}
function Es(e, t, n, r, a) {
  if (Oi(n)) {
    var i = !0;
    Bi(t);
  } else i = !1;
  if ((Co(t, a), null === t.stateNode))
    Ws(e, t), Wo(t, n, r), Qo(t, n, r, a), (r = !0);
  else if (null === e) {
    var o = t.stateNode,
      l = t.memoizedProps;
    o.props = l;
    var s = o.context,
      u = n.contextType;
    u =
      "object" == typeof u && null !== u
        ? Po(u)
        : Ni(t, (u = Oi(n) ? Li : Ei.current));
    var c = n.getDerivedStateFromProps,
      d =
        "function" == typeof c ||
        "function" == typeof o.getSnapshotBeforeUpdate;
    d ||
      ("function" != typeof o.UNSAFE_componentWillReceiveProps &&
        "function" != typeof o.componentWillReceiveProps) ||
      ((l !== r || s !== u) && Ho(t, o, r, u)),
      (No = !1);
    var f = t.memoizedState;
    (o.state = f),
      Fo(t, r, o, a),
      (s = t.memoizedState),
      l !== r || f !== s || Ti.current || No
        ? ("function" == typeof c && (Vo(t, n, c, r), (s = t.memoizedState)),
          (l = No || Uo(t, n, l, r, f, s, u))
            ? (d ||
                ("function" != typeof o.UNSAFE_componentWillMount &&
                  "function" != typeof o.componentWillMount) ||
                ("function" == typeof o.componentWillMount &&
                  o.componentWillMount(),
                "function" == typeof o.UNSAFE_componentWillMount &&
                  o.UNSAFE_componentWillMount()),
              "function" == typeof o.componentDidMount && (t.flags |= 4194308))
            : ("function" == typeof o.componentDidMount && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (o.props = r),
          (o.state = s),
          (o.context = u),
          (r = l))
        : ("function" == typeof o.componentDidMount && (t.flags |= 4194308),
          (r = !1));
  } else {
    (o = t.stateNode),
      zo(e, t),
      (l = t.memoizedProps),
      (u = t.type === t.elementType ? l : yo(t.type, l)),
      (o.props = u),
      (d = t.pendingProps),
      (f = o.context),
      (s =
        "object" == typeof (s = n.contextType) && null !== s
          ? Po(s)
          : Ni(t, (s = Oi(n) ? Li : Ei.current)));
    var h = n.getDerivedStateFromProps;
    (c =
      "function" == typeof h ||
      "function" == typeof o.getSnapshotBeforeUpdate) ||
      ("function" != typeof o.UNSAFE_componentWillReceiveProps &&
        "function" != typeof o.componentWillReceiveProps) ||
      ((l !== d || f !== s) && Ho(t, o, r, s)),
      (No = !1),
      (f = t.memoizedState),
      (o.state = f),
      Fo(t, r, o, a);
    var p = t.memoizedState;
    l !== d || f !== p || Ti.current || No
      ? ("function" == typeof h && (Vo(t, n, h, r), (p = t.memoizedState)),
        (u = No || Uo(t, n, u, r, f, p, s) || !1)
          ? (c ||
              ("function" != typeof o.UNSAFE_componentWillUpdate &&
                "function" != typeof o.componentWillUpdate) ||
              ("function" == typeof o.componentWillUpdate &&
                o.componentWillUpdate(r, p, s),
              "function" == typeof o.UNSAFE_componentWillUpdate &&
                o.UNSAFE_componentWillUpdate(r, p, s)),
            "function" == typeof o.componentDidUpdate && (t.flags |= 4),
            "function" == typeof o.getSnapshotBeforeUpdate && (t.flags |= 1024))
          : ("function" != typeof o.componentDidUpdate ||
              (l === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            "function" != typeof o.getSnapshotBeforeUpdate ||
              (l === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = p)),
        (o.props = r),
        (o.state = p),
        (o.context = s),
        (r = u))
      : ("function" != typeof o.componentDidUpdate ||
          (l === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        "function" != typeof o.getSnapshotBeforeUpdate ||
          (l === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Ts(e, t, n, r, i, a);
}
function Ts(e, t, n, r, a, i) {
  Ps(e, t);
  var o = 0 != (128 & t.flags);
  if (!r && !o) return a && Di(t, n, !1), Hs(e, t, i);
  (r = t.stateNode), (bs.current = t);
  var l =
    o && "function" != typeof n.getDerivedStateFromError ? null : r.render();
  return (
    (t.flags |= 1),
    null !== e && o
      ? ((t.child = Xo(t, e.child, null, i)), (t.child = Xo(t, null, l, i)))
      : _s(e, t, l, i),
    (t.memoizedState = r.state),
    a && Di(t, n, !0),
    t.child
  );
}
function Ls(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Ai(0, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Ai(0, t.context, !1),
    al(e, t.containerInfo);
}
function Ns(e, t, n, r, a) {
  return po(), go(a), (t.flags |= 256), _s(e, t, n, r), t.child;
}
var Os,
  zs,
  As,
  Is,
  Bs = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ds(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Fs(e, t, n) {
  var r,
    a = t.pendingProps,
    i = sl.current,
    o = !1,
    l = 0 != (128 & t.flags);
  if (
    ((r = l) || (r = (null === e || null !== e.memoizedState) && 0 != (2 & i)),
    r
      ? ((o = !0), (t.flags &= -129))
      : (null !== e && null === e.memoizedState) || (i |= 1),
    Pi(sl, 1 & i),
    null === e)
  )
    return (
      uo(t),
      null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
        ? (0 == (1 & t.mode)
            ? (t.lanes = 1)
            : "$!" === e.data
            ? (t.lanes = 8)
            : (t.lanes = 1073741824),
          null)
        : ((l = a.children),
          (e = a.fallback),
          o
            ? ((a = t.mode),
              (o = t.child),
              (l = { mode: "hidden", children: l }),
              0 == (1 & a) && null !== o
                ? ((o.childLanes = 0), (o.pendingProps = l))
                : (o = Dc(l, a, 0, null)),
              (e = Bc(e, a, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = Ds(n)),
              (t.memoizedState = Bs),
              e)
            : Rs(t, l))
    );
  if (null !== (i = e.memoizedState) && null !== (r = i.dehydrated))
    return (function (e, t, n, r, a, i, o) {
      if (n)
        return 256 & t.flags
          ? ((t.flags &= -257), Ms(e, t, o, (r = ds(Error(ie(422))))))
          : null !== t.memoizedState
          ? ((t.child = e.child), (t.flags |= 128), null)
          : ((i = r.fallback),
            (a = t.mode),
            (r = Dc({ mode: "visible", children: r.children }, a, 0, null)),
            ((i = Bc(i, a, o, null)).flags |= 2),
            (r.return = t),
            (i.return = t),
            (r.sibling = i),
            (t.child = r),
            0 != (1 & t.mode) && Xo(t, e.child, null, o),
            (t.child.memoizedState = Ds(o)),
            (t.memoizedState = Bs),
            i);
      if (0 == (1 & t.mode)) return Ms(e, t, o, null);
      if ("$!" === a.data) {
        if ((r = a.nextSibling && a.nextSibling.dataset)) var l = r.dgst;
        return (r = l), Ms(e, t, o, (r = ds((i = Error(ie(419))), r, void 0)));
      }
      if (((l = 0 != (o & e.childLanes)), ws || l)) {
        if (null !== (r = Lu)) {
          switch (o & -o) {
            case 4:
              a = 2;
              break;
            case 16:
              a = 8;
              break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              a = 32;
              break;
            case 536870912:
              a = 268435456;
              break;
            default:
              a = 0;
          }
          0 !== (a = 0 != (a & (r.suspendedLanes | o)) ? 0 : a) &&
            a !== i.retryLane &&
            ((i.retryLane = a), Lo(e, a), rc(r, e, a, -1));
        }
        return mc(), Ms(e, t, o, (r = ds(Error(ie(421)))));
      }
      return "$?" === a.data
        ? ((t.flags |= 128),
          (t.child = e.child),
          (t = Ec.bind(null, e)),
          (a._reactRetry = t),
          null)
        : ((e = i.treeContext),
          (ro = ui(a.nextSibling)),
          (no = t),
          (ao = !0),
          (io = null),
          null !== e &&
            (($i[Gi++] = Ki),
            ($i[Gi++] = Xi),
            ($i[Gi++] = Yi),
            (Ki = e.id),
            (Xi = e.overflow),
            (Yi = t)),
          ((t = Rs(t, r.children)).flags |= 4096),
          t);
    })(e, t, l, a, r, i, n);
  if (o) {
    (o = a.fallback), (l = t.mode), (r = (i = e.child).sibling);
    var s = { mode: "hidden", children: a.children };
    return (
      0 == (1 & l) && t.child !== i
        ? (((a = t.child).childLanes = 0),
          (a.pendingProps = s),
          (t.deletions = null))
        : ((a = Ac(i, s)).subtreeFlags = 14680064 & i.subtreeFlags),
      null !== r ? (o = Ac(r, o)) : ((o = Bc(o, l, n, null)).flags |= 2),
      (o.return = t),
      (a.return = t),
      (a.sibling = o),
      (t.child = a),
      (a = o),
      (o = t.child),
      (l =
        null === (l = e.child.memoizedState)
          ? Ds(n)
          : {
              baseLanes: l.baseLanes | n,
              cachePool: null,
              transitions: l.transitions,
            }),
      (o.memoizedState = l),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = Bs),
      a
    );
  }
  return (
    (e = (o = e.child).sibling),
    (a = Ac(o, { mode: "visible", children: a.children })),
    0 == (1 & t.mode) && (a.lanes = n),
    (a.return = t),
    (a.sibling = null),
    null !== e &&
      (null === (n = t.deletions)
        ? ((t.deletions = [e]), (t.flags |= 16))
        : n.push(e)),
    (t.child = a),
    (t.memoizedState = null),
    a
  );
}
function Rs(e, t) {
  return (
    ((t = Dc({ mode: "visible", children: t }, e.mode, 0, null)).return = e),
    (e.child = t)
  );
}
function Ms(e, t, n, r) {
  return (
    null !== r && go(r),
    Xo(t, e.child, null, n),
    ((e = Rs(t, t.pendingProps.children)).flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Vs(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  null !== r && (r.lanes |= t), xo(e.return, t, n);
}
function js(e, t, n, r, a) {
  var i = e.memoizedState;
  null === i
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: a,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = a));
}
function Us(e, t, n) {
  var r = t.pendingProps,
    a = r.revealOrder,
    i = r.tail;
  if ((_s(e, t, r.children, n), 0 != (2 & (r = sl.current))))
    (r = (1 & r) | 2), (t.flags |= 128);
  else {
    if (null !== e && 0 != (128 & e.flags))
      e: for (e = t.child; null !== e; ) {
        if (13 === e.tag) null !== e.memoizedState && Vs(e, n, t);
        else if (19 === e.tag) Vs(e, n, t);
        else if (null !== e.child) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; null === e.sibling; ) {
          if (null === e.return || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((Pi(sl, r), 0 == (1 & t.mode))) t.memoizedState = null;
  else
    switch (a) {
      case "forwards":
        for (n = t.child, a = null; null !== n; )
          null !== (e = n.alternate) && null === ul(e) && (a = n),
            (n = n.sibling);
        null === (n = a)
          ? ((a = t.child), (t.child = null))
          : ((a = n.sibling), (n.sibling = null)),
          js(t, !1, a, n, i);
        break;
      case "backwards":
        for (n = null, a = t.child, t.child = null; null !== a; ) {
          if (null !== (e = a.alternate) && null === ul(e)) {
            t.child = a;
            break;
          }
          (e = a.sibling), (a.sibling = n), (n = a), (a = e);
        }
        js(t, !0, n, null, i);
        break;
      case "together":
        js(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Ws(e, t) {
  0 == (1 & t.mode) &&
    null !== e &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Hs(e, t, n) {
  if (
    (null !== e && (t.dependencies = e.dependencies),
    (Du |= t.lanes),
    0 == (n & t.childLanes))
  )
    return null;
  if (null !== e && t.child !== e.child) throw Error(ie(153));
  if (null !== t.child) {
    for (
      n = Ac((e = t.child), e.pendingProps), t.child = n, n.return = t;
      null !== e.sibling;

    )
      (e = e.sibling), ((n = n.sibling = Ac(e, e.pendingProps)).return = t);
    n.sibling = null;
  }
  return t.child;
}
function Qs(e, t) {
  if (!ao)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; null !== t; )
          null !== t.alternate && (n = t), (t = t.sibling);
        null === n ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; null !== n; )
          null !== n.alternate && (r = n), (n = n.sibling);
        null === r
          ? t || null === e.tail
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function $s(e) {
  var t = null !== e.alternate && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var a = e.child; null !== a; )
      (n |= a.lanes | a.childLanes),
        (r |= 14680064 & a.subtreeFlags),
        (r |= 14680064 & a.flags),
        (a.return = e),
        (a = a.sibling);
  else
    for (a = e.child; null !== a; )
      (n |= a.lanes | a.childLanes),
        (r |= a.subtreeFlags),
        (r |= a.flags),
        (a.return = e),
        (a = a.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Gs(e, t, n) {
  var r = t.pendingProps;
  switch ((to(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return $s(t), null;
    case 1:
    case 17:
      return Oi(t.type) && zi(), $s(t), null;
    case 3:
      return (
        (r = t.stateNode),
        il(),
        Ci(Ti),
        Ci(Ei),
        dl(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (null !== e && null !== e.child) ||
          (fo(t)
            ? (t.flags |= 4)
            : null === e ||
              (e.memoizedState.isDehydrated && 0 == (256 & t.flags)) ||
              ((t.flags |= 1024), null !== io && (lc(io), (io = null)))),
        zs(e, t),
        $s(t),
        null
      );
    case 5:
      ll(t);
      var a = rl(nl.current);
      if (((n = t.type), null !== e && null != t.stateNode))
        As(e, t, n, r, a),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (null === t.stateNode) throw Error(ie(166));
          return $s(t), null;
        }
        if (((e = rl(el.current)), fo(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[fi] = t), (r[hi] = i), (e = 0 != (1 & t.mode)), n)) {
            case "dialog":
              Ra("cancel", r), Ra("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              Ra("load", r);
              break;
            case "video":
            case "audio":
              for (a = 0; a < Ia.length; a++) Ra(Ia[a], r);
              break;
            case "source":
              Ra("error", r);
              break;
            case "img":
            case "image":
            case "link":
              Ra("error", r), Ra("load", r);
              break;
            case "details":
              Ra("toggle", r);
              break;
            case "input":
              Ke(r, i), Ra("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                Ra("invalid", r);
              break;
            case "textarea":
              at(r, i), Ra("invalid", r);
          }
          for (var o in (vt(n, i), (a = null), i))
            if (i.hasOwnProperty(o)) {
              var l = i[o];
              "children" === o
                ? "string" == typeof l
                  ? r.textContent !== l &&
                    (!0 !== i.suppressHydrationWarning &&
                      Ja(r.textContent, l, e),
                    (a = ["children", l]))
                  : "number" == typeof l &&
                    r.textContent !== "" + l &&
                    (!0 !== i.suppressHydrationWarning &&
                      Ja(r.textContent, l, e),
                    (a = ["children", "" + l]))
                : le.hasOwnProperty(o) &&
                  null != l &&
                  "onScroll" === o &&
                  Ra("scroll", r);
            }
          switch (n) {
            case "input":
              Qe(r), Ze(r, i, !0);
              break;
            case "textarea":
              Qe(r), ot(r);
              break;
            case "select":
            case "option":
              break;
            default:
              "function" == typeof i.onClick && (r.onclick = Za);
          }
          (r = a), (t.updateQueue = r), null !== r && (t.flags |= 4);
        } else {
          (o = 9 === a.nodeType ? a : a.ownerDocument),
            "http://www.w3.org/1999/xhtml" === e && (e = lt(n)),
            "http://www.w3.org/1999/xhtml" === e
              ? "script" === n
                ? (((e = o.createElement("div")).innerHTML =
                    "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : "string" == typeof r.is
                ? (e = o.createElement(n, { is: r.is }))
                : ((e = o.createElement(n)),
                  "select" === n &&
                    ((o = e),
                    r.multiple
                      ? (o.multiple = !0)
                      : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[fi] = t),
            (e[hi] = r),
            Os(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = bt(n, r)), n)) {
              case "dialog":
                Ra("cancel", e), Ra("close", e), (a = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                Ra("load", e), (a = r);
                break;
              case "video":
              case "audio":
                for (a = 0; a < Ia.length; a++) Ra(Ia[a], e);
                a = r;
                break;
              case "source":
                Ra("error", e), (a = r);
                break;
              case "img":
              case "image":
              case "link":
                Ra("error", e), Ra("load", e), (a = r);
                break;
              case "details":
                Ra("toggle", e), (a = r);
                break;
              case "input":
                Ke(e, r), (a = Ye(e, r)), Ra("invalid", e);
                break;
              case "option":
              default:
                a = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (a = De({}, r, { value: void 0 })),
                  Ra("invalid", e);
                break;
              case "textarea":
                at(e, r), (a = rt(e, r)), Ra("invalid", e);
            }
            for (i in (vt(n, a), (l = a)))
              if (l.hasOwnProperty(i)) {
                var s = l[i];
                "style" === i
                  ? mt(e, s)
                  : "dangerouslySetInnerHTML" === i
                  ? null != (s = s ? s.__html : void 0) && dt(e, s)
                  : "children" === i
                  ? "string" == typeof s
                    ? ("textarea" !== n || "" !== s) && ft(e, s)
                    : "number" == typeof s && ft(e, "" + s)
                  : "suppressContentEditableWarning" !== i &&
                    "suppressHydrationWarning" !== i &&
                    "autoFocus" !== i &&
                    (le.hasOwnProperty(i)
                      ? null != s && "onScroll" === i && Ra("scroll", e)
                      : null != s && be(e, i, s, o));
              }
            switch (n) {
              case "input":
                Qe(e), Ze(e, r, !1);
                break;
              case "textarea":
                Qe(e), ot(e);
                break;
              case "option":
                null != r.value && e.setAttribute("value", "" + We(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  null != (i = r.value)
                    ? nt(e, !!r.multiple, i, !1)
                    : null != r.defaultValue &&
                      nt(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                "function" == typeof a.onClick && (e.onclick = Za);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return $s(t), null;
    case 6:
      if (e && null != t.stateNode) Is(e, t, e.memoizedProps, r);
      else {
        if ("string" != typeof r && null === t.stateNode) throw Error(ie(166));
        if (((n = rl(nl.current)), rl(el.current), fo(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[fi] = t),
            (i = r.nodeValue !== n) && null !== (e = no))
          )
            switch (e.tag) {
              case 3:
                Ja(r.nodeValue, n, 0 != (1 & e.mode));
                break;
              case 5:
                !0 !== e.memoizedProps.suppressHydrationWarning &&
                  Ja(r.nodeValue, n, 0 != (1 & e.mode));
            }
          i && (t.flags |= 4);
        } else
          ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(r))[
            fi
          ] = t),
            (t.stateNode = r);
      }
      return $s(t), null;
    case 13:
      if (
        (Ci(sl),
        (r = t.memoizedState),
        null === e ||
          (null !== e.memoizedState && null !== e.memoizedState.dehydrated))
      ) {
        if (ao && null !== ro && 0 != (1 & t.mode) && 0 == (128 & t.flags))
          ho(), po(), (t.flags |= 98560), (i = !1);
        else if (((i = fo(t)), null !== r && null !== r.dehydrated)) {
          if (null === e) {
            if (!i) throw Error(ie(318));
            if (!(i = null !== (i = t.memoizedState) ? i.dehydrated : null))
              throw Error(ie(317));
            i[fi] = t;
          } else
            po(),
              0 == (128 & t.flags) && (t.memoizedState = null),
              (t.flags |= 4);
          $s(t), (i = !1);
        } else null !== io && (lc(io), (io = null)), (i = !0);
        if (!i) return 65536 & t.flags ? t : null;
      }
      return 0 != (128 & t.flags)
        ? ((t.lanes = n), t)
        : ((r = null !== r) != (null !== e && null !== e.memoizedState) &&
            r &&
            ((t.child.flags |= 8192),
            0 != (1 & t.mode) &&
              (null === e || 0 != (1 & sl.current)
                ? 0 === Iu && (Iu = 3)
                : mc())),
          null !== t.updateQueue && (t.flags |= 4),
          $s(t),
          null);
    case 4:
      return (
        il(), zs(e, t), null === e && ja(t.stateNode.containerInfo), $s(t), null
      );
    case 10:
      return So(t.type._context), $s(t), null;
    case 19:
      if ((Ci(sl), null === (i = t.memoizedState))) return $s(t), null;
      if (((r = 0 != (128 & t.flags)), null === (o = i.rendering)))
        if (r) Qs(i, !1);
        else {
          if (0 !== Iu || (null !== e && 0 != (128 & e.flags)))
            for (e = t.child; null !== e; ) {
              if (null !== (o = ul(e))) {
                for (
                  t.flags |= 128,
                    Qs(i, !1),
                    null !== (r = o.updateQueue) &&
                      ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  null !== n;

                )
                  (e = r),
                    ((i = n).flags &= 14680066),
                    null === (o = i.alternate)
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = o.childLanes),
                        (i.lanes = o.lanes),
                        (i.child = o.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = o.memoizedProps),
                        (i.memoizedState = o.memoizedState),
                        (i.updateQueue = o.updateQueue),
                        (i.type = o.type),
                        (e = o.dependencies),
                        (i.dependencies =
                          null === e
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return Pi(sl, (1 & sl.current) | 2), t.child;
              }
              e = e.sibling;
            }
          null !== i.tail &&
            Xt() > Uu &&
            ((t.flags |= 128), (r = !0), Qs(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (null !== (e = ul(o))) {
            if (
              ((t.flags |= 128),
              (r = !0),
              null !== (n = e.updateQueue) &&
                ((t.updateQueue = n), (t.flags |= 4)),
              Qs(i, !0),
              null === i.tail && "hidden" === i.tailMode && !o.alternate && !ao)
            )
              return $s(t), null;
          } else
            2 * Xt() - i.renderingStartTime > Uu &&
              1073741824 !== n &&
              ((t.flags |= 128), (r = !0), Qs(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : (null !== (n = i.last) ? (n.sibling = o) : (t.child = o),
            (i.last = o));
      }
      return null !== i.tail
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = Xt()),
          (t.sibling = null),
          (n = sl.current),
          Pi(sl, r ? (1 & n) | 2 : 1 & n),
          t)
        : ($s(t), null);
    case 22:
    case 23:
      return (
        fc(),
        (r = null !== t.memoizedState),
        null !== e && (null !== e.memoizedState) !== r && (t.flags |= 8192),
        r && 0 != (1 & t.mode)
          ? 0 != (1073741824 & zu) &&
            ($s(t), 6 & t.subtreeFlags && (t.flags |= 8192))
          : $s(t),
        null
      );
    case 24:
    case 25:
      return null;
  }
  throw Error(ie(156, t.tag));
}
function Ys(e, t) {
  switch ((to(t), t.tag)) {
    case 1:
      return (
        Oi(t.type) && zi(),
        65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null
      );
    case 3:
      return (
        il(),
        Ci(Ti),
        Ci(Ei),
        dl(),
        0 != (65536 & (e = t.flags)) && 0 == (128 & e)
          ? ((t.flags = (-65537 & e) | 128), t)
          : null
      );
    case 5:
      return ll(t), null;
    case 13:
      if ((Ci(sl), null !== (e = t.memoizedState) && null !== e.dehydrated)) {
        if (null === t.alternate) throw Error(ie(340));
        po();
      }
      return 65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null;
    case 19:
      return Ci(sl), null;
    case 4:
      return il(), null;
    case 10:
      return So(t.type._context), null;
    case 22:
    case 23:
      return fc(), null;
    default:
      return null;
  }
}
(Os = function (e, t) {
  for (var n = t.child; null !== n; ) {
    if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
    else if (4 !== n.tag && null !== n.child) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; null === n.sibling; ) {
      if (null === n.return || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
}),
  (zs = function () {}),
  (As = function (e, t, n, r) {
    var a = e.memoizedProps;
    if (a !== r) {
      (e = t.stateNode), rl(el.current);
      var i,
        o = null;
      switch (n) {
        case "input":
          (a = Ye(e, a)), (r = Ye(e, r)), (o = []);
          break;
        case "select":
          (a = De({}, a, { value: void 0 })),
            (r = De({}, r, { value: void 0 })),
            (o = []);
          break;
        case "textarea":
          (a = rt(e, a)), (r = rt(e, r)), (o = []);
          break;
        default:
          "function" != typeof a.onClick &&
            "function" == typeof r.onClick &&
            (e.onclick = Za);
      }
      for (u in (vt(n, r), (n = null), a))
        if (!r.hasOwnProperty(u) && a.hasOwnProperty(u) && null != a[u])
          if ("style" === u) {
            var l = a[u];
            for (i in l) l.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
          } else
            "dangerouslySetInnerHTML" !== u &&
              "children" !== u &&
              "suppressContentEditableWarning" !== u &&
              "suppressHydrationWarning" !== u &&
              "autoFocus" !== u &&
              (le.hasOwnProperty(u)
                ? o || (o = [])
                : (o = o || []).push(u, null));
      for (u in r) {
        var s = r[u];
        if (
          ((l = null != a ? a[u] : void 0),
          r.hasOwnProperty(u) && s !== l && (null != s || null != l))
        )
          if ("style" === u)
            if (l) {
              for (i in l)
                !l.hasOwnProperty(i) ||
                  (s && s.hasOwnProperty(i)) ||
                  (n || (n = {}), (n[i] = ""));
              for (i in s)
                s.hasOwnProperty(i) &&
                  l[i] !== s[i] &&
                  (n || (n = {}), (n[i] = s[i]));
            } else n || (o || (o = []), o.push(u, n)), (n = s);
          else
            "dangerouslySetInnerHTML" === u
              ? ((s = s ? s.__html : void 0),
                (l = l ? l.__html : void 0),
                null != s && l !== s && (o = o || []).push(u, s))
              : "children" === u
              ? ("string" != typeof s && "number" != typeof s) ||
                (o = o || []).push(u, "" + s)
              : "suppressContentEditableWarning" !== u &&
                "suppressHydrationWarning" !== u &&
                (le.hasOwnProperty(u)
                  ? (null != s && "onScroll" === u && Ra("scroll", e),
                    o || l === s || (o = []))
                  : (o = o || []).push(u, s));
      }
      n && (o = o || []).push("style", n);
      var u = o;
      (t.updateQueue = u) && (t.flags |= 4);
    }
  }),
  (Is = function (e, t, n, r) {
    n !== r && (t.flags |= 4);
  });
var Ks = !1,
  Xs = !1,
  Js = "function" == typeof WeakSet ? WeakSet : Set,
  Zs = null;
function eu(e, t) {
  var n = e.ref;
  if (null !== n)
    if ("function" == typeof n)
      try {
        n(null);
      } catch (r) {
        Cc(e, t, r);
      }
    else n.current = null;
}
function tu(e, t, n) {
  try {
    n();
  } catch (r) {
    Cc(e, t, r);
  }
}
var nu = !1;
function ru(e, t, n) {
  var r = t.updateQueue;
  if (null !== (r = null !== r ? r.lastEffect : null)) {
    var a = (r = r.next);
    do {
      if ((a.tag & e) === e) {
        var i = a.destroy;
        (a.destroy = void 0), void 0 !== i && tu(t, n, i);
      }
      a = a.next;
    } while (a !== r);
  }
}
function au(e, t) {
  if (null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function iu(e) {
  var t = e.ref;
  if (null !== t) {
    var n = e.stateNode;
    e.tag, (e = n), "function" == typeof t ? t(e) : (t.current = e);
  }
}
function ou(e) {
  var t = e.alternate;
  null !== t && ((e.alternate = null), ou(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    5 === e.tag &&
      null !== (t = e.stateNode) &&
      (delete t[fi], delete t[hi], delete t[gi], delete t[mi], delete t[yi]),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function lu(e) {
  return 5 === e.tag || 3 === e.tag || 4 === e.tag;
}
function su(e) {
  e: for (;;) {
    for (; null === e.sibling; ) {
      if (null === e.return || lu(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

    ) {
      if (2 & e.flags) continue e;
      if (null === e.child || 4 === e.tag) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(2 & e.flags)) return e.stateNode;
  }
}
function uu(e, t, n) {
  var r = e.tag;
  if (5 === r || 6 === r)
    (e = e.stateNode),
      t
        ? 8 === n.nodeType
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (8 === n.nodeType
            ? (t = n.parentNode).insertBefore(e, n)
            : (t = n).appendChild(e),
          null != (n = n._reactRootContainer) ||
            null !== t.onclick ||
            (t.onclick = Za));
  else if (4 !== r && null !== (e = e.child))
    for (uu(e, t, n), e = e.sibling; null !== e; ) uu(e, t, n), (e = e.sibling);
}
function cu(e, t, n) {
  var r = e.tag;
  if (5 === r || 6 === r)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (4 !== r && null !== (e = e.child))
    for (cu(e, t, n), e = e.sibling; null !== e; ) cu(e, t, n), (e = e.sibling);
}
var du = null,
  fu = !1;
function hu(e, t, n) {
  for (n = n.child; null !== n; ) pu(e, t, n), (n = n.sibling);
}
function pu(e, t, n) {
  if (on && "function" == typeof on.onCommitFiberUnmount)
    try {
      on.onCommitFiberUnmount(an, n);
    } catch (l) {}
  switch (n.tag) {
    case 5:
      Xs || eu(n, t);
    case 6:
      var r = du,
        a = fu;
      (du = null),
        hu(e, t, n),
        (fu = a),
        null !== (du = r) &&
          (fu
            ? ((e = du),
              (n = n.stateNode),
              8 === e.nodeType ? e.parentNode.removeChild(n) : e.removeChild(n))
            : du.removeChild(n.stateNode));
      break;
    case 18:
      null !== du &&
        (fu
          ? ((e = du),
            (n = n.stateNode),
            8 === e.nodeType
              ? si(e.parentNode, n)
              : 1 === e.nodeType && si(e, n),
            Un(e))
          : si(du, n.stateNode));
      break;
    case 4:
      (r = du),
        (a = fu),
        (du = n.stateNode.containerInfo),
        (fu = !0),
        hu(e, t, n),
        (du = r),
        (fu = a);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Xs && null !== (r = n.updateQueue) && null !== (r = r.lastEffect)) {
        a = r = r.next;
        do {
          var i = a,
            o = i.destroy;
          (i = i.tag),
            void 0 !== o && (0 != (2 & i) || 0 != (4 & i)) && tu(n, t, o),
            (a = a.next);
        } while (a !== r);
      }
      hu(e, t, n);
      break;
    case 1:
      if (
        !Xs &&
        (eu(n, t), "function" == typeof (r = n.stateNode).componentWillUnmount)
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (l) {
          Cc(n, t, l);
        }
      hu(e, t, n);
      break;
    case 21:
      hu(e, t, n);
      break;
    case 22:
      1 & n.mode
        ? ((Xs = (r = Xs) || null !== n.memoizedState), hu(e, t, n), (Xs = r))
        : hu(e, t, n);
      break;
    default:
      hu(e, t, n);
  }
}
function gu(e) {
  var t = e.updateQueue;
  if (null !== t) {
    e.updateQueue = null;
    var n = e.stateNode;
    null === n && (n = e.stateNode = new Js()),
      t.forEach(function (t) {
        var r = Tc.bind(null, e, t);
        n.has(t) || (n.add(t), t.then(r, r));
      });
  }
}
function mu(e, t) {
  var n = t.deletions;
  if (null !== n)
    for (var r = 0; r < n.length; r++) {
      var a = n[r];
      try {
        var i = e,
          o = t,
          l = o;
        e: for (; null !== l; ) {
          switch (l.tag) {
            case 5:
              (du = l.stateNode), (fu = !1);
              break e;
            case 3:
            case 4:
              (du = l.stateNode.containerInfo), (fu = !0);
              break e;
          }
          l = l.return;
        }
        if (null === du) throw Error(ie(160));
        pu(i, o, a), (du = null), (fu = !1);
        var s = a.alternate;
        null !== s && (s.return = null), (a.return = null);
      } catch (u) {
        Cc(a, t, u);
      }
    }
  if (12854 & t.subtreeFlags)
    for (t = t.child; null !== t; ) yu(t, e), (t = t.sibling);
}
function yu(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((mu(t, e), vu(e), 4 & r)) {
        try {
          ru(3, e, e.return), au(3, e);
        } catch (g) {
          Cc(e, e.return, g);
        }
        try {
          ru(5, e, e.return);
        } catch (g) {
          Cc(e, e.return, g);
        }
      }
      break;
    case 1:
      mu(t, e), vu(e), 512 & r && null !== n && eu(n, n.return);
      break;
    case 5:
      if (
        (mu(t, e),
        vu(e),
        512 & r && null !== n && eu(n, n.return),
        32 & e.flags)
      ) {
        var a = e.stateNode;
        try {
          ft(a, "");
        } catch (g) {
          Cc(e, e.return, g);
        }
      }
      if (4 & r && null != (a = e.stateNode)) {
        var i = e.memoizedProps,
          o = null !== n ? n.memoizedProps : i,
          l = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), null !== s))
          try {
            "input" === l && "radio" === i.type && null != i.name && Xe(a, i),
              bt(l, o);
            var u = bt(l, i);
            for (o = 0; o < s.length; o += 2) {
              var c = s[o],
                d = s[o + 1];
              "style" === c
                ? mt(a, d)
                : "dangerouslySetInnerHTML" === c
                ? dt(a, d)
                : "children" === c
                ? ft(a, d)
                : be(a, c, d, u);
            }
            switch (l) {
              case "input":
                Je(a, i);
                break;
              case "textarea":
                it(a, i);
                break;
              case "select":
                var f = a._wrapperState.wasMultiple;
                a._wrapperState.wasMultiple = !!i.multiple;
                var h = i.value;
                null != h
                  ? nt(a, !!i.multiple, h, !1)
                  : f !== !!i.multiple &&
                    (null != i.defaultValue
                      ? nt(a, !!i.multiple, i.defaultValue, !0)
                      : nt(a, !!i.multiple, i.multiple ? [] : "", !1));
            }
            a[hi] = i;
          } catch (g) {
            Cc(e, e.return, g);
          }
      }
      break;
    case 6:
      if ((mu(t, e), vu(e), 4 & r)) {
        if (null === e.stateNode) throw Error(ie(162));
        (a = e.stateNode), (i = e.memoizedProps);
        try {
          a.nodeValue = i;
        } catch (g) {
          Cc(e, e.return, g);
        }
      }
      break;
    case 3:
      if (
        (mu(t, e), vu(e), 4 & r && null !== n && n.memoizedState.isDehydrated)
      )
        try {
          Un(t.containerInfo);
        } catch (g) {
          Cc(e, e.return, g);
        }
      break;
    case 4:
    default:
      mu(t, e), vu(e);
      break;
    case 13:
      mu(t, e),
        vu(e),
        8192 & (a = e.child).flags &&
          ((i = null !== a.memoizedState),
          (a.stateNode.isHidden = i),
          !i ||
            (null !== a.alternate && null !== a.alternate.memoizedState) ||
            (ju = Xt())),
        4 & r && gu(e);
      break;
    case 22:
      if (
        ((c = null !== n && null !== n.memoizedState),
        1 & e.mode ? ((Xs = (u = Xs) || c), mu(t, e), (Xs = u)) : mu(t, e),
        vu(e),
        8192 & r)
      ) {
        if (
          ((u = null !== e.memoizedState),
          (e.stateNode.isHidden = u) && !c && 0 != (1 & e.mode))
        )
          for (Zs = e, c = e.child; null !== c; ) {
            for (d = Zs = c; null !== Zs; ) {
              switch (((h = (f = Zs).child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  ru(4, f, f.return);
                  break;
                case 1:
                  eu(f, f.return);
                  var p = f.stateNode;
                  if ("function" == typeof p.componentWillUnmount) {
                    (r = f), (n = f.return);
                    try {
                      (t = r),
                        (p.props = t.memoizedProps),
                        (p.state = t.memoizedState),
                        p.componentWillUnmount();
                    } catch (g) {
                      Cc(r, n, g);
                    }
                  }
                  break;
                case 5:
                  eu(f, f.return);
                  break;
                case 22:
                  if (null !== f.memoizedState) {
                    ku(d);
                    continue;
                  }
              }
              null !== h ? ((h.return = f), (Zs = h)) : ku(d);
            }
            c = c.sibling;
          }
        e: for (c = null, d = e; ; ) {
          if (5 === d.tag) {
            if (null === c) {
              c = d;
              try {
                (a = d.stateNode),
                  u
                    ? "function" == typeof (i = a.style).setProperty
                      ? i.setProperty("display", "none", "important")
                      : (i.display = "none")
                    : ((l = d.stateNode),
                      (o =
                        null != (s = d.memoizedProps.style) &&
                        s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (l.style.display = gt("display", o)));
              } catch (g) {
                Cc(e, e.return, g);
              }
            }
          } else if (6 === d.tag) {
            if (null === c)
              try {
                d.stateNode.nodeValue = u ? "" : d.memoizedProps;
              } catch (g) {
                Cc(e, e.return, g);
              }
          } else if (
            ((22 !== d.tag && 23 !== d.tag) ||
              null === d.memoizedState ||
              d === e) &&
            null !== d.child
          ) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === e) break e;
          for (; null === d.sibling; ) {
            if (null === d.return || d.return === e) break e;
            c === d && (c = null), (d = d.return);
          }
          c === d && (c = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      mu(t, e), vu(e), 4 & r && gu(e);
    case 21:
  }
}
function vu(e) {
  var t = e.flags;
  if (2 & t) {
    try {
      e: {
        for (var n = e.return; null !== n; ) {
          if (lu(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(ie(160));
      }
      switch (r.tag) {
        case 5:
          var a = r.stateNode;
          32 & r.flags && (ft(a, ""), (r.flags &= -33)), cu(e, su(e), a);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo;
          uu(e, su(e), i);
          break;
        default:
          throw Error(ie(161));
      }
    } catch (o) {
      Cc(e, e.return, o);
    }
    e.flags &= -3;
  }
  4096 & t && (e.flags &= -4097);
}
function bu(e, t, n) {
  (Zs = e), wu(e);
}
function wu(e, t, n) {
  for (var r = 0 != (1 & e.mode); null !== Zs; ) {
    var a = Zs,
      i = a.child;
    if (22 === a.tag && r) {
      var o = null !== a.memoizedState || Ks;
      if (!o) {
        var l = a.alternate,
          s = (null !== l && null !== l.memoizedState) || Xs;
        l = Ks;
        var u = Xs;
        if (((Ks = o), (Xs = s) && !u))
          for (Zs = a; null !== Zs; )
            (s = (o = Zs).child),
              22 === o.tag && null !== o.memoizedState
                ? Su(a)
                : null !== s
                ? ((s.return = o), (Zs = s))
                : Su(a);
        for (; null !== i; ) (Zs = i), wu(i), (i = i.sibling);
        (Zs = a), (Ks = l), (Xs = u);
      }
      _u(e);
    } else
      0 != (8772 & a.subtreeFlags) && null !== i
        ? ((i.return = a), (Zs = i))
        : _u(e);
  }
}
function _u(e) {
  for (; null !== Zs; ) {
    var t = Zs;
    if (0 != (8772 & t.flags)) {
      var n = t.alternate;
      try {
        if (0 != (8772 & t.flags))
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Xs || au(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (4 & t.flags && !Xs)
                if (null === n) r.componentDidMount();
                else {
                  var a =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : yo(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    a,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              null !== i && Ro(t, i, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (null !== o) {
                if (((n = null), null !== t.child))
                  switch (t.child.tag) {
                    case 5:
                    case 1:
                      n = t.child.stateNode;
                  }
                Ro(t, o, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (null === n && 4 & t.flags) {
                n = l;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
                }
              }
              break;
            case 6:
            case 4:
            case 12:
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            case 13:
              if (null === t.memoizedState) {
                var u = t.alternate;
                if (null !== u) {
                  var c = u.memoizedState;
                  if (null !== c) {
                    var d = c.dehydrated;
                    null !== d && Un(d);
                  }
                }
              }
              break;
            default:
              throw Error(ie(163));
          }
        Xs || (512 & t.flags && iu(t));
      } catch (f) {
        Cc(t, t.return, f);
      }
    }
    if (t === e) {
      Zs = null;
      break;
    }
    if (null !== (n = t.sibling)) {
      (n.return = t.return), (Zs = n);
      break;
    }
    Zs = t.return;
  }
}
function ku(e) {
  for (; null !== Zs; ) {
    var t = Zs;
    if (t === e) {
      Zs = null;
      break;
    }
    var n = t.sibling;
    if (null !== n) {
      (n.return = t.return), (Zs = n);
      break;
    }
    Zs = t.return;
  }
}
function Su(e) {
  for (; null !== Zs; ) {
    var t = Zs;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            au(4, t);
          } catch (s) {
            Cc(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if ("function" == typeof r.componentDidMount) {
            var a = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              Cc(t, a, s);
            }
          }
          var i = t.return;
          try {
            iu(t);
          } catch (s) {
            Cc(t, i, s);
          }
          break;
        case 5:
          var o = t.return;
          try {
            iu(t);
          } catch (s) {
            Cc(t, o, s);
          }
      }
    } catch (s) {
      Cc(t, t.return, s);
    }
    if (t === e) {
      Zs = null;
      break;
    }
    var l = t.sibling;
    if (null !== l) {
      (l.return = t.return), (Zs = l);
      break;
    }
    Zs = t.return;
  }
}
var xu,
  Cu = Math.ceil,
  Pu = we.ReactCurrentDispatcher,
  qu = we.ReactCurrentOwner,
  Eu = we.ReactCurrentBatchConfig,
  Tu = 0,
  Lu = null,
  Nu = null,
  Ou = 0,
  zu = 0,
  Au = xi(0),
  Iu = 0,
  Bu = null,
  Du = 0,
  Fu = 0,
  Ru = 0,
  Mu = null,
  Vu = null,
  ju = 0,
  Uu = 1 / 0,
  Wu = null,
  Hu = !1,
  Qu = null,
  $u = null,
  Gu = !1,
  Yu = null,
  Ku = 0,
  Xu = 0,
  Ju = null,
  Zu = -1,
  ec = 0;
function tc() {
  return 0 != (6 & Tu) ? Xt() : -1 !== Zu ? Zu : (Zu = Xt());
}
function nc(e) {
  return 0 == (1 & e.mode)
    ? 1
    : 0 != (2 & Tu) && 0 !== Ou
    ? Ou & -Ou
    : null !== mo.transition
    ? (0 === ec && (ec = mn()), ec)
    : 0 !== (e = wn)
    ? e
    : (e = void 0 === (e = window.event) ? 16 : Xn(e.type));
}
function rc(e, t, n, r) {
  if (50 < Xu) throw ((Xu = 0), (Ju = null), Error(ie(185)));
  vn(e, n, r),
    (0 != (2 & Tu) && e === Lu) ||
      (e === Lu && (0 == (2 & Tu) && (Fu |= n), 4 === Iu && sc(e, Ou)),
      ac(e, r),
      1 === n &&
        0 === Tu &&
        0 == (1 & t.mode) &&
        ((Uu = Xt() + 500), Ri && ji()));
}
function ac(e, t) {
  var n = e.callbackNode;
  !(function (e, t) {
    for (
      var n = e.suspendedLanes,
        r = e.pingedLanes,
        a = e.expirationTimes,
        i = e.pendingLanes;
      0 < i;

    ) {
      var o = 31 - ln(i),
        l = 1 << o,
        s = a[o];
      -1 === s
        ? (0 != (l & n) && 0 == (l & r)) || (a[o] = pn(l, t))
        : s <= t && (e.expiredLanes |= l),
        (i &= ~l);
    }
  })(e, t);
  var r = hn(e, e === Lu ? Ou : 0);
  if (0 === r)
    null !== n && Gt(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((null != n && Gt(n), 1 === t))
      0 === e.tag
        ? (function (e) {
            (Ri = !0), Vi(e);
          })(uc.bind(null, e))
        : Vi(uc.bind(null, e)),
        oi(function () {
          0 == (6 & Tu) && ji();
        }),
        (n = null);
    else {
      switch (_n(r)) {
        case 1:
          n = Zt;
          break;
        case 4:
          n = en;
          break;
        case 16:
        default:
          n = tn;
          break;
        case 536870912:
          n = rn;
      }
      n = Lc(n, ic.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function ic(e, t) {
  if (((Zu = -1), (ec = 0), 0 != (6 & Tu))) throw Error(ie(327));
  var n = e.callbackNode;
  if (Sc() && e.callbackNode !== n) return null;
  var r = hn(e, e === Lu ? Ou : 0);
  if (0 === r) return null;
  if (0 != (30 & r) || 0 != (r & e.expiredLanes) || t) t = yc(e, r);
  else {
    t = r;
    var a = Tu;
    Tu |= 2;
    var i = gc();
    for (
      (Lu === e && Ou === t) || ((Wu = null), (Uu = Xt() + 500), hc(e, t));
      ;

    )
      try {
        bc();
        break;
      } catch (l) {
        pc(e, l);
      }
    ko(),
      (Pu.current = i),
      (Tu = a),
      null !== Nu ? (t = 0) : ((Lu = null), (Ou = 0), (t = Iu));
  }
  if (0 !== t) {
    if ((2 === t && 0 !== (a = gn(e)) && ((r = a), (t = oc(e, a))), 1 === t))
      throw ((n = Bu), hc(e, 0), sc(e, r), ac(e, Xt()), n);
    if (6 === t) sc(e, r);
    else {
      if (
        ((a = e.current.alternate),
        0 == (30 & r) &&
          !(function (e) {
            for (var t = e; ; ) {
              if (16384 & t.flags) {
                var n = t.updateQueue;
                if (null !== n && null !== (n = n.stores))
                  for (var r = 0; r < n.length; r++) {
                    var a = n[r],
                      i = a.getSnapshot;
                    a = a.value;
                    try {
                      if (!la(i(), a)) return !1;
                    } catch (o) {
                      return !1;
                    }
                  }
              }
              if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
                (n.return = t), (t = n);
              else {
                if (t === e) break;
                for (; null === t.sibling; ) {
                  if (null === t.return || t.return === e) return !0;
                  t = t.return;
                }
                (t.sibling.return = t.return), (t = t.sibling);
              }
            }
            return !0;
          })(a) &&
          (2 === (t = yc(e, r)) &&
            0 !== (i = gn(e)) &&
            ((r = i), (t = oc(e, i))),
          1 === t))
      )
        throw ((n = Bu), hc(e, 0), sc(e, r), ac(e, Xt()), n);
      switch (((e.finishedWork = a), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(ie(345));
        case 2:
        case 5:
          kc(e, Vu, Wu);
          break;
        case 3:
          if ((sc(e, r), (130023424 & r) === r && 10 < (t = ju + 500 - Xt()))) {
            if (0 !== hn(e, 0)) break;
            if (((a = e.suspendedLanes) & r) !== r) {
              tc(), (e.pingedLanes |= e.suspendedLanes & a);
              break;
            }
            e.timeoutHandle = ri(kc.bind(null, e, Vu, Wu), t);
            break;
          }
          kc(e, Vu, Wu);
          break;
        case 4:
          if ((sc(e, r), (4194240 & r) === r)) break;
          for (t = e.eventTimes, a = -1; 0 < r; ) {
            var o = 31 - ln(r);
            (i = 1 << o), (o = t[o]) > a && (a = o), (r &= ~i);
          }
          if (
            ((r = a),
            10 <
              (r =
                (120 > (r = Xt() - r)
                  ? 120
                  : 480 > r
                  ? 480
                  : 1080 > r
                  ? 1080
                  : 1920 > r
                  ? 1920
                  : 3e3 > r
                  ? 3e3
                  : 4320 > r
                  ? 4320
                  : 1960 * Cu(r / 1960)) - r))
          ) {
            e.timeoutHandle = ri(kc.bind(null, e, Vu, Wu), r);
            break;
          }
          kc(e, Vu, Wu);
          break;
        default:
          throw Error(ie(329));
      }
    }
  }
  return ac(e, Xt()), e.callbackNode === n ? ic.bind(null, e) : null;
}
function oc(e, t) {
  var n = Mu;
  return (
    e.current.memoizedState.isDehydrated && (hc(e, t).flags |= 256),
    2 !== (e = yc(e, t)) && ((t = Vu), (Vu = n), null !== t && lc(t)),
    e
  );
}
function lc(e) {
  null === Vu ? (Vu = e) : Vu.push.apply(Vu, e);
}
function sc(e, t) {
  for (
    t &= ~Ru,
      t &= ~Fu,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - ln(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function uc(e) {
  if (0 != (6 & Tu)) throw Error(ie(327));
  Sc();
  var t = hn(e, 0);
  if (0 == (1 & t)) return ac(e, Xt()), null;
  var n = yc(e, t);
  if (0 !== e.tag && 2 === n) {
    var r = gn(e);
    0 !== r && ((t = r), (n = oc(e, r)));
  }
  if (1 === n) throw ((n = Bu), hc(e, 0), sc(e, t), ac(e, Xt()), n);
  if (6 === n) throw Error(ie(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    kc(e, Vu, Wu),
    ac(e, Xt()),
    null
  );
}
function cc(e, t) {
  var n = Tu;
  Tu |= 1;
  try {
    return e(t);
  } finally {
    0 === (Tu = n) && ((Uu = Xt() + 500), Ri && ji());
  }
}
function dc(e) {
  null !== Yu && 0 === Yu.tag && 0 == (6 & Tu) && Sc();
  var t = Tu;
  Tu |= 1;
  var n = Eu.transition,
    r = wn;
  try {
    if (((Eu.transition = null), (wn = 1), e)) return e();
  } finally {
    (wn = r), (Eu.transition = n), 0 == (6 & (Tu = t)) && ji();
  }
}
function fc() {
  (zu = Au.current), Ci(Au);
}
function hc(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((-1 !== n && ((e.timeoutHandle = -1), ai(n)), null !== Nu))
    for (n = Nu.return; null !== n; ) {
      var r = n;
      switch ((to(r), r.tag)) {
        case 1:
          null != (r = r.type.childContextTypes) && zi();
          break;
        case 3:
          il(), Ci(Ti), Ci(Ei), dl();
          break;
        case 5:
          ll(r);
          break;
        case 4:
          il();
          break;
        case 13:
        case 19:
          Ci(sl);
          break;
        case 10:
          So(r.type._context);
          break;
        case 22:
        case 23:
          fc();
      }
      n = n.return;
    }
  if (
    ((Lu = e),
    (Nu = e = Ac(e.current, null)),
    (Ou = zu = t),
    (Iu = 0),
    (Bu = null),
    (Ru = Fu = Du = 0),
    (Vu = Mu = null),
    null !== qo)
  ) {
    for (t = 0; t < qo.length; t++)
      if (null !== (r = (n = qo[t]).interleaved)) {
        n.interleaved = null;
        var a = r.next,
          i = n.pending;
        if (null !== i) {
          var o = i.next;
          (i.next = a), (r.next = o);
        }
        n.pending = r;
      }
    qo = null;
  }
  return e;
}
function pc(e, t) {
  for (;;) {
    var n = Nu;
    try {
      if ((ko(), (fl.current = os), vl)) {
        for (var r = gl.memoizedState; null !== r; ) {
          var a = r.queue;
          null !== a && (a.pending = null), (r = r.next);
        }
        vl = !1;
      }
      if (
        ((pl = 0),
        (yl = ml = gl = null),
        (bl = !1),
        (wl = 0),
        (qu.current = null),
        null === n || null === n.return)
      ) {
        (Iu = 1), (Bu = t), (Nu = null);
        break;
      }
      e: {
        var i = e,
          o = n.return,
          l = n,
          s = t;
        if (
          ((t = Ou),
          (l.flags |= 32768),
          null !== s && "object" == typeof s && "function" == typeof s.then)
        ) {
          var u = s,
            c = l,
            d = c.tag;
          if (0 == (1 & c.mode) && (0 === d || 11 === d || 15 === d)) {
            var f = c.alternate;
            f
              ? ((c.updateQueue = f.updateQueue),
                (c.memoizedState = f.memoizedState),
                (c.lanes = f.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var h = ys(o);
          if (null !== h) {
            (h.flags &= -257),
              vs(h, o, l, 0, t),
              1 & h.mode && ms(i, u, t),
              (s = u);
            var p = (t = h).updateQueue;
            if (null === p) {
              var g = new Set();
              g.add(s), (t.updateQueue = g);
            } else p.add(s);
            break e;
          }
          if (0 == (1 & t)) {
            ms(i, u, t), mc();
            break e;
          }
          s = Error(ie(426));
        } else if (ao && 1 & l.mode) {
          var m = ys(o);
          if (null !== m) {
            0 == (65536 & m.flags) && (m.flags |= 256),
              vs(m, o, l, 0, t),
              go(cs(s, l));
            break e;
          }
        }
        (i = s = cs(s, l)),
          4 !== Iu && (Iu = 2),
          null === Mu ? (Mu = [i]) : Mu.push(i),
          (i = o);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t), Do(i, ps(0, s, t));
              break e;
            case 1:
              l = s;
              var y = i.type,
                v = i.stateNode;
              if (
                0 == (128 & i.flags) &&
                ("function" == typeof y.getDerivedStateFromError ||
                  (null !== v &&
                    "function" == typeof v.componentDidCatch &&
                    (null === $u || !$u.has(v))))
              ) {
                (i.flags |= 65536),
                  (t &= -t),
                  (i.lanes |= t),
                  Do(i, gs(i, l, t));
                break e;
              }
          }
          i = i.return;
        } while (null !== i);
      }
      _c(n);
    } catch (b) {
      (t = b), Nu === n && null !== n && (Nu = n = n.return);
      continue;
    }
    break;
  }
}
function gc() {
  var e = Pu.current;
  return (Pu.current = os), null === e ? os : e;
}
function mc() {
  (0 !== Iu && 3 !== Iu && 2 !== Iu) || (Iu = 4),
    null === Lu ||
      (0 == (268435455 & Du) && 0 == (268435455 & Fu)) ||
      sc(Lu, Ou);
}
function yc(e, t) {
  var n = Tu;
  Tu |= 2;
  var r = gc();
  for ((Lu === e && Ou === t) || ((Wu = null), hc(e, t)); ; )
    try {
      vc();
      break;
    } catch (a) {
      pc(e, a);
    }
  if ((ko(), (Tu = n), (Pu.current = r), null !== Nu)) throw Error(ie(261));
  return (Lu = null), (Ou = 0), Iu;
}
function vc() {
  for (; null !== Nu; ) wc(Nu);
}
function bc() {
  for (; null !== Nu && !Yt(); ) wc(Nu);
}
function wc(e) {
  var t = xu(e.alternate, e, zu);
  (e.memoizedProps = e.pendingProps),
    null === t ? _c(e) : (Nu = t),
    (qu.current = null);
}
function _c(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), 0 == (32768 & t.flags))) {
      if (null !== (n = Gs(n, t, zu))) return void (Nu = n);
    } else {
      if (null !== (n = Ys(n, t))) return (n.flags &= 32767), void (Nu = n);
      if (null === e) return (Iu = 6), void (Nu = null);
      (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
    }
    if (null !== (t = t.sibling)) return void (Nu = t);
    Nu = t = e;
  } while (null !== t);
  0 === Iu && (Iu = 5);
}
function kc(e, t, n) {
  var r = wn,
    a = Eu.transition;
  try {
    (Eu.transition = null),
      (wn = 1),
      (function (e, t, n, r) {
        do {
          Sc();
        } while (null !== Yu);
        if (0 != (6 & Tu)) throw Error(ie(327));
        n = e.finishedWork;
        var a = e.finishedLanes;
        if (null === n) return null;
        if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
          throw Error(ie(177));
        (e.callbackNode = null), (e.callbackPriority = 0);
        var i = n.lanes | n.childLanes;
        if (
          ((function (e, t) {
            var n = e.pendingLanes & ~t;
            (e.pendingLanes = t),
              (e.suspendedLanes = 0),
              (e.pingedLanes = 0),
              (e.expiredLanes &= t),
              (e.mutableReadLanes &= t),
              (e.entangledLanes &= t),
              (t = e.entanglements);
            var r = e.eventTimes;
            for (e = e.expirationTimes; 0 < n; ) {
              var a = 31 - ln(n),
                i = 1 << a;
              (t[a] = 0), (r[a] = -1), (e[a] = -1), (n &= ~i);
            }
          })(e, i),
          e === Lu && ((Nu = Lu = null), (Ou = 0)),
          (0 == (2064 & n.subtreeFlags) && 0 == (2064 & n.flags)) ||
            Gu ||
            ((Gu = !0),
            Lc(tn, function () {
              return Sc(), null;
            })),
          (i = 0 != (15990 & n.flags)),
          0 != (15990 & n.subtreeFlags) || i)
        ) {
          (i = Eu.transition), (Eu.transition = null);
          var o = wn;
          wn = 1;
          var l = Tu;
          (Tu |= 4),
            (qu.current = null),
            (function (e, t) {
              if (((ei = Hn), ha((e = fa())))) {
                if ("selectionStart" in e)
                  var n = { start: e.selectionStart, end: e.selectionEnd };
                else
                  e: {
                    var r =
                      (n = ((n = e.ownerDocument) && n.defaultView) || window)
                        .getSelection && n.getSelection();
                    if (r && 0 !== r.rangeCount) {
                      n = r.anchorNode;
                      var a = r.anchorOffset,
                        i = r.focusNode;
                      r = r.focusOffset;
                      try {
                        n.nodeType, i.nodeType;
                      } catch (w) {
                        n = null;
                        break e;
                      }
                      var o = 0,
                        l = -1,
                        s = -1,
                        u = 0,
                        c = 0,
                        d = e,
                        f = null;
                      t: for (;;) {
                        for (
                          var h;
                          d !== n ||
                            (0 !== a && 3 !== d.nodeType) ||
                            (l = o + a),
                            d !== i ||
                              (0 !== r && 3 !== d.nodeType) ||
                              (s = o + r),
                            3 === d.nodeType && (o += d.nodeValue.length),
                            null !== (h = d.firstChild);

                        )
                          (f = d), (d = h);
                        for (;;) {
                          if (d === e) break t;
                          if (
                            (f === n && ++u === a && (l = o),
                            f === i && ++c === r && (s = o),
                            null !== (h = d.nextSibling))
                          )
                            break;
                          f = (d = f).parentNode;
                        }
                        d = h;
                      }
                      n = -1 === l || -1 === s ? null : { start: l, end: s };
                    } else n = null;
                  }
                n = n || { start: 0, end: 0 };
              } else n = null;
              for (
                ti = { focusedElem: e, selectionRange: n }, Hn = !1, Zs = t;
                null !== Zs;

              )
                if (
                  ((e = (t = Zs).child),
                  0 != (1028 & t.subtreeFlags) && null !== e)
                )
                  (e.return = t), (Zs = e);
                else
                  for (; null !== Zs; ) {
                    t = Zs;
                    try {
                      var p = t.alternate;
                      if (0 != (1024 & t.flags))
                        switch (t.tag) {
                          case 0:
                          case 11:
                          case 15:
                          case 5:
                          case 6:
                          case 4:
                          case 17:
                            break;
                          case 1:
                            if (null !== p) {
                              var g = p.memoizedProps,
                                m = p.memoizedState,
                                y = t.stateNode,
                                v = y.getSnapshotBeforeUpdate(
                                  t.elementType === t.type ? g : yo(t.type, g),
                                  m
                                );
                              y.__reactInternalSnapshotBeforeUpdate = v;
                            }
                            break;
                          case 3:
                            var b = t.stateNode.containerInfo;
                            1 === b.nodeType
                              ? (b.textContent = "")
                              : 9 === b.nodeType &&
                                b.documentElement &&
                                b.removeChild(b.documentElement);
                            break;
                          default:
                            throw Error(ie(163));
                        }
                    } catch (w) {
                      Cc(t, t.return, w);
                    }
                    if (null !== (e = t.sibling)) {
                      (e.return = t.return), (Zs = e);
                      break;
                    }
                    Zs = t.return;
                  }
              (p = nu), (nu = !1);
            })(e, n),
            yu(n, e),
            pa(ti),
            (Hn = !!ei),
            (ti = ei = null),
            (e.current = n),
            bu(n),
            Kt(),
            (Tu = l),
            (wn = o),
            (Eu.transition = i);
        } else e.current = n;
        if (
          (Gu && ((Gu = !1), (Yu = e), (Ku = a)),
          0 === (i = e.pendingLanes) && ($u = null),
          (function (e) {
            if (on && "function" == typeof on.onCommitFiberRoot)
              try {
                on.onCommitFiberRoot(
                  an,
                  e,
                  void 0,
                  128 == (128 & e.current.flags)
                );
              } catch (t) {}
          })(n.stateNode),
          ac(e, Xt()),
          null !== t)
        )
          for (r = e.onRecoverableError, n = 0; n < t.length; n++)
            r((a = t[n]).value, { componentStack: a.stack, digest: a.digest });
        if (Hu) throw ((Hu = !1), (e = Qu), (Qu = null), e);
        0 != (1 & Ku) && 0 !== e.tag && Sc(),
          0 != (1 & (i = e.pendingLanes))
            ? e === Ju
              ? Xu++
              : ((Xu = 0), (Ju = e))
            : (Xu = 0),
          ji();
      })(e, t, n, r);
  } finally {
    (Eu.transition = a), (wn = r);
  }
  return null;
}
function Sc() {
  if (null !== Yu) {
    var e = _n(Ku),
      t = Eu.transition,
      n = wn;
    try {
      if (((Eu.transition = null), (wn = 16 > e ? 16 : e), null === Yu))
        var r = !1;
      else {
        if (((e = Yu), (Yu = null), (Ku = 0), 0 != (6 & Tu)))
          throw Error(ie(331));
        var a = Tu;
        for (Tu |= 4, Zs = e.current; null !== Zs; ) {
          var i = Zs,
            o = i.child;
          if (0 != (16 & Zs.flags)) {
            var l = i.deletions;
            if (null !== l) {
              for (var s = 0; s < l.length; s++) {
                var u = l[s];
                for (Zs = u; null !== Zs; ) {
                  var c = Zs;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ru(8, c, i);
                  }
                  var d = c.child;
                  if (null !== d) (d.return = c), (Zs = d);
                  else
                    for (; null !== Zs; ) {
                      var f = (c = Zs).sibling,
                        h = c.return;
                      if ((ou(c), c === u)) {
                        Zs = null;
                        break;
                      }
                      if (null !== f) {
                        (f.return = h), (Zs = f);
                        break;
                      }
                      Zs = h;
                    }
                }
              }
              var p = i.alternate;
              if (null !== p) {
                var g = p.child;
                if (null !== g) {
                  p.child = null;
                  do {
                    var m = g.sibling;
                    (g.sibling = null), (g = m);
                  } while (null !== g);
                }
              }
              Zs = i;
            }
          }
          if (0 != (2064 & i.subtreeFlags) && null !== o)
            (o.return = i), (Zs = o);
          else
            e: for (; null !== Zs; ) {
              if (0 != (2048 & (i = Zs).flags))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    ru(9, i, i.return);
                }
              var y = i.sibling;
              if (null !== y) {
                (y.return = i.return), (Zs = y);
                break e;
              }
              Zs = i.return;
            }
        }
        var v = e.current;
        for (Zs = v; null !== Zs; ) {
          var b = (o = Zs).child;
          if (0 != (2064 & o.subtreeFlags) && null !== b)
            (b.return = o), (Zs = b);
          else
            e: for (o = v; null !== Zs; ) {
              if (0 != (2048 & (l = Zs).flags))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      au(9, l);
                  }
                } catch (_) {
                  Cc(l, l.return, _);
                }
              if (l === o) {
                Zs = null;
                break e;
              }
              var w = l.sibling;
              if (null !== w) {
                (w.return = l.return), (Zs = w);
                break e;
              }
              Zs = l.return;
            }
        }
        if (
          ((Tu = a), ji(), on && "function" == typeof on.onPostCommitFiberRoot)
        )
          try {
            on.onPostCommitFiberRoot(an, e);
          } catch (_) {}
        r = !0;
      }
      return r;
    } finally {
      (wn = n), (Eu.transition = t);
    }
  }
  return !1;
}
function xc(e, t, n) {
  (e = Io(e, (t = ps(0, (t = cs(n, t)), 1)), 1)),
    (t = tc()),
    null !== e && (vn(e, 1, t), ac(e, t));
}
function Cc(e, t, n) {
  if (3 === e.tag) xc(e, e, n);
  else
    for (; null !== t; ) {
      if (3 === t.tag) {
        xc(t, e, n);
        break;
      }
      if (1 === t.tag) {
        var r = t.stateNode;
        if (
          "function" == typeof t.type.getDerivedStateFromError ||
          ("function" == typeof r.componentDidCatch &&
            (null === $u || !$u.has(r)))
        ) {
          (t = Io(t, (e = gs(t, (e = cs(n, e)), 1)), 1)),
            (e = tc()),
            null !== t && (vn(t, 1, e), ac(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Pc(e, t, n) {
  var r = e.pingCache;
  null !== r && r.delete(t),
    (t = tc()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Lu === e &&
      (Ou & n) === n &&
      (4 === Iu || (3 === Iu && (130023424 & Ou) === Ou && 500 > Xt() - ju)
        ? hc(e, 0)
        : (Ru |= n)),
    ac(e, t);
}
function qc(e, t) {
  0 === t &&
    (0 == (1 & e.mode)
      ? (t = 1)
      : ((t = dn), 0 == (130023424 & (dn <<= 1)) && (dn = 4194304)));
  var n = tc();
  null !== (e = Lo(e, t)) && (vn(e, t, n), ac(e, n));
}
function Ec(e) {
  var t = e.memoizedState,
    n = 0;
  null !== t && (n = t.retryLane), qc(e, n);
}
function Tc(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        a = e.memoizedState;
      null !== a && (n = a.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(ie(314));
  }
  null !== r && r.delete(t), qc(e, n);
}
function Lc(e, t) {
  return $t(e, t);
}
function Nc(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Oc(e, t, n, r) {
  return new Nc(e, t, n, r);
}
function zc(e) {
  return !(!(e = e.prototype) || !e.isReactComponent);
}
function Ac(e, t) {
  var n = e.alternate;
  return (
    null === n
      ? (((n = Oc(e.tag, t, e.key, e.mode)).elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = 14680064 & e.flags),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      null === t ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Ic(e, t, n, r, a, i) {
  var o = 2;
  if (((r = e), "function" == typeof e)) zc(e) && (o = 1);
  else if ("string" == typeof e) o = 5;
  else
    e: switch (e) {
      case Se:
        return Bc(n.children, a, i, t);
      case xe:
        (o = 8), (a |= 8);
        break;
      case Ce:
        return ((e = Oc(12, n, t, 2 | a)).elementType = Ce), (e.lanes = i), e;
      case Te:
        return ((e = Oc(13, n, t, a)).elementType = Te), (e.lanes = i), e;
      case Le:
        return ((e = Oc(19, n, t, a)).elementType = Le), (e.lanes = i), e;
      case ze:
        return Dc(n, a, i, t);
      default:
        if ("object" == typeof e && null !== e)
          switch (e.$$typeof) {
            case Pe:
              o = 10;
              break e;
            case qe:
              o = 9;
              break e;
            case Ee:
              o = 11;
              break e;
            case Ne:
              o = 14;
              break e;
            case Oe:
              (o = 16), (r = null);
              break e;
          }
        throw Error(ie(130, null == e ? e : typeof e, ""));
    }
  return ((t = Oc(o, n, t, a)).elementType = e), (t.type = r), (t.lanes = i), t;
}
function Bc(e, t, n, r) {
  return ((e = Oc(7, e, r, t)).lanes = n), e;
}
function Dc(e, t, n, r) {
  return (
    ((e = Oc(22, e, r, t)).elementType = ze),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Fc(e, t, n) {
  return ((e = Oc(6, e, null, t)).lanes = n), e;
}
function Rc(e, t, n) {
  return (
    ((t = Oc(4, null !== e.children ? e.children : [], e.key, t)).lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Mc(e, t, n, r, a) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = yn(0)),
    (this.expirationTimes = yn(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = yn(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = a),
    (this.mutableSourceEagerHydrationData = null);
}
function Vc(e, t, n, r, a, i, o, l, s) {
  return (
    (e = new Mc(e, t, n, l, s)),
    1 === t ? ((t = 1), !0 === i && (t |= 8)) : (t = 0),
    (i = Oc(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Oo(i),
    e
  );
}
function jc(e) {
  if (!e) return qi;
  e: {
    if (jt((e = e._reactInternals)) !== e || 1 !== e.tag) throw Error(ie(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Oi(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (null !== t);
    throw Error(ie(171));
  }
  if (1 === e.tag) {
    var n = e.type;
    if (Oi(n)) return Ii(e, n, t);
  }
  return t;
}
function Uc(e, t, n, r, a, i, o, l, s) {
  return (
    ((e = Vc(n, r, !0, e, 0, i, 0, l, s)).context = jc(null)),
    (n = e.current),
    ((i = Ao((r = tc()), (a = nc(n)))).callback = null != t ? t : null),
    Io(n, i, a),
    (e.current.lanes = a),
    vn(e, a, r),
    ac(e, r),
    e
  );
}
function Wc(e, t, n, r) {
  var a = t.current,
    i = tc(),
    o = nc(a);
  return (
    (n = jc(n)),
    null === t.context ? (t.context = n) : (t.pendingContext = n),
    ((t = Ao(i, o)).payload = { element: e }),
    null !== (r = void 0 === r ? null : r) && (t.callback = r),
    null !== (e = Io(a, t, o)) && (rc(e, a, o, i), Bo(e, a, o)),
    o
  );
}
function Hc(e) {
  return (e = e.current).child ? (e.child.tag, e.child.stateNode) : null;
}
function Qc(e, t) {
  if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
    var n = e.retryLane;
    e.retryLane = 0 !== n && n < t ? n : t;
  }
}
function $c(e, t) {
  Qc(e, t), (e = e.alternate) && Qc(e, t);
}
xu = function (e, t, n) {
  if (null !== e)
    if (e.memoizedProps !== t.pendingProps || Ti.current) ws = !0;
    else {
      if (0 == (e.lanes & n) && 0 == (128 & t.flags))
        return (
          (ws = !1),
          (function (e, t, n) {
            switch (t.tag) {
              case 3:
                Ls(t), po();
                break;
              case 5:
                ol(t);
                break;
              case 1:
                Oi(t.type) && Bi(t);
                break;
              case 4:
                al(t, t.stateNode.containerInfo);
                break;
              case 10:
                var r = t.type._context,
                  a = t.memoizedProps.value;
                Pi(vo, r._currentValue), (r._currentValue = a);
                break;
              case 13:
                if (null !== (r = t.memoizedState))
                  return null !== r.dehydrated
                    ? (Pi(sl, 1 & sl.current), (t.flags |= 128), null)
                    : 0 != (n & t.child.childLanes)
                    ? Fs(e, t, n)
                    : (Pi(sl, 1 & sl.current),
                      null !== (e = Hs(e, t, n)) ? e.sibling : null);
                Pi(sl, 1 & sl.current);
                break;
              case 19:
                if (((r = 0 != (n & t.childLanes)), 0 != (128 & e.flags))) {
                  if (r) return Us(e, t, n);
                  t.flags |= 128;
                }
                if (
                  (null !== (a = t.memoizedState) &&
                    ((a.rendering = null),
                    (a.tail = null),
                    (a.lastEffect = null)),
                  Pi(sl, sl.current),
                  r)
                )
                  break;
                return null;
              case 22:
              case 23:
                return (t.lanes = 0), Cs(e, t, n);
            }
            return Hs(e, t, n);
          })(e, t, n)
        );
      ws = 0 != (131072 & e.flags);
    }
  else (ws = !1), ao && 0 != (1048576 & t.flags) && Zi(t, Qi, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Ws(e, t), (e = t.pendingProps);
      var a = Ni(t, Ei.current);
      Co(t, n), (a = xl(null, t, r, e, a, n));
      var i = Cl();
      return (
        (t.flags |= 1),
        "object" == typeof a &&
        null !== a &&
        "function" == typeof a.render &&
        void 0 === a.$$typeof
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Oi(r) ? ((i = !0), Bi(t)) : (i = !1),
            (t.memoizedState =
              null !== a.state && void 0 !== a.state ? a.state : null),
            Oo(t),
            (a.updater = jo),
            (t.stateNode = a),
            (a._reactInternals = t),
            Qo(t, r, e, n),
            (t = Ts(null, t, r, !0, i, n)))
          : ((t.tag = 0), ao && i && eo(t), _s(null, t, a, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Ws(e, t),
          (e = t.pendingProps),
          (r = (a = r._init)(r._payload)),
          (t.type = r),
          (a = t.tag =
            (function (e) {
              if ("function" == typeof e) return zc(e) ? 1 : 0;
              if (null != e) {
                if ((e = e.$$typeof) === Ee) return 11;
                if (e === Ne) return 14;
              }
              return 2;
            })(r)),
          (e = yo(r, e)),
          a)
        ) {
          case 0:
            t = qs(null, t, r, e, n);
            break e;
          case 1:
            t = Es(null, t, r, e, n);
            break e;
          case 11:
            t = ks(null, t, r, e, n);
            break e;
          case 14:
            t = Ss(null, t, r, yo(r.type, e), n);
            break e;
        }
        throw Error(ie(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (a = t.pendingProps),
        qs(e, t, r, (a = t.elementType === r ? a : yo(r, a)), n)
      );
    case 1:
      return (
        (r = t.type),
        (a = t.pendingProps),
        Es(e, t, r, (a = t.elementType === r ? a : yo(r, a)), n)
      );
    case 3:
      e: {
        if ((Ls(t), null === e)) throw Error(ie(387));
        (r = t.pendingProps),
          (a = (i = t.memoizedState).element),
          zo(e, t),
          Fo(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), i.isDehydrated)) {
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            256 & t.flags)
          ) {
            t = Ns(e, t, r, n, (a = cs(Error(ie(423)), t)));
            break e;
          }
          if (r !== a) {
            t = Ns(e, t, r, n, (a = cs(Error(ie(424)), t)));
            break e;
          }
          for (
            ro = ui(t.stateNode.containerInfo.firstChild),
              no = t,
              ao = !0,
              io = null,
              n = Jo(t, null, r, n),
              t.child = n;
            n;

          )
            (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
        } else {
          if ((po(), r === a)) {
            t = Hs(e, t, n);
            break e;
          }
          _s(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        ol(t),
        null === e && uo(t),
        (r = t.type),
        (a = t.pendingProps),
        (i = null !== e ? e.memoizedProps : null),
        (o = a.children),
        ni(r, a) ? (o = null) : null !== i && ni(r, i) && (t.flags |= 32),
        Ps(e, t),
        _s(e, t, o, n),
        t.child
      );
    case 6:
      return null === e && uo(t), null;
    case 13:
      return Fs(e, t, n);
    case 4:
      return (
        al(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        null === e ? (t.child = Xo(t, null, r, n)) : _s(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (a = t.pendingProps),
        ks(e, t, r, (a = t.elementType === r ? a : yo(r, a)), n)
      );
    case 7:
      return _s(e, t, t.pendingProps, n), t.child;
    case 8:
    case 12:
      return _s(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (a = t.pendingProps),
          (i = t.memoizedProps),
          (o = a.value),
          Pi(vo, r._currentValue),
          (r._currentValue = o),
          null !== i)
        )
          if (la(i.value, o)) {
            if (i.children === a.children && !Ti.current) {
              t = Hs(e, t, n);
              break e;
            }
          } else
            for (null !== (i = t.child) && (i.return = t); null !== i; ) {
              var l = i.dependencies;
              if (null !== l) {
                o = i.child;
                for (var s = l.firstContext; null !== s; ) {
                  if (s.context === r) {
                    if (1 === i.tag) {
                      (s = Ao(-1, n & -n)).tag = 2;
                      var u = i.updateQueue;
                      if (null !== u) {
                        var c = (u = u.shared).pending;
                        null === c
                          ? (s.next = s)
                          : ((s.next = c.next), (c.next = s)),
                          (u.pending = s);
                      }
                    }
                    (i.lanes |= n),
                      null !== (s = i.alternate) && (s.lanes |= n),
                      xo(i.return, n, t),
                      (l.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (10 === i.tag) o = i.type === t.type ? null : i.child;
              else if (18 === i.tag) {
                if (null === (o = i.return)) throw Error(ie(341));
                (o.lanes |= n),
                  null !== (l = o.alternate) && (l.lanes |= n),
                  xo(o, n, t),
                  (o = i.sibling);
              } else o = i.child;
              if (null !== o) o.return = i;
              else
                for (o = i; null !== o; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (null !== (i = o.sibling)) {
                    (i.return = o.return), (o = i);
                    break;
                  }
                  o = o.return;
                }
              i = o;
            }
        _s(e, t, a.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (a = t.type),
        (r = t.pendingProps.children),
        Co(t, n),
        (r = r((a = Po(a)))),
        (t.flags |= 1),
        _s(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (a = yo((r = t.type), t.pendingProps)),
        Ss(e, t, r, (a = yo(r.type, a)), n)
      );
    case 15:
      return xs(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (a = t.pendingProps),
        (a = t.elementType === r ? a : yo(r, a)),
        Ws(e, t),
        (t.tag = 1),
        Oi(r) ? ((e = !0), Bi(t)) : (e = !1),
        Co(t, n),
        Wo(t, r, a),
        Qo(t, r, a, n),
        Ts(null, t, r, !0, e, n)
      );
    case 19:
      return Us(e, t, n);
    case 22:
      return Cs(e, t, n);
  }
  throw Error(ie(156, t.tag));
};
var Gc =
  "function" == typeof reportError
    ? reportError
    : function (e) {
        console.error(e);
      };
function Yc(e) {
  this._internalRoot = e;
}
function Kc(e) {
  this._internalRoot = e;
}
function Xc(e) {
  return !(!e || (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType));
}
function Jc(e) {
  return !(
    !e ||
    (1 !== e.nodeType &&
      9 !== e.nodeType &&
      11 !== e.nodeType &&
      (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue))
  );
}
function Zc() {}
function ed(e, t, n, r, a) {
  var i = n._reactRootContainer;
  if (i) {
    var o = i;
    if ("function" == typeof a) {
      var l = a;
      a = function () {
        var e = Hc(o);
        l.call(e);
      };
    }
    Wc(t, o, e, a);
  } else
    o = (function (e, t, n, r, a) {
      if (a) {
        if ("function" == typeof r) {
          var i = r;
          r = function () {
            var e = Hc(o);
            i.call(e);
          };
        }
        var o = Uc(t, r, e, 0, null, !1, 0, "", Zc);
        return (
          (e._reactRootContainer = o),
          (e[pi] = o.current),
          ja(8 === e.nodeType ? e.parentNode : e),
          dc(),
          o
        );
      }
      for (; (a = e.lastChild); ) e.removeChild(a);
      if ("function" == typeof r) {
        var l = r;
        r = function () {
          var e = Hc(s);
          l.call(e);
        };
      }
      var s = Vc(e, 0, !1, null, 0, !1, 0, "", Zc);
      return (
        (e._reactRootContainer = s),
        (e[pi] = s.current),
        ja(8 === e.nodeType ? e.parentNode : e),
        dc(function () {
          Wc(t, s, n, r);
        }),
        s
      );
    })(n, t, e, a, r);
  return Hc(o);
}
(Kc.prototype.render = Yc.prototype.render =
  function (e) {
    var t = this._internalRoot;
    if (null === t) throw Error(ie(409));
    Wc(e, t, null, null);
  }),
  (Kc.prototype.unmount = Yc.prototype.unmount =
    function () {
      var e = this._internalRoot;
      if (null !== e) {
        this._internalRoot = null;
        var t = e.containerInfo;
        dc(function () {
          Wc(null, e, null, null);
        }),
          (t[pi] = null);
      }
    }),
  (Kc.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Cn();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < An.length && 0 !== t && t < An[n].priority; n++);
      An.splice(n, 0, e), 0 === n && Fn(e);
    }
  }),
  (kn = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = fn(t.pendingLanes);
          0 !== n &&
            (bn(t, 1 | n),
            ac(t, Xt()),
            0 == (6 & Tu) && ((Uu = Xt() + 500), ji()));
        }
        break;
      case 13:
        dc(function () {
          var t = Lo(e, 1);
          if (null !== t) {
            var n = tc();
            rc(t, e, 1, n);
          }
        }),
          $c(e, 1);
    }
  }),
  (Sn = function (e) {
    if (13 === e.tag) {
      var t = Lo(e, 134217728);
      null !== t && rc(t, e, 134217728, tc()), $c(e, 134217728);
    }
  }),
  (xn = function (e) {
    if (13 === e.tag) {
      var t = nc(e),
        n = Lo(e, t);
      null !== n && rc(n, e, t, tc()), $c(e, t);
    }
  }),
  (Cn = function () {
    return wn;
  }),
  (Pn = function (e, t) {
    var n = wn;
    try {
      return (wn = e), t();
    } finally {
      wn = n;
    }
  }),
  (kt = function (e, t, n) {
    switch (t) {
      case "input":
        if ((Je(e, n), (t = n.name), "radio" === n.type && null != t)) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (
            n = n.querySelectorAll(
              "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
            ),
              t = 0;
            t < n.length;
            t++
          ) {
            var r = n[t];
            if (r !== e && r.form === e.form) {
              var a = _i(r);
              if (!a) throw Error(ie(90));
              $e(r), Je(r, a);
            }
          }
        }
        break;
      case "textarea":
        it(e, n);
        break;
      case "select":
        null != (t = n.value) && nt(e, !!n.multiple, t, !1);
    }
  }),
  (Et = cc),
  (Tt = dc);
var td = { usingClientEntryPoint: !1, Events: [bi, wi, _i, Pt, qt, cc] },
  nd = {
    findFiberByHostInstance: vi,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  rd = {
    bundleType: nd.bundleType,
    version: nd.version,
    rendererPackageName: nd.rendererPackageName,
    rendererConfig: nd.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: we.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return null === (e = Ht(e)) ? null : e.stateNode;
    },
    findFiberByHostInstance:
      nd.findFiberByHostInstance ||
      function () {
        return null;
      },
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
  var ad = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ad.isDisabled && ad.supportsFiber)
    try {
      (an = ad.inject(rd)), (on = ad);
    } catch (ct) {}
}
(Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = td),
  (Z.createPortal = function (e, t) {
    var n =
      2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
    if (!Xc(t)) throw Error(ie(200));
    return (function (e, t, n) {
      var r =
        3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
      return {
        $$typeof: ke,
        key: null == r ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n,
      };
    })(e, t, null, n);
  }),
  (Z.createRoot = function (e, t) {
    if (!Xc(e)) throw Error(ie(299));
    var n = !1,
      r = "",
      a = Gc;
    return (
      null != t &&
        (!0 === t.unstable_strictMode && (n = !0),
        void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
        void 0 !== t.onRecoverableError && (a = t.onRecoverableError)),
      (t = Vc(e, 1, !1, null, 0, n, 0, r, a)),
      (e[pi] = t.current),
      ja(8 === e.nodeType ? e.parentNode : e),
      new Yc(t)
    );
  }),
  (Z.findDOMNode = function (e) {
    if (null == e) return null;
    if (1 === e.nodeType) return e;
    var t = e._reactInternals;
    if (void 0 === t) {
      if ("function" == typeof e.render) throw Error(ie(188));
      throw ((e = Object.keys(e).join(",")), Error(ie(268, e)));
    }
    return null === (e = Ht(t)) ? null : e.stateNode;
  }),
  (Z.flushSync = function (e) {
    return dc(e);
  }),
  (Z.hydrate = function (e, t, n) {
    if (!Jc(t)) throw Error(ie(200));
    return ed(null, e, t, !0, n);
  }),
  (Z.hydrateRoot = function (e, t, n) {
    if (!Xc(e)) throw Error(ie(405));
    var r = (null != n && n.hydratedSources) || null,
      a = !1,
      i = "",
      o = Gc;
    if (
      (null != n &&
        (!0 === n.unstable_strictMode && (a = !0),
        void 0 !== n.identifierPrefix && (i = n.identifierPrefix),
        void 0 !== n.onRecoverableError && (o = n.onRecoverableError)),
      (t = Uc(t, null, e, 1, null != n ? n : null, a, 0, i, o)),
      (e[pi] = t.current),
      ja(e),
      r)
    )
      for (e = 0; e < r.length; e++)
        (a = (a = (n = r[e])._getVersion)(n._source)),
          null == t.mutableSourceEagerHydrationData
            ? (t.mutableSourceEagerHydrationData = [n, a])
            : t.mutableSourceEagerHydrationData.push(n, a);
    return new Kc(t);
  }),
  (Z.render = function (e, t, n) {
    if (!Jc(t)) throw Error(ie(200));
    return ed(null, e, t, !1, n);
  }),
  (Z.unmountComponentAtNode = function (e) {
    if (!Jc(e)) throw Error(ie(40));
    return (
      !!e._reactRootContainer &&
      (dc(function () {
        ed(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[pi] = null);
        });
      }),
      !0)
    );
  }),
  (Z.unstable_batchedUpdates = cc),
  (Z.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
    if (!Jc(n)) throw Error(ie(200));
    if (null == e || void 0 === e._reactInternals) throw Error(ie(38));
    return ed(e, t, n, !1, r);
  }),
  (Z.version = "18.2.0-next-9e3b772b8-20220608"),
  (function e() {
    if (
      "undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
      "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
      } catch (t) {
        console.error(t);
      }
  })(),
  (J.exports = Z);
var id = J.exports;
(X.createRoot = id.createRoot), (X.hydrateRoot = id.hydrateRoot);
var od = { exports: {} };
function ld() {}
function sd() {}
(sd.resetWarningCache = ld),
  (od.exports = (function () {
    function e(e, t, n, r, a, i) {
      if ("SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED" !== i) {
        var o = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw ((o.name = "Invariant Violation"), o);
      }
    }
    function t() {
      return e;
    }
    e.isRequired = e;
    var n = {
      array: e,
      bigint: e,
      bool: e,
      func: e,
      number: e,
      object: e,
      string: e,
      symbol: e,
      any: e,
      arrayOf: t,
      element: e,
      elementType: e,
      instanceOf: t,
      node: e,
      objectOf: t,
      oneOf: t,
      oneOfType: t,
      shape: t,
      exact: t,
      checkPropTypes: sd,
      resetWarningCache: ld,
    };
    return (n.PropTypes = n), n;
  })());
const ud = t(od.exports),
  cd = class {
    static resizeScreen(e) {
      this._isPortraitOrientation = this.checkIsPortraitOrientation();
      const t = this._isPortraitOrientation
        ? this.calculateVerticalScaleFactor()
        : this.calculateHorizontalScaleFactor();
      this.resizeGame(e, t);
    }
    static calculateHorizontalScaleFactor() {
      return Math.min(window.innerWidth / fd, window.innerHeight / hd);
    }
    static calculateVerticalScaleFactor() {
      return Math.min(window.innerHeight / gd, window.innerWidth / pd);
    }
    static checkIsPortraitOrientation() {
      return window.innerWidth / window.innerHeight <= 1;
    }
    static get isPortraitOrientation() {
      return this._isPortraitOrientation;
    }
    static resizeGame(e, t) {}
    static resizeUI(e, t) {
      const n = this._isPortraitOrientation ? pd : fd,
        r = this._isPortraitOrientation ? gd : hd,
        a = (window.innerHeight - r * t) / 2,
        i = (window.innerWidth - n * t) / 2;
      e.resize({
        width: `${n}px`,
        height: `${r}px`,
        left: `${i}px`,
        top: `${a}px`,
        transform: `scale(${t})`,
      });
    }
  };
((t, n, r) => {
  n in t
    ? e(t, n, { enumerable: !0, configurable: !0, writable: !0, value: r })
    : (t[n] = r);
})(cd, "_isPortraitOrientation" + "", cd.checkIsPortraitOrientation());
let dd = cd;
const fd = 1668,
  hd = 1250,
  pd = 1668,
  gd = 1250,
  md = dd._isPortraitOrientation ? pd : fd,
  yd = dd._isPortraitOrientation ? gd : hd,
  vd = {
    lvl_1: {
      lvl: 1,
      worldCollision: { type: "wall", x: 815, y: 615 },
      background: { image: "background_lvl_1", x: md / 2, y: yd / 2 },
      platform: { image: "background_platform_lvl_1", x: md / 2, y: yd / 2 },
      overlay: null,
      ball: { type: "ball", image: "ball", x: 350, y: 910 },
      hole: { type: "hole", image: "hole", x: 1024, y: 266 },
      sand: { lvl: 1, type: "sand", image: "sand_map_1", x: 1090, y: 557 },
    },
    lvl_2: {
      lvl: 2,
      worldCollision: { type: "wall", x: 808, y: 620 },
      background: { image: "background_lvl_2", x: md / 2, y: yd / 2 },
      platform: { image: "background_platform_lvl_2", x: md / 2, y: yd / 2 },
      overlay: { image: "overlay_2", x: md / 2, y: yd / 2 },
      ball: { type: "ball", image: "ball", x: 1397, y: 1036 },
      hole: { type: "hole", image: "hole", x: 369, y: 598 },
      sand: { lvl: 2, type: "sand", image: "sand_map_2", x: 834, y: 463 },
    },
    lvl_3: {
      lvl: 3,
      worldCollision: { type: "wall", x: 807, y: 548 },
      background: { image: "background_lvl_3", x: md / 2, y: yd / 2 },
      platform: { image: "background_platform_lvl_3", x: md / 2, y: yd / 2 },
      overlay: { image: "overlay_3", x: md / 2, y: yd / 2 },
      ball: { type: "ball", image: "ball", x: 994, y: 251 },
      hole: { type: "hole", image: "hole", x: 371, y: 960 },
      sand: { lvl: 3, type: "sand", image: "sand_map_3", x: 919, y: 685 },
    },
    lvl_4: {
      lvl: 4,
      worldCollision: { type: "wall", x: 770, y: 645 },
      background: { image: "background_lvl_4", x: md / 2, y: yd / 2 },
      platform: { image: "background_platform_lvl_4", x: md / 2, y: yd / 2 },
      overlay: null,
      ball: { type: "ball", image: "ball", x: 224, y: 592 },
      hole: { type: "hole", image: "hole", x: 1141, y: 211 },
      sand: { lvl: 4, type: "sand", image: "sand_map_4", x: 1056, y: 677 },
    },
    lvl_5: {
      lvl: 5,
      worldCollision: { type: "wall", x: 850, y: 580 },
      background: { image: "background_lvl_5", x: md / 2, y: yd / 2 },
      platform: { image: "background_platform_lvl_5", x: md / 2, y: yd / 2 },
      overlay: { image: "overlay_5", x: md / 2, y: yd / 2 },
      ball: { type: "ball", image: "ball", x: 1216, y: 222 },
      hole: { type: "hole", image: "hole", x: 1219, y: 698 },
      sand: { lvl: 5, type: "sand", image: "sand_map_5", x: 561, y: 661 },
    },
    lvl_6: {
      lvl: 6,
      worldCollision: { type: "wall", x: 770, y: 570 },
      background: { image: "background_lvl_6", x: md / 2, y: yd / 2 },
      platform: { image: "background_platform_lvl_6", x: md / 2, y: yd / 2 },
      overlay: null,
      ball: { type: "ball", image: "ball", x: 346, y: 564 },
      hole: { type: "hole", image: "hole", x: 1445, y: 648 },
      sand: { type: "sand" },
    },
    lvl_7: {
      lvl: 7,
      worldCollision: { type: "wall", x: 790, y: 655 },
      background: { image: "background_lvl_7", x: md / 2, y: yd / 2 },
      platform: { image: "background_platform_lvl_7", x: md / 2, y: yd / 2 },
      overlay: { image: "overlay_7", x: md / 2, y: yd / 2 },
      ball: { type: "ball", image: "ball", x: 1020, y: 876 },
      hole: { type: "hole", image: "hole", x: 1325, y: 465 },
      sand: { type: "sand" },
    },
    lvl_8: {
      lvl: 8,
      worldCollision: { type: "wall", x: 800, y: 580 },
      background: { image: "background_lvl_8", x: md / 2, y: yd / 2 },
      platform: { image: "background_platform_lvl_8", x: md / 2, y: yd / 2 },
      overlay: { image: "overlay_8", x: md / 2, y: yd / 2 },
      ball: { type: "ball", image: "ball", x: 1404, y: 994 },
      hole: { type: "hole", image: "hole", x: 574, y: 495 },
      sand: { lvl: 8, type: "sand", image: "sand_map_8", x: 710, y: 669 },
    },
    lvl_9: {
      lvl: 9,
      worldCollision: { type: "wall", x: 805, y: 640 },
      background: { image: "background_lvl_9", x: md / 2, y: yd / 2 },
      platform: { image: "background_platform_lvl_9", x: md / 2, y: yd / 2 },
      overlay: { image: "overlay_9", x: md / 2, y: yd / 2 },
      ball: { type: "ball", image: "ball", x: 665, y: 993 },
      hole: { type: "hole", image: "hole", x: 1056, y: 355 },
      sand: { lvl: 9, type: "sand", image: "sand_map_9", x: 891, y: 551 },
    },
  },
  bd = {
    lvl_1: {
      key: 1,
      scenario: !1,
      question:
        "What is the purpose of the Fundamental Rights enshrined in the Indian Constitution?",
      answers: [
        "To ensure citizens have the right to personal and property ownership",
        "To guarantee basic freedoms and protect individual rights against infringement by the state",
        "To establish guidelines for how laws should be created and enforced",
      ],
      feedback: ["q1_incorrect", "q1_correct", "q1_incorrect"],
      questionVariants: ["q1_a", "q1_b", "q1_c"],
      correctAnswer:
        "To guarantee basic freedoms and protect individual rights against infringement by the state",
      worstAnswer: "",
    },
    lvl_2: {
      key: 2,
      scenario: !1,
      question:
        "What does the Right to Freedom of Speech and Expression include?",
      answers: [
        "The right to practice any religion",
        "The right to express one’s opinions freely",
        "The right to receive free education",
      ],
      feedback: ["q2_incorrect", "q2_correct", "q2_incorrect"],
      questionVariants: ["q2_a", "q2_b", "q2_c"],
      correctAnswer: "The right to express one’s opinions freely",
      worstAnswer: "",
    },
    lvl_3: {
      key: 3,
      scenario: !1,
      question:
        "Which fundamental duty is related to respecting the Constitution of India?",
      answers: [
        "To promote harmony and the spirit of common brotherhood",
        "To uphold and protect the sovereignty, unity, and integrity of India",
        "To abide by the Constitution and respect its ideals and institutions",
      ],
      feedback: ["q3_incorrect", "q3_incorrect", "q3_correct"],
      questionVariants: ["q3_a", "q3_b", "q3_c"],
      correctAnswer:
        "To abide by the Constitution and respect its ideals and institutions",
      worstAnswer: "",
    },
    lvl_4: {
      key: 4,
      scenario: !1,
      question:
        "Which right ensures that no person is deprived of their life or personal liberty except according to the procedure established by law?",
      answers: [
        "Right to Freedom",
        "Right to Constitutional Remedies",
        "Right to Life and Personal Liberty",
      ],
      feedback: ["q4_incorrect", "q4_incorrect", "q4_correct"],
      questionVariants: ["q4_a", "q4_b", "q4_c"],
      correctAnswer: "Right to Life and Personal Liberty",
      worstAnswer: "",
    },
    lvl_5: {
      key: 5,
      scenario: !1,
      question:
        "Which article in the Indian Constitution prohibits discrimination on the grounds of religion, race, caste, sex, or place of birth?",
      answers: ["Article 14", "Article 15", "Article 16"],
      feedback: ["q5_incorrect", "q5_correct", "q5_incorrect"],
      questionVariants: ["q5_a", "q5_b", "q5_c"],
      correctAnswer: "Article 15",
      worstAnswer: "",
    },
    lvl_6: {
      key: 6,
      scenario: !1,
      question: "What does the Right to Constitutional Remedies provide?",
      answers: [
        "The right to a fair trial",
        "The right to protection from arbitrary arrest and detention",
        "The right to move the court for the enforcement of Fundamental Rights",
      ],
      feedback: ["q6_incorrect", "q6_incorrect", "q6_correct"],
      questionVariants: ["q6_a", "q6_b", "q6_c"],
      correctAnswer:
        "The right to move the court for the enforcement of Fundamental Rights",
      worstAnswer: "",
    },
    lvl_7: {
      key: 7,
      scenario: !1,
      question:
        "Which Fundamental Right is related to the abolition of untouchability?",
      answers: [
        "Right to Equality",
        "Right to Freedom",
        "Right against Exploitation",
      ],
      feedback: ["q7_correct", "q7_incorrect", "q7_incorrect"],
      questionVariants: ["q7_a", "q7_b", "q7_c"],
      correctAnswer: "Right to Equality",
      worstAnswer: "",
    },
    lvl_8: {
      key: 8,
      scenario: !1,
      question:
        "Which article provides the Right to Education for children aged 6 to 14 years?",
      answers: ["Article 21", "Article 45", "Article 46"],
      feedback: ["q8_incorrect", "q8_correct", "q8_incorrect"],
      questionVariants: ["q8_a", "q8_b", "q8_c"],
      correctAnswer: "Article 45",
      worstAnswer: "",
    },
    lvl_9: {
      key: 9,
      scenario: !1,
      question: "What does the Right to Information allow citizens to do?",
      answers: [
        "Access public records and obtain information from public authorities",
        "Access personal records from private organizations",
        "Demand information on any legal case",
      ],
      feedback: ["q9_correct", "q9_incorrect", "q9_incorrect"],
      questionVariants: ["q9_a", "q9_b", "q9_c"],
      correctAnswer:
        "Access public records and obtain information from public authorities",
      worstAnswer: "",
    },
    lvl_10: {
      key: 10,
      scenario: !1,
      question: "What is guaranteed under the Right to Freedom of Religion?",
      answers: [
        "The right to practice any religion freely",
        "The right to convert others to one’s own religion",
        "The right to be exempt from all religious practices",
      ],
      feedback: ["q10_correct", "q10_incorrect", "q10_incorrect"],
      questionVariants: ["q10_a", "q10_b", "q10_c"],
      correctAnswer: "The right to practice any religion freely",
      worstAnswer: "",
    },
    lvl_11: {
      key: 11,
      scenario: !1,
      question:
        "Which Fundamental Duty emphasizes the importance of protecting the environment?",
      answers: [
        "To promote harmony and the spirit of common brotherhood",
        "To safeguard public property and abjure violence",
        "To protect and improve the natural environment",
      ],
      feedback: ["q11_incorrect", "q11_incorrect", "q11_correct"],
      questionVariants: ["q11_a", "q11_b", "q11_c"],
      correctAnswer: "To protect and improve the natural environment",
      worstAnswer: "",
    },
    lvl_12: {
      key: 12,
      scenario: !1,
      question:
        "What is the main purpose of Directive Principles of State Policy?",
      answers: [
        "To provide a framework for the administration of justice",
        "To guide the state in making laws and policies for socio-economic welfare",
        "To ensure individual rights and freedoms",
      ],
      feedback: ["q12_incorrect", "q12_correct", "q12_incorrect"],
      questionVariants: ["q12_a", "q12_b", "q12_c"],
      correctAnswer:
        "To guide the state in making laws and policies for socio-economic welfare",
      worstAnswer: "",
    },
    lvl_13: {
      key: 13,
      scenario: !1,
      question:
        "Which article of the Indian Constitution abolishes the practice of 'untouchability'?",
      answers: ["Article 15", "Article 17", "Article 21"],
      feedback: ["q13_incorrect", "q13_correct", "q13_incorrect"],
      questionVariants: ["q13_a", "q13_b", "q13_c"],
      correctAnswer: "Article 17",
      worstAnswer: "",
    },
    lvl_14: {
      key: 14,
      scenario: !1,
      question:
        "Which right protects against arbitrary arrest and detention without trial?",
      answers: [
        "Right to Freedom of Speech",
        "Right to Life and Personal Liberty",
        "Right to Constitutional Remedies",
      ],
      feedback: ["q14_incorrect", "q14_correct", "q14_incorrect"],
      questionVariants: ["q14_a", "q14_b", "q14_c"],
      correctAnswer: "Right to Life and Personal Liberty",
      worstAnswer: "",
    },
    lvl_15: {
      key: 15,
      scenario: !1,
      question:
        "Which Fundamental Duty requires citizens to promote harmony and the spirit of common brotherhood?",
      answers: [
        "To uphold the sovereignty and integrity of India",
        "To promote harmony and the spirit of common brotherhood",
        "To abide by the Constitution and respect its ideals and institutions",
      ],
      feedback: ["q15_incorrect", "q15_correct", "q15_incorrect"],
      questionVariants: ["q15_a", "q15_b", "q15_c"],
      correctAnswer: "To promote harmony and the spirit of common brotherhood",
      worstAnswer: "",
    },
    lvl_16: {
      key: 16,
      scenario: !1,
      question:
        "Which article ensures that every citizen has the right to reside and settle in any part of India?",
      answers: ["Article 15", "Article 19", "Article 21"],
      feedback: ["q16_incorrect", "q16_correct", "q16_incorrect"],
      questionVariants: ["q16_a", "q16_b", "q16_c"],
      correctAnswer: "Article 19",
      worstAnswer: "",
    },
    lvl_17: {
      key: 17,
      scenario: !1,
      question:
        "What is the role of the Fundamental Rights in the Indian Constitution?",
      answers: [
        "To define the powers of the state",
        "To protect individual freedoms and limit the powers of the state",
        "To provide guidelines for the creation of laws",
      ],
      feedback: ["q17_incorrect", "q17_correct", "q17_incorrect"],
      questionVariants: ["q17_a", "q17_b", "q17_c"],
      correctAnswer:
        "To protect individual freedoms and limit the powers of the state",
      worstAnswer: "",
    },
    lvl_18: {
      key: 18,
      scenario: !1,
      question:
        "Which Fundamental Duty emphasizes the importance of safeguarding public property?",
      answers: [
        "To protect and improve the natural environment",
        "To safeguard public property and abjure violence",
        "To promote harmony and the spirit of common brotherhood",
      ],
      feedback: ["q18_incorrect", "q18_correct", "q18_incorrect"],
      questionVariants: ["q18_a", "q18_b", "q18_c"],
      correctAnswer: "To safeguard public property and abjure violence",
      worstAnswer: "",
    },
    lvl_19: {
      key: 19,
      scenario: !1,
      question:
        "Which Fundamental Right is related to the protection against exploitation?",
      answers: [
        "Right to Equality",
        "Right against Exploitation",
        "Right to Freedom",
      ],
      feedback: ["q19_incorrect", "q19_correct", "q19_incorrect"],
      questionVariants: ["q19_a", "q19_b", "q19_c"],
      correctAnswer: "Right against Exploitation",
      worstAnswer: "",
    },
    lvl_20: {
      key: 20,
      scenario: !1,
      question:
        "Which article of the Constitution provides for the protection of minority interests?",
      answers: ["Article 29", "Article 30", "Article 31"],
      feedback: ["q20_incorrect", "q20_correct", "q20_incorrect"],
      questionVariants: ["q20_a", "q20_b", "q20_c"],
      correctAnswer: "Article 30",
      worstAnswer: "",
    },
  },
  wd = {
    1: {
      key: 1,
      scenario: !0,
      question:
        " While attending a public rally, you and a friend are approached by someone handing out flyers promoting a new business venture. Your friend suggests that you both should take one and share it on social media. What do you do?",
      answers: [
        "Sure, let’s take the flyer and share it!",
        "No, I prefer not to take it or share it",
        "I don’t want to take the flyer, and you might want to be cautious about sharing promotional content without knowing more about it",
      ],
      feedback: ["s1_incorrect", "s1_incorrect_2", "s1_correct"],
      questionVariants: ["s1_a", "s1_b", "s1_c"],
      correctAnswer:
        "I don’t want to take the flyer, and you might want to be cautious about sharing promotional content without knowing more about it",
      worstAnswer: "Sure, let’s take the flyer and share it!",
    },
    2: {
      key: 2,
      scenario: !0,
      question:
        " You are at a local library where a new rule is introduced that prohibits using mobile phones in certain areas to maintain a quiet environment. Your friend wants to use their phone to check a message.What do you suggest to your friend?",
      answers: [
        "Go ahead and use your phone anyway; rules can be inconvenient.",
        "It’s better to follow the rule and use your phone outside the restricted areas.",
        "Just ignore the rule; it’s not a big deal.",
      ],
      feedback: ["s2_incorrect", "s2_correct", "s2_incorrect_2"],
      questionVariants: ["s1_a", "s1_b", "s1_c"],
      correctAnswer:
        "It’s better to follow the rule and use your phone outside the restricted areas.",
      worstAnswer: "Just ignore the rule; it’s not a big deal.",
    },
    3: {
      key: 3,
      scenario: !0,
      question:
        "At a community event, you notice that some people are distributing pamphlets advocating for a new social cause. Your friend is hesitant about taking one, worried it might infringe on their right to privacy.What do you tell your friend?",
      answers: [
        "It's fine to take one; it’s just a pamphlet.",
        "It’s important to be cautious about giving out personal information.",
        "You don’t need to worry; pamphlets don’t affect privacy.",
      ],
      feedback: ["s3_incorrect", "s3_correct", "s3_incorrect_2"],
      questionVariants: ["s1_a", "s1_b", "s1_c"],
      correctAnswer:
        "It’s important to be cautious about giving out personal information.",
      worstAnswer: "It's fine to take one; it’s just a pamphlet.",
    },
  },
  _d = [
    {
      name: "PLAYER",
      holesScore: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      holesPutts: [3, 4, 3, 5, 5, 2, 3, 4, 4],
      totalScore: 9,
      totalPutts: 0,
      penaltyStrokes: 0,
    },
    {
      name: "PLAYER",
      holesScore: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      holesPutts: [4, 4, 3, 4, 5, 3, 5, 4, 3],
      totalScore: 8,
      totalPutts: 0,
      penaltyStrokes: 0,
    },
  ],
  kd = [
    {
      name: "PLAYER",
      holesScore: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      holesPutts: [2, 4, 5, 3, 3, 4, 3, 5, 4],
      totalScore: 6,
      totalPutts: 0,
      penaltyStrokes: 2,
    },
    {
      name: "PLAYER",
      holesScore: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      holesPutts: [4, 3, 4, 4, 3, 5, 5, 3, 2],
      totalScore: 7,
      totalPutts: 0,
      penaltyStrokes: 5,
    },
  ],
  Sd = [
    {
      name: "PLAYER",
      holesScore: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      holesPutts: [4, 3, 5, 3, 3, 5, 4, 5, 2],
      totalScore: 5,
      totalPutts: 0,
      penaltyStrokes: 7,
    },
    {
      name: "PLAYER",
      holesScore: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      holesPutts: [5, 2, 3, 4, 5, 4, 5, 3, 3],
      totalScore: 3,
      totalPutts: 0,
      penaltyStrokes: 9,
    },
  ],
  xd = [
    {
      name: "PLAYER",
      holesScore: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      holesPutts: [4, 2, 5, 3, 3, 4, 4, 4, 5],
      totalScore: 1,
      totalPutts: 0,
      penaltyStrokes: 10,
    },
    {
      name: "PLAYER",
      holesScore: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      holesPutts: [4, 3, 4, 2, 5, 5, 5, 3, 4],
      totalScore: 2,
      totalPutts: 0,
      penaltyStrokes: 12,
    },
  ],
  Cd = [
    "John",
    "Alice",
    "Bob",
    "Emily",
    "Michael",
    "Sophia",
    "William",
    "Olivia",
    "James",
    "Emma",
    "Daniel",
    "Charlotte",
    "Liam",
    "Isabella",
    "Benjamin",
    "Ava",
    "Alexander",
    "Mia",
    "Jacob",
    "Henry",
    "Ella",
    "Matthew",
    "Grace",
    "David",
    "Chloe",
    "Samuel",
    "Avery",
    "Nathan",
    "Scarlett",
  ],
  Pd = new (class {
    constructor() {
      (this.playerData = {
        name: "PLAYER",
        holesScore: [],
        holesPutts: [],
        totalScore: 0,
        totalPutts: 0,
        penaltyStrokes: 0,
      }),
        (this.rankingPlace = null);
    }
    addHoleScore(e) {
      this.playerData.holesScore.push(e);
    }
    addPenaltyStroke(e) {
      this.playerData.penaltyStrokes += e;
    }
    addNewPutts(e) {
      this.playerData.holesPutts.push(e);
    }
    setName(e) {
      this.playerData.name = e;
    }
    sumHolesScore() {
      const e = this.playerData.holesScore.reduce((e, t) => e + t, 0);
      this.playerData.totalScore = e;
    }
    sumHolesPutts() {
      const e = this.playerData.holesPutts.reduce((e, t) => e + t, 0);
      this.playerData.totalPutts = e;
    }
    reset() {
      (this.playerData.holesScore = []),
        (this.playerData.holesPutts = []),
        (this.playerData.totalScore = 0),
        (this.playerData.totalPutts = 0),
        (this.playerData.penaltyStrokes = 0);
    }
    getData() {
      return (
        this.sumHolesScore(),
        this.sumHolesPutts(),
        (this.rankingPlace = this.checkPlayerPlaceInRanking()),
        (this.sortedPlayers = this.sortAndGetPlayers()),
        { players: this.sortedPlayers, rankingPlace: this.rankingPlace }
      );
    }
    checkPlayerPlaceInRanking() {
      const { totalScore: e, penaltyStrokes: t } = this.playerData;
      let n = null;
      return (
        (n =
          e >= 8 && 0 == t
            ? 1
            : e >= 6 && t <= 2
            ? 2
            : e >= 3 && t <= 9
            ? 3
            : 4),
        n
      );
    }
    sortAndGetPlayers() {
      const e = [],
        t = (e) => {
          const t = e[this.getRandomNumber(0, e.length)];
          return (t.name = Cd[this.getRandomNumber(0, Cd.length)]), t;
        };
      return (
        1 === this.rankingPlace
          ? ((e[0] = this.playerData),
            (e[1] = t(kd)),
            (e[2] = t(Sd)),
            (e[3] = t(xd)))
          : 2 === this.rankingPlace
          ? ((e[0] = t(_d)),
            (e[1] = this.playerData),
            (e[2] = t(Sd)),
            (e[3] = t(xd)))
          : 3 === this.rankingPlace
          ? ((e[0] = t(_d)),
            (e[1] = t(kd)),
            (e[2] = this.playerData),
            (e[3] = t(xd)))
          : ((e[0] = t(_d)),
            (e[1] = t(kd)),
            (e[2] = t(Sd)),
            (e[3] = this.playerData)),
        e
      );
    }
    getRandomNumber(e, t) {
      return Math.floor(Math.random() * t) + e;
    }
  })(),
  qd = new (class {
    constructor() {
      (this.scene = null),
        (this.lvl = 1),
        (this.maxLvl = 9),
        (this.questions = Object.values(bd)),
        (this.scenarioQuestions = Object.values(wd));
    }
    initGame(e) {
      this.scene = e;
    }
    createGame() {
      const e = this.getPlaySceneLvlConfig();
      (e.isPaused = !1), this.scene.start("Game", e);
    }
    startGame() {
      (this.getGameScene().isPaused = !1), this.createGame();
    }
    startPreload(e) {
      e.start("Preloader");
    }
    startMenu(e) {
      e.start("MainMenu");
    }
    getGameScene() {
      return this.scene.get("Game");
    }
    getGameOverScene() {
      return this.scene.get("GameOver");
    }
    getPlaySceneLvlConfig() {
      const e = Object.keys(vd)[this.lvl - 1];
      return vd[e];
    }
    handleNewQuestion() {
      let e = null;
      return (
        (e =
          2 === this.lvl || 4 === this.lvl || 7 === this.lvl
            ? this.getNewScenarioQuestion()
            : this.getNewQuestion()),
        e
      );
    }
    getNewQuestion() {
      const e = Math.floor(Math.random() * this.questions.length),
        t = this.questions[e];
      return this.questions.splice(e, 1), t;
    }
    getNewScenarioQuestion() {
      const e = Math.floor(Math.random() * this.scenarioQuestions.length),
        t = this.scenarioQuestions[e];
      return this.scenarioQuestions.splice(e, 1), t;
    }
    startNextLevel(e = 1) {
      this.lvl += e;
      const t = this.getPlaySceneLvlConfig();
      (t.isPaused = !1), this.getGameScene().scene.restart(t);
    }
    startGameOverScene() {
      const e = this.getGameOverScene();
      e
        ? e.scene.restart(playerStatistics)
        : this.scene.start("GameOver", playerStatistics);
    }
    getGameLvl() {
      return this.lvl;
    }
    getPlayersData() {
      return Pd.getData();
    }
    restartLvlCount() {
      this.lvl = 1;
    }
    isMaxLvl() {
      return this.lvl === this.maxLvl;
    }
    updatePlayerData(e, t, n) {
      Pd.addHoleScore(e), Pd.addPenaltyStroke(t), Pd.addNewPutts(n);
    }
    updatePlayerDataNickAndID(e) {
      Pd.setName(e);
    }
    restartGame() {
      Pd.reset(), this.restartLvlCount();
      const e = this.getGameScene(),
        t = this.getPlaySceneLvlConfig();
      (t.isPaused = !1),
        (this.questions = Object.values(bd)),
        (this.scenarioQuestions = Object.values(wd)),
        e.scene.restart(t);
    }
  })();
class Ed extends n.Scene {
  constructor() {
    super("Boot");
  }
  preload() {
    this.load.setPath("assets/images"),
      this.load.image("golf_logo", "golf_logo.png");
  }
  create() {
    qd.startPreload(this.scene);
  }
}
const Td = new (class {
  constructor() {
    this.scene = null;
  }
  init(e) {
    this.scene = e;
  }
  startScene(e) {
    this.scene.start(e);
  }
  get puttsCount() {
    return this.scene.getScene("UI").puttsCount;
  }
  addPuttsPoint() {
    this.scene.getScene("UI").addPuttsPoint();
  }
  get puttsLimit() {
    return this.scene.getScene("UI").getPuttsLimit();
  }
  setPuttsLimit(e) {
    this.scene.getScene("UI").setPuttsLimit(e);
  }
  resetPutts(e) {
    this.scene.getScene("UI").resetPutts(e);
  }
  updateHoleCounter(e) {
    this.scene.getScene("UI").updateHoleCount(e);
  }
  showQuestion(e) {
    this.scene.getScene("UI").showQuestion(e);
  }
  showLostScreen(e, t) {
    this.scene.getScene("UI").openLostScreen(e, t);
  }
  restart() {
    this.scene.getScene("UI").restart();
  }
  startGameOver() {
    const e = this.scene.getScene("GameOver");
    this.scene.isActive("GameOver") ? e.restart() : this.startScene("GameOver");
  }
})();
class Ld extends Phaser.GameObjects.Sprite {
  constructor(e, t) {
    super(e, t.x, t.y, t.image),
      (this.scene = e),
      (this.config = t),
      e.add.existing(this),
      this.startCreateTween();
  }
  startCreateTween() {
    this.setScale(0.1),
      this.scene.tweens.add({
        targets: this,
        ease: "Back.out",
        duration: 600,
        scale: 1,
      });
  }
}
class Nd extends Phaser.GameObjects.Sprite {
  constructor(e, t) {
    super(e, t.x, t.y, t.image),
      (this.scene = e),
      (this.config = t),
      e.add.existing(this),
      this.startCreateTween();
  }
  startCreateTween() {
    this.setScale(0),
      this.scene.tweens.add({
        targets: this,
        ease: "Back.out",
        duration: 700,
        scale: 1,
      });
  }
}
class Od extends Phaser.GameObjects.Sprite {
  constructor(e, t) {
    super(e, t.x, t.y),
      (this.scene = e),
      e.add.existing(this),
      this.setTexture(t.image),
      (this.type = t.type),
      this.createBody(),
      this.startCreateTween(),
      (this.visible = !1);
  }
  createBody() {
    this.scene.matter.add.gameObject(this, {
      shape: { type: "rectangle", width: 40, height: 15 },
      render: { sprite: { xOffset: 0, yOffset: 0 } },
      isStatic: !0,
      isSensor: !0,
    }),
      (this.body.type = this.type);
  }
  startCreateTween() {
    this.setScale(0.1),
      this.scene.tweens.add({
        targets: this,
        ease: "Back.out",
        duration: 500,
        scale: 1,
      });
  }
}
class zd extends Phaser.GameObjects.Sprite {
  constructor(e, t) {
    super(e, t.x, t.y),
      (this.scene = e),
      e.add.existing(this),
      this.setTexture(t.image),
      (this.type = t.type),
      this.createBody(),
      this.startCreateTween();
  }
  createBody() {
    this.scene.matter.add.gameObject(this, {
      shape: { type: "circle", radius: 17 },
      render: { sprite: { xOffset: 0.1, yOffset: -0.05 } },
      mass: 5,
      friction: 0.5,
      frictionStatic: 0.5,
      frictionAir: 0.04,
      restitution: 0.7,
    }),
      (this.body.type = this.type);
  }
  hit(e, t) {
    this.setVelocityX(e), this.setVelocityY(t);
  }
  isVelocityValueLow() {
    return (
      Math.abs(this.body.velocity.x) <= 0.1 &&
      Math.abs(this.body.velocity.y) <= 0.1
    );
  }
  setAirFriction(e) {
    this.body.frictionAir = e;
  }
  startCreateTween() {
    this.setScale(5),
      this.scene.tweens.add({
        targets: this,
        ease: "Back.out",
        duration: 500,
        scale: 1,
      });
  }
  fallingIntoHoleTween(e, t, n) {
    this.scene.tweens.add({
      targets: this,
      x: e,
      y: t + 2,
      scaleX: 0.7,
      scaleY: 0.5,
      duration: 700,
      ease: "Bounce.out",
      onComplete: () => {
        n();
      },
    });
  }
}
class Ad extends Phaser.GameObjects.Sprite {
  constructor(e, t) {
    (t.x = void 0 !== t.x ? t.x : 0),
      (t.y = void 0 !== t.y ? t.y : 0),
      super(e, 833, 625),
      (this.scene = e),
      (this.config = t),
      (this.type = t.type),
      this.setOrigin(0.5, 0.5),
      this.config.lvl &&
        (e.add.existing(this),
        this.setTexture(t.image),
        this.startCreateTween());
  }
  createBody() {
    const e = this.scene.cache.json.get("sand_collision_" + this.config.lvl)[
      "sand_map_" + this.config.lvl
    ];
    for (var t = 0; t < e.fixtures.length; t++)
      (e.fixtures[t].isSensor = !0), (e.fixtures[t].type = this.type);
    const n = {
      shape: e,
      render: { sprite: { xOffset: 0, yOffset: 0 } },
      isStatic: !0,
      isSensor: !0,
    };
    this.scene.matter.add.gameObject(this, n), (this.body.type = this.type);
  }
  startCreateTween() {
    this.config.lvl &&
      (this.setScale(0.1),
      this.scene.tweens.add({
        targets: this,
        ease: "Back.out",
        duration: 700,
        scale: 1,
        onComplete: () => {
          (this.x = this.config.x), (this.y = this.config.y), this.createBody();
        },
      }));
  }
}
class Id extends Phaser.GameObjects.Sprite {
  constructor(e, t) {
    super(e, t.x, t.y, t.image),
      (this.scene = e),
      (this.config = t),
      e.add.existing(this),
      this.startCreateTween();
  }
  startCreateTween() {
    this.setScale(0.1),
      this.scene.tweens.add({
        targets: this,
        ease: "Back.out",
        duration: 550,
        scale: 1,
      });
  }
}
class Bd extends Phaser.GameObjects.Container {
  constructor(e) {
    super(e),
      (this.scene = e),
      e.add.existing(this),
      (this.startPointerCoordinates = { x: null, y: null }),
      (this.disable = !1),
      (this.maxAcceleration = 30),
      (this.arrowBodyWidthLimit = 150),
      (this.impactForce = 1.5),
      (this.headImage = this.createArrowHeadImage()),
      (this.bodyImage = this.createArrowBodyImage()),
      this.add([this.headImage, this.bodyImage]),
      this.setVisible(!1);
  }
  createArrowHeadImage() {
    return this.scene.add.image(-30, 1, "arrow_head").setOrigin(0.5, 0.5);
  }
  createArrowBodyImage() {
    return this.scene.add.image(20, 1, "arrow_body").setOrigin(0, 0.5);
  }
  calculateArrowBodyWidth(e, t) {
    const { x: n, y: r } = this.startPointerCoordinates,
      a = Math.sqrt(Math.pow(n - e, 2) + Math.pow(r - t, 2)),
      i = this.calculateAccelerationColor(a);
    a > this.arrowBodyWidthLimit ||
      ((this.bodyImage.displayWidth = a), this.changeArrowTint(i));
  }
  changeArrowTint(e) {
    this.bodyImage.setTint(e), this.headImage.setTint(e);
  }
  calculateAccelerationColor(e) {
    const t = Phaser.Display.Color.Interpolate.ColorWithColor(
      Phaser.Display.Color.ValueToColor(16776960),
      Phaser.Display.Color.ValueToColor(16711680),
      150,
      e
    );
    return Phaser.Display.Color.GetColor(t.r, t.g, t.b);
  }
  getStartPointerCoordinates() {
    this.startPointerCoordinates = {
      x: this.scene.input.x,
      y: this.scene.input.y,
    };
  }
  calculateAccelerationValue() {
    let e = 0.1 * (this.startPointerCoordinates.x - this.scene.input.x),
      t = 0.1 * (this.startPointerCoordinates.y - this.scene.input.y);
    (e *= this.impactForce), (t *= this.impactForce);
    const n = Math.sqrt(e * e + t * t);
    if (n > 30) {
      const r = 30 / n;
      (e *= r), (t *= r);
    }
    return { accelerationX: e, accelerationY: t };
  }
}
class Dd extends n.Scene {
  constructor() {
    super("Game");
  }
  create(e) {
    (this.config = e),
      (this.isPaused = e.isPaused),
      (this.isCLicked = !1),
      (this.ballFellIntoHole = !1),
      (this.pointerCoordinates = { x: null, y: null }),
      (this.background = new Ld(this, e.background)),
      (this.platform = new Nd(this, e.platform)),
      (this.hole = new Od(this, e.hole)),
      (this.sand = new Ad(this, e.sand)),
      (this.ball = new zd(this, e.ball)),
      null != e.overlay && (this.overlay = new Id(this, e.overlay)),
      this.createWorldBody(),
      (this.accelerationArrow = new Bd(this)),
      Td.updateHoleCounter(e.lvl),
      this.handleCollisions(),
      this.handleListener(),
      this.startSceneTween(),
      this.game.audio["hole" + e.lvl].play();
  }
  createWorldBody() {
    const { x: e, y: t, type: n } = this.config.worldCollision,
      r = this.add.sprite(e, t, "question_button").setVisible(!1),
      a = this.cache.json.get("wall_collision_" + this.config.lvl)[
        "background_lvl_" + this.config.lvl
      ];
    for (var i = 0; i < a.fixtures.length; i++) a.fixtures[i].type = n;
    const o = {
      shape: a,
      render: { sprite: { xOffset: 0, yOffset: 0 } },
      isStatic: !0,
    };
    this.matter.add.gameObject(r, o);
  }
  update() {
    if (
      this.accelerationArrow.disable &&
      ((this.ball.angle = 0),
      this.accelerationArrow.getStartPointerCoordinates(),
      this.ball.isVelocityValueLow() &&
        (this.ball.setVelocity(0, 0),
        (this.accelerationArrow.disable = !1),
        Td.puttsCount >= Td.puttsLimit && !this.ballFellIntoHole))
    ) {
      this.removeListeners();
      const e = qd.handleNewQuestion();
      Td.showQuestion(e);
    }
  }
  handleListener() {
    (this.pointerDownListener = this.input.on("pointerdown", () => {
      this.accelerationArrow.disable ||
        this.isPaused ||
        (this.accelerationArrow.setPosition(this.ball.x, this.ball.y),
        (this.isCLicked = !0),
        this.accelerationArrow.getStartPointerCoordinates());
    })),
      (this.pointerUpListener = this.input.on("pointerup", () => {
        if (
          this.accelerationArrow.disable ||
          this.isPaused ||
          !this.accelerationArrow.visible
        )
          return;
        const { accelerationX: e, accelerationY: t } =
          this.accelerationArrow.calculateAccelerationValue();
        (this.accelerationArrow.disable = !0),
          this.accelerationArrow.setVisible(!1),
          (this.isCLicked = !1),
          (0 === e && 0 === t) ||
            (this.ball.hit(e, t),
            Td.addPuttsPoint(),
            this.game.audio.hit_ball.play());
      })),
      (this.pointerMoveListener = this.input.on("pointermove", () => {
        !this.isCLicked ||
          this.accelerationArrow.disable ||
          this.isPaused ||
          (this.accelerationArrow.setVisible(!0),
          this.calculateAngleAccelerationArrow(this.accelerationArrow),
          this.accelerationArrow.calculateArrowBodyWidth(
            this.input.x,
            this.input.y
          ));
      })),
      window.removeEventListener("focus", this.windowFocusListener),
      (this.windowFocusListener = this.windowFocus.bind(this)),
      this.windowFocus.bind(this),
      window.addEventListener("focus", this.windowFocusListener);
  }
  calculateAngleAccelerationArrow(e) {
    let t = Phaser.Math.Angle.Between(e.x, e.y, this.input.x, this.input.y);
    e.setRotation(t);
  }
  handleCollisions() {
    this.matter.world.on("collisionstart", (e, t, n) => {
      if (this.isColliding(t, n, this.ball.type, this.hole.type)) {
        const e = () => {
          const e = qd.handleNewQuestion();
          Td.showQuestion(e);
        };
        this.removeListeners(),
          (this.ballFellIntoHole = !0),
          this.ball.setVelocity(0, 0),
          this.ball.fallingIntoHoleTween(this.hole.x, this.hole.y, e),
          this.game.audio.drop_ball_into_hole.play();
      }
      this.isColliding(t, n, this.ball.type, this.sand.type) &&
        this.ball.setAirFriction(0.2),
        this.isColliding(t, n, this.ball.type, "wall") &&
          this.game.audio.ball_bounce.play();
    }),
      this.matter.world.on("collisionend", (e, t, n) => {
        this.isColliding(t, n, this.ball.type, this.sand.type) &&
          this.ball.setAirFriction(0.04);
      });
  }
  isColliding(e, t, n, r) {
    return (e.type === n && t.type === r) || (t.type === n && e.type === r);
  }
  windowFocus() {
    this.game.audio.forEach((e) => {
      this.game.audio[e].stop();
    });
  }
  startSceneTween() {
    this.background.startCreateTween(),
      this.hole.startCreateTween(),
      this.sand.startCreateTween(),
      this.ball.startCreateTween();
  }
  removeListeners() {
    this.input.off("pointerdown"),
      this.input.off("pointerup"),
      this.input.off("pointermove"),
      (this.pointerDownListener = null),
      (this.pointerUpListener = null),
      (this.pointerMoveListener = null);
  }
}
class Fd extends Phaser.GameObjects.Image {
  constructor(e, t, n, r, a, i) {
    super(e, t, n, r),
      e.add.existing(this),
      (this.scene = e),
      (this.defaultImage = r),
      (this.hoverImage = a),
      (this.pushImage = i),
      (this.isClicked = !1),
      (this.pointerDownListener = null),
      (this.pointerUpListener = null),
      (this.pointerOverListener = null),
      (this.pointerOutListener = null),
      this.setInteractive();
  }
  onClick(e) {
    return (
      (this.pointerDownListener = this.on("pointerdown", () => {
        this.isClicked || (this.setTexture(this.pushImage), this.setScale(0.9));
      })),
      (this.pointerUpListener = this.on("pointerup", () => {
        this.isClicked || (this.setScale(1), e());
      })),
      (this.pointerOverListener = this.on("pointerover", () => {
        this.isClicked || this.setTexture(this.hoverImage);
      })),
      (this.pointerOutListener = this.on("pointerout", () => {
        this.isClicked ||
          (this.setTexture(this.defaultImage), this.setScale(1));
      })),
      this
    );
  }
  setPushed() {
    this.setTexture(this.pushImage), this.setScale(0.9), (this.isClicked = !0);
  }
  reset() {
    this.setTexture(this.defaultImage), this.setScale(1), (this.isClicked = !1);
  }
  offListeners() {
    this.off("pointerdown"),
      this.off("pointerup"),
      this.off("pointerover"),
      this.off("pointerout"),
      (this.pointerDownListener = null),
      (this.pointerUpListener = null),
      (this.pointerOverListener = null),
      (this.pointerOutListener = null);
  }
}
class Rd extends n.Scene {
  constructor() {
    super("GameOver");
  }
  create() {
    (this.openTween = null),
      (this.closeTween = null),
      (this.actualPlayingAudioName = ""),
      (this.playersDataContainerStorage = []),
      (this.rankingPlayersData = qd.getPlayersData()),
      (this.playersData = this.rankingPlayersData.players),
      (this.playerPlaceInRanking = this.rankingPlayersData.rankingPlace),
      (this.background = this.createBackground()),
      (this.playAgainButton = this.createPlayAgainButton()),
      this.createPlayersDataText(),
      this.handlePlayRankingStatusAudio(),
      this.open();
  }
  createBackground() {
    return this.add.image(834, 625, "scoreboard").setOrigin(0.5, 0.5);
  }
  createPlayersDataText() {
    for (let e = 0; e < this.playersData.length; e++) {
      if (4 === e) return;
      const {
          name: t,
          holesPutts: n,
          totalScore: r,
          penaltyStrokes: a,
        } = this.playersData[e],
        i = this.add.container(212, 468 + 105 * e),
        o = this.add
          .text(0, 0, t, {
            fontFamily: "teko",
            fontSize: "70px",
            color: "#5a8d3eff",
          })
          .setOrigin(0.5, 0.5);
      i.add(o);
      for (let e = 0; e < n.length; e++) {
        let t = 135 + 98 * e;
        const r = this.add
          .text(t, 0, n[e], {
            fontFamily: "teko",
            fontSize: "70px",
            color: "#5a8d3eff",
          })
          .setOrigin(0.5, 0.5);
        i.add(r);
      }
      const l = this.add
        .text(1048, 0, r, {
          fontFamily: "teko",
          fontSize: "70px",
          color: "#5a8d3eff",
        })
        .setOrigin(0.5, 0.5);
      i.add(l);
      const s = this.add
        .text(1245, 0, a, {
          fontFamily: "teko",
          fontSize: "70px",
          color: "#be8046ff",
        })
        .setOrigin(0.5, 0.5);
      i.add(s), this.playersDataContainerStorage.push(i);
    }
  }
  createPlayAgainButton() {
    const e = new Fd(
      this,
      md / 2,
      1086,
      "play_again_button",
      "play_again_button_push",
      "play_again_button_push"
    );
    return (
      e.onClick(() => {
        this.game.audio[this.actualPlayingAudioName].stop(), this.close();
      }),
      e
    );
  }
  handlePlayRankingStatusAudio() {
    !1 !== this.playerPlaceInRanking &&
      (1 === this.playerPlaceInRanking
        ? (this.game.audio.game_over_1st.play(),
          (this.actualPlayingAudioName = "game_over_1st"))
        : 2 === this.playerPlaceInRanking
        ? (this.game.audio.game_over_2nd.play(),
          (this.actualPlayingAudioName = "game_over_2nd"))
        : 3 === this.playerPlaceInRanking
        ? (this.game.audio.game_over_3rd.play(),
          (this.actualPlayingAudioName = "game_over_3rd"))
        : (this.game.audio.game_over_4th.play(),
          (this.actualPlayingAudioName = "game_over_4th")));
  }
  open() {
    this.background.setScale(0.1),
      this.playAgainButton.setScale(0.1),
      this.playersDataContainerStorage.forEach((e) => {
        e.setScale(0.1);
      }),
      (this.openTween = this.tweens.add({
        targets: this.background,
        ease: "Back.out",
        duration: 400,
        scale: 1,
      })),
      (this.openTween = this.tweens.add({
        targets: this.playAgainButton,
        ease: "Back.out",
        duration: 600,
        scale: 1,
      })),
      (this.openTween = this.tweens.add({
        targets: this.playersDataContainerStorage,
        ease: "Back.out",
        duration: 500,
        scale: 1,
      }));
  }
  close() {
    this.background.setScale(1),
      this.playAgainButton.setScale(1),
      this.playersDataContainerStorage.forEach((e) => {
        e.setScale(1);
      }),
      (this.closeTween = this.tweens.add({
        targets: this.background,
        ease: "Back.in",
        duration: 500,
        scale: 0.1,
        onComplete: () => {
          this.playersDataContainerStorage.forEach((e) => {
            e.destroy();
          }),
            (this.playersDataContainerStorage.length = 0),
            (this.openTween = null),
            (this.closeTween = null),
            Td.restart(),
            qd.restartGame(),
            this.scene.sleep("GameOver");
        },
      })),
      (this.closeTween = this.tweens.add({
        targets: this.playAgainButton,
        ease: "Back.in",
        duration: 300,
        scale: 0.1,
      })),
      (this.closeTween = this.tweens.add({
        targets: this.playersDataContainerStorage,
        ease: "Back.in",
        duration: 400,
        scale: 0.1,
      }));
  }
}
class Md extends Phaser.GameObjects.Container {
  constructor(e) {
    super(e),
      (this.scene = e),
      e.add.existing(this),
      (this.x = md / 2),
      (this.y = yd / 2),
      (this.background = this.createBackground()),
      (this.closeButton = this.createCloseButton()),
      (this.visible = !1),
      (this.openTween = null),
      (this.closeTween = null),
      this.add([this.background, this.closeButton]);
  }
  createBackground() {
    return this.scene.add.sprite(0, 0, "instruction");
  }
  createCloseButton() {
    const e = new Fd(
      this.scene,
      612,
      -348,
      "close_button",
      "close_button_push",
      "close_button_push"
    );
    return (
      e.onClick(() => {
        this.scene.game.audio.instructions.stop(), this.close();
      }),
      e
    );
  }
  open() {
    this.scene.game.audio.instructions.play(),
      this.setScale(0.1),
      (this.visible = !0),
      (this.openTween = this.scene.tweens.add({
        targets: this,
        ease: "Back.out",
        duration: 600,
        scale: 1,
      }));
  }
  close() {
    this.setScale(1),
      (this.closeTween = this.scene.tweens.add({
        targets: this,
        ease: "Back.in",
        duration: 400,
        scale: 0.1,
        onComplete: () => {
          (this.visible = !1),
            (this.openTween = null),
            (this.closeTween = null);
        },
      }));
  }
}
const Vd = new r.Events.EventEmitter();
class jd extends n.Scene {
  constructor() {
    super("MainMenu");
  }
  create() {
    (this.backgroundTween = null),
      (this.buttonsTween = null),
      (this.background = this.createBackground()),
      (this.gameLogo = this.createGameLogo()),
      (this.playButton = this.createPlayButton()),
      (this.instructionButton = this.createInstructionButton()),
      (this.instructionWindow = new Md(this)),
      this.startTween(),
      this.game.audio.title.play();
  }
  createBackground() {
    return this.add.image(834, 625, "menu_background");
  }
  createGameLogo() {
    return this.add.image(850, 400, "game_logo").setOrigin(0.5, 0.5);
  }
  createPlayButton() {
    const e = new Fd(
      this,
      1087,
      746,
      "play_button",
      "play_button_push",
      "play_button_push"
    );
    return (
      e.onClick(() => {
        (e.isClicked = !0), this.game.audio.title.stop(), this.closeTween();
      }),
      e
    );
  }
  createInstructionButton() {
    const e = new Fd(
      this,
      723,
      746,
      "instruction_button",
      "instruction_button_push",
      "instruction_button_push"
    );
    return (
      e.onClick(() => {
        this.game.audio.title.stop(), this.instructionWindow.open();
      }),
      e
    );
  }
  startTween() {
    this.game.audio.title.stop(),
      this.background.setScale(3),
      this.playButton.setScale(0.1),
      this.instructionButton.setScale(0.1),
      this.gameLogo.setScale(3),
      (this.backgroundTween = this.tweens.add({
        targets: this.gameLogo,
        ease: "Back.out",
        duration: 600,
        scale: 1,
      })),
      (this.backgroundTween = this.tweens.add({
        targets: this.background,
        ease: "Back.out",
        duration: 400,
        scale: 1,
      })),
      (this.buttonsTween = this.tweens.add({
        targets: [this.playButton, this.instructionButton],
        ease: "Back.out",
        duration: 600,
        scale: 1,
      }));
  }
  closeTween() {
    (this.backgroundTween = this.tweens.add({
      targets: this.background,
      ease: "Back.in",
      duration: 400,
      scale: 3,
      onComplete: () => {
        this.playButton.offListeners(),
          this.instructionButton.offListeners(),
          this.background.destroy(),
          this.playButton.destroy(),
          this.instructionButton.destroy(),
          qd.startGame(this.scene),
          Td.startScene("UI");
      },
    })),
      (this.backgroundTween = this.tweens.add({
        targets: this.gameLogo,
        ease: "Back.in",
        duration: 350,
        scale: 3,
        onComplete: () => {
          this.gameLogo.visible = !1;
        },
      })),
      (this.buttonsTween = this.tweens.add({
        targets: [this.playButton, this.instructionButton],
        ease: "Back.in",
        duration: 300,
        scale: 0,
      }));
  }
}
class Ud extends n.Scene {
  constructor() {
    super("Login");
  }
  create() {
    (this.backgroundTween = null),
      (this.buttonsTween = null),
      (this.nickname = ""),
      (this.background = this.createBackground()),
      (this.textPlaceholder = this.createPlaceholderBackground()),
      (this.continueButton = this.createContinueButton()),
      (this.skipButton = this.createSkipButton()),
      (this.inputText = this.createTextInput()),
      this.startTween();
  }
  createBackground() {
    return this.add.image(834, 625, "menu_background");
  }
  createPlaceholderBackground() {
    return this.add.image(md / 2, 480, "text_placeholder").setOrigin(0.5, 0.5);
  }
  createContinueButton() {
    const e = new Fd(
      this,
      950,
      746,
      "continue_button",
      "continue_button_push",
      "continue_button_push"
    );
    return (
      e.onClick(() => {
        (e.isClicked = !0), this.handlePlayerData(), this.closeTween();
      }),
      e
    );
  }
  createSkipButton() {
    const e = new Fd(
      this,
      630,
      746,
      "skip_button",
      "skip_button_push",
      "skip_button_push"
    );
    return (
      e.onClick(() => {
        (e.isClicked = !0), this.handlePlayerData(), this.closeTween();
      }),
      e
    );
  }
  handlePlayerData() {
    ("" !== this.nickname && " " !== this.nickname) ||
      (this.nickname = "PLAYER"),
      qd.updatePlayerDataNickAndID(this.nickname);
  }
  createTextInput() {
    const e = this.add
      .rexInputText({
        x: md / 2,
        y: 480,
        width: 450,
        height: 150,
        type: "textarea",
        placeholder: "name",
        placeholderColor: "#FFFFFF",
        fontSize: "90px",
        fontFamily: "teko",
        color: "#000000",
        align: "center",
        maxLength: 6,
        minLength: 1,
      })
      .setScale(0)
      .on("textchange", ({ text: e }) => {
        this.nickname = e;
      })
      .on("focus", () => {});
    return (
      this.tweens.add({
        targets: e,
        ease: "Back.out",
        duration: 700,
        scale: 1,
      }),
      e
    );
  }
  startTween() {
    this.background.setScale(3),
      this.continueButton.setScale(0.1),
      this.skipButton.setScale(0.1),
      this.textPlaceholder.setScale(0.1),
      (this.backgroundTween = this.tweens.add({
        targets: this.textPlaceholder,
        ease: "Back.out",
        duration: 600,
        scale: 1,
      })),
      (this.backgroundTween = this.tweens.add({
        targets: this.background,
        ease: "Back.out",
        duration: 400,
        scale: 1,
      })),
      (this.buttonsTween = this.tweens.add({
        targets: [this.skipButton, this.continueButton],
        ease: "Back.out",
        duration: 600,
        scale: 1,
      }));
  }
  closeTween() {
    (this.backgroundTween = this.tweens.add({
      targets: this.background,
      ease: "Back.in",
      duration: 400,
      scale: 3,
      onComplete: () => {
        this.inputText.destroy(),
          this.continueButton.offListeners(),
          this.skipButton.offListeners(),
          this.background.destroy(),
          this.continueButton.destroy(),
          this.skipButton.destroy(),
          Td.startScene("MainMenu"),
          this.scene.remove("Login");
      },
    })),
      (this.backgroundTween = this.tweens.add({
        targets: this.textPlaceholder,
        ease: "Back.in",
        duration: 350,
        scale: 3,
        onComplete: () => {},
      })),
      (this.buttonsTween = this.tweens.add({
        targets: [this.skipButton, this.continueButton],
        ease: "Back.in",
        duration: 300,
        scale: 0,
      }));
  }
}
class Wd extends Phaser.GameObjects.Container {
  constructor(e) {
    super(e),
      (this.scene = e),
      e.add.existing(this),
      (this.x = 165),
      (this.y = 288),
      (this.holeCount = 1),
      (this.background = this.createBackground()),
      (this.text = this.createText()),
      (this.openTween = null),
      (this.closeTween = null),
      this.add([this.background, this.text]);
  }
  createBackground() {
    return this.scene.add.sprite(0, 0, "hole_label");
  }
  createText() {
    return this.scene.add
      .text(1, 22, "#" + this.holeCount, {
        fontFamily: "teko",
        fontSize: 80,
        color: "#ffffff",
      })
      .setOrigin(0.5, 0.5);
  }
  open() {
    this.setScale(0.1),
      (this.visible = !0),
      (this.openTween = this.scene.tweens.add({
        targets: this,
        ease: "Back.out",
        duration: 600,
        scale: 1,
      }));
  }
  updateText(e) {
    this.text.text = "#" + e;
  }
  reset() {
    this.text.text = "#1";
  }
}
class Hd extends Phaser.GameObjects.Container {
  constructor(e) {
    super(e),
      (this.scene = e),
      e.add.existing(this),
      (this.x = 330),
      (this.y = 288),
      (this.puttsCount = 0),
      (this.puttsLimit = 5),
      (this.background = this.createBackground()),
      (this.text = this.createText()),
      (this.openTween = null),
      (this.closeTween = null),
      this.add([this.background, this.text]);
  }
  createBackground() {
    return this.scene.add.sprite(0, 0, "putts_label");
  }
  createText() {
    return this.scene.add
      .text(1, 22, this.puttsCount, { fontFamily: "teko", fontSize: 80 })
      .setOrigin(0.5, 0.5);
  }
  open() {
    this.setScale(0.1),
      (this.visible = !0),
      (this.openTween = this.scene.tweens.add({
        targets: this,
        ease: "Back.out",
        duration: 600,
        scale: 1,
      }));
  }
  addPoint() {
    this.puttsCount++, this.updateText();
  }
  updateText() {
    this.text.text = this.puttsCount;
  }
  getText() {
    return parseInt(this.text.text);
  }
  reset(e = 0) {
    (this.puttsCount = e), this.updateText();
  }
}
class Qd extends Phaser.GameObjects.Container {
  constructor(e, t, n, r, a) {
    super(e, t, n),
      (this.x = t),
      (this.y = n),
      (this.text = r),
      (this.index = a),
      (this.button = this.createButton()),
      (this.questionNumberText = this.createQuestionNumberText()),
      (this.text = this.addAnswerText()),
      this.add([this.button, this.questionNumberText, this.text]),
      this.setSize(this.button.width, this.button.height);
  }
  createButton() {
    return new Fd(
      this.scene,
      0,
      0,
      "question_button",
      "question_button_push",
      "question_button_push"
    );
  }
  createQuestionNumberText() {
    return this.scene.add
      .text(5, -5, this.index, {
        fontFamily: "teko",
        fontSize: "70px",
        color: "#FFFFFF",
      })
      .setOrigin(0.5, 0.5);
  }
  addAnswerText() {
    return this.scene.add
      .text(80, 0, this.text, {
        fontFamily: "teko",
        fontSize: "60px",
        color: "#8b5633ff",
        wordWrap: { width: 1300 },
      })
      .setOrigin(0, 0.5);
  }
  getText() {
    return this.text.text;
  }
  handleButtonClick(e) {
    this.button.onClick(e);
  }
  setButtonPushed() {
    this.button.setPushed();
  }
  removeListeners() {
    this.button.offListeners();
  }
  setButtonPushed() {
    this.button.setPushed();
  }
  resetButton() {
    this.button.reset();
  }
  open() {
    this.button.setScale(0.1),
      this.questionNumberText.setScale(0.1),
      this.text.setScale(0.1),
      (this.openTween = this.scene.tweens.add({
        targets: this.button,
        ease: "Back.out",
        duration: 400,
        scale: 1,
      })),
      (this.openTween = this.scene.tweens.add({
        targets: this.questionNumberText,
        ease: "Back.out",
        duration: 500,
        scale: 1,
      })),
      (this.openTween = this.scene.tweens.add({
        targets: this.text,
        ease: "Back.out",
        duration: 600,
        scale: 1,
      }));
  }
  close() {
    this.setScale(1),
      (this.closeTween = this.scene.tweens.add({
        targets: this,
        ease: "Back.in",
        duration: 600,
        scale: 0,
        onComplete: () => {
          (this.openTween = null), (this.closeTween = null), this.off();
        },
      }));
  }
}
class $d extends Phaser.GameObjects.Container {
  constructor(e, t) {
    const n = md / 2,
      r = yd / 2;
    super(e, n, r),
      (this.scene = e),
      (this.x = n),
      (this.y = r),
      this.scene.add.existing(this),
      (this.score = t.score),
      (this.config = t),
      (this.isScenario = t.scenario),
      (this.openTween = null),
      (this.closeTween = null),
      (this.answers = []),
      (this.answerIndex = null),
      (this.actualQuestionVariantKey = null),
      (this.isSelectedAnswerCorrect = ""),
      (this.selectedAnswer = null),
      (this.closeTimeout = 3e3),
      (this.notCorrectAnswerTexts = ["Wrong! ", "Sorry. "]),
      (this.correctAnswerTexts = [
        "You're right ",
        "Great! ",
        "Correct! ",
        "Absolutely! ",
        "Great job! ",
        "You got it! ",
      ]),
      (this.questionKey = t.scenario ? "s" + t.key : "q" + t.key),
      (this.background = this.createBackground()),
      (this.questionText = this.addQuestionText()),
      (this.correctnessAnswerImage = this.createCorrectnessAnswerImage()),
      (this.submitButton = this.createSubmitButton()),
      this.add([
        this.background,
        this.questionText,
        this.correctnessAnswerImage,
        this.submitButton,
      ]),
      //   this.scene.game.audio[this.questionKey].play(),
      this.addAnswers(),
      this.open();
  }
  createBackground() {
    return this.scene.add
      .image(0, 0, "question_background")
      .setOrigin(0.5, 0.5);
  }
  addQuestionText() {
    const e = this.config.scenario ? "50px" : "80px";
    return this.scene.add
      .text(11, -466, this.config.question, {
        fontFamily: "teko",
        fontSize: e,
        color: "#8b5633ff",
        wordWrap: { width: 1500 },
      })
      .setOrigin(0.5);
  }
  createCorrectnessAnswerImage() {
    return this.scene.add
      .image(0, 491, "question_correct")
      .setOrigin(0.5, 0.5)
      .setVisible(!1);
  }
  createSubmitButton() {
    const e = new Fd(
      this.scene,
      0,
      347,
      "submit_button",
      "submit_button_push",
      "submit_button_push"
    ).setVisible(!1);
    return (
      e.onClick(() => {
        const { correctAnswer: t, worstAnswer: n } = this.config;
        let r = null;

        if (this.selectedAnswer === t) {
          this.showCorrectAnswerImage("correct");
          r = () => {
            const e = Td.puttsCount;
            qd.updatePlayerData(1, 0, e);
            Td.setPuttsLimit(5);
            Td.resetPutts(0);
            if (qd.isMaxLvl()) {
              Td.startGameOver();
            } else {
              qd.startNextLevel();
            }
          };
        } else if (this.selectedAnswer === n) {
          this.showCorrectAnswerImage("wrong");
          r = () => {
            const e = Td.puttsCount;
            qd.updatePlayerData(0, 0, e);
            Td.setPuttsLimit(5);
            Td.resetPutts(0);
            if (qd.isMaxLvl()) {
              Td.startGameOver();
            } else {
              if (this.isScenario) {
                Td.showLostScreen("worst", qd.getGameLvl());
                qd.updatePlayerData(0, 5, 5);
              }
              qd.startNextLevel(this.isScenario ? 2 : 1);
            }
          };
        } else {
          this.showCorrectAnswerImage("wrong");
          r = () => {
            const e = Td.puttsCount;
            const t = this.isScenario ? 2 : 0;
            qd.updatePlayerData(0, t, e);
            Td.setPuttsLimit(5);
            Td.resetPutts(t);
            if (qd.isMaxLvl()) {
              Td.startGameOver();
            } else {
              if (this.isScenario) {
                Td.showLostScreen("wrong", qd.getGameLvl());
              }
              qd.startNextLevel();
            }
          };
        }

        // Uncomment and adjust as needed
        e.isClicked = true;
        // this.scene.game.audio[this.questionKey].stop();
        // this.scene.game.audio[this.config.feedback[this.answerIndex]].play();
        // this.scene.time.delayedCall(
        //   1000 * this.scene.game.audio[this.config.feedback[this.answerIndex]].duration,
        //   () => {
        //     this.close(r);
        //   }
        // );
        const fixedDelay = 2000; // 2 seconds

        this.scene.time.delayedCall(
          fixedDelay, // Fixed delay
          () => {
            this.close(r);
          }
        );

        return e;
      }),
      e
    );
  }
  //   async addAnswers() {
  //     this.scene.time.delayedCall(
  //       //   1e3 * this.scene.game.audio[this.questionKey].duration,
  //       async () => {
  //         for (let e = 0; e <= this.config.answers.length - 1; e++) {
  //           if (this.submitButton.isClicked) return;
  //           let t = -606,
  //             n = 145 * e - 205,
  //             r = this.config.answers[e];
  //           const a = this.addAnswer(t, n, r, e);
  //           this.answers.push(a), this.add(a);
  //           // await this.delay(
  //           //   1e3 *
  //           //     this.scene.game.audio[this.config.questionVariants[e]].duration
  //           // );
  //         }
  //       }
  //     );
  //   }

  async addAnswers() {
    const delay = 2000; // 2 seconds delay

    const addAnswerWithDelay = (index) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          if (this.submitButton.isClicked) return;
          let t = -606,
            n = 145 * index - 205,
            r = this.config.answers[index];
          const a = this.addAnswer(t, n, r, index);
          this.answers.push(a);
          this.add(a);
          resolve();
        }, 2000); // Delay increases with index to space out additions
      });
    };

    for (let e = 0; e <= this.config.answers.length - 1; e++) {
      await addAnswerWithDelay(e);
    }
  }

  addAnswer(e, t, n, r) {
    const a = new Qd(this.scene, e, t, n, r + 1).setVisible(!1);
    return (
      a.setVisible(!0),
      a.open(),
      (this.actualQuestionVariantKey = this.config.questionVariants[r]),
      //   this.scene.game.audio[this.actualQuestionVariantKey].play(),

      a.handleButtonClick(() => {
        (this.answerIndex = r),
          (this.selectedAnswer = a.getText()),
          this.submitButton.setVisible(!0),
          this.answers.forEach((e) => {
            e.resetButton();
          }),
          a.setButtonPushed();
      }),
      a
    );
  }
  off() {
    this.answers.forEach((e) => {
      e.destroy();
    }),
      this.destroy();
  }
  showCorrectAnswerImage(e) {
    this.correctnessAnswerImage.setVisible(!0);
    const t = "correct" === e ? "question_correct" : "question_wrong";
    this.correctnessAnswerImage.setTexture(t);
  }
  delay(e) {
    return new Promise((t) => {
      this.scene.time.delayedCall(e, t);
    });
  }
  open() {
    this.setScale(0.1),
      (this.openTween = this.scene.tweens.add({
        targets: this,
        ease: "Back.out",
        duration: 600,
        scale: 1,
      }));
  }
  close(e) {
    this.setScale(1),
      (this.closeTween = this.scene.tweens.add({
        targets: this,
        ease: "Back.in",
        duration: 600,
        scale: 0.1,
        onComplete: () => {
          (this.openTween = null), (this.closeTween = null), this.off(), e();
        },
      }));
  }
}
const Gd = {
  1: {
    key: 1,
    text: "Oops. You weren’t clear enough with your friend and got delayed Your other friends have already started the hole. You’ll start with 2 penalty shots.",
    feedback: "penalty_2",
  },
  2: {
    key: 2,
    text: "Oops. While you were gone, your friends finished this hole. You’ll have to take 5 penalty strokes and catch up to them at the next one.",
    feedback: "penalty_5",
  },
};
class Yd extends Phaser.GameObjects.Container {
  constructor(e) {
    super(e),
      (this.scene = e),
      e.add.existing(this),
      (this.x = md / 2),
      (this.y = yd / 2),
      (this.config = null),
      (this.skipLvlCount = null),
      (this.background = this.createBackground()),
      (this.text = this.createText()),
      (this.closeButton = this.createCloseButton()),
      (this.visible = !1),
      (this.openTween = null),
      (this.closeTween = null),
      this.add([this.background, this.text, this.closeButton]);
  }
  createBackground() {
    return this.scene.add.sprite(0, 0, "lost_screen_background");
  }
  createText() {
    return this.scene.add
      .text(0, -52, "o", {
        fontFamily: "teko",
        fontSize: "50px",
        color: "#808080",
        wordWrap: { width: 800 },
      })
      .setOrigin(0.5);
  }
  createCloseButton() {
    const e = new Fd(
      this.scene,
      0,
      170,
      "continue_button",
      "continue_button_push",
      "continue_button_push"
    );
    return (
      e.onClick(() => {
        this.scene.game.audio[this.config.feedback].stop(), this.close();
      }),
      e
    );
  }
  open(e, t) {
    const n = Object.values(Gd);
    "worst" === e
      ? (this.config = n[1])
      : "wrong" === e && (this.config = n[0]);
    const r = this.config.text,
      a = this.config.feedback;
    (this.text.text = r),
      this.scene.game.audio["hole" + t].stop(),
      this.scene.time.delayedCall(1400, () => {
        // this.scene.game.audio[a].play();
      }),
      this.setScale(0.1),
      (this.visible = !0),
      (this.openTween = this.scene.tweens.add({
        targets: this,
        ease: "Back.out",
        duration: 600,
        scale: 1,
      }));
  }
  close() {
    this.setScale(1),
      (this.closeTween = this.scene.tweens.add({
        targets: this,
        ease: "Back.in",
        duration: 400,
        scale: 0.1,
        onComplete: () => {
          (this.visible = !1),
            (this.openTween = null),
            (this.closeTween = null);
        },
      }));
  }
}
class Kd extends n.Scene {
  constructor() {
    super("UI");
  }
  create() {
    (this.instructionButton = this.createInstructionButton()),
      (this.holeCounter = new Wd(this)),
      (this.puttsCounter = new Hd(this)),
      (this.instructionWindow = new Md(this)),
      (this.lostScreen = new Yd(this)),
      (this.questionBoard = null);
  }
  createInstructionButton() {
    const e = new Fd(
      this,
      250,
      116,
      "instruction_button",
      "instruction_button_push",
      "instruction_button_push"
    );
    return (
      e.onClick(() => {
        this.instructionWindow.open();
      }),
      e
    );
  }
  get puttsCount() {
    return this.puttsCounter.getText();
  }
  addPuttsPoint() {
    this.puttsCounter.addPoint();
  }
  getPuttsLimit() {
    return this.puttsCounter.puttsLimit;
  }
  setPuttsLimit(e) {
    this.puttsCounter.puttsLimit = e;
  }
  resetPutts(e) {
    this.puttsCounter.reset(e);
  }
  updateHoleCount(e) {
    this.holeCounter.updateText(e);
  }
  showQuestion(e) {
    this.questionBoard = new $d(this, e);
  }
  openLostScreen(e, t) {
    this.lostScreen.open(e, t);
  }
  restart() {
    this.puttsCounter.reset(), this.holeCounter.reset();
  }
}
class Xd extends n.Scene {
  constructor() {
    super("Preloader");
  }
  init() {
    this.add
      .image(md / 2, yd / 2 - 180, "golf_logo")
      .setOrigin(0.5, 0.5)
      .setScale(0.6),
      this.add
        .rectangle(md / 2 - 234 + 230, yd / 2 + 100, 468, 32)
        .setStrokeStyle(1, 16777215);
    const e = this.add.rectangle(md / 2 - 234, yd / 2 + 100, 4, 28, 16777215);
    this.load.on("progress", (t) => {
      e.width = 4 + 460 * t;
    });
  }
  preload() {
    this.loadImages(),
      this.loadWallCollisionsJSON(),
      this.loadSandCollisionJSON(),
      this.loadAudio(),
      this.load.plugin(
        "rexinputtextplugin",
        "https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexinputtextplugin.min.js",
        !0
      ),
      this.load.plugin(
        "rexninepatchplugin",
        "https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexninepatchplugin.min.js",
        !0
      );
  }
  create() {
    this.addAudioToGame(), this.handleNextScene();
  }
  loadImages() {
    this.load.setPath("assets/images"),
      this.load.image("hole", "hole.png"),
      this.load.image("ball", "ball.png"),
      this.load.image("arrow_head", "arrow_head.png"),
      this.load.image("menu_background", "menu_background.png"),
      this.load.image("play_button", "play_button.png"),
      this.load.image("play_button_push", "play_button_push.png"),
      this.load.image("sand", "sand.png"),
      this.load.image("arrow_body", "arrow_body.png"),
      this.load.image("play_again_button_push", "play_again_button_push.png"),
      this.load.image("play_again_button", "play_again_button.png"),
      this.load.image("instruction_button", "instruction_button.png"),
      this.load.image("instruction", "instruction.png"),
      this.load.image("close_button", "close_button.png"),
      this.load.image("close_button_push", "close_button_push.png"),
      this.load.image("putts_label", "putts_label.png"),
      this.load.image("hole_label", "hole_label.png"),
      this.load.image("question_button", "question_button.png"),
      this.load.image("question_button_push", "question_button_push.png"),
      this.load.image("question_correct", "question_correct.png"),
      this.load.image("question_wrong", "question_wrong.png"),
      this.load.image("question_background", "question_background.png"),
      this.load.image("continue_button", "continue_button.png"),
      this.load.image("continue_button_push", "continue_button_push.png"),
      this.load.image("lost_screen_background", "lost_screen_background.png"),
      this.load.image("submit_button", "submit_button.png"),
      this.load.image("submit_button_push", "submit_button_push.png"),
      this.load.image("scoreboard", "scoreboard.png"),
      this.load.image("play_again_button", "play_again_button.png"),
      this.load.image("play_again_button_push", "play_again_button_push.png"),
      this.load.image("skip_button", "skip_button.png"),
      this.load.image("skip_button_push", "skip_button_push.png"),
      this.load.image("text_placeholder", "text_placeholder.png"),
      this.load.image("sand_map_1", "sand_map_1.png"),
      this.load.image("sand_map_2", "sand_map_2.png"),
      this.load.image("sand_map_3", "sand_map_3.png"),
      this.load.image("sand_map_4", "sand_map_4.png"),
      this.load.image("sand_map_5", "sand_map_5.png"),
      this.load.image("sand_map_8", "sand_map_8.png"),
      this.load.image("sand_map_9", "sand_map_9.png"),
      this.load.image("game_logo", "game_logo.png"),
      this.load.image("overlay_2", "overlay_2.png"),
      this.load.image("overlay_3", "overlay_3.png"),
      this.load.image("overlay_5", "overlay_5.png"),
      this.load.image("overlay_7", "overlay_7.png"),
      this.load.image("overlay_8", "overlay_8.png"),
      this.load.image("overlay_9", "overlay_9.png"),
      this.load.image("instruction_button_push", "instruction_button_push.png");
    for (let e = 1; e <= 9; e++)
      this.load.image("background_lvl_" + e, "background_lvl_" + e + ".png"),
        this.load.image(
          "background_platform_lvl_" + e,
          "background_platform_lvl_" + e + ".png"
        );
  }
  loadWallCollisionsJSON() {
    for (let e = 1; e <= 9; e++)
      this.load.json("wall_collision_" + e, "wall_collision_" + e + ".json");
  }
  loadSandCollisionJSON() {
    this.load.json("sand_collision_1", "sand_collision_1.json"),
      this.load.json("sand_collision_2", "sand_collision_2.json"),
      this.load.json("sand_collision_3", "sand_collision_3.json"),
      this.load.json("sand_collision_4", "sand_collision_4.json"),
      this.load.json("sand_collision_5", "sand_collision_5.json"),
      this.load.json("sand_collision_8", "sand_collision_8.json"),
      this.load.json("sand_collision_9", "sand_collision_9.json");
  }
  handleNextScene() {
    Td.startScene("Login"), qd.initGame(this.scene);
  }
  loadAudio() {
    (this.audio = [
      "hit_ball",
      "ball_bounce",
      "drop_ball_into_hole",
      "game_over_1st",
      "game_over_2nd",
      "game_over_3rd",
      "game_over_4th",
      "true",
      "false",
      "hole1",
      "hole2",
      "hole3",
      "hole4",
      "hole5",
      "hole6",
      "hole7",
      "hole8",
      "hole9",
      "instructions",
      "penalty_2",
      "penalty_5",
      "q1",
      "q2",
      "q3",
      "q4",
      "q5",
      "q6",
      "q7",
      "q8",
      "q9",
      "q10",
      "q11",
      "q12",
      "q13",
      "q14",
      "q15",
      "q16",
      "q17",
      "q18",
      "q19",
      "q20",
      "title",
      "s1",
      "s2",
      "s3",
      "q1_correct",
      "q1_incorrect",
      "q1_a",
      "q1_b",
      "q1_c",
      "q2_correct",
      "q2_incorrect",
      "q2_a",
      "q2_b",
      "q2_c",
      "q3_correct",
      "q3_incorrect",
      "q4_correct",
      "q4_incorrect",
      "q5_correct",
      "q5_incorrect",
      "q6_correct",
      "q6_incorrect",
      "q6_a",
      "q6_b",
      "q6_c",
      "q7_correct",
      "q7_incorrect",
      "q8_correct",
      "q8_incorrect",
      "q8_a",
      "q8_b",
      "q8_c",
      "q9_correct",
      "q9_incorrect",
      "q9_a",
      "q9_b",
      "q9_c",
      "q10_correct",
      "q10_incorrect",
      "q10_a",
      "q10_b",
      "q10_c",
      "q11_correct",
      "q11_incorrect",
      "q11_a",
      "q11_b",
      "q11_c",
      "q12_correct",
      "q12_incorrect",
      "q12_a",
      "q12_b",
      "q12_c",
      "q13_correct",
      "q13_incorrect",
      "q14_correct",
      "q14_incorrect",
      "q14_a",
      "q14_b",
      "q14_c",
      "q15_correct",
      "q15_incorrect",
      "q16_correct",
      "q16_incorrect",
      "q17_correct",
      "q17_incorrect",
      "q17_a",
      "q17_b",
      "q17_c",
      "q18_correct",
      "q18_incorrect",
      "q18_a",
      "q18_b",
      "q18_c",
      "q18_d",
      "q19_correct",
      "q19_incorrect",
      "q19_a",
      "q19_b",
      "q19_c",
      "q20_correct",
      "q20_incorrect",
      "s1_correct",
      "s1_incorrect",
      "s1_incorrect_2",
      "s1_a",
      "s1_b",
      "s1_c",
      "s2_correct",
      "s2_incorrect",
      "s2_incorrect_2",
      "s2_a",
      "s2_b",
      "s2_c",
      "s3_correct",
      "s3_incorrect",
      "s3_incorrect_2",
      "s3_a",
      "s3_b",
      "s3_c",
    ]),
      this.audio.forEach((e) => {
        this.load.audio(e, `../audio/${e}.mp3`);
      });
  }
  addAudioToGame() {
    (this.game.audio = [
      "hit_ball",
      "ball_bounce",
      "drop_ball_into_hole",
      "game_over_1st",
      "game_over_2nd",
      "game_over_3rd",
      "game_over_4th",
      "true",
      "false",
      "hole1",
      "hole2",
      "hole3",
      "hole4",
      "hole5",
      "hole6",
      "hole7",
      "hole8",
      "hole9",
      "instructions",
      "penalty_2",
      "penalty_5",
      "q1",
      "q2",
      "q3",
      "q4",
      "q5",
      "q6",
      "q7",
      "q8",
      "q9",
      "q10",
      "q11",
      "q12",
      "q13",
      "q14",
      "q15",
      "q16",
      "q17",
      "q18",
      "q19",
      "q20",
      "title",
      "s1",
      "s2",
      "s3",
      "q1_correct",
      "q1_incorrect",
      "q1_a",
      "q1_b",
      "q1_c",
      "q2_correct",
      "q2_incorrect",
      "q2_a",
      "q2_b",
      "q2_c",
      "q3_correct",
      "q3_incorrect",
      "q4_correct",
      "q4_incorrect",
      "q5_correct",
      "q5_incorrect",
      "q6_correct",
      "q6_incorrect",
      "q6_a",
      "q6_b",
      "q6_c",
      "q7_correct",
      "q7_incorrect",
      "q8_correct",
      "q8_incorrect",
      "q8_a",
      "q8_b",
      "q8_c",
      "q9_correct",
      "q9_incorrect",
      "q9_a",
      "q9_b",
      "q9_c",
      "q10_correct",
      "q10_incorrect",
      "q10_a",
      "q10_b",
      "q10_c",
      "q11_correct",
      "q11_incorrect",
      "q11_a",
      "q11_b",
      "q11_c",
      "q12_correct",
      "q12_incorrect",
      "q12_a",
      "q12_b",
      "q12_c",
      "q13_correct",
      "q13_incorrect",
      "q14_correct",
      "q14_incorrect",
      "q14_a",
      "q14_b",
      "q14_c",
      "q15_correct",
      "q15_incorrect",
      "q16_correct",
      "q16_incorrect",
      "q17_correct",
      "q17_incorrect",
      "q17_a",
      "q17_b",
      "q17_c",
      "q18_correct",
      "q18_incorrect",
      "q18_a",
      "q18_b",
      "q18_c",
      "q18_d",
      "q19_correct",
      "q19_incorrect",
      "q19_a",
      "q19_b",
      "q19_c",
      "q20_correct",
      "q20_incorrect",
      "s1_correct",
      "s1_incorrect",
      "s1_incorrect_2",
      "s1_a",
      "s1_b",
      "s1_c",
      "s2_correct",
      "s2_incorrect",
      "s2_incorrect_2",
      "s2_a",
      "s2_b",
      "s2_c",
      "s3_correct",
      "s3_incorrect",
      "s3_incorrect_2",
      "s3_a",
      "s3_b",
      "s3_c",
    ]),
      this.audio.forEach((e) => (this.game.audio[e] = this.sound.add(e)));
  }
  setupAudioVolume() {
    this.game.audio.hit_ball.setVolume(0.5);
  }
}
const Jd = {
    type: r.AUTO,
    transparent: !0,
    physics: { default: "matter", matter: { debug: !1, gravity: { y: 0 } } },
    scale: {
      mode: r.Scale.FIT,
      width: md,
      height: yd,
      autoCenter: r.Scale.CENTER_BOTH,
    },
    dom: { createContainer: !0 },
    parent: "game-container",
    scene: [Ed, Xd, Ud, jd, Dd, Kd, Rd],
  },
  Zd = V.forwardRef(function ({ currentActiveScene: e }, t) {
    const n = V.useRef();
    return (
      V.useLayoutEffect(
        () => (
          void 0 === n.current &&
            ((n.current =
              ("game-container",
              new r.Game({ ...Jd, parent: "game-container" }))),
            (globalThis.__PHASER_GAME__ = n.current),
            null !== t && (t.current = { game: n.current, scene: null })),
          () => {
            n.current && (n.current.destroy(!0), (n.current = void 0));
          }
        ),
        [t]
      ),
      V.useEffect(
        () => (
          Vd.on("current-scene-ready", (n) => {
            e instanceof Function && (e(n), (t.current.scene = n));
          }),
          () => {
            Vd.removeListener("current-scene-ready");
          }
        ),
        [e, t]
      ),
      K.jsx("div", { id: "game-container" })
    );
  });
Zd.propTypes = { currentActiveScene: ud.func };
const ef = j.forwardRef((e, t) => {
    const n = V.useRef(null);
    return K.jsxs("div", {
      id: "loading-screen",
      ref: n,
      children: [
        K.jsx("img", {
          id: "logo",
          src: "./assets/images/golf_logo.png",
          alt: "Loading_logo",
        }),
        K.jsx("img", {
          id: "loading-icon",
          src: "./assets/images/loading_game_anim.svg",
          alt: "Loading_icon",
        }),
      ],
    });
  }),
  tf = j.forwardRef((e, t) => {
    const n = V.useRef(null),
      [r, a] = V.useState(!0),
      i = () => {
        a(!1);
      };
    return (
      V.useImperativeHandle(t, () => ({ hideLoadingScreen: i })),
      K.jsx("div", {
        id: "pages",
        ref: t,
        children: r && K.jsx(ef, { ref: n }),
      })
    );
  }),
  nf = new (class {
    constructor() {
      this.pages = null;
    }
    create(e) {
      this.pages = e;
    }
    hideLoadingScreen() {
      this.pages.hideLoadingScreen();
    }
  })(),
  rf = () => {
    const [e, t] = V.useState(!0),
      n = V.useRef(),
      r = V.useRef(null);
    return (
      V.useEffect(() => {
        const e = n.current.game,
          t = r.current;
        Td.init(e.scene),
          nf.create(t),
          dd.resizeScreen(e),
          nf.hideLoadingScreen(),
          window.addEventListener("resize", () => dd.resizeScreen(e));
      }, []),
      K.jsxs("div", {
        id: "app",
        children: [
          K.jsx(Zd, {
            ref: n,
            currentActiveScene: (e) => {
              t("MainMenu" !== e.scene.key);
            },
          }),
          K.jsx(tf, { ref: r }),
        ],
      })
    );
  };
X.createRoot(document.getElementById("root")).render(
  K.jsx(j.StrictMode, { children: K.jsx(rf, {}) })
);

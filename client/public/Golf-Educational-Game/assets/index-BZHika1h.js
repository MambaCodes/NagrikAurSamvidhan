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
  o = {},
  i = { exports: {} },
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
  k = Object.assign,
  _ = {};
function S(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = _),
    (this.updater = n || w);
}
function x() {}
function C(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = _),
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
(P.constructor = C), k(P, S.prototype), (P.isPureReactComponent = !0);
var E = Array.isArray,
  T = Object.prototype.hasOwnProperty,
  L = { current: null },
  N = { key: !0, ref: !0, __self: !0, __source: !0 };
function q(e, t, n) {
  var r,
    a = {},
    o = null,
    i = null;
  if (null != t)
    for (r in (void 0 !== t.ref && (i = t.ref),
    void 0 !== t.key && (o = "" + t.key),
    t))
      T.call(t, r) && !N.hasOwnProperty(r) && (a[r] = t[r]);
  var l = arguments.length - 2;
  if (1 === l) a.children = n;
  else if (1 < l) {
    for (var u = Array(l), c = 0; c < l; c++) u[c] = arguments[c + 2];
    a.children = u;
  }
  if (e && e.defaultProps)
    for (r in (l = e.defaultProps)) void 0 === a[r] && (a[r] = l[r]);
  return { $$typeof: s, type: e, key: o, ref: i, props: a, _owner: L.current };
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
  var o = typeof e;
  ("undefined" !== o && "boolean" !== o) || (e = null);
  var i = !1;
  if (null === e) i = !0;
  else
    switch (o) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case s:
          case u:
            i = !0;
        }
    }
  if (i)
    return (
      (a = a((i = e))),
      (e = "" === r ? "." + A(i, 0) : r),
      E(a)
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
                (!a.key || (i && i.key === a.key)
                  ? ""
                  : ("" + a.key).replace(z, "$&/") + "/") +
                e
            )),
          t.push(a)),
      1
    );
  if (((i = 0), (r = "" === r ? "." : r + ":"), E(e)))
    for (var l = 0; l < e.length; l++) {
      var c = r + A((o = e[l]), l);
      i += I(o, t, n, c, a);
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
    for (e = c.call(e), l = 0; !(o = e.next()).done; )
      i += I((o = o.value), t, n, (c = r + A(o, l++)), a);
  else if ("object" === o)
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
  return i;
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
    ReactCurrentOwner: L,
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
    var r = k({}, e.props),
      a = e.key,
      o = e.ref,
      i = e._owner;
    if (null != t) {
      if (
        (void 0 !== t.ref && ((o = t.ref), (i = L.current)),
        void 0 !== t.key && (a = "" + t.key),
        e.type && e.type.defaultProps)
      )
        var l = e.type.defaultProps;
      for (u in t)
        T.call(t, u) &&
          !N.hasOwnProperty(u) &&
          (r[u] = void 0 === t[u] && void 0 !== l ? l[u] : t[u]);
    }
    var u = arguments.length - 2;
    if (1 === u) r.children = n;
    else if (1 < u) {
      l = Array(u);
      for (var c = 0; c < u; c++) l[c] = arguments[c + 2];
      r.children = l;
    }
    return { $$typeof: s, type: e.type, key: a, ref: o, props: r, _owner: i };
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
  (l.createElement = q),
  (l.createFactory = function (e) {
    var t = q.bind(null, e);
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
  (i.exports = l);
var j = i.exports;
const U = t(j);
var V = j,
  W = Symbol.for("react.element"),
  H = Symbol.for("react.fragment"),
  Q = Object.prototype.hasOwnProperty,
  $ = V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  G = { key: !0, ref: !0, __self: !0, __source: !0 };
function Y(e, t, n) {
  var r,
    a = {},
    o = null,
    i = null;
  for (r in (void 0 !== n && (o = "" + n),
  void 0 !== t.key && (o = "" + t.key),
  void 0 !== t.ref && (i = t.ref),
  t))
    Q.call(t, r) && !G.hasOwnProperty(r) && (a[r] = t[r]);
  if (e && e.defaultProps)
    for (r in (t = e.defaultProps)) void 0 === a[r] && (a[r] = t[r]);
  return { $$typeof: W, type: e, key: o, ref: i, props: a, _owner: $.current };
}
(o.Fragment = H), (o.jsx = Y), (o.jsxs = Y), (a.exports = o);
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
        o = e[r];
      if (!(0 < a(o, t))) break e;
      (e[r] = t), (e[n] = o), (n = r);
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
      e: for (var r = 0, o = e.length, i = o >>> 1; r < i; ) {
        var l = 2 * (r + 1) - 1,
          s = e[l],
          u = l + 1,
          c = e[u];
        if (0 > a(s, n))
          u < o && 0 > a(c, s)
            ? ((e[r] = c), (e[u] = n), (r = u))
            : ((e[r] = s), (e[l] = n), (r = l));
        else {
          if (!(u < o && 0 > a(c, n))) break e;
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
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var i = Date,
      l = i.now();
    e.unstable_now = function () {
      return i.now() - l;
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
      if (null !== n(s)) (p = !0), O(k);
      else {
        var t = n(u);
        null !== t && z(w, t.startTime - e);
      }
  }
  function k(t, a) {
    (p = !1), g && ((g = !1), y(C), (C = -1)), (h = !0);
    var o = f;
    try {
      for (
        b(a), d = n(s);
        null !== d && (!(d.expirationTime > a) || (t && !T()));

      ) {
        var i = d.callback;
        if ("function" == typeof i) {
          (d.callback = null), (f = d.priorityLevel);
          var l = i(d.expirationTime <= a);
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
      (d = null), (f = o), (h = !1);
    }
  }
  "undefined" != typeof navigator &&
    void 0 !== navigator.scheduling &&
    void 0 !== navigator.scheduling.isInputPending &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  var _,
    S = !1,
    x = null,
    C = -1,
    P = 5,
    E = -1;
  function T() {
    return !(e.unstable_now() - E < P);
  }
  function L() {
    if (null !== x) {
      var t = e.unstable_now();
      E = t;
      var n = !0;
      try {
        n = x(!0, t);
      } finally {
        n ? _() : ((S = !1), (x = null));
      }
    } else S = !1;
  }
  if ("function" == typeof v)
    _ = function () {
      v(L);
    };
  else if ("undefined" != typeof MessageChannel) {
    var N = new MessageChannel(),
      q = N.port2;
    (N.port1.onmessage = L),
      (_ = function () {
        q.postMessage(null);
      });
  } else
    _ = function () {
      m(L, 0);
    };
  function O(e) {
    (x = e), S || ((S = !0), _());
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
      p || h || ((p = !0), O(k));
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
    (e.unstable_scheduleCallback = function (r, a, o) {
      var i = e.unstable_now();
      switch (
        ((o =
          "object" == typeof o &&
          null !== o &&
          "number" == typeof (o = o.delay) &&
          0 < o
            ? i + o
            : i),
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
          startTime: o,
          expirationTime: (l = o + l),
          sortIndex: -1,
        }),
        o > i
          ? ((r.sortIndex = o),
            t(u, r),
            null === n(s) &&
              r === n(u) &&
              (g ? (y(C), (C = -1)) : (g = !0), z(w, o - i)))
          : ((r.sortIndex = l), t(s, r), p || h || ((p = !0), O(k))),
        r
      );
    }),
    (e.unstable_shouldYield = T),
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
  re = j,
  ae = ne;
function oe(e) {
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
var ie = new Set(),
  le = {};
function se(e, t) {
  ue(e, t), ue(e + "Capture", t);
}
function ue(e, t) {
  for (le[e] = t, e = 0; e < t.length; e++) ie.add(t[e]);
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
function ge(e, t, n, r, a, o, i) {
  (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
    (this.attributeName = r),
    (this.attributeNamespace = a),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = i);
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
  ke = Symbol.for("react.element"),
  _e = Symbol.for("react.portal"),
  Se = Symbol.for("react.fragment"),
  xe = Symbol.for("react.strict_mode"),
  Ce = Symbol.for("react.profiler"),
  Pe = Symbol.for("react.provider"),
  Ee = Symbol.for("react.context"),
  Te = Symbol.for("react.forward_ref"),
  Le = Symbol.for("react.suspense"),
  Ne = Symbol.for("react.suspense_list"),
  qe = Symbol.for("react.memo"),
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
          o = r.stack.split("\n"),
          i = a.length - 1,
          l = o.length - 1;
        1 <= i && 0 <= l && a[i] !== o[l];

      )
        l--;
      for (; 1 <= i && 0 <= l; i--, l--)
        if (a[i] !== o[l]) {
          if (1 !== i || 1 !== l)
            do {
              if ((i--, 0 > --l || a[i] !== o[l])) {
                var s = "\n" + a[i].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            } while (1 <= i && 0 <= l);
          break;
        }
    }
  } finally {
    (Re = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Fe(e) : "";
}
function je(e) {
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
function Ue(e) {
  if (null == e) return null;
  if ("function" == typeof e) return e.displayName || e.name || null;
  if ("string" == typeof e) return e;
  switch (e) {
    case Se:
      return "Fragment";
    case _e:
      return "Portal";
    case Ce:
      return "Profiler";
    case xe:
      return "StrictMode";
    case Le:
      return "Suspense";
    case Ne:
      return "SuspenseList";
  }
  if ("object" == typeof e)
    switch (e.$$typeof) {
      case Ee:
        return (e.displayName || "Context") + ".Consumer";
      case Pe:
        return (e._context.displayName || "Context") + ".Provider";
      case Te:
        var t = e.render;
        return (
          (e = e.displayName) ||
            (e =
              "" !== (e = t.displayName || t.name || "")
                ? "ForwardRef(" + e + ")"
                : "ForwardRef"),
          e
        );
      case qe:
        return null !== (t = e.displayName || null) ? t : Ue(e.type) || "Memo";
      case Oe:
        (t = e._payload), (e = e._init);
        try {
          return Ue(e(t));
        } catch (n) {}
    }
  return null;
}
function Ve(e) {
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
      return Ue(t);
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
          o = n.set;
        return (
          Object.defineProperty(e, t, {
            configurable: !0,
            get: function () {
              return a.call(this);
            },
            set: function (e) {
              (r = "" + e), o.call(this, e);
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
  if (null != t.dangerouslySetInnerHTML) throw Error(oe(91));
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
      if (null != t) throw Error(oe(92));
      if (tt(n)) {
        if (1 < n.length) throw Error(oe(93));
        n = n[0];
      }
      t = n;
    }
    null == t && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: We(n) };
}
function ot(e, t) {
  var n = We(t.value),
    r = We(t.defaultValue);
  null != n &&
    ((n = "" + n) !== e.value && (e.value = n),
    null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)),
    null != r && (e.defaultValue = "" + r);
}
function it(e) {
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
      throw Error(oe(137, e));
    if (null != t.dangerouslySetInnerHTML) {
      if (null != t.children) throw Error(oe(60));
      if (
        "object" != typeof t.dangerouslySetInnerHTML ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(oe(61));
    }
    if (null != t.style && "object" != typeof t.style) throw Error(oe(62));
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
function kt(e) {
  return (
    (e = e.target || e.srcElement || window).correspondingUseElement &&
      (e = e.correspondingUseElement),
    3 === e.nodeType ? e.parentNode : e
  );
}
var _t = null,
  St = null,
  xt = null;
function Ct(e) {
  if ((e = wo(e))) {
    if ("function" != typeof _t) throw Error(oe(280));
    var t = e.stateNode;
    t && ((t = _o(t)), _t(e.stateNode, e.type, t));
  }
}
function Pt(e) {
  St ? (xt ? xt.push(e) : (xt = [e])) : (St = e);
}
function Et() {
  if (St) {
    var e = St,
      t = xt;
    if (((xt = St = null), Ct(e), t)) for (e = 0; e < t.length; e++) Ct(t[e]);
  }
}
function Tt(e, t) {
  return e(t);
}
function Lt() {}
var Nt = !1;
function qt(e, t, n) {
  if (Nt) return e(t, n);
  Nt = !0;
  try {
    return Tt(e, t, n);
  } finally {
    (Nt = !1), (null !== St || null !== xt) && (Lt(), Et());
  }
}
function Ot(e, t) {
  var n = e.stateNode;
  if (null === n) return null;
  var r = _o(n);
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
  if (n && "function" != typeof n) throw Error(oe(231, t, typeof n));
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
function It(e, t, n, r, a, o, i, l, s) {
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
function jt(e, t, n, r, a, o, i, l, s) {
  (Bt = !1), (Dt = null), It.apply(Mt, arguments);
}
function Ut(e) {
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
function Vt(e) {
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
  if (Ut(e) !== e) throw Error(oe(188));
}
function Ht(e) {
  return null !==
    (e = (function (e) {
      var t = e.alternate;
      if (!t) {
        if (null === (t = Ut(e))) throw Error(oe(188));
        return t !== e ? null : e;
      }
      for (var n = e, r = t; ; ) {
        var a = n.return;
        if (null === a) break;
        var o = a.alternate;
        if (null === o) {
          if (null !== (r = a.return)) {
            n = r;
            continue;
          }
          break;
        }
        if (a.child === o.child) {
          for (o = a.child; o; ) {
            if (o === n) return Wt(a), e;
            if (o === r) return Wt(a), t;
            o = o.sibling;
          }
          throw Error(oe(188));
        }
        if (n.return !== r.return) (n = a), (r = o);
        else {
          for (var i = !1, l = a.child; l; ) {
            if (l === n) {
              (i = !0), (n = a), (r = o);
              break;
            }
            if (l === r) {
              (i = !0), (r = a), (n = o);
              break;
            }
            l = l.sibling;
          }
          if (!i) {
            for (l = o.child; l; ) {
              if (l === n) {
                (i = !0), (n = o), (r = a);
                break;
              }
              if (l === r) {
                (i = !0), (r = o), (n = a);
                break;
              }
              l = l.sibling;
            }
            if (!i) throw Error(oe(189));
          }
        }
        if (n.alternate !== r) throw Error(oe(190));
      }
      if (3 !== n.tag) throw Error(oe(188));
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
    o = e.pingedLanes,
    i = 268435455 & n;
  if (0 !== i) {
    var l = i & ~a;
    0 !== l ? (r = fn(l)) : 0 != (o &= i) && (r = fn(o));
  } else 0 != (i = n & ~a) ? (r = fn(i)) : 0 !== o && (r = fn(o));
  if (0 === r) return 0;
  if (
    0 !== t &&
    t !== r &&
    0 == (t & a) &&
    ((a = r & -r) >= (o = t & -t) || (16 === a && 0 != (4194240 & o)))
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
function kn(e) {
  return 1 < (e &= -e)
    ? 4 < e
      ? 0 != (268435455 & e)
        ? 16
        : 536870912
      : 4
    : 1;
}
var _n,
  Sn,
  xn,
  Cn,
  Pn,
  En = !1,
  Tn = [],
  Ln = null,
  Nn = null,
  qn = null,
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
      Ln = null;
      break;
    case "dragenter":
    case "dragleave":
      Nn = null;
      break;
    case "mouseover":
    case "mouseout":
      qn = null;
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
function Dn(e, t, n, r, a, o) {
  return null === e || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [a],
      }),
      null !== t && null !== (t = wo(t)) && Sn(t),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      null !== a && -1 === t.indexOf(a) && t.push(a),
      e);
}
function Fn(e) {
  var t = bo(e.target);
  if (null !== t) {
    var n = Ut(t);
    if (null !== n)
      if (13 === (t = n.tag)) {
        if (null !== (t = Vt(n)))
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
    if (null !== n) return null !== (t = wo(n)) && Sn(t), (e.blockedOn = n), !1;
    var r = new (n = e.nativeEvent).constructor(n.type, n);
    (wt = r), n.target.dispatchEvent(r), (wt = null), t.shift();
  }
  return !0;
}
function Mn(e, t, n) {
  Rn(e) && n.delete(t);
}
function jn() {
  (En = !1),
    null !== Ln && Rn(Ln) && (Ln = null),
    null !== Nn && Rn(Nn) && (Nn = null),
    null !== qn && Rn(qn) && (qn = null),
    On.forEach(Mn),
    zn.forEach(Mn);
}
function Un(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    En ||
      ((En = !0),
      ae.unstable_scheduleCallback(ae.unstable_NormalPriority, jn)));
}
function Vn(e) {
  function t(t) {
    return Un(t, e);
  }
  if (0 < Tn.length) {
    Un(Tn[0], e);
    for (var n = 1; n < Tn.length; n++) {
      var r = Tn[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    null !== Ln && Un(Ln, e),
      null !== Nn && Un(Nn, e),
      null !== qn && Un(qn, e),
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
    o = Wn.transition;
  Wn.transition = null;
  try {
    (wn = 1), Gn(e, t, n, r);
  } finally {
    (wn = a), (Wn.transition = o);
  }
}
function $n(e, t, n, r) {
  var a = wn,
    o = Wn.transition;
  Wn.transition = null;
  try {
    (wn = 4), Gn(e, t, n, r);
  } finally {
    (wn = a), (Wn.transition = o);
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
            return (Ln = Dn(Ln, e, t, n, r, a)), !0;
          case "dragenter":
            return (Nn = Dn(Nn, e, t, n, r, a)), !0;
          case "mouseover":
            return (qn = Dn(qn, e, t, n, r, a)), !0;
          case "pointerover":
            var o = a.pointerId;
            return On.set(o, Dn(On.get(o) || null, e, t, n, r, a)), !0;
          case "gotpointercapture":
            return (
              (o = a.pointerId),
              zn.set(o, Dn(zn.get(o) || null, e, t, n, r, a)),
              !0
            );
        }
        return !1;
      })(a, e, t, n, r)
    )
      r.stopPropagation();
    else if ((Bn(e, r), 4 & t && -1 < In.indexOf(e))) {
      for (; null !== a; ) {
        var o = wo(a);
        if (
          (null !== o && _n(o),
          null === (o = Kn(e, t, n, r)) && Wa(e, t, r, Yn, n),
          o === a)
        )
          break;
        a = o;
      }
      null !== a && r.stopPropagation();
    } else Wa(e, t, r, null, n);
  }
}
var Yn = null;
function Kn(e, t, n, r) {
  if (((Yn = null), null !== (e = bo((e = kt(r))))))
    if (null === (t = Ut(e))) e = null;
    else if (13 === (n = t.tag)) {
      if (null !== (e = Vt(t))) return e;
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
    o = a.length;
  for (e = 0; e < r && n[e] === a[e]; e++);
  var i = r - e;
  for (t = 1; t <= i && n[r - t] === a[o - t]; t++);
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
function or(e) {
  function t(t, n, r, a, o) {
    for (var i in ((this._reactName = t),
    (this._targetInst = r),
    (this.type = n),
    (this.nativeEvent = a),
    (this.target = o),
    (this.currentTarget = null),
    e))
      e.hasOwnProperty(i) && ((t = e[i]), (this[i] = t ? t(a) : a[i]));
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
var ir,
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
  cr = or(ur),
  dr = De({}, ur, { view: 0, detail: 0 }),
  fr = or(dr),
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
              ? ((ir = e.screenX - sr.screenX), (lr = e.screenY - sr.screenY))
              : (lr = ir = 0),
            (sr = e)),
          ir);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : lr;
    },
  }),
  pr = or(hr),
  gr = or(De({}, hr, { dataTransfer: 0 })),
  mr = or(De({}, dr, { relatedTarget: 0 })),
  yr = or(De({}, ur, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })),
  vr = De({}, ur, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  br = or(vr),
  wr = or(De({}, ur, { data: 0 })),
  kr = {
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
  _r = {
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
        var t = kr[e.key] || e.key;
        if ("Unidentified" !== t) return t;
      }
      return "keypress" === e.type
        ? 13 === (e = nr(e))
          ? "Enter"
          : String.fromCharCode(e)
        : "keydown" === e.type || "keyup" === e.type
        ? _r[e.keyCode] || "Unidentified"
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
  Er = or(Pr),
  Tr = or(
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
  Lr = or(
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
  Nr = or(De({}, ur, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
  qr = De({}, hr, {
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
  Or = or(qr),
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
function jr(e) {
  return "object" == typeof (e = e.detail) && "data" in e ? e.data : null;
}
var Ur = !1,
  Vr = {
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
  return "input" === t ? !!Vr[e.type] : "textarea" === t;
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
  if ($e(ko(e))) return e;
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
    Hr(t, $r, e, kt(e)), qt(Gr, t);
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
function oa(e, t) {
  if ("click" === e) return Yr(t);
}
function ia(e, t) {
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
          o = Math.min(r.start, a);
        (r = void 0 === r.end ? o : Math.min(r.end, a)),
          !e.extend && o > r && ((a = r), (r = o), (o = a)),
          (a = ca(n, o));
        var i = ca(n, r);
        a &&
          i &&
          (1 !== e.rangeCount ||
            e.anchorNode !== a.node ||
            e.anchorOffset !== a.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()).setStart(a.node, a.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)));
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
function ka(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var _a = {
    animationend: ka("Animation", "AnimationEnd"),
    animationiteration: ka("Animation", "AnimationIteration"),
    animationstart: ka("Animation", "AnimationStart"),
    transitionend: ka("Transition", "TransitionEnd"),
  },
  Sa = {},
  xa = {};
function Ca(e) {
  if (Sa[e]) return Sa[e];
  if (!_a[e]) return e;
  var t,
    n = _a[e];
  for (t in n) if (n.hasOwnProperty(t) && t in xa) return (Sa[e] = n[t]);
  return e;
}
ce &&
  ((xa = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete _a.animationend.animation,
    delete _a.animationiteration.animation,
    delete _a.animationstart.animation),
  "TransitionEvent" in window || delete _a.transitionend.transition);
var Pa = Ca("animationend"),
  Ea = Ca("animationiteration"),
  Ta = Ca("animationstart"),
  La = Ca("transitionend"),
  Na = new Map(),
  qa =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Oa(e, t) {
  Na.set(e, t), se(t, [e]);
}
for (var za = 0; za < qa.length; za++) {
  var Aa = qa[za];
  Oa(Aa.toLowerCase(), "on" + (Aa[0].toUpperCase() + Aa.slice(1)));
}
Oa(Pa, "onAnimationEnd"),
  Oa(Ea, "onAnimationIteration"),
  Oa(Ta, "onAnimationStart"),
  Oa("dblclick", "onDoubleClick"),
  Oa("focusin", "onFocus"),
  Oa("focusout", "onBlur"),
  Oa(La, "onTransitionEnd"),
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
    (function (e, t, n, r, a, o, i, l, s) {
      if ((jt.apply(this, arguments), Bt)) {
        if (!Bt) throw Error(oe(198));
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
      var o = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var l = r[i],
            s = l.instance,
            u = l.currentTarget;
          if (((l = l.listener), s !== o && a.isPropagationStopped())) break e;
          Da(a, l, u), (o = s);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((s = (l = r[i]).instance),
            (u = l.currentTarget),
            (l = l.listener),
            s !== o && a.isPropagationStopped())
          )
            break e;
          Da(a, l, u), (o = s);
        }
    }
  }
  if (Ft) throw ((e = Rt), (Ft = !1), (Rt = null), e);
}
function Ra(e, t) {
  var n = t[mo];
  void 0 === n && (n = t[mo] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Va(t, e, 2, !1), n.add(r));
}
function Ma(e, t, n) {
  var r = 0;
  t && (r |= 4), Va(n, e, r, t);
}
var ja = "_reactListening" + Math.random().toString(36).slice(2);
function Ua(e) {
  if (!e[ja]) {
    (e[ja] = !0),
      ie.forEach(function (t) {
        "selectionchange" !== t && (Ba.has(t) || Ma(t, !1, e), Ma(t, !0, e));
      });
    var t = 9 === e.nodeType ? e : e.ownerDocument;
    null === t || t[ja] || ((t[ja] = !0), Ma("selectionchange", !1, t));
  }
}
function Va(e, t, n, r) {
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
  var o = r;
  if (0 == (1 & t) && 0 == (2 & t) && null !== r)
    e: for (;;) {
      if (null === r) return;
      var i = r.tag;
      if (3 === i || 4 === i) {
        var l = r.stateNode.containerInfo;
        if (l === a || (8 === l.nodeType && l.parentNode === a)) break;
        if (4 === i)
          for (i = r.return; null !== i; ) {
            var s = i.tag;
            if (
              (3 === s || 4 === s) &&
              ((s = i.stateNode.containerInfo) === a ||
                (8 === s.nodeType && s.parentNode === a))
            )
              return;
            i = i.return;
          }
        for (; null !== l; ) {
          if (null === (i = bo(l))) return;
          if (5 === (s = i.tag) || 6 === s) {
            r = o = i;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  qt(function () {
    var r = o,
      a = kt(n),
      i = [];
    e: {
      var l = Na.get(e);
      if (void 0 !== l) {
        var s = cr,
          u = e;
        switch (e) {
          case "keypress":
            if (0 === nr(n)) break e;
          case "keydown":
          case "keyup":
            s = Er;
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
            s = Lr;
            break;
          case Pa:
          case Ea:
          case Ta:
            s = yr;
            break;
          case La:
            s = Nr;
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
            s = Tr;
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
          ((l = new s(l, u, null, n, a)), i.push({ event: l, listeners: c }));
      }
    }
    if (0 == (7 & t)) {
      if (
        ((s = "mouseout" === e || "pointerout" === e),
        (!(l = "mouseover" === e || "pointerover" === e) ||
          n === wt ||
          !(u = n.relatedTarget || n.fromElement) ||
          (!bo(u) && !u[go])) &&
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
                (u = (u = n.relatedTarget || n.toElement) ? bo(u) : null) &&
                (u !== (d = Ut(u)) || (5 !== u.tag && 6 !== u.tag)) &&
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
            ((c = Tr),
            (g = "onPointerLeave"),
            (f = "onPointerEnter"),
            (p = "pointer")),
          (d = null == s ? l : ko(s)),
          (h = null == u ? l : ko(u)),
          ((l = new c(g, p + "leave", s, n, a)).target = d),
          (l.relatedTarget = h),
          (g = null),
          bo(a) === r &&
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
        null !== s && Ga(i, l, s, c, !1),
          null !== u && null !== d && Ga(i, d, u, c, !0);
      }
      if (
        "select" ===
          (s = (l = r ? ko(r) : window).nodeName && l.nodeName.toLowerCase()) ||
        ("input" === s && "file" === l.type)
      )
        var m = Kr;
      else if (Wr(l))
        if (Xr) m = ia;
        else {
          m = aa;
          var y = ra;
        }
      else
        (s = l.nodeName) &&
          "input" === s.toLowerCase() &&
          ("checkbox" === l.type || "radio" === l.type) &&
          (m = oa);
      switch (
        (m && (m = m(e, r))
          ? Hr(i, m, n, a)
          : (y && y(e, l, r),
            "focusout" === e &&
              (y = l._wrapperState) &&
              y.controlled &&
              "number" === l.type &&
              et(l, "number", l.value)),
        (y = r ? ko(r) : window),
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
          (ba = !1), wa(i, n, a);
          break;
        case "selectionchange":
          if (ga) break;
        case "keydown":
        case "keyup":
          wa(i, n, a);
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
        Ur
          ? Mr(e, n) && (b = "onCompositionEnd")
          : "keydown" === e && 229 === n.keyCode && (b = "onCompositionStart");
      b &&
        (Dr &&
          "ko" !== n.locale &&
          (Ur || "onCompositionStart" !== b
            ? "onCompositionEnd" === b && Ur && (v = tr())
            : ((Zn = "value" in (Jn = a) ? Jn.value : Jn.textContent),
              (Ur = !0))),
        0 < (y = Qa(r, b)).length &&
          ((b = new wr(b, e, null, n, a)),
          i.push({ event: b, listeners: y }),
          (v || null !== (v = jr(n))) && (b.data = v))),
        (v = Br
          ? (function (e, t) {
              switch (e) {
                case "compositionend":
                  return jr(t);
                case "keypress":
                  return 32 !== t.which ? null : ((Rr = !0), Fr);
                case "textInput":
                  return (e = t.data) === Fr && Rr ? null : e;
                default:
                  return null;
              }
            })(e, n)
          : (function (e, t) {
              if (Ur)
                return "compositionend" === e || (!Ar && Mr(e, t))
                  ? ((e = tr()), (er = Zn = Jn = null), (Ur = !1), e)
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
          i.push({ event: a, listeners: r }),
          (a.data = v));
    }
    Fa(i, t);
  });
}
function Ha(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Qa(e, t) {
  for (var n = t + "Capture", r = []; null !== e; ) {
    var a = e,
      o = a.stateNode;
    5 === a.tag &&
      null !== o &&
      ((a = o),
      null != (o = Ot(e, n)) && r.unshift(Ha(e, o, a)),
      null != (o = Ot(e, t)) && r.push(Ha(e, o, a))),
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
  for (var o = t._reactName, i = []; null !== n && n !== r; ) {
    var l = n,
      s = l.alternate,
      u = l.stateNode;
    if (null !== s && s === r) break;
    5 === l.tag &&
      null !== u &&
      ((l = u),
      a
        ? null != (s = Ot(n, o)) && i.unshift(Ha(n, s, l))
        : a || (null != (s = Ot(n, o)) && i.push(Ha(n, s, l)))),
      (n = n.return);
  }
  0 !== i.length && e.push({ event: t, listeners: i });
}
var Ya = /\r\n?/g,
  Ka = /\u0000|\uFFFD/g;
function Xa(e) {
  return ("string" == typeof e ? e : "" + e).replace(Ya, "\n").replace(Ka, "");
}
function Ja(e, t, n) {
  if (((t = Xa(t)), Xa(e) !== t && n)) throw Error(oe(425));
}
function Za() {}
var eo = null,
  to = null;
function no(e, t) {
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
var ro = "function" == typeof setTimeout ? setTimeout : void 0,
  ao = "function" == typeof clearTimeout ? clearTimeout : void 0,
  oo = "function" == typeof Promise ? Promise : void 0,
  io =
    "function" == typeof queueMicrotask
      ? queueMicrotask
      : void 0 !== oo
      ? function (e) {
          return oo.resolve(null).then(e).catch(lo);
        }
      : ro;
function lo(e) {
  setTimeout(function () {
    throw e;
  });
}
function so(e, t) {
  var n = t,
    r = 0;
  do {
    var a = n.nextSibling;
    if ((e.removeChild(n), a && 8 === a.nodeType))
      if ("/$" === (n = a.data)) {
        if (0 === r) return e.removeChild(a), void Vn(t);
        r--;
      } else ("$" !== n && "$?" !== n && "$!" !== n) || r++;
    n = a;
  } while (n);
  Vn(t);
}
function uo(e) {
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
function co(e) {
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
var fo = Math.random().toString(36).slice(2),
  ho = "__reactFiber$" + fo,
  po = "__reactProps$" + fo,
  go = "__reactContainer$" + fo,
  mo = "__reactEvents$" + fo,
  yo = "__reactListeners$" + fo,
  vo = "__reactHandles$" + fo;
function bo(e) {
  var t = e[ho];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[go] || n[ho])) {
      if (
        ((n = t.alternate),
        null !== t.child || (null !== n && null !== n.child))
      )
        for (e = co(e); null !== e; ) {
          if ((n = e[ho])) return n;
          e = co(e);
        }
      return t;
    }
    n = (e = n).parentNode;
  }
  return null;
}
function wo(e) {
  return !(e = e[ho] || e[go]) ||
    (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
    ? null
    : e;
}
function ko(e) {
  if (5 === e.tag || 6 === e.tag) return e.stateNode;
  throw Error(oe(33));
}
function _o(e) {
  return e[po] || null;
}
var So = [],
  xo = -1;
function Co(e) {
  return { current: e };
}
function Po(e) {
  0 > xo || ((e.current = So[xo]), (So[xo] = null), xo--);
}
function Eo(e, t) {
  xo++, (So[xo] = e.current), (e.current = t);
}
var To = {},
  Lo = Co(To),
  No = Co(!1),
  qo = To;
function Oo(e, t) {
  var n = e.type.contextTypes;
  if (!n) return To;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var a,
    o = {};
  for (a in n) o[a] = t[a];
  return (
    r &&
      (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function zo(e) {
  return null != e.childContextTypes;
}
function Ao() {
  Po(No), Po(Lo);
}
function Io(e, t, n) {
  if (Lo.current !== To) throw Error(oe(168));
  Eo(Lo, t), Eo(No, n);
}
function Bo(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), "function" != typeof r.getChildContext))
    return n;
  for (var a in (r = r.getChildContext()))
    if (!(a in t)) throw Error(oe(108, Ve(e) || "Unknown", a));
  return De({}, n, r);
}
function Do(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || To),
    (qo = Lo.current),
    Eo(Lo, e),
    Eo(No, No.current),
    !0
  );
}
function Fo(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(oe(169));
  n
    ? ((e = Bo(e, t, qo)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      Po(No),
      Po(Lo),
      Eo(Lo, e))
    : Po(No),
    Eo(No, n);
}
var Ro = null,
  Mo = !1,
  jo = !1;
function Uo(e) {
  null === Ro ? (Ro = [e]) : Ro.push(e);
}
function Vo() {
  if (!jo && null !== Ro) {
    jo = !0;
    var e = 0,
      t = wn;
    try {
      var n = Ro;
      for (wn = 1; e < n.length; e++) {
        var r = n[e];
        do {
          r = r(!0);
        } while (null !== r);
      }
      (Ro = null), (Mo = !1);
    } catch (a) {
      throw (null !== Ro && (Ro = Ro.slice(e + 1)), $t(Zt, Vo), a);
    } finally {
      (wn = t), (jo = !1);
    }
  }
  return null;
}
var Wo = [],
  Ho = 0,
  Qo = null,
  $o = 0,
  Go = [],
  Yo = 0,
  Ko = null,
  Xo = 1,
  Jo = "";
function Zo(e, t) {
  (Wo[Ho++] = $o), (Wo[Ho++] = Qo), (Qo = e), ($o = t);
}
function ei(e, t, n) {
  (Go[Yo++] = Xo), (Go[Yo++] = Jo), (Go[Yo++] = Ko), (Ko = e);
  var r = Xo;
  e = Jo;
  var a = 32 - ln(r) - 1;
  (r &= ~(1 << a)), (n += 1);
  var o = 32 - ln(t) + a;
  if (30 < o) {
    var i = a - (a % 5);
    (o = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (a -= i),
      (Xo = (1 << (32 - ln(t) + a)) | (n << a) | r),
      (Jo = o + e);
  } else (Xo = (1 << o) | (n << a) | r), (Jo = e);
}
function ti(e) {
  null !== e.return && (Zo(e, 1), ei(e, 1, 0));
}
function ni(e) {
  for (; e === Qo; )
    (Qo = Wo[--Ho]), (Wo[Ho] = null), ($o = Wo[--Ho]), (Wo[Ho] = null);
  for (; e === Ko; )
    (Ko = Go[--Yo]),
      (Go[Yo] = null),
      (Jo = Go[--Yo]),
      (Go[Yo] = null),
      (Xo = Go[--Yo]),
      (Go[Yo] = null);
}
var ri = null,
  ai = null,
  oi = !1,
  ii = null;
function li(e, t) {
  var n = Oc(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    null === (t = e.deletions)
      ? ((e.deletions = [n]), (e.flags |= 16))
      : t.push(n);
}
function si(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        null !==
          (t =
            1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t) && ((e.stateNode = t), (ri = e), (ai = uo(t.firstChild)), !0)
      );
    case 6:
      return (
        null !== (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
        ((e.stateNode = t), (ri = e), (ai = null), !0)
      );
    case 13:
      return (
        null !== (t = 8 !== t.nodeType ? null : t) &&
        ((n = null !== Ko ? { id: Xo, overflow: Jo } : null),
        (e.memoizedState = {
          dehydrated: t,
          treeContext: n,
          retryLane: 1073741824,
        }),
        ((n = Oc(18, null, null, 0)).stateNode = t),
        (n.return = e),
        (e.child = n),
        (ri = e),
        (ai = null),
        !0)
      );
    default:
      return !1;
  }
}
function ui(e) {
  return 0 != (1 & e.mode) && 0 == (128 & e.flags);
}
function ci(e) {
  if (oi) {
    var t = ai;
    if (t) {
      var n = t;
      if (!si(e, t)) {
        if (ui(e)) throw Error(oe(418));
        t = uo(n.nextSibling);
        var r = ri;
        t && si(e, t)
          ? li(r, n)
          : ((e.flags = (-4097 & e.flags) | 2), (oi = !1), (ri = e));
      }
    } else {
      if (ui(e)) throw Error(oe(418));
      (e.flags = (-4097 & e.flags) | 2), (oi = !1), (ri = e);
    }
  }
}
function di(e) {
  for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag; )
    e = e.return;
  ri = e;
}
function fi(e) {
  if (e !== ri) return !1;
  if (!oi) return di(e), (oi = !0), !1;
  var t;
  if (
    ((t = 3 !== e.tag) &&
      !(t = 5 !== e.tag) &&
      (t =
        "head" !== (t = e.type) &&
        "body" !== t &&
        !no(e.type, e.memoizedProps)),
    t && (t = ai))
  ) {
    if (ui(e)) throw (hi(), Error(oe(418)));
    for (; t; ) li(e, t), (t = uo(t.nextSibling));
  }
  if ((di(e), 13 === e.tag)) {
    if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
      throw Error(oe(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (8 === e.nodeType) {
          var n = e.data;
          if ("/$" === n) {
            if (0 === t) {
              ai = uo(e.nextSibling);
              break e;
            }
            t--;
          } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
        }
        e = e.nextSibling;
      }
      ai = null;
    }
  } else ai = ri ? uo(e.stateNode.nextSibling) : null;
  return !0;
}
function hi() {
  for (var e = ai; e; ) e = uo(e.nextSibling);
}
function pi() {
  (ai = ri = null), (oi = !1);
}
function gi(e) {
  null === ii ? (ii = [e]) : ii.push(e);
}
var mi = we.ReactCurrentBatchConfig;
function yi(e, t) {
  if (e && e.defaultProps) {
    for (var n in ((t = De({}, t)), (e = e.defaultProps)))
      void 0 === t[n] && (t[n] = e[n]);
    return t;
  }
  return t;
}
var vi = Co(null),
  bi = null,
  wi = null,
  ki = null;
function _i() {
  ki = wi = bi = null;
}
function Si(e) {
  var t = vi.current;
  Po(vi), (e._currentValue = t);
}
function xi(e, t, n) {
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
function Ci(e, t) {
  (bi = e),
    (ki = wi = null),
    null !== (e = e.dependencies) &&
      null !== e.firstContext &&
      (0 != (e.lanes & t) && (ws = !0), (e.firstContext = null));
}
function Pi(e) {
  var t = e._currentValue;
  if (ki !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), null === wi)) {
      if (null === bi) throw Error(oe(308));
      (wi = e), (bi.dependencies = { lanes: 0, firstContext: e });
    } else wi = wi.next = e;
  return t;
}
var Ei = null;
function Ti(e) {
  null === Ei ? (Ei = [e]) : Ei.push(e);
}
function Li(e, t, n, r) {
  var a = t.interleaved;
  return (
    null === a ? ((n.next = n), Ti(t)) : ((n.next = a.next), (a.next = n)),
    (t.interleaved = n),
    Ni(e, r)
  );
}
function Ni(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
    (e.childLanes |= t),
      null !== (n = e.alternate) && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return 3 === n.tag ? n.stateNode : null;
}
var qi = !1;
function Oi(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function zi(e, t) {
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
function Ai(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Ii(e, t, n) {
  var r = e.updateQueue;
  if (null === r) return null;
  if (((r = r.shared), 0 != (2 & Lu))) {
    var a = r.pending;
    return (
      null === a ? (t.next = t) : ((t.next = a.next), (a.next = t)),
      (r.pending = t),
      Ni(e, n)
    );
  }
  return (
    null === (a = r.interleaved)
      ? ((t.next = t), Ti(r))
      : ((t.next = a.next), (a.next = t)),
    (r.interleaved = t),
    Ni(e, n)
  );
}
function Bi(e, t, n) {
  if (null !== (t = t.updateQueue) && ((t = t.shared), 0 != (4194240 & n))) {
    var r = t.lanes;
    (n |= r &= e.pendingLanes), (t.lanes = n), bn(e, n);
  }
}
function Di(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (null !== r && n === (r = r.updateQueue)) {
    var a = null,
      o = null;
    if (null !== (n = n.firstBaseUpdate)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        null === o ? (a = o = i) : (o = o.next = i), (n = n.next);
      } while (null !== n);
      null === o ? (a = o = t) : (o = o.next = t);
    } else a = o = t;
    return (
      (n = {
        baseState: r.baseState,
        firstBaseUpdate: a,
        lastBaseUpdate: o,
        shared: r.shared,
        effects: r.effects,
      }),
      void (e.updateQueue = n)
    );
  }
  null === (e = n.lastBaseUpdate) ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Fi(e, t, n, r) {
  var a = e.updateQueue;
  qi = !1;
  var o = a.firstBaseUpdate,
    i = a.lastBaseUpdate,
    l = a.shared.pending;
  if (null !== l) {
    a.shared.pending = null;
    var s = l,
      u = s.next;
    (s.next = null), null === i ? (o = u) : (i.next = u), (i = s);
    var c = e.alternate;
    null !== c &&
      (l = (c = c.updateQueue).lastBaseUpdate) !== i &&
      (null === l ? (c.firstBaseUpdate = u) : (l.next = u),
      (c.lastBaseUpdate = s));
  }
  if (null !== o) {
    var d = a.baseState;
    for (i = 0, c = u = s = null, l = o; ; ) {
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
              qi = !0;
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
          (i |= f);
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
        (i |= a.lane), (a = a.next);
      } while (a !== t);
    } else null === o && (a.shared.lanes = 0);
    (Du |= i), (e.lanes = i), (e.memoizedState = d);
  }
}
function Ri(e, t, n) {
  if (((e = t.effects), (t.effects = null), null !== e))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        a = r.callback;
      if (null !== a) {
        if (((r.callback = null), (r = n), "function" != typeof a))
          throw Error(oe(191, a));
        a.call(r);
      }
    }
}
var Mi = new re.Component().refs;
function ji(e, t, n, r) {
  (n = null == (n = n(r, (t = e.memoizedState))) ? t : De({}, t, n)),
    (e.memoizedState = n),
    0 === e.lanes && (e.updateQueue.baseState = n);
}
var Ui = {
  isMounted: function (e) {
    return !!(e = e._reactInternals) && Ut(e) === e;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = tc(),
      a = nc(e),
      o = Ai(r, a);
    (o.payload = t),
      null != n && (o.callback = n),
      null !== (t = Ii(e, o, a)) && (rc(t, e, a, r), Bi(t, e, a));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = tc(),
      a = nc(e),
      o = Ai(r, a);
    (o.tag = 1),
      (o.payload = t),
      null != n && (o.callback = n),
      null !== (t = Ii(e, o, a)) && (rc(t, e, a, r), Bi(t, e, a));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = tc(),
      r = nc(e),
      a = Ai(n, r);
    (a.tag = 2),
      null != t && (a.callback = t),
      null !== (t = Ii(e, a, r)) && (rc(t, e, r, n), Bi(t, e, r));
  },
};
function Vi(e, t, n, r, a, o, i) {
  return "function" == typeof (e = e.stateNode).shouldComponentUpdate
    ? e.shouldComponentUpdate(r, o, i)
    : !(
        t.prototype &&
        t.prototype.isPureReactComponent &&
        sa(n, r) &&
        sa(a, o)
      );
}
function Wi(e, t, n) {
  var r = !1,
    a = To,
    o = t.contextType;
  return (
    "object" == typeof o && null !== o
      ? (o = Pi(o))
      : ((a = zo(t) ? qo : Lo.current),
        (o = (r = null != (r = t.contextTypes)) ? Oo(e, a) : To)),
    (t = new t(n, o)),
    (e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null),
    (t.updater = Ui),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = a),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function Hi(e, t, n, r) {
  (e = t.state),
    "function" == typeof t.componentWillReceiveProps &&
      t.componentWillReceiveProps(n, r),
    "function" == typeof t.UNSAFE_componentWillReceiveProps &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Ui.enqueueReplaceState(t, t.state, null);
}
function Qi(e, t, n, r) {
  var a = e.stateNode;
  (a.props = n), (a.state = e.memoizedState), (a.refs = Mi), Oi(e);
  var o = t.contextType;
  "object" == typeof o && null !== o
    ? (a.context = Pi(o))
    : ((o = zo(t) ? qo : Lo.current), (a.context = Oo(e, o))),
    (a.state = e.memoizedState),
    "function" == typeof (o = t.getDerivedStateFromProps) &&
      (ji(e, t, o, n), (a.state = e.memoizedState)),
    "function" == typeof t.getDerivedStateFromProps ||
      "function" == typeof a.getSnapshotBeforeUpdate ||
      ("function" != typeof a.UNSAFE_componentWillMount &&
        "function" != typeof a.componentWillMount) ||
      ((t = a.state),
      "function" == typeof a.componentWillMount && a.componentWillMount(),
      "function" == typeof a.UNSAFE_componentWillMount &&
        a.UNSAFE_componentWillMount(),
      t !== a.state && Ui.enqueueReplaceState(a, a.state, null),
      Fi(e, n, a, r),
      (a.state = e.memoizedState)),
    "function" == typeof a.componentDidMount && (e.flags |= 4194308);
}
function $i(e, t, n) {
  if (null !== (e = n.ref) && "function" != typeof e && "object" != typeof e) {
    if (n._owner) {
      if ((n = n._owner)) {
        if (1 !== n.tag) throw Error(oe(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(oe(147, e));
      var a = r,
        o = "" + e;
      return null !== t &&
        null !== t.ref &&
        "function" == typeof t.ref &&
        t.ref._stringRef === o
        ? t.ref
        : (((t = function (e) {
            var t = a.refs;
            t === Mi && (t = a.refs = {}),
              null === e ? delete t[o] : (t[o] = e);
          })._stringRef = o),
          t);
    }
    if ("string" != typeof e) throw Error(oe(284));
    if (!n._owner) throw Error(oe(290, e));
  }
  return e;
}
function Gi(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      oe(
        31,
        "[object Object]" === e
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Yi(e) {
  return (0, e._init)(e._payload);
}
function Ki(e) {
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
  function o(t, n, r) {
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
  function i(t) {
    return e && null === t.alternate && (t.flags |= 2), t;
  }
  function l(e, t, n, r) {
    return null === t || 6 !== t.tag
      ? (((t = Fc(n, e.mode, r)).return = e), t)
      : (((t = a(t, n)).return = e), t);
  }
  function s(e, t, n, r) {
    var o = n.type;
    return o === Se
      ? c(e, t, n.props.children, r, n.key)
      : null !== t &&
        (t.elementType === o ||
          ("object" == typeof o &&
            null !== o &&
            o.$$typeof === Oe &&
            Yi(o) === t.type))
      ? (((r = a(t, n.props)).ref = $i(e, t, n)), (r.return = e), r)
      : (((r = Ic(n.type, n.key, n.props, null, e.mode, r)).ref = $i(e, t, n)),
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
  function c(e, t, n, r, o) {
    return null === t || 7 !== t.tag
      ? (((t = Bc(n, e.mode, r, o)).return = e), t)
      : (((t = a(t, n)).return = e), t);
  }
  function d(e, t, n) {
    if (("string" == typeof t && "" !== t) || "number" == typeof t)
      return ((t = Fc("" + t, e.mode, n)).return = e), t;
    if ("object" == typeof t && null !== t) {
      switch (t.$$typeof) {
        case ke:
          return (
            ((n = Ic(t.type, t.key, t.props, null, e.mode, n)).ref = $i(
              e,
              null,
              t
            )),
            (n.return = e),
            n
          );
        case _e:
          return ((t = Rc(t, e.mode, n)).return = e), t;
        case Oe:
          return d(e, (0, t._init)(t._payload), n);
      }
      if (tt(t) || Ie(t)) return ((t = Bc(t, e.mode, n, null)).return = e), t;
      Gi(e, t);
    }
    return null;
  }
  function f(e, t, n, r) {
    var a = null !== t ? t.key : null;
    if (("string" == typeof n && "" !== n) || "number" == typeof n)
      return null !== a ? null : l(e, t, "" + n, r);
    if ("object" == typeof n && null !== n) {
      switch (n.$$typeof) {
        case ke:
          return n.key === a ? s(e, t, n, r) : null;
        case _e:
          return n.key === a ? u(e, t, n, r) : null;
        case Oe:
          return f(e, t, (a = n._init)(n._payload), r);
      }
      if (tt(n) || Ie(n)) return null !== a ? null : c(e, t, n, r, null);
      Gi(e, n);
    }
    return null;
  }
  function h(e, t, n, r, a) {
    if (("string" == typeof r && "" !== r) || "number" == typeof r)
      return l(t, (e = e.get(n) || null), "" + r, a);
    if ("object" == typeof r && null !== r) {
      switch (r.$$typeof) {
        case ke:
          return s(t, (e = e.get(null === r.key ? n : r.key) || null), r, a);
        case _e:
          return u(t, (e = e.get(null === r.key ? n : r.key) || null), r, a);
        case Oe:
          return h(e, t, n, (0, r._init)(r._payload), a);
      }
      if (tt(r) || Ie(r)) return c(t, (e = e.get(n) || null), r, a, null);
      Gi(t, r);
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
        case ke:
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
                    Yi(g) === m.type)
                ) {
                  n(s, m.sibling),
                    ((u = a(m, c.props)).ref = $i(s, m, c)),
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
              : (((p = Ic(c.type, c.key, c.props, null, s.mode, p)).ref = $i(
                  s,
                  u,
                  c
                )),
                (p.return = s),
                (s = p));
          }
          return i(s);
        case _e:
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
          return i(s);
        case Oe:
          return l(s, u, (m = c._init)(c._payload), p);
      }
      if (tt(c))
        return (function (a, i, l, s) {
          for (
            var u = null, c = null, p = i, g = (i = 0), m = null;
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
              (i = o(y, i, g)),
              null === c ? (u = y) : (c.sibling = y),
              (c = y),
              (p = m);
          }
          if (g === l.length) return n(a, p), oi && Zo(a, g), u;
          if (null === p) {
            for (; g < l.length; g++)
              null !== (p = d(a, l[g], s)) &&
                ((i = o(p, i, g)),
                null === c ? (u = p) : (c.sibling = p),
                (c = p));
            return oi && Zo(a, g), u;
          }
          for (p = r(a, p); g < l.length; g++)
            null !== (m = h(p, a, g, l[g], s)) &&
              (e &&
                null !== m.alternate &&
                p.delete(null === m.key ? g : m.key),
              (i = o(m, i, g)),
              null === c ? (u = m) : (c.sibling = m),
              (c = m));
          return (
            e &&
              p.forEach(function (e) {
                return t(a, e);
              }),
            oi && Zo(a, g),
            u
          );
        })(s, u, c, p);
      if (Ie(c))
        return (function (a, i, l, s) {
          var u = Ie(l);
          if ("function" != typeof u) throw Error(oe(150));
          if (null == (l = u.call(l))) throw Error(oe(151));
          for (
            var c = (u = null), p = i, g = (i = 0), m = null, y = l.next();
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
              (i = o(v, i, g)),
              null === c ? (u = v) : (c.sibling = v),
              (c = v),
              (p = m);
          }
          if (y.done) return n(a, p), oi && Zo(a, g), u;
          if (null === p) {
            for (; !y.done; g++, y = l.next())
              null !== (y = d(a, y.value, s)) &&
                ((i = o(y, i, g)),
                null === c ? (u = y) : (c.sibling = y),
                (c = y));
            return oi && Zo(a, g), u;
          }
          for (p = r(a, p); !y.done; g++, y = l.next())
            null !== (y = h(p, a, g, y.value, s)) &&
              (e &&
                null !== y.alternate &&
                p.delete(null === y.key ? g : y.key),
              (i = o(y, i, g)),
              null === c ? (u = y) : (c.sibling = y),
              (c = y));
          return (
            e &&
              p.forEach(function (e) {
                return t(a, e);
              }),
            oi && Zo(a, g),
            u
          );
        })(s, u, c, p);
      Gi(s, c);
    }
    return ("string" == typeof c && "" !== c) || "number" == typeof c
      ? ((c = "" + c),
        null !== u && 6 === u.tag
          ? (n(s, u.sibling), ((u = a(u, c)).return = s), (s = u))
          : (n(s, u), ((u = Fc(c, s.mode, p)).return = s), (s = u)),
        i(s))
      : n(s, u);
  };
}
var Xi = Ki(!0),
  Ji = Ki(!1),
  Zi = {},
  el = Co(Zi),
  tl = Co(Zi),
  nl = Co(Zi);
function rl(e) {
  if (e === Zi) throw Error(oe(174));
  return e;
}
function al(e, t) {
  switch ((Eo(nl, t), Eo(tl, e), Eo(el, Zi), (e = t.nodeType))) {
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
  Po(el), Eo(el, t);
}
function ol() {
  Po(el), Po(tl), Po(nl);
}
function il(e) {
  rl(nl.current);
  var t = rl(el.current),
    n = st(t, e.type);
  t !== n && (Eo(tl, e), Eo(el, n));
}
function ll(e) {
  tl.current === e && (Po(el), Po(tl));
}
var sl = Co(0);
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
  kl = 0;
function _l() {
  throw Error(oe(321));
}
function Sl(e, t) {
  if (null === t) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!la(e[n], t[n])) return !1;
  return !0;
}
function xl(e, t, n, r, a, o) {
  if (
    ((pl = o),
    (gl = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (fl.current = null === e || null === e.memoizedState ? ls : ss),
    (e = n(r, a)),
    bl)
  ) {
    o = 0;
    do {
      if (((bl = !1), (wl = 0), 25 <= o)) throw Error(oe(301));
      (o += 1),
        (yl = ml = null),
        (t.updateQueue = null),
        (fl.current = us),
        (e = n(r, a));
    } while (bl);
  }
  if (
    ((fl.current = is),
    (t = null !== ml && null !== ml.next),
    (pl = 0),
    (yl = ml = gl = null),
    (vl = !1),
    t)
  )
    throw Error(oe(300));
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
function El() {
  if (null === ml) {
    var e = gl.alternate;
    e = null !== e ? e.memoizedState : null;
  } else e = ml.next;
  var t = null === yl ? gl.memoizedState : yl.next;
  if (null !== t) (yl = t), (ml = e);
  else {
    if (null === e) throw Error(oe(310));
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
function Tl(e, t) {
  return "function" == typeof t ? t(e) : t;
}
function Ll(e) {
  var t = El(),
    n = t.queue;
  if (null === n) throw Error(oe(311));
  n.lastRenderedReducer = e;
  var r = ml,
    a = r.baseQueue,
    o = n.pending;
  if (null !== o) {
    if (null !== a) {
      var i = a.next;
      (a.next = o.next), (o.next = i);
    }
    (r.baseQueue = a = o), (n.pending = null);
  }
  if (null !== a) {
    (o = a.next), (r = r.baseState);
    var l = (i = null),
      s = null,
      u = o;
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
        null === s ? ((l = s = d), (i = r)) : (s = s.next = d),
          (gl.lanes |= c),
          (Du |= c);
      }
      u = u.next;
    } while (null !== u && u !== o);
    null === s ? (i = r) : (s.next = l),
      la(r, t.memoizedState) || (ws = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (null !== (e = n.interleaved)) {
    a = e;
    do {
      (o = a.lane), (gl.lanes |= o), (Du |= o), (a = a.next);
    } while (a !== e);
  } else null === a && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Nl(e) {
  var t = El(),
    n = t.queue;
  if (null === n) throw Error(oe(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    a = n.pending,
    o = t.memoizedState;
  if (null !== a) {
    n.pending = null;
    var i = (a = a.next);
    do {
      (o = e(o, i.action)), (i = i.next);
    } while (i !== a);
    la(o, t.memoizedState) || (ws = !0),
      (t.memoizedState = o),
      null === t.baseQueue && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function ql() {}
function Ol(e, t) {
  var n = gl,
    r = El(),
    a = t(),
    o = !la(r.memoizedState, a);
  if (
    (o && ((r.memoizedState = a), (ws = !0)),
    (r = r.queue),
    Wl(Il.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (null !== yl && 1 & yl.memoizedState.tag))
  ) {
    if (
      ((n.flags |= 2048),
      Rl(9, Al.bind(null, n, r, a, t), void 0, null),
      null === Nu)
    )
      throw Error(oe(349));
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
  var t = Ni(e, 1);
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
      lastRenderedReducer: Tl,
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
  return El().memoizedState;
}
function jl(e, t, n, r) {
  var a = Pl();
  (gl.flags |= e),
    (a.memoizedState = Rl(1 | t, n, void 0, void 0 === r ? null : r));
}
function Ul(e, t, n, r) {
  var a = El();
  r = void 0 === r ? null : r;
  var o = void 0;
  if (null !== ml) {
    var i = ml.memoizedState;
    if (((o = i.destroy), null !== r && Sl(r, i.deps)))
      return void (a.memoizedState = Rl(t, n, o, r));
  }
  (gl.flags |= e), (a.memoizedState = Rl(1 | t, n, o, r));
}
function Vl(e, t) {
  return jl(8390656, 8, e, t);
}
function Wl(e, t) {
  return Ul(2048, 8, e, t);
}
function Hl(e, t) {
  return Ul(4, 2, e, t);
}
function Ql(e, t) {
  return Ul(4, 4, e, t);
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
    (n = null != n ? n.concat([e]) : null), Ul(4, 4, $l.bind(null, t, e), n)
  );
}
function Yl() {}
function Kl(e, t) {
  var n = El();
  t = void 0 === t ? null : t;
  var r = n.memoizedState;
  return null !== r && null !== t && Sl(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Xl(e, t) {
  var n = El();
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
  return El().memoizedState;
}
function ts(e, t, n) {
  var r = nc(e);
  (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }),
    rs(e)
      ? as(t, n)
      : null !== (n = Li(e, t, n, r)) && (rc(n, e, r, tc()), os(n, t, r));
}
function ns(e, t, n) {
  var r = nc(e),
    a = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (rs(e)) as(t, a);
  else {
    var o = e.alternate;
    if (
      0 === e.lanes &&
      (null === o || 0 === o.lanes) &&
      null !== (o = t.lastRenderedReducer)
    )
      try {
        var i = t.lastRenderedState,
          l = o(i, n);
        if (((a.hasEagerState = !0), (a.eagerState = l), la(l, i))) {
          var s = t.interleaved;
          return (
            null === s
              ? ((a.next = a), Ti(t))
              : ((a.next = s.next), (s.next = a)),
            void (t.interleaved = a)
          );
        }
      } catch (u) {}
    null !== (n = Li(e, t, a, r)) && (rc(n, e, r, (a = tc())), os(n, t, r));
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
function os(e, t, n) {
  if (0 != (4194240 & n)) {
    var r = t.lanes;
    (n |= r &= e.pendingLanes), (t.lanes = n), bn(e, n);
  }
}
var is = {
    readContext: Pi,
    useCallback: _l,
    useContext: _l,
    useEffect: _l,
    useImperativeHandle: _l,
    useInsertionEffect: _l,
    useLayoutEffect: _l,
    useMemo: _l,
    useReducer: _l,
    useRef: _l,
    useState: _l,
    useDebugValue: _l,
    useDeferredValue: _l,
    useTransition: _l,
    useMutableSource: _l,
    useSyncExternalStore: _l,
    useId: _l,
    unstable_isNewReconciler: !1,
  },
  ls = {
    readContext: Pi,
    useCallback: function (e, t) {
      return (Pl().memoizedState = [e, void 0 === t ? null : t]), e;
    },
    useContext: Pi,
    useEffect: Vl,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = null != n ? n.concat([e]) : null),
        jl(4194308, 4, $l.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return jl(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return jl(4, 2, e, t);
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
      if (oi) {
        if (void 0 === n) throw Error(oe(407));
        n = n();
      } else {
        if (((n = t()), null === Nu)) throw Error(oe(349));
        0 != (30 & pl) || zl(r, t, n);
      }
      a.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (a.queue = o),
        Vl(Il.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        Rl(9, Al.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Pl(),
        t = Nu.identifierPrefix;
      if (oi) {
        var n = Jo;
        (t =
          ":" +
          t +
          "R" +
          (n = (Xo & ~(1 << (32 - ln(Xo) - 1))).toString(32) + n)),
          0 < (n = wl++) && (t += "H" + n.toString(32)),
          (t += ":");
      } else t = ":" + t + "r" + (n = kl++).toString(32) + ":";
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  ss = {
    readContext: Pi,
    useCallback: Kl,
    useContext: Pi,
    useEffect: Wl,
    useImperativeHandle: Gl,
    useInsertionEffect: Hl,
    useLayoutEffect: Ql,
    useMemo: Xl,
    useReducer: Ll,
    useRef: Ml,
    useState: function () {
      return Ll(Tl);
    },
    useDebugValue: Yl,
    useDeferredValue: function (e) {
      return Jl(El(), ml.memoizedState, e);
    },
    useTransition: function () {
      return [Ll(Tl)[0], El().memoizedState];
    },
    useMutableSource: ql,
    useSyncExternalStore: Ol,
    useId: es,
    unstable_isNewReconciler: !1,
  },
  us = {
    readContext: Pi,
    useCallback: Kl,
    useContext: Pi,
    useEffect: Wl,
    useImperativeHandle: Gl,
    useInsertionEffect: Hl,
    useLayoutEffect: Ql,
    useMemo: Xl,
    useReducer: Nl,
    useRef: Ml,
    useState: function () {
      return Nl(Tl);
    },
    useDebugValue: Yl,
    useDeferredValue: function (e) {
      var t = El();
      return null === ml ? (t.memoizedState = e) : Jl(t, ml.memoizedState, e);
    },
    useTransition: function () {
      return [Nl(Tl)[0], El().memoizedState];
    },
    useMutableSource: ql,
    useSyncExternalStore: Ol,
    useId: es,
    unstable_isNewReconciler: !1,
  };
function cs(e, t) {
  try {
    var n = "",
      r = t;
    do {
      (n += je(r)), (r = r.return);
    } while (r);
    var a = n;
  } catch (o) {
    a = "\nError generating stack: " + o.message + "\n" + o.stack;
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
  ((n = Ai(-1, n)).tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Hu || ((Hu = !0), (Qu = r)), fs(0, t);
    }),
    n
  );
}
function gs(e, t, n) {
  (n = Ai(-1, n)).tag = 3;
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
  var o = e.stateNode;
  return (
    null !== o &&
      "function" == typeof o.componentDidCatch &&
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
              : (((t = Ai(-1, 1)).tag = 2), Ii(n, t, 1))),
          (n.lanes |= 1)),
      e)
    : ((e.flags |= 65536), (e.lanes = a), e);
}
var bs = we.ReactCurrentOwner,
  ws = !1;
function ks(e, t, n, r) {
  t.child = null === e ? Ji(t, null, n, r) : Xi(t, e.child, n, r);
}
function _s(e, t, n, r, a) {
  n = n.render;
  var o = t.ref;
  return (
    Ci(t, a),
    (r = xl(e, t, n, r, o, a)),
    (n = Cl()),
    null === e || ws
      ? (oi && n && ti(t), (t.flags |= 1), ks(e, t, r, a), t.child)
      : ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~a),
        Hs(e, t, a))
  );
}
function Ss(e, t, n, r, a) {
  if (null === e) {
    var o = n.type;
    return "function" != typeof o ||
      zc(o) ||
      void 0 !== o.defaultProps ||
      null !== n.compare ||
      void 0 !== n.defaultProps
      ? (((e = Ic(n.type, null, r, t, t.mode, a)).ref = t.ref),
        (e.return = t),
        (t.child = e))
      : ((t.tag = 15), (t.type = o), xs(e, t, o, r, a));
  }
  if (((o = e.child), 0 == (e.lanes & a))) {
    var i = o.memoizedProps;
    if ((n = null !== (n = n.compare) ? n : sa)(i, r) && e.ref === t.ref)
      return Hs(e, t, a);
  }
  return (
    (t.flags |= 1), ((e = Ac(o, r)).ref = t.ref), (e.return = t), (t.child = e)
  );
}
function xs(e, t, n, r, a) {
  if (null !== e) {
    var o = e.memoizedProps;
    if (sa(o, r) && e.ref === t.ref) {
      if (((ws = !1), (t.pendingProps = r = o), 0 == (e.lanes & a)))
        return (t.lanes = e.lanes), Hs(e, t, a);
      0 != (131072 & e.flags) && (ws = !0);
    }
  }
  return Es(e, t, n, r, a);
}
function Cs(e, t, n) {
  var r = t.pendingProps,
    a = r.children,
    o = null !== e ? e.memoizedState : null;
  if ("hidden" === r.mode)
    if (0 == (1 & t.mode))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        Eo(Au, zu),
        (zu |= n);
    else {
      if (0 == (1073741824 & n))
        return (
          (e = null !== o ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          Eo(Au, zu),
          (zu |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = null !== o ? o.baseLanes : n),
        Eo(Au, zu),
        (zu |= r);
    }
  else
    null !== o ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      Eo(Au, zu),
      (zu |= r);
  return ks(e, t, a, n), t.child;
}
function Ps(e, t) {
  var n = t.ref;
  ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Es(e, t, n, r, a) {
  var o = zo(n) ? qo : Lo.current;
  return (
    (o = Oo(t, o)),
    Ci(t, a),
    (n = xl(e, t, n, r, o, a)),
    (r = Cl()),
    null === e || ws
      ? (oi && r && ti(t), (t.flags |= 1), ks(e, t, n, a), t.child)
      : ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~a),
        Hs(e, t, a))
  );
}
function Ts(e, t, n, r, a) {
  if (zo(n)) {
    var o = !0;
    Do(t);
  } else o = !1;
  if ((Ci(t, a), null === t.stateNode))
    Ws(e, t), Wi(t, n, r), Qi(t, n, r, a), (r = !0);
  else if (null === e) {
    var i = t.stateNode,
      l = t.memoizedProps;
    i.props = l;
    var s = i.context,
      u = n.contextType;
    u =
      "object" == typeof u && null !== u
        ? Pi(u)
        : Oo(t, (u = zo(n) ? qo : Lo.current));
    var c = n.getDerivedStateFromProps,
      d =
        "function" == typeof c ||
        "function" == typeof i.getSnapshotBeforeUpdate;
    d ||
      ("function" != typeof i.UNSAFE_componentWillReceiveProps &&
        "function" != typeof i.componentWillReceiveProps) ||
      ((l !== r || s !== u) && Hi(t, i, r, u)),
      (qi = !1);
    var f = t.memoizedState;
    (i.state = f),
      Fi(t, r, i, a),
      (s = t.memoizedState),
      l !== r || f !== s || No.current || qi
        ? ("function" == typeof c && (ji(t, n, c, r), (s = t.memoizedState)),
          (l = qi || Vi(t, n, l, r, f, s, u))
            ? (d ||
                ("function" != typeof i.UNSAFE_componentWillMount &&
                  "function" != typeof i.componentWillMount) ||
                ("function" == typeof i.componentWillMount &&
                  i.componentWillMount(),
                "function" == typeof i.UNSAFE_componentWillMount &&
                  i.UNSAFE_componentWillMount()),
              "function" == typeof i.componentDidMount && (t.flags |= 4194308))
            : ("function" == typeof i.componentDidMount && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (i.props = r),
          (i.state = s),
          (i.context = u),
          (r = l))
        : ("function" == typeof i.componentDidMount && (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      zi(e, t),
      (l = t.memoizedProps),
      (u = t.type === t.elementType ? l : yi(t.type, l)),
      (i.props = u),
      (d = t.pendingProps),
      (f = i.context),
      (s =
        "object" == typeof (s = n.contextType) && null !== s
          ? Pi(s)
          : Oo(t, (s = zo(n) ? qo : Lo.current)));
    var h = n.getDerivedStateFromProps;
    (c =
      "function" == typeof h ||
      "function" == typeof i.getSnapshotBeforeUpdate) ||
      ("function" != typeof i.UNSAFE_componentWillReceiveProps &&
        "function" != typeof i.componentWillReceiveProps) ||
      ((l !== d || f !== s) && Hi(t, i, r, s)),
      (qi = !1),
      (f = t.memoizedState),
      (i.state = f),
      Fi(t, r, i, a);
    var p = t.memoizedState;
    l !== d || f !== p || No.current || qi
      ? ("function" == typeof h && (ji(t, n, h, r), (p = t.memoizedState)),
        (u = qi || Vi(t, n, u, r, f, p, s) || !1)
          ? (c ||
              ("function" != typeof i.UNSAFE_componentWillUpdate &&
                "function" != typeof i.componentWillUpdate) ||
              ("function" == typeof i.componentWillUpdate &&
                i.componentWillUpdate(r, p, s),
              "function" == typeof i.UNSAFE_componentWillUpdate &&
                i.UNSAFE_componentWillUpdate(r, p, s)),
            "function" == typeof i.componentDidUpdate && (t.flags |= 4),
            "function" == typeof i.getSnapshotBeforeUpdate && (t.flags |= 1024))
          : ("function" != typeof i.componentDidUpdate ||
              (l === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            "function" != typeof i.getSnapshotBeforeUpdate ||
              (l === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = p)),
        (i.props = r),
        (i.state = p),
        (i.context = s),
        (r = u))
      : ("function" != typeof i.componentDidUpdate ||
          (l === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        "function" != typeof i.getSnapshotBeforeUpdate ||
          (l === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Ls(e, t, n, r, o, a);
}
function Ls(e, t, n, r, a, o) {
  Ps(e, t);
  var i = 0 != (128 & t.flags);
  if (!r && !i) return a && Fo(t, n, !1), Hs(e, t, o);
  (r = t.stateNode), (bs.current = t);
  var l =
    i && "function" != typeof n.getDerivedStateFromError ? null : r.render();
  return (
    (t.flags |= 1),
    null !== e && i
      ? ((t.child = Xi(t, e.child, null, o)), (t.child = Xi(t, null, l, o)))
      : ks(e, t, l, o),
    (t.memoizedState = r.state),
    a && Fo(t, n, !0),
    t.child
  );
}
function Ns(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Io(0, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Io(0, t.context, !1),
    al(e, t.containerInfo);
}
function qs(e, t, n, r, a) {
  return pi(), gi(a), (t.flags |= 256), ks(e, t, n, r), t.child;
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
    o = sl.current,
    i = !1,
    l = 0 != (128 & t.flags);
  if (
    ((r = l) || (r = (null === e || null !== e.memoizedState) && 0 != (2 & o)),
    r
      ? ((i = !0), (t.flags &= -129))
      : (null !== e && null === e.memoizedState) || (o |= 1),
    Eo(sl, 1 & o),
    null === e)
  )
    return (
      ci(t),
      null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
        ? (0 == (1 & t.mode)
            ? (t.lanes = 1)
            : "$!" === e.data
            ? (t.lanes = 8)
            : (t.lanes = 1073741824),
          null)
        : ((l = a.children),
          (e = a.fallback),
          i
            ? ((a = t.mode),
              (i = t.child),
              (l = { mode: "hidden", children: l }),
              0 == (1 & a) && null !== i
                ? ((i.childLanes = 0), (i.pendingProps = l))
                : (i = Dc(l, a, 0, null)),
              (e = Bc(e, a, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Ds(n)),
              (t.memoizedState = Bs),
              e)
            : Rs(t, l))
    );
  if (null !== (o = e.memoizedState) && null !== (r = o.dehydrated))
    return (function (e, t, n, r, a, o, i) {
      if (n)
        return 256 & t.flags
          ? ((t.flags &= -257), Ms(e, t, i, (r = ds(Error(oe(422))))))
          : null !== t.memoizedState
          ? ((t.child = e.child), (t.flags |= 128), null)
          : ((o = r.fallback),
            (a = t.mode),
            (r = Dc({ mode: "visible", children: r.children }, a, 0, null)),
            ((o = Bc(o, a, i, null)).flags |= 2),
            (r.return = t),
            (o.return = t),
            (r.sibling = o),
            (t.child = r),
            0 != (1 & t.mode) && Xi(t, e.child, null, i),
            (t.child.memoizedState = Ds(i)),
            (t.memoizedState = Bs),
            o);
      if (0 == (1 & t.mode)) return Ms(e, t, i, null);
      if ("$!" === a.data) {
        if ((r = a.nextSibling && a.nextSibling.dataset)) var l = r.dgst;
        return (r = l), Ms(e, t, i, (r = ds((o = Error(oe(419))), r, void 0)));
      }
      if (((l = 0 != (i & e.childLanes)), ws || l)) {
        if (null !== (r = Nu)) {
          switch (i & -i) {
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
          0 !== (a = 0 != (a & (r.suspendedLanes | i)) ? 0 : a) &&
            a !== o.retryLane &&
            ((o.retryLane = a), Ni(e, a), rc(r, e, a, -1));
        }
        return mc(), Ms(e, t, i, (r = ds(Error(oe(421)))));
      }
      return "$?" === a.data
        ? ((t.flags |= 128),
          (t.child = e.child),
          (t = Tc.bind(null, e)),
          (a._reactRetry = t),
          null)
        : ((e = o.treeContext),
          (ai = uo(a.nextSibling)),
          (ri = t),
          (oi = !0),
          (ii = null),
          null !== e &&
            ((Go[Yo++] = Xo),
            (Go[Yo++] = Jo),
            (Go[Yo++] = Ko),
            (Xo = e.id),
            (Jo = e.overflow),
            (Ko = t)),
          ((t = Rs(t, r.children)).flags |= 4096),
          t);
    })(e, t, l, a, r, o, n);
  if (i) {
    (i = a.fallback), (l = t.mode), (r = (o = e.child).sibling);
    var s = { mode: "hidden", children: a.children };
    return (
      0 == (1 & l) && t.child !== o
        ? (((a = t.child).childLanes = 0),
          (a.pendingProps = s),
          (t.deletions = null))
        : ((a = Ac(o, s)).subtreeFlags = 14680064 & o.subtreeFlags),
      null !== r ? (i = Ac(r, i)) : ((i = Bc(i, l, n, null)).flags |= 2),
      (i.return = t),
      (a.return = t),
      (a.sibling = i),
      (t.child = a),
      (a = i),
      (i = t.child),
      (l =
        null === (l = e.child.memoizedState)
          ? Ds(n)
          : {
              baseLanes: l.baseLanes | n,
              cachePool: null,
              transitions: l.transitions,
            }),
      (i.memoizedState = l),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = Bs),
      a
    );
  }
  return (
    (e = (i = e.child).sibling),
    (a = Ac(i, { mode: "visible", children: a.children })),
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
    null !== r && gi(r),
    Xi(t, e.child, null, n),
    ((e = Rs(t, t.pendingProps.children)).flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function js(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  null !== r && (r.lanes |= t), xi(e.return, t, n);
}
function Us(e, t, n, r, a) {
  var o = e.memoizedState;
  null === o
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: a,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = a));
}
function Vs(e, t, n) {
  var r = t.pendingProps,
    a = r.revealOrder,
    o = r.tail;
  if ((ks(e, t, r.children, n), 0 != (2 & (r = sl.current))))
    (r = (1 & r) | 2), (t.flags |= 128);
  else {
    if (null !== e && 0 != (128 & e.flags))
      e: for (e = t.child; null !== e; ) {
        if (13 === e.tag) null !== e.memoizedState && js(e, n, t);
        else if (19 === e.tag) js(e, n, t);
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
  if ((Eo(sl, r), 0 == (1 & t.mode))) t.memoizedState = null;
  else
    switch (a) {
      case "forwards":
        for (n = t.child, a = null; null !== n; )
          null !== (e = n.alternate) && null === ul(e) && (a = n),
            (n = n.sibling);
        null === (n = a)
          ? ((a = t.child), (t.child = null))
          : ((a = n.sibling), (n.sibling = null)),
          Us(t, !1, a, n, o);
        break;
      case "backwards":
        for (n = null, a = t.child, t.child = null; null !== a; ) {
          if (null !== (e = a.alternate) && null === ul(e)) {
            t.child = a;
            break;
          }
          (e = a.sibling), (a.sibling = n), (n = a), (a = e);
        }
        Us(t, !0, n, null, o);
        break;
      case "together":
        Us(t, !1, null, null, void 0);
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
  if (null !== e && t.child !== e.child) throw Error(oe(153));
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
  if (!oi)
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
  switch ((ni(t), t.tag)) {
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
      return zo(t.type) && Ao(), $s(t), null;
    case 3:
      return (
        (r = t.stateNode),
        ol(),
        Po(No),
        Po(Lo),
        dl(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (null !== e && null !== e.child) ||
          (fi(t)
            ? (t.flags |= 4)
            : null === e ||
              (e.memoizedState.isDehydrated && 0 == (256 & t.flags)) ||
              ((t.flags |= 1024), null !== ii && (lc(ii), (ii = null)))),
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
          if (null === t.stateNode) throw Error(oe(166));
          return $s(t), null;
        }
        if (((e = rl(el.current)), fi(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[ho] = t), (r[po] = o), (e = 0 != (1 & t.mode)), n)) {
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
              Ke(r, o), Ra("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                Ra("invalid", r);
              break;
            case "textarea":
              at(r, o), Ra("invalid", r);
          }
          for (var i in (vt(n, o), (a = null), o))
            if (o.hasOwnProperty(i)) {
              var l = o[i];
              "children" === i
                ? "string" == typeof l
                  ? r.textContent !== l &&
                    (!0 !== o.suppressHydrationWarning &&
                      Ja(r.textContent, l, e),
                    (a = ["children", l]))
                  : "number" == typeof l &&
                    r.textContent !== "" + l &&
                    (!0 !== o.suppressHydrationWarning &&
                      Ja(r.textContent, l, e),
                    (a = ["children", "" + l]))
                : le.hasOwnProperty(i) &&
                  null != l &&
                  "onScroll" === i &&
                  Ra("scroll", r);
            }
          switch (n) {
            case "input":
              Qe(r), Ze(r, o, !0);
              break;
            case "textarea":
              Qe(r), it(r);
              break;
            case "select":
            case "option":
              break;
            default:
              "function" == typeof o.onClick && (r.onclick = Za);
          }
          (r = a), (t.updateQueue = r), null !== r && (t.flags |= 4);
        } else {
          (i = 9 === a.nodeType ? a : a.ownerDocument),
            "http://www.w3.org/1999/xhtml" === e && (e = lt(n)),
            "http://www.w3.org/1999/xhtml" === e
              ? "script" === n
                ? (((e = i.createElement("div")).innerHTML =
                    "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : "string" == typeof r.is
                ? (e = i.createElement(n, { is: r.is }))
                : ((e = i.createElement(n)),
                  "select" === n &&
                    ((i = e),
                    r.multiple
                      ? (i.multiple = !0)
                      : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[ho] = t),
            (e[po] = r),
            Os(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = bt(n, r)), n)) {
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
            for (o in (vt(n, a), (l = a)))
              if (l.hasOwnProperty(o)) {
                var s = l[o];
                "style" === o
                  ? mt(e, s)
                  : "dangerouslySetInnerHTML" === o
                  ? null != (s = s ? s.__html : void 0) && dt(e, s)
                  : "children" === o
                  ? "string" == typeof s
                    ? ("textarea" !== n || "" !== s) && ft(e, s)
                    : "number" == typeof s && ft(e, "" + s)
                  : "suppressContentEditableWarning" !== o &&
                    "suppressHydrationWarning" !== o &&
                    "autoFocus" !== o &&
                    (le.hasOwnProperty(o)
                      ? null != s && "onScroll" === o && Ra("scroll", e)
                      : null != s && be(e, o, s, i));
              }
            switch (n) {
              case "input":
                Qe(e), Ze(e, r, !1);
                break;
              case "textarea":
                Qe(e), it(e);
                break;
              case "option":
                null != r.value && e.setAttribute("value", "" + We(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  null != (o = r.value)
                    ? nt(e, !!r.multiple, o, !1)
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
        if ("string" != typeof r && null === t.stateNode) throw Error(oe(166));
        if (((n = rl(nl.current)), rl(el.current), fi(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[ho] = t),
            (o = r.nodeValue !== n) && null !== (e = ri))
          )
            switch (e.tag) {
              case 3:
                Ja(r.nodeValue, n, 0 != (1 & e.mode));
                break;
              case 5:
                !0 !== e.memoizedProps.suppressHydrationWarning &&
                  Ja(r.nodeValue, n, 0 != (1 & e.mode));
            }
          o && (t.flags |= 4);
        } else
          ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(r))[
            ho
          ] = t),
            (t.stateNode = r);
      }
      return $s(t), null;
    case 13:
      if (
        (Po(sl),
        (r = t.memoizedState),
        null === e ||
          (null !== e.memoizedState && null !== e.memoizedState.dehydrated))
      ) {
        if (oi && null !== ai && 0 != (1 & t.mode) && 0 == (128 & t.flags))
          hi(), pi(), (t.flags |= 98560), (o = !1);
        else if (((o = fi(t)), null !== r && null !== r.dehydrated)) {
          if (null === e) {
            if (!o) throw Error(oe(318));
            if (!(o = null !== (o = t.memoizedState) ? o.dehydrated : null))
              throw Error(oe(317));
            o[ho] = t;
          } else
            pi(),
              0 == (128 & t.flags) && (t.memoizedState = null),
              (t.flags |= 4);
          $s(t), (o = !1);
        } else null !== ii && (lc(ii), (ii = null)), (o = !0);
        if (!o) return 65536 & t.flags ? t : null;
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
        ol(), zs(e, t), null === e && Ua(t.stateNode.containerInfo), $s(t), null
      );
    case 10:
      return Si(t.type._context), $s(t), null;
    case 19:
      if ((Po(sl), null === (o = t.memoizedState))) return $s(t), null;
      if (((r = 0 != (128 & t.flags)), null === (i = o.rendering)))
        if (r) Qs(o, !1);
        else {
          if (0 !== Iu || (null !== e && 0 != (128 & e.flags)))
            for (e = t.child; null !== e; ) {
              if (null !== (i = ul(e))) {
                for (
                  t.flags |= 128,
                    Qs(o, !1),
                    null !== (r = i.updateQueue) &&
                      ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  null !== n;

                )
                  (e = r),
                    ((o = n).flags &= 14680066),
                    null === (i = o.alternate)
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = i.childLanes),
                        (o.lanes = i.lanes),
                        (o.child = i.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = i.memoizedProps),
                        (o.memoizedState = i.memoizedState),
                        (o.updateQueue = i.updateQueue),
                        (o.type = i.type),
                        (e = i.dependencies),
                        (o.dependencies =
                          null === e
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return Eo(sl, (1 & sl.current) | 2), t.child;
              }
              e = e.sibling;
            }
          null !== o.tail &&
            Xt() > Vu &&
            ((t.flags |= 128), (r = !0), Qs(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (null !== (e = ul(i))) {
            if (
              ((t.flags |= 128),
              (r = !0),
              null !== (n = e.updateQueue) &&
                ((t.updateQueue = n), (t.flags |= 4)),
              Qs(o, !0),
              null === o.tail && "hidden" === o.tailMode && !i.alternate && !oi)
            )
              return $s(t), null;
          } else
            2 * Xt() - o.renderingStartTime > Vu &&
              1073741824 !== n &&
              ((t.flags |= 128), (r = !0), Qs(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : (null !== (n = o.last) ? (n.sibling = i) : (t.child = i),
            (o.last = i));
      }
      return null !== o.tail
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = Xt()),
          (t.sibling = null),
          (n = sl.current),
          Eo(sl, r ? (1 & n) | 2 : 1 & n),
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
  throw Error(oe(156, t.tag));
}
function Ys(e, t) {
  switch ((ni(t), t.tag)) {
    case 1:
      return (
        zo(t.type) && Ao(),
        65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null
      );
    case 3:
      return (
        ol(),
        Po(No),
        Po(Lo),
        dl(),
        0 != (65536 & (e = t.flags)) && 0 == (128 & e)
          ? ((t.flags = (-65537 & e) | 128), t)
          : null
      );
    case 5:
      return ll(t), null;
    case 13:
      if ((Po(sl), null !== (e = t.memoizedState) && null !== e.dehydrated)) {
        if (null === t.alternate) throw Error(oe(340));
        pi();
      }
      return 65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null;
    case 19:
      return Po(sl), null;
    case 4:
      return ol(), null;
    case 10:
      return Si(t.type._context), null;
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
      var o,
        i = null;
      switch (n) {
        case "input":
          (a = Ye(e, a)), (r = Ye(e, r)), (i = []);
          break;
        case "select":
          (a = De({}, a, { value: void 0 })),
            (r = De({}, r, { value: void 0 })),
            (i = []);
          break;
        case "textarea":
          (a = rt(e, a)), (r = rt(e, r)), (i = []);
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
            for (o in l) l.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
          } else
            "dangerouslySetInnerHTML" !== u &&
              "children" !== u &&
              "suppressContentEditableWarning" !== u &&
              "suppressHydrationWarning" !== u &&
              "autoFocus" !== u &&
              (le.hasOwnProperty(u)
                ? i || (i = [])
                : (i = i || []).push(u, null));
      for (u in r) {
        var s = r[u];
        if (
          ((l = null != a ? a[u] : void 0),
          r.hasOwnProperty(u) && s !== l && (null != s || null != l))
        )
          if ("style" === u)
            if (l) {
              for (o in l)
                !l.hasOwnProperty(o) ||
                  (s && s.hasOwnProperty(o)) ||
                  (n || (n = {}), (n[o] = ""));
              for (o in s)
                s.hasOwnProperty(o) &&
                  l[o] !== s[o] &&
                  (n || (n = {}), (n[o] = s[o]));
            } else n || (i || (i = []), i.push(u, n)), (n = s);
          else
            "dangerouslySetInnerHTML" === u
              ? ((s = s ? s.__html : void 0),
                (l = l ? l.__html : void 0),
                null != s && l !== s && (i = i || []).push(u, s))
              : "children" === u
              ? ("string" != typeof s && "number" != typeof s) ||
                (i = i || []).push(u, "" + s)
              : "suppressContentEditableWarning" !== u &&
                "suppressHydrationWarning" !== u &&
                (le.hasOwnProperty(u)
                  ? (null != s && "onScroll" === u && Ra("scroll", e),
                    i || l === s || (i = []))
                  : (i = i || []).push(u, s));
      }
      n && (i = i || []).push("style", n);
      var u = i;
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
        var o = a.destroy;
        (a.destroy = void 0), void 0 !== o && tu(t, n, o);
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
function ou(e) {
  var t = e.ref;
  if (null !== t) {
    var n = e.stateNode;
    e.tag, (e = n), "function" == typeof t ? t(e) : (t.current = e);
  }
}
function iu(e) {
  var t = e.alternate;
  null !== t && ((e.alternate = null), iu(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    5 === e.tag &&
      null !== (t = e.stateNode) &&
      (delete t[ho], delete t[po], delete t[mo], delete t[yo], delete t[vo]),
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
              ? so(e.parentNode, n)
              : 1 === e.nodeType && so(e, n),
            Vn(e))
          : so(du, n.stateNode));
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
          var o = a,
            i = o.destroy;
          (o = o.tag),
            void 0 !== i && (0 != (2 & o) || 0 != (4 & o)) && tu(n, t, i),
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
        var r = Lc.bind(null, e, t);
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
        var o = e,
          i = t,
          l = i;
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
        if (null === du) throw Error(oe(160));
        pu(o, i, a), (du = null), (fu = !1);
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
        var o = e.memoizedProps,
          i = null !== n ? n.memoizedProps : o,
          l = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), null !== s))
          try {
            "input" === l && "radio" === o.type && null != o.name && Xe(a, o),
              bt(l, i);
            var u = bt(l, o);
            for (i = 0; i < s.length; i += 2) {
              var c = s[i],
                d = s[i + 1];
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
                Je(a, o);
                break;
              case "textarea":
                ot(a, o);
                break;
              case "select":
                var f = a._wrapperState.wasMultiple;
                a._wrapperState.wasMultiple = !!o.multiple;
                var h = o.value;
                null != h
                  ? nt(a, !!o.multiple, h, !1)
                  : f !== !!o.multiple &&
                    (null != o.defaultValue
                      ? nt(a, !!o.multiple, o.defaultValue, !0)
                      : nt(a, !!o.multiple, o.multiple ? [] : "", !1));
            }
            a[po] = o;
          } catch (g) {
            Cc(e, e.return, g);
          }
      }
      break;
    case 6:
      if ((mu(t, e), vu(e), 4 & r)) {
        if (null === e.stateNode) throw Error(oe(162));
        (a = e.stateNode), (o = e.memoizedProps);
        try {
          a.nodeValue = o;
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
          Vn(t.containerInfo);
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
          ((o = null !== a.memoizedState),
          (a.stateNode.isHidden = o),
          !o ||
            (null !== a.alternate && null !== a.alternate.memoizedState) ||
            (Uu = Xt())),
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
                    _u(d);
                    continue;
                  }
              }
              null !== h ? ((h.return = f), (Zs = h)) : _u(d);
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
                    ? "function" == typeof (o = a.style).setProperty
                      ? o.setProperty("display", "none", "important")
                      : (o.display = "none")
                    : ((l = d.stateNode),
                      (i =
                        null != (s = d.memoizedProps.style) &&
                        s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (l.style.display = gt("display", i)));
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
        throw Error(oe(160));
      }
      switch (r.tag) {
        case 5:
          var a = r.stateNode;
          32 & r.flags && (ft(a, ""), (r.flags &= -33)), cu(e, su(e), a);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo;
          uu(e, su(e), o);
          break;
        default:
          throw Error(oe(161));
      }
    } catch (i) {
      Cc(e, e.return, i);
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
      o = a.child;
    if (22 === a.tag && r) {
      var i = null !== a.memoizedState || Ks;
      if (!i) {
        var l = a.alternate,
          s = (null !== l && null !== l.memoizedState) || Xs;
        l = Ks;
        var u = Xs;
        if (((Ks = i), (Xs = s) && !u))
          for (Zs = a; null !== Zs; )
            (s = (i = Zs).child),
              22 === i.tag && null !== i.memoizedState
                ? Su(a)
                : null !== s
                ? ((s.return = i), (Zs = s))
                : Su(a);
        for (; null !== o; ) (Zs = o), wu(o), (o = o.sibling);
        (Zs = a), (Ks = l), (Xs = u);
      }
      ku(e);
    } else
      0 != (8772 & a.subtreeFlags) && null !== o
        ? ((o.return = a), (Zs = o))
        : ku(e);
  }
}
function ku(e) {
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
                      : yi(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    a,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              null !== o && Ri(t, o, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (null !== i) {
                if (((n = null), null !== t.child))
                  switch (t.child.tag) {
                    case 5:
                    case 1:
                      n = t.child.stateNode;
                  }
                Ri(t, i, n);
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
                    null !== d && Vn(d);
                  }
                }
              }
              break;
            default:
              throw Error(oe(163));
          }
        Xs || (512 & t.flags && ou(t));
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
function _u(e) {
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
          var o = t.return;
          try {
            ou(t);
          } catch (s) {
            Cc(t, o, s);
          }
          break;
        case 5:
          var i = t.return;
          try {
            ou(t);
          } catch (s) {
            Cc(t, i, s);
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
  Eu = we.ReactCurrentOwner,
  Tu = we.ReactCurrentBatchConfig,
  Lu = 0,
  Nu = null,
  qu = null,
  Ou = 0,
  zu = 0,
  Au = Co(0),
  Iu = 0,
  Bu = null,
  Du = 0,
  Fu = 0,
  Ru = 0,
  Mu = null,
  ju = null,
  Uu = 0,
  Vu = 1 / 0,
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
  return 0 != (6 & Lu) ? Xt() : -1 !== Zu ? Zu : (Zu = Xt());
}
function nc(e) {
  return 0 == (1 & e.mode)
    ? 1
    : 0 != (2 & Lu) && 0 !== Ou
    ? Ou & -Ou
    : null !== mi.transition
    ? (0 === ec && (ec = mn()), ec)
    : 0 !== (e = wn)
    ? e
    : (e = void 0 === (e = window.event) ? 16 : Xn(e.type));
}
function rc(e, t, n, r) {
  if (50 < Xu) throw ((Xu = 0), (Ju = null), Error(oe(185)));
  vn(e, n, r),
    (0 != (2 & Lu) && e === Nu) ||
      (e === Nu && (0 == (2 & Lu) && (Fu |= n), 4 === Iu && sc(e, Ou)),
      ac(e, r),
      1 === n &&
        0 === Lu &&
        0 == (1 & t.mode) &&
        ((Vu = Xt() + 500), Mo && Vo()));
}
function ac(e, t) {
  var n = e.callbackNode;
  !(function (e, t) {
    for (
      var n = e.suspendedLanes,
        r = e.pingedLanes,
        a = e.expirationTimes,
        o = e.pendingLanes;
      0 < o;

    ) {
      var i = 31 - ln(o),
        l = 1 << i,
        s = a[i];
      -1 === s
        ? (0 != (l & n) && 0 == (l & r)) || (a[i] = pn(l, t))
        : s <= t && (e.expiredLanes |= l),
        (o &= ~l);
    }
  })(e, t);
  var r = hn(e, e === Nu ? Ou : 0);
  if (0 === r)
    null !== n && Gt(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((null != n && Gt(n), 1 === t))
      0 === e.tag
        ? (function (e) {
            (Mo = !0), Uo(e);
          })(uc.bind(null, e))
        : Uo(uc.bind(null, e)),
        io(function () {
          0 == (6 & Lu) && Vo();
        }),
        (n = null);
    else {
      switch (kn(r)) {
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
      n = Nc(n, oc.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function oc(e, t) {
  if (((Zu = -1), (ec = 0), 0 != (6 & Lu))) throw Error(oe(327));
  var n = e.callbackNode;
  if (Sc() && e.callbackNode !== n) return null;
  var r = hn(e, e === Nu ? Ou : 0);
  if (0 === r) return null;
  if (0 != (30 & r) || 0 != (r & e.expiredLanes) || t) t = yc(e, r);
  else {
    t = r;
    var a = Lu;
    Lu |= 2;
    var o = gc();
    for (
      (Nu === e && Ou === t) || ((Wu = null), (Vu = Xt() + 500), hc(e, t));
      ;

    )
      try {
        bc();
        break;
      } catch (l) {
        pc(e, l);
      }
    _i(),
      (Pu.current = o),
      (Lu = a),
      null !== qu ? (t = 0) : ((Nu = null), (Ou = 0), (t = Iu));
  }
  if (0 !== t) {
    if ((2 === t && 0 !== (a = gn(e)) && ((r = a), (t = ic(e, a))), 1 === t))
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
                      o = a.getSnapshot;
                    a = a.value;
                    try {
                      if (!la(o(), a)) return !1;
                    } catch (i) {
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
            0 !== (o = gn(e)) &&
            ((r = o), (t = ic(e, o))),
          1 === t))
      )
        throw ((n = Bu), hc(e, 0), sc(e, r), ac(e, Xt()), n);
      switch (((e.finishedWork = a), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(oe(345));
        case 2:
        case 5:
          _c(e, ju, Wu);
          break;
        case 3:
          if ((sc(e, r), (130023424 & r) === r && 10 < (t = Uu + 500 - Xt()))) {
            if (0 !== hn(e, 0)) break;
            if (((a = e.suspendedLanes) & r) !== r) {
              tc(), (e.pingedLanes |= e.suspendedLanes & a);
              break;
            }
            e.timeoutHandle = ro(_c.bind(null, e, ju, Wu), t);
            break;
          }
          _c(e, ju, Wu);
          break;
        case 4:
          if ((sc(e, r), (4194240 & r) === r)) break;
          for (t = e.eventTimes, a = -1; 0 < r; ) {
            var i = 31 - ln(r);
            (o = 1 << i), (i = t[i]) > a && (a = i), (r &= ~o);
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
            e.timeoutHandle = ro(_c.bind(null, e, ju, Wu), r);
            break;
          }
          _c(e, ju, Wu);
          break;
        default:
          throw Error(oe(329));
      }
    }
  }
  return ac(e, Xt()), e.callbackNode === n ? oc.bind(null, e) : null;
}
function ic(e, t) {
  var n = Mu;
  return (
    e.current.memoizedState.isDehydrated && (hc(e, t).flags |= 256),
    2 !== (e = yc(e, t)) && ((t = ju), (ju = n), null !== t && lc(t)),
    e
  );
}
function lc(e) {
  null === ju ? (ju = e) : ju.push.apply(ju, e);
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
  if (0 != (6 & Lu)) throw Error(oe(327));
  Sc();
  var t = hn(e, 0);
  if (0 == (1 & t)) return ac(e, Xt()), null;
  var n = yc(e, t);
  if (0 !== e.tag && 2 === n) {
    var r = gn(e);
    0 !== r && ((t = r), (n = ic(e, r)));
  }
  if (1 === n) throw ((n = Bu), hc(e, 0), sc(e, t), ac(e, Xt()), n);
  if (6 === n) throw Error(oe(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    _c(e, ju, Wu),
    ac(e, Xt()),
    null
  );
}
function cc(e, t) {
  var n = Lu;
  Lu |= 1;
  try {
    return e(t);
  } finally {
    0 === (Lu = n) && ((Vu = Xt() + 500), Mo && Vo());
  }
}
function dc(e) {
  null !== Yu && 0 === Yu.tag && 0 == (6 & Lu) && Sc();
  var t = Lu;
  Lu |= 1;
  var n = Tu.transition,
    r = wn;
  try {
    if (((Tu.transition = null), (wn = 1), e)) return e();
  } finally {
    (wn = r), (Tu.transition = n), 0 == (6 & (Lu = t)) && Vo();
  }
}
function fc() {
  (zu = Au.current), Po(Au);
}
function hc(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((-1 !== n && ((e.timeoutHandle = -1), ao(n)), null !== qu))
    for (n = qu.return; null !== n; ) {
      var r = n;
      switch ((ni(r), r.tag)) {
        case 1:
          null != (r = r.type.childContextTypes) && Ao();
          break;
        case 3:
          ol(), Po(No), Po(Lo), dl();
          break;
        case 5:
          ll(r);
          break;
        case 4:
          ol();
          break;
        case 13:
        case 19:
          Po(sl);
          break;
        case 10:
          Si(r.type._context);
          break;
        case 22:
        case 23:
          fc();
      }
      n = n.return;
    }
  if (
    ((Nu = e),
    (qu = e = Ac(e.current, null)),
    (Ou = zu = t),
    (Iu = 0),
    (Bu = null),
    (Ru = Fu = Du = 0),
    (ju = Mu = null),
    null !== Ei)
  ) {
    for (t = 0; t < Ei.length; t++)
      if (null !== (r = (n = Ei[t]).interleaved)) {
        n.interleaved = null;
        var a = r.next,
          o = n.pending;
        if (null !== o) {
          var i = o.next;
          (o.next = a), (r.next = i);
        }
        n.pending = r;
      }
    Ei = null;
  }
  return e;
}
function pc(e, t) {
  for (;;) {
    var n = qu;
    try {
      if ((_i(), (fl.current = is), vl)) {
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
        (Eu.current = null),
        null === n || null === n.return)
      ) {
        (Iu = 1), (Bu = t), (qu = null);
        break;
      }
      e: {
        var o = e,
          i = n.return,
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
          var h = ys(i);
          if (null !== h) {
            (h.flags &= -257),
              vs(h, i, l, 0, t),
              1 & h.mode && ms(o, u, t),
              (s = u);
            var p = (t = h).updateQueue;
            if (null === p) {
              var g = new Set();
              g.add(s), (t.updateQueue = g);
            } else p.add(s);
            break e;
          }
          if (0 == (1 & t)) {
            ms(o, u, t), mc();
            break e;
          }
          s = Error(oe(426));
        } else if (oi && 1 & l.mode) {
          var m = ys(i);
          if (null !== m) {
            0 == (65536 & m.flags) && (m.flags |= 256),
              vs(m, i, l, 0, t),
              gi(cs(s, l));
            break e;
          }
        }
        (o = s = cs(s, l)),
          4 !== Iu && (Iu = 2),
          null === Mu ? (Mu = [o]) : Mu.push(o),
          (o = i);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t), Di(o, ps(0, s, t));
              break e;
            case 1:
              l = s;
              var y = o.type,
                v = o.stateNode;
              if (
                0 == (128 & o.flags) &&
                ("function" == typeof y.getDerivedStateFromError ||
                  (null !== v &&
                    "function" == typeof v.componentDidCatch &&
                    (null === $u || !$u.has(v))))
              ) {
                (o.flags |= 65536),
                  (t &= -t),
                  (o.lanes |= t),
                  Di(o, gs(o, l, t));
                break e;
              }
          }
          o = o.return;
        } while (null !== o);
      }
      kc(n);
    } catch (b) {
      (t = b), qu === n && null !== n && (qu = n = n.return);
      continue;
    }
    break;
  }
}
function gc() {
  var e = Pu.current;
  return (Pu.current = is), null === e ? is : e;
}
function mc() {
  (0 !== Iu && 3 !== Iu && 2 !== Iu) || (Iu = 4),
    null === Nu ||
      (0 == (268435455 & Du) && 0 == (268435455 & Fu)) ||
      sc(Nu, Ou);
}
function yc(e, t) {
  var n = Lu;
  Lu |= 2;
  var r = gc();
  for ((Nu === e && Ou === t) || ((Wu = null), hc(e, t)); ; )
    try {
      vc();
      break;
    } catch (a) {
      pc(e, a);
    }
  if ((_i(), (Lu = n), (Pu.current = r), null !== qu)) throw Error(oe(261));
  return (Nu = null), (Ou = 0), Iu;
}
function vc() {
  for (; null !== qu; ) wc(qu);
}
function bc() {
  for (; null !== qu && !Yt(); ) wc(qu);
}
function wc(e) {
  var t = xu(e.alternate, e, zu);
  (e.memoizedProps = e.pendingProps),
    null === t ? kc(e) : (qu = t),
    (Eu.current = null);
}
function kc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), 0 == (32768 & t.flags))) {
      if (null !== (n = Gs(n, t, zu))) return void (qu = n);
    } else {
      if (null !== (n = Ys(n, t))) return (n.flags &= 32767), void (qu = n);
      if (null === e) return (Iu = 6), void (qu = null);
      (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
    }
    if (null !== (t = t.sibling)) return void (qu = t);
    qu = t = e;
  } while (null !== t);
  0 === Iu && (Iu = 5);
}
function _c(e, t, n) {
  var r = wn,
    a = Tu.transition;
  try {
    (Tu.transition = null),
      (wn = 1),
      (function (e, t, n, r) {
        do {
          Sc();
        } while (null !== Yu);
        if (0 != (6 & Lu)) throw Error(oe(327));
        n = e.finishedWork;
        var a = e.finishedLanes;
        if (null === n) return null;
        if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
          throw Error(oe(177));
        (e.callbackNode = null), (e.callbackPriority = 0);
        var o = n.lanes | n.childLanes;
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
                o = 1 << a;
              (t[a] = 0), (r[a] = -1), (e[a] = -1), (n &= ~o);
            }
          })(e, o),
          e === Nu && ((qu = Nu = null), (Ou = 0)),
          (0 == (2064 & n.subtreeFlags) && 0 == (2064 & n.flags)) ||
            Gu ||
            ((Gu = !0),
            Nc(tn, function () {
              return Sc(), null;
            })),
          (o = 0 != (15990 & n.flags)),
          0 != (15990 & n.subtreeFlags) || o)
        ) {
          (o = Tu.transition), (Tu.transition = null);
          var i = wn;
          wn = 1;
          var l = Lu;
          (Lu |= 4),
            (Eu.current = null),
            (function (e, t) {
              if (((eo = Hn), ha((e = fa())))) {
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
                        o = r.focusNode;
                      r = r.focusOffset;
                      try {
                        n.nodeType, o.nodeType;
                      } catch (w) {
                        n = null;
                        break e;
                      }
                      var i = 0,
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
                            (l = i + a),
                            d !== o ||
                              (0 !== r && 3 !== d.nodeType) ||
                              (s = i + r),
                            3 === d.nodeType && (i += d.nodeValue.length),
                            null !== (h = d.firstChild);

                        )
                          (f = d), (d = h);
                        for (;;) {
                          if (d === e) break t;
                          if (
                            (f === n && ++u === a && (l = i),
                            f === o && ++c === r && (s = i),
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
                to = { focusedElem: e, selectionRange: n }, Hn = !1, Zs = t;
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
                                  t.elementType === t.type ? g : yi(t.type, g),
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
                            throw Error(oe(163));
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
            pa(to),
            (Hn = !!eo),
            (to = eo = null),
            (e.current = n),
            bu(n),
            Kt(),
            (Lu = l),
            (wn = i),
            (Tu.transition = o);
        } else e.current = n;
        if (
          (Gu && ((Gu = !1), (Yu = e), (Ku = a)),
          0 === (o = e.pendingLanes) && ($u = null),
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
          0 != (1 & (o = e.pendingLanes))
            ? e === Ju
              ? Xu++
              : ((Xu = 0), (Ju = e))
            : (Xu = 0),
          Vo();
      })(e, t, n, r);
  } finally {
    (Tu.transition = a), (wn = r);
  }
  return null;
}
function Sc() {
  if (null !== Yu) {
    var e = kn(Ku),
      t = Tu.transition,
      n = wn;
    try {
      if (((Tu.transition = null), (wn = 16 > e ? 16 : e), null === Yu))
        var r = !1;
      else {
        if (((e = Yu), (Yu = null), (Ku = 0), 0 != (6 & Lu)))
          throw Error(oe(331));
        var a = Lu;
        for (Lu |= 4, Zs = e.current; null !== Zs; ) {
          var o = Zs,
            i = o.child;
          if (0 != (16 & Zs.flags)) {
            var l = o.deletions;
            if (null !== l) {
              for (var s = 0; s < l.length; s++) {
                var u = l[s];
                for (Zs = u; null !== Zs; ) {
                  var c = Zs;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ru(8, c, o);
                  }
                  var d = c.child;
                  if (null !== d) (d.return = c), (Zs = d);
                  else
                    for (; null !== Zs; ) {
                      var f = (c = Zs).sibling,
                        h = c.return;
                      if ((iu(c), c === u)) {
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
              var p = o.alternate;
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
              Zs = o;
            }
          }
          if (0 != (2064 & o.subtreeFlags) && null !== i)
            (i.return = o), (Zs = i);
          else
            e: for (; null !== Zs; ) {
              if (0 != (2048 & (o = Zs).flags))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    ru(9, o, o.return);
                }
              var y = o.sibling;
              if (null !== y) {
                (y.return = o.return), (Zs = y);
                break e;
              }
              Zs = o.return;
            }
        }
        var v = e.current;
        for (Zs = v; null !== Zs; ) {
          var b = (i = Zs).child;
          if (0 != (2064 & i.subtreeFlags) && null !== b)
            (b.return = i), (Zs = b);
          else
            e: for (i = v; null !== Zs; ) {
              if (0 != (2048 & (l = Zs).flags))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      au(9, l);
                  }
                } catch (k) {
                  Cc(l, l.return, k);
                }
              if (l === i) {
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
          ((Lu = a), Vo(), on && "function" == typeof on.onPostCommitFiberRoot)
        )
          try {
            on.onPostCommitFiberRoot(an, e);
          } catch (k) {}
        r = !0;
      }
      return r;
    } finally {
      (wn = n), (Tu.transition = t);
    }
  }
  return !1;
}
function xc(e, t, n) {
  (e = Ii(e, (t = ps(0, (t = cs(n, t)), 1)), 1)),
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
          (t = Ii(t, (e = gs(t, (e = cs(n, e)), 1)), 1)),
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
    Nu === e &&
      (Ou & n) === n &&
      (4 === Iu || (3 === Iu && (130023424 & Ou) === Ou && 500 > Xt() - Uu)
        ? hc(e, 0)
        : (Ru |= n)),
    ac(e, t);
}
function Ec(e, t) {
  0 === t &&
    (0 == (1 & e.mode)
      ? (t = 1)
      : ((t = dn), 0 == (130023424 & (dn <<= 1)) && (dn = 4194304)));
  var n = tc();
  null !== (e = Ni(e, t)) && (vn(e, t, n), ac(e, n));
}
function Tc(e) {
  var t = e.memoizedState,
    n = 0;
  null !== t && (n = t.retryLane), Ec(e, n);
}
function Lc(e, t) {
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
      throw Error(oe(314));
  }
  null !== r && r.delete(t), Ec(e, n);
}
function Nc(e, t) {
  return $t(e, t);
}
function qc(e, t, n, r) {
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
  return new qc(e, t, n, r);
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
function Ic(e, t, n, r, a, o) {
  var i = 2;
  if (((r = e), "function" == typeof e)) zc(e) && (i = 1);
  else if ("string" == typeof e) i = 5;
  else
    e: switch (e) {
      case Se:
        return Bc(n.children, a, o, t);
      case xe:
        (i = 8), (a |= 8);
        break;
      case Ce:
        return ((e = Oc(12, n, t, 2 | a)).elementType = Ce), (e.lanes = o), e;
      case Le:
        return ((e = Oc(13, n, t, a)).elementType = Le), (e.lanes = o), e;
      case Ne:
        return ((e = Oc(19, n, t, a)).elementType = Ne), (e.lanes = o), e;
      case ze:
        return Dc(n, a, o, t);
      default:
        if ("object" == typeof e && null !== e)
          switch (e.$$typeof) {
            case Pe:
              i = 10;
              break e;
            case Ee:
              i = 9;
              break e;
            case Te:
              i = 11;
              break e;
            case qe:
              i = 14;
              break e;
            case Oe:
              (i = 16), (r = null);
              break e;
          }
        throw Error(oe(130, null == e ? e : typeof e, ""));
    }
  return ((t = Oc(i, n, t, a)).elementType = e), (t.type = r), (t.lanes = o), t;
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
function jc(e, t, n, r, a, o, i, l, s) {
  return (
    (e = new Mc(e, t, n, l, s)),
    1 === t ? ((t = 1), !0 === o && (t |= 8)) : (t = 0),
    (o = Oc(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Oi(o),
    e
  );
}
function Uc(e) {
  if (!e) return To;
  e: {
    if (Ut((e = e._reactInternals)) !== e || 1 !== e.tag) throw Error(oe(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (zo(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (null !== t);
    throw Error(oe(171));
  }
  if (1 === e.tag) {
    var n = e.type;
    if (zo(n)) return Bo(e, n, t);
  }
  return t;
}
function Vc(e, t, n, r, a, o, i, l, s) {
  return (
    ((e = jc(n, r, !0, e, 0, o, 0, l, s)).context = Uc(null)),
    (n = e.current),
    ((o = Ai((r = tc()), (a = nc(n)))).callback = null != t ? t : null),
    Ii(n, o, a),
    (e.current.lanes = a),
    vn(e, a, r),
    ac(e, r),
    e
  );
}
function Wc(e, t, n, r) {
  var a = t.current,
    o = tc(),
    i = nc(a);
  return (
    (n = Uc(n)),
    null === t.context ? (t.context = n) : (t.pendingContext = n),
    ((t = Ai(o, i)).payload = { element: e }),
    null !== (r = void 0 === r ? null : r) && (t.callback = r),
    null !== (e = Ii(a, t, i)) && (rc(e, a, i, o), Bi(e, a, i)),
    i
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
    if (e.memoizedProps !== t.pendingProps || No.current) ws = !0;
    else {
      if (0 == (e.lanes & n) && 0 == (128 & t.flags))
        return (
          (ws = !1),
          (function (e, t, n) {
            switch (t.tag) {
              case 3:
                Ns(t), pi();
                break;
              case 5:
                il(t);
                break;
              case 1:
                zo(t.type) && Do(t);
                break;
              case 4:
                al(t, t.stateNode.containerInfo);
                break;
              case 10:
                var r = t.type._context,
                  a = t.memoizedProps.value;
                Eo(vi, r._currentValue), (r._currentValue = a);
                break;
              case 13:
                if (null !== (r = t.memoizedState))
                  return null !== r.dehydrated
                    ? (Eo(sl, 1 & sl.current), (t.flags |= 128), null)
                    : 0 != (n & t.child.childLanes)
                    ? Fs(e, t, n)
                    : (Eo(sl, 1 & sl.current),
                      null !== (e = Hs(e, t, n)) ? e.sibling : null);
                Eo(sl, 1 & sl.current);
                break;
              case 19:
                if (((r = 0 != (n & t.childLanes)), 0 != (128 & e.flags))) {
                  if (r) return Vs(e, t, n);
                  t.flags |= 128;
                }
                if (
                  (null !== (a = t.memoizedState) &&
                    ((a.rendering = null),
                    (a.tail = null),
                    (a.lastEffect = null)),
                  Eo(sl, sl.current),
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
  else (ws = !1), oi && 0 != (1048576 & t.flags) && ei(t, $o, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Ws(e, t), (e = t.pendingProps);
      var a = Oo(t, Lo.current);
      Ci(t, n), (a = xl(null, t, r, e, a, n));
      var o = Cl();
      return (
        (t.flags |= 1),
        "object" == typeof a &&
        null !== a &&
        "function" == typeof a.render &&
        void 0 === a.$$typeof
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            zo(r) ? ((o = !0), Do(t)) : (o = !1),
            (t.memoizedState =
              null !== a.state && void 0 !== a.state ? a.state : null),
            Oi(t),
            (a.updater = Ui),
            (t.stateNode = a),
            (a._reactInternals = t),
            Qi(t, r, e, n),
            (t = Ls(null, t, r, !0, o, n)))
          : ((t.tag = 0), oi && o && ti(t), ks(null, t, a, n), (t = t.child)),
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
                if ((e = e.$$typeof) === Te) return 11;
                if (e === qe) return 14;
              }
              return 2;
            })(r)),
          (e = yi(r, e)),
          a)
        ) {
          case 0:
            t = Es(null, t, r, e, n);
            break e;
          case 1:
            t = Ts(null, t, r, e, n);
            break e;
          case 11:
            t = _s(null, t, r, e, n);
            break e;
          case 14:
            t = Ss(null, t, r, yi(r.type, e), n);
            break e;
        }
        throw Error(oe(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (a = t.pendingProps),
        Es(e, t, r, (a = t.elementType === r ? a : yi(r, a)), n)
      );
    case 1:
      return (
        (r = t.type),
        (a = t.pendingProps),
        Ts(e, t, r, (a = t.elementType === r ? a : yi(r, a)), n)
      );
    case 3:
      e: {
        if ((Ns(t), null === e)) throw Error(oe(387));
        (r = t.pendingProps),
          (a = (o = t.memoizedState).element),
          zi(e, t),
          Fi(t, r, null, n);
        var i = t.memoizedState;
        if (((r = i.element), o.isDehydrated)) {
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            256 & t.flags)
          ) {
            t = qs(e, t, r, n, (a = cs(Error(oe(423)), t)));
            break e;
          }
          if (r !== a) {
            t = qs(e, t, r, n, (a = cs(Error(oe(424)), t)));
            break e;
          }
          for (
            ai = uo(t.stateNode.containerInfo.firstChild),
              ri = t,
              oi = !0,
              ii = null,
              n = Ji(t, null, r, n),
              t.child = n;
            n;

          )
            (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
        } else {
          if ((pi(), r === a)) {
            t = Hs(e, t, n);
            break e;
          }
          ks(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        il(t),
        null === e && ci(t),
        (r = t.type),
        (a = t.pendingProps),
        (o = null !== e ? e.memoizedProps : null),
        (i = a.children),
        no(r, a) ? (i = null) : null !== o && no(r, o) && (t.flags |= 32),
        Ps(e, t),
        ks(e, t, i, n),
        t.child
      );
    case 6:
      return null === e && ci(t), null;
    case 13:
      return Fs(e, t, n);
    case 4:
      return (
        al(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        null === e ? (t.child = Xi(t, null, r, n)) : ks(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (a = t.pendingProps),
        _s(e, t, r, (a = t.elementType === r ? a : yi(r, a)), n)
      );
    case 7:
      return ks(e, t, t.pendingProps, n), t.child;
    case 8:
    case 12:
      return ks(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (a = t.pendingProps),
          (o = t.memoizedProps),
          (i = a.value),
          Eo(vi, r._currentValue),
          (r._currentValue = i),
          null !== o)
        )
          if (la(o.value, i)) {
            if (o.children === a.children && !No.current) {
              t = Hs(e, t, n);
              break e;
            }
          } else
            for (null !== (o = t.child) && (o.return = t); null !== o; ) {
              var l = o.dependencies;
              if (null !== l) {
                i = o.child;
                for (var s = l.firstContext; null !== s; ) {
                  if (s.context === r) {
                    if (1 === o.tag) {
                      (s = Ai(-1, n & -n)).tag = 2;
                      var u = o.updateQueue;
                      if (null !== u) {
                        var c = (u = u.shared).pending;
                        null === c
                          ? (s.next = s)
                          : ((s.next = c.next), (c.next = s)),
                          (u.pending = s);
                      }
                    }
                    (o.lanes |= n),
                      null !== (s = o.alternate) && (s.lanes |= n),
                      xi(o.return, n, t),
                      (l.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (10 === o.tag) i = o.type === t.type ? null : o.child;
              else if (18 === o.tag) {
                if (null === (i = o.return)) throw Error(oe(341));
                (i.lanes |= n),
                  null !== (l = i.alternate) && (l.lanes |= n),
                  xi(i, n, t),
                  (i = o.sibling);
              } else i = o.child;
              if (null !== i) i.return = o;
              else
                for (i = o; null !== i; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (null !== (o = i.sibling)) {
                    (o.return = i.return), (i = o);
                    break;
                  }
                  i = i.return;
                }
              o = i;
            }
        ks(e, t, a.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (a = t.type),
        (r = t.pendingProps.children),
        Ci(t, n),
        (r = r((a = Pi(a)))),
        (t.flags |= 1),
        ks(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (a = yi((r = t.type), t.pendingProps)),
        Ss(e, t, r, (a = yi(r.type, a)), n)
      );
    case 15:
      return xs(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (a = t.pendingProps),
        (a = t.elementType === r ? a : yi(r, a)),
        Ws(e, t),
        (t.tag = 1),
        zo(r) ? ((e = !0), Do(t)) : (e = !1),
        Ci(t, n),
        Wi(t, r, a),
        Qi(t, r, a, n),
        Ls(null, t, r, !0, e, n)
      );
    case 19:
      return Vs(e, t, n);
    case 22:
      return Cs(e, t, n);
  }
  throw Error(oe(156, t.tag));
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
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if ("function" == typeof a) {
      var l = a;
      a = function () {
        var e = Hc(i);
        l.call(e);
      };
    }
    Wc(t, i, e, a);
  } else
    i = (function (e, t, n, r, a) {
      if (a) {
        if ("function" == typeof r) {
          var o = r;
          r = function () {
            var e = Hc(i);
            o.call(e);
          };
        }
        var i = Vc(t, r, e, 0, null, !1, 0, "", Zc);
        return (
          (e._reactRootContainer = i),
          (e[go] = i.current),
          Ua(8 === e.nodeType ? e.parentNode : e),
          dc(),
          i
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
      var s = jc(e, 0, !1, null, 0, !1, 0, "", Zc);
      return (
        (e._reactRootContainer = s),
        (e[go] = s.current),
        Ua(8 === e.nodeType ? e.parentNode : e),
        dc(function () {
          Wc(t, s, n, r);
        }),
        s
      );
    })(n, t, e, a, r);
  return Hc(i);
}
(Kc.prototype.render = Yc.prototype.render =
  function (e) {
    var t = this._internalRoot;
    if (null === t) throw Error(oe(409));
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
          (t[go] = null);
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
  (_n = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = fn(t.pendingLanes);
          0 !== n &&
            (bn(t, 1 | n),
            ac(t, Xt()),
            0 == (6 & Lu) && ((Vu = Xt() + 500), Vo()));
        }
        break;
      case 13:
        dc(function () {
          var t = Ni(e, 1);
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
      var t = Ni(e, 134217728);
      null !== t && rc(t, e, 134217728, tc()), $c(e, 134217728);
    }
  }),
  (xn = function (e) {
    if (13 === e.tag) {
      var t = nc(e),
        n = Ni(e, t);
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
  (_t = function (e, t, n) {
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
              var a = _o(r);
              if (!a) throw Error(oe(90));
              $e(r), Je(r, a);
            }
          }
        }
        break;
      case "textarea":
        ot(e, n);
        break;
      case "select":
        null != (t = n.value) && nt(e, !!n.multiple, t, !1);
    }
  }),
  (Tt = cc),
  (Lt = dc);
var td = { usingClientEntryPoint: !1, Events: [wo, ko, _o, Pt, Et, cc] },
  nd = {
    findFiberByHostInstance: bo,
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
    if (!Xc(t)) throw Error(oe(200));
    return (function (e, t, n) {
      var r =
        3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
      return {
        $$typeof: _e,
        key: null == r ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n,
      };
    })(e, t, null, n);
  }),
  (Z.createRoot = function (e, t) {
    if (!Xc(e)) throw Error(oe(299));
    var n = !1,
      r = "",
      a = Gc;
    return (
      null != t &&
        (!0 === t.unstable_strictMode && (n = !0),
        void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
        void 0 !== t.onRecoverableError && (a = t.onRecoverableError)),
      (t = jc(e, 1, !1, null, 0, n, 0, r, a)),
      (e[go] = t.current),
      Ua(8 === e.nodeType ? e.parentNode : e),
      new Yc(t)
    );
  }),
  (Z.findDOMNode = function (e) {
    if (null == e) return null;
    if (1 === e.nodeType) return e;
    var t = e._reactInternals;
    if (void 0 === t) {
      if ("function" == typeof e.render) throw Error(oe(188));
      throw ((e = Object.keys(e).join(",")), Error(oe(268, e)));
    }
    return null === (e = Ht(t)) ? null : e.stateNode;
  }),
  (Z.flushSync = function (e) {
    return dc(e);
  }),
  (Z.hydrate = function (e, t, n) {
    if (!Jc(t)) throw Error(oe(200));
    return ed(null, e, t, !0, n);
  }),
  (Z.hydrateRoot = function (e, t, n) {
    if (!Xc(e)) throw Error(oe(405));
    var r = (null != n && n.hydratedSources) || null,
      a = !1,
      o = "",
      i = Gc;
    if (
      (null != n &&
        (!0 === n.unstable_strictMode && (a = !0),
        void 0 !== n.identifierPrefix && (o = n.identifierPrefix),
        void 0 !== n.onRecoverableError && (i = n.onRecoverableError)),
      (t = Vc(t, null, e, 1, null != n ? n : null, a, 0, o, i)),
      (e[go] = t.current),
      Ua(e),
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
    if (!Jc(t)) throw Error(oe(200));
    return ed(null, e, t, !1, n);
  }),
  (Z.unmountComponentAtNode = function (e) {
    if (!Jc(e)) throw Error(oe(40));
    return (
      !!e._reactRootContainer &&
      (dc(function () {
        ed(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[go] = null);
        });
      }),
      !0)
    );
  }),
  (Z.unstable_batchedUpdates = cc),
  (Z.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
    if (!Jc(n)) throw Error(oe(200));
    if (null == e || void 0 === e._reactInternals) throw Error(oe(38));
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
var od = J.exports;
(X.createRoot = od.createRoot), (X.hydrateRoot = od.hydrateRoot);
var id = { exports: {} };
function ld() {}
function sd() {}
(sd.resetWarningCache = ld),
  (id.exports = (function () {
    function e(e, t, n, r, a, o) {
      if ("SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED" !== o) {
        var i = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw ((i.name = "Invariant Violation"), i);
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
const ud = t(id.exports),
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
        o = (window.innerWidth - n * t) / 2;
      e.resize({
        width: `${n}px`,
        height: `${r}px`,
        left: `${o}px`,
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
      question: "What is vaping?",
      answers: [
        "When someone drinks a vaping liquid",
        "When a device heats a liquid into a vapor that someone breathes in",
        "What someone does when they are trying to stop using other drugs",
      ],
      feedback: ["q1_incorrect", "q1_correct", "q1_incorrect"],
      cue: ["2000", "2525", "3025"],
      correctAnswer:
        "When a device heats a liquid into a vapor that someone breathes in",
      worstAnswer: "",
    },
    lvl_2: {
      key: 2,
      scenario: !1,
      question: "Vaping liquid contains:",
      answers: [
        "Only water",
        "Nothing harmful",
        "Nicotine and harmful chemicals",
      ],
      feedback: ["q2_incorrect", "q2_incorrect", "q2_correct"],
      cue: ["2000", "2525", "3025"],
      correctAnswer: "Nicotine and harmful chemicals",
      worstAnswer: "",
    },
    lvl_3: {
      key: 3,
      scenario: !1,
      question: "All vaping devices look the same. True or false?",
      answers: ["True", "False"],
      feedback: ["q3_incorrect", "q3_correct"],
      cue: ["2000", "2525", "3025"],
      correctAnswer: "False",
      worstAnswer: "",
    },
    lvl_4: {
      key: 4,
      scenario: !1,
      question:
        "Vaping device companies use fun colors and packaging to try and influence young people to vape. True or False?",
      answers: ["True", "False"],
      feedback: ["q4_correct", "q4_incorrect"],
      cue: ["2000", "2525", "3025"],
      correctAnswer: "True",
      worstAnswer: "",
    },
    lvl_5: {
      key: 5,
      scenario: !1,
      question:
        "All vaping products and devices meet government regulations. True or False?",
      answers: ["True", "False"],
      feedback: ["q5_incorrect", "q5_correct"],
      cue: ["2000", "2525", "3025"],
      correctAnswer: "False",
      worstAnswer: "",
    },
    lvl_6: {
      key: 6,
      scenario: !1,
      question: "What type of drug is nicotine?",
      answers: ["Inhalant", "Stimulant", "Depressant"],
      feedback: ["q6_incorrect", "q6_correct", "q6_incorrect"],
      cue: ["2000", "2525", "3025"],
      correctAnswer: "Stimulant",
      worstAnswer: "",
    },
    lvl_7: {
      key: 7,
      scenario: !1,
      question:
        "It takes a long time to get addicted to nicotine. True or false?",
      answers: ["True", "False"],
      feedback: ["q7_incorrect", "q7_correct"],
      cue: ["2000", "2525", "3025"],
      correctAnswer: "False",
      worstAnswer: "",
    },
    lvl_8: {
      key: 8,
      scenario: !1,
      question: "When does someone go through withdrawal?",
      answers: [
        "When they stop using a drug they are addicted to",
        "When they haven’t had enough water to drink",
        "When they haven’t gotten enough sleep all week",
      ],
      feedback: ["q8_correct", "q8_incorrect", "q8_incorrect"],
      cue: ["2000", "2525", "3025"],
      correctAnswer: "When they stop using a drug they are addicted to",
      worstAnswer: "",
    },
    lvl_9: {
      key: 9,
      scenario: !1,
      question: "Addiction happens when:",
      answers: [
        "Something is really fun to do",
        "Someone’s body becomes dependent on a substance",
        "Someone does something repeatedly",
      ],
      feedback: ["q9_incorrect", "q9_correct", "q9_incorrect"],
      cue: ["2000", "2525", "3025"],
      correctAnswer: "Someone’s body becomes dependent on a substance",
      worstAnswer: "",
    },
    lvl_10: {
      key: 10,
      scenario: !1,
      question:
        "In the United States, how old does someone need to be to purchase vaping devices and products?",
      answers: ["18", "21", "25"],
      feedback: ["q10_incorrect", "q10_correct", "q10_incorrect"],
      cue: ["2000", "2525", "3025"],
      correctAnswer: "21",
      worstAnswer: "",
    },
    lvl_11: {
      key: 11,
      scenario: !1,
      question:
        "On vape packaging, what information is included on the warning labels?",
      answers: [
        "It’s negative health impacts and that people must be 21 to buy",
        "All of the possible impacts of vaping",
        "Different benefits of vaping",
      ],
      feedback: ["q11_correct", "q11_incorrect", "q11_incorrect"],
      cue: ["2000", "2525", "3025"],
      correctAnswer:
        "It’s negative health impacts and that people must be 21 to buy",
      worstAnswer: "",
    },
    lvl_12: {
      key: 12,
      scenario: !1,
      question: "What are some of the short-term health impacts of vaping?",
      answers: [
        "Nausea, coughing and muscle soreness",
        "Trouble breathing, headaches and coughing",
        "Dizziness, sweating and irritability",
      ],
      feedback: ["q12_incorrect", "q12_correct", "q12_incorrect"],
      cue: ["2000", "2525", "3025"],
      correctAnswer: "Trouble breathing, headaches and coughing",
      worstAnswer: "",
    },
    lvl_13: {
      key: 13,
      scenario: !1,
      question:
        "If someone quits vaping, the short-term health impacts usually go away.  True or false?",
      answers: ["True", "False"],
      feedback: ["q13_correct", "q13_incorrect"],
      cue: ["2000", "2525", "3025"],
      correctAnswer: "True",
      worstAnswer: "",
    },
    lvl_14: {
      key: 14,
      scenario: !1,
      question: "Vaping can lead to:",
      answers: [
        "Anxiety, trouble focusing and sleep problems",
        "Depression, better sleep and organ damage",
        "Better test scores and more energy",
      ],
      feedback: ["q14_correct", "q14_incorrect", "q14_incorrect"],
      cue: ["2000", "2525", "3025"],
      correctAnswer: "Anxiety, trouble focusing and sleep problems",
      worstAnswer: "",
    },
    lvl_15: {
      key: 15,
      scenario: !1,
      question:
        "People who vape are more likely to get addicted to other drugs. True or false?",
      answers: ["True", "False"],
      feedback: ["q15_correct", "q15_incorrect"],
      cue: ["2000", "2525", "3025"],
      correctAnswer: "True",
      worstAnswer: "",
    },
    lvl_16: {
      key: 16,
      scenario: !1,
      question:
        "We know all of the possible health impacts of vaping. True or false?",
      answers: ["True", "False"],
      feedback: ["q16_incorrect", "q16_correct"],
      cue: ["2000", "2525", "3025"],
      correctAnswer: "False",
      worstAnswer: "",
    },
    lvl_17: {
      key: 17,
      scenario: !1,
      question: "What does EVALI stand for?",
      answers: [
        "Electronic Vape Acquired Lung Injury",
        "E-cigarette or Vaping Use-Associated Lung Injury",
        "E-cigarette Vaping And Respiratory Illness",
      ],
      feedback: ["q17_incorrect", "q17_correct", "q17_incorrect"],
      cue: ["2000", "2525", "3025"],
      correctAnswer: "E-cigarette or Vaping Use-Associated Lung Injury",
      worstAnswer: "",
    },
    lvl_18: {
      key: 18,
      scenario: !1,
      question: "Vitamin E acetate is:",
      answers: [
        "Safe in foods",
        "Safe in skin care products",
        "Not something that should be inhaled",
        "All of these are correct",
      ],
      feedback: [
        "q18_incorrect",
        "q18_incorrect",
        "q18_incorrect",
        "q18_correct",
      ],
      cue: ["2000", "2525", "3025", "3525"],
      correctAnswer: "All of these are correct",
      worstAnswer: "",
    },
    lvl_19: {
      key: 19,
      scenario: !1,
      question: "What’s the best answer if someone asks you to vape?",
      answers: [
        "Tell them you’ll try it once",
        "Tell them maybe another time",
        "Tell them no",
      ],
      feedback: ["q19_incorrect", "q19_incorrect", "q19_correct"],
      cue: ["2000", "2525", "3025"],
      correctAnswer: "Tell them no",
      worstAnswer: "",
    },
    lvl_20: {
      key: 20,
      scenario: !1,
      question: "Vape products are safe to use. True or false?",
      answers: ["True", "False"],
      feedback: ["q20_incorrect", "q20_correct"],
      cue: ["2000", "2525", "3025"],
      correctAnswer: "False",
      worstAnswer: "",
    },
  },
  wd = {
    1: {
      key: 1,
      scenario: !0,
      question:
        "While mini golfing, you and a friend decide to get some snacks at the concession stand. While you’re waiting in line, your friend asks you if you want to try vaping with her behind the concession stand building. What do you tell them?",
      answers: [
        "Sure, let’s try it!",
        "No, it’s not for me",
        "I don’t want to vape, and you could get in trouble for vaping",
      ],
      feedback: ["s1_incorrect", "s1_incorrect_2", "s1_correct"],
      cue: ["2000", "2525", "3025"],
      correctAnswer:
        "I don’t want to vape, and you could get in trouble for vaping",
      worstAnswer: "Sure, let’s try it!",
    },
    2: {
      key: 2,
      scenario: !0,
      question:
        "While you’re waiting for your turn to golf, you and a friend start talking about how stressed you both are for a test next week. Your friend tells you that they think vaping helps them focus and calms them down, and they want you to try it. What do you tell them?",
      answers: [
        "If it helps you, it might help me. I’ll try it one time to see if it helps.",
        "No, but I don’t mind if you vape.",
        "I don’t want to vape. Did you know that vaping actually makes it harder to focus and can cause anxiety?",
      ],
      feedback: ["s1_incorrect", "s1_incorrect_2", "s2_correct"],
      cue: ["2000", "2525", "3025"],
      correctAnswer:
        "I don’t want to vape. Did you know that vaping actually makes it harder to focus and can cause anxiety?",
      worstAnswer:
        "If it helps you, it might help me. I’ll try it one time to see if it helps.",
    },
    3: {
      key: 3,
      scenario: !0,
      question:
        "You’re walking to the next hole with a friend and they find a vape device that’s still in the packaging on the ground. They pick it up, open it and are trying to convince you to try it with them. What do you tell them?",
      answers: [
        "Vaping isn’t good for you and it’s illegal for anyone under 21. We should throw it away.",
        "You found that on the ground. No, that’s gross.",
        "You found that on the ground? We should definitely try it.",
      ],
      feedback: ["s3_correct", "s3_incorrect", "s3_incorrect_2"],
      cue: ["2000", "2525", "3025"],
      correctAnswer:
        "Vaping isn’t good for you and it’s illegal for anyone under 21. We should throw it away.",
      worstAnswer: "You found that on the ground? We should definitely try it.",
    },
  },
  kd = [
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
  _d = [
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
      this.playerData.holesPutts.push(e), console.log(this.playerData);
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
            (e[1] = t(_d)),
            (e[2] = t(Sd)),
            (e[3] = t(xd)))
          : 2 === this.rankingPlace
          ? ((e[0] = t(kd)),
            (e[1] = this.playerData),
            (e[2] = t(Sd)),
            (e[3] = t(xd)))
          : 3 === this.rankingPlace
          ? ((e[0] = t(kd)),
            (e[1] = t(_d)),
            (e[2] = this.playerData),
            (e[3] = t(xd)))
          : ((e[0] = t(kd)),
            (e[1] = t(_d)),
            (e[2] = t(Sd)),
            (e[3] = this.playerData)),
        e
      );
    }
    getRandomNumber(e, t) {
      return Math.floor(Math.random() * t) + e;
    }
  })(),
  Ed = new (class {
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
class Td extends n.Scene {
  constructor() {
    super("Boot");
  }
  preload() {
    this.load.setPath("assets/images"),
      this.load.image("golf_logo", "golf_logo.png");
  }
  create() {
    Ed.startPreload(this.scene);
  }
}
const Ld = new (class {
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
class Nd extends Phaser.GameObjects.Sprite {
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
class qd extends Phaser.GameObjects.Sprite {
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
      o = this.calculateAccelerationColor(a);
    a > this.arrowBodyWidthLimit ||
      ((this.bodyImage.displayWidth = a), this.changeArrowTint(o));
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
      (this.background = new Nd(this, e.background)),
      (this.platform = new qd(this, e.platform)),
      (this.hole = new Od(this, e.hole)),
      (this.sand = new Ad(this, e.sand)),
      (this.ball = new zd(this, e.ball)),
      null != e.overlay && (this.overlay = new Id(this, e.overlay)),
      this.createWorldBody(),
      (this.accelerationArrow = new Bd(this)),
      Ld.updateHoleCounter(e.lvl),
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
    for (var o = 0; o < a.fixtures.length; o++) a.fixtures[o].type = n;
    const i = {
      shape: a,
      render: { sprite: { xOffset: 0, yOffset: 0 } },
      isStatic: !0,
    };
    this.matter.add.gameObject(r, i);
  }
  update() {
    if (
      this.accelerationArrow.disable &&
      ((this.ball.angle = 0),
      this.accelerationArrow.getStartPointerCoordinates(),
      this.ball.isVelocityValueLow() &&
        (this.ball.setVelocity(0, 0),
        (this.accelerationArrow.disable = !1),
        Ld.puttsCount >= Ld.puttsLimit && !this.ballFellIntoHole))
    ) {
      this.removeListeners();
      const e = Ed.handleNewQuestion();
      Ld.showQuestion(e);
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
            Ld.addPuttsPoint(),
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
          const e = Ed.handleNewQuestion();
          Ld.showQuestion(e);
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
  constructor(e, t, n, r, a, o) {
    super(e, t, n, r),
      e.add.existing(this),
      (this.scene = e),
      (this.defaultImage = r),
      (this.hoverImage = a),
      (this.pushImage = o),
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
      (this.rankingPlayersData = Ed.getPlayersData()),
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
        o = this.add.container(212, 468 + 105 * e),
        i = this.add
          .text(0, 0, t, {
            fontFamily: "teko",
            fontSize: "70px",
            color: "#5a8d3eff",
          })
          .setOrigin(0.5, 0.5);
      o.add(i);
      for (let e = 0; e < n.length; e++) {
        let t = 135 + 98 * e;
        const r = this.add
          .text(t, 0, n[e], {
            fontFamily: "teko",
            fontSize: "70px",
            color: "#5a8d3eff",
          })
          .setOrigin(0.5, 0.5);
        o.add(r);
      }
      const l = this.add
        .text(1048, 0, r, {
          fontFamily: "teko",
          fontSize: "70px",
          color: "#5a8d3eff",
        })
        .setOrigin(0.5, 0.5);
      o.add(l);
      const s = this.add
        .text(1245, 0, a, {
          fontFamily: "teko",
          fontSize: "70px",
          color: "#be8046ff",
        })
        .setOrigin(0.5, 0.5);
      o.add(s), this.playersDataContainerStorage.push(o);
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
            Ld.restart(),
            Ed.restartGame(),
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
const jd = new r.Events.EventEmitter();
class Ud extends n.Scene {
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
          Ed.startGame(this.scene),
          Ld.startScene("UI");
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
class Vd extends n.Scene {
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
      Ed.updatePlayerDataNickAndID(this.nickname);
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
          Ld.startScene("MainMenu"),
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
      this.addAnswers(),
      this.open(),
      this.scene.game.audio[this.questionKey].play();
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
        this.selectedAnswer === t
          ? (this.showCorrectAnswerImage("correct"),
            (r = () => {
              const e = Ld.puttsCount;
              Ed.updatePlayerData(1, 0, e),
                Ld.setPuttsLimit(5),
                Ld.resetPutts(0),
                Ed.isMaxLvl() ? Ld.startGameOver() : Ed.startNextLevel();
            }))
          : this.selectedAnswer === n
          ? (this.showCorrectAnswerImage("wrong"),
            (r = () => {
              const e = Ld.puttsCount;
              Ed.updatePlayerData(0, 0, e),
                Ld.setPuttsLimit(5),
                Ld.resetPutts(0),
                Ed.isMaxLvl()
                  ? Ld.startGameOver()
                  : (this.isScenario &&
                      Ld.showLostScreen("worst", Ed.getGameLvl()),
                    this.isScenario && Ed.updatePlayerData(0, 5, 5),
                    Ed.startNextLevel(this.isScenario ? 2 : 1));
            }))
          : (this.showCorrectAnswerImage("wrong"),
            (r = () => {
              const e = Ld.puttsCount,
                t = this.isScenario ? 2 : 0;
              Ed.updatePlayerData(0, t, e),
                Ld.setPuttsLimit(5),
                Ld.resetPutts(t),
                Ed.isMaxLvl()
                  ? Ld.startGameOver()
                  : (this.isScenario &&
                      Ld.showLostScreen("wrong", Ed.getGameLvl()),
                    Ed.startNextLevel());
            })),
          (e.isClicked = !0),
          this.scene.game.audio[this.questionKey].stop(),
          this.scene.game.audio[this.config.feedback[this.answerIndex]].play(),
          this.scene.time.delayedCall(
            1e3 *
              this.scene.game.audio[this.config.feedback[this.answerIndex]]
                .duration,
            () => {
              this.close(r);
            }
          );
      }),
      e
    );
  }
  addAnswers() {
    for (let e = 0; e <= this.config.answers.length - 1; e++) {
      let t = -606,
        n = 145 * e - 205,
        r = this.config.answers[e];
      const a = this.addAnswer(t, n, r, e);
      this.answers.push(a), this.add(a);
    }
  }
  addAnswer(e, t, n, r) {
    const a = new Qd(this.scene, e, t, n, r + 1).setVisible(!1);
    return (
      this.scene.time.delayedCall(this.config.cue[r], () => {
        a.setVisible(!0), a.open();
      }),
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
    text: "Oops. You weren’t clear enough with your friend and got delayed when they tried to convince you to vape. Your other friends have already started the hole. You’ll start with 2 penalty shots.",
    feedback: "penalty_2",
  },
  2: {
    key: 2,
    text: "Oops. While you were vaping, your friends finished this hole. You’ll have to take 5 penalty strokes and catch up to them at the next one.",
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
      this.scene.time.delayedCall(1300, () => {
        this.scene.game.audio[a].play();
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
    Ld.startScene("Login"), Ed.initGame(this.scene);
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
      "q2_correct",
      "q2_incorrect",
      "q3_correct",
      "q3_incorrect",
      "q4_correct",
      "q4_incorrect",
      "q5_correct",
      "q5_incorrect",
      "q6_correct",
      "q6_incorrect",
      "q7_correct",
      "q7_incorrect",
      "q8_correct",
      "q8_incorrect",
      "q9_correct",
      "q9_incorrect",
      "q10_correct",
      "q10_incorrect",
      "q11_correct",
      "q11_incorrect",
      "q12_correct",
      "q12_incorrect",
      "q13_correct",
      "q13_incorrect",
      "q14_correct",
      "q14_incorrect",
      "q15_correct",
      "q15_incorrect",
      "q16_correct",
      "q16_incorrect",
      "q17_correct",
      "q17_incorrect",
      "q18_correct",
      "q18_incorrect",
      "q19_correct",
      "q19_incorrect",
      "q20_correct",
      "q20_incorrect",
      "s1_correct",
      "s1_incorrect",
      "s1_incorrect_2",
      "s2_correct",
      "s2_incorrect_2",
      "s3_correct",
      "s3_incorrect",
      "s3_incorrect_2",
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
      "game_over_1st",
      "game_over_2nd",
      "game_over_3rd",
      "game_over_4th",
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
      "q2_correct",
      "q2_incorrect",
      "q3_correct",
      "q3_incorrect",
      "q4_correct",
      "q4_incorrect",
      "q5_correct",
      "q5_incorrect",
      "q6_correct",
      "q6_incorrect",
      "q7_correct",
      "q7_incorrect",
      "q8_correct",
      "q8_incorrect",
      "q9_correct",
      "q9_incorrect",
      "q10_correct",
      "q10_incorrect",
      "q11_correct",
      "q11_incorrect",
      "q12_correct",
      "q12_incorrect",
      "q13_correct",
      "q13_incorrect",
      "q14_correct",
      "q14_incorrect",
      "q15_correct",
      "q15_incorrect",
      "q16_correct",
      "q16_incorrect",
      "q17_correct",
      "q17_incorrect",
      "q18_correct",
      "q18_incorrect",
      "q19_correct",
      "q19_incorrect",
      "q20_correct",
      "q20_incorrect",
      "s1_correct",
      "s1_incorrect",
      "s1_incorrect_2",
      "s2_correct",
      "s2_incorrect_2",
      "s3_correct",
      "s3_incorrect",
      "s3_incorrect_2",
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
    scene: [Td, Xd, Vd, Ud, Dd, Kd, Rd],
  },
  Zd = j.forwardRef(function ({ currentActiveScene: e }, t) {
    const n = j.useRef();
    return (
      j.useLayoutEffect(
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
      j.useEffect(
        () => (
          jd.on("current-scene-ready", (n) => {
            e instanceof Function && (e(n), (t.current.scene = n));
          }),
          () => {
            jd.removeListener("current-scene-ready");
          }
        ),
        [e, t]
      ),
      K.jsx("div", { id: "game-container" })
    );
  });
Zd.propTypes = { currentActiveScene: ud.func };
const ef = U.forwardRef((e, t) => {
    const n = j.useRef(null);
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
  tf = U.forwardRef((e, t) => {
    const n = j.useRef(null),
      [r, a] = j.useState(!0),
      o = () => {
        a(!1);
      };
    return (
      j.useImperativeHandle(t, () => ({ hideLoadingScreen: o })),
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
    const [e, t] = j.useState(!0),
      n = j.useRef(),
      r = j.useRef(null);
    return (
      j.useEffect(() => {
        const e = n.current.game,
          t = r.current;
        Ld.init(e.scene),
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
  K.jsx(U.StrictMode, { children: K.jsx(rf, {}) })
);

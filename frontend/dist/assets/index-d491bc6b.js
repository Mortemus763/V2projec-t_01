function wh(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const o in r)
                if (o !== "default" && !(o in e)) {
                    const l = Object.getOwnPropertyDescriptor(r, o);
                    l && Object.defineProperty(e, o, l.get ? l : {
                        enumerable: !0,
                        get: () => r[o]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}
(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]'))
        r(o);
    new MutationObserver(o => {
        for (const l of o)
            if (l.type === "childList")
                for (const i of l.addedNodes)
                    i.tagName === "LINK" && i.rel === "modulepreload" && r(i)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(o) {
        const l = {};
        return o.integrity && (l.integrity = o.integrity),
        o.referrerPolicy && (l.referrerPolicy = o.referrerPolicy),
        o.crossOrigin === "use-credentials" ? l.credentials = "include" : o.crossOrigin === "anonymous" ? l.credentials = "omit" : l.credentials = "same-origin",
        l
    }
    function r(o) {
        if (o.ep)
            return;
        o.ep = !0;
        const l = n(o);
        fetch(o.href, l)
    }
}
)();
function rd(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var od = {
    exports: {}
}
  , Ml = {}
  , ld = {
    exports: {}
}
  , K = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var go = Symbol.for("react.element")
  , Sh = Symbol.for("react.portal")
  , xh = Symbol.for("react.fragment")
  , Eh = Symbol.for("react.strict_mode")
  , Ch = Symbol.for("react.profiler")
  , kh = Symbol.for("react.provider")
  , jh = Symbol.for("react.context")
  , Rh = Symbol.for("react.forward_ref")
  , Nh = Symbol.for("react.suspense")
  , Ph = Symbol.for("react.memo")
  , Lh = Symbol.for("react.lazy")
  , xu = Symbol.iterator;
function _h(e) {
    return e === null || typeof e != "object" ? null : (e = xu && e[xu] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var id = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , ad = Object.assign
  , sd = {};
function hr(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = sd,
    this.updater = n || id
}
hr.prototype.isReactComponent = {};
hr.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
}
;
hr.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
;
function ud() {}
ud.prototype = hr.prototype;
function os(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = sd,
    this.updater = n || id
}
var ls = os.prototype = new ud;
ls.constructor = os;
ad(ls, hr.prototype);
ls.isPureReactComponent = !0;
var Eu = Array.isArray
  , cd = Object.prototype.hasOwnProperty
  , is = {
    current: null
}
  , dd = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function fd(e, t, n) {
    var r, o = {}, l = null, i = null;
    if (t != null)
        for (r in t.ref !== void 0 && (i = t.ref),
        t.key !== void 0 && (l = "" + t.key),
        t)
            cd.call(t, r) && !dd.hasOwnProperty(r) && (o[r] = t[r]);
    var a = arguments.length - 2;
    if (a === 1)
        o.children = n;
    else if (1 < a) {
        for (var s = Array(a), u = 0; u < a; u++)
            s[u] = arguments[u + 2];
        o.children = s
    }
    if (e && e.defaultProps)
        for (r in a = e.defaultProps,
        a)
            o[r] === void 0 && (o[r] = a[r]);
    return {
        $$typeof: go,
        type: e,
        key: l,
        ref: i,
        props: o,
        _owner: is.current
    }
}
function Dh(e, t) {
    return {
        $$typeof: go,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}
function as(e) {
    return typeof e == "object" && e !== null && e.$$typeof === go
}
function Th(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var Cu = /\/+/g;
function Pi(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? Th("" + e.key) : t.toString(36)
}
function Ko(e, t, n, r, o) {
    var l = typeof e;
    (l === "undefined" || l === "boolean") && (e = null);
    var i = !1;
    if (e === null)
        i = !0;
    else
        switch (l) {
        case "string":
        case "number":
            i = !0;
            break;
        case "object":
            switch (e.$$typeof) {
            case go:
            case Sh:
                i = !0
            }
        }
    if (i)
        return i = e,
        o = o(i),
        e = r === "" ? "." + Pi(i, 0) : r,
        Eu(o) ? (n = "",
        e != null && (n = e.replace(Cu, "$&/") + "/"),
        Ko(o, t, n, "", function(u) {
            return u
        })) : o != null && (as(o) && (o = Dh(o, n + (!o.key || i && i.key === o.key ? "" : ("" + o.key).replace(Cu, "$&/") + "/") + e)),
        t.push(o)),
        1;
    if (i = 0,
    r = r === "" ? "." : r + ":",
    Eu(e))
        for (var a = 0; a < e.length; a++) {
            l = e[a];
            var s = r + Pi(l, a);
            i += Ko(l, t, n, s, o)
        }
    else if (s = _h(e),
    typeof s == "function")
        for (e = s.call(e),
        a = 0; !(l = e.next()).done; )
            l = l.value,
            s = r + Pi(l, a++),
            i += Ko(l, t, n, s, o);
    else if (l === "object")
        throw t = String(e),
        Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return i
}
function Po(e, t, n) {
    if (e == null)
        return e;
    var r = []
      , o = 0;
    return Ko(e, r, "", "", function(l) {
        return t.call(n, l, o++)
    }),
    r
}
function Mh(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(),
        t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1,
            e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2,
            e._result = n)
        }),
        e._status === -1 && (e._status = 0,
        e._result = t)
    }
    if (e._status === 1)
        return e._result.default;
    throw e._result
}
var Ae = {
    current: null
}
  , Yo = {
    transition: null
}
  , Oh = {
    ReactCurrentDispatcher: Ae,
    ReactCurrentBatchConfig: Yo,
    ReactCurrentOwner: is
};
K.Children = {
    map: Po,
    forEach: function(e, t, n) {
        Po(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return Po(e, function() {
            t++
        }),
        t
    },
    toArray: function(e) {
        return Po(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!as(e))
            throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
K.Component = hr;
K.Fragment = xh;
K.Profiler = Ch;
K.PureComponent = os;
K.StrictMode = Eh;
K.Suspense = Nh;
K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Oh;
K.cloneElement = function(e, t, n) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = ad({}, e.props)
      , o = e.key
      , l = e.ref
      , i = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (l = t.ref,
        i = is.current),
        t.key !== void 0 && (o = "" + t.key),
        e.type && e.type.defaultProps)
            var a = e.type.defaultProps;
        for (s in t)
            cd.call(t, s) && !dd.hasOwnProperty(s) && (r[s] = t[s] === void 0 && a !== void 0 ? a[s] : t[s])
    }
    var s = arguments.length - 2;
    if (s === 1)
        r.children = n;
    else if (1 < s) {
        a = Array(s);
        for (var u = 0; u < s; u++)
            a[u] = arguments[u + 2];
        r.children = a
    }
    return {
        $$typeof: go,
        type: e.type,
        key: o,
        ref: l,
        props: r,
        _owner: i
    }
}
;
K.createContext = function(e) {
    return e = {
        $$typeof: jh,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
    e.Provider = {
        $$typeof: kh,
        _context: e
    },
    e.Consumer = e
}
;
K.createElement = fd;
K.createFactory = function(e) {
    var t = fd.bind(null, e);
    return t.type = e,
    t
}
;
K.createRef = function() {
    return {
        current: null
    }
}
;
K.forwardRef = function(e) {
    return {
        $$typeof: Rh,
        render: e
    }
}
;
K.isValidElement = as;
K.lazy = function(e) {
    return {
        $$typeof: Lh,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: Mh
    }
}
;
K.memo = function(e, t) {
    return {
        $$typeof: Ph,
        type: e,
        compare: t === void 0 ? null : t
    }
}
;
K.startTransition = function(e) {
    var t = Yo.transition;
    Yo.transition = {};
    try {
        e()
    } finally {
        Yo.transition = t
    }
}
;
K.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.")
}
;
K.useCallback = function(e, t) {
    return Ae.current.useCallback(e, t)
}
;
K.useContext = function(e) {
    return Ae.current.useContext(e)
}
;
K.useDebugValue = function() {}
;
K.useDeferredValue = function(e) {
    return Ae.current.useDeferredValue(e)
}
;
K.useEffect = function(e, t) {
    return Ae.current.useEffect(e, t)
}
;
K.useId = function() {
    return Ae.current.useId()
}
;
K.useImperativeHandle = function(e, t, n) {
    return Ae.current.useImperativeHandle(e, t, n)
}
;
K.useInsertionEffect = function(e, t) {
    return Ae.current.useInsertionEffect(e, t)
}
;
K.useLayoutEffect = function(e, t) {
    return Ae.current.useLayoutEffect(e, t)
}
;
K.useMemo = function(e, t) {
    return Ae.current.useMemo(e, t)
}
;
K.useReducer = function(e, t, n) {
    return Ae.current.useReducer(e, t, n)
}
;
K.useRef = function(e) {
    return Ae.current.useRef(e)
}
;
K.useState = function(e) {
    return Ae.current.useState(e)
}
;
K.useSyncExternalStore = function(e, t, n) {
    return Ae.current.useSyncExternalStore(e, t, n)
}
;
K.useTransition = function() {
    return Ae.current.useTransition()
}
;
K.version = "18.2.0";
ld.exports = K;
var x = ld.exports;
const Tt = rd(x)
  , zh = wh({
    __proto__: null,
    default: Tt
}, [x]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ih = x
  , $h = Symbol.for("react.element")
  , Uh = Symbol.for("react.fragment")
  , Fh = Object.prototype.hasOwnProperty
  , Ah = Ih.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , Bh = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function pd(e, t, n) {
    var r, o = {}, l = null, i = null;
    n !== void 0 && (l = "" + n),
    t.key !== void 0 && (l = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
    for (r in t)
        Fh.call(t, r) && !Bh.hasOwnProperty(r) && (o[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps,
        t)
            o[r] === void 0 && (o[r] = t[r]);
    return {
        $$typeof: $h,
        type: e,
        key: l,
        ref: i,
        props: o,
        _owner: Ah.current
    }
}
Ml.Fragment = Uh;
Ml.jsx = pd;
Ml.jsxs = pd;
od.exports = Ml;
var c = od.exports
  , ia = {}
  , hd = {
    exports: {}
}
  , qe = {}
  , md = {
    exports: {}
}
  , vd = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(P, $) {
        var W = P.length;
        P.push($);
        e: for (; 0 < W; ) {
            var ce = W - 1 >>> 1
              , Se = P[ce];
            if (0 < o(Se, $))
                P[ce] = $,
                P[W] = Se,
                W = ce;
            else
                break e
        }
    }
    function n(P) {
        return P.length === 0 ? null : P[0]
    }
    function r(P) {
        if (P.length === 0)
            return null;
        var $ = P[0]
          , W = P.pop();
        if (W !== $) {
            P[0] = W;
            e: for (var ce = 0, Se = P.length, Mn = Se >>> 1; ce < Mn; ) {
                var re = 2 * (ce + 1) - 1
                  , jt = P[re]
                  , yt = re + 1
                  , On = P[yt];
                if (0 > o(jt, W))
                    yt < Se && 0 > o(On, jt) ? (P[ce] = On,
                    P[yt] = W,
                    ce = yt) : (P[ce] = jt,
                    P[re] = W,
                    ce = re);
                else if (yt < Se && 0 > o(On, W))
                    P[ce] = On,
                    P[yt] = W,
                    ce = yt;
                else
                    break e
            }
        }
        return $
    }
    function o(P, $) {
        var W = P.sortIndex - $.sortIndex;
        return W !== 0 ? W : P.id - $.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var l = performance;
        e.unstable_now = function() {
            return l.now()
        }
    } else {
        var i = Date
          , a = i.now();
        e.unstable_now = function() {
            return i.now() - a
        }
    }
    var s = []
      , u = []
      , d = 1
      , m = null
      , g = 3
      , w = !1
      , S = !1
      , y = !1
      , k = typeof setTimeout == "function" ? setTimeout : null
      , h = typeof clearTimeout == "function" ? clearTimeout : null
      , f = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function v(P) {
        for (var $ = n(u); $ !== null; ) {
            if ($.callback === null)
                r(u);
            else if ($.startTime <= P)
                r(u),
                $.sortIndex = $.expirationTime,
                t(s, $);
            else
                break;
            $ = n(u)
        }
    }
    function p(P) {
        if (y = !1,
        v(P),
        !S)
            if (n(s) !== null)
                S = !0,
                le(j);
            else {
                var $ = n(u);
                $ !== null && q(p, $.startTime - P)
            }
    }
    function j(P, $) {
        S = !1,
        y && (y = !1,
        h(L),
        L = -1),
        w = !0;
        var W = g;
        try {
            for (v($),
            m = n(s); m !== null && (!(m.expirationTime > $) || P && !se()); ) {
                var ce = m.callback;
                if (typeof ce == "function") {
                    m.callback = null,
                    g = m.priorityLevel;
                    var Se = ce(m.expirationTime <= $);
                    $ = e.unstable_now(),
                    typeof Se == "function" ? m.callback = Se : m === n(s) && r(s),
                    v($)
                } else
                    r(s);
                m = n(s)
            }
            if (m !== null)
                var Mn = !0;
            else {
                var re = n(u);
                re !== null && q(p, re.startTime - $),
                Mn = !1
            }
            return Mn
        } finally {
            m = null,
            g = W,
            w = !1
        }
    }
    var D = !1
      , _ = null
      , L = -1
      , O = 5
      , I = -1;
    function se() {
        return !(e.unstable_now() - I < O)
    }
    function X() {
        if (_ !== null) {
            var P = e.unstable_now();
            I = P;
            var $ = !0;
            try {
                $ = _(!0, P)
            } finally {
                $ ? Q() : (D = !1,
                _ = null)
            }
        } else
            D = !1
    }
    var Q;
    if (typeof f == "function")
        Q = function() {
            f(X)
        }
        ;
    else if (typeof MessageChannel < "u") {
        var U = new MessageChannel
          , J = U.port2;
        U.port1.onmessage = X,
        Q = function() {
            J.postMessage(null)
        }
    } else
        Q = function() {
            k(X, 0)
        }
        ;
    function le(P) {
        _ = P,
        D || (D = !0,
        Q())
    }
    function q(P, $) {
        L = k(function() {
            P(e.unstable_now())
        }, $)
    }
    e.unstable_IdlePriority = 5,
    e.unstable_ImmediatePriority = 1,
    e.unstable_LowPriority = 4,
    e.unstable_NormalPriority = 3,
    e.unstable_Profiling = null,
    e.unstable_UserBlockingPriority = 2,
    e.unstable_cancelCallback = function(P) {
        P.callback = null
    }
    ,
    e.unstable_continueExecution = function() {
        S || w || (S = !0,
        le(j))
    }
    ,
    e.unstable_forceFrameRate = function(P) {
        0 > P || 125 < P ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : O = 0 < P ? Math.floor(1e3 / P) : 5
    }
    ,
    e.unstable_getCurrentPriorityLevel = function() {
        return g
    }
    ,
    e.unstable_getFirstCallbackNode = function() {
        return n(s)
    }
    ,
    e.unstable_next = function(P) {
        switch (g) {
        case 1:
        case 2:
        case 3:
            var $ = 3;
            break;
        default:
            $ = g
        }
        var W = g;
        g = $;
        try {
            return P()
        } finally {
            g = W
        }
    }
    ,
    e.unstable_pauseExecution = function() {}
    ,
    e.unstable_requestPaint = function() {}
    ,
    e.unstable_runWithPriority = function(P, $) {
        switch (P) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            P = 3
        }
        var W = g;
        g = P;
        try {
            return $()
        } finally {
            g = W
        }
    }
    ,
    e.unstable_scheduleCallback = function(P, $, W) {
        var ce = e.unstable_now();
        switch (typeof W == "object" && W !== null ? (W = W.delay,
        W = typeof W == "number" && 0 < W ? ce + W : ce) : W = ce,
        P) {
        case 1:
            var Se = -1;
            break;
        case 2:
            Se = 250;
            break;
        case 5:
            Se = 1073741823;
            break;
        case 4:
            Se = 1e4;
            break;
        default:
            Se = 5e3
        }
        return Se = W + Se,
        P = {
            id: d++,
            callback: $,
            priorityLevel: P,
            startTime: W,
            expirationTime: Se,
            sortIndex: -1
        },
        W > ce ? (P.sortIndex = W,
        t(u, P),
        n(s) === null && P === n(u) && (y ? (h(L),
        L = -1) : y = !0,
        q(p, W - ce))) : (P.sortIndex = Se,
        t(s, P),
        S || w || (S = !0,
        le(j))),
        P
    }
    ,
    e.unstable_shouldYield = se,
    e.unstable_wrapCallback = function(P) {
        var $ = g;
        return function() {
            var W = g;
            g = $;
            try {
                return P.apply(this, arguments)
            } finally {
                g = W
            }
        }
    }
}
)(vd);
md.exports = vd;
var Wh = md.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gd = x
  , Je = Wh;
function N(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var yd = new Set
  , qr = {};
function _n(e, t) {
    or(e, t),
    or(e + "Capture", t)
}
function or(e, t) {
    for (qr[e] = t,
    e = 0; e < t.length; e++)
        yd.add(t[e])
}
var zt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
  , aa = Object.prototype.hasOwnProperty
  , Vh = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , ku = {}
  , ju = {};
function Hh(e) {
    return aa.call(ju, e) ? !0 : aa.call(ku, e) ? !1 : Vh.test(e) ? ju[e] = !0 : (ku[e] = !0,
    !1)
}
function Qh(e, t, n, r) {
    if (n !== null && n.type === 0)
        return !1;
    switch (typeof t) {
    case "function":
    case "symbol":
        return !0;
    case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
        e !== "data-" && e !== "aria-");
    default:
        return !1
    }
}
function Kh(e, t, n, r) {
    if (t === null || typeof t > "u" || Qh(e, t, n, r))
        return !0;
    if (r)
        return !1;
    if (n !== null)
        switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
        }
    return !1
}
function Be(e, t, n, r, o, l, i) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4,
    this.attributeName = r,
    this.attributeNamespace = o,
    this.mustUseProperty = n,
    this.propertyName = e,
    this.type = t,
    this.sanitizeURL = l,
    this.removeEmptyString = i
}
var De = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    De[e] = new Be(e,0,!1,e,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    De[t] = new Be(t,1,!1,e[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    De[e] = new Be(e,2,!1,e.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    De[e] = new Be(e,2,!1,e,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    De[e] = new Be(e,3,!1,e.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    De[e] = new Be(e,3,!0,e,null,!1,!1)
});
["capture", "download"].forEach(function(e) {
    De[e] = new Be(e,4,!1,e,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    De[e] = new Be(e,6,!1,e,null,!1,!1)
});
["rowSpan", "start"].forEach(function(e) {
    De[e] = new Be(e,5,!1,e.toLowerCase(),null,!1,!1)
});
var ss = /[\-:]([a-z])/g;
function us(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(ss, us);
    De[t] = new Be(t,1,!1,e,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(ss, us);
    De[t] = new Be(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(ss, us);
    De[t] = new Be(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    De[e] = new Be(e,1,!1,e.toLowerCase(),null,!1,!1)
});
De.xlinkHref = new Be("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(e) {
    De[e] = new Be(e,1,!1,e.toLowerCase(),null,!0,!0)
});
function cs(e, t, n, r) {
    var o = De.hasOwnProperty(t) ? De[t] : null;
    (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Kh(t, n, o, r) && (n = null),
    r || o === null ? Hh(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName,
    r = o.attributeNamespace,
    n === null ? e.removeAttribute(t) : (o = o.type,
    n = o === 3 || o === 4 && n === !0 ? "" : "" + n,
    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var Ft = gd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , Lo = Symbol.for("react.element")
  , $n = Symbol.for("react.portal")
  , Un = Symbol.for("react.fragment")
  , ds = Symbol.for("react.strict_mode")
  , sa = Symbol.for("react.profiler")
  , wd = Symbol.for("react.provider")
  , Sd = Symbol.for("react.context")
  , fs = Symbol.for("react.forward_ref")
  , ua = Symbol.for("react.suspense")
  , ca = Symbol.for("react.suspense_list")
  , ps = Symbol.for("react.memo")
  , Qt = Symbol.for("react.lazy")
  , xd = Symbol.for("react.offscreen")
  , Ru = Symbol.iterator;
function jr(e) {
    return e === null || typeof e != "object" ? null : (e = Ru && e[Ru] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var me = Object.assign, Li;
function $r(e) {
    if (Li === void 0)
        try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            Li = t && t[1] || ""
        }
    return `
` + Li + e
}
var _i = !1;
function Di(e, t) {
    if (!e || _i)
        return "";
    _i = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                throw Error()
            }
            ,
            Object.defineProperty(t.prototype, "props", {
                set: function() {
                    throw Error()
                }
            }),
            typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (u) {
                    var r = u
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (u) {
                    r = u
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (u) {
                r = u
            }
            e()
        }
    } catch (u) {
        if (u && r && typeof u.stack == "string") {
            for (var o = u.stack.split(`
`), l = r.stack.split(`
`), i = o.length - 1, a = l.length - 1; 1 <= i && 0 <= a && o[i] !== l[a]; )
                a--;
            for (; 1 <= i && 0 <= a; i--,
            a--)
                if (o[i] !== l[a]) {
                    if (i !== 1 || a !== 1)
                        do
                            if (i--,
                            a--,
                            0 > a || o[i] !== l[a]) {
                                var s = `
` + o[i].replace(" at new ", " at ");
                                return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)),
                                s
                            }
                        while (1 <= i && 0 <= a);
                    break
                }
        }
    } finally {
        _i = !1,
        Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? $r(e) : ""
}
function Yh(e) {
    switch (e.tag) {
    case 5:
        return $r(e.type);
    case 16:
        return $r("Lazy");
    case 13:
        return $r("Suspense");
    case 19:
        return $r("SuspenseList");
    case 0:
    case 2:
    case 15:
        return e = Di(e.type, !1),
        e;
    case 11:
        return e = Di(e.type.render, !1),
        e;
    case 1:
        return e = Di(e.type, !0),
        e;
    default:
        return ""
    }
}
function da(e) {
    if (e == null)
        return null;
    if (typeof e == "function")
        return e.displayName || e.name || null;
    if (typeof e == "string")
        return e;
    switch (e) {
    case Un:
        return "Fragment";
    case $n:
        return "Portal";
    case sa:
        return "Profiler";
    case ds:
        return "StrictMode";
    case ua:
        return "Suspense";
    case ca:
        return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
        case Sd:
            return (e.displayName || "Context") + ".Consumer";
        case wd:
            return (e._context.displayName || "Context") + ".Provider";
        case fs:
            var t = e.render;
            return e = e.displayName,
            e || (e = t.displayName || t.name || "",
            e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
            e;
        case ps:
            return t = e.displayName || null,
            t !== null ? t : da(e.type) || "Memo";
        case Qt:
            t = e._payload,
            e = e._init;
            try {
                return da(e(t))
            } catch {}
        }
    return null
}
function Gh(e) {
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
        return e = t.render,
        e = e.displayName || e.name || "",
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
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
        return da(t);
    case 8:
        return t === ds ? "StrictMode" : "Mode";
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
        if (typeof t == "function")
            return t.displayName || t.name || null;
        if (typeof t == "string")
            return t
    }
    return null
}
function ln(e) {
    switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
        return e;
    case "object":
        return e;
    default:
        return ""
    }
}
function Ed(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function Xh(e) {
    var t = Ed(e) ? "checked" : "value"
      , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
      , r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var o = n.get
          , l = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return o.call(this)
            },
            set: function(i) {
                r = "" + i,
                l.call(this, i)
            }
        }),
        Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }),
        {
            getValue: function() {
                return r
            },
            setValue: function(i) {
                r = "" + i
            },
            stopTracking: function() {
                e._valueTracker = null,
                delete e[t]
            }
        }
    }
}
function _o(e) {
    e._valueTracker || (e._valueTracker = Xh(e))
}
function Cd(e) {
    if (!e)
        return !1;
    var t = e._valueTracker;
    if (!t)
        return !0;
    var n = t.getValue()
      , r = "";
    return e && (r = Ed(e) ? e.checked ? "true" : "false" : e.value),
    e = r,
    e !== n ? (t.setValue(e),
    !0) : !1
}
function ol(e) {
    if (e = e || (typeof document < "u" ? document : void 0),
    typeof e > "u")
        return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function fa(e, t) {
    var n = t.checked;
    return me({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}
function Nu(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue
      , r = t.checked != null ? t.checked : t.defaultChecked;
    n = ln(t.value != null ? t.value : n),
    e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}
function kd(e, t) {
    t = t.checked,
    t != null && cs(e, "checked", t, !1)
}
function pa(e, t) {
    kd(e, t);
    var n = ln(t.value)
      , r = t.type;
    if (n != null)
        r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? ha(e, t.type, n) : t.hasOwnProperty("defaultValue") && ha(e, t.type, ln(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function Pu(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
            return;
        t = "" + e._wrapperState.initialValue,
        n || t === e.value || (e.value = t),
        e.defaultValue = t
    }
    n = e.name,
    n !== "" && (e.name = ""),
    e.defaultChecked = !!e._wrapperState.initialChecked,
    n !== "" && (e.name = n)
}
function ha(e, t, n) {
    (t !== "number" || ol(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var Ur = Array.isArray;
function qn(e, t, n, r) {
    if (e = e.options,
    t) {
        t = {};
        for (var o = 0; o < n.length; o++)
            t["$" + n[o]] = !0;
        for (n = 0; n < e.length; n++)
            o = t.hasOwnProperty("$" + e[n].value),
            e[n].selected !== o && (e[n].selected = o),
            o && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + ln(n),
        t = null,
        o = 0; o < e.length; o++) {
            if (e[o].value === n) {
                e[o].selected = !0,
                r && (e[o].defaultSelected = !0);
                return
            }
            t !== null || e[o].disabled || (t = e[o])
        }
        t !== null && (t.selected = !0)
    }
}
function ma(e, t) {
    if (t.dangerouslySetInnerHTML != null)
        throw Error(N(91));
    return me({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}
function Lu(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children,
        t = t.defaultValue,
        n != null) {
            if (t != null)
                throw Error(N(92));
            if (Ur(n)) {
                if (1 < n.length)
                    throw Error(N(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""),
        n = t
    }
    e._wrapperState = {
        initialValue: ln(n)
    }
}
function jd(e, t) {
    var n = ln(t.value)
      , r = ln(t.defaultValue);
    n != null && (n = "" + n,
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r)
}
function _u(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function Rd(e) {
    switch (e) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function va(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Rd(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var Do, Nd = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, o)
        })
    }
    : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
        e.innerHTML = t;
    else {
        for (Do = Do || document.createElement("div"),
        Do.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
        t = Do.firstChild; e.firstChild; )
            e.removeChild(e.firstChild);
        for (; t.firstChild; )
            e.appendChild(t.firstChild)
    }
});
function Zr(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var Br = {
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
    strokeWidth: !0
}
  , Jh = ["Webkit", "ms", "Moz", "O"];
Object.keys(Br).forEach(function(e) {
    Jh.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1),
        Br[t] = Br[e]
    })
});
function Pd(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Br.hasOwnProperty(e) && Br[e] ? ("" + t).trim() : t + "px"
}
function Ld(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0
              , o = Pd(n, t[n], r);
            n === "float" && (n = "cssFloat"),
            r ? e.setProperty(n, o) : e[n] = o
        }
}
var qh = me({
    menuitem: !0
}, {
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
    wbr: !0
});
function ga(e, t) {
    if (t) {
        if (qh[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(N(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null)
                throw Error(N(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html"in t.dangerouslySetInnerHTML))
                throw Error(N(61))
        }
        if (t.style != null && typeof t.style != "object")
            throw Error(N(62))
    }
}
function ya(e, t) {
    if (e.indexOf("-") === -1)
        return typeof t.is == "string";
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
        return !0
    }
}
var wa = null;
function hs(e) {
    return e = e.target || e.srcElement || window,
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
}
var Sa = null
  , Zn = null
  , bn = null;
function Du(e) {
    if (e = So(e)) {
        if (typeof Sa != "function")
            throw Error(N(280));
        var t = e.stateNode;
        t && (t = Ul(t),
        Sa(e.stateNode, e.type, t))
    }
}
function _d(e) {
    Zn ? bn ? bn.push(e) : bn = [e] : Zn = e
}
function Dd() {
    if (Zn) {
        var e = Zn
          , t = bn;
        if (bn = Zn = null,
        Du(e),
        t)
            for (e = 0; e < t.length; e++)
                Du(t[e])
    }
}
function Td(e, t) {
    return e(t)
}
function Md() {}
var Ti = !1;
function Od(e, t, n) {
    if (Ti)
        return e(t, n);
    Ti = !0;
    try {
        return Td(e, t, n)
    } finally {
        Ti = !1,
        (Zn !== null || bn !== null) && (Md(),
        Dd())
    }
}
function br(e, t) {
    var n = e.stateNode;
    if (n === null)
        return null;
    var r = Ul(n);
    if (r === null)
        return null;
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
        (r = !r.disabled) || (e = e.type,
        r = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
        e = !r;
        break e;
    default:
        e = !1
    }
    if (e)
        return null;
    if (n && typeof n != "function")
        throw Error(N(231, t, typeof n));
    return n
}
var xa = !1;
if (zt)
    try {
        var Rr = {};
        Object.defineProperty(Rr, "passive", {
            get: function() {
                xa = !0
            }
        }),
        window.addEventListener("test", Rr, Rr),
        window.removeEventListener("test", Rr, Rr)
    } catch {
        xa = !1
    }
function Zh(e, t, n, r, o, l, i, a, s) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, u)
    } catch (d) {
        this.onError(d)
    }
}
var Wr = !1
  , ll = null
  , il = !1
  , Ea = null
  , bh = {
    onError: function(e) {
        Wr = !0,
        ll = e
    }
};
function em(e, t, n, r, o, l, i, a, s) {
    Wr = !1,
    ll = null,
    Zh.apply(bh, arguments)
}
function tm(e, t, n, r, o, l, i, a, s) {
    if (em.apply(this, arguments),
    Wr) {
        if (Wr) {
            var u = ll;
            Wr = !1,
            ll = null
        } else
            throw Error(N(198));
        il || (il = !0,
        Ea = u)
    }
}
function Dn(e) {
    var t = e
      , n = e;
    if (e.alternate)
        for (; t.return; )
            t = t.return;
    else {
        e = t;
        do
            t = e,
            t.flags & 4098 && (n = t.return),
            e = t.return;
        while (e)
    }
    return t.tag === 3 ? n : null
}
function zd(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate,
        e !== null && (t = e.memoizedState)),
        t !== null)
            return t.dehydrated
    }
    return null
}
function Tu(e) {
    if (Dn(e) !== e)
        throw Error(N(188))
}
function nm(e) {
    var t = e.alternate;
    if (!t) {
        if (t = Dn(e),
        t === null)
            throw Error(N(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t; ; ) {
        var o = n.return;
        if (o === null)
            break;
        var l = o.alternate;
        if (l === null) {
            if (r = o.return,
            r !== null) {
                n = r;
                continue
            }
            break
        }
        if (o.child === l.child) {
            for (l = o.child; l; ) {
                if (l === n)
                    return Tu(o),
                    e;
                if (l === r)
                    return Tu(o),
                    t;
                l = l.sibling
            }
            throw Error(N(188))
        }
        if (n.return !== r.return)
            n = o,
            r = l;
        else {
            for (var i = !1, a = o.child; a; ) {
                if (a === n) {
                    i = !0,
                    n = o,
                    r = l;
                    break
                }
                if (a === r) {
                    i = !0,
                    r = o,
                    n = l;
                    break
                }
                a = a.sibling
            }
            if (!i) {
                for (a = l.child; a; ) {
                    if (a === n) {
                        i = !0,
                        n = l,
                        r = o;
                        break
                    }
                    if (a === r) {
                        i = !0,
                        r = l,
                        n = o;
                        break
                    }
                    a = a.sibling
                }
                if (!i)
                    throw Error(N(189))
            }
        }
        if (n.alternate !== r)
            throw Error(N(190))
    }
    if (n.tag !== 3)
        throw Error(N(188));
    return n.stateNode.current === n ? e : t
}
function Id(e) {
    return e = nm(e),
    e !== null ? $d(e) : null
}
function $d(e) {
    if (e.tag === 5 || e.tag === 6)
        return e;
    for (e = e.child; e !== null; ) {
        var t = $d(e);
        if (t !== null)
            return t;
        e = e.sibling
    }
    return null
}
var Ud = Je.unstable_scheduleCallback
  , Mu = Je.unstable_cancelCallback
  , rm = Je.unstable_shouldYield
  , om = Je.unstable_requestPaint
  , we = Je.unstable_now
  , lm = Je.unstable_getCurrentPriorityLevel
  , ms = Je.unstable_ImmediatePriority
  , Fd = Je.unstable_UserBlockingPriority
  , al = Je.unstable_NormalPriority
  , im = Je.unstable_LowPriority
  , Ad = Je.unstable_IdlePriority
  , Ol = null
  , Et = null;
function am(e) {
    if (Et && typeof Et.onCommitFiberRoot == "function")
        try {
            Et.onCommitFiberRoot(Ol, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
}
var mt = Math.clz32 ? Math.clz32 : cm
  , sm = Math.log
  , um = Math.LN2;
function cm(e) {
    return e >>>= 0,
    e === 0 ? 32 : 31 - (sm(e) / um | 0) | 0
}
var To = 64
  , Mo = 4194304;
function Fr(e) {
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
        return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return e & 130023424;
    case 134217728:
        return 134217728;
    case 268435456:
        return 268435456;
    case 536870912:
        return 536870912;
    case 1073741824:
        return 1073741824;
    default:
        return e
    }
}
function sl(e, t) {
    var n = e.pendingLanes;
    if (n === 0)
        return 0;
    var r = 0
      , o = e.suspendedLanes
      , l = e.pingedLanes
      , i = n & 268435455;
    if (i !== 0) {
        var a = i & ~o;
        a !== 0 ? r = Fr(a) : (l &= i,
        l !== 0 && (r = Fr(l)))
    } else
        i = n & ~o,
        i !== 0 ? r = Fr(i) : l !== 0 && (r = Fr(l));
    if (r === 0)
        return 0;
    if (t !== 0 && t !== r && !(t & o) && (o = r & -r,
    l = t & -t,
    o >= l || o === 16 && (l & 4194240) !== 0))
        return t;
    if (r & 4 && (r |= n & 16),
    t = e.entangledLanes,
    t !== 0)
        for (e = e.entanglements,
        t &= r; 0 < t; )
            n = 31 - mt(t),
            o = 1 << n,
            r |= e[n],
            t &= ~o;
    return r
}
function dm(e, t) {
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
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
        return -1;
    default:
        return -1
    }
}
function fm(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, l = e.pendingLanes; 0 < l; ) {
        var i = 31 - mt(l)
          , a = 1 << i
          , s = o[i];
        s === -1 ? (!(a & n) || a & r) && (o[i] = dm(a, t)) : s <= t && (e.expiredLanes |= a),
        l &= ~a
    }
}
function Ca(e) {
    return e = e.pendingLanes & -1073741825,
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function Bd() {
    var e = To;
    return To <<= 1,
    !(To & 4194240) && (To = 64),
    e
}
function Mi(e) {
    for (var t = [], n = 0; 31 > n; n++)
        t.push(e);
    return t
}
function yo(e, t, n) {
    e.pendingLanes |= t,
    t !== 536870912 && (e.suspendedLanes = 0,
    e.pingedLanes = 0),
    e = e.eventTimes,
    t = 31 - mt(t),
    e[t] = n
}
function pm(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t,
    e.suspendedLanes = 0,
    e.pingedLanes = 0,
    e.expiredLanes &= t,
    e.mutableReadLanes &= t,
    e.entangledLanes &= t,
    t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var o = 31 - mt(n)
          , l = 1 << o;
        t[o] = 0,
        r[o] = -1,
        e[o] = -1,
        n &= ~l
    }
}
function vs(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
        var r = 31 - mt(n)
          , o = 1 << r;
        o & t | e[r] & t && (e[r] |= t),
        n &= ~o
    }
}
var Z = 0;
function Wd(e) {
    return e &= -e,
    1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var Vd, gs, Hd, Qd, Kd, ka = !1, Oo = [], qt = null, Zt = null, bt = null, eo = new Map, to = new Map, Yt = [], hm = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Ou(e, t) {
    switch (e) {
    case "focusin":
    case "focusout":
        qt = null;
        break;
    case "dragenter":
    case "dragleave":
        Zt = null;
        break;
    case "mouseover":
    case "mouseout":
        bt = null;
        break;
    case "pointerover":
    case "pointerout":
        eo.delete(t.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        to.delete(t.pointerId)
    }
}
function Nr(e, t, n, r, o, l) {
    return e === null || e.nativeEvent !== l ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: l,
        targetContainers: [o]
    },
    t !== null && (t = So(t),
    t !== null && gs(t)),
    e) : (e.eventSystemFlags |= r,
    t = e.targetContainers,
    o !== null && t.indexOf(o) === -1 && t.push(o),
    e)
}
function mm(e, t, n, r, o) {
    switch (t) {
    case "focusin":
        return qt = Nr(qt, e, t, n, r, o),
        !0;
    case "dragenter":
        return Zt = Nr(Zt, e, t, n, r, o),
        !0;
    case "mouseover":
        return bt = Nr(bt, e, t, n, r, o),
        !0;
    case "pointerover":
        var l = o.pointerId;
        return eo.set(l, Nr(eo.get(l) || null, e, t, n, r, o)),
        !0;
    case "gotpointercapture":
        return l = o.pointerId,
        to.set(l, Nr(to.get(l) || null, e, t, n, r, o)),
        !0
    }
    return !1
}
function Yd(e) {
    var t = gn(e.target);
    if (t !== null) {
        var n = Dn(t);
        if (n !== null) {
            if (t = n.tag,
            t === 13) {
                if (t = zd(n),
                t !== null) {
                    e.blockedOn = t,
                    Kd(e.priority, function() {
                        Hd(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}
function Go(e) {
    if (e.blockedOn !== null)
        return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = ja(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type,n);
            wa = r,
            n.target.dispatchEvent(r),
            wa = null
        } else
            return t = So(n),
            t !== null && gs(t),
            e.blockedOn = n,
            !1;
        t.shift()
    }
    return !0
}
function zu(e, t, n) {
    Go(e) && n.delete(t)
}
function vm() {
    ka = !1,
    qt !== null && Go(qt) && (qt = null),
    Zt !== null && Go(Zt) && (Zt = null),
    bt !== null && Go(bt) && (bt = null),
    eo.forEach(zu),
    to.forEach(zu)
}
function Pr(e, t) {
    e.blockedOn === t && (e.blockedOn = null,
    ka || (ka = !0,
    Je.unstable_scheduleCallback(Je.unstable_NormalPriority, vm)))
}
function no(e) {
    function t(o) {
        return Pr(o, e)
    }
    if (0 < Oo.length) {
        Pr(Oo[0], e);
        for (var n = 1; n < Oo.length; n++) {
            var r = Oo[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (qt !== null && Pr(qt, e),
    Zt !== null && Pr(Zt, e),
    bt !== null && Pr(bt, e),
    eo.forEach(t),
    to.forEach(t),
    n = 0; n < Yt.length; n++)
        r = Yt[n],
        r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Yt.length && (n = Yt[0],
    n.blockedOn === null); )
        Yd(n),
        n.blockedOn === null && Yt.shift()
}
var er = Ft.ReactCurrentBatchConfig
  , ul = !0;
function gm(e, t, n, r) {
    var o = Z
      , l = er.transition;
    er.transition = null;
    try {
        Z = 1,
        ys(e, t, n, r)
    } finally {
        Z = o,
        er.transition = l
    }
}
function ym(e, t, n, r) {
    var o = Z
      , l = er.transition;
    er.transition = null;
    try {
        Z = 4,
        ys(e, t, n, r)
    } finally {
        Z = o,
        er.transition = l
    }
}
function ys(e, t, n, r) {
    if (ul) {
        var o = ja(e, t, n, r);
        if (o === null)
            Vi(e, t, r, cl, n),
            Ou(e, r);
        else if (mm(o, e, t, n, r))
            r.stopPropagation();
        else if (Ou(e, r),
        t & 4 && -1 < hm.indexOf(e)) {
            for (; o !== null; ) {
                var l = So(o);
                if (l !== null && Vd(l),
                l = ja(e, t, n, r),
                l === null && Vi(e, t, r, cl, n),
                l === o)
                    break;
                o = l
            }
            o !== null && r.stopPropagation()
        } else
            Vi(e, t, r, null, n)
    }
}
var cl = null;
function ja(e, t, n, r) {
    if (cl = null,
    e = hs(r),
    e = gn(e),
    e !== null)
        if (t = Dn(e),
        t === null)
            e = null;
        else if (n = t.tag,
        n === 13) {
            if (e = zd(t),
            e !== null)
                return e;
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else
            t !== e && (e = null);
    return cl = e,
    null
}
function Gd(e) {
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
        switch (lm()) {
        case ms:
            return 1;
        case Fd:
            return 4;
        case al:
        case im:
            return 16;
        case Ad:
            return 536870912;
        default:
            return 16
        }
    default:
        return 16
    }
}
var Xt = null
  , ws = null
  , Xo = null;
function Xd() {
    if (Xo)
        return Xo;
    var e, t = ws, n = t.length, r, o = "value"in Xt ? Xt.value : Xt.textContent, l = o.length;
    for (e = 0; e < n && t[e] === o[e]; e++)
        ;
    var i = n - e;
    for (r = 1; r <= i && t[n - r] === o[l - r]; r++)
        ;
    return Xo = o.slice(e, 1 < r ? 1 - r : void 0)
}
function Jo(e) {
    var t = e.keyCode;
    return "charCode"in e ? (e = e.charCode,
    e === 0 && t === 13 && (e = 13)) : e = t,
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
}
function zo() {
    return !0
}
function Iu() {
    return !1
}
function Ze(e) {
    function t(n, r, o, l, i) {
        this._reactName = n,
        this._targetInst = o,
        this.type = r,
        this.nativeEvent = l,
        this.target = i,
        this.currentTarget = null;
        for (var a in e)
            e.hasOwnProperty(a) && (n = e[a],
            this[a] = n ? n(l) : l[a]);
        return this.isDefaultPrevented = (l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1) ? zo : Iu,
        this.isPropagationStopped = Iu,
        this
    }
    return me(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            this.isDefaultPrevented = zo)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            this.isPropagationStopped = zo)
        },
        persist: function() {},
        isPersistent: zo
    }),
    t
}
var mr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, Ss = Ze(mr), wo = me({}, mr, {
    view: 0,
    detail: 0
}), wm = Ze(wo), Oi, zi, Lr, zl = me({}, wo, {
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
    getModifierState: xs,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function(e) {
        return "movementX"in e ? e.movementX : (e !== Lr && (Lr && e.type === "mousemove" ? (Oi = e.screenX - Lr.screenX,
        zi = e.screenY - Lr.screenY) : zi = Oi = 0,
        Lr = e),
        Oi)
    },
    movementY: function(e) {
        return "movementY"in e ? e.movementY : zi
    }
}), $u = Ze(zl), Sm = me({}, zl, {
    dataTransfer: 0
}), xm = Ze(Sm), Em = me({}, wo, {
    relatedTarget: 0
}), Ii = Ze(Em), Cm = me({}, mr, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), km = Ze(Cm), jm = me({}, mr, {
    clipboardData: function(e) {
        return "clipboardData"in e ? e.clipboardData : window.clipboardData
    }
}), Rm = Ze(jm), Nm = me({}, mr, {
    data: 0
}), Uu = Ze(Nm), Pm = {
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
    MozPrintableKey: "Unidentified"
}, Lm = {
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
    224: "Meta"
}, _m = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function Dm(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = _m[e]) ? !!t[e] : !1
}
function xs() {
    return Dm
}
var Tm = me({}, wo, {
    key: function(e) {
        if (e.key) {
            var t = Pm[e.key] || e.key;
            if (t !== "Unidentified")
                return t
        }
        return e.type === "keypress" ? (e = Jo(e),
        e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Lm[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: xs,
    charCode: function(e) {
        return e.type === "keypress" ? Jo(e) : 0
    },
    keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function(e) {
        return e.type === "keypress" ? Jo(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
})
  , Mm = Ze(Tm)
  , Om = me({}, zl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
})
  , Fu = Ze(Om)
  , zm = me({}, wo, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: xs
})
  , Im = Ze(zm)
  , $m = me({}, mr, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , Um = Ze($m)
  , Fm = me({}, zl, {
    deltaX: function(e) {
        return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
    },
    deltaY: function(e) {
        return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , Am = Ze(Fm)
  , Bm = [9, 13, 27, 32]
  , Es = zt && "CompositionEvent"in window
  , Vr = null;
zt && "documentMode"in document && (Vr = document.documentMode);
var Wm = zt && "TextEvent"in window && !Vr
  , Jd = zt && (!Es || Vr && 8 < Vr && 11 >= Vr)
  , Au = String.fromCharCode(32)
  , Bu = !1;
function qd(e, t) {
    switch (e) {
    case "keyup":
        return Bm.indexOf(t.keyCode) !== -1;
    case "keydown":
        return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
        return !0;
    default:
        return !1
    }
}
function Zd(e) {
    return e = e.detail,
    typeof e == "object" && "data"in e ? e.data : null
}
var Fn = !1;
function Vm(e, t) {
    switch (e) {
    case "compositionend":
        return Zd(t);
    case "keypress":
        return t.which !== 32 ? null : (Bu = !0,
        Au);
    case "textInput":
        return e = t.data,
        e === Au && Bu ? null : e;
    default:
        return null
    }
}
function Hm(e, t) {
    if (Fn)
        return e === "compositionend" || !Es && qd(e, t) ? (e = Xd(),
        Xo = ws = Xt = null,
        Fn = !1,
        e) : null;
    switch (e) {
    case "paste":
        return null;
    case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
                return t.char;
            if (t.which)
                return String.fromCharCode(t.which)
        }
        return null;
    case "compositionend":
        return Jd && t.locale !== "ko" ? null : t.data;
    default:
        return null
    }
}
var Qm = {
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
    week: !0
};
function Wu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Qm[e.type] : t === "textarea"
}
function bd(e, t, n, r) {
    _d(r),
    t = dl(t, "onChange"),
    0 < t.length && (n = new Ss("onChange","change",null,n,r),
    e.push({
        event: n,
        listeners: t
    }))
}
var Hr = null
  , ro = null;
function Km(e) {
    df(e, 0)
}
function Il(e) {
    var t = Wn(e);
    if (Cd(t))
        return e
}
function Ym(e, t) {
    if (e === "change")
        return t
}
var ef = !1;
if (zt) {
    var $i;
    if (zt) {
        var Ui = "oninput"in document;
        if (!Ui) {
            var Vu = document.createElement("div");
            Vu.setAttribute("oninput", "return;"),
            Ui = typeof Vu.oninput == "function"
        }
        $i = Ui
    } else
        $i = !1;
    ef = $i && (!document.documentMode || 9 < document.documentMode)
}
function Hu() {
    Hr && (Hr.detachEvent("onpropertychange", tf),
    ro = Hr = null)
}
function tf(e) {
    if (e.propertyName === "value" && Il(ro)) {
        var t = [];
        bd(t, ro, e, hs(e)),
        Od(Km, t)
    }
}
function Gm(e, t, n) {
    e === "focusin" ? (Hu(),
    Hr = t,
    ro = n,
    Hr.attachEvent("onpropertychange", tf)) : e === "focusout" && Hu()
}
function Xm(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return Il(ro)
}
function Jm(e, t) {
    if (e === "click")
        return Il(t)
}
function qm(e, t) {
    if (e === "input" || e === "change")
        return Il(t)
}
function Zm(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var gt = typeof Object.is == "function" ? Object.is : Zm;
function oo(e, t) {
    if (gt(e, t))
        return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    var n = Object.keys(e)
      , r = Object.keys(t);
    if (n.length !== r.length)
        return !1;
    for (r = 0; r < n.length; r++) {
        var o = n[r];
        if (!aa.call(t, o) || !gt(e[o], t[o]))
            return !1
    }
    return !0
}
function Qu(e) {
    for (; e && e.firstChild; )
        e = e.firstChild;
    return e
}
function Ku(e, t) {
    var n = Qu(e);
    e = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length,
            e <= t && r >= t)
                return {
                    node: n,
                    offset: t - e
                };
            e = r
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = Qu(n)
    }
}
function nf(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? nf(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function rf() {
    for (var e = window, t = ol(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n)
            e = t.contentWindow;
        else
            break;
        t = ol(e.document)
    }
    return t
}
function Cs(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function bm(e) {
    var t = rf()
      , n = e.focusedElem
      , r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && nf(n.ownerDocument.documentElement, n)) {
        if (r !== null && Cs(n)) {
            if (t = r.start,
            e = r.end,
            e === void 0 && (e = t),
            "selectionStart"in n)
                n.selectionStart = t,
                n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window,
            e.getSelection) {
                e = e.getSelection();
                var o = n.textContent.length
                  , l = Math.min(r.start, o);
                r = r.end === void 0 ? l : Math.min(r.end, o),
                !e.extend && l > r && (o = r,
                r = l,
                l = o),
                o = Ku(n, l);
                var i = Ku(n, r);
                o && i && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && (t = t.createRange(),
                t.setStart(o.node, o.offset),
                e.removeAllRanges(),
                l > r ? (e.addRange(t),
                e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset),
                e.addRange(t)))
            }
        }
        for (t = [],
        e = n; e = e.parentNode; )
            e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
        for (typeof n.focus == "function" && n.focus(),
        n = 0; n < t.length; n++)
            e = t[n],
            e.element.scrollLeft = e.left,
            e.element.scrollTop = e.top
    }
}
var ev = zt && "documentMode"in document && 11 >= document.documentMode
  , An = null
  , Ra = null
  , Qr = null
  , Na = !1;
function Yu(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Na || An == null || An !== ol(r) || (r = An,
    "selectionStart"in r && Cs(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
    r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }),
    Qr && oo(Qr, r) || (Qr = r,
    r = dl(Ra, "onSelect"),
    0 < r.length && (t = new Ss("onSelect","select",null,t,n),
    e.push({
        event: t,
        listeners: r
    }),
    t.target = An)))
}
function Io(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(),
    n["Webkit" + e] = "webkit" + t,
    n["Moz" + e] = "moz" + t,
    n
}
var Bn = {
    animationend: Io("Animation", "AnimationEnd"),
    animationiteration: Io("Animation", "AnimationIteration"),
    animationstart: Io("Animation", "AnimationStart"),
    transitionend: Io("Transition", "TransitionEnd")
}
  , Fi = {}
  , of = {};
zt && (of = document.createElement("div").style,
"AnimationEvent"in window || (delete Bn.animationend.animation,
delete Bn.animationiteration.animation,
delete Bn.animationstart.animation),
"TransitionEvent"in window || delete Bn.transitionend.transition);
function $l(e) {
    if (Fi[e])
        return Fi[e];
    if (!Bn[e])
        return e;
    var t = Bn[e], n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in of)
            return Fi[e] = t[n];
    return e
}
var lf = $l("animationend")
  , af = $l("animationiteration")
  , sf = $l("animationstart")
  , uf = $l("transitionend")
  , cf = new Map
  , Gu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function un(e, t) {
    cf.set(e, t),
    _n(t, [e])
}
for (var Ai = 0; Ai < Gu.length; Ai++) {
    var Bi = Gu[Ai]
      , tv = Bi.toLowerCase()
      , nv = Bi[0].toUpperCase() + Bi.slice(1);
    un(tv, "on" + nv)
}
un(lf, "onAnimationEnd");
un(af, "onAnimationIteration");
un(sf, "onAnimationStart");
un("dblclick", "onDoubleClick");
un("focusin", "onFocus");
un("focusout", "onBlur");
un(uf, "onTransitionEnd");
or("onMouseEnter", ["mouseout", "mouseover"]);
or("onMouseLeave", ["mouseout", "mouseover"]);
or("onPointerEnter", ["pointerout", "pointerover"]);
or("onPointerLeave", ["pointerout", "pointerover"]);
_n("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
_n("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
_n("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
_n("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
_n("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
_n("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Ar = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , rv = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ar));
function Xu(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n,
    tm(r, t, void 0, e),
    e.currentTarget = null
}
function df(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n]
          , o = r.event;
        r = r.listeners;
        e: {
            var l = void 0;
            if (t)
                for (var i = r.length - 1; 0 <= i; i--) {
                    var a = r[i]
                      , s = a.instance
                      , u = a.currentTarget;
                    if (a = a.listener,
                    s !== l && o.isPropagationStopped())
                        break e;
                    Xu(o, a, u),
                    l = s
                }
            else
                for (i = 0; i < r.length; i++) {
                    if (a = r[i],
                    s = a.instance,
                    u = a.currentTarget,
                    a = a.listener,
                    s !== l && o.isPropagationStopped())
                        break e;
                    Xu(o, a, u),
                    l = s
                }
        }
    }
    if (il)
        throw e = Ea,
        il = !1,
        Ea = null,
        e
}
function ie(e, t) {
    var n = t[Ta];
    n === void 0 && (n = t[Ta] = new Set);
    var r = e + "__bubble";
    n.has(r) || (ff(t, e, 2, !1),
    n.add(r))
}
function Wi(e, t, n) {
    var r = 0;
    t && (r |= 4),
    ff(n, e, r, t)
}
var $o = "_reactListening" + Math.random().toString(36).slice(2);
function lo(e) {
    if (!e[$o]) {
        e[$o] = !0,
        yd.forEach(function(n) {
            n !== "selectionchange" && (rv.has(n) || Wi(n, !1, e),
            Wi(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[$o] || (t[$o] = !0,
        Wi("selectionchange", !1, t))
    }
}
function ff(e, t, n, r) {
    switch (Gd(t)) {
    case 1:
        var o = gm;
        break;
    case 4:
        o = ym;
        break;
    default:
        o = ys
    }
    n = o.bind(null, t, n, e),
    o = void 0,
    !xa || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0),
    r ? o !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: o
    }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, {
        passive: o
    }) : e.addEventListener(t, n, !1)
}
function Vi(e, t, n, r, o) {
    var l = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (; ; ) {
            if (r === null)
                return;
            var i = r.tag;
            if (i === 3 || i === 4) {
                var a = r.stateNode.containerInfo;
                if (a === o || a.nodeType === 8 && a.parentNode === o)
                    break;
                if (i === 4)
                    for (i = r.return; i !== null; ) {
                        var s = i.tag;
                        if ((s === 3 || s === 4) && (s = i.stateNode.containerInfo,
                        s === o || s.nodeType === 8 && s.parentNode === o))
                            return;
                        i = i.return
                    }
                for (; a !== null; ) {
                    if (i = gn(a),
                    i === null)
                        return;
                    if (s = i.tag,
                    s === 5 || s === 6) {
                        r = l = i;
                        continue e
                    }
                    a = a.parentNode
                }
            }
            r = r.return
        }
    Od(function() {
        var u = l
          , d = hs(n)
          , m = [];
        e: {
            var g = cf.get(e);
            if (g !== void 0) {
                var w = Ss
                  , S = e;
                switch (e) {
                case "keypress":
                    if (Jo(n) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    w = Mm;
                    break;
                case "focusin":
                    S = "focus",
                    w = Ii;
                    break;
                case "focusout":
                    S = "blur",
                    w = Ii;
                    break;
                case "beforeblur":
                case "afterblur":
                    w = Ii;
                    break;
                case "click":
                    if (n.button === 2)
                        break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    w = $u;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    w = xm;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    w = Im;
                    break;
                case lf:
                case af:
                case sf:
                    w = km;
                    break;
                case uf:
                    w = Um;
                    break;
                case "scroll":
                    w = wm;
                    break;
                case "wheel":
                    w = Am;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    w = Rm;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    w = Fu
                }
                var y = (t & 4) !== 0
                  , k = !y && e === "scroll"
                  , h = y ? g !== null ? g + "Capture" : null : g;
                y = [];
                for (var f = u, v; f !== null; ) {
                    v = f;
                    var p = v.stateNode;
                    if (v.tag === 5 && p !== null && (v = p,
                    h !== null && (p = br(f, h),
                    p != null && y.push(io(f, p, v)))),
                    k)
                        break;
                    f = f.return
                }
                0 < y.length && (g = new w(g,S,null,n,d),
                m.push({
                    event: g,
                    listeners: y
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (g = e === "mouseover" || e === "pointerover",
                w = e === "mouseout" || e === "pointerout",
                g && n !== wa && (S = n.relatedTarget || n.fromElement) && (gn(S) || S[It]))
                    break e;
                if ((w || g) && (g = d.window === d ? d : (g = d.ownerDocument) ? g.defaultView || g.parentWindow : window,
                w ? (S = n.relatedTarget || n.toElement,
                w = u,
                S = S ? gn(S) : null,
                S !== null && (k = Dn(S),
                S !== k || S.tag !== 5 && S.tag !== 6) && (S = null)) : (w = null,
                S = u),
                w !== S)) {
                    if (y = $u,
                    p = "onMouseLeave",
                    h = "onMouseEnter",
                    f = "mouse",
                    (e === "pointerout" || e === "pointerover") && (y = Fu,
                    p = "onPointerLeave",
                    h = "onPointerEnter",
                    f = "pointer"),
                    k = w == null ? g : Wn(w),
                    v = S == null ? g : Wn(S),
                    g = new y(p,f + "leave",w,n,d),
                    g.target = k,
                    g.relatedTarget = v,
                    p = null,
                    gn(d) === u && (y = new y(h,f + "enter",S,n,d),
                    y.target = v,
                    y.relatedTarget = k,
                    p = y),
                    k = p,
                    w && S)
                        t: {
                            for (y = w,
                            h = S,
                            f = 0,
                            v = y; v; v = zn(v))
                                f++;
                            for (v = 0,
                            p = h; p; p = zn(p))
                                v++;
                            for (; 0 < f - v; )
                                y = zn(y),
                                f--;
                            for (; 0 < v - f; )
                                h = zn(h),
                                v--;
                            for (; f--; ) {
                                if (y === h || h !== null && y === h.alternate)
                                    break t;
                                y = zn(y),
                                h = zn(h)
                            }
                            y = null
                        }
                    else
                        y = null;
                    w !== null && Ju(m, g, w, y, !1),
                    S !== null && k !== null && Ju(m, k, S, y, !0)
                }
            }
            e: {
                if (g = u ? Wn(u) : window,
                w = g.nodeName && g.nodeName.toLowerCase(),
                w === "select" || w === "input" && g.type === "file")
                    var j = Ym;
                else if (Wu(g))
                    if (ef)
                        j = qm;
                    else {
                        j = Xm;
                        var D = Gm
                    }
                else
                    (w = g.nodeName) && w.toLowerCase() === "input" && (g.type === "checkbox" || g.type === "radio") && (j = Jm);
                if (j && (j = j(e, u))) {
                    bd(m, j, n, d);
                    break e
                }
                D && D(e, g, u),
                e === "focusout" && (D = g._wrapperState) && D.controlled && g.type === "number" && ha(g, "number", g.value)
            }
            switch (D = u ? Wn(u) : window,
            e) {
            case "focusin":
                (Wu(D) || D.contentEditable === "true") && (An = D,
                Ra = u,
                Qr = null);
                break;
            case "focusout":
                Qr = Ra = An = null;
                break;
            case "mousedown":
                Na = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                Na = !1,
                Yu(m, n, d);
                break;
            case "selectionchange":
                if (ev)
                    break;
            case "keydown":
            case "keyup":
                Yu(m, n, d)
            }
            var _;
            if (Es)
                e: {
                    switch (e) {
                    case "compositionstart":
                        var L = "onCompositionStart";
                        break e;
                    case "compositionend":
                        L = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        L = "onCompositionUpdate";
                        break e
                    }
                    L = void 0
                }
            else
                Fn ? qd(e, n) && (L = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (L = "onCompositionStart");
            L && (Jd && n.locale !== "ko" && (Fn || L !== "onCompositionStart" ? L === "onCompositionEnd" && Fn && (_ = Xd()) : (Xt = d,
            ws = "value"in Xt ? Xt.value : Xt.textContent,
            Fn = !0)),
            D = dl(u, L),
            0 < D.length && (L = new Uu(L,e,null,n,d),
            m.push({
                event: L,
                listeners: D
            }),
            _ ? L.data = _ : (_ = Zd(n),
            _ !== null && (L.data = _)))),
            (_ = Wm ? Vm(e, n) : Hm(e, n)) && (u = dl(u, "onBeforeInput"),
            0 < u.length && (d = new Uu("onBeforeInput","beforeinput",null,n,d),
            m.push({
                event: d,
                listeners: u
            }),
            d.data = _))
        }
        df(m, t)
    })
}
function io(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}
function dl(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var o = e
          , l = o.stateNode;
        o.tag === 5 && l !== null && (o = l,
        l = br(e, n),
        l != null && r.unshift(io(e, l, o)),
        l = br(e, t),
        l != null && r.push(io(e, l, o))),
        e = e.return
    }
    return r
}
function zn(e) {
    if (e === null)
        return null;
    do
        e = e.return;
    while (e && e.tag !== 5);
    return e || null
}
function Ju(e, t, n, r, o) {
    for (var l = t._reactName, i = []; n !== null && n !== r; ) {
        var a = n
          , s = a.alternate
          , u = a.stateNode;
        if (s !== null && s === r)
            break;
        a.tag === 5 && u !== null && (a = u,
        o ? (s = br(n, l),
        s != null && i.unshift(io(n, s, a))) : o || (s = br(n, l),
        s != null && i.push(io(n, s, a)))),
        n = n.return
    }
    i.length !== 0 && e.push({
        event: t,
        listeners: i
    })
}
var ov = /\r\n?/g
  , lv = /\u0000|\uFFFD/g;
function qu(e) {
    return (typeof e == "string" ? e : "" + e).replace(ov, `
`).replace(lv, "")
}
function Uo(e, t, n) {
    if (t = qu(t),
    qu(e) !== t && n)
        throw Error(N(425))
}
function fl() {}
var Pa = null
  , La = null;
function _a(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var Da = typeof setTimeout == "function" ? setTimeout : void 0
  , iv = typeof clearTimeout == "function" ? clearTimeout : void 0
  , Zu = typeof Promise == "function" ? Promise : void 0
  , av = typeof queueMicrotask == "function" ? queueMicrotask : typeof Zu < "u" ? function(e) {
    return Zu.resolve(null).then(e).catch(sv)
}
: Da;
function sv(e) {
    setTimeout(function() {
        throw e
    })
}
function Hi(e, t) {
    var n = t
      , r = 0;
    do {
        var o = n.nextSibling;
        if (e.removeChild(n),
        o && o.nodeType === 8)
            if (n = o.data,
            n === "/$") {
                if (r === 0) {
                    e.removeChild(o),
                    no(t);
                    return
                }
                r--
            } else
                n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = o
    } while (n);
    no(t)
}
function en(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3)
            break;
        if (t === 8) {
            if (t = e.data,
            t === "$" || t === "$!" || t === "$?")
                break;
            if (t === "/$")
                return null
        }
    }
    return e
}
function bu(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0)
                    return e;
                t--
            } else
                n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var vr = Math.random().toString(36).slice(2)
  , xt = "__reactFiber$" + vr
  , ao = "__reactProps$" + vr
  , It = "__reactContainer$" + vr
  , Ta = "__reactEvents$" + vr
  , uv = "__reactListeners$" + vr
  , cv = "__reactHandles$" + vr;
function gn(e) {
    var t = e[xt];
    if (t)
        return t;
    for (var n = e.parentNode; n; ) {
        if (t = n[It] || n[xt]) {
            if (n = t.alternate,
            t.child !== null || n !== null && n.child !== null)
                for (e = bu(e); e !== null; ) {
                    if (n = e[xt])
                        return n;
                    e = bu(e)
                }
            return t
        }
        e = n,
        n = e.parentNode
    }
    return null
}
function So(e) {
    return e = e[xt] || e[It],
    !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function Wn(e) {
    if (e.tag === 5 || e.tag === 6)
        return e.stateNode;
    throw Error(N(33))
}
function Ul(e) {
    return e[ao] || null
}
var Ma = []
  , Vn = -1;
function cn(e) {
    return {
        current: e
    }
}
function ae(e) {
    0 > Vn || (e.current = Ma[Vn],
    Ma[Vn] = null,
    Vn--)
}
function oe(e, t) {
    Vn++,
    Ma[Vn] = e.current,
    e.current = t
}
var an = {}
  , $e = cn(an)
  , He = cn(!1)
  , Cn = an;
function lr(e, t) {
    var n = e.type.contextTypes;
    if (!n)
        return an;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
    var o = {}, l;
    for (l in n)
        o[l] = t[l];
    return r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = t,
    e.__reactInternalMemoizedMaskedChildContext = o),
    o
}
function Qe(e) {
    return e = e.childContextTypes,
    e != null
}
function pl() {
    ae(He),
    ae($e)
}
function ec(e, t, n) {
    if ($e.current !== an)
        throw Error(N(168));
    oe($e, t),
    oe(He, n)
}
function pf(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes,
    typeof r.getChildContext != "function")
        return n;
    r = r.getChildContext();
    for (var o in r)
        if (!(o in t))
            throw Error(N(108, Gh(e) || "Unknown", o));
    return me({}, n, r)
}
function hl(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || an,
    Cn = $e.current,
    oe($e, e),
    oe(He, He.current),
    !0
}
function tc(e, t, n) {
    var r = e.stateNode;
    if (!r)
        throw Error(N(169));
    n ? (e = pf(e, t, Cn),
    r.__reactInternalMemoizedMergedChildContext = e,
    ae(He),
    ae($e),
    oe($e, e)) : ae(He),
    oe(He, n)
}
var Lt = null
  , Fl = !1
  , Qi = !1;
function hf(e) {
    Lt === null ? Lt = [e] : Lt.push(e)
}
function dv(e) {
    Fl = !0,
    hf(e)
}
function dn() {
    if (!Qi && Lt !== null) {
        Qi = !0;
        var e = 0
          , t = Z;
        try {
            var n = Lt;
            for (Z = 1; e < n.length; e++) {
                var r = n[e];
                do
                    r = r(!0);
                while (r !== null)
            }
            Lt = null,
            Fl = !1
        } catch (o) {
            throw Lt !== null && (Lt = Lt.slice(e + 1)),
            Ud(ms, dn),
            o
        } finally {
            Z = t,
            Qi = !1
        }
    }
    return null
}
var Hn = []
  , Qn = 0
  , ml = null
  , vl = 0
  , tt = []
  , nt = 0
  , kn = null
  , _t = 1
  , Dt = "";
function mn(e, t) {
    Hn[Qn++] = vl,
    Hn[Qn++] = ml,
    ml = e,
    vl = t
}
function mf(e, t, n) {
    tt[nt++] = _t,
    tt[nt++] = Dt,
    tt[nt++] = kn,
    kn = e;
    var r = _t;
    e = Dt;
    var o = 32 - mt(r) - 1;
    r &= ~(1 << o),
    n += 1;
    var l = 32 - mt(t) + o;
    if (30 < l) {
        var i = o - o % 5;
        l = (r & (1 << i) - 1).toString(32),
        r >>= i,
        o -= i,
        _t = 1 << 32 - mt(t) + o | n << o | r,
        Dt = l + e
    } else
        _t = 1 << l | n << o | r,
        Dt = e
}
function ks(e) {
    e.return !== null && (mn(e, 1),
    mf(e, 1, 0))
}
function js(e) {
    for (; e === ml; )
        ml = Hn[--Qn],
        Hn[Qn] = null,
        vl = Hn[--Qn],
        Hn[Qn] = null;
    for (; e === kn; )
        kn = tt[--nt],
        tt[nt] = null,
        Dt = tt[--nt],
        tt[nt] = null,
        _t = tt[--nt],
        tt[nt] = null
}
var Xe = null
  , Ge = null
  , ue = !1
  , ht = null;
function vf(e, t) {
    var n = rt(5, null, null, 0);
    n.elementType = "DELETED",
    n.stateNode = t,
    n.return = e,
    t = e.deletions,
    t === null ? (e.deletions = [n],
    e.flags |= 16) : t.push(n)
}
function nc(e, t) {
    switch (e.tag) {
    case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
        t !== null ? (e.stateNode = t,
        Xe = e,
        Ge = en(t.firstChild),
        !0) : !1;
    case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
        t !== null ? (e.stateNode = t,
        Xe = e,
        Ge = null,
        !0) : !1;
    case 13:
        return t = t.nodeType !== 8 ? null : t,
        t !== null ? (n = kn !== null ? {
            id: _t,
            overflow: Dt
        } : null,
        e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824
        },
        n = rt(18, null, null, 0),
        n.stateNode = t,
        n.return = e,
        e.child = n,
        Xe = e,
        Ge = null,
        !0) : !1;
    default:
        return !1
    }
}
function Oa(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function za(e) {
    if (ue) {
        var t = Ge;
        if (t) {
            var n = t;
            if (!nc(e, t)) {
                if (Oa(e))
                    throw Error(N(418));
                t = en(n.nextSibling);
                var r = Xe;
                t && nc(e, t) ? vf(r, n) : (e.flags = e.flags & -4097 | 2,
                ue = !1,
                Xe = e)
            }
        } else {
            if (Oa(e))
                throw Error(N(418));
            e.flags = e.flags & -4097 | 2,
            ue = !1,
            Xe = e
        }
    }
}
function rc(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
        e = e.return;
    Xe = e
}
function Fo(e) {
    if (e !== Xe)
        return !1;
    if (!ue)
        return rc(e),
        ue = !0,
        !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
    t = t !== "head" && t !== "body" && !_a(e.type, e.memoizedProps)),
    t && (t = Ge)) {
        if (Oa(e))
            throw gf(),
            Error(N(418));
        for (; t; )
            vf(e, t),
            t = en(t.nextSibling)
    }
    if (rc(e),
    e.tag === 13) {
        if (e = e.memoizedState,
        e = e !== null ? e.dehydrated : null,
        !e)
            throw Error(N(317));
        e: {
            for (e = e.nextSibling,
            t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            Ge = en(e.nextSibling);
                            break e
                        }
                        t--
                    } else
                        n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            Ge = null
        }
    } else
        Ge = Xe ? en(e.stateNode.nextSibling) : null;
    return !0
}
function gf() {
    for (var e = Ge; e; )
        e = en(e.nextSibling)
}
function ir() {
    Ge = Xe = null,
    ue = !1
}
function Rs(e) {
    ht === null ? ht = [e] : ht.push(e)
}
var fv = Ft.ReactCurrentBatchConfig;
function dt(e, t) {
    if (e && e.defaultProps) {
        t = me({}, t),
        e = e.defaultProps;
        for (var n in e)
            t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
var gl = cn(null)
  , yl = null
  , Kn = null
  , Ns = null;
function Ps() {
    Ns = Kn = yl = null
}
function Ls(e) {
    var t = gl.current;
    ae(gl),
    e._currentValue = t
}
function Ia(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t,
        r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
            break;
        e = e.return
    }
}
function tr(e, t) {
    yl = e,
    Ns = Kn = null,
    e = e.dependencies,
    e !== null && e.firstContext !== null && (e.lanes & t && (Ve = !0),
    e.firstContext = null)
}
function lt(e) {
    var t = e._currentValue;
    if (Ns !== e)
        if (e = {
            context: e,
            memoizedValue: t,
            next: null
        },
        Kn === null) {
            if (yl === null)
                throw Error(N(308));
            Kn = e,
            yl.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else
            Kn = Kn.next = e;
    return t
}
var yn = null;
function _s(e) {
    yn === null ? yn = [e] : yn.push(e)
}
function yf(e, t, n, r) {
    var o = t.interleaved;
    return o === null ? (n.next = n,
    _s(t)) : (n.next = o.next,
    o.next = n),
    t.interleaved = n,
    $t(e, r)
}
function $t(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t),
    n = e,
    e = e.return; e !== null; )
        e.childLanes |= t,
        n = e.alternate,
        n !== null && (n.childLanes |= t),
        n = e,
        e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var Kt = !1;
function Ds(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function wf(e, t) {
    e = e.updateQueue,
    t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}
function Mt(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function tn(e, t, n) {
    var r = e.updateQueue;
    if (r === null)
        return null;
    if (r = r.shared,
    Y & 2) {
        var o = r.pending;
        return o === null ? t.next = t : (t.next = o.next,
        o.next = t),
        r.pending = t,
        $t(e, n)
    }
    return o = r.interleaved,
    o === null ? (t.next = t,
    _s(r)) : (t.next = o.next,
    o.next = t),
    r.interleaved = t,
    $t(e, n)
}
function qo(e, t, n) {
    if (t = t.updateQueue,
    t !== null && (t = t.shared,
    (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        vs(e, n)
    }
}
function oc(e, t) {
    var n = e.updateQueue
      , r = e.alternate;
    if (r !== null && (r = r.updateQueue,
    n === r)) {
        var o = null
          , l = null;
        if (n = n.firstBaseUpdate,
        n !== null) {
            do {
                var i = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                l === null ? o = l = i : l = l.next = i,
                n = n.next
            } while (n !== null);
            l === null ? o = l = t : l = l.next = t
        } else
            o = l = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: o,
            lastBaseUpdate: l,
            shared: r.shared,
            effects: r.effects
        },
        e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate,
    e === null ? n.firstBaseUpdate = t : e.next = t,
    n.lastBaseUpdate = t
}
function wl(e, t, n, r) {
    var o = e.updateQueue;
    Kt = !1;
    var l = o.firstBaseUpdate
      , i = o.lastBaseUpdate
      , a = o.shared.pending;
    if (a !== null) {
        o.shared.pending = null;
        var s = a
          , u = s.next;
        s.next = null,
        i === null ? l = u : i.next = u,
        i = s;
        var d = e.alternate;
        d !== null && (d = d.updateQueue,
        a = d.lastBaseUpdate,
        a !== i && (a === null ? d.firstBaseUpdate = u : a.next = u,
        d.lastBaseUpdate = s))
    }
    if (l !== null) {
        var m = o.baseState;
        i = 0,
        d = u = s = null,
        a = l;
        do {
            var g = a.lane
              , w = a.eventTime;
            if ((r & g) === g) {
                d !== null && (d = d.next = {
                    eventTime: w,
                    lane: 0,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                });
                e: {
                    var S = e
                      , y = a;
                    switch (g = t,
                    w = n,
                    y.tag) {
                    case 1:
                        if (S = y.payload,
                        typeof S == "function") {
                            m = S.call(w, m, g);
                            break e
                        }
                        m = S;
                        break e;
                    case 3:
                        S.flags = S.flags & -65537 | 128;
                    case 0:
                        if (S = y.payload,
                        g = typeof S == "function" ? S.call(w, m, g) : S,
                        g == null)
                            break e;
                        m = me({}, m, g);
                        break e;
                    case 2:
                        Kt = !0
                    }
                }
                a.callback !== null && a.lane !== 0 && (e.flags |= 64,
                g = o.effects,
                g === null ? o.effects = [a] : g.push(a))
            } else
                w = {
                    eventTime: w,
                    lane: g,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                },
                d === null ? (u = d = w,
                s = m) : d = d.next = w,
                i |= g;
            if (a = a.next,
            a === null) {
                if (a = o.shared.pending,
                a === null)
                    break;
                g = a,
                a = g.next,
                g.next = null,
                o.lastBaseUpdate = g,
                o.shared.pending = null
            }
        } while (1);
        if (d === null && (s = m),
        o.baseState = s,
        o.firstBaseUpdate = u,
        o.lastBaseUpdate = d,
        t = o.shared.interleaved,
        t !== null) {
            o = t;
            do
                i |= o.lane,
                o = o.next;
            while (o !== t)
        } else
            l === null && (o.shared.lanes = 0);
        Rn |= i,
        e.lanes = i,
        e.memoizedState = m
    }
}
function lc(e, t, n) {
    if (e = t.effects,
    t.effects = null,
    e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t]
              , o = r.callback;
            if (o !== null) {
                if (r.callback = null,
                r = n,
                typeof o != "function")
                    throw Error(N(191, o));
                o.call(r)
            }
        }
}
var Sf = new gd.Component().refs;
function $a(e, t, n, r) {
    t = e.memoizedState,
    n = n(r, t),
    n = n == null ? t : me({}, t, n),
    e.memoizedState = n,
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var Al = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? Dn(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = Fe()
          , o = rn(e)
          , l = Mt(r, o);
        l.payload = t,
        n != null && (l.callback = n),
        t = tn(e, l, o),
        t !== null && (vt(t, e, o, r),
        qo(t, e, o))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = Fe()
          , o = rn(e)
          , l = Mt(r, o);
        l.tag = 1,
        l.payload = t,
        n != null && (l.callback = n),
        t = tn(e, l, o),
        t !== null && (vt(t, e, o, r),
        qo(t, e, o))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = Fe()
          , r = rn(e)
          , o = Mt(n, r);
        o.tag = 2,
        t != null && (o.callback = t),
        t = tn(e, o, r),
        t !== null && (vt(t, e, r, n),
        qo(t, e, r))
    }
};
function ic(e, t, n, r, o, l, i) {
    return e = e.stateNode,
    typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, l, i) : t.prototype && t.prototype.isPureReactComponent ? !oo(n, r) || !oo(o, l) : !0
}
function xf(e, t, n) {
    var r = !1
      , o = an
      , l = t.contextType;
    return typeof l == "object" && l !== null ? l = lt(l) : (o = Qe(t) ? Cn : $e.current,
    r = t.contextTypes,
    l = (r = r != null) ? lr(e, o) : an),
    t = new t(n,l),
    e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
    t.updater = Al,
    e.stateNode = t,
    t._reactInternals = e,
    r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = o,
    e.__reactInternalMemoizedMaskedChildContext = l),
    t
}
function ac(e, t, n, r) {
    e = t.state,
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Al.enqueueReplaceState(t, t.state, null)
}
function Ua(e, t, n, r) {
    var o = e.stateNode;
    o.props = n,
    o.state = e.memoizedState,
    o.refs = Sf,
    Ds(e);
    var l = t.contextType;
    typeof l == "object" && l !== null ? o.context = lt(l) : (l = Qe(t) ? Cn : $e.current,
    o.context = lr(e, l)),
    o.state = e.memoizedState,
    l = t.getDerivedStateFromProps,
    typeof l == "function" && ($a(e, t, l, n),
    o.state = e.memoizedState),
    typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state,
    typeof o.componentWillMount == "function" && o.componentWillMount(),
    typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(),
    t !== o.state && Al.enqueueReplaceState(o, o.state, null),
    wl(e, n, o, r),
    o.state = e.memoizedState),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308)
}
function _r(e, t, n) {
    if (e = n.ref,
    e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner,
            n) {
                if (n.tag !== 1)
                    throw Error(N(309));
                var r = n.stateNode
            }
            if (!r)
                throw Error(N(147, e));
            var o = r
              , l = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === l ? t.ref : (t = function(i) {
                var a = o.refs;
                a === Sf && (a = o.refs = {}),
                i === null ? delete a[l] : a[l] = i
            }
            ,
            t._stringRef = l,
            t)
        }
        if (typeof e != "string")
            throw Error(N(284));
        if (!n._owner)
            throw Error(N(290, e))
    }
    return e
}
function Ao(e, t) {
    throw e = Object.prototype.toString.call(t),
    Error(N(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function sc(e) {
    var t = e._init;
    return t(e._payload)
}
function Ef(e) {
    function t(h, f) {
        if (e) {
            var v = h.deletions;
            v === null ? (h.deletions = [f],
            h.flags |= 16) : v.push(f)
        }
    }
    function n(h, f) {
        if (!e)
            return null;
        for (; f !== null; )
            t(h, f),
            f = f.sibling;
        return null
    }
    function r(h, f) {
        for (h = new Map; f !== null; )
            f.key !== null ? h.set(f.key, f) : h.set(f.index, f),
            f = f.sibling;
        return h
    }
    function o(h, f) {
        return h = on(h, f),
        h.index = 0,
        h.sibling = null,
        h
    }
    function l(h, f, v) {
        return h.index = v,
        e ? (v = h.alternate,
        v !== null ? (v = v.index,
        v < f ? (h.flags |= 2,
        f) : v) : (h.flags |= 2,
        f)) : (h.flags |= 1048576,
        f)
    }
    function i(h) {
        return e && h.alternate === null && (h.flags |= 2),
        h
    }
    function a(h, f, v, p) {
        return f === null || f.tag !== 6 ? (f = Zi(v, h.mode, p),
        f.return = h,
        f) : (f = o(f, v),
        f.return = h,
        f)
    }
    function s(h, f, v, p) {
        var j = v.type;
        return j === Un ? d(h, f, v.props.children, p, v.key) : f !== null && (f.elementType === j || typeof j == "object" && j !== null && j.$$typeof === Qt && sc(j) === f.type) ? (p = o(f, v.props),
        p.ref = _r(h, f, v),
        p.return = h,
        p) : (p = rl(v.type, v.key, v.props, null, h.mode, p),
        p.ref = _r(h, f, v),
        p.return = h,
        p)
    }
    function u(h, f, v, p) {
        return f === null || f.tag !== 4 || f.stateNode.containerInfo !== v.containerInfo || f.stateNode.implementation !== v.implementation ? (f = bi(v, h.mode, p),
        f.return = h,
        f) : (f = o(f, v.children || []),
        f.return = h,
        f)
    }
    function d(h, f, v, p, j) {
        return f === null || f.tag !== 7 ? (f = En(v, h.mode, p, j),
        f.return = h,
        f) : (f = o(f, v),
        f.return = h,
        f)
    }
    function m(h, f, v) {
        if (typeof f == "string" && f !== "" || typeof f == "number")
            return f = Zi("" + f, h.mode, v),
            f.return = h,
            f;
        if (typeof f == "object" && f !== null) {
            switch (f.$$typeof) {
            case Lo:
                return v = rl(f.type, f.key, f.props, null, h.mode, v),
                v.ref = _r(h, null, f),
                v.return = h,
                v;
            case $n:
                return f = bi(f, h.mode, v),
                f.return = h,
                f;
            case Qt:
                var p = f._init;
                return m(h, p(f._payload), v)
            }
            if (Ur(f) || jr(f))
                return f = En(f, h.mode, v, null),
                f.return = h,
                f;
            Ao(h, f)
        }
        return null
    }
    function g(h, f, v, p) {
        var j = f !== null ? f.key : null;
        if (typeof v == "string" && v !== "" || typeof v == "number")
            return j !== null ? null : a(h, f, "" + v, p);
        if (typeof v == "object" && v !== null) {
            switch (v.$$typeof) {
            case Lo:
                return v.key === j ? s(h, f, v, p) : null;
            case $n:
                return v.key === j ? u(h, f, v, p) : null;
            case Qt:
                return j = v._init,
                g(h, f, j(v._payload), p)
            }
            if (Ur(v) || jr(v))
                return j !== null ? null : d(h, f, v, p, null);
            Ao(h, v)
        }
        return null
    }
    function w(h, f, v, p, j) {
        if (typeof p == "string" && p !== "" || typeof p == "number")
            return h = h.get(v) || null,
            a(f, h, "" + p, j);
        if (typeof p == "object" && p !== null) {
            switch (p.$$typeof) {
            case Lo:
                return h = h.get(p.key === null ? v : p.key) || null,
                s(f, h, p, j);
            case $n:
                return h = h.get(p.key === null ? v : p.key) || null,
                u(f, h, p, j);
            case Qt:
                var D = p._init;
                return w(h, f, v, D(p._payload), j)
            }
            if (Ur(p) || jr(p))
                return h = h.get(v) || null,
                d(f, h, p, j, null);
            Ao(f, p)
        }
        return null
    }
    function S(h, f, v, p) {
        for (var j = null, D = null, _ = f, L = f = 0, O = null; _ !== null && L < v.length; L++) {
            _.index > L ? (O = _,
            _ = null) : O = _.sibling;
            var I = g(h, _, v[L], p);
            if (I === null) {
                _ === null && (_ = O);
                break
            }
            e && _ && I.alternate === null && t(h, _),
            f = l(I, f, L),
            D === null ? j = I : D.sibling = I,
            D = I,
            _ = O
        }
        if (L === v.length)
            return n(h, _),
            ue && mn(h, L),
            j;
        if (_ === null) {
            for (; L < v.length; L++)
                _ = m(h, v[L], p),
                _ !== null && (f = l(_, f, L),
                D === null ? j = _ : D.sibling = _,
                D = _);
            return ue && mn(h, L),
            j
        }
        for (_ = r(h, _); L < v.length; L++)
            O = w(_, h, L, v[L], p),
            O !== null && (e && O.alternate !== null && _.delete(O.key === null ? L : O.key),
            f = l(O, f, L),
            D === null ? j = O : D.sibling = O,
            D = O);
        return e && _.forEach(function(se) {
            return t(h, se)
        }),
        ue && mn(h, L),
        j
    }
    function y(h, f, v, p) {
        var j = jr(v);
        if (typeof j != "function")
            throw Error(N(150));
        if (v = j.call(v),
        v == null)
            throw Error(N(151));
        for (var D = j = null, _ = f, L = f = 0, O = null, I = v.next(); _ !== null && !I.done; L++,
        I = v.next()) {
            _.index > L ? (O = _,
            _ = null) : O = _.sibling;
            var se = g(h, _, I.value, p);
            if (se === null) {
                _ === null && (_ = O);
                break
            }
            e && _ && se.alternate === null && t(h, _),
            f = l(se, f, L),
            D === null ? j = se : D.sibling = se,
            D = se,
            _ = O
        }
        if (I.done)
            return n(h, _),
            ue && mn(h, L),
            j;
        if (_ === null) {
            for (; !I.done; L++,
            I = v.next())
                I = m(h, I.value, p),
                I !== null && (f = l(I, f, L),
                D === null ? j = I : D.sibling = I,
                D = I);
            return ue && mn(h, L),
            j
        }
        for (_ = r(h, _); !I.done; L++,
        I = v.next())
            I = w(_, h, L, I.value, p),
            I !== null && (e && I.alternate !== null && _.delete(I.key === null ? L : I.key),
            f = l(I, f, L),
            D === null ? j = I : D.sibling = I,
            D = I);
        return e && _.forEach(function(X) {
            return t(h, X)
        }),
        ue && mn(h, L),
        j
    }
    function k(h, f, v, p) {
        if (typeof v == "object" && v !== null && v.type === Un && v.key === null && (v = v.props.children),
        typeof v == "object" && v !== null) {
            switch (v.$$typeof) {
            case Lo:
                e: {
                    for (var j = v.key, D = f; D !== null; ) {
                        if (D.key === j) {
                            if (j = v.type,
                            j === Un) {
                                if (D.tag === 7) {
                                    n(h, D.sibling),
                                    f = o(D, v.props.children),
                                    f.return = h,
                                    h = f;
                                    break e
                                }
                            } else if (D.elementType === j || typeof j == "object" && j !== null && j.$$typeof === Qt && sc(j) === D.type) {
                                n(h, D.sibling),
                                f = o(D, v.props),
                                f.ref = _r(h, D, v),
                                f.return = h,
                                h = f;
                                break e
                            }
                            n(h, D);
                            break
                        } else
                            t(h, D);
                        D = D.sibling
                    }
                    v.type === Un ? (f = En(v.props.children, h.mode, p, v.key),
                    f.return = h,
                    h = f) : (p = rl(v.type, v.key, v.props, null, h.mode, p),
                    p.ref = _r(h, f, v),
                    p.return = h,
                    h = p)
                }
                return i(h);
            case $n:
                e: {
                    for (D = v.key; f !== null; ) {
                        if (f.key === D)
                            if (f.tag === 4 && f.stateNode.containerInfo === v.containerInfo && f.stateNode.implementation === v.implementation) {
                                n(h, f.sibling),
                                f = o(f, v.children || []),
                                f.return = h,
                                h = f;
                                break e
                            } else {
                                n(h, f);
                                break
                            }
                        else
                            t(h, f);
                        f = f.sibling
                    }
                    f = bi(v, h.mode, p),
                    f.return = h,
                    h = f
                }
                return i(h);
            case Qt:
                return D = v._init,
                k(h, f, D(v._payload), p)
            }
            if (Ur(v))
                return S(h, f, v, p);
            if (jr(v))
                return y(h, f, v, p);
            Ao(h, v)
        }
        return typeof v == "string" && v !== "" || typeof v == "number" ? (v = "" + v,
        f !== null && f.tag === 6 ? (n(h, f.sibling),
        f = o(f, v),
        f.return = h,
        h = f) : (n(h, f),
        f = Zi(v, h.mode, p),
        f.return = h,
        h = f),
        i(h)) : n(h, f)
    }
    return k
}
var ar = Ef(!0)
  , Cf = Ef(!1)
  , xo = {}
  , Ct = cn(xo)
  , so = cn(xo)
  , uo = cn(xo);
function wn(e) {
    if (e === xo)
        throw Error(N(174));
    return e
}
function Ts(e, t) {
    switch (oe(uo, t),
    oe(so, e),
    oe(Ct, xo),
    e = t.nodeType,
    e) {
    case 9:
    case 11:
        t = (t = t.documentElement) ? t.namespaceURI : va(null, "");
        break;
    default:
        e = e === 8 ? t.parentNode : t,
        t = e.namespaceURI || null,
        e = e.tagName,
        t = va(t, e)
    }
    ae(Ct),
    oe(Ct, t)
}
function sr() {
    ae(Ct),
    ae(so),
    ae(uo)
}
function kf(e) {
    wn(uo.current);
    var t = wn(Ct.current)
      , n = va(t, e.type);
    t !== n && (oe(so, e),
    oe(Ct, n))
}
function Ms(e) {
    so.current === e && (ae(Ct),
    ae(so))
}
var pe = cn(0);
function Sl(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated,
            n === null || n.data === "$?" || n.data === "$!"))
                return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128)
                return t
        } else if (t.child !== null) {
            t.child.return = t,
            t = t.child;
            continue
        }
        if (t === e)
            break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e)
                return null;
            t = t.return
        }
        t.sibling.return = t.return,
        t = t.sibling
    }
    return null
}
var Ki = [];
function Os() {
    for (var e = 0; e < Ki.length; e++)
        Ki[e]._workInProgressVersionPrimary = null;
    Ki.length = 0
}
var Zo = Ft.ReactCurrentDispatcher
  , Yi = Ft.ReactCurrentBatchConfig
  , jn = 0
  , he = null
  , ke = null
  , Re = null
  , xl = !1
  , Kr = !1
  , co = 0
  , pv = 0;
function Me() {
    throw Error(N(321))
}
function zs(e, t) {
    if (t === null)
        return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!gt(e[n], t[n]))
            return !1;
    return !0
}
function Is(e, t, n, r, o, l) {
    if (jn = l,
    he = t,
    t.memoizedState = null,
    t.updateQueue = null,
    t.lanes = 0,
    Zo.current = e === null || e.memoizedState === null ? gv : yv,
    e = n(r, o),
    Kr) {
        l = 0;
        do {
            if (Kr = !1,
            co = 0,
            25 <= l)
                throw Error(N(301));
            l += 1,
            Re = ke = null,
            t.updateQueue = null,
            Zo.current = wv,
            e = n(r, o)
        } while (Kr)
    }
    if (Zo.current = El,
    t = ke !== null && ke.next !== null,
    jn = 0,
    Re = ke = he = null,
    xl = !1,
    t)
        throw Error(N(300));
    return e
}
function $s() {
    var e = co !== 0;
    return co = 0,
    e
}
function St() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return Re === null ? he.memoizedState = Re = e : Re = Re.next = e,
    Re
}
function it() {
    if (ke === null) {
        var e = he.alternate;
        e = e !== null ? e.memoizedState : null
    } else
        e = ke.next;
    var t = Re === null ? he.memoizedState : Re.next;
    if (t !== null)
        Re = t,
        ke = e;
    else {
        if (e === null)
            throw Error(N(310));
        ke = e,
        e = {
            memoizedState: ke.memoizedState,
            baseState: ke.baseState,
            baseQueue: ke.baseQueue,
            queue: ke.queue,
            next: null
        },
        Re === null ? he.memoizedState = Re = e : Re = Re.next = e
    }
    return Re
}
function fo(e, t) {
    return typeof t == "function" ? t(e) : t
}
function Gi(e) {
    var t = it()
      , n = t.queue;
    if (n === null)
        throw Error(N(311));
    n.lastRenderedReducer = e;
    var r = ke
      , o = r.baseQueue
      , l = n.pending;
    if (l !== null) {
        if (o !== null) {
            var i = o.next;
            o.next = l.next,
            l.next = i
        }
        r.baseQueue = o = l,
        n.pending = null
    }
    if (o !== null) {
        l = o.next,
        r = r.baseState;
        var a = i = null
          , s = null
          , u = l;
        do {
            var d = u.lane;
            if ((jn & d) === d)
                s !== null && (s = s.next = {
                    lane: 0,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                }),
                r = u.hasEagerState ? u.eagerState : e(r, u.action);
            else {
                var m = {
                    lane: d,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                s === null ? (a = s = m,
                i = r) : s = s.next = m,
                he.lanes |= d,
                Rn |= d
            }
            u = u.next
        } while (u !== null && u !== l);
        s === null ? i = r : s.next = a,
        gt(r, t.memoizedState) || (Ve = !0),
        t.memoizedState = r,
        t.baseState = i,
        t.baseQueue = s,
        n.lastRenderedState = r
    }
    if (e = n.interleaved,
    e !== null) {
        o = e;
        do
            l = o.lane,
            he.lanes |= l,
            Rn |= l,
            o = o.next;
        while (o !== e)
    } else
        o === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}
function Xi(e) {
    var t = it()
      , n = t.queue;
    if (n === null)
        throw Error(N(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch
      , o = n.pending
      , l = t.memoizedState;
    if (o !== null) {
        n.pending = null;
        var i = o = o.next;
        do
            l = e(l, i.action),
            i = i.next;
        while (i !== o);
        gt(l, t.memoizedState) || (Ve = !0),
        t.memoizedState = l,
        t.baseQueue === null && (t.baseState = l),
        n.lastRenderedState = l
    }
    return [l, r]
}
function jf() {}
function Rf(e, t) {
    var n = he
      , r = it()
      , o = t()
      , l = !gt(r.memoizedState, o);
    if (l && (r.memoizedState = o,
    Ve = !0),
    r = r.queue,
    Us(Lf.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || l || Re !== null && Re.memoizedState.tag & 1) {
        if (n.flags |= 2048,
        po(9, Pf.bind(null, n, r, o, t), void 0, null),
        Ne === null)
            throw Error(N(349));
        jn & 30 || Nf(n, t, o)
    }
    return o
}
function Nf(e, t, n) {
    e.flags |= 16384,
    e = {
        getSnapshot: t,
        value: n
    },
    t = he.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    he.updateQueue = t,
    t.stores = [e]) : (n = t.stores,
    n === null ? t.stores = [e] : n.push(e))
}
function Pf(e, t, n, r) {
    t.value = n,
    t.getSnapshot = r,
    _f(t) && Df(e)
}
function Lf(e, t, n) {
    return n(function() {
        _f(t) && Df(e)
    })
}
function _f(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !gt(e, n)
    } catch {
        return !0
    }
}
function Df(e) {
    var t = $t(e, 1);
    t !== null && vt(t, e, 1, -1)
}
function uc(e) {
    var t = St();
    return typeof e == "function" && (e = e()),
    t.memoizedState = t.baseState = e,
    e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: fo,
        lastRenderedState: e
    },
    t.queue = e,
    e = e.dispatch = vv.bind(null, he, e),
    [t.memoizedState, e]
}
function po(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    },
    t = he.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    he.updateQueue = t,
    t.lastEffect = e.next = e) : (n = t.lastEffect,
    n === null ? t.lastEffect = e.next = e : (r = n.next,
    n.next = e,
    e.next = r,
    t.lastEffect = e)),
    e
}
function Tf() {
    return it().memoizedState
}
function bo(e, t, n, r) {
    var o = St();
    he.flags |= e,
    o.memoizedState = po(1 | t, n, void 0, r === void 0 ? null : r)
}
function Bl(e, t, n, r) {
    var o = it();
    r = r === void 0 ? null : r;
    var l = void 0;
    if (ke !== null) {
        var i = ke.memoizedState;
        if (l = i.destroy,
        r !== null && zs(r, i.deps)) {
            o.memoizedState = po(t, n, l, r);
            return
        }
    }
    he.flags |= e,
    o.memoizedState = po(1 | t, n, l, r)
}
function cc(e, t) {
    return bo(8390656, 8, e, t)
}
function Us(e, t) {
    return Bl(2048, 8, e, t)
}
function Mf(e, t) {
    return Bl(4, 2, e, t)
}
function Of(e, t) {
    return Bl(4, 4, e, t)
}
function zf(e, t) {
    if (typeof t == "function")
        return e = e(),
        t(e),
        function() {
            t(null)
        }
        ;
    if (t != null)
        return e = e(),
        t.current = e,
        function() {
            t.current = null
        }
}
function If(e, t, n) {
    return n = n != null ? n.concat([e]) : null,
    Bl(4, 4, zf.bind(null, t, e), n)
}
function Fs() {}
function $f(e, t) {
    var n = it();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && zs(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
    e)
}
function Uf(e, t) {
    var n = it();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && zs(t, r[1]) ? r[0] : (e = e(),
    n.memoizedState = [e, t],
    e)
}
function Ff(e, t, n) {
    return jn & 21 ? (gt(n, t) || (n = Bd(),
    he.lanes |= n,
    Rn |= n,
    e.baseState = !0),
    t) : (e.baseState && (e.baseState = !1,
    Ve = !0),
    e.memoizedState = n)
}
function hv(e, t) {
    var n = Z;
    Z = n !== 0 && 4 > n ? n : 4,
    e(!0);
    var r = Yi.transition;
    Yi.transition = {};
    try {
        e(!1),
        t()
    } finally {
        Z = n,
        Yi.transition = r
    }
}
function Af() {
    return it().memoizedState
}
function mv(e, t, n) {
    var r = rn(e);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    Bf(e))
        Wf(t, n);
    else if (n = yf(e, t, n, r),
    n !== null) {
        var o = Fe();
        vt(n, e, r, o),
        Vf(n, t, r)
    }
}
function vv(e, t, n) {
    var r = rn(e)
      , o = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (Bf(e))
        Wf(t, o);
    else {
        var l = e.alternate;
        if (e.lanes === 0 && (l === null || l.lanes === 0) && (l = t.lastRenderedReducer,
        l !== null))
            try {
                var i = t.lastRenderedState
                  , a = l(i, n);
                if (o.hasEagerState = !0,
                o.eagerState = a,
                gt(a, i)) {
                    var s = t.interleaved;
                    s === null ? (o.next = o,
                    _s(t)) : (o.next = s.next,
                    s.next = o),
                    t.interleaved = o;
                    return
                }
            } catch {} finally {}
        n = yf(e, t, o, r),
        n !== null && (o = Fe(),
        vt(n, e, r, o),
        Vf(n, t, r))
    }
}
function Bf(e) {
    var t = e.alternate;
    return e === he || t !== null && t === he
}
function Wf(e, t) {
    Kr = xl = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next,
    n.next = t),
    e.pending = t
}
function Vf(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        vs(e, n)
    }
}
var El = {
    readContext: lt,
    useCallback: Me,
    useContext: Me,
    useEffect: Me,
    useImperativeHandle: Me,
    useInsertionEffect: Me,
    useLayoutEffect: Me,
    useMemo: Me,
    useReducer: Me,
    useRef: Me,
    useState: Me,
    useDebugValue: Me,
    useDeferredValue: Me,
    useTransition: Me,
    useMutableSource: Me,
    useSyncExternalStore: Me,
    useId: Me,
    unstable_isNewReconciler: !1
}
  , gv = {
    readContext: lt,
    useCallback: function(e, t) {
        return St().memoizedState = [e, t === void 0 ? null : t],
        e
    },
    useContext: lt,
    useEffect: cc,
    useImperativeHandle: function(e, t, n) {
        return n = n != null ? n.concat([e]) : null,
        bo(4194308, 4, zf.bind(null, t, e), n)
    },
    useLayoutEffect: function(e, t) {
        return bo(4194308, 4, e, t)
    },
    useInsertionEffect: function(e, t) {
        return bo(4, 2, e, t)
    },
    useMemo: function(e, t) {
        var n = St();
        return t = t === void 0 ? null : t,
        e = e(),
        n.memoizedState = [e, t],
        e
    },
    useReducer: function(e, t, n) {
        var r = St();
        return t = n !== void 0 ? n(t) : t,
        r.memoizedState = r.baseState = t,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
        },
        r.queue = e,
        e = e.dispatch = mv.bind(null, he, e),
        [r.memoizedState, e]
    },
    useRef: function(e) {
        var t = St();
        return e = {
            current: e
        },
        t.memoizedState = e
    },
    useState: uc,
    useDebugValue: Fs,
    useDeferredValue: function(e) {
        return St().memoizedState = e
    },
    useTransition: function() {
        var e = uc(!1)
          , t = e[0];
        return e = hv.bind(null, e[1]),
        St().memoizedState = e,
        [t, e]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(e, t, n) {
        var r = he
          , o = St();
        if (ue) {
            if (n === void 0)
                throw Error(N(407));
            n = n()
        } else {
            if (n = t(),
            Ne === null)
                throw Error(N(349));
            jn & 30 || Nf(r, t, n)
        }
        o.memoizedState = n;
        var l = {
            value: n,
            getSnapshot: t
        };
        return o.queue = l,
        cc(Lf.bind(null, r, l, e), [e]),
        r.flags |= 2048,
        po(9, Pf.bind(null, r, l, n, t), void 0, null),
        n
    },
    useId: function() {
        var e = St()
          , t = Ne.identifierPrefix;
        if (ue) {
            var n = Dt
              , r = _t;
            n = (r & ~(1 << 32 - mt(r) - 1)).toString(32) + n,
            t = ":" + t + "R" + n,
            n = co++,
            0 < n && (t += "H" + n.toString(32)),
            t += ":"
        } else
            n = pv++,
            t = ":" + t + "r" + n.toString(32) + ":";
        return e.memoizedState = t
    },
    unstable_isNewReconciler: !1
}
  , yv = {
    readContext: lt,
    useCallback: $f,
    useContext: lt,
    useEffect: Us,
    useImperativeHandle: If,
    useInsertionEffect: Mf,
    useLayoutEffect: Of,
    useMemo: Uf,
    useReducer: Gi,
    useRef: Tf,
    useState: function() {
        return Gi(fo)
    },
    useDebugValue: Fs,
    useDeferredValue: function(e) {
        var t = it();
        return Ff(t, ke.memoizedState, e)
    },
    useTransition: function() {
        var e = Gi(fo)[0]
          , t = it().memoizedState;
        return [e, t]
    },
    useMutableSource: jf,
    useSyncExternalStore: Rf,
    useId: Af,
    unstable_isNewReconciler: !1
}
  , wv = {
    readContext: lt,
    useCallback: $f,
    useContext: lt,
    useEffect: Us,
    useImperativeHandle: If,
    useInsertionEffect: Mf,
    useLayoutEffect: Of,
    useMemo: Uf,
    useReducer: Xi,
    useRef: Tf,
    useState: function() {
        return Xi(fo)
    },
    useDebugValue: Fs,
    useDeferredValue: function(e) {
        var t = it();
        return ke === null ? t.memoizedState = e : Ff(t, ke.memoizedState, e)
    },
    useTransition: function() {
        var e = Xi(fo)[0]
          , t = it().memoizedState;
        return [e, t]
    },
    useMutableSource: jf,
    useSyncExternalStore: Rf,
    useId: Af,
    unstable_isNewReconciler: !1
};
function ur(e, t) {
    try {
        var n = ""
          , r = t;
        do
            n += Yh(r),
            r = r.return;
        while (r);
        var o = n
    } catch (l) {
        o = `
Error generating stack: ` + l.message + `
` + l.stack
    }
    return {
        value: e,
        source: t,
        stack: o,
        digest: null
    }
}
function Ji(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}
function Fa(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var Sv = typeof WeakMap == "function" ? WeakMap : Map;
function Hf(e, t, n) {
    n = Mt(-1, n),
    n.tag = 3,
    n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        kl || (kl = !0,
        Xa = r),
        Fa(e, t)
    }
    ,
    n
}
function Qf(e, t, n) {
    n = Mt(-1, n),
    n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var o = t.value;
        n.payload = function() {
            return r(o)
        }
        ,
        n.callback = function() {
            Fa(e, t)
        }
    }
    var l = e.stateNode;
    return l !== null && typeof l.componentDidCatch == "function" && (n.callback = function() {
        Fa(e, t),
        typeof r != "function" && (nn === null ? nn = new Set([this]) : nn.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: i !== null ? i : ""
        })
    }
    ),
    n
}
function dc(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new Sv;
        var o = new Set;
        r.set(t, o)
    } else
        o = r.get(t),
        o === void 0 && (o = new Set,
        r.set(t, o));
    o.has(n) || (o.add(n),
    e = Ov.bind(null, e, t, n),
    t.then(e, e))
}
function fc(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState,
        t = t !== null ? t.dehydrated !== null : !0),
        t)
            return e;
        e = e.return
    } while (e !== null);
    return null
}
function pc(e, t, n, r, o) {
    return e.mode & 1 ? (e.flags |= 65536,
    e.lanes = o,
    e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
    n.flags |= 131072,
    n.flags &= -52805,
    n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Mt(-1, 1),
    t.tag = 2,
    tn(n, t, 1))),
    n.lanes |= 1),
    e)
}
var xv = Ft.ReactCurrentOwner
  , Ve = !1;
function Ue(e, t, n, r) {
    t.child = e === null ? Cf(t, null, n, r) : ar(t, e.child, n, r)
}
function hc(e, t, n, r, o) {
    n = n.render;
    var l = t.ref;
    return tr(t, o),
    r = Is(e, t, n, r, l, o),
    n = $s(),
    e !== null && !Ve ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~o,
    Ut(e, t, o)) : (ue && n && ks(t),
    t.flags |= 1,
    Ue(e, t, r, o),
    t.child)
}
function mc(e, t, n, r, o) {
    if (e === null) {
        var l = n.type;
        return typeof l == "function" && !Ys(l) && l.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15,
        t.type = l,
        Kf(e, t, l, r, o)) : (e = rl(n.type, null, r, t, t.mode, o),
        e.ref = t.ref,
        e.return = t,
        t.child = e)
    }
    if (l = e.child,
    !(e.lanes & o)) {
        var i = l.memoizedProps;
        if (n = n.compare,
        n = n !== null ? n : oo,
        n(i, r) && e.ref === t.ref)
            return Ut(e, t, o)
    }
    return t.flags |= 1,
    e = on(l, r),
    e.ref = t.ref,
    e.return = t,
    t.child = e
}
function Kf(e, t, n, r, o) {
    if (e !== null) {
        var l = e.memoizedProps;
        if (oo(l, r) && e.ref === t.ref)
            if (Ve = !1,
            t.pendingProps = r = l,
            (e.lanes & o) !== 0)
                e.flags & 131072 && (Ve = !0);
            else
                return t.lanes = e.lanes,
                Ut(e, t, o)
    }
    return Aa(e, t, n, r, o)
}
function Yf(e, t, n) {
    var r = t.pendingProps
      , o = r.children
      , l = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1))
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            oe(Gn, Ye),
            Ye |= n;
        else {
            if (!(n & 1073741824))
                return e = l !== null ? l.baseLanes | n : n,
                t.lanes = t.childLanes = 1073741824,
                t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                },
                t.updateQueue = null,
                oe(Gn, Ye),
                Ye |= e,
                null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            r = l !== null ? l.baseLanes : n,
            oe(Gn, Ye),
            Ye |= r
        }
    else
        l !== null ? (r = l.baseLanes | n,
        t.memoizedState = null) : r = n,
        oe(Gn, Ye),
        Ye |= r;
    return Ue(e, t, o, n),
    t.child
}
function Gf(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512,
    t.flags |= 2097152)
}
function Aa(e, t, n, r, o) {
    var l = Qe(n) ? Cn : $e.current;
    return l = lr(t, l),
    tr(t, o),
    n = Is(e, t, n, r, l, o),
    r = $s(),
    e !== null && !Ve ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~o,
    Ut(e, t, o)) : (ue && r && ks(t),
    t.flags |= 1,
    Ue(e, t, n, o),
    t.child)
}
function vc(e, t, n, r, o) {
    if (Qe(n)) {
        var l = !0;
        hl(t)
    } else
        l = !1;
    if (tr(t, o),
    t.stateNode === null)
        el(e, t),
        xf(t, n, r),
        Ua(t, n, r, o),
        r = !0;
    else if (e === null) {
        var i = t.stateNode
          , a = t.memoizedProps;
        i.props = a;
        var s = i.context
          , u = n.contextType;
        typeof u == "object" && u !== null ? u = lt(u) : (u = Qe(n) ? Cn : $e.current,
        u = lr(t, u));
        var d = n.getDerivedStateFromProps
          , m = typeof d == "function" || typeof i.getSnapshotBeforeUpdate == "function";
        m || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (a !== r || s !== u) && ac(t, i, r, u),
        Kt = !1;
        var g = t.memoizedState;
        i.state = g,
        wl(t, r, i, o),
        s = t.memoizedState,
        a !== r || g !== s || He.current || Kt ? (typeof d == "function" && ($a(t, n, d, r),
        s = t.memoizedState),
        (a = Kt || ic(t, n, a, r, g, s, u)) ? (m || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(),
        typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()),
        typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
        t.memoizedProps = r,
        t.memoizedState = s),
        i.props = r,
        i.state = s,
        i.context = u,
        r = a) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
        r = !1)
    } else {
        i = t.stateNode,
        wf(e, t),
        a = t.memoizedProps,
        u = t.type === t.elementType ? a : dt(t.type, a),
        i.props = u,
        m = t.pendingProps,
        g = i.context,
        s = n.contextType,
        typeof s == "object" && s !== null ? s = lt(s) : (s = Qe(n) ? Cn : $e.current,
        s = lr(t, s));
        var w = n.getDerivedStateFromProps;
        (d = typeof w == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (a !== m || g !== s) && ac(t, i, r, s),
        Kt = !1,
        g = t.memoizedState,
        i.state = g,
        wl(t, r, i, o);
        var S = t.memoizedState;
        a !== m || g !== S || He.current || Kt ? (typeof w == "function" && ($a(t, n, w, r),
        S = t.memoizedState),
        (u = Kt || ic(t, n, u, r, g, S, s) || !1) ? (d || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, S, s),
        typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, S, s)),
        typeof i.componentDidUpdate == "function" && (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || a === e.memoizedProps && g === e.memoizedState || (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && g === e.memoizedState || (t.flags |= 1024),
        t.memoizedProps = r,
        t.memoizedState = S),
        i.props = r,
        i.state = S,
        i.context = s,
        r = u) : (typeof i.componentDidUpdate != "function" || a === e.memoizedProps && g === e.memoizedState || (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && g === e.memoizedState || (t.flags |= 1024),
        r = !1)
    }
    return Ba(e, t, n, r, l, o)
}
function Ba(e, t, n, r, o, l) {
    Gf(e, t);
    var i = (t.flags & 128) !== 0;
    if (!r && !i)
        return o && tc(t, n, !1),
        Ut(e, t, l);
    r = t.stateNode,
    xv.current = t;
    var a = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1,
    e !== null && i ? (t.child = ar(t, e.child, null, l),
    t.child = ar(t, null, a, l)) : Ue(e, t, a, l),
    t.memoizedState = r.state,
    o && tc(t, n, !0),
    t.child
}
function Xf(e) {
    var t = e.stateNode;
    t.pendingContext ? ec(e, t.pendingContext, t.pendingContext !== t.context) : t.context && ec(e, t.context, !1),
    Ts(e, t.containerInfo)
}
function gc(e, t, n, r, o) {
    return ir(),
    Rs(o),
    t.flags |= 256,
    Ue(e, t, n, r),
    t.child
}
var Wa = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function Va(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}
function Jf(e, t, n) {
    var r = t.pendingProps, o = pe.current, l = !1, i = (t.flags & 128) !== 0, a;
    if ((a = i) || (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    a ? (l = !0,
    t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1),
    oe(pe, o & 1),
    e === null)
        return za(t),
        e = t.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
        null) : (i = r.children,
        e = r.fallback,
        l ? (r = t.mode,
        l = t.child,
        i = {
            mode: "hidden",
            children: i
        },
        !(r & 1) && l !== null ? (l.childLanes = 0,
        l.pendingProps = i) : l = Hl(i, r, 0, null),
        e = En(e, r, n, null),
        l.return = t,
        e.return = t,
        l.sibling = e,
        t.child = l,
        t.child.memoizedState = Va(n),
        t.memoizedState = Wa,
        e) : As(t, i));
    if (o = e.memoizedState,
    o !== null && (a = o.dehydrated,
    a !== null))
        return Ev(e, t, i, r, a, o, n);
    if (l) {
        l = r.fallback,
        i = t.mode,
        o = e.child,
        a = o.sibling;
        var s = {
            mode: "hidden",
            children: r.children
        };
        return !(i & 1) && t.child !== o ? (r = t.child,
        r.childLanes = 0,
        r.pendingProps = s,
        t.deletions = null) : (r = on(o, s),
        r.subtreeFlags = o.subtreeFlags & 14680064),
        a !== null ? l = on(a, l) : (l = En(l, i, n, null),
        l.flags |= 2),
        l.return = t,
        r.return = t,
        r.sibling = l,
        t.child = r,
        r = l,
        l = t.child,
        i = e.child.memoizedState,
        i = i === null ? Va(n) : {
            baseLanes: i.baseLanes | n,
            cachePool: null,
            transitions: i.transitions
        },
        l.memoizedState = i,
        l.childLanes = e.childLanes & ~n,
        t.memoizedState = Wa,
        r
    }
    return l = e.child,
    e = l.sibling,
    r = on(l, {
        mode: "visible",
        children: r.children
    }),
    !(t.mode & 1) && (r.lanes = n),
    r.return = t,
    r.sibling = null,
    e !== null && (n = t.deletions,
    n === null ? (t.deletions = [e],
    t.flags |= 16) : n.push(e)),
    t.child = r,
    t.memoizedState = null,
    r
}
function As(e, t) {
    return t = Hl({
        mode: "visible",
        children: t
    }, e.mode, 0, null),
    t.return = e,
    e.child = t
}
function Bo(e, t, n, r) {
    return r !== null && Rs(r),
    ar(t, e.child, null, n),
    e = As(t, t.pendingProps.children),
    e.flags |= 2,
    t.memoizedState = null,
    e
}
function Ev(e, t, n, r, o, l, i) {
    if (n)
        return t.flags & 256 ? (t.flags &= -257,
        r = Ji(Error(N(422))),
        Bo(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child,
        t.flags |= 128,
        null) : (l = r.fallback,
        o = t.mode,
        r = Hl({
            mode: "visible",
            children: r.children
        }, o, 0, null),
        l = En(l, o, i, null),
        l.flags |= 2,
        r.return = t,
        l.return = t,
        r.sibling = l,
        t.child = r,
        t.mode & 1 && ar(t, e.child, null, i),
        t.child.memoizedState = Va(i),
        t.memoizedState = Wa,
        l);
    if (!(t.mode & 1))
        return Bo(e, t, i, null);
    if (o.data === "$!") {
        if (r = o.nextSibling && o.nextSibling.dataset,
        r)
            var a = r.dgst;
        return r = a,
        l = Error(N(419)),
        r = Ji(l, r, void 0),
        Bo(e, t, i, r)
    }
    if (a = (i & e.childLanes) !== 0,
    Ve || a) {
        if (r = Ne,
        r !== null) {
            switch (i & -i) {
            case 4:
                o = 2;
                break;
            case 16:
                o = 8;
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
                o = 32;
                break;
            case 536870912:
                o = 268435456;
                break;
            default:
                o = 0
            }
            o = o & (r.suspendedLanes | i) ? 0 : o,
            o !== 0 && o !== l.retryLane && (l.retryLane = o,
            $t(e, o),
            vt(r, e, o, -1))
        }
        return Ks(),
        r = Ji(Error(N(421))),
        Bo(e, t, i, r)
    }
    return o.data === "$?" ? (t.flags |= 128,
    t.child = e.child,
    t = zv.bind(null, e),
    o._reactRetry = t,
    null) : (e = l.treeContext,
    Ge = en(o.nextSibling),
    Xe = t,
    ue = !0,
    ht = null,
    e !== null && (tt[nt++] = _t,
    tt[nt++] = Dt,
    tt[nt++] = kn,
    _t = e.id,
    Dt = e.overflow,
    kn = t),
    t = As(t, r.children),
    t.flags |= 4096,
    t)
}
function yc(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t),
    Ia(e.return, t, n)
}
function qi(e, t, n, r, o) {
    var l = e.memoizedState;
    l === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o
    } : (l.isBackwards = t,
    l.rendering = null,
    l.renderingStartTime = 0,
    l.last = r,
    l.tail = n,
    l.tailMode = o)
}
function qf(e, t, n) {
    var r = t.pendingProps
      , o = r.revealOrder
      , l = r.tail;
    if (Ue(e, t, r.children, n),
    r = pe.current,
    r & 2)
        r = r & 1 | 2,
        t.flags |= 128;
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && yc(e, n, t);
                else if (e.tag === 19)
                    yc(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e,
                    e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        r &= 1
    }
    if (oe(pe, r),
    !(t.mode & 1))
        t.memoizedState = null;
    else
        switch (o) {
        case "forwards":
            for (n = t.child,
            o = null; n !== null; )
                e = n.alternate,
                e !== null && Sl(e) === null && (o = n),
                n = n.sibling;
            n = o,
            n === null ? (o = t.child,
            t.child = null) : (o = n.sibling,
            n.sibling = null),
            qi(t, !1, o, n, l);
            break;
        case "backwards":
            for (n = null,
            o = t.child,
            t.child = null; o !== null; ) {
                if (e = o.alternate,
                e !== null && Sl(e) === null) {
                    t.child = o;
                    break
                }
                e = o.sibling,
                o.sibling = n,
                n = o,
                o = e
            }
            qi(t, !0, n, null, l);
            break;
        case "together":
            qi(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
        }
    return t.child
}
function el(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null,
    t.alternate = null,
    t.flags |= 2)
}
function Ut(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies),
    Rn |= t.lanes,
    !(n & t.childLanes))
        return null;
    if (e !== null && t.child !== e.child)
        throw Error(N(153));
    if (t.child !== null) {
        for (e = t.child,
        n = on(e, e.pendingProps),
        t.child = n,
        n.return = t; e.sibling !== null; )
            e = e.sibling,
            n = n.sibling = on(e, e.pendingProps),
            n.return = t;
        n.sibling = null
    }
    return t.child
}
function Cv(e, t, n) {
    switch (t.tag) {
    case 3:
        Xf(t),
        ir();
        break;
    case 5:
        kf(t);
        break;
    case 1:
        Qe(t.type) && hl(t);
        break;
    case 4:
        Ts(t, t.stateNode.containerInfo);
        break;
    case 10:
        var r = t.type._context
          , o = t.memoizedProps.value;
        oe(gl, r._currentValue),
        r._currentValue = o;
        break;
    case 13:
        if (r = t.memoizedState,
        r !== null)
            return r.dehydrated !== null ? (oe(pe, pe.current & 1),
            t.flags |= 128,
            null) : n & t.child.childLanes ? Jf(e, t, n) : (oe(pe, pe.current & 1),
            e = Ut(e, t, n),
            e !== null ? e.sibling : null);
        oe(pe, pe.current & 1);
        break;
    case 19:
        if (r = (n & t.childLanes) !== 0,
        e.flags & 128) {
            if (r)
                return qf(e, t, n);
            t.flags |= 128
        }
        if (o = t.memoizedState,
        o !== null && (o.rendering = null,
        o.tail = null,
        o.lastEffect = null),
        oe(pe, pe.current),
        r)
            break;
        return null;
    case 22:
    case 23:
        return t.lanes = 0,
        Yf(e, t, n)
    }
    return Ut(e, t, n)
}
var Zf, Ha, bf, ep;
Zf = function(e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6)
            e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n,
            n = n.child;
            continue
        }
        if (n === t)
            break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t)
                return;
            n = n.return
        }
        n.sibling.return = n.return,
        n = n.sibling
    }
}
;
Ha = function() {}
;
bf = function(e, t, n, r) {
    var o = e.memoizedProps;
    if (o !== r) {
        e = t.stateNode,
        wn(Ct.current);
        var l = null;
        switch (n) {
        case "input":
            o = fa(e, o),
            r = fa(e, r),
            l = [];
            break;
        case "select":
            o = me({}, o, {
                value: void 0
            }),
            r = me({}, r, {
                value: void 0
            }),
            l = [];
            break;
        case "textarea":
            o = ma(e, o),
            r = ma(e, r),
            l = [];
            break;
        default:
            typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = fl)
        }
        ga(n, r);
        var i;
        n = null;
        for (u in o)
            if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
                if (u === "style") {
                    var a = o[u];
                    for (i in a)
                        a.hasOwnProperty(i) && (n || (n = {}),
                        n[i] = "")
                } else
                    u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (qr.hasOwnProperty(u) ? l || (l = []) : (l = l || []).push(u, null));
        for (u in r) {
            var s = r[u];
            if (a = o != null ? o[u] : void 0,
            r.hasOwnProperty(u) && s !== a && (s != null || a != null))
                if (u === "style")
                    if (a) {
                        for (i in a)
                            !a.hasOwnProperty(i) || s && s.hasOwnProperty(i) || (n || (n = {}),
                            n[i] = "");
                        for (i in s)
                            s.hasOwnProperty(i) && a[i] !== s[i] && (n || (n = {}),
                            n[i] = s[i])
                    } else
                        n || (l || (l = []),
                        l.push(u, n)),
                        n = s;
                else
                    u === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0,
                    a = a ? a.__html : void 0,
                    s != null && a !== s && (l = l || []).push(u, s)) : u === "children" ? typeof s != "string" && typeof s != "number" || (l = l || []).push(u, "" + s) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (qr.hasOwnProperty(u) ? (s != null && u === "onScroll" && ie("scroll", e),
                    l || a === s || (l = [])) : (l = l || []).push(u, s))
        }
        n && (l = l || []).push("style", n);
        var u = l;
        (t.updateQueue = u) && (t.flags |= 4)
    }
}
;
ep = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
}
;
function Dr(e, t) {
    if (!ue)
        switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null; )
                t.alternate !== null && (n = t),
                t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null; )
                n.alternate !== null && (r = n),
                n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
        }
}
function Oe(e) {
    var t = e.alternate !== null && e.alternate.child === e.child
      , n = 0
      , r = 0;
    if (t)
        for (var o = e.child; o !== null; )
            n |= o.lanes | o.childLanes,
            r |= o.subtreeFlags & 14680064,
            r |= o.flags & 14680064,
            o.return = e,
            o = o.sibling;
    else
        for (o = e.child; o !== null; )
            n |= o.lanes | o.childLanes,
            r |= o.subtreeFlags,
            r |= o.flags,
            o.return = e,
            o = o.sibling;
    return e.subtreeFlags |= r,
    e.childLanes = n,
    t
}
function kv(e, t, n) {
    var r = t.pendingProps;
    switch (js(t),
    t.tag) {
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
        return Oe(t),
        null;
    case 1:
        return Qe(t.type) && pl(),
        Oe(t),
        null;
    case 3:
        return r = t.stateNode,
        sr(),
        ae(He),
        ae($e),
        Os(),
        r.pendingContext && (r.context = r.pendingContext,
        r.pendingContext = null),
        (e === null || e.child === null) && (Fo(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
        ht !== null && (Za(ht),
        ht = null))),
        Ha(e, t),
        Oe(t),
        null;
    case 5:
        Ms(t);
        var o = wn(uo.current);
        if (n = t.type,
        e !== null && t.stateNode != null)
            bf(e, t, n, r, o),
            e.ref !== t.ref && (t.flags |= 512,
            t.flags |= 2097152);
        else {
            if (!r) {
                if (t.stateNode === null)
                    throw Error(N(166));
                return Oe(t),
                null
            }
            if (e = wn(Ct.current),
            Fo(t)) {
                r = t.stateNode,
                n = t.type;
                var l = t.memoizedProps;
                switch (r[xt] = t,
                r[ao] = l,
                e = (t.mode & 1) !== 0,
                n) {
                case "dialog":
                    ie("cancel", r),
                    ie("close", r);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    ie("load", r);
                    break;
                case "video":
                case "audio":
                    for (o = 0; o < Ar.length; o++)
                        ie(Ar[o], r);
                    break;
                case "source":
                    ie("error", r);
                    break;
                case "img":
                case "image":
                case "link":
                    ie("error", r),
                    ie("load", r);
                    break;
                case "details":
                    ie("toggle", r);
                    break;
                case "input":
                    Nu(r, l),
                    ie("invalid", r);
                    break;
                case "select":
                    r._wrapperState = {
                        wasMultiple: !!l.multiple
                    },
                    ie("invalid", r);
                    break;
                case "textarea":
                    Lu(r, l),
                    ie("invalid", r)
                }
                ga(n, l),
                o = null;
                for (var i in l)
                    if (l.hasOwnProperty(i)) {
                        var a = l[i];
                        i === "children" ? typeof a == "string" ? r.textContent !== a && (l.suppressHydrationWarning !== !0 && Uo(r.textContent, a, e),
                        o = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (l.suppressHydrationWarning !== !0 && Uo(r.textContent, a, e),
                        o = ["children", "" + a]) : qr.hasOwnProperty(i) && a != null && i === "onScroll" && ie("scroll", r)
                    }
                switch (n) {
                case "input":
                    _o(r),
                    Pu(r, l, !0);
                    break;
                case "textarea":
                    _o(r),
                    _u(r);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof l.onClick == "function" && (r.onclick = fl)
                }
                r = o,
                t.updateQueue = r,
                r !== null && (t.flags |= 4)
            } else {
                i = o.nodeType === 9 ? o : o.ownerDocument,
                e === "http://www.w3.org/1999/xhtml" && (e = Rd(n)),
                e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"),
                e.innerHTML = "<script><\/script>",
                e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, {
                    is: r.is
                }) : (e = i.createElement(n),
                n === "select" && (i = e,
                r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n),
                e[xt] = t,
                e[ao] = r,
                Zf(e, t, !1, !1),
                t.stateNode = e;
                e: {
                    switch (i = ya(n, r),
                    n) {
                    case "dialog":
                        ie("cancel", e),
                        ie("close", e),
                        o = r;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        ie("load", e),
                        o = r;
                        break;
                    case "video":
                    case "audio":
                        for (o = 0; o < Ar.length; o++)
                            ie(Ar[o], e);
                        o = r;
                        break;
                    case "source":
                        ie("error", e),
                        o = r;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        ie("error", e),
                        ie("load", e),
                        o = r;
                        break;
                    case "details":
                        ie("toggle", e),
                        o = r;
                        break;
                    case "input":
                        Nu(e, r),
                        o = fa(e, r),
                        ie("invalid", e);
                        break;
                    case "option":
                        o = r;
                        break;
                    case "select":
                        e._wrapperState = {
                            wasMultiple: !!r.multiple
                        },
                        o = me({}, r, {
                            value: void 0
                        }),
                        ie("invalid", e);
                        break;
                    case "textarea":
                        Lu(e, r),
                        o = ma(e, r),
                        ie("invalid", e);
                        break;
                    default:
                        o = r
                    }
                    ga(n, o),
                    a = o;
                    for (l in a)
                        if (a.hasOwnProperty(l)) {
                            var s = a[l];
                            l === "style" ? Ld(e, s) : l === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0,
                            s != null && Nd(e, s)) : l === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && Zr(e, s) : typeof s == "number" && Zr(e, "" + s) : l !== "suppressContentEditableWarning" && l !== "suppressHydrationWarning" && l !== "autoFocus" && (qr.hasOwnProperty(l) ? s != null && l === "onScroll" && ie("scroll", e) : s != null && cs(e, l, s, i))
                        }
                    switch (n) {
                    case "input":
                        _o(e),
                        Pu(e, r, !1);
                        break;
                    case "textarea":
                        _o(e),
                        _u(e);
                        break;
                    case "option":
                        r.value != null && e.setAttribute("value", "" + ln(r.value));
                        break;
                    case "select":
                        e.multiple = !!r.multiple,
                        l = r.value,
                        l != null ? qn(e, !!r.multiple, l, !1) : r.defaultValue != null && qn(e, !!r.multiple, r.defaultValue, !0);
                        break;
                    default:
                        typeof o.onClick == "function" && (e.onclick = fl)
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
                        r = !1
                    }
                }
                r && (t.flags |= 4)
            }
            t.ref !== null && (t.flags |= 512,
            t.flags |= 2097152)
        }
        return Oe(t),
        null;
    case 6:
        if (e && t.stateNode != null)
            ep(e, t, e.memoizedProps, r);
        else {
            if (typeof r != "string" && t.stateNode === null)
                throw Error(N(166));
            if (n = wn(uo.current),
            wn(Ct.current),
            Fo(t)) {
                if (r = t.stateNode,
                n = t.memoizedProps,
                r[xt] = t,
                (l = r.nodeValue !== n) && (e = Xe,
                e !== null))
                    switch (e.tag) {
                    case 3:
                        Uo(r.nodeValue, n, (e.mode & 1) !== 0);
                        break;
                    case 5:
                        e.memoizedProps.suppressHydrationWarning !== !0 && Uo(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                l && (t.flags |= 4)
            } else
                r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
                r[xt] = t,
                t.stateNode = r
        }
        return Oe(t),
        null;
    case 13:
        if (ae(pe),
        r = t.memoizedState,
        e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (ue && Ge !== null && t.mode & 1 && !(t.flags & 128))
                gf(),
                ir(),
                t.flags |= 98560,
                l = !1;
            else if (l = Fo(t),
            r !== null && r.dehydrated !== null) {
                if (e === null) {
                    if (!l)
                        throw Error(N(318));
                    if (l = t.memoizedState,
                    l = l !== null ? l.dehydrated : null,
                    !l)
                        throw Error(N(317));
                    l[xt] = t
                } else
                    ir(),
                    !(t.flags & 128) && (t.memoizedState = null),
                    t.flags |= 4;
                Oe(t),
                l = !1
            } else
                ht !== null && (Za(ht),
                ht = null),
                l = !0;
            if (!l)
                return t.flags & 65536 ? t : null
        }
        return t.flags & 128 ? (t.lanes = n,
        t) : (r = r !== null,
        r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192,
        t.mode & 1 && (e === null || pe.current & 1 ? je === 0 && (je = 3) : Ks())),
        t.updateQueue !== null && (t.flags |= 4),
        Oe(t),
        null);
    case 4:
        return sr(),
        Ha(e, t),
        e === null && lo(t.stateNode.containerInfo),
        Oe(t),
        null;
    case 10:
        return Ls(t.type._context),
        Oe(t),
        null;
    case 17:
        return Qe(t.type) && pl(),
        Oe(t),
        null;
    case 19:
        if (ae(pe),
        l = t.memoizedState,
        l === null)
            return Oe(t),
            null;
        if (r = (t.flags & 128) !== 0,
        i = l.rendering,
        i === null)
            if (r)
                Dr(l, !1);
            else {
                if (je !== 0 || e !== null && e.flags & 128)
                    for (e = t.child; e !== null; ) {
                        if (i = Sl(e),
                        i !== null) {
                            for (t.flags |= 128,
                            Dr(l, !1),
                            r = i.updateQueue,
                            r !== null && (t.updateQueue = r,
                            t.flags |= 4),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child; n !== null; )
                                l = n,
                                e = r,
                                l.flags &= 14680066,
                                i = l.alternate,
                                i === null ? (l.childLanes = 0,
                                l.lanes = e,
                                l.child = null,
                                l.subtreeFlags = 0,
                                l.memoizedProps = null,
                                l.memoizedState = null,
                                l.updateQueue = null,
                                l.dependencies = null,
                                l.stateNode = null) : (l.childLanes = i.childLanes,
                                l.lanes = i.lanes,
                                l.child = i.child,
                                l.subtreeFlags = 0,
                                l.deletions = null,
                                l.memoizedProps = i.memoizedProps,
                                l.memoizedState = i.memoizedState,
                                l.updateQueue = i.updateQueue,
                                l.type = i.type,
                                e = i.dependencies,
                                l.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }),
                                n = n.sibling;
                            return oe(pe, pe.current & 1 | 2),
                            t.child
                        }
                        e = e.sibling
                    }
                l.tail !== null && we() > cr && (t.flags |= 128,
                r = !0,
                Dr(l, !1),
                t.lanes = 4194304)
            }
        else {
            if (!r)
                if (e = Sl(i),
                e !== null) {
                    if (t.flags |= 128,
                    r = !0,
                    n = e.updateQueue,
                    n !== null && (t.updateQueue = n,
                    t.flags |= 4),
                    Dr(l, !0),
                    l.tail === null && l.tailMode === "hidden" && !i.alternate && !ue)
                        return Oe(t),
                        null
                } else
                    2 * we() - l.renderingStartTime > cr && n !== 1073741824 && (t.flags |= 128,
                    r = !0,
                    Dr(l, !1),
                    t.lanes = 4194304);
            l.isBackwards ? (i.sibling = t.child,
            t.child = i) : (n = l.last,
            n !== null ? n.sibling = i : t.child = i,
            l.last = i)
        }
        return l.tail !== null ? (t = l.tail,
        l.rendering = t,
        l.tail = t.sibling,
        l.renderingStartTime = we(),
        t.sibling = null,
        n = pe.current,
        oe(pe, r ? n & 1 | 2 : n & 1),
        t) : (Oe(t),
        null);
    case 22:
    case 23:
        return Qs(),
        r = t.memoizedState !== null,
        e !== null && e.memoizedState !== null !== r && (t.flags |= 8192),
        r && t.mode & 1 ? Ye & 1073741824 && (Oe(t),
        t.subtreeFlags & 6 && (t.flags |= 8192)) : Oe(t),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(N(156, t.tag))
}
function jv(e, t) {
    switch (js(t),
    t.tag) {
    case 1:
        return Qe(t.type) && pl(),
        e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 3:
        return sr(),
        ae(He),
        ae($e),
        Os(),
        e = t.flags,
        e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
        t) : null;
    case 5:
        return Ms(t),
        null;
    case 13:
        if (ae(pe),
        e = t.memoizedState,
        e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
                throw Error(N(340));
            ir()
        }
        return e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 19:
        return ae(pe),
        null;
    case 4:
        return sr(),
        null;
    case 10:
        return Ls(t.type._context),
        null;
    case 22:
    case 23:
        return Qs(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var Wo = !1
  , Ie = !1
  , Rv = typeof WeakSet == "function" ? WeakSet : Set
  , M = null;
function Yn(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null)
            } catch (r) {
                ve(e, t, r)
            }
        else
            n.current = null
}
function Qa(e, t, n) {
    try {
        n()
    } catch (r) {
        ve(e, t, r)
    }
}
var wc = !1;
function Nv(e, t) {
    if (Pa = ul,
    e = rf(),
    Cs(e)) {
        if ("selectionStart"in e)
            var n = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
        else
            e: {
                n = (n = e.ownerDocument) && n.defaultView || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var o = r.anchorOffset
                      , l = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType,
                        l.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var i = 0
                      , a = -1
                      , s = -1
                      , u = 0
                      , d = 0
                      , m = e
                      , g = null;
                    t: for (; ; ) {
                        for (var w; m !== n || o !== 0 && m.nodeType !== 3 || (a = i + o),
                        m !== l || r !== 0 && m.nodeType !== 3 || (s = i + r),
                        m.nodeType === 3 && (i += m.nodeValue.length),
                        (w = m.firstChild) !== null; )
                            g = m,
                            m = w;
                        for (; ; ) {
                            if (m === e)
                                break t;
                            if (g === n && ++u === o && (a = i),
                            g === l && ++d === r && (s = i),
                            (w = m.nextSibling) !== null)
                                break;
                            m = g,
                            g = m.parentNode
                        }
                        m = w
                    }
                    n = a === -1 || s === -1 ? null : {
                        start: a,
                        end: s
                    }
                } else
                    n = null
            }
        n = n || {
            start: 0,
            end: 0
        }
    } else
        n = null;
    for (La = {
        focusedElem: e,
        selectionRange: n
    },
    ul = !1,
    M = t; M !== null; )
        if (t = M,
        e = t.child,
        (t.subtreeFlags & 1028) !== 0 && e !== null)
            e.return = t,
            M = e;
        else
            for (; M !== null; ) {
                t = M;
                try {
                    var S = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (S !== null) {
                                var y = S.memoizedProps
                                  , k = S.memoizedState
                                  , h = t.stateNode
                                  , f = h.getSnapshotBeforeUpdate(t.elementType === t.type ? y : dt(t.type, y), k);
                                h.__reactInternalSnapshotBeforeUpdate = f
                            }
                            break;
                        case 3:
                            var v = t.stateNode.containerInfo;
                            v.nodeType === 1 ? v.textContent = "" : v.nodeType === 9 && v.documentElement && v.removeChild(v.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(N(163))
                        }
                } catch (p) {
                    ve(t, t.return, p)
                }
                if (e = t.sibling,
                e !== null) {
                    e.return = t.return,
                    M = e;
                    break
                }
                M = t.return
            }
    return S = wc,
    wc = !1,
    S
}
function Yr(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null,
    r !== null) {
        var o = r = r.next;
        do {
            if ((o.tag & e) === e) {
                var l = o.destroy;
                o.destroy = void 0,
                l !== void 0 && Qa(t, n, l)
            }
            o = o.next
        } while (o !== r)
    }
}
function Wl(e, t) {
    if (t = t.updateQueue,
    t = t !== null ? t.lastEffect : null,
    t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}
function Ka(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
        case 5:
            e = n;
            break;
        default:
            e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}
function tp(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null,
    tp(t)),
    e.child = null,
    e.deletions = null,
    e.sibling = null,
    e.tag === 5 && (t = e.stateNode,
    t !== null && (delete t[xt],
    delete t[ao],
    delete t[Ta],
    delete t[uv],
    delete t[cv])),
    e.stateNode = null,
    e.return = null,
    e.dependencies = null,
    e.memoizedProps = null,
    e.memoizedState = null,
    e.pendingProps = null,
    e.stateNode = null,
    e.updateQueue = null
}
function np(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function Sc(e) {
    e: for (; ; ) {
        for (; e.sibling === null; ) {
            if (e.return === null || np(e.return))
                return null;
            e = e.return
        }
        for (e.sibling.return = e.return,
        e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4)
                continue e;
            e.child.return = e,
            e = e.child
        }
        if (!(e.flags & 2))
            return e.stateNode
    }
}
function Ya(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
        t.insertBefore(e, n)) : (t = n,
        t.appendChild(e)),
        n = n._reactRootContainer,
        n != null || t.onclick !== null || (t.onclick = fl));
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (Ya(e, t, n),
        e = e.sibling; e !== null; )
            Ya(e, t, n),
            e = e.sibling
}
function Ga(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (Ga(e, t, n),
        e = e.sibling; e !== null; )
            Ga(e, t, n),
            e = e.sibling
}
var Le = null
  , ft = !1;
function Ht(e, t, n) {
    for (n = n.child; n !== null; )
        rp(e, t, n),
        n = n.sibling
}
function rp(e, t, n) {
    if (Et && typeof Et.onCommitFiberUnmount == "function")
        try {
            Et.onCommitFiberUnmount(Ol, n)
        } catch {}
    switch (n.tag) {
    case 5:
        Ie || Yn(n, t);
    case 6:
        var r = Le
          , o = ft;
        Le = null,
        Ht(e, t, n),
        Le = r,
        ft = o,
        Le !== null && (ft ? (e = Le,
        n = n.stateNode,
        e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Le.removeChild(n.stateNode));
        break;
    case 18:
        Le !== null && (ft ? (e = Le,
        n = n.stateNode,
        e.nodeType === 8 ? Hi(e.parentNode, n) : e.nodeType === 1 && Hi(e, n),
        no(e)) : Hi(Le, n.stateNode));
        break;
    case 4:
        r = Le,
        o = ft,
        Le = n.stateNode.containerInfo,
        ft = !0,
        Ht(e, t, n),
        Le = r,
        ft = o;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!Ie && (r = n.updateQueue,
        r !== null && (r = r.lastEffect,
        r !== null))) {
            o = r = r.next;
            do {
                var l = o
                  , i = l.destroy;
                l = l.tag,
                i !== void 0 && (l & 2 || l & 4) && Qa(n, t, i),
                o = o.next
            } while (o !== r)
        }
        Ht(e, t, n);
        break;
    case 1:
        if (!Ie && (Yn(n, t),
        r = n.stateNode,
        typeof r.componentWillUnmount == "function"))
            try {
                r.props = n.memoizedProps,
                r.state = n.memoizedState,
                r.componentWillUnmount()
            } catch (a) {
                ve(n, t, a)
            }
        Ht(e, t, n);
        break;
    case 21:
        Ht(e, t, n);
        break;
    case 22:
        n.mode & 1 ? (Ie = (r = Ie) || n.memoizedState !== null,
        Ht(e, t, n),
        Ie = r) : Ht(e, t, n);
        break;
    default:
        Ht(e, t, n)
    }
}
function xc(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new Rv),
        t.forEach(function(r) {
            var o = Iv.bind(null, e, r);
            n.has(r) || (n.add(r),
            r.then(o, o))
        })
    }
}
function ct(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var o = n[r];
            try {
                var l = e
                  , i = t
                  , a = i;
                e: for (; a !== null; ) {
                    switch (a.tag) {
                    case 5:
                        Le = a.stateNode,
                        ft = !1;
                        break e;
                    case 3:
                        Le = a.stateNode.containerInfo,
                        ft = !0;
                        break e;
                    case 4:
                        Le = a.stateNode.containerInfo,
                        ft = !0;
                        break e
                    }
                    a = a.return
                }
                if (Le === null)
                    throw Error(N(160));
                rp(l, i, o),
                Le = null,
                ft = !1;
                var s = o.alternate;
                s !== null && (s.return = null),
                o.return = null
            } catch (u) {
                ve(o, t, u)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; )
            op(t, e),
            t = t.sibling
}
function op(e, t) {
    var n = e.alternate
      , r = e.flags;
    switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (ct(t, e),
        wt(e),
        r & 4) {
            try {
                Yr(3, e, e.return),
                Wl(3, e)
            } catch (y) {
                ve(e, e.return, y)
            }
            try {
                Yr(5, e, e.return)
            } catch (y) {
                ve(e, e.return, y)
            }
        }
        break;
    case 1:
        ct(t, e),
        wt(e),
        r & 512 && n !== null && Yn(n, n.return);
        break;
    case 5:
        if (ct(t, e),
        wt(e),
        r & 512 && n !== null && Yn(n, n.return),
        e.flags & 32) {
            var o = e.stateNode;
            try {
                Zr(o, "")
            } catch (y) {
                ve(e, e.return, y)
            }
        }
        if (r & 4 && (o = e.stateNode,
        o != null)) {
            var l = e.memoizedProps
              , i = n !== null ? n.memoizedProps : l
              , a = e.type
              , s = e.updateQueue;
            if (e.updateQueue = null,
            s !== null)
                try {
                    a === "input" && l.type === "radio" && l.name != null && kd(o, l),
                    ya(a, i);
                    var u = ya(a, l);
                    for (i = 0; i < s.length; i += 2) {
                        var d = s[i]
                          , m = s[i + 1];
                        d === "style" ? Ld(o, m) : d === "dangerouslySetInnerHTML" ? Nd(o, m) : d === "children" ? Zr(o, m) : cs(o, d, m, u)
                    }
                    switch (a) {
                    case "input":
                        pa(o, l);
                        break;
                    case "textarea":
                        jd(o, l);
                        break;
                    case "select":
                        var g = o._wrapperState.wasMultiple;
                        o._wrapperState.wasMultiple = !!l.multiple;
                        var w = l.value;
                        w != null ? qn(o, !!l.multiple, w, !1) : g !== !!l.multiple && (l.defaultValue != null ? qn(o, !!l.multiple, l.defaultValue, !0) : qn(o, !!l.multiple, l.multiple ? [] : "", !1))
                    }
                    o[ao] = l
                } catch (y) {
                    ve(e, e.return, y)
                }
        }
        break;
    case 6:
        if (ct(t, e),
        wt(e),
        r & 4) {
            if (e.stateNode === null)
                throw Error(N(162));
            o = e.stateNode,
            l = e.memoizedProps;
            try {
                o.nodeValue = l
            } catch (y) {
                ve(e, e.return, y)
            }
        }
        break;
    case 3:
        if (ct(t, e),
        wt(e),
        r & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
                no(t.containerInfo)
            } catch (y) {
                ve(e, e.return, y)
            }
        break;
    case 4:
        ct(t, e),
        wt(e);
        break;
    case 13:
        ct(t, e),
        wt(e),
        o = e.child,
        o.flags & 8192 && (l = o.memoizedState !== null,
        o.stateNode.isHidden = l,
        !l || o.alternate !== null && o.alternate.memoizedState !== null || (Vs = we())),
        r & 4 && xc(e);
        break;
    case 22:
        if (d = n !== null && n.memoizedState !== null,
        e.mode & 1 ? (Ie = (u = Ie) || d,
        ct(t, e),
        Ie = u) : ct(t, e),
        wt(e),
        r & 8192) {
            if (u = e.memoizedState !== null,
            (e.stateNode.isHidden = u) && !d && e.mode & 1)
                for (M = e,
                d = e.child; d !== null; ) {
                    for (m = M = d; M !== null; ) {
                        switch (g = M,
                        w = g.child,
                        g.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            Yr(4, g, g.return);
                            break;
                        case 1:
                            Yn(g, g.return);
                            var S = g.stateNode;
                            if (typeof S.componentWillUnmount == "function") {
                                r = g,
                                n = g.return;
                                try {
                                    t = r,
                                    S.props = t.memoizedProps,
                                    S.state = t.memoizedState,
                                    S.componentWillUnmount()
                                } catch (y) {
                                    ve(r, n, y)
                                }
                            }
                            break;
                        case 5:
                            Yn(g, g.return);
                            break;
                        case 22:
                            if (g.memoizedState !== null) {
                                Cc(m);
                                continue
                            }
                        }
                        w !== null ? (w.return = g,
                        M = w) : Cc(m)
                    }
                    d = d.sibling
                }
            e: for (d = null,
            m = e; ; ) {
                if (m.tag === 5) {
                    if (d === null) {
                        d = m;
                        try {
                            o = m.stateNode,
                            u ? (l = o.style,
                            typeof l.setProperty == "function" ? l.setProperty("display", "none", "important") : l.display = "none") : (a = m.stateNode,
                            s = m.memoizedProps.style,
                            i = s != null && s.hasOwnProperty("display") ? s.display : null,
                            a.style.display = Pd("display", i))
                        } catch (y) {
                            ve(e, e.return, y)
                        }
                    }
                } else if (m.tag === 6) {
                    if (d === null)
                        try {
                            m.stateNode.nodeValue = u ? "" : m.memoizedProps
                        } catch (y) {
                            ve(e, e.return, y)
                        }
                } else if ((m.tag !== 22 && m.tag !== 23 || m.memoizedState === null || m === e) && m.child !== null) {
                    m.child.return = m,
                    m = m.child;
                    continue
                }
                if (m === e)
                    break e;
                for (; m.sibling === null; ) {
                    if (m.return === null || m.return === e)
                        break e;
                    d === m && (d = null),
                    m = m.return
                }
                d === m && (d = null),
                m.sibling.return = m.return,
                m = m.sibling
            }
        }
        break;
    case 19:
        ct(t, e),
        wt(e),
        r & 4 && xc(e);
        break;
    case 21:
        break;
    default:
        ct(t, e),
        wt(e)
    }
}
function wt(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (np(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(N(160))
            }
            switch (r.tag) {
            case 5:
                var o = r.stateNode;
                r.flags & 32 && (Zr(o, ""),
                r.flags &= -33);
                var l = Sc(e);
                Ga(e, l, o);
                break;
            case 3:
            case 4:
                var i = r.stateNode.containerInfo
                  , a = Sc(e);
                Ya(e, a, i);
                break;
            default:
                throw Error(N(161))
            }
        } catch (s) {
            ve(e, e.return, s)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}
function Pv(e, t, n) {
    M = e,
    lp(e)
}
function lp(e, t, n) {
    for (var r = (e.mode & 1) !== 0; M !== null; ) {
        var o = M
          , l = o.child;
        if (o.tag === 22 && r) {
            var i = o.memoizedState !== null || Wo;
            if (!i) {
                var a = o.alternate
                  , s = a !== null && a.memoizedState !== null || Ie;
                a = Wo;
                var u = Ie;
                if (Wo = i,
                (Ie = s) && !u)
                    for (M = o; M !== null; )
                        i = M,
                        s = i.child,
                        i.tag === 22 && i.memoizedState !== null ? kc(o) : s !== null ? (s.return = i,
                        M = s) : kc(o);
                for (; l !== null; )
                    M = l,
                    lp(l),
                    l = l.sibling;
                M = o,
                Wo = a,
                Ie = u
            }
            Ec(e)
        } else
            o.subtreeFlags & 8772 && l !== null ? (l.return = o,
            M = l) : Ec(e)
    }
}
function Ec(e) {
    for (; M !== null; ) {
        var t = M;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        Ie || Wl(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !Ie)
                            if (n === null)
                                r.componentDidMount();
                            else {
                                var o = t.elementType === t.type ? n.memoizedProps : dt(t.type, n.memoizedProps);
                                r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var l = t.updateQueue;
                        l !== null && lc(t, l, r);
                        break;
                    case 3:
                        var i = t.updateQueue;
                        if (i !== null) {
                            if (n = null,
                            t.child !== null)
                                switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                                }
                            lc(t, i, n)
                        }
                        break;
                    case 5:
                        var a = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = a;
                            var s = t.memoizedProps;
                            switch (t.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                s.autoFocus && n.focus();
                                break;
                            case "img":
                                s.src && (n.src = s.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var u = t.alternate;
                            if (u !== null) {
                                var d = u.memoizedState;
                                if (d !== null) {
                                    var m = d.dehydrated;
                                    m !== null && no(m)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(N(163))
                    }
                Ie || t.flags & 512 && Ka(t)
            } catch (g) {
                ve(t, t.return, g)
            }
        }
        if (t === e) {
            M = null;
            break
        }
        if (n = t.sibling,
        n !== null) {
            n.return = t.return,
            M = n;
            break
        }
        M = t.return
    }
}
function Cc(e) {
    for (; M !== null; ) {
        var t = M;
        if (t === e) {
            M = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return,
            M = n;
            break
        }
        M = t.return
    }
}
function kc(e) {
    for (; M !== null; ) {
        var t = M;
        try {
            switch (t.tag) {
            case 0:
            case 11:
            case 15:
                var n = t.return;
                try {
                    Wl(4, t)
                } catch (s) {
                    ve(t, n, s)
                }
                break;
            case 1:
                var r = t.stateNode;
                if (typeof r.componentDidMount == "function") {
                    var o = t.return;
                    try {
                        r.componentDidMount()
                    } catch (s) {
                        ve(t, o, s)
                    }
                }
                var l = t.return;
                try {
                    Ka(t)
                } catch (s) {
                    ve(t, l, s)
                }
                break;
            case 5:
                var i = t.return;
                try {
                    Ka(t)
                } catch (s) {
                    ve(t, i, s)
                }
            }
        } catch (s) {
            ve(t, t.return, s)
        }
        if (t === e) {
            M = null;
            break
        }
        var a = t.sibling;
        if (a !== null) {
            a.return = t.return,
            M = a;
            break
        }
        M = t.return
    }
}
var Lv = Math.ceil
  , Cl = Ft.ReactCurrentDispatcher
  , Bs = Ft.ReactCurrentOwner
  , ot = Ft.ReactCurrentBatchConfig
  , Y = 0
  , Ne = null
  , Ee = null
  , _e = 0
  , Ye = 0
  , Gn = cn(0)
  , je = 0
  , ho = null
  , Rn = 0
  , Vl = 0
  , Ws = 0
  , Gr = null
  , We = null
  , Vs = 0
  , cr = 1 / 0
  , Pt = null
  , kl = !1
  , Xa = null
  , nn = null
  , Vo = !1
  , Jt = null
  , jl = 0
  , Xr = 0
  , Ja = null
  , tl = -1
  , nl = 0;
function Fe() {
    return Y & 6 ? we() : tl !== -1 ? tl : tl = we()
}
function rn(e) {
    return e.mode & 1 ? Y & 2 && _e !== 0 ? _e & -_e : fv.transition !== null ? (nl === 0 && (nl = Bd()),
    nl) : (e = Z,
    e !== 0 || (e = window.event,
    e = e === void 0 ? 16 : Gd(e.type)),
    e) : 1
}
function vt(e, t, n, r) {
    if (50 < Xr)
        throw Xr = 0,
        Ja = null,
        Error(N(185));
    yo(e, n, r),
    (!(Y & 2) || e !== Ne) && (e === Ne && (!(Y & 2) && (Vl |= n),
    je === 4 && Gt(e, _e)),
    Ke(e, r),
    n === 1 && Y === 0 && !(t.mode & 1) && (cr = we() + 500,
    Fl && dn()))
}
function Ke(e, t) {
    var n = e.callbackNode;
    fm(e, t);
    var r = sl(e, e === Ne ? _e : 0);
    if (r === 0)
        n !== null && Mu(n),
        e.callbackNode = null,
        e.callbackPriority = 0;
    else if (t = r & -r,
    e.callbackPriority !== t) {
        if (n != null && Mu(n),
        t === 1)
            e.tag === 0 ? dv(jc.bind(null, e)) : hf(jc.bind(null, e)),
            av(function() {
                !(Y & 6) && dn()
            }),
            n = null;
        else {
            switch (Wd(r)) {
            case 1:
                n = ms;
                break;
            case 4:
                n = Fd;
                break;
            case 16:
                n = al;
                break;
            case 536870912:
                n = Ad;
                break;
            default:
                n = al
            }
            n = pp(n, ip.bind(null, e))
        }
        e.callbackPriority = t,
        e.callbackNode = n
    }
}
function ip(e, t) {
    if (tl = -1,
    nl = 0,
    Y & 6)
        throw Error(N(327));
    var n = e.callbackNode;
    if (nr() && e.callbackNode !== n)
        return null;
    var r = sl(e, e === Ne ? _e : 0);
    if (r === 0)
        return null;
    if (r & 30 || r & e.expiredLanes || t)
        t = Rl(e, r);
    else {
        t = r;
        var o = Y;
        Y |= 2;
        var l = sp();
        (Ne !== e || _e !== t) && (Pt = null,
        cr = we() + 500,
        xn(e, t));
        do
            try {
                Tv();
                break
            } catch (a) {
                ap(e, a)
            }
        while (1);
        Ps(),
        Cl.current = l,
        Y = o,
        Ee !== null ? t = 0 : (Ne = null,
        _e = 0,
        t = je)
    }
    if (t !== 0) {
        if (t === 2 && (o = Ca(e),
        o !== 0 && (r = o,
        t = qa(e, o))),
        t === 1)
            throw n = ho,
            xn(e, 0),
            Gt(e, r),
            Ke(e, we()),
            n;
        if (t === 6)
            Gt(e, r);
        else {
            if (o = e.current.alternate,
            !(r & 30) && !_v(o) && (t = Rl(e, r),
            t === 2 && (l = Ca(e),
            l !== 0 && (r = l,
            t = qa(e, l))),
            t === 1))
                throw n = ho,
                xn(e, 0),
                Gt(e, r),
                Ke(e, we()),
                n;
            switch (e.finishedWork = o,
            e.finishedLanes = r,
            t) {
            case 0:
            case 1:
                throw Error(N(345));
            case 2:
                vn(e, We, Pt);
                break;
            case 3:
                if (Gt(e, r),
                (r & 130023424) === r && (t = Vs + 500 - we(),
                10 < t)) {
                    if (sl(e, 0) !== 0)
                        break;
                    if (o = e.suspendedLanes,
                    (o & r) !== r) {
                        Fe(),
                        e.pingedLanes |= e.suspendedLanes & o;
                        break
                    }
                    e.timeoutHandle = Da(vn.bind(null, e, We, Pt), t);
                    break
                }
                vn(e, We, Pt);
                break;
            case 4:
                if (Gt(e, r),
                (r & 4194240) === r)
                    break;
                for (t = e.eventTimes,
                o = -1; 0 < r; ) {
                    var i = 31 - mt(r);
                    l = 1 << i,
                    i = t[i],
                    i > o && (o = i),
                    r &= ~l
                }
                if (r = o,
                r = we() - r,
                r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Lv(r / 1960)) - r,
                10 < r) {
                    e.timeoutHandle = Da(vn.bind(null, e, We, Pt), r);
                    break
                }
                vn(e, We, Pt);
                break;
            case 5:
                vn(e, We, Pt);
                break;
            default:
                throw Error(N(329))
            }
        }
    }
    return Ke(e, we()),
    e.callbackNode === n ? ip.bind(null, e) : null
}
function qa(e, t) {
    var n = Gr;
    return e.current.memoizedState.isDehydrated && (xn(e, t).flags |= 256),
    e = Rl(e, t),
    e !== 2 && (t = We,
    We = n,
    t !== null && Za(t)),
    e
}
function Za(e) {
    We === null ? We = e : We.push.apply(We, e)
}
function _v(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores,
            n !== null))
                for (var r = 0; r < n.length; r++) {
                    var o = n[r]
                      , l = o.getSnapshot;
                    o = o.value;
                    try {
                        if (!gt(l(), o))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child,
        t.subtreeFlags & 16384 && n !== null)
            n.return = t,
            t = n;
        else {
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return !0;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
    }
    return !0
}
function Gt(e, t) {
    for (t &= ~Ws,
    t &= ~Vl,
    e.suspendedLanes |= t,
    e.pingedLanes &= ~t,
    e = e.expirationTimes; 0 < t; ) {
        var n = 31 - mt(t)
          , r = 1 << n;
        e[n] = -1,
        t &= ~r
    }
}
function jc(e) {
    if (Y & 6)
        throw Error(N(327));
    nr();
    var t = sl(e, 0);
    if (!(t & 1))
        return Ke(e, we()),
        null;
    var n = Rl(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = Ca(e);
        r !== 0 && (t = r,
        n = qa(e, r))
    }
    if (n === 1)
        throw n = ho,
        xn(e, 0),
        Gt(e, t),
        Ke(e, we()),
        n;
    if (n === 6)
        throw Error(N(345));
    return e.finishedWork = e.current.alternate,
    e.finishedLanes = t,
    vn(e, We, Pt),
    Ke(e, we()),
    null
}
function Hs(e, t) {
    var n = Y;
    Y |= 1;
    try {
        return e(t)
    } finally {
        Y = n,
        Y === 0 && (cr = we() + 500,
        Fl && dn())
    }
}
function Nn(e) {
    Jt !== null && Jt.tag === 0 && !(Y & 6) && nr();
    var t = Y;
    Y |= 1;
    var n = ot.transition
      , r = Z;
    try {
        if (ot.transition = null,
        Z = 1,
        e)
            return e()
    } finally {
        Z = r,
        ot.transition = n,
        Y = t,
        !(Y & 6) && dn()
    }
}
function Qs() {
    Ye = Gn.current,
    ae(Gn)
}
function xn(e, t) {
    e.finishedWork = null,
    e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1,
    iv(n)),
    Ee !== null)
        for (n = Ee.return; n !== null; ) {
            var r = n;
            switch (js(r),
            r.tag) {
            case 1:
                r = r.type.childContextTypes,
                r != null && pl();
                break;
            case 3:
                sr(),
                ae(He),
                ae($e),
                Os();
                break;
            case 5:
                Ms(r);
                break;
            case 4:
                sr();
                break;
            case 13:
                ae(pe);
                break;
            case 19:
                ae(pe);
                break;
            case 10:
                Ls(r.type._context);
                break;
            case 22:
            case 23:
                Qs()
            }
            n = n.return
        }
    if (Ne = e,
    Ee = e = on(e.current, null),
    _e = Ye = t,
    je = 0,
    ho = null,
    Ws = Vl = Rn = 0,
    We = Gr = null,
    yn !== null) {
        for (t = 0; t < yn.length; t++)
            if (n = yn[t],
            r = n.interleaved,
            r !== null) {
                n.interleaved = null;
                var o = r.next
                  , l = n.pending;
                if (l !== null) {
                    var i = l.next;
                    l.next = o,
                    r.next = i
                }
                n.pending = r
            }
        yn = null
    }
    return e
}
function ap(e, t) {
    do {
        var n = Ee;
        try {
            if (Ps(),
            Zo.current = El,
            xl) {
                for (var r = he.memoizedState; r !== null; ) {
                    var o = r.queue;
                    o !== null && (o.pending = null),
                    r = r.next
                }
                xl = !1
            }
            if (jn = 0,
            Re = ke = he = null,
            Kr = !1,
            co = 0,
            Bs.current = null,
            n === null || n.return === null) {
                je = 1,
                ho = t,
                Ee = null;
                break
            }
            e: {
                var l = e
                  , i = n.return
                  , a = n
                  , s = t;
                if (t = _e,
                a.flags |= 32768,
                s !== null && typeof s == "object" && typeof s.then == "function") {
                    var u = s
                      , d = a
                      , m = d.tag;
                    if (!(d.mode & 1) && (m === 0 || m === 11 || m === 15)) {
                        var g = d.alternate;
                        g ? (d.updateQueue = g.updateQueue,
                        d.memoizedState = g.memoizedState,
                        d.lanes = g.lanes) : (d.updateQueue = null,
                        d.memoizedState = null)
                    }
                    var w = fc(i);
                    if (w !== null) {
                        w.flags &= -257,
                        pc(w, i, a, l, t),
                        w.mode & 1 && dc(l, u, t),
                        t = w,
                        s = u;
                        var S = t.updateQueue;
                        if (S === null) {
                            var y = new Set;
                            y.add(s),
                            t.updateQueue = y
                        } else
                            S.add(s);
                        break e
                    } else {
                        if (!(t & 1)) {
                            dc(l, u, t),
                            Ks();
                            break e
                        }
                        s = Error(N(426))
                    }
                } else if (ue && a.mode & 1) {
                    var k = fc(i);
                    if (k !== null) {
                        !(k.flags & 65536) && (k.flags |= 256),
                        pc(k, i, a, l, t),
                        Rs(ur(s, a));
                        break e
                    }
                }
                l = s = ur(s, a),
                je !== 4 && (je = 2),
                Gr === null ? Gr = [l] : Gr.push(l),
                l = i;
                do {
                    switch (l.tag) {
                    case 3:
                        l.flags |= 65536,
                        t &= -t,
                        l.lanes |= t;
                        var h = Hf(l, s, t);
                        oc(l, h);
                        break e;
                    case 1:
                        a = s;
                        var f = l.type
                          , v = l.stateNode;
                        if (!(l.flags & 128) && (typeof f.getDerivedStateFromError == "function" || v !== null && typeof v.componentDidCatch == "function" && (nn === null || !nn.has(v)))) {
                            l.flags |= 65536,
                            t &= -t,
                            l.lanes |= t;
                            var p = Qf(l, a, t);
                            oc(l, p);
                            break e
                        }
                    }
                    l = l.return
                } while (l !== null)
            }
            cp(n)
        } catch (j) {
            t = j,
            Ee === n && n !== null && (Ee = n = n.return);
            continue
        }
        break
    } while (1)
}
function sp() {
    var e = Cl.current;
    return Cl.current = El,
    e === null ? El : e
}
function Ks() {
    (je === 0 || je === 3 || je === 2) && (je = 4),
    Ne === null || !(Rn & 268435455) && !(Vl & 268435455) || Gt(Ne, _e)
}
function Rl(e, t) {
    var n = Y;
    Y |= 2;
    var r = sp();
    (Ne !== e || _e !== t) && (Pt = null,
    xn(e, t));
    do
        try {
            Dv();
            break
        } catch (o) {
            ap(e, o)
        }
    while (1);
    if (Ps(),
    Y = n,
    Cl.current = r,
    Ee !== null)
        throw Error(N(261));
    return Ne = null,
    _e = 0,
    je
}
function Dv() {
    for (; Ee !== null; )
        up(Ee)
}
function Tv() {
    for (; Ee !== null && !rm(); )
        up(Ee)
}
function up(e) {
    var t = fp(e.alternate, e, Ye);
    e.memoizedProps = e.pendingProps,
    t === null ? cp(e) : Ee = t,
    Bs.current = null
}
function cp(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return,
        t.flags & 32768) {
            if (n = jv(n, t),
            n !== null) {
                n.flags &= 32767,
                Ee = n;
                return
            }
            if (e !== null)
                e.flags |= 32768,
                e.subtreeFlags = 0,
                e.deletions = null;
            else {
                je = 6,
                Ee = null;
                return
            }
        } else if (n = kv(n, t, Ye),
        n !== null) {
            Ee = n;
            return
        }
        if (t = t.sibling,
        t !== null) {
            Ee = t;
            return
        }
        Ee = t = e
    } while (t !== null);
    je === 0 && (je = 5)
}
function vn(e, t, n) {
    var r = Z
      , o = ot.transition;
    try {
        ot.transition = null,
        Z = 1,
        Mv(e, t, n, r)
    } finally {
        ot.transition = o,
        Z = r
    }
    return null
}
function Mv(e, t, n, r) {
    do
        nr();
    while (Jt !== null);
    if (Y & 6)
        throw Error(N(327));
    n = e.finishedWork;
    var o = e.finishedLanes;
    if (n === null)
        return null;
    if (e.finishedWork = null,
    e.finishedLanes = 0,
    n === e.current)
        throw Error(N(177));
    e.callbackNode = null,
    e.callbackPriority = 0;
    var l = n.lanes | n.childLanes;
    if (pm(e, l),
    e === Ne && (Ee = Ne = null,
    _e = 0),
    !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Vo || (Vo = !0,
    pp(al, function() {
        return nr(),
        null
    })),
    l = (n.flags & 15990) !== 0,
    n.subtreeFlags & 15990 || l) {
        l = ot.transition,
        ot.transition = null;
        var i = Z;
        Z = 1;
        var a = Y;
        Y |= 4,
        Bs.current = null,
        Nv(e, n),
        op(n, e),
        bm(La),
        ul = !!Pa,
        La = Pa = null,
        e.current = n,
        Pv(n),
        om(),
        Y = a,
        Z = i,
        ot.transition = l
    } else
        e.current = n;
    if (Vo && (Vo = !1,
    Jt = e,
    jl = o),
    l = e.pendingLanes,
    l === 0 && (nn = null),
    am(n.stateNode),
    Ke(e, we()),
    t !== null)
        for (r = e.onRecoverableError,
        n = 0; n < t.length; n++)
            o = t[n],
            r(o.value, {
                componentStack: o.stack,
                digest: o.digest
            });
    if (kl)
        throw kl = !1,
        e = Xa,
        Xa = null,
        e;
    return jl & 1 && e.tag !== 0 && nr(),
    l = e.pendingLanes,
    l & 1 ? e === Ja ? Xr++ : (Xr = 0,
    Ja = e) : Xr = 0,
    dn(),
    null
}
function nr() {
    if (Jt !== null) {
        var e = Wd(jl)
          , t = ot.transition
          , n = Z;
        try {
            if (ot.transition = null,
            Z = 16 > e ? 16 : e,
            Jt === null)
                var r = !1;
            else {
                if (e = Jt,
                Jt = null,
                jl = 0,
                Y & 6)
                    throw Error(N(331));
                var o = Y;
                for (Y |= 4,
                M = e.current; M !== null; ) {
                    var l = M
                      , i = l.child;
                    if (M.flags & 16) {
                        var a = l.deletions;
                        if (a !== null) {
                            for (var s = 0; s < a.length; s++) {
                                var u = a[s];
                                for (M = u; M !== null; ) {
                                    var d = M;
                                    switch (d.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Yr(8, d, l)
                                    }
                                    var m = d.child;
                                    if (m !== null)
                                        m.return = d,
                                        M = m;
                                    else
                                        for (; M !== null; ) {
                                            d = M;
                                            var g = d.sibling
                                              , w = d.return;
                                            if (tp(d),
                                            d === u) {
                                                M = null;
                                                break
                                            }
                                            if (g !== null) {
                                                g.return = w,
                                                M = g;
                                                break
                                            }
                                            M = w
                                        }
                                }
                            }
                            var S = l.alternate;
                            if (S !== null) {
                                var y = S.child;
                                if (y !== null) {
                                    S.child = null;
                                    do {
                                        var k = y.sibling;
                                        y.sibling = null,
                                        y = k
                                    } while (y !== null)
                                }
                            }
                            M = l
                        }
                    }
                    if (l.subtreeFlags & 2064 && i !== null)
                        i.return = l,
                        M = i;
                    else
                        e: for (; M !== null; ) {
                            if (l = M,
                            l.flags & 2048)
                                switch (l.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Yr(9, l, l.return)
                                }
                            var h = l.sibling;
                            if (h !== null) {
                                h.return = l.return,
                                M = h;
                                break e
                            }
                            M = l.return
                        }
                }
                var f = e.current;
                for (M = f; M !== null; ) {
                    i = M;
                    var v = i.child;
                    if (i.subtreeFlags & 2064 && v !== null)
                        v.return = i,
                        M = v;
                    else
                        e: for (i = f; M !== null; ) {
                            if (a = M,
                            a.flags & 2048)
                                try {
                                    switch (a.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Wl(9, a)
                                    }
                                } catch (j) {
                                    ve(a, a.return, j)
                                }
                            if (a === i) {
                                M = null;
                                break e
                            }
                            var p = a.sibling;
                            if (p !== null) {
                                p.return = a.return,
                                M = p;
                                break e
                            }
                            M = a.return
                        }
                }
                if (Y = o,
                dn(),
                Et && typeof Et.onPostCommitFiberRoot == "function")
                    try {
                        Et.onPostCommitFiberRoot(Ol, e)
                    } catch {}
                r = !0
            }
            return r
        } finally {
            Z = n,
            ot.transition = t
        }
    }
    return !1
}
function Rc(e, t, n) {
    t = ur(n, t),
    t = Hf(e, t, 1),
    e = tn(e, t, 1),
    t = Fe(),
    e !== null && (yo(e, 1, t),
    Ke(e, t))
}
function ve(e, t, n) {
    if (e.tag === 3)
        Rc(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                Rc(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (nn === null || !nn.has(r))) {
                    e = ur(n, e),
                    e = Qf(t, e, 1),
                    t = tn(t, e, 1),
                    e = Fe(),
                    t !== null && (yo(t, 1, e),
                    Ke(t, e));
                    break
                }
            }
            t = t.return
        }
}
function Ov(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
    t = Fe(),
    e.pingedLanes |= e.suspendedLanes & n,
    Ne === e && (_e & n) === n && (je === 4 || je === 3 && (_e & 130023424) === _e && 500 > we() - Vs ? xn(e, 0) : Ws |= n),
    Ke(e, t)
}
function dp(e, t) {
    t === 0 && (e.mode & 1 ? (t = Mo,
    Mo <<= 1,
    !(Mo & 130023424) && (Mo = 4194304)) : t = 1);
    var n = Fe();
    e = $t(e, t),
    e !== null && (yo(e, t, n),
    Ke(e, n))
}
function zv(e) {
    var t = e.memoizedState
      , n = 0;
    t !== null && (n = t.retryLane),
    dp(e, n)
}
function Iv(e, t) {
    var n = 0;
    switch (e.tag) {
    case 13:
        var r = e.stateNode
          , o = e.memoizedState;
        o !== null && (n = o.retryLane);
        break;
    case 19:
        r = e.stateNode;
        break;
    default:
        throw Error(N(314))
    }
    r !== null && r.delete(t),
    dp(e, n)
}
var fp;
fp = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || He.current)
            Ve = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return Ve = !1,
                Cv(e, t, n);
            Ve = !!(e.flags & 131072)
        }
    else
        Ve = !1,
        ue && t.flags & 1048576 && mf(t, vl, t.index);
    switch (t.lanes = 0,
    t.tag) {
    case 2:
        var r = t.type;
        el(e, t),
        e = t.pendingProps;
        var o = lr(t, $e.current);
        tr(t, n),
        o = Is(null, t, r, e, o, n);
        var l = $s();
        return t.flags |= 1,
        typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1,
        t.memoizedState = null,
        t.updateQueue = null,
        Qe(r) ? (l = !0,
        hl(t)) : l = !1,
        t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null,
        Ds(t),
        o.updater = Al,
        t.stateNode = o,
        o._reactInternals = t,
        Ua(t, r, e, n),
        t = Ba(null, t, r, !0, l, n)) : (t.tag = 0,
        ue && l && ks(t),
        Ue(null, t, o, n),
        t = t.child),
        t;
    case 16:
        r = t.elementType;
        e: {
            switch (el(e, t),
            e = t.pendingProps,
            o = r._init,
            r = o(r._payload),
            t.type = r,
            o = t.tag = Uv(r),
            e = dt(r, e),
            o) {
            case 0:
                t = Aa(null, t, r, e, n);
                break e;
            case 1:
                t = vc(null, t, r, e, n);
                break e;
            case 11:
                t = hc(null, t, r, e, n);
                break e;
            case 14:
                t = mc(null, t, r, dt(r.type, e), n);
                break e
            }
            throw Error(N(306, r, ""))
        }
        return t;
    case 0:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : dt(r, o),
        Aa(e, t, r, o, n);
    case 1:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : dt(r, o),
        vc(e, t, r, o, n);
    case 3:
        e: {
            if (Xf(t),
            e === null)
                throw Error(N(387));
            r = t.pendingProps,
            l = t.memoizedState,
            o = l.element,
            wf(e, t),
            wl(t, r, null, n);
            var i = t.memoizedState;
            if (r = i.element,
            l.isDehydrated)
                if (l = {
                    element: r,
                    isDehydrated: !1,
                    cache: i.cache,
                    pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                    transitions: i.transitions
                },
                t.updateQueue.baseState = l,
                t.memoizedState = l,
                t.flags & 256) {
                    o = ur(Error(N(423)), t),
                    t = gc(e, t, r, n, o);
                    break e
                } else if (r !== o) {
                    o = ur(Error(N(424)), t),
                    t = gc(e, t, r, n, o);
                    break e
                } else
                    for (Ge = en(t.stateNode.containerInfo.firstChild),
                    Xe = t,
                    ue = !0,
                    ht = null,
                    n = Cf(t, null, r, n),
                    t.child = n; n; )
                        n.flags = n.flags & -3 | 4096,
                        n = n.sibling;
            else {
                if (ir(),
                r === o) {
                    t = Ut(e, t, n);
                    break e
                }
                Ue(e, t, r, n)
            }
            t = t.child
        }
        return t;
    case 5:
        return kf(t),
        e === null && za(t),
        r = t.type,
        o = t.pendingProps,
        l = e !== null ? e.memoizedProps : null,
        i = o.children,
        _a(r, o) ? i = null : l !== null && _a(r, l) && (t.flags |= 32),
        Gf(e, t),
        Ue(e, t, i, n),
        t.child;
    case 6:
        return e === null && za(t),
        null;
    case 13:
        return Jf(e, t, n);
    case 4:
        return Ts(t, t.stateNode.containerInfo),
        r = t.pendingProps,
        e === null ? t.child = ar(t, null, r, n) : Ue(e, t, r, n),
        t.child;
    case 11:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : dt(r, o),
        hc(e, t, r, o, n);
    case 7:
        return Ue(e, t, t.pendingProps, n),
        t.child;
    case 8:
        return Ue(e, t, t.pendingProps.children, n),
        t.child;
    case 12:
        return Ue(e, t, t.pendingProps.children, n),
        t.child;
    case 10:
        e: {
            if (r = t.type._context,
            o = t.pendingProps,
            l = t.memoizedProps,
            i = o.value,
            oe(gl, r._currentValue),
            r._currentValue = i,
            l !== null)
                if (gt(l.value, i)) {
                    if (l.children === o.children && !He.current) {
                        t = Ut(e, t, n);
                        break e
                    }
                } else
                    for (l = t.child,
                    l !== null && (l.return = t); l !== null; ) {
                        var a = l.dependencies;
                        if (a !== null) {
                            i = l.child;
                            for (var s = a.firstContext; s !== null; ) {
                                if (s.context === r) {
                                    if (l.tag === 1) {
                                        s = Mt(-1, n & -n),
                                        s.tag = 2;
                                        var u = l.updateQueue;
                                        if (u !== null) {
                                            u = u.shared;
                                            var d = u.pending;
                                            d === null ? s.next = s : (s.next = d.next,
                                            d.next = s),
                                            u.pending = s
                                        }
                                    }
                                    l.lanes |= n,
                                    s = l.alternate,
                                    s !== null && (s.lanes |= n),
                                    Ia(l.return, n, t),
                                    a.lanes |= n;
                                    break
                                }
                                s = s.next
                            }
                        } else if (l.tag === 10)
                            i = l.type === t.type ? null : l.child;
                        else if (l.tag === 18) {
                            if (i = l.return,
                            i === null)
                                throw Error(N(341));
                            i.lanes |= n,
                            a = i.alternate,
                            a !== null && (a.lanes |= n),
                            Ia(i, n, t),
                            i = l.sibling
                        } else
                            i = l.child;
                        if (i !== null)
                            i.return = l;
                        else
                            for (i = l; i !== null; ) {
                                if (i === t) {
                                    i = null;
                                    break
                                }
                                if (l = i.sibling,
                                l !== null) {
                                    l.return = i.return,
                                    i = l;
                                    break
                                }
                                i = i.return
                            }
                        l = i
                    }
            Ue(e, t, o.children, n),
            t = t.child
        }
        return t;
    case 9:
        return o = t.type,
        r = t.pendingProps.children,
        tr(t, n),
        o = lt(o),
        r = r(o),
        t.flags |= 1,
        Ue(e, t, r, n),
        t.child;
    case 14:
        return r = t.type,
        o = dt(r, t.pendingProps),
        o = dt(r.type, o),
        mc(e, t, r, o, n);
    case 15:
        return Kf(e, t, t.type, t.pendingProps, n);
    case 17:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : dt(r, o),
        el(e, t),
        t.tag = 1,
        Qe(r) ? (e = !0,
        hl(t)) : e = !1,
        tr(t, n),
        xf(t, r, o),
        Ua(t, r, o, n),
        Ba(null, t, r, !0, e, n);
    case 19:
        return qf(e, t, n);
    case 22:
        return Yf(e, t, n)
    }
    throw Error(N(156, t.tag))
}
;
function pp(e, t) {
    return Ud(e, t)
}
function $v(e, t, n, r) {
    this.tag = e,
    this.key = n,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.ref = null,
    this.pendingProps = t,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = r,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function rt(e, t, n, r) {
    return new $v(e,t,n,r)
}
function Ys(e) {
    return e = e.prototype,
    !(!e || !e.isReactComponent)
}
function Uv(e) {
    if (typeof e == "function")
        return Ys(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof,
        e === fs)
            return 11;
        if (e === ps)
            return 14
    }
    return 2
}
function on(e, t) {
    var n = e.alternate;
    return n === null ? (n = rt(e.tag, t, e.key, e.mode),
    n.elementType = e.elementType,
    n.type = e.type,
    n.stateNode = e.stateNode,
    n.alternate = e,
    e.alternate = n) : (n.pendingProps = t,
    n.type = e.type,
    n.flags = 0,
    n.subtreeFlags = 0,
    n.deletions = null),
    n.flags = e.flags & 14680064,
    n.childLanes = e.childLanes,
    n.lanes = e.lanes,
    n.child = e.child,
    n.memoizedProps = e.memoizedProps,
    n.memoizedState = e.memoizedState,
    n.updateQueue = e.updateQueue,
    t = e.dependencies,
    n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    },
    n.sibling = e.sibling,
    n.index = e.index,
    n.ref = e.ref,
    n
}
function rl(e, t, n, r, o, l) {
    var i = 2;
    if (r = e,
    typeof e == "function")
        Ys(e) && (i = 1);
    else if (typeof e == "string")
        i = 5;
    else
        e: switch (e) {
        case Un:
            return En(n.children, o, l, t);
        case ds:
            i = 8,
            o |= 8;
            break;
        case sa:
            return e = rt(12, n, t, o | 2),
            e.elementType = sa,
            e.lanes = l,
            e;
        case ua:
            return e = rt(13, n, t, o),
            e.elementType = ua,
            e.lanes = l,
            e;
        case ca:
            return e = rt(19, n, t, o),
            e.elementType = ca,
            e.lanes = l,
            e;
        case xd:
            return Hl(n, o, l, t);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                case wd:
                    i = 10;
                    break e;
                case Sd:
                    i = 9;
                    break e;
                case fs:
                    i = 11;
                    break e;
                case ps:
                    i = 14;
                    break e;
                case Qt:
                    i = 16,
                    r = null;
                    break e
                }
            throw Error(N(130, e == null ? e : typeof e, ""))
        }
    return t = rt(i, n, t, o),
    t.elementType = e,
    t.type = r,
    t.lanes = l,
    t
}
function En(e, t, n, r) {
    return e = rt(7, e, r, t),
    e.lanes = n,
    e
}
function Hl(e, t, n, r) {
    return e = rt(22, e, r, t),
    e.elementType = xd,
    e.lanes = n,
    e.stateNode = {
        isHidden: !1
    },
    e
}
function Zi(e, t, n) {
    return e = rt(6, e, null, t),
    e.lanes = n,
    e
}
function bi(e, t, n) {
    return t = rt(4, e.children !== null ? e.children : [], e.key, t),
    t.lanes = n,
    t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    },
    t
}
function Fv(e, t, n, r, o) {
    this.tag = t,
    this.containerInfo = e,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = Mi(0),
    this.expirationTimes = Mi(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = Mi(0),
    this.identifierPrefix = r,
    this.onRecoverableError = o,
    this.mutableSourceEagerHydrationData = null
}
function Gs(e, t, n, r, o, l, i, a, s) {
    return e = new Fv(e,t,n,a,s),
    t === 1 ? (t = 1,
    l === !0 && (t |= 8)) : t = 0,
    l = rt(3, null, null, t),
    e.current = l,
    l.stateNode = e,
    l.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    },
    Ds(l),
    e
}
function Av(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: $n,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}
function hp(e) {
    if (!e)
        return an;
    e = e._reactInternals;
    e: {
        if (Dn(e) !== e || e.tag !== 1)
            throw Error(N(170));
        var t = e;
        do {
            switch (t.tag) {
            case 3:
                t = t.stateNode.context;
                break e;
            case 1:
                if (Qe(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                }
            }
            t = t.return
        } while (t !== null);
        throw Error(N(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (Qe(n))
            return pf(e, n, t)
    }
    return t
}
function mp(e, t, n, r, o, l, i, a, s) {
    return e = Gs(n, r, !0, e, o, l, i, a, s),
    e.context = hp(null),
    n = e.current,
    r = Fe(),
    o = rn(n),
    l = Mt(r, o),
    l.callback = t ?? null,
    tn(n, l, o),
    e.current.lanes = o,
    yo(e, o, r),
    Ke(e, r),
    e
}
function Ql(e, t, n, r) {
    var o = t.current
      , l = Fe()
      , i = rn(o);
    return n = hp(n),
    t.context === null ? t.context = n : t.pendingContext = n,
    t = Mt(l, i),
    t.payload = {
        element: e
    },
    r = r === void 0 ? null : r,
    r !== null && (t.callback = r),
    e = tn(o, t, i),
    e !== null && (vt(e, o, i, l),
    qo(e, o, i)),
    i
}
function Nl(e) {
    if (e = e.current,
    !e.child)
        return null;
    switch (e.child.tag) {
    case 5:
        return e.child.stateNode;
    default:
        return e.child.stateNode
    }
}
function Nc(e, t) {
    if (e = e.memoizedState,
    e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}
function Xs(e, t) {
    Nc(e, t),
    (e = e.alternate) && Nc(e, t)
}
function Bv() {
    return null
}
var vp = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
}
;
function Js(e) {
    this._internalRoot = e
}
Kl.prototype.render = Js.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
        throw Error(N(409));
    Ql(e, t, null, null)
}
;
Kl.prototype.unmount = Js.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Nn(function() {
            Ql(null, e, null, null)
        }),
        t[It] = null
    }
}
;
function Kl(e) {
    this._internalRoot = e
}
Kl.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = Qd();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < Yt.length && t !== 0 && t < Yt[n].priority; n++)
            ;
        Yt.splice(n, 0, e),
        n === 0 && Yd(e)
    }
}
;
function qs(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function Yl(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function Pc() {}
function Wv(e, t, n, r, o) {
    if (o) {
        if (typeof r == "function") {
            var l = r;
            r = function() {
                var u = Nl(i);
                l.call(u)
            }
        }
        var i = mp(t, r, e, 0, null, !1, !1, "", Pc);
        return e._reactRootContainer = i,
        e[It] = i.current,
        lo(e.nodeType === 8 ? e.parentNode : e),
        Nn(),
        i
    }
    for (; o = e.lastChild; )
        e.removeChild(o);
    if (typeof r == "function") {
        var a = r;
        r = function() {
            var u = Nl(s);
            a.call(u)
        }
    }
    var s = Gs(e, 0, !1, null, null, !1, !1, "", Pc);
    return e._reactRootContainer = s,
    e[It] = s.current,
    lo(e.nodeType === 8 ? e.parentNode : e),
    Nn(function() {
        Ql(t, s, n, r)
    }),
    s
}
function Gl(e, t, n, r, o) {
    var l = n._reactRootContainer;
    if (l) {
        var i = l;
        if (typeof o == "function") {
            var a = o;
            o = function() {
                var s = Nl(i);
                a.call(s)
            }
        }
        Ql(t, i, e, o)
    } else
        i = Wv(n, t, e, o, r);
    return Nl(i)
}
Vd = function(e) {
    switch (e.tag) {
    case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
            var n = Fr(t.pendingLanes);
            n !== 0 && (vs(t, n | 1),
            Ke(t, we()),
            !(Y & 6) && (cr = we() + 500,
            dn()))
        }
        break;
    case 13:
        Nn(function() {
            var r = $t(e, 1);
            if (r !== null) {
                var o = Fe();
                vt(r, e, 1, o)
            }
        }),
        Xs(e, 1)
    }
}
;
gs = function(e) {
    if (e.tag === 13) {
        var t = $t(e, 134217728);
        if (t !== null) {
            var n = Fe();
            vt(t, e, 134217728, n)
        }
        Xs(e, 134217728)
    }
}
;
Hd = function(e) {
    if (e.tag === 13) {
        var t = rn(e)
          , n = $t(e, t);
        if (n !== null) {
            var r = Fe();
            vt(n, e, t, r)
        }
        Xs(e, t)
    }
}
;
Qd = function() {
    return Z
}
;
Kd = function(e, t) {
    var n = Z;
    try {
        return Z = e,
        t()
    } finally {
        Z = n
    }
}
;
Sa = function(e, t, n) {
    switch (t) {
    case "input":
        if (pa(e, n),
        t = n.name,
        n.type === "radio" && t != null) {
            for (n = e; n.parentNode; )
                n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
            t = 0; t < n.length; t++) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                    var o = Ul(r);
                    if (!o)
                        throw Error(N(90));
                    Cd(r),
                    pa(r, o)
                }
            }
        }
        break;
    case "textarea":
        jd(e, n);
        break;
    case "select":
        t = n.value,
        t != null && qn(e, !!n.multiple, t, !1)
    }
}
;
Td = Hs;
Md = Nn;
var Vv = {
    usingClientEntryPoint: !1,
    Events: [So, Wn, Ul, _d, Dd, Hs]
}
  , Tr = {
    findFiberByHostInstance: gn,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom"
}
  , Hv = {
    bundleType: Tr.bundleType,
    version: Tr.version,
    rendererPackageName: Tr.rendererPackageName,
    rendererConfig: Tr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Ft.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
        return e = Id(e),
        e === null ? null : e.stateNode
    },
    findFiberByHostInstance: Tr.findFiberByHostInstance || Bv,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ho = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ho.isDisabled && Ho.supportsFiber)
        try {
            Ol = Ho.inject(Hv),
            Et = Ho
        } catch {}
}
qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Vv;
qe.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!qs(t))
        throw Error(N(200));
    return Av(e, t, null, n)
}
;
qe.createRoot = function(e, t) {
    if (!qs(e))
        throw Error(N(299));
    var n = !1
      , r = ""
      , o = vp;
    return t != null && (t.unstable_strictMode === !0 && (n = !0),
    t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
    t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    t = Gs(e, 1, !1, null, null, n, !1, r, o),
    e[It] = t.current,
    lo(e.nodeType === 8 ? e.parentNode : e),
    new Js(t)
}
;
qe.findDOMNode = function(e) {
    if (e == null)
        return null;
    if (e.nodeType === 1)
        return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(N(188)) : (e = Object.keys(e).join(","),
        Error(N(268, e)));
    return e = Id(t),
    e = e === null ? null : e.stateNode,
    e
}
;
qe.flushSync = function(e) {
    return Nn(e)
}
;
qe.hydrate = function(e, t, n) {
    if (!Yl(t))
        throw Error(N(200));
    return Gl(null, e, t, !0, n)
}
;
qe.hydrateRoot = function(e, t, n) {
    if (!qs(e))
        throw Error(N(405));
    var r = n != null && n.hydratedSources || null
      , o = !1
      , l = ""
      , i = vp;
    if (n != null && (n.unstable_strictMode === !0 && (o = !0),
    n.identifierPrefix !== void 0 && (l = n.identifierPrefix),
    n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    t = mp(t, null, e, 1, n ?? null, o, !1, l, i),
    e[It] = t.current,
    lo(e),
    r)
        for (e = 0; e < r.length; e++)
            n = r[e],
            o = n._getVersion,
            o = o(n._source),
            t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(n, o);
    return new Kl(t)
}
;
qe.render = function(e, t, n) {
    if (!Yl(t))
        throw Error(N(200));
    return Gl(null, e, t, !1, n)
}
;
qe.unmountComponentAtNode = function(e) {
    if (!Yl(e))
        throw Error(N(40));
    return e._reactRootContainer ? (Nn(function() {
        Gl(null, null, e, !1, function() {
            e._reactRootContainer = null,
            e[It] = null
        })
    }),
    !0) : !1
}
;
qe.unstable_batchedUpdates = Hs;
qe.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!Yl(n))
        throw Error(N(200));
    if (e == null || e._reactInternals === void 0)
        throw Error(N(38));
    return Gl(e, t, n, !1, r)
}
;
qe.version = "18.2.0-next-9e3b772b8-20220608";
function gp() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(gp)
        } catch (e) {
            console.error(e)
        }
}
gp(),
hd.exports = qe;
var Zs = hd.exports;
const Qv = rd(Zs);
var Lc = Zs;
ia.createRoot = Lc.createRoot,
ia.hydrateRoot = Lc.hydrateRoot;
var yp = {
    exports: {}
}
  , wp = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var dr = x;
function Kv(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var Yv = typeof Object.is == "function" ? Object.is : Kv
  , Gv = dr.useState
  , Xv = dr.useEffect
  , Jv = dr.useLayoutEffect
  , qv = dr.useDebugValue;
function Zv(e, t) {
    var n = t()
      , r = Gv({
        inst: {
            value: n,
            getSnapshot: t
        }
    })
      , o = r[0].inst
      , l = r[1];
    return Jv(function() {
        o.value = n,
        o.getSnapshot = t,
        ea(o) && l({
            inst: o
        })
    }, [e, n, t]),
    Xv(function() {
        return ea(o) && l({
            inst: o
        }),
        e(function() {
            ea(o) && l({
                inst: o
            })
        })
    }, [e]),
    qv(n),
    n
}
function ea(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !Yv(e, n)
    } catch {
        return !0
    }
}
function bv(e, t) {
    return t()
}
var eg = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? bv : Zv;
wp.useSyncExternalStore = dr.useSyncExternalStore !== void 0 ? dr.useSyncExternalStore : eg;
yp.exports = wp;
var tg = yp.exports
  , Sp = {
    exports: {}
}
  , xp = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xl = x
  , ng = tg;
function rg(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var og = typeof Object.is == "function" ? Object.is : rg
  , lg = ng.useSyncExternalStore
  , ig = Xl.useRef
  , ag = Xl.useEffect
  , sg = Xl.useMemo
  , ug = Xl.useDebugValue;
xp.useSyncExternalStoreWithSelector = function(e, t, n, r, o) {
    var l = ig(null);
    if (l.current === null) {
        var i = {
            hasValue: !1,
            value: null
        };
        l.current = i
    } else
        i = l.current;
    l = sg(function() {
        function s(w) {
            if (!u) {
                if (u = !0,
                d = w,
                w = r(w),
                o !== void 0 && i.hasValue) {
                    var S = i.value;
                    if (o(S, w))
                        return m = S
                }
                return m = w
            }
            if (S = m,
            og(d, w))
                return S;
            var y = r(w);
            return o !== void 0 && o(S, y) ? S : (d = w,
            m = y)
        }
        var u = !1, d, m, g = n === void 0 ? null : n;
        return [function() {
            return s(t())
        }
        , g === null ? void 0 : function() {
            return s(g())
        }
        ]
    }, [t, n, r, o]);
    var a = lg(e, l[0], l[1]);
    return ag(function() {
        i.hasValue = !0,
        i.value = a
    }, [a]),
    ug(a),
    a
}
;
Sp.exports = xp;
var cg = Sp.exports;
function dg(e) {
    e()
}
let Ep = dg;
const fg = e => Ep = e
  , pg = () => Ep
  , _c = Symbol.for("react-redux-context")
  , Dc = typeof globalThis < "u" ? globalThis : {};
function hg() {
    var e;
    if (!x.createContext)
        return {};
    const t = (e = Dc[_c]) != null ? e : Dc[_c] = new Map;
    let n = t.get(x.createContext);
    return n || (n = x.createContext(null),
    t.set(x.createContext, n)),
    n
}
const sn = hg();
function bs(e=sn) {
    return function() {
        return x.useContext(e)
    }
}
const Cp = bs()
  , mg = () => {
    throw new Error("uSES not initialized!")
}
;
let kp = mg;
const vg = e => {
    kp = e
}
  , gg = (e, t) => e === t;
function yg(e=sn) {
    const t = e === sn ? Cp : bs(e);
    return function(r, o={}) {
        const {equalityFn: l=gg, stabilityCheck: i=void 0, noopCheck: a=void 0} = typeof o == "function" ? {
            equalityFn: o
        } : o
          , {store: s, subscription: u, getServerState: d, stabilityCheck: m, noopCheck: g} = t();
        x.useRef(!0);
        const w = x.useCallback({
            [r.name](y) {
                return r(y)
            }
        }[r.name], [r, m, i])
          , S = kp(u.addNestedSub, s.getState, d || s.getState, w, l);
        return x.useDebugValue(S),
        S
    }
}
const Eo = yg();
var jp = {
    exports: {}
}
  , b = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pe = typeof Symbol == "function" && Symbol.for
  , eu = Pe ? Symbol.for("react.element") : 60103
  , tu = Pe ? Symbol.for("react.portal") : 60106
  , Jl = Pe ? Symbol.for("react.fragment") : 60107
  , ql = Pe ? Symbol.for("react.strict_mode") : 60108
  , Zl = Pe ? Symbol.for("react.profiler") : 60114
  , bl = Pe ? Symbol.for("react.provider") : 60109
  , ei = Pe ? Symbol.for("react.context") : 60110
  , nu = Pe ? Symbol.for("react.async_mode") : 60111
  , ti = Pe ? Symbol.for("react.concurrent_mode") : 60111
  , ni = Pe ? Symbol.for("react.forward_ref") : 60112
  , ri = Pe ? Symbol.for("react.suspense") : 60113
  , wg = Pe ? Symbol.for("react.suspense_list") : 60120
  , oi = Pe ? Symbol.for("react.memo") : 60115
  , li = Pe ? Symbol.for("react.lazy") : 60116
  , Sg = Pe ? Symbol.for("react.block") : 60121
  , xg = Pe ? Symbol.for("react.fundamental") : 60117
  , Eg = Pe ? Symbol.for("react.responder") : 60118
  , Cg = Pe ? Symbol.for("react.scope") : 60119;
function be(e) {
    if (typeof e == "object" && e !== null) {
        var t = e.$$typeof;
        switch (t) {
        case eu:
            switch (e = e.type,
            e) {
            case nu:
            case ti:
            case Jl:
            case Zl:
            case ql:
            case ri:
                return e;
            default:
                switch (e = e && e.$$typeof,
                e) {
                case ei:
                case ni:
                case li:
                case oi:
                case bl:
                    return e;
                default:
                    return t
                }
            }
        case tu:
            return t
        }
    }
}
function Rp(e) {
    return be(e) === ti
}
b.AsyncMode = nu;
b.ConcurrentMode = ti;
b.ContextConsumer = ei;
b.ContextProvider = bl;
b.Element = eu;
b.ForwardRef = ni;
b.Fragment = Jl;
b.Lazy = li;
b.Memo = oi;
b.Portal = tu;
b.Profiler = Zl;
b.StrictMode = ql;
b.Suspense = ri;
b.isAsyncMode = function(e) {
    return Rp(e) || be(e) === nu
}
;
b.isConcurrentMode = Rp;
b.isContextConsumer = function(e) {
    return be(e) === ei
}
;
b.isContextProvider = function(e) {
    return be(e) === bl
}
;
b.isElement = function(e) {
    return typeof e == "object" && e !== null && e.$$typeof === eu
}
;
b.isForwardRef = function(e) {
    return be(e) === ni
}
;
b.isFragment = function(e) {
    return be(e) === Jl
}
;
b.isLazy = function(e) {
    return be(e) === li
}
;
b.isMemo = function(e) {
    return be(e) === oi
}
;
b.isPortal = function(e) {
    return be(e) === tu
}
;
b.isProfiler = function(e) {
    return be(e) === Zl
}
;
b.isStrictMode = function(e) {
    return be(e) === ql
}
;
b.isSuspense = function(e) {
    return be(e) === ri
}
;
b.isValidElementType = function(e) {
    return typeof e == "string" || typeof e == "function" || e === Jl || e === ti || e === Zl || e === ql || e === ri || e === wg || typeof e == "object" && e !== null && (e.$$typeof === li || e.$$typeof === oi || e.$$typeof === bl || e.$$typeof === ei || e.$$typeof === ni || e.$$typeof === xg || e.$$typeof === Eg || e.$$typeof === Cg || e.$$typeof === Sg)
}
;
b.typeOf = be;
jp.exports = b;
var kg = jp.exports
  , Np = kg
  , jg = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0
}
  , Rg = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0
}
  , Pp = {};
Pp[Np.ForwardRef] = jg;
Pp[Np.Memo] = Rg;
var te = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ru = Symbol.for("react.element"), ou = Symbol.for("react.portal"), ii = Symbol.for("react.fragment"), ai = Symbol.for("react.strict_mode"), si = Symbol.for("react.profiler"), ui = Symbol.for("react.provider"), ci = Symbol.for("react.context"), Ng = Symbol.for("react.server_context"), di = Symbol.for("react.forward_ref"), fi = Symbol.for("react.suspense"), pi = Symbol.for("react.suspense_list"), hi = Symbol.for("react.memo"), mi = Symbol.for("react.lazy"), Pg = Symbol.for("react.offscreen"), Lp;
Lp = Symbol.for("react.module.reference");
function st(e) {
    if (typeof e == "object" && e !== null) {
        var t = e.$$typeof;
        switch (t) {
        case ru:
            switch (e = e.type,
            e) {
            case ii:
            case si:
            case ai:
            case fi:
            case pi:
                return e;
            default:
                switch (e = e && e.$$typeof,
                e) {
                case Ng:
                case ci:
                case di:
                case mi:
                case hi:
                case ui:
                    return e;
                default:
                    return t
                }
            }
        case ou:
            return t
        }
    }
}
te.ContextConsumer = ci;
te.ContextProvider = ui;
te.Element = ru;
te.ForwardRef = di;
te.Fragment = ii;
te.Lazy = mi;
te.Memo = hi;
te.Portal = ou;
te.Profiler = si;
te.StrictMode = ai;
te.Suspense = fi;
te.SuspenseList = pi;
te.isAsyncMode = function() {
    return !1
}
;
te.isConcurrentMode = function() {
    return !1
}
;
te.isContextConsumer = function(e) {
    return st(e) === ci
}
;
te.isContextProvider = function(e) {
    return st(e) === ui
}
;
te.isElement = function(e) {
    return typeof e == "object" && e !== null && e.$$typeof === ru
}
;
te.isForwardRef = function(e) {
    return st(e) === di
}
;
te.isFragment = function(e) {
    return st(e) === ii
}
;
te.isLazy = function(e) {
    return st(e) === mi
}
;
te.isMemo = function(e) {
    return st(e) === hi
}
;
te.isPortal = function(e) {
    return st(e) === ou
}
;
te.isProfiler = function(e) {
    return st(e) === si
}
;
te.isStrictMode = function(e) {
    return st(e) === ai
}
;
te.isSuspense = function(e) {
    return st(e) === fi
}
;
te.isSuspenseList = function(e) {
    return st(e) === pi
}
;
te.isValidElementType = function(e) {
    return typeof e == "string" || typeof e == "function" || e === ii || e === si || e === ai || e === fi || e === pi || e === Pg || typeof e == "object" && e !== null && (e.$$typeof === mi || e.$$typeof === hi || e.$$typeof === ui || e.$$typeof === ci || e.$$typeof === di || e.$$typeof === Lp || e.getModuleId !== void 0)
}
;
te.typeOf = st;
function Lg() {
    const e = pg();
    let t = null
      , n = null;
    return {
        clear() {
            t = null,
            n = null
        },
        notify() {
            e( () => {
                let r = t;
                for (; r; )
                    r.callback(),
                    r = r.next
            }
            )
        },
        get() {
            let r = []
              , o = t;
            for (; o; )
                r.push(o),
                o = o.next;
            return r
        },
        subscribe(r) {
            let o = !0
              , l = n = {
                callback: r,
                next: null,
                prev: n
            };
            return l.prev ? l.prev.next = l : t = l,
            function() {
                !o || t === null || (o = !1,
                l.next ? l.next.prev = l.prev : n = l.prev,
                l.prev ? l.prev.next = l.next : t = l.next)
            }
        }
    }
}
const Tc = {
    notify() {},
    get: () => []
};
function _g(e, t) {
    let n, r = Tc;
    function o(m) {
        return s(),
        r.subscribe(m)
    }
    function l() {
        r.notify()
    }
    function i() {
        d.onStateChange && d.onStateChange()
    }
    function a() {
        return !!n
    }
    function s() {
        n || (n = t ? t.addNestedSub(i) : e.subscribe(i),
        r = Lg())
    }
    function u() {
        n && (n(),
        n = void 0,
        r.clear(),
        r = Tc)
    }
    const d = {
        addNestedSub: o,
        notifyNestedSubs: l,
        handleChangeWrapper: i,
        isSubscribed: a,
        trySubscribe: s,
        tryUnsubscribe: u,
        getListeners: () => r
    };
    return d
}
const Dg = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u"
  , Tg = Dg ? x.useLayoutEffect : x.useEffect;
function Mg({store: e, context: t, children: n, serverState: r, stabilityCheck: o="once", noopCheck: l="once"}) {
    const i = x.useMemo( () => {
        const u = _g(e);
        return {
            store: e,
            subscription: u,
            getServerState: r ? () => r : void 0,
            stabilityCheck: o,
            noopCheck: l
        }
    }
    , [e, r, o, l])
      , a = x.useMemo( () => e.getState(), [e]);
    Tg( () => {
        const {subscription: u} = i;
        return u.onStateChange = u.notifyNestedSubs,
        u.trySubscribe(),
        a !== e.getState() && u.notifyNestedSubs(),
        () => {
            u.tryUnsubscribe(),
            u.onStateChange = void 0
        }
    }
    , [i, a]);
    const s = t || sn;
    return x.createElement(s.Provider, {
        value: i
    }, n)
}
function _p(e=sn) {
    const t = e === sn ? Cp : bs(e);
    return function() {
        const {store: r} = t();
        return r
    }
}
const Og = _p();
function zg(e=sn) {
    const t = e === sn ? Og : _p(e);
    return function() {
        return t().dispatch
    }
}
const At = zg();
vg(cg.useSyncExternalStoreWithSelector);
fg(Zs.unstable_batchedUpdates);
/**
 * @remix-run/router v1.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function fe() {
    return fe = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    fe.apply(this, arguments)
}
var xe;
(function(e) {
    e.Pop = "POP",
    e.Push = "PUSH",
    e.Replace = "REPLACE"
}
)(xe || (xe = {}));
const Mc = "popstate";
function Ig(e) {
    e === void 0 && (e = {});
    function t(r, o) {
        let {pathname: l, search: i, hash: a} = r.location;
        return mo("", {
            pathname: l,
            search: i,
            hash: a
        }, o.state && o.state.usr || null, o.state && o.state.key || "default")
    }
    function n(r, o) {
        return typeof o == "string" ? o : Pn(o)
    }
    return Ug(t, n, null, e)
}
function H(e, t) {
    if (e === !1 || e === null || typeof e > "u")
        throw new Error(t)
}
function fr(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t)
        } catch {}
    }
}
function $g() {
    return Math.random().toString(36).substr(2, 8)
}
function Oc(e, t) {
    return {
        usr: e.state,
        key: e.key,
        idx: t
    }
}
function mo(e, t, n, r) {
    return n === void 0 && (n = null),
    fe({
        pathname: typeof e == "string" ? e : e.pathname,
        search: "",
        hash: ""
    }, typeof t == "string" ? Bt(t) : t, {
        state: n,
        key: t && t.key || r || $g()
    })
}
function Pn(e) {
    let {pathname: t="/", search: n="", hash: r=""} = e;
    return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
}
function Bt(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && (t.hash = e.substr(n),
        e = e.substr(0, n));
        let r = e.indexOf("?");
        r >= 0 && (t.search = e.substr(r),
        e = e.substr(0, r)),
        e && (t.pathname = e)
    }
    return t
}
function Ug(e, t, n, r) {
    r === void 0 && (r = {});
    let {window: o=document.defaultView, v5Compat: l=!1} = r
      , i = o.history
      , a = xe.Pop
      , s = null
      , u = d();
    u == null && (u = 0,
    i.replaceState(fe({}, i.state, {
        idx: u
    }), ""));
    function d() {
        return (i.state || {
            idx: null
        }).idx
    }
    function m() {
        a = xe.Pop;
        let k = d()
          , h = k == null ? null : k - u;
        u = k,
        s && s({
            action: a,
            location: y.location,
            delta: h
        })
    }
    function g(k, h) {
        a = xe.Push;
        let f = mo(y.location, k, h);
        n && n(f, k),
        u = d() + 1;
        let v = Oc(f, u)
          , p = y.createHref(f);
        try {
            i.pushState(v, "", p)
        } catch (j) {
            if (j instanceof DOMException && j.name === "DataCloneError")
                throw j;
            o.location.assign(p)
        }
        l && s && s({
            action: a,
            location: y.location,
            delta: 1
        })
    }
    function w(k, h) {
        a = xe.Replace;
        let f = mo(y.location, k, h);
        n && n(f, k),
        u = d();
        let v = Oc(f, u)
          , p = y.createHref(f);
        i.replaceState(v, "", p),
        l && s && s({
            action: a,
            location: y.location,
            delta: 0
        })
    }
    function S(k) {
        let h = o.location.origin !== "null" ? o.location.origin : o.location.href
          , f = typeof k == "string" ? k : Pn(k);
        return H(h, "No window.location.(origin|href) available to create URL for href: " + f),
        new URL(f,h)
    }
    let y = {
        get action() {
            return a
        },
        get location() {
            return e(o, i)
        },
        listen(k) {
            if (s)
                throw new Error("A history only accepts one active listener");
            return o.addEventListener(Mc, m),
            s = k,
            () => {
                o.removeEventListener(Mc, m),
                s = null
            }
        },
        createHref(k) {
            return t(o, k)
        },
        createURL: S,
        encodeLocation(k) {
            let h = S(k);
            return {
                pathname: h.pathname,
                search: h.search,
                hash: h.hash
            }
        },
        push: g,
        replace: w,
        go(k) {
            return i.go(k)
        }
    };
    return y
}
var ye;
(function(e) {
    e.data = "data",
    e.deferred = "deferred",
    e.redirect = "redirect",
    e.error = "error"
}
)(ye || (ye = {}));
const Fg = new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);
function Ag(e) {
    return e.index === !0
}
function ba(e, t, n, r) {
    return n === void 0 && (n = []),
    r === void 0 && (r = {}),
    e.map( (o, l) => {
        let i = [...n, l]
          , a = typeof o.id == "string" ? o.id : i.join("-");
        if (H(o.index !== !0 || !o.children, "Cannot specify children on an index route"),
        H(!r[a], 'Found a route id collision on id "' + a + `".  Route id's must be globally unique within Data Router usages`),
        Ag(o)) {
            let s = fe({}, o, t(o), {
                id: a
            });
            return r[a] = s,
            s
        } else {
            let s = fe({}, o, t(o), {
                id: a,
                children: void 0
            });
            return r[a] = s,
            o.children && (s.children = ba(o.children, t, i, r)),
            s
        }
    }
    )
}
function Xn(e, t, n) {
    n === void 0 && (n = "/");
    let r = typeof t == "string" ? Bt(t) : t
      , o = gr(r.pathname || "/", n);
    if (o == null)
        return null;
    let l = Dp(e);
    Wg(l);
    let i = null;
    for (let a = 0; i == null && a < l.length; ++a)
        i = qg(l[a], ey(o));
    return i
}
function Bg(e, t) {
    let {route: n, pathname: r, params: o} = e;
    return {
        id: n.id,
        pathname: r,
        params: o,
        data: t[n.id],
        handle: n.handle
    }
}
function Dp(e, t, n, r) {
    t === void 0 && (t = []),
    n === void 0 && (n = []),
    r === void 0 && (r = "");
    let o = (l, i, a) => {
        let s = {
            relativePath: a === void 0 ? l.path || "" : a,
            caseSensitive: l.caseSensitive === !0,
            childrenIndex: i,
            route: l
        };
        s.relativePath.startsWith("/") && (H(s.relativePath.startsWith(r), 'Absolute route path "' + s.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."),
        s.relativePath = s.relativePath.slice(r.length));
        let u = Ot([r, s.relativePath])
          , d = n.concat(s);
        l.children && l.children.length > 0 && (H(l.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + u + '".')),
        Dp(l.children, t, d, u)),
        !(l.path == null && !l.index) && t.push({
            path: u,
            score: Xg(u, l.index),
            routesMeta: d
        })
    }
    ;
    return e.forEach( (l, i) => {
        var a;
        if (l.path === "" || !((a = l.path) != null && a.includes("?")))
            o(l, i);
        else
            for (let s of Tp(l.path))
                o(l, i, s)
    }
    ),
    t
}
function Tp(e) {
    let t = e.split("/");
    if (t.length === 0)
        return [];
    let[n,...r] = t
      , o = n.endsWith("?")
      , l = n.replace(/\?$/, "");
    if (r.length === 0)
        return o ? [l, ""] : [l];
    let i = Tp(r.join("/"))
      , a = [];
    return a.push(...i.map(s => s === "" ? l : [l, s].join("/"))),
    o && a.push(...i),
    a.map(s => e.startsWith("/") && s === "" ? "/" : s)
}
function Wg(e) {
    e.sort( (t, n) => t.score !== n.score ? n.score - t.score : Jg(t.routesMeta.map(r => r.childrenIndex), n.routesMeta.map(r => r.childrenIndex)))
}
const Vg = /^:\w+$/
  , Hg = 3
  , Qg = 2
  , Kg = 1
  , Yg = 10
  , Gg = -2
  , zc = e => e === "*";
function Xg(e, t) {
    let n = e.split("/")
      , r = n.length;
    return n.some(zc) && (r += Gg),
    t && (r += Qg),
    n.filter(o => !zc(o)).reduce( (o, l) => o + (Vg.test(l) ? Hg : l === "" ? Kg : Yg), r)
}
function Jg(e, t) {
    return e.length === t.length && e.slice(0, -1).every( (r, o) => r === t[o]) ? e[e.length - 1] - t[t.length - 1] : 0
}
function qg(e, t) {
    let {routesMeta: n} = e
      , r = {}
      , o = "/"
      , l = [];
    for (let i = 0; i < n.length; ++i) {
        let a = n[i]
          , s = i === n.length - 1
          , u = o === "/" ? t : t.slice(o.length) || "/"
          , d = Zg({
            path: a.relativePath,
            caseSensitive: a.caseSensitive,
            end: s
        }, u);
        if (!d)
            return null;
        Object.assign(r, d.params);
        let m = a.route;
        l.push({
            params: r,
            pathname: Ot([o, d.pathname]),
            pathnameBase: oy(Ot([o, d.pathnameBase])),
            route: m
        }),
        d.pathnameBase !== "/" && (o = Ot([o, d.pathnameBase]))
    }
    return l
}
function Zg(e, t) {
    typeof e == "string" && (e = {
        path: e,
        caseSensitive: !1,
        end: !0
    });
    let[n,r] = bg(e.path, e.caseSensitive, e.end)
      , o = t.match(n);
    if (!o)
        return null;
    let l = o[0]
      , i = l.replace(/(.)\/+$/, "$1")
      , a = o.slice(1);
    return {
        params: r.reduce( (u, d, m) => {
            if (d === "*") {
                let g = a[m] || "";
                i = l.slice(0, l.length - g.length).replace(/(.)\/+$/, "$1")
            }
            return u[d] = ty(a[m] || "", d),
            u
        }
        , {}),
        pathname: l,
        pathnameBase: i,
        pattern: e
    }
}
function bg(e, t, n) {
    t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    fr(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
    let r = []
      , o = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^$?{}|()[\]]/g, "\\$&").replace(/\/:(\w+)/g, (i, a) => (r.push(a),
    "/([^\\/]+)"));
    return e.endsWith("*") ? (r.push("*"),
    o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? o += "\\/*$" : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o,t ? void 0 : "i"), r]
}
function ey(e) {
    try {
        return decodeURI(e)
    } catch (t) {
        return fr(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")),
        e
    }
}
function ty(e, t) {
    try {
        return decodeURIComponent(e)
    } catch (n) {
        return fr(!1, 'The value for the URL param "' + t + '" will not be decoded because' + (' the string "' + e + '" is a malformed URL segment. This is probably') + (" due to a bad percent encoding (" + n + ").")),
        e
    }
}
function gr(e, t) {
    if (t === "/")
        return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase()))
        return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length
      , r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/"
}
function ny(e, t) {
    t === void 0 && (t = "/");
    let {pathname: n, search: r="", hash: o=""} = typeof e == "string" ? Bt(e) : e;
    return {
        pathname: n ? n.startsWith("/") ? n : ry(n, t) : t,
        search: ly(r),
        hash: iy(o)
    }
}
function ry(e, t) {
    let n = t.replace(/\/+$/, "").split("/");
    return e.split("/").forEach(o => {
        o === ".." ? n.length > 1 && n.pop() : o !== "." && n.push(o)
    }
    ),
    n.length > 1 ? n.join("/") : "/"
}
function ta(e, t, n, r) {
    return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.'
}
function Co(e) {
    return e.filter( (t, n) => n === 0 || t.route.path && t.route.path.length > 0)
}
function vi(e, t, n, r) {
    r === void 0 && (r = !1);
    let o;
    typeof e == "string" ? o = Bt(e) : (o = fe({}, e),
    H(!o.pathname || !o.pathname.includes("?"), ta("?", "pathname", "search", o)),
    H(!o.pathname || !o.pathname.includes("#"), ta("#", "pathname", "hash", o)),
    H(!o.search || !o.search.includes("#"), ta("#", "search", "hash", o)));
    let l = e === "" || o.pathname === "", i = l ? "/" : o.pathname, a;
    if (r || i == null)
        a = n;
    else {
        let m = t.length - 1;
        if (i.startsWith("..")) {
            let g = i.split("/");
            for (; g[0] === ".."; )
                g.shift(),
                m -= 1;
            o.pathname = g.join("/")
        }
        a = m >= 0 ? t[m] : "/"
    }
    let s = ny(o, a)
      , u = i && i !== "/" && i.endsWith("/")
      , d = (l || i === ".") && n.endsWith("/");
    return !s.pathname.endsWith("/") && (u || d) && (s.pathname += "/"),
    s
}
const Ot = e => e.join("/").replace(/\/\/+/g, "/")
  , oy = e => e.replace(/\/+$/, "").replace(/^\/*/, "/")
  , ly = e => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e
  , iy = e => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
class lu {
    constructor(t, n, r, o) {
        o === void 0 && (o = !1),
        this.status = t,
        this.statusText = n || "",
        this.internal = o,
        r instanceof Error ? (this.data = r.toString(),
        this.error = r) : this.data = r
    }
}
function Mp(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data"in e
}
const Op = ["post", "put", "patch", "delete"]
  , ay = new Set(Op)
  , sy = ["get", ...Op]
  , uy = new Set(sy)
  , cy = new Set([301, 302, 303, 307, 308])
  , dy = new Set([307, 308])
  , na = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0
}
  , fy = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0
}
  , Mr = {
    state: "unblocked",
    proceed: void 0,
    reset: void 0,
    location: void 0
}
  , zp = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i
  , py = e => ({
    hasErrorBoundary: !!e.hasErrorBoundary
});
function hy(e) {
    const t = e.window ? e.window : typeof window < "u" ? window : void 0
      , n = typeof t < "u" && typeof t.document < "u" && typeof t.document.createElement < "u"
      , r = !n;
    H(e.routes.length > 0, "You must provide a non-empty routes array to createRouter");
    let o;
    if (e.mapRouteProperties)
        o = e.mapRouteProperties;
    else if (e.detectErrorBoundary) {
        let E = e.detectErrorBoundary;
        o = C => ({
            hasErrorBoundary: E(C)
        })
    } else
        o = py;
    let l = {}, i = ba(e.routes, o, void 0, l), a, s = e.basename || "/", u = fe({
        v7_normalizeFormMethod: !1,
        v7_prependBasename: !1
    }, e.future), d = null, m = new Set, g = null, w = null, S = null, y = e.hydrationData != null, k = Xn(i, e.history.location, s), h = null;
    if (k == null) {
        let E = et(404, {
            pathname: e.history.location.pathname
        })
          , {matches: C, route: R} = Vc(i);
        k = C,
        h = {
            [R.id]: E
        }
    }
    let f = !k.some(E => E.route.lazy) && (!k.some(E => E.route.loader) || e.hydrationData != null), v, p = {
        historyAction: e.history.action,
        location: e.history.location,
        matches: k,
        initialized: f,
        navigation: na,
        restoreScrollPosition: e.hydrationData != null ? !1 : null,
        preventScrollReset: !1,
        revalidation: "idle",
        loaderData: e.hydrationData && e.hydrationData.loaderData || {},
        actionData: e.hydrationData && e.hydrationData.actionData || null,
        errors: e.hydrationData && e.hydrationData.errors || h,
        fetchers: new Map,
        blockers: new Map
    }, j = xe.Pop, D = !1, _, L = !1, O = !1, I = [], se = [], X = new Map, Q = 0, U = -1, J = new Map, le = new Set, q = new Map, P = new Map, $ = new Map, W = !1;
    function ce() {
        return d = e.history.listen(E => {
            let {action: C, location: R, delta: T} = E;
            if (W) {
                W = !1;
                return
            }
            fr($.size === 0 || T != null, "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");
            let B = gu({
                currentLocation: p.location,
                nextLocation: R,
                historyAction: C
            });
            if (B && T != null) {
                W = !0,
                e.history.go(T * -1),
                Ro(B, {
                    state: "blocked",
                    location: R,
                    proceed() {
                        Ro(B, {
                            state: "proceeding",
                            proceed: void 0,
                            reset: void 0,
                            location: R
                        }),
                        e.history.go(T)
                    },
                    reset() {
                        let A = new Map(p.blockers);
                        A.set(B, Mr),
                        re({
                            blockers: A
                        })
                    }
                });
                return
            }
            return fn(C, R)
        }
        ),
        p.initialized || fn(xe.Pop, p.location),
        v
    }
    function Se() {
        d && d(),
        m.clear(),
        _ && _.abort(),
        p.fetchers.forEach( (E, C) => xi(C)),
        p.blockers.forEach( (E, C) => vu(C))
    }
    function Mn(E) {
        return m.add(E),
        () => m.delete(E)
    }
    function re(E) {
        p = fe({}, p, E),
        m.forEach(C => C(p))
    }
    function jt(E, C) {
        var R, T;
        let B = p.actionData != null && p.navigation.formMethod != null && pt(p.navigation.formMethod) && p.navigation.state === "loading" && ((R = E.state) == null ? void 0 : R._isRedirect) !== !0, A;
        C.actionData ? Object.keys(C.actionData).length > 0 ? A = C.actionData : A = null : B ? A = p.actionData : A = null;
        let V = C.loaderData ? Wc(p.loaderData, C.loaderData, C.matches || [], C.errors) : p.loaderData
          , F = p.blockers;
        F.size > 0 && (F = new Map(F),
        F.forEach( (de, Te) => F.set(Te, Mr)));
        let z = D === !0 || p.navigation.formMethod != null && pt(p.navigation.formMethod) && ((T = E.state) == null ? void 0 : T._isRedirect) !== !0;
        a && (i = a,
        a = void 0),
        L || j === xe.Pop || (j === xe.Push ? e.history.push(E, E.state) : j === xe.Replace && e.history.replace(E, E.state)),
        re(fe({}, C, {
            actionData: A,
            loaderData: V,
            historyAction: j,
            location: E,
            initialized: !0,
            navigation: na,
            revalidation: "idle",
            restoreScrollPosition: wu(E, C.matches || p.matches),
            preventScrollReset: z,
            blockers: F
        })),
        j = xe.Pop,
        D = !1,
        L = !1,
        O = !1,
        I = [],
        se = []
    }
    async function yt(E, C) {
        if (typeof E == "number") {
            e.history.go(E);
            return
        }
        let R = es(p.location, p.matches, s, u.v7_prependBasename, E, C == null ? void 0 : C.fromRouteId, C == null ? void 0 : C.relative)
          , {path: T, submission: B, error: A} = Ic(u.v7_normalizeFormMethod, !1, R, C)
          , V = p.location
          , F = mo(p.location, T, C && C.state);
        F = fe({}, F, e.history.encodeLocation(F));
        let z = C && C.replace != null ? C.replace : void 0
          , de = xe.Push;
        z === !0 ? de = xe.Replace : z === !1 || B != null && pt(B.formMethod) && B.formAction === p.location.pathname + p.location.search && (de = xe.Replace);
        let Te = C && "preventScrollReset"in C ? C.preventScrollReset === !0 : void 0
          , G = gu({
            currentLocation: V,
            nextLocation: F,
            historyAction: de
        });
        if (G) {
            Ro(G, {
                state: "blocked",
                location: F,
                proceed() {
                    Ro(G, {
                        state: "proceeding",
                        proceed: void 0,
                        reset: void 0,
                        location: F
                    }),
                    yt(E, C)
                },
                reset() {
                    let ne = new Map(p.blockers);
                    ne.set(G, Mr),
                    re({
                        blockers: ne
                    })
                }
            });
            return
        }
        return await fn(de, F, {
            submission: B,
            pendingError: A,
            preventScrollReset: Te,
            replace: C && C.replace
        })
    }
    function On() {
        if (Si(),
        re({
            revalidation: "loading"
        }),
        p.navigation.state !== "submitting") {
            if (p.navigation.state === "idle") {
                fn(p.historyAction, p.location, {
                    startUninterruptedRevalidation: !0
                });
                return
            }
            fn(j || p.historyAction, p.navigation.location, {
                overrideNavigation: p.navigation
            })
        }
    }
    async function fn(E, C, R) {
        _ && _.abort(),
        _ = null,
        j = E,
        L = (R && R.startUninterruptedRevalidation) === !0,
        vh(p.location, p.matches),
        D = (R && R.preventScrollReset) === !0;
        let T = a || i
          , B = R && R.overrideNavigation
          , A = Xn(T, C, s);
        if (!A) {
            let ne = et(404, {
                pathname: C.pathname
            })
              , {matches: ge, route: pn} = Vc(T);
            Ei(),
            jt(C, {
                matches: ge,
                loaderData: {},
                errors: {
                    [pn.id]: ne
                }
            });
            return
        }
        if (p.initialized && !O && wy(p.location, C) && !(R && R.submission && pt(R.submission.formMethod))) {
            jt(C, {
                matches: A
            });
            return
        }
        _ = new AbortController;
        let V = zr(e.history, C, _.signal, R && R.submission), F, z;
        if (R && R.pendingError)
            z = {
                [Jn(A).route.id]: R.pendingError
            };
        else if (R && R.submission && pt(R.submission.formMethod)) {
            let ne = await uh(V, C, R.submission, A, {
                replace: R.replace
            });
            if (ne.shortCircuited)
                return;
            F = ne.pendingActionData,
            z = ne.pendingActionError,
            B = ra(C, R.submission),
            V = new Request(V.url,{
                signal: V.signal
            })
        }
        let {shortCircuited: de, loaderData: Te, errors: G} = await ch(V, C, A, B, R && R.submission, R && R.fetcherSubmission, R && R.replace, F, z);
        de || (_ = null,
        jt(C, fe({
            matches: A
        }, F ? {
            actionData: F
        } : {}, {
            loaderData: Te,
            errors: G
        })))
    }
    async function uh(E, C, R, T, B) {
        B === void 0 && (B = {}),
        Si();
        let A = Cy(C, R);
        re({
            navigation: A
        });
        let V, F = ns(T, C);
        if (!F.route.action && !F.route.lazy)
            V = {
                type: ye.error,
                error: et(405, {
                    method: E.method,
                    pathname: C.pathname,
                    routeId: F.route.id
                })
            };
        else if (V = await Or("action", E, F, T, l, o, s),
        E.signal.aborted)
            return {
                shortCircuited: !0
            };
        if (rr(V)) {
            let z;
            return B && B.replace != null ? z = B.replace : z = V.location === p.location.pathname + p.location.search,
            await Er(p, V, {
                submission: R,
                replace: z
            }),
            {
                shortCircuited: !0
            }
        }
        if (Jr(V)) {
            let z = Jn(T, F.route.id);
            return (B && B.replace) !== !0 && (j = xe.Push),
            {
                pendingActionData: {},
                pendingActionError: {
                    [z.route.id]: V.error
                }
            }
        }
        if (Sn(V))
            throw et(400, {
                type: "defer-action"
            });
        return {
            pendingActionData: {
                [F.route.id]: V.data
            }
        }
    }
    async function ch(E, C, R, T, B, A, V, F, z) {
        let de = T || ra(C, B)
          , Te = B || A || Kc(de)
          , G = a || i
          , [ne,ge] = $c(e.history, p, R, Te, C, O, I, se, q, le, G, s, F, z);
        if (Ei(ee => !(R && R.some(ut => ut.route.id === ee)) || ne && ne.some(ut => ut.route.id === ee)),
        U = ++Q,
        ne.length === 0 && ge.length === 0) {
            let ee = hu();
            return jt(C, fe({
                matches: R,
                loaderData: {},
                errors: z || null
            }, F ? {
                actionData: F
            } : {}, ee ? {
                fetchers: new Map(p.fetchers)
            } : {})),
            {
                shortCircuited: !0
            }
        }
        if (!L) {
            ge.forEach(ut => {
                let Vt = p.fetchers.get(ut.key)
                  , Ni = Ir(void 0, Vt ? Vt.data : void 0);
                p.fetchers.set(ut.key, Ni)
            }
            );
            let ee = F || p.actionData;
            re(fe({
                navigation: de
            }, ee ? Object.keys(ee).length === 0 ? {
                actionData: null
            } : {
                actionData: ee
            } : {}, ge.length > 0 ? {
                fetchers: new Map(p.fetchers)
            } : {}))
        }
        ge.forEach(ee => {
            X.has(ee.key) && Wt(ee.key),
            ee.controller && X.set(ee.key, ee.controller)
        }
        );
        let pn = () => ge.forEach(ee => Wt(ee.key));
        _ && _.signal.addEventListener("abort", pn);
        let {results: hn, loaderResults: Cr, fetcherResults: Ci} = await fu(p.matches, R, ne, ge, E);
        if (E.signal.aborted)
            return {
                shortCircuited: !0
            };
        _ && _.signal.removeEventListener("abort", pn),
        ge.forEach(ee => X.delete(ee.key));
        let Rt = Hc(hn);
        if (Rt) {
            if (Rt.idx >= ne.length) {
                let ee = ge[Rt.idx - ne.length].key;
                le.add(ee)
            }
            return await Er(p, Rt.result, {
                replace: V
            }),
            {
                shortCircuited: !0
            }
        }
        let {loaderData: Nt, errors: No} = Bc(p, R, ne, Cr, z, ge, Ci, P);
        P.forEach( (ee, ut) => {
            ee.subscribe(Vt => {
                (Vt || ee.done) && P.delete(ut)
            }
            )
        }
        );
        let ki = hu()
          , ji = mu(U)
          , Ri = ki || ji || ge.length > 0;
        return fe({
            loaderData: Nt,
            errors: No
        }, Ri ? {
            fetchers: new Map(p.fetchers)
        } : {})
    }
    function du(E) {
        return p.fetchers.get(E) || fy
    }
    function dh(E, C, R, T) {
        if (r)
            throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");
        X.has(E) && Wt(E);
        let B = a || i
          , A = es(p.location, p.matches, s, u.v7_prependBasename, R, C, T == null ? void 0 : T.relative)
          , V = Xn(B, A, s);
        if (!V) {
            jo(E, C, et(404, {
                pathname: A
            }));
            return
        }
        let {path: F, submission: z, error: de} = Ic(u.v7_normalizeFormMethod, !0, A, T);
        if (de) {
            jo(E, C, de);
            return
        }
        let Te = ns(V, F);
        if (D = (T && T.preventScrollReset) === !0,
        z && pt(z.formMethod)) {
            fh(E, C, F, Te, V, z);
            return
        }
        q.set(E, {
            routeId: C,
            path: F
        }),
        ph(E, C, F, Te, V, z)
    }
    async function fh(E, C, R, T, B, A) {
        if (Si(),
        q.delete(E),
        !T.route.action && !T.route.lazy) {
            let Ce = et(405, {
                method: A.formMethod,
                pathname: R,
                routeId: C
            });
            jo(E, C, Ce);
            return
        }
        let V = p.fetchers.get(E)
          , F = ky(A, V);
        p.fetchers.set(E, F),
        re({
            fetchers: new Map(p.fetchers)
        });
        let z = new AbortController
          , de = zr(e.history, R, z.signal, A);
        X.set(E, z);
        let Te = Q
          , G = await Or("action", de, T, B, l, o, s);
        if (de.signal.aborted) {
            X.get(E) === z && X.delete(E);
            return
        }
        if (rr(G))
            if (X.delete(E),
            U > Te) {
                let Ce = In(void 0);
                p.fetchers.set(E, Ce),
                re({
                    fetchers: new Map(p.fetchers)
                });
                return
            } else {
                le.add(E);
                let Ce = Ir(A);
                return p.fetchers.set(E, Ce),
                re({
                    fetchers: new Map(p.fetchers)
                }),
                Er(p, G, {
                    fetcherSubmission: A
                })
            }
        if (Jr(G)) {
            jo(E, C, G.error);
            return
        }
        if (Sn(G))
            throw et(400, {
                type: "defer-action"
            });
        let ne = p.navigation.location || p.location
          , ge = zr(e.history, ne, z.signal)
          , pn = a || i
          , hn = p.navigation.state !== "idle" ? Xn(pn, p.navigation.location, s) : p.matches;
        H(hn, "Didn't find any matches after fetcher action");
        let Cr = ++Q;
        J.set(E, Cr);
        let Ci = Ir(A, G.data);
        p.fetchers.set(E, Ci);
        let[Rt,Nt] = $c(e.history, p, hn, A, ne, O, I, se, q, le, pn, s, {
            [T.route.id]: G.data
        }, void 0);
        Nt.filter(Ce => Ce.key !== E).forEach(Ce => {
            let kr = Ce.key
              , Su = p.fetchers.get(kr)
              , yh = Ir(void 0, Su ? Su.data : void 0);
            p.fetchers.set(kr, yh),
            X.has(kr) && Wt(kr),
            Ce.controller && X.set(kr, Ce.controller)
        }
        ),
        re({
            fetchers: new Map(p.fetchers)
        });
        let No = () => Nt.forEach(Ce => Wt(Ce.key));
        z.signal.addEventListener("abort", No);
        let {results: ki, loaderResults: ji, fetcherResults: Ri} = await fu(p.matches, hn, Rt, Nt, ge);
        if (z.signal.aborted)
            return;
        z.signal.removeEventListener("abort", No),
        J.delete(E),
        X.delete(E),
        Nt.forEach(Ce => X.delete(Ce.key));
        let ee = Hc(ki);
        if (ee) {
            if (ee.idx >= Rt.length) {
                let Ce = Nt[ee.idx - Rt.length].key;
                le.add(Ce)
            }
            return Er(p, ee.result)
        }
        let {loaderData: ut, errors: Vt} = Bc(p, p.matches, Rt, ji, void 0, Nt, Ri, P);
        if (p.fetchers.has(E)) {
            let Ce = In(G.data);
            p.fetchers.set(E, Ce)
        }
        let Ni = mu(Cr);
        p.navigation.state === "loading" && Cr > U ? (H(j, "Expected pending action"),
        _ && _.abort(),
        jt(p.navigation.location, {
            matches: hn,
            loaderData: ut,
            errors: Vt,
            fetchers: new Map(p.fetchers)
        })) : (re(fe({
            errors: Vt,
            loaderData: Wc(p.loaderData, ut, hn, Vt)
        }, Ni || Nt.length > 0 ? {
            fetchers: new Map(p.fetchers)
        } : {})),
        O = !1)
    }
    async function ph(E, C, R, T, B, A) {
        let V = p.fetchers.get(E)
          , F = Ir(A, V ? V.data : void 0);
        p.fetchers.set(E, F),
        re({
            fetchers: new Map(p.fetchers)
        });
        let z = new AbortController
          , de = zr(e.history, R, z.signal);
        X.set(E, z);
        let Te = Q
          , G = await Or("loader", de, T, B, l, o, s);
        if (Sn(G) && (G = await Up(G, de.signal, !0) || G),
        X.get(E) === z && X.delete(E),
        de.signal.aborted)
            return;
        if (rr(G))
            if (U > Te) {
                let ge = In(void 0);
                p.fetchers.set(E, ge),
                re({
                    fetchers: new Map(p.fetchers)
                });
                return
            } else {
                le.add(E),
                await Er(p, G);
                return
            }
        if (Jr(G)) {
            let ge = Jn(p.matches, C);
            p.fetchers.delete(E),
            re({
                fetchers: new Map(p.fetchers),
                errors: {
                    [ge.route.id]: G.error
                }
            });
            return
        }
        H(!Sn(G), "Unhandled fetcher deferred data");
        let ne = In(G.data);
        p.fetchers.set(E, ne),
        re({
            fetchers: new Map(p.fetchers)
        })
    }
    async function Er(E, C, R) {
        let {submission: T, fetcherSubmission: B, replace: A} = R === void 0 ? {} : R;
        C.revalidate && (O = !0);
        let V = mo(E.location, C.location, {
            _isRedirect: !0
        });
        if (H(V, "Expected a location on the redirect navigation"),
        n) {
            let ne = !1;
            if (C.reloadDocument)
                ne = !0;
            else if (zp.test(C.location)) {
                const ge = e.history.createURL(C.location);
                ne = ge.origin !== t.location.origin || gr(ge.pathname, s) == null
            }
            if (ne) {
                A ? t.location.replace(C.location) : t.location.assign(C.location);
                return
            }
        }
        _ = null;
        let F = A === !0 ? xe.Replace : xe.Push
          , {formMethod: z, formAction: de, formEncType: Te} = E.navigation;
        !T && !B && z && de && Te && (T = Kc(E.navigation));
        let G = T || B;
        if (dy.has(C.status) && G && pt(G.formMethod))
            await fn(F, V, {
                submission: fe({}, G, {
                    formAction: C.location
                }),
                preventScrollReset: D
            });
        else {
            let ne = ra(V, T);
            await fn(F, V, {
                overrideNavigation: ne,
                fetcherSubmission: B,
                preventScrollReset: D
            })
        }
    }
    async function fu(E, C, R, T, B) {
        let A = await Promise.all([...R.map(z => Or("loader", B, z, C, l, o, s)), ...T.map(z => z.matches && z.match && z.controller ? Or("loader", zr(e.history, z.path, z.controller.signal), z.match, z.matches, l, o, s) : {
            type: ye.error,
            error: et(404, {
                pathname: z.path
            })
        })])
          , V = A.slice(0, R.length)
          , F = A.slice(R.length);
        return await Promise.all([Qc(E, R, V, V.map( () => B.signal), !1, p.loaderData), Qc(E, T.map(z => z.match), F, T.map(z => z.controller ? z.controller.signal : null), !0)]),
        {
            results: A,
            loaderResults: V,
            fetcherResults: F
        }
    }
    function Si() {
        O = !0,
        I.push(...Ei()),
        q.forEach( (E, C) => {
            X.has(C) && (se.push(C),
            Wt(C))
        }
        )
    }
    function jo(E, C, R) {
        let T = Jn(p.matches, C);
        xi(E),
        re({
            errors: {
                [T.route.id]: R
            },
            fetchers: new Map(p.fetchers)
        })
    }
    function xi(E) {
        let C = p.fetchers.get(E);
        X.has(E) && !(C && C.state === "loading" && J.has(E)) && Wt(E),
        q.delete(E),
        J.delete(E),
        le.delete(E),
        p.fetchers.delete(E)
    }
    function Wt(E) {
        let C = X.get(E);
        H(C, "Expected fetch controller: " + E),
        C.abort(),
        X.delete(E)
    }
    function pu(E) {
        for (let C of E) {
            let R = du(C)
              , T = In(R.data);
            p.fetchers.set(C, T)
        }
    }
    function hu() {
        let E = []
          , C = !1;
        for (let R of le) {
            let T = p.fetchers.get(R);
            H(T, "Expected fetcher: " + R),
            T.state === "loading" && (le.delete(R),
            E.push(R),
            C = !0)
        }
        return pu(E),
        C
    }
    function mu(E) {
        let C = [];
        for (let[R,T] of J)
            if (T < E) {
                let B = p.fetchers.get(R);
                H(B, "Expected fetcher: " + R),
                B.state === "loading" && (Wt(R),
                J.delete(R),
                C.push(R))
            }
        return pu(C),
        C.length > 0
    }
    function hh(E, C) {
        let R = p.blockers.get(E) || Mr;
        return $.get(E) !== C && $.set(E, C),
        R
    }
    function vu(E) {
        p.blockers.delete(E),
        $.delete(E)
    }
    function Ro(E, C) {
        let R = p.blockers.get(E) || Mr;
        H(R.state === "unblocked" && C.state === "blocked" || R.state === "blocked" && C.state === "blocked" || R.state === "blocked" && C.state === "proceeding" || R.state === "blocked" && C.state === "unblocked" || R.state === "proceeding" && C.state === "unblocked", "Invalid blocker state transition: " + R.state + " -> " + C.state);
        let T = new Map(p.blockers);
        T.set(E, C),
        re({
            blockers: T
        })
    }
    function gu(E) {
        let {currentLocation: C, nextLocation: R, historyAction: T} = E;
        if ($.size === 0)
            return;
        $.size > 1 && fr(!1, "A router only supports one blocker at a time");
        let B = Array.from($.entries())
          , [A,V] = B[B.length - 1]
          , F = p.blockers.get(A);
        if (!(F && F.state === "proceeding") && V({
            currentLocation: C,
            nextLocation: R,
            historyAction: T
        }))
            return A
    }
    function Ei(E) {
        let C = [];
        return P.forEach( (R, T) => {
            (!E || E(T)) && (R.cancel(),
            C.push(T),
            P.delete(T))
        }
        ),
        C
    }
    function mh(E, C, R) {
        if (g = E,
        S = C,
        w = R || null,
        !y && p.navigation === na) {
            y = !0;
            let T = wu(p.location, p.matches);
            T != null && re({
                restoreScrollPosition: T
            })
        }
        return () => {
            g = null,
            S = null,
            w = null
        }
    }
    function yu(E, C) {
        return w && w(E, C.map(T => Bg(T, p.loaderData))) || E.key
    }
    function vh(E, C) {
        if (g && S) {
            let R = yu(E, C);
            g[R] = S()
        }
    }
    function wu(E, C) {
        if (g) {
            let R = yu(E, C)
              , T = g[R];
            if (typeof T == "number")
                return T
        }
        return null
    }
    function gh(E) {
        l = {},
        a = ba(E, o, void 0, l)
    }
    return v = {
        get basename() {
            return s
        },
        get state() {
            return p
        },
        get routes() {
            return i
        },
        initialize: ce,
        subscribe: Mn,
        enableScrollRestoration: mh,
        navigate: yt,
        fetch: dh,
        revalidate: On,
        createHref: E => e.history.createHref(E),
        encodeLocation: E => e.history.encodeLocation(E),
        getFetcher: du,
        deleteFetcher: xi,
        dispose: Se,
        getBlocker: hh,
        deleteBlocker: vu,
        _internalFetchControllers: X,
        _internalActiveDeferreds: P,
        _internalSetRoutes: gh
    },
    v
}
function my(e) {
    return e != null && ("formData"in e && e.formData != null || "body"in e && e.body !== void 0)
}
function es(e, t, n, r, o, l, i) {
    let a, s;
    if (l != null && i !== "path") {
        a = [];
        for (let d of t)
            if (a.push(d),
            d.route.id === l) {
                s = d;
                break
            }
    } else
        a = t,
        s = t[t.length - 1];
    let u = vi(o || ".", Co(a).map(d => d.pathnameBase), gr(e.pathname, n) || e.pathname, i === "path");
    return o == null && (u.search = e.search,
    u.hash = e.hash),
    (o == null || o === "" || o === ".") && s && s.route.index && !iu(u.search) && (u.search = u.search ? u.search.replace(/^\?/, "?index&") : "?index"),
    r && n !== "/" && (u.pathname = u.pathname === "/" ? n : Ot([n, u.pathname])),
    Pn(u)
}
function Ic(e, t, n, r) {
    if (!r || !my(r))
        return {
            path: n
        };
    if (r.formMethod && !Ey(r.formMethod))
        return {
            path: n,
            error: et(405, {
                method: r.formMethod
            })
        };
    let o = () => ({
        path: n,
        error: et(400, {
            type: "invalid-body"
        })
    })
      , l = r.formMethod || "get"
      , i = e ? l.toUpperCase() : l.toLowerCase()
      , a = $p(n);
    if (r.body !== void 0) {
        if (r.formEncType === "text/plain") {
            if (!pt(i))
                return o();
            let g = typeof r.body == "string" ? r.body : r.body instanceof FormData || r.body instanceof URLSearchParams ? Array.from(r.body.entries()).reduce( (w, S) => {
                let[y,k] = S;
                return "" + w + y + "=" + k + `
`
            }
            , "") : String(r.body);
            return {
                path: n,
                submission: {
                    formMethod: i,
                    formAction: a,
                    formEncType: r.formEncType,
                    formData: void 0,
                    json: void 0,
                    text: g
                }
            }
        } else if (r.formEncType === "application/json") {
            if (!pt(i))
                return o();
            try {
                let g = typeof r.body == "string" ? JSON.parse(r.body) : r.body;
                return {
                    path: n,
                    submission: {
                        formMethod: i,
                        formAction: a,
                        formEncType: r.formEncType,
                        formData: void 0,
                        json: g,
                        text: void 0
                    }
                }
            } catch {
                return o()
            }
        }
    }
    H(typeof FormData == "function", "FormData is not available in this environment");
    let s, u;
    if (r.formData)
        s = ts(r.formData),
        u = r.formData;
    else if (r.body instanceof FormData)
        s = ts(r.body),
        u = r.body;
    else if (r.body instanceof URLSearchParams)
        s = r.body,
        u = Ac(s);
    else if (r.body == null)
        s = new URLSearchParams,
        u = new FormData;
    else
        try {
            s = new URLSearchParams(r.body),
            u = Ac(s)
        } catch {
            return o()
        }
    let d = {
        formMethod: i,
        formAction: a,
        formEncType: r && r.formEncType || "application/x-www-form-urlencoded",
        formData: u,
        json: void 0,
        text: void 0
    };
    if (pt(d.formMethod))
        return {
            path: n,
            submission: d
        };
    let m = Bt(n);
    return t && m.search && iu(m.search) && s.append("index", ""),
    m.search = "?" + s,
    {
        path: Pn(m),
        submission: d
    }
}
function vy(e, t) {
    let n = e;
    if (t) {
        let r = e.findIndex(o => o.route.id === t);
        r >= 0 && (n = e.slice(0, r))
    }
    return n
}
function $c(e, t, n, r, o, l, i, a, s, u, d, m, g, w) {
    let S = w ? Object.values(w)[0] : g ? Object.values(g)[0] : void 0
      , y = e.createURL(t.location)
      , k = e.createURL(o)
      , h = w ? Object.keys(w)[0] : void 0
      , v = vy(n, h).filter( (j, D) => {
        if (j.route.lazy)
            return !0;
        if (j.route.loader == null)
            return !1;
        if (gy(t.loaderData, t.matches[D], j) || i.some(O => O === j.route.id))
            return !0;
        let _ = t.matches[D]
          , L = j;
        return Uc(j, fe({
            currentUrl: y,
            currentParams: _.params,
            nextUrl: k,
            nextParams: L.params
        }, r, {
            actionResult: S,
            defaultShouldRevalidate: l || y.pathname + y.search === k.pathname + k.search || y.search !== k.search || Ip(_, L)
        }))
    }
    )
      , p = [];
    return s.forEach( (j, D) => {
        if (!n.some(se => se.route.id === j.routeId))
            return;
        let _ = Xn(d, j.path, m);
        if (!_) {
            p.push({
                key: D,
                routeId: j.routeId,
                path: j.path,
                matches: null,
                match: null,
                controller: null
            });
            return
        }
        let L = t.fetchers.get(D)
          , O = ns(_, j.path)
          , I = !1;
        u.has(D) ? I = !1 : a.includes(D) ? I = !0 : L && L.state !== "idle" && L.data === void 0 ? I = l : I = Uc(O, fe({
            currentUrl: y,
            currentParams: t.matches[t.matches.length - 1].params,
            nextUrl: k,
            nextParams: n[n.length - 1].params
        }, r, {
            actionResult: S,
            defaultShouldRevalidate: l
        })),
        I && p.push({
            key: D,
            routeId: j.routeId,
            path: j.path,
            matches: _,
            match: O,
            controller: new AbortController
        })
    }
    ),
    [v, p]
}
function gy(e, t, n) {
    let r = !t || n.route.id !== t.route.id
      , o = e[n.route.id] === void 0;
    return r || o
}
function Ip(e, t) {
    let n = e.route.path;
    return e.pathname !== t.pathname || n != null && n.endsWith("*") && e.params["*"] !== t.params["*"]
}
function Uc(e, t) {
    if (e.route.shouldRevalidate) {
        let n = e.route.shouldRevalidate(t);
        if (typeof n == "boolean")
            return n
    }
    return t.defaultShouldRevalidate
}
async function Fc(e, t, n) {
    if (!e.lazy)
        return;
    let r = await e.lazy();
    if (!e.lazy)
        return;
    let o = n[e.id];
    H(o, "No route found in manifest");
    let l = {};
    for (let i in r) {
        let s = o[i] !== void 0 && i !== "hasErrorBoundary";
        fr(!s, 'Route "' + o.id + '" has a static property "' + i + '" defined but its lazy function is also returning a value for this property. ' + ('The lazy route property "' + i + '" will be ignored.')),
        !s && !Fg.has(i) && (l[i] = r[i])
    }
    Object.assign(o, l),
    Object.assign(o, fe({}, t(o), {
        lazy: void 0
    }))
}
async function Or(e, t, n, r, o, l, i, a) {
    a === void 0 && (a = {});
    let s, u, d, m = S => {
        let y, k = new Promise( (h, f) => y = f);
        return d = () => y(),
        t.signal.addEventListener("abort", d),
        Promise.race([S({
            request: t,
            params: n.params,
            context: a.requestContext
        }), k])
    }
    ;
    try {
        let S = n.route[e];
        if (n.route.lazy)
            if (S) {
                let y, k = await Promise.all([m(S).catch(h => {
                    y = h
                }
                ), Fc(n.route, l, o)]);
                if (y)
                    throw y;
                u = k[0]
            } else if (await Fc(n.route, l, o),
            S = n.route[e],
            S)
                u = await m(S);
            else if (e === "action") {
                let y = new URL(t.url)
                  , k = y.pathname + y.search;
                throw et(405, {
                    method: t.method,
                    pathname: k,
                    routeId: n.route.id
                })
            } else
                return {
                    type: ye.data,
                    data: void 0
                };
        else if (S)
            u = await m(S);
        else {
            let y = new URL(t.url)
              , k = y.pathname + y.search;
            throw et(404, {
                pathname: k
            })
        }
        H(u !== void 0, "You defined " + (e === "action" ? "an action" : "a loader") + " for route " + ('"' + n.route.id + "\" but didn't return anything from your `" + e + "` ") + "function. Please return a value or `null`.")
    } catch (S) {
        s = ye.error,
        u = S
    } finally {
        d && t.signal.removeEventListener("abort", d)
    }
    if (xy(u)) {
        let S = u.status;
        if (cy.has(S)) {
            let h = u.headers.get("Location");
            if (H(h, "Redirects returned/thrown from loaders/actions must have a Location header"),
            !zp.test(h))
                h = es(new URL(t.url), r.slice(0, r.indexOf(n) + 1), i, !0, h);
            else if (!a.isStaticRequest) {
                let f = new URL(t.url)
                  , v = h.startsWith("//") ? new URL(f.protocol + h) : new URL(h)
                  , p = gr(v.pathname, i) != null;
                v.origin === f.origin && p && (h = v.pathname + v.search + v.hash)
            }
            if (a.isStaticRequest)
                throw u.headers.set("Location", h),
                u;
            return {
                type: ye.redirect,
                status: S,
                location: h,
                revalidate: u.headers.get("X-Remix-Revalidate") !== null,
                reloadDocument: u.headers.get("X-Remix-Reload-Document") !== null
            }
        }
        if (a.isRouteRequest)
            throw {
                type: s === ye.error ? ye.error : ye.data,
                response: u
            };
        let y, k = u.headers.get("Content-Type");
        return k && /\bapplication\/json\b/.test(k) ? y = await u.json() : y = await u.text(),
        s === ye.error ? {
            type: s,
            error: new lu(S,u.statusText,y),
            headers: u.headers
        } : {
            type: ye.data,
            data: y,
            statusCode: u.status,
            headers: u.headers
        }
    }
    if (s === ye.error)
        return {
            type: s,
            error: u
        };
    if (Sy(u)) {
        var g, w;
        return {
            type: ye.deferred,
            deferredData: u,
            statusCode: (g = u.init) == null ? void 0 : g.status,
            headers: ((w = u.init) == null ? void 0 : w.headers) && new Headers(u.init.headers)
        }
    }
    return {
        type: ye.data,
        data: u
    }
}
function zr(e, t, n, r) {
    let o = e.createURL($p(t)).toString()
      , l = {
        signal: n
    };
    if (r && pt(r.formMethod)) {
        let {formMethod: i, formEncType: a} = r;
        l.method = i.toUpperCase(),
        a === "application/json" ? (l.headers = new Headers({
            "Content-Type": a
        }),
        l.body = JSON.stringify(r.json)) : a === "text/plain" ? l.body = r.text : a === "application/x-www-form-urlencoded" && r.formData ? l.body = ts(r.formData) : l.body = r.formData
    }
    return new Request(o,l)
}
function ts(e) {
    let t = new URLSearchParams;
    for (let[n,r] of e.entries())
        t.append(n, typeof r == "string" ? r : r.name);
    return t
}
function Ac(e) {
    let t = new FormData;
    for (let[n,r] of e.entries())
        t.append(n, r);
    return t
}
function yy(e, t, n, r, o) {
    let l = {}, i = null, a, s = !1, u = {};
    return n.forEach( (d, m) => {
        let g = t[m].route.id;
        if (H(!rr(d), "Cannot handle redirect results in processLoaderData"),
        Jr(d)) {
            let w = Jn(e, g)
              , S = d.error;
            r && (S = Object.values(r)[0],
            r = void 0),
            i = i || {},
            i[w.route.id] == null && (i[w.route.id] = S),
            l[g] = void 0,
            s || (s = !0,
            a = Mp(d.error) ? d.error.status : 500),
            d.headers && (u[g] = d.headers)
        } else
            Sn(d) ? (o.set(g, d.deferredData),
            l[g] = d.deferredData.data) : l[g] = d.data,
            d.statusCode != null && d.statusCode !== 200 && !s && (a = d.statusCode),
            d.headers && (u[g] = d.headers)
    }
    ),
    r && (i = r,
    l[Object.keys(r)[0]] = void 0),
    {
        loaderData: l,
        errors: i,
        statusCode: a || 200,
        loaderHeaders: u
    }
}
function Bc(e, t, n, r, o, l, i, a) {
    let {loaderData: s, errors: u} = yy(t, n, r, o, a);
    for (let d = 0; d < l.length; d++) {
        let {key: m, match: g, controller: w} = l[d];
        H(i !== void 0 && i[d] !== void 0, "Did not find corresponding fetcher result");
        let S = i[d];
        if (!(w && w.signal.aborted))
            if (Jr(S)) {
                let y = Jn(e.matches, g == null ? void 0 : g.route.id);
                u && u[y.route.id] || (u = fe({}, u, {
                    [y.route.id]: S.error
                })),
                e.fetchers.delete(m)
            } else if (rr(S))
                H(!1, "Unhandled fetcher revalidation redirect");
            else if (Sn(S))
                H(!1, "Unhandled fetcher deferred data");
            else {
                let y = In(S.data);
                e.fetchers.set(m, y)
            }
    }
    return {
        loaderData: s,
        errors: u
    }
}
function Wc(e, t, n, r) {
    let o = fe({}, t);
    for (let l of n) {
        let i = l.route.id;
        if (t.hasOwnProperty(i) ? t[i] !== void 0 && (o[i] = t[i]) : e[i] !== void 0 && l.route.loader && (o[i] = e[i]),
        r && r.hasOwnProperty(i))
            break
    }
    return o
}
function Jn(e, t) {
    return (t ? e.slice(0, e.findIndex(r => r.route.id === t) + 1) : [...e]).reverse().find(r => r.route.hasErrorBoundary === !0) || e[0]
}
function Vc(e) {
    let t = e.find(n => n.index || !n.path || n.path === "/") || {
        id: "__shim-error-route__"
    };
    return {
        matches: [{
            params: {},
            pathname: "",
            pathnameBase: "",
            route: t
        }],
        route: t
    }
}
function et(e, t) {
    let {pathname: n, routeId: r, method: o, type: l} = t === void 0 ? {} : t
      , i = "Unknown Server Error"
      , a = "Unknown @remix-run/router error";
    return e === 400 ? (i = "Bad Request",
    o && n && r ? a = "You made a " + o + ' request to "' + n + '" but ' + ('did not provide a `loader` for route "' + r + '", ') + "so there is no way to handle the request." : l === "defer-action" ? a = "defer() is not supported in actions" : l === "invalid-body" && (a = "Unable to encode submission body")) : e === 403 ? (i = "Forbidden",
    a = 'Route "' + r + '" does not match URL "' + n + '"') : e === 404 ? (i = "Not Found",
    a = 'No route matches URL "' + n + '"') : e === 405 && (i = "Method Not Allowed",
    o && n && r ? a = "You made a " + o.toUpperCase() + ' request to "' + n + '" but ' + ('did not provide an `action` for route "' + r + '", ') + "so there is no way to handle the request." : o && (a = 'Invalid request method "' + o.toUpperCase() + '"')),
    new lu(e || 500,i,new Error(a),!0)
}
function Hc(e) {
    for (let t = e.length - 1; t >= 0; t--) {
        let n = e[t];
        if (rr(n))
            return {
                result: n,
                idx: t
            }
    }
}
function $p(e) {
    let t = typeof e == "string" ? Bt(e) : e;
    return Pn(fe({}, t, {
        hash: ""
    }))
}
function wy(e, t) {
    return e.pathname !== t.pathname || e.search !== t.search ? !1 : e.hash === "" ? t.hash !== "" : e.hash === t.hash ? !0 : t.hash !== ""
}
function Sn(e) {
    return e.type === ye.deferred
}
function Jr(e) {
    return e.type === ye.error
}
function rr(e) {
    return (e && e.type) === ye.redirect
}
function Sy(e) {
    let t = e;
    return t && typeof t == "object" && typeof t.data == "object" && typeof t.subscribe == "function" && typeof t.cancel == "function" && typeof t.resolveData == "function"
}
function xy(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.headers == "object" && typeof e.body < "u"
}
function Ey(e) {
    return uy.has(e.toLowerCase())
}
function pt(e) {
    return ay.has(e.toLowerCase())
}
async function Qc(e, t, n, r, o, l) {
    for (let i = 0; i < n.length; i++) {
        let a = n[i]
          , s = t[i];
        if (!s)
            continue;
        let u = e.find(m => m.route.id === s.route.id)
          , d = u != null && !Ip(u, s) && (l && l[s.route.id]) !== void 0;
        if (Sn(a) && (o || d)) {
            let m = r[i];
            H(m, "Expected an AbortSignal for revalidating fetcher deferred result"),
            await Up(a, m, o).then(g => {
                g && (n[i] = g || n[i])
            }
            )
        }
    }
}
async function Up(e, t, n) {
    if (n === void 0 && (n = !1),
    !await e.deferredData.resolveData(t)) {
        if (n)
            try {
                return {
                    type: ye.data,
                    data: e.deferredData.unwrappedData
                }
            } catch (o) {
                return {
                    type: ye.error,
                    error: o
                }
            }
        return {
            type: ye.data,
            data: e.deferredData.data
        }
    }
}
function iu(e) {
    return new URLSearchParams(e).getAll("index").some(t => t === "")
}
function ns(e, t) {
    let n = typeof t == "string" ? Bt(t).search : t.search;
    if (e[e.length - 1].route.index && iu(n || ""))
        return e[e.length - 1];
    let r = Co(e);
    return r[r.length - 1]
}
function Kc(e) {
    let {formMethod: t, formAction: n, formEncType: r, text: o, formData: l, json: i} = e;
    if (!(!t || !n || !r)) {
        if (o != null)
            return {
                formMethod: t,
                formAction: n,
                formEncType: r,
                formData: void 0,
                json: void 0,
                text: o
            };
        if (l != null)
            return {
                formMethod: t,
                formAction: n,
                formEncType: r,
                formData: l,
                json: void 0,
                text: void 0
            };
        if (i !== void 0)
            return {
                formMethod: t,
                formAction: n,
                formEncType: r,
                formData: void 0,
                json: i,
                text: void 0
            }
    }
}
function ra(e, t) {
    return t ? {
        state: "loading",
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text
    } : {
        state: "loading",
        location: e,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0
    }
}
function Cy(e, t) {
    return {
        state: "submitting",
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text
    }
}
function Ir(e, t) {
    return e ? {
        state: "loading",
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t
    } : {
        state: "loading",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: t
    }
}
function ky(e, t) {
    return {
        state: "submitting",
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t ? t.data : void 0
    }
}
function In(e) {
    return {
        state: "idle",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: e
    }
}
/**
 * React Router v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Pl() {
    return Pl = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    Pl.apply(this, arguments)
}
const gi = x.createContext(null)
  , au = x.createContext(null)
  , Tn = x.createContext(null)
  , yi = x.createContext(null)
  , kt = x.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
})
  , Fp = x.createContext(null);
function jy(e, t) {
    let {relative: n} = t === void 0 ? {} : t;
    yr() || H(!1);
    let {basename: r, navigator: o} = x.useContext(Tn)
      , {hash: l, pathname: i, search: a} = su(e, {
        relative: n
    })
      , s = i;
    return r !== "/" && (s = i === "/" ? r : Ot([r, i])),
    o.createHref({
        pathname: s,
        search: a,
        hash: l
    })
}
function yr() {
    return x.useContext(yi) != null
}
function wr() {
    return yr() || H(!1),
    x.useContext(yi).location
}
function Ap(e) {
    x.useContext(Tn).static || x.useLayoutEffect(e)
}
function Sr() {
    let {isDataRoute: e} = x.useContext(kt);
    return e ? Fy() : Ry()
}
function Ry() {
    yr() || H(!1);
    let e = x.useContext(gi)
      , {basename: t, navigator: n} = x.useContext(Tn)
      , {matches: r} = x.useContext(kt)
      , {pathname: o} = wr()
      , l = JSON.stringify(Co(r).map(s => s.pathnameBase))
      , i = x.useRef(!1);
    return Ap( () => {
        i.current = !0
    }
    ),
    x.useCallback(function(s, u) {
        if (u === void 0 && (u = {}),
        !i.current)
            return;
        if (typeof s == "number") {
            n.go(s);
            return
        }
        let d = vi(s, JSON.parse(l), o, u.relative === "path");
        e == null && t !== "/" && (d.pathname = d.pathname === "/" ? t : Ot([t, d.pathname])),
        (u.replace ? n.replace : n.push)(d, u.state, u)
    }, [t, n, l, o, e])
}
const Ny = x.createContext(null);
function Py(e) {
    let t = x.useContext(kt).outlet;
    return t && x.createElement(Ny.Provider, {
        value: e
    }, t)
}
function Bp() {
    let {matches: e} = x.useContext(kt)
      , t = e[e.length - 1];
    return t ? t.params : {}
}
function su(e, t) {
    let {relative: n} = t === void 0 ? {} : t
      , {matches: r} = x.useContext(kt)
      , {pathname: o} = wr()
      , l = JSON.stringify(Co(r).map(i => i.pathnameBase));
    return x.useMemo( () => vi(e, JSON.parse(l), o, n === "path"), [e, l, o, n])
}
function Ly(e, t, n) {
    yr() || H(!1);
    let {navigator: r} = x.useContext(Tn)
      , {matches: o} = x.useContext(kt)
      , l = o[o.length - 1]
      , i = l ? l.params : {};
    l && l.pathname;
    let a = l ? l.pathnameBase : "/";
    l && l.route;
    let s = wr(), u;
    if (t) {
        var d;
        let y = typeof t == "string" ? Bt(t) : t;
        a === "/" || (d = y.pathname) != null && d.startsWith(a) || H(!1),
        u = y
    } else
        u = s;
    let m = u.pathname || "/"
      , g = a === "/" ? m : m.slice(a.length) || "/"
      , w = Xn(e, {
        pathname: g
    })
      , S = Oy(w && w.map(y => Object.assign({}, y, {
        params: Object.assign({}, i, y.params),
        pathname: Ot([a, r.encodeLocation ? r.encodeLocation(y.pathname).pathname : y.pathname]),
        pathnameBase: y.pathnameBase === "/" ? a : Ot([a, r.encodeLocation ? r.encodeLocation(y.pathnameBase).pathname : y.pathnameBase])
    })), o, n);
    return t && S ? x.createElement(yi.Provider, {
        value: {
            location: Pl({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, u),
            navigationType: xe.Pop
        }
    }, S) : S
}
function _y() {
    let e = Uy()
      , t = Mp(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e)
      , n = e instanceof Error ? e.stack : null
      , o = {
        padding: "0.5rem",
        backgroundColor: "rgba(200,200,200, 0.5)"
    }
      , l = null;
    return x.createElement(x.Fragment, null, x.createElement("h2", null, "Unexpected Application Error!"), x.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, t), n ? x.createElement("pre", {
        style: o
    }, n) : null, l)
}
const Dy = x.createElement(_y, null);
class Ty extends x.Component {
    constructor(t) {
        super(t),
        this.state = {
            location: t.location,
            revalidation: t.revalidation,
            error: t.error
        }
    }
    static getDerivedStateFromError(t) {
        return {
            error: t
        }
    }
    static getDerivedStateFromProps(t, n) {
        return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? {
            error: t.error,
            location: t.location,
            revalidation: t.revalidation
        } : {
            error: t.error || n.error,
            location: n.location,
            revalidation: t.revalidation || n.revalidation
        }
    }
    componentDidCatch(t, n) {
        console.error("React Router caught the following error during render", t, n)
    }
    render() {
        return this.state.error ? x.createElement(kt.Provider, {
            value: this.props.routeContext
        }, x.createElement(Fp.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}
function My(e) {
    let {routeContext: t, match: n, children: r} = e
      , o = x.useContext(gi);
    return o && o.static && o.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    x.createElement(kt.Provider, {
        value: t
    }, r)
}
function Oy(e, t, n) {
    var r;
    if (t === void 0 && (t = []),
    n === void 0 && (n = null),
    e == null) {
        var o;
        if ((o = n) != null && o.errors)
            e = n.matches;
        else
            return null
    }
    let l = e
      , i = (r = n) == null ? void 0 : r.errors;
    if (i != null) {
        let a = l.findIndex(s => s.route.id && (i == null ? void 0 : i[s.route.id]));
        a >= 0 || H(!1),
        l = l.slice(0, Math.min(l.length, a + 1))
    }
    return l.reduceRight( (a, s, u) => {
        let d = s.route.id ? i == null ? void 0 : i[s.route.id] : null
          , m = null;
        n && (m = s.route.errorElement || Dy);
        let g = t.concat(l.slice(0, u + 1))
          , w = () => {
            let S;
            return d ? S = m : s.route.Component ? S = x.createElement(s.route.Component, null) : s.route.element ? S = s.route.element : S = a,
            x.createElement(My, {
                match: s,
                routeContext: {
                    outlet: a,
                    matches: g,
                    isDataRoute: n != null
                },
                children: S
            })
        }
        ;
        return n && (s.route.ErrorBoundary || s.route.errorElement || u === 0) ? x.createElement(Ty, {
            location: n.location,
            revalidation: n.revalidation,
            component: m,
            error: d,
            children: w(),
            routeContext: {
                outlet: null,
                matches: g,
                isDataRoute: !0
            }
        }) : w()
    }
    , null)
}
var Wp = function(e) {
    return e.UseBlocker = "useBlocker",
    e.UseRevalidator = "useRevalidator",
    e.UseNavigateStable = "useNavigate",
    e
}(Wp || {})
  , Ll = function(e) {
    return e.UseBlocker = "useBlocker",
    e.UseLoaderData = "useLoaderData",
    e.UseActionData = "useActionData",
    e.UseRouteError = "useRouteError",
    e.UseNavigation = "useNavigation",
    e.UseRouteLoaderData = "useRouteLoaderData",
    e.UseMatches = "useMatches",
    e.UseRevalidator = "useRevalidator",
    e.UseNavigateStable = "useNavigate",
    e.UseRouteId = "useRouteId",
    e
}(Ll || {});
function zy(e) {
    let t = x.useContext(gi);
    return t || H(!1),
    t
}
function Iy(e) {
    let t = x.useContext(au);
    return t || H(!1),
    t
}
function $y(e) {
    let t = x.useContext(kt);
    return t || H(!1),
    t
}
function Vp(e) {
    let t = $y()
      , n = t.matches[t.matches.length - 1];
    return n.route.id || H(!1),
    n.route.id
}
function Uy() {
    var e;
    let t = x.useContext(Fp)
      , n = Iy(Ll.UseRouteError)
      , r = Vp(Ll.UseRouteError);
    return t || ((e = n.errors) == null ? void 0 : e[r])
}
function Fy() {
    let {router: e} = zy(Wp.UseNavigateStable)
      , t = Vp(Ll.UseNavigateStable)
      , n = x.useRef(!1);
    return Ap( () => {
        n.current = !0
    }
    ),
    x.useCallback(function(o, l) {
        l === void 0 && (l = {}),
        n.current && (typeof o == "number" ? e.navigate(o) : e.navigate(o, Pl({
            fromRouteId: t
        }, l)))
    }, [e, t])
}
const Ay = "startTransition"
  , Yc = zh[Ay];
function By(e) {
    let {fallbackElement: t, router: n, future: r} = e
      , [o,l] = x.useState(n.state)
      , {v7_startTransition: i} = r || {}
      , a = x.useCallback(m => {
        i && Yc ? Yc( () => l(m)) : l(m)
    }
    , [l, i]);
    x.useLayoutEffect( () => n.subscribe(a), [n, a]);
    let s = x.useMemo( () => ({
        createHref: n.createHref,
        encodeLocation: n.encodeLocation,
        go: m => n.navigate(m),
        push: (m, g, w) => n.navigate(m, {
            state: g,
            preventScrollReset: w == null ? void 0 : w.preventScrollReset
        }),
        replace: (m, g, w) => n.navigate(m, {
            replace: !0,
            state: g,
            preventScrollReset: w == null ? void 0 : w.preventScrollReset
        })
    }), [n])
      , u = n.basename || "/"
      , d = x.useMemo( () => ({
        router: n,
        navigator: s,
        static: !1,
        basename: u
    }), [n, s, u]);
    return x.createElement(x.Fragment, null, x.createElement(gi.Provider, {
        value: d
    }, x.createElement(au.Provider, {
        value: o
    }, x.createElement(Qy, {
        basename: u,
        location: o.location,
        navigationType: o.historyAction,
        navigator: s
    }, o.initialized ? x.createElement(Wy, {
        routes: n.routes,
        state: o
    }) : t))), null)
}
function Wy(e) {
    let {routes: t, state: n} = e;
    return Ly(t, void 0, n)
}
function Vy(e) {
    let {to: t, replace: n, state: r, relative: o} = e;
    yr() || H(!1);
    let {matches: l} = x.useContext(kt)
      , {pathname: i} = wr()
      , a = Sr()
      , s = vi(t, Co(l).map(d => d.pathnameBase), i, o === "path")
      , u = JSON.stringify(s);
    return x.useEffect( () => a(JSON.parse(u), {
        replace: n,
        state: r,
        relative: o
    }), [a, u, o, n, r]),
    null
}
function Hy(e) {
    return Py(e.context)
}
function Qy(e) {
    let {basename: t="/", children: n=null, location: r, navigationType: o=xe.Pop, navigator: l, static: i=!1} = e;
    yr() && H(!1);
    let a = t.replace(/^\/*/, "/")
      , s = x.useMemo( () => ({
        basename: a,
        navigator: l,
        static: i
    }), [a, l, i]);
    typeof r == "string" && (r = Bt(r));
    let {pathname: u="/", search: d="", hash: m="", state: g=null, key: w="default"} = r
      , S = x.useMemo( () => {
        let y = gr(u, a);
        return y == null ? null : {
            location: {
                pathname: y,
                search: d,
                hash: m,
                state: g,
                key: w
            },
            navigationType: o
        }
    }
    , [a, u, d, m, g, w, o]);
    return S == null ? null : x.createElement(Tn.Provider, {
        value: s
    }, x.createElement(yi.Provider, {
        children: n,
        value: S
    }))
}
new Promise( () => {}
);
function Ky(e) {
    let t = {
        hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null
    };
    return e.Component && Object.assign(t, {
        element: x.createElement(e.Component),
        Component: void 0
    }),
    e.ErrorBoundary && Object.assign(t, {
        errorElement: x.createElement(e.ErrorBoundary),
        ErrorBoundary: void 0
    }),
    t
}
/**
 * React Router DOM v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function pr() {
    return pr = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    pr.apply(this, arguments)
}
function Hp(e, t) {
    if (e == null)
        return {};
    var n = {}, r = Object.keys(e), o, l;
    for (l = 0; l < r.length; l++)
        o = r[l],
        !(t.indexOf(o) >= 0) && (n[o] = e[o]);
    return n
}
function Yy(e) {
    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
}
function Gy(e, t) {
    return e.button === 0 && (!t || t === "_self") && !Yy(e)
}
const Xy = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset"]
  , Jy = ["aria-current", "caseSensitive", "className", "end", "style", "to", "children"];
function qy(e, t) {
    return hy({
        basename: t == null ? void 0 : t.basename,
        future: pr({}, t == null ? void 0 : t.future, {
            v7_prependBasename: !0
        }),
        history: Ig({
            window: t == null ? void 0 : t.window
        }),
        hydrationData: (t == null ? void 0 : t.hydrationData) || Zy(),
        routes: e,
        mapRouteProperties: Ky
    }).initialize()
}
function Zy() {
    var e;
    let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
    return t && t.errors && (t = pr({}, t, {
        errors: by(t.errors)
    })),
    t
}
function by(e) {
    if (!e)
        return null;
    let t = Object.entries(e)
      , n = {};
    for (let[r,o] of t)
        if (o && o.__type === "RouteErrorResponse")
            n[r] = new lu(o.status,o.statusText,o.data,o.internal === !0);
        else if (o && o.__type === "Error") {
            if (o.__subType) {
                let l = window[o.__subType];
                if (typeof l == "function")
                    try {
                        let i = new l(o.message);
                        i.stack = "",
                        n[r] = i
                    } catch {}
            }
            if (n[r] == null) {
                let l = new Error(o.message);
                l.stack = "",
                n[r] = l
            }
        } else
            n[r] = o;
    return n
}
const e0 = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u"
  , t0 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i
  , uu = x.forwardRef(function(t, n) {
    let {onClick: r, relative: o, reloadDocument: l, replace: i, state: a, target: s, to: u, preventScrollReset: d} = t, m = Hp(t, Xy), {basename: g} = x.useContext(Tn), w, S = !1;
    if (typeof u == "string" && t0.test(u) && (w = u,
    e0))
        try {
            let f = new URL(window.location.href)
              , v = u.startsWith("//") ? new URL(f.protocol + u) : new URL(u)
              , p = gr(v.pathname, g);
            v.origin === f.origin && p != null ? u = p + v.search + v.hash : S = !0
        } catch {}
    let y = jy(u, {
        relative: o
    })
      , k = n0(u, {
        replace: i,
        state: a,
        target: s,
        preventScrollReset: d,
        relative: o
    });
    function h(f) {
        r && r(f),
        f.defaultPrevented || k(f)
    }
    return x.createElement("a", pr({}, m, {
        href: w || y,
        onClick: S || l ? r : h,
        ref: n,
        target: s
    }))
})
  , Gc = x.forwardRef(function(t, n) {
    let {"aria-current": r="page", caseSensitive: o=!1, className: l="", end: i=!1, style: a, to: s, children: u} = t
      , d = Hp(t, Jy)
      , m = su(s, {
        relative: d.relative
    })
      , g = wr()
      , w = x.useContext(au)
      , {navigator: S} = x.useContext(Tn)
      , y = S.encodeLocation ? S.encodeLocation(m).pathname : m.pathname
      , k = g.pathname
      , h = w && w.navigation && w.navigation.location ? w.navigation.location.pathname : null;
    o || (k = k.toLowerCase(),
    h = h ? h.toLowerCase() : null,
    y = y.toLowerCase());
    let f = k === y || !i && k.startsWith(y) && k.charAt(y.length) === "/", v = h != null && (h === y || !i && h.startsWith(y) && h.charAt(y.length) === "/"), p = f ? r : void 0, j;
    typeof l == "function" ? j = l({
        isActive: f,
        isPending: v
    }) : j = [l, f ? "active" : null, v ? "pending" : null].filter(Boolean).join(" ");
    let D = typeof a == "function" ? a({
        isActive: f,
        isPending: v
    }) : a;
    return x.createElement(uu, pr({}, d, {
        "aria-current": p,
        className: j,
        ref: n,
        style: D,
        to: s
    }), typeof u == "function" ? u({
        isActive: f,
        isPending: v
    }) : u)
});
var Xc;
(function(e) {
    e.UseScrollRestoration = "useScrollRestoration",
    e.UseSubmit = "useSubmit",
    e.UseSubmitFetcher = "useSubmitFetcher",
    e.UseFetcher = "useFetcher"
}
)(Xc || (Xc = {}));
var Jc;
(function(e) {
    e.UseFetchers = "useFetchers",
    e.UseScrollRestoration = "useScrollRestoration"
}
)(Jc || (Jc = {}));
function n0(e, t) {
    let {target: n, replace: r, state: o, preventScrollReset: l, relative: i} = t === void 0 ? {} : t
      , a = Sr()
      , s = wr()
      , u = su(e, {
        relative: i
    });
    return x.useCallback(d => {
        if (Gy(d, n)) {
            d.preventDefault();
            let m = r !== void 0 ? r : Pn(s) === Pn(u);
            a(e, {
                replace: m,
                state: o,
                preventScrollReset: l,
                relative: i
            })
        }
    }
    , [s, a, u, r, o, n, e, l, i])
}
/*! js-cookie v3.0.5 | MIT */
function Qo(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
            e[r] = n[r]
    }
    return e
}
var r0 = {
    read: function(e) {
        return e[0] === '"' && (e = e.slice(1, -1)),
        e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
    },
    write: function(e) {
        return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent)
    }
};
function rs(e, t) {
    function n(o, l, i) {
        if (!(typeof document > "u")) {
            i = Qo({}, t, i),
            typeof i.expires == "number" && (i.expires = new Date(Date.now() + i.expires * 864e5)),
            i.expires && (i.expires = i.expires.toUTCString()),
            o = encodeURIComponent(o).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
            var a = "";
            for (var s in i)
                i[s] && (a += "; " + s,
                i[s] !== !0 && (a += "=" + i[s].split(";")[0]));
            return document.cookie = o + "=" + e.write(l, o) + a
        }
    }
    function r(o) {
        if (!(typeof document > "u" || arguments.length && !o)) {
            for (var l = document.cookie ? document.cookie.split("; ") : [], i = {}, a = 0; a < l.length; a++) {
                var s = l[a].split("=")
                  , u = s.slice(1).join("=");
                try {
                    var d = decodeURIComponent(s[0]);
                    if (i[d] = e.read(u, d),
                    o === d)
                        break
                } catch {}
            }
            return o ? i[o] : i
        }
    }
    return Object.create({
        set: n,
        get: r,
        remove: function(o, l) {
            n(o, "", Qo({}, l, {
                expires: -1
            }))
        },
        withAttributes: function(o) {
            return rs(this.converter, Qo({}, this.attributes, o))
        },
        withConverter: function(o) {
            return rs(Qo({}, this.converter, o), this.attributes)
        }
    }, {
        attributes: {
            value: Object.freeze(t)
        },
        converter: {
            value: Object.freeze(e)
        }
    })
}
var o0 = rs(r0, {
    path: "/"
});
import Cookies from "js-cookie";

const l0 = "https://v2projec-t-01-3-api.onrender.com";
async function at(e, t={}) {
    t.method = t.method || "GET",
    t.headers = t.headers || {},
    t.credentials = "include";
    if (t.method.toUpperCase() !== "GET") {
    t.headers["Content-Type"] = t.headers["Content-Type"] || "application/json";
    t.headers["XSRF-Token"] = o0.get("XSRF-TOKEN");
    }
    const n = `${l0}${e}`
      const r = await window.fetch(n, t);
    if (r.status >= 400) throw r;

    return r;
}
const Qp = "session/setUser"
  , Kp = "session/removeUser"
  , wi = e => ({
    type: Qp,
    payload: e
})
  , i0 = () => ({
    type: Kp
})
  , a0 = e => async t => {
    const {credential: n, password: r} = e
      , l = await (await at("/api/session", {
        method: "POST",
        body: JSON.stringify({
            credential: n,
            password: r
        })
    })).json();
    return t(wi(l.user)),
    l.user
}
  , s0 = {
    user: null
}
  , u0 = (e=s0, t) => {
    switch (t.type) {
    case Qp:
        return {
            ...e,
            user: t.payload
        };
    case Kp:
        return {
            ...e,
            user: null
        };
    default:
        return e
    }
}
  , c0 = () => async e => {
    const t = await at("/api/session")
      , n = await t.json();
    return e(wi(n.user)),
    t
}
  , d0 = e => async t => {
    const {username: n, firstName: r, lastName: o, email: l, password: i} = e
      , a = await at("/api/users", {
        method: "POST",
        body: JSON.stringify({
            username: n,
            firstName: r,
            lastName: o,
            email: l,
            password: i
        })
    })
      , s = await a.json();
    return t(wi(s.user)),
    a
}
  , f0 = () => async e => {
    const t = await at("/api/session", {
        method: "DELETE"
    });
    return e(i0()),
    t
}
  , p0 = () => async e => {
    const t = await at("/api/session/demo", {
        method: "POST"
    });
    if (t.ok) {
        const r = await t.json();
        return e(wi(r.user)),
        r.user
    }
    const n = await t.json();
    throw new Error(n.message || "Demo login failed")
}
;
var Yp = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0
}
  , qc = Tt.createContext && Tt.createContext(Yp)
  , h0 = ["attr", "size", "title"];
function m0(e, t) {
    if (e == null)
        return {};
    var n = v0(e, t), r, o;
    if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (o = 0; o < l.length; o++)
            r = l[o],
            !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r])
    }
    return n
}
function v0(e, t) {
    if (e == null)
        return {};
    var n = {};
    for (var r in e)
        if (Object.prototype.hasOwnProperty.call(e, r)) {
            if (t.indexOf(r) >= 0)
                continue;
            n[r] = e[r]
        }
    return n
}
function _l() {
    return _l = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    _l.apply(this, arguments)
}
function Zc(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(o) {
            return Object.getOwnPropertyDescriptor(e, o).enumerable
        })),
        n.push.apply(n, r)
    }
    return n
}
function Dl(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] != null ? arguments[t] : {};
        t % 2 ? Zc(Object(n), !0).forEach(function(r) {
            g0(e, r, n[r])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Zc(Object(n)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
        })
    }
    return e
}
function g0(e, t, n) {
    return t = y0(t),
    t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n,
    e
}
function y0(e) {
    var t = w0(e, "string");
    return typeof t == "symbol" ? t : t + ""
}
function w0(e, t) {
    if (typeof e != "object" || !e)
        return e;
    var n = e[Symbol.toPrimitive];
    if (n !== void 0) {
        var r = n.call(e, t || "default");
        if (typeof r != "object")
            return r;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}
function Gp(e) {
    return e && e.map( (t, n) => Tt.createElement(t.tag, Dl({
        key: n
    }, t.attr), Gp(t.child)))
}
function ko(e) {
    return t => Tt.createElement(S0, _l({
        attr: Dl({}, e.attr)
    }, t), Gp(e.child))
}
function S0(e) {
    var t = n => {
        var {attr: r, size: o, title: l} = e, i = m0(e, h0), a = o || n.size || "1em", s;
        return n.className && (s = n.className),
        e.className && (s = (s ? s + " " : "") + e.className),
        Tt.createElement("svg", _l({
            stroke: "currentColor",
            fill: "currentColor",
            strokeWidth: "0"
        }, n.attr, r, i, {
            className: s,
            style: Dl(Dl({
                color: e.color || n.color
            }, n.style), e.style),
            height: a,
            width: a,
            xmlns: "http://www.w3.org/2000/svg"
        }), l && Tt.createElement("title", null, l), e.children)
    }
    ;
    return qc !== void 0 ? Tt.createElement(qc.Consumer, null, n => t(n)) : t(Yp)
}
function x0(e) {
    return ko({
        tag: "svg",
        attr: {
            viewBox: "0 0 576 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
            },
            child: []
        }]
    })(e)
}
function Xp(e) {
    return ko({
        tag: "svg",
        attr: {
            viewBox: "0 0 496 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"
            },
            child: []
        }]
    })(e)
}
function E0(e) {
    return ko({
        tag: "svg",
        attr: {
            viewBox: "0 0 576 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"
            },
            child: []
        }]
    })(e)
}
function Jp(e) {
    return ko({
        tag: "svg",
        attr: {
            version: "1.1",
            viewBox: "0 0 17 17"
        },
        child: [{
            tag: "g",
            attr: {},
            child: []
        }, {
            tag: "path",
            attr: {
                d: "M16 3v2h-15v-2h15zM1 10h15v-2h-15v2zM1 15h15v-2h-15v2z"
            },
            child: []
        }]
    })(e)
}
const cu = x.createContext();
function C0({children: e}) {
    const t = x.useRef()
      , [n,r] = x.useState(null)
      , [o,l] = x.useState(null)
      , a = {
        modalRef: t,
        modalContent: n,
        setModalContent: r,
        setOnModalClose: l,
        closeModal: () => {
            r(null),
            typeof o == "function" && (l(null),
            o())
        }
    };
    return c.jsxs(c.Fragment, {
        children: [c.jsx(cu.Provider, {
            value: a,
            children: e
        }), c.jsx("div", {
            ref: t
        })]
    })
}
function k0() {
    const {modalRef: e, modalContent: t, closeModal: n} = x.useContext(cu);
    return !e || !e.current || !t ? null : Qv.createPortal(c.jsxs("div", {
        id: "modal",
        children: [c.jsx("div", {
            id: "modal-background",
            onClick: n
        }), c.jsx("div", {
            id: "modal-content",
            children: t
        })]
    }), e.current)
}
const xr = () => x.useContext(cu);
function Ln({modalComponent: e, buttonText: t, onButtonClick: n, onModalClose: r, className: o}) {
    const {setModalContent: l, setOnModalClose: i} = xr()
      , a = s => {
        s.stopPropagation(),
        n && n(s),
        r && i(r),
        l(e)
    }
    ;
    return c.jsx("button", {
        className: o,
        onClick: a,
        children: t
    })
}
function qp() {
    const e = At()
      , [t,n] = x.useState("")
      , [r,o] = x.useState("")
      , [l,i] = x.useState({})
      , {closeModal: a} = xr()
      , s = m => {
        m.preventDefault(),
        i({}),
        e(a0({
            credential: t,
            password: r
        })).then( () => {
            a(),
            window.location.reload()
        }
        ).catch(async g => {
            const w = await g.json();
            w.errors && w.errors.includes("Invalid credentials") ? i({
                credential: "The provided credentials were invalid."
            }) : i({
                credential: "Unknown error occurred, please try again."
            })
        }
        )
    }
      , u = () => {
        e(p0()).then( () => {
            a(),
            window.location.reload()
        }
        ).catch(m => {
            i({
                credential: "Demo login failed. Please try again."
            }),
            console.error("Demo login error:", m)
        }
        )
    }
      , d = t.length < 4 || r.length < 6;
    return c.jsxs("div", {
        className: "login-form-container",
        children: [c.jsx("h1", {
            children: "Log In"
        }), c.jsxs("form", {
            onSubmit: s,
            children: [c.jsxs("label", {
                children: ["Username or Email", c.jsx("input", {
                    type: "text",
                    value: t,
                    onChange: m => n(m.target.value),
                    required: !0
                })]
            }), c.jsxs("label", {
                children: ["Password", c.jsx("input", {
                    type: "password",
                    value: r,
                    onChange: m => o(m.target.value),
                    required: !0
                })]
            }), l.credential && c.jsx("p", {
                className: "error-message",
                children: l.credential
            }), c.jsx("button", {
                type: "submit",
                disabled: d,
                children: "Log In"
            })]
        }), c.jsx("a", {
            href: "#",
            onClick: u,
            className: "demo-user-link",
            children: "Demo User"
        })]
    })
}
function Zp() {
    const e = At()
      , [t,n] = x.useState("")
      , [r,o] = x.useState("")
      , [l,i] = x.useState("")
      , [a,s] = x.useState("")
      , [u,d] = x.useState("")
      , [m,g] = x.useState("")
      , [w,S] = x.useState({})
      , [y,k] = x.useState(!0)
      , {closeModal: h} = xr();
    x.useEffect( () => {
        const v = t.trim() && r.length >= 4 && l.trim() && a.trim() && u.length >= 6 && m === u;
        k(!v)
    }
    , [t, r, l, a, u, m]),
    x.useEffect( () => () => {
        n(""),
        o(""),
        i(""),
        s(""),
        d(""),
        g(""),
        S({})
    }
    , []);
    const f = async v => {
        if (v.preventDefault(),
        u !== m) {
            S({
                confirmPassword: "Confirm Password field must match the Password field"
            });
            return
        }
        try {
            await e(d0({
                email: t,
                username: r,
                firstName: l,
                lastName: a,
                password: u
            })) && (h(),
            window.location.reload())
        } catch (p) {
            const j = await p.json();
            j != null && j.errors && S(j.errors)
        }
    }
    ;
    return c.jsxs(c.Fragment, {
        children: [c.jsx("h1", {
            children: "Sign Up"
        }), c.jsxs("form", {
            onSubmit: f,
            children: [c.jsxs("label", {
                children: ["Email", c.jsx("input", {
                    type: "text",
                    value: t,
                    onChange: v => n(v.target.value),
                    required: !0
                })]
            }), w.email && c.jsx("p", {
                children: w.email
            }), c.jsxs("label", {
                children: ["Username", c.jsx("input", {
                    type: "text",
                    value: r,
                    onChange: v => o(v.target.value),
                    required: !0
                })]
            }), w.username && c.jsx("p", {
                children: w.username
            }), c.jsxs("label", {
                children: ["First Name", c.jsx("input", {
                    type: "text",
                    value: l,
                    onChange: v => i(v.target.value),
                    required: !0
                })]
            }), w.firstName && c.jsx("p", {
                children: w.firstName
            }), c.jsxs("label", {
                children: ["Last Name", c.jsx("input", {
                    type: "text",
                    value: a,
                    onChange: v => s(v.target.value),
                    required: !0
                })]
            }), w.lastName && c.jsx("p", {
                children: w.lastName
            }), c.jsxs("label", {
                children: ["Password", c.jsx("input", {
                    type: "password",
                    value: u,
                    onChange: v => d(v.target.value),
                    required: !0
                })]
            }), w.password && c.jsx("p", {
                children: w.password
            }), c.jsxs("label", {
                children: ["Confirm Password", c.jsx("input", {
                    type: "password",
                    value: m,
                    onChange: v => g(v.target.value),
                    required: !0
                })]
            }), w.confirmPassword && c.jsx("p", {
                children: w.confirmPassword
            }), c.jsx("button", {
                type: "submit",
                className: `signup-button ${y ? "disabled" : ""}`,
                disabled: y,
                children: "Sign Up"
            })]
        })]
    })
}
function bc() {
    const e = At()
      , t = Sr()
      , n = Eo(d => d.session.user)
      , [r,o] = x.useState(!1)
      , l = x.useRef()
      , i = d => {
        d.stopPropagation(),
        o(!r)
    }
    ;
    x.useEffect( () => {
        if (!r)
            return;
        const d = m => {
            l.current.contains(m.target) || o(!1)
        }
        ;
        return document.addEventListener("click", d),
        () => document.removeEventListener("click", d)
    }
    , [r]);
    const a = () => o(!1)
      , s = d => {
        d.preventDefault(),
        e(f0()),
        a(),
        t("/")
    }
      , u = `profile-dropdown ${r ? "visible" : "hidden"}`;
    return c.jsxs(c.Fragment, {
        children: [c.jsxs("button", {
            className: "dropdown-toggle",
            onClick: i,
            children: [c.jsx(Jp, {
                size: 24,
                className: "menu-icon",
                color: "gray"
            }), c.jsx(Xp, {
                size: 24,
                color: "gray"
            })]
        }), c.jsx("ul", {
            className: u,
            ref: l,
            children: n ? c.jsxs(c.Fragment, {
                children: [c.jsxs("li", {
                    className: "greeting",
                    children: ["Hello, ", n == null ? void 0 : n.firstname]
                }), c.jsx("li", {
                    className: "user-info",
                    children: n == null ? void 0 : n.email
                }), c.jsx("li", {
                    children: c.jsx(uu, {
                        to: "/manage-spots",
                        className: "manage-spots-link",
                        children: "Manage Spots"
                    })
                }), c.jsx("li", {
                    children: c.jsx("button", {
                        onClick: s,
                        className: "logout-button",
                        children: "Log Out"
                    })
                })]
            }) : c.jsxs(c.Fragment, {
                children: [c.jsx("li", {
                    children: c.jsx(Ln, {
                        buttonText: "Log In",
                        modalComponent: c.jsx(qp, {})
                    })
                }), c.jsx("li", {
                    children: c.jsx(Ln, {
                        buttonText: "Sign Up",
                        modalComponent: c.jsx(Zp, {})
                    })
                })]
            })
        })]
    })
}
function j0(e) {
    return ko({
        tag: "svg",
        attr: {
            role: "img",
            viewBox: "0 0 24 24"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M12.001 18.275c-1.353-1.697-2.148-3.184-2.413-4.457-.263-1.027-.16-1.848.291-2.465.477-.71 1.188-1.056 2.121-1.056s1.643.345 2.12 1.063c.446.61.558 1.432.286 2.465-.291 1.298-1.085 2.785-2.412 4.458zm9.601 1.14c-.185 1.246-1.034 2.28-2.2 2.783-2.253.98-4.483-.583-6.392-2.704 3.157-3.951 3.74-7.028 2.385-9.018-.795-1.14-1.933-1.695-3.394-1.695-2.944 0-4.563 2.49-3.927 5.382.37 1.565 1.352 3.343 2.917 5.332-.98 1.085-1.91 1.856-2.732 2.333-.636.344-1.245.558-1.828.609-2.679.399-4.778-2.2-3.825-4.88.132-.345.395-.98.845-1.961l.025-.053c1.464-3.178 3.242-6.79 5.285-10.795l.053-.132.58-1.116c.45-.822.635-1.19 1.351-1.643.346-.21.77-.315 1.246-.315.954 0 1.698.558 2.016 1.007.158.239.345.557.582.953l.558 1.089.08.159c2.041 4.004 3.821 7.608 5.279 10.794l.026.025.533 1.22.318.764c.243.613.294 1.222.213 1.858zm1.22-2.39c-.186-.583-.505-1.271-.9-2.094v-.03c-1.889-4.006-3.642-7.608-5.307-10.844l-.111-.163C15.317 1.461 14.468 0 12.001 0c-2.44 0-3.476 1.695-4.535 3.898l-.081.16c-1.669 3.236-3.421 6.843-5.303 10.847v.053l-.559 1.22c-.21.504-.317.768-.345.847C-.172 20.74 2.611 24 5.98 24c.027 0 .132 0 .265-.027h.372c1.75-.213 3.554-1.325 5.384-3.317 1.829 1.989 3.635 3.104 5.382 3.317h.372c.133.027.239.027.265.027 3.37.003 6.152-3.261 4.802-6.975z"
            },
            child: []
        }]
    })(e)
}
function R0({isLoaded: e}) {
    const t = Eo(a => a.session.user)
      , [n,r] = x.useState(!1)
      , o = x.useRef()
      , l = () => r(a => !a);
    x.useEffect( () => {
        if (!n)
            return;
        const a = s => {
            o.current && !o.current.contains(s.target) && r(!1)
        }
        ;
        return document.addEventListener("click", a),
        () => {
            document.removeEventListener("click", a)
        }
    }
    , [n]);
    let i;
    return t ? i = c.jsx(bc, {
        user: t
    }) : i = c.jsxs("div", {
        className: "auth-buttons-container",
        children: [c.jsx(Ln, {
            buttonText: "Log In",
            modalComponent: c.jsx(qp, {})
        }), c.jsx(Ln, {
            buttonText: "Sign Up",
            modalComponent: c.jsx(Zp, {})
        })]
    }),
    c.jsxs("header", {
        className: "navigation",
        children: [c.jsxs(Gc, {
            to: "/",
            className: "logo",
            children: [c.jsx(j0, {
                size: 40,
                color: "#FF5A5F"
            }), c.jsx("span", {
                className: "logo-text",
                children: "airbnb"
            })]
        }), c.jsx("div", {
            className: "dropdown-container",
            ref: o,
            children: t ? c.jsxs("div", {
                className: "nav-actions",
                children: [c.jsx(Gc, {
                    to: "/spots/new",
                    className: "create-spot-link",
                    children: "Create a New Spot"
                }), c.jsx(bc, {
                    user: t
                })]
            }) : c.jsxs(c.Fragment, {
                children: [c.jsxs("button", {
                    className: "dropdown-toggle",
                    onClick: l,
                    children: [c.jsx(Jp, {
                        size: 24,
                        className: "menu-icon",
                        color: "black"
                    }), c.jsx(Xp, {
                        size: 24,
                        color: "black"
                    })]
                }), n && c.jsx("ul", {
                    className: "dropdown-menu",
                    children: e && i
                })]
            })
        })]
    })
}
const N0 = () => {
    const [e,t] = x.useState([])
      , [n,r] = x.useState(!0);
    //return
    x.useEffect( () => {
        (async () => {
            try {
                const i = await (await fetch("/api/spots")).json();
                  const s = (await Promise.all(i.Spots.map(async u => {
                    const g = (await (await fetch(`/api/spots/${u.id}/reviews`)).json()).Reviews || []
                      const w = g.length
                      const S = w ? (g.reduce( (y, k) => y + k.stars, 0) / w).toFixed(1) : "New";
                    return {
                        ...u,
                        avgStarRating: S,
                        numReviews: w
                    }
                }
                ))).sort( (u, d) => new Date(d.updatedAt || d.createdAt) - new Date(u.updatedAt || u.createdAt));
                t(s)
            } catch (l) {
                console.error("Error fetching spots:", l)
            } finally {
                r(!1)
            }
        }
        )()
    }
    , []),
    n ? c.jsx("div", {
        className: "loading",
        children: "Loading spots..."
    }) : c.jsx("div", {
        className: "spot-list",
        children: e.length > 0 ? e.map(o => c.jsxs(uu, {
            to: `/spots/${o.id}`,
            className: "spot-tile",
            children: [c.jsx("img", {
                src: o.previewImage || "/default-image.png",
                alt: o.name,
                className: "spot-image"
            }), c.jsxs("div", {
                className: "spot-info",
                children: [c.jsxs("div", {
                    className: "spot-header",
                    children: [c.jsx("h2", {
                        className: "spot-name",
                        title: o.name,
                        children: o.name
                    }), c.jsxs("div", {
                        className: "spot-rating",
                        children: [c.jsx("span", {
                            className: "star-icon",
                            children: "★"
                        }), o.avgStarRating, " ", o.numReviews > 0 ? `· ${o.numReviews} Review${o.numReviews > 1 ? "s" : ""}` : ""]
                    })]
                }), c.jsxs("p", {
                    className: "spot-location",
                    children: [o.city, ", ", o.state]
                }), c.jsxs("p", {
                    className: "spot-price",
                    children: ["$", o.price, " / night"]
                })]
            })]
        }, o.id)) : c.jsx("p", {
            className: "no-spots-message",
            children: "No spots available"
        })
    })
}
  , bp = "reviews/addReview"
  , P0 = "reviews/getReviews"
  , eh = "reviews/deleteReview"
  , L0 = (e, t) => ({
    type: bp,
    payload: {
        spotId: e,
        review: t
    }
})
  , _0 = (e, t) => ({
    type: eh,
    payload: {
        spotId: e,
        reviewId: t
    }
})
  , D0 = (e, t) => async n => {
    const r = await at(`/api/spots/${e}/reviews`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(t)
    });
    if (r.ok) {
        const o = await r.json();
        return n(L0(e, o)),
        o
    } else
        throw await r.json()
}
  , T0 = (e, t) => async n => {
    const r = await at(`/api/reviews/${t}`, {
        method: "DELETE"
    });
    if (r.ok)
        n(_0(e, t));
    else
        throw await r.json()
}
  , M0 = {
    reviews: {}
}
  , O0 = (e=M0, t) => {
    var n;
    switch (t.type) {
    case bp:
        {
            const {spotId: r, review: o} = t.payload
              , l = e.reviews[r] ? [...e.reviews[r], o] : [o];
            return {
                ...e,
                reviews: {
                    ...e.reviews,
                    [r]: l
                }
            }
        }
    case P0:
        {
            const {spotId: r, reviews: o} = t.payload;
            return {
                ...e,
                reviews: {
                    ...e.reviews,
                    [r]: o
                }
            }
        }
    case eh:
        {
            const {spotId: r, reviewId: o} = t.payload
              , l = (n = e.reviews[r]) == null ? void 0 : n.filter(i => i.id !== o);
            return {
                ...e,
                reviews: {
                    ...e.reviews,
                    [r]: l
                }
            }
        }
    default:
        return e
    }
}
;
function z0({spotId: e, onAddReview: t}) {
    const [n,r] = x.useState("")
      , [o,l] = x.useState(0)
      , [i,a] = x.useState(0)
      , s = At()
      , {closeModal: u} = xr()
      , d = async g => {
        g.preventDefault();
        const w = {
            review: n,
            stars: o
        };
        try {
            const S = await s(D0(e, w));
            t(S),
            r(""),
            l(0),
            u()
        } catch (S) {
            console.error("Error submitting review:", S)
        }
    }
      , m = n.trim().length < 10 || o === 0;
    return c.jsxs("div", {
        className: "review-form-modal",
        children: [c.jsx("h1", {
            children: "How was your stay?"
        }), c.jsxs("form", {
            onSubmit: d,
            children: [c.jsx("textarea", {
                value: n,
                onChange: g => r(g.target.value),
                placeholder: "Leave your review here...",
                required: !0
            }), c.jsx("div", {
                className: "star-rating",
                children: [...Array(5)].map( (g, w) => c.jsx("span", {
                    onMouseEnter: () => a(w + 1),
                    onMouseLeave: () => a(0),
                    onClick: () => l(w + 1),
                    style: {
                        cursor: "pointer"
                    },
                    children: i > w || o > w ? c.jsx(x0, {
                        color: "#FF5A5F",
                        size: 30
                    }) : c.jsx(E0, {
                        color: "#ddd",
                        size: 30
                    })
                }, w))
            }), c.jsx("button", {
                type: "submit",
                className: `submit-review-button ${m ? "disabled" : ""}`,
                disabled: m,
                children: "Submit Your Review"
            })]
        })]
    })
}
const I0 = ({spotId: e, reviewId: t, onReviewDeleted: n}) => {
    const r = At()
      , {closeModal: o} = xr()
      , l = async () => {
        try {
            await r(T0(e, t)),
            n(t),
            o()
        } catch (i) {
            console.error("Error deleting review:", i)
        }
    }
    ;
    return c.jsxs("div", {
        className: "delete-review-modal",
        children: [c.jsx("h2", {
            children: "Confirm Delete"
        }), c.jsx("p", {
            children: "Are you sure you want to delete this review?"
        }), c.jsxs("div", {
            className: "delete-review-buttons",
            children: [c.jsx("button", {
                onClick: l,
                className: "delete-button",
                children: "Yes (Delete Review)"
            }), c.jsx("button", {
                onClick: o,
                className: "cancel-button",
                children: "No (Keep Review)"
            })]
        })]
    })
}
;
function $0() {
    var d, m, g, w, S;
    const {spotId: e} = Bp()
      , [t,n] = x.useState(null)
      , [r,o] = x.useState([])
      , l = Eo(y => y.session.user);
    x.useEffect( () => {
        const y = async () => {
            const f = await (await fetch(`/api/spots/${e}`)).json();
            n(f)
        }
          , k = async () => {
            const f = await (await fetch(`/api/spots/${e}/reviews`)).json();
            o(f.Reviews || [])
        }
        ;
        y(),
        k()
    }
    , [e]);
    const i = y => {
        o(k => [...k, y])
    }
    ;
    if (!t)
        return c.jsx("div", {
            children: "Loading..."
        });
    const a = r.length
      , s = a > 0 ? (r.reduce( (y, k) => y + k.stars, 0) / a).toFixed(1) : "New"
      , u = () => {
        alert("Feature coming soon!")
    }
    ;
    return c.jsxs("div", {
        className: "spot-detail-page",
        children: [c.jsxs("div", {
            className: "spot-header",
            children: [c.jsx("h1", {
                children: t.name
            }), c.jsxs("h2", {
                children: [t.city, ", ", t.state, ", ", t.country]
            })]
        }), c.jsxs("div", {
            className: "spot-images",
            children: [c.jsx("div", {
                className: "main-image-container",
                children: c.jsx("img", {
                    src: ((m = (d = t.SpotImages) == null ? void 0 : d[0]) == null ? void 0 : m.url) || "/placeholder.jpg",
                    alt: "Main",
                    className: "main-image"
                })
            }), c.jsx("div", {
                className: "thumbnail-grid",
                children: (g = t.SpotImages) == null ? void 0 : g.slice(1, 5).map( (y, k) => c.jsx("img", {
                    src: y.url,
                    alt: `Thumbnail ${k + 1}`,
                    className: "thumbnail"
                }, k))
            })]
        }), c.jsxs("div", {
            className: "content-container",
            children: [c.jsxs("div", {
                className: "spot-info",
                children: [c.jsxs("p", {
                    children: ["Hosted by ", (w = t.Owner) == null ? void 0 : w.firstName, " ", (S = t.Owner) == null ? void 0 : S.lastName]
                }), c.jsx("p", {
                    children: t.description
                })]
            }), c.jsxs("div", {
                className: "reserve-box",
                children: [c.jsxs("div", {
                    className: "info-container",
                    children: [c.jsx("span", {
                        className: "price",
                        children: `$${t.price}`
                    }), c.jsx("span", {
                        className: "per-night",
                        children: "/ night"
                    }), c.jsxs("div", {
                        className: "rating",
                        children: [c.jsxs("span", {
                            children: ["★ ", s]
                        }), a > 0 && c.jsxs("span", {
                            children: [" ", "· ", a, " Review", a > 1 ? "s" : ""]
                        })]
                    })]
                }), c.jsx("button", {
                    onClick: u,
                    className: "reserve-button",
                    children: "Reserve"
                })]
            })]
        }), c.jsxs("div", {
            className: "reviews-section",
            children: [c.jsxs("h3", {
                children: ["★ ", s, " · ", a, " Review", a > 1 ? "s" : ""]
            }), l && l.id !== t.ownerId && !r.some(y => y.userId === l.id) && c.jsx("div", {
                className: "post-review-container",
                children: c.jsx(Ln, {
                    buttonText: "Post Your Review",
                    className: "post-review-button",
                    modalComponent: c.jsx(z0, {
                        spotId: e,
                        onAddReview: i
                    })
                })
            }), r.length > 0 ? c.jsx("div", {
                className: "reviews-list",
                children: r.map(y => {
                    var k;
                    return c.jsxs("div", {
                        className: "review-item",
                        children: [c.jsxs("p", {
                            children: [c.jsx("strong", {
                                children: (k = y.User) == null ? void 0 : k.firstName
                            }), " -", " ", new Date(y.createdAt).toLocaleString("en-us", {
                                month: "long",
                                year: "numeric"
                            })]
                        }), c.jsx("p", {
                            children: y.review
                        }), l && l.id === y.userId && c.jsx(Ln, {
                            buttonText: "Delete",
                            className: "delete-review-button",
                            modalComponent: c.jsx(I0, {
                                reviewId: y.id,
                                onReviewDeleted: h => o(f => f.filter(v => v.id !== h))
                            })
                        })]
                    }, y.id)
                }
                )
            }) : c.jsx("p", {
                className: "no-reviews-text",
                children: "No reviews yet."
            })]
        })]
    })
}
const th = "spots/createSpot"
  , U0 = "spots/getSpotDetails"
  , nh = "spots/getAllSpots"
  , rh = "spots/updateSpot"
  , oh = "spots/deleteSpot"
  , F0 = "spots/clearErrors"
  , A0 = e => ({
    type: th,
    payload: e
})
  , B0 = e => ({
    type: nh,
    payload: e
})
  , W0 = e => ({
    type: rh,
    payload: e
})
  , V0 = e => ({
    type: oh,
    payload: e
})
  , H0 = (e, t) => async n => {
    try {
        const r = await at("/api/spots", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(e)
        });
        if (r.ok) {
            const o = await r.json()
              , l = t.map(async (i, a) => {
                const s = await at(`/api/spots/${o.id}/images`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        url: i,
                        preview: a === 0
                    })
                });
                if (!s.ok)
                    throw await s.json();
                return s.json()
            }
            );
            return await Promise.all(l),
            n(A0(o)),
            o
        } else
            throw await r.json()
    } catch (r) {
        throw console.error("Error creating spot:", r),
        r
    }
}
  , Q0 = (e, t) => async n => {
    try {
        const r = await at(`/api/spots/${e}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(t)
        });
        if (r.ok) {
            const o = await r.json();
            n(W0(o));
            const i = await (await at("/api/spots")).json();
            return n(B0(i.Spots)),
            o
        } else
            throw await r.json()
    } catch (r) {
        throw console.error("Failed to update spot:", r),
        r
    }
}
  , K0 = e => async t => {
    try {
        (await at(`/api/spots/${e}`, {
            method: "DELETE"
        })).ok && t(V0(e))
    } catch (n) {
        throw console.error("Failed to delete spot:", n),
        n
    }
}
  , Y0 = {
    spot: null,
    spots: {},
    errors: null
}
  , G0 = (e=Y0, t) => {
    switch (t.type) {
    case th:
        {
            const n = t.payload;
            return {
                ...e,
                spots: {
                    ...e.spots,
                    [n.id]: n
                },
                spot: n
            }
        }
    case U0:
        return {
            ...e,
            spot: t.payload
        };
    case nh:
        {
            const n = {};
            return t.payload.forEach(r => {
                n[r.id] = r
            }
            ),
            {
                ...e,
                spots: n
            }
        }
    case rh:
        {
            const n = t.payload;
            return {
                ...e,
                spots: {
                    ...e.spots,
                    [n.id]: n
                },
                spot: n
            }
        }
    case oh:
        {
            const n = {
                ...e.spots
            };
            return delete n[t.payload],
            {
                ...e,
                spots: n
            }
        }
    case F0:
        return {
            ...e,
            errors: null
        };
    default:
        return e
    }
}
;
function X0() {
    const e = At()
      , t = Sr()
      , [n,r] = x.useState("")
      , [o,l] = x.useState("")
      , [i,a] = x.useState("")
      , [s,u] = x.useState("")
      , [d,m] = x.useState("")
      , [g,w] = x.useState("")
      , [S,y] = x.useState("")
      , [k,h] = x.useState("")
      , [f,v] = x.useState("")
      , [p,j] = x.useState("")
      , [D,_] = x.useState(["", "", "", ""])
      , [L,O] = x.useState({})
      , [I,se] = x.useState(!1)
      , X = async Q => {
        Q.preventDefault(),
        se(!1),
        O({});
        const U = {};
        n || (U.country = "Country is required"),
        o || (U.address = "Address is required"),
        i || (U.city = "City is required"),
        s || (U.state = "State is required"),
        (!S || S.length < 30) && (U.description = "Description needs 30 or more characters"),
        k || (U.name = "Name is required"),
        f || (U.price = "Price per night is required"),
        p || (U.previewImage = "Preview Image URL is required");
        const J = P => /^https?:\/\/.*\.(jpg|jpeg|png|gif)(\?.*)?$/i.test(P);
        if (J(p) || (U.previewImage = "Preview Image URL must be a valid image link (jpg, jpeg, png, gif)"),
        D.forEach( (P, $) => {
            P && !J(P) && (U[`image${$ + 1}`] = `Image ${$ + 1} URL must be valid`)
        }
        ),
        Object.keys(U).length > 0) {
            O(U);
            return
        }
        se(!0);
        const le = {
            country: n,
            address: o,
            city: i,
            state: s,
            lat: d || null,
            lng: g || null,
            description: S,
            name: k,
            price: f
        }
          , q = [p, ...D.filter(P => P.trim() !== "")];
        try {
            const P = await e(H0(le, q));
            t(`/spots/${P.id}`)
        } catch (P) {
            console.error("Error creating spot:", P)
        } finally {
            se(!1)
        }
    }
    ;
    return c.jsxs("div", {
        className: "create-spot-container",
        children: [c.jsx("h1", {
            children: "Create a New Spot"
        }), c.jsxs("form", {
            onSubmit: X,
            className: "create-spot-form",
            children: [c.jsxs("div", {
                className: "form-section",
                children: [c.jsx("h3", {
                    children: "Wheres your place located?"
                }), c.jsx("p", {
                    style: {
                        color: "black"
                    },
                    children: "Guests will only get your exact address once they booked a reservation."
                }), c.jsxs("label", {
                    children: ["Country", c.jsx("input", {
                        type: "text",
                        value: n,
                        onChange: Q => r(Q.target.value),
                        placeholder: "Country"
                    })]
                }), L.country && c.jsx("p", {
                    className: "error-text",
                    children: L.country
                }), c.jsxs("label", {
                    children: ["Street Address", c.jsx("input", {
                        type: "text",
                        value: o,
                        onChange: Q => l(Q.target.value),
                        placeholder: "Address"
                    })]
                }), L.address && c.jsx("p", {
                    className: "error-text",
                    children: L.address
                }), c.jsxs("label", {
                    children: ["City", c.jsx("input", {
                        type: "text",
                        value: i,
                        onChange: Q => a(Q.target.value),
                        placeholder: "City"
                    })]
                }), L.city && c.jsx("p", {
                    className: "error-text",
                    children: L.city
                }), c.jsxs("label", {
                    children: ["State", c.jsx("input", {
                        type: "text",
                        value: s,
                        onChange: Q => u(Q.target.value),
                        placeholder: "State"
                    })]
                }), L.state && c.jsx("p", {
                    className: "error-text",
                    children: L.state
                }), c.jsxs("div", {
                    className: "lat-lng-container",
                    children: [c.jsxs("label", {
                        children: ["Latitude (optional)", c.jsx("input", {
                            type: "number",
                            value: d,
                            onChange: Q => m(Q.target.value),
                            placeholder: "Latitude"
                        })]
                    }), c.jsxs("label", {
                        children: ["Longitude (optional)", c.jsx("input", {
                            type: "number",
                            value: g,
                            onChange: Q => w(Q.target.value),
                            placeholder: "Longitude"
                        })]
                    })]
                })]
            }), c.jsxs("div", {
                className: "form-section",
                children: [c.jsx("h3", {
                    children: "Describe your place to guests"
                }), c.jsx("p", {
                    style: {
                        color: "black"
                    },
                    children: "Mention the best features of your space, any special amenities like fast wifi or parking, and what you love about the neighborhood."
                }), c.jsx("textarea", {
                    value: S,
                    onChange: Q => y(Q.target.value),
                    placeholder: "Please write at least 30 characters"
                }), L.description && c.jsx("p", {
                    className: "error-text",
                    children: L.description
                })]
            }), c.jsxs("div", {
                className: "form-section",
                children: [c.jsx("h3", {
                    children: "Create a title for your spot"
                }), c.jsx("p", {
                    style: {
                        color: "black"
                    },
                    children: "Catch guests attention with a spot title that highlights what makes your place special."
                }), c.jsx("input", {
                    type: "text",
                    value: k,
                    onChange: Q => h(Q.target.value),
                    placeholder: "Name of your spot"
                }), L.name && c.jsx("p", {
                    className: "error-text",
                    children: L.name
                })]
            }), c.jsxs("div", {
                className: "form-section",
                children: [c.jsx("h3", {
                    children: "Set a base price for your spot"
                }), c.jsx("p", {
                    style: {
                        color: "black"
                    },
                    children: "Competitive pricing can help your listing stand out and rank higher in search results."
                }), c.jsx("input", {
                    type: "number",
                    value: f,
                    onChange: Q => v(Q.target.value),
                    placeholder: "Price per night (USD)"
                }), L.price && c.jsx("p", {
                    className: "error-text",
                    children: L.price
                })]
            }), c.jsxs("div", {
                className: "form-section",
                children: [c.jsx("h3", {
                    children: "Liven up your spot with photos"
                }), c.jsx("p", {
                    style: {
                        color: "black"
                    },
                    children: "Submit a link to at least one photo to publish your spot."
                }), c.jsxs("label", {
                    children: ["Preview Image URL", c.jsx("input", {
                        type: "text",
                        value: p,
                        onChange: Q => j(Q.target.value),
                        placeholder: "Preview Image URL"
                    })]
                }), L.previewImage && c.jsx("p", {
                    className: "error-text",
                    children: L.previewImage
                }), D.map( (Q, U) => c.jsxs("label", {
                    children: ["Image URL", c.jsx("input", {
                        type: "text",
                        value: Q,
                        onChange: J => {
                            const le = [...D];
                            le[U] = J.target.value,
                            _(le)
                        }
                        ,
                        placeholder: "Image URL"
                    }), L[`image${U + 1}`] && c.jsx("p", {
                        className: "error-text",
                        children: L[`image${U + 1}`]
                    })]
                }, U))]
            }), c.jsx("button", {
                type: "submit",
                className: "create-spot-button",
                disabled: I,
                children: I ? "Creating Spot..." : "Create Spot"
            })]
        })]
    })
}
function J0() {
    const {spotId: e} = Bp()
      , t = At()
      , n = Sr()
      , [r,o] = x.useState("")
      , [l,i] = x.useState("")
      , [a,s] = x.useState("")
      , [u,d] = x.useState("")
      , [m,g] = x.useState("")
      , [w,S] = x.useState("")
      , [y,k] = x.useState("")
      , [h,f] = x.useState("")
      , [v,p] = x.useState("")
      , [j,D] = x.useState("")
      , [_,L] = x.useState(["", "", "", ""])
      , [O,I] = x.useState({})
      , [se,X] = x.useState(!0);
    x.useEffect( () => {
        (async () => {
            var J;
            try {
                const q = await (await fetch(`/api/spots/${e}`)).json();
                o(q.country || ""),
                i(q.address || ""),
                s(q.city || ""),
                d(q.state || ""),
                g(q.lat || ""),
                S(q.lng || ""),
                k(q.description || ""),
                f(q.name || ""),
                p(q.price || ""),
                D(((J = q.SpotImages[0]) == null ? void 0 : J.url) || ""),
                L(q.SpotImages.slice(1).map(P => P.url) || ["", "", "", ""])
            } catch (le) {
                console.error("Failed to fetch spot details:", le)
            } finally {
                X(!1)
            }
        }
        )()
    }
    , [e]);
    const Q = async U => {
        U.preventDefault(),
        I({});
        const J = {};
        if (r || (J.country = "Country is required"),
        l || (J.address = "Address is required"),
        a || (J.city = "City is required"),
        u || (J.state = "State is required"),
        (!y || y.length < 30) && (J.description = "Description needs 30 or more characters"),
        h || (J.name = "Name is required"),
        v || (J.price = "Price per night is required"),
        j || (J.previewImage = "Preview Image URL is required"),
        Object.keys(J).length > 0) {
            I(J);
            return
        }
        const le = {
            country: r,
            address: l,
            city: a,
            state: u,
            lat: m || null,
            lng: w || null,
            description: y,
            name: h,
            price: v
        }
          , q = [j, ..._.filter(P => P.trim() !== "")];
        try {
            await t(Q0(e, le, q)) && n(`/spots/${e}`)
        } catch (P) {
            console.error("Error updating spot:", P)
        }
    }
    ;
    return se ? c.jsx("div", {
        children: "Loading..."
    }) : c.jsxs("div", {
        className: "create-spot-container",
        children: [c.jsx("h1", {
            children: "Update your Spot"
        }), c.jsxs("form", {
            onSubmit: Q,
            className: "create-spot-form",
            children: [c.jsxs("div", {
                className: "form-section",
                children: [c.jsx("h3", {
                    children: "Wheres your place located?"
                }), c.jsx("p", {
                    style: {
                        color: "black"
                    },
                    children: "Guests will only get your exact address once they book a reservation."
                }), c.jsxs("label", {
                    children: ["Country", c.jsx("input", {
                        type: "text",
                        value: r,
                        onChange: U => o(U.target.value),
                        placeholder: "Country"
                    })]
                }), O.country && c.jsx("p", {
                    className: "error-text",
                    children: O.country
                }), c.jsxs("label", {
                    children: ["Street Address", c.jsx("input", {
                        type: "text",
                        value: l,
                        onChange: U => i(U.target.value),
                        placeholder: "Address"
                    })]
                }), O.address && c.jsx("p", {
                    className: "error-text",
                    children: O.address
                }), c.jsxs("label", {
                    children: ["City", c.jsx("input", {
                        type: "text",
                        value: a,
                        onChange: U => s(U.target.value),
                        placeholder: "City"
                    })]
                }), O.city && c.jsx("p", {
                    className: "error-text",
                    children: O.city
                }), c.jsxs("label", {
                    children: ["State", c.jsx("input", {
                        type: "text",
                        value: u,
                        onChange: U => d(U.target.value),
                        placeholder: "State"
                    })]
                }), O.state && c.jsx("p", {
                    className: "error-text",
                    children: O.state
                }), c.jsxs("div", {
                    className: "lat-lng-container",
                    children: [c.jsxs("label", {
                        children: ["Latitude (optional)", c.jsx("input", {
                            type: "number",
                            value: m,
                            onChange: U => g(U.target.value),
                            placeholder: "Latitude"
                        })]
                    }), c.jsxs("label", {
                        children: ["Longitude (optional)", c.jsx("input", {
                            type: "number",
                            value: w,
                            onChange: U => S(U.target.value),
                            placeholder: "Longitude"
                        })]
                    })]
                })]
            }), c.jsxs("div", {
                className: "form-section",
                children: [c.jsx("h3", {
                    children: "Describe your place to guests"
                }), c.jsx("p", {
                    style: {
                        color: "black"
                    },
                    children: "Mention the best features of your space and any special amenities like fast wifi or parking."
                }), c.jsx("textarea", {
                    value: y,
                    onChange: U => k(U.target.value),
                    placeholder: "Please write at least 30 characters"
                }), O.description && c.jsx("p", {
                    className: "error-text",
                    children: O.description
                })]
            }), c.jsxs("div", {
                className: "form-section",
                children: [c.jsx("h3", {
                    children: "Create a title for your spot"
                }), c.jsx("p", {
                    style: {
                        color: "black"
                    },
                    children: "Catch guests attention with a spot title that highlights what makes your place special."
                }), c.jsx("input", {
                    type: "text",
                    value: h,
                    onChange: U => f(U.target.value),
                    placeholder: "Name of your spot"
                }), O.name && c.jsx("p", {
                    className: "error-text",
                    children: O.name
                })]
            }), c.jsxs("div", {
                className: "form-section",
                children: [c.jsx("h3", {
                    children: "Set a base price for your spot"
                }), c.jsx("p", {
                    style: {
                        color: "black"
                    },
                    children: "Competitive pricing can help your listing stand out and rank higher in search results."
                }), c.jsx("input", {
                    type: "number",
                    value: v,
                    onChange: U => p(U.target.value),
                    placeholder: "Price per night (USD)"
                }), O.price && c.jsx("p", {
                    className: "error-text",
                    children: O.price
                })]
            }), c.jsxs("div", {
                className: "form-section",
                children: [c.jsx("h3", {
                    children: "Liven up your spot with photos"
                }), c.jsx("p", {
                    style: {
                        color: "black"
                    },
                    children: "Submit a link to at least one photo to publish your spot."
                }), c.jsxs("label", {
                    children: ["Preview Image URL", c.jsx("input", {
                        type: "text",
                        value: j,
                        onChange: U => D(U.target.value),
                        placeholder: "Preview Image URL"
                    })]
                }), O.previewImage && c.jsx("p", {
                    className: "error-text",
                    children: O.previewImage
                }), _.map( (U, J) => c.jsxs("label", {
                    children: ["Image URL", c.jsx("input", {
                        type: "text",
                        value: U,
                        onChange: le => {
                            const q = [..._];
                            q[J] = le.target.value,
                            L(q)
                        }
                        ,
                        placeholder: "Image URL"
                    })]
                }, J))]
            }), c.jsx("button", {
                type: "submit",
                className: "create-spot-button",
                children: "Update your Spot"
            })]
        })]
    })
}
function q0({spotId: e}) {
    const t = At()
      , {closeModal: n} = xr()
      , r = async () => {
        try {
            await t(K0(e)),
            n(),
            window.location.reload()
        } catch (o) {
            console.error("Failed to delete the spot:", o)
        }
    }
    ;
    return c.jsxs("div", {
        className: "delete-spot-modal",
        children: [c.jsx("h2", {
            children: "Confirm Delete"
        }), c.jsx("p", {
            children: "Are you sure you want to remove this spot from the listings?"
        }), c.jsxs("div", {
            className: "delete-spot-buttons",
            children: [c.jsx("button", {
                onClick: r,
                className: "delete-button yes-button",
                children: "Yes (Delete Spot)"
            }), c.jsx("button", {
                onClick: n,
                className: "cancel-button no-button",
                children: "No (Keep Spot)"
            })]
        })]
    })
}
function Z0() {
    const [e,t] = x.useState([])
      , [n,r] = x.useState(!0)
      , o = Eo(u => u.session.user)
      , l = Sr();
    x.useEffect( () => {
        o && (async () => {
            r(!0);
            try {
                const m = await (await fetch("/api/spots/current")).json()
                  , w = (await Promise.all(m.Spots.map(async S => {
                    const h = (await (await fetch(`/api/spots/${S.id}/reviews`)).json()).Reviews || []
                      , f = h.length
                      , v = f > 0 ? (h.reduce( (p, j) => p + j.stars, 0) / f).toFixed(1) : "New";
                    return {
                        ...S,
                        avgStarRating: v,
                        numReviews: f
                    }
                }
                ))).sort( (S, y) => new Date(y.updatedAt || y.createdAt) - new Date(S.updatedAt || S.createdAt));
                t(w)
            } catch (d) {
                console.error("Error fetching spots:", d)
            } finally {
                r(!1)
            }
        }
        )()
    }
    , [o]);
    const i = u => {
        l(`/spots/${u}/edit`)
    }
      , a = async u => {
        try {
            (await fetch(`/api/spots/${u}`, {
                method: "DELETE"
            })).ok ? t(m => m.filter(g => g.id !== u)) : console.error("Failed to delete spot")
        } catch (d) {
            console.error("Error deleting spot:", d)
        }
    }
      , s = u => {
        l(`/spots/${u}`)
    }
    ;
    return o ? c.jsxs("div", {
        className: "manage-spots-page",
        children: [c.jsx("h1", {
            children: "Manage Spots"
        }), n ? c.jsx("div", {
            className: "loading",
            children: c.jsx("p", {
                children: "Loading spots..."
            })
        }) : e.length === 0 ? c.jsxs("div", {
            className: "no-spots",
            children: [c.jsx("p", {
                className: "no-spots-message",
                children: "You have not created any spots yet."
            }), c.jsx("button", {
                onClick: () => l("/spots/new"),
                className: "create-spot-button",
                children: "Create a New Spot"
            })]
        }) : c.jsx("div", {
            className: "spot-list",
            children: e.map(u => c.jsxs("div", {
                className: "spot-tile",
                onClick: () => s(u.id),
                children: [c.jsx("img", {
                    src: u.previewImage || "/default-image.png",
                    alt: u.name,
                    className: "spot-image"
                }), c.jsxs("div", {
                    className: "spot-info",
                    children: [c.jsxs("div", {
                        className: "spot-header",
                        children: [c.jsx("h2", {
                            className: "spot-name",
                            title: u.name,
                            children: u.name
                        }), c.jsxs("div", {
                            className: "spot-rating",
                            children: [c.jsx("span", {
                                className: "star-icon",
                                children: "★"
                            }), u.avgStarRating, " ", u.numReviews > 0 ? `· ${u.numReviews} Review${u.numReviews > 1 ? "s" : ""}` : ""]
                        })]
                    }), c.jsxs("p", {
                        className: "spot-location",
                        children: [u.city, ", ", u.state]
                    }), c.jsxs("p", {
                        className: "spot-price",
                        children: ["$", u.price, " / night"]
                    }), c.jsxs("div", {
                        className: "spot-buttons",
                        children: [c.jsx("button", {
                            onClick: d => {
                                d.stopPropagation(),
                                i(u.id)
                            }
                            ,
                            className: "update-button",
                            children: "Update"
                        }), c.jsx(Ln, {
                            className: "custom-delete-button",
                            buttonText: "Delete",
                            modalComponent: c.jsx(q0, {
                                spotId: u.id,
                                onDelete: () => a(u.id)
                            }),
                            onButtonClick: d => d.stopPropagation()
                        })]
                    })]
                })]
            }, u.id))
        })]
    }) : c.jsx("p", {
        children: "Please log in to manage your spots."
    })
}
function b0() {
    const e = At()
      , [t,n] = x.useState(!1);
    return x.useEffect( () => {
        e(c0()).then( () => n(!0)).catch( () => n(!0))
    }
    , [e]),
    t ? c.jsxs(c.Fragment, {
        children: [c.jsx(R0, {
            isLoaded: t
        }), t && c.jsx(Hy, {})]
    }) : c.jsx("div", {
        children: "Loading..."
    })
}
function oa({children: e}) {
    return Eo(n => n.session.user) ? e : c.jsx(Vy, {
        to: "/",
        replace: !0
    })
}
const e1 = qy([{
    element: c.jsx(b0, {}),
    children: [{
        path: "/",
        element: c.jsx(N0, {})
    }, {
        path: "/spots/:spotId",
        element: c.jsx($0, {})
    }, {
        path: "/spots/new",
        element: c.jsx(oa, {
            children: c.jsx(X0, {})
        })
    }, {
        path: "/manage-spots",
        element: c.jsx(oa, {
            children: c.jsx(Z0, {})
        })
    }, {
        path: "/spots/:spotId/edit",
        element: c.jsx(oa, {
            children: c.jsx(J0, {})
        })
    }, {
        path: "*",
        element: c.jsx("div", {
            children: "Page Not Found"
        })
    }]
}]);
function t1() {
    return c.jsx(By, {
        router: e1
    })
}
function vo(e) {
    "@babel/helpers - typeof";
    return vo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
    ,
    vo(e)
}
function n1(e, t) {
    if (vo(e) !== "object" || e === null)
        return e;
    var n = e[Symbol.toPrimitive];
    if (n !== void 0) {
        var r = n.call(e, t || "default");
        if (vo(r) !== "object")
            return r;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}
function r1(e) {
    var t = n1(e, "string");
    return vo(t) === "symbol" ? t : String(t)
}
function o1(e, t, n) {
    return t = r1(t),
    t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n,
    e
}
function ed(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(o) {
            return Object.getOwnPropertyDescriptor(e, o).enumerable
        })),
        n.push.apply(n, r)
    }
    return n
}
function td(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] != null ? arguments[t] : {};
        t % 2 ? ed(Object(n), !0).forEach(function(r) {
            o1(e, r, n[r])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ed(Object(n)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
        })
    }
    return e
}
function ze(e) {
    return "Minified Redux error #" + e + "; visit https://redux.js.org/Errors?code=" + e + " for the full message or use the non-minified dev environment for full errors. "
}
var nd = function() {
    return typeof Symbol == "function" && Symbol.observable || "@@observable"
}()
  , la = function() {
    return Math.random().toString(36).substring(7).split("").join(".")
}
  , Tl = {
    INIT: "@@redux/INIT" + la(),
    REPLACE: "@@redux/REPLACE" + la(),
    PROBE_UNKNOWN_ACTION: function() {
        return "@@redux/PROBE_UNKNOWN_ACTION" + la()
    }
};
function l1(e) {
    if (typeof e != "object" || e === null)
        return !1;
    for (var t = e; Object.getPrototypeOf(t) !== null; )
        t = Object.getPrototypeOf(t);
    return Object.getPrototypeOf(e) === t
}
function lh(e, t, n) {
    var r;
    if (typeof t == "function" && typeof n == "function" || typeof n == "function" && typeof arguments[3] == "function")
        throw new Error(ze(0));
    if (typeof t == "function" && typeof n > "u" && (n = t,
    t = void 0),
    typeof n < "u") {
        if (typeof n != "function")
            throw new Error(ze(1));
        return n(lh)(e, t)
    }
    if (typeof e != "function")
        throw new Error(ze(2));
    var o = e
      , l = t
      , i = []
      , a = i
      , s = !1;
    function u() {
        a === i && (a = i.slice())
    }
    function d() {
        if (s)
            throw new Error(ze(3));
        return l
    }
    function m(y) {
        if (typeof y != "function")
            throw new Error(ze(4));
        if (s)
            throw new Error(ze(5));
        var k = !0;
        return u(),
        a.push(y),
        function() {
            if (k) {
                if (s)
                    throw new Error(ze(6));
                k = !1,
                u();
                var f = a.indexOf(y);
                a.splice(f, 1),
                i = null
            }
        }
    }
    function g(y) {
        if (!l1(y))
            throw new Error(ze(7));
        if (typeof y.type > "u")
            throw new Error(ze(8));
        if (s)
            throw new Error(ze(9));
        try {
            s = !0,
            l = o(l, y)
        } finally {
            s = !1
        }
        for (var k = i = a, h = 0; h < k.length; h++) {
            var f = k[h];
            f()
        }
        return y
    }
    function w(y) {
        if (typeof y != "function")
            throw new Error(ze(10));
        o = y,
        g({
            type: Tl.REPLACE
        })
    }
    function S() {
        var y, k = m;
        return y = {
            subscribe: function(f) {
                if (typeof f != "object" || f === null)
                    throw new Error(ze(11));
                function v() {
                    f.next && f.next(d())
                }
                v();
                var p = k(v);
                return {
                    unsubscribe: p
                }
            }
        },
        y[nd] = function() {
            return this
        }
        ,
        y
    }
    return g({
        type: Tl.INIT
    }),
    r = {
        dispatch: g,
        subscribe: m,
        getState: d,
        replaceReducer: w
    },
    r[nd] = S,
    r
}
function i1(e) {
    Object.keys(e).forEach(function(t) {
        var n = e[t]
          , r = n(void 0, {
            type: Tl.INIT
        });
        if (typeof r > "u")
            throw new Error(ze(12));
        if (typeof n(void 0, {
            type: Tl.PROBE_UNKNOWN_ACTION()
        }) > "u")
            throw new Error(ze(13))
    })
}
function a1(e) {
    for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
        var o = t[r];
        typeof e[o] == "function" && (n[o] = e[o])
    }
    var l = Object.keys(n), i;
    try {
        i1(n)
    } catch (a) {
        i = a
    }
    return function(s, u) {
        if (s === void 0 && (s = {}),
        i)
            throw i;
        for (var d = !1, m = {}, g = 0; g < l.length; g++) {
            var w = l[g]
              , S = n[w]
              , y = s[w]
              , k = S(y, u);
            if (typeof k > "u")
                throw u && u.type,
                new Error(ze(14));
            m[w] = k,
            d = d || k !== y
        }
        return d = d || l.length !== Object.keys(s).length,
        d ? m : s
    }
}
function s1() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
    return t.length === 0 ? function(r) {
        return r
    }
    : t.length === 1 ? t[0] : t.reduce(function(r, o) {
        return function() {
            return r(o.apply(void 0, arguments))
        }
    })
}
function u1() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
    return function(r) {
        return function() {
            var o = r.apply(void 0, arguments)
              , l = function() {
                throw new Error(ze(15))
            }
              , i = {
                getState: o.getState,
                dispatch: function() {
                    return l.apply(void 0, arguments)
                }
            }
              , a = t.map(function(s) {
                return s(i)
            });
            return l = s1.apply(void 0, a)(o.dispatch),
            td(td({}, o), {}, {
                dispatch: l
            })
        }
    }
}
function ih(e) {
    var t = function(r) {
        var o = r.dispatch
          , l = r.getState;
        return function(i) {
            return function(a) {
                return typeof a == "function" ? a(o, l, e) : i(a)
            }
        }
    };
    return t
}
var ah = ih();
ah.withExtraArgument = ih;
const c1 = ah
  , d1 = a1({
    session: u0,
    spots: G0,
    reviews: O0
});
let sh;
sh = u1(c1);
const f1 = e => lh(d1, e, sh)
  , p1 = f1();
ia.createRoot(document.getElementById("root")).render(c.jsx(Tt.StrictMode, {
    children: c.jsx(C0, {
        children: c.jsxs(Mg, {
            store: p1,
            children: [c.jsx(t1, {}), c.jsx(k0, {})]
        })
    })
}));

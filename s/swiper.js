!function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Swiper = t()
}(this, function() {
    "use strict";
    function e(e, t) {
        var a = []
            , i = 0;
        if (e && !t && e instanceof W)
            return e;
        if (e)
            if ("string" == typeof e) {
                var s, r, n = e.trim();
                if (n.indexOf("<") >= 0 && n.indexOf(">") >= 0) {
                    var o = "div";
                    for (0 === n.indexOf("<li") && (o = "ul"),
                         0 === n.indexOf("<tr") && (o = "tbody"),
                         0 !== n.indexOf("<td") && 0 !== n.indexOf("<th") || (o = "tr"),
                         0 === n.indexOf("<tbody") && (o = "table"),
                         0 === n.indexOf("<option") && (o = "select"),
                             r = document.createElement(o),
                             r.innerHTML = n,
                             i = 0; i < r.childNodes.length; i += 1)
                        a.push(r.childNodes[i])
                } else
                    for (s = t || "#" !== e[0] || e.match(/[ .<>:~]/) ? (t || document).querySelectorAll(e.trim()) : [document.getElementById(e.trim().split("#")[1])],
                             i = 0; i < s.length; i += 1)
                        s[i] && a.push(s[i])
            } else if (e.nodeType || e === window || e === document)
                a.push(e);
            else if (e.length > 0 && e[0].nodeType)
                for (i = 0; i < e.length; i += 1)
                    a.push(e[i]);
        return new W(a)
    }
    function t(e) {
        for (var t = [], a = 0; a < e.length; a += 1)
            t.indexOf(e[a]) === -1 && t.push(e[a]);
        return t
    }
    function a(e) {
        var t = this;
        if ("undefined" == typeof e)
            return this;
        for (var a = e.split(" "), i = 0; i < a.length; i += 1)
            for (var s = 0; s < this.length; s += 1)
                "undefined" != typeof t[s].classList && t[s].classList.add(a[i]);
        return this
    }
    function i(e) {
        for (var t = this, a = e.split(" "), i = 0; i < a.length; i += 1)
            for (var s = 0; s < this.length; s += 1)
                "undefined" != typeof t[s].classList && t[s].classList.remove(a[i]);
        return this
    }
    function s(e) {
        return !!this[0] && this[0].classList.contains(e)
    }
    function r(e) {
        for (var t = this, a = e.split(" "), i = 0; i < a.length; i += 1)
            for (var s = 0; s < this.length; s += 1)
                "undefined" != typeof t[s].classList && t[s].classList.toggle(a[i]);
        return this
    }
    function n(e, t) {
        var a = arguments
            , i = this;
        if (1 !== arguments.length || "string" != typeof e) {
            for (var s = 0; s < this.length; s += 1)
                if (2 === a.length)
                    i[s].setAttribute(e, t);
                else
                    for (var r in e)
                        i[s][r] = e[r],
                            i[s].setAttribute(r, e[r]);
            return this
        }
        if (this[0])
            return this[0].getAttribute(e)
    }
    function o(e) {
        for (var t = this, a = 0; a < this.length; a += 1)
            t[a].removeAttribute(e);
        return this
    }
    function l(e, t) {
        var a, i = this;
        if ("undefined" != typeof t) {
            for (var s = 0; s < this.length; s += 1)
                a = i[s],
                a.dom7ElementDataStorage || (a.dom7ElementDataStorage = {}),
                    a.dom7ElementDataStorage[e] = t;
            return this
        }
        if (a = this[0]) {
            if (a.dom7ElementDataStorage && e in a.dom7ElementDataStorage)
                return a.dom7ElementDataStorage[e];
            var r = a.getAttribute("data-" + e);
            if (r)
                return r
        } else
            ;
    }
    function d(e) {
        for (var t = this, a = 0; a < this.length; a += 1) {
            var i = t[a].style;
            i.webkitTransform = e,
                i.transform = e
        }
        return this
    }
    function p(e) {
        var t = this;
        "string" != typeof e && (e += "ms");
        for (var a = 0; a < this.length; a += 1) {
            var i = t[a].style;
            i.webkitTransitionDuration = e,
                i.transitionDuration = e
        }
        return this
    }
    function c() {
        function t(t) {
            var a = t.target;
            if (a) {
                var i = t.target.dom7EventData || [];
                if (i.unshift(t),
                    e(a).is(o))
                    l.apply(a, i);
                else
                    for (var s = e(a).parents(), r = 0; r < s.length; r += 1)
                        e(s[r]).is(o) && l.apply(s[r], i)
            }
        }
        function a(e) {
            var t = e && e.target ? e.target.dom7EventData || [] : [];
            t.unshift(e),
                l.apply(this, t)
        }
        for (var i = this, s = [], r = arguments.length; r--; )
            s[r] = arguments[r];
        var n = s[0]
            , o = s[1]
            , l = s[2]
            , d = s[3];
        if ("function" == typeof s[1]) {
            var p;
            p = s,
                n = p[0],
                l = p[1],
                d = p[2],
                o = void 0
        }
        d || (d = !1);
        for (var c, u = n.split(" "), h = 0; h < this.length; h += 1) {
            var f = i[h];
            if (o)
                for (c = 0; c < u.length; c += 1)
                    f.dom7LiveListeners || (f.dom7LiveListeners = []),
                        f.dom7LiveListeners.push({
                            type: n,
                            listener: l,
                            proxyListener: t
                        }),
                        f.addEventListener(u[c], t, d);
            else
                for (c = 0; c < u.length; c += 1)
                    f.dom7Listeners || (f.dom7Listeners = []),
                        f.dom7Listeners.push({
                            type: n,
                            listener: l,
                            proxyListener: a
                        }),
                        f.addEventListener(u[c], a, d)
        }
        return this
    }
    function u() {
        for (var e = this, t = [], a = arguments.length; a--; )
            t[a] = arguments[a];
        var i = t[0]
            , s = t[1]
            , r = t[2]
            , n = t[3];
        if ("function" == typeof t[1]) {
            var o;
            o = t,
                i = o[0],
                r = o[1],
                n = o[2],
                s = void 0
        }
        n || (n = !1);
        for (var l = i.split(" "), d = 0; d < l.length; d += 1)
            for (var p = 0; p < this.length; p += 1) {
                var c = e[p];
                if (s) {
                    if (c.dom7LiveListeners)
                        for (var u = 0; u < c.dom7LiveListeners.length; u += 1)
                            r ? c.dom7LiveListeners[u].listener === r && c.removeEventListener(l[d], c.dom7LiveListeners[u].proxyListener, n) : c.dom7LiveListeners[u].type === l[d] && c.removeEventListener(l[d], c.dom7LiveListeners[u].proxyListener, n)
                } else if (c.dom7Listeners)
                    for (var h = 0; h < c.dom7Listeners.length; h += 1)
                        r ? c.dom7Listeners[h].listener === r && c.removeEventListener(l[d], c.dom7Listeners[h].proxyListener, n) : c.dom7Listeners[h].type === l[d] && c.removeEventListener(l[d], c.dom7Listeners[h].proxyListener, n)
            }
        return this
    }
    function h() {
        for (var e = this, t = [], a = arguments.length; a--; )
            t[a] = arguments[a];
        for (var i = t[0].split(" "), s = t[1], r = 0; r < i.length; r += 1)
            for (var n = 0; n < this.length; n += 1) {
                var o = void 0;
                try {
                    o = new window.CustomEvent(i[r],{
                        detail: s,
                        bubbles: !0,
                        cancelable: !0
                    })
                } catch (l) {
                    o = document.createEvent("Event"),
                        o.initEvent(i[r], !0, !0),
                        o.detail = s
                }
                e[n].dom7EventData = t.filter(function(e, t) {
                    return t > 0
                }),
                    e[n].dispatchEvent(o),
                    e[n].dom7EventData = [],
                    delete e[n].dom7EventData
            }
        return this
    }
    function f(e) {
        function t(r) {
            if (r.target === this)
                for (e.call(this, r),
                         a = 0; a < i.length; a += 1)
                    s.off(i[a], t)
        }
        var a, i = ["webkitTransitionEnd", "transitionend"], s = this;
        if (e)
            for (a = 0; a < i.length; a += 1)
                s.on(i[a], t);
        return this
    }
    function v(e) {
        if (this.length > 0) {
            if (e) {
                var t = this.styles();
                return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"))
            }
            return this[0].offsetWidth
        }
        return null
    }
    function m(e) {
        if (this.length > 0) {
            if (e) {
                var t = this.styles();
                return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"))
            }
            return this[0].offsetHeight
        }
        return null
    }
    function g() {
        if (this.length > 0) {
            var e = this[0]
                , t = e.getBoundingClientRect()
                , a = document.body
                , i = e.clientTop || a.clientTop || 0
                , s = e.clientLeft || a.clientLeft || 0
                , r = e === window ? window.scrollY : e.scrollTop
                , n = e === window ? window.scrollX : e.scrollLeft;
            return {
                top: t.top + r - i,
                left: t.left + n - s
            }
        }
        return null
    }
    function b() {
        return this[0] ? window.getComputedStyle(this[0], null) : {}
    }
    function y(e, t) {
        var a, i = this;
        if (1 === arguments.length) {
            if ("string" != typeof e) {
                for (a = 0; a < this.length; a += 1)
                    for (var s in e)
                        i[a].style[s] = e[s];
                return this
            }
            if (this[0])
                return window.getComputedStyle(this[0], null).getPropertyValue(e)
        }
        if (2 === arguments.length && "string" == typeof e) {
            for (a = 0; a < this.length; a += 1)
                i[a].style[e] = t;
            return this
        }
        return this
    }
    function w(e) {
        var t = this;
        if (!e)
            return this;
        for (var a = 0; a < this.length; a += 1)
            if (e.call(t[a], a, t[a]) === !1)
                return t;
        return this
    }
    function x(e) {
        var t = this;
        if ("undefined" == typeof e)
            return this[0] ? this[0].innerHTML : void 0;
        for (var a = 0; a < this.length; a += 1)
            t[a].innerHTML = e;
        return this
    }
    function E(e) {
        var t = this;
        if ("undefined" == typeof e)
            return this[0] ? this[0].textContent.trim() : null;
        for (var a = 0; a < this.length; a += 1)
            t[a].textContent = e;
        return this
    }
    function T(t) {
        var a, i, s = this[0];
        if (!s || "undefined" == typeof t)
            return !1;
        if ("string" == typeof t) {
            if (s.matches)
                return s.matches(t);
            if (s.webkitMatchesSelector)
                return s.webkitMatchesSelector(t);
            if (s.msMatchesSelector)
                return s.msMatchesSelector(t);
            for (a = e(t),
                     i = 0; i < a.length; i += 1)
                if (a[i] === s)
                    return !0;
            return !1
        }
        if (t === document)
            return s === document;
        if (t === window)
            return s === window;
        if (t.nodeType || t instanceof W) {
            for (a = t.nodeType ? [t] : t,
                     i = 0; i < a.length; i += 1)
                if (a[i] === s)
                    return !0;
            return !1
        }
        return !1
    }
    function S() {
        var e, t = this[0];
        if (t) {
            for (e = 0; null !== (t = t.previousSibling); )
                1 === t.nodeType && (e += 1);
            return e
        }
    }
    function C(e) {
        if ("undefined" == typeof e)
            return this;
        var t, a = this.length;
        return e > a - 1 ? new W([]) : e < 0 ? (t = a + e,
            new W(t < 0 ? [] : [this[t]])) : new W([this[e]])
    }
    function M() {
        for (var e = this, t = [], a = arguments.length; a--; )
            t[a] = arguments[a];
        for (var i, s = 0; s < t.length; s += 1) {
            i = t[s];
            for (var r = 0; r < this.length; r += 1)
                if ("string" == typeof i) {
                    var n = document.createElement("div");
                    for (n.innerHTML = i; n.firstChild; )
                        e[r].appendChild(n.firstChild)
                } else if (i instanceof W)
                    for (var o = 0; o < i.length; o += 1)
                        e[r].appendChild(i[o]);
                else
                    e[r].appendChild(i)
        }
        return this
    }
    function z(e) {
        var t, a, i = this;
        for (t = 0; t < this.length; t += 1)
            if ("string" == typeof e) {
                var s = document.createElement("div");
                for (s.innerHTML = e,
                         a = s.childNodes.length - 1; a >= 0; a -= 1)
                    i[t].insertBefore(s.childNodes[a], i[t].childNodes[0])
            } else if (e instanceof W)
                for (a = 0; a < e.length; a += 1)
                    i[t].insertBefore(e[a], i[t].childNodes[0]);
            else
                i[t].insertBefore(e, i[t].childNodes[0]);
        return this
    }
    function P(t) {
        return new W(this.length > 0 ? t ? this[0].nextElementSibling && e(this[0].nextElementSibling).is(t) ? [this[0].nextElementSibling] : [] : this[0].nextElementSibling ? [this[0].nextElementSibling] : [] : [])
    }
    function k(t) {
        var a = []
            , i = this[0];
        if (!i)
            return new W([]);
        for (; i.nextElementSibling; ) {
            var s = i.nextElementSibling;
            t ? e(s).is(t) && a.push(s) : a.push(s),
                i = s
        }
        return new W(a)
    }
    function $(t) {
        if (this.length > 0) {
            var a = this[0];
            return new W(t ? a.previousElementSibling && e(a.previousElementSibling).is(t) ? [a.previousElementSibling] : [] : a.previousElementSibling ? [a.previousElementSibling] : [])
        }
        return new W([])
    }
    function I(t) {
        var a = []
            , i = this[0];
        if (!i)
            return new W([]);
        for (; i.previousElementSibling; ) {
            var s = i.previousElementSibling;
            t ? e(s).is(t) && a.push(s) : a.push(s),
                i = s
        }
        return new W(a)
    }
    function L(a) {
        for (var i = this, s = [], r = 0; r < this.length; r += 1)
            null !== i[r].parentNode && (a ? e(i[r].parentNode).is(a) && s.push(i[r].parentNode) : s.push(i[r].parentNode));
        return e(t(s))
    }
    function D(a) {
        for (var i = this, s = [], r = 0; r < this.length; r += 1)
            for (var n = i[r].parentNode; n; )
                a ? e(n).is(a) && s.push(n) : s.push(n),
                    n = n.parentNode;
        return e(t(s))
    }
    function O(e) {
        var t = this;
        return "undefined" == typeof e ? new W([]) : (t.is(e) || (t = t.parents(e).eq(0)),
            t)
    }
    function A(e) {
        for (var t = this, a = [], i = 0; i < this.length; i += 1)
            for (var s = t[i].querySelectorAll(e), r = 0; r < s.length; r += 1)
                a.push(s[r]);
        return new W(a)
    }
    function H(a) {
        for (var i = this, s = [], r = 0; r < this.length; r += 1)
            for (var n = i[r].childNodes, o = 0; o < n.length; o += 1)
                a ? 1 === n[o].nodeType && e(n[o]).is(a) && s.push(n[o]) : 1 === n[o].nodeType && s.push(n[o]);
        return new W(t(s))
    }
    function X() {
        for (var e = this, t = 0; t < this.length; t += 1)
            e[t].parentNode && e[t].parentNode.removeChild(e[t]);
        return this
    }
    function N() {
        for (var t = [], a = arguments.length; a--; )
            t[a] = arguments[a];
        var i, s, r = this;
        for (i = 0; i < t.length; i += 1) {
            var n = e(t[i]);
            for (s = 0; s < n.length; s += 1)
                r[r.length] = n[s],
                    r.length += 1
        }
        return r
    }
    function Y() {
        var e = this
            , t = e.params
            , a = e.touchEvents
            , i = e.el
            , s = e.wrapperEl;
        e.onTouchStart = Xe.bind(e),
            e.onTouchMove = Ne.bind(e),
            e.onTouchEnd = Ye.bind(e),
            e.onClick = Be.bind(e);
        var r = "container" === t.touchEventsTarget ? i : s
            , n = !!t.nested;
        if (ge.ie)
            r.addEventListener(a.start, e.onTouchStart, !1),
                (U.touch ? r : K).addEventListener(a.move, e.onTouchMove, n),
                (U.touch ? r : K).addEventListener(a.end, e.onTouchEnd, !1);
        else {
            if (U.touch) {
                var o = !("onTouchStart" !== a.start || !U.passiveListener || !t.passiveListeners) && {
                    passive: !0,
                    capture: !1
                };
                r.addEventListener(a.start, e.onTouchStart, o),
                    r.addEventListener(a.move, e.onTouchMove, n),
                    r.addEventListener(a.end, e.onTouchEnd, o)
            }
            (t.simulateTouch && !He.ios && !He.android || t.simulateTouch && !U.touch && He.ios) && (r.addEventListener("mousedown", e.onTouchStart, !1),
                K.addEventListener("mousemove", e.onTouchMove, n),
                K.addEventListener("mouseup", e.onTouchEnd, !1))
        }
        (t.preventClicks || t.preventClicksPropagation) && r.addEventListener("click", e.onClick, !0),
            e.on("resize observerUpdate", Ge)
    }
    function G() {
        var e = this
            , t = e.params
            , a = e.touchEvents
            , i = e.el
            , s = e.wrapperEl
            , r = "container" === t.touchEventsTarget ? i : s
            , n = !!t.nested;
        if (ge.ie)
            r.removeEventListener(a.start, e.onTouchStart, !1),
                (U.touch ? r : K).removeEventListener(a.move, e.onTouchMove, n),
                (U.touch ? r : K).removeEventListener(a.end, e.onTouchEnd, !1);
        else {
            if (U.touch) {
                var o = !("onTouchStart" !== a.start || !U.passiveListener || !t.passiveListeners) && {
                    passive: !0,
                    capture: !1
                };
                r.removeEventListener(a.start, e.onTouchStart, o),
                    r.removeEventListener(a.move, e.onTouchMove, n),
                    r.removeEventListener(a.end, e.onTouchEnd, o)
            }
            (t.simulateTouch && !He.ios && !He.android || t.simulateTouch && !U.touch && He.ios) && (r.removeEventListener("mousedown", e.onTouchStart, !1),
                K.removeEventListener("mousemove", e.onTouchMove, n),
                K.removeEventListener("mouseup", e.onTouchEnd, !1))
        }
        (t.preventClicks || t.preventClicksPropagation) && r.removeEventListener("click", e.onClick, !0),
            e.off("resize observerUpdate", Ge)
    }
    function B() {
        var e = "onwheel"
            , t = e in K;
        if (!t) {
            var a = K.createElement("div");
            a.setAttribute(e, "return;"),
                t = "function" == typeof a[e]
        }
        return !t && K.implementation && K.implementation.hasFeature && K.implementation.hasFeature("", "") !== !0 && (t = K.implementation.hasFeature("Events.wheel", "3.0")),
            t
    }
    var V;
    V = "undefined" == typeof window ? {
        navigator: {
            userAgent: ""
        },
        location: {},
        history: {},
        addEventListener: function() {},
        removeEventListener: function() {},
        getComputedStyle: function() {
            return {}
        },
        Image: function() {},
        Date: function() {}
    } : window;
    var R = V
        , W = function(e) {
        for (var t = this, a = 0; a < e.length; a += 1)
            t[a] = e[a];
        return t.length = e.length,
            this
    };
    e.fn = W.prototype,
        e.Class = W,
        e.Dom7 = W;
    var F = ("resize scroll".split(" "),
        {
            addClass: a,
            removeClass: i,
            hasClass: s,
            toggleClass: r,
            attr: n,
            removeAttr: o,
            data: l,
            transform: d,
            transition: p,
            on: c,
            off: u,
            trigger: h,
            transitionEnd: f,
            outerWidth: v,
            outerHeight: m,
            offset: g,
            css: y,
            each: w,
            html: x,
            text: E,
            is: T,
            index: S,
            eq: C,
            append: M,
            prepend: z,
            next: P,
            nextAll: k,
            prev: $,
            prevAll: I,
            parent: L,
            parents: D,
            closest: O,
            find: A,
            children: H,
            remove: X,
            add: N,
            styles: b
        });
    Object.keys(F).forEach(function(t) {
        e.fn[t] = F[t]
    });
    var j, q = {
        deleteProps: function(e) {
            var t = e;
            Object.keys(t).forEach(function(e) {
                try {
                    t[e] = null
                } catch (a) {}
                try {
                    delete t[e]
                } catch (a) {}
            })
        },
        nextTick: function(e, t) {
            return void 0 === t && (t = 0),
                setTimeout(e, t)
        },
        now: function() {
            return Date.now()
        },
        getTranslate: function(e, t) {
            void 0 === t && (t = "x");
            var a, i, s, r = R.getComputedStyle(e, null);
            return R.WebKitCSSMatrix ? (i = r.transform || r.webkitTransform,
            i.split(",").length > 6 && (i = i.split(", ").map(function(e) {
                return e.replace(",", ".")
            }).join(", ")),
                s = new R.WebKitCSSMatrix("none" === i ? "" : i)) : (s = r.MozTransform || r.OTransform || r.MsTransform || r.msTransform || r.transform || r.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"),
                a = s.toString().split(",")),
            "x" === t && (i = R.WebKitCSSMatrix ? s.m41 : 16 === a.length ? parseFloat(a[12]) : parseFloat(a[4])),
            "y" === t && (i = R.WebKitCSSMatrix ? s.m42 : 16 === a.length ? parseFloat(a[13]) : parseFloat(a[5])),
            i || 0
        },
        parseUrlQuery: function(e) {
            var t, a, i, s, r = {}, n = e || R.location.href;
            if ("string" == typeof n && n.length)
                for (n = n.indexOf("?") > -1 ? n.replace(/\S*\?/, "") : "",
                         a = n.split("&").filter(function(e) {
                             return "" !== e
                         }),
                         s = a.length,
                         t = 0; t < s; t += 1)
                    i = a[t].replace(/#\S+/g, "").split("="),
                        r[decodeURIComponent(i[0])] = "undefined" == typeof i[1] ? void 0 : decodeURIComponent(i[1]) || "";
            return r
        },
        isObject: function(e) {
            return "object" == typeof e && null !== e && e.constructor && e.constructor === Object
        },
        extend: function() {
            for (var e = [], t = arguments.length; t--; )
                e[t] = arguments[t];
            for (var a = Object(e[0]), i = 1; i < e.length; i += 1) {
                var s = e[i];
                if (void 0 !== s && null !== s)
                    for (var r = Object.keys(Object(s)), n = 0, o = r.length; n < o; n += 1) {
                        var l = r[n]
                            , d = Object.getOwnPropertyDescriptor(s, l);
                        void 0 !== d && d.enumerable && (q.isObject(a[l]) && q.isObject(s[l]) ? q.extend(a[l], s[l]) : !q.isObject(a[l]) && q.isObject(s[l]) ? (a[l] = {},
                            q.extend(a[l], s[l])) : a[l] = s[l])
                    }
            }
            return a
        }
    };
    j = "undefined" == typeof document ? {
        addEventListener: function() {},
        removeEventListener: function() {},
        activeElement: {
            blur: function() {},
            nodeName: ""
        },
        querySelector: function() {
            return {}
        },
        querySelectorAll: function() {
            return []
        },
        createElement: function() {
            return {
                style: {},
                setAttribute: function() {},
                getElementsByTagName: function() {
                    return []
                }
            }
        },
        location: {
            hash: ""
        }
    } : document;
    var K = j
        , U = function() {
        return {
            touch: R.Modernizr && R.Modernizr.touch === !0 || function() {
                return !!("ontouchstart"in R || R.DocumentTouch && K instanceof R.DocumentTouch)
            }(),
            transforms3d: R.Modernizr && R.Modernizr.csstransforms3d === !0 || function() {
                var e = K.createElement("div").style;
                return "webkitPerspective"in e || "MozPerspective"in e || "OPerspective"in e || "MsPerspective"in e || "perspective"in e
            }(),
            flexbox: function() {
                for (var e = K.createElement("div").style, t = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), a = 0; a < t.length; a += 1)
                    if (t[a]in e)
                        return !0;
                return !1
            }(),
            observer: function() {
                return "MutationObserver"in R || "WebkitMutationObserver"in R
            }(),
            passiveListener: function() {
                var e = !1;
                try {
                    var t = Object.defineProperty({}, "passive", {
                        get: function() {
                            e = !0
                        }
                    });
                    R.addEventListener("testPassiveListener", null, t)
                } catch (a) {}
                return e
            }(),
            gestures: function() {
                return "ongesturestart"in R
            }()
        }
    }()
        , _ = function(e) {
        void 0 === e && (e = {});
        var t = this;
        t.params = e,
            t.eventsListeners = {},
        t.params && t.params.on && Object.keys(t.params.on).forEach(function(e) {
            t.on(e, t.params.on[e])
        })
    }
        , Z = {
        components: {}
    };
    _.prototype.on = function(e, t) {
        var a = this;
        return "function" != typeof t ? a : (e.split(" ").forEach(function(e) {
            a.eventsListeners[e] || (a.eventsListeners[e] = []),
                a.eventsListeners[e].push(t)
        }),
            a)
    }
        ,
        _.prototype.once = function(e, t) {
            function a() {
                for (var s = [], r = arguments.length; r--; )
                    s[r] = arguments[r];
                t.apply(i, s),
                    i.off(e, a)
            }
            var i = this;
            return "function" != typeof t ? i : i.on(e, a)
        }
        ,
        _.prototype.off = function(e, t) {
            var a = this;
            return e.split(" ").forEach(function(e) {
                "undefined" == typeof t ? a.eventsListeners[e] = [] : a.eventsListeners[e].forEach(function(i, s) {
                    i === t && a.eventsListeners[e].splice(s, 1)
                })
            }),
                a
        }
        ,
        _.prototype.emit = function() {
            for (var e = [], t = arguments.length; t--; )
                e[t] = arguments[t];
            var a, i, s, r = this;
            "string" == typeof e[0] || Array.isArray(e[0]) ? (a = e[0],
                i = e.slice(1, e.length),
                s = r) : (a = e[0].events,
                i = e[0].data,
                s = e[0].context || r);
            var n = Array.isArray(a) ? a : a.split(" ");
            return n.forEach(function(e) {
                if (r.eventsListeners[e]) {
                    var t = [];
                    r.eventsListeners[e].forEach(function(e) {
                        t.push(e)
                    }),
                        t.forEach(function(e) {
                            e.apply(s, i)
                        })
                }
            }),
                r
        }
        ,
        _.prototype.useModulesParams = function(e) {
            var t = this;
            t.modules && Object.keys(t.modules).forEach(function(a) {
                var i = t.modules[a];
                i.params && q.extend(e, i.params)
            })
        }
        ,
        _.prototype.useModules = function(e) {
            void 0 === e && (e = {});
            var t = this;
            t.modules && Object.keys(t.modules).forEach(function(a) {
                var i = t.modules[a]
                    , s = e[a] || {};
                i.instance && Object.keys(i.instance).forEach(function(e) {
                    var a = i.instance[e];
                    "function" == typeof a ? t[e] = a.bind(t) : t[e] = a
                }),
                i.on && t.on && Object.keys(i.on).forEach(function(e) {
                    t.on(e, i.on[e])
                }),
                i.create && i.create.bind(t)(s)
            })
        }
        ,
        Z.components.set = function(e) {
            var t = this;
            t.use && t.use(e)
        }
        ,
        _.installModule = function(e) {
            for (var t = [], a = arguments.length - 1; a-- > 0; )
                t[a] = arguments[a + 1];
            var i = this;
            i.prototype.modules || (i.prototype.modules = {});
            var s = e.name || Object.keys(i.prototype.modules).length + "_" + q.now();
            return i.prototype.modules[s] = e,
            e.proto && Object.keys(e.proto).forEach(function(t) {
                i.prototype[t] = e.proto[t]
            }),
            e["static"] && Object.keys(e["static"]).forEach(function(t) {
                i[t] = e["static"][t]
            }),
            e.install && e.install.apply(i, t),
                i
        }
        ,
        _.use = function(e) {
            for (var t = [], a = arguments.length - 1; a-- > 0; )
                t[a] = arguments[a + 1];
            var i = this;
            return Array.isArray(e) ? (e.forEach(function(e) {
                return i.installModule(e)
            }),
                i) : i.installModule.apply(i, [e].concat(t))
        }
        ,
        Object.defineProperties(_, Z);
    var Q = function() {
        var e, t, a = this, i = a.$el;
        e = "undefined" != typeof a.params.width ? a.params.width : i[0].clientWidth,
            t = "undefined" != typeof a.params.height ? a.params.height : i[0].clientHeight,
        0 === e && a.isHorizontal() || 0 === t && a.isVertical() || (e = e - parseInt(i.css("padding-left"), 10) - parseInt(i.css("padding-right"), 10),
            t = t - parseInt(i.css("padding-top"), 10) - parseInt(i.css("padding-bottom"), 10),
            q.extend(a, {
                width: e,
                height: t,
                size: a.isHorizontal() ? e : t
            }))
    }
        , J = function() {
        var e = this
            , t = e.params
            , a = e.$wrapperEl
            , i = e.size
            , s = e.rtl
            , r = e.wrongRTL
            , n = a.children("." + e.params.slideClass)
            , o = e.virtual && t.virtual.enabled
            , l = o ? e.virtual.slides.length : n.length
            , d = []
            , p = []
            , c = []
            , u = t.slidesOffsetBefore;
        "function" == typeof u && (u = t.slidesOffsetBefore.call(e));
        var h = t.slidesOffsetAfter;
        "function" == typeof h && (h = t.slidesOffsetAfter.call(e));
        var f = l
            , v = e.snapGrid.length
            , m = e.snapGrid.length
            , g = t.spaceBetween
            , b = -u
            , y = 0
            , w = 0;
        if ("undefined" != typeof i) {
            "string" == typeof g && g.indexOf("%") >= 0 && (g = parseFloat(g.replace("%", "")) / 100 * i),
                e.virtualSize = -g,
                s ? n.css({
                    marginLeft: "",
                    marginTop: ""
                }) : n.css({
                    marginRight: "",
                    marginBottom: ""
                });
            var x;
            t.slidesPerColumn > 1 && (x = Math.floor(l / t.slidesPerColumn) === l / e.params.slidesPerColumn ? l : Math.ceil(l / t.slidesPerColumn) * t.slidesPerColumn,
            "auto" !== t.slidesPerView && "row" === t.slidesPerColumnFill && (x = Math.max(x, t.slidesPerView * t.slidesPerColumn)));
            for (var E, T = t.slidesPerColumn, S = x / T, C = S - (t.slidesPerColumn * S - l), M = 0; M < l; M += 1) {
                E = 0;
                var z = n.eq(M);
                if (t.slidesPerColumn > 1) {
                    var P = void 0
                        , k = void 0
                        , $ = void 0;
                    "column" === t.slidesPerColumnFill ? (k = Math.floor(M / T),
                        $ = M - k * T,
                    (k > C || k === C && $ === T - 1) && ($ += 1,
                    $ >= T && ($ = 0,
                        k += 1)),
                        P = k + $ * x / T,
                        z.css({
                            "-webkit-box-ordinal-group": P,
                            "-moz-box-ordinal-group": P,
                            "-ms-flex-order": P,
                            "-webkit-order": P,
                            order: P
                        })) : ($ = Math.floor(M / S),
                        k = M - $ * S),
                        z.css("margin-" + (e.isHorizontal() ? "top" : "left"), 0 !== $ && t.spaceBetween && t.spaceBetween + "px").attr("data-swiper-column", k).attr("data-swiper-row", $)
                }
                "none" !== z.css("display") && ("auto" === t.slidesPerView ? (E = e.isHorizontal() ? z.outerWidth(!0) : z.outerHeight(!0),
                t.roundLengths && (E = Math.floor(E))) : (E = (i - (t.slidesPerView - 1) * g) / t.slidesPerView,
                t.roundLengths && (E = Math.floor(E)),
                n[M] && (e.isHorizontal() ? n[M].style.width = E + "px" : n[M].style.height = E + "px")),
                n[M] && (n[M].swiperSlideSize = E),
                    c.push(E),
                    t.centeredSlides ? (b = b + E / 2 + y / 2 + g,
                    0 === y && 0 !== M && (b = b - i / 2 - g),
                    0 === M && (b = b - i / 2 - g),
                    Math.abs(b) < .001 && (b = 0),
                    w % t.slidesPerGroup === 0 && d.push(b),
                        p.push(b)) : (w % t.slidesPerGroup === 0 && d.push(b),
                        p.push(b),
                        b = b + E + g),
                    e.virtualSize += E + g,
                    y = E,
                    w += 1)
            }
            e.virtualSize = Math.max(e.virtualSize, i) + h;
            var I;
            if (s && r && ("slide" === t.effect || "coverflow" === t.effect) && a.css({
                width: e.virtualSize + t.spaceBetween + "px"
            }),
            U.flexbox && !t.setWrapperSize || (e.isHorizontal() ? a.css({
                width: e.virtualSize + t.spaceBetween + "px"
            }) : a.css({
                height: e.virtualSize + t.spaceBetween + "px"
            })),
            t.slidesPerColumn > 1 && (e.virtualSize = (E + t.spaceBetween) * x,
                e.virtualSize = Math.ceil(e.virtualSize / t.slidesPerColumn) - t.spaceBetween,
                e.isHorizontal() ? a.css({
                    width: e.virtualSize + t.spaceBetween + "px"
                }) : a.css({
                    height: e.virtualSize + t.spaceBetween + "px"
                }),
                t.centeredSlides)) {
                I = [];
                for (var L = 0; L < d.length; L += 1)
                    d[L] < e.virtualSize + d[0] && I.push(d[L]);
                d = I
            }
            if (!t.centeredSlides) {
                I = [];
                for (var D = 0; D < d.length; D += 1)
                    d[D] <= e.virtualSize - i && I.push(d[D]);
                d = I,
                Math.floor(e.virtualSize - i) - Math.floor(d[d.length - 1]) > 1 && d.push(e.virtualSize - i)
            }
            0 === d.length && (d = [0]),
            0 !== t.spaceBetween && (e.isHorizontal() ? s ? n.css({
                marginLeft: g + "px"
            }) : n.css({
                marginRight: g + "px"
            }) : n.css({
                marginBottom: g + "px"
            })),
                q.extend(e, {
                    slides: n,
                    snapGrid: d,
                    slidesGrid: p,
                    slidesSizesGrid: c
                }),
            l !== f && e.emit("slidesLengthChange"),
            d.length !== v && e.emit("snapGridLengthChange"),
            p.length !== m && e.emit("slidesGridLengthChange"),
            (t.watchSlidesProgress || t.watchSlidesVisibility) && e.updateSlidesOffset()
        }
    }
        , ee = function() {
        var e, t = this, a = [], i = 0;
        if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
            for (e = 0; e < Math.ceil(t.params.slidesPerView); e += 1) {
                var s = t.activeIndex + e;
                if (s > t.slides.length)
                    break;
                a.push(t.slides.eq(s)[0])
            }
        else
            a.push(t.slides.eq(t.activeIndex)[0]);
        for (e = 0; e < a.length; e += 1)
            if ("undefined" != typeof a[e]) {
                var r = a[e].offsetHeight;
                i = r > i ? r : i
            }
        i && t.$wrapperEl.css("height", i + "px")
    }
        , te = function() {
        for (var e = this, t = e.slides, a = 0; a < t.length; a += 1)
            t[a].swiperSlideOffset = e.isHorizontal() ? t[a].offsetLeft : t[a].offsetTop
    }
        , ae = function(e) {
        void 0 === e && (e = this.translate || 0);
        var t = this
            , a = t.params
            , i = t.slides
            , s = t.rtl;
        if (0 !== i.length) {
            "undefined" == typeof i[0].swiperSlideOffset && t.updateSlidesOffset();
            var r = -e;
            s && (r = e),
                i.removeClass(a.slideVisibleClass);
            for (var n = 0; n < i.length; n += 1) {
                var o = i[n]
                    , l = (r + (a.centeredSlides ? t.minTranslate() : 0) - o.swiperSlideOffset) / (o.swiperSlideSize + a.spaceBetween);
                if (a.watchSlidesVisibility) {
                    var d = -(r - o.swiperSlideOffset)
                        , p = d + t.slidesSizesGrid[n]
                        , c = d >= 0 && d < t.size || p > 0 && p <= t.size || d <= 0 && p >= t.size;
                    c && i.eq(n).addClass(a.slideVisibleClass)
                }
                o.progress = s ? -l : l
            }
        }
    }
        , ie = function(e) {
        void 0 === e && (e = this.translate || 0);
        var t = this
            , a = t.params
            , i = t.maxTranslate() - t.minTranslate()
            , s = t.progress
            , r = t.isBeginning
            , n = t.isEnd
            , o = r
            , l = n;
        0 === i ? (s = 0,
            r = !0,
            n = !0) : (s = (e - t.minTranslate()) / i,
            r = s <= 0,
            n = s >= 1),
            q.extend(t, {
                progress: s,
                isBeginning: r,
                isEnd: n
            }),
        (a.watchSlidesProgress || a.watchSlidesVisibility) && t.updateSlidesProgress(e),
        r && !o && t.emit("reachBeginning toEdge"),
        n && !l && t.emit("reachEnd toEdge"),
        (o && !r || l && !n) && t.emit("fromEdge"),
            t.emit("progress", s)
    }
        , se = function() {
        var e = this
            , t = e.slides
            , a = e.params
            , i = e.$wrapperEl
            , s = e.activeIndex
            , r = e.realIndex
            , n = e.virtual && a.virtual.enabled;
        t.removeClass(a.slideActiveClass + " " + a.slideNextClass + " " + a.slidePrevClass + " " + a.slideDuplicateActiveClass + " " + a.slideDuplicateNextClass + " " + a.slideDuplicatePrevClass);
        var o;
        o = n ? e.$wrapperEl.find("." + a.slideClass + '[data-swiper-slide-index="' + s + '"]') : t.eq(s),
            o.addClass(a.slideActiveClass),
        a.loop && (o.hasClass(a.slideDuplicateClass) ? i.children("." + a.slideClass + ":not(." + a.slideDuplicateClass + ')[data-swiper-slide-index="' + r + '"]').addClass(a.slideDuplicateActiveClass) : i.children("." + a.slideClass + "." + a.slideDuplicateClass + '[data-swiper-slide-index="' + r + '"]').addClass(a.slideDuplicateActiveClass));
        var l = o.nextAll("." + a.slideClass).eq(0).addClass(a.slideNextClass);
        a.loop && 0 === l.length && (l = t.eq(0),
            l.addClass(a.slideNextClass));
        var d = o.prevAll("." + a.slideClass).eq(0).addClass(a.slidePrevClass);
        a.loop && 0 === d.length && (d = t.eq(-1),
            d.addClass(a.slidePrevClass)),
        a.loop && (l.hasClass(a.slideDuplicateClass) ? i.children("." + a.slideClass + ":not(." + a.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(a.slideDuplicateNextClass) : i.children("." + a.slideClass + "." + a.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(a.slideDuplicateNextClass),
            d.hasClass(a.slideDuplicateClass) ? i.children("." + a.slideClass + ":not(." + a.slideDuplicateClass + ')[data-swiper-slide-index="' + d.attr("data-swiper-slide-index") + '"]').addClass(a.slideDuplicatePrevClass) : i.children("." + a.slideClass + "." + a.slideDuplicateClass + '[data-swiper-slide-index="' + d.attr("data-swiper-slide-index") + '"]').addClass(a.slideDuplicatePrevClass))
    }
        , re = function(e) {
        var t, a = this, i = a.rtl ? a.translate : -a.translate, s = a.slidesGrid, r = a.snapGrid, n = a.params, o = a.activeIndex, l = a.realIndex, d = a.snapIndex, p = e;
        if ("undefined" == typeof p) {
            for (var c = 0; c < s.length; c += 1)
                "undefined" != typeof s[c + 1] ? i >= s[c] && i < s[c + 1] - (s[c + 1] - s[c]) / 2 ? p = c : i >= s[c] && i < s[c + 1] && (p = c + 1) : i >= s[c] && (p = c);
            n.normalizeSlideIndex && (p < 0 || "undefined" == typeof p) && (p = 0)
        }
        if (t = r.indexOf(i) >= 0 ? r.indexOf(i) : Math.floor(p / n.slidesPerGroup),
        t >= r.length && (t = r.length - 1),
        p === o)
            return void (t !== d && (a.snapIndex = t,
                a.emit("snapIndexChange")));
        var u = parseInt(a.slides.eq(p).attr("data-swiper-slide-index") || p, 10);
        q.extend(a, {
            snapIndex: t,
            realIndex: u,
            previousIndex: o,
            activeIndex: p
        }),
            a.emit("activeIndexChange"),
            a.emit("snapIndexChange"),
        l !== u && a.emit("realIndexChange"),
            a.emit("slideChange")
    }
        , ne = function(t) {
        var a = this
            , i = a.params
            , s = e(t.target).closest("." + i.slideClass)[0]
            , r = !1;
        if (s)
            for (var n = 0; n < a.slides.length; n += 1)
                a.slides[n] === s && (r = !0);
        return s && r ? (a.clickedSlide = s,
            a.virtual && a.params.virtual.enabled ? a.clickedIndex = parseInt(e(s).attr("data-swiper-slide-index"), 10) : a.clickedIndex = e(s).index(),
            void (i.slideToClickedSlide && void 0 !== a.clickedIndex && a.clickedIndex !== a.activeIndex && a.slideToClickedSlide())) : (a.clickedSlide = void 0,
            void (a.clickedIndex = void 0))
    }
        , oe = {
        updateSize: Q,
        updateSlides: J,
        updateAutoHeight: ee,
        updateSlidesOffset: te,
        updateSlidesProgress: ae,
        updateProgress: ie,
        updateSlidesClasses: se,
        updateActiveIndex: re,
        updateClickedSlide: ne
    }
        , le = function(e) {
        void 0 === e && (e = this.isHorizontal() ? "x" : "y");
        var t = this
            , a = t.params
            , i = t.rtl
            , s = t.translate
            , r = t.$wrapperEl;
        if (a.virtualTranslate)
            return i ? -s : s;
        var n = q.getTranslate(r[0], e);
        return i && (n = -n),
        n || 0
    }
        , de = function(e, t) {
        var a = this
            , i = a.rtl
            , s = a.params
            , r = a.$wrapperEl
            , n = a.progress
            , o = 0
            , l = 0
            , d = 0;
        a.isHorizontal() ? o = i ? -e : e : l = e,
        s.roundLengths && (o = Math.floor(o),
            l = Math.floor(l)),
        s.virtualTranslate || (U.transforms3d ? r.transform("translate3d(" + o + "px, " + l + "px, " + d + "px)") : r.transform("translate(" + o + "px, " + l + "px)")),
            a.translate = a.isHorizontal() ? o : l;
        var p, c = a.maxTranslate() - a.minTranslate();
        p = 0 === c ? 0 : (e - a.minTranslate()) / c,
        p !== n && a.updateProgress(e),
            a.emit("setTranslate", a.translate, t)
    }
        , pe = function() {
        return -this.snapGrid[0]
    }
        , ce = function() {
        return -this.snapGrid[this.snapGrid.length - 1]
    }
        , ue = {
        getTranslate: le,
        setTranslate: de,
        minTranslate: pe,
        maxTranslate: ce
    }
        , he = function(e, t) {
        var a = this;
        a.$wrapperEl.transition(e),
            a.emit("setTransition", e, t)
    }
        , fe = function(e) {
        void 0 === e && (e = !0);
        var t = this
            , a = t.activeIndex
            , i = t.params
            , s = t.previousIndex;
        i.autoHeight && t.updateAutoHeight(),
            t.emit("transitionStart"),
        e && a !== s && (t.emit("slideChangeTransitionStart"),
            a > s ? t.emit("slideNextTransitionStart") : t.emit("slidePrevTransitionStart"))
    }
        , ve = function(e) {
        void 0 === e && (e = !0);
        var t = this
            , a = t.activeIndex
            , i = t.previousIndex;
        t.animating = !1,
            t.setTransition(0),
            t.emit("transitionEnd"),
        e && a !== i && (t.emit("slideChangeTransitionEnd"),
            a > i ? t.emit("slideNextTransitionEnd") : t.emit("slidePrevTransitionEnd"))
    }
        , me = {
        setTransition: he,
        transitionStart: fe,
        transitionEnd: ve
    }
        , ge = function() {
        function e() {
            var e = K.createElement("div");
            return e.innerHTML = "<!--[if lte IE 9]><i></i><![endif]-->",
            1 === e.getElementsByTagName("i").length
        }
        function t() {
            var e = R.navigator.userAgent.toLowerCase();
            return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0
        }
        return {
            isSafari: t(),
            isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(R.navigator.userAgent),
            ie: R.navigator.pointerEnabled || R.navigator.msPointerEnabled,
            ieTouch: R.navigator.msPointerEnabled && R.navigator.msMaxTouchPoints > 1 || R.navigator.pointerEnabled && R.navigator.maxTouchPoints > 1,
            lteIE9: e()
        }
    }()
        , be = function(e, t, a, i) {
        void 0 === e && (e = 0),
        void 0 === t && (t = this.params.speed),
        void 0 === a && (a = !0);
        var s = this
            , r = e;
        r < 0 && (r = 0);
        var n = s.params
            , o = s.snapGrid
            , l = s.slidesGrid
            , d = s.previousIndex
            , p = s.activeIndex
            , c = s.rtl
            , u = s.$wrapperEl
            , h = Math.floor(r / n.slidesPerGroup);
        h >= o.length && (h = o.length - 1),
        (p || n.initialSlide || 0) === (d || 0) && a && s.emit("beforeSlideChangeStart");
        var f = -o[h];
        if (s.updateProgress(f),
            n.normalizeSlideIndex)
            for (var v = 0; v < l.length; v += 1)
                -Math.floor(100 * f) >= Math.floor(100 * l[v]) && (r = v);
        return !(!s.allowSlideNext && f < s.translate && f < s.minTranslate()) && (!(!s.allowSlidePrev && f > s.translate && f > s.maxTranslate() && (p || 0) !== r) && (c && -f === s.translate || !c && f === s.translate ? (s.updateActiveIndex(r),
        n.autoHeight && s.updateAutoHeight(),
            s.updateSlidesClasses(),
        "slide" !== n.effect && s.setTranslate(f),
            !1) : (0 === t || ge.lteIE9 ? (s.setTransition(0),
            s.setTranslate(f),
            s.updateActiveIndex(r),
            s.updateSlidesClasses(),
            s.emit("beforeTransitionStart", t, i),
            s.transitionStart(a),
            s.transitionEnd(a)) : (s.setTransition(t),
            s.setTranslate(f),
            s.updateActiveIndex(r),
            s.updateSlidesClasses(),
            s.emit("beforeTransitionStart", t, i),
            s.transitionStart(a),
        s.animating || (s.animating = !0,
            u.transitionEnd(function() {
                s && s.transitionEnd(a)
            }))),
            !0)))
    }
        , ye = function(e, t, a) {
        void 0 === e && (e = this.params.speed),
        void 0 === t && (t = !0);
        var i = this
            , s = i.params
            , r = i.animating;
        return s.loop ? !r && (i.loopFix(),
            i._clientLeft = i.$wrapperEl[0].clientLeft,
            i.slideTo(i.activeIndex + s.slidesPerGroup, e, t, a)) : i.slideTo(i.activeIndex + s.slidesPerGroup, e, t, a)
    }
        , we = function(e, t, a) {
        void 0 === e && (e = this.params.speed),
        void 0 === t && (t = !0);
        var i = this
            , s = i.params
            , r = i.animating;
        return s.loop ? !r && (i.loopFix(),
            i._clientLeft = i.$wrapperEl[0].clientLeft,
            i.slideTo(i.activeIndex - 1, e, t, a)) : i.slideTo(i.activeIndex - 1, e, t, a)
    }
        , xe = function(e, t, a) {
        void 0 === e && (e = this.params.speed),
        void 0 === t && (t = !0);
        var i = this;
        return i.slideTo(i.activeIndex, e, t, a)
    }
        , Ee = function() {
        var t, a = this, i = a.params, s = a.$wrapperEl, r = "auto" === i.slidesPerView ? a.slidesPerViewDynamic() : i.slidesPerView, n = a.clickedIndex;
        if (i.loop) {
            if (a.animating)
                return;
            t = parseInt(e(a.clickedSlide).attr("data-swiper-slide-index"), 10),
                i.centeredSlides ? n < a.loopedSlides - r / 2 || n > a.slides.length - a.loopedSlides + r / 2 ? (a.loopFix(),
                    n = s.children("." + i.slideClass + '[data-swiper-slide-index="' + t + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(),
                    q.nextTick(function() {
                        a.slideTo(n)
                    })) : a.slideTo(n) : n > a.slides.length - r ? (a.loopFix(),
                    n = s.children("." + i.slideClass + '[data-swiper-slide-index="' + t + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(),
                    q.nextTick(function() {
                        a.slideTo(n)
                    })) : a.slideTo(n)
        } else
            a.slideTo(n)
    }
        , Te = {
        slideTo: be,
        slideNext: ye,
        slidePrev: we,
        slideReset: xe,
        slideToClickedSlide: Ee
    }
        , Se = function() {
        var t = this
            , a = t.params
            , i = t.$wrapperEl;
        i.children("." + a.slideClass + "." + a.slideDuplicateClass).remove();
        var s = i.children("." + a.slideClass);
        if (a.loopFillGroupWithBlank) {
            var r = a.slidesPerGroup - s.length % a.slidesPerGroup;
            if (r !== a.slidesPerGroup) {
                for (var n = 0; n < r; n += 1) {
                    var o = e(K.createElement("div")).addClass(a.slideClass + " " + a.slideBlankClass);
                    i.append(o)
                }
                s = i.children("." + a.slideClass)
            }
        }
        "auto" !== a.slidesPerView || a.loopedSlides || (a.loopedSlides = s.length),
            t.loopedSlides = parseInt(a.loopedSlides || a.slidesPerView, 10),
            t.loopedSlides += a.loopAdditionalSlides,
        t.loopedSlides > s.length && (t.loopedSlides = s.length);
        var l = []
            , d = [];
        s.each(function(a, i) {
            var r = e(i);
            a < t.loopedSlides && d.push(i),
            a < s.length && a >= s.length - t.loopedSlides && l.push(i),
                r.attr("data-swiper-slide-index", a)
        });
        for (var p = 0; p < d.length; p += 1)
            i.append(e(d[p].cloneNode(!0)).addClass(a.slideDuplicateClass));
        for (var c = l.length - 1; c >= 0; c -= 1)
            i.prepend(e(l[c].cloneNode(!0)).addClass(a.slideDuplicateClass))
    }
        , Ce = function() {
        var e, t = this, a = t.params, i = t.activeIndex, s = t.slides, r = t.loopedSlides, n = t.allowSlidePrev, o = t.allowSlideNext;
        t.allowSlidePrev = !0,
            t.allowSlideNext = !0,
            i < r ? (e = s.length - 3 * r + i,
                e += r,
                t.slideTo(e, 0, !1, !0)) : ("auto" === a.slidesPerView && i >= 2 * r || i > s.length - 2 * a.slidesPerView) && (e = -s.length + i + r,
                e += r,
                t.slideTo(e, 0, !1, !0)),
            t.allowSlidePrev = n,
            t.allowSlideNext = o
    }
        , Me = function() {
        var e = this
            , t = e.$wrapperEl
            , a = e.params
            , i = e.slides;
        t.children("." + a.slideClass + "." + a.slideDuplicateClass).remove(),
            i.removeAttr("data-swiper-slide-index")
    }
        , ze = {
        loopCreate: Se,
        loopFix: Ce,
        loopDestroy: Me
    }
        , Pe = function(e) {
        var t = this;
        if (!U.touch && t.params.simulateTouch) {
            var a = t.el;
            a.style.cursor = "move",
                a.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab",
                a.style.cursor = e ? "-moz-grabbin" : "-moz-grab",
                a.style.cursor = e ? "grabbing" : "grab"
        }
    }
        , ke = function() {
        var e = this;
        U.touch || (e.el.style.cursor = "")
    }
        , $e = {
        setGrabCursor: Pe,
        unsetGrabCursor: ke
    }
        , Ie = function(e) {
        var t = this
            , a = t.$wrapperEl
            , i = t.params;
        if (i.loop && t.loopDestroy(),
        "object" == typeof e && "length"in e)
            for (var s = 0; s < e.length; s += 1)
                e[s] && a.append(e[s]);
        else
            a.append(e);
        i.loop && t.loopCreate(),
        i.observer && U.observer || t.update()
    }
        , Le = function(e) {
        var t = this
            , a = t.params
            , i = t.$wrapperEl
            , s = t.activeIndex;
        a.loop && t.loopDestroy();
        var r = s + 1;
        if ("object" == typeof e && "length"in e) {
            for (var n = 0; n < e.length; n += 1)
                e[n] && i.prepend(e[n]);
            r = s + e.length
        } else
            i.prepend(e);
        a.loop && t.loopCreate(),
        a.observer && U.observer || t.update(),
            t.slideTo(r, 0, !1)
    }
        , De = function(e) {
        var t = this
            , a = t.params
            , i = t.$wrapperEl
            , s = t.activeIndex;
        a.loop && (t.loopDestroy(),
            t.slides = i.children("." + a.slideClass));
        var r, n = s;
        if ("object" == typeof e && "length"in e) {
            for (var o = 0; o < e.length; o += 1)
                r = e[o],
                t.slides[r] && t.slides.eq(r).remove(),
                r < n && (n -= 1);
            n = Math.max(n, 0)
        } else
            r = e,
            t.slides[r] && t.slides.eq(r).remove(),
            r < n && (n -= 1),
                n = Math.max(n, 0);
        a.loop && t.loopCreate(),
        a.observer && U.observer || t.update(),
            a.loop ? t.slideTo(n + t.loopedSlides, 0, !1) : t.slideTo(n, 0, !1)
    }
        , Oe = function() {
        for (var e = this, t = [], a = 0; a < e.slides.length; a += 1)
            t.push(a);
        e.removeSlide(t)
    }
        , Ae = {
        appendSlide: Ie,
        prependSlide: Le,
        removeSlide: De,
        removeAllSlides: Oe
    }
        , He = function() {
        var e = R.navigator.userAgent
            , t = {
            ios: !1,
            android: !1,
            androidChrome: !1,
            desktop: !1,
            windows: !1,
            iphone: !1,
            ipod: !1,
            ipad: !1,
            cordova: R.cordova || R.phonegap,
            phonegap: R.cordova || R.phonegap
        }
            , a = e.match(/(Windows Phone);?[\s\/]+([\d.]+)?/)
            , i = e.match(/(Android);?[\s\/]+([\d.]+)?/)
            , s = e.match(/(iPad).*OS\s([\d_]+)/)
            , r = e.match(/(iPod)(.*OS\s([\d_]+))?/)
            , n = !s && e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
        if (a && (t.os = "windows",
            t.osVersion = a[2],
            t.windows = !0),
        i && !a && (t.os = "android",
            t.osVersion = i[2],
            t.android = !0,
            t.androidChrome = e.toLowerCase().indexOf("chrome") >= 0),
        (s || n || r) && (t.os = "ios",
            t.ios = !0),
        n && !r && (t.osVersion = n[2].replace(/_/g, "."),
            t.iphone = !0),
        s && (t.osVersion = s[2].replace(/_/g, "."),
            t.ipad = !0),
        r && (t.osVersion = r[3] ? r[3].replace(/_/g, ".") : null,
            t.iphone = !0),
        t.ios && t.osVersion && e.indexOf("Version/") >= 0 && "10" === t.osVersion.split(".")[0] && (t.osVersion = e.toLowerCase().split("version/")[1].split(" ")[0]),
            t.desktop = !(t.os || t.android || t.webView),
            t.webView = (n || s || r) && e.match(/.*AppleWebKit(?!.*Safari)/i),
        t.os && "ios" === t.os) {
            var o = t.osVersion.split(".")
                , l = K.querySelector('meta[name="viewport"]');
            t.minimalUi = !t.webView && (r || n) && (1 * o[0] === 7 ? 1 * o[1] >= 1 : 1 * o[0] > 7) && l && l.getAttribute("content").indexOf("minimal-ui") >= 0
        }
        return t.pixelRatio = R.devicePixelRatio || 1,
            t
    }()
        , Xe = function(t) {
        var a = this
            , i = a.touchEventsData
            , s = a.params
            , r = a.touches
            , n = t;
        if (n.originalEvent && (n = n.originalEvent),
            i.isTouchEvent = "touchstart" === n.type,
        i.isTouchEvent || !("which"in n) || 3 !== n.which) {
            if (s.noSwiping && e(n).closest("." + s.noSwipingClass)[0])
                return void (a.allowClick = !0);
            if (!s.swipeHandler || e(n).closest(s.swipeHandler)[0]) {
                r.currentX = "touchstart" === n.type ? n.targetTouches[0].pageX : n.pageX,
                    r.currentY = "touchstart" === n.type ? n.targetTouches[0].pageY : n.pageY;
                var o = r.currentX
                    , l = r.currentY;
                if (!(He.ios && s.iOSEdgeSwipeDetection && o <= s.iOSEdgeSwipeThreshold)) {
                    if (q.extend(i, {
                        isTouched: !0,
                        isMoved: !1,
                        allowTouchCallbacks: !0,
                        isScrolling: void 0,
                        startMoving: void 0
                    }),
                        r.startX = o,
                        r.startY = l,
                        i.touchStartTime = q.now(),
                        a.allowClick = !0,
                        a.updateSize(),
                        a.swipeDirection = void 0,
                    s.threshold > 0 && (i.allowThresholdMove = !1),
                    "touchstart" !== n.type) {
                        var d = !0;
                        e(n.target).is(i.formElements) && (d = !1),
                        K.activeElement && e(K.activeElement).is(i.formElements) && K.activeElement.blur(),
                        d && n.preventDefault()
                    }
                    a.emit("touchStart", n)
                }
            }
        }
    }
        , Ne = function(t) {
        var a = this
            , i = a.touchEventsData
            , s = a.params
            , r = a.touches
            , n = a.rtl
            , o = t;
        if (o.originalEvent && (o = o.originalEvent),
        !i.isTouchEvent || "mousemove" !== o.type) {
            var l = "touchmove" === o.type ? o.targetTouches[0].pageX : o.pageX
                , d = "touchmove" === o.type ? o.targetTouches[0].pageY : o.pageY;
            if (o.preventedByNestedSwiper)
                return r.startX = l,
                    void (r.startY = d);
            if (!a.allowTouchMove)
                return a.allowClick = !1,
                    void (i.isTouched && (q.extend(r, {
                        startX: l,
                        startY: d,
                        currentX: l,
                        currentY: d
                    }),
                        i.touchStartTime = q.now()));
            if (i.isTouchEvent && s.touchReleaseOnEdges && !s.loop)
                if (a.isVertical()) {
                    if (r.currentY < r.startY && a.translate <= a.maxTranslate() || r.currentY > r.startY && a.translate >= a.minTranslate())
                        return
                } else if (r.currentX < r.startX && a.translate <= a.maxTranslate() || r.currentX > r.startX && a.translate >= a.minTranslate())
                    return;
            if (i.isTouchEvent && K.activeElement && o.target === K.activeElement && e(o.target).is(i.formElements))
                return i.isMoved = !0,
                    void (a.allowClick = !1);
            if (i.allowTouchCallbacks && a.emit("touchMove", o),
                !(o.targetTouches && o.targetTouches.length > 1)) {
                if (r.currentX = "touchmove" === o.type ? o.targetTouches[0].pageX : o.pageX,
                    r.currentY = "touchmove" === o.type ? o.targetTouches[0].pageY : o.pageY,
                "undefined" == typeof i.isScrolling) {
                    var p;
                    a.isHorizontal() && r.currentY === r.startY || a.isVertical() && r.currentX === r.startX ? i.isScrolling = !1 : (p = 180 * Math.atan2(Math.abs(r.currentY - r.startY), Math.abs(r.currentX - r.startX)) / Math.PI,
                        i.isScrolling = a.isHorizontal() ? p > s.touchAngle : 90 - p > s.touchAngle)
                }
                if (i.isScrolling && a.emit("touchMoveOpposite", o),
                "undefined" == typeof startMoving && (r.currentX === r.startX && r.currentY === r.startY || (i.startMoving = !0)),
                    i.isTouched) {
                    if (i.isScrolling)
                        return void (i.isTouched = !1);
                    if (i.startMoving) {
                        a.allowClick = !1,
                            o.preventDefault(),
                        s.touchMoveStopPropagation && !s.nested && o.stopPropagation(),
                        i.isMoved || (s.loop && a.loopFix(),
                            i.startTranslate = a.getTranslate(),
                            a.setTransition(0),
                        a.animating && a.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
                            i.allowMomentumBounce = !1,
                        !s.grabCursor || a.allowSlideNext !== !0 && a.allowSlidePrev !== !0 || a.setGrabCursor(!0),
                            a.emit("sliderFirstMove", o)),
                            a.emit("sliderMove", o),
                            i.isMoved = !0;
                        var c = a.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY;
                        r.diff = c,
                            c *= s.touchRatio,
                        n && (c = -c),
                            a.swipeDirection = c > 0 ? "prev" : "next",
                            i.currentTranslate = c + i.startTranslate;
                        var u = !0
                            , h = s.resistanceRatio;
                        if (s.touchReleaseOnEdges && (h = 0),
                            c > 0 && i.currentTranslate > a.minTranslate() ? (u = !1,
                            s.resistance && (i.currentTranslate = a.minTranslate() - 1 + Math.pow(-a.minTranslate() + i.startTranslate + c, h))) : c < 0 && i.currentTranslate < a.maxTranslate() && (u = !1,
                            s.resistance && (i.currentTranslate = a.maxTranslate() + 1 - Math.pow(a.maxTranslate() - i.startTranslate - c, h))),
                        u && (o.preventedByNestedSwiper = !0),
                        !a.allowSlideNext && "next" === a.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate),
                        !a.allowSlidePrev && "prev" === a.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate),
                        s.threshold > 0) {
                            if (!(Math.abs(c) > s.threshold || i.allowThresholdMove))
                                return void (i.currentTranslate = i.startTranslate);
                            if (!i.allowThresholdMove)
                                return i.allowThresholdMove = !0,
                                    r.startX = r.currentX,
                                    r.startY = r.currentY,
                                    i.currentTranslate = i.startTranslate,
                                    void (r.diff = a.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY)
                        }
                        s.followFinger && ((s.freeMode || s.watchSlidesProgress || s.watchSlidesVisibility) && (a.updateActiveIndex(),
                            a.updateSlidesClasses()),
                        s.freeMode && (0 === i.velocities.length && i.velocities.push({
                            position: r[a.isHorizontal() ? "startX" : "startY"],
                            time: i.touchStartTime
                        }),
                            i.velocities.push({
                                position: r[a.isHorizontal() ? "currentX" : "currentY"],
                                time: q.now()
                            })),
                            a.updateProgress(i.currentTranslate),
                            a.setTranslate(i.currentTranslate))
                    }
                }
            }
        }
    }
        , Ye = function(e) {
        var t = this
            , a = t.touchEventsData
            , i = t.params
            , s = t.touches
            , r = t.rtl
            , n = t.$wrapperEl
            , o = t.slidesGrid
            , l = t.snapGrid
            , d = e;
        if (d.originalEvent && (d = d.originalEvent),
        a.allowTouchCallbacks && t.emit("touchEnd", d),
            a.allowTouchCallbacks = !1,
            a.isTouched) {
            i.grabCursor && a.isMoved && a.isTouched && (t.allowSlideNext === !0 || t.allowSlidePrev === !0) && t.setGrabCursor(!1);
            var p = q.now()
                , c = p - a.touchStartTime;
            if (t.allowClick && (t.updateClickedSlide(d),
                t.emit("tap", d),
            c < 300 && p - a.lastClickTime > 300 && (a.clickTimeout && clearTimeout(a.clickTimeout),
                a.clickTimeout = q.nextTick(function() {
                    t && t.emit("click", d)
                }, 300)),
            c < 300 && p - a.lastClickTime < 300 && (a.clickTimeout && clearTimeout(a.clickTimeout),
                t.emit("doubleTap", d))),
                a.lastClickTime = q.now(),
                q.nextTick(function() {
                    t && (t.allowClick = !0)
                }),
            !a.isTouched || !a.isMoved || !t.swipeDirection || 0 === s.diff || a.currentTranslate === a.startTranslate)
                return a.isTouched = !1,
                    void (a.isMoved = !1);
            a.isTouched = !1,
                a.isMoved = !1;
            var u;
            if (u = i.followFinger ? r ? t.translate : -t.translate : -a.currentTranslate,
                i.freeMode) {
                if (u < -t.minTranslate())
                    return void t.slideTo(t.activeIndex);
                if (u > -t.maxTranslate())
                    return void (t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1));
                if (i.freeModeMomentum) {
                    if (a.velocities.length > 1) {
                        var h = a.velocities.pop()
                            , f = a.velocities.pop()
                            , v = h.position - f.position
                            , m = h.time - f.time;
                        t.velocity = v / m,
                            t.velocity /= 2,
                        Math.abs(t.velocity) < i.freeModeMinimumVelocity && (t.velocity = 0),
                        (m > 150 || q.now() - h.time > 300) && (t.velocity = 0)
                    } else
                        t.velocity = 0;
                    t.velocity *= i.freeModeMomentumVelocityRatio,
                        a.velocities.length = 0;
                    var g = 1e3 * i.freeModeMomentumRatio
                        , b = t.velocity * g
                        , y = t.translate + b;
                    r && (y = -y);
                    var w, x = !1, E = 20 * Math.abs(t.velocity) * i.freeModeMomentumBounceRatio;
                    if (y < t.maxTranslate())
                        i.freeModeMomentumBounce ? (y + t.maxTranslate() < -E && (y = t.maxTranslate() - E),
                            w = t.maxTranslate(),
                            x = !0,
                            a.allowMomentumBounce = !0) : y = t.maxTranslate();
                    else if (y > t.minTranslate())
                        i.freeModeMomentumBounce ? (y - t.minTranslate() > E && (y = t.minTranslate() + E),
                            w = t.minTranslate(),
                            x = !0,
                            a.allowMomentumBounce = !0) : y = t.minTranslate();
                    else if (i.freeModeSticky) {
                        for (var T, S = 0; S < l.length; S += 1)
                            if (l[S] > -y) {
                                T = S;
                                break
                            }
                        y = Math.abs(l[T] - y) < Math.abs(l[T - 1] - y) || "next" === t.swipeDirection ? l[T] : l[T - 1],
                        r || (y = -y)
                    }
                    if (0 !== t.velocity)
                        g = r ? Math.abs((-y - t.translate) / t.velocity) : Math.abs((y - t.translate) / t.velocity);
                    else if (i.freeModeSticky)
                        return void t.slideReset();
                    i.freeModeMomentumBounce && x ? (t.updateProgress(w),
                        t.setTransition(g),
                        t.setTranslate(y),
                        t.transitionStart(),
                        t.animating = !0,
                        n.transitionEnd(function() {
                            t && a.allowMomentumBounce && (t.emit("momentumBounce"),
                                t.setTransition(i.speed),
                                t.setTranslate(w),
                                n.transitionEnd(function() {
                                    t && t.transitionEnd()
                                }))
                        })) : t.velocity ? (t.updateProgress(y),
                        t.setTransition(g),
                        t.setTranslate(y),
                        t.transitionStart(),
                    t.animating || (t.animating = !0,
                        n.transitionEnd(function() {
                            t && t.transitionEnd()
                        }))) : t.updateProgress(y),
                        t.updateActiveIndex(),
                        t.updateSlidesClasses()
                }
                return void ((!i.freeModeMomentum || c >= i.longSwipesMs) && (t.updateProgress(),
                    t.updateActiveIndex(),
                    t.updateSlidesClasses()))
            }
            for (var C = 0, M = t.slidesSizesGrid[0], z = 0; z < o.length; z += i.slidesPerGroup)
                "undefined" != typeof o[z + i.slidesPerGroup] ? u >= o[z] && u < o[z + i.slidesPerGroup] && (C = z,
                    M = o[z + i.slidesPerGroup] - o[z]) : u >= o[z] && (C = z,
                    M = o[o.length - 1] - o[o.length - 2]);
            var P = (u - o[C]) / M;
            if (c > i.longSwipesMs) {
                if (!i.longSwipes)
                    return void t.slideTo(t.activeIndex);
                "next" === t.swipeDirection && (P >= i.longSwipesRatio ? t.slideTo(C + i.slidesPerGroup) : t.slideTo(C)),
                "prev" === t.swipeDirection && (P > 1 - i.longSwipesRatio ? t.slideTo(C + i.slidesPerGroup) : t.slideTo(C))
            } else {
                if (!i.shortSwipes)
                    return void t.slideTo(t.activeIndex);
                "next" === t.swipeDirection && t.slideTo(C + i.slidesPerGroup),
                "prev" === t.swipeDirection && t.slideTo(C)
            }
        }
    }
        , Ge = function() {
        var e = this
            , t = e.params
            , a = e.el
            , i = e.allowSlideNext
            , s = e.allowSlidePrev;
        if (!a || 0 !== a.offsetWidth) {
            if (t.breakpoints && e.setBreakpoint(),
                e.allowSlideNext = !0,
                e.allowSlidePrev = !0,
                e.updateSize(),
                e.updateSlides(),
                t.freeMode) {
                var r = Math.min(Math.max(e.translate, e.maxTranslate()), e.minTranslate());
                e.setTranslate(r),
                    e.updateActiveIndex(),
                    e.updateSlidesClasses(),
                t.autoHeight && e.updateAutoHeight()
            } else
                e.updateSlidesClasses(),
                    ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0);
            e.allowSlidePrev = s,
                e.allowSlideNext = i
        }
    }
        , Be = function(e) {
        var t = this;
        t.allowClick || (t.params.preventClicks && e.preventDefault(),
        t.params.preventClicksPropagation && t.animating && (e.stopPropagation(),
            e.stopImmediatePropagation()))
    }
        , Ve = {
        attachEvents: Y,
        detachEvents: G
    }
        , Re = function() {
        var e = this
            , t = e.activeIndex
            , a = e.loopedSlides;
        void 0 === a && (a = 0);
        var i = e.params
            , s = i.breakpoints;
        if (s && (!s || 0 !== Object.keys(s).length)) {
            var r = e.getBreakpoint(s);
            if (r && e.currentBreakpoint !== r) {
                var n = r in s ? s[r] : e.originalParams
                    , o = i.loop && n.slidesPerView !== i.slidesPerView;
                if (q.extend(e.params, n),
                    q.extend(e, {
                        allowTouchMove: e.params.allowTouchMove,
                        allowSlideNext: e.params.allowSlideNext,
                        allowSlidePrev: e.params.allowSlidePrev
                    }),
                    e.currentBreakpoint = r,
                    o) {
                    var l = t - a;
                    e.loopDestroy(),
                        e.loopCreate(),
                        e.updateSlides(),
                        e.slideTo(l + a, 0, !1)
                }
            }
        }
    }
        , We = function(e) {
        if (e) {
            var t = !1
                , a = [];
            Object.keys(e).forEach(function(e) {
                a.push(e)
            }),
                a.sort(function(e, t) {
                    return parseInt(e, 10) > parseInt(t, 10)
                });
            for (var i = 0; i < a.length; i += 1) {
                var s = a[i];
                s >= R.innerWidth && !t && (t = s)
            }
            return t || "max"
        }
    }
        , Fe = {
        setBreakpoint: Re,
        getBreakpoint: We
    }
        , je = function() {
        var e = this
            , t = e.classNames
            , a = e.params
            , i = e.rtl
            , s = e.$el
            , r = [];
        r.push(a.direction),
        a.freeMode && r.push("free-mode"),
        U.flexbox || r.push("no-flexbox"),
        a.autoHeight && r.push("autoheight"),
        i && r.push("rtl"),
        a.slidesPerColumn > 1 && r.push("multirow"),
        He.android && r.push("android"),
        He.ios && r.push("ios"),
        (R.navigator.pointerEnabled || R.navigator.msPointerEnabled) && r.push("wp8-" + a.direction),
            r.forEach(function(e) {
                t.push(a.containerModifierClass + e)
            }),
            s.addClass(t.join(" "))
    }
        , qe = function() {
        var e = this
            , t = e.$el
            , a = e.classNames;
        t.removeClass(a.join(" "))
    }
        , Ke = {
        addClasses: je,
        removeClasses: qe
    }
        , Ue = function(e, t, a, i, s, r) {
        function n() {
            r && r()
        }
        var o;
        e.complete && s ? n() : t ? (o = new R.Image,
            o.onload = n,
            o.onerror = n,
        i && (o.sizes = i),
        a && (o.srcset = a),
        t && (o.src = t)) : n()
    }
        , _e = function() {
        function e() {
            "undefined" != typeof t && null !== t && t && (void 0 !== t.imagesLoaded && (t.imagesLoaded += 1),
            t.imagesLoaded === t.imagesToLoad.length && (t.params.updateOnImagesReady && t.update(),
                t.emit("imagesReady")))
        }
        var t = this;
        t.imagesToLoad = t.$el.find("img");
        for (var a = 0; a < t.imagesToLoad.length; a += 1) {
            var i = t.imagesToLoad[a];
            t.loadImage(i, i.currentSrc || i.getAttribute("src"), i.srcset || i.getAttribute("srcset"), i.sizes || i.getAttribute("sizes"), !0, e)
        }
    }
        , Ze = {
        loadImage: Ue,
        preloadImages: _e
    }
        , Qe = {
        init: !0,
        direction: "horizontal",
        touchEventsTarget: "container",
        initialSlide: 0,
        speed: 300,
        iOSEdgeSwipeDetection: !1,
        iOSEdgeSwipeThreshold: 20,
        freeMode: !1,
        freeModeMomentum: !0,
        freeModeMomentumRatio: 1,
        freeModeMomentumBounce: !0,
        freeModeMomentumBounceRatio: 1,
        freeModeMomentumVelocityRatio: 1,
        freeModeSticky: !1,
        freeModeMinimumVelocity: .02,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerColumnFill: "column",
        slidesPerGroup: 1,
        centeredSlides: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: .5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 0,
        touchMoveStopPropagation: !0,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: .85,
        watchSlidesProgress: !1,
        watchSlidesVisibility: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        preloadImages: !0,
        updateOnImagesReady: !0,
        loop: !1,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopFillGroupWithBlank: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        passiveListeners: !0,
        containerModifierClass: "swiper-container-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-invisible-blank",
        slideActiveClass: "swiper-slide-active",
        slideDuplicateActiveClass: "swiper-slide-duplicate-active",
        slideVisibleClass: "swiper-slide-visible",
        slideDuplicateClass: "swiper-slide-duplicate",
        slideNextClass: "swiper-slide-next",
        slideDuplicateNextClass: "swiper-slide-duplicate-next",
        slidePrevClass: "swiper-slide-prev",
        slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
        wrapperClass: "swiper-wrapper",
        runCallbacksOnInit: !0
    }
        , Je = {
        update: oe,
        translate: ue,
        transition: me,
        slide: Te,
        loop: ze,
        grabCursor: $e,
        manipulation: Ae,
        events: Ve,
        breakpoints: Fe,
        classes: Ke,
        images: Ze
    }
        , et = {}
        , tt = function(t) {
        function a() {
            for (var i = [], s = arguments.length; s--; )
                i[s] = arguments[s];
            var r, n;
            if (1 === i.length && i[0].constructor && i[0].constructor === Object)
                n = i[0];
            else {
                var o;
                o = i,
                    r = o[0],
                    n = o[1]
            }
            n || (n = {}),
                n = q.extend({}, n),
            r && !n.el && (n.el = r),
                t.call(this, n),
                Object.keys(Je).forEach(function(e) {
                    Object.keys(Je[e]).forEach(function(t) {
                        a.prototype[t] || (a.prototype[t] = Je[e][t])
                    })
                });
            var l = this;
            Object.keys(l.modules).forEach(function(e) {
                var t = l.modules[e];
                if (t.params) {
                    var a = Object.keys(t.params)[0]
                        , i = t.params[a];
                    if ("object" != typeof i)
                        return;
                    if (!(a in n && "enabled"in i))
                        return;
                    n[a] === !0 && (n[a] = {
                        enabled: !0
                    }),
                    "object" != typeof n[a] || "enabled"in n[a] || (n[a].enabled = !0),
                    n[a] || (n[a] = {
                        enabled: !1
                    })
                }
            });
            var d = q.extend({}, Qe);
            l.useModulesParams(d),
                l.params = q.extend({}, d, et, n),
                l.originalParams = q.extend({}, l.params),
                l.passedParams = q.extend({}, n);
            var p = e(l.params.el);
            if (r = p[0]) {
                if (p.length > 1) {
                    var c = [];
                    return p.each(function(e, t) {
                        var i = q.extend({}, n, {
                            el: t
                        });
                        c.push(new a(i))
                    }),
                        c
                }
                r.swiper = l,
                    p.data("swiper", l);
                var u = p.children("." + l.params.wrapperClass);
                return q.extend(l, {
                    $el: p,
                    el: r,
                    $wrapperEl: u,
                    wrapperEl: u[0],
                    classNames: [],
                    slides: e(),
                    slidesGrid: [],
                    snapGrid: [],
                    slidesSizesGrid: [],
                    isHorizontal: function() {
                        return "horizontal" === l.params.direction
                    },
                    isVertical: function() {
                        return "vertical" === l.params.direction
                    },
                    rtl: "horizontal" === l.params.direction && ("rtl" === r.dir.toLowerCase() || "rtl" === p.css("direction")),
                    wrongRTL: "-webkit-box" === u.css("display"),
                    activeIndex: 0,
                    realIndex: 0,
                    isBeginning: !0,
                    isEnd: !1,
                    translate: 0,
                    progress: 0,
                    velocity: 0,
                    animating: !1,
                    allowSlideNext: l.params.allowSlideNext,
                    allowSlidePrev: l.params.allowSlidePrev,
                    touchEvents: function() {
                        var e = ["touchstart", "touchmove", "touchend"]
                            , t = ["mousedown", "mousemove", "mouseup"];
                        return R.navigator.pointerEnabled ? t = ["pointerdown", "pointermove", "pointerup"] : R.navigator.msPointerEnabled && (t = ["MSPointerDown", "MsPointerMove", "MsPointerUp"]),
                            {
                                start: U.touch || !l.params.simulateTouch ? e[0] : t[0],
                                move: U.touch || !l.params.simulateTouch ? e[1] : t[1],
                                end: U.touch || !l.params.simulateTouch ? e[2] : t[2]
                            }
                    }(),
                    touchEventsData: {
                        isTouched: void 0,
                        isMoved: void 0,
                        allowTouchCallbacks: void 0,
                        touchStartTime: void 0,
                        isScrolling: void 0,
                        currentTranslate: void 0,
                        startTranslate: void 0,
                        allowThresholdMove: void 0,
                        formElements: "input, select, textarea, button, video",
                        lastClickTime: q.now(),
                        clickTimeout: void 0,
                        velocities: [],
                        allowMomentumBounce: void 0,
                        isTouchEvent: void 0,
                        startMoving: void 0
                    },
                    allowClick: !0,
                    allowTouchMove: l.params.allowTouchMove,
                    touches: {
                        startX: 0,
                        startY: 0,
                        currentX: 0,
                        currentY: 0,
                        diff: 0
                    },
                    imagesToLoad: [],
                    imagesLoaded: 0
                }),
                    l.useModules(),
                l.params.init && l.init(),
                    l
            }
        }
        t && (a.__proto__ = t),
            a.prototype = Object.create(t && t.prototype),
            a.prototype.constructor = a;
        var i = {
            extendedDefaults: {},
            defaults: {},
            Class: {},
            $: {}
        };
        return a.prototype.slidesPerViewDynamic = function() {
            var e = this
                , t = e.params
                , a = e.slides
                , i = e.slidesGrid
                , s = e.size
                , r = e.activeIndex
                , n = 1;
            if (t.centeredSlides) {
                for (var o, l = a[r].swiperSlideSize, d = r + 1; d < a.length; d += 1)
                    a[d] && !o && (l += a[d].swiperSlideSize,
                        n += 1,
                    l > s && (o = !0));
                for (var p = r - 1; p >= 0; p -= 1)
                    a[p] && !o && (l += a[p].swiperSlideSize,
                        n += 1,
                    l > s && (o = !0))
            } else
                for (var c = r + 1; c < a.length; c += 1)
                    i[c] - i[r] < s && (n += 1);
            return n
        }
            ,
            a.prototype.update = function() {
                function e() {
                    a = Math.min(Math.max(t.translate, t.maxTranslate()), t.minTranslate()),
                        t.setTranslate(a),
                        t.updateActiveIndex(),
                        t.updateSlidesClasses()
                }
                var t = this;
                if (t) {
                    t.updateSize(),
                        t.updateSlides(),
                        t.updateProgress(),
                        t.updateSlidesClasses();
                    var a, i;
                    t.params.freeMode ? (e(),
                    t.params.autoHeight && t.updateAutoHeight()) : (i = ("auto" === t.params.slidesPerView || t.params.slidesPerView > 1) && t.isEnd && !t.params.centeredSlides ? t.slideTo(t.slides.length - 1, 0, !1, !0) : t.slideTo(t.activeIndex, 0, !1, !0),
                    i || e()),
                        t.emit("update")
                }
            }
            ,
            a.prototype.init = function() {
                var e = this;
                e.initialized || (e.emit("beforeInit"),
                e.params.breakpoints && e.setBreakpoint(),
                    e.addClasses(),
                e.params.loop && e.loopCreate(),
                    e.updateSize(),
                    e.updateSlides(),
                e.params.grabCursor && e.setGrabCursor(),
                e.params.preloadImages && e.preloadImages(),
                    e.params.loop ? e.slideTo(e.params.initialSlide + e.loopedSlides, 0, e.params.runCallbacksOnInit) : e.slideTo(e.params.initialSlide, 0, e.params.runCallbacksOnInit),
                    e.attachEvents(),
                    e.initialized = !0,
                    e.emit("init"))
            }
            ,
            a.prototype.destroy = function(e, t) {
                void 0 === e && (e = !0),
                void 0 === t && (t = !0);
                var a = this
                    , i = a.params
                    , s = a.$el
                    , r = a.$wrapperEl
                    , n = a.slides;
                a.emit("beforeDestroy"),
                    a.initialized = !1,
                    a.detachEvents(),
                i.loop && a.loopDestroy(),
                t && (a.removeClasses(),
                    s.removeAttr("style"),
                    r.removeAttr("style"),
                n && n.length && n.removeClass([i.slideVisibleClass, i.slideActiveClass, i.slideNextClass, i.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index").removeAttr("data-swiper-column").removeAttr("data-swiper-row")),
                    a.emit("destroy"),
                    Object.keys(a.eventsListeners).forEach(function(e) {
                        a.off(e)
                    }),
                e !== !1 && (a.$el[0].swiper = null,
                    a.$el.data("swiper", null),
                    q.deleteProps(a),
                    a = null)
            }
            ,
            a.extendDefaults = function(e) {
                q.extend(et, e)
            }
            ,
            i.extendedDefaults.get = function() {
                return et
            }
            ,
            i.defaults.get = function() {
                return Qe
            }
            ,
            i.Class.get = function() {
                return t
            }
            ,
            i.$.get = function() {
                return e
            }
            ,
            Object.defineProperties(a, i),
            a
    }(_)
        , at = {
        name: "device",
        proto: {
            device: He
        },
        "static": {
            device: He
        }
    }
        , it = {
        name: "support",
        proto: {
            support: U
        },
        "static": {
            support: U
        }
    }
        , st = {
        name: "browser",
        proto: {
            browser: ge
        },
        "static": {
            browser: ge
        }
    }
        , rt = {
        name: "resize",
        create: function() {
            var e = this;
            q.extend(e, {
                resize: {
                    resizeHandler: function() {
                        e && e.initialized && (e.emit("beforeResize"),
                            e.emit("resize"))
                    },
                    orientationChangeHandler: function() {
                        e && e.initialized && e.emit("orientationchange")
                    }
                }
            })
        },
        on: {
            init: function() {
                var e = this;
                R.addEventListener("resize", e.resize.resizeHandler),
                    R.addEventListener("orientationchange", e.resize.orientationChangeHandler)
            },
            destroy: function() {
                var e = this;
                R.removeEventListener("resize", e.resize.resizeHandler),
                    R.removeEventListener("orientationchange", e.resize.orientationChangeHandler)
            }
        }
    }
        , nt = {
        func: R.MutationObserver || R.WebkitMutationObserver,
        attach: function(e, t) {
            void 0 === t && (t = {});
            var a = this
                , i = nt.func
                , s = new i(function(e) {
                    e.forEach(function(e) {
                        a.emit("observerUpdate", e)
                    })
                }
            );
            s.observe(e, {
                attributes: "undefined" == typeof t.attributes || t.attributes,
                childList: "undefined" == typeof t.childList || t.childList,
                characterData: "undefined" == typeof t.characterData || t.characterData
            }),
                a.observer.observers.push(s)
        },
        init: function() {
            var e = this;
            if (U.observer && e.params.observer) {
                if (e.params.observeParents)
                    for (var t = e.$el.parents(), a = 0; a < t.length; a += 1)
                        e.observer.attach(t[a]);
                e.observer.attach(e.$el[0], {
                    childList: !1
                }),
                    e.observer.attach(e.$wrapperEl[0], {
                        attributes: !1
                    })
            }
        },
        destroy: function() {
            var e = this;
            e.observer.observers.forEach(function(e) {
                e.disconnect()
            }),
                e.observer.observers = []
        }
    }
        , ot = {
        name: "observer",
        params: {
            observer: !1,
            observeParents: !1
        },
        create: function() {
            var e = this;
            q.extend(e, {
                observer: {
                    init: nt.init.bind(e),
                    attach: nt.attach.bind(e),
                    destroy: nt.destroy.bind(e),
                    observers: []
                }
            })
        },
        on: {
            init: function() {
                var e = this;
                e.observer.init()
            },
            destroy: function() {
                var e = this;
                e.observer.destroy()
            }
        }
    }
        , lt = {
        update: function(e) {
            function t() {
                a.updateSlides(),
                    a.updateProgress(),
                    a.updateSlidesClasses(),
                a.lazy && a.params.lazy.enabled && a.lazy.load()
            }
            var a = this
                , i = a.params
                , s = i.slidesPerView
                , r = i.slidesPerGroup
                , n = i.centeredSlides
                , o = a.virtual
                , l = o.from
                , d = o.to
                , p = o.slides
                , c = o.slidesGrid
                , u = o.renderSlide
                , h = o.offset;
            a.updateActiveIndex();
            var f, v = a.activeIndex || 0;
            f = a.rtl && a.isHorizontal() ? "right" : a.isHorizontal() ? "left" : "top";
            var m, g;
            n ? (m = Math.floor(s / 2) + r,
                g = Math.floor(s / 2) + r) : (m = s + (r - 1),
                g = r);
            var b = Math.max((v || 0) - g, 0)
                , y = Math.min((v || 0) + m, p.length - 1)
                , w = (a.slidesGrid[b] || 0) - (a.slidesGrid[0] || 0);
            if (q.extend(a.virtual, {
                from: b,
                to: y,
                offset: w,
                slidesGrid: a.slidesGrid
            }),
            l === b && d === y && !e)
                return a.slidesGrid !== c && w !== h && a.slides.css(f, w + "px"),
                    void a.updateProgress();
            if (a.params.virtual.renderExternal)
                return a.params.virtual.renderExternal.call(a, {
                    offset: w,
                    from: b,
                    to: y,
                    slides: function() {
                        for (var e = [], t = b; t <= y; t += 1)
                            e.push(p[t]);
                        return e
                    }()
                }),
                    void t();
            var x = []
                , E = [];
            if (e)
                a.$wrapperEl.find("." + a.params.slideClass).remove();
            else
                for (var T = l; T <= d; T += 1)
                    (T < b || T > y) && a.$wrapperEl.find("." + a.params.slideClass + '[data-swiper-slide-index="' + T + '"]').remove();
            for (var S = 0; S < p.length; S += 1)
                S >= b && S <= y && ("undefined" == typeof d || e ? E.push(S) : (S > d && E.push(S),
                S < l && x.push(S)));
            E.forEach(function(e) {
                a.$wrapperEl.append(u(p[e], e))
            }),
                x.sort(function(e, t) {
                    return e < t
                }).forEach(function(e) {
                    a.$wrapperEl.prepend(u(p[e], e))
                }),
                a.$wrapperEl.children(".swiper-slide").css(f, w + "px"),
                t()
        },
        renderSlide: function(t, a) {
            var i = this
                , s = i.params.virtual;
            if (s.cache && i.virtual.cache[a])
                return i.virtual.cache[a];
            var r = e(s.renderSlide ? s.renderSlide.call(i, t, a) : '<div class="' + i.params.slideClass + '" data-swiper-slide-index="' + a + '">' + t + "</div>");
            return r.attr("data-swiper-slide-index") || r.attr("data-swiper-slide-index", a),
            s.cache && (i.virtual.cache[a] = r),
                r
        },
        appendSlide: function(e) {
            var t = this;
            t.virtual.slides.push(e),
                t.virtual.update(!0)
        },
        prependSlide: function(e) {
            var t = this;
            if (t.virtual.slides.unshift(e),
                t.params.virtual.cache) {
                var a = t.virtual.cache
                    , i = {};
                Object.keys(a).forEach(function(e) {
                    i[e + 1] = a[e]
                }),
                    t.virtual.cache = i
            }
            t.virtual.update(!0),
                t.slideNext(0)
        }
    }
        , dt = {
        name: "virtual",
        params: {
            virtual: {
                enabled: !1,
                slides: [],
                cache: !0,
                renderSlide: null,
                renderExternal: null
            }
        },
        create: function() {
            var e = this;
            q.extend(e, {
                virtual: {
                    update: lt.update.bind(e),
                    appendSlide: lt.appendSlide.bind(e),
                    prependSlide: lt.prependSlide.bind(e),
                    renderSlide: lt.renderSlide.bind(e),
                    slides: e.params.virtual.slides,
                    cache: {}
                }
            })
        },
        on: {
            beforeInit: function() {
                var e = this;
                e.params.virtual.enabled && (e.classNames.push(e.params.containerModifierClass + "virtual"),
                    q.extend(e.params, {
                        watchSlidesProgress: !0
                    }),
                    e.virtual.update())
            },
            setTranslate: function() {
                var e = this;
                e.params.virtual.enabled && e.virtual.update()
            }
        }
    }
        , pt = {
        handle: function(e) {
            var t = this
                , a = e;
            a.originalEvent && (a = a.originalEvent);
            var i = a.keyCode || a.charCode;
            if (!t.allowSlideNext && (t.isHorizontal() && 39 === i || t.isVertical() && 40 === i))
                return !1;
            if (!t.allowSlidePrev && (t.isHorizontal() && 37 === i || t.isVertical() && 38 === i))
                return !1;
            if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey || K.activeElement && K.activeElement.nodeName && ("input" === K.activeElement.nodeName.toLowerCase() || "textarea" === K.activeElement.nodeName.toLowerCase()))) {
                if (37 === i || 39 === i || 38 === i || 40 === i) {
                    var s = !1;
                    if (t.$el.parents("." + t.params.slideClass).length > 0 && 0 === t.$el.parents("." + t.params.slideActiveClass).length)
                        return;
                    var r = {
                        left: R.pageXOffset,
                        top: R.pageYOffset
                    }
                        , n = R.innerWidth
                        , o = R.innerHeight
                        , l = t.$el.offset();
                    t.rtl && (l.left -= t.$el[0].scrollLeft);
                    for (var d = [[l.left, l.top], [l.left + t.width, l.top], [l.left, l.top + t.height], [l.left + t.width, l.top + t.height]], p = 0; p < d.length; p += 1) {
                        var c = d[p];
                        c[0] >= r.left && c[0] <= r.left + n && c[1] >= r.top && c[1] <= r.top + o && (s = !0)
                    }
                    if (!s)
                        return
                }
                t.isHorizontal() ? (37 !== i && 39 !== i || (a.preventDefault ? a.preventDefault() : a.returnValue = !1),
                (39 === i && !t.rtl || 37 === i && t.rtl) && t.slideNext(),
                (37 === i && !t.rtl || 39 === i && t.rtl) && t.slidePrev()) : (38 !== i && 40 !== i || (a.preventDefault ? a.preventDefault() : a.returnValue = !1),
                40 === i && t.slideNext(),
                38 === i && t.slidePrev()),
                    t.emit("keyPress", i)
            }
        },
        enable: function() {
            var t = this;
            t.keyboard.enabled || (e(K).on("keydown", t.keyboard.handle),
                t.keyboard.enabled = !0)
        },
        disable: function() {
            var t = this;
            t.keyboard.enabled && (e(K).off("keydown", t.keyboard.handle),
                t.keyboard.enabled = !1)
        }
    }
        , ct = {
        name: "keyboard",
        params: {
            keyboard: {
                enabled: !1
            }
        },
        create: function() {
            var e = this;
            q.extend(e, {
                keyboard: {
                    enabled: !1,
                    enable: pt.enable.bind(e),
                    disable: pt.disable.bind(e),
                    handle: pt.handle.bind(e)
                }
            })
        },
        on: {
            init: function() {
                var e = this;
                e.params.keyboard.enabled && e.keyboard.enable()
            },
            destroy: function() {
                var e = this;
                e.keyboard.enabled && e.keyboard.disable()
            }
        }
    }
        , ut = {
        lastScrollTime: q.now(),
        event: function() {
            return R.navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : B() ? "wheel" : "mousewheel"
        }(),
        normalize: function(e) {
            var t = 10
                , a = 40
                , i = 800
                , s = 0
                , r = 0
                , n = 0
                , o = 0;
            return "detail"in e && (r = e.detail),
            "wheelDelta"in e && (r = -e.wheelDelta / 120),
            "wheelDeltaY"in e && (r = -e.wheelDeltaY / 120),
            "wheelDeltaX"in e && (s = -e.wheelDeltaX / 120),
            "axis"in e && e.axis === e.HORIZONTAL_AXIS && (s = r,
                r = 0),
                n = s * t,
                o = r * t,
            "deltaY"in e && (o = e.deltaY),
            "deltaX"in e && (n = e.deltaX),
            (n || o) && e.deltaMode && (1 === e.deltaMode ? (n *= a,
                o *= a) : (n *= i,
                o *= i)),
            n && !s && (s = n < 1 ? -1 : 1),
            o && !r && (r = o < 1 ? -1 : 1),
                {
                    spinX: s,
                    spinY: r,
                    pixelX: n,
                    pixelY: o
                }
        },
        handle: function(e) {
            var t = e
                , a = this
                , i = a.params.mousewheel;
            t.originalEvent && (t = t.originalEvent);
            var s = 0
                , r = a.rtl ? -1 : 1
                , n = ut.normalize(t);
            if (i.forceToAxis)
                if (a.isHorizontal()) {
                    if (!(Math.abs(n.pixelX) > Math.abs(n.pixelY)))
                        return !0;
                    s = n.pixelX * r
                } else {
                    if (!(Math.abs(n.pixelY) > Math.abs(n.pixelX)))
                        return !0;
                    s = n.pixelY
                }
            else
                s = Math.abs(n.pixelX) > Math.abs(n.pixelY) ? -n.pixelX * r : -n.pixelY;
            if (0 === s)
                return !0;
            if (i.invert && (s = -s),
                a.params.freeMode) {
                var o = a.getTranslate() + s * i.sensitivity
                    , l = a.isBeginning
                    , d = a.isEnd;
                if (o >= a.minTranslate() && (o = a.minTranslate()),
                o <= a.maxTranslate() && (o = a.maxTranslate()),
                    a.setTransition(0),
                    a.setTranslate(o),
                    a.updateProgress(),
                    a.updateActiveIndex(),
                    a.updateSlidesClasses(),
                (!l && a.isBeginning || !d && a.isEnd) && a.updateSlidesClasses(),
                a.params.freeModeSticky && (clearTimeout(a.mousewheel.timeout),
                    a.mousewheel.timeout = q.nextTick(function() {
                        a.slideReset()
                    }, 300)),
                    a.emit("scroll", t),
                a.params.autoplay && a.params.autoplayDisableOnInteraction && a.stopAutoplay(),
                0 === o || o === a.maxTranslate())
                    return !0
            } else {
                if (q.now() - a.mousewheel.lastScrollTime > 60)
                    if (s < 0)
                        if (a.isEnd && !a.params.loop || a.animating) {
                            if (i.releaseOnEdges)
                                return !0
                        } else
                            a.slideNext(),
                                a.emit("scroll", t);
                    else if (a.isBeginning && !a.params.loop || a.animating) {
                        if (i.releaseOnEdges)
                            return !0
                    } else
                        a.slidePrev(),
                            a.emit("scroll", t);
                a.mousewheel.lastScrollTime = (new R.Date).getTime()
            }
            return t.preventDefault ? t.preventDefault() : t.returnValue = !1,
                !1
        },
        enable: function() {
            var t = this;
            if (!ut.event)
                return !1;
            if (t.mousewheel.enabled)
                return !1;
            var a = t.$el;
            return "container" !== t.params.mousewheel.eventsTarged && (a = e(t.params.mousewheel.eventsTarged)),
                a.on(ut.event, t.mousewheel.handle),
                t.mousewheel.enabled = !0,
                !0
        },
        disable: function() {
            var t = this;
            if (!ut.event)
                return !1;
            if (!t.mousewheel.enabled)
                return !1;
            var a = t.$el;
            return "container" !== t.params.mousewheel.eventsTarged && (a = e(t.params.mousewheel.eventsTarged)),
                a.off(ut.event, t.mousewheel.handle),
                t.mousewheel.enabled = !1,
                !0
        }
    }
        , ht = {
        name: "mousewheel",
        params: {
            mousewheel: {
                enabled: !1,
                releaseOnEdges: !1,
                invert: !1,
                forceToAxis: !1,
                sensitivity: 1,
                eventsTarged: "container"
            }
        },
        create: function() {
            var e = this;
            q.extend(e, {
                mousewheel: {
                    enabled: !1,
                    enable: ut.enable.bind(e),
                    disable: ut.disable.bind(e),
                    handle: ut.handle.bind(e),
                    lastScrollTime: q.now()
                }
            })
        },
        on: {
            init: function() {
                var e = this;
                e.params.mousewheel.enabled && e.mousewheel.enable()
            },
            destroy: function() {
                var e = this;
                e.mousewheel.enabled && e.mousewheel.disable()
            }
        }
    }
        , ft = {
        update: function() {
            var e = this
                , t = e.params.navigation;
            if (!e.params.loop) {
                var a = e.navigation
                    , i = a.$nextEl
                    , s = a.$prevEl;
                s && s.length > 0 && (e.isBeginning ? s.addClass(t.disabledClass) : s.removeClass(t.disabledClass)),
                i && i.length > 0 && (e.isEnd ? i.addClass(t.disabledClass) : i.removeClass(t.disabledClass))
            }
        },
        init: function() {
            var t = this
                , a = t.params.navigation;
            if (a.nextEl || a.prevEl) {
                var i, s;
                a.nextEl && (i = e(a.nextEl),
                t.params.uniqueNavElements && "string" == typeof a.nextEl && i.length > 1 && 1 === t.$el.find(a.nextEl).length && (i = t.$el.find(a.nextEl))),
                a.prevEl && (s = e(a.prevEl),
                t.params.uniqueNavElements && "string" == typeof a.prevEl && s.length > 1 && 1 === t.$el.find(a.prevEl).length && (s = t.$el.find(a.prevEl))),
                i && i.length > 0 && i.on("click", function(e) {
                    e.preventDefault(),
                    t.isEnd && !t.params.loop || t.slideNext()
                }),
                s && s.length > 0 && s.on("click", function(e) {
                    e.preventDefault(),
                    t.isBeginning && !t.params.loop || t.slidePrev()
                }),
                    q.extend(t.navigation, {
                        $nextEl: i,
                        nextEl: i && i[0],
                        $prevEl: s,
                        prevEl: s && s[0]
                    })
            }
        },
        destroy: function() {
            var e = this
                , t = e.navigation
                , a = t.$nextEl
                , i = t.$prevEl;
            a && a.length && (a.off("click"),
                a.removeClass(e.params.navigation.disabledClass)),
            i && i.length && (i.off("click"),
                i.removeClass(e.params.navigation.disabledClass))
        }
    }
        , vt = {
        name: "navigation",
        params: {
            navigation: {
                nextEl: null,
                prevEl: null,
                hideOnClick: !1,
                disabledClass: "swiper-button-disabled",
                hiddenClass: "swiper-button-hidden"
            }
        },
        create: function() {
            var e = this;
            q.extend(e, {
                navigation: {
                    init: ft.init.bind(e),
                    update: ft.update.bind(e),
                    destroy: ft.destroy.bind(e)
                }
            })
        },
        on: {
            init: function() {
                var e = this;
                e.navigation.init(),
                    e.navigation.update()
            },
            toEdge: function() {
                var e = this;
                e.navigation.update()
            },
            fromEdge: function() {
                var e = this;
                e.navigation.update()
            },
            destroy: function() {
                var e = this;
                e.navigation.destroy()
            },
            click: function(t) {
                var a = this
                    , i = a.navigation
                    , s = i.$nextEl
                    , r = i.$prevEl;
                !a.params.navigation.hideOnClick || e(t.target).is(r) || e(t.target).is(s) || (s && s.toggleClass(a.params.navigation.hiddenClass),
                r && r.toggleClass(a.params.navigation.hiddenClass))
            }
        }
    }
        , mt = {
        update: function() {
            var t = this
                , a = t.rtl
                , i = t.params.pagination;
            if (i.el && t.pagination.el && t.pagination.$el && 0 !== t.pagination.$el.length) {
                var s, r = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length, n = t.pagination.$el, o = t.params.loop ? Math.ceil((r - 2 * t.loopedSlides) / t.params.slidesPerGroup) : t.snapGrid.length;
                if (t.params.loop ? (s = Math.ceil((t.activeIndex - t.loopedSlides) / t.params.slidesPerGroup),
                s > r - 1 - 2 * t.loopedSlides && (s -= r - 2 * t.loopedSlides),
                s > o - 1 && (s -= o),
                s < 0 && "bullets" !== t.params.paginationType && (s = o + s)) : s = "undefined" != typeof t.snapIndex ? t.snapIndex : t.activeIndex || 0,
                "bullets" === i.type && t.pagination.bullets && t.pagination.bullets.length > 0) {
                    var l = t.pagination.bullets;
                    if (i.dynamicBullets && (t.pagination.bulletSize = l.eq(0)[t.isHorizontal() ? "outerWidth" : "outerHeight"](!0),
                        n.css(t.isHorizontal() ? "width" : "height", 5 * t.pagination.bulletSize + "px")),
                        l.removeClass(i.bulletActiveClass + " " + i.bulletActiveClass + "-next " + i.bulletActiveClass + "-next-next " + i.bulletActiveClass + "-prev " + i.bulletActiveClass + "-prev-prev"),
                    n.length > 1)
                        l.each(function(t, a) {
                            var r = e(a);
                            r.index() === s && (r.addClass(i.bulletActiveClass),
                            i.dynamicBullets && (r.prev().addClass(i.bulletActiveClass + "-prev").prev().addClass(i.bulletActiveClass + "-prev-prev"),
                                r.next().addClass(i.bulletActiveClass + "-next").next().addClass(i.bulletActiveClass + "-next-next")))
                        });
                    else {
                        var d = l.eq(s);
                        d.addClass(i.bulletActiveClass),
                        i.dynamicBullets && (d.prev().addClass(i.bulletActiveClass + "-prev").prev().addClass(i.bulletActiveClass + "-prev-prev"),
                            d.next().addClass(i.bulletActiveClass + "-next").next().addClass(i.bulletActiveClass + "-next-next"))
                    }
                    if (i.dynamicBullets) {
                        var p = (5 * t.pagination.bulletSize - t.pagination.bulletSize) / 2 - s * t.pagination.bulletSize
                            , c = a ? "right" : "left";
                        l.css(t.isHorizontal() ? c : "top", p + "px")
                    }
                }
                if ("fraction" === i.type && (n.find("." + i.currentClass).text(s + 1),
                    n.find("." + i.totalClass).text(o)),
                "progressbar" === i.type) {
                    var u = (s + 1) / o
                        , h = u
                        , f = 1;
                    t.isHorizontal() || (f = u,
                        h = 1),
                        n.find("." + i.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + h + ") scaleY(" + f + ")").transition(t.params.speed)
                }
                "custom" === i.type && i.renderCustom ? (n.html(i.renderCustom(t, s + 1, o)),
                    t.emit("paginationRender", t, n[0])) : t.emit("paginationUpdate", t, n[0])
            }
        },
        render: function() {
            var e = this
                , t = e.params.pagination;
            if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                var a = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length
                    , i = e.pagination.$el
                    , s = "";
                if ("bullets" === t.type) {
                    for (var r = e.params.loop ? Math.ceil((a - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length, n = 0; n < r; n += 1)
                        s += t.renderBullet ? t.renderBullet.call(e, n, t.bulletClass) : "<" + t.bulletElement + ' class="' + t.bulletClass + '"></' + t.bulletElement + ">";
                    i.html(s),
                        e.pagination.bullets = i.find("." + t.bulletClass)
                }
                "fraction" === t.type && (s = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : '<span class="' + t.currentClass + '"></span> / <span class="' + t.totalClass + '"></span>',
                    i.html(s)),
                "progressbar" === t.type && (s = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : '<span class="' + t.progressbarFillClass + '"></span>',
                    i.html(s)),
                "custom" !== t.type && e.emit("paginationRender", e.pagination.$el[0])
            }
        },
        init: function() {
            var t = this
                , a = t.params.pagination;
            if (a.el) {
                var i = e(a.el);
                0 !== i.length && (t.params.uniqueNavElements && "string" == typeof a.el && i.length > 1 && 1 === t.$el.find(a.el).length && (i = t.$el.find(a.el)),
                "bullets" === a.type && a.clickable && i.addClass(a.clickableClass),
                    i.addClass(a.modifierClass + a.type),
                "bullets" === a.type && a.dynamicBullets && i.addClass("" + a.modifierClass + a.type + "-dynamic"),
                a.clickable && i.on("click", "." + a.bulletClass, function(a) {
                    a.preventDefault();
                    var i = e(this).index() * t.params.slidesPerGroup;
                    t.params.loop && (i += t.loopedSlides),
                        t.slideTo(i)
                }),
                    q.extend(t.pagination, {
                        $el: i,
                        el: i[0]
                    }))
            }
        },
        destroy: function() {
            var e = this
                , t = e.params.pagination;
            if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                var a = e.pagination.$el;
                a.removeClass(t.hiddenClass),
                    a.removeClass(t.modifierClass + t.type),
                e.pagination.bullets && e.pagination.bullets.removeClass(t.bulletActiveClass),
                t.clickable && a.off("click", "." + t.bulletClass)
            }
        }
    }
        , gt = {
        name: "pagination",
        params: {
            pagination: {
                el: null,
                bulletElement: "span",
                clickable: !1,
                hideOnClick: !1,
                renderBullet: null,
                renderProgressbar: null,
                renderFraction: null,
                renderCustom: null,
                type: "bullets",
                dynamicBullets: !1,
                bulletClass: "swiper-pagination-bullet",
                bulletActiveClass: "swiper-pagination-bullet-active",
                modifierClass: "swiper-pagination-",
                currentClass: "swiper-pagination-current",
                totalClass: "swiper-pagination-total",
                hiddenClass: "swiper-pagination-hidden",
                progressbarFillClass: "swiper-pagination-progressbar-fill",
                clickableClass: "swiper-pagination-clickable"
            }
        },
        create: function() {
            var e = this;
            q.extend(e, {
                pagination: {
                    init: mt.init.bind(e),
                    render: mt.render.bind(e),
                    update: mt.update.bind(e),
                    destroy: mt.destroy.bind(e)
                }
            })
        },
        on: {
            init: function() {
                var e = this;
                e.pagination.init(),
                    e.pagination.render(),
                    e.pagination.update()
            },
            activeIndexChange: function() {
                var e = this;
                e.params.loop ? e.pagination.update() : "undefined" == typeof e.snapIndex && e.pagination.update()
            },
            snapIndexChange: function() {
                var e = this;
                e.params.loop || e.pagination.update()
            },
            slidesLengthChange: function() {
                var e = this;
                e.params.loop && (e.pagination.render(),
                    e.pagination.update())
            },
            snapGridLengthChange: function() {
                var e = this;
                e.params.loop || (e.pagination.render(),
                    e.pagination.update())
            },
            destroy: function() {
                var e = this;
                e.pagination.destroy()
            },
            click: function(t) {
                var a = this;
                a.params.pagination.el && a.params.pagination.hideOnClick && a.pagination.$el.length > 0 && !e(t.target).hasClass(a.params.pagination.bulletClass) && a.pagination.$el.toggleClass(a.params.pagination.hiddenClass)
            }
        }
    }
        , bt = {
        setTranslate: function() {
            var e = this;
            if (e.params.scrollbar.el && e.scrollbar.el) {
                var t = e.scrollbar
                    , a = e.rtl
                    , i = e.progress
                    , s = t.dragSize
                    , r = t.trackSize
                    , n = t.$dragEl
                    , o = t.$el
                    , l = e.params.scrollbar
                    , d = s
                    , p = (r - s) * i;
                a && e.isHorizontal() ? (p = -p,
                    p > 0 ? (d = s - p,
                        p = 0) : -p + s > r && (d = r + p)) : p < 0 ? (d = s + p,
                    p = 0) : p + s > r && (d = r - p),
                    e.isHorizontal() ? (U.transforms3d ? n.transform("translate3d(" + p + "px, 0, 0)") : n.transform("translateX(" + p + "px)"),
                        n[0].style.width = d + "px") : (U.transforms3d ? n.transform("translate3d(0px, " + p + "px, 0)") : n.transform("translateY(" + p + "px)"),
                        n[0].style.height = d + "px"),
                l.hide && (clearTimeout(e.scrollbar.timeout),
                    o[0].style.opacity = 1,
                    e.scrollbar.timeout = setTimeout(function() {
                        o[0].style.opacity = 0,
                            o.transition(400)
                    }, 1e3))
            }
        },
        setTransition: function(e) {
            var t = this;
            t.params.scrollbar.el && t.scrollbar.el && t.scrollbar.$dragEl.transition(e)
        },
        updateSize: function() {
            var e = this;
            if (e.params.scrollbar.el && e.scrollbar.el) {
                var t = e.scrollbar
                    , a = t.$dragEl
                    , i = t.$el;
                a[0].style.width = "",
                    a[0].style.height = "";
                var s, r = e.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight, n = e.size / e.virtualSize, o = n * (r / e.size);
                s = "auto" === e.params.scrollbar.dragSize ? r * n : parseInt(e.params.scrollbar.dragSize, 10),
                    e.isHorizontal() ? a[0].style.width = s + "px" : a[0].style.height = s + "px",
                    n >= 1 ? i[0].style.display = "none" : i[0].style.display = "",
                e.params.scrollbarHide && (i[0].style.opacity = 0),
                    q.extend(t, {
                        trackSize: r,
                        divider: n,
                        moveDivider: o,
                        dragSize: s
                    })
            }
        },
        setDragPosition: function(e) {
            var t, a = this, i = a.scrollbar, s = i.$el, r = i.dragSize, n = i.moveDivider;
            t = a.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY;
            var o = t - s.offset()[a.isHorizontal() ? "left" : "top"] - r / 2
                , l = -a.minTranslate() * n
                , d = -a.maxTranslate() * n;
            o < l ? o = l : o > d && (o = d),
            a.rtl && (o = d - o),
                o = -o / n,
                a.updateProgress(o),
                a.setTranslate(o),
                a.updateActiveIndex(),
                a.updateSlidesClasses()
        },
        onDragStart: function(e) {
            var t = this
                , a = t.params.scrollbar
                , i = t.scrollbar
                , s = t.$wrapperEl
                , r = i.$el
                , n = i.$dragEl;
            t.scrollbar.isTouched = !0,
                e.preventDefault(),
                e.stopPropagation(),
                s.transition(100),
                n.transition(100),
                i.setDragPosition(e),
                clearTimeout(t.scrollbar.dragTimeout),
                r.transition(0),
            a.hide && r.css("opacity", 1),
                t.emit("scrollbarDragStart", e)
        },
        onDragMove: function(e) {
            var t = this
                , a = t.scrollbar
                , i = t.$wrapperEl
                , s = a.$el
                , r = a.$dragEl;
            t.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1,
                a.setDragPosition(e),
                i.transition(0),
                s.transition(0),
                r.transition(0),
                t.emit("scrollbarDragMove", e))
        },
        onDragEnd: function(e) {
            var t = this
                , a = t.params.scrollbar
                , i = t.scrollbar
                , s = i.$el;
            t.scrollbar.isTouched && (t.scrollbar.isTouched = !1,
            a.hide && (clearTimeout(t.scrollbar.dragTimeout),
                t.scrollbar.dragTimeout = q.nextTick(function() {
                    s.css("opacity", 0),
                        s.transition(400)
                }, 1e3)),
                t.emit("scrollbarDragEnd", e),
            a.snapOnRelease && t.slideReset())
        },
        enableDraggable: function() {
            var t = this;
            if (t.params.scrollbar.el) {
                var a = t.scrollbar
                    , i = a.$el
                    , s = U.touch ? i[0] : document;
                i.on(t.scrollbar.dragEvents.start, t.scrollbar.onDragStart),
                    e(s).on(t.scrollbar.dragEvents.move, t.scrollbar.onDragMove),
                    e(s).on(t.scrollbar.dragEvents.end, t.scrollbar.onDragEnd)
            }
        },
        disableDraggable: function() {
            var t = this;
            if (t.params.scrollbar.el) {
                var a = t.scrollbar
                    , i = a.$el
                    , s = U.touch ? i[0] : document;
                i.off(t.scrollbar.dragEvents.start),
                    e(s).off(t.scrollbar.dragEvents.move),
                    e(s).off(t.scrollbar.dragEvents.end)
            }
        },
        init: function() {
            var t = this;
            if (t.params.scrollbar.el) {
                var a = t.scrollbar
                    , i = t.$el
                    , s = t.touchEvents
                    , r = t.params.scrollbar
                    , n = e(r.el);
                t.params.uniqueNavElements && "string" == typeof r.el && n.length > 1 && 1 === i.find(r.el).length && (n = i.find(r.el));
                var o = n.find(".swiper-scrollbar-drag");
                0 === o.length && (o = e('<div class="swiper-scrollbar-drag"></div>'),
                    n.append(o)),
                    t.scrollbar.dragEvents = function() {
                        return t.params.simulateTouch !== !1 || U.touch ? s : {
                            start: "mousedown",
                            move: "mousemove",
                            end: "mouseup"
                        }
                    }(),
                    q.extend(a, {
                        $el: n,
                        el: n[0],
                        $dragEl: o,
                        dragEl: o[0]
                    }),
                r.draggable && a.enableDraggable()
            }
        },
        destroy: function() {
            var e = this;
            e.scrollbar.disableDraggable()
        }
    }
        , yt = {
        name: "scrollbar",
        params: {
            scrollbar: {
                el: null,
                dragSize: "auto",
                hide: !1,
                draggable: !1,
                snapOnRelease: !0
            }
        },
        create: function() {
            var e = this;
            q.extend(e, {
                scrollbar: {
                    init: bt.init.bind(e),
                    destroy: bt.destroy.bind(e),
                    updateSize: bt.updateSize.bind(e),
                    setTranslate: bt.setTranslate.bind(e),
                    setTransition: bt.setTransition.bind(e),
                    enableDraggable: bt.enableDraggable.bind(e),
                    disableDraggable: bt.disableDraggable.bind(e),
                    setDragPosition: bt.setDragPosition.bind(e),
                    onDragStart: bt.onDragStart.bind(e),
                    onDragMove: bt.onDragMove.bind(e),
                    onDragEnd: bt.onDragEnd.bind(e),
                    isTouched: !1,
                    timeout: null,
                    dragTimeout: null
                }
            })
        },
        on: {
            init: function() {
                var e = this;
                e.scrollbar.init(),
                    e.scrollbar.updateSize(),
                    e.scrollbar.setTranslate()
            },
            update: function() {
                var e = this;
                e.scrollbar.updateSize()
            },
            resize: function() {
                var e = this;
                e.scrollbar.updateSize()
            },
            observerUpdate: function() {
                var e = this;
                e.scrollbar.updateSize()
            },
            setTranslate: function() {
                var e = this;
                e.scrollbar.setTranslate()
            },
            setTransition: function(e) {
                var t = this;
                t.scrollbar.setTransition(e)
            },
            destroy: function() {
                var e = this;
                e.scrollbar.destroy()
            }
        }
    }
        , wt = {
        setTransform: function(t, a) {
            var i = this
                , s = i.rtl
                , r = e(t)
                , n = s ? -1 : 1
                , o = r.attr("data-swiper-parallax") || "0"
                , l = r.attr("data-swiper-parallax-x")
                , d = r.attr("data-swiper-parallax-y")
                , p = r.attr("data-swiper-parallax-scale")
                , c = r.attr("data-swiper-parallax-opacity");
            if (l || d ? (l = l || "0",
                d = d || "0") : i.isHorizontal() ? (l = o,
                d = "0") : (d = o,
                l = "0"),
                l = l.indexOf("%") >= 0 ? parseInt(l, 10) * a * n + "%" : l * a * n + "px",
                d = d.indexOf("%") >= 0 ? parseInt(d, 10) * a + "%" : d * a + "px",
            "undefined" != typeof c && null !== c) {
                var u = c - (c - 1) * (1 - Math.abs(a));
                r[0].style.opacity = u
            }
            if ("undefined" == typeof p || null === p)
                r.transform("translate3d(" + l + ", " + d + ", 0px)");
            else {
                var h = p - (p - 1) * (1 - Math.abs(a));
                r.transform("translate3d(" + l + ", " + d + ", 0px) scale(" + h + ")")
            }
        },
        setTranslate: function() {
            var t = this
                , a = t.$el
                , i = t.slides
                , s = t.progress;
            a.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(e, a) {
                t.parallax.setTransform(a, s)
            }),
                i.each(function(a, i) {
                    e(i).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(e, a) {
                        var s = Math.min(Math.max(i.progress, -1), 1);
                        t.parallax.setTransform(a, s)
                    })
                })
        },
        setTransition: function(t) {
            void 0 === t && (t = this.params.speed);
            var a = this
                , i = a.$el;
            i.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(a, i) {
                var s = e(i)
                    , r = parseInt(s.attr("data-swiper-parallax-duration"), 10) || t;
                0 === t && (r = 0),
                    s.transition(r)
            })
        }
    }
        , xt = {
        name: "parallax",
        params: {
            parallax: {
                enabled: !1
            }
        },
        create: function() {
            var e = this;
            q.extend(e, {
                parallax: {
                    setTransform: wt.setTransform.bind(e),
                    setTranslate: wt.setTranslate.bind(e),
                    setTransition: wt.setTransition.bind(e)
                }
            })
        },
        on: {
            beforeInit: function() {
                var e = this;
                e.params.watchSlidesProgress = !0
            },
            init: function() {
                var e = this;
                e.params.parallax && e.parallax.setTranslate()
            },
            setTranslate: function() {
                var e = this;
                e.params.parallax && e.parallax.setTranslate()
            },
            setTransition: function(e) {
                var t = this;
                t.params.parallax && t.parallax.setTransition(e)
            }
        }
    }
        , Et = {
        getDistanceBetweenTouches: function(e) {
            if (e.targetTouches.length < 2)
                return 1;
            var t = e.targetTouches[0].pageX
                , a = e.targetTouches[0].pageY
                , i = e.targetTouches[1].pageX
                , s = e.targetTouches[1].pageY
                , r = Math.sqrt(Math.pow(i - t, 2) + Math.pow(s - a, 2));
            return r
        },
        onGestureStart: function(t) {
            var a = this
                , i = a.params.zoom
                , s = a.zoom
                , r = s.gesture;
            if (!U.gestures) {
                if ("touchstart" !== t.type || "touchstart" === t.type && t.targetTouches.length < 2)
                    return;
                r.scaleStart = Et.getDistanceBetweenTouches(t)
            }
            return r.$slideEl && r.$slideEl.length || (r.$slideEl = e(this),
            0 === r.$slideEl.length && (r.$slideEl = a.slides.eq(a.activeIndex)),
                r.$imageEl = r.$slideEl.find("img, svg, canvas"),
                r.$imageWrapEl = r.$imageEl.parent("." + i.containerClass),
                r.maxRatio = r.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio,
            0 !== r.$imageWrapEl.length) ? (r.$imageEl.transition(0),
                void (a.zoom.isScaling = !0)) : void (r.$imageEl = void 0)
        },
        onGestureChange: function(e) {
            var t = this
                , a = t.params.zoom
                , i = t.zoom
                , s = i.gesture;
            if (!U.gestures) {
                if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2)
                    return;
                s.scaleMove = Et.getDistanceBetweenTouches(e)
            }
            s.$imageEl && 0 !== s.$imageEl.length && (U.gestures ? t.zoom.scale = e.scale * i.currentScale : i.scale = s.scaleMove / s.scaleStart * i.currentScale,
            i.scale > s.maxRatio && (i.scale = s.maxRatio - 1 + Math.pow(i.scale - s.maxRatio + 1, .5)),
            i.scale < a.minRatio && (i.scale = a.minRatio + 1 - Math.pow(a.minRatio - i.scale + 1, .5)),
                s.$imageEl.transform("translate3d(0,0,0) scale(" + i.scale + ")"))
        },
        onGestureEnd: function(e) {
            var t = this
                , a = t.params.zoom
                , i = t.zoom
                , s = i.gesture;
            !U.gestures && ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2) || s.$imageEl && 0 !== s.$imageEl.length && (i.scale = Math.max(Math.min(i.scale, s.maxRatio), a.minRatio),
                s.$imageEl.transition(t.params.speed).transform("translate3d(0,0,0) scale(" + i.scale + ")"),
                i.currentScale = i.scale,
                i.isScaling = !1,
            1 === i.scale && (s.$slideEl = void 0))
        },
        onTouchStart: function(e) {
            var t = this
                , a = t.zoom
                , i = a.gesture
                , s = a.image;
            i.$imageEl && 0 !== i.$imageEl.length && (s.isTouched || (He.android && e.preventDefault(),
                s.isTouched = !0,
                s.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX,
                s.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY))
        },
        onTouchMove: function(e) {
            var t = this
                , a = t.zoom
                , i = a.gesture
                , s = a.image
                , r = a.velocity;
            if (i.$imageEl && 0 !== i.$imageEl.length && (t.allowClick = !1,
            s.isTouched && i.$slideEl)) {
                s.isMoved || (s.width = i.$imageEl[0].offsetWidth,
                    s.height = i.$imageEl[0].offsetHeight,
                    s.startX = q.getTranslate(i.$imageWrapEl[0], "x") || 0,
                    s.startY = q.getTranslate(i.$imageWrapEl[0], "y") || 0,
                    i.slideWidth = i.$slideEl[0].offsetWidth,
                    i.slideHeight = i.$slideEl[0].offsetHeight,
                    i.$imageWrapEl.transition(0),
                t.rtl && (s.startX = -s.startX),
                t.rtl && (s.startY = -s.startY));
                var n = s.width * a.scale
                    , o = s.height * a.scale;
                if (!(n < i.slideWidth && o < i.slideHeight)) {
                    if (s.minX = Math.min(i.slideWidth / 2 - n / 2, 0),
                        s.maxX = -s.minX,
                        s.minY = Math.min(i.slideHeight / 2 - o / 2, 0),
                        s.maxY = -s.minY,
                        s.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX,
                        s.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY,
                    !s.isMoved && !a.isScaling) {
                        if (t.isHorizontal() && (Math.floor(s.minX) === Math.floor(s.startX) && s.touchesCurrent.x < s.touchesStart.x || Math.floor(s.maxX) === Math.floor(s.startX) && s.touchesCurrent.x > s.touchesStart.x))
                            return void (s.isTouched = !1);
                        if (!t.isHorizontal() && (Math.floor(s.minY) === Math.floor(s.startY) && s.touchesCurrent.y < s.touchesStart.y || Math.floor(s.maxY) === Math.floor(s.startY) && s.touchesCurrent.y > s.touchesStart.y))
                            return void (s.isTouched = !1)
                    }
                    e.preventDefault(),
                        e.stopPropagation(),
                        s.isMoved = !0,
                        s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX,
                        s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY,
                    s.currentX < s.minX && (s.currentX = s.minX + 1 - Math.pow(s.minX - s.currentX + 1, .8)),
                    s.currentX > s.maxX && (s.currentX = s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, .8)),
                    s.currentY < s.minY && (s.currentY = s.minY + 1 - Math.pow(s.minY - s.currentY + 1, .8)),
                    s.currentY > s.maxY && (s.currentY = s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, .8)),
                    r.prevPositionX || (r.prevPositionX = s.touchesCurrent.x),
                    r.prevPositionY || (r.prevPositionY = s.touchesCurrent.y),
                    r.prevTime || (r.prevTime = Date.now()),
                        r.x = (s.touchesCurrent.x - r.prevPositionX) / (Date.now() - r.prevTime) / 2,
                        r.y = (s.touchesCurrent.y - r.prevPositionY) / (Date.now() - r.prevTime) / 2,
                    Math.abs(s.touchesCurrent.x - r.prevPositionX) < 2 && (r.x = 0),
                    Math.abs(s.touchesCurrent.y - r.prevPositionY) < 2 && (r.y = 0),
                        r.prevPositionX = s.touchesCurrent.x,
                        r.prevPositionY = s.touchesCurrent.y,
                        r.prevTime = Date.now(),
                        i.$imageWrapEl.transform("translate3d(" + s.currentX + "px, " + s.currentY + "px,0)")
                }
            }
        },
        onTouchEnd: function() {
            var e = this
                , t = e.zoom
                , a = t.gesture
                , i = t.image
                , s = t.velocity;
            if (a.$imageEl && 0 !== a.$imageEl.length) {
                if (!i.isTouched || !i.isMoved)
                    return i.isTouched = !1,
                        void (i.isMoved = !1);
                i.isTouched = !1,
                    i.isMoved = !1;
                var r = 300
                    , n = 300
                    , o = s.x * r
                    , l = i.currentX + o
                    , d = s.y * n
                    , p = i.currentY + d;
                0 !== s.x && (r = Math.abs((l - i.currentX) / s.x)),
                0 !== s.y && (n = Math.abs((p - i.currentY) / s.y));
                var c = Math.max(r, n);
                i.currentX = l,
                    i.currentY = p;
                var u = i.width * t.scale
                    , h = i.height * t.scale;
                i.minX = Math.min(a.slideWidth / 2 - u / 2, 0),
                    i.maxX = -i.minX,
                    i.minY = Math.min(a.slideHeight / 2 - h / 2, 0),
                    i.maxY = -i.minY,
                    i.currentX = Math.max(Math.min(i.currentX, i.maxX), i.minX),
                    i.currentY = Math.max(Math.min(i.currentY, i.maxY), i.minY),
                    a.$imageWrapEl.transition(c).transform("translate3d(" + i.currentX + "px, " + i.currentY + "px,0)")
            }
        },
        onTransitionEnd: function() {
            var e = this
                , t = e.zoom
                , a = t.gesture;
            a.$slideEl && e.previousIndex !== e.activeIndex && (a.$imageEl.transform("translate3d(0,0,0) scale(1)"),
                a.$imageWrapEl.transform("translate3d(0,0,0)"),
                a.$slideEl = void 0,
                a.$imageEl = void 0,
                a.$imageWrapEl = void 0,
                t.scale = 1,
                t.currentScale = 1)
        },
        toggle: function(e) {
            var t = this
                , a = t.zoom;
            a.scale && 1 !== a.scale ? a.out() : a["in"](e)
        },
        "in": function(t) {
            var a = this
                , i = a.zoom
                , s = a.params.zoom
                , r = i.gesture
                , n = i.image;
            if (r.$slideEl || (r.$slideEl = a.clickedSlide ? e(a.clickedSlide) : a.slides.eq(a.activeIndex),
                r.$imageEl = r.$slideEl.find("img, svg, canvas"),
                r.$imageWrapEl = r.$imageEl.parent("." + s.containerClass)),
            r.$imageEl && 0 !== r.$imageEl.length) {
                r.$slideEl.addClass("" + s.zoomedSlideClass);
                var o, l, d, p, c, u, h, f, v, m, g, b, y, w, x, E, T, S;
                "undefined" == typeof n.touchesStart.x && t ? (o = "touchend" === t.type ? t.changedTouches[0].pageX : t.pageX,
                    l = "touchend" === t.type ? t.changedTouches[0].pageY : t.pageY) : (o = n.touchesStart.x,
                    l = n.touchesStart.y),
                    i.scale = r.$imageWrapEl.attr("data-swiper-zoom") || s.maxRatio,
                    i.currentScale = r.$imageWrapEl.attr("data-swiper-zoom") || s.maxRatio,
                    t ? (T = r.$slideEl[0].offsetWidth,
                        S = r.$slideEl[0].offsetHeight,
                        d = r.$slideEl.offset().left,
                        p = r.$slideEl.offset().top,
                        c = d + T / 2 - o,
                        u = p + S / 2 - l,
                        v = r.$imageEl[0].offsetWidth,
                        m = r.$imageEl[0].offsetHeight,
                        g = v * i.scale,
                        b = m * i.scale,
                        y = Math.min(T / 2 - g / 2, 0),
                        w = Math.min(S / 2 - b / 2, 0),
                        x = -y,
                        E = -w,
                        h = c * i.scale,
                        f = u * i.scale,
                    h < y && (h = y),
                    h > x && (h = x),
                    f < w && (f = w),
                    f > E && (f = E)) : (h = 0,
                        f = 0),
                    r.$imageWrapEl.transition(300).transform("translate3d(" + h + "px, " + f + "px,0)"),
                    r.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + i.scale + ")")
            }
        },
        out: function() {
            var t = this
                , a = t.zoom
                , i = t.params.zoom
                , s = a.gesture;
            s.$slideEl || (s.$slideEl = t.clickedSlide ? e(t.clickedSlide) : t.slides.eq(t.activeIndex),
                s.$imageEl = s.$slideEl.find("img, svg, canvas"),
                s.$imageWrapEl = s.$imageEl.parent("." + i.containerClass)),
            s.$imageEl && 0 !== s.$imageEl.length && (a.scale = 1,
                a.currentScale = 1,
                s.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),
                s.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),
                s.$slideEl.removeClass("" + i.zoomedSlideClass),
                s.$slideEl = void 0)
        },
        enable: function() {
            var t = this
                , a = t.zoom;
            if (!a.enabled) {
                a.enabled = !0;
                var i = t.slides
                    , s = !("touchstart" !== t.touchEvents.start || !U.passiveListener || !t.params.passiveListeners) && {
                    passive: !0,
                    capture: !1
                };
                U.gestures ? (i.on("gesturestart", a.onGestureStart, s),
                    i.on("gesturechange", a.onGestureChange, s),
                    i.on("gestureend", a.onGestureEnd, s)) : "touchstart" === t.touchEvents.start && (i.on(t.touchEvents.start, a.onGestureStart, s),
                    i.on(t.touchEvents.move, a.onGestureChange, s),
                    i.on(t.touchEvents.end, a.onGestureEnd, s)),
                    t.slides.each(function(i, s) {
                        var r = e(s);
                        r.find("." + t.params.zoom.containerClass).length > 0 && r.on(t.touchEvents.move, a.onTouchMove)
                    })
            }
        },
        disable: function() {
            var t = this
                , a = t.zoom;
            if (a.enabled) {
                t.zoom.enabled = !1;
                var i = t.slides
                    , s = !("touchstart" !== t.touchEvents.start || !U.passiveListener || !t.params.passiveListeners) && {
                    passive: !0,
                    capture: !1
                };
                U.gestures ? (i.off("gesturestart", a.onGestureStart, s),
                    i.off("gesturechange", a.onGestureChange, s),
                    i.off("gestureend", a.onGestureEnd, s)) : "touchstart" === t.touchEvents.start && (i.off(t.touchEvents.start, a.onGestureStart, s),
                    i.off(t.touchEvents.move, a.onGestureChange, s),
                    i.off(t.touchEvents.end, a.onGestureEnd, s)),
                    t.slides.each(function(i, s) {
                        var r = e(s);
                        r.find("." + t.params.zoom.containerClass).length > 0 && r.off(t.touchEvents.move, a.onTouchMove)
                    })
            }
        }
    }
        , Tt = {
        name: "zoom",
        params: {
            zoom: {
                enabled: !1,
                maxRatio: 3,
                minRatio: 1,
                toggle: !0,
                containerClass: "swiper-zoom-container",
                zoomedSlideClass: "swiper-slide-zoomed"
            }
        },
        create: function() {
            var e = this
                , t = {
                enabled: !1,
                scale: 1,
                currentScale: 1,
                isScaling: !1,
                gesture: {
                    $slideEl: void 0,
                    slideWidth: void 0,
                    slideHeight: void 0,
                    $imageEl: void 0,
                    $imageWrapEl: void 0,
                    maxRatio: 3
                },
                image: {
                    isTouched: void 0,
                    isMoved: void 0,
                    currentX: void 0,
                    currentY: void 0,
                    minX: void 0,
                    minY: void 0,
                    maxX: void 0,
                    maxY: void 0,
                    width: void 0,
                    height: void 0,
                    startX: void 0,
                    startY: void 0,
                    touchesStart: {},
                    touchesCurrent: {}
                },
                velocity: {
                    x: void 0,
                    y: void 0,
                    prevPositionX: void 0,
                    prevPositionY: void 0,
                    prevTime: void 0
                }
            };
            "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function(a) {
                t[a] = Et[a].bind(e)
            }),
                q.extend(e, {
                    zoom: t
                })
        },
        on: {
            init: function() {
                var e = this;
                e.params.zoom.enabled && e.zoom.enable()
            },
            destroy: function() {
                var e = this;
                e.zoom.disable()
            },
            touchStart: function(e) {
                var t = this;
                t.zoom.enabled && t.zoom.onTouchStart(e)
            },
            touchEnd: function(e) {
                var t = this;
                t.zoom.enabled && t.zoom.onTouchEnd(e)
            },
            doubleTap: function(e) {
                var t = this;
                t.params.zoom.enabled && t.zoom.enabled && t.params.zoom.toggle && t.zoom.toggle(e)
            },
            transitionEnd: function() {
                var e = this;
                e.zoom.enabled && e.params.zoom.enabled && e.zoom.onTransitionEnd()
            }
        }
    }
        , St = {
        loadInSlide: function(t, a) {
            void 0 === a && (a = !0);
            var i = this
                , s = i.params.lazy;
            if ("undefined" != typeof t && 0 !== i.slides.length) {
                var r = i.virtual && i.params.virtual.enabled
                    , n = r ? i.$wrapperEl.children("." + i.params.slideClass + '[data-swiper-slide-index="' + t + '"]') : i.slides.eq(t)
                    , o = n.find("." + s.elementClass + ":not(." + s.loadedClass + "):not(." + s.loadingClass + ")");
                !n.hasClass(s.elementClass) || n.hasClass(s.loadedClass) || n.hasClass(s.loadingClass) || (o = o.add(n[0])),
                0 !== o.length && o.each(function(t, r) {
                    var o = e(r);
                    o.addClass(s.loadingClass);
                    var l = o.attr("data-background")
                        , d = o.attr("data-src")
                        , p = o.attr("data-srcset")
                        , c = o.attr("data-sizes");
                    i.loadImage(o[0], d || l, p, c, !1, function() {
                        if ("undefined" != typeof i && null !== i && i && (!i || i.params)) {
                            if (l ? (o.css("background-image", 'url("' + l + '")'),
                                o.removeAttr("data-background")) : (p && (o.attr("srcset", p),
                                o.removeAttr("data-srcset")),
                            c && (o.attr("sizes", c),
                                o.removeAttr("data-sizes")),
                            d && (o.attr("src", d),
                                o.removeAttr("data-src"))),
                                o.addClass(s.loadedClass).removeClass(s.loadingClass),
                                n.find("." + s.preloaderClass).remove(),
                            i.params.loop && a) {
                                var e = n.attr("data-swiper-slide-index");
                                if (n.hasClass(i.params.slideDuplicateClass)) {
                                    var t = i.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + i.params.slideDuplicateClass + ")");
                                    i.lazy.loadInSlide(t.index(), !1)
                                } else {
                                    var r = i.$wrapperEl.children("." + i.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                                    i.lazy.loadInSlide(r.index(), !1)
                                }
                            }
                            i.emit("lazyImageReady", n[0], o[0])
                        }
                    }),
                        i.emit("lazyImageLoad", n[0], o[0])
                })
            }
        },
        load: function() {
            function t(e) {
                if (l) {
                    if (s.children("." + r.slideClass + '[data-swiper-slide-index="' + e + '"]').length)
                        return !0
                } else if (n[e])
                    return !0;
                return !1
            }
            function a(t) {
                return l ? e(t).attr("data-swiper-slide-index") : e(t).index()
            }
            var i = this
                , s = i.$wrapperEl
                , r = i.params
                , n = i.slides
                , o = i.activeIndex
                , l = i.virtual && r.virtual.enabled
                , d = r.lazy
                , p = r.slidesPerView;
            if ("auto" === p && (p = 0),
            i.lazy.initialImageLoaded || (i.lazy.initialImageLoaded = !0),
                i.params.watchSlidesVisibility)
                s.children("." + r.slideVisibleClass).each(function(t, a) {
                    var s = l ? e(a).attr("data-swiper-slide-index") : e(a).index();
                    i.lazy.loadInSlide(s)
                });
            else if (p > 1)
                for (var c = o; c < o + p; c += 1)
                    t(c) && i.lazy.loadInSlide(c);
            else
                i.lazy.loadInSlide(o);
            if (d.loadPrevNext)
                if (p > 1 || d.loadPrevNextAmount && d.loadPrevNextAmount > 1) {
                    for (var u = d.loadPrevNextAmount, h = p, f = Math.min(o + h + Math.max(u, h), n.length), v = Math.max(o - Math.max(h, u), 0), m = o + p; m < f; m += 1)
                        t(m) && i.lazy.loadInSlide(m);
                    for (var g = v; g < o; g += 1)
                        t(g) && i.lazy.loadInSlide(g)
                } else {
                    var b = s.children("." + r.slideNextClass);
                    b.length > 0 && i.lazy.loadInSlide(a(b));
                    var y = s.children("." + r.slidePrevClass);
                    y.length > 0 && i.lazy.loadInSlide(a(y))
                }
        }
    }
        , Ct = {
        name: "lazy",
        params: {
            lazy: {
                enabled: !1,
                loadPrevNext: !1,
                loadPrevNextAmount: 1,
                loadOnTransitionStart: !1,
                elementClass: "swiper-lazy",
                loadingClass: "swiper-lazy-loading",
                loadedClass: "swiper-lazy-loaded",
                preloaderClass: "swiper-lazy-preloader"
            }
        },
        create: function() {
            var e = this;
            q.extend(e, {
                lazy: {
                    initialImageLoaded: !1,
                    load: St.load.bind(e),
                    loadInSlide: St.loadInSlide.bind(e)
                }
            })
        },
        on: {
            beforeInit: function() {
                var e = this;
                e.params.preloadImages && (e.params.preloadImages = !1)
            },
            init: function() {
                var e = this;
                e.params.lazy.enabled && !e.params.loop && 0 === e.params.initialSlide && e.lazy.load()
            },
            scroll: function() {
                var e = this;
                e.params.freeMode && !e.params.freeModeSticky && e.lazy.load()
            },
            resize: function() {
                var e = this;
                e.params.lazy.enabled && e.lazy.load()
            },
            scrollbarDragMove: function() {
                var e = this;
                e.params.lazy.enabled && e.lazy.load()
            },
            transitionStart: function() {
                var e = this;
                e.params.lazy.enabled && (e.params.lazy.loadOnTransitionStart || !e.params.lazy.loadOnTransitionStart && !e.lazy.initialImageLoaded) && e.lazy.load()
            },
            transitionEnd: function() {
                var e = this;
                e.params.lazy.enabled && !e.params.lazy.loadOnTransitionStart && e.lazy.load()
            }
        }
    }
        , Mt = {
        LinearSpline: function(e, t) {
            var a = function() {
                var e, t, a;
                return function(i, s) {
                    for (t = -1,
                             e = i.length; e - t > 1; )
                        a = e + t >> 1,
                            i[a] <= s ? t = a : e = a;
                    return e
                }
            }();
            this.x = e,
                this.y = t,
                this.lastIndex = e.length - 1;
            var i, s;
            return this.interpolate = function(e) {
                return e ? (s = a(this.x, e),
                    i = s - 1,
                (e - this.x[i]) * (this.y[s] - this.y[i]) / (this.x[s] - this.x[i]) + this.y[i]) : 0
            }
                ,
                this
        },
        getInterpolateFunction: function(e) {
            var t = this;
            t.controller.spline || (t.controller.spline = t.params.loop ? new Mt.LinearSpline(t.slidesGrid,e.slidesGrid) : new Mt.LinearSpline(t.snapGrid,e.snapGrid))
        },
        setTranslate: function(e, t) {
            function a(e) {
                var t = e.rtl && "horizontal" === e.params.direction ? -r.translate : r.translate;
                "slide" === r.params.controller.by && (r.controller.getInterpolateFunction(e),
                    s = -r.controller.spline.interpolate(-t)),
                s && "container" !== r.params.controller.by || (i = (e.maxTranslate() - e.minTranslate()) / (r.maxTranslate() - r.minTranslate()),
                    s = (t - r.minTranslate()) * i + e.minTranslate()),
                r.params.controller.inverse && (s = e.maxTranslate() - s),
                    e.updateProgress(s),
                    e.setTranslate(s, r),
                    e.updateActiveIndex(),
                    e.updateSlidesClasses()
            }
            var i, s, r = this, n = r.controller.control;
            if (Array.isArray(n))
                for (var o = 0; o < n.length; o += 1)
                    n[o] !== t && n[o]instanceof tt && a(n[o]);
            else
                n instanceof tt && t !== n && a(n)
        },
        setTransition: function(e, t) {
            function a(t) {
                t.setTransition(e, s),
                0 !== e && (t.transitionStart(),
                    t.$wrapperEl.transitionEnd(function() {
                        r && (t.params.loop && "slide" === s.params.controller.by && t.loopFix(),
                            t.transitionEnd())
                    }))
            }
            var i, s = this, r = s.controller.control;
            if (Array.isArray(r))
                for (i = 0; i < r.length; i += 1)
                    r[i] !== t && r[i]instanceof tt && a(r[i]);
            else
                r instanceof tt && t !== r && a(r)
        }
    }
        , zt = {
        name: "controller",
        params: {
            controller: {
                control: void 0,
                inverse: !1,
                by: "slide"
            }
        },
        create: function() {
            var e = this;
            q.extend(e, {
                controller: {
                    control: e.params.controller.control,
                    getInterpolateFunction: Mt.getInterpolateFunction.bind(e),
                    setTranslate: Mt.setTranslate.bind(e),
                    setTransition: Mt.setTransition.bind(e)
                }
            })
        },
        on: {
            update: function() {
                var e = this;
                e.controller.control && e.controller.spline && (e.controller.spline = void 0,
                    delete e.controller.spline)
            },
            resize: function() {
                var e = this;
                e.controller.control && e.controller.spline && (e.controller.spline = void 0,
                    delete e.controller.spline)
            },
            observerUpdate: function() {
                var e = this;
                e.controller.control && e.controller.spline && (e.controller.spline = void 0,
                    delete e.controller.spline)
            },
            setTranslate: function(e, t) {
                var a = this;
                a.controller.control && a.controller.setTranslate(e, t)
            },
            setTransition: function(e, t) {
                var a = this;
                a.controller.control && a.controller.setTransition(e, t)
            }
        }
    }
        , Pt = {
        makeElFocusable: function(e) {
            return e.attr("tabIndex", "0"),
                e
        },
        addElRole: function(e, t) {
            return e.attr("role", t),
                e
        },
        addElLabel: function(e, t) {
            return e.attr("aria-label", t),
                e
        },
        disableEl: function(e) {
            return e.attr("aria-disabled", !0),
                e
        },
        enableEl: function(e) {
            return e.attr("aria-disabled", !1),
                e
        },
        onEnterKey: function(t) {
            var a = this
                , i = a.params.a11y;
            if (13 === t.keyCode) {
                var s = e(t.target);
                a.navigation && a.navigation.$nextEl && s.is(a.navigation.$nextEl) && (a.isEnd && !a.params.loop || a.slideNext(),
                    a.isEnd ? a.a11y.notify(i.lastSlideMessage) : a.a11y.notify(i.nextSlideMessage)),
                a.navigation && a.navigation.$prevEl && s.is(a.navigation.$prevEl) && (a.isBeginning && !a.params.loop || a.slidePrev(),
                    a.isBeginning ? a.a11y.notify(i.firstSlideMessage) : a.a11y.notify(i.prevSlideMessage)),
                a.pagination && s.is("." + a.params.pagination.bulletClass) && s[0].click()
            }
        },
        notify: function(e) {
            var t = this
                , a = t.a11y.liveRegion;
            0 !== a.length && (a.html(""),
                a.html(e))
        },
        updateNavigation: function() {
            var e = this;
            if (!e.params.loop) {
                var t = e.navigation
                    , a = t.$nextEl
                    , i = t.$prevEl;
                i && i.length > 0 && (e.isBeginning ? e.a11y.disableEl(i) : e.a11y.enableEl(i)),
                a && a.length > 0 && (e.isEnd ? e.a11y.disableEl(a) : e.a11y.enableEl(a))
            }
        },
        updatePagination: function() {
            var t = this
                , a = t.params.a11y;
            t.pagination && t.params.pagination.clickable && t.pagination.bullets && t.pagination.bullets.length && t.pagination.bullets.each(function(i, s) {
                var r = e(s);
                t.a11y.makeElFocusable(r),
                    t.a11y.addElRole(r, "button"),
                    t.a11y.addElLabel(r, a.paginationBulletMessage.replace(/{{index}}/, r.index() + 1))
            })
        },
        init: function() {
            var e = this;
            e.$el.append(e.a11y.liveRegion);
            var t, a, i = e.params.a11y;
            e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl),
            e.navigation && e.navigation.$prevEl && (a = e.navigation.$prevEl),
            t && (e.a11y.makeElFocusable(t),
                e.a11y.addElRole(t, "button"),
                e.a11y.addElLabel(t, i.nextSlideMessage),
                t.on("keydown", e.a11y.onEnterKey)),
            a && (e.a11y.makeElFocusable(a),
                e.a11y.addElRole(a, "button"),
                e.a11y.addElLabel(a, i.prevSlideMessage),
                a.on("keydown", e.a11y.onEnterKey)),
            e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.on("keydown", "." + e.params.pagination.bulletClass, e.a11y.onEnterKey)
        },
        destroy: function() {
            var e = this;
            e.a11y.liveRegion && e.a11y.liveRegion.length > 0 && e.a11y.liveRegion.remove();
            var t, a;
            e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl),
            e.navigation && e.navigation.$prevEl && (a = e.navigation.$prevEl),
            t && t.off("keydown", e.a11y.onEnterKey),
            a && a.off("keydown", e.a11y.onEnterKey),
            e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.off("keydown", "." + e.params.pagination.bulletClass, e.a11y.onEnterKey)
        }
    }
        , kt = {
        name: "a11y",
        params: {
            a11y: {
                enabled: !1,
                notificationClass: "swiper-notification",
                prevSlideMessage: "Previous slide",
                nextSlideMessage: "Next slide",
                firstSlideMessage: "This is the first slide",
                lastSlideMessage: "This is the last slide",
                paginationBulletMessage: "Go to slide {{index}}"
            }
        },
        create: function() {
            var t = this;
            q.extend(t, {
                a11y: {
                    liveRegion: e('<span class="' + t.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')
                }
            }),
                Object.keys(Pt).forEach(function(e) {
                    t.a11y[e] = Pt[e].bind(t)
                })
        },
        on: {
            init: function() {
                var e = this;
                e.params.a11y.enabled && (e.a11y.init(),
                    e.a11y.updateNavigation())
            },
            toEdge: function() {
                var e = this;
                e.params.a11y.enabled && e.a11y.updateNavigation()
            },
            fromEdge: function() {
                var e = this;
                e.params.a11y.enabled && e.a11y.updateNavigation()
            },
            paginationUpdate: function() {
                var e = this;
                e.params.a11y.enabled && e.a11y.updatePagination()
            },
            destroy: function() {
                var e = this;
                e.params.a11y.enabled && e.a11y.destroy()
            }
        }
    }
        , $t = {
        init: function() {
            var e = this;
            if (e.params.history) {
                if (!R.history || !R.history.pushState)
                    return e.params.history.enabled = !1,
                        void (e.params.hashNavigation.enabled = !0);
                var t = e.history;
                t.initialized = !0,
                    t.paths = $t.getPathValues(),
                (t.paths.key || t.paths.value) && (t.scrollToSlide(0, t.paths.value, e.params.runCallbacksOnInit),
                e.params.history.replaceState || R.addEventListener("popstate", e.history.setHistoryPopState))
            }
        },
        destroy: function() {
            var e = this;
            e.params.history.replaceState || R.removeEventListener("popstate", e.history.setHistoryPopState)
        },
        setHistoryPopState: function() {
            var e = this;
            e.history.paths = $t.getPathValues(),
                e.history.scrollToSlide(e.params.speed, e.history.paths.value, !1)
        },
        getPathValues: function() {
            var e = R.location.pathname.slice(1).split("/")
                , t = e.length
                , a = e[t - 2]
                , i = e[t - 1];
            return {
                key: a,
                value: i
            }
        },
        setHistory: function(e, t) {
            var a = this;
            if (a.history.initialized && a.params.history.enabled) {
                var i = a.slides.eq(t)
                    , s = $t.slugify(i.attr("data-history"));
                R.location.pathname.includes(e) || (s = e + "/" + s);
                var r = R.history.state;
                r && r.value === s || (a.params.history.replaceState ? R.history.replaceState({
                    value: s
                }, null, s) : R.history.pushState({
                    value: s
                }, null, s))
            }
        },
        slugify: function(e) {
            return e.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
        },
        scrollToSlide: function(e, t, a) {
            var i = this;
            if (t)
                for (var s = 0, r = i.slides.length; s < r; s += 1) {
                    var n = i.slides.eq(s)
                        , o = $t.slugify(n.attr("data-history"));
                    if (o === t && !n.hasClass(i.params.slideDuplicateClass)) {
                        var l = n.index();
                        i.slideTo(l, e, a)
                    }
                }
            else
                i.slideTo(0, e, a)
        }
    }
        , It = {
        name: "history",
        params: {
            history: {
                enabled: !1,
                replaceState: !1,
                key: "slides"
            }
        },
        create: function() {
            var e = this;
            q.extend(e, {
                history: {
                    init: $t.init.bind(e),
                    setHistory: $t.setHistory.bind(e),
                    setHistoryPopState: $t.setHistoryPopState.bind(e),
                    scrollToSlide: $t.scrollToSlide.bind(e)
                }
            })
        },
        on: {
            init: function() {
                var e = this;
                e.params.history.enabled && e.history.init()
            },
            destroy: function() {
                var e = this;
                e.params.history.enabled && e.history.destroy()
            },
            transitionEnd: function() {
                var e = this;
                e.history.initialized && e.history.setHistory(e.params.history.key, e.activeIndex)
            }
        }
    }
        , Lt = {
        onHashCange: function() {
            var e = this
                , t = K.location.hash.replace("#", "")
                , a = e.slides.eq(e.activeIndex).attr("data-hash");
            t !== a && e.slideTo(e.$wrapperEl.children("." + e.params.slideClass + '[data-hash="' + t + '"]').index())
        },
        setHash: function() {
            var e = this;
            if (e.hashNavigation.initialized && e.params.hashNavigation.enabled)
                if (e.params.hashNavigation.replaceState && R.history && R.history.replaceState)
                    R.history.replaceState(null, null, "#" + e.slides.eq(e.activeIndex).attr("data-hash") || "");
                else {
                    var t = e.slides.eq(e.activeIndex)
                        , a = t.attr("data-hash") || t.attr("data-history");
                    K.location.hash = a || ""
                }
        },
        init: function() {
            var t = this;
            if (!(!t.params.hashNavigation.enabled || t.params.history && t.params.history.enabled)) {
                t.hashNavigation.initialized = !0;
                var a = K.location.hash.replace("#", "");
                if (a)
                    for (var i = 0, s = 0, r = t.slides.length; s < r; s += 1) {
                        var n = t.slides.eq(s)
                            , o = n.attr("data-hash") || n.attr("data-history");
                        if (o === a && !n.hasClass(t.params.slideDuplicateClass)) {
                            var l = n.index();
                            t.slideTo(l, i, t.params.runCallbacksOnInit, !0)
                        }
                    }
                t.params.hashNavigation.watchState && e(R).on("hashchange", t.hashNavigation.onHashCange)
            }
        },
        destroy: function() {
            var t = this;
            t.params.hashNavigation.watchState && e(R).off("hashchange", t.hashNavigation.onHashCange)
        }
    }
        , Dt = {
        name: "hash-navigation",
        params: {
            hashNavigation: {
                enabled: !1,
                replaceState: !1,
                watchState: !1
            }
        },
        create: function() {
            var e = this;
            q.extend(e, {
                hashNavigation: {
                    initialized: !1,
                    init: Lt.init.bind(e),
                    destroy: Lt.destroy.bind(e),
                    setHash: Lt.setHash.bind(e),
                    onHashCange: Lt.onHashCange.bind(e)
                }
            })
        },
        on: {
            init: function() {
                var e = this;
                e.params.hashNavigation.enabled && e.hashNavigation.init()
            },
            destroy: function() {
                var e = this;
                e.params.hashNavigation.enabled && e.hashNavigation.destroy()
            },
            transitionEnd: function() {
                var e = this;
                e.hashNavigation.initialized && e.hashNavigation.setHash()
            }
        }
    }
        , Ot = {
        run: function() {
            var e = this
                , t = e.slides.eq(e.activeIndex)
                , a = e.params.autoplay.delay;
            t.attr("data-swiper-autoplay") && (a = t.attr("data-swiper-autoplay") || e.params.autoplay.delay),
                e.autoplay.timeout = q.nextTick(function() {
                    e.params.loop ? (e.loopFix(),
                        e.slideNext(e.params.speed, !0, !0),
                        e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0),
                        e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0),
                        e.emit("autoplay"))
                }, a)
        },
        start: function() {
            var e = this;
            return "undefined" == typeof e.autoplay.timeout && (!e.autoplay.running && (e.autoplay.running = !0,
                e.emit("autoplayStart"),
                e.autoplay.run(),
                !0))
        },
        stop: function() {
            var e = this;
            return !!e.autoplay.running && ("undefined" != typeof e.autoplay.timeout && (e.autoplay.timeout && (clearTimeout(e.autoplay.timeout),
                e.autoplay.timeout = void 0),
                e.autoplay.running = !1,
                e.emit("autoplayStop"),
                !0))
        },
        pause: function(e) {
            var t = this;
            t.autoplay.running && (t.autoplay.paused || (t.autoplay.timeout && clearTimeout(t.autoplay.timeout),
                t.autoplay.paused = !0,
                0 === e ? (t.autoplay.paused = !1,
                    t.autoplay.run()) : t.$wrapperEl.transitionEnd(function() {
                    t && (t.autoplay.paused = !1,
                        t.autoplay.running ? t.autoplay.run() : t.autoplay.stop())
                })))
        }
    }
        , At = {
        name: "autoplay",
        params: {
            autoplay: {
                enabled: !1,
                delay: 3e3,
                disableOnInteraction: !0,
                stopOnLastSlide: !1
            }
        },
        create: function() {
            var e = this;
            q.extend(e, {
                autoplay: {
                    running: !1,
                    paused: !1,
                    run: Ot.run.bind(e),
                    start: Ot.start.bind(e),
                    stop: Ot.stop.bind(e),
                    pause: Ot.pause.bind(e)
                }
            })
        },
        on: {
            init: function() {
                var e = this;
                e.params.autoplay.enabled && e.autoplay.start()
            },
            beforeTransitionStart: function(e, t) {
                var a = this;
                a.autoplay.running && (t || !a.params.autoplay.disableOnInteraction ? a.autoplay.pause(e) : a.autoplay.stop())
            },
            sliderFirstMove: function() {
                var e = this;
                e.autoplay.running && (e.params.autoplay.disableOnInteraction ? e.autoplay.stop() : e.autoplay.pause())
            },
            destroy: function() {
                var e = this;
                e.autoplay.running && e.autoplay.stop()
            }
        }
    }
        , Ht = {
        setTranslate: function() {
            for (var e = this, t = e.slides, a = 0; a < t.length; a += 1) {
                var i = e.slides.eq(a)
                    , s = i[0].swiperSlideOffset
                    , r = -s;
                e.params.virtualTranslate || (r -= e.translate);
                var n = 0;
                e.isHorizontal() || (n = r,
                    r = 0);
                var o = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0);
                i.css({
                    opacity: o
                }).transform("translate3d(" + r + "px, " + n + "px, 0px)")
            }
        },
        setTransition: function(e) {
            var t = this
                , a = t.slides
                , i = t.$wrapperEl;
            if (a.transition(e),
            t.params.virtualTranslate && 0 !== e) {
                var s = !1;
                a.transitionEnd(function() {
                    if (!s && t) {
                        s = !0,
                            t.animating = !1;
                        for (var e = ["webkitTransitionEnd", "transitionend"], a = 0; a < e.length; a += 1)
                            i.trigger(e[a])
                    }
                })
            }
        }
    }
        , Xt = {
        name: "effect-fade",
        params: {
            fadeEffect: {
                crossFade: !1
            }
        },
        create: function() {
            var e = this;
            q.extend(e, {
                fadeEffect: {
                    setTranslate: Ht.setTranslate.bind(e),
                    setTransition: Ht.setTransition.bind(e)
                }
            })
        },
        on: {
            beforeInit: function() {
                var e = this;
                "fade" === e.params.effect && (e.classNames.push(e.params.containerModifierClass + "fade"),
                    q.extend(e.params, {
                        slidesPerView: 1,
                        slidesPerColumn: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: !0,
                        spaceBetween: 0,
                        virtualTranslate: !0
                    }))
            },
            setTranslate: function() {
                var e = this;
                "fade" === e.params.effect && e.fadeEffect.setTranslate()
            },
            setTransition: function(e) {
                var t = this;
                "fade" === t.params.effect && t.fadeEffect.setTransition(e)
            }
        }
    }
        , Nt = {
        setTranslate: function() {
            var t, a = this, i = a.$el, s = a.$wrapperEl, r = a.slides, n = a.width, o = a.height, l = a.rtl, d = a.size, p = a.params.cubeEffect, c = a.isHorizontal(), u = a.virtual && a.params.virtual.enabled, h = 0;
            p.shadow && (c ? (t = s.find(".swiper-cube-shadow"),
            0 === t.length && (t = e('<div class="swiper-cube-shadow"></div>'),
                s.append(t)),
                t.css({
                    height: n + "px"
                })) : (t = i.find(".swiper-cube-shadow"),
            0 === t.length && (t = e('<div class="swiper-cube-shadow"></div>'),
                i.append(t))));
            for (var f = 0; f < r.length; f += 1) {
                var v = r.eq(f)
                    , m = f;
                u && (m = parseInt(v.attr("data-swiper-slide-index"), 10));
                var g = 90 * m
                    , b = Math.floor(g / 360);
                l && (g = -g,
                    b = Math.floor(-g / 360));
                var y = Math.max(Math.min(v[0].progress, 1), -1)
                    , w = 0
                    , x = 0
                    , E = 0;
                m % 4 === 0 ? (w = 4 * -b * d,
                    E = 0) : (m - 1) % 4 === 0 ? (w = 0,
                    E = 4 * -b * d) : (m - 2) % 4 === 0 ? (w = d + 4 * b * d,
                    E = d) : (m - 3) % 4 === 0 && (w = -d,
                    E = 3 * d + 4 * d * b),
                l && (w = -w),
                c || (x = w,
                    w = 0);
                var T = "rotateX(" + (c ? 0 : -g) + "deg) rotateY(" + (c ? g : 0) + "deg) translate3d(" + w + "px, " + x + "px, " + E + "px)";
                if (y <= 1 && y > -1 && (h = 90 * m + 90 * y,
                l && (h = 90 * -m - 90 * y)),
                    v.transform(T),
                    p.slideShadows) {
                    var S = c ? v.find(".swiper-slide-shadow-left") : v.find(".swiper-slide-shadow-top")
                        , C = c ? v.find(".swiper-slide-shadow-right") : v.find(".swiper-slide-shadow-bottom");
                    0 === S.length && (S = e('<div class="swiper-slide-shadow-' + (c ? "left" : "top") + '"></div>'),
                        v.append(S)),
                    0 === C.length && (C = e('<div class="swiper-slide-shadow-' + (c ? "right" : "bottom") + '"></div>'),
                        v.append(C)),
                    S.length && (S[0].style.opacity = Math.max(-y, 0)),
                    C.length && (C[0].style.opacity = Math.max(y, 0))
                }
            }
            if (s.css({
                "-webkit-transform-origin": "50% 50% -" + d / 2 + "px",
                "-moz-transform-origin": "50% 50% -" + d / 2 + "px",
                "-ms-transform-origin": "50% 50% -" + d / 2 + "px",
                "transform-origin": "50% 50% -" + d / 2 + "px"
            }),
                p.shadow)
                if (c)
                    t.transform("translate3d(0px, " + (n / 2 + p.shadowOffset) + "px, " + -n / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + p.shadowScale + ")");
                else {
                    var M = Math.abs(h) - 90 * Math.floor(Math.abs(h) / 90)
                        , z = 1.5 - (Math.sin(2 * M * Math.PI / 360) / 2 + Math.cos(2 * M * Math.PI / 360) / 2)
                        , P = p.shadowScale
                        , k = p.shadowScale / z
                        , $ = p.shadowOffset;
                    t.transform("scale3d(" + P + ", 1, " + k + ") translate3d(0px, " + (o / 2 + $) + "px, " + -o / 2 / k + "px) rotateX(-90deg)")
                }
            var I = ge.isSafari || ge.isUiWebView ? -d / 2 : 0;
            s.transform("translate3d(0px,0," + I + "px) rotateX(" + (a.isHorizontal() ? 0 : h) + "deg) rotateY(" + (a.isHorizontal() ? -h : 0) + "deg)")
        },
        setTransition: function(e) {
            var t = this
                , a = t.$el
                , i = t.slides;
            i.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),
            t.params.cubeEffect.shadow && !t.isHorizontal() && a.find(".swiper-cube-shadow").transition(e)
        }
    }
        , Yt = {
        name: "effect-cube",
        params: {
            cubeEffect: {
                slideShadows: !0,
                shadow: !0,
                shadowOffset: 20,
                shadowScale: .94
            }
        },
        create: function() {
            var e = this;
            q.extend(e, {
                cubeEffect: {
                    setTranslate: Nt.setTranslate.bind(e),
                    setTransition: Nt.setTransition.bind(e)
                }
            })
        },
        on: {
            beforeInit: function() {
                var e = this;
                "cube" === e.params.effect && (e.classNames.push(e.params.containerModifierClass + "cube"),
                    e.classNames.push(e.params.containerModifierClass + "3d"),
                    q.extend(e.params, {
                        slidesPerView: 1,
                        slidesPerColumn: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: !0,
                        resistanceRatio: 0,
                        spaceBetween: 0,
                        centeredSlides: !1,
                        virtualTranslate: !0
                    }))
            },
            setTranslate: function() {
                var e = this;
                "cube" === e.params.effect && e.cubeEffect.setTranslate()
            },
            setTransition: function(e) {
                var t = this;
                "cube" === t.params.effect && t.cubeEffect.setTransition(e)
            }
        }
    }
        , Gt = {
        setTranslate: function() {
            for (var t = this, a = t.slides, i = 0; i < a.length; i += 1) {
                var s = a.eq(i)
                    , r = s[0].progress;
                t.params.flipEffect.limitRotation && (r = Math.max(Math.min(s[0].progress, 1), -1));
                var n = s[0].swiperSlideOffset
                    , o = -180 * r
                    , l = o
                    , d = 0
                    , p = -n
                    , c = 0;
                if (t.isHorizontal() ? t.rtl && (l = -l) : (c = p,
                    p = 0,
                    d = -l,
                    l = 0),
                    s[0].style.zIndex = -Math.abs(Math.round(r)) + a.length,
                    t.params.flipEffect.slideShadows) {
                    var u = t.isHorizontal() ? s.find(".swiper-slide-shadow-left") : s.find(".swiper-slide-shadow-top")
                        , h = t.isHorizontal() ? s.find(".swiper-slide-shadow-right") : s.find(".swiper-slide-shadow-bottom");
                    0 === u.length && (u = e('<div class="swiper-slide-shadow-' + (t.isHorizontal() ? "left" : "top") + '"></div>'),
                        s.append(u)),
                    0 === h.length && (h = e('<div class="swiper-slide-shadow-' + (t.isHorizontal() ? "right" : "bottom") + '"></div>'),
                        s.append(h)),
                    u.length && (u[0].style.opacity = Math.max(-r, 0)),
                    h.length && (h[0].style.opacity = Math.max(r, 0))
                }
                s.transform("translate3d(" + p + "px, " + c + "px, 0px) rotateX(" + d + "deg) rotateY(" + l + "deg)")
            }
        },
        setTransition: function(t) {
            var a = this
                , i = a.slides
                , s = a.activeIndex
                , r = a.$wrapperEl;
            if (i.transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t),
            a.params.virtualTranslate && 0 !== t) {
                var n = !1;
                i.eq(s).transitionEnd(function() {
                    if (!n && a && e(this).hasClass(a.params.slideActiveClass)) {
                        n = !0,
                            a.animating = !1;
                        for (var t = ["webkitTransitionEnd", "transitionend"], i = 0; i < t.length; i += 1)
                            r.trigger(t[i])
                    }
                })
            }
        }
    }
        , Bt = {
        name: "effect-flip",
        params: {
            flipEffect: {
                slideShadows: !0,
                limitRotation: !0
            }
        },
        create: function() {
            var e = this;
            q.extend(e, {
                flipEffect: {
                    setTranslate: Gt.setTranslate.bind(e),
                    setTransition: Gt.setTransition.bind(e)
                }
            })
        },
        on: {
            beforeInit: function() {
                var e = this;
                "flip" === e.params.effect && (e.classNames.push(e.params.containerModifierClass + "flip"),
                    e.classNames.push(e.params.containerModifierClass + "3d"),
                    q.extend(e.params, {
                        slidesPerView: 1,
                        slidesPerColumn: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: !0,
                        spaceBetween: 0,
                        virtualTranslate: !0
                    }))
            },
            setTranslate: function() {
                var e = this;
                "flip" === e.params.effect && e.flipEffect.setTranslate()
            },
            setTransition: function(e) {
                var t = this;
                "flip" === t.params.effect && t.flipEffect.setTransition(e)
            }
        }
    }
        , Vt = {
        setTranslate: function() {
            for (var t = this, a = t.width, i = t.height, s = t.slides, r = t.$wrapperEl, n = t.slidesSizesGrid, o = t.params.coverflowEffect, l = t.isHorizontal(), d = t.translate, p = l ? -d + a / 2 : -d + i / 2, c = l ? o.rotate : -o.rotate, u = o.depth, h = 0, f = s.length; h < f; h += 1) {
                var v = s.eq(h)
                    , m = n[h]
                    , g = v[0].swiperSlideOffset
                    , b = (p - g - m / 2) / m * o.modifier
                    , y = l ? c * b : 0
                    , w = l ? 0 : c * b
                    , x = -u * Math.abs(b)
                    , E = l ? 0 : o.stretch * b
                    , T = l ? o.stretch * b : 0;
                Math.abs(T) < .001 && (T = 0),
                Math.abs(E) < .001 && (E = 0),
                Math.abs(x) < .001 && (x = 0),
                Math.abs(y) < .001 && (y = 0),
                Math.abs(w) < .001 && (w = 0);
                var S = "translate3d(" + T + "px," + E + "px," + x + "px)  rotateX(" + w + "deg) rotateY(" + y + "deg)";
                if (v.transform(S),
                    v[0].style.zIndex = -Math.abs(Math.round(b)) + 1,
                    o.slideShadows) {
                    var C = l ? v.find(".swiper-slide-shadow-left") : v.find(".swiper-slide-shadow-top")
                        , M = l ? v.find(".swiper-slide-shadow-right") : v.find(".swiper-slide-shadow-bottom");
                    0 === C.length && (C = e('<div class="swiper-slide-shadow-' + (l ? "left" : "top") + '"></div>'),
                        v.append(C)),
                    0 === M.length && (M = e('<div class="swiper-slide-shadow-' + (l ? "right" : "bottom") + '"></div>'),
                        v.append(M)),
                    C.length && (C[0].style.opacity = b > 0 ? b : 0),
                    M.length && (M[0].style.opacity = -b > 0 ? -b : 0)
                }
            }
            if (ge.ie) {
                var z = r[0].style;
                z.perspectiveOrigin = p + "px 50%"
            }
        },
        setTransition: function(e) {
            var t = this;
            t.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
        }
    }
        , Rt = {
        name: "effect-coverflow",
        params: {
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: !0
            }
        },
        create: function() {
            var e = this;
            q.extend(e, {
                coverflowEffect: {
                    setTranslate: Vt.setTranslate.bind(e),
                    setTransition: Vt.setTransition.bind(e)
                }
            })
        },
        on: {
            beforeInit: function() {
                var e = this;
                "coverflow" === e.params.effect && (e.classNames.push(e.params.containerModifierClass + "coverflow"),
                    e.classNames.push(e.params.containerModifierClass + "3d"),
                    e.params.watchSlidesProgress = !0)
            },
            setTranslate: function() {
                var e = this;
                "coverflow" === e.params.effect && e.coverflowEffect.setTranslate()
            },
            setTransition: function(e) {
                var t = this;
                "coverflow" === t.params.effect && t.coverflowEffect.setTransition(e)
            }
        }
    };
    return tt.components = [at, it, st, rt, ot, dt, ct, ht, vt, gt, yt, xt, Tt, Ct, zt, kt, It, Dt, At, Xt, Yt, Bt, Rt],
        tt
});

"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4935],
    {
        94935: function (e, t, u) {
            let r, n;
            u.r(t),
                u.d(t, {
                    __debug: function () {
                        return uR;
                    },
                    check: function () {
                        return uM;
                    },
                    default: function () {
                        return uV;
                    },
                    doc: function () {
                        return uC;
                    },
                    format: function () {
                        return uL;
                    },
                    formatWithCursor: function () {
                        return u$;
                    },
                    getSupportInfo: function () {
                        return uW;
                    },
                    util: function () {
                        return uB;
                    },
                    version: function () {
                        return uy;
                    },
                });
            var D,
                i = Object.create,
                o = Object.defineProperty,
                a = Object.getOwnPropertyDescriptor,
                s = Object.getOwnPropertyNames,
                l = Object.getPrototypeOf,
                c = Object.prototype.hasOwnProperty,
                f = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
                d = (e, t) => {
                    for (var u in t) o(e, u, { get: t[u], enumerable: !0 });
                },
                F = (e, t, u, r) => {
                    if ((t && "object" == typeof t) || "function" == typeof t) for (let n of s(t)) c.call(e, n) || n === u || o(e, n, { get: () => t[n], enumerable: !(r = a(t, n)) || r.enumerable });
                    return e;
                },
                p = (e, t, u) => ((u = null != e ? i(l(e)) : {}), F(!t && e && e.__esModule ? u : o(u, "default", { value: e, enumerable: !0 }), e)),
                h = (e) => F(o({}, "__esModule", { value: !0 }), e),
                C = (e, t, u) => {
                    if (!t.has(e)) throw TypeError("Cannot " + u);
                },
                E = (e, t, u) => {
                    if (t.has(e)) throw TypeError("Cannot add the same private member more than once");
                    t instanceof WeakSet ? t.add(e) : t.set(e, u);
                },
                g = (e, t, u) => (C(e, t, "access private method"), u),
                m = f((e) => {
                    function t() { }
                    Object.defineProperty(e, "__esModule", { value: !0 }),
                        (e.default = t),
                        (t.prototype = {
                            diff: function (e, t) {
                                var u = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                                    r = u.callback;
                                "function" == typeof u && ((r = u), (u = {})), (this.options = u);
                                var n = this;
                                function D(e) {
                                    return r
                                        ? (setTimeout(function () {
                                            r(void 0, e);
                                        }, 0),
                                            !0)
                                        : e;
                                }
                                (e = this.castInput(e)), (t = this.castInput(t)), (e = this.removeEmpty(this.tokenize(e)));
                                var i = (t = this.removeEmpty(this.tokenize(t))).length,
                                    o = e.length,
                                    a = 1,
                                    s = i + o;
                                u.maxEditLength && (s = Math.min(s, u.maxEditLength));
                                var l = [{ newPos: -1, components: [] }],
                                    c = this.extractCommon(l[0], t, e, 0);
                                if (l[0].newPos + 1 >= i && c + 1 >= o) return D([{ value: this.join(t), count: t.length }]);
                                function f() {
                                    for (var u = -1 * a; u <= a; u += 2) {
                                        var r = void 0,
                                            s = l[u - 1],
                                            c = l[u + 1],
                                            f = (c ? c.newPos : 0) - u;
                                        s && (l[u - 1] = void 0);
                                        var d = s && s.newPos + 1 < i,
                                            F = c && 0 <= f && f < o;
                                        if (!d && !F) {
                                            l[u] = void 0;
                                            continue;
                                        }
                                        if (
                                            (!d || (F && s.newPos < c.newPos)
                                                ? ((r = { newPos: c.newPos, components: c.components.slice(0) }), n.pushComponent(r.components, void 0, !0))
                                                : ((r = s), r.newPos++, n.pushComponent(r.components, !0, void 0)),
                                                (f = n.extractCommon(r, t, e, u)),
                                                r.newPos + 1 >= i && f + 1 >= o)
                                        )
                                            return D(
                                                (function (e, t, u, r, n) {
                                                    for (var D = 0, i = t.length, o = 0, a = 0; D < i; D++) {
                                                        var s = t[D];
                                                        if (s.removed) {
                                                            if (((s.value = e.join(r.slice(a, a + s.count))), (a += s.count), D && t[D - 1].added)) {
                                                                var l = t[D - 1];
                                                                (t[D - 1] = t[D]), (t[D] = l);
                                                            }
                                                        } else {
                                                            if (!s.added && n) {
                                                                var c = u.slice(o, o + s.count);
                                                                (c = c.map(function (e, t) {
                                                                    var u = r[a + t];
                                                                    return u.length > e.length ? u : e;
                                                                })),
                                                                    (s.value = e.join(c));
                                                            } else s.value = e.join(u.slice(o, o + s.count));
                                                            (o += s.count), s.added || (a += s.count);
                                                        }
                                                    }
                                                    var f = t[i - 1];
                                                    return i > 1 && "string" == typeof f.value && (f.added || f.removed) && e.equals("", f.value) && ((t[i - 2].value += f.value), t.pop()), t;
                                                })(n, r.components, t, e, n.useLongestToken)
                                            );
                                        l[u] = r;
                                    }
                                    a++;
                                }
                                if (r)
                                    !(function e() {
                                        setTimeout(function () {
                                            if (a > s) return r();
                                            f() || e();
                                        }, 0);
                                    })();
                                else
                                    for (; a <= s;) {
                                        var d = f();
                                        if (d) return d;
                                    }
                            },
                            pushComponent: function (e, t, u) {
                                var r = e[e.length - 1];
                                r && r.added === t && r.removed === u ? (e[e.length - 1] = { count: r.count + 1, added: t, removed: u }) : e.push({ count: 1, added: t, removed: u });
                            },
                            extractCommon: function (e, t, u, r) {
                                for (var n = t.length, D = u.length, i = e.newPos, o = i - r, a = 0; i + 1 < n && o + 1 < D && this.equals(t[i + 1], u[o + 1]);) i++, o++, a++;
                                return a && e.components.push({ count: a }), (e.newPos = i), o;
                            },
                            equals: function (e, t) {
                                return this.options.comparator ? this.options.comparator(e, t) : e === t || (this.options.ignoreCase && e.toLowerCase() === t.toLowerCase());
                            },
                            removeEmpty: function (e) {
                                for (var t = [], u = 0; u < e.length; u++) e[u] && t.push(e[u]);
                                return t;
                            },
                            castInput: function (e) {
                                return e;
                            },
                            tokenize: function (e) {
                                return e.split("");
                            },
                            join: function (e) {
                                return e.join("");
                            },
                        });
                }),
                y = f((e) => {
                    Object.defineProperty(e, "__esModule", { value: !0 }),
                        (e.diffArrays = function (e, t, r) {
                            return u.diff(e, t, r);
                        }),
                        (e.arrayDiff = void 0);
                    var t,
                        u = new ((t = m()) && t.__esModule ? t : { default: t }).default();
                    (e.arrayDiff = u),
                        (u.tokenize = function (e) {
                            return e.slice();
                        }),
                        (u.join = u.removeEmpty = function (e) {
                            return e;
                        });
                }),
                B = f((e, t) => {
                    var u = new Proxy(String, { get: () => u });
                    t.exports = u;
                }),
                b = {};
            d(b, { default: () => A, shouldHighlight: () => v });
            var v,
                A,
                w =
                    ((r = () => {
                        (v = () => !1), (A = String);
                    }),
                        () => (r && (n = r((r = 0))), n)),
                k = f((e) => {
                    Object.defineProperty(e, "__esModule", { value: !0 }),
                        (e.codeFrameColumns = o),
                        (e.default = function (e, t, u, r = {}) {
                            if (!D) {
                                D = !0;
                                let e = "Passing lineNumber and colNumber is deprecated to @babel/code-frame. Please use `codeFrameColumns`.";
                                (Error(e).name = "DeprecationWarning"), console.warn(Error(e));
                            }
                            return o(e, { start: { column: (u = Math.max(u, 0)), line: t } }, r);
                        });
                    var t,
                        u = (w(), h(b)),
                        r = (function (e, t) {
                            if (!t && e && e.__esModule) return e;
                            if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                            var u = n(t);
                            if (u && u.has(e)) return u.get(e);
                            var r = { __proto__: null },
                                D = Object.defineProperty && Object.getOwnPropertyDescriptor;
                            for (var i in e)
                                if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
                                    var o = D ? Object.getOwnPropertyDescriptor(e, i) : null;
                                    o && (o.get || o.set) ? Object.defineProperty(r, i, o) : (r[i] = e[i]);
                                }
                            return (r.default = e), u && u.set(e, r), r;
                        })(B(), !0);
                    function n(e) {
                        if ("function" != typeof WeakMap) return null;
                        var t = new WeakMap(),
                            u = new WeakMap();
                        return (n = function (e) {
                            return e ? u : t;
                        })(e);
                    }
                    var D = !1,
                        i = /\r\n|[\n\r\u2028\u2029]/;
                    function o(e, n, D = {}) {
                        let o = (D.highlightCode || D.forceColor) && (0, u.shouldHighlight)(D),
                            a = D.forceColor ? (null != t || (t = new r.default.constructor({ enabled: !0, level: 1 })), t) : r.default,
                            s = { gutter: a.grey, marker: a.red.bold, message: a.red.bold },
                            l = (e, t) => (o ? e(t) : t),
                            { start: c, end: f, markerLines: d } = (function (e, t, u) {
                                let r = Object.assign({ column: 0, line: -1 }, e.start),
                                    n = Object.assign({}, r, e.end),
                                    { linesAbove: D = 2, linesBelow: i = 3 } = u || {},
                                    o = r.line,
                                    a = r.column,
                                    s = n.line,
                                    l = n.column,
                                    c = Math.max(o - (D + 1), 0),
                                    f = Math.min(t.length, s + i);
                                -1 === o && (c = 0), -1 === s && (f = t.length);
                                let d = s - o,
                                    F = {};
                                if (d)
                                    for (let e = 0; e <= d; e++) {
                                        let u = e + o;
                                        if (a) {
                                            if (0 === e) {
                                                let e = t[u - 1].length;
                                                F[u] = [a, e - a + 1];
                                            } else if (e === d) F[u] = [0, l];
                                            else {
                                                let r = t[u - e].length;
                                                F[u] = [0, r];
                                            }
                                        } else F[u] = !0;
                                    }
                                else a === l ? (a ? (F[o] = [a, 0]) : (F[o] = !0)) : (F[o] = [a, l - a]);
                                return { start: c, end: f, markerLines: F };
                            })(n, e.split(i), D),
                            F = n.start && "number" == typeof n.start.column,
                            p = String(f).length,
                            h = (o ? (0, u.default)(e, D) : e)
                                .split(i, f)
                                .slice(c, f)
                                .map((e, t) => {
                                    let u = c + 1 + t,
                                        r = ` ${` ${u}`.slice(-p)} |`,
                                        n = d[u],
                                        i = !d[u + 1];
                                    if (!n) return ` ${l(s.gutter, r)}${e.length > 0 ? ` ${e}` : ""}`;
                                    {
                                        let t = "";
                                        if (Array.isArray(n)) {
                                            let u = e.slice(0, Math.max(n[0] - 1, 0)).replace(/[^\t]/g, " "),
                                                o = n[1] || 1;
                                            (t = [
                                                `
 `,
                                                l(s.gutter, r.replace(/\d/g, " ")),
                                                " ",
                                                u,
                                                l(s.marker, "^").repeat(o),
                                            ].join("")),
                                                i && D.message && (t += " " + l(s.message, D.message));
                                        }
                                        return [l(s.marker, ">"), l(s.gutter, r), e.length > 0 ? ` ${e}` : "", t].join("");
                                    }
                                }).join(`
`);
                        return (
                            D.message &&
                            !F &&
                            (h = `${" ".repeat(p + 1)}${D.message}
${h}`),
                            o ? a.reset(h) : h
                        );
                    }
                }),
                S = {};
            d(S, { __debug: () => uR, check: () => uM, doc: () => uC, format: () => uL, formatWithCursor: () => u$, getSupportInfo: () => uW, util: () => uB, version: () => uy });
            var x = (e, t, u, r) => {
                if (!(e && null == t)) return t.replaceAll ? t.replaceAll(u, r) : u.global ? t.replace(u, r) : t.split(u).join(r);
            },
                _ = p(y(), 1);
            function O(e) {
                switch (e) {
                    case "cr":
                        return "\r";
                    case "crlf":
                        return `\r
`;
                    default:
                        return `
`;
                }
            }
            function N(e, t) {
                let u;
                switch (t) {
                    case `
`:
                        u = /\n/g;
                        break;
                    case "\r":
                        u = /\r/g;
                        break;
                    case `\r
`:
                        u = /\r\n/g;
                        break;
                    default:
                        throw Error(`Unexpected "eol" ${JSON.stringify(t)}.`);
                }
                let r = e.match(u);
                return r ? r.length : 0;
            }
            var j = "string",
                P = "array",
                T = "cursor",
                I = "indent",
                $ = "align",
                L = "trim",
                M = "group",
                W = "fill",
                R = "if-break",
                V = "indent-if-break",
                q = "line-suffix",
                z = "line-suffix-boundary",
                J = "line",
                H = "label",
                U = "break-parent",
                K = new Set([T, I, $, L, M, W, R, V, q, z, J, H, U]),
                G = function (e) {
                    if ("string" == typeof e) return j;
                    if (Array.isArray(e)) return P;
                    if (!e) return;
                    let { type: t } = e;
                    if (K.has(t)) return t;
                },
                Y = (e) => new Intl.ListFormat("en-US", { type: "disjunction" }).format(e),
                X = class extends Error {
                    name = "InvalidDocError";
                    constructor(e) {
                        super(
                            (function (e) {
                                let t = null === e ? "null" : typeof e;
                                if ("string" !== t && "object" !== t)
                                    return `Unexpected doc '${t}', 
Expected it to be 'string' or 'object'.`;
                                if (G(e)) throw Error("doc is valid.");
                                let u = Object.prototype.toString.call(e);
                                if ("[object Object]" !== u) return `Unexpected doc '${u}'.`;
                                let r = Y([...K].map((e) => `'${e}'`));
                                return `Unexpected doc.type '${e.type}'.
Expected it to be ${r}.`;
                            })(e)
                        ),
                            (this.doc = e);
                    }
                },
                Z = {},
                Q = function (e, t, u, r) {
                    let n = [e];
                    for (; n.length > 0;) {
                        let e = n.pop();
                        if (e === Z) {
                            u(n.pop());
                            continue;
                        }
                        u && n.push(e, Z);
                        let D = G(e);
                        if (!D) throw new X(e);
                        if ((null == t ? void 0 : t(e)) !== !1)
                            switch (D) {
                                case P:
                                case W: {
                                    let t = D === P ? e : e.parts;
                                    for (let e = t.length, u = e - 1; u >= 0; --u) n.push(t[u]);
                                    break;
                                }
                                case R:
                                    n.push(e.flatContents, e.breakContents);
                                    break;
                                case M:
                                    if (r && e.expandedStates) for (let t = e.expandedStates.length, u = t - 1; u >= 0; --u) n.push(e.expandedStates[u]);
                                    else n.push(e.contents);
                                    break;
                                case $:
                                case I:
                                case V:
                                case H:
                                case q:
                                    n.push(e.contents);
                                    break;
                                case j:
                                case T:
                                case L:
                                case z:
                                case J:
                                case U:
                                    break;
                                default:
                                    throw new X(e);
                            }
                    }
                },
                ee = () => { };
            function et(e) {
                return ee(e), { type: I, contents: e };
            }
            function eu(e, t) {
                return ee(t), { type: $, contents: t, n: e };
            }
            function er(e, t = {}) {
                return ee(e), ee(t.expandedStates, !0), { type: M, id: t.id, contents: e, break: !!t.shouldBreak, expandedStates: t.expandedStates };
            }
            function en(e) {
                return ee(e), { type: W, parts: e };
            }
            function eD(e) {
                return ee(e), { type: q, contents: e };
            }
            var ei = { type: U },
                eo = { type: J, hard: !0 },
                ea = { type: J, hard: !0, literal: !0 },
                es = { type: J },
                el = [eo, ei],
                ec = [ea, ei],
                ef = { type: T };
            function ed(e, t) {
                ee(e), ee(t);
                let u = [];
                for (let r = 0; r < t.length; r++) 0 !== r && u.push(e), u.push(t[r]);
                return u;
            }
            function eF(e, t, u) {
                ee(e);
                let r = e;
                if (t > 0) {
                    for (let e = 0; e < Math.floor(t / u); ++e) r = et(r);
                    (r = eu(t % u, r)), (r = eu(Number.NEGATIVE_INFINITY, r));
                }
                return r;
            }
            var ep = (e, t, u) => {
                if (!(e && null == t)) return Array.isArray(t) || "string" == typeof t ? t[u < 0 ? t.length + u : u] : t.at(u);
            },
                eh = () =>
                    /[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26D3\uFE0F?(?:\u200D\uD83D\uDCA5)?|\u26F9(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF43\uDF45-\uDF4A\uDF4C-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDF44(?:\u200D\uD83D\uDFEB)?|\uDF4B(?:\u200D\uD83D\uDFE9)?|\uDFC3(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4\uDEB5](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE41\uDE43\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC08(?:\u200D\u2B1B)?|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC26(?:\u200D(?:\u2B1B|\uD83D\uDD25))?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE])))?))?|\uDC6F(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDD75(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?|\uDE42(?:\u200D[\u2194\u2195]\uFE0F?)?|\uDEB6(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC2\uDECE-\uDEDB\uDEE0-\uDEE8]|\uDD3C(?:\u200D[\u2640\u2642]\uFE0F?|\uD83C[\uDFFB-\uDFFF])?|\uDDCE(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1|\uDDD1\u200D\uD83E\uDDD2(?:\u200D\uD83E\uDDD2)?|\uDDD2(?:\u200D\uD83E\uDDD2)?))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g,
                eC = (e) => {
                    var t;
                    return !(
                        12288 === e ||
                        (e >= 65281 && e <= 65376) ||
                        (e >= 65504 && e <= 65510) ||
                        ((t = e) >= 4352 && t <= 4447) ||
                        8986 === t ||
                        8987 === t ||
                        9001 === t ||
                        9002 === t ||
                        (t >= 9193 && t <= 9196) ||
                        9200 === t ||
                        9203 === t ||
                        9725 === t ||
                        9726 === t ||
                        9748 === t ||
                        9749 === t ||
                        (t >= 9800 && t <= 9811) ||
                        9855 === t ||
                        9875 === t ||
                        9889 === t ||
                        9898 === t ||
                        9899 === t ||
                        9917 === t ||
                        9918 === t ||
                        9924 === t ||
                        9925 === t ||
                        9934 === t ||
                        9940 === t ||
                        9962 === t ||
                        9970 === t ||
                        9971 === t ||
                        9973 === t ||
                        9978 === t ||
                        9981 === t ||
                        9989 === t ||
                        9994 === t ||
                        9995 === t ||
                        10024 === t ||
                        10060 === t ||
                        10062 === t ||
                        (t >= 10067 && t <= 10069) ||
                        10071 === t ||
                        (t >= 10133 && t <= 10135) ||
                        10160 === t ||
                        10175 === t ||
                        11035 === t ||
                        11036 === t ||
                        11088 === t ||
                        11093 === t ||
                        (t >= 11904 && t <= 11929) ||
                        (t >= 11931 && t <= 12019) ||
                        (t >= 12032 && t <= 12245) ||
                        (t >= 12272 && t <= 12287) ||
                        (t >= 12289 && t <= 12350) ||
                        (t >= 12353 && t <= 12438) ||
                        (t >= 12441 && t <= 12543) ||
                        (t >= 12549 && t <= 12591) ||
                        (t >= 12593 && t <= 12686) ||
                        (t >= 12688 && t <= 12771) ||
                        (t >= 12783 && t <= 12830) ||
                        (t >= 12832 && t <= 12871) ||
                        (t >= 12880 && t <= 19903) ||
                        (t >= 19968 && t <= 42124) ||
                        (t >= 42128 && t <= 42182) ||
                        (t >= 43360 && t <= 43388) ||
                        (t >= 44032 && t <= 55203) ||
                        (t >= 63744 && t <= 64255) ||
                        (t >= 65040 && t <= 65049) ||
                        (t >= 65072 && t <= 65106) ||
                        (t >= 65108 && t <= 65126) ||
                        (t >= 65128 && t <= 65131) ||
                        (t >= 94176 && t <= 94180) ||
                        94192 === t ||
                        94193 === t ||
                        (t >= 94208 && t <= 100343) ||
                        (t >= 100352 && t <= 101589) ||
                        (t >= 101632 && t <= 101640) ||
                        (t >= 110576 && t <= 110579) ||
                        (t >= 110581 && t <= 110587) ||
                        110589 === t ||
                        110590 === t ||
                        (t >= 110592 && t <= 110882) ||
                        110898 === t ||
                        (t >= 110928 && t <= 110930) ||
                        110933 === t ||
                        (t >= 110948 && t <= 110951) ||
                        (t >= 110960 && t <= 111355) ||
                        126980 === t ||
                        127183 === t ||
                        127374 === t ||
                        (t >= 127377 && t <= 127386) ||
                        (t >= 127488 && t <= 127490) ||
                        (t >= 127504 && t <= 127547) ||
                        (t >= 127552 && t <= 127560) ||
                        127568 === t ||
                        127569 === t ||
                        (t >= 127584 && t <= 127589) ||
                        (t >= 127744 && t <= 127776) ||
                        (t >= 127789 && t <= 127797) ||
                        (t >= 127799 && t <= 127868) ||
                        (t >= 127870 && t <= 127891) ||
                        (t >= 127904 && t <= 127946) ||
                        (t >= 127951 && t <= 127955) ||
                        (t >= 127968 && t <= 127984) ||
                        127988 === t ||
                        (t >= 127992 && t <= 128062) ||
                        128064 === t ||
                        (t >= 128066 && t <= 128252) ||
                        (t >= 128255 && t <= 128317) ||
                        (t >= 128331 && t <= 128334) ||
                        (t >= 128336 && t <= 128359) ||
                        128378 === t ||
                        128405 === t ||
                        128406 === t ||
                        128420 === t ||
                        (t >= 128507 && t <= 128591) ||
                        (t >= 128640 && t <= 128709) ||
                        128716 === t ||
                        (t >= 128720 && t <= 128722) ||
                        (t >= 128725 && t <= 128727) ||
                        (t >= 128732 && t <= 128735) ||
                        128747 === t ||
                        128748 === t ||
                        (t >= 128756 && t <= 128764) ||
                        (t >= 128992 && t <= 129003) ||
                        129008 === t ||
                        (t >= 129292 && t <= 129338) ||
                        (t >= 129340 && t <= 129349) ||
                        (t >= 129351 && t <= 129535) ||
                        (t >= 129648 && t <= 129660) ||
                        (t >= 129664 && t <= 129672) ||
                        (t >= 129680 && t <= 129725) ||
                        (t >= 129727 && t <= 129733) ||
                        (t >= 129742 && t <= 129755) ||
                        (t >= 129760 && t <= 129768) ||
                        (t >= 129776 && t <= 129784) ||
                        (t >= 131072 && t <= 196605) ||
                        (t >= 196608 && t <= 262141)
                    );
                },
                eE = /[^\x20-\x7F]/,
                eg = function (e) {
                    if (!e) return 0;
                    if (!eE.test(e)) return e.length;
                    e = e.replace(eh(), "  ");
                    let t = 0;
                    for (let u of e) {
                        let e = u.codePointAt(0);
                        e <= 31 || (e >= 127 && e <= 159) || (e >= 768 && e <= 879) || (t += eC(e) ? 1 : 2);
                    }
                    return t;
                },
                em = (e) => {
                    if (Array.isArray(e)) return e;
                    if (e.type !== W) throw Error(`Expect doc to be 'array' or '${W}'.`);
                    return e.parts;
                };
            function ey(e, t) {
                if ("string" == typeof e) return t(e);
                let u = new Map();
                return (function e(r) {
                    if (u.has(r)) return u.get(r);
                    let n = (function (u) {
                        switch (G(u)) {
                            case P:
                                return t(u.map(e));
                            case W:
                                return t({ ...u, parts: u.parts.map(e) });
                            case R:
                                return t({ ...u, breakContents: e(u.breakContents), flatContents: e(u.flatContents) });
                            case M: {
                                let { expandedStates: r, contents: n } = u;
                                return (n = r ? (r = r.map(e))[0] : e(n)), t({ ...u, contents: n, expandedStates: r });
                            }
                            case $:
                            case I:
                            case V:
                            case H:
                            case q:
                                return t({ ...u, contents: e(u.contents) });
                            case j:
                            case T:
                            case L:
                            case z:
                            case J:
                            case U:
                                return t(u);
                            default:
                                throw new X(u);
                        }
                    })(r);
                    return u.set(r, n), n;
                })(e);
            }
            function eB(e, t, u) {
                let r = u,
                    n = !1;
                return (
                    Q(e, function (e) {
                        if (n) return !1;
                        let u = t(e);
                        void 0 !== u && ((n = !0), (r = u));
                    }),
                    r
                );
            }
            function eb(e) {
                if ((e.type === M && e.break) || (e.type === J && e.hard) || e.type === U) return !0;
            }
            function ev(e) {
                if (e.length > 0) {
                    let t = ep(!1, e, -1);
                    t.expandedStates || t.break || (t.break = "propagated");
                }
                return null;
            }
            function eA(e) {
                return e.type !== J || e.hard ? (e.type === R ? e.flatContents : e) : e.soft ? "" : " ";
            }
            function ew(e) {
                for (e = [...e]; e.length >= 2 && ep(!1, e, -2).type === J && ep(!1, e, -1).type === U;) e.length -= 2;
                if (e.length > 0) {
                    let t = ek(ep(!1, e, -1));
                    e[e.length - 1] = t;
                }
                return e;
            }
            function ek(e) {
                switch (G(e)) {
                    case $:
                    case I:
                    case V:
                    case M:
                    case q:
                    case H: {
                        let t = ek(e.contents);
                        return { ...e, contents: t };
                    }
                    case R:
                        return { ...e, breakContents: ek(e.breakContents), flatContents: ek(e.flatContents) };
                    case W:
                        return { ...e, parts: ew(e.parts) };
                    case P:
                        return ew(e);
                    case j:
                        return e.replace(/[\n\r]*$/, "");
                    case T:
                    case L:
                    case z:
                    case J:
                    case U:
                        break;
                    default:
                        throw new X(e);
                }
                return e;
            }
            function eS(e) {
                return ek(
                    ey(e, (e) =>
                        (function (e) {
                            switch (G(e)) {
                                case W:
                                    if (e.parts.every((e) => "" === e)) return "";
                                    break;
                                case M:
                                    if (!e.contents && !e.id && !e.break && !e.expandedStates) return "";
                                    if (e.contents.type === M && e.contents.id === e.id && e.contents.break === e.break && e.contents.expandedStates === e.expandedStates) return e.contents;
                                    break;
                                case $:
                                case I:
                                case V:
                                case q:
                                    if (!e.contents) return "";
                                    break;
                                case R:
                                    if (!e.flatContents && !e.breakContents) return "";
                                    break;
                                case P: {
                                    let t = [];
                                    for (let u of e) {
                                        if (!u) continue;
                                        let [e, ...r] = Array.isArray(u) ? u : [u];
                                        "string" == typeof e && "string" == typeof ep(!1, t, -1) ? (t[t.length - 1] += e) : t.push(e), t.push(...r);
                                    }
                                    return 0 === t.length ? "" : 1 === t.length ? t[0] : t;
                                }
                                case j:
                                case T:
                                case L:
                                case z:
                                case J:
                                case H:
                                case U:
                                    break;
                                default:
                                    throw new X(e);
                            }
                            return e;
                        })(e)
                    )
                );
            }
            function ex(e) {
                if (e.type === J) return !0;
            }
            function e_(e, t) {
                return e.type === H ? { ...e, contents: t(e.contents) } : t(e);
            }
            var eO = Symbol("MODE_BREAK"),
                eN = Symbol("MODE_FLAT"),
                ej = Symbol("cursor");
            function eP() {
                return { value: "", length: 0, queue: [] };
            }
            function eT(e, t, u) {
                let r = "dedent" === t.type ? e.queue.slice(0, -1) : [...e.queue, t],
                    n = "",
                    D = 0,
                    i = 0,
                    o = 0;
                for (let e of r)
                    switch (e.type) {
                        case "indent":
                            l(), u.useTabs ? a(1) : s(u.tabWidth);
                            break;
                        case "stringAlign":
                            l(), (n += e.n), (D += e.n.length);
                            break;
                        case "numberAlign":
                            (i += 1), (o += e.n);
                            break;
                        default:
                            throw Error(`Unexpected type '${e.type}'`);
                    }
                return c(), { ...e, value: n, length: D, queue: r };
                function a(e) {
                    (n += "	".repeat(e)), (D += u.tabWidth * e);
                }
                function s(e) {
                    (n += " ".repeat(e)), (D += e);
                }
                function l() {
                    u.useTabs ? (i > 0 && a(i), (i = 0), (o = 0)) : c();
                }
                function c() {
                    o > 0 && s(o), (i = 0), (o = 0);
                }
            }
            function eI(e) {
                let t = 0,
                    u = 0,
                    r = e.length;
                e: for (; r--;) {
                    let n = e[r];
                    if (n === ej) {
                        u++;
                        continue;
                    }
                    for (let u = n.length - 1; u >= 0; u--) {
                        let D = n[u];
                        if (" " === D || "	" === D) t++;
                        else {
                            e[r] = n.slice(0, u + 1);
                            break e;
                        }
                    }
                }
                if (t > 0 || u > 0) for (e.length = r + 1; u-- > 0;) e.push(ej);
                return t;
            }
            function e$(e, t, u, r, n, D) {
                if (u === Number.POSITIVE_INFINITY) return !0;
                let i = t.length,
                    o = [e],
                    a = [];
                for (; u >= 0;) {
                    if (0 === o.length) {
                        if (0 === i) return !0;
                        o.push(t[--i]);
                        continue;
                    }
                    let { mode: e, doc: s } = o.pop();
                    switch (G(s)) {
                        case j:
                            a.push(s), (u -= eg(s));
                            break;
                        case P:
                        case W: {
                            let t = em(s);
                            for (let u = t.length - 1; u >= 0; u--) o.push({ mode: e, doc: t[u] });
                            break;
                        }
                        case I:
                        case $:
                        case V:
                        case H:
                            o.push({ mode: e, doc: s.contents });
                            break;
                        case L:
                            u += eI(a);
                            break;
                        case M: {
                            if (D && s.break) return !1;
                            let t = s.break ? eO : e,
                                u = s.expandedStates && t === eO ? ep(!1, s.expandedStates, -1) : s.contents;
                            o.push({ mode: t, doc: u });
                            break;
                        }
                        case R: {
                            let t = (s.groupId ? n[s.groupId] || eN : e) === eO ? s.breakContents : s.flatContents;
                            t && o.push({ mode: e, doc: t });
                            break;
                        }
                        case J:
                            if (e === eO || s.hard) return !0;
                            s.soft || (a.push(" "), u--);
                            break;
                        case q:
                            r = !0;
                            break;
                        case z:
                            if (r) return !1;
                    }
                }
                return !1;
            }
            function eL(e, t) {
                var u;
                let r,
                    n,
                    D = {},
                    i = t.printWidth,
                    o = O(t.endOfLine),
                    a = 0,
                    s = [{ ind: eP(), mode: eO, doc: e }],
                    l = [],
                    c = !1,
                    f = [],
                    d = 0;
                for (
                    r = new Set(),
                    n = [],
                    Q(
                        e,
                        function (e) {
                            if ((e.type === U && ev(n), e.type === M)) {
                                if ((n.push(e), r.has(e))) return !1;
                                r.add(e);
                            }
                        },
                        function (e) {
                            e.type === M && n.pop().break && ev(n);
                        },
                        !0
                    );
                    s.length > 0;

                ) {
                    let { ind: e, mode: r, doc: n } = s.pop();
                    switch (G(n)) {
                        case j: {
                            let e =
                                o !==
                                    `
`
                                    ? x(
                                        !1,
                                        n,
                                        `
`,
                                        o
                                    )
                                    : n;
                            l.push(e), s.length > 0 && (a += eg(e));
                            break;
                        }
                        case P:
                            for (let t = n.length - 1; t >= 0; t--) s.push({ ind: e, mode: r, doc: n[t] });
                            break;
                        case T:
                            if (d >= 2) throw Error("There are too many 'cursor' in doc.");
                            l.push(ej), d++;
                            break;
                        case I:
                            s.push({ ind: eT(e, { type: "indent" }, t), mode: r, doc: n.contents });
                            break;
                        case $:
                            s.push({
                                ind:
                                    (u = n.n) === Number.NEGATIVE_INFINITY
                                        ? e.root || eP()
                                        : u < 0
                                            ? eT(e, { type: "dedent" }, t)
                                            : u
                                                ? "root" === u.type
                                                    ? { ...e, root: e }
                                                    : eT(e, { type: "string" == typeof u ? "stringAlign" : "numberAlign", n: u }, t)
                                                : e,
                                mode: r,
                                doc: n.contents,
                            });
                            break;
                        case L:
                            a -= eI(l);
                            break;
                        case M:
                            switch (r) {
                                case eN:
                                    if (!c) {
                                        s.push({ ind: e, mode: n.break ? eO : eN, doc: n.contents });
                                        break;
                                    }
                                case eO: {
                                    c = !1;
                                    let t = { ind: e, mode: eN, doc: n.contents },
                                        u = i - a,
                                        r = f.length > 0;
                                    if (!n.break && e$(t, s, u, r, D)) s.push(t);
                                    else if (n.expandedStates) {
                                        let t = ep(!1, n.expandedStates, -1);
                                        if (n.break) s.push({ ind: e, mode: eO, doc: t });
                                        else
                                            for (let i = 1; i < n.expandedStates.length + 1; i++)
                                                if (i >= n.expandedStates.length) {
                                                    s.push({ ind: e, mode: eO, doc: t });
                                                    break;
                                                } else {
                                                    let t = { ind: e, mode: eN, doc: n.expandedStates[i] };
                                                    if (e$(t, s, u, r, D)) {
                                                        s.push(t);
                                                        break;
                                                    }
                                                }
                                    } else s.push({ ind: e, mode: eO, doc: n.contents });
                                }
                            }
                            n.id && (D[n.id] = ep(!1, s, -1).mode);
                            break;
                        case W: {
                            let t = i - a,
                                { parts: u } = n;
                            if (0 === u.length) break;
                            let [o, l] = u,
                                c = { ind: e, mode: eN, doc: o },
                                d = { ind: e, mode: eO, doc: o },
                                F = e$(c, [], t, f.length > 0, D, !0);
                            if (1 === u.length) {
                                F ? s.push(c) : s.push(d);
                                break;
                            }
                            let p = { ind: e, mode: eN, doc: l },
                                h = { ind: e, mode: eO, doc: l };
                            if (2 === u.length) {
                                F ? s.push(p, c) : s.push(h, d);
                                break;
                            }
                            u.splice(0, 2);
                            let C = { ind: e, mode: r, doc: en(u) };
                            e$({ ind: e, mode: eN, doc: [o, l, u[0]] }, [], t, f.length > 0, D, !0) ? s.push(C, p, c) : F ? s.push(C, h, c) : s.push(C, h, d);
                            break;
                        }
                        case R:
                        case V: {
                            let t = n.groupId ? D[n.groupId] : r;
                            if (t === eO) {
                                let t = n.type === R ? n.breakContents : n.negate ? n.contents : et(n.contents);
                                t && s.push({ ind: e, mode: r, doc: t });
                            }
                            if (t === eN) {
                                let t = n.type === R ? n.flatContents : n.negate ? et(n.contents) : n.contents;
                                t && s.push({ ind: e, mode: r, doc: t });
                            }
                            break;
                        }
                        case q:
                            f.push({ ind: e, mode: r, doc: n.contents });
                            break;
                        case z:
                            f.length > 0 && s.push({ ind: e, mode: r, doc: eo });
                            break;
                        case J:
                            switch (r) {
                                case eN:
                                    if (n.hard) c = !0;
                                    else {
                                        n.soft || (l.push(" "), (a += 1));
                                        break;
                                    }
                                case eO:
                                    if (f.length > 0) {
                                        s.push({ ind: e, mode: r, doc: n }, ...f.reverse()), (f.length = 0);
                                        break;
                                    }
                                    n.literal ? (e.root ? (l.push(o, e.root.value), (a = e.root.length)) : (l.push(o), (a = 0))) : ((a -= eI(l)), l.push(o + e.value), (a = e.length));
                            }
                            break;
                        case H:
                            s.push({ ind: e, mode: r, doc: n.contents });
                            break;
                        case U:
                            break;
                        default:
                            throw new X(n);
                    }
                    0 === s.length && f.length > 0 && (s.push(...f.reverse()), (f.length = 0));
                }
                let F = l.indexOf(ej);
                if (-1 !== F) {
                    let e = l.indexOf(ej, F + 1),
                        t = l.slice(0, F).join(""),
                        u = l.slice(F + 1, e).join("");
                    return { formatted: t + u + l.slice(e + 1).join(""), cursorNodeStart: t.length, cursorNodeText: u };
                }
                return { formatted: l.join("") };
            }
            var eM,
                eW,
                eR,
                eV,
                eq = function (e, t, u = 0) {
                    let r = 0;
                    for (let n = u; n < e.length; ++n) "	" === e[n] ? (r = r + t - (r % t)) : r++;
                    return r;
                },
                ez = class {
                    constructor(e) {
                        E(this, eM), E(this, eR), (this.stack = [e]);
                    }
                    get key() {
                        let { stack: e, siblings: t } = this;
                        return ep(!1, e, null === t ? -2 : -4) ?? null;
                    }
                    get index() {
                        return null === this.siblings ? null : ep(!1, this.stack, -2);
                    }
                    get node() {
                        return ep(!1, this.stack, -1);
                    }
                    get parent() {
                        return this.getNode(1);
                    }
                    get grandparent() {
                        return this.getNode(2);
                    }
                    get isInArray() {
                        return null !== this.siblings;
                    }
                    get siblings() {
                        let { stack: e } = this,
                            t = ep(!1, e, -3);
                        return Array.isArray(t) ? t : null;
                    }
                    get next() {
                        let { siblings: e } = this;
                        return null === e ? null : e[this.index + 1];
                    }
                    get previous() {
                        let { siblings: e } = this;
                        return null === e ? null : e[this.index - 1];
                    }
                    get isFirst() {
                        return 0 === this.index;
                    }
                    get isLast() {
                        let { siblings: e, index: t } = this;
                        return null !== e && t === e.length - 1;
                    }
                    get isRoot() {
                        return 1 === this.stack.length;
                    }
                    get root() {
                        return this.stack[0];
                    }
                    get ancestors() {
                        return [...g(this, eR, eV).call(this)];
                    }
                    getName() {
                        let { stack: e } = this,
                            { length: t } = e;
                        return t > 1 ? ep(!1, e, -2) : null;
                    }
                    getValue() {
                        return ep(!1, this.stack, -1);
                    }
                    getNode(e = 0) {
                        let t = g(this, eM, eW).call(this, e);
                        return -1 === t ? null : this.stack[t];
                    }
                    getParentNode(e = 0) {
                        return this.getNode(e + 1);
                    }
                    call(e, ...t) {
                        let { stack: u } = this,
                            { length: r } = u,
                            n = ep(!1, u, -1);
                        for (let e of t) (n = n[e]), u.push(e, n);
                        try {
                            return e(this);
                        } finally {
                            u.length = r;
                        }
                    }
                    callParent(e, t = 0) {
                        let u = g(this, eM, eW).call(this, t + 1),
                            r = this.stack.splice(u + 1);
                        try {
                            return e(this);
                        } finally {
                            this.stack.push(...r);
                        }
                    }
                    each(e, ...t) {
                        let { stack: u } = this,
                            { length: r } = u,
                            n = ep(!1, u, -1);
                        for (let e of t) (n = n[e]), u.push(e, n);
                        try {
                            for (let t = 0; t < n.length; ++t) u.push(t, n[t]), e(this, t, n), (u.length -= 2);
                        } finally {
                            u.length = r;
                        }
                    }
                    map(e, ...t) {
                        let u = [];
                        return (
                            this.each((t, r, n) => {
                                u[r] = e(t, r, n);
                            }, ...t),
                            u
                        );
                    }
                    match(...e) {
                        let t = this.stack.length - 1,
                            u = null,
                            r = this.stack[t--];
                        for (let n of e) {
                            if (void 0 === r) return !1;
                            let e = null;
                            if (("number" == typeof u && ((e = u), (u = this.stack[t--]), (r = this.stack[t--])), n && !n(r, u, e))) return !1;
                            (u = this.stack[t--]), (r = this.stack[t--]);
                        }
                        return !0;
                    }
                    findAncestor(e) {
                        for (let t of g(this, eR, eV).call(this)) if (e(t)) return t;
                    }
                    hasAncestor(e) {
                        for (let t of g(this, eR, eV).call(this)) if (e(t)) return !0;
                        return !1;
                    }
                };
            (eM = new WeakSet()),
                (eW = function (e) {
                    let { stack: t } = this;
                    for (let u = t.length - 1; u >= 0; u -= 2) if (!Array.isArray(t[u]) && --e < 0) return u;
                    return -1;
                }),
                (eR = new WeakSet()),
                (eV = function* () {
                    let { stack: e } = this;
                    for (let t = e.length - 3; t >= 0; t -= 2) {
                        let u = e[t];
                        Array.isArray(u) || (yield u);
                    }
                });
            var eJ = new Proxy(() => { }, { get: () => eJ });
            function* eH(e, t) {
                let { getVisitorKeys: u, filter: r = () => !0 } = t,
                    n = (e) => null !== e && "object" == typeof e && r(e);
                for (let t of u(e)) {
                    let u = e[t];
                    if (Array.isArray(u)) for (let e of u) n(e) && (yield e);
                    else n(u) && (yield u);
                }
            }
            function eU(e) {
                return (t, u, r) => {
                    let n = !!(null != r && r.backwards);
                    if (!1 === u) return !1;
                    let { length: D } = t,
                        i = u;
                    for (; i >= 0 && i < D;) {
                        let u = t.charAt(i);
                        if (e instanceof RegExp) {
                            if (!e.test(u)) return i;
                        } else if (!e.includes(u)) return i;
                        n ? i-- : i++;
                    }
                    return (-1 === i || i === D) && i;
                };
            }
            var eK = eU(/\s/),
                eG = eU(" 	"),
                eY = eU(",; 	"),
                eX = eU(/[^\n\r]/),
                eZ = function (e, t, u) {
                    let r = !!(null != u && u.backwards);
                    if (!1 === t) return !1;
                    let n = e.charAt(t);
                    if (r) {
                        if (
                            "\r" === e.charAt(t - 1) &&
                            n ===
                            `
`
                        )
                            return t - 2;
                        if (
                            n ===
                            `
` ||
                            "\r" === n ||
                            "\u2028" === n ||
                            "\u2029" === n
                        )
                            return t - 1;
                    } else {
                        if (
                            "\r" === n &&
                            e.charAt(t + 1) ===
                            `
`
                        )
                            return t + 2;
                        if (
                            n ===
                            `
` ||
                            "\r" === n ||
                            "\u2028" === n ||
                            "\u2029" === n
                        )
                            return t + 1;
                    }
                    return t;
                },
                eQ = function (e, t, u = {}) {
                    let r = eG(e, u.backwards ? t - 1 : t, u),
                        n = eZ(e, r, u);
                    return r !== n;
                },
                e0 = new Set(["tokens", "comments", "parent", "enclosingNode", "precedingNode", "followingNode"]),
                e2 = (e) => Object.keys(e).filter((e) => !e0.has(e)),
                e1 = function (e) {
                    return e ? (t) => e(t, e0) : e2;
                };
            function e8(e, t) {
                let u, r;
                (e.comments ?? (e.comments = [])).push(t),
                    (t.printed = !1),
                    (t.nodeDescription =
                        ((u = e.type || e.kind || "(unknown type)"),
                            (r = String(
                                e.name ||
                                (e.id && ("object" == typeof e.id ? e.id.name : e.id)) ||
                                (e.key && ("object" == typeof e.key ? e.key.name : e.key)) ||
                                (e.value && ("object" == typeof e.value ? "" : String(e.value))) ||
                                e.operator ||
                                ""
                            )).length > 20 && (r = r.slice(0, 19) + "…"),
                            u + (r ? " " + r : "")));
            }
            function e3(e, t) {
                (t.leading = !0), (t.trailing = !1), e8(e, t);
            }
            function e6(e, t, u) {
                (t.leading = !1), (t.trailing = !1), u && (t.marker = u), e8(e, t);
            }
            function e7(e, t) {
                (t.leading = !1), (t.trailing = !0), e8(e, t);
            }
            var e9 = new WeakMap();
            function e4(e, t) {
                if (e9.has(e)) return e9.get(e);
                let {
                    printer: { getCommentChildNodes: u, canAttachComment: r, getVisitorKeys: n },
                    locStart: D,
                    locEnd: i,
                } = t;
                if (!r) return [];
                let o = ((null == u ? void 0 : u(e, t)) ?? [...eH(e, { getVisitorKeys: e1(n) })]).flatMap((e) => (r(e) ? [e] : e4(e, t)));
                return o.sort((e, t) => D(e) - D(t) || i(e) - i(t)), e9.set(e, o), o;
            }
            var e5 = () => !1,
                te = (e) => !/[\S\n\u2028\u2029]/.test(e);
            function tt(e, t) {
                var u, r;
                let n = e.length;
                if (0 === n) return;
                let { precedingNode: D, followingNode: i } = e[0],
                    o = t.locStart(i),
                    a;
                for (a = n; a > 0; --a) {
                    let { comment: n, precedingNode: s, followingNode: l } = e[a - 1];
                    eJ.strictEqual(s, D), eJ.strictEqual(l, i);
                    let c = t.originalText.slice(t.locEnd(n), o);
                    if ((null == (r = (u = t.printer).isGap) ? void 0 : r.call(u, c, t)) ?? /^[\s(]*$/.test(c)) o = t.locStart(n);
                    else break;
                }
                for (let [t, { comment: u }] of e.entries()) t < a ? e7(D, u) : e3(i, u);
                for (let e of [D, i]) e.comments && e.comments.length > 1 && e.comments.sort((e, u) => t.locStart(e) - t.locStart(u));
                e.length = 0;
            }
            function tu(e, t, u) {
                let r = u.locStart(t) - 1;
                for (let t = 1; t < e.length; ++t) if (r < u.locStart(e[t])) return t - 1;
                return 0;
            }
            var tr = function (e, t) {
                let u = t - 1;
                (u = eG(e, u, { backwards: !0 })), (u = eZ(e, u, { backwards: !0 })), (u = eG(e, u, { backwards: !0 }));
                let r = eZ(e, u, { backwards: !0 });
                return u !== r;
            };
            function tn(e, t) {
                return (e.node.printed = !0), t.printer.printComment(e, t);
            }
            var tD = class extends Error {
                name = "ConfigError";
            },
                ti = class extends Error {
                    name = "UndefinedParserError";
                },
                to = {
                    cursorOffset: {
                        category: "Special",
                        type: "int",
                        default: -1,
                        range: { start: -1, end: 1 / 0, step: 1 },
                        description: "Print (to stderr) where a cursor at the given position would move to after formatting.",
                        cliCategory: "Editor",
                    },
                    endOfLine: {
                        category: "Global",
                        type: "choice",
                        default: "lf",
                        description: "Which end of line characters to apply.",
                        choices: [
                            { value: "lf", description: "Line Feed only (\\n), common on Linux and macOS as well as inside git repos" },
                            { value: "crlf", description: "Carriage Return + Line Feed characters (\\r\\n), common on Windows" },
                            { value: "cr", description: "Carriage Return character only (\\r), used very rarely" },
                            {
                                value: "auto",
                                description: `Maintain existing
(mixed values within one file are normalised by looking at what's used after the first line)`,
                            },
                        ],
                    },
                    filepath: {
                        category: "Special",
                        type: "path",
                        description: "Specify the input filepath. This will be used to do parser inference.",
                        cliName: "stdin-filepath",
                        cliCategory: "Other",
                        cliDescription: "Path to the file to pretend that stdin comes from.",
                    },
                    insertPragma: { category: "Special", type: "boolean", default: !1, description: "Insert @format pragma into file's first docblock comment.", cliCategory: "Other" },
                    parser: {
                        category: "Global",
                        type: "choice",
                        default: void 0,
                        description: "Which parser to use.",
                        exception: (e) => "string" == typeof e || "function" == typeof e,
                        choices: [
                            { value: "flow", description: "Flow" },
                            { value: "babel", description: "JavaScript" },
                            { value: "babel-flow", description: "Flow" },
                            { value: "babel-ts", description: "TypeScript" },
                            { value: "typescript", description: "TypeScript" },
                            { value: "acorn", description: "JavaScript" },
                            { value: "espree", description: "JavaScript" },
                            { value: "meriyah", description: "JavaScript" },
                            { value: "css", description: "CSS" },
                            { value: "less", description: "Less" },
                            { value: "scss", description: "SCSS" },
                            { value: "json", description: "JSON" },
                            { value: "json5", description: "JSON5" },
                            { value: "jsonc", description: "JSON with Comments" },
                            { value: "json-stringify", description: "JSON.stringify" },
                            { value: "graphql", description: "GraphQL" },
                            { value: "markdown", description: "Markdown" },
                            { value: "mdx", description: "MDX" },
                            { value: "vue", description: "Vue" },
                            { value: "yaml", description: "YAML" },
                            { value: "glimmer", description: "Ember / Handlebars" },
                            { value: "html", description: "HTML" },
                            { value: "angular", description: "Angular" },
                            { value: "lwc", description: "Lightning Web Components" },
                        ],
                    },
                    plugins: {
                        type: "path",
                        array: !0,
                        default: [{ value: [] }],
                        category: "Global",
                        description: "Add a plugin. Multiple plugins can be passed as separate `--plugin`s.",
                        exception: (e) => "string" == typeof e || "object" == typeof e,
                        cliName: "plugin",
                        cliCategory: "Config",
                    },
                    printWidth: { category: "Global", type: "int", default: 80, description: "The line length where Prettier will try wrap.", range: { start: 0, end: 1 / 0, step: 1 } },
                    rangeEnd: {
                        category: "Special",
                        type: "int",
                        default: 1 / 0,
                        range: { start: 0, end: 1 / 0, step: 1 },
                        description: `Format code ending at a given character offset (exclusive).
The range will extend forwards to the end of the selected statement.`,
                        cliCategory: "Editor",
                    },
                    rangeStart: {
                        category: "Special",
                        type: "int",
                        default: 0,
                        range: { start: 0, end: 1 / 0, step: 1 },
                        description: `Format code starting at a given character offset.
The range will extend backwards to the start of the first line containing the selected statement.`,
                        cliCategory: "Editor",
                    },
                    requirePragma: {
                        category: "Special",
                        type: "boolean",
                        default: !1,
                        description: `Require either '@prettier' or '@format' to be present in the file's first docblock comment
in order for it to be formatted.`,
                        cliCategory: "Other",
                    },
                    tabWidth: { type: "int", category: "Global", default: 2, description: "Number of spaces per indentation level.", range: { start: 0, end: 1 / 0, step: 1 } },
                    useTabs: { category: "Global", type: "boolean", default: !1, description: "Indent with tabs instead of spaces." },
                    embeddedLanguageFormatting: {
                        category: "Global",
                        type: "choice",
                        default: "auto",
                        description: "Control how Prettier formats quoted code embedded in the file.",
                        choices: [
                            { value: "auto", description: "Format embedded code if Prettier can automatically identify it." },
                            { value: "off", description: "Never automatically format embedded code." },
                        ],
                    },
                };
            function ta({ plugins: e = [], showDeprecated: t = !1 } = {}) {
                let u = e.flatMap((e) => e.languages ?? []),
                    r = [];
                for (let n of (function (e) {
                    let t = [];
                    for (let [u, r] of Object.entries(e)) {
                        let e = { name: u, ...r };
                        Array.isArray(e.default) && (e.default = ep(!1, e.default, -1).value), t.push(e);
                    }
                    return t;
                })(Object.assign({}, ...e.map(({ options: e }) => e), to)))
                    (!t && n.deprecated) ||
                        (Array.isArray(n.choices) &&
                            (t || (n.choices = n.choices.filter((e) => !e.deprecated)),
                                "parser" === n.name &&
                                (n.choices = [
                                    ...n.choices,
                                    ...(function* (e, t, u) {
                                        let r = new Set(e.map((e) => e.value));
                                        for (let e of t)
                                            if (e.parsers) {
                                                for (let t of e.parsers)
                                                    if (!r.has(t)) {
                                                        r.add(t);
                                                        let n = u.find((e) => e.parsers && Object.prototype.hasOwnProperty.call(e.parsers, t)),
                                                            D = e.name;
                                                        null != n && n.name && (D += ` (plugin: ${n.name})`), yield { value: t, description: D };
                                                    }
                                            }
                                    })(n.choices, u, e),
                                ])),
                            (n.pluginDefaults = Object.fromEntries(
                                e
                                    .filter((e) => {
                                        var t;
                                        return (null == (t = e.defaultOptions) ? void 0 : t[n.name]) !== void 0;
                                    })
                                    .map((e) => [e.name, e.defaultOptions[n.name]])
                            )),
                            r.push(n));
                return { languages: u, options: r };
            }
            var ts = (e) => String(e).split(/[/\\]/).pop();
            function tl(e, t) {
                if (!t) return;
                let u = ts(t).toLowerCase();
                return e.find(({ filenames: e }) => (null == e ? void 0 : e.some((e) => e.toLowerCase() === u))) ?? e.find(({ extensions: e }) => (null == e ? void 0 : e.some((e) => u.endsWith(e))));
            }
            var tc = function (e, t) {
                let u = e.plugins.flatMap((e) => e.languages ?? []),
                    r =
                        (function (e, t) {
                            if (t) return e.find(({ name: e }) => e.toLowerCase() === t) ?? e.find(({ aliases: e }) => (null == e ? void 0 : e.includes(t))) ?? e.find(({ extensions: e }) => (null == e ? void 0 : e.includes(`.${t}`)));
                        })(u, t.language) ??
                        tl(u, t.physicalFile) ??
                        tl(u, t.file) ??
                        void t.physicalFile;
                return null == r ? void 0 : r.parsers[0];
            },
                tf = {
                    key: (e) => (/^[$_a-zA-Z][$_a-zA-Z0-9]*$/.test(e) ? e : JSON.stringify(e)),
                    value(e) {
                        if (null === e || "object" != typeof e) return JSON.stringify(e);
                        if (Array.isArray(e)) return `[${e.map((e) => tf.value(e)).join(", ")}]`;
                        let t = Object.keys(e);
                        return 0 === t.length ? "{}" : `{ ${t.map((t) => `${tf.key(t)}: ${tf.value(e[t])}`).join(", ")} }`;
                    },
                    pair: ({ key: e, value: t }) => tf.value({ [e]: t }),
                },
                td = p(B(), 1),
                tF = p(B(), 1),
                tp = Symbol.for("vnopts.VALUE_NOT_EXIST"),
                th = Symbol.for("vnopts.VALUE_UNCHANGED"),
                tC = " ".repeat(2);
            function tE(e, t, u, r) {
                return `Invalid ${tF.default.red(r.key(e))} value. Expected ${tF.default.blue(u)}, but received ${t === tp ? tF.default.gray("nothing") : tF.default.red(r.value(t))}.`;
            }
            function tg(e, t) {
                if (1 === e.length) return e[0];
                let [u, r] = e,
                    [n, D] = e.map(
                        (e) =>
                            e.split(
                                `
`,
                                1
                            )[0].length
                    );
                return n > t && n > D ? r : u;
            }
            var tm = p(B(), 1),
                ty = [],
                tB = [],
                tb = (e, t, { descriptor: u, logger: r, schemas: n }) => {
                    let D = [`Ignored unknown option ${tm.default.yellow(u.pair({ key: e, value: t }))}.`],
                        i = Object.keys(n)
                            .sort()
                            .find(
                                (t) =>
                                    3 >
                                    (function (e, t) {
                                        if (e === t) return 0;
                                        let u = e;
                                        e.length > t.length && ((e = t), (t = u));
                                        let r = e.length,
                                            n = t.length;
                                        for (; r > 0 && e.charCodeAt(~-r) === t.charCodeAt(~-n);) r--, n--;
                                        let D = 0;
                                        for (; D < r && e.charCodeAt(D) === t.charCodeAt(D);) D++;
                                        if (((r -= D), (n -= D), 0 === r)) return n;
                                        let i,
                                            o,
                                            a,
                                            s,
                                            l = 0,
                                            c = 0;
                                        for (; l < r;) (tB[l] = e.charCodeAt(D + l)), (ty[l] = ++l);
                                        for (; c < n;) for (i = t.charCodeAt(D + c), a = c++, o = c, l = 0; l < r; l++) (s = i === tB[l] ? a : a + 1), (a = ty[l]), (o = ty[l] = a > o ? (s > o ? o + 1 : s) : s > a ? a + 1 : s);
                                        return o;
                                    })(e, t)
                            );
                    i && D.push(`Did you mean ${tm.default.blue(u.key(i))}?`), r.warn(D.join(" "));
                },
                tv = ["default", "expected", "validate", "deprecated", "forward", "redirect", "overlap", "preprocess", "postprocess"],
                tA = class {
                    static create(e) {
                        return (function (e, t) {
                            let u = new e(t),
                                r = Object.create(u);
                            for (let e of tv)
                                e in t &&
                                    (r[e] = (function (e, t, u) {
                                        return "function" == typeof e ? (...r) => e(...r.slice(0, u - 1), t, ...r.slice(u - 1)) : () => e;
                                    })(t[e], u, tA.prototype[e].length));
                            return r;
                        })(this, e);
                    }
                    constructor(e) {
                        this.name = e.name;
                    }
                    default(e) { }
                    expected(e) {
                        return "nothing";
                    }
                    validate(e, t) {
                        return !1;
                    }
                    deprecated(e, t) {
                        return !1;
                    }
                    forward(e, t) { }
                    redirect(e, t) { }
                    overlap(e, t, u) {
                        return e;
                    }
                    preprocess(e, t) {
                        return e;
                    }
                    postprocess(e, t) {
                        return th;
                    }
                },
                tw = class extends tA {
                    constructor(e) {
                        super(e), (this._sourceName = e.sourceName);
                    }
                    expected(e) {
                        return e.schemas[this._sourceName].expected(e);
                    }
                    validate(e, t) {
                        return t.schemas[this._sourceName].validate(e, t);
                    }
                    redirect(e, t) {
                        return this._sourceName;
                    }
                },
                tk = class extends tA {
                    expected() {
                        return "anything";
                    }
                    validate() {
                        return !0;
                    }
                },
                tS = class extends tA {
                    constructor({ valueSchema: e, name: t = e.name, ...u }) {
                        super({ ...u, name: t }), (this._valueSchema = e);
                    }
                    expected(e) {
                        let { text: t, list: u } = e.normalizeExpectedResult(this._valueSchema.expected(e));
                        return { text: t && `an array of ${t}`, list: u && { title: "an array of the following values", values: [{ list: u }] } };
                    }
                    validate(e, t) {
                        if (!Array.isArray(e)) return !1;
                        let u = [];
                        for (let r of e) {
                            let e = t.normalizeValidateResult(this._valueSchema.validate(r, t), r);
                            !0 !== e && u.push(e.value);
                        }
                        return 0 === u.length || { value: u };
                    }
                    deprecated(e, t) {
                        let u = [];
                        for (let r of e) {
                            let e = t.normalizeDeprecatedResult(this._valueSchema.deprecated(r, t), r);
                            !1 !== e && u.push(...e.map(({ value: e }) => ({ value: [e] })));
                        }
                        return u;
                    }
                    forward(e, t) {
                        let u = [];
                        for (let r of e) {
                            let e = t.normalizeForwardResult(this._valueSchema.forward(r, t), r);
                            u.push(...e.map(tx));
                        }
                        return u;
                    }
                    redirect(e, t) {
                        let u = [],
                            r = [];
                        for (let n of e) {
                            let e = t.normalizeRedirectResult(this._valueSchema.redirect(n, t), n);
                            "remain" in e && u.push(e.remain), r.push(...e.redirect.map(tx));
                        }
                        return 0 === u.length ? { redirect: r } : { redirect: r, remain: u };
                    }
                    overlap(e, t) {
                        return e.concat(t);
                    }
                };
            function tx({ from: e, to: t }) {
                return { from: [e], to: t };
            }
            var t_ = class extends tA {
                expected() {
                    return "true or false";
                }
                validate(e) {
                    return "boolean" == typeof e;
                }
            };
            function tO(e, t) {
                if (e === t) return 0;
                let u = typeof e,
                    r = typeof t,
                    n = ["undefined", "object", "boolean", "number", "string"];
                return u !== r ? n.indexOf(u) - n.indexOf(r) : "string" !== u ? Number(e) - Number(t) : e.localeCompare(t);
            }
            function tN(e) {
                return void 0 === e ? {} : e;
            }
            function tj(e) {
                if ("string" == typeof e) return { text: e };
                let { text: t, list: u } = e;
                return (
                    (function (e, t) {
                        if (!e) throw Error(t);
                    })((t || u) !== void 0, "Unexpected `expected` result, there should be at least one field."),
                    u ? { text: t, list: { title: u.title, values: u.values.map(tj) } } : { text: t }
                );
            }
            function tP(e, t) {
                return !0 === e || (!1 === e ? { value: t } : e);
            }
            function tT(e, t, u = !1) {
                return !1 !== e && (!0 === e ? !!u || [{ value: t }] : "value" in e ? [e] : 0 !== e.length && e);
            }
            function tI(e, t) {
                return "string" == typeof e || "key" in e ? { from: t, to: e } : "from" in e ? { from: e.from, to: e.to } : { from: t, to: e.to };
            }
            function t$(e, t) {
                return void 0 === e ? [] : Array.isArray(e) ? e.map((e) => tI(e, t)) : [tI(e, t)];
            }
            function tL(e, t) {
                let u = t$("object" == typeof e && "redirect" in e ? e.redirect : e, t);
                return 0 === u.length ? { remain: t, redirect: u } : "object" == typeof e && "remain" in e ? { remain: e.remain, redirect: u } : { redirect: u };
            }
            var tM = class extends tA {
                constructor(e) {
                    super(e),
                        (this._choices = (function (e, t) {
                            let u = new Map();
                            for (let r of e) {
                                let e = r[t];
                                if (u.has(e)) throw Error(`Duplicate ${t} ${JSON.stringify(e)}`);
                                u.set(e, r);
                            }
                            return u;
                        })(
                            e.choices.map((e) => (e && "object" == typeof e ? e : { value: e })),
                            "value"
                        ));
                }
                expected({ descriptor: e }) {
                    let t = Array.from(this._choices.keys())
                        .map((e) => this._choices.get(e))
                        .filter(({ hidden: e }) => !e)
                        .map((e) => e.value)
                        .sort(tO)
                        .map(e.value),
                        u = t.slice(0, -2),
                        r = t.slice(-2);
                    return { text: u.concat(r.join(" or ")).join(", "), list: { title: "one of the following values", values: t } };
                }
                validate(e) {
                    return this._choices.has(e);
                }
                deprecated(e) {
                    let t = this._choices.get(e);
                    return !!t && !!t.deprecated && { value: e };
                }
                forward(e) {
                    let t = this._choices.get(e);
                    return t ? t.forward : void 0;
                }
                redirect(e) {
                    let t = this._choices.get(e);
                    return t ? t.redirect : void 0;
                }
            },
                tW = class extends tA {
                    expected() {
                        return "a number";
                    }
                    validate(e, t) {
                        return "number" == typeof e;
                    }
                },
                tR = class extends tW {
                    expected() {
                        return "an integer";
                    }
                    validate(e, t) {
                        return !0 === t.normalizeValidateResult(super.validate(e, t), e) && e === Math.floor(e);
                    }
                },
                tV = class extends tA {
                    expected() {
                        return "a string";
                    }
                    validate(e) {
                        return "string" == typeof e;
                    }
                },
                tq = (e, t, u) => {
                    let { text: r, list: n } = u.normalizeExpectedResult(u.schemas[e].expected(u)),
                        D = [];
                    return (
                        r && D.push(tE(e, t, r, u.descriptor)),
                        n &&
                        D.push(
                            [tE(e, t, n.title, u.descriptor)].concat(
                                n.values.map((e) =>
                                    (function e({ text: t, list: u }, r) {
                                        let n = [];
                                        return (
                                            t && n.push(`- ${tF.default.blue(t)}`),
                                            u &&
                                            n.push(
                                                [`- ${tF.default.blue(u.title)}:`].concat(u.values.map((t) => e(t, r - tC.length).replace(/^|\n/g, `$&${tC}`))).join(`
`)
                                            ),
                                            tg(n, r)
                                        );
                                    })(e, u.loggerPrintWidth)
                                )
                            ).join(`
`)
                        ),
                        tg(D, u.loggerPrintWidth)
                    );
                },
                tz = (e, t, { descriptor: u }) => {
                    let r = [`${td.default.yellow("string" == typeof e ? u.key(e) : u.pair(e))} is deprecated`];
                    return t && r.push(`we now treat it as ${td.default.blue("string" == typeof t ? u.key(t) : u.pair(t))}`), r.join("; ") + ".";
                },
                tJ = class {
                    constructor(e, t) {
                        let {
                            logger: u = console,
                            loggerPrintWidth: r = 80,
                            descriptor: n = tf,
                            unknown: D = tb,
                            invalid: i = tq,
                            deprecated: o = tz,
                            missing: a = () => !1,
                            required: s = () => !1,
                            preprocess: l = (e) => e,
                            postprocess: c = () => th,
                        } = t || {};
                        (this._utils = {
                            descriptor: n,
                            logger: u || { warn: () => { } },
                            loggerPrintWidth: r,
                            schemas: (function (e, t) {
                                let u = Object.create(null);
                                for (let r of e) {
                                    let e = r[t];
                                    if (u[e]) throw Error(`Duplicate ${t} ${JSON.stringify(e)}`);
                                    u[e] = r;
                                }
                                return u;
                            })(e, "name"),
                            normalizeDefaultResult: tN,
                            normalizeExpectedResult: tj,
                            normalizeDeprecatedResult: tT,
                            normalizeForwardResult: t$,
                            normalizeRedirectResult: tL,
                            normalizeValidateResult: tP,
                        }),
                            (this._unknownHandler = D),
                            (this._invalidHandler = (...e) => {
                                let t = i(...e);
                                return "string" == typeof t ? Error(t) : t;
                            }),
                            (this._deprecatedHandler = o),
                            (this._identifyMissing = (e, t) => !(e in t) || a(e, t)),
                            (this._identifyRequired = s),
                            (this._preprocess = l),
                            (this._postprocess = c),
                            this.cleanHistory();
                    }
                    cleanHistory() {
                        let e;
                        this._hasDeprecationWarned =
                            ((e = Object.create(null)),
                                (t) => {
                                    let u = JSON.stringify(t);
                                    return !!e[u] || ((e[u] = !0), !1);
                                });
                    }
                    normalize(e) {
                        let t = {},
                            u = [this._preprocess(e, this._utils)],
                            r = () => {
                                for (; 0 !== u.length;) {
                                    let e = u.shift(),
                                        r = this._applyNormalization(e, t);
                                    u.push(...r);
                                }
                            };
                        for (let e of (r(), Object.keys(this._utils.schemas))) {
                            let r = this._utils.schemas[e];
                            if (!(e in t)) {
                                let t = tN(r.default(this._utils));
                                "value" in t && u.push({ [e]: t.value });
                            }
                        }
                        for (let e of (r(), Object.keys(this._utils.schemas))) {
                            if (!(e in t)) continue;
                            let u = this._utils.schemas[e],
                                r = t[e],
                                n = u.postprocess(r, this._utils);
                            n !== th && (this._applyValidation(n, e, u), (t[e] = n));
                        }
                        return this._applyPostprocess(t), this._applyRequiredCheck(t), t;
                    }
                    _applyNormalization(e, t) {
                        let u = [],
                            { knownKeys: r, unknownKeys: n } = this._partitionOptionKeys(e);
                        for (let n of r) {
                            let r = this._utils.schemas[n],
                                D = r.preprocess(e[n], this._utils);
                            this._applyValidation(D, n, r);
                            let i = ({ from: e, to: t }) => {
                                u.push("string" == typeof t ? { [t]: e } : { [t.key]: t.value });
                            },
                                o = ({ value: e, redirectTo: t }) => {
                                    let u = tT(r.deprecated(e, this._utils), D, !0);
                                    if (!1 !== u) {
                                        if (!0 === u) this._hasDeprecationWarned(n) || this._utils.logger.warn(this._deprecatedHandler(n, t, this._utils));
                                        else
                                            for (let { value: e } of u) {
                                                let u = { key: n, value: e };
                                                if (!this._hasDeprecationWarned(u)) {
                                                    let r = "string" == typeof t ? { key: t, value: e } : t;
                                                    this._utils.logger.warn(this._deprecatedHandler(u, r, this._utils));
                                                }
                                            }
                                    }
                                };
                            t$(r.forward(D, this._utils), D).forEach(i);
                            let a = tL(r.redirect(D, this._utils), D);
                            if ((a.redirect.forEach(i), "remain" in a)) {
                                let e = a.remain;
                                (t[n] = n in t ? r.overlap(t[n], e, this._utils) : e), o({ value: e });
                            }
                            for (let { from: e, to: t } of a.redirect) o({ value: e, redirectTo: t });
                        }
                        for (let r of n) {
                            let n = e[r];
                            this._applyUnknownHandler(r, n, t, (e, t) => {
                                u.push({ [e]: t });
                            });
                        }
                        return u;
                    }
                    _applyRequiredCheck(e) {
                        for (let t of Object.keys(this._utils.schemas)) if (this._identifyMissing(t, e) && this._identifyRequired(t)) throw this._invalidHandler(t, tp, this._utils);
                    }
                    _partitionOptionKeys(e) {
                        let [t, u] = (function (e, t) {
                            let u = [],
                                r = [];
                            for (let n of e) t(n) ? u.push(n) : r.push(n);
                            return [u, r];
                        })(
                            Object.keys(e).filter((t) => !this._identifyMissing(t, e)),
                            (e) => e in this._utils.schemas
                        );
                        return { knownKeys: t, unknownKeys: u };
                    }
                    _applyValidation(e, t, u) {
                        let r = tP(u.validate(e, this._utils), e);
                        if (!0 !== r) throw this._invalidHandler(t, r.value, this._utils);
                    }
                    _applyUnknownHandler(e, t, u, r) {
                        let n = this._unknownHandler(e, t, this._utils);
                        if (n)
                            for (let e of Object.keys(n)) {
                                if (this._identifyMissing(e, n)) continue;
                                let t = n[e];
                                e in this._utils.schemas ? r(e, t) : (u[e] = t);
                            }
                    }
                    _applyPostprocess(e) {
                        let t = this._postprocess(e, this._utils);
                        if (t !== th) {
                            if (t.delete) for (let u of t.delete) delete e[u];
                            if (t.override) {
                                let { knownKeys: u, unknownKeys: r } = this._partitionOptionKeys(t.override);
                                for (let r of u) {
                                    let u = t.override[r];
                                    this._applyValidation(u, r, this._utils.schemas[r]), (e[r] = u);
                                }
                                for (let u of r) {
                                    let r = t.override[u];
                                    this._applyUnknownHandler(u, r, e, (t, u) => {
                                        let r = this._utils.schemas[t];
                                        this._applyValidation(u, t, r), (e[t] = u);
                                    });
                                }
                            }
                        }
                    }
                },
                tH = function (e, t, { logger: u = !1, isCLI: r = !1, passThrough: n = !1, FlagSchema: i, descriptor: o } = {}) {
                    if (r) {
                        if (!i) throw Error("'FlagSchema' option is required.");
                        if (!o) throw Error("'descriptor' option is required.");
                    } else o = tf;
                    let a = n
                        ? Array.isArray(n)
                            ? (e, t) => (n.includes(e) ? { [e]: t } : void 0)
                            : (e, t) => ({ [e]: t })
                        : (e, t, u) => {
                            let { _: r, ...n } = u.schemas;
                            return tb(e, t, { ...u, schemas: n });
                        },
                        s = new tJ(
                            (function (e, { isCLI: t, FlagSchema: u }) {
                                let r = [];
                                for (let n of (t && r.push(tk.create({ name: "_" })), e))
                                    r.push(
                                        (function (e, { isCLI: t, optionInfos: u, FlagSchema: r }) {
                                            let { name: n } = e,
                                                D = { name: n },
                                                i,
                                                o = {};
                                            switch (e.type) {
                                                case "int":
                                                    (i = tR), t && (D.preprocess = Number);
                                                    break;
                                                case "string":
                                                case "path":
                                                    i = tV;
                                                    break;
                                                case "choice":
                                                    (i = tM), (D.choices = e.choices.map((t) => (null != t && t.redirect ? { ...t, redirect: { to: { key: e.name, value: t.redirect } } } : t)));
                                                    break;
                                                case "boolean":
                                                    i = t_;
                                                    break;
                                                case "flag":
                                                    (i = r), (D.flags = u.flatMap((e) => [e.alias, e.description && e.name, e.oppositeDescription && `no-${e.name}`].filter(Boolean)));
                                                    break;
                                                default:
                                                    throw Error(`Unexpected type ${e.type}`);
                                            }
                                            if (
                                                (e.exception ? (D.validate = (t, u, r) => e.exception(t) || u.validate(t, r)) : (D.validate = (e, t, u) => void 0 === e || t.validate(e, u)),
                                                    e.redirect && (o.redirect = (t) => (t ? { to: { key: e.redirect.option, value: e.redirect.value } } : void 0)),
                                                    e.deprecated && (o.deprecated = !0),
                                                    t && !e.array)
                                            ) {
                                                let e = D.preprocess || ((e) => e);
                                                D.preprocess = (t, u, r) => u.preprocess(e(Array.isArray(t) ? ep(!1, t, -1) : t), r);
                                            }
                                            return e.array ? tS.create({ ...(t ? { preprocess: (e) => (Array.isArray(e) ? e : [e]) } : {}), ...o, valueSchema: i.create(D) }) : i.create({ ...D, ...o });
                                        })(n, { isCLI: t, optionInfos: e, FlagSchema: u })
                                    ),
                                        n.alias && t && r.push(tw.create({ name: n.alias, sourceName: n.name }));
                                return r;
                            })(t, { isCLI: r, FlagSchema: i }),
                            { logger: u, unknown: a, descriptor: o }
                        ),
                        l = !1 !== u;
                    l && D && (s._hasDeprecationWarned = D);
                    let c = s.normalize(e);
                    return l && (D = s._hasDeprecationWarned), c;
                },
                tU = (e, t, u) => {
                    if (!(e && null == t)) {
                        if (t.findLast) return t.findLast(u);
                        for (let e = t.length - 1; e >= 0; e--) {
                            let r = t[e];
                            if (u(r, e, t)) return r;
                        }
                    }
                };
            function tK(e, t) {
                if (!t) throw Error("parserName is required.");
                let u = tU(!1, e, (e) => e.parsers && Object.prototype.hasOwnProperty.call(e.parsers, t));
                if (u) return u;
                let r = `Couldn't resolve parser "${t}".`;
                throw new tD((r += " Plugins must be explicitly added to the standalone bundle."));
            }
            function tG(e, t) {
                let u = e.parsers[t];
                return "function" == typeof u ? u() : u;
            }
            var tY = { astFormat: "estree", printer: {}, originalText: void 0, locStart: null, locEnd: null };
            async function tX(e, t = {}) {
                var u, r;
                let n;
                let D = { ...e };
                if (!D.parser) {
                    if (D.filepath) {
                        if (((D.parser = tc(D, { physicalFile: D.filepath })), !D.parser)) throw new ti(`No parser could be inferred for file "${D.filepath}".`);
                    } else throw new ti("No parser and no file path given, couldn't infer a parser.");
                }
                let i = ta({ plugins: e.plugins, showDeprecated: !0 }).options,
                    o = { ...tY, ...Object.fromEntries(i.filter((e) => void 0 !== e.default).map((e) => [e.name, e.default])) },
                    a = tK(D.plugins, D.parser),
                    s = await tG(a, D.parser);
                (D.astFormat = s.astFormat), (D.locEnd = s.locEnd), (D.locStart = s.locStart);
                let l =
                    null != (u = a.printers) && u[s.astFormat]
                        ? a
                        : (function (e, t) {
                            if (!t) throw Error("astFormat is required.");
                            let u = tU(!1, e, (e) => e.printers && Object.prototype.hasOwnProperty.call(e.printers, t));
                            if (u) return u;
                            let r = `Couldn't find plugin for AST format "${t}".`;
                            throw new tD((r += " Plugins must be explicitly added to the standalone bundle."));
                        })(D.plugins, s.astFormat),
                    c = await ((r = s.astFormat), "function" == typeof (n = l.printers[r]) ? n() : n);
                D.printer = c;
                let f = l.defaultOptions ? Object.fromEntries(Object.entries(l.defaultOptions).filter(([, e]) => void 0 !== e)) : {};
                for (let [e, t] of Object.entries({ ...o, ...f })) (null === D[e] || void 0 === D[e]) && (D[e] = t);
                return "json" === D.parser && (D.trailingComma = "none"), tH(D, i, { passThrough: Object.keys(tY), ...t });
            }
            var tZ = p(k(), 1);
            async function tQ(e, t) {
                let u,
                    r = await (function ({ plugins: e, parser: t }) {
                        return tG(tK(e, t), t);
                    })(t),
                    n = r.preprocess ? r.preprocess(e, t) : e;
                t.originalText = n;
                try {
                    u = await r.parse(n, t, t);
                } catch (t) {
                    !(function (e, t) {
                        let { loc: u } = e;
                        if (u) {
                            let r = (0, tZ.codeFrameColumns)(t, u, { highlightCode: !0 });
                            throw (
                                ((e.message +=
                                    `
` + r),
                                    (e.codeFrame = r),
                                    e)
                            );
                        }
                        throw e;
                    })(t, e);
                }
                return { text: n, ast: u };
            }
            async function t0(e, t, u, r, n) {
                let {
                    embeddedLanguageFormatting: D,
                    printer: { embed: i, hasPrettierIgnore: o = () => !1, getVisitorKeys: a },
                } = u;
                if (!i || "auto" !== D) return;
                if (i.length > 2) throw Error("printer.embed has too many parameters. The API changed in Prettier v3. Please update your plugin. See https://prettier.io/docs/en/plugins.html#optional-embed");
                let s = e1(i.getVisitorKeys ?? a),
                    l = [];
                !(function t() {
                    let { node: r } = e;
                    if (null === r || "object" != typeof r || o(e)) return;
                    for (let u of s(r)) Array.isArray(r[u]) ? e.each(t, u) : e.call(t, u);
                    let D = i(e, u);
                    if (D) {
                        if ("function" == typeof D) {
                            l.push({ print: D, node: r, pathStack: [...e.stack] });
                            return;
                        }
                        n.set(r, D);
                    }
                })();
                let c = e.stack;
                for (let { print: r, node: D, pathStack: i } of l)
                    try {
                        e.stack = i;
                        let o = await r(f, t, e, u);
                        o && n.set(D, o);
                    } catch (e) {
                        if (globalThis.PRETTIER_DEBUG) throw e;
                    }
                function f(e, t) {
                    return t2(e, t, u, r);
                }
                e.stack = c;
            }
            async function t2(e, t, u, r) {
                let n = await tX({ ...u, ...t, parentParser: u.parser, originalText: e }, { passThrough: !0 }),
                    { ast: D } = await tQ(e, n);
                return eS(await r(D, n));
            }
            var t1 = function (e, t) {
                let { originalText: u, [Symbol.for("comments")]: r, locStart: n, locEnd: D, [Symbol.for("printedComments")]: i } = t,
                    { node: o } = e,
                    a = n(o),
                    s = D(o);
                for (let e of r) n(e) >= a && D(e) <= s && i.add(e);
                return u.slice(a, s);
            };
            async function t8(e, t) {
                ({ ast: e } = await t6(e, t));
                let u = new Map(),
                    r = new ez(e),
                    n = () => { },
                    D = new Map();
                await t0(r, o, t, t8, D);
                let i = await t3(r, t, o, void 0, D);
                return (
                    (function (e) {
                        let { [Symbol.for("comments")]: t, [Symbol.for("printedComments")]: u } = e;
                        for (let e of t) {
                            if (!e.printed && !u.has(e)) throw Error('Comment "' + e.value.trim() + '" was not printed. Please report this error!');
                            delete e.printed;
                        }
                    })(t),
                    i
                );
                function o(e, t) {
                    return void 0 === e || e === r ? a(t) : Array.isArray(e) ? r.call(() => a(t), ...e) : r.call(() => a(t), e);
                }
                function a(e) {
                    n(r);
                    let i = r.node;
                    if (null == i) return "";
                    let a = i && "object" == typeof i && void 0 === e;
                    if (a && u.has(i)) return u.get(i);
                    let s = t3(r, t, o, e, D);
                    return a && u.set(i, s), s;
                }
            }
            function t3(e, t, u, r, n) {
                var D;
                let { node: i } = e,
                    { printer: o } = t,
                    a;
                return (
                    (a = null != (D = o.hasPrettierIgnore) && D.call(o, e) ? t1(e, t) : n.has(i) ? n.get(i) : o.print(e, t, u, r)),
                    i === t.cursorNode && (a = e_(a, (e) => [ef, e, ef])),
                    !o.printComment ||
                    (o.willPrintOwnComments && o.willPrintOwnComments(e, t)) ||
                    (a = (function (e, t, u) {
                        let { leading: r, trailing: n } = (function (e, t) {
                            let u = e.node;
                            if (!u) return {};
                            let r = t[Symbol.for("printedComments")];
                            if (0 === (u.comments || []).filter((e) => !r.has(e)).length) return { leading: "", trailing: "" };
                            let n = [],
                                D = [],
                                i;
                            return (
                                e.each(() => {
                                    let u = e.node;
                                    if (null != r && r.has(u)) return;
                                    let { leading: o, trailing: a } = u;
                                    o
                                        ? n.push(
                                            (function (e, t) {
                                                var u;
                                                let r = e.node,
                                                    n = [tn(e, t)],
                                                    { printer: D, originalText: i, locStart: o, locEnd: a } = t;
                                                if (null == (u = D.isBlockComment) ? void 0 : u.call(D, r)) {
                                                    let e = eQ(i, a(r)) ? (eQ(i, o(r), { backwards: !0 }) ? el : es) : " ";
                                                    n.push(e);
                                                } else n.push(el);
                                                let s = eZ(i, eG(i, a(r)));
                                                return !1 !== s && eQ(i, s) && n.push(el), n;
                                            })(e, t)
                                        )
                                        : a &&
                                        ((i = (function (e, t, u) {
                                            var r;
                                            let n = e.node,
                                                D = tn(e, t),
                                                { printer: i, originalText: o, locStart: a } = t,
                                                s = null == (r = i.isBlockComment) ? void 0 : r.call(i, n);
                                            return (null != u && u.hasLineSuffix && !(null != u && u.isBlock)) || eQ(o, a(n), { backwards: !0 })
                                                ? { doc: eD([el, tr(o, a(n)) ? el : "", D]), isBlock: s, hasLineSuffix: !0 }
                                                : !s || (null != u && u.hasLineSuffix)
                                                    ? { doc: [eD([" ", D]), ei], isBlock: s, hasLineSuffix: !0 }
                                                    : { doc: [" ", D], isBlock: s, hasLineSuffix: !1 };
                                        })(e, t, i)),
                                            D.push(i.doc));
                                }, "comments"),
                                { leading: n, trailing: D }
                            );
                        })(e, u);
                        return r || n ? e_(t, (e) => [r, e, n]) : t;
                    })(e, a, t)),
                    a
                );
            }
            async function t6(e, t) {
                let u = e.comments ?? [];
                (t[Symbol.for("comments")] = u),
                    (t[Symbol.for("tokens")] = e.tokens ?? []),
                    (t[Symbol.for("printedComments")] = new Set()),
                    (function (e, t) {
                        let { comments: u } = e;
                        if ((delete e.comments, !(Array.isArray(u) && u.length > 0) || !t.printer.canAttachComment)) return;
                        let r = [],
                            {
                                locStart: n,
                                locEnd: D,
                                printer: { experimentalFeatures: { avoidAstMutation: i = !1 } = {}, handleComments: o = {} },
                                originalText: a,
                            } = t,
                            { ownLine: s = e5, endOfLine: l = e5, remaining: c = e5 } = o,
                            f = u.map((r, n) => ({
                                ...(function e(t, u, r, n) {
                                    let { locStart: D, locEnd: i } = r,
                                        o = D(u),
                                        a = i(u),
                                        s = e4(t, r),
                                        l,
                                        c,
                                        f = 0,
                                        d = s.length;
                                    for (; f < d;) {
                                        let t = (f + d) >> 1,
                                            n = s[t],
                                            F = D(n),
                                            p = i(n);
                                        if (F <= o && a <= p) return e(n, u, r, n);
                                        if (p <= o) {
                                            (l = n), (f = t + 1);
                                            continue;
                                        }
                                        if (a <= F) {
                                            (c = n), (d = t);
                                            continue;
                                        }
                                        throw Error("Comment location overlaps with node location");
                                    }
                                    if ((null == n ? void 0 : n.type) === "TemplateLiteral") {
                                        let { quasis: e } = n,
                                            t = tu(e, u, r);
                                        l && tu(e, l, r) !== t && (l = null), c && tu(e, c, r) !== t && (c = null);
                                    }
                                    return { enclosingNode: n, precedingNode: l, followingNode: c };
                                })(e, r, t),
                                comment: r,
                                text: a,
                                options: t,
                                ast: e,
                                isLastComment: u.length - 1 === n,
                            }));
                        for (let [e, t] of f.entries()) {
                            let u,
                                { comment: o, precedingNode: a, enclosingNode: d, followingNode: F, text: p, options: h, ast: C, isLastComment: E } = t;
                            if (
                                "json" === h.parser ||
                                "json5" === h.parser ||
                                "jsonc" === h.parser ||
                                "__js_expression" === h.parser ||
                                "__ts_expression" === h.parser ||
                                "__vue_expression" === h.parser ||
                                "__vue_ts_expression" === h.parser
                            ) {
                                if (n(o) - n(C) <= 0) {
                                    e3(C, o);
                                    continue;
                                }
                                if (D(o) - D(C) >= 0) {
                                    e7(C, o);
                                    continue;
                                }
                            }
                            if (
                                (i ? (u = [t]) : ((o.enclosingNode = d), (o.precedingNode = a), (o.followingNode = F), (u = [o, p, h, C, E])),
                                    (function (e, t, u, r) {
                                        let { comment: n, precedingNode: D } = u[r],
                                            { locStart: i, locEnd: o } = t,
                                            a = i(n);
                                        if (D)
                                            for (let t = r - 1; t >= 0; t--) {
                                                let { comment: r, precedingNode: n } = u[t];
                                                if (n !== D || !te(e.slice(o(r), a))) break;
                                                a = i(r);
                                            }
                                        return eQ(e, a, { backwards: !0 });
                                    })(p, h, f, e))
                            )
                                (o.placement = "ownLine"), s(...u) || (F ? e3(F, o) : a ? e7(a, o) : d ? e6(d, o) : e6(C, o));
                            else if (
                                (function (e, t, u, r) {
                                    let { comment: n, followingNode: D } = u[r],
                                        { locStart: i, locEnd: o } = t,
                                        a = o(n);
                                    if (D)
                                        for (let t = r + 1; t < u.length; t++) {
                                            let { comment: r, followingNode: n } = u[t];
                                            if (n !== D || !te(e.slice(a, i(r)))) break;
                                            a = o(r);
                                        }
                                    return eQ(e, a);
                                })(p, h, f, e)
                            )
                                (o.placement = "endOfLine"), l(...u) || (a ? e7(a, o) : F ? e3(F, o) : d ? e6(d, o) : e6(C, o));
                            else if (((o.placement = "remaining"), !c(...u))) {
                                if (a && F) {
                                    let e = r.length;
                                    e > 0 && r[e - 1].followingNode !== F && tt(r, h), r.push(t);
                                } else a ? e7(a, o) : F ? e3(F, o) : d ? e6(d, o) : e6(C, o);
                            }
                        }
                        if ((tt(r, t), !i)) for (let e of u) delete e.precedingNode, delete e.enclosingNode, delete e.followingNode;
                    })(e, t);
                let {
                    printer: { preprocess: r },
                } = t;
                return { ast: (e = r ? await r(e, t) : e), comments: u };
            }
            var t7 = function (e, t) {
                let { cursorOffset: u, locStart: r, locEnd: n } = t,
                    D = e1(t.printer.getVisitorKeys),
                    i = e;
                for (let t of (function* (e, t) {
                    let u = [e];
                    for (let e = 0; e < u.length; e++) for (let r of eH(u[e], t)) yield r, u.push(r);
                })(e, { getVisitorKeys: D, filter: (e) => r(e) <= u && n(e) >= u }))
                    i = t;
                return i;
            },
                t9 = function (e, t) {
                    let {
                        printer: { massageAstNode: u, getVisitorKeys: r },
                    } = t;
                    if (!u) return e;
                    let n = e1(r),
                        D = u.ignoredProperties ?? new Set();
                    return (function e(t, r) {
                        if (!(null !== t && "object" == typeof t)) return t;
                        if (Array.isArray(t)) return t.map((t) => e(t, r)).filter(Boolean);
                        let i = {},
                            o = new Set(n(t));
                        for (let u in t) !Object.prototype.hasOwnProperty.call(t, u) || D.has(u) || (o.has(u) ? (i[u] = e(t[u], t)) : (i[u] = t[u]));
                        let a = u(t, i, r);
                        if (null !== a) return a ?? i;
                    })(e);
                },
                t4 = ({ parser: e }) => "json" === e || "json5" === e || "jsonc" === e || "json-stringify" === e;
            function t5(e) {
                let t = e.length - 1;
                for (; ;) {
                    let u = e[t];
                    if ((null == u ? void 0 : u.type) === "Program" || (null == u ? void 0 : u.type) === "File") t--;
                    else break;
                }
                return e.slice(0, t + 1);
            }
            function ue(e, t, u, r, n = [], D) {
                let { locStart: i, locEnd: o } = u,
                    a = i(e),
                    s = o(e);
                if (!(t > s || t < a || ("rangeEnd" === D && t === a) || ("rangeStart" === D && t === s))) {
                    for (let i of e4(e, u)) {
                        let o = ue(i, t, u, r, [e, ...n], D);
                        if (o) return o;
                    }
                    if (!r || r(e, n[0])) return { node: e, parentNodes: n };
                }
            }
            var ut = new Set(["JsonRoot", "ObjectExpression", "ArrayExpression", "StringLiteral", "NumericLiteral", "BooleanLiteral", "NullLiteral", "UnaryExpression", "TemplateLiteral"]),
                uu = new Set([
                    "OperationDefinition",
                    "FragmentDefinition",
                    "VariableDefinition",
                    "TypeExtensionDefinition",
                    "ObjectTypeDefinition",
                    "FieldDefinition",
                    "DirectiveDefinition",
                    "EnumTypeDefinition",
                    "EnumValueDefinition",
                    "InputValueDefinition",
                    "InputObjectTypeDefinition",
                    "SchemaDefinition",
                    "OperationTypeDefinition",
                    "InterfaceTypeDefinition",
                    "UnionTypeDefinition",
                    "ScalarTypeDefinition",
                ]);
            function ur(e, t, u) {
                if (!t) return !1;
                switch (e.parser) {
                    case "flow":
                    case "babel":
                    case "babel-flow":
                    case "babel-ts":
                    case "typescript":
                    case "acorn":
                    case "espree":
                    case "meriyah":
                    case "__babel_estree":
                        var r;
                        return (
                            (r = t.type),
                            "DeclareExportDeclaration" !== (null == u ? void 0 : u.type) &&
                            "TypeParameterDeclaration" !== r &&
                            ("Directive" === r || "TypeAlias" === r || "TSExportAssignment" === r || r.startsWith("Declare") || r.startsWith("TSDeclare") || r.endsWith("Statement") || r.endsWith("Declaration"))
                        );
                    case "json":
                    case "json5":
                    case "jsonc":
                    case "json-stringify":
                        return ut.has(t.type);
                    case "graphql":
                        return uu.has(t.kind);
                    case "vue":
                        return "root" !== t.tag;
                }
                return !1;
            }
            var un = Symbol("cursor");
            async function uD(e, t, u = 0) {
                if (!e || 0 === e.trim().length) return { formatted: "", cursorOffset: -1, comments: [] };
                let { ast: r, text: n } = await tQ(e, t);
                t.cursorOffset >= 0 && (t.cursorNode = t7(r, t));
                let D = await t8(r, t, u);
                u > 0 && (D = eF([el, D], u, t.tabWidth));
                let i = eL(D, t);
                if (u > 0) {
                    let e = i.formatted.trim();
                    void 0 !== i.cursorNodeStart && (i.cursorNodeStart -= i.formatted.indexOf(e)), (i.formatted = e + O(t.endOfLine));
                }
                let o = t[Symbol.for("comments")];
                if (t.cursorOffset >= 0) {
                    let e, u, r, D, a;
                    if (
                        (t.cursorNode && i.cursorNodeText
                            ? ((e = t.locStart(t.cursorNode)), (u = n.slice(e, t.locEnd(t.cursorNode))), (r = t.cursorOffset - e), (D = i.cursorNodeStart), (a = i.cursorNodeText))
                            : ((e = 0), (u = n), (r = t.cursorOffset), (D = 0), (a = i.formatted)),
                            u === a)
                    )
                        return { formatted: i.formatted, cursorOffset: D + r, comments: o };
                    let s = u.split("");
                    s.splice(r, 0, un);
                    let l = a.split(""),
                        c = (0, _.diffArrays)(s, l),
                        f = D;
                    for (let e of c)
                        if (e.removed) {
                            if (e.value.includes(un)) break;
                        } else f += e.count;
                    return { formatted: i.formatted, cursorOffset: f, comments: o };
                }
                return { formatted: i.formatted, cursorOffset: -1, comments: o };
            }
            async function ui(e, t) {
                let { ast: u, text: r } = await tQ(e, t),
                    { rangeStart: n, rangeEnd: D } = (function (e, t, u) {
                        let r,
                            n,
                            { rangeStart: D, rangeEnd: i, locStart: o, locEnd: a } = t;
                        eJ.ok(i > D);
                        let s = e.slice(D, i).search(/\S/),
                            l = -1 === s;
                        if (!l) for (D += s; i > D && !/\S/.test(e[i - 1]); --i);
                        let c = ue(u, D, t, (e, u) => ur(t, e, u), [], "rangeStart"),
                            f = l ? c : ue(u, i, t, (e) => ur(t, e), [], "rangeEnd");
                        if (!c || !f) return { rangeStart: 0, rangeEnd: 0 };
                        if (t4(t)) {
                            let e, t;
                            let u = ((e = [c.node, ...c.parentNodes]), (t = new Set([f.node, ...f.parentNodes])), e.find((e) => ut.has(e.type) && t.has(e)));
                            (r = u), (n = u);
                        } else
                            ({ startNode: r, endNode: n } = (function (e, t, { locStart: u, locEnd: r }) {
                                let n = e.node,
                                    D = t.node;
                                if (n === D) return { startNode: n, endNode: D };
                                let i = u(e.node);
                                for (let e of t5(t.parentNodes))
                                    if (u(e) >= i) D = e;
                                    else break;
                                let o = r(t.node);
                                for (let t of t5(e.parentNodes)) {
                                    if (r(t) <= o) n = t;
                                    else break;
                                    if (n === D) break;
                                }
                                return { startNode: n, endNode: D };
                            })(c, f, t));
                        return { rangeStart: Math.min(o(r), o(n)), rangeEnd: Math.max(a(r), a(n)) };
                    })(r, t, u),
                    i = r.slice(n, D),
                    o = Math.min(
                        n,
                        r.lastIndexOf(
                            `
`,
                            n
                        ) + 1
                    ),
                    a = eq(r.slice(o, n).match(/^\s*/)[0], t.tabWidth),
                    s = await uD(i, { ...t, rangeStart: 0, rangeEnd: Number.POSITIVE_INFINITY, cursorOffset: t.cursorOffset > n && t.cursorOffset <= D ? t.cursorOffset - n : -1, endOfLine: "lf" }, a),
                    l = s.formatted.trimEnd(),
                    { cursorOffset: c } = t;
                c > D ? (c += l.length - i.length) : s.cursorOffset >= 0 && (c = s.cursorOffset + n);
                let f = r.slice(0, n) + l + r.slice(D);
                if ("lf" !== t.endOfLine) {
                    let e = O(t.endOfLine);
                    c >= 0 &&
                        e ===
                        `\r
` &&
                        (c += N(
                            f.slice(0, c),
                            `
`
                        )),
                        (f = x(
                            !1,
                            f,
                            `
`,
                            e
                        ));
                }
                return { formatted: f, cursorOffset: c, comments: s.comments };
            }
            function uo(e, t, u) {
                return "number" != typeof t || Number.isNaN(t) || t < 0 || t > e.length ? u : t;
            }
            function ua(e, t) {
                let { cursorOffset: u, rangeStart: r, rangeEnd: n } = t;
                return (u = uo(e, u, -1)), (r = uo(e, r, 0)), (n = uo(e, n, e.length)), { ...t, cursorOffset: u, rangeStart: r, rangeEnd: n };
            }
            function us(e, t) {
                var u;
                let r,
                    { cursorOffset: n, rangeStart: D, rangeEnd: i, endOfLine: o } = ua(e, t),
                    a = "\uFEFF" === e.charAt(0);
                if (
                    (a && ((e = e.slice(1)), n--, D--, i--),
                        "auto" === o &&
                        (o =
                            (r = (u = e).indexOf("\r")) >= 0
                                ? u.charAt(r + 1) ===
                                    `
`
                                    ? "crlf"
                                    : "cr"
                                : "lf"),
                        e.includes("\r"))
                ) {
                    let t = (t) =>
                        N(
                            e.slice(0, Math.max(t, 0)),
                            `\r
`
                        );
                    (n -= t(n)),
                        (D -= t(D)),
                        (i -= t(i)),
                        (e = x(
                            !1,
                            e,
                            /\r\n?/g,
                            `
`
                        ));
                }
                return { hasBOM: a, text: e, options: ua(e, { ...t, cursorOffset: n, rangeStart: D, rangeEnd: i, endOfLine: o }) };
            }
            async function ul(e, t) {
                let u = await (function ({ plugins: e, parser: t }) {
                    return tG(tK(e, t), t);
                })(t);
                return !u.hasPragma || u.hasPragma(e);
            }
            async function uc(e, t) {
                let u,
                    { hasBOM: r, text: n, options: D } = us(e, await tX(t));
                return (D.rangeStart >= D.rangeEnd && "" !== n) || (D.requirePragma && !(await ul(n, D)))
                    ? { formatted: e, cursorOffset: t.cursorOffset, comments: [] }
                    : (D.rangeStart > 0 || D.rangeEnd < n.length ? (u = await ui(n, D)) : (!D.requirePragma && D.insertPragma && D.printer.insertPragma && !(await ul(n, D)) && (n = D.printer.insertPragma(n)), (u = await uD(n, D))),
                        r && ((u.formatted = "\uFEFF" + u.formatted), u.cursorOffset >= 0 && u.cursorOffset++),
                        u);
            }
            async function uf(e, t, u) {
                let { text: r, options: n } = us(e, await tX(t)),
                    D = await tQ(r, n);
                return u && (u.preprocessForPrint && (D.ast = await t6(D.ast, n)), u.massage && (D.ast = t9(D.ast, n))), D;
            }
            async function ud(e, t) {
                return (t = await tX(t)), eL(await t8(e, t), t);
            }
            async function uF(e, t) {
                let u = (function (e) {
                    let t = Object.create(null),
                        u = new Set();
                    return (function e(t, u, n) {
                        var D, i;
                        if ("string" == typeof t) return JSON.stringify(t);
                        if (Array.isArray(t)) {
                            let u = t.map(e).filter(Boolean);
                            return 1 === u.length ? u[0] : `[${u.join(", ")}]`;
                        }
                        if (t.type === J) {
                            let e = (null == (D = null == n ? void 0 : n[u + 1]) ? void 0 : D.type) === U;
                            return t.literal ? (e ? "literalline" : "literallineWithoutBreakParent") : t.hard ? (e ? "hardline" : "hardlineWithoutBreakParent") : t.soft ? "softline" : "line";
                        }
                        if (t.type === U) return (null == (i = null == n ? void 0 : n[u - 1]) ? void 0 : i.type) === J && n[u - 1].hard ? void 0 : "breakParent";
                        if (t.type === L) return "trim";
                        if (t.type === I) return "indent(" + e(t.contents) + ")";
                        if (t.type === $)
                            return t.n === Number.NEGATIVE_INFINITY
                                ? "dedentToRoot(" + e(t.contents) + ")"
                                : t.n < 0
                                    ? "dedent(" + e(t.contents) + ")"
                                    : "root" === t.n.type
                                        ? "markAsRoot(" + e(t.contents) + ")"
                                        : "align(" + JSON.stringify(t.n) + ", " + e(t.contents) + ")";
                        if (t.type === R) return "ifBreak(" + e(t.breakContents) + (t.flatContents ? ", " + e(t.flatContents) : "") + (t.groupId ? (t.flatContents ? "" : ', ""') + `, { groupId: ${r(t.groupId)} }` : "") + ")";
                        if (t.type === V) {
                            let u = [];
                            t.negate && u.push("negate: true"), t.groupId && u.push(`groupId: ${r(t.groupId)}`);
                            let n = u.length > 0 ? `, { ${u.join(", ")} }` : "";
                            return `indentIfBreak(${e(t.contents)}${n})`;
                        }
                        if (t.type === M) {
                            let u = [];
                            t.break && "propagated" !== t.break && u.push("shouldBreak: true"), t.id && u.push(`id: ${r(t.id)}`);
                            let n = u.length > 0 ? `, { ${u.join(", ")} }` : "";
                            return t.expandedStates ? `conditionalGroup([${t.expandedStates.map((t) => e(t)).join(",")}]${n})` : `group(${e(t.contents)}${n})`;
                        }
                        if (t.type === W) return `fill([${t.parts.map((t) => e(t)).join(", ")}])`;
                        if (t.type === q) return "lineSuffix(" + e(t.contents) + ")";
                        if (t.type === z) return "lineSuffixBoundary";
                        if (t.type === H) return `label(${JSON.stringify(t.label)}, ${e(t.contents)})`;
                        throw Error("Unknown doc type " + t.type);
                    })(
                        (function e(t) {
                            var u;
                            if (!t) return "";
                            if (Array.isArray(t)) {
                                let u = [];
                                for (let r of t)
                                    if (Array.isArray(r)) u.push(...e(r));
                                    else {
                                        let t = e(r);
                                        "" !== t && u.push(t);
                                    }
                                return u;
                            }
                            return t.type === R
                                ? { ...t, breakContents: e(t.breakContents), flatContents: e(t.flatContents) }
                                : t.type === M
                                    ? { ...t, contents: e(t.contents), expandedStates: null == (u = t.expandedStates) ? void 0 : u.map(e) }
                                    : t.type === W
                                        ? { type: "fill", parts: t.parts.map(e) }
                                        : t.contents
                                            ? { ...t, contents: e(t.contents) }
                                            : t;
                        })(e)
                    );
                    function r(e) {
                        if ("symbol" != typeof e) return JSON.stringify(String(e));
                        if (e in t) return t[e];
                        let r = e.description || "symbol";
                        for (let n = 0; ; n++) {
                            let D = r + (n > 0 ? ` #${n}` : "");
                            if (!u.has(D)) return u.add(D), (t[e] = `Symbol.for(${JSON.stringify(D)})`);
                        }
                    }
                })(e),
                    { formatted: r } = await uc(u, { ...t, parser: "__js_expression" });
                return r;
            }
            async function up(e, t) {
                t = await tX(t);
                let { ast: u } = await tQ(e, t);
                return t8(u, t);
            }
            async function uh(e, t) {
                return eL(e, await tX(t));
            }
            var uC = {};
            d(uC, { builders: () => uE, printer: () => ug, utils: () => um });
            var uE = {
                join: ed,
                line: es,
                softline: { type: J, soft: !0 },
                hardline: el,
                literalline: ec,
                group: er,
                conditionalGroup: function (e, t) {
                    return er(e[0], { ...t, expandedStates: e });
                },
                fill: en,
                lineSuffix: eD,
                lineSuffixBoundary: { type: z },
                cursor: ef,
                breakParent: ei,
                ifBreak: function (e, t = "", u = {}) {
                    return ee(e), "" !== t && ee(t), { type: R, breakContents: e, flatContents: t, groupId: u.groupId };
                },
                trim: { type: L },
                indent: et,
                indentIfBreak: function (e, t) {
                    return ee(e), { type: V, contents: e, groupId: t.groupId, negate: t.negate };
                },
                align: eu,
                addAlignmentToDoc: eF,
                markAsRoot: function (e) {
                    return eu({ type: "root" }, e);
                },
                dedentToRoot: function (e) {
                    return eu(Number.NEGATIVE_INFINITY, e);
                },
                dedent: function (e) {
                    return eu(-1, e);
                },
                hardlineWithoutBreakParent: eo,
                literallineWithoutBreakParent: ea,
                label: function (e, t) {
                    return ee(t), e ? { type: H, label: e, contents: t } : t;
                },
                concat: (e) => e,
            },
                ug = { printDocToString: eL },
                um = {
                    willBreak: function (e) {
                        return eB(e, eb, !1);
                    },
                    traverseDoc: Q,
                    findInDoc: eB,
                    mapDoc: ey,
                    removeLines: function (e) {
                        return ey(e, eA);
                    },
                    stripTrailingHardline: eS,
                    replaceEndOfLine: function (e, t = ec) {
                        return ey(e, (e) =>
                            "string" == typeof e
                                ? ed(
                                    t,
                                    e.split(`
`)
                                )
                                : e
                        );
                    },
                    canBreak: function (e) {
                        return eB(e, ex, !1);
                    },
                },
                uy = "3.2.5",
                uB = {};
            d(uB, {
                addDanglingComment: () => e6,
                addLeadingComment: () => e3,
                addTrailingComment: () => e7,
                getAlignmentSize: () => eq,
                getIndentSize: () => uk,
                getMaxContinuousCount: () => uS,
                getNextNonSpaceNonCommentCharacter: () => ux,
                getNextNonSpaceNonCommentCharacterIndex: () => uj,
                getStringWidth: () => eg,
                hasNewline: () => eQ,
                hasNewlineInRange: () => u_,
                hasSpaces: () => uO,
                isNextLineEmpty: () => uT,
                isNextLineEmptyAfterIndex: () => uw,
                isPreviousLineEmpty: () => uP,
                makeString: () => uN,
                skip: () => eU,
                skipEverythingButNewLine: () => eX,
                skipInlineComment: () => ub,
                skipNewline: () => eZ,
                skipSpaces: () => eG,
                skipToLineEnd: () => eY,
                skipTrailingComment: () => uv,
                skipWhitespace: () => eK,
            });
            var ub = function (e, t) {
                if (!1 === t) return !1;
                if ("/" === e.charAt(t) && "*" === e.charAt(t + 1)) {
                    for (let u = t + 2; u < e.length; ++u) if ("*" === e.charAt(u) && "/" === e.charAt(u + 1)) return u + 2;
                }
                return t;
            },
                uv = function (e, t) {
                    return !1 !== t && ("/" === e.charAt(t) && "/" === e.charAt(t + 1) ? eX(e, t) : t);
                },
                uA = function (e, t) {
                    let u = null,
                        r = t;
                    for (; r !== u;) (u = r), (r = eG(e, r)), (r = ub(e, r)), (r = uv(e, r)), (r = eZ(e, r));
                    return r;
                },
                uw = function (e, t) {
                    let u = null,
                        r = t;
                    for (; r !== u;) (u = r), (r = eY(e, r)), (r = ub(e, r)), (r = eG(e, r));
                    return (r = uv(e, r)), !1 !== (r = eZ(e, r)) && eQ(e, r);
                },
                uk = function (e, t) {
                    let u = e.lastIndexOf(`
`);
                    return -1 === u ? 0 : eq(e.slice(u + 1).match(/^[\t ]*/)[0], t);
                },
                uS = function (e, t) {
                    let u = e.match(
                        RegExp(
                            `(${(function (e) {
                                if ("string" != typeof e) throw TypeError("Expected a string");
                                return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
                            })(t)})+`,
                            "g"
                        )
                    );
                    return null === u ? 0 : u.reduce((e, u) => Math.max(e, u.length / t.length), 0);
                },
                ux = function (e, t) {
                    let u = uA(e, t);
                    return !1 === u ? "" : e.charAt(u);
                },
                u_ = function (e, t, u) {
                    for (let r = t; r < u; ++r)
                        if (
                            e.charAt(r) ===
                            `
`
                        )
                            return !0;
                    return !1;
                },
                uO = function (e, t, u = {}) {
                    return eG(e, u.backwards ? t - 1 : t, u) !== t;
                },
                uN = function (e, t, u) {
                    let r = '"' === t ? "'" : '"',
                        n = x(!1, e, /\\(.)|(["'])/gs, (e, n, D) => (n === r ? n : D === t ? "\\" + D : D || (u && /^[^\n\r"'0-7\\bfnrt-vx\u2028\u2029]$/.test(n) ? n : "\\" + n)));
                    return t + n + t;
                };
            function uj(e, t) {
                return 2 == arguments.length || "number" == typeof t
                    ? uA(e, t)
                    : (function (e, t, u) {
                        return uA(e, u(t));
                    })(...arguments);
            }
            function uP(e, t) {
                return 2 == arguments.length || "number" == typeof t
                    ? tr(e, t)
                    : (function (e, t, u) {
                        return tr(e, u(t));
                    })(...arguments);
            }
            function uT(e, t) {
                return 2 == arguments.length || "number" == typeof t
                    ? uw(e, t)
                    : (function (e, t, u) {
                        return uw(e, u(t));
                    })(...arguments);
            }
            function uI(e, t = 1) {
                return async (...u) => {
                    let r = u[t] ?? {},
                        n = r.plugins ?? [];
                    return (u[t] = { ...r, plugins: Array.isArray(n) ? n : Object.values(n) }), e(...u);
                };
            }
            var u$ = uI(uc);
            async function uL(e, t) {
                let { formatted: u } = await u$(e, { ...t, cursorOffset: -1 });
                return u;
            }
            async function uM(e, t) {
                return (await uL(e, t)) === e;
            }
            var uW = uI(ta, 0),
                uR = { parse: uI(uf), formatAST: uI(ud), formatDoc: uI(uF), printToDoc: uI(up), printDocToString: uI(uh) },
                uV = S;
        },
    },
]);



// "use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4935],{94935:function(e,t,u){let r,n;u.r(t),u.d(t,{__debug:function(){return uR},check:function(){return uM},default:function(){return uV},doc:function(){return uC},format:function(){return uL},formatWithCursor:function(){return u$},getSupportInfo:function(){return uW},util:function(){return uB},version:function(){return uy}});var D,i=Object.create,o=Object.defineProperty,a=Object.getOwnPropertyDescriptor,s=Object.getOwnPropertyNames,l=Object.getPrototypeOf,c=Object.prototype.hasOwnProperty,f=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),d=(e,t)=>{for(var u in t)o(e,u,{get:t[u],enumerable:!0})},F=(e,t,u,r)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let n of s(t))c.call(e,n)||n===u||o(e,n,{get:()=>t[n],enumerable:!(r=a(t,n))||r.enumerable});return e},p=(e,t,u)=>(u=null!=e?i(l(e)):{},F(!t&&e&&e.__esModule?u:o(u,"default",{value:e,enumerable:!0}),e)),h=e=>F(o({},"__esModule",{value:!0}),e),C=(e,t,u)=>{if(!t.has(e))throw TypeError("Cannot "+u)},E=(e,t,u)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,u)},g=(e,t,u)=>(C(e,t,"access private method"),u),m=f(e=>{function t(){}Object.defineProperty(e,"__esModule",{value:!0}),e.default=t,t.prototype={diff:function(e,t){var u=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=u.callback;"function"==typeof u&&(r=u,u={}),this.options=u;var n=this;function D(e){return r?(setTimeout(function(){r(void 0,e)},0),!0):e}e=this.castInput(e),t=this.castInput(t),e=this.removeEmpty(this.tokenize(e));var i=(t=this.removeEmpty(this.tokenize(t))).length,o=e.length,a=1,s=i+o;u.maxEditLength&&(s=Math.min(s,u.maxEditLength));var l=[{newPos:-1,components:[]}],c=this.extractCommon(l[0],t,e,0);if(l[0].newPos+1>=i&&c+1>=o)return D([{value:this.join(t),count:t.length}]);function f(){for(var u=-1*a;u<=a;u+=2){var r=void 0,s=l[u-1],c=l[u+1],f=(c?c.newPos:0)-u;s&&(l[u-1]=void 0);var d=s&&s.newPos+1<i,F=c&&0<=f&&f<o;if(!d&&!F){l[u]=void 0;continue}if(!d||F&&s.newPos<c.newPos?(r={newPos:c.newPos,components:c.components.slice(0)},n.pushComponent(r.components,void 0,!0)):(r=s,r.newPos++,n.pushComponent(r.components,!0,void 0)),f=n.extractCommon(r,t,e,u),r.newPos+1>=i&&f+1>=o)return D(function(e,t,u,r,n){for(var D=0,i=t.length,o=0,a=0;D<i;D++){var s=t[D];if(s.removed){if(s.value=e.join(r.slice(a,a+s.count)),a+=s.count,D&&t[D-1].added){var l=t[D-1];t[D-1]=t[D],t[D]=l}}else{if(!s.added&&n){var c=u.slice(o,o+s.count);c=c.map(function(e,t){var u=r[a+t];return u.length>e.length?u:e}),s.value=e.join(c)}else s.value=e.join(u.slice(o,o+s.count));o+=s.count,s.added||(a+=s.count)}}var f=t[i-1];return i>1&&"string"==typeof f.value&&(f.added||f.removed)&&e.equals("",f.value)&&(t[i-2].value+=f.value,t.pop()),t}(n,r.components,t,e,n.useLongestToken));l[u]=r}a++}if(r)!function e(){setTimeout(function(){if(a>s)return r();f()||e()},0)}();else for(;a<=s;){var d=f();if(d)return d}},pushComponent:function(e,t,u){var r=e[e.length-1];r&&r.added===t&&r.removed===u?e[e.length-1]={count:r.count+1,added:t,removed:u}:e.push({count:1,added:t,removed:u})},extractCommon:function(e,t,u,r){for(var n=t.length,D=u.length,i=e.newPos,o=i-r,a=0;i+1<n&&o+1<D&&this.equals(t[i+1],u[o+1]);)i++,o++,a++;return a&&e.components.push({count:a}),e.newPos=i,o},equals:function(e,t){return this.options.comparator?this.options.comparator(e,t):e===t||this.options.ignoreCase&&e.toLowerCase()===t.toLowerCase()},removeEmpty:function(e){for(var t=[],u=0;u<e.length;u++)e[u]&&t.push(e[u]);return t},castInput:function(e){return e},tokenize:function(e){return e.split("")},join:function(e){return e.join("")}}}),y=f(e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.diffArrays=function(e,t,r){return u.diff(e,t,r)},e.arrayDiff=void 0;var t,u=new((t=m())&&t.__esModule?t:{default:t}).default;e.arrayDiff=u,u.tokenize=function(e){return e.slice()},u.join=u.removeEmpty=function(e){return e}}),B=f((e,t)=>{var u=new Proxy(String,{get:()=>u});t.exports=u}),b={};d(b,{default:()=>A,shouldHighlight:()=>v});var v,A,w=(r=()=>{v=()=>!1,A=String},()=>(r&&(n=r(r=0)),n)),k=f(e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.codeFrameColumns=o,e.default=function(e,t,u,r={}){if(!D){D=!0;let e="Passing lineNumber and colNumber is deprecated to @babel/code-frame. Please use `codeFrameColumns`.";Error(e).name="DeprecationWarning",console.warn(Error(e))}return o(e,{start:{column:u=Math.max(u,0),line:t}},r)};var t,u=(w(),h(b)),r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var u=n(t);if(u&&u.has(e))return u.get(e);var r={__proto__:null},D=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var o=D?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(r,i,o):r[i]=e[i]}return r.default=e,u&&u.set(e,r),r}(B(),!0);function n(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,u=new WeakMap;return(n=function(e){return e?u:t})(e)}var D=!1,i=/\r\n|[\n\r\u2028\u2029]/;function o(e,n,D={}){let o=(D.highlightCode||D.forceColor)&&(0,u.shouldHighlight)(D),a=D.forceColor?(null!=t||(t=new r.default.constructor({enabled:!0,level:1})),t):r.default,s={gutter:a.grey,marker:a.red.bold,message:a.red.bold},l=(e,t)=>o?e(t):t,{start:c,end:f,markerLines:d}=function(e,t,u){let r=Object.assign({column:0,line:-1},e.start),n=Object.assign({},r,e.end),{linesAbove:D=2,linesBelow:i=3}=u||{},o=r.line,a=r.column,s=n.line,l=n.column,c=Math.max(o-(D+1),0),f=Math.min(t.length,s+i);-1===o&&(c=0),-1===s&&(f=t.length);let d=s-o,F={};if(d)for(let e=0;e<=d;e++){let u=e+o;if(a){if(0===e){let e=t[u-1].length;F[u]=[a,e-a+1]}else if(e===d)F[u]=[0,l];else{let r=t[u-e].length;F[u]=[0,r]}}else F[u]=!0}else a===l?a?F[o]=[a,0]:F[o]=!0:F[o]=[a,l-a];return{start:c,end:f,markerLines:F}}(n,e.split(i),D),F=n.start&&"number"==typeof n.start.column,p=String(f).length,h=(o?(0,u.default)(e,D):e).split(i,f).slice(c,f).map((e,t)=>{let u=c+1+t,r=` ${` ${u}`.slice(-p)} |`,n=d[u],i=!d[u+1];if(!n)return` ${l(s.gutter,r)}${e.length>0?` ${e}`:""}`;{let t="";if(Array.isArray(n)){let u=e.slice(0,Math.max(n[0]-1,0)).replace(/[^\t]/g," "),o=n[1]||1;t=[`
//  `,l(s.gutter,r.replace(/\d/g," "))," ",u,l(s.marker,"^").repeat(o)].join(""),i&&D.message&&(t+=" "+l(s.message,D.message))}return[l(s.marker,">"),l(s.gutter,r),e.length>0?` ${e}`:"",t].join("")}}).join(`
// `);return D.message&&!F&&(h=`${" ".repeat(p+1)}${D.message}
// ${h}`),o?a.reset(h):h}}),S={};d(S,{__debug:()=>uR,check:()=>uM,doc:()=>uC,format:()=>uL,formatWithCursor:()=>u$,getSupportInfo:()=>uW,util:()=>uB,version:()=>uy});var x=(e,t,u,r)=>{if(!(e&&null==t))return t.replaceAll?t.replaceAll(u,r):u.global?t.replace(u,r):t.split(u).join(r)},_=p(y(),1);function O(e){switch(e){case"cr":return"\r";case"crlf":return`\r
// `;default:return`
// `}}function N(e,t){let u;switch(t){case`
// `:u=/\n/g;break;case"\r":u=/\r/g;break;case`\r
// `:u=/\r\n/g;break;default:throw Error(`Unexpected "eol" ${JSON.stringify(t)}.`)}let r=e.match(u);return r?r.length:0}var j="string",P="array",T="cursor",I="indent",$="align",L="trim",M="group",W="fill",R="if-break",V="indent-if-break",q="line-suffix",z="line-suffix-boundary",J="line",H="label",U="break-parent",K=new Set([T,I,$,L,M,W,R,V,q,z,J,H,U]),G=function(e){if("string"==typeof e)return j;if(Array.isArray(e))return P;if(!e)return;let{type:t}=e;if(K.has(t))return t},Y=e=>new Intl.ListFormat("en-US",{type:"disjunction"}).format(e),X=class extends Error{name="InvalidDocError";constructor(e){super(function(e){let t=null===e?"null":typeof e;if("string"!==t&&"object"!==t)return`Unexpected doc '${t}', 
// Expected it to be 'string' or 'object'.`;if(G(e))throw Error("doc is valid.");let u=Object.prototype.toString.call(e);if("[object Object]"!==u)return`Unexpected doc '${u}'.`;let r=Y([...K].map(e=>`'${e}'`));return`Unexpected doc.type '${e.type}'.
// Expected it to be ${r}.`}(e)),this.doc=e}},Z={},Q=function(e,t,u,r){let n=[e];for(;n.length>0;){let e=n.pop();if(e===Z){u(n.pop());continue}u&&n.push(e,Z);let D=G(e);if(!D)throw new X(e);if((null==t?void 0:t(e))!==!1)switch(D){case P:case W:{let t=D===P?e:e.parts;for(let e=t.length,u=e-1;u>=0;--u)n.push(t[u]);break}case R:n.push(e.flatContents,e.breakContents);break;case M:if(r&&e.expandedStates)for(let t=e.expandedStates.length,u=t-1;u>=0;--u)n.push(e.expandedStates[u]);else n.push(e.contents);break;case $:case I:case V:case H:case q:n.push(e.contents);break;case j:case T:case L:case z:case J:case U:break;default:throw new X(e)}}},ee=()=>{};function et(e){return ee(e),{type:I,contents:e}}function eu(e,t){return ee(t),{type:$,contents:t,n:e}}function er(e,t={}){return ee(e),ee(t.expandedStates,!0),{type:M,id:t.id,contents:e,break:!!t.shouldBreak,expandedStates:t.expandedStates}}function en(e){return ee(e),{type:W,parts:e}}function eD(e){return ee(e),{type:q,contents:e}}var ei={type:U},eo={type:J,hard:!0},ea={type:J,hard:!0,literal:!0},es={type:J},el=[eo,ei],ec=[ea,ei],ef={type:T};function ed(e,t){ee(e),ee(t);let u=[];for(let r=0;r<t.length;r++)0!==r&&u.push(e),u.push(t[r]);return u}function eF(e,t,u){ee(e);let r=e;if(t>0){for(let e=0;e<Math.floor(t/u);++e)r=et(r);r=eu(t%u,r),r=eu(Number.NEGATIVE_INFINITY,r)}return r}var ep=(e,t,u)=>{if(!(e&&null==t))return Array.isArray(t)||"string"==typeof t?t[u<0?t.length+u:u]:t.at(u)},eh=()=>/[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26D3\uFE0F?(?:\u200D\uD83D\uDCA5)?|\u26F9(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF43\uDF45-\uDF4A\uDF4C-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDF44(?:\u200D\uD83D\uDFEB)?|\uDF4B(?:\u200D\uD83D\uDFE9)?|\uDFC3(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4\uDEB5](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE41\uDE43\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC08(?:\u200D\u2B1B)?|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC26(?:\u200D(?:\u2B1B|\uD83D\uDD25))?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE])))?))?|\uDC6F(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDD75(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?|\uDE42(?:\u200D[\u2194\u2195]\uFE0F?)?|\uDEB6(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC2\uDECE-\uDEDB\uDEE0-\uDEE8]|\uDD3C(?:\u200D[\u2640\u2642]\uFE0F?|\uD83C[\uDFFB-\uDFFF])?|\uDDCE(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1|\uDDD1\u200D\uD83E\uDDD2(?:\u200D\uD83E\uDDD2)?|\uDDD2(?:\u200D\uD83E\uDDD2)?))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g,eC=e=>{var t;return!(12288===e||e>=65281&&e<=65376||e>=65504&&e<=65510||(t=e)>=4352&&t<=4447||8986===t||8987===t||9001===t||9002===t||t>=9193&&t<=9196||9200===t||9203===t||9725===t||9726===t||9748===t||9749===t||t>=9800&&t<=9811||9855===t||9875===t||9889===t||9898===t||9899===t||9917===t||9918===t||9924===t||9925===t||9934===t||9940===t||9962===t||9970===t||9971===t||9973===t||9978===t||9981===t||9989===t||9994===t||9995===t||10024===t||10060===t||10062===t||t>=10067&&t<=10069||10071===t||t>=10133&&t<=10135||10160===t||10175===t||11035===t||11036===t||11088===t||11093===t||t>=11904&&t<=11929||t>=11931&&t<=12019||t>=12032&&t<=12245||t>=12272&&t<=12287||t>=12289&&t<=12350||t>=12353&&t<=12438||t>=12441&&t<=12543||t>=12549&&t<=12591||t>=12593&&t<=12686||t>=12688&&t<=12771||t>=12783&&t<=12830||t>=12832&&t<=12871||t>=12880&&t<=19903||t>=19968&&t<=42124||t>=42128&&t<=42182||t>=43360&&t<=43388||t>=44032&&t<=55203||t>=63744&&t<=64255||t>=65040&&t<=65049||t>=65072&&t<=65106||t>=65108&&t<=65126||t>=65128&&t<=65131||t>=94176&&t<=94180||94192===t||94193===t||t>=94208&&t<=100343||t>=100352&&t<=101589||t>=101632&&t<=101640||t>=110576&&t<=110579||t>=110581&&t<=110587||110589===t||110590===t||t>=110592&&t<=110882||110898===t||t>=110928&&t<=110930||110933===t||t>=110948&&t<=110951||t>=110960&&t<=111355||126980===t||127183===t||127374===t||t>=127377&&t<=127386||t>=127488&&t<=127490||t>=127504&&t<=127547||t>=127552&&t<=127560||127568===t||127569===t||t>=127584&&t<=127589||t>=127744&&t<=127776||t>=127789&&t<=127797||t>=127799&&t<=127868||t>=127870&&t<=127891||t>=127904&&t<=127946||t>=127951&&t<=127955||t>=127968&&t<=127984||127988===t||t>=127992&&t<=128062||128064===t||t>=128066&&t<=128252||t>=128255&&t<=128317||t>=128331&&t<=128334||t>=128336&&t<=128359||128378===t||128405===t||128406===t||128420===t||t>=128507&&t<=128591||t>=128640&&t<=128709||128716===t||t>=128720&&t<=128722||t>=128725&&t<=128727||t>=128732&&t<=128735||128747===t||128748===t||t>=128756&&t<=128764||t>=128992&&t<=129003||129008===t||t>=129292&&t<=129338||t>=129340&&t<=129349||t>=129351&&t<=129535||t>=129648&&t<=129660||t>=129664&&t<=129672||t>=129680&&t<=129725||t>=129727&&t<=129733||t>=129742&&t<=129755||t>=129760&&t<=129768||t>=129776&&t<=129784||t>=131072&&t<=196605||t>=196608&&t<=262141)},eE=/[^\x20-\x7F]/,eg=function(e){if(!e)return 0;if(!eE.test(e))return e.length;e=e.replace(eh(),"  ");let t=0;for(let u of e){let e=u.codePointAt(0);e<=31||e>=127&&e<=159||e>=768&&e<=879||(t+=eC(e)?1:2)}return t},em=e=>{if(Array.isArray(e))return e;if(e.type!==W)throw Error(`Expect doc to be 'array' or '${W}'.`);return e.parts};function ey(e,t){if("string"==typeof e)return t(e);let u=new Map;return function e(r){if(u.has(r))return u.get(r);let n=function(u){switch(G(u)){case P:return t(u.map(e));case W:return t({...u,parts:u.parts.map(e)});case R:return t({...u,breakContents:e(u.breakContents),flatContents:e(u.flatContents)});case M:{let{expandedStates:r,contents:n}=u;return n=r?(r=r.map(e))[0]:e(n),t({...u,contents:n,expandedStates:r})}case $:case I:case V:case H:case q:return t({...u,contents:e(u.contents)});case j:case T:case L:case z:case J:case U:return t(u);default:throw new X(u)}}(r);return u.set(r,n),n}(e)}function eB(e,t,u){let r=u,n=!1;return Q(e,function(e){if(n)return!1;let u=t(e);void 0!==u&&(n=!0,r=u)}),r}function eb(e){if(e.type===M&&e.break||e.type===J&&e.hard||e.type===U)return!0}function ev(e){if(e.length>0){let t=ep(!1,e,-1);t.expandedStates||t.break||(t.break="propagated")}return null}function eA(e){return e.type!==J||e.hard?e.type===R?e.flatContents:e:e.soft?"":" "}function ew(e){for(e=[...e];e.length>=2&&ep(!1,e,-2).type===J&&ep(!1,e,-1).type===U;)e.length-=2;if(e.length>0){let t=ek(ep(!1,e,-1));e[e.length-1]=t}return e}function ek(e){switch(G(e)){case $:case I:case V:case M:case q:case H:{let t=ek(e.contents);return{...e,contents:t}}case R:return{...e,breakContents:ek(e.breakContents),flatContents:ek(e.flatContents)};case W:return{...e,parts:ew(e.parts)};case P:return ew(e);case j:return e.replace(/[\n\r]*$/,"");case T:case L:case z:case J:case U:break;default:throw new X(e)}return e}function eS(e){return ek(ey(e,e=>(function(e){switch(G(e)){case W:if(e.parts.every(e=>""===e))return"";break;case M:if(!e.contents&&!e.id&&!e.break&&!e.expandedStates)return"";if(e.contents.type===M&&e.contents.id===e.id&&e.contents.break===e.break&&e.contents.expandedStates===e.expandedStates)return e.contents;break;case $:case I:case V:case q:if(!e.contents)return"";break;case R:if(!e.flatContents&&!e.breakContents)return"";break;case P:{let t=[];for(let u of e){if(!u)continue;let[e,...r]=Array.isArray(u)?u:[u];"string"==typeof e&&"string"==typeof ep(!1,t,-1)?t[t.length-1]+=e:t.push(e),t.push(...r)}return 0===t.length?"":1===t.length?t[0]:t}case j:case T:case L:case z:case J:case H:case U:break;default:throw new X(e)}return e})(e)))}function ex(e){if(e.type===J)return!0}function e_(e,t){return e.type===H?{...e,contents:t(e.contents)}:t(e)}var eO=Symbol("MODE_BREAK"),eN=Symbol("MODE_FLAT"),ej=Symbol("cursor");function eP(){return{value:"",length:0,queue:[]}}function eT(e,t,u){let r="dedent"===t.type?e.queue.slice(0,-1):[...e.queue,t],n="",D=0,i=0,o=0;for(let e of r)switch(e.type){case"indent":l(),u.useTabs?a(1):s(u.tabWidth);break;case"stringAlign":l(),n+=e.n,D+=e.n.length;break;case"numberAlign":i+=1,o+=e.n;break;default:throw Error(`Unexpected type '${e.type}'`)}return c(),{...e,value:n,length:D,queue:r};function a(e){n+="	".repeat(e),D+=u.tabWidth*e}function s(e){n+=" ".repeat(e),D+=e}function l(){u.useTabs?(i>0&&a(i),i=0,o=0):c()}function c(){o>0&&s(o),i=0,o=0}}function eI(e){let t=0,u=0,r=e.length;e:for(;r--;){let n=e[r];if(n===ej){u++;continue}for(let u=n.length-1;u>=0;u--){let D=n[u];if(" "===D||"	"===D)t++;else{e[r]=n.slice(0,u+1);break e}}}if(t>0||u>0)for(e.length=r+1;u-- >0;)e.push(ej);return t}function e$(e,t,u,r,n,D){if(u===Number.POSITIVE_INFINITY)return!0;let i=t.length,o=[e],a=[];for(;u>=0;){if(0===o.length){if(0===i)return!0;o.push(t[--i]);continue}let{mode:e,doc:s}=o.pop();switch(G(s)){case j:a.push(s),u-=eg(s);break;case P:case W:{let t=em(s);for(let u=t.length-1;u>=0;u--)o.push({mode:e,doc:t[u]});break}case I:case $:case V:case H:o.push({mode:e,doc:s.contents});break;case L:u+=eI(a);break;case M:{if(D&&s.break)return!1;let t=s.break?eO:e,u=s.expandedStates&&t===eO?ep(!1,s.expandedStates,-1):s.contents;o.push({mode:t,doc:u});break}case R:{let t=(s.groupId?n[s.groupId]||eN:e)===eO?s.breakContents:s.flatContents;t&&o.push({mode:e,doc:t});break}case J:if(e===eO||s.hard)return!0;s.soft||(a.push(" "),u--);break;case q:r=!0;break;case z:if(r)return!1}}return!1}function eL(e,t){var u;let r,n,D={},i=t.printWidth,o=O(t.endOfLine),a=0,s=[{ind:eP(),mode:eO,doc:e}],l=[],c=!1,f=[],d=0;for(r=new Set,n=[],Q(e,function(e){if(e.type===U&&ev(n),e.type===M){if(n.push(e),r.has(e))return!1;r.add(e)}},function(e){e.type===M&&n.pop().break&&ev(n)},!0);s.length>0;){let{ind:e,mode:r,doc:n}=s.pop();switch(G(n)){case j:{let e=o!==`
// `?x(!1,n,`
// `,o):n;l.push(e),s.length>0&&(a+=eg(e));break}case P:for(let t=n.length-1;t>=0;t--)s.push({ind:e,mode:r,doc:n[t]});break;case T:if(d>=2)throw Error("There are too many 'cursor' in doc.");l.push(ej),d++;break;case I:s.push({ind:eT(e,{type:"indent"},t),mode:r,doc:n.contents});break;case $:s.push({ind:(u=n.n)===Number.NEGATIVE_INFINITY?e.root||eP():u<0?eT(e,{type:"dedent"},t):u?"root"===u.type?{...e,root:e}:eT(e,{type:"string"==typeof u?"stringAlign":"numberAlign",n:u},t):e,mode:r,doc:n.contents});break;case L:a-=eI(l);break;case M:switch(r){case eN:if(!c){s.push({ind:e,mode:n.break?eO:eN,doc:n.contents});break}case eO:{c=!1;let t={ind:e,mode:eN,doc:n.contents},u=i-a,r=f.length>0;if(!n.break&&e$(t,s,u,r,D))s.push(t);else if(n.expandedStates){let t=ep(!1,n.expandedStates,-1);if(n.break)s.push({ind:e,mode:eO,doc:t});else for(let i=1;i<n.expandedStates.length+1;i++)if(i>=n.expandedStates.length){s.push({ind:e,mode:eO,doc:t});break}else{let t={ind:e,mode:eN,doc:n.expandedStates[i]};if(e$(t,s,u,r,D)){s.push(t);break}}}else s.push({ind:e,mode:eO,doc:n.contents})}}n.id&&(D[n.id]=ep(!1,s,-1).mode);break;case W:{let t=i-a,{parts:u}=n;if(0===u.length)break;let[o,l]=u,c={ind:e,mode:eN,doc:o},d={ind:e,mode:eO,doc:o},F=e$(c,[],t,f.length>0,D,!0);if(1===u.length){F?s.push(c):s.push(d);break}let p={ind:e,mode:eN,doc:l},h={ind:e,mode:eO,doc:l};if(2===u.length){F?s.push(p,c):s.push(h,d);break}u.splice(0,2);let C={ind:e,mode:r,doc:en(u)};e$({ind:e,mode:eN,doc:[o,l,u[0]]},[],t,f.length>0,D,!0)?s.push(C,p,c):F?s.push(C,h,c):s.push(C,h,d);break}case R:case V:{let t=n.groupId?D[n.groupId]:r;if(t===eO){let t=n.type===R?n.breakContents:n.negate?n.contents:et(n.contents);t&&s.push({ind:e,mode:r,doc:t})}if(t===eN){let t=n.type===R?n.flatContents:n.negate?et(n.contents):n.contents;t&&s.push({ind:e,mode:r,doc:t})}break}case q:f.push({ind:e,mode:r,doc:n.contents});break;case z:f.length>0&&s.push({ind:e,mode:r,doc:eo});break;case J:switch(r){case eN:if(n.hard)c=!0;else{n.soft||(l.push(" "),a+=1);break}case eO:if(f.length>0){s.push({ind:e,mode:r,doc:n},...f.reverse()),f.length=0;break}n.literal?e.root?(l.push(o,e.root.value),a=e.root.length):(l.push(o),a=0):(a-=eI(l),l.push(o+e.value),a=e.length)}break;case H:s.push({ind:e,mode:r,doc:n.contents});break;case U:break;default:throw new X(n)}0===s.length&&f.length>0&&(s.push(...f.reverse()),f.length=0)}let F=l.indexOf(ej);if(-1!==F){let e=l.indexOf(ej,F+1),t=l.slice(0,F).join(""),u=l.slice(F+1,e).join("");return{formatted:t+u+l.slice(e+1).join(""),cursorNodeStart:t.length,cursorNodeText:u}}return{formatted:l.join("")}}var eM,eW,eR,eV,eq=function(e,t,u=0){let r=0;for(let n=u;n<e.length;++n)"	"===e[n]?r=r+t-r%t:r++;return r},ez=class{constructor(e){E(this,eM),E(this,eR),this.stack=[e]}get key(){let{stack:e,siblings:t}=this;return ep(!1,e,null===t?-2:-4)??null}get index(){return null===this.siblings?null:ep(!1,this.stack,-2)}get node(){return ep(!1,this.stack,-1)}get parent(){return this.getNode(1)}get grandparent(){return this.getNode(2)}get isInArray(){return null!==this.siblings}get siblings(){let{stack:e}=this,t=ep(!1,e,-3);return Array.isArray(t)?t:null}get next(){let{siblings:e}=this;return null===e?null:e[this.index+1]}get previous(){let{siblings:e}=this;return null===e?null:e[this.index-1]}get isFirst(){return 0===this.index}get isLast(){let{siblings:e,index:t}=this;return null!==e&&t===e.length-1}get isRoot(){return 1===this.stack.length}get root(){return this.stack[0]}get ancestors(){return[...g(this,eR,eV).call(this)]}getName(){let{stack:e}=this,{length:t}=e;return t>1?ep(!1,e,-2):null}getValue(){return ep(!1,this.stack,-1)}getNode(e=0){let t=g(this,eM,eW).call(this,e);return -1===t?null:this.stack[t]}getParentNode(e=0){return this.getNode(e+1)}call(e,...t){let{stack:u}=this,{length:r}=u,n=ep(!1,u,-1);for(let e of t)n=n[e],u.push(e,n);try{return e(this)}finally{u.length=r}}callParent(e,t=0){let u=g(this,eM,eW).call(this,t+1),r=this.stack.splice(u+1);try{return e(this)}finally{this.stack.push(...r)}}each(e,...t){let{stack:u}=this,{length:r}=u,n=ep(!1,u,-1);for(let e of t)n=n[e],u.push(e,n);try{for(let t=0;t<n.length;++t)u.push(t,n[t]),e(this,t,n),u.length-=2}finally{u.length=r}}map(e,...t){let u=[];return this.each((t,r,n)=>{u[r]=e(t,r,n)},...t),u}match(...e){let t=this.stack.length-1,u=null,r=this.stack[t--];for(let n of e){if(void 0===r)return!1;let e=null;if("number"==typeof u&&(e=u,u=this.stack[t--],r=this.stack[t--]),n&&!n(r,u,e))return!1;u=this.stack[t--],r=this.stack[t--]}return!0}findAncestor(e){for(let t of g(this,eR,eV).call(this))if(e(t))return t}hasAncestor(e){for(let t of g(this,eR,eV).call(this))if(e(t))return!0;return!1}};eM=new WeakSet,eW=function(e){let{stack:t}=this;for(let u=t.length-1;u>=0;u-=2)if(!Array.isArray(t[u])&&--e<0)return u;return -1},eR=new WeakSet,eV=function*(){let{stack:e}=this;for(let t=e.length-3;t>=0;t-=2){let u=e[t];Array.isArray(u)||(yield u)}};var eJ=new Proxy(()=>{},{get:()=>eJ});function*eH(e,t){let{getVisitorKeys:u,filter:r=()=>!0}=t,n=e=>null!==e&&"object"==typeof e&&r(e);for(let t of u(e)){let u=e[t];if(Array.isArray(u))for(let e of u)n(e)&&(yield e);else n(u)&&(yield u)}}function eU(e){return(t,u,r)=>{let n=!!(null!=r&&r.backwards);if(!1===u)return!1;let{length:D}=t,i=u;for(;i>=0&&i<D;){let u=t.charAt(i);if(e instanceof RegExp){if(!e.test(u))return i}else if(!e.includes(u))return i;n?i--:i++}return(-1===i||i===D)&&i}}var eK=eU(/\s/),eG=eU(" 	"),eY=eU(",; 	"),eX=eU(/[^\n\r]/),eZ=function(e,t,u){let r=!!(null!=u&&u.backwards);if(!1===t)return!1;let n=e.charAt(t);if(r){if("\r"===e.charAt(t-1)&&n===`
// `)return t-2;if(n===`
// `||"\r"===n||"\u2028"===n||"\u2029"===n)return t-1}else{if("\r"===n&&e.charAt(t+1)===`
// `)return t+2;if(n===`
// `||"\r"===n||"\u2028"===n||"\u2029"===n)return t+1}return t},eQ=function(e,t,u={}){let r=eG(e,u.backwards?t-1:t,u),n=eZ(e,r,u);return r!==n},e0=new Set(["tokens","comments","parent","enclosingNode","precedingNode","followingNode"]),e2=e=>Object.keys(e).filter(e=>!e0.has(e)),e1=function(e){return e?t=>e(t,e0):e2};function e8(e,t){let u,r;(e.comments??(e.comments=[])).push(t),t.printed=!1,t.nodeDescription=(u=e.type||e.kind||"(unknown type)",(r=String(e.name||e.id&&("object"==typeof e.id?e.id.name:e.id)||e.key&&("object"==typeof e.key?e.key.name:e.key)||e.value&&("object"==typeof e.value?"":String(e.value))||e.operator||"")).length>20&&(r=r.slice(0,19)+"…"),u+(r?" "+r:""))}function e3(e,t){t.leading=!0,t.trailing=!1,e8(e,t)}function e6(e,t,u){t.leading=!1,t.trailing=!1,u&&(t.marker=u),e8(e,t)}function e7(e,t){t.leading=!1,t.trailing=!0,e8(e,t)}var e9=new WeakMap;function e4(e,t){if(e9.has(e))return e9.get(e);let{printer:{getCommentChildNodes:u,canAttachComment:r,getVisitorKeys:n},locStart:D,locEnd:i}=t;if(!r)return[];let o=((null==u?void 0:u(e,t))??[...eH(e,{getVisitorKeys:e1(n)})]).flatMap(e=>r(e)?[e]:e4(e,t));return o.sort((e,t)=>D(e)-D(t)||i(e)-i(t)),e9.set(e,o),o}var e5=()=>!1,te=e=>!/[\S\n\u2028\u2029]/.test(e);function tt(e,t){var u,r;let n=e.length;if(0===n)return;let{precedingNode:D,followingNode:i}=e[0],o=t.locStart(i),a;for(a=n;a>0;--a){let{comment:n,precedingNode:s,followingNode:l}=e[a-1];eJ.strictEqual(s,D),eJ.strictEqual(l,i);let c=t.originalText.slice(t.locEnd(n),o);if((null==(r=(u=t.printer).isGap)?void 0:r.call(u,c,t))??/^[\s(]*$/.test(c))o=t.locStart(n);else break}for(let[t,{comment:u}]of e.entries())t<a?e7(D,u):e3(i,u);for(let e of[D,i])e.comments&&e.comments.length>1&&e.comments.sort((e,u)=>t.locStart(e)-t.locStart(u));e.length=0}function tu(e,t,u){let r=u.locStart(t)-1;for(let t=1;t<e.length;++t)if(r<u.locStart(e[t]))return t-1;return 0}var tr=function(e,t){let u=t-1;u=eG(e,u,{backwards:!0}),u=eZ(e,u,{backwards:!0}),u=eG(e,u,{backwards:!0});let r=eZ(e,u,{backwards:!0});return u!==r};function tn(e,t){return e.node.printed=!0,t.printer.printComment(e,t)}var tD=class extends Error{name="ConfigError"},ti=class extends Error{name="UndefinedParserError"},to={cursorOffset:{category:"Special",type:"int",default:-1,range:{start:-1,end:1/0,step:1},description:"Print (to stderr) where a cursor at the given position would move to after formatting.",cliCategory:"Editor"},endOfLine:{category:"Global",type:"choice",default:"lf",description:"Which end of line characters to apply.",choices:[{value:"lf",description:"Line Feed only (\\n), common on Linux and macOS as well as inside git repos"},{value:"crlf",description:"Carriage Return + Line Feed characters (\\r\\n), common on Windows"},{value:"cr",description:"Carriage Return character only (\\r), used very rarely"},{value:"auto",description:`Maintain existing
// (mixed values within one file are normalised by looking at what's used after the first line)`}]},filepath:{category:"Special",type:"path",description:"Specify the input filepath. This will be used to do parser inference.",cliName:"stdin-filepath",cliCategory:"Other",cliDescription:"Path to the file to pretend that stdin comes from."},insertPragma:{category:"Special",type:"boolean",default:!1,description:"Insert @format pragma into file's first docblock comment.",cliCategory:"Other"},parser:{category:"Global",type:"choice",default:void 0,description:"Which parser to use.",exception:e=>"string"==typeof e||"function"==typeof e,choices:[{value:"flow",description:"Flow"},{value:"babel",description:"JavaScript"},{value:"babel-flow",description:"Flow"},{value:"babel-ts",description:"TypeScript"},{value:"typescript",description:"TypeScript"},{value:"acorn",description:"JavaScript"},{value:"espree",description:"JavaScript"},{value:"meriyah",description:"JavaScript"},{value:"css",description:"CSS"},{value:"less",description:"Less"},{value:"scss",description:"SCSS"},{value:"json",description:"JSON"},{value:"json5",description:"JSON5"},{value:"jsonc",description:"JSON with Comments"},{value:"json-stringify",description:"JSON.stringify"},{value:"graphql",description:"GraphQL"},{value:"markdown",description:"Markdown"},{value:"mdx",description:"MDX"},{value:"vue",description:"Vue"},{value:"yaml",description:"YAML"},{value:"glimmer",description:"Ember / Handlebars"},{value:"html",description:"HTML"},{value:"angular",description:"Angular"},{value:"lwc",description:"Lightning Web Components"}]},plugins:{type:"path",array:!0,default:[{value:[]}],category:"Global",description:"Add a plugin. Multiple plugins can be passed as separate `--plugin`s.",exception:e=>"string"==typeof e||"object"==typeof e,cliName:"plugin",cliCategory:"Config"},printWidth:{category:"Global",type:"int",default:80,description:"The line length where Prettier will try wrap.",range:{start:0,end:1/0,step:1}},rangeEnd:{category:"Special",type:"int",default:1/0,range:{start:0,end:1/0,step:1},description:`Format code ending at a given character offset (exclusive).
// The range will extend forwards to the end of the selected statement.`,cliCategory:"Editor"},rangeStart:{category:"Special",type:"int",default:0,range:{start:0,end:1/0,step:1},description:`Format code starting at a given character offset.
// The range will extend backwards to the start of the first line containing the selected statement.`,cliCategory:"Editor"},requirePragma:{category:"Special",type:"boolean",default:!1,description:`Require either '@prettier' or '@format' to be present in the file's first docblock comment
// in order for it to be formatted.`,cliCategory:"Other"},tabWidth:{type:"int",category:"Global",default:2,description:"Number of spaces per indentation level.",range:{start:0,end:1/0,step:1}},useTabs:{category:"Global",type:"boolean",default:!1,description:"Indent with tabs instead of spaces."},embeddedLanguageFormatting:{category:"Global",type:"choice",default:"auto",description:"Control how Prettier formats quoted code embedded in the file.",choices:[{value:"auto",description:"Format embedded code if Prettier can automatically identify it."},{value:"off",description:"Never automatically format embedded code."}]}};function ta({plugins:e=[],showDeprecated:t=!1}={}){let u=e.flatMap(e=>e.languages??[]),r=[];for(let n of function(e){let t=[];for(let[u,r]of Object.entries(e)){let e={name:u,...r};Array.isArray(e.default)&&(e.default=ep(!1,e.default,-1).value),t.push(e)}return t}(Object.assign({},...e.map(({options:e})=>e),to)))!t&&n.deprecated||(Array.isArray(n.choices)&&(t||(n.choices=n.choices.filter(e=>!e.deprecated)),"parser"===n.name&&(n.choices=[...n.choices,...function*(e,t,u){let r=new Set(e.map(e=>e.value));for(let e of t)if(e.parsers){for(let t of e.parsers)if(!r.has(t)){r.add(t);let n=u.find(e=>e.parsers&&Object.prototype.hasOwnProperty.call(e.parsers,t)),D=e.name;null!=n&&n.name&&(D+=` (plugin: ${n.name})`),yield{value:t,description:D}}}}(n.choices,u,e)])),n.pluginDefaults=Object.fromEntries(e.filter(e=>{var t;return(null==(t=e.defaultOptions)?void 0:t[n.name])!==void 0}).map(e=>[e.name,e.defaultOptions[n.name]])),r.push(n));return{languages:u,options:r}}var ts=e=>String(e).split(/[/\\]/).pop();function tl(e,t){if(!t)return;let u=ts(t).toLowerCase();return e.find(({filenames:e})=>null==e?void 0:e.some(e=>e.toLowerCase()===u))??e.find(({extensions:e})=>null==e?void 0:e.some(e=>u.endsWith(e)))}var tc=function(e,t){let u=e.plugins.flatMap(e=>e.languages??[]),r=function(e,t){if(t)return e.find(({name:e})=>e.toLowerCase()===t)??e.find(({aliases:e})=>null==e?void 0:e.includes(t))??e.find(({extensions:e})=>null==e?void 0:e.includes(`.${t}`))}(u,t.language)??tl(u,t.physicalFile)??tl(u,t.file)??void t.physicalFile;return null==r?void 0:r.parsers[0]},tf={key:e=>/^[$_a-zA-Z][$_a-zA-Z0-9]*$/.test(e)?e:JSON.stringify(e),value(e){if(null===e||"object"!=typeof e)return JSON.stringify(e);if(Array.isArray(e))return`[${e.map(e=>tf.value(e)).join(", ")}]`;let t=Object.keys(e);return 0===t.length?"{}":`{ ${t.map(t=>`${tf.key(t)}: ${tf.value(e[t])}`).join(", ")} }`},pair:({key:e,value:t})=>tf.value({[e]:t})},td=p(B(),1),tF=p(B(),1),tp=Symbol.for("vnopts.VALUE_NOT_EXIST"),th=Symbol.for("vnopts.VALUE_UNCHANGED"),tC=" ".repeat(2);function tE(e,t,u,r){return`Invalid ${tF.default.red(r.key(e))} value. Expected ${tF.default.blue(u)}, but received ${t===tp?tF.default.gray("nothing"):tF.default.red(r.value(t))}.`}function tg(e,t){if(1===e.length)return e[0];let[u,r]=e,[n,D]=e.map(e=>e.split(`
// `,1)[0].length);return n>t&&n>D?r:u}var tm=p(B(),1),ty=[],tB=[],tb=(e,t,{descriptor:u,logger:r,schemas:n})=>{let D=[`Ignored unknown option ${tm.default.yellow(u.pair({key:e,value:t}))}.`],i=Object.keys(n).sort().find(t=>3>function(e,t){if(e===t)return 0;let u=e;e.length>t.length&&(e=t,t=u);let r=e.length,n=t.length;for(;r>0&&e.charCodeAt(~-r)===t.charCodeAt(~-n);)r--,n--;let D=0;for(;D<r&&e.charCodeAt(D)===t.charCodeAt(D);)D++;if(r-=D,n-=D,0===r)return n;let i,o,a,s,l=0,c=0;for(;l<r;)tB[l]=e.charCodeAt(D+l),ty[l]=++l;for(;c<n;)for(i=t.charCodeAt(D+c),a=c++,o=c,l=0;l<r;l++)s=i===tB[l]?a:a+1,a=ty[l],o=ty[l]=a>o?s>o?o+1:s:s>a?a+1:s;return o}(e,t));i&&D.push(`Did you mean ${tm.default.blue(u.key(i))}?`),r.warn(D.join(" "))},tv=["default","expected","validate","deprecated","forward","redirect","overlap","preprocess","postprocess"],tA=class{static create(e){return function(e,t){let u=new e(t),r=Object.create(u);for(let e of tv)e in t&&(r[e]=function(e,t,u){return"function"==typeof e?(...r)=>e(...r.slice(0,u-1),t,...r.slice(u-1)):()=>e}(t[e],u,tA.prototype[e].length));return r}(this,e)}constructor(e){this.name=e.name}default(e){}expected(e){return"nothing"}validate(e,t){return!1}deprecated(e,t){return!1}forward(e,t){}redirect(e,t){}overlap(e,t,u){return e}preprocess(e,t){return e}postprocess(e,t){return th}},tw=class extends tA{constructor(e){super(e),this._sourceName=e.sourceName}expected(e){return e.schemas[this._sourceName].expected(e)}validate(e,t){return t.schemas[this._sourceName].validate(e,t)}redirect(e,t){return this._sourceName}},tk=class extends tA{expected(){return"anything"}validate(){return!0}},tS=class extends tA{constructor({valueSchema:e,name:t=e.name,...u}){super({...u,name:t}),this._valueSchema=e}expected(e){let{text:t,list:u}=e.normalizeExpectedResult(this._valueSchema.expected(e));return{text:t&&`an array of ${t}`,list:u&&{title:"an array of the following values",values:[{list:u}]}}}validate(e,t){if(!Array.isArray(e))return!1;let u=[];for(let r of e){let e=t.normalizeValidateResult(this._valueSchema.validate(r,t),r);!0!==e&&u.push(e.value)}return 0===u.length||{value:u}}deprecated(e,t){let u=[];for(let r of e){let e=t.normalizeDeprecatedResult(this._valueSchema.deprecated(r,t),r);!1!==e&&u.push(...e.map(({value:e})=>({value:[e]})))}return u}forward(e,t){let u=[];for(let r of e){let e=t.normalizeForwardResult(this._valueSchema.forward(r,t),r);u.push(...e.map(tx))}return u}redirect(e,t){let u=[],r=[];for(let n of e){let e=t.normalizeRedirectResult(this._valueSchema.redirect(n,t),n);"remain"in e&&u.push(e.remain),r.push(...e.redirect.map(tx))}return 0===u.length?{redirect:r}:{redirect:r,remain:u}}overlap(e,t){return e.concat(t)}};function tx({from:e,to:t}){return{from:[e],to:t}}var t_=class extends tA{expected(){return"true or false"}validate(e){return"boolean"==typeof e}};function tO(e,t){if(e===t)return 0;let u=typeof e,r=typeof t,n=["undefined","object","boolean","number","string"];return u!==r?n.indexOf(u)-n.indexOf(r):"string"!==u?Number(e)-Number(t):e.localeCompare(t)}function tN(e){return void 0===e?{}:e}function tj(e){if("string"==typeof e)return{text:e};let{text:t,list:u}=e;return function(e,t){if(!e)throw Error(t)}((t||u)!==void 0,"Unexpected `expected` result, there should be at least one field."),u?{text:t,list:{title:u.title,values:u.values.map(tj)}}:{text:t}}function tP(e,t){return!0===e||(!1===e?{value:t}:e)}function tT(e,t,u=!1){return!1!==e&&(!0===e?!!u||[{value:t}]:"value"in e?[e]:0!==e.length&&e)}function tI(e,t){return"string"==typeof e||"key"in e?{from:t,to:e}:"from"in e?{from:e.from,to:e.to}:{from:t,to:e.to}}function t$(e,t){return void 0===e?[]:Array.isArray(e)?e.map(e=>tI(e,t)):[tI(e,t)]}function tL(e,t){let u=t$("object"==typeof e&&"redirect"in e?e.redirect:e,t);return 0===u.length?{remain:t,redirect:u}:"object"==typeof e&&"remain"in e?{remain:e.remain,redirect:u}:{redirect:u}}var tM=class extends tA{constructor(e){super(e),this._choices=function(e,t){let u=new Map;for(let r of e){let e=r[t];if(u.has(e))throw Error(`Duplicate ${t} ${JSON.stringify(e)}`);u.set(e,r)}return u}(e.choices.map(e=>e&&"object"==typeof e?e:{value:e}),"value")}expected({descriptor:e}){let t=Array.from(this._choices.keys()).map(e=>this._choices.get(e)).filter(({hidden:e})=>!e).map(e=>e.value).sort(tO).map(e.value),u=t.slice(0,-2),r=t.slice(-2);return{text:u.concat(r.join(" or ")).join(", "),list:{title:"one of the following values",values:t}}}validate(e){return this._choices.has(e)}deprecated(e){let t=this._choices.get(e);return!!t&&!!t.deprecated&&{value:e}}forward(e){let t=this._choices.get(e);return t?t.forward:void 0}redirect(e){let t=this._choices.get(e);return t?t.redirect:void 0}},tW=class extends tA{expected(){return"a number"}validate(e,t){return"number"==typeof e}},tR=class extends tW{expected(){return"an integer"}validate(e,t){return!0===t.normalizeValidateResult(super.validate(e,t),e)&&e===Math.floor(e)}},tV=class extends tA{expected(){return"a string"}validate(e){return"string"==typeof e}},tq=(e,t,u)=>{let{text:r,list:n}=u.normalizeExpectedResult(u.schemas[e].expected(u)),D=[];return r&&D.push(tE(e,t,r,u.descriptor)),n&&D.push([tE(e,t,n.title,u.descriptor)].concat(n.values.map(e=>(function e({text:t,list:u},r){let n=[];return t&&n.push(`- ${tF.default.blue(t)}`),u&&n.push([`- ${tF.default.blue(u.title)}:`].concat(u.values.map(t=>e(t,r-tC.length).replace(/^|\n/g,`$&${tC}`))).join(`
// `)),tg(n,r)})(e,u.loggerPrintWidth))).join(`
// `)),tg(D,u.loggerPrintWidth)},tz=(e,t,{descriptor:u})=>{let r=[`${td.default.yellow("string"==typeof e?u.key(e):u.pair(e))} is deprecated`];return t&&r.push(`we now treat it as ${td.default.blue("string"==typeof t?u.key(t):u.pair(t))}`),r.join("; ")+"."},tJ=class{constructor(e,t){let{logger:u=console,loggerPrintWidth:r=80,descriptor:n=tf,unknown:D=tb,invalid:i=tq,deprecated:o=tz,missing:a=()=>!1,required:s=()=>!1,preprocess:l=e=>e,postprocess:c=()=>th}=t||{};this._utils={descriptor:n,logger:u||{warn:()=>{}},loggerPrintWidth:r,schemas:function(e,t){let u=Object.create(null);for(let r of e){let e=r[t];if(u[e])throw Error(`Duplicate ${t} ${JSON.stringify(e)}`);u[e]=r}return u}(e,"name"),normalizeDefaultResult:tN,normalizeExpectedResult:tj,normalizeDeprecatedResult:tT,normalizeForwardResult:t$,normalizeRedirectResult:tL,normalizeValidateResult:tP},this._unknownHandler=D,this._invalidHandler=(...e)=>{let t=i(...e);return"string"==typeof t?Error(t):t},this._deprecatedHandler=o,this._identifyMissing=(e,t)=>!(e in t)||a(e,t),this._identifyRequired=s,this._preprocess=l,this._postprocess=c,this.cleanHistory()}cleanHistory(){let e;this._hasDeprecationWarned=(e=Object.create(null),t=>{let u=JSON.stringify(t);return!!e[u]||(e[u]=!0,!1)})}normalize(e){let t={},u=[this._preprocess(e,this._utils)],r=()=>{for(;0!==u.length;){let e=u.shift(),r=this._applyNormalization(e,t);u.push(...r)}};for(let e of(r(),Object.keys(this._utils.schemas))){let r=this._utils.schemas[e];if(!(e in t)){let t=tN(r.default(this._utils));"value"in t&&u.push({[e]:t.value})}}for(let e of(r(),Object.keys(this._utils.schemas))){if(!(e in t))continue;let u=this._utils.schemas[e],r=t[e],n=u.postprocess(r,this._utils);n!==th&&(this._applyValidation(n,e,u),t[e]=n)}return this._applyPostprocess(t),this._applyRequiredCheck(t),t}_applyNormalization(e,t){let u=[],{knownKeys:r,unknownKeys:n}=this._partitionOptionKeys(e);for(let n of r){let r=this._utils.schemas[n],D=r.preprocess(e[n],this._utils);this._applyValidation(D,n,r);let i=({from:e,to:t})=>{u.push("string"==typeof t?{[t]:e}:{[t.key]:t.value})},o=({value:e,redirectTo:t})=>{let u=tT(r.deprecated(e,this._utils),D,!0);if(!1!==u){if(!0===u)this._hasDeprecationWarned(n)||this._utils.logger.warn(this._deprecatedHandler(n,t,this._utils));else for(let{value:e}of u){let u={key:n,value:e};if(!this._hasDeprecationWarned(u)){let r="string"==typeof t?{key:t,value:e}:t;this._utils.logger.warn(this._deprecatedHandler(u,r,this._utils))}}}};t$(r.forward(D,this._utils),D).forEach(i);let a=tL(r.redirect(D,this._utils),D);if(a.redirect.forEach(i),"remain"in a){let e=a.remain;t[n]=n in t?r.overlap(t[n],e,this._utils):e,o({value:e})}for(let{from:e,to:t}of a.redirect)o({value:e,redirectTo:t})}for(let r of n){let n=e[r];this._applyUnknownHandler(r,n,t,(e,t)=>{u.push({[e]:t})})}return u}_applyRequiredCheck(e){for(let t of Object.keys(this._utils.schemas))if(this._identifyMissing(t,e)&&this._identifyRequired(t))throw this._invalidHandler(t,tp,this._utils)}_partitionOptionKeys(e){let[t,u]=function(e,t){let u=[],r=[];for(let n of e)t(n)?u.push(n):r.push(n);return[u,r]}(Object.keys(e).filter(t=>!this._identifyMissing(t,e)),e=>e in this._utils.schemas);return{knownKeys:t,unknownKeys:u}}_applyValidation(e,t,u){let r=tP(u.validate(e,this._utils),e);if(!0!==r)throw this._invalidHandler(t,r.value,this._utils)}_applyUnknownHandler(e,t,u,r){let n=this._unknownHandler(e,t,this._utils);if(n)for(let e of Object.keys(n)){if(this._identifyMissing(e,n))continue;let t=n[e];e in this._utils.schemas?r(e,t):u[e]=t}}_applyPostprocess(e){let t=this._postprocess(e,this._utils);if(t!==th){if(t.delete)for(let u of t.delete)delete e[u];if(t.override){let{knownKeys:u,unknownKeys:r}=this._partitionOptionKeys(t.override);for(let r of u){let u=t.override[r];this._applyValidation(u,r,this._utils.schemas[r]),e[r]=u}for(let u of r){let r=t.override[u];this._applyUnknownHandler(u,r,e,(t,u)=>{let r=this._utils.schemas[t];this._applyValidation(u,t,r),e[t]=u})}}}}},tH=function(e,t,{logger:u=!1,isCLI:r=!1,passThrough:n=!1,FlagSchema:i,descriptor:o}={}){if(r){if(!i)throw Error("'FlagSchema' option is required.");if(!o)throw Error("'descriptor' option is required.")}else o=tf;let a=n?Array.isArray(n)?(e,t)=>n.includes(e)?{[e]:t}:void 0:(e,t)=>({[e]:t}):(e,t,u)=>{let{_:r,...n}=u.schemas;return tb(e,t,{...u,schemas:n})},s=new tJ(function(e,{isCLI:t,FlagSchema:u}){let r=[];for(let n of(t&&r.push(tk.create({name:"_"})),e))r.push(function(e,{isCLI:t,optionInfos:u,FlagSchema:r}){let{name:n}=e,D={name:n},i,o={};switch(e.type){case"int":i=tR,t&&(D.preprocess=Number);break;case"string":case"path":i=tV;break;case"choice":i=tM,D.choices=e.choices.map(t=>null!=t&&t.redirect?{...t,redirect:{to:{key:e.name,value:t.redirect}}}:t);break;case"boolean":i=t_;break;case"flag":i=r,D.flags=u.flatMap(e=>[e.alias,e.description&&e.name,e.oppositeDescription&&`no-${e.name}`].filter(Boolean));break;default:throw Error(`Unexpected type ${e.type}`)}if(e.exception?D.validate=(t,u,r)=>e.exception(t)||u.validate(t,r):D.validate=(e,t,u)=>void 0===e||t.validate(e,u),e.redirect&&(o.redirect=t=>t?{to:{key:e.redirect.option,value:e.redirect.value}}:void 0),e.deprecated&&(o.deprecated=!0),t&&!e.array){let e=D.preprocess||(e=>e);D.preprocess=(t,u,r)=>u.preprocess(e(Array.isArray(t)?ep(!1,t,-1):t),r)}return e.array?tS.create({...t?{preprocess:e=>Array.isArray(e)?e:[e]}:{},...o,valueSchema:i.create(D)}):i.create({...D,...o})}(n,{isCLI:t,optionInfos:e,FlagSchema:u})),n.alias&&t&&r.push(tw.create({name:n.alias,sourceName:n.name}));return r}(t,{isCLI:r,FlagSchema:i}),{logger:u,unknown:a,descriptor:o}),l=!1!==u;l&&D&&(s._hasDeprecationWarned=D);let c=s.normalize(e);return l&&(D=s._hasDeprecationWarned),c},tU=(e,t,u)=>{if(!(e&&null==t)){if(t.findLast)return t.findLast(u);for(let e=t.length-1;e>=0;e--){let r=t[e];if(u(r,e,t))return r}}};function tK(e,t){if(!t)throw Error("parserName is required.");let u=tU(!1,e,e=>e.parsers&&Object.prototype.hasOwnProperty.call(e.parsers,t));if(u)return u;let r=`Couldn't resolve parser "${t}".`;throw new tD(r+=" Plugins must be explicitly added to the standalone bundle.")}function tG(e,t){let u=e.parsers[t];return"function"==typeof u?u():u}var tY={astFormat:"estree",printer:{},originalText:void 0,locStart:null,locEnd:null};async function tX(e,t={}){var u,r;let n;let D={...e};if(!D.parser){if(D.filepath){if(D.parser=tc(D,{physicalFile:D.filepath}),!D.parser)throw new ti(`No parser could be inferred for file "${D.filepath}".`)}else throw new ti("No parser and no file path given, couldn't infer a parser.")}let i=ta({plugins:e.plugins,showDeprecated:!0}).options,o={...tY,...Object.fromEntries(i.filter(e=>void 0!==e.default).map(e=>[e.name,e.default]))},a=tK(D.plugins,D.parser),s=await tG(a,D.parser);D.astFormat=s.astFormat,D.locEnd=s.locEnd,D.locStart=s.locStart;let l=null!=(u=a.printers)&&u[s.astFormat]?a:function(e,t){if(!t)throw Error("astFormat is required.");let u=tU(!1,e,e=>e.printers&&Object.prototype.hasOwnProperty.call(e.printers,t));if(u)return u;let r=`Couldn't find plugin for AST format "${t}".`;throw new tD(r+=" Plugins must be explicitly added to the standalone bundle.")}(D.plugins,s.astFormat),c=await (r=s.astFormat,"function"==typeof(n=l.printers[r])?n():n);D.printer=c;let f=l.defaultOptions?Object.fromEntries(Object.entries(l.defaultOptions).filter(([,e])=>void 0!==e)):{};for(let[e,t]of Object.entries({...o,...f}))(null===D[e]||void 0===D[e])&&(D[e]=t);return"json"===D.parser&&(D.trailingComma="none"),tH(D,i,{passThrough:Object.keys(tY),...t})}var tZ=p(k(),1);async function tQ(e,t){let u,r=await function({plugins:e,parser:t}){return tG(tK(e,t),t)}(t),n=r.preprocess?r.preprocess(e,t):e;t.originalText=n;try{u=await r.parse(n,t,t)}catch(t){!function(e,t){let{loc:u}=e;if(u){let r=(0,tZ.codeFrameColumns)(t,u,{highlightCode:!0});throw e.message+=`
// `+r,e.codeFrame=r,e}throw e}(t,e)}return{text:n,ast:u}}async function t0(e,t,u,r,n){let{embeddedLanguageFormatting:D,printer:{embed:i,hasPrettierIgnore:o=()=>!1,getVisitorKeys:a}}=u;if(!i||"auto"!==D)return;if(i.length>2)throw Error("printer.embed has too many parameters. The API changed in Prettier v3. Please update your plugin. See https://prettier.io/docs/en/plugins.html#optional-embed");let s=e1(i.getVisitorKeys??a),l=[];!function t(){let{node:r}=e;if(null===r||"object"!=typeof r||o(e))return;for(let u of s(r))Array.isArray(r[u])?e.each(t,u):e.call(t,u);let D=i(e,u);if(D){if("function"==typeof D){l.push({print:D,node:r,pathStack:[...e.stack]});return}n.set(r,D)}}();let c=e.stack;for(let{print:r,node:D,pathStack:i}of l)try{e.stack=i;let o=await r(f,t,e,u);o&&n.set(D,o)}catch(e){if(globalThis.PRETTIER_DEBUG)throw e}function f(e,t){return t2(e,t,u,r)}e.stack=c}async function t2(e,t,u,r){let n=await tX({...u,...t,parentParser:u.parser,originalText:e},{passThrough:!0}),{ast:D}=await tQ(e,n);return eS(await r(D,n))}var t1=function(e,t){let{originalText:u,[Symbol.for("comments")]:r,locStart:n,locEnd:D,[Symbol.for("printedComments")]:i}=t,{node:o}=e,a=n(o),s=D(o);for(let e of r)n(e)>=a&&D(e)<=s&&i.add(e);return u.slice(a,s)};async function t8(e,t){({ast:e}=await t6(e,t));let u=new Map,r=new ez(e),n=()=>{},D=new Map;await t0(r,o,t,t8,D);let i=await t3(r,t,o,void 0,D);return function(e){let{[Symbol.for("comments")]:t,[Symbol.for("printedComments")]:u}=e;for(let e of t){if(!e.printed&&!u.has(e))throw Error('Comment "'+e.value.trim()+'" was not printed. Please report this error!');delete e.printed}}(t),i;function o(e,t){return void 0===e||e===r?a(t):Array.isArray(e)?r.call(()=>a(t),...e):r.call(()=>a(t),e)}function a(e){n(r);let i=r.node;if(null==i)return"";let a=i&&"object"==typeof i&&void 0===e;if(a&&u.has(i))return u.get(i);let s=t3(r,t,o,e,D);return a&&u.set(i,s),s}}function t3(e,t,u,r,n){var D;let{node:i}=e,{printer:o}=t,a;return a=null!=(D=o.hasPrettierIgnore)&&D.call(o,e)?t1(e,t):n.has(i)?n.get(i):o.print(e,t,u,r),i===t.cursorNode&&(a=e_(a,e=>[ef,e,ef])),!o.printComment||o.willPrintOwnComments&&o.willPrintOwnComments(e,t)||(a=function(e,t,u){let{leading:r,trailing:n}=function(e,t){let u=e.node;if(!u)return{};let r=t[Symbol.for("printedComments")];if(0===(u.comments||[]).filter(e=>!r.has(e)).length)return{leading:"",trailing:""};let n=[],D=[],i;return e.each(()=>{let u=e.node;if(null!=r&&r.has(u))return;let{leading:o,trailing:a}=u;o?n.push(function(e,t){var u;let r=e.node,n=[tn(e,t)],{printer:D,originalText:i,locStart:o,locEnd:a}=t;if(null==(u=D.isBlockComment)?void 0:u.call(D,r)){let e=eQ(i,a(r))?eQ(i,o(r),{backwards:!0})?el:es:" ";n.push(e)}else n.push(el);let s=eZ(i,eG(i,a(r)));return!1!==s&&eQ(i,s)&&n.push(el),n}(e,t)):a&&(i=function(e,t,u){var r;let n=e.node,D=tn(e,t),{printer:i,originalText:o,locStart:a}=t,s=null==(r=i.isBlockComment)?void 0:r.call(i,n);return null!=u&&u.hasLineSuffix&&!(null!=u&&u.isBlock)||eQ(o,a(n),{backwards:!0})?{doc:eD([el,tr(o,a(n))?el:"",D]),isBlock:s,hasLineSuffix:!0}:!s||null!=u&&u.hasLineSuffix?{doc:[eD([" ",D]),ei],isBlock:s,hasLineSuffix:!0}:{doc:[" ",D],isBlock:s,hasLineSuffix:!1}}(e,t,i),D.push(i.doc))},"comments"),{leading:n,trailing:D}}(e,u);return r||n?e_(t,e=>[r,e,n]):t}(e,a,t)),a}async function t6(e,t){let u=e.comments??[];t[Symbol.for("comments")]=u,t[Symbol.for("tokens")]=e.tokens??[],t[Symbol.for("printedComments")]=new Set,function(e,t){let{comments:u}=e;if(delete e.comments,!(Array.isArray(u)&&u.length>0)||!t.printer.canAttachComment)return;let r=[],{locStart:n,locEnd:D,printer:{experimentalFeatures:{avoidAstMutation:i=!1}={},handleComments:o={}},originalText:a}=t,{ownLine:s=e5,endOfLine:l=e5,remaining:c=e5}=o,f=u.map((r,n)=>({...function e(t,u,r,n){let{locStart:D,locEnd:i}=r,o=D(u),a=i(u),s=e4(t,r),l,c,f=0,d=s.length;for(;f<d;){let t=f+d>>1,n=s[t],F=D(n),p=i(n);if(F<=o&&a<=p)return e(n,u,r,n);if(p<=o){l=n,f=t+1;continue}if(a<=F){c=n,d=t;continue}throw Error("Comment location overlaps with node location")}if((null==n?void 0:n.type)==="TemplateLiteral"){let{quasis:e}=n,t=tu(e,u,r);l&&tu(e,l,r)!==t&&(l=null),c&&tu(e,c,r)!==t&&(c=null)}return{enclosingNode:n,precedingNode:l,followingNode:c}}(e,r,t),comment:r,text:a,options:t,ast:e,isLastComment:u.length-1===n}));for(let[e,t]of f.entries()){let u,{comment:o,precedingNode:a,enclosingNode:d,followingNode:F,text:p,options:h,ast:C,isLastComment:E}=t;if("json"===h.parser||"json5"===h.parser||"jsonc"===h.parser||"__js_expression"===h.parser||"__ts_expression"===h.parser||"__vue_expression"===h.parser||"__vue_ts_expression"===h.parser){if(n(o)-n(C)<=0){e3(C,o);continue}if(D(o)-D(C)>=0){e7(C,o);continue}}if(i?u=[t]:(o.enclosingNode=d,o.precedingNode=a,o.followingNode=F,u=[o,p,h,C,E]),function(e,t,u,r){let{comment:n,precedingNode:D}=u[r],{locStart:i,locEnd:o}=t,a=i(n);if(D)for(let t=r-1;t>=0;t--){let{comment:r,precedingNode:n}=u[t];if(n!==D||!te(e.slice(o(r),a)))break;a=i(r)}return eQ(e,a,{backwards:!0})}(p,h,f,e))o.placement="ownLine",s(...u)||(F?e3(F,o):a?e7(a,o):d?e6(d,o):e6(C,o));else if(function(e,t,u,r){let{comment:n,followingNode:D}=u[r],{locStart:i,locEnd:o}=t,a=o(n);if(D)for(let t=r+1;t<u.length;t++){let{comment:r,followingNode:n}=u[t];if(n!==D||!te(e.slice(a,i(r))))break;a=o(r)}return eQ(e,a)}(p,h,f,e))o.placement="endOfLine",l(...u)||(a?e7(a,o):F?e3(F,o):d?e6(d,o):e6(C,o));else if(o.placement="remaining",!c(...u)){if(a&&F){let e=r.length;e>0&&r[e-1].followingNode!==F&&tt(r,h),r.push(t)}else a?e7(a,o):F?e3(F,o):d?e6(d,o):e6(C,o)}}if(tt(r,t),!i)for(let e of u)delete e.precedingNode,delete e.enclosingNode,delete e.followingNode}(e,t);let{printer:{preprocess:r}}=t;return{ast:e=r?await r(e,t):e,comments:u}}var t7=function(e,t){let{cursorOffset:u,locStart:r,locEnd:n}=t,D=e1(t.printer.getVisitorKeys),i=e;for(let t of function*(e,t){let u=[e];for(let e=0;e<u.length;e++)for(let r of eH(u[e],t))yield r,u.push(r)}(e,{getVisitorKeys:D,filter:e=>r(e)<=u&&n(e)>=u}))i=t;return i},t9=function(e,t){let{printer:{massageAstNode:u,getVisitorKeys:r}}=t;if(!u)return e;let n=e1(r),D=u.ignoredProperties??new Set;return function e(t,r){if(!(null!==t&&"object"==typeof t))return t;if(Array.isArray(t))return t.map(t=>e(t,r)).filter(Boolean);let i={},o=new Set(n(t));for(let u in t)!Object.prototype.hasOwnProperty.call(t,u)||D.has(u)||(o.has(u)?i[u]=e(t[u],t):i[u]=t[u]);let a=u(t,i,r);if(null!==a)return a??i}(e)},t4=({parser:e})=>"json"===e||"json5"===e||"jsonc"===e||"json-stringify"===e;function t5(e){let t=e.length-1;for(;;){let u=e[t];if((null==u?void 0:u.type)==="Program"||(null==u?void 0:u.type)==="File")t--;else break}return e.slice(0,t+1)}function ue(e,t,u,r,n=[],D){let{locStart:i,locEnd:o}=u,a=i(e),s=o(e);if(!(t>s||t<a||"rangeEnd"===D&&t===a||"rangeStart"===D&&t===s)){for(let i of e4(e,u)){let o=ue(i,t,u,r,[e,...n],D);if(o)return o}if(!r||r(e,n[0]))return{node:e,parentNodes:n}}}var ut=new Set(["JsonRoot","ObjectExpression","ArrayExpression","StringLiteral","NumericLiteral","BooleanLiteral","NullLiteral","UnaryExpression","TemplateLiteral"]),uu=new Set(["OperationDefinition","FragmentDefinition","VariableDefinition","TypeExtensionDefinition","ObjectTypeDefinition","FieldDefinition","DirectiveDefinition","EnumTypeDefinition","EnumValueDefinition","InputValueDefinition","InputObjectTypeDefinition","SchemaDefinition","OperationTypeDefinition","InterfaceTypeDefinition","UnionTypeDefinition","ScalarTypeDefinition"]);function ur(e,t,u){if(!t)return!1;switch(e.parser){case"flow":case"babel":case"babel-flow":case"babel-ts":case"typescript":case"acorn":case"espree":case"meriyah":case"__babel_estree":var r;return r=t.type,"DeclareExportDeclaration"!==(null==u?void 0:u.type)&&"TypeParameterDeclaration"!==r&&("Directive"===r||"TypeAlias"===r||"TSExportAssignment"===r||r.startsWith("Declare")||r.startsWith("TSDeclare")||r.endsWith("Statement")||r.endsWith("Declaration"));case"json":case"json5":case"jsonc":case"json-stringify":return ut.has(t.type);case"graphql":return uu.has(t.kind);case"vue":return"root"!==t.tag}return!1}var un=Symbol("cursor");async function uD(e,t,u=0){if(!e||0===e.trim().length)return{formatted:"",cursorOffset:-1,comments:[]};let{ast:r,text:n}=await tQ(e,t);t.cursorOffset>=0&&(t.cursorNode=t7(r,t));let D=await t8(r,t,u);u>0&&(D=eF([el,D],u,t.tabWidth));let i=eL(D,t);if(u>0){let e=i.formatted.trim();void 0!==i.cursorNodeStart&&(i.cursorNodeStart-=i.formatted.indexOf(e)),i.formatted=e+O(t.endOfLine)}let o=t[Symbol.for("comments")];if(t.cursorOffset>=0){let e,u,r,D,a;if(t.cursorNode&&i.cursorNodeText?(e=t.locStart(t.cursorNode),u=n.slice(e,t.locEnd(t.cursorNode)),r=t.cursorOffset-e,D=i.cursorNodeStart,a=i.cursorNodeText):(e=0,u=n,r=t.cursorOffset,D=0,a=i.formatted),u===a)return{formatted:i.formatted,cursorOffset:D+r,comments:o};let s=u.split("");s.splice(r,0,un);let l=a.split(""),c=(0,_.diffArrays)(s,l),f=D;for(let e of c)if(e.removed){if(e.value.includes(un))break}else f+=e.count;return{formatted:i.formatted,cursorOffset:f,comments:o}}return{formatted:i.formatted,cursorOffset:-1,comments:o}}async function ui(e,t){let{ast:u,text:r}=await tQ(e,t),{rangeStart:n,rangeEnd:D}=function(e,t,u){let r,n,{rangeStart:D,rangeEnd:i,locStart:o,locEnd:a}=t;eJ.ok(i>D);let s=e.slice(D,i).search(/\S/),l=-1===s;if(!l)for(D+=s;i>D&&!/\S/.test(e[i-1]);--i);let c=ue(u,D,t,(e,u)=>ur(t,e,u),[],"rangeStart"),f=l?c:ue(u,i,t,e=>ur(t,e),[],"rangeEnd");if(!c||!f)return{rangeStart:0,rangeEnd:0};if(t4(t)){let e,t;let u=(e=[c.node,...c.parentNodes],t=new Set([f.node,...f.parentNodes]),e.find(e=>ut.has(e.type)&&t.has(e)));r=u,n=u}else({startNode:r,endNode:n}=function(e,t,{locStart:u,locEnd:r}){let n=e.node,D=t.node;if(n===D)return{startNode:n,endNode:D};let i=u(e.node);for(let e of t5(t.parentNodes))if(u(e)>=i)D=e;else break;let o=r(t.node);for(let t of t5(e.parentNodes)){if(r(t)<=o)n=t;else break;if(n===D)break}return{startNode:n,endNode:D}}(c,f,t));return{rangeStart:Math.min(o(r),o(n)),rangeEnd:Math.max(a(r),a(n))}}(r,t,u),i=r.slice(n,D),o=Math.min(n,r.lastIndexOf(`
// `,n)+1),a=eq(r.slice(o,n).match(/^\s*/)[0],t.tabWidth),s=await uD(i,{...t,rangeStart:0,rangeEnd:Number.POSITIVE_INFINITY,cursorOffset:t.cursorOffset>n&&t.cursorOffset<=D?t.cursorOffset-n:-1,endOfLine:"lf"},a),l=s.formatted.trimEnd(),{cursorOffset:c}=t;c>D?c+=l.length-i.length:s.cursorOffset>=0&&(c=s.cursorOffset+n);let f=r.slice(0,n)+l+r.slice(D);if("lf"!==t.endOfLine){let e=O(t.endOfLine);c>=0&&e===`\r
// `&&(c+=N(f.slice(0,c),`
// `)),f=x(!1,f,`
// `,e)}return{formatted:f,cursorOffset:c,comments:s.comments}}function uo(e,t,u){return"number"!=typeof t||Number.isNaN(t)||t<0||t>e.length?u:t}function ua(e,t){let{cursorOffset:u,rangeStart:r,rangeEnd:n}=t;return u=uo(e,u,-1),r=uo(e,r,0),n=uo(e,n,e.length),{...t,cursorOffset:u,rangeStart:r,rangeEnd:n}}function us(e,t){var u;let r,{cursorOffset:n,rangeStart:D,rangeEnd:i,endOfLine:o}=ua(e,t),a="\uFEFF"===e.charAt(0);if(a&&(e=e.slice(1),n--,D--,i--),"auto"===o&&(o=(r=(u=e).indexOf("\r"))>=0?u.charAt(r+1)===`
// `?"crlf":"cr":"lf"),e.includes("\r")){let t=t=>N(e.slice(0,Math.max(t,0)),`\r
// `);n-=t(n),D-=t(D),i-=t(i),e=x(!1,e,/\r\n?/g,`
// `)}return{hasBOM:a,text:e,options:ua(e,{...t,cursorOffset:n,rangeStart:D,rangeEnd:i,endOfLine:o})}}async function ul(e,t){let u=await function({plugins:e,parser:t}){return tG(tK(e,t),t)}(t);return!u.hasPragma||u.hasPragma(e)}async function uc(e,t){let u,{hasBOM:r,text:n,options:D}=us(e,await tX(t));return D.rangeStart>=D.rangeEnd&&""!==n||D.requirePragma&&!await ul(n,D)?{formatted:e,cursorOffset:t.cursorOffset,comments:[]}:(D.rangeStart>0||D.rangeEnd<n.length?u=await ui(n,D):(!D.requirePragma&&D.insertPragma&&D.printer.insertPragma&&!await ul(n,D)&&(n=D.printer.insertPragma(n)),u=await uD(n,D)),r&&(u.formatted="\uFEFF"+u.formatted,u.cursorOffset>=0&&u.cursorOffset++),u)}async function uf(e,t,u){let{text:r,options:n}=us(e,await tX(t)),D=await tQ(r,n);return u&&(u.preprocessForPrint&&(D.ast=await t6(D.ast,n)),u.massage&&(D.ast=t9(D.ast,n))),D}async function ud(e,t){return t=await tX(t),eL(await t8(e,t),t)}async function uF(e,t){let u=function(e){let t=Object.create(null),u=new Set;return function e(t,u,n){var D,i;if("string"==typeof t)return JSON.stringify(t);if(Array.isArray(t)){let u=t.map(e).filter(Boolean);return 1===u.length?u[0]:`[${u.join(", ")}]`}if(t.type===J){let e=(null==(D=null==n?void 0:n[u+1])?void 0:D.type)===U;return t.literal?e?"literalline":"literallineWithoutBreakParent":t.hard?e?"hardline":"hardlineWithoutBreakParent":t.soft?"softline":"line"}if(t.type===U)return(null==(i=null==n?void 0:n[u-1])?void 0:i.type)===J&&n[u-1].hard?void 0:"breakParent";if(t.type===L)return"trim";if(t.type===I)return"indent("+e(t.contents)+")";if(t.type===$)return t.n===Number.NEGATIVE_INFINITY?"dedentToRoot("+e(t.contents)+")":t.n<0?"dedent("+e(t.contents)+")":"root"===t.n.type?"markAsRoot("+e(t.contents)+")":"align("+JSON.stringify(t.n)+", "+e(t.contents)+")";if(t.type===R)return"ifBreak("+e(t.breakContents)+(t.flatContents?", "+e(t.flatContents):"")+(t.groupId?(t.flatContents?"":', ""')+`, { groupId: ${r(t.groupId)} }`:"")+")";if(t.type===V){let u=[];t.negate&&u.push("negate: true"),t.groupId&&u.push(`groupId: ${r(t.groupId)}`);let n=u.length>0?`, { ${u.join(", ")} }`:"";return`indentIfBreak(${e(t.contents)}${n})`}if(t.type===M){let u=[];t.break&&"propagated"!==t.break&&u.push("shouldBreak: true"),t.id&&u.push(`id: ${r(t.id)}`);let n=u.length>0?`, { ${u.join(", ")} }`:"";return t.expandedStates?`conditionalGroup([${t.expandedStates.map(t=>e(t)).join(",")}]${n})`:`group(${e(t.contents)}${n})`}if(t.type===W)return`fill([${t.parts.map(t=>e(t)).join(", ")}])`;if(t.type===q)return"lineSuffix("+e(t.contents)+")";if(t.type===z)return"lineSuffixBoundary";if(t.type===H)return`label(${JSON.stringify(t.label)}, ${e(t.contents)})`;throw Error("Unknown doc type "+t.type)}(function e(t){var u;if(!t)return"";if(Array.isArray(t)){let u=[];for(let r of t)if(Array.isArray(r))u.push(...e(r));else{let t=e(r);""!==t&&u.push(t)}return u}return t.type===R?{...t,breakContents:e(t.breakContents),flatContents:e(t.flatContents)}:t.type===M?{...t,contents:e(t.contents),expandedStates:null==(u=t.expandedStates)?void 0:u.map(e)}:t.type===W?{type:"fill",parts:t.parts.map(e)}:t.contents?{...t,contents:e(t.contents)}:t}(e));function r(e){if("symbol"!=typeof e)return JSON.stringify(String(e));if(e in t)return t[e];let r=e.description||"symbol";for(let n=0;;n++){let D=r+(n>0?` #${n}`:"");if(!u.has(D))return u.add(D),t[e]=`Symbol.for(${JSON.stringify(D)})`}}}(e),{formatted:r}=await uc(u,{...t,parser:"__js_expression"});return r}async function up(e,t){t=await tX(t);let{ast:u}=await tQ(e,t);return t8(u,t)}async function uh(e,t){return eL(e,await tX(t))}var uC={};d(uC,{builders:()=>uE,printer:()=>ug,utils:()=>um});var uE={join:ed,line:es,softline:{type:J,soft:!0},hardline:el,literalline:ec,group:er,conditionalGroup:function(e,t){return er(e[0],{...t,expandedStates:e})},fill:en,lineSuffix:eD,lineSuffixBoundary:{type:z},cursor:ef,breakParent:ei,ifBreak:function(e,t="",u={}){return ee(e),""!==t&&ee(t),{type:R,breakContents:e,flatContents:t,groupId:u.groupId}},trim:{type:L},indent:et,indentIfBreak:function(e,t){return ee(e),{type:V,contents:e,groupId:t.groupId,negate:t.negate}},align:eu,addAlignmentToDoc:eF,markAsRoot:function(e){return eu({type:"root"},e)},dedentToRoot:function(e){return eu(Number.NEGATIVE_INFINITY,e)},dedent:function(e){return eu(-1,e)},hardlineWithoutBreakParent:eo,literallineWithoutBreakParent:ea,label:function(e,t){return ee(t),e?{type:H,label:e,contents:t}:t},concat:e=>e},ug={printDocToString:eL},um={willBreak:function(e){return eB(e,eb,!1)},traverseDoc:Q,findInDoc:eB,mapDoc:ey,removeLines:function(e){return ey(e,eA)},stripTrailingHardline:eS,replaceEndOfLine:function(e,t=ec){return ey(e,e=>"string"==typeof e?ed(t,e.split(`
// `)):e)},canBreak:function(e){return eB(e,ex,!1)}},uy="3.2.5",uB={};d(uB,{addDanglingComment:()=>e6,addLeadingComment:()=>e3,addTrailingComment:()=>e7,getAlignmentSize:()=>eq,getIndentSize:()=>uk,getMaxContinuousCount:()=>uS,getNextNonSpaceNonCommentCharacter:()=>ux,getNextNonSpaceNonCommentCharacterIndex:()=>uj,getStringWidth:()=>eg,hasNewline:()=>eQ,hasNewlineInRange:()=>u_,hasSpaces:()=>uO,isNextLineEmpty:()=>uT,isNextLineEmptyAfterIndex:()=>uw,isPreviousLineEmpty:()=>uP,makeString:()=>uN,skip:()=>eU,skipEverythingButNewLine:()=>eX,skipInlineComment:()=>ub,skipNewline:()=>eZ,skipSpaces:()=>eG,skipToLineEnd:()=>eY,skipTrailingComment:()=>uv,skipWhitespace:()=>eK});var ub=function(e,t){if(!1===t)return!1;if("/"===e.charAt(t)&&"*"===e.charAt(t+1)){for(let u=t+2;u<e.length;++u)if("*"===e.charAt(u)&&"/"===e.charAt(u+1))return u+2}return t},uv=function(e,t){return!1!==t&&("/"===e.charAt(t)&&"/"===e.charAt(t+1)?eX(e,t):t)},uA=function(e,t){let u=null,r=t;for(;r!==u;)u=r,r=eG(e,r),r=ub(e,r),r=uv(e,r),r=eZ(e,r);return r},uw=function(e,t){let u=null,r=t;for(;r!==u;)u=r,r=eY(e,r),r=ub(e,r),r=eG(e,r);return r=uv(e,r),!1!==(r=eZ(e,r))&&eQ(e,r)},uk=function(e,t){let u=e.lastIndexOf(`
// `);return -1===u?0:eq(e.slice(u+1).match(/^[\t ]*/)[0],t)},uS=function(e,t){let u=e.match(RegExp(`(${function(e){if("string"!=typeof e)throw TypeError("Expected a string");return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}(t)})+`,"g"));return null===u?0:u.reduce((e,u)=>Math.max(e,u.length/t.length),0)},ux=function(e,t){let u=uA(e,t);return!1===u?"":e.charAt(u)},u_=function(e,t,u){for(let r=t;r<u;++r)if(e.charAt(r)===`
// `)return!0;return!1},uO=function(e,t,u={}){return eG(e,u.backwards?t-1:t,u)!==t},uN=function(e,t,u){let r='"'===t?"'":'"',n=x(!1,e,/\\(.)|(["'])/gs,(e,n,D)=>n===r?n:D===t?"\\"+D:D||(u&&/^[^\n\r"'0-7\\bfnrt-vx\u2028\u2029]$/.test(n)?n:"\\"+n));return t+n+t};function uj(e,t){return 2==arguments.length||"number"==typeof t?uA(e,t):function(e,t,u){return uA(e,u(t))}(...arguments)}function uP(e,t){return 2==arguments.length||"number"==typeof t?tr(e,t):function(e,t,u){return tr(e,u(t))}(...arguments)}function uT(e,t){return 2==arguments.length||"number"==typeof t?uw(e,t):function(e,t,u){return uw(e,u(t))}(...arguments)}function uI(e,t=1){return async(...u)=>{let r=u[t]??{},n=r.plugins??[];return u[t]={...r,plugins:Array.isArray(n)?n:Object.values(n)},e(...u)}}var u$=uI(uc);async function uL(e,t){let{formatted:u}=await u$(e,{...t,cursorOffset:-1});return u}async function uM(e,t){return await uL(e,t)===e}var uW=uI(ta,0),uR={parse:uI(uf),formatAST:uI(ud),formatDoc:uI(uF),printToDoc:uI(up),printDocToString:uI(uh)},uV=S}}]);
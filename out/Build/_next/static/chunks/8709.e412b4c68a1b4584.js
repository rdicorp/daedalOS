"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8709],
    {
        48709: function (e, t, i) {
            let s, r;
            i.d(t, {
                H: function () {
                    return ix;
                },
            });
            var n,
                a = i(2445),
                o = i(48488);
            function l(e, t) {
                if (!Array.isArray(t)) return !1;
                let i = t.length;
                if (i !== e.length) return !1;
                for (let s = 0; s < i; s++) if (t[s] !== e[s]) return !1;
                return !0;
            }
            var u = i(97732),
                h = i(79432);
            function d(e, t, i) {
                let s = e.getProps();
                return (0, h.o)(
                    s,
                    t,
                    void 0 !== i ? i : s.custom,
                    (function (e) {
                        let t = {};
                        return e.values.forEach((e, i) => (t[i] = e.get())), t;
                    })(e),
                    (function (e) {
                        let t = {};
                        return e.values.forEach((e, i) => (t[i] = e.getVelocity())), t;
                    })(e)
                );
            }
            var p = i(22963),
                c = i(94714),
                m = i(68588);
            let f = (e) => 1e3 * e,
                v = (e) => e / 1e3,
                g = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
                y = (e) => ({ type: "spring", stiffness: 550, damping: 0 === e ? 2 * Math.sqrt(550) : 30, restSpeed: 10 }),
                b = { type: "keyframes", duration: 0.8 },
                w = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
                P = (e, { keyframes: t }) => (t.length > 2 ? b : c.G.has(e) ? (e.startsWith("scale") ? y(t[1]) : g) : w);
            function V(e, t) {
                return e[t] || e.default || e;
            }
            var S = i(22081);
            let A = { current: !1 },
                T = (e) => null !== e;
            function x(e, { repeat: t, repeatType: i = "loop" }, s) {
                let r = e.filter(T),
                    n = t && "loop" !== i && t % 2 == 1 ? 0 : r.length - 1;
                return n && void 0 !== s ? s : r[n];
            }
            var M = i(26166);
            function C() {
                s = void 0;
            }
            let F = {
                now: () => (void 0 === s && F.set(M.w0.isProcessing || S.c.useManualTiming ? M.w0.timestamp : performance.now()), s),
                set: (e) => {
                    (s = e), queueMicrotask(C);
                },
            },
                k = (e) => /^0[^.\s]+$/u.test(e);
            var E = i(45487);
            let R = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);
            var I = i(57630);
            let N = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
            var O = i(61649),
                K = i(96190);
            let j = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y", "translateX", "translateY"]),
                $ = (e) => e === O.Rx || e === K.px,
                D = (e, t) => parseFloat(e.split(", ")[t]),
                L = (e, t) => (i, { transform: s }) => {
                    if ("none" === s || !s) return 0;
                    let r = s.match(/^matrix3d\((.+)\)$/u);
                    if (r) return D(r[1], t);
                    {
                        let t = s.match(/^matrix\((.+)\)$/u);
                        return t ? D(t[1], e) : 0;
                    }
                },
                W = new Set(["x", "y", "z"]),
                B = c._.filter((e) => !W.has(e)),
                U = {
                    width: ({ x: e }, { paddingLeft: t = "0", paddingRight: i = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(i),
                    height: ({ y: e }, { paddingTop: t = "0", paddingBottom: i = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(i),
                    top: (e, { top: t }) => parseFloat(t),
                    left: (e, { left: t }) => parseFloat(t),
                    bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
                    right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
                    x: L(4, 13),
                    y: L(5, 14),
                };
            (U.translateX = U.x), (U.translateY = U.y);
            let H = (e) => (t) => t.test(e),
                q = [O.Rx, K.px, K.aQ, K.RW, K.vw, K.vh, { test: (e) => "auto" === e, parse: (e) => e }],
                z = (e) => q.find(H(e)),
                G = new Set(),
                Z = !1,
                _ = !1;
            function Y() {
                if (_) {
                    let e = Array.from(G).filter((e) => e.needsMeasurement),
                        t = new Set(e.map((e) => e.element)),
                        i = new Map();
                    t.forEach((e) => {
                        let t = (function (e) {
                            let t = [];
                            return (
                                B.forEach((i) => {
                                    let s = e.getValue(i);
                                    void 0 !== s && (t.push([i, s.get()]), s.set(i.startsWith("scale") ? 1 : 0));
                                }),
                                t
                            );
                        })(e);
                        t.length && (i.set(e, t), e.render());
                    }),
                        e.forEach((e) => e.measureInitialState()),
                        t.forEach((e) => {
                            e.render();
                            let t = i.get(e);
                            t &&
                                t.forEach(([t, i]) => {
                                    var s;
                                    null === (s = e.getValue(t)) || void 0 === s || s.set(i);
                                });
                        }),
                        e.forEach((e) => e.measureEndState()),
                        e.forEach((e) => {
                            void 0 !== e.suspendedScrollY && window.scrollTo(0, e.suspendedScrollY);
                        });
                }
                (_ = !1), (Z = !1), G.forEach((e) => e.complete()), G.clear();
            }
            function Q() {
                G.forEach((e) => {
                    e.readKeyframes(), e.needsMeasurement && (_ = !0);
                });
            }
            class X {
                constructor(e, t, i, s, r, n = !1) {
                    (this.isComplete = !1),
                        (this.isAsync = !1),
                        (this.needsMeasurement = !1),
                        (this.isScheduled = !1),
                        (this.unresolvedKeyframes = [...e]),
                        (this.onComplete = t),
                        (this.name = i),
                        (this.motionValue = s),
                        (this.element = r),
                        (this.isAsync = n);
                }
                scheduleResolve() {
                    (this.isScheduled = !0), this.isAsync ? (G.add(this), Z || ((Z = !0), M.Wi.read(Q), M.Wi.resolveKeyframes(Y))) : (this.readKeyframes(), this.complete());
                }
                readKeyframes() {
                    let { unresolvedKeyframes: e, name: t, element: i, motionValue: s } = this;
                    for (let r = 0; r < e.length; r++)
                        if (null === e[r]) {
                            if (0 === r) {
                                let r = null == s ? void 0 : s.get(),
                                    n = e[e.length - 1];
                                if (void 0 !== r) e[0] = r;
                                else if (i && t) {
                                    let s = i.readValue(t, n);
                                    null != s && (e[0] = s);
                                }
                                void 0 === e[0] && (e[0] = n), s && void 0 === r && s.set(e[0]);
                            } else e[r] = e[r - 1];
                        }
                }
                setFinalKeyframe() { }
                measureInitialState() { }
                renderEndStyles() { }
                measureEndState() { }
                complete() {
                    (this.isComplete = !0), this.onComplete(this.unresolvedKeyframes, this.finalKeyframe), G.delete(this);
                }
                cancel() {
                    this.isComplete || ((this.isScheduled = !1), G.delete(this));
                }
                resume() {
                    this.isComplete || this.scheduleResolve();
                }
            }
            var J = i(36430),
                ee = i(24169);
            let et = (e, t) => (i) => !!(((0, J.HD)(i) && J.mj.test(i) && i.startsWith(e)) || (t && Object.prototype.hasOwnProperty.call(i, t))),
                ei = (e, t, i) => (s) => {
                    if (!(0, J.HD)(s)) return s;
                    let [r, n, a, o] = s.match(J.KP);
                    return { [e]: parseFloat(r), [t]: parseFloat(n), [i]: parseFloat(a), alpha: void 0 !== o ? parseFloat(o) : 1 };
                },
                es = (e) => (0, ee.u)(0, 255, e),
                er = { ...O.Rx, transform: (e) => Math.round(es(e)) },
                en = {
                    test: et("rgb", "red"),
                    parse: ei("red", "green", "blue"),
                    transform: ({ red: e, green: t, blue: i, alpha: s = 1 }) => "rgba(" + er.transform(e) + ", " + er.transform(t) + ", " + er.transform(i) + ", " + (0, J.Nw)(O.Fq.transform(s)) + ")",
                },
                ea = {
                    test: et("#"),
                    parse: function (e) {
                        let t = "",
                            i = "",
                            s = "",
                            r = "";
                        return (
                            e.length > 5
                                ? ((t = e.substring(1, 3)), (i = e.substring(3, 5)), (s = e.substring(5, 7)), (r = e.substring(7, 9)))
                                : ((t = e.substring(1, 2)), (i = e.substring(2, 3)), (s = e.substring(3, 4)), (r = e.substring(4, 5)), (t += t), (i += i), (s += s), (r += r)),
                            { red: parseInt(t, 16), green: parseInt(i, 16), blue: parseInt(s, 16), alpha: r ? parseInt(r, 16) / 255 : 1 }
                        );
                    },
                    transform: en.transform,
                },
                eo = {
                    test: et("hsl", "hue"),
                    parse: ei("hue", "saturation", "lightness"),
                    transform: ({ hue: e, saturation: t, lightness: i, alpha: s = 1 }) => "hsla(" + Math.round(e) + ", " + K.aQ.transform((0, J.Nw)(t)) + ", " + K.aQ.transform((0, J.Nw)(i)) + ", " + (0, J.Nw)(O.Fq.transform(s)) + ")",
                },
                el = {
                    test: (e) => en.test(e) || ea.test(e) || eo.test(e),
                    parse: (e) => (en.test(e) ? en.parse(e) : eo.test(e) ? eo.parse(e) : ea.parse(e)),
                    transform: (e) => ((0, J.HD)(e) ? e : e.hasOwnProperty("red") ? en.transform(e) : eo.transform(e)),
                },
                eu = "number",
                eh = "color",
                ed = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
            function ep(e) {
                let t = e.toString(),
                    i = [],
                    s = { color: [], number: [], var: [] },
                    r = [],
                    n = 0,
                    a = t
                        .replace(
                            ed,
                            (e) => (el.test(e) ? (s.color.push(n), r.push(eh), i.push(el.parse(e))) : e.startsWith("var(") ? (s.var.push(n), r.push("var"), i.push(e)) : (s.number.push(n), r.push(eu), i.push(parseFloat(e))), ++n, "${}")
                        )
                        .split("${}");
                return { values: i, split: a, indexes: s, types: r };
            }
            function ec(e) {
                return ep(e).values;
            }
            function em(e) {
                let { split: t, types: i } = ep(e),
                    s = t.length;
                return (e) => {
                    let r = "";
                    for (let n = 0; n < s; n++)
                        if (((r += t[n]), void 0 !== e[n])) {
                            let t = i[n];
                            t === eu ? (r += (0, J.Nw)(e[n])) : t === eh ? (r += el.transform(e[n])) : (r += e[n]);
                        }
                    return r;
                };
            }
            let ef = (e) => ("number" == typeof e ? 0 : e),
                ev = {
                    test: function (e) {
                        var t, i;
                        return isNaN(e) && (0, J.HD)(e) && ((null === (t = e.match(J.KP)) || void 0 === t ? void 0 : t.length) || 0) + ((null === (i = e.match(J.dA)) || void 0 === i ? void 0 : i.length) || 0) > 0;
                    },
                    parse: ec,
                    createTransformer: em,
                    getAnimatableNone: function (e) {
                        let t = ec(e);
                        return em(e)(t.map(ef));
                    },
                },
                eg = new Set(["brightness", "contrast", "saturate", "opacity"]);
            function ey(e) {
                let [t, i] = e.slice(0, -1).split("(");
                if ("drop-shadow" === t) return e;
                let [s] = i.match(J.KP) || [];
                if (!s) return e;
                let r = i.replace(s, ""),
                    n = eg.has(t) ? 1 : 0;
                return s !== i && (n *= 100), t + "(" + n + r + ")";
            }
            let eb = /\b([a-z-]*)\(.*?\)/gu,
                ew = {
                    ...ev,
                    getAnimatableNone: (e) => {
                        let t = e.match(eb);
                        return t ? t.map(ey).join(" ") : e;
                    },
                },
                eP = {
                    ...i(36173).j,
                    color: el,
                    backgroundColor: el,
                    outlineColor: el,
                    fill: el,
                    stroke: el,
                    borderColor: el,
                    borderTopColor: el,
                    borderRightColor: el,
                    borderBottomColor: el,
                    borderLeftColor: el,
                    filter: ew,
                    WebkitFilter: ew,
                },
                eV = (e) => eP[e];
            function eS(e, t) {
                let i = eV(e);
                return i !== ew && (i = ev), i.getAnimatableNone ? i.getAnimatableNone(t) : void 0;
            }
            let eA = new Set(["auto", "none", "0"]);
            class eT extends X {
                constructor(e, t, i, s) {
                    super(e, t, i, s, null == s ? void 0 : s.owner, !0);
                }
                readKeyframes() {
                    let { unresolvedKeyframes: e, element: t, name: i } = this;
                    if (!t.current) return;
                    super.readKeyframes();
                    for (let i = 0; i < e.length; i++) {
                        let s = e[i];
                        if ("string" == typeof s && (0, I.t)(s)) {
                            let r = (function e(t, i, s = 1) {
                                (0, E.k)(s <= 4, `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`);
                                let [r, n] = (function (e) {
                                    let t = N.exec(e);
                                    if (!t) return [,];
                                    let [, i, s, r] = t;
                                    return [`--${null != i ? i : s}`, r];
                                })(t);
                                if (!r) return;
                                let a = window.getComputedStyle(i).getPropertyValue(r);
                                if (a) {
                                    let e = a.trim();
                                    return R(e) ? parseFloat(e) : e;
                                }
                                return (0, I.t)(n) ? e(n, i, s + 1) : n;
                            })(s, t.current);
                            void 0 !== r && (e[i] = r), i === e.length - 1 && (this.finalKeyframe = s);
                        }
                    }
                    if ((this.resolveNoneKeyframes(), !j.has(i) || 2 !== e.length)) return;
                    let [s, r] = e,
                        n = z(s),
                        a = z(r);
                    if (n !== a) {
                        if ($(n) && $(a))
                            for (let t = 0; t < e.length; t++) {
                                let i = e[t];
                                "string" == typeof i && (e[t] = parseFloat(i));
                            }
                        else this.needsMeasurement = !0;
                    }
                }
                resolveNoneKeyframes() {
                    let { unresolvedKeyframes: e, name: t } = this,
                        i = [];
                    for (let t = 0; t < e.length; t++) {
                        var s;
                        ("number" == typeof (s = e[t]) ? 0 === s : null === s || "none" === s || "0" === s || k(s)) && i.push(t);
                    }
                    i.length &&
                        (function (e, t, i) {
                            let s,
                                r = 0;
                            for (; r < e.length && !s;) {
                                let t = e[r];
                                "string" == typeof t && !eA.has(t) && ep(t).values.length && (s = e[r]), r++;
                            }
                            if (s && i) for (let r of t) e[r] = eS(i, s);
                        })(e, i, t);
                }
                measureInitialState() {
                    let { element: e, unresolvedKeyframes: t, name: i } = this;
                    if (!e.current) return;
                    "height" === i && (this.suspendedScrollY = window.pageYOffset), (this.measuredOrigin = U[i](e.measureViewportBox(), window.getComputedStyle(e.current))), (t[0] = this.measuredOrigin);
                    let s = t[t.length - 1];
                    void 0 !== s && e.getValue(i, s).jump(s, !1);
                }
                measureEndState() {
                    var e;
                    let { element: t, name: i, unresolvedKeyframes: s } = this;
                    if (!t.current) return;
                    let r = t.getValue(i);
                    r && r.jump(this.measuredOrigin, !1);
                    let n = s.length - 1,
                        a = s[n];
                    (s[n] = U[i](t.measureViewportBox(), window.getComputedStyle(t.current))),
                        null !== a && void 0 === this.finalKeyframe && (this.finalKeyframe = a),
                        (null === (e = this.removedTransforms) || void 0 === e ? void 0 : e.length) &&
                        this.removedTransforms.forEach(([e, i]) => {
                            t.getValue(e).set(i);
                        }),
                        this.resolveNoneKeyframes();
                }
            }
            var ex = i(81662);
            let eM = (e, t) => "zIndex" !== t && !!("number" == typeof e || Array.isArray(e) || ("string" == typeof e && (ev.test(e) || "0" === e) && !e.startsWith("url(")));
            class eC {
                constructor({ autoplay: e = !0, delay: t = 0, type: i = "keyframes", repeat: s = 0, repeatDelay: r = 0, repeatType: n = "loop", ...a }) {
                    (this.isStopped = !1), (this.hasAttemptedResolve = !1), (this.options = { autoplay: e, delay: t, type: i, repeat: s, repeatDelay: r, repeatType: n, ...a }), this.updateFinishedPromise();
                }
                get resolved() {
                    return this._resolved || this.hasAttemptedResolve || (Q(), Y()), this._resolved;
                }
                onKeyframesResolved(e, t) {
                    this.hasAttemptedResolve = !0;
                    let { name: i, type: s, velocity: r, delay: n, onComplete: a, onUpdate: o, isGenerator: l } = this.options;
                    if (
                        !l &&
                        !(function (e, t, i, s) {
                            let r = e[0];
                            if (null === r) return !1;
                            if ("display" === t || "visibility" === t) return !0;
                            let n = e[e.length - 1],
                                a = eM(r, t),
                                o = eM(n, t);
                            return (
                                (0, E.K)(a === o, `You are trying to animate ${t} from "${r}" to "${n}". ${r} is not an animatable value - to enable this animation set ${r} to a value animatable to ${n} via the \`style\` property.`),
                                !!a &&
                                !!o &&
                                ((function (e) {
                                    let t = e[0];
                                    if (1 === e.length) return !0;
                                    for (let i = 0; i < e.length; i++) if (e[i] !== t) return !0;
                                })(e) ||
                                    ("spring" === i && s))
                            );
                        })(e, i, s, r)
                    ) {
                        if (A.current || !n) {
                            null == o || o(x(e, this.options, t)), null == a || a(), this.resolveFinishedPromise();
                            return;
                        }
                        this.options.duration = 0;
                    }
                    let u = this.initPlayback(e, t);
                    !1 !== u && ((this._resolved = { keyframes: e, finalKeyframe: t, ...u }), this.onPostResolved());
                }
                onPostResolved() { }
                then(e, t) {
                    return this.currentFinishedPromise.then(e, t);
                }
                updateFinishedPromise() {
                    this.currentFinishedPromise = new Promise((e) => {
                        this.resolveFinishedPromise = e;
                    });
                }
            }
            function eF(e, t, i) {
                var s, r;
                let n = Math.max(t - 5, 0);
                return (s = i - e(n)), (r = t - n) ? (1e3 / r) * s : 0;
            }
            function ek(e, t) {
                return e * Math.sqrt(1 - t * t);
            }
            let eE = ["duration", "bounce"],
                eR = ["stiffness", "damping", "mass"];
            function eI(e, t) {
                return t.some((t) => void 0 !== e[t]);
            }
            function eN({ keyframes: e, restDelta: t, restSpeed: i, ...s }) {
                let r;
                let n = e[0],
                    a = e[e.length - 1],
                    o = { done: !1, value: n },
                    { stiffness: l, damping: u, mass: h, duration: d, velocity: p, isResolvedFromDuration: c } = (function (e) {
                        let t = { velocity: 0, stiffness: 100, damping: 10, mass: 1, isResolvedFromDuration: !1, ...e };
                        if (!eI(e, eR) && eI(e, eE)) {
                            let i = (function ({ duration: e = 800, bounce: t = 0.25, velocity: i = 0, mass: s = 1 }) {
                                let r, n;
                                (0, E.K)(e <= f(10), "Spring duration must be 10 seconds or less");
                                let a = 1 - t;
                                (a = (0, ee.u)(0.05, 1, a)),
                                    (e = (0, ee.u)(0.01, 10, v(e))),
                                    a < 1
                                        ? ((r = (t) => {
                                            let s = t * a,
                                                r = s * e;
                                            return 0.001 - ((s - i) / ek(t, a)) * Math.exp(-r);
                                        }),
                                            (n = (t) => {
                                                let s = t * a * e,
                                                    n = Math.pow(a, 2) * Math.pow(t, 2) * e,
                                                    o = ek(Math.pow(t, 2), a);
                                                return ((s * i + i - n) * Math.exp(-s) * (-r(t) + 0.001 > 0 ? -1 : 1)) / o;
                                            }))
                                        : ((r = (t) => -0.001 + Math.exp(-t * e) * ((t - i) * e + 1)), (n = (t) => e * e * (i - t) * Math.exp(-t * e)));
                                let o = (function (e, t, i) {
                                    let s = i;
                                    for (let i = 1; i < 12; i++) s -= e(s) / t(s);
                                    return s;
                                })(r, n, 5 / e);
                                if (((e = f(e)), isNaN(o))) return { stiffness: 100, damping: 10, duration: e };
                                {
                                    let t = Math.pow(o, 2) * s;
                                    return { stiffness: t, damping: 2 * a * Math.sqrt(s * t), duration: e };
                                }
                            })(e);
                            (t = { ...t, ...i, mass: 1 }).isResolvedFromDuration = !0;
                        }
                        return t;
                    })({ ...s, velocity: -v(s.velocity || 0) }),
                    m = p || 0,
                    g = u / (2 * Math.sqrt(l * h)),
                    y = a - n,
                    b = v(Math.sqrt(l / h)),
                    w = 5 > Math.abs(y);
                if ((i || (i = w ? 0.01 : 2), t || (t = w ? 0.005 : 0.5), g < 1)) {
                    let e = ek(b, g);
                    r = (t) => a - Math.exp(-g * b * t) * (((m + g * b * y) / e) * Math.sin(e * t) + y * Math.cos(e * t));
                } else if (1 === g) r = (e) => a - Math.exp(-b * e) * (y + (m + b * y) * e);
                else {
                    let e = b * Math.sqrt(g * g - 1);
                    r = (t) => {
                        let i = Math.exp(-g * b * t),
                            s = Math.min(e * t, 300);
                        return a - (i * ((m + g * b * y) * Math.sinh(s) + e * y * Math.cosh(s))) / e;
                    };
                }
                return {
                    calculatedDuration: (c && d) || null,
                    next: (e) => {
                        let s = r(e);
                        if (c) o.done = e >= d;
                        else {
                            let n = m;
                            0 !== e && (n = g < 1 ? eF(r, e, s) : 0);
                            let l = Math.abs(n) <= i,
                                u = Math.abs(a - s) <= t;
                            o.done = l && u;
                        }
                        return (o.value = o.done ? a : s), o;
                    },
                };
            }
            function eO({ keyframes: e, velocity: t = 0, power: i = 0.8, timeConstant: s = 325, bounceDamping: r = 10, bounceStiffness: n = 500, modifyTarget: a, min: o, max: l, restDelta: u = 0.5, restSpeed: h }) {
                let d, p;
                let c = e[0],
                    m = { done: !1, value: c },
                    f = (e) => (void 0 !== o && e < o) || (void 0 !== l && e > l),
                    v = (e) => (void 0 === o ? l : void 0 === l ? o : Math.abs(o - e) < Math.abs(l - e) ? o : l),
                    g = i * t,
                    y = c + g,
                    b = void 0 === a ? y : a(y);
                b !== y && (g = b - c);
                let w = (e) => -g * Math.exp(-e / s),
                    P = (e) => b + w(e),
                    V = (e) => {
                        let t = w(e),
                            i = P(e);
                        (m.done = Math.abs(t) <= u), (m.value = m.done ? b : i);
                    },
                    S = (e) => {
                        f(m.value) && ((d = e), (p = eN({ keyframes: [m.value, v(m.value)], velocity: eF(P, e, m.value), damping: r, stiffness: n, restDelta: u, restSpeed: h })));
                    };
                return (
                    S(0),
                    {
                        calculatedDuration: null,
                        next: (e) => {
                            let t = !1;
                            return (p || void 0 !== d || ((t = !0), V(e), S(e)), void 0 !== d && e >= d) ? p.next(e - d) : (t || V(e), m);
                        },
                    }
                );
            }
            let eK = (e, t, i) => (((1 - 3 * i + 3 * t) * e + (3 * i - 6 * t)) * e + 3 * t) * e;
            function ej(e, t, i, s) {
                if (e === t && i === s) return ex.Z;
                let r = (t) =>
                    (function (e, t, i, s, r) {
                        let n, a;
                        let o = 0;
                        do (n = eK((a = t + (i - t) / 2), s, r) - e) > 0 ? (i = a) : (t = a);
                        while (Math.abs(n) > 1e-7 && ++o < 12);
                        return a;
                    })(t, 0, 1, e, i);
                return (e) => (0 === e || 1 === e ? e : eK(r(e), t, s));
            }
            let e$ = ej(0.42, 0, 1, 1),
                eD = ej(0, 0, 0.58, 1),
                eL = ej(0.42, 0, 0.58, 1),
                eW = (e) => Array.isArray(e) && "number" != typeof e[0],
                eB = (e) => (t) => (t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2),
                eU = (e) => (t) => 1 - e(1 - t),
                eH = (e) => 1 - Math.sin(Math.acos(e)),
                eq = eU(eH),
                ez = eB(eH),
                eG = ej(0.33, 1.53, 0.69, 0.99),
                eZ = eU(eG),
                e_ = eB(eZ),
                eY = {
                    linear: ex.Z,
                    easeIn: e$,
                    easeInOut: eL,
                    easeOut: eD,
                    circIn: eH,
                    circInOut: ez,
                    circOut: eq,
                    backIn: eZ,
                    backInOut: e_,
                    backOut: eG,
                    anticipate: (e) => ((e *= 2) < 1 ? 0.5 * eZ(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1)))),
                },
                eQ = (e) => {
                    if (Array.isArray(e)) {
                        (0, E.k)(4 === e.length, "Cubic bezier arrays must contain four numerical values.");
                        let [t, i, s, r] = e;
                        return ej(t, i, s, r);
                    }
                    return "string" == typeof e ? ((0, E.k)(void 0 !== eY[e], `Invalid easing type '${e}'`), eY[e]) : e;
                },
                eX = (e, t) => (i) => t(e(i)),
                eJ = (...e) => e.reduce(eX),
                e0 = (e, t, i) => {
                    let s = t - e;
                    return 0 === s ? 1 : (i - e) / s;
                },
                e1 = (e, t, i) => e + (t - e) * i;
            function e2(e, t, i) {
                return (i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6) ? e + (t - e) * 6 * i : i < 0.5 ? t : i < 2 / 3 ? e + (t - e) * (2 / 3 - i) * 6 : e;
            }
            let e5 = (e, t, i) => {
                let s = e * e,
                    r = i * (t * t - s) + s;
                return r < 0 ? 0 : Math.sqrt(r);
            },
                e3 = [ea, en, eo],
                e4 = (e) => e3.find((t) => t.test(e));
            function e6(e) {
                let t = e4(e);
                (0, E.k)(!!t, `'${e}' is not an animatable color. Use the equivalent color code instead.`);
                let i = t.parse(e);
                return (
                    t === eo &&
                    (i = (function ({ hue: e, saturation: t, lightness: i, alpha: s }) {
                        (e /= 360), (i /= 100);
                        let r = 0,
                            n = 0,
                            a = 0;
                        if ((t /= 100)) {
                            let s = i < 0.5 ? i * (1 + t) : i + t - i * t,
                                o = 2 * i - s;
                            (r = e2(o, s, e + 1 / 3)), (n = e2(o, s, e)), (a = e2(o, s, e - 1 / 3));
                        } else r = n = a = i;
                        return { red: Math.round(255 * r), green: Math.round(255 * n), blue: Math.round(255 * a), alpha: s };
                    })(i)),
                    i
                );
            }
            let e8 = (e, t) => {
                let i = e6(e),
                    s = e6(t),
                    r = { ...i };
                return (e) => ((r.red = e5(i.red, s.red, e)), (r.green = e5(i.green, s.green, e)), (r.blue = e5(i.blue, s.blue, e)), (r.alpha = e1(i.alpha, s.alpha, e)), en.transform(r));
            },
                e9 = new Set(["none", "hidden"]);
            function e7(e, t) {
                return (i) => (i > 0 ? t : e);
            }
            function te(e, t) {
                return (i) => e1(e, t, i);
            }
            function tt(e) {
                return "number" == typeof e ? te : "string" == typeof e ? ((0, I.t)(e) ? e7 : el.test(e) ? e8 : tr) : Array.isArray(e) ? ti : "object" == typeof e ? (el.test(e) ? e8 : ts) : e7;
            }
            function ti(e, t) {
                let i = [...e],
                    s = i.length,
                    r = e.map((e, i) => tt(e)(e, t[i]));
                return (e) => {
                    for (let t = 0; t < s; t++) i[t] = r[t](e);
                    return i;
                };
            }
            function ts(e, t) {
                let i = { ...e, ...t },
                    s = {};
                for (let r in i) void 0 !== e[r] && void 0 !== t[r] && (s[r] = tt(e[r])(e[r], t[r]));
                return (e) => {
                    for (let t in s) i[t] = s[t](e);
                    return i;
                };
            }
            let tr = (e, t) => {
                let i = ev.createTransformer(t),
                    s = ep(e),
                    r = ep(t);
                return s.indexes.var.length === r.indexes.var.length && s.indexes.color.length === r.indexes.color.length && s.indexes.number.length >= r.indexes.number.length
                    ? (e9.has(e) && !r.values.length) || (e9.has(t) && !s.values.length)
                        ? e9.has(e)
                            ? (i) => (i <= 0 ? e : t)
                            : (i) => (i >= 1 ? t : e)
                        : eJ(
                            ti(
                                (function (e, t) {
                                    var i;
                                    let s = [],
                                        r = { color: 0, var: 0, number: 0 };
                                    for (let n = 0; n < t.values.length; n++) {
                                        let a = t.types[n],
                                            o = e.indexes[a][r[a]],
                                            l = null !== (i = e.values[o]) && void 0 !== i ? i : 0;
                                        (s[n] = l), r[a]++;
                                    }
                                    return s;
                                })(s, r),
                                r.values
                            ),
                            i
                        )
                    : ((0, E.K)(!0, `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`),
                        e7(e, t));
            };
            function tn(e, t, i) {
                return "number" == typeof e && "number" == typeof t && "number" == typeof i ? e1(e, t, i) : tt(e)(e, t);
            }
            function ta({ duration: e = 300, keyframes: t, times: i, ease: s = "easeInOut" }) {
                let r = eW(s) ? s.map(eQ) : eQ(s),
                    n = { done: !1, value: t[0] },
                    a = (function (e, t, { clamp: i = !0, ease: s, mixer: r } = {}) {
                        let n = e.length;
                        if (((0, E.k)(n === t.length, "Both input and output ranges must be the same length"), 1 === n)) return () => t[0];
                        if (2 === n && e[0] === e[1]) return () => t[1];
                        e[0] > e[n - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
                        let a = (function (e, t, i) {
                            let s = [],
                                r = i || tn,
                                n = e.length - 1;
                            for (let i = 0; i < n; i++) {
                                let n = r(e[i], e[i + 1]);
                                t && (n = eJ(Array.isArray(t) ? t[i] || ex.Z : t, n)), s.push(n);
                            }
                            return s;
                        })(t, s, r),
                            o = a.length,
                            l = (t) => {
                                let i = 0;
                                if (o > 1) for (; i < e.length - 2 && !(t < e[i + 1]); i++);
                                let s = e0(e[i], e[i + 1], t);
                                return a[i](s);
                            };
                        return i ? (t) => l((0, ee.u)(e[0], e[n - 1], t)) : l;
                    })(
                        (i && i.length === t.length
                            ? i
                            : (function (e) {
                                let t = [0];
                                return (
                                    (function (e, t) {
                                        let i = e[e.length - 1];
                                        for (let s = 1; s <= t; s++) {
                                            let r = e0(0, t, s);
                                            e.push(e1(i, 1, r));
                                        }
                                    })(t, e.length - 1),
                                    t
                                );
                            })(t)
                        ).map((t) => t * e),
                        t,
                        { ease: Array.isArray(r) ? r : t.map(() => r || eL).splice(0, t.length - 1) }
                    );
                return { calculatedDuration: e, next: (t) => ((n.value = a(t)), (n.done = t >= e), n) };
            }
            let to = (e) => {
                let t = ({ timestamp: t }) => e(t);
                return { start: () => M.Wi.update(t, !0), stop: () => (0, M.Pn)(t), now: () => (M.w0.isProcessing ? M.w0.timestamp : F.now()) };
            },
                tl = { decay: eO, inertia: eO, tween: ta, keyframes: ta, spring: eN },
                tu = (e) => e / 100;
            class th extends eC {
                constructor({ KeyframeResolver: e = X, ...t }) {
                    super(t),
                        (this.holdTime = null),
                        (this.startTime = null),
                        (this.cancelTime = null),
                        (this.currentTime = 0),
                        (this.playbackSpeed = 1),
                        (this.pendingPlayState = "running"),
                        (this.state = "idle"),
                        (this.stop = () => {
                            if ((this.resolver.cancel(), (this.isStopped = !0), "idle" === this.state)) return;
                            this.teardown();
                            let { onStop: e } = this.options;
                            e && e();
                        });
                    let { name: i, motionValue: s, keyframes: r } = this.options,
                        n = (e, t) => this.onKeyframesResolved(e, t);
                    i && s && s.owner ? (this.resolver = s.owner.resolveKeyframes(r, n, i, s)) : (this.resolver = new e(r, n, i, s)), this.resolver.scheduleResolve();
                }
                initPlayback(e) {
                    let t, i;
                    let { type: s = "keyframes", repeat: r = 0, repeatDelay: n = 0, repeatType: a, velocity: o = 0 } = this.options,
                        l = tl[s] || ta;
                    l !== ta && "number" != typeof e[0] && ((t = eJ(tu, tn(e[0], e[1]))), (e = [0, 100]));
                    let u = l({ ...this.options, keyframes: e });
                    "mirror" === a && (i = l({ ...this.options, keyframes: [...e].reverse(), velocity: -o })),
                        null === u.calculatedDuration &&
                        (u.calculatedDuration = (function (e) {
                            let t = 0,
                                i = e.next(t);
                            for (; !i.done && t < 2e4;) (t += 50), (i = e.next(t));
                            return t >= 2e4 ? 1 / 0 : t;
                        })(u));
                    let { calculatedDuration: h } = u,
                        d = h + n;
                    return { generator: u, mirroredGenerator: i, mapPercentToKeyframes: t, calculatedDuration: h, resolvedDuration: d, totalDuration: d * (r + 1) - n };
                }
                onPostResolved() {
                    let { autoplay: e = !0 } = this.options;
                    this.play(), "paused" !== this.pendingPlayState && e ? (this.state = this.pendingPlayState) : this.pause();
                }
                tick(e, t = !1) {
                    let { resolved: i } = this;
                    if (!i) {
                        let { keyframes: e } = this.options;
                        return { done: !0, value: e[e.length - 1] };
                    }
                    let { finalKeyframe: s, generator: r, mirroredGenerator: n, mapPercentToKeyframes: a, keyframes: o, calculatedDuration: l, totalDuration: u, resolvedDuration: h } = i;
                    if (null === this.startTime) return r.next(0);
                    let { delay: d, repeat: p, repeatType: c, repeatDelay: m, onUpdate: f } = this.options;
                    this.speed > 0 ? (this.startTime = Math.min(this.startTime, e)) : this.speed < 0 && (this.startTime = Math.min(e - u / this.speed, this.startTime)),
                        t ? (this.currentTime = e) : null !== this.holdTime ? (this.currentTime = this.holdTime) : (this.currentTime = Math.round(e - this.startTime) * this.speed);
                    let v = this.currentTime - d * (this.speed >= 0 ? 1 : -1),
                        g = this.speed >= 0 ? v < 0 : v > u;
                    (this.currentTime = Math.max(v, 0)), "finished" === this.state && null === this.holdTime && (this.currentTime = u);
                    let y = this.currentTime,
                        b = r;
                    if (p) {
                        let e = Math.min(this.currentTime, u) / h,
                            t = Math.floor(e),
                            i = e % 1;
                        !i && e >= 1 && (i = 1), 1 === i && t--, (t = Math.min(t, p + 1)) % 2 && ("reverse" === c ? ((i = 1 - i), m && (i -= m / h)) : "mirror" === c && (b = n)), (y = (0, ee.u)(0, 1, i) * h);
                    }
                    let w = g ? { done: !1, value: o[0] } : b.next(y);
                    a && (w.value = a(w.value));
                    let { done: P } = w;
                    g || null === l || (P = this.speed >= 0 ? this.currentTime >= u : this.currentTime <= 0);
                    let V = null === this.holdTime && ("finished" === this.state || ("running" === this.state && P));
                    return V && void 0 !== s && (w.value = x(o, this.options, s)), f && f(w.value), V && this.finish(), w;
                }
                get duration() {
                    let { resolved: e } = this;
                    return e ? v(e.calculatedDuration) : 0;
                }
                get time() {
                    return v(this.currentTime);
                }
                set time(e) {
                    (e = f(e)), (this.currentTime = e), null !== this.holdTime || 0 === this.speed ? (this.holdTime = e) : this.driver && (this.startTime = this.driver.now() - e / this.speed);
                }
                get speed() {
                    return this.playbackSpeed;
                }
                set speed(e) {
                    let t = this.playbackSpeed !== e;
                    (this.playbackSpeed = e), t && (this.time = v(this.currentTime));
                }
                play() {
                    if ((this.resolver.isScheduled || this.resolver.resume(), !this._resolved)) {
                        this.pendingPlayState = "running";
                        return;
                    }
                    if (this.isStopped) return;
                    let { driver: e = to, onPlay: t } = this.options;
                    this.driver || (this.driver = e((e) => this.tick(e))), t && t();
                    let i = this.driver.now();
                    null !== this.holdTime ? (this.startTime = i - this.holdTime) : (this.startTime && "finished" !== this.state) || (this.startTime = i),
                        "finished" === this.state && this.updateFinishedPromise(),
                        (this.cancelTime = this.startTime),
                        (this.holdTime = null),
                        (this.state = "running"),
                        this.driver.start();
                }
                pause() {
                    var e;
                    if (!this._resolved) {
                        this.pendingPlayState = "paused";
                        return;
                    }
                    (this.state = "paused"), (this.holdTime = null !== (e = this.currentTime) && void 0 !== e ? e : 0);
                }
                complete() {
                    "running" !== this.state && this.play(), (this.pendingPlayState = this.state = "finished"), (this.holdTime = null);
                }
                finish() {
                    this.teardown(), (this.state = "finished");
                    let { onComplete: e } = this.options;
                    e && e();
                }
                cancel() {
                    null !== this.cancelTime && this.tick(this.cancelTime), this.teardown(), this.updateFinishedPromise();
                }
                teardown() {
                    (this.state = "idle"), this.stopDriver(), this.resolveFinishedPromise(), this.updateFinishedPromise(), (this.startTime = this.cancelTime = null), this.resolver.cancel();
                }
                stopDriver() {
                    this.driver && (this.driver.stop(), (this.driver = void 0));
                }
                sample(e) {
                    return (this.startTime = 0), this.tick(e, !0);
                }
            }
            let td = (e) => Array.isArray(e) && "number" == typeof e[0],
                tp = ([e, t, i, s]) => `cubic-bezier(${e}, ${t}, ${i}, ${s})`,
                tc = {
                    linear: "linear",
                    ease: "ease",
                    easeIn: "ease-in",
                    easeOut: "ease-out",
                    easeInOut: "ease-in-out",
                    circIn: tp([0, 0.65, 0.55, 1]),
                    circOut: tp([0.55, 0, 1, 0.45]),
                    backIn: tp([0.31, 0.01, 0.66, -0.59]),
                    backOut: tp([0.33, 1.53, 0.69, 0.99]),
                };
            function tm(e) {
                return tf(e) || tc.easeOut;
            }
            function tf(e) {
                if (e) return td(e) ? tp(e) : Array.isArray(e) ? e.map(tm) : tc[e];
            }
            let tv = ((n = () => Object.hasOwnProperty.call(Element.prototype, "animate")), () => (void 0 === r && (r = n()), r)),
                tg = new Set(["opacity", "clipPath", "filter", "transform"]);
            class ty extends eC {
                constructor(e) {
                    super(e);
                    let { name: t, motionValue: i, keyframes: s } = this.options;
                    (this.resolver = new eT(s, (e, t) => this.onKeyframesResolved(e, t), t, i)), this.resolver.scheduleResolve();
                }
                initPlayback(e, t) {
                    var i, s;
                    let { duration: r = 300, times: n, ease: a, type: o, motionValue: l, name: u } = this.options;
                    if (!(null === (i = l.owner) || void 0 === i ? void 0 : i.current)) return !1;
                    if (
                        "spring" === (s = this.options).type ||
                        "backgroundColor" === s.name ||
                        !(function e(t) {
                            return !!(!t || ("string" == typeof t && t in tc) || td(t) || (Array.isArray(t) && t.every(e)));
                        })(s.ease)
                    ) {
                        let { onComplete: t, onUpdate: i, motionValue: s, ...l } = this.options,
                            u = (function (e, t) {
                                let i = new th({ ...t, keyframes: e, repeat: 0, delay: 0, isGenerator: !0 }),
                                    s = { done: !1, value: e[0] },
                                    r = [],
                                    n = 0;
                                for (; !s.done && n < 2e4;) r.push((s = i.sample(n)).value), (n += 10);
                                return { times: void 0, keyframes: r, duration: n - 10, ease: "linear" };
                            })(e, l);
                        1 === (e = u.keyframes).length && (e[1] = e[0]), (r = u.duration), (n = u.times), (a = u.ease), (o = "keyframes");
                    }
                    let h = (function (e, t, i, { delay: s = 0, duration: r = 300, repeat: n = 0, repeatType: a = "loop", ease: o, times: l } = {}) {
                        let u = { [t]: i };
                        l && (u.offset = l);
                        let h = tf(o);
                        return Array.isArray(h) && (u.easing = h), e.animate(u, { delay: s, duration: r, easing: Array.isArray(h) ? "linear" : h, fill: "both", iterations: n + 1, direction: "reverse" === a ? "alternate" : "normal" });
                    })(l.owner.current, u, e, { ...this.options, duration: r, times: n, ease: a });
                    return (
                        (h.startTime = F.now()),
                        this.pendingTimeline
                            ? ((h.timeline = this.pendingTimeline), (this.pendingTimeline = void 0))
                            : (h.onfinish = () => {
                                let { onComplete: i } = this.options;
                                l.set(x(e, this.options, t)), i && i(), this.cancel(), this.resolveFinishedPromise();
                            }),
                        { animation: h, duration: r, times: n, type: o, ease: a, keyframes: e }
                    );
                }
                get duration() {
                    let { resolved: e } = this;
                    if (!e) return 0;
                    let { duration: t } = e;
                    return v(t);
                }
                get time() {
                    let { resolved: e } = this;
                    if (!e) return 0;
                    let { animation: t } = e;
                    return v(t.currentTime || 0);
                }
                set time(e) {
                    let { resolved: t } = this;
                    if (!t) return;
                    let { animation: i } = t;
                    i.currentTime = f(e);
                }
                get speed() {
                    let { resolved: e } = this;
                    if (!e) return 1;
                    let { animation: t } = e;
                    return t.playbackRate;
                }
                set speed(e) {
                    let { resolved: t } = this;
                    if (!t) return;
                    let { animation: i } = t;
                    i.playbackRate = e;
                }
                get state() {
                    let { resolved: e } = this;
                    if (!e) return "idle";
                    let { animation: t } = e;
                    return t.playState;
                }
                attachTimeline(e) {
                    if (this._resolved) {
                        let { resolved: t } = this;
                        if (!t) return ex.Z;
                        let { animation: i } = t;
                        (i.timeline = e), (i.onfinish = null);
                    } else this.pendingTimeline = e;
                    return ex.Z;
                }
                play() {
                    if (this.isStopped) return;
                    let { resolved: e } = this;
                    if (!e) return;
                    let { animation: t } = e;
                    "finished" === t.playState && this.updateFinishedPromise(), t.play();
                }
                pause() {
                    let { resolved: e } = this;
                    if (!e) return;
                    let { animation: t } = e;
                    t.pause();
                }
                stop() {
                    if ((this.resolver.cancel(), (this.isStopped = !0), "idle" === this.state)) return;
                    let { resolved: e } = this;
                    if (!e) return;
                    let { animation: t, keyframes: i, duration: s, type: r, ease: n, times: a } = e;
                    if ("idle" !== t.playState && "finished" !== t.playState) {
                        if (this.time) {
                            let { motionValue: e, onUpdate: t, onComplete: o, ...l } = this.options,
                                u = new th({ ...l, keyframes: i, duration: s, type: r, ease: n, times: a, isGenerator: !0 }),
                                h = f(this.time);
                            e.setWithVelocity(u.sample(h - 10).value, u.sample(h).value, 10);
                        }
                        this.cancel();
                    }
                }
                complete() {
                    let { resolved: e } = this;
                    e && e.animation.finish();
                }
                cancel() {
                    let { resolved: e } = this;
                    e && e.animation.cancel();
                }
                static supports(e) {
                    let { motionValue: t, name: i, repeatDelay: s, repeatType: r, damping: n, type: a } = e;
                    return tv() && i && tg.has(i) && t && t.owner && t.owner.current instanceof HTMLElement && !t.owner.getProps().onUpdate && !s && "mirror" !== r && 0 !== n && "inertia" !== a;
                }
            }
            let tb = (e, t, i, s = {}, r, n) => (a) => {
                let o = V(s, e) || {},
                    l = o.delay || s.delay || 0,
                    { elapsed: u = 0 } = s;
                u -= f(l);
                let h = {
                    keyframes: Array.isArray(i) ? i : [null, i],
                    ease: "easeOut",
                    velocity: t.getVelocity(),
                    ...o,
                    delay: -u,
                    onUpdate: (e) => {
                        t.set(e), o.onUpdate && o.onUpdate(e);
                    },
                    onComplete: () => {
                        a(), o.onComplete && o.onComplete();
                    },
                    name: e,
                    motionValue: t,
                    element: n ? void 0 : r,
                };
                !(function ({ when: e, delay: t, delayChildren: i, staggerChildren: s, staggerDirection: r, repeat: n, repeatType: a, repeatDelay: o, from: l, elapsed: u, ...h }) {
                    return !!Object.keys(h).length;
                })(o) && (h = { ...h, ...P(e, h) }),
                    h.duration && (h.duration = f(h.duration)),
                    h.repeatDelay && (h.repeatDelay = f(h.repeatDelay)),
                    void 0 !== h.from && (h.keyframes[0] = h.from);
                let d = !1;
                if (
                    ((!1 !== h.type && (0 !== h.duration || h.repeatDelay)) || ((h.duration = 0), 0 !== h.delay || (d = !0)), (A.current || S.c.skipAnimations) && ((d = !0), (h.duration = 0), (h.delay = 0)), d && !n && void 0 !== t.get())
                ) {
                    let e = x(h.keyframes, o);
                    if (void 0 !== e) {
                        M.Wi.update(() => {
                            h.onUpdate(e), h.onComplete();
                        });
                        return;
                    }
                }
                return !n && ty.supports(h) ? new ty(h) : new th(h);
            };
            var tw = i(40406);
            function tP(e) {
                return !!((0, tw.i)(e) && e.add);
            }
            var tV = i(8715);
            class tS {
                constructor() {
                    this.subscriptions = [];
                }
                add(e) {
                    var t;
                    return (
                        -1 === (t = this.subscriptions).indexOf(e) && t.push(e),
                        () =>
                            (function (e, t) {
                                let i = e.indexOf(t);
                                i > -1 && e.splice(i, 1);
                            })(this.subscriptions, e)
                    );
                }
                notify(e, t, i) {
                    let s = this.subscriptions.length;
                    if (s) {
                        if (1 === s) this.subscriptions[0](e, t, i);
                        else
                            for (let r = 0; r < s; r++) {
                                let s = this.subscriptions[r];
                                s && s(e, t, i);
                            }
                    }
                }
                getSize() {
                    return this.subscriptions.length;
                }
                clear() {
                    this.subscriptions.length = 0;
                }
            }
            let tA = (e) => !isNaN(parseFloat(e)),
                tT = { current: void 0 };
            class tx {
                constructor(e, t = {}) {
                    (this.version = "11.2.0"),
                        (this.canTrackVelocity = !1),
                        (this.events = {}),
                        (this.updateAndNotify = (e, t = !0) => {
                            let i = F.now();
                            this.updatedAt !== i && this.setPrevFrameValue(),
                                (this.prev = this.current),
                                this.setCurrent(e),
                                this.current !== this.prev && this.events.change && this.events.change.notify(this.current),
                                t && this.events.renderRequest && this.events.renderRequest.notify(this.current);
                        }),
                        (this.hasAnimated = !1),
                        this.setCurrent(e),
                        (this.canTrackVelocity = tA(this.current)),
                        (this.owner = t.owner);
                }
                setCurrent(e) {
                    (this.current = e), (this.updatedAt = F.now());
                }
                setPrevFrameValue(e = this.current) {
                    (this.prevFrameValue = e), (this.prevUpdatedAt = this.updatedAt);
                }
                onChange(e) {
                    return this.on("change", e);
                }
                on(e, t) {
                    this.events[e] || (this.events[e] = new tS());
                    let i = this.events[e].add(t);
                    return "change" === e
                        ? () => {
                            i(),
                                M.Wi.read(() => {
                                    this.events.change.getSize() || this.stop();
                                });
                        }
                        : i;
                }
                clearListeners() {
                    for (let e in this.events) this.events[e].clear();
                }
                attach(e, t) {
                    (this.passiveEffect = e), (this.stopPassiveEffect = t);
                }
                set(e, t = !0) {
                    t && this.passiveEffect ? this.passiveEffect(e, this.updateAndNotify) : this.updateAndNotify(e, t);
                }
                setWithVelocity(e, t, i) {
                    this.set(t), (this.prev = void 0), (this.prevFrameValue = e), (this.prevUpdatedAt = this.updatedAt - i);
                }
                jump(e, t = !0) {
                    this.updateAndNotify(e), (this.prev = e), (this.prevUpdatedAt = this.prevFrameValue = void 0), t && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
                }
                get() {
                    return tT.current && tT.current.push(this), this.current;
                }
                getPrevious() {
                    return this.prev;
                }
                getVelocity() {
                    var e;
                    let t = F.now();
                    if (!this.canTrackVelocity || void 0 === this.prevFrameValue || t - this.updatedAt > 30) return 0;
                    let i = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
                    return (e = parseFloat(this.current) - parseFloat(this.prevFrameValue)), i ? (1e3 / i) * e : 0;
                }
                start(e) {
                    return (
                        this.stop(),
                        new Promise((t) => {
                            (this.hasAnimated = !0), (this.animation = e(t)), this.events.animationStart && this.events.animationStart.notify();
                        }).then(() => {
                            this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
                        })
                    );
                }
                stop() {
                    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
                }
                isAnimating() {
                    return !!this.animation;
                }
                clearAnimation() {
                    delete this.animation;
                }
                destroy() {
                    this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
                }
            }
            function tM(e, t) {
                return new tx(e, t);
            }
            function tC(e, t, { delay: i = 0, transitionOverride: s, type: r } = {}) {
                var n;
                let { transition: a = e.getDefaultTransition(), transitionEnd: o, ...l } = t,
                    u = e.getValue("willChange");
                s && (a = s);
                let h = [],
                    p = r && e.animationState && e.animationState.getState()[r];
                for (let t in l) {
                    let s = e.getValue(t, null !== (n = e.latestValues[t]) && void 0 !== n ? n : null),
                        r = l[t];
                    if (
                        void 0 === r ||
                        (p &&
                            (function ({ protectedKeys: e, needsAnimating: t }, i) {
                                let s = e.hasOwnProperty(i) && !0 !== t[i];
                                return (t[i] = !1), s;
                            })(p, t))
                    )
                        continue;
                    let o = { delay: i, elapsed: 0, ...V(a || {}, t) },
                        d = !1;
                    if (window.HandoffAppearAnimations) {
                        let i = e.getProps()[m.M];
                        if (i) {
                            let e = window.HandoffAppearAnimations(i, t);
                            null !== e && ((o.elapsed = e), (d = !0));
                        }
                    }
                    s.start(tb(t, s, r, e.shouldReduceMotion && c.G.has(t) ? { type: !1 } : o, e, d));
                    let f = s.animation;
                    f && (tP(u) && (u.add(t), f.then(() => u.remove(t))), h.push(f));
                }
                return (
                    o &&
                    Promise.all(h).then(() => {
                        M.Wi.update(() => {
                            o &&
                                (function (e, t) {
                                    let { transitionEnd: i = {}, transition: s = {}, ...r } = d(e, t) || {};
                                    for (let t in (r = { ...r, ...i })) {
                                        let i = (0, tV.Y)(r[t]);
                                        e.hasValue(t) ? e.getValue(t).set(i) : e.addValue(t, tM(i));
                                    }
                                })(e, o);
                        });
                    }),
                    h
                );
            }
            function tF(e, t, i = {}) {
                var s;
                let r = d(e, t, "exit" === i.type ? (null === (s = e.presenceContext) || void 0 === s ? void 0 : s.custom) : void 0),
                    { transition: n = e.getDefaultTransition() || {} } = r || {};
                i.transitionOverride && (n = i.transitionOverride);
                let a = r ? () => Promise.all(tC(e, r, i)) : () => Promise.resolve(),
                    o =
                        e.variantChildren && e.variantChildren.size
                            ? (s = 0) => {
                                let { delayChildren: r = 0, staggerChildren: a, staggerDirection: o } = n;
                                return (function (e, t, i = 0, s = 0, r = 1, n) {
                                    let a = [],
                                        o = (e.variantChildren.size - 1) * s,
                                        l = 1 === r ? (e = 0) => e * s : (e = 0) => o - e * s;
                                    return (
                                        Array.from(e.variantChildren)
                                            .sort(tk)
                                            .forEach((e, s) => {
                                                e.notify("AnimationStart", t), a.push(tF(e, t, { ...n, delay: i + l(s) }).then(() => e.notify("AnimationComplete", t)));
                                            }),
                                        Promise.all(a)
                                    );
                                })(e, t, r + s, a, o, i);
                            }
                            : () => Promise.resolve(),
                    { when: l } = n;
                if (!l) return Promise.all([a(), o(i.delay)]);
                {
                    let [e, t] = "beforeChildren" === l ? [a, o] : [o, a];
                    return e().then(() => t());
                }
            }
            function tk(e, t) {
                return e.sortNodePosition(t);
            }
            let tE = [...p.e].reverse(),
                tR = p.e.length;
            function tI(e = !1) {
                return { isActive: e, protectedKeys: {}, needsAnimating: {}, prevResolvedValues: {} };
            }
            class tN {
                constructor(e) {
                    (this.isMounted = !1), (this.node = e);
                }
                update() { }
            }
            class tO extends tN {
                constructor(e) {
                    super(e),
                        e.animationState ||
                        (e.animationState = (function (e) {
                            let t = (t) =>
                                Promise.all(
                                    t.map(({ animation: t, options: i }) =>
                                        (function (e, t, i = {}) {
                                            let s;
                                            if ((e.notify("AnimationStart", t), Array.isArray(t))) s = Promise.all(t.map((t) => tF(e, t, i)));
                                            else if ("string" == typeof t) s = tF(e, t, i);
                                            else {
                                                let r = "function" == typeof t ? d(e, t, i.custom) : t;
                                                s = Promise.all(tC(e, r, i));
                                            }
                                            return s.then(() => {
                                                M.Wi.postRender(() => {
                                                    e.notify("AnimationComplete", t);
                                                });
                                            });
                                        })(e, t, i)
                                    )
                                ),
                                i = { animate: tI(!0), whileInView: tI(), whileHover: tI(), whileTap: tI(), whileDrag: tI(), whileFocus: tI(), exit: tI() },
                                s = !0,
                                r = (t) => (i, s) => {
                                    var r;
                                    let n = d(e, s, "exit" === t ? (null === (r = e.presenceContext) || void 0 === r ? void 0 : r.custom) : void 0);
                                    if (n) {
                                        let { transition: e, transitionEnd: t, ...s } = n;
                                        i = { ...i, ...s, ...t };
                                    }
                                    return i;
                                };
                            function n(n) {
                                let h = e.getProps(),
                                    d = e.getVariantContext(!0) || {},
                                    p = [],
                                    c = new Set(),
                                    m = {},
                                    f = 1 / 0;
                                for (let t = 0; t < tR; t++) {
                                    var v;
                                    let g = tE[t],
                                        y = i[g],
                                        b = void 0 !== h[g] ? h[g] : d[g],
                                        w = (0, u.$)(b),
                                        P = g === n ? y.isActive : null;
                                    !1 === P && (f = t);
                                    let V = b === d[g] && b !== h[g] && w;
                                    if ((V && s && e.manuallyAnimateOnMount && (V = !1), (y.protectedKeys = { ...m }), (!y.isActive && null === P) || (!b && !y.prevProp) || (0, a.H)(b) || "boolean" == typeof b)) continue;
                                    let S = ((v = y.prevProp), ("string" == typeof b ? b !== v : !!Array.isArray(b) && !l(b, v)) || (g === n && y.isActive && !V && w) || (t > f && w)),
                                        A = !1,
                                        T = Array.isArray(b) ? b : [b],
                                        x = T.reduce(r(g), {});
                                    !1 === P && (x = {});
                                    let { prevResolvedValues: M = {} } = y,
                                        C = { ...M, ...x },
                                        F = (t) => {
                                            (S = !0), c.has(t) && ((A = !0), c.delete(t)), (y.needsAnimating[t] = !0);
                                            let i = e.getValue(t);
                                            i && (i.liveStyle = !1);
                                        };
                                    for (let e in C) {
                                        let t = x[e],
                                            i = M[e];
                                        if (!m.hasOwnProperty(e)) ((0, o.C)(t) && (0, o.C)(i) ? l(t, i) : t === i) ? (void 0 !== t && c.has(e) ? F(e) : (y.protectedKeys[e] = !0)) : null != t ? F(e) : c.add(e);
                                    }
                                    (y.prevProp = b),
                                        (y.prevResolvedValues = x),
                                        y.isActive && (m = { ...m, ...x }),
                                        s && e.blockInitialAnimation && (S = !1),
                                        S && (!V || A) && p.push(...T.map((e) => ({ animation: e, options: { type: g } })));
                                }
                                if (c.size) {
                                    let t = {};
                                    c.forEach((i) => {
                                        let s = e.getBaseTarget(i),
                                            r = e.getValue(i);
                                        r && (r.liveStyle = !0), (t[i] = null != s ? s : null);
                                    }),
                                        p.push({ animation: t });
                                }
                                let g = !!p.length;
                                return s && (!1 === h.initial || h.initial === h.animate) && !e.manuallyAnimateOnMount && (g = !1), (s = !1), g ? t(p) : Promise.resolve();
                            }
                            return {
                                animateChanges: n,
                                setActive: function (t, s) {
                                    var r;
                                    if (i[t].isActive === s) return Promise.resolve();
                                    null === (r = e.variantChildren) ||
                                        void 0 === r ||
                                        r.forEach((e) => {
                                            var i;
                                            return null === (i = e.animationState) || void 0 === i ? void 0 : i.setActive(t, s);
                                        }),
                                        (i[t].isActive = s);
                                    let a = n(t);
                                    for (let e in i) i[e].protectedKeys = {};
                                    return a;
                                },
                                setAnimateFunction: function (i) {
                                    t = i(e);
                                },
                                getState: () => i,
                            };
                        })(e));
                }
                updateAnimationControlsSubscription() {
                    let { animate: e } = this.node.getProps();
                    this.unmount(), (0, a.H)(e) && (this.unmount = e.subscribe(this.node));
                }
                mount() {
                    this.updateAnimationControlsSubscription();
                }
                update() {
                    let { animate: e } = this.node.getProps(),
                        { animate: t } = this.node.prevProps || {};
                    e !== t && this.updateAnimationControlsSubscription();
                }
                unmount() { }
            }
            let tK = 0;
            class tj extends tN {
                constructor() {
                    super(...arguments), (this.id = tK++);
                }
                update() {
                    if (!this.node.presenceContext) return;
                    let { isPresent: e, onExitComplete: t } = this.node.presenceContext,
                        { isPresent: i } = this.node.prevPresenceContext || {};
                    if (!this.node.animationState || e === i) return;
                    let s = this.node.animationState.setActive("exit", !e);
                    t && !e && s.then(() => t(this.id));
                }
                mount() {
                    let { register: e } = this.node.presenceContext || {};
                    e && (this.unmount = e(this.id));
                }
                unmount() { }
            }
            function t$(e, t, i, s = { passive: !0 }) {
                return e.addEventListener(t, i, s), () => e.removeEventListener(t, i);
            }
            let tD = (e) => ("mouse" === e.pointerType ? "number" != typeof e.button || e.button <= 0 : !1 !== e.isPrimary);
            function tL(e, t = "page") {
                return { point: { x: e[`${t}X`], y: e[`${t}Y`] } };
            }
            let tW = (e) => (t) => tD(t) && e(t, tL(t));
            function tB(e) {
                let t = null;
                return () =>
                    null === t &&
                    ((t = e),
                        () => {
                            t = null;
                        });
            }
            let tU = tB("dragHorizontal"),
                tH = tB("dragVertical");
            function tq() {
                let e = (function (e) {
                    let t = !1;
                    if ("y" === e) t = tH();
                    else if ("x" === e) t = tU();
                    else {
                        let e = tU(),
                            i = tH();
                        e && i
                            ? (t = () => {
                                e(), i();
                            })
                            : (e && e(), i && i());
                    }
                    return t;
                })(!0);
                return !e || (e(), !1);
            }
            function tz(e, t) {
                var i, s, r;
                let n = t ? "pointerenter" : "pointerleave",
                    a = t ? "onHoverStart" : "onHoverEnd";
                return (
                    (i = e.current),
                    (s = (i, s) => {
                        if ("touch" === i.pointerType || tq()) return;
                        let r = e.getProps();
                        e.animationState && r.whileHover && e.animationState.setActive("whileHover", t);
                        let n = r[a];
                        n && M.Wi.postRender(() => n(i, s));
                    }),
                    (r = { passive: !e.getProps()[a] }),
                    t$(i, n, tW(s), r)
                );
            }
            class tG extends tN {
                mount() {
                    this.unmount = eJ(tz(this.node, !0), tz(this.node, !1));
                }
                unmount() { }
            }
            class tZ extends tN {
                constructor() {
                    super(...arguments), (this.isActive = !1);
                }
                onFocus() {
                    let e = !1;
                    try {
                        e = this.node.current.matches(":focus-visible");
                    } catch (t) {
                        e = !0;
                    }
                    e && this.node.animationState && (this.node.animationState.setActive("whileFocus", !0), (this.isActive = !0));
                }
                onBlur() {
                    this.isActive && this.node.animationState && (this.node.animationState.setActive("whileFocus", !1), (this.isActive = !1));
                }
                mount() {
                    this.unmount = eJ(
                        t$(this.node.current, "focus", () => this.onFocus()),
                        t$(this.node.current, "blur", () => this.onBlur())
                    );
                }
                unmount() { }
            }
            let t_ = (e, t) => !!t && (e === t || t_(e, t.parentElement));
            function tY(e, t) {
                if (!t) return;
                let i = new PointerEvent("pointer" + e);
                t(i, tL(i));
            }
            class tQ extends tN {
                constructor() {
                    super(...arguments),
                        (this.removeStartListeners = ex.Z),
                        (this.removeEndListeners = ex.Z),
                        (this.removeAccessibleListeners = ex.Z),
                        (this.startPointerPress = (e, t) => {
                            var i, s, r, n, a, o, l, u;
                            if (this.isPressing) return;
                            this.removeEndListeners();
                            let h = this.node.getProps(),
                                d =
                                    ((i = window),
                                        (s = "pointerup"),
                                        (r = (e, t) => {
                                            if (!this.checkPressEnd()) return;
                                            let { onTap: i, onTapCancel: s, globalTapTarget: r } = this.node.getProps(),
                                                n = r || t_(this.node.current, e.target) ? i : s;
                                            n && M.Wi.update(() => n(e, t));
                                        }),
                                        (n = { passive: !(h.onTap || h.onPointerUp) }),
                                        t$(i, s, tW(r), n)),
                                p = ((a = window), (o = "pointercancel"), (l = (e, t) => this.cancelPress(e, t)), (u = { passive: !(h.onTapCancel || h.onPointerCancel) }), t$(a, o, tW(l), u));
                            (this.removeEndListeners = eJ(d, p)), this.startPress(e, t);
                        }),
                        (this.startAccessiblePress = () => {
                            let e = t$(this.node.current, "keydown", (e) => {
                                "Enter" !== e.key ||
                                    this.isPressing ||
                                    (this.removeEndListeners(),
                                        (this.removeEndListeners = t$(this.node.current, "keyup", (e) => {
                                            "Enter" === e.key &&
                                                this.checkPressEnd() &&
                                                tY("up", (e, t) => {
                                                    let { onTap: i } = this.node.getProps();
                                                    i && M.Wi.postRender(() => i(e, t));
                                                });
                                        })),
                                        tY("down", (e, t) => {
                                            this.startPress(e, t);
                                        }));
                            }),
                                t = t$(this.node.current, "blur", () => {
                                    this.isPressing && tY("cancel", (e, t) => this.cancelPress(e, t));
                                });
                            this.removeAccessibleListeners = eJ(e, t);
                        });
                }
                startPress(e, t) {
                    this.isPressing = !0;
                    let { onTapStart: i, whileTap: s } = this.node.getProps();
                    s && this.node.animationState && this.node.animationState.setActive("whileTap", !0), i && M.Wi.postRender(() => i(e, t));
                }
                checkPressEnd() {
                    return this.removeEndListeners(), (this.isPressing = !1), this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1), !tq();
                }
                cancelPress(e, t) {
                    if (!this.checkPressEnd()) return;
                    let { onTapCancel: i } = this.node.getProps();
                    i && M.Wi.postRender(() => i(e, t));
                }
                mount() {
                    var e, t, i, s;
                    let r = this.node.getProps(),
                        n = ((e = r.globalTapTarget ? window : this.node.current), (t = "pointerdown"), (i = this.startPointerPress), (s = { passive: !(r.onTapStart || r.onPointerStart) }), t$(e, t, tW(i), s)),
                        a = t$(this.node.current, "focus", this.startAccessiblePress);
                    this.removeStartListeners = eJ(n, a);
                }
                unmount() {
                    this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners();
                }
            }
            let tX = new WeakMap(),
                tJ = new WeakMap(),
                t0 = (e) => {
                    let t = tX.get(e.target);
                    t && t(e);
                },
                t1 = (e) => {
                    e.forEach(t0);
                },
                t2 = { some: 0, all: 1 };
            class t5 extends tN {
                constructor() {
                    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
                }
                startObserver() {
                    this.unmount();
                    let { viewport: e = {} } = this.node.getProps(),
                        { root: t, margin: i, amount: s = "some", once: r } = e,
                        n = { root: t ? t.current : void 0, rootMargin: i, threshold: "number" == typeof s ? s : t2[s] };
                    return (function (e, t, i) {
                        let s = (function ({ root: e, ...t }) {
                            let i = e || document;
                            tJ.has(i) || tJ.set(i, {});
                            let s = tJ.get(i),
                                r = JSON.stringify(t);
                            return s[r] || (s[r] = new IntersectionObserver(t1, { root: e, ...t })), s[r];
                        })(t);
                        return (
                            tX.set(e, i),
                            s.observe(e),
                            () => {
                                tX.delete(e), s.unobserve(e);
                            }
                        );
                    })(this.node.current, n, (e) => {
                        let { isIntersecting: t } = e;
                        if (this.isInView === t || ((this.isInView = t), r && !t && this.hasEnteredView)) return;
                        t && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", t);
                        let { onViewportEnter: i, onViewportLeave: s } = this.node.getProps(),
                            n = t ? i : s;
                        n && n(e);
                    });
                }
                mount() {
                    this.startObserver();
                }
                update() {
                    if ("undefined" == typeof IntersectionObserver) return;
                    let { props: e, prevProps: t } = this.node;
                    ["amount", "margin", "root"].some(
                        (function ({ viewport: e = {} }, { viewport: t = {} } = {}) {
                            return (i) => e[i] !== t[i];
                        })(e, t)
                    ) && this.startObserver();
                }
                unmount() { }
            }
            var t3 = i(67294),
                t4 = i(38057),
                t6 = i(50189),
                t8 = i(34242);
            let t9 = () => ({ min: 0, max: 0 }),
                t7 = () => ({ x: t9(), y: t9() });
            var ie = i(51804),
                it = i(11741);
            let ii = { current: null },
                is = { current: !1 };
            var ir = i(7504),
                ia = i(9442);
            let io = new WeakMap(),
                il = [...q, el, ev],
                iu = (e) => il.find(H(e)),
                ih = Object.keys(ia.A),
                id = ih.length,
                ip = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"],
                ic = p.V.length;
            class im {
                scrapeMotionValuesFromProps(e, t, i) {
                    return {};
                }
                constructor({ parent: e, props: t, presenceContext: i, reducedMotionConfig: s, blockInitialAnimation: r, visualState: n }, a = {}) {
                    (this.resolveKeyframes = (e, t, i, s) => new this.KeyframeResolver(e, t, i, s, this)),
                        (this.current = null),
                        (this.children = new Set()),
                        (this.isVariantNode = !1),
                        (this.isControllingVariants = !1),
                        (this.shouldReduceMotion = null),
                        (this.values = new Map()),
                        (this.KeyframeResolver = X),
                        (this.features = {}),
                        (this.valueSubscriptions = new Map()),
                        (this.prevMotionValues = {}),
                        (this.events = {}),
                        (this.propEventSubscriptions = {}),
                        (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
                        (this.render = () => {
                            this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
                        }),
                        (this.scheduleRender = () => M.Wi.render(this.render, !1, !0));
                    let { latestValues: o, renderState: l } = n;
                    (this.latestValues = o),
                        (this.baseTarget = { ...o }),
                        (this.initialValues = t.initial ? { ...o } : {}),
                        (this.renderState = l),
                        (this.parent = e),
                        (this.props = t),
                        (this.presenceContext = i),
                        (this.depth = e ? e.depth + 1 : 0),
                        (this.reducedMotionConfig = s),
                        (this.options = a),
                        (this.blockInitialAnimation = !!r),
                        (this.isControllingVariants = (0, ir.G)(t)),
                        (this.isVariantNode = (0, ir.M)(t)),
                        this.isVariantNode && (this.variantChildren = new Set()),
                        (this.manuallyAnimateOnMount = !!(e && e.current));
                    let { willChange: u, ...h } = this.scrapeMotionValuesFromProps(t, {}, this);
                    for (let e in h) {
                        let t = h[e];
                        void 0 !== o[e] && (0, tw.i)(t) && (t.set(o[e], !1), tP(u) && u.add(e));
                    }
                }
                mount(e) {
                    (this.current = e),
                        io.set(e, this),
                        this.projection && !this.projection.instance && this.projection.mount(e),
                        this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)),
                        this.values.forEach((e, t) => this.bindToMotionValue(t, e)),
                        is.current ||
                        (function () {
                            if (((is.current = !0), it.j)) {
                                if (window.matchMedia) {
                                    let e = window.matchMedia("(prefers-reduced-motion)"),
                                        t = () => (ii.current = e.matches);
                                    e.addListener(t), t();
                                } else ii.current = !1;
                            }
                        })(),
                        (this.shouldReduceMotion = "never" !== this.reducedMotionConfig && ("always" === this.reducedMotionConfig || ii.current)),
                        this.parent && this.parent.children.add(this),
                        this.update(this.props, this.presenceContext);
                }
                unmount() {
                    var e;
                    for (let e in (io.delete(this.current),
                        this.projection && this.projection.unmount(),
                        (0, M.Pn)(this.notifyUpdate),
                        (0, M.Pn)(this.render),
                        this.valueSubscriptions.forEach((e) => e()),
                        this.removeFromVariantTree && this.removeFromVariantTree(),
                        this.parent && this.parent.children.delete(this),
                        this.events))
                        this.events[e].clear();
                    for (let t in this.features) null === (e = this.features[t]) || void 0 === e || e.unmount();
                    this.current = null;
                }
                bindToMotionValue(e, t) {
                    let i = c.G.has(e),
                        s = t.on("change", (t) => {
                            (this.latestValues[e] = t), this.props.onUpdate && M.Wi.preRender(this.notifyUpdate), i && this.projection && (this.projection.isTransformDirty = !0);
                        }),
                        r = t.on("renderRequest", this.scheduleRender);
                    this.valueSubscriptions.set(e, () => {
                        s(), r(), t.owner && t.stop();
                    });
                }
                sortNodePosition(e) {
                    return this.current && this.sortInstanceNodePosition && this.type === e.type ? this.sortInstanceNodePosition(this.current, e.current) : 0;
                }
                loadFeatures({ children: e, ...t }, i, s, r) {
                    let n, a;
                    for (let e = 0; e < id; e++) {
                        let i = ih[e],
                            { isEnabled: s, Feature: r, ProjectionNode: o, MeasureLayout: l } = ia.A[i];
                        o && (n = o), s(t) && (!this.features[i] && r && (this.features[i] = new r(this)), l && (a = l));
                    }
                    if (("html" === this.type || "svg" === this.type) && !this.projection && n) {
                        this.projection = new n(
                            this.latestValues,
                            (function e(t) {
                                if (t) return !1 !== t.options.allowProjection ? t.projection : e(t.parent);
                            })(this.parent)
                        );
                        let { layoutId: e, layout: i, drag: s, dragConstraints: a, layoutScroll: o, layoutRoot: l } = t;
                        this.projection.setOptions({
                            layoutId: e,
                            layout: i,
                            alwaysMeasureLayout: !!s || (a && (0, ie.I)(a)),
                            visualElement: this,
                            scheduleRender: () => this.scheduleRender(),
                            animationType: "string" == typeof i ? i : "both",
                            initialPromotionConfig: r,
                            layoutScroll: o,
                            layoutRoot: l,
                        });
                    }
                    return a;
                }
                updateFeatures() {
                    for (let e in this.features) {
                        let t = this.features[e];
                        t.isMounted ? t.update() : (t.mount(), (t.isMounted = !0));
                    }
                }
                triggerBuild() {
                    this.build(this.renderState, this.latestValues, this.options, this.props);
                }
                measureViewportBox() {
                    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : t7();
                }
                getStaticValue(e) {
                    return this.latestValues[e];
                }
                setStaticValue(e, t) {
                    this.latestValues[e] = t;
                }
                update(e, t) {
                    (e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), (this.prevProps = this.props), (this.props = e), (this.prevPresenceContext = this.presenceContext), (this.presenceContext = t);
                    for (let t = 0; t < ip.length; t++) {
                        let i = ip[t];
                        this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](), delete this.propEventSubscriptions[i]);
                        let s = e["on" + i];
                        s && (this.propEventSubscriptions[i] = this.on(i, s));
                    }
                    (this.prevMotionValues = (function (e, t, i) {
                        let { willChange: s } = t;
                        for (let r in t) {
                            let n = t[r],
                                a = i[r];
                            if ((0, tw.i)(n)) e.addValue(r, n), tP(s) && s.add(r);
                            else if ((0, tw.i)(a)) e.addValue(r, tM(n, { owner: e })), tP(s) && s.remove(r);
                            else if (a !== n) {
                                if (e.hasValue(r)) {
                                    let t = e.getValue(r);
                                    !0 === t.liveStyle ? t.jump(n) : t.hasAnimated || t.set(n);
                                } else {
                                    let t = e.getStaticValue(r);
                                    e.addValue(r, tM(void 0 !== t ? t : n, { owner: e }));
                                }
                            }
                        }
                        for (let s in i) void 0 === t[s] && e.removeValue(s);
                        return t;
                    })(this, this.scrapeMotionValuesFromProps(e, this.prevProps, this), this.prevMotionValues)),
                        this.handleChildMotionValue && this.handleChildMotionValue();
                }
                getProps() {
                    return this.props;
                }
                getVariant(e) {
                    return this.props.variants ? this.props.variants[e] : void 0;
                }
                getDefaultTransition() {
                    return this.props.transition;
                }
                getTransformPagePoint() {
                    return this.props.transformPagePoint;
                }
                getClosestVariantNode() {
                    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
                }
                getVariantContext(e = !1) {
                    if (e) return this.parent ? this.parent.getVariantContext() : void 0;
                    if (!this.isControllingVariants) {
                        let e = (this.parent && this.parent.getVariantContext()) || {};
                        return void 0 !== this.props.initial && (e.initial = this.props.initial), e;
                    }
                    let t = {};
                    for (let e = 0; e < ic; e++) {
                        let i = p.V[e],
                            s = this.props[i];
                        ((0, u.$)(s) || !1 === s) && (t[i] = s);
                    }
                    return t;
                }
                addVariantChild(e) {
                    let t = this.getClosestVariantNode();
                    if (t) return t.variantChildren && t.variantChildren.add(e), () => t.variantChildren.delete(e);
                }
                addValue(e, t) {
                    let i = this.values.get(e);
                    t !== i && (i && this.removeValue(e), this.bindToMotionValue(e, t), this.values.set(e, t), (this.latestValues[e] = t.get()));
                }
                removeValue(e) {
                    this.values.delete(e);
                    let t = this.valueSubscriptions.get(e);
                    t && (t(), this.valueSubscriptions.delete(e)), delete this.latestValues[e], this.removeValueFromRenderState(e, this.renderState);
                }
                hasValue(e) {
                    return this.values.has(e);
                }
                getValue(e, t) {
                    if (this.props.values && this.props.values[e]) return this.props.values[e];
                    let i = this.values.get(e);
                    return void 0 === i && void 0 !== t && ((i = tM(null === t ? void 0 : t, { owner: this })), this.addValue(e, i)), i;
                }
                readValue(e, t) {
                    var i;
                    let s =
                        void 0 === this.latestValues[e] && this.current ? (null !== (i = this.getBaseTargetFromProps(this.props, e)) && void 0 !== i ? i : this.readValueFromInstance(this.current, e, this.options)) : this.latestValues[e];
                    return null != s && ("string" == typeof s && (R(s) || k(s)) ? (s = parseFloat(s)) : !iu(s) && ev.test(t) && (s = eS(e, t)), this.setBaseTarget(e, (0, tw.i)(s) ? s.get() : s)), (0, tw.i)(s) ? s.get() : s;
                }
                setBaseTarget(e, t) {
                    this.baseTarget[e] = t;
                }
                getBaseTarget(e) {
                    var t;
                    let i;
                    let { initial: s } = this.props;
                    if ("string" == typeof s || "object" == typeof s) {
                        let r = (0, h.o)(this.props, s, null === (t = this.presenceContext) || void 0 === t ? void 0 : t.custom);
                        r && (i = r[e]);
                    }
                    if (s && void 0 !== i) return i;
                    let r = this.getBaseTargetFromProps(this.props, e);
                    return void 0 === r || (0, tw.i)(r) ? (void 0 !== this.initialValues[e] && void 0 === i ? void 0 : this.baseTarget[e]) : r;
                }
                on(e, t) {
                    return this.events[e] || (this.events[e] = new tS()), this.events[e].add(t);
                }
                notify(e, ...t) {
                    this.events[e] && this.events[e].notify(...t);
                }
            }
            class iv extends im {
                constructor() {
                    super(...arguments), (this.KeyframeResolver = eT);
                }
                sortInstanceNodePosition(e, t) {
                    return 2 & e.compareDocumentPosition(t) ? 1 : -1;
                }
                getBaseTargetFromProps(e, t) {
                    return e.style ? e.style[t] : void 0;
                }
                removeValueFromRenderState(e, { vars: t, style: i }) {
                    delete t[e], delete i[e];
                }
            }
            class ig extends iv {
                constructor() {
                    super(...arguments), (this.type = "html");
                }
                readValueFromInstance(e, t) {
                    if (c.G.has(t)) {
                        let e = eV(t);
                        return (e && e.default) || 0;
                    }
                    {
                        let i = window.getComputedStyle(e),
                            s = ((0, I.f)(t) ? i.getPropertyValue(t) : i[t]) || 0;
                        return "string" == typeof s ? s.trim() : s;
                    }
                }
                measureInstanceViewportBox(e, { transformPagePoint: t }) {
                    return (function ({ top: e, left: t, right: i, bottom: s }) {
                        return { x: { min: t, max: i }, y: { min: e, max: s } };
                    })(
                        (function (e, t) {
                            if (!t) return e;
                            let i = t({ x: e.left, y: e.top }),
                                s = t({ x: e.right, y: e.bottom });
                            return { top: i.y, left: i.x, bottom: s.y, right: s.x };
                        })(e.getBoundingClientRect(), t)
                    );
                }
                build(e, t, i, s) {
                    (0, t4.r)(e, t, i, s.transformTemplate);
                }
                scrapeMotionValuesFromProps(e, t, i) {
                    return (0, t6.U)(e, t, i);
                }
                handleChildMotionValue() {
                    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
                    let { children: e } = this.props;
                    (0, tw.i)(e) &&
                        (this.childSubscription = e.on("change", (e) => {
                            this.current && (this.current.textContent = `${e}`);
                        }));
                }
                renderInstance(e, t, i, s) {
                    (0, t8.N)(e, t, i, s);
                }
            }
            var iy = i(16832),
                ib = i(85415),
                iw = i(93193),
                iP = i(77302),
                iV = i(68504),
                iS = i(79854);
            class iA extends iv {
                constructor() {
                    super(...arguments), (this.type = "svg"), (this.isSVGTag = !1);
                }
                getBaseTargetFromProps(e, t) {
                    return e[t];
                }
                readValueFromInstance(e, t) {
                    if (c.G.has(t)) {
                        let e = eV(t);
                        return (e && e.default) || 0;
                    }
                    return (t = iP.s.has(t) ? t : (0, iw.D)(t)), e.getAttribute(t);
                }
                measureInstanceViewportBox() {
                    return t7();
                }
                scrapeMotionValuesFromProps(e, t, i) {
                    return (0, iy.U)(e, t, i);
                }
                build(e, t, i, s) {
                    (0, ib.i)(e, t, i, this.isSVGTag, s.transformTemplate);
                }
                renderInstance(e, t, i, s) {
                    (0, iV.K)(e, t, i, s);
                }
                mount(e) {
                    (this.isSVGTag = (0, iS.a)(e.tagName)), super.mount(e);
                }
            }
            var iT = i(62627);
            let ix = {
                renderer: (e, t) => ((0, iT.q)(e) ? new iA(t, { enableHardwareAcceleration: !1 }) : new ig(t, { allowProjection: e !== t3.Fragment, enableHardwareAcceleration: !0 })),
                animation: { Feature: tO },
                exit: { Feature: tj },
                inView: { Feature: t5 },
                tap: { Feature: tQ },
                focus: { Feature: tZ },
                hover: { Feature: tG },
            };
        },
        45487: function (e, t, i) {
            i.d(t, {
                K: function () {
                    return r;
                },
                k: function () {
                    return n;
                },
            });
            var s = i(81662);
            let r = s.Z,
                n = s.Z;
        },
    },
]);



// "use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8709],{48709:function(e,t,i){let s,r;i.d(t,{H:function(){return ix}});var n,a=i(2445),o=i(48488);function l(e,t){if(!Array.isArray(t))return!1;let i=t.length;if(i!==e.length)return!1;for(let s=0;s<i;s++)if(t[s]!==e[s])return!1;return!0}var u=i(97732),h=i(79432);function d(e,t,i){let s=e.getProps();return(0,h.o)(s,t,void 0!==i?i:s.custom,function(e){let t={};return e.values.forEach((e,i)=>t[i]=e.get()),t}(e),function(e){let t={};return e.values.forEach((e,i)=>t[i]=e.getVelocity()),t}(e))}var p=i(22963),c=i(94714),m=i(68588);let f=e=>1e3*e,v=e=>e/1e3,g={type:"spring",stiffness:500,damping:25,restSpeed:10},y=e=>({type:"spring",stiffness:550,damping:0===e?2*Math.sqrt(550):30,restSpeed:10}),b={type:"keyframes",duration:.8},w={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},P=(e,{keyframes:t})=>t.length>2?b:c.G.has(e)?e.startsWith("scale")?y(t[1]):g:w;function V(e,t){return e[t]||e.default||e}var S=i(22081);let A={current:!1},T=e=>null!==e;function x(e,{repeat:t,repeatType:i="loop"},s){let r=e.filter(T),n=t&&"loop"!==i&&t%2==1?0:r.length-1;return n&&void 0!==s?s:r[n]}var M=i(26166);function C(){s=void 0}let F={now:()=>(void 0===s&&F.set(M.w0.isProcessing||S.c.useManualTiming?M.w0.timestamp:performance.now()),s),set:e=>{s=e,queueMicrotask(C)}},k=e=>/^0[^.\s]+$/u.test(e);var E=i(45487);let R=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);var I=i(57630);let N=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;var O=i(61649),K=i(96190);let j=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),$=e=>e===O.Rx||e===K.px,D=(e,t)=>parseFloat(e.split(", ")[t]),L=(e,t)=>(i,{transform:s})=>{if("none"===s||!s)return 0;let r=s.match(/^matrix3d\((.+)\)$/u);if(r)return D(r[1],t);{let t=s.match(/^matrix\((.+)\)$/u);return t?D(t[1],e):0}},W=new Set(["x","y","z"]),B=c._.filter(e=>!W.has(e)),U={width:({x:e},{paddingLeft:t="0",paddingRight:i="0"})=>e.max-e.min-parseFloat(t)-parseFloat(i),height:({y:e},{paddingTop:t="0",paddingBottom:i="0"})=>e.max-e.min-parseFloat(t)-parseFloat(i),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:L(4,13),y:L(5,14)};U.translateX=U.x,U.translateY=U.y;let H=e=>t=>t.test(e),q=[O.Rx,K.px,K.aQ,K.RW,K.vw,K.vh,{test:e=>"auto"===e,parse:e=>e}],z=e=>q.find(H(e)),G=new Set,Z=!1,_=!1;function Y(){if(_){let e=Array.from(G).filter(e=>e.needsMeasurement),t=new Set(e.map(e=>e.element)),i=new Map;t.forEach(e=>{let t=function(e){let t=[];return B.forEach(i=>{let s=e.getValue(i);void 0!==s&&(t.push([i,s.get()]),s.set(i.startsWith("scale")?1:0))}),t}(e);t.length&&(i.set(e,t),e.render())}),e.forEach(e=>e.measureInitialState()),t.forEach(e=>{e.render();let t=i.get(e);t&&t.forEach(([t,i])=>{var s;null===(s=e.getValue(t))||void 0===s||s.set(i)})}),e.forEach(e=>e.measureEndState()),e.forEach(e=>{void 0!==e.suspendedScrollY&&window.scrollTo(0,e.suspendedScrollY)})}_=!1,Z=!1,G.forEach(e=>e.complete()),G.clear()}function Q(){G.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(_=!0)})}class X{constructor(e,t,i,s,r,n=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=i,this.motionValue=s,this.element=r,this.isAsync=n}scheduleResolve(){this.isScheduled=!0,this.isAsync?(G.add(this),Z||(Z=!0,M.Wi.read(Q),M.Wi.resolveKeyframes(Y))):(this.readKeyframes(),this.complete())}readKeyframes(){let{unresolvedKeyframes:e,name:t,element:i,motionValue:s}=this;for(let r=0;r<e.length;r++)if(null===e[r]){if(0===r){let r=null==s?void 0:s.get(),n=e[e.length-1];if(void 0!==r)e[0]=r;else if(i&&t){let s=i.readValue(t,n);null!=s&&(e[0]=s)}void 0===e[0]&&(e[0]=n),s&&void 0===r&&s.set(e[0])}else e[r]=e[r-1]}}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),G.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,G.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}var J=i(36430),ee=i(24169);let et=(e,t)=>i=>!!((0,J.HD)(i)&&J.mj.test(i)&&i.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(i,t)),ei=(e,t,i)=>s=>{if(!(0,J.HD)(s))return s;let[r,n,a,o]=s.match(J.KP);return{[e]:parseFloat(r),[t]:parseFloat(n),[i]:parseFloat(a),alpha:void 0!==o?parseFloat(o):1}},es=e=>(0,ee.u)(0,255,e),er={...O.Rx,transform:e=>Math.round(es(e))},en={test:et("rgb","red"),parse:ei("red","green","blue"),transform:({red:e,green:t,blue:i,alpha:s=1})=>"rgba("+er.transform(e)+", "+er.transform(t)+", "+er.transform(i)+", "+(0,J.Nw)(O.Fq.transform(s))+")"},ea={test:et("#"),parse:function(e){let t="",i="",s="",r="";return e.length>5?(t=e.substring(1,3),i=e.substring(3,5),s=e.substring(5,7),r=e.substring(7,9)):(t=e.substring(1,2),i=e.substring(2,3),s=e.substring(3,4),r=e.substring(4,5),t+=t,i+=i,s+=s,r+=r),{red:parseInt(t,16),green:parseInt(i,16),blue:parseInt(s,16),alpha:r?parseInt(r,16)/255:1}},transform:en.transform},eo={test:et("hsl","hue"),parse:ei("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:i,alpha:s=1})=>"hsla("+Math.round(e)+", "+K.aQ.transform((0,J.Nw)(t))+", "+K.aQ.transform((0,J.Nw)(i))+", "+(0,J.Nw)(O.Fq.transform(s))+")"},el={test:e=>en.test(e)||ea.test(e)||eo.test(e),parse:e=>en.test(e)?en.parse(e):eo.test(e)?eo.parse(e):ea.parse(e),transform:e=>(0,J.HD)(e)?e:e.hasOwnProperty("red")?en.transform(e):eo.transform(e)},eu="number",eh="color",ed=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function ep(e){let t=e.toString(),i=[],s={color:[],number:[],var:[]},r=[],n=0,a=t.replace(ed,e=>(el.test(e)?(s.color.push(n),r.push(eh),i.push(el.parse(e))):e.startsWith("var(")?(s.var.push(n),r.push("var"),i.push(e)):(s.number.push(n),r.push(eu),i.push(parseFloat(e))),++n,"${}")).split("${}");return{values:i,split:a,indexes:s,types:r}}function ec(e){return ep(e).values}function em(e){let{split:t,types:i}=ep(e),s=t.length;return e=>{let r="";for(let n=0;n<s;n++)if(r+=t[n],void 0!==e[n]){let t=i[n];t===eu?r+=(0,J.Nw)(e[n]):t===eh?r+=el.transform(e[n]):r+=e[n]}return r}}let ef=e=>"number"==typeof e?0:e,ev={test:function(e){var t,i;return isNaN(e)&&(0,J.HD)(e)&&((null===(t=e.match(J.KP))||void 0===t?void 0:t.length)||0)+((null===(i=e.match(J.dA))||void 0===i?void 0:i.length)||0)>0},parse:ec,createTransformer:em,getAnimatableNone:function(e){let t=ec(e);return em(e)(t.map(ef))}},eg=new Set(["brightness","contrast","saturate","opacity"]);function ey(e){let[t,i]=e.slice(0,-1).split("(");if("drop-shadow"===t)return e;let[s]=i.match(J.KP)||[];if(!s)return e;let r=i.replace(s,""),n=eg.has(t)?1:0;return s!==i&&(n*=100),t+"("+n+r+")"}let eb=/\b([a-z-]*)\(.*?\)/gu,ew={...ev,getAnimatableNone:e=>{let t=e.match(eb);return t?t.map(ey).join(" "):e}},eP={...i(36173).j,color:el,backgroundColor:el,outlineColor:el,fill:el,stroke:el,borderColor:el,borderTopColor:el,borderRightColor:el,borderBottomColor:el,borderLeftColor:el,filter:ew,WebkitFilter:ew},eV=e=>eP[e];function eS(e,t){let i=eV(e);return i!==ew&&(i=ev),i.getAnimatableNone?i.getAnimatableNone(t):void 0}let eA=new Set(["auto","none","0"]);class eT extends X{constructor(e,t,i,s){super(e,t,i,s,null==s?void 0:s.owner,!0)}readKeyframes(){let{unresolvedKeyframes:e,element:t,name:i}=this;if(!t.current)return;super.readKeyframes();for(let i=0;i<e.length;i++){let s=e[i];if("string"==typeof s&&(0,I.t)(s)){let r=function e(t,i,s=1){(0,E.k)(s<=4,`Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`);let[r,n]=function(e){let t=N.exec(e);if(!t)return[,];let[,i,s,r]=t;return[`--${null!=i?i:s}`,r]}(t);if(!r)return;let a=window.getComputedStyle(i).getPropertyValue(r);if(a){let e=a.trim();return R(e)?parseFloat(e):e}return(0,I.t)(n)?e(n,i,s+1):n}(s,t.current);void 0!==r&&(e[i]=r),i===e.length-1&&(this.finalKeyframe=s)}}if(this.resolveNoneKeyframes(),!j.has(i)||2!==e.length)return;let[s,r]=e,n=z(s),a=z(r);if(n!==a){if($(n)&&$(a))for(let t=0;t<e.length;t++){let i=e[t];"string"==typeof i&&(e[t]=parseFloat(i))}else this.needsMeasurement=!0}}resolveNoneKeyframes(){let{unresolvedKeyframes:e,name:t}=this,i=[];for(let t=0;t<e.length;t++){var s;("number"==typeof(s=e[t])?0===s:null===s||"none"===s||"0"===s||k(s))&&i.push(t)}i.length&&function(e,t,i){let s,r=0;for(;r<e.length&&!s;){let t=e[r];"string"==typeof t&&!eA.has(t)&&ep(t).values.length&&(s=e[r]),r++}if(s&&i)for(let r of t)e[r]=eS(i,s)}(e,i,t)}measureInitialState(){let{element:e,unresolvedKeyframes:t,name:i}=this;if(!e.current)return;"height"===i&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=U[i](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;let s=t[t.length-1];void 0!==s&&e.getValue(i,s).jump(s,!1)}measureEndState(){var e;let{element:t,name:i,unresolvedKeyframes:s}=this;if(!t.current)return;let r=t.getValue(i);r&&r.jump(this.measuredOrigin,!1);let n=s.length-1,a=s[n];s[n]=U[i](t.measureViewportBox(),window.getComputedStyle(t.current)),null!==a&&void 0===this.finalKeyframe&&(this.finalKeyframe=a),(null===(e=this.removedTransforms)||void 0===e?void 0:e.length)&&this.removedTransforms.forEach(([e,i])=>{t.getValue(e).set(i)}),this.resolveNoneKeyframes()}}var ex=i(81662);let eM=(e,t)=>"zIndex"!==t&&!!("number"==typeof e||Array.isArray(e)||"string"==typeof e&&(ev.test(e)||"0"===e)&&!e.startsWith("url("));class eC{constructor({autoplay:e=!0,delay:t=0,type:i="keyframes",repeat:s=0,repeatDelay:r=0,repeatType:n="loop",...a}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.options={autoplay:e,delay:t,type:i,repeat:s,repeatDelay:r,repeatType:n,...a},this.updateFinishedPromise()}get resolved(){return this._resolved||this.hasAttemptedResolve||(Q(),Y()),this._resolved}onKeyframesResolved(e,t){this.hasAttemptedResolve=!0;let{name:i,type:s,velocity:r,delay:n,onComplete:a,onUpdate:o,isGenerator:l}=this.options;if(!l&&!function(e,t,i,s){let r=e[0];if(null===r)return!1;if("display"===t||"visibility"===t)return!0;let n=e[e.length-1],a=eM(r,t),o=eM(n,t);return(0,E.K)(a===o,`You are trying to animate ${t} from "${r}" to "${n}". ${r} is not an animatable value - to enable this animation set ${r} to a value animatable to ${n} via the \`style\` property.`),!!a&&!!o&&(function(e){let t=e[0];if(1===e.length)return!0;for(let i=0;i<e.length;i++)if(e[i]!==t)return!0}(e)||"spring"===i&&s)}(e,i,s,r)){if(A.current||!n){null==o||o(x(e,this.options,t)),null==a||a(),this.resolveFinishedPromise();return}this.options.duration=0}let u=this.initPlayback(e,t);!1!==u&&(this._resolved={keyframes:e,finalKeyframe:t,...u},this.onPostResolved())}onPostResolved(){}then(e,t){return this.currentFinishedPromise.then(e,t)}updateFinishedPromise(){this.currentFinishedPromise=new Promise(e=>{this.resolveFinishedPromise=e})}}function eF(e,t,i){var s,r;let n=Math.max(t-5,0);return s=i-e(n),(r=t-n)?1e3/r*s:0}function ek(e,t){return e*Math.sqrt(1-t*t)}let eE=["duration","bounce"],eR=["stiffness","damping","mass"];function eI(e,t){return t.some(t=>void 0!==e[t])}function eN({keyframes:e,restDelta:t,restSpeed:i,...s}){let r;let n=e[0],a=e[e.length-1],o={done:!1,value:n},{stiffness:l,damping:u,mass:h,duration:d,velocity:p,isResolvedFromDuration:c}=function(e){let t={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...e};if(!eI(e,eR)&&eI(e,eE)){let i=function({duration:e=800,bounce:t=.25,velocity:i=0,mass:s=1}){let r,n;(0,E.K)(e<=f(10),"Spring duration must be 10 seconds or less");let a=1-t;a=(0,ee.u)(.05,1,a),e=(0,ee.u)(.01,10,v(e)),a<1?(r=t=>{let s=t*a,r=s*e;return .001-(s-i)/ek(t,a)*Math.exp(-r)},n=t=>{let s=t*a*e,n=Math.pow(a,2)*Math.pow(t,2)*e,o=ek(Math.pow(t,2),a);return(s*i+i-n)*Math.exp(-s)*(-r(t)+.001>0?-1:1)/o}):(r=t=>-.001+Math.exp(-t*e)*((t-i)*e+1),n=t=>e*e*(i-t)*Math.exp(-t*e));let o=function(e,t,i){let s=i;for(let i=1;i<12;i++)s-=e(s)/t(s);return s}(r,n,5/e);if(e=f(e),isNaN(o))return{stiffness:100,damping:10,duration:e};{let t=Math.pow(o,2)*s;return{stiffness:t,damping:2*a*Math.sqrt(s*t),duration:e}}}(e);(t={...t,...i,mass:1}).isResolvedFromDuration=!0}return t}({...s,velocity:-v(s.velocity||0)}),m=p||0,g=u/(2*Math.sqrt(l*h)),y=a-n,b=v(Math.sqrt(l/h)),w=5>Math.abs(y);if(i||(i=w?.01:2),t||(t=w?.005:.5),g<1){let e=ek(b,g);r=t=>a-Math.exp(-g*b*t)*((m+g*b*y)/e*Math.sin(e*t)+y*Math.cos(e*t))}else if(1===g)r=e=>a-Math.exp(-b*e)*(y+(m+b*y)*e);else{let e=b*Math.sqrt(g*g-1);r=t=>{let i=Math.exp(-g*b*t),s=Math.min(e*t,300);return a-i*((m+g*b*y)*Math.sinh(s)+e*y*Math.cosh(s))/e}}return{calculatedDuration:c&&d||null,next:e=>{let s=r(e);if(c)o.done=e>=d;else{let n=m;0!==e&&(n=g<1?eF(r,e,s):0);let l=Math.abs(n)<=i,u=Math.abs(a-s)<=t;o.done=l&&u}return o.value=o.done?a:s,o}}}function eO({keyframes:e,velocity:t=0,power:i=.8,timeConstant:s=325,bounceDamping:r=10,bounceStiffness:n=500,modifyTarget:a,min:o,max:l,restDelta:u=.5,restSpeed:h}){let d,p;let c=e[0],m={done:!1,value:c},f=e=>void 0!==o&&e<o||void 0!==l&&e>l,v=e=>void 0===o?l:void 0===l?o:Math.abs(o-e)<Math.abs(l-e)?o:l,g=i*t,y=c+g,b=void 0===a?y:a(y);b!==y&&(g=b-c);let w=e=>-g*Math.exp(-e/s),P=e=>b+w(e),V=e=>{let t=w(e),i=P(e);m.done=Math.abs(t)<=u,m.value=m.done?b:i},S=e=>{f(m.value)&&(d=e,p=eN({keyframes:[m.value,v(m.value)],velocity:eF(P,e,m.value),damping:r,stiffness:n,restDelta:u,restSpeed:h}))};return S(0),{calculatedDuration:null,next:e=>{let t=!1;return(p||void 0!==d||(t=!0,V(e),S(e)),void 0!==d&&e>=d)?p.next(e-d):(t||V(e),m)}}}let eK=(e,t,i)=>(((1-3*i+3*t)*e+(3*i-6*t))*e+3*t)*e;function ej(e,t,i,s){if(e===t&&i===s)return ex.Z;let r=t=>(function(e,t,i,s,r){let n,a;let o=0;do(n=eK(a=t+(i-t)/2,s,r)-e)>0?i=a:t=a;while(Math.abs(n)>1e-7&&++o<12);return a})(t,0,1,e,i);return e=>0===e||1===e?e:eK(r(e),t,s)}let e$=ej(.42,0,1,1),eD=ej(0,0,.58,1),eL=ej(.42,0,.58,1),eW=e=>Array.isArray(e)&&"number"!=typeof e[0],eB=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,eU=e=>t=>1-e(1-t),eH=e=>1-Math.sin(Math.acos(e)),eq=eU(eH),ez=eB(eH),eG=ej(.33,1.53,.69,.99),eZ=eU(eG),e_=eB(eZ),eY={linear:ex.Z,easeIn:e$,easeInOut:eL,easeOut:eD,circIn:eH,circInOut:ez,circOut:eq,backIn:eZ,backInOut:e_,backOut:eG,anticipate:e=>(e*=2)<1?.5*eZ(e):.5*(2-Math.pow(2,-10*(e-1)))},eQ=e=>{if(Array.isArray(e)){(0,E.k)(4===e.length,"Cubic bezier arrays must contain four numerical values.");let[t,i,s,r]=e;return ej(t,i,s,r)}return"string"==typeof e?((0,E.k)(void 0!==eY[e],`Invalid easing type '${e}'`),eY[e]):e},eX=(e,t)=>i=>t(e(i)),eJ=(...e)=>e.reduce(eX),e0=(e,t,i)=>{let s=t-e;return 0===s?1:(i-e)/s},e1=(e,t,i)=>e+(t-e)*i;function e2(e,t,i){return(i<0&&(i+=1),i>1&&(i-=1),i<1/6)?e+(t-e)*6*i:i<.5?t:i<2/3?e+(t-e)*(2/3-i)*6:e}let e5=(e,t,i)=>{let s=e*e,r=i*(t*t-s)+s;return r<0?0:Math.sqrt(r)},e3=[ea,en,eo],e4=e=>e3.find(t=>t.test(e));function e6(e){let t=e4(e);(0,E.k)(!!t,`'${e}' is not an animatable color. Use the equivalent color code instead.`);let i=t.parse(e);return t===eo&&(i=function({hue:e,saturation:t,lightness:i,alpha:s}){e/=360,i/=100;let r=0,n=0,a=0;if(t/=100){let s=i<.5?i*(1+t):i+t-i*t,o=2*i-s;r=e2(o,s,e+1/3),n=e2(o,s,e),a=e2(o,s,e-1/3)}else r=n=a=i;return{red:Math.round(255*r),green:Math.round(255*n),blue:Math.round(255*a),alpha:s}}(i)),i}let e8=(e,t)=>{let i=e6(e),s=e6(t),r={...i};return e=>(r.red=e5(i.red,s.red,e),r.green=e5(i.green,s.green,e),r.blue=e5(i.blue,s.blue,e),r.alpha=e1(i.alpha,s.alpha,e),en.transform(r))},e9=new Set(["none","hidden"]);function e7(e,t){return i=>i>0?t:e}function te(e,t){return i=>e1(e,t,i)}function tt(e){return"number"==typeof e?te:"string"==typeof e?(0,I.t)(e)?e7:el.test(e)?e8:tr:Array.isArray(e)?ti:"object"==typeof e?el.test(e)?e8:ts:e7}function ti(e,t){let i=[...e],s=i.length,r=e.map((e,i)=>tt(e)(e,t[i]));return e=>{for(let t=0;t<s;t++)i[t]=r[t](e);return i}}function ts(e,t){let i={...e,...t},s={};for(let r in i)void 0!==e[r]&&void 0!==t[r]&&(s[r]=tt(e[r])(e[r],t[r]));return e=>{for(let t in s)i[t]=s[t](e);return i}}let tr=(e,t)=>{let i=ev.createTransformer(t),s=ep(e),r=ep(t);return s.indexes.var.length===r.indexes.var.length&&s.indexes.color.length===r.indexes.color.length&&s.indexes.number.length>=r.indexes.number.length?e9.has(e)&&!r.values.length||e9.has(t)&&!s.values.length?e9.has(e)?i=>i<=0?e:t:i=>i>=1?t:e:eJ(ti(function(e,t){var i;let s=[],r={color:0,var:0,number:0};for(let n=0;n<t.values.length;n++){let a=t.types[n],o=e.indexes[a][r[a]],l=null!==(i=e.values[o])&&void 0!==i?i:0;s[n]=l,r[a]++}return s}(s,r),r.values),i):((0,E.K)(!0,`Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`),e7(e,t))};function tn(e,t,i){return"number"==typeof e&&"number"==typeof t&&"number"==typeof i?e1(e,t,i):tt(e)(e,t)}function ta({duration:e=300,keyframes:t,times:i,ease:s="easeInOut"}){let r=eW(s)?s.map(eQ):eQ(s),n={done:!1,value:t[0]},a=function(e,t,{clamp:i=!0,ease:s,mixer:r}={}){let n=e.length;if((0,E.k)(n===t.length,"Both input and output ranges must be the same length"),1===n)return()=>t[0];if(2===n&&e[0]===e[1])return()=>t[1];e[0]>e[n-1]&&(e=[...e].reverse(),t=[...t].reverse());let a=function(e,t,i){let s=[],r=i||tn,n=e.length-1;for(let i=0;i<n;i++){let n=r(e[i],e[i+1]);t&&(n=eJ(Array.isArray(t)?t[i]||ex.Z:t,n)),s.push(n)}return s}(t,s,r),o=a.length,l=t=>{let i=0;if(o>1)for(;i<e.length-2&&!(t<e[i+1]);i++);let s=e0(e[i],e[i+1],t);return a[i](s)};return i?t=>l((0,ee.u)(e[0],e[n-1],t)):l}((i&&i.length===t.length?i:function(e){let t=[0];return function(e,t){let i=e[e.length-1];for(let s=1;s<=t;s++){let r=e0(0,t,s);e.push(e1(i,1,r))}}(t,e.length-1),t}(t)).map(t=>t*e),t,{ease:Array.isArray(r)?r:t.map(()=>r||eL).splice(0,t.length-1)});return{calculatedDuration:e,next:t=>(n.value=a(t),n.done=t>=e,n)}}let to=e=>{let t=({timestamp:t})=>e(t);return{start:()=>M.Wi.update(t,!0),stop:()=>(0,M.Pn)(t),now:()=>M.w0.isProcessing?M.w0.timestamp:F.now()}},tl={decay:eO,inertia:eO,tween:ta,keyframes:ta,spring:eN},tu=e=>e/100;class th extends eC{constructor({KeyframeResolver:e=X,...t}){super(t),this.holdTime=null,this.startTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,"idle"===this.state)return;this.teardown();let{onStop:e}=this.options;e&&e()};let{name:i,motionValue:s,keyframes:r}=this.options,n=(e,t)=>this.onKeyframesResolved(e,t);i&&s&&s.owner?this.resolver=s.owner.resolveKeyframes(r,n,i,s):this.resolver=new e(r,n,i,s),this.resolver.scheduleResolve()}initPlayback(e){let t,i;let{type:s="keyframes",repeat:r=0,repeatDelay:n=0,repeatType:a,velocity:o=0}=this.options,l=tl[s]||ta;l!==ta&&"number"!=typeof e[0]&&(t=eJ(tu,tn(e[0],e[1])),e=[0,100]);let u=l({...this.options,keyframes:e});"mirror"===a&&(i=l({...this.options,keyframes:[...e].reverse(),velocity:-o})),null===u.calculatedDuration&&(u.calculatedDuration=function(e){let t=0,i=e.next(t);for(;!i.done&&t<2e4;)t+=50,i=e.next(t);return t>=2e4?1/0:t}(u));let{calculatedDuration:h}=u,d=h+n;return{generator:u,mirroredGenerator:i,mapPercentToKeyframes:t,calculatedDuration:h,resolvedDuration:d,totalDuration:d*(r+1)-n}}onPostResolved(){let{autoplay:e=!0}=this.options;this.play(),"paused"!==this.pendingPlayState&&e?this.state=this.pendingPlayState:this.pause()}tick(e,t=!1){let{resolved:i}=this;if(!i){let{keyframes:e}=this.options;return{done:!0,value:e[e.length-1]}}let{finalKeyframe:s,generator:r,mirroredGenerator:n,mapPercentToKeyframes:a,keyframes:o,calculatedDuration:l,totalDuration:u,resolvedDuration:h}=i;if(null===this.startTime)return r.next(0);let{delay:d,repeat:p,repeatType:c,repeatDelay:m,onUpdate:f}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-u/this.speed,this.startTime)),t?this.currentTime=e:null!==this.holdTime?this.currentTime=this.holdTime:this.currentTime=Math.round(e-this.startTime)*this.speed;let v=this.currentTime-d*(this.speed>=0?1:-1),g=this.speed>=0?v<0:v>u;this.currentTime=Math.max(v,0),"finished"===this.state&&null===this.holdTime&&(this.currentTime=u);let y=this.currentTime,b=r;if(p){let e=Math.min(this.currentTime,u)/h,t=Math.floor(e),i=e%1;!i&&e>=1&&(i=1),1===i&&t--,(t=Math.min(t,p+1))%2&&("reverse"===c?(i=1-i,m&&(i-=m/h)):"mirror"===c&&(b=n)),y=(0,ee.u)(0,1,i)*h}let w=g?{done:!1,value:o[0]}:b.next(y);a&&(w.value=a(w.value));let{done:P}=w;g||null===l||(P=this.speed>=0?this.currentTime>=u:this.currentTime<=0);let V=null===this.holdTime&&("finished"===this.state||"running"===this.state&&P);return V&&void 0!==s&&(w.value=x(o,this.options,s)),f&&f(w.value),V&&this.finish(),w}get duration(){let{resolved:e}=this;return e?v(e.calculatedDuration):0}get time(){return v(this.currentTime)}set time(e){e=f(e),this.currentTime=e,null!==this.holdTime||0===this.speed?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.speed)}get speed(){return this.playbackSpeed}set speed(e){let t=this.playbackSpeed!==e;this.playbackSpeed=e,t&&(this.time=v(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;let{driver:e=to,onPlay:t}=this.options;this.driver||(this.driver=e(e=>this.tick(e))),t&&t();let i=this.driver.now();null!==this.holdTime?this.startTime=i-this.holdTime:this.startTime&&"finished"!==this.state||(this.startTime=i),"finished"===this.state&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var e;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=null!==(e=this.currentTime)&&void 0!==e?e:0}complete(){"running"!==this.state&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";let{onComplete:e}=this.options;e&&e()}cancel(){null!==this.cancelTime&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}}let td=e=>Array.isArray(e)&&"number"==typeof e[0],tp=([e,t,i,s])=>`cubic-bezier(${e}, ${t}, ${i}, ${s})`,tc={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:tp([0,.65,.55,1]),circOut:tp([.55,0,1,.45]),backIn:tp([.31,.01,.66,-.59]),backOut:tp([.33,1.53,.69,.99])};function tm(e){return tf(e)||tc.easeOut}function tf(e){if(e)return td(e)?tp(e):Array.isArray(e)?e.map(tm):tc[e]}let tv=(n=()=>Object.hasOwnProperty.call(Element.prototype,"animate"),()=>(void 0===r&&(r=n()),r)),tg=new Set(["opacity","clipPath","filter","transform"]);class ty extends eC{constructor(e){super(e);let{name:t,motionValue:i,keyframes:s}=this.options;this.resolver=new eT(s,(e,t)=>this.onKeyframesResolved(e,t),t,i),this.resolver.scheduleResolve()}initPlayback(e,t){var i,s;let{duration:r=300,times:n,ease:a,type:o,motionValue:l,name:u}=this.options;if(!(null===(i=l.owner)||void 0===i?void 0:i.current))return!1;if("spring"===(s=this.options).type||"backgroundColor"===s.name||!function e(t){return!!(!t||"string"==typeof t&&t in tc||td(t)||Array.isArray(t)&&t.every(e))}(s.ease)){let{onComplete:t,onUpdate:i,motionValue:s,...l}=this.options,u=function(e,t){let i=new th({...t,keyframes:e,repeat:0,delay:0,isGenerator:!0}),s={done:!1,value:e[0]},r=[],n=0;for(;!s.done&&n<2e4;)r.push((s=i.sample(n)).value),n+=10;return{times:void 0,keyframes:r,duration:n-10,ease:"linear"}}(e,l);1===(e=u.keyframes).length&&(e[1]=e[0]),r=u.duration,n=u.times,a=u.ease,o="keyframes"}let h=function(e,t,i,{delay:s=0,duration:r=300,repeat:n=0,repeatType:a="loop",ease:o,times:l}={}){let u={[t]:i};l&&(u.offset=l);let h=tf(o);return Array.isArray(h)&&(u.easing=h),e.animate(u,{delay:s,duration:r,easing:Array.isArray(h)?"linear":h,fill:"both",iterations:n+1,direction:"reverse"===a?"alternate":"normal"})}(l.owner.current,u,e,{...this.options,duration:r,times:n,ease:a});return h.startTime=F.now(),this.pendingTimeline?(h.timeline=this.pendingTimeline,this.pendingTimeline=void 0):h.onfinish=()=>{let{onComplete:i}=this.options;l.set(x(e,this.options,t)),i&&i(),this.cancel(),this.resolveFinishedPromise()},{animation:h,duration:r,times:n,type:o,ease:a,keyframes:e}}get duration(){let{resolved:e}=this;if(!e)return 0;let{duration:t}=e;return v(t)}get time(){let{resolved:e}=this;if(!e)return 0;let{animation:t}=e;return v(t.currentTime||0)}set time(e){let{resolved:t}=this;if(!t)return;let{animation:i}=t;i.currentTime=f(e)}get speed(){let{resolved:e}=this;if(!e)return 1;let{animation:t}=e;return t.playbackRate}set speed(e){let{resolved:t}=this;if(!t)return;let{animation:i}=t;i.playbackRate=e}get state(){let{resolved:e}=this;if(!e)return"idle";let{animation:t}=e;return t.playState}attachTimeline(e){if(this._resolved){let{resolved:t}=this;if(!t)return ex.Z;let{animation:i}=t;i.timeline=e,i.onfinish=null}else this.pendingTimeline=e;return ex.Z}play(){if(this.isStopped)return;let{resolved:e}=this;if(!e)return;let{animation:t}=e;"finished"===t.playState&&this.updateFinishedPromise(),t.play()}pause(){let{resolved:e}=this;if(!e)return;let{animation:t}=e;t.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,"idle"===this.state)return;let{resolved:e}=this;if(!e)return;let{animation:t,keyframes:i,duration:s,type:r,ease:n,times:a}=e;if("idle"!==t.playState&&"finished"!==t.playState){if(this.time){let{motionValue:e,onUpdate:t,onComplete:o,...l}=this.options,u=new th({...l,keyframes:i,duration:s,type:r,ease:n,times:a,isGenerator:!0}),h=f(this.time);e.setWithVelocity(u.sample(h-10).value,u.sample(h).value,10)}this.cancel()}}complete(){let{resolved:e}=this;e&&e.animation.finish()}cancel(){let{resolved:e}=this;e&&e.animation.cancel()}static supports(e){let{motionValue:t,name:i,repeatDelay:s,repeatType:r,damping:n,type:a}=e;return tv()&&i&&tg.has(i)&&t&&t.owner&&t.owner.current instanceof HTMLElement&&!t.owner.getProps().onUpdate&&!s&&"mirror"!==r&&0!==n&&"inertia"!==a}}let tb=(e,t,i,s={},r,n)=>a=>{let o=V(s,e)||{},l=o.delay||s.delay||0,{elapsed:u=0}=s;u-=f(l);let h={keyframes:Array.isArray(i)?i:[null,i],ease:"easeOut",velocity:t.getVelocity(),...o,delay:-u,onUpdate:e=>{t.set(e),o.onUpdate&&o.onUpdate(e)},onComplete:()=>{a(),o.onComplete&&o.onComplete()},name:e,motionValue:t,element:n?void 0:r};!function({when:e,delay:t,delayChildren:i,staggerChildren:s,staggerDirection:r,repeat:n,repeatType:a,repeatDelay:o,from:l,elapsed:u,...h}){return!!Object.keys(h).length}(o)&&(h={...h,...P(e,h)}),h.duration&&(h.duration=f(h.duration)),h.repeatDelay&&(h.repeatDelay=f(h.repeatDelay)),void 0!==h.from&&(h.keyframes[0]=h.from);let d=!1;if(!1!==h.type&&(0!==h.duration||h.repeatDelay)||(h.duration=0,0!==h.delay||(d=!0)),(A.current||S.c.skipAnimations)&&(d=!0,h.duration=0,h.delay=0),d&&!n&&void 0!==t.get()){let e=x(h.keyframes,o);if(void 0!==e){M.Wi.update(()=>{h.onUpdate(e),h.onComplete()});return}}return!n&&ty.supports(h)?new ty(h):new th(h)};var tw=i(40406);function tP(e){return!!((0,tw.i)(e)&&e.add)}var tV=i(8715);class tS{constructor(){this.subscriptions=[]}add(e){var t;return -1===(t=this.subscriptions).indexOf(e)&&t.push(e),()=>(function(e,t){let i=e.indexOf(t);i>-1&&e.splice(i,1)})(this.subscriptions,e)}notify(e,t,i){let s=this.subscriptions.length;if(s){if(1===s)this.subscriptions[0](e,t,i);else for(let r=0;r<s;r++){let s=this.subscriptions[r];s&&s(e,t,i)}}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}let tA=e=>!isNaN(parseFloat(e)),tT={current:void 0};class tx{constructor(e,t={}){this.version="11.2.0",this.canTrackVelocity=!1,this.events={},this.updateAndNotify=(e,t=!0)=>{let i=F.now();this.updatedAt!==i&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(e),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),t&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(e),this.canTrackVelocity=tA(this.current),this.owner=t.owner}setCurrent(e){this.current=e,this.updatedAt=F.now()}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,t){this.events[e]||(this.events[e]=new tS);let i=this.events[e].add(t);return"change"===e?()=>{i(),M.Wi.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(let e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e,t=!0){t&&this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e,t)}setWithVelocity(e,t,i){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-i}jump(e,t=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return tT.current&&tT.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){var e;let t=F.now();if(!this.canTrackVelocity||void 0===this.prevFrameValue||t-this.updatedAt>30)return 0;let i=Math.min(this.updatedAt-this.prevUpdatedAt,30);return e=parseFloat(this.current)-parseFloat(this.prevFrameValue),i?1e3/i*e:0}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function tM(e,t){return new tx(e,t)}function tC(e,t,{delay:i=0,transitionOverride:s,type:r}={}){var n;let{transition:a=e.getDefaultTransition(),transitionEnd:o,...l}=t,u=e.getValue("willChange");s&&(a=s);let h=[],p=r&&e.animationState&&e.animationState.getState()[r];for(let t in l){let s=e.getValue(t,null!==(n=e.latestValues[t])&&void 0!==n?n:null),r=l[t];if(void 0===r||p&&function({protectedKeys:e,needsAnimating:t},i){let s=e.hasOwnProperty(i)&&!0!==t[i];return t[i]=!1,s}(p,t))continue;let o={delay:i,elapsed:0,...V(a||{},t)},d=!1;if(window.HandoffAppearAnimations){let i=e.getProps()[m.M];if(i){let e=window.HandoffAppearAnimations(i,t);null!==e&&(o.elapsed=e,d=!0)}}s.start(tb(t,s,r,e.shouldReduceMotion&&c.G.has(t)?{type:!1}:o,e,d));let f=s.animation;f&&(tP(u)&&(u.add(t),f.then(()=>u.remove(t))),h.push(f))}return o&&Promise.all(h).then(()=>{M.Wi.update(()=>{o&&function(e,t){let{transitionEnd:i={},transition:s={},...r}=d(e,t)||{};for(let t in r={...r,...i}){let i=(0,tV.Y)(r[t]);e.hasValue(t)?e.getValue(t).set(i):e.addValue(t,tM(i))}}(e,o)})}),h}function tF(e,t,i={}){var s;let r=d(e,t,"exit"===i.type?null===(s=e.presenceContext)||void 0===s?void 0:s.custom:void 0),{transition:n=e.getDefaultTransition()||{}}=r||{};i.transitionOverride&&(n=i.transitionOverride);let a=r?()=>Promise.all(tC(e,r,i)):()=>Promise.resolve(),o=e.variantChildren&&e.variantChildren.size?(s=0)=>{let{delayChildren:r=0,staggerChildren:a,staggerDirection:o}=n;return function(e,t,i=0,s=0,r=1,n){let a=[],o=(e.variantChildren.size-1)*s,l=1===r?(e=0)=>e*s:(e=0)=>o-e*s;return Array.from(e.variantChildren).sort(tk).forEach((e,s)=>{e.notify("AnimationStart",t),a.push(tF(e,t,{...n,delay:i+l(s)}).then(()=>e.notify("AnimationComplete",t)))}),Promise.all(a)}(e,t,r+s,a,o,i)}:()=>Promise.resolve(),{when:l}=n;if(!l)return Promise.all([a(),o(i.delay)]);{let[e,t]="beforeChildren"===l?[a,o]:[o,a];return e().then(()=>t())}}function tk(e,t){return e.sortNodePosition(t)}let tE=[...p.e].reverse(),tR=p.e.length;function tI(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}class tN{constructor(e){this.isMounted=!1,this.node=e}update(){}}class tO extends tN{constructor(e){super(e),e.animationState||(e.animationState=function(e){let t=t=>Promise.all(t.map(({animation:t,options:i})=>(function(e,t,i={}){let s;if(e.notify("AnimationStart",t),Array.isArray(t))s=Promise.all(t.map(t=>tF(e,t,i)));else if("string"==typeof t)s=tF(e,t,i);else{let r="function"==typeof t?d(e,t,i.custom):t;s=Promise.all(tC(e,r,i))}return s.then(()=>{M.Wi.postRender(()=>{e.notify("AnimationComplete",t)})})})(e,t,i))),i={animate:tI(!0),whileInView:tI(),whileHover:tI(),whileTap:tI(),whileDrag:tI(),whileFocus:tI(),exit:tI()},s=!0,r=t=>(i,s)=>{var r;let n=d(e,s,"exit"===t?null===(r=e.presenceContext)||void 0===r?void 0:r.custom:void 0);if(n){let{transition:e,transitionEnd:t,...s}=n;i={...i,...s,...t}}return i};function n(n){let h=e.getProps(),d=e.getVariantContext(!0)||{},p=[],c=new Set,m={},f=1/0;for(let t=0;t<tR;t++){var v;let g=tE[t],y=i[g],b=void 0!==h[g]?h[g]:d[g],w=(0,u.$)(b),P=g===n?y.isActive:null;!1===P&&(f=t);let V=b===d[g]&&b!==h[g]&&w;if(V&&s&&e.manuallyAnimateOnMount&&(V=!1),y.protectedKeys={...m},!y.isActive&&null===P||!b&&!y.prevProp||(0,a.H)(b)||"boolean"==typeof b)continue;let S=(v=y.prevProp,("string"==typeof b?b!==v:!!Array.isArray(b)&&!l(b,v))||g===n&&y.isActive&&!V&&w||t>f&&w),A=!1,T=Array.isArray(b)?b:[b],x=T.reduce(r(g),{});!1===P&&(x={});let{prevResolvedValues:M={}}=y,C={...M,...x},F=t=>{S=!0,c.has(t)&&(A=!0,c.delete(t)),y.needsAnimating[t]=!0;let i=e.getValue(t);i&&(i.liveStyle=!1)};for(let e in C){let t=x[e],i=M[e];if(!m.hasOwnProperty(e))((0,o.C)(t)&&(0,o.C)(i)?l(t,i):t===i)?void 0!==t&&c.has(e)?F(e):y.protectedKeys[e]=!0:null!=t?F(e):c.add(e)}y.prevProp=b,y.prevResolvedValues=x,y.isActive&&(m={...m,...x}),s&&e.blockInitialAnimation&&(S=!1),S&&(!V||A)&&p.push(...T.map(e=>({animation:e,options:{type:g}})))}if(c.size){let t={};c.forEach(i=>{let s=e.getBaseTarget(i),r=e.getValue(i);r&&(r.liveStyle=!0),t[i]=null!=s?s:null}),p.push({animation:t})}let g=!!p.length;return s&&(!1===h.initial||h.initial===h.animate)&&!e.manuallyAnimateOnMount&&(g=!1),s=!1,g?t(p):Promise.resolve()}return{animateChanges:n,setActive:function(t,s){var r;if(i[t].isActive===s)return Promise.resolve();null===(r=e.variantChildren)||void 0===r||r.forEach(e=>{var i;return null===(i=e.animationState)||void 0===i?void 0:i.setActive(t,s)}),i[t].isActive=s;let a=n(t);for(let e in i)i[e].protectedKeys={};return a},setAnimateFunction:function(i){t=i(e)},getState:()=>i}}(e))}updateAnimationControlsSubscription(){let{animate:e}=this.node.getProps();this.unmount(),(0,a.H)(e)&&(this.unmount=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){let{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){}}let tK=0;class tj extends tN{constructor(){super(...arguments),this.id=tK++}update(){if(!this.node.presenceContext)return;let{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===i)return;let s=this.node.animationState.setActive("exit",!e);t&&!e&&s.then(()=>t(this.id))}mount(){let{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}function t$(e,t,i,s={passive:!0}){return e.addEventListener(t,i,s),()=>e.removeEventListener(t,i)}let tD=e=>"mouse"===e.pointerType?"number"!=typeof e.button||e.button<=0:!1!==e.isPrimary;function tL(e,t="page"){return{point:{x:e[`${t}X`],y:e[`${t}Y`]}}}let tW=e=>t=>tD(t)&&e(t,tL(t));function tB(e){let t=null;return()=>null===t&&(t=e,()=>{t=null})}let tU=tB("dragHorizontal"),tH=tB("dragVertical");function tq(){let e=function(e){let t=!1;if("y"===e)t=tH();else if("x"===e)t=tU();else{let e=tU(),i=tH();e&&i?t=()=>{e(),i()}:(e&&e(),i&&i())}return t}(!0);return!e||(e(),!1)}function tz(e,t){var i,s,r;let n=t?"pointerenter":"pointerleave",a=t?"onHoverStart":"onHoverEnd";return i=e.current,s=(i,s)=>{if("touch"===i.pointerType||tq())return;let r=e.getProps();e.animationState&&r.whileHover&&e.animationState.setActive("whileHover",t);let n=r[a];n&&M.Wi.postRender(()=>n(i,s))},r={passive:!e.getProps()[a]},t$(i,n,tW(s),r)}class tG extends tN{mount(){this.unmount=eJ(tz(this.node,!0),tz(this.node,!1))}unmount(){}}class tZ extends tN{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch(t){e=!0}e&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){this.isActive&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=eJ(t$(this.node.current,"focus",()=>this.onFocus()),t$(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}let t_=(e,t)=>!!t&&(e===t||t_(e,t.parentElement));function tY(e,t){if(!t)return;let i=new PointerEvent("pointer"+e);t(i,tL(i))}class tQ extends tN{constructor(){super(...arguments),this.removeStartListeners=ex.Z,this.removeEndListeners=ex.Z,this.removeAccessibleListeners=ex.Z,this.startPointerPress=(e,t)=>{var i,s,r,n,a,o,l,u;if(this.isPressing)return;this.removeEndListeners();let h=this.node.getProps(),d=(i=window,s="pointerup",r=(e,t)=>{if(!this.checkPressEnd())return;let{onTap:i,onTapCancel:s,globalTapTarget:r}=this.node.getProps(),n=r||t_(this.node.current,e.target)?i:s;n&&M.Wi.update(()=>n(e,t))},n={passive:!(h.onTap||h.onPointerUp)},t$(i,s,tW(r),n)),p=(a=window,o="pointercancel",l=(e,t)=>this.cancelPress(e,t),u={passive:!(h.onTapCancel||h.onPointerCancel)},t$(a,o,tW(l),u));this.removeEndListeners=eJ(d,p),this.startPress(e,t)},this.startAccessiblePress=()=>{let e=t$(this.node.current,"keydown",e=>{"Enter"!==e.key||this.isPressing||(this.removeEndListeners(),this.removeEndListeners=t$(this.node.current,"keyup",e=>{"Enter"===e.key&&this.checkPressEnd()&&tY("up",(e,t)=>{let{onTap:i}=this.node.getProps();i&&M.Wi.postRender(()=>i(e,t))})}),tY("down",(e,t)=>{this.startPress(e,t)}))}),t=t$(this.node.current,"blur",()=>{this.isPressing&&tY("cancel",(e,t)=>this.cancelPress(e,t))});this.removeAccessibleListeners=eJ(e,t)}}startPress(e,t){this.isPressing=!0;let{onTapStart:i,whileTap:s}=this.node.getProps();s&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),i&&M.Wi.postRender(()=>i(e,t))}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!tq()}cancelPress(e,t){if(!this.checkPressEnd())return;let{onTapCancel:i}=this.node.getProps();i&&M.Wi.postRender(()=>i(e,t))}mount(){var e,t,i,s;let r=this.node.getProps(),n=(e=r.globalTapTarget?window:this.node.current,t="pointerdown",i=this.startPointerPress,s={passive:!(r.onTapStart||r.onPointerStart)},t$(e,t,tW(i),s)),a=t$(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=eJ(n,a)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}let tX=new WeakMap,tJ=new WeakMap,t0=e=>{let t=tX.get(e.target);t&&t(e)},t1=e=>{e.forEach(t0)},t2={some:0,all:1};class t5 extends tN{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();let{viewport:e={}}=this.node.getProps(),{root:t,margin:i,amount:s="some",once:r}=e,n={root:t?t.current:void 0,rootMargin:i,threshold:"number"==typeof s?s:t2[s]};return function(e,t,i){let s=function({root:e,...t}){let i=e||document;tJ.has(i)||tJ.set(i,{});let s=tJ.get(i),r=JSON.stringify(t);return s[r]||(s[r]=new IntersectionObserver(t1,{root:e,...t})),s[r]}(t);return tX.set(e,i),s.observe(e),()=>{tX.delete(e),s.unobserve(e)}}(this.node.current,n,e=>{let{isIntersecting:t}=e;if(this.isInView===t||(this.isInView=t,r&&!t&&this.hasEnteredView))return;t&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",t);let{onViewportEnter:i,onViewportLeave:s}=this.node.getProps(),n=t?i:s;n&&n(e)})}mount(){this.startObserver()}update(){if("undefined"==typeof IntersectionObserver)return;let{props:e,prevProps:t}=this.node;["amount","margin","root"].some(function({viewport:e={}},{viewport:t={}}={}){return i=>e[i]!==t[i]}(e,t))&&this.startObserver()}unmount(){}}var t3=i(67294),t4=i(38057),t6=i(50189),t8=i(34242);let t9=()=>({min:0,max:0}),t7=()=>({x:t9(),y:t9()});var ie=i(51804),it=i(11741);let ii={current:null},is={current:!1};var ir=i(7504),ia=i(9442);let io=new WeakMap,il=[...q,el,ev],iu=e=>il.find(H(e)),ih=Object.keys(ia.A),id=ih.length,ip=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],ic=p.V.length;class im{scrapeMotionValuesFromProps(e,t,i){return{}}constructor({parent:e,props:t,presenceContext:i,reducedMotionConfig:s,blockInitialAnimation:r,visualState:n},a={}){this.resolveKeyframes=(e,t,i,s)=>new this.KeyframeResolver(e,t,i,s,this),this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=X,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>M.Wi.render(this.render,!1,!0);let{latestValues:o,renderState:l}=n;this.latestValues=o,this.baseTarget={...o},this.initialValues=t.initial?{...o}:{},this.renderState=l,this.parent=e,this.props=t,this.presenceContext=i,this.depth=e?e.depth+1:0,this.reducedMotionConfig=s,this.options=a,this.blockInitialAnimation=!!r,this.isControllingVariants=(0,ir.G)(t),this.isVariantNode=(0,ir.M)(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);let{willChange:u,...h}=this.scrapeMotionValuesFromProps(t,{},this);for(let e in h){let t=h[e];void 0!==o[e]&&(0,tw.i)(t)&&(t.set(o[e],!1),tP(u)&&u.add(e))}}mount(e){this.current=e,io.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((e,t)=>this.bindToMotionValue(t,e)),is.current||function(){if(is.current=!0,it.j){if(window.matchMedia){let e=window.matchMedia("(prefers-reduced-motion)"),t=()=>ii.current=e.matches;e.addListener(t),t()}else ii.current=!1}}(),this.shouldReduceMotion="never"!==this.reducedMotionConfig&&("always"===this.reducedMotionConfig||ii.current),this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){var e;for(let e in io.delete(this.current),this.projection&&this.projection.unmount(),(0,M.Pn)(this.notifyUpdate),(0,M.Pn)(this.render),this.valueSubscriptions.forEach(e=>e()),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this),this.events)this.events[e].clear();for(let t in this.features)null===(e=this.features[t])||void 0===e||e.unmount();this.current=null}bindToMotionValue(e,t){let i=c.G.has(e),s=t.on("change",t=>{this.latestValues[e]=t,this.props.onUpdate&&M.Wi.preRender(this.notifyUpdate),i&&this.projection&&(this.projection.isTransformDirty=!0)}),r=t.on("renderRequest",this.scheduleRender);this.valueSubscriptions.set(e,()=>{s(),r(),t.owner&&t.stop()})}sortNodePosition(e){return this.current&&this.sortInstanceNodePosition&&this.type===e.type?this.sortInstanceNodePosition(this.current,e.current):0}loadFeatures({children:e,...t},i,s,r){let n,a;for(let e=0;e<id;e++){let i=ih[e],{isEnabled:s,Feature:r,ProjectionNode:o,MeasureLayout:l}=ia.A[i];o&&(n=o),s(t)&&(!this.features[i]&&r&&(this.features[i]=new r(this)),l&&(a=l))}if(("html"===this.type||"svg"===this.type)&&!this.projection&&n){this.projection=new n(this.latestValues,function e(t){if(t)return!1!==t.options.allowProjection?t.projection:e(t.parent)}(this.parent));let{layoutId:e,layout:i,drag:s,dragConstraints:a,layoutScroll:o,layoutRoot:l}=t;this.projection.setOptions({layoutId:e,layout:i,alwaysMeasureLayout:!!s||a&&(0,ie.I)(a),visualElement:this,scheduleRender:()=>this.scheduleRender(),animationType:"string"==typeof i?i:"both",initialPromotionConfig:r,layoutScroll:o,layoutRoot:l})}return a}updateFeatures(){for(let e in this.features){let t=this.features[e];t.isMounted?t.update():(t.mount(),t.isMounted=!0)}}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):t7()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let t=0;t<ip.length;t++){let i=ip[t];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);let s=e["on"+i];s&&(this.propEventSubscriptions[i]=this.on(i,s))}this.prevMotionValues=function(e,t,i){let{willChange:s}=t;for(let r in t){let n=t[r],a=i[r];if((0,tw.i)(n))e.addValue(r,n),tP(s)&&s.add(r);else if((0,tw.i)(a))e.addValue(r,tM(n,{owner:e})),tP(s)&&s.remove(r);else if(a!==n){if(e.hasValue(r)){let t=e.getValue(r);!0===t.liveStyle?t.jump(n):t.hasAnimated||t.set(n)}else{let t=e.getStaticValue(r);e.addValue(r,tM(void 0!==t?t:n,{owner:e}))}}}for(let s in i)void 0===t[s]&&e.removeValue(s);return t}(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}getVariantContext(e=!1){if(e)return this.parent?this.parent.getVariantContext():void 0;if(!this.isControllingVariants){let e=this.parent&&this.parent.getVariantContext()||{};return void 0!==this.props.initial&&(e.initial=this.props.initial),e}let t={};for(let e=0;e<ic;e++){let i=p.V[e],s=this.props[i];((0,u.$)(s)||!1===s)&&(t[i]=s)}return t}addVariantChild(e){let t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){let i=this.values.get(e);t!==i&&(i&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);let t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let i=this.values.get(e);return void 0===i&&void 0!==t&&(i=tM(null===t?void 0:t,{owner:this}),this.addValue(e,i)),i}readValue(e,t){var i;let s=void 0===this.latestValues[e]&&this.current?null!==(i=this.getBaseTargetFromProps(this.props,e))&&void 0!==i?i:this.readValueFromInstance(this.current,e,this.options):this.latestValues[e];return null!=s&&("string"==typeof s&&(R(s)||k(s))?s=parseFloat(s):!iu(s)&&ev.test(t)&&(s=eS(e,t)),this.setBaseTarget(e,(0,tw.i)(s)?s.get():s)),(0,tw.i)(s)?s.get():s}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){var t;let i;let{initial:s}=this.props;if("string"==typeof s||"object"==typeof s){let r=(0,h.o)(this.props,s,null===(t=this.presenceContext)||void 0===t?void 0:t.custom);r&&(i=r[e])}if(s&&void 0!==i)return i;let r=this.getBaseTargetFromProps(this.props,e);return void 0===r||(0,tw.i)(r)?void 0!==this.initialValues[e]&&void 0===i?void 0:this.baseTarget[e]:r}on(e,t){return this.events[e]||(this.events[e]=new tS),this.events[e].add(t)}notify(e,...t){this.events[e]&&this.events[e].notify(...t)}}class iv extends im{constructor(){super(...arguments),this.KeyframeResolver=eT}sortInstanceNodePosition(e,t){return 2&e.compareDocumentPosition(t)?1:-1}getBaseTargetFromProps(e,t){return e.style?e.style[t]:void 0}removeValueFromRenderState(e,{vars:t,style:i}){delete t[e],delete i[e]}}class ig extends iv{constructor(){super(...arguments),this.type="html"}readValueFromInstance(e,t){if(c.G.has(t)){let e=eV(t);return e&&e.default||0}{let i=window.getComputedStyle(e),s=((0,I.f)(t)?i.getPropertyValue(t):i[t])||0;return"string"==typeof s?s.trim():s}}measureInstanceViewportBox(e,{transformPagePoint:t}){return function({top:e,left:t,right:i,bottom:s}){return{x:{min:t,max:i},y:{min:e,max:s}}}(function(e,t){if(!t)return e;let i=t({x:e.left,y:e.top}),s=t({x:e.right,y:e.bottom});return{top:i.y,left:i.x,bottom:s.y,right:s.x}}(e.getBoundingClientRect(),t))}build(e,t,i,s){(0,t4.r)(e,t,i,s.transformTemplate)}scrapeMotionValuesFromProps(e,t,i){return(0,t6.U)(e,t,i)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);let{children:e}=this.props;(0,tw.i)(e)&&(this.childSubscription=e.on("change",e=>{this.current&&(this.current.textContent=`${e}`)}))}renderInstance(e,t,i,s){(0,t8.N)(e,t,i,s)}}var iy=i(16832),ib=i(85415),iw=i(93193),iP=i(77302),iV=i(68504),iS=i(79854);class iA extends iv{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(c.G.has(t)){let e=eV(t);return e&&e.default||0}return t=iP.s.has(t)?t:(0,iw.D)(t),e.getAttribute(t)}measureInstanceViewportBox(){return t7()}scrapeMotionValuesFromProps(e,t,i){return(0,iy.U)(e,t,i)}build(e,t,i,s){(0,ib.i)(e,t,i,this.isSVGTag,s.transformTemplate)}renderInstance(e,t,i,s){(0,iV.K)(e,t,i,s)}mount(e){this.isSVGTag=(0,iS.a)(e.tagName),super.mount(e)}}var iT=i(62627);let ix={renderer:(e,t)=>(0,iT.q)(e)?new iA(t,{enableHardwareAcceleration:!1}):new ig(t,{allowProjection:e!==t3.Fragment,enableHardwareAcceleration:!0}),animation:{Feature:tO},exit:{Feature:tj},inView:{Feature:t5},tap:{Feature:tQ},focus:{Feature:tZ},hover:{Feature:tG}}},45487:function(e,t,i){i.d(t,{K:function(){return r},k:function(){return n}});var s=i(81662);let r=s.Z,n=s.Z}}]);
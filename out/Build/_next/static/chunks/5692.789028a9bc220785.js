"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5692, 4609],
    {
        55692: function (e, t, r) {
            r.r(t),
                r.d(t, {
                    default: function () {
                        return z;
                    },
                });
            var n = r(85893),
                a = r(1864),
                s = r(67294);
            let i = (0, s.memo)(() => (0, n.jsx)("svg", { viewBox: "0 0 32 32", xmlns: "http://www.w3.org/2000/svg", children: (0, n.jsx)("path", { d: "M30 2v10h-2V5.422L5.422 28H12v2H2V20h2v6.578L26.578 4H20V2h10z" }) })),
                l = (0, s.memo)(() =>
                    (0, n.jsx)("svg", {
                        viewBox: "0 0 32 32",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, n.jsx)("path", { d: "M4 18h10v10h-2v-6.578L1.453 31.953.047 30.547 10.578 20H4v-2zm17.422-6H28v2H18V4h2v6.578L30.547.047l1.406 1.406z" }),
                    })
                ),
                o = (0, s.memo)(() =>
                    (0, n.jsx)("svg", {
                        viewBox: "0 0 32 32",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, n.jsx)("path", {
                            d:
                                "M31.703 30.297Q32 30.594 32 31t-.297.703T31 32t-.703-.297l-12.266-12.25q-1.5 1.234-3.289 1.891T11 22q-1.516 0-2.922-.391T5.453 20.5t-2.227-1.727-1.727-2.227T.39 13.921t-.391-2.922.391-2.922 1.109-2.625 1.727-2.227 2.227-1.727T8.078.389 11-.002t2.922.391 2.625 1.109 2.227 1.727 1.727 2.227 1.109 2.625.391 2.922q0 1.953-.656 3.742t-1.891 3.289zM11 20q1.859 0 3.5-.711t2.859-1.93 1.93-2.859T20 11t-.711-3.5-1.93-2.859-2.859-1.93T11 2t-3.5.711-2.859 1.93T2.711 7.5 2 11t.711 3.5 1.93 2.859 2.859 1.93T11 20zm1-10h4v2h-4v4h-2v-4H6v-2h4V6h2v4z",
                        }),
                    })
                ),
                c = (0, s.memo)(() =>
                    (0, n.jsx)("svg", {
                        viewBox: "0 0 32 32",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, n.jsx)("path", {
                            d:
                                "M32 30.906q0 .438-.266.766T31 32q-.406 0-.703-.297l-12.266-12.25q-1.5 1.234-3.289 1.891T11 22q-1.516 0-2.922-.391T5.453 20.5t-2.227-1.727-1.727-2.227T.39 13.921t-.391-2.922.391-2.922 1.109-2.625 1.727-2.227 2.227-1.727T8.078.389 11-.002t2.922.391 2.625 1.109 2.227 1.727 1.727 2.227 1.109 2.625.391 2.922q0 1.953-.656 3.742t-1.891 3.289q.234.234.898.891t1.594 1.563 2.031 1.992 2.219 2.203 2.164 2.18 1.859 1.922 1.297 1.43.484.695zM11 20q1.859 0 3.5-.711t2.859-1.93 1.93-2.859T20 11t-.711-3.5-1.93-2.859-2.859-1.93T11 2t-3.5.711-2.859 1.93T2.711 7.5 2 11t.711 3.5 1.93 2.859 2.859 1.93T11 20zM6 10h10v2H6v-2z",
                        }),
                    })
                );
            var u = r(10508);
            let h = "48px",
                d = "32px",
                f = u.ZP.div(
                    [
                        "background-color:#222;display:flex;height:100%;padding-bottom:",
                        ";padding-top:",
                        ";position:relative;svg{fill:#fff;}figure{display:flex;height:100%;margin:0 ",
                        " ",
                        ";overflow:hidden;place-content:center;place-items:center;width:100%;div{color:rgb(167,167,167);font-size:13px;padding:0 38px;text-align:center;}img{display:",
                        ";max-height:100%;max-width:100%;}}nav{display:flex;height:",
                        ";place-content:center;place-items:center;position:absolute;&.top{top:0;width:100%;svg{height:16px;}}&.bottom{bottom:0;right:0;svg{height:20px;margin-top:2px;}}button{height:",
                        ";width:",
                        ";&:disabled{pointer-events:none;svg{fill:rgb(125,125,125);}}&:hover{background-color:rgba(75,75,75,50%);}&:active{background-color:rgba(100,100,100,50%);}}}",
                    ],
                    d,
                    h,
                    d,
                    d,
                    ({ $showImage: e }) => (e ? "block" : "none"),
                    h,
                    h,
                    h
                );
            var m = r(57631),
                g = r(72490),
                p = r(58437),
                v = r(44696);
            let w = { cursor: "default", maxScale: 7, minScale: 1, panOnlyWhenZoomed: !0, step: 0.1 };
            var x = (e, t, r) => {
                let [n, i] = (0, s.useState)(),
                    { getScale: l, reset: o, zoomIn: c, zoomOut: u, zoomToPoint: h, zoomWithWheel: d } = n || {},
                    {
                        processes: { [e]: f },
                    } = (0, p.z)(),
                    { closing: x, componentWindow: b, url: y = "" } = f || {},
                    { prependFileToTitle: T } = (0, v.Z)(e),
                    L = (0, s.useCallback)(
                        (e) => {
                            let { detail: { scale: t = 0, x: r = 0, y: s = 0 } = {} } = e || {};
                            if (y && t) {
                                let { minScale: e, step: i } = w,
                                    l = t < e + i;
                                l && (r || s) && window.setTimeout(() => n?.reset(), 50), x || T(l ? (0, a.basename)(y) : `${(0, a.basename)(y)} (${Math.floor(100 * t)}%)`);
                            }
                        },
                        [x, n, T, y]
                    ),
                    j = (0, s.useCallback)((e) => d?.(e, { step: 0.3 }), [d]);
                return (
                    (0, g.Z)(b, o),
                    (0, s.useEffect)(
                        () => (
                            t && r && (t.addEventListener("panzoomchange", L), r.addEventListener("wheel", j)),
                            () => {
                                t?.removeEventListener("panzoomchange", L), r?.removeEventListener("wheel", j);
                            }
                        ),
                        [r, t, L, j]
                    ),
                    (0, s.useEffect)(() => (t && !n && i((0, m.Z)(t, w)), () => n?.destroy()), [t, n]),
                    { reset: o, scale: l?.(), zoomIn: c, zoomOut: u, zoomToPoint: h }
                );
            },
                b = r(45279),
                y = r(20063),
                T = r(8955),
                L = r(24645),
                j = r(67278),
                E = r(97836),
                k = r(6484),
                C = r(14609);
            let { maxScale: $, minScale: Z } = w;
            var z = ({ id: e }) => {
                let { processes: { [e]: t } = {}, url: r } = (0, p.z)(),
                    { componentWindow: u, closing: h = !1, url: d = "" } = t || {},
                    [m, g] = (0, s.useState)({}),
                    [w, z] = (0, s.useState)(!1),
                    { prependFileToTitle: A } = (0, v.Z)(e),
                    { readFile: R, readdir: S } = (0, y.o)(),
                    M = (0, s.useRef)(null),
                    P = (0, s.useRef)(null),
                    q = (0, s.useRef)(null),
                    { reset: B, scale: I, zoomIn: H, zoomOut: D, zoomToPoint: U } = x(e, P.current, q.current),
                    { fullscreenElement: O, toggleFullscreen: F } = (0, T.S)(),
                    _ = (0, s.useCallback)(async () => {
                        let e = await R(d),
                            t = (0, k.RT)(d),
                            r = await (0, C.decodeImageToBuffer)(t, e);
                        g((n) => {
                            let [a] = Object.keys(n);
                            if (a) {
                                if (a === d) return n;
                                B?.();
                            }
                            return { [d]: (0, k.wB)(t, r || e) };
                        }),
                            A((0, a.basename)(d));
                    }, [A, R, B, d]),
                    K = (0, s.useCallback)(
                        async ({ key: t }) => {
                            switch (t) {
                                case "ArrowRight":
                                case "ArrowLeft": {
                                    let n = await S((0, a.dirname)(d)),
                                        s = n.indexOf((0, a.basename)(d)),
                                        i = (t, s) => {
                                            if (-1 === t) return;
                                            let l = t + (s ? 1 : -1);
                                            if (-1 === l || l === n.length) return;
                                            let o = n[l];
                                            E.lM.has((0, k.RT)(o)) ? r(e, (0, a.join)((0, a.dirname)(d), o)) : i(l, s);
                                        };
                                    i(s, "ArrowRight" === t);
                                }
                            }
                        },
                        [e, S, r, d]
                    );
                return (
                    (0, s.useEffect)(() => {
                        !d || m[d] || h || _();
                    }, [h, _, m, d]),
                    (0, s.useEffect)(() => (u?.addEventListener("keydown", K), () => u?.removeEventListener("keydown", K)), [u, K]),
                    (0, n.jsxs)(f, {
                        ref: M,
                        $showImage: !!(m[d] && !w),
                        onContextMenu: k.nK,
                        ...(0, b.Z)({ id: e }),
                        children: [
                            (0, n.jsxs)("nav", {
                                className: "top",
                                children: [
                                    (0, n.jsx)(j.Z, { disabled: !d || I === $ || w, onClick: H, ...(0, k.PS)("Zoom in"), children: (0, n.jsx)(o, {}) }),
                                    (0, n.jsx)(j.Z, { disabled: !d || I === Z || w, onClick: D, ...(0, k.PS)("Zoom out"), children: (0, n.jsx)(c, {}) }),
                                ],
                            }),
                            (0, n.jsxs)("figure", {
                                ref: q,
                                ...(0, L.Z)((e) => {
                                    I === Z ? U?.(2 * Z, e, { animate: !0 }) : B?.();
                                }),
                                children: [
                                    (0, n.jsx)("img", { ref: P, alt: (0, a.basename)(d, (0, a.extname)(d)), decoding: "async", loading: "eager", onError: () => z(!0), onLoad: () => z(!1), src: m[d], ...E.h7 }),
                                    w && (0, n.jsxs)("div", { children: [(0, a.basename)(d), (0, n.jsx)("br", {}), "Sorry, Photos can't open this file because the format is currently unsupported, or the file is corrupted"] }),
                                ],
                            }),
                            (0, n.jsx)("nav", {
                                className: "bottom",
                                children: (0, n.jsx)(j.Z, { disabled: !d, onClick: () => F(M.current, "show"), ...(0, k.PS)("Full-screen"), children: O === M.current ? (0, n.jsx)(l, {}) : (0, n.jsx)(i, {}) }),
                            }),
                        ],
                    })
                );
            };
        },
        45279: function (e, t, r) {
            var n = r(1864),
                a = r(67294),
                s = r(59746),
                i = r(23736),
                l = r(89670),
                o = r(20063),
                c = r(58437),
                u = r(76488),
                h = r(97836),
                d = r(6484);
            t.Z = ({ callback: e, directory: t = h.Ll, id: r, onDragLeave: f, onDragOver: m, updatePositions: g }) => {
                let { url: p } = (0, c.z)(),
                    { iconPositions: v, sortOrders: w, setIconPositions: x } = (0, u.k)(),
                    { exists: b, mkdirRecursive: y, updateFolder: T, writeFile: L } = (0, o.o)(),
                    j = (0, a.useCallback)(
                        async (e, t, a) => {
                            if (r) {
                                if (t) {
                                    let s = (0, n.join)(h.Ll, e);
                                    if ((await y(h.Ll), await L(s, t, !0))) return a === l.v.UPDATE_URL && p(r, s), await T(h.Ll, e), (0, n.basename)(s);
                                } else a === l.v.UPDATE_URL && p(r, e);
                            }
                            return "";
                        },
                        [r, y, T, p, L]
                    ),
                    { openTransferDialog: E } = (0, s.Z)();
                return {
                    onDragLeave: f,
                    onDragOver: (e) => {
                        m?.(e), (0, d.nK)(e);
                    },
                    onDrop: (a) => {
                        if (!h.my.has((0, d.RT)(t))) {
                            if (g && a.target instanceof HTMLElement) {
                                let { files: e, text: r } = (0, i.p4)(a);
                                if (0 === e.length && "" === r) return;
                                let s = { x: a.clientX, y: a.clientY },
                                    l = [];
                                if (r) {
                                    try {
                                        l = JSON.parse(r);
                                    } catch { }
                                    if (!Array.isArray(l)) return;
                                    let [e] = l;
                                    if (!e || (e.startsWith(t) && (0, n.basename)(e) === (0, n.relative)(t, e))) return;
                                    l = l.map((e) => (0, n.basename)(e));
                                } else e instanceof FileList ? (l = [...e].map((e) => e.name)) : (l = [...e].map((e) => e.getAsFile()?.name || "").filter(Boolean));
                                (l = l.map((e) => {
                                    if (!v[`${t}/${e}`]) return e;
                                    let r = 0,
                                        a = "";
                                    do (r += 1), (a = `${t}/${(0, n.basename)(e, (0, n.extname)(e))} (${r})${(0, n.extname)(e)}`);
                                    while (v[a]);
                                    return (0, n.basename)(a);
                                })),
                                    (0, d.vi)(t, a.target, v, w, s, l, x, b);
                            }
                            (0, i.WG)(a, e || j, t, E, !!r);
                        }
                    },
                };
            };
        },
        44696: function (e, t, r) {
            var n = r(67294),
                a = r(58437),
                s = r(37176),
                i = r(97836);
            t.Z = (e) => {
                let { title: t } = (0, a.z)(),
                    [r] = e.split(i.CC),
                    { title: l } = s.Z[r] || {};
                return {
                    appendFileToTitle: (0, n.useCallback)(
                        (r, n) => {
                            let a = r ? ` - ${r}${n ? ` ${i.xy}` : ""}` : "";
                            t(e, `${l}${a}`);
                        },
                        [e, l, t]
                    ),
                    prependFileToTitle: (0, n.useCallback)(
                        (r, n, a) => {
                            let s = r ? `${n ? `${i.xy} ` : ""}${r}${a ? " " : " - "}` : "";
                            t(e, `${s}${l}`);
                        },
                        [e, l, t]
                    ),
                };
            };
        },
        24645: function (e, t, r) {
            var n = r(67294),
                a = r(97836);
            t.Z = (e, t = !1) => {
                let r = (0, n.useRef)(),
                    s = (0, n.useRef)(0);
                return {
                    onClick: (0, n.useCallback)(
                        (n) => {
                            let i = () => {
                                n.stopPropagation(), e(n);
                            },
                                l = () => {
                                    r.current && (clearTimeout(r.current), (r.current = void 0));
                                },
                                o = () => {
                                    s.current >= 12 && l(), void 0 === r.current ? (n.target.removeEventListener("pointermove", o), (s.current = 0)) : (s.current += 1);
                                };
                            t ? i() : void 0 === r.current ? ((r.current = window.setTimeout(l, a.jx.DOUBLE_CLICK)), n.target.addEventListener("pointermove", o, { passive: !0 })) : (l(), i());
                        },
                        [e, t]
                    ),
                };
            };
        },
        72490: function (e, t, r) {
            var n = r(67294);
            t.Z = (e, t) => {
                let [r, a] = (0, n.useState)();
                (0, n.useEffect)(() => {
                    t && a(new ResizeObserver(t));
                }, [t]),
                    (0, n.useEffect)(
                        () => (
                            e instanceof HTMLElement && r?.observe(e),
                            () => {
                                e instanceof HTMLElement && r?.unobserve(e);
                            }
                        ),
                        [e, r]
                    );
            };
        },
        14609: function (e, t, r) {
            r.d(t, {
                decodeImageToBuffer: function () {
                    return p;
                },
                getFirstAniImage: function () {
                    return f;
                },
                getLargestIcon: function () {
                    return m;
                },
            });
            var n = r(97836),
                a = r(48764).Buffer;
            function s(e, t = []) {
                let { length: r } = t,
                    n = [e.charCodeAt(0), e.charCodeAt(1), e.charCodeAt(2), e.charCodeAt(3)].concat(t);
                return [(r >> 24) & 255, (r >> 16) & 255, (r >> 8) & 255, 255 & r].concat(
                    n,
                    (function (e) {
                        let t = [],
                            r = 0;
                        for (let e = 0; e < 256; ++e)
                            (r =
                                1 &
                                    (r =
                                        1 &
                                            (r =
                                                1 &
                                                    (r =
                                                        1 & (r = 1 & (r = 1 & (r = 1 & (r = 1 & (r = e) ? 3988292384 ^ (r >>> 1) : r >>> 1) ? 3988292384 ^ (r >>> 1) : r >>> 1) ? 3988292384 ^ (r >>> 1) : r >>> 1) ? 3988292384 ^ (r >>> 1) : r >>> 1)
                                                            ? 3988292384 ^ (r >>> 1)
                                                            : r >>> 1)
                                                    ? 3988292384 ^ (r >>> 1)
                                                    : r >>> 1)
                                            ? 3988292384 ^ (r >>> 1)
                                            : r >>> 1)
                                    ? 3988292384 ^ (r >>> 1)
                                    : r >>> 1),
                                (t[e] = r);
                        for (let n of ((r = -1), e)) r = (r >>> 8) ^ t[(r ^ n) & 255];
                        return [((r ^= -1) >> 24) & 255, (r >> 16) & 255, (r >> 8) & 255, 255 & r];
                    })(n)
                );
            }
            let i = (e) =>
                a.from(
                    new Uint8Array(
                        (function (e) {
                            if (e.length < 22 || 113 !== e[0] || 111 !== e[1] || 105 !== e[2] || 102 !== e[3]) return;
                            let t = (e[4] << 24) | (e[5] << 16) | (e[6] << 8) | e[7],
                                r = e[12],
                                n = e[13];
                            if (3 !== r && 4 !== r && 1 !== n) return;
                            let a = e.length - 8,
                                i = [],
                                l = Array.from({ length: 64 }).fill(0),
                                o = 255,
                                c = 14;
                            for (; c < a;) {
                                let t = e[c],
                                    r = t >> 6;
                                if (255 === t) {
                                    let t = e[c + 1],
                                        r = e[c + 2],
                                        n = e[c + 3],
                                        a = e[c + 4];
                                    (c += 5), (o = (t << 24) | (r << 16) | (n << 8) | a), (l[(3 * t + 5 * r + 7 * n + 11 * a) % 64] = o), i.push(o);
                                } else if (254 === t) {
                                    let t = e[c + 1],
                                        r = e[c + 2],
                                        n = e[c + 3],
                                        a = 255 & o;
                                    (c += 4), (o = (t << 24) | (r << 16) | (n << 8) | a), (l[(3 * t + 5 * r + 7 * n + 11 * a) % 64] = o), i.push(o);
                                } else if (0 === r) {
                                    if (0 === e[c] && 0 === e[c + 1] && 0 === e[c + 2] && 0 === e[c + 3] && 0 === e[c + 4] && 0 === e[c + 5] && 0 === e[c + 6] && 1 === e[c + 7]) break;
                                    (c += 1), (o = l[t]), i.push(o);
                                } else if (1 === r) {
                                    let e = (((o >> 24) & 255) + (((t >> 4) & 3) - 2)) & 255,
                                        r = (((o >> 16) & 255) + (((t >> 2) & 3) - 2)) & 255,
                                        n = (((o >> 8) & 255) + ((3 & t) - 2)) & 255,
                                        a = 255 & o;
                                    (c += 1), (o = (e << 24) | (r << 16) | (n << 8) | a), (l[(3 * e + 5 * r + 7 * n + 11 * a) % 64] = o), i.push(o);
                                } else if (2 === r) {
                                    let r = e[c + 1],
                                        n = ((63 & t) - 32) & 255,
                                        a = (((r >> 4) & 15) - 8 + n) & 255,
                                        s = ((15 & r) - 8 + n) & 255,
                                        u = (((o >> 24) & 255) + a) & 255,
                                        h = (((o >> 16) & 255) + n) & 255,
                                        d = (((o >> 8) & 255) + s) & 255,
                                        f = 255 & o;
                                    (c += 2), (o = (u << 24) | (h << 16) | (d << 8) | f), (l[(3 * u + 5 * h + 7 * d + 11 * f) % 64] = o), i.push(o);
                                } else {
                                    for (let e = (63 & t) + 1; e > 0; --e) i.push(o);
                                    c += 1;
                                }
                            }
                            return (function (e, t, r) {
                                let n = [],
                                    a = [120, 1],
                                    i = 1 + t * r,
                                    l = 65535 ^ i;
                                for (let s = 0; e.length != s; s += t) {
                                    let o = s + t;
                                    a.push(o === e.length ? 1 : 0, 255 & i, (i >> 8) & 255, 255 & l, (l >> 8) & 255), n.push(1), a.push(0);
                                    for (let t = s; o !== t; ++t) {
                                        let s = e[t];
                                        n.push((s >> 24) & 255), a.push((s >> 24) & 255), n.push((s >> 16) & 255), a.push((s >> 16) & 255), n.push((s >> 8) & 255), a.push((s >> 8) & 255), 4 === r && (n.push(255 & s), a.push(255 & s));
                                    }
                                }
                                let o = e.length / t;
                                return [137, 80, 78, 71, 13, 10, 26, 10].concat(
                                    s("IHDR", [(t >> 24) & 255, (t >> 16) & 255, (t >> 8) & 255, 255 & t, (o >> 24) & 255, (o >> 16) & 255, (o >> 8) & 255, 255 & o, 8, 3 === r ? 2 : 6, 0, 0, 0]),
                                    s(
                                        "IDAT",
                                        a.concat(
                                            (function (e) {
                                                let t = 0,
                                                    r = 0;
                                                for (let n of e) r = (r + (t = (t + n) % 65521)) % 65521;
                                                return [r >> 8, 255 & r, t >> 8, 255 & t];
                                            })(n)
                                        )
                                    ),
                                    s("IEND")
                                );
                            })(i, t, r);
                        })(new Uint8Array(e))
                    )
                );
            var l = r(6484),
                o = r(48764).Buffer;
            let c = async (e) => {
                let t = document.createElement("img");
                return (
                    document.createElement("picture").append(Object.assign(document.createElement("source"), { srcset: "data:,x", type: e }), t),
                    await new Promise((e) => {
                        requestAnimationFrame(e);
                    }),
                    "string" == typeof t.currentSrc && t.currentSrc.length > 0
                );
            },
                u = async (e) =>
                    (await c("image/jxl"))
                        ? e
                        : new Promise((t) => {
                            let r = new Worker("System/JXL.js/jxl_dec.js");
                            r.postMessage({ image: e, jxlSrc: "image.jxl" }), r.addEventListener("message", (e) => t((0, l.fv)(e?.data?.imgData)));
                        }),
                h = async (e) =>
                    (await c("image/heic"))
                        ? e
                        : new Promise((t) => {
                            let n = new Worker(r.tu(new URL(r.p + r.u(1337), r.b)), { name: "libheif" });
                            n.postMessage(e), n.addEventListener("message", ({ data: e }) => t((0, l.fv)(e)));
                        }),
                d = async (e) => {
                    let t = await (0, l.iQ)(),
                        { parseAni: a } = await r.e(396, "high").then(r.bind(r, 70396)),
                        s = [];
                    try {
                        ({ images: s } = a(e));
                    } catch {
                        return e;
                    }
                    return (
                        await Promise.all(
                            s.map(
                                (e) =>
                                    new Promise((r) => {
                                        let a = new Image(),
                                            s = (0, l.YS)(o.from(e));
                                        t.setOptions({ transparent: "" }),
                                            a.addEventListener(
                                                "load",
                                                () => {
                                                    t.addFrame(a), (0, l.EK)(s), r();
                                                },
                                                n.K7
                                            ),
                                            (a.src = s);
                                    })
                            )
                        ),
                        new Promise((e) => {
                            t.on("finished", (t) => t.arrayBuffer().then((t) => e(o.from(t)))).render();
                        })
                    );
                },
                f = async (e) => {
                    let t;
                    let { parseAni: n } = await r.e(396, "high").then(r.bind(r, 70396));
                    try {
                        return (
                            ({
                                images: [t],
                            } = n(e)),
                            o.from(t)
                        );
                    } catch { }
                },
                m = async (e, t) => {
                    try {
                        let { default: n } = await r.e(5704, "high").then(r.t.bind(r, 95704, 23)),
                            [a] = n(e)
                                .filter(({ width: e }) => e <= t)
                                .sort((e, t) => t.width - e.width),
                            s = document.createElement("canvas"),
                            i = s.getContext("2d", { desynchronized: !0 });
                        return (s.width = a.width), (s.height = a.height), i?.putImageData(a, 0, 0), s.toDataURL();
                    } catch {
                        return "";
                    }
                },
                g = async (e, t) =>
                    new Promise((r) => {
                        let a = new Image();
                        a.addEventListener("load", () => r(!0), n.K7), a.addEventListener("error", () => r(!1), n.K7), (a.src = (0, l.wB)(e, t));
                    }),
                p = async (e, t) => {
                    switch (e) {
                        case ".jxl":
                            return u(t);
                        case ".qoi":
                            return i(t);
                        case ".ani":
                            try {
                                return d(t);
                            } catch {
                                return f(t);
                            }
                        case ".cur":
                            return (await g(e, t)) ? t : f(t);
                        default:
                            if (n.Wr.has(e)) return h(t);
                            if (n.M0.has(e)) return o.from((await r.e(6173, "high").then(r.t.bind(r, 66173, 23))).bufferToURI(t).replace("data:image/png;base64,", ""), "base64");
                    }
                    return t;
                };
        },
    },
]);



// "use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5692,4609],{55692:function(e,t,r){r.r(t),r.d(t,{default:function(){return z}});var n=r(85893),a=r(1864),s=r(67294);let i=(0,s.memo)(()=>(0,n.jsx)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M30 2v10h-2V5.422L5.422 28H12v2H2V20h2v6.578L26.578 4H20V2h10z"})})),l=(0,s.memo)(()=>(0,n.jsx)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M4 18h10v10h-2v-6.578L1.453 31.953.047 30.547 10.578 20H4v-2zm17.422-6H28v2H18V4h2v6.578L30.547.047l1.406 1.406z"})})),o=(0,s.memo)(()=>(0,n.jsx)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M31.703 30.297Q32 30.594 32 31t-.297.703T31 32t-.703-.297l-12.266-12.25q-1.5 1.234-3.289 1.891T11 22q-1.516 0-2.922-.391T5.453 20.5t-2.227-1.727-1.727-2.227T.39 13.921t-.391-2.922.391-2.922 1.109-2.625 1.727-2.227 2.227-1.727T8.078.389 11-.002t2.922.391 2.625 1.109 2.227 1.727 1.727 2.227 1.109 2.625.391 2.922q0 1.953-.656 3.742t-1.891 3.289zM11 20q1.859 0 3.5-.711t2.859-1.93 1.93-2.859T20 11t-.711-3.5-1.93-2.859-2.859-1.93T11 2t-3.5.711-2.859 1.93T2.711 7.5 2 11t.711 3.5 1.93 2.859 2.859 1.93T11 20zm1-10h4v2h-4v4h-2v-4H6v-2h4V6h2v4z"})})),c=(0,s.memo)(()=>(0,n.jsx)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M32 30.906q0 .438-.266.766T31 32q-.406 0-.703-.297l-12.266-12.25q-1.5 1.234-3.289 1.891T11 22q-1.516 0-2.922-.391T5.453 20.5t-2.227-1.727-1.727-2.227T.39 13.921t-.391-2.922.391-2.922 1.109-2.625 1.727-2.227 2.227-1.727T8.078.389 11-.002t2.922.391 2.625 1.109 2.227 1.727 1.727 2.227 1.109 2.625.391 2.922q0 1.953-.656 3.742t-1.891 3.289q.234.234.898.891t1.594 1.563 2.031 1.992 2.219 2.203 2.164 2.18 1.859 1.922 1.297 1.43.484.695zM11 20q1.859 0 3.5-.711t2.859-1.93 1.93-2.859T20 11t-.711-3.5-1.93-2.859-2.859-1.93T11 2t-3.5.711-2.859 1.93T2.711 7.5 2 11t.711 3.5 1.93 2.859 2.859 1.93T11 20zM6 10h10v2H6v-2z"})}));var u=r(10508);let h="48px",d="32px",f=u.ZP.div(["background-color:#222;display:flex;height:100%;padding-bottom:",";padding-top:",";position:relative;svg{fill:#fff;}figure{display:flex;height:100%;margin:0 "," ",";overflow:hidden;place-content:center;place-items:center;width:100%;div{color:rgb(167,167,167);font-size:13px;padding:0 38px;text-align:center;}img{display:",";max-height:100%;max-width:100%;}}nav{display:flex;height:",";place-content:center;place-items:center;position:absolute;&.top{top:0;width:100%;svg{height:16px;}}&.bottom{bottom:0;right:0;svg{height:20px;margin-top:2px;}}button{height:",";width:",";&:disabled{pointer-events:none;svg{fill:rgb(125,125,125);}}&:hover{background-color:rgba(75,75,75,50%);}&:active{background-color:rgba(100,100,100,50%);}}}"],d,h,d,d,({$showImage:e})=>e?"block":"none",h,h,h);var m=r(57631),g=r(72490),p=r(58437),v=r(44696);let w={cursor:"default",maxScale:7,minScale:1,panOnlyWhenZoomed:!0,step:.1};var x=(e,t,r)=>{let[n,i]=(0,s.useState)(),{getScale:l,reset:o,zoomIn:c,zoomOut:u,zoomToPoint:h,zoomWithWheel:d}=n||{},{processes:{[e]:f}}=(0,p.z)(),{closing:x,componentWindow:b,url:y=""}=f||{},{prependFileToTitle:T}=(0,v.Z)(e),L=(0,s.useCallback)(e=>{let{detail:{scale:t=0,x:r=0,y:s=0}={}}=e||{};if(y&&t){let{minScale:e,step:i}=w,l=t<e+i;l&&(r||s)&&window.setTimeout(()=>n?.reset(),50),x||T(l?(0,a.basename)(y):`${(0,a.basename)(y)} (${Math.floor(100*t)}%)`)}},[x,n,T,y]),j=(0,s.useCallback)(e=>d?.(e,{step:.3}),[d]);return(0,g.Z)(b,o),(0,s.useEffect)(()=>(t&&r&&(t.addEventListener("panzoomchange",L),r.addEventListener("wheel",j)),()=>{t?.removeEventListener("panzoomchange",L),r?.removeEventListener("wheel",j)}),[r,t,L,j]),(0,s.useEffect)(()=>(t&&!n&&i((0,m.Z)(t,w)),()=>n?.destroy()),[t,n]),{reset:o,scale:l?.(),zoomIn:c,zoomOut:u,zoomToPoint:h}},b=r(45279),y=r(20063),T=r(8955),L=r(24645),j=r(67278),E=r(97836),k=r(6484),C=r(14609);let{maxScale:$,minScale:Z}=w;var z=({id:e})=>{let{processes:{[e]:t}={},url:r}=(0,p.z)(),{componentWindow:u,closing:h=!1,url:d=""}=t||{},[m,g]=(0,s.useState)({}),[w,z]=(0,s.useState)(!1),{prependFileToTitle:A}=(0,v.Z)(e),{readFile:R,readdir:S}=(0,y.o)(),M=(0,s.useRef)(null),P=(0,s.useRef)(null),q=(0,s.useRef)(null),{reset:B,scale:I,zoomIn:H,zoomOut:D,zoomToPoint:U}=x(e,P.current,q.current),{fullscreenElement:O,toggleFullscreen:F}=(0,T.S)(),_=(0,s.useCallback)(async()=>{let e=await R(d),t=(0,k.RT)(d),r=await (0,C.decodeImageToBuffer)(t,e);g(n=>{let[a]=Object.keys(n);if(a){if(a===d)return n;B?.()}return{[d]:(0,k.wB)(t,r||e)}}),A((0,a.basename)(d))},[A,R,B,d]),K=(0,s.useCallback)(async({key:t})=>{switch(t){case"ArrowRight":case"ArrowLeft":{let n=await S((0,a.dirname)(d)),s=n.indexOf((0,a.basename)(d)),i=(t,s)=>{if(-1===t)return;let l=t+(s?1:-1);if(-1===l||l===n.length)return;let o=n[l];E.lM.has((0,k.RT)(o))?r(e,(0,a.join)((0,a.dirname)(d),o)):i(l,s)};i(s,"ArrowRight"===t)}}},[e,S,r,d]);return(0,s.useEffect)(()=>{!d||m[d]||h||_()},[h,_,m,d]),(0,s.useEffect)(()=>(u?.addEventListener("keydown",K),()=>u?.removeEventListener("keydown",K)),[u,K]),(0,n.jsxs)(f,{ref:M,$showImage:!!(m[d]&&!w),onContextMenu:k.nK,...(0,b.Z)({id:e}),children:[(0,n.jsxs)("nav",{className:"top",children:[(0,n.jsx)(j.Z,{disabled:!d||I===$||w,onClick:H,...(0,k.PS)("Zoom in"),children:(0,n.jsx)(o,{})}),(0,n.jsx)(j.Z,{disabled:!d||I===Z||w,onClick:D,...(0,k.PS)("Zoom out"),children:(0,n.jsx)(c,{})})]}),(0,n.jsxs)("figure",{ref:q,...(0,L.Z)(e=>{I===Z?U?.(2*Z,e,{animate:!0}):B?.()}),children:[(0,n.jsx)("img",{ref:P,alt:(0,a.basename)(d,(0,a.extname)(d)),decoding:"async",loading:"eager",onError:()=>z(!0),onLoad:()=>z(!1),src:m[d],...E.h7}),w&&(0,n.jsxs)("div",{children:[(0,a.basename)(d),(0,n.jsx)("br",{}),"Sorry, Photos can't open this file because the format is currently unsupported, or the file is corrupted"]})]}),(0,n.jsx)("nav",{className:"bottom",children:(0,n.jsx)(j.Z,{disabled:!d,onClick:()=>F(M.current,"show"),...(0,k.PS)("Full-screen"),children:O===M.current?(0,n.jsx)(l,{}):(0,n.jsx)(i,{})})})]})}},45279:function(e,t,r){var n=r(1864),a=r(67294),s=r(59746),i=r(23736),l=r(89670),o=r(20063),c=r(58437),u=r(76488),h=r(97836),d=r(6484);t.Z=({callback:e,directory:t=h.Ll,id:r,onDragLeave:f,onDragOver:m,updatePositions:g})=>{let{url:p}=(0,c.z)(),{iconPositions:v,sortOrders:w,setIconPositions:x}=(0,u.k)(),{exists:b,mkdirRecursive:y,updateFolder:T,writeFile:L}=(0,o.o)(),j=(0,a.useCallback)(async(e,t,a)=>{if(r){if(t){let s=(0,n.join)(h.Ll,e);if(await y(h.Ll),await L(s,t,!0))return a===l.v.UPDATE_URL&&p(r,s),await T(h.Ll,e),(0,n.basename)(s)}else a===l.v.UPDATE_URL&&p(r,e)}return""},[r,y,T,p,L]),{openTransferDialog:E}=(0,s.Z)();return{onDragLeave:f,onDragOver:e=>{m?.(e),(0,d.nK)(e)},onDrop:a=>{if(!h.my.has((0,d.RT)(t))){if(g&&a.target instanceof HTMLElement){let{files:e,text:r}=(0,i.p4)(a);if(0===e.length&&""===r)return;let s={x:a.clientX,y:a.clientY},l=[];if(r){try{l=JSON.parse(r)}catch{}if(!Array.isArray(l))return;let[e]=l;if(!e||e.startsWith(t)&&(0,n.basename)(e)===(0,n.relative)(t,e))return;l=l.map(e=>(0,n.basename)(e))}else e instanceof FileList?l=[...e].map(e=>e.name):l=[...e].map(e=>e.getAsFile()?.name||"").filter(Boolean);l=l.map(e=>{if(!v[`${t}/${e}`])return e;let r=0,a="";do r+=1,a=`${t}/${(0,n.basename)(e,(0,n.extname)(e))} (${r})${(0,n.extname)(e)}`;while(v[a]);return(0,n.basename)(a)}),(0,d.vi)(t,a.target,v,w,s,l,x,b)}(0,i.WG)(a,e||j,t,E,!!r)}}}}},44696:function(e,t,r){var n=r(67294),a=r(58437),s=r(37176),i=r(97836);t.Z=e=>{let{title:t}=(0,a.z)(),[r]=e.split(i.CC),{title:l}=s.Z[r]||{};return{appendFileToTitle:(0,n.useCallback)((r,n)=>{let a=r?` - ${r}${n?` ${i.xy}`:""}`:"";t(e,`${l}${a}`)},[e,l,t]),prependFileToTitle:(0,n.useCallback)((r,n,a)=>{let s=r?`${n?`${i.xy} `:""}${r}${a?" ":" - "}`:"";t(e,`${s}${l}`)},[e,l,t])}}},24645:function(e,t,r){var n=r(67294),a=r(97836);t.Z=(e,t=!1)=>{let r=(0,n.useRef)(),s=(0,n.useRef)(0);return{onClick:(0,n.useCallback)(n=>{let i=()=>{n.stopPropagation(),e(n)},l=()=>{r.current&&(clearTimeout(r.current),r.current=void 0)},o=()=>{s.current>=12&&l(),void 0===r.current?(n.target.removeEventListener("pointermove",o),s.current=0):s.current+=1};t?i():void 0===r.current?(r.current=window.setTimeout(l,a.jx.DOUBLE_CLICK),n.target.addEventListener("pointermove",o,{passive:!0})):(l(),i())},[e,t])}}},72490:function(e,t,r){var n=r(67294);t.Z=(e,t)=>{let[r,a]=(0,n.useState)();(0,n.useEffect)(()=>{t&&a(new ResizeObserver(t))},[t]),(0,n.useEffect)(()=>(e instanceof HTMLElement&&r?.observe(e),()=>{e instanceof HTMLElement&&r?.unobserve(e)}),[e,r])}},14609:function(e,t,r){r.d(t,{decodeImageToBuffer:function(){return p},getFirstAniImage:function(){return f},getLargestIcon:function(){return m}});var n=r(97836),a=r(48764).Buffer;function s(e,t=[]){let{length:r}=t,n=[e.charCodeAt(0),e.charCodeAt(1),e.charCodeAt(2),e.charCodeAt(3)].concat(t);return[r>>24&255,r>>16&255,r>>8&255,255&r].concat(n,function(e){let t=[],r=0;for(let e=0;e<256;++e)r=1&(r=1&(r=1&(r=1&(r=1&(r=1&(r=1&(r=1&(r=e)?3988292384^r>>>1:r>>>1)?3988292384^r>>>1:r>>>1)?3988292384^r>>>1:r>>>1)?3988292384^r>>>1:r>>>1)?3988292384^r>>>1:r>>>1)?3988292384^r>>>1:r>>>1)?3988292384^r>>>1:r>>>1)?3988292384^r>>>1:r>>>1,t[e]=r;for(let n of(r=-1,e))r=r>>>8^t[(r^n)&255];return[(r^=-1)>>24&255,r>>16&255,r>>8&255,255&r]}(n))}let i=e=>a.from(new Uint8Array(function(e){if(e.length<22||113!==e[0]||111!==e[1]||105!==e[2]||102!==e[3])return;let t=e[4]<<24|e[5]<<16|e[6]<<8|e[7],r=e[12],n=e[13];if(3!==r&&4!==r&&1!==n)return;let a=e.length-8,i=[],l=Array.from({length:64}).fill(0),o=255,c=14;for(;c<a;){let t=e[c],r=t>>6;if(255===t){let t=e[c+1],r=e[c+2],n=e[c+3],a=e[c+4];c+=5,o=t<<24|r<<16|n<<8|a,l[(3*t+5*r+7*n+11*a)%64]=o,i.push(o)}else if(254===t){let t=e[c+1],r=e[c+2],n=e[c+3],a=255&o;c+=4,o=t<<24|r<<16|n<<8|a,l[(3*t+5*r+7*n+11*a)%64]=o,i.push(o)}else if(0===r){if(0===e[c]&&0===e[c+1]&&0===e[c+2]&&0===e[c+3]&&0===e[c+4]&&0===e[c+5]&&0===e[c+6]&&1===e[c+7])break;c+=1,o=l[t],i.push(o)}else if(1===r){let e=(o>>24&255)+((t>>4&3)-2)&255,r=(o>>16&255)+((t>>2&3)-2)&255,n=(o>>8&255)+((3&t)-2)&255,a=255&o;c+=1,o=e<<24|r<<16|n<<8|a,l[(3*e+5*r+7*n+11*a)%64]=o,i.push(o)}else if(2===r){let r=e[c+1],n=(63&t)-32&255,a=(r>>4&15)-8+n&255,s=(15&r)-8+n&255,u=(o>>24&255)+a&255,h=(o>>16&255)+n&255,d=(o>>8&255)+s&255,f=255&o;c+=2,o=u<<24|h<<16|d<<8|f,l[(3*u+5*h+7*d+11*f)%64]=o,i.push(o)}else{for(let e=(63&t)+1;e>0;--e)i.push(o);c+=1}}return function(e,t,r){let n=[],a=[120,1],i=1+t*r,l=65535^i;for(let s=0;e.length!=s;s+=t){let o=s+t;a.push(o===e.length?1:0,255&i,i>>8&255,255&l,l>>8&255),n.push(1),a.push(0);for(let t=s;o!==t;++t){let s=e[t];n.push(s>>24&255),a.push(s>>24&255),n.push(s>>16&255),a.push(s>>16&255),n.push(s>>8&255),a.push(s>>8&255),4===r&&(n.push(255&s),a.push(255&s))}}let o=e.length/t;return[137,80,78,71,13,10,26,10].concat(s("IHDR",[t>>24&255,t>>16&255,t>>8&255,255&t,o>>24&255,o>>16&255,o>>8&255,255&o,8,3===r?2:6,0,0,0]),s("IDAT",a.concat(function(e){let t=0,r=0;for(let n of e)r=(r+(t=(t+n)%65521))%65521;return[r>>8,255&r,t>>8,255&t]}(n))),s("IEND"))}(i,t,r)}(new Uint8Array(e))));var l=r(6484),o=r(48764).Buffer;let c=async e=>{let t=document.createElement("img");return document.createElement("picture").append(Object.assign(document.createElement("source"),{srcset:"data:,x",type:e}),t),await new Promise(e=>{requestAnimationFrame(e)}),"string"==typeof t.currentSrc&&t.currentSrc.length>0},u=async e=>await c("image/jxl")?e:new Promise(t=>{let r=new Worker("System/JXL.js/jxl_dec.js");r.postMessage({image:e,jxlSrc:"image.jxl"}),r.addEventListener("message",e=>t((0,l.fv)(e?.data?.imgData)))}),h=async e=>await c("image/heic")?e:new Promise(t=>{let n=new Worker(r.tu(new URL(r.p+r.u(1337),r.b)),{name:"libheif"});n.postMessage(e),n.addEventListener("message",({data:e})=>t((0,l.fv)(e)))}),d=async e=>{let t=await (0,l.iQ)(),{parseAni:a}=await r.e(396,"high").then(r.bind(r,70396)),s=[];try{({images:s}=a(e))}catch{return e}return await Promise.all(s.map(e=>new Promise(r=>{let a=new Image,s=(0,l.YS)(o.from(e));t.setOptions({transparent:""}),a.addEventListener("load",()=>{t.addFrame(a),(0,l.EK)(s),r()},n.K7),a.src=s}))),new Promise(e=>{t.on("finished",t=>t.arrayBuffer().then(t=>e(o.from(t)))).render()})},f=async e=>{let t;let{parseAni:n}=await r.e(396,"high").then(r.bind(r,70396));try{return{images:[t]}=n(e),o.from(t)}catch{}},m=async(e,t)=>{try{let{default:n}=await r.e(5704,"high").then(r.t.bind(r,95704,23)),[a]=n(e).filter(({width:e})=>e<=t).sort((e,t)=>t.width-e.width),s=document.createElement("canvas"),i=s.getContext("2d",{desynchronized:!0});return s.width=a.width,s.height=a.height,i?.putImageData(a,0,0),s.toDataURL()}catch{return""}},g=async(e,t)=>new Promise(r=>{let a=new Image;a.addEventListener("load",()=>r(!0),n.K7),a.addEventListener("error",()=>r(!1),n.K7),a.src=(0,l.wB)(e,t)}),p=async(e,t)=>{switch(e){case".jxl":return u(t);case".qoi":return i(t);case".ani":try{return d(t)}catch{return f(t)}case".cur":return await g(e,t)?t:f(t);default:if(n.Wr.has(e))return h(t);if(n.M0.has(e))return o.from((await r.e(6173,"high").then(r.t.bind(r,66173,23))).bufferToURI(t).replace("data:image/png;base64,",""),"base64")}return t}}}]);
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1544],
    {
        918: function (e, t, i) {
            i.d(t, {
                BS: function () {
                    return s;
                },
                FC: function () {
                    return o;
                },
                F_: function () {
                    return n;
                },
                wV: function () {
                    return r;
                },
            });
            let n = { bottom: !1, bottomLeft: !1, bottomRight: !1, left: !1, right: !1, top: !1, topLeft: !1, topRight: !1 },
                o = { bottom: !0, bottomLeft: !0, bottomRight: !0, left: !0, right: !0, top: !0, topLeft: !0, topRight: !0 },
                r = 30,
                s = 166,
                l = {
                    cancel: ".cancel",
                    dragHandleClassName: "handle",
                    enableUserSelectHack: !1,
                    minHeight: `${r}px`,
                    minWidth: `${s}px`,
                    resizeHandleStyles: {
                        bottom: { bottom: "-3px", cursor: "ns-resize", height: "6px" },
                        bottomLeft: { bottom: "-3px", cursor: "nesw-resize", height: "12px", left: "-3px", width: "12px" },
                        bottomRight: { bottom: "-3px", cursor: "nwse-resize", height: "12px", right: "-3px", width: "12px" },
                        left: { cursor: "ew-resize", left: "-3px", width: "6px" },
                        right: { cursor: "ew-resize", right: "-3px", width: "6px" },
                        top: { cursor: "ns-resize", height: "6px", top: "-3px" },
                        topLeft: { cursor: "nwse-resize", height: "12px", left: "-3px", top: "-3px", width: "12px" },
                        topRight: { cursor: "nesw-resize", height: "12px", right: "-3px", top: "-3px", width: "12px" },
                    },
                };
            t.ZP = l;
        },
        67364: function (e, t, i) {
            i.d(t, {
                J6: function () {
                    return l;
                },
                Tw: function () {
                    return a;
                },
                bJ: function () {
                    return s;
                },
                dO: function () {
                    return r;
                },
            });
            var n = i(85893),
                o = i(67294);
            let r = (0, o.memo)(() => (0, n.jsx)("svg", { viewBox: "0 0 10 1", xmlns: "http://www.w3.org/2000/svg", children: (0, n.jsx)("path", { d: "M0 0h10v1H0z" }) })),
                s = (0, o.memo)(() => (0, n.jsx)("svg", { viewBox: "0 0 10 10", xmlns: "http://www.w3.org/2000/svg", children: (0, n.jsx)("path", { d: "M0 0v10h10V0H0zm1 1h8v8H1V1z" }) })),
                l = (0, o.memo)(() => (0, n.jsx)("svg", { viewBox: "0 0 10 10", xmlns: "http://www.w3.org/2000/svg", children: (0, n.jsx)("path", { d: "M2.1 0v2H0v8.1h8.2v-2h2V0H2.1zm5.1 9.2H1.1V3h6.1v6.2zm2-2.1h-1V2H3.1V1h6.1v6.1z" }) })),
                a = (0, o.memo)(() => (0, n.jsx)("svg", { viewBox: "0 0 10 10", xmlns: "http://www.w3.org/2000/svg", children: (0, n.jsx)("path", { d: "M10.2.7L9.5 0 5.1 4.4.7 0 0 .7l4.4 4.4L0 9.5l.7.7 4.4-4.4 4.4 4.4.7-.7-4.4-4.4z" }) }));
        },
        64146: function (e, t, i) {
            i.d(t, {
                Z: function () {
                    return c;
                },
            });
            var n = i(67294),
                o = i(23561),
                r = i(7502),
                s = i(58437),
                l = i(97836),
                a = i(76488),
                c = (e) => {
                    let { contextMenu: t } = (0, r.H)(),
                        { onClose: i, onMaximize: c, onMinimize: u } = (0, o.Z)(e),
                        {
                            processes: { [e]: A },
                        } = (0, s.z)(),
                        { setForegroundId: h } = (0, a.k)(),
                        { allowResizing: d = !0, componentWindow: g, hideMaximizeButton: p, hideMinimizeButton: m, maximized: f, minimized: x } = A || {},
                        w = (0, n.useCallback)(() => {
                            h(e), g?.focus(l.eS);
                        }, [g, e, h]);
                    return (0, n.useMemo)(
                        () =>
                            t?.(() => {
                                let e = f || x,
                                    t = !p || !m;
                                return [
                                    t && {
                                        action: () => {
                                            x ? u() : c(), w();
                                        },
                                        disabled: !e,
                                        icon: e
                                            ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAOklEQVR4AWMYVmA2BiBN/6JFi3DKrcUAEEGcGnZiAIggTg1HwQCNDSSpp+H8hQtoiECAXMcADMMbAABMtF75qvi0qwAAAABJRU5ErkJggg=="
                                            : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAJElEQVR42mNABaPA09PzPzZMsaFk20x/A2D8gTIAE9Mp+kYBAJPzT5+OMe9rAAAAAElFTkSuQmCC",
                                        label: "Restore",
                                    },
                                    !m && {
                                        action: u,
                                        disabled: x,
                                        icon: x
                                            ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGElEQVR42mMYPGAUjAJPT8//+DCNDRgFAPTaHaFVv24VAAAAAElFTkSuQmCC"
                                            : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAIUlEQVR42mMYPGAUjIIDBw78x4cJGnDu3Ln/+DB+3aMAAPFzNUFuAVJEAAAAAElFTkSuQmCC",
                                        label: "Minimize",
                                    },
                                    !p && {
                                        action: () => {
                                            c(), w();
                                        },
                                        disabled: e || !d,
                                        icon: e
                                            ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAHklEQVR42mOgEhgFnp6e//Fh+hmALj5UDBj4QBwFANQKUXn4YyGJAAAAAElFTkSuQmCC"
                                            : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAR0lEQVR42u3IoRHAMAzFUO+/gllKG5IgD2DujX4vC8ikMO9ORHb9xN1FWWc8Q5R15jt1gs/22jrBZxGhE3yWmaKsU1Wi7EIfHneIsXEKuhAAAAAASUVORK5CYII=",
                                        label: "Maximize",
                                    },
                                    t && l.Os,
                                    {
                                        action: i,
                                        icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAMElEQVR4AWMgEoyC2TCAwsYPFqMCouzZCQPEOmzvnj0QRJTqo6iAgOoLMIDCHsYAACjTO7/gCQlBAAAAAElFTkSuQmCC",
                                        label: "Close",
                                    },
                                ].filter(Boolean);
                            }),
                        [d, t, w, p, m, f, x, i, c, u]
                    );
                };
        },
        23561: function (e, t, i) {
            var n = i(67294),
                o = i(67318),
                r = i(58437),
                s = i(76488),
                l = i(86178),
                a = i(97836);
            t.Z = (e) => {
                let t = (0, o.Z)(e),
                    { setForegroundId: i, removeFromStack: c } = (0, s.k)(),
                    { closeWithTransition: u, maximize: A, minimize: h } = (0, r.z)(),
                    d = (0, l.R)(),
                    g = (0, n.useCallback)(() => {
                        h(e), i(t);
                    }, [e, h, t, i]),
                    p = (0, n.useCallback)(() => {
                        A(e), d.current[e]?.componentWindow?.focus(a.eS);
                    }, [e, A, d]);
                return {
                    onClose: (0, n.useCallback)(() => {
                        c(e), u(e), i(t);
                    }, [u, e, t, c, i]),
                    onMaximize: p,
                    onMinimize: g,
                };
            };
        },
        38365: function (e, t, i) {
            i.d(t, {
                Rf: function () {
                    return l;
                },
                b$: function () {
                    return u;
                },
                hu: function () {
                    return s;
                },
                ix: function () {
                    return c;
                },
                mZ: function () {
                    return a;
                },
            });
            var n = i(918),
                o = i(97836),
                r = i(6484);
            let s = (e, t, i = [], n = 0) => {
                let [s] = e.split(o.CC),
                    l = `${s}${o.CC}`,
                    a = i.find((e) => e.startsWith(l)) || "",
                    { componentWindow: c } = t?.[a] || {},
                    { x: u = 0, y: A = 0, width: h = 0, height: d = 0 } = c?.getBoundingClientRect() || {};
                return !(u + n + h > (0, r.E9)() || A + n + d > (0, r.sI)()) && (u || A) ? { x: u + n, y: A + n } : void 0;
            },
                l = ({ height: e, width: t }) => {
                    let [i, n] = [(0, r.sI)(), (0, r.E9)()];
                    return { x: Math.floor(n / 2 - (0, r.Vy)(t) / 2), y: Math.floor((i - o.bK) / 2 - (0, r.Vy)(e) / 2) };
                },
                a = { BOTTOM: 15, LEFT: 150, RIGHT: 50, TOP: 15 },
                c = (e, t, i = !1) => {
                    let { position: n, size: o } = e || {},
                        { x: s = 0, y: l = 0 } = n || {},
                        { height: c = 0, width: u = 0 } = o || {};
                    return i ? s + a.RIGHT > t.x || s + (0, r.Vy)(u) - a.LEFT < 0 || l + a.BOTTOM > t.y || l + a.TOP < 0 : s < 0 || l < 0 || s + (0, r.Vy)(u) > t.x || l + (0, r.Vy)(c) > t.y;
                },
                u = (e, t) => {
                    let i = Number(e.height),
                        s = Number(e.width),
                        [l, a] = [(0, r.sI)(), (0, r.E9)()],
                        c = l - o.bK,
                        u = Math.max(n.wV, Math.min(i, c)),
                        A = Math.max(n.BS, Math.min(s, a));
                    if (!t) return { height: u, width: A };
                    let h = i === u,
                        d = s === A;
                    return h || d
                        ? h
                            ? d
                                ? { height: u, width: A }
                                : { height: Math.round(u / (s / A)), width: A }
                            : { height: u, width: Math.round(A / (i / u)) }
                        : i > s
                            ? { height: u, width: Math.round(A / (c / u)) }
                            : { height: Math.round(u / (a / A)), width: A };
                };
        },
        61544: function (e, t, i) {
            i.r(t),
                i.d(t, {
                    default: function () {
                        return Z;
                    },
                });
            var n = i(85893),
                o = i(67294),
                r = i(10508);
            let s = r.ZP.div(["background-color:inherit;height:inherit;width:inherit;"]);
            var l = i(42663),
                a = i(918),
                c = i(58437),
                u = (e) => {
                    let { processes: t } = (0, c.z)(),
                        { maximized: i = !1, minimized: n = !1 } = t[e] || {},
                        r = (0, o.useRef)(!1);
                    return (
                        (0, o.useEffect)(() => {
                            r.current = !!(i || n);
                        }, [i, n]),
                        r
                    );
                },
                A = i(38365),
                h = i(76488),
                d = i(6484),
                g = (e, t) => {
                    let {
                        sizes: {
                            window: { cascadeOffset: i },
                        },
                    } = (0, r.Fg)(),
                        { processes: n } = (0, c.z)(),
                        { autoSizing: s, closing: l, componentWindow: a, initialRelativePosition: g } = n[e] || {},
                        { stackOrder: p, windowStates: { [e]: m } = {} } = (0, h.k)(),
                        { position: f, size: x } = m || {},
                        w = (0, o.useMemo)(() => (0, A.ix)(m, (0, d.mE)()), [m]),
                        [b, v] = (0, o.useState)(() => (!w && f) || (0, A.hu)(e, n, p, i) || (0, A.Rf)(t)),
                        C = u(e);
                    return (
                        (0, o.useEffect)(() => {
                            let e = () => {
                                let e = (0, d.mE)();
                                (0, A.ix)({ position: b, size: t }, e, !0) &&
                                    v(({ x: t, y: i }) => {
                                        let n = e.x - A.mZ.RIGHT,
                                            o = e.y - A.mZ.BOTTOM;
                                        return { x: t > n ? n : t, y: i > o ? o : i };
                                    });
                            };
                            return window.addEventListener("resize", e, { passive: !0 }), () => window.removeEventListener("resize", e);
                        }, [b, t]),
                        (0, o.useLayoutEffect)(() => {
                            !s || l || !x || f || C.current || v((0, A.Rf)(x));
                        }, [s, C, l, f, x]),
                        (0, o.useLayoutEffect)(() => {
                            g && a && t && v((0, d.rB)(a, g, t));
                        }, [a, g, t]),
                        [b, v]
                    );
                },
                p = i(97836),
                m = (e) => {
                    let { processes: { [e]: t } = {} } = (0, c.z)(),
                        { defaultSize: i } = t || {},
                        {
                            sizes: { titleBar: n },
                        } = (0, r.Fg)();
                    return (0, o.useMemo)(() => (i ? { height: Number(i.height) + n.height, width: i.width } : p.i9), [i, n.height]);
                },
                f = (e, t = !1) => {
                    let i = m(e),
                        { windowStates: { [e]: { size: n = i } = {} } = {} } = (0, h.k)(),
                        {
                            processes: { [e]: { lockAspectRatio: r = !1 } = {} },
                        } = (0, c.z)(),
                        [s, l] = (0, o.useState)(() => (0, A.b$)(n, r)),
                        a = u(e);
                    return (
                        (0, o.useLayoutEffect)(() => {
                            t && !a.current && l((0, A.b$)(n, r));
                        }, [t, a, r, n]),
                        [s, l]
                    );
                };
            let x = (e = !0) =>
                document.querySelectorAll("iframe").forEach((t) => {
                    t.style.pointerEvents = e ? "initial" : "none";
                });
            var w = (e) => {
                let {
                    processes: { [e]: { allowResizing: t = !0, autoSizing: i = !1, lockAspectRatio: n = !1, maximized: r = !1 } = {} },
                } = (0, c.z)(),
                    { setWindowStates: s } = (0, h.k)(),
                    [l, u] = f(e, i),
                    [p, m] = g(e, l),
                    w = (0, o.useCallback)(
                        (t, { x: i, y: n }) => {
                            x();
                            let o = { x: i, y: n };
                            (0, A.ix)({ position: o, size: l }, (0, d.mE)(), !0) || (m(o), s((t) => ({ ...t, [e]: { ...t[e], position: o } })));
                        },
                        [e, m, s, l]
                    ),
                    b = (0, o.useCallback)(
                        (t, i, { style: { height: n, width: o } }, r, l) => {
                            x();
                            let a = { height: (0, d.Vy)(n), width: (0, d.Vy)(o) };
                            u(a), m(l), s((t) => ({ ...t, [e]: { ...t[e], position: l, size: a } }));
                        },
                        [e, m, u, s]
                    ),
                    v = (0, o.useCallback)(() => x(!1), []),
                    C = (0, o.useMemo)(() => (t && !r ? a.FC : a.F_), [t, r]);
                return { disableDragging: r, enableResizing: C, lockAspectRatio: n, onDragStart: v, onDragStop: w, onResizeStart: v, onResizeStop: b, position: p, size: l, ...a.ZP };
            };
            let b = (e) => (t) => {
                t?.setAttribute("tabindex", p.LL.tabIndex.toString()),
                    t?.addEventListener("contextmenu", d.nK),
                    t?.addEventListener("mousedown", (t) => {
                        t.preventDefault(), e?.focus(p.eS);
                    });
            };
            var v = ({ children: e, id: t, zIndex: i }) => {
                let {
                    linkElement: r,
                    processes: { [t]: s },
                } = (0, c.z)(),
                    { Component: a, componentWindow: u, maximized: A, minimized: h } = s || {},
                    d = (0, o.useRef)(null),
                    g = w(t),
                    p = (0, o.useMemo)(() => ({ pointerEvents: h ? "none" : void 0, zIndex: i }), [h, i]),
                    m = (0, o.useCallback)(
                        (e) => {
                            d.current = e;
                            let [i] = e?.resizableElement?.current?.children || [];
                            a && !u && i && r(t, "componentWindow", i);
                        },
                        [a, u, t, r]
                    );
                return (
                    (0, o.useEffect)(() => {
                        if (!A) {
                            let { current: e } = d,
                                [t, i] = e?.resizableElement?.current?.children || [];
                            [...(i?.children || [])].forEach(b(t));
                        }
                    }, [A]),
                    (0, n.jsx)(l.s, { ref: m, style: p, ...g, children: e })
                );
            },
                C = i(8897);
            let z = (0, r.ZP)(C.m.section)(
                ["background-color:", ";box-shadow:", ";contain:strict;height:100%;outline:", ";overflow:hidden;position:absolute;width:100%;header + *{height:", ";}"],
                ({ $backgroundColor: e, theme: t }) => e || t.colors.window.background,
                ({ $isForeground: e, theme: t }) => (e ? t.colors.window.shadow : t.colors.window.shadowInactive),
                ({ $isForeground: e, theme: t }) => `${t.sizes.window.outline} solid ${e ? t.colors.window.outline : t.colors.window.outlineInactive}`,
                ({ theme: e }) => `calc(100% - ${e.sizes.titleBar.height}px)`
            ),
                E = ({ $foreground: e, theme: t }) => (e ? `1px solid ${t.colors.titleBar.background}` : `1px solid ${t.colors.titleBar.backgroundInactive}`),
                B = r.ZP.header(
                    [
                        "background-color:",
                        ";border-bottom:",
                        ";display:flex;height:",
                        "px;position:relative;top:0;z-index:2;> button{align-items:center;color:",
                        ";display:flex;flex-grow:1;font-size:",
                        ";font-weight:400;min-width:0;figure{align-items:center;display:flex;margin-left:8px;min-width:inherit;pointer-events:none;position:relative;top:-1px;picture{height:",
                        ";margin-right:",
                        ";width:",
                        ";}img,picture{pointer-events:all;}figcaption{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}}}nav{display:flex;button{border-left:",
                        ";box-sizing:content-box;display:flex;place-content:center;place-items:center;width:",
                        ";svg{fill:",
                        ";margin:0 1px 2px 0;width:",
                        ";}&.minimize{svg{margin-bottom:1px;margin-right:0;}}&:hover{background-color:",
                        ";svg{fill:",
                        ";}&.close{background-color:",
                        ";transition:background-color 0.25s ease;}}&:active{background-color:rgb(51,51,51);&.close{background-color:rgb(139,10,20);}}&:disabled{svg{fill:",
                        ";}&:hover{background-color:inherit;}}}}",
                    ],
                    ({ $foreground: e, theme: t }) => (e ? t.colors.titleBar.background : t.colors.titleBar.backgroundInactive),
                    E,
                    ({ theme: e }) => e.sizes.titleBar.height,
                    ({ $foreground: e, theme: t }) => (e ? t.colors.titleBar.text : t.colors.titleBar.textInactive),
                    ({ theme: e }) => e.sizes.titleBar.fontSize,
                    ({ theme: e }) => e.sizes.titleBar.iconSize,
                    ({ theme: e }) => e.sizes.titleBar.iconMarginRight,
                    ({ theme: e }) => e.sizes.titleBar.iconSize,
                    E,
                    ({ theme: e }) => e.sizes.titleBar.buttonWidth,
                    ({ $foreground: e, theme: t }) => (e ? t.colors.titleBar.text : t.colors.titleBar.buttonInactive),
                    ({ theme: e }) => e.sizes.titleBar.buttonIconWidth,
                    ({ theme: e }) => e.colors.titleBar.backgroundHover,
                    ({ theme: e }) => e.colors.titleBar.text,
                    ({ theme: e }) => e.colors.titleBar.closeHover,
                    ({ $foreground: e }) => (e ? "rgb(50, 50, 50)" : "rgb(60, 60, 60)")
                );
            var k = i(67364),
                R = i(64146),
                M = i(23561),
                S = i(7502),
                y = i(24645),
                j = i(67278),
                O = i(46581),
                V = (0, o.memo)(({ id: e }) => {
                    let {
                        processes: { [e]: t },
                    } = (0, c.z)(),
                        { allowResizing: i = !0, closing: r, componentWindow: s, hideMaximizeButton: l, hideMinimizeButton: u, hideTitlebarIcon: A, icon: g, title: m, maximized: f } = t || {},
                        { foregroundId: x } = (0, h.k)(),
                        w = e === x,
                        { onClose: b, onMaximize: v, onMinimize: C } = (0, M.Z)(e),
                        z = (0, y.Z)(b),
                        E = (0, y.Z)(v),
                        { menu: V, setMenu: T } = (0, S.H)(),
                        I = (0, R.Z)(e),
                        Z = (0, o.useRef)(0),
                        L = (0, o.useRef)(),
                        F = (0, o.useRef)(),
                        Q = (0, o.useCallback)(
                            (e) => {
                                let { x: t, y: i } = s?.getBoundingClientRect() || {};
                                Date.now() - Z.current >= p.XX && L.current && L.current.x === t && L.current.y === i && I.onContextMenuCapture(Object.assign(e, { touches: F.current }));
                            },
                            [s, I]
                        ),
                        N = (0, o.useCallback)(
                            ({ touches: e }) => {
                                s && (s.blur(), s.focus(p.eS), (Z.current = Date.now()), (L.current = s.getBoundingClientRect()), (F.current = e));
                            },
                            [s]
                        );
                    return (0, n.jsxs)(B, {
                        $foreground: w,
                        className: a.ZP.dragHandleClassName,
                        onDragOver: d.nK,
                        onDrop: d.nK,
                        ...I,
                        children: [
                            (0, n.jsx)(j.Z, {
                                ...(l || !i || r ? {} : E),
                                onMouseDownCapture: ({ button: e }) => {
                                    0 === e && Object.keys(V).length > 0 && T(Object.create(null));
                                },
                                onMouseUpCapture: () => {
                                    s && s !== document.activeElement && s.focus(p.eS);
                                },
                                onTouchEndCapture: Q,
                                onTouchStartCapture: N,
                                children: (0, n.jsxs)("figure", { children: [!A && (0, n.jsx)(O.Z, { alt: m, imgSize: 16, src: g, ...z }), (0, n.jsx)("figcaption", { children: m })] }),
                            }),
                            (0, n.jsxs)("nav", {
                                className: "cancel",
                                children: [
                                    !u && (0, n.jsx)(j.Z, { className: "minimize", onClick: C, ...(0, d.PS)("Minimize"), children: (0, n.jsx)(k.dO, {}) }),
                                    !l && (0, n.jsx)(j.Z, { className: "maximize", disabled: !i, onClick: v, ...(0, d.PS)(f ? "Restore Down" : "Maximize"), children: f ? (0, n.jsx)(k.J6, {}) : (0, n.jsx)(k.bJ, {}) }),
                                    (0, n.jsx)(j.Z, { $short: l && u, className: "close", onClick: b, ...(0, d.PS)("Close"), children: (0, n.jsx)(k.Tw, {}) }),
                                ],
                            }),
                        ],
                    });
                }),
                T = i(45032),
                I = i(85738),
                Z = ({ children: e, id: t }) => {
                    let {
                        linkElement: i,
                        processes: { [t]: r },
                    } = (0, c.z)(),
                        { backgroundColor: l, Component: a, hideTitlebar: u, peekElement: A } = r || {},
                        { foregroundId: d } = (0, h.k)(),
                        g = t === d,
                        { zIndex: p, ...m } = (0, T.Z)(t),
                        f = (0, I.Z)(t),
                        x = (0, o.useCallback)(
                            (e) => {
                                a && !A && e && i(t, "peekElement", e);
                            },
                            [a, t, i, A]
                        );
                    return (0, n.jsx)(v, { id: t, zIndex: p, children: (0, n.jsx)(z, { $backgroundColor: l, $isForeground: g, ...m, ...f, children: (0, n.jsxs)(s, { ref: x, children: [!u && (0, n.jsx)(V, { id: t }), e] }) }) });
                };
        },
        45032: function (e, t, i) {
            var n = i(67294),
                o = i(58437),
                r = i(76488),
                s = i(97836);
            t.Z = (e, t) => {
                let { foregroundId: i, prependToStack: l, setForegroundId: a, stackOrder: c = [] } = (0, r.k)(),
                    {
                        processes: { [e]: u },
                    } = (0, o.z)(),
                    { closing: A, componentWindow: h, minimized: d, taskbarEntry: g, url: p } = u || {},
                    m = (0, n.useMemo)(() => c.length + (d ? 1 : -c.indexOf(e)) + 1, [e, d, c]),
                    f = (0, n.useCallback)(
                        (i) => {
                            let { relatedTarget: n } = i,
                                o = n === g,
                                r = n && g?.previousSibling?.contains(n),
                                l = n && h?.contains(n);
                            a((n) => (n !== e || o || l ? n : (r ? h?.focus(s.eS) : t?.onBlurCapture?.(i), r ? n : "")));
                        },
                        [t, h, e, a, g]
                    ),
                    x = (0, n.useCallback)(
                        (i) => {
                            let { relatedTarget: n } = i || {};
                            h?.contains(document.activeElement) ? (l(e), a(e)) : (n && document.activeElement !== g) || (h?.focus(s.eS), t?.onFocusCapture?.(i));
                        },
                        [t, h, e, l, a, g]
                    );
                return (
                    (0, n.useLayoutEffect)(() => {
                        e === i && x();
                    }, [i, e, x]),
                    (0, n.useLayoutEffect)(() => {
                        !h || A || d || a(e);
                    }, [A, h, e, d, a, p]),
                    (0, n.useMemo)(() => ({ onBlurCapture: f, onClickCapture: x, onFocusCapture: x, zIndex: m, ...s.LL }), [x, f, m])
                );
            };
        },
        67318: function (e, t, i) {
            var n = i(58437),
                o = i(76488);
            t.Z = (e) => {
                let { stackOrder: t = [] } = (0, o.k)(),
                    { processes: i } = (0, n.z)();
                return t.find((t) => t !== e && !i?.[t]?.minimized) || "";
            };
        },
        85738: function (e, t, i) {
            var n = i(67294),
                o = i(58437),
                r = i(97836),
                s = i(6484);
            let l = { height: "inherit", opacity: 1, scale: 1, width: "inherit" },
                a = { opacity: 0, scale: 0.95 },
                c = { ...a, height: "inherit", width: "inherit" },
                u = { ...c, scale: 1 },
                A = { opacity: 1, scale: 1 },
                h = { opacity: 0, scale: 0.7 },
                d = () => ({ height: (0, s.sI)() - r.bK, width: (0, s.E9)() });
            t.Z = (e, t = !1) => {
                let { processes: { [e]: i } = {} } = (0, o.z)(),
                    { closing: s, componentWindow: g, maximized: p, minimized: m, taskbarEntry: f } = i || {},
                    [x, w] = (0, n.useState)(Object.create(null)),
                    [b, v] = (0, n.useState)(Object.create(null));
                return (
                    (0, n.useLayoutEffect)(() => {
                        if (!g || s) return;
                        let { x: e = 0, y: t = 0 } = g.getBoundingClientRect();
                        w({ ...A, ...d(), x: 0 - e, y: 0 - t });
                    }, [s, g, p]),
                    (0, n.useLayoutEffect)(() => {
                        if (!f || !g || s) return;
                        let { height: e = 0, width: t = 0, x: i = 0, y: n = 0 } = f.getBoundingClientRect(),
                            { height: o = 0, width: r = 0, x: l = 0, y: a = 0 } = g.getBoundingClientRect(),
                            c = Math.round(i - l - r / 2 + t / 2),
                            u = Math.round(n - a - o / 2 + e / 2);
                        (0 === c && 0 === u) || v({ ...h, x: c, y: u });
                    }, [s, g, m, f]),
                    (0, n.useEffect)(() => {
                        let e = () => {
                            p && w((e) => ({ ...e, ...d() }));
                        };
                        return window.addEventListener("resize", e, { passive: !0 }), () => window.removeEventListener("resize", e);
                    }, [p]),
                    {
                        animate: (m ? "minimize" : "") || (!s && p ? "maximize" : "") || "active",
                        exit: "exit",
                        initial: "initial",
                        transition: { duration: r.Nb.WINDOW },
                        variants: { active: l, exit: a, initial: t ? u : c, maximize: x, minimize: b },
                    }
                );
            };
        },
    },
]);






// "use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1544],{918:function(e,t,i){i.d(t,{BS:function(){return s},FC:function(){return o},F_:function(){return n},wV:function(){return r}});let n={bottom:!1,bottomLeft:!1,bottomRight:!1,left:!1,right:!1,top:!1,topLeft:!1,topRight:!1},o={bottom:!0,bottomLeft:!0,bottomRight:!0,left:!0,right:!0,top:!0,topLeft:!0,topRight:!0},r=30,s=166,l={cancel:".cancel",dragHandleClassName:"handle",enableUserSelectHack:!1,minHeight:`${r}px`,minWidth:`${s}px`,resizeHandleStyles:{bottom:{bottom:"-3px",cursor:"ns-resize",height:"6px"},bottomLeft:{bottom:"-3px",cursor:"nesw-resize",height:"12px",left:"-3px",width:"12px"},bottomRight:{bottom:"-3px",cursor:"nwse-resize",height:"12px",right:"-3px",width:"12px"},left:{cursor:"ew-resize",left:"-3px",width:"6px"},right:{cursor:"ew-resize",right:"-3px",width:"6px"},top:{cursor:"ns-resize",height:"6px",top:"-3px"},topLeft:{cursor:"nwse-resize",height:"12px",left:"-3px",top:"-3px",width:"12px"},topRight:{cursor:"nesw-resize",height:"12px",right:"-3px",top:"-3px",width:"12px"}}};t.ZP=l},67364:function(e,t,i){i.d(t,{J6:function(){return l},Tw:function(){return a},bJ:function(){return s},dO:function(){return r}});var n=i(85893),o=i(67294);let r=(0,o.memo)(()=>(0,n.jsx)("svg",{viewBox:"0 0 10 1",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M0 0h10v1H0z"})})),s=(0,o.memo)(()=>(0,n.jsx)("svg",{viewBox:"0 0 10 10",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M0 0v10h10V0H0zm1 1h8v8H1V1z"})})),l=(0,o.memo)(()=>(0,n.jsx)("svg",{viewBox:"0 0 10 10",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M2.1 0v2H0v8.1h8.2v-2h2V0H2.1zm5.1 9.2H1.1V3h6.1v6.2zm2-2.1h-1V2H3.1V1h6.1v6.1z"})})),a=(0,o.memo)(()=>(0,n.jsx)("svg",{viewBox:"0 0 10 10",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M10.2.7L9.5 0 5.1 4.4.7 0 0 .7l4.4 4.4L0 9.5l.7.7 4.4-4.4 4.4 4.4.7-.7-4.4-4.4z"})}))},64146:function(e,t,i){i.d(t,{Z:function(){return c}});var n=i(67294),o=i(23561),r=i(7502),s=i(58437),l=i(97836),a=i(76488),c=e=>{let{contextMenu:t}=(0,r.H)(),{onClose:i,onMaximize:c,onMinimize:u}=(0,o.Z)(e),{processes:{[e]:A}}=(0,s.z)(),{setForegroundId:h}=(0,a.k)(),{allowResizing:d=!0,componentWindow:g,hideMaximizeButton:p,hideMinimizeButton:m,maximized:f,minimized:x}=A||{},w=(0,n.useCallback)(()=>{h(e),g?.focus(l.eS)},[g,e,h]);return(0,n.useMemo)(()=>t?.(()=>{let e=f||x,t=!p||!m;return[t&&{action:()=>{x?u():c(),w()},disabled:!e,icon:e?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAOklEQVR4AWMYVmA2BiBN/6JFi3DKrcUAEEGcGnZiAIggTg1HwQCNDSSpp+H8hQtoiECAXMcADMMbAABMtF75qvi0qwAAAABJRU5ErkJggg==":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAJElEQVR42mNABaPA09PzPzZMsaFk20x/A2D8gTIAE9Mp+kYBAJPzT5+OMe9rAAAAAElFTkSuQmCC",label:"Restore"},!m&&{action:u,disabled:x,icon:x?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGElEQVR42mMYPGAUjAJPT8//+DCNDRgFAPTaHaFVv24VAAAAAElFTkSuQmCC":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAIUlEQVR42mMYPGAUjIIDBw78x4cJGnDu3Ln/+DB+3aMAAPFzNUFuAVJEAAAAAElFTkSuQmCC",label:"Minimize"},!p&&{action:()=>{c(),w()},disabled:e||!d,icon:e?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAHklEQVR42mOgEhgFnp6e//Fh+hmALj5UDBj4QBwFANQKUXn4YyGJAAAAAElFTkSuQmCC":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAR0lEQVR42u3IoRHAMAzFUO+/gllKG5IgD2DujX4vC8ikMO9ORHb9xN1FWWc8Q5R15jt1gs/22jrBZxGhE3yWmaKsU1Wi7EIfHneIsXEKuhAAAAAASUVORK5CYII=",label:"Maximize"},t&&l.Os,{action:i,icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAMElEQVR4AWMgEoyC2TCAwsYPFqMCouzZCQPEOmzvnj0QRJTqo6iAgOoLMIDCHsYAACjTO7/gCQlBAAAAAElFTkSuQmCC",label:"Close"}].filter(Boolean)}),[d,t,w,p,m,f,x,i,c,u])}},23561:function(e,t,i){var n=i(67294),o=i(67318),r=i(58437),s=i(76488),l=i(86178),a=i(97836);t.Z=e=>{let t=(0,o.Z)(e),{setForegroundId:i,removeFromStack:c}=(0,s.k)(),{closeWithTransition:u,maximize:A,minimize:h}=(0,r.z)(),d=(0,l.R)(),g=(0,n.useCallback)(()=>{h(e),i(t)},[e,h,t,i]),p=(0,n.useCallback)(()=>{A(e),d.current[e]?.componentWindow?.focus(a.eS)},[e,A,d]);return{onClose:(0,n.useCallback)(()=>{c(e),u(e),i(t)},[u,e,t,c,i]),onMaximize:p,onMinimize:g}}},38365:function(e,t,i){i.d(t,{Rf:function(){return l},b$:function(){return u},hu:function(){return s},ix:function(){return c},mZ:function(){return a}});var n=i(918),o=i(97836),r=i(6484);let s=(e,t,i=[],n=0)=>{let[s]=e.split(o.CC),l=`${s}${o.CC}`,a=i.find(e=>e.startsWith(l))||"",{componentWindow:c}=t?.[a]||{},{x:u=0,y:A=0,width:h=0,height:d=0}=c?.getBoundingClientRect()||{};return!(u+n+h>(0,r.E9)()||A+n+d>(0,r.sI)())&&(u||A)?{x:u+n,y:A+n}:void 0},l=({height:e,width:t})=>{let[i,n]=[(0,r.sI)(),(0,r.E9)()];return{x:Math.floor(n/2-(0,r.Vy)(t)/2),y:Math.floor((i-o.bK)/2-(0,r.Vy)(e)/2)}},a={BOTTOM:15,LEFT:150,RIGHT:50,TOP:15},c=(e,t,i=!1)=>{let{position:n,size:o}=e||{},{x:s=0,y:l=0}=n||{},{height:c=0,width:u=0}=o||{};return i?s+a.RIGHT>t.x||s+(0,r.Vy)(u)-a.LEFT<0||l+a.BOTTOM>t.y||l+a.TOP<0:s<0||l<0||s+(0,r.Vy)(u)>t.x||l+(0,r.Vy)(c)>t.y},u=(e,t)=>{let i=Number(e.height),s=Number(e.width),[l,a]=[(0,r.sI)(),(0,r.E9)()],c=l-o.bK,u=Math.max(n.wV,Math.min(i,c)),A=Math.max(n.BS,Math.min(s,a));if(!t)return{height:u,width:A};let h=i===u,d=s===A;return h||d?h?d?{height:u,width:A}:{height:Math.round(u/(s/A)),width:A}:{height:u,width:Math.round(A/(i/u))}:i>s?{height:u,width:Math.round(A/(c/u))}:{height:Math.round(u/(a/A)),width:A}}},61544:function(e,t,i){i.r(t),i.d(t,{default:function(){return Z}});var n=i(85893),o=i(67294),r=i(10508);let s=r.ZP.div(["background-color:inherit;height:inherit;width:inherit;"]);var l=i(42663),a=i(918),c=i(58437),u=e=>{let{processes:t}=(0,c.z)(),{maximized:i=!1,minimized:n=!1}=t[e]||{},r=(0,o.useRef)(!1);return(0,o.useEffect)(()=>{r.current=!!(i||n)},[i,n]),r},A=i(38365),h=i(76488),d=i(6484),g=(e,t)=>{let{sizes:{window:{cascadeOffset:i}}}=(0,r.Fg)(),{processes:n}=(0,c.z)(),{autoSizing:s,closing:l,componentWindow:a,initialRelativePosition:g}=n[e]||{},{stackOrder:p,windowStates:{[e]:m}={}}=(0,h.k)(),{position:f,size:x}=m||{},w=(0,o.useMemo)(()=>(0,A.ix)(m,(0,d.mE)()),[m]),[b,v]=(0,o.useState)(()=>!w&&f||(0,A.hu)(e,n,p,i)||(0,A.Rf)(t)),C=u(e);return(0,o.useEffect)(()=>{let e=()=>{let e=(0,d.mE)();(0,A.ix)({position:b,size:t},e,!0)&&v(({x:t,y:i})=>{let n=e.x-A.mZ.RIGHT,o=e.y-A.mZ.BOTTOM;return{x:t>n?n:t,y:i>o?o:i}})};return window.addEventListener("resize",e,{passive:!0}),()=>window.removeEventListener("resize",e)},[b,t]),(0,o.useLayoutEffect)(()=>{!s||l||!x||f||C.current||v((0,A.Rf)(x))},[s,C,l,f,x]),(0,o.useLayoutEffect)(()=>{g&&a&&t&&v((0,d.rB)(a,g,t))},[a,g,t]),[b,v]},p=i(97836),m=e=>{let{processes:{[e]:t}={}}=(0,c.z)(),{defaultSize:i}=t||{},{sizes:{titleBar:n}}=(0,r.Fg)();return(0,o.useMemo)(()=>i?{height:Number(i.height)+n.height,width:i.width}:p.i9,[i,n.height])},f=(e,t=!1)=>{let i=m(e),{windowStates:{[e]:{size:n=i}={}}={}}=(0,h.k)(),{processes:{[e]:{lockAspectRatio:r=!1}={}}}=(0,c.z)(),[s,l]=(0,o.useState)(()=>(0,A.b$)(n,r)),a=u(e);return(0,o.useLayoutEffect)(()=>{t&&!a.current&&l((0,A.b$)(n,r))},[t,a,r,n]),[s,l]};let x=(e=!0)=>document.querySelectorAll("iframe").forEach(t=>{t.style.pointerEvents=e?"initial":"none"});var w=e=>{let{processes:{[e]:{allowResizing:t=!0,autoSizing:i=!1,lockAspectRatio:n=!1,maximized:r=!1}={}}}=(0,c.z)(),{setWindowStates:s}=(0,h.k)(),[l,u]=f(e,i),[p,m]=g(e,l),w=(0,o.useCallback)((t,{x:i,y:n})=>{x();let o={x:i,y:n};(0,A.ix)({position:o,size:l},(0,d.mE)(),!0)||(m(o),s(t=>({...t,[e]:{...t[e],position:o}})))},[e,m,s,l]),b=(0,o.useCallback)((t,i,{style:{height:n,width:o}},r,l)=>{x();let a={height:(0,d.Vy)(n),width:(0,d.Vy)(o)};u(a),m(l),s(t=>({...t,[e]:{...t[e],position:l,size:a}}))},[e,m,u,s]),v=(0,o.useCallback)(()=>x(!1),[]),C=(0,o.useMemo)(()=>t&&!r?a.FC:a.F_,[t,r]);return{disableDragging:r,enableResizing:C,lockAspectRatio:n,onDragStart:v,onDragStop:w,onResizeStart:v,onResizeStop:b,position:p,size:l,...a.ZP}};let b=e=>t=>{t?.setAttribute("tabindex",p.LL.tabIndex.toString()),t?.addEventListener("contextmenu",d.nK),t?.addEventListener("mousedown",t=>{t.preventDefault(),e?.focus(p.eS)})};var v=({children:e,id:t,zIndex:i})=>{let{linkElement:r,processes:{[t]:s}}=(0,c.z)(),{Component:a,componentWindow:u,maximized:A,minimized:h}=s||{},d=(0,o.useRef)(null),g=w(t),p=(0,o.useMemo)(()=>({pointerEvents:h?"none":void 0,zIndex:i}),[h,i]),m=(0,o.useCallback)(e=>{d.current=e;let[i]=e?.resizableElement?.current?.children||[];a&&!u&&i&&r(t,"componentWindow",i)},[a,u,t,r]);return(0,o.useEffect)(()=>{if(!A){let{current:e}=d,[t,i]=e?.resizableElement?.current?.children||[];[...i?.children||[]].forEach(b(t))}},[A]),(0,n.jsx)(l.s,{ref:m,style:p,...g,children:e})},C=i(8897);let z=(0,r.ZP)(C.m.section)(["background-color:",";box-shadow:",";contain:strict;height:100%;outline:",";overflow:hidden;position:absolute;width:100%;header + *{height:",";}"],({$backgroundColor:e,theme:t})=>e||t.colors.window.background,({$isForeground:e,theme:t})=>e?t.colors.window.shadow:t.colors.window.shadowInactive,({$isForeground:e,theme:t})=>`${t.sizes.window.outline} solid ${e?t.colors.window.outline:t.colors.window.outlineInactive}`,({theme:e})=>`calc(100% - ${e.sizes.titleBar.height}px)`),E=({$foreground:e,theme:t})=>e?`1px solid ${t.colors.titleBar.background}`:`1px solid ${t.colors.titleBar.backgroundInactive}`,B=r.ZP.header(["background-color:",";border-bottom:",";display:flex;height:","px;position:relative;top:0;z-index:2;> button{align-items:center;color:",";display:flex;flex-grow:1;font-size:",";font-weight:400;min-width:0;figure{align-items:center;display:flex;margin-left:8px;min-width:inherit;pointer-events:none;position:relative;top:-1px;picture{height:",";margin-right:",";width:",";}img,picture{pointer-events:all;}figcaption{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}}}nav{display:flex;button{border-left:",";box-sizing:content-box;display:flex;place-content:center;place-items:center;width:",";svg{fill:",";margin:0 1px 2px 0;width:",";}&.minimize{svg{margin-bottom:1px;margin-right:0;}}&:hover{background-color:",";svg{fill:",";}&.close{background-color:",";transition:background-color 0.25s ease;}}&:active{background-color:rgb(51,51,51);&.close{background-color:rgb(139,10,20);}}&:disabled{svg{fill:",";}&:hover{background-color:inherit;}}}}"],({$foreground:e,theme:t})=>e?t.colors.titleBar.background:t.colors.titleBar.backgroundInactive,E,({theme:e})=>e.sizes.titleBar.height,({$foreground:e,theme:t})=>e?t.colors.titleBar.text:t.colors.titleBar.textInactive,({theme:e})=>e.sizes.titleBar.fontSize,({theme:e})=>e.sizes.titleBar.iconSize,({theme:e})=>e.sizes.titleBar.iconMarginRight,({theme:e})=>e.sizes.titleBar.iconSize,E,({theme:e})=>e.sizes.titleBar.buttonWidth,({$foreground:e,theme:t})=>e?t.colors.titleBar.text:t.colors.titleBar.buttonInactive,({theme:e})=>e.sizes.titleBar.buttonIconWidth,({theme:e})=>e.colors.titleBar.backgroundHover,({theme:e})=>e.colors.titleBar.text,({theme:e})=>e.colors.titleBar.closeHover,({$foreground:e})=>e?"rgb(50, 50, 50)":"rgb(60, 60, 60)");var k=i(67364),R=i(64146),M=i(23561),S=i(7502),y=i(24645),j=i(67278),O=i(46581),V=(0,o.memo)(({id:e})=>{let{processes:{[e]:t}}=(0,c.z)(),{allowResizing:i=!0,closing:r,componentWindow:s,hideMaximizeButton:l,hideMinimizeButton:u,hideTitlebarIcon:A,icon:g,title:m,maximized:f}=t||{},{foregroundId:x}=(0,h.k)(),w=e===x,{onClose:b,onMaximize:v,onMinimize:C}=(0,M.Z)(e),z=(0,y.Z)(b),E=(0,y.Z)(v),{menu:V,setMenu:T}=(0,S.H)(),I=(0,R.Z)(e),Z=(0,o.useRef)(0),L=(0,o.useRef)(),F=(0,o.useRef)(),Q=(0,o.useCallback)(e=>{let{x:t,y:i}=s?.getBoundingClientRect()||{};Date.now()-Z.current>=p.XX&&L.current&&L.current.x===t&&L.current.y===i&&I.onContextMenuCapture(Object.assign(e,{touches:F.current}))},[s,I]),N=(0,o.useCallback)(({touches:e})=>{s&&(s.blur(),s.focus(p.eS),Z.current=Date.now(),L.current=s.getBoundingClientRect(),F.current=e)},[s]);return(0,n.jsxs)(B,{$foreground:w,className:a.ZP.dragHandleClassName,onDragOver:d.nK,onDrop:d.nK,...I,children:[(0,n.jsx)(j.Z,{...l||!i||r?{}:E,onMouseDownCapture:({button:e})=>{0===e&&Object.keys(V).length>0&&T(Object.create(null))},onMouseUpCapture:()=>{s&&s!==document.activeElement&&s.focus(p.eS)},onTouchEndCapture:Q,onTouchStartCapture:N,children:(0,n.jsxs)("figure",{children:[!A&&(0,n.jsx)(O.Z,{alt:m,imgSize:16,src:g,...z}),(0,n.jsx)("figcaption",{children:m})]})}),(0,n.jsxs)("nav",{className:"cancel",children:[!u&&(0,n.jsx)(j.Z,{className:"minimize",onClick:C,...(0,d.PS)("Minimize"),children:(0,n.jsx)(k.dO,{})}),!l&&(0,n.jsx)(j.Z,{className:"maximize",disabled:!i,onClick:v,...(0,d.PS)(f?"Restore Down":"Maximize"),children:f?(0,n.jsx)(k.J6,{}):(0,n.jsx)(k.bJ,{})}),(0,n.jsx)(j.Z,{$short:l&&u,className:"close",onClick:b,...(0,d.PS)("Close"),children:(0,n.jsx)(k.Tw,{})})]})]})}),T=i(45032),I=i(85738),Z=({children:e,id:t})=>{let{linkElement:i,processes:{[t]:r}}=(0,c.z)(),{backgroundColor:l,Component:a,hideTitlebar:u,peekElement:A}=r||{},{foregroundId:d}=(0,h.k)(),g=t===d,{zIndex:p,...m}=(0,T.Z)(t),f=(0,I.Z)(t),x=(0,o.useCallback)(e=>{a&&!A&&e&&i(t,"peekElement",e)},[a,t,i,A]);return(0,n.jsx)(v,{id:t,zIndex:p,children:(0,n.jsx)(z,{$backgroundColor:l,$isForeground:g,...m,...f,children:(0,n.jsxs)(s,{ref:x,children:[!u&&(0,n.jsx)(V,{id:t}),e]})})})}},45032:function(e,t,i){var n=i(67294),o=i(58437),r=i(76488),s=i(97836);t.Z=(e,t)=>{let{foregroundId:i,prependToStack:l,setForegroundId:a,stackOrder:c=[]}=(0,r.k)(),{processes:{[e]:u}}=(0,o.z)(),{closing:A,componentWindow:h,minimized:d,taskbarEntry:g,url:p}=u||{},m=(0,n.useMemo)(()=>c.length+(d?1:-c.indexOf(e))+1,[e,d,c]),f=(0,n.useCallback)(i=>{let{relatedTarget:n}=i,o=n===g,r=n&&g?.previousSibling?.contains(n),l=n&&h?.contains(n);a(n=>n!==e||o||l?n:(r?h?.focus(s.eS):t?.onBlurCapture?.(i),r?n:""))},[t,h,e,a,g]),x=(0,n.useCallback)(i=>{let{relatedTarget:n}=i||{};h?.contains(document.activeElement)?(l(e),a(e)):n&&document.activeElement!==g||(h?.focus(s.eS),t?.onFocusCapture?.(i))},[t,h,e,l,a,g]);return(0,n.useLayoutEffect)(()=>{e===i&&x()},[i,e,x]),(0,n.useLayoutEffect)(()=>{!h||A||d||a(e)},[A,h,e,d,a,p]),(0,n.useMemo)(()=>({onBlurCapture:f,onClickCapture:x,onFocusCapture:x,zIndex:m,...s.LL}),[x,f,m])}},67318:function(e,t,i){var n=i(58437),o=i(76488);t.Z=e=>{let{stackOrder:t=[]}=(0,o.k)(),{processes:i}=(0,n.z)();return t.find(t=>t!==e&&!i?.[t]?.minimized)||""}},85738:function(e,t,i){var n=i(67294),o=i(58437),r=i(97836),s=i(6484);let l={height:"inherit",opacity:1,scale:1,width:"inherit"},a={opacity:0,scale:.95},c={...a,height:"inherit",width:"inherit"},u={...c,scale:1},A={opacity:1,scale:1},h={opacity:0,scale:.7},d=()=>({height:(0,s.sI)()-r.bK,width:(0,s.E9)()});t.Z=(e,t=!1)=>{let{processes:{[e]:i}={}}=(0,o.z)(),{closing:s,componentWindow:g,maximized:p,minimized:m,taskbarEntry:f}=i||{},[x,w]=(0,n.useState)(Object.create(null)),[b,v]=(0,n.useState)(Object.create(null));return(0,n.useLayoutEffect)(()=>{if(!g||s)return;let{x:e=0,y:t=0}=g.getBoundingClientRect();w({...A,...d(),x:0-e,y:0-t})},[s,g,p]),(0,n.useLayoutEffect)(()=>{if(!f||!g||s)return;let{height:e=0,width:t=0,x:i=0,y:n=0}=f.getBoundingClientRect(),{height:o=0,width:r=0,x:l=0,y:a=0}=g.getBoundingClientRect(),c=Math.round(i-l-r/2+t/2),u=Math.round(n-a-o/2+e/2);0===c&&0===u||v({...h,x:c,y:u})},[s,g,m,f]),(0,n.useEffect)(()=>{let e=()=>{p&&w(e=>({...e,...d()}))};return window.addEventListener("resize",e,{passive:!0}),()=>window.removeEventListener("resize",e)},[p]),{animate:(m?"minimize":"")||(!s&&p?"maximize":"")||"active",exit:"exit",initial:"initial",transition:{duration:r.Nb.WINDOW},variants:{active:l,exit:a,initial:t?u:c,maximize:x,minimize:b}}}}}]);
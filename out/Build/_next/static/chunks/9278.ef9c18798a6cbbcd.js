"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9278, 3333],
    {
        49278: function (e, t, n) {
            n.r(t),
                n.d(t, {
                    default: function () {
                        return S;
                    },
                });
            var i = n(85893);
            let r = n(10508).ZP.div([
                "align-items:center;background-color:#000;display:flex;height:100%;width:100%;canvas{image-rendering:pixelated;image-rendering:crisp-edges;position:absolute;top:0 !important;touch-action:none;-webkit-touch-callout:none;user-select:none;width:100%;}div,video{display:none;}.emulator-mouse-overlay{display:block;inset:0;position:absolute;}",
            ]);
            var o = n(67294);
            let a = { emulatorFunction: "dosWorker" },
                s = ["__core-js_shared__", "compiled", "core", "emulatorsUi", "exports", "WDOSBOX", "worker"],
                l = ".zip.save",
                c = { ".jsdos/dosbox.conf": "/Program Files/js-dos/dosbox.conf", ".jsdos/jsdos.json": "/Program Files/js-dos/jsdos.json" },
                u = new Set(["Alt", "ContextMenu", "F1", "F3", "F5", "F6", "F7", "F10", "F11", "F12"]);
            var d = n(1864),
                f = n(44696),
                h = n(20063),
                p = n(58437),
                w = n(97836),
                m = n(6484),
                b = n(11394),
                g = n(48764).Buffer;
            let y = async (e, t) => {
                let { addFileToZip: i, isFileInZip: r } = await n.e(5341, "high").then(n.bind(n, 5341));
                return Object.entries(c).reduce(async (e, [n, o]) => {
                    let a = await e;
                    return a.length > 0 && (await r(a, n)) ? a : i(a, o, n, t);
                }, Promise.resolve(e));
            };
            var x = (e, t, i, r) => {
                let { appendFileToTitle: a } = (0, f.Z)(e),
                    { exists: c, mkdirRecursive: u, readFile: x, updateFolder: v, writeFile: k } = (0, h.o)(),
                    {
                        linkElement: T,
                        processes: { [e]: E },
                    } = (0, p.z)(),
                    { closing: $ } = E || {},
                    [j, S] = (0, o.useState)({}),
                    C = (0, o.useCallback)(
                        async (e, t, n = !1) => {
                            let i = `${(0, d.basename)(e)}${l}`;
                            (await c(w.Tl)) || (await u(w.Tl), v((0, d.dirname)(w.Tl)));
                            let o = (0, d.join)(w.Tl, i);
                            if (void 0 !== j[e] && (await k(o, g.from((await j[e].persist()) || []), !0))) {
                                if (t) {
                                    let e = (0, d.join)(w.Xo, w.Tl),
                                        n = (0, d.join)(w.Xo, `${o}${w.Qy}`);
                                    (await c(e)) || (await u(e), v((0, d.dirname)(w.Tl))), await k(n, t, !0);
                                }
                                n && r?.stop(), v(w.Tl, i);
                            }
                        },
                        [j, r, c, u, v, k]
                    ),
                    F = (0, o.useCallback)(async () => {
                        let o;
                        let [u] = Object.keys(j);
                        u && C(u);
                        let f = t ? await x(t) : g.from(""),
                            h = (0, m.RT)(t),
                            { zipAsync: p } = await n.e(5341, "high").then(n.bind(n, 5341)),
                            v = async (e) => g.from(await p({ [(0, d.basename)(t)]: e })),
                            k = async (e) => (0, m.YS)(await y(e, x)),
                            E = ".exe" === h ? await v(f) : f;
                        if (".jsdos" === h) o = (0, m.YS)(E);
                        else
                            try {
                                o = await k(E);
                            } catch {
                                o = await k(await v(f));
                            }
                        let $ = (0, d.join)(w.Tl, `${(0, d.basename)(t)}${l}`),
                            F = (await c($)) ? (0, m.YS)(await x($)) : void 0,
                            L = await r?.run(o, F);
                        if (L) {
                            let n = i.current?.querySelector("canvas");
                            n instanceof HTMLCanvasElement && (T(e, "peekElement", n), S({ [t]: L }), a((0, d.basename)(t)), (0, m.EK)(o), F && (0, m.EK)(F), (0, b.od)(s));
                        }
                    }, [a, C, i, j, r, c, e, T, x, t]);
                return (
                    (0, o.useEffect)(
                        () => (
                            !E || $ || !r || t in j || (S({ [t]: void 0 }), F()),
                            () => {
                                if (t && $) {
                                    let e = (e) => {
                                        window.setTimeout(() => C(t, e, $), w.jx.WINDOW);
                                    };
                                    (async () => {
                                        let e = await j[t]?.screenshot();
                                        return e ? (0, m.fv)(e) : void 0;
                                    })()
                                        .then(e)
                                        .catch(e);
                                }
                            }
                        ),
                        [C, $, j, r, F, E, t]
                    ),
                    j[t]
                );
            },
                v = n(96189),
                k = n(48010),
                T = n(76488);
            let E = (e) => {
                u.has(e.key) && e.preventDefault();
            };
            var $ = ({ containerRef: e, id: t, loading: n, setLoading: i, url: r }) => {
                let { updateWindowSize: s } = (0, k.Z)(t),
                    [l, c] = (0, o.useState)(),
                    u = (0, v.Z)(),
                    d = (0, o.useRef)(!1),
                    { foregroundId: f } = (0, T.k)(),
                    h = x(t, r, e, l),
                    { closeWithTransition: b, processes: { [t]: { libs: g = [] } = {} } = {} } = (0, p.z)();
                (0, o.useEffect)(() => {
                    l ||
                        d.current ||
                        ((d.current = !0),
                            (0, m.mb)(g).then(() => {
                                if (window.emulators && ((window.emulators.pathPrefix = "/Program Files/js-dos/"), e.current)) {
                                    let t = e.current.closest("section");
                                    t?.addEventListener("keydown", E, { capture: !0 }),
                                        t?.addEventListener("keyup", E, { capture: !0 }),
                                        t?.addEventListener("focus", () => e.current?.focus(w.eS), { passive: !0 }),
                                        c(window.Dos(e.current, a));
                                }
                            }));
                }, [e, l, g]),
                    (0, o.useEffect)(() => {
                        if (h && n) {
                            s(h.height(), h.width());
                            let n = h.events();
                            n.onMessage((e, n) => {
                                if (n.startsWith("[LOG_EXEC]")) {
                                    let [, e] = n.split("[LOG_EXEC]"),
                                        [i] = e.replace("Parsing command line: ", "").split(" ");
                                    "EXIT" === i.toUpperCase() && b(t);
                                }
                            }),
                                n.onFrameSize(() => {
                                    let t = e.current?.querySelector("canvas"),
                                        [n, i] = [(0, m.Vy)(t?.style.width), (0, m.Vy)(t?.style.height)],
                                        { height: r = 0, width: o = 0 } = t?.getBoundingClientRect() || {};
                                    i && n && (i !== r || n !== o) && s(i, n);
                                }),
                                n.onExit(() => window.SimpleKeyboardInstances?.emulatorKeyboard?.destroy()),
                                i(!1),
                                u(window.JSDOS_FS, "JS-DOS");
                        }
                    }, [b, e, h, l?.layers, t, n, u, i, s]),
                    (0, o.useLayoutEffect)(() => {
                        t !== f || n || e.current?.focus(w.eS);
                    }, [e, n, f, t]);
            },
                j = n(7443),
                S = ({ id: e }) => (0, i.jsx)(j.Z, { StyledComponent: r, id: e, useHook: $ });
        },
        7443: function (e, t, n) {
            var i = n(85893),
                r = n(67294),
                o = n(33333),
                a = n(45279),
                s = n(58437);
            t.Z = (0, r.memo)(({ id: e, useHook: t, StyledComponent: n, children: l }) => {
                let {
                    processes: { [e]: { url: c = "" } = {} },
                } = (0, s.z)(),
                    u = (0, r.useRef)(null),
                    [d, f] = (0, r.useState)(!0),
                    h = (0, r.useMemo)(() => ({ contain: "strict", visibility: d ? "hidden" : "visible" }), [d]);
                return t({ containerRef: u, id: e, loading: d, setLoading: f, url: c }), (0, i.jsxs)(i.Fragment, { children: [d && (0, i.jsx)(o.default, {}), (0, i.jsx)(n, { ref: u, style: h, ...(0, a.Z)({ id: e }), children: l })] });
            });
        },
        33333: function (e, t, n) {
            n.r(t);
            let i = n(10508).ZP.div(['cursor:wait;height:100%;width:100%;&::before{color:#fff;content:"Working on it...";display:flex;font-size:12px;justify-content:center;mix-blend-mode:difference;padding-top:18px;}']);
            t.default = i;
        },
        96189: function (e, t, n) {
            var i = n(67294),
                r = n(20063);
            t.Z = () => {
                let { mountEmscriptenFs: e, unMapFs: t, updateFolder: n } = (0, r.o)(),
                    o = (0, i.useRef)();
                return (
                    (0, i.useEffect)(
                        () => () => {
                            if (o.current) {
                                let e = o.current;
                                (o.current = ""),
                                    t(e, !0)
                                        .then(() => n("/", void 0, e))
                                        .catch(() => { });
                            }
                        },
                        [t, n]
                    ),
                    (0, i.useCallback)(
                        async (t, i) => {
                            if (!t) return;
                            let r = "";
                            try {
                                r = await e(t, i);
                            } catch { }
                            r && (n("/", r), (o.current = r));
                        },
                        [e, n]
                    )
                );
            };
        },
        45279: function (e, t, n) {
            var i = n(1864),
                r = n(67294),
                o = n(59746),
                a = n(23736),
                s = n(89670),
                l = n(20063),
                c = n(58437),
                u = n(76488),
                d = n(97836),
                f = n(6484);
            t.Z = ({ callback: e, directory: t = d.Ll, id: n, onDragLeave: h, onDragOver: p, updatePositions: w }) => {
                let { url: m } = (0, c.z)(),
                    { iconPositions: b, sortOrders: g, setIconPositions: y } = (0, u.k)(),
                    { exists: x, mkdirRecursive: v, updateFolder: k, writeFile: T } = (0, l.o)(),
                    E = (0, r.useCallback)(
                        async (e, t, r) => {
                            if (n) {
                                if (t) {
                                    let o = (0, i.join)(d.Ll, e);
                                    if ((await v(d.Ll), await T(o, t, !0))) return r === s.v.UPDATE_URL && m(n, o), await k(d.Ll, e), (0, i.basename)(o);
                                } else r === s.v.UPDATE_URL && m(n, e);
                            }
                            return "";
                        },
                        [n, v, k, m, T]
                    ),
                    { openTransferDialog: $ } = (0, o.Z)();
                return {
                    onDragLeave: h,
                    onDragOver: (e) => {
                        p?.(e), (0, f.nK)(e);
                    },
                    onDrop: (r) => {
                        if (!d.my.has((0, f.RT)(t))) {
                            if (w && r.target instanceof HTMLElement) {
                                let { files: e, text: n } = (0, a.p4)(r);
                                if (0 === e.length && "" === n) return;
                                let o = { x: r.clientX, y: r.clientY },
                                    s = [];
                                if (n) {
                                    try {
                                        s = JSON.parse(n);
                                    } catch { }
                                    if (!Array.isArray(s)) return;
                                    let [e] = s;
                                    if (!e || (e.startsWith(t) && (0, i.basename)(e) === (0, i.relative)(t, e))) return;
                                    s = s.map((e) => (0, i.basename)(e));
                                } else e instanceof FileList ? (s = [...e].map((e) => e.name)) : (s = [...e].map((e) => e.getAsFile()?.name || "").filter(Boolean));
                                (s = s.map((e) => {
                                    if (!b[`${t}/${e}`]) return e;
                                    let n = 0,
                                        r = "";
                                    do (n += 1), (r = `${t}/${(0, i.basename)(e, (0, i.extname)(e))} (${n})${(0, i.extname)(e)}`);
                                    while (b[r]);
                                    return (0, i.basename)(r);
                                })),
                                    (0, f.vi)(t, r.target, b, g, o, s, y, x);
                            }
                            (0, a.WG)(r, e || E, t, $, !!n);
                        }
                    },
                };
            };
        },
        918: function (e, t, n) {
            n.d(t, {
                BS: function () {
                    return a;
                },
                FC: function () {
                    return r;
                },
                F_: function () {
                    return i;
                },
                wV: function () {
                    return o;
                },
            });
            let i = { bottom: !1, bottomLeft: !1, bottomRight: !1, left: !1, right: !1, top: !1, topLeft: !1, topRight: !1 },
                r = { bottom: !0, bottomLeft: !0, bottomRight: !0, left: !0, right: !0, top: !0, topLeft: !0, topRight: !0 },
                o = 30,
                a = 166,
                s = {
                    cancel: ".cancel",
                    dragHandleClassName: "handle",
                    enableUserSelectHack: !1,
                    minHeight: `${o}px`,
                    minWidth: `${a}px`,
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
            t.ZP = s;
        },
        38365: function (e, t, n) {
            n.d(t, {
                Rf: function () {
                    return s;
                },
                b$: function () {
                    return u;
                },
                hu: function () {
                    return a;
                },
                ix: function () {
                    return c;
                },
                mZ: function () {
                    return l;
                },
            });
            var i = n(918),
                r = n(97836),
                o = n(6484);
            let a = (e, t, n = [], i = 0) => {
                let [a] = e.split(r.CC),
                    s = `${a}${r.CC}`,
                    l = n.find((e) => e.startsWith(s)) || "",
                    { componentWindow: c } = t?.[l] || {},
                    { x: u = 0, y: d = 0, width: f = 0, height: h = 0 } = c?.getBoundingClientRect() || {};
                return !(u + i + f > (0, o.E9)() || d + i + h > (0, o.sI)()) && (u || d) ? { x: u + i, y: d + i } : void 0;
            },
                s = ({ height: e, width: t }) => {
                    let [n, i] = [(0, o.sI)(), (0, o.E9)()];
                    return { x: Math.floor(i / 2 - (0, o.Vy)(t) / 2), y: Math.floor((n - r.bK) / 2 - (0, o.Vy)(e) / 2) };
                },
                l = { BOTTOM: 15, LEFT: 150, RIGHT: 50, TOP: 15 },
                c = (e, t, n = !1) => {
                    let { position: i, size: r } = e || {},
                        { x: a = 0, y: s = 0 } = i || {},
                        { height: c = 0, width: u = 0 } = r || {};
                    return n ? a + l.RIGHT > t.x || a + (0, o.Vy)(u) - l.LEFT < 0 || s + l.BOTTOM > t.y || s + l.TOP < 0 : a < 0 || s < 0 || a + (0, o.Vy)(u) > t.x || s + (0, o.Vy)(c) > t.y;
                },
                u = (e, t) => {
                    let n = Number(e.height),
                        a = Number(e.width),
                        [s, l] = [(0, o.sI)(), (0, o.E9)()],
                        c = s - r.bK,
                        u = Math.max(i.wV, Math.min(n, c)),
                        d = Math.max(i.BS, Math.min(a, l));
                    if (!t) return { height: u, width: d };
                    let f = n === u,
                        h = a === d;
                    return f || h
                        ? f
                            ? h
                                ? { height: u, width: d }
                                : { height: Math.round(u / (a / d)), width: d }
                            : { height: u, width: Math.round(d / (n / u)) }
                        : n > a
                            ? { height: u, width: Math.round(d / (c / u)) }
                            : { height: Math.round(u / (l / d)), width: d };
                };
        },
        44696: function (e, t, n) {
            var i = n(67294),
                r = n(58437),
                o = n(37176),
                a = n(97836);
            t.Z = (e) => {
                let { title: t } = (0, r.z)(),
                    [n] = e.split(a.CC),
                    { title: s } = o.Z[n] || {};
                return {
                    appendFileToTitle: (0, i.useCallback)(
                        (n, i) => {
                            let r = n ? ` - ${n}${i ? ` ${a.xy}` : ""}` : "";
                            t(e, `${s}${r}`);
                        },
                        [e, s, t]
                    ),
                    prependFileToTitle: (0, i.useCallback)(
                        (n, i, r) => {
                            let o = n ? `${i ? `${a.xy} ` : ""}${n}${r ? " " : " - "}` : "";
                            t(e, `${o}${s}`);
                        },
                        [e, s, t]
                    ),
                };
            };
        },
        48010: function (e, t, n) {
            var i = n(10508),
                r = n(67294),
                o = n(38365),
                a = n(58437),
                s = n(76488);
            t.Z = (e) => {
                let { setWindowStates: t } = (0, s.k)(),
                    { processes: { [e]: { lockAspectRatio: n = !1, maximized: l = !1 } = {} } = {} } = (0, a.z)(),
                    {
                        sizes: { titleBar: c },
                    } = (0, i.Fg)();
                return { updateWindowSize: (0, r.useCallback)((i, r) => t((t) => ({ ...t, [e]: { ...t?.[e], maximized: l, size: (0, o.b$)({ height: i + c.height, width: r }, n) } })), [e, n, l, t, c.height]) };
            };
        },
        11394: function (e, t, n) {
            n.d(t, {
                H3: function () {
                    return s;
                },
                od: function () {
                    return i;
                },
                wz: function () {
                    return a;
                },
            });
            let i = (e) =>
                e.forEach((e) => {
                    if (e in window)
                        try {
                            delete window[e];
                        } finally {
                            Object.assign(window, { [e]: void 0 });
                        }
                }),
                r = (e) => {
                    let t;
                    Object.defineProperty(window, e, {
                        get: () => (window.lockedGlobals?.[e] ? void 0 : t),
                        set(n) {
                            window.lockedGlobals?.[e] || (t = n);
                        },
                    });
                },
                o = (e, t) => {
                    window.lockedGlobals = { ...window.lockedGlobals, [e]: t };
                },
                a = (e) => o(e, !0),
                s = (e) => {
                    Object.getOwnPropertyDescriptor(window, e) || r(e), o(e, !1);
                };
        },
    },
]);



// "use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9278,3333],{49278:function(e,t,n){n.r(t),n.d(t,{default:function(){return S}});var i=n(85893);let r=n(10508).ZP.div(["align-items:center;background-color:#000;display:flex;height:100%;width:100%;canvas{image-rendering:pixelated;image-rendering:crisp-edges;position:absolute;top:0 !important;touch-action:none;-webkit-touch-callout:none;user-select:none;width:100%;}div,video{display:none;}.emulator-mouse-overlay{display:block;inset:0;position:absolute;}"]);var o=n(67294);let a={emulatorFunction:"dosWorker"},s=["__core-js_shared__","compiled","core","emulatorsUi","exports","WDOSBOX","worker"],l=".zip.save",c={".jsdos/dosbox.conf":"/Program Files/js-dos/dosbox.conf",".jsdos/jsdos.json":"/Program Files/js-dos/jsdos.json"},u=new Set(["Alt","ContextMenu","F1","F3","F5","F6","F7","F10","F11","F12"]);var d=n(1864),f=n(44696),h=n(20063),p=n(58437),w=n(97836),m=n(6484),b=n(11394),g=n(48764).Buffer;let y=async(e,t)=>{let{addFileToZip:i,isFileInZip:r}=await n.e(5341,"high").then(n.bind(n,5341));return Object.entries(c).reduce(async(e,[n,o])=>{let a=await e;return a.length>0&&await r(a,n)?a:i(a,o,n,t)},Promise.resolve(e))};var x=(e,t,i,r)=>{let{appendFileToTitle:a}=(0,f.Z)(e),{exists:c,mkdirRecursive:u,readFile:x,updateFolder:v,writeFile:k}=(0,h.o)(),{linkElement:T,processes:{[e]:E}}=(0,p.z)(),{closing:$}=E||{},[j,S]=(0,o.useState)({}),C=(0,o.useCallback)(async(e,t,n=!1)=>{let i=`${(0,d.basename)(e)}${l}`;await c(w.Tl)||(await u(w.Tl),v((0,d.dirname)(w.Tl)));let o=(0,d.join)(w.Tl,i);if(void 0!==j[e]&&await k(o,g.from(await j[e].persist()||[]),!0)){if(t){let e=(0,d.join)(w.Xo,w.Tl),n=(0,d.join)(w.Xo,`${o}${w.Qy}`);await c(e)||(await u(e),v((0,d.dirname)(w.Tl))),await k(n,t,!0)}n&&r?.stop(),v(w.Tl,i)}},[j,r,c,u,v,k]),F=(0,o.useCallback)(async()=>{let o;let[u]=Object.keys(j);u&&C(u);let f=t?await x(t):g.from(""),h=(0,m.RT)(t),{zipAsync:p}=await n.e(5341,"high").then(n.bind(n,5341)),v=async e=>g.from(await p({[(0,d.basename)(t)]:e})),k=async e=>(0,m.YS)(await y(e,x)),E=".exe"===h?await v(f):f;if(".jsdos"===h)o=(0,m.YS)(E);else try{o=await k(E)}catch{o=await k(await v(f))}let $=(0,d.join)(w.Tl,`${(0,d.basename)(t)}${l}`),F=await c($)?(0,m.YS)(await x($)):void 0,L=await r?.run(o,F);if(L){let n=i.current?.querySelector("canvas");n instanceof HTMLCanvasElement&&(T(e,"peekElement",n),S({[t]:L}),a((0,d.basename)(t)),(0,m.EK)(o),F&&(0,m.EK)(F),(0,b.od)(s))}},[a,C,i,j,r,c,e,T,x,t]);return(0,o.useEffect)(()=>(!E||$||!r||t in j||(S({[t]:void 0}),F()),()=>{if(t&&$){let e=e=>{window.setTimeout(()=>C(t,e,$),w.jx.WINDOW)};(async()=>{let e=await j[t]?.screenshot();return e?(0,m.fv)(e):void 0})().then(e).catch(e)}}),[C,$,j,r,F,E,t]),j[t]},v=n(96189),k=n(48010),T=n(76488);let E=e=>{u.has(e.key)&&e.preventDefault()};var $=({containerRef:e,id:t,loading:n,setLoading:i,url:r})=>{let{updateWindowSize:s}=(0,k.Z)(t),[l,c]=(0,o.useState)(),u=(0,v.Z)(),d=(0,o.useRef)(!1),{foregroundId:f}=(0,T.k)(),h=x(t,r,e,l),{closeWithTransition:b,processes:{[t]:{libs:g=[]}={}}={}}=(0,p.z)();(0,o.useEffect)(()=>{l||d.current||(d.current=!0,(0,m.mb)(g).then(()=>{if(window.emulators&&(window.emulators.pathPrefix="/Program Files/js-dos/",e.current)){let t=e.current.closest("section");t?.addEventListener("keydown",E,{capture:!0}),t?.addEventListener("keyup",E,{capture:!0}),t?.addEventListener("focus",()=>e.current?.focus(w.eS),{passive:!0}),c(window.Dos(e.current,a))}}))},[e,l,g]),(0,o.useEffect)(()=>{if(h&&n){s(h.height(),h.width());let n=h.events();n.onMessage((e,n)=>{if(n.startsWith("[LOG_EXEC]")){let[,e]=n.split("[LOG_EXEC]"),[i]=e.replace("Parsing command line: ","").split(" ");"EXIT"===i.toUpperCase()&&b(t)}}),n.onFrameSize(()=>{let t=e.current?.querySelector("canvas"),[n,i]=[(0,m.Vy)(t?.style.width),(0,m.Vy)(t?.style.height)],{height:r=0,width:o=0}=t?.getBoundingClientRect()||{};i&&n&&(i!==r||n!==o)&&s(i,n)}),n.onExit(()=>window.SimpleKeyboardInstances?.emulatorKeyboard?.destroy()),i(!1),u(window.JSDOS_FS,"JS-DOS")}},[b,e,h,l?.layers,t,n,u,i,s]),(0,o.useLayoutEffect)(()=>{t!==f||n||e.current?.focus(w.eS)},[e,n,f,t])},j=n(7443),S=({id:e})=>(0,i.jsx)(j.Z,{StyledComponent:r,id:e,useHook:$})},7443:function(e,t,n){var i=n(85893),r=n(67294),o=n(33333),a=n(45279),s=n(58437);t.Z=(0,r.memo)(({id:e,useHook:t,StyledComponent:n,children:l})=>{let{processes:{[e]:{url:c=""}={}}}=(0,s.z)(),u=(0,r.useRef)(null),[d,f]=(0,r.useState)(!0),h=(0,r.useMemo)(()=>({contain:"strict",visibility:d?"hidden":"visible"}),[d]);return t({containerRef:u,id:e,loading:d,setLoading:f,url:c}),(0,i.jsxs)(i.Fragment,{children:[d&&(0,i.jsx)(o.default,{}),(0,i.jsx)(n,{ref:u,style:h,...(0,a.Z)({id:e}),children:l})]})})},33333:function(e,t,n){n.r(t);let i=n(10508).ZP.div(['cursor:wait;height:100%;width:100%;&::before{color:#fff;content:"Working on it...";display:flex;font-size:12px;justify-content:center;mix-blend-mode:difference;padding-top:18px;}']);t.default=i},96189:function(e,t,n){var i=n(67294),r=n(20063);t.Z=()=>{let{mountEmscriptenFs:e,unMapFs:t,updateFolder:n}=(0,r.o)(),o=(0,i.useRef)();return(0,i.useEffect)(()=>()=>{if(o.current){let e=o.current;o.current="",t(e,!0).then(()=>n("/",void 0,e)).catch(()=>{})}},[t,n]),(0,i.useCallback)(async(t,i)=>{if(!t)return;let r="";try{r=await e(t,i)}catch{}r&&(n("/",r),o.current=r)},[e,n])}},45279:function(e,t,n){var i=n(1864),r=n(67294),o=n(59746),a=n(23736),s=n(89670),l=n(20063),c=n(58437),u=n(76488),d=n(97836),f=n(6484);t.Z=({callback:e,directory:t=d.Ll,id:n,onDragLeave:h,onDragOver:p,updatePositions:w})=>{let{url:m}=(0,c.z)(),{iconPositions:b,sortOrders:g,setIconPositions:y}=(0,u.k)(),{exists:x,mkdirRecursive:v,updateFolder:k,writeFile:T}=(0,l.o)(),E=(0,r.useCallback)(async(e,t,r)=>{if(n){if(t){let o=(0,i.join)(d.Ll,e);if(await v(d.Ll),await T(o,t,!0))return r===s.v.UPDATE_URL&&m(n,o),await k(d.Ll,e),(0,i.basename)(o)}else r===s.v.UPDATE_URL&&m(n,e)}return""},[n,v,k,m,T]),{openTransferDialog:$}=(0,o.Z)();return{onDragLeave:h,onDragOver:e=>{p?.(e),(0,f.nK)(e)},onDrop:r=>{if(!d.my.has((0,f.RT)(t))){if(w&&r.target instanceof HTMLElement){let{files:e,text:n}=(0,a.p4)(r);if(0===e.length&&""===n)return;let o={x:r.clientX,y:r.clientY},s=[];if(n){try{s=JSON.parse(n)}catch{}if(!Array.isArray(s))return;let[e]=s;if(!e||e.startsWith(t)&&(0,i.basename)(e)===(0,i.relative)(t,e))return;s=s.map(e=>(0,i.basename)(e))}else e instanceof FileList?s=[...e].map(e=>e.name):s=[...e].map(e=>e.getAsFile()?.name||"").filter(Boolean);s=s.map(e=>{if(!b[`${t}/${e}`])return e;let n=0,r="";do n+=1,r=`${t}/${(0,i.basename)(e,(0,i.extname)(e))} (${n})${(0,i.extname)(e)}`;while(b[r]);return(0,i.basename)(r)}),(0,f.vi)(t,r.target,b,g,o,s,y,x)}(0,a.WG)(r,e||E,t,$,!!n)}}}}},918:function(e,t,n){n.d(t,{BS:function(){return a},FC:function(){return r},F_:function(){return i},wV:function(){return o}});let i={bottom:!1,bottomLeft:!1,bottomRight:!1,left:!1,right:!1,top:!1,topLeft:!1,topRight:!1},r={bottom:!0,bottomLeft:!0,bottomRight:!0,left:!0,right:!0,top:!0,topLeft:!0,topRight:!0},o=30,a=166,s={cancel:".cancel",dragHandleClassName:"handle",enableUserSelectHack:!1,minHeight:`${o}px`,minWidth:`${a}px`,resizeHandleStyles:{bottom:{bottom:"-3px",cursor:"ns-resize",height:"6px"},bottomLeft:{bottom:"-3px",cursor:"nesw-resize",height:"12px",left:"-3px",width:"12px"},bottomRight:{bottom:"-3px",cursor:"nwse-resize",height:"12px",right:"-3px",width:"12px"},left:{cursor:"ew-resize",left:"-3px",width:"6px"},right:{cursor:"ew-resize",right:"-3px",width:"6px"},top:{cursor:"ns-resize",height:"6px",top:"-3px"},topLeft:{cursor:"nwse-resize",height:"12px",left:"-3px",top:"-3px",width:"12px"},topRight:{cursor:"nesw-resize",height:"12px",right:"-3px",top:"-3px",width:"12px"}}};t.ZP=s},38365:function(e,t,n){n.d(t,{Rf:function(){return s},b$:function(){return u},hu:function(){return a},ix:function(){return c},mZ:function(){return l}});var i=n(918),r=n(97836),o=n(6484);let a=(e,t,n=[],i=0)=>{let[a]=e.split(r.CC),s=`${a}${r.CC}`,l=n.find(e=>e.startsWith(s))||"",{componentWindow:c}=t?.[l]||{},{x:u=0,y:d=0,width:f=0,height:h=0}=c?.getBoundingClientRect()||{};return!(u+i+f>(0,o.E9)()||d+i+h>(0,o.sI)())&&(u||d)?{x:u+i,y:d+i}:void 0},s=({height:e,width:t})=>{let[n,i]=[(0,o.sI)(),(0,o.E9)()];return{x:Math.floor(i/2-(0,o.Vy)(t)/2),y:Math.floor((n-r.bK)/2-(0,o.Vy)(e)/2)}},l={BOTTOM:15,LEFT:150,RIGHT:50,TOP:15},c=(e,t,n=!1)=>{let{position:i,size:r}=e||{},{x:a=0,y:s=0}=i||{},{height:c=0,width:u=0}=r||{};return n?a+l.RIGHT>t.x||a+(0,o.Vy)(u)-l.LEFT<0||s+l.BOTTOM>t.y||s+l.TOP<0:a<0||s<0||a+(0,o.Vy)(u)>t.x||s+(0,o.Vy)(c)>t.y},u=(e,t)=>{let n=Number(e.height),a=Number(e.width),[s,l]=[(0,o.sI)(),(0,o.E9)()],c=s-r.bK,u=Math.max(i.wV,Math.min(n,c)),d=Math.max(i.BS,Math.min(a,l));if(!t)return{height:u,width:d};let f=n===u,h=a===d;return f||h?f?h?{height:u,width:d}:{height:Math.round(u/(a/d)),width:d}:{height:u,width:Math.round(d/(n/u))}:n>a?{height:u,width:Math.round(d/(c/u))}:{height:Math.round(u/(l/d)),width:d}}},44696:function(e,t,n){var i=n(67294),r=n(58437),o=n(37176),a=n(97836);t.Z=e=>{let{title:t}=(0,r.z)(),[n]=e.split(a.CC),{title:s}=o.Z[n]||{};return{appendFileToTitle:(0,i.useCallback)((n,i)=>{let r=n?` - ${n}${i?` ${a.xy}`:""}`:"";t(e,`${s}${r}`)},[e,s,t]),prependFileToTitle:(0,i.useCallback)((n,i,r)=>{let o=n?`${i?`${a.xy} `:""}${n}${r?" ":" - "}`:"";t(e,`${o}${s}`)},[e,s,t])}}},48010:function(e,t,n){var i=n(10508),r=n(67294),o=n(38365),a=n(58437),s=n(76488);t.Z=e=>{let{setWindowStates:t}=(0,s.k)(),{processes:{[e]:{lockAspectRatio:n=!1,maximized:l=!1}={}}={}}=(0,a.z)(),{sizes:{titleBar:c}}=(0,i.Fg)();return{updateWindowSize:(0,r.useCallback)((i,r)=>t(t=>({...t,[e]:{...t?.[e],maximized:l,size:(0,o.b$)({height:i+c.height,width:r},n)}})),[e,n,l,t,c.height])}}},11394:function(e,t,n){n.d(t,{H3:function(){return s},od:function(){return i},wz:function(){return a}});let i=e=>e.forEach(e=>{if(e in window)try{delete window[e]}finally{Object.assign(window,{[e]:void 0})}}),r=e=>{let t;Object.defineProperty(window,e,{get:()=>window.lockedGlobals?.[e]?void 0:t,set(n){window.lockedGlobals?.[e]||(t=n)}})},o=(e,t)=>{window.lockedGlobals={...window.lockedGlobals,[e]:t}},a=e=>o(e,!0),s=e=>{Object.getOwnPropertyDescriptor(window,e)||r(e),o(e,!1)}}}]);
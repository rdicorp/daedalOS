"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2350, 3333],
    {
        82350: function (e, t, i) {
            i.r(t),
                i.d(t, {
                    default: function () {
                        return C;
                    },
                });
            var r = i(85893);
            let n = i(10508).ZP.div([
                'canvas{background-color:#000;height:auto !important;width:auto !important;}div{font-family:"Liberation Mono","DejaVu Sans Mono","Courier New",monospace;font-size:14px;font-weight:700;line-height:normal;position:relative;white-space:pre;}',
            ]);
            var a = i(1864),
                o = i(67294);
            let s = {
                autostart: !0,
                bios: { url: "/Program Files/Virtual x86/bios/seabios.bin" },
                log_level: 0,
                network_relay_url: "wss://relay.widgetry.org/",
                vga_bios: { url: "/Program Files/Virtual x86/bios/vgabios.bin" },
                wasm_path: "/Program Files/Virtual x86/v86.wasm",
            },
                l = ".bin.save",
                u = new Set([160, 180, 200, 320, 360, 400, 720, 1200, 1440, 1722, 2880]),
                c = (e) => (u.has(e >> 10) && (1023 & e) == 0) || 512 === e,
                f = (e, t) => (".bin" === e ? "bzimage" : c(t) ? "fda" : "hda");
            var h = i(48010);
            let p = "screen-set-size-graphical",
                d = "screen-set-size-text";
            var m = (e, t, i) => {
                let { updateWindowSize: r } = (0, h.Z)(e);
                (0, o.useEffect)(() => {
                    let e = ([e, t]) => r(t, e),
                        n = ([, e]) => {
                            let { height: i, width: n } = t.current?.querySelector("span:last-of-type")?.getBoundingClientRect() || {};
                            i && n && r(e * i, n);
                        };
                    return (
                        i?.add_listener(p, e),
                        i?.add_listener(d, n),
                        () => {
                            i?.remove_listener(p, e), i?.remove_listener(d, n);
                        }
                    );
                }, [i, t, r]);
            },
                g = i(44696),
                b = i(20063),
                w = i(46508),
                x = i(58437),
                y = i(76488),
                v = i(97836),
                _ = i(6484),
                T = i(48764).Buffer;
            window.DEBUG = !1;
            var $ = ({ containerRef: e, id: t, loading: i, setLoading: r, url: n }) => {
                let {
                    processes: { [t]: u },
                } = (0, x.z)(),
                    { foregroundId: c } = (0, y.k)(),
                    { closing: h, libs: p = [] } = u || {},
                    { appendFileToTitle: d } = (0, g.Z)(t),
                    $ = (0, o.useRef)(!1),
                    [z, C] = (0, o.useState)({}),
                    { exists: k, mkdirRecursive: L, readFile: E, updateFolder: R, writeFile: M } = (0, b.o)(),
                    S = (0, o.useCallback)(
                        (e) =>
                            new Promise((t, i) => {
                                z[e]?.save_state().then(t).catch(i);
                            }),
                        [z]
                    ),
                    j = (0, o.useCallback)(
                        async (e, t) => {
                            let i = `${(0, a.basename)(e)}${l}`;
                            (await k(v.Tl)) || (await L(v.Tl), R((0, a.dirname)(v.Tl)));
                            let r = (0, a.join)(v.Tl, i);
                            if (await M(r, T.from(await S(e)), !0)) {
                                if (t) {
                                    let e = (0, a.join)(v.Xo, v.Tl),
                                        i = (0, a.join)(v.Xo, `${r}${v.Qy}`);
                                    (await k(e)) || (await L(e), R((0, a.dirname)(v.Tl))), await M(i, t, !0);
                                }
                                try {
                                    z[e]?.destroy();
                                } catch {
                                } finally {
                                    R(v.Tl, i);
                                }
                            }
                        },
                        [z, k, L, S, R, M]
                    ),
                    Z = (0, o.useCallback)(async () => {
                        let [t] = Object.keys(z);
                        t && (await j(t));
                        let i = n ? await E(n) : T.from(""),
                            r = (0, _.RT)(n),
                            o = ".iso" === r,
                            u = (0, _.YS)(i),
                            c = { [o ? "cdrom" : f(r, i.length)]: { async: !1, size: i.length, url: u, use_parts: !1 } },
                            { deviceMemory: h = 0.25 } = navigator,
                            p = { boot_order: o ? 531 : 561, memory_size: 134217728 * h, screen_container: e.current, vga_memory_size: 8388608 * h, ...c, ...s },
                            m = (0, a.join)(v.Tl, `${(0, a.basename)(n)}${l}`),
                            g = (await k(m)) ? (0, _.YS)(await E(m)) : void 0;
                        g && (p.initial_state = { url: g }), (p.filesystem = { basefs: URL.createObjectURL(new Blob([JSON.stringify((0, w.uh)())], { type: "application/json" })), baseurl: window.location?.origin ?? "/" });
                        let b = new window.V86Starter(p);
                        b.add_listener("emulator-loaded", () => {
                            if ($.current) {
                                b.destroy();
                                return;
                            }
                            d((0, a.basename)(n)), (0, _.EK)(u), p.initial_state && (0, _.EK)(p.initial_state.url), p.filesystem && (0, _.EK)(p.filesystem.basefs), e.current?.addEventListener("click", b.lock_mouse), C({ [n]: b });
                        });
                    }, [d, j, e, z, k, E, n]);
                m(t, e, z[n]),
                    (0, o.useEffect)(() => {
                        i &&
                            (0, _.mb)(p).then(() => {
                                window.V86Starter && r(!1);
                            });
                    }, [p, i, r]),
                    (0, o.useEffect)(() => {
                        let e = c === t;
                        Object.values(z).forEach((t) => t?.keyboard_set_status(e));
                    }, [z, c, t]),
                    (0, o.useEffect)(() => {
                        !u || h || i || n in z || (C({ [n]: void 0 }), Z());
                        let t = e.current;
                        return () => {
                            if (n && h && !$.current && (($.current = !0), z[n])) {
                                let e = (e) => {
                                    window.setTimeout(() => j(n, e), v.jx.WINDOW);
                                };
                                (async () => {
                                    let e;
                                    if (z[n]?.v86.cpu.devices.vga.graphical_mode) e = t?.querySelector("canvas")?.toDataURL("image/png");
                                    else if (t instanceof HTMLElement) {
                                        let i = await (0, _.mZ)();
                                        try {
                                            e = await i?.toPng(t, { skipAutoScale: !0 });
                                        } catch { }
                                    }
                                    return e ? T.from(e.replace("data:image/png;base64,", ""), "base64") : void 0;
                                })()
                                    .then(e)
                                    .catch(e);
                            }
                        };
                    }, [j, h, e, z, Z, i, u, n]);
            },
                z = i(7443),
                C = ({ id: e }) => (0, r.jsxs)(z.Z, { StyledComponent: n, id: e, useHook: $, children: [(0, r.jsx)("div", { onContextMenuCapture: _.nK }), (0, r.jsx)("canvas", { onContextMenuCapture: _.nK })] });
        },
        7443: function (e, t, i) {
            var r = i(85893),
                n = i(67294),
                a = i(33333),
                o = i(45279),
                s = i(58437);
            t.Z = (0, n.memo)(({ id: e, useHook: t, StyledComponent: i, children: l }) => {
                let {
                    processes: { [e]: { url: u = "" } = {} },
                } = (0, s.z)(),
                    c = (0, n.useRef)(null),
                    [f, h] = (0, n.useState)(!0),
                    p = (0, n.useMemo)(() => ({ contain: "strict", visibility: f ? "hidden" : "visible" }), [f]);
                return t({ containerRef: c, id: e, loading: f, setLoading: h, url: u }), (0, r.jsxs)(r.Fragment, { children: [f && (0, r.jsx)(a.default, {}), (0, r.jsx)(i, { ref: c, style: p, ...(0, o.Z)({ id: e }), children: l })] });
            });
        },
        33333: function (e, t, i) {
            i.r(t);
            let r = i(10508).ZP.div(['cursor:wait;height:100%;width:100%;&::before{color:#fff;content:"Working on it...";display:flex;font-size:12px;justify-content:center;mix-blend-mode:difference;padding-top:18px;}']);
            t.default = r;
        },
        45279: function (e, t, i) {
            var r = i(1864),
                n = i(67294),
                a = i(59746),
                o = i(23736),
                s = i(89670),
                l = i(20063),
                u = i(58437),
                c = i(76488),
                f = i(97836),
                h = i(6484);
            t.Z = ({ callback: e, directory: t = f.Ll, id: i, onDragLeave: p, onDragOver: d, updatePositions: m }) => {
                let { url: g } = (0, u.z)(),
                    { iconPositions: b, sortOrders: w, setIconPositions: x } = (0, c.k)(),
                    { exists: y, mkdirRecursive: v, updateFolder: _, writeFile: T } = (0, l.o)(),
                    $ = (0, n.useCallback)(
                        async (e, t, n) => {
                            if (i) {
                                if (t) {
                                    let a = (0, r.join)(f.Ll, e);
                                    if ((await v(f.Ll), await T(a, t, !0))) return n === s.v.UPDATE_URL && g(i, a), await _(f.Ll, e), (0, r.basename)(a);
                                } else n === s.v.UPDATE_URL && g(i, e);
                            }
                            return "";
                        },
                        [i, v, _, g, T]
                    ),
                    { openTransferDialog: z } = (0, a.Z)();
                return {
                    onDragLeave: p,
                    onDragOver: (e) => {
                        d?.(e), (0, h.nK)(e);
                    },
                    onDrop: (n) => {
                        if (!f.my.has((0, h.RT)(t))) {
                            if (m && n.target instanceof HTMLElement) {
                                let { files: e, text: i } = (0, o.p4)(n);
                                if (0 === e.length && "" === i) return;
                                let a = { x: n.clientX, y: n.clientY },
                                    s = [];
                                if (i) {
                                    try {
                                        s = JSON.parse(i);
                                    } catch { }
                                    if (!Array.isArray(s)) return;
                                    let [e] = s;
                                    if (!e || (e.startsWith(t) && (0, r.basename)(e) === (0, r.relative)(t, e))) return;
                                    s = s.map((e) => (0, r.basename)(e));
                                } else e instanceof FileList ? (s = [...e].map((e) => e.name)) : (s = [...e].map((e) => e.getAsFile()?.name || "").filter(Boolean));
                                (s = s.map((e) => {
                                    if (!b[`${t}/${e}`]) return e;
                                    let i = 0,
                                        n = "";
                                    do (i += 1), (n = `${t}/${(0, r.basename)(e, (0, r.extname)(e))} (${i})${(0, r.extname)(e)}`);
                                    while (b[n]);
                                    return (0, r.basename)(n);
                                })),
                                    (0, h.vi)(t, n.target, b, w, a, s, x, y);
                            }
                            (0, o.WG)(n, e || $, t, z, !!i);
                        }
                    },
                };
            };
        },
        918: function (e, t, i) {
            i.d(t, {
                BS: function () {
                    return o;
                },
                FC: function () {
                    return n;
                },
                F_: function () {
                    return r;
                },
                wV: function () {
                    return a;
                },
            });
            let r = { bottom: !1, bottomLeft: !1, bottomRight: !1, left: !1, right: !1, top: !1, topLeft: !1, topRight: !1 },
                n = { bottom: !0, bottomLeft: !0, bottomRight: !0, left: !0, right: !0, top: !0, topLeft: !0, topRight: !0 },
                a = 30,
                o = 166,
                s = {
                    cancel: ".cancel",
                    dragHandleClassName: "handle",
                    enableUserSelectHack: !1,
                    minHeight: `${a}px`,
                    minWidth: `${o}px`,
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
        38365: function (e, t, i) {
            i.d(t, {
                Rf: function () {
                    return s;
                },
                b$: function () {
                    return c;
                },
                hu: function () {
                    return o;
                },
                ix: function () {
                    return u;
                },
                mZ: function () {
                    return l;
                },
            });
            var r = i(918),
                n = i(97836),
                a = i(6484);
            let o = (e, t, i = [], r = 0) => {
                let [o] = e.split(n.CC),
                    s = `${o}${n.CC}`,
                    l = i.find((e) => e.startsWith(s)) || "",
                    { componentWindow: u } = t?.[l] || {},
                    { x: c = 0, y: f = 0, width: h = 0, height: p = 0 } = u?.getBoundingClientRect() || {};
                return !(c + r + h > (0, a.E9)() || f + r + p > (0, a.sI)()) && (c || f) ? { x: c + r, y: f + r } : void 0;
            },
                s = ({ height: e, width: t }) => {
                    let [i, r] = [(0, a.sI)(), (0, a.E9)()];
                    return { x: Math.floor(r / 2 - (0, a.Vy)(t) / 2), y: Math.floor((i - n.bK) / 2 - (0, a.Vy)(e) / 2) };
                },
                l = { BOTTOM: 15, LEFT: 150, RIGHT: 50, TOP: 15 },
                u = (e, t, i = !1) => {
                    let { position: r, size: n } = e || {},
                        { x: o = 0, y: s = 0 } = r || {},
                        { height: u = 0, width: c = 0 } = n || {};
                    return i ? o + l.RIGHT > t.x || o + (0, a.Vy)(c) - l.LEFT < 0 || s + l.BOTTOM > t.y || s + l.TOP < 0 : o < 0 || s < 0 || o + (0, a.Vy)(c) > t.x || s + (0, a.Vy)(u) > t.y;
                },
                c = (e, t) => {
                    let i = Number(e.height),
                        o = Number(e.width),
                        [s, l] = [(0, a.sI)(), (0, a.E9)()],
                        u = s - n.bK,
                        c = Math.max(r.wV, Math.min(i, u)),
                        f = Math.max(r.BS, Math.min(o, l));
                    if (!t) return { height: c, width: f };
                    let h = i === c,
                        p = o === f;
                    return h || p
                        ? h
                            ? p
                                ? { height: c, width: f }
                                : { height: Math.round(c / (o / f)), width: f }
                            : { height: c, width: Math.round(f / (i / c)) }
                        : i > o
                            ? { height: c, width: Math.round(f / (u / c)) }
                            : { height: Math.round(c / (l / f)), width: f };
                };
        },
        44696: function (e, t, i) {
            var r = i(67294),
                n = i(58437),
                a = i(37176),
                o = i(97836);
            t.Z = (e) => {
                let { title: t } = (0, n.z)(),
                    [i] = e.split(o.CC),
                    { title: s } = a.Z[i] || {};
                return {
                    appendFileToTitle: (0, r.useCallback)(
                        (i, r) => {
                            let n = i ? ` - ${i}${r ? ` ${o.xy}` : ""}` : "";
                            t(e, `${s}${n}`);
                        },
                        [e, s, t]
                    ),
                    prependFileToTitle: (0, r.useCallback)(
                        (i, r, n) => {
                            let a = i ? `${r ? `${o.xy} ` : ""}${i}${n ? " " : " - "}` : "";
                            t(e, `${a}${s}`);
                        },
                        [e, s, t]
                    ),
                };
            };
        },
        48010: function (e, t, i) {
            var r = i(10508),
                n = i(67294),
                a = i(38365),
                o = i(58437),
                s = i(76488);
            t.Z = (e) => {
                let { setWindowStates: t } = (0, s.k)(),
                    { processes: { [e]: { lockAspectRatio: i = !1, maximized: l = !1 } = {} } = {} } = (0, o.z)(),
                    {
                        sizes: { titleBar: u },
                    } = (0, r.Fg)();
                return { updateWindowSize: (0, n.useCallback)((r, n) => t((t) => ({ ...t, [e]: { ...t?.[e], maximized: l, size: (0, a.b$)({ height: r + u.height, width: n }, i) } })), [e, i, l, t, u.height]) };
            };
        },
    },
]);





// "use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2350,3333],{82350:function(e,t,i){i.r(t),i.d(t,{default:function(){return C}});var r=i(85893);let n=i(10508).ZP.div(['canvas{background-color:#000;height:auto !important;width:auto !important;}div{font-family:"Liberation Mono","DejaVu Sans Mono","Courier New",monospace;font-size:14px;font-weight:700;line-height:normal;position:relative;white-space:pre;}']);var a=i(1864),o=i(67294);let s={autostart:!0,bios:{url:"/Program Files/Virtual x86/bios/seabios.bin"},log_level:0,network_relay_url:"wss://relay.widgetry.org/",vga_bios:{url:"/Program Files/Virtual x86/bios/vgabios.bin"},wasm_path:"/Program Files/Virtual x86/v86.wasm"},l=".bin.save",u=new Set([160,180,200,320,360,400,720,1200,1440,1722,2880]),c=e=>u.has(e>>10)&&(1023&e)==0||512===e,f=(e,t)=>".bin"===e?"bzimage":c(t)?"fda":"hda";var h=i(48010);let p="screen-set-size-graphical",d="screen-set-size-text";var m=(e,t,i)=>{let{updateWindowSize:r}=(0,h.Z)(e);(0,o.useEffect)(()=>{let e=([e,t])=>r(t,e),n=([,e])=>{let{height:i,width:n}=t.current?.querySelector("span:last-of-type")?.getBoundingClientRect()||{};i&&n&&r(e*i,n)};return i?.add_listener(p,e),i?.add_listener(d,n),()=>{i?.remove_listener(p,e),i?.remove_listener(d,n)}},[i,t,r])},g=i(44696),b=i(20063),w=i(46508),x=i(58437),y=i(76488),v=i(97836),_=i(6484),T=i(48764).Buffer;window.DEBUG=!1;var $=({containerRef:e,id:t,loading:i,setLoading:r,url:n})=>{let{processes:{[t]:u}}=(0,x.z)(),{foregroundId:c}=(0,y.k)(),{closing:h,libs:p=[]}=u||{},{appendFileToTitle:d}=(0,g.Z)(t),$=(0,o.useRef)(!1),[z,C]=(0,o.useState)({}),{exists:k,mkdirRecursive:L,readFile:E,updateFolder:R,writeFile:M}=(0,b.o)(),S=(0,o.useCallback)(e=>new Promise((t,i)=>{z[e]?.save_state().then(t).catch(i)}),[z]),j=(0,o.useCallback)(async(e,t)=>{let i=`${(0,a.basename)(e)}${l}`;await k(v.Tl)||(await L(v.Tl),R((0,a.dirname)(v.Tl)));let r=(0,a.join)(v.Tl,i);if(await M(r,T.from(await S(e)),!0)){if(t){let e=(0,a.join)(v.Xo,v.Tl),i=(0,a.join)(v.Xo,`${r}${v.Qy}`);await k(e)||(await L(e),R((0,a.dirname)(v.Tl))),await M(i,t,!0)}try{z[e]?.destroy()}catch{}finally{R(v.Tl,i)}}},[z,k,L,S,R,M]),Z=(0,o.useCallback)(async()=>{let[t]=Object.keys(z);t&&await j(t);let i=n?await E(n):T.from(""),r=(0,_.RT)(n),o=".iso"===r,u=(0,_.YS)(i),c={[o?"cdrom":f(r,i.length)]:{async:!1,size:i.length,url:u,use_parts:!1}},{deviceMemory:h=.25}=navigator,p={boot_order:o?531:561,memory_size:134217728*h,screen_container:e.current,vga_memory_size:8388608*h,...c,...s},m=(0,a.join)(v.Tl,`${(0,a.basename)(n)}${l}`),g=await k(m)?(0,_.YS)(await E(m)):void 0;g&&(p.initial_state={url:g}),p.filesystem={basefs:URL.createObjectURL(new Blob([JSON.stringify((0,w.uh)())],{type:"application/json"})),baseurl:window.location?.origin??"/"};let b=new window.V86Starter(p);b.add_listener("emulator-loaded",()=>{if($.current){b.destroy();return}d((0,a.basename)(n)),(0,_.EK)(u),p.initial_state&&(0,_.EK)(p.initial_state.url),p.filesystem&&(0,_.EK)(p.filesystem.basefs),e.current?.addEventListener("click",b.lock_mouse),C({[n]:b})})},[d,j,e,z,k,E,n]);m(t,e,z[n]),(0,o.useEffect)(()=>{i&&(0,_.mb)(p).then(()=>{window.V86Starter&&r(!1)})},[p,i,r]),(0,o.useEffect)(()=>{let e=c===t;Object.values(z).forEach(t=>t?.keyboard_set_status(e))},[z,c,t]),(0,o.useEffect)(()=>{!u||h||i||n in z||(C({[n]:void 0}),Z());let t=e.current;return()=>{if(n&&h&&!$.current&&($.current=!0,z[n])){let e=e=>{window.setTimeout(()=>j(n,e),v.jx.WINDOW)};(async()=>{let e;if(z[n]?.v86.cpu.devices.vga.graphical_mode)e=t?.querySelector("canvas")?.toDataURL("image/png");else if(t instanceof HTMLElement){let i=await (0,_.mZ)();try{e=await i?.toPng(t,{skipAutoScale:!0})}catch{}}return e?T.from(e.replace("data:image/png;base64,",""),"base64"):void 0})().then(e).catch(e)}}},[j,h,e,z,Z,i,u,n])},z=i(7443),C=({id:e})=>(0,r.jsxs)(z.Z,{StyledComponent:n,id:e,useHook:$,children:[(0,r.jsx)("div",{onContextMenuCapture:_.nK}),(0,r.jsx)("canvas",{onContextMenuCapture:_.nK})]})},7443:function(e,t,i){var r=i(85893),n=i(67294),a=i(33333),o=i(45279),s=i(58437);t.Z=(0,n.memo)(({id:e,useHook:t,StyledComponent:i,children:l})=>{let{processes:{[e]:{url:u=""}={}}}=(0,s.z)(),c=(0,n.useRef)(null),[f,h]=(0,n.useState)(!0),p=(0,n.useMemo)(()=>({contain:"strict",visibility:f?"hidden":"visible"}),[f]);return t({containerRef:c,id:e,loading:f,setLoading:h,url:u}),(0,r.jsxs)(r.Fragment,{children:[f&&(0,r.jsx)(a.default,{}),(0,r.jsx)(i,{ref:c,style:p,...(0,o.Z)({id:e}),children:l})]})})},33333:function(e,t,i){i.r(t);let r=i(10508).ZP.div(['cursor:wait;height:100%;width:100%;&::before{color:#fff;content:"Working on it...";display:flex;font-size:12px;justify-content:center;mix-blend-mode:difference;padding-top:18px;}']);t.default=r},45279:function(e,t,i){var r=i(1864),n=i(67294),a=i(59746),o=i(23736),s=i(89670),l=i(20063),u=i(58437),c=i(76488),f=i(97836),h=i(6484);t.Z=({callback:e,directory:t=f.Ll,id:i,onDragLeave:p,onDragOver:d,updatePositions:m})=>{let{url:g}=(0,u.z)(),{iconPositions:b,sortOrders:w,setIconPositions:x}=(0,c.k)(),{exists:y,mkdirRecursive:v,updateFolder:_,writeFile:T}=(0,l.o)(),$=(0,n.useCallback)(async(e,t,n)=>{if(i){if(t){let a=(0,r.join)(f.Ll,e);if(await v(f.Ll),await T(a,t,!0))return n===s.v.UPDATE_URL&&g(i,a),await _(f.Ll,e),(0,r.basename)(a)}else n===s.v.UPDATE_URL&&g(i,e)}return""},[i,v,_,g,T]),{openTransferDialog:z}=(0,a.Z)();return{onDragLeave:p,onDragOver:e=>{d?.(e),(0,h.nK)(e)},onDrop:n=>{if(!f.my.has((0,h.RT)(t))){if(m&&n.target instanceof HTMLElement){let{files:e,text:i}=(0,o.p4)(n);if(0===e.length&&""===i)return;let a={x:n.clientX,y:n.clientY},s=[];if(i){try{s=JSON.parse(i)}catch{}if(!Array.isArray(s))return;let[e]=s;if(!e||e.startsWith(t)&&(0,r.basename)(e)===(0,r.relative)(t,e))return;s=s.map(e=>(0,r.basename)(e))}else e instanceof FileList?s=[...e].map(e=>e.name):s=[...e].map(e=>e.getAsFile()?.name||"").filter(Boolean);s=s.map(e=>{if(!b[`${t}/${e}`])return e;let i=0,n="";do i+=1,n=`${t}/${(0,r.basename)(e,(0,r.extname)(e))} (${i})${(0,r.extname)(e)}`;while(b[n]);return(0,r.basename)(n)}),(0,h.vi)(t,n.target,b,w,a,s,x,y)}(0,o.WG)(n,e||$,t,z,!!i)}}}}},918:function(e,t,i){i.d(t,{BS:function(){return o},FC:function(){return n},F_:function(){return r},wV:function(){return a}});let r={bottom:!1,bottomLeft:!1,bottomRight:!1,left:!1,right:!1,top:!1,topLeft:!1,topRight:!1},n={bottom:!0,bottomLeft:!0,bottomRight:!0,left:!0,right:!0,top:!0,topLeft:!0,topRight:!0},a=30,o=166,s={cancel:".cancel",dragHandleClassName:"handle",enableUserSelectHack:!1,minHeight:`${a}px`,minWidth:`${o}px`,resizeHandleStyles:{bottom:{bottom:"-3px",cursor:"ns-resize",height:"6px"},bottomLeft:{bottom:"-3px",cursor:"nesw-resize",height:"12px",left:"-3px",width:"12px"},bottomRight:{bottom:"-3px",cursor:"nwse-resize",height:"12px",right:"-3px",width:"12px"},left:{cursor:"ew-resize",left:"-3px",width:"6px"},right:{cursor:"ew-resize",right:"-3px",width:"6px"},top:{cursor:"ns-resize",height:"6px",top:"-3px"},topLeft:{cursor:"nwse-resize",height:"12px",left:"-3px",top:"-3px",width:"12px"},topRight:{cursor:"nesw-resize",height:"12px",right:"-3px",top:"-3px",width:"12px"}}};t.ZP=s},38365:function(e,t,i){i.d(t,{Rf:function(){return s},b$:function(){return c},hu:function(){return o},ix:function(){return u},mZ:function(){return l}});var r=i(918),n=i(97836),a=i(6484);let o=(e,t,i=[],r=0)=>{let[o]=e.split(n.CC),s=`${o}${n.CC}`,l=i.find(e=>e.startsWith(s))||"",{componentWindow:u}=t?.[l]||{},{x:c=0,y:f=0,width:h=0,height:p=0}=u?.getBoundingClientRect()||{};return!(c+r+h>(0,a.E9)()||f+r+p>(0,a.sI)())&&(c||f)?{x:c+r,y:f+r}:void 0},s=({height:e,width:t})=>{let[i,r]=[(0,a.sI)(),(0,a.E9)()];return{x:Math.floor(r/2-(0,a.Vy)(t)/2),y:Math.floor((i-n.bK)/2-(0,a.Vy)(e)/2)}},l={BOTTOM:15,LEFT:150,RIGHT:50,TOP:15},u=(e,t,i=!1)=>{let{position:r,size:n}=e||{},{x:o=0,y:s=0}=r||{},{height:u=0,width:c=0}=n||{};return i?o+l.RIGHT>t.x||o+(0,a.Vy)(c)-l.LEFT<0||s+l.BOTTOM>t.y||s+l.TOP<0:o<0||s<0||o+(0,a.Vy)(c)>t.x||s+(0,a.Vy)(u)>t.y},c=(e,t)=>{let i=Number(e.height),o=Number(e.width),[s,l]=[(0,a.sI)(),(0,a.E9)()],u=s-n.bK,c=Math.max(r.wV,Math.min(i,u)),f=Math.max(r.BS,Math.min(o,l));if(!t)return{height:c,width:f};let h=i===c,p=o===f;return h||p?h?p?{height:c,width:f}:{height:Math.round(c/(o/f)),width:f}:{height:c,width:Math.round(f/(i/c))}:i>o?{height:c,width:Math.round(f/(u/c))}:{height:Math.round(c/(l/f)),width:f}}},44696:function(e,t,i){var r=i(67294),n=i(58437),a=i(37176),o=i(97836);t.Z=e=>{let{title:t}=(0,n.z)(),[i]=e.split(o.CC),{title:s}=a.Z[i]||{};return{appendFileToTitle:(0,r.useCallback)((i,r)=>{let n=i?` - ${i}${r?` ${o.xy}`:""}`:"";t(e,`${s}${n}`)},[e,s,t]),prependFileToTitle:(0,r.useCallback)((i,r,n)=>{let a=i?`${r?`${o.xy} `:""}${i}${n?" ":" - "}`:"";t(e,`${a}${s}`)},[e,s,t])}}},48010:function(e,t,i){var r=i(10508),n=i(67294),a=i(38365),o=i(58437),s=i(76488);t.Z=e=>{let{setWindowStates:t}=(0,s.k)(),{processes:{[e]:{lockAspectRatio:i=!1,maximized:l=!1}={}}={}}=(0,o.z)(),{sizes:{titleBar:u}}=(0,r.Fg)();return{updateWindowSize:(0,n.useCallback)((r,n)=>t(t=>({...t,[e]:{...t?.[e],maximized:l,size:(0,a.b$)({height:r+u.height,width:n},i)}})),[e,i,l,t,u.height])}}}}]);
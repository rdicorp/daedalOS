"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4534],
    {
        14534: function (e, t, r) {
            r.r(t),
                r.d(t, {
                    default: function () {
                        return k;
                    },
                });
            var n = r(85893),
                i = r(67294),
                o = r(8897),
                s = r(10508),
                a = r(10753),
                c = r(97836);
            let l = (0, s.ZP)(o.m.div)(
                [
                    "backdrop-filter:",
                    ";background-color:",
                    ";border:",
                    ";border-bottom:0;bottom:",
                    "px;display:flex;overflow:hidden;place-content:center;place-items:flex-start;position:fixed;transform:",
                    ";",
                    ":hover &{background-color:hsla(0,0%,25%,85%);&:active{background-color:",
                    ";}}img{height:",
                    "px;margin:",
                    "px;max-height:",
                    "px;max-width:",
                    "px;min-height:80px;min-width:80px;object-fit:contain;}button.close{background-color:rgb(40,40,40);height:32px;position:absolute;right:0;top:0;width:32px;svg{fill:rgb(252,246,247);width:12px;}&:active{background-color:rgb(139,10,20) !important;}&:hover{background-color:rgb(194,22,36);}}.controls{display:flex;place-content:center;position:absolute;top:",
                    "px;width:100%;button{background-color:rgb(70,70,70);border:1px solid rgb(46,46,46);display:flex;height:27px;place-content:center;place-items:center;width:27px;&:active{background-color:rgb(61,96,153) !important;border:1px solid rgb(49,77,122) !important;}&:hover{background-color:rgb(54,101,179);border:1px solid rgb(43,81,143);}svg{fill:#fff;height:16px;margin-left:1px;pointer-events:none;user-select:none;width:16px;}}}",
                ],
                ({ theme: e }) => `blur(${e.sizes.taskbar.blur})`,
                ({ theme: e }) => e.colors.taskbar.background,
                ({ theme: e }) => `1px solid ${e.colors.taskbar.peekBorder}`,
                c.bK,
                ({ $offsetX: e }) => (e ? `translateX(${e}px)` : void 0),
                a.Z,
                ({ theme: e }) => e.colors.taskbar.activeForeground,
                ({ theme: e }) => e.sizes.taskbar.entry.peekImage.height,
                ({ theme: e }) => e.sizes.taskbar.entry.peekImage.margin,
                c.yM,
                c.yM,
                ({ theme: e }) => e.sizes.taskbar.entry.peekImage.height + 2 * e.sizes.taskbar.entry.peekImage.margin
            );
            var h = (e = !1) => {
                let {
                    sizes: { taskbar: t },
                } = (0, s.Fg)(),
                    r = t.entry.peekImage.height + 2 * t.entry.peekImage.margin;
                return (
                    e && (r += t.entry.peekControlsHeight),
                    { animate: "active", exit: "initial", initial: "initial", transition: { duration: c.Nb.WINDOW, ease: "easeInOut" }, variants: { active: { height: r, opacity: 1 }, initial: { height: 0, opacity: 0 } } }
                );
            },
                d = r(58437),
                g = r(6484);
            let u = async (e, t, r) => {
                let n;
                if (!t.current) return;
                let i = () => window.requestAnimationFrame(() => u(e, t, r)),
                    o = await (0, g.mZ)();
                try {
                    let t = "VIDEO" === e.tagName ? { margin: "0", padding: "0" } : {};
                    n = await o?.toCanvas(e, {
                        ...(e.clientWidth > c.yM && { canvasHeight: Math.round((c.yM / e.clientWidth) * e.clientHeight), canvasWidth: c.yM }),
                        filter: (e) => !(e instanceof HTMLSourceElement),
                        skipAutoScale: !0,
                        style: { inset: "0", ...t },
                    });
                } catch { }
                if (n && n.width > 0 && n.height > 0) {
                    if ((0, g.H5)(n)) {
                        let e = new Image(),
                            o = n.toDataURL();
                        e.addEventListener(
                            "load",
                            () => {
                                t.current && (r(o), window.setTimeout(i, c.i2 / 15));
                            },
                            c.K7
                        ),
                            (e.src = o);
                    } else i();
                }
            };
            var p = (e) => {
                let {
                    processes: { [e]: t },
                } = (0, d.z)(),
                    { peekElement: r, componentWindow: n } = t || {},
                    o = (0, i.useRef)(),
                    [s, a] = (0, i.useState)(""),
                    l = (0, i.useRef)(!0);
                return (
                    (0, i.useEffect)(() => {
                        let e = r || n;
                        return (
                            !o.current && e && ((o.current = window.setTimeout(() => window.requestAnimationFrame(() => u(e, l, a)), document.querySelector(".peekWindow") ? 0 : c.i2 / 2)), (l.current = !0)),
                            () => {
                                o.current && (clearTimeout(o.current), (o.current = void 0)), (l.current = !1);
                            }
                        );
                    }, [n, r]),
                    s
                );
            },
                m = r(67364),
                x = r(23561),
                w = r(76488),
                v = r(67278);
            let b = (0, i.memo)(() => (0, n.jsx)("svg", { viewBox: "0 0 32 32", xmlns: "http://www.w3.org/2000/svg", children: (0, n.jsx)("path", { d: "M8 29.328V2.672h2.672v26.656H8zM21.328 2.672H24v26.656h-2.672V2.672z" }) })),
                f = (0, i.memo)(() => (0, n.jsx)("svg", { viewBox: "0 0 32 32", xmlns: "http://www.w3.org/2000/svg", children: (0, n.jsx)("path", { d: "M28 16 8 30V2z" }) }));
            var k = (0, i.memo)(({ id: e }) => {
                let {
                    minimize: t,
                    processes: { [e]: r },
                } = (0, d.z)(),
                    { pause: o, paused: s, play: a, minimized: u = !1, title: k = e } = r || {},
                    { setForegroundId: y } = (0, w.k)(),
                    { onClose: j } = (0, x.Z)(e),
                    [z, M] = (0, i.useState)(0),
                    H = p(e),
                    L = (0, i.useMemo)(() => !!(a && o && s), [o, s, a]),
                    C = h(L),
                    I = (0, i.useRef)(null),
                    [V, E] = (0, i.useState)(!1),
                    S = (0, i.useRef)(!1);
                return (
                    (0, i.useEffect)(() => {
                        L && s && !S.current && ((S.current = !0), E(s(E)));
                    }, [s, L]),
                    (0, i.useLayoutEffect)(() => {
                        if (H) {
                            let { left: e = 0, right: t = 0 } = I.current?.getBoundingClientRect() || {},
                                r = (0, g.E9)();
                            e < 0 ? M(Math.abs(e)) : t > r && M(r - t);
                        }
                    }, [H]),
                    H
                        ? (0, n.jsxs)(l, {
                            ref: I,
                            $offsetX: z,
                            className: "peekWindow",
                            onClick: () => {
                                u && t(e), y(e);
                            },
                            ...C,
                            ...c.LL,
                            children: [
                                (0, n.jsx)("img", { alt: k, decoding: "async", loading: "eager", src: H, ...c.h7 }),
                                (0, n.jsx)(v.Z, { className: "close", onClick: j, ...(0, g.PS)("Close"), children: (0, n.jsx)(m.Tw, {}) }),
                                L &&
                                (0, n.jsxs)("div", {
                                    className: "controls",
                                    children: [
                                        V &&
                                        (0, n.jsx)(v.Z, {
                                            onClick: (e) => {
                                                (0, g.nK)(e), a?.();
                                            },
                                            ...(0, g.PS)("Play"),
                                            ...c.LL,
                                            children: (0, n.jsx)(f, {}),
                                        }),
                                        !V &&
                                        (0, n.jsx)(v.Z, {
                                            onClick: (e) => {
                                                (0, g.nK)(e), o?.();
                                            },
                                            ...(0, g.PS)("Pause"),
                                            ...c.LL,
                                            children: (0, n.jsx)(b, {}),
                                        }),
                                    ],
                                }),
                            ],
                        })
                        : null
                );
            });
        },
        67364: function (e, t, r) {
            r.d(t, {
                J6: function () {
                    return a;
                },
                Tw: function () {
                    return c;
                },
                bJ: function () {
                    return s;
                },
                dO: function () {
                    return o;
                },
            });
            var n = r(85893),
                i = r(67294);
            let o = (0, i.memo)(() => (0, n.jsx)("svg", { viewBox: "0 0 10 1", xmlns: "http://www.w3.org/2000/svg", children: (0, n.jsx)("path", { d: "M0 0h10v1H0z" }) })),
                s = (0, i.memo)(() => (0, n.jsx)("svg", { viewBox: "0 0 10 10", xmlns: "http://www.w3.org/2000/svg", children: (0, n.jsx)("path", { d: "M0 0v10h10V0H0zm1 1h8v8H1V1z" }) })),
                a = (0, i.memo)(() => (0, n.jsx)("svg", { viewBox: "0 0 10 10", xmlns: "http://www.w3.org/2000/svg", children: (0, n.jsx)("path", { d: "M2.1 0v2H0v8.1h8.2v-2h2V0H2.1zm5.1 9.2H1.1V3h6.1v6.2zm2-2.1h-1V2H3.1V1h6.1v6.1z" }) })),
                c = (0, i.memo)(() => (0, n.jsx)("svg", { viewBox: "0 0 10 10", xmlns: "http://www.w3.org/2000/svg", children: (0, n.jsx)("path", { d: "M10.2.7L9.5 0 5.1 4.4.7 0 0 .7l4.4 4.4L0 9.5l.7.7 4.4-4.4 4.4 4.4.7-.7-4.4-4.4z" }) }));
        },
    },
]);



//"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4534],{14534:function(e,t,r){r.r(t),r.d(t,{default:function(){return k}});var n=r(85893),i=r(67294),o=r(8897),s=r(10508),a=r(10753),c=r(97836);let l=(0,s.ZP)(o.m.div)(["backdrop-filter:",";background-color:",";border:",";border-bottom:0;bottom:","px;display:flex;overflow:hidden;place-content:center;place-items:flex-start;position:fixed;transform:",";",":hover &{background-color:hsla(0,0%,25%,85%);&:active{background-color:",";}}img{height:","px;margin:","px;max-height:","px;max-width:","px;min-height:80px;min-width:80px;object-fit:contain;}button.close{background-color:rgb(40,40,40);height:32px;position:absolute;right:0;top:0;width:32px;svg{fill:rgb(252,246,247);width:12px;}&:active{background-color:rgb(139,10,20) !important;}&:hover{background-color:rgb(194,22,36);}}.controls{display:flex;place-content:center;position:absolute;top:","px;width:100%;button{background-color:rgb(70,70,70);border:1px solid rgb(46,46,46);display:flex;height:27px;place-content:center;place-items:center;width:27px;&:active{background-color:rgb(61,96,153) !important;border:1px solid rgb(49,77,122) !important;}&:hover{background-color:rgb(54,101,179);border:1px solid rgb(43,81,143);}svg{fill:#fff;height:16px;margin-left:1px;pointer-events:none;user-select:none;width:16px;}}}"],({theme:e})=>`blur(${e.sizes.taskbar.blur})`,({theme:e})=>e.colors.taskbar.background,({theme:e})=>`1px solid ${e.colors.taskbar.peekBorder}`,c.bK,({$offsetX:e})=>e?`translateX(${e}px)`:void 0,a.Z,({theme:e})=>e.colors.taskbar.activeForeground,({theme:e})=>e.sizes.taskbar.entry.peekImage.height,({theme:e})=>e.sizes.taskbar.entry.peekImage.margin,c.yM,c.yM,({theme:e})=>e.sizes.taskbar.entry.peekImage.height+2*e.sizes.taskbar.entry.peekImage.margin);var h=(e=!1)=>{let{sizes:{taskbar:t}}=(0,s.Fg)(),r=t.entry.peekImage.height+2*t.entry.peekImage.margin;return e&&(r+=t.entry.peekControlsHeight),{animate:"active",exit:"initial",initial:"initial",transition:{duration:c.Nb.WINDOW,ease:"easeInOut"},variants:{active:{height:r,opacity:1},initial:{height:0,opacity:0}}}},d=r(58437),g=r(6484);let u=async(e,t,r)=>{let n;if(!t.current)return;let i=()=>window.requestAnimationFrame(()=>u(e,t,r)),o=await (0,g.mZ)();try{let t="VIDEO"===e.tagName?{margin:"0",padding:"0"}:{};n=await o?.toCanvas(e,{...e.clientWidth>c.yM&&{canvasHeight:Math.round(c.yM/e.clientWidth*e.clientHeight),canvasWidth:c.yM},filter:e=>!(e instanceof HTMLSourceElement),skipAutoScale:!0,style:{inset:"0",...t}})}catch{}if(n&&n.width>0&&n.height>0){if((0,g.H5)(n)){let e=new Image,o=n.toDataURL();e.addEventListener("load",()=>{t.current&&(r(o),window.setTimeout(i,c.i2/15))},c.K7),e.src=o}else i()}};var p=e=>{let{processes:{[e]:t}}=(0,d.z)(),{peekElement:r,componentWindow:n}=t||{},o=(0,i.useRef)(),[s,a]=(0,i.useState)(""),l=(0,i.useRef)(!0);return(0,i.useEffect)(()=>{let e=r||n;return!o.current&&e&&(o.current=window.setTimeout(()=>window.requestAnimationFrame(()=>u(e,l,a)),document.querySelector(".peekWindow")?0:c.i2/2),l.current=!0),()=>{o.current&&(clearTimeout(o.current),o.current=void 0),l.current=!1}},[n,r]),s},m=r(67364),x=r(23561),w=r(76488),v=r(67278);let b=(0,i.memo)(()=>(0,n.jsx)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M8 29.328V2.672h2.672v26.656H8zM21.328 2.672H24v26.656h-2.672V2.672z"})})),f=(0,i.memo)(()=>(0,n.jsx)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M28 16 8 30V2z"})}));var k=(0,i.memo)(({id:e})=>{let{minimize:t,processes:{[e]:r}}=(0,d.z)(),{pause:o,paused:s,play:a,minimized:u=!1,title:k=e}=r||{},{setForegroundId:y}=(0,w.k)(),{onClose:j}=(0,x.Z)(e),[z,M]=(0,i.useState)(0),H=p(e),L=(0,i.useMemo)(()=>!!(a&&o&&s),[o,s,a]),C=h(L),I=(0,i.useRef)(null),[V,E]=(0,i.useState)(!1),S=(0,i.useRef)(!1);return(0,i.useEffect)(()=>{L&&s&&!S.current&&(S.current=!0,E(s(E)))},[s,L]),(0,i.useLayoutEffect)(()=>{if(H){let{left:e=0,right:t=0}=I.current?.getBoundingClientRect()||{},r=(0,g.E9)();e<0?M(Math.abs(e)):t>r&&M(r-t)}},[H]),H?(0,n.jsxs)(l,{ref:I,$offsetX:z,className:"peekWindow",onClick:()=>{u&&t(e),y(e)},...C,...c.LL,children:[(0,n.jsx)("img",{alt:k,decoding:"async",loading:"eager",src:H,...c.h7}),(0,n.jsx)(v.Z,{className:"close",onClick:j,...(0,g.PS)("Close"),children:(0,n.jsx)(m.Tw,{})}),L&&(0,n.jsxs)("div",{className:"controls",children:[V&&(0,n.jsx)(v.Z,{onClick:e=>{(0,g.nK)(e),a?.()},...(0,g.PS)("Play"),...c.LL,children:(0,n.jsx)(f,{})}),!V&&(0,n.jsx)(v.Z,{onClick:e=>{(0,g.nK)(e),o?.()},...(0,g.PS)("Pause"),...c.LL,children:(0,n.jsx)(b,{})})]})]}):null})},67364:function(e,t,r){r.d(t,{J6:function(){return a},Tw:function(){return c},bJ:function(){return s},dO:function(){return o}});var n=r(85893),i=r(67294);let o=(0,i.memo)(()=>(0,n.jsx)("svg",{viewBox:"0 0 10 1",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M0 0h10v1H0z"})})),s=(0,i.memo)(()=>(0,n.jsx)("svg",{viewBox:"0 0 10 10",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M0 0v10h10V0H0zm1 1h8v8H1V1z"})})),a=(0,i.memo)(()=>(0,n.jsx)("svg",{viewBox:"0 0 10 10",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M2.1 0v2H0v8.1h8.2v-2h2V0H2.1zm5.1 9.2H1.1V3h6.1v6.2zm2-2.1h-1V2H3.1V1h6.1v6.1z"})})),c=(0,i.memo)(()=>(0,n.jsx)("svg",{viewBox:"0 0 10 10",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M10.2.7L9.5 0 5.1 4.4.7 0 0 .7l4.4 4.4L0 9.5l.7.7 4.4-4.4 4.4 4.4.7-.7-4.4-4.4z"})}))}}]); 
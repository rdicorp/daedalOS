"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8511, 3333],
    {
        8511: function (e, t, n) {
            n.r(t),
                n.d(t, {
                    default: function () {
                        return m;
                    },
                });
            var i = n(85893),
                a = n(10508);
            let r = a.ZP.div(["height:", ";width:100%;canvas{height:100%;width:100%;}"], ({ theme: e }) => `calc(100% - ${e.sizes.titleBar.height}px)`);
            var s = n(67294),
                l = n(96189),
                o = n(58437),
                u = n(76488),
                c = n(97836),
                f = n(6484),
                d = ({ containerRef: e, id: t, setLoading: n }) => {
                    let { processes: { [t]: i } = {} } = (0, o.z)(),
                        r = (0, l.Z)(),
                        {
                            windowStates: { [t]: d },
                        } = (0, u.k)(),
                        { size: h } = d || {},
                        { libs: m } = i || {},
                        {
                            sizes: { titleBar: w },
                        } = (0, a.Fg)(),
                        p = (0, s.useCallback)(() => e.current?.querySelector("canvas"), [e]);
                    (0, s.useEffect)(() => {
                        h && (window.CCModule.setCanvasSize?.(f.Vy(h.width), f.Vy(h.height) - w.height), window.CCModule.OnResize?.());
                    }, [h, w.height]),
                        (0, s.useEffect)(() => {
                            window.CCModule ||
                                setTimeout(() => {
                                    let e = p();
                                    (window.CCModule = {
                                        arguments: ["Singleplayer"],
                                        canvas: e,
                                        postRun: [
                                            () => {
                                                n(!1), r(window.FS, "ClassiCube");
                                            },
                                            () => {
                                                let { width: t, height: n } = e.getBoundingClientRect() || {};
                                                (e.width = t), (e.height = n);
                                            },
                                        ],
                                        print: console.info,
                                        setStatus: console.info,
                                    }),
                                        (0, f.mb)(m);
                                }, c.jx.WINDOW);
                        }, [p, m, r, n]);
                },
                h = n(7443),
                m = ({ id: e }) => (0, i.jsx)(h.Z, { StyledComponent: r, id: e, useHook: d, children: (0, i.jsx)("canvas", { onContextMenu: f.nK }) });
        },
        7443: function (e, t, n) {
            var i = n(85893),
                a = n(67294),
                r = n(33333),
                s = n(45279),
                l = n(58437);
            t.Z = (0, a.memo)(({ id: e, useHook: t, StyledComponent: n, children: o }) => {
                let {
                    processes: { [e]: { url: u = "" } = {} },
                } = (0, l.z)(),
                    c = (0, a.useRef)(null),
                    [f, d] = (0, a.useState)(!0),
                    h = (0, a.useMemo)(() => ({ contain: "strict", visibility: f ? "hidden" : "visible" }), [f]);
                return t({ containerRef: c, id: e, loading: f, setLoading: d, url: u }), (0, i.jsxs)(i.Fragment, { children: [f && (0, i.jsx)(r.default, {}), (0, i.jsx)(n, { ref: c, style: h, ...(0, s.Z)({ id: e }), children: o })] });
            });
        },
        33333: function (e, t, n) {
            n.r(t);
            let i = n(10508).ZP.div(['cursor:wait;height:100%;width:100%;&::before{color:#fff;content:"Working on it...";display:flex;font-size:12px;justify-content:center;mix-blend-mode:difference;padding-top:18px;}']);
            t.default = i;
        },
        96189: function (e, t, n) {
            var i = n(67294),
                a = n(20063);
            t.Z = () => {
                let { mountEmscriptenFs: e, unMapFs: t, updateFolder: n } = (0, a.o)(),
                    r = (0, i.useRef)();
                return (
                    (0, i.useEffect)(
                        () => () => {
                            if (r.current) {
                                let e = r.current;
                                (r.current = ""),
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
                            let a = "";
                            try {
                                a = await e(t, i);
                            } catch { }
                            a && (n("/", a), (r.current = a));
                        },
                        [e, n]
                    )
                );
            };
        },
        45279: function (e, t, n) {
            var i = n(1864),
                a = n(67294),
                r = n(59746),
                s = n(23736),
                l = n(89670),
                o = n(20063),
                u = n(58437),
                c = n(76488),
                f = n(97836),
                d = n(6484);
            t.Z = ({ callback: e, directory: t = f.Ll, id: n, onDragLeave: h, onDragOver: m, updatePositions: w }) => {
                let { url: p } = (0, u.z)(),
                    { iconPositions: g, sortOrders: v, setIconPositions: C } = (0, c.k)(),
                    { exists: y, mkdirRecursive: b, updateFolder: x, writeFile: k } = (0, o.o)(),
                    S = (0, a.useCallback)(
                        async (e, t, a) => {
                            if (n) {
                                if (t) {
                                    let r = (0, i.join)(f.Ll, e);
                                    if ((await b(f.Ll), await k(r, t, !0))) return a === l.v.UPDATE_URL && p(n, r), await x(f.Ll, e), (0, i.basename)(r);
                                } else a === l.v.UPDATE_URL && p(n, e);
                            }
                            return "";
                        },
                        [n, b, x, p, k]
                    ),
                    { openTransferDialog: Z } = (0, r.Z)();
                return {
                    onDragLeave: h,
                    onDragOver: (e) => {
                        m?.(e), (0, d.nK)(e);
                    },
                    onDrop: (a) => {
                        if (!f.my.has((0, d.RT)(t))) {
                            if (w && a.target instanceof HTMLElement) {
                                let { files: e, text: n } = (0, s.p4)(a);
                                if (0 === e.length && "" === n) return;
                                let r = { x: a.clientX, y: a.clientY },
                                    l = [];
                                if (n) {
                                    try {
                                        l = JSON.parse(n);
                                    } catch { }
                                    if (!Array.isArray(l)) return;
                                    let [e] = l;
                                    if (!e || (e.startsWith(t) && (0, i.basename)(e) === (0, i.relative)(t, e))) return;
                                    l = l.map((e) => (0, i.basename)(e));
                                } else e instanceof FileList ? (l = [...e].map((e) => e.name)) : (l = [...e].map((e) => e.getAsFile()?.name || "").filter(Boolean));
                                (l = l.map((e) => {
                                    if (!g[`${t}/${e}`]) return e;
                                    let n = 0,
                                        a = "";
                                    do (n += 1), (a = `${t}/${(0, i.basename)(e, (0, i.extname)(e))} (${n})${(0, i.extname)(e)}`);
                                    while (g[a]);
                                    return (0, i.basename)(a);
                                })),
                                    (0, d.vi)(t, a.target, g, v, r, l, C, y);
                            }
                            (0, s.WG)(a, e || S, t, Z, !!n);
                        }
                    },
                };
            };
        },
    },
]);


// "use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8511,3333],{8511:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var i=n(85893),a=n(10508);let r=a.ZP.div(["height:",";width:100%;canvas{height:100%;width:100%;}"],({theme:e})=>`calc(100% - ${e.sizes.titleBar.height}px)`);var s=n(67294),l=n(96189),o=n(58437),u=n(76488),c=n(97836),f=n(6484),d=({containerRef:e,id:t,setLoading:n})=>{let{processes:{[t]:i}={}}=(0,o.z)(),r=(0,l.Z)(),{windowStates:{[t]:d}}=(0,u.k)(),{size:h}=d||{},{libs:m}=i||{},{sizes:{titleBar:w}}=(0,a.Fg)(),p=(0,s.useCallback)(()=>e.current?.querySelector("canvas"),[e]);(0,s.useEffect)(()=>{h&&(window.CCModule.setCanvasSize?.(f.Vy(h.width),f.Vy(h.height)-w.height),window.CCModule.OnResize?.())},[h,w.height]),(0,s.useEffect)(()=>{window.CCModule||setTimeout(()=>{let e=p();window.CCModule={arguments:["Singleplayer"],canvas:e,postRun:[()=>{n(!1),r(window.FS,"ClassiCube")},()=>{let{width:t,height:n}=e.getBoundingClientRect()||{};e.width=t,e.height=n}],print:console.info,setStatus:console.info},(0,f.mb)(m)},c.jx.WINDOW)},[p,m,r,n])},h=n(7443),m=({id:e})=>(0,i.jsx)(h.Z,{StyledComponent:r,id:e,useHook:d,children:(0,i.jsx)("canvas",{onContextMenu:f.nK})})},7443:function(e,t,n){var i=n(85893),a=n(67294),r=n(33333),s=n(45279),l=n(58437);t.Z=(0,a.memo)(({id:e,useHook:t,StyledComponent:n,children:o})=>{let{processes:{[e]:{url:u=""}={}}}=(0,l.z)(),c=(0,a.useRef)(null),[f,d]=(0,a.useState)(!0),h=(0,a.useMemo)(()=>({contain:"strict",visibility:f?"hidden":"visible"}),[f]);return t({containerRef:c,id:e,loading:f,setLoading:d,url:u}),(0,i.jsxs)(i.Fragment,{children:[f&&(0,i.jsx)(r.default,{}),(0,i.jsx)(n,{ref:c,style:h,...(0,s.Z)({id:e}),children:o})]})})},33333:function(e,t,n){n.r(t);let i=n(10508).ZP.div(['cursor:wait;height:100%;width:100%;&::before{color:#fff;content:"Working on it...";display:flex;font-size:12px;justify-content:center;mix-blend-mode:difference;padding-top:18px;}']);t.default=i},96189:function(e,t,n){var i=n(67294),a=n(20063);t.Z=()=>{let{mountEmscriptenFs:e,unMapFs:t,updateFolder:n}=(0,a.o)(),r=(0,i.useRef)();return(0,i.useEffect)(()=>()=>{if(r.current){let e=r.current;r.current="",t(e,!0).then(()=>n("/",void 0,e)).catch(()=>{})}},[t,n]),(0,i.useCallback)(async(t,i)=>{if(!t)return;let a="";try{a=await e(t,i)}catch{}a&&(n("/",a),r.current=a)},[e,n])}},45279:function(e,t,n){var i=n(1864),a=n(67294),r=n(59746),s=n(23736),l=n(89670),o=n(20063),u=n(58437),c=n(76488),f=n(97836),d=n(6484);t.Z=({callback:e,directory:t=f.Ll,id:n,onDragLeave:h,onDragOver:m,updatePositions:w})=>{let{url:p}=(0,u.z)(),{iconPositions:g,sortOrders:v,setIconPositions:C}=(0,c.k)(),{exists:y,mkdirRecursive:b,updateFolder:x,writeFile:k}=(0,o.o)(),S=(0,a.useCallback)(async(e,t,a)=>{if(n){if(t){let r=(0,i.join)(f.Ll,e);if(await b(f.Ll),await k(r,t,!0))return a===l.v.UPDATE_URL&&p(n,r),await x(f.Ll,e),(0,i.basename)(r)}else a===l.v.UPDATE_URL&&p(n,e)}return""},[n,b,x,p,k]),{openTransferDialog:Z}=(0,r.Z)();return{onDragLeave:h,onDragOver:e=>{m?.(e),(0,d.nK)(e)},onDrop:a=>{if(!f.my.has((0,d.RT)(t))){if(w&&a.target instanceof HTMLElement){let{files:e,text:n}=(0,s.p4)(a);if(0===e.length&&""===n)return;let r={x:a.clientX,y:a.clientY},l=[];if(n){try{l=JSON.parse(n)}catch{}if(!Array.isArray(l))return;let[e]=l;if(!e||e.startsWith(t)&&(0,i.basename)(e)===(0,i.relative)(t,e))return;l=l.map(e=>(0,i.basename)(e))}else e instanceof FileList?l=[...e].map(e=>e.name):l=[...e].map(e=>e.getAsFile()?.name||"").filter(Boolean);l=l.map(e=>{if(!g[`${t}/${e}`])return e;let n=0,a="";do n+=1,a=`${t}/${(0,i.basename)(e,(0,i.extname)(e))} (${n})${(0,i.extname)(e)}`;while(g[a]);return(0,i.basename)(a)}),(0,d.vi)(t,a.target,g,v,r,l,C,y)}(0,s.WG)(a,e||S,t,Z,!!n)}}}}}}]);
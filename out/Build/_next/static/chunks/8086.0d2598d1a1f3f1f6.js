"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8086],
    {
        37725: function (e, r, o) {
            let t = o(10508).ZP.button(
                [
                    "background-color:rgb(225,225,225);border:1px solid rgb(173,173,173);color:#000;display:grid;font-family:",
                    ";font-size:12px;height:23px;line-height:",
                    "px;transition:background-color 0.25s ease;width:73px;&:focus,&.focus{border:2px solid rgb(0,120,215);line-height:",
                    "px;}&:hover{background-color:rgb(229,241,251);border:1px solid rgb(0,120,215);line-height:",
                    "px;}&:active{background-color:rgb(204,228,247);border:1px solid rgb(0,84,153);line-height:",
                    "px;transition:none;}&:disabled{background-color:rgb(204,204,204);border:1px solid rgb(191,191,191);color:#808080;line-height:",
                    "px;}",
                ],
                ({ theme: e }) => e.formats.systemFont,
                21,
                19,
                21,
                21,
                21
            );
            r.Z = t;
        },
        18086: function (e, r, o) {
            o.r(r),
                o.d(r, {
                    default: function () {
                        return f;
                    },
                });
            var t = o(85893),
                n = o(1864),
                i = o(67294),
                s = o(87180),
                a = o(37725),
                l = o(10508);
            let d = (0, l.iv)(
                ["animation:gradient 5s ease-in-out alternate infinite;background:", ';background-size:300% 300%;content:"";inset:0;position:absolute;'],
                ({ theme: e }) => `linear-gradient(-45deg, #fff, ${e.colors.progressBarRgb}, #fff)`
            ),
                c = l.ZP.div(
                    [
                        "h1,div{align-items:baseline;display:flex;flex-direction:column;height:calc(100% - 40px - 41px - 2px);justify-content:space-around;padding:0 22px;progress{border:1px solid rgb(188,188,188);height:15px;overflow:hidden;position:relative;width:100%;&::-webkit-progress-bar{background:rgb(230,230,230);}&::-webkit-progress-value{background:",
                        ";}&::-moz-progress-bar{background:",
                        ";}&:indeterminate{&::-moz-progress-bar{",
                        "}&::after{",
                        "}}@keyframes gradient{0%{background-position:0% 50%;}50%{background-position:100% 50%;}100%{background-position:0% 50%;}}}}div{margin-top:-3px;}h1{background:linear-gradient( to right,rgb(220,229,244),rgb(155,192,227),rgb(0,43,85) );display:flex;font-size:15px;font-weight:400;height:40px;place-items:flex-start;white-space:nowrap;width:100%;}h2{font-size:12px;font-weight:400;}nav{background-color:rgb(240,240,240);border-top:1px solid rgb(223,223,223);bottom:0;box-sizing:content-box;display:flex;height:41px;padding-bottom:1px;place-items:center;position:absolute;width:100%;",
                        "{padding-bottom:1px;position:absolute;right:22px;}}",
                    ],
                    ({ theme: e }) => e.colors.progressBarRgb,
                    ({ theme: e }) => e.colors.progressBarRgb,
                    d,
                    d,
                    a.Z
                );
            var g = o(58437),
                p = o(97836),
                b = o(6484);
            let u = (e) => Array.isArray(e?.[0]);
            var f = ({ id: e }) => {
                let { argument: r, closeWithTransition: o, processes: { [e]: l } = {}, title: d } = (0, g.z)(),
                    { closing: f, fileReaders: h, url: x } = l || {},
                    [m, k] = (0, i.useState)(),
                    [v = "", { name: w = "" } = {}] = m || [],
                    [E, y] = (0, i.useState)(0),
                    C = (0, i.useRef)(),
                    I = (0, i.useMemo)(() => {
                        if (f || !l) return C.current;
                        let e = "Copying",
                            { operation: r } = h?.[0] || {};
                        return r ? (e = r) : x && !h && (e = "Extracting"), (C.current = e), e;
                    }, [f, h, l, x]),
                    z = (0, i.useRef)(!1),
                    j = (0, i.useCallback)(() => {
                        (z.current = !1), o(e);
                    }, [o, e]),
                    N = (0, i.useCallback)(
                        ([e, ...r]) => {
                            let o = 0 === r.length;
                            e.read().then(() => {
                                if ((y((e) => e + 1), o)) e.done?.(), j();
                                else {
                                    let [{ directory: e, name: o }] = r;
                                    k([e, { name: o }]);
                                }
                            }),
                                o || N(r);
                        },
                        [j]
                    ),
                    Z = (0, i.useCallback)(
                        ([[e, r, o], ...t]) => {
                            let n = 0;
                            k([r, e]),
                                o.addEventListener(
                                    "progress",
                                    ({ loaded: e = 0 }) => {
                                        let r = e - n;
                                        y((e) => e + r), (n = e);
                                    },
                                    { passive: !0 }
                                ),
                                o.addEventListener(
                                    "loadend",
                                    () => {
                                        t.length > 0 ? Z(t) : j();
                                    },
                                    p.K7
                                ),
                                o.readAsArrayBuffer(e);
                        },
                        [j]
                    ),
                    $ = (0, i.useMemo)(() => (u(h) ? h.reduce((e, [{ size: r = 0 }]) => e + r, 0) : h?.length || Number.POSITIVE_INFINITY), [h]),
                    _ = (0, s.Z)(e);
                return (
                    (0, i.useEffect)(() => {
                        if (!z.current) {
                            if (h) {
                                if (h?.length > 0) {
                                    if (((z.current = !0), u(h))) Z(h);
                                    else {
                                        let [{ directory: e, name: r }] = h;
                                        k([e, { name: r }]), N(h);
                                    }
                                } else o(e);
                            } else x && k([(0, n.dirname)(x), { name: (0, n.basename)(x) }]);
                        }
                    }, [o, h, e, Z, N, x]),
                    (0, i.useEffect)(() => {
                        if (z.current) {
                            let o = Math.floor((E / $) * 100);
                            r(e, "progress", o), d(e, `${o}% complete`);
                        }
                    }, [r, e, E, d, $]),
                    (0, i.useEffect)(() => d(e, `${I}...`), [I, e, d]),
                    (0, i.useEffect)(
                        () => () => {
                            f && z.current && (u(h) ? h.forEach(([, , e]) => e.abort()) : (h?.forEach((e) => e.abort()), h?.[0]?.done?.()));
                        },
                        [f, h]
                    ),
                    (0, t.jsxs)(c, {
                        onContextMenu: b.nK,
                        ..._,
                        children: [
                            (0, t.jsx)("h1", { children: w ? `${I} '${w.length >= 37 ? `${w.slice(0, 37)}...` : w}'` : "" }),
                            (0, t.jsxs)("div", { children: [(0, t.jsx)("h2", { children: v ? `To '${v}'` : "" }), (0, t.jsx)("progress", { max: $, value: $ === Number.POSITIVE_INFINITY ? void 0 : E })] }),
                            (0, t.jsx)("nav", { children: (0, t.jsx)(a.Z, { onClick: () => o(e), children: "Cancel" }) }),
                        ],
                    })
                );
            };
        },
        87180: function (e, r, o) {
            var t = o(67294),
                n = o(58437),
                i = o(97836);
            r.Z = (e) => {
                let { closeWithTransition: r } = (0, n.z)();
                return { onKeyDownCapture: (0, t.useCallback)(({ key: o }) => "Escape" === o && r(e), [r, e]), ...i.LL };
            };
        },
    },
]);


// "use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8086],{37725:function(e,r,o){let t=o(10508).ZP.button(["background-color:rgb(225,225,225);border:1px solid rgb(173,173,173);color:#000;display:grid;font-family:",";font-size:12px;height:23px;line-height:","px;transition:background-color 0.25s ease;width:73px;&:focus,&.focus{border:2px solid rgb(0,120,215);line-height:","px;}&:hover{background-color:rgb(229,241,251);border:1px solid rgb(0,120,215);line-height:","px;}&:active{background-color:rgb(204,228,247);border:1px solid rgb(0,84,153);line-height:","px;transition:none;}&:disabled{background-color:rgb(204,204,204);border:1px solid rgb(191,191,191);color:#808080;line-height:","px;}"],({theme:e})=>e.formats.systemFont,21,19,21,21,21);r.Z=t},18086:function(e,r,o){o.r(r),o.d(r,{default:function(){return f}});var t=o(85893),n=o(1864),i=o(67294),s=o(87180),a=o(37725),l=o(10508);let d=(0,l.iv)(["animation:gradient 5s ease-in-out alternate infinite;background:",';background-size:300% 300%;content:"";inset:0;position:absolute;'],({theme:e})=>`linear-gradient(-45deg, #fff, ${e.colors.progressBarRgb}, #fff)`),c=l.ZP.div(["h1,div{align-items:baseline;display:flex;flex-direction:column;height:calc(100% - 40px - 41px - 2px);justify-content:space-around;padding:0 22px;progress{border:1px solid rgb(188,188,188);height:15px;overflow:hidden;position:relative;width:100%;&::-webkit-progress-bar{background:rgb(230,230,230);}&::-webkit-progress-value{background:",";}&::-moz-progress-bar{background:",";}&:indeterminate{&::-moz-progress-bar{","}&::after{","}}@keyframes gradient{0%{background-position:0% 50%;}50%{background-position:100% 50%;}100%{background-position:0% 50%;}}}}div{margin-top:-3px;}h1{background:linear-gradient( to right,rgb(220,229,244),rgb(155,192,227),rgb(0,43,85) );display:flex;font-size:15px;font-weight:400;height:40px;place-items:flex-start;white-space:nowrap;width:100%;}h2{font-size:12px;font-weight:400;}nav{background-color:rgb(240,240,240);border-top:1px solid rgb(223,223,223);bottom:0;box-sizing:content-box;display:flex;height:41px;padding-bottom:1px;place-items:center;position:absolute;width:100%;","{padding-bottom:1px;position:absolute;right:22px;}}"],({theme:e})=>e.colors.progressBarRgb,({theme:e})=>e.colors.progressBarRgb,d,d,a.Z);var g=o(58437),p=o(97836),b=o(6484);let u=e=>Array.isArray(e?.[0]);var f=({id:e})=>{let{argument:r,closeWithTransition:o,processes:{[e]:l}={},title:d}=(0,g.z)(),{closing:f,fileReaders:h,url:x}=l||{},[m,k]=(0,i.useState)(),[v="",{name:w=""}={}]=m||[],[E,y]=(0,i.useState)(0),C=(0,i.useRef)(),I=(0,i.useMemo)(()=>{if(f||!l)return C.current;let e="Copying",{operation:r}=h?.[0]||{};return r?e=r:x&&!h&&(e="Extracting"),C.current=e,e},[f,h,l,x]),z=(0,i.useRef)(!1),j=(0,i.useCallback)(()=>{z.current=!1,o(e)},[o,e]),N=(0,i.useCallback)(([e,...r])=>{let o=0===r.length;e.read().then(()=>{if(y(e=>e+1),o)e.done?.(),j();else{let[{directory:e,name:o}]=r;k([e,{name:o}])}}),o||N(r)},[j]),Z=(0,i.useCallback)(([[e,r,o],...t])=>{let n=0;k([r,e]),o.addEventListener("progress",({loaded:e=0})=>{let r=e-n;y(e=>e+r),n=e},{passive:!0}),o.addEventListener("loadend",()=>{t.length>0?Z(t):j()},p.K7),o.readAsArrayBuffer(e)},[j]),$=(0,i.useMemo)(()=>u(h)?h.reduce((e,[{size:r=0}])=>e+r,0):h?.length||Number.POSITIVE_INFINITY,[h]),_=(0,s.Z)(e);return(0,i.useEffect)(()=>{if(!z.current){if(h){if(h?.length>0){if(z.current=!0,u(h))Z(h);else{let[{directory:e,name:r}]=h;k([e,{name:r}]),N(h)}}else o(e)}else x&&k([(0,n.dirname)(x),{name:(0,n.basename)(x)}])}},[o,h,e,Z,N,x]),(0,i.useEffect)(()=>{if(z.current){let o=Math.floor(E/$*100);r(e,"progress",o),d(e,`${o}% complete`)}},[r,e,E,d,$]),(0,i.useEffect)(()=>d(e,`${I}...`),[I,e,d]),(0,i.useEffect)(()=>()=>{f&&z.current&&(u(h)?h.forEach(([,,e])=>e.abort()):(h?.forEach(e=>e.abort()),h?.[0]?.done?.()))},[f,h]),(0,t.jsxs)(c,{onContextMenu:b.nK,..._,children:[(0,t.jsx)("h1",{children:w?`${I} '${w.length>=37?`${w.slice(0,37)}...`:w}'`:""}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h2",{children:v?`To '${v}'`:""}),(0,t.jsx)("progress",{max:$,value:$===Number.POSITIVE_INFINITY?void 0:E})]}),(0,t.jsx)("nav",{children:(0,t.jsx)(a.Z,{onClick:()=>o(e),children:"Cancel"})})]})}},87180:function(e,r,o){var t=o(67294),n=o(58437),i=o(97836);r.Z=e=>{let{closeWithTransition:r}=(0,n.z)();return{onKeyDownCapture:(0,t.useCallback)(({key:o})=>"Escape"===o&&r(e),[r,e]),...i.LL}}}}]);
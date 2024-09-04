"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9237, 4268],
    {
        69237: function (e, t, n) {
            n.r(t),
                n.d(t, {
                    default: function () {
                        return c;
                    },
                });
            var r = n(85893),
                a = n(67294);
            let i = n(10508).ZP.div(
                [
                    'display:flex;flex-direction:column;gap:10px;place-content:center;place-items:center;&::after{align-items:center;background-color:rgba(0,0,0,30%);color:#fff;content:"No WebGPU Support";display:',
                    ";font-size:26px;font-weight:bold;inset:0;justify-content:center;position:absolute;text-shadow:2px 2px 4px #000;}canvas{aspect-ratio:1 / 1;background-color:#fff;border:2px solid rgb(52,0,104);border-radius:10px;box-shadow:0 0 4px #888;max-height:512px;max-width:512px;width:calc(100% - 32px);}nav{display:flex;gap:5px;max-width:512px;place-content:space-between;width:calc(100% - 32px);> div{display:flex;flex-direction:column;font-size:14px;gap:3px;width:512px;input{border:2px solid rgb(52,0,104);border-radius:5px;font-size:12px;height:22px;padding:5px;}div{background-color:#fff;border:2px solid rgb(52,0,104);border-radius:5px;height:47px;line-height:43px;max-width:422px;overflow:hidden;padding:0 5px;text-align:center;text-overflow:ellipsis;white-space:nowrap;}}button{background-color:rgb(52,0,104);border:2px solid rgb(52,0,104);border-radius:5px;color:#fff;font-size:14px;font-weight:bold;padding:5px 10px;&:active{background-color:#fff;color:rgb(52,0,104);}}}",
                ],
                ({ $hasWebGPU: e }) => (e ? "none" : "flex")
            );
            var o = n(4268),
                s = n(48611),
                l = n(72446);
            let u = () => new Worker(n.tu(new URL(n.p + n.u(6688), n.b)), { name: "Stable Diffusion" });
            var c = () => {
                let e = (0, a.useRef)(null),
                    t = (0, a.useRef)(null),
                    n = (0, a.useRef)(null),
                    c = (0, a.useRef)(!1),
                    d = (0, a.useMemo)(() => "OffscreenCanvas" in window, []),
                    p = (0, l.Z)(u),
                    f = (0, a.useRef)(!1),
                    [b, g] = (0, a.useState)(""),
                    x = (0, a.useCallback)((e, t) => {
                        g(e && t ? `${e} ${t}` : "");
                    }, []),
                    v = (0, a.useCallback)(async () => {
                        if (e.current && t.current && n.current) {
                            let r = { prompts: [[t.current.value, n.current.value]] };
                            if (d && p.current) {
                                if (f.current) p.current.postMessage({ config: r });
                                else {
                                    let t = e.current.transferControlToOffscreen();
                                    (f.current = !0),
                                        p.current.postMessage({ canvas: t, config: r }, [t]),
                                        p.current.addEventListener("message", ({ data: e }) => {
                                            x(e.type, e.message);
                                        });
                                }
                            } else (window.tvmjsGlobalEnv.logger = x), await (0, o.runStableDiffusion)(r, e.current), x("", "");
                            c.current = !0;
                        }
                    }, [p, x, d]),
                    h = (0, s.Z)();
                return (0, r.jsxs)(i, {
                    $hasWebGPU: h,
                    children: [
                        (0, r.jsx)("canvas", { ref: e, height: 512, width: 512 }),
                        (0, r.jsxs)("nav", {
                            children: [
                                (0, r.jsxs)("div", {
                                    children: [
                                        b && (0, r.jsx)("div", { children: b }),
                                        (0, r.jsx)("input", { ref: t, defaultValue: "A photo of an astronaut riding a elephant on jupiter", placeholder: "Input Prompt", style: { display: b ? "none" : "block" }, type: "text" }),
                                        (0, r.jsx)("input", { ref: n, placeholder: "Negative Prompt", style: { display: b ? "none" : "block" }, type: "text" }),
                                    ],
                                }),
                                (0, r.jsx)("button", { disabled: !!b, onClick: v, type: "button", children: "Generate" }),
                            ],
                        }),
                    ],
                });
            };
        },
        4268: function (e, t, n) {
            n.r(t),
                n.d(t, {
                    libs: function () {
                        return a;
                    },
                    runStableDiffusion: function () {
                        return i;
                    },
                });
            var r = n(6484);
            let a = ["/System/tvm/tvmjs_runtime.wasi.js", "/System/tvm/tvmjs.bundle.js", "/Program Files/StableDiffusion/tokenizers-wasm/tokenizers_wasm.js", "/Program Files/StableDiffusion/stable_diffusion.js"],
                i = async (e, t, n = !1) => {
                    n || ((window.tvmjsGlobalEnv = window.tvmjsGlobalEnv || {}), await (0, r.mb)(a)),
                        (globalThis.tvmjsGlobalEnv.getTokenizer = async () => (
                            globalThis.tvmjsGlobalEnv.initialized || (await globalThis.Tokenizer.init()),
                            (globalThis.tvmjsGlobalEnv.initialized = !0),
                            new globalThis.Tokenizer.TokenizerWasm(await (await fetch("/Program Files/StableDiffusion/tokenizers-wasm/tokenizer.json")).text())
                        )),
                        (globalThis.tvmjsGlobalEnv.canvas = globalThis.tvmjsGlobalEnv.canvas || t);
                    let { prompts: i } = e;
                    (globalThis.tvmjsGlobalEnv.prompts = i?.length ? i : [["A photo of an astronaut riding a horse on mars", ""]]), await globalThis.tvmjsGlobalEnv.asyncOnGenerate();
                };
            t.default = (e, t = {}) => {
                if (!e) return;
                let n = document.createElement("canvas");
                (n.height = window.innerHeight), (n.width = window.innerWidth), e.append(n), i(t, n);
            };
        },
        48611: function (e, t, n) {
            n.d(t, {
                Z: function () {
                    return i;
                },
            });
            var r = n(67294);
            let a = async () => {
                let e;
                if ("undefined" == typeof navigator || !("gpu" in navigator)) return !1;
                try {
                    e = await navigator.gpu.requestAdapter();
                } catch {
                    return !1;
                }
                return !!e && !(1073741824 > (e.limits.maxBufferSize ?? 0) || 1073741824 > (e.limits.maxStorageBufferBindingSize ?? 0) || 32768 > (e.limits.maxComputeWorkgroupStorageSize ?? 0));
            },
                i = () => {
                    let [e, t] = (0, r.useState)(),
                        n = (0, r.useCallback)(async () => t(await a()), []);
                    return (
                        (0, r.useEffect)(() => {
                            n();
                        }, [n]),
                        e
                    );
                };
        },
        72446: function (e, t, n) {
            var r = n(67294);
            t.Z = (e, t, n) => {
                let a = (0, r.useRef)();
                return (
                    (0, r.useEffect)(
                        () => (
                            e && !a.current && ((a.current = e(n)), t && a.current.addEventListener("message", t, { passive: !0 }), a.current.postMessage("init")),
                            () => {
                                a.current?.terminate(), (a.current = void 0);
                            }
                        ),
                        [t, n, e]
                    ),
                    a
                );
            };
        },
    },
]);



// "use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9237,4268],{69237:function(e,t,n){n.r(t),n.d(t,{default:function(){return c}});var r=n(85893),a=n(67294);let i=n(10508).ZP.div(['display:flex;flex-direction:column;gap:10px;place-content:center;place-items:center;&::after{align-items:center;background-color:rgba(0,0,0,30%);color:#fff;content:"No WebGPU Support";display:',";font-size:26px;font-weight:bold;inset:0;justify-content:center;position:absolute;text-shadow:2px 2px 4px #000;}canvas{aspect-ratio:1 / 1;background-color:#fff;border:2px solid rgb(52,0,104);border-radius:10px;box-shadow:0 0 4px #888;max-height:512px;max-width:512px;width:calc(100% - 32px);}nav{display:flex;gap:5px;max-width:512px;place-content:space-between;width:calc(100% - 32px);> div{display:flex;flex-direction:column;font-size:14px;gap:3px;width:512px;input{border:2px solid rgb(52,0,104);border-radius:5px;font-size:12px;height:22px;padding:5px;}div{background-color:#fff;border:2px solid rgb(52,0,104);border-radius:5px;height:47px;line-height:43px;max-width:422px;overflow:hidden;padding:0 5px;text-align:center;text-overflow:ellipsis;white-space:nowrap;}}button{background-color:rgb(52,0,104);border:2px solid rgb(52,0,104);border-radius:5px;color:#fff;font-size:14px;font-weight:bold;padding:5px 10px;&:active{background-color:#fff;color:rgb(52,0,104);}}}"],({$hasWebGPU:e})=>e?"none":"flex");var o=n(4268),s=n(48611),l=n(72446);let u=()=>new Worker(n.tu(new URL(n.p+n.u(6688),n.b)),{name:"Stable Diffusion"});var c=()=>{let e=(0,a.useRef)(null),t=(0,a.useRef)(null),n=(0,a.useRef)(null),c=(0,a.useRef)(!1),d=(0,a.useMemo)(()=>"OffscreenCanvas"in window,[]),p=(0,l.Z)(u),f=(0,a.useRef)(!1),[b,g]=(0,a.useState)(""),x=(0,a.useCallback)((e,t)=>{g(e&&t?`${e} ${t}`:"")},[]),v=(0,a.useCallback)(async()=>{if(e.current&&t.current&&n.current){let r={prompts:[[t.current.value,n.current.value]]};if(d&&p.current){if(f.current)p.current.postMessage({config:r});else{let t=e.current.transferControlToOffscreen();f.current=!0,p.current.postMessage({canvas:t,config:r},[t]),p.current.addEventListener("message",({data:e})=>{x(e.type,e.message)})}}else window.tvmjsGlobalEnv.logger=x,await (0,o.runStableDiffusion)(r,e.current),x("","");c.current=!0}},[p,x,d]),h=(0,s.Z)();return(0,r.jsxs)(i,{$hasWebGPU:h,children:[(0,r.jsx)("canvas",{ref:e,height:512,width:512}),(0,r.jsxs)("nav",{children:[(0,r.jsxs)("div",{children:[b&&(0,r.jsx)("div",{children:b}),(0,r.jsx)("input",{ref:t,defaultValue:"A photo of an astronaut riding a elephant on jupiter",placeholder:"Input Prompt",style:{display:b?"none":"block"},type:"text"}),(0,r.jsx)("input",{ref:n,placeholder:"Negative Prompt",style:{display:b?"none":"block"},type:"text"})]}),(0,r.jsx)("button",{disabled:!!b,onClick:v,type:"button",children:"Generate"})]})]})}},4268:function(e,t,n){n.r(t),n.d(t,{libs:function(){return a},runStableDiffusion:function(){return i}});var r=n(6484);let a=["/System/tvm/tvmjs_runtime.wasi.js","/System/tvm/tvmjs.bundle.js","/Program Files/StableDiffusion/tokenizers-wasm/tokenizers_wasm.js","/Program Files/StableDiffusion/stable_diffusion.js"],i=async(e,t,n=!1)=>{n||(window.tvmjsGlobalEnv=window.tvmjsGlobalEnv||{},await (0,r.mb)(a)),globalThis.tvmjsGlobalEnv.getTokenizer=async()=>(globalThis.tvmjsGlobalEnv.initialized||await globalThis.Tokenizer.init(),globalThis.tvmjsGlobalEnv.initialized=!0,new globalThis.Tokenizer.TokenizerWasm(await (await fetch("/Program Files/StableDiffusion/tokenizers-wasm/tokenizer.json")).text())),globalThis.tvmjsGlobalEnv.canvas=globalThis.tvmjsGlobalEnv.canvas||t;let{prompts:i}=e;globalThis.tvmjsGlobalEnv.prompts=i?.length?i:[["A photo of an astronaut riding a horse on mars",""]],await globalThis.tvmjsGlobalEnv.asyncOnGenerate()};t.default=(e,t={})=>{if(!e)return;let n=document.createElement("canvas");n.height=window.innerHeight,n.width=window.innerWidth,e.append(n),i(t,n)}},48611:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(67294);let a=async()=>{let e;if("undefined"==typeof navigator||!("gpu"in navigator))return!1;try{e=await navigator.gpu.requestAdapter()}catch{return!1}return!!e&&!(1073741824>(e.limits.maxBufferSize??0)||1073741824>(e.limits.maxStorageBufferBindingSize??0)||32768>(e.limits.maxComputeWorkgroupStorageSize??0))},i=()=>{let[e,t]=(0,r.useState)(),n=(0,r.useCallback)(async()=>t(await a()),[]);return(0,r.useEffect)(()=>{n()},[n]),e}},72446:function(e,t,n){var r=n(67294);t.Z=(e,t,n)=>{let a=(0,r.useRef)();return(0,r.useEffect)(()=>(e&&!a.current&&(a.current=e(n),t&&a.current.addEventListener("message",t,{passive:!0}),a.current.postMessage("init")),()=>{a.current?.terminate(),a.current=void 0}),[t,n,e]),a}}}]);
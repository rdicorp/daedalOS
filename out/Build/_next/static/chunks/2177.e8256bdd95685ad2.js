"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2177],
    {
        8893: function (e, t, n) {
            n.d(t, {
                Ri: function () {
                    return i;
                },
                nC: function () {
                    return a;
                },
                yd: function () {
                    return u;
                },
            });
            var i = {
                JS_EVAL_TYPE_GLOBAL: 0,
                JS_EVAL_TYPE_MODULE: 1,
                JS_EVAL_TYPE_DIRECT: 2,
                JS_EVAL_TYPE_INDIRECT: 3,
                JS_EVAL_TYPE_MASK: 3,
                JS_EVAL_FLAG_STRICT: 8,
                JS_EVAL_FLAG_STRIP: 16,
                JS_EVAL_FLAG_COMPILE_ONLY: 32,
                JS_EVAL_FLAG_BACKTRACE_BARRIER: 64,
            },
                u = {
                    BaseObjects: 1,
                    Date: 2,
                    Eval: 4,
                    StringNormalize: 8,
                    RegExp: 16,
                    RegExpCompiler: 32,
                    JSON: 64,
                    Proxy: 128,
                    MapSet: 256,
                    TypedArrays: 512,
                    Promise: 1024,
                    BigInt: 2048,
                    BigFloat: 4096,
                    BigDecimal: 8192,
                    OperatorOverloading: 16384,
                    BignumExt: 32768,
                },
                a = { Pending: 0, Fulfilled: 1, Rejected: 2 };
        },
        62177: function (e, t, n) {
            async function i(e) {
                let t = u(await e),
                    [i, a, { QuickJSWASMModule: r }] = await Promise.all([
                        t.importModuleLoader().then(u),
                        t.importFFI(),
                        Promise.all([n.e(5769, "high"), n.e(746, "high")])
                            .then(n.bind(n, 70746))
                            .then(u),
                    ]),
                    _ = await i();
                _.type = "sync";
                let l = new a(_);
                return new r(_, l);
            }
            function u(e) {
                return e && "default" in e && e.default ? (e.default && "default" in e.default && e.default.default ? e.default.default : e.default) : e;
            }
            n.d(t, {
                getQuickJS: function () {
                    return l;
                },
            }),
                n(8893);
            var a,
                r = {
                    type: "sync",
                    importFFI: () =>
                        n
                            .e(3348, "high")
                            .then(n.bind(n, 53348))
                            .then((e) => e.QuickJSFFI),
                    importModuleLoader: () =>
                        n
                            .e(7006, "high")
                            .then(n.bind(n, 27006))
                            .then((e) => e.default),
                };
            async function _(e = r) {
                return i(e);
            }
            async function l() {
                return a ?? (a = _().then((e) => e)), await a;
            }
        },
    },
]);



// "use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2177],{8893:function(e,t,n){n.d(t,{Ri:function(){return i},nC:function(){return a},yd:function(){return u}});var i={JS_EVAL_TYPE_GLOBAL:0,JS_EVAL_TYPE_MODULE:1,JS_EVAL_TYPE_DIRECT:2,JS_EVAL_TYPE_INDIRECT:3,JS_EVAL_TYPE_MASK:3,JS_EVAL_FLAG_STRICT:8,JS_EVAL_FLAG_STRIP:16,JS_EVAL_FLAG_COMPILE_ONLY:32,JS_EVAL_FLAG_BACKTRACE_BARRIER:64},u={BaseObjects:1,Date:2,Eval:4,StringNormalize:8,RegExp:16,RegExpCompiler:32,JSON:64,Proxy:128,MapSet:256,TypedArrays:512,Promise:1024,BigInt:2048,BigFloat:4096,BigDecimal:8192,OperatorOverloading:16384,BignumExt:32768},a={Pending:0,Fulfilled:1,Rejected:2}},62177:function(e,t,n){async function i(e){let t=u(await e),[i,a,{QuickJSWASMModule:r}]=await Promise.all([t.importModuleLoader().then(u),t.importFFI(),Promise.all([n.e(5769,"high"),n.e(746,"high")]).then(n.bind(n,70746)).then(u)]),_=await i();_.type="sync";let l=new a(_);return new r(_,l)}function u(e){return e&&"default"in e&&e.default?e.default&&"default"in e.default&&e.default.default?e.default.default:e.default:e}n.d(t,{getQuickJS:function(){return l}}),n(8893);var a,r={type:"sync",importFFI:()=>n.e(3348,"high").then(n.bind(n,53348)).then(e=>e.QuickJSFFI),importModuleLoader:()=>n.e(7006,"high").then(n.bind(n,27006)).then(e=>e.default)};async function _(e=r){return i(e)}async function l(){return a??(a=_().then(e=>e)),await a}}}]);
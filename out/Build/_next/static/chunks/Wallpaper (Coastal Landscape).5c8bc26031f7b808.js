!(function () {
    var e,
        t,
        n,
        r,
        o,
        i,
        c,
        u,
        f = {
            6575: function (e, t, n) {
                "use strict";
                n(6484);
                let r = ["/System/ShaderToy/CoastalLandscape/piLibs.js", "/System/ShaderToy/CoastalLandscape/effect.js", "/System/ShaderToy/CoastalLandscape/init.js"];
                globalThis.addEventListener(
                    "message",
                    ({ data: e }) => {
                        if ("undefined" != typeof WebGLRenderingContext) {
                            if ("init" === e) globalThis.importScripts(...r);
                            else if (e instanceof DOMRect) (globalThis.demoCanvasRect = e), globalThis.updateLandscapeSize();
                            else {
                                let { canvas: t, devicePixelRatio: n } = e;
                                globalThis.devicePixelRatio = n;
                                try {
                                    globalThis.effectInit(t);
                                } catch (e) {
                                    globalThis.postMessage({ message: e?.message, type: "[error]" });
                                }
                            }
                        }
                    },
                    { passive: !0 }
                );
            },
        },
        a = {};
    function s(e) {
        var t = a[e];
        if (void 0 !== t) return t.exports;
        var n = (a[e] = { exports: {} }),
            r = !0;
        try {
            f[e](n, n.exports, s), (r = !1);
        } finally {
            r && delete a[e];
        }
        return n.exports;
    }
    (s.m = f),
        (s.x = function () {
            var e = s.O(void 0, [9774, 8764, 6484], function () {
                return s(6575);
            });
            return s.O(e);
        }),
        (e = []),
        (s.O = function (t, n, r, o) {
            if (n) {
                o = o || 0;
                for (var i = e.length; i > 0 && e[i - 1][2] > o; i--) e[i] = e[i - 1];
                e[i] = [n, r, o];
                return;
            }
            for (var c = 1 / 0, i = 0; i < e.length; i++) {
                for (var n = e[i][0], r = e[i][1], o = e[i][2], u = !0, f = 0; f < n.length; f++)
                    c >= o &&
                        Object.keys(s.O).every(function (e) {
                            return s.O[e](n[f]);
                        })
                        ? n.splice(f--, 1)
                        : ((u = !1), o < c && (c = o));
                if (u) {
                    e.splice(i--, 1);
                    var a = r();
                    void 0 !== a && (t = a);
                }
            }
            return t;
        }),
        (s.n = function (e) {
            var t =
                e && e.__esModule
                    ? function () {
                        return e.default;
                    }
                    : function () {
                        return e;
                    };
            return s.d(t, { a: t }), t;
        }),
        (n = Object.getPrototypeOf
            ? function (e) {
                return Object.getPrototypeOf(e);
            }
            : function (e) {
                return e.__proto__;
            }),
        (s.t = function (e, r) {
            if ((1 & r && (e = this(e)), 8 & r || ("object" == typeof e && e && ((4 & r && e.__esModule) || (16 & r && "function" == typeof e.then))))) return e;
            var o = Object.create(null);
            s.r(o);
            var i = {};
            t = t || [null, n({}), n([]), n(n)];
            for (var c = 2 & r && e; "object" == typeof c && !~t.indexOf(c); c = n(c))
                Object.getOwnPropertyNames(c).forEach(function (t) {
                    i[t] = function () {
                        return e[t];
                    };
                });
            return (
                (i.default = function () {
                    return e;
                }),
                s.d(o, i),
                o
            );
        }),
        (s.d = function (e, t) {
            for (var n in t) s.o(t, n) && !s.o(e, n) && Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        }),
        (s.f = {}),
        (s.e = function (e, t) {
            return Promise.all(
                Object.keys(s.f).reduce(function (n, r) {
                    return s.f[r](e, n, t), n;
                }, [])
            );
        }),
        (s.u = function (e) {
            return 9774 === e
                ? "static/chunks/framework-0e8d27528ba61906.js"
                : "static/chunks/" +
                e +
                "." +
                { 1746: "3496221204efbb6d", 2856: "50d31e48653ca6eb", 3301: "78d33a88d00cad8c", 3545: "43ce7300fb661fca", 6484: "8f7f4d178c849bcc", 8090: "2ca02e936e27bfb7", 8764: "8a312e40ee9b2797", 9762: "2a775218fadae715" }[e] +
                ".js";
        }),
        (s.miniCssF = function (e) { }),
        (s.g = (function () {
            if ("object" == typeof globalThis) return globalThis;
            try {
                return this || Function("return this")();
            } catch (e) {
                if ("object" == typeof window) return window;
            }
        })()),
        (s.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (s.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        (s.tt = function () {
            return (
                void 0 === r &&
                ((r = {
                    createScriptURL: function (e) {
                        return e;
                    },
                }),
                    "undefined" != typeof trustedTypes && trustedTypes.createPolicy && (r = trustedTypes.createPolicy("nextjs#bundler", r))),
                r
            );
        }),
        (s.tu = function (e) {
            return s.tt().createScriptURL(e);
        }),
        (s.p = "./"),
        (o = { 5183: 1 }),
        (s.f.i = function (e, t) {
            o[e] || importScripts(s.tu(s.p + s.u(e)));
        }),
        (c = (i = self.webpackChunk_N_E = self.webpackChunk_N_E || []).push.bind(i)),
        (i.push = function (e) {
            var t = e[0],
                n = e[1],
                r = e[2];
            for (var i in n) s.o(n, i) && (s.m[i] = n[i]);
            for (r && r(s); t.length;) o[t.pop()] = 1;
            c(e);
        }),
        (u = s.x),
        (s.x = function () {
            return Promise.all([9774, 8764, 6484].map(s.e, s)).then(u);
        }),
        (_N_E = s.x());
})();



// !function(){var e,t,n,r,o,i,c,u,f={6575:function(e,t,n){"use strict";n(6484);let r=["/System/ShaderToy/CoastalLandscape/piLibs.js","/System/ShaderToy/CoastalLandscape/effect.js","/System/ShaderToy/CoastalLandscape/init.js"];globalThis.addEventListener("message",({data:e})=>{if("undefined"!=typeof WebGLRenderingContext){if("init"===e)globalThis.importScripts(...r);else if(e instanceof DOMRect)globalThis.demoCanvasRect=e,globalThis.updateLandscapeSize();else{let{canvas:t,devicePixelRatio:n}=e;globalThis.devicePixelRatio=n;try{globalThis.effectInit(t)}catch(e){globalThis.postMessage({message:e?.message,type:"[error]"})}}}},{passive:!0})}},a={};function s(e){var t=a[e];if(void 0!==t)return t.exports;var n=a[e]={exports:{}},r=!0;try{f[e](n,n.exports,s),r=!1}finally{r&&delete a[e]}return n.exports}s.m=f,s.x=function(){var e=s.O(void 0,[9774,8764,6484],function(){return s(6575)});return s.O(e)},e=[],s.O=function(t,n,r,o){if(n){o=o||0;for(var i=e.length;i>0&&e[i-1][2]>o;i--)e[i]=e[i-1];e[i]=[n,r,o];return}for(var c=1/0,i=0;i<e.length;i++){for(var n=e[i][0],r=e[i][1],o=e[i][2],u=!0,f=0;f<n.length;f++)c>=o&&Object.keys(s.O).every(function(e){return s.O[e](n[f])})?n.splice(f--,1):(u=!1,o<c&&(c=o));if(u){e.splice(i--,1);var a=r();void 0!==a&&(t=a)}}return t},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,{a:t}),t},n=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},s.t=function(e,r){if(1&r&&(e=this(e)),8&r||"object"==typeof e&&e&&(4&r&&e.__esModule||16&r&&"function"==typeof e.then))return e;var o=Object.create(null);s.r(o);var i={};t=t||[null,n({}),n([]),n(n)];for(var c=2&r&&e;"object"==typeof c&&!~t.indexOf(c);c=n(c))Object.getOwnPropertyNames(c).forEach(function(t){i[t]=function(){return e[t]}});return i.default=function(){return e},s.d(o,i),o},s.d=function(e,t){for(var n in t)s.o(t,n)&&!s.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},s.f={},s.e=function(e,t){return Promise.all(Object.keys(s.f).reduce(function(n,r){return s.f[r](e,n,t),n},[]))},s.u=function(e){return 9774===e?"static/chunks/framework-0e8d27528ba61906.js":"static/chunks/"+e+"."+({1746:"3496221204efbb6d",2856:"50d31e48653ca6eb",3301:"78d33a88d00cad8c",3545:"43ce7300fb661fca",6484:"8f7f4d178c849bcc",8090:"2ca02e936e27bfb7",8764:"8a312e40ee9b2797",9762:"2a775218fadae715"})[e]+".js"},s.miniCssF=function(e){},s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch(e){if("object"==typeof window)return window}}(),s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.tt=function(){return void 0===r&&(r={createScriptURL:function(e){return e}},"undefined"!=typeof trustedTypes&&trustedTypes.createPolicy&&(r=trustedTypes.createPolicy("nextjs#bundler",r))),r},s.tu=function(e){return s.tt().createScriptURL(e)},s.p="./",o={5183:1},s.f.i=function(e,t){o[e]||importScripts(s.tu(s.p+s.u(e)))},c=(i=self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push.bind(i),i.push=function(e){var t=e[0],n=e[1],r=e[2];for(var i in n)s.o(n,i)&&(s.m[i]=n[i]);for(r&&r(s);t.length;)o[t.pop()]=1;c(e)},u=s.x,s.x=function(){return Promise.all([9774,8764,6484].map(s.e,s)).then(u)},_N_E=s.x()}();
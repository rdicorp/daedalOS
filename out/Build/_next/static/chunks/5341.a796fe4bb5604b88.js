"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5341],
    {
        5341: function (e, n, i) {
            i.d(n, {
                addEntryToZippable: function () {
                    return s;
                },
                addFileToZip: function () {
                    return l;
                },
                createZippable: function () {
                    return c;
                },
                isFileInZip: function () {
                    return h;
                },
                unarchive: function () {
                    return p;
                },
                unzip: function () {
                    return d;
                },
                zipAsync: function () {
                    return o;
                },
            });
            var t = i(1864),
                r = i(6484),
                a = i(97836),
                u = i(48764).Buffer;
            let c = (e, n) => e.split("/").reduceRight((e, n) => ({ [n]: e }), [n, a.BF]),
                s = (e, n) => {
                    let [[i, t]] = Object.entries(n);
                    return (e[i] = i in e ? s(e[i], n[i]) : t), e;
                },
                d = (e) =>
                    new Promise((n, t) => {
                        i.e(3778, "high")
                            .then(i.bind(i, 93778))
                            .then(({ unzip: i }) => i(e, (e, i) => (e ? t(e) : n(i))));
                    }),
                o = (e, n = a.BF) =>
                    new Promise((t, r) => {
                        i.e(3778, "high")
                            .then(i.bind(i, 93778))
                            .then(({ zip: i }) => i(e, n, (e, n) => (e ? r(e) : t(n))));
                    }),
                l = async (e, n, i, t) => u.from(await o(s((e.length > 0 && (await d(e))) || {}, c(i, await t(n))))),
                h = (e, n) =>
                    new Promise((t, r) => {
                        i.e(3778, "high")
                            .then(i.bind(i, 93778))
                            .then(({ unzip: i }) => i(e, (e, i) => (e ? r(e) : t(Object.keys(i).includes(n)))));
                    }),
                p = async (e, n) => {
                    if ((window.SevenZip || (await (0, r.mb)(["System/7zip/7zz.es6.js"])), !window.SevenZip)) return {};
                    let i = await window.SevenZip(),
                        a = (0, t.basename)(e),
                        c = (0, t.join)("/", (0, t.basename)(e, (0, t.extname)(e)));
                    i.FS.mkdir(c), i.FS.chdir(c);
                    let s = i.FS.open(a, "w+");
                    i.FS.write(s, n, 0, n.length), i.FS.close(s), i.callMain(["-y", "x", a]);
                    let d = i.FS.readdir(c),
                        o = (e) => (n, r) => {
                            if ([".", "..", a].includes(r)) return n;
                            let s = (0, t.join)(e, r),
                                d = s.replace(c, "");
                            try {
                                i.FS.chmod(s, 511);
                            } catch { }
                            return Object.assign(n, i.FS.isDir(i.FS.stat(s).mode) ? { [(0, t.join)(d, "/")]: u.from(""), ...i.FS.readdir(s).reduce(o(s), {}) } : { [d]: i.FS.readFile(s, { flags: "r" }) }), n;
                        };
                    return d.reduce(o(c), {});
                };
        },
    },
]);



// "use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5341],{5341:function(e,n,i){i.d(n,{addEntryToZippable:function(){return s},addFileToZip:function(){return l},createZippable:function(){return c},isFileInZip:function(){return h},unarchive:function(){return p},unzip:function(){return d},zipAsync:function(){return o}});var t=i(1864),r=i(6484),a=i(97836),u=i(48764).Buffer;let c=(e,n)=>e.split("/").reduceRight((e,n)=>({[n]:e}),[n,a.BF]),s=(e,n)=>{let[[i,t]]=Object.entries(n);return e[i]=i in e?s(e[i],n[i]):t,e},d=e=>new Promise((n,t)=>{i.e(3778,"high").then(i.bind(i,93778)).then(({unzip:i})=>i(e,(e,i)=>e?t(e):n(i)))}),o=(e,n=a.BF)=>new Promise((t,r)=>{i.e(3778,"high").then(i.bind(i,93778)).then(({zip:i})=>i(e,n,(e,n)=>e?r(e):t(n)))}),l=async(e,n,i,t)=>u.from(await o(s(e.length>0&&await d(e)||{},c(i,await t(n))))),h=(e,n)=>new Promise((t,r)=>{i.e(3778,"high").then(i.bind(i,93778)).then(({unzip:i})=>i(e,(e,i)=>e?r(e):t(Object.keys(i).includes(n))))}),p=async(e,n)=>{if(window.SevenZip||await (0,r.mb)(["System/7zip/7zz.es6.js"]),!window.SevenZip)return{};let i=await window.SevenZip(),a=(0,t.basename)(e),c=(0,t.join)("/",(0,t.basename)(e,(0,t.extname)(e)));i.FS.mkdir(c),i.FS.chdir(c);let s=i.FS.open(a,"w+");i.FS.write(s,n,0,n.length),i.FS.close(s),i.callMain(["-y","x",a]);let d=i.FS.readdir(c),o=e=>(n,r)=>{if([".","..",a].includes(r))return n;let s=(0,t.join)(e,r),d=s.replace(c,"");try{i.FS.chmod(s,511)}catch{}return Object.assign(n,i.FS.isDir(i.FS.stat(s).mode)?{[(0,t.join)(d,"/")]:u.from(""),...i.FS.readdir(s).reduce(o(s),{})}:{[d]:i.FS.readFile(s,{flags:"r"})}),n};return d.reduce(o(c),{})}}}]);
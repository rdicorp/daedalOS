"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1746],
    {
        31746: function (e, t, i) {
            i.d(t, {
                getIpfsFileName: function () {
                    return l;
                },
                getIpfsGatewayUrl: function () {
                    return s;
                },
                getIpfsResource: function () {
                    return c;
                },
            });
            var r = i(97836),
                n = i(48764).Buffer;
            let a = "",
                f = ["https://<CID>.ipfs.cf-ipfs.com/", "https://<CID>.ipfs.dweb.link/", "https://cloudflare-ipfs.com/ipfs/<CID>/", "https://gateway.ipfs.io/ipfs/<CID>/"],
                o = (e) =>
                    new Promise((t) => {
                        let i = window.setTimeout(() => t(!1), r.i2),
                            n = new Image();
                        n.addEventListener(
                            "load",
                            () => {
                                window.clearTimeout(i), t(!0);
                            },
                            r.K7
                        ),
                            n.addEventListener(
                                "error",
                                () => {
                                    window.clearTimeout(i), t(!1);
                                },
                                r.K7
                            ),
                            (n.src = `${e.replace("<CID>", "bafybeibwzifw52ttrkqlikfzext5akxu7lz4xiwjgwzmqcpdzmp3n5vnbe")}?now=${Date.now()}&filename=1x1.png#x-ipfs-companion-no-redirect`);
                    }),
                s = async (e, t) => {
                    if (!a || t) {
                        for (let e of t ? f.filter((e) => e !== a) : f)
                            if (await o(e)) {
                                a = e;
                                break;
                            }
                        if (!a) return "";
                    }
                    let { pathname: r, protocol: n, search: s } = new URL(e);
                    if ("ipfs:" !== n) return "";
                    let [l = "", ...c] = r.split("/").filter(Boolean),
                        { CID: w } = await i.e(2856, "high").then(i.bind(i, 72856));
                    return `${a.replace("<CID>", w.parse(l).toV1().toString())}${c.join("/")}${s}`;
                },
                l = async (e, t) => {
                    let { pathname: r, searchParams: n } = new URL(e),
                        a = n.get("filename");
                    if (a) return a;
                    let { fileTypeFromBuffer: f } = await Promise.all([i.e(8090, "high"), i.e(3545, "high"), i.e(3301, "high")]).then(i.bind(i, 53545)),
                        { ext: o = "" } = (await f(t)) || {};
                    return `${r.split("/").filter(Boolean).join("_")}${o ? `.${o}` : ""}`;
                },
                c = async (e) => {
                    let t;
                    let i = { ...r.P8, cache: "no-cache", credentials: "omit", keepalive: !1, mode: "cors", referrerPolicy: "no-referrer", window: null };
                    try {
                        t = await fetch(await s(e), i);
                    } catch (r) {
                        "Failed to fetch" === r.message && (t = await fetch(await s(e, !0), i));
                    }
                    return t instanceof Response ? n.from(await t.arrayBuffer()) : n.from("");
                };
        },
    },
]);




// "use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1746],{31746:function(e,t,i){i.d(t,{getIpfsFileName:function(){return l},getIpfsGatewayUrl:function(){return s},getIpfsResource:function(){return c}});var r=i(97836),n=i(48764).Buffer;let a="",f=["https://<CID>.ipfs.cf-ipfs.com/","https://<CID>.ipfs.dweb.link/","https://cloudflare-ipfs.com/ipfs/<CID>/","https://gateway.ipfs.io/ipfs/<CID>/"],o=e=>new Promise(t=>{let i=window.setTimeout(()=>t(!1),r.i2),n=new Image;n.addEventListener("load",()=>{window.clearTimeout(i),t(!0)},r.K7),n.addEventListener("error",()=>{window.clearTimeout(i),t(!1)},r.K7),n.src=`${e.replace("<CID>","bafybeibwzifw52ttrkqlikfzext5akxu7lz4xiwjgwzmqcpdzmp3n5vnbe")}?now=${Date.now()}&filename=1x1.png#x-ipfs-companion-no-redirect`}),s=async(e,t)=>{if(!a||t){for(let e of t?f.filter(e=>e!==a):f)if(await o(e)){a=e;break}if(!a)return""}let{pathname:r,protocol:n,search:s}=new URL(e);if("ipfs:"!==n)return"";let[l="",...c]=r.split("/").filter(Boolean),{CID:w}=await i.e(2856,"high").then(i.bind(i,72856));return`${a.replace("<CID>",w.parse(l).toV1().toString())}${c.join("/")}${s}`},l=async(e,t)=>{let{pathname:r,searchParams:n}=new URL(e),a=n.get("filename");if(a)return a;let{fileTypeFromBuffer:f}=await Promise.all([i.e(8090,"high"),i.e(3545,"high"),i.e(3301,"high")]).then(i.bind(i,53545)),{ext:o=""}=await f(t)||{};return`${r.split("/").filter(Boolean).join("_")}${o?`.${o}`:""}`},c=async e=>{let t;let i={...r.P8,cache:"no-cache",credentials:"omit",keepalive:!1,mode:"cors",referrerPolicy:"no-referrer",window:null};try{t=await fetch(await s(e),i)}catch(r){"Failed to fetch"===r.message&&(t=await fetch(await s(e,!0),i))}return t instanceof Response?n.from(await t.arrayBuffer()):n.from("")}}}]);
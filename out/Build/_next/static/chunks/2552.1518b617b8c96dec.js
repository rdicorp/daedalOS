!(function () {
    var e = {};
    (e.g = (function () {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || Function("return this")();
        } catch (e) {
            if ("object" == typeof window) return window;
        }
    })()),
        (function () {
            "use strict";
            let t, i, n, o;
            let a = new Intl.DateTimeFormat("en", { day: "numeric", month: "long", year: "numeric" }),
                r = new Intl.DateTimeFormat("en", { hour: "numeric", hour12: !0, minute: "2-digit", second: "2-digit" }),
                l = new Intl.DateTimeFormat("en", { weekday: "long" }),
                s = (e) => {
                    let t = a.format(e),
                        i = l.format(e);
                    return {
                        date: `${t}
${i}`,
                        time: r.format(e),
                    };
                },
                c = { cache: "no-cache", credentials: "omit", keepalive: !1, mode: "cors", priority: "high", referrerPolicy: "no-referrer", window: null },
                h = async () => {
                    let e = await fetch("https://use.ntpjs.org/v1/time.json", c);
                    return (await e.json()) || {};
                },
                f = async () => {
                    let e = Date.now(),
                        { backoff: i = 300, now: n = 0, optout: o = !1 } = await h();
                    n && (t = e - Math.ceil(1e3 * n)), setTimeout(f, (o ? 3600 : i) * 1e3);
                },
                g = () => ("number" != typeof t && ((t = 0), f()), new Date(Date.now() - t)),
                u = () => (i && "local" !== i ? g() : new Date()),
                d = { x: 0, y: 0 },
                m = () => {
                    o.scale(e.g.devicePixelRatio, e.g.devicePixelRatio),
                        (o.fillStyle = "rgba(255, 255, 255, 90%)"),
                        (o.font = "12px 'Segoe UI', system-ui, Roboto, 'Helvetica Neue', sans-serif"),
                        (o.textAlign = "center"),
                        (o.textBaseline = "middle"),
                        (d.y = Math.floor(n.height / e.g.devicePixelRatio / 2) + 1),
                        (d.x = Math.floor(n.width / e.g.devicePixelRatio / 2));
                },
                w = (e) => {
                    if (!o) {
                        if (!(o = n.getContext("2d"))) return;
                        m();
                    }
                    o.clearRect(0, 0, n.width, n.height), o.fillText(e.time, d.x, d.y);
                },
                v = () => {
                    let e = s(u());
                    globalThis.postMessage(e), n && w(e);
                },
                y = !1;
            globalThis.addEventListener(
                "message",
                ({ data: t }) => {
                    if (!y) {
                        "init" === t && ((y = !0), globalThis.postMessage("source"));
                        return;
                    }
                    if ("OffscreenCanvas" in e.g && t?.devicePixelRatio) {
                        let { canvas: i, clockSize: o, devicePixelRatio: a } = t;
                        (e.g.devicePixelRatio = a),
                            i instanceof OffscreenCanvas && (n = i),
                            n instanceof OffscreenCanvas && o?.height && o?.width && a && ((n.height = Math.floor(Number(o.height) * a)), (n.width = Math.floor(Number(o.width) * a)), m()),
                            v();
                        return;
                    }
                    ("local" === t || "ntp" === t) && (i = t),
                        v(),
                        globalThis.setTimeout(() => {
                            v(), globalThis.setInterval(v, 1e3);
                        }, 1e3 - new Date().getMilliseconds());
                },
                { passive: !0 }
            );
        })(),
        (_N_E = {});
})();




// !function(){var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch(e){if("object"==typeof window)return window}}(),function(){"use strict";let t,i,n,o;let a=new Intl.DateTimeFormat("en",{day:"numeric",month:"long",year:"numeric"}),r=new Intl.DateTimeFormat("en",{hour:"numeric",hour12:!0,minute:"2-digit",second:"2-digit"}),l=new Intl.DateTimeFormat("en",{weekday:"long"}),s=e=>{let t=a.format(e),i=l.format(e);return{date:`${t}
// ${i}`,time:r.format(e)}},c={cache:"no-cache",credentials:"omit",keepalive:!1,mode:"cors",priority:"high",referrerPolicy:"no-referrer",window:null},h=async()=>{let e=await fetch("https://use.ntpjs.org/v1/time.json",c);return await e.json()||{}},f=async()=>{let e=Date.now(),{backoff:i=300,now:n=0,optout:o=!1}=await h();n&&(t=e-Math.ceil(1e3*n)),setTimeout(f,(o?3600:i)*1e3)},g=()=>("number"!=typeof t&&(t=0,f()),new Date(Date.now()-t)),u=()=>i&&"local"!==i?g():new Date,d={x:0,y:0},m=()=>{o.scale(e.g.devicePixelRatio,e.g.devicePixelRatio),o.fillStyle="rgba(255, 255, 255, 90%)",o.font="12px 'Segoe UI', system-ui, Roboto, 'Helvetica Neue', sans-serif",o.textAlign="center",o.textBaseline="middle",d.y=Math.floor(n.height/e.g.devicePixelRatio/2)+1,d.x=Math.floor(n.width/e.g.devicePixelRatio/2)},w=e=>{if(!o){if(!(o=n.getContext("2d")))return;m()}o.clearRect(0,0,n.width,n.height),o.fillText(e.time,d.x,d.y)},v=()=>{let e=s(u());globalThis.postMessage(e),n&&w(e)},y=!1;globalThis.addEventListener("message",({data:t})=>{if(!y){"init"===t&&(y=!0,globalThis.postMessage("source"));return}if("OffscreenCanvas"in e.g&&t?.devicePixelRatio){let{canvas:i,clockSize:o,devicePixelRatio:a}=t;e.g.devicePixelRatio=a,i instanceof OffscreenCanvas&&(n=i),n instanceof OffscreenCanvas&&o?.height&&o?.width&&a&&(n.height=Math.floor(Number(o.height)*a),n.width=Math.floor(Number(o.width)*a),m()),v();return}("local"===t||"ntp"===t)&&(i=t),v(),globalThis.setTimeout(()=>{v(),globalThis.setInterval(v,1e3)},1e3-new Date().getMilliseconds())},{passive:!0})}(),_N_E={}}();
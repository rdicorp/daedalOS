"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8370],
    {
        49170: function (e, t, r) {
            r.d(t, {
                A5: function () {
                    return f;
                },
                F2: function () {
                    return c;
                },
                Jj: function () {
                    return o;
                },
                KE: function () {
                    return l;
                },
                L7: function () {
                    return d;
                },
                NJ: function () {
                    return h;
                },
                TZ: function () {
                    return i;
                },
                T_: function () {
                    return g;
                },
                UF: function () {
                    return a;
                },
                fN: function () {
                    return p;
                },
                hN: function () {
                    return u;
                },
                r3: function () {
                    return x;
                },
                r9: function () {
                    return m;
                },
                zi: function () {
                    return s;
                },
            });
            var n = r(97836);
            let i = ["wss://nos.lol", "wss://nostr.mom", "wss://public.relaying.io", "wss://relay1.nostrchat.io", "wss://relayable.org"],
                o = 0,
                a = 4,
                l = "nostr_private_key",
                s = "nostr_public_key",
                c = "/Program Files/Messenger/notification.mp3",
                u = "?",
                d = "/.well-known/nostr.json",
                p = `${n.Sd}/seenEvents.json`,
                h = (n.qe / n.i2) * 30,
                g = { hour: "numeric", hour12: !0, minute: "numeric" },
                b = { bounce: 0, duration: 0.3, type: "spring" },
                x = { animate: { transform: "translateX(0%)" }, exit: { transform: "translateX(100%)" }, initial: { transform: "translateX(100%)" }, ...b },
                f = { animate: { transform: "translateX(0%)" }, exit: { transform: "translateX(-100%)" }, initial: { transform: "translateX(-100%)" }, ...b },
                m = 16;
        },
        3331: function (e, t, r) {
            r.d(t, {
                $y: function () {
                    return A;
                },
                Hv: function () {
                    return m;
                },
                I: function () {
                    return l;
                },
                J1: function () {
                    return c;
                },
                Py: function () {
                    return S;
                },
                RW: function () {
                    return N;
                },
                SB: function () {
                    return D;
                },
                V7: function () {
                    return z;
                },
                WB: function () {
                    return h;
                },
                WU: function () {
                    return f;
                },
                Zw: function () {
                    return T;
                },
                _U: function () {
                    return b;
                },
                ov: function () {
                    return d;
                },
                p0: function () {
                    return R;
                },
                p5: function () {
                    return u;
                },
                uG: function () {
                    return Z;
                },
                vA: function () {
                    return E;
                },
                w4: function () {
                    return w;
                },
                x2: function () {
                    return a;
                },
                xp: function () {
                    return s;
                },
                yO: function () {
                    return k;
                },
            });
            var n = r(11093),
                i = r(49170),
                o = r(97836);
            let a = async () => {
                if (window.nostr?.getRelays)
                    try {
                        return [...new Set([...i.TZ, ...Object.entries(await window.nostr.getRelays()).map(([e]) => (e.endsWith("/") ? e.slice(0, -1) : e))])];
                    } catch { }
                return i.TZ;
            },
                l = (e) => {
                    if (e.startsWith("nprofile") || e.startsWith("npub") || e.startsWith("nsec"))
                        try {
                            let { data: t } = n.uD.decode(e);
                            if ("string" == typeof t) return t;
                            if ("object" == typeof t && "string" == typeof t.pubkey) return t.pubkey;
                        } catch { }
                    return e;
                },
                s = () => localStorage.getItem(i.KE) || "",
                c = async () => {
                    let e = localStorage.getItem(i.zi) || "",
                        t = "";
                    try {
                        t = (await window.nostr?.getPublicKey()) || "";
                    } catch { }
                    return t || e || "";
                },
                u = (e) => {
                    if (e) return l(e);
                    let t = (0, n.wQ)(),
                        r = (0, n.$3)(t);
                    return localStorage.setItem(i.zi, r), localStorage.setItem(i.KE, t), l(r);
                },
                d = (e = []) => {
                    let [, t = ""] = e.find(([e]) => "p" === e) || [];
                    return t;
                },
                p = {},
                h = async (e, t, r) => {
                    if (p[e] || !1 === p[e]) return p[e];
                    p[e] = t;
                    try {
                        let i = await (window.nostr?.nip04 ? window.nostr.nip04.decrypt(r, t) : n._J.decrypt(l(s()), r, t));
                        return (p[e] = i), i;
                    } catch {
                        return (p[e] = ""), "";
                    }
                },
                g = async (e, t) => {
                    try {
                        return await (window.nostr?.nip04 ? window.nostr.nip04.encrypt(t, e) : n._J.encrypt(l(s()), t, e));
                    } catch { }
                    return "";
                },
                b = (e, t, r = 0) => ({
                    enabled: !!e || !!t,
                    filter: [
                        { ...(t ? { "#p": [t] } : {}), authors: [e], kinds: [i.UF], since: r },
                        { ...(t ? { authors: [t] } : {}), "#p": [e], kinds: [i.UF], since: r },
                    ],
                }),
                x = (e, t) => e.created_at - t.created_at,
                f = (e, t) => t.created_at - e.created_at,
                m = (e) => {
                    let t = Math.floor((Date.now() - new Date(e * o.i2).getTime()) / 1e3),
                        r = Math.floor(t / 60),
                        n = Math.floor(r / 60),
                        i = Math.floor(n / 24),
                        a = Math.floor(i / 7);
                    return a > 0 ? `${a}w` : i > 0 ? `${i}d` : n > 0 ? `${n}h` : r > 0 ? `${r}m` : t < 10 ? "now" : `${t}s`;
                },
                w = (e, t) => [
                    { action: () => navigator.clipboard?.writeText(n.uD.npubEncode(e)), label: "Copy npub address" },
                    ...(t ? [{ action: () => navigator.clipboard?.writeText(n.uD.nsecEncode(t)), label: "Copy nsec address" }] : [{ action: () => navigator.clipboard?.writeText(e), label: "Copy hex address" }]),
                ],
                v = async (e) => {
                    let t = e;
                    return (
                        (t.pubkey = window.nostr?.getPublicKey ? await window.nostr.getPublicKey() : (0, n.$3)(s())),
                        (t.id = (0, n.s_)(e)),
                        window.nostr?.signEvent ? (t = await window.nostr.signEvent(t)) : (t.sig = (0, n.o$)(t, l(s()))),
                        (0, n.Z5)(t) && (0, n.uM)(t) && (t[n.q9] = !0),
                        t
                    );
                },
                y = () => Math.floor(Date.now() / 1e3),
                k = async (e) => v({ content: JSON.stringify(e), created_at: y(), kind: i.Jj, tags: [] }),
                A = async (e, t) => v({ content: await g(e, t), created_at: y(), kind: i.UF, tags: [["p", t]] }),
                j = new Set(["http", "https", "data"]),
                E = (e, t, r) => {
                    let { about: i, banner: o, display_name: a, name: l, nip05: s, npub: c, picture: u, username: d, website: p } = t || {},
                        [h = ""] = u?.split(":") || [];
                    return { about: i, banner: o, created_at: r, data: t, nip05: s, picture: j.has(h) ? u : void 0, userName: a || l || d || (c || (e.startsWith("npub") ? e : n.uD.npubEncode(e))).slice(0, 12), website: p };
                },
                S = (e) => {
                    let t = e.startsWith("nprofile"),
                        r = e.startsWith("nsec");
                    if (t || r || e.startsWith("npub"))
                        try {
                            let { data: i } = n.uD.decode(e) || {},
                                o = t ? i?.pubkey : i;
                            return r ? (0, n.$3)(o) : o;
                        } catch {
                            return "";
                        }
                    try {
                        return l(n.uD.npubEncode(e));
                    } catch {
                        return "";
                    }
                },
                C = {},
                M = new Set([408, 504]),
                D = async (e, t) => {
                    if (!e || !t) return "";
                    try {
                        let [r, n] = e.split("@");
                        if (C[t] === n) return n;
                        if ("number" == typeof C[t] && !M.has(C[t])) return "";
                        let o = await fetch(`https://${n}${i.L7}?name=${r}`);
                        if (o.ok) {
                            let { names: e = {} } = (await o.json()) || {},
                                i = !1;
                            if ("_" === r) {
                                let [n, ...o] = Object.values(e);
                                i = (0 === o.length ? n : e[r]) === t;
                            } else e[r] && (i = e[r] === t);
                            return i && (C[t] = n), i ? n : "";
                        }
                        C[t] = o.status;
                    } catch {
                        C[t] = 0;
                    }
                    return "";
                },
                R = (e) => {
                    switch (e) {
                        case WebSocket.prototype.CONNECTING:
                            return "\uD83D\uDFE1";
                        case WebSocket.prototype.OPEN:
                            return "\uD83D\uDFE2";
                        case WebSocket.prototype.CLOSING:
                            return "\uD83D\uDFE0";
                        default:
                            return "\uD83D\uDD34";
                    }
                },
                N = (e) => e.replace(/https?:\/\/\S+\.(?:png|jpg|jpeg|gif|webp)/gi, (e) => `<img decoding="async" loading="lazy" src="${e}" />`),
                z = (e) => e.replace(/\n/g, "<br />"),
                T = (e) => {
                    let t = new Date(e * o.i2),
                        r = new Date(),
                        n = new Date(r.getFullYear(), r.getMonth(), r.getDate()).getTime(),
                        a = new Date(r.getFullYear(), r.getMonth(), r.getDate() - 1).getTime(),
                        l = t.getTime(),
                        s = t.toLocaleString("en-US", i.T_);
                    return l > n ? s : l > a ? `Yesterday at ${s}` : l > n - 6 * o.xR ? t.toLocaleString("en-US", { ...i.T_, weekday: "long" }) : t.toLocaleString("en-US", { ...i.T_, day: "numeric", month: "short", year: "numeric" });
                },
                Z = (e) => {
                    if (0 === e.length) return [];
                    let [t, ...r] = e.sort(x),
                        n = [[T(t.created_at), [t]]];
                    return (
                        r.forEach((e) => {
                            let { created_at: t } = e,
                                [, r] = n[n.length - 1],
                                { created_at: o } = r[r.length - 1];
                            Math.abs(t - o) < i.NJ ? r.push(e) : n.push([T(t), [e]]);
                        }),
                        n
                    );
                };
        },
        78370: function (e, t, r) {
            r.r(t),
                r.d(t, {
                    default: function () {
                        return eh;
                    },
                });
            var n = r(85893),
                i = r(67294),
                o = r(51526),
                a = r(5152),
                l = r.n(a);
            let s = (0, i.memo)(() =>
                (0, n.jsx)("svg", {
                    style: { backgroundColor: "#cacdd2" },
                    viewBox: "0 0 512 512",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, n.jsx)("path", {
                        d:
                            "M256 281.602c-151.55 0-204.8 76.796-204.8 128v76.796h409.6v-76.796c0-51.204-53.25-128-204.8-128ZM371.2 140.8c0 63.622-51.575 115.2-115.2 115.2s-115.2-51.578-115.2-115.2c0-63.624 51.575-115.198 115.2-115.198S371.2 77.176 371.2 140.8Zm0 0",
                        fill: "#fff",
                        transform: "translate(0, 50)",
                    }),
                })
            ),
                c = (0, i.memo)(() =>
                    (0, n.jsxs)("svg", {
                        viewBox: "0 0 24 24",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                            (0, n.jsx)("path", {
                                d:
                                    "M21.1 2.9c-1.1-1.1-3-1.1-4.2 0l-8.1 7.9c-.7.7-1.2 1.6-1.4 2.6L7 15.6c-.1.3 0 .7.3.9.2.2.4.3.7.3h.2l2.2-.4c1-.2 1.9-.7 2.6-1.4l8.1-8c.6-.5.9-1.3.9-2.1s-.3-1.5-.9-2zm-9.4 10.6c-.4.4-1 .7-1.6.8l-.8.2.2-.7c.1-.6.4-1.1.9-1.6l6.2-6.1L18 7.4l-6.3 6.1zm8-7.9-.4.4-1.4-1.3.4-.4c.2-.2.5-.3.7-.3.3 0 .5.1.7.3.2.2.3.4.3.6 0 .2 0 .5-.3.7z",
                            }),
                            (0, n.jsx)("path", { d: "M20 9.9c-.6 0-1 .4-1 1V16c0 1.7-1.3 3-3 3H8c-1.7 0-3-1.3-3-3V8c0-1.7 1.3-3 3-3h5c.6 0 1-.4 1-1s-.4-1-1-1H8C5.2 3 3 5.2 3 8v8c0 2.8 2.2 5 5 5h8c2.8 0 5-2.2 5-5v-5.1c0-.5-.4-1-1-1z" }),
                        ],
                    })
                ),
                u = (0, i.memo)(() =>
                    (0, n.jsx)("svg", {
                        viewBox: "0 0 24 24",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, n.jsx)("path", {
                            d:
                                "m16.692 12.474-13.186.786c-.314 0-.47.157-.47.314l-1.884 6.441c-.314.786-.162 1.875.627 2.505.631.47 1.727.58 2.355.323l17.58-8.798c.942-.47 1.413-1.413 1.256-2.356a2.496 2.496 0 0 0-1.255-1.571L4.134 1.163c-.785-.263-1.727-.157-2.355.315-.784.628-.941 1.57-.627 2.513l1.883 6.441c0 .157.314.314.471.314l13.186.786s.47 0 .47.471-.47.471-.47.471Z",
                        }),
                    })
                ),
                d = (0, i.memo)(() =>
                    (0, n.jsx)("svg", {
                        viewBox: "0 0 512 512",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, n.jsx)("path", { d: "M244 400 100 256l144-144M120 256h292", style: { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "50px" } }),
                    })
                ),
                p = (0, i.memo)(() =>
                    (0, n.jsxs)("svg", {
                        viewBox: "-4 0 27 19",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                            (0, n.jsx)("path", {
                                d:
                                    "M7.844 17.563c1.039 1.046 2.031 1.039 3.078 0l1.172-1.172c.11-.11.203-.141.344-.141h1.656c1.476 0 2.18-.703 2.18-2.18v-1.656c0-.14.038-.242.14-.344l1.172-1.18c1.047-1.038 1.039-2.03 0-3.07l-1.172-1.172a.454.454 0 0 1-.14-.343V4.648c0-1.476-.704-2.18-2.18-2.18h-1.656a.443.443 0 0 1-.344-.14l-1.172-1.172C9.875.11 8.882.11 7.844 1.164L6.672 2.328a.443.443 0 0 1-.344.14H4.672c-1.477 0-2.18.688-2.18 2.18v1.657c0 .14-.039.242-.14.343L1.18 7.82c-1.047 1.04-1.04 2.032 0 3.07l1.172 1.18c.101.102.14.203.14.344v1.656c0 1.477.703 2.18 2.18 2.18h1.656c.14 0 .234.031.344.14l1.172 1.172Z",
                                style: { stroke: "currentColor", strokeWidth: "3px" },
                            }),
                            (0, n.jsx)("path", {
                                d:
                                    "M7.844 17.563c1.039 1.046 2.031 1.039 3.078 0l1.172-1.172c.11-.11.203-.141.344-.141h1.656c1.476 0 2.18-.703 2.18-2.18v-1.656c0-.14.038-.242.14-.344l1.172-1.18c1.047-1.038 1.039-2.03 0-3.07l-1.172-1.172a.454.454 0 0 1-.14-.343V4.648c0-1.476-.704-2.18-2.18-2.18h-1.656a.443.443 0 0 1-.344-.14l-1.172-1.172C9.875.11 8.882.11 7.844 1.164L6.672 2.328a.443.443 0 0 1-.344.14H4.672c-1.477 0-2.18.688-2.18 2.18v1.657c0 .14-.039.242-.14.343L1.18 7.82c-1.047 1.04-1.04 2.032 0 3.07l1.172 1.18c.101.102.14.203.14.344v1.656c0 1.477.703 2.18 2.18 2.18h1.656c.14 0 .234.031.344.14l1.172 1.172Zm.242-4.204a.883.883 0 0 1-.664-.28l-2.5-2.798a.778.778 0 0 1-.203-.531c0-.469.336-.805.82-.805.266 0 .461.086.633.274l1.883 2.101 3.765-5.375c.188-.265.39-.375.703-.375.485 0 .829.336.829.79a.936.936 0 0 1-.18.515l-4.383 6.148a.831.831 0 0 1-.703.336Z",
                                fill: "#0095f6",
                            }),
                        ],
                    })
                ),
                h = (0, i.memo)(() =>
                    (0, n.jsx)("svg", {
                        viewBox: "0 0 32 32",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, n.jsx)("path", {
                            d:
                                "m23.297 9.297 1.406 1.406L13 22.406l-5.703-5.703 1.406-1.406L13 19.594zM16 0q2.203 0 4.25.57t3.828 1.609 3.242 2.5 2.5 3.242 1.609 3.828.57 4.25-.57 4.25-1.609 3.828-2.5 3.242-3.242 2.5-3.828 1.609-4.25.57-4.25-.57-3.828-1.609-3.242-2.5-2.5-3.242-1.609-3.82-.57-4.258q0-2.203.57-4.25T2.18 7.921t2.5-3.242 3.242-2.5T11.742.57 16 0zm0 30q1.922 0 3.711-.5t3.344-1.414 2.836-2.195 2.195-2.836 1.414-3.336T30 16q0-1.922-.5-3.711t-1.414-3.344-2.195-2.836-2.836-2.195T19.711 2.5 16 2t-3.711.5-3.344 1.414-2.836 2.195-2.195 2.836T2.5 12.289 2 16t.5 3.711 1.414 3.344 2.195 2.836 2.836 2.195 3.336 1.414T16 30z",
                        }),
                    })
                ),
                g = (0, i.memo)(() =>
                    (0, n.jsx)("svg", {
                        viewBox: "0 0 32 32",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, n.jsx)("path", {
                            d:
                                "M16 0q2.203 0 4.25.57t3.82 1.617 3.234 2.508 2.508 3.234 1.617 3.82.57 4.25-.57 4.25-1.617 3.82-2.508 3.234-3.234 2.508-3.82 1.617-4.25.57-4.25-.57-3.82-1.617-3.234-2.508-2.508-3.234-1.617-3.82-.57-4.25.57-4.25 1.617-3.82 2.508-3.234T7.93 2.187 11.75.57 16 0zm9.422 10.703-2.125-2.125L13 18.875l-4.297-4.297-2.125 2.125L13 23.125z",
                        }),
                    })
                );
            var b = r(10508);
            let x = b.ZP.figure(
                [
                    "> div{cursor:",
                    ";position:relative;> img,> svg{cursor:inherit;}div.verified{cursor:inherit;svg{border:none;bottom:2px;color:#000;cursor:inherit;fill:#000;height:18px;left:-2px;max-height:auto;max-width:18px;min-height:auto;min-width:18px;position:absolute;width:18px;path{cursor:inherit;}}}}",
                ],
                ({ $clickable: e }) => (e ? "pointer" : "default")
            );
            var f = r(49170),
                m = r(20063);
            let w = (0, i.createContext)({}),
                v = () => (0, i.useContext)(w),
                y = (0, i.memo)(({ children: e }) => {
                    let { readFile: t, writeFile: r } = (0, m.o)(),
                        [o, a] = (0, i.useState)("day"),
                        [l, s] = (0, i.useState)([]),
                        [c, u] = (0, i.useState)([]),
                        [d, p] = (0, i.useState)({}),
                        h = (0, i.useRef)(!1);
                    return (
                        (0, i.useEffect)(() => {
                            t &&
                                !h.current &&
                                ((h.current = !0),
                                    t(f.fN).then((e) => {
                                        if (e)
                                            try {
                                                s(JSON.parse(e.toString()));
                                            } catch { }
                                    }));
                        }, [t]),
                        (0, i.useEffect)(() => {
                            r && h.current && r(f.fN, JSON.stringify(l), !0);
                        }, [l, r]),
                        (0, n.jsx)(w.Provider, {
                            value: (0, i.useMemo)(() => ({ outgoingEvents: c, profiles: d, seenEventIds: l, setOutgoingEvents: u, setProfiles: p, setSeenEventIds: s, setTimeScale: a, timeScale: o }), [c, d, l, o]),
                            children: e,
                        })
                    );
                });
            var k = r(3331);
            let A = (0, i.createContext)({ events: [], publicKey: "", sendingEvent: () => { } }),
                j = () => (0, i.useContext)(A),
                E = (e) => {
                    let { outgoingEvents: t } = v(),
                        { events: r, publicKey: n } = j(),
                        o = Z((0, k._U)(n, e)),
                        [a, l] = (0, i.useState)([]);
                    return (
                        (0, i.useEffect)(() => {
                            let t = [
                                ...o,
                                ...r.filter(({ pubkey: t, tags: r }) => {
                                    let i = t === e,
                                        o = (0, k.ov)(r) === e;
                                    return e === n ? i && o : i || o;
                                }),
                            ].filter((e, t, r) => r.findIndex(({ id: t }) => t === e.id) === t),
                                i = (0, k.uG)(t);
                            (i.length !== a.length || t.length !== a.reduce((e, [, t]) => [...e, ...t], []).length) && l(i);
                        }, [o, r, a, n, e]),
                        { allEventsReceived: (0, i.useMemo)(() => !t.some(({ tags: t }) => (0, k.ov)(t) === e), [t, e]), messages: a }
                    );
                },
                S = (0, i.memo)(({ children: e, publicKey: t, since: r }) => {
                    let o = Z((0, k._U)(t, "", r)),
                        { outgoingEvents: a, setOutgoingEvents: l } = v(),
                        s = (0, i.useCallback)((e) => l((t) => [...t, e]), [l]),
                        [c, u] = (0, i.useState)(o);
                    return (
                        (0, i.useEffect)(() => {
                            let e = [...o, ...a.filter((e) => !o.some(({ id: t }) => t === e.id))];
                            e.length !== c.length && u(e);
                        }, [o, c, a]),
                        (0, i.useEffect)(() => {
                            a.forEach((e) => {
                                o.some(({ id: t }) => t === e.id) && l((t) => t.filter(({ id: t }) => t !== e.id));
                            });
                        }, [o, a, l]),
                        (0, n.jsx)(A.Provider, { value: (0, i.useMemo)(() => ({ events: c, publicKey: t, sendingEvent: s }), [c, t, s]), children: e })
                    );
                });
            var C = r(11093);
            let M = (0, i.createContext)({ connectToRelays: () => { }, connectedRelays: [], publish: () => { } }),
                D = () => (0, i.useContext)(M),
                R = ({ children: e, relayUrls: t }) => {
                    let [r, o] = (0, i.useState)({}),
                        [a, l] = (0, i.useState)([]),
                        s = (0, i.useCallback)((e) => {
                            0 !== e.length &&
                                o((t) => {
                                    let r = { ...t };
                                    return (
                                        e.forEach((e) => {
                                            r[e]?.close(), delete r[e];
                                        }),
                                        r
                                    );
                                });
                        }, []),
                        c = (0, i.useCallback)(
                            (e) =>
                                e.forEach((e) => {
                                    if (r[e]) return;
                                    let t = (0, C.L6)(e);
                                    t.on("connect", () => o((r) => ({ ...r, [e]: t }))), t.on("disconnect", () => o(({ [e]: t, ...r }) => r)), t.on("error", console.error), t.connect();
                                }),
                            [r]
                        ),
                        u = (0, i.useCallback)(
                            (e) => {
                                Object.values(r).map((t) => t.publish(e));
                            },
                            [r]
                        );
                    return (
                        (0, i.useEffect)(() => {
                            (t.length === a.length && t.every((e) => a.includes(e))) || (s(a.filter((e) => !t.includes(e))), c(t), l(t));
                        }, [c, s, a, t]),
                        (0, n.jsx)(M.Provider, { value: (0, i.useMemo)(() => ({ connectToRelays: c, connectedRelays: Object.values(r), publish: u }), [c, r, u]), children: e })
                    );
                };
            var N = r(58437),
                z = r(37176),
                T = r(97836);
            let Z = ({ enabled: e = !0, filter: t, onEvent: r }) => {
                let { connectedRelays: n } = D(),
                    [o, a] = (0, i.useState)([]),
                    l = (0, i.useRef)({}),
                    s = (0, i.useMemo)(() => JSON.stringify(t), [t]),
                    c = (0, i.useRef)(0),
                    u = (0, i.useCallback)(
                        (e, t) => {
                            let n = e.sub(t);
                            return (
                                n.on("event", (e) => {
                                    l.current[e.id] ||
                                        ((l.current[e.id] = e),
                                            r?.(e),
                                            c.current && window.clearTimeout(c.current),
                                            (c.current = window.setTimeout(
                                                () => {
                                                    (c.current = 0), a((t) => (t.some(({ id: t }) => t === e.id) ? t : Object.values(l.current)));
                                                },
                                                c.current ? f.r9 : 0
                                            )));
                                }),
                                n
                            );
                        },
                        [r]
                    );
                return (
                    (0, i.useEffect)(() => {
                        if (!e) return;
                        let t = n.map((e) => ({ relay: e, sub: u(e, JSON.parse(s)) }));
                        return () => t.forEach(({ sub: e }) => e.unsub());
                    }, [n, e, s, u]),
                    o
                );
            },
                O = () => {
                    let [e, t] = (0, i.useState)(),
                        r = (0, i.useCallback)(async (e) => {
                            let r = await fetch(e);
                            if (r.ok) {
                                let { names: e = {} } = (await r.json()) || {};
                                t({ names: e });
                            }
                            return r.ok;
                        }, []),
                        n = (0, i.useCallback)(async () => {
                            (await r(f.L7)) || t({ relays: {} });
                        }, [r]);
                    return (
                        (0, i.useEffect)(() => {
                            e || n().then((e) => e);
                        }, [n, e]),
                        e || {}
                    );
                },
                U = (e, t) => {
                    let r = (0, i.useMemo)(() => [...(T.PACKAGE_DATA?.author?.npub ? new Set([(0, k.I)(T.PACKAGE_DATA.author.npub), ...Object.values(t || {})]) : Object.values(t || {}))].filter(Boolean).map((e) => (0, k.I)(e)), [t]),
                        { events: n } = j(),
                        o = (0, i.useMemo)(() => {
                            let t = new Set(
                                n
                                    .sort(k.WU)
                                    .map(({ pubkey: t, tags: r }) => (t === e ? (0, k.ov)(r) || "" : t))
                                    .filter((e) => !r.includes(e))
                            );
                            return [...r, ...t].filter((t) => t !== e);
                        }, [n, r, e]),
                        a = (0, i.useMemo)(() => Object.fromEntries(o.map((e) => [e, n.filter((t) => [t.pubkey, (0, k.ov)(t.tags)].includes(e)).sort(k.WU)[0]])), [o, n]),
                        { seenEventIds: l } = v(),
                        s = (0, i.useMemo)(() => n.filter(({ id: t, pubkey: r }) => r !== e && !l.includes(t)), [n, e, l]);
                    return { contactKeys: o, events: n, lastEvents: a, unreadEvents: s };
                },
                B = () => {
                    let [e, t] = (0, i.useState)(""),
                        r = (0, i.useRef)(!1);
                    return (
                        (0, i.useEffect)(() => {
                            r.current || ((r.current = !0), (0, k.J1)().then(k.p5).then(t));
                        }, []),
                        e
                    );
                },
                K = (e, t) => {
                    let [r, n] = (0, i.useState)(t),
                        { title: o } = (0, N.z)(),
                        [a] = e.split(T.CC);
                    (0, i.useEffect)(() => {
                        o(a, `${z.Z[a]?.title}${t > 0 ? ` (${t})` : ""}`);
                    }, [a, o, t]),
                        (0, i.useEffect)(() => {
                            t > r && new Audio(f.F2).play().then((e) => e), n(t);
                        }, [r, t]);
                },
                P = (e, t) => {
                    let [r, n] = (0, i.useState)("");
                    return (
                        (0, i.useEffect)(() => {
                            (0, k.SB)(e, t).then(n);
                        }, [e, t]),
                        r
                    );
                },
                _ = (e, t = !0) => {
                    let { profiles: r, setProfiles: n } = v(),
                        o = (0, i.useCallback)(
                            ({ content: t, created_at: i, pubkey: o }) => {
                                if (!(!e || e !== o || r?.[e]?.created_at >= i))
                                    try {
                                        let r = JSON.parse(t);
                                        r && n((t) => ({ ...t, [e]: (0, k.vA)(e, r, i) }));
                                    } catch { }
                            },
                            [r, e, n]
                        );
                    return Z((0, i.useMemo)(() => ({ enabled: !!e && t, filter: [{ authors: [e], kinds: [f.Jj] }], onEvent: o }), [t, o, e])), e ? r[e] || (0, k.vA)(e) : {};
                };
            var L = ({ children: e, nip05: t, onMouseDown: r, picture: o, pubkey: a, userName: l = "Unknown" }) => {
                let c = P(t, a),
                    [u, d] = (0, i.useState)("");
                return (0, n.jsxs)(x, {
                    $clickable: !!r,
                    children: [
                        (0, n.jsxs)("div", {
                            onMouseDown: r,
                            children: [
                                o && (0, n.jsx)("img", { alt: l, onLoad: () => d(o), src: o, style: u === o ? {} : { position: "absolute", visibility: "hidden" } }),
                                (!o || u !== o) && (0, n.jsx)(s, {}),
                                c && (0, n.jsx)("div", { className: "verified", title: c, children: (0, n.jsx)(p, {}) }),
                            ],
                        }),
                        (0, n.jsxs)("figcaption", { children: [(0, n.jsx)("span", { children: l }), e] }),
                    ],
                });
            };
            let $ = b.ZP.li([
                "figure{display:flex;flex-direction:column;place-items:center;img,svg{aspect-ratio:1/1;border:2px solid #fff;border-radius:50%;height:72px;margin:16px 0 8px;max-height:72px;max-width:72px;min-height:72px;min-width:72px;width:72px;}div.verified{svg{bottom:-4px !important;height:30px !important;left:-6px !important;max-height:30px !important;max-width:30px !important;min-height:30px !important;min-width:30px !important;width:30px !important;}}figcaption{color:#fff;display:flex;flex-direction:column;font-size:17px;font-weight:600;padding-bottom:10px;place-items:center;text-align:center;div.about{color:rgb(255,255,255,55%);font-size:10px;font-weight:400;overflow-wrap:break-word;padding-top:5px;width:60%;}div.encryption{background-color:rgb(255,255,255,15%);border-radius:8px;display:flex;flex-direction:column;font-size:12px;font-weight:600;gap:2px;margin:10px;padding:10px 20px;span:last-child{font-weight:100;}}}}",
            ]);
            var W = r(78848),
                F = ({ publicKey: e }) => {
                    let t = (0, i.useRef)(null),
                        { about: r, nip05: o, picture: a, userName: l } = _(e, (0, W.O)(t));
                    return (0, n.jsx)($, {
                        ref: t,
                        children: (0, n.jsxs)(L, {
                            nip05: o,
                            picture: a,
                            pubkey: e,
                            userName: l,
                            children: [
                                r && (0, n.jsx)("div", { className: "about", children: r }),
                                (0, n.jsxs)("div", {
                                    className: "encryption",
                                    children: [(0, n.jsx)("span", { children: "\uD83D\uDD10 End-to-end encrypted" }), (0, n.jsx)("span", { children: "Messages are secured with AES256-CBC encryption." })],
                                }),
                            ],
                        }),
                    });
                },
                H = r(18680);
            let J = b.ZP.ol(
                [
                    "",
                    ' height:100%;overflow-x:auto;scrollbar-gutter:auto;li:not(:first-child){border-radius:15px;color:#fff;list-style:none;margin:12px;padding:10px 12px;position:relative;.status{bottom:-4px;position:absolute;right:-15px;svg{fill:#ced7e0;height:12px;width:12px;}}&.sent{background-color:#0084ff;margin-left:65px;margin-right:20px;}&.received{background-color:#3e4042;margin-left:40px;margin-right:50px;}&[data-timestamp]{margin-top:50px;&:nth-child(2){margin-top:30px;}&::before{color:#8b8d92;content:attr(data-timestamp);font-size:11px;font-weight:600;left:0;position:absolute;text-align:center;top:-28px;width:100%;}&.sent{&::before{margin-left:-65px;margin-right:-12px;width:calc(100% + 65px + 12px);}}&.received{&::before{margin-left:-40px;margin-right:-50px;width:calc(100% + 90px);}}}div{cursor:auto;overflow:hidden;user-select:text;word-wrap:break-word;img{border-radius:5px;margin:6px 0;object-fit:unset;width:100%;}&.avatar{bottom:-24px;left:-30px;position:absolute;img,svg{aspect-ratio:1/1;border-radius:50%;bottom:5px;height:22px;margin:15px 0;max-height:22px;max-width:22px;min-height:22px;min-width:22px;position:relative;width:22px;}}}&.cant-decrypt{background-color:#910000;position:relative;&::after{content:"\uD83D\uDD10";font-size:12px;left:6px;margin-left:0 !important;position:absolute;text-align:right;top:-4px;width:100% !important;}}}',
                ],
                (0, H.Z)()
            );
            var Q = r(6484);
            let G = l()(() => Promise.all([r.e(7856, "high"), r.e(7905, "high")]).then(r.bind(r, 7905)), { loadableGenerated: { webpack: () => [7905] } });
            var I = ({ recipientPublicKey: e }) => {
                let { publicKey: t } = j(),
                    { allEventsReceived: r, messages: o } = E(e),
                    [a, l] = (0, i.useState)({}),
                    c = (0, i.useCallback)(() => [...o].reverse().forEach(([, t]) => [...t].reverse().forEach(({ content: t, id: r }) => (0, k.WB)(r, t, e).then((e) => l((t) => ({ ...t, [r]: e || !1 }))))), [o, e]),
                    u = (0, i.useRef)(null),
                    d = e === f.hN,
                    { picture: p, userName: b } = _(d ? "" : e);
                return (
                    (0, i.useEffect)(() => {
                        o && (c(), u.current?.scrollTo(0, u.current.scrollHeight));
                    }, [c, o]),
                    (0, n.jsx)(J, {
                        ref: u,
                        children:
                            !d &&
                            (0, n.jsxs)(n.Fragment, {
                                children: [
                                    (0, n.jsx)(F, { publicKey: e }),
                                    o.map(([e, i], l) =>
                                        i.map(({ created_at: c, id: u, pubkey: d, content: x }, f) =>
                                            (0, n.jsxs)(
                                                "li",
                                                {
                                                    className: (0, Q.Wy)({ "cant-decrypt": !1 === a[u], received: t !== d, sent: t === d }),
                                                    "data-timestamp": 0 === f ? e : void 0,
                                                    title: (0, k.Zw)(c),
                                                    children: [
                                                        t !== d && (0, n.jsx)("div", { className: "avatar", children: p ? (0, n.jsx)("img", { alt: b, decoding: "async", src: p }) : (0, n.jsx)(s, {}) }),
                                                        (0, n.jsx)(G, { content: a[u] || x, decrypted: "string" == typeof a[u] }),
                                                        t === d &&
                                                        l === o.length - 1 &&
                                                        f === i.length - 1 &&
                                                        (0, n.jsx)("div", { className: "status", title: r ? "Sent" : "Sending", children: r ? (0, n.jsx)(g, {}) : (0, n.jsx)(h, {}) }),
                                                    ],
                                                },
                                                u
                                            )
                                        )
                                    ),
                                ],
                            }),
                    })
                );
            },
                V = r(7502),
                Y = r(67278),
                q = ({ lastEvent: e, onClick: t, pubkey: r, publicKey: o, unreadEvent: a }) => {
                    let { content: l = "", created_at: s = 0, id: c, pubkey: u } = e || {},
                        [d, p] = (0, i.useState)(""),
                        [h, g] = (0, i.useState)(""),
                        b = (0, i.useRef)(null),
                        x = (0, W.O)(b),
                        { nip05: f, picture: m, userName: w } = _(r, x),
                        v = a ? "unread" : void 0,
                        { contextMenu: y } = (0, V.H)(),
                        { onContextMenuCapture: A } = (0, i.useMemo)(() => y?.(() => [{ action: t, icon: "\uD83D\uDD10", label: "Start end-to-end encrypted chat" }, T.Os, ...k.w4(r)]), [y, t, r]);
                    return (
                        (0, i.useEffect)(() => {
                            l && x && (0, k.WB)(c, l, r).then((e) => e && p(e));
                        }, [l, c, x, r]),
                        (0, i.useEffect)(() => {
                            let e = 0;
                            return s && (g((0, k.Hv)(s)), (e = window.setInterval(() => g((0, k.Hv)(s)), T.qe))), () => window.clearInterval(e);
                        }, [s]),
                        (0, n.jsx)("li", {
                            ref: b,
                            className: v,
                            onContextMenuCapture: A,
                            children: (0, n.jsx)(Y.Z, {
                                onClick: t,
                                children: (0, n.jsx)(L, {
                                    nip05: f,
                                    picture: m,
                                    pubkey: r,
                                    userName: w,
                                    children: (0, n.jsxs)("div", { children: [(0, n.jsxs)("div", { className: v, children: [u === o ? "You: " : "", d || l] }), h ? "\xb7" : "", (0, n.jsx)("div", { children: h })] }),
                                }),
                            }),
                        })
                    );
                };
            let X = b.ZP.li([
                "background-color:rgba(68,69,70,50%);&:hover{background-color:rgba(68,69,70,80%);}button{color:inherit;display:flex;font-size:16px;font-weight:600;height:30px;place-content:center;place-items:center;&:disabled{opacity:25%;}}",
            ]),
                ee = { day: "Retrieve last 7 days of messages", month: "Retrieve last 90 days of messages", trimester: "Retrieve all messages", week: "Retrieve last 30 days of messages" };
            var et = ({ setSince: e }) => {
                let { timeScale: t, setTimeScale: r } = v(),
                    [o, a] = (0, i.useState)(!1);
                if ("infinite" === t) return (0, n.jsx)(n.Fragment, {});
                let l = (t, n) => {
                    e(t), r(n), a(!0), setTimeout(() => a(!1), 1e3);
                };
                return (0, n.jsx)(X, {
                    children: (0, n.jsx)(Y.Z, {
                        disabled: o,
                        onClick: () => {
                            switch (t) {
                                case "day":
                                    l(7 * T.xR, "week");
                                    break;
                                case "week":
                                    l(30 * T.xR, "month");
                                    break;
                                case "month":
                                    l(90 * T.xR, "trimester");
                                    break;
                                default:
                                    l(0, "infinite");
                            }
                        },
                        children: ee[t],
                    }),
                });
            };
            let er = b.ZP.div([
                "background:linear-gradient(hsla(207,100%,72%,50%),rgba(0,0,0,100%));border-bottom:1px solid rgb(57,58,59);color:#fff;display:flex;font-size:24px;font-weight:700;height:69px;max-height:69px;min-height:69px;padding:8px 15px;place-content:space-between;place-items:center;position:relative;text-shadow:1px 1px 1px #000;figure{display:flex;flex-direction:row-reverse;gap:15px;place-items:center;svg,img{aspect-ratio:1/1;border:2px solid #fff;border-radius:50%;cursor:pointer;height:38px;max-height:38px;max-width:38px;min-height:38px;min-width:38px;width:38px;path{cursor:pointer;}}div{display:flex;place-items:center;div.verified{svg{bottom:-3px;left:-5px;}}}}button:first-child{border-radius:5px;cursor:pointer;height:30px;padding-top:3px;width:30px;svg:first-child{background-color:rgb(0,0,0,50%);border-radius:5px;color:#fff;fill:#fff;height:24px;outline:4px solid rgb(0,0,0,50%);pointer-events:none;width:24px;}&:hover{svg:first-child{background-color:rgb(0,0,0,75%);outline:4px solid rgb(0,0,0,75%);}}}.relays{display:flex;flex-direction:row;left:0;padding-right:67px;place-content:flex-end;position:absolute;top:5px;width:100%;ol{background-color:rgb(0,0,0,50%);border-radius:10px;display:flex;gap:3px;max-width:calc(100% - 50px);overflow:hidden;padding:2px 4px;li{font-size:6.5px;}}}",
            ]);
            var en = ({ goHome: e, hideReadMessages: t, newChat: r, publicKey: o, relayUrls: a, selectedRecipientKey: l, setHideReadMessages: s }) => {
                let u = l === f.hN ? "" : l || o,
                    { banner: p, data: h, nip05: g, picture: b, userName: x = "New message" } = _(u),
                    { connectToRelays: m, connectedRelays: w } = D(),
                    y = (0, i.useMemo)(() => Object.fromEntries(w.map(({ url: e, status: t }) => [e, t])), [w]),
                    A = (0, i.useMemo)(() => (p ? { background: `linear-gradient(rgba(0, 0, 0, 0.10), rgba(0, 0, 0, 0.5)), url(${p}) center center / cover no-repeat local border-box border-box #000` } : {}), [p]),
                    { contextMenu: j } = (0, V.H)(),
                    { publish: E } = D(),
                    { setProfiles: S } = v(),
                    C = (0, i.useCallback)(
                        async (e) => {
                            if (0 !== Object.values(e).filter(Boolean).length)
                                try {
                                    let t = h ? Object.assign(h, e) : e,
                                        r = await (0, k.yO)(t);
                                    E(r), S((e) => ({ ...e, [u]: (0, k.vA)(o, t) }));
                                } catch { }
                        },
                        [h, u, o, E, S]
                    ),
                    { onContextMenuCapture: M } = (0, i.useMemo)(
                        () =>
                            j?.(() => [
                                ...k.w4(l || u, k.xp()),
                                ...(u && !l
                                    ? [
                                        T.Os,
                                        { action: () => C({ username: prompt("Username") || "" }), label: "Edit Username" },
                                        T.Os,
                                        { action: () => C({ picture: prompt("Picture URL") || "" }), label: "Edit Picture" },
                                        { action: () => C({ banner: prompt("Banner URL") || "" }), label: "Edit Banner" },
                                        T.Os,
                                        { action: () => s(!t), label: `${t ? "Show" : "Hide"} Read Messages` },
                                    ]
                                    : []),
                            ]),
                        [j, t, u, l, s, C]
                    );
                return (0, n.jsxs)(er, {
                    onContextMenuCapture: Q.nK,
                    style: A,
                    children: [
                        (0, n.jsx)(Y.Z, { onClick: l ? e : r, children: l ? (0, n.jsx)(d, {}) : (0, n.jsx)(c, {}) }),
                        !l &&
                        w.length > 0 &&
                        (0, n.jsx)("div", { className: "relays", children: (0, n.jsx)("ol", { children: a.sort().map((e) => (0, n.jsx)("li", { onClick: y[e] ? void 0 : () => m([e]), title: e, children: (0, k.p0)(y[e]) }, e)) }) }),
                        (0, n.jsx)(L, { nip05: g, onMouseDown: M, picture: b, pubkey: u, userName: x }),
                    ],
                });
            };
            let ei = b.ZP.div(
                [
                    "display:flex;place-items:center;textarea{",
                    " background-color:#3a3b3c;border-radius:20px;color:#b0b3b8;font-family:",
                    ";font-size:14px;height:35px;margin:12px 0 12px 12px;max-height:150px;overflow:hidden auto;padding:8px 14px 4px;resize:none;width:100%;&:disabled{&::placeholder{color:rgba(117,117,117,75%);}}}svg{cursor:pointer;fill:#0084ff;height:28px;margin:2px 12px 0 10px;width:28px;path{cursor:pointer;}&:hover{fill:rgb(0,132,255,75%);}}button{width:unset;&:disabled{svg{fill:#3a3b3c;}}}",
                ],
                (0, H.Z)(),
                ({ theme: e }) => e.formats.systemFont
            );
            var eo = ({ recipientPublicKey: e }) => {
                let { sendingEvent: t } = j(),
                    { publish: r } = D(),
                    o = (0, i.useRef)(null),
                    [a, l] = (0, i.useState)(!1),
                    s = e === f.hN,
                    c = (0, i.useCallback)(
                        async (n) => {
                            let i = await (0, k.$y)(n, e);
                            t(i);
                            try {
                                r(i);
                            } catch { }
                            o.current?.value && (o.current.value = ""), l(!1);
                        },
                        [r, e, t]
                    ),
                    d = (0, i.useCallback)(() => {
                        o.current && ((o.current.style.height = "0px"), (o.current.style.height = `${Math.max(35, o.current.scrollHeight + 4)}px`));
                    }, []);
                return (0, n.jsxs)(ei, {
                    children: [
                        (0, n.jsx)("textarea", {
                            ref: o,
                            disabled: s,
                            onChange: () => {
                                l(!!o.current?.value), d();
                            },
                            onKeyDown: async (e) => {
                                let { key: t, shiftKey: r } = e,
                                    n = o.current?.value.trim();
                                n && "Enter" === t && !r ? (e.preventDefault(), await c(n)) : l(!!n), d();
                            },
                            placeholder: "Type a message...",
                            autoFocus: !0,
                        }),
                        (0, n.jsx)(Y.Z, { disabled: s || !a, onClick: () => o.current?.value && c(o.current.value), onContextMenuCapture: Q.nK, children: (0, n.jsx)(u, {}) }),
                    ],
                });
            },
                ea = r(8897);
            let el = (0, b.ZP)(ea.m.div)(["display:flex;flex-direction:column;height:100%;"]),
                es = (0, b.ZP)(ea.m.ol)(
                    [
                        "",
                        ' background-color:#242526;height:100%;overflow-y:auto;position:absolute;scrollbar-gutter:auto;top:0;width:100%;li{border-radius:10px;color:#fff;cursor:pointer;margin:8px;padding:8px;position:relative;button{cursor:pointer;}&:hover{background-color:#3a3b3c;}&:focus,&.selected{background-color:rgba(45,136,255,20%);}figure{cursor:pointer;display:flex;gap:12px;width:calc(100% - 15px);div{cursor:pointer;}img,svg{aspect-ratio:1/1;border-radius:50%;cursor:pointer;height:56px;max-height:56px;max-width:56px;min-height:56px;min-width:56px;pointer-events:none;width:56px;}figcaption{cursor:pointer;display:flex;flex-direction:column;gap:3px;justify-content:center;overflow:hidden;place-items:flex-start;> span{color:#e4e6eb;cursor:pointer;font-size:17px;font-weight:600;}> div{color:#b0b3b8;cursor:pointer;display:flex;font-size:14px;gap:3px;width:100%;div:first-child{cursor:pointer;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;&.unread{color:#fff;font-weight:600;}}div:last-child{color:#8b8d92;cursor:pointer;padding-right:10px;}}}}&.unread::after{background-color:rgb(46,137,255);border-radius:50%;content:"";cursor:pointer;height:10px;pointer-events:none;position:absolute;right:8px;top:calc(50% - 5px);width:10px;}}',
                    ],
                    (0, H.Z)()
                ),
                ec = b.ZP.div(["display:flex;flex-direction:column;> div:nth-child(2){height:calc(100% - 69px);position:relative;}"]),
                eu = b.ZP.div(["input{background-color:#242526;border-bottom:1px solid rgb(57,58,59);color:#fff;padding:15px;width:100%;}"]);
            var ed = ({ setRecipientKey: e }) =>
                (0, n.jsx)(eu, {
                    children: (0, n.jsx)("input", {
                        onKeyDown: (t) => {
                            "Enter" === t.key && t.currentTarget.value && !e(t.currentTarget.value.trim()) && (t.currentTarget.value = "");
                        },
                        placeholder: "Type a Nostr address (npub/nprofile/hex)",
                        spellCheck: !1,
                        type: "text",
                        autoFocus: !0,
                    }),
                });
            let ep = ({ processId: e, publicKey: t, relayUrls: r, setSince: a, wellKnownNames: l }) => {
                let { setSeenEventIds: s } = v(),
                    [c, u] = (0, i.useState)(""),
                    [d, p] = (0, i.useState)(!1),
                    h = (0, i.useCallback)((e, t) => u((r) => ((r || e) && t && s((n) => [...new Set([...t.filter(({ pubkey: t }) => [e, r].includes(t)).map(({ id: e }) => e), ...n])]), e)), [s]),
                    { contactKeys: g, events: b, lastEvents: x, unreadEvents: m } = U(t, l),
                    w = (0, i.useCallback)(
                        (e) => {
                            let t = (0, k.Py)(e);
                            return t && h(t), !!t;
                        },
                        [h]
                    ),
                    {
                        processes: { [e]: y },
                        url: A,
                    } = (0, N.z)(),
                    { url: j } = y || {};
                return (
                    K(e, g.filter((e) => m.includes(x[e])).length),
                    (0, i.useEffect)(() => {
                        if (!j || (!j.startsWith("nostr:npub") && !j.startsWith("nostr:nprofile"))) return;
                        let [, t] = j.split("nostr:");
                        if (t) {
                            let r = (0, k.I)(t);
                            t !== r && (u(r), A(e, ""));
                        }
                    }, [e, A, j]),
                    (0, i.useEffect)(() => {
                        m && c && m.filter(({ pubkey: e }) => e === c).forEach(({ id: e }) => s((t) => [...new Set([e, ...t])]));
                    }, [c, s, m]),
                    (0, n.jsxs)(ec, {
                        children: [
                            (0, n.jsx)(en, { goHome: () => h("", b), hideReadMessages: d, newChat: () => h(f.hN), publicKey: t, relayUrls: r, selectedRecipientKey: c, setHideReadMessages: p }),
                            (0, n.jsx)("div", {
                                children: (0, n.jsx)(o.M, {
                                    initial: !1,
                                    presenceAffectsLayout: !1,
                                    children: c
                                        ? (0, n.jsxs)(el, { ...f.A5, children: [c === f.hN && (0, n.jsx)(ed, { setRecipientKey: w }), (0, n.jsx)(I, { recipientPublicKey: c }), (0, n.jsx)(eo, { recipientPublicKey: c })] }, "chat")
                                        : (0, n.jsxs)(
                                            es,
                                            {
                                                onContextMenu: Q.nK,
                                                ...f.r3,
                                                children: [
                                                    g.filter((e) => !d || m.includes(x[e])).map((e) => (0, n.jsx)(q, { lastEvent: x[e], onClick: () => h(e, b), pubkey: e, publicKey: t, unreadEvent: d || m.includes(x[e]) }, e)),
                                                    (0, n.jsx)(et, { setSince: a }),
                                                ],
                                            },
                                            "contacts"
                                        ),
                                }),
                            }),
                        ],
                    })
                );
            };
            var eh = ({ id: e }) => {
                let [t, r] = (0, i.useState)(() => T.xR),
                    o = (0, i.useMemo)(() => Math.floor((Date.now() - t) / 1e3), [t]),
                    [a, l] = (0, i.useState)(),
                    s = (0, i.useRef)(!1),
                    { names: c } = O(),
                    u = B();
                return (
                    (0, i.useEffect)(() => {
                        !s.current && u && ((s.current = !0), (0, k.x2)().then(l));
                    }, [u]),
                    u && a
                        ? (0, n.jsx)(R, {
                            relayUrls: a,
                            children: (0, n.jsx)(y, { children: (0, n.jsx)(S, { publicKey: u, since: o, children: (0, n.jsx)(ep, { processId: e, publicKey: u, relayUrls: a, setSince: r, wellKnownNames: c }) }) }),
                        })
                        : (0, n.jsx)(n.Fragment, { children: " " })
                );
            };
        },
        78848: function (e, t, r) {
            r.d(t, {
                O: function () {
                    return o;
                },
            });
            var n = r(67294),
                i = r(97836);
            let o = (e, t, r = !1) => {
                let o = (0, n.useRef)(!1),
                    [a, l] = (0, n.useState)(r);
                return (
                    (0, n.useEffect)(() => {
                        r ||
                            !e.current ||
                            o.current ||
                            ((o.current = !0),
                                new IntersectionObserver((e) => e.forEach(({ isIntersecting: e }) => l(e)), {
                                    root: ("object" == typeof t && t.current) || ("string" == typeof t && e.current.closest(t)) || e.current.parentElement,
                                    ...i.e5,
                                }).observe(e.current));
                    }, [r, e, t]),
                    a
                );
            };
        },
        18680: function (e, t, r) {
            r.d(t, {
                Z: function () {
                    return a;
                },
            });
            var n = r(10508),
                i = r(97836);
            let o = {
                dark: { active: "rgb(166, 166, 166)", blendMode: "color-burn", buttonHover: "rgb(55, 55, 55)", thumb: "rgb(77, 77, 77)", thumbHover: "rgb(122, 122, 122)", track: "rgb(23, 23, 23)" },
                light: { active: "rgb(96, 96, 96)", blendMode: "color-dodge", buttonHover: "rgb(218, 218, 218)", thumb: "rgb(205, 205, 205)", thumbHover: "rgb(166, 166, 166)", track: "rgb(240, 240, 240)" },
            };
            var a = (e = i.BQ, t = 0, r = 0, a = "dark") =>
                (0, n.iv)(
                    [
                        "overflow:auto;scrollbar-gutter:stable;@supports not selector(::-webkit-scrollbar){scrollbar-color:",
                        " ",
                        ";}&::-webkit-scrollbar{height:",
                        "px;width:",
                        "px;}&::-webkit-scrollbar-corner,&::-webkit-scrollbar-track{background-color:",
                        ";}&::-webkit-scrollbar-thumb{background-clip:padding-box;background-color:",
                        ";}&::-webkit-scrollbar-thumb:vertical{background-clip:padding-box;background-color:",
                        ";border-left:1px solid transparent;border-right:1px solid transparent;}&::-webkit-scrollbar-thumb:horizontal{border-bottom:1px solid transparent;border-top:1px solid transparent;}&::-webkit-scrollbar-thumb:hover{background-color:",
                        ";}&::-webkit-scrollbar-thumb:active{background-color:",
                        ";}&::-webkit-scrollbar-button:single-button{background-clip:padding-box;background-color:",
                        ";background-position:center 4px;background-repeat:no-repeat;background-size:10px;border:1px solid ",
                        ";display:block;height:",
                        ";&:hover{background-color:",
                        ";}&:active{background-color:",
                        ";}}&::-webkit-scrollbar-button:single-button:vertical:decrement,&::-webkit-scrollbar-button:single-button:vertical:increment{background-position-x:",
                        ";background-position-y:",
                        ";background-size:16px;border-bottom:0;border-top:0;image-rendering:pixelated;}&::-webkit-scrollbar-button:single-button:vertical:decrement{background-image:url(",
                        ");}&::-webkit-scrollbar-button:single-button:vertical:increment{background-image:url(",
                        ");}&::-webkit-scrollbar-button:single-button:horizontal:decrement,&::-webkit-scrollbar-button:single-button:horizontal:increment{background-position:center;background-size:16px;border-left:0;border-right:0;image-rendering:pixelated;}&::-webkit-scrollbar-button:single-button:horizontal:decrement{background-image:url(",
                        ");}&::-webkit-scrollbar-button:single-button:horizontal:increment{background-image:url(",
                        ");}&::-webkit-scrollbar-button:single-button:vertical:decrement:active,&::-webkit-scrollbar-button:single-button:vertical:increment:active,&::-webkit-scrollbar-button:single-button:horizontal:decrement:active,&::-webkit-scrollbar-button:single-button:horizontal:increment:active{background-blend-mode:",
                        ";}",
                    ],
                    o[a].thumb,
                    o[a].track,
                    e,
                    e,
                    o[a].track,
                    o[a].thumb,
                    o[a].thumb,
                    o[a].thumbHover,
                    o[a].active,
                    o[a].track,
                    o[a].track,
                    e ? `${e}px` : "initial",
                    o[a].buttonHover,
                    o[a].active,
                    0 === t ? "center" : `${t}px`,
                    0 === r ? "center" : `${r}px`,
                    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAKElEQVR42mOgMRgF6enp/ynSDMMUaEZgsjST5RJsikk2AKc4bcAoAADI7y5FsB5j/QAAAABJRU5ErkJggg==",
                    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAK0lEQVR42mOgARgF6enp/0kRZ8KvGMEnyQUwjMwn0xBMzWQZQlmA0h6MAgAuqCnfdOk/ZQAAAABJRU5ErkJggg==",
                    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAG0lEQVR42mPAD0ZBenr6fxge4ppHuiGEwSgAAGJiLkXUVlYDAAAAAElFTkSuQmCC",
                    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAG0lEQVR42mPADkZBenr6fxgeZoYMV82Ug1EAAPiTLkWjutmQAAAAAElFTkSuQmCC",
                    o[a].blendMode
                );
        },
    },
]);



// "use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8370],{49170:function(e,t,r){r.d(t,{A5:function(){return f},F2:function(){return c},Jj:function(){return o},KE:function(){return l},L7:function(){return d},NJ:function(){return h},TZ:function(){return i},T_:function(){return g},UF:function(){return a},fN:function(){return p},hN:function(){return u},r3:function(){return x},r9:function(){return m},zi:function(){return s}});var n=r(97836);let i=["wss://nos.lol","wss://nostr.mom","wss://public.relaying.io","wss://relay1.nostrchat.io","wss://relayable.org"],o=0,a=4,l="nostr_private_key",s="nostr_public_key",c="/Program Files/Messenger/notification.mp3",u="?",d="/.well-known/nostr.json",p=`${n.Sd}/seenEvents.json`,h=n.qe/n.i2*30,g={hour:"numeric",hour12:!0,minute:"numeric"},b={bounce:0,duration:.3,type:"spring"},x={animate:{transform:"translateX(0%)"},exit:{transform:"translateX(100%)"},initial:{transform:"translateX(100%)"},...b},f={animate:{transform:"translateX(0%)"},exit:{transform:"translateX(-100%)"},initial:{transform:"translateX(-100%)"},...b},m=16},3331:function(e,t,r){r.d(t,{$y:function(){return A},Hv:function(){return m},I:function(){return l},J1:function(){return c},Py:function(){return S},RW:function(){return N},SB:function(){return D},V7:function(){return z},WB:function(){return h},WU:function(){return f},Zw:function(){return T},_U:function(){return b},ov:function(){return d},p0:function(){return R},p5:function(){return u},uG:function(){return Z},vA:function(){return E},w4:function(){return w},x2:function(){return a},xp:function(){return s},yO:function(){return k}});var n=r(11093),i=r(49170),o=r(97836);let a=async()=>{if(window.nostr?.getRelays)try{return[...new Set([...i.TZ,...Object.entries(await window.nostr.getRelays()).map(([e])=>e.endsWith("/")?e.slice(0,-1):e)])]}catch{}return i.TZ},l=e=>{if(e.startsWith("nprofile")||e.startsWith("npub")||e.startsWith("nsec"))try{let{data:t}=n.uD.decode(e);if("string"==typeof t)return t;if("object"==typeof t&&"string"==typeof t.pubkey)return t.pubkey}catch{}return e},s=()=>localStorage.getItem(i.KE)||"",c=async()=>{let e=localStorage.getItem(i.zi)||"",t="";try{t=await window.nostr?.getPublicKey()||""}catch{}return t||e||""},u=e=>{if(e)return l(e);let t=(0,n.wQ)(),r=(0,n.$3)(t);return localStorage.setItem(i.zi,r),localStorage.setItem(i.KE,t),l(r)},d=(e=[])=>{let[,t=""]=e.find(([e])=>"p"===e)||[];return t},p={},h=async(e,t,r)=>{if(p[e]||!1===p[e])return p[e];p[e]=t;try{let i=await (window.nostr?.nip04?window.nostr.nip04.decrypt(r,t):n._J.decrypt(l(s()),r,t));return p[e]=i,i}catch{return p[e]="",""}},g=async(e,t)=>{try{return await (window.nostr?.nip04?window.nostr.nip04.encrypt(t,e):n._J.encrypt(l(s()),t,e))}catch{}return""},b=(e,t,r=0)=>({enabled:!!e||!!t,filter:[{...t?{"#p":[t]}:{},authors:[e],kinds:[i.UF],since:r},{...t?{authors:[t]}:{},"#p":[e],kinds:[i.UF],since:r}]}),x=(e,t)=>e.created_at-t.created_at,f=(e,t)=>t.created_at-e.created_at,m=e=>{let t=Math.floor((Date.now()-new Date(e*o.i2).getTime())/1e3),r=Math.floor(t/60),n=Math.floor(r/60),i=Math.floor(n/24),a=Math.floor(i/7);return a>0?`${a}w`:i>0?`${i}d`:n>0?`${n}h`:r>0?`${r}m`:t<10?"now":`${t}s`},w=(e,t)=>[{action:()=>navigator.clipboard?.writeText(n.uD.npubEncode(e)),label:"Copy npub address"},...t?[{action:()=>navigator.clipboard?.writeText(n.uD.nsecEncode(t)),label:"Copy nsec address"}]:[{action:()=>navigator.clipboard?.writeText(e),label:"Copy hex address"}]],v=async e=>{let t=e;return t.pubkey=window.nostr?.getPublicKey?await window.nostr.getPublicKey():(0,n.$3)(s()),t.id=(0,n.s_)(e),window.nostr?.signEvent?t=await window.nostr.signEvent(t):t.sig=(0,n.o$)(t,l(s())),(0,n.Z5)(t)&&(0,n.uM)(t)&&(t[n.q9]=!0),t},y=()=>Math.floor(Date.now()/1e3),k=async e=>v({content:JSON.stringify(e),created_at:y(),kind:i.Jj,tags:[]}),A=async(e,t)=>v({content:await g(e,t),created_at:y(),kind:i.UF,tags:[["p",t]]}),j=new Set(["http","https","data"]),E=(e,t,r)=>{let{about:i,banner:o,display_name:a,name:l,nip05:s,npub:c,picture:u,username:d,website:p}=t||{},[h=""]=u?.split(":")||[];return{about:i,banner:o,created_at:r,data:t,nip05:s,picture:j.has(h)?u:void 0,userName:a||l||d||(c||(e.startsWith("npub")?e:n.uD.npubEncode(e))).slice(0,12),website:p}},S=e=>{let t=e.startsWith("nprofile"),r=e.startsWith("nsec");if(t||r||e.startsWith("npub"))try{let{data:i}=n.uD.decode(e)||{},o=t?i?.pubkey:i;return r?(0,n.$3)(o):o}catch{return""}try{return l(n.uD.npubEncode(e))}catch{return""}},C={},M=new Set([408,504]),D=async(e,t)=>{if(!e||!t)return"";try{let[r,n]=e.split("@");if(C[t]===n)return n;if("number"==typeof C[t]&&!M.has(C[t]))return"";let o=await fetch(`https://${n}${i.L7}?name=${r}`);if(o.ok){let{names:e={}}=await o.json()||{},i=!1;if("_"===r){let[n,...o]=Object.values(e);i=(0===o.length?n:e[r])===t}else e[r]&&(i=e[r]===t);return i&&(C[t]=n),i?n:""}C[t]=o.status}catch{C[t]=0}return""},R=e=>{switch(e){case WebSocket.prototype.CONNECTING:return"\uD83D\uDFE1";case WebSocket.prototype.OPEN:return"\uD83D\uDFE2";case WebSocket.prototype.CLOSING:return"\uD83D\uDFE0";default:return"\uD83D\uDD34"}},N=e=>e.replace(/https?:\/\/\S+\.(?:png|jpg|jpeg|gif|webp)/gi,e=>`<img decoding="async" loading="lazy" src="${e}" />`),z=e=>e.replace(/\n/g,"<br />"),T=e=>{let t=new Date(e*o.i2),r=new Date,n=new Date(r.getFullYear(),r.getMonth(),r.getDate()).getTime(),a=new Date(r.getFullYear(),r.getMonth(),r.getDate()-1).getTime(),l=t.getTime(),s=t.toLocaleString("en-US",i.T_);return l>n?s:l>a?`Yesterday at ${s}`:l>n-6*o.xR?t.toLocaleString("en-US",{...i.T_,weekday:"long"}):t.toLocaleString("en-US",{...i.T_,day:"numeric",month:"short",year:"numeric"})},Z=e=>{if(0===e.length)return[];let[t,...r]=e.sort(x),n=[[T(t.created_at),[t]]];return r.forEach(e=>{let{created_at:t}=e,[,r]=n[n.length-1],{created_at:o}=r[r.length-1];Math.abs(t-o)<i.NJ?r.push(e):n.push([T(t),[e]])}),n}},78370:function(e,t,r){r.r(t),r.d(t,{default:function(){return eh}});var n=r(85893),i=r(67294),o=r(51526),a=r(5152),l=r.n(a);let s=(0,i.memo)(()=>(0,n.jsx)("svg",{style:{backgroundColor:"#cacdd2"},viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M256 281.602c-151.55 0-204.8 76.796-204.8 128v76.796h409.6v-76.796c0-51.204-53.25-128-204.8-128ZM371.2 140.8c0 63.622-51.575 115.2-115.2 115.2s-115.2-51.578-115.2-115.2c0-63.624 51.575-115.198 115.2-115.198S371.2 77.176 371.2 140.8Zm0 0",fill:"#fff",transform:"translate(0, 50)"})})),c=(0,i.memo)(()=>(0,n.jsxs)("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:[(0,n.jsx)("path",{d:"M21.1 2.9c-1.1-1.1-3-1.1-4.2 0l-8.1 7.9c-.7.7-1.2 1.6-1.4 2.6L7 15.6c-.1.3 0 .7.3.9.2.2.4.3.7.3h.2l2.2-.4c1-.2 1.9-.7 2.6-1.4l8.1-8c.6-.5.9-1.3.9-2.1s-.3-1.5-.9-2zm-9.4 10.6c-.4.4-1 .7-1.6.8l-.8.2.2-.7c.1-.6.4-1.1.9-1.6l6.2-6.1L18 7.4l-6.3 6.1zm8-7.9-.4.4-1.4-1.3.4-.4c.2-.2.5-.3.7-.3.3 0 .5.1.7.3.2.2.3.4.3.6 0 .2 0 .5-.3.7z"}),(0,n.jsx)("path",{d:"M20 9.9c-.6 0-1 .4-1 1V16c0 1.7-1.3 3-3 3H8c-1.7 0-3-1.3-3-3V8c0-1.7 1.3-3 3-3h5c.6 0 1-.4 1-1s-.4-1-1-1H8C5.2 3 3 5.2 3 8v8c0 2.8 2.2 5 5 5h8c2.8 0 5-2.2 5-5v-5.1c0-.5-.4-1-1-1z"})]})),u=(0,i.memo)(()=>(0,n.jsx)("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"m16.692 12.474-13.186.786c-.314 0-.47.157-.47.314l-1.884 6.441c-.314.786-.162 1.875.627 2.505.631.47 1.727.58 2.355.323l17.58-8.798c.942-.47 1.413-1.413 1.256-2.356a2.496 2.496 0 0 0-1.255-1.571L4.134 1.163c-.785-.263-1.727-.157-2.355.315-.784.628-.941 1.57-.627 2.513l1.883 6.441c0 .157.314.314.471.314l13.186.786s.47 0 .47.471-.47.471-.47.471Z"})})),d=(0,i.memo)(()=>(0,n.jsx)("svg",{viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M244 400 100 256l144-144M120 256h292",style:{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"50px"}})})),p=(0,i.memo)(()=>(0,n.jsxs)("svg",{viewBox:"-4 0 27 19",xmlns:"http://www.w3.org/2000/svg",children:[(0,n.jsx)("path",{d:"M7.844 17.563c1.039 1.046 2.031 1.039 3.078 0l1.172-1.172c.11-.11.203-.141.344-.141h1.656c1.476 0 2.18-.703 2.18-2.18v-1.656c0-.14.038-.242.14-.344l1.172-1.18c1.047-1.038 1.039-2.03 0-3.07l-1.172-1.172a.454.454 0 0 1-.14-.343V4.648c0-1.476-.704-2.18-2.18-2.18h-1.656a.443.443 0 0 1-.344-.14l-1.172-1.172C9.875.11 8.882.11 7.844 1.164L6.672 2.328a.443.443 0 0 1-.344.14H4.672c-1.477 0-2.18.688-2.18 2.18v1.657c0 .14-.039.242-.14.343L1.18 7.82c-1.047 1.04-1.04 2.032 0 3.07l1.172 1.18c.101.102.14.203.14.344v1.656c0 1.477.703 2.18 2.18 2.18h1.656c.14 0 .234.031.344.14l1.172 1.172Z",style:{stroke:"currentColor",strokeWidth:"3px"}}),(0,n.jsx)("path",{d:"M7.844 17.563c1.039 1.046 2.031 1.039 3.078 0l1.172-1.172c.11-.11.203-.141.344-.141h1.656c1.476 0 2.18-.703 2.18-2.18v-1.656c0-.14.038-.242.14-.344l1.172-1.18c1.047-1.038 1.039-2.03 0-3.07l-1.172-1.172a.454.454 0 0 1-.14-.343V4.648c0-1.476-.704-2.18-2.18-2.18h-1.656a.443.443 0 0 1-.344-.14l-1.172-1.172C9.875.11 8.882.11 7.844 1.164L6.672 2.328a.443.443 0 0 1-.344.14H4.672c-1.477 0-2.18.688-2.18 2.18v1.657c0 .14-.039.242-.14.343L1.18 7.82c-1.047 1.04-1.04 2.032 0 3.07l1.172 1.18c.101.102.14.203.14.344v1.656c0 1.477.703 2.18 2.18 2.18h1.656c.14 0 .234.031.344.14l1.172 1.172Zm.242-4.204a.883.883 0 0 1-.664-.28l-2.5-2.798a.778.778 0 0 1-.203-.531c0-.469.336-.805.82-.805.266 0 .461.086.633.274l1.883 2.101 3.765-5.375c.188-.265.39-.375.703-.375.485 0 .829.336.829.79a.936.936 0 0 1-.18.515l-4.383 6.148a.831.831 0 0 1-.703.336Z",fill:"#0095f6"})]})),h=(0,i.memo)(()=>(0,n.jsx)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"m23.297 9.297 1.406 1.406L13 22.406l-5.703-5.703 1.406-1.406L13 19.594zM16 0q2.203 0 4.25.57t3.828 1.609 3.242 2.5 2.5 3.242 1.609 3.828.57 4.25-.57 4.25-1.609 3.828-2.5 3.242-3.242 2.5-3.828 1.609-4.25.57-4.25-.57-3.828-1.609-3.242-2.5-2.5-3.242-1.609-3.82-.57-4.258q0-2.203.57-4.25T2.18 7.921t2.5-3.242 3.242-2.5T11.742.57 16 0zm0 30q1.922 0 3.711-.5t3.344-1.414 2.836-2.195 2.195-2.836 1.414-3.336T30 16q0-1.922-.5-3.711t-1.414-3.344-2.195-2.836-2.836-2.195T19.711 2.5 16 2t-3.711.5-3.344 1.414-2.836 2.195-2.195 2.836T2.5 12.289 2 16t.5 3.711 1.414 3.344 2.195 2.836 2.836 2.195 3.336 1.414T16 30z"})})),g=(0,i.memo)(()=>(0,n.jsx)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M16 0q2.203 0 4.25.57t3.82 1.617 3.234 2.508 2.508 3.234 1.617 3.82.57 4.25-.57 4.25-1.617 3.82-2.508 3.234-3.234 2.508-3.82 1.617-4.25.57-4.25-.57-3.82-1.617-3.234-2.508-2.508-3.234-1.617-3.82-.57-4.25.57-4.25 1.617-3.82 2.508-3.234T7.93 2.187 11.75.57 16 0zm9.422 10.703-2.125-2.125L13 18.875l-4.297-4.297-2.125 2.125L13 23.125z"})}));var b=r(10508);let x=b.ZP.figure(["> div{cursor:",";position:relative;> img,> svg{cursor:inherit;}div.verified{cursor:inherit;svg{border:none;bottom:2px;color:#000;cursor:inherit;fill:#000;height:18px;left:-2px;max-height:auto;max-width:18px;min-height:auto;min-width:18px;position:absolute;width:18px;path{cursor:inherit;}}}}"],({$clickable:e})=>e?"pointer":"default");var f=r(49170),m=r(20063);let w=(0,i.createContext)({}),v=()=>(0,i.useContext)(w),y=(0,i.memo)(({children:e})=>{let{readFile:t,writeFile:r}=(0,m.o)(),[o,a]=(0,i.useState)("day"),[l,s]=(0,i.useState)([]),[c,u]=(0,i.useState)([]),[d,p]=(0,i.useState)({}),h=(0,i.useRef)(!1);return(0,i.useEffect)(()=>{t&&!h.current&&(h.current=!0,t(f.fN).then(e=>{if(e)try{s(JSON.parse(e.toString()))}catch{}}))},[t]),(0,i.useEffect)(()=>{r&&h.current&&r(f.fN,JSON.stringify(l),!0)},[l,r]),(0,n.jsx)(w.Provider,{value:(0,i.useMemo)(()=>({outgoingEvents:c,profiles:d,seenEventIds:l,setOutgoingEvents:u,setProfiles:p,setSeenEventIds:s,setTimeScale:a,timeScale:o}),[c,d,l,o]),children:e})});var k=r(3331);let A=(0,i.createContext)({events:[],publicKey:"",sendingEvent:()=>{}}),j=()=>(0,i.useContext)(A),E=e=>{let{outgoingEvents:t}=v(),{events:r,publicKey:n}=j(),o=Z((0,k._U)(n,e)),[a,l]=(0,i.useState)([]);return(0,i.useEffect)(()=>{let t=[...o,...r.filter(({pubkey:t,tags:r})=>{let i=t===e,o=(0,k.ov)(r)===e;return e===n?i&&o:i||o})].filter((e,t,r)=>r.findIndex(({id:t})=>t===e.id)===t),i=(0,k.uG)(t);(i.length!==a.length||t.length!==a.reduce((e,[,t])=>[...e,...t],[]).length)&&l(i)},[o,r,a,n,e]),{allEventsReceived:(0,i.useMemo)(()=>!t.some(({tags:t})=>(0,k.ov)(t)===e),[t,e]),messages:a}},S=(0,i.memo)(({children:e,publicKey:t,since:r})=>{let o=Z((0,k._U)(t,"",r)),{outgoingEvents:a,setOutgoingEvents:l}=v(),s=(0,i.useCallback)(e=>l(t=>[...t,e]),[l]),[c,u]=(0,i.useState)(o);return(0,i.useEffect)(()=>{let e=[...o,...a.filter(e=>!o.some(({id:t})=>t===e.id))];e.length!==c.length&&u(e)},[o,c,a]),(0,i.useEffect)(()=>{a.forEach(e=>{o.some(({id:t})=>t===e.id)&&l(t=>t.filter(({id:t})=>t!==e.id))})},[o,a,l]),(0,n.jsx)(A.Provider,{value:(0,i.useMemo)(()=>({events:c,publicKey:t,sendingEvent:s}),[c,t,s]),children:e})});var C=r(11093);let M=(0,i.createContext)({connectToRelays:()=>{},connectedRelays:[],publish:()=>{}}),D=()=>(0,i.useContext)(M),R=({children:e,relayUrls:t})=>{let[r,o]=(0,i.useState)({}),[a,l]=(0,i.useState)([]),s=(0,i.useCallback)(e=>{0!==e.length&&o(t=>{let r={...t};return e.forEach(e=>{r[e]?.close(),delete r[e]}),r})},[]),c=(0,i.useCallback)(e=>e.forEach(e=>{if(r[e])return;let t=(0,C.L6)(e);t.on("connect",()=>o(r=>({...r,[e]:t}))),t.on("disconnect",()=>o(({[e]:t,...r})=>r)),t.on("error",console.error),t.connect()}),[r]),u=(0,i.useCallback)(e=>{Object.values(r).map(t=>t.publish(e))},[r]);return(0,i.useEffect)(()=>{t.length===a.length&&t.every(e=>a.includes(e))||(s(a.filter(e=>!t.includes(e))),c(t),l(t))},[c,s,a,t]),(0,n.jsx)(M.Provider,{value:(0,i.useMemo)(()=>({connectToRelays:c,connectedRelays:Object.values(r),publish:u}),[c,r,u]),children:e})};var N=r(58437),z=r(37176),T=r(97836);let Z=({enabled:e=!0,filter:t,onEvent:r})=>{let{connectedRelays:n}=D(),[o,a]=(0,i.useState)([]),l=(0,i.useRef)({}),s=(0,i.useMemo)(()=>JSON.stringify(t),[t]),c=(0,i.useRef)(0),u=(0,i.useCallback)((e,t)=>{let n=e.sub(t);return n.on("event",e=>{l.current[e.id]||(l.current[e.id]=e,r?.(e),c.current&&window.clearTimeout(c.current),c.current=window.setTimeout(()=>{c.current=0,a(t=>t.some(({id:t})=>t===e.id)?t:Object.values(l.current))},c.current?f.r9:0))}),n},[r]);return(0,i.useEffect)(()=>{if(!e)return;let t=n.map(e=>({relay:e,sub:u(e,JSON.parse(s))}));return()=>t.forEach(({sub:e})=>e.unsub())},[n,e,s,u]),o},O=()=>{let[e,t]=(0,i.useState)(),r=(0,i.useCallback)(async e=>{let r=await fetch(e);if(r.ok){let{names:e={}}=await r.json()||{};t({names:e})}return r.ok},[]),n=(0,i.useCallback)(async()=>{await r(f.L7)||t({relays:{}})},[r]);return(0,i.useEffect)(()=>{e||n().then(e=>e)},[n,e]),e||{}},U=(e,t)=>{let r=(0,i.useMemo)(()=>[...T.PACKAGE_DATA?.author?.npub?new Set([(0,k.I)(T.PACKAGE_DATA.author.npub),...Object.values(t||{})]):Object.values(t||{})].filter(Boolean).map(e=>(0,k.I)(e)),[t]),{events:n}=j(),o=(0,i.useMemo)(()=>{let t=new Set(n.sort(k.WU).map(({pubkey:t,tags:r})=>t===e?(0,k.ov)(r)||"":t).filter(e=>!r.includes(e)));return[...r,...t].filter(t=>t!==e)},[n,r,e]),a=(0,i.useMemo)(()=>Object.fromEntries(o.map(e=>[e,n.filter(t=>[t.pubkey,(0,k.ov)(t.tags)].includes(e)).sort(k.WU)[0]])),[o,n]),{seenEventIds:l}=v(),s=(0,i.useMemo)(()=>n.filter(({id:t,pubkey:r})=>r!==e&&!l.includes(t)),[n,e,l]);return{contactKeys:o,events:n,lastEvents:a,unreadEvents:s}},B=()=>{let[e,t]=(0,i.useState)(""),r=(0,i.useRef)(!1);return(0,i.useEffect)(()=>{r.current||(r.current=!0,(0,k.J1)().then(k.p5).then(t))},[]),e},K=(e,t)=>{let[r,n]=(0,i.useState)(t),{title:o}=(0,N.z)(),[a]=e.split(T.CC);(0,i.useEffect)(()=>{o(a,`${z.Z[a]?.title}${t>0?` (${t})`:""}`)},[a,o,t]),(0,i.useEffect)(()=>{t>r&&new Audio(f.F2).play().then(e=>e),n(t)},[r,t])},P=(e,t)=>{let[r,n]=(0,i.useState)("");return(0,i.useEffect)(()=>{(0,k.SB)(e,t).then(n)},[e,t]),r},_=(e,t=!0)=>{let{profiles:r,setProfiles:n}=v(),o=(0,i.useCallback)(({content:t,created_at:i,pubkey:o})=>{if(!(!e||e!==o||r?.[e]?.created_at>=i))try{let r=JSON.parse(t);r&&n(t=>({...t,[e]:(0,k.vA)(e,r,i)}))}catch{}},[r,e,n]);return Z((0,i.useMemo)(()=>({enabled:!!e&&t,filter:[{authors:[e],kinds:[f.Jj]}],onEvent:o}),[t,o,e])),e?r[e]||(0,k.vA)(e):{}};var L=({children:e,nip05:t,onMouseDown:r,picture:o,pubkey:a,userName:l="Unknown"})=>{let c=P(t,a),[u,d]=(0,i.useState)("");return(0,n.jsxs)(x,{$clickable:!!r,children:[(0,n.jsxs)("div",{onMouseDown:r,children:[o&&(0,n.jsx)("img",{alt:l,onLoad:()=>d(o),src:o,style:u===o?{}:{position:"absolute",visibility:"hidden"}}),(!o||u!==o)&&(0,n.jsx)(s,{}),c&&(0,n.jsx)("div",{className:"verified",title:c,children:(0,n.jsx)(p,{})})]}),(0,n.jsxs)("figcaption",{children:[(0,n.jsx)("span",{children:l}),e]})]})};let $=b.ZP.li(["figure{display:flex;flex-direction:column;place-items:center;img,svg{aspect-ratio:1/1;border:2px solid #fff;border-radius:50%;height:72px;margin:16px 0 8px;max-height:72px;max-width:72px;min-height:72px;min-width:72px;width:72px;}div.verified{svg{bottom:-4px !important;height:30px !important;left:-6px !important;max-height:30px !important;max-width:30px !important;min-height:30px !important;min-width:30px !important;width:30px !important;}}figcaption{color:#fff;display:flex;flex-direction:column;font-size:17px;font-weight:600;padding-bottom:10px;place-items:center;text-align:center;div.about{color:rgb(255,255,255,55%);font-size:10px;font-weight:400;overflow-wrap:break-word;padding-top:5px;width:60%;}div.encryption{background-color:rgb(255,255,255,15%);border-radius:8px;display:flex;flex-direction:column;font-size:12px;font-weight:600;gap:2px;margin:10px;padding:10px 20px;span:last-child{font-weight:100;}}}}"]);var W=r(78848),F=({publicKey:e})=>{let t=(0,i.useRef)(null),{about:r,nip05:o,picture:a,userName:l}=_(e,(0,W.O)(t));return(0,n.jsx)($,{ref:t,children:(0,n.jsxs)(L,{nip05:o,picture:a,pubkey:e,userName:l,children:[r&&(0,n.jsx)("div",{className:"about",children:r}),(0,n.jsxs)("div",{className:"encryption",children:[(0,n.jsx)("span",{children:"\uD83D\uDD10 End-to-end encrypted"}),(0,n.jsx)("span",{children:"Messages are secured with AES256-CBC encryption."})]})]})})},H=r(18680);let J=b.ZP.ol(["",' height:100%;overflow-x:auto;scrollbar-gutter:auto;li:not(:first-child){border-radius:15px;color:#fff;list-style:none;margin:12px;padding:10px 12px;position:relative;.status{bottom:-4px;position:absolute;right:-15px;svg{fill:#ced7e0;height:12px;width:12px;}}&.sent{background-color:#0084ff;margin-left:65px;margin-right:20px;}&.received{background-color:#3e4042;margin-left:40px;margin-right:50px;}&[data-timestamp]{margin-top:50px;&:nth-child(2){margin-top:30px;}&::before{color:#8b8d92;content:attr(data-timestamp);font-size:11px;font-weight:600;left:0;position:absolute;text-align:center;top:-28px;width:100%;}&.sent{&::before{margin-left:-65px;margin-right:-12px;width:calc(100% + 65px + 12px);}}&.received{&::before{margin-left:-40px;margin-right:-50px;width:calc(100% + 90px);}}}div{cursor:auto;overflow:hidden;user-select:text;word-wrap:break-word;img{border-radius:5px;margin:6px 0;object-fit:unset;width:100%;}&.avatar{bottom:-24px;left:-30px;position:absolute;img,svg{aspect-ratio:1/1;border-radius:50%;bottom:5px;height:22px;margin:15px 0;max-height:22px;max-width:22px;min-height:22px;min-width:22px;position:relative;width:22px;}}}&.cant-decrypt{background-color:#910000;position:relative;&::after{content:"\uD83D\uDD10";font-size:12px;left:6px;margin-left:0 !important;position:absolute;text-align:right;top:-4px;width:100% !important;}}}'],(0,H.Z)());var Q=r(6484);let G=l()(()=>Promise.all([r.e(7856,"high"),r.e(7905,"high")]).then(r.bind(r,7905)),{loadableGenerated:{webpack:()=>[7905]}});var I=({recipientPublicKey:e})=>{let{publicKey:t}=j(),{allEventsReceived:r,messages:o}=E(e),[a,l]=(0,i.useState)({}),c=(0,i.useCallback)(()=>[...o].reverse().forEach(([,t])=>[...t].reverse().forEach(({content:t,id:r})=>(0,k.WB)(r,t,e).then(e=>l(t=>({...t,[r]:e||!1}))))),[o,e]),u=(0,i.useRef)(null),d=e===f.hN,{picture:p,userName:b}=_(d?"":e);return(0,i.useEffect)(()=>{o&&(c(),u.current?.scrollTo(0,u.current.scrollHeight))},[c,o]),(0,n.jsx)(J,{ref:u,children:!d&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(F,{publicKey:e}),o.map(([e,i],l)=>i.map(({created_at:c,id:u,pubkey:d,content:x},f)=>(0,n.jsxs)("li",{className:(0,Q.Wy)({"cant-decrypt":!1===a[u],received:t!==d,sent:t===d}),"data-timestamp":0===f?e:void 0,title:(0,k.Zw)(c),children:[t!==d&&(0,n.jsx)("div",{className:"avatar",children:p?(0,n.jsx)("img",{alt:b,decoding:"async",src:p}):(0,n.jsx)(s,{})}),(0,n.jsx)(G,{content:a[u]||x,decrypted:"string"==typeof a[u]}),t===d&&l===o.length-1&&f===i.length-1&&(0,n.jsx)("div",{className:"status",title:r?"Sent":"Sending",children:r?(0,n.jsx)(g,{}):(0,n.jsx)(h,{})})]},u)))]})})},V=r(7502),Y=r(67278),q=({lastEvent:e,onClick:t,pubkey:r,publicKey:o,unreadEvent:a})=>{let{content:l="",created_at:s=0,id:c,pubkey:u}=e||{},[d,p]=(0,i.useState)(""),[h,g]=(0,i.useState)(""),b=(0,i.useRef)(null),x=(0,W.O)(b),{nip05:f,picture:m,userName:w}=_(r,x),v=a?"unread":void 0,{contextMenu:y}=(0,V.H)(),{onContextMenuCapture:A}=(0,i.useMemo)(()=>y?.(()=>[{action:t,icon:"\uD83D\uDD10",label:"Start end-to-end encrypted chat"},T.Os,...k.w4(r)]),[y,t,r]);return(0,i.useEffect)(()=>{l&&x&&(0,k.WB)(c,l,r).then(e=>e&&p(e))},[l,c,x,r]),(0,i.useEffect)(()=>{let e=0;return s&&(g((0,k.Hv)(s)),e=window.setInterval(()=>g((0,k.Hv)(s)),T.qe)),()=>window.clearInterval(e)},[s]),(0,n.jsx)("li",{ref:b,className:v,onContextMenuCapture:A,children:(0,n.jsx)(Y.Z,{onClick:t,children:(0,n.jsx)(L,{nip05:f,picture:m,pubkey:r,userName:w,children:(0,n.jsxs)("div",{children:[(0,n.jsxs)("div",{className:v,children:[u===o?"You: ":"",d||l]}),h?"\xb7":"",(0,n.jsx)("div",{children:h})]})})})})};let X=b.ZP.li(["background-color:rgba(68,69,70,50%);&:hover{background-color:rgba(68,69,70,80%);}button{color:inherit;display:flex;font-size:16px;font-weight:600;height:30px;place-content:center;place-items:center;&:disabled{opacity:25%;}}"]),ee={day:"Retrieve last 7 days of messages",month:"Retrieve last 90 days of messages",trimester:"Retrieve all messages",week:"Retrieve last 30 days of messages"};var et=({setSince:e})=>{let{timeScale:t,setTimeScale:r}=v(),[o,a]=(0,i.useState)(!1);if("infinite"===t)return(0,n.jsx)(n.Fragment,{});let l=(t,n)=>{e(t),r(n),a(!0),setTimeout(()=>a(!1),1e3)};return(0,n.jsx)(X,{children:(0,n.jsx)(Y.Z,{disabled:o,onClick:()=>{switch(t){case"day":l(7*T.xR,"week");break;case"week":l(30*T.xR,"month");break;case"month":l(90*T.xR,"trimester");break;default:l(0,"infinite")}},children:ee[t]})})};let er=b.ZP.div(["background:linear-gradient(hsla(207,100%,72%,50%),rgba(0,0,0,100%));border-bottom:1px solid rgb(57,58,59);color:#fff;display:flex;font-size:24px;font-weight:700;height:69px;max-height:69px;min-height:69px;padding:8px 15px;place-content:space-between;place-items:center;position:relative;text-shadow:1px 1px 1px #000;figure{display:flex;flex-direction:row-reverse;gap:15px;place-items:center;svg,img{aspect-ratio:1/1;border:2px solid #fff;border-radius:50%;cursor:pointer;height:38px;max-height:38px;max-width:38px;min-height:38px;min-width:38px;width:38px;path{cursor:pointer;}}div{display:flex;place-items:center;div.verified{svg{bottom:-3px;left:-5px;}}}}button:first-child{border-radius:5px;cursor:pointer;height:30px;padding-top:3px;width:30px;svg:first-child{background-color:rgb(0,0,0,50%);border-radius:5px;color:#fff;fill:#fff;height:24px;outline:4px solid rgb(0,0,0,50%);pointer-events:none;width:24px;}&:hover{svg:first-child{background-color:rgb(0,0,0,75%);outline:4px solid rgb(0,0,0,75%);}}}.relays{display:flex;flex-direction:row;left:0;padding-right:67px;place-content:flex-end;position:absolute;top:5px;width:100%;ol{background-color:rgb(0,0,0,50%);border-radius:10px;display:flex;gap:3px;max-width:calc(100% - 50px);overflow:hidden;padding:2px 4px;li{font-size:6.5px;}}}"]);var en=({goHome:e,hideReadMessages:t,newChat:r,publicKey:o,relayUrls:a,selectedRecipientKey:l,setHideReadMessages:s})=>{let u=l===f.hN?"":l||o,{banner:p,data:h,nip05:g,picture:b,userName:x="New message"}=_(u),{connectToRelays:m,connectedRelays:w}=D(),y=(0,i.useMemo)(()=>Object.fromEntries(w.map(({url:e,status:t})=>[e,t])),[w]),A=(0,i.useMemo)(()=>p?{background:`linear-gradient(rgba(0, 0, 0, 0.10), rgba(0, 0, 0, 0.5)), url(${p}) center center / cover no-repeat local border-box border-box #000`}:{},[p]),{contextMenu:j}=(0,V.H)(),{publish:E}=D(),{setProfiles:S}=v(),C=(0,i.useCallback)(async e=>{if(0!==Object.values(e).filter(Boolean).length)try{let t=h?Object.assign(h,e):e,r=await (0,k.yO)(t);E(r),S(e=>({...e,[u]:(0,k.vA)(o,t)}))}catch{}},[h,u,o,E,S]),{onContextMenuCapture:M}=(0,i.useMemo)(()=>j?.(()=>[...k.w4(l||u,k.xp()),...u&&!l?[T.Os,{action:()=>C({username:prompt("Username")||""}),label:"Edit Username"},T.Os,{action:()=>C({picture:prompt("Picture URL")||""}),label:"Edit Picture"},{action:()=>C({banner:prompt("Banner URL")||""}),label:"Edit Banner"},T.Os,{action:()=>s(!t),label:`${t?"Show":"Hide"} Read Messages`}]:[]]),[j,t,u,l,s,C]);return(0,n.jsxs)(er,{onContextMenuCapture:Q.nK,style:A,children:[(0,n.jsx)(Y.Z,{onClick:l?e:r,children:l?(0,n.jsx)(d,{}):(0,n.jsx)(c,{})}),!l&&w.length>0&&(0,n.jsx)("div",{className:"relays",children:(0,n.jsx)("ol",{children:a.sort().map(e=>(0,n.jsx)("li",{onClick:y[e]?void 0:()=>m([e]),title:e,children:(0,k.p0)(y[e])},e))})}),(0,n.jsx)(L,{nip05:g,onMouseDown:M,picture:b,pubkey:u,userName:x})]})};let ei=b.ZP.div(["display:flex;place-items:center;textarea{"," background-color:#3a3b3c;border-radius:20px;color:#b0b3b8;font-family:",";font-size:14px;height:35px;margin:12px 0 12px 12px;max-height:150px;overflow:hidden auto;padding:8px 14px 4px;resize:none;width:100%;&:disabled{&::placeholder{color:rgba(117,117,117,75%);}}}svg{cursor:pointer;fill:#0084ff;height:28px;margin:2px 12px 0 10px;width:28px;path{cursor:pointer;}&:hover{fill:rgb(0,132,255,75%);}}button{width:unset;&:disabled{svg{fill:#3a3b3c;}}}"],(0,H.Z)(),({theme:e})=>e.formats.systemFont);var eo=({recipientPublicKey:e})=>{let{sendingEvent:t}=j(),{publish:r}=D(),o=(0,i.useRef)(null),[a,l]=(0,i.useState)(!1),s=e===f.hN,c=(0,i.useCallback)(async n=>{let i=await (0,k.$y)(n,e);t(i);try{r(i)}catch{}o.current?.value&&(o.current.value=""),l(!1)},[r,e,t]),d=(0,i.useCallback)(()=>{o.current&&(o.current.style.height="0px",o.current.style.height=`${Math.max(35,o.current.scrollHeight+4)}px`)},[]);return(0,n.jsxs)(ei,{children:[(0,n.jsx)("textarea",{ref:o,disabled:s,onChange:()=>{l(!!o.current?.value),d()},onKeyDown:async e=>{let{key:t,shiftKey:r}=e,n=o.current?.value.trim();n&&"Enter"===t&&!r?(e.preventDefault(),await c(n)):l(!!n),d()},placeholder:"Type a message...",autoFocus:!0}),(0,n.jsx)(Y.Z,{disabled:s||!a,onClick:()=>o.current?.value&&c(o.current.value),onContextMenuCapture:Q.nK,children:(0,n.jsx)(u,{})})]})},ea=r(8897);let el=(0,b.ZP)(ea.m.div)(["display:flex;flex-direction:column;height:100%;"]),es=(0,b.ZP)(ea.m.ol)(["",' background-color:#242526;height:100%;overflow-y:auto;position:absolute;scrollbar-gutter:auto;top:0;width:100%;li{border-radius:10px;color:#fff;cursor:pointer;margin:8px;padding:8px;position:relative;button{cursor:pointer;}&:hover{background-color:#3a3b3c;}&:focus,&.selected{background-color:rgba(45,136,255,20%);}figure{cursor:pointer;display:flex;gap:12px;width:calc(100% - 15px);div{cursor:pointer;}img,svg{aspect-ratio:1/1;border-radius:50%;cursor:pointer;height:56px;max-height:56px;max-width:56px;min-height:56px;min-width:56px;pointer-events:none;width:56px;}figcaption{cursor:pointer;display:flex;flex-direction:column;gap:3px;justify-content:center;overflow:hidden;place-items:flex-start;> span{color:#e4e6eb;cursor:pointer;font-size:17px;font-weight:600;}> div{color:#b0b3b8;cursor:pointer;display:flex;font-size:14px;gap:3px;width:100%;div:first-child{cursor:pointer;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;&.unread{color:#fff;font-weight:600;}}div:last-child{color:#8b8d92;cursor:pointer;padding-right:10px;}}}}&.unread::after{background-color:rgb(46,137,255);border-radius:50%;content:"";cursor:pointer;height:10px;pointer-events:none;position:absolute;right:8px;top:calc(50% - 5px);width:10px;}}'],(0,H.Z)()),ec=b.ZP.div(["display:flex;flex-direction:column;> div:nth-child(2){height:calc(100% - 69px);position:relative;}"]),eu=b.ZP.div(["input{background-color:#242526;border-bottom:1px solid rgb(57,58,59);color:#fff;padding:15px;width:100%;}"]);var ed=({setRecipientKey:e})=>(0,n.jsx)(eu,{children:(0,n.jsx)("input",{onKeyDown:t=>{"Enter"===t.key&&t.currentTarget.value&&!e(t.currentTarget.value.trim())&&(t.currentTarget.value="")},placeholder:"Type a Nostr address (npub/nprofile/hex)",spellCheck:!1,type:"text",autoFocus:!0})});let ep=({processId:e,publicKey:t,relayUrls:r,setSince:a,wellKnownNames:l})=>{let{setSeenEventIds:s}=v(),[c,u]=(0,i.useState)(""),[d,p]=(0,i.useState)(!1),h=(0,i.useCallback)((e,t)=>u(r=>((r||e)&&t&&s(n=>[...new Set([...t.filter(({pubkey:t})=>[e,r].includes(t)).map(({id:e})=>e),...n])]),e)),[s]),{contactKeys:g,events:b,lastEvents:x,unreadEvents:m}=U(t,l),w=(0,i.useCallback)(e=>{let t=(0,k.Py)(e);return t&&h(t),!!t},[h]),{processes:{[e]:y},url:A}=(0,N.z)(),{url:j}=y||{};return K(e,g.filter(e=>m.includes(x[e])).length),(0,i.useEffect)(()=>{if(!j||!j.startsWith("nostr:npub")&&!j.startsWith("nostr:nprofile"))return;let[,t]=j.split("nostr:");if(t){let r=(0,k.I)(t);t!==r&&(u(r),A(e,""))}},[e,A,j]),(0,i.useEffect)(()=>{m&&c&&m.filter(({pubkey:e})=>e===c).forEach(({id:e})=>s(t=>[...new Set([e,...t])]))},[c,s,m]),(0,n.jsxs)(ec,{children:[(0,n.jsx)(en,{goHome:()=>h("",b),hideReadMessages:d,newChat:()=>h(f.hN),publicKey:t,relayUrls:r,selectedRecipientKey:c,setHideReadMessages:p}),(0,n.jsx)("div",{children:(0,n.jsx)(o.M,{initial:!1,presenceAffectsLayout:!1,children:c?(0,n.jsxs)(el,{...f.A5,children:[c===f.hN&&(0,n.jsx)(ed,{setRecipientKey:w}),(0,n.jsx)(I,{recipientPublicKey:c}),(0,n.jsx)(eo,{recipientPublicKey:c})]},"chat"):(0,n.jsxs)(es,{onContextMenu:Q.nK,...f.r3,children:[g.filter(e=>!d||m.includes(x[e])).map(e=>(0,n.jsx)(q,{lastEvent:x[e],onClick:()=>h(e,b),pubkey:e,publicKey:t,unreadEvent:d||m.includes(x[e])},e)),(0,n.jsx)(et,{setSince:a})]},"contacts")})})]})};var eh=({id:e})=>{let[t,r]=(0,i.useState)(()=>T.xR),o=(0,i.useMemo)(()=>Math.floor((Date.now()-t)/1e3),[t]),[a,l]=(0,i.useState)(),s=(0,i.useRef)(!1),{names:c}=O(),u=B();return(0,i.useEffect)(()=>{!s.current&&u&&(s.current=!0,(0,k.x2)().then(l))},[u]),u&&a?(0,n.jsx)(R,{relayUrls:a,children:(0,n.jsx)(y,{children:(0,n.jsx)(S,{publicKey:u,since:o,children:(0,n.jsx)(ep,{processId:e,publicKey:u,relayUrls:a,setSince:r,wellKnownNames:c})})})}):(0,n.jsx)(n.Fragment,{children:" "})}},78848:function(e,t,r){r.d(t,{O:function(){return o}});var n=r(67294),i=r(97836);let o=(e,t,r=!1)=>{let o=(0,n.useRef)(!1),[a,l]=(0,n.useState)(r);return(0,n.useEffect)(()=>{r||!e.current||o.current||(o.current=!0,new IntersectionObserver(e=>e.forEach(({isIntersecting:e})=>l(e)),{root:"object"==typeof t&&t.current||"string"==typeof t&&e.current.closest(t)||e.current.parentElement,...i.e5}).observe(e.current))},[r,e,t]),a}},18680:function(e,t,r){r.d(t,{Z:function(){return a}});var n=r(10508),i=r(97836);let o={dark:{active:"rgb(166, 166, 166)",blendMode:"color-burn",buttonHover:"rgb(55, 55, 55)",thumb:"rgb(77, 77, 77)",thumbHover:"rgb(122, 122, 122)",track:"rgb(23, 23, 23)"},light:{active:"rgb(96, 96, 96)",blendMode:"color-dodge",buttonHover:"rgb(218, 218, 218)",thumb:"rgb(205, 205, 205)",thumbHover:"rgb(166, 166, 166)",track:"rgb(240, 240, 240)"}};var a=(e=i.BQ,t=0,r=0,a="dark")=>(0,n.iv)(["overflow:auto;scrollbar-gutter:stable;@supports not selector(::-webkit-scrollbar){scrollbar-color:"," ",";}&::-webkit-scrollbar{height:","px;width:","px;}&::-webkit-scrollbar-corner,&::-webkit-scrollbar-track{background-color:",";}&::-webkit-scrollbar-thumb{background-clip:padding-box;background-color:",";}&::-webkit-scrollbar-thumb:vertical{background-clip:padding-box;background-color:",";border-left:1px solid transparent;border-right:1px solid transparent;}&::-webkit-scrollbar-thumb:horizontal{border-bottom:1px solid transparent;border-top:1px solid transparent;}&::-webkit-scrollbar-thumb:hover{background-color:",";}&::-webkit-scrollbar-thumb:active{background-color:",";}&::-webkit-scrollbar-button:single-button{background-clip:padding-box;background-color:",";background-position:center 4px;background-repeat:no-repeat;background-size:10px;border:1px solid ",";display:block;height:",";&:hover{background-color:",";}&:active{background-color:",";}}&::-webkit-scrollbar-button:single-button:vertical:decrement,&::-webkit-scrollbar-button:single-button:vertical:increment{background-position-x:",";background-position-y:",";background-size:16px;border-bottom:0;border-top:0;image-rendering:pixelated;}&::-webkit-scrollbar-button:single-button:vertical:decrement{background-image:url(",");}&::-webkit-scrollbar-button:single-button:vertical:increment{background-image:url(",");}&::-webkit-scrollbar-button:single-button:horizontal:decrement,&::-webkit-scrollbar-button:single-button:horizontal:increment{background-position:center;background-size:16px;border-left:0;border-right:0;image-rendering:pixelated;}&::-webkit-scrollbar-button:single-button:horizontal:decrement{background-image:url(",");}&::-webkit-scrollbar-button:single-button:horizontal:increment{background-image:url(",");}&::-webkit-scrollbar-button:single-button:vertical:decrement:active,&::-webkit-scrollbar-button:single-button:vertical:increment:active,&::-webkit-scrollbar-button:single-button:horizontal:decrement:active,&::-webkit-scrollbar-button:single-button:horizontal:increment:active{background-blend-mode:",";}"],o[a].thumb,o[a].track,e,e,o[a].track,o[a].thumb,o[a].thumb,o[a].thumbHover,o[a].active,o[a].track,o[a].track,e?`${e}px`:"initial",o[a].buttonHover,o[a].active,0===t?"center":`${t}px`,0===r?"center":`${r}px`,"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAKElEQVR42mOgMRgF6enp/ynSDMMUaEZgsjST5RJsikk2AKc4bcAoAADI7y5FsB5j/QAAAABJRU5ErkJggg==","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAK0lEQVR42mOgARgF6enp/0kRZ8KvGMEnyQUwjMwn0xBMzWQZQlmA0h6MAgAuqCnfdOk/ZQAAAABJRU5ErkJggg==","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAG0lEQVR42mPAD0ZBenr6fxge4ppHuiGEwSgAAGJiLkXUVlYDAAAAAElFTkSuQmCC","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAG0lEQVR42mPADkZBenr6fxgeZoYMV82Ug1EAAPiTLkWjutmQAAAAAElFTkSuQmCC",o[a].blendMode)}}]);
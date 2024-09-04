"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2347, 1746, 2163],
    {
        71558: function (e, t, r) {
            r.d(t, {
                P: function () {
                    return n;
                },
                w: function () {
                    return i;
                },
            });
            let i = {
                0: { name: "Black", rgb: [12, 12, 12] },
                1: { name: "Blue", rgb: [0, 55, 218] },
                2: { name: "Green", rgb: [19, 161, 14] },
                3: { name: "Aqua", rgb: [58, 150, 221] },
                4: { name: "Red", rgb: [197, 15, 31] },
                5: { name: "Purple", rgb: [136, 23, 152] },
                6: { name: "Yellow", rgb: [193, 156, 0] },
                7: { name: "White", rgb: [204, 204, 204] },
                8: { name: "Gray", rgb: [118, 118, 118] },
                9: { name: "Light Blue", rgb: [59, 120, 255] },
                A: { name: "Light Green", rgb: [22, 198, 12] },
                B: { name: "Light Aqua", rgb: [97, 214, 214] },
                C: { name: "Light Red", rgb: [231, 72, 86] },
                D: { name: "Light Purple", rgb: [180, 0, 158] },
                E: { name: "Light Yellow", rgb: [249, 241, 165] },
                F: { name: "Bright White", rgb: [242, 242, 242] },
            },
                n = (e, t, r, i = !1) => `\u001B[${i ? "48" : "38"};2;${e};${t};${r}m`;
        },
        2347: function (e, t, r) {
            r.d(t, {
                $4: function () {
                    return f;
                },
                CN: function () {
                    return c;
                },
                JF: function () {
                    return d;
                },
                P: function () {
                    return b;
                },
                R_: function () {
                    return s;
                },
                hR: function () {
                    return w;
                },
                j3: function () {
                    return p;
                },
                j5: function () {
                    return m;
                },
                lO: function () {
                    return g;
                },
                vR: function () {
                    return y;
                },
                xy: function () {
                    return u;
                },
            });
            var i = r(71558),
                n = r(42576),
                o = r(40591),
                a = r(37176),
                l = r(97836);
            let s = (e, t, r) => {
                Object.entries(t).forEach(([t, r]) => {
                    e(`${t.padEnd(14)} ${r}`);
                }),
                    r &&
                    (e("\r\nAliases:\r\n"),
                        Object.entries(r).forEach(([r, i]) => {
                            i.forEach((i) => {
                                e(`${i.padEnd(14)} ${t[r]}`);
                            });
                        }));
            },
                c = {
                    cd: "Changes the current directory.",
                    clear: "Clears the screen.",
                    color: "Specifies color attribute of console output.",
                    copy: "Copies a file to another location.",
                    date: "Displays the date.",
                    del: "Deletes a file.",
                    dir: "Displays list of entries in current directory.",
                    echo: "Displays messages that are passed to it.",
                    exit: "Quits the command interpreter.",
                    ffmpeg: "Convert audio or video file to another format.",
                    file: "Detects the MIME type of the file.",
                    find: "Searches for a text string in a file or files.",
                    git: "Read from git repositories.",
                    help: "Provides Help information for commands.",
                    history: "Displays command history list.",
                    imagemagick: "Convert an image file to another format.",
                    ipconfig: "Displays current IP.",
                    license: "Displays license.",
                    md: "Creates a directory.",
                    mediainfo: "Displays relevant technical data about media files.",
                    mount: "Mounts a local file system directory.",
                    move: "Moves file or directory.",
                    neofetch: "Displays system information.",
                    nslookup: "Displays DNS information about a domain.",
                    pwd: "Prints the working directory.",
                    python: "Run code through Python interpreter.",
                    qjs: "Run code through QuickJS interpreter.",
                    rd: "Removes a directory.",
                    ren: "Renames a file or directory.",
                    rm: "Removes a file or directory.",
                    sheep: "Spawn a new sheep",
                    shutdown: "Allows proper local shutdown of machine.",
                    taskkill: "Kill or stop a running process or application.",
                    tasklist: "Displays all currently running processes.",
                    time: "Displays the system time.",
                    title: "Sets the window title for the command interpreter.",
                    touch: "Create empty file.",
                    type: "Displays the contents of a file.",
                    uptime: "Display the current uptime of the local system.",
                    ver: "Displays the system version.",
                    wapm: "Run universal Wasm binaries.",
                    weather: "Weather forecast service",
                    whoami: "Displays user information.",
                    wsl: "Launches the default Linux shell.",
                    xlsx: "Convert a spreadsheet file to another format.",
                },
                p = {
                    cd: ["chdir"],
                    clear: ["cls"],
                    copy: ["cp"],
                    del: ["erase"],
                    dir: ["ls"],
                    exit: ["quit"],
                    find: ["search"],
                    git: ["isogit"],
                    ipconfig: ["ifconfig", "whatsmyip"],
                    md: ["mkdir"],
                    move: ["mv"],
                    neofetch: ["systeminfo"],
                    python: ["py", "python3"],
                    qjs: ["node", "quickjs"],
                    rd: ["rmdir"],
                    ren: ["rename"],
                    sheep: ["esheep"],
                    shutdown: ["logout", "restart"],
                    taskkill: ["kill"],
                    tasklist: ["ps"],
                    type: ["cat"],
                    ver: ["version"],
                    wapm: ["wasmer", "wax"],
                    weather: ["wttr"],
                    wsl: ["linux"],
                },
                h = new Set([
                    "cat",
                    "cd",
                    "chdir",
                    "copy",
                    "cp",
                    "del",
                    "dir",
                    "erase",
                    "ffmpeg",
                    "file",
                    "imagemagick",
                    "ls",
                    "md",
                    "mkdir",
                    "move",
                    "mv",
                    "py",
                    "python",
                    "python3",
                    "rd",
                    "ren",
                    "rename",
                    "rm",
                    "rmdir",
                    "touch",
                    "type",
                    "vim",
                    "xlsx",
                ]),
                u = (e) => `'${e}' is not recognized as an internal or external command, operable program or batch file.`,
                d = (e, t) => {
                    let { _autocompleteHandlers: r } = t;
                    r.forEach(({ fn: e }) => t.removeAutocompleteHandler(e)),
                        t.addAutocompleteHandler((t, [r]) => {
                            if (0 === t) return [...Object.keys(c), ...e];
                            if (1 === t) {
                                let t = r.toLowerCase();
                                if ("git" === t) return Object.keys(n.C);
                                if (
                                    h.has(t) ||
                                    Object.keys(a.Z)
                                        .map((e) => e.toLowerCase())
                                        .includes(t) ||
                                    Object.keys(o.resourceAliasMap).includes(t)
                                )
                                    return e;
                            }
                            return [];
                        });
                },
                f = (e, t = "") => {
                    let r = !1,
                        i = "",
                        n = (e) => {
                            e.push(i), (i = "");
                        },
                        o = [...e].reduce((e, o, a) => (t && a > t.length ? (i += o) : " " === o && !r && i ? n(e) : '"' === o ? (r = !r) || n(e) : (i += o), e), []);
                    return i ? [...o, i] : o;
                },
                m = (e, t, r, i, n = "=") => {
                    if (!i) {
                        let t = e.map(([e, t]) => e.padEnd(t, " ")).join(" "),
                            i = e.map(([, e]) => n.repeat(e)).join(" ");
                        r(t), r(i);
                    }
                    let o = t.map((t) =>
                        t
                            .map((r, i) => {
                                let [, n, o, a] = e[i],
                                    l = i === t.length - 1 ? r : r.slice(0, n);
                                return a && (l = a(l)), o ? l.padStart(n, " ") : l.padEnd(n, " ");
                            })
                            .join(" ")
                    );
                    o.length > 0 && o.forEach((e) => r(e));
                },
                g = async () => {
                    let { quota: e = 0, usage: t = 0 } = (await navigator.storage?.estimate?.()) || {};
                    return 0 === e ? "" : `  ${(e - t).toLocaleString()} bytes`;
                },
                w = (e = !1) => {
                    if (window.performance) {
                        let [{ duration: t }] = window.performance.getEntriesByType("navigation"),
                            r = window.performance.timeOrigin + t,
                            i = Math.ceil(Date.now() - r),
                            n = Math.floor(i / l.y8),
                            o = new Date(i),
                            a = o.getUTCHours(),
                            s = o.getUTCMinutes(),
                            c = o.getUTCSeconds();
                        return [
                            ...(n ? [`${n} day${1 === n ? "" : "s"}`] : []),
                            ...(a ? [`${a} hour${1 === a ? "" : "s"}`] : []),
                            ...(s ? [`${s} ${e ? "min" : "minute"}${1 === s ? "" : "s"}`] : []),
                            `${c} ${e ? "sec" : "second"}${1 === c ? "" : "s"}`,
                        ].join(", ");
                    }
                    return "Unknown";
                },
                y = (e, t) => `${(0, i.P)(...i.w[e].rgb, !0)}${(0, i.P)(...i.w[e].rgb)}|||${t?.join("") || `${(0, i.P)(...i.w[0].rgb, !0)}${(0, i.P)(...i.w[7].rgb)}`}\u001B[0m`,
                b = (e) => {
                    try {
                        navigator.clipboard?.readText?.().then((t) => e.handleCursorInsert(t));
                    } catch { }
                };
        },
        42576: function (e, t, r) {
            r.d(t, {
                C: function () {
                    return a;
                },
            });
            var i = r(1864),
                n = r(2347);
            let o = new Set(["checkout", "clone", "fetch", "init", "merge", "pull"]),
                a = {
                    add: "Add a file to the git index (aka staging area)",
                    branch: "Create a branch",
                    checkout: "Checkout a branch",
                    clone: "Clone a repository",
                    commit: "Create a new commit",
                    fetch: "Fetch commits from a remote repository",
                    init: "Initialize a new repository",
                    log: "Get commit descriptions from the git history",
                    merge: "Merge two branches",
                    pull: "Fetch and merge commits from a remote repository",
                    push: "Push a branch or tag",
                    status: "Tell whether a file has been changed",
                    tag: "Create a lightweight tag",
                    version: "Return the version number of isomorphic-git",
                },
                l = async ([e, ...t], l, s, c, p) => {
                    let h = await Promise.all([r.e(8375, "high"), r.e(1049, "high")]).then(r.bind(r, 10764));
                    if (e in h) {
                        let n = await r.e(246, "high").then(r.bind(r, 80246)),
                            { default: a } = await r.e(6562, "high").then(r.t.bind(r, 96562, 23)),
                            { username: u, password: d, ...f } = a(t),
                            m = [],
                            g = {
                                ...f,
                                corsProxy: "https://cors.isomorphic-git.org",
                                dir: l,
                                fs: c,
                                http: n,
                                onAuth: () => ({ password: d, username: u }),
                                onMessage: (e = "") => s(`remote: ${e.trim()}`),
                                onProgress: ({ phase: e }) => {
                                    m[m.length - 1] !== e && (s(e), m.push(e));
                                },
                            };
                        if ("clone" === e) {
                            if (!g.url && f._ && Array.isArray(f._) && 1 === f._.length) {
                                let [e] = f._;
                                g.url = e;
                            }
                            let e =
                                g.url
                                    ?.split("/")
                                    .pop()
                                    ?.replace(/\.git$/, "") || "";
                            e && (s(`Cloning into '${e}'...`), (g.dir = (0, i.join)(l, e)));
                        }
                        try {
                            let t = await h[e]?.(g);
                            "string" == typeof t && s(t);
                        } catch (e) {
                            s(e.message);
                        }
                        o.has(e) && p(l);
                    } else (0, n.R_)(s, a);
                };
            t.Z = l;
        },
        40591: function (e, t, r) {
            r.r(t),
                r.d(t, {
                    default: function () {
                        return j;
                    },
                    resourceAliasMap: function () {
                        return k;
                    },
                });
            var i = r(85893),
                n = r(1864),
                o = r(67294),
                a = r(2347),
                l = r(10508),
                s = r(37725);
            let c = l.ZP.div(
                [
                    "background-color:#fff;border:1px solid rgb(240,240,240);font-size:12px;figure{display:flex;flex-direction:row;padding:20px 11px 14px;figcaption{line-height:15px;margin-bottom:4px;}img{height:32px;margin-right:19px;width:32px;}}div{display:flex;flex-direction:row;label{margin-top:3px;padding:0 11px;}div{position:relative;width:100%;input,select{border:1px solid rgb(122,122,122);border-radius:0;font-family:",
                    ";font-size:12px;height:23px;line-height:16px;margin:0 13px 21px 8px;padding-bottom:2px;padding-left:5px;width:100%;}select{background-color:#fff;clip-path:inset(0 0 0 calc(100% - 20px));position:absolute;width:calc(100% - 21px);&:disabled{border:1px solid rgb(122,122,122);opacity:100%;}}input{border-right:0;margin-right:33px;&:focus{border:1px solid rgb(0,120,215);border-right:0;+ select{border-color:rgb(0,120,215);}}}}}nav{background-color:rgb(240,240,240);display:flex;flex-direction:row;height:100%;",
                    "{height:24px;margin-top:19px;position:absolute;right:12px;width:86px;&:first-child{right:107px;}}}",
                ],
                ({ theme: e }) => e.formats.systemFont,
                s.Z
            );
            var p = r(6155),
                h = r(45279),
                u = r(20063),
                d = r(58437),
                f = r(37176),
                m = r(76488),
                g = r(97836),
                w = r(6484),
                y = r(31746),
                b = r(82163),
                x = r(46581);
            let v = "open",
                k = { cmd: "Terminal", code: "MonacoEditor", dos: "JSDOS", explorer: "FileExplorer", monaco: "MonacoEditor", mspaint: "Paint", vlc: "VideoPlayer" },
                C = `Type the name of a program, folder, document, or Internet resource, and ${g.PACKAGE_DATA.alias} will open it for you.`,
                $ = (e) => alert(`Cannot find '${e}'. Make sure you typed the name correctly, and then try again.`),
                S = { esheep: b.default, sheep: b.default };
            var j = ({ id: e }) => {
                let { open: t, closeWithTransition: r, processes: { Run: l } = {} } = (0, d.z)(),
                    { createPath: b, exists: j, lstat: P, readFile: L, updateFolder: D } = (0, u.o)(),
                    { foregroundId: E, runHistory: F, setRunHistory: R, updateRecentFiles: A } = (0, m.k)(),
                    _ = (0, o.useRef)(null),
                    [M, I] = (0, o.useState)(!0),
                    [T, O] = (0, o.useState)(!F[0]),
                    [B, z] = (0, o.useState)(!1),
                    Z = ({ target: e }) => O(!e?.value),
                    W = (0, o.useCallback)(
                        async (i) => {
                            if (!i) return;
                            z(!0);
                            let o = () => R((e) => (e[0] === i ? e : [i, ...e])),
                                [l, ...s] = (0, a.$4)(i),
                                c = i,
                                h = !0,
                                u = await j(c);
                            u || (c = s.length > 0 ? s.join(" ") : l);
                            let d = c.startsWith("nostr:");
                            d && t("Messenger", { url: c });
                            let m = c.startsWith("ipfs://");
                            if (u || d || m || (await j(c))) {
                                if (m)
                                    try {
                                        let e = await (0, y.getIpfsResource)(c);
                                        (c = (0, n.join)(g.Ll, await b(await (0, y.getIpfsFileName)(c, e), g.Ll, e))), D(g.Ll, (0, n.basename)(c));
                                    } catch { }
                                if ((await P(c)).isDirectory()) t("FileExplorer", { url: c }, ""), o();
                                else if (l && s.length > 0 && c !== i) {
                                    let e = Object.keys(f.Z).find((e) => e.toLowerCase() === l.toLowerCase());
                                    if (e) {
                                        let r = "Browser" === e && m ? s.join(" ") : c;
                                        t(e, { url: r }), o(), r && A(r, e);
                                    } else $(l), (h = !1);
                                } else {
                                    let e = (0, w.RT)(c);
                                    if (e === g.zm) {
                                        let { pid: e, url: r } = (0, p.OE)(await L(c));
                                        e && (t(e, { url: r }), r && A(r, e));
                                    } else {
                                        let r = (0, p.Wd)(e) || "OpenWith",
                                            n = "Browser" === r && m ? i : c;
                                        t(r, { url: n }), n && r && A(n, r);
                                    }
                                    o();
                                }
                            } else {
                                let e = Object.keys(f.Z).find((e) => e.toLowerCase() === (k[c.toLowerCase()] || c).toLowerCase());
                                e ? (t(e), o()) : S[i.toLowerCase()] ? (S[i.toLowerCase()](), o()) : ($(i), (h = !1));
                            }
                            z(!1), h && r(e);
                        },
                        [r, b, j, e, P, t, L, R, D, A]
                    );
                return (
                    (0, o.useLayoutEffect)(() => {
                        E === e && (_.current?.focus(g.eS), _.current?.value && _.current?.select());
                    }, [E, e]),
                    (0, o.useLayoutEffect)(() => {
                        l?.url && _.current && ((_.current.value = `${_.current.value.trimEnd()} ${l.url}`.trim()), O(!1));
                    }, [l?.url]),
                    (0, i.jsxs)(c, {
                        ...(0, h.Z)({ id: e }),
                        onContextMenu: (e) => {
                            e.target instanceof HTMLInputElement || (0, w.nK)(e);
                        },
                        children: [
                            (0, i.jsxs)("figure", { children: [(0, i.jsx)(x.Z, { alt: "Run", imgSize: 32, src: `${g.OT}/run.webp` }), (0, i.jsx)("figcaption", { children: C })] }),
                            (0, i.jsxs)("div", {
                                children: [
                                    (0, i.jsx)("label", { htmlFor: v, children: "Open:" }),
                                    (0, i.jsxs)("div", {
                                        children: [
                                            (0, i.jsx)("input", {
                                                ref: _,
                                                defaultValue: F[0],
                                                disabled: B,
                                                enterKeyHint: "go",
                                                id: v,
                                                onBlurCapture: ({ relatedTarget: e }) => {
                                                    !l?.componentWindow || l.componentWindow.contains(e) ? _.current?.focus(g.eS) : I(!1);
                                                },
                                                onChange: Z,
                                                onFocusCapture: () => I(!0),
                                                onKeyDownCapture: (t) => {
                                                    let { key: i } = t;
                                                    "Enter" === i && W(_.current?.value.trim()), "Escape" === i && ((0, w.nK)(t), r(e));
                                                },
                                                onKeyUp: Z,
                                                type: "text",
                                                ...g.AA,
                                            }),
                                            (0, i.jsx)("select", {
                                                disabled: 0 === F.length,
                                                onChange: ({ target: e }) => {
                                                    _.current && ((_.current.value = e.value), O(!1));
                                                },
                                                onClick: ({ target: e }) => {
                                                    e instanceof HTMLSelectElement && -1 !== e.selectedIndex && (e.selectedIndex = -1);
                                                },
                                                children: F.map((e, t) => (0, i.jsx)("option", { value: e, children: e }, `${e}-${t}`)),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, i.jsxs)("nav", {
                                children: [
                                    (0, i.jsx)(s.Z, { className: M ? "focus" : "", disabled: T || B, onClick: () => W(_.current?.value.trim()), children: "OK" }),
                                    (0, i.jsx)(s.Z, { disabled: B, onClick: () => r(e), children: "Cancel" }),
                                ],
                            }),
                        ],
                    })
                );
            };
        },
        37725: function (e, t, r) {
            let i = r(10508).ZP.button(
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
            t.Z = i;
        },
        45279: function (e, t, r) {
            var i = r(1864),
                n = r(67294),
                o = r(59746),
                a = r(23736),
                l = r(89670),
                s = r(20063),
                c = r(58437),
                p = r(76488),
                h = r(97836),
                u = r(6484);
            t.Z = ({ callback: e, directory: t = h.Ll, id: r, onDragLeave: d, onDragOver: f, updatePositions: m }) => {
                let { url: g } = (0, c.z)(),
                    { iconPositions: w, sortOrders: y, setIconPositions: b } = (0, p.k)(),
                    { exists: x, mkdirRecursive: v, updateFolder: k, writeFile: C } = (0, s.o)(),
                    $ = (0, n.useCallback)(
                        async (e, t, n) => {
                            if (r) {
                                if (t) {
                                    let o = (0, i.join)(h.Ll, e);
                                    if ((await v(h.Ll), await C(o, t, !0))) return n === l.v.UPDATE_URL && g(r, o), await k(h.Ll, e), (0, i.basename)(o);
                                } else n === l.v.UPDATE_URL && g(r, e);
                            }
                            return "";
                        },
                        [r, v, k, g, C]
                    ),
                    { openTransferDialog: S } = (0, o.Z)();
                return {
                    onDragLeave: d,
                    onDragOver: (e) => {
                        f?.(e), (0, u.nK)(e);
                    },
                    onDrop: (n) => {
                        if (!h.my.has((0, u.RT)(t))) {
                            if (m && n.target instanceof HTMLElement) {
                                let { files: e, text: r } = (0, a.p4)(n);
                                if (0 === e.length && "" === r) return;
                                let o = { x: n.clientX, y: n.clientY },
                                    l = [];
                                if (r) {
                                    try {
                                        l = JSON.parse(r);
                                    } catch { }
                                    if (!Array.isArray(l)) return;
                                    let [e] = l;
                                    if (!e || (e.startsWith(t) && (0, i.basename)(e) === (0, i.relative)(t, e))) return;
                                    l = l.map((e) => (0, i.basename)(e));
                                } else e instanceof FileList ? (l = [...e].map((e) => e.name)) : (l = [...e].map((e) => e.getAsFile()?.name || "").filter(Boolean));
                                (l = l.map((e) => {
                                    if (!w[`${t}/${e}`]) return e;
                                    let r = 0,
                                        n = "";
                                    do (r += 1), (n = `${t}/${(0, i.basename)(e, (0, i.extname)(e))} (${r})${(0, i.extname)(e)}`);
                                    while (w[n]);
                                    return (0, i.basename)(n);
                                })),
                                    (0, u.vi)(t, n.target, w, y, o, l, b, x);
                            }
                            (0, a.WG)(n, e || $, t, S, !!r);
                        }
                    },
                };
            };
        },
        31746: function (e, t, r) {
            r.d(t, {
                getIpfsFileName: function () {
                    return c;
                },
                getIpfsGatewayUrl: function () {
                    return s;
                },
                getIpfsResource: function () {
                    return p;
                },
            });
            var i = r(97836),
                n = r(48764).Buffer;
            let o = "",
                a = ["https://<CID>.ipfs.cf-ipfs.com/", "https://<CID>.ipfs.dweb.link/", "https://cloudflare-ipfs.com/ipfs/<CID>/", "https://gateway.ipfs.io/ipfs/<CID>/"],
                l = (e) =>
                    new Promise((t) => {
                        let r = window.setTimeout(() => t(!1), i.i2),
                            n = new Image();
                        n.addEventListener(
                            "load",
                            () => {
                                window.clearTimeout(r), t(!0);
                            },
                            i.K7
                        ),
                            n.addEventListener(
                                "error",
                                () => {
                                    window.clearTimeout(r), t(!1);
                                },
                                i.K7
                            ),
                            (n.src = `${e.replace("<CID>", "bafybeibwzifw52ttrkqlikfzext5akxu7lz4xiwjgwzmqcpdzmp3n5vnbe")}?now=${Date.now()}&filename=1x1.png#x-ipfs-companion-no-redirect`);
                    }),
                s = async (e, t) => {
                    if (!o || t) {
                        for (let e of t ? a.filter((e) => e !== o) : a)
                            if (await l(e)) {
                                o = e;
                                break;
                            }
                        if (!o) return "";
                    }
                    let { pathname: i, protocol: n, search: s } = new URL(e);
                    if ("ipfs:" !== n) return "";
                    let [c = "", ...p] = i.split("/").filter(Boolean),
                        { CID: h } = await r.e(2856, "high").then(r.bind(r, 72856));
                    return `${o.replace("<CID>", h.parse(c).toV1().toString())}${p.join("/")}${s}`;
                },
                c = async (e, t) => {
                    let { pathname: i, searchParams: n } = new URL(e),
                        o = n.get("filename");
                    if (o) return o;
                    let { fileTypeFromBuffer: a } = await Promise.all([r.e(8090, "high"), r.e(3545, "high"), r.e(3301, "high")]).then(r.bind(r, 53545)),
                        { ext: l = "" } = (await a(t)) || {};
                    return `${i.split("/").filter(Boolean).join("_")}${l ? `.${l}` : ""}`;
                },
                p = async (e) => {
                    let t;
                    let r = { ...i.P8, cache: "no-cache", credentials: "omit", keepalive: !1, mode: "cors", referrerPolicy: "no-referrer", window: null };
                    try {
                        t = await fetch(await s(e), r);
                    } catch (i) {
                        "Failed to fetch" === i.message && (t = await fetch(await s(e, !0), r));
                    }
                    return t instanceof Response ? n.from(await t.arrayBuffer()) : n.from("");
                };
        },
        82163: function (e, t, r) {
            var i = r(6484);
            let n = {
                blue_sheep: ["/Program Files/eSheep/blue_sheep.xml", 12],
                eSheep: ["/Program Files/eSheep/eSheep.xml", 12],
                fox: ["/Program Files/eSheep/fox.xml", 4],
                green_sheep: ["/Program Files/eSheep/green_sheep.xml", 12],
                mimiko: ["/Program Files/eSheep/mimiko.xml", 4],
                neko: ["/Program Files/eSheep/neko.xml", 10],
                orange_sheep: ["/Program Files/eSheep/orange_sheep.xml", 12],
                pingus: ["/Program Files/eSheep/pingus.xml", 10],
                red_sheep: ["/Program Files/eSheep/red_sheep.xml", 12],
                yellow_sheep: ["/Program Files/eSheep/yellow_sheep.xml", 12],
            },
                o = !1,
                a = () => {
                    let e = Object.keys(n).flatMap((e) => {
                        let [, t] = n[e];
                        return Array.from({ length: t }).fill(e);
                    }),
                        t = Math.floor(Math.random() * e.length),
                        [r] = n[e[t]];
                    return r;
                };
            t.default = () =>
                (0, i.mb)(["/Program Files/eSheep/eSheep.js"]).then(() => {
                    if (window.Sheep) {
                        let e = new window.Sheep({ allowPopup: "no", collisionsWith: ["nav", "section"], spawnContainer: document.querySelector("main") });
                        o ? e.Start(a()) : ((o = !0), e.Start("/Program Files/eSheep/eSheep.xml"));
                    }
                });
        },
    },
]);





// "use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2347,1746,2163],{71558:function(e,t,r){r.d(t,{P:function(){return n},w:function(){return i}});let i={0:{name:"Black",rgb:[12,12,12]},1:{name:"Blue",rgb:[0,55,218]},2:{name:"Green",rgb:[19,161,14]},3:{name:"Aqua",rgb:[58,150,221]},4:{name:"Red",rgb:[197,15,31]},5:{name:"Purple",rgb:[136,23,152]},6:{name:"Yellow",rgb:[193,156,0]},7:{name:"White",rgb:[204,204,204]},8:{name:"Gray",rgb:[118,118,118]},9:{name:"Light Blue",rgb:[59,120,255]},A:{name:"Light Green",rgb:[22,198,12]},B:{name:"Light Aqua",rgb:[97,214,214]},C:{name:"Light Red",rgb:[231,72,86]},D:{name:"Light Purple",rgb:[180,0,158]},E:{name:"Light Yellow",rgb:[249,241,165]},F:{name:"Bright White",rgb:[242,242,242]}},n=(e,t,r,i=!1)=>`\u001B[${i?"48":"38"};2;${e};${t};${r}m`},2347:function(e,t,r){r.d(t,{$4:function(){return f},CN:function(){return c},JF:function(){return d},P:function(){return b},R_:function(){return s},hR:function(){return w},j3:function(){return p},j5:function(){return m},lO:function(){return g},vR:function(){return y},xy:function(){return u}});var i=r(71558),n=r(42576),o=r(40591),a=r(37176),l=r(97836);let s=(e,t,r)=>{Object.entries(t).forEach(([t,r])=>{e(`${t.padEnd(14)} ${r}`)}),r&&(e("\r\nAliases:\r\n"),Object.entries(r).forEach(([r,i])=>{i.forEach(i=>{e(`${i.padEnd(14)} ${t[r]}`)})}))},c={cd:"Changes the current directory.",clear:"Clears the screen.",color:"Specifies color attribute of console output.",copy:"Copies a file to another location.",date:"Displays the date.",del:"Deletes a file.",dir:"Displays list of entries in current directory.",echo:"Displays messages that are passed to it.",exit:"Quits the command interpreter.",ffmpeg:"Convert audio or video file to another format.",file:"Detects the MIME type of the file.",find:"Searches for a text string in a file or files.",git:"Read from git repositories.",help:"Provides Help information for commands.",history:"Displays command history list.",imagemagick:"Convert an image file to another format.",ipconfig:"Displays current IP.",license:"Displays license.",md:"Creates a directory.",mediainfo:"Displays relevant technical data about media files.",mount:"Mounts a local file system directory.",move:"Moves file or directory.",neofetch:"Displays system information.",nslookup:"Displays DNS information about a domain.",pwd:"Prints the working directory.",python:"Run code through Python interpreter.",qjs:"Run code through QuickJS interpreter.",rd:"Removes a directory.",ren:"Renames a file or directory.",rm:"Removes a file or directory.",sheep:"Spawn a new sheep",shutdown:"Allows proper local shutdown of machine.",taskkill:"Kill or stop a running process or application.",tasklist:"Displays all currently running processes.",time:"Displays the system time.",title:"Sets the window title for the command interpreter.",touch:"Create empty file.",type:"Displays the contents of a file.",uptime:"Display the current uptime of the local system.",ver:"Displays the system version.",wapm:"Run universal Wasm binaries.",weather:"Weather forecast service",whoami:"Displays user information.",wsl:"Launches the default Linux shell.",xlsx:"Convert a spreadsheet file to another format."},p={cd:["chdir"],clear:["cls"],copy:["cp"],del:["erase"],dir:["ls"],exit:["quit"],find:["search"],git:["isogit"],ipconfig:["ifconfig","whatsmyip"],md:["mkdir"],move:["mv"],neofetch:["systeminfo"],python:["py","python3"],qjs:["node","quickjs"],rd:["rmdir"],ren:["rename"],sheep:["esheep"],shutdown:["logout","restart"],taskkill:["kill"],tasklist:["ps"],type:["cat"],ver:["version"],wapm:["wasmer","wax"],weather:["wttr"],wsl:["linux"]},h=new Set(["cat","cd","chdir","copy","cp","del","dir","erase","ffmpeg","file","imagemagick","ls","md","mkdir","move","mv","py","python","python3","rd","ren","rename","rm","rmdir","touch","type","vim","xlsx"]),u=e=>`'${e}' is not recognized as an internal or external command, operable program or batch file.`,d=(e,t)=>{let{_autocompleteHandlers:r}=t;r.forEach(({fn:e})=>t.removeAutocompleteHandler(e)),t.addAutocompleteHandler((t,[r])=>{if(0===t)return[...Object.keys(c),...e];if(1===t){let t=r.toLowerCase();if("git"===t)return Object.keys(n.C);if(h.has(t)||Object.keys(a.Z).map(e=>e.toLowerCase()).includes(t)||Object.keys(o.resourceAliasMap).includes(t))return e}return[]})},f=(e,t="")=>{let r=!1,i="",n=e=>{e.push(i),i=""},o=[...e].reduce((e,o,a)=>(t&&a>t.length?i+=o:" "===o&&!r&&i?n(e):'"'===o?(r=!r)||n(e):i+=o,e),[]);return i?[...o,i]:o},m=(e,t,r,i,n="=")=>{if(!i){let t=e.map(([e,t])=>e.padEnd(t," ")).join(" "),i=e.map(([,e])=>n.repeat(e)).join(" ");r(t),r(i)}let o=t.map(t=>t.map((r,i)=>{let[,n,o,a]=e[i],l=i===t.length-1?r:r.slice(0,n);return a&&(l=a(l)),o?l.padStart(n," "):l.padEnd(n," ")}).join(" "));o.length>0&&o.forEach(e=>r(e))},g=async()=>{let{quota:e=0,usage:t=0}=await navigator.storage?.estimate?.()||{};return 0===e?"":`  ${(e-t).toLocaleString()} bytes`},w=(e=!1)=>{if(window.performance){let[{duration:t}]=window.performance.getEntriesByType("navigation"),r=window.performance.timeOrigin+t,i=Math.ceil(Date.now()-r),n=Math.floor(i/l.y8),o=new Date(i),a=o.getUTCHours(),s=o.getUTCMinutes(),c=o.getUTCSeconds();return[...n?[`${n} day${1===n?"":"s"}`]:[],...a?[`${a} hour${1===a?"":"s"}`]:[],...s?[`${s} ${e?"min":"minute"}${1===s?"":"s"}`]:[],`${c} ${e?"sec":"second"}${1===c?"":"s"}`].join(", ")}return"Unknown"},y=(e,t)=>`${(0,i.P)(...i.w[e].rgb,!0)}${(0,i.P)(...i.w[e].rgb)}|||${t?.join("")||`${(0,i.P)(...i.w[0].rgb,!0)}${(0,i.P)(...i.w[7].rgb)}`}\u001B[0m`,b=e=>{try{navigator.clipboard?.readText?.().then(t=>e.handleCursorInsert(t))}catch{}}},42576:function(e,t,r){r.d(t,{C:function(){return a}});var i=r(1864),n=r(2347);let o=new Set(["checkout","clone","fetch","init","merge","pull"]),a={add:"Add a file to the git index (aka staging area)",branch:"Create a branch",checkout:"Checkout a branch",clone:"Clone a repository",commit:"Create a new commit",fetch:"Fetch commits from a remote repository",init:"Initialize a new repository",log:"Get commit descriptions from the git history",merge:"Merge two branches",pull:"Fetch and merge commits from a remote repository",push:"Push a branch or tag",status:"Tell whether a file has been changed",tag:"Create a lightweight tag",version:"Return the version number of isomorphic-git"},l=async([e,...t],l,s,c,p)=>{let h=await Promise.all([r.e(8375,"high"),r.e(1049,"high")]).then(r.bind(r,10764));if(e in h){let n=await r.e(246,"high").then(r.bind(r,80246)),{default:a}=await r.e(6562,"high").then(r.t.bind(r,96562,23)),{username:u,password:d,...f}=a(t),m=[],g={...f,corsProxy:"https://cors.isomorphic-git.org",dir:l,fs:c,http:n,onAuth:()=>({password:d,username:u}),onMessage:(e="")=>s(`remote: ${e.trim()}`),onProgress:({phase:e})=>{m[m.length-1]!==e&&(s(e),m.push(e))}};if("clone"===e){if(!g.url&&f._&&Array.isArray(f._)&&1===f._.length){let[e]=f._;g.url=e}let e=g.url?.split("/").pop()?.replace(/\.git$/,"")||"";e&&(s(`Cloning into '${e}'...`),g.dir=(0,i.join)(l,e))}try{let t=await h[e]?.(g);"string"==typeof t&&s(t)}catch(e){s(e.message)}o.has(e)&&p(l)}else(0,n.R_)(s,a)};t.Z=l},40591:function(e,t,r){r.r(t),r.d(t,{default:function(){return j},resourceAliasMap:function(){return k}});var i=r(85893),n=r(1864),o=r(67294),a=r(2347),l=r(10508),s=r(37725);let c=l.ZP.div(["background-color:#fff;border:1px solid rgb(240,240,240);font-size:12px;figure{display:flex;flex-direction:row;padding:20px 11px 14px;figcaption{line-height:15px;margin-bottom:4px;}img{height:32px;margin-right:19px;width:32px;}}div{display:flex;flex-direction:row;label{margin-top:3px;padding:0 11px;}div{position:relative;width:100%;input,select{border:1px solid rgb(122,122,122);border-radius:0;font-family:",";font-size:12px;height:23px;line-height:16px;margin:0 13px 21px 8px;padding-bottom:2px;padding-left:5px;width:100%;}select{background-color:#fff;clip-path:inset(0 0 0 calc(100% - 20px));position:absolute;width:calc(100% - 21px);&:disabled{border:1px solid rgb(122,122,122);opacity:100%;}}input{border-right:0;margin-right:33px;&:focus{border:1px solid rgb(0,120,215);border-right:0;+ select{border-color:rgb(0,120,215);}}}}}nav{background-color:rgb(240,240,240);display:flex;flex-direction:row;height:100%;","{height:24px;margin-top:19px;position:absolute;right:12px;width:86px;&:first-child{right:107px;}}}"],({theme:e})=>e.formats.systemFont,s.Z);var p=r(6155),h=r(45279),u=r(20063),d=r(58437),f=r(37176),m=r(76488),g=r(97836),w=r(6484),y=r(31746),b=r(82163),x=r(46581);let v="open",k={cmd:"Terminal",code:"MonacoEditor",dos:"JSDOS",explorer:"FileExplorer",monaco:"MonacoEditor",mspaint:"Paint",vlc:"VideoPlayer"},C=`Type the name of a program, folder, document, or Internet resource, and ${g.PACKAGE_DATA.alias} will open it for you.`,$=e=>alert(`Cannot find '${e}'. Make sure you typed the name correctly, and then try again.`),S={esheep:b.default,sheep:b.default};var j=({id:e})=>{let{open:t,closeWithTransition:r,processes:{Run:l}={}}=(0,d.z)(),{createPath:b,exists:j,lstat:P,readFile:L,updateFolder:D}=(0,u.o)(),{foregroundId:E,runHistory:F,setRunHistory:R,updateRecentFiles:A}=(0,m.k)(),_=(0,o.useRef)(null),[M,I]=(0,o.useState)(!0),[T,O]=(0,o.useState)(!F[0]),[B,z]=(0,o.useState)(!1),Z=({target:e})=>O(!e?.value),W=(0,o.useCallback)(async i=>{if(!i)return;z(!0);let o=()=>R(e=>e[0]===i?e:[i,...e]),[l,...s]=(0,a.$4)(i),c=i,h=!0,u=await j(c);u||(c=s.length>0?s.join(" "):l);let d=c.startsWith("nostr:");d&&t("Messenger",{url:c});let m=c.startsWith("ipfs://");if(u||d||m||await j(c)){if(m)try{let e=await (0,y.getIpfsResource)(c);c=(0,n.join)(g.Ll,await b(await (0,y.getIpfsFileName)(c,e),g.Ll,e)),D(g.Ll,(0,n.basename)(c))}catch{}if((await P(c)).isDirectory())t("FileExplorer",{url:c},""),o();else if(l&&s.length>0&&c!==i){let e=Object.keys(f.Z).find(e=>e.toLowerCase()===l.toLowerCase());if(e){let r="Browser"===e&&m?s.join(" "):c;t(e,{url:r}),o(),r&&A(r,e)}else $(l),h=!1}else{let e=(0,w.RT)(c);if(e===g.zm){let{pid:e,url:r}=(0,p.OE)(await L(c));e&&(t(e,{url:r}),r&&A(r,e))}else{let r=(0,p.Wd)(e)||"OpenWith",n="Browser"===r&&m?i:c;t(r,{url:n}),n&&r&&A(n,r)}o()}}else{let e=Object.keys(f.Z).find(e=>e.toLowerCase()===(k[c.toLowerCase()]||c).toLowerCase());e?(t(e),o()):S[i.toLowerCase()]?(S[i.toLowerCase()](),o()):($(i),h=!1)}z(!1),h&&r(e)},[r,b,j,e,P,t,L,R,D,A]);return(0,o.useLayoutEffect)(()=>{E===e&&(_.current?.focus(g.eS),_.current?.value&&_.current?.select())},[E,e]),(0,o.useLayoutEffect)(()=>{l?.url&&_.current&&(_.current.value=`${_.current.value.trimEnd()} ${l.url}`.trim(),O(!1))},[l?.url]),(0,i.jsxs)(c,{...(0,h.Z)({id:e}),onContextMenu:e=>{e.target instanceof HTMLInputElement||(0,w.nK)(e)},children:[(0,i.jsxs)("figure",{children:[(0,i.jsx)(x.Z,{alt:"Run",imgSize:32,src:`${g.OT}/run.webp`}),(0,i.jsx)("figcaption",{children:C})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("label",{htmlFor:v,children:"Open:"}),(0,i.jsxs)("div",{children:[(0,i.jsx)("input",{ref:_,defaultValue:F[0],disabled:B,enterKeyHint:"go",id:v,onBlurCapture:({relatedTarget:e})=>{!l?.componentWindow||l.componentWindow.contains(e)?_.current?.focus(g.eS):I(!1)},onChange:Z,onFocusCapture:()=>I(!0),onKeyDownCapture:t=>{let{key:i}=t;"Enter"===i&&W(_.current?.value.trim()),"Escape"===i&&((0,w.nK)(t),r(e))},onKeyUp:Z,type:"text",...g.AA}),(0,i.jsx)("select",{disabled:0===F.length,onChange:({target:e})=>{_.current&&(_.current.value=e.value,O(!1))},onClick:({target:e})=>{e instanceof HTMLSelectElement&&-1!==e.selectedIndex&&(e.selectedIndex=-1)},children:F.map((e,t)=>(0,i.jsx)("option",{value:e,children:e},`${e}-${t}`))})]})]}),(0,i.jsxs)("nav",{children:[(0,i.jsx)(s.Z,{className:M?"focus":"",disabled:T||B,onClick:()=>W(_.current?.value.trim()),children:"OK"}),(0,i.jsx)(s.Z,{disabled:B,onClick:()=>r(e),children:"Cancel"})]})]})}},37725:function(e,t,r){let i=r(10508).ZP.button(["background-color:rgb(225,225,225);border:1px solid rgb(173,173,173);color:#000;display:grid;font-family:",";font-size:12px;height:23px;line-height:","px;transition:background-color 0.25s ease;width:73px;&:focus,&.focus{border:2px solid rgb(0,120,215);line-height:","px;}&:hover{background-color:rgb(229,241,251);border:1px solid rgb(0,120,215);line-height:","px;}&:active{background-color:rgb(204,228,247);border:1px solid rgb(0,84,153);line-height:","px;transition:none;}&:disabled{background-color:rgb(204,204,204);border:1px solid rgb(191,191,191);color:#808080;line-height:","px;}"],({theme:e})=>e.formats.systemFont,21,19,21,21,21);t.Z=i},45279:function(e,t,r){var i=r(1864),n=r(67294),o=r(59746),a=r(23736),l=r(89670),s=r(20063),c=r(58437),p=r(76488),h=r(97836),u=r(6484);t.Z=({callback:e,directory:t=h.Ll,id:r,onDragLeave:d,onDragOver:f,updatePositions:m})=>{let{url:g}=(0,c.z)(),{iconPositions:w,sortOrders:y,setIconPositions:b}=(0,p.k)(),{exists:x,mkdirRecursive:v,updateFolder:k,writeFile:C}=(0,s.o)(),$=(0,n.useCallback)(async(e,t,n)=>{if(r){if(t){let o=(0,i.join)(h.Ll,e);if(await v(h.Ll),await C(o,t,!0))return n===l.v.UPDATE_URL&&g(r,o),await k(h.Ll,e),(0,i.basename)(o)}else n===l.v.UPDATE_URL&&g(r,e)}return""},[r,v,k,g,C]),{openTransferDialog:S}=(0,o.Z)();return{onDragLeave:d,onDragOver:e=>{f?.(e),(0,u.nK)(e)},onDrop:n=>{if(!h.my.has((0,u.RT)(t))){if(m&&n.target instanceof HTMLElement){let{files:e,text:r}=(0,a.p4)(n);if(0===e.length&&""===r)return;let o={x:n.clientX,y:n.clientY},l=[];if(r){try{l=JSON.parse(r)}catch{}if(!Array.isArray(l))return;let[e]=l;if(!e||e.startsWith(t)&&(0,i.basename)(e)===(0,i.relative)(t,e))return;l=l.map(e=>(0,i.basename)(e))}else e instanceof FileList?l=[...e].map(e=>e.name):l=[...e].map(e=>e.getAsFile()?.name||"").filter(Boolean);l=l.map(e=>{if(!w[`${t}/${e}`])return e;let r=0,n="";do r+=1,n=`${t}/${(0,i.basename)(e,(0,i.extname)(e))} (${r})${(0,i.extname)(e)}`;while(w[n]);return(0,i.basename)(n)}),(0,u.vi)(t,n.target,w,y,o,l,b,x)}(0,a.WG)(n,e||$,t,S,!!r)}}}}},31746:function(e,t,r){r.d(t,{getIpfsFileName:function(){return c},getIpfsGatewayUrl:function(){return s},getIpfsResource:function(){return p}});var i=r(97836),n=r(48764).Buffer;let o="",a=["https://<CID>.ipfs.cf-ipfs.com/","https://<CID>.ipfs.dweb.link/","https://cloudflare-ipfs.com/ipfs/<CID>/","https://gateway.ipfs.io/ipfs/<CID>/"],l=e=>new Promise(t=>{let r=window.setTimeout(()=>t(!1),i.i2),n=new Image;n.addEventListener("load",()=>{window.clearTimeout(r),t(!0)},i.K7),n.addEventListener("error",()=>{window.clearTimeout(r),t(!1)},i.K7),n.src=`${e.replace("<CID>","bafybeibwzifw52ttrkqlikfzext5akxu7lz4xiwjgwzmqcpdzmp3n5vnbe")}?now=${Date.now()}&filename=1x1.png#x-ipfs-companion-no-redirect`}),s=async(e,t)=>{if(!o||t){for(let e of t?a.filter(e=>e!==o):a)if(await l(e)){o=e;break}if(!o)return""}let{pathname:i,protocol:n,search:s}=new URL(e);if("ipfs:"!==n)return"";let[c="",...p]=i.split("/").filter(Boolean),{CID:h}=await r.e(2856,"high").then(r.bind(r,72856));return`${o.replace("<CID>",h.parse(c).toV1().toString())}${p.join("/")}${s}`},c=async(e,t)=>{let{pathname:i,searchParams:n}=new URL(e),o=n.get("filename");if(o)return o;let{fileTypeFromBuffer:a}=await Promise.all([r.e(8090,"high"),r.e(3545,"high"),r.e(3301,"high")]).then(r.bind(r,53545)),{ext:l=""}=await a(t)||{};return`${i.split("/").filter(Boolean).join("_")}${l?`.${l}`:""}`},p=async e=>{let t;let r={...i.P8,cache:"no-cache",credentials:"omit",keepalive:!1,mode:"cors",referrerPolicy:"no-referrer",window:null};try{t=await fetch(await s(e),r)}catch(i){"Failed to fetch"===i.message&&(t=await fetch(await s(e,!0),r))}return t instanceof Response?n.from(await t.arrayBuffer()):n.from("")}},82163:function(e,t,r){var i=r(6484);let n={blue_sheep:["/Program Files/eSheep/blue_sheep.xml",12],eSheep:["/Program Files/eSheep/eSheep.xml",12],fox:["/Program Files/eSheep/fox.xml",4],green_sheep:["/Program Files/eSheep/green_sheep.xml",12],mimiko:["/Program Files/eSheep/mimiko.xml",4],neko:["/Program Files/eSheep/neko.xml",10],orange_sheep:["/Program Files/eSheep/orange_sheep.xml",12],pingus:["/Program Files/eSheep/pingus.xml",10],red_sheep:["/Program Files/eSheep/red_sheep.xml",12],yellow_sheep:["/Program Files/eSheep/yellow_sheep.xml",12]},o=!1,a=()=>{let e=Object.keys(n).flatMap(e=>{let[,t]=n[e];return Array.from({length:t}).fill(e)}),t=Math.floor(Math.random()*e.length),[r]=n[e[t]];return r};t.default=()=>(0,i.mb)(["/Program Files/eSheep/eSheep.js"]).then(()=>{if(window.Sheep){let e=new window.Sheep({allowPopup:"no",collisionsWith:["nav","section"],spawnContainer:document.querySelector("main")});o?e.Start(a()):(o=!0,e.Start("/Program Files/eSheep/eSheep.xml"))}})}}]);
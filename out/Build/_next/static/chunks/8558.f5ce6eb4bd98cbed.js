"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8558, 3333],
  {
    30595: function (e, t, n) {
      n.d(t, {
        Fg: function () {
          return o;
        },
        VT: function () {
          return l;
        },
        Wt: function () {
          return r;
        },
      });
      var i = n(97836);
      let o = (e) => e?.mode.isReadOnly() || !e?.getContent(),
        r = (e, t) => {
          let n = e.editorContainer?.querySelector(".tox-editor-header");
          n instanceof HTMLDivElement &&
            n.addEventListener(
              "click",
              () => {
                n.removeAttribute("title"), e.mode.set("design"), t();
              },
              i.K7
            ),
            e.mode.set("readonly");
        },
        a = new Set(["wikipedia.org", "archive.org"]),
        l = (e) => {
          if (!e) return !1;
          try {
            let { hostname: t } = new URL(e),
              [, n, i] = t.split(".");
            return a.has(`${n}.${i}`) || a.has(t);
          } catch {
            return !1;
          }
        };
    },
    48558: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return x;
          },
        });
      var i = n(85893);
      let o = n(10508).ZP.div([
        'height:100%;[role="application"]{border-radius:0;height:100% !important;button:disabled{pointer-events:none;}.tox-statusbar{font-size:12px;}&[aria-disabled="true"]{.tox-editor-header{height:0;margin-top:-1px;overflow:hidden;padding:0;position:relative;visibility:hidden;&::after{bottom:0;color:rgb(200,200,200);content:"Edit Document";cursor:pointer;display:flex;font-size:12px;font-weight:600;height:24px;left:0;padding:0 10px;padding-bottom:2px;place-content:center;place-items:center;position:fixed;transform:translateZ(0);visibility:visible;width:auto;z-index:1;}&:hover::after{background-color:rgba(255,255,255,15%);}.tox-toolbar-overlord{display:none;}}.tox-statusbar__path-item{display:none;}}iframe{background-color:#202124;}}',
      ]);
      var r = n(1864),
        a = n(67294),
        l = n(97836);
      let s = {
        base_url: "/Program Files/TinyMCE/",
        branding: !1,
        contextmenu: "",
        draggable_modal: !0,
        help_accessibility: !1,
        image_advtab: !0,
        plugins: `
  code help image link save wordcount`,
        promotion: !1,
        suffix: ".min",
        toolbar: `
  save undo redo | formatselect | bold italic underline | forecolor backcolor |
  alignleft aligncenter alignright | outdent indent | code help`,
      },
        c = `${l.Ll}/New Rich Text Document.whtml`;
      var d = n(30595),
        u = n(6155),
        m = n(45279),
        f = n(44696),
        p = n(20063),
        h = n(58437),
        g = n(76488),
        b = n(6484),
        w = n(21054),
        v = ({ containerRef: e, id: t, setLoading: i, url: o }) => {
          let { processes: { [t]: { libs: v = [] } = {} } = {}, url: y } = (0, h.z)(),
            [x, E] = (0, a.useState)(),
            { prependFileToTitle: k } = (0, f.Z)(t),
            { readFile: $, stat: T, updateFolder: L, writeFile: C } = (0, p.o)(),
            { onDragOver: W, onDrop: R } = (0, m.Z)({ id: t }),
            { setForegroundId: _ } = (0, g.k)(),
            D = (0, a.useCallback)(
              async (e) => {
                let t = new Date((0, u.GA)(e, await T(e))),
                  n = new Intl.DateTimeFormat(l.ZW, { dateStyle: "medium" }).format(t);
                k(`${(0, r.basename)(e, (0, r.extname)(e))} (${n})`);
              },
              [k, T]
            ),
            Z = (0, w.p)(),
            S = (0, a.useCallback)(() => {
              let t = e.current?.querySelector("iframe");
              t?.contentWindow &&
                [...t.contentWindow.document.links].forEach((e) =>
                  e.addEventListener("click", (t) => {
                    x?.mode.isReadOnly() && Z(t, e.dataset.mceHref || "", e.pathname, e.textContent || "");
                  })
                );
            }, [e, x?.mode, Z]),
            F = (0, a.useCallback)(async () => {
              if (x) {
                let e = () => {
                  x.options.set("save_onsavecallback", async () => {
                    let e = { closeButton: !0, text: "Successfully saved.", timeout: 5e3, type: "success" },
                      t = o || c;
                    try {
                      await C(".rtf" === (0, b.RT)(t) ? t.replace(".rtf", ".whtml") : t, x.getContent(), !0), L((0, r.dirname)(t), (0, r.basename)(t)), D(t);
                    } catch {
                      (e.text = "Error occurred while saving."), (e.type = "error");
                    }
                    x.notificationManager.open(e);
                    let n = x.notificationManager.getNotifications()?.[0]?.getEl()?.parentElement,
                      i = x.editorContainer;
                    n instanceof HTMLElement &&
                      i instanceof HTMLElement &&
                      (i.append(n), n.setAttribute("style", "position: absolute; right: 0; bottom: 0; padding: 33px 25px;"), n.querySelector("[role=alert]")?.setAttribute("style", "opacity: 1;"));
                  });
                },
                  t = await $(o);
                if (0 === t.length) x.mode.set("design"), e();
                else {
                  if (((0, d.Wt)(x, e), ".rtf" === (0, b.RT)(o))) {
                    let { RTFJS: e } = await Promise.all([n.e(8705, "high"), n.e(3131, "high")]).then(n.bind(n, 83131)),
                      i = new e.Document(t),
                      o = await i.render();
                    x.setContent(o.map((e) => e.outerHTML).join(""));
                  } else x.setContent(t.toString());
                  S(), x.iframeElement?.contentDocument && (x.iframeElement.contentDocument.documentElement.scrollTop = 0);
                }
                D(o);
              }
            }, [x, S, $, L, D, o, C]),
            j = (0, a.useRef)(!1);
          (0, a.useEffect)(() => {
            x ||
              j.current ||
              ((j.current = !0),
                (0, b.mb)(v).then(() => {
                  window.tinymce &&
                    e.current &&
                    (window.tinymce.remove(),
                      window.tinymce
                        .init({
                          readonly: !!o,
                          selector: `.${[...e.current.classList].join(".")} div`,
                          setup: (e) => {
                            e.on("ExecCommand", ({ command: e }) => {
                              "mceNewDocument" === e && (y(t, ""), k(""));
                            });
                          },
                          ...s,
                        })
                        .then(([n]) => {
                          let o = e.current?.querySelector("iframe");
                          o?.contentWindow &&
                            (o.contentWindow.addEventListener("dragover", (e) => {
                              (0, d.Fg)(n) && W(e);
                            }),
                              o.contentWindow.addEventListener("drop", (e) => {
                                (0, d.Fg)(n) && R(e);
                              }),
                              o.contentWindow.addEventListener("blur", () => _((e) => (e === t ? "" : e))),
                              o.contentWindow.addEventListener("focus", () => _(t)),
                              o.contentWindow.addEventListener("mousedown", ({ pageX: e }) => o.contentWindow && e > o.contentWindow.innerWidth - l.BQ && _(t))),
                            E(n),
                            i(!1);
                        }));
                }));
          }, [e, x, t, v, W, R, k, _, i, y, o]),
            (0, a.useEffect)(() => {
              o && x && F();
            }, [x, F, o]),
            (0, a.useEffect)(
              () => () => {
                window.setTimeout(() => x?.destroy(), 0);
              },
              [x]
            );
        },
        y = n(7443),
        x = ({ id: e }) => (0, i.jsx)(y.Z, { StyledComponent: o, id: e, useHook: v, children: (0, i.jsx)("div", {}) });
    },
    7443: function (e, t, n) {
      var i = n(85893),
        o = n(67294),
        r = n(33333),
        a = n(45279),
        l = n(58437);
      t.Z = (0, o.memo)(({ id: e, useHook: t, StyledComponent: n, children: s }) => {
        let {
          processes: { [e]: { url: c = "" } = {} },
        } = (0, l.z)(),
          d = (0, o.useRef)(null),
          [u, m] = (0, o.useState)(!0),
          f = (0, o.useMemo)(() => ({ contain: "strict", visibility: u ? "hidden" : "visible" }), [u]);
        return t({ containerRef: d, id: e, loading: u, setLoading: m, url: c }), (0, i.jsxs)(i.Fragment, { children: [u && (0, i.jsx)(r.default, {}), (0, i.jsx)(n, { ref: d, style: f, ...(0, a.Z)({ id: e }), children: s })] });
      });
    },
    33333: function (e, t, n) {
      n.r(t);
      let i = n(10508).ZP.div(['cursor:wait;height:100%;width:100%;&::before{color:#fff;content:"Working on it...";display:flex;font-size:12px;justify-content:center;mix-blend-mode:difference;padding-top:18px;}']);
      t.default = i;
    },
    45279: function (e, t, n) {
      var i = n(1864),
        o = n(67294),
        r = n(59746),
        a = n(23736),
        l = n(89670),
        s = n(20063),
        c = n(58437),
        d = n(76488),
        u = n(97836),
        m = n(6484);
      t.Z = ({ callback: e, directory: t = u.Ll, id: n, onDragLeave: f, onDragOver: p, updatePositions: h }) => {
        let { url: g } = (0, c.z)(),
          { iconPositions: b, sortOrders: w, setIconPositions: v } = (0, d.k)(),
          { exists: y, mkdirRecursive: x, updateFolder: E, writeFile: k } = (0, s.o)(),
          $ = (0, o.useCallback)(
            async (e, t, o) => {
              if (n) {
                if (t) {
                  let r = (0, i.join)(u.Ll, e);
                  if ((await x(u.Ll), await k(r, t, !0))) return o === l.v.UPDATE_URL && g(n, r), await E(u.Ll, e), (0, i.basename)(r);
                } else o === l.v.UPDATE_URL && g(n, e);
              }
              return "";
            },
            [n, x, E, g, k]
          ),
          { openTransferDialog: T } = (0, r.Z)();
        return {
          onDragLeave: f,
          onDragOver: (e) => {
            p?.(e), (0, m.nK)(e);
          },
          onDrop: (o) => {
            if (!u.my.has((0, m.RT)(t))) {
              if (h && o.target instanceof HTMLElement) {
                let { files: e, text: n } = (0, a.p4)(o);
                if (0 === e.length && "" === n) return;
                let r = { x: o.clientX, y: o.clientY },
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
                  if (!b[`${t}/${e}`]) return e;
                  let n = 0,
                    o = "";
                  do (n += 1), (o = `${t}/${(0, i.basename)(e, (0, i.extname)(e))} (${n})${(0, i.extname)(e)}`);
                  while (b[o]);
                  return (0, i.basename)(o);
                })),
                  (0, m.vi)(t, o.target, b, w, r, l, v, y);
              }
              (0, a.WG)(o, e || $, t, T, !!n);
            }
          },
        };
      };
    },
    44696: function (e, t, n) {
      var i = n(67294),
        o = n(58437),
        r = n(37176),
        a = n(97836);
      t.Z = (e) => {
        let { title: t } = (0, o.z)(),
          [n] = e.split(a.CC),
          { title: l } = r.Z[n] || {};
        return {
          appendFileToTitle: (0, i.useCallback)(
            (n, i) => {
              let o = n ? ` - ${n}${i ? ` ${a.xy}` : ""}` : "";
              t(e, `${l}${o}`);
            },
            [e, l, t]
          ),
          prependFileToTitle: (0, i.useCallback)(
            (n, i, o) => {
              let r = n ? `${i ? `${a.xy} ` : ""}${n}${o ? " " : " - "}` : "";
              t(e, `${r}${l}`);
            },
            [e, l, t]
          ),
        };
      };
    },
    21054: function (e, t, n) {
      n.d(t, {
        p: function () {
          return c;
        },
      });
      var i = n(1864),
        o = n(67294),
        r = n(30595),
        a = n(6155),
        l = n(58437),
        s = n(6484);
      let c = () => {
        let { open: e } = (0, l.z)();
        return (0, o.useCallback)(
          (t, n, o, l) => {
            if (((0, s.nK)(t), (0, s.yk)(n))) e("VideoPlayer", { url: n });
            else if ((0, r.VT)(n)) e("Browser", { initialTitle: l, url: n });
            else if (o && "" !== (0, i.relative)(decodeURI((n.startsWith("/") ? n : `/${n}`).replace(window.location.origin, "")), decodeURI(o))) window.open(n, "_blank", "noopener, noreferrer");
            else {
              let t = (0, a.Wd)((0, s.RT)(o));
              t && e(t, { url: decodeURI(o) });
            }
          },
          [e]
        );
      };
    },
  },
]);



// "use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8558,3333],{30595:function(e,t,n){n.d(t,{Fg:function(){return o},VT:function(){return l},Wt:function(){return r}});var i=n(97836);let o=e=>e?.mode.isReadOnly()||!e?.getContent(),r=(e,t)=>{let n=e.editorContainer?.querySelector(".tox-editor-header");n instanceof HTMLDivElement&&n.addEventListener("click",()=>{n.removeAttribute("title"),e.mode.set("design"),t()},i.K7),e.mode.set("readonly")},a=new Set(["wikipedia.org","archive.org"]),l=e=>{if(!e)return!1;try{let{hostname:t}=new URL(e),[,n,i]=t.split(".");return a.has(`${n}.${i}`)||a.has(t)}catch{return!1}}},48558:function(e,t,n){n.r(t),n.d(t,{default:function(){return x}});var i=n(85893);let o=n(10508).ZP.div(['height:100%;[role="application"]{border-radius:0;height:100% !important;button:disabled{pointer-events:none;}.tox-statusbar{font-size:12px;}&[aria-disabled="true"]{.tox-editor-header{height:0;margin-top:-1px;overflow:hidden;padding:0;position:relative;visibility:hidden;&::after{bottom:0;color:rgb(200,200,200);content:"Edit Document";cursor:pointer;display:flex;font-size:12px;font-weight:600;height:24px;left:0;padding:0 10px;padding-bottom:2px;place-content:center;place-items:center;position:fixed;transform:translateZ(0);visibility:visible;width:auto;z-index:1;}&:hover::after{background-color:rgba(255,255,255,15%);}.tox-toolbar-overlord{display:none;}}.tox-statusbar__path-item{display:none;}}iframe{background-color:#202124;}}']);var r=n(1864),a=n(67294),l=n(97836);let s={base_url:"/Program Files/TinyMCE/",branding:!1,contextmenu:"",draggable_modal:!0,help_accessibility:!1,image_advtab:!0,plugins:`
//   code help image link save wordcount`,promotion:!1,suffix:".min",toolbar:`
//   save undo redo | formatselect | bold italic underline | forecolor backcolor |
//   alignleft aligncenter alignright | outdent indent | code help`},c=`${l.Ll}/New Rich Text Document.whtml`;var d=n(30595),u=n(6155),m=n(45279),f=n(44696),p=n(20063),h=n(58437),g=n(76488),b=n(6484),w=n(21054),v=({containerRef:e,id:t,setLoading:i,url:o})=>{let{processes:{[t]:{libs:v=[]}={}}={},url:y}=(0,h.z)(),[x,E]=(0,a.useState)(),{prependFileToTitle:k}=(0,f.Z)(t),{readFile:$,stat:T,updateFolder:L,writeFile:C}=(0,p.o)(),{onDragOver:W,onDrop:R}=(0,m.Z)({id:t}),{setForegroundId:_}=(0,g.k)(),D=(0,a.useCallback)(async e=>{let t=new Date((0,u.GA)(e,await T(e))),n=new Intl.DateTimeFormat(l.ZW,{dateStyle:"medium"}).format(t);k(`${(0,r.basename)(e,(0,r.extname)(e))} (${n})`)},[k,T]),Z=(0,w.p)(),S=(0,a.useCallback)(()=>{let t=e.current?.querySelector("iframe");t?.contentWindow&&[...t.contentWindow.document.links].forEach(e=>e.addEventListener("click",t=>{x?.mode.isReadOnly()&&Z(t,e.dataset.mceHref||"",e.pathname,e.textContent||"")}))},[e,x?.mode,Z]),F=(0,a.useCallback)(async()=>{if(x){let e=()=>{x.options.set("save_onsavecallback",async()=>{let e={closeButton:!0,text:"Successfully saved.",timeout:5e3,type:"success"},t=o||c;try{await C(".rtf"===(0,b.RT)(t)?t.replace(".rtf",".whtml"):t,x.getContent(),!0),L((0,r.dirname)(t),(0,r.basename)(t)),D(t)}catch{e.text="Error occurred while saving.",e.type="error"}x.notificationManager.open(e);let n=x.notificationManager.getNotifications()?.[0]?.getEl()?.parentElement,i=x.editorContainer;n instanceof HTMLElement&&i instanceof HTMLElement&&(i.append(n),n.setAttribute("style","position: absolute; right: 0; bottom: 0; padding: 33px 25px;"),n.querySelector("[role=alert]")?.setAttribute("style","opacity: 1;"))})},t=await $(o);if(0===t.length)x.mode.set("design"),e();else{if((0,d.Wt)(x,e),".rtf"===(0,b.RT)(o)){let{RTFJS:e}=await Promise.all([n.e(8705,"high"),n.e(3131,"high")]).then(n.bind(n,83131)),i=new e.Document(t),o=await i.render();x.setContent(o.map(e=>e.outerHTML).join(""))}else x.setContent(t.toString());S(),x.iframeElement?.contentDocument&&(x.iframeElement.contentDocument.documentElement.scrollTop=0)}D(o)}},[x,S,$,L,D,o,C]),j=(0,a.useRef)(!1);(0,a.useEffect)(()=>{x||j.current||(j.current=!0,(0,b.mb)(v).then(()=>{window.tinymce&&e.current&&(window.tinymce.remove(),window.tinymce.init({readonly:!!o,selector:`.${[...e.current.classList].join(".")} div`,setup:e=>{e.on("ExecCommand",({command:e})=>{"mceNewDocument"===e&&(y(t,""),k(""))})},...s}).then(([n])=>{let o=e.current?.querySelector("iframe");o?.contentWindow&&(o.contentWindow.addEventListener("dragover",e=>{(0,d.Fg)(n)&&W(e)}),o.contentWindow.addEventListener("drop",e=>{(0,d.Fg)(n)&&R(e)}),o.contentWindow.addEventListener("blur",()=>_(e=>e===t?"":e)),o.contentWindow.addEventListener("focus",()=>_(t)),o.contentWindow.addEventListener("mousedown",({pageX:e})=>o.contentWindow&&e>o.contentWindow.innerWidth-l.BQ&&_(t))),E(n),i(!1)}))}))},[e,x,t,v,W,R,k,_,i,y,o]),(0,a.useEffect)(()=>{o&&x&&F()},[x,F,o]),(0,a.useEffect)(()=>()=>{window.setTimeout(()=>x?.destroy(),0)},[x])},y=n(7443),x=({id:e})=>(0,i.jsx)(y.Z,{StyledComponent:o,id:e,useHook:v,children:(0,i.jsx)("div",{})})},7443:function(e,t,n){var i=n(85893),o=n(67294),r=n(33333),a=n(45279),l=n(58437);t.Z=(0,o.memo)(({id:e,useHook:t,StyledComponent:n,children:s})=>{let{processes:{[e]:{url:c=""}={}}}=(0,l.z)(),d=(0,o.useRef)(null),[u,m]=(0,o.useState)(!0),f=(0,o.useMemo)(()=>({contain:"strict",visibility:u?"hidden":"visible"}),[u]);return t({containerRef:d,id:e,loading:u,setLoading:m,url:c}),(0,i.jsxs)(i.Fragment,{children:[u&&(0,i.jsx)(r.default,{}),(0,i.jsx)(n,{ref:d,style:f,...(0,a.Z)({id:e}),children:s})]})})},33333:function(e,t,n){n.r(t);let i=n(10508).ZP.div(['cursor:wait;height:100%;width:100%;&::before{color:#fff;content:"Working on it...";display:flex;font-size:12px;justify-content:center;mix-blend-mode:difference;padding-top:18px;}']);t.default=i},45279:function(e,t,n){var i=n(1864),o=n(67294),r=n(59746),a=n(23736),l=n(89670),s=n(20063),c=n(58437),d=n(76488),u=n(97836),m=n(6484);t.Z=({callback:e,directory:t=u.Ll,id:n,onDragLeave:f,onDragOver:p,updatePositions:h})=>{let{url:g}=(0,c.z)(),{iconPositions:b,sortOrders:w,setIconPositions:v}=(0,d.k)(),{exists:y,mkdirRecursive:x,updateFolder:E,writeFile:k}=(0,s.o)(),$=(0,o.useCallback)(async(e,t,o)=>{if(n){if(t){let r=(0,i.join)(u.Ll,e);if(await x(u.Ll),await k(r,t,!0))return o===l.v.UPDATE_URL&&g(n,r),await E(u.Ll,e),(0,i.basename)(r)}else o===l.v.UPDATE_URL&&g(n,e)}return""},[n,x,E,g,k]),{openTransferDialog:T}=(0,r.Z)();return{onDragLeave:f,onDragOver:e=>{p?.(e),(0,m.nK)(e)},onDrop:o=>{if(!u.my.has((0,m.RT)(t))){if(h&&o.target instanceof HTMLElement){let{files:e,text:n}=(0,a.p4)(o);if(0===e.length&&""===n)return;let r={x:o.clientX,y:o.clientY},l=[];if(n){try{l=JSON.parse(n)}catch{}if(!Array.isArray(l))return;let[e]=l;if(!e||e.startsWith(t)&&(0,i.basename)(e)===(0,i.relative)(t,e))return;l=l.map(e=>(0,i.basename)(e))}else e instanceof FileList?l=[...e].map(e=>e.name):l=[...e].map(e=>e.getAsFile()?.name||"").filter(Boolean);l=l.map(e=>{if(!b[`${t}/${e}`])return e;let n=0,o="";do n+=1,o=`${t}/${(0,i.basename)(e,(0,i.extname)(e))} (${n})${(0,i.extname)(e)}`;while(b[o]);return(0,i.basename)(o)}),(0,m.vi)(t,o.target,b,w,r,l,v,y)}(0,a.WG)(o,e||$,t,T,!!n)}}}}},44696:function(e,t,n){var i=n(67294),o=n(58437),r=n(37176),a=n(97836);t.Z=e=>{let{title:t}=(0,o.z)(),[n]=e.split(a.CC),{title:l}=r.Z[n]||{};return{appendFileToTitle:(0,i.useCallback)((n,i)=>{let o=n?` - ${n}${i?` ${a.xy}`:""}`:"";t(e,`${l}${o}`)},[e,l,t]),prependFileToTitle:(0,i.useCallback)((n,i,o)=>{let r=n?`${i?`${a.xy} `:""}${n}${o?" ":" - "}`:"";t(e,`${r}${l}`)},[e,l,t])}}},21054:function(e,t,n){n.d(t,{p:function(){return c}});var i=n(1864),o=n(67294),r=n(30595),a=n(6155),l=n(58437),s=n(6484);let c=()=>{let{open:e}=(0,l.z)();return(0,o.useCallback)((t,n,o,l)=>{if((0,s.nK)(t),(0,s.yk)(n))e("VideoPlayer",{url:n});else if((0,r.VT)(n))e("Browser",{initialTitle:l,url:n});else if(o&&""!==(0,i.relative)(decodeURI((n.startsWith("/")?n:`/${n}`).replace(window.location.origin,"")),decodeURI(o)))window.open(n,"_blank","noopener, noreferrer");else{let t=(0,a.Wd)((0,s.RT)(o));t&&e(t,{url:decodeURI(o)})}},[e])}}}]);
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8019],
  {
    8019: function (t, e, n) {
      n.d(e, {
        $z: function () {
          return P;
        },
        AY: function () {
          return g;
        },
        CC: function () {
          return d;
        },
        Iu: function () {
          return T;
        },
        NN: function () {
          return c;
        },
        RO: function () {
          return N;
        },
        WZ: function () {
          return D;
        },
        Z3: function () {
          return w;
        },
        createM3uPlaylist: function () {
          return R;
        },
        g: function () {
          return m;
        },
        mW: function () {
          return M;
        },
        ns: function () {
          return f;
        },
        om: function () {
          return _;
        },
        r$: function () {
          return C;
        },
        tracksFromPlaylist: function () {
          return $;
        },
        uG: function () {
          return O;
        },
        vy: function () {
          return h;
        },
      });
      var r = n(38365),
        i = n(97836),
        o = n(6484);
      let a = new Set(["Flexi - alien fish pond", "Geiss - Spiral Artifact"]),
        s = `${i.Sd}/Documents/Winamp Skins`,
        l = ["localhost", i.PACKAGE_DATA.author.url.replace("https://", "")].includes(window.location.hostname),
        u = (t) => `
  query {
    skins(filter: APPROVED, first: 1, offset: ${t}) {
      nodes {
        download_url
      }
    }
  }
`,
        h = {
          availableSkins: [
            { name: "Aqua X", url: `${s}/Aqua_X.wsz` },
            { name: "Nucleo NLog v2G", url: `${s}/Nucleo_NLog_v102.wsz` },
            ...(l
              ? [
                {
                  defaultName: "Random (Winamp Skin Museum)",
                  loading: !1,
                  get name() {
                    if (this.loading) return this.defaultName;
                    return (
                      (this.loading = !0),
                      fetch("https://api.webamp.org/graphql", { body: JSON.stringify({ query: u(Math.floor(1e3 * Math.random())) }), headers: { "Content-Type": "application/json" }, method: "POST" }).then(
                        async (t) => {
                          let { data: e } = (await t.json()) || {};
                          (this.skinUrl = e?.skins?.nodes?.[0]?.download_url), (this.loading = !1);
                        }
                      ),
                      this.defaultName
                    );
                  },
                  skinUrl: "",
                  get url() {
                    return this.skinUrl || `${s}/base-2.91.wsz`;
                  },
                },
              ]
              : []),
            { name: "SpyAMP Professional Edition v5", url: `${s}/SpyAMP_Professional_Edition_v5.wsz` },
          ],
        },
        p = { height: 116, width: 275 },
        c = "#main-window",
        d = "#playlist-window",
        m = (t, e = "") =>
          t.skinIsLoaded().then(() => {
            e && (0, o.EK)(e);
          }),
        f = (t) => t.store.dispatch({ type: "CLOSE_WINDOW", windowId: "equalizer" }),
        w = (t) => t.store.dispatch({ open: !1, type: "ENABLE_MILKDROP" }),
        g = (t, e) => t.store.dispatch({ data: e, type: "SET_SKIN_DATA" }),
        y = (t, e) => t.store.dispatch({ butterchurn: e, type: "GOT_BUTTERCHURN" }),
        b = (t, e) => t.store.dispatch({ presets: e, type: "GOT_BUTTERCHURN_PRESETS" }),
        S = (t) => {
          let { presetHistory: e = [], presets: n = [] } = t.store.getState()?.milkdrop || {},
            r = Math.floor(Math.random() * n.length),
            i = n[r];
          return !i.name || a.has(i.name) || e.slice(-5).includes(r) ? S(t) : r;
        },
        T = (t) => {
          let e = S(t);
          t.store.dispatch({ addToHistory: !0, index: e, type: "PRESET_REQUESTED" }), t.store.dispatch({ index: e, type: "SELECT_PRESET_AT_INDEX" });
        },
        x = 0,
        E = (t) => {
          window.clearInterval(x),
            (x = window.setInterval(() => {
              t || window.clearInterval(x), T(t);
            }, 2e4));
        },
        _ = (t) => {
          let e = t.store.subscribe(() => {
            let { milkdrop: r, windows: i } = t.store.getState();
            i?.genWindows?.milkdrop?.open &&
              !r?.butterchurn &&
              (0, o.mb)(["/Program Files/Webamp/butterchurn.min.js"]).then(() => {
                if (!window.butterchurn?.default) return;
                y(t, window.butterchurn.default);
                let { playlist: r, main: o } = i.genWindows || {},
                  { x: a = 0, y: s = 0 } = (r?.open ? r?.position : o?.position) || {};
                t.store.dispatch({ positions: { milkdrop: { x: a, y: s + p.height } }, type: "UPDATE_WINDOW_POSITIONS" }),
                  e(),
                  t.store.subscribe(() => {
                    let t = [...document.body.children].find((t) => t.classList?.contains("webamp-desktop"));
                    if (t) {
                      let e = document.querySelector("main");
                      e &&
                        ([...e.children].forEach((t) => {
                          t.classList?.contains("webamp-desktop") && t.remove();
                        }),
                          e.append(t));
                    }
                  }),
                  n
                    .e(9986, "high")
                    .then(n.t.bind(n, 36607, 23))
                    .then(({ default: e }) => {
                      b(
                        t,
                        Object.entries(e).map(([t, e]) => ({ name: t, preset: e }))
                      ),
                        T(t),
                        E(t);
                    });
              });
          });
        },
        N = () => document.querySelector("#webamp"),
        D = (t, e) => {
          let { height: n, width: i } = p,
            { x: o, y: a } = e || (0, r.Rf)({ height: 2 * n, width: i });
          t.store.dispatch({ positions: { main: { x: o, y: a }, milkdrop: { x: 0 - i, y: 0 - n }, playlist: { x: o, y: n + a } }, type: "UPDATE_WINDOW_POSITIONS" });
        },
        O = (t, e) => t.store.dispatch({ type: "SET_FOCUSED_WINDOW", window: e }),
        M = (t) => t.store.dispatch({ type: "SET_FOCUSED_WINDOW", window: "" }),
        P = async (t, e) => {
          let { parseBuffer: r } = await Promise.all([n.e(8090, "high"), n.e(2463, "high"), n.e(4726, "high")]).then(n.bind(n, 52463)),
            {
              common: { album: a = "", artist: s = "", title: l = e },
              format: { duration: u = 0 },
            } = await r(t, { mimeType: i.BD, size: t.length }, { duration: !0, skipCovers: !0, skipPostHeaders: !0 });
          return { blob: (0, o.V4)(t, "audio/mpeg"), duration: Math.floor(u), metaData: { album: a, artist: s, title: l } };
        },
        R = (t) => {
          let e = t.map((t) => {
            let e = t.url
              ? `
${t.url.toString()}`
              : "",
              n = t.defaultName;
            return (
              t.metaData?.artist ? (t.metaData?.title ? (n = `${t.metaData.artist} - ${t.metaData.title}`) : n && (n = `${t.metaData.artist} - ${n}`)) : t.metaData?.title && (n = t.metaData.title),
              e ? `#EXTINF:${t.duration ?? -1},${n || ""}${e}` : ""
            );
          });
          return `${["#EXTM3U", ...e.filter(Boolean)].join("\n")}
`;
        },
        $ = async (t, e, r) => {
          let { ASX: i, M3U: o, PLS: a } = await n.e(3454, "high").then(n.t.bind(n, 63454, 23));
          return ({ ".asx": i, ".m3u": o, ".pls": a }[e]?.parse(t).filter(Boolean).slice(0, 1e3) ?? []).map(({ artist: t = "", file: e = "", length: n = 0, title: i = "" }) => {
            let [o, a] = [t.trim(), i.trim()];
            return { duration: n > 0 ? n : 0, metaData: { album: a || r, artist: o, title: a }, url: e };
          });
        },
        k = (t = "") => t.replace(/<!\[CDATA\[|\]\]>/g, ""),
        I = {
          "somafm.com": (t) => async () => {
            let { pathname: e } = new URL(t),
              [n] = e.replace("/", "").split("-"),
              r = await (await fetch(`https://somafm.com/songs/${n}.xml`, { cache: "no-cache", credentials: "omit", keepalive: !1, mode: "cors", referrerPolicy: "no-referrer", window: null })).text(),
              i = new DOMParser().parseFromString(r, "application/xml").querySelector("song"),
              o = i?.querySelector("artist")?.innerHTML,
              a = i?.querySelector("title")?.innerHTML;
            return { artist: k(o), title: k(a) };
          },
        },
        C = (t) => {
          let { host: e } = new URL(t),
            [, n, r] = e.split(".");
          return I[`${n}.${r}`]?.(t);
        };
    },
    918: function (t, e, n) {
      n.d(e, {
        BS: function () {
          return a;
        },
        FC: function () {
          return i;
        },
        F_: function () {
          return r;
        },
        wV: function () {
          return o;
        },
      });
      let r = { bottom: !1, bottomLeft: !1, bottomRight: !1, left: !1, right: !1, top: !1, topLeft: !1, topRight: !1 },
        i = { bottom: !0, bottomLeft: !0, bottomRight: !0, left: !0, right: !0, top: !0, topLeft: !0, topRight: !0 },
        o = 30,
        a = 166,
        s = {
          cancel: ".cancel",
          dragHandleClassName: "handle",
          enableUserSelectHack: !1,
          minHeight: `${o}px`,
          minWidth: `${a}px`,
          resizeHandleStyles: {
            bottom: { bottom: "-3px", cursor: "ns-resize", height: "6px" },
            bottomLeft: { bottom: "-3px", cursor: "nesw-resize", height: "12px", left: "-3px", width: "12px" },
            bottomRight: { bottom: "-3px", cursor: "nwse-resize", height: "12px", right: "-3px", width: "12px" },
            left: { cursor: "ew-resize", left: "-3px", width: "6px" },
            right: { cursor: "ew-resize", right: "-3px", width: "6px" },
            top: { cursor: "ns-resize", height: "6px", top: "-3px" },
            topLeft: { cursor: "nwse-resize", height: "12px", left: "-3px", top: "-3px", width: "12px" },
            topRight: { cursor: "nesw-resize", height: "12px", right: "-3px", top: "-3px", width: "12px" },
          },
        };
      e.ZP = s;
    },
    38365: function (t, e, n) {
      n.d(e, {
        Rf: function () {
          return s;
        },
        b$: function () {
          return h;
        },
        hu: function () {
          return a;
        },
        ix: function () {
          return u;
        },
        mZ: function () {
          return l;
        },
      });
      var r = n(918),
        i = n(97836),
        o = n(6484);
      let a = (t, e, n = [], r = 0) => {
        let [a] = t.split(i.CC),
          s = `${a}${i.CC}`,
          l = n.find((t) => t.startsWith(s)) || "",
          { componentWindow: u } = e?.[l] || {},
          { x: h = 0, y: p = 0, width: c = 0, height: d = 0 } = u?.getBoundingClientRect() || {};
        return !(h + r + c > (0, o.E9)() || p + r + d > (0, o.sI)()) && (h || p) ? { x: h + r, y: p + r } : void 0;
      },
        s = ({ height: t, width: e }) => {
          let [n, r] = [(0, o.sI)(), (0, o.E9)()];
          return { x: Math.floor(r / 2 - (0, o.Vy)(e) / 2), y: Math.floor((n - i.bK) / 2 - (0, o.Vy)(t) / 2) };
        },
        l = { BOTTOM: 15, LEFT: 150, RIGHT: 50, TOP: 15 },
        u = (t, e, n = !1) => {
          let { position: r, size: i } = t || {},
            { x: a = 0, y: s = 0 } = r || {},
            { height: u = 0, width: h = 0 } = i || {};
          return n ? a + l.RIGHT > e.x || a + (0, o.Vy)(h) - l.LEFT < 0 || s + l.BOTTOM > e.y || s + l.TOP < 0 : a < 0 || s < 0 || a + (0, o.Vy)(h) > e.x || s + (0, o.Vy)(u) > e.y;
        },
        h = (t, e) => {
          let n = Number(t.height),
            a = Number(t.width),
            [s, l] = [(0, o.sI)(), (0, o.E9)()],
            u = s - i.bK,
            h = Math.max(r.wV, Math.min(n, u)),
            p = Math.max(r.BS, Math.min(a, l));
          if (!e) return { height: h, width: p };
          let c = n === h,
            d = a === p;
          return c || d
            ? c
              ? d
                ? { height: h, width: p }
                : { height: Math.round(h / (a / p)), width: p }
              : { height: h, width: Math.round(p / (n / h)) }
            : n > a
              ? { height: h, width: Math.round(p / (u / h)) }
              : { height: Math.round(h / (l / p)), width: p };
        };
    },
  },
]);



// "use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8019],{8019:function(t,e,n){n.d(e,{$z:function(){return P},AY:function(){return g},CC:function(){return d},Iu:function(){return T},NN:function(){return c},RO:function(){return N},WZ:function(){return D},Z3:function(){return w},createM3uPlaylist:function(){return R},g:function(){return m},mW:function(){return M},ns:function(){return f},om:function(){return _},r$:function(){return C},tracksFromPlaylist:function(){return $},uG:function(){return O},vy:function(){return h}});var r=n(38365),i=n(97836),o=n(6484);let a=new Set(["Flexi - alien fish pond","Geiss - Spiral Artifact"]),s=`${i.Sd}/Documents/Winamp Skins`,l=["localhost",i.PACKAGE_DATA.author.url.replace("https://","")].includes(window.location.hostname),u=t=>`
//   query {
//     skins(filter: APPROVED, first: 1, offset: ${t}) {
//       nodes {
//         download_url
//       }
//     }
//   }
// `,h={availableSkins:[{name:"Aqua X",url:`${s}/Aqua_X.wsz`},{name:"Nucleo NLog v2G",url:`${s}/Nucleo_NLog_v102.wsz`},...l?[{defaultName:"Random (Winamp Skin Museum)",loading:!1,get name(){if(this.loading)return this.defaultName;return this.loading=!0,fetch("https://api.webamp.org/graphql",{body:JSON.stringify({query:u(Math.floor(1e3*Math.random()))}),headers:{"Content-Type":"application/json"},method:"POST"}).then(async t=>{let{data:e}=await t.json()||{};this.skinUrl=e?.skins?.nodes?.[0]?.download_url,this.loading=!1}),this.defaultName},skinUrl:"",get url(){return this.skinUrl||`${s}/base-2.91.wsz`}}]:[],{name:"SpyAMP Professional Edition v5",url:`${s}/SpyAMP_Professional_Edition_v5.wsz`}]},p={height:116,width:275},c="#main-window",d="#playlist-window",m=(t,e="")=>t.skinIsLoaded().then(()=>{e&&(0,o.EK)(e)}),f=t=>t.store.dispatch({type:"CLOSE_WINDOW",windowId:"equalizer"}),w=t=>t.store.dispatch({open:!1,type:"ENABLE_MILKDROP"}),g=(t,e)=>t.store.dispatch({data:e,type:"SET_SKIN_DATA"}),y=(t,e)=>t.store.dispatch({butterchurn:e,type:"GOT_BUTTERCHURN"}),b=(t,e)=>t.store.dispatch({presets:e,type:"GOT_BUTTERCHURN_PRESETS"}),S=t=>{let{presetHistory:e=[],presets:n=[]}=t.store.getState()?.milkdrop||{},r=Math.floor(Math.random()*n.length),i=n[r];return!i.name||a.has(i.name)||e.slice(-5).includes(r)?S(t):r},T=t=>{let e=S(t);t.store.dispatch({addToHistory:!0,index:e,type:"PRESET_REQUESTED"}),t.store.dispatch({index:e,type:"SELECT_PRESET_AT_INDEX"})},x=0,E=t=>{window.clearInterval(x),x=window.setInterval(()=>{t||window.clearInterval(x),T(t)},2e4)},_=t=>{let e=t.store.subscribe(()=>{let{milkdrop:r,windows:i}=t.store.getState();i?.genWindows?.milkdrop?.open&&!r?.butterchurn&&(0,o.mb)(["/Program Files/Webamp/butterchurn.min.js"]).then(()=>{if(!window.butterchurn?.default)return;y(t,window.butterchurn.default);let{playlist:r,main:o}=i.genWindows||{},{x:a=0,y:s=0}=(r?.open?r?.position:o?.position)||{};t.store.dispatch({positions:{milkdrop:{x:a,y:s+p.height}},type:"UPDATE_WINDOW_POSITIONS"}),e(),t.store.subscribe(()=>{let t=[...document.body.children].find(t=>t.classList?.contains("webamp-desktop"));if(t){let e=document.querySelector("main");e&&([...e.children].forEach(t=>{t.classList?.contains("webamp-desktop")&&t.remove()}),e.append(t))}}),n.e(9986,"high").then(n.t.bind(n,36607,23)).then(({default:e})=>{b(t,Object.entries(e).map(([t,e])=>({name:t,preset:e}))),T(t),E(t)})})})},N=()=>document.querySelector("#webamp"),D=(t,e)=>{let{height:n,width:i}=p,{x:o,y:a}=e||(0,r.Rf)({height:2*n,width:i});t.store.dispatch({positions:{main:{x:o,y:a},milkdrop:{x:0-i,y:0-n},playlist:{x:o,y:n+a}},type:"UPDATE_WINDOW_POSITIONS"})},O=(t,e)=>t.store.dispatch({type:"SET_FOCUSED_WINDOW",window:e}),M=t=>t.store.dispatch({type:"SET_FOCUSED_WINDOW",window:""}),P=async(t,e)=>{let{parseBuffer:r}=await Promise.all([n.e(8090,"high"),n.e(2463,"high"),n.e(4726,"high")]).then(n.bind(n,52463)),{common:{album:a="",artist:s="",title:l=e},format:{duration:u=0}}=await r(t,{mimeType:i.BD,size:t.length},{duration:!0,skipCovers:!0,skipPostHeaders:!0});return{blob:(0,o.V4)(t,"audio/mpeg"),duration:Math.floor(u),metaData:{album:a,artist:s,title:l}}},R=t=>{let e=t.map(t=>{let e=t.url?`
// ${t.url.toString()}`:"",n=t.defaultName;return t.metaData?.artist?t.metaData?.title?n=`${t.metaData.artist} - ${t.metaData.title}`:n&&(n=`${t.metaData.artist} - ${n}`):t.metaData?.title&&(n=t.metaData.title),e?`#EXTINF:${t.duration??-1},${n||""}${e}`:""});return`${["#EXTM3U",...e.filter(Boolean)].join("\n")}
// `},$=async(t,e,r)=>{let{ASX:i,M3U:o,PLS:a}=await n.e(3454,"high").then(n.t.bind(n,63454,23));return(({".asx":i,".m3u":o,".pls":a})[e]?.parse(t).filter(Boolean).slice(0,1e3)??[]).map(({artist:t="",file:e="",length:n=0,title:i=""})=>{let[o,a]=[t.trim(),i.trim()];return{duration:n>0?n:0,metaData:{album:a||r,artist:o,title:a},url:e}})},k=(t="")=>t.replace(/<!\[CDATA\[|\]\]>/g,""),I={"somafm.com":t=>async()=>{let{pathname:e}=new URL(t),[n]=e.replace("/","").split("-"),r=await (await fetch(`https://somafm.com/songs/${n}.xml`,{cache:"no-cache",credentials:"omit",keepalive:!1,mode:"cors",referrerPolicy:"no-referrer",window:null})).text(),i=new DOMParser().parseFromString(r,"application/xml").querySelector("song"),o=i?.querySelector("artist")?.innerHTML,a=i?.querySelector("title")?.innerHTML;return{artist:k(o),title:k(a)}}},C=t=>{let{host:e}=new URL(t),[,n,r]=e.split(".");return I[`${n}.${r}`]?.(t)}},918:function(t,e,n){n.d(e,{BS:function(){return a},FC:function(){return i},F_:function(){return r},wV:function(){return o}});let r={bottom:!1,bottomLeft:!1,bottomRight:!1,left:!1,right:!1,top:!1,topLeft:!1,topRight:!1},i={bottom:!0,bottomLeft:!0,bottomRight:!0,left:!0,right:!0,top:!0,topLeft:!0,topRight:!0},o=30,a=166,s={cancel:".cancel",dragHandleClassName:"handle",enableUserSelectHack:!1,minHeight:`${o}px`,minWidth:`${a}px`,resizeHandleStyles:{bottom:{bottom:"-3px",cursor:"ns-resize",height:"6px"},bottomLeft:{bottom:"-3px",cursor:"nesw-resize",height:"12px",left:"-3px",width:"12px"},bottomRight:{bottom:"-3px",cursor:"nwse-resize",height:"12px",right:"-3px",width:"12px"},left:{cursor:"ew-resize",left:"-3px",width:"6px"},right:{cursor:"ew-resize",right:"-3px",width:"6px"},top:{cursor:"ns-resize",height:"6px",top:"-3px"},topLeft:{cursor:"nwse-resize",height:"12px",left:"-3px",top:"-3px",width:"12px"},topRight:{cursor:"nesw-resize",height:"12px",right:"-3px",top:"-3px",width:"12px"}}};e.ZP=s},38365:function(t,e,n){n.d(e,{Rf:function(){return s},b$:function(){return h},hu:function(){return a},ix:function(){return u},mZ:function(){return l}});var r=n(918),i=n(97836),o=n(6484);let a=(t,e,n=[],r=0)=>{let[a]=t.split(i.CC),s=`${a}${i.CC}`,l=n.find(t=>t.startsWith(s))||"",{componentWindow:u}=e?.[l]||{},{x:h=0,y:p=0,width:c=0,height:d=0}=u?.getBoundingClientRect()||{};return!(h+r+c>(0,o.E9)()||p+r+d>(0,o.sI)())&&(h||p)?{x:h+r,y:p+r}:void 0},s=({height:t,width:e})=>{let[n,r]=[(0,o.sI)(),(0,o.E9)()];return{x:Math.floor(r/2-(0,o.Vy)(e)/2),y:Math.floor((n-i.bK)/2-(0,o.Vy)(t)/2)}},l={BOTTOM:15,LEFT:150,RIGHT:50,TOP:15},u=(t,e,n=!1)=>{let{position:r,size:i}=t||{},{x:a=0,y:s=0}=r||{},{height:u=0,width:h=0}=i||{};return n?a+l.RIGHT>e.x||a+(0,o.Vy)(h)-l.LEFT<0||s+l.BOTTOM>e.y||s+l.TOP<0:a<0||s<0||a+(0,o.Vy)(h)>e.x||s+(0,o.Vy)(u)>e.y},h=(t,e)=>{let n=Number(t.height),a=Number(t.width),[s,l]=[(0,o.sI)(),(0,o.E9)()],u=s-i.bK,h=Math.max(r.wV,Math.min(n,u)),p=Math.max(r.BS,Math.min(a,l));if(!e)return{height:h,width:p};let c=n===h,d=a===p;return c||d?c?d?{height:h,width:p}:{height:Math.round(h/(a/p)),width:p}:{height:h,width:Math.round(p/(n/h))}:n>a?{height:h,width:Math.round(p/(u/h))}:{height:Math.round(h/(l/p)),width:p}}}}]);
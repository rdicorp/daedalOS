globalThis.addEventListener(
    "message",
    ({ data: e }) => {
        globalThis.importScripts("/System/libheif/libheif-bundle.js");
        let { libheif: a } = globalThis,
            { HeifDecoder: t, ready: i } = a();
        i.then(() => {
            let [a] = new t().decode(e),
                i = a.get_width(),
                s = a.get_height();
            a.display({ data: new Uint8ClampedArray(i * s * 4), height: s, width: i }, ({ data: e }) => globalThis.postMessage(new ImageData(e, i, s)));
        });
    },
    { passive: !0 }
),
    (_N_E = {});




// globalThis.addEventListener("message",({data:e})=>{globalThis.importScripts("/System/libheif/libheif-bundle.js");let{libheif:a}=globalThis,{HeifDecoder:t,ready:i}=a();i.then(()=>{let[a]=new t().decode(e),i=a.get_width(),s=a.get_height();a.display({data:new Uint8ClampedArray(i*s*4),height:s,width:i},({data:e})=>globalThis.postMessage(new ImageData(e,i,s)))})},{passive:!0}),_N_E={};
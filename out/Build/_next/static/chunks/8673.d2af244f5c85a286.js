"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8673],
    {
        68673: function (a, e, n) {
            n.r(e),
                n.d(e, {
                    convert: function () {
                        return r;
                    },
                });
            var i = n(1864),
                m = n(6484),
                t = n(48764).Buffer;
            let r = async (a, e, n) => {
                let r = [];
                await (0, m.mb)(["/Program Files/imagemagick/wasm-imagemagick.umd-es5.min.js"]);
                let { call: s } = window["wasm-imagemagick"];
                return (
                    await Promise.all(
                        a.map(async ([a, m]) => {
                            let o = (0, i.basename)(a),
                                u = `${(0, i.basename)(a, (0, i.extname)(a))}.${e}`,
                                { outputFiles: [c] = [], stderr: l, stdout: b } = await s([{ content: m, name: o }], ["convert", o, "-verbose", u]),
                                f = [...b, ...l].join("\n");
                            f && n?.(f), r.push([(0, i.join)((0, i.dirname)(a), u), c?.blob ? t.from(await c.blob.arrayBuffer()) : t.from("")]);
                        })
                    ),
                    r
                );
            };
        },
    },
]);



// "use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8673],{68673:function(a,e,n){n.r(e),n.d(e,{convert:function(){return r}});var i=n(1864),m=n(6484),t=n(48764).Buffer;let r=async(a,e,n)=>{let r=[];await (0,m.mb)(["/Program Files/imagemagick/wasm-imagemagick.umd-es5.min.js"]);let{call:s}=window["wasm-imagemagick"];return await Promise.all(a.map(async([a,m])=>{let o=(0,i.basename)(a),u=`${(0,i.basename)(a,(0,i.extname)(a))}.${e}`,{outputFiles:[c]=[],stderr:l,stdout:b}=await s([{content:m,name:o}],["convert",o,"-verbose",u]),f=[...b,...l].join("\n");f&&n?.(f),r.push([(0,i.join)((0,i.dirname)(a),u),c?.blob?t.from(await c.blob.arrayBuffer()):t.from("")])})),r}}}]);
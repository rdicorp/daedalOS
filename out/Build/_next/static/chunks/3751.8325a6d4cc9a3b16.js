"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3751],
    {
        73751: function (e, r, t) {
            t.d(r, {
                convertSheet: function () {
                    return s;
                },
            });
            var n = t(6484),
                i = t(48764).Buffer;
            let a = async () => (window.XLSX || (await (0, n.mb)(["/Program Files/SheetJS/xlsx.full.min.js"])), window.XLSX),
                s = async (e, r) => {
                    let t;
                    let s = await a();
                    if ("numbers" === r) {
                        if ((await (0, n.mb)(["/Program Files/SheetJS/xlsx.zahl.js"]), !window.XLSX_ZAHL_PAYLOAD)) return i.from("");
                        t = window.XLSX_ZAHL_PAYLOAD;
                    }
                    return s.write(s.read(e), { bookType: r, numbers: t, type: "buffer" });
                };
        },
    },
]);



// "use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3751],{73751:function(e,r,t){t.d(r,{convertSheet:function(){return s}});var n=t(6484),i=t(48764).Buffer;let a=async()=>(window.XLSX||await (0,n.mb)(["/Program Files/SheetJS/xlsx.full.min.js"]),window.XLSX),s=async(e,r)=>{let t;let s=await a();if("numbers"===r){if(await (0,n.mb)(["/Program Files/SheetJS/xlsx.zahl.js"]),!window.XLSX_ZAHL_PAYLOAD)return i.from("");t=window.XLSX_ZAHL_PAYLOAD}return s.write(s.read(e),{bookType:r,numbers:t,type:"buffer"})}}}]);
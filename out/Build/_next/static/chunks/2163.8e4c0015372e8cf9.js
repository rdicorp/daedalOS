"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2163],
    {
        82163: function (e, l, r) {
            var o = r(6484);
            let h = {
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
                p = !1,
                s = () => {
                    let e = Object.keys(h).flatMap((e) => {
                        let [, l] = h[e];
                        return Array.from({ length: l }).fill(e);
                    }),
                        l = Math.floor(Math.random() * e.length),
                        [r] = h[e[l]];
                    return r;
                };
            l.default = () =>
                (0, o.mb)(["/Program Files/eSheep/eSheep.js"]).then(() => {
                    if (window.Sheep) {
                        let e = new window.Sheep({ allowPopup: "no", collisionsWith: ["nav", "section"], spawnContainer: document.querySelector("main") });
                        p ? e.Start(s()) : ((p = !0), e.Start("/Program Files/eSheep/eSheep.xml"));
                    }
                });
        },
    },
]);




// "use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2163],{82163:function(e,l,r){var o=r(6484);let h={blue_sheep:["/Program Files/eSheep/blue_sheep.xml",12],eSheep:["/Program Files/eSheep/eSheep.xml",12],fox:["/Program Files/eSheep/fox.xml",4],green_sheep:["/Program Files/eSheep/green_sheep.xml",12],mimiko:["/Program Files/eSheep/mimiko.xml",4],neko:["/Program Files/eSheep/neko.xml",10],orange_sheep:["/Program Files/eSheep/orange_sheep.xml",12],pingus:["/Program Files/eSheep/pingus.xml",10],red_sheep:["/Program Files/eSheep/red_sheep.xml",12],yellow_sheep:["/Program Files/eSheep/yellow_sheep.xml",12]},p=!1,s=()=>{let e=Object.keys(h).flatMap(e=>{let[,l]=h[e];return Array.from({length:l}).fill(e)}),l=Math.floor(Math.random()*e.length),[r]=h[e[l]];return r};l.default=()=>(0,o.mb)(["/Program Files/eSheep/eSheep.js"]).then(()=>{if(window.Sheep){let e=new window.Sheep({allowPopup:"no",collisionsWith:["nav","section"],spawnContainer:document.querySelector("main")});p?e.Start(s()):(p=!0,e.Start("/Program Files/eSheep/eSheep.xml"))}})}}]);
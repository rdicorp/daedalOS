"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9319],
    {
        49319: function (t, e, n) {
            n.r(e),
                n.d(e, {
                    Data: function () {
                        return P;
                    },
                    Format: function () {
                        return _;
                    },
                    NtExecutable: function () {
                        return tc;
                    },
                    NtExecutableResource: function () {
                        return tm;
                    },
                    Resource: function () {
                        return j;
                    },
                    generateExecutableWithSign: function () {
                        return eF;
                    },
                    version: function () {
                        return tS;
                    },
                });
            var i,
                r,
                o,
                a,
                s,
                u,
                f,
                c,
                l,
                h,
                p,
                g,
                d,
                v,
                y,
                b,
                w,
                m,
                U,
                O,
                A,
                D,
                S,
                I,
                E,
                _ = {};
            n.r(_),
                n.d(_, {
                    ArrayFormatBase: function () {
                        return V;
                    },
                    FormatBase: function () {
                        return R;
                    },
                    ImageDataDirectoryArray: function () {
                        return L;
                    },
                    ImageDirectoryEntry: function () {
                        return x;
                    },
                    ImageDosHeader: function () {
                        return q;
                    },
                    ImageFileHeader: function () {
                        return J;
                    },
                    ImageNtHeaders: function () {
                        return to;
                    },
                    ImageOptionalHeader: function () {
                        return Y;
                    },
                    ImageOptionalHeader64: function () {
                        return ti;
                    },
                    ImageSectionHeaderArray: function () {
                        return ts;
                    },
                    findImageSectionBlockByDirectoryEntry: function () {
                        return tD;
                    },
                    getImageDosHeader: function () {
                        return tU;
                    },
                    getImageNtHeadersByDosHeader: function () {
                        return tO;
                    },
                    getImageSectionHeadersByNtHeaders: function () {
                        return tA;
                    },
                });
            var P = {};
            n.r(P),
                n.d(P, {
                    IconFile: function () {
                        return tx;
                    },
                    IconItem: function () {
                        return tT;
                    },
                    RawIconItem: function () {
                        return tL;
                    },
                });
            var j = {};
            n.r(j),
                n.d(j, {
                    IconGroupEntry: function () {
                        return tk;
                    },
                    StringTable: function () {
                        return tM;
                    },
                    VersionFileDriverSubtype: function () {
                        return S;
                    },
                    VersionFileFlags: function () {
                        return tN;
                    },
                    VersionFileFontSubtype: function () {
                        return I;
                    },
                    VersionFileOS: function () {
                        return tF;
                    },
                    VersionFileType: function () {
                        return tG;
                    },
                    VersionInfo: function () {
                        return tQ;
                    },
                });
            var R = (function () {
                function t(t) {
                    this.view = t;
                }
                return (
                    (t.prototype.copyTo = function (t, e) {
                        new Uint8Array(t, e, this.view.byteLength).set(new Uint8Array(this.view.buffer, this.view.byteOffset, this.view.byteLength));
                    }),
                    Object.defineProperty(t.prototype, "byteLength", {
                        get: function () {
                            return this.view.byteLength;
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    t
                );
            })(),
                z =
                    ((i = function (t, e) {
                        return (i =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (t, e) {
                                    t.__proto__ = e;
                                }) ||
                            function (t, e) {
                                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                            })(t, e);
                    }),
                        function (t, e) {
                            if ("function" != typeof e && null !== e) throw TypeError("Class extends value " + String(e) + " is not a constructor or null");
                            function n() {
                                this.constructor = t;
                            }
                            i(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()));
                        }),
                C = (function (t) {
                    function e(e) {
                        return t.call(this, e) || this;
                    }
                    return (
                        z(e, t),
                        (e.prototype.forEach = function (t) {
                            var e = this.length,
                                n = [];
                            n.length = e;
                            for (var i = 0; i < e; ++i) n[i] = this.get(i);
                            for (var i = 0; i < e; ++i) t(n[i], i, this);
                        }),
                        (e.prototype._iterator = function () {
                            return new ((function () {
                                function t(t) {
                                    (this.base = t), (this.i = 0);
                                }
                                return (
                                    (t.prototype.next = function () {
                                        return this.i === this.base.length ? { value: void 0, done: !0 } : { value: this.base.get(this.i++), done: !1 };
                                    }),
                                    t
                                );
                            })())(this);
                        }),
                        e
                    );
                })(R);
            "undefined" != typeof Symbol && (C.prototype[Symbol.iterator] = C.prototype._iterator);
            var V = C,
                T =
                    ((r = function (t, e) {
                        return (r =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (t, e) {
                                    t.__proto__ = e;
                                }) ||
                            function (t, e) {
                                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                            })(t, e);
                    }),
                        function (t, e) {
                            if ("function" != typeof e && null !== e) throw TypeError("Class extends value " + String(e) + " is not a constructor or null");
                            function n() {
                                this.constructor = t;
                            }
                            r(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()));
                        }),
                L = (function (t) {
                    function e(e) {
                        var n = t.call(this, e) || this;
                        return (n.length = 16), n;
                    }
                    return (
                        T(e, t),
                        (e.from = function (t, n) {
                            return void 0 === n && (n = 0), new e(new DataView(t, n, 128));
                        }),
                        (e.prototype.get = function (t) {
                            return { virtualAddress: this.view.getUint32(8 * t, !0), size: this.view.getUint32(4 + 8 * t, !0) };
                        }),
                        (e.prototype.set = function (t, e) {
                            this.view.setUint32(8 * t, e.virtualAddress, !0), this.view.setUint32(4 + 8 * t, e.size, !0);
                        }),
                        (e.prototype.findIndexByVirtualAddress = function (t) {
                            for (var e = 0; e < 16; ++e) {
                                var n = this.view.getUint32(8 * e, !0),
                                    i = this.view.getUint32(4 + 8 * e, !0);
                                if (t >= n && t < n + i) return e;
                            }
                            return null;
                        }),
                        (e.size = 128),
                        (e.itemSize = 8),
                        e
                    );
                })(V);
            ((o = O || (O = {}))[(o.Export = 0)] = "Export"),
                (o[(o.Import = 1)] = "Import"),
                (o[(o.Resource = 2)] = "Resource"),
                (o[(o.Exception = 3)] = "Exception"),
                (o[(o.Certificate = 4)] = "Certificate"),
                (o[(o.Security = 4)] = "Security"),
                (o[(o.BaseRelocation = 5)] = "BaseRelocation"),
                (o[(o.Debug = 6)] = "Debug"),
                (o[(o.Architecture = 7)] = "Architecture"),
                (o[(o.GlobalPointer = 8)] = "GlobalPointer"),
                (o[(o.Tls = 9)] = "Tls"),
                (o[(o.TLS = 9)] = "TLS"),
                (o[(o.LoadConfig = 10)] = "LoadConfig"),
                (o[(o.BoundImport = 11)] = "BoundImport"),
                (o[(o.Iat = 12)] = "Iat"),
                (o[(o.IAT = 12)] = "IAT"),
                (o[(o.DelayImport = 13)] = "DelayImport"),
                (o[(o.ComDescriptor = 14)] = "ComDescriptor"),
                (o[(o.COMDescriptor = 14)] = "COMDescriptor");
            var x = O,
                H = n(48764).Buffer;
            function k(t) {
                var e = {};
                return (
                    Object.keys(t).forEach(function (n) {
                        e[n] = t[n];
                    }),
                    e
                );
            }
            function B(t, e, n) {
                if (!("buffer" in t)) return new DataView(t, e, n);
                var i = t.byteOffset,
                    r = t.byteLength;
                return void 0 !== e && ((i += e), (r -= e)), void 0 !== n && (r = n), new DataView(t.buffer, i, r);
            }
            function M(t, e) {
                for (
                    var n = q.from(t),
                    i = new DataView(t),
                    r = n.newHeaderAddress + 88,
                    o = 0,
                    a = function (t) {
                        (o += t) >= 4294967296 && (o = (o % 4294967296) + ((o / 4294967296) | 0));
                    },
                    s = i.byteLength,
                    u = s % 4,
                    f = s - u,
                    c = 0;
                    c < f;
                    c += 4
                )
                    c !== r && a(i.getUint32(c, !0));
                if (0 !== u) {
                    for (var l = 0, c = 0; c < u; c++) l |= i.getUint8(f + c) << ((3 - c) * 8);
                    a(l);
                }
                return (o = (65535 & o) + (o >>> 16)), (o += o >>> 16), (o = (65535 & o) + s), e && i.setUint32(r, o, !0), o;
            }
            function N(t, e) {
                return Math.floor((t + e - 1) / e) * e;
            }
            function F(t, e, n, i, r) {
                var o = "buffer" in t ? new Uint8Array(t.buffer, t.byteOffset + (e || 0), r) : new Uint8Array(t, e, r),
                    a = "buffer" in n ? new Uint8Array(n.buffer, n.byteOffset + (i || 0), r) : new Uint8Array(n, i, r);
                o.set(a);
            }
            function G(t, e, n) {
                var i = new ArrayBuffer(n);
                return F(i, 0, t, e, n), i;
            }
            function W(t) {
                if ("buffer" in t) {
                    var e = new ArrayBuffer(t.byteLength);
                    return new Uint8Array(e).set(new Uint8Array(t.buffer, t.byteOffset, t.byteLength)), e;
                }
                var e = new ArrayBuffer(t.byteLength);
                return new Uint8Array(e).set(new Uint8Array(t)), e;
            }
            var K =
                ((a = function (t, e) {
                    return (a =
                        Object.setPrototypeOf ||
                        ({ __proto__: [] } instanceof Array &&
                            function (t, e) {
                                t.__proto__ = e;
                            }) ||
                        function (t, e) {
                            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                        })(t, e);
                }),
                    function (t, e) {
                        if ("function" != typeof e && null !== e) throw TypeError("Class extends value " + String(e) + " is not a constructor or null");
                        function n() {
                            this.constructor = t;
                        }
                        a(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()));
                    }),
                q = (function (t) {
                    function e(e) {
                        return t.call(this, e) || this;
                    }
                    return (
                        K(e, t),
                        (e.from = function (t, n) {
                            return void 0 === n && (n = 0), new e(B(t, n, 64));
                        }),
                        (e.prototype.isValid = function () {
                            return this.magic === e.DEFAULT_MAGIC;
                        }),
                        Object.defineProperty(e.prototype, "magic", {
                            get: function () {
                                return this.view.getUint16(0, !0);
                            },
                            set: function (t) {
                                this.view.setUint16(0, t, !0);
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "lastPageSize", {
                            get: function () {
                                return this.view.getUint16(2, !0);
                            },
                            set: function (t) {
                                this.view.setUint16(2, t, !0);
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "pages", {
                            get: function () {
                                return this.view.getUint16(4, !0);
                            },
                            set: function (t) {
                                this.view.setUint16(4, t, !0);
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "relocations", {
                            get: function () {
                                return this.view.getUint16(6, !0);
                            },
                            set: function (t) {
                                this.view.setUint16(6, t, !0);
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "headerSizeInParagraph", {
                            get: function () {
                                return this.view.getUint16(8, !0);
                            },
                            set: function (t) {
                                this.view.setUint16(8, t, !0);
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "minAllocParagraphs", {
                            get: function () {
                                return this.view.getUint16(10, !0);
                            },
                            set: function (t) {
                                this.view.setUint16(10, t, !0);
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "maxAllocParagraphs", {
                            get: function () {
                                return this.view.getUint16(12, !0);
                            },
                            set: function (t) {
                                this.view.setUint16(12, t, !0);
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "initialSS", {
                            get: function () {
                                return this.view.getUint16(14, !0);
                            },
                            set: function (t) {
                                this.view.setUint16(14, t, !0);
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "initialSP", {
                            get: function () {
                                return this.view.getUint16(16, !0);
                            },
                            set: function (t) {
                                this.view.setUint16(16, t, !0);
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "checkSum", {
                            get: function () {
                                return this.view.getUint16(18, !0);
                            },
                            set: function (t) {
                                this.view.setUint16(18, t, !0);
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "initialIP", {
                            get: function () {
                                return this.view.getUint16(20, !0);
                            },
                            set: function (t) {
                                this.view.setUint16(20, t, !0);
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "initialCS", {
                            get: function () {
                                return this.view.getUint16(22, !0);
                            },
                            set: function (t) {
                                this.view.setUint16(22, t, !0);
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "relocationTableAddress", {
                            get: function () {
                                return this.view.getUint16(24, !0);
                            },
                            set: function (t) {
                                this.view.setUint16(24, t, !0);
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "overlayNum", {
                            get: function () {
                                return this.view.getUint16(26, !0);
                            },
                            set: function (t) {
                                this.view.setUint16(26, t, !0);
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "oemId", {
                            get: function () {
                                return this.view.getUint16(36, !0);
                            },
                            set: function (t) {
                                this.view.setUint16(36, t, !0);
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "oemInfo", {
                            get: function () {
                                return this.view.getUint16(38, !0);
                            },
                            set: function (t) {
                                this.view.setUint16(38, t, !0);
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "newHeaderAddress", {
                            get: function () {
                                return this.view.getUint32(60, !0);
                            },
                            set: function (t) {
                                this.view.setUint32(60, t, !0);
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (e.size = 64),
                        (e.DEFAULT_MAGIC = 23117),
                        e
                    );
                })(R),
                X =
                    ((s = function (t, e) {
                        return (s =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (t, e) {
                                    t.__proto__ = e;
                                }) ||
                            function (t, e) {
                                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                            })(t, e);
                    }),
                        function (t, e) {
                            if ("function" != typeof e && null !== e) throw TypeError("Class extends value " + String(e) + " is not a constructor or null");
                            function n() {
                                this.constructor = t;
                            }
                            s(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()));
                        }),
                J = (function (t) {
                    function e(e) {
                        return t.call(this, e) || this;
                    }
                    return (
                        X(e, t),
                        (e.from = function (t, n) {
                            return void 0 === n && (n = 0), new e(new DataView(t, n, 20));
                        }),
                        Object.defineProperty(e.prototype, "machine", {
                            get: function () {
                                return this.view.getUint16(0, !0);
                            },
                            set: function (t) {
                                this.view.setUint16(0, t, !0);
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "numberOfSections", {
                            get: function () {
                                return this.view.getUint16(2, !0);
                            },
                            set: function (t) {
                                this.view.setUint16(2, t, !0);
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "timeDateStamp", {
                            get: function () {
                                return this.view.getUint32(4, !0);
                            },
                            set: function (t) {
                                this.view.setUint32(4, t, !0);
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "pointerToSymbolTable", {
                            get: function () {
                                return this.view.getUint32(8, !0);
                            },
                            set: function (t) {
                                this.view.setUint32(8, t, !0);
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "numberOfSymbols", {
                            get: function () {
                                return this.view.getUint32(12, !0);
                            },
                            set: function (t) {
                                this.view.setUint32(12, t, !0);
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "sizeOfOptionalHeader", {
                            get: function () {
                                return this.view.getUint16(16, !0);
                            },
                            set: function (t) {
                                this.view.setUint16(16, t, !0);
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "characteristics", {
                            get: function () {
                                return this.view.getUint16(18, !0);
                            },
                            set: function (t) {
                                this.view.setUint16(18, t, !0);
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (e.size = 20),
                        e
                    );
                })(R),
                Q =
                    ((u = function (t, e) {
                        return (u =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (t, e) {
                                    t.__proto__ = e;
                                }) ||
                            function (t, e) {
                                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                            })(t, e);
                    }),
                        function (t, e) {
                            if ("function" != typeof e && null !== e) throw TypeError("Class extends value " + String(e) + " is not a constructor or null");
                            function n() {
                                this.constructor = t;
                            }
                            u(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()));
                        }),
                Y = (function (t) {
                    function e(e) {
                        return t.call(this, e) || this;
                    }
                    return (
                        Q(e, t),
                        (e.from = function (t, n) {
                            return void 0 === n && (n = 0), new e(new DataView(t, n, 96));
                        }),
                        Object.defineProperty(e.prototype, "magic", {
                            get: function () {
                                return this.view.getUint16(0, !0);
                            },
                            set: function (t) {
                                this.view.setUint16(0, t, !0);
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "majorLinkerVersion", {
                            get: function () {
                                return this.view.getUint8(2);
                            },
                            set: function (t) {
                                this.view.setUint8(2, t);
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "minorLinkerVersion", {
                            get: function () {
                                return this.view.getUint8(3);
                            },
                            set: function (t) {
                                this.view.setUint8(3, t);
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "sizeOfCode", {
                            get: function () {
                                return this.view.getUint32(4, !0);
                            },
                            set: function (t) {
                                this.view.setUint32(4, t, !0);
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "sizeOfInitializedData", {
                            get: function () {
                                return this.view.getUint32(8, !0);
                            },
                            set: function (t) {
                                this.view.setUint32(8, t, !0);
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "sizeOfUninitializedData", {
                            get: function () {
                                return this.view.getUint32(12, !0);
                            },
                            set: function (t) {
                                this.view.setUint32(12, t, !0);
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "addressOfEntryPoint", {
                            get: function () {
                                return this.view.getUint32(16, !0);
                            },
                            set: function (t) {
                                this.view.setUint32(16, t, !0);
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "baseOfCode", {
                            get: function () {
                                return this.view.getUint32(20, !0);
                            },
                            set: function (t) {
                                this.view.setUint32(20, t, !0);
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "baseOfData", {
                            get: function () {
                                return this.view.getUint32(24, !0);
                            },
                            set: function (t) {
                                this.view.setUint32(24, t, !0);
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "imageBase", {
                            get: function () {
                                return this.view.getUint32(28, !0);
                            },
                            set: function (t) {
                                this.view.setUint32(28, t, !0);
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "sectionAlignment", {
                            get: function () {
                                return this.view.getUint32(32, !0);
                            },
                            set: function (t) {
                                this.view.setUint32(32, t, !0);
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "fileAlignment", {
                            get: function () {
                                return this.view.getUint32(36, !0);
                            },
                            set: function (t) {
                                this.view.setUint32(36, t, !0);
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "majorOperatingSystemVersion", {
                            get: function () {
                                return this.view.getUint16(40, !0);
                            },
                            set: function (t) {
                                this.view.setUint16(40, t, !0);
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "minorOperatingSystemVersion", {
                            get: function () {
                                return this.view.getUint16(42, !0);
                            },
                            set: function (t) {
                                this.view.setUint16(42, t, !0);
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "majorImageVersion", {
                            get: function () {
                                return this.view.getUint16(44, !0);
                            },
                            set: function (t) {
                                this.view.setUint16(44, t, !0);
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "minorImageVersion", {
                            get: function () {
                                return this.view.getUint16(46, !0);
                            },
                            set: function (t) {
                                this.view.setUint16(46, t, !0);
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "majorSubsystemVersion", {
                            get: function () {
                                return this.view.getUint16(48, !0);
                            },
                            set: function (t) {
                                this.view.setUint16(48, t, !0);
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "minorSubsystemVersion", {
                            get: function () {
                                return this.view.getUint16(50, !0);
                            },
                            set: function (t) {
                                this.view.setUint16(50, t, !0);
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "win32VersionValue", {
                            get: function () {
                                return this.view.getUint32(52, !0);
                            },
                            set: function (t) {
                                this.view.setUint32(52, t, !0);
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "sizeOfImage", {
                            get: function () {
                                return this.view.getUint32(56, !0);
                            },
                            set: function (t) {
                                this.view.setUint32(56, t, !0);
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "sizeOfHeaders", {
                            get: function () {
                                return this.view.getUint32(60, !0);
                            },
                            set: function (t) {
                                this.view.setUint32(60, t, !0);
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "checkSum", {
                            get: function () {
                                return this.view.getUint32(64, !0);
                            },
                            set: function (t) {
                                this.view.setUint32(64, t, !0);
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "subsystem", {
                            get: function () {
                                return this.view.getUint16(68, !0);
                            },
                            set: function (t) {
                                this.view.setUint16(68, t, !0);
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "dllCharacteristics", {
                            get: function () {
                                return this.view.getUint16(70, !0);
                            },
                            set: function (t) {
                                this.view.setUint16(70, t, !0);
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "sizeOfStackReserve", {
                            get: function () {
                                return this.view.getUint32(72, !0);
                            },
                            set: function (t) {
                                this.view.setUint32(72, t, !0);
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "sizeOfStackCommit", {
                            get: function () {
                                return this.view.getUint32(76, !0);
                            },
                            set: function (t) {
                                this.view.setUint32(76, t, !0);
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "sizeOfHeapReserve", {
                            get: function () {
                                return this.view.getUint32(80, !0);
                            },
                            set: function (t) {
                                this.view.setUint32(80, t, !0);
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "sizeOfHeapCommit", {
                            get: function () {
                                return this.view.getUint32(84, !0);
                            },
                            set: function (t) {
                                this.view.setUint32(84, t, !0);
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "loaderFlags", {
                            get: function () {
                                return this.view.getUint32(88, !0);
                            },
                            set: function (t) {
                                this.view.setUint32(88, t, !0);
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "numberOfRvaAndSizes", {
                            get: function () {
                                return this.view.getUint32(92, !0);
                            },
                            set: function (t) {
                                this.view.setUint32(92, t, !0);
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (e.size = 96),
                        (e.DEFAULT_MAGIC = 267),
                        e
                    );
                })(R),
                Z =
                    ((f = function (t, e) {
                        return (f =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (t, e) {
                                    t.__proto__ = e;
                                }) ||
                            function (t, e) {
                                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                            })(t, e);
                    }),
                        function (t, e) {
                            if ("function" != typeof e && null !== e) throw TypeError("Class extends value " + String(e) + " is not a constructor or null");
                            function n() {
                                this.constructor = t;
                            }
                            f(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()));
                        });
            function $(t, e) {
                return 4294967296 * t.getUint32(e + 4, !0) + t.getUint32(e, !0);
            }
            function tt(t, e, n) {
                t.setUint32(e, 4294967295 & n, !0), t.setUint32(e + 4, Math.floor(n / 4294967296), !0);
            }
            function te(t, e) {
                if ("undefined" == typeof BigInt) throw Error("BigInt not supported");
                return BigInt(4294967296) * BigInt(t.getUint32(e + 4, !0)) + BigInt(t.getUint32(e, !0));
            }
            function tn(t, e, n) {
                if ("undefined" == typeof BigInt) throw Error("BigInt not supported");
                t.setUint32(e, Number(n & BigInt(4294967295)), !0), t.setUint32(e + 4, Math.floor(Number((n / BigInt(4294967296)) & BigInt(4294967295))), !0);
            }
            var ti = (function (t) {
                function e(e) {
                    return t.call(this, e) || this;
                }
                return (
                    Z(e, t),
                    (e.from = function (t, n) {
                        return void 0 === n && (n = 0), new e(new DataView(t, n, 112));
                    }),
                    Object.defineProperty(e.prototype, "magic", {
                        get: function () {
                            return this.view.getUint16(0, !0);
                        },
                        set: function (t) {
                            this.view.setUint16(0, t, !0);
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "majorLinkerVersion", {
                        get: function () {
                            return this.view.getUint8(2);
                        },
                        set: function (t) {
                            this.view.setUint8(2, t);
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "minorLinkerVersion", {
                        get: function () {
                            return this.view.getUint8(3);
                        },
                        set: function (t) {
                            this.view.setUint8(3, t);
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "sizeOfCode", {
                        get: function () {
                            return this.view.getUint32(4, !0);
                        },
                        set: function (t) {
                            this.view.setUint32(4, t, !0);
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "sizeOfInitializedData", {
                        get: function () {
                            return this.view.getUint32(8, !0);
                        },
                        set: function (t) {
                            this.view.setUint32(8, t, !0);
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "sizeOfUninitializedData", {
                        get: function () {
                            return this.view.getUint32(12, !0);
                        },
                        set: function (t) {
                            this.view.setUint32(12, t, !0);
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "addressOfEntryPoint", {
                        get: function () {
                            return this.view.getUint32(16, !0);
                        },
                        set: function (t) {
                            this.view.setUint32(16, t, !0);
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "baseOfCode", {
                        get: function () {
                            return this.view.getUint32(20, !0);
                        },
                        set: function (t) {
                            this.view.setUint32(20, t, !0);
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "imageBase", {
                        get: function () {
                            return $(this.view, 24);
                        },
                        set: function (t) {
                            tt(this.view, 24, t);
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "imageBaseBigInt", {
                        get: function () {
                            return te(this.view, 24);
                        },
                        set: function (t) {
                            tn(this.view, 24, t);
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "sectionAlignment", {
                        get: function () {
                            return this.view.getUint32(32, !0);
                        },
                        set: function (t) {
                            this.view.setUint32(32, t, !0);
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "fileAlignment", {
                        get: function () {
                            return this.view.getUint32(36, !0);
                        },
                        set: function (t) {
                            this.view.setUint32(36, t, !0);
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "majorOperatingSystemVersion", {
                        get: function () {
                            return this.view.getUint16(40, !0);
                        },
                        set: function (t) {
                            this.view.setUint16(40, t, !0);
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "minorOperatingSystemVersion", {
                        get: function () {
                            return this.view.getUint16(42, !0);
                        },
                        set: function (t) {
                            this.view.setUint16(42, t, !0);
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "majorImageVersion", {
                        get: function () {
                            return this.view.getUint16(44, !0);
                        },
                        set: function (t) {
                            this.view.setUint16(44, t, !0);
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "minorImageVersion", {
                        get: function () {
                            return this.view.getUint16(46, !0);
                        },
                        set: function (t) {
                            this.view.setUint16(46, t, !0);
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "majorSubsystemVersion", {
                        get: function () {
                            return this.view.getUint16(48, !0);
                        },
                        set: function (t) {
                            this.view.setUint16(48, t, !0);
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "minorSubsystemVersion", {
                        get: function () {
                            return this.view.getUint16(50, !0);
                        },
                        set: function (t) {
                            this.view.setUint16(50, t, !0);
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "win32VersionValue", {
                        get: function () {
                            return this.view.getUint32(52, !0);
                        },
                        set: function (t) {
                            this.view.setUint32(52, t, !0);
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "sizeOfImage", {
                        get: function () {
                            return this.view.getUint32(56, !0);
                        },
                        set: function (t) {
                            this.view.setUint32(56, t, !0);
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "sizeOfHeaders", {
                        get: function () {
                            return this.view.getUint32(60, !0);
                        },
                        set: function (t) {
                            this.view.setUint32(60, t, !0);
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "checkSum", {
                        get: function () {
                            return this.view.getUint32(64, !0);
                        },
                        set: function (t) {
                            this.view.setUint32(64, t, !0);
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "subsystem", {
                        get: function () {
                            return this.view.getUint16(68, !0);
                        },
                        set: function (t) {
                            this.view.setUint16(68, t, !0);
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "dllCharacteristics", {
                        get: function () {
                            return this.view.getUint16(70, !0);
                        },
                        set: function (t) {
                            this.view.setUint16(70, t, !0);
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "sizeOfStackReserve", {
                        get: function () {
                            return $(this.view, 72);
                        },
                        set: function (t) {
                            tt(this.view, 72, t);
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "sizeOfStackReserveBigInt", {
                        get: function () {
                            return te(this.view, 72);
                        },
                        set: function (t) {
                            tn(this.view, 72, t);
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "sizeOfStackCommit", {
                        get: function () {
                            return $(this.view, 80);
                        },
                        set: function (t) {
                            tt(this.view, 80, t);
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "sizeOfStackCommitBigInt", {
                        get: function () {
                            return te(this.view, 80);
                        },
                        set: function (t) {
                            tn(this.view, 80, t);
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "sizeOfHeapReserve", {
                        get: function () {
                            return $(this.view, 88);
                        },
                        set: function (t) {
                            tt(this.view, 88, t);
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "sizeOfHeapReserveBigInt", {
                        get: function () {
                            return te(this.view, 88);
                        },
                        set: function (t) {
                            tn(this.view, 88, t);
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "sizeOfHeapCommit", {
                        get: function () {
                            return $(this.view, 96);
                        },
                        set: function (t) {
                            tt(this.view, 96, t);
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "sizeOfHeapCommitBigInt", {
                        get: function () {
                            return te(this.view, 96);
                        },
                        set: function (t) {
                            tn(this.view, 96, t);
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "loaderFlags", {
                        get: function () {
                            return this.view.getUint32(104, !0);
                        },
                        set: function (t) {
                            this.view.setUint32(104, t, !0);
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "numberOfRvaAndSizes", {
                        get: function () {
                            return this.view.getUint32(108, !0);
                        },
                        set: function (t) {
                            this.view.setUint32(108, t, !0);
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    (e.size = 112),
                    (e.DEFAULT_MAGIC = 523),
                    e
                );
            })(R),
                tr =
                    ((c = function (t, e) {
                        return (c =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (t, e) {
                                    t.__proto__ = e;
                                }) ||
                            function (t, e) {
                                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                            })(t, e);
                    }),
                        function (t, e) {
                            if ("function" != typeof e && null !== e) throw TypeError("Class extends value " + String(e) + " is not a constructor or null");
                            function n() {
                                this.constructor = t;
                            }
                            c(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()));
                        }),
                to = (function (t) {
                    function e(e) {
                        return t.call(this, e) || this;
                    }
                    return (
                        tr(e, t),
                        (e.from = function (t, n) {
                            void 0 === n && (n = 0);
                            var i = B(t, n + J.size, 6).getUint16(4, !0),
                                r = 4 + J.size + L.size;
                            return i === ti.DEFAULT_MAGIC ? (r += ti.size) : (r += Y.size), new e(B(t, n, r));
                        }),
                        (e.prototype.isValid = function () {
                            return this.signature === e.DEFAULT_SIGNATURE;
                        }),
                        (e.prototype.is32bit = function () {
                            return this.view.getUint16(J.size + 4, !0) === Y.DEFAULT_MAGIC;
                        }),
                        Object.defineProperty(e.prototype, "signature", {
                            get: function () {
                                return this.view.getUint32(0, !0);
                            },
                            set: function (t) {
                                this.view.setUint32(0, t, !0);
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "fileHeader", {
                            get: function () {
                                return J.from(this.view.buffer, this.view.byteOffset + 4);
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "optionalHeader", {
                            get: function () {
                                var t = J.size + 4;
                                return this.view.getUint16(t, !0) === ti.DEFAULT_MAGIC ? ti.from(this.view.buffer, this.view.byteOffset + t) : Y.from(this.view.buffer, this.view.byteOffset + t);
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "optionalHeaderDataDirectory", {
                            get: function () {
                                return L.from(this.view.buffer, this.view.byteOffset + this.getDataDirectoryOffset());
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (e.prototype.getDataDirectoryOffset = function () {
                            var t = J.size + 4;
                            return this.view.getUint16(t, !0) === ti.DEFAULT_MAGIC ? (t += ti.size) : (t += Y.size), t;
                        }),
                        (e.prototype.getSectionHeaderOffset = function () {
                            return this.getDataDirectoryOffset() + L.size;
                        }),
                        (e.DEFAULT_SIGNATURE = 17744),
                        e
                    );
                })(R),
                ta =
                    ((l = function (t, e) {
                        return (l =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (t, e) {
                                    t.__proto__ = e;
                                }) ||
                            function (t, e) {
                                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                            })(t, e);
                    }),
                        function (t, e) {
                            if ("function" != typeof e && null !== e) throw TypeError("Class extends value " + String(e) + " is not a constructor or null");
                            function n() {
                                this.constructor = t;
                            }
                            l(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()));
                        }),
                ts = (function (t) {
                    function e(e, n) {
                        var i = t.call(this, e) || this;
                        return (i.length = n), i;
                    }
                    return (
                        ta(e, t),
                        (e.from = function (t, n, i) {
                            return void 0 === i && (i = 0), new e(new DataView(t, i, 40 * n), n);
                        }),
                        (e.prototype.get = function (t) {
                            return {
                                name: (function (t, e, n) {
                                    for (var i = 0, r = 0; r < 8 && 0 !== t.getUint8(e + r); ++r) ++i;
                                    if (void 0 !== H) return H.from(t.buffer, t.byteOffset + e, i).toString("utf8");
                                    if ("undefined" != typeof decodeURIComponent) {
                                        for (var o = "", r = 0; r < i; ++r) {
                                            var a = t.getUint8(e + r);
                                            a < 16 ? (o += "%0" + a.toString(16)) : (o += "%" + a.toString(16));
                                        }
                                        return decodeURIComponent(o);
                                    }
                                    for (var o = "", r = 0; r < i; ++r) {
                                        var a = t.getUint8(e + r);
                                        o += String.fromCharCode(a);
                                    }
                                    return o;
                                })(this.view, 40 * t, 0),
                                virtualSize: this.view.getUint32(8 + 40 * t, !0),
                                virtualAddress: this.view.getUint32(12 + 40 * t, !0),
                                sizeOfRawData: this.view.getUint32(16 + 40 * t, !0),
                                pointerToRawData: this.view.getUint32(20 + 40 * t, !0),
                                pointerToRelocations: this.view.getUint32(24 + 40 * t, !0),
                                pointerToLineNumbers: this.view.getUint32(28 + 40 * t, !0),
                                numberOfRelocations: this.view.getUint16(32 + 40 * t, !0),
                                numberOfLineNumbers: this.view.getUint16(34 + 40 * t, !0),
                                characteristics: this.view.getUint32(36 + 40 * t, !0),
                            };
                        }),
                        (e.prototype.set = function (t, e) {
                            (function (t, e, n, i) {
                                if (void 0 !== H) {
                                    var r = new Uint8Array(t.buffer, t.byteOffset + e, 8);
                                    r.set(new Uint8Array(8)), r.set(H.from(i, "utf8").subarray(0, 8));
                                } else if ("undefined" != typeof encodeURIComponent)
                                    for (var o = encodeURIComponent(i), a = 0, s = 0; a < n; ++a)
                                        if (s >= o.length) t.setUint8(a + e, 0);
                                        else {
                                            var u = o.charCodeAt(s);
                                            if (37 === u) {
                                                var f = parseInt(o.substr(s + 1, 2), 16);
                                                "number" != typeof f || isNaN(f) ? t.setUint8(a + e, 0) : t.setUint8(a + e, f), (s += 3);
                                            } else t.setUint8(a + e, u);
                                        }
                                else
                                    for (var a = 0, s = 0; a < n; ++a)
                                        if (s >= i.length) t.setUint8(a + e, 0);
                                        else {
                                            var u = i.charCodeAt(s);
                                            t.setUint8(a + e, 255 & u);
                                        }
                            })(this.view, 40 * t, 8, e.name),
                                this.view.setUint32(8 + 40 * t, e.virtualSize, !0),
                                this.view.setUint32(12 + 40 * t, e.virtualAddress, !0),
                                this.view.setUint32(16 + 40 * t, e.sizeOfRawData, !0),
                                this.view.setUint32(20 + 40 * t, e.pointerToRawData, !0),
                                this.view.setUint32(24 + 40 * t, e.pointerToRelocations, !0),
                                this.view.setUint32(28 + 40 * t, e.pointerToLineNumbers, !0),
                                this.view.setUint16(32 + 40 * t, e.numberOfRelocations, !0),
                                this.view.setUint16(34 + 40 * t, e.numberOfLineNumbers, !0),
                                this.view.setUint32(36 + 40 * t, e.characteristics, !0);
                        }),
                        (e.itemSize = 40),
                        e
                    );
                })(V),
                tu = new Uint8Array([
                    14,
                    31,
                    186,
                    14,
                    0,
                    180,
                    9,
                    205,
                    33,
                    184,
                    1,
                    76,
                    205,
                    33,
                    68,
                    79,
                    83,
                    32,
                    109,
                    111,
                    100,
                    101,
                    32,
                    110,
                    111,
                    116,
                    32,
                    115,
                    117,
                    112,
                    112,
                    111,
                    114,
                    116,
                    101,
                    100,
                    46,
                    13,
                    13,
                    10,
                    36,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                ]),
                tf = N(q.size + tu.length, 128),
                tc = (function () {
                    function t(t, e, n) {
                        (this._headers = t), (this._sections = e), (this._ex = n);
                        var i = q.from(t),
                            r = to.from(t, i.newHeaderAddress);
                        (this._dh = i),
                            (this._nh = r),
                            (this._dda = r.optionalHeaderDataDirectory),
                            e.sort(function (t, e) {
                                var n = t.info.pointerToRawData,
                                    i = t.info.pointerToRawData;
                                if (n !== i) return n - i;
                                var r = t.info.virtualAddress,
                                    o = e.info.virtualAddress;
                                return r === o ? t.info.virtualSize - e.info.virtualSize : r - o;
                            });
                    }
                    return (
                        (t.createEmpty = function (t, e) {
                            var n, i, r, o, a, s, u, f, c, l;
                            return (
                                void 0 === t && (t = !1),
                                void 0 === e && (e = !0),
                                this.from(
                                    ((n = t),
                                        (i = e),
                                        (a = o = new ArrayBuffer((r = N(tf + (4 + J.size + (n ? Y.size : ti.size) + L.size), 512)))),
                                        ((s = q.from(a)).magic = q.DEFAULT_MAGIC),
                                        (s.lastPageSize = tf % 512),
                                        (s.pages = Math.ceil(tf / 512)),
                                        (s.relocations = 0),
                                        (s.headerSizeInParagraph = Math.ceil(q.size / 16)),
                                        (s.minAllocParagraphs = 0),
                                        (s.maxAllocParagraphs = 65535),
                                        (s.initialSS = 0),
                                        (s.initialSP = 128),
                                        (s.relocationTableAddress = q.size),
                                        (s.newHeaderAddress = tf),
                                        F(a, q.size, tu, 0, tu.length),
                                        "buffer" in o ? ((u = o.buffer), (f = o.byteOffset + tf)) : ((u = o), (f = tf)),
                                        new DataView(u, f).setUint32(0, to.DEFAULT_SIGNATURE, !0),
                                        ((c = J.from(u, f + 4)).machine = n ? 332 : 34404),
                                        (c.numberOfSections = 0),
                                        (c.timeDateStamp = 0),
                                        (c.pointerToSymbolTable = 0),
                                        (c.numberOfSymbols = 0),
                                        (c.sizeOfOptionalHeader = (n ? Y.size : ti.size) + L.size),
                                        (c.characteristics = i ? 8450 : 258),
                                        ((l = (n ? Y : ti).from(u, f + 4 + J.size)).magic = n ? Y.DEFAULT_MAGIC : ti.DEFAULT_MAGIC),
                                        (l.sizeOfCode = 0),
                                        (l.sizeOfInitializedData = 0),
                                        (l.sizeOfUninitializedData = 0),
                                        (l.addressOfEntryPoint = 0),
                                        (l.baseOfCode = 4096),
                                        (l.imageBase = n ? 16777216 : 6442450944),
                                        (l.sectionAlignment = 4096),
                                        (l.fileAlignment = 512),
                                        (l.majorOperatingSystemVersion = 6),
                                        (l.minorOperatingSystemVersion = 0),
                                        (l.majorSubsystemVersion = 6),
                                        (l.minorSubsystemVersion = 0),
                                        (l.sizeOfHeaders = N(r, l.fileAlignment)),
                                        (l.subsystem = 2),
                                        (l.dllCharacteristics = (n ? 0 : 32) + 64 + 256),
                                        (l.sizeOfStackReserve = 1048576),
                                        (l.sizeOfStackCommit = 4096),
                                        (l.sizeOfHeapReserve = 1048576),
                                        (l.sizeOfHeapCommit = 4096),
                                        (l.numberOfRvaAndSizes = L.size / L.itemSize),
                                        o)
                                )
                            );
                        }),
                        (t.from = function (e, n) {
                            var i = q.from(e),
                                r = to.from(e, i.newHeaderAddress);
                            if (!i.isValid() || !r.isValid()) throw TypeError("Invalid binary format");
                            if (r.fileHeader.numberOfSymbols > 0) throw Error("Binary with symbols is not supported now");
                            var o = r.optionalHeader.fileAlignment,
                                a = r.optionalHeaderDataDirectory.get(x.Certificate);
                            if (a.size > 0 && !(null == n ? void 0 : n.ignoreCert)) throw Error("Parsing signed executable binary is not allowed by default.");
                            var s = i.newHeaderAddress + r.getSectionHeaderOffset(),
                                u = r.fileHeader.numberOfSections,
                                f = [],
                                c = G(e, s, u * ts.itemSize),
                                l = ts.from(c, u, 0),
                                h = N(s + u * ts.itemSize, o);
                            l.forEach(function (t) {
                                if (t.pointerToRawData && t.sizeOfRawData) {
                                    var n = G(e, t.pointerToRawData, t.sizeOfRawData);
                                    f.push({ info: t, data: n });
                                    var i = N(t.pointerToRawData + t.sizeOfRawData, o);
                                    i > h && (h = i);
                                } else (t.pointerToRawData = 0), (t.sizeOfRawData = 0), f.push({ info: t, data: null });
                            });
                            var p = G(e, 0, s),
                                g = null,
                                d = e.byteLength;
                            return a.size > 0 && (d = a.virtualAddress), h < d && (g = G(e, h, d - h)), new t(p, f, g);
                        }),
                        (t.prototype.is32bit = function () {
                            return this._nh.is32bit();
                        }),
                        (t.prototype.getTotalHeaderSize = function () {
                            return this._headers.byteLength;
                        }),
                        Object.defineProperty(t.prototype, "dosHeader", {
                            get: function () {
                                return this._dh;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, "newHeader", {
                            get: function () {
                                return this._nh;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (t.prototype.getRawHeader = function () {
                            return this._headers;
                        }),
                        (t.prototype.getImageBase = function () {
                            return this._nh.optionalHeader.imageBase;
                        }),
                        (t.prototype.getFileAlignment = function () {
                            return this._nh.optionalHeader.fileAlignment;
                        }),
                        (t.prototype.getSectionAlignment = function () {
                            return this._nh.optionalHeader.sectionAlignment;
                        }),
                        (t.prototype.getAllSections = function () {
                            return this._sections;
                        }),
                        (t.prototype.getSectionByEntry = function (t) {
                            var e = this._dda.get(t),
                                n = this._sections
                                    .filter(function (t) {
                                        var n = t.info.virtualAddress + t.info.virtualSize;
                                        return e.virtualAddress >= t.info.virtualAddress && e.virtualAddress < n;
                                    })
                                    .shift();
                            return void 0 !== n ? n : null;
                        }),
                        (t.prototype.setSectionByEntry = function (t, e) {
                            var n = e ? { data: e.data, info: e.info } : null,
                                i = this._dda.get(t),
                                r = i.size > 0;
                            if (n) {
                                var o = n.data ? n.data.byteLength : 0,
                                    a = this._nh.optionalHeader.fileAlignment,
                                    s = this._nh.optionalHeader.sectionAlignment,
                                    u = n.data ? N(o, a) : 0,
                                    f = n.data ? N(n.info.virtualSize, s) : 0;
                                if ((n.info.sizeOfRawData < u ? (n.info.sizeOfRawData = u) : (u = n.info.sizeOfRawData), r)) this.replaceSectionImpl(i.virtualAddress, n.info, n.data);
                                else {
                                    var c = 0,
                                        l = N(this._headers.byteLength, a);
                                    this._sections.forEach(function (t) {
                                        t.info.pointerToRawData && l <= t.info.pointerToRawData && (l = t.info.pointerToRawData + t.info.sizeOfRawData), c <= t.info.virtualAddress && (c = t.info.virtualAddress + t.info.virtualSize);
                                    }),
                                        u || (l = 0),
                                        c || (c = this.newHeader.optionalHeader.baseOfCode),
                                        (c = N(c, s)),
                                        (n.info.pointerToRawData = l),
                                        (n.info.virtualAddress = c),
                                        this._dda.set(t, { size: o, virtualAddress: c }),
                                        this._sections.push(n),
                                        (this._nh.fileHeader.numberOfSections = this._sections.length),
                                        (this._nh.optionalHeader.sizeOfImage = N(c + f, this._nh.optionalHeader.sectionAlignment));
                                }
                            } else if (r) {
                                this._dda.set(t, { size: 0, virtualAddress: 0 });
                                for (var h = this._sections.length, p = 0; p < h; ++p) {
                                    var g = this._sections[p],
                                        d = g.info.virtualAddress,
                                        v = d + g.info.virtualSize;
                                    if (i.virtualAddress >= d && i.virtualAddress < v) {
                                        this._sections.splice(p, 1), (this._nh.fileHeader.numberOfSections = this._sections.length);
                                        break;
                                    }
                                }
                            }
                        }),
                        (t.prototype.getExtraData = function () {
                            return this._ex;
                        }),
                        (t.prototype.setExtraData = function (t) {
                            null === t ? (this._ex = null) : (this._ex = W(t));
                        }),
                        (t.prototype.generate = function (t) {
                            var e = this._dh,
                                n = this._nh,
                                i = e.newHeaderAddress + n.getSectionHeaderOffset(),
                                r = i;
                            r += this._sections.length * ts.itemSize;
                            var o = n.optionalHeader.fileAlignment;
                            (r = N(r, o)),
                                this._sections.forEach(function (t) {
                                    if (t.info.pointerToRawData) {
                                        var e = t.info.pointerToRawData + t.info.sizeOfRawData;
                                        r < e && (r = N((r = e), o));
                                    }
                                });
                            var a = r;
                            null !== this._ex && (r += this._ex.byteLength), "number" == typeof t && (r += t);
                            var s = new ArrayBuffer(r),
                                u = new Uint8Array(s);
                            u.set(new Uint8Array(this._headers, 0, i)), L.from(s, e.newHeaderAddress + n.getDataDirectoryOffset()).set(x.Certificate, { size: 0, virtualAddress: 0 });
                            var f = ts.from(s, this._sections.length, i);
                            return (
                                this._sections.forEach(function (t, e) {
                                    t.data || ((t.info.pointerToRawData = 0), (t.info.sizeOfRawData = 0)), f.set(e, t.info), t.data && t.info.pointerToRawData && u.set(new Uint8Array(t.data), t.info.pointerToRawData);
                                }),
                                null !== this._ex && u.set(new Uint8Array(this._ex), a),
                                0 !== n.optionalHeader.checkSum && M(s, !0),
                                s
                            );
                        }),
                        (t.prototype.rearrangeSections = function (t, e, n, i) {
                            if (e || i) {
                                for (var r = this._nh, o = r.optionalHeader.sectionAlignment, a = this._dda, s = this._sections.length, u = 0, f = 0; f < s; ++f) {
                                    var c = this._sections[f],
                                        l = c.info.virtualAddress;
                                    if (i && l >= n) {
                                        var h = a.findIndexByVirtualAddress(l);
                                        (l += i), null !== h && a.set(h, { virtualAddress: l, size: c.info.virtualSize }), (c.info.virtualAddress = l);
                                    }
                                    var p = c.info.pointerToRawData;
                                    e && p >= t && (c.info.pointerToRawData = p + e), (u = N(c.info.virtualAddress + c.info.virtualSize, o));
                                }
                                r.optionalHeader.sizeOfImage = u;
                            }
                        }),
                        (t.prototype.replaceSectionImpl = function (t, e, n) {
                            for (var i = this._sections.length, r = 0; r < i; ++r) {
                                var o = this._sections[r];
                                if (o.info.virtualAddress === t) {
                                    var a = this._nh.optionalHeader.sectionAlignment,
                                        s = o.info.pointerToRawData,
                                        u = s + o.info.sizeOfRawData,
                                        f = t + N(o.info.virtualSize, a);
                                    (o.info = k(e)), (o.info.virtualAddress = t), (o.info.pointerToRawData = s), (o.data = n);
                                    var c = s + e.sizeOfRawData,
                                        l = t + N(e.virtualSize, a);
                                    this.rearrangeSections(u, c - u, f, l - f);
                                    var h = this._dda,
                                        p = h.findIndexByVirtualAddress(t);
                                    null !== p && h.set(p, { virtualAddress: t, size: e.virtualSize });
                                    break;
                                }
                            }
                        }),
                        t
                    );
                })();
            function tl(t, e) {
                var n = t.getUint16(e, !0),
                    i = "";
                e += 2;
                for (var r = 0; r < n; ++r) (i += String.fromCharCode(t.getUint16(e, !0))), (e += 2);
                return i;
            }
            function th(t, e, n, i, r) {
                var o = i,
                    a = { name: n, languageTable: i, characteristics: t.getUint32(o, !0), dateTime: t.getUint32(o + 4, !0), majorVersion: t.getUint16(o + 8, !0), minorVersion: t.getUint16(o + 10, !0) },
                    s = t.getUint16(o + 12, !0),
                    u = t.getUint16(o + 14, !0);
                o += 16;
                for (var f = 0; f < s; ++f) {
                    var c = 2147483647 & t.getUint32(o, !0),
                        l = t.getUint32(o + 4, !0);
                    if ((2147483648 & l) != 0) {
                        o += 8;
                        continue;
                    }
                    r(e, a, { lang: tl(t, c), dataOffset: l }), (o += 8);
                }
                for (var f = 0; f < u; ++f) {
                    var h = 2147483647 & t.getUint32(o, !0),
                        l = t.getUint32(o + 4, !0);
                    if ((2147483648 & l) != 0) {
                        o += 8;
                        continue;
                    }
                    r(e, a, { lang: h, dataOffset: l }), (o += 8);
                }
            }
            function tp(t, e, n, i) {
                var r = n,
                    o = { type: e, nameTable: n, characteristics: t.getUint32(r, !0), dateTime: t.getUint32(r + 4, !0), majorVersion: t.getUint16(r + 8, !0), minorVersion: t.getUint16(r + 10, !0) },
                    a = t.getUint16(r + 12, !0),
                    s = t.getUint16(r + 14, !0);
                r += 16;
                for (var u = 0; u < a; ++u) {
                    var f = 2147483647 & t.getUint32(r, !0),
                        c = t.getUint32(r + 4, !0);
                    if (!(2147483648 & c)) {
                        r += 8;
                        continue;
                    }
                    c &= 2147483647;
                    var l = tl(t, f);
                    th(t, o, l, c, i), (r += 8);
                }
                for (var u = 0; u < s; ++u) {
                    var h = 2147483647 & t.getUint32(r, !0),
                        c = t.getUint32(r + 4, !0);
                    if (!(2147483648 & c)) {
                        r += 8;
                        continue;
                    }
                    th(t, o, h, (c &= 2147483647), i), (r += 8);
                }
            }
            function tg(t, e, n) {
                var i = {},
                    r = {};
                n.forEach(function (t) {
                    "string" == typeof t.lang ? ((i[t.lang] = t), e.push(t.lang)) : (r[t.lang] = t);
                });
                var o = Object.keys(i);
                o.sort().forEach(function (e) {
                    t.s.push(i[e]);
                });
                var a = Object.keys(r);
                return (
                    a
                        .map(function (t) {
                            return Number(t);
                        })
                        .sort(function (t, e) {
                            return t - e;
                        })
                        .forEach(function (e) {
                            t.n.push(r[e]);
                        }),
                    16 + 8 * (o.length + a.length)
                );
            }
            function td(t, e, n) {
                var i = {},
                    r = {};
                return (
                    n.forEach(function (t) {
                        var n, o;
                        if ("string" == typeof t.id) {
                            var a = null !== (n = i[t.id]) && void 0 !== n ? n : (i[t.id] = []);
                            e.push(t.id), a.push(t);
                        } else {
                            var a = null !== (o = r[t.id]) && void 0 !== o ? o : (r[t.id] = []);
                            a.push(t);
                        }
                    }),
                    16 +
                    Object.keys(i)
                        .sort()
                        .map(function (n) {
                            var r = { id: n, s: [], n: [] };
                            return t.s.push(r), tg(r, e, i[n]);
                        })
                        .reduce(function (t, e) {
                            return t + 8 + e;
                        }, 0) +
                    Object.keys(r)
                        .map(function (t) {
                            return Number(t);
                        })
                        .sort(function (t, e) {
                            return t - e;
                        })
                        .map(function (n) {
                            var i = { id: n, s: [], n: [] };
                            return t.n.push(i), tg(i, e, r[n]);
                        })
                        .reduce(function (t, e) {
                            return t + 8 + e;
                        }, 0)
                );
            }
            function tv(t) {
                var e = t.length;
                return e > 65535 ? 65535 : e;
            }
            function ty(t, e) {
                for (var n = e.length, i = 0; i < n; ++i) {
                    var r = e[i];
                    if (r.text === t) return r.offset;
                }
                throw Error("Unexpected");
            }
            function tb(t, e, n, i) {
                return (
                    t.setUint32(e, 0, !0),
                    t.setUint32(e + 4, 0, !0),
                    t.setUint32(e + 8, 0, !0),
                    t.setUint16(e + 12, i.s.length, !0),
                    t.setUint16(e + 14, i.n.length, !0),
                    (e += 16),
                    i.s.forEach(function (i) {
                        var r = ty(i.lang, n);
                        t.setUint32(e, r, !0), t.setUint32(e + 4, i.offset, !0), (e += 8);
                    }),
                    i.n.forEach(function (n) {
                        t.setUint32(e, n.lang, !0), t.setUint32(e + 4, n.offset, !0), (e += 8);
                    }),
                    e
                );
            }
            function tw(t, e, n, i, r) {
                return (
                    t.setUint32(e, 0, !0),
                    t.setUint32(e + 4, 0, !0),
                    t.setUint32(e + 8, 0, !0),
                    t.setUint16(e + 12, r.s.length, !0),
                    t.setUint16(e + 14, r.n.length, !0),
                    (e += 16),
                    r.s.forEach(function (e) {
                        (e.offset = n), (n = tb(t, n, i, e));
                    }),
                    r.n.forEach(function (e) {
                        (e.offset = n), (n = tb(t, n, i, e));
                    }),
                    r.s.forEach(function (n) {
                        var r = ty(n.id, i);
                        t.setUint32(e, r + 2147483648, !0), t.setUint32(e + 4, n.offset + 2147483648, !0), (e += 8);
                    }),
                    r.n.forEach(function (n) {
                        t.setUint32(e, n.id, !0), t.setUint32(e + 4, n.offset + 2147483648, !0), (e += 8);
                    }),
                    n
                );
            }
            var tm = (function () {
                function t() {
                    (this.dateTime = 0), (this.majorVersion = 0), (this.minorVersion = 0), (this.entries = []), (this.sectionDataHeader = null), (this.originalSize = 0);
                }
                return (
                    (t.prototype.parse = function (t, e) {
                        if (t.data) {
                            var n = new DataView(t.data);
                            (this.dateTime = n.getUint32(4, !0)), (this.majorVersion = n.getUint16(8, !0)), (this.minorVersion = n.getUint16(10, !0));
                            for (
                                var i = n.getUint16(12, !0),
                                r = n.getUint16(14, !0),
                                o = 16,
                                a = [],
                                s = function (i, r, o) {
                                    var s = n.getUint32(o.dataOffset, !0) - t.info.virtualAddress,
                                        u = n.getUint32(o.dataOffset + 4, !0),
                                        f = n.getUint32(o.dataOffset + 8, !0);
                                    if (s >= 0) {
                                        var c = new Uint8Array(u);
                                        c.set(new Uint8Array(t.data, s, u)), a.push({ type: i.type, id: r.name, lang: o.lang, codepage: f, bin: c.buffer });
                                    } else {
                                        if (!e) throw Error("Cannot parse resource directory entry; RVA seems to be invalid.");
                                        a.push({ type: i.type, id: r.name, lang: o.lang, codepage: f, bin: new ArrayBuffer(0), rva: o.dataOffset });
                                    }
                                },
                                u = 0;
                                u < i;
                                ++u
                            ) {
                                var f = 2147483647 & n.getUint32(o, !0),
                                    c = n.getUint32(o + 4, !0);
                                if (!(2147483648 & c)) {
                                    o += 8;
                                    continue;
                                }
                                c &= 2147483647;
                                var l = tl(n, f);
                                tp(n, l, c, s), (o += 8);
                            }
                            for (var u = 0; u < r; ++u) {
                                var h = 2147483647 & n.getUint32(o, !0),
                                    c = n.getUint32(o + 4, !0);
                                if (!(2147483648 & c)) {
                                    o += 8;
                                    continue;
                                }
                                tp(n, h, (c &= 2147483647), s), (o += 8);
                            }
                            (this.entries = a), (this.originalSize = t.data.byteLength);
                        }
                    }),
                    (t.from = function (e, n) {
                        void 0 === n && (n = !1);
                        var i = [].concat(e.getAllSections()).sort(function (t, e) {
                            return t.info.virtualAddress - e.info.virtualAddress;
                        }),
                            r = e.getSectionByEntry(x.Resource);
                        if (r) {
                            for (var o = e.getSectionByEntry(x.BaseRelocation), a = 0; a < i.length; ++a)
                                if (i[a] === r) {
                                    for (var s = a + 1; s < i.length; ++s) if (!o || i[s] !== o) throw Error("After Resource section, sections except for relocation are not supported");
                                    break;
                                }
                        }
                        var u = new t();
                        return (u.sectionDataHeader = r ? k(r.info) : null), r && u.parse(r, n), u;
                    }),
                    (t.prototype.replaceResourceEntry = function (t) {
                        for (var e = this.entries.length, n = 0; n < e; ++n) {
                            var i = this.entries[n];
                            if (i.type === t.type && i.id === t.id && i.lang === t.lang) {
                                this.entries[n] = t;
                                return;
                            }
                        }
                        this.entries.push(t);
                    }),
                    (t.prototype.getResourceEntriesAsString = function (t, e) {
                        return this.entries
                            .filter(function (n) {
                                return n.type === t && n.id === e;
                            })
                            .map(function (t) {
                                return [
                                    t.lang,
                                    (function (t) {
                                        if ("undefined" != typeof TextDecoder) return new TextDecoder().decode(t);
                                        if (void 0 !== H) return ("buffer" in t ? H.from(t.buffer, t.byteOffset, t.byteLength) : H.from(t)).toString("utf8");
                                        var e = void 0;
                                        if (((e = "buffer" in t ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : new Uint8Array(t)), "undefined" != typeof decodeURIComponent)) {
                                            for (var n = "", i = 0; i < e.length; ++i) {
                                                var r = e[i];
                                                r < 16 ? (n += "%0" + r.toString(16)) : (n += "%" + r.toString(16));
                                            }
                                            return decodeURIComponent(n);
                                        }
                                        for (var n = "", i = 0; i < e.length; ++i) {
                                            var r = e[i];
                                            n += String.fromCharCode(r);
                                        }
                                        return n;
                                    })(t.bin),
                                ];
                            });
                    }),
                    (t.prototype.replaceResourceEntryFromString = function (t, e, n, i) {
                        var r = {
                            type: t,
                            id: e,
                            lang: n,
                            codepage: 1200,
                            bin: (function (t) {
                                if ("undefined" != typeof TextEncoder) return W(new TextEncoder().encode(t));
                                if (void 0 !== H) return W(H.from(t, "utf8"));
                                if ("undefined" != typeof encodeURIComponent) {
                                    for (var e = encodeURIComponent(t), n = 0, i = 0; i < e.length; ++n) {
                                        var r = e.charCodeAt(i);
                                        37 === r ? (i += 3) : ++i;
                                    }
                                    for (var o = new ArrayBuffer(n), a = new Uint8Array(o), i = 0, s = 0; i < e.length; ++s) {
                                        var r = e.charCodeAt(i);
                                        if (37 === r) {
                                            var u = parseInt(e.substring(i + 1, i + 3), 16);
                                            (a[s] = u), (i += 3);
                                        } else (a[s] = r), ++i;
                                    }
                                    return o;
                                }
                                var o = new ArrayBuffer(t.length);
                                return (
                                    new Uint8Array(o).set(
                                        [].map.call(t, function (t) {
                                            return t.charCodeAt(0);
                                        })
                                    ),
                                    o
                                );
                            })(i),
                        };
                        this.replaceResourceEntry(r);
                    }),
                    (t.prototype.removeResourceEntry = function (t, e, n) {
                        this.entries = this.entries.filter(function (i) {
                            return !(i.type === t && i.id === e && (void 0 === n || i.lang === n));
                        });
                    }),
                    (t.prototype.generateResourceData = function (t, e, n, i) {
                        void 0 === n && (n = !1), void 0 === i && (i = !1);
                        var r,
                            o,
                            a,
                            s,
                            u,
                            f,
                            c = [],
                            l = [],
                            h = [],
                            p =
                                ((r = h),
                                    (o = this.entries),
                                    (a = {}),
                                    (s = {}),
                                    o.forEach(function (t) {
                                        var e, n;
                                        if ("string" == typeof t.type) {
                                            var i = null !== (e = a[t.type]) && void 0 !== e ? e : (a[t.type] = []);
                                            r.push(t.type), i.push(t);
                                        } else {
                                            var i = null !== (n = s[t.type]) && void 0 !== n ? n : (s[t.type] = []);
                                            i.push(t);
                                        }
                                    }),
                                    16 +
                                    Object.keys(a)
                                        .sort()
                                        .map(function (t) {
                                            var e = { type: t, s: [], n: [] };
                                            return c.push(e), td(e, r, a[t]);
                                        })
                                        .reduce(function (t, e) {
                                            return t + 8 + e;
                                        }, 0) +
                                    Object.keys(s)
                                        .map(function (t) {
                                            return Number(t);
                                        })
                                        .sort(function (t, e) {
                                            return t - e;
                                        })
                                        .map(function (t) {
                                            var e = { type: t, s: [], n: [] };
                                            return l.push(e), td(e, r, s[t]);
                                        })
                                        .reduce(function (t, e) {
                                            return t + 8 + e;
                                        }, 0));
                        h = h.reduce(function (t, e) {
                            return t.indexOf(e) >= 0 ? t : t.concat(e);
                        }, []);
                        var g = p;
                        p += h.reduce(function (t, e) {
                            return t + 2 + 2 * tv(e);
                        }, 0);
                        var d = (p = N(p, 8)),
                            v = (p = this.entries.reduce(function (t, e) {
                                return (e.offset = t), t + 16;
                            }, d));
                        p = this.entries.reduce(function (t, e) {
                            return N(t, 8) + e.bin.byteLength;
                        }, v);
                        var y = N(p, e),
                            b = N(this.originalSize, e);
                        if (n && y > b) throw Error("New resource data is larger than original");
                        !i && y < b && (y = b);
                        var w = new ArrayBuffer(y),
                            m = new DataView(w),
                            U = d,
                            O = t + v;
                        this.entries.forEach(function (t) {
                            var e = t.bin.byteLength;
                            void 0 !== t.rva ? m.setUint32(U, t.rva, !0) : ((O = N(O, 8)), m.setUint32(U, O, !0), (O += e)), m.setUint32(U + 4, e, !0), m.setUint32(U + 8, t.codepage, !0), m.setUint32(U + 12, 0, !0), (U += 16);
                        }),
                            (U = v),
                            this.entries.forEach(function (t) {
                                var e = t.bin.byteLength;
                                F(w, U, t.bin, 0, e), (U += N(e, 8));
                            });
                        var A = [];
                        if (
                            ((U = g),
                                h.forEach(function (t) {
                                    A.push({ offset: U, text: t }),
                                        (U = (function (t, e, n) {
                                            var i = tv(n);
                                            t.setUint16(e, i, !0), (e += 2);
                                            for (var r = 0; r < i; ++r) t.setUint16(e, n.charCodeAt(r), !0), (e += 2);
                                            return e;
                                        })(m, U, t));
                                }),
                                (u = 0),
                                m.setUint32(u, 0, !0),
                                m.setUint32(u + 4, 0, !0),
                                m.setUint32(u + 8, 0, !0),
                                m.setUint16(u + 12, c.length, !0),
                                m.setUint16(u + 14, l.length, !0),
                                (f = (u += 16) + 8 * (c.length + l.length)),
                                c.forEach(function (t) {
                                    (t.offset = f), (f += 16 + 8 * (t.s.length + t.n.length));
                                }),
                                l.forEach(function (t) {
                                    (t.offset = f), (f += 16 + 8 * (t.s.length + t.n.length));
                                }),
                                c.forEach(function (t) {
                                    var e = ty(t.type, A);
                                    m.setUint32(u, e + 2147483648, !0), m.setUint32(u + 4, t.offset + 2147483648, !0), (u += 8), (f = tw(m, t.offset, f, A, t));
                                }),
                                l.forEach(function (t) {
                                    m.setUint32(u, t.type, !0), m.setUint32(u + 4, t.offset + 2147483648, !0), (u += 8), (f = tw(m, t.offset, f, A, t));
                                }),
                                y > p)
                        )
                            for (var D = p, S = 0; D < y; ++D, ++S) 8 === S && (S = 0), m.setUint8(D, "PADDINGX".charCodeAt(S));
                        return { bin: w, rawSize: p, dataOffset: v, descEntryOffset: d, descEntryCount: this.entries.length };
                    }),
                    (t.prototype.outputResource = function (t, e, n) {
                        void 0 === e && (e = !1), void 0 === n && (n = !1);
                        var i,
                            r = t.getFileAlignment();
                        i = this.sectionDataHeader
                            ? { data: null, info: k(this.sectionDataHeader) }
                            : {
                                data: null,
                                info: {
                                    name: ".rsrc",
                                    virtualSize: 0,
                                    virtualAddress: 0,
                                    sizeOfRawData: 0,
                                    pointerToRawData: 0,
                                    pointerToRelocations: 0,
                                    pointerToLineNumbers: 0,
                                    numberOfRelocations: 0,
                                    numberOfLineNumbers: 0,
                                    characteristics: 1073741888,
                                },
                            };
                        var o = this.generateResourceData(0, r, e, n);
                        (i.data = o.bin), (i.info.sizeOfRawData = o.bin.byteLength), (i.info.virtualSize = o.rawSize), t.setSectionByEntry(x.Resource, i);
                        for (var a = t.getSectionByEntry(x.Resource), s = new DataView(a.data), u = o.descEntryOffset, f = a.info.virtualAddress + o.dataOffset, c = 0; c < o.descEntryCount; ++c) {
                            var l = s.getUint32(u + 4, !0);
                            (f = N(f, 8)), s.setUint32(u, f, !0), (f += l), (u += 16);
                        }
                    }),
                    t
                );
            })();
            function tU(t) {
                return q.from(t);
            }
            function tO(t, e) {
                return to.from(t, e.newHeaderAddress);
            }
            function tA(t, e, n) {
                return ts.from(t, n.fileHeader.numberOfSections, e.newHeaderAddress + n.byteLength);
            }
            function tD(t, e, n, i) {
                for (var r = ts.from(t, n.fileHeader.numberOfSections, e.newHeaderAddress + n.byteLength), o = r.length, a = n.optionalHeaderDataDirectory.get(i).virtualAddress, s = 0; s < o; ++s) {
                    var u = r.get(s),
                        f = u.virtualAddress + u.virtualSize;
                    if (a >= u.virtualAddress && a < f) {
                        var c = u.pointerToRawData;
                        if (!c) return null;
                        return t.slice(c, c + u.sizeOfRawData);
                    }
                    if (a < u.virtualAddress) break;
                }
                return null;
            }
            var tS = "2.0.2";
            function tI(t, e, n) {
                if (!("buffer" in t)) return new DataView(t, e, n);
                var i = t.byteOffset,
                    r = t.byteLength;
                return void 0 !== e && ((i += e), (r -= e)), void 0 !== n && (r = n), new DataView(t.buffer, i, r);
            }
            function tE(t, e) {
                return Math.floor((t + e - 1) / e) * e;
            }
            function t_(t, e, n, i, r) {
                var o = "buffer" in t ? new Uint8Array(t.buffer, t.byteOffset + (e || 0), r) : new Uint8Array(t, e, r),
                    a = "buffer" in n ? new Uint8Array(n.buffer, n.byteOffset + (i || 0), r) : new Uint8Array(n, i, r);
                o.set(a);
            }
            function tP(t, e, n) {
                var i = new ArrayBuffer(n);
                return t_(i, 0, t, e, n), i;
            }
            function tj(t, e, n) {
                return e + 4 <= n ? t.getInt32(e, !0) : 0;
            }
            function tR(t, e, n) {
                return e < n ? t.getUint8(e) : 0;
            }
            function tz(t, e, n) {
                return e + 2 <= n ? t.getUint16(e, !0) : 0;
            }
            function tC(t, e, n) {
                return e + 4 <= n ? t.getUint32(e, !0) : 0;
            }
            function tV(t, e) {
                return (tE(Math.abs(t), 32) / 8) * Math.abs(e);
            }
            n(48764).Buffer;
            var tT = (function () {
                function t(t, e, n, i, r) {
                    var o = tI(n, i, r),
                        a = o.byteLength,
                        s = o.getUint32(0, !0);
                    s > a && (s = a);
                    var u = tC(o, 20, s),
                        f = {
                            width: tj(o, 4, s),
                            height: tj(o, 8, s),
                            planes: tz(o, 12, s),
                            bitCount: tz(o, 14, s),
                            compression: tC(o, 16, s),
                            sizeImage: u,
                            xPelsPerMeter: tj(o, 24, s),
                            yPelsPerMeter: tj(o, 28, s),
                            colorUsed: tC(o, 32, s),
                            colorImportant: tC(o, 36, s),
                            colors: [],
                        },
                        c = 40,
                        l = f.colorUsed;
                    if (!l)
                        switch (f.bitCount) {
                            case 1:
                                l = 2;
                                break;
                            case 4:
                                l = 16;
                                break;
                            case 8:
                                l = 256;
                        }
                    for (var h = 0; h < l; ++h) f.colors.push({ b: tR(o, c, a), g: tR(o, c + 1, a), r: tR(o, c + 2, a) }), (c += 4);
                    (this.width = t), (this.height = e), (this.bitmapInfo = f);
                    var p = tE(f.bitCount * Math.abs(f.width), 32) / 8,
                        g = Math.abs(f.height) / 2,
                        d = u || p * g;
                    (this._pixels = tP(o, c, d)), (c += d);
                    var v = tV(f.width, g);
                    v + c <= a ? (this.masks = tP(o, c, v)) : (this.masks = new ArrayBuffer(v));
                }
                return (
                    Object.defineProperty(t.prototype, "pixels", {
                        get: function () {
                            return this._pixels;
                        },
                        set: function (t) {
                            (this._pixels = t), 0 !== this.bitmapInfo.sizeImage && (this.bitmapInfo.sizeImage = t.byteLength);
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    (t.from = function (e, n, i, r, o) {
                        var a, s, u;
                        return "object" == typeof i ? ((a = e), (s = n), (u = i)) : ((a = null), (s = null), (u = e), (r = n), (o = i)), new t(a, s, u, r, o);
                    }),
                    (t.prototype.isIcon = function () {
                        return !0;
                    }),
                    (t.prototype.isRaw = function () {
                        return !1;
                    }),
                    (t.prototype.generate = function () {
                        var t = this.bitmapInfo,
                            e = Math.abs(t.width),
                            n = tE(t.bitCount * e, 32) / 8,
                            i = Math.abs(t.height) / 2,
                            r = n * i,
                            o = tV(t.width, i),
                            a = t.colors.length,
                            s = new ArrayBuffer(40 + 4 * a + r + o),
                            u = new DataView(s);
                        u.setUint32(0, 40, !0),
                            u.setInt32(4, t.width, !0),
                            u.setInt32(8, t.height, !0),
                            u.setUint16(12, t.planes, !0),
                            u.setUint16(14, t.bitCount, !0),
                            u.setUint32(16, t.compression, !0),
                            u.setUint32(20, t.sizeImage, !0),
                            u.setInt32(24, t.xPelsPerMeter, !0),
                            u.setInt32(28, t.yPelsPerMeter, !0),
                            u.setUint32(32, t.colorUsed, !0),
                            u.setUint32(36, t.colorImportant > a ? a : t.colorImportant, !0);
                        var f = 40;
                        return (
                            t.colors.forEach(function (t) {
                                u.setUint8(f, t.b), u.setUint8(f + 1, t.g), u.setUint8(f + 2, t.r), (f += 4);
                            }),
                            t_(s, f, this.pixels, 0, r),
                            t_(s, f + r, this.masks, 0, o),
                            s
                        );
                    }),
                    t
                );
            })(),
                tL = (function () {
                    function t(t, e, n, i, r, o) {
                        (this.width = e), (this.height = n), (this.bitCount = i), "number" != typeof r ? ((r = 0), (o = t.byteLength)) : "number" != typeof o && (o = t.byteLength - r), (this.bin = tP(t, r, o));
                    }
                    return (
                        (t.from = function (e, n, i, r, o, a) {
                            return new t(e, n, i, r, o, a);
                        }),
                        (t.prototype.isIcon = function () {
                            return !1;
                        }),
                        (t.prototype.isRaw = function () {
                            return !0;
                        }),
                        t
                    );
                })(),
                tx = (function () {
                    function t(t) {
                        if (!t) {
                            this.icons = [];
                            return;
                        }
                        var e = tI(t),
                            n = e.byteLength,
                            i = [];
                        if (1 === e.getUint16(2, !0))
                            for (var r = e.getUint16(4, !0), o = 6, a = 0; a < r; ++a) {
                                var s = tC(e, o + 8, n),
                                    u = tC(e, o + 12, n),
                                    f = tR(e, o, n),
                                    c = tR(e, o + 1, n),
                                    l = tR(e, o + 6, n),
                                    h = void 0;
                                (h = 40 === e.getUint32(u, !0) ? tT.from(f, c, t, u, s) : tL.from(t, f || 256, c || 256, l, u, s)),
                                    i.push({ width: f, height: c, colors: tR(e, o + 2, n), planes: tz(e, o + 4, n), bitCount: l, data: h }),
                                    (o += 16);
                            }
                        this.icons = i;
                    }
                    return (
                        (t.from = function (e) {
                            return new t(e);
                        }),
                        (t.prototype.generate = function () {
                            var t, e, n, i, r, o;
                            return (
                                (e = (t = this.icons).length) > 65535 && (e = 65535),
                                (r = new DataView(
                                    (i = new ArrayBuffer(
                                        (n = t.map(function (t) {
                                            return t.data.isIcon() ? { item: t, bin: t.data.generate(), offset: 0 } : { item: t, bin: t.data.bin, offset: 0 };
                                        })).reduce(function (t, e) {
                                            return (e.offset = t), t + e.bin.byteLength;
                                        }, 6 + 16 * e)
                                    ))
                                )).setUint16(0, 0, !0),
                                r.setUint16(2, 1, !0),
                                r.setUint16(4, e, !0),
                                (o = 6),
                                n.forEach(function (t) {
                                    var e,
                                        n,
                                        a,
                                        s,
                                        u,
                                        f = t.item;
                                    if (f.data.isIcon()) {
                                        var c = f.data.bitmapInfo;
                                        (e = void 0 !== f.width ? f.width : Math.abs(c.width)),
                                            (n = void 0 !== f.height ? f.height : Math.abs(c.height / 2)),
                                            (a = void 0 !== f.colors ? f.colors : c.colorUsed || c.colors.length),
                                            (s = void 0 !== f.planes ? f.planes : c.planes),
                                            (u = void 0 !== f.bitCount ? f.bitCount : c.bitCount);
                                    } else (e = void 0 !== f.width ? f.width : Math.abs(f.data.width)), (n = void 0 !== f.height ? f.height : Math.abs(f.data.height)), (a = void 0 !== f.colors ? f.colors : 0), (s = void 0 !== f.planes ? f.planes : 1), (u = void 0 !== f.bitCount ? f.bitCount : f.data.bitCount);
                                    var l = t.bin.byteLength;
                                    r.setUint8(o, e >= 256 ? 0 : e),
                                        r.setUint8(o + 1, n >= 256 ? 0 : n),
                                        r.setUint8(o + 2, a >= 256 ? 0 : a),
                                        r.setUint8(o + 3, 0),
                                        r.setUint16(o + 4, s, !0),
                                        r.setUint16(o + 6, u, !0),
                                        r.setUint32(o + 8, l, !0),
                                        r.setUint32(o + 12, t.offset, !0),
                                        (o += 16),
                                        t_(i, t.offset, t.bin, 0, l);
                                }),
                                i
                            );
                        }),
                        t
                    );
                })();
            function tH(t) {
                var e = t.length;
                e > 65535 && (e = 65535);
                var n = new ArrayBuffer(6 + 14 * t.length),
                    i = new DataView(n);
                i.setUint16(0, 0, !0), i.setUint16(2, 1, !0), i.setUint16(4, e, !0);
                var r = 6;
                return (
                    t.forEach(function (t) {
                        i.setUint8(r, t.width >= 256 ? 0 : t.width),
                            i.setUint8(r + 1, t.height >= 256 ? 0 : t.height),
                            i.setUint8(r + 2, t.colors >= 256 ? 0 : t.colors),
                            i.setUint8(r + 3, 0),
                            i.setUint16(r + 4, t.planes, !0),
                            i.setUint16(r + 6, t.bitCount, !0),
                            i.setUint32(r + 8, t.dataSize, !0),
                            i.setUint16(r + 12, t.iconID, !0),
                            (r += 14);
                    }),
                    n
                );
            }
            var tk = (function () {
                function t(t) {
                    var e = new DataView(t.bin),
                        n = e.byteLength,
                        i = [];
                    if (1 === e.getUint16(2, !0))
                        for (var r = e.getUint16(4, !0), o = 6, a = 0; a < r; ++a)
                            i.push({ width: tR(e, o, n), height: tR(e, o + 1, n), colors: tR(e, o + 2, n), planes: tz(e, o + 4, n), bitCount: tz(e, o + 6, n), dataSize: tC(e, o + 8, n), iconID: tz(e, o + 12, n) }), (o += 14);
                    (this.id = t.id), (this.lang = t.lang), (this.icons = i);
                }
                return (
                    (t.fromEntries = function (e) {
                        return e
                            .filter(function (t) {
                                return 14 === t.type;
                            })
                            .map(function (e) {
                                return new t(e);
                            });
                    }),
                    (t.prototype.generateEntry = function () {
                        var t = tH(this.icons);
                        return { type: 14, id: this.id, lang: this.lang, codepage: 0, bin: t };
                    }),
                    (t.prototype.getIconItemsFromEntries = function (t) {
                        var e = this;
                        return t
                            .map(function (t) {
                                if (3 !== t.type || t.lang !== e.lang) return null;
                                var n = e.icons
                                    .filter(function (e) {
                                        return t.id === e.iconID;
                                    })
                                    .shift();
                                return n ? { entry: t, icon: n } : null;
                            })
                            .filter(function (t) {
                                return !!t;
                            })
                            .map(function (t) {
                                var e = t.entry.bin;
                                if (40 === new DataView(e).getUint32(0, !0)) return tT.from(e);
                                var n = t.icon;
                                return tL.from(e, n.width, n.height, n.bitCount);
                            });
                    }),
                    (t.replaceIconsForResource = function (e, n, i, r) {
                        var o,
                            a = e
                                .filter(function (t) {
                                    return 14 === t.type && t.id === n && t.lang === i;
                                })
                                .shift(),
                            s = r.map(function (t) {
                                if (!t.isIcon()) return { base: t, bm: { width: t.width, height: t.height, planes: 1, bitCount: t.bitCount }, bin: t.bin, id: 0 };
                                var e = t.width,
                                    n = t.height;
                                return (
                                    null === e && (e = t.bitmapInfo.width),
                                    null === n && ((n = t.bitmapInfo.height), null !== t.masks && (n = Math.floor(n / 2))),
                                    { base: t, bm: { width: e, height: n, planes: t.bitmapInfo.planes, bitCount: t.bitmapInfo.bitCount }, bin: t.generate(), id: 0 }
                                );
                            });
                        if (a)
                            for (var u = e.length - 1; u >= 0; --u) {
                                var f = e[u];
                                null != f &&
                                    3 === f.type &&
                                    !(function (e, n, i) {
                                        return n.some(function (n) {
                                            return (
                                                14 === n.type &&
                                                (n.id !== i.id || n.lang !== i.lang) &&
                                                new t(n).icons.some(function (t) {
                                                    return t.iconID === e.id;
                                                })
                                            );
                                        });
                                    })(f, e, a) &&
                                    e.splice(u, 1);
                            }
                        else (a = { type: 14, id: n, lang: i, codepage: 0, bin: null }), e.push(a);
                        s.forEach(function (t) {
                            (null == o ? void 0 : o.last)
                                ? ++o.id
                                : (o = (function (t, e, n) {
                                    for (
                                        var i = n ? 1 : 3,
                                        r = t
                                            .filter(function (t) {
                                                return t.type === i && t.lang === e && "number" == typeof t.id;
                                            })
                                            .map(function (t) {
                                                return t.id;
                                            })
                                            .sort(function (t, e) {
                                                return t - e;
                                            }),
                                        o = 1,
                                        a = 0;
                                        a < r.length;
                                        a++
                                    ) {
                                        var s = r[a];
                                        if (o < s) return { id: o, last: !1 };
                                        o === s && ++o;
                                    }
                                    return { id: o, last: !0 };
                                })(e, i, !1)),
                                e.push({ type: 3, id: o.id, lang: i, codepage: 0, bin: t.bin }),
                                (t.id = o.id);
                        });
                        var c = tH(
                            s.map(function (t) {
                                var e = Math.abs(t.bm.width);
                                e >= 256 && (e = 0);
                                var n = Math.abs(t.bm.height);
                                n >= 256 && (n = 0);
                                var i = 0;
                                if (t.base.isIcon()) {
                                    var r = t.base.bitmapInfo;
                                    if (!(i = r.colorUsed || r.colors.length))
                                        switch (r.bitCount) {
                                            case 1:
                                                i = 2;
                                                break;
                                            case 4:
                                                i = 16;
                                        }
                                    i >= 256 && (i = 0);
                                }
                                return { width: e, height: n, colors: i, planes: t.bm.planes, bitCount: t.bm.bitCount, dataSize: t.bin.byteLength, iconID: t.id };
                            })
                        );
                        a.bin = c;
                    }),
                    t
                );
            })(),
                tB = (function () {
                    function t() {
                        (this.length = 16), (this._a = []), (this._a.length = 16);
                        for (var t = 0; t < 16; ++t) this._a[t] = "";
                    }
                    return (
                        (t.fromEntry = function (e, n, i) {
                            for (var r = new DataView(e, n, i), o = new t(), a = 0, s = 0; s < 16; ++s) {
                                var u = r.getUint16(a, !0);
                                a += 2;
                                for (var f = "", c = 0; c < u; ++c) (f += String.fromCharCode(r.getUint16(a, !0))), (a += 2);
                                o._a[s] = f;
                            }
                            return o;
                        }),
                        (t.prototype.get = function (t) {
                            var e = this._a[t];
                            return null != e && "" !== e ? e : null;
                        }),
                        (t.prototype.getAll = function () {
                            return this._a.map(function (t) {
                                return t || null;
                            });
                        }),
                        (t.prototype.set = function (t, e) {
                            this._a[t] = "".concat(null != e ? e : "").substr(0, 4097);
                        }),
                        (t.prototype.calcByteLength = function () {
                            for (var t = 0, e = 0; e < 16; ++e) {
                                var n = this._a[e];
                                (t += 2), null != n && (t += 2 * n.length);
                            }
                            return 16 * Math.floor((t + 15) / 16);
                        }),
                        (t.prototype.generate = function (t, e) {
                            for (var n = new DataView(t, e), i = 0, r = 0; r < 16; ++r) {
                                var o = this._a[r],
                                    a = null == o ? 0 : o.length > 4097 ? 4097 : o.length;
                                if ((n.setUint16(i, a, !0), (i += 2), null != o)) for (var s = 0; s < a; ++s) n.setUint16(i, o.charCodeAt(s), !0), (i += 2);
                            }
                            return 16 * Math.floor((i + 15) / 16);
                        }),
                        t
                    );
                })(),
                tM = (function () {
                    function t() {
                        (this.lang = 0), (this.items = []);
                    }
                    return (
                        (t.fromEntries = function (e, n) {
                            var i = new t();
                            return (
                                n.forEach(function (t) {
                                    6 !== t.type || t.lang !== e || "number" != typeof t.id || t.id <= 0 || (i.items[t.id - 1] = tB.fromEntry(t.bin, 0, t.bin.byteLength));
                                }),
                                (i.lang = e),
                                i
                            );
                        }),
                        (t.prototype.getAllStrings = function () {
                            return this.items
                                .map(function (t, e) {
                                    return t
                                        .getAll()
                                        .map(function (t, n) {
                                            return null !== t && "" !== t ? { id: (e << 4) + n, text: t } : null;
                                        })
                                        .filter(function (t) {
                                            return !!t;
                                        });
                                })
                                .reduce(function (t, e) {
                                    return t.concat(e);
                                }, []);
                        }),
                        (t.prototype.getById = function (t) {
                            if (t < 0) return null;
                            var e,
                                n = this.items[t >> 4];
                            return null !== (e = null == n ? void 0 : n.get(15 & t)) && void 0 !== e ? e : null;
                        }),
                        (t.prototype.setById = function (t, e) {
                            if (!(t < 0)) {
                                var n = t >> 4,
                                    i = this.items[n];
                                i || (this.items[n] = i = new tB()), i.set(15 & t, e);
                            }
                        }),
                        (t.prototype.generateEntries = function () {
                            var t = this;
                            return this.items
                                .map(function (e, n) {
                                    var i = new ArrayBuffer(e.calcByteLength());
                                    return e.generate(i, 0), { type: 6, id: n + 1, lang: t.lang, codepage: 1200, bin: i };
                                })
                                .filter(function (t) {
                                    return !!t;
                                });
                        }),
                        (t.prototype.replaceStringEntriesForExecutable = function (t) {
                            for (var e = this.generateEntries(), n = t.entries, i = 0; i < n.length; ++i) {
                                var r = n[i];
                                if (null != r && 6 === r.type && r.lang === this.lang) {
                                    for (var o = n.length - 1; o >= i; --o) {
                                        var a = n[o];
                                        null != a && 6 === a.type && a.lang === this.lang && n.splice(o, 1);
                                    }
                                    var s = n.splice.bind(n, i, 0);
                                    s.apply(void 0, e);
                                    return;
                                }
                            }
                            for (var i = 0; i < n.length; ++i) {
                                var r = n[i];
                                if (null != r && 6 === r.type && r.lang < this.lang) {
                                    var s = n.splice.bind(n, i + 1, 0);
                                    s.apply(void 0, e);
                                    return;
                                }
                            }
                            for (var i = n.length - 1; i >= 0; --i) {
                                var r = n[i];
                                if (null != r && 6 === r.type) {
                                    var s = n.splice.bind(n, i + 1, 0);
                                    s.apply(void 0, e);
                                    return;
                                }
                            }
                            n.push.apply(n, e);
                        }),
                        t
                    );
                })();
            ((h = A || (A = {}))[(h.Debug = 1)] = "Debug"),
                (h[(h.Prerelease = 2)] = "Prerelease"),
                (h[(h.Patched = 4)] = "Patched"),
                (h[(h.PrivateBuild = 8)] = "PrivateBuild"),
                (h[(h.InfoInferred = 16)] = "InfoInferred"),
                (h[(h.SpecialBuild = 32)] = "SpecialBuild");
            var tN = A;
            ((p = D || (D = {}))[(p.Unknown = 0)] = "Unknown"),
                (p[(p._Windows16 = 1)] = "_Windows16"),
                (p[(p._PM16 = 2)] = "_PM16"),
                (p[(p._PM32 = 3)] = "_PM32"),
                (p[(p._Windows32 = 4)] = "_Windows32"),
                (p[(p.DOS = 65536)] = "DOS"),
                (p[(p.OS2_16 = 131072)] = "OS2_16"),
                (p[(p.OS2_32 = 196608)] = "OS2_32"),
                (p[(p.NT = 262144)] = "NT"),
                (p[(p.DOS_Windows16 = 65537)] = "DOS_Windows16"),
                (p[(p.DOS_Windows32 = 65540)] = "DOS_Windows32"),
                (p[(p.NT_Windows32 = 262148)] = "NT_Windows32"),
                (p[(p.OS2_16_PM16 = 131074)] = "OS2_16_PM16"),
                (p[(p.OS2_32_PM32 = 196611)] = "OS2_32_PM32");
            var tF = D;
            ((g = S || (S = {}))[(g.Unknown = 0)] = "Unknown"),
                (g[(g.Printer = 1)] = "Printer"),
                (g[(g.Keyboard = 2)] = "Keyboard"),
                (g[(g.Language = 3)] = "Language"),
                (g[(g.Display = 4)] = "Display"),
                (g[(g.Mouse = 5)] = "Mouse"),
                (g[(g.Network = 6)] = "Network"),
                (g[(g.System = 7)] = "System"),
                (g[(g.Installable = 8)] = "Installable"),
                (g[(g.Sound = 9)] = "Sound"),
                (g[(g.Comm = 10)] = "Comm"),
                (g[(g.VersionedPrinter = 12)] = "VersionedPrinter"),
                ((d = I || (I = {}))[(d.Unknown = 0)] = "Unknown"),
                (d[(d.Raster = 1)] = "Raster"),
                (d[(d.Vector = 2)] = "Vector"),
                (d[(d.TrueType = 3)] = "TrueType"),
                ((v = E || (E = {}))[(v.Unknown = 0)] = "Unknown"),
                (v[(v.App = 1)] = "App"),
                (v[(v.DLL = 2)] = "DLL"),
                (v[(v.Driver = 3)] = "Driver"),
                (v[(v.Font = 4)] = "Font"),
                (v[(v.VxD = 5)] = "VxD"),
                (v[(v.StaticLibrary = 7)] = "StaticLibrary");
            var tG = E;
            function tW(t, e, n) {
                for (var i = ""; e + 2 <= n;) {
                    var r = t.getUint16(e, !0);
                    if (!r) break;
                    (i += String.fromCharCode(r)), (e += 2);
                }
                return i;
            }
            function tK(t, e, n) {
                for (var i = 0; i < n.length; ++i) t.setUint16(e, n.charCodeAt(i), !0), (e += 2);
                return t.setUint16(e, 0, !0), e + 2;
            }
            function tq() {
                return { fileVersionMS: 0, fileVersionLS: 0, productVersionMS: 0, productVersionLS: 0, fileFlagsMask: 0, fileFlags: 0, fileOS: 0, fileType: 0, fileSubtype: 0, fileDateMS: 0, fileDateLS: 0 };
            }
            function tX(t, e, n) {
                return isNaN(t) || t < e ? e : t >= n ? n : Math.floor(t);
            }
            function tJ(t, e, n, i, r) {
                var o, a, s, u, f, c;
                return (
                    "string" == typeof t && (void 0 === e || "number" == typeof e) && void 0 === n
                        ? ((a = (o = t
                            .split(".")
                            .map(function (t) {
                                return tX(Number(t), 0, 65535);
                            })
                            .concat(0, 0, 0))[0]),
                            (s = o[1]),
                            (u = o[2]),
                            (f = o[3]),
                            (c = e))
                        : ((a = tX(Number(t), 0, 65535)), (s = tX(Number(e), 0, 65535)), (u = tX(void 0 === n ? 0 : Number(n), 0, 65535)), (f = tX(void 0 === i ? 0 : Number(i), 0, 65535)), (c = r)),
                    [a, s, u, f, c]
                );
            }
            var tQ = (function () {
                function t(t) {
                    if (t) {
                        var e = new DataView(t.bin);
                        this.data = (function (t, e) {
                            var n = t.getUint16(0, !0),
                                i = t.getUint16(2, !0);
                            if (0 !== t.getUint16(4, !0) || n < i + 40 || "VS_VERSION_INFO" !== tW(t, 6, n)) throw Error("Invalid version data format");
                            var r = { lang: e.lang, fixedInfo: tq(), strings: [], translations: [], unknowns: [] },
                                o = 38;
                            if (i) {
                                var a = tC(t, 40, (i += 40)),
                                    s = tC(t, 44, i);
                                4277077181 === a &&
                                    s <= 65536 &&
                                    (r.fixedInfo = {
                                        fileVersionMS: tC(t, 48, i),
                                        fileVersionLS: tC(t, 52, i),
                                        productVersionMS: tC(t, 56, i),
                                        productVersionLS: tC(t, 60, i),
                                        fileFlagsMask: tC(t, 64, i),
                                        fileFlags: tC(t, 68, i),
                                        fileOS: tC(t, 72, i),
                                        fileType: tC(t, 76, i),
                                        fileSubtype: tC(t, 80, i),
                                        fileDateMS: tC(t, 84, i),
                                        fileDateLS: tC(t, 88, i),
                                    }),
                                    (o = i);
                            }
                            for (o = tE(o, 4); o < n;) {
                                var u = t.getUint16(o, !0),
                                    f = o + u;
                                f > n && (f = n);
                                var c = tW(t, o + 6, f);
                                switch (c) {
                                    case "StringFileInfo":
                                        r.strings = r.strings.concat(
                                            (function (t, e, n) {
                                                var i = t.getUint16(e + 2, !0);
                                                e += 36 + tE(i, 4);
                                                for (var r = []; e < n;)
                                                    !(function () {
                                                        var i = (function (t, e, n) {
                                                            var i = t.getUint16(e, !0),
                                                                r = t.getUint16(e + 2, !0);
                                                            e + i < n && (n = e + i);
                                                            var o = tW(t, e + 6, n);
                                                            e += tE(6 + 2 * (o.length + 1), 4);
                                                            var a = parseInt(o, 16);
                                                            if (isNaN(a)) throw Error("Invalid StringTable data format");
                                                            e += tE(r, 4);
                                                            for (var s = { lang: Math.floor(a / 65536), codepage: 65535 & a, values: {} }; e < n;) {
                                                                var u = t.getUint16(e, !0),
                                                                    f = t.getUint16(e + 2, !0);
                                                                if (1 !== t.getUint16(e + 4, !0)) {
                                                                    e += u;
                                                                    continue;
                                                                }
                                                                var c = e + u;
                                                                c > n && (c = n);
                                                                var l = tW(t, e + 6, c),
                                                                    h = (e = tE(e + 6 + 2 * (l.length + 1), 4)) + 2 * f;
                                                                h > c && (h = c);
                                                                var p = tW(t, e, h);
                                                                (e = tE(h, 4)), (s.values[l] = p);
                                                            }
                                                            return [n, s];
                                                        })(t, e, n),
                                                            o = i[1],
                                                            a = r.filter(function (t) {
                                                                return t.lang === o.lang && t.codepage === o.codepage;
                                                            });
                                                        if (0 === a.length) r.push(o);
                                                        else
                                                            for (var s in o.values) {
                                                                var u = o.values[s];
                                                                null != u && (a[0].values[s] = u);
                                                            }
                                                        e = tE(i[0], 4);
                                                    })();
                                                return r;
                                            })(t, o, f)
                                        );
                                        break;
                                    case "VarFileInfo":
                                        r.translations = r.translations.concat(
                                            (function (t, e, n) {
                                                var i = t.getUint16(e + 2, !0);
                                                e += 32 + tE(i, 4);
                                                for (var r = []; e < n;) {
                                                    var o = t.getUint16(e, !0),
                                                        a = t.getUint16(e + 2, !0);
                                                    if (0 !== t.getUint16(e + 4, !0)) {
                                                        e += tE(o, 4);
                                                        continue;
                                                    }
                                                    var s = e + o;
                                                    s > n && (s = n);
                                                    var u = tW(t, e + 6, s);
                                                    if (((e = tE(e + 6 + 2 * (u.length + 1), 4)), "Translation" !== u || a % 4 != 0)) {
                                                        e = tE(s, 4);
                                                        continue;
                                                    }
                                                    for (
                                                        var f = 0;
                                                        f < a &&
                                                        "break" !==
                                                        (function (n) {
                                                            if (e + 4 > s) return "break";
                                                            var i = t.getUint16(e, !0),
                                                                o = t.getUint16(e + 2, !0);
                                                            (e += 4),
                                                                0 ===
                                                                r.filter(function (t) {
                                                                    return t.lang === i && t.codepage === o;
                                                                }).length && r.push({ lang: i, codepage: o });
                                                        })(0);
                                                        f += 4
                                                    );
                                                    e = tE(s, 4);
                                                }
                                                return r;
                                            })(t, o, f)
                                        );
                                        break;
                                    default:
                                        r.unknowns.push({ name: c, entireBin: tP(t, o, u) });
                                }
                                o += tE(u, 4);
                            }
                            return r;
                        })(e, t);
                    } else this.data = { lang: 0, fixedInfo: tq(), strings: [], translations: [], unknowns: [] };
                }
                return (
                    (t.createEmpty = function () {
                        return new t();
                    }),
                    (t.create = function (e, n, i) {
                        "object" == typeof e ? ((r = e.lang), (n = e.fixedInfo), (i = e.strings)) : (r = e);
                        var r,
                            o = new t();
                        for (var a in ((o.data.lang = r), n))
                            if (a in n) {
                                var s = n[a];
                                null != s && (o.data.fixedInfo[a] = s);
                            }
                        return (
                            (o.data.strings = i.map(function (t) {
                                var e, n;
                                return {
                                    lang: t.lang,
                                    codepage: t.codepage,
                                    values:
                                        ((n = {}),
                                            Object.keys((e = t.values)).forEach(function (t) {
                                                n[t] = e[t];
                                            }),
                                            n),
                                };
                            })),
                            (o.data.translations = i.map(function (t) {
                                return { lang: t.lang, codepage: t.codepage };
                            })),
                            o
                        );
                    }),
                    (t.fromEntries = function (e) {
                        return e
                            .filter(function (t) {
                                return 16 === t.type;
                            })
                            .map(function (e) {
                                return new t(e);
                            });
                    }),
                    Object.defineProperty(t.prototype, "lang", {
                        get: function () {
                            return this.data.lang;
                        },
                        set: function (t) {
                            this.data.lang = t;
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    Object.defineProperty(t.prototype, "fixedInfo", {
                        get: function () {
                            return this.data.fixedInfo;
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    (t.prototype.getAvailableLanguages = function () {
                        return this.data.translations.slice(0);
                    }),
                    (t.prototype.replaceAvailableLanguages = function (t) {
                        this.data.translations = t.slice(0);
                    }),
                    (t.prototype.getStringValues = function (t) {
                        var e = this.data.strings
                            .filter(function (e) {
                                return e.lang === t.lang && e.codepage === t.codepage;
                            })
                            .map(function (t) {
                                return t.values;
                            });
                        return e.length > 0 ? e[0] : {};
                    }),
                    (t.prototype.getAllLanguagesForStringValues = function () {
                        return this.data.strings.map(function (t) {
                            return { codepage: t.codepage, lang: t.lang };
                        });
                    }),
                    (t.prototype.setStringValues = function (t, e, n) {
                        void 0 === n && (n = !0);
                        var i,
                            r = this.data.strings.filter(function (e) {
                                return e.lang === t.lang && e.codepage === t.codepage;
                            });
                        for (var o in (0 === r.length ? ((i = { lang: t.lang, codepage: t.codepage, values: {} }), this.data.strings.push(i)) : (i = r[0]), e)) {
                            var a = e[o];
                            null != a && (i.values[o] = a);
                        }
                        n &&
                            0 ===
                            this.data.translations.filter(function (e) {
                                return e.lang === t.lang && e.codepage === t.codepage;
                            }).length &&
                            this.data.translations.push({ lang: t.lang, codepage: t.codepage });
                    }),
                    (t.prototype.setStringValue = function (t, e, n, i) {
                        var r;
                        void 0 === i && (i = !0), this.setStringValues(t, (((r = {})[e] = n), r), i);
                    }),
                    (t.prototype.removeAllStringValues = function (t, e) {
                        void 0 === e && (e = !0);
                        for (var n = this.data.strings, i = n.length, r = 0; r < i; ++r) {
                            var o = n[r];
                            if (null != o && o.lang === t.lang && o.codepage === t.codepage) {
                                if ((n.splice(r, 1), e))
                                    for (var a = this.data.translations, s = 0; s < a.length; s++) {
                                        var u = a[s];
                                        if (null != u && u.lang === t.lang && u.codepage === t.codepage) {
                                            a.splice(s, 1);
                                            break;
                                        }
                                    }
                                break;
                            }
                        }
                    }),
                    (t.prototype.removeStringValue = function (t, e, n) {
                        void 0 === n && (n = !0);
                        for (var i = this.data.strings, r = i.length, o = 0; o < r; ++o) {
                            var a = i[o];
                            if (null != a && a.lang === t.lang && a.codepage === t.codepage) {
                                try {
                                    delete a.values[e];
                                } catch (t) { }
                                if (n && 0 === Object.keys(a.values).length) {
                                    i.splice(o, 1);
                                    for (var s = this.data.translations, u = 0; u < s.length; u++) {
                                        var f = s[u];
                                        if (null != f && f.lang === t.lang && f.codepage === t.codepage) {
                                            s.splice(u, 1);
                                            break;
                                        }
                                    }
                                }
                                break;
                            }
                        }
                    }),
                    (t.prototype.generateResource = function () {
                        var t,
                            e,
                            n,
                            i,
                            r,
                            o,
                            a,
                            s,
                            u,
                            f,
                            c,
                            l,
                            h,
                            p,
                            g,
                            d,
                            v,
                            y,
                            b,
                            w =
                                ((e =
                                    92 +
                                    (u = ((o = new ArrayBuffer(
                                        (i =
                                            36 +
                                            (r = (n = (t = this.data).strings).map(function (t) {
                                                return (function (t) {
                                                    var e = 24,
                                                        n = Object.keys(t.values),
                                                        i = new ArrayBuffer(
                                                            (e = n.reduce(function (e, n) {
                                                                var i = t.values[n];
                                                                if (null == i) return e;
                                                                var r = tE(6 + 2 * (n.length + 1), 4),
                                                                    o = tE(e + r + 2 * (i.length + 1), 4);
                                                                return o > 65532 ? e : o;
                                                            }, e))
                                                        ),
                                                        r = new DataView(i);
                                                    r.setUint16(0, e, !0), r.setUint16(2, 0, !0), r.setUint16(4, 1, !0);
                                                    var o = ((65535 & t.lang) * 65536 + (65535 & t.codepage)).toString(16).toLowerCase();
                                                    if (o.length < 8) {
                                                        var a = 8 - o.length;
                                                        o = "00000000".substr(0, a) + o;
                                                    }
                                                    var s = tE(tK(r, 6, o), 4);
                                                    return (
                                                        n.forEach(function (e) {
                                                            var n = t.values[e];
                                                            if (null != n) {
                                                                var i = tE(6 + 2 * (e.length + 1), 4),
                                                                    o = tE(i + 2 * (n.length + 1), 4);
                                                                s + o <= 65532 && (r.setUint16(s, o, !0), r.setUint16(s + 2, n.length + 1, !0), r.setUint16(s + 4, 1, !0), (s = tE(tK(r, s + 6, e), 4)), (s = tE(tK(r, s, n), 4)));
                                                            }
                                                        }),
                                                        i
                                                    );
                                                })(t);
                                            })).reduce(function (t, e) {
                                                return t + e.byteLength;
                                            }, 0))
                                    )),
                                        (a = new DataView(o)).setUint16(0, i, !0),
                                        a.setUint16(2, 0, !0),
                                        a.setUint16(4, 1, !0),
                                        (s = tE(tK(a, 6, "StringFileInfo"), 4)),
                                        r.forEach(function (t) {
                                            var e = t.byteLength;
                                            t_(o, s, t, 0, e), (s += e);
                                        }),
                                        o).byteLength) +
                                    (d = ((p = new DataView((h = new ArrayBuffer((c = 32 + (32 + (l = 4 * (f = t.translations).length))))))).setUint16(0, c, !0),
                                        p.setUint16(2, 0, !0),
                                        p.setUint16(4, 1, !0),
                                        (g = tE(tK(p, 6, "VarFileInfo"), 4)),
                                        p.setUint16(g, 32 + l, !0),
                                        p.setUint16(g + 2, l, !0),
                                        p.setUint16(g + 4, 0, !0),
                                        (g = tE(tK(p, g + 6, "Translation"), 4)),
                                        f.forEach(function (t) {
                                            p.setUint16(g, t.lang, !0), p.setUint16(g + 2, t.codepage, !0), (g += 4);
                                        }),
                                        h).byteLength)),
                                    (y = new DataView(
                                        (v = new ArrayBuffer(
                                            (e = t.unknowns.reduce(function (t, e) {
                                                return t + tE(e.entireBin.byteLength, 4);
                                            }, e))
                                        ))
                                    )).setUint16(0, e, !0),
                                    y.setUint16(2, 52, !0),
                                    y.setUint16(4, 0, !0),
                                    (b = tE(tK(y, 6, "VS_VERSION_INFO"), 4)),
                                    y.setUint32(b, 4277077181, !0),
                                    y.setUint32(b + 4, 65536, !0),
                                    y.setUint32(b + 8, t.fixedInfo.fileVersionMS, !0),
                                    y.setUint32(b + 12, t.fixedInfo.fileVersionLS, !0),
                                    y.setUint32(b + 16, t.fixedInfo.productVersionMS, !0),
                                    y.setUint32(b + 20, t.fixedInfo.productVersionLS, !0),
                                    y.setUint32(b + 24, t.fixedInfo.fileFlagsMask, !0),
                                    y.setUint32(b + 28, t.fixedInfo.fileFlags, !0),
                                    y.setUint32(b + 32, t.fixedInfo.fileOS, !0),
                                    y.setUint32(b + 36, t.fixedInfo.fileType, !0),
                                    y.setUint32(b + 40, t.fixedInfo.fileSubtype, !0),
                                    y.setUint32(b + 44, t.fixedInfo.fileDateMS, !0),
                                    y.setUint32(b + 48, t.fixedInfo.fileDateLS, !0),
                                    t_(v, (b += 52), o, 0, u),
                                    t_(v, (b += u), h, 0, d),
                                    (b += d),
                                    t.unknowns.forEach(function (t) {
                                        var e = t.entireBin.byteLength;
                                        t_(v, b, t.entireBin, 0, e), (b += tE(e, 4));
                                    }),
                                    v);
                        return { type: 16, id: 1, lang: this.lang, codepage: 1200, bin: w };
                    }),
                    (t.prototype.outputToResourceEntries = function (t) {
                        for (var e = this.generateResource(), n = t.length, i = 0; i < n; ++i) {
                            var r = t[i];
                            if (null != r && 16 === r.type && r.id === e.id && r.lang === e.lang) {
                                t[i] = e;
                                return;
                            }
                        }
                        t.push(e);
                    }),
                    (t.prototype.getDefaultVersionLang = function (t) {
                        var e = Number(this.lang);
                        if ("" !== this.lang && !isNaN(e)) return e;
                        var n = this.data.strings
                            .filter(function (e) {
                                return t in e.values && null != e.values[t];
                            })
                            .map(function (t) {
                                return t.lang;
                            });
                        return 1 === n.length ? n[0] : 1033;
                    }),
                    (t.prototype.setFileVersion = function (t, e, n, i, r) {
                        this.setFileVersionImpl.apply(this, tJ(t, e, n, i, r));
                    }),
                    (t.prototype.setFileVersionImpl = function (t, e, n, i, r) {
                        (r = void 0 !== r ? r : this.getDefaultVersionLang("FileVersion")),
                            (this.fixedInfo.fileVersionMS = (t << 16) | e),
                            (this.fixedInfo.fileVersionLS = (n << 16) | i),
                            this.setStringValue({ lang: r, codepage: 1200 }, "FileVersion", "".concat(t, ".").concat(e, ".").concat(n, ".").concat(i), !0);
                    }),
                    (t.prototype.setProductVersion = function (t, e, n, i, r) {
                        this.setProductVersionImpl.apply(this, tJ(t, e, n, i, r));
                    }),
                    (t.prototype.setProductVersionImpl = function (t, e, n, i, r) {
                        (r = void 0 !== r ? r : this.getDefaultVersionLang("ProductVersion")),
                            (this.fixedInfo.productVersionMS = (t << 16) | e),
                            (this.fixedInfo.productVersionLS = (n << 16) | i),
                            this.setStringValue({ lang: r, codepage: 1200 }, "ProductVersion", "".concat(t, ".").concat(e, ".").concat(n, ".").concat(i), !0);
                    }),
                    t
                );
            })(),
                tY = (function () {
                    function t(t) {
                        this.data = t;
                    }
                    return (
                        (t.prototype.toDER = function () {
                            return [].slice.call(this.data);
                        }),
                        t
                    );
                })();
            function tZ(t) {
                if (t < 128) return [t];
                for (var e = []; e.push(255 & t), !(t < 256);) t >>= 8;
                return e.push(128 + e.length), e.reverse();
            }
            function t$(t) {
                return t instanceof Array || (t = [].slice.call(t)), [4].concat(tZ(t.length)).concat(t);
            }
            function t0(t, e) {
                return [160 + t].concat(tZ(e.length)).concat(e);
            }
            function t1(t) {
                return [48].concat(tZ(t.length)).concat(t);
            }
            function t2(t) {
                var e = t.reduce(function (t, e) {
                    return t.concat(e instanceof Array ? e : e.toDER());
                }, []);
                return [49].concat(tZ(e.length)).concat(e);
            }
            var t6 = (function () {
                function t(t) {
                    "string" == typeof t
                        ? (this.value = t.split(/\./g).map(function (t) {
                            return Number(t);
                        }))
                        : (this.value = t);
                }
                return (
                    (t.prototype.toDER = function () {
                        var t = this.value,
                            e = [];
                        if (t.length < 2) throw Error("Unexpected 'value' field");
                        e.push(40 * t[0] + t[1]);
                        for (var n = 2; n < t.length; ++n)
                            for (var i = t[n], r = !0, o = e.length; ;) {
                                var a = 127 & i;
                                if ((r || (a += 128), e.splice(o, 0, a), i < 128)) break;
                                (r = !1), (i = Math.floor(i / 128));
                            }
                        return [6].concat(tZ(e.length)).concat(e);
                    }),
                    t
                );
            })(),
                t4 = new t6([1, 3, 14, 3, 2, 26]),
                t3 = new t6([2, 16, 840, 1, 101, 3, 4, 2, 1]),
                t8 = new t6([2, 16, 840, 1, 101, 3, 4, 2, 2]),
                t5 = new t6([2, 16, 840, 1, 101, 3, 4, 2, 3]),
                t7 = new t6([2, 16, 840, 1, 101, 3, 4, 2, 4]),
                t9 = new t6([2, 16, 840, 1, 101, 3, 4, 2, 5]),
                et = new t6([2, 16, 840, 1, 101, 3, 4, 2, 6]),
                ee = new t6([2, 16, 840, 1, 101, 3, 4, 2, 7]),
                en = new t6([2, 16, 840, 1, 101, 3, 4, 2, 8]),
                ei = new t6([2, 16, 840, 1, 101, 3, 4, 2, 9]),
                er = new t6([2, 16, 840, 1, 101, 3, 4, 2, 10]),
                eo = new t6([2, 16, 840, 1, 101, 3, 4, 2, 11]),
                ea = new t6([2, 16, 840, 1, 101, 3, 4, 2, 12]),
                es = new t6([1, 2, 840, 113549, 1, 1, 1]),
                eu = new t6([1, 2, 840, 10040, 4, 1]),
                ef = new t6([1, 2, 840, 113549, 1, 7, 2]),
                ec = new t6([1, 2, 840, 113549, 1, 9, 3]),
                el = new t6([1, 2, 840, 113549, 1, 9, 4]),
                eh = new t6([1, 3, 6, 1, 4, 1, 311, 2, 1, 11]),
                ep = new t6([1, 3, 6, 1, 4, 1, 311, 2, 1, 12]),
                eg = new t6([1, 3, 6, 1, 4, 1, 311, 2, 1, 21]),
                ed = new t6([1, 3, 6, 1, 4, 1, 311, 3, 3, 1]);
            function ev(t) {
                return "buffer" in t ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : new Uint8Array(t);
            }
            function ey(t, e) {
                var n = 0,
                    i = t[e];
                if (null == i) throw Error('Invalid "offset" value');
                if (i < 128) (n = i), ++e;
                else if (128 === i) throw Error("Not supported certificate data (variable length)");
                else {
                    var r = 127 & i;
                    for (++e; r--;) {
                        if (e >= t.length) throw Error("Invalid certificate data (invalid sequence length)");
                        (n <<= 8), (n |= t[e]), ++e;
                    }
                }
                return [n, e];
            }
            function eb(t, e) {
                var n = ey(t, e + 1),
                    i = n[0];
                return n[1] + i;
            }
            function ew(t, e) {
                if (t.length < e + 2 || 48 !== t[e]) return null;
                if (((s = (n = ey(t, e + 1))[0]), (e = n[1]), s > t.length - e)) throw Error("Invalid certificate data (insufficient data length)");
                if (6 !== t[e]) return null;
                for (var n, i, r, o, a, s, u = ef.toDER(), f = 0; f < u.length; ++f) if (t[e + f] !== u[f]) return null;
                if (160 !== t[(e += u.length)]) throw Error("Invalid certificate data (no content in contentInfo)");
                if (((s = (i = ey(t, e + 1))[0]), (e = i[1]) + s > t.length)) throw Error("Invalid certificate data (invalid length for content)");
                if (48 !== t[e]) throw Error("Invalid certificate data (unexpected signedData)");
                if (((s = (r = ey(t, e + 1))[0]), (e = r[1]) + s > t.length)) throw Error("Invalid certificate data (invalid length for signedData)");
                if (2 !== t[e] || 1 !== t[e + 1] || 1 !== t[e + 2]) throw Error("Invalid certificate data (unexpected signedData.version)");
                if (49 !== t[(e += 3)]) throw Error("Invalid certificate data (no signedData.digestAlgorithms)");
                if (((s = (o = ey(t, e + 1))[0]), (e = o[1]) + s > t.length)) throw Error("Invalid certificate data (invalid length for signedData.digestAlgorithms)");
                if (48 !== t[(e += s)]) throw Error("Invalid certificate data (no signedData.contentInfo)");
                if (((s = (a = ey(t, e + 1))[0]), (e = a[1]) + s > t.length)) throw Error("Invalid certificate data (invalid length for signedData.contentInfo)");
                if (160 !== t[(e += s)]) throw Error("Invalid certificate data (no signedData.certificates)");
                var c = ey(t, e + 1),
                    l = c[0],
                    h = c[1];
                if (h + l > t.length) throw Error("Invalid certificate data (invalid length for signedData.certificates)");
                return t.subarray(e, h + l);
            }
            var em = (function () {
                function t(t) {
                    this.algorithm = t;
                }
                return (
                    (t.prototype.toDER = function () {
                        return t1(this.algorithm.toDER().concat([5, 0]));
                    }),
                    t
                );
            })(),
                eU = (function () {
                    function t(t, e) {
                        (this.contentType = t), (this.content = e);
                    }
                    return (
                        (t.prototype.toDER = function () {
                            return t1(this.contentType.toDER().concat(t0(0, this.content.toDER())));
                        }),
                        t
                    );
                })(),
                eO =
                    ((y = function (t, e) {
                        return (y =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (t, e) {
                                    t.__proto__ = e;
                                }) ||
                            function (t, e) {
                                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                            })(t, e);
                    }),
                        function (t, e) {
                            if ("function" != typeof e && null !== e) throw TypeError("Class extends value " + String(e) + " is not a constructor or null");
                            function n() {
                                this.constructor = t;
                            }
                            y(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()));
                        }),
                eA = (function (t) {
                    function e() {
                        return (null !== t && t.apply(this, arguments)) || this;
                    }
                    return eO(e, t), e;
                })(eU),
                eD = (function () {
                    function t(t, e) {
                        (this.digestAlgorithm = t), (this.digest = e);
                    }
                    return (
                        (t.prototype.toDER = function () {
                            var t,
                                e = this.digest;
                            return (t = "buffer" in e ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : new Uint8Array(e)), t1(this.digestAlgorithm.toDER().concat(t$(t)));
                        }),
                        t
                    );
                })(),
                eS = (function () {
                    function t(t, e) {
                        (this.issuer = t), (this.serialNumber = e);
                    }
                    return (
                        (t.prototype.toDER = function () {
                            return t1(this.issuer.toDER().concat(this.serialNumber.toDER()));
                        }),
                        t
                    );
                })(),
                eI = (function () {
                    function t(t, e, n, i, r, o) {
                        (this.version = t), (this.digestAlgorithms = e), (this.contentInfo = n), (this.signerInfos = i), (this.certificates = r), (this.crls = o);
                    }
                    return (
                        (t.prototype.toDER = function () {
                            var t = [2, 1, 255 & this.version].concat(t2(this.digestAlgorithms)).concat(this.contentInfo.toDER());
                            if (this.certificates && this.certificates.length > 0) {
                                var e = t2(this.certificates);
                                (e[0] = 160), (t = t.concat(e));
                            }
                            return this.crls && (t = t.concat(t0(1, t2(this.crls)))), t1((t = t.concat(t2(this.signerInfos))));
                        }),
                        t
                    );
                })(),
                eE = (function () {
                    function t(t, e, n, i, r, o, a) {
                        (this.version = t),
                            (this.issuerAndSerialNumber = e),
                            (this.digestAlgorithm = n),
                            (this.digestEncryptionAlgorithm = i),
                            (this.encryptedDigest = r),
                            (this.authenticatedAttributes = o),
                            (this.unauthenticatedAttributes = a);
                    }
                    return (
                        (t.prototype.toDER = function () {
                            var t = [2, 1, 255 & this.version].concat(this.issuerAndSerialNumber.toDER()).concat(this.digestAlgorithm.toDER());
                            if (this.authenticatedAttributes && this.authenticatedAttributes.length > 0) {
                                var e = t2(this.authenticatedAttributes);
                                (e[0] = 160), (t = t.concat(e));
                            }
                            if (((t = t.concat(this.digestEncryptionAlgorithm.toDER()).concat(t$(this.encryptedDigest))), this.unauthenticatedAttributes && this.unauthenticatedAttributes.length > 0)) {
                                var n = t2(this.unauthenticatedAttributes);
                                (n[0] = 161), (t = t.concat(n));
                            }
                            return t1(t);
                        }),
                        t
                    );
                })(),
                e_ =
                    ((b = function (t, e) {
                        return (b =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (t, e) {
                                    t.__proto__ = e;
                                }) ||
                            function (t, e) {
                                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                            })(t, e);
                    }),
                        function (t, e) {
                            if ("function" != typeof e && null !== e) throw TypeError("Class extends value " + String(e) + " is not a constructor or null");
                            function n() {
                                this.constructor = t;
                            }
                            b(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()));
                        }),
                eP = new t6([1, 3, 6, 1, 4, 1, 311, 2, 1, 4]),
                ej = (function () {
                    function t(t, e) {
                        (this.type = t), (this.value = e);
                    }
                    return (
                        (t.prototype.toDER = function () {
                            return t1(this.type.toDER().concat(this.value.toDER()));
                        }),
                        t
                    );
                })(),
                eR = (function () {
                    function t(t, e) {
                        (this.data = t), (this.messageDigest = e);
                    }
                    return (
                        (t.prototype.toDER = function () {
                            return t1(this.toDERWithoutHeader());
                        }),
                        (t.prototype.toDERWithoutHeader = function () {
                            return this.data.toDER().concat(this.messageDigest.toDER());
                        }),
                        t
                    );
                })(),
                ez = (function (t) {
                    function e(e) {
                        return t.call(this, eP, e) || this;
                    }
                    return e_(e, t), e;
                })(eU),
                eC =
                    ((w = function (t, e) {
                        return (w =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (t, e) {
                                    t.__proto__ = e;
                                }) ||
                            function (t, e) {
                                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                            })(t, e);
                    }),
                        function (t, e) {
                            if ("function" != typeof e && null !== e) throw TypeError("Class extends value " + String(e) + " is not a constructor or null");
                            function n() {
                                this.constructor = t;
                            }
                            w(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()));
                        }),
                eV = new t6([1, 3, 6, 1, 4, 1, 311, 2, 1, 15]),
                eT = (function () {
                    function t(t, e) {
                        (this.flags = t), (this.file = e);
                    }
                    return (
                        (t.prototype.toDER = function () {
                            return t1([3, 1, 255 & this.flags].concat(t0(0, this.file.toDER())));
                        }),
                        t
                    );
                })(),
                eL = (function (t) {
                    function e(e) {
                        return t.call(this, eV, e) || this;
                    }
                    return eC(e, t), e;
                })(ej),
                ex =
                    ((m = function (t, e) {
                        return (m =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (t, e) {
                                    t.__proto__ = e;
                                }) ||
                            function (t, e) {
                                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                            })(t, e);
                    }),
                        function (t, e) {
                            if ("function" != typeof e && null !== e) throw TypeError("Class extends value " + String(e) + " is not a constructor or null");
                            function n() {
                                this.constructor = t;
                            }
                            m(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()));
                        }),
                eH = (function () {
                    function t(t, e) {
                        (this.tag = t), (this.value = e);
                    }
                    return (
                        (t.prototype.toDER = function () {
                            var t = this.value.toDER();
                            return 2 === this.tag ? t0(this.tag, t) : ((t[0] = 128 + this.tag), t);
                        }),
                        t
                    );
                })();
            ex(function (t) {
                var e;
                return (
                    U.call(
                        this,
                        0,
                        new tY(
                            [22]
                                .concat(
                                    tZ(
                                        (e = [].map
                                            .call(t, function (t) {
                                                return t.charCodeAt(0);
                                            })
                                            .filter(function (t) {
                                                return t < 128;
                                            })).length
                                    )
                                )
                                .concat(e)
                        )
                    ) || this
                );
            }, (U = eH));
            var ek = (function (t) {
                function e(e) {
                    var n,
                        i,
                        r,
                        o =
                            ((r = new DataView(
                                (i = new Uint8Array(
                                    2 *
                                    (n = [].map.call(e, function (t) {
                                        return t.charCodeAt(0);
                                    })).length
                                )).buffer
                            )),
                                n.forEach(function (t, e) {
                                    r.setUint16(2 * e, t, !1);
                                }),
                                [30].concat(tZ(i.length)).concat([].slice.call(i)));
                    return (o[0] = 128), t.call(this, 2, new tY(o)) || this;
                }
                return ex(e, t), e;
            })(eH),
                eB = (function () {
                    function t(t, e) {
                        (this.attrType = t), (this.attrValues = e);
                    }
                    return (
                        (t.prototype.toDER = function () {
                            return t1(this.attrType.toDER().concat(t2(this.attrValues)));
                        }),
                        t
                    );
                })(),
                eM = function (t, e) {
                    var n,
                        i,
                        r,
                        o,
                        a = {
                            label: 0,
                            sent: function () {
                                if (1 & r[0]) throw r[1];
                                return r[1];
                            },
                            trys: [],
                            ops: [],
                        };
                    return (
                        (o = { next: s(0), throw: s(1), return: s(2) }),
                        "function" == typeof Symbol &&
                        (o[Symbol.iterator] = function () {
                            return this;
                        }),
                        o
                    );
                    function s(s) {
                        return function (u) {
                            return (function (s) {
                                if (n) throw TypeError("Generator is already executing.");
                                for (; o && ((o = 0), s[0] && (a = 0)), a;)
                                    try {
                                        if (((n = 1), i && (r = 2 & s[0] ? i.return : s[0] ? i.throw || ((r = i.return) && r.call(i), 0) : i.next) && !(r = r.call(i, s[1])).done)) return r;
                                        switch (((i = 0), r && (s = [2 & s[0], r.value]), s[0])) {
                                            case 0:
                                            case 1:
                                                r = s;
                                                break;
                                            case 4:
                                                return a.label++, { value: s[1], done: !1 };
                                            case 5:
                                                a.label++, (i = s[1]), (s = [0]);
                                                continue;
                                            case 7:
                                                (s = a.ops.pop()), a.trys.pop();
                                                continue;
                                            default:
                                                if (!(r = (r = a.trys).length > 0 && r[r.length - 1]) && (6 === s[0] || 2 === s[0])) {
                                                    a = 0;
                                                    continue;
                                                }
                                                if (3 === s[0] && (!r || (s[1] > r[0] && s[1] < r[3]))) {
                                                    a.label = s[1];
                                                    break;
                                                }
                                                if (6 === s[0] && a.label < r[1]) {
                                                    (a.label = r[1]), (r = s);
                                                    break;
                                                }
                                                if (r && a.label < r[2]) {
                                                    (a.label = r[2]), a.ops.push(s);
                                                    break;
                                                }
                                                r[2] && a.ops.pop(), a.trys.pop();
                                                continue;
                                        }
                                        s = e.call(t, a);
                                    } catch (t) {
                                        (s = [6, t]), (i = 0);
                                    } finally {
                                        n = r = 0;
                                    }
                                if (5 & s[0]) throw s[1];
                                return { value: s[0] ? s[1] : void 0, done: !0 };
                            })([s, u]);
                        };
                    }
                };
            function eN(t) {
                var e = !1;
                return {
                    next: function () {
                        return e ? { done: !0, value: void 0 } : ((e = !0), { done: !1, value: t });
                    },
                };
            }
            function eF(t, e, n) {
                if (
                    (!(function (t) {
                        if (!t.encryptData && !t.signData) throw Error("Signer object must implement either `encryptData` or `signData`.");
                    })(e),
                        "number" == typeof n)
                ) {
                    if (n <= 0) throw Error("Invalid alignment value");
                    r = n;
                } else r = t.getFileAlignment();
                var i,
                    r,
                    o,
                    a = (function (t) {
                        if ("string" != typeof t) return new em(new t6(t));
                        switch (t) {
                            case "sha1":
                            case "SHA1":
                                return new em(t4);
                            case "sha256":
                            case "SHA256":
                                return new em(t3);
                            case "sha384":
                            case "SHA384":
                                return new em(t8);
                            case "sha512":
                            case "SHA512":
                                return new em(t5);
                            case "sha224":
                            case "SHA224":
                                return new em(t7);
                            case "sha512-224":
                            case "SHA512-224":
                                return new em(t9);
                            case "sha512-256":
                            case "SHA512-256":
                                return new em(et);
                            case "sha3-224":
                            case "SHA3-224":
                                return new em(ee);
                            case "sha3-256":
                            case "SHA3-256":
                                return new em(en);
                            case "sha3-384":
                            case "SHA3-384":
                                return new em(ei);
                            case "sha3-512":
                            case "SHA3-512":
                                return new em(er);
                            case "shake128":
                            case "SHAKE128":
                                return new em(eo);
                            case "shake256":
                            case "SHAKE256":
                                return new em(ea);
                            default:
                                throw Error("Invalid or unsupported digest algorithm");
                        }
                    })(e.getDigestAlgorithm()),
                    s = e.getEncryptionAlgorithm();
                if ("string" != typeof s) o = new em(new t6(s));
                else
                    switch (s) {
                        case "rsa":
                        case "RSA":
                            o = new em(es);
                            break;
                        case "dsa":
                        case "DSA":
                            o = new em(eu);
                            break;
                        default:
                            throw Error("Invalid or unsupported digest encryption algorithm");
                    }
                var u = e.getCertificateData ? e.getCertificateData() : e.getPublicKeyData(),
                    f = (function t(e) {
                        if (Array.isArray(e)) {
                            if (0 === e.length) throw Error("No data is specified.");
                            return t(e[0]);
                        }
                        var n,
                            i,
                            r,
                            o,
                            a,
                            s = ev(e);
                        if (s.length < 2) throw Error("Invalid certificate data");
                        if (48 !== s[0]) throw Error("Not supported certificate data (non-`Certificate`-format data)");
                        var u = ew(s, 0);
                        if (u) {
                            var f = ey(u, 1),
                                c = f[0],
                                l = f[1];
                            if (l + c > u.length) throw Error("Invalid certificate data (invalid length for signedData.certificates)");
                            if (48 !== u[l]) throw Error("Invalid certificate data (no signedData.certificates[0])");
                            var h = ey(u, l + 1),
                                p = h[0],
                                g = h[1];
                            if (g + p > u.length) throw Error("Invalid certificate data (invalid length for signedData.certificates[0])");
                            return t(u.subarray(l, g + p));
                        }
                        if (((r = (n = ey(s, 1))[0]), (o = n[1]), r > s.length - o)) throw Error("Invalid certificate data (insufficient data length)");
                        if (48 !== s[o]) throw Error("Invalid certificate data (missing tbsCertificate)");
                        if (((a = (i = ey(s, o + 1))[0]), (o = i[1]), a > s.length - o)) throw Error("Invalid certificate data (invalid tbsCertificate length)");
                        var d = o + a;
                        if (160 === s[o] && (o = eb(s, o)) >= d) throw Error("Invalid certificate data (insufficient tbsCertificate data: after version)");
                        if (2 !== s[o]) throw Error("Invalid certificate data (invalid serialNumber)");
                        var v = eb(s, o);
                        if (o >= d) throw Error("Invalid certificate data (insufficient tbsCertificate data: after serialNumber)");
                        var y = [].slice.call(s, o, v);
                        if (48 !== s[(o = v)]) throw Error("Invalid certificate data (invalid algorithmIdentifier)");
                        if ((o = eb(s, o)) >= d) throw Error("Invalid certificate data (insufficient tbsCertificate data: after serialNumber)");
                        if (48 !== s[o]) throw Error("Invalid certificate data (invalid issuer)");
                        var b = eb(s, o);
                        if (b > d) throw Error("Invalid certificate data (insufficient tbsCertificate data: issuer)");
                        return [[].slice.call(s, o, b), y];
                    })(u),
                    c = f[0],
                    l = f[1];
                return ((i = r),
                    e.digestData(
                        (function () {
                            var e, n, r, o, a, s, u, f, c, l, h, p, g, d;
                            return eM(this, function (v) {
                                switch (v.label) {
                                    case 0:
                                        return (
                                            (e = t.dosHeader.newHeaderAddress + 88),
                                            (n = t.dosHeader.newHeaderAddress + t.newHeader.getDataDirectoryOffset() + L.itemSize * x.Certificate),
                                            (r = t.getRawHeader()),
                                            (a = (o = t.getAllSections()).length),
                                            (u = new ArrayBuffer(tE((s = r.byteLength) + a * ts.itemSize, t.getFileAlignment()) - s)),
                                            (f = ts.from(u, a)),
                                            o.forEach(function (t, e) {
                                                f.set(e, t.info);
                                            }),
                                            [4, tP(r, 0, e)]
                                        );
                                    case 1:
                                        return v.sent(), [4, tP(r, e + 4, n - (e + 4))];
                                    case 2:
                                        return v.sent(), (c = n + L.itemSize), [4, tP(t.getRawHeader(), c, t.getTotalHeaderSize() - c)];
                                    case 3:
                                        return v.sent(), [4, u];
                                    case 4:
                                        v.sent(), (l = 0), (h = o), (v.label = 5);
                                    case 5:
                                        if (!(l < h.length)) return [3, 8];
                                        if (!(p = h[l]).data) return [3, 7];
                                        return [4, p.data];
                                    case 6:
                                        v.sent(), (v.label = 7);
                                    case 7:
                                        return l++, [3, 5];
                                    case 8:
                                        if (!(null !== (g = t.getExtraData()))) return [3, 11];
                                        return [4, g];
                                    case 9:
                                        if ((v.sent(), !(0 != (d = tE(g.byteLength, i) - g.byteLength)))) return [3, 11];
                                        return [4, new Uint8Array(d).buffer];
                                    case 10:
                                        v.sent(), (v.label = 11);
                                    case 11:
                                        return [2];
                                }
                            });
                        })()
                    ))
                    .then(function (t) {
                        var n = new eR(new eL(new eT(0, new ek(""))), new eD(a, t));
                        return e.digestData(eN(new Uint8Array(n.toDERWithoutHeader()).buffer)).then(function (t) {
                            var i,
                                r = [new eB(ep, [new tY([48, 0])]), new eB(ec, [eP]), new eB(eh, [new tY(t1(eg.toDER()))]), new eB(el, [new tY(t$(ev(t)))])];
                            return ((i = eN(new Uint8Array(t2(r)).buffer)),
                                e.signData
                                    ? e.signData(i)
                                    : e.digestData(i).then(function (t) {
                                        var n = new Uint8Array(new eD(a, t).toDER()).buffer;
                                        return e.encryptData(eN(n));
                                    })).then(function (t) {
                                        return [n, r, t];
                                    });
                        });
                    })
                    .then(function (t) {
                        var n = t[0],
                            i = t[1],
                            r = t[2],
                            s = new eE(1, new eS(new tY(c), new tY(l)), a, o, ev(r), i);
                        return e.timestampData
                            ? e
                                .digestData(
                                    eN(
                                        (function (t) {
                                            if ("buffer" in t) {
                                                var e = new ArrayBuffer(t.byteLength);
                                                return new Uint8Array(e).set(new Uint8Array(t.buffer, t.byteOffset, t.byteLength)), e;
                                            }
                                            var e = new ArrayBuffer(t.byteLength);
                                            return new Uint8Array(e).set(new Uint8Array(t)), e;
                                        })(r)
                                    )
                                )
                                .then(function (t) {
                                    var i = new Uint8Array(t1([2, 1, 1].concat(t1(a.toDER().concat(t$(ev(t))))).concat([1, 1, 255]))).buffer;
                                    return e.timestampData(i).then(function (t) {
                                        var e = (function (t) {
                                            var e,
                                                n,
                                                i,
                                                r,
                                                o,
                                                a,
                                                s,
                                                u,
                                                f = ev(t);
                                            if (f.length < 2 || 48 !== f[0]) throw Error("Invalid or unexpected timestamp response");
                                            if (((s = (e = ey(f, 1))[0]), (u = e[1]), s > f.length - u)) throw Error("Invalid or unexpected timestamp response (insufficient buffer)");
                                            var c = u + s;
                                            if (48 !== f[u]) throw Error("Invalid or unexpected timestamp response (no PKIStatusInfo)");
                                            if (((s = (n = ey(f, u + 1))[0]), (u = n[1]) >= c)) throw Error("Invalid or unexpected timestamp response (invalid length for PKIStatusInfo)");
                                            var l = u + s;
                                            if (2 !== f[u] || 1 !== f[u + 1]) throw Error("Invalid or unexpected timestamp response (invalid PKIStatusInfo.status)");
                                            var h = f[u + 2];
                                            switch (h) {
                                                case 0:
                                                case 1:
                                                    break;
                                                case 2:
                                                case 3:
                                                case 4:
                                                case 5:
                                                    var p = "Timestamp response has error status ".concat(h);
                                                    throw (
                                                        (u + 3 < l &&
                                                            48 === f[u + 3] &&
                                                            ((s = (i = ey(f, u + 4))[0]),
                                                                (u = i[1]) + s <= l &&
                                                                12 === f[u] &&
                                                                ((s = (r = ey(f, u + 1))[0]),
                                                                    (u = r[1]) + s <= l &&
                                                                    (p +=
                                                                        ", text = " +
                                                                        decodeURIComponent(
                                                                            [].slice
                                                                                .call(f, u, u + s)
                                                                                .map(function (t) {
                                                                                    if (t >= 32 && t <= 126) return String.fromCharCode(t);
                                                                                    var e = t.toString(16);
                                                                                    return 1 === e.length && (e = "0" + e), "%" + e;
                                                                                })
                                                                                .join("")
                                                                        )))),
                                                            Error(p))
                                                    );
                                                default:
                                                    throw Error("Unexpected PKIStatusInfo.status: ".concat(null != h ? h : "(unknown)"));
                                            }
                                            if (l + 1 >= c || 48 !== f[l]) throw Error("Invalid or unexpected timestamp response (no TimeStampToken)");
                                            if (((s = (o = ey(f, l + 1))[0]), (u = o[1]) + s > c)) throw Error("Invalid or unexpected timestamp response (insufficient data for TimeStampToken)");
                                            var g = ef.toDER();
                                            if (6 !== f[u]) throw Error("Invalid or unexpected timestamp response (no contentType in TimeStampToken)");
                                            for (var d = 0; d < g.length; ++d) if (f[u + d] !== g[d]) throw Error("Invalid or unexpected timestamp response (unexpected TimeStampToken.contentType octet)");
                                            if (160 !== f[(u += g.length)]) throw Error("Invalid or unexpected timestamp response (no content in TimeStampToken)");
                                            if (((s = (a = ey(f, u + 1))[0]), (u = a[1]) + s > c)) throw Error("Invalid or unexpected timestamp response (invalid length for TimeStampToken.content)");
                                            return tP(f, u, s);
                                        })(t);
                                        return (s.unauthenticatedAttributes = [new eB(ed, [new eU(ef, new tY(ev(e)))])]), [n, s];
                                    });
                                })
                            : [n, s];
                    })
                    .then(function (t) {
                        var e = t[0],
                            n = t[1],
                            i = new Uint8Array(
                                new eA(
                                    ef,
                                    new eI(
                                        1,
                                        [a],
                                        new ez(e),
                                        [n],
                                        (function t(e) {
                                            if (Array.isArray(e))
                                                return e.map(t).reduce(function (t, e) {
                                                    return t.concat(e);
                                                }, []);
                                            var n = ev(e),
                                                i = ew(n, 0);
                                            if (!i) return [new tY(n)];
                                            var r = ey(i, 1),
                                                o = r[0],
                                                a = r[1];
                                            if (a + o > i.length) throw Error("Invalid certificate data (invalid length for signedData.certificates)");
                                            for (var s = a + o, u = [], f = a; f < s;) {
                                                if (48 !== i[f]) throw Error("Invalid certificate data (no signedData.certificates[*])");
                                                var c = ey(i, f + 1),
                                                    l = c[0],
                                                    h = c[1];
                                                if (h + l > i.length) throw Error("Invalid certificate data (invalid length for signedData.certificates[*])");
                                                u.push(new tY(i.subarray(f, h + l))), (f = h + l);
                                            }
                                            return u;
                                        })(u)
                                    )
                                ).toDER()
                            ),
                            r = new ArrayBuffer(8 + i.length),
                            o = new DataView(r);
                        return o.setUint32(0, i.length + 8, !0), o.setUint16(4, 512, !0), o.setUint16(6, 2, !0), t_(r, 8, i, 0, i.byteLength), r;
                    })
                    .then(function (e) {
                        var n = tE(e.byteLength, r),
                            i = n,
                            o = t.getExtraData();
                        null !== o && (i += tE(o.byteLength, r) - o.byteLength);
                        var a = t.generate(i),
                            s = a.byteLength - n;
                        return L.from(a, t.dosHeader.newHeaderAddress + t.newHeader.getDataDirectoryOffset()).set(x.Certificate, { size: n, virtualAddress: s }), M(a, !0), t_(a, s, e, 0, e.byteLength), a;
                    });
            }
        },
    },
]);




// "use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9319],{49319:function(t,e,n){n.r(e),n.d(e,{Data:function(){return P},Format:function(){return _},NtExecutable:function(){return tc},NtExecutableResource:function(){return tm},Resource:function(){return j},generateExecutableWithSign:function(){return eF},version:function(){return tS}});var i,r,o,a,s,u,f,c,l,h,p,g,d,v,y,b,w,m,U,O,A,D,S,I,E,_={};n.r(_),n.d(_,{ArrayFormatBase:function(){return V},FormatBase:function(){return R},ImageDataDirectoryArray:function(){return L},ImageDirectoryEntry:function(){return x},ImageDosHeader:function(){return q},ImageFileHeader:function(){return J},ImageNtHeaders:function(){return to},ImageOptionalHeader:function(){return Y},ImageOptionalHeader64:function(){return ti},ImageSectionHeaderArray:function(){return ts},findImageSectionBlockByDirectoryEntry:function(){return tD},getImageDosHeader:function(){return tU},getImageNtHeadersByDosHeader:function(){return tO},getImageSectionHeadersByNtHeaders:function(){return tA}});var P={};n.r(P),n.d(P,{IconFile:function(){return tx},IconItem:function(){return tT},RawIconItem:function(){return tL}});var j={};n.r(j),n.d(j,{IconGroupEntry:function(){return tk},StringTable:function(){return tM},VersionFileDriverSubtype:function(){return S},VersionFileFlags:function(){return tN},VersionFileFontSubtype:function(){return I},VersionFileOS:function(){return tF},VersionFileType:function(){return tG},VersionInfo:function(){return tQ}});var R=function(){function t(t){this.view=t}return t.prototype.copyTo=function(t,e){new Uint8Array(t,e,this.view.byteLength).set(new Uint8Array(this.view.buffer,this.view.byteOffset,this.view.byteLength))},Object.defineProperty(t.prototype,"byteLength",{get:function(){return this.view.byteLength},enumerable:!1,configurable:!0}),t}(),z=(i=function(t,e){return(i=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),C=function(t){function e(e){return t.call(this,e)||this}return z(e,t),e.prototype.forEach=function(t){var e=this.length,n=[];n.length=e;for(var i=0;i<e;++i)n[i]=this.get(i);for(var i=0;i<e;++i)t(n[i],i,this)},e.prototype._iterator=function(){return new(function(){function t(t){this.base=t,this.i=0}return t.prototype.next=function(){return this.i===this.base.length?{value:void 0,done:!0}:{value:this.base.get(this.i++),done:!1}},t}())(this)},e}(R);"undefined"!=typeof Symbol&&(C.prototype[Symbol.iterator]=C.prototype._iterator);var V=C,T=(r=function(t,e){return(r=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),L=function(t){function e(e){var n=t.call(this,e)||this;return n.length=16,n}return T(e,t),e.from=function(t,n){return void 0===n&&(n=0),new e(new DataView(t,n,128))},e.prototype.get=function(t){return{virtualAddress:this.view.getUint32(8*t,!0),size:this.view.getUint32(4+8*t,!0)}},e.prototype.set=function(t,e){this.view.setUint32(8*t,e.virtualAddress,!0),this.view.setUint32(4+8*t,e.size,!0)},e.prototype.findIndexByVirtualAddress=function(t){for(var e=0;e<16;++e){var n=this.view.getUint32(8*e,!0),i=this.view.getUint32(4+8*e,!0);if(t>=n&&t<n+i)return e}return null},e.size=128,e.itemSize=8,e}(V);(o=O||(O={}))[o.Export=0]="Export",o[o.Import=1]="Import",o[o.Resource=2]="Resource",o[o.Exception=3]="Exception",o[o.Certificate=4]="Certificate",o[o.Security=4]="Security",o[o.BaseRelocation=5]="BaseRelocation",o[o.Debug=6]="Debug",o[o.Architecture=7]="Architecture",o[o.GlobalPointer=8]="GlobalPointer",o[o.Tls=9]="Tls",o[o.TLS=9]="TLS",o[o.LoadConfig=10]="LoadConfig",o[o.BoundImport=11]="BoundImport",o[o.Iat=12]="Iat",o[o.IAT=12]="IAT",o[o.DelayImport=13]="DelayImport",o[o.ComDescriptor=14]="ComDescriptor",o[o.COMDescriptor=14]="COMDescriptor";var x=O,H=n(48764).Buffer;function k(t){var e={};return Object.keys(t).forEach(function(n){e[n]=t[n]}),e}function B(t,e,n){if(!("buffer"in t))return new DataView(t,e,n);var i=t.byteOffset,r=t.byteLength;return void 0!==e&&(i+=e,r-=e),void 0!==n&&(r=n),new DataView(t.buffer,i,r)}function M(t,e){for(var n=q.from(t),i=new DataView(t),r=n.newHeaderAddress+88,o=0,a=function(t){(o+=t)>=4294967296&&(o=o%4294967296+(o/4294967296|0))},s=i.byteLength,u=s%4,f=s-u,c=0;c<f;c+=4)c!==r&&a(i.getUint32(c,!0));if(0!==u){for(var l=0,c=0;c<u;c++)l|=i.getUint8(f+c)<<(3-c)*8;a(l)}return o=(65535&o)+(o>>>16),o+=o>>>16,o=(65535&o)+s,e&&i.setUint32(r,o,!0),o}function N(t,e){return Math.floor((t+e-1)/e)*e}function F(t,e,n,i,r){var o="buffer"in t?new Uint8Array(t.buffer,t.byteOffset+(e||0),r):new Uint8Array(t,e,r),a="buffer"in n?new Uint8Array(n.buffer,n.byteOffset+(i||0),r):new Uint8Array(n,i,r);o.set(a)}function G(t,e,n){var i=new ArrayBuffer(n);return F(i,0,t,e,n),i}function W(t){if("buffer"in t){var e=new ArrayBuffer(t.byteLength);return new Uint8Array(e).set(new Uint8Array(t.buffer,t.byteOffset,t.byteLength)),e}var e=new ArrayBuffer(t.byteLength);return new Uint8Array(e).set(new Uint8Array(t)),e}var K=(a=function(t,e){return(a=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}a(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),q=function(t){function e(e){return t.call(this,e)||this}return K(e,t),e.from=function(t,n){return void 0===n&&(n=0),new e(B(t,n,64))},e.prototype.isValid=function(){return this.magic===e.DEFAULT_MAGIC},Object.defineProperty(e.prototype,"magic",{get:function(){return this.view.getUint16(0,!0)},set:function(t){this.view.setUint16(0,t,!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"lastPageSize",{get:function(){return this.view.getUint16(2,!0)},set:function(t){this.view.setUint16(2,t,!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"pages",{get:function(){return this.view.getUint16(4,!0)},set:function(t){this.view.setUint16(4,t,!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"relocations",{get:function(){return this.view.getUint16(6,!0)},set:function(t){this.view.setUint16(6,t,!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"headerSizeInParagraph",{get:function(){return this.view.getUint16(8,!0)},set:function(t){this.view.setUint16(8,t,!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"minAllocParagraphs",{get:function(){return this.view.getUint16(10,!0)},set:function(t){this.view.setUint16(10,t,!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"maxAllocParagraphs",{get:function(){return this.view.getUint16(12,!0)},set:function(t){this.view.setUint16(12,t,!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"initialSS",{get:function(){return this.view.getUint16(14,!0)},set:function(t){this.view.setUint16(14,t,!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"initialSP",{get:function(){return this.view.getUint16(16,!0)},set:function(t){this.view.setUint16(16,t,!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"checkSum",{get:function(){return this.view.getUint16(18,!0)},set:function(t){this.view.setUint16(18,t,!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"initialIP",{get:function(){return this.view.getUint16(20,!0)},set:function(t){this.view.setUint16(20,t,!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"initialCS",{get:function(){return this.view.getUint16(22,!0)},set:function(t){this.view.setUint16(22,t,!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"relocationTableAddress",{get:function(){return this.view.getUint16(24,!0)},set:function(t){this.view.setUint16(24,t,!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"overlayNum",{get:function(){return this.view.getUint16(26,!0)},set:function(t){this.view.setUint16(26,t,!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"oemId",{get:function(){return this.view.getUint16(36,!0)},set:function(t){this.view.setUint16(36,t,!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"oemInfo",{get:function(){return this.view.getUint16(38,!0)},set:function(t){this.view.setUint16(38,t,!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"newHeaderAddress",{get:function(){return this.view.getUint32(60,!0)},set:function(t){this.view.setUint32(60,t,!0)},enumerable:!1,configurable:!0}),e.size=64,e.DEFAULT_MAGIC=23117,e}(R),X=(s=function(t,e){return(s=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}s(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),J=function(t){function e(e){return t.call(this,e)||this}return X(e,t),e.from=function(t,n){return void 0===n&&(n=0),new e(new DataView(t,n,20))},Object.defineProperty(e.prototype,"machine",{get:function(){return this.view.getUint16(0,!0)},set:function(t){this.view.setUint16(0,t,!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"numberOfSections",{get:function(){return this.view.getUint16(2,!0)},set:function(t){this.view.setUint16(2,t,!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"timeDateStamp",{get:function(){return this.view.getUint32(4,!0)},set:function(t){this.view.setUint32(4,t,!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"pointerToSymbolTable",{get:function(){return this.view.getUint32(8,!0)},set:function(t){this.view.setUint32(8,t,!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"numberOfSymbols",{get:function(){return this.view.getUint32(12,!0)},set:function(t){this.view.setUint32(12,t,!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"sizeOfOptionalHeader",{get:function(){return this.view.getUint16(16,!0)},set:function(t){this.view.setUint16(16,t,!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"characteristics",{get:function(){return this.view.getUint16(18,!0)},set:function(t){this.view.setUint16(18,t,!0)},enumerable:!1,configurable:!0}),e.size=20,e}(R),Q=(u=function(t,e){return(u=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}u(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),Y=function(t){function e(e){return t.call(this,e)||this}return Q(e,t),e.from=function(t,n){return void 0===n&&(n=0),new e(new DataView(t,n,96))},Object.defineProperty(e.prototype,"magic",{get:function(){return this.view.getUint16(0,!0)},set:function(t){this.view.setUint16(0,t,!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"majorLinkerVersion",{get:function(){return this.view.getUint8(2)},set:function(t){this.view.setUint8(2,t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"minorLinkerVersion",{get:function(){return this.view.getUint8(3)},set:function(t){this.view.setUint8(3,t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"sizeOfCode",{get:function(){return this.view.getUint32(4,!0)},set:function(t){this.view.setUint32(4,t,!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"sizeOfInitializedData",{get:function(){return this.view.getUint32(8,!0)},set:function(t){this.view.setUint32(8,t,!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"sizeOfUninitializedData",{get:function(){return this.view.getUint32(12,!0)},set:function(t){this.view.setUint32(12,t,!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"addressOfEntryPoint",{get:function(){return this.view.getUint32(16,!0)},set:function(t){this.view.setUint32(16,t,!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"baseOfCode",{get:function(){return this.view.getUint32(20,!0)},set:function(t){this.view.setUint32(20,t,!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"baseOfData",{get:function(){return this.view.getUint32(24,!0)},set:function(t){this.view.setUint32(24,t,!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"imageBase",{get:function(){return this.view.getUint32(28,!0)},set:function(t){this.view.setUint32(28,t,!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"sectionAlignment",{get:function(){return this.view.getUint32(32,!0)},set:function(t){this.view.setUint32(32,t,!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"fileAlignment",{get:function(){return this.view.getUint32(36,!0)},set:function(t){this.view.setUint32(36,t,!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"majorOperatingSystemVersion",{get:function(){return this.view.getUint16(40,!0)},set:function(t){this.view.setUint16(40,t,!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"minorOperatingSystemVersion",{get:function(){return this.view.getUint16(42,!0)},set:function(t){this.view.setUint16(42,t,!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"majorImageVersion",{get:function(){return this.view.getUint16(44,!0)},set:function(t){this.view.setUint16(44,t,!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"minorImageVersion",{get:function(){return this.view.getUint16(46,!0)},set:function(t){this.view.setUint16(46,t,!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"majorSubsystemVersion",{get:function(){return this.view.getUint16(48,!0)},set:function(t){this.view.setUint16(48,t,!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"minorSubsystemVersion",{get:function(){return this.view.getUint16(50,!0)},set:function(t){this.view.setUint16(50,t,!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"win32VersionValue",{get:function(){return this.view.getUint32(52,!0)},set:function(t){this.view.setUint32(52,t,!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"sizeOfImage",{get:function(){return this.view.getUint32(56,!0)},set:function(t){this.view.setUint32(56,t,!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"sizeOfHeaders",{get:function(){return this.view.getUint32(60,!0)},set:function(t){this.view.setUint32(60,t,!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"checkSum",{get:function(){return this.view.getUint32(64,!0)},set:function(t){this.view.setUint32(64,t,!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"subsystem",{get:function(){return this.view.getUint16(68,!0)},set:function(t){this.view.setUint16(68,t,!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"dllCharacteristics",{get:function(){return this.view.getUint16(70,!0)},set:function(t){this.view.setUint16(70,t,!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"sizeOfStackReserve",{get:function(){return this.view.getUint32(72,!0)},set:function(t){this.view.setUint32(72,t,!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"sizeOfStackCommit",{get:function(){return this.view.getUint32(76,!0)},set:function(t){this.view.setUint32(76,t,!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"sizeOfHeapReserve",{get:function(){return this.view.getUint32(80,!0)},set:function(t){this.view.setUint32(80,t,!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"sizeOfHeapCommit",{get:function(){return this.view.getUint32(84,!0)},set:function(t){this.view.setUint32(84,t,!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"loaderFlags",{get:function(){return this.view.getUint32(88,!0)},set:function(t){this.view.setUint32(88,t,!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"numberOfRvaAndSizes",{get:function(){return this.view.getUint32(92,!0)},set:function(t){this.view.setUint32(92,t,!0)},enumerable:!1,configurable:!0}),e.size=96,e.DEFAULT_MAGIC=267,e}(R),Z=(f=function(t,e){return(f=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}f(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});function $(t,e){return 4294967296*t.getUint32(e+4,!0)+t.getUint32(e,!0)}function tt(t,e,n){t.setUint32(e,4294967295&n,!0),t.setUint32(e+4,Math.floor(n/4294967296),!0)}function te(t,e){if("undefined"==typeof BigInt)throw Error("BigInt not supported");return BigInt(4294967296)*BigInt(t.getUint32(e+4,!0))+BigInt(t.getUint32(e,!0))}function tn(t,e,n){if("undefined"==typeof BigInt)throw Error("BigInt not supported");t.setUint32(e,Number(n&BigInt(4294967295)),!0),t.setUint32(e+4,Math.floor(Number(n/BigInt(4294967296)&BigInt(4294967295))),!0)}var ti=function(t){function e(e){return t.call(this,e)||this}return Z(e,t),e.from=function(t,n){return void 0===n&&(n=0),new e(new DataView(t,n,112))},Object.defineProperty(e.prototype,"magic",{get:function(){return this.view.getUint16(0,!0)},set:function(t){this.view.setUint16(0,t,!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"majorLinkerVersion",{get:function(){return this.view.getUint8(2)},set:function(t){this.view.setUint8(2,t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"minorLinkerVersion",{get:function(){return this.view.getUint8(3)},set:function(t){this.view.setUint8(3,t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"sizeOfCode",{get:function(){return this.view.getUint32(4,!0)},set:function(t){this.view.setUint32(4,t,!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"sizeOfInitializedData",{get:function(){return this.view.getUint32(8,!0)},set:function(t){this.view.setUint32(8,t,!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"sizeOfUninitializedData",{get:function(){return this.view.getUint32(12,!0)},set:function(t){this.view.setUint32(12,t,!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"addressOfEntryPoint",{get:function(){return this.view.getUint32(16,!0)},set:function(t){this.view.setUint32(16,t,!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"baseOfCode",{get:function(){return this.view.getUint32(20,!0)},set:function(t){this.view.setUint32(20,t,!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"imageBase",{get:function(){return $(this.view,24)},set:function(t){tt(this.view,24,t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"imageBaseBigInt",{get:function(){return te(this.view,24)},set:function(t){tn(this.view,24,t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"sectionAlignment",{get:function(){return this.view.getUint32(32,!0)},set:function(t){this.view.setUint32(32,t,!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"fileAlignment",{get:function(){return this.view.getUint32(36,!0)},set:function(t){this.view.setUint32(36,t,!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"majorOperatingSystemVersion",{get:function(){return this.view.getUint16(40,!0)},set:function(t){this.view.setUint16(40,t,!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"minorOperatingSystemVersion",{get:function(){return this.view.getUint16(42,!0)},set:function(t){this.view.setUint16(42,t,!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"majorImageVersion",{get:function(){return this.view.getUint16(44,!0)},set:function(t){this.view.setUint16(44,t,!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"minorImageVersion",{get:function(){return this.view.getUint16(46,!0)},set:function(t){this.view.setUint16(46,t,!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"majorSubsystemVersion",{get:function(){return this.view.getUint16(48,!0)},set:function(t){this.view.setUint16(48,t,!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"minorSubsystemVersion",{get:function(){return this.view.getUint16(50,!0)},set:function(t){this.view.setUint16(50,t,!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"win32VersionValue",{get:function(){return this.view.getUint32(52,!0)},set:function(t){this.view.setUint32(52,t,!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"sizeOfImage",{get:function(){return this.view.getUint32(56,!0)},set:function(t){this.view.setUint32(56,t,!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"sizeOfHeaders",{get:function(){return this.view.getUint32(60,!0)},set:function(t){this.view.setUint32(60,t,!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"checkSum",{get:function(){return this.view.getUint32(64,!0)},set:function(t){this.view.setUint32(64,t,!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"subsystem",{get:function(){return this.view.getUint16(68,!0)},set:function(t){this.view.setUint16(68,t,!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"dllCharacteristics",{get:function(){return this.view.getUint16(70,!0)},set:function(t){this.view.setUint16(70,t,!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"sizeOfStackReserve",{get:function(){return $(this.view,72)},set:function(t){tt(this.view,72,t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"sizeOfStackReserveBigInt",{get:function(){return te(this.view,72)},set:function(t){tn(this.view,72,t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"sizeOfStackCommit",{get:function(){return $(this.view,80)},set:function(t){tt(this.view,80,t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"sizeOfStackCommitBigInt",{get:function(){return te(this.view,80)},set:function(t){tn(this.view,80,t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"sizeOfHeapReserve",{get:function(){return $(this.view,88)},set:function(t){tt(this.view,88,t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"sizeOfHeapReserveBigInt",{get:function(){return te(this.view,88)},set:function(t){tn(this.view,88,t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"sizeOfHeapCommit",{get:function(){return $(this.view,96)},set:function(t){tt(this.view,96,t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"sizeOfHeapCommitBigInt",{get:function(){return te(this.view,96)},set:function(t){tn(this.view,96,t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"loaderFlags",{get:function(){return this.view.getUint32(104,!0)},set:function(t){this.view.setUint32(104,t,!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"numberOfRvaAndSizes",{get:function(){return this.view.getUint32(108,!0)},set:function(t){this.view.setUint32(108,t,!0)},enumerable:!1,configurable:!0}),e.size=112,e.DEFAULT_MAGIC=523,e}(R),tr=(c=function(t,e){return(c=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}c(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),to=function(t){function e(e){return t.call(this,e)||this}return tr(e,t),e.from=function(t,n){void 0===n&&(n=0);var i=B(t,n+J.size,6).getUint16(4,!0),r=4+J.size+L.size;return i===ti.DEFAULT_MAGIC?r+=ti.size:r+=Y.size,new e(B(t,n,r))},e.prototype.isValid=function(){return this.signature===e.DEFAULT_SIGNATURE},e.prototype.is32bit=function(){return this.view.getUint16(J.size+4,!0)===Y.DEFAULT_MAGIC},Object.defineProperty(e.prototype,"signature",{get:function(){return this.view.getUint32(0,!0)},set:function(t){this.view.setUint32(0,t,!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"fileHeader",{get:function(){return J.from(this.view.buffer,this.view.byteOffset+4)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"optionalHeader",{get:function(){var t=J.size+4;return this.view.getUint16(t,!0)===ti.DEFAULT_MAGIC?ti.from(this.view.buffer,this.view.byteOffset+t):Y.from(this.view.buffer,this.view.byteOffset+t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"optionalHeaderDataDirectory",{get:function(){return L.from(this.view.buffer,this.view.byteOffset+this.getDataDirectoryOffset())},enumerable:!1,configurable:!0}),e.prototype.getDataDirectoryOffset=function(){var t=J.size+4;return this.view.getUint16(t,!0)===ti.DEFAULT_MAGIC?t+=ti.size:t+=Y.size,t},e.prototype.getSectionHeaderOffset=function(){return this.getDataDirectoryOffset()+L.size},e.DEFAULT_SIGNATURE=17744,e}(R),ta=(l=function(t,e){return(l=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}l(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),ts=function(t){function e(e,n){var i=t.call(this,e)||this;return i.length=n,i}return ta(e,t),e.from=function(t,n,i){return void 0===i&&(i=0),new e(new DataView(t,i,40*n),n)},e.prototype.get=function(t){return{name:function(t,e,n){for(var i=0,r=0;r<8&&0!==t.getUint8(e+r);++r)++i;if(void 0!==H)return H.from(t.buffer,t.byteOffset+e,i).toString("utf8");if("undefined"!=typeof decodeURIComponent){for(var o="",r=0;r<i;++r){var a=t.getUint8(e+r);a<16?o+="%0"+a.toString(16):o+="%"+a.toString(16)}return decodeURIComponent(o)}for(var o="",r=0;r<i;++r){var a=t.getUint8(e+r);o+=String.fromCharCode(a)}return o}(this.view,40*t,0),virtualSize:this.view.getUint32(8+40*t,!0),virtualAddress:this.view.getUint32(12+40*t,!0),sizeOfRawData:this.view.getUint32(16+40*t,!0),pointerToRawData:this.view.getUint32(20+40*t,!0),pointerToRelocations:this.view.getUint32(24+40*t,!0),pointerToLineNumbers:this.view.getUint32(28+40*t,!0),numberOfRelocations:this.view.getUint16(32+40*t,!0),numberOfLineNumbers:this.view.getUint16(34+40*t,!0),characteristics:this.view.getUint32(36+40*t,!0)}},e.prototype.set=function(t,e){(function(t,e,n,i){if(void 0!==H){var r=new Uint8Array(t.buffer,t.byteOffset+e,8);r.set(new Uint8Array(8)),r.set(H.from(i,"utf8").subarray(0,8))}else if("undefined"!=typeof encodeURIComponent)for(var o=encodeURIComponent(i),a=0,s=0;a<n;++a)if(s>=o.length)t.setUint8(a+e,0);else{var u=o.charCodeAt(s);if(37===u){var f=parseInt(o.substr(s+1,2),16);"number"!=typeof f||isNaN(f)?t.setUint8(a+e,0):t.setUint8(a+e,f),s+=3}else t.setUint8(a+e,u)}else for(var a=0,s=0;a<n;++a)if(s>=i.length)t.setUint8(a+e,0);else{var u=i.charCodeAt(s);t.setUint8(a+e,255&u)}})(this.view,40*t,8,e.name),this.view.setUint32(8+40*t,e.virtualSize,!0),this.view.setUint32(12+40*t,e.virtualAddress,!0),this.view.setUint32(16+40*t,e.sizeOfRawData,!0),this.view.setUint32(20+40*t,e.pointerToRawData,!0),this.view.setUint32(24+40*t,e.pointerToRelocations,!0),this.view.setUint32(28+40*t,e.pointerToLineNumbers,!0),this.view.setUint16(32+40*t,e.numberOfRelocations,!0),this.view.setUint16(34+40*t,e.numberOfLineNumbers,!0),this.view.setUint32(36+40*t,e.characteristics,!0)},e.itemSize=40,e}(V),tu=new Uint8Array([14,31,186,14,0,180,9,205,33,184,1,76,205,33,68,79,83,32,109,111,100,101,32,110,111,116,32,115,117,112,112,111,114,116,101,100,46,13,13,10,36,0,0,0,0,0,0,0]),tf=N(q.size+tu.length,128),tc=function(){function t(t,e,n){this._headers=t,this._sections=e,this._ex=n;var i=q.from(t),r=to.from(t,i.newHeaderAddress);this._dh=i,this._nh=r,this._dda=r.optionalHeaderDataDirectory,e.sort(function(t,e){var n=t.info.pointerToRawData,i=t.info.pointerToRawData;if(n!==i)return n-i;var r=t.info.virtualAddress,o=e.info.virtualAddress;return r===o?t.info.virtualSize-e.info.virtualSize:r-o})}return t.createEmpty=function(t,e){var n,i,r,o,a,s,u,f,c,l;return void 0===t&&(t=!1),void 0===e&&(e=!0),this.from((n=t,i=e,a=o=new ArrayBuffer(r=N(tf+(4+J.size+(n?Y.size:ti.size)+L.size),512)),(s=q.from(a)).magic=q.DEFAULT_MAGIC,s.lastPageSize=tf%512,s.pages=Math.ceil(tf/512),s.relocations=0,s.headerSizeInParagraph=Math.ceil(q.size/16),s.minAllocParagraphs=0,s.maxAllocParagraphs=65535,s.initialSS=0,s.initialSP=128,s.relocationTableAddress=q.size,s.newHeaderAddress=tf,F(a,q.size,tu,0,tu.length),"buffer"in o?(u=o.buffer,f=o.byteOffset+tf):(u=o,f=tf),new DataView(u,f).setUint32(0,to.DEFAULT_SIGNATURE,!0),(c=J.from(u,f+4)).machine=n?332:34404,c.numberOfSections=0,c.timeDateStamp=0,c.pointerToSymbolTable=0,c.numberOfSymbols=0,c.sizeOfOptionalHeader=(n?Y.size:ti.size)+L.size,c.characteristics=i?8450:258,(l=(n?Y:ti).from(u,f+4+J.size)).magic=n?Y.DEFAULT_MAGIC:ti.DEFAULT_MAGIC,l.sizeOfCode=0,l.sizeOfInitializedData=0,l.sizeOfUninitializedData=0,l.addressOfEntryPoint=0,l.baseOfCode=4096,l.imageBase=n?16777216:6442450944,l.sectionAlignment=4096,l.fileAlignment=512,l.majorOperatingSystemVersion=6,l.minorOperatingSystemVersion=0,l.majorSubsystemVersion=6,l.minorSubsystemVersion=0,l.sizeOfHeaders=N(r,l.fileAlignment),l.subsystem=2,l.dllCharacteristics=(n?0:32)+64+256,l.sizeOfStackReserve=1048576,l.sizeOfStackCommit=4096,l.sizeOfHeapReserve=1048576,l.sizeOfHeapCommit=4096,l.numberOfRvaAndSizes=L.size/L.itemSize,o))},t.from=function(e,n){var i=q.from(e),r=to.from(e,i.newHeaderAddress);if(!i.isValid()||!r.isValid())throw TypeError("Invalid binary format");if(r.fileHeader.numberOfSymbols>0)throw Error("Binary with symbols is not supported now");var o=r.optionalHeader.fileAlignment,a=r.optionalHeaderDataDirectory.get(x.Certificate);if(a.size>0&&!(null==n?void 0:n.ignoreCert))throw Error("Parsing signed executable binary is not allowed by default.");var s=i.newHeaderAddress+r.getSectionHeaderOffset(),u=r.fileHeader.numberOfSections,f=[],c=G(e,s,u*ts.itemSize),l=ts.from(c,u,0),h=N(s+u*ts.itemSize,o);l.forEach(function(t){if(t.pointerToRawData&&t.sizeOfRawData){var n=G(e,t.pointerToRawData,t.sizeOfRawData);f.push({info:t,data:n});var i=N(t.pointerToRawData+t.sizeOfRawData,o);i>h&&(h=i)}else t.pointerToRawData=0,t.sizeOfRawData=0,f.push({info:t,data:null})});var p=G(e,0,s),g=null,d=e.byteLength;return a.size>0&&(d=a.virtualAddress),h<d&&(g=G(e,h,d-h)),new t(p,f,g)},t.prototype.is32bit=function(){return this._nh.is32bit()},t.prototype.getTotalHeaderSize=function(){return this._headers.byteLength},Object.defineProperty(t.prototype,"dosHeader",{get:function(){return this._dh},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"newHeader",{get:function(){return this._nh},enumerable:!1,configurable:!0}),t.prototype.getRawHeader=function(){return this._headers},t.prototype.getImageBase=function(){return this._nh.optionalHeader.imageBase},t.prototype.getFileAlignment=function(){return this._nh.optionalHeader.fileAlignment},t.prototype.getSectionAlignment=function(){return this._nh.optionalHeader.sectionAlignment},t.prototype.getAllSections=function(){return this._sections},t.prototype.getSectionByEntry=function(t){var e=this._dda.get(t),n=this._sections.filter(function(t){var n=t.info.virtualAddress+t.info.virtualSize;return e.virtualAddress>=t.info.virtualAddress&&e.virtualAddress<n}).shift();return void 0!==n?n:null},t.prototype.setSectionByEntry=function(t,e){var n=e?{data:e.data,info:e.info}:null,i=this._dda.get(t),r=i.size>0;if(n){var o=n.data?n.data.byteLength:0,a=this._nh.optionalHeader.fileAlignment,s=this._nh.optionalHeader.sectionAlignment,u=n.data?N(o,a):0,f=n.data?N(n.info.virtualSize,s):0;if(n.info.sizeOfRawData<u?n.info.sizeOfRawData=u:u=n.info.sizeOfRawData,r)this.replaceSectionImpl(i.virtualAddress,n.info,n.data);else{var c=0,l=N(this._headers.byteLength,a);this._sections.forEach(function(t){t.info.pointerToRawData&&l<=t.info.pointerToRawData&&(l=t.info.pointerToRawData+t.info.sizeOfRawData),c<=t.info.virtualAddress&&(c=t.info.virtualAddress+t.info.virtualSize)}),u||(l=0),c||(c=this.newHeader.optionalHeader.baseOfCode),c=N(c,s),n.info.pointerToRawData=l,n.info.virtualAddress=c,this._dda.set(t,{size:o,virtualAddress:c}),this._sections.push(n),this._nh.fileHeader.numberOfSections=this._sections.length,this._nh.optionalHeader.sizeOfImage=N(c+f,this._nh.optionalHeader.sectionAlignment)}}else if(r){this._dda.set(t,{size:0,virtualAddress:0});for(var h=this._sections.length,p=0;p<h;++p){var g=this._sections[p],d=g.info.virtualAddress,v=d+g.info.virtualSize;if(i.virtualAddress>=d&&i.virtualAddress<v){this._sections.splice(p,1),this._nh.fileHeader.numberOfSections=this._sections.length;break}}}},t.prototype.getExtraData=function(){return this._ex},t.prototype.setExtraData=function(t){null===t?this._ex=null:this._ex=W(t)},t.prototype.generate=function(t){var e=this._dh,n=this._nh,i=e.newHeaderAddress+n.getSectionHeaderOffset(),r=i;r+=this._sections.length*ts.itemSize;var o=n.optionalHeader.fileAlignment;r=N(r,o),this._sections.forEach(function(t){if(t.info.pointerToRawData){var e=t.info.pointerToRawData+t.info.sizeOfRawData;r<e&&(r=N(r=e,o))}});var a=r;null!==this._ex&&(r+=this._ex.byteLength),"number"==typeof t&&(r+=t);var s=new ArrayBuffer(r),u=new Uint8Array(s);u.set(new Uint8Array(this._headers,0,i)),L.from(s,e.newHeaderAddress+n.getDataDirectoryOffset()).set(x.Certificate,{size:0,virtualAddress:0});var f=ts.from(s,this._sections.length,i);return this._sections.forEach(function(t,e){t.data||(t.info.pointerToRawData=0,t.info.sizeOfRawData=0),f.set(e,t.info),t.data&&t.info.pointerToRawData&&u.set(new Uint8Array(t.data),t.info.pointerToRawData)}),null!==this._ex&&u.set(new Uint8Array(this._ex),a),0!==n.optionalHeader.checkSum&&M(s,!0),s},t.prototype.rearrangeSections=function(t,e,n,i){if(e||i){for(var r=this._nh,o=r.optionalHeader.sectionAlignment,a=this._dda,s=this._sections.length,u=0,f=0;f<s;++f){var c=this._sections[f],l=c.info.virtualAddress;if(i&&l>=n){var h=a.findIndexByVirtualAddress(l);l+=i,null!==h&&a.set(h,{virtualAddress:l,size:c.info.virtualSize}),c.info.virtualAddress=l}var p=c.info.pointerToRawData;e&&p>=t&&(c.info.pointerToRawData=p+e),u=N(c.info.virtualAddress+c.info.virtualSize,o)}r.optionalHeader.sizeOfImage=u}},t.prototype.replaceSectionImpl=function(t,e,n){for(var i=this._sections.length,r=0;r<i;++r){var o=this._sections[r];if(o.info.virtualAddress===t){var a=this._nh.optionalHeader.sectionAlignment,s=o.info.pointerToRawData,u=s+o.info.sizeOfRawData,f=t+N(o.info.virtualSize,a);o.info=k(e),o.info.virtualAddress=t,o.info.pointerToRawData=s,o.data=n;var c=s+e.sizeOfRawData,l=t+N(e.virtualSize,a);this.rearrangeSections(u,c-u,f,l-f);var h=this._dda,p=h.findIndexByVirtualAddress(t);null!==p&&h.set(p,{virtualAddress:t,size:e.virtualSize});break}}},t}();function tl(t,e){var n=t.getUint16(e,!0),i="";e+=2;for(var r=0;r<n;++r)i+=String.fromCharCode(t.getUint16(e,!0)),e+=2;return i}function th(t,e,n,i,r){var o=i,a={name:n,languageTable:i,characteristics:t.getUint32(o,!0),dateTime:t.getUint32(o+4,!0),majorVersion:t.getUint16(o+8,!0),minorVersion:t.getUint16(o+10,!0)},s=t.getUint16(o+12,!0),u=t.getUint16(o+14,!0);o+=16;for(var f=0;f<s;++f){var c=2147483647&t.getUint32(o,!0),l=t.getUint32(o+4,!0);if((2147483648&l)!=0){o+=8;continue}r(e,a,{lang:tl(t,c),dataOffset:l}),o+=8}for(var f=0;f<u;++f){var h=2147483647&t.getUint32(o,!0),l=t.getUint32(o+4,!0);if((2147483648&l)!=0){o+=8;continue}r(e,a,{lang:h,dataOffset:l}),o+=8}}function tp(t,e,n,i){var r=n,o={type:e,nameTable:n,characteristics:t.getUint32(r,!0),dateTime:t.getUint32(r+4,!0),majorVersion:t.getUint16(r+8,!0),minorVersion:t.getUint16(r+10,!0)},a=t.getUint16(r+12,!0),s=t.getUint16(r+14,!0);r+=16;for(var u=0;u<a;++u){var f=2147483647&t.getUint32(r,!0),c=t.getUint32(r+4,!0);if(!(2147483648&c)){r+=8;continue}c&=2147483647;var l=tl(t,f);th(t,o,l,c,i),r+=8}for(var u=0;u<s;++u){var h=2147483647&t.getUint32(r,!0),c=t.getUint32(r+4,!0);if(!(2147483648&c)){r+=8;continue}th(t,o,h,c&=2147483647,i),r+=8}}function tg(t,e,n){var i={},r={};n.forEach(function(t){"string"==typeof t.lang?(i[t.lang]=t,e.push(t.lang)):r[t.lang]=t});var o=Object.keys(i);o.sort().forEach(function(e){t.s.push(i[e])});var a=Object.keys(r);return a.map(function(t){return Number(t)}).sort(function(t,e){return t-e}).forEach(function(e){t.n.push(r[e])}),16+8*(o.length+a.length)}function td(t,e,n){var i={},r={};return n.forEach(function(t){var n,o;if("string"==typeof t.id){var a=null!==(n=i[t.id])&&void 0!==n?n:i[t.id]=[];e.push(t.id),a.push(t)}else{var a=null!==(o=r[t.id])&&void 0!==o?o:r[t.id]=[];a.push(t)}}),16+Object.keys(i).sort().map(function(n){var r={id:n,s:[],n:[]};return t.s.push(r),tg(r,e,i[n])}).reduce(function(t,e){return t+8+e},0)+Object.keys(r).map(function(t){return Number(t)}).sort(function(t,e){return t-e}).map(function(n){var i={id:n,s:[],n:[]};return t.n.push(i),tg(i,e,r[n])}).reduce(function(t,e){return t+8+e},0)}function tv(t){var e=t.length;return e>65535?65535:e}function ty(t,e){for(var n=e.length,i=0;i<n;++i){var r=e[i];if(r.text===t)return r.offset}throw Error("Unexpected")}function tb(t,e,n,i){return t.setUint32(e,0,!0),t.setUint32(e+4,0,!0),t.setUint32(e+8,0,!0),t.setUint16(e+12,i.s.length,!0),t.setUint16(e+14,i.n.length,!0),e+=16,i.s.forEach(function(i){var r=ty(i.lang,n);t.setUint32(e,r,!0),t.setUint32(e+4,i.offset,!0),e+=8}),i.n.forEach(function(n){t.setUint32(e,n.lang,!0),t.setUint32(e+4,n.offset,!0),e+=8}),e}function tw(t,e,n,i,r){return t.setUint32(e,0,!0),t.setUint32(e+4,0,!0),t.setUint32(e+8,0,!0),t.setUint16(e+12,r.s.length,!0),t.setUint16(e+14,r.n.length,!0),e+=16,r.s.forEach(function(e){e.offset=n,n=tb(t,n,i,e)}),r.n.forEach(function(e){e.offset=n,n=tb(t,n,i,e)}),r.s.forEach(function(n){var r=ty(n.id,i);t.setUint32(e,r+2147483648,!0),t.setUint32(e+4,n.offset+2147483648,!0),e+=8}),r.n.forEach(function(n){t.setUint32(e,n.id,!0),t.setUint32(e+4,n.offset+2147483648,!0),e+=8}),n}var tm=function(){function t(){this.dateTime=0,this.majorVersion=0,this.minorVersion=0,this.entries=[],this.sectionDataHeader=null,this.originalSize=0}return t.prototype.parse=function(t,e){if(t.data){var n=new DataView(t.data);this.dateTime=n.getUint32(4,!0),this.majorVersion=n.getUint16(8,!0),this.minorVersion=n.getUint16(10,!0);for(var i=n.getUint16(12,!0),r=n.getUint16(14,!0),o=16,a=[],s=function(i,r,o){var s=n.getUint32(o.dataOffset,!0)-t.info.virtualAddress,u=n.getUint32(o.dataOffset+4,!0),f=n.getUint32(o.dataOffset+8,!0);if(s>=0){var c=new Uint8Array(u);c.set(new Uint8Array(t.data,s,u)),a.push({type:i.type,id:r.name,lang:o.lang,codepage:f,bin:c.buffer})}else{if(!e)throw Error("Cannot parse resource directory entry; RVA seems to be invalid.");a.push({type:i.type,id:r.name,lang:o.lang,codepage:f,bin:new ArrayBuffer(0),rva:o.dataOffset})}},u=0;u<i;++u){var f=2147483647&n.getUint32(o,!0),c=n.getUint32(o+4,!0);if(!(2147483648&c)){o+=8;continue}c&=2147483647;var l=tl(n,f);tp(n,l,c,s),o+=8}for(var u=0;u<r;++u){var h=2147483647&n.getUint32(o,!0),c=n.getUint32(o+4,!0);if(!(2147483648&c)){o+=8;continue}tp(n,h,c&=2147483647,s),o+=8}this.entries=a,this.originalSize=t.data.byteLength}},t.from=function(e,n){void 0===n&&(n=!1);var i=[].concat(e.getAllSections()).sort(function(t,e){return t.info.virtualAddress-e.info.virtualAddress}),r=e.getSectionByEntry(x.Resource);if(r){for(var o=e.getSectionByEntry(x.BaseRelocation),a=0;a<i.length;++a)if(i[a]===r){for(var s=a+1;s<i.length;++s)if(!o||i[s]!==o)throw Error("After Resource section, sections except for relocation are not supported");break}}var u=new t;return u.sectionDataHeader=r?k(r.info):null,r&&u.parse(r,n),u},t.prototype.replaceResourceEntry=function(t){for(var e=this.entries.length,n=0;n<e;++n){var i=this.entries[n];if(i.type===t.type&&i.id===t.id&&i.lang===t.lang){this.entries[n]=t;return}}this.entries.push(t)},t.prototype.getResourceEntriesAsString=function(t,e){return this.entries.filter(function(n){return n.type===t&&n.id===e}).map(function(t){return[t.lang,function(t){if("undefined"!=typeof TextDecoder)return new TextDecoder().decode(t);if(void 0!==H)return("buffer"in t?H.from(t.buffer,t.byteOffset,t.byteLength):H.from(t)).toString("utf8");var e=void 0;if(e="buffer"in t?new Uint8Array(t.buffer,t.byteOffset,t.byteLength):new Uint8Array(t),"undefined"!=typeof decodeURIComponent){for(var n="",i=0;i<e.length;++i){var r=e[i];r<16?n+="%0"+r.toString(16):n+="%"+r.toString(16)}return decodeURIComponent(n)}for(var n="",i=0;i<e.length;++i){var r=e[i];n+=String.fromCharCode(r)}return n}(t.bin)]})},t.prototype.replaceResourceEntryFromString=function(t,e,n,i){var r={type:t,id:e,lang:n,codepage:1200,bin:function(t){if("undefined"!=typeof TextEncoder)return W(new TextEncoder().encode(t));if(void 0!==H)return W(H.from(t,"utf8"));if("undefined"!=typeof encodeURIComponent){for(var e=encodeURIComponent(t),n=0,i=0;i<e.length;++n){var r=e.charCodeAt(i);37===r?i+=3:++i}for(var o=new ArrayBuffer(n),a=new Uint8Array(o),i=0,s=0;i<e.length;++s){var r=e.charCodeAt(i);if(37===r){var u=parseInt(e.substring(i+1,i+3),16);a[s]=u,i+=3}else a[s]=r,++i}return o}var o=new ArrayBuffer(t.length);return new Uint8Array(o).set([].map.call(t,function(t){return t.charCodeAt(0)})),o}(i)};this.replaceResourceEntry(r)},t.prototype.removeResourceEntry=function(t,e,n){this.entries=this.entries.filter(function(i){return!(i.type===t&&i.id===e&&(void 0===n||i.lang===n))})},t.prototype.generateResourceData=function(t,e,n,i){void 0===n&&(n=!1),void 0===i&&(i=!1);var r,o,a,s,u,f,c=[],l=[],h=[],p=(r=h,o=this.entries,a={},s={},o.forEach(function(t){var e,n;if("string"==typeof t.type){var i=null!==(e=a[t.type])&&void 0!==e?e:a[t.type]=[];r.push(t.type),i.push(t)}else{var i=null!==(n=s[t.type])&&void 0!==n?n:s[t.type]=[];i.push(t)}}),16+Object.keys(a).sort().map(function(t){var e={type:t,s:[],n:[]};return c.push(e),td(e,r,a[t])}).reduce(function(t,e){return t+8+e},0)+Object.keys(s).map(function(t){return Number(t)}).sort(function(t,e){return t-e}).map(function(t){var e={type:t,s:[],n:[]};return l.push(e),td(e,r,s[t])}).reduce(function(t,e){return t+8+e},0));h=h.reduce(function(t,e){return t.indexOf(e)>=0?t:t.concat(e)},[]);var g=p;p+=h.reduce(function(t,e){return t+2+2*tv(e)},0);var d=p=N(p,8),v=p=this.entries.reduce(function(t,e){return e.offset=t,t+16},d);p=this.entries.reduce(function(t,e){return N(t,8)+e.bin.byteLength},v);var y=N(p,e),b=N(this.originalSize,e);if(n&&y>b)throw Error("New resource data is larger than original");!i&&y<b&&(y=b);var w=new ArrayBuffer(y),m=new DataView(w),U=d,O=t+v;this.entries.forEach(function(t){var e=t.bin.byteLength;void 0!==t.rva?m.setUint32(U,t.rva,!0):(O=N(O,8),m.setUint32(U,O,!0),O+=e),m.setUint32(U+4,e,!0),m.setUint32(U+8,t.codepage,!0),m.setUint32(U+12,0,!0),U+=16}),U=v,this.entries.forEach(function(t){var e=t.bin.byteLength;F(w,U,t.bin,0,e),U+=N(e,8)});var A=[];if(U=g,h.forEach(function(t){A.push({offset:U,text:t}),U=function(t,e,n){var i=tv(n);t.setUint16(e,i,!0),e+=2;for(var r=0;r<i;++r)t.setUint16(e,n.charCodeAt(r),!0),e+=2;return e}(m,U,t)}),u=0,m.setUint32(u,0,!0),m.setUint32(u+4,0,!0),m.setUint32(u+8,0,!0),m.setUint16(u+12,c.length,!0),m.setUint16(u+14,l.length,!0),f=(u+=16)+8*(c.length+l.length),c.forEach(function(t){t.offset=f,f+=16+8*(t.s.length+t.n.length)}),l.forEach(function(t){t.offset=f,f+=16+8*(t.s.length+t.n.length)}),c.forEach(function(t){var e=ty(t.type,A);m.setUint32(u,e+2147483648,!0),m.setUint32(u+4,t.offset+2147483648,!0),u+=8,f=tw(m,t.offset,f,A,t)}),l.forEach(function(t){m.setUint32(u,t.type,!0),m.setUint32(u+4,t.offset+2147483648,!0),u+=8,f=tw(m,t.offset,f,A,t)}),y>p)for(var D=p,S=0;D<y;++D,++S)8===S&&(S=0),m.setUint8(D,"PADDINGX".charCodeAt(S));return{bin:w,rawSize:p,dataOffset:v,descEntryOffset:d,descEntryCount:this.entries.length}},t.prototype.outputResource=function(t,e,n){void 0===e&&(e=!1),void 0===n&&(n=!1);var i,r=t.getFileAlignment();i=this.sectionDataHeader?{data:null,info:k(this.sectionDataHeader)}:{data:null,info:{name:".rsrc",virtualSize:0,virtualAddress:0,sizeOfRawData:0,pointerToRawData:0,pointerToRelocations:0,pointerToLineNumbers:0,numberOfRelocations:0,numberOfLineNumbers:0,characteristics:1073741888}};var o=this.generateResourceData(0,r,e,n);i.data=o.bin,i.info.sizeOfRawData=o.bin.byteLength,i.info.virtualSize=o.rawSize,t.setSectionByEntry(x.Resource,i);for(var a=t.getSectionByEntry(x.Resource),s=new DataView(a.data),u=o.descEntryOffset,f=a.info.virtualAddress+o.dataOffset,c=0;c<o.descEntryCount;++c){var l=s.getUint32(u+4,!0);f=N(f,8),s.setUint32(u,f,!0),f+=l,u+=16}},t}();function tU(t){return q.from(t)}function tO(t,e){return to.from(t,e.newHeaderAddress)}function tA(t,e,n){return ts.from(t,n.fileHeader.numberOfSections,e.newHeaderAddress+n.byteLength)}function tD(t,e,n,i){for(var r=ts.from(t,n.fileHeader.numberOfSections,e.newHeaderAddress+n.byteLength),o=r.length,a=n.optionalHeaderDataDirectory.get(i).virtualAddress,s=0;s<o;++s){var u=r.get(s),f=u.virtualAddress+u.virtualSize;if(a>=u.virtualAddress&&a<f){var c=u.pointerToRawData;if(!c)return null;return t.slice(c,c+u.sizeOfRawData)}if(a<u.virtualAddress)break}return null}var tS="2.0.2";function tI(t,e,n){if(!("buffer"in t))return new DataView(t,e,n);var i=t.byteOffset,r=t.byteLength;return void 0!==e&&(i+=e,r-=e),void 0!==n&&(r=n),new DataView(t.buffer,i,r)}function tE(t,e){return Math.floor((t+e-1)/e)*e}function t_(t,e,n,i,r){var o="buffer"in t?new Uint8Array(t.buffer,t.byteOffset+(e||0),r):new Uint8Array(t,e,r),a="buffer"in n?new Uint8Array(n.buffer,n.byteOffset+(i||0),r):new Uint8Array(n,i,r);o.set(a)}function tP(t,e,n){var i=new ArrayBuffer(n);return t_(i,0,t,e,n),i}function tj(t,e,n){return e+4<=n?t.getInt32(e,!0):0}function tR(t,e,n){return e<n?t.getUint8(e):0}function tz(t,e,n){return e+2<=n?t.getUint16(e,!0):0}function tC(t,e,n){return e+4<=n?t.getUint32(e,!0):0}function tV(t,e){return tE(Math.abs(t),32)/8*Math.abs(e)}n(48764).Buffer;var tT=function(){function t(t,e,n,i,r){var o=tI(n,i,r),a=o.byteLength,s=o.getUint32(0,!0);s>a&&(s=a);var u=tC(o,20,s),f={width:tj(o,4,s),height:tj(o,8,s),planes:tz(o,12,s),bitCount:tz(o,14,s),compression:tC(o,16,s),sizeImage:u,xPelsPerMeter:tj(o,24,s),yPelsPerMeter:tj(o,28,s),colorUsed:tC(o,32,s),colorImportant:tC(o,36,s),colors:[]},c=40,l=f.colorUsed;if(!l)switch(f.bitCount){case 1:l=2;break;case 4:l=16;break;case 8:l=256}for(var h=0;h<l;++h)f.colors.push({b:tR(o,c,a),g:tR(o,c+1,a),r:tR(o,c+2,a)}),c+=4;this.width=t,this.height=e,this.bitmapInfo=f;var p=tE(f.bitCount*Math.abs(f.width),32)/8,g=Math.abs(f.height)/2,d=u||p*g;this._pixels=tP(o,c,d),c+=d;var v=tV(f.width,g);v+c<=a?this.masks=tP(o,c,v):this.masks=new ArrayBuffer(v)}return Object.defineProperty(t.prototype,"pixels",{get:function(){return this._pixels},set:function(t){this._pixels=t,0!==this.bitmapInfo.sizeImage&&(this.bitmapInfo.sizeImage=t.byteLength)},enumerable:!1,configurable:!0}),t.from=function(e,n,i,r,o){var a,s,u;return"object"==typeof i?(a=e,s=n,u=i):(a=null,s=null,u=e,r=n,o=i),new t(a,s,u,r,o)},t.prototype.isIcon=function(){return!0},t.prototype.isRaw=function(){return!1},t.prototype.generate=function(){var t=this.bitmapInfo,e=Math.abs(t.width),n=tE(t.bitCount*e,32)/8,i=Math.abs(t.height)/2,r=n*i,o=tV(t.width,i),a=t.colors.length,s=new ArrayBuffer(40+4*a+r+o),u=new DataView(s);u.setUint32(0,40,!0),u.setInt32(4,t.width,!0),u.setInt32(8,t.height,!0),u.setUint16(12,t.planes,!0),u.setUint16(14,t.bitCount,!0),u.setUint32(16,t.compression,!0),u.setUint32(20,t.sizeImage,!0),u.setInt32(24,t.xPelsPerMeter,!0),u.setInt32(28,t.yPelsPerMeter,!0),u.setUint32(32,t.colorUsed,!0),u.setUint32(36,t.colorImportant>a?a:t.colorImportant,!0);var f=40;return t.colors.forEach(function(t){u.setUint8(f,t.b),u.setUint8(f+1,t.g),u.setUint8(f+2,t.r),f+=4}),t_(s,f,this.pixels,0,r),t_(s,f+r,this.masks,0,o),s},t}(),tL=function(){function t(t,e,n,i,r,o){this.width=e,this.height=n,this.bitCount=i,"number"!=typeof r?(r=0,o=t.byteLength):"number"!=typeof o&&(o=t.byteLength-r),this.bin=tP(t,r,o)}return t.from=function(e,n,i,r,o,a){return new t(e,n,i,r,o,a)},t.prototype.isIcon=function(){return!1},t.prototype.isRaw=function(){return!0},t}(),tx=function(){function t(t){if(!t){this.icons=[];return}var e=tI(t),n=e.byteLength,i=[];if(1===e.getUint16(2,!0))for(var r=e.getUint16(4,!0),o=6,a=0;a<r;++a){var s=tC(e,o+8,n),u=tC(e,o+12,n),f=tR(e,o,n),c=tR(e,o+1,n),l=tR(e,o+6,n),h=void 0;h=40===e.getUint32(u,!0)?tT.from(f,c,t,u,s):tL.from(t,f||256,c||256,l,u,s),i.push({width:f,height:c,colors:tR(e,o+2,n),planes:tz(e,o+4,n),bitCount:l,data:h}),o+=16}this.icons=i}return t.from=function(e){return new t(e)},t.prototype.generate=function(){var t,e,n,i,r,o;return(e=(t=this.icons).length)>65535&&(e=65535),(r=new DataView(i=new ArrayBuffer((n=t.map(function(t){return t.data.isIcon()?{item:t,bin:t.data.generate(),offset:0}:{item:t,bin:t.data.bin,offset:0}})).reduce(function(t,e){return e.offset=t,t+e.bin.byteLength},6+16*e)))).setUint16(0,0,!0),r.setUint16(2,1,!0),r.setUint16(4,e,!0),o=6,n.forEach(function(t){var e,n,a,s,u,f=t.item;if(f.data.isIcon()){var c=f.data.bitmapInfo;e=void 0!==f.width?f.width:Math.abs(c.width),n=void 0!==f.height?f.height:Math.abs(c.height/2),a=void 0!==f.colors?f.colors:c.colorUsed||c.colors.length,s=void 0!==f.planes?f.planes:c.planes,u=void 0!==f.bitCount?f.bitCount:c.bitCount}else e=void 0!==f.width?f.width:Math.abs(f.data.width),n=void 0!==f.height?f.height:Math.abs(f.data.height),a=void 0!==f.colors?f.colors:0,s=void 0!==f.planes?f.planes:1,u=void 0!==f.bitCount?f.bitCount:f.data.bitCount;var l=t.bin.byteLength;r.setUint8(o,e>=256?0:e),r.setUint8(o+1,n>=256?0:n),r.setUint8(o+2,a>=256?0:a),r.setUint8(o+3,0),r.setUint16(o+4,s,!0),r.setUint16(o+6,u,!0),r.setUint32(o+8,l,!0),r.setUint32(o+12,t.offset,!0),o+=16,t_(i,t.offset,t.bin,0,l)}),i},t}();function tH(t){var e=t.length;e>65535&&(e=65535);var n=new ArrayBuffer(6+14*t.length),i=new DataView(n);i.setUint16(0,0,!0),i.setUint16(2,1,!0),i.setUint16(4,e,!0);var r=6;return t.forEach(function(t){i.setUint8(r,t.width>=256?0:t.width),i.setUint8(r+1,t.height>=256?0:t.height),i.setUint8(r+2,t.colors>=256?0:t.colors),i.setUint8(r+3,0),i.setUint16(r+4,t.planes,!0),i.setUint16(r+6,t.bitCount,!0),i.setUint32(r+8,t.dataSize,!0),i.setUint16(r+12,t.iconID,!0),r+=14}),n}var tk=function(){function t(t){var e=new DataView(t.bin),n=e.byteLength,i=[];if(1===e.getUint16(2,!0))for(var r=e.getUint16(4,!0),o=6,a=0;a<r;++a)i.push({width:tR(e,o,n),height:tR(e,o+1,n),colors:tR(e,o+2,n),planes:tz(e,o+4,n),bitCount:tz(e,o+6,n),dataSize:tC(e,o+8,n),iconID:tz(e,o+12,n)}),o+=14;this.id=t.id,this.lang=t.lang,this.icons=i}return t.fromEntries=function(e){return e.filter(function(t){return 14===t.type}).map(function(e){return new t(e)})},t.prototype.generateEntry=function(){var t=tH(this.icons);return{type:14,id:this.id,lang:this.lang,codepage:0,bin:t}},t.prototype.getIconItemsFromEntries=function(t){var e=this;return t.map(function(t){if(3!==t.type||t.lang!==e.lang)return null;var n=e.icons.filter(function(e){return t.id===e.iconID}).shift();return n?{entry:t,icon:n}:null}).filter(function(t){return!!t}).map(function(t){var e=t.entry.bin;if(40===new DataView(e).getUint32(0,!0))return tT.from(e);var n=t.icon;return tL.from(e,n.width,n.height,n.bitCount)})},t.replaceIconsForResource=function(e,n,i,r){var o,a=e.filter(function(t){return 14===t.type&&t.id===n&&t.lang===i}).shift(),s=r.map(function(t){if(!t.isIcon())return{base:t,bm:{width:t.width,height:t.height,planes:1,bitCount:t.bitCount},bin:t.bin,id:0};var e=t.width,n=t.height;return null===e&&(e=t.bitmapInfo.width),null===n&&(n=t.bitmapInfo.height,null!==t.masks&&(n=Math.floor(n/2))),{base:t,bm:{width:e,height:n,planes:t.bitmapInfo.planes,bitCount:t.bitmapInfo.bitCount},bin:t.generate(),id:0}});if(a)for(var u=e.length-1;u>=0;--u){var f=e[u];null!=f&&3===f.type&&!function(e,n,i){return n.some(function(n){return 14===n.type&&(n.id!==i.id||n.lang!==i.lang)&&new t(n).icons.some(function(t){return t.iconID===e.id})})}(f,e,a)&&e.splice(u,1)}else a={type:14,id:n,lang:i,codepage:0,bin:null},e.push(a);s.forEach(function(t){(null==o?void 0:o.last)?++o.id:o=function(t,e,n){for(var i=n?1:3,r=t.filter(function(t){return t.type===i&&t.lang===e&&"number"==typeof t.id}).map(function(t){return t.id}).sort(function(t,e){return t-e}),o=1,a=0;a<r.length;a++){var s=r[a];if(o<s)return{id:o,last:!1};o===s&&++o}return{id:o,last:!0}}(e,i,!1),e.push({type:3,id:o.id,lang:i,codepage:0,bin:t.bin}),t.id=o.id});var c=tH(s.map(function(t){var e=Math.abs(t.bm.width);e>=256&&(e=0);var n=Math.abs(t.bm.height);n>=256&&(n=0);var i=0;if(t.base.isIcon()){var r=t.base.bitmapInfo;if(!(i=r.colorUsed||r.colors.length))switch(r.bitCount){case 1:i=2;break;case 4:i=16}i>=256&&(i=0)}return{width:e,height:n,colors:i,planes:t.bm.planes,bitCount:t.bm.bitCount,dataSize:t.bin.byteLength,iconID:t.id}}));a.bin=c},t}(),tB=function(){function t(){this.length=16,this._a=[],this._a.length=16;for(var t=0;t<16;++t)this._a[t]=""}return t.fromEntry=function(e,n,i){for(var r=new DataView(e,n,i),o=new t,a=0,s=0;s<16;++s){var u=r.getUint16(a,!0);a+=2;for(var f="",c=0;c<u;++c)f+=String.fromCharCode(r.getUint16(a,!0)),a+=2;o._a[s]=f}return o},t.prototype.get=function(t){var e=this._a[t];return null!=e&&""!==e?e:null},t.prototype.getAll=function(){return this._a.map(function(t){return t||null})},t.prototype.set=function(t,e){this._a[t]="".concat(null!=e?e:"").substr(0,4097)},t.prototype.calcByteLength=function(){for(var t=0,e=0;e<16;++e){var n=this._a[e];t+=2,null!=n&&(t+=2*n.length)}return 16*Math.floor((t+15)/16)},t.prototype.generate=function(t,e){for(var n=new DataView(t,e),i=0,r=0;r<16;++r){var o=this._a[r],a=null==o?0:o.length>4097?4097:o.length;if(n.setUint16(i,a,!0),i+=2,null!=o)for(var s=0;s<a;++s)n.setUint16(i,o.charCodeAt(s),!0),i+=2}return 16*Math.floor((i+15)/16)},t}(),tM=function(){function t(){this.lang=0,this.items=[]}return t.fromEntries=function(e,n){var i=new t;return n.forEach(function(t){6!==t.type||t.lang!==e||"number"!=typeof t.id||t.id<=0||(i.items[t.id-1]=tB.fromEntry(t.bin,0,t.bin.byteLength))}),i.lang=e,i},t.prototype.getAllStrings=function(){return this.items.map(function(t,e){return t.getAll().map(function(t,n){return null!==t&&""!==t?{id:(e<<4)+n,text:t}:null}).filter(function(t){return!!t})}).reduce(function(t,e){return t.concat(e)},[])},t.prototype.getById=function(t){if(t<0)return null;var e,n=this.items[t>>4];return null!==(e=null==n?void 0:n.get(15&t))&&void 0!==e?e:null},t.prototype.setById=function(t,e){if(!(t<0)){var n=t>>4,i=this.items[n];i||(this.items[n]=i=new tB),i.set(15&t,e)}},t.prototype.generateEntries=function(){var t=this;return this.items.map(function(e,n){var i=new ArrayBuffer(e.calcByteLength());return e.generate(i,0),{type:6,id:n+1,lang:t.lang,codepage:1200,bin:i}}).filter(function(t){return!!t})},t.prototype.replaceStringEntriesForExecutable=function(t){for(var e=this.generateEntries(),n=t.entries,i=0;i<n.length;++i){var r=n[i];if(null!=r&&6===r.type&&r.lang===this.lang){for(var o=n.length-1;o>=i;--o){var a=n[o];null!=a&&6===a.type&&a.lang===this.lang&&n.splice(o,1)}var s=n.splice.bind(n,i,0);s.apply(void 0,e);return}}for(var i=0;i<n.length;++i){var r=n[i];if(null!=r&&6===r.type&&r.lang<this.lang){var s=n.splice.bind(n,i+1,0);s.apply(void 0,e);return}}for(var i=n.length-1;i>=0;--i){var r=n[i];if(null!=r&&6===r.type){var s=n.splice.bind(n,i+1,0);s.apply(void 0,e);return}}n.push.apply(n,e)},t}();(h=A||(A={}))[h.Debug=1]="Debug",h[h.Prerelease=2]="Prerelease",h[h.Patched=4]="Patched",h[h.PrivateBuild=8]="PrivateBuild",h[h.InfoInferred=16]="InfoInferred",h[h.SpecialBuild=32]="SpecialBuild";var tN=A;(p=D||(D={}))[p.Unknown=0]="Unknown",p[p._Windows16=1]="_Windows16",p[p._PM16=2]="_PM16",p[p._PM32=3]="_PM32",p[p._Windows32=4]="_Windows32",p[p.DOS=65536]="DOS",p[p.OS2_16=131072]="OS2_16",p[p.OS2_32=196608]="OS2_32",p[p.NT=262144]="NT",p[p.DOS_Windows16=65537]="DOS_Windows16",p[p.DOS_Windows32=65540]="DOS_Windows32",p[p.NT_Windows32=262148]="NT_Windows32",p[p.OS2_16_PM16=131074]="OS2_16_PM16",p[p.OS2_32_PM32=196611]="OS2_32_PM32";var tF=D;(g=S||(S={}))[g.Unknown=0]="Unknown",g[g.Printer=1]="Printer",g[g.Keyboard=2]="Keyboard",g[g.Language=3]="Language",g[g.Display=4]="Display",g[g.Mouse=5]="Mouse",g[g.Network=6]="Network",g[g.System=7]="System",g[g.Installable=8]="Installable",g[g.Sound=9]="Sound",g[g.Comm=10]="Comm",g[g.VersionedPrinter=12]="VersionedPrinter",(d=I||(I={}))[d.Unknown=0]="Unknown",d[d.Raster=1]="Raster",d[d.Vector=2]="Vector",d[d.TrueType=3]="TrueType",(v=E||(E={}))[v.Unknown=0]="Unknown",v[v.App=1]="App",v[v.DLL=2]="DLL",v[v.Driver=3]="Driver",v[v.Font=4]="Font",v[v.VxD=5]="VxD",v[v.StaticLibrary=7]="StaticLibrary";var tG=E;function tW(t,e,n){for(var i="";e+2<=n;){var r=t.getUint16(e,!0);if(!r)break;i+=String.fromCharCode(r),e+=2}return i}function tK(t,e,n){for(var i=0;i<n.length;++i)t.setUint16(e,n.charCodeAt(i),!0),e+=2;return t.setUint16(e,0,!0),e+2}function tq(){return{fileVersionMS:0,fileVersionLS:0,productVersionMS:0,productVersionLS:0,fileFlagsMask:0,fileFlags:0,fileOS:0,fileType:0,fileSubtype:0,fileDateMS:0,fileDateLS:0}}function tX(t,e,n){return isNaN(t)||t<e?e:t>=n?n:Math.floor(t)}function tJ(t,e,n,i,r){var o,a,s,u,f,c;return"string"==typeof t&&(void 0===e||"number"==typeof e)&&void 0===n?(a=(o=t.split(".").map(function(t){return tX(Number(t),0,65535)}).concat(0,0,0))[0],s=o[1],u=o[2],f=o[3],c=e):(a=tX(Number(t),0,65535),s=tX(Number(e),0,65535),u=tX(void 0===n?0:Number(n),0,65535),f=tX(void 0===i?0:Number(i),0,65535),c=r),[a,s,u,f,c]}var tQ=function(){function t(t){if(t){var e=new DataView(t.bin);this.data=function(t,e){var n=t.getUint16(0,!0),i=t.getUint16(2,!0);if(0!==t.getUint16(4,!0)||n<i+40||"VS_VERSION_INFO"!==tW(t,6,n))throw Error("Invalid version data format");var r={lang:e.lang,fixedInfo:tq(),strings:[],translations:[],unknowns:[]},o=38;if(i){var a=tC(t,40,i+=40),s=tC(t,44,i);4277077181===a&&s<=65536&&(r.fixedInfo={fileVersionMS:tC(t,48,i),fileVersionLS:tC(t,52,i),productVersionMS:tC(t,56,i),productVersionLS:tC(t,60,i),fileFlagsMask:tC(t,64,i),fileFlags:tC(t,68,i),fileOS:tC(t,72,i),fileType:tC(t,76,i),fileSubtype:tC(t,80,i),fileDateMS:tC(t,84,i),fileDateLS:tC(t,88,i)}),o=i}for(o=tE(o,4);o<n;){var u=t.getUint16(o,!0),f=o+u;f>n&&(f=n);var c=tW(t,o+6,f);switch(c){case"StringFileInfo":r.strings=r.strings.concat(function(t,e,n){var i=t.getUint16(e+2,!0);e+=36+tE(i,4);for(var r=[];e<n;)!function(){var i=function(t,e,n){var i=t.getUint16(e,!0),r=t.getUint16(e+2,!0);e+i<n&&(n=e+i);var o=tW(t,e+6,n);e+=tE(6+2*(o.length+1),4);var a=parseInt(o,16);if(isNaN(a))throw Error("Invalid StringTable data format");e+=tE(r,4);for(var s={lang:Math.floor(a/65536),codepage:65535&a,values:{}};e<n;){var u=t.getUint16(e,!0),f=t.getUint16(e+2,!0);if(1!==t.getUint16(e+4,!0)){e+=u;continue}var c=e+u;c>n&&(c=n);var l=tW(t,e+6,c),h=(e=tE(e+6+2*(l.length+1),4))+2*f;h>c&&(h=c);var p=tW(t,e,h);e=tE(h,4),s.values[l]=p}return[n,s]}(t,e,n),o=i[1],a=r.filter(function(t){return t.lang===o.lang&&t.codepage===o.codepage});if(0===a.length)r.push(o);else for(var s in o.values){var u=o.values[s];null!=u&&(a[0].values[s]=u)}e=tE(i[0],4)}();return r}(t,o,f));break;case"VarFileInfo":r.translations=r.translations.concat(function(t,e,n){var i=t.getUint16(e+2,!0);e+=32+tE(i,4);for(var r=[];e<n;){var o=t.getUint16(e,!0),a=t.getUint16(e+2,!0);if(0!==t.getUint16(e+4,!0)){e+=tE(o,4);continue}var s=e+o;s>n&&(s=n);var u=tW(t,e+6,s);if(e=tE(e+6+2*(u.length+1),4),"Translation"!==u||a%4!=0){e=tE(s,4);continue}for(var f=0;f<a&&"break"!==function(n){if(e+4>s)return"break";var i=t.getUint16(e,!0),o=t.getUint16(e+2,!0);e+=4,0===r.filter(function(t){return t.lang===i&&t.codepage===o}).length&&r.push({lang:i,codepage:o})}(0);f+=4);e=tE(s,4)}return r}(t,o,f));break;default:r.unknowns.push({name:c,entireBin:tP(t,o,u)})}o+=tE(u,4)}return r}(e,t)}else this.data={lang:0,fixedInfo:tq(),strings:[],translations:[],unknowns:[]}}return t.createEmpty=function(){return new t},t.create=function(e,n,i){"object"==typeof e?(r=e.lang,n=e.fixedInfo,i=e.strings):r=e;var r,o=new t;for(var a in o.data.lang=r,n)if(a in n){var s=n[a];null!=s&&(o.data.fixedInfo[a]=s)}return o.data.strings=i.map(function(t){var e,n;return{lang:t.lang,codepage:t.codepage,values:(n={},Object.keys(e=t.values).forEach(function(t){n[t]=e[t]}),n)}}),o.data.translations=i.map(function(t){return{lang:t.lang,codepage:t.codepage}}),o},t.fromEntries=function(e){return e.filter(function(t){return 16===t.type}).map(function(e){return new t(e)})},Object.defineProperty(t.prototype,"lang",{get:function(){return this.data.lang},set:function(t){this.data.lang=t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"fixedInfo",{get:function(){return this.data.fixedInfo},enumerable:!1,configurable:!0}),t.prototype.getAvailableLanguages=function(){return this.data.translations.slice(0)},t.prototype.replaceAvailableLanguages=function(t){this.data.translations=t.slice(0)},t.prototype.getStringValues=function(t){var e=this.data.strings.filter(function(e){return e.lang===t.lang&&e.codepage===t.codepage}).map(function(t){return t.values});return e.length>0?e[0]:{}},t.prototype.getAllLanguagesForStringValues=function(){return this.data.strings.map(function(t){return{codepage:t.codepage,lang:t.lang}})},t.prototype.setStringValues=function(t,e,n){void 0===n&&(n=!0);var i,r=this.data.strings.filter(function(e){return e.lang===t.lang&&e.codepage===t.codepage});for(var o in 0===r.length?(i={lang:t.lang,codepage:t.codepage,values:{}},this.data.strings.push(i)):i=r[0],e){var a=e[o];null!=a&&(i.values[o]=a)}n&&0===this.data.translations.filter(function(e){return e.lang===t.lang&&e.codepage===t.codepage}).length&&this.data.translations.push({lang:t.lang,codepage:t.codepage})},t.prototype.setStringValue=function(t,e,n,i){var r;void 0===i&&(i=!0),this.setStringValues(t,((r={})[e]=n,r),i)},t.prototype.removeAllStringValues=function(t,e){void 0===e&&(e=!0);for(var n=this.data.strings,i=n.length,r=0;r<i;++r){var o=n[r];if(null!=o&&o.lang===t.lang&&o.codepage===t.codepage){if(n.splice(r,1),e)for(var a=this.data.translations,s=0;s<a.length;s++){var u=a[s];if(null!=u&&u.lang===t.lang&&u.codepage===t.codepage){a.splice(s,1);break}}break}}},t.prototype.removeStringValue=function(t,e,n){void 0===n&&(n=!0);for(var i=this.data.strings,r=i.length,o=0;o<r;++o){var a=i[o];if(null!=a&&a.lang===t.lang&&a.codepage===t.codepage){try{delete a.values[e]}catch(t){}if(n&&0===Object.keys(a.values).length){i.splice(o,1);for(var s=this.data.translations,u=0;u<s.length;u++){var f=s[u];if(null!=f&&f.lang===t.lang&&f.codepage===t.codepage){s.splice(u,1);break}}}break}}},t.prototype.generateResource=function(){var t,e,n,i,r,o,a,s,u,f,c,l,h,p,g,d,v,y,b,w=(e=92+(u=(o=new ArrayBuffer(i=36+(r=(n=(t=this.data).strings).map(function(t){return function(t){var e=24,n=Object.keys(t.values),i=new ArrayBuffer(e=n.reduce(function(e,n){var i=t.values[n];if(null==i)return e;var r=tE(6+2*(n.length+1),4),o=tE(e+r+2*(i.length+1),4);return o>65532?e:o},e)),r=new DataView(i);r.setUint16(0,e,!0),r.setUint16(2,0,!0),r.setUint16(4,1,!0);var o=((65535&t.lang)*65536+(65535&t.codepage)).toString(16).toLowerCase();if(o.length<8){var a=8-o.length;o="00000000".substr(0,a)+o}var s=tE(tK(r,6,o),4);return n.forEach(function(e){var n=t.values[e];if(null!=n){var i=tE(6+2*(e.length+1),4),o=tE(i+2*(n.length+1),4);s+o<=65532&&(r.setUint16(s,o,!0),r.setUint16(s+2,n.length+1,!0),r.setUint16(s+4,1,!0),s=tE(tK(r,s+6,e),4),s=tE(tK(r,s,n),4))}}),i}(t)})).reduce(function(t,e){return t+e.byteLength},0)),(a=new DataView(o)).setUint16(0,i,!0),a.setUint16(2,0,!0),a.setUint16(4,1,!0),s=tE(tK(a,6,"StringFileInfo"),4),r.forEach(function(t){var e=t.byteLength;t_(o,s,t,0,e),s+=e}),o).byteLength)+(d=((p=new DataView(h=new ArrayBuffer(c=32+(32+(l=4*(f=t.translations).length))))).setUint16(0,c,!0),p.setUint16(2,0,!0),p.setUint16(4,1,!0),g=tE(tK(p,6,"VarFileInfo"),4),p.setUint16(g,32+l,!0),p.setUint16(g+2,l,!0),p.setUint16(g+4,0,!0),g=tE(tK(p,g+6,"Translation"),4),f.forEach(function(t){p.setUint16(g,t.lang,!0),p.setUint16(g+2,t.codepage,!0),g+=4}),h).byteLength),(y=new DataView(v=new ArrayBuffer(e=t.unknowns.reduce(function(t,e){return t+tE(e.entireBin.byteLength,4)},e)))).setUint16(0,e,!0),y.setUint16(2,52,!0),y.setUint16(4,0,!0),b=tE(tK(y,6,"VS_VERSION_INFO"),4),y.setUint32(b,4277077181,!0),y.setUint32(b+4,65536,!0),y.setUint32(b+8,t.fixedInfo.fileVersionMS,!0),y.setUint32(b+12,t.fixedInfo.fileVersionLS,!0),y.setUint32(b+16,t.fixedInfo.productVersionMS,!0),y.setUint32(b+20,t.fixedInfo.productVersionLS,!0),y.setUint32(b+24,t.fixedInfo.fileFlagsMask,!0),y.setUint32(b+28,t.fixedInfo.fileFlags,!0),y.setUint32(b+32,t.fixedInfo.fileOS,!0),y.setUint32(b+36,t.fixedInfo.fileType,!0),y.setUint32(b+40,t.fixedInfo.fileSubtype,!0),y.setUint32(b+44,t.fixedInfo.fileDateMS,!0),y.setUint32(b+48,t.fixedInfo.fileDateLS,!0),t_(v,b+=52,o,0,u),t_(v,b+=u,h,0,d),b+=d,t.unknowns.forEach(function(t){var e=t.entireBin.byteLength;t_(v,b,t.entireBin,0,e),b+=tE(e,4)}),v);return{type:16,id:1,lang:this.lang,codepage:1200,bin:w}},t.prototype.outputToResourceEntries=function(t){for(var e=this.generateResource(),n=t.length,i=0;i<n;++i){var r=t[i];if(null!=r&&16===r.type&&r.id===e.id&&r.lang===e.lang){t[i]=e;return}}t.push(e)},t.prototype.getDefaultVersionLang=function(t){var e=Number(this.lang);if(""!==this.lang&&!isNaN(e))return e;var n=this.data.strings.filter(function(e){return t in e.values&&null!=e.values[t]}).map(function(t){return t.lang});return 1===n.length?n[0]:1033},t.prototype.setFileVersion=function(t,e,n,i,r){this.setFileVersionImpl.apply(this,tJ(t,e,n,i,r))},t.prototype.setFileVersionImpl=function(t,e,n,i,r){r=void 0!==r?r:this.getDefaultVersionLang("FileVersion"),this.fixedInfo.fileVersionMS=t<<16|e,this.fixedInfo.fileVersionLS=n<<16|i,this.setStringValue({lang:r,codepage:1200},"FileVersion","".concat(t,".").concat(e,".").concat(n,".").concat(i),!0)},t.prototype.setProductVersion=function(t,e,n,i,r){this.setProductVersionImpl.apply(this,tJ(t,e,n,i,r))},t.prototype.setProductVersionImpl=function(t,e,n,i,r){r=void 0!==r?r:this.getDefaultVersionLang("ProductVersion"),this.fixedInfo.productVersionMS=t<<16|e,this.fixedInfo.productVersionLS=n<<16|i,this.setStringValue({lang:r,codepage:1200},"ProductVersion","".concat(t,".").concat(e,".").concat(n,".").concat(i),!0)},t}(),tY=function(){function t(t){this.data=t}return t.prototype.toDER=function(){return[].slice.call(this.data)},t}();function tZ(t){if(t<128)return[t];for(var e=[];e.push(255&t),!(t<256);)t>>=8;return e.push(128+e.length),e.reverse()}function t$(t){return t instanceof Array||(t=[].slice.call(t)),[4].concat(tZ(t.length)).concat(t)}function t0(t,e){return[160+t].concat(tZ(e.length)).concat(e)}function t1(t){return[48].concat(tZ(t.length)).concat(t)}function t2(t){var e=t.reduce(function(t,e){return t.concat(e instanceof Array?e:e.toDER())},[]);return[49].concat(tZ(e.length)).concat(e)}var t6=function(){function t(t){"string"==typeof t?this.value=t.split(/\./g).map(function(t){return Number(t)}):this.value=t}return t.prototype.toDER=function(){var t=this.value,e=[];if(t.length<2)throw Error("Unexpected 'value' field");e.push(40*t[0]+t[1]);for(var n=2;n<t.length;++n)for(var i=t[n],r=!0,o=e.length;;){var a=127&i;if(r||(a+=128),e.splice(o,0,a),i<128)break;r=!1,i=Math.floor(i/128)}return[6].concat(tZ(e.length)).concat(e)},t}(),t4=new t6([1,3,14,3,2,26]),t3=new t6([2,16,840,1,101,3,4,2,1]),t8=new t6([2,16,840,1,101,3,4,2,2]),t5=new t6([2,16,840,1,101,3,4,2,3]),t7=new t6([2,16,840,1,101,3,4,2,4]),t9=new t6([2,16,840,1,101,3,4,2,5]),et=new t6([2,16,840,1,101,3,4,2,6]),ee=new t6([2,16,840,1,101,3,4,2,7]),en=new t6([2,16,840,1,101,3,4,2,8]),ei=new t6([2,16,840,1,101,3,4,2,9]),er=new t6([2,16,840,1,101,3,4,2,10]),eo=new t6([2,16,840,1,101,3,4,2,11]),ea=new t6([2,16,840,1,101,3,4,2,12]),es=new t6([1,2,840,113549,1,1,1]),eu=new t6([1,2,840,10040,4,1]),ef=new t6([1,2,840,113549,1,7,2]),ec=new t6([1,2,840,113549,1,9,3]),el=new t6([1,2,840,113549,1,9,4]),eh=new t6([1,3,6,1,4,1,311,2,1,11]),ep=new t6([1,3,6,1,4,1,311,2,1,12]),eg=new t6([1,3,6,1,4,1,311,2,1,21]),ed=new t6([1,3,6,1,4,1,311,3,3,1]);function ev(t){return"buffer"in t?new Uint8Array(t.buffer,t.byteOffset,t.byteLength):new Uint8Array(t)}function ey(t,e){var n=0,i=t[e];if(null==i)throw Error('Invalid "offset" value');if(i<128)n=i,++e;else if(128===i)throw Error("Not supported certificate data (variable length)");else{var r=127&i;for(++e;r--;){if(e>=t.length)throw Error("Invalid certificate data (invalid sequence length)");n<<=8,n|=t[e],++e}}return[n,e]}function eb(t,e){var n=ey(t,e+1),i=n[0];return n[1]+i}function ew(t,e){if(t.length<e+2||48!==t[e])return null;if(s=(n=ey(t,e+1))[0],e=n[1],s>t.length-e)throw Error("Invalid certificate data (insufficient data length)");if(6!==t[e])return null;for(var n,i,r,o,a,s,u=ef.toDER(),f=0;f<u.length;++f)if(t[e+f]!==u[f])return null;if(160!==t[e+=u.length])throw Error("Invalid certificate data (no content in contentInfo)");if(s=(i=ey(t,e+1))[0],(e=i[1])+s>t.length)throw Error("Invalid certificate data (invalid length for content)");if(48!==t[e])throw Error("Invalid certificate data (unexpected signedData)");if(s=(r=ey(t,e+1))[0],(e=r[1])+s>t.length)throw Error("Invalid certificate data (invalid length for signedData)");if(2!==t[e]||1!==t[e+1]||1!==t[e+2])throw Error("Invalid certificate data (unexpected signedData.version)");if(49!==t[e+=3])throw Error("Invalid certificate data (no signedData.digestAlgorithms)");if(s=(o=ey(t,e+1))[0],(e=o[1])+s>t.length)throw Error("Invalid certificate data (invalid length for signedData.digestAlgorithms)");if(48!==t[e+=s])throw Error("Invalid certificate data (no signedData.contentInfo)");if(s=(a=ey(t,e+1))[0],(e=a[1])+s>t.length)throw Error("Invalid certificate data (invalid length for signedData.contentInfo)");if(160!==t[e+=s])throw Error("Invalid certificate data (no signedData.certificates)");var c=ey(t,e+1),l=c[0],h=c[1];if(h+l>t.length)throw Error("Invalid certificate data (invalid length for signedData.certificates)");return t.subarray(e,h+l)}var em=function(){function t(t){this.algorithm=t}return t.prototype.toDER=function(){return t1(this.algorithm.toDER().concat([5,0]))},t}(),eU=function(){function t(t,e){this.contentType=t,this.content=e}return t.prototype.toDER=function(){return t1(this.contentType.toDER().concat(t0(0,this.content.toDER())))},t}(),eO=(y=function(t,e){return(y=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}y(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),eA=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return eO(e,t),e}(eU),eD=function(){function t(t,e){this.digestAlgorithm=t,this.digest=e}return t.prototype.toDER=function(){var t,e=this.digest;return t="buffer"in e?new Uint8Array(e.buffer,e.byteOffset,e.byteLength):new Uint8Array(e),t1(this.digestAlgorithm.toDER().concat(t$(t)))},t}(),eS=function(){function t(t,e){this.issuer=t,this.serialNumber=e}return t.prototype.toDER=function(){return t1(this.issuer.toDER().concat(this.serialNumber.toDER()))},t}(),eI=function(){function t(t,e,n,i,r,o){this.version=t,this.digestAlgorithms=e,this.contentInfo=n,this.signerInfos=i,this.certificates=r,this.crls=o}return t.prototype.toDER=function(){var t=[2,1,255&this.version].concat(t2(this.digestAlgorithms)).concat(this.contentInfo.toDER());if(this.certificates&&this.certificates.length>0){var e=t2(this.certificates);e[0]=160,t=t.concat(e)}return this.crls&&(t=t.concat(t0(1,t2(this.crls)))),t1(t=t.concat(t2(this.signerInfos)))},t}(),eE=function(){function t(t,e,n,i,r,o,a){this.version=t,this.issuerAndSerialNumber=e,this.digestAlgorithm=n,this.digestEncryptionAlgorithm=i,this.encryptedDigest=r,this.authenticatedAttributes=o,this.unauthenticatedAttributes=a}return t.prototype.toDER=function(){var t=[2,1,255&this.version].concat(this.issuerAndSerialNumber.toDER()).concat(this.digestAlgorithm.toDER());if(this.authenticatedAttributes&&this.authenticatedAttributes.length>0){var e=t2(this.authenticatedAttributes);e[0]=160,t=t.concat(e)}if(t=t.concat(this.digestEncryptionAlgorithm.toDER()).concat(t$(this.encryptedDigest)),this.unauthenticatedAttributes&&this.unauthenticatedAttributes.length>0){var n=t2(this.unauthenticatedAttributes);n[0]=161,t=t.concat(n)}return t1(t)},t}(),e_=(b=function(t,e){return(b=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}b(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),eP=new t6([1,3,6,1,4,1,311,2,1,4]),ej=function(){function t(t,e){this.type=t,this.value=e}return t.prototype.toDER=function(){return t1(this.type.toDER().concat(this.value.toDER()))},t}(),eR=function(){function t(t,e){this.data=t,this.messageDigest=e}return t.prototype.toDER=function(){return t1(this.toDERWithoutHeader())},t.prototype.toDERWithoutHeader=function(){return this.data.toDER().concat(this.messageDigest.toDER())},t}(),ez=function(t){function e(e){return t.call(this,eP,e)||this}return e_(e,t),e}(eU),eC=(w=function(t,e){return(w=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}w(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),eV=new t6([1,3,6,1,4,1,311,2,1,15]),eT=function(){function t(t,e){this.flags=t,this.file=e}return t.prototype.toDER=function(){return t1([3,1,255&this.flags].concat(t0(0,this.file.toDER())))},t}(),eL=function(t){function e(e){return t.call(this,eV,e)||this}return eC(e,t),e}(ej),ex=(m=function(t,e){return(m=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}m(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),eH=function(){function t(t,e){this.tag=t,this.value=e}return t.prototype.toDER=function(){var t=this.value.toDER();return 2===this.tag?t0(this.tag,t):(t[0]=128+this.tag,t)},t}();ex(function(t){var e;return U.call(this,0,new tY([22].concat(tZ((e=[].map.call(t,function(t){return t.charCodeAt(0)}).filter(function(t){return t<128})).length)).concat(e)))||this},U=eH);var ek=function(t){function e(e){var n,i,r,o=(r=new DataView((i=new Uint8Array(2*(n=[].map.call(e,function(t){return t.charCodeAt(0)})).length)).buffer),n.forEach(function(t,e){r.setUint16(2*e,t,!1)}),[30].concat(tZ(i.length)).concat([].slice.call(i)));return o[0]=128,t.call(this,2,new tY(o))||this}return ex(e,t),e}(eH),eB=function(){function t(t,e){this.attrType=t,this.attrValues=e}return t.prototype.toDER=function(){return t1(this.attrType.toDER().concat(t2(this.attrValues)))},t}(),eM=function(t,e){var n,i,r,o,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(s){return function(u){return function(s){if(n)throw TypeError("Generator is already executing.");for(;o&&(o=0,s[0]&&(a=0)),a;)try{if(n=1,i&&(r=2&s[0]?i.return:s[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,s[1])).done)return r;switch(i=0,r&&(s=[2&s[0],r.value]),s[0]){case 0:case 1:r=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,i=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!(r=(r=a.trys).length>0&&r[r.length-1])&&(6===s[0]||2===s[0])){a=0;continue}if(3===s[0]&&(!r||s[1]>r[0]&&s[1]<r[3])){a.label=s[1];break}if(6===s[0]&&a.label<r[1]){a.label=r[1],r=s;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(s);break}r[2]&&a.ops.pop(),a.trys.pop();continue}s=e.call(t,a)}catch(t){s=[6,t],i=0}finally{n=r=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,u])}}};function eN(t){var e=!1;return{next:function(){return e?{done:!0,value:void 0}:(e=!0,{done:!1,value:t})}}}function eF(t,e,n){if(!function(t){if(!t.encryptData&&!t.signData)throw Error("Signer object must implement either `encryptData` or `signData`.")}(e),"number"==typeof n){if(n<=0)throw Error("Invalid alignment value");r=n}else r=t.getFileAlignment();var i,r,o,a=function(t){if("string"!=typeof t)return new em(new t6(t));switch(t){case"sha1":case"SHA1":return new em(t4);case"sha256":case"SHA256":return new em(t3);case"sha384":case"SHA384":return new em(t8);case"sha512":case"SHA512":return new em(t5);case"sha224":case"SHA224":return new em(t7);case"sha512-224":case"SHA512-224":return new em(t9);case"sha512-256":case"SHA512-256":return new em(et);case"sha3-224":case"SHA3-224":return new em(ee);case"sha3-256":case"SHA3-256":return new em(en);case"sha3-384":case"SHA3-384":return new em(ei);case"sha3-512":case"SHA3-512":return new em(er);case"shake128":case"SHAKE128":return new em(eo);case"shake256":case"SHAKE256":return new em(ea);default:throw Error("Invalid or unsupported digest algorithm")}}(e.getDigestAlgorithm()),s=e.getEncryptionAlgorithm();if("string"!=typeof s)o=new em(new t6(s));else switch(s){case"rsa":case"RSA":o=new em(es);break;case"dsa":case"DSA":o=new em(eu);break;default:throw Error("Invalid or unsupported digest encryption algorithm")}var u=e.getCertificateData?e.getCertificateData():e.getPublicKeyData(),f=function t(e){if(Array.isArray(e)){if(0===e.length)throw Error("No data is specified.");return t(e[0])}var n,i,r,o,a,s=ev(e);if(s.length<2)throw Error("Invalid certificate data");if(48!==s[0])throw Error("Not supported certificate data (non-`Certificate`-format data)");var u=ew(s,0);if(u){var f=ey(u,1),c=f[0],l=f[1];if(l+c>u.length)throw Error("Invalid certificate data (invalid length for signedData.certificates)");if(48!==u[l])throw Error("Invalid certificate data (no signedData.certificates[0])");var h=ey(u,l+1),p=h[0],g=h[1];if(g+p>u.length)throw Error("Invalid certificate data (invalid length for signedData.certificates[0])");return t(u.subarray(l,g+p))}if(r=(n=ey(s,1))[0],o=n[1],r>s.length-o)throw Error("Invalid certificate data (insufficient data length)");if(48!==s[o])throw Error("Invalid certificate data (missing tbsCertificate)");if(a=(i=ey(s,o+1))[0],o=i[1],a>s.length-o)throw Error("Invalid certificate data (invalid tbsCertificate length)");var d=o+a;if(160===s[o]&&(o=eb(s,o))>=d)throw Error("Invalid certificate data (insufficient tbsCertificate data: after version)");if(2!==s[o])throw Error("Invalid certificate data (invalid serialNumber)");var v=eb(s,o);if(o>=d)throw Error("Invalid certificate data (insufficient tbsCertificate data: after serialNumber)");var y=[].slice.call(s,o,v);if(48!==s[o=v])throw Error("Invalid certificate data (invalid algorithmIdentifier)");if((o=eb(s,o))>=d)throw Error("Invalid certificate data (insufficient tbsCertificate data: after serialNumber)");if(48!==s[o])throw Error("Invalid certificate data (invalid issuer)");var b=eb(s,o);if(b>d)throw Error("Invalid certificate data (insufficient tbsCertificate data: issuer)");return[[].slice.call(s,o,b),y]}(u),c=f[0],l=f[1];return(i=r,e.digestData(function(){var e,n,r,o,a,s,u,f,c,l,h,p,g,d;return eM(this,function(v){switch(v.label){case 0:return e=t.dosHeader.newHeaderAddress+88,n=t.dosHeader.newHeaderAddress+t.newHeader.getDataDirectoryOffset()+L.itemSize*x.Certificate,r=t.getRawHeader(),a=(o=t.getAllSections()).length,u=new ArrayBuffer(tE((s=r.byteLength)+a*ts.itemSize,t.getFileAlignment())-s),f=ts.from(u,a),o.forEach(function(t,e){f.set(e,t.info)}),[4,tP(r,0,e)];case 1:return v.sent(),[4,tP(r,e+4,n-(e+4))];case 2:return v.sent(),c=n+L.itemSize,[4,tP(t.getRawHeader(),c,t.getTotalHeaderSize()-c)];case 3:return v.sent(),[4,u];case 4:v.sent(),l=0,h=o,v.label=5;case 5:if(!(l<h.length))return[3,8];if(!(p=h[l]).data)return[3,7];return[4,p.data];case 6:v.sent(),v.label=7;case 7:return l++,[3,5];case 8:if(!(null!==(g=t.getExtraData())))return[3,11];return[4,g];case 9:if(v.sent(),!(0!=(d=tE(g.byteLength,i)-g.byteLength)))return[3,11];return[4,new Uint8Array(d).buffer];case 10:v.sent(),v.label=11;case 11:return[2]}})}())).then(function(t){var n=new eR(new eL(new eT(0,new ek(""))),new eD(a,t));return e.digestData(eN(new Uint8Array(n.toDERWithoutHeader()).buffer)).then(function(t){var i,r=[new eB(ep,[new tY([48,0])]),new eB(ec,[eP]),new eB(eh,[new tY(t1(eg.toDER()))]),new eB(el,[new tY(t$(ev(t)))])];return(i=eN(new Uint8Array(t2(r)).buffer),e.signData?e.signData(i):e.digestData(i).then(function(t){var n=new Uint8Array(new eD(a,t).toDER()).buffer;return e.encryptData(eN(n))})).then(function(t){return[n,r,t]})})}).then(function(t){var n=t[0],i=t[1],r=t[2],s=new eE(1,new eS(new tY(c),new tY(l)),a,o,ev(r),i);return e.timestampData?e.digestData(eN(function(t){if("buffer"in t){var e=new ArrayBuffer(t.byteLength);return new Uint8Array(e).set(new Uint8Array(t.buffer,t.byteOffset,t.byteLength)),e}var e=new ArrayBuffer(t.byteLength);return new Uint8Array(e).set(new Uint8Array(t)),e}(r))).then(function(t){var i=new Uint8Array(t1([2,1,1].concat(t1(a.toDER().concat(t$(ev(t))))).concat([1,1,255]))).buffer;return e.timestampData(i).then(function(t){var e=function(t){var e,n,i,r,o,a,s,u,f=ev(t);if(f.length<2||48!==f[0])throw Error("Invalid or unexpected timestamp response");if(s=(e=ey(f,1))[0],u=e[1],s>f.length-u)throw Error("Invalid or unexpected timestamp response (insufficient buffer)");var c=u+s;if(48!==f[u])throw Error("Invalid or unexpected timestamp response (no PKIStatusInfo)");if(s=(n=ey(f,u+1))[0],(u=n[1])>=c)throw Error("Invalid or unexpected timestamp response (invalid length for PKIStatusInfo)");var l=u+s;if(2!==f[u]||1!==f[u+1])throw Error("Invalid or unexpected timestamp response (invalid PKIStatusInfo.status)");var h=f[u+2];switch(h){case 0:case 1:break;case 2:case 3:case 4:case 5:var p="Timestamp response has error status ".concat(h);throw u+3<l&&48===f[u+3]&&(s=(i=ey(f,u+4))[0],(u=i[1])+s<=l&&12===f[u]&&(s=(r=ey(f,u+1))[0],(u=r[1])+s<=l&&(p+=", text = "+decodeURIComponent([].slice.call(f,u,u+s).map(function(t){if(t>=32&&t<=126)return String.fromCharCode(t);var e=t.toString(16);return 1===e.length&&(e="0"+e),"%"+e}).join(""))))),Error(p);default:throw Error("Unexpected PKIStatusInfo.status: ".concat(null!=h?h:"(unknown)"))}if(l+1>=c||48!==f[l])throw Error("Invalid or unexpected timestamp response (no TimeStampToken)");if(s=(o=ey(f,l+1))[0],(u=o[1])+s>c)throw Error("Invalid or unexpected timestamp response (insufficient data for TimeStampToken)");var g=ef.toDER();if(6!==f[u])throw Error("Invalid or unexpected timestamp response (no contentType in TimeStampToken)");for(var d=0;d<g.length;++d)if(f[u+d]!==g[d])throw Error("Invalid or unexpected timestamp response (unexpected TimeStampToken.contentType octet)");if(160!==f[u+=g.length])throw Error("Invalid or unexpected timestamp response (no content in TimeStampToken)");if(s=(a=ey(f,u+1))[0],(u=a[1])+s>c)throw Error("Invalid or unexpected timestamp response (invalid length for TimeStampToken.content)");return tP(f,u,s)}(t);return s.unauthenticatedAttributes=[new eB(ed,[new eU(ef,new tY(ev(e)))])],[n,s]})}):[n,s]}).then(function(t){var e=t[0],n=t[1],i=new Uint8Array(new eA(ef,new eI(1,[a],new ez(e),[n],function t(e){if(Array.isArray(e))return e.map(t).reduce(function(t,e){return t.concat(e)},[]);var n=ev(e),i=ew(n,0);if(!i)return[new tY(n)];var r=ey(i,1),o=r[0],a=r[1];if(a+o>i.length)throw Error("Invalid certificate data (invalid length for signedData.certificates)");for(var s=a+o,u=[],f=a;f<s;){if(48!==i[f])throw Error("Invalid certificate data (no signedData.certificates[*])");var c=ey(i,f+1),l=c[0],h=c[1];if(h+l>i.length)throw Error("Invalid certificate data (invalid length for signedData.certificates[*])");u.push(new tY(i.subarray(f,h+l))),f=h+l}return u}(u))).toDER()),r=new ArrayBuffer(8+i.length),o=new DataView(r);return o.setUint32(0,i.length+8,!0),o.setUint16(4,512,!0),o.setUint16(6,2,!0),t_(r,8,i,0,i.byteLength),r}).then(function(e){var n=tE(e.byteLength,r),i=n,o=t.getExtraData();null!==o&&(i+=tE(o.byteLength,r)-o.byteLength);var a=t.generate(i),s=a.byteLength-n;return L.from(a,t.dosHeader.newHeaderAddress+t.newHeader.getDataDirectoryOffset()).set(x.Certificate,{size:n,virtualAddress:s}),M(a,!0),t_(a,s,e,0,e.byteLength),a})}}}]);
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2888, 8764, 6484],
    {
        79742: function (e, t) {
            "use strict";
            (t.byteLength = function (e) {
                var t = c(e),
                    n = t[0],
                    r = t[1];
                return ((n + r) * 3) / 4 - r;
            }),
                (t.toByteArray = function (e) {
                    var t,
                        n,
                        o = c(e),
                        s = o[0],
                        a = o[1],
                        u = new i(((s + a) * 3) / 4 - a),
                        l = 0,
                        p = a > 0 ? s - 4 : s;
                    for (n = 0; n < p; n += 4)
                        (t = (r[e.charCodeAt(n)] << 18) | (r[e.charCodeAt(n + 1)] << 12) | (r[e.charCodeAt(n + 2)] << 6) | r[e.charCodeAt(n + 3)]), (u[l++] = (t >> 16) & 255), (u[l++] = (t >> 8) & 255), (u[l++] = 255 & t);
                    return (
                        2 === a && ((t = (r[e.charCodeAt(n)] << 2) | (r[e.charCodeAt(n + 1)] >> 4)), (u[l++] = 255 & t)),
                        1 === a && ((t = (r[e.charCodeAt(n)] << 10) | (r[e.charCodeAt(n + 1)] << 4) | (r[e.charCodeAt(n + 2)] >> 2)), (u[l++] = (t >> 8) & 255), (u[l++] = 255 & t)),
                        u
                    );
                }),
                (t.fromByteArray = function (e) {
                    for (var t, r = e.length, i = r % 3, o = [], s = 0, a = r - i; s < a; s += 16383)
                        o.push(
                            (function (e, t, r) {
                                for (var i, o = [], s = t; s < r; s += 3) o.push(n[((i = ((e[s] << 16) & 16711680) + ((e[s + 1] << 8) & 65280) + (255 & e[s + 2])) >> 18) & 63] + n[(i >> 12) & 63] + n[(i >> 6) & 63] + n[63 & i]);
                                return o.join("");
                            })(e, s, s + 16383 > a ? a : s + 16383)
                        );
                    return 1 === i ? o.push(n[(t = e[r - 1]) >> 2] + n[(t << 4) & 63] + "==") : 2 === i && o.push(n[(t = (e[r - 2] << 8) + e[r - 1]) >> 10] + n[(t >> 4) & 63] + n[(t << 2) & 63] + "="), o.join("");
                });
            for (var n = [], r = [], i = "undefined" != typeof Uint8Array ? Uint8Array : Array, o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", s = 0, a = o.length; s < a; ++s)
                (n[s] = o[s]), (r[o.charCodeAt(s)] = s);
            function c(e) {
                var t = e.length;
                if (t % 4 > 0) throw Error("Invalid string. Length must be a multiple of 4");
                var n = e.indexOf("=");
                -1 === n && (n = t);
                var r = n === t ? 0 : 4 - (n % 4);
                return [n, r];
            }
            (r["-".charCodeAt(0)] = 62), (r["_".charCodeAt(0)] = 63);
        },
        5532: function (e, t, n) {
            var r,
                i,
                o = n(48764).Buffer;
            ((r = i = t.Tv || (t.Tv = {}))[(r.FILE = 32768)] = "FILE"), (r[(r.DIRECTORY = 16384)] = "DIRECTORY"), (r[(r.SYMLINK = 40960)] = "SYMLINK");
            var s = (function () {
                function e(e, t, n, r, o, s, a) {
                    (this.dev = 0), (this.ino = 0), (this.rdev = 0), (this.nlink = 1), (this.blksize = 4096), (this.uid = 0), (this.gid = 0), (this.fileData = null), (this.size = t);
                    var c = 0;
                    if (
                        ("number" != typeof r && (r = c = Date.now()),
                            "number" != typeof o && (c || (c = Date.now()), (o = c)),
                            "number" != typeof s && (c || (c = Date.now()), (s = c)),
                            "number" != typeof a && (c || (c = Date.now()), (a = c)),
                            (this.atimeMs = r),
                            (this.ctimeMs = s),
                            (this.mtimeMs = o),
                            (this.birthtimeMs = a),
                            n)
                    )
                        this.mode = n;
                    else
                        switch (e) {
                            case i.FILE:
                                this.mode = 420;
                                break;
                            case i.DIRECTORY:
                            default:
                                this.mode = 511;
                        }
                    (this.blocks = Math.ceil(t / 512)), this.mode < 4096 && (this.mode |= e);
                }
                return (
                    (e.fromBuffer = function (t) {
                        var n = t.readUInt32LE(0),
                            r = t.readUInt32LE(4);
                        return new e(61440 & r, n, 4095 & r, t.readDoubleLE(8), t.readDoubleLE(16), t.readDoubleLE(24));
                    }),
                    (e.clone = function (t) {
                        return new e(61440 & t.mode, t.size, 4095 & t.mode, t.atimeMs, t.mtimeMs, t.ctimeMs, t.birthtimeMs);
                    }),
                    Object.defineProperty(e.prototype, "atime", {
                        get: function () {
                            return new Date(this.atimeMs);
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "mtime", {
                        get: function () {
                            return new Date(this.mtimeMs);
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "ctime", {
                        get: function () {
                            return new Date(this.ctimeMs);
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "birthtime", {
                        get: function () {
                            return new Date(this.birthtimeMs);
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    (e.prototype.toBuffer = function () {
                        var e = o.alloc(32);
                        return e.writeUInt32LE(this.size, 0), e.writeUInt32LE(this.mode, 4), e.writeDoubleLE(this.atime.getTime(), 8), e.writeDoubleLE(this.mtime.getTime(), 16), e.writeDoubleLE(this.ctime.getTime(), 24), e;
                    }),
                    (e.prototype.isFile = function () {
                        return (61440 & this.mode) === i.FILE;
                    }),
                    (e.prototype.isDirectory = function () {
                        return (61440 & this.mode) === i.DIRECTORY;
                    }),
                    (e.prototype.isSymbolicLink = function () {
                        return (61440 & this.mode) === i.SYMLINK;
                    }),
                    (e.prototype.chmod = function (e) {
                        this.mode = (61440 & this.mode) | e;
                    }),
                    (e.prototype.isSocket = function () {
                        return !1;
                    }),
                    (e.prototype.isBlockDevice = function () {
                        return !1;
                    }),
                    (e.prototype.isCharacterDevice = function () {
                        return !1;
                    }),
                    (e.prototype.isFIFO = function () {
                        return !1;
                    }),
                    e
                );
            })();
            t.ZP = s;
        },
        48764: function (e, t, n) {
            "use strict";
              /*!
               * The buffer module from node.js, for the browser.
               *
               * @author   Feross Aboukhadijeh <https://feross.org>
               * @license  MIT
               */ let r = n(79742),
                i = n(80645),
                o = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null;
            function s(e) {
                if (e > 2147483647) throw RangeError('The value "' + e + '" is invalid for option "size"');
                let t = new Uint8Array(e);
                return Object.setPrototypeOf(t, a.prototype), t;
            }
            function a(e, t, n) {
                if ("number" == typeof e) {
                    if ("string" == typeof t) throw TypeError('The "string" argument must be of type string. Received type number');
                    return l(e);
                }
                return c(e, t, n);
            }
            function c(e, t, n) {
                if ("string" == typeof e)
                    return (function (e, t) {
                        if ((("string" != typeof t || "" === t) && (t = "utf8"), !a.isEncoding(t))) throw TypeError("Unknown encoding: " + t);
                        let n = 0 | d(e, t),
                            r = s(n),
                            i = r.write(e, t);
                        return i !== n && (r = r.slice(0, i)), r;
                    })(e, t);
                if (ArrayBuffer.isView(e))
                    return (function (e) {
                        if (L(e, Uint8Array)) {
                            let t = new Uint8Array(e);
                            return f(t.buffer, t.byteOffset, t.byteLength);
                        }
                        return p(e);
                    })(e);
                if (null == e) throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
                if (L(e, ArrayBuffer) || (e && L(e.buffer, ArrayBuffer)) || ("undefined" != typeof SharedArrayBuffer && (L(e, SharedArrayBuffer) || (e && L(e.buffer, SharedArrayBuffer))))) return f(e, t, n);
                if ("number" == typeof e) throw TypeError('The "value" argument must not be of type number. Received type number');
                let r = e.valueOf && e.valueOf();
                if (null != r && r !== e) return a.from(r, t, n);
                let i = (function (e) {
                    var t;
                    if (a.isBuffer(e)) {
                        let t = 0 | h(e.length),
                            n = s(t);
                        return 0 === n.length || e.copy(n, 0, 0, t), n;
                    }
                    return void 0 !== e.length ? ("number" != typeof e.length || (t = e.length) != t ? s(0) : p(e)) : "Buffer" === e.type && Array.isArray(e.data) ? p(e.data) : void 0;
                })(e);
                if (i) return i;
                if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof e[Symbol.toPrimitive]) return a.from(e[Symbol.toPrimitive]("string"), t, n);
                throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
            }
            function u(e) {
                if ("number" != typeof e) throw TypeError('"size" argument must be of type number');
                if (e < 0) throw RangeError('The value "' + e + '" is invalid for option "size"');
            }
            function l(e) {
                return u(e), s(e < 0 ? 0 : 0 | h(e));
            }
            function p(e) {
                let t = e.length < 0 ? 0 : 0 | h(e.length),
                    n = s(t);
                for (let r = 0; r < t; r += 1) n[r] = 255 & e[r];
                return n;
            }
            function f(e, t, n) {
                let r;
                if (t < 0 || e.byteLength < t) throw RangeError('"offset" is outside of buffer bounds');
                if (e.byteLength < t + (n || 0)) throw RangeError('"length" is outside of buffer bounds');
                return Object.setPrototypeOf((r = void 0 === t && void 0 === n ? new Uint8Array(e) : void 0 === n ? new Uint8Array(e, t) : new Uint8Array(e, t, n)), a.prototype), r;
            }
            function h(e) {
                if (e >= 2147483647) throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");
                return 0 | e;
            }
            function d(e, t) {
                if (a.isBuffer(e)) return e.length;
                if (ArrayBuffer.isView(e) || L(e, ArrayBuffer)) return e.byteLength;
                if ("string" != typeof e) throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof e);
                let n = e.length,
                    r = arguments.length > 2 && !0 === arguments[2];
                if (!r && 0 === n) return 0;
                let i = !1;
                for (; ;)
                    switch (t) {
                        case "ascii":
                        case "latin1":
                        case "binary":
                            return n;
                        case "utf8":
                        case "utf-8":
                            return R(e).length;
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return 2 * n;
                        case "hex":
                            return n >>> 1;
                        case "base64":
                            return N(e).length;
                        default:
                            if (i) return r ? -1 : R(e).length;
                            (t = ("" + t).toLowerCase()), (i = !0);
                    }
            }
            function m(e, t, n) {
                let i = !1;
                if (((void 0 === t || t < 0) && (t = 0), t > this.length || ((void 0 === n || n > this.length) && (n = this.length), n <= 0 || (n >>>= 0) <= (t >>>= 0)))) return "";
                for (e || (e = "utf8"); ;)
                    switch (e) {
                        case "hex":
                            return (function (e, t, n) {
                                let r = e.length;
                                (!t || t < 0) && (t = 0), (!n || n < 0 || n > r) && (n = r);
                                let i = "";
                                for (let r = t; r < n; ++r) i += D[e[r]];
                                return i;
                            })(this, t, n);
                        case "utf8":
                        case "utf-8":
                            return w(this, t, n);
                        case "ascii":
                            return (function (e, t, n) {
                                let r = "";
                                n = Math.min(e.length, n);
                                for (let i = t; i < n; ++i) r += String.fromCharCode(127 & e[i]);
                                return r;
                            })(this, t, n);
                        case "latin1":
                        case "binary":
                            return (function (e, t, n) {
                                let r = "";
                                n = Math.min(e.length, n);
                                for (let i = t; i < n; ++i) r += String.fromCharCode(e[i]);
                                return r;
                            })(this, t, n);
                        case "base64":
                            var o, s;
                            return (o = t), (s = n), 0 === o && s === this.length ? r.fromByteArray(this) : r.fromByteArray(this.slice(o, s));
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return (function (e, t, n) {
                                let r = e.slice(t, n),
                                    i = "";
                                for (let e = 0; e < r.length - 1; e += 2) i += String.fromCharCode(r[e] + 256 * r[e + 1]);
                                return i;
                            })(this, t, n);
                        default:
                            if (i) throw TypeError("Unknown encoding: " + e);
                            (e = (e + "").toLowerCase()), (i = !0);
                    }
            }
            function g(e, t, n) {
                let r = e[t];
                (e[t] = e[n]), (e[n] = r);
            }
            function y(e, t, n, r, i) {
                var o;
                if (0 === e.length) return -1;
                if (("string" == typeof n ? ((r = n), (n = 0)) : n > 2147483647 ? (n = 2147483647) : n < -2147483648 && (n = -2147483648), (o = n = +n) != o && (n = i ? 0 : e.length - 1), n < 0 && (n = e.length + n), n >= e.length)) {
                    if (i) return -1;
                    n = e.length - 1;
                } else if (n < 0) {
                    if (!i) return -1;
                    n = 0;
                }
                if (("string" == typeof t && (t = a.from(t, r)), a.isBuffer(t))) return 0 === t.length ? -1 : b(e, t, n, r, i);
                if ("number" == typeof t) return ((t &= 255), "function" == typeof Uint8Array.prototype.indexOf) ? (i ? Uint8Array.prototype.indexOf.call(e, t, n) : Uint8Array.prototype.lastIndexOf.call(e, t, n)) : b(e, [t], n, r, i);
                throw TypeError("val must be string, number or Buffer");
            }
            function b(e, t, n, r, i) {
                let o,
                    s = 1,
                    a = e.length,
                    c = t.length;
                if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
                    if (e.length < 2 || t.length < 2) return -1;
                    (s = 2), (a /= 2), (c /= 2), (n /= 2);
                }
                function u(e, t) {
                    return 1 === s ? e[t] : e.readUInt16BE(t * s);
                }
                if (i) {
                    let r = -1;
                    for (o = n; o < a; o++)
                        if (u(e, o) === u(t, -1 === r ? 0 : o - r)) {
                            if ((-1 === r && (r = o), o - r + 1 === c)) return r * s;
                        } else -1 !== r && (o -= o - r), (r = -1);
                } else
                    for (n + c > a && (n = a - c), o = n; o >= 0; o--) {
                        let n = !0;
                        for (let r = 0; r < c; r++)
                            if (u(e, o + r) !== u(t, r)) {
                                n = !1;
                                break;
                            }
                        if (n) return o;
                    }
                return -1;
            }
            function w(e, t, n) {
                n = Math.min(e.length, n);
                let r = [],
                    i = t;
                for (; i < n;) {
                    let t = e[i],
                        o = null,
                        s = t > 239 ? 4 : t > 223 ? 3 : t > 191 ? 2 : 1;
                    if (i + s <= n) {
                        let n, r, a, c;
                        switch (s) {
                            case 1:
                                t < 128 && (o = t);
                                break;
                            case 2:
                                (192 & (n = e[i + 1])) == 128 && (c = ((31 & t) << 6) | (63 & n)) > 127 && (o = c);
                                break;
                            case 3:
                                (n = e[i + 1]), (r = e[i + 2]), (192 & n) == 128 && (192 & r) == 128 && (c = ((15 & t) << 12) | ((63 & n) << 6) | (63 & r)) > 2047 && (c < 55296 || c > 57343) && (o = c);
                                break;
                            case 4:
                                (n = e[i + 1]),
                                    (r = e[i + 2]),
                                    (a = e[i + 3]),
                                    (192 & n) == 128 && (192 & r) == 128 && (192 & a) == 128 && (c = ((15 & t) << 18) | ((63 & n) << 12) | ((63 & r) << 6) | (63 & a)) > 65535 && c < 1114112 && (o = c);
                        }
                    }
                    null === o ? ((o = 65533), (s = 1)) : o > 65535 && ((o -= 65536), r.push(((o >>> 10) & 1023) | 55296), (o = 56320 | (1023 & o))), r.push(o), (i += s);
                }
                return (function (e) {
                    let t = e.length;
                    if (t <= 4096) return String.fromCharCode.apply(String, e);
                    let n = "",
                        r = 0;
                    for (; r < t;) n += String.fromCharCode.apply(String, e.slice(r, (r += 4096)));
                    return n;
                })(r);
            }
            function v(e, t, n) {
                if (e % 1 != 0 || e < 0) throw RangeError("offset is not uint");
                if (e + t > n) throw RangeError("Trying to access beyond buffer length");
            }
            function S(e, t, n, r, i, o) {
                if (!a.isBuffer(e)) throw TypeError('"buffer" argument must be a Buffer instance');
                if (t > i || t < o) throw RangeError('"value" argument is out of bounds');
                if (n + r > e.length) throw RangeError("Index out of range");
            }
            function E(e, t, n, r, i) {
                C(t, r, i, e, n, 7);
                let o = Number(t & BigInt(4294967295));
                (e[n++] = o), (o >>= 8), (e[n++] = o), (o >>= 8), (e[n++] = o), (o >>= 8), (e[n++] = o);
                let s = Number((t >> BigInt(32)) & BigInt(4294967295));
                return (e[n++] = s), (s >>= 8), (e[n++] = s), (s >>= 8), (e[n++] = s), (s >>= 8), (e[n++] = s), n;
            }
            function x(e, t, n, r, i) {
                C(t, r, i, e, n, 7);
                let o = Number(t & BigInt(4294967295));
                (e[n + 7] = o), (o >>= 8), (e[n + 6] = o), (o >>= 8), (e[n + 5] = o), (o >>= 8), (e[n + 4] = o);
                let s = Number((t >> BigInt(32)) & BigInt(4294967295));
                return (e[n + 3] = s), (s >>= 8), (e[n + 2] = s), (s >>= 8), (e[n + 1] = s), (s >>= 8), (e[n] = s), n + 8;
            }
            function k(e, t, n, r, i, o) {
                if (n + r > e.length || n < 0) throw RangeError("Index out of range");
            }
            function _(e, t, n, r, o) {
                return (t = +t), (n >>>= 0), o || k(e, t, n, 4, 34028234663852886e22, -34028234663852886e22), i.write(e, t, n, r, 23, 4), n + 4;
            }
            function j(e, t, n, r, o) {
                return (t = +t), (n >>>= 0), o || k(e, t, n, 8, 17976931348623157e292, -17976931348623157e292), i.write(e, t, n, r, 52, 8), n + 8;
            }
            (t.Buffer = a),
                (t.SlowBuffer = function (e) {
                    return +e != e && (e = 0), a.alloc(+e);
                }),
                (t.INSPECT_MAX_BYTES = 50),
                (t.kMaxLength = 2147483647),
                (a.TYPED_ARRAY_SUPPORT = (function () {
                    try {
                        let e = new Uint8Array(1),
                            t = {
                                foo: function () {
                                    return 42;
                                },
                            };
                        return Object.setPrototypeOf(t, Uint8Array.prototype), Object.setPrototypeOf(e, t), 42 === e.foo();
                    } catch (e) {
                        return !1;
                    }
                })()),
                a.TYPED_ARRAY_SUPPORT ||
                "undefined" == typeof console ||
                "function" != typeof console.error ||
                console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),
                Object.defineProperty(a.prototype, "parent", {
                    enumerable: !0,
                    get: function () {
                        if (a.isBuffer(this)) return this.buffer;
                    },
                }),
                Object.defineProperty(a.prototype, "offset", {
                    enumerable: !0,
                    get: function () {
                        if (a.isBuffer(this)) return this.byteOffset;
                    },
                }),
                (a.poolSize = 8192),
                (a.from = function (e, t, n) {
                    return c(e, t, n);
                }),
                Object.setPrototypeOf(a.prototype, Uint8Array.prototype),
                Object.setPrototypeOf(a, Uint8Array),
                (a.alloc = function (e, t, n) {
                    return (u(e), e <= 0) ? s(e) : void 0 !== t ? ("string" == typeof n ? s(e).fill(t, n) : s(e).fill(t)) : s(e);
                }),
                (a.allocUnsafe = function (e) {
                    return l(e);
                }),
                (a.allocUnsafeSlow = function (e) {
                    return l(e);
                }),
                (a.isBuffer = function (e) {
                    return null != e && !0 === e._isBuffer && e !== a.prototype;
                }),
                (a.compare = function (e, t) {
                    if ((L(e, Uint8Array) && (e = a.from(e, e.offset, e.byteLength)), L(t, Uint8Array) && (t = a.from(t, t.offset, t.byteLength)), !a.isBuffer(e) || !a.isBuffer(t)))
                        throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
                    if (e === t) return 0;
                    let n = e.length,
                        r = t.length;
                    for (let i = 0, o = Math.min(n, r); i < o; ++i)
                        if (e[i] !== t[i]) {
                            (n = e[i]), (r = t[i]);
                            break;
                        }
                    return n < r ? -1 : r < n ? 1 : 0;
                }),
                (a.isEncoding = function (e) {
                    switch (String(e).toLowerCase()) {
                        case "hex":
                        case "utf8":
                        case "utf-8":
                        case "ascii":
                        case "latin1":
                        case "binary":
                        case "base64":
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return !0;
                        default:
                            return !1;
                    }
                }),
                (a.concat = function (e, t) {
                    let n;
                    if (!Array.isArray(e)) throw TypeError('"list" argument must be an Array of Buffers');
                    if (0 === e.length) return a.alloc(0);
                    if (void 0 === t) for (n = 0, t = 0; n < e.length; ++n) t += e[n].length;
                    let r = a.allocUnsafe(t),
                        i = 0;
                    for (n = 0; n < e.length; ++n) {
                        let t = e[n];
                        if (L(t, Uint8Array)) i + t.length > r.length ? (a.isBuffer(t) || (t = a.from(t)), t.copy(r, i)) : Uint8Array.prototype.set.call(r, t, i);
                        else if (a.isBuffer(t)) t.copy(r, i);
                        else throw TypeError('"list" argument must be an Array of Buffers');
                        i += t.length;
                    }
                    return r;
                }),
                (a.byteLength = d),
                (a.prototype._isBuffer = !0),
                (a.prototype.swap16 = function () {
                    let e = this.length;
                    if (e % 2 != 0) throw RangeError("Buffer size must be a multiple of 16-bits");
                    for (let t = 0; t < e; t += 2) g(this, t, t + 1);
                    return this;
                }),
                (a.prototype.swap32 = function () {
                    let e = this.length;
                    if (e % 4 != 0) throw RangeError("Buffer size must be a multiple of 32-bits");
                    for (let t = 0; t < e; t += 4) g(this, t, t + 3), g(this, t + 1, t + 2);
                    return this;
                }),
                (a.prototype.swap64 = function () {
                    let e = this.length;
                    if (e % 8 != 0) throw RangeError("Buffer size must be a multiple of 64-bits");
                    for (let t = 0; t < e; t += 8) g(this, t, t + 7), g(this, t + 1, t + 6), g(this, t + 2, t + 5), g(this, t + 3, t + 4);
                    return this;
                }),
                (a.prototype.toString = function () {
                    let e = this.length;
                    return 0 === e ? "" : 0 == arguments.length ? w(this, 0, e) : m.apply(this, arguments);
                }),
                (a.prototype.toLocaleString = a.prototype.toString),
                (a.prototype.equals = function (e) {
                    if (!a.isBuffer(e)) throw TypeError("Argument must be a Buffer");
                    return this === e || 0 === a.compare(this, e);
                }),
                (a.prototype.inspect = function () {
                    let e = "",
                        n = t.INSPECT_MAX_BYTES;
                    return (
                        (e = this.toString("hex", 0, n)
                            .replace(/(.{2})/g, "$1 ")
                            .trim()),
                        this.length > n && (e += " ... "),
                        "<Buffer " + e + ">"
                    );
                }),
                o && (a.prototype[o] = a.prototype.inspect),
                (a.prototype.compare = function (e, t, n, r, i) {
                    if ((L(e, Uint8Array) && (e = a.from(e, e.offset, e.byteLength)), !a.isBuffer(e))) throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof e);
                    if ((void 0 === t && (t = 0), void 0 === n && (n = e ? e.length : 0), void 0 === r && (r = 0), void 0 === i && (i = this.length), t < 0 || n > e.length || r < 0 || i > this.length))
                        throw RangeError("out of range index");
                    if (r >= i && t >= n) return 0;
                    if (r >= i) return -1;
                    if (t >= n) return 1;
                    if (((t >>>= 0), (n >>>= 0), (r >>>= 0), (i >>>= 0), this === e)) return 0;
                    let o = i - r,
                        s = n - t,
                        c = Math.min(o, s),
                        u = this.slice(r, i),
                        l = e.slice(t, n);
                    for (let e = 0; e < c; ++e)
                        if (u[e] !== l[e]) {
                            (o = u[e]), (s = l[e]);
                            break;
                        }
                    return o < s ? -1 : s < o ? 1 : 0;
                }),
                (a.prototype.includes = function (e, t, n) {
                    return -1 !== this.indexOf(e, t, n);
                }),
                (a.prototype.indexOf = function (e, t, n) {
                    return y(this, e, t, n, !0);
                }),
                (a.prototype.lastIndexOf = function (e, t, n) {
                    return y(this, e, t, n, !1);
                }),
                (a.prototype.write = function (e, t, n, r) {
                    var i, o, s, a, c, u, l, p;
                    if (void 0 === t) (r = "utf8"), (n = this.length), (t = 0);
                    else if (void 0 === n && "string" == typeof t) (r = t), (n = this.length), (t = 0);
                    else if (isFinite(t)) (t >>>= 0), isFinite(n) ? ((n >>>= 0), void 0 === r && (r = "utf8")) : ((r = n), (n = void 0));
                    else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                    let f = this.length - t;
                    if (((void 0 === n || n > f) && (n = f), (e.length > 0 && (n < 0 || t < 0)) || t > this.length)) throw RangeError("Attempt to write outside buffer bounds");
                    r || (r = "utf8");
                    let h = !1;
                    for (; ;)
                        switch (r) {
                            case "hex":
                                return (function (e, t, n, r) {
                                    let i;
                                    n = Number(n) || 0;
                                    let o = e.length - n;
                                    r ? (r = Number(r)) > o && (r = o) : (r = o);
                                    let s = t.length;
                                    for (r > s / 2 && (r = s / 2), i = 0; i < r; ++i) {
                                        let r = parseInt(t.substr(2 * i, 2), 16);
                                        if (r != r) break;
                                        e[n + i] = r;
                                    }
                                    return i;
                                })(this, e, t, n);
                            case "utf8":
                            case "utf-8":
                                return (i = t), (o = n), B(R(e, this.length - i), this, i, o);
                            case "ascii":
                            case "latin1":
                            case "binary":
                                return (
                                    (s = t),
                                    (a = n),
                                    B(
                                        (function (e) {
                                            let t = [];
                                            for (let n = 0; n < e.length; ++n) t.push(255 & e.charCodeAt(n));
                                            return t;
                                        })(e),
                                        this,
                                        s,
                                        a
                                    )
                                );
                            case "base64":
                                return (c = t), (u = n), B(N(e), this, c, u);
                            case "ucs2":
                            case "ucs-2":
                            case "utf16le":
                            case "utf-16le":
                                return (
                                    (l = t),
                                    (p = n),
                                    B(
                                        (function (e, t) {
                                            let n, r;
                                            let i = [];
                                            for (let o = 0; o < e.length && !((t -= 2) < 0); ++o) (r = (n = e.charCodeAt(o)) >> 8), i.push(n % 256), i.push(r);
                                            return i;
                                        })(e, this.length - l),
                                        this,
                                        l,
                                        p
                                    )
                                );
                            default:
                                if (h) throw TypeError("Unknown encoding: " + r);
                                (r = ("" + r).toLowerCase()), (h = !0);
                        }
                }),
                (a.prototype.toJSON = function () {
                    return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
                }),
                (a.prototype.slice = function (e, t) {
                    let n = this.length;
                    (e = ~~e), (t = void 0 === t ? n : ~~t), e < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n), t < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n), t < e && (t = e);
                    let r = this.subarray(e, t);
                    return Object.setPrototypeOf(r, a.prototype), r;
                }),
                (a.prototype.readUintLE = a.prototype.readUIntLE = function (e, t, n) {
                    (e >>>= 0), (t >>>= 0), n || v(e, t, this.length);
                    let r = this[e],
                        i = 1,
                        o = 0;
                    for (; ++o < t && (i *= 256);) r += this[e + o] * i;
                    return r;
                }),
                (a.prototype.readUintBE = a.prototype.readUIntBE = function (e, t, n) {
                    (e >>>= 0), (t >>>= 0), n || v(e, t, this.length);
                    let r = this[e + --t],
                        i = 1;
                    for (; t > 0 && (i *= 256);) r += this[e + --t] * i;
                    return r;
                }),
                (a.prototype.readUint8 = a.prototype.readUInt8 = function (e, t) {
                    return (e >>>= 0), t || v(e, 1, this.length), this[e];
                }),
                (a.prototype.readUint16LE = a.prototype.readUInt16LE = function (e, t) {
                    return (e >>>= 0), t || v(e, 2, this.length), this[e] | (this[e + 1] << 8);
                }),
                (a.prototype.readUint16BE = a.prototype.readUInt16BE = function (e, t) {
                    return (e >>>= 0), t || v(e, 2, this.length), (this[e] << 8) | this[e + 1];
                }),
                (a.prototype.readUint32LE = a.prototype.readUInt32LE = function (e, t) {
                    return (e >>>= 0), t || v(e, 4, this.length), (this[e] | (this[e + 1] << 8) | (this[e + 2] << 16)) + 16777216 * this[e + 3];
                }),
                (a.prototype.readUint32BE = a.prototype.readUInt32BE = function (e, t) {
                    return (e >>>= 0), t || v(e, 4, this.length), 16777216 * this[e] + ((this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3]);
                }),
                (a.prototype.readBigUInt64LE = U(function (e) {
                    F((e >>>= 0), "offset");
                    let t = this[e],
                        n = this[e + 7];
                    (void 0 === t || void 0 === n) && O(e, this.length - 8);
                    let r = t + 256 * this[++e] + 65536 * this[++e] + 16777216 * this[++e],
                        i = this[++e] + 256 * this[++e] + 65536 * this[++e] + 16777216 * n;
                    return BigInt(r) + (BigInt(i) << BigInt(32));
                })),
                (a.prototype.readBigUInt64BE = U(function (e) {
                    F((e >>>= 0), "offset");
                    let t = this[e],
                        n = this[e + 7];
                    (void 0 === t || void 0 === n) && O(e, this.length - 8);
                    let r = 16777216 * t + 65536 * this[++e] + 256 * this[++e] + this[++e],
                        i = 16777216 * this[++e] + 65536 * this[++e] + 256 * this[++e] + n;
                    return (BigInt(r) << BigInt(32)) + BigInt(i);
                })),
                (a.prototype.readIntLE = function (e, t, n) {
                    (e >>>= 0), (t >>>= 0), n || v(e, t, this.length);
                    let r = this[e],
                        i = 1,
                        o = 0;
                    for (; ++o < t && (i *= 256);) r += this[e + o] * i;
                    return r >= (i *= 128) && (r -= Math.pow(2, 8 * t)), r;
                }),
                (a.prototype.readIntBE = function (e, t, n) {
                    (e >>>= 0), (t >>>= 0), n || v(e, t, this.length);
                    let r = t,
                        i = 1,
                        o = this[e + --r];
                    for (; r > 0 && (i *= 256);) o += this[e + --r] * i;
                    return o >= (i *= 128) && (o -= Math.pow(2, 8 * t)), o;
                }),
                (a.prototype.readInt8 = function (e, t) {
                    return ((e >>>= 0), t || v(e, 1, this.length), 128 & this[e]) ? -((255 - this[e] + 1) * 1) : this[e];
                }),
                (a.prototype.readInt16LE = function (e, t) {
                    (e >>>= 0), t || v(e, 2, this.length);
                    let n = this[e] | (this[e + 1] << 8);
                    return 32768 & n ? 4294901760 | n : n;
                }),
                (a.prototype.readInt16BE = function (e, t) {
                    (e >>>= 0), t || v(e, 2, this.length);
                    let n = this[e + 1] | (this[e] << 8);
                    return 32768 & n ? 4294901760 | n : n;
                }),
                (a.prototype.readInt32LE = function (e, t) {
                    return (e >>>= 0), t || v(e, 4, this.length), this[e] | (this[e + 1] << 8) | (this[e + 2] << 16) | (this[e + 3] << 24);
                }),
                (a.prototype.readInt32BE = function (e, t) {
                    return (e >>>= 0), t || v(e, 4, this.length), (this[e] << 24) | (this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3];
                }),
                (a.prototype.readBigInt64LE = U(function (e) {
                    F((e >>>= 0), "offset");
                    let t = this[e],
                        n = this[e + 7];
                    return (
                        (void 0 === t || void 0 === n) && O(e, this.length - 8),
                        (BigInt(this[e + 4] + 256 * this[e + 5] + 65536 * this[e + 6] + (n << 24)) << BigInt(32)) + BigInt(t + 256 * this[++e] + 65536 * this[++e] + 16777216 * this[++e])
                    );
                })),
                (a.prototype.readBigInt64BE = U(function (e) {
                    F((e >>>= 0), "offset");
                    let t = this[e],
                        n = this[e + 7];
                    return (
                        (void 0 === t || void 0 === n) && O(e, this.length - 8), (BigInt((t << 24) + 65536 * this[++e] + 256 * this[++e] + this[++e]) << BigInt(32)) + BigInt(16777216 * this[++e] + 65536 * this[++e] + 256 * this[++e] + n)
                    );
                })),
                (a.prototype.readFloatLE = function (e, t) {
                    return (e >>>= 0), t || v(e, 4, this.length), i.read(this, e, !0, 23, 4);
                }),
                (a.prototype.readFloatBE = function (e, t) {
                    return (e >>>= 0), t || v(e, 4, this.length), i.read(this, e, !1, 23, 4);
                }),
                (a.prototype.readDoubleLE = function (e, t) {
                    return (e >>>= 0), t || v(e, 8, this.length), i.read(this, e, !0, 52, 8);
                }),
                (a.prototype.readDoubleBE = function (e, t) {
                    return (e >>>= 0), t || v(e, 8, this.length), i.read(this, e, !1, 52, 8);
                }),
                (a.prototype.writeUintLE = a.prototype.writeUIntLE = function (e, t, n, r) {
                    if (((e = +e), (t >>>= 0), (n >>>= 0), !r)) {
                        let r = Math.pow(2, 8 * n) - 1;
                        S(this, e, t, n, r, 0);
                    }
                    let i = 1,
                        o = 0;
                    for (this[t] = 255 & e; ++o < n && (i *= 256);) this[t + o] = (e / i) & 255;
                    return t + n;
                }),
                (a.prototype.writeUintBE = a.prototype.writeUIntBE = function (e, t, n, r) {
                    if (((e = +e), (t >>>= 0), (n >>>= 0), !r)) {
                        let r = Math.pow(2, 8 * n) - 1;
                        S(this, e, t, n, r, 0);
                    }
                    let i = n - 1,
                        o = 1;
                    for (this[t + i] = 255 & e; --i >= 0 && (o *= 256);) this[t + i] = (e / o) & 255;
                    return t + n;
                }),
                (a.prototype.writeUint8 = a.prototype.writeUInt8 = function (e, t, n) {
                    return (e = +e), (t >>>= 0), n || S(this, e, t, 1, 255, 0), (this[t] = 255 & e), t + 1;
                }),
                (a.prototype.writeUint16LE = a.prototype.writeUInt16LE = function (e, t, n) {
                    return (e = +e), (t >>>= 0), n || S(this, e, t, 2, 65535, 0), (this[t] = 255 & e), (this[t + 1] = e >>> 8), t + 2;
                }),
                (a.prototype.writeUint16BE = a.prototype.writeUInt16BE = function (e, t, n) {
                    return (e = +e), (t >>>= 0), n || S(this, e, t, 2, 65535, 0), (this[t] = e >>> 8), (this[t + 1] = 255 & e), t + 2;
                }),
                (a.prototype.writeUint32LE = a.prototype.writeUInt32LE = function (e, t, n) {
                    return (e = +e), (t >>>= 0), n || S(this, e, t, 4, 4294967295, 0), (this[t + 3] = e >>> 24), (this[t + 2] = e >>> 16), (this[t + 1] = e >>> 8), (this[t] = 255 & e), t + 4;
                }),
                (a.prototype.writeUint32BE = a.prototype.writeUInt32BE = function (e, t, n) {
                    return (e = +e), (t >>>= 0), n || S(this, e, t, 4, 4294967295, 0), (this[t] = e >>> 24), (this[t + 1] = e >>> 16), (this[t + 2] = e >>> 8), (this[t + 3] = 255 & e), t + 4;
                }),
                (a.prototype.writeBigUInt64LE = U(function (e, t = 0) {
                    return E(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
                })),
                (a.prototype.writeBigUInt64BE = U(function (e, t = 0) {
                    return x(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
                })),
                (a.prototype.writeIntLE = function (e, t, n, r) {
                    if (((e = +e), (t >>>= 0), !r)) {
                        let r = Math.pow(2, 8 * n - 1);
                        S(this, e, t, n, r - 1, -r);
                    }
                    let i = 0,
                        o = 1,
                        s = 0;
                    for (this[t] = 255 & e; ++i < n && (o *= 256);) e < 0 && 0 === s && 0 !== this[t + i - 1] && (s = 1), (this[t + i] = (((e / o) >> 0) - s) & 255);
                    return t + n;
                }),
                (a.prototype.writeIntBE = function (e, t, n, r) {
                    if (((e = +e), (t >>>= 0), !r)) {
                        let r = Math.pow(2, 8 * n - 1);
                        S(this, e, t, n, r - 1, -r);
                    }
                    let i = n - 1,
                        o = 1,
                        s = 0;
                    for (this[t + i] = 255 & e; --i >= 0 && (o *= 256);) e < 0 && 0 === s && 0 !== this[t + i + 1] && (s = 1), (this[t + i] = (((e / o) >> 0) - s) & 255);
                    return t + n;
                }),
                (a.prototype.writeInt8 = function (e, t, n) {
                    return (e = +e), (t >>>= 0), n || S(this, e, t, 1, 127, -128), e < 0 && (e = 255 + e + 1), (this[t] = 255 & e), t + 1;
                }),
                (a.prototype.writeInt16LE = function (e, t, n) {
                    return (e = +e), (t >>>= 0), n || S(this, e, t, 2, 32767, -32768), (this[t] = 255 & e), (this[t + 1] = e >>> 8), t + 2;
                }),
                (a.prototype.writeInt16BE = function (e, t, n) {
                    return (e = +e), (t >>>= 0), n || S(this, e, t, 2, 32767, -32768), (this[t] = e >>> 8), (this[t + 1] = 255 & e), t + 2;
                }),
                (a.prototype.writeInt32LE = function (e, t, n) {
                    return (e = +e), (t >>>= 0), n || S(this, e, t, 4, 2147483647, -2147483648), (this[t] = 255 & e), (this[t + 1] = e >>> 8), (this[t + 2] = e >>> 16), (this[t + 3] = e >>> 24), t + 4;
                }),
                (a.prototype.writeInt32BE = function (e, t, n) {
                    return (e = +e), (t >>>= 0), n || S(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), (this[t] = e >>> 24), (this[t + 1] = e >>> 16), (this[t + 2] = e >>> 8), (this[t + 3] = 255 & e), t + 4;
                }),
                (a.prototype.writeBigInt64LE = U(function (e, t = 0) {
                    return E(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
                })),
                (a.prototype.writeBigInt64BE = U(function (e, t = 0) {
                    return x(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
                })),
                (a.prototype.writeFloatLE = function (e, t, n) {
                    return _(this, e, t, !0, n);
                }),
                (a.prototype.writeFloatBE = function (e, t, n) {
                    return _(this, e, t, !1, n);
                }),
                (a.prototype.writeDoubleLE = function (e, t, n) {
                    return j(this, e, t, !0, n);
                }),
                (a.prototype.writeDoubleBE = function (e, t, n) {
                    return j(this, e, t, !1, n);
                }),
                (a.prototype.copy = function (e, t, n, r) {
                    if (!a.isBuffer(e)) throw TypeError("argument should be a Buffer");
                    if ((n || (n = 0), r || 0 === r || (r = this.length), t >= e.length && (t = e.length), t || (t = 0), r > 0 && r < n && (r = n), r === n || 0 === e.length || 0 === this.length)) return 0;
                    if (t < 0) throw RangeError("targetStart out of bounds");
                    if (n < 0 || n >= this.length) throw RangeError("Index out of range");
                    if (r < 0) throw RangeError("sourceEnd out of bounds");
                    r > this.length && (r = this.length), e.length - t < r - n && (r = e.length - t + n);
                    let i = r - n;
                    return this === e && "function" == typeof Uint8Array.prototype.copyWithin ? this.copyWithin(t, n, r) : Uint8Array.prototype.set.call(e, this.subarray(n, r), t), i;
                }),
                (a.prototype.fill = function (e, t, n, r) {
                    let i;
                    if ("string" == typeof e) {
                        if (("string" == typeof t ? ((r = t), (t = 0), (n = this.length)) : "string" == typeof n && ((r = n), (n = this.length)), void 0 !== r && "string" != typeof r)) throw TypeError("encoding must be a string");
                        if ("string" == typeof r && !a.isEncoding(r)) throw TypeError("Unknown encoding: " + r);
                        if (1 === e.length) {
                            let t = e.charCodeAt(0);
                            (("utf8" === r && t < 128) || "latin1" === r) && (e = t);
                        }
                    } else "number" == typeof e ? (e &= 255) : "boolean" == typeof e && (e = Number(e));
                    if (t < 0 || this.length < t || this.length < n) throw RangeError("Out of range index");
                    if (n <= t) return this;
                    if (((t >>>= 0), (n = void 0 === n ? this.length : n >>> 0), e || (e = 0), "number" == typeof e)) for (i = t; i < n; ++i) this[i] = e;
                    else {
                        let o = a.isBuffer(e) ? e : a.from(e, r),
                            s = o.length;
                        if (0 === s) throw TypeError('The value "' + e + '" is invalid for argument "value"');
                        for (i = 0; i < n - t; ++i) this[i + t] = o[i % s];
                    }
                    return this;
                });
            let I = {};
            function T(e, t, n) {
                I[e] = class extends n {
                    constructor() {
                        super(), Object.defineProperty(this, "message", { value: t.apply(this, arguments), writable: !0, configurable: !0 }), (this.name = `${this.name} [${e}]`), this.stack, delete this.name;
                    }
                    get code() {
                        return e;
                    }
                    set code(e) {
                        Object.defineProperty(this, "code", { configurable: !0, enumerable: !0, value: e, writable: !0 });
                    }
                    toString() {
                        return `${this.name} [${e}]: ${this.message}`;
                    }
                };
            }
            function P(e) {
                let t = "",
                    n = e.length,
                    r = "-" === e[0] ? 1 : 0;
                for (; n >= r + 4; n -= 3) t = `_${e.slice(n - 3, n)}${t}`;
                return `${e.slice(0, n)}${t}`;
            }
            function C(e, t, n, r, i, o) {
                if (e > n || e < t) {
                    let r;
                    let i = "bigint" == typeof t ? "n" : "";
                    throw (
                        ((r = o > 3 ? (0 === t || t === BigInt(0) ? `>= 0${i} and < 2${i} ** ${(o + 1) * 8}${i}` : `>= -(2${i} ** ${(o + 1) * 8 - 1}${i}) and < 2 ** ${(o + 1) * 8 - 1}${i}`) : `>= ${t}${i} and <= ${n}${i}`),
                            new I.ERR_OUT_OF_RANGE("value", r, e))
                    );
                }
                F(i, "offset"), (void 0 === r[i] || void 0 === r[i + o]) && O(i, r.length - (o + 1));
            }
            function F(e, t) {
                if ("number" != typeof e) throw new I.ERR_INVALID_ARG_TYPE(t, "number", e);
            }
            function O(e, t, n) {
                if (Math.floor(e) !== e) throw (F(e, n), new I.ERR_OUT_OF_RANGE(n || "offset", "an integer", e));
                if (t < 0) throw new I.ERR_BUFFER_OUT_OF_BOUNDS();
                throw new I.ERR_OUT_OF_RANGE(n || "offset", `>= ${n ? 1 : 0} and <= ${t}`, e);
            }
            T(
                "ERR_BUFFER_OUT_OF_BOUNDS",
                function (e) {
                    return e ? `${e} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
                },
                RangeError
            ),
                T(
                    "ERR_INVALID_ARG_TYPE",
                    function (e, t) {
                        return `The "${e}" argument must be of type number. Received type ${typeof t}`;
                    },
                    TypeError
                ),
                T(
                    "ERR_OUT_OF_RANGE",
                    function (e, t, n) {
                        let r = `The value of "${e}" is out of range.`,
                            i = n;
                        return (
                            Number.isInteger(n) && Math.abs(n) > 4294967296 ? (i = P(String(n))) : "bigint" == typeof n && ((i = String(n)), (n > BigInt(2) ** BigInt(32) || n < -(BigInt(2) ** BigInt(32))) && (i = P(i)), (i += "n")),
                            (r += ` It must be ${t}. Received ${i}`)
                        );
                    },
                    RangeError
                );
            let A = /[^+/0-9A-Za-z-_]/g;
            function R(e, t) {
                let n;
                t = t || 1 / 0;
                let r = e.length,
                    i = null,
                    o = [];
                for (let s = 0; s < r; ++s) {
                    if ((n = e.charCodeAt(s)) > 55295 && n < 57344) {
                        if (!i) {
                            if (n > 56319 || s + 1 === r) {
                                (t -= 3) > -1 && o.push(239, 191, 189);
                                continue;
                            }
                            i = n;
                            continue;
                        }
                        if (n < 56320) {
                            (t -= 3) > -1 && o.push(239, 191, 189), (i = n);
                            continue;
                        }
                        n = (((i - 55296) << 10) | (n - 56320)) + 65536;
                    } else i && (t -= 3) > -1 && o.push(239, 191, 189);
                    if (((i = null), n < 128)) {
                        if ((t -= 1) < 0) break;
                        o.push(n);
                    } else if (n < 2048) {
                        if ((t -= 2) < 0) break;
                        o.push((n >> 6) | 192, (63 & n) | 128);
                    } else if (n < 65536) {
                        if ((t -= 3) < 0) break;
                        o.push((n >> 12) | 224, ((n >> 6) & 63) | 128, (63 & n) | 128);
                    } else if (n < 1114112) {
                        if ((t -= 4) < 0) break;
                        o.push((n >> 18) | 240, ((n >> 12) & 63) | 128, ((n >> 6) & 63) | 128, (63 & n) | 128);
                    } else throw Error("Invalid code point");
                }
                return o;
            }
            function N(e) {
                return r.toByteArray(
                    (function (e) {
                        if ((e = (e = e.split("=")[0]).trim().replace(A, "")).length < 2) return "";
                        for (; e.length % 4 != 0;) e += "=";
                        return e;
                    })(e)
                );
            }
            function B(e, t, n, r) {
                let i;
                for (i = 0; i < r && !(i + n >= t.length) && !(i >= e.length); ++i) t[i + n] = e[i];
                return i;
            }
            function L(e, t) {
                return e instanceof t || (null != e && null != e.constructor && null != e.constructor.name && e.constructor.name === t.name);
            }
            let D = (function () {
                let e = "0123456789abcdef",
                    t = Array(256);
                for (let n = 0; n < 16; ++n) {
                    let r = 16 * n;
                    for (let i = 0; i < 16; ++i) t[r + i] = e[n] + e[i];
                }
                return t;
            })();
            function U(e) {
                return "undefined" == typeof BigInt ? M : e;
            }
            function M() {
                throw Error("BigInt not supported");
            }
        },
        80645: function (e, t) {
              /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ (t.read = function (e, t, n, r, i) {
                var o,
                    s,
                    a = 8 * i - r - 1,
                    c = (1 << a) - 1,
                    u = c >> 1,
                    l = -7,
                    p = n ? i - 1 : 0,
                    f = n ? -1 : 1,
                    h = e[t + p];
                for (p += f, o = h & ((1 << -l) - 1), h >>= -l, l += a; l > 0; o = 256 * o + e[t + p], p += f, l -= 8);
                for (s = o & ((1 << -l) - 1), o >>= -l, l += r; l > 0; s = 256 * s + e[t + p], p += f, l -= 8);
                if (0 === o) o = 1 - u;
                else {
                    if (o === c) return s ? NaN : (1 / 0) * (h ? -1 : 1);
                    (s += Math.pow(2, r)), (o -= u);
                }
                return (h ? -1 : 1) * s * Math.pow(2, o - r);
            }),
                (t.write = function (e, t, n, r, i, o) {
                    var s,
                        a,
                        c,
                        u = 8 * o - i - 1,
                        l = (1 << u) - 1,
                        p = l >> 1,
                        f = 23 === i ? 5960464477539062e-23 : 0,
                        h = r ? 0 : o - 1,
                        d = r ? 1 : -1,
                        m = t < 0 || (0 === t && 1 / t < 0) ? 1 : 0;
                    for (
                        isNaN((t = Math.abs(t))) || t === 1 / 0
                            ? ((a = isNaN(t) ? 1 : 0), (s = l))
                            : ((s = Math.floor(Math.log(t) / Math.LN2)),
                                t * (c = Math.pow(2, -s)) < 1 && (s--, (c *= 2)),
                                s + p >= 1 ? (t += f / c) : (t += f * Math.pow(2, 1 - p)),
                                t * c >= 2 && (s++, (c /= 2)),
                                s + p >= l ? ((a = 0), (s = l)) : s + p >= 1 ? ((a = (t * c - 1) * Math.pow(2, i)), (s += p)) : ((a = t * Math.pow(2, p - 1) * Math.pow(2, i)), (s = 0)));
                        i >= 8;
                        e[n + h] = 255 & a, h += d, a /= 256, i -= 8
                    );
                    for (s = (s << i) | a, u += i; u > 0; e[n + h] = 255 & s, h += d, s /= 256, u -= 8);
                    e[n + h - d] |= 128 * m;
                });
        },
        22662: function (e, t, n) {
            var r = n(34155);
            let { hasOwnProperty: i } = Object.prototype,
                o = (e, t = {}) => {
                    "string" == typeof t && (t = { section: t }),
                        (t.align = !0 === t.align),
                        (t.newline = !0 === t.newline),
                        (t.sort = !0 === t.sort),
                        (t.whitespace = !0 === t.whitespace || !0 === t.align),
                        (t.platform = t.platform || (void 0 !== r && r.platform)),
                        (t.bracketedArray = !1 !== t.bracketedArray);
                    let n = "win32" === t.platform ? "\r\n" : "\n",
                        i = t.whitespace ? " = " : "=",
                        a = [],
                        c = t.sort ? Object.keys(e).sort() : Object.keys(e),
                        l = 0;
                    t.align &&
                        (l = u(
                            c
                                .filter((t) => null === e[t] || Array.isArray(e[t]) || "object" != typeof e[t])
                                .map((t) => (Array.isArray(e[t]) ? `${t}[]` : t))
                                .concat([""])
                                .reduce((e, t) => (u(e).length >= u(t).length ? e : t))
                        ).length);
                    let p = "",
                        f = t.bracketedArray ? "[]" : "";
                    for (let t of c) {
                        let r = e[t];
                        if (r && Array.isArray(r)) for (let e of r) p += u(`${t}${f}`).padEnd(l, " ") + i + u(e) + n;
                        else r && "object" == typeof r ? a.push(t) : (p += u(t).padEnd(l, " ") + i + u(r) + n);
                    }
                    for (let r of (t.section && p.length && (p = "[" + u(t.section) + "]" + (t.newline ? n + n : n) + p), a)) {
                        let i = s(r, ".").join("\\."),
                            a = (t.section ? t.section + "." : "") + i,
                            c = o(e[r], { ...t, section: a });
                        p.length && c.length && (p += n), (p += c);
                    }
                    return p;
                };
            function s(e, t) {
                var n = 0,
                    r = 0,
                    i = 0,
                    o = [];
                do
                    if (-1 !== (i = e.indexOf(t, n))) {
                        if (((n = i + t.length), i > 0 && "\\" === e[i - 1])) continue;
                        o.push(e.slice(r, i)), (r = i + t.length);
                    }
                while (-1 !== i);
                return o.push(e.slice(r)), o;
            }
            let a = (e, t = {}) => {
                t.bracketedArray = !1 !== t.bracketedArray;
                let n = Object.create(null),
                    r = n,
                    o = null,
                    a = /^\[([^\]]*)\]\s*$|^([^=]+)(=(.*))?$/i,
                    c = e.split(/[\r\n]+/g),
                    u = {};
                for (let e of c) {
                    let s;
                    if (!e || e.match(/^\s*[;#]/) || e.match(/^\s*$/)) continue;
                    let c = e.match(a);
                    if (!c) continue;
                    if (void 0 !== c[1]) {
                        if ("__proto__" === (o = l(c[1]))) {
                            r = Object.create(null);
                            continue;
                        }
                        r = n[o] = n[o] || Object.create(null);
                        continue;
                    }
                    let p = l(c[2]);
                    t.bracketedArray ? (s = p.length > 2 && "[]" === p.slice(-2)) : ((u[p] = (u?.[p] || 0) + 1), (s = u[p] > 1));
                    let f = s ? p.slice(0, -2) : p;
                    if ("__proto__" === f) continue;
                    let h = !c[3] || l(c[4]),
                        d = "true" === h || "false" === h || "null" === h ? JSON.parse(h) : h;
                    s && (i.call(r, f) ? Array.isArray(r[f]) || (r[f] = [r[f]]) : (r[f] = [])), Array.isArray(r[f]) ? r[f].push(d) : (r[f] = d);
                }
                let p = [];
                for (let e of Object.keys(n)) {
                    if (!i.call(n, e) || "object" != typeof n[e] || Array.isArray(n[e])) continue;
                    let t = s(e, ".");
                    r = n;
                    let o = t.pop(),
                        a = o.replace(/\\\./g, ".");
                    for (let e of t) "__proto__" !== e && ((i.call(r, e) && "object" == typeof r[e]) || (r[e] = Object.create(null)), (r = r[e]));
                    (r !== n || a !== o) && ((r[a] = n[e]), p.push(e));
                }
                for (let e of p) delete n[e];
                return n;
            },
                c = (e) => (e.startsWith('"') && e.endsWith('"')) || (e.startsWith("'") && e.endsWith("'")),
                u = (e) => ("string" != typeof e || e.match(/[=\r\n]/) || e.match(/^\[/) || (e.length > 1 && c(e)) || e !== e.trim() ? JSON.stringify(e) : e.split(";").join("\\;").split("#").join("\\#")),
                l = (e) => {
                    if (c((e = (e || "").trim()))) {
                        "'" === e.charAt(0) && (e = e.slice(1, -1));
                        try {
                            e = JSON.parse(e);
                        } catch { }
                    } else {
                        let t = !1,
                            n = "";
                        for (let r = 0, i = e.length; r < i; r++) {
                            let i = e.charAt(r);
                            if (t) -1 !== "\\;#".indexOf(i) ? (n += i) : (n += "\\" + i), (t = !1);
                            else if (-1 !== ";#".indexOf(i)) break;
                            else "\\" === i ? (t = !0) : (n += i);
                        }
                        return t && (n += "\\"), n.trim();
                    }
                    return e;
                };
            e.exports = { parse: a, decode: a, stringify: o, encode: o, safe: u, unsafe: l };
        },
        6840: function (e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                "/_app",
                function () {
                    return n(64812);
                },
            ]);
        },
        61929: function (e, t, n) {
            "use strict";
            n.d(t, {
                FY: function () {
                    return r;
                },
                Hi: function () {
                    return u;
                },
                J1: function () {
                    return i;
                },
                KM: function () {
                    return c;
                },
                Pk: function () {
                    return o;
                },
                hG: function () {
                    return s;
                },
                s6: function () {
                    return a;
                },
            });
            let r = { icon: "/System/Icons/Favicons/dino.webp", name: "T-Rex Chrome Dino Game", path: "/ProgramFiles/Browser/dino/index.html", url: "chrome://dino" },
                i = { icon: "./System/Icons/Favicons/32x32/rdi-social.webp", name: " Entry Form", path: "/CloudSolutions.Surveys.DesktopSimulator/simulator/rdiform.html", url: "chrome://rdiform" },
                o = { icon: "./System/Icons/Favicons/32x32/salesreport.webp", name: "Sales Report", path: "/CloudSolutions.Surveys.DesktopSimulator/simulator/salesreport.html", url: "chrome://salesreport" },
                s = [i, o, { icon: "./System/Icons/Favicons/32x32/google.webp", name: "Google", url: "https://www.google.com/webhp?igu=1" }],
                a = "https://www.google.com/webhp?igu=1",
                c = new Set(["127.0.0.1", "localhost"]),
                u =
                    '<!DOCTYPE HTML PUBLIC "-//IETF//DTD HTML 2.0//EN"><html><head><title>404 Not Found</title><style>h1{display:inline;}</style></head><body><h1>Not Found</h1><p>The requested URL was not found on this server.</p></body></html>';
            // Debug the URL paths
            console.log("URL Paths:", s.map(item => item.path));

            // Check if the file exists at the expected path
            fetch(i.path)
                .then(response => {
                    if (response.ok) {
                        console.log("RDI Form found at:", i.path);
                    } else {
                        console.error("RDI Form not found at:", i.path, "Status:", response.status);
                    }
                })
                .catch(error => console.error("Error fetching RDI Form:", error));
        },
        52757: function (e, t, n) {
            "use strict";
            n.d(t, {
                P: function () {
                    return r;
                },
            });
            let r = {
                "Atari 2600": { core: "atari2600", ext: [".a26"] },
                "Atari 5200": { core: "atari5200", ext: [".a52"] },
                "Atari 7800": { core: "atari7800", ext: [".a78"] },
                "Atari Jaguar": { core: "jaguar", ext: [".j64", ".jag"] },
                "Atari Lynx": { core: "lynx", ext: [".lnx"] },
                "Neo Geo Pocket": { core: "ngp", ext: [".ngc", ".ngp"] },
                "Nintendo 64": { core: "n64", ext: [".n64", ".v64", ".z64"] },
                "Nintendo DS": { core: "nds", ext: [".nds"] },
                "Nintendo Entertainment System": { core: "nes", ext: [".nes"] },
                "Nintendo Game Boy": { core: "gb", ext: [".gb"] },
                "Nintendo Game Boy Advance": { core: "gba", ext: [".gba"] },
                "Nintendo Game Boy Color": { core: "gb", ext: [".gbc"] },
                "PC Engine": { core: "pce", ext: [".pce"] },
                "Sega 32X": { core: "sega32x", ext: [".32x"] },
                "Sega Game Gear": { core: "segaGG", ext: [".gg"], zip: !0 },
                "Sega Genesis / Mega Drive": { core: "segaMD", ext: [".gen", ".md", ".smd"] },
                "Sega Master System": { core: "segaMS", ext: [".sms"], zip: !0 },
                "Super Nintendo Entertainment System": { core: "snes", ext: [".sfc", ".smc"] },
                "Virtual Boy": { core: "vb", ext: [".vb", ".vboy"] },
                WonderSwam: { core: "ws", ext: [".ws", ".wsc"] },
            };
        },
        96353: function (e, t, n) {
            "use strict";
            n.d(t, {
                _: function () {
                    return r;
                },
            });
            let r = new Set([
                ".abap",
                ".aes",
                ".ascx",
                ".asp",
                ".aspx",
                ".azcli",
                ".babelrc",
                ".bash",
                ".bat",
                ".bicep",
                ".bowerrc",
                ".c",
                ".cake",
                ".cc",
                ".clj",
                ".cljc",
                ".cljs",
                ".cls",
                ".cmd",
                ".coffee",
                ".config",
                ".cpp",
                ".cpy",
                ".cs",
                ".cshtml",
                ".csproj",
                ".css",
                ".csx",
                ".ctp",
                ".cxx",
                ".dart",
                ".dats",
                ".dax",
                ".dockerfile",
                ".dtd",
                ".ecl",
                ".edn",
                ".es6",
                ".eslintrc",
                ".ex",
                ".exs",
                ".flow",
                ".fs",
                ".fsi",
                ".fsscript",
                ".fsx",
                ".gemspec",
                ".gitconfig",
                ".go",
                ".gql",
                ".graphql",
                ".gyp",
                ".gypi",
                ".h",
                ".handlebars",
                ".har",
                ".hats",
                ".hbs",
                ".hcl",
                ".hh",
                ".hpp",
                ".htm",
                ".html",
                ".html.liquid",
                ".hxx",
                ".i3",
                ".iecplc",
                ".iecst",
                ".ig",
                ".ini",
                ".jade",
                ".jav",
                ".java",
                ".jl",
                ".js",
                ".jscsrc",
                ".jshintrc",
                ".jshtm",
                ".json",
                ".jsp",
                ".jsx",
                ".kt",
                ".lc3lib",
                ".less",
                ".lex",
                ".ligo",
                ".liquid",
                ".lua",
                ".m",
                ".m3",
                ".markdown",
                ".md",
                ".mdoc",
                ".mdown",
                ".mdtext",
                ".mdtxt",
                ".mdwn",
                ".mg",
                ".mjs",
                ".mkd",
                ".mkdn",
                ".ml",
                ".mli",
                ".mligo",
                ".msdax",
                ".opf",
                ".p",
                ".pas",
                ".php",
                ".php4",
                ".php5",
                ".phtml",
                ".pl",
                ".pla",
                ".pp",
                ".pp",
                ".pq",
                ".pqm",
                ".properties",
                ".proto",
                ".ps1",
                ".psd1",
                ".psm1",
                ".pug",
                ".py",
                ".pyw",
                ".qs",
                ".r",
                ".rb",
                ".rbx",
                ".redis",
                ".rhistory",
                ".rjs",
                ".rkt",
                ".rlib",
                ".rmd",
                ".rprofile",
                ".rpy",
                ".rq",
                ".rs",
                ".rst",
                ".rt",
                ".s",
                ".sats",
                ".sb",
                ".sbt",
                ".sc",
                ".scala",
                ".sch",
                ".scm",
                ".scss",
                ".sh",
                ".shtml",
                ".sol",
                ".sql",
                ".ss",
                ".st",
                ".sv",
                ".svg",
                ".svgz",
                ".svh",
                ".swift",
                ".tcl",
                ".tf",
                ".tfvars",
                ".ts",
                ".tsx",
                ".twig",
                ".txt",
                ".v",
                ".vb",
                ".vh",
                ".wxi",
                ".wxl",
                ".wxs",
                ".xaml",
                ".xhtml",
                ".xml",
                ".xsl",
                ".yaml",
                ".yml",
            ]);
        },
        17535: function (e, t, n) {
            "use strict";
            n.d(t, {
                S: function () {
                    return i;
                },
            });
            var r = n(67294);
            class i extends r.Component {
                constructor(e) {
                    super(e), (this.state = { hasError: !1 });
                }
                shouldComponentUpdate() {
                    return !1;
                }
                static getDerivedStateFromError() {
                    return { hasError: !0 };
                }
                render() {
                    let {
                        props: { children: e, FallbackRender: t },
                        state: { hasError: n },
                    } = this;
                    return !n || t || "__nextDevClientId" in window || window.location.reload(), n ? t : e;
                }
            }
        },
        59746: function (e, t, n) {
            "use strict";
            var r = n(67294),
                i = n(6155),
                o = n(20063),
                s = n(58437),
                a = n(86178),
                c = n(97836),
                u = n(6484);
            t.Z = () => {
                let { argument: e, open: t } = (0, s.z)(),
                    n = (0, a.R)(),
                    { readFile: l } = (0, o.o)(),
                    p = (0, r.useRef)();
                return (
                    (0, r.useEffect)(() => {
                        p.current = (e) =>
                            Object.keys(n.current).find((t) => {
                                let [n, r] = t.split(c.CC);
                                return "Transfer" === n && e === r;
                            }) || "";
                    }, [n]),
                    (0, r.useMemo)(
                        () => ({
                            openTransferDialog: async (n, r) => {
                                if (n?.length !== 0) {
                                    if (n && r) {
                                        let t = p.current?.(r);
                                        t && e(t, "fileReaders", n);
                                    } else {
                                        if (n?.length === 1 && !Array.isArray(n[0])) {
                                            let [{ directory: e, name: t }] = n;
                                            if ((0, u.RT)(t) === c.zm) {
                                                let { url: n } = (0, i.OE)(await l(t));
                                                if (n === e) return;
                                            }
                                        }
                                        t("Transfer", { fileReaders: n, url: r });
                                    }
                                }
                            },
                        }),
                        [e, t, l]
                    )
                );
            };
        },
        43950: function (e, t, n) {
            "use strict";
            var r = n(52757),
                i = n(97836);
            let o = {
                Application: { icon: "executable", process: ["BoxedWine", "JSDOS"], type: "Application" },
                AudioPlaylist: { icon: "audio", process: ["Webamp"], type: "Audio Playlist File" },
                DiscImage: { icon: "image", process: ["V86"], type: "Disc Image File" },
                Emulator: { icon: "emulator", process: ["Emulator"], type: "Game ROM File" },
                Font: { icon: "font", process: ["OpenType"], type: "Font File" },
                FutureSplash: { process: ["Ruffle"], type: "FutureSplash File" },
                GraphicsEditor: { process: ["Photos", "Paint"], type: "Picture File" },
                HtmlDocument: { process: ["Browser", ...i.yV], type: "HTML Document" },
                JsdosBundle: { icon: "jsdos", process: ["JSDOS", "FileExplorer"], type: "JSDOS Bundle" },
                Markdown: { icon: "marked", process: ["Marked", ...i.yV], type: "Markdown File" },
                MediaPlaylist: { process: ["VideoPlayer"], type: "Media Playlist File" },
                MountableDiscImage: { icon: "image", process: ["FileExplorer", "V86"], type: "Disc Image File" },
                Music: { icon: "audio", process: ["Webamp", "VideoPlayer"] },
                PdfDocument: { icon: "pdf", process: ["PDF"], type: "PDF Document" },
                PythonFile: { command: "py", icon: "python", process: ["Terminal", ...i.yV], type: "Python File" },
                ShockwaveFlash: { process: ["Ruffle"], type: "Shockwave Flash File" },
                SvgFile: { process: ["Photos", ...i.yV], type: "Scalable Vector Graphics File" },
                WasmFile: { command: "wapm", icon: "wapm", process: ["Terminal"], type: "WebAssembly Module File" },
                WinampSkin: { icon: "audio", process: ["Webamp", "FileExplorer"], type: "Winamp Skin File" },
                WysiwygHtmlDocument: { icon: "tinymce", process: ["TinyMCE", ...i.yV], type: "WYSIWYG HTML File" },
                ZipFile: { icon: "compressed", process: ["FileExplorer", "BoxedWine", "JSDOS"], type: "Compressed (zipped) Folder" },
            },
                s = {
                    ".asx": o.AudioPlaylist,
                    ".bin": o.DiscImage,
                    ".dsk": o.DiscImage,
                    ".exe": o.Application,
                    ".htm": o.HtmlDocument,
                    ".html": o.HtmlDocument,
                    ".img": o.DiscImage,
                    ".iso": o.MountableDiscImage,
                    ".jsdos": o.JsdosBundle,
                    ".m3u": o.AudioPlaylist,
                    ".m3u8": o.MediaPlaylist,
                    ".md": o.Markdown,
                    ".mp3": o.Music,
                    ".otf": o.Font,
                    ".pdf": o.PdfDocument,
                    ".pls": o.AudioPlaylist,
                    ".py": o.PythonFile,
                    ".rtf": o.WysiwygHtmlDocument,
                    ".spl": o.FutureSplash,
                    ".svg": o.SvgFile,
                    ".swf": o.ShockwaveFlash,
                    ".ttf": o.Font,
                    ".wasm": o.WasmFile,
                    ".whtml": o.WysiwygHtmlDocument,
                    ".woff": o.Font,
                    ".wsz": o.WinampSkin,
                    ".zip": o.ZipFile,
                },
                a = (e) => (t) => {
                    e.process && (s[t] ? s[t].process.push(...e.process) : (s[t] = e));
                };
            i.ru.forEach(a(o.GraphicsEditor)), Object.values(r.P).forEach(({ ext: e }) => e.forEach(a(o.Emulator))), (t.Z = s);
        },
        6155: function (e, t, n) {
            "use strict";
            n.d(t, {
                ZA: function () {
                    return k;
                },
                de: function () {
                    return C;
                },
                kv: function () {
                    return j;
                },
                cC: function () {
                    return x;
                },
                sK: function () {
                    return w;
                },
                nR: function () {
                    return y;
                },
                Z7: function () {
                    return P;
                },
                g7: function () {
                    return T;
                },
                bh: function () {
                    return S;
                },
                GA: function () {
                    return g;
                },
                Wd: function () {
                    return v;
                },
                OE: function () {
                    return E;
                },
                oc: function () {
                    return A;
                },
                CK: function () {
                    return m;
                },
                JI: function () {
                    return _;
                },
                X1: function () {
                    return O;
                },
            });
            var r = n(1864),
                i = n(22662),
                o = n.n(i),
                s = n(96353),
                a = n(43950),
                c = n(46508),
                u = n(18575),
                l = n(37176),
                p = n(97836),
                f = JSON.parse(
                    '{"/Users/Public/Desktop":{"My PC.url":{"BaseURL":"FileExplorer","Comment":"Shows the contents of the root folder.","IconFile":"./System/Icons/96x96/pc.webp","Type":"System","URL":"/"},"Public.url":{"BaseURL":"FileExplorer","IconFile":"./System/Icons/96x96/user.webp","Type":"System","URL":"/Users/Public"}},"/Users/Public/Start Menu":{"Browser.url":{"BaseURL":"Browser","Comment":"Access the Internet","IconFile":"./System/Icons/16x16/chromium.webp"},"DevTools.url":{"BaseURL":"DevTools","Comment":"Developer Tools Console","IconFile":"./System/Icons/16x16/eruda.webp"},"Email.url":{"BaseURL":"Index","Comment":"Open Index Application","IconFile":"./System/Icons/16x16/outlookemail.png","URL":"/Index"},"IRC.url":{"BaseURL":"IRC","Comment":"IRC Client","IconFile":"./System/Icons/16x16/kiwiirc.webp"},"Marked.url":{"BaseURL":"Marked","Comment":"Markdown Viewer","IconFile":"./System/Icons/16x16/marked.webp","URL":"/CREDITS.md"},"Messenger.url":{"BaseURL":"Messenger","Comment":"Nostr Messaging Client","IconFile":"./System/Icons/16x16/messenger.webp"},"Monaco Editor.url":{"BaseURL":"MonacoEditor","Comment":"Text Editor","IconFile":"./System/Icons/16x16/monaco.webp"},"Paint.url":{"BaseURL":"Paint","Comment":"Graphics Editor","IconFile":"./System/Icons/16x16/paint.webp"},"PDF.url":{"BaseURL":"PDF","Comment":"View PDF Documents","IconFile":"./System/Icons/16x16/pdf.webp"},"Photo Viewer.url":{"BaseURL":"Photos","Comment":"Photo Viewer","IconFile":"./System/Icons/16x16/photos.webp"},"Stable Diffusion.url":{"BaseURL":"StableDiffusion","Comment":"Text-To-Image Model","IconFile":"./System/Icons/16x16/stablediffusion.webp"},"Terminal.url":{"BaseURL":"Terminal","Comment":"Command-line Interpreter","IconFile":"./System/Icons/16x16/xterm.webp"},"TinyMCE.url":{"BaseURL":"TinyMCE","Comment":"WYSIWYG Editor","IconFile":"./System/Icons/16x16/tinymce.webp"},"Video Player.url":{"BaseURL":"VideoPlayer","Comment":"Video Player","IconFile":"./System/Icons/16x16/vlc.webp"},"Vim.url":{"BaseURL":"Vim","Comment":"Text Editor","IconFile":"./System/Icons/16x16/vim.webp"},"Webamp.url":{"BaseURL":"Webamp","Comment":"Audio Player","IconFile":"./System/Icons/16x16/webamp.webp"}},"/Users/Public/Start Menu/Emulators":{"BoxedWine.url":{"BaseURL":"BoxedWine","Comment":"Windows Applications Emulator","IconFile":"./System/Icons/16x16/boxedwine.webp"},"EmulatorJS.url":{"BaseURL":"Emulator","Comment":"Game Engines Emulator","IconFile":"./System/Icons/16x16/emulator.webp"},"js-dos.url":{"BaseURL":"JSDOS","Comment":"DOS Emulator","IconFile":"./System/Icons/16x16/jsdos.webp"},"Ruffle.url":{"BaseURL":"Ruffle","Comment":"Flash Player","IconFile":"./System/Icons/16x16/ruffle.webp"},"Virtual x86.url":{"BaseURL":"V86","Comment":"x86 Emulator","IconFile":"./System/Icons/16x16/v86.webp"}},"/Users/Public/Start Menu/Games":{"Chrome Dino.url":{"BaseURL":"Browser","Comment":"T-Rex Runner Side-Scroller","IconFile":"./System/Icons/16x16/dino.webp","URL":"chrome://dino"},"ClassiCube.url":{"BaseURL":"ClassiCube","Comment":"Minecraft Classic 0.30","IconFile":"./System/Icons/16x16/classicube.webp"},"DX-Ball.url":{"BaseURL":"DXBall","Comment":"Breakout game","IconFile":"./System/Icons/16x16/dxball.webp"},"Quake III Arena.url":{"BaseURL":"Quake3","Comment":"First-person shooter game","IconFile":"./System/Icons/16x16/quake3.webp"},"Space Cadet.url":{"BaseURL":"SpaceCadet","Comment":"3D Pinball Space Cadet","IconFile":"./System/Icons/16x16/pinball.webp"}}}'
                ),
                h = n(6484),
                d = n(48764).Buffer;
            let m = ({ birthtimeMs: e, ctimeMs: t } = {}) => !!(e && e === t),
                g = (e, t) => {
                    let { mtimeMs: n } = t;
                    return (m(t) && (0, c.gT)(e)) || n;
                },
                y = (e, t) =>
                    new Promise((i) => {
                        let s = (0, r.join)(t, "desktop.ini");
                        e.lstat(s, (r, a) => {
                            r
                                ? i("")
                                : a && m(a)
                                    ? n
                                        .e(9519, "high")
                                        .then(n.t.bind(n, 9519, 19))
                                        .then(({ default: e }) => i(e[t] || ""))
                                    : e.readFile(s, (e, t = d.from("")) => {
                                        if (e) i("");
                                        else {
                                            let {
                                                ShellClassInfo: { IconFile: e = "" },
                                            } = o().parse(t.toString());
                                            i(e);
                                        }
                                    });
                        });
                    }),
                b = (e) => (p.jQ.has(e) || p.qy.has(e) ? "VideoPlayer" : p.lM.has(e) ? "Photos" : s._.has(e) ? "MonacoEditor" : ""),
                w = (e) => {
                    let { icon: t = "", process: [n = ""] = [] } = e in a.Z ? a.Z[e] : {};
                    return t ? `./System/Icons/16x16/${t}.webp` : l.Z[n || b(e)]?.icon || p.VV;
                },
                v = (e) => {
                    let [t = ""] = e in a.Z ? a.Z[e].process : [b(e)];
                    return t;
                },
                S = (e) => {
                    switch ((0, h.RT)(e)) {
                        case ".ani":
                        case ".cur":
                        case ".ico":
                            return "image/vnd.microsoft.icon";
                        case ".jpg":
                        case ".jpeg":
                            return "image/jpeg";
                        case ".json":
                            return "application/json";
                        case ".html":
                        case ".htm":
                        case ".whtml":
                            return "text/html";
                        case ".m3u":
                        case ".m3u8":
                            return "application/x-mpegURL";
                        case ".m4v":
                        case ".mkv":
                        case ".mov":
                        case ".mp4":
                            return "video/mp4";
                        case ".mp3":
                            return "audio/mpeg";
                        case ".oga":
                            return "audio/ogg";
                        case ".ogg":
                        case ".ogm":
                        case ".ogv":
                            return "video/ogg";
                        case ".pdf":
                            return "application/pdf";
                        case ".png":
                            return "image/png";
                        case ".md":
                        case ".txt":
                            return "text/plain";
                        case ".wav":
                            return "audio/wav";
                        case ".webm":
                            return "video/webm";
                        case ".webp":
                            return "image/webp";
                        case ".xml":
                            return "application/xml";
                        case ".wsz":
                        case ".jsdos":
                        case ".zip":
                            return "application/zip";
                        default:
                            return "";
                    }
                },
                E = (e, t) => {
                    let { InternetShortcut: { BaseURL: n = "", Comment: r = "", IconFile: i = "", Type: s = "", URL: a = "" } = {} } = t ? { InternetShortcut: t } : o().parse(e?.toString() || "") || {};
                    return { comment: r, icon: !i && n && "FileExplorer" !== n ? l.Z[n]?.icon : i, pid: n, type: s, url: a };
                },
                x = (e) => E(void 0, f?.[r.dirname(e)]?.[r.basename(e)]),
                k = (e) => o().encode(e, { section: "InternetShortcut", whitespace: !1 }).replace(/"/g, ""),
                _ = (e) => {
                    let { pid: t, url: n } = E(e);
                    return d.from(k({ URL: encodeURI(`${window.location.origin}${t ? `/?app=${t}` : ""}${n ? `${t ? "&" : "/?"}url=${n}` : ""}`) }));
                },
                j = async (e, t) =>
                    new Promise((n) => {
                        e.lstat(t, (r, i) => {
                            !r && i
                                ? m(i)
                                    ? n(t)
                                    : e.readFile(t, (r, i = d.from("")) => {
                                        i.length >= p.zj ? n((0, h.YS)(i)) : r || e.unlink(t);
                                    })
                                : n("");
                        });
                    }),
                I = (e, t) =>
                    new Promise((n) => {
                        let i = (0, r.join)(p.Xo, t);
                        e?.readdir(i, async (t, [o, ...s] = []) => {
                            t
                                ? n([])
                                : n(
                                    (
                                        await Promise.all(
                                            [o, s[s.length - 1]]
                                                .filter((e) => e?.endsWith(p.Qy))
                                                .map(
                                                    (t) =>
                                                        new Promise((n) => {
                                                            j(e, r.join(i, t)).then(n);
                                                        })
                                                )
                                        )
                                    ).filter(Boolean)
                                );
                        });
                    }),
                T = (e, t, n, r, i, o, s = !0) => {
                    if (r) {
                        let r = (e, t, r) => o({ getIcon: r, icon: e, pid: "FileExplorer", subIcons: t, url: n }),
                            a = (0, u.isMountedFolder)(t?.mntMap[n]) ? p.iR : i ? p.qB : p.XN,
                            c = async () => {
                                let t = await y(e, n);
                                if (t) r(t);
                                else if (a === p.XN) {
                                    let t = await I(e, n);
                                    t.length > 0 ? r(p._l, [...t, p.EV]) : s || r(a, []);
                                }
                            };
                        s ? r(a, [], c) : c();
                    } else o({ icon: p.VV, pid: "", url: n });
                },
                P = (e, t, i, o) => {
                    let s = [],
                        c = (e, n) => o({ getIcon: n, icon: e || w(i), pid: v(i), subIcons: s, url: t }),
                        u = () =>
                            c(p.AD, (r) =>
                                e.readFile(t, async (e, t = d.from("")) => {
                                    if (!e && t.length > 0 && !r.aborted) {
                                        let { decodeImageToBuffer: e } = await n.e(4609, "high").then(n.bind(n, 14609));
                                        if (!r.aborted) {
                                            let n = await e(i, t);
                                            n && !r.aborted && c((0, h.wB)(i, n));
                                        }
                                    }
                                })
                            );
                    switch (i) {
                        case p.zm:
                            {
                                let n = ({ comment: n, icon: i, pid: a, url: c }) => {
                                    let u = (0, h.RT)(c);
                                    if (("ExternalURL" !== a && s.push(p.MB), "FileExplorer" !== a || i)) {
                                        if (p.Ig.has(u) || p.pX.some((e) => c.startsWith(e))) {
                                            let l = p.Ig.has(u),
                                                f = (0, r.join)(p.Xo, `${l ? c : t}${p.Qy}`);
                                            e.lstat(f, (t, r) => {
                                                !t && r
                                                    ? m(r)
                                                        ? o({ comment: n, icon: f, pid: a, subIcons: s, url: c })
                                                        : e.readFile(f, (e, t) => o({ comment: n, icon: (0, h.YS)(t), pid: a, subIcons: s, url: c }))
                                                    : P(e, c, u, (e) => {
                                                        let { icon: t = i, getIcon: r, subIcons: u = [] } = e;
                                                        u.length > 0 && s.push(...u.filter((e) => !s.includes(e))), o({ comment: n, getIcon: r, icon: t, pid: a, subIcons: s, url: c });
                                                    });
                                            });
                                        } else if ((0, h.yk)(c)) {
                                            let t = new URL(c).pathname.replace("/", ""),
                                                s = (0, r.join)(p.Rm, `${t}${p.Qy}`),
                                                u = { comment: n, pid: a, url: c },
                                                f = i === l.Z.VideoPlayer.icon,
                                                h = [l.Z.VideoPlayer.icon];
                                            o({
                                                ...u,
                                                getIcon: f ? () => e.exists(s, (e) => o({ ...u, icon: e ? s : `https://i.ytimg.com/vi/${t}/mqdefault.jpg`, subIcons: h })) : void 0,
                                                icon: i || l.Z.VideoPlayer.icon,
                                                subIcons: i && !f ? h : void 0,
                                            });
                                        } else o({ comment: n, icon: i || p.VV, pid: a, subIcons: s, url: c });
                                    } else
                                        o({
                                            comment: n,
                                            getIcon: () => {
                                                y(e, c).then((e) => e && o({ comment: n, icon: e, pid: a, subIcons: s, url: c }));
                                            },
                                            icon: l.Z[a]?.icon,
                                            pid: a,
                                            subIcons: s,
                                            url: c,
                                        });
                                };
                                e.lstat(t, (r, i) => {
                                    r
                                        ? c()
                                        : m(i)
                                            ? n(x(t))
                                            : e.readFile(t, (e, t) => {
                                                e || !t ? c() : n(E(t));
                                            });
                                });
                            }
                            break;
                        case ".exe":
                            c("./System/Icons/16x16/executable.webp", (r) =>
                                e.readFile(t, async (e, t = d.from("")) => {
                                    if (!e && t.length > 0 && !r.aborted) {
                                        let { extractExeIcon: e } = await n.e(3588, "high").then(n.bind(n, 73588)),
                                            i = await e(t);
                                        i && !r.aborted && c((0, h.YS)(i));
                                    }
                                })
                            );
                            break;
                        case ".mp3":
                            c(`./System/Icons/16x16/${a.Z[".mp3"].icon}.webp`, (r) =>
                                e.readFile(t, (e, t = d.from("")) => {
                                    e ||
                                        r.aborted ||
                                        Promise.all([n.e(8090, "high"), n.e(2463, "high"), n.e(4726, "high")])
                                            .then(n.bind(n, 52463))
                                            .then(({ parseBuffer: e, selectCover: n }) => {
                                                r.aborted ||
                                                    e(t, { mimeType: p.BD, size: t.length }, { skipPostHeaders: !0 }).then(({ common: { picture: e } = {} }) => {
                                                        if (r.aborted) return;
                                                        let { data: t } = n(e) || {};
                                                        t && c((0, h.YS)(t));
                                                    });
                                            });
                                })
                            );
                            break;
                        case ".sav":
                            c(p.VV, !0);
                            break;
                        case ".ani":
                        case ".cur":
                        case ".jxl":
                        case ".qoi":
                            u();
                            break;
                        case ".whtml":
                            c("./System/Icons/16x16/tinymce.webp", (n) =>
                                e.readFile(t, async (e, t = d.from("")) => {
                                    if (!e && t.length > 0 && !n.aborted) {
                                        let e;
                                        let n = await (0, h.mZ)(),
                                            r = document.createElement("div");
                                        (r.style.height = "600px"),
                                            (r.style.width = "600px"),
                                            (r.style.padding = "32px"),
                                            (r.style.backgroundColor = "#fff"),
                                            (r.style.zIndex = "-1"),
                                            (r.style.overflow = "hidden"),
                                            (r.style.opacity = "0"),
                                            (r.style.userSelect = "none"),
                                            (r.style.webkitUserSelect = "none"),
                                            (r.innerHTML = t.toString()),
                                            document.body.append(r);
                                        try {
                                            e = await n?.toPng(r, { skipAutoScale: !0, style: { opacity: "1" } });
                                        } catch { }
                                        r.remove(), e && e.length > p.zj && c(e);
                                    }
                                })
                            );
                            break;
                        default:
                            p.Wr.has(i) || p.M0.has(i)
                                ? u()
                                : p.lM.has(i)
                                    ? c(p.AD, (n) =>
                                        e.readFile(t, (e, t = d.from("")) => {
                                            if (!e && t.length > 0 && !n.aborted) {
                                                let e = new Image();
                                                e.addEventListener("load", () => c(e.src), { signal: n, ...p.K7 }), (e.src = (0, h.wB)(i, t));
                                            }
                                        })
                                    )
                                    : p.jQ.has(i)
                                        ? c(l.Z.VideoPlayer.icon)
                                        : p.qy.has(i)
                                            ? (s.push(l.Z.VideoPlayer.icon),
                                                c(l.Z.VideoPlayer.icon, (n) =>
                                                    e.readFile(t, async (e, r = d.from("")) => {
                                                        if (!e) {
                                                            let e = document.createElement("video"),
                                                                i = document.createElement("canvas"),
                                                                o = i.getContext("2d", { ...p.KU, willReadFrequently: !0 }),
                                                                s = await (0, h.iQ)(),
                                                                a = p.Nh * p.AY,
                                                                u = (t, r) =>
                                                                    new Promise((u) => {
                                                                        (e.currentTime = t), "seekToNextFrame" in e ? e.seekToNextFrame?.().catch(() => { }) : r && e.load();
                                                                        let l = () => {
                                                                            o &&
                                                                                i.width &&
                                                                                i.height &&
                                                                                (o.drawImage(e, 0, 0, i.width, i.height),
                                                                                    s.addFrame(o.getImageData(0, 0, i.width, i.height), { copy: !0, delay: 100 }),
                                                                                    0 == (a -= 1) && s.on("finished", (e) => (0, h.w8)(e).then(c)).render(),
                                                                                    u());
                                                                        };
                                                                        "requestVideoFrameCallback" in e ? e.requestVideoFrameCallback(l) : e.addEventListener("canplaythrough", l, { signal: n, ...p.K7 });
                                                                    });
                                                            e.addEventListener(
                                                                "loadeddata",
                                                                () => {
                                                                    (i.height = e.videoHeight > e.videoWidth ? p.qO : (p.qO * e.videoHeight) / e.videoWidth), (i.width = e.videoWidth > e.videoHeight ? p.qO : (p.qO * e.videoWidth) / e.videoHeight);
                                                                    let t = [e.duration / 4, e.duration / 2],
                                                                        r = 4 / p.Nh,
                                                                        o = a / t.length;
                                                                    t.forEach(async (e, t) => {
                                                                        if (!n.aborted)
                                                                            for (let s = e; s < e + o * r; s += r) {
                                                                                if (n.aborted) return;
                                                                                let r = 0 === t;
                                                                                await u(s, r), r && s === e && c(i.toDataURL("image/jpeg"));
                                                                            }
                                                                    });
                                                                },
                                                                { signal: n, ...p.K7 }
                                                            ),
                                                                (e.src = (0, h.YS)(r, (0, h.G6)() ? S(t) || p.iS : void 0));
                                                        }
                                                    })
                                                ))
                                            : c();
                    }
                },
                C = (e) => (t) => !p.G.has((0, r.join)(e, t)) && !p.vP.has(t),
                F = Object.create(null),
                O = (e, t, n) => {
                    let r = `${t} ${n}`;
                    if (!F[r]) {
                        let e = document.createElement("canvas").getContext("2d", p.KU);
                        (e.font = r), (F[r] = e);
                    }
                    let { actualBoundingBoxLeft: i, actualBoundingBoxRight: o } = F[r].measureText(e);
                    return Math.abs(i) + Math.abs(o);
                },
                A = (e, t, n, r) => {
                    let i = [""],
                        o = O(e, t, n);
                    if (!r) return { lines: [e], width: o };
                    if (o > r) {
                        let o = e.split(" ");
                        [...e].forEach((e) => {
                            let s = i.length - 1,
                                a = `${i[s]}${e}`;
                            if (O(a, t, n) > r) {
                                let t = a.split(" ").length - 1,
                                    n = o.splice(0, t).join(" ");
                                1 === i.length && t > 0 && i[0] !== n ? ((i[0] = a.slice(0, n.length)), i.push(a.slice(n.length))) : i.push(e);
                            } else i[s] = a;
                        });
                    }
                    return { lines: i, width: Math.min(r, o) };
                };
        },
        23736: function (e, t, n) {
            "use strict";
            n.d(t, {
                Fc: function () {
                    return E;
                },
                Kn: function () {
                    return d;
                },
                W: function () {
                    return y;
                },
                WG: function () {
                    return w;
                },
                dO: function () {
                    return p;
                },
                dZ: function () {
                    return g;
                },
                df: function () {
                    return u;
                },
                gL: function () {
                    return S;
                },
                hE: function () {
                    return m;
                },
                kf: function () {
                    return v;
                },
                p4: function () {
                    return b;
                },
            });
            var r = n(1864),
                i = n(6155),
                o = n(89670),
                s = n(97836),
                a = n(6484);
            n(67294);
            var c = n(48764).Buffer;
            let u = (e) => ([t, n], [o, s]) => (0, i.GA)((0, r.join)(e, t), n) - (0, i.GA)((0, r.join)(e, o), s),
                l = ([e], [t]) => e.localeCompare(t, "en", { sensitivity: "base" }),
                p = ([, { size: e }], [, { size: t }]) => e - t,
                f = ([e], [t]) => (0, r.extname)(e).localeCompare((0, r.extname)(t), "en", { sensitivity: "base" }),
                h = ([e, { systemShortcut: t = !1 }], [n, { systemShortcut: r = !1 }]) => (t === r ? (r && n === s.Bb ? 1 : t && e === s.Bb ? -1 : 0) : t ? -1 : 1),
                d = (e, t, n, r = !0) => {
                    if (t.length > 0) {
                        let n = Object.keys(e);
                        return Object.fromEntries(
                            t
                                .filter((e) => n.includes(e))
                                .concat(n.filter((e) => !t.includes(e)))
                                .map((t) => [t, e[t]])
                        );
                    }
                    let i = [],
                        o = [];
                    Object.entries(e).forEach((e) => {
                        let [, t] = e;
                        t.isDirectory() ? o.push(e) : i.push(e);
                    });
                    let s = (e) => (e.sort(l), n && n !== l ? e.sort(n) : e),
                        a = s(o),
                        c = s(i);
                    return r || (a.reverse(), c.reverse()), Object.fromEntries((r ? [...a, ...c] : [...c, ...a]).sort(h));
                },
                m = (e, t, n, r) => {
                    let i = { date: u(e), name: l, size: p, type: f };
                    return n in i ? d(t, [], i[n], r) : t;
                },
                g = (e, t) => {
                    let n = (0, r.extname)(e),
                        i = (0, r.basename)(e, n);
                    return `${i} (${t})${n}`;
                },
                y = async (e, t, n) => {
                    let i = [],
                        a = (a, u = "") => {
                            let l = new FileReader();
                            l.addEventListener(
                                "load",
                                ({ target: t }) => {
                                    t?.result instanceof ArrayBuffer && n((0, r.join)(u, a.name), c.from(t.result), 1 === e.length ? o.v.UPDATE_URL : void 0);
                                },
                                s.K7
                            ),
                                i.push([a, (0, r.join)(t, u), l]);
                        },
                        u = async (e, t = "") =>
                            new Promise((n) => {
                                e?.isDirectory
                                    ? e.createReader().readEntries((i) => Promise.all(i.map((n) => u(n, (0, r.join)(t, e.name)))).then(() => n()))
                                    : e?.file((e) => {
                                        a(e, t), n();
                                    });
                            });
                    return e instanceof FileList ? [...e].forEach((e) => a(e)) : await Promise.all([...e].map(async (e) => u(e.webkitGetAsEntry()))), i;
                },
                b = (e) => {
                    let t = e.nativeEvent?.dataTransfer || e.dataTransfer,
                        n = e.target?.files || t?.items || [],
                        r = t?.getData("application/json");
                    return Array.isArray(n) && (n = [...n].filter((e) => !("kind" in e) || "file" === e.kind)), { files: n, text: r };
                },
                w = (e, t, n, i, s = !1) => {
                    (0, a.nK)(e);
                    let { files: c, text: u } = b(e);
                    if (u)
                        try {
                            let e = JSON.parse(u);
                            if (!Array.isArray(e) || 0 === e.length) return;
                            let a = 1 === e.length,
                                c = e.map((e) => {
                                    let i = !1;
                                    return {
                                        abort: () => {
                                            i = !0;
                                        },
                                        directory: n,
                                        name: e,
                                        operation: "Moving",
                                        read: async () => {
                                            i || "." === (0, r.dirname)(e) || (await t(e, void 0, a ? o.v.UPDATE_URL : void 0));
                                        },
                                    };
                                });
                            if (a) {
                                let [e] = c;
                                if ((s && t(e.name, void 0, o.v.UPDATE_URL).then((e) => e), s || e.directory === e.name)) return;
                            }
                            if (e.every((e) => (0, r.dirname)(e) === n)) return;
                            i(c);
                        } catch { }
                    else y(c, n, t).then(i);
                },
                v = async (e, t, n) =>
                    (
                        await Promise.all(
                            e.map(async (e) =>
                                (await n(e)).isDirectory()
                                    ? v(
                                        (await t(e)).map((t) => (0, r.join)(e, t)),
                                        t,
                                        n
                                    )
                                    : [e]
                            )
                        )
                    ).flat(),
                S = (e = "") => e.replace(/["*/:<>?\\|]/g, ""),
                E = (e) => {
                    if ("/" === e) return [];
                    let t = (0, r.dirname)(e);
                    return [t, ...E(t)];
                };
        },
        89670: function (e, t, n) {
            "use strict";
            n.d(t, {
                v: function () {
                    return g;
                },
                Z: function () {
                    return b;
                },
            });
            var r = n(1864),
                i = n(67294),
                o = n(59746),
                s = n(6155),
                a = n(23736),
                c = n(76488);
            let u = ["name", !0];
            var l = (e, t) => {
                let { setSortOrder: n, sortOrders: r } = (0, c.k)(),
                    [o, s] = (0, i.useState)(u);
                return (
                    (0, i.useEffect)(() => {
                        let { [e]: [, t, n] = [] } = r || {};
                        "string" == typeof t && "boolean" == typeof n && s([t, n]);
                    }, [e, r]),
                    (0, i.useMemo)(
                        () => [
                            o,
                            (r) => {
                                let [i, s] = r(o);
                                t && n(e, Object.keys((0, a.hE)(e, t, i, s)), i, s);
                            },
                        ],
                        [o, e, t, n]
                    )
                );
            },
                p = n(20063),
                f = n(58437),
                h = n(97836),
                d = n(6484),
                m = n(48764).Buffer;
            let g = { RENAME: "rename", UPDATE_URL: "updateUrl" },
                y = void 0;
            var b = (e, t, { blurEntry: u, focusEntry: g }, { hideFolders: b, hideLoading: w, skipFsWatcher: v, skipSorting: S }) => {
                let [E, x] = (0, i.useState)(),
                    [k, _] = (0, i.useState)(""),
                    [j, I] = (0, i.useState)(!0),
                    {
                        addFile: T,
                        addFsWatcher: P,
                        copyEntries: C,
                        createPath: F,
                        deletePath: O,
                        exists: A,
                        fs: R,
                        lstat: N,
                        mkdir: B,
                        mkdirRecursive: L,
                        pasteList: D,
                        readdir: U,
                        readFile: M,
                        removeFsWatcher: z,
                        rename: V,
                        stat: $,
                        updateFolder: W,
                        writeFile: H,
                    } = (0, p.o)(),
                    { iconPositions: G, sessionLoaded: q, setIconPositions: Y, setSortOrder: K, sortOrders: J } = (0, c.k)(),
                    { [e]: [X, Z, Q] = [] } = J || {},
                    [ee, et] = (0, i.useState)(e),
                    { close: en, closeProcessesByUrl: er } = (0, f.z)(),
                    ei = (0, i.useCallback)(
                        async (t, n) => {
                            if (h.DA.has(e) && (0, d.RT)(t) === h.zm) {
                                let i = (0, r.join)(e, t),
                                    { type: o } = (0, s.CK)(n) ? (0, s.cC)(i) : (0, s.OE)(await M(i));
                                return Object.assign(n, { systemShortcut: "System" === o });
                            }
                            return n;
                        },
                        [e, M]
                    ),
                    eo = S || !Z || "name" === Z || "type" === Z,
                    es = (0, i.useCallback)(
                        async (t, n) => {
                            if (n) {
                                if (!(await A((0, r.join)(e, n)))) {
                                    let e = (0, r.basename)(n);
                                    t ? x((n = {}) => Object.entries(n).reduce((n, [i, o]) => ((n[i === e ? (0, r.basename)(t) : i] = o), n), {})) : (u(e), x(({ [e]: t, ...n } = {}) => n));
                                }
                            } else if (t) {
                                let n = (0, r.basename)(t),
                                    i = (0, r.join)(e, t),
                                    o = await ei(n, eo ? await N(i) : await $(i));
                                x((e = {}) => ({ ...e, [n]: o }));
                            } else {
                                I(!0);
                                try {
                                    let t = (await U(e)).filter((0, s.de)(e)),
                                        n = await t.reduce(async (t, n) => {
                                            try {
                                                let i = (0, r.join)(e, n),
                                                    o = eo ? await N(i) : await $(i),
                                                    s = b && o.isDirectory(),
                                                    c = await t;
                                                return s || ((c[n] = await ei(n, o)), (c = (0, a.Kn)(c, (!S && X) || [], eo ? void 0 : "date" === Z ? (0, a.df)(e) : a.dO, Q))), w && x(c), c;
                                            } catch {
                                                return t;
                                            }
                                        }, Promise.resolve({}));
                                    if (t.length > 0) {
                                        w || x(n);
                                        let t = Object.keys(n);
                                        !S && (!X || X?.some((e, n) => t[n] !== e)) && window.requestAnimationFrame(() => K(e, t));
                                    } else x(Object.create(null));
                                } catch (t) {
                                    "ENOENT" === t.code && er(e);
                                }
                                I(!1);
                            }
                        },
                        [u, er, e, A, b, w, eo, N, U, K, S, Q, Z, X, $, ei]
                    ),
                    ea = (0, i.useCallback)(
                        async (t) => {
                            (await O(t)) && W(e, void 0, (0, r.basename)(t));
                        },
                        [O, e, W]
                    ),
                    ec = (e, t) => {
                        let n = document.createElement("a");
                        (n.href = (0, d.YS)(e)), (n.download = t ? ((0, r.extname)(t) ? t : `${t}.zip`) : "download.zip"), n.click(), _(n.href);
                    },
                    eu = (0, i.useCallback)(async (t) => [(0, r.relative)(e, t), await M(t)], [e, M]),
                    el = async (t, n) => {
                        let i = (0, a.gL)(n).trim();
                        if ((i?.endsWith(".") && (i = i.slice(0, -1)), i)) {
                            let n = (0, r.join)(e, `${i}${t.endsWith(h.zm) ? h.zm : ""}`);
                            !(await A(n)) && (await V(t, n)) && W(e, n, t),
                                (0, r.dirname)(t) === h.Ll &&
                                Y((e) => {
                                    let { [t]: r, ...i } = e;
                                    return r && (i[n] = r), i;
                                });
                        }
                    },
                    ep = (0, i.useCallback)(
                        async (n, r, i) => {
                            let o = await F(n, e, r);
                            return o && !o.includes("/") && (W(e, o), "rename" === i ? t(o) : (u(), g(o))), o;
                        },
                        [u, F, e, g, t, W]
                    ),
                    ef = (0, i.useCallback)(
                        (e, t) => {
                            if ((0, d.RT)(e) === h.zm) {
                                R?.readFile(e, (t, n = m.from("")) => ep(r.basename(e), n));
                                return;
                            }
                            let n = (0, r.basename)(e),
                                i = `${n}${h.cW}${h.zm}`,
                                o = (0, s.ZA)({ BaseURL: t, URL: e });
                            ep(i, m.from(o));
                        },
                        [R, ep]
                    ),
                    eh = (0, i.useCallback)(
                        async (e) => {
                            let t = await (0, a.kf)(e, U, $),
                                r = await Promise.all(t.map((e) => eu(e))),
                                { addEntryToZippable: i, createZippable: o } = await n.e(5341, "high").then(n.bind(n, 5341));
                            return r
                                .filter(Boolean)
                                .map(([e, t]) => [e, (0, d.RT)(e) === h.zm ? (0, s.JI)(t) : t])
                                .reduce((e, [t, n]) => i(e, o(t, n)), {});
                        },
                        [eu, U, $]
                    ),
                    ed = (0, i.useCallback)(
                        async (t) => {
                            let { zip: i } = await n.e(3778, "high").then(n.bind(n, 93778));
                            i(await eh(t), h.BF, (t, n) => {
                                n && ep(`${(0, r.basename)(e) || "archive"}.zip`, m.from(n));
                            });
                        },
                        [eh, e, ep]
                    ),
                    em = (0, i.useCallback)(
                        async (e) => {
                            let t = await eh(e),
                                i = Object.entries(t),
                                [[o, s]] = 0 === i.length ? [["", ""]] : i,
                                a = 1 === i.length;
                            if (a && (0, r.extname)(o)) {
                                let [e] = s;
                                ec(e, (0, r.basename)(o));
                            } else {
                                let { zip: e } = await n.e(3778, "high").then(n.bind(n, 93778));
                                e(a ? s : t, h.BF, (e, t) => {
                                    t && ec(m.from(t), a ? o : void 0);
                                });
                            }
                        },
                        [eh]
                    ),
                    { openTransferDialog: eg } = (0, o.Z)(),
                    ey = (0, i.useCallback)(
                        async (t) => {
                            let i = await M(t),
                                { unarchive: o, unzip: s } = await n.e(5341, "high").then(n.bind(n, 5341)),
                                a = () => en(`Transfer${h.CC}${t}`);
                            eg(void 0, t);
                            try {
                                let n = Object.entries([".jsdos", ".wsz", ".zip"].includes((0, d.RT)(t)) ? await s(i) : await o(t, i));
                                if (0 === n.length) a();
                                else {
                                    let i = (0, r.basename)(t, t.toLowerCase().endsWith(".tar.gz") ? ".tar.gz" : (0, r.extname)(t)),
                                        o = await F(i, e),
                                        s = n.map(([t, n]) => {
                                            let i = !1;
                                            return {
                                                abort: () => {
                                                    i = !0;
                                                },
                                                directory: (0, r.join)(e, o),
                                                done: () => W(e, o),
                                                name: t,
                                                operation: "Extracting",
                                                read: async () => {
                                                    if (!i)
                                                        try {
                                                            let i = (0, r.join)(e, o, t);
                                                            0 === n.length && t.endsWith("/") ? await B(i) : ((await A((0, r.dirname)(i))) || (await L((0, r.dirname)(i))), await H(i, m.from(n)));
                                                        } catch { }
                                                },
                                            };
                                        });
                                    eg(s, t);
                                }
                            } catch (e) {
                                a();
                            }
                        },
                        [en, F, e, A, B, L, eg, M, W, H]
                    ),
                    eb = (0, i.useCallback)(
                        (t) => {
                            [e, ...(0, a.Fc)(e)].forEach((e) => D[e] && delete D[e]);
                            let n = Object.entries(D),
                                i = n.some(([, e]) => "move" === e),
                                o = async (t, n = "") => {
                                    let i;
                                    let s = (0, r.join)(n, (0, r.basename)(t));
                                    (await N(t)).isDirectory() ? ((i = await F(s, e)), await Promise.all((await U(t)).map((e) => o((0, r.join)(t, e), i)))) : (i = await F(s, e, await M(t))), n || W(e, i);
                                },
                                s = [],
                                c = n.map(([t]) => {
                                    let n = !1;
                                    return {
                                        abort: () => {
                                            n = !0;
                                        },
                                        directory: e,
                                        done: () => {
                                            i && (s.filter(Boolean).forEach((t) => W(e, t)), C([]));
                                        },
                                        name: t,
                                        operation: i ? "Moving" : "Copying",
                                        read: async () => {
                                            n || (i ? s.push(await F(t, e)) : await o(t));
                                        },
                                    };
                                });
                            if (t) {
                                let { clientX: i, clientY: o } = "TouchEvent" in window && t.nativeEvent instanceof TouchEvent ? t.nativeEvent.touches[0] : t.nativeEvent;
                                (0, d.vi)(
                                    e,
                                    t.target,
                                    G,
                                    J,
                                    { x: i, y: o },
                                    n.map(([e]) => (0, r.basename)(e)),
                                    Y,
                                    A
                                );
                            }
                            eg(c);
                        },
                        [C, F, e, A, G, N, eg, D, M, U, Y, J, W]
                    ),
                    ew = l(e, E),
                    ev = (0, i.useMemo)(() => ({ addToFolder: () => T(e, ep), newPath: ep, pasteToFolder: eb, resetFiles: () => x(y), sortByOrder: ew }), [T, e, ep, eb, ew]),
                    eS = (0, i.useRef)(!1);
                return (
                    (0, i.useEffect)(() => {
                        e !== ee && (et(e), x(y));
                    }, [ee, e]),
                    (0, i.useEffect)(() => {
                        if (q) {
                            if (E) {
                                let t = Object.keys(E);
                                if (X && t.length === X.length && e === ee) {
                                    if (t.some((e) => !X.includes(e))) {
                                        let n = X.find((e) => !t.includes(e)),
                                            r = t.find((e) => !X.includes(e));
                                        n &&
                                            r &&
                                            K(
                                                e,
                                                X.map((e) => (e === n ? r : e))
                                            );
                                    } else t.some((e, t) => e !== X[t]) && x((e) => (0, a.Kn)(e || E, X));
                                }
                            } else
                                eS.current ||
                                    ((eS.current = !0),
                                        es().then(() => {
                                            eS.current = !1;
                                        }));
                        }
                    }, [ee, e, E, q, K, X, es]),
                    (0, i.useEffect)(
                        () => () => {
                            k && (0, d.EK)(k);
                        },
                        [k]
                    ),
                    (0, i.useEffect)(
                        () => (
                            v || P?.(e, es),
                            () => {
                                v || z?.(e, es);
                            }
                        ),
                        [P, e, z, v, es]
                    ),
                    { fileActions: { archiveFiles: ed, deleteLocalPath: ea, downloadFiles: em, extractFiles: ey, newShortcut: ef, renameFile: el }, files: E || {}, folderActions: ev, isLoading: j, updateFiles: es }
                );
            };
        },
        6460: function (e, t, n) {
            "use strict";
            n.d(t, {
                Cd: function () {
                    return c;
                },
                MC: function () {
                    return a;
                },
                _Q: function () {
                    return s;
                },
                mB: function () {
                    return u;
                },
            });
            var r = n(85893),
                i = n(67294),
                o = n(10508);
            let s = (0, i.memo)(({ className: e }) =>
                (0, r.jsx)("svg", { className: e, viewBox: "0 0 32 32", xmlns: "http://www.w3.org/2000/svg", children: (0, r.jsx)("path", { d: "M8.047 30.547L22.578 16 8.047 1.453 9.453.047 25.422 16 9.453 31.953l-1.406-1.406z" }) })
            ),
                a = (0, i.memo)(({ className: e }) => {
                    let { colors: t } = (0, o.Fg)();
                    return (0, r.jsx)("svg", {
                        className: e,
                        viewBox: "0 0 32 32",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, r.jsx)("path", { d: "M28.703 8.703l-16.703 16.719-8.703-8.719 1.406-1.406 7.297 7.281 15.297-15.281z", stroke: t.text, strokeWidth: "2" }),
                    });
                }),
                c = (0, i.memo)(({ className: e }) =>
                    (0, r.jsx)("svg", {
                        className: e,
                        viewBox: "0 0 32 32",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, r.jsx)("path", {
                            d: "M16 10q1.234 0 2.328.469t1.914 1.289 1.289 1.914T22 16q0 1.25-.469 2.336t-1.289 1.906-1.914 1.289T16 22q-1.25 0-2.336-.469t-1.906-1.289-1.289-1.906T10 16q0-1.234.469-2.328t1.289-1.914 1.906-1.289T16 10z",
                        }),
                    })
                ),
                u = (0, i.memo)(() =>
                    (0, r.jsx)("svg", {
                        viewBox: "0 0 32 32",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, r.jsx)("path", {
                            d:
                                "M22 24l2-2v6h-24v-20h2v18h20v-2zM20 16q-2 0-3.914 0.398t-3.695 1.172-3.398 1.891-2.992 2.539v-2q0-1.938 0.5-3.727t1.414-3.344 2.188-2.828 2.828-2.188 3.344-1.414 3.727-0.5v-6l11 11-11 11v-6zM21.578 8q-0.875 0-1.641 0.016t-1.516 0.102-1.5 0.281-1.594 0.539q-1.359 0.563-2.523 1.438t-2.078 1.992-1.547 2.422-0.93 2.742q2.625-1.75 5.609-2.641t6.141-0.891h2v3.172l6.172-6.172-6.172-6.172v3.172h-0.422z",
                        }),
                    })
                );
        },
        87386: function (e, t, n) {
            "use strict";
            var r = n(85893),
                i = n(67294);
            t.Z = (e, t) => {
                let n = (0, i.createContext)(Object.create(null));
                return { Provider: (0, i.memo)(({ children: i }) => (0, r.jsxs)(n.Provider, { value: e(), children: [i, t] })), useContext: () => (0, i.useContext)(n) };
            };
        },
        46508: function (e, t, n) {
            "use strict";
            n.d(t, {
                t2: function () {
                    return u;
                },
                T: function () {
                    return a;
                },
                F7: function () {
                    return c;
                },
                iY: function () {
                    return y;
                },
                uh: function () {
                    return w;
                },
                gT: function () {
                    return h;
                },
                BR: function () {
                    return d;
                },
                aA: function () {
                    return E;
                },
                cb: function () {
                    return S;
                },
                cT: function () {
                    return v;
                },
            });
            var r = n(1864),
                i = n(26269),
                o = JSON.parse(
                    '{"fsroot":[["CREDITS.md",4591,1718994759153],["favicon.ico",3774,1718994762464],["Program Files",0,1718994761789,[["BoxedWine",0,1718994759422,[["boxedwine-shell.js",39039,1718994759154],["boxedwine.js",279633,1718994759156],["boxedwine.wasm",1708023,1718994759167],["browserfs.boxedwine.js",247383,1718994759170],["fullWine1.7.55-v8.zip",50012741,1718994759385],["jszip.min.js",97599,1718994759387],["wine1.7.55-v8-min-online.zip",9759641,1718994759425]]],["Browser",0,1718994759440,[["dino",0,1718994759439,[["assets",0,1718994759437,[["default_100_percent",0,1718994759433,[["100-disabled.png",382,1718994759431],["100-error-offline.png",196,1718994759432],["100-offline-sprite.png",2645,1718994759433]]],["default_200_percent",0,1718994759436,[["200-disabled.png",479,1718994759434],["200-error-offline.png",269,1718994759435],["200-offline-sprite.png",3244,1718994759436]]],["offline-sprite-1x.png",2520,1718994759437]]],["index.css",3368,1718994759438],["index.html",30633,1718994759439],["index.js",93252,1718994759440],["LICENSE",1546,1718994759429]]],["directory",0,1718994759440,[["icons",0,1718994759455,[["a.gif",246,1718994759441],["back.gif",216,1718994759441],["binary.gif",246,1718994759442],["blank.gif",148,1718994759443],["compressed.gif",1038,1718994759443],["diskimg.gif",167,1718994759444],["folder.gif",225,1718994759445],["generic.gif",221,1718994759446],["image2.gif",309,1718994759448],["layout.gif",276,1718994759449],["link.gif",249,1718994759449],["movie.gif",243,1718994759450],["p.gif",237,1718994759451],["pdf.gif",249,1718994759451],["portal.gif",254,1718994759451],["script.gif",242,1718994759453],["sound2.gif",221,1718994759454],["tar.gif",219,1718994759454],["text.gif",229,1718994759455]]]]],["RDIForm",0,1719333565301,[["index.html",2898,1719333565301],["RDIForm.js",422,1719331989700]]],["SalesReport",0,1719261209667,[["index.html",6221,1719261209666]]]]],["ClassiCube",0,1718994759473,[["ClassiCube.js",3149552,1718994759470],["default.zip",84041,1718994759473],["skin",0,1718994759473,[["Singleplayer.png",1862,1718994759474]]]]],["DX-Ball",0,1718994759539,[["audio",0,1718994759504,[["sfx",0,1718994759483,[["wav",0,1718994759503,[["Ao-laser.wav",790,1718994759484],["Bang.wav",9720,1718994759485],["Bassdrum.wav",2108,1718994759486],["Boing.wav",4040,1718994759486],["Byeball.wav",4804,1718994759487],["Effect.wav",2644,1718994759488],["Effect2.wav",6110,1718994759488],["Fanfare.wav",3626,1718994759489],["Glass.wav",6352,1718994759490],["Gunfire.wav",1950,1718994759490],["Humm.wav",1268,1718994759491],["Orchblas.wav",8390,1718994759491],["Orchestr.wav",8070,1718994759492],["Padexplo.wav",5170,1718994759493],["Peow!.wav",1784,1718994759493],["Ricochet.wav",3320,1718994759494],["Saucer.wav",790,1718994759494],["Sweepdow.wav",4222,1718994759495],["Swordswi.wav",718,1718994759496],["Tank.wav",3366,1718994759496],["Thudclap.wav",65568,1718994759497],["Voltage.wav",42256,1718994759498],["Whine.wav",132286,1718994759500],["Wowpulse.wav",378,1718994759501],["Xploshor.wav",2472,1718994759502],["Xplosht1.wav",3064,1718994759504]]]]],["sound",0,1718994759530,[["12flight.mp3",231768,1718994759507],["Acker-gs.mp3",854496,1718994759514],["Brain.mp3",334152,1718994759518],["Ethno_pa.mp3",295272,1718994759520],["Freebee.mp3",447768,1718994759525],["Gmfigaro.mp3",740016,1718994759532]]]]],["Candy.sbk",10525,1718994759475],["Chisel2.sbk",46223,1718994759476],["default.bds",20000,1718994759536],["game.js",92953,1718994759539],["images",0,1718994759547,[["bigbolt.png",9844,1718994759545],["Highscor.png",5651,1718994759540],["Intro.png",5287,1718994759542],["Mainmenu.png",7850,1718994759544],["mbbkgrnd.png",1439,1718994759546],["sphere.png",10074,1718994759548]]],["Mainmenu.sbk",2786,1718994759477],["Mball2.sbk",319503,1718994759480],["Sfont.sbk",3251,1718994759481],["Sysfont.sbk",8085,1718994759482],["Thefont.sbk",34737,1718994759483]]],["EmulatorJs",0,1718994759634,[["cores",0,1718994759596,[["a5200-wasm.data",595201,1718994759552],["gb-wasm.data",651660,1718994759559],["gba-wasm.data",743079,1718994759566],["n64-wasm.data",1301617,1718994759576],["nds-wasm.data",2033383,1718994759586],["nes-wasm.data",706765,1718994759590],["snes-wasm.data",769101,1718994759594],["vb-wasm.data",582164,1718994759597]]],["emu-css.min.css",43621,1718994759598],["emulator.min.js",263597,1718994759602],["extract7z.js",280156,1718994759605],["extractzip.js",196200,1718994759607],["loader.js",4260,1718994759608],["localization",0,1718994759609,[["en.json",7323,1718994759609]]],["old",0,1718994759631,[["32x-old-wasm.data",427325,1718994759614],["a2600-old-wasm.data",511058,1718994759617],["a7800-old-asmjs.data",361680,1718994759620],["jaguar-old-wasm.data",405678,1718994759622],["lynx-old-wasm.data",318813,1718994759624],["ngp-old-wasm.data",336349,1718994759626],["pce-old-wasm.data",410070,1718994759628],["sega-old-wasm.data",498494,1718994759630],["ws-old-wasm.data",320206,1718994759633]]],["v.json",2837,1718994759635]]],["Eruda",0,1718994759637,[["eruda.js",444394,1718994759638]]],["eSheep",0,1718994760817,[["blue_sheep.xml",1159042,1718994760790],["eSheep.js",21247,1718994760793],["eSheep.xml",159570,1718994760794],["fox.xml",227835,1718994760796],["green_sheep.xml",1159052,1718994760799],["mimiko.xml",182524,1718994760801],["neko.xml",164214,1718994760803],["orange_sheep.xml",1159428,1718994760807],["pingus.xml",120737,1718994760809],["red_sheep.xml",1159342,1718994760813],["yellow_sheep.xml",1159428,1718994760818]]],["ffmpeg",0,1718994761036,[["046d0074eee1d99a674a.js",104963,1718994760821],["ffmpeg-core.js",86516,1718994760823],["ffmpeg-core.wasm",24383038,1718994761033],["ffmpeg-core.worker.js",0,1718994761034],["ffmpeg.min.js",22432,1718994761037]]],["gif.js",0,1718994761037,[["gif.worker.js",16599,1718994761038]]],["imagemagick",0,1718994761069,[["magick.js",142210,1718994761040],["magick.wasm",4201586,1718994761067],["wasm-imagemagick.umd-es5.min.js",80600,1718994761069]]],["js-dos",0,1718994761085,[["dosbox.conf",1166,1718994761070],["emulators-ui.js",274358,1718994761073],["emulators.js",114957,1718994761074],["jsdos.json",4112,1718994761075],["wdosbox.js",126040,1718994761076],["wdosbox.wasm",1462485,1718994761086]]],["jspaint",0,1718994761785,[["audio",0,1718994761088,[["chord.wav",97016,1718994761088]]],["help",0,1718994761185,[["cloud-mask.png",79989,1718994761090],["clouds.jpg",189230,1718994761091],["coUA.css",2752,1718994761093],["default.html",1146,1718994761094],["flag&clouds.gif",41447,1718994761095],["memcopy.html",1640,1718994761097],["mspaint.hhc",6816,1718994761098],["mspaint.hhk",84141,1718994761099],["nobgcolor.css",4603,1718994761099],["onestep.gif",815,1718994761100],["online_support.htm",1661,1718994761101],["paint_airbrush.html",930,1718994761138],["paint_blackwhite.html",708,1718994761139],["paint_brush.html",907,1718994761140],["paint_change_color.html",1355,1718994761140],["paint_change_size.html",1132,1718994761142],["paint_clear_image.html",1145,1718994761143],["paint_color_box.html",583,1718994761143],["paint_curves.html",1131,1718994761144],["paint_custom_colors.html",832,1718994761145],["paint_cutout_copy_move.html",1577,1718994761147],["paint_cutout_save.html",760,1718994761148],["paint_cutout_select.html",782,1718994761149],["paint_enlarge_area.html",1224,1718994761150],["paint_erase_large.html",1365,1718994761152],["paint_erase_small.html",1663,1718994761154],["paint_fill.html",1170,1718994761156],["paint_flip_picture.html",1652,1718994761158],["paint_freeform_lines.html",867,1718994761160],["paint_grid.html",800,1718994761162],["paint_insert_file.html",708,1718994761164],["paint_invert.html",537,1718994761166],["paint_lines.html",940,1718994761167],["paint_not_in_color_box.html",1301,1718994761169],["paint_ovals.html",1169,1718994761171],["paint_polygons.html",1109,1718994761174],["paint_print.html",646,1718994761174],["paint_rectangles.html",1354,1718994761174],["paint_set_default_colors.html",818,1718994761175],["paint_skew_picture.html",1674,1718994761176],["paint_text.html",1978,1718994761177],["paint_toolbox.html",576,1718994761178],["paint_trans_opaque.html",638,1718994761180],["paint_undo.html",958,1718994761181],["paint_wallpaper.html",1524,1718994761183],["paint_zoom.html",966,1718994761184],["prettify-html.ahk",1698,1718994761185],["p_airb.gif",867,1718994761102],["p_blank.png",126,1718994761103],["p_brush.gif",852,1718994761104],["p_color.png",120,1718994761105],["p_curve.gif",835,1718994761106],["p_cut.png",158,1718994761107],["p_database.png",141,1718994761108],["p_delete.png",160,1718994761109],["p_erase.gif",857,1718994761110],["p_eye.gif",853,1718994761112],["p_fliph.png",163,1718994761113],["p_flipv.png",155,1718994761115],["p_free.gif",846,1718994761115],["p_invert.png",139,1718994761116],["p_line.gif",833,1718994761117],["p_make_opaque.png",182,1718994761118],["p_monochrome.png",100,1718994761119],["p_opaq.gif",989,1718994761119],["p_open.png",164,1718994761120],["p_oval.gif",843,1718994761121],["p_paint.gif",865,1718994761122],["p_paste.png",198,1718994761123],["p_pencil.gif",848,1718994761123],["p_poly.gif",840,1718994761124],["p_rect.gif",840,1718994761125],["p_rotate_ccw.png",162,1718994761126],["p_rotate_ccw_thin.png",151,1718994761126],["p_rotate_cw.png",153,1718994761127],["p_rotate_cw_thin.png",148,1718994761128],["p_rrect.gif",848,1718994761130],["p_save.png",156,1718994761130],["p_sel.gif",837,1718994761131],["p_skew_h.png",175,1718994761132],["p_skew_v.png",187,1718994761133],["p_stretch_both.png",170,1718994761133],["p_stretch_h.png",156,1718994761134],["p_stretch_v.png",162,1718994761135],["p_trans.gif",978,1718994761136],["p_txt.gif",848,1718994761137],["p_zoom.gif",95,1718994761137],["vaporwave.js",1938,1718994761186]]],["images",0,1718994761280,[["98.js.org.svg",26924,1718994761187],["anypalette-logo-128x128.png",4540,1718994761188],["arrows.png",341,1718994761189],["chm-16x16.png",395,1718994761190],["classic",0,1718994761199,[["eye-gaze-pause.svg",9812,1718994761191],["eye-gaze-unpause.svg",12334,1718994761191],["options-transparency.png",455,1718994761192],["options-transparency.svg",15593,1718994761193],["tools-and-stuff.png",1885,1718994761195],["tools.png",1381,1718994761196],["tools.svg",61921,1718994761198],["undo.png",276,1718994761199],["undo.svg",8088,1718994761199]]],["cursors",0,1718994761213,[["airbrush.png",2967,1718994761201],["default.png",1280,1718994761202],["ew-resize.png",174,1718994761203],["eye-dropper.png",200,1718994761204],["fill-bucket.png",2962,1718994761205],["magnifier.png",202,1718994761206],["move.png",217,1718994761207],["nesw-resize.png",175,1718994761208],["ns-resize.png",178,1718994761209],["nwse-resize.png",173,1718994761210],["pencil.png",189,1718994761210],["precise-dotted.png",142,1718994761211],["precise.png",154,1718994761213],["precise2.png",181,1718994761214]]],["error-16x16-8bpp.png",418,1718994761216],["error-32x32-1bpp.png",477,1718994761217],["error-32x32-8bpp.png",497,1718994761218],["error-32x32-8bpp.svg",3340,1718994761219],["help-icons.png",846,1718994761220],["help-viewer-toolbar-icons-grayscale.png",1444,1718994761221],["help-viewer-toolbar-icons.png",1502,1718994761222],["icons",0,1718994761254,[["128x128.png",7614,1718994761224],["144x144.png",12329,1718994761225],["16x16.png",362,1718994761226],["192x192.png",14839,1718994761227],["32x32.png",818,1718994761229],["36x36.png",962,1718994761231],["48x48.png",3903,1718994761232],["512x512.png",35308,1718994761233],["72x72.png",5510,1718994761235],["96x96.png",7515,1718994761236],["apple-icon-180x180.png",16614,1718994761237],["gay-es-paint-16x16-alt.png",451,1718994761238],["gay-es-paint-16x16-light-outline.png",518,1718994761239],["gay-es-paint-16x16.png",518,1718994761240],["gay-es-paint-32x32-light-outline.png",1019,1718994761241],["gay-es-paint-32x32.png",992,1718994761241],["jspaint.icns",9918,1718994761242],["jspaint.ico",10134,1718994761243],["jspaint.svg",63384,1718994761245],["ms-icon-144x144.png",12329,1718994761246],["ms-icon-150x150.png",13183,1718994761247],["ms-icon-310x310.png",35821,1718994761249],["ms-icon-70x70.png",5396,1718994761250],["og-image-279x279.jpg",13860,1718994761251],["safari-pinned-tab-source.svg",3685,1718994761251],["safari-pinned-tab.svg",462,1718994761254],["silhouette-48x48.svg",442,1718994761254]]],["info-16x16-8bpp.png",431,1718994761255],["info-32x32-1bpp.png",469,1718994761256],["info-32x32-8bpp.png",516,1718994761257],["info-32x32-8bpp.svg",4463,1718994761258],["mspaint-win98-reference-tool-windows.png",8758,1718994761259],["mspaint-win98-reference.png",7956,1718994761260],["new.gif",777,1718994761260],["nuke-32x32-8bpp.png",603,1718994761261],["options-airbrush-size.png",362,1718994761263],["options-magnification.png",250,1718994761264],["options-magnification.svg",11202,1718994761265],["question-32x32-1bpp.png",488,1718994761266],["question-32x32-8bpp.png",529,1718994761267],["question-32x32-8bpp.svg",6114,1718994761268],["text-tools.png",3192,1718994761269],["tracky-mouse-16x16.png",330,1718994761270],["transforms",0,1718994761273,[["skew-x.png",236,1718994761272],["skew-y.png",253,1718994761272],["stretch-x.png",187,1718994761273],["stretch-y.png",190,1718994761274]]],["warning-16x16-8bpp.png",417,1718994761275],["warning-32x32-1bpp.png",476,1718994761276],["warning-32x32-8bpp.png",504,1718994761277],["warning-32x32-8bpp.svg",4201,1718994761277],["windows-16x16.png",428,1718994761279],["windows-32x32.png",504,1718994761280],["winter",0,1718994761282,[["present.png",449,1718994761281],["tools.png",2434,1718994761283]]]]],["index.html",6397,1718994761284],["lib",0,1718994761625,[["98.css",0,1718994761287,[["98.custom-build.css",14473,1718994761285],["98.custom-build.rtl.css",23323,1718994761286],["98.custom-src.css",17986,1718994761287],["modified-build.js",2242,1718994761287]]],["anypalette-0.6.0.js",390411,1718994761294],["bmp.js",22635,1718994761295],["FileSaver.js",6320,1718994761288],["firebase.js",396260,1718994761298],["font-detective.js",9207,1718994761299],["gif.js",0,1718994761301,[["gif.js",13513,1718994761301],["gif.worker.js",16695,1718994761302]]],["imagetracer_v1.2.5.js",47943,1718994761303],["jquery-3.4.1.min.js",88147,1718994761304],["konami.js",1158,1718994761305],["libtess.min.js",17306,1718994761306],["os-gui",0,1718994761314,[["$Window.js",63107,1718994761307],["blue.css",6232,1718994761309],["layout.css",2321,1718994761310],["layout.rtl.css",2457,1718994761310],["MenuBar.js",40427,1718994761308],["parse-theme.js",13480,1718994761311],["peggys-pastels.css",6260,1718994761312],["windows-98.css",58571,1718994761313],["windows-default.css",6225,1718994761314]]],["pako-2.0.3.min.js",44042,1718994761316],["pdf.js",0,1718994761339,[["build",0,1718994761337,[["pdf.js",421110,1718994761320],["pdf.sandbox.js",631459,1718994761324],["pdf.worker.js",1684881,1718994761338]]],["LICENSE",10351,1718994761317],["web",0,1718994761624,[["cmaps",0,1718994761471,[["78-EUC-H.bcmap",2404,1718994761339],["78-EUC-V.bcmap",173,1718994761340],["78-H.bcmap",2379,1718994761340],["78-RKSJ-H.bcmap",2398,1718994761341],["78-RKSJ-V.bcmap",173,1718994761342],["78-V.bcmap",169,1718994761342],["78ms-RKSJ-H.bcmap",2651,1718994761343],["78ms-RKSJ-V.bcmap",290,1718994761344],["83pv-RKSJ-H.bcmap",905,1718994761344],["90ms-RKSJ-H.bcmap",721,1718994761345],["90ms-RKSJ-V.bcmap",290,1718994761346],["90msp-RKSJ-H.bcmap",715,1718994761346],["90msp-RKSJ-V.bcmap",291,1718994761347],["90pv-RKSJ-H.bcmap",982,1718994761348],["90pv-RKSJ-V.bcmap",260,1718994761349],["Add-H.bcmap",2419,1718994761350],["Add-RKSJ-H.bcmap",2413,1718994761350],["Add-RKSJ-V.bcmap",287,1718994761351],["Add-V.bcmap",282,1718994761351],["Adobe-CNS1-0.bcmap",317,1718994761353],["Adobe-CNS1-1.bcmap",371,1718994761354],["Adobe-CNS1-2.bcmap",376,1718994761354],["Adobe-CNS1-3.bcmap",401,1718994761355],["Adobe-CNS1-4.bcmap",405,1718994761355],["Adobe-CNS1-5.bcmap",406,1718994761356],["Adobe-CNS1-6.bcmap",406,1718994761356],["Adobe-CNS1-UCS2.bcmap",41193,1718994761358],["Adobe-GB1-0.bcmap",217,1718994761358],["Adobe-GB1-1.bcmap",250,1718994761359],["Adobe-GB1-2.bcmap",465,1718994761359],["Adobe-GB1-3.bcmap",470,1718994761360],["Adobe-GB1-4.bcmap",601,1718994761360],["Adobe-GB1-5.bcmap",625,1718994761361],["Adobe-GB1-UCS2.bcmap",33974,1718994761362],["Adobe-Japan1-0.bcmap",225,1718994761362],["Adobe-Japan1-1.bcmap",226,1718994761363],["Adobe-Japan1-2.bcmap",233,1718994761364],["Adobe-Japan1-3.bcmap",242,1718994761364],["Adobe-Japan1-4.bcmap",337,1718994761365],["Adobe-Japan1-5.bcmap",430,1718994761366],["Adobe-Japan1-6.bcmap",485,1718994761366],["Adobe-Japan1-UCS2.bcmap",40951,1718994761367],["Adobe-Korea1-0.bcmap",241,1718994761368],["Adobe-Korea1-1.bcmap",386,1718994761368],["Adobe-Korea1-2.bcmap",391,1718994761369],["Adobe-Korea1-UCS2.bcmap",23293,1718994761370],["B5-H.bcmap",1086,1718994761370],["B5-V.bcmap",142,1718994761372],["B5pc-H.bcmap",1099,1718994761372],["B5pc-V.bcmap",144,1718994761372],["CNS-EUC-H.bcmap",1780,1718994761373],["CNS-EUC-V.bcmap",1920,1718994761373],["CNS1-H.bcmap",706,1718994761374],["CNS1-V.bcmap",143,1718994761374],["CNS2-H.bcmap",504,1718994761375],["CNS2-V.bcmap",93,1718994761376],["ETen-B5-H.bcmap",1125,1718994761377],["ETen-B5-V.bcmap",158,1718994761378],["ETenms-B5-H.bcmap",101,1718994761379],["ETenms-B5-V.bcmap",172,1718994761379],["ETHK-B5-H.bcmap",4426,1718994761376],["ETHK-B5-V.bcmap",158,1718994761377],["EUC-H.bcmap",578,1718994761380],["EUC-V.bcmap",170,1718994761381],["Ext-H.bcmap",2536,1718994761381],["Ext-RKSJ-H.bcmap",2542,1718994761381],["Ext-RKSJ-V.bcmap",218,1718994761383],["Ext-V.bcmap",215,1718994761383],["GB-EUC-H.bcmap",549,1718994761384],["GB-EUC-V.bcmap",179,1718994761385],["GB-H.bcmap",528,1718994761385],["GB-V.bcmap",175,1718994761385],["GBK-EUC-H.bcmap",14692,1718994761386],["GBK-EUC-V.bcmap",180,1718994761387],["GBK2K-H.bcmap",19662,1718994761388],["GBK2K-V.bcmap",219,1718994761389],["GBKp-EUC-H.bcmap",14686,1718994761389],["GBKp-EUC-V.bcmap",181,1718994761390],["GBpc-EUC-H.bcmap",557,1718994761395],["GBpc-EUC-V.bcmap",181,1718994761396],["GBT-EUC-H.bcmap",7290,1718994761391],["GBT-EUC-V.bcmap",180,1718994761391],["GBT-H.bcmap",7269,1718994761392],["GBT-V.bcmap",176,1718994761393],["GBTpc-EUC-H.bcmap",7298,1718994761393],["GBTpc-EUC-V.bcmap",182,1718994761394],["H.bcmap",553,1718994761397],["Hankaku.bcmap",132,1718994761406],["Hiragana.bcmap",124,1718994761406],["HKdla-B5-H.bcmap",2654,1718994761397],["HKdla-B5-V.bcmap",148,1718994761398],["HKdlb-B5-H.bcmap",2414,1718994761399],["HKdlb-B5-V.bcmap",148,1718994761399],["HKgccs-B5-H.bcmap",2292,1718994761400],["HKgccs-B5-V.bcmap",149,1718994761401],["HKm314-B5-H.bcmap",1772,1718994761402],["HKm314-B5-V.bcmap",149,1718994761402],["HKm471-B5-H.bcmap",2171,1718994761403],["HKm471-B5-V.bcmap",149,1718994761404],["HKscs-B5-H.bcmap",4437,1718994761404],["HKscs-B5-V.bcmap",159,1718994761405],["Katakana.bcmap",100,1718994761417],["KSC-EUC-H.bcmap",1848,1718994761407],["KSC-EUC-V.bcmap",164,1718994761408],["KSC-H.bcmap",1831,1718994761408],["KSC-Johab-H.bcmap",16791,1718994761409],["KSC-Johab-V.bcmap",166,1718994761410],["KSC-V.bcmap",160,1718994761410],["KSCms-UHC-H.bcmap",2787,1718994761411],["KSCms-UHC-HW-H.bcmap",2789,1718994761412],["KSCms-UHC-HW-V.bcmap",169,1718994761413],["KSCms-UHC-V.bcmap",166,1718994761414],["KSCpc-EUC-H.bcmap",2024,1718994761414],["KSCpc-EUC-V.bcmap",166,1718994761416],["LICENSE",2116,1718994761419],["NWP-H.bcmap",2765,1718994761420],["NWP-V.bcmap",252,1718994761421],["RKSJ-H.bcmap",534,1718994761421],["RKSJ-V.bcmap",170,1718994761422],["Roman.bcmap",96,1718994761423],["UniCNS-UCS2-H.bcmap",48280,1718994761424],["UniCNS-UCS2-V.bcmap",156,1718994761425],["UniCNS-UTF16-H.bcmap",50419,1718994761426],["UniCNS-UTF16-V.bcmap",156,1718994761426],["UniCNS-UTF32-H.bcmap",52679,1718994761428],["UniCNS-UTF32-V.bcmap",160,1718994761429],["UniCNS-UTF8-H.bcmap",53629,1718994761431],["UniCNS-UTF8-V.bcmap",157,1718994761432],["UniGB-UCS2-H.bcmap",43366,1718994761434],["UniGB-UCS2-V.bcmap",193,1718994761435],["UniGB-UTF16-H.bcmap",44086,1718994761436],["UniGB-UTF16-V.bcmap",178,1718994761437],["UniGB-UTF32-H.bcmap",45738,1718994761439],["UniGB-UTF32-V.bcmap",182,1718994761440],["UniGB-UTF8-H.bcmap",46837,1718994761440],["UniGB-UTF8-V.bcmap",181,1718994761441],["UniJIS-UCS2-H.bcmap",25439,1718994761442],["UniJIS-UCS2-HW-H.bcmap",119,1718994761442],["UniJIS-UCS2-HW-V.bcmap",680,1718994761443],["UniJIS-UCS2-V.bcmap",664,1718994761444],["UniJIS-UTF16-H.bcmap",39443,1718994761445],["UniJIS-UTF16-V.bcmap",643,1718994761447],["UniJIS-UTF32-H.bcmap",40539,1718994761448],["UniJIS-UTF32-V.bcmap",677,1718994761449],["UniJIS-UTF8-H.bcmap",41695,1718994761450],["UniJIS-UTF8-V.bcmap",678,1718994761451],["UniJIS2004-UTF16-H.bcmap",39534,1718994761452],["UniJIS2004-UTF16-V.bcmap",647,1718994761452],["UniJIS2004-UTF32-H.bcmap",40630,1718994761453],["UniJIS2004-UTF32-V.bcmap",681,1718994761454],["UniJIS2004-UTF8-H.bcmap",41779,1718994761455],["UniJIS2004-UTF8-V.bcmap",682,1718994761456],["UniJISPro-UCS2-HW-V.bcmap",705,1718994761457],["UniJISPro-UCS2-V.bcmap",689,1718994761457],["UniJISPro-UTF8-V.bcmap",726,1718994761458],["UniJISX0213-UTF32-H.bcmap",40517,1718994761459],["UniJISX0213-UTF32-V.bcmap",684,1718994761460],["UniJISX02132004-UTF32-H.bcmap",40608,1718994761461],["UniJISX02132004-UTF32-V.bcmap",688,1718994761463],["UniKS-UCS2-H.bcmap",25783,1718994761464],["UniKS-UCS2-V.bcmap",178,1718994761465],["UniKS-UTF16-H.bcmap",26327,1718994761466],["UniKS-UTF16-V.bcmap",164,1718994761467],["UniKS-UTF32-H.bcmap",26451,1718994761468],["UniKS-UTF32-V.bcmap",168,1718994761469],["UniKS-UTF8-H.bcmap",27790,1718994761470],["UniKS-UTF8-V.bcmap",169,1718994761470],["V.bcmap",166,1718994761471],["WP-Symbol.bcmap",179,1718994761471]]],["compressed.tracemonkey-pldi-09.pdf",1016315,1718994761476],["debugger.js",19269,1718994761478],["images",0,1718994761518,[["annotation-check.svg",426,1718994761479],["annotation-comment.svg",899,1718994761480],["annotation-help.svg",2194,1718994761481],["annotation-insert.svg",418,1718994761483],["annotation-key.svg",1463,1718994761484],["annotation-newparagraph.svg",437,1718994761485],["annotation-noicon.svg",165,1718994761486],["annotation-note.svg",1083,1718994761486],["annotation-paragraph.svg",1159,1718994761487],["findbarButton-next.svg",437,1718994761488],["findbarButton-previous.svg",434,1718994761488],["grab.cur",326,1718994761489],["grabbing.cur",326,1718994761490],["loading-dark.svg",1609,1718994761490],["loading-icon.gif",2545,1718994761491],["loading.svg",1559,1718994761491],["secondaryToolbarButton-documentProperties.svg",544,1718994761492],["secondaryToolbarButton-firstPage.svg",228,1718994761493],["secondaryToolbarButton-handTool.svg",312,1718994761494],["secondaryToolbarButton-lastPage.svg",229,1718994761496],["secondaryToolbarButton-rotateCcw.svg",204,1718994761497],["secondaryToolbarButton-rotateCw.svg",497,1718994761499],["secondaryToolbarButton-scrollHorizontal.svg",275,1718994761499],["secondaryToolbarButton-scrollVertical.svg",280,1718994761500],["secondaryToolbarButton-scrollWrapped.svg",482,1718994761501],["secondaryToolbarButton-selectTool.svg",481,1718994761502],["secondaryToolbarButton-spreadEven.svg",1022,1718994761503],["secondaryToolbarButton-spreadNone.svg",169,1718994761503],["secondaryToolbarButton-spreadOdd.svg",678,1718994761504],["shadow.png",269,1718994761505],["toolbarButton-bookmark.svg",115,1718994761505],["toolbarButton-currentOutlineItem.svg",581,1718994761506],["toolbarButton-download.svg",627,1718994761506],["toolbarButton-menuArrow.svg",224,1718994761507],["toolbarButton-openFile.svg",662,1718994761508],["toolbarButton-pageDown.svg",496,1718994761508],["toolbarButton-pageUp.svg",501,1718994761509],["toolbarButton-presentationMode.svg",390,1718994761510],["toolbarButton-print.svg",586,1718994761510],["toolbarButton-search.svg",448,1718994761511],["toolbarButton-secondaryToolbarToggle.svg",525,1718994761512],["toolbarButton-sidebarToggle.svg",650,1718994761513],["toolbarButton-viewAttachments.svg",353,1718994761514],["toolbarButton-viewLayers.svg",685,1718994761515],["toolbarButton-viewOutline.svg",466,1718994761515],["toolbarButton-viewThumbnail.svg",638,1718994761516],["toolbarButton-zoomIn.svg",400,1718994761517],["toolbarButton-zoomOut.svg",358,1718994761517],["treeitem-collapsed.svg",93,1718994761518],["treeitem-expanded.svg",94,1718994761519]]],["locale",0,1718994761620,[["ach",0,1718994761520,[["viewer.properties",8871,1718994761520]]],["af",0,1718994761520,[["viewer.properties",7704,1718994761521]]],["an",0,1718994761521,[["viewer.properties",12077,1718994761522]]],["ar",0,1718994761522,[["viewer.properties",13285,1718994761523]]],["ast",0,1718994761523,[["viewer.properties",6763,1718994761524]]],["az",0,1718994761524,[["viewer.properties",12095,1718994761525]]],["be",0,1718994761525,[["viewer.properties",14602,1718994761526]]],["bg",0,1718994761526,[["viewer.properties",14056,1718994761527]]],["bn",0,1718994761528,[["viewer.properties",14962,1718994761528]]],["bo",0,1718994761529,[["viewer.properties",11075,1718994761530]]],["br",0,1718994761531,[["viewer.properties",12060,1718994761531]]],["brx",0,1718994761533,[["viewer.properties",12528,1718994761533]]],["bs",0,1718994761533,[["viewer.properties",9106,1718994761534]]],["ca",0,1718994761534,[["viewer.properties",12269,1718994761535]]],["cak",0,1718994761535,[["viewer.properties",12405,1718994761536]]],["ckb",0,1718994761536,[["viewer.properties",12907,1718994761536]]],["cs",0,1718994761537,[["viewer.properties",12117,1718994761537]]],["cy",0,1718994761538,[["viewer.properties",11757,1718994761538]]],["da",0,1718994761538,[["viewer.properties",11743,1718994761539]]],["de",0,1718994761539,[["viewer.properties",12330,1718994761540]]],["dsb",0,1718994761540,[["viewer.properties",12222,1718994761541]]],["el",0,1718994761541,[["viewer.properties",15089,1718994761542]]],["en-CA",0,1718994761542,[["viewer.properties",11473,1718994761543]]],["en-GB",0,1718994761543,[["viewer.properties",11467,1718994761544]]],["en-US",0,1718994761545,[["viewer.properties",11253,1718994761545]]],["eo",0,1718994761546,[["viewer.properties",11894,1718994761546]]],["es-AR",0,1718994761547,[["viewer.properties",12005,1718994761547]]],["es-CL",0,1718994761548,[["viewer.properties",12208,1718994761548]]],["es-ES",0,1718994761548,[["viewer.properties",12241,1718994761549]]],["es-MX",0,1718994761549,[["viewer.properties",12031,1718994761550]]],["et",0,1718994761550,[["viewer.properties",11324,1718994761550]]],["eu",0,1718994761551,[["viewer.properties",12091,1718994761551]]],["fa",0,1718994761551,[["viewer.properties",11598,1718994761552]]],["ff",0,1718994761552,[["viewer.properties",11003,1718994761553]]],["fi",0,1718994761553,[["viewer.properties",11919,1718994761553]]],["fr",0,1718994761554,[["viewer.properties",12480,1718994761554]]],["fy-NL",0,1718994761554,[["viewer.properties",11817,1718994761555]]],["ga-IE",0,1718994761555,[["viewer.properties",8180,1718994761556]]],["gd",0,1718994761556,[["viewer.properties",12055,1718994761556]]],["gl",0,1718994761557,[["viewer.properties",12314,1718994761557]]],["gn",0,1718994761558,[["viewer.properties",12192,1718994761558]]],["gu-IN",0,1718994761558,[["viewer.properties",15239,1718994761559]]],["he",0,1718994761559,[["viewer.properties",13080,1718994761560]]],["hi-IN",0,1718994761560,[["viewer.properties",14935,1718994761560]]],["hr",0,1718994761562,[["viewer.properties",12182,1718994761562]]],["hsb",0,1718994761563,[["viewer.properties",12239,1718994761563]]],["hu",0,1718994761564,[["viewer.properties",12396,1718994761564]]],["hy-AM",0,1718994761564,[["viewer.properties",13978,1718994761565]]],["hye",0,1718994761565,[["viewer.properties",14791,1718994761566]]],["ia",0,1718994761566,[["viewer.properties",12174,1718994761567]]],["id",0,1718994761567,[["viewer.properties",11852,1718994761567]]],["is",0,1718994761568,[["viewer.properties",10977,1718994761568]]],["it",0,1718994761569,[["viewer.properties",8954,1718994761569]]],["ja",0,1718994761569,[["viewer.properties",12892,1718994761570]]],["ka",0,1718994761570,[["viewer.properties",16752,1718994761570]]],["kab",0,1718994761571,[["viewer.properties",11950,1718994761571]]],["kk",0,1718994761572,[["viewer.properties",14418,1718994761572]]],["km",0,1718994761572,[["viewer.properties",13654,1718994761573]]],["kn",0,1718994761573,[["viewer.properties",11807,1718994761575]]],["ko",0,1718994761576,[["viewer.properties",12198,1718994761576]]],["lij",0,1718994761577,[["viewer.properties",11397,1718994761577]]],["lo",0,1718994761578,[["viewer.properties",7977,1718994761578]]],["locale.properties",4673,1718994761579],["lt",0,1718994761579,[["viewer.properties",12303,1718994761580]]],["ltg",0,1718994761580,[["viewer.properties",9939,1718994761581]]],["lv",0,1718994761581,[["viewer.properties",11321,1718994761581]]],["meh",0,1718994761582,[["viewer.properties",5361,1718994761582]]],["mk",0,1718994761583,[["viewer.properties",7495,1718994761583]]],["mr",0,1718994761583,[["viewer.properties",14634,1718994761584]]],["ms",0,1718994761584,[["viewer.properties",11105,1718994761585]]],["my",0,1718994761585,[["viewer.properties",12447,1718994761585]]],["nb-NO",0,1718994761586,[["viewer.properties",11591,1718994761586]]],["ne-NP",0,1718994761586,[["viewer.properties",11489,1718994761587]]],["nl",0,1718994761587,[["viewer.properties",12055,1718994761588]]],["nn-NO",0,1718994761589,[["viewer.properties",11569,1718994761592]]],["oc",0,1718994761593,[["viewer.properties",12356,1718994761593]]],["pa-IN",0,1718994761594,[["viewer.properties",15174,1718994761594]]],["pl",0,1718994761595,[["viewer.properties",12292,1718994761596]]],["pt-BR",0,1718994761596,[["viewer.properties",12165,1718994761597]]],["pt-PT",0,1718994761597,[["viewer.properties",12181,1718994761597]]],["rm",0,1718994761598,[["viewer.properties",12438,1718994761598]]],["ro",0,1718994761599,[["viewer.properties",11939,1718994761599]]],["ru",0,1718994761600,[["viewer.properties",14712,1718994761600]]],["scn",0,1718994761600,[["viewer.properties",4840,1718994761600]]],["si",0,1718994761600,[["viewer.properties",12153,1718994761602]]],["sk",0,1718994761602,[["viewer.properties",12332,1718994761602]]],["sl",0,1718994761602,[["viewer.properties",11843,1718994761602]]],["son",0,1718994761604,[["viewer.properties",7441,1718994761604]]],["sq",0,1718994761604,[["viewer.properties",11751,1718994761605]]],["sr",0,1718994761605,[["viewer.properties",14463,1718994761606]]],["sv-SE",0,1718994761607,[["viewer.properties",11650,1718994761607]]],["szl",0,1718994761608,[["viewer.properties",11890,1718994761608]]],["ta",0,1718994761610,[["viewer.properties",13142,1718994761610]]],["te",0,1718994761610,[["viewer.properties",13500,1718994761610]]],["th",0,1718994761610,[["viewer.properties",15738,1718994761611]]],["tl",0,1718994761611,[["viewer.properties",11932,1718994761613]]],["tr",0,1718994761613,[["viewer.properties",11963,1718994761614]]],["trs",0,1718994761614,[["viewer.properties",9944,1718994761614]]],["uk",0,1718994761615,[["viewer.properties",14458,1718994761615]]],["ur",0,1718994761615,[["viewer.properties",12341,1718994761616]]],["uz",0,1718994761616,[["viewer.properties",7287,1718994761617]]],["vi",0,1718994761617,[["viewer.properties",12581,1718994761617]]],["wo",0,1718994761618,[["viewer.properties",5005,1718994761618]]],["xh",0,1718994761618,[["viewer.properties",8158,1718994761619]]],["zh-CN",0,1718994761619,[["viewer.properties",11408,1718994761620]]],["zh-TW",0,1718994761620,[["viewer.properties",11491,1718994761620]]]]],["viewer.css",61078,1718994761621],["viewer.html",22529,1718994761622],["viewer.js",404322,1718994761625]]]]],["tracky-mouse",0,1718994761734,[["facemesh.worker.js",1115,1718994761627],["images",0,1718994761630,[["tracky-mouse-logo-16.png",330,1718994761628],["tracky-mouse-logo-32.png",830,1718994761629],["tracky-mouse-logo-512.png",16300,1718994761630],["tracky-mouse-logo.svg",4246,1718994761631]]],["index.html",1688,1718994761631],["lib",0,1718994761688,[["clmtrackr.js",2403376,1718994761642],["facemesh",0,1718994761649,[["blazeface",0,1718994761647,[["group1-shard1of1.bin",401768,1718994761646],["model.json",64036,1718994761648]]],["facemesh",0,1718994761670,[["group1-shard1of1.bin",2955780,1718994761669],["model.json",93029,1718994761671]]],["facemesh.js",33362,1718994761649]]],["jsfeat-min.js",66093,1718994761672],["stats.js",3997,1718994761673],["tf.js",4229682,1718994761689]]],["LICENSE.txt",1091,1718994761625],["README.md",9804,1718994761626],["tracky-mouse-electron",0,1718994761729,[["forge.config.js",1960,1718994761728],["src",0,1718994761731,[["electron-main.js",3484,1718994761731],["preload.js",365,1718994761732]]]]],["tracky-mouse.css",556,1718994761733],["tracky-mouse.js",36173,1718994761735]]],["UPNG.js",44424,1718994761290],["UTIF.js",76665,1718994761291]]],["localization",0,1718994761745,[["parse-rc-file.js",3894,1718994761744],["preprocess.js",4169,1718994761747]]],["src",0,1718994761784,[["$ColorBox.js",5405,1718994761749],["$Component.js",12558,1718994761751],["$FontBox.js",2912,1718994761752],["$ToolBox.js",3393,1718994761753],["$ToolWindow.js",2956,1718994761755],["app-localization.js",27246,1718994761764],["app.js",84939,1718994761765],["edit-colors.js",25227,1718994761766],["electron-injected.js",7770,1718994761767],["electron-main.js",10792,1718994761768],["error-handling-basic.js",843,1718994761768],["error-handling-enhanced.js",2350,1718994761769],["extra-tools.js",3521,1718994761770],["functions.js",129222,1718994761771],["Handles.js",7701,1718994761756],["help.js",15304,1718994761772],["helpers.js",8424,1718994761772],["image-manipulation.js",46970,1718994761773],["imgur.js",6377,1718994761774],["manage-storage.js",4196,1718994761775],["menus.js",58566,1718994761776],["msgbox.js",5048,1718994761777],["OnCanvasHelperLayer.js",415,1718994761758],["OnCanvasObject.js",1545,1718994761759],["OnCanvasSelection.js",12783,1718994761760],["OnCanvasTextBox.js",9789,1718994761760],["sessions.js",20648,1718994761778],["simulate-random-gestures.js",8627,1718994761779],["speech-recognition.js",89153,1718994761780],["storage.js",1810,1718994761781],["test-news.js",2884,1718994761781],["theme.js",1856,1718994761782],["tool-options.js",12038,1718994761783],["tools.js",53358,1718994761784],["vaporwave-fun.js",6410,1718994761785]]],["styles",0,1718994761788,[["layout.css",26933,1718994761786],["layout.rtl.css",26263,1718994761786],["normalize.css",455,1718994761787],["print.css",491,1718994761787],["themes",0,1718994761788,[["classic.css",15793,1718994761788]]]]]]],["kiwiirc",0,1718994761789,[["index.html",967,1718994761789],["static",0,1718994761813,[["config.json",672,1718994761790],["css",0,1718994761790,[["app.e3f54fec.css",89179,1718994761791]]],["fonts",0,1718994761798,[["fontawesome-webfont.674f50d2.eot",165742,1718994761794],["fontawesome-webfont.af7ae505.woff2",77160,1718994761795],["fontawesome-webfont.b06871f2.ttf",165548,1718994761798],["fontawesome-webfont.fee66e71.woff",98024,1718994761799]]],["highlight.mp3",3823,1718994761799],["highlight.ogg",5674,1718994761800],["img",0,1718994761803,[["fontawesome-webfont.912ec66d.svg",447050,1718994761802],["kiwiLoadingLogo.ee10be5a.png",19587,1718994761803]]],["js",0,1718994761811,[["app.590b085d.js",478525,1718994761807],["vendor.4fec47b8.js",940828,1718994761812]]],["locales",0,1718994761813,[["en-us.json",13576,1718994761813]]],["themes",0,1718994761816,[["common",0,1718994761813,[["base.css",20146,1718994761815]]],["dark",0,1718994761815,[["theme.css",4777,1718994761816]]],["default",0,1718994761816,[["theme.css",2571,1718994761817]]]]]]]]],["Marked",0,1718994759640,[["marked.min.js",53372,1718994759640],["purify.min.js",20821,1718994759640]]],["Messenger",0,1718994759641,[["notification.mp3",4803,1718994759642]]],["MonacoEditor",0,1718994759642,[["vs",0,1718994759811,[["base",0,1718994759645,[["browser",0,1718994759643,[["ui",0,1718994759643,[["codicons",0,1718994759643,[["codicon",0,1718994759644,[["codicon.ttf",69776,1718994759644]]]]]]]]],["worker",0,1718994759646,[["workerMain.js",317546,1718994759648]]]]],["basic-languages",0,1718994759757,[["abap",0,1718994759648,[["abap.js",15097,1718994759649]]],["apex",0,1718994759650,[["apex.js",4886,1718994759651]]],["azcli",0,1718994759652,[["azcli.js",1784,1718994759652]]],["bat",0,1718994759653,[["bat.js",2777,1718994759654]]],["bicep",0,1718994759654,[["bicep.js",3473,1718994759655]]],["cameligo",0,1718994759656,[["cameligo.js",3127,1718994759657]]],["clojure",0,1718994759658,[["clojure.js",10583,1718994759658]]],["coffee",0,1718994759659,[["coffee.js",4528,1718994759660]]],["cpp",0,1718994759660,[["cpp.js",6380,1718994759661]]],["csharp",0,1718994759661,[["csharp.js",5462,1718994759662]]],["csp",0,1718994759663,[["csp.js",2351,1718994759664]]],["css",0,1718994759664,[["css.js",5441,1718994759665]]],["dart",0,1718994759666,[["dart.js",5184,1718994759667]]],["dockerfile",0,1718994759667,[["dockerfile.js",2815,1718994759668]]],["ecl",0,1718994759668,[["ecl.js",6274,1718994759669]]],["elixir",0,1718994759670,[["elixir.js",10697,1718994759671]]],["flow9",0,1718994759672,[["flow9.js",2746,1718994759673]]],["freemarker2",0,1718994759674,[["freemarker2.js",17278,1718994759675]]],["fsharp",0,1718994759676,[["fsharp.js",3921,1718994759676]]],["go",0,1718994759677,[["go.js",3587,1718994759678]]],["graphql",0,1718994759679,[["graphql.js",3200,1718994759680]]],["handlebars",0,1718994759680,[["handlebars.js",7954,1718994759681]]],["hcl",0,1718994759682,[["hcl.js",4522,1718994759683]]],["html",0,1718994759683,[["html.js",6006,1718994759684]]],["ini",0,1718994759685,[["ini.js",2033,1718994759685]]],["java",0,1718994759686,[["java.js",4155,1718994759687]]],["javascript",0,1718994759687,[["javascript.js",7235,1718994759688]]],["julia",0,1718994759689,[["julia.js",8163,1718994759689]]],["kotlin",0,1718994759690,[["kotlin.js",4377,1718994759690]]],["less",0,1718994759692,[["less.js",4830,1718994759692]]],["lexon",0,1718994759693,[["lexon.js",3373,1718994759694]]],["liquid",0,1718994759694,[["liquid.js",5132,1718994759695]]],["lua",0,1718994759695,[["lua.js",3055,1718994759696]]],["m3",0,1718994759697,[["m3.js",3747,1718994759698]]],["markdown",0,1718994759699,[["markdown.js",4730,1718994759699]]],["mips",0,1718994759700,[["mips.js",3513,1718994759700]]],["msdax",0,1718994759701,[["msdax.js",5848,1718994759702]]],["mysql",0,1718994759702,[["mysql.js",12193,1718994759703]]],["objective-c",0,1718994759704,[["objective-c.js",3350,1718994759705]]],["pascal",0,1718994759705,[["pascal.js",3933,1718994759706]]],["pascaligo",0,1718994759706,[["pascaligo.js",2944,1718994759707]]],["perl",0,1718994759708,[["perl.js",9189,1718994759708]]],["pgsql",0,1718994759709,[["pgsql.js",14340,1718994759710]]],["php",0,1718994759712,[["php.js",8959,1718994759713]]],["pla",0,1718994759714,[["pla.js",2615,1718994759715]]],["postiats",0,1718994759715,[["postiats.js",8798,1718994759716]]],["powerquery",0,1718994759717,[["powerquery.js",17885,1718994759718]]],["powershell",0,1718994759718,[["powershell.js",4215,1718994759719]]],["protobuf",0,1718994759719,[["protobuf.js",9989,1718994759720]]],["pug",0,1718994759720,[["pug.js",5760,1718994759721]]],["python",0,1718994759722,[["python.js",4759,1718994759722]]],["qsharp",0,1718994759723,[["qsharp.js",3862,1718994759724]]],["r",0,1718994759724,[["r.js",4059,1718994759725]]],["razor",0,1718994759726,[["razor.js",9948,1718994759726]]],["redis",0,1718994759727,[["redis.js",4492,1718994759728]]],["redshift",0,1718994759729,[["redshift.js",12742,1718994759729]]],["restructuredtext",0,1718994759730,[["restructuredtext.js",4851,1718994759731]]],["ruby",0,1718994759732,[["ruby.js",9438,1718994759733]]],["rust",0,1718994759733,[["rust.js",5094,1718994759734]]],["sb",0,1718994759734,[["sb.js",2759,1718994759735]]],["scala",0,1718994759736,[["scala.js",8254,1718994759737]]],["scheme",0,1718994759737,[["scheme.js",2705,1718994759738]]],["scss",0,1718994759739,[["scss.js",7342,1718994759739]]],["shell",0,1718994759740,[["shell.js",4009,1718994759740]]],["solidity",0,1718994759741,[["solidity.js",19539,1718994759741]]],["sophia",0,1718994759742,[["sophia.js",3702,1718994759742]]],["sparql",0,1718994759743,[["sparql.js",3490,1718994759744]]],["sql",0,1718994759745,[["sql.js",11229,1718994759745]]],["st",0,1718994759746,[["st.js",8320,1718994759747]]],["swift",0,1718994759747,[["swift.js",6095,1718994759748]]],["systemverilog",0,1718994759748,[["systemverilog.js",8555,1718994759749]]],["tcl",0,1718994759750,[["tcl.js",4503,1718994759751]]],["twig",0,1718994759752,[["twig.js",6906,1718994759753]]],["typescript",0,1718994759754,[["typescript.js",6567,1718994759754]]],["vb",0,1718994759755,[["vb.js",6721,1718994759756]]],["xml",0,1718994759756,[["xml.js",3579,1718994759757]]],["yaml",0,1718994759757,[["yaml.js",4478,1718994759758]]]]],["editor",0,1718994759774,[["editor.main.css",77200,1718994759760],["editor.main.js",2899768,1718994759773],["editor.main.nls.js",76849,1718994759775]]],["language",0,1718994759788,[["css",0,1718994759779,[["cssMode.js",34114,1718994759776],["cssWorker.js",752287,1718994759780]]],["html",0,1718994759783,[["htmlMode.js",34867,1718994759781],["htmlWorker.js",446862,1718994759784]]],["json",0,1718994759787,[["jsonMode.js",40310,1718994759786],["jsonWorker.js",129160,1718994759787]]],["typescript",0,1718994759808,[["tsMode.js",22809,1718994759789],["tsWorker.js",4761176,1718994759810]]]]],["loader.js",33158,1718994759812]]]]],["PDF.js",0,1718994759826,[["pdf.js",517405,1718994759816],["pdf.worker.js",2003877,1718994759828]]],["Pyodide",0,1718994759954,[["micropip-0.6.0-py3-none-any.whl",44393,1718994759830],["packaging-23.2-py3-none-any.whl",53011,1718994759831],["pyodide-lock.json",104902,1718994759833],["pyodide.asm.js",1065468,1718994759838],["pyodide.asm.wasm",8970331,1718994759904],["pyodide.js",14790,1718994759906],["python_stdlib.zip",8874549,1718994759953],["repodata.json",61754,1718994759954]]],["Quake3",0,1718994760153,[["Quake3Game.js",3617333,1718994759970],["Quake3Game.pk3",39868228,1718994760163]]],["Ruffle",0,1718994760546,[["25d527aab98ce516091f.wasm",11558041,1718994760242],["503441c33ab5aa23ffbf.wasm",13829756,1718994760336],["946e63a1b2ce7ee97994.wasm",13536255,1718994760449],["core.ruffle.018a053a60203b621ca1.js",58884,1718994760450],["core.ruffle.04cd80ee4f74150307f1.js",81621,1718994760451],["core.ruffle.28b9f4000baae2d0fbf0.js",85446,1718994760453],["core.ruffle.8d61eb08e3bb63255a98.js",56435,1718994760454],["e3022759bd5eb0c94cb0.wasm",11813741,1718994760544],["ruffle.js",333532,1718994760546]]],["SheetJS",0,1718994760552,[["xlsx.full.min.js",914259,1718994760550],["xlsx.zahl.js",127396,1718994760552]]],["SpaceCadet",0,1718994760598,[["SpaceCadetPinball.data",2285418,1718994760564],["SpaceCadetPinball.js",218552,1718994760566],["SpaceCadetPinball.wasm",4539452,1718994760600]]],["StableDiffusion",0,1718994760625,[["config.json",416,1718994760602],["scheduler_dpm_solver_multistep_consts.json",2244,1718994760603],["scheduler_pndm_consts.json",3498,1718994760604],["stable_diffusion.js",19161,1718994760605],["stable_diffusion_webgpu.wasm",7784670,1718994760624],["tokenizers-wasm",0,1718994760648,[["tokenizer.json",2322395,1718994760637],["tokenizers_wasm.js",12713,1718994760638],["tokenizers_wasm_bg.wasm",1508125,1718994760649]]]]],["TinyMCE",0,1718994760722,[["icons",0,1718994760649,[["default",0,1718994760650,[["icons.min.js",69427,1718994760650]]]]],["models",0,1718994760650,[["dom",0,1718994760651,[["model.min.js",96668,1718994760651]]]]],["plugins",0,1718994760705,[["code",0,1718994760652,[["plugin.min.js",880,1718994760653]]],["help",0,1718994760698,[["js",0,1718994760654,[["i18n",0,1718994760654,[["keynav",0,1718994760697,[["ar.js",6237,1718994760655],["bg_BG.js",7086,1718994760656],["ca.js",5013,1718994760657],["cs.js",4950,1718994760657],["da.js",4345,1718994760658],["de.js",5043,1718994760659],["el.js",7652,1718994760660],["en.js",4007,1718994760661],["es.js",4957,1718994760662],["eu.js",4352,1718994760663],["fa.js",5745,1718994760664],["fi.js",4890,1718994760664],["fr_FR.js",5000,1718994760665],["he_IL.js",5289,1718994760666],["hi.js",7231,1718994760667],["hr.js",4894,1718994760668],["hu_HU.js",4855,1718994760669],["id.js",4277,1718994760670],["it.js",5163,1718994760671],["ja.js",5072,1718994760673],["kk.js",6874,1718994760674],["ko_KR.js",4771,1718994760676],["ms.js",4160,1718994760677],["nb_NO.js",4625,1718994760679],["nl.js",4541,1718994760680],["pl.js",5009,1718994760680],["pt_BR.js",4400,1718994760682],["pt_PT.js",4493,1718994760683],["ro.js",5002,1718994760684],["ru.js",7059,1718994760686],["sk.js",5053,1718994760687],["sl_SI.js",4709,1718994760688],["sv_SE.js",4338,1718994760689],["th_TH.js",7652,1718994760690],["tr.js",4666,1718994760691],["uk.js",7523,1718994760692],["vi.js",5158,1718994760694],["zh_CN.js",3929,1718994760696],["zh_TW.js",4077,1718994760698]]]]]]],["plugin.min.js",10544,1718994760699]]],["image",0,1718994760700,[["plugin.min.js",19550,1718994760701]]],["link",0,1718994760702,[["plugin.min.js",15815,1718994760703]]],["save",0,1718994760703,[["plugin.min.js",1595,1718994760704]]],["wordcount",0,1718994760706,[["plugin.min.js",12037,1718994760706]]]]],["skins",0,1718994760708,[["content",0,1718994760707,[["default",0,1718994760707,[["content.min.css",4247,1718994760708]]]]],["ui",0,1718994760709,[["oxide",0,1718994760713,[["content.inline.min.css",23431,1718994760710],["content.min.css",23101,1718994760712],["skin.min.css",72032,1718994760713],["skin.shadowdom.min.css",509,1718994760714]]]]]]],["themes",0,1718994760715,[["silver",0,1718994760718,[["theme.min.js",405907,1718994760719]]]]],["tinymce.min.js",427886,1718994760723]]],["Video.js",0,1718994760728,[["video-js.min.css",44077,1718994760726],["video.min.js",562295,1718994760730],["Youtube.min.js",13468,1718994760725]]],["Vim.js",0,1718994760749,[["vim.js",1119442,1718994760735],["vim.js.mem",1503376,1718994760750]]],["Virtual x86",0,1718994760766,[["bios",0,1718994760754,[["seabios.bin",131072,1718994760754],["vgabios.bin",36352,1718994760755]]],["libv86.js",285529,1718994760758],["v86.wasm",1611371,1718994760767]]],["Webamp",0,1718994760774,[["butterchurn.min.js",250051,1718994760770],["webamp.bundle.min.js",869999,1718994760776]]],["Xterm.js",0,1718994760782,[["local-echo.js",13629,1718994760777],["ua-parser.js",16668,1718994760779],["xterm-addon-fit.js",1459,1718994760780],["xterm.css",2388,1718994760781],["xterm.js",283370,1718994760782]]]]],["robots.txt",69,1720554493934],["rss.xml",393,1720554494063],["screenshot.png",264193,1718994762467],["session.json",2,1718994762467],["sitemap.xml",2310,1720554493933],["System",0,1718994762438,[["7zip",0,1718994761829,[["7zz.es6.js",99802,1718994761818],["7zz.wasm",1591720,1718994761830]]],["BrowserFS",0,1718994761833,[["browserfs.min.js",110437,1718994761832],["extrafs.min.js",123913,1718994761834]]],["coremark.wasm",33990,1718994762340],["cowsay.wasm",771979,1718994762347],["fortune.wasm",2413765,1718994762366],["Hexells",0,1718994761840,[["ca.js",25360,1718994761836],["demo.js",11234,1718994761836],["layer1.png",645811,1718994761839],["layer2.png",165489,1718994761840],["twgl.min.js",64143,1718994761841],["UPNG.min.js",26285,1718994761835]]],["html-to-image",0,1718994762367,[["html-to-image.js",14255,1718994762368]]],["Icons",0,1718994762288,[["144x144",0,1718994761917,[["audio.png",9275,1718994761842],["audio.webp",7746,1718994761843],["boxedwine.png",19041,1718994761844],["boxedwine.webp",16468,1718994761845],["chat.png",134103,1718994761847],["chromium.png",8068,1718994761848],["chromium.webp",6750,1718994761848],["classicube.png",2884,1718994761849],["classicube.webp",2366,1718994761849],["compressed.png",5730,1718994761850],["compressed.webp",4732,1718994761851],["copying.png",1481,1718994761851],["copying.webp",1386,1718994761852],["desktop.png",4402,1718994761853],["desktop.webp",4056,1718994761853],["dino.png",815,1718994761854],["dino.webp",572,1718994761854],["documents.png",5599,1718994761855],["documents.webp",4984,1718994761856],["dxball.png",15355,1718994761857],["dxball.webp",10136,1718994761857],["emulator.png",7150,1718994761858],["emulator.webp",6296,1718994761859],["eruda.png",27464,1718994761860],["eruda.webp",20734,1718994761860],["executable.png",1536,1718994761861],["executable.webp",1316,1718994761862],["folder.png",3529,1718994761862],["folder.webp",3280,1718994761863],["folder_back.png",3329,1718994761863],["folder_back.webp",3324,1718994761864],["folder_front.png",1795,1718994761865],["folder_front.webp",1540,1718994761865],["font.png",9691,1718994761866],["font.webp",8292,1718994761867],["image.png",5890,1718994761868],["image.webp",4468,1718994761868],["jsdos.png",3178,1718994761869],["jsdos.webp",2980,1718994761869],["kiwiirc.png",11599,1718994761870],["kiwiirc.webp",9412,1718994761871],["marked.png",2287,1718994761872],["marked.webp",1952,1718994761874],["messenger.png",9164,1718994761874],["messenger.webp",8722,1718994761875],["monaco.png",5924,1718994761876],["monaco.webp",4962,1718994761877],["mounted.png",7176,1718994761878],["mounted.webp",6616,1718994761878],["music.png",6041,1718994761879],["music.webp",5316,1718994761880],["new_folder.png",2609,1718994761880],["new_folder.webp",3640,1718994761881],["opentype.png",20848,1718994761883],["opentype.webp",14750,1718994761883],["outlookemail.png",2620,1718994761884],["outlookemail.webp",2620,1718994761884],["paint.png",9114,1718994761884],["paint.webp",5860,1718994761885],["pc.png",9527,1718994761886],["pc.webp",8634,1718994761887],["pdf.png",3329,1718994761888],["pdf.webp",2654,1718994761888],["photo.png",4199,1718994761889],["photo.webp",3710,1718994761889],["photos.png",4916,1718994761890],["photos.webp",4540,1718994761890],["pictures.png",6347,1718994761891],["pictures.webp",5358,1718994761892],["pinball.png",20493,1718994761893],["pinball.webp",13156,1718994761893],["python.png",6156,1718994761895],["python.webp",5118,1718994761895],["quake3.png",31950,1718994761896],["quake3.webp",20632,1718994761897],["ruffle.png",2513,1718994761898],["ruffle.webp",2010,1718994761898],["run.png",11071,1718994761899],["run.webp",10778,1718994761899],["shortcut.png",1449,1718994761900],["shortcut.webp",1154,1718994761901],["stablediffusion.png",8712,1718994761902],["stablediffusion.webp",7718,1718994761903],["tinymce.png",3974,1718994761903],["tinymce.webp",3382,1718994761904],["unknown.png",2198,1718994761905],["unknown.webp",1926,1718994761905],["user.png",8326,1718994761906],["user.webp",7162,1718994761906],["v86.png",211,1718994761907],["v86.webp",120,1718994761908],["videos.png",9858,1718994761908],["videos.webp",8984,1718994761909],["vim.png",8828,1718994761910],["vim.webp",6962,1718994761911],["vlc.png",16065,1718994761913],["vlc.webp",12122,1718994761913],["wapm.png",4301,1718994761914],["wapm.webp",3002,1718994761915],["webamp.png",10264,1718994761915],["webamp.webp",7718,1718994761916],["xterm.png",4536,1718994761917],["xterm.webp",3626,1718994761918]]],["16x16",0,1718994762001,[["audio.png",352,1718994761919],["audio.webp",276,1718994761919],["boxedwine.png",831,1718994761920],["boxedwine.webp",842,1718994761920],["chat.png",134103,1718994761922],["chromium.png",483,1718994761922],["chromium.webp",436,1718994761923],["classicube.png",212,1718994761924],["classicube.webp",176,1718994761924],["compressed.png",441,1718994761925],["compressed.webp",366,1718994761926],["copying.png",219,1718994761927],["copying.webp",188,1718994761928],["desktop.png",281,1718994761929],["desktop.webp",258,1718994761929],["dino.png",204,1718994761930],["dino.webp",158,1718994761930],["documents.png",482,1718994761931],["documents.webp",358,1718994761931],["dxball.png",835,1718994761932],["dxball.webp",598,1718994761933],["emulator.png",431,1718994761934],["emulator.webp",352,1718994761935],["eruda.png",740,1718994761936],["eruda.webp",626,1718994761936],["executable.png",150,1718994761937],["executable.webp",116,1718994761938],["folder.png",255,1718994761938],["folder.webp",224,1718994761939],["folder_back.png",236,1718994761940],["folder_back.webp",192,1718994761940],["folder_front.png",229,1718994761941],["folder_front.webp",198,1718994761942],["font.png",434,1718994761943],["font.webp",390,1718994761943],["image.png",506,1718994761944],["image.webp",336,1718994761945],["jsdos.png",326,1718994761946],["jsdos.webp",344,1718994761947],["kiwiirc.png",622,1718994761948],["kiwiirc.webp",632,1718994761948],["marked.png",275,1718994761949],["marked.webp",210,1718994761950],["messenger.png",724,1718994761950],["messenger.webp",658,1718994761951],["monaco.png",452,1718994761952],["monaco.webp",388,1718994761952],["mounted.png",317,1718994761953],["mounted.webp",268,1718994761954],["music.png",262,1718994761954],["music.webp",190,1718994761955],["new_folder.png",333,1718994761956],["new_folder.webp",352,1718994761956],["opentype.png",679,1718994761957],["opentype.webp",602,1718994761958],["outlookemail.png",2620,1718994761959],["outlookemail.webp",2620,1718994761959],["paint.png",274,1718994761960],["paint.webp",198,1718994761962],["pc.png",303,1718994761963],["pc.webp",258,1718994761964],["pdf.png",558,1718994761966],["pdf.webp",502,1718994761967],["photo.png",423,1718994761968],["photo.webp",344,1718994761969],["photos.png",414,1718994761970],["photos.webp",360,1718994761970],["pictures.png",355,1718994761971],["pictures.webp",292,1718994761972],["pinball.png",973,1718994761973],["pinball.webp",632,1718994761973],["python.png",445,1718994761974],["python.webp",418,1718994761976],["quake3.png",805,1718994761977],["quake3.webp",578,1718994761977],["ruffle.png",513,1718994761979],["ruffle.webp",424,1718994761980],["run.png",503,1718994761980],["run.webp",458,1718994761982],["shortcut.png",74,1718994761984],["shortcut.webp",28,1718994761985],["stablediffusion.png",454,1718994761986],["stablediffusion.webp",408,1718994761986],["tinymce.png",386,1718994761987],["tinymce.webp",358,1718994761988],["unknown.png",314,1718994761988],["unknown.webp",240,1718994761989],["user.png",463,1718994761990],["user.webp",410,1718994761990],["v86.png",141,1718994761991],["v86.webp",100,1718994761991],["videos.png",388,1718994761992],["videos.webp",362,1718994761993],["vim.png",650,1718994761994],["vim.webp",548,1718994761995],["vlc.png",562,1718994761996],["vlc.webp",516,1718994761997],["wapm.png",384,1718994761998],["wapm.webp",310,1718994761998],["webamp.png",558,1718994761999],["webamp.webp",476,1718994762000],["xterm.png",298,1718994762000],["xterm.webp",298,1718994762001]]],["32x32",0,1718994762080,[["audio.png",1331,1718994762003],["audio.webp",1318,1718994762003],["boxedwine.png",2230,1718994762004],["boxedwine.webp",2100,1718994762004],["chat.png",134103,1718994762005],["chromium.png",1093,1718994762006],["chromium.webp",944,1718994762007],["classicube.png",466,1718994762007],["classicube.webp",396,1718994762008],["compressed.png",831,1718994762009],["compressed.webp",744,1718994762009],["copying.png",373,1718994762011],["copying.webp",298,1718994762013],["desktop.png",433,1718994762014],["desktop.webp",380,1718994762015],["dino.png",306,1718994762016],["dino.webp",262,1718994762016],["documents.png",816,1718994762017],["documents.webp",656,1718994762017],["dxball.png",2226,1718994762018],["dxball.webp",1632,1718994762019],["emulator.png",813,1718994762019],["emulator.webp",648,1718994762020],["eruda.png",2260,1718994762020],["eruda.webp",1830,1718994762021],["executable.png",299,1718994762021],["executable.webp",200,1718994762022],["folder.png",546,1718994762023],["folder.webp",550,1718994762023],["folder_back.png",442,1718994762024],["folder_back.webp",466,1718994762025],["folder_front.png",322,1718994762026],["folder_front.webp",286,1718994762026],["font.png",1028,1718994762027],["font.webp",872,1718994762028],["image.png",1048,1718994762029],["image.webp",812,1718994762029],["jsdos.png",572,1718994762030],["jsdos.webp",554,1718994762031],["kiwiirc.png",1498,1718994762031],["kiwiirc.webp",1502,1718994762032],["marked.png",497,1718994762032],["marked.webp",408,1718994762033],["messenger.png",1496,1718994762034],["messenger.webp",1418,1718994762034],["monaco.png",892,1718994762035],["monaco.webp",762,1718994762036],["mounted.png",1022,1718994762036],["mounted.webp",962,1718994762037],["music.png",375,1718994762038],["music.webp",234,1718994762038],["new_folder.png",480,1718994762039],["new_folder.webp",516,1718994762039],["opentype.png",1858,1718994762040],["opentype.webp",1668,1718994762041],["outlookemail.png",2620,1718994762043],["outlookemail.webp",2620,1718994762043],["paint.png",443,1718994762044],["paint.webp",344,1718994762046],["pc.png",1038,1718994762047],["pc.webp",870,1718994762048],["pdf.png",1130,1718994762049],["pdf.webp",1062,1718994762050],["photo.png",805,1718994762050],["photo.webp",662,1718994762051],["photos.png",847,1718994762052],["photos.webp",702,1718994762052],["pictures.png",702,1718994762053],["pictures.webp",602,1718994762054],["pinball.png",2320,1718994762055],["pinball.webp",1592,1718994762055],["python.png",945,1718994762056],["python.webp",934,1718994762056],["quake3.png",2431,1718994762057],["quake3.webp",1666,1718994762058],["ruffle.png",1050,1718994762059],["ruffle.webp",874,1718994762059],["run.png",1482,1718994762060],["run.webp",1394,1718994762062],["shortcut.png",82,1718994762063],["shortcut.webp",28,1718994762064],["stablediffusion.png",1045,1718994762065],["stablediffusion.webp",922,1718994762066],["tinymce.png",661,1718994762067],["tinymce.webp",594,1718994762068],["unknown.png",513,1718994762068],["unknown.webp",408,1718994762069],["user.png",1194,1718994762070],["user.webp",1126,1718994762070],["v86.png",161,1718994762070],["v86.webp",116,1718994762071],["videos.png",1000,1718994762072],["videos.webp",968,1718994762072],["vim.png",1485,1718994762073],["vim.webp",1176,1718994762074],["vlc.png",1433,1718994762074],["vlc.webp",1356,1718994762075],["wapm.png",735,1718994762076],["wapm.webp",552,1718994762076],["webamp.png",1345,1718994762077],["webamp.webp",1178,1718994762078],["xterm.png",617,1718994762079],["xterm.webp",594,1718994762080]]],["48x48",0,1719349127097,[["audio.png",1759,1718994762081],["audio.webp",1570,1718994762081],["boxedwine.png",3926,1718994762082],["boxedwine.webp",3616,1718994762083],["chat.png",134103,1718994762084],["chromium.png",1784,1718994762085],["chromium.webp",1456,1718994762085],["classicube.png",713,1718994762086],["classicube.webp",620,1718994762087],["compressed.png",1107,1718994762087],["compressed.webp",1002,1718994762088],["copying.png",547,1718994762089],["copying.webp",428,1718994762089],["desktop.png",1095,1718994762090],["desktop.webp",1082,1718994762091],["dino.png",427,1718994762091],["dino.webp",336,1718994762092],["documents.png",1452,1718994762093],["documents.webp",1346,1718994762094],["downloads.png",14100,1719348847482],["dxball.png",3782,1718994762095],["dxball.webp",2712,1718994762096],["emulator.png",2881,1718994762096],["emulator.webp",2642,1718994762097],["eruda.png",4587,1718994762098],["eruda.webp",3690,1718994762099],["executable.png",394,1718994762099],["executable.webp",260,1718994762100],["folder.png",857,1718994762101],["folder.webp",856,1718994762102],["FolderWindows.png",138553,1719349115135],["folder_back.png",740,1718994762103],["folder_back.webp",712,1718994762103],["folder_front.png",441,1718994762104],["folder_front.webp",408,1718994762105],["font.png",1944,1718994762106],["font.webp",1756,1718994762106],["image.png",1627,1718994762107],["image.webp",1212,1718994762107],["jsdos.png",885,1718994762108],["jsdos.webp",852,1718994762109],["kiwiirc.png",2489,1718994762109],["kiwiirc.webp",2380,1718994762110],["marked.png",741,1718994762112],["marked.webp",636,1718994762113],["messenger.png",2360,1718994762114],["messenger.webp",2146,1718994762115],["monaco.png",1400,1718994762116],["monaco.webp",1100,1718994762117],["mounted.png",1728,1718994762118],["mounted.webp",1590,1718994762120],["music.png",1284,1718994762120],["music.webp",1218,1718994762122],["new_folder.png",608,1718994762123],["new_folder.webp",636,1718994762124],["opentype.png",3492,1718994762124],["opentype.webp",2872,1718994762125],["outlookemail.png",2620,1718994762126],["outlookemail.webp",2620,1718994762126],["paint.png",647,1718994762127],["paint.webp",530,1718994762128],["pc.png",1751,1718994762129],["pc.webp",1602,1718994762130],["pdf.png",1476,1718994762131],["pdf.webp",1296,1718994762132],["photo.png",1205,1718994762134],["photo.webp",1116,1718994762135],["photos.png",1245,1718994762137],["photos.webp",1096,1718994762138],["pictures.png",1446,1718994762139],["pictures.webp",1314,1718994762140],["pinball.png",4161,1718994762141],["pinball.webp",2738,1718994762141],["python.png",1597,1718994762142],["python.webp",1484,1718994762143],["quake3.png",4841,1718994762144],["quake3.webp",3188,1718994762145],["rdi-social.png",32999,1719348952173],["ruffle.png",1444,1718994762146],["ruffle.webp",1210,1718994762147],["run.png",2689,1718994762148],["run.webp",2490,1718994762149],["shortcut.png",413,1718994762151],["shortcut.webp",292,1718994762151],["stablediffusion.png",1769,1718994762152],["stablediffusion.webp",1586,1718994762153],["tinymce.png",1029,1718994762154],["tinymce.webp",884,1718994762155],["unknown.png",739,1718994762156],["unknown.webp",586,1718994762156],["user.png",1906,1718994762157],["user.webp",1798,1718994762158],["v86.png",168,1718994762159],["v86.webp",118,1718994762160],["videos.png",1862,1718994762161],["videos.webp",1882,1718994762163],["vim.png",2246,1718994762165],["vim.webp",1790,1718994762166],["vlc.png",2787,1718994762167],["vlc.webp",2468,1718994762168],["wapm.png",1147,1718994762169],["wapm.webp",790,1718994762169],["webamp.png",2681,1718994762170],["webamp.webp",2244,1718994762170],["xterm.png",1087,1718994762171],["xterm.webp",940,1718994762172]]],["96x96",0,1718994762248,[["audio.png",5266,1718994762173],["audio.webp",4374,1718994762174],["boxedwine.png",10482,1718994762175],["boxedwine.webp",9332,1718994762175],["chat.png",134103,1718994762177],["chromium.png",4648,1718994762178],["chromium.webp",3926,1718994762179],["classicube.png",1446,1718994762180],["classicube.webp",1208,1718994762181],["compressed.png",3393,1718994762181],["compressed.webp",2906,1718994762183],["copying.png",978,1718994762184],["copying.webp",790,1718994762184],["desktop.png",2678,1718994762185],["desktop.webp",2438,1718994762186],["dino.png",531,1718994762187],["dino.webp",520,1718994762187],["documents.png",3417,1718994762188],["documents.webp",3076,1718994762188],["dxball.png",9109,1718994762189],["dxball.webp",6130,1718994762189],["emulator.png",3664,1718994762190],["emulator.webp",3876,1718994762191],["eruda.png",14053,1718994762191],["eruda.webp",10930,1718994762192],["executable.png",997,1718994762193],["executable.webp",904,1718994762193],["folder.png",2125,1718994762194],["folder.webp",2002,1718994762195],["folder_back.png",1983,1718994762196],["folder_back.webp",2010,1718994762197],["folder_front.png",1104,1718994762198],["folder_front.webp",964,1718994762198],["font.png",5076,1718994762199],["font.webp",4144,1718994762200],["image.png",3442,1718994762201],["image.webp",2592,1718994762201],["jsdos.png",1972,1718994762203],["jsdos.webp",1870,1718994762203],["kiwiirc.png",6586,1718994762204],["kiwiirc.webp",5484,1718994762205],["marked.png",1434,1718994762205],["marked.webp",1142,1718994762206],["messenger.png",5412,1718994762206],["messenger.webp",5038,1718994762207],["monaco.png",3422,1718994762208],["monaco.webp",2974,1718994762208],["mounted.png",4143,1718994762209],["mounted.webp",4002,1718994762209],["music.png",3612,1718994762210],["music.webp",3154,1718994762211],["new_folder.png",1572,1718994762212],["new_folder.webp",1884,1718994762213],["opentype.png",10871,1718994762214],["opentype.webp",8130,1718994762215],["outlookemail.png",2620,1718994762215],["outlookemail.webp",2620,1718994762216],["paint.png",5521,1718994762217],["paint.webp",3612,1718994762217],["pc.png",5007,1718994762218],["pc.webp",4536,1718994762218],["pdf.png",3326,1718994762219],["pdf.webp",2810,1718994762219],["photo.png",2606,1718994762220],["photo.webp",2264,1718994762220],["photos.png",2437,1718994762222],["photos.webp",1904,1718994762222],["pictures.png",3729,1718994762223],["pictures.webp",3228,1718994762223],["pinball.png",11286,1718994762223],["pinball.webp",7468,1718994762224],["python.png",3381,1718994762225],["python.webp",2980,1718994762225],["quake3.png",15928,1718994762226],["quake3.webp",10272,1718994762227],["rdi-social.webp",5310,1718994762228],["ruffle.png",1656,1718994762229],["ruffle.webp",1382,1718994762229],["run.png",6228,1718994762230],["run.webp",6152,1718994762231],["shortcut.png",725,1718994762231],["shortcut.webp",512,1718994762232],["stablediffusion.png",4867,1718994762233],["stablediffusion.webp",4236,1718994762233],["tinymce.png",2320,1718994762234],["tinymce.webp",2004,1718994762234],["unknown.png",1426,1718994762235],["unknown.webp",1178,1718994762235],["user.png",4890,1718994762236],["user.webp",4268,1718994762237],["v86.png",188,1718994762237],["v86.webp",118,1718994762238],["videos.png",5949,1718994762239],["videos.webp",5614,1718994762239],["vim.png",5290,1718994762240],["vim.webp",4354,1718994762240],["vlc.png",7871,1718994762242],["vlc.webp",6098,1718994762243],["wapm.png",2501,1718994762244],["wapm.webp",1760,1718994762245],["webamp.png",5812,1718994762246],["webamp.webp",4488,1718994762247],["xterm.png",2703,1718994762248],["xterm.webp",2266,1718994762248]]],["avatars",0,1718994762295,[["Asako Satoshi.png",9859,1718994762289],["Dominic Gonzalez.png",9930,1718994762290],["Lily Wang.png",8876,1718994762291],["Madison Byers.png",8715,1718994762292],["rdi.png",32999,1718994762296],["Simone Khan.png",9909,1718994762294]]],["Favicons",0,1719238976127,[["16x16",0,1719257117557,[["aos.png",562,1718994762250],["aos.webp",474,1718994762251],["archive.png",278,1718994762252],["archive.webp",164,1718994762253],["chat.png",134103,1718994762254],["dino.png",243,1718994762255],["dino.webp",182,1718994762255],["dir.png",154,1718994762256],["dir.webp",578,1718994762256],["google.png",495,1718994762257],["google.webp",23610,1719256979003],["ipfs.png",425,1718994762259],["ipfs.webp",328,1718994762259],["rdi-social.webp",5310,1718994762260],["salesreport.webp",68524,1718994762261],["wikipedia.png",133,1718994762263],["wikipedia.webp",90,1718994762264],["win96.png",656,1718994762266],["win96.webp",714,1718994762268],["WindowsG.png",176824,1718994762250]]],["32x32",0,1719263257824,[["aos.png",562,1718994762270],["aos.webp",474,1718994762270],["archive.png",278,1718994762271],["archive.webp",164,1718994762271],["chat.png",134103,1718994762274],["dino.png",243,1718994762275],["dino.webp",182,1718994762275],["dir.png",154,1718994762276],["dir.webp",578,1718994762277],["google.png",495,1718994762278],["google.webp",23610,1719256979003],["ipfs.png",425,1718994762280],["ipfs.webp",328,1718994762282],["rdi-social.webp",5310,1718994762260],["salesreport.webp",68524,1718994762261],["wikipedia.png",133,1718994762286],["wikipedia.webp",90,1718994762286],["win96.png",656,1718994762287],["win96.webp",714,1718994762288],["WindowsG.png",176824,1718994762269]]],["96x96",0,1719257213159,[["chat.png",134103,1718994762254],["google.webp",23610,1719256979003],["rdi-social.webp",5310,1718994762283],["salesreport.webp",68524,1718994762261]]]]]]],["JXL.js",0,1718994762303,[["jxl_dec.js",19431,1718994762297],["jxl_dec.wasm",840279,1718994762304]]],["libheif",0,1718994762373,[["libheif-bundle.js",1165053,1718994762374]]],["linux.bin",5166352,1718994762394],["lolcat.wasm",2128923,1718994762401],["lunr",0,1718994762402,[["lunr.min.js",29516,1718994762403]]],["Matrix",0,1718994762324,[["assets",0,1718994762306,[["matrixcode_msdf.png",85940,1718994762306]]],["js",0,1718994762309,[["camera.js",1177,1718994762308],["colorToRGB.js",356,1718994762309],["regl",0,1718994762318,[["bloomPass.js",4119,1718994762310],["imagePass.js",1025,1718994762310],["lkgHelper.js",2336,1718994762312],["main.js",3513,1718994762313],["mirrorPass.js",1217,1718994762315],["palettePass.js",2847,1718994762316],["quiltPass.js",738,1718994762316],["rainPass.js",10150,1718994762317],["stripePass.js",1222,1718994762318],["utils.js",3143,1718994762319]]]]],["lib",0,1718994762323,[["gl-matrix.js",214503,1718994762321],["regl.min.js",87062,1718994762323]]],["shaders",0,1718994762324,[["glsl",0,1718994762330,[["blur.frag.glsl",822,1718994762325],["highPass.frag.glsl",331,1718994762325],["palettePass.frag.glsl",1173,1718994762326],["rainPass.effect.frag.glsl",2897,1718994762327],["rainPass.frag.glsl",5215,1718994762328],["rainPass.intro.frag.glsl",2045,1718994762329],["rainPass.raindrop.frag.glsl",3473,1718994762330],["rainPass.symbol.frag.glsl",2016,1718994762330],["rainPass.vert.glsl",1613,1718994762331]]]]]]],["md5.wasm",37689,1718994762404],["mediainfo.js",0,1718994762431,[["MediaInfoModule.wasm",3731249,1718994762433]]],["qr2text.wasm",497673,1718994762438],["ShaderToy",0,1718994762331,[["CoastalLandscape",0,1718994762335,[["effect.js",135300,1718994762333],["init.js",14973,1718994762334],["piLibs.js",142758,1718994762335]]]]],["tvm",0,1718994762440,[["tvmjs.bundle.js",145345,1718994762439],["tvmjs_runtime.wasi.js",84779,1718994762440]]],["Vanta.js",0,1718994762339,[["three.min.js",459468,1718994762338],["vanta.waves.min.js",12784,1718994762339]]]]],["Users",0,1718994762441,[["Public",0,1718994762464,[["Desktop",0,1719263401022,[["desktop.ini",55,1718994762443],["My PC.url",142,1718994762442],["Public.url",108,1718994762442]]],["desktop.ini",52,1718994762464],["Documents",0,1719342782138,[["desktop.ini",57,1718994762444]]],["Music",0,1718994762444,[["desktop.ini",53,1718994762444]]],["Pictures",0,1718994762446,[["desktop.ini",56,1718994762445],["prompts.json",1162,1718994762446],["slideshow.json",4,1718994762447]]],["Start Menu",0,1718997168279,[["Browser.url",104,1718994762448],["DevTools.url",106,1718994762448],["Email.url",126,1718997168281],["Emulators",0,1718994762451,[["BoxedWine.url",117,1718994762449],["EmulatorJS.url",107,1718994762449],["js-dos.url",92,1718994762452],["Ruffle.url",94,1718994762450],["Virtual x86.url",88,1718994762451]]],["Games",0,1718994762454,[["Chrome Dino.url",126,1718994762452],["ClassiCube.url",112,1718994762453],["DX-Ball.url",95,1718994762453],["Quake III Arena.url",107,1718994762454],["Space Cadet.url",109,1718994762455]]],["IRC.url",90,1718994762455],["Marked.url",114,1718994762456],["Messenger.url",110,1718994762456],["Monaco Editor.url",99,1718994762457],["Paint.url",95,1718994762458],["PDF.url",94,1718994762458],["Photo Viewer.url",94,1718994762459],["Stable Diffusion.url",119,1718994762459],["Terminal.url",107,1718994762460],["TinyMCE.url",98,1718994762460],["Video Player.url",96,1718994762461],["Vim.url",87,1718994762461],["Webamp.url",94,1718994762462]]],["Videos",0,1718994762463,[["desktop.ini",54,1718994762463]]]]]]]],"size":321626281,"version":4}'
                ),
                s = n(97836);
            let a = -1,
                c = new Set(["EIO", "ENOENT"]),
                u = "keyval",
                l = `${u}-store`,
                p = o.fsroot,
                f = (e, t) => {
                    let n = p,
                        r = a;
                    return (
                        e
                            .split("/")
                            .filter(Boolean)
                            .forEach((e) => {
                                let i = n.find(([t]) => t === e);
                                if (i) {
                                    let e = Array.isArray(i[3]);
                                    e || (r = i[t]), (n = e ? i[3] : []);
                                }
                            }),
                        r
                    );
                },
                h = (e) => f(e, 2),
                d = (e) => f(e, 1),
                m = (e, t) => e.map(t).reduce((e, t) => Object.assign(e, t), {}),
                g = ([e, , , t]) => ({ [e]: Array.isArray(t) ? m(t, g) : null }),
                y = () => m(p, g),
                b = (e, t = "/") =>
                    e.map(([e, n, i, o]) => {
                        let s = (0, r.join)(t, e),
                            a = Array.isArray(o),
                            c = a ? b(o, s) : o || s;
                        return [e, n, i, a ? 16822 : 33206, 0, 0, c];
                    }),
                w = () => (4 === o.version ? { fsroot: b(p), size: o.size, version: 3 } : o),
                v = () =>
                    new Promise((e) => {
                        let t = window.indexedDB.open("browserfs");
                        t.addEventListener("error", () => e(!1), s.K7),
                            t.addEventListener(
                                "success",
                                ({ target: n }) => {
                                    e(!0);
                                    try {
                                        t.result.close();
                                    } catch { }
                                    let { objectStoreNames: r } = n?.result || {};
                                    if (r?.length === 0)
                                        try {
                                            window.indexedDB.deleteDatabase("browserfs");
                                        } catch { }
                                },
                                s.K7
                            );
                    }),
                S = () => (0, i.openDB)(l, 1, { upgrade: (e) => e.createObjectStore(u) }),
                E = async () => {
                    if (!(await v())) return Object.create(null);
                    let e = await S();
                    return (await e.get(u, s.Sp)) || Object.create(null);
                };
        },
        18575: function (e, t, n) {
            "use strict";
            n.r(t),
                n.d(t, {
                    addFileSystemHandle: function () {
                        return c;
                    },
                    getMountUrl: function () {
                        return f;
                    },
                    isMountedFolder: function () {
                        return a;
                    },
                    removeFileSystemHandle: function () {
                        return u;
                    },
                    requestPermission: function () {
                        return l;
                    },
                    resetStorage: function () {
                        return p;
                    },
                });
            var r = n(1864),
                i = n(97836),
                o = n(46508);
            let s = ["/classicube", "/data/saves", "ejs-bios", "ejs-roms", "ejs-romsdata", "ejs-states", "ejs-system", "js-dos-cache (emulators-ui-saves)", "keyval-store"],
                a = (e) => "object" == typeof e && ("FileSystemAccess" === e.getName() || e._FS?.DB_STORE_NAME === "FILE_DATA"),
                c = async (e, t, n) => {
                    if (!(await (0, o.cT)())) return;
                    let s = await (0, o.cb)();
                    try {
                        s.put(o.t2, { ...(await (0, o.aA)()), [(0, r.join)(e, n)]: t }, i.Sp);
                    } catch { }
                },
                u = async (e) => {
                    if (!(await (0, o.cT)())) return;
                    let { [e]: t, ...n } = await (0, o.aA)(),
                        r = await (0, o.cb)();
                    await r.put(o.t2, n, i.Sp);
                },
                l = async (e) => {
                    let t = (await (0, o.aA)())[e];
                    if (t) {
                        let e = await t.queryPermission();
                        if ("prompt" === e) await t.requestPermission();
                        else if ("granted" === e) throw Error("Permission already granted");
                        return t.queryPermission();
                    }
                    return !1;
                },
                p = (e) =>
                    new Promise((t, r) => {
                        setTimeout(r, 750), window.localStorage.clear(), window.sessionStorage.clear();
                        let i = () => {
                            let n = e?._getFs("/")?.fs,
                                i = n?.getOverlayedFileSystems(),
                                o = i?.readable,
                                s = i?.writable;
                            o?.empty(), s?.getName() !== "InMemory" && s?.empty ? s.empty((e) => (e ? r(e) : t())) : t();
                        };
                        Promise.resolve()
                            .then(n.bind(n, 26269))
                            .then(({ deleteDB: e }) => {
                                window.indexedDB.databases
                                    ? window.indexedDB
                                        .databases()
                                        .then((t) => t.filter(({ name: e }) => e && "browserfs" !== e).forEach(({ name: t }) => e(t)))
                                        .then(i)
                                        .catch(i)
                                    : (s.forEach((t) => e(t)), i());
                            });
                    }),
                f = (e, t) =>
                    "/" === e
                        ? ""
                        : t[e] || i.my.has((0, r.extname)(e))
                            ? e
                            : Object.keys(t)
                                .filter((e) => "/" !== e)
                                .find((t) => e === t || e.startsWith(`${t}/`));
        },
        20063: function (e, t, n) {
            "use strict";
            n.d(t, {
                P: function () {
                    return _;
                },
                o: function () {
                    return j;
                },
            });
            var r = n(87386),
                i = n(1864),
                o = n(67294),
                s = n(59746),
                a = n(6155),
                c = n(23736),
                u = n(46508),
                l = n(18575),
                p = n(5532),
                f = n(97836),
                h = n(55665);
            let d = (0, u.iY)();
            var m = (e = !1) => ({ fs: "MountableFileSystem", options: { "/": { fs: "OverlayFS", options: { readable: { fs: "HTTPRequest", options: { index: d } }, writable: { fs: e ? "InMemory" : "IndexedDB" } } } } }),
                g = n(48764).Buffer;
            let { BFSRequire: y, configure: b } = h,
                w = [],
                v = (e) => {
                    if (w.length > 0) {
                        let [t, n] = w.shift();
                        if (t in e) {
                            let r = e[t];
                            "function" == typeof r && r(...n);
                        }
                        v(e);
                    }
                };
            var S = () => {
                let [e, t] = (0, o.useState)(),
                    r = (0, o.useRef)(),
                    [s, c] = (0, o.useState)(),
                    l = (0, o.useMemo)(
                        () => ({
                            exists: (t) =>
                                new Promise((n) => {
                                    e?.exists(t, n);
                                }),
                            lstat: (t) =>
                                new Promise((n, r) => {
                                    e?.lstat(t, (e, t = Object.create(null)) => (e ? r(e) : n(t)));
                                }),
                            mkdir: (t, n = !1) =>
                                new Promise((r, i) => {
                                    e?.mkdir(t, { flag: n ? "w" : "wx" }, (e) => (e ? i(e) : r(!0)));
                                }),
                            readFile: (t) =>
                                new Promise((n, r) => {
                                    e?.readFile(t, (e, i = g.from("")) => {
                                        if (!e || u.F7.has(e.code)) return n(i);
                                        if ("EISDIR" === e.code && s?.mntMap[t]) {
                                            let e = s.mntMap[t]._data || s.mntMap[t].data;
                                            if (e) return n(e);
                                        }
                                        return r(e);
                                    });
                                }),
                            readdir: (t) =>
                                new Promise((n, r) => {
                                    e?.readdir(t, (e, t = []) => (e ? r(e) : n(t)));
                                }),
                            rename: (t, n) =>
                                new Promise((r, i) => {
                                    e?.rename(t, n, (o) => {
                                        o
                                            ? "ENOTSUP" === o.code
                                                ? e.lstat(t, (o, s = Object.create(null)) => {
                                                    s.isDirectory()
                                                        ? i(Error("Renaming directories is not supported."))
                                                        : e.readFile(t, (t, o) => e.writeFile(n, o, (e) => (t || e ? i(t || e || Error("Failed to rename file.")) : r(!1))));
                                                })
                                                : "EISDIR" === o.code
                                                    ? (s?.umount(t), l.rename(t, n).then(r, i))
                                                    : u.F7.has(o.code)
                                                        ? r(!1)
                                                        : i(o)
                                            : r(!0);
                                    });
                                }),
                            rmdir: (t) =>
                                new Promise((n, r) => {
                                    e?.rmdir(t, (e) => (e ? r(e) : n(!0)));
                                }),
                            stat: (t) =>
                                new Promise((n, r) => {
                                    e?.stat(t, (e, i = Object.create(null)) =>
                                        e ? (u.F7.has(e.code) ? n(new p.ZP(p.Tv.FILE, -1)) : r(e)) : n(i.size === -1 && a.CK(i) ? new p.ZP(p.Tv.FILE, u.BR(t), i.mode, i.atimeMs, i.mtimeMs, i.ctimeMs, i.birthtimeMs) : i)
                                    );
                                }),
                            unlink: (t) =>
                                new Promise((n, r) => {
                                    e?.unlink(t, (e) => (e ? (u.F7.has(e.code) ? n(!1) : r(e)) : n(!0)));
                                }),
                            writeFile: (t, r, o = !1) =>
                                new Promise((a, c) => {
                                    e?.writeFile(t, r, { flag: o ? "w" : "wx" }, (r) => {
                                        if (r && (!o || "EEXIST" !== r.code))
                                            "ENOENT" === r.code &&
                                                "/" === r.path &&
                                                Promise.resolve()
                                                    .then(n.bind(n, 18575))
                                                    .then(({ resetStorage: e }) => e(s).finally(() => window.location.reload())),
                                                c(r);
                                        else {
                                            a(!r);
                                            try {
                                                if (t !== f.hl) {
                                                    let n = i.join(f.Xo, `${t}${f.Qy}`);
                                                    e?.exists(n, (t) => t && e?.unlink(n));
                                                }
                                            } catch { }
                                        }
                                    });
                                }),
                        }),
                        [e, s]
                    );
                return (
                    (0, o.useEffect)(() => {
                        if (e)
                            "getRootFS" in e
                                ? v(e)
                                : (0, u.cT)().then((e) =>
                                    b(m(!e), () => {
                                        let e = y("fs");
                                        (r.current = e), t(e), c(e.getRootFS());
                                    })
                                );
                        else {
                            let e = (e) => (...t) => {
                                r.current ? r.current[e](...t) : w.push([e, t]);
                            };
                            t({
                                exists: e("exists"),
                                lstat: e("lstat"),
                                mkdir: e("mkdir"),
                                readFile: e("readFile"),
                                readdir: e("readdir"),
                                rename: e("rename"),
                                rmdir: e("rmdir"),
                                stat: e("stat"),
                                unlink: e("unlink"),
                                writeFile: e("writeFile"),
                            });
                        }
                    }, [e]),
                    (0, o.useMemo)(() => ({ ...l, fs: e, rootFs: s }), [l, e, s])
                );
            },
                E = n(58437),
                x = n(6484);
            let k = new Set(["/OPFS"]),
                { Provider: _, useContext: j } = (0, r.Z)(() => {
                    let e = S(),
                        { exists: t, mkdir: r, readdir: p, readFile: h, rename: d, rmdir: m, rootFs: g, unlink: y, writeFile: b } = e,
                        { closeWithTransition: w } = (0, E.z)(),
                        v = (0, o.useRef)(Object.create(null)),
                        [_, j] = (0, o.useState)(Object.create(null)),
                        I = (0, o.useCallback)((e, t) => j(Object.fromEntries(e.map((e) => [e, t]))), []),
                        T = (0, o.useCallback)(
                            (e) => {
                                if (!f.I9.has((0, x.RT)(e))) return;
                                let t = (0, a.bh)(e);
                                if (t) {
                                    "image/jpeg" === t && (t = "image/png");
                                    try {
                                        navigator.clipboard?.write?.([new ClipboardItem({ [t]: h(e).then((e) => x.V4(e, t)) })]);
                                    } catch { }
                                }
                            },
                            [h]
                        ),
                        P = (0, o.useCallback)(
                            (e) => {
                                1 === e.length && T(e[0]), I(e, "copy");
                            },
                            [T, I]
                        ),
                        C = (0, o.useCallback)((e) => I(e, "move"), [I]),
                        F = (0, o.useCallback)((e, t) => {
                            v.current[e] = [...(v.current[e] || []), t];
                        }, []),
                        O = (0, o.useRef)(0),
                        A = (0, o.useCallback)(
                            (e) => {
                                if (g) {
                                    let t = Object.keys(g.mntMap || {}).filter((e) => "/" !== e);
                                    if (0 === t.length) return;
                                    let n = Object.keys(v.current).filter((e) => v.current[e].length > 0);
                                    t.forEach((t) => {
                                        n.some((e) => e.startsWith(t)) || (0, l.isMountedFolder)(g.mntMap[t]) || (e ? g.umount?.(t) : (O.current = window.setTimeout(() => A(!0), f.jx.WINDOW)));
                                    });
                                }
                            },
                            [g]
                        ),
                        R = (0, o.useCallback)(
                            (e, t) => {
                                (v.current[e] = (v.current[e] || []).filter((e) => e !== t)), O.current && window.clearTimeout(O.current), (O.current = window.setTimeout(A, f.jx.WINDOW));
                            },
                            [A]
                        ),
                        N = (0, o.useCallback)(async (e, t, n) => {
                            let { [e]: r } = v.current;
                            r && (await Promise.all(r.map((e) => e(t, n))));
                        }, []),
                        B = (0, o.useCallback)(
                            async (e, t) =>
                                new Promise((r, o) => {
                                    n.e(2993, "high")
                                        .then(n.t.bind(n, 2993, 23))
                                        .then((n) => {
                                            let {
                                                FileSystem: { Emscripten: s },
                                            } = n;
                                            s?.Create({ FS: e }, (e, n) => {
                                                if (e || !n || !n._FS?.DB_NAME) {
                                                    o(Error("Error while mounting Emscripten FS."));
                                                    return;
                                                }
                                                let s = t || `${n._FS?.DB_NAME().replace(/\/+$/, "")}${n._FS?.DB_STORE_NAME}`;
                                                try {
                                                    g?.mount?.(i.join("/", s), n);
                                                } catch { }
                                                r(s);
                                            });
                                        });
                                }),
                            [g]
                        ),
                        L = (0, o.useCallback)(
                            async (e, t) => {
                                let r;
                                try {
                                    r = t ?? (await window.showDirectoryPicker({ id: "MapDirectoryPicker", mode: "readwrite", startIn: "desktop" }));
                                } catch { }
                                return new Promise((t, o) => {
                                    r instanceof FileSystemDirectoryHandle
                                        ? n
                                            .e(2993, "high")
                                            .then(n.t.bind(n, 2993, 23))
                                            .then((s) => {
                                                let {
                                                    FileSystem: { FileSystemAccess: a },
                                                } = s;
                                                a?.Create({ handle: r }, (s, a) => {
                                                    if (s || !a) {
                                                        o(Error("Error while mounting FileSystemAccess FS."));
                                                        return;
                                                    }
                                                    let u = k.has(e),
                                                        l = c.gL(r.name).trim() || (u ? "" : f.jE);
                                                    g?.mount?.(i.join(e, l), a),
                                                        t(u ? e : l),
                                                        Promise.resolve()
                                                            .then(n.bind(n, 18575))
                                                            .then(({ addFileSystemHandle: t }) => t(e, r, l));
                                                });
                                            })
                                        : o(Error("Unsupported FileSystemDirectoryHandle type."));
                                });
                            },
                            [g]
                        ),
                        D = (0, o.useCallback)(
                            async (e) => {
                                let t = await h(e);
                                return new Promise((r, i) => {
                                    let o = ".iso" === (0, x.RT)(e),
                                        s = (t, n) => {
                                            t ? i(Error(`Error while mounting ${o ? "ISO" : "ZIP"} FS.`)) : n && (g?.mount?.(e, n), r());
                                        };
                                    n.e(2993, "high")
                                        .then(n.t.bind(n, 2993, 23))
                                        .then((e) => {
                                            let {
                                                FileSystem: { IsoFS: n, ZipFS: r },
                                            } = e;
                                            o ? n?.Create({ data: t }, s) : r?.Create({ zipData: t }, s);
                                        });
                                });
                            },
                            [h, g]
                        ),
                        U = (0, o.useCallback)((e) => g?.umount?.(e), [g]),
                        M = (0, o.useCallback)(
                            async (e, t) => {
                                if ((U(e), N((0, i.dirname)(e), void 0, e), t)) return;
                                let { removeFileSystemHandle: r } = await Promise.resolve().then(n.bind(n, 18575));
                                r(e);
                            },
                            [U, N]
                        ),
                        { openTransferDialog: z } = (0, s.Z)(),
                        V = (0, o.useCallback)(
                            (e, t) =>
                                new Promise((n) => {
                                    let r = document.createElement("input");
                                    (r.type = "file"),
                                        (r.multiple = !0),
                                        r.setAttribute("style", "display: none"),
                                        r.addEventListener(
                                            "change",
                                            (i) => {
                                                (0, c.WG)(i, t, e, z);
                                                let { files: o } = (0, c.p4)(i);
                                                o && n([...o].map((e) => (o instanceof FileList ? e.name : e.webkitGetAsEntry().name))), r.remove();
                                            },
                                            { once: !0 }
                                        ),
                                        document.body.append(r),
                                        r.click();
                                }),
                            [z]
                        ),
                        $ = (0, o.useCallback)(
                            async (e) => {
                                let n = e.split("/").filter(Boolean),
                                    o = async (e = 1, s = 0) => {
                                        let a;
                                        let c = (0, i.join)("/", n.slice(0, e).join("/"));
                                        try {
                                            a = (await t(c)) || (await r(c));
                                        } catch {
                                            a = !1;
                                        }
                                        a ? e !== n.length && (await o(e + 1)) : s < 3 && (await o(e, s + 1));
                                    };
                                await o();
                            },
                            [t, r]
                        ),
                        W = (0, o.useCallback)(
                            async (e) => {
                                let t = !1;
                                try {
                                    t = await y(e);
                                } catch (n) {
                                    if ("EISDIR" === n.code) {
                                        let n = await p(e);
                                        await Promise.all(n.map((t) => W((0, i.join)(e, t)))), (t = await m(e));
                                    }
                                }
                                return Object.keys(v.current || {}).includes(e) && w(`FileExplorer${f.CC}${e}`), t;
                            },
                            [w, p, m, y]
                        ),
                        H = (0, o.useCallback)(
                            async (e, n, o, s = 0) => {
                                let a = !o && (0, i.isAbsolute)(e),
                                    u = a ? (0, i.basename)(e) : e,
                                    l = s ? (0, c.dZ)(u, s) : u,
                                    p = (0, i.join)(n, l);
                                if (a) {
                                    if (e !== p && n !== e && !n.startsWith(`${e}/`) && !g?.mntMap[e]) return (await t(p)) ? H(e, n, o, s + 1) : ((await d(e, p)) && N((0, i.dirname)(e), "", e), l);
                                } else {
                                    let a = async (e) => {
                                        try {
                                            (await t(e)) || (await r(e), N((0, i.dirname)(e), (0, i.basename)(e)));
                                        } catch (t) {
                                            "ENOENT" === t.code && (await a((0, i.dirname)(e)), await a(e));
                                        }
                                    };
                                    await a((0, i.dirname)(p));
                                    try {
                                        if (o ? await b(p, o) : await r(p)) return l;
                                    } catch (t) {
                                        if (t?.code === "EEXIST") return H(e, n, o, s + 1);
                                    }
                                }
                                return "";
                            },
                            [t, r, d, g?.mntMap, N, b]
                        ),
                        G = (0, o.useRef)(!1);
                    return (
                        (0, o.useEffect)(() => {
                            !G.current &&
                                g &&
                                (async () => {
                                    G.current = !0;
                                    let e = !1;
                                    await Promise.all(
                                        Object.entries(await (0, u.aA)()).map(async ([n, r]) => {
                                            if (!(await t(n)))
                                                try {
                                                    let t = k.has(n) ? n : (0, i.dirname)(n);
                                                    await L(t, r), t === f.Ll && (e = !0);
                                                } catch { }
                                        })
                                    ),
                                        e && N(f.Ll);
                                })();
                        }, [t, L, g, N]),
                        {
                            addFile: V,
                            addFsWatcher: F,
                            copyEntries: P,
                            createPath: H,
                            deletePath: W,
                            mapFs: L,
                            mkdirRecursive: $,
                            mountEmscriptenFs: B,
                            mountFs: D,
                            moveEntries: C,
                            pasteList: _,
                            removeFsWatcher: R,
                            unMapFs: M,
                            unMountFs: U,
                            updateFolder: N,
                            ...e,
                        }
                    );
                });
        },
        7502: function (e, t, n) {
            "use strict";
            n.d(t, {
                K: function () {
                    return y;
                },
                H: function () {
                    return b;
                },
            });
            var r = n(85893),
                i = n(67294),
                o = n(10508),
                s = n(6460),
                a = n(67278),
                c = n(46581),
                u = n(97836),
                l = n(6484),
                p = ({ action: e, checked: t, disabled: n, icon: p, isSubMenu: f, label: h, menu: d, primary: y, resetMenu: b, seperator: w, SvgIcon: v, toggle: S, tooltip: E }) => {
                    let x = (0, i.useRef)(null),
                        [k, _] = (0, i.useState)(m),
                        [j, I] = (0, i.useState)(!1),
                        { sizes: T } = (0, o.Fg)(),
                        P = (0, i.useRef)(0),
                        [C, F] = (0, i.useState)(!1),
                        O = (0, i.useMemo)(() => window.matchMedia("(hover: hover)").matches, []),
                        A = (0, i.useCallback)((e) => {
                            P.current && (window.clearTimeout(P.current), (P.current = 0)), (P.current = window.setTimeout(() => I(e), u.jx.MOUSE_IN_OUT));
                        }, []),
                        R = ({ relatedTarget: e, type: t }) => {
                            (e instanceof HTMLElement && x.current?.contains(e)) || (F(!1), "mouseleave" === t ? A(!1) : I(!1));
                        },
                        N = d
                            ? {
                                onBlur: R,
                                onMouseEnter: () => {
                                    F(!0), d && A(!0);
                                },
                                onMouseLeave: R,
                            }
                            : {},
                        B = (0, i.useCallback)(
                            (t) => {
                                (0, l.nK)(t), d ? I(!0) : (e?.(), b());
                            },
                            [e, d, b]
                        );
                    return (
                        (0, i.useEffect)(() => {
                            let e = x.current,
                                t = !f && d && !j,
                                n = (n) => {
                                    t && ((0, l.nK)(n), e?.focus(u.eS)), d && I(!0);
                                };
                            return e?.addEventListener("touchstart", n, { passive: !t }), () => e?.removeEventListener("touchstart", n);
                        }, [f, d, j]),
                        (0, i.useLayoutEffect)(() => {
                            if (d && x.current) {
                                let { height: e, width: t } = x.current.getBoundingClientRect();
                                _({ x: t - T.contextMenu.subMenuOffset, y: 0 - e - T.contextMenu.subMenuOffset });
                            }
                        }, [d, T.contextMenu.subMenuOffset]),
                        (0, r.jsxs)("li", {
                            ref: x,
                            className: n ? "disabled" : void 0,
                            title: E,
                            ...u.LL,
                            ...(d && N),
                            children: [
                                w
                                    ? (0, r.jsx)("hr", {})
                                    : (0, r.jsxs)(a.Z, {
                                        "aria-label": h,
                                        className: j && (!O || C) ? "active" : void 0,
                                        onMouseUp: B,
                                        ...u.Yj,
                                        children: [
                                            p && (/\p{Emoji_Presentation}/u.test(p) ? (0, r.jsx)("span", { children: p }) : (0, r.jsx)(c.Z, { alt: h, imgSize: 16, src: p })),
                                            t && (0, r.jsx)(s.MC, { className: "left" }),
                                            S && (0, r.jsx)(s.Cd, { className: "left" }),
                                            v && (0, r.jsx)("div", { className: "icon", children: (0, r.jsx)(v, {}) }),
                                            (0, r.jsx)("figcaption", { className: y ? "primary" : void 0, children: h }),
                                            d && (0, r.jsx)(s._Q, { className: "right" }),
                                        ],
                                    }),
                                j && d && (0, r.jsx)(g, { subMenu: { items: d, ...k } }),
                            ],
                        })
                    );
                },
                f = n(8897);
            let h = (0, o.ZP)(f.m.nav).attrs(({ $x: e, $y: t }) => ({ style: { transform: `translate(${e}px, ${t}px)` } }))(
                [
                    "background-color:rgb(43,43,43);border:1px solid rgb(160,160,160);box-shadow:1px 1px 1px hsla(0,0%,20%,70%),2px 2px 2px hsla(0,0%,10%,70%);color:rgb(255,255,255);contain:layout;font-size:12px;max-height:fit-content;max-width:fit-content;padding:4px 2px;position:fixed;width:max-content;z-index:",
                    ";ol{li.disabled{color:rgb(110,110,110);pointer-events:none;}hr{background-color:rgb(128,128,128);height:1px;margin:3px 8px;}li > div{display:flex;padding:3px 0;&:hover,&.active{background-color:rgb(65,65,65);}figcaption{display:flex;height:16px;line-height:16px;margin-left:32px;margin-right:64px;place-items:center;position:relative;top:-1px;white-space:nowrap;width:max-content;&.primary{font-weight:700;}}picture{margin:0 -24px 0 8px;}span{margin:-1px -24px 0 8px;}svg{fill:#fff;height:13px;margin-top:1px;position:absolute;width:13px;&.left{left:8px;}&.right{right:8px;}}.icon > svg{height:15px;left:10px;width:15px;}}}",
                ],
                ({ $isSubMenu: e }) => e && 1
            ),
                d = { animate: { opacity: 1 }, initial: { opacity: 0 }, transition: { duration: u.Nb.WINDOW } },
                m = () => ({ x: 0, y: 0 });
            var g = ({ subMenu: e }) => {
                let { menu: t = {}, setMenu: n } = b(),
                    { items: o, staticX: s = 0, staticY: a = 0, x: c = 0, y: f = 0 } = e || t || {},
                    [g, y] = (0, i.useState)(m),
                    w = (0, i.useRef)(null),
                    v = (0, i.useCallback)(
                        ({ relatedTarget: e } = {}) => {
                            (e instanceof HTMLElement && w.current?.contains(e)) || n(Object.create(null));
                        },
                        [n]
                    ),
                    S = !!e,
                    E = (0, i.useRef)({}),
                    x = (0, i.useCallback)(() => {
                        if (!w.current || (E.current.x === c && E.current.y === f)) return;
                        E.current = { x: c, y: f };
                        let { height: t = 0, width: n = 0, x: r = 0, y: i = 0 } = w.current?.getBoundingClientRect() || {},
                            [o, u] = [(0, l.sI)(), (0, l.E9)()],
                            p = { x: 0, y: 0 };
                        if (!s) {
                            let t = !!e && r + n > u;
                            p.x = Math.round(Math.max(0, c + n - u)) + (t ? Math.round(n + (e?.x || 0)) : 0);
                            let i = t && r - p.x < 0 ? p.x - (p.x - r) : 0;
                            i > 0 && (p.x = i);
                        }
                        if (!a) {
                            let n = f + t > o ? o - f : 0,
                                r = !!e && i + t > o;
                            p.y = Math.round(Math.max(0, f + t - (o - (n + t > o ? 0 : n)))) + (r ? Math.round(t + (e?.y || 0)) : 0);
                        }
                        y(p);
                    }, [s, a, e, c, f]),
                    k = (0, i.useCallback)(
                        (e) => {
                            (w.current = e), x();
                        },
                        [x]
                    );
                return (
                    (0, i.useEffect)(() => {
                        (e || t)?.items && (c || f) && x();
                    }, [t, x, e, c, f]),
                    (0, i.useEffect)(() => {
                        if (o && !e) {
                            let e = document.activeElement;
                            if (e instanceof HTMLElement && e !== document.body) {
                                let t = { capture: !0, ...u.K7 },
                                    n = ({ relatedTarget: t, type: r }) => {
                                        (t instanceof HTMLElement && w.current?.contains(t)) || v(), e.removeEventListener("click" === r ? "blur" : "click", n, { capture: !0 });
                                    };
                                e.addEventListener("click", n, t), e.addEventListener("blur", n, t);
                            } else w.current?.focus(u.eS);
                        }
                    }, [o, v, e]),
                    (0, i.useEffect)(() => {
                        o || (E.current = {});
                    }, [o, g.x, g.y, e]),
                    (0, i.useEffect)(() => {
                        let e = ({ key: e }) => {
                            "Escape" === e && v();
                        };
                        return o && window.addEventListener("keydown", e, { passive: !0 }), () => window.removeEventListener("keydown", e);
                    }, [o, v]),
                    o
                        ? (0, r.jsx)(h, {
                            ref: k,
                            $isSubMenu: S,
                            $x: s || c - g.x,
                            $y: a || f - g.y,
                            onBlurCapture: v,
                            onContextMenu: l.nK,
                            ...d,
                            ...u.LL,
                            children: (0, r.jsx)("ol", { children: o.map((e, t) => (0, r.jsx)(p, { isSubMenu: S, resetMenu: v, ...e }, `${e.label || "item"}-${t}`)) }),
                        })
                        : null
                );
            };
            let { Provider: y, useContext: b } = (0, n(87386).Z)(() => {
                let [e, t] = (0, i.useState)(Object.create(null)),
                    n = (0, i.useRef)(0),
                    r = (0, i.useRef)();
                return {
                    contextMenu: (0, i.useCallback)((e) => {
                        let i = (n, r, i) => {
                            let { staticX: o, staticY: s } = i || {},
                                a = 0,
                                c = 0;
                            if (n) n.cancelable && n.preventDefault(), ({ pageX: a, pageY: c } = ("touches" in n && n.touches.item?.(0)) || n);
                            else if (r) {
                                let { height: e, x: t, y: n } = r;
                                (a = t), (c = n + e);
                            }
                            let u = e(n);
                            t({ items: u.length > 0 ? u : void 0, staticX: o, staticY: s, x: a, y: c });
                        };
                        return {
                            onContextMenuCapture: i,
                            ...((0, l.G6)() && {
                                onTouchEnd: (e) => {
                                    r.current && (e.preventDefault(), i(r.current), (r.current = void 0)), window.clearTimeout(n.current);
                                },
                                onTouchMove: () => {
                                    (r.current = void 0), window.clearTimeout(n.current);
                                },
                                onTouchStart: (e) => {
                                    window.clearTimeout(n.current),
                                        (n.current = window.setTimeout(() => {
                                            r.current = e;
                                        }, u.jx.LONG_PRESS));
                                },
                            }),
                        };
                    }, []),
                    menu: e,
                    setMenu: t,
                };
            }, (0, r.jsx)(g, {}));
        },
        37176: function (e, t, n) {
            "use strict";
            var r = n(5152),
                i = n.n(r),
                o = n(97836);
            let s = {
                RDIChat: { Component: i()(() => n.e(3350, "high").then(n.bind(n, 73350)), { loadableGenerated: { webpack: () => [73350] } }), backgroundColor: "#f9f9f9", icon: "/System/Icons/16x16/chat.png", title: "RDIChat" },
                Email: { Component: i()(() => n.e(4162, "high").then(n.bind(n, 54162)), { loadableGenerated: { webpack: () => [54162] } }), backgroundColor: "#808080", icon: "/System/Icons/16x16/outlookemail.png", title: "Email" },
                BoxedWine: {
                    Component: i()(() => n.e(9793, "high").then(n.bind(n, 29793)), { loadableGenerated: { webpack: () => [29793] } }),
                    allowResizing: !1,
                    backgroundColor: "#000",
                    defaultSize: { height: 480, width: 640 },
                    dependantLibs: ["/Program Files/BoxedWine/boxedwine.wasm"],
                    icon: "./System/Icons/32x32/boxedwine.webp",
                    libs: ["/Program Files/BoxedWine/browserfs.boxedwine.js", "/Program Files/BoxedWine/jszip.min.js", "/Program Files/BoxedWine/boxedwine-shell.js", "/Program Files/BoxedWine/boxedwine.js"],
                    lockAspectRatio: !0,
                    singleton: !0,
                    title: "BoxedWine",
                },
                Browser: {
                    Component: i()(() => n.e(565, "high").then(n.bind(n, 80565)), { loadableGenerated: { webpack: () => [80565] } }),
                    backgroundColor: "#FFF",
                    defaultSize: { height: 500, width: 600 },
                    icon: "./System/Icons/32x32/chromium.webp",
                    title: "Browser",
                },
                ClassiCube: {
                    Component: i()(() => n.e(8511, "high").then(n.bind(n, 8511)), { loadableGenerated: { webpack: () => [8511] } }),
                    backgroundColor: "#201E20",
                    defaultSize: { height: 420, width: 640 },
                    hideMaximizeButton: !0,
                    icon: "./System/Icons/32x32/classicube.webp",
                    libs: ["/Program Files/ClassiCube/ClassiCube.js"],
                    title: "ClassiCube",
                },
                DXBall: {
                    Component: i()(() => n.e(2280, "high").then(n.bind(n, 12280)), { loadableGenerated: { webpack: () => [12280] } }),
                    backgroundColor: "#000",
                    icon: "./System/Icons/32x32/dxball.webp",
                    libs: ["/Program Files/DX-Ball/game.js"],
                    lockAspectRatio: !0,
                    singleton: !0,
                    title: "DX-Ball",
                },
                DevTools: {
                    Component: i()(() => n.e(2647, "high").then(n.bind(n, 42647)), { loadableGenerated: { webpack: () => [42647] } }),
                    backgroundColor: "#242424",
                    defaultSize: { height: 380, width: 545 },
                    icon: "./System/Icons/16x16/eruda.webp",
                    libs: ["/Program Files/Eruda/eruda.js"],
                    singleton: !0,
                    title: "DevTools",
                },
                Emulator: {
                    Component: i()(() => n.e(642, "high").then(n.bind(n, 90642)), { loadableGenerated: { webpack: () => [90642] } }),
                    backgroundColor: "#000",
                    defaultSize: { height: 400, width: 600 },
                    dependantLibs: ["/Program Files/EmulatorJs/emu-css.min.css", "/Program Files/EmulatorJs/emulator.min.js"],
                    icon: "./System/Icons/16x16/emulator.webp",
                    libs: ["/Program Files/EmulatorJs/loader.js"],
                    lockAspectRatio: !0,
                    singleton: !0,
                    title: "Emulator",
                },
                FileExplorer: {
                    Component: i()(() => Promise.all([n.e(4110, "high"), n.e(3425, "high")]).then(n.bind(n, 43425)), { loadableGenerated: { webpack: () => [43425] } }),
                    backgroundColor: "#202020",
                    defaultSize: { height: 260, width: 405 },
                    icon: o.XN,
                    title: "File Explorer",
                },
                IRC: {
                    Component: i()(() => n.e(7210, "high").then(n.bind(n, 57210)), { loadableGenerated: { webpack: () => [57210] } }),
                    backgroundColor: "#FFF",
                    defaultSize: { height: 512, width: 704 },
                    icon: "./System/Icons/16x16/kiwiirc.webp",
                    libs: ["/Program Files/kiwiirc/index.html"],
                    title: "IRC",
                },
                JSDOS: {
                    Component: i()(() => n.e(9278, "high").then(n.bind(n, 49278)), { loadableGenerated: { webpack: () => [49278] } }),
                    autoSizing: !0,
                    backgroundColor: "#000",
                    defaultSize: { height: 200, width: 320 },
                    dependantLibs: ["/Program Files/js-dos/wdosbox.wasm"],
                    icon: "./System/Icons/16x16/jsdos.webp",
                    libs: ["/Program Files/js-dos/emulators.js", "/Program Files/js-dos/emulators-ui.js"],
                    lockAspectRatio: !0,
                    title: "js-dos v7",
                },
                Marked: {
                    Component: i()(() => n.e(9580, "high").then(n.bind(n, 79580)), { loadableGenerated: { webpack: () => [79580] } }),
                    backgroundColor: "#FFF",
                    defaultSize: { height: 480, width: 560 },
                    icon: "./System/Icons/16x16/marked.webp",
                    libs: ["/Program Files/Marked/marked.min.js", "/Program Files/Marked/purify.min.js"],
                    title: "Marked",
                },
                Messenger: {
                    Component: i()(() => Promise.all([n.e(1622, "high"), n.e(8370, "high")]).then(n.bind(n, 78370)), { loadableGenerated: { webpack: () => [78370] } }),
                    backgroundColor: "#242526",
                    defaultSize: { height: 500, width: 425 },
                    icon: "./System/Icons/32x32/messenger.webp",
                    singleton: !0,
                    title: "Messenger",
                },
                MonacoEditor: {
                    Component: i()(() => n.e(5883, "high").then(n.bind(n, 15883)), { loadableGenerated: { webpack: () => [15883] } }),
                    backgroundColor: "#1E1E1E",
                    defaultSize: { height: 480, width: 544 },
                    dependantLibs: [
                        "/Program Files/MonacoEditor/vs/loader.js",
                        "/Program Files/MonacoEditor/vs/editor/editor.main.js",
                        "/Program Files/MonacoEditor/vs/editor/editor.main.css",
                        "/Program Files/MonacoEditor/vs/editor/editor.main.nls.js",
                    ],
                    icon: "./System/Icons/32x32/monaco.webp",
                    title: "Monaco Editor",
                },
                OpenType: {
                    Component: i()(() => n.e(7933, "high").then(n.bind(n, 57933)), { loadableGenerated: { webpack: () => [57933] } }),
                    backgroundColor: "#FFF",
                    icon: "./System/Icons/32x32/opentype.webp",
                    preferProcessIcon: !0,
                    title: "OpenType",
                },
                OpenWith: {
                    Component: i()(() => n.e(3468, "high").then(n.bind(n, 13468)), { loadableGenerated: { webpack: () => [13468] } }),
                    allowResizing: !1,
                    backgroundColor: "#FFF",
                    defaultSize: { height: 492, width: 392 },
                    hideTaskbarEntry: !0,
                    hideTitlebar: !0,
                    icon: "./System/Icons/32x32/unknown.webp",
                    title: "Open With",
                },
                PDF: {
                    Component: i()(() => n.e(8036, "high").then(n.bind(n, 48036)), { loadableGenerated: { webpack: () => [48036] } }),
                    backgroundColor: "#525659",
                    icon: "./System/Icons/32x32/pdf.webp",
                    libs: ["/Program Files/PDF.js/pdf.js"],
                    title: "PDF",
                },
                Paint: {
                    Component: i()(() => n.e(3366, "high").then(n.bind(n, 83366)), { loadableGenerated: { webpack: () => [83366] } }),
                    backgroundColor: "#808080",
                    icon: "./System/Icons/32x32/paint.webp",
                    libs: ["/Program Files/jspaint/index.html"],
                    title: "Paint",
                },
                Photos: {
                    Component: i()(() => Promise.all([n.e(7631, "high"), n.e(5692, "high")]).then(n.bind(n, 55692)), { loadableGenerated: { webpack: () => [55692] } }),
                    backgroundColor: "#222",
                    defaultSize: { height: 432, width: 576 },
                    hideTitlebarIcon: !0,
                    icon: "./System/Icons/32x32/photos.webp",
                    title: "Photos",
                },
                Properties: {
                    Component: i()(() => n.e(6715, "high").then(n.bind(n, 46715)), { loadableGenerated: { webpack: () => [46715] } }),
                    allowResizing: !1,
                    backgroundColor: "rgb(240, 240, 240)",
                    defaultSize: { height: 412, width: 361 },
                    hideMaximizeButton: !0,
                    hideMinimizeButton: !0,
                    icon: "",
                    title: "Properties",
                },
                Quake3: {
                    Component: i()(() => n.e(6499, "high").then(n.bind(n, 16499)), { loadableGenerated: { webpack: () => [16499] } }),
                    autoSizing: !0,
                    backgroundColor: "#000",
                    defaultSize: { height: 480, width: 640 },
                    icon: "./System/Icons/32x32/quake3.webp",
                    libs: ["/Program Files/Quake3/Quake3Game.js"],
                    title: "Quake III Arena",
                },
                Ruffle: {
                    Component: i()(() => n.e(6526, "high").then(n.bind(n, 86526)), { loadableGenerated: { webpack: () => [86526] } }),
                    backgroundColor: "#000",
                    defaultSize: { height: 400, width: 550 },
                    icon: "./System/Icons/32x32/ruffle.webp",
                    libs: ["/Program Files/Ruffle/ruffle.js"],
                    lockAspectRatio: !0,
                    title: "Ruffle",
                },
                Run: {
                    Component: i()(() => n.e(2347, "high").then(n.bind(n, 40591)), { loadableGenerated: { webpack: () => [40591] } }),
                    allowResizing: !1,
                    defaultSize: { height: 174, width: 397 },
                    hideMaximizeButton: !0,
                    hideMinimizeButton: !0,
                    icon: "./System/Icons/32x32/run.webp",
                    initialRelativePosition: { bottom: o.bK + 11, left: 15 },
                    singleton: !0,
                    title: "Run",
                },
                SpaceCadet: {
                    Component: i()(() => n.e(8562, "high").then(n.bind(n, 78562)), { loadableGenerated: { webpack: () => [78562] } }),
                    backgroundColor: "#000",
                    defaultSize: { height: 428, width: 600 },
                    dependantLibs: ["/Program Files/SpaceCadet/SpaceCadetPinball.wasm"],
                    icon: "./System/Icons/32x32/pinball.webp",
                    libs: ["/Program Files/SpaceCadet/SpaceCadetPinball.js"],
                    lockAspectRatio: !0,
                    singleton: !0,
                    title: "Space Cadet",
                },
                StableDiffusion: {
                    Component: i()(() => n.e(9237, "high").then(n.bind(n, 69237)), { loadableGenerated: { webpack: () => [69237] } }),
                    allowResizing: !1,
                    backgroundColor: "rgb(235, 251, 247)",
                    defaultSize: { height: 600, width: 544 },
                    icon: "./System/Icons/32x32/stablediffusion.webp",
                    lockAspectRatio: !0,
                    singleton: !0,
                    title: "Stable Diffusion",
                },
                Terminal: {
                    Component: i()(() => Promise.all([n.e(2347, "high"), n.e(5642, "high")]).then(n.bind(n, 85642)), { loadableGenerated: { webpack: () => [85642] } }),
                    backgroundColor: "rgba(12, 12, 12, 0.5)",
                    defaultSize: { height: 374, width: 615 },
                    icon: "./System/Icons/32x32/xterm.webp",
                    libs: ["/Program Files/Xterm.js/xterm.css", "/Program Files/Xterm.js/xterm.js", "/Program Files/Xterm.js/xterm-addon-fit.js", "/Program Files/Xterm.js/local-echo.js"],
                    preferProcessIcon: !0,
                    title: "Terminal",
                },
                TinyMCE: {
                    Component: i()(() => n.e(8558, "high").then(n.bind(n, 48558)), { loadableGenerated: { webpack: () => [48558] } }),
                    backgroundColor: "#202124",
                    dependantLibs: [
                        "/Program Files/TinyMCE/themes/silver/theme.min.js",
                        "/Program Files/TinyMCE/models/dom/model.min.js",
                        "/Program Files/TinyMCE/icons/default/icons.min.js",
                        "/Program Files/TinyMCE/skins/ui/oxide/skin.min.css",
                    ],
                    icon: "./System/Icons/32x32/tinymce.webp",
                    libs: ["/Program Files/TinyMCE/tinymce.min.js"],
                    singleton: !0,
                    title: "TinyMCE",
                },
                Transfer: {
                    Component: i()(() => n.e(8086, "high").then(n.bind(n, 18086)), { loadableGenerated: { webpack: () => [18086] } }),
                    allowResizing: !1,
                    backgroundColor: "#FFF",
                    defaultSize: { height: 163, width: 400 },
                    icon: "./System/Icons/32x32/copying.webp",
                    title: "",
                },
                V86: {
                    Component: i()(() => n.e(2350, "high").then(n.bind(n, 82350)), { loadableGenerated: { webpack: () => [82350] } }),
                    allowResizing: !1,
                    autoSizing: !0,
                    backgroundColor: "#000",
                    defaultSize: { height: 200, width: 320 },
                    dependantLibs: ["/Program Files/Virtual x86/v86.wasm"],
                    icon: "./System/Icons/32x32/v86.webp",
                    libs: ["/Program Files/Virtual x86/libv86.js"],
                    preferProcessIcon: !0,
                    title: "Virtual x86",
                },
                VideoPlayer: {
                    Component: i()(() => n.e(8757, "high").then(n.bind(n, 68757)), { loadableGenerated: { webpack: () => [68757] } }),
                    autoSizing: !0,
                    backgroundColor: "#000",
                    defaultSize: { height: 390, width: 640 },
                    icon: "./System/Icons/32x32/vlc.webp",
                    libs: ["/Program Files/Video.js/video-js.min.css", "/Program Files/Video.js/video.min.js", "/Program Files/Video.js/Youtube.min.js"],
                    title: "Video Player",
                },
                Vim: {
                    Component: i()(() => n.e(2981, "high").then(n.bind(n, 2981)), { loadableGenerated: { webpack: () => [2981] } }),
                    allowResizing: !1,
                    backgroundColor: "#222324",
                    defaultSize: { height: 448, width: 595 },
                    icon: "./System/Icons/32x32/vim.webp",
                    libs: ["/Program Files/Vim.js/vim.js"],
                    singleton: !0,
                    title: "Vim",
                },
                Webamp: {
                    Component: i()(() => n.e(5058, "high").then(n.bind(n, 65058)), { loadableGenerated: { webpack: () => [65058] } }),
                    allowResizing: !1,
                    hasWindow: !1,
                    icon: "./System/Icons/32x32/webamp.webp",
                    libs: ["/Program Files/Webamp/webamp.bundle.min.js"],
                    singleton: !0,
                    title: "Webamp",
                },
            };
            t.Z = s;
        },
        58437: function (e, t, n) {
            "use strict";
            n.d(t, {
                a: function () {
                    return w;
                },
                z: function () {
                    return v;
                },
            });
            var r = n(87386),
                i = n(67294),
                o = n(37176),
                s = n(97836),
                a = n(6484);
            let c = (e, t) => (n) => {
                let { ...r } = n;
                return r[e] && (r[e] = { ...r[e], ...t }), r;
            },
                u = (e, t) => (n) => {
                    if (t) return c(e, { closing: t })(n);
                    let { [e]: r, ...i } = n;
                    return i;
                },
                l = (e, t, n) => {
                    let r = t ? `${e}${s.CC}${t}` : e,
                        i = (e = 0) => {
                            let t = `${r}${e ? `${s.CC}${e}` : ""}`;
                            return n[t] ? i(e + 1) : t;
                        };
                    return i();
                },
                p = (e, t, n) => (r) => {
                    let { url: i = "" } = t,
                        { dependantLibs: u, libs: p, singleton: f } = o.Z[e] || {};
                    if ((p && (0, a.Q4)(p), u && (0, a.Q4)(u), f)) {
                        let t = Object.keys(r).find((t) => t === e || t.startsWith(`${e}${s.CC}`));
                        if (t) return c(t, { url: i })(r);
                    }
                    let h = l(e, i, r);
                    if (r[h]) {
                        let { componentWindow: e } = r[h];
                        return e?.focus(s.eS), r;
                    }
                    return o.Z[e] ? { ...r, [h]: { ...o.Z[e], ...("string" == typeof n && { icon: n }), ...t } } : r;
                },
                f = (e) => (t) => c(e, { maximized: !t[e]?.maximized })(t),
                h = (e) => (t) => c(e, { minimized: !t[e]?.minimized })(t),
                d = (e, t) => (n) => c(e, { icon: t })(n),
                m = (e, t, n) => (r) => c(e, { [t]: n })(r),
                g = (e, t, n) => (r) => c(e, { [t]: n })(r),
                y = (e, t) => (n) => c(e, { title: t })(n),
                b = (e, t) => (n) => c(e, { url: t })(n),
                { Provider: w, useContext: v } = (0, r.Z)(() => {
                    let [e, t] = (0, i.useState)(Object.create(null)),
                        n = (0, i.useCallback)((e, n, r) => t(m(e, n, r)), []),
                        r = (0, i.useCallback)((e, n) => t(u(e, n)), []),
                        o = (0, i.useCallback)((e, n) => t(d(e, n)), []),
                        a = (0, i.useCallback)((e) => t(f(e)), []),
                        c = (0, i.useCallback)((e) => t(h(e)), []),
                        l = (0, i.useCallback)((e, n, r) => {
                            if ("ExternalURL" === e) {
                                let { url: e = "" } = n || {};
                                (e.startsWith("http:") || e.startsWith("https:")) && window.open(decodeURIComponent(e), "_blank", "noopener,noreferrer");
                            } else t(p(e, n || {}, r));
                        }, []),
                        w = (0, i.useCallback)((e, n, r) => t(g(e, n, r)), []),
                        v = (0, i.useCallback)((e, n) => t(y(e, n)), []),
                        S = (0, i.useCallback)((e, n) => t(b(e, n)), []),
                        E = (0, i.useCallback)(
                            (e) => {
                                r(e, !0), window.setTimeout(() => r(e), s.jx.WINDOW);
                            },
                            [r]
                        );
                    return {
                        argument: n,
                        close: r,
                        closeProcessesByUrl: (0, i.useCallback)(
                            (e) =>
                                t(
                                    (t) => (
                                        Object.entries(t).forEach(([t, { url: n }]) => {
                                            n === e && E(t);
                                        }),
                                        t
                                    )
                                ),
                            [E]
                        ),
                        closeWithTransition: E,
                        icon: o,
                        linkElement: w,
                        maximize: a,
                        minimize: c,
                        open: l,
                        processes: e,
                        title: v,
                        url: S,
                    };
                });
        },
        76488: function (e, t, n) {
            "use strict";
            n.d(t, {
                e: function () {
                    return l;
                },
                k: function () {
                    return p;
                },
            });
            var r = n(87386),
                i = n(1864),
                o = n(67294),
                s = n(20063),
                a = n(97836),
                c = n(6484);
            let u = {},
                { Provider: l, useContext: p } = (0, r.Z)(() => {
                    let { deletePath: e, readdir: t, readFile: n, rootFs: r, writeFile: l, lstat: p } = (0, s.o)(),
                        [f, h] = (0, o.useState)(!1),
                        [d, m] = (0, o.useState)(""),
                        [g, y] = (0, o.useState)([]),
                        [b, w] = (0, o.useState)(a.t0),
                        [v, S] = (0, o.useState)(a.Tg),
                        [E, x] = (0, o.useState)(""),
                        [k, _] = (0, o.useState)(Object.create(null)),
                        [j, I] = (0, o.useState)(Object.create(null)),
                        [T, P] = (0, o.useState)(Object.create(null)),
                        [C, F] = (0, o.useState)(a.nN),
                        [O, A] = (0, o.useState)(a._K),
                        [R, N] = (0, o.useState)([]),
                        [B, L] = (0, o.useState)([]),
                        D = (0, o.useCallback)(
                            (e, t, n) =>
                                (n || (0, i.extname)(e)) &&
                                "FileExplorer" !== t &&
                                L((r) => {
                                    let i = r.findIndex(([n, r]) => n === e && r === t);
                                    return -1 !== i ? [r[i], ...r.slice(0, i), ...r.slice(i + 1)] : [[e, t, n], ...r].slice(0, 10);
                                }),
                            []
                        ),
                        U = (0, o.useCallback)((e) => y((t) => (t[0] === e ? t : [e, ...t.filter((t) => t !== e)])), []),
                        M = (0, o.useCallback)((e) => y((t) => t.filter((t) => t !== e)), []),
                        z = (0, o.useCallback)((e, t) => {
                            t && F(t), A(e);
                        }, []),
                        [V, $] = (0, o.useState)(!1),
                        W = (0, o.useCallback)(
                            (e, t, n, r) =>
                                I((i = {}) => {
                                    let [o, s, c] = i[e] || [],
                                        u = "function" == typeof t ? t(o) : t;
                                    return { ...i, [e]: [u, n ?? s, r ?? c ?? a._w] };
                                }),
                            []
                        ),
                        H = (0, o.useRef)(!1),
                        G = (0, o.useCallback)(
                            async (e) => {
                                if ("function" == typeof e) return P(e);
                                let [n] = Object.keys(e) || [];
                                if (n && a.Ll === (0, i.dirname)(n)) {
                                    let n = document.querySelector("main > ol");
                                    if (n instanceof HTMLOListElement)
                                        try {
                                            let { [a.Ll]: [r = []] = [] } = j || {},
                                                i = { [a.Ll]: [[...new Set([...r, ...(await t(a.Ll)).filter((e) => !a.vP.has(e))])]] };
                                            return P((0, c.zr)(a.Ll, n, e, i));
                                        } catch { }
                                }
                                return P(e);
                            },
                            [t, j]
                        ),
                        q = (0, o.useRef)(0);
                    return (
                        (0, o.useEffect)(() => {
                            if (!q.current && f && !V) {
                                let e = () => {
                                    l(a.hl, JSON.stringify({ clockSource: v, cursor: E, iconPositions: T, recentFiles: B, runHistory: R, sortOrders: j, themeName: b, wallpaperFit: C, wallpaperImage: O, windowStates: k }), !0);
                                };
                                "requestIdleCallback" in window && "function" == typeof window.requestIdleCallback ? requestIdleCallback(e) : e();
                            }
                        }, [v, E, V, T, B, R, f, j, b, C, O, k, l]),
                        (0, o.useEffect)(() => {
                            !H.current &&
                                r &&
                                (async () => {
                                    H.current = !0;
                                    try {
                                        let e;
                                        try {
                                            e = (await p(a.hl)).blocks <= 0 ? u : JSON.parse((await n(a.hl)).toString());
                                        } catch {
                                            e = u;
                                        }
                                        if (
                                            (e.clockSource && S(e.clockSource),
                                                e.cursor && x(e.cursor),
                                                e.themeName && w(e.themeName),
                                                e.wallpaperImage && z(e.wallpaperImage, e.wallpaperFit),
                                                e.sortOrders && Object.keys(e.sortOrders).length > 0 && I(e.sortOrders),
                                                e.iconPositions && Object.keys(e.iconPositions).length > 0)
                                        ) {
                                            if (e !== u && u.iconPositions) {
                                                let t = Object.entries(u.iconPositions);
                                                Object.keys({ ...u.iconPositions, ...e.iconPositions }).forEach((n) => {
                                                    let r = e.iconPositions?.[n];
                                                    if (r) {
                                                        let [i] = t.find(([e, { gridColumnStart: t, gridRowStart: i }]) => e !== n && r.gridColumnStart === t && r.gridRowStart === i) || [];
                                                        i && e.iconPositions?.[i].gridColumnStart === r.gridColumnStart && e.iconPositions?.[i].gridRowStart === r.gridRowStart && delete e.iconPositions[n];
                                                    } else e.iconPositions[n] = u.iconPositions[n];
                                                });
                                            }
                                            P(e.iconPositions);
                                        } else "object" != typeof e.iconPositions && P(u.iconPositions || Object.create(null));
                                        e.windowStates && Object.keys(e.windowStates).length > 0 && _(e.windowStates),
                                            e.runHistory && e.runHistory.length > 0 && N(e.runHistory),
                                            e.recentFiles && e.recentFiles.length > 0 ? L(e.recentFiles) : Array.isArray(e.recentFiles) || L(u?.recentFiles || []);
                                    } catch (t) {
                                        t?.code === "ENOENT" && e(a.hl);
                                    }
                                    (q.current = window.setTimeout(() => {
                                        (q.current = 0), (window.sessionIsWriteable = !0);
                                    }, 2 * a.jx.WINDOW)),
                                        h(!0);
                                })();
                        }, [e, p, n, r, z]),
                        {
                            clockSource: v,
                            cursor: E,
                            foregroundId: d,
                            iconPositions: T,
                            prependToStack: U,
                            recentFiles: B,
                            removeFromStack: M,
                            runHistory: R,
                            sessionLoaded: f,
                            setClockSource: S,
                            setCursor: x,
                            setForegroundId: m,
                            setHaltSession: $,
                            setIconPositions: G,
                            setRunHistory: N,
                            setSortOrder: W,
                            setThemeName: w,
                            setWallpaper: z,
                            setWindowStates: _,
                            sortOrders: j,
                            stackOrder: g,
                            themeName: b,
                            updateRecentFiles: D,
                            wallpaperFit: C,
                            wallpaperImage: O,
                            windowStates: k,
                        }
                    );
                });
        },
        8955: function (e, t, n) {
            "use strict";
            n.d(t, {
                j: function () {
                    return l;
                },
                S: function () {
                    return p;
                },
            });
            var r = n(87386),
                i = n(67294),
                o = n(6484);
            let s = ["MetaLeft", "MetaRight", "Escape"],
                a = async (e, t) => {
                    try {
                        e.requestFullscreen ? await e.requestFullscreen(t) : e.mozRequestFullScreen ? await e.mozRequestFullScreen(t) : e.webkitRequestFullscreen && (await e.webkitRequestFullscreen(t));
                    } catch { }
                },
                c = async () => {
                    let e = document;
                    try {
                        e.exitFullscreen ? await e.exitFullscreen() : e.mozCancelFullScreen ? await e.mozCancelFullScreen() : e.webkitExitFullscreen && (await e.webkitExitFullscreen());
                    } catch { }
                },
                u = async (e) => {
                    try {
                        e === document.documentElement ? await navigator?.keyboard?.lock?.(s) : navigator?.keyboard?.unlock?.();
                    } catch { }
                },
                { Provider: l, useContext: p } = (0, r.Z)(() => {
                    let [e, t] = (0, i.useState)(null),
                        n = async (t, n) => {
                            e && (!t || t === e) ? await c() : (e && ((0, o.vU)() || (0, o.G6)()) && (await c()), await a(t || document.documentElement, { navigationUI: n || "hide" }));
                        };
                    return (
                        (0, i.useEffect)(() => {
                            let e = () => {
                                let { mozFullScreenElement: e, webkitFullscreenElement: n } = document,
                                    r = document.fullscreenElement || e || n;
                                u(r).then(() => t(r));
                            };
                            return document.addEventListener("fullscreenchange", e, { passive: !0 }), () => document.removeEventListener("fullscreenchange", e);
                        }, []),
                        { fullscreenElement: e, toggleFullscreen: n }
                    );
                });
        },
        86178: function (e, t, n) {
            "use strict";
            n.d(t, {
                R: function () {
                    return o;
                },
            });
            var r = n(67294),
                i = n(58437);
            let o = () => {
                let { processes: e } = (0, i.z)(),
                    t = (0, r.useRef)({});
                return (
                    (0, r.useEffect)(() => {
                        t.current = e;
                    }, [e]),
                    t
                );
            };
        },
        28864: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
                (function (e, t) {
                    for (var n in t) Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
                })(t, {
                    default: function () {
                        return a;
                    },
                    noSSR: function () {
                        return s;
                    },
                });
            let r = n(38754);
            n(85893), n(67294);
            let i = r._(n(56016));
            function o(e) {
                return { default: (null == e ? void 0 : e.default) || e };
            }
            function s(e, t) {
                return delete t.webpack, delete t.modules, e(t);
            }
            function a(e, t) {
                let n = i.default,
                    r = {
                        loading: (e) => {
                            let { error: t, isLoading: n, pastDelay: r } = e;
                            return null;
                        },
                    };
                e instanceof Promise ? (r.loader = () => e) : "function" == typeof e ? (r.loader = e) : "object" == typeof e && (r = { ...r, ...e });
                let a = (r = { ...r, ...t }).loader;
                return (r.loadableGenerated && ((r = { ...r, ...r.loadableGenerated }), delete r.loadableGenerated), "boolean" != typeof r.ssr || r.ssr)
                    ? n({ ...r, loader: () => (null != a ? a().then(o) : Promise.resolve(o(() => null))) })
                    : (delete r.webpack, delete r.modules, s(n, r));
            }
            ("function" == typeof t.default || ("object" == typeof t.default && null !== t.default)) &&
                void 0 === t.default.__esModule &&
                (Object.defineProperty(t.default, "__esModule", { value: !0 }), Object.assign(t.default, t), (e.exports = t.default));
        },
        60572: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
                Object.defineProperty(t, "LoadableContext", {
                    enumerable: !0,
                    get: function () {
                        return r;
                    },
                });
            let r = n(38754)._(n(67294)).default.createContext(null);
        },
        56016: function (e, t, n) {
            "use strict";
              /**
  @copyright (c) 2017-present James Kyle <me@thejameskyle.com>
   MIT License
   Permission is hereby granted, free of charge, to any person obtaining
  a copy of this software and associated documentation files (the
  "Software"), to deal in the Software without restriction, including
  without limitation the rights to use, copy, modify, merge, publish,
  distribute, sublicense, and/or sell copies of the Software, and to
  permit persons to whom the Software is furnished to do so, subject to
  the following conditions:
   The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of the Software.
   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
  LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
  OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
  WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE
  */ Object.defineProperty(
                t,
                "__esModule",
                { value: !0 }
            ),
                Object.defineProperty(t, "default", {
                    enumerable: !0,
                    get: function () {
                        return f;
                    },
                });
            let r = n(38754)._(n(67294)),
                i = n(60572),
                o = [],
                s = [],
                a = !1;
            function c(e) {
                let t = e(),
                    n = { loading: !0, loaded: null, error: null };
                return (
                    (n.promise = t
                        .then((e) => ((n.loading = !1), (n.loaded = e), e))
                        .catch((e) => {
                            throw ((n.loading = !1), (n.error = e), e);
                        })),
                    n
                );
            }
            class u {
                promise() {
                    return this._res.promise;
                }
                retry() {
                    this._clearTimeouts(), (this._res = this._loadFn(this._opts.loader)), (this._state = { pastDelay: !1, timedOut: !1 });
                    let { _res: e, _opts: t } = this;
                    e.loading &&
                        ("number" == typeof t.delay &&
                            (0 === t.delay
                                ? (this._state.pastDelay = !0)
                                : (this._delay = setTimeout(() => {
                                    this._update({ pastDelay: !0 });
                                }, t.delay))),
                            "number" == typeof t.timeout &&
                            (this._timeout = setTimeout(() => {
                                this._update({ timedOut: !0 });
                            }, t.timeout))),
                        this._res.promise
                            .then(() => {
                                this._update({}), this._clearTimeouts();
                            })
                            .catch((e) => {
                                this._update({}), this._clearTimeouts();
                            }),
                        this._update({});
                }
                _update(e) {
                    (this._state = { ...this._state, error: this._res.error, loaded: this._res.loaded, loading: this._res.loading, ...e }), this._callbacks.forEach((e) => e());
                }
                _clearTimeouts() {
                    clearTimeout(this._delay), clearTimeout(this._timeout);
                }
                getCurrentValue() {
                    return this._state;
                }
                subscribe(e) {
                    return (
                        this._callbacks.add(e),
                        () => {
                            this._callbacks.delete(e);
                        }
                    );
                }
                constructor(e, t) {
                    (this._loadFn = e), (this._opts = t), (this._callbacks = new Set()), (this._delay = null), (this._timeout = null), this.retry();
                }
            }
            function l(e) {
                return (function (e, t) {
                    let n = Object.assign({ loader: null, loading: null, delay: 200, timeout: null, webpack: null, modules: null }, t),
                        o = null;
                    function c() {
                        if (!o) {
                            let t = new u(e, n);
                            o = { getCurrentValue: t.getCurrentValue.bind(t), subscribe: t.subscribe.bind(t), retry: t.retry.bind(t), promise: t.promise.bind(t) };
                        }
                        return o.promise();
                    }
                    if (!a) {
                        let e = n.webpack ? n.webpack() : n.modules;
                        e &&
                            s.push((t) => {
                                for (let n of e) if (t.includes(n)) return c();
                            });
                    }
                    function l(e, t) {
                        !(function () {
                            c();
                            let e = r.default.useContext(i.LoadableContext);
                            e &&
                                Array.isArray(n.modules) &&
                                n.modules.forEach((t) => {
                                    e(t);
                                });
                        })();
                        let s = r.default.useSyncExternalStore(o.subscribe, o.getCurrentValue, o.getCurrentValue);
                        return (
                            r.default.useImperativeHandle(t, () => ({ retry: o.retry }), []),
                            r.default.useMemo(() => {
                                var t;
                                return s.loading || s.error
                                    ? r.default.createElement(n.loading, { isLoading: s.loading, pastDelay: s.pastDelay, timedOut: s.timedOut, error: s.error, retry: o.retry })
                                    : s.loaded
                                        ? r.default.createElement((t = s.loaded) && t.default ? t.default : t, e)
                                        : null;
                            }, [e, s])
                        );
                    }
                    return (l.preload = () => c()), (l.displayName = "LoadableComponent"), r.default.forwardRef(l);
                })(c, e);
            }
            function p(e, t) {
                let n = [];
                for (; e.length;) {
                    let r = e.pop();
                    n.push(r(t));
                }
                return Promise.all(n).then(() => {
                    if (e.length) return p(e, t);
                });
            }
            (l.preloadAll = () =>
                new Promise((e, t) => {
                    p(o).then(e, t);
                })),
                (l.preloadReady = (e) => (
                    void 0 === e && (e = []),
                    new Promise((t) => {
                        let n = () => ((a = !0), t());
                        p(s, e).then(n, n);
                    })
                )),
                (window.__NEXT_PRELOADREADY = l.preloadReady);
            let f = l;
        },
        64812: function (e, t, n) {
            "use strict";
            n.r(t),
                n.d(t, {
                    default: function () {
                        return A;
                    },
                });
            var r,
                i,
                o = n(85893),
                s = n(17535),
                a = n(67294),
                c = n(9008),
                u = n.n(c),
                l = n(20063),
                p = n(58437),
                f = n(76488),
                h = JSON.parse('["./System/Icons/shortcut.webp","./System/Icons/pc.webp","./System/Icons/user.webp"]'),
                d = n(97836),
                m = n(6484);
            let { alias: g, author: y, description: b } = d.PACKAGE_DATA;
            var w = (0, a.memo)(() => {
                let [e, t] = (0, a.useState)(g),
                    [r, i] = (0, a.useState)(""),
                    { readFile: s } = (0, l.o)(),
                    [c, w] = (0, a.useState)(""),
                    { cursor: v, foregroundId: S } = (0, f.k)(),
                    { processes: { [S]: E } = {} } = (0, p.z)(),
                    { icon: x, hideTaskbarEntry: k, title: _ } = E || {},
                    j = (0, a.useCallback)(() => {
                        t(g), i((e) => (e ? d.Yg : e));
                    }, []),
                    I = (0, a.useMemo)(() => ((0, m.qs)(r) ? (0, m.RU)(r, 16, (0, m.bN)(), ".webp").split(" ")[0] : r), [r]),
                    T = (0, a.useCallback)(
                        async (e) => {
                            let { getFirstAniImage: t, getLargestIcon: r } = await n.e(4609, "high").then(n.bind(n, 14609)),
                                i = await s(e),
                                o = (0, m.RT)(e),
                                a = i;
                            if (".ani" === o) a = await t(i);
                            else {
                                let e = await r(i, 128);
                                if (e) return e;
                            }
                            return a ? (0, m.wB)(o, a) : "";
                        },
                        [s]
                    );
                return (
                    (0, a.useEffect)(() => {
                        if (!k && (x || _)) {
                            let n = _ ? `${_} - ${g}` : g;
                            e !== n && t(n), (r === x && r) || i(encodeURI(x) || d.Yg);
                        } else j();
                    }, [r, k, x, _, j, e]),
                    (0, a.useEffect)(() => {
                        let e = () => {
                            "visible" === document.visibilityState && j();
                        },
                            t = () => {
                                let e = document.querySelector("link[rel=icon]");
                                if (e instanceof HTMLLinkElement)
                                    try {
                                        e.href = d.Yg;
                                    } catch { }
                            };
                        return (
                            window.addEventListener("beforeunload", t, d.K7),
                            document.addEventListener("visibilitychange", e, { passive: !0 }),
                            () => {
                                window.removeEventListener("beforeunload", t), document.removeEventListener("visibilitychange", e);
                            }
                        );
                    }, [j]),
                    (0, a.useEffect)(() => {
                        v && T(v).then(w);
                    }, [v, T]),
                    (0, o.jsxs)(u(), {
                        children: [
                            (0, o.jsx)("title", { children: e }),
                            I && (0, o.jsx)("link", { href: I, rel: "icon", type: "image/webp" }),
                            (0, o.jsx)("meta", { content: "width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, interactive-widget=resizes-content", name: "viewport" }),
                            (0, o.jsx)("meta", { content: b, name: "description" }),
                            (0, o.jsx)("meta", { content: g, property: "og:title" }),
                            (0, o.jsx)("meta", { content: "website", property: "og:type" }),
                            (0, o.jsx)("meta", { content: y.url, property: "og:url" }),
                            (0, o.jsx)("meta", { content: `${y.url}/screenshot.png`, property: "og:image" }),
                            (0, o.jsx)("meta", { content: b, property: "og:description" }),
                            (0, o.jsx)("link", { href: `${y.url}/rss.xml`, rel: "alternate", title: `RSS Feed for ${g}`, type: "application/rss+xml" }),
                            h.map((e) => {
                                let t = e.includes("/16x16/"),
                                    n = !t && (0, m.qs)(e);
                                return (0, o.jsx)(
                                    "link",
                                    { as: "image", href: n || t ? void 0 : e, imageSrcSet: n ? (0, m.km)(e, 48, ".webp") : t ? (0, m.km)(e.replace("16x16/", ""), 16, ".webp") : void 0, rel: "preload", ...d.h7 },
                                    e
                                );
                            }),
                            c && (0, o.jsx)("style", { children: `*, *::before, *::after { cursor: url(${c}), default !important; }` }),
                        ],
                    })
                );
            }),
                v = n(10508),
                S = n(70398),
                E = n(81879);
            function x({ children: e, features: t, strict: n = !1 }) {
                let [, r] = (0, a.useState)(!k(t)),
                    i = (0, a.useRef)(void 0);
                if (!k(t)) {
                    let { renderer: e, ...n } = t;
                    (i.current = e), (0, E.K)(n);
                }
                return (
                    (0, a.useEffect)(() => {
                        k(t) &&
                            t().then(({ renderer: e, ...t }) => {
                                (0, E.K)(t), (i.current = e), r(!0);
                            });
                    }, []),
                    (0, o.jsx)(S.u.Provider, { value: { renderer: i.current, strict: n }, children: e })
                );
            }
            function k(e) {
                return "function" == typeof e;
            }
            let _ = (0, v.vJ)(
                [
                    "*,*::before,*::after{border:0;box-sizing:border-box;cursor:default;font-variant-numeric:tabular-nums;margin:0;outline:0;padding:0;text-rendering:optimizeLegibility;-webkit-touch-callout:none;user-select:none;}body,html{font-family:",
                    ";}body{height:100%;overflow:hidden;position:fixed;text-size-adjust:none;}html{background-color:",
                    ";background-position:center;height:-webkit-fill-available;height:-moz-available;transition:background-image 1.25s linear;}input::selection,textarea::selection{background-color:rgb(0,120,215);color:#fff;}input,textarea{cursor:text;user-select:text;}picture > img{display:block;}ol,ul{list-style:none;}",
                ],
                ({ theme: e }) => e.formats.systemFont,
                ({ theme: e }) => e.colors.background
            );
            var j = {
                defaultTheme: {
                    colors: {
                        background: "#000",
                        fileEntry: {
                            background: "hsla(207, 30%, 72%, 25%)",
                            backgroundFocused: "hsla(207, 60%, 72%, 35%)",
                            backgroundFocusedHover: "hsla(207, 90%, 72%, 30%)",
                            border: "hsla(207, 30%, 72%, 30%)",
                            borderFocused: "hsla(207, 60%, 72%, 35%)",
                            borderFocusedHover: "hsla(207, 90%, 72%, 40%)",
                            text: "#FFF",
                            textShadow: `
        0 0 1px rgba(0, 0, 0, 75%),
        0 0 2px rgba(0, 0, 0, 50%),

        0 1px 1px rgba(0, 0, 0, 75%),
        0 1px 2px rgba(0, 0, 0, 50%),

        0 2px 1px rgba(0, 0, 0, 75%),
        0 2px 2px rgba(0, 0, 0, 50%)`,
                        },
                        highlight: "hsla(207, 100%, 72%, 90%)",
                        progress: "hsla(113, 78%, 56%, 90%)",
                        progressBackground: "hsla(104, 22%, 45%, 70%)",
                        progressBarRgb: "rgb(6, 176, 37)",
                        selectionHighlight: "hsla(207, 100%, 45%, 90%)",
                        selectionHighlightBackground: "hsla(207, 100%, 45%, 30%)",
                        taskbar: {
                            active: "hsla(0, 0%, 20%, 70%)",
                            activeForeground: "hsla(0, 0%, 40%, 70%)",
                            background: "hsla(0, 0%, 10%, 70%)",
                            button: { color: "#FFF" },
                            foreground: "hsla(0, 0%, 35%, 70%)",
                            foregroundHover: "hsla(0, 0%, 45%, 70%)",
                            foregroundProgress: "hsla(104, 22%, 45%, 30%)",
                            hover: "hsla(0, 0%, 25%, 70%)",
                            peekBorder: "hsla(0, 0%, 50%, 50%)",
                        },
                        text: "rgba(255, 255, 255, 90%)",
                        titleBar: {
                            background: "rgb(0, 0, 0)",
                            backgroundHover: "rgb(26, 26, 26)",
                            backgroundInactive: "rgb(43, 43, 43)",
                            buttonInactive: "rgb(128, 128, 128)",
                            closeHover: "rgb(232, 17, 35)",
                            text: "rgb(255, 255, 255)",
                            textInactive: "rgb(170, 170, 170)",
                        },
                        window: { background: "#808080", outline: "hsla(0, 0%, 25%, 75%)", outlineInactive: "hsla(0, 0%, 30%, 100%)", shadow: "0 0 14px 0 rgba(0, 0, 0, 50%)", shadowInactive: "0 0 10px 0 rgba(0, 0, 0, 45%)" },
                    },
                    formats: { dateModified: { hour: "numeric", hour12: !0, minute: "2-digit" }, systemFont: "'Segoe UI', system-ui, Roboto, 'Helvetica Neue', sans-serif" },
                    name: "Dark",
                    sizes: {
                        calendar: { maxHeight: 357 },
                        clock: { fontSize: "12px", padding: 5 },
                        contextMenu: { subMenuOffset: 3 },
                        fileEntry: { fontSize: "12px", iconSize: "48px", maxIconTextDisplayWidth: 72, maxListTextDisplayWidth: 102, renamePadding: 5, renameWidth: 75 },
                        fileExplorer: { navBarHeight: "38px", navInputHeight: 24, statusBarHeight: "23px" },
                        fileManager: { columnGap: "1px", gridEntryHeight: "70px", gridEntryWidth: "74px", padding: "5px 0", rowGap: "28px" },
                        search: { headerHeight: 52, inputHeight: 40, maxHeight: 415, size: 600 },
                        startMenu: { maxHeight: 390, sideBar: { buttonHeight: 48, expandedWidth: "228px", iconSize: "16px", width: 48 }, size: 320 },
                        taskbar: {
                            blur: "5px",
                            button: { iconSize: "15px", width: 36 },
                            entry: { borderSize: "2px", fontSize: "12px", iconSize: "16px", maxWidth: "160px", peekControlsHeight: 36, peekImage: { height: 82, margin: 8 } },
                            panelBlur: "12px",
                        },
                        titleBar: { buttonIconWidth: "10px", buttonWidth: "45px", fontSize: "12px", height: 30, iconMarginRight: "4px", iconSize: "16px" },
                        window: { cascadeOffset: 26, outline: "1px" },
                    },
                },
            },
                I = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
                T =
                    ((r = function (e) {
                        return I.test(e) || (111 === e.charCodeAt(0) && 110 === e.charCodeAt(1) && 91 > e.charCodeAt(2));
                    }),
                        (i = Object.create(null)),
                        function (e) {
                            return void 0 === i[e] && (i[e] = r(e)), i[e];
                        });
            let P = async () => (await Promise.all([n.e(8709, "high"), n.e(7237, "high")]).then(n.bind(n, 87237))).default;
            var C = (0, a.memo)(({ children: e }) => {
                let { themeName: t } = (0, f.k)();
                return (0, o.jsx)(v.LC, { shouldForwardProp: T, children: (0, o.jsxs)(v.f6, { theme: j[t] || j[d.t0], children: [(0, o.jsx)(_, {}), (0, o.jsx)(x, { features: P, strict: !0, children: e })] }) });
            }),
                F = n(7502),
                O = n(8955),
                A = ({ Component: e, pageProps: t }) =>
                    (0, o.jsx)(v.LC, {
                        shouldForwardProp: T,
                        children: (0, o.jsx)(O.j, {
                            children: (0, o.jsx)(p.a, {
                                children: (0, o.jsx)(l.P, {
                                    children: (0, o.jsx)(f.e, { children: (0, o.jsxs)(s.S, { children: [(0, o.jsx)(w, {}), (0, o.jsx)(C, { children: (0, o.jsx)(F.K, { children: (0, o.jsx)(e, { ...t }) }) })] }) }),
                                }),
                            }),
                        }),
                    });
        },
        55665: function (e, t, n) {
            "use strict";
            var r,
                i = n(48764).Buffer,
                o = n(34155);
            (r = function () {
                return (function (e) {
                    var t = {};
                    function n(r) {
                        if (t[r]) return t[r].exports;
                        var i = (t[r] = { i: r, l: !1, exports: {} });
                        return e[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
                    }
                    return (
                        (n.m = e),
                        (n.c = t),
                        (n.d = function (e, t, r) {
                            n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
                        }),
                        (n.r = function (e) {
                            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
                        }),
                        (n.t = function (e, t) {
                            if ((1 & t && (e = n(e)), 8 & t || (4 & t && "object" == typeof e && e && e.__esModule))) return e;
                            var r = Object.create(null);
                            if ((n.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e))
                                for (var i in e)
                                    n.d(
                                        r,
                                        i,
                                        function (t) {
                                            return e[t];
                                        }.bind(null, i)
                                    );
                            return r;
                        }),
                        (n.n = function (e) {
                            var t =
                                e && e.__esModule
                                    ? function () {
                                        return e.default;
                                    }
                                    : function () {
                                        return e;
                                    };
                            return n.d(t, "a", t), t;
                        }),
                        (n.o = function (e, t) {
                            return Object.prototype.hasOwnProperty.call(e, t);
                        }),
                        (n.p = ""),
                        n((n.s = 1))
                    );
                })([
                    function (e, t) {
                        var n;
                        n = (function () {
                            return this;
                        })();
                        try {
                            n = n || Function("return this")() || (0, eval)("this");
                        } catch (e) {
                            n = window;
                        }
                        e.exports = n;
                    },
                    function (e, t, n) {
                        (function (e) {
                            var r = n(2),
                                s = n(6);
                            function a(e) {
                                var t = Object.create(null);
                                return (
                                    e &&
                                    Object.keys(e).forEach(function (n) {
                                        if ("default" !== n) {
                                            var r = Object.getOwnPropertyDescriptor(e, n);
                                            Object.defineProperty(
                                                t,
                                                n,
                                                r.get
                                                    ? r
                                                    : {
                                                        enumerable: !0,
                                                        get: function () {
                                                            return e[n];
                                                        },
                                                    }
                                            );
                                        }
                                    }),
                                    (t.default = e),
                                    Object.freeze(t)
                                );
                            }
                            var c,
                                u = a(r),
                                l = a(s);
                            ((f = c || (c = {}))[(f.EPERM = 1)] = "EPERM"),
                                (f[(f.ENOENT = 2)] = "ENOENT"),
                                (f[(f.EIO = 5)] = "EIO"),
                                (f[(f.EBADF = 9)] = "EBADF"),
                                (f[(f.EACCES = 13)] = "EACCES"),
                                (f[(f.EBUSY = 16)] = "EBUSY"),
                                (f[(f.EEXIST = 17)] = "EEXIST"),
                                (f[(f.ENOTDIR = 20)] = "ENOTDIR"),
                                (f[(f.EISDIR = 21)] = "EISDIR"),
                                (f[(f.EINVAL = 22)] = "EINVAL"),
                                (f[(f.EFBIG = 27)] = "EFBIG"),
                                (f[(f.ENOSPC = 28)] = "ENOSPC"),
                                (f[(f.EROFS = 30)] = "EROFS"),
                                (f[(f.ENOTEMPTY = 39)] = "ENOTEMPTY"),
                                (f[(f.ENOTSUP = 95)] = "ENOTSUP");
                            var p = {};
                            (p[c.EPERM] = "Operation not permitted."),
                                (p[c.ENOENT] = "No such file or directory."),
                                (p[c.EIO] = "Input/output error."),
                                (p[c.EBADF] = "Bad file descriptor."),
                                (p[c.EACCES] = "Permission denied."),
                                (p[c.EBUSY] = "Resource busy or locked."),
                                (p[c.EEXIST] = "File exists."),
                                (p[c.ENOTDIR] = "File is not a directory."),
                                (p[c.EISDIR] = "File is a directory."),
                                (p[c.EINVAL] = "Invalid argument."),
                                (p[c.EFBIG] = "File is too big."),
                                (p[c.ENOSPC] = "No space left on disk."),
                                (p[c.EROFS] = "Cannot modify a read-only file system."),
                                (p[c.ENOTEMPTY] = "Directory is not empty."),
                                (p[c.ENOTSUP] = "Operation is not supported.");
                            var f,
                                h,
                                d = (function (e) {
                                    function t(t, n, r) {
                                        void 0 === n && (n = p[t]),
                                            e.call(this, n),
                                            (this.syscall = ""),
                                            (this.errno = t),
                                            (this.code = c[t]),
                                            (this.path = r),
                                            (this.stack = new e().stack),
                                            (this.message = "Error: " + this.code + ": " + n + (this.path ? ", '" + this.path + "'" : ""));
                                    }
                                    return (
                                        e && (t.__proto__ = e),
                                        (t.prototype = Object.create(e && e.prototype)),
                                        (t.prototype.constructor = t),
                                        (t.fromJSON = function (e) {
                                            var n = new t(0);
                                            return (n.errno = e.errno), (n.code = e.code), (n.path = e.path), (n.stack = e.stack), (n.message = e.message), n;
                                        }),
                                        (t.fromBuffer = function (e, n) {
                                            return void 0 === n && (n = 0), t.fromJSON(JSON.parse(e.toString("utf8", n + 4, n + 4 + e.readUInt32LE(n))));
                                        }),
                                        (t.FileError = function (e, n) {
                                            return new t(e, p[e], n);
                                        }),
                                        (t.ENOENT = function (e) {
                                            return this.FileError(c.ENOENT, e);
                                        }),
                                        (t.EEXIST = function (e) {
                                            return this.FileError(c.EEXIST, e);
                                        }),
                                        (t.EISDIR = function (e) {
                                            return this.FileError(c.EISDIR, e);
                                        }),
                                        (t.ENOTDIR = function (e) {
                                            return this.FileError(c.ENOTDIR, e);
                                        }),
                                        (t.EPERM = function (e) {
                                            return this.FileError(c.EPERM, e);
                                        }),
                                        (t.ENOTEMPTY = function (e) {
                                            return this.FileError(c.ENOTEMPTY, e);
                                        }),
                                        (t.prototype.toString = function () {
                                            return this.message;
                                        }),
                                        (t.prototype.toJSON = function () {
                                            return { errno: this.errno, code: this.code, path: this.path, stack: this.stack, message: this.message };
                                        }),
                                        (t.prototype.writeToBuffer = function (e, t) {
                                            void 0 === e && (e = i.alloc(this.bufferSize())), void 0 === t && (t = 0);
                                            var n = e.write(JSON.stringify(this.toJSON()), t + 4);
                                            return e.writeUInt32LE(n, t), e;
                                        }),
                                        (t.prototype.bufferSize = function () {
                                            return 4 + i.byteLength(JSON.stringify(this.toJSON()));
                                        }),
                                        t
                                    );
                                })(Error),
                                m = Object.freeze({
                                    __proto__: null,
                                    ApiError: d,
                                    get ErrorCode() {
                                        return c;
                                    },
                                    ErrorStrings: p,
                                });
                            ((g = h || (h = {}))[(g.NOP = 0)] = "NOP"), (g[(g.THROW_EXCEPTION = 1)] = "THROW_EXCEPTION"), (g[(g.TRUNCATE_FILE = 2)] = "TRUNCATE_FILE"), (g[(g.CREATE_FILE = 3)] = "CREATE_FILE");
                            var g,
                                y,
                                b = function e(t) {
                                    if (((this.flagStr = t), 0 > e.validFlagStrs.indexOf(t))) throw new d(c.EINVAL, "Invalid flag: " + t);
                                };
                            (b.getFileFlag = function (e) {
                                return b.flagCache.hasOwnProperty(e) ? b.flagCache[e] : (b.flagCache[e] = new b(e));
                            }),
                                (b.prototype.getFlagString = function () {
                                    return this.flagStr;
                                }),
                                (b.prototype.isReadable = function () {
                                    return -1 !== this.flagStr.indexOf("r") || -1 !== this.flagStr.indexOf("+");
                                }),
                                (b.prototype.isWriteable = function () {
                                    return -1 !== this.flagStr.indexOf("w") || -1 !== this.flagStr.indexOf("a") || -1 !== this.flagStr.indexOf("+");
                                }),
                                (b.prototype.isTruncating = function () {
                                    return -1 !== this.flagStr.indexOf("w");
                                }),
                                (b.prototype.isAppendable = function () {
                                    return -1 !== this.flagStr.indexOf("a");
                                }),
                                (b.prototype.isSynchronous = function () {
                                    return -1 !== this.flagStr.indexOf("s");
                                }),
                                (b.prototype.isExclusive = function () {
                                    return -1 !== this.flagStr.indexOf("x");
                                }),
                                (b.prototype.pathExistsAction = function () {
                                    return this.isExclusive() ? h.THROW_EXCEPTION : this.isTruncating() ? h.TRUNCATE_FILE : h.NOP;
                                }),
                                (b.prototype.pathNotExistsAction = function () {
                                    return (this.isWriteable() || this.isAppendable()) && "r+" !== this.flagStr ? h.CREATE_FILE : h.THROW_EXCEPTION;
                                }),
                                (b.flagCache = {}),
                                (b.validFlagStrs = ["r", "r+", "rs", "rs+", "w", "wx", "w+", "wx+", "a", "ax", "a+", "ax+"]),
                                ((S = y || (y = {}))[(S.FILE = 32768)] = "FILE"),
                                (S[(S.DIRECTORY = 16384)] = "DIRECTORY"),
                                (S[(S.SYMLINK = 40960)] = "SYMLINK");
                            var w = function (e, t, n, r, i, o, s) {
                                (this.dev = 0), (this.ino = 0), (this.rdev = 0), (this.nlink = 1), (this.blksize = 4096), (this.uid = 0), (this.gid = 0), (this.fileData = null), (this.size = t);
                                var a = 0;
                                if (
                                    ("number" != typeof r && (r = a = Date.now()),
                                        "number" != typeof i && (a || (a = Date.now()), (i = a)),
                                        "number" != typeof o && (a || (a = Date.now()), (o = a)),
                                        "number" != typeof s && (a || (a = Date.now()), (s = a)),
                                        (this.atimeMs = r),
                                        (this.ctimeMs = o),
                                        (this.mtimeMs = i),
                                        (this.birthtimeMs = s),
                                        n)
                                )
                                    this.mode = n;
                                else
                                    switch (e) {
                                        case y.FILE:
                                            this.mode = 420;
                                            break;
                                        case y.DIRECTORY:
                                        default:
                                            this.mode = 511;
                                    }
                                (this.blocks = Math.ceil(t / 512)), this.mode < 4096 && (this.mode |= e);
                            },
                                v = { atime: { configurable: !0 }, mtime: { configurable: !0 }, ctime: { configurable: !0 }, birthtime: { configurable: !0 } };
                            (w.fromBuffer = function (e) {
                                var t = e.readUInt32LE(0),
                                    n = e.readUInt32LE(4);
                                return new w(61440 & n, t, 4095 & n, e.readDoubleLE(8), e.readDoubleLE(16), e.readDoubleLE(24));
                            }),
                                (w.clone = function (e) {
                                    return new w(61440 & e.mode, e.size, 4095 & e.mode, e.atimeMs, e.mtimeMs, e.ctimeMs, e.birthtimeMs);
                                }),
                                (v.atime.get = function () {
                                    return new Date(this.atimeMs);
                                }),
                                (v.mtime.get = function () {
                                    return new Date(this.mtimeMs);
                                }),
                                (v.ctime.get = function () {
                                    return new Date(this.ctimeMs);
                                }),
                                (v.birthtime.get = function () {
                                    return new Date(this.birthtimeMs);
                                }),
                                (w.prototype.toBuffer = function () {
                                    var e = i.alloc(32);
                                    return e.writeUInt32LE(this.size, 0), e.writeUInt32LE(this.mode, 4), e.writeDoubleLE(this.atime.getTime(), 8), e.writeDoubleLE(this.mtime.getTime(), 16), e.writeDoubleLE(this.ctime.getTime(), 24), e;
                                }),
                                (w.prototype.isFile = function () {
                                    return (61440 & this.mode) === y.FILE;
                                }),
                                (w.prototype.isDirectory = function () {
                                    return (61440 & this.mode) === y.DIRECTORY;
                                }),
                                (w.prototype.isSymbolicLink = function () {
                                    return (61440 & this.mode) === y.SYMLINK;
                                }),
                                (w.prototype.chmod = function (e) {
                                    this.mode = (61440 & this.mode) | e;
                                }),
                                (w.prototype.isSocket = function () {
                                    return !1;
                                }),
                                (w.prototype.isBlockDevice = function () {
                                    return !1;
                                }),
                                (w.prototype.isCharacterDevice = function () {
                                    return !1;
                                }),
                                (w.prototype.isFIFO = function () {
                                    return !1;
                                }),
                                Object.defineProperties(w.prototype, v);
                            var S,
                                E,
                                x = window;
                            if ("undefined" != typeof setImmediate) E = setImmediate;
                            else {
                                var k = [];
                                if (
                                    (function () {
                                        if (void 0 !== x.importScripts || !x.postMessage) return !1;
                                        var e = !0,
                                            t = x.onmessage;
                                        return (
                                            (x.onmessage = function () {
                                                e = !1;
                                            }),
                                            x.postMessage("", "*"),
                                            (x.onmessage = t),
                                            e
                                        );
                                    })()
                                ) {
                                    E = function (e) {
                                        k.push(e), x.postMessage("zero-timeout-message", "*");
                                    };
                                    var _ = function (e) {
                                        if (e.source === self && "zero-timeout-message" === e.data && (e.stopPropagation ? e.stopPropagation() : (e.cancelBubble = !0), k.length > 0)) return k.shift()();
                                    };
                                    x.addEventListener ? x.addEventListener("message", _, !0) : x.attachEvent("onmessage", _);
                                } else if (x.MessageChannel) {
                                    var j = new x.MessageChannel();
                                    (j.port1.onmessage = function (e) {
                                        if (k.length > 0) return k.shift()();
                                    }),
                                        (E = function (e) {
                                            k.push(e), j.port2.postMessage("");
                                        });
                                } else
                                    E = function (e) {
                                        return setTimeout(e, 0);
                                    };
                            }
                            var I = E,
                                T = function (e, t) {
                                    return e;
                                };
                            function P(e, t) {
                                if ("function" != typeof e) throw Error("Callback must be a function.");
                                var n = T(e, t);
                                switch (t) {
                                    case 1:
                                        return function (e) {
                                            I(function () {
                                                return n(e);
                                            });
                                        };
                                    case 2:
                                        return function (e, t) {
                                            I(function () {
                                                return n(e, t);
                                            });
                                        };
                                    case 3:
                                        return function (e, t, r) {
                                            I(function () {
                                                return n(e, t, r);
                                            });
                                        };
                                    default:
                                        throw Error("Invalid invocation of wrapCb.");
                                }
                            }
                            function C(e) {
                                if (e) return e;
                                throw new d(c.EIO, "Initialize BrowserFS with a file system using BrowserFS.initialize(filesystem)");
                            }
                            function F(e, t) {
                                switch (typeof e) {
                                    case "number":
                                        return e;
                                    case "string":
                                        var n = parseInt(e, 8);
                                        return isNaN(n) ? t : n;
                                    default:
                                        return t;
                                }
                            }
                            function O(e) {
                                if (e instanceof Date) return e;
                                if ("number" == typeof e) return new Date(1e3 * e);
                                throw new d(c.EINVAL, "Invalid time.");
                            }
                            function A(e) {
                                if (e.indexOf("\0") >= 0) throw new d(c.EINVAL, "Path must be a string without null bytes.");
                                if ("" === e) throw new d(c.EINVAL, "Path must not be empty.");
                                return l.resolve(e);
                            }
                            function R(e, t, n, r) {
                                switch (null === e ? "null" : typeof e) {
                                    case "object":
                                        return { encoding: void 0 !== e.encoding ? e.encoding : t, flag: void 0 !== e.flag ? e.flag : n, mode: F(e.mode, r) };
                                    case "string":
                                        return { encoding: e, flag: n, mode: r };
                                    case "null":
                                    case "undefined":
                                    case "function":
                                        return { encoding: t, flag: n, mode: r };
                                    default:
                                        throw TypeError('"options" must be a string or an object, got ' + typeof e + " instead.");
                                }
                            }
                            function N() { }
                            var B = function () {
                                (this.F_OK = 0), (this.R_OK = 4), (this.W_OK = 2), (this.X_OK = 1), (this.root = null), (this.fdMap = {}), (this.nextFd = 100);
                            };
                            (B.prototype.initialize = function (e) {
                                if (!e.constructor.isAvailable()) throw new d(c.EINVAL, "Tried to instantiate BrowserFS with an unavailable file system.");
                                return (this.root = e);
                            }),
                                (B.prototype._toUnixTimestamp = function (e) {
                                    if ("number" == typeof e) return e;
                                    if (e instanceof Date) return e.getTime() / 1e3;
                                    throw Error("Cannot parse time: " + e);
                                }),
                                (B.prototype.getRootFS = function () {
                                    return this.root ? this.root : null;
                                }),
                                (B.prototype.rename = function (e, t, n) {
                                    void 0 === n && (n = N);
                                    var r = P(n, 1);
                                    try {
                                        C(this.root).rename(A(e), A(t), r);
                                    } catch (e) {
                                        r(e);
                                    }
                                }),
                                (B.prototype.renameSync = function (e, t) {
                                    C(this.root).renameSync(A(e), A(t));
                                }),
                                (B.prototype.exists = function (e, t) {
                                    void 0 === t && (t = N);
                                    var n = P(t, 1);
                                    try {
                                        return C(this.root).exists(A(e), n);
                                    } catch (e) {
                                        return n(!1);
                                    }
                                }),
                                (B.prototype.existsSync = function (e) {
                                    try {
                                        return C(this.root).existsSync(A(e));
                                    } catch (e) {
                                        return !1;
                                    }
                                }),
                                (B.prototype.stat = function (e, t) {
                                    void 0 === t && (t = N);
                                    var n = P(t, 2);
                                    try {
                                        return C(this.root).stat(A(e), !1, n);
                                    } catch (e) {
                                        return n(e);
                                    }
                                }),
                                (B.prototype.statSync = function (e) {
                                    return C(this.root).statSync(A(e), !1);
                                }),
                                (B.prototype.lstat = function (e, t) {
                                    void 0 === t && (t = N);
                                    var n = P(t, 2);
                                    try {
                                        return C(this.root).stat(A(e), !0, n);
                                    } catch (e) {
                                        return n(e);
                                    }
                                }),
                                (B.prototype.lstatSync = function (e) {
                                    return C(this.root).statSync(A(e), !0);
                                }),
                                (B.prototype.truncate = function (e, t, n) {
                                    void 0 === t && (t = 0), void 0 === n && (n = N);
                                    var r = 0;
                                    "function" == typeof t ? (n = t) : "number" == typeof t && (r = t);
                                    var i = P(n, 1);
                                    try {
                                        if (r < 0) throw new d(c.EINVAL);
                                        return C(this.root).truncate(A(e), r, i);
                                    } catch (e) {
                                        return i(e);
                                    }
                                }),
                                (B.prototype.truncateSync = function (e, t) {
                                    if ((void 0 === t && (t = 0), t < 0)) throw new d(c.EINVAL);
                                    return C(this.root).truncateSync(A(e), t);
                                }),
                                (B.prototype.unlink = function (e, t) {
                                    void 0 === t && (t = N);
                                    var n = P(t, 1);
                                    try {
                                        return C(this.root).unlink(A(e), n);
                                    } catch (e) {
                                        return n(e);
                                    }
                                }),
                                (B.prototype.unlinkSync = function (e) {
                                    return C(this.root).unlinkSync(A(e));
                                }),
                                (B.prototype.open = function (e, t, n, r) {
                                    var i = this;
                                    void 0 === r && (r = N);
                                    var o = F(n, 420),
                                        s = P((r = "function" == typeof n ? n : r), 2);
                                    try {
                                        C(this.root).open(A(e), b.getFileFlag(t), o, function (e, t) {
                                            t ? s(e, i.getFdForFile(t)) : s(e);
                                        });
                                    } catch (e) {
                                        s(e);
                                    }
                                }),
                                (B.prototype.openSync = function (e, t, n) {
                                    return void 0 === n && (n = 420), this.getFdForFile(C(this.root).openSync(A(e), b.getFileFlag(t), F(n, 420)));
                                }),
                                (B.prototype.readFile = function (e, t, n) {
                                    void 0 === t && (t = {}), void 0 === n && (n = N);
                                    var r = R(t, null, "r", null),
                                        i = P((n = "function" == typeof t ? t : n), 2);
                                    try {
                                        var o = b.getFileFlag(r.flag);
                                        return o.isReadable() ? C(this.root).readFile(A(e), r.encoding, o, i) : i(new d(c.EINVAL, "Flag passed to readFile must allow for reading."));
                                    } catch (e) {
                                        return i(e);
                                    }
                                }),
                                (B.prototype.readFileSync = function (e, t) {
                                    void 0 === t && (t = {});
                                    var n = R(t, null, "r", null),
                                        r = b.getFileFlag(n.flag);
                                    if (!r.isReadable()) throw new d(c.EINVAL, "Flag passed to readFile must allow for reading.");
                                    return C(this.root).readFileSync(A(e), n.encoding, r);
                                }),
                                (B.prototype.writeFile = function (e, t, n, r) {
                                    void 0 === n && (n = {}), void 0 === r && (r = N);
                                    var i = R(n, "utf8", "w", 420),
                                        o = P((r = "function" == typeof n ? n : r), 1);
                                    try {
                                        var s = b.getFileFlag(i.flag);
                                        return s.isWriteable() ? C(this.root).writeFile(A(e), t, i.encoding, s, i.mode, o) : o(new d(c.EINVAL, "Flag passed to writeFile must allow for writing."));
                                    } catch (e) {
                                        return o(e);
                                    }
                                }),
                                (B.prototype.writeFileSync = function (e, t, n) {
                                    var r = R(n, "utf8", "w", 420),
                                        i = b.getFileFlag(r.flag);
                                    if (!i.isWriteable()) throw new d(c.EINVAL, "Flag passed to writeFile must allow for writing.");
                                    return C(this.root).writeFileSync(A(e), t, r.encoding, i, r.mode);
                                }),
                                (B.prototype.appendFile = function (e, t, n, r) {
                                    void 0 === r && (r = N);
                                    var i = R(n, "utf8", "a", 420),
                                        o = P((r = "function" == typeof n ? n : r), 1);
                                    try {
                                        var s = b.getFileFlag(i.flag);
                                        if (!s.isAppendable()) return o(new d(c.EINVAL, "Flag passed to appendFile must allow for appending."));
                                        C(this.root).appendFile(A(e), t, i.encoding, s, i.mode, o);
                                    } catch (e) {
                                        o(e);
                                    }
                                }),
                                (B.prototype.appendFileSync = function (e, t, n) {
                                    var r = R(n, "utf8", "a", 420),
                                        i = b.getFileFlag(r.flag);
                                    if (!i.isAppendable()) throw new d(c.EINVAL, "Flag passed to appendFile must allow for appending.");
                                    return C(this.root).appendFileSync(A(e), t, r.encoding, i, r.mode);
                                }),
                                (B.prototype.fstat = function (e, t) {
                                    void 0 === t && (t = N);
                                    var n = P(t, 2);
                                    try {
                                        this.fd2file(e).stat(n);
                                    } catch (e) {
                                        n(e);
                                    }
                                }),
                                (B.prototype.fstatSync = function (e) {
                                    return this.fd2file(e).statSync();
                                }),
                                (B.prototype.close = function (e, t) {
                                    var n = this;
                                    void 0 === t && (t = N);
                                    var r = P(t, 1);
                                    try {
                                        this.fd2file(e).close(function (t) {
                                            t || n.closeFd(e), r(t);
                                        });
                                    } catch (e) {
                                        r(e);
                                    }
                                }),
                                (B.prototype.closeSync = function (e) {
                                    this.fd2file(e).closeSync(), this.closeFd(e);
                                }),
                                (B.prototype.ftruncate = function (e, t, n) {
                                    void 0 === n && (n = N);
                                    var r = "number" == typeof t ? t : 0,
                                        i = P((n = "function" == typeof t ? t : n), 1);
                                    try {
                                        var o = this.fd2file(e);
                                        if (r < 0) throw new d(c.EINVAL);
                                        o.truncate(r, i);
                                    } catch (e) {
                                        i(e);
                                    }
                                }),
                                (B.prototype.ftruncateSync = function (e, t) {
                                    void 0 === t && (t = 0);
                                    var n = this.fd2file(e);
                                    if (t < 0) throw new d(c.EINVAL);
                                    n.truncateSync(t);
                                }),
                                (B.prototype.fsync = function (e, t) {
                                    void 0 === t && (t = N);
                                    var n = P(t, 1);
                                    try {
                                        this.fd2file(e).sync(n);
                                    } catch (e) {
                                        n(e);
                                    }
                                }),
                                (B.prototype.fsyncSync = function (e) {
                                    this.fd2file(e).syncSync();
                                }),
                                (B.prototype.fdatasync = function (e, t) {
                                    void 0 === t && (t = N);
                                    var n = P(t, 1);
                                    try {
                                        this.fd2file(e).datasync(n);
                                    } catch (e) {
                                        n(e);
                                    }
                                }),
                                (B.prototype.fdatasyncSync = function (e) {
                                    this.fd2file(e).datasyncSync();
                                }),
                                (B.prototype.write = function (e, t, n, r, o, s) {
                                    void 0 === s && (s = N);
                                    var a,
                                        u,
                                        l,
                                        p = null;
                                    if ("string" == typeof t) {
                                        var f = "utf8";
                                        switch (typeof n) {
                                            case "function":
                                                s = n;
                                                break;
                                            case "number":
                                                (p = n), (f = "string" == typeof r ? r : "utf8"), (s = "function" == typeof o ? o : s);
                                                break;
                                            default:
                                                return (s = "function" == typeof r ? r : "function" == typeof o ? o : s)(new d(c.EINVAL, "Invalid arguments."));
                                        }
                                        (u = 0), (l = (a = i.from(t, f)).length);
                                    } else (a = t), (u = n), (l = r), (p = "number" == typeof o ? o : null), (s = "function" == typeof o ? o : s);
                                    var h = P(s, 3);
                                    try {
                                        var m = this.fd2file(e);
                                        null != p || (p = m.getPos()), m.write(a, u, l, p, h);
                                    } catch (e) {
                                        h(e);
                                    }
                                }),
                                (B.prototype.writeSync = function (e, t, n, r, o) {
                                    var s,
                                        a,
                                        c,
                                        u = 0;
                                    "string" == typeof t
                                        ? ((c = "number" == typeof n ? n : null), (u = 0), (a = (s = i.from(t, "string" == typeof r ? r : "utf8")).length))
                                        : ((s = t), (u = n), (a = r), (c = "number" == typeof o ? o : null));
                                    var l = this.fd2file(e);
                                    return null != c || (c = l.getPos()), l.writeSync(s, u, a, c);
                                }),
                                (B.prototype.read = function (e, t, n, r, o, s) {
                                    var a, c, u, l, p;
                                    (void 0 === s && (s = N), "number" == typeof t)
                                        ? ((u = t),
                                            (a = n),
                                            (s = "function" == typeof o ? o : s),
                                            (c = 0),
                                            (l = i.alloc(u)),
                                            (p = P(function (e, t, n) {
                                                if (e) return s(e);
                                                s(e, n.toString(r), t);
                                            }, 3)))
                                        : ((l = t), (c = n), (u = r), (a = o), (p = P(s, 3)));
                                    try {
                                        var f = this.fd2file(e);
                                        null != a || (a = f.getPos()), f.read(l, c, u, a, p);
                                    } catch (e) {
                                        p(e);
                                    }
                                }),
                                (B.prototype.readSync = function (e, t, n, r, o) {
                                    var s,
                                        a,
                                        c,
                                        u,
                                        l = !1,
                                        p = "utf8";
                                    "number" == typeof t ? ((c = t), (u = n), (p = r), (a = 0), (s = i.alloc(c)), (l = !0)) : ((s = t), (a = n), (c = r), (u = o));
                                    var f = this.fd2file(e);
                                    null != u || (u = f.getPos());
                                    var h = f.readSync(s, a, c, u);
                                    return l ? [s.toString(p), h] : h;
                                }),
                                (B.prototype.fchown = function (e, t, n, r) {
                                    void 0 === r && (r = N);
                                    var i = P(r, 1);
                                    try {
                                        this.fd2file(e).chown(t, n, i);
                                    } catch (e) {
                                        i(e);
                                    }
                                }),
                                (B.prototype.fchownSync = function (e, t, n) {
                                    this.fd2file(e).chownSync(t, n);
                                }),
                                (B.prototype.fchmod = function (e, t, n) {
                                    var r = P(n, 1);
                                    try {
                                        var i = "string" == typeof t ? parseInt(t, 8) : t;
                                        this.fd2file(e).chmod(i, r);
                                    } catch (e) {
                                        r(e);
                                    }
                                }),
                                (B.prototype.fchmodSync = function (e, t) {
                                    var n = "string" == typeof t ? parseInt(t, 8) : t;
                                    this.fd2file(e).chmodSync(n);
                                }),
                                (B.prototype.futimes = function (e, t, n, r) {
                                    void 0 === r && (r = N);
                                    var i = P(r, 1);
                                    try {
                                        var o = this.fd2file(e);
                                        "number" == typeof t && (t = new Date(1e3 * t)), "number" == typeof n && (n = new Date(1e3 * n)), o.utimes(t, n, i);
                                    } catch (e) {
                                        i(e);
                                    }
                                }),
                                (B.prototype.futimesSync = function (e, t, n) {
                                    this.fd2file(e).utimesSync(O(t), O(n));
                                }),
                                (B.prototype.rmdir = function (e, t) {
                                    void 0 === t && (t = N);
                                    var n = P(t, 1);
                                    try {
                                        (e = A(e)), C(this.root).rmdir(e, n);
                                    } catch (e) {
                                        n(e);
                                    }
                                }),
                                (B.prototype.rmdirSync = function (e) {
                                    return (e = A(e)), C(this.root).rmdirSync(e);
                                }),
                                (B.prototype.mkdir = function (e, t, n) {
                                    void 0 === n && (n = N), "function" == typeof t && ((n = t), (t = 511));
                                    var r = P(n, 1);
                                    try {
                                        (e = A(e)), C(this.root).mkdir(e, t, r);
                                    } catch (e) {
                                        r(e);
                                    }
                                }),
                                (B.prototype.mkdirSync = function (e, t) {
                                    C(this.root).mkdirSync(A(e), F(t, 511));
                                }),
                                (B.prototype.readdir = function (e, t) {
                                    void 0 === t && (t = N);
                                    var n = P(t, 2);
                                    try {
                                        (e = A(e)), C(this.root).readdir(e, n);
                                    } catch (e) {
                                        n(e);
                                    }
                                }),
                                (B.prototype.readdirSync = function (e) {
                                    return (e = A(e)), C(this.root).readdirSync(e);
                                }),
                                (B.prototype.link = function (e, t, n) {
                                    void 0 === n && (n = N);
                                    var r = P(n, 1);
                                    try {
                                        (e = A(e)), (t = A(t)), C(this.root).link(e, t, r);
                                    } catch (e) {
                                        r(e);
                                    }
                                }),
                                (B.prototype.linkSync = function (e, t) {
                                    return (e = A(e)), (t = A(t)), C(this.root).linkSync(e, t);
                                }),
                                (B.prototype.symlink = function (e, t, n, r) {
                                    void 0 === r && (r = N);
                                    var i = "string" == typeof n ? n : "file",
                                        o = P((r = "function" == typeof n ? n : r), 1);
                                    try {
                                        if ("file" !== i && "dir" !== i) return o(new d(c.EINVAL, "Invalid type: " + i));
                                        (e = A(e)), (t = A(t)), C(this.root).symlink(e, t, i, o);
                                    } catch (e) {
                                        o(e);
                                    }
                                }),
                                (B.prototype.symlinkSync = function (e, t, n) {
                                    if (n) {
                                        if ("file" !== n && "dir" !== n) throw new d(c.EINVAL, "Invalid type: " + n);
                                    } else n = "file";
                                    return (e = A(e)), (t = A(t)), C(this.root).symlinkSync(e, t, n);
                                }),
                                (B.prototype.readlink = function (e, t) {
                                    void 0 === t && (t = N);
                                    var n = P(t, 2);
                                    try {
                                        (e = A(e)), C(this.root).readlink(e, n);
                                    } catch (e) {
                                        n(e);
                                    }
                                }),
                                (B.prototype.readlinkSync = function (e) {
                                    return (e = A(e)), C(this.root).readlinkSync(e);
                                }),
                                (B.prototype.chown = function (e, t, n, r) {
                                    void 0 === r && (r = N);
                                    var i = P(r, 1);
                                    try {
                                        (e = A(e)), C(this.root).chown(e, !1, t, n, i);
                                    } catch (e) {
                                        i(e);
                                    }
                                }),
                                (B.prototype.chownSync = function (e, t, n) {
                                    (e = A(e)), C(this.root).chownSync(e, !1, t, n);
                                }),
                                (B.prototype.lchown = function (e, t, n, r) {
                                    void 0 === r && (r = N);
                                    var i = P(r, 1);
                                    try {
                                        (e = A(e)), C(this.root).chown(e, !0, t, n, i);
                                    } catch (e) {
                                        i(e);
                                    }
                                }),
                                (B.prototype.lchownSync = function (e, t, n) {
                                    (e = A(e)), C(this.root).chownSync(e, !0, t, n);
                                }),
                                (B.prototype.chmod = function (e, t, n) {
                                    void 0 === n && (n = N);
                                    var r = P(n, 1);
                                    try {
                                        var i = F(t, -1);
                                        if (i < 0) throw new d(c.EINVAL, "Invalid mode.");
                                        C(this.root).chmod(A(e), !1, i, r);
                                    } catch (e) {
                                        r(e);
                                    }
                                }),
                                (B.prototype.chmodSync = function (e, t) {
                                    var n = F(t, -1);
                                    if (n < 0) throw new d(c.EINVAL, "Invalid mode.");
                                    (e = A(e)), C(this.root).chmodSync(e, !1, n);
                                }),
                                (B.prototype.lchmod = function (e, t, n) {
                                    void 0 === n && (n = N);
                                    var r = P(n, 1);
                                    try {
                                        var i = F(t, -1);
                                        if (i < 0) throw new d(c.EINVAL, "Invalid mode.");
                                        C(this.root).chmod(A(e), !0, i, r);
                                    } catch (e) {
                                        r(e);
                                    }
                                }),
                                (B.prototype.lchmodSync = function (e, t) {
                                    var n = F(t, -1);
                                    if (n < 1) throw new d(c.EINVAL, "Invalid mode.");
                                    C(this.root).chmodSync(A(e), !0, n);
                                }),
                                (B.prototype.utimes = function (e, t, n, r) {
                                    void 0 === r && (r = N);
                                    var i = P(r, 1);
                                    try {
                                        C(this.root).utimes(A(e), O(t), O(n), i);
                                    } catch (e) {
                                        i(e);
                                    }
                                }),
                                (B.prototype.utimesSync = function (e, t, n) {
                                    C(this.root).utimesSync(A(e), O(t), O(n));
                                }),
                                (B.prototype.realpath = function (e, t, n) {
                                    void 0 === n && (n = N);
                                    var r = P((n = "function" == typeof t ? t : N), 2);
                                    try {
                                        (e = A(e)), C(this.root).realpath(e, "object" == typeof t ? t : {}, r);
                                    } catch (e) {
                                        r(e);
                                    }
                                }),
                                (B.prototype.realpathSync = function (e, t) {
                                    return void 0 === t && (t = {}), (e = A(e)), C(this.root).realpathSync(e, t);
                                }),
                                (B.prototype.watchFile = function (e, t, n) {
                                    throw new d(c.ENOTSUP);
                                }),
                                (B.prototype.unwatchFile = function (e, t) {
                                    throw new d(c.ENOTSUP);
                                }),
                                (B.prototype.watch = function (e, t, n) {
                                    throw new d(c.ENOTSUP);
                                }),
                                (B.prototype.access = function (e, t, n) {
                                    throw new d(c.ENOTSUP);
                                }),
                                (B.prototype.accessSync = function (e, t) {
                                    throw new d(c.ENOTSUP);
                                }),
                                (B.prototype.createReadStream = function (e, t) {
                                    throw new d(c.ENOTSUP);
                                }),
                                (B.prototype.createWriteStream = function (e, t) {
                                    throw new d(c.ENOTSUP);
                                }),
                                (B.prototype.wrapCallbacks = function (e) {
                                    T = e;
                                }),
                                (B.prototype.getFdForFile = function (e) {
                                    var t = this.nextFd++;
                                    return (this.fdMap[t] = e), t;
                                }),
                                (B.prototype.fd2file = function (e) {
                                    var t = this.fdMap[e];
                                    if (t) return t;
                                    throw new d(c.EBADF, "Invalid file descriptor.");
                                }),
                                (B.prototype.closeFd = function (e) {
                                    delete this.fdMap[e];
                                }),
                                (B.Stats = w);
                            var L = new B(),
                                D = {};
                            function U() {
                                throw Error("BFS has reached an impossible code path; please file a bug.");
                            }
                            function M(e, t, n) {
                                n.existsSync(e) || (M(l.dirname(e), t, n), n.mkdirSync(e, t));
                            }
                            function z(e) {
                                var t = V(e),
                                    n = t.byteOffset,
                                    r = t.byteLength;
                                return 0 === n && r === t.buffer.byteLength ? t.buffer : t.buffer.slice(n, n + r);
                            }
                            function V(e) {
                                return e instanceof Uint8Array ? e : new Uint8Array(e);
                            }
                            function $(e) {
                                return e instanceof i ? e : 0 === e.byteOffset && e.byteLength === e.buffer.byteLength ? W(e.buffer) : i.from(e.buffer, e.byteOffset, e.byteLength);
                            }
                            function W(e) {
                                return i.from(e);
                            }
                            function H(e, t, n) {
                                if ((void 0 === t && (t = 0), void 0 === n && (n = e.length), t < 0 || n < 0 || n > e.length || t > n)) throw TypeError("Invalid slice bounds on buffer of length " + e.length + ": [" + t + ", " + n + "]");
                                if (0 === e.length) return q();
                                var r = V(e),
                                    i = e[0],
                                    o = (i + 1) % 255;
                                return (e[0] = o), r[0] === o ? ((r[0] = i), $(r.slice(t, n))) : ((e[0] = i), $(r.subarray(t, n)));
                            }
                            Object.keys(B.prototype).forEach(function (e) {
                                "function" == typeof L[e]
                                    ? (D[e] = function () {
                                        return L[e].apply(L, arguments);
                                    })
                                    : (D[e] = L[e]);
                            }),
                                (D.changeFSModule = function (e) {
                                    L = e;
                                }),
                                (D.getFSModule = function () {
                                    return L;
                                }),
                                (D.FS = B),
                                (D.Stats = B.Stats);
                            var G = null;
                            function q() {
                                return G || (G = i.alloc(0));
                            }
                            var Y = Object.freeze({
                                __proto__: null,
                                arrayBuffer2Buffer: W,
                                arrayish2Buffer: function (e) {
                                    return e instanceof i ? e : e instanceof Uint8Array ? $(e) : i.from(e);
                                },
                                buffer2ArrayBuffer: z,
                                buffer2Uint8array: V,
                                bufferValidator: function (e, t) {
                                    i.isBuffer(e) ? t() : t(new d(c.EINVAL, "option must be a Buffer."));
                                },
                                copyingSlice: H,
                                deprecationMessage: function (e, t, n) {
                                    e &&
                                        console.warn(
                                            "[" +
                                            t +
                                            "] Direct file system constructor usage is deprecated for this file system, and will be removed in the next major version. Please use the '" +
                                            t +
                                            ".Create(" +
                                            JSON.stringify(n) +
                                            ", callback)' method instead. See https://github.com/jvilk/BrowserFS/issues/176 for more details."
                                        );
                                },
                                emptyBuffer: q,
                                fail: U,
                                mkdirpSync: M,
                                uint8Array2Buffer: $,
                            }),
                                K = function () { };
                            (K.prototype.supportsLinks = function () {
                                return !1;
                            }),
                                (K.prototype.diskSpace = function (e, t) {
                                    t(0, 0);
                                }),
                                (K.prototype.openFile = function (e, t, n) {
                                    throw new d(c.ENOTSUP);
                                }),
                                (K.prototype.createFile = function (e, t, n, r) {
                                    throw new d(c.ENOTSUP);
                                }),
                                (K.prototype.open = function (e, t, n, r) {
                                    var i = this;
                                    this.stat(e, !1, function (o, s) {
                                        if (o)
                                            switch (t.pathNotExistsAction()) {
                                                case h.CREATE_FILE:
                                                    return i.stat(l.dirname(e), !1, function (o, s) {
                                                        o ? r(o) : s && !s.isDirectory() ? r(d.ENOTDIR(l.dirname(e))) : i.createFile(e, t, n, r);
                                                    });
                                                case h.THROW_EXCEPTION:
                                                    return r(d.ENOENT(e));
                                                default:
                                                    return r(new d(c.EINVAL, "Invalid FileFlag object."));
                                            }
                                        else {
                                            if (s && s.isDirectory()) return r(d.EISDIR(e));
                                            switch (t.pathExistsAction()) {
                                                case h.THROW_EXCEPTION:
                                                    return r(d.EEXIST(e));
                                                case h.TRUNCATE_FILE:
                                                    return i.openFile(e, t, function (e, t) {
                                                        e
                                                            ? r(e)
                                                            : t
                                                                ? t.truncate(0, function () {
                                                                    t.sync(function () {
                                                                        r(null, t);
                                                                    });
                                                                })
                                                                : U();
                                                    });
                                                case h.NOP:
                                                    return i.openFile(e, t, r);
                                                default:
                                                    return r(new d(c.EINVAL, "Invalid FileFlag object."));
                                            }
                                        }
                                    });
                                }),
                                (K.prototype.rename = function (e, t, n) {
                                    n(new d(c.ENOTSUP));
                                }),
                                (K.prototype.renameSync = function (e, t) {
                                    throw new d(c.ENOTSUP);
                                }),
                                (K.prototype.stat = function (e, t, n) {
                                    n(new d(c.ENOTSUP));
                                }),
                                (K.prototype.statSync = function (e, t) {
                                    throw new d(c.ENOTSUP);
                                }),
                                (K.prototype.openFileSync = function (e, t, n) {
                                    throw new d(c.ENOTSUP);
                                }),
                                (K.prototype.createFileSync = function (e, t, n) {
                                    throw new d(c.ENOTSUP);
                                }),
                                (K.prototype.openSync = function (e, t, n) {
                                    var r;
                                    try {
                                        r = this.statSync(e, !1);
                                    } catch (r) {
                                        switch (t.pathNotExistsAction()) {
                                            case h.CREATE_FILE:
                                                if (!this.statSync(l.dirname(e), !1).isDirectory()) throw d.ENOTDIR(l.dirname(e));
                                                return this.createFileSync(e, t, n);
                                            case h.THROW_EXCEPTION:
                                                throw d.ENOENT(e);
                                            default:
                                                throw new d(c.EINVAL, "Invalid FileFlag object.");
                                        }
                                    }
                                    if (r.isDirectory()) throw d.EISDIR(e);
                                    switch (t.pathExistsAction()) {
                                        case h.THROW_EXCEPTION:
                                            throw d.EEXIST(e);
                                        case h.TRUNCATE_FILE:
                                            return this.unlinkSync(e), this.createFileSync(e, t, r.mode);
                                        case h.NOP:
                                            return this.openFileSync(e, t, n);
                                        default:
                                            throw new d(c.EINVAL, "Invalid FileFlag object.");
                                    }
                                }),
                                (K.prototype.unlink = function (e, t) {
                                    t(new d(c.ENOTSUP));
                                }),
                                (K.prototype.unlinkSync = function (e) {
                                    throw new d(c.ENOTSUP);
                                }),
                                (K.prototype.rmdir = function (e, t) {
                                    t(new d(c.ENOTSUP));
                                }),
                                (K.prototype.rmdirSync = function (e) {
                                    throw new d(c.ENOTSUP);
                                }),
                                (K.prototype.mkdir = function (e, t, n) {
                                    n(new d(c.ENOTSUP));
                                }),
                                (K.prototype.mkdirSync = function (e, t) {
                                    throw new d(c.ENOTSUP);
                                }),
                                (K.prototype.readdir = function (e, t) {
                                    t(new d(c.ENOTSUP));
                                }),
                                (K.prototype.readdirSync = function (e) {
                                    throw new d(c.ENOTSUP);
                                }),
                                (K.prototype.exists = function (e, t) {
                                    this.stat(e, null, function (e) {
                                        t(!e);
                                    });
                                }),
                                (K.prototype.existsSync = function (e) {
                                    try {
                                        return this.statSync(e, !0), !0;
                                    } catch (e) {
                                        return !1;
                                    }
                                }),
                                (K.prototype.realpath = function (e, t, n) {
                                    if (this.supportsLinks())
                                        for (var r = e.split(l.sep), i = 0; i < r.length; i++) {
                                            var o = r.slice(0, i + 1);
                                            r[i] = l.join.apply(null, o);
                                        }
                                    else
                                        this.exists(e, function (t) {
                                            t ? n(null, e) : n(d.ENOENT(e));
                                        });
                                }),
                                (K.prototype.realpathSync = function (e, t) {
                                    if (this.supportsLinks()) {
                                        for (var n = e.split(l.sep), r = 0; r < n.length; r++) {
                                            var i = n.slice(0, r + 1);
                                            n[r] = l.join.apply(l, i);
                                        }
                                        return n.join(l.sep);
                                    }
                                    if (this.existsSync(e)) return e;
                                    throw d.ENOENT(e);
                                }),
                                (K.prototype.truncate = function (e, t, n) {
                                    this.open(e, b.getFileFlag("r+"), 420, function (e, r) {
                                        if (e) return n(e);
                                        r.truncate(t, function (e) {
                                            r.close(function (t) {
                                                n(e || t);
                                            });
                                        });
                                    });
                                }),
                                (K.prototype.truncateSync = function (e, t) {
                                    var n = this.openSync(e, b.getFileFlag("r+"), 420);
                                    try {
                                        n.truncateSync(t);
                                    } catch (e) {
                                        throw e;
                                    } finally {
                                        n.closeSync();
                                    }
                                }),
                                (K.prototype.readFile = function (e, t, n, r) {
                                    var o = r;
                                    this.open(e, n, 420, function (e, n) {
                                        if (e) return r(e);
                                        (r = function (e, t) {
                                            n.close(function (n) {
                                                return e || (e = n), o(e, t);
                                            });
                                        }),
                                            n.stat(function (e, o) {
                                                if (e) return r(e);
                                                var s = i.alloc(o.size);
                                                n.read(s, 0, o.size, 0, function (e) {
                                                    if (e) return r(e);
                                                    if (null === t) return r(e, s);
                                                    try {
                                                        r(null, s.toString(t));
                                                    } catch (e) {
                                                        r(e);
                                                    }
                                                });
                                            });
                                    });
                                }),
                                (K.prototype.readFileSync = function (e, t, n) {
                                    var r = this.openSync(e, n, 420);
                                    try {
                                        var o = r.statSync(),
                                            s = i.alloc(o.size);
                                        return r.readSync(s, 0, o.size, 0), r.closeSync(), null === t ? s : s.toString(t);
                                    } finally {
                                        r.closeSync();
                                    }
                                }),
                                (K.prototype.writeFile = function (e, t, n, r, o, s) {
                                    var a = s;
                                    this.open(e, r, 420, function (e, r) {
                                        if (e) return s(e);
                                        s = function (e) {
                                            r.close(function (t) {
                                                a(e || t);
                                            });
                                        };
                                        try {
                                            "string" == typeof t && (t = i.from(t, n));
                                        } catch (e) {
                                            return s(e);
                                        }
                                        r.write(t, 0, t.length, 0, s);
                                    });
                                }),
                                (K.prototype.writeFileSync = function (e, t, n, r, o) {
                                    var s = this.openSync(e, r, o);
                                    try {
                                        "string" == typeof t && (t = i.from(t, n)), s.writeSync(t, 0, t.length, 0);
                                    } finally {
                                        s.closeSync();
                                    }
                                }),
                                (K.prototype.appendFile = function (e, t, n, r, o, s) {
                                    var a = s;
                                    this.open(e, r, o, function (e, r) {
                                        if (e) return s(e);
                                        (s = function (e) {
                                            r.close(function (t) {
                                                a(e || t);
                                            });
                                        }),
                                            "string" == typeof t && (t = i.from(t, n)),
                                            r.write(t, 0, t.length, null, s);
                                    });
                                }),
                                (K.prototype.appendFileSync = function (e, t, n, r, o) {
                                    var s = this.openSync(e, r, o);
                                    try {
                                        "string" == typeof t && (t = i.from(t, n)), s.writeSync(t, 0, t.length, null);
                                    } finally {
                                        s.closeSync();
                                    }
                                }),
                                (K.prototype.chmod = function (e, t, n, r) {
                                    r(new d(c.ENOTSUP));
                                }),
                                (K.prototype.chmodSync = function (e, t, n) {
                                    throw new d(c.ENOTSUP);
                                }),
                                (K.prototype.chown = function (e, t, n, r, i) {
                                    i(new d(c.ENOTSUP));
                                }),
                                (K.prototype.chownSync = function (e, t, n, r) {
                                    throw new d(c.ENOTSUP);
                                }),
                                (K.prototype.utimes = function (e, t, n, r) {
                                    r(new d(c.ENOTSUP));
                                }),
                                (K.prototype.utimesSync = function (e, t, n) {
                                    throw new d(c.ENOTSUP);
                                }),
                                (K.prototype.link = function (e, t, n) {
                                    n(new d(c.ENOTSUP));
                                }),
                                (K.prototype.linkSync = function (e, t) {
                                    throw new d(c.ENOTSUP);
                                }),
                                (K.prototype.symlink = function (e, t, n, r) {
                                    r(new d(c.ENOTSUP));
                                }),
                                (K.prototype.symlinkSync = function (e, t, n) {
                                    throw new d(c.ENOTSUP);
                                }),
                                (K.prototype.readlink = function (e, t) {
                                    t(new d(c.ENOTSUP));
                                }),
                                (K.prototype.readlinkSync = function (e) {
                                    throw new d(c.ENOTSUP);
                                });
                            var J = (function (e) {
                                function t() {
                                    e.apply(this, arguments);
                                }
                                return (
                                    e && (t.__proto__ = e),
                                    (t.prototype = Object.create(e && e.prototype)),
                                    (t.prototype.constructor = t),
                                    (t.prototype.supportsSynch = function () {
                                        return !0;
                                    }),
                                    (t.prototype.rename = function (e, t, n) {
                                        try {
                                            this.renameSync(e, t), n();
                                        } catch (e) {
                                            n(e);
                                        }
                                    }),
                                    (t.prototype.stat = function (e, t, n) {
                                        try {
                                            n(null, this.statSync(e, t));
                                        } catch (e) {
                                            n(e);
                                        }
                                    }),
                                    (t.prototype.open = function (e, t, n, r) {
                                        try {
                                            r(null, this.openSync(e, t, n));
                                        } catch (e) {
                                            r(e);
                                        }
                                    }),
                                    (t.prototype.unlink = function (e, t) {
                                        try {
                                            this.unlinkSync(e), t();
                                        } catch (e) {
                                            t(e);
                                        }
                                    }),
                                    (t.prototype.rmdir = function (e, t) {
                                        try {
                                            this.rmdirSync(e), t();
                                        } catch (e) {
                                            t(e);
                                        }
                                    }),
                                    (t.prototype.mkdir = function (e, t, n) {
                                        try {
                                            this.mkdirSync(e, t), n();
                                        } catch (e) {
                                            n(e);
                                        }
                                    }),
                                    (t.prototype.readdir = function (e, t) {
                                        try {
                                            t(null, this.readdirSync(e));
                                        } catch (e) {
                                            t(e);
                                        }
                                    }),
                                    (t.prototype.chmod = function (e, t, n, r) {
                                        try {
                                            this.chmodSync(e, t, n), r();
                                        } catch (e) {
                                            r(e);
                                        }
                                    }),
                                    (t.prototype.chown = function (e, t, n, r, i) {
                                        try {
                                            this.chownSync(e, t, n, r), i();
                                        } catch (e) {
                                            i(e);
                                        }
                                    }),
                                    (t.prototype.utimes = function (e, t, n, r) {
                                        try {
                                            this.utimesSync(e, t, n), r();
                                        } catch (e) {
                                            r(e);
                                        }
                                    }),
                                    (t.prototype.link = function (e, t, n) {
                                        try {
                                            this.linkSync(e, t), n();
                                        } catch (e) {
                                            n(e);
                                        }
                                    }),
                                    (t.prototype.symlink = function (e, t, n, r) {
                                        try {
                                            this.symlinkSync(e, t, n), r();
                                        } catch (e) {
                                            r(e);
                                        }
                                    }),
                                    (t.prototype.readlink = function (e, t) {
                                        try {
                                            t(null, this.readlinkSync(e));
                                        } catch (e) {
                                            t(e);
                                        }
                                    }),
                                    t
                                );
                            })(K),
                                X = function (e, t, n, r, i, o) {
                                    (this.id = e), (this.size = t), (this.mode = n), (this.atime = r), (this.mtime = i), (this.ctime = o);
                                };
                            (X.fromBuffer = function (e) {
                                if (void 0 === e) throw Error("NO");
                                return new X(e.toString("ascii", 30), e.readUInt32LE(0), e.readUInt16LE(4), e.readDoubleLE(6), e.readDoubleLE(14), e.readDoubleLE(22));
                            }),
                                (X.prototype.toStats = function () {
                                    return new w((61440 & this.mode) === y.DIRECTORY ? y.DIRECTORY : y.FILE, this.size, this.mode, this.atime, this.mtime, this.ctime);
                                }),
                                (X.prototype.getSize = function () {
                                    return 30 + this.id.length;
                                }),
                                (X.prototype.toBuffer = function (e) {
                                    return (
                                        void 0 === e && (e = i.alloc(this.getSize())),
                                        e.writeUInt32LE(this.size, 0),
                                        e.writeUInt16LE(this.mode, 4),
                                        e.writeDoubleLE(this.atime, 6),
                                        e.writeDoubleLE(this.mtime, 14),
                                        e.writeDoubleLE(this.ctime, 22),
                                        e.write(this.id, 30, this.id.length, "ascii"),
                                        e
                                    );
                                }),
                                (X.prototype.update = function (e) {
                                    var t = !1;
                                    this.size !== e.size && ((this.size = e.size), (t = !0)), this.mode !== e.mode && ((this.mode = e.mode), (t = !0));
                                    var n = e.atime.getTime();
                                    this.atime !== n && ((this.atime = n), (t = !0));
                                    var r = e.mtime.getTime();
                                    this.mtime !== r && ((this.mtime = r), (t = !0));
                                    var i = e.ctime.getTime();
                                    return this.ctime !== i && ((this.ctime = i), (t = !0)), t;
                                }),
                                (X.prototype.isFile = function () {
                                    return (61440 & this.mode) === y.FILE;
                                }),
                                (X.prototype.isDirectory = function () {
                                    return (61440 & this.mode) === y.DIRECTORY;
                                });
                            var Z = function () { };
                            (Z.prototype.sync = function (e) {
                                e(new d(c.ENOTSUP));
                            }),
                                (Z.prototype.syncSync = function () {
                                    throw new d(c.ENOTSUP);
                                }),
                                (Z.prototype.datasync = function (e) {
                                    this.sync(e);
                                }),
                                (Z.prototype.datasyncSync = function () {
                                    return this.syncSync();
                                }),
                                (Z.prototype.chown = function (e, t, n) {
                                    n(new d(c.ENOTSUP));
                                }),
                                (Z.prototype.chownSync = function (e, t) {
                                    throw new d(c.ENOTSUP);
                                }),
                                (Z.prototype.chmod = function (e, t) {
                                    t(new d(c.ENOTSUP));
                                }),
                                (Z.prototype.chmodSync = function (e) {
                                    throw new d(c.ENOTSUP);
                                }),
                                (Z.prototype.utimes = function (e, t, n) {
                                    n(new d(c.ENOTSUP));
                                }),
                                (Z.prototype.utimesSync = function (e, t) {
                                    throw new d(c.ENOTSUP);
                                });
                            var Q = (function (e) {
                                function t(t, n, r, i, o) {
                                    if (
                                        (e.call(this),
                                            (this._pos = 0),
                                            (this._dirty = !1),
                                            (this._fs = t),
                                            (this._path = n),
                                            (this._flag = r),
                                            (this._stat = i),
                                            (this._buffer = o || q()),
                                            this._stat.size !== this._buffer.length && this._flag.isReadable())
                                    )
                                        throw Error("Invalid buffer: Buffer is " + this._buffer.length + " long, yet Stats object specifies that file is " + this._stat.size + " long.");
                                }
                                return (
                                    e && (t.__proto__ = e),
                                    (t.prototype = Object.create(e && e.prototype)),
                                    (t.prototype.constructor = t),
                                    (t.prototype.getBuffer = function () {
                                        return this._buffer;
                                    }),
                                    (t.prototype.getStats = function () {
                                        return this._stat;
                                    }),
                                    (t.prototype.getFlag = function () {
                                        return this._flag;
                                    }),
                                    (t.prototype.getPath = function () {
                                        return this._path;
                                    }),
                                    (t.prototype.getPos = function () {
                                        return this._flag.isAppendable() ? this._stat.size : this._pos;
                                    }),
                                    (t.prototype.advancePos = function (e) {
                                        return (this._pos += e);
                                    }),
                                    (t.prototype.setPos = function (e) {
                                        return (this._pos = e);
                                    }),
                                    (t.prototype.sync = function (e) {
                                        try {
                                            this.syncSync(), e();
                                        } catch (t) {
                                            e(t);
                                        }
                                    }),
                                    (t.prototype.syncSync = function () {
                                        throw new d(c.ENOTSUP);
                                    }),
                                    (t.prototype.close = function (e) {
                                        try {
                                            this.closeSync(), e();
                                        } catch (t) {
                                            e(t);
                                        }
                                    }),
                                    (t.prototype.closeSync = function () {
                                        throw new d(c.ENOTSUP);
                                    }),
                                    (t.prototype.stat = function (e) {
                                        try {
                                            e(null, w.clone(this._stat));
                                        } catch (t) {
                                            e(t);
                                        }
                                    }),
                                    (t.prototype.statSync = function () {
                                        return w.clone(this._stat);
                                    }),
                                    (t.prototype.truncate = function (e, t) {
                                        try {
                                            this.truncateSync(e), this._flag.isSynchronous() && !D.getRootFS().supportsSynch() && this.sync(t), t();
                                        } catch (e) {
                                            return t(e);
                                        }
                                    }),
                                    (t.prototype.truncateSync = function (e) {
                                        if (((this._dirty = !0), !this._flag.isWriteable())) throw new d(c.EPERM, "File not opened with a writeable mode.");
                                        if (((this._stat.mtimeMs = Date.now()), e > this._buffer.length)) {
                                            var t = i.alloc(e - this._buffer.length, 0);
                                            return this.writeSync(t, 0, t.length, this._buffer.length), void (this._flag.isSynchronous() && D.getRootFS().supportsSynch() && this.syncSync());
                                        }
                                        this._stat.size = e;
                                        var n = i.alloc(e);
                                        this._buffer.copy(n, 0, 0, e), (this._buffer = n), this._flag.isSynchronous() && D.getRootFS().supportsSynch() && this.syncSync();
                                    }),
                                    (t.prototype.write = function (e, t, n, r, i) {
                                        try {
                                            i(null, this.writeSync(e, t, n, r), e);
                                        } catch (e) {
                                            i(e);
                                        }
                                    }),
                                    (t.prototype.writeSync = function (e, t, n, r) {
                                        if (((this._dirty = !0), null != r || (r = this.getPos()), !this._flag.isWriteable())) throw new d(c.EPERM, "File not opened with a writeable mode.");
                                        var o = r + n;
                                        if (o > this._stat.size && ((this._stat.size = o), o > this._buffer.length)) {
                                            var s = i.alloc(o);
                                            this._buffer.copy(s), (this._buffer = s);
                                        }
                                        var a = e.copy(this._buffer, r, t, t + n);
                                        return (this._stat.mtimeMs = Date.now()), this._flag.isSynchronous() ? this.syncSync() : this.setPos(r + a), a;
                                    }),
                                    (t.prototype.read = function (e, t, n, r, i) {
                                        try {
                                            i(null, this.readSync(e, t, n, r), e);
                                        } catch (e) {
                                            i(e);
                                        }
                                    }),
                                    (t.prototype.readSync = function (e, t, n, r) {
                                        if (!this._flag.isReadable()) throw new d(c.EPERM, "File not opened with a readable mode.");
                                        null != r || (r = this.getPos()), r + n > this._stat.size && (n = this._stat.size - r);
                                        var i = this._buffer.copy(e, t, r, r + n);
                                        return (this._stat.atimeMs = Date.now()), (this._pos = r + n), i;
                                    }),
                                    (t.prototype.chmod = function (e, t) {
                                        try {
                                            this.chmodSync(e), t();
                                        } catch (e) {
                                            t(e);
                                        }
                                    }),
                                    (t.prototype.chmodSync = function (e) {
                                        if (!this._fs.supportsProps()) throw new d(c.ENOTSUP);
                                        (this._dirty = !0), this._stat.chmod(e), this.syncSync();
                                    }),
                                    (t.prototype.isDirty = function () {
                                        return this._dirty;
                                    }),
                                    (t.prototype.resetDirty = function () {
                                        this._dirty = !1;
                                    }),
                                    t
                                );
                            })(Z),
                                ee = (function (e) {
                                    function t(t, n, r, i, o) {
                                        e.call(this, t, n, r, i, o);
                                    }
                                    return (
                                        e && (t.__proto__ = e),
                                        (t.prototype = Object.create(e && e.prototype)),
                                        (t.prototype.constructor = t),
                                        (t.prototype.sync = function (e) {
                                            e();
                                        }),
                                        (t.prototype.syncSync = function () { }),
                                        (t.prototype.close = function (e) {
                                            e();
                                        }),
                                        (t.prototype.closeSync = function () { }),
                                        t
                                    );
                                })(Q),
                                et = null;
                            function en() {
                                return et || (et = i.from("{}"));
                            }
                            function er() {
                                return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (e) {
                                    var t = (16 * Math.random()) | 0;
                                    return ("x" === e ? t : (3 & t) | 8).toString(16);
                                });
                            }
                            function ei(e, t) {
                                return !e || (t(e), !1);
                            }
                            function eo(e, t, n) {
                                return (
                                    !e ||
                                    (t.abort(function () {
                                        n(e);
                                    }),
                                        !1)
                                );
                            }
                            var es = function (e) {
                                (this.limit = e), (this.size = 0), (this.map = new Map()), (this.head = null), (this.tail = null);
                            };
                            (es.prototype.set = function (e, t) {
                                var n = this.map.get(e);
                                n ? ((n.value = t), this.remove(e, n)) : this.size >= this.limit && (this.map.delete(this.tail.key), this.size--, (this.tail = this.tail.prev), (this.tail.next = null)),
                                    this.setHead(
                                        n ||
                                        new (function (e, t) {
                                            (this.key = e), (this.value = t), (this.prev = null), (this.next = null);
                                        })(e, t)
                                    );
                            }),
                                (es.prototype.get = function (e) {
                                    var t = this.map.get(e);
                                    return t ? (this.remove(e, t), this.setHead(t), t.value) : null;
                                }),
                                (es.prototype.remove = function (e, t) {
                                    var n = t || this.map.get(e);
                                    n && (null !== n.prev ? (n.prev.next = n.next) : (this.head = n.next), null !== n.next ? (n.next.prev = n.prev) : (this.tail = n.prev), this.map.delete(e), this.size--);
                                }),
                                (es.prototype.removeAll = function () {
                                    (this.size = 0), (this.map = new Map()), (this.head = null), (this.tail = null);
                                }),
                                (es.prototype.setHead = function (e) {
                                    (e.next = this.head), (e.prev = null), null !== this.head && (this.head.prev = e), (this.head = e), null === this.tail && (this.tail = e), this.size++, this.map.set(e.key, e);
                                });
                            var ea = function (e) {
                                (this.store = e), (this.originalData = {}), (this.modifiedKeys = []);
                            };
                            (ea.prototype.get = function (e) {
                                var t = this.store.get(e);
                                return this.stashOldValue(e, t), t;
                            }),
                                (ea.prototype.put = function (e, t, n) {
                                    return this.markModified(e), this.store.put(e, t, n);
                                }),
                                (ea.prototype.del = function (e) {
                                    this.markModified(e), this.store.del(e);
                                }),
                                (ea.prototype.commit = function () { }),
                                (ea.prototype.abort = function () {
                                    for (var e = 0, t = this.modifiedKeys; e < t.length; e += 1) {
                                        var n = t[e],
                                            r = this.originalData[n];
                                        r ? this.store.put(n, r, !0) : this.store.del(n);
                                    }
                                }),
                                (ea.prototype.stashOldValue = function (e, t) {
                                    this.originalData.hasOwnProperty(e) || (this.originalData[e] = t);
                                }),
                                (ea.prototype.markModified = function (e) {
                                    -1 === this.modifiedKeys.indexOf(e) && (this.modifiedKeys.push(e), this.originalData.hasOwnProperty(e) || (this.originalData[e] = this.store.get(e)));
                                });
                            var ec = (function (e) {
                                function t(t, n, r, i, o) {
                                    e.call(this, t, n, r, i, o);
                                }
                                return (
                                    e && (t.__proto__ = e),
                                    (t.prototype = Object.create(e && e.prototype)),
                                    (t.prototype.constructor = t),
                                    (t.prototype.syncSync = function () {
                                        this.isDirty() && (this._fs._syncSync(this.getPath(), this.getBuffer(), this.getStats()), this.resetDirty());
                                    }),
                                    (t.prototype.closeSync = function () {
                                        this.syncSync();
                                    }),
                                    t
                                );
                            })(Q),
                                eu = (function (e) {
                                    function t(t) {
                                        e.call(this), (this.store = t.store), this.makeRootDirectory();
                                    }
                                    return (
                                        e && (t.__proto__ = e),
                                        (t.prototype = Object.create(e && e.prototype)),
                                        (t.prototype.constructor = t),
                                        (t.isAvailable = function () {
                                            return !0;
                                        }),
                                        (t.prototype.getName = function () {
                                            return this.store.name();
                                        }),
                                        (t.prototype.isReadOnly = function () {
                                            return !1;
                                        }),
                                        (t.prototype.supportsSymlinks = function () {
                                            return !1;
                                        }),
                                        (t.prototype.supportsProps = function () {
                                            return !1;
                                        }),
                                        (t.prototype.supportsSynch = function () {
                                            return !0;
                                        }),
                                        (t.prototype.empty = function () {
                                            this.store.clear(), this.makeRootDirectory();
                                        }),
                                        (t.prototype.renameSync = function (e, t) {
                                            var n = this.store.beginTransaction("readwrite"),
                                                r = l.dirname(e),
                                                o = l.basename(e),
                                                s = l.dirname(t),
                                                a = l.basename(t),
                                                u = this.findINode(n, r),
                                                p = this.getDirListing(n, r, u);
                                            if (!p[o]) throw d.ENOENT(e);
                                            var f,
                                                h,
                                                m = p[o];
                                            if ((delete p[o], 0 === (s + "/").indexOf(e + "/"))) throw new d(c.EBUSY, r);
                                            if ((s === r ? ((f = u), (h = p)) : ((f = this.findINode(n, s)), (h = this.getDirListing(n, s, f))), h[a])) {
                                                var g = this.getINode(n, t, h[a]);
                                                if (!g.isFile()) throw d.EPERM(t);
                                                try {
                                                    n.del(g.id), n.del(h[a]);
                                                } catch (e) {
                                                    throw (n.abort(), e);
                                                }
                                            }
                                            h[a] = m;
                                            try {
                                                n.put(u.id, i.from(JSON.stringify(p)), !0), n.put(f.id, i.from(JSON.stringify(h)), !0);
                                            } catch (e) {
                                                throw (n.abort(), e);
                                            }
                                            n.commit();
                                        }),
                                        (t.prototype.statSync = function (e, t) {
                                            return this.findINode(this.store.beginTransaction("readonly"), e).toStats();
                                        }),
                                        (t.prototype.createFileSync = function (e, t, n) {
                                            var r = this.store.beginTransaction("readwrite"),
                                                i = q(),
                                                o = this.commitNewFile(r, e, y.FILE, n, i);
                                            return new ec(this, e, t, o.toStats(), i);
                                        }),
                                        (t.prototype.openFileSync = function (e, t) {
                                            var n = this.store.beginTransaction("readonly"),
                                                r = this.findINode(n, e),
                                                i = n.get(r.id);
                                            if (void 0 === i) throw d.ENOENT(e);
                                            return new ec(this, e, t, r.toStats(), i);
                                        }),
                                        (t.prototype.unlinkSync = function (e) {
                                            this.removeEntry(e, !1);
                                        }),
                                        (t.prototype.rmdirSync = function (e) {
                                            if (this.readdirSync(e).length > 0) throw d.ENOTEMPTY(e);
                                            this.removeEntry(e, !0);
                                        }),
                                        (t.prototype.mkdirSync = function (e, t) {
                                            var n = this.store.beginTransaction("readwrite"),
                                                r = i.from("{}");
                                            this.commitNewFile(n, e, y.DIRECTORY, t, r);
                                        }),
                                        (t.prototype.readdirSync = function (e) {
                                            var t = this.store.beginTransaction("readonly");
                                            return Object.keys(this.getDirListing(t, e, this.findINode(t, e)));
                                        }),
                                        (t.prototype._syncSync = function (e, t, n) {
                                            var r = this.store.beginTransaction("readwrite"),
                                                i = this._findINode(r, l.dirname(e), l.basename(e)),
                                                o = this.getINode(r, e, i),
                                                s = o.update(n);
                                            try {
                                                r.put(o.id, t, !0), s && r.put(i, o.toBuffer(), !0);
                                            } catch (e) {
                                                throw (r.abort(), e);
                                            }
                                            r.commit();
                                        }),
                                        (t.prototype.makeRootDirectory = function () {
                                            var e = this.store.beginTransaction("readwrite");
                                            if (void 0 === e.get("/")) {
                                                var t = new Date().getTime(),
                                                    n = new X(er(), 4096, 511 | y.DIRECTORY, t, t, t);
                                                e.put(n.id, en(), !1), e.put("/", n.toBuffer(), !1), e.commit();
                                            }
                                        }),
                                        (t.prototype._findINode = function (e, t, n) {
                                            var r = this,
                                                i = function (i) {
                                                    var o = r.getDirListing(e, t, i);
                                                    if (o[n]) return o[n];
                                                    throw d.ENOENT(l.resolve(t, n));
                                                };
                                            return "." === t && (t = o.cwd()), "/" === t ? ("" === n ? "/" : i(this.getINode(e, t, "/"))) : i(this.getINode(e, t + l.sep + n, this._findINode(e, l.dirname(t), l.basename(t))));
                                        }),
                                        (t.prototype.findINode = function (e, t) {
                                            return this.getINode(e, t, this._findINode(e, l.dirname(t), l.basename(t)));
                                        }),
                                        (t.prototype.getINode = function (e, t, n) {
                                            var r = e.get(n);
                                            if (void 0 === r) throw d.ENOENT(t);
                                            return X.fromBuffer(r);
                                        }),
                                        (t.prototype.getDirListing = function (e, t, n) {
                                            if (!n.isDirectory()) throw d.ENOTDIR(t);
                                            var r = e.get(n.id);
                                            if (void 0 === r) throw d.ENOENT(t);
                                            return JSON.parse(r.toString());
                                        }),
                                        (t.prototype.addNewNode = function (e, t) {
                                            for (var n; ;)
                                                try {
                                                    return (n = er()), e.put(n, t, !1), n;
                                                } catch (e) { }
                                            throw new d(c.EIO, "Unable to commit data to key-value store.");
                                        }),
                                        (t.prototype.commitNewFile = function (e, t, n, r, o) {
                                            var s,
                                                a = l.dirname(t),
                                                c = l.basename(t),
                                                u = this.findINode(e, a),
                                                p = this.getDirListing(e, a, u),
                                                f = new Date().getTime();
                                            if ("/" === t || p[c]) throw d.EEXIST(t);
                                            try {
                                                var h = this.addNewNode(e, o);
                                                s = new X(h, o.length, r | n, f, f, f);
                                                var m = this.addNewNode(e, s.toBuffer());
                                                (p[c] = m), e.put(u.id, i.from(JSON.stringify(p)), !0);
                                            } catch (t) {
                                                throw (e.abort(), t);
                                            }
                                            return e.commit(), s;
                                        }),
                                        (t.prototype.removeEntry = function (e, t) {
                                            var n = this.store.beginTransaction("readwrite"),
                                                r = l.dirname(e),
                                                o = this.findINode(n, r),
                                                s = this.getDirListing(n, r, o),
                                                a = l.basename(e);
                                            if (!s[a]) throw d.ENOENT(e);
                                            var c = s[a];
                                            delete s[a];
                                            var u = this.getINode(n, e, c);
                                            if (!t && u.isDirectory()) throw d.EISDIR(e);
                                            if (t && !u.isDirectory()) throw d.ENOTDIR(e);
                                            try {
                                                n.del(u.id), n.del(c), n.put(o.id, i.from(JSON.stringify(s)), !0);
                                            } catch (e) {
                                                throw (n.abort(), e);
                                            }
                                            n.commit();
                                        }),
                                        t
                                    );
                                })(J),
                                el = (function (e) {
                                    function t(t, n, r, i, o) {
                                        e.call(this, t, n, r, i, o);
                                    }
                                    return (
                                        e && (t.__proto__ = e),
                                        (t.prototype = Object.create(e && e.prototype)),
                                        (t.prototype.constructor = t),
                                        (t.prototype.sync = function (e) {
                                            var t = this;
                                            this.isDirty()
                                                ? this._fs._sync(this.getPath(), this.getBuffer(), this.getStats(), function (n) {
                                                    n || t.resetDirty(), e(n);
                                                })
                                                : e();
                                        }),
                                        (t.prototype.close = function (e) {
                                            this.sync(e);
                                        }),
                                        t
                                    );
                                })(Q),
                                ep = (function (e) {
                                    function t(t) {
                                        e.call(this), (this._cache = null), t > 0 && (this._cache = new es(t));
                                    }
                                    return (
                                        e && (t.__proto__ = e),
                                        (t.prototype = Object.create(e && e.prototype)),
                                        (t.prototype.constructor = t),
                                        (t.isAvailable = function () {
                                            return !0;
                                        }),
                                        (t.prototype.init = function (e, t) {
                                            (this.store = e), this.makeRootDirectory(t);
                                        }),
                                        (t.prototype.getName = function () {
                                            return this.store.name();
                                        }),
                                        (t.prototype.isReadOnly = function () {
                                            return !1;
                                        }),
                                        (t.prototype.supportsSymlinks = function () {
                                            return !1;
                                        }),
                                        (t.prototype.supportsProps = function () {
                                            return !1;
                                        }),
                                        (t.prototype.supportsSynch = function () {
                                            return !1;
                                        }),
                                        (t.prototype.empty = function (e) {
                                            var t = this;
                                            this._cache && this._cache.removeAll(),
                                                this.store.clear(function (n) {
                                                    ei(n, e) && t.makeRootDirectory(e);
                                                });
                                        }),
                                        (t.prototype.rename = function (e, t, n) {
                                            var r = this;
                                            if (this._cache) {
                                                var o = this._cache;
                                                (this._cache = null), o.removeAll();
                                                var s = n;
                                                n = function (e) {
                                                    (r._cache = o), s(e);
                                                };
                                            }
                                            var a = this.store.beginTransaction("readwrite"),
                                                u = l.dirname(e),
                                                p = l.basename(e),
                                                f = l.dirname(t),
                                                h = l.basename(t),
                                                m = {},
                                                g = {},
                                                y = !1;
                                            if (0 === (f + "/").indexOf(e + "/")) return n(new d(c.EBUSY, u));
                                            var b = function (o) {
                                                r.findINodeAndDirListing(a, o, function (s, c, l) {
                                                    s
                                                        ? y ||
                                                        ((y = !0),
                                                            a.abort(function () {
                                                                n(s);
                                                            }))
                                                        : ((m[o] = c),
                                                            (g[o] = l),
                                                            (function () {
                                                                if (!y && g.hasOwnProperty(u) && g.hasOwnProperty(f)) {
                                                                    var o = g[u],
                                                                        s = m[u],
                                                                        c = g[f],
                                                                        l = m[f];
                                                                    if (o[p]) {
                                                                        var b = o[p];
                                                                        delete o[p];
                                                                        var w = function () {
                                                                            (c[h] = b),
                                                                                a.put(s.id, i.from(JSON.stringify(o)), !0, function (e) {
                                                                                    eo(e, a, n) &&
                                                                                        (u === f
                                                                                            ? a.commit(n)
                                                                                            : a.put(l.id, i.from(JSON.stringify(c)), !0, function (e) {
                                                                                                eo(e, a, n) && a.commit(n);
                                                                                            }));
                                                                                });
                                                                        };
                                                                        c[h]
                                                                            ? r.getINode(a, t, c[h], function (e, r) {
                                                                                eo(e, a, n) &&
                                                                                    (r.isFile()
                                                                                        ? a.del(r.id, function (e) {
                                                                                            eo(e, a, n) &&
                                                                                                a.del(c[h], function (e) {
                                                                                                    eo(e, a, n) && w();
                                                                                                });
                                                                                        })
                                                                                        : a.abort(function (e) {
                                                                                            n(d.EPERM(t));
                                                                                        }));
                                                                            })
                                                                            : w();
                                                                    } else n(d.ENOENT(e));
                                                                }
                                                            })());
                                                });
                                            };
                                            b(u), u !== f && b(f);
                                        }),
                                        (t.prototype.stat = function (e, t, n) {
                                            var r = this.store.beginTransaction("readonly");
                                            this.findINode(r, e, function (e, t) {
                                                ei(e, n) && n(null, t.toStats());
                                            });
                                        }),
                                        (t.prototype.createFile = function (e, t, n, r) {
                                            var i = this,
                                                o = this.store.beginTransaction("readwrite"),
                                                s = q();
                                            this.commitNewFile(o, e, y.FILE, n, s, function (n, o) {
                                                ei(n, r) && r(null, new el(i, e, t, o.toStats(), s));
                                            });
                                        }),
                                        (t.prototype.openFile = function (e, t, n) {
                                            var r = this,
                                                i = this.store.beginTransaction("readonly");
                                            this.findINode(i, e, function (o, s) {
                                                ei(o, n) &&
                                                    i.get(s.id, function (i, o) {
                                                        ei(i, n) && (void 0 === o ? n(d.ENOENT(e)) : n(null, new el(r, e, t, s.toStats(), o)));
                                                    });
                                            });
                                        }),
                                        (t.prototype.unlink = function (e, t) {
                                            this.removeEntry(e, !1, t);
                                        }),
                                        (t.prototype.rmdir = function (e, t) {
                                            var n = this;
                                            this.readdir(e, function (r, i) {
                                                r ? t(r) : i.length > 0 ? t(d.ENOTEMPTY(e)) : n.removeEntry(e, !0, t);
                                            });
                                        }),
                                        (t.prototype.mkdir = function (e, t, n) {
                                            var r = this.store.beginTransaction("readwrite"),
                                                o = i.from("{}");
                                            this.commitNewFile(r, e, y.DIRECTORY, t, o, n);
                                        }),
                                        (t.prototype.readdir = function (e, t) {
                                            var n = this,
                                                r = this.store.beginTransaction("readonly");
                                            this.findINode(r, e, function (i, o) {
                                                ei(i, t) &&
                                                    n.getDirListing(r, e, o, function (e, n) {
                                                        ei(e, t) && t(null, Object.keys(n));
                                                    });
                                            });
                                        }),
                                        (t.prototype._sync = function (e, t, n, r) {
                                            var i = this,
                                                o = this.store.beginTransaction("readwrite");
                                            this._findINode(o, l.dirname(e), l.basename(e), function (s, a) {
                                                eo(s, o, r) &&
                                                    i.getINode(o, e, a, function (e, i) {
                                                        if (eo(e, o, r)) {
                                                            var s = i.update(n);
                                                            o.put(i.id, t, !0, function (e) {
                                                                eo(e, o, r) &&
                                                                    (s
                                                                        ? o.put(a, i.toBuffer(), !0, function (e) {
                                                                            eo(e, o, r) && o.commit(r);
                                                                        })
                                                                        : o.commit(r));
                                                            });
                                                        }
                                                    });
                                            });
                                        }),
                                        (t.prototype.makeRootDirectory = function (e) {
                                            var t = this.store.beginTransaction("readwrite");
                                            t.get("/", function (n, r) {
                                                if (n || void 0 === r) {
                                                    var i = new Date().getTime(),
                                                        o = new X(er(), 4096, 511 | y.DIRECTORY, i, i, i);
                                                    t.put(o.id, en(), !1, function (n) {
                                                        eo(n, t, e) &&
                                                            t.put("/", o.toBuffer(), !1, function (n) {
                                                                n
                                                                    ? t.abort(function () {
                                                                        e(n);
                                                                    })
                                                                    : t.commit(e);
                                                            });
                                                    });
                                                } else t.commit(e);
                                            });
                                        }),
                                        (t.prototype._findINode = function (e, t, n, r) {
                                            var i = this;
                                            if (this._cache) {
                                                var o = this._cache.get(l.join(t, n));
                                                if (o) return r(null, o);
                                            }
                                            var s = function (e, o, s) {
                                                if (e) r(e);
                                                else if (s[n]) {
                                                    var a = s[n];
                                                    i._cache && i._cache.set(l.join(t, n), a), r(null, a);
                                                } else r(d.ENOENT(l.resolve(t, n)));
                                            };
                                            "/" === t
                                                ? "" === n
                                                    ? (this._cache && this._cache.set(l.join(t, n), "/"), r(null, "/"))
                                                    : this.getINode(e, t, "/", function (n, o) {
                                                        ei(n, r) &&
                                                            i.getDirListing(e, t, o, function (e, t) {
                                                                s(e, 0, t);
                                                            });
                                                    })
                                                : this.findINodeAndDirListing(e, t, s);
                                        }),
                                        (t.prototype.findINode = function (e, t, n) {
                                            var r = this;
                                            this._findINode(e, l.dirname(t), l.basename(t), function (i, o) {
                                                ei(i, n) && r.getINode(e, t, o, n);
                                            });
                                        }),
                                        (t.prototype.getINode = function (e, t, n, r) {
                                            e.get(n, function (e, n) {
                                                ei(e, r) && (void 0 === n ? r(d.ENOENT(t)) : r(null, X.fromBuffer(n)));
                                            });
                                        }),
                                        (t.prototype.getDirListing = function (e, t, n, r) {
                                            n.isDirectory()
                                                ? e.get(n.id, function (e, n) {
                                                    if (ei(e, r))
                                                        try {
                                                            r(null, JSON.parse(n.toString()));
                                                        } catch (e) {
                                                            r(d.ENOENT(t));
                                                        }
                                                })
                                                : r(d.ENOTDIR(t));
                                        }),
                                        (t.prototype.findINodeAndDirListing = function (e, t, n) {
                                            var r = this;
                                            this.findINode(e, t, function (i, o) {
                                                ei(i, n) &&
                                                    r.getDirListing(e, t, o, function (e, t) {
                                                        ei(e, n) && n(null, o, t);
                                                    });
                                            });
                                        }),
                                        (t.prototype.addNewNode = function (e, t, n) {
                                            var r,
                                                i = 0,
                                                o = function () {
                                                    5 == ++i
                                                        ? n(new d(c.EIO, "Unable to commit data to key-value store."))
                                                        : ((r = er()),
                                                            e.put(r, t, !1, function (e, t) {
                                                                e || !t ? o() : n(null, r);
                                                            }));
                                                };
                                            o();
                                        }),
                                        (t.prototype.commitNewFile = function (e, t, n, r, o, s) {
                                            var a = this,
                                                c = l.dirname(t),
                                                u = l.basename(t),
                                                p = new Date().getTime();
                                            if ("/" === t) return s(d.EEXIST(t));
                                            this.findINodeAndDirListing(e, c, function (c, l, f) {
                                                eo(c, e, s) &&
                                                    (f[u]
                                                        ? e.abort(function () {
                                                            s(d.EEXIST(t));
                                                        })
                                                        : a.addNewNode(e, o, function (t, c) {
                                                            if (eo(t, e, s)) {
                                                                var h = new X(c, o.length, r | n, p, p, p);
                                                                a.addNewNode(e, h.toBuffer(), function (t, n) {
                                                                    eo(t, e, s) &&
                                                                        ((f[u] = n),
                                                                            e.put(l.id, i.from(JSON.stringify(f)), !0, function (t) {
                                                                                eo(t, e, s) &&
                                                                                    e.commit(function (t) {
                                                                                        eo(t, e, s) && s(null, h);
                                                                                    });
                                                                            }));
                                                                });
                                                            }
                                                        }));
                                            });
                                        }),
                                        (t.prototype.removeEntry = function (e, t, n) {
                                            var r = this;
                                            this._cache && this._cache.remove(e);
                                            var o = this.store.beginTransaction("readwrite"),
                                                s = l.dirname(e),
                                                a = l.basename(e);
                                            this.findINodeAndDirListing(o, s, function (s, c, u) {
                                                if (eo(s, o, n)) {
                                                    if (u[a]) {
                                                        var l = u[a];
                                                        delete u[a],
                                                            r.getINode(o, e, l, function (r, s) {
                                                                eo(r, o, n) &&
                                                                    (!t && s.isDirectory()
                                                                        ? o.abort(function () {
                                                                            n(d.EISDIR(e));
                                                                        })
                                                                        : t && !s.isDirectory()
                                                                            ? o.abort(function () {
                                                                                n(d.ENOTDIR(e));
                                                                            })
                                                                            : o.del(s.id, function (e) {
                                                                                eo(e, o, n) &&
                                                                                    o.del(l, function (e) {
                                                                                        eo(e, o, n) &&
                                                                                            o.put(c.id, i.from(JSON.stringify(u)), !0, function (e) {
                                                                                                eo(e, o, n) && o.commit(n);
                                                                                            });
                                                                                    });
                                                                            }));
                                                            });
                                                    } else
                                                        o.abort(function () {
                                                            n(d.ENOENT(e));
                                                        });
                                                }
                                            });
                                        }),
                                        t
                                    );
                                })(K),
                                ef = function () {
                                    this.store = {};
                                };
                            (ef.prototype.name = function () {
                                return eh.Name;
                            }),
                                (ef.prototype.clear = function () {
                                    this.store = {};
                                }),
                                (ef.prototype.beginTransaction = function (e) {
                                    return new ea(this);
                                }),
                                (ef.prototype.get = function (e) {
                                    return this.store[e];
                                }),
                                (ef.prototype.put = function (e, t, n) {
                                    return !(!n && this.store.hasOwnProperty(e)) && ((this.store[e] = t), !0);
                                }),
                                (ef.prototype.del = function (e) {
                                    delete this.store[e];
                                });
                            var eh = (function (e) {
                                function t() {
                                    e.call(this, { store: new ef() });
                                }
                                return (
                                    e && (t.__proto__ = e),
                                    (t.prototype = Object.create(e && e.prototype)),
                                    (t.prototype.constructor = t),
                                    (t.Create = function (e, n) {
                                        n(null, new t());
                                    }),
                                    t
                                );
                            })(eu);
                            (eh.Name = "InMemory"), (eh.Options = {});
                            var ed = (function () {
                                try {
                                    return x.indexedDB || x.mozIndexedDB || x.webkitIndexedDB || x.msIndexedDB;
                                } catch (e) {
                                    return null;
                                }
                            })();
                            function em(e, t) {
                                switch ((void 0 === t && (t = e.toString()), e.name)) {
                                    case "NotFoundError":
                                        return new d(c.ENOENT, t);
                                    case "QuotaExceededError":
                                        return new d(c.ENOSPC, t);
                                    default:
                                        return new d(c.EIO, t);
                                }
                            }
                            function eg(e, t, n) {
                                return (
                                    void 0 === t && (t = c.EIO),
                                    void 0 === n && (n = null),
                                    function (r) {
                                        r.preventDefault(), e(new d(t, null !== n ? n : void 0));
                                    }
                                );
                            }
                            var ey = function (e, t) {
                                (this.tx = e), (this.store = t);
                            };
                            ey.prototype.get = function (e, t) {
                                try {
                                    var n = this.store.get(e);
                                    (n.onerror = eg(t)),
                                        (n.onsuccess = function (e) {
                                            var n = e.target.result;
                                            t(null, void 0 === n ? n : W(n));
                                        });
                                } catch (e) {
                                    t(em(e));
                                }
                            };
                            var eb = (function (e) {
                                function t(t, n) {
                                    e.call(this, t, n);
                                }
                                return (
                                    e && (t.__proto__ = e),
                                    (t.prototype = Object.create(e && e.prototype)),
                                    (t.prototype.constructor = t),
                                    (t.prototype.put = function (e, t, n, r) {
                                        try {
                                            var i,
                                                o = z(t);
                                            ((i = n ? this.store.put(o, e) : this.store.add(o, e)).onerror = eg(r)),
                                                (i.onsuccess = function (e) {
                                                    r(null, !0);
                                                });
                                        } catch (e) {
                                            r(em(e));
                                        }
                                    }),
                                    (t.prototype.del = function (e, t) {
                                        try {
                                            var n = this.store.delete(e);
                                            (n.onerror = eg(t)),
                                                (n.onsuccess = function (e) {
                                                    t();
                                                });
                                        } catch (e) {
                                            t(em(e));
                                        }
                                    }),
                                    (t.prototype.commit = function (e) {
                                        setTimeout(e, 0);
                                    }),
                                    (t.prototype.abort = function (e) {
                                        var t = null;
                                        try {
                                            this.tx.abort();
                                        } catch (e) {
                                            t = em(e);
                                        } finally {
                                            e(t);
                                        }
                                    }),
                                    t
                                );
                            })(ey),
                                ew = function (e, t) {
                                    (this.db = e), (this.storeName = t);
                                };
                            (ew.Create = function (e, t) {
                                var n = ed.open(e, 1);
                                (n.onupgradeneeded = function (t) {
                                    var n = t.target.result;
                                    n.objectStoreNames.contains(e) && n.deleteObjectStore(e), n.createObjectStore(e);
                                }),
                                    (n.onsuccess = function (n) {
                                        t(null, new ew(n.target.result, e));
                                    }),
                                    (n.onerror = eg(t, c.EACCES));
                            }),
                                (ew.prototype.name = function () {
                                    return ev.Name + " - " + this.storeName;
                                }),
                                (ew.prototype.clear = function (e) {
                                    try {
                                        var t = this.db.transaction(this.storeName, "readwrite").objectStore(this.storeName).clear();
                                        (t.onsuccess = function (t) {
                                            setTimeout(e, 0);
                                        }),
                                            (t.onerror = eg(e));
                                    } catch (t) {
                                        e(em(t));
                                    }
                                }),
                                (ew.prototype.beginTransaction = function (e) {
                                    void 0 === e && (e = "readonly");
                                    var t = this.db.transaction(this.storeName, e),
                                        n = t.objectStore(this.storeName);
                                    if ("readwrite" === e) return new eb(t, n);
                                    if ("readonly" === e) return new ey(t, n);
                                    throw new d(c.EINVAL, "Invalid transaction type.");
                                });
                            var ev = (function (e) {
                                function t(t) {
                                    e.call(this, t);
                                }
                                return (
                                    e && (t.__proto__ = e),
                                    (t.prototype = Object.create(e && e.prototype)),
                                    (t.prototype.constructor = t),
                                    (t.Create = function (e, n) {
                                        void 0 === e && (e = {}),
                                            ew.Create(e.storeName ? e.storeName : "browserfs", function (r, i) {
                                                if (i) {
                                                    var o = new t("number" == typeof e.cacheSize ? e.cacheSize : 100);
                                                    o.init(i, function (e) {
                                                        e ? n(e) : n(null, o);
                                                    });
                                                } else n(r);
                                            });
                                    }),
                                    (t.isAvailable = function () {
                                        try {
                                            return void 0 !== ed && null !== ed.open("__browserfs_test__");
                                        } catch (e) {
                                            return !1;
                                        }
                                    }),
                                    t
                                );
                            })(ep);
                            (ev.Name = "IndexedDB"),
                                (ev.Options = {
                                    storeName: { type: "string", optional: !0, description: "The name of this file system. You can have multiple IndexedDB file systems operating at once, but each must have a different name." },
                                    cacheSize: { type: "number", optional: !0, description: "The size of the inode cache. Defaults to 100. A size of 0 or below disables caching." },
                                });
                            var eS = (function (e) {
                                function t(t) {
                                    e.call(this), (this.mountList = []), (this.mntMap = {}), (this.rootFs = t);
                                }
                                return (
                                    e && (t.__proto__ = e),
                                    (t.prototype = Object.create(e && e.prototype)),
                                    (t.prototype.constructor = t),
                                    (t.Create = function (e, n) {
                                        eh.Create({}, function (r, i) {
                                            if (i) {
                                                var o = new t(i);
                                                try {
                                                    Object.keys(e).forEach(function (t) {
                                                        o.mount(t, e[t]);
                                                    });
                                                } catch (e) {
                                                    return n(e);
                                                }
                                                n(null, o);
                                            } else n(r);
                                        });
                                    }),
                                    (t.isAvailable = function () {
                                        return !0;
                                    }),
                                    (t.prototype.mount = function (e, t) {
                                        if (("/" !== e[0] && (e = "/" + e), (e = l.resolve(e)), this.mntMap[e])) throw new d(c.EINVAL, "Mount point " + e + " is already taken.");
                                        M(e, 511, this.rootFs),
                                            (this.mntMap[e] = t),
                                            this.mountList.push(e),
                                            (this.mountList = this.mountList.sort(function (e, t) {
                                                return t.length - e.length;
                                            }));
                                    }),
                                    (t.prototype.umount = function (e) {
                                        if (("/" !== e[0] && (e = "/" + e), (e = l.resolve(e)), !this.mntMap[e])) throw new d(c.EINVAL, "Mount point " + e + " is already unmounted.");
                                        for (delete this.mntMap[e], this.mountList.splice(this.mountList.indexOf(e), 1); "/" !== e && 0 === this.rootFs.readdirSync(e).length;) this.rootFs.rmdirSync(e), (e = l.dirname(e));
                                    }),
                                    (t.prototype._getFs = function (e) {
                                        for (var t = this.mountList, n = t.length, r = 0; r < n; r++) {
                                            var i = t[r];
                                            if (i.length <= e.length && (e === i || e.startsWith(i.endsWith("/") ? i : i + "/")))
                                                return "" === (e = e.substr(i.length > 1 ? i.length : 0)) && (e = "/"), { fs: this.mntMap[i], path: e, mountPoint: i };
                                        }
                                        return { fs: this.rootFs, path: e, mountPoint: "/" };
                                    }),
                                    (t.prototype.getName = function () {
                                        return t.Name;
                                    }),
                                    (t.prototype.diskSpace = function (e, t) {
                                        t(0, 0);
                                    }),
                                    (t.prototype.isReadOnly = function () {
                                        return !1;
                                    }),
                                    (t.prototype.supportsLinks = function () {
                                        return !1;
                                    }),
                                    (t.prototype.supportsProps = function () {
                                        return !1;
                                    }),
                                    (t.prototype.supportsSynch = function () {
                                        return !0;
                                    }),
                                    (t.prototype.standardizeError = function (e, t, n) {
                                        var r = e.message.indexOf(t);
                                        return -1 !== r && ((e.message = e.message.substr(0, r) + n + e.message.substr(r + t.length)), (e.path = n)), e;
                                    }),
                                    (t.prototype.rename = function (e, t, n) {
                                        var r = this,
                                            i = this._getFs(e),
                                            o = this._getFs(t);
                                        return i.fs === o.fs
                                            ? i.fs.rename(i.path, o.path, function (s) {
                                                s && r.standardizeError(r.standardizeError(s, i.path, e), o.path, t), n(s);
                                            })
                                            : D.readFile(e, function (r, i) {
                                                if (r) return n(r);
                                                D.writeFile(t, i, function (t) {
                                                    if (t) return n(t);
                                                    D.unlink(e, n);
                                                });
                                            });
                                    }),
                                    (t.prototype.renameSync = function (e, t) {
                                        var n = this._getFs(e),
                                            r = this._getFs(t);
                                        if (n.fs === r.fs)
                                            try {
                                                return n.fs.renameSync(n.path, r.path);
                                            } catch (i) {
                                                throw (this.standardizeError(this.standardizeError(i, n.path, e), r.path, t), i);
                                            }
                                        var i = D.readFileSync(e);
                                        return D.writeFileSync(t, i), D.unlinkSync(e);
                                    }),
                                    (t.prototype.readdirSync = function (e) {
                                        var t = this._getFs(e),
                                            n = null;
                                        if (t.fs !== this.rootFs)
                                            try {
                                                n = this.rootFs.readdirSync(e);
                                            } catch (e) { }
                                        try {
                                            var r = t.fs.readdirSync(t.path);
                                            return null === n
                                                ? r
                                                : r.concat(
                                                    n.filter(function (e) {
                                                        return -1 === r.indexOf(e);
                                                    })
                                                );
                                        } catch (r) {
                                            if (null === n) throw this.standardizeError(r, t.path, e);
                                            return n;
                                        }
                                    }),
                                    (t.prototype.readdir = function (e, t) {
                                        var n = this,
                                            r = this._getFs(e);
                                        r.fs.readdir(r.path, function (i, o) {
                                            if (r.fs !== n.rootFs)
                                                try {
                                                    var s = n.rootFs.readdirSync(e);
                                                    o = o
                                                        ? o.concat(
                                                            s.filter(function (e) {
                                                                return -1 === o.indexOf(e);
                                                            })
                                                        )
                                                        : s;
                                                } catch (o) {
                                                    if (i) return t(n.standardizeError(i, r.path, e));
                                                }
                                            else if (i) return t(n.standardizeError(i, r.path, e));
                                            t(null, o);
                                        });
                                    }),
                                    (t.prototype.realpathSync = function (e, t) {
                                        var n = this._getFs(e);
                                        try {
                                            var r = n.fs.realpathSync(n.path, {});
                                            return l.resolve(l.join(n.mountPoint, r));
                                        } catch (t) {
                                            throw this.standardizeError(t, n.path, e);
                                        }
                                    }),
                                    (t.prototype.realpath = function (e, t, n) {
                                        var r = this,
                                            i = this._getFs(e);
                                        i.fs.realpath(i.path, {}, function (t, o) {
                                            t ? n(r.standardizeError(t, i.path, e)) : n(null, l.resolve(l.join(i.mountPoint, o)));
                                        });
                                    }),
                                    (t.prototype.rmdirSync = function (e) {
                                        var t = this._getFs(e);
                                        if (this._containsMountPt(e)) throw d.ENOTEMPTY(e);
                                        try {
                                            t.fs.rmdirSync(t.path);
                                        } catch (n) {
                                            throw this.standardizeError(n, t.path, e);
                                        }
                                    }),
                                    (t.prototype.rmdir = function (e, t) {
                                        var n = this,
                                            r = this._getFs(e);
                                        this._containsMountPt(e)
                                            ? t(d.ENOTEMPTY(e))
                                            : r.fs.rmdir(r.path, function (i) {
                                                t(i ? n.standardizeError(i, r.path, e) : null);
                                            });
                                    }),
                                    (t.prototype._containsMountPt = function (e) {
                                        for (var t = this.mountList, n = t.length, r = 0; r < n; r++) {
                                            var i = t[r];
                                            if (i.length >= e.length && i.slice(0, e.length) === e) return !0;
                                        }
                                        return !1;
                                    }),
                                    t
                                );
                            })(K);
                            function eE(e, t, n) {
                                return t
                                    ? function () {
                                        for (var t = [], n = arguments.length; n--;) t[n] = arguments[n];
                                        var r = t[0],
                                            i = this._getFs(r);
                                        t[0] = i.path;
                                        try {
                                            return i.fs[e].apply(i.fs, t);
                                        } catch (e) {
                                            throw (this.standardizeError(e, i.path, r), e);
                                        }
                                    }
                                    : function () {
                                        for (var t = this, n = [], r = arguments.length; r--;) n[r] = arguments[r];
                                        var i = n[0],
                                            o = this._getFs(i);
                                        if (((n[0] = o.path), "function" == typeof n[n.length - 1])) {
                                            var s = n[n.length - 1];
                                            n[n.length - 1] = function () {
                                                for (var e = [], n = arguments.length; n--;) e[n] = arguments[n];
                                                e.length > 0 && e[0] instanceof d && t.standardizeError(e[0], o.path, i), s.apply(null, e);
                                            };
                                        }
                                        return o.fs[e].apply(o.fs, n);
                                    };
                            }
                            (eS.Name = "MountableFileSystem"), (eS.Options = {});
                            for (var ex = [["exists", "unlink", "readlink"], ["stat", "mkdir", "truncate"], ["open", "readFile", "chmod", "utimes"], ["chown"], ["writeFile", "appendFile"]], ek = 0; ek < ex.length; ek++)
                                for (var e_ = 0, ej = ex[ek]; e_ < ej.length; e_ += 1) {
                                    var eI = ej[e_];
                                    (eS.prototype[eI] = eE(eI, !1)), (eS.prototype[eI + "Sync"] = eE(eI + "Sync", !0));
                                }
                            var eT = function () {
                                (this._locked = !1), (this._waiters = []);
                            };
                            (eT.prototype.lock = function (e) {
                                this._locked ? this._waiters.push(e) : ((this._locked = !0), e());
                            }),
                                (eT.prototype.unlock = function () {
                                    if (!this._locked) throw Error("unlock of a non-locked mutex");
                                    var e = this._waiters.shift();
                                    e ? I(e) : (this._locked = !1);
                                }),
                                (eT.prototype.tryLock = function () {
                                    return !this._locked && ((this._locked = !0), !0);
                                }),
                                (eT.prototype.isLocked = function () {
                                    return this._locked;
                                });
                            var eP = function (e) {
                                (this._fs = e), (this._mu = new eT());
                            };
                            (eP.prototype.getName = function () {
                                return "LockedFS<" + this._fs.getName() + ">";
                            }),
                                (eP.prototype.getFSUnlocked = function () {
                                    return this._fs;
                                }),
                                (eP.prototype.diskSpace = function (e, t) {
                                    this._fs.diskSpace(e, t);
                                }),
                                (eP.prototype.isReadOnly = function () {
                                    return this._fs.isReadOnly();
                                }),
                                (eP.prototype.supportsLinks = function () {
                                    return this._fs.supportsLinks();
                                }),
                                (eP.prototype.supportsProps = function () {
                                    return this._fs.supportsProps();
                                }),
                                (eP.prototype.supportsSynch = function () {
                                    return this._fs.supportsSynch();
                                }),
                                (eP.prototype.rename = function (e, t, n) {
                                    var r = this;
                                    this._mu.lock(function () {
                                        r._fs.rename(e, t, function (e) {
                                            r._mu.unlock(), n(e);
                                        });
                                    });
                                }),
                                (eP.prototype.renameSync = function (e, t) {
                                    if (this._mu.isLocked()) throw Error("invalid sync call");
                                    return this._fs.renameSync(e, t);
                                }),
                                (eP.prototype.stat = function (e, t, n) {
                                    var r = this;
                                    this._mu.lock(function () {
                                        r._fs.stat(e, t, function (e, t) {
                                            r._mu.unlock(), n(e, t);
                                        });
                                    });
                                }),
                                (eP.prototype.statSync = function (e, t) {
                                    if (this._mu.isLocked()) throw Error("invalid sync call");
                                    return this._fs.statSync(e, t);
                                }),
                                (eP.prototype.open = function (e, t, n, r) {
                                    var i = this;
                                    this._mu.lock(function () {
                                        i._fs.open(e, t, n, function (e, t) {
                                            i._mu.unlock(), r(e, t);
                                        });
                                    });
                                }),
                                (eP.prototype.openSync = function (e, t, n) {
                                    if (this._mu.isLocked()) throw Error("invalid sync call");
                                    return this._fs.openSync(e, t, n);
                                }),
                                (eP.prototype.unlink = function (e, t) {
                                    var n = this;
                                    this._mu.lock(function () {
                                        n._fs.unlink(e, function (e) {
                                            n._mu.unlock(), t(e);
                                        });
                                    });
                                }),
                                (eP.prototype.unlinkSync = function (e) {
                                    if (this._mu.isLocked()) throw Error("invalid sync call");
                                    return this._fs.unlinkSync(e);
                                }),
                                (eP.prototype.rmdir = function (e, t) {
                                    var n = this;
                                    this._mu.lock(function () {
                                        n._fs.rmdir(e, function (e) {
                                            n._mu.unlock(), t(e);
                                        });
                                    });
                                }),
                                (eP.prototype.rmdirSync = function (e) {
                                    if (this._mu.isLocked()) throw Error("invalid sync call");
                                    return this._fs.rmdirSync(e);
                                }),
                                (eP.prototype.mkdir = function (e, t, n) {
                                    var r = this;
                                    this._mu.lock(function () {
                                        r._fs.mkdir(e, t, function (e) {
                                            r._mu.unlock(), n(e);
                                        });
                                    });
                                }),
                                (eP.prototype.mkdirSync = function (e, t) {
                                    if (this._mu.isLocked()) throw Error("invalid sync call");
                                    return this._fs.mkdirSync(e, t);
                                }),
                                (eP.prototype.readdir = function (e, t) {
                                    var n = this;
                                    this._mu.lock(function () {
                                        n._fs.readdir(e, function (e, r) {
                                            n._mu.unlock(), t(e, r);
                                        });
                                    });
                                }),
                                (eP.prototype.readdirSync = function (e) {
                                    if (this._mu.isLocked()) throw Error("invalid sync call");
                                    return this._fs.readdirSync(e);
                                }),
                                (eP.prototype.exists = function (e, t) {
                                    var n = this;
                                    this._mu.lock(function () {
                                        n._fs.exists(e, function (e) {
                                            n._mu.unlock(), t(e);
                                        });
                                    });
                                }),
                                (eP.prototype.existsSync = function (e) {
                                    if (this._mu.isLocked()) throw Error("invalid sync call");
                                    return this._fs.existsSync(e);
                                }),
                                (eP.prototype.realpath = function (e, t, n) {
                                    var r = this;
                                    this._mu.lock(function () {
                                        r._fs.realpath(e, t, function (e, t) {
                                            r._mu.unlock(), n(e, t);
                                        });
                                    });
                                }),
                                (eP.prototype.realpathSync = function (e, t) {
                                    if (this._mu.isLocked()) throw Error("invalid sync call");
                                    return this._fs.realpathSync(e, t);
                                }),
                                (eP.prototype.truncate = function (e, t, n) {
                                    var r = this;
                                    this._mu.lock(function () {
                                        r._fs.truncate(e, t, function (e) {
                                            r._mu.unlock(), n(e);
                                        });
                                    });
                                }),
                                (eP.prototype.truncateSync = function (e, t) {
                                    if (this._mu.isLocked()) throw Error("invalid sync call");
                                    return this._fs.truncateSync(e, t);
                                }),
                                (eP.prototype.readFile = function (e, t, n, r) {
                                    var i = this;
                                    this._mu.lock(function () {
                                        i._fs.readFile(e, t, n, function (e, t) {
                                            i._mu.unlock(), r(e, t);
                                        });
                                    });
                                }),
                                (eP.prototype.readFileSync = function (e, t, n) {
                                    if (this._mu.isLocked()) throw Error("invalid sync call");
                                    return this._fs.readFileSync(e, t, n);
                                }),
                                (eP.prototype.writeFile = function (e, t, n, r, i, o) {
                                    var s = this;
                                    this._mu.lock(function () {
                                        s._fs.writeFile(e, t, n, r, i, function (e) {
                                            s._mu.unlock(), o(e);
                                        });
                                    });
                                }),
                                (eP.prototype.writeFileSync = function (e, t, n, r, i) {
                                    if (this._mu.isLocked()) throw Error("invalid sync call");
                                    return this._fs.writeFileSync(e, t, n, r, i);
                                }),
                                (eP.prototype.appendFile = function (e, t, n, r, i, o) {
                                    var s = this;
                                    this._mu.lock(function () {
                                        s._fs.appendFile(e, t, n, r, i, function (e) {
                                            s._mu.unlock(), o(e);
                                        });
                                    });
                                }),
                                (eP.prototype.appendFileSync = function (e, t, n, r, i) {
                                    if (this._mu.isLocked()) throw Error("invalid sync call");
                                    return this._fs.appendFileSync(e, t, n, r, i);
                                }),
                                (eP.prototype.chmod = function (e, t, n, r) {
                                    var i = this;
                                    this._mu.lock(function () {
                                        i._fs.chmod(e, t, n, function (e) {
                                            i._mu.unlock(), r(e);
                                        });
                                    });
                                }),
                                (eP.prototype.chmodSync = function (e, t, n) {
                                    if (this._mu.isLocked()) throw Error("invalid sync call");
                                    return this._fs.chmodSync(e, t, n);
                                }),
                                (eP.prototype.chown = function (e, t, n, r, i) {
                                    var o = this;
                                    this._mu.lock(function () {
                                        o._fs.chown(e, t, n, r, function (e) {
                                            o._mu.unlock(), i(e);
                                        });
                                    });
                                }),
                                (eP.prototype.chownSync = function (e, t, n, r) {
                                    if (this._mu.isLocked()) throw Error("invalid sync call");
                                    return this._fs.chownSync(e, t, n, r);
                                }),
                                (eP.prototype.utimes = function (e, t, n, r) {
                                    var i = this;
                                    this._mu.lock(function () {
                                        i._fs.utimes(e, t, n, function (e) {
                                            i._mu.unlock(), r(e);
                                        });
                                    });
                                }),
                                (eP.prototype.utimesSync = function (e, t, n) {
                                    if (this._mu.isLocked()) throw Error("invalid sync call");
                                    return this._fs.utimesSync(e, t, n);
                                }),
                                (eP.prototype.link = function (e, t, n) {
                                    var r = this;
                                    this._mu.lock(function () {
                                        r._fs.link(e, t, function (e) {
                                            r._mu.unlock(), n(e);
                                        });
                                    });
                                }),
                                (eP.prototype.linkSync = function (e, t) {
                                    if (this._mu.isLocked()) throw Error("invalid sync call");
                                    return this._fs.linkSync(e, t);
                                }),
                                (eP.prototype.symlink = function (e, t, n, r) {
                                    var i = this;
                                    this._mu.lock(function () {
                                        i._fs.symlink(e, t, n, function (e) {
                                            i._mu.unlock(), r(e);
                                        });
                                    });
                                }),
                                (eP.prototype.symlinkSync = function (e, t, n) {
                                    if (this._mu.isLocked()) throw Error("invalid sync call");
                                    return this._fs.symlinkSync(e, t, n);
                                }),
                                (eP.prototype.readlink = function (e, t) {
                                    var n = this;
                                    this._mu.lock(function () {
                                        n._fs.readlink(e, function (e, r) {
                                            n._mu.unlock(), t(e, r);
                                        });
                                    });
                                }),
                                (eP.prototype.readlinkSync = function (e) {
                                    if (this._mu.isLocked()) throw Error("invalid sync call");
                                    return this._fs.readlinkSync(e);
                                });
                            var eC = "/.deletedFiles.log";
                            function eF(e) {
                                return b.getFileFlag(e);
                            }
                            var eO = (function (e) {
                                function t(t, n, r, i, o) {
                                    e.call(this, t, n, r, i, o);
                                }
                                return (
                                    e && (t.__proto__ = e),
                                    (t.prototype = Object.create(e && e.prototype)),
                                    (t.prototype.constructor = t),
                                    (t.prototype.sync = function (e) {
                                        var t = this;
                                        this.isDirty()
                                            ? this._fs._syncAsync(this, function (n) {
                                                t.resetDirty(), e(n);
                                            })
                                            : e(null);
                                    }),
                                    (t.prototype.syncSync = function () {
                                        this.isDirty() && (this._fs._syncSync(this), this.resetDirty());
                                    }),
                                    (t.prototype.close = function (e) {
                                        this.sync(e);
                                    }),
                                    (t.prototype.closeSync = function () {
                                        this.syncSync();
                                    }),
                                    t
                                );
                            })(Q),
                                eA = (function (e) {
                                    function t(t, n) {
                                        if (
                                            (e.call(this),
                                                (this._isInitialized = !1),
                                                (this._initializeCallbacks = []),
                                                (this._deletedFiles = {}),
                                                (this._deleteLog = ""),
                                                (this._deleteLogUpdatePending = !1),
                                                (this._deleteLogUpdateNeeded = !1),
                                                (this._deleteLogError = null),
                                                (this._writable = t),
                                                (this._readable = n),
                                                this._writable.isReadOnly())
                                        )
                                            throw new d(c.EINVAL, "Writable file system must be writable.");
                                    }
                                    return (
                                        e && (t.__proto__ = e),
                                        (t.prototype = Object.create(e && e.prototype)),
                                        (t.prototype.constructor = t),
                                        (t.isAvailable = function () {
                                            return !0;
                                        }),
                                        (t.prototype.getOverlayedFileSystems = function () {
                                            return { readable: this._readable, writable: this._writable };
                                        }),
                                        (t.prototype._syncAsync = function (e, t) {
                                            var n = this;
                                            this.createParentDirectoriesAsync(e.getPath(), function (r) {
                                                if (r) return t(r);
                                                n._writable.writeFile(e.getPath(), e.getBuffer(), null, eF("w"), e.getStats().mode, t);
                                            });
                                        }),
                                        (t.prototype._syncSync = function (e) {
                                            this.createParentDirectories(e.getPath()), this._writable.writeFileSync(e.getPath(), e.getBuffer(), null, eF("w"), e.getStats().mode);
                                        }),
                                        (t.prototype.getName = function () {
                                            return eR.Name;
                                        }),
                                        (t.prototype._initialize = function (e) {
                                            var t = this,
                                                n = this._initializeCallbacks,
                                                r = function (e) {
                                                    (t._isInitialized = !e),
                                                        (t._initializeCallbacks = []),
                                                        n.forEach(function (t) {
                                                            return t(e);
                                                        });
                                                };
                                            if (this._isInitialized) return e();
                                            n.push(e),
                                                1 === n.length &&
                                                this._writable.readFile(eC, "utf8", eF("r"), function (e, n) {
                                                    if (e) {
                                                        if (e.errno !== c.ENOENT) return r(e);
                                                    } else t._deleteLog = n;
                                                    t._reparseDeletionLog(), r();
                                                });
                                        }),
                                        (t.prototype.isReadOnly = function () {
                                            return !1;
                                        }),
                                        (t.prototype.supportsSynch = function () {
                                            return this._readable.supportsSynch() && this._writable.supportsSynch();
                                        }),
                                        (t.prototype.supportsLinks = function () {
                                            return !1;
                                        }),
                                        (t.prototype.supportsProps = function () {
                                            return this._readable.supportsProps() && this._writable.supportsProps();
                                        }),
                                        (t.prototype.getDeletionLog = function () {
                                            return this._deleteLog;
                                        }),
                                        (t.prototype.restoreDeletionLog = function (e) {
                                            (this._deleteLog = e), this._reparseDeletionLog(), this.updateLog("");
                                        }),
                                        (t.prototype.rename = function (e, t, n) {
                                            var r = this;
                                            if (this.checkInitAsync(n) && !this.checkPathAsync(e, n) && !this.checkPathAsync(t, n))
                                                return e === eC || t === eC
                                                    ? n(d.EPERM("Cannot rename deletion log."))
                                                    : e === t
                                                        ? n()
                                                        : void this.stat(e, !1, function (i, o) {
                                                            return i
                                                                ? n(i)
                                                                : r.stat(t, !1, function (i, s) {
                                                                    function a(i) {
                                                                        var o = i.shift();
                                                                        if (!o) return n();
                                                                        var s = l.resolve(e, o),
                                                                            c = l.resolve(t, o);
                                                                        r.rename(s, c, function (e) {
                                                                            if (e) return n(e);
                                                                            a(i);
                                                                        });
                                                                    }
                                                                    var u = 511;
                                                                    if (o.isDirectory()) {
                                                                        if (i)
                                                                            return i.errno !== c.ENOENT
                                                                                ? n(i)
                                                                                : r._writable.exists(e, function (i) {
                                                                                    if (i)
                                                                                        return r.createParentDirectoriesAsync(t, function (i) {
                                                                                            return i ? n(i) : r._writable.rename(e, t, n);
                                                                                        });
                                                                                    r.createParentDirectoriesAsync(t, function (i) {
                                                                                        if (i) return n(i);
                                                                                        r._writable.mkdir(t, u, function (t) {
                                                                                            if (t) return n(t);
                                                                                            r.readdir(e, function (t, i) {
                                                                                                if (t) return n(t);
                                                                                                a(i), r.deletePath(e);
                                                                                            });
                                                                                        });
                                                                                    });
                                                                                });
                                                                        if (((u = s.mode), !s.isDirectory())) return n(d.ENOTDIR(t));
                                                                        r.readdir(t, function (i, o) {
                                                                            if (o && o.length) return n(d.ENOTEMPTY(t));
                                                                            r._readable.readdir(e, function (t, i) {
                                                                                if (t) return n(t);
                                                                                a(i), r.deletePath(e);
                                                                            });
                                                                        });
                                                                    }
                                                                    if (s && s.isDirectory()) return n(d.EISDIR(t));
                                                                    r.readFile(e, null, eF("r"), function (i, s) {
                                                                        return i
                                                                            ? n(i)
                                                                            : r.writeFile(t, s, null, eF("w"), o.mode, function (t) {
                                                                                return t ? n(t) : r.unlink(e, n);
                                                                            });
                                                                    });
                                                                });
                                                        });
                                        }),
                                        (t.prototype.renameSync = function (e, t) {
                                            var n = this;
                                            if ((this.checkInitialized(), this.checkPath(e), this.checkPath(t), e === eC || t === eC)) throw d.EPERM("Cannot rename deletion log.");
                                            var r = this.statSync(e, !1);
                                            if (r.isDirectory()) {
                                                if (e === t) return;
                                                var i = 511;
                                                if (this.existsSync(t)) {
                                                    var o = this.statSync(t, !1);
                                                    if (((i = o.mode), !o.isDirectory())) throw d.ENOTDIR(t);
                                                    if (this.readdirSync(t).length > 0) throw d.ENOTEMPTY(t);
                                                }
                                                this._writable.existsSync(e) ? this._writable.renameSync(e, t) : this._writable.existsSync(t) || (this.createParentDirectories(t), this._writable.mkdirSync(t, i)),
                                                    this._readable.existsSync(e) &&
                                                    (this._readable.readdirSync(e).forEach(function (r) {
                                                        n.renameSync(l.resolve(e, r), l.resolve(t, r));
                                                    }),
                                                        this.deletePath(e));
                                            } else {
                                                if (this.existsSync(t) && this.statSync(t, !1).isDirectory()) throw d.EISDIR(t);
                                                this.writeFileSync(t, this.readFileSync(e, null, eF("r")), null, eF("w"), r.mode);
                                            }
                                            e !== t && this.existsSync(e) && this.unlinkSync(e);
                                        }),
                                        (t.prototype.stat = function (e, t, n) {
                                            var r = this;
                                            this.checkInitAsync(n) &&
                                                this._writable.stat(e, t, function (i, o) {
                                                    if (i && i.errno === c.ENOENT) {
                                                        if (r._deletedFiles[e]) return n(d.ENOENT(e));
                                                        r._readable.stat(e, t, function (e, t) {
                                                            t && ((t = w.clone(t)).mode = 146 | t.mode), n(e, t);
                                                        });
                                                    } else n(i, o);
                                                });
                                        }),
                                        (t.prototype.statSync = function (e, t) {
                                            this.checkInitialized();
                                            try {
                                                return this._writable.statSync(e, t);
                                            } catch (r) {
                                                if (this._deletedFiles[e]) throw d.ENOENT(e);
                                                var n = w.clone(this._readable.statSync(e, t));
                                                return (n.mode = 146 | n.mode), n;
                                            }
                                        }),
                                        (t.prototype.open = function (e, t, n, r) {
                                            var i = this;
                                            this.checkInitAsync(r) &&
                                                !this.checkPathAsync(e, r) &&
                                                this.stat(e, !0, function (o, s) {
                                                    if (s)
                                                        switch (t.pathExistsAction()) {
                                                            case h.TRUNCATE_FILE:
                                                                return i.createParentDirectoriesAsync(e, function (o) {
                                                                    if (o) return r(o);
                                                                    i._writable.open(e, t, n, r);
                                                                });
                                                            case h.NOP:
                                                                return i._writable.exists(e, function (o) {
                                                                    o
                                                                        ? i._writable.open(e, t, n, r)
                                                                        : (((s = w.clone(s)).mode = n),
                                                                            i._readable.readFile(e, null, eF("r"), function (n, o) {
                                                                                if (n) return r(n);
                                                                                -1 === s.size && (s.size = o.length), r(null, new eO(i, e, t, s, o));
                                                                            }));
                                                                });
                                                            default:
                                                                return r(d.EEXIST(e));
                                                        }
                                                    else if (t.pathNotExistsAction() === h.CREATE_FILE)
                                                        return i.createParentDirectoriesAsync(e, function (o) {
                                                            return o ? r(o) : i._writable.open(e, t, n, r);
                                                        });
                                                    else return r(d.ENOENT(e));
                                                });
                                        }),
                                        (t.prototype.openSync = function (e, t, n) {
                                            if ((this.checkInitialized(), this.checkPath(e), e === eC)) throw d.EPERM("Cannot open deletion log.");
                                            if (this.existsSync(e))
                                                switch (t.pathExistsAction()) {
                                                    case h.TRUNCATE_FILE:
                                                        return this.createParentDirectories(e), this._writable.openSync(e, t, n);
                                                    case h.NOP:
                                                        if (this._writable.existsSync(e)) return this._writable.openSync(e, t, n);
                                                        var r = this._readable.readFileSync(e, null, eF("r")),
                                                            i = w.clone(this._readable.statSync(e, !1));
                                                        return (i.mode = n), new eO(this, e, t, i, r);
                                                    default:
                                                        throw d.EEXIST(e);
                                                }
                                            else if (t.pathNotExistsAction() === h.CREATE_FILE) return this.createParentDirectories(e), this._writable.openSync(e, t, n);
                                            else throw d.ENOENT(e);
                                        }),
                                        (t.prototype.unlink = function (e, t) {
                                            var n = this;
                                            this.checkInitAsync(t) &&
                                                !this.checkPathAsync(e, t) &&
                                                this.exists(e, function (r) {
                                                    if (!r) return t(d.ENOENT(e));
                                                    n._writable.exists(e, function (r) {
                                                        if (r)
                                                            return n._writable.unlink(e, function (r) {
                                                                if (r) return t(r);
                                                                n.exists(e, function (r) {
                                                                    r && n.deletePath(e), t(null);
                                                                });
                                                            });
                                                        n.deletePath(e), t(null);
                                                    });
                                                });
                                        }),
                                        (t.prototype.unlinkSync = function (e) {
                                            if ((this.checkInitialized(), this.checkPath(e), !this.existsSync(e))) throw d.ENOENT(e);
                                            this._writable.existsSync(e) && this._writable.unlinkSync(e), this.existsSync(e) && this.deletePath(e);
                                        }),
                                        (t.prototype.rmdir = function (e, t) {
                                            var n = this;
                                            if (this.checkInitAsync(t)) {
                                                var r = function () {
                                                    n.readdir(e, function (r, i) {
                                                        return r ? t(r) : i.length ? t(d.ENOTEMPTY(e)) : (n.deletePath(e), void t(null));
                                                    });
                                                };
                                                this.exists(e, function (i) {
                                                    if (!i) return t(d.ENOENT(e));
                                                    n._writable.exists(e, function (i) {
                                                        i
                                                            ? n._writable.rmdir(e, function (i) {
                                                                if (i) return t(i);
                                                                n._readable.exists(e, function (e) {
                                                                    e ? r() : t();
                                                                });
                                                            })
                                                            : r();
                                                    });
                                                });
                                            }
                                        }),
                                        (t.prototype.rmdirSync = function (e) {
                                            if ((this.checkInitialized(), !this.existsSync(e))) throw d.ENOENT(e);
                                            if ((this._writable.existsSync(e) && this._writable.rmdirSync(e), this.existsSync(e))) {
                                                if (this.readdirSync(e).length > 0) throw d.ENOTEMPTY(e);
                                                this.deletePath(e);
                                            }
                                        }),
                                        (t.prototype.mkdir = function (e, t, n) {
                                            var r = this;
                                            this.checkInitAsync(n) &&
                                                this.exists(e, function (i) {
                                                    if (i) return n(d.EEXIST(e));
                                                    r.createParentDirectoriesAsync(e, function (i) {
                                                        if (i) return n(i);
                                                        r._writable.mkdir(e, t, n);
                                                    });
                                                });
                                        }),
                                        (t.prototype.mkdirSync = function (e, t) {
                                            if ((this.checkInitialized(), this.existsSync(e))) throw d.EEXIST(e);
                                            this.createParentDirectories(e), this._writable.mkdirSync(e, t);
                                        }),
                                        (t.prototype.readdir = function (e, t) {
                                            var n = this;
                                            this.checkInitAsync(t) &&
                                                this.stat(e, !0, function (r, i) {
                                                    return r
                                                        ? t(r)
                                                        : i.isDirectory()
                                                            ? void n._writable.readdir(e, function (r, i) {
                                                                if (r && "ENOENT" !== r.code) return t(r);
                                                                (!r && i) || (i = []),
                                                                    n._readable.readdir(e, function (r, o) {
                                                                        (!r && o) || (o = []);
                                                                        var s = {};
                                                                        t(
                                                                            null,
                                                                            i
                                                                                .concat(
                                                                                    o.filter(function (t) {
                                                                                        return !n._deletedFiles[e + ("/" === e ? "" : "/") + t];
                                                                                    })
                                                                                )
                                                                                .filter(function (e) {
                                                                                    var t = !s[e];
                                                                                    return (s[e] = !0), t;
                                                                                })
                                                                        );
                                                                    });
                                                            })
                                                            : t(d.ENOTDIR(e));
                                                });
                                        }),
                                        (t.prototype.readdirSync = function (e) {
                                            var t = this;
                                            if ((this.checkInitialized(), !this.statSync(e, !1).isDirectory())) throw d.ENOTDIR(e);
                                            var n = [];
                                            try {
                                                n = n.concat(this._writable.readdirSync(e));
                                            } catch (e) { }
                                            try {
                                                n = n.concat(
                                                    this._readable.readdirSync(e).filter(function (n) {
                                                        return !t._deletedFiles[e + ("/" === e ? "" : "/") + n];
                                                    })
                                                );
                                            } catch (e) { }
                                            var r = {};
                                            return n.filter(function (e) {
                                                var t = !r[e];
                                                return (r[e] = !0), t;
                                            });
                                        }),
                                        (t.prototype.exists = function (e, t) {
                                            var n = this;
                                            this.checkInitialized(),
                                                this._writable.exists(e, function (r) {
                                                    if (r) return t(!0);
                                                    n._readable.exists(e, function (r) {
                                                        t(r && !0 !== n._deletedFiles[e]);
                                                    });
                                                });
                                        }),
                                        (t.prototype.existsSync = function (e) {
                                            return this.checkInitialized(), this._writable.existsSync(e) || (this._readable.existsSync(e) && !0 !== this._deletedFiles[e]);
                                        }),
                                        (t.prototype.chmod = function (e, t, n, r) {
                                            var i = this;
                                            this.checkInitAsync(r) &&
                                                this.operateOnWritableAsync(e, function (o) {
                                                    if (o) return r(o);
                                                    i._writable.chmod(e, t, n, r);
                                                });
                                        }),
                                        (t.prototype.chmodSync = function (e, t, n) {
                                            var r = this;
                                            this.checkInitialized(),
                                                this.operateOnWritable(e, function () {
                                                    r._writable.chmodSync(e, t, n);
                                                });
                                        }),
                                        (t.prototype.chown = function (e, t, n, r, i) {
                                            var o = this;
                                            this.checkInitAsync(i) &&
                                                this.operateOnWritableAsync(e, function (s) {
                                                    if (s) return i(s);
                                                    o._writable.chown(e, t, n, r, i);
                                                });
                                        }),
                                        (t.prototype.chownSync = function (e, t, n, r) {
                                            var i = this;
                                            this.checkInitialized(),
                                                this.operateOnWritable(e, function () {
                                                    i._writable.chownSync(e, t, n, r);
                                                });
                                        }),
                                        (t.prototype.utimes = function (e, t, n, r) {
                                            var i = this;
                                            this.checkInitAsync(r) &&
                                                this.operateOnWritableAsync(e, function (o) {
                                                    if (o) return r(o);
                                                    i._writable.utimes(e, t, n, r);
                                                });
                                        }),
                                        (t.prototype.utimesSync = function (e, t, n) {
                                            var r = this;
                                            this.checkInitialized(),
                                                this.operateOnWritable(e, function () {
                                                    r._writable.utimesSync(e, t, n);
                                                });
                                        }),
                                        (t.prototype.deletePath = function (e) {
                                            (this._deletedFiles[e] = !0), this.updateLog("d" + e + "\n");
                                        }),
                                        (t.prototype.updateLog = function (e) {
                                            var t = this;
                                            (this._deleteLog += e),
                                                this._deleteLogUpdatePending
                                                    ? (this._deleteLogUpdateNeeded = !0)
                                                    : ((this._deleteLogUpdatePending = !0),
                                                        this._writable.writeFile(eC, this._deleteLog, "utf8", b.getFileFlag("w"), 420, function (e) {
                                                            (t._deleteLogUpdatePending = !1), e ? (t._deleteLogError = e) : t._deleteLogUpdateNeeded && ((t._deleteLogUpdateNeeded = !1), t.updateLog(""));
                                                        }));
                                        }),
                                        (t.prototype._reparseDeletionLog = function () {
                                            var e = this;
                                            (this._deletedFiles = {}),
                                                this._deleteLog.split("\n").forEach(function (t) {
                                                    e._deletedFiles[t.slice(1)] = "d" === t.slice(0, 1);
                                                });
                                        }),
                                        (t.prototype.checkInitialized = function () {
                                            if (!this._isInitialized) throw new d(c.EPERM, "OverlayFS is not initialized. Please initialize OverlayFS using its initialize() method before using it.");
                                            if (null !== this._deleteLogError) {
                                                var e = this._deleteLogError;
                                                throw ((this._deleteLogError = null), e);
                                            }
                                        }),
                                        (t.prototype.checkInitAsync = function (e) {
                                            if (!this._isInitialized) return e(new d(c.EPERM, "OverlayFS is not initialized. Please initialize OverlayFS using its initialize() method before using it.")), !1;
                                            if (null !== this._deleteLogError) {
                                                var t = this._deleteLogError;
                                                return (this._deleteLogError = null), e(t), !1;
                                            }
                                            return !0;
                                        }),
                                        (t.prototype.checkPath = function (e) {
                                            if (e === eC) throw d.EPERM(e);
                                        }),
                                        (t.prototype.checkPathAsync = function (e, t) {
                                            return e === eC && (t(d.EPERM(e)), !0);
                                        }),
                                        (t.prototype.createParentDirectoriesAsync = function (e, t) {
                                            var n = l.dirname(e),
                                                r = [],
                                                i = this;
                                            this._writable.stat(n, !1, function e(o, s) {
                                                o
                                                    ? "/" === n
                                                        ? t(new d(c.EBUSY, "Invariant failed: root does not exist!"))
                                                        : (r.push(n), (n = l.dirname(n)), i._writable.stat(n, !1, e))
                                                    : (function e() {
                                                        if (!r.length) return t();
                                                        var n = r.pop();
                                                        i._readable.stat(n, !1, function (r, o) {
                                                            if (!o) return t();
                                                            i._writable.mkdir(n, o.mode, function (n) {
                                                                if (n) return t(n);
                                                                e();
                                                            });
                                                        });
                                                    })();
                                            });
                                        }),
                                        (t.prototype.createParentDirectories = function (e) {
                                            for (var t = this, n = l.dirname(e), r = []; !this._writable.existsSync(n);) r.push(n), (n = l.dirname(n));
                                            (r = r.reverse()).forEach(function (e) {
                                                t._writable.mkdirSync(e, t.statSync(e, !1).mode);
                                            });
                                        }),
                                        (t.prototype.operateOnWritable = function (e, t) {
                                            if (!this.existsSync(e)) throw d.ENOENT(e);
                                            this._writable.existsSync(e) || this.copyToWritable(e), t();
                                        }),
                                        (t.prototype.operateOnWritableAsync = function (e, t) {
                                            var n = this;
                                            this.exists(e, function (r) {
                                                if (!r) return t(d.ENOENT(e));
                                                n._writable.exists(e, function (r) {
                                                    if (!r) return n.copyToWritableAsync(e, t);
                                                    t();
                                                });
                                            });
                                        }),
                                        (t.prototype.copyToWritable = function (e) {
                                            var t = this.statSync(e, !1);
                                            t.isDirectory() ? this._writable.mkdirSync(e, t.mode) : this.writeFileSync(e, this._readable.readFileSync(e, null, eF("r")), null, eF("w"), this.statSync(e, !1).mode);
                                        }),
                                        (t.prototype.copyToWritableAsync = function (e, t) {
                                            var n = this;
                                            this.stat(e, !1, function (r, i) {
                                                return r
                                                    ? t(r)
                                                    : i.isDirectory()
                                                        ? n._writable.mkdir(e, i.mode, t)
                                                        : void n._readable.readFile(e, null, eF("r"), function (r, o) {
                                                            if (r) return t(r);
                                                            n.writeFile(e, o, null, eF("w"), i.mode, t);
                                                        });
                                            });
                                        }),
                                        t
                                    );
                                })(K),
                                eR = (function (e) {
                                    function t(t, n) {
                                        e.call(this, new eA(t, n));
                                    }
                                    return (
                                        e && (t.__proto__ = e),
                                        (t.prototype = Object.create(e && e.prototype)),
                                        (t.prototype.constructor = t),
                                        (t.Create = function (e, n) {
                                            try {
                                                var r = new t(e.writable, e.readable);
                                                r._initialize(function (e) {
                                                    n(e, r);
                                                });
                                            } catch (e) {
                                                n(e);
                                            }
                                        }),
                                        (t.isAvailable = function () {
                                            return eA.isAvailable();
                                        }),
                                        (t.prototype.getOverlayedFileSystems = function () {
                                            return e.prototype.getFSUnlocked.call(this).getOverlayedFileSystems();
                                        }),
                                        (t.prototype.unwrap = function () {
                                            return e.prototype.getFSUnlocked.call(this);
                                        }),
                                        (t.prototype._initialize = function (t) {
                                            e.prototype.getFSUnlocked.call(this)._initialize(t);
                                        }),
                                        t
                                    );
                                })(eP);
                            (eR.Name = "OverlayFS"),
                                (eR.Options = {
                                    writable: { type: "object", description: "The file system to write modified files to." },
                                    readable: { type: "object", description: "The file system that initially populates this file system." },
                                });
                            var eN = function (e, t, n) {
                                var r = new XMLHttpRequest();
                                r.open("GET", e, !0);
                                var o = !0;
                                switch (t) {
                                    case "buffer":
                                        r.responseType = "arraybuffer";
                                        break;
                                    case "json":
                                        try {
                                            (r.responseType = "json"), (o = "json" === r.responseType);
                                        } catch (e) {
                                            o = !1;
                                        }
                                        break;
                                    default:
                                        return n(new d(c.EINVAL, "Invalid download type: " + t));
                                }
                                (r.onreadystatechange = function (e) {
                                    if (4 === r.readyState) {
                                        if (200 !== r.status) return n(new d(c.EIO, "XHR error: response returned code " + r.status));
                                        switch (t) {
                                            case "buffer":
                                                return n(null, r.response ? i.from(r.response) : q());
                                            case "json":
                                                return n(null, o ? r.response : JSON.parse(r.responseText));
                                        }
                                    }
                                }),
                                    r.send();
                            },
                                eB = function (e, t) {
                                    var n = new XMLHttpRequest();
                                    n.open("GET", e, !1);
                                    var r = null,
                                        o = null;
                                    if (
                                        (n.overrideMimeType("text/plain; charset=x-user-defined"),
                                            (n.onreadystatechange = function (e) {
                                                if (4 === n.readyState) {
                                                    if (200 !== n.status) return void (o = new d(c.EIO, "XHR error: response returned code " + n.status));
                                                    switch (t) {
                                                        case "buffer":
                                                            var s = n.responseText;
                                                            r = i.alloc(s.length);
                                                            for (var a = 0; a < s.length; a++) r[a] = s.charCodeAt(a);
                                                            return;
                                                        case "json":
                                                            return void (r = JSON.parse(n.responseText));
                                                    }
                                                }
                                            }),
                                            n.send(),
                                            o)
                                    )
                                        throw o;
                                    return r;
                                };
                            function eL(e) {
                                var t,
                                    n,
                                    r = -1;
                                return (
                                    (t = function (e, t) {
                                        if (e) throw e;
                                        r = t;
                                    }),
                                    (n = new XMLHttpRequest()).open("HEAD", e, !1),
                                    (n.onreadystatechange = function (e) {
                                        if (4 === n.readyState) {
                                            if (200 !== n.status) return t(new d(c.EIO, "XHR HEAD error: response returned code " + n.status));
                                            try {
                                                var r = n.getResponseHeader("Content-Length");
                                                return t(null, r ? parseInt(r, 10) : -1);
                                            } catch (e) {
                                                return t(new d(c.EIO, "XHR HEAD error: Could not read content-length."));
                                            }
                                        }
                                    }),
                                    n.send(),
                                    r
                                );
                            }
                            var eD = { cache: "no-cache", keepalive: !1, mode: "cors", priority: "high", referrerPolicy: "no-referrer", window: null },
                                eU = { cache: "no-cache", keepalive: !1, method: "HEAD", mode: "no-cors", priority: "high", referrerPolicy: "no-referrer", window: null };
                            function eM(e, t, n) {
                                var r;
                                try {
                                    r = window.fetch(e, eD);
                                } catch (e) {
                                    return n(new d(c.EINVAL, e.message));
                                }
                                r.then(function (e) {
                                    if (!e.ok) return n(new d(c.EIO, "fetch error: response returned code " + e.status));
                                    switch (t) {
                                        case "buffer":
                                            e.arrayBuffer()
                                                .then(function (e) {
                                                    return n(null, i.from(e));
                                                })
                                                .catch(function (e) {
                                                    return n(new d(c.EIO, e.message));
                                                });
                                            break;
                                        case "json":
                                            e.json()
                                                .then(function (e) {
                                                    return n(null, e);
                                                })
                                                .catch(function (e) {
                                                    return n(new d(c.EIO, e.message));
                                                });
                                            break;
                                        default:
                                            n(new d(c.EINVAL, "Invalid download type: " + t));
                                    }
                                }).catch(function (e) {
                                    return n(new d(c.EIO, e.message));
                                });
                            }
                            function ez(e, t) {
                                window
                                    .fetch(e, eU)
                                    .then(function (e) {
                                        if (e.ok) {
                                            var n = e.headers.get("Content-Length");
                                            return t(null, n ? parseInt(n, 10) : -1);
                                        }
                                        return t(new d(c.EIO, "fetch HEAD error: response returned code " + e.status));
                                    })
                                    .catch(function (e) {
                                        return t(new d(c.EIO, e.message));
                                    });
                            }
                            var eV = function () {
                                (this._index = {}), this.addPath("/", new eW());
                            };
                            (eV.fromListing = function (e) {
                                var t = new eV(),
                                    n = new eW();
                                t._index["/"] = n;
                                for (var r = [["", e, n]]; r.length > 0;) {
                                    var i = void 0,
                                        o = r.pop(),
                                        s = o[0],
                                        a = o[1],
                                        c = o[2];
                                    for (var u in a)
                                        if (a.hasOwnProperty(u)) {
                                            var l = a[u],
                                                p = s + "/" + u;
                                            l ? ((t._index[p] = i = new eW()), r.push([p, l, i])) : (i = new e$(new w(y.FILE, -1, 365))), c && (c._ls[u] = i);
                                        }
                                }
                                return t;
                            }),
                                (eV.prototype.fileIterator = function (e) {
                                    for (var t in this._index)
                                        if (this._index.hasOwnProperty(t))
                                            for (var n = this._index[t], r = 0, i = n.getListing(); r < i.length; r += 1) {
                                                var o = i[r],
                                                    s = n.getItem(o);
                                                eH(s) && e(s.getData());
                                            }
                                }),
                                (eV.prototype.addPath = function (e, t) {
                                    if (!t) throw Error("Inode must be specified");
                                    if ("/" !== e[0]) throw Error("Path must be absolute, got: " + e);
                                    if (this._index.hasOwnProperty(e)) return this._index[e] === t;
                                    var n = this._split_path(e),
                                        r = n[0],
                                        i = n[1],
                                        o = this._index[r];
                                    return !(void 0 === o && "/" !== e && ((o = new eW()), !this.addPath(r, o))) && !("/" !== e && !o.addItem(i, t)) && (eG(t) && (this._index[e] = t), !0);
                                }),
                                (eV.prototype.addPathFast = function (e, t) {
                                    var n = e.lastIndexOf("/"),
                                        r = 0 === n ? "/" : e.substring(0, n),
                                        i = e.substring(n + 1),
                                        o = this._index[r];
                                    return void 0 === o && ((o = new eW()), this.addPathFast(r, o)), !!o.addItem(i, t) && (t.isDir() && (this._index[e] = t), !0);
                                }),
                                (eV.prototype.removePath = function (e) {
                                    var t = this._split_path(e),
                                        n = t[0],
                                        r = t[1],
                                        i = this._index[n];
                                    if (void 0 === i) return null;
                                    var o = i.remItem(r);
                                    if (null === o) return null;
                                    if (eG(o)) {
                                        for (var s = 0, a = o.getListing(); s < a.length; s += 1) {
                                            var c = a[s];
                                            this.removePath(e + "/" + c);
                                        }
                                        "/" !== e && delete this._index[e];
                                    }
                                    return o;
                                }),
                                (eV.prototype.ls = function (e) {
                                    var t = this._index[e];
                                    return void 0 === t ? null : t.getListing();
                                }),
                                (eV.prototype.getInode = function (e) {
                                    var t = this._split_path(e),
                                        n = t[0],
                                        r = t[1],
                                        i = this._index[n];
                                    return void 0 === i ? null : n === e ? i : i.getItem(r);
                                }),
                                (eV.prototype._split_path = function (e) {
                                    var t = l.dirname(e);
                                    return [t, e.substr(t.length + ("/" === t ? 0 : 1))];
                                });
                            var e$ = function (e) {
                                this.data = e;
                            };
                            (e$.prototype.isFile = function () {
                                return !0;
                            }),
                                (e$.prototype.isDir = function () {
                                    return !1;
                                }),
                                (e$.prototype.getData = function () {
                                    return this.data;
                                }),
                                (e$.prototype.setData = function (e) {
                                    this.data = e;
                                });
                            var eW = function (e) {
                                void 0 === e && (e = null), (this.data = e), (this._ls = {});
                            };
                            function eH(e) {
                                return !!e && e.isFile();
                            }
                            function eG(e) {
                                return !!e && e.isDir();
                            }
                            (eW.prototype.isFile = function () {
                                return !1;
                            }),
                                (eW.prototype.isDir = function () {
                                    return !0;
                                }),
                                (eW.prototype.getData = function () {
                                    return this.data;
                                }),
                                (eW.prototype.getStats = function () {
                                    return new w(y.DIRECTORY, 4096, 365);
                                }),
                                (eW.prototype.getListing = function () {
                                    return Object.keys(this._ls);
                                }),
                                (eW.prototype.getItem = function (e) {
                                    return this._ls[e] || null;
                                }),
                                (eW.prototype.addItem = function (e, t) {
                                    return !(e in this._ls) && ((this._ls[e] = t), !0);
                                }),
                                (eW.prototype.remItem = function (e) {
                                    var t = this._ls[e];
                                    return void 0 === t ? null : (delete this._ls[e], t);
                                });
                            var eq = (function (e) {
                                function t(t, n) {
                                    void 0 === n && (n = ""),
                                        e.call(this),
                                        n.length > 0 && "/" !== n.charAt(n.length - 1) && (n += "/"),
                                        (this.prefixUrl = n),
                                        (this._index = eV.fromListing(t)),
                                        (this._requestFileAsyncInternal = eM),
                                        (this._requestFileSizeAsyncInternal = ez),
                                        (this._requestFileSyncInternal = eB),
                                        (this._requestFileSizeSyncInternal = eL);
                                }
                                return (
                                    e && (t.__proto__ = e),
                                    (t.prototype = Object.create(e && e.prototype)),
                                    (t.prototype.constructor = t),
                                    (t.Create = function (e, n) {
                                        void 0 === e.index && (e.index = "index.json"),
                                            "string" == typeof e.index
                                                ? eN(e.index, "json", function (r, i) {
                                                    r ? n(r) : n(null, new t(i, e.baseUrl));
                                                })
                                                : n(null, new t(e.index, e.baseUrl));
                                    }),
                                    (t.isAvailable = function () {
                                        return !0;
                                    }),
                                    (t.prototype.empty = function () {
                                        this._index.fileIterator(function (e) {
                                            e.fileData = null;
                                        });
                                    }),
                                    (t.prototype.getName = function () {
                                        return t.Name;
                                    }),
                                    (t.prototype.diskSpace = function (e, t) {
                                        t(0, 0);
                                    }),
                                    (t.prototype.isReadOnly = function () {
                                        return !0;
                                    }),
                                    (t.prototype.supportsLinks = function () {
                                        return !1;
                                    }),
                                    (t.prototype.supportsProps = function () {
                                        return !1;
                                    }),
                                    (t.prototype.supportsSynch = function () {
                                        return !0;
                                    }),
                                    (t.prototype.preloadFile = function (e, t) {
                                        var n = this._index.getInode(e);
                                        if (!eH(n)) throw d.EISDIR(e);
                                        if (null === n) throw d.ENOENT(e);
                                        var r = n.getData();
                                        (r.size = t.length), (r.fileData = t);
                                    }),
                                    (t.prototype.stat = function (e, t, n) {
                                        var r,
                                            i = this._index.getInode(e);
                                        if (null === i) return n(d.ENOENT(e));
                                        eH(i)
                                            ? ((r = i.getData()),
                                                !t && r.size < 0
                                                    ? this._requestFileSizeAsync(e, function (e, t) {
                                                        if (e) return n(e);
                                                        (r.size = t), n(null, w.clone(r));
                                                    })
                                                    : n(null, w.clone(r)))
                                            : eG(i)
                                                ? n(null, (r = i.getStats()))
                                                : n(d.FileError(c.EINVAL, e));
                                    }),
                                    (t.prototype.statSync = function (e, t) {
                                        var n,
                                            r = this._index.getInode(e);
                                        if (null === r) throw d.ENOENT(e);
                                        if (eH(r)) (n = r.getData()).size < 0 && (n.size = this._requestFileSizeSync(e));
                                        else {
                                            if (!eG(r)) throw d.FileError(c.EINVAL, e);
                                            n = r.getStats();
                                        }
                                        return n;
                                    }),
                                    (t.prototype.open = function (e, t, n, r) {
                                        if (t.isWriteable()) return r(new d(c.EPERM, e));
                                        var i = this,
                                            o = this._index.getInode(e);
                                        if (null === o) return r(d.ENOENT(e));
                                        if (!eH(o)) return r(d.EISDIR(e));
                                        var s = o.getData();
                                        switch (t.pathExistsAction()) {
                                            case h.THROW_EXCEPTION:
                                            case h.TRUNCATE_FILE:
                                                return r(d.EEXIST(e));
                                            case h.NOP:
                                                if (s.fileData) return r(null, new ee(i, e, t, w.clone(s), s.fileData));
                                                this._requestFileAsync(e, "buffer", function (n, o) {
                                                    return n ? r(n) : ((s.size = o.length), (s.fileData = o), r(null, new ee(i, e, t, w.clone(s), o)));
                                                });
                                                break;
                                            default:
                                                return r(new d(c.EINVAL, "Invalid FileMode object."));
                                        }
                                    }),
                                    (t.prototype.openSync = function (e, t, n) {
                                        if (t.isWriteable()) throw new d(c.EPERM, e);
                                        var r = this._index.getInode(e);
                                        if (null === r) throw d.ENOENT(e);
                                        if (!eH(r)) throw d.EISDIR(e);
                                        var i = r.getData();
                                        switch (t.pathExistsAction()) {
                                            case h.THROW_EXCEPTION:
                                            case h.TRUNCATE_FILE:
                                                throw d.EEXIST(e);
                                            case h.NOP:
                                                if (i.fileData) return new ee(this, e, t, w.clone(i), i.fileData);
                                                var o = this._requestFileSync(e, "buffer");
                                                return (i.size = o.length), (i.fileData = o), new ee(this, e, t, w.clone(i), o);
                                            default:
                                                throw new d(c.EINVAL, "Invalid FileMode object.");
                                        }
                                    }),
                                    (t.prototype.readdir = function (e, t) {
                                        try {
                                            t(null, this.readdirSync(e));
                                        } catch (e) {
                                            t(e);
                                        }
                                    }),
                                    (t.prototype.readdirSync = function (e) {
                                        var t = this._index.getInode(e);
                                        if (null === t) throw d.ENOENT(e);
                                        if (eG(t)) return t.getListing();
                                        throw d.ENOTDIR(e);
                                    }),
                                    (t.prototype.readFile = function (e, t, n, r) {
                                        var i = r;
                                        this.open(e, n, 420, function (e, n) {
                                            if (e) return r(e);
                                            r = function (e, t) {
                                                n.close(function (n) {
                                                    return e || (e = n), i(e, t);
                                                });
                                            };
                                            var o = n.getBuffer();
                                            null === t
                                                ? r(e, H(o))
                                                : (function (e, t, n) {
                                                    try {
                                                        n(null, e.toString(t));
                                                    } catch (e) {
                                                        n(e);
                                                    }
                                                })(o, t, r);
                                        });
                                    }),
                                    (t.prototype.readFileSync = function (e, t, n) {
                                        var r = this.openSync(e, n, 420);
                                        try {
                                            var i = r.getBuffer();
                                            return null === t ? H(i) : i.toString(t);
                                        } finally {
                                            r.closeSync();
                                        }
                                    }),
                                    (t.prototype._getHTTPPath = function (e) {
                                        return "/" === e.charAt(0) && (e = e.slice(1)), this.prefixUrl + e;
                                    }),
                                    (t.prototype._requestFileAsync = function (e, t, n) {
                                        this._requestFileAsyncInternal(this._getHTTPPath(e), t, n);
                                    }),
                                    (t.prototype._requestFileSync = function (e, t) {
                                        return this._requestFileSyncInternal(this._getHTTPPath(e), t);
                                    }),
                                    (t.prototype._requestFileSizeAsync = function (e, t) {
                                        this._requestFileSizeAsyncInternal(this._getHTTPPath(e), t);
                                    }),
                                    (t.prototype._requestFileSizeSync = function (e) {
                                        return this._requestFileSizeSyncInternal(this._getHTTPPath(e));
                                    }),
                                    t
                                );
                            })(K);
                            (eq.Name = "HTTPRequest"),
                                (eq.Options = {
                                    index: {
                                        type: ["string", "object"],
                                        optional: !0,
                                        description: "URL to a file index as a JSON file or the file index object itself, generated with the make_http_index script. Defaults to `index.json`.",
                                    },
                                    baseUrl: { type: "string", optional: !0, description: "Used as the URL prefix for fetched files. Default: Fetch files relative to the index." },
                                });
                            var eY = { InMemory: eh, IndexedDB: ev, MountableFileSystem: eS, OverlayFS: eR, HTTPRequest: eq };
                            function eK(e) {
                                switch (e) {
                                    case "fs":
                                        return D;
                                    case "path":
                                        return l;
                                    case "buffer":
                                        return u;
                                    case "process":
                                        return o;
                                    case "bfs_utils":
                                        return Y;
                                    default:
                                        return eY[e];
                                }
                            }
                            function eJ(e) {
                                return D.initialize(e);
                            }
                            function eX(e, t) {
                                var n = e.fs;
                                if (!n) return t(new d(c.EPERM, 'Missing "fs" property on configuration object.'));
                                var r = e.options,
                                    i = 0,
                                    o = !1;
                                function s() {
                                    if (!o) {
                                        o = !0;
                                        var e = eY[n];
                                        e ? e.Create(r, t) : t(new d(c.EPERM, "File system " + n + " is not available in BrowserFS."));
                                    }
                                }
                                if (null !== r && "object" == typeof r) {
                                    var a = !1;
                                    Object.keys(r)
                                        .filter(function (e) {
                                            return "fs" !== e;
                                        })
                                        .forEach(function (e) {
                                            var n = r[e];
                                            null !== n &&
                                                "object" == typeof n &&
                                                n.fs &&
                                                (i++,
                                                    eX(n, function (n, c) {
                                                        (i--, n) ? o || ((o = !0), t(n)) : ((r[e] = c), 0 === i && a && s());
                                                    }));
                                        }),
                                        (a = !0);
                                }
                                0 === i && s();
                            }
                            o.initializeTTYs && o.initializeTTYs(),
                                (t.BFSRequire = eK),
                                (t.Errors = m),
                                (t.FileSystem = eY),
                                (t.configure = function (e, t) {
                                    eX(e, function (e, n) {
                                        n ? (eJ(n), t()) : t(e);
                                    });
                                }),
                                (t.getFileSystem = eX),
                                (t.initialize = eJ),
                                (t.install = function (e) {
                                    (e.Buffer = i), (e.process = o);
                                    var t = e.require ? e.require : null;
                                    e.require = function (e) {
                                        return eK(e) || t.apply(null, Array.prototype.slice.call(arguments, 0));
                                    };
                                }),
                                (t.registerFileSystem = function (e, t) {
                                    eY[e] = t;
                                });
                        }.call(this, n(0)));
                    },
                    function (e, t, n) {
                        (function (e) {
                              /*!
                               * The buffer module from node.js, for the browser.
                               *
                               * @author   Feross Aboukhadijeh <http://feross.org>
                               * @license  MIT
                               */ var r = n(3),
                                i = n(4),
                                o = n(5);
                            function s() {
                                return c.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
                            }
                            function a(e, t) {
                                if (s() < t) throw RangeError("Invalid typed array length");
                                return c.TYPED_ARRAY_SUPPORT ? ((e = new Uint8Array(t)).__proto__ = c.prototype) : (null === e && (e = new c(t)), (e.length = t)), e;
                            }
                            function c(e, t, n) {
                                if (!(c.TYPED_ARRAY_SUPPORT || this instanceof c)) return new c(e, t, n);
                                if ("number" == typeof e) {
                                    if ("string" == typeof t) throw Error("If encoding is specified then the first argument must be a string");
                                    return p(this, e);
                                }
                                return u(this, e, t, n);
                            }
                            function u(e, t, n, r) {
                                if ("number" == typeof t) throw TypeError('"value" argument must not be a number');
                                return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer
                                    ? (function (e, t, n, r) {
                                        if ((t.byteLength, n < 0 || t.byteLength < n)) throw RangeError("'offset' is out of bounds");
                                        if (t.byteLength < n + (r || 0)) throw RangeError("'length' is out of bounds");
                                        return (
                                            (t = void 0 === n && void 0 === r ? new Uint8Array(t) : void 0 === r ? new Uint8Array(t, n) : new Uint8Array(t, n, r)),
                                            c.TYPED_ARRAY_SUPPORT ? ((e = t).__proto__ = c.prototype) : (e = f(e, t)),
                                            e
                                        );
                                    })(e, t, n, r)
                                    : "string" == typeof t
                                        ? (function (e, t, n) {
                                            if ((("string" == typeof n && "" !== n) || (n = "utf8"), !c.isEncoding(n))) throw TypeError('"encoding" must be a valid string encoding');
                                            var r = 0 | d(t, n),
                                                i = (e = a(e, r)).write(t, n);
                                            return i !== r && (e = e.slice(0, i)), e;
                                        })(e, t, n)
                                        : (function (e, t) {
                                            if (c.isBuffer(t)) {
                                                var n,
                                                    r = 0 | h(t.length);
                                                return 0 === (e = a(e, r)).length || t.copy(e, 0, 0, r), e;
                                            }
                                            if (t) {
                                                if (("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer) || "length" in t) return "number" != typeof t.length || (n = t.length) != n ? a(e, 0) : f(e, t);
                                                if ("Buffer" === t.type && o(t.data)) return f(e, t.data);
                                            }
                                            throw TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
                                        })(e, t);
                            }
                            function l(e) {
                                if ("number" != typeof e) throw TypeError('"size" argument must be a number');
                                if (e < 0) throw RangeError('"size" argument must not be negative');
                            }
                            function p(e, t) {
                                if ((l(t), (e = a(e, t < 0 ? 0 : 0 | h(t))), !c.TYPED_ARRAY_SUPPORT)) for (var n = 0; n < t; ++n) e[n] = 0;
                                return e;
                            }
                            function f(e, t) {
                                var n = t.length < 0 ? 0 : 0 | h(t.length);
                                e = a(e, n);
                                for (var r = 0; r < n; r += 1) e[r] = 255 & t[r];
                                return e;
                            }
                            function h(e) {
                                if (e >= s()) throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + s().toString(16) + " bytes");
                                return 0 | e;
                            }
                            function d(e, t) {
                                if (c.isBuffer(e)) return e.length;
                                if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)) return e.byteLength;
                                "string" != typeof e && (e = "" + e);
                                var n = e.length;
                                if (0 === n) return 0;
                                for (var r = !1; ;)
                                    switch (t) {
                                        case "ascii":
                                        case "latin1":
                                        case "binary":
                                            return n;
                                        case "utf8":
                                        case "utf-8":
                                        case void 0:
                                            return T(e).length;
                                        case "ucs2":
                                        case "ucs-2":
                                        case "utf16le":
                                        case "utf-16le":
                                            return 2 * n;
                                        case "hex":
                                            return n >>> 1;
                                        case "base64":
                                            return P(e).length;
                                        default:
                                            if (r) return T(e).length;
                                            (t = ("" + t).toLowerCase()), (r = !0);
                                    }
                            }
                            function m(e, t, n) {
                                var r = e[t];
                                (e[t] = e[n]), (e[n] = r);
                            }
                            function g(e, t, n, r, i) {
                                if (0 === e.length) return -1;
                                if (
                                    ("string" == typeof n ? ((r = n), (n = 0)) : n > 2147483647 ? (n = 2147483647) : n < -2147483648 && (n = -2147483648),
                                        isNaN((n = +n)) && (n = i ? 0 : e.length - 1),
                                        n < 0 && (n = e.length + n),
                                        n >= e.length)
                                ) {
                                    if (i) return -1;
                                    n = e.length - 1;
                                } else if (n < 0) {
                                    if (!i) return -1;
                                    n = 0;
                                }
                                if (("string" == typeof t && (t = c.from(t, r)), c.isBuffer(t))) return 0 === t.length ? -1 : y(e, t, n, r, i);
                                if ("number" == typeof t)
                                    return (
                                        (t &= 255),
                                        c.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? (i ? Uint8Array.prototype.indexOf.call(e, t, n) : Uint8Array.prototype.lastIndexOf.call(e, t, n)) : y(e, [t], n, r, i)
                                    );
                                throw TypeError("val must be string, number or Buffer");
                            }
                            function y(e, t, n, r, i) {
                                var o,
                                    s = 1,
                                    a = e.length,
                                    c = t.length;
                                if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
                                    if (e.length < 2 || t.length < 2) return -1;
                                    (s = 2), (a /= 2), (c /= 2), (n /= 2);
                                }
                                function u(e, t) {
                                    return 1 === s ? e[t] : e.readUInt16BE(t * s);
                                }
                                if (i) {
                                    var l = -1;
                                    for (o = n; o < a; o++)
                                        if (u(e, o) === u(t, -1 === l ? 0 : o - l)) {
                                            if ((-1 === l && (l = o), o - l + 1 === c)) return l * s;
                                        } else -1 !== l && (o -= o - l), (l = -1);
                                } else
                                    for (n + c > a && (n = a - c), o = n; o >= 0; o--) {
                                        for (var p = !0, f = 0; f < c; f++)
                                            if (u(e, o + f) !== u(t, f)) {
                                                p = !1;
                                                break;
                                            }
                                        if (p) return o;
                                    }
                                return -1;
                            }
                            function b(e, t, n) {
                                n = Math.min(e.length, n);
                                for (var r = [], i = t; i < n;) {
                                    var o,
                                        s,
                                        a,
                                        c,
                                        u = e[i],
                                        l = null,
                                        p = u > 239 ? 4 : u > 223 ? 3 : u > 191 ? 2 : 1;
                                    if (i + p <= n)
                                        switch (p) {
                                            case 1:
                                                u < 128 && (l = u);
                                                break;
                                            case 2:
                                                128 == (192 & (o = e[i + 1])) && (c = ((31 & u) << 6) | (63 & o)) > 127 && (l = c);
                                                break;
                                            case 3:
                                                (o = e[i + 1]), (s = e[i + 2]), 128 == (192 & o) && 128 == (192 & s) && (c = ((15 & u) << 12) | ((63 & o) << 6) | (63 & s)) > 2047 && (c < 55296 || c > 57343) && (l = c);
                                                break;
                                            case 4:
                                                (o = e[i + 1]),
                                                    (s = e[i + 2]),
                                                    (a = e[i + 3]),
                                                    128 == (192 & o) && 128 == (192 & s) && 128 == (192 & a) && (c = ((15 & u) << 18) | ((63 & o) << 12) | ((63 & s) << 6) | (63 & a)) > 65535 && c < 1114112 && (l = c);
                                        }
                                    null === l ? ((l = 65533), (p = 1)) : l > 65535 && ((l -= 65536), r.push(((l >>> 10) & 1023) | 55296), (l = 56320 | (1023 & l))), r.push(l), (i += p);
                                }
                                return (function (e) {
                                    var t = e.length;
                                    if (t <= w) return String.fromCharCode.apply(String, e);
                                    for (var n = "", r = 0; r < t;) n += String.fromCharCode.apply(String, e.slice(r, (r += w)));
                                    return n;
                                })(r);
                            }
                            (t.Buffer = c),
                                (t.SlowBuffer = function (e) {
                                    return +e != e && (e = 0), c.alloc(+e);
                                }),
                                (t.INSPECT_MAX_BYTES = 50),
                                (c.TYPED_ARRAY_SUPPORT =
                                    void 0 !== e.TYPED_ARRAY_SUPPORT
                                        ? e.TYPED_ARRAY_SUPPORT
                                        : (function () {
                                            try {
                                                var e = new Uint8Array(1);
                                                return (
                                                    (e.__proto__ = {
                                                        __proto__: Uint8Array.prototype,
                                                        foo: function () {
                                                            return 42;
                                                        },
                                                    }),
                                                    42 === e.foo() && "function" == typeof e.subarray && 0 === e.subarray(1, 1).byteLength
                                                );
                                            } catch (e) {
                                                return !1;
                                            }
                                        })()),
                                (t.kMaxLength = s()),
                                (c.poolSize = 8192),
                                (c._augment = function (e) {
                                    return (e.__proto__ = c.prototype), e;
                                }),
                                (c.from = function (e, t, n) {
                                    return u(null, e, t, n);
                                }),
                                c.TYPED_ARRAY_SUPPORT &&
                                ((c.prototype.__proto__ = Uint8Array.prototype),
                                    (c.__proto__ = Uint8Array),
                                    "undefined" != typeof Symbol && Symbol.species && c[Symbol.species] === c && Object.defineProperty(c, Symbol.species, { value: null, configurable: !0 })),
                                (c.alloc = function (e, t, n) {
                                    return l(e), e <= 0 ? a(null, e) : void 0 !== t ? ("string" == typeof n ? a(null, e).fill(t, n) : a(null, e).fill(t)) : a(null, e);
                                }),
                                (c.allocUnsafe = function (e) {
                                    return p(null, e);
                                }),
                                (c.allocUnsafeSlow = function (e) {
                                    return p(null, e);
                                }),
                                (c.isBuffer = function (e) {
                                    return !(null == e || !e._isBuffer);
                                }),
                                (c.compare = function (e, t) {
                                    if (!c.isBuffer(e) || !c.isBuffer(t)) throw TypeError("Arguments must be Buffers");
                                    if (e === t) return 0;
                                    for (var n = e.length, r = t.length, i = 0, o = Math.min(n, r); i < o; ++i)
                                        if (e[i] !== t[i]) {
                                            (n = e[i]), (r = t[i]);
                                            break;
                                        }
                                    return n < r ? -1 : r < n ? 1 : 0;
                                }),
                                (c.isEncoding = function (e) {
                                    switch (String(e).toLowerCase()) {
                                        case "hex":
                                        case "utf8":
                                        case "utf-8":
                                        case "ascii":
                                        case "latin1":
                                        case "binary":
                                        case "base64":
                                        case "ucs2":
                                        case "ucs-2":
                                        case "utf16le":
                                        case "utf-16le":
                                            return !0;
                                        default:
                                            return !1;
                                    }
                                }),
                                (c.concat = function (e, t) {
                                    if (!o(e)) throw TypeError('"list" argument must be an Array of Buffers');
                                    if (0 === e.length) return c.alloc(0);
                                    if (void 0 === t) for (t = 0, n = 0; n < e.length; ++n) t += e[n].length;
                                    var n,
                                        r = c.allocUnsafe(t),
                                        i = 0;
                                    for (n = 0; n < e.length; ++n) {
                                        var s = e[n];
                                        if (!c.isBuffer(s)) throw TypeError('"list" argument must be an Array of Buffers');
                                        s.copy(r, i), (i += s.length);
                                    }
                                    return r;
                                }),
                                (c.byteLength = d),
                                (c.prototype._isBuffer = !0),
                                (c.prototype.swap16 = function () {
                                    var e = this.length;
                                    if (e % 2 != 0) throw RangeError("Buffer size must be a multiple of 16-bits");
                                    for (var t = 0; t < e; t += 2) m(this, t, t + 1);
                                    return this;
                                }),
                                (c.prototype.swap32 = function () {
                                    var e = this.length;
                                    if (e % 4 != 0) throw RangeError("Buffer size must be a multiple of 32-bits");
                                    for (var t = 0; t < e; t += 4) m(this, t, t + 3), m(this, t + 1, t + 2);
                                    return this;
                                }),
                                (c.prototype.swap64 = function () {
                                    var e = this.length;
                                    if (e % 8 != 0) throw RangeError("Buffer size must be a multiple of 64-bits");
                                    for (var t = 0; t < e; t += 8) m(this, t, t + 7), m(this, t + 1, t + 6), m(this, t + 2, t + 5), m(this, t + 3, t + 4);
                                    return this;
                                }),
                                (c.prototype.toString = function () {
                                    var e = 0 | this.length;
                                    return 0 === e
                                        ? ""
                                        : 0 == arguments.length
                                            ? b(this, 0, e)
                                            : function (e, t, n) {
                                                var i,
                                                    o,
                                                    s = !1;
                                                if (((void 0 === t || t < 0) && (t = 0), t > this.length || ((void 0 === n || n > this.length) && (n = this.length), n <= 0) || (n >>>= 0) <= (t >>>= 0))) return "";
                                                for (e || (e = "utf8"); ;)
                                                    switch (e) {
                                                        case "hex":
                                                            return (function (e, t, n) {
                                                                var r,
                                                                    i = e.length;
                                                                (!t || t < 0) && (t = 0), (!n || n < 0 || n > i) && (n = i);
                                                                for (var o = "", s = t; s < n; ++s) o += (r = e[s]) < 16 ? "0" + r.toString(16) : r.toString(16);
                                                                return o;
                                                            })(this, t, n);
                                                        case "utf8":
                                                        case "utf-8":
                                                            return b(this, t, n);
                                                        case "ascii":
                                                            return (function (e, t, n) {
                                                                var r = "";
                                                                n = Math.min(e.length, n);
                                                                for (var i = t; i < n; ++i) r += String.fromCharCode(127 & e[i]);
                                                                return r;
                                                            })(this, t, n);
                                                        case "latin1":
                                                        case "binary":
                                                            return (function (e, t, n) {
                                                                var r = "";
                                                                n = Math.min(e.length, n);
                                                                for (var i = t; i < n; ++i) r += String.fromCharCode(e[i]);
                                                                return r;
                                                            })(this, t, n);
                                                        case "base64":
                                                            return (i = t), (o = n), 0 === i && o === this.length ? r.fromByteArray(this) : r.fromByteArray(this.slice(i, o));
                                                        case "ucs2":
                                                        case "ucs-2":
                                                        case "utf16le":
                                                        case "utf-16le":
                                                            return (function (e, t, n) {
                                                                for (var r = e.slice(t, n), i = "", o = 0; o < r.length; o += 2) i += String.fromCharCode(r[o] + 256 * r[o + 1]);
                                                                return i;
                                                            })(this, t, n);
                                                        default:
                                                            if (s) throw TypeError("Unknown encoding: " + e);
                                                            (e = (e + "").toLowerCase()), (s = !0);
                                                    }
                                            }.apply(this, arguments);
                                }),
                                (c.prototype.equals = function (e) {
                                    if (!c.isBuffer(e)) throw TypeError("Argument must be a Buffer");
                                    return this === e || 0 === c.compare(this, e);
                                }),
                                (c.prototype.inspect = function () {
                                    var e = "",
                                        n = t.INSPECT_MAX_BYTES;
                                    return this.length > 0 && ((e = this.toString("hex", 0, n).match(/.{2}/g).join(" ")), this.length > n && (e += " ... ")), "<Buffer " + e + ">";
                                }),
                                (c.prototype.compare = function (e, t, n, r, i) {
                                    if (!c.isBuffer(e)) throw TypeError("Argument must be a Buffer");
                                    if ((void 0 === t && (t = 0), void 0 === n && (n = e ? e.length : 0), void 0 === r && (r = 0), void 0 === i && (i = this.length), t < 0 || n > e.length || r < 0 || i > this.length))
                                        throw RangeError("out of range index");
                                    if (r >= i && t >= n) return 0;
                                    if (r >= i) return -1;
                                    if (t >= n) return 1;
                                    if (((t >>>= 0), (n >>>= 0), (r >>>= 0), (i >>>= 0), this === e)) return 0;
                                    for (var o = i - r, s = n - t, a = Math.min(o, s), u = this.slice(r, i), l = e.slice(t, n), p = 0; p < a; ++p)
                                        if (u[p] !== l[p]) {
                                            (o = u[p]), (s = l[p]);
                                            break;
                                        }
                                    return o < s ? -1 : s < o ? 1 : 0;
                                }),
                                (c.prototype.includes = function (e, t, n) {
                                    return -1 !== this.indexOf(e, t, n);
                                }),
                                (c.prototype.indexOf = function (e, t, n) {
                                    return g(this, e, t, n, !0);
                                }),
                                (c.prototype.lastIndexOf = function (e, t, n) {
                                    return g(this, e, t, n, !1);
                                }),
                                (c.prototype.write = function (e, t, n, r) {
                                    if (void 0 === t) (r = "utf8"), (n = this.length), (t = 0);
                                    else if (void 0 === n && "string" == typeof t) (r = t), (n = this.length), (t = 0);
                                    else {
                                        if (!isFinite(t)) throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                                        (t |= 0), isFinite(n) ? ((n |= 0), void 0 === r && (r = "utf8")) : ((r = n), (n = void 0));
                                    }
                                    var i,
                                        o,
                                        s,
                                        a,
                                        c,
                                        u,
                                        l,
                                        p,
                                        f,
                                        h,
                                        d = this.length - t;
                                    if (((void 0 === n || n > d) && (n = d), (e.length > 0 && (n < 0 || t < 0)) || t > this.length)) throw RangeError("Attempt to write outside buffer bounds");
                                    r || (r = "utf8");
                                    for (var m = !1; ;)
                                        switch (r) {
                                            case "hex":
                                                return (function (e, t, n, r) {
                                                    n = Number(n) || 0;
                                                    var i = e.length - n;
                                                    r ? (r = Number(r)) > i && (r = i) : (r = i);
                                                    var o = t.length;
                                                    if (o % 2 != 0) throw TypeError("Invalid hex string");
                                                    r > o / 2 && (r = o / 2);
                                                    for (var s = 0; s < r; ++s) {
                                                        var a = parseInt(t.substr(2 * s, 2), 16);
                                                        if (isNaN(a)) break;
                                                        e[n + s] = a;
                                                    }
                                                    return s;
                                                })(this, e, t, n);
                                            case "utf8":
                                            case "utf-8":
                                                return (c = t), (u = n), C(T(e, this.length - c), this, c, u);
                                            case "ascii":
                                            case "latin1":
                                            case "binary":
                                                return (
                                                    (i = this),
                                                    (o = e),
                                                    (s = t),
                                                    (a = n),
                                                    C(
                                                        (function (e) {
                                                            for (var t = [], n = 0; n < e.length; ++n) t.push(255 & e.charCodeAt(n));
                                                            return t;
                                                        })(o),
                                                        i,
                                                        s,
                                                        a
                                                    )
                                                );
                                            case "base64":
                                                return (l = t), (p = n), C(P(e), this, l, p);
                                            case "ucs2":
                                            case "ucs-2":
                                            case "utf16le":
                                            case "utf-16le":
                                                return (
                                                    (f = t),
                                                    (h = n),
                                                    C(
                                                        (function (e, t) {
                                                            for (var n, r, i = [], o = 0; o < e.length && !((t -= 2) < 0); ++o) (r = (n = e.charCodeAt(o)) >> 8), i.push(n % 256), i.push(r);
                                                            return i;
                                                        })(e, this.length - f),
                                                        this,
                                                        f,
                                                        h
                                                    )
                                                );
                                            default:
                                                if (m) throw TypeError("Unknown encoding: " + r);
                                                (r = ("" + r).toLowerCase()), (m = !0);
                                        }
                                }),
                                (c.prototype.toJSON = function () {
                                    return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
                                });
                            var w = 4096;
                            function v(e, t, n) {
                                if (e % 1 != 0 || e < 0) throw RangeError("offset is not uint");
                                if (e + t > n) throw RangeError("Trying to access beyond buffer length");
                            }
                            function S(e, t, n, r, i, o) {
                                if (!c.isBuffer(e)) throw TypeError('"buffer" argument must be a Buffer instance');
                                if (t > i || t < o) throw RangeError('"value" argument is out of bounds');
                                if (n + r > e.length) throw RangeError("Index out of range");
                            }
                            function E(e, t, n, r) {
                                t < 0 && (t = 65535 + t + 1);
                                for (var i = 0, o = Math.min(e.length - n, 2); i < o; ++i) e[n + i] = (t & (255 << (8 * (r ? i : 1 - i)))) >>> (8 * (r ? i : 1 - i));
                            }
                            function x(e, t, n, r) {
                                t < 0 && (t = 4294967295 + t + 1);
                                for (var i = 0, o = Math.min(e.length - n, 4); i < o; ++i) e[n + i] = (t >>> (8 * (r ? i : 3 - i))) & 255;
                            }
                            function k(e, t, n, r, i, o) {
                                if (n + r > e.length || n < 0) throw RangeError("Index out of range");
                            }
                            function _(e, t, n, r, o) {
                                return o || k(e, 0, n, 4), i.write(e, t, n, r, 23, 4), n + 4;
                            }
                            function j(e, t, n, r, o) {
                                return o || k(e, 0, n, 8), i.write(e, t, n, r, 52, 8), n + 8;
                            }
                            (c.prototype.slice = function (e, t) {
                                var n,
                                    r = this.length;
                                if (((e = ~~e), (t = void 0 === t ? r : ~~t), e < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), t < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), t < e && (t = e), c.TYPED_ARRAY_SUPPORT))
                                    (n = this.subarray(e, t)).__proto__ = c.prototype;
                                else {
                                    var i = t - e;
                                    n = new c(i, void 0);
                                    for (var o = 0; o < i; ++o) n[o] = this[o + e];
                                }
                                return n;
                            }),
                                (c.prototype.readUIntLE = function (e, t, n) {
                                    (e |= 0), (t |= 0), n || v(e, t, this.length);
                                    for (var r = this[e], i = 1, o = 0; ++o < t && (i *= 256);) r += this[e + o] * i;
                                    return r;
                                }),
                                (c.prototype.readUIntBE = function (e, t, n) {
                                    (e |= 0), (t |= 0), n || v(e, t, this.length);
                                    for (var r = this[e + --t], i = 1; t > 0 && (i *= 256);) r += this[e + --t] * i;
                                    return r;
                                }),
                                (c.prototype.readUInt8 = function (e, t) {
                                    return t || v(e, 1, this.length), this[e];
                                }),
                                (c.prototype.readUInt16LE = function (e, t) {
                                    return t || v(e, 2, this.length), this[e] | (this[e + 1] << 8);
                                }),
                                (c.prototype.readUInt16BE = function (e, t) {
                                    return t || v(e, 2, this.length), (this[e] << 8) | this[e + 1];
                                }),
                                (c.prototype.readUInt32LE = function (e, t) {
                                    return t || v(e, 4, this.length), (this[e] | (this[e + 1] << 8) | (this[e + 2] << 16)) + 16777216 * this[e + 3];
                                }),
                                (c.prototype.readUInt32BE = function (e, t) {
                                    return t || v(e, 4, this.length), 16777216 * this[e] + ((this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3]);
                                }),
                                (c.prototype.readIntLE = function (e, t, n) {
                                    (e |= 0), (t |= 0), n || v(e, t, this.length);
                                    for (var r = this[e], i = 1, o = 0; ++o < t && (i *= 256);) r += this[e + o] * i;
                                    return r >= (i *= 128) && (r -= Math.pow(2, 8 * t)), r;
                                }),
                                (c.prototype.readIntBE = function (e, t, n) {
                                    (e |= 0), (t |= 0), n || v(e, t, this.length);
                                    for (var r = t, i = 1, o = this[e + --r]; r > 0 && (i *= 256);) o += this[e + --r] * i;
                                    return o >= (i *= 128) && (o -= Math.pow(2, 8 * t)), o;
                                }),
                                (c.prototype.readInt8 = function (e, t) {
                                    return t || v(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e];
                                }),
                                (c.prototype.readInt16LE = function (e, t) {
                                    t || v(e, 2, this.length);
                                    var n = this[e] | (this[e + 1] << 8);
                                    return 32768 & n ? 4294901760 | n : n;
                                }),
                                (c.prototype.readInt16BE = function (e, t) {
                                    t || v(e, 2, this.length);
                                    var n = this[e + 1] | (this[e] << 8);
                                    return 32768 & n ? 4294901760 | n : n;
                                }),
                                (c.prototype.readInt32LE = function (e, t) {
                                    return t || v(e, 4, this.length), this[e] | (this[e + 1] << 8) | (this[e + 2] << 16) | (this[e + 3] << 24);
                                }),
                                (c.prototype.readInt32BE = function (e, t) {
                                    return t || v(e, 4, this.length), (this[e] << 24) | (this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3];
                                }),
                                (c.prototype.readFloatLE = function (e, t) {
                                    return t || v(e, 4, this.length), i.read(this, e, !0, 23, 4);
                                }),
                                (c.prototype.readFloatBE = function (e, t) {
                                    return t || v(e, 4, this.length), i.read(this, e, !1, 23, 4);
                                }),
                                (c.prototype.readDoubleLE = function (e, t) {
                                    return t || v(e, 8, this.length), i.read(this, e, !0, 52, 8);
                                }),
                                (c.prototype.readDoubleBE = function (e, t) {
                                    return t || v(e, 8, this.length), i.read(this, e, !1, 52, 8);
                                }),
                                (c.prototype.writeUIntLE = function (e, t, n, r) {
                                    (e = +e), (t |= 0), (n |= 0), r || S(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
                                    var i = 1,
                                        o = 0;
                                    for (this[t] = 255 & e; ++o < n && (i *= 256);) this[t + o] = (e / i) & 255;
                                    return t + n;
                                }),
                                (c.prototype.writeUIntBE = function (e, t, n, r) {
                                    (e = +e), (t |= 0), (n |= 0), r || S(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
                                    var i = n - 1,
                                        o = 1;
                                    for (this[t + i] = 255 & e; --i >= 0 && (o *= 256);) this[t + i] = (e / o) & 255;
                                    return t + n;
                                }),
                                (c.prototype.writeUInt8 = function (e, t, n) {
                                    return (e = +e), (t |= 0), n || S(this, e, t, 1, 255, 0), c.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), (this[t] = 255 & e), t + 1;
                                }),
                                (c.prototype.writeUInt16LE = function (e, t, n) {
                                    return (e = +e), (t |= 0), n || S(this, e, t, 2, 65535, 0), c.TYPED_ARRAY_SUPPORT ? ((this[t] = 255 & e), (this[t + 1] = e >>> 8)) : E(this, e, t, !0), t + 2;
                                }),
                                (c.prototype.writeUInt16BE = function (e, t, n) {
                                    return (e = +e), (t |= 0), n || S(this, e, t, 2, 65535, 0), c.TYPED_ARRAY_SUPPORT ? ((this[t] = e >>> 8), (this[t + 1] = 255 & e)) : E(this, e, t, !1), t + 2;
                                }),
                                (c.prototype.writeUInt32LE = function (e, t, n) {
                                    return (
                                        (e = +e),
                                        (t |= 0),
                                        n || S(this, e, t, 4, 4294967295, 0),
                                        c.TYPED_ARRAY_SUPPORT ? ((this[t + 3] = e >>> 24), (this[t + 2] = e >>> 16), (this[t + 1] = e >>> 8), (this[t] = 255 & e)) : x(this, e, t, !0),
                                        t + 4
                                    );
                                }),
                                (c.prototype.writeUInt32BE = function (e, t, n) {
                                    return (
                                        (e = +e),
                                        (t |= 0),
                                        n || S(this, e, t, 4, 4294967295, 0),
                                        c.TYPED_ARRAY_SUPPORT ? ((this[t] = e >>> 24), (this[t + 1] = e >>> 16), (this[t + 2] = e >>> 8), (this[t + 3] = 255 & e)) : x(this, e, t, !1),
                                        t + 4
                                    );
                                }),
                                (c.prototype.writeIntLE = function (e, t, n, r) {
                                    if (((e = +e), (t |= 0), !r)) {
                                        var i = Math.pow(2, 8 * n - 1);
                                        S(this, e, t, n, i - 1, -i);
                                    }
                                    var o = 0,
                                        s = 1,
                                        a = 0;
                                    for (this[t] = 255 & e; ++o < n && (s *= 256);) e < 0 && 0 === a && 0 !== this[t + o - 1] && (a = 1), (this[t + o] = (((e / s) >> 0) - a) & 255);
                                    return t + n;
                                }),
                                (c.prototype.writeIntBE = function (e, t, n, r) {
                                    if (((e = +e), (t |= 0), !r)) {
                                        var i = Math.pow(2, 8 * n - 1);
                                        S(this, e, t, n, i - 1, -i);
                                    }
                                    var o = n - 1,
                                        s = 1,
                                        a = 0;
                                    for (this[t + o] = 255 & e; --o >= 0 && (s *= 256);) e < 0 && 0 === a && 0 !== this[t + o + 1] && (a = 1), (this[t + o] = (((e / s) >> 0) - a) & 255);
                                    return t + n;
                                }),
                                (c.prototype.writeInt8 = function (e, t, n) {
                                    return (e = +e), (t |= 0), n || S(this, e, t, 1, 127, -128), c.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), e < 0 && (e = 255 + e + 1), (this[t] = 255 & e), t + 1;
                                }),
                                (c.prototype.writeInt16LE = function (e, t, n) {
                                    return (e = +e), (t |= 0), n || S(this, e, t, 2, 32767, -32768), c.TYPED_ARRAY_SUPPORT ? ((this[t] = 255 & e), (this[t + 1] = e >>> 8)) : E(this, e, t, !0), t + 2;
                                }),
                                (c.prototype.writeInt16BE = function (e, t, n) {
                                    return (e = +e), (t |= 0), n || S(this, e, t, 2, 32767, -32768), c.TYPED_ARRAY_SUPPORT ? ((this[t] = e >>> 8), (this[t + 1] = 255 & e)) : E(this, e, t, !1), t + 2;
                                }),
                                (c.prototype.writeInt32LE = function (e, t, n) {
                                    return (
                                        (e = +e),
                                        (t |= 0),
                                        n || S(this, e, t, 4, 2147483647, -2147483648),
                                        c.TYPED_ARRAY_SUPPORT ? ((this[t] = 255 & e), (this[t + 1] = e >>> 8), (this[t + 2] = e >>> 16), (this[t + 3] = e >>> 24)) : x(this, e, t, !0),
                                        t + 4
                                    );
                                }),
                                (c.prototype.writeInt32BE = function (e, t, n) {
                                    return (
                                        (e = +e),
                                        (t |= 0),
                                        n || S(this, e, t, 4, 2147483647, -2147483648),
                                        e < 0 && (e = 4294967295 + e + 1),
                                        c.TYPED_ARRAY_SUPPORT ? ((this[t] = e >>> 24), (this[t + 1] = e >>> 16), (this[t + 2] = e >>> 8), (this[t + 3] = 255 & e)) : x(this, e, t, !1),
                                        t + 4
                                    );
                                }),
                                (c.prototype.writeFloatLE = function (e, t, n) {
                                    return _(this, e, t, !0, n);
                                }),
                                (c.prototype.writeFloatBE = function (e, t, n) {
                                    return _(this, e, t, !1, n);
                                }),
                                (c.prototype.writeDoubleLE = function (e, t, n) {
                                    return j(this, e, t, !0, n);
                                }),
                                (c.prototype.writeDoubleBE = function (e, t, n) {
                                    return j(this, e, t, !1, n);
                                }),
                                (c.prototype.copy = function (e, t, n, r) {
                                    if ((n || (n = 0), r || 0 === r || (r = this.length), t >= e.length && (t = e.length), t || (t = 0), r > 0 && r < n && (r = n), r === n || 0 === e.length || 0 === this.length)) return 0;
                                    if (t < 0) throw RangeError("targetStart out of bounds");
                                    if (n < 0 || n >= this.length) throw RangeError("sourceStart out of bounds");
                                    if (r < 0) throw RangeError("sourceEnd out of bounds");
                                    r > this.length && (r = this.length), e.length - t < r - n && (r = e.length - t + n);
                                    var i,
                                        o = r - n;
                                    if (this === e && n < t && t < r) for (i = o - 1; i >= 0; --i) e[i + t] = this[i + n];
                                    else if (o < 1e3 || !c.TYPED_ARRAY_SUPPORT) for (i = 0; i < o; ++i) e[i + t] = this[i + n];
                                    else Uint8Array.prototype.set.call(e, this.subarray(n, n + o), t);
                                    return o;
                                }),
                                (c.prototype.fill = function (e, t, n, r) {
                                    if ("string" == typeof e) {
                                        if (("string" == typeof t ? ((r = t), (t = 0), (n = this.length)) : "string" == typeof n && ((r = n), (n = this.length)), 1 === e.length)) {
                                            var i,
                                                o = e.charCodeAt(0);
                                            o < 256 && (e = o);
                                        }
                                        if (void 0 !== r && "string" != typeof r) throw TypeError("encoding must be a string");
                                        if ("string" == typeof r && !c.isEncoding(r)) throw TypeError("Unknown encoding: " + r);
                                    } else "number" == typeof e && (e &= 255);
                                    if (t < 0 || this.length < t || this.length < n) throw RangeError("Out of range index");
                                    if (n <= t) return this;
                                    if (((t >>>= 0), (n = void 0 === n ? this.length : n >>> 0), e || (e = 0), "number" == typeof e)) for (i = t; i < n; ++i) this[i] = e;
                                    else {
                                        var s = c.isBuffer(e) ? e : T(new c(e, r).toString()),
                                            a = s.length;
                                        for (i = 0; i < n - t; ++i) this[i + t] = s[i % a];
                                    }
                                    return this;
                                });
                            var I = /[^+\/0-9A-Za-z-_]/g;
                            function T(e, t) {
                                var n;
                                t = t || 1 / 0;
                                for (var r = e.length, i = null, o = [], s = 0; s < r; ++s) {
                                    if ((n = e.charCodeAt(s)) > 55295 && n < 57344) {
                                        if (!i) {
                                            if (n > 56319 || s + 1 === r) {
                                                (t -= 3) > -1 && o.push(239, 191, 189);
                                                continue;
                                            }
                                            i = n;
                                            continue;
                                        }
                                        if (n < 56320) {
                                            (t -= 3) > -1 && o.push(239, 191, 189), (i = n);
                                            continue;
                                        }
                                        n = 65536 + (((i - 55296) << 10) | (n - 56320));
                                    } else i && (t -= 3) > -1 && o.push(239, 191, 189);
                                    if (((i = null), n < 128)) {
                                        if ((t -= 1) < 0) break;
                                        o.push(n);
                                    } else if (n < 2048) {
                                        if ((t -= 2) < 0) break;
                                        o.push((n >> 6) | 192, (63 & n) | 128);
                                    } else if (n < 65536) {
                                        if ((t -= 3) < 0) break;
                                        o.push((n >> 12) | 224, ((n >> 6) & 63) | 128, (63 & n) | 128);
                                    } else {
                                        if (!(n < 1114112)) throw Error("Invalid code point");
                                        if ((t -= 4) < 0) break;
                                        o.push((n >> 18) | 240, ((n >> 12) & 63) | 128, ((n >> 6) & 63) | 128, (63 & n) | 128);
                                    }
                                }
                                return o;
                            }
                            function P(e) {
                                return r.toByteArray(
                                    (function (e) {
                                        var t;
                                        if ((e = ((t = e).trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")).replace(I, "")).length < 2) return "";
                                        for (; e.length % 4 != 0;) e += "=";
                                        return e;
                                    })(e)
                                );
                            }
                            function C(e, t, n, r) {
                                for (var i = 0; i < r && !(i + n >= t.length || i >= e.length); ++i) t[i + n] = e[i];
                                return i;
                            }
                        }.call(this, n(0)));
                    },
                    function (e, t, n) {
                        (t.byteLength = function (e) {
                            var t = u(e),
                                n = t[0],
                                r = t[1];
                            return (3 * (n + r)) / 4 - r;
                        }),
                            (t.toByteArray = function (e) {
                                var t,
                                    n,
                                    r = u(e),
                                    s = r[0],
                                    a = r[1],
                                    c = new o((3 * (s + a)) / 4 - a),
                                    l = 0,
                                    p = a > 0 ? s - 4 : s;
                                for (n = 0; n < p; n += 4)
                                    (t = (i[e.charCodeAt(n)] << 18) | (i[e.charCodeAt(n + 1)] << 12) | (i[e.charCodeAt(n + 2)] << 6) | i[e.charCodeAt(n + 3)]), (c[l++] = (t >> 16) & 255), (c[l++] = (t >> 8) & 255), (c[l++] = 255 & t);
                                return (
                                    2 === a && ((t = (i[e.charCodeAt(n)] << 2) | (i[e.charCodeAt(n + 1)] >> 4)), (c[l++] = 255 & t)),
                                    1 === a && ((t = (i[e.charCodeAt(n)] << 10) | (i[e.charCodeAt(n + 1)] << 4) | (i[e.charCodeAt(n + 2)] >> 2)), (c[l++] = (t >> 8) & 255), (c[l++] = 255 & t)),
                                    c
                                );
                            }),
                            (t.fromByteArray = function (e) {
                                for (var t, n = e.length, i = n % 3, o = [], s = 0, a = n - i; s < a; s += 16383)
                                    o.push(
                                        (function (e, t, n) {
                                            for (var i, o = [], s = t; s < n; s += 3) o.push(r[((i = ((e[s] << 16) & 16711680) + ((e[s + 1] << 8) & 65280) + (255 & e[s + 2])) >> 18) & 63] + r[(i >> 12) & 63] + r[(i >> 6) & 63] + r[63 & i]);
                                            return o.join("");
                                        })(e, s, s + 16383 > a ? a : s + 16383)
                                    );
                                return 1 === i ? o.push(r[(t = e[n - 1]) >> 2] + r[(t << 4) & 63] + "==") : 2 === i && o.push(r[(t = (e[n - 2] << 8) + e[n - 1]) >> 10] + r[(t >> 4) & 63] + r[(t << 2) & 63] + "="), o.join("");
                            });
                        for (var r = [], i = [], o = "undefined" != typeof Uint8Array ? Uint8Array : Array, s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", a = 0, c = s.length; a < c; ++a)
                            (r[a] = s[a]), (i[s.charCodeAt(a)] = a);
                        function u(e) {
                            var t = e.length;
                            if (t % 4 > 0) throw Error("Invalid string. Length must be a multiple of 4");
                            var n = e.indexOf("=");
                            return -1 === n && (n = t), [n, n === t ? 0 : 4 - (n % 4)];
                        }
                        (i["-".charCodeAt(0)] = 62), (i["_".charCodeAt(0)] = 63);
                    },
                    function (e, t) {
                          /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ (t.read = function (e, t, n, r, i) {
                            var o,
                                s,
                                a = 8 * i - r - 1,
                                c = (1 << a) - 1,
                                u = c >> 1,
                                l = -7,
                                p = n ? i - 1 : 0,
                                f = n ? -1 : 1,
                                h = e[t + p];
                            for (p += f, o = h & ((1 << -l) - 1), h >>= -l, l += a; l > 0; o = 256 * o + e[t + p], p += f, l -= 8);
                            for (s = o & ((1 << -l) - 1), o >>= -l, l += r; l > 0; s = 256 * s + e[t + p], p += f, l -= 8);
                            if (0 === o) o = 1 - u;
                            else {
                                if (o === c) return s ? NaN : (1 / 0) * (h ? -1 : 1);
                                (s += Math.pow(2, r)), (o -= u);
                            }
                            return (h ? -1 : 1) * s * Math.pow(2, o - r);
                        }),
                            (t.write = function (e, t, n, r, i, o) {
                                var s,
                                    a,
                                    c,
                                    u = 8 * o - i - 1,
                                    l = (1 << u) - 1,
                                    p = l >> 1,
                                    f = 23 === i ? 5960464477539062e-23 : 0,
                                    h = r ? 0 : o - 1,
                                    d = r ? 1 : -1,
                                    m = t < 0 || (0 === t && 1 / t < 0) ? 1 : 0;
                                for (
                                    isNaN((t = Math.abs(t))) || t === 1 / 0
                                        ? ((a = isNaN(t) ? 1 : 0), (s = l))
                                        : ((s = Math.floor(Math.log(t) / Math.LN2)),
                                            t * (c = Math.pow(2, -s)) < 1 && (s--, (c *= 2)),
                                            (t += s + p >= 1 ? f / c : f * Math.pow(2, 1 - p)) * c >= 2 && (s++, (c /= 2)),
                                            s + p >= l ? ((a = 0), (s = l)) : s + p >= 1 ? ((a = (t * c - 1) * Math.pow(2, i)), (s += p)) : ((a = t * Math.pow(2, p - 1) * Math.pow(2, i)), (s = 0)));
                                    i >= 8;
                                    e[n + h] = 255 & a, h += d, a /= 256, i -= 8
                                );
                                for (s = (s << i) | a, u += i; u > 0; e[n + h] = 255 & s, h += d, s /= 256, u -= 8);
                                e[n + h - d] |= 128 * m;
                            });
                    },
                    function (e, t) {
                        var n = {}.toString;
                        e.exports =
                            Array.isArray ||
                            function (e) {
                                return "[object Array]" == n.call(e);
                            };
                    },
                    function (e, t) {
                        function n(e, t) {
                            for (var n = 0, r = e.length - 1; r >= 0; r--) {
                                var i = e[r];
                                "." === i ? e.splice(r, 1) : ".." === i ? (e.splice(r, 1), n++) : n && (e.splice(r, 1), n--);
                            }
                            if (t) for (; n--; n) e.unshift("..");
                            return e;
                        }
                        var r = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,
                            i = function (e) {
                                return r.exec(e).slice(1);
                            };
                        function s(e, t) {
                            if (e.filter) return e.filter(t);
                            for (var n = [], r = 0; r < e.length; r++) t(e[r], r, e) && n.push(e[r]);
                            return n;
                        }
                        (t.resolve = function () {
                            for (var e = "", t = !1, r = arguments.length - 1; r >= -1 && !t; r--) {
                                var i = r >= 0 ? arguments[r] : o.cwd();
                                if ("string" != typeof i) throw TypeError("Arguments to path.resolve must be strings");
                                i && ((e = i + "/" + e), (t = "/" === i.charAt(0)));
                            }
                            return (
                                (e = n(
                                    s(e.split("/"), function (e) {
                                        return !!e;
                                    }),
                                    !t
                                ).join("/")),
                                (t ? "/" : "") + e || "."
                            );
                        }),
                            (t.normalize = function (e) {
                                var r = t.isAbsolute(e),
                                    i = "/" === a(e, -1);
                                return (
                                    (e = n(
                                        s(e.split("/"), function (e) {
                                            return !!e;
                                        }),
                                        !r
                                    ).join("/")) ||
                                    r ||
                                    (e = "."),
                                    e && i && (e += "/"),
                                    (r ? "/" : "") + e
                                );
                            }),
                            (t.isAbsolute = function (e) {
                                return "/" === e.charAt(0);
                            }),
                            (t.join = function () {
                                var e = Array.prototype.slice.call(arguments, 0);
                                return t.normalize(
                                    s(e, function (e, t) {
                                        if ("string" != typeof e) throw TypeError("Arguments to path.join must be strings");
                                        return e;
                                    }).join("/")
                                );
                            }),
                            (t.relative = function (e, n) {
                                function r(e) {
                                    for (var t = 0; t < e.length && "" === e[t]; t++);
                                    for (var n = e.length - 1; n >= 0 && "" === e[n]; n--);
                                    return t > n ? [] : e.slice(t, n - t + 1);
                                }
                                (e = t.resolve(e).substr(1)), (n = t.resolve(n).substr(1));
                                for (var i = r(e.split("/")), o = r(n.split("/")), s = Math.min(i.length, o.length), a = s, c = 0; c < s; c++)
                                    if (i[c] !== o[c]) {
                                        a = c;
                                        break;
                                    }
                                var u = [];
                                for (c = a; c < i.length; c++) u.push("..");
                                return (u = u.concat(o.slice(a))).join("/");
                            }),
                            (t.sep = "/"),
                            (t.delimiter = ":"),
                            (t.dirname = function (e) {
                                var t = i(e),
                                    n = t[0],
                                    r = t[1];
                                return n || r ? (r && (r = r.substr(0, r.length - 1)), n + r) : ".";
                            }),
                            (t.basename = function (e, t) {
                                var n = i(e)[2];
                                return t && n.substr(-1 * t.length) === t && (n = n.substr(0, n.length - t.length)), n;
                            }),
                            (t.extname = function (e) {
                                return i(e)[3];
                            });
                        var a = function (e, t, n) {
                            return e.substr(t, n);
                        };
                    },
                ]);
            }),
                (e.exports = r());
        },
        67278: function (e, t, n) {
            "use strict";
            var r = n(10508);
            n(67294);
            let i = (e) => {
                e.target instanceof HTMLTextAreaElement || e.preventDefault();
            },
                o = r.ZP.button.attrs(({ as: e }) => ({ onKeyDown: i, type: e && "button" !== e ? void 0 : "button" }))(["background-color:transparent;font-family:inherit;max-width:", ";width:100%;"], ({ $short: e }) =>
                    e ? "31px" : void 0
                );
            t.Z = o;
        },
        46581: function (e, t, n) {
            "use strict";
            var r = n(85893),
                i = n(67294),
                o = n(10508),
                s = n(97836),
                a = n(6484);
            let c = o.ZP.img.attrs(({ $eager: e = !1, $height: t, $width: n }) => ({ decoding: "async", draggable: !1, fetchpriority: e ? "high" : void 0, height: t, loading: e ? "eager" : "lazy", width: n }))(
                ["aspect-ratio:1;left:", ";max-height:", "px;max-width:", "px;min-height:", "px;min-width:", "px;object-fit:contain;opacity:", ";pointer-events:none;top:", ";visibility:", ";"],
                ({ $offset: e }) => e || void 0,
                ({ $height: e }) => e,
                ({ $width: e }) => e,
                ({ $height: e }) => e,
                ({ $width: e }) => e,
                ({ $moving: e }) => (e ? "50%" : "100%"),
                ({ $offset: e }) => e || void 0,
                ({ $loaded: e }) => (e ? "visible" : "hidden")
            ),
                u = (0, i.forwardRef)((e, t) => {
                    let [n, o] = (0, i.useState)(!1),
                        { displaySize: u = 0, imgSize: l = 0, src: p = "", ...f } = e,
                        h = (0, a.qs)(p),
                        d = (0, i.useMemo)(() => {
                            let e = u > l ? l : u || l;
                            return { $height: e, $offset: u > l ? `${u - l}px` : 0, $width: e };
                        }, [u, l]),
                        [m, g] = (0, i.useState)([]);
                    (0, i.useEffect)(
                        () => () => {
                            n && p.startsWith("blob:") && (0, a.EK)(p);
                        },
                        [n, p]
                    );
                    let y = (0, r.jsx)(c, {
                        ref: t,
                        $loaded: n,
                        onError: ({ target: e }) => {
                            let { currentSrc: t = "" } = e || {};
                            try {
                                let { pathname: e } = new URL(t);
                                e && !m.includes(e) && g((t) => [...t, e]);
                            } catch { }
                        },
                        onLoad: () => o(!0),
                        src: h ? (0, a.RU)(p, l, 1, ".png") : p || void 0,
                        srcSet: h ? (0, a.km)(p, l, ".png", m) || (0 === m.length ? "" : (0, a.$Z)(p, m)) : void 0,
                        ...f,
                        ...d,
                    });
                    return (0, r.jsxs)("picture", {
                        children: [
                            h &&
                            s.uV.map((e) => {
                                let t = (0, a.RU)(p, l, e, ".webp"),
                                    n = e - 0.99;
                                return m.length > 0 && m.includes(t.split(" ")[0])
                                    ? null
                                    : (0, r.jsx)("source", { media: e > 1 ? `(min-resolution: ${n}x), (-webkit-min-device-pixel-ratio: ${n})` : void 0, srcSet: t, type: "image/webp" }, e);
                            }),
                            y,
                        ],
                    });
                });
            t.Z = (0, i.memo)(u);
        },
        97836: function (e, t, n) {
            "use strict";
            n.d(t, {
                $Z: function () {
                    return eW;
                },
                AA: function () {
                    return eX;
                },
                AD: function () {
                    return ex;
                },
                AV: function () {
                    return x;
                },
                AY: function () {
                    return I;
                },
                BD: function () {
                    return G;
                },
                BF: function () {
                    return eY;
                },
                BQ: function () {
                    return eH;
                },
                Bb: function () {
                    return eS;
                },
                CC: function () {
                    return X;
                },
                Cz: function () {
                    return C;
                },
                DA: function () {
                    return es;
                },
                EV: function () {
                    return eA;
                },
                G: function () {
                    return er;
                },
                Ge: function () {
                    return eU;
                },
                H$: function () {
                    return p;
                },
                I9: function () {
                    return A;
                },
                Ig: function () {
                    return ey;
                },
                K7: function () {
                    return K;
                },
                KG: function () {
                    return j;
                },
                KU: function () {
                    return r;
                },
                LL: function () {
                    return y;
                },
                Ll: function () {
                    return ei;
                },
                M0: function () {
                    return O;
                },
                MB: function () {
                    return eP;
                },
                Ml: function () {
                    return h;
                },
                Nb: function () {
                    return ec;
                },
                Nh: function () {
                    return T;
                },
                OT: function () {
                    return eE;
                },
                Os: function () {
                    return M;
                },
                P7: function () {
                    return ek;
                },
                P8: function () {
                    return eK;
                },
                PACKAGE_DATA: function () {
                    return eq;
                },
                Qy: function () {
                    return eI;
                },
                Rm: function () {
                    return ej;
                },
                SP: function () {
                    return ew;
                },
                Sd: function () {
                    return v;
                },
                Sp: function () {
                    return w;
                },
                Tg: function () {
                    return a;
                },
                Tj: function () {
                    return H;
                },
                Tl: function () {
                    return Z;
                },
                UC: function () {
                    return eM;
                },
                VV: function () {
                    return eL;
                },
                Wc: function () {
                    return eR;
                },
                Wr: function () {
                    return F;
                },
                XN: function () {
                    return eF;
                },
                XX: function () {
                    return el;
                },
                Xo: function () {
                    return e_;
                },
                Yg: function () {
                    return eC;
                },
                Yj: function () {
                    return b;
                },
                ZW: function () {
                    return o;
                },
                Zf: function () {
                    return Y;
                },
                Zv: function () {
                    return U;
                },
                _2: function () {
                    return eu;
                },
                _K: function () {
                    return u;
                },
                _l: function () {
                    return eO;
                },
                _r: function () {
                    return L;
                },
                _w: function () {
                    return s;
                },
                aT: function () {
                    return f;
                },
                bK: function () {
                    return eG;
                },
                cW: function () {
                    return ee;
                },
                dA: function () {
                    return Q;
                },
                dd: function () {
                    return k;
                },
                e5: function () {
                    return ef;
                },
                eS: function () {
                    return J;
                },
                h7: function () {
                    return eJ;
                },
                hV: function () {
                    return E;
                },
                hl: function () {
                    return eT;
                },
                i2: function () {
                    return z;
                },
                i9: function () {
                    return m;
                },
                iR: function () {
                    return eN;
                },
                iS: function () {
                    return q;
                },
                jE: function () {
                    return g;
                },
                jQ: function () {
                    return eh;
                },
                jx: function () {
                    return ea;
                },
                ko: function () {
                    return eD;
                },
                lM: function () {
                    return R;
                },
                my: function () {
                    return W;
                },
                nN: function () {
                    return l;
                },
                ob: function () {
                    return eV;
                },
                p3: function () {
                    return eo;
                },
                pX: function () {
                    return eg;
                },
                qB: function () {
                    return eB;
                },
                qO: function () {
                    return e$;
                },
                qe: function () {
                    return V;
                },
                qy: function () {
                    return em;
                },
                rH: function () {
                    return _;
                },
                ru: function () {
                    return D;
                },
                sC: function () {
                    return S;
                },
                t0: function () {
                    return c;
                },
                uH: function () {
                    return ed;
                },
                uV: function () {
                    return ez;
                },
                v0: function () {
                    return i;
                },
                vP: function () {
                    return en;
                },
                vb: function () {
                    return N;
                },
                xL: function () {
                    return ev;
                },
                xR: function () {
                    return $;
                },
                xy: function () {
                    return eb;
                },
                y8: function () {
                    return ep;
                },
                yM: function () {
                    return P;
                },
                yV: function () {
                    return B;
                },
                zj: function () {
                    return d;
                },
                zm: function () {
                    return et;
                },
            }),
                n(67294);
            let r = { alpha: !1, desynchronized: !0 },
                i = { referrerPolicy: "no-referrer", sandbox: "allow-downloads allow-forms allow-modals allow-pointer-lock allow-popups allow-presentation allow-same-origin allow-scripts" },
                o = "en",
                s = !0,
                a = "local",
                c = "defaultTheme",
                u = "VANTA",
                l = "fill",
                p = 13,
                f = 9,
                h = 68,
                d = 51,
                m = { height: 510, width: 640 },
                g = "Share",
                y = { tabIndex: -1 },
                b = { as: "div", role: "button", ...y },
                w = "FileSystemAccessHandles",
                v = "/Users/Public",
                S = `${v}/Pictures`,
                E = `${v}/Videos`,
                x = "/index.html",
                k = "prompts.json",
                _ = "slideshow.json",
                j = 15e3,
                I = 2,
                T = 24,
                P = 200,
                C = { animate: { opacity: 1 }, initial: { opacity: 0 }, transition: { duration: 0.15 } },
                F = new Set([".heic", ".heics", ".heif", ".heifs", ".avci", ".avcs"]),
                O = new Set([".cr2", ".dng", ".nef", ".tif", ".tiff"]),
                A = new Set([".jpeg", ".jpg", ".png"]),
                R = new Set([...F, ...O, ".ani", ".apng", ".avif", ".bmp", ".cur", ".gif", ".ico", ".jfif", ".jif", ".jpe", ".jpeg", ".jpg", ".jxl", ".pjp", ".pjpeg", ".png", ".svg", ".qoi", ".webp", ".xbm"]),
                N = new Set([...F, ...O, ".jxl", ".qoi", ".svg"]),
                B = ["MonacoEditor", "Vim"],
                L = new Set([".ani", ".cur"]),
                D = new Set([".bmp", ".gif", ".ico", ".jfif", ".jpe", ".jpeg", ".jpg", ".png", ".tif", ".tiff", ".webp"]),
                U = 223,
                M = { seperator: !0 },
                z = 1e3,
                V = 6e4,
                $ = 864e5,
                W = new Set([".iso", ".jsdos", ".wsz", ".zip"]),
                H = [".csv", ".numbers", ".ods", ".xls", ".xlsx"],
                G = "audio/mpeg",
                q = "video/mp4",
                Y = "‑",
                K = { once: !0, passive: !0 },
                J = { preventScroll: !0 },
                X = "__",
                Z = `${v}/Snapshots`,
                Q = `${v}/Pictures`,
                ee = " - Shortcut",
                et = ".url",
                en = new Set(["desktop.ini"]),
                er = new Set(["/.deletedFiles.log"]),
                ei = `${v}/Desktop`,
                eo = `${v}/Start Menu`,
                es = new Set([ei]),
                ea = { DOUBLE_CLICK: 500, LONG_PRESS: 500, MOUSE_IN_OUT: 300, TASKBAR_ITEM: 400, WINDOW: 250 },
                ec = { TASKBAR_ITEM: ea.TASKBAR_ITEM / z, WINDOW: ea.WINDOW / z },
                eu = 150,
                el = 750,
                ep = 864e5,
                ef = { rootMargin: "3px", threshold: 0 },
                eh = new Set([".aac", ".oga", ".wav"]),
                ed = new Set([".asx", ".m3u", ".pls"]),
                em = new Set([".m4v", ".mkv", ".mov", ".mp4", ".ogg", ".ogm", ".ogv", ".webm"]),
                eg = ["nostr:"],
                ey = new Set([...eh, ...ed, ...R, ...O, ...em, ".ani", ".exe", ".mp3", ".sav", ".whtml"]),
                eb = "●",
                ew = "My PC",
                ev = "/System",
                eS = `${ew}.url`,
                eE = `${ev}/Icons`,
                ex = `${eE}/photo.webp`,
                ek = `${v}/Icons`,
                e_ = `${ek}/Cache`,
                ej = `${e_}/YouTube`,
                eI = ".cache",
                eT = "/session.json",
                eP = `${eE}/shortcut.webp`,
                eC = "/favicon.ico",
                eF = `${eE}/folder.webp`,
                eO = `${eE}/folder_back.webp`,
                eA = `${eE}/folder_front.webp`,
                eR = `${eE}/compressed.webp`,
                eN = `${eE}/mounted.webp`,
                eB = `${eE}/new_folder.webp`,
                eL = `${eE}/unknown.webp`,
                eD = { day: "2-digit", hour: "2-digit", hour12: !1, minute: "2-digit", month: "2-digit", second: "2-digit", year: "numeric" },
                eU = { 64: 96 },
                eM = { desktop: [16, 32], document: [16, 32], folder: [16, 16], mounted: [16, 16], music: [16, 32], pc: [16, 16], pictures: [16, 32], user: [16, 16], videos: [16, 32] },
                ez = [3, 2, 1],
                eV = [16, 32, 48, 96, 144],
                e$ = 144,
                eW = `${ei}/Untitled.txt`,
                eH = 17,
                eG = 30,
                eq = {
                    alias: "daedalOS",
                    author: { email: "dustinbrett@gmail.com", name: "Dustin Brett", npub: "npub10uc7hg6wdxhhd7ee8x9c5lr9d0ux7272rv2m0mc03ds54q7quxjss02r3p", url: "https://dustinbrett.com" },
                    description: "Desktop environment in the browser",
                    license: "MIT",
                    version: "2.0.0",
                },
                eY = { consume: !0, level: 0, mem: 8 },
                eK = { priority: "high" },
                eJ = { fetchpriority: "high" },
                eX = { autoCapitalize: "off", autoComplete: "off", autoCorrect: "off", spellCheck: !1 };
        },
        6484: function (e, t, n) {
            "use strict";
            let r, i, o;
            n.d(t, {
                $Z: function () {
                    return v;
                },
                AC: function () {
                    return ei;
                },
                BU: function () {
                    return H;
                },
                E9: function () {
                    return R;
                },
                EK: function () {
                    return k;
                },
                G6: function () {
                    return Y;
                },
                H5: function () {
                    return V;
                },
                Ld: function () {
                    return et;
                },
                PS: function () {
                    return Q;
                },
                Q4: function () {
                    return en;
                },
                Qv: function () {
                    return G;
                },
                RT: function () {
                    return d;
                },
                RU: function () {
                    return b;
                },
                TF: function () {
                    return m;
                },
                UP: function () {
                    return ec;
                },
                UR: function () {
                    return W;
                },
                V4: function () {
                    return p;
                },
                Vy: function () {
                    return O;
                },
                Wy: function () {
                    return Z;
                },
                YS: function () {
                    return f;
                },
                bN: function () {
                    return h;
                },
                df: function () {
                    return es;
                },
                fv: function () {
                    return x;
                },
                gE: function () {
                    return eo;
                },
                iQ: function () {
                    return er;
                },
                km: function () {
                    return w;
                },
                kp: function () {
                    return X;
                },
                mE: function () {
                    return N;
                },
                mZ: function () {
                    return F;
                },
                mb: function () {
                    return C;
                },
                nK: function () {
                    return K;
                },
                nS: function () {
                    return J;
                },
                qs: function () {
                    return ea;
                },
                rB: function () {
                    return B;
                },
                sI: function () {
                    return A;
                },
                u2: function () {
                    return I;
                },
                vU: function () {
                    return q;
                },
                vi: function () {
                    return z;
                },
                w8: function () {
                    return E;
                },
                wB: function () {
                    return S;
                },
                xr: function () {
                    return y;
                },
                yk: function () {
                    return ee;
                },
                z8: function () {
                    return l;
                },
                zr: function () {
                    return U;
                },
            });
            var s = n(1864),
                a = n(97836),
                c = n(61929),
                u = n(48764).Buffer;
            let l = "https://www.google.com/search?igu=1&q=",
                p = (e, t) => new Blob([e], t ? { type: t } : void 0),
                f = (e, t) => (t ? `data:${t};base64,${e.toString("base64")}` : URL.createObjectURL(p(e))),
                h = () => ("number" == typeof r ? r : (r = Math.min(Math.ceil(window.devicePixelRatio), 3))),
                d = (e) => (0, s.extname)(e).toLowerCase(),
                m = (e, t = 1) => {
                    0 !== t && (e.dispatchEvent(new MouseEvent("click", { bubbles: !0 })), m(e, t - 1));
                },
                g = [],
                y = (e, t, n) => {
                    let r = t.length > 0 && !t.some((t) => !e[t]?.minimized),
                        i = r ? [...t].reverse() : t;
                    r || (g = []),
                        i.forEach((t) => {
                            r ? g.includes(t) && n(t) : e[t]?.minimized || (g.push(t), n(t));
                        }),
                        r && requestAnimationFrame(() => e[t[0]]?.componentWindow?.focus(a.eS));
                },
                b = (e, t, n, r) => {
                    let i = (0, s.basename)(e, ".webp"),
                        [o, c] = a.UC[i] || [],
                        u = t * n,
                        l = Math.min(a.qO, o === t ? Math.min(c, u) : u);
                    return `${(0, s.join)((0, s.dirname)(e), `${a.Ge[l] || l}x${a.Ge[l] || l}`, `${i}${r}`).replace(/\\/g, "/")}${n > 1 ? ` ${n}x` : ""}`;
                },
                w = (e, t, n, r = []) => {
                    let i = [b(e, t, 1, n), b(e, t, 2, n), b(e, t, 3, n)].filter((e) => 0 === r.length || r.includes(e.split(" ")[0])).join(", ");
                    return r?.includes(i) ? "" : i;
                },
                v = (e, t) => {
                    let n = new Set(
                        new Set(
                            t.map((t) => {
                                let n = (0, s.basename)(e, (0, s.extname)(e));
                                return Number(t.replace(`${a.OT}/`, "").replace(`${a.P7}/`, "").replace(`/${n}.png`, "").replace(`/${n}.webp`, "").split("x")[0]);
                            })
                        )
                    );
                    return a.ob
                        .filter((e) => !n.has(e))
                        .map((t) => b(e, t, 1, (0, s.extname)(e)))
                        .reverse()
                        .join(", ");
                },
                S = (e, t) => (".svg" === e ? `data:image/svg+xml;base64,${window.btoa(t.toString())}` : `data:image/${".ani" === e || ".gif" === e ? "gif" : "png"};base64,${t.toString("base64")}`),
                E = (e) =>
                    new Promise((t) => {
                        let n = new FileReader();
                        n.readAsDataURL(e), (n.onloadend = () => t(n.result));
                    }),
                x = (e) => {
                    let t = document.createElement("canvas");
                    return (t.width = e.width), (t.height = e.height), t.getContext("2d")?.putImageData(e, 0, 0), u.from(t?.toDataURL("image/png").replace("data:image/png;base64,", ""), "base64");
                },
                k = (e) => URL.revokeObjectURL(e),
                _ = (e, t, n) => {
                    for (let r = 0; r < t; ++r) if (0 !== e.data[n * t * 4 + 4 * r + 3]) return !1;
                    return !0;
                },
                j = (e, t, n, r, i) => {
                    for (let o = r; o < i; ++o) if (0 !== e.data[o * t * 4 + 4 * n + 3]) return !1;
                    return !0;
                },
                I = (e) => {
                    let t = e.getContext("2d", { alpha: !0, desynchronized: !0, willReadFrequently: !0 });
                    if (!t) return e;
                    let { height: n, ownerDocument: r, width: i } = e,
                        o = t.getImageData(0, 0, i, n),
                        { height: s, width: a } = o,
                        c = 0,
                        u = 0;
                    for (; c < s && _(o, i, c);) ++c;
                    for (; u < a && j(o, i, u, c, s);) ++u;
                    let l = t.getImageData(u, c, a - u, s - c),
                        p = r.createElement("canvas"),
                        f = p.getContext("2d");
                    return f ? ((p.width = l.width), (p.height = l.height), f.putImageData(l, 0, 0), p) : e;
                },
                T = (e, t, n, r) =>
                    new Promise((i, o) => {
                        let s = [...document.scripts].find((t) => t.src.endsWith(e));
                        if (s) {
                            if (!n) {
                                i(new Event("Already loaded."));
                                return;
                            }
                            s.remove();
                        }
                        let c = document.createElement("script");
                        (c.async = !1), t && (c.defer = !0), r && (c.type = "module"), (c.fetchPriority = "high"), (c.src = e), c.addEventListener("error", o, a.K7), c.addEventListener("load", i, a.K7), document.head.append(c);
                    }),
                P = (e) =>
                    new Promise((t, n) => {
                        if ([...document.querySelectorAll("link[rel=stylesheet]")].some((t) => t.href.endsWith(e))) {
                            t(new Event("Already loaded."));
                            return;
                        }
                        let r = document.createElement("link");
                        (r.rel = "stylesheet"), (r.fetchPriority = "high"), (r.href = e), r.addEventListener("error", n, a.K7), r.addEventListener("load", t, a.K7), document.head.append(r);
                    }),
                C = async (e, t, n, r) =>
                    e && 0 !== e.length
                        ? e.reduce(async (e, i) => {
                            await (".css" === d(i) ? P(encodeURI(i)) : T(encodeURI(i), t, n, r));
                        }, Promise.resolve())
                        : Promise.resolve(),
                F = async () => {
                    await C(["./System/html-to-image/html-to-image.js"]);
                    let { htmlToImage: e } = window;
                    return e;
                },
                O = (e = 0) => ("number" == typeof e ? e : Number.parseFloat(e)),
                A = () => window.innerHeight,
                R = () => window.innerWidth,
                N = () => ({ x: R(), y: A() - a.bK }),
                B = ({ offsetHeight: e }, { right: t = 0, left: n = 0, top: r = 0, bottom: i = 0 } = {}, { width: o = 0, height: s = 0 } = {}) => {
                    let [c, u] = [A(), R()];
                    return { x: O(o) >= u ? 0 : n || u - t, y: O(s) + a.bK >= c ? 0 : r || c - i - e };
                },
                L = "grid-template-rows",
                D = (e, { x: t = 0, y: n = 0 }) => {
                    if (!e) return Object.create(null);
                    let r = window.getComputedStyle(e),
                        i = r.getPropertyValue(L).split(" "),
                        o = r.getPropertyValue("grid-template-columns").split(" "),
                        s = O(i[0]),
                        a = O(o[0]),
                        c = O(r.getPropertyValue("grid-column-gap")),
                        u = O(r.getPropertyValue("grid-row-gap")),
                        l = O(r.getPropertyValue("padding-top"));
                    return { gridColumnStart: Math.min(Math.ceil(t / (a + c)), o.length), gridRowStart: Math.min(Math.ceil((n - l) / (s + u)), i.length) };
                },
                U = (e, t, n, r) => {
                    if (!t) return n;
                    let [i = []] = r[e] || [],
                        o = {},
                        a = window.getComputedStyle(t).getPropertyValue(L).split(" ").length;
                    return (
                        i.forEach((r, i) => {
                            let c = (0, s.join)(e, r);
                            if (!n[c]) {
                                let e = [...t.children].find((e) => e.querySelector(`button[aria-label="${r}"]`));
                                if (e instanceof HTMLElement) {
                                    let { x: n, y: r, height: i, width: s } = e.getBoundingClientRect();
                                    o[c] = D(t, { x: n - s, y: r + i });
                                } else {
                                    let e = i + 1,
                                        t = Math.ceil(e / a);
                                    o[c] = { gridColumnStart: t, gridRowStart: e - a * (t - 1) };
                                }
                            }
                        }),
                        Object.keys(o).length > 0 ? { ...o, ...n } : n
                    );
                },
                M = (e, t, n, r, [, ...i], o) => {
                    if (n[e] && n[t]) return { gridColumnStart: n[e].gridColumnStart + (r.gridColumnStart - n[t].gridColumnStart), gridRowStart: n[e].gridRowStart + (r.gridRowStart - n[t].gridRowStart) };
                    let a = window.getComputedStyle(o).getPropertyValue(L).split(" ").length,
                        { gridColumnStart: c, gridRowStart: u } = r,
                        l = u + i.indexOf((0, s.basename)(e)) + 1;
                    return l > a ? { gridColumnStart: c + Math.ceil(l / a) - 1, gridRowStart: l % a || a } : { gridColumnStart: c, gridRowStart: l };
                },
                z = (e, t, n, r, i, o, a, c) => {
                    if (!t || 0 === o.length) return;
                    let u = U(e, t, n, r),
                        l = D(t, i),
                        p = Object.entries(u).find(([, { gridColumnStart: e, gridRowStart: t }]) => e === l.gridColumnStart && t === l.gridRowStart),
                        f = () => {
                            let n = o.find((e) => e.startsWith(document.activeElement?.textContent || "")) || o[0],
                                r = (0, s.join)(e, n),
                                i = [n, ...o.filter((e) => e !== n)],
                                c = Object.fromEntries(
                                    i
                                        .map((n) => {
                                            let o = (0, s.join)(e, n);
                                            return [o, o === r ? l : M(o, r, u, l, i, t)];
                                        })
                                        .filter(([, { gridColumnStart: e, gridRowStart: t }]) => e >= 1 && t >= 1)
                                );
                            a({ ...u, ...Object.fromEntries(Object.entries(c).filter(([, { gridColumnStart: e, gridRowStart: t }]) => !Object.values(u).some(({ gridColumnStart: n, gridRowStart: r }) => e === n && t === r))) });
                        };
                    if (p) {
                        let [e] = p;
                        c(e).then((t) => {
                            t || (delete u[e], f());
                        });
                    } else f();
                },
                V = (e) => {
                    if (!(e instanceof HTMLCanvasElement) || 0 === e.width || 0 === e.height) return !1;
                    let { data: t = [] } = e.getContext("2d", { willReadFrequently: !0 })?.getImageData(0, 0, e.width, e.height) || {};
                    if (0 === t.length) return !1;
                    let n = { 0: 0, 255: 0 };
                    for (let e of t) {
                        if (0 !== e && 255 !== e) return !0;
                        n[e] += 1;
                    }
                    return !(n[0] === t.length || n[255] === t.length || (n[255] + n[0] === t.length && n[0] / 3 === n[255]));
                },
                $ = (e) => {
                    let t = new Intl.NumberFormat("en-US", { maximumSignificantDigits: e < 1 ? 2 : 4, minimumSignificantDigits: e < 1 ? 2 : 3 }).format(Number(e.toFixed(4).slice(0, -2))),
                        [n, r] = t.split(".");
                    return 3 === n.length ? n : 2 === n.length && 2 === r.length ? `${n}.${r[0]}` : t;
                },
                W = (e = 0) => (1 === e ? "1 byte" : e < 1024 ? `${e} bytes` : e < 1022976 ? `${$(e / 1024)} KB` : e < 1047527424 ? `${$(e / 1024 / 1024)} MB` : e < 0xf9c0000000 ? `${$(e / 1024 / 1024 / 1024)} GB` : `${e} bytes`),
                H = () => {
                    let e = new Date();
                    return new Date(e.getTime() - 6e4 * e.getTimezoneOffset()).toISOString();
                },
                G = async (e) => {
                    let t = e.startsWith("ipfs://"),
                        r = e.startsWith("http://") || e.startsWith("https://"),
                        i = e.endsWith(".com") || e.endsWith(".ca") || e.endsWith(".net") || e.endsWith(".org"),
                        o = c.KM.has(e);
                    try {
                        let s = new URL(!o && (r || !i || t) ? e : `https://${e}`);
                        if (t) {
                            let { getIpfsGatewayUrl: e } = await n.e(1746, "high").then(n.bind(n, 31746));
                            return new URL(await e(s.href));
                        }
                        return s;
                    } catch {
                        return new URL(`${l}${e}`);
                    }
                },
                q = () => i || (i = /firefox/i.test(window.navigator.userAgent)),
                Y = () => o || (o = /^(?:(?!chrome|android).)*safari/i.test(window.navigator.userAgent)),
                K = (e) => {
                    try {
                        e.cancelable && (e.preventDefault(), e.stopPropagation());
                    } catch { }
                },
                J = (e, t = 1, n = Object.create(null)) => {
                    let r = document.createElement("canvas"),
                        i = Number(n?.height) || e.offsetHeight,
                        o = Number(n?.width) || e.offsetWidth;
                    return (r.style.height = `${i}px`), (r.style.width = `${o}px`), (r.height = Math.floor(i * t)), (r.width = Math.floor(o * t)), e.append(r), r.transferControlToOffscreen();
                },
                X = (e) => new URLSearchParams(window.location.search).get(e) || "",
                Z = (e) =>
                    Object.entries(e)
                        .filter(([, e]) => e)
                        .map(([e]) => e)
                        .join(" "),
                Q = (e) => ({ "aria-label": e, title: e }),
                ee = (e) => (e.includes("youtube.com/") || e.includes("youtu.be/")) && !e.includes("youtube.com/@") && !e.includes("/channel/") && !e.includes("/c/"),
                et = (e) => {
                    try {
                        let { pathname: t, searchParams: n } = new URL(e);
                        return n.get("v") || t.split("/").pop() || "";
                    } catch { }
                    return "";
                },
                en = (e = []) => {
                    let t = [...document.scripts],
                        n = [...document.querySelectorAll("link[rel=preload]")];
                    e.map(encodeURI).forEach((e) => {
                        if (t.some((t) => t.src.endsWith(e)) || n.some((t) => t.href.endsWith(e))) return;
                        let r = document.createElement("link");
                        switch (((r.fetchPriority = "high"), (r.rel = "preload"), (r.href = e), d(e))) {
                            case ".css":
                                r.as = "style";
                                break;
                            case ".htm":
                            case ".html":
                                r.rel = "prerender";
                                break;
                            case ".json":
                            case ".wasm":
                                (r.as = "fetch"), (r.crossOrigin = "anonymous");
                                break;
                            default:
                                r.as = "script";
                        }
                        document.head.append(r);
                    });
                },
                er = async () => {
                    let { default: e } = await n.e(9762, "high").then(n.t.bind(n, 89762, 23));
                    return new e({ quality: 10, workerScript: "ProgramFiles/gif.js/gif.worker.js", workers: Math.max(Math.floor(navigator.hardwareConcurrency / 4), 1) });
                },
                ei = async (e) => {
                    let t = await fetch(e, a.P8);
                    return (await t.json()) || {};
                },
                eo = () => new Intl.DateTimeFormat(a.ZW, a.ko).format(new Date()).replace(/[/:]/g, "-").replace(",", ""),
                es = () => "function" == typeof FileSystemHandle && "showDirectoryPicker" in window,
                ea = (e) => "string" == typeof e && (e.startsWith(a.OT) || (e.startsWith(a.P7) && !e.startsWith(a.Xo))),
                ec = () => window.matchMedia("(pointer: fine)").matches;
        },
        1864: function (e) {
            !(function () {
                "use strict";
                var t = {
                    114: function (e) {
                        function t(e) {
                            if ("string" != typeof e) throw TypeError("Path must be a string. Received " + JSON.stringify(e));
                        }
                        function n(e, t) {
                            for (var n, r = "", i = 0, o = -1, s = 0, a = 0; a <= e.length; ++a) {
                                if (a < e.length) n = e.charCodeAt(a);
                                else if (47 === n) break;
                                else n = 47;
                                if (47 === n) {
                                    if (o === a - 1 || 1 === s);
                                    else if (o !== a - 1 && 2 === s) {
                                        if (r.length < 2 || 2 !== i || 46 !== r.charCodeAt(r.length - 1) || 46 !== r.charCodeAt(r.length - 2)) {
                                            if (r.length > 2) {
                                                var c = r.lastIndexOf("/");
                                                if (c !== r.length - 1) {
                                                    -1 === c ? ((r = ""), (i = 0)) : (i = (r = r.slice(0, c)).length - 1 - r.lastIndexOf("/")), (o = a), (s = 0);
                                                    continue;
                                                }
                                            } else if (2 === r.length || 1 === r.length) {
                                                (r = ""), (i = 0), (o = a), (s = 0);
                                                continue;
                                            }
                                        }
                                        t && (r.length > 0 ? (r += "/..") : (r = ".."), (i = 2));
                                    } else r.length > 0 ? (r += "/" + e.slice(o + 1, a)) : (r = e.slice(o + 1, a)), (i = a - o - 1);
                                    (o = a), (s = 0);
                                } else 46 === n && -1 !== s ? ++s : (s = -1);
                            }
                            return r;
                        }
                        var r = {
                            resolve: function () {
                                for (var e, r, i = "", o = !1, s = arguments.length - 1; s >= -1 && !o; s--)
                                    s >= 0 ? (r = arguments[s]) : (void 0 === e && (e = ""), (r = e)), t(r), 0 !== r.length && ((i = r + "/" + i), (o = 47 === r.charCodeAt(0)));
                                return ((i = n(i, !o)), o) ? (i.length > 0 ? "/" + i : "/") : i.length > 0 ? i : ".";
                            },
                            normalize: function (e) {
                                if ((t(e), 0 === e.length)) return ".";
                                var r = 47 === e.charCodeAt(0),
                                    i = 47 === e.charCodeAt(e.length - 1);
                                return (0 !== (e = n(e, !r)).length || r || (e = "."), e.length > 0 && i && (e += "/"), r) ? "/" + e : e;
                            },
                            isAbsolute: function (e) {
                                return t(e), e.length > 0 && 47 === e.charCodeAt(0);
                            },
                            join: function () {
                                if (0 == arguments.length) return ".";
                                for (var e, n = 0; n < arguments.length; ++n) {
                                    var i = arguments[n];
                                    t(i), i.length > 0 && (void 0 === e ? (e = i) : (e += "/" + i));
                                }
                                return void 0 === e ? "." : r.normalize(e);
                            },
                            relative: function (e, n) {
                                if ((t(e), t(n), e === n || (e = r.resolve(e)) === (n = r.resolve(n)))) return "";
                                for (var i = 1; i < e.length && 47 === e.charCodeAt(i); ++i);
                                for (var o = e.length, s = o - i, a = 1; a < n.length && 47 === n.charCodeAt(a); ++a);
                                for (var c = n.length - a, u = s < c ? s : c, l = -1, p = 0; p <= u; ++p) {
                                    if (p === u) {
                                        if (c > u) {
                                            if (47 === n.charCodeAt(a + p)) return n.slice(a + p + 1);
                                            if (0 === p) return n.slice(a + p);
                                        } else s > u && (47 === e.charCodeAt(i + p) ? (l = p) : 0 === p && (l = 0));
                                        break;
                                    }
                                    var f = e.charCodeAt(i + p);
                                    if (f !== n.charCodeAt(a + p)) break;
                                    47 === f && (l = p);
                                }
                                var h = "";
                                for (p = i + l + 1; p <= o; ++p) (p === o || 47 === e.charCodeAt(p)) && (0 === h.length ? (h += "..") : (h += "/.."));
                                return h.length > 0 ? h + n.slice(a + l) : ((a += l), 47 === n.charCodeAt(a) && ++a, n.slice(a));
                            },
                            _makeLong: function (e) {
                                return e;
                            },
                            dirname: function (e) {
                                if ((t(e), 0 === e.length)) return ".";
                                for (var n = e.charCodeAt(0), r = 47 === n, i = -1, o = !0, s = e.length - 1; s >= 1; --s)
                                    if (47 === (n = e.charCodeAt(s))) {
                                        if (!o) {
                                            i = s;
                                            break;
                                        }
                                    } else o = !1;
                                return -1 === i ? (r ? "/" : ".") : r && 1 === i ? "//" : e.slice(0, i);
                            },
                            basename: function (e, n) {
                                if (void 0 !== n && "string" != typeof n) throw TypeError('"ext" argument must be a string');
                                t(e);
                                var r,
                                    i = 0,
                                    o = -1,
                                    s = !0;
                                if (void 0 !== n && n.length > 0 && n.length <= e.length) {
                                    if (n.length === e.length && n === e) return "";
                                    var a = n.length - 1,
                                        c = -1;
                                    for (r = e.length - 1; r >= 0; --r) {
                                        var u = e.charCodeAt(r);
                                        if (47 === u) {
                                            if (!s) {
                                                i = r + 1;
                                                break;
                                            }
                                        } else -1 === c && ((s = !1), (c = r + 1)), a >= 0 && (u === n.charCodeAt(a) ? -1 == --a && (o = r) : ((a = -1), (o = c)));
                                    }
                                    return i === o ? (o = c) : -1 === o && (o = e.length), e.slice(i, o);
                                }
                                for (r = e.length - 1; r >= 0; --r)
                                    if (47 === e.charCodeAt(r)) {
                                        if (!s) {
                                            i = r + 1;
                                            break;
                                        }
                                    } else -1 === o && ((s = !1), (o = r + 1));
                                return -1 === o ? "" : e.slice(i, o);
                            },
                            extname: function (e) {
                                t(e);
                                for (var n = -1, r = 0, i = -1, o = !0, s = 0, a = e.length - 1; a >= 0; --a) {
                                    var c = e.charCodeAt(a);
                                    if (47 === c) {
                                        if (!o) {
                                            r = a + 1;
                                            break;
                                        }
                                        continue;
                                    }
                                    -1 === i && ((o = !1), (i = a + 1)), 46 === c ? (-1 === n ? (n = a) : 1 !== s && (s = 1)) : -1 !== n && (s = -1);
                                }
                                return -1 === n || -1 === i || 0 === s || (1 === s && n === i - 1 && n === r + 1) ? "" : e.slice(n, i);
                            },
                            format: function (e) {
                                var t, n;
                                if (null === e || "object" != typeof e) throw TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof e);
                                return (t = e.dir || e.root), (n = e.base || (e.name || "") + (e.ext || "")), t ? (t === e.root ? t + n : t + "/" + n) : n;
                            },
                            parse: function (e) {
                                t(e);
                                var n,
                                    r = { root: "", dir: "", base: "", ext: "", name: "" };
                                if (0 === e.length) return r;
                                var i = e.charCodeAt(0),
                                    o = 47 === i;
                                o ? ((r.root = "/"), (n = 1)) : (n = 0);
                                for (var s = -1, a = 0, c = -1, u = !0, l = e.length - 1, p = 0; l >= n; --l) {
                                    if (47 === (i = e.charCodeAt(l))) {
                                        if (!u) {
                                            a = l + 1;
                                            break;
                                        }
                                        continue;
                                    }
                                    -1 === c && ((u = !1), (c = l + 1)), 46 === i ? (-1 === s ? (s = l) : 1 !== p && (p = 1)) : -1 !== s && (p = -1);
                                }
                                return (
                                    -1 === s || -1 === c || 0 === p || (1 === p && s === c - 1 && s === a + 1)
                                        ? -1 !== c && (0 === a && o ? (r.base = r.name = e.slice(1, c)) : (r.base = r.name = e.slice(a, c)))
                                        : (0 === a && o ? ((r.name = e.slice(1, s)), (r.base = e.slice(1, c))) : ((r.name = e.slice(a, s)), (r.base = e.slice(a, c))), (r.ext = e.slice(s, c))),
                                    a > 0 ? (r.dir = e.slice(0, a - 1)) : o && (r.dir = "/"),
                                    r
                                );
                            },
                            sep: "/",
                            delimiter: ":",
                            win32: null,
                            posix: null,
                        };
                        (r.posix = r), (e.exports = r);
                    },
                },
                    n = {};
                function r(e) {
                    var i = n[e];
                    if (void 0 !== i) return i.exports;
                    var o = (n[e] = { exports: {} }),
                        s = !0;
                    try {
                        t[e](o, o.exports, r), (s = !1);
                    } finally {
                        s && delete n[e];
                    }
                    return o.exports;
                }
                r.ab = "//";
                var i = r(114);
                e.exports = i;
            })();
        },
        5152: function (e, t, n) {
            e.exports = n(28864);
        },
        9008: function (e, t, n) {
            e.exports = n(7828);
        },
        34155: function (e) {
            var t,
                n,
                r,
                i = (e.exports = {});
            function o() {
                throw Error("setTimeout has not been defined");
            }
            function s() {
                throw Error("clearTimeout has not been defined");
            }
            function a(e) {
                if (t === setTimeout) return setTimeout(e, 0);
                if ((t === o || !t) && setTimeout) return (t = setTimeout), setTimeout(e, 0);
                try {
                    return t(e, 0);
                } catch (n) {
                    try {
                        return t.call(null, e, 0);
                    } catch (n) {
                        return t.call(this, e, 0);
                    }
                }
            }
            !(function () {
                try {
                    t = "function" == typeof setTimeout ? setTimeout : o;
                } catch (e) {
                    t = o;
                }
                try {
                    n = "function" == typeof clearTimeout ? clearTimeout : s;
                } catch (e) {
                    n = s;
                }
            })();
            var c = [],
                u = !1,
                l = -1;
            function p() {
                u && r && ((u = !1), r.length ? (c = r.concat(c)) : (l = -1), c.length && f());
            }
            function f() {
                if (!u) {
                    var e = a(p);
                    u = !0;
                    for (var t = c.length; t;) {
                        for (r = c, c = []; ++l < t;) r && r[l].run();
                        (l = -1), (t = c.length);
                    }
                    (r = null),
                        (u = !1),
                        (function (e) {
                            if (n === clearTimeout) return clearTimeout(e);
                            if ((n === s || !n) && clearTimeout) return (n = clearTimeout), clearTimeout(e);
                            try {
                                n(e);
                            } catch (t) {
                                try {
                                    return n.call(null, e);
                                } catch (t) {
                                    return n.call(this, e);
                                }
                            }
                        })(e);
                }
            }
            function h(e, t) {
                (this.fun = e), (this.array = t);
            }
            function d() { }
            (i.nextTick = function (e) {
                var t = Array(arguments.length - 1);
                if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                c.push(new h(e, t)), 1 !== c.length || u || a(f);
            }),
                (h.prototype.run = function () {
                    this.fun.apply(null, this.array);
                }),
                (i.title = "browser"),
                (i.browser = !0),
                (i.env = {}),
                (i.argv = []),
                (i.version = ""),
                (i.versions = {}),
                (i.on = d),
                (i.addListener = d),
                (i.once = d),
                (i.off = d),
                (i.removeListener = d),
                (i.removeAllListeners = d),
                (i.emit = d),
                (i.prependListener = d),
                (i.prependOnceListener = d),
                (i.listeners = function (e) {
                    return [];
                }),
                (i.binding = function (e) {
                    throw Error("process.binding is not supported");
                }),
                (i.cwd = function () {
                    return "/";
                }),
                (i.chdir = function (e) {
                    throw Error("process.chdir is not supported");
                }),
                (i.umask = function () {
                    return 0;
                });
        },
        96774: function (e) {
            e.exports = function (e, t, n, r) {
                var i = n ? n.call(r, e, t) : void 0;
                if (void 0 !== i) return !!i;
                if (e === t) return !0;
                if ("object" != typeof e || !e || "object" != typeof t || !t) return !1;
                var o = Object.keys(e),
                    s = Object.keys(t);
                if (o.length !== s.length) return !1;
                for (var a = Object.prototype.hasOwnProperty.bind(t), c = 0; c < o.length; c++) {
                    var u = o[c];
                    if (!a(u)) return !1;
                    var l = e[u],
                        p = t[u];
                    if (!1 === (i = n ? n.call(r, l, p, u) : void 0) || (void 0 === i && l !== p)) return !1;
                }
                return !0;
            };
        },
        10508: function (e, t, n) {
            "use strict";
            n.d(t, {
                LC: function () {
                    return e6;
                },
                f6: function () {
                    return ta;
                },
                vJ: function () {
                    return tg;
                },
                iv: function () {
                    return tf;
                },
                ZP: function () {
                    return td;
                },
                Fg: function () {
                    return ts;
                },
            });
            var r = function () {
                return (r =
                    Object.assign ||
                    function (e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                        return e;
                    }).apply(this, arguments);
            };
            function i(e, t, n) {
                if (n || 2 == arguments.length) for (var r, i = 0, o = t.length; i < o; i++) (!r && i in t) || (r || (r = Array.prototype.slice.call(t, 0, i)), (r[i] = t[i]));
                return e.concat(r || Array.prototype.slice.call(t));
            }
            "function" == typeof SuppressedError && SuppressedError;
            var o = n(67294),
                s = n(96774),
                a = n.n(s),
                c = "-ms-",
                u = "-moz-",
                l = "-webkit-",
                p = "comm",
                f = "rule",
                h = "decl",
                d = "@keyframes",
                m = Math.abs,
                g = String.fromCharCode,
                y = Object.assign;
            function b(e, t) {
                return (e = t.exec(e)) ? e[0] : e;
            }
            function w(e, t, n) {
                return e.replace(t, n);
            }
            function v(e, t, n) {
                return e.indexOf(t, n);
            }
            function S(e, t) {
                return 0 | e.charCodeAt(t);
            }
            function E(e, t, n) {
                return e.slice(t, n);
            }
            function x(e) {
                return e.length;
            }
            function k(e, t) {
                return t.push(e), e;
            }
            function _(e, t) {
                return e.filter(function (e) {
                    return !b(e, t);
                });
            }
            var j = 1,
                I = 1,
                T = 0,
                P = 0,
                C = 0,
                F = "";
            function O(e, t, n, r, i, o, s, a) {
                return { value: e, root: t, parent: n, type: r, props: i, children: o, line: j, column: I, length: s, return: "", siblings: a };
            }
            function A(e, t) {
                return y(O("", null, null, "", null, null, 0, e.siblings), e, { length: -e.length }, t);
            }
            function R(e) {
                for (; e.root;) e = A(e.root, { children: [e] });
                k(e, e.siblings);
            }
            function N() {
                return (C = P < T ? S(F, P++) : 0), I++, 10 === C && ((I = 1), j++), C;
            }
            function B() {
                return S(F, P);
            }
            function L(e) {
                switch (e) {
                    case 0:
                    case 9:
                    case 10:
                    case 13:
                    case 32:
                        return 5;
                    case 33:
                    case 43:
                    case 44:
                    case 47:
                    case 62:
                    case 64:
                    case 126:
                    case 59:
                    case 123:
                    case 125:
                        return 4;
                    case 58:
                        return 3;
                    case 34:
                    case 39:
                    case 40:
                    case 91:
                        return 2;
                    case 41:
                    case 93:
                        return 1;
                }
                return 0;
            }
            function D(e) {
                var t, n;
                return ((t = P - 1),
                    (n = (function e(t) {
                        for (; N();)
                            switch (C) {
                                case t:
                                    return P;
                                case 34:
                                case 39:
                                    34 !== t && 39 !== t && e(C);
                                    break;
                                case 40:
                                    41 === t && e(t);
                                    break;
                                case 92:
                                    N();
                            }
                        return P;
                    })(91 === e ? e + 2 : 40 === e ? e + 1 : e)),
                    E(F, t, n)).trim();
            }
            function U(e, t) {
                for (var n = "", r = 0; r < e.length; r++) n += t(e[r], r, e, t) || "";
                return n;
            }
            function M(e, t, n, r) {
                switch (e.type) {
                    case "@layer":
                        if (e.children.length) break;
                    case "@import":
                    case h:
                        return (e.return = e.return || e.value);
                    case p:
                        return "";
                    case d:
                        return (e.return = e.value + "{" + U(e.children, r) + "}");
                    case f:
                        if (!x((e.value = e.props.join(",")))) return "";
                }
                return x((n = U(e.children, r))) ? (e.return = e.value + "{" + n + "}") : "";
            }
            function z(e, t, n, r) {
                if (e.length > -1 && !e.return)
                    switch (e.type) {
                        case h:
                            e.return = (function e(t, n, r) {
                                var i;
                                switch (((i = n), 45 ^ S(t, 0) ? (((((((i << 2) ^ S(t, 0)) << 2) ^ S(t, 1)) << 2) ^ S(t, 2)) << 2) ^ S(t, 3) : 0)) {
                                    case 5103:
                                        return l + "print-" + t + t;
                                    case 5737:
                                    case 4201:
                                    case 3177:
                                    case 3433:
                                    case 1641:
                                    case 4457:
                                    case 2921:
                                    case 5572:
                                    case 6356:
                                    case 5844:
                                    case 3191:
                                    case 6645:
                                    case 3005:
                                    case 6391:
                                    case 5879:
                                    case 5623:
                                    case 6135:
                                    case 4599:
                                    case 4855:
                                    case 4215:
                                    case 6389:
                                    case 5109:
                                    case 5365:
                                    case 5621:
                                    case 3829:
                                        return l + t + t;
                                    case 4789:
                                        return u + t + t;
                                    case 5349:
                                    case 4246:
                                    case 4810:
                                    case 6968:
                                    case 2756:
                                        return l + t + u + t + c + t + t;
                                    case 5936:
                                        switch (S(t, n + 11)) {
                                            case 114:
                                                return l + t + c + w(t, /[svh]\w+-[tblr]{2}/, "tb") + t;
                                            case 108:
                                                return l + t + c + w(t, /[svh]\w+-[tblr]{2}/, "tb-rl") + t;
                                            case 45:
                                                return l + t + c + w(t, /[svh]\w+-[tblr]{2}/, "lr") + t;
                                        }
                                    case 6828:
                                    case 4268:
                                    case 2903:
                                        return l + t + c + t + t;
                                    case 6165:
                                        return l + t + c + "flex-" + t + t;
                                    case 5187:
                                        return l + t + w(t, /(\w+).+(:[^]+)/, l + "box-$1$2" + c + "flex-$1$2") + t;
                                    case 5443:
                                        return l + t + c + "flex-item-" + w(t, /flex-|-self/g, "") + (b(t, /flex-|baseline/) ? "" : c + "grid-row-" + w(t, /flex-|-self/g, "")) + t;
                                    case 4675:
                                        return l + t + c + "flex-line-pack" + w(t, /align-content|flex-|-self/g, "") + t;
                                    case 5548:
                                        return l + t + c + w(t, "shrink", "negative") + t;
                                    case 5292:
                                        return l + t + c + w(t, "basis", "preferred-size") + t;
                                    case 6060:
                                        return l + "box-" + w(t, "-grow", "") + l + t + c + w(t, "grow", "positive") + t;
                                    case 4554:
                                        return l + w(t, /([^-])(transform)/g, "$1" + l + "$2") + t;
                                    case 6187:
                                        return w(w(w(t, /(zoom-|grab)/, l + "$1"), /(image-set)/, l + "$1"), t, "") + t;
                                    case 5495:
                                    case 3959:
                                        return w(t, /(image-set\([^]*)/, l + "$1$`$1");
                                    case 4968:
                                        return w(w(t, /(.+:)(flex-)?(.*)/, l + "box-pack:$3" + c + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + l + t + t;
                                    case 4200:
                                        if (!b(t, /flex-|baseline/)) return c + "grid-column-align" + E(t, n) + t;
                                        break;
                                    case 2592:
                                    case 3360:
                                        return c + w(t, "template-", "") + t;
                                    case 4384:
                                    case 3616:
                                        if (
                                            r &&
                                            r.some(function (e, t) {
                                                return (n = t), b(e.props, /grid-\w+-end/);
                                            })
                                        )
                                            return ~v(t + (r = r[n].value), "span", 0) ? t : c + w(t, "-start", "") + t + c + "grid-row-span:" + (~v(r, "span", 0) ? b(r, /\d+/) : +b(r, /\d+/) - +b(t, /\d+/)) + ";";
                                        return c + w(t, "-start", "") + t;
                                    case 4896:
                                    case 4128:
                                        return r &&
                                            r.some(function (e) {
                                                return b(e.props, /grid-\w+-start/);
                                            })
                                            ? t
                                            : c + w(w(t, "-end", "-span"), "span ", "") + t;
                                    case 4095:
                                    case 3583:
                                    case 4068:
                                    case 2532:
                                        return w(t, /(.+)-inline(.+)/, l + "$1$2") + t;
                                    case 8116:
                                    case 7059:
                                    case 5753:
                                    case 5535:
                                    case 5445:
                                    case 5701:
                                    case 4933:
                                    case 4677:
                                    case 5533:
                                    case 5789:
                                    case 5021:
                                    case 4765:
                                        if (x(t) - 1 - n > 6)
                                            switch (S(t, n + 1)) {
                                                case 109:
                                                    if (45 !== S(t, n + 4)) break;
                                                case 102:
                                                    return w(t, /(.+:)(.+)-([^]+)/, "$1" + l + "$2-$3$1" + u + (108 == S(t, n + 3) ? "$3" : "$2-$3")) + t;
                                                case 115:
                                                    return ~v(t, "stretch", 0) ? e(w(t, "stretch", "fill-available"), n, r) + t : t;
                                            }
                                        break;
                                    case 5152:
                                    case 5920:
                                        return w(t, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function (e, n, r, i, o, s, a) {
                                            return c + n + ":" + r + a + (i ? c + n + "-span:" + (o ? s : +s - +r) + a : "") + t;
                                        });
                                    case 4949:
                                        if (121 === S(t, n + 6)) return w(t, ":", ":" + l) + t;
                                        break;
                                    case 6444:
                                        switch (S(t, 45 === S(t, 14) ? 18 : 11)) {
                                            case 120:
                                                return w(t, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + l + (45 === S(t, 14) ? "inline-" : "") + "box$3$1" + l + "$2$3$1" + c + "$2box$3") + t;
                                            case 100:
                                                return w(t, ":", ":" + c) + t;
                                        }
                                        break;
                                    case 5719:
                                    case 2647:
                                    case 2135:
                                    case 3927:
                                    case 2391:
                                        return w(t, "scroll-", "scroll-snap-") + t;
                                }
                                return t;
                            })(e.value, e.length, n);
                            return;
                        case d:
                            return U([A(e, { value: w(e.value, "@", "@" + l) })], r);
                        case f:
                            if (e.length) {
                                var i, o;
                                return (
                                    (i = n = e.props),
                                    (o = function (t) {
                                        switch (b(t, (r = /(::plac\w+|:read-\w+)/))) {
                                            case ":read-only":
                                            case ":read-write":
                                                R(A(e, { props: [w(t, /:(read-\w+)/, ":" + u + "$1")] })), R(A(e, { props: [t] })), y(e, { props: _(n, r) });
                                                break;
                                            case "::placeholder":
                                                R(A(e, { props: [w(t, /:(plac\w+)/, ":" + l + "input-$1")] })),
                                                    R(A(e, { props: [w(t, /:(plac\w+)/, ":" + u + "$1")] })),
                                                    R(A(e, { props: [w(t, /:(plac\w+)/, c + "input-$1")] })),
                                                    R(A(e, { props: [t] })),
                                                    y(e, { props: _(n, r) });
                                        }
                                        return "";
                                    }),
                                    i.map(o).join("")
                                );
                            }
                    }
            }
            function V(e, t, n, r, i, o, s, a, c, u, l, p) {
                for (var h = i - 1, d = 0 === i ? o : [""], g = d.length, y = 0, b = 0, v = 0; y < r; ++y)
                    for (var S = 0, x = E(e, h + 1, (h = m((b = s[y])))), k = e; S < g; ++S) (k = (b > 0 ? d[S] + " " + x : w(x, /&\f/g, d[S])).trim()) && (c[v++] = k);
                return O(e, t, n, 0 === i ? f : a, c, u, l, p);
            }
            function $(e, t, n, r, i) {
                return O(e, t, n, h, E(e, 0, r), E(e, r + 1, -1), r, i);
            }
            var W = {
                animationIterationCount: 1,
                aspectRatio: 1,
                borderImageOutset: 1,
                borderImageSlice: 1,
                borderImageWidth: 1,
                boxFlex: 1,
                boxFlexGroup: 1,
                boxOrdinalGroup: 1,
                columnCount: 1,
                columns: 1,
                flex: 1,
                flexGrow: 1,
                flexPositive: 1,
                flexShrink: 1,
                flexNegative: 1,
                flexOrder: 1,
                gridRow: 1,
                gridRowEnd: 1,
                gridRowSpan: 1,
                gridRowStart: 1,
                gridColumn: 1,
                gridColumnEnd: 1,
                gridColumnSpan: 1,
                gridColumnStart: 1,
                msGridRow: 1,
                msGridRowSpan: 1,
                msGridColumn: 1,
                msGridColumnSpan: 1,
                fontWeight: 1,
                lineHeight: 1,
                opacity: 1,
                order: 1,
                orphans: 1,
                tabSize: 1,
                widows: 1,
                zIndex: 1,
                zoom: 1,
                WebkitLineClamp: 1,
                fillOpacity: 1,
                floodOpacity: 1,
                stopOpacity: 1,
                strokeDasharray: 1,
                strokeDashoffset: 1,
                strokeMiterlimit: 1,
                strokeOpacity: 1,
                strokeWidth: 1,
            },
                H = n(34155),
                G = (void 0 !== H && void 0 !== H.env && (H.env.REACT_APP_SC_ATTR || H.env.SC_ATTR)) || "data-styled",
                q = "active",
                Y = "data-styled-version",
                K = "6.1.11",
                J = "/*!sc*/\n",
                X = "undefined" != typeof window && "HTMLElement" in window,
                Z = !!("boolean" == typeof SC_DISABLE_SPEEDY
                    ? SC_DISABLE_SPEEDY
                    : void 0 !== H && void 0 !== H.env && void 0 !== H.env.REACT_APP_SC_DISABLE_SPEEDY && "" !== H.env.REACT_APP_SC_DISABLE_SPEEDY
                        ? "false" !== H.env.REACT_APP_SC_DISABLE_SPEEDY && H.env.REACT_APP_SC_DISABLE_SPEEDY
                        : void 0 !== H && void 0 !== H.env && void 0 !== H.env.SC_DISABLE_SPEEDY && "" !== H.env.SC_DISABLE_SPEEDY && "false" !== H.env.SC_DISABLE_SPEEDY && H.env.SC_DISABLE_SPEEDY),
                Q = {},
                ee = Object.freeze([]),
                et = Object.freeze({});
            function en(e, t, n) {
                return void 0 === n && (n = et), (e.theme !== n.theme && e.theme) || t || n.theme;
            }
            var er = new Set([
                "a",
                "abbr",
                "address",
                "area",
                "article",
                "aside",
                "audio",
                "b",
                "base",
                "bdi",
                "bdo",
                "big",
                "blockquote",
                "body",
                "br",
                "button",
                "canvas",
                "caption",
                "cite",
                "code",
                "col",
                "colgroup",
                "data",
                "datalist",
                "dd",
                "del",
                "details",
                "dfn",
                "dialog",
                "div",
                "dl",
                "dt",
                "em",
                "embed",
                "fieldset",
                "figcaption",
                "figure",
                "footer",
                "form",
                "h1",
                "h2",
                "h3",
                "h4",
                "h5",
                "h6",
                "header",
                "hgroup",
                "hr",
                "html",
                "i",
                "iframe",
                "img",
                "input",
                "ins",
                "kbd",
                "keygen",
                "label",
                "legend",
                "li",
                "link",
                "main",
                "map",
                "mark",
                "menu",
                "menuitem",
                "meta",
                "meter",
                "nav",
                "noscript",
                "object",
                "ol",
                "optgroup",
                "option",
                "output",
                "p",
                "param",
                "picture",
                "pre",
                "progress",
                "q",
                "rp",
                "rt",
                "ruby",
                "s",
                "samp",
                "script",
                "section",
                "select",
                "small",
                "source",
                "span",
                "strong",
                "style",
                "sub",
                "summary",
                "sup",
                "table",
                "tbody",
                "td",
                "textarea",
                "tfoot",
                "th",
                "thead",
                "time",
                "tr",
                "track",
                "u",
                "ul",
                "use",
                "var",
                "video",
                "wbr",
                "circle",
                "clipPath",
                "defs",
                "ellipse",
                "foreignObject",
                "g",
                "image",
                "line",
                "linearGradient",
                "marker",
                "mask",
                "path",
                "pattern",
                "polygon",
                "polyline",
                "radialGradient",
                "rect",
                "stop",
                "svg",
                "text",
                "tspan",
            ]),
                ei = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
                eo = /(^-|-$)/g;
            function es(e) {
                return e.replace(ei, "-").replace(eo, "");
            }
            var ea = /(a)(d)/gi,
                ec = function (e) {
                    return String.fromCharCode(e + (e > 25 ? 39 : 97));
                };
            function eu(e) {
                var t,
                    n = "";
                for (t = Math.abs(e); t > 52; t = (t / 52) | 0) n = ec(t % 52) + n;
                return (ec(t % 52) + n).replace(ea, "$1-$2");
            }
            var el,
                ep = function (e, t) {
                    for (var n = t.length; n;) e = (33 * e) ^ t.charCodeAt(--n);
                    return e;
                },
                ef = function (e) {
                    return ep(5381, e);
                };
            function eh(e) {
                return "string" == typeof e;
            }
            var ed = "function" == typeof Symbol && Symbol.for,
                em = ed ? Symbol.for("react.memo") : 60115,
                eg = ed ? Symbol.for("react.forward_ref") : 60112,
                ey = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 },
                eb = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 },
                ew = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 },
                ev = (((el = {})[eg] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }), (el[em] = ew), el);
            function eS(e) {
                return ("type" in e && e.type.$$typeof) === em ? ew : "$$typeof" in e ? ev[e.$$typeof] : ey;
            }
            var eE = Object.defineProperty,
                ex = Object.getOwnPropertyNames,
                ek = Object.getOwnPropertySymbols,
                e_ = Object.getOwnPropertyDescriptor,
                ej = Object.getPrototypeOf,
                eI = Object.prototype;
            function eT(e) {
                return "function" == typeof e;
            }
            function eP(e) {
                return "object" == typeof e && "styledComponentId" in e;
            }
            function eC(e, t) {
                return e && t ? "".concat(e, " ").concat(t) : e || t || "";
            }
            function eF(e, t) {
                if (0 === e.length) return "";
                for (var n = e[0], r = 1; r < e.length; r++) n += t ? t + e[r] : e[r];
                return n;
            }
            function eO(e) {
                return null !== e && "object" == typeof e && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
            }
            function eA(e, t) {
                Object.defineProperty(e, "toString", { value: t });
            }
            function eR(e) {
                for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                return Error(
                    "An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#"
                        .concat(e, " for more information.")
                        .concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")
                );
            }
            var eN = (function () {
                function e(e) {
                    (this.groupSizes = new Uint32Array(512)), (this.length = 512), (this.tag = e);
                }
                return (
                    (e.prototype.indexOfGroup = function (e) {
                        for (var t = 0, n = 0; n < e; n++) t += this.groupSizes[n];
                        return t;
                    }),
                    (e.prototype.insertRules = function (e, t) {
                        if (e >= this.groupSizes.length) {
                            for (var n = this.groupSizes, r = n.length, i = r; e >= i;) if ((i <<= 1) < 0) throw eR(16, "".concat(e));
                            (this.groupSizes = new Uint32Array(i)), this.groupSizes.set(n), (this.length = i);
                            for (var o = r; o < i; o++) this.groupSizes[o] = 0;
                        }
                        for (var s = this.indexOfGroup(e + 1), a = ((o = 0), t.length); o < a; o++) this.tag.insertRule(s, t[o]) && (this.groupSizes[e]++, s++);
                    }),
                    (e.prototype.clearGroup = function (e) {
                        if (e < this.length) {
                            var t = this.groupSizes[e],
                                n = this.indexOfGroup(e),
                                r = n + t;
                            this.groupSizes[e] = 0;
                            for (var i = n; i < r; i++) this.tag.deleteRule(n);
                        }
                    }),
                    (e.prototype.getGroup = function (e) {
                        var t = "";
                        if (e >= this.length || 0 === this.groupSizes[e]) return t;
                        for (var n = this.groupSizes[e], r = this.indexOfGroup(e), i = r + n, o = r; o < i; o++) t += "".concat(this.tag.getRule(o)).concat(J);
                        return t;
                    }),
                    e
                );
            })(),
                eB = new Map(),
                eL = new Map(),
                eD = 1,
                eU = function (e) {
                    if (eB.has(e)) return eB.get(e);
                    for (; eL.has(eD);) eD++;
                    var t = eD++;
                    return eB.set(e, t), eL.set(t, e), t;
                },
                eM = function (e, t) {
                    (eD = t + 1), eB.set(e, t), eL.set(t, e);
                },
                ez = "style[".concat(G, "][").concat(Y, '="').concat(K, '"]'),
                eV = new RegExp("^".concat(G, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),
                e$ = function (e, t, n) {
                    for (var r, i = n.split(","), o = 0, s = i.length; o < s; o++) (r = i[o]) && e.registerName(t, r);
                },
                eW = function (e, t) {
                    for (var n, r = (null !== (n = t.textContent) && void 0 !== n ? n : "").split(J), i = [], o = 0, s = r.length; o < s; o++) {
                        var a = r[o].trim();
                        if (a) {
                            var c = a.match(eV);
                            if (c) {
                                var u = 0 | parseInt(c[1], 10),
                                    l = c[2];
                                0 !== u && (eM(l, u), e$(e, l, c[3]), e.getTag().insertRules(u, i)), (i.length = 0);
                            } else i.push(a);
                        }
                    }
                },
                eH = function (e) {
                    var t,
                        r = document.head,
                        i = e || r,
                        o = document.createElement("style"),
                        s = (t = Array.from(i.querySelectorAll("style[".concat(G, "]"))))[t.length - 1],
                        a = void 0 !== s ? s.nextSibling : null;
                    o.setAttribute(G, q), o.setAttribute(Y, K);
                    var c = n.nc;
                    return c && o.setAttribute("nonce", c), i.insertBefore(o, a), o;
                },
                eG = (function () {
                    function e(e) {
                        (this.element = eH(e)),
                            this.element.appendChild(document.createTextNode("")),
                            (this.sheet = (function (e) {
                                if (e.sheet) return e.sheet;
                                for (var t = document.styleSheets, n = 0, r = t.length; n < r; n++) {
                                    var i = t[n];
                                    if (i.ownerNode === e) return i;
                                }
                                throw eR(17);
                            })(this.element)),
                            (this.length = 0);
                    }
                    return (
                        (e.prototype.insertRule = function (e, t) {
                            try {
                                return this.sheet.insertRule(t, e), this.length++, !0;
                            } catch (e) {
                                return !1;
                            }
                        }),
                        (e.prototype.deleteRule = function (e) {
                            this.sheet.deleteRule(e), this.length--;
                        }),
                        (e.prototype.getRule = function (e) {
                            var t = this.sheet.cssRules[e];
                            return t && t.cssText ? t.cssText : "";
                        }),
                        e
                    );
                })(),
                eq = (function () {
                    function e(e) {
                        (this.element = eH(e)), (this.nodes = this.element.childNodes), (this.length = 0);
                    }
                    return (
                        (e.prototype.insertRule = function (e, t) {
                            if (e <= this.length && e >= 0) {
                                var n = document.createTextNode(t);
                                return this.element.insertBefore(n, this.nodes[e] || null), this.length++, !0;
                            }
                            return !1;
                        }),
                        (e.prototype.deleteRule = function (e) {
                            this.element.removeChild(this.nodes[e]), this.length--;
                        }),
                        (e.prototype.getRule = function (e) {
                            return e < this.length ? this.nodes[e].textContent : "";
                        }),
                        e
                    );
                })(),
                eY = (function () {
                    function e(e) {
                        (this.rules = []), (this.length = 0);
                    }
                    return (
                        (e.prototype.insertRule = function (e, t) {
                            return e <= this.length && (this.rules.splice(e, 0, t), this.length++, !0);
                        }),
                        (e.prototype.deleteRule = function (e) {
                            this.rules.splice(e, 1), this.length--;
                        }),
                        (e.prototype.getRule = function (e) {
                            return e < this.length ? this.rules[e] : "";
                        }),
                        e
                    );
                })(),
                eK = X,
                eJ = { isServer: !X, useCSSOMInjection: !Z },
                eX = (function () {
                    function e(e, t, n) {
                        void 0 === e && (e = et), void 0 === t && (t = {});
                        var i = this;
                        (this.options = r(r({}, eJ), e)),
                            (this.gs = t),
                            (this.names = new Map(n)),
                            (this.server = !!e.isServer),
                            !this.server &&
                            X &&
                            eK &&
                            ((eK = !1),
                                (function (e) {
                                    for (var t = document.querySelectorAll(ez), n = 0, r = t.length; n < r; n++) {
                                        var i = t[n];
                                        i && i.getAttribute(G) !== q && (eW(e, i), i.parentNode && i.parentNode.removeChild(i));
                                    }
                                })(this)),
                            eA(this, function () {
                                return (function (e) {
                                    for (var t = e.getTag(), n = t.length, r = "", i = 0; i < n; i++)
                                        (function (n) {
                                            var i = eL.get(n);
                                            if (void 0 !== i) {
                                                var o = e.names.get(i),
                                                    s = t.getGroup(n);
                                                if (void 0 !== o && 0 !== s.length) {
                                                    var a = "".concat(G, ".g").concat(n, '[id="').concat(i, '"]'),
                                                        c = "";
                                                    void 0 !== o &&
                                                        o.forEach(function (e) {
                                                            e.length > 0 && (c += "".concat(e, ","));
                                                        }),
                                                        (r += "".concat(s).concat(a, '{content:"').concat(c, '"}').concat(J));
                                                }
                                            }
                                        })(i);
                                    return r;
                                })(i);
                            });
                    }
                    return (
                        (e.registerId = function (e) {
                            return eU(e);
                        }),
                        (e.prototype.reconstructWithOptions = function (t, n) {
                            return void 0 === n && (n = !0), new e(r(r({}, this.options), t), this.gs, (n && this.names) || void 0);
                        }),
                        (e.prototype.allocateGSInstance = function (e) {
                            return (this.gs[e] = (this.gs[e] || 0) + 1);
                        }),
                        (e.prototype.getTag = function () {
                            var e, t, n;
                            return this.tag || (this.tag = ((t = (e = this.options).useCSSOMInjection), (n = e.target), new eN(e.isServer ? new eY(n) : t ? new eG(n) : new eq(n))));
                        }),
                        (e.prototype.hasNameForId = function (e, t) {
                            return this.names.has(e) && this.names.get(e).has(t);
                        }),
                        (e.prototype.registerName = function (e, t) {
                            if ((eU(e), this.names.has(e))) this.names.get(e).add(t);
                            else {
                                var n = new Set();
                                n.add(t), this.names.set(e, n);
                            }
                        }),
                        (e.prototype.insertRules = function (e, t, n) {
                            this.registerName(e, t), this.getTag().insertRules(eU(e), n);
                        }),
                        (e.prototype.clearNames = function (e) {
                            this.names.has(e) && this.names.get(e).clear();
                        }),
                        (e.prototype.clearRules = function (e) {
                            this.getTag().clearGroup(eU(e)), this.clearNames(e);
                        }),
                        (e.prototype.clearTag = function () {
                            this.tag = void 0;
                        }),
                        e
                    );
                })(),
                eZ = /&/g,
                eQ = /^\s*\/\/.*$/gm;
            function e1(e) {
                var t,
                    n,
                    r,
                    i = void 0 === e ? et : e,
                    o = i.options,
                    s = void 0 === o ? et : o,
                    a = i.plugins,
                    c = void 0 === a ? ee : a,
                    u = function (e, r, i) {
                        return i.startsWith(n) && i.endsWith(n) && i.replaceAll(n, "").length > 0 ? ".".concat(t) : e;
                    },
                    l = c.slice();
                l.push(function (e) {
                    e.type === f && e.value.includes("&") && (e.props[0] = e.props[0].replace(eZ, n).replace(r, u));
                }),
                    s.prefix && l.push(z),
                    l.push(M);
                var h = function (e, i, o, a) {
                    void 0 === i && (i = ""), void 0 === o && (o = ""), void 0 === a && (a = "&"), (t = a), (n = i), (r = RegExp("\\".concat(n, "\\b"), "g"));
                    var c,
                        u,
                        f,
                        h,
                        d,
                        y,
                        b = e.replace(eQ, ""),
                        _ =
                            ((d = (function e(t, n, r, i, o, s, a, c, u) {
                                for (var l, f = 0, h = 0, d = a, y = 0, b = 0, _ = 0, T = 1, A = 1, R = 1, U = 0, M = "", z = o, W = s, H = i, G = M; A;)
                                    switch (((_ = U), (U = N()))) {
                                        case 40:
                                            if (108 != _ && 58 == S(G, d - 1)) {
                                                -1 != v((G += w(D(U), "&", "&\f")), "&\f", m(f ? c[f - 1] : 0)) && (R = -1);
                                                break;
                                            }
                                        case 34:
                                        case 39:
                                        case 91:
                                            G += D(U);
                                            break;
                                        case 9:
                                        case 10:
                                        case 13:
                                        case 32:
                                            G += (function (e) {
                                                for (; (C = B());)
                                                    if (C < 33) N();
                                                    else break;
                                                return L(e) > 2 || L(C) > 3 ? "" : " ";
                                            })(_);
                                            break;
                                        case 92:
                                            G += (function (e, t) {
                                                for (var n; --t && N() && !(C < 48) && !(C > 102) && (!(C > 57) || !(C < 65)) && (!(C > 70) || !(C < 97)););
                                                return (n = P + (t < 6 && 32 == B() && 32 == N())), E(F, e, n);
                                            })(P - 1, 7);
                                            continue;
                                        case 47:
                                            switch (B()) {
                                                case 42:
                                                case 47:
                                                    k(
                                                        O(
                                                            (l = (function (e, t) {
                                                                for (; N();)
                                                                    if (e + C === 57) break;
                                                                    else if (e + C === 84 && 47 === B()) break;
                                                                return "/*" + E(F, t, P - 1) + "*" + g(47 === e ? e : N());
                                                            })(N(), P)),
                                                            n,
                                                            r,
                                                            p,
                                                            g(C),
                                                            E(l, 2, -2),
                                                            0,
                                                            u
                                                        ),
                                                        u
                                                    );
                                                    break;
                                                default:
                                                    G += "/";
                                            }
                                            break;
                                        case 123 * T:
                                            c[f++] = x(G) * R;
                                        case 125 * T:
                                        case 59:
                                        case 0:
                                            switch (U) {
                                                case 0:
                                                case 125:
                                                    A = 0;
                                                case 59 + h:
                                                    -1 == R && (G = w(G, /\f/g, "")), b > 0 && x(G) - d && k(b > 32 ? $(G + ";", i, r, d - 1, u) : $(w(G, " ", "") + ";", i, r, d - 2, u), u);
                                                    break;
                                                case 59:
                                                    G += ";";
                                                default:
                                                    if ((k((H = V(G, n, r, f, h, o, c, M, (z = []), (W = []), d, s)), s), 123 === U)) {
                                                        if (0 === h) e(G, n, H, H, z, s, d, c, W);
                                                        else
                                                            switch (99 === y && 110 === S(G, 3) ? 100 : y) {
                                                                case 100:
                                                                case 108:
                                                                case 109:
                                                                case 115:
                                                                    e(t, H, H, i && k(V(t, H, H, 0, 0, o, c, M, o, (z = []), d, W), W), o, W, d, c, i ? z : W);
                                                                    break;
                                                                default:
                                                                    e(G, H, H, H, [""], W, 0, c, W);
                                                            }
                                                    }
                                            }
                                            (f = h = b = 0), (T = R = 1), (M = G = ""), (d = a);
                                            break;
                                        case 58:
                                            (d = 1 + x(G)), (b = _);
                                        default:
                                            if (T < 1) {
                                                if (123 == U) --T;
                                                else if (125 == U && 0 == T++ && 125 == ((C = P > 0 ? S(F, --P) : 0), I--, 10 === C && ((I = 1), j--), C)) continue;
                                            }
                                            switch (((G += g(U)), U * T)) {
                                                case 38:
                                                    R = h > 0 ? 1 : ((G += "\f"), -1);
                                                    break;
                                                case 44:
                                                    (c[f++] = (x(G) - 1) * R), (R = 1);
                                                    break;
                                                case 64:
                                                    45 === B() && (G += D(N())),
                                                        (y = B()),
                                                        (h = d = x(
                                                            (M = G += (function (e) {
                                                                for (; !L(B());) N();
                                                                return E(F, e, P);
                                                            })(P))
                                                        )),
                                                        U++;
                                                    break;
                                                case 45:
                                                    45 === _ && 2 == x(G) && (T = 0);
                                            }
                                    }
                                return s;
                            })("", null, null, null, [""], ((h = f = o || i ? "".concat(o, " ").concat(i, " { ").concat(b, " }") : b), (j = I = 1), (T = x((F = h))), (P = 0), (f = [])), 0, [0], f)),
                                (F = ""),
                                d);
                    s.namespace &&
                        (_ = (function e(t, n) {
                            return t.map(function (t) {
                                return (
                                    "rule" === t.type &&
                                    ((t.value = "".concat(n, " ").concat(t.value)),
                                        (t.value = t.value.replaceAll(",", ",".concat(n, " "))),
                                        (t.props = t.props.map(function (e) {
                                            return "".concat(n, " ").concat(e);
                                        }))),
                                    Array.isArray(t.children) && "@keyframes" !== t.type && (t.children = e(t.children, n)),
                                    t
                                );
                            });
                        })(_, s.namespace));
                    var A = [];
                    return (
                        U(
                            _,
                            ((u = (c = l.concat(
                                ((y = function (e) {
                                    return A.push(e);
                                }),
                                    function (e) {
                                        !e.root && (e = e.return) && y(e);
                                    })
                            )).length),
                                function (e, t, n, r) {
                                    for (var i = "", o = 0; o < u; o++) i += c[o](e, t, n, r) || "";
                                    return i;
                                })
                        ),
                        A
                    );
                };
                return (
                    (h.hash = c.length
                        ? c
                            .reduce(function (e, t) {
                                return t.name || eR(15), ep(e, t.name);
                            }, 5381)
                            .toString()
                        : ""),
                    h
                );
            }
            var e9 = new eX(),
                e7 = e1(),
                e0 = o.createContext({ shouldForwardProp: void 0, styleSheet: e9, stylis: e7 }),
                e4 = (e0.Consumer, o.createContext(void 0));
            function e8() {
                return (0, o.useContext)(e0);
            }
            function e6(e) {
                var t = (0, o.useState)(e.stylisPlugins),
                    n = t[0],
                    r = t[1],
                    i = e8().styleSheet,
                    s = (0, o.useMemo)(
                        function () {
                            var t = i;
                            return e.sheet ? (t = e.sheet) : e.target && (t = t.reconstructWithOptions({ target: e.target }, !1)), e.disableCSSOMInjection && (t = t.reconstructWithOptions({ useCSSOMInjection: !1 })), t;
                        },
                        [e.disableCSSOMInjection, e.sheet, e.target, i]
                    ),
                    c = (0, o.useMemo)(
                        function () {
                            return e1({ options: { namespace: e.namespace, prefix: e.enableVendorPrefixes }, plugins: n });
                        },
                        [e.enableVendorPrefixes, e.namespace, n]
                    );
                (0, o.useEffect)(
                    function () {
                        a()(n, e.stylisPlugins) || r(e.stylisPlugins);
                    },
                    [e.stylisPlugins]
                );
                var u = (0, o.useMemo)(
                    function () {
                        return { shouldForwardProp: e.shouldForwardProp, styleSheet: s, stylis: c };
                    },
                    [e.shouldForwardProp, s, c]
                );
                return o.createElement(e0.Provider, { value: u }, o.createElement(e4.Provider, { value: c }, e.children));
            }
            var e2 = (function () {
                function e(e, t) {
                    var n = this;
                    (this.inject = function (e, t) {
                        void 0 === t && (t = e7);
                        var r = n.name + t.hash;
                        e.hasNameForId(n.id, r) || e.insertRules(n.id, r, t(n.rules, r, "@keyframes"));
                    }),
                        (this.name = e),
                        (this.id = "sc-keyframes-".concat(e)),
                        (this.rules = t),
                        eA(this, function () {
                            throw eR(12, String(n.name));
                        });
                }
                return (
                    (e.prototype.getName = function (e) {
                        return void 0 === e && (e = e7), this.name + e.hash;
                    }),
                    e
                );
            })();
            function e5(e) {
                for (var t = "", n = 0; n < e.length; n++) {
                    var r = e[n];
                    if (1 === n && "-" === r && "-" === e[0]) return e;
                    r >= "A" && r <= "Z" ? (t += "-" + r.toLowerCase()) : (t += r);
                }
                return t.startsWith("ms-") ? "-" + t : t;
            }
            var e3 = function (e) {
                return null == e || !1 === e || "" === e;
            },
                te = function (e) {
                    var t = [];
                    for (var n in e) {
                        var r = e[n];
                        e.hasOwnProperty(n) &&
                            !e3(r) &&
                            ((Array.isArray(r) && r.isCss) || eT(r)
                                ? t.push("".concat(e5(n), ":"), r, ";")
                                : eO(r)
                                    ? t.push.apply(t, i(i(["".concat(n, " {")], te(r), !1), ["}"], !1))
                                    : t.push("".concat(e5(n), ": ").concat(null == r || "boolean" == typeof r || "" === r ? "" : "number" != typeof r || 0 === r || n in W || n.startsWith("--") ? String(r).trim() : "".concat(r, "px"), ";")));
                    }
                    return t;
                };
            function tt(e, t, n, r) {
                return e3(e)
                    ? []
                    : eP(e)
                        ? [".".concat(e.styledComponentId)]
                        : eT(e)
                            ? !eT(e) || (e.prototype && e.prototype.isReactComponent) || !t
                                ? [e]
                                : tt(e(t), t, n, r)
                            : e instanceof e2
                                ? n
                                    ? (e.inject(n, r), [e.getName(r)])
                                    : [e]
                                : eO(e)
                                    ? te(e)
                                    : Array.isArray(e)
                                        ? Array.prototype.concat.apply(
                                            ee,
                                            e.map(function (e) {
                                                return tt(e, t, n, r);
                                            })
                                        )
                                        : [e.toString()];
            }
            function tn(e) {
                for (var t = 0; t < e.length; t += 1) {
                    var n = e[t];
                    if (eT(n) && !eP(n)) return !1;
                }
                return !0;
            }
            var tr = ef(K),
                ti = (function () {
                    function e(e, t, n) {
                        (this.rules = e), (this.staticRulesId = ""), (this.isStatic = (void 0 === n || n.isStatic) && tn(e)), (this.componentId = t), (this.baseHash = ep(tr, t)), (this.baseStyle = n), eX.registerId(t);
                    }
                    return (
                        (e.prototype.generateAndInjectStyles = function (e, t, n) {
                            var r = this.baseStyle ? this.baseStyle.generateAndInjectStyles(e, t, n) : "";
                            if (this.isStatic && !n.hash) {
                                if (this.staticRulesId && t.hasNameForId(this.componentId, this.staticRulesId)) r = eC(r, this.staticRulesId);
                                else {
                                    var i = eF(tt(this.rules, e, t, n)),
                                        o = eu(ep(this.baseHash, i) >>> 0);
                                    if (!t.hasNameForId(this.componentId, o)) {
                                        var s = n(i, ".".concat(o), void 0, this.componentId);
                                        t.insertRules(this.componentId, o, s);
                                    }
                                    (r = eC(r, o)), (this.staticRulesId = o);
                                }
                            } else {
                                for (var a = ep(this.baseHash, n.hash), c = "", u = 0; u < this.rules.length; u++) {
                                    var l = this.rules[u];
                                    if ("string" == typeof l) c += l;
                                    else if (l) {
                                        var p = eF(tt(l, e, t, n));
                                        (a = ep(a, p + u)), (c += p);
                                    }
                                }
                                if (c) {
                                    var f = eu(a >>> 0);
                                    t.hasNameForId(this.componentId, f) || t.insertRules(this.componentId, f, n(c, ".".concat(f), void 0, this.componentId)), (r = eC(r, f));
                                }
                            }
                            return r;
                        }),
                        e
                    );
                })(),
                to = o.createContext(void 0);
            function ts() {
                var e = (0, o.useContext)(to);
                if (!e) throw eR(18);
                return e;
            }
            function ta(e) {
                var t = o.useContext(to),
                    n = (0, o.useMemo)(
                        function () {
                            return (function (e, t) {
                                if (!e) throw eR(14);
                                if (eT(e)) return e(t);
                                if (Array.isArray(e) || "object" != typeof e) throw eR(8);
                                return t ? r(r({}, t), e) : e;
                            })(e.theme, t);
                        },
                        [e.theme, t]
                    );
                return e.children ? o.createElement(to.Provider, { value: n }, e.children) : null;
            }
            to.Consumer;
            var tc = {};
            function tu(e, t, n) {
                var i,
                    s,
                    a,
                    c,
                    u = eP(e),
                    l = !eh(e),
                    p = t.attrs,
                    f = void 0 === p ? ee : p,
                    h = t.componentId,
                    d =
                        void 0 === h
                            ? ((i = t.displayName),
                                (s = t.parentComponentId),
                                (tc[(a = "string" != typeof i ? "sc" : es(i))] = (tc[a] || 0) + 1),
                                (c = "".concat(a, "-").concat(eu(ef(K + a + tc[a]) >>> 0))),
                                s ? "".concat(s, "-").concat(c) : c)
                            : h,
                    m = t.displayName,
                    g = void 0 === m ? (eh(e) ? "styled.".concat(e) : "Styled(".concat(e.displayName || e.name || "Component", ")")) : m,
                    y = t.displayName && t.componentId ? "".concat(es(t.displayName), "-").concat(t.componentId) : t.componentId || d,
                    b = u && e.attrs ? e.attrs.concat(f).filter(Boolean) : f,
                    w = t.shouldForwardProp;
                if (u && e.shouldForwardProp) {
                    var v = e.shouldForwardProp;
                    if (t.shouldForwardProp) {
                        var S = t.shouldForwardProp;
                        w = function (e, t) {
                            return v(e, t) && S(e, t);
                        };
                    } else w = v;
                }
                var E = new ti(n, y, u ? e.componentStyle : void 0);
                function x(e, t) {
                    return (function (e, t, n) {
                        var i,
                            s = e.attrs,
                            a = e.componentStyle,
                            c = e.defaultProps,
                            u = e.foldedComponentIds,
                            l = e.styledComponentId,
                            p = e.target,
                            f = o.useContext(to),
                            h = e8(),
                            d = e.shouldForwardProp || h.shouldForwardProp,
                            m = en(t, f, c) || et,
                            g = (function (e, t, n) {
                                for (var i, o = r(r({}, t), { className: void 0, theme: n }), s = 0; s < e.length; s += 1) {
                                    var a = eT((i = e[s])) ? i(o) : i;
                                    for (var c in a) o[c] = "className" === c ? eC(o[c], a[c]) : "style" === c ? r(r({}, o[c]), a[c]) : a[c];
                                }
                                return t.className && (o.className = eC(o.className, t.className)), o;
                            })(s, t, m),
                            y = g.as || p,
                            b = {};
                        for (var w in g) void 0 === g[w] || "$" === w[0] || "as" === w || ("theme" === w && g.theme === m) || ("forwardedAs" === w ? (b.as = g.forwardedAs) : (d && !d(w, y)) || (b[w] = g[w]));
                        var v = ((i = e8()), a.generateAndInjectStyles(g, i.styleSheet, i.stylis)),
                            S = eC(u, l);
                        return v && (S += " " + v), g.className && (S += " " + g.className), (b[eh(y) && !er.has(y) ? "class" : "className"] = S), (b.ref = n), (0, o.createElement)(y, b);
                    })(k, e, t);
                }
                x.displayName = g;
                var k = o.forwardRef(x);
                return (
                    (k.attrs = b),
                    (k.componentStyle = E),
                    (k.displayName = g),
                    (k.shouldForwardProp = w),
                    (k.foldedComponentIds = u ? eC(e.foldedComponentIds, e.styledComponentId) : ""),
                    (k.styledComponentId = y),
                    (k.target = u ? e.target : e),
                    Object.defineProperty(k, "defaultProps", {
                        get: function () {
                            return this._foldedDefaultProps;
                        },
                        set: function (t) {
                            this._foldedDefaultProps = u
                                ? (function (e) {
                                    for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                                    for (var r = 0; r < t.length; r++)
                                        (function e(t, n, r) {
                                            if ((void 0 === r && (r = !1), !r && !eO(t) && !Array.isArray(t))) return n;
                                            if (Array.isArray(n)) for (var i = 0; i < n.length; i++) t[i] = e(t[i], n[i]);
                                            else if (eO(n)) for (var i in n) t[i] = e(t[i], n[i]);
                                            return t;
                                        })(e, t[r], !0);
                                    return e;
                                })({}, e.defaultProps, t)
                                : t;
                        },
                    }),
                    eA(k, function () {
                        return ".".concat(k.styledComponentId);
                    }),
                    l &&
                    (function e(t, n, r) {
                        if ("string" != typeof n) {
                            if (eI) {
                                var i = ej(n);
                                i && i !== eI && e(t, i, r);
                            }
                            var o = ex(n);
                            ek && (o = o.concat(ek(n)));
                            for (var s = eS(t), a = eS(n), c = 0; c < o.length; ++c) {
                                var u = o[c];
                                if (!(u in eb || (r && r[u]) || (a && u in a) || (s && u in s))) {
                                    var l = e_(n, u);
                                    try {
                                        eE(t, u, l);
                                    } catch (e) { }
                                }
                            }
                        }
                        return t;
                    })(k, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }),
                    k
                );
            }
            function tl(e, t) {
                for (var n = [e[0]], r = 0, i = t.length; r < i; r += 1) n.push(t[r], e[r + 1]);
                return n;
            }
            var tp = function (e) {
                return Object.assign(e, { isCss: !0 });
            };
            function tf(e) {
                for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                return eT(e) || eO(e) ? tp(tt(tl(ee, i([e], t, !0)))) : 0 === t.length && 1 === e.length && "string" == typeof e[0] ? tt(e) : tp(tt(tl(e, t)));
            }
            var th = function (e) {
                return (function e(t, n, o) {
                    if ((void 0 === o && (o = et), !n)) throw eR(1, n);
                    var s = function (e) {
                        for (var r = [], s = 1; s < arguments.length; s++) r[s - 1] = arguments[s];
                        return t(n, o, tf.apply(void 0, i([e], r, !1)));
                    };
                    return (
                        (s.attrs = function (i) {
                            return e(t, n, r(r({}, o), { attrs: Array.prototype.concat(o.attrs, i).filter(Boolean) }));
                        }),
                        (s.withConfig = function (i) {
                            return e(t, n, r(r({}, o), i));
                        }),
                        s
                    );
                })(tu, e);
            },
                td = th;
            er.forEach(function (e) {
                td[e] = th(e);
            });
            var tm = (function () {
                function e(e, t) {
                    (this.rules = e), (this.componentId = t), (this.isStatic = tn(e)), eX.registerId(this.componentId + 1);
                }
                return (
                    (e.prototype.createStyles = function (e, t, n, r) {
                        var i = r(eF(tt(this.rules, t, n, r)), ""),
                            o = this.componentId + e;
                        n.insertRules(o, o, i);
                    }),
                    (e.prototype.removeStyles = function (e, t) {
                        t.clearRules(this.componentId + e);
                    }),
                    (e.prototype.renderStyles = function (e, t, n, r) {
                        e > 2 && eX.registerId(this.componentId + e), this.removeStyles(e, n), this.createStyles(e, t, n, r);
                    }),
                    e
                );
            })();
            function tg(e) {
                for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                var s = tf.apply(void 0, i([e], t, !1)),
                    a = "sc-global-".concat(eu(ef(JSON.stringify(s)) >>> 0)),
                    c = new tm(s, a),
                    u = function (e) {
                        var t = e8(),
                            n = o.useContext(to),
                            r = o.useRef(t.styleSheet.allocateGSInstance(a)).current;
                        return (
                            t.styleSheet.server && l(r, e, t.styleSheet, n, t.stylis),
                            o.useLayoutEffect(
                                function () {
                                    if (!t.styleSheet.server)
                                        return (
                                            l(r, e, t.styleSheet, n, t.stylis),
                                            function () {
                                                return c.removeStyles(r, t.styleSheet);
                                            }
                                        );
                                },
                                [r, e, t.styleSheet, n, t.stylis]
                            ),
                            null
                        );
                    };
                function l(e, t, n, i, o) {
                    if (c.isStatic) c.renderStyles(e, Q, n, o);
                    else {
                        var s = r(r({}, t), { theme: en(t, i, u.defaultProps) });
                        c.renderStyles(e, s, n, o);
                    }
                }
                return o.memo(u);
            }
            !(function () {
                function e() {
                    var e = this;
                    (this._emitSheetCSS = function () {
                        var t = e.instance.toString(),
                            r = n.nc,
                            i = eF([r && 'nonce="'.concat(r, '"'), "".concat(G, '="true"'), "".concat(Y, '="').concat(K, '"')].filter(Boolean), " ");
                        return "<style ".concat(i, ">").concat(t, "</style>");
                    }),
                        (this.getStyleTags = function () {
                            if (e.sealed) throw eR(2);
                            return e._emitSheetCSS();
                        }),
                        (this.getStyleElement = function () {
                            if (e.sealed) throw eR(2);
                            var t,
                                i = (((t = {})[G] = ""), (t[Y] = K), (t.dangerouslySetInnerHTML = { __html: e.instance.toString() }), t),
                                s = n.nc;
                            return s && (i.nonce = s), [o.createElement("style", r({}, i, { key: "sc-0-0" }))];
                        }),
                        (this.seal = function () {
                            e.sealed = !0;
                        }),
                        (this.instance = new eX({ isServer: !0 })),
                        (this.sealed = !1);
                }
                (e.prototype.collectStyles = function (e) {
                    if (this.sealed) throw eR(2);
                    return o.createElement(e6, { sheet: this.instance }, e);
                }),
                    (e.prototype.interleaveWithNodeStream = function (e) {
                        throw eR(3);
                    });
            })();
        },
        68588: function (e, t, n) {
            "use strict";
            n.d(t, {
                M: function () {
                    return r;
                },
            });
            let r = "data-" + (0, n(93193).D)("framerAppearId");
        },
        2445: function (e, t, n) {
            "use strict";
            function r(e) {
                return null !== e && "object" == typeof e && "function" == typeof e.start;
            }
            n.d(t, {
                H: function () {
                    return r;
                },
            });
        },
        48488: function (e, t, n) {
            "use strict";
            n.d(t, {
                C: function () {
                    return r;
                },
            });
            let r = (e) => Array.isArray(e);
        },
        25364: function (e, t, n) {
            "use strict";
            n.d(t, {
                p: function () {
                    return r;
                },
            });
            let r = (0, n(67294).createContext)({});
        },
        70398: function (e, t, n) {
            "use strict";
            n.d(t, {
                u: function () {
                    return r;
                },
            });
            let r = (0, n(67294).createContext)({ strict: !1 });
        },
        16014: function (e, t, n) {
            "use strict";
            n.d(t, {
                _: function () {
                    return r;
                },
            });
            let r = (0, n(67294).createContext)({ transformPagePoint: (e) => e, isStatic: !1, reducedMotion: "never" });
        },
        240: function (e, t, n) {
            "use strict";
            n.d(t, {
                O: function () {
                    return r;
                },
            });
            let r = (0, n(67294).createContext)(null);
        },
        89727: function (e, t, n) {
            "use strict";
            n.d(t, {
                Z: function () {
                    return s;
                },
            });
            var r = n(22081);
            class i {
                constructor() {
                    (this.order = []), (this.scheduled = new Set());
                }
                add(e) {
                    if (!this.scheduled.has(e)) return this.scheduled.add(e), this.order.push(e), !0;
                }
                remove(e) {
                    let t = this.order.indexOf(e);
                    -1 !== t && (this.order.splice(t, 1), this.scheduled.delete(e));
                }
                clear() {
                    (this.order.length = 0), this.scheduled.clear();
                }
            }
            let o = ["read", "resolveKeyframes", "update", "preRender", "render", "postRender"];
            function s(e, t) {
                let n = !1,
                    s = !0,
                    a = { delta: 0, timestamp: 0, isProcessing: !1 },
                    c = o.reduce(
                        (e, t) => (
                            (e[t] = (function (e) {
                                let t = new i(),
                                    n = new i(),
                                    r = 0,
                                    o = !1,
                                    s = !1,
                                    a = new WeakSet(),
                                    c = {
                                        schedule: (e, i = !1, s = !1) => {
                                            let c = s && o,
                                                u = c ? t : n;
                                            return i && a.add(e), u.add(e) && c && o && (r = t.order.length), e;
                                        },
                                        cancel: (e) => {
                                            n.remove(e), a.delete(e);
                                        },
                                        process: (i) => {
                                            if (o) {
                                                s = !0;
                                                return;
                                            }
                                            if (((o = !0), ([t, n] = [n, t]), n.clear(), (r = t.order.length)))
                                                for (let n = 0; n < r; n++) {
                                                    let r = t.order[n];
                                                    a.has(r) && (c.schedule(r), e()), r(i);
                                                }
                                            (o = !1), s && ((s = !1), c.process(i));
                                        },
                                    };
                                return c;
                            })(() => (n = !0))),
                            e
                        ),
                        {}
                    ),
                    u = (e) => {
                        c[e].process(a);
                    },
                    l = () => {
                        let i = r.c.useManualTiming ? a.timestamp : performance.now();
                        (n = !1), (a.delta = s ? 1e3 / 60 : Math.max(Math.min(i - a.timestamp, 40), 1)), (a.timestamp = i), (a.isProcessing = !0), o.forEach(u), (a.isProcessing = !1), n && t && ((s = !1), e(l));
                    },
                    p = () => {
                        (n = !0), (s = !0), a.isProcessing || e(l);
                    };
                return {
                    schedule: o.reduce((e, t) => {
                        let r = c[t];
                        return (e[t] = (e, t = !1, i = !1) => (n || p(), r.schedule(e, t, i))), e;
                    }, {}),
                    cancel: (e) => o.forEach((t) => c[t].cancel(e)),
                    state: a,
                    steps: c,
                };
            }
        },
        26166: function (e, t, n) {
            "use strict";
            n.d(t, {
                Pn: function () {
                    return o;
                },
                Wi: function () {
                    return i;
                },
                w0: function () {
                    return s;
                },
            });
            var r = n(81662);
            let { schedule: i, cancel: o, state: s, steps: a } = (0, n(89727).Z)("undefined" != typeof requestAnimationFrame ? requestAnimationFrame : r.Z, !0);
        },
        9442: function (e, t, n) {
            "use strict";
            n.d(t, {
                A: function () {
                    return i;
                },
            });
            let r = {
                animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
                exit: ["exit"],
                drag: ["drag", "dragControls"],
                focus: ["whileFocus"],
                hover: ["whileHover", "onHoverStart", "onHoverEnd"],
                tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
                pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
                inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
                layout: ["layout", "layoutId"],
            },
                i = {};
            for (let e in r) i[e] = { isEnabled: (t) => r[e].some((e) => !!t[e]) };
        },
        81879: function (e, t, n) {
            "use strict";
            n.d(t, {
                K: function () {
                    return i;
                },
            });
            var r = n(9442);
            function i(e) {
                for (let t in e) r.A[t] = { ...r.A[t], ...e[t] };
            }
        },
        96728: function (e, t, n) {
            "use strict";
            n.d(t, {
                j: function () {
                    return o;
                },
            });
            let r = {};
            var i = n(94714);
            function o(e, { layout: t, layoutId: n }) {
                return i.G.has(e) || e.startsWith("origin") || ((t || void 0 !== n) && (!!r[e] || "opacity" === e));
            }
        },
        8897: function (e, t, n) {
            "use strict";
            n.d(t, {
                m: function () {
                    return H;
                },
            });
            var r,
                i = n(85893),
                o = n(67294),
                s = n(16014);
            let a = (0, o.createContext)({});
            var c = n(240),
                u = n(58868),
                l = n(70398),
                p = n(68588);
            let { schedule: f, cancel: h } = (0, n(89727).Z)(queueMicrotask, !1);
            var d = n(51804),
                m = n(97732),
                g = n(7504);
            function y(e) {
                return Array.isArray(e) ? e.join(" ") : e;
            }
            var b = n(81879),
                w = n(11741),
                v = n(25364);
            let S = (0, o.createContext)({}),
                E = Symbol.for("motionComponentSymbol");
            var x = n(62627),
                k = n(96728),
                _ = n(40406),
                j = n(38057);
            let I = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
            function T(e, t, n) {
                for (let r in t) (0, _.i)(t[r]) || (0, k.j)(r, n) || (e[r] = t[r]);
            }
            let P = new Set([
                "animate",
                "exit",
                "variants",
                "initial",
                "style",
                "values",
                "variants",
                "transition",
                "transformTemplate",
                "custom",
                "inherit",
                "onBeforeLayoutMeasure",
                "onAnimationStart",
                "onAnimationComplete",
                "onUpdate",
                "onDragStart",
                "onDrag",
                "onDragEnd",
                "onMeasureDragConstraints",
                "onDirectionLock",
                "onDragTransitionEnd",
                "_dragX",
                "_dragY",
                "onHoverStart",
                "onHoverEnd",
                "onViewportEnter",
                "onViewportLeave",
                "globalTapTarget",
                "ignoreStrict",
                "viewport",
            ]);
            function C(e) {
                return e.startsWith("while") || (e.startsWith("drag") && "draggable" !== e) || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || P.has(e);
            }
            let F = (e) => !C(e);
            try {
                (r = require("@emotion/is-prop-valid").default) && (F = (e) => (e.startsWith("on") ? !C(e) : r(e)));
            } catch (e) { }
            var O = n(85415);
            let A = () => ({ ...I(), attrs: {} });
            var R = n(79854),
                N = n(68504),
                B = n(16832),
                L = n(2445),
                D = n(79432),
                U = n(96681),
                M = n(8715);
            let z = (e) => (t, n) => {
                let r = (0, o.useContext)(a),
                    i = (0, o.useContext)(c.O),
                    s = () =>
                        (function ({ scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n }, r, i, o) {
                            let s = {
                                latestValues: (function (e, t, n, r) {
                                    let i = {},
                                        o = r(e, {});
                                    for (let e in o)
                                        i[e] = (function (e) {
                                            let t = (0, _.i)(e) ? e.get() : e;
                                            return (0, M.p)(t) ? t.toValue() : t;
                                        })(o[e]);
                                    let { initial: s, animate: a } = e,
                                        c = (0, g.G)(e),
                                        u = (0, g.M)(e);
                                    t && u && !c && !1 !== e.inherit && (void 0 === s && (s = t.initial), void 0 === a && (a = t.animate));
                                    let l = !!n && !1 === n.initial,
                                        p = (l = l || !1 === s) ? a : s;
                                    return (
                                        p &&
                                        "boolean" != typeof p &&
                                        !(0, L.H)(p) &&
                                        (Array.isArray(p) ? p : [p]).forEach((t) => {
                                            let n = (0, D.o)(e, t);
                                            if (!n) return;
                                            let { transitionEnd: r, transition: o, ...s } = n;
                                            for (let e in s) {
                                                let t = s[e];
                                                if (Array.isArray(t)) {
                                                    let e = l ? t.length - 1 : 0;
                                                    t = t[e];
                                                }
                                                null !== t && (i[e] = t);
                                            }
                                            for (let e in r) i[e] = r[e];
                                        }),
                                        i
                                    );
                                })(r, i, o, e),
                                renderState: t(),
                            };
                            return n && (s.mount = (e) => n(r, e, s)), s;
                        })(e, t, r, i);
                return n ? s() : (0, U.h)(s);
            };
            var V = n(26166);
            let $ = {
                useVisualState: z({
                    scrapeMotionValuesFromProps: B.U,
                    createRenderState: A,
                    onMount: (e, t, { renderState: n, latestValues: r }) => {
                        V.Wi.read(() => {
                            try {
                                n.dimensions = "function" == typeof t.getBBox ? t.getBBox() : t.getBoundingClientRect();
                            } catch (e) {
                                n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
                            }
                        }),
                            V.Wi.render(() => {
                                (0, O.i)(n, r, { enableHardwareAcceleration: !1 }, (0, R.a)(t.tagName), e.transformTemplate), (0, N.K)(t, n);
                            });
                    },
                }),
            },
                W = { useVisualState: z({ scrapeMotionValuesFromProps: n(50189).U, createRenderState: I }) },
                H = (function (e) {
                    function t(t, n = {}) {
                        return (function ({ preloadedFeatures: e, createVisualElement: t, useRender: n, useVisualState: r, Component: h }) {
                            e && (0, b.K)(e);
                            let x = (0, o.forwardRef)(function (b, E) {
                                var x;
                                let k;
                                let _ = {
                                    ...(0, o.useContext)(s._),
                                    ...b,
                                    layoutId: (function ({ layoutId: e }) {
                                        let t = (0, o.useContext)(v.p).id;
                                        return t && void 0 !== e ? t + "-" + e : e;
                                    })(b),
                                },
                                    { isStatic: j } = _,
                                    I = (function (e) {
                                        let { initial: t, animate: n } = (function (e, t) {
                                            if ((0, g.G)(e)) {
                                                let { initial: t, animate: n } = e;
                                                return { initial: !1 === t || (0, m.$)(t) ? t : void 0, animate: (0, m.$)(n) ? n : void 0 };
                                            }
                                            return !1 !== e.inherit ? t : {};
                                        })(e, (0, o.useContext)(a));
                                        return (0, o.useMemo)(() => ({ initial: t, animate: n }), [y(t), y(n)]);
                                    })(b),
                                    T = r(b, j);
                                if (!j && w.j) {
                                    I.visualElement = (function (e, t, n, r) {
                                        let { visualElement: i } = (0, o.useContext)(a),
                                            h = (0, o.useContext)(l.u),
                                            d = (0, o.useContext)(c.O),
                                            m = (0, o.useContext)(s._).reducedMotion,
                                            g = (0, o.useRef)();
                                        (r = r || h.renderer), !g.current && r && (g.current = r(e, { visualState: t, parent: i, props: n, presenceContext: d, blockInitialAnimation: !!d && !1 === d.initial, reducedMotionConfig: m }));
                                        let y = g.current;
                                        (0, o.useInsertionEffect)(() => {
                                            y && y.update(n, d);
                                        });
                                        let b = (0, o.useRef)(!!(n[p.M] && !window.HandoffComplete));
                                        return (
                                            (0, u.L)(() => {
                                                y && (f.postRender(y.render), b.current && y.animationState && y.animationState.animateChanges());
                                            }),
                                            (0, o.useEffect)(() => {
                                                y && (y.updateFeatures(), !b.current && y.animationState && y.animationState.animateChanges(), b.current && ((b.current = !1), (window.HandoffComplete = !0)));
                                            }),
                                            y
                                        );
                                    })(h, T, _, t);
                                    let n = (0, o.useContext)(S),
                                        r = (0, o.useContext)(l.u).strict;
                                    I.visualElement && (k = I.visualElement.loadFeatures(_, r, e, n));
                                }
                                return (0, i.jsxs)(a.Provider, {
                                    value: I,
                                    children: [
                                        k && I.visualElement ? (0, i.jsx)(k, { visualElement: I.visualElement, ..._ }) : null,
                                        n(
                                            h,
                                            b,
                                            ((x = I.visualElement),
                                                (0, o.useCallback)(
                                                    (e) => {
                                                        e && T.mount && T.mount(e), x && (e ? x.mount(e) : x.unmount()), E && ("function" == typeof E ? E(e) : (0, d.I)(E) && (E.current = e));
                                                    },
                                                    [x]
                                                )),
                                            T,
                                            j,
                                            I.visualElement
                                        ),
                                    ],
                                });
                            });
                            return (x[E] = h), x;
                        })(e(t, n));
                    }
                    if ("undefined" == typeof Proxy) return t;
                    let n = new Map();
                    return new Proxy(t, { get: (e, r) => (n.has(r) || n.set(r, t(r)), n.get(r)) });
                })(function (e, { forwardMotionProps: t = !1 }, n, r) {
                    return {
                        ...((0, x.q)(e) ? $ : W),
                        preloadedFeatures: n,
                        useRender: (function (e = !1) {
                            return (t, n, r, { latestValues: i }, s) => {
                                let a = ((0, x.q)(t)
                                    ? function (e, t, n, r) {
                                        let i = (0, o.useMemo)(() => {
                                            let n = A();
                                            return (0, O.i)(n, t, { enableHardwareAcceleration: !1 }, (0, R.a)(r), e.transformTemplate), { ...n.attrs, style: { ...n.style } };
                                        }, [t]);
                                        if (e.style) {
                                            let t = {};
                                            T(t, e.style, e), (i.style = { ...t, ...i.style });
                                        }
                                        return i;
                                    }
                                    : function (e, t, n) {
                                        let r = {},
                                            i = (function (e, t, n) {
                                                let r = e.style || {},
                                                    i = {};
                                                return (
                                                    T(i, r, e),
                                                    Object.assign(
                                                        i,
                                                        (function ({ transformTemplate: e }, t, n) {
                                                            return (0, o.useMemo)(() => {
                                                                let r = I();
                                                                return (0, j.r)(r, t, { enableHardwareAcceleration: !n }, e), Object.assign({}, r.vars, r.style);
                                                            }, [t]);
                                                        })(e, t, n)
                                                    ),
                                                    i
                                                );
                                            })(e, t, n);
                                        return (
                                            e.drag &&
                                            !1 !== e.dragListener &&
                                            ((r.draggable = !1), (i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none"), (i.touchAction = !0 === e.drag ? "none" : `pan-${"x" === e.drag ? "y" : "x"}`)),
                                            void 0 === e.tabIndex && (e.onTap || e.onTapStart || e.whileTap) && (r.tabIndex = 0),
                                            (r.style = i),
                                            r
                                        );
                                    })(n, i, s, t),
                                    c = (function (e, t, n) {
                                        let r = {};
                                        for (let i in e) ("values" !== i || "object" != typeof e.values) && (F(i) || (!0 === n && C(i)) || (!t && !C(i)) || (e.draggable && i.startsWith("onDrag"))) && (r[i] = e[i]);
                                        return r;
                                    })(n, "string" == typeof t, e),
                                    u = t !== o.Fragment ? { ...c, ...a, ref: r } : {},
                                    { children: l } = n,
                                    p = (0, o.useMemo)(() => ((0, _.i)(l) ? l.get() : l), [l]);
                                return (0, o.createElement)(t, { ...u, children: p });
                            };
                        })(t),
                        createVisualElement: r,
                        Component: e,
                    };
                });
        },
        93193: function (e, t, n) {
            "use strict";
            n.d(t, {
                D: function () {
                    return r;
                },
            });
            let r = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase();
        },
        57630: function (e, t, n) {
            "use strict";
            n.d(t, {
                f: function () {
                    return i;
                },
                t: function () {
                    return s;
                },
            });
            let r = (e) => (t) => "string" == typeof t && t.startsWith(e),
                i = r("--"),
                o = r("var(--"),
                s = (e) => !!o(e) && a.test(e.split("/*")[0].trim()),
                a = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
        },
        62627: function (e, t, n) {
            "use strict";
            n.d(t, {
                q: function () {
                    return i;
                },
            });
            let r = [
                "animate",
                "circle",
                "defs",
                "desc",
                "ellipse",
                "g",
                "image",
                "line",
                "filter",
                "marker",
                "mask",
                "metadata",
                "path",
                "pattern",
                "polygon",
                "polyline",
                "rect",
                "stop",
                "switch",
                "symbol",
                "svg",
                "text",
                "tspan",
                "use",
                "view",
            ];
            function i(e) {
                if ("string" != typeof e || e.includes("-"));
                else if (r.indexOf(e) > -1 || /[A-Z]/u.test(e)) return !0;
                return !1;
            }
        },
        36173: function (e, t, n) {
            "use strict";
            n.d(t, {
                j: function () {
                    return s;
                },
            });
            var r = n(61649),
                i = n(96190);
            let o = { ...r.Rx, transform: Math.round },
                s = {
                    borderWidth: i.px,
                    borderTopWidth: i.px,
                    borderRightWidth: i.px,
                    borderBottomWidth: i.px,
                    borderLeftWidth: i.px,
                    borderRadius: i.px,
                    radius: i.px,
                    borderTopLeftRadius: i.px,
                    borderTopRightRadius: i.px,
                    borderBottomRightRadius: i.px,
                    borderBottomLeftRadius: i.px,
                    width: i.px,
                    maxWidth: i.px,
                    height: i.px,
                    maxHeight: i.px,
                    size: i.px,
                    top: i.px,
                    right: i.px,
                    bottom: i.px,
                    left: i.px,
                    padding: i.px,
                    paddingTop: i.px,
                    paddingRight: i.px,
                    paddingBottom: i.px,
                    paddingLeft: i.px,
                    margin: i.px,
                    marginTop: i.px,
                    marginRight: i.px,
                    marginBottom: i.px,
                    marginLeft: i.px,
                    rotate: i.RW,
                    rotateX: i.RW,
                    rotateY: i.RW,
                    rotateZ: i.RW,
                    scale: r.bA,
                    scaleX: r.bA,
                    scaleY: r.bA,
                    scaleZ: r.bA,
                    skew: i.RW,
                    skewX: i.RW,
                    skewY: i.RW,
                    distance: i.px,
                    translateX: i.px,
                    translateY: i.px,
                    translateZ: i.px,
                    x: i.px,
                    y: i.px,
                    z: i.px,
                    perspective: i.px,
                    transformPerspective: i.px,
                    opacity: r.Fq,
                    originX: i.$C,
                    originY: i.$C,
                    originZ: i.px,
                    zIndex: o,
                    backgroundPositionX: i.px,
                    backgroundPositionY: i.px,
                    fillOpacity: r.Fq,
                    strokeOpacity: r.Fq,
                    numOctaves: o,
                };
        },
        38057: function (e, t, n) {
            "use strict";
            n.d(t, {
                r: function () {
                    return u;
                },
            });
            var r = n(94714);
            let i = { x: "translateX", y: "translateY", z: "translateZ", transformPerspective: "perspective" },
                o = r._.length;
            var s = n(57630);
            let a = (e, t) => (t && "number" == typeof e ? t.transform(e) : e);
            var c = n(36173);
            function u(e, t, n, u) {
                let { style: l, vars: p, transform: f, transformOrigin: h } = e,
                    d = !1,
                    m = !1,
                    g = !0;
                for (let e in t) {
                    let n = t[e];
                    if ((0, s.f)(e)) {
                        p[e] = n;
                        continue;
                    }
                    let i = c.j[e],
                        o = a(n, i);
                    if (r.G.has(e)) {
                        if (((d = !0), (f[e] = o), !g)) continue;
                        n !== (i.default || 0) && (g = !1);
                    } else e.startsWith("origin") ? ((m = !0), (h[e] = o)) : (l[e] = o);
                }
                if (
                    (!t.transform &&
                        (d || u
                            ? (l.transform = (function (e, { enableHardwareAcceleration: t = !0, allowTransformNone: n = !0 }, s, a) {
                                let c = "";
                                for (let t = 0; t < o; t++) {
                                    let n = r._[t];
                                    if (void 0 !== e[n]) {
                                        let t = i[n] || n;
                                        c += `${t}(${e[n]}) `;
                                    }
                                }
                                return t && !e.z && (c += "translateZ(0)"), (c = c.trim()), a ? (c = a(e, s ? "" : c)) : n && s && (c = "none"), c;
                            })(e.transform, n, g, u))
                            : l.transform && (l.transform = "none")),
                        m)
                ) {
                    let { originX: e = "50%", originY: t = "50%", originZ: n = 0 } = h;
                    l.transformOrigin = `${e} ${t} ${n}`;
                }
            }
        },
        34242: function (e, t, n) {
            "use strict";
            function r(e, { style: t, vars: n }, r, i) {
                for (let o in (Object.assign(e.style, t, i && i.getProjectionStyles(r)), n)) e.style.setProperty(o, n[o]);
            }
            n.d(t, {
                N: function () {
                    return r;
                },
            });
        },
        50189: function (e, t, n) {
            "use strict";
            n.d(t, {
                U: function () {
                    return o;
                },
            });
            var r = n(96728),
                i = n(40406);
            function o(e, t, n) {
                var o;
                let { style: s } = e,
                    a = {};
                for (let c in s) ((0, i.i)(s[c]) || (t.style && (0, i.i)(t.style[c])) || (0, r.j)(c, e) || (null === (o = null == n ? void 0 : n.getValue(c)) || void 0 === o ? void 0 : o.liveStyle) !== void 0) && (a[c] = s[c]);
                return a;
            }
        },
        94714: function (e, t, n) {
            "use strict";
            n.d(t, {
                G: function () {
                    return i;
                },
                _: function () {
                    return r;
                },
            });
            let r = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
                i = new Set(r);
        },
        85415: function (e, t, n) {
            "use strict";
            n.d(t, {
                i: function () {
                    return c;
                },
            });
            var r = n(38057),
                i = n(96190);
            function o(e, t, n) {
                return "string" == typeof e ? e : i.px.transform(t + n * e);
            }
            let s = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
                a = { offset: "strokeDashoffset", array: "strokeDasharray" };
            function c(e, { attrX: t, attrY: n, attrScale: c, originX: u, originY: l, pathLength: p, pathSpacing: f = 1, pathOffset: h = 0, ...d }, m, g, y) {
                if (((0, r.r)(e, d, m, y), g)) {
                    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
                    return;
                }
                (e.attrs = e.style), (e.style = {});
                let { attrs: b, style: w, dimensions: v } = e;
                b.transform && (v && (w.transform = b.transform), delete b.transform),
                    v &&
                    (void 0 !== u || void 0 !== l || w.transform) &&
                    (w.transformOrigin = (function (e, t, n) {
                        let r = o(t, e.x, e.width),
                            i = o(n, e.y, e.height);
                        return `${r} ${i}`;
                    })(v, void 0 !== u ? u : 0.5, void 0 !== l ? l : 0.5)),
                    void 0 !== t && (b.x = t),
                    void 0 !== n && (b.y = n),
                    void 0 !== c && (b.scale = c),
                    void 0 !== p &&
                    (function (e, t, n = 1, r = 0, o = !0) {
                        e.pathLength = 1;
                        let c = o ? s : a;
                        e[c.offset] = i.px.transform(-r);
                        let u = i.px.transform(t),
                            l = i.px.transform(n);
                        e[c.array] = `${u} ${l}`;
                    })(b, p, f, h, !1);
            }
        },
        77302: function (e, t, n) {
            "use strict";
            n.d(t, {
                s: function () {
                    return r;
                },
            });
            let r = new Set([
                "baseFrequency",
                "diffuseConstant",
                "kernelMatrix",
                "kernelUnitLength",
                "keySplines",
                "keyTimes",
                "limitingConeAngle",
                "markerHeight",
                "markerWidth",
                "numOctaves",
                "targetX",
                "targetY",
                "surfaceScale",
                "specularConstant",
                "specularExponent",
                "stdDeviation",
                "tableValues",
                "viewBox",
                "gradientTransform",
                "pathLength",
                "startOffset",
                "textLength",
                "lengthAdjust",
            ]);
        },
        79854: function (e, t, n) {
            "use strict";
            n.d(t, {
                a: function () {
                    return r;
                },
            });
            let r = (e) => "string" == typeof e && "svg" === e.toLowerCase();
        },
        68504: function (e, t, n) {
            "use strict";
            n.d(t, {
                K: function () {
                    return s;
                },
            });
            var r = n(93193),
                i = n(34242),
                o = n(77302);
            function s(e, t, n, s) {
                for (let n in ((0, i.N)(e, t, void 0, s), t.attrs)) e.setAttribute(o.s.has(n) ? n : (0, r.D)(n), t.attrs[n]);
            }
        },
        16832: function (e, t, n) {
            "use strict";
            n.d(t, {
                U: function () {
                    return s;
                },
            });
            var r = n(40406),
                i = n(50189),
                o = n(94714);
            function s(e, t, n) {
                let s = (0, i.U)(e, t, n);
                for (let n in e) ((0, r.i)(e[n]) || (0, r.i)(t[n])) && (s[-1 !== o._.indexOf(n) ? "attr" + n.charAt(0).toUpperCase() + n.substring(1) : n] = e[n]);
                return s;
            }
        },
        7504: function (e, t, n) {
            "use strict";
            n.d(t, {
                G: function () {
                    return s;
                },
                M: function () {
                    return a;
                },
            });
            var r = n(2445),
                i = n(97732),
                o = n(22963);
            function s(e) {
                return (0, r.H)(e.animate) || o.V.some((t) => (0, i.$)(e[t]));
            }
            function a(e) {
                return !!(s(e) || e.variants);
            }
        },
        97732: function (e, t, n) {
            "use strict";
            function r(e) {
                return "string" == typeof e || Array.isArray(e);
            }
            n.d(t, {
                $: function () {
                    return r;
                },
            });
        },
        79432: function (e, t, n) {
            "use strict";
            function r(e, t, n, r = {}, i = {}) {
                return "function" == typeof t && (t = t(void 0 !== n ? n : e.custom, r, i)), "string" == typeof t && (t = e.variants && e.variants[t]), "function" == typeof t && (t = t(void 0 !== n ? n : e.custom, r, i)), t;
            }
            n.d(t, {
                o: function () {
                    return r;
                },
            });
        },
        22963: function (e, t, n) {
            "use strict";
            n.d(t, {
                V: function () {
                    return i;
                },
                e: function () {
                    return r;
                },
            });
            let r = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
                i = ["initial", ...r];
        },
        22081: function (e, t, n) {
            "use strict";
            n.d(t, {
                c: function () {
                    return r;
                },
            });
            let r = { skipAnimations: !1, useManualTiming: !1 };
        },
        24169: function (e, t, n) {
            "use strict";
            n.d(t, {
                u: function () {
                    return r;
                },
            });
            let r = (e, t, n) => (n > t ? t : n < e ? e : n);
        },
        11741: function (e, t, n) {
            "use strict";
            n.d(t, {
                j: function () {
                    return r;
                },
            });
            let r = "undefined" != typeof document;
        },
        51804: function (e, t, n) {
            "use strict";
            function r(e) {
                return e && "object" == typeof e && Object.prototype.hasOwnProperty.call(e, "current");
            }
            n.d(t, {
                I: function () {
                    return r;
                },
            });
        },
        81662: function (e, t, n) {
            "use strict";
            n.d(t, {
                Z: function () {
                    return r;
                },
            });
            let r = (e) => e;
        },
        8715: function (e, t, n) {
            "use strict";
            n.d(t, {
                Y: function () {
                    return o;
                },
                p: function () {
                    return i;
                },
            });
            var r = n(48488);
            let i = (e) => !!(e && "object" == typeof e && e.mix && e.toValue),
                o = (e) => ((0, r.C)(e) ? e[e.length - 1] || 0 : e);
        },
        96681: function (e, t, n) {
            "use strict";
            n.d(t, {
                h: function () {
                    return i;
                },
            });
            var r = n(67294);
            function i(e) {
                let t = (0, r.useRef)(null);
                return null === t.current && (t.current = e()), t.current;
            }
        },
        58868: function (e, t, n) {
            "use strict";
            n.d(t, {
                L: function () {
                    return i;
                },
            });
            var r = n(67294);
            let i = n(11741).j ? r.useLayoutEffect : r.useEffect;
        },
        61649: function (e, t, n) {
            "use strict";
            n.d(t, {
                Fq: function () {
                    return o;
                },
                Rx: function () {
                    return i;
                },
                bA: function () {
                    return s;
                },
            });
            var r = n(24169);
            let i = { test: (e) => "number" == typeof e, parse: parseFloat, transform: (e) => e },
                o = { ...i, transform: (e) => (0, r.u)(0, 1, e) },
                s = { ...i, default: 1 };
        },
        96190: function (e, t, n) {
            "use strict";
            n.d(t, {
                $C: function () {
                    return l;
                },
                RW: function () {
                    return o;
                },
                aQ: function () {
                    return s;
                },
                px: function () {
                    return a;
                },
                vh: function () {
                    return c;
                },
                vw: function () {
                    return u;
                },
            });
            var r = n(36430);
            let i = (e) => ({ test: (t) => (0, r.HD)(t) && t.endsWith(e) && 1 === t.split(" ").length, parse: parseFloat, transform: (t) => `${t}${e}` }),
                o = i("deg"),
                s = i("%"),
                a = i("px"),
                c = i("vh"),
                u = i("vw"),
                l = { ...s, parse: (e) => s.parse(e) / 100, transform: (e) => s.transform(100 * e) };
        },
        36430: function (e, t, n) {
            "use strict";
            n.d(t, {
                HD: function () {
                    return a;
                },
                KP: function () {
                    return i;
                },
                Nw: function () {
                    return r;
                },
                dA: function () {
                    return o;
                },
                mj: function () {
                    return s;
                },
            });
            let r = (e) => Math.round(1e5 * e) / 1e5,
                i = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
                o = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
                s = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;
            function a(e) {
                return "string" == typeof e;
            }
        },
        40406: function (e, t, n) {
            "use strict";
            n.d(t, {
                i: function () {
                    return r;
                },
            });
            let r = (e) => !!(e && e.getVelocity);
        },
        26269: function (e, t, n) {
            "use strict";
            let r, i, o, s;
            n.r(t),
                n.d(t, {
                    deleteDB: function () {
                        return m;
                    },
                    openDB: function () {
                        return d;
                    },
                    unwrap: function () {
                        return h;
                    },
                    wrap: function () {
                        return f;
                    },
                });
            let a = (e, t) => t.some((t) => e instanceof t),
                c = new WeakMap(),
                u = new WeakMap(),
                l = new WeakMap(),
                p = {
                    get(e, t, n) {
                        if (e instanceof IDBTransaction) {
                            if ("done" === t) return c.get(e);
                            if ("store" === t) return n.objectStoreNames[1] ? void 0 : n.objectStore(n.objectStoreNames[0]);
                        }
                        return f(e[t]);
                    },
                    set: (e, t, n) => ((e[t] = n), !0),
                    has: (e, t) => (e instanceof IDBTransaction && ("done" === t || "store" === t)) || t in e,
                };
            function f(e) {
                var t;
                if (e instanceof IDBRequest)
                    return (function (e) {
                        let t = new Promise((t, n) => {
                            let r = () => {
                                e.removeEventListener("success", i), e.removeEventListener("error", o);
                            },
                                i = () => {
                                    t(f(e.result)), r();
                                },
                                o = () => {
                                    n(e.error), r();
                                };
                            e.addEventListener("success", i), e.addEventListener("error", o);
                        });
                        return l.set(t, e), t;
                    })(e);
                if (u.has(e)) return u.get(e);
                let n =
                    "function" == typeof (t = e)
                        ? (i || (i = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(t)
                            ? function (...e) {
                                return t.apply(h(this), e), f(this.request);
                            }
                            : function (...e) {
                                return f(t.apply(h(this), e));
                            }
                        : (t instanceof IDBTransaction &&
                            (function (e) {
                                if (c.has(e)) return;
                                let t = new Promise((t, n) => {
                                    let r = () => {
                                        e.removeEventListener("complete", i), e.removeEventListener("error", o), e.removeEventListener("abort", o);
                                    },
                                        i = () => {
                                            t(), r();
                                        },
                                        o = () => {
                                            n(e.error || new DOMException("AbortError", "AbortError")), r();
                                        };
                                    e.addEventListener("complete", i), e.addEventListener("error", o), e.addEventListener("abort", o);
                                });
                                c.set(e, t);
                            })(t),
                            a(t, r || (r = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])))
                            ? new Proxy(t, p)
                            : t;
                return n !== e && (u.set(e, n), l.set(n, e)), n;
            }
            let h = (e) => l.get(e);
            function d(e, t, { blocked: n, upgrade: r, blocking: i, terminated: o } = {}) {
                let s = indexedDB.open(e, t),
                    a = f(s);
                return (
                    r &&
                    s.addEventListener("upgradeneeded", (e) => {
                        r(f(s.result), e.oldVersion, e.newVersion, f(s.transaction), e);
                    }),
                    n && s.addEventListener("blocked", (e) => n(e.oldVersion, e.newVersion, e)),
                    a
                        .then((e) => {
                            o && e.addEventListener("close", () => o()), i && e.addEventListener("versionchange", (e) => i(e.oldVersion, e.newVersion, e));
                        })
                        .catch(() => { }),
                    a
                );
            }
            function m(e, { blocked: t } = {}) {
                let n = indexedDB.deleteDatabase(e);
                return t && n.addEventListener("blocked", (e) => t(e.oldVersion, e)), f(n).then(() => void 0);
            }
            let g = ["get", "getKey", "getAll", "getAllKeys", "count"],
                y = ["put", "add", "delete", "clear"],
                b = new Map();
            function w(e, t) {
                if (!(e instanceof IDBDatabase && !(t in e) && "string" == typeof t)) return;
                if (b.get(t)) return b.get(t);
                let n = t.replace(/FromIndex$/, ""),
                    r = t !== n,
                    i = y.includes(n);
                if (!(n in (r ? IDBIndex : IDBObjectStore).prototype) || !(i || g.includes(n))) return;
                let o = async function (e, ...t) {
                    let o = this.transaction(e, i ? "readwrite" : "readonly"),
                        s = o.store;
                    return r && (s = s.index(t.shift())), (await Promise.all([s[n](...t), i && o.done]))[0];
                };
                return b.set(t, o), o;
            }
            p = { ...(o = p), get: (e, t, n) => w(e, t) || o.get(e, t, n), has: (e, t) => !!w(e, t) || o.has(e, t) };
            let v = ["continue", "continuePrimaryKey", "advance"],
                S = {},
                E = new WeakMap(),
                x = new WeakMap(),
                k = {
                    get(e, t) {
                        if (!v.includes(t)) return e[t];
                        let n = S[t];
                        return (
                            n ||
                            (n = S[t] = function (...e) {
                                E.set(this, x.get(this)[t](...e));
                            }),
                            n
                        );
                    },
                };
            async function* _(...e) {
                let t = this;
                if ((t instanceof IDBCursor || (t = await t.openCursor(...e)), !t)) return;
                let n = new Proxy(t, k);
                for (x.set(n, t), l.set(n, h(t)); t;) yield n, (t = await (E.get(n) || t.continue())), E.delete(n);
            }
            function j(e, t) {
                return (t === Symbol.asyncIterator && a(e, [IDBIndex, IDBObjectStore, IDBCursor])) || ("iterate" === t && a(e, [IDBIndex, IDBObjectStore]));
            }
            p = { ...(s = p), get: (e, t, n) => (j(e, t) ? _ : s.get(e, t, n)), has: (e, t) => j(e, t) || s.has(e, t) };
        },
    },
    function (e) {
        var t = function (t) {
            return e((e.s = t));
        };
        e.O(0, [9774, 179], function () {
            return t(6840), t(9090);
        }),
            (_N_E = e.O());
    },
]);
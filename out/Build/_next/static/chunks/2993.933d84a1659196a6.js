"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2993],
    {
        2993: function (t, e, r) {
            var n,
                o = r(48764).Buffer,
                i = r(34155);
            (n = function () {
                return (function (t) {
                    var e = {};
                    function r(n) {
                        if (e[n]) return e[n].exports;
                        var o = (e[n] = { i: n, l: !1, exports: {} });
                        return t[n].call(o.exports, o, o.exports, r), (o.l = !0), o.exports;
                    }
                    return (
                        (r.m = t),
                        (r.c = e),
                        (r.d = function (t, e, n) {
                            r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
                        }),
                        (r.r = function (t) {
                            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 });
                        }),
                        (r.t = function (t, e) {
                            if ((1 & e && (t = r(t)), 8 & e || (4 & e && "object" == typeof t && t && t.__esModule))) return t;
                            var n = Object.create(null);
                            if ((r.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t))
                                for (var o in t)
                                    r.d(
                                        n,
                                        o,
                                        function (e) {
                                            return t[e];
                                        }.bind(null, o)
                                    );
                            return n;
                        }),
                        (r.n = function (t) {
                            var e =
                                t && t.__esModule
                                    ? function () {
                                        return t.default;
                                    }
                                    : function () {
                                        return t;
                                    };
                            return r.d(e, "a", e), e;
                        }),
                        (r.o = function (t, e) {
                            return Object.prototype.hasOwnProperty.call(t, e);
                        }),
                        (r.p = ""),
                        r((r.s = 2))
                    );
                })([
                    function (t, e, r) {
                        t.exports = {
                            Z_NO_FLUSH: 0,
                            Z_PARTIAL_FLUSH: 1,
                            Z_SYNC_FLUSH: 2,
                            Z_FULL_FLUSH: 3,
                            Z_FINISH: 4,
                            Z_BLOCK: 5,
                            Z_TREES: 6,
                            Z_OK: 0,
                            Z_STREAM_END: 1,
                            Z_NEED_DICT: 2,
                            Z_ERRNO: -1,
                            Z_STREAM_ERROR: -2,
                            Z_DATA_ERROR: -3,
                            Z_MEM_ERROR: -4,
                            Z_BUF_ERROR: -5,
                            Z_NO_COMPRESSION: 0,
                            Z_BEST_SPEED: 1,
                            Z_BEST_COMPRESSION: 9,
                            Z_DEFAULT_COMPRESSION: -1,
                            Z_FILTERED: 1,
                            Z_HUFFMAN_ONLY: 2,
                            Z_RLE: 3,
                            Z_FIXED: 4,
                            Z_DEFAULT_STRATEGY: 0,
                            Z_BINARY: 0,
                            Z_TEXT: 1,
                            Z_UNKNOWN: 2,
                            Z_DEFLATED: 8,
                        };
                    },
                    function (t, e) {
                        var r;
                        r = (function () {
                            return this;
                        })();
                        try {
                            r = r || Function("return this")() || (0, eval)("this");
                        } catch (t) {
                            r = window;
                        }
                        t.exports = r;
                    },
                    function (t, e, r) {
                        (function (t) {
                            var n,
                                a = r(3),
                                s = r(7);
                            function c(t) {
                                var e = Object.create(null);
                                return (
                                    t &&
                                    Object.keys(t).forEach(function (r) {
                                        if ("default" !== r) {
                                            var n = Object.getOwnPropertyDescriptor(t, r);
                                            Object.defineProperty(
                                                e,
                                                r,
                                                n.get
                                                    ? n
                                                    : {
                                                        enumerable: !0,
                                                        get: function () {
                                                            return t[r];
                                                        },
                                                    }
                                            );
                                        }
                                    }),
                                    (e.default = t),
                                    Object.freeze(e)
                                );
                            }
                            var u,
                                f = c(a),
                                h = c(s);
                            ((l = u || (u = {}))[(l.EPERM = 1)] = "EPERM"),
                                (l[(l.ENOENT = 2)] = "ENOENT"),
                                (l[(l.EIO = 5)] = "EIO"),
                                (l[(l.EBADF = 9)] = "EBADF"),
                                (l[(l.EACCES = 13)] = "EACCES"),
                                (l[(l.EBUSY = 16)] = "EBUSY"),
                                (l[(l.EEXIST = 17)] = "EEXIST"),
                                (l[(l.ENOTDIR = 20)] = "ENOTDIR"),
                                (l[(l.EISDIR = 21)] = "EISDIR"),
                                (l[(l.EINVAL = 22)] = "EINVAL"),
                                (l[(l.EFBIG = 27)] = "EFBIG"),
                                (l[(l.ENOSPC = 28)] = "ENOSPC"),
                                (l[(l.EROFS = 30)] = "EROFS"),
                                (l[(l.ENOTEMPTY = 39)] = "ENOTEMPTY"),
                                (l[(l.ENOTSUP = 95)] = "ENOTSUP");
                            var p = {};
                            (p[u.EPERM] = "Operation not permitted."),
                                (p[u.ENOENT] = "No such file or directory."),
                                (p[u.EIO] = "Input/output error."),
                                (p[u.EBADF] = "Bad file descriptor."),
                                (p[u.EACCES] = "Permission denied."),
                                (p[u.EBUSY] = "Resource busy or locked."),
                                (p[u.EEXIST] = "File exists."),
                                (p[u.ENOTDIR] = "File is not a directory."),
                                (p[u.EISDIR] = "File is a directory."),
                                (p[u.EINVAL] = "Invalid argument."),
                                (p[u.EFBIG] = "File is too big."),
                                (p[u.ENOSPC] = "No space left on disk."),
                                (p[u.EROFS] = "Cannot modify a read-only file system."),
                                (p[u.ENOTEMPTY] = "Directory is not empty."),
                                (p[u.ENOTSUP] = "Operation is not supported.");
                            var l,
                                d,
                                y = (function (t) {
                                    function e(e, r, n) {
                                        void 0 === r && (r = p[e]),
                                            t.call(this, r),
                                            (this.syscall = ""),
                                            (this.errno = e),
                                            (this.code = u[e]),
                                            (this.path = n),
                                            (this.stack = new t().stack),
                                            (this.message = "Error: " + this.code + ": " + r + (this.path ? ", '" + this.path + "'" : ""));
                                    }
                                    return (
                                        t && (e.__proto__ = t),
                                        (e.prototype = Object.create(t && t.prototype)),
                                        (e.prototype.constructor = e),
                                        (e.fromJSON = function (t) {
                                            var r = new e(0);
                                            return (r.errno = t.errno), (r.code = t.code), (r.path = t.path), (r.stack = t.stack), (r.message = t.message), r;
                                        }),
                                        (e.fromBuffer = function (t, r) {
                                            return void 0 === r && (r = 0), e.fromJSON(JSON.parse(t.toString("utf8", r + 4, r + 4 + t.readUInt32LE(r))));
                                        }),
                                        (e.FileError = function (t, r) {
                                            return new e(t, p[t], r);
                                        }),
                                        (e.ENOENT = function (t) {
                                            return this.FileError(u.ENOENT, t);
                                        }),
                                        (e.EEXIST = function (t) {
                                            return this.FileError(u.EEXIST, t);
                                        }),
                                        (e.EISDIR = function (t) {
                                            return this.FileError(u.EISDIR, t);
                                        }),
                                        (e.ENOTDIR = function (t) {
                                            return this.FileError(u.ENOTDIR, t);
                                        }),
                                        (e.EPERM = function (t) {
                                            return this.FileError(u.EPERM, t);
                                        }),
                                        (e.ENOTEMPTY = function (t) {
                                            return this.FileError(u.ENOTEMPTY, t);
                                        }),
                                        (e.prototype.toString = function () {
                                            return this.message;
                                        }),
                                        (e.prototype.toJSON = function () {
                                            return { errno: this.errno, code: this.code, path: this.path, stack: this.stack, message: this.message };
                                        }),
                                        (e.prototype.writeToBuffer = function (t, e) {
                                            void 0 === t && (t = o.alloc(this.bufferSize())), void 0 === e && (e = 0);
                                            var r = t.write(JSON.stringify(this.toJSON()), e + 4);
                                            return t.writeUInt32LE(r, e), t;
                                        }),
                                        (e.prototype.bufferSize = function () {
                                            return 4 + o.byteLength(JSON.stringify(this.toJSON()));
                                        }),
                                        e
                                    );
                                })(Error),
                                g = Object.freeze({
                                    __proto__: null,
                                    ApiError: y,
                                    get ErrorCode() {
                                        return u;
                                    },
                                    ErrorStrings: p,
                                });
                            ((_ = d || (d = {}))[(_.NOP = 0)] = "NOP"), (_[(_.THROW_EXCEPTION = 1)] = "THROW_EXCEPTION"), (_[(_.TRUNCATE_FILE = 2)] = "TRUNCATE_FILE"), (_[(_.CREATE_FILE = 3)] = "CREATE_FILE");
                            var _,
                                m,
                                w = function t(e) {
                                    if (((this.flagStr = e), 0 > t.validFlagStrs.indexOf(e))) throw new y(u.EINVAL, "Invalid flag: " + e);
                                };
                            (w.getFileFlag = function (t) {
                                return w.flagCache.hasOwnProperty(t) ? w.flagCache[t] : (w.flagCache[t] = new w(t));
                            }),
                                (w.prototype.getFlagString = function () {
                                    return this.flagStr;
                                }),
                                (w.prototype.isReadable = function () {
                                    return -1 !== this.flagStr.indexOf("r") || -1 !== this.flagStr.indexOf("+");
                                }),
                                (w.prototype.isWriteable = function () {
                                    return -1 !== this.flagStr.indexOf("w") || -1 !== this.flagStr.indexOf("a") || -1 !== this.flagStr.indexOf("+");
                                }),
                                (w.prototype.isTruncating = function () {
                                    return -1 !== this.flagStr.indexOf("w");
                                }),
                                (w.prototype.isAppendable = function () {
                                    return -1 !== this.flagStr.indexOf("a");
                                }),
                                (w.prototype.isSynchronous = function () {
                                    return -1 !== this.flagStr.indexOf("s");
                                }),
                                (w.prototype.isExclusive = function () {
                                    return -1 !== this.flagStr.indexOf("x");
                                }),
                                (w.prototype.pathExistsAction = function () {
                                    return this.isExclusive() ? d.THROW_EXCEPTION : this.isTruncating() ? d.TRUNCATE_FILE : d.NOP;
                                }),
                                (w.prototype.pathNotExistsAction = function () {
                                    return (this.isWriteable() || this.isAppendable()) && "r+" !== this.flagStr ? d.CREATE_FILE : d.THROW_EXCEPTION;
                                }),
                                (w.flagCache = {}),
                                (w.validFlagStrs = ["r", "r+", "rs", "rs+", "w", "wx", "w+", "wx+", "a", "ax", "a+", "ax+"]),
                                ((S = m || (m = {}))[(S.FILE = 32768)] = "FILE"),
                                (S[(S.DIRECTORY = 16384)] = "DIRECTORY"),
                                (S[(S.SYMLINK = 40960)] = "SYMLINK");
                            var E = function (t, e, r, n, o, i, a) {
                                (this.dev = 0), (this.ino = 0), (this.rdev = 0), (this.nlink = 1), (this.blksize = 4096), (this.uid = 0), (this.gid = 0), (this.fileData = null), (this.size = e);
                                var s = 0;
                                if (
                                    ("number" != typeof n && (n = s = Date.now()),
                                        "number" != typeof o && (s || (s = Date.now()), (o = s)),
                                        "number" != typeof i && (s || (s = Date.now()), (i = s)),
                                        "number" != typeof a && (s || (s = Date.now()), (a = s)),
                                        (this.atimeMs = n),
                                        (this.ctimeMs = i),
                                        (this.mtimeMs = o),
                                        (this.birthtimeMs = a),
                                        r)
                                )
                                    this.mode = r;
                                else
                                    switch (t) {
                                        case m.FILE:
                                            this.mode = 420;
                                            break;
                                        case m.DIRECTORY:
                                        default:
                                            this.mode = 511;
                                    }
                                (this.blocks = Math.ceil(e / 512)), this.mode < 4096 && (this.mode |= t);
                            },
                                v = { atime: { configurable: !0 }, mtime: { configurable: !0 }, ctime: { configurable: !0 }, birthtime: { configurable: !0 } };
                            (E.fromBuffer = function (t) {
                                var e = t.readUInt32LE(0),
                                    r = t.readUInt32LE(4);
                                return new E(61440 & r, e, 4095 & r, t.readDoubleLE(8), t.readDoubleLE(16), t.readDoubleLE(24));
                            }),
                                (E.clone = function (t) {
                                    return new E(61440 & t.mode, t.size, 4095 & t.mode, t.atimeMs, t.mtimeMs, t.ctimeMs, t.birthtimeMs);
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
                                (E.prototype.toBuffer = function () {
                                    var t = o.alloc(32);
                                    return t.writeUInt32LE(this.size, 0), t.writeUInt32LE(this.mode, 4), t.writeDoubleLE(this.atime.getTime(), 8), t.writeDoubleLE(this.mtime.getTime(), 16), t.writeDoubleLE(this.ctime.getTime(), 24), t;
                                }),
                                (E.prototype.isFile = function () {
                                    return (61440 & this.mode) === m.FILE;
                                }),
                                (E.prototype.isDirectory = function () {
                                    return (61440 & this.mode) === m.DIRECTORY;
                                }),
                                (E.prototype.isSymbolicLink = function () {
                                    return (61440 & this.mode) === m.SYMLINK;
                                }),
                                (E.prototype.chmod = function (t) {
                                    this.mode = (61440 & this.mode) | t;
                                }),
                                (E.prototype.isSocket = function () {
                                    return !1;
                                }),
                                (E.prototype.isBlockDevice = function () {
                                    return !1;
                                }),
                                (E.prototype.isCharacterDevice = function () {
                                    return !1;
                                }),
                                (E.prototype.isFIFO = function () {
                                    return !1;
                                }),
                                Object.defineProperties(E.prototype, v);
                            var S,
                                b,
                                I = window;
                            if ("undefined" != typeof setImmediate) b = setImmediate;
                            else {
                                var F = [];
                                if (
                                    (function () {
                                        if (void 0 !== I.importScripts || !I.postMessage) return !1;
                                        var t = !0,
                                            e = I.onmessage;
                                        return (
                                            (I.onmessage = function () {
                                                t = !1;
                                            }),
                                            I.postMessage("", "*"),
                                            (I.onmessage = e),
                                            t
                                        );
                                    })()
                                ) {
                                    b = function (t) {
                                        F.push(t), I.postMessage("zero-timeout-message", "*");
                                    };
                                    var O = function (t) {
                                        if (t.source === self && "zero-timeout-message" === t.data && (t.stopPropagation ? t.stopPropagation() : (t.cancelBubble = !0), F.length > 0)) return F.shift()();
                                    };
                                    I.addEventListener ? I.addEventListener("message", O, !0) : I.attachEvent("onmessage", O);
                                } else if (I.MessageChannel) {
                                    var R = new I.MessageChannel();
                                    (R.port1.onmessage = function (t) {
                                        if (F.length > 0) return F.shift()();
                                    }),
                                        (b = function (t) {
                                            F.push(t), R.port2.postMessage("");
                                        });
                                } else
                                    b = function (t) {
                                        return setTimeout(t, 0);
                                    };
                            }
                            var k = b,
                                T = function (t, e) {
                                    return t;
                                };
                            function L(t, e) {
                                if ("function" != typeof t) throw Error("Callback must be a function.");
                                var r = T(t, e);
                                switch (e) {
                                    case 1:
                                        return function (t) {
                                            k(function () {
                                                return r(t);
                                            });
                                        };
                                    case 2:
                                        return function (t, e) {
                                            k(function () {
                                                return r(t, e);
                                            });
                                        };
                                    case 3:
                                        return function (t, e, n) {
                                            k(function () {
                                                return r(t, e, n);
                                            });
                                        };
                                    default:
                                        throw Error("Invalid invocation of wrapCb.");
                                }
                            }
                            function N(t) {
                                if (t) return t;
                                throw new y(u.EIO, "Initialize BrowserFS with a file system using BrowserFS.initialize(filesystem)");
                            }
                            function A(t, e) {
                                switch (typeof t) {
                                    case "number":
                                        return t;
                                    case "string":
                                        var r = parseInt(t, 8);
                                        return isNaN(r) ? e : r;
                                    default:
                                        return e;
                                }
                            }
                            function D(t) {
                                if (t instanceof Date) return t;
                                if ("number" == typeof t) return new Date(1e3 * t);
                                throw new y(u.EINVAL, "Invalid time.");
                            }
                            function U(t) {
                                if (t.indexOf("\0") >= 0) throw new y(u.EINVAL, "Path must be a string without null bytes.");
                                if ("" === t) throw new y(u.EINVAL, "Path must not be empty.");
                                return h.resolve(t);
                            }
                            function x(t, e, r, n) {
                                switch (null === t ? "null" : typeof t) {
                                    case "object":
                                        return { encoding: void 0 !== t.encoding ? t.encoding : e, flag: void 0 !== t.flag ? t.flag : r, mode: A(t.mode, n) };
                                    case "string":
                                        return { encoding: t, flag: r, mode: n };
                                    case "null":
                                    case "undefined":
                                    case "function":
                                        return { encoding: e, flag: r, mode: n };
                                    default:
                                        throw TypeError('"options" must be a string or an object, got ' + typeof t + " instead.");
                                }
                            }
                            function P() { }
                            var C = function () {
                                (this.F_OK = 0), (this.R_OK = 4), (this.W_OK = 2), (this.X_OK = 1), (this.root = null), (this.fdMap = {}), (this.nextFd = 100);
                            };
                            (C.prototype.initialize = function (t) {
                                if (!t.constructor.isAvailable()) throw new y(u.EINVAL, "Tried to instantiate BrowserFS with an unavailable file system.");
                                return (this.root = t);
                            }),
                                (C.prototype._toUnixTimestamp = function (t) {
                                    if ("number" == typeof t) return t;
                                    if (t instanceof Date) return t.getTime() / 1e3;
                                    throw Error("Cannot parse time: " + t);
                                }),
                                (C.prototype.getRootFS = function () {
                                    return this.root ? this.root : null;
                                }),
                                (C.prototype.rename = function (t, e, r) {
                                    void 0 === r && (r = P);
                                    var n = L(r, 1);
                                    try {
                                        N(this.root).rename(U(t), U(e), n);
                                    } catch (t) {
                                        n(t);
                                    }
                                }),
                                (C.prototype.renameSync = function (t, e) {
                                    N(this.root).renameSync(U(t), U(e));
                                }),
                                (C.prototype.exists = function (t, e) {
                                    void 0 === e && (e = P);
                                    var r = L(e, 1);
                                    try {
                                        return N(this.root).exists(U(t), r);
                                    } catch (t) {
                                        return r(!1);
                                    }
                                }),
                                (C.prototype.existsSync = function (t) {
                                    try {
                                        return N(this.root).existsSync(U(t));
                                    } catch (t) {
                                        return !1;
                                    }
                                }),
                                (C.prototype.stat = function (t, e) {
                                    void 0 === e && (e = P);
                                    var r = L(e, 2);
                                    try {
                                        return N(this.root).stat(U(t), !1, r);
                                    } catch (t) {
                                        return r(t);
                                    }
                                }),
                                (C.prototype.statSync = function (t) {
                                    return N(this.root).statSync(U(t), !1);
                                }),
                                (C.prototype.lstat = function (t, e) {
                                    void 0 === e && (e = P);
                                    var r = L(e, 2);
                                    try {
                                        return N(this.root).stat(U(t), !0, r);
                                    } catch (t) {
                                        return r(t);
                                    }
                                }),
                                (C.prototype.lstatSync = function (t) {
                                    return N(this.root).statSync(U(t), !0);
                                }),
                                (C.prototype.truncate = function (t, e, r) {
                                    void 0 === e && (e = 0), void 0 === r && (r = P);
                                    var n = 0;
                                    "function" == typeof e ? (r = e) : "number" == typeof e && (n = e);
                                    var o = L(r, 1);
                                    try {
                                        if (n < 0) throw new y(u.EINVAL);
                                        return N(this.root).truncate(U(t), n, o);
                                    } catch (t) {
                                        return o(t);
                                    }
                                }),
                                (C.prototype.truncateSync = function (t, e) {
                                    if ((void 0 === e && (e = 0), e < 0)) throw new y(u.EINVAL);
                                    return N(this.root).truncateSync(U(t), e);
                                }),
                                (C.prototype.unlink = function (t, e) {
                                    void 0 === e && (e = P);
                                    var r = L(e, 1);
                                    try {
                                        return N(this.root).unlink(U(t), r);
                                    } catch (t) {
                                        return r(t);
                                    }
                                }),
                                (C.prototype.unlinkSync = function (t) {
                                    return N(this.root).unlinkSync(U(t));
                                }),
                                (C.prototype.open = function (t, e, r, n) {
                                    var o = this;
                                    void 0 === n && (n = P);
                                    var i = A(r, 420),
                                        a = L((n = "function" == typeof r ? r : n), 2);
                                    try {
                                        N(this.root).open(U(t), w.getFileFlag(e), i, function (t, e) {
                                            e ? a(t, o.getFdForFile(e)) : a(t);
                                        });
                                    } catch (t) {
                                        a(t);
                                    }
                                }),
                                (C.prototype.openSync = function (t, e, r) {
                                    return void 0 === r && (r = 420), this.getFdForFile(N(this.root).openSync(U(t), w.getFileFlag(e), A(r, 420)));
                                }),
                                (C.prototype.readFile = function (t, e, r) {
                                    void 0 === e && (e = {}), void 0 === r && (r = P);
                                    var n = x(e, null, "r", null),
                                        o = L((r = "function" == typeof e ? e : r), 2);
                                    try {
                                        var i = w.getFileFlag(n.flag);
                                        return i.isReadable() ? N(this.root).readFile(U(t), n.encoding, i, o) : o(new y(u.EINVAL, "Flag passed to readFile must allow for reading."));
                                    } catch (t) {
                                        return o(t);
                                    }
                                }),
                                (C.prototype.readFileSync = function (t, e) {
                                    void 0 === e && (e = {});
                                    var r = x(e, null, "r", null),
                                        n = w.getFileFlag(r.flag);
                                    if (!n.isReadable()) throw new y(u.EINVAL, "Flag passed to readFile must allow for reading.");
                                    return N(this.root).readFileSync(U(t), r.encoding, n);
                                }),
                                (C.prototype.writeFile = function (t, e, r, n) {
                                    void 0 === r && (r = {}), void 0 === n && (n = P);
                                    var o = x(r, "utf8", "w", 420),
                                        i = L((n = "function" == typeof r ? r : n), 1);
                                    try {
                                        var a = w.getFileFlag(o.flag);
                                        return a.isWriteable() ? N(this.root).writeFile(U(t), e, o.encoding, a, o.mode, i) : i(new y(u.EINVAL, "Flag passed to writeFile must allow for writing."));
                                    } catch (t) {
                                        return i(t);
                                    }
                                }),
                                (C.prototype.writeFileSync = function (t, e, r) {
                                    var n = x(r, "utf8", "w", 420),
                                        o = w.getFileFlag(n.flag);
                                    if (!o.isWriteable()) throw new y(u.EINVAL, "Flag passed to writeFile must allow for writing.");
                                    return N(this.root).writeFileSync(U(t), e, n.encoding, o, n.mode);
                                }),
                                (C.prototype.appendFile = function (t, e, r, n) {
                                    void 0 === n && (n = P);
                                    var o = x(r, "utf8", "a", 420),
                                        i = L((n = "function" == typeof r ? r : n), 1);
                                    try {
                                        var a = w.getFileFlag(o.flag);
                                        if (!a.isAppendable()) return i(new y(u.EINVAL, "Flag passed to appendFile must allow for appending."));
                                        N(this.root).appendFile(U(t), e, o.encoding, a, o.mode, i);
                                    } catch (t) {
                                        i(t);
                                    }
                                }),
                                (C.prototype.appendFileSync = function (t, e, r) {
                                    var n = x(r, "utf8", "a", 420),
                                        o = w.getFileFlag(n.flag);
                                    if (!o.isAppendable()) throw new y(u.EINVAL, "Flag passed to appendFile must allow for appending.");
                                    return N(this.root).appendFileSync(U(t), e, n.encoding, o, n.mode);
                                }),
                                (C.prototype.fstat = function (t, e) {
                                    void 0 === e && (e = P);
                                    var r = L(e, 2);
                                    try {
                                        this.fd2file(t).stat(r);
                                    } catch (t) {
                                        r(t);
                                    }
                                }),
                                (C.prototype.fstatSync = function (t) {
                                    return this.fd2file(t).statSync();
                                }),
                                (C.prototype.close = function (t, e) {
                                    var r = this;
                                    void 0 === e && (e = P);
                                    var n = L(e, 1);
                                    try {
                                        this.fd2file(t).close(function (e) {
                                            e || r.closeFd(t), n(e);
                                        });
                                    } catch (t) {
                                        n(t);
                                    }
                                }),
                                (C.prototype.closeSync = function (t) {
                                    this.fd2file(t).closeSync(), this.closeFd(t);
                                }),
                                (C.prototype.ftruncate = function (t, e, r) {
                                    void 0 === r && (r = P);
                                    var n = "number" == typeof e ? e : 0,
                                        o = L((r = "function" == typeof e ? e : r), 1);
                                    try {
                                        var i = this.fd2file(t);
                                        if (n < 0) throw new y(u.EINVAL);
                                        i.truncate(n, o);
                                    } catch (t) {
                                        o(t);
                                    }
                                }),
                                (C.prototype.ftruncateSync = function (t, e) {
                                    void 0 === e && (e = 0);
                                    var r = this.fd2file(t);
                                    if (e < 0) throw new y(u.EINVAL);
                                    r.truncateSync(e);
                                }),
                                (C.prototype.fsync = function (t, e) {
                                    void 0 === e && (e = P);
                                    var r = L(e, 1);
                                    try {
                                        this.fd2file(t).sync(r);
                                    } catch (t) {
                                        r(t);
                                    }
                                }),
                                (C.prototype.fsyncSync = function (t) {
                                    this.fd2file(t).syncSync();
                                }),
                                (C.prototype.fdatasync = function (t, e) {
                                    void 0 === e && (e = P);
                                    var r = L(e, 1);
                                    try {
                                        this.fd2file(t).datasync(r);
                                    } catch (t) {
                                        r(t);
                                    }
                                }),
                                (C.prototype.fdatasyncSync = function (t) {
                                    this.fd2file(t).datasyncSync();
                                }),
                                (C.prototype.write = function (t, e, r, n, i, a) {
                                    void 0 === a && (a = P);
                                    var s,
                                        c,
                                        f,
                                        h = null;
                                    if ("string" == typeof e) {
                                        var p = "utf8";
                                        switch (typeof r) {
                                            case "function":
                                                a = r;
                                                break;
                                            case "number":
                                                (h = r), (p = "string" == typeof n ? n : "utf8"), (a = "function" == typeof i ? i : a);
                                                break;
                                            default:
                                                return (a = "function" == typeof n ? n : "function" == typeof i ? i : a)(new y(u.EINVAL, "Invalid arguments."));
                                        }
                                        (c = 0), (f = (s = o.from(e, p)).length);
                                    } else (s = e), (c = r), (f = n), (h = "number" == typeof i ? i : null), (a = "function" == typeof i ? i : a);
                                    var l = L(a, 3);
                                    try {
                                        var d = this.fd2file(t);
                                        null != h || (h = d.getPos()), d.write(s, c, f, h, l);
                                    } catch (t) {
                                        l(t);
                                    }
                                }),
                                (C.prototype.writeSync = function (t, e, r, n, i) {
                                    var a,
                                        s,
                                        c,
                                        u = 0;
                                    "string" == typeof e
                                        ? ((c = "number" == typeof r ? r : null), (u = 0), (s = (a = o.from(e, "string" == typeof n ? n : "utf8")).length))
                                        : ((a = e), (u = r), (s = n), (c = "number" == typeof i ? i : null));
                                    var f = this.fd2file(t);
                                    return null != c || (c = f.getPos()), f.writeSync(a, u, s, c);
                                }),
                                (C.prototype.read = function (t, e, r, n, i, a) {
                                    var s, c, u, f, h;
                                    (void 0 === a && (a = P), "number" == typeof e)
                                        ? ((u = e),
                                            (s = r),
                                            (a = "function" == typeof i ? i : a),
                                            (c = 0),
                                            (f = o.alloc(u)),
                                            (h = L(function (t, e, r) {
                                                if (t) return a(t);
                                                a(t, r.toString(n), e);
                                            }, 3)))
                                        : ((f = e), (c = r), (u = n), (s = i), (h = L(a, 3)));
                                    try {
                                        var p = this.fd2file(t);
                                        null != s || (s = p.getPos()), p.read(f, c, u, s, h);
                                    } catch (t) {
                                        h(t);
                                    }
                                }),
                                (C.prototype.readSync = function (t, e, r, n, i) {
                                    var a,
                                        s,
                                        c,
                                        u,
                                        f = !1,
                                        h = "utf8";
                                    "number" == typeof e ? ((c = e), (u = r), (h = n), (s = 0), (a = o.alloc(c)), (f = !0)) : ((a = e), (s = r), (c = n), (u = i));
                                    var p = this.fd2file(t);
                                    null != u || (u = p.getPos());
                                    var l = p.readSync(a, s, c, u);
                                    return f ? [a.toString(h), l] : l;
                                }),
                                (C.prototype.fchown = function (t, e, r, n) {
                                    void 0 === n && (n = P);
                                    var o = L(n, 1);
                                    try {
                                        this.fd2file(t).chown(e, r, o);
                                    } catch (t) {
                                        o(t);
                                    }
                                }),
                                (C.prototype.fchownSync = function (t, e, r) {
                                    this.fd2file(t).chownSync(e, r);
                                }),
                                (C.prototype.fchmod = function (t, e, r) {
                                    var n = L(r, 1);
                                    try {
                                        var o = "string" == typeof e ? parseInt(e, 8) : e;
                                        this.fd2file(t).chmod(o, n);
                                    } catch (t) {
                                        n(t);
                                    }
                                }),
                                (C.prototype.fchmodSync = function (t, e) {
                                    var r = "string" == typeof e ? parseInt(e, 8) : e;
                                    this.fd2file(t).chmodSync(r);
                                }),
                                (C.prototype.futimes = function (t, e, r, n) {
                                    void 0 === n && (n = P);
                                    var o = L(n, 1);
                                    try {
                                        var i = this.fd2file(t);
                                        "number" == typeof e && (e = new Date(1e3 * e)), "number" == typeof r && (r = new Date(1e3 * r)), i.utimes(e, r, o);
                                    } catch (t) {
                                        o(t);
                                    }
                                }),
                                (C.prototype.futimesSync = function (t, e, r) {
                                    this.fd2file(t).utimesSync(D(e), D(r));
                                }),
                                (C.prototype.rmdir = function (t, e) {
                                    void 0 === e && (e = P);
                                    var r = L(e, 1);
                                    try {
                                        (t = U(t)), N(this.root).rmdir(t, r);
                                    } catch (t) {
                                        r(t);
                                    }
                                }),
                                (C.prototype.rmdirSync = function (t) {
                                    return (t = U(t)), N(this.root).rmdirSync(t);
                                }),
                                (C.prototype.mkdir = function (t, e, r) {
                                    void 0 === r && (r = P), "function" == typeof e && ((r = e), (e = 511));
                                    var n = L(r, 1);
                                    try {
                                        (t = U(t)), N(this.root).mkdir(t, e, n);
                                    } catch (t) {
                                        n(t);
                                    }
                                }),
                                (C.prototype.mkdirSync = function (t, e) {
                                    N(this.root).mkdirSync(U(t), A(e, 511));
                                }),
                                (C.prototype.readdir = function (t, e) {
                                    void 0 === e && (e = P);
                                    var r = L(e, 2);
                                    try {
                                        (t = U(t)), N(this.root).readdir(t, r);
                                    } catch (t) {
                                        r(t);
                                    }
                                }),
                                (C.prototype.readdirSync = function (t) {
                                    return (t = U(t)), N(this.root).readdirSync(t);
                                }),
                                (C.prototype.link = function (t, e, r) {
                                    void 0 === r && (r = P);
                                    var n = L(r, 1);
                                    try {
                                        (t = U(t)), (e = U(e)), N(this.root).link(t, e, n);
                                    } catch (t) {
                                        n(t);
                                    }
                                }),
                                (C.prototype.linkSync = function (t, e) {
                                    return (t = U(t)), (e = U(e)), N(this.root).linkSync(t, e);
                                }),
                                (C.prototype.symlink = function (t, e, r, n) {
                                    void 0 === n && (n = P);
                                    var o = "string" == typeof r ? r : "file",
                                        i = L((n = "function" == typeof r ? r : n), 1);
                                    try {
                                        if ("file" !== o && "dir" !== o) return i(new y(u.EINVAL, "Invalid type: " + o));
                                        (t = U(t)), (e = U(e)), N(this.root).symlink(t, e, o, i);
                                    } catch (t) {
                                        i(t);
                                    }
                                }),
                                (C.prototype.symlinkSync = function (t, e, r) {
                                    if (r) {
                                        if ("file" !== r && "dir" !== r) throw new y(u.EINVAL, "Invalid type: " + r);
                                    } else r = "file";
                                    return (t = U(t)), (e = U(e)), N(this.root).symlinkSync(t, e, r);
                                }),
                                (C.prototype.readlink = function (t, e) {
                                    void 0 === e && (e = P);
                                    var r = L(e, 2);
                                    try {
                                        (t = U(t)), N(this.root).readlink(t, r);
                                    } catch (t) {
                                        r(t);
                                    }
                                }),
                                (C.prototype.readlinkSync = function (t) {
                                    return (t = U(t)), N(this.root).readlinkSync(t);
                                }),
                                (C.prototype.chown = function (t, e, r, n) {
                                    void 0 === n && (n = P);
                                    var o = L(n, 1);
                                    try {
                                        (t = U(t)), N(this.root).chown(t, !1, e, r, o);
                                    } catch (t) {
                                        o(t);
                                    }
                                }),
                                (C.prototype.chownSync = function (t, e, r) {
                                    (t = U(t)), N(this.root).chownSync(t, !1, e, r);
                                }),
                                (C.prototype.lchown = function (t, e, r, n) {
                                    void 0 === n && (n = P);
                                    var o = L(n, 1);
                                    try {
                                        (t = U(t)), N(this.root).chown(t, !0, e, r, o);
                                    } catch (t) {
                                        o(t);
                                    }
                                }),
                                (C.prototype.lchownSync = function (t, e, r) {
                                    (t = U(t)), N(this.root).chownSync(t, !0, e, r);
                                }),
                                (C.prototype.chmod = function (t, e, r) {
                                    void 0 === r && (r = P);
                                    var n = L(r, 1);
                                    try {
                                        var o = A(e, -1);
                                        if (o < 0) throw new y(u.EINVAL, "Invalid mode.");
                                        N(this.root).chmod(U(t), !1, o, n);
                                    } catch (t) {
                                        n(t);
                                    }
                                }),
                                (C.prototype.chmodSync = function (t, e) {
                                    var r = A(e, -1);
                                    if (r < 0) throw new y(u.EINVAL, "Invalid mode.");
                                    (t = U(t)), N(this.root).chmodSync(t, !1, r);
                                }),
                                (C.prototype.lchmod = function (t, e, r) {
                                    void 0 === r && (r = P);
                                    var n = L(r, 1);
                                    try {
                                        var o = A(e, -1);
                                        if (o < 0) throw new y(u.EINVAL, "Invalid mode.");
                                        N(this.root).chmod(U(t), !0, o, n);
                                    } catch (t) {
                                        n(t);
                                    }
                                }),
                                (C.prototype.lchmodSync = function (t, e) {
                                    var r = A(e, -1);
                                    if (r < 1) throw new y(u.EINVAL, "Invalid mode.");
                                    N(this.root).chmodSync(U(t), !0, r);
                                }),
                                (C.prototype.utimes = function (t, e, r, n) {
                                    void 0 === n && (n = P);
                                    var o = L(n, 1);
                                    try {
                                        N(this.root).utimes(U(t), D(e), D(r), o);
                                    } catch (t) {
                                        o(t);
                                    }
                                }),
                                (C.prototype.utimesSync = function (t, e, r) {
                                    N(this.root).utimesSync(U(t), D(e), D(r));
                                }),
                                (C.prototype.realpath = function (t, e, r) {
                                    void 0 === r && (r = P);
                                    var n = L((r = "function" == typeof e ? e : P), 2);
                                    try {
                                        (t = U(t)), N(this.root).realpath(t, "object" == typeof e ? e : {}, n);
                                    } catch (t) {
                                        n(t);
                                    }
                                }),
                                (C.prototype.realpathSync = function (t, e) {
                                    return void 0 === e && (e = {}), (t = U(t)), N(this.root).realpathSync(t, e);
                                }),
                                (C.prototype.watchFile = function (t, e, r) {
                                    throw new y(u.ENOTSUP);
                                }),
                                (C.prototype.unwatchFile = function (t, e) {
                                    throw new y(u.ENOTSUP);
                                }),
                                (C.prototype.watch = function (t, e, r) {
                                    throw new y(u.ENOTSUP);
                                }),
                                (C.prototype.access = function (t, e, r) {
                                    throw new y(u.ENOTSUP);
                                }),
                                (C.prototype.accessSync = function (t, e) {
                                    throw new y(u.ENOTSUP);
                                }),
                                (C.prototype.createReadStream = function (t, e) {
                                    throw new y(u.ENOTSUP);
                                }),
                                (C.prototype.createWriteStream = function (t, e) {
                                    throw new y(u.ENOTSUP);
                                }),
                                (C.prototype.wrapCallbacks = function (t) {
                                    T = t;
                                }),
                                (C.prototype.getFdForFile = function (t) {
                                    var e = this.nextFd++;
                                    return (this.fdMap[e] = t), e;
                                }),
                                (C.prototype.fd2file = function (t) {
                                    var e = this.fdMap[t];
                                    if (e) return e;
                                    throw new y(u.EBADF, "Invalid file descriptor.");
                                }),
                                (C.prototype.closeFd = function (t) {
                                    delete this.fdMap[t];
                                }),
                                (C.Stats = E);
                            var B = new C(),
                                M = {};
                            function j() {
                                throw Error("BFS has reached an impossible code path; please file a bug.");
                            }
                            function z(t) {
                                return t instanceof Uint8Array ? t : new Uint8Array(t);
                            }
                            function Y(t) {
                                return t instanceof o ? t : t instanceof Uint8Array ? Z(t) : o.from(t);
                            }
                            function Z(t) {
                                return t instanceof o ? t : 0 === t.byteOffset && t.byteLength === t.buffer.byteLength ? H(t.buffer) : o.from(t.buffer, t.byteOffset, t.byteLength);
                            }
                            function H(t) {
                                return o.from(t);
                            }
                            function V(t, e, r) {
                                if ((void 0 === e && (e = 0), void 0 === r && (r = t.length), e < 0 || r < 0 || r > t.length || e > r)) throw TypeError("Invalid slice bounds on buffer of length " + t.length + ": [" + e + ", " + r + "]");
                                if (0 === t.length) return X();
                                var n = z(t),
                                    o = t[0],
                                    i = (o + 1) % 255;
                                return (t[0] = i), n[0] === i ? ((n[0] = o), Z(n.slice(e, r))) : ((t[0] = o), Z(n.subarray(e, r)));
                            }
                            Object.keys(C.prototype).forEach(function (t) {
                                "function" == typeof B[t]
                                    ? (M[t] = function () {
                                        return B[t].apply(B, arguments);
                                    })
                                    : (M[t] = B[t]);
                            }),
                                (M.changeFSModule = function (t) {
                                    B = t;
                                }),
                                (M.getFSModule = function () {
                                    return B;
                                }),
                                (M.FS = C),
                                (M.Stats = C.Stats);
                            var W = null;
                            function X() {
                                return W || (W = o.alloc(0));
                            }
                            function K(t, e) {
                                o.isBuffer(t) ? e() : e(new y(u.EINVAL, "option must be a Buffer."));
                            }
                            var q = Object.freeze({
                                __proto__: null,
                                arrayBuffer2Buffer: H,
                                arrayish2Buffer: Y,
                                buffer2ArrayBuffer: function (t) {
                                    var e = z(t),
                                        r = e.byteOffset,
                                        n = e.byteLength;
                                    return 0 === r && n === e.buffer.byteLength ? e.buffer : e.buffer.slice(r, r + n);
                                },
                                buffer2Uint8array: z,
                                bufferValidator: K,
                                copyingSlice: V,
                                deprecationMessage: function (t, e, r) {
                                    t &&
                                        console.warn(
                                            "[" +
                                            e +
                                            "] Direct file system constructor usage is deprecated for this file system, and will be removed in the next major version. Please use the '" +
                                            e +
                                            ".Create(" +
                                            JSON.stringify(r) +
                                            ", callback)' method instead. See https://github.com/jvilk/BrowserFS/issues/176 for more details."
                                        );
                                },
                                emptyBuffer: X,
                                fail: j,
                                mkdirpSync: function t(e, r, n) {
                                    n.existsSync(e) || (t(h.dirname(e), r, n), n.mkdirSync(e, r));
                                },
                                uint8Array2Buffer: Z,
                            }),
                                G = function () { };
                            (G.prototype.supportsLinks = function () {
                                return !1;
                            }),
                                (G.prototype.diskSpace = function (t, e) {
                                    e(0, 0);
                                }),
                                (G.prototype.openFile = function (t, e, r) {
                                    throw new y(u.ENOTSUP);
                                }),
                                (G.prototype.createFile = function (t, e, r, n) {
                                    throw new y(u.ENOTSUP);
                                }),
                                (G.prototype.open = function (t, e, r, n) {
                                    var o = this;
                                    this.stat(t, !1, function (i, a) {
                                        if (i)
                                            switch (e.pathNotExistsAction()) {
                                                case d.CREATE_FILE:
                                                    return o.stat(h.dirname(t), !1, function (i, a) {
                                                        i ? n(i) : a && !a.isDirectory() ? n(y.ENOTDIR(h.dirname(t))) : o.createFile(t, e, r, n);
                                                    });
                                                case d.THROW_EXCEPTION:
                                                    return n(y.ENOENT(t));
                                                default:
                                                    return n(new y(u.EINVAL, "Invalid FileFlag object."));
                                            }
                                        else {
                                            if (a && a.isDirectory()) return n(y.EISDIR(t));
                                            switch (e.pathExistsAction()) {
                                                case d.THROW_EXCEPTION:
                                                    return n(y.EEXIST(t));
                                                case d.TRUNCATE_FILE:
                                                    return o.openFile(t, e, function (t, e) {
                                                        t
                                                            ? n(t)
                                                            : e
                                                                ? e.truncate(0, function () {
                                                                    e.sync(function () {
                                                                        n(null, e);
                                                                    });
                                                                })
                                                                : j();
                                                    });
                                                case d.NOP:
                                                    return o.openFile(t, e, n);
                                                default:
                                                    return n(new y(u.EINVAL, "Invalid FileFlag object."));
                                            }
                                        }
                                    });
                                }),
                                (G.prototype.rename = function (t, e, r) {
                                    r(new y(u.ENOTSUP));
                                }),
                                (G.prototype.renameSync = function (t, e) {
                                    throw new y(u.ENOTSUP);
                                }),
                                (G.prototype.stat = function (t, e, r) {
                                    r(new y(u.ENOTSUP));
                                }),
                                (G.prototype.statSync = function (t, e) {
                                    throw new y(u.ENOTSUP);
                                }),
                                (G.prototype.openFileSync = function (t, e, r) {
                                    throw new y(u.ENOTSUP);
                                }),
                                (G.prototype.createFileSync = function (t, e, r) {
                                    throw new y(u.ENOTSUP);
                                }),
                                (G.prototype.openSync = function (t, e, r) {
                                    var n;
                                    try {
                                        n = this.statSync(t, !1);
                                    } catch (n) {
                                        switch (e.pathNotExistsAction()) {
                                            case d.CREATE_FILE:
                                                if (!this.statSync(h.dirname(t), !1).isDirectory()) throw y.ENOTDIR(h.dirname(t));
                                                return this.createFileSync(t, e, r);
                                            case d.THROW_EXCEPTION:
                                                throw y.ENOENT(t);
                                            default:
                                                throw new y(u.EINVAL, "Invalid FileFlag object.");
                                        }
                                    }
                                    if (n.isDirectory()) throw y.EISDIR(t);
                                    switch (e.pathExistsAction()) {
                                        case d.THROW_EXCEPTION:
                                            throw y.EEXIST(t);
                                        case d.TRUNCATE_FILE:
                                            return this.unlinkSync(t), this.createFileSync(t, e, n.mode);
                                        case d.NOP:
                                            return this.openFileSync(t, e, r);
                                        default:
                                            throw new y(u.EINVAL, "Invalid FileFlag object.");
                                    }
                                }),
                                (G.prototype.unlink = function (t, e) {
                                    e(new y(u.ENOTSUP));
                                }),
                                (G.prototype.unlinkSync = function (t) {
                                    throw new y(u.ENOTSUP);
                                }),
                                (G.prototype.rmdir = function (t, e) {
                                    e(new y(u.ENOTSUP));
                                }),
                                (G.prototype.rmdirSync = function (t) {
                                    throw new y(u.ENOTSUP);
                                }),
                                (G.prototype.mkdir = function (t, e, r) {
                                    r(new y(u.ENOTSUP));
                                }),
                                (G.prototype.mkdirSync = function (t, e) {
                                    throw new y(u.ENOTSUP);
                                }),
                                (G.prototype.readdir = function (t, e) {
                                    e(new y(u.ENOTSUP));
                                }),
                                (G.prototype.readdirSync = function (t) {
                                    throw new y(u.ENOTSUP);
                                }),
                                (G.prototype.exists = function (t, e) {
                                    this.stat(t, null, function (t) {
                                        e(!t);
                                    });
                                }),
                                (G.prototype.existsSync = function (t) {
                                    try {
                                        return this.statSync(t, !0), !0;
                                    } catch (t) {
                                        return !1;
                                    }
                                }),
                                (G.prototype.realpath = function (t, e, r) {
                                    if (this.supportsLinks())
                                        for (var n = t.split(h.sep), o = 0; o < n.length; o++) {
                                            var i = n.slice(0, o + 1);
                                            n[o] = h.join.apply(null, i);
                                        }
                                    else
                                        this.exists(t, function (e) {
                                            e ? r(null, t) : r(y.ENOENT(t));
                                        });
                                }),
                                (G.prototype.realpathSync = function (t, e) {
                                    if (this.supportsLinks()) {
                                        for (var r = t.split(h.sep), n = 0; n < r.length; n++) {
                                            var o = r.slice(0, n + 1);
                                            r[n] = h.join.apply(h, o);
                                        }
                                        return r.join(h.sep);
                                    }
                                    if (this.existsSync(t)) return t;
                                    throw y.ENOENT(t);
                                }),
                                (G.prototype.truncate = function (t, e, r) {
                                    this.open(t, w.getFileFlag("r+"), 420, function (t, n) {
                                        if (t) return r(t);
                                        n.truncate(e, function (t) {
                                            n.close(function (e) {
                                                r(t || e);
                                            });
                                        });
                                    });
                                }),
                                (G.prototype.truncateSync = function (t, e) {
                                    var r = this.openSync(t, w.getFileFlag("r+"), 420);
                                    try {
                                        r.truncateSync(e);
                                    } catch (t) {
                                        throw t;
                                    } finally {
                                        r.closeSync();
                                    }
                                }),
                                (G.prototype.readFile = function (t, e, r, n) {
                                    var i = n;
                                    this.open(t, r, 420, function (t, r) {
                                        if (t) return n(t);
                                        (n = function (t, e) {
                                            r.close(function (r) {
                                                return t || (t = r), i(t, e);
                                            });
                                        }),
                                            r.stat(function (t, i) {
                                                if (t) return n(t);
                                                var a = o.alloc(i.size);
                                                r.read(a, 0, i.size, 0, function (t) {
                                                    if (t) return n(t);
                                                    if (null === e) return n(t, a);
                                                    try {
                                                        n(null, a.toString(e));
                                                    } catch (t) {
                                                        n(t);
                                                    }
                                                });
                                            });
                                    });
                                }),
                                (G.prototype.readFileSync = function (t, e, r) {
                                    var n = this.openSync(t, r, 420);
                                    try {
                                        var i = n.statSync(),
                                            a = o.alloc(i.size);
                                        return n.readSync(a, 0, i.size, 0), n.closeSync(), null === e ? a : a.toString(e);
                                    } finally {
                                        n.closeSync();
                                    }
                                }),
                                (G.prototype.writeFile = function (t, e, r, n, i, a) {
                                    var s = a;
                                    this.open(t, n, 420, function (t, n) {
                                        if (t) return a(t);
                                        a = function (t) {
                                            n.close(function (e) {
                                                s(t || e);
                                            });
                                        };
                                        try {
                                            "string" == typeof e && (e = o.from(e, r));
                                        } catch (t) {
                                            return a(t);
                                        }
                                        n.write(e, 0, e.length, 0, a);
                                    });
                                }),
                                (G.prototype.writeFileSync = function (t, e, r, n, i) {
                                    var a = this.openSync(t, n, i);
                                    try {
                                        "string" == typeof e && (e = o.from(e, r)), a.writeSync(e, 0, e.length, 0);
                                    } finally {
                                        a.closeSync();
                                    }
                                }),
                                (G.prototype.appendFile = function (t, e, r, n, i, a) {
                                    var s = a;
                                    this.open(t, n, i, function (t, n) {
                                        if (t) return a(t);
                                        (a = function (t) {
                                            n.close(function (e) {
                                                s(t || e);
                                            });
                                        }),
                                            "string" == typeof e && (e = o.from(e, r)),
                                            n.write(e, 0, e.length, null, a);
                                    });
                                }),
                                (G.prototype.appendFileSync = function (t, e, r, n, i) {
                                    var a = this.openSync(t, n, i);
                                    try {
                                        "string" == typeof e && (e = o.from(e, r)), a.writeSync(e, 0, e.length, null);
                                    } finally {
                                        a.closeSync();
                                    }
                                }),
                                (G.prototype.chmod = function (t, e, r, n) {
                                    n(new y(u.ENOTSUP));
                                }),
                                (G.prototype.chmodSync = function (t, e, r) {
                                    throw new y(u.ENOTSUP);
                                }),
                                (G.prototype.chown = function (t, e, r, n, o) {
                                    o(new y(u.ENOTSUP));
                                }),
                                (G.prototype.chownSync = function (t, e, r, n) {
                                    throw new y(u.ENOTSUP);
                                }),
                                (G.prototype.utimes = function (t, e, r, n) {
                                    n(new y(u.ENOTSUP));
                                }),
                                (G.prototype.utimesSync = function (t, e, r) {
                                    throw new y(u.ENOTSUP);
                                }),
                                (G.prototype.link = function (t, e, r) {
                                    r(new y(u.ENOTSUP));
                                }),
                                (G.prototype.linkSync = function (t, e) {
                                    throw new y(u.ENOTSUP);
                                }),
                                (G.prototype.symlink = function (t, e, r, n) {
                                    n(new y(u.ENOTSUP));
                                }),
                                (G.prototype.symlinkSync = function (t, e, r) {
                                    throw new y(u.ENOTSUP);
                                }),
                                (G.prototype.readlink = function (t, e) {
                                    e(new y(u.ENOTSUP));
                                }),
                                (G.prototype.readlinkSync = function (t) {
                                    throw new y(u.ENOTSUP);
                                });
                            var J = (function (t) {
                                function e() {
                                    t.apply(this, arguments);
                                }
                                return (
                                    t && (e.__proto__ = t),
                                    (e.prototype = Object.create(t && t.prototype)),
                                    (e.prototype.constructor = e),
                                    (e.prototype.supportsSynch = function () {
                                        return !0;
                                    }),
                                    (e.prototype.rename = function (t, e, r) {
                                        try {
                                            this.renameSync(t, e), r();
                                        } catch (t) {
                                            r(t);
                                        }
                                    }),
                                    (e.prototype.stat = function (t, e, r) {
                                        try {
                                            r(null, this.statSync(t, e));
                                        } catch (t) {
                                            r(t);
                                        }
                                    }),
                                    (e.prototype.open = function (t, e, r, n) {
                                        try {
                                            n(null, this.openSync(t, e, r));
                                        } catch (t) {
                                            n(t);
                                        }
                                    }),
                                    (e.prototype.unlink = function (t, e) {
                                        try {
                                            this.unlinkSync(t), e();
                                        } catch (t) {
                                            e(t);
                                        }
                                    }),
                                    (e.prototype.rmdir = function (t, e) {
                                        try {
                                            this.rmdirSync(t), e();
                                        } catch (t) {
                                            e(t);
                                        }
                                    }),
                                    (e.prototype.mkdir = function (t, e, r) {
                                        try {
                                            this.mkdirSync(t, e), r();
                                        } catch (t) {
                                            r(t);
                                        }
                                    }),
                                    (e.prototype.readdir = function (t, e) {
                                        try {
                                            e(null, this.readdirSync(t));
                                        } catch (t) {
                                            e(t);
                                        }
                                    }),
                                    (e.prototype.chmod = function (t, e, r, n) {
                                        try {
                                            this.chmodSync(t, e, r), n();
                                        } catch (t) {
                                            n(t);
                                        }
                                    }),
                                    (e.prototype.chown = function (t, e, r, n, o) {
                                        try {
                                            this.chownSync(t, e, r, n), o();
                                        } catch (t) {
                                            o(t);
                                        }
                                    }),
                                    (e.prototype.utimes = function (t, e, r, n) {
                                        try {
                                            this.utimesSync(t, e, r), n();
                                        } catch (t) {
                                            n(t);
                                        }
                                    }),
                                    (e.prototype.link = function (t, e, r) {
                                        try {
                                            this.linkSync(t, e), r();
                                        } catch (t) {
                                            r(t);
                                        }
                                    }),
                                    (e.prototype.symlink = function (t, e, r, n) {
                                        try {
                                            this.symlinkSync(t, e, r), n();
                                        } catch (t) {
                                            n(t);
                                        }
                                    }),
                                    (e.prototype.readlink = function (t, e) {
                                        try {
                                            e(null, this.readlinkSync(t));
                                        } catch (t) {
                                            e(t);
                                        }
                                    }),
                                    e
                                );
                            })(G),
                                $ = function () { };
                            function Q(t, e) {
                                void 0 === e && (e = "");
                                for (var r = t.errno, n = t.node, o = []; n && (o.unshift(n.name), n !== n.parent);) n = n.parent;
                                return new y(r, p[r], o.length > 0 ? "/" + o.join("/") : e);
                            }
                            ($.prototype.sync = function (t) {
                                t(new y(u.ENOTSUP));
                            }),
                                ($.prototype.syncSync = function () {
                                    throw new y(u.ENOTSUP);
                                }),
                                ($.prototype.datasync = function (t) {
                                    this.sync(t);
                                }),
                                ($.prototype.datasyncSync = function () {
                                    return this.syncSync();
                                }),
                                ($.prototype.chown = function (t, e, r) {
                                    r(new y(u.ENOTSUP));
                                }),
                                ($.prototype.chownSync = function (t, e) {
                                    throw new y(u.ENOTSUP);
                                }),
                                ($.prototype.chmod = function (t, e) {
                                    e(new y(u.ENOTSUP));
                                }),
                                ($.prototype.chmodSync = function (t) {
                                    throw new y(u.ENOTSUP);
                                }),
                                ($.prototype.utimes = function (t, e, r) {
                                    r(new y(u.ENOTSUP));
                                }),
                                ($.prototype.utimesSync = function (t, e) {
                                    throw new y(u.ENOTSUP);
                                });
                            var tt = (function (t) {
                                function e(e, r, n, o) {
                                    t.call(this), (this._fs = e), (this._FS = r), (this._path = n), (this._stream = o);
                                }
                                return (
                                    t && (e.__proto__ = t),
                                    (e.prototype = Object.create(t && t.prototype)),
                                    (e.prototype.constructor = e),
                                    (e.prototype.getPos = function () { }),
                                    (e.prototype.close = function (t) {
                                        var e = null;
                                        try {
                                            this.closeSync();
                                        } catch (t) {
                                            e = t;
                                        } finally {
                                            t(e);
                                        }
                                    }),
                                    (e.prototype.closeSync = function () {
                                        try {
                                            this._FS.close(this._stream);
                                        } catch (t) {
                                            throw Q(t, this._path);
                                        }
                                    }),
                                    (e.prototype.stat = function (t) {
                                        try {
                                            t(null, this.statSync());
                                        } catch (e) {
                                            t(e);
                                        }
                                    }),
                                    (e.prototype.statSync = function () {
                                        try {
                                            return this._fs.statSync(this._path, !1);
                                        } catch (t) {
                                            throw Q(t, this._path);
                                        }
                                    }),
                                    (e.prototype.truncate = function (t, e) {
                                        var r = null;
                                        try {
                                            this.truncateSync(t);
                                        } catch (t) {
                                            r = t;
                                        } finally {
                                            e(r);
                                        }
                                    }),
                                    (e.prototype.truncateSync = function (t) {
                                        try {
                                            this._FS.ftruncate(this._stream.fd, t);
                                        } catch (t) {
                                            throw Q(t, this._path);
                                        }
                                    }),
                                    (e.prototype.write = function (t, e, r, n, o) {
                                        try {
                                            o(null, this.writeSync(t, e, r, n), t);
                                        } catch (t) {
                                            o(t);
                                        }
                                    }),
                                    (e.prototype.writeSync = function (t, e, r, n) {
                                        try {
                                            var o = z(t);
                                            return this._FS.write(this._stream, o, e, r, null === n ? void 0 : n);
                                        } catch (t) {
                                            throw Q(t, this._path);
                                        }
                                    }),
                                    (e.prototype.read = function (t, e, r, n, o) {
                                        try {
                                            o(null, this.readSync(t, e, r, n), t);
                                        } catch (t) {
                                            o(t);
                                        }
                                    }),
                                    (e.prototype.readSync = function (t, e, r, n) {
                                        try {
                                            var o = z(t);
                                            return this._FS.read(this._stream, o, e, r, null === n ? void 0 : n);
                                        } catch (t) {
                                            throw Q(t, this._path);
                                        }
                                    }),
                                    (e.prototype.sync = function (t) {
                                        t();
                                    }),
                                    (e.prototype.syncSync = function () { }),
                                    (e.prototype.chown = function (t, e, r) {
                                        var n = null;
                                        try {
                                            this.chownSync(t, e);
                                        } catch (t) {
                                            n = t;
                                        } finally {
                                            r(n);
                                        }
                                    }),
                                    (e.prototype.chownSync = function (t, e) {
                                        try {
                                            this._FS.fchown(this._stream.fd, t, e);
                                        } catch (t) {
                                            throw Q(t, this._path);
                                        }
                                    }),
                                    (e.prototype.chmod = function (t, e) {
                                        var r = null;
                                        try {
                                            this.chmodSync(t);
                                        } catch (t) {
                                            r = t;
                                        } finally {
                                            e(r);
                                        }
                                    }),
                                    (e.prototype.chmodSync = function (t) {
                                        try {
                                            this._FS.fchmod(this._stream.fd, t);
                                        } catch (t) {
                                            throw Q(t, this._path);
                                        }
                                    }),
                                    (e.prototype.utimes = function (t, e, r) {
                                        var n = null;
                                        try {
                                            this.utimesSync(t, e);
                                        } catch (t) {
                                            n = t;
                                        } finally {
                                            r(n);
                                        }
                                    }),
                                    (e.prototype.utimesSync = function (t, e) {
                                        this._fs.utimesSync(this._path, t, e);
                                    }),
                                    e
                                );
                            })($),
                                te = (function (t) {
                                    function e(e) {
                                        t.call(this), (this._FS = e);
                                    }
                                    return (
                                        t && (e.__proto__ = t),
                                        (e.prototype = Object.create(t && t.prototype)),
                                        (e.prototype.constructor = e),
                                        (e.Create = function (t, r) {
                                            r(null, new e(t.FS));
                                        }),
                                        (e.isAvailable = function () {
                                            return !0;
                                        }),
                                        (e.prototype.getName = function () {
                                            return this._FS.DB_NAME();
                                        }),
                                        (e.prototype.isReadOnly = function () {
                                            return !1;
                                        }),
                                        (e.prototype.supportsLinks = function () {
                                            return !0;
                                        }),
                                        (e.prototype.supportsProps = function () {
                                            return !0;
                                        }),
                                        (e.prototype.supportsSynch = function () {
                                            return !0;
                                        }),
                                        (e.prototype.renameSync = function (t, e) {
                                            try {
                                                this._FS.rename(t, e);
                                            } catch (r) {
                                                throw r.errno === u.ENOENT ? Q(r, this.existsSync(t) ? e : t) : Q(r);
                                            }
                                        }),
                                        (e.prototype.statSync = function (t, e) {
                                            try {
                                                var r = e ? this._FS.lstat(t) : this._FS.stat(t),
                                                    n = this.modeToFileType(r.mode);
                                                return new E(n, r.size, r.mode, r.atime.getTime(), r.mtime.getTime(), r.ctime.getTime());
                                            } catch (e) {
                                                throw Q(e, t);
                                            }
                                        }),
                                        (e.prototype.openSync = function (t, e, r) {
                                            try {
                                                var n = this._FS.open(t, e.getFlagString(), r);
                                                if (this._FS.isDir(n.node.mode)) throw (this._FS.close(n), y.EISDIR(t));
                                                return new tt(this, this._FS, t, n);
                                            } catch (e) {
                                                throw Q(e, t);
                                            }
                                        }),
                                        (e.prototype.unlinkSync = function (t) {
                                            try {
                                                this._FS.unlink(t);
                                            } catch (e) {
                                                throw Q(e, t);
                                            }
                                        }),
                                        (e.prototype.rmdirSync = function (t) {
                                            try {
                                                this._FS.rmdir(t);
                                            } catch (e) {
                                                throw Q(e, t);
                                            }
                                        }),
                                        (e.prototype.mkdirSync = function (t, e) {
                                            try {
                                                this._FS.mkdir(t, e);
                                            } catch (e) {
                                                throw Q(e, t);
                                            }
                                        }),
                                        (e.prototype.readdirSync = function (t) {
                                            try {
                                                return this._FS.readdir(t).filter(function (t) {
                                                    return "." !== t && ".." !== t;
                                                });
                                            } catch (e) {
                                                throw Q(e, t);
                                            }
                                        }),
                                        (e.prototype.truncateSync = function (t, e) {
                                            try {
                                                this._FS.truncate(t, e);
                                            } catch (e) {
                                                throw Q(e, t);
                                            }
                                        }),
                                        (e.prototype.readFileSync = function (t, e, r) {
                                            try {
                                                var n = Z(this._FS.readFile(t, { flags: r.getFlagString() }));
                                                return e ? n.toString(e) : n;
                                            } catch (e) {
                                                throw Q(e, t);
                                            }
                                        }),
                                        (e.prototype.writeFileSync = function (t, e, r, n, i) {
                                            try {
                                                r && (e = o.from(e, r));
                                                var a = z(e);
                                                this._FS.writeFile(t, a, { flags: n.getFlagString(), encoding: "binary" }), this._FS.chmod(t, i);
                                            } catch (e) {
                                                throw Q(e, t);
                                            }
                                        }),
                                        (e.prototype.chmodSync = function (t, e, r) {
                                            try {
                                                e ? this._FS.lchmod(t, r) : this._FS.chmod(t, r);
                                            } catch (e) {
                                                throw Q(e, t);
                                            }
                                        }),
                                        (e.prototype.chownSync = function (t, e, r, n) {
                                            try {
                                                e ? this._FS.lchown(t, r, n) : this._FS.chown(t, r, n);
                                            } catch (e) {
                                                throw Q(e, t);
                                            }
                                        }),
                                        (e.prototype.symlinkSync = function (t, e, r) {
                                            try {
                                                this._FS.symlink(t, e);
                                            } catch (t) {
                                                throw Q(t);
                                            }
                                        }),
                                        (e.prototype.readlinkSync = function (t) {
                                            try {
                                                return this._FS.readlink(t);
                                            } catch (e) {
                                                throw Q(e, t);
                                            }
                                        }),
                                        (e.prototype.utimesSync = function (t, e, r) {
                                            try {
                                                this._FS.utime(t, e.getTime(), r.getTime());
                                            } catch (e) {
                                                throw Q(e, t);
                                            }
                                        }),
                                        (e.prototype.modeToFileType = function (t) {
                                            if (this._FS.isDir(t)) return m.DIRECTORY;
                                            if (this._FS.isFile(t)) return m.FILE;
                                            if (this._FS.isLink(t)) return m.SYMLINK;
                                            throw y.EPERM("Invalid mode: " + t);
                                        }),
                                        e
                                    );
                                })(J);
                            (te.Name = "EmscriptenFileSystem"), (te.Options = { FS: { type: "object", description: "The Emscripten file system to use (the `FS` variable)" } });
                            var tr = (function (t) {
                                function e(e, r, n, o, i) {
                                    if (
                                        (t.call(this),
                                            (this._pos = 0),
                                            (this._dirty = !1),
                                            (this._fs = e),
                                            (this._path = r),
                                            (this._flag = n),
                                            (this._stat = o),
                                            (this._buffer = i || X()),
                                            this._stat.size !== this._buffer.length && this._flag.isReadable())
                                    )
                                        throw Error("Invalid buffer: Buffer is " + this._buffer.length + " long, yet Stats object specifies that file is " + this._stat.size + " long.");
                                }
                                return (
                                    t && (e.__proto__ = t),
                                    (e.prototype = Object.create(t && t.prototype)),
                                    (e.prototype.constructor = e),
                                    (e.prototype.getBuffer = function () {
                                        return this._buffer;
                                    }),
                                    (e.prototype.getStats = function () {
                                        return this._stat;
                                    }),
                                    (e.prototype.getFlag = function () {
                                        return this._flag;
                                    }),
                                    (e.prototype.getPath = function () {
                                        return this._path;
                                    }),
                                    (e.prototype.getPos = function () {
                                        return this._flag.isAppendable() ? this._stat.size : this._pos;
                                    }),
                                    (e.prototype.advancePos = function (t) {
                                        return (this._pos += t);
                                    }),
                                    (e.prototype.setPos = function (t) {
                                        return (this._pos = t);
                                    }),
                                    (e.prototype.sync = function (t) {
                                        try {
                                            this.syncSync(), t();
                                        } catch (e) {
                                            t(e);
                                        }
                                    }),
                                    (e.prototype.syncSync = function () {
                                        throw new y(u.ENOTSUP);
                                    }),
                                    (e.prototype.close = function (t) {
                                        try {
                                            this.closeSync(), t();
                                        } catch (e) {
                                            t(e);
                                        }
                                    }),
                                    (e.prototype.closeSync = function () {
                                        throw new y(u.ENOTSUP);
                                    }),
                                    (e.prototype.stat = function (t) {
                                        try {
                                            t(null, E.clone(this._stat));
                                        } catch (e) {
                                            t(e);
                                        }
                                    }),
                                    (e.prototype.statSync = function () {
                                        return E.clone(this._stat);
                                    }),
                                    (e.prototype.truncate = function (t, e) {
                                        try {
                                            this.truncateSync(t), this._flag.isSynchronous() && !M.getRootFS().supportsSynch() && this.sync(e), e();
                                        } catch (t) {
                                            return e(t);
                                        }
                                    }),
                                    (e.prototype.truncateSync = function (t) {
                                        if (((this._dirty = !0), !this._flag.isWriteable())) throw new y(u.EPERM, "File not opened with a writeable mode.");
                                        if (((this._stat.mtimeMs = Date.now()), t > this._buffer.length)) {
                                            var e = o.alloc(t - this._buffer.length, 0);
                                            return this.writeSync(e, 0, e.length, this._buffer.length), void (this._flag.isSynchronous() && M.getRootFS().supportsSynch() && this.syncSync());
                                        }
                                        this._stat.size = t;
                                        var r = o.alloc(t);
                                        this._buffer.copy(r, 0, 0, t), (this._buffer = r), this._flag.isSynchronous() && M.getRootFS().supportsSynch() && this.syncSync();
                                    }),
                                    (e.prototype.write = function (t, e, r, n, o) {
                                        try {
                                            o(null, this.writeSync(t, e, r, n), t);
                                        } catch (t) {
                                            o(t);
                                        }
                                    }),
                                    (e.prototype.writeSync = function (t, e, r, n) {
                                        if (((this._dirty = !0), null != n || (n = this.getPos()), !this._flag.isWriteable())) throw new y(u.EPERM, "File not opened with a writeable mode.");
                                        var i = n + r;
                                        if (i > this._stat.size && ((this._stat.size = i), i > this._buffer.length)) {
                                            var a = o.alloc(i);
                                            this._buffer.copy(a), (this._buffer = a);
                                        }
                                        var s = t.copy(this._buffer, n, e, e + r);
                                        return (this._stat.mtimeMs = Date.now()), this._flag.isSynchronous() ? this.syncSync() : this.setPos(n + s), s;
                                    }),
                                    (e.prototype.read = function (t, e, r, n, o) {
                                        try {
                                            o(null, this.readSync(t, e, r, n), t);
                                        } catch (t) {
                                            o(t);
                                        }
                                    }),
                                    (e.prototype.readSync = function (t, e, r, n) {
                                        if (!this._flag.isReadable()) throw new y(u.EPERM, "File not opened with a readable mode.");
                                        null != n || (n = this.getPos()), n + r > this._stat.size && (r = this._stat.size - n);
                                        var o = this._buffer.copy(t, e, n, n + r);
                                        return (this._stat.atimeMs = Date.now()), (this._pos = n + r), o;
                                    }),
                                    (e.prototype.chmod = function (t, e) {
                                        try {
                                            this.chmodSync(t), e();
                                        } catch (t) {
                                            e(t);
                                        }
                                    }),
                                    (e.prototype.chmodSync = function (t) {
                                        if (!this._fs.supportsProps()) throw new y(u.ENOTSUP);
                                        (this._dirty = !0), this._stat.chmod(t), this.syncSync();
                                    }),
                                    (e.prototype.isDirty = function () {
                                        return this._dirty;
                                    }),
                                    (e.prototype.resetDirty = function () {
                                        this._dirty = !1;
                                    }),
                                    e
                                );
                            })($),
                                tn = (function (t) {
                                    function e(e, r, n, o, i) {
                                        t.call(this, e, r, n, o, i);
                                    }
                                    return (
                                        t && (e.__proto__ = t),
                                        (e.prototype = Object.create(t && t.prototype)),
                                        (e.prototype.constructor = e),
                                        (e.prototype.sync = function (t) {
                                            t();
                                        }),
                                        (e.prototype.syncSync = function () { }),
                                        (e.prototype.close = function (t) {
                                            t();
                                        }),
                                        (e.prototype.closeSync = function () { }),
                                        e
                                    );
                                })(tr),
                                to = function (t, e) {
                                    return (
                                        void 0 === e && (e = ""),
                                        function (r) {
                                            if ("NotFoundError" === r.name) return t(y.ENOENT(e));
                                            t(r);
                                        }
                                    );
                                },
                                ti = (function (t) {
                                    function e(e, r, n, o, i) {
                                        t.call(this, e, r, n, o, i);
                                    }
                                    return (
                                        t && (e.__proto__ = t),
                                        (e.prototype = Object.create(t && t.prototype)),
                                        (e.prototype.constructor = e),
                                        (e.prototype.sync = function (t) {
                                            var e = this;
                                            this.isDirty()
                                                ? this._fs._sync(this.getPath(), this.getBuffer(), this.getStats(), function (r) {
                                                    r || e.resetDirty(), t(r);
                                                })
                                                : t();
                                        }),
                                        (e.prototype.close = function (t) {
                                            this.sync(t);
                                        }),
                                        e
                                    );
                                })(tr),
                                ta = (function (t) {
                                    function e(e) {
                                        t.call(this), (this._handles = { "/": e });
                                    }
                                    return (
                                        t && (e.__proto__ = t),
                                        (e.prototype = Object.create(t && t.prototype)),
                                        (e.prototype.constructor = e),
                                        (e.Create = function (t, r) {
                                            r(null, new e(t.handle));
                                        }),
                                        (e.isAvailable = function () {
                                            return "function" == typeof FileSystemHandle;
                                        }),
                                        (e.prototype.getName = function () {
                                            return e.Name;
                                        }),
                                        (e.prototype.isReadOnly = function () {
                                            return !1;
                                        }),
                                        (e.prototype.supportsSymlinks = function () {
                                            return !1;
                                        }),
                                        (e.prototype.supportsProps = function () {
                                            return !1;
                                        }),
                                        (e.prototype.supportsSynch = function () {
                                            return !1;
                                        }),
                                        (e.prototype._sync = function (t, e, r, n) {
                                            var o = this;
                                            this.stat(t, !1, function (i, a) {
                                                r.mtime !== a.mtime ? o.writeFile(t, e, null, w.getFileFlag("w"), a.mode, n) : n(i);
                                            });
                                        }),
                                        (e.prototype.rename = function (t, e, r) {
                                            var n = this;
                                            this.getHandle(t, function (o, i) {
                                                if (o) return r(o);
                                                i instanceof FileSystemDirectoryHandle &&
                                                    n.readdir(t, function (o, i) {
                                                        if ((void 0 === i && (i = []), o)) return r(o);
                                                        n.mkdir(e, "wx", function (o) {
                                                            if (o) return r(o);
                                                            0 === i.length
                                                                ? n.unlink(t, r)
                                                                : i.forEach(function (o) {
                                                                    return n.rename(s.join(t, o), s.join(e, o), function () {
                                                                        return n.unlink(t, r);
                                                                    });
                                                                });
                                                        });
                                                    }),
                                                    i instanceof FileSystemFileHandle &&
                                                    i
                                                        .getFile()
                                                        .then(function (o) {
                                                            return n.getHandle(s.dirname(e), function (i, a) {
                                                                if (i) return r(i);
                                                                a instanceof FileSystemDirectoryHandle &&
                                                                    a
                                                                        .getFileHandle(s.basename(e), { create: !0 })
                                                                        .then(function (i) {
                                                                            return i
                                                                                .createWritable()
                                                                                .then(function (i) {
                                                                                    return o
                                                                                        .arrayBuffer()
                                                                                        .then(function (o) {
                                                                                            return i
                                                                                                .write(o)
                                                                                                .then(function () {
                                                                                                    i.close(), n.unlink(t, r);
                                                                                                })
                                                                                                .catch(to(r, e));
                                                                                        })
                                                                                        .catch(to(r, t));
                                                                                })
                                                                                .catch(to(r, e));
                                                                        })
                                                                        .catch(to(r, e));
                                                            });
                                                        })
                                                        .catch(to(r, t));
                                            });
                                        }),
                                        (e.prototype.writeFile = function (t, e, r, n, o, i, a) {
                                            var c = this;
                                            this.getHandle(s.dirname(t), function (r, o) {
                                                if (r) return i(r);
                                                o instanceof FileSystemDirectoryHandle &&
                                                    o
                                                        .getFileHandle(s.basename(t), { create: !0 })
                                                        .then(function (r) {
                                                            return r
                                                                .createWritable()
                                                                .then(function (r) {
                                                                    return r
                                                                        .write(e)
                                                                        .then(function () {
                                                                            r.close().catch(to(i, t)), i(null, a ? c.newFile(t, n, e) : void 0);
                                                                        })
                                                                        .catch(to(i, t));
                                                                })
                                                                .catch(to(i, t));
                                                        })
                                                        .catch(to(i, t));
                                            });
                                        }),
                                        (e.prototype.createFile = function (t, e, r, n) {
                                            this.writeFile(t, X(), null, e, r, n, !0);
                                        }),
                                        (e.prototype.stat = function (t, e, r) {
                                            this.getHandle(t, function (e, n) {
                                                return e
                                                    ? r(e)
                                                    : n
                                                        ? n instanceof FileSystemDirectoryHandle
                                                            ? r(null, new E(m.DIRECTORY, 4096))
                                                            : void (
                                                                n instanceof FileSystemFileHandle &&
                                                                n
                                                                    .getFile()
                                                                    .then(function (t) {
                                                                        var e = t.lastModified,
                                                                            n = t.size;
                                                                        return r(null, new E(m.FILE, n, void 0, void 0, e));
                                                                    })
                                                                    .catch(to(r, t))
                                                            )
                                                        : r(y.FileError(u.EINVAL, t));
                                            });
                                        }),
                                        (e.prototype.exists = function (t, e) {
                                            this.getHandle(t, function (t) {
                                                return e(null === t);
                                            });
                                        }),
                                        (e.prototype.openFile = function (t, e, r) {
                                            var n = this;
                                            this.getHandle(t, function (o, i) {
                                                if (o) return r(o);
                                                i instanceof FileSystemFileHandle &&
                                                    i
                                                        .getFile()
                                                        .then(function (o) {
                                                            return o
                                                                .arrayBuffer()
                                                                .then(function (i) {
                                                                    return r(null, n.newFile(t, e, i, o.size, o.lastModified));
                                                                })
                                                                .catch(to(r, t));
                                                        })
                                                        .catch(to(r, t));
                                            });
                                        }),
                                        (e.prototype.unlink = function (t, e) {
                                            this.getHandle(s.dirname(t), function (r, n) {
                                                if (r) return e(r);
                                                n instanceof FileSystemDirectoryHandle &&
                                                    n
                                                        .removeEntry(s.basename(t), { recursive: !0 })
                                                        .then(function () {
                                                            return e(null);
                                                        })
                                                        .catch(to(e, t));
                                            });
                                        }),
                                        (e.prototype.rmdir = function (t, e) {
                                            this.unlink(t, e);
                                        }),
                                        (e.prototype.mkdir = function (t, e, r) {
                                            var n = this,
                                                o = e && e.flag && e.flag.includes("w") && !e.flag.includes("x");
                                            this.getHandle(t, function (e, i) {
                                                if (i && !o) return r(y.EEXIST(t));
                                                n.getHandle(s.dirname(t), function (e, n) {
                                                    if (e) return r(e);
                                                    n instanceof FileSystemDirectoryHandle &&
                                                        n
                                                            .getDirectoryHandle(s.basename(t), { create: !0 })
                                                            .then(function () {
                                                                return r(null);
                                                            })
                                                            .catch(to(r, t));
                                                });
                                            });
                                        }),
                                        (e.prototype.readdir = function (t, e) {
                                            this.getHandle(t, function (r, n) {
                                                var o, i, a;
                                                if (r) return e(r);
                                                n instanceof FileSystemDirectoryHandle &&
                                                    ((o = n.keys()),
                                                        (i = []),
                                                        (a = function () {
                                                            o.next()
                                                                .then(function (t) {
                                                                    var r = t.done,
                                                                        n = t.value;
                                                                    if (r) return e(null, i);
                                                                    i.push(n), a();
                                                                })
                                                                .catch(to(e, t));
                                                        })());
                                            });
                                        }),
                                        (e.prototype.newFile = function (t, e, r, n, i) {
                                            return new ti(this, t, e, new E(m.FILE, n || 0, void 0, void 0, i || new Date().getTime()), o.from(r));
                                        }),
                                        (e.prototype.getHandle = function (t, e) {
                                            var r = this;
                                            if ("/" === t) return e(null, this._handles["/"]);
                                            var n = "/",
                                                o = t.split("/").slice(1),
                                                i = function (o) {
                                                    var a = o[0],
                                                        c = o.slice(1),
                                                        f = s.join(n, a),
                                                        h = function (o) {
                                                            if (((n = f), (r._handles[n] = o), 0 === c.length)) return e(null, r._handles[t]);
                                                            i(c);
                                                        },
                                                        p = r._handles[n];
                                                    p.getDirectoryHandle(a)
                                                        .then(h)
                                                        .catch(function (t) {
                                                            "TypeMismatchError" === t.name ? p.getFileHandle(a).then(h).catch(to(e, f)) : "Name is not allowed." === t.message ? e(new y(u.ENOENT, t.message, f)) : to(e, f)(t);
                                                        });
                                                };
                                            i(o);
                                        }),
                                        e
                                    );
                                })(G);
                            function ts(t, e, r) {
                                return t.toString("ascii", e, e + r).trim();
                            }
                            function tc(t, e, r) {
                                if (1 === r) return String.fromCharCode(t[e]);
                                for (var n = Math.floor(r / 2), o = Array(n), i = 0; i < n; i++) {
                                    var a = e + (i << 1);
                                    o[i] = String.fromCharCode(t[a + 1] | (t[a] << 8));
                                }
                                return o.join("");
                            }
                            function tu(t, e) {
                                return new Date(
                                    parseInt(ts(t, e, 4), 10),
                                    parseInt(ts(t, e + 4, 2), 10),
                                    parseInt(ts(t, e + 6, 2), 10),
                                    parseInt(ts(t, e + 8, 2), 10),
                                    parseInt(ts(t, e + 10, 2), 10),
                                    parseInt(ts(t, e + 12, 2), 10),
                                    100 * parseInt(ts(t, e + 14, 2), 10)
                                );
                            }
                            function tf(t, e) {
                                return new Date(t[e], t[e + 1] - 1, t[e + 2], t[e + 3], t[e + 4], t[e + 5]);
                            }
                            function th(t, e, r, n) {
                                r -= 4;
                                for (var o = []; e < r;) {
                                    var i = (function (t, e) {
                                        var r = t.slice(e),
                                            n = new tw(r);
                                        switch (n.signatureWord()) {
                                            case 17221:
                                                return new tE(r);
                                            case 20548:
                                                return new tv(r);
                                            case 21328:
                                                return new tS(r);
                                            case 21332:
                                                return new tb(r);
                                            case 17746:
                                                return new tI(r);
                                            case 17747:
                                                return new tF(r);
                                            case 20568:
                                                return new tR(r);
                                            case 20558:
                                                return new tk(r);
                                            case 21324:
                                                return new tT(r);
                                            case 20045:
                                                return new tN(r);
                                            case 17228:
                                                return new tA(r);
                                            case 20556:
                                                return new tD(r);
                                            case 21061:
                                                return new tU(r);
                                            case 21574:
                                                return new tx(r);
                                            case 21318:
                                                return new tP(r);
                                            case 21074:
                                                return new tO(r);
                                            default:
                                                return n;
                                        }
                                    })(t, e),
                                        a = i.length();
                                    if (0 === a || ((e += a), i instanceof tb)) break;
                                    i instanceof tE ? (o = o.concat(i.getEntries(n))) : o.push(i);
                                }
                                return o;
                            }
                            (ta.Name = "FileSystemAccess"), (ta.Options = {});
                            var tp = function (t) {
                                this._data = t;
                            };
                            (tp.prototype.type = function () {
                                return this._data[0];
                            }),
                                (tp.prototype.standardIdentifier = function () {
                                    return ts(this._data, 1, 5);
                                }),
                                (tp.prototype.version = function () {
                                    return this._data[6];
                                }),
                                (tp.prototype.data = function () {
                                    return this._data.slice(7, 2048);
                                });
                            var tl = (function (t) {
                                function e(e) {
                                    t.call(this, e), (this._root = null);
                                }
                                return (
                                    t && (e.__proto__ = t),
                                    (e.prototype = Object.create(t && t.prototype)),
                                    (e.prototype.constructor = e),
                                    (e.prototype.systemIdentifier = function () {
                                        return this._getString32(8);
                                    }),
                                    (e.prototype.volumeIdentifier = function () {
                                        return this._getString32(40);
                                    }),
                                    (e.prototype.volumeSpaceSize = function () {
                                        return this._data.readUInt32LE(80);
                                    }),
                                    (e.prototype.volumeSetSize = function () {
                                        return this._data.readUInt16LE(120);
                                    }),
                                    (e.prototype.volumeSequenceNumber = function () {
                                        return this._data.readUInt16LE(124);
                                    }),
                                    (e.prototype.logicalBlockSize = function () {
                                        return this._data.readUInt16LE(128);
                                    }),
                                    (e.prototype.pathTableSize = function () {
                                        return this._data.readUInt32LE(132);
                                    }),
                                    (e.prototype.locationOfTypeLPathTable = function () {
                                        return this._data.readUInt32LE(140);
                                    }),
                                    (e.prototype.locationOfOptionalTypeLPathTable = function () {
                                        return this._data.readUInt32LE(144);
                                    }),
                                    (e.prototype.locationOfTypeMPathTable = function () {
                                        return this._data.readUInt32BE(148);
                                    }),
                                    (e.prototype.locationOfOptionalTypeMPathTable = function () {
                                        return this._data.readUInt32BE(152);
                                    }),
                                    (e.prototype.rootDirectoryEntry = function (t) {
                                        return null === this._root && ((this._root = this._constructRootDirectoryRecord(this._data.slice(156))), this._root.rootCheckForRockRidge(t)), this._root;
                                    }),
                                    (e.prototype.volumeSetIdentifier = function () {
                                        return this._getString(190, 128);
                                    }),
                                    (e.prototype.publisherIdentifier = function () {
                                        return this._getString(318, 128);
                                    }),
                                    (e.prototype.dataPreparerIdentifier = function () {
                                        return this._getString(446, 128);
                                    }),
                                    (e.prototype.applicationIdentifier = function () {
                                        return this._getString(574, 128);
                                    }),
                                    (e.prototype.copyrightFileIdentifier = function () {
                                        return this._getString(702, 38);
                                    }),
                                    (e.prototype.abstractFileIdentifier = function () {
                                        return this._getString(740, 36);
                                    }),
                                    (e.prototype.bibliographicFileIdentifier = function () {
                                        return this._getString(776, 37);
                                    }),
                                    (e.prototype.volumeCreationDate = function () {
                                        return tu(this._data, 813);
                                    }),
                                    (e.prototype.volumeModificationDate = function () {
                                        return tu(this._data, 830);
                                    }),
                                    (e.prototype.volumeExpirationDate = function () {
                                        return tu(this._data, 847);
                                    }),
                                    (e.prototype.volumeEffectiveDate = function () {
                                        return tu(this._data, 864);
                                    }),
                                    (e.prototype.fileStructureVersion = function () {
                                        return this._data[881];
                                    }),
                                    (e.prototype.applicationUsed = function () {
                                        return this._data.slice(883, 1395);
                                    }),
                                    (e.prototype.reserved = function () {
                                        return this._data.slice(1395, 2048);
                                    }),
                                    (e.prototype._getString32 = function (t) {
                                        return this._getString(t, 32);
                                    }),
                                    e
                                );
                            })(tp),
                                td = (function (t) {
                                    function e(e) {
                                        if ((t.call(this, e), 1 !== this.type())) throw new y(u.EIO, "Invalid primary volume descriptor.");
                                    }
                                    return (
                                        t && (e.__proto__ = t),
                                        (e.prototype = Object.create(t && t.prototype)),
                                        (e.prototype.constructor = e),
                                        (e.prototype.name = function () {
                                            return "ISO9660";
                                        }),
                                        (e.prototype._constructRootDirectoryRecord = function (t) {
                                            return new t_(t, -1);
                                        }),
                                        (e.prototype._getString = function (t, e) {
                                            return this._getString(t, e);
                                        }),
                                        e
                                    );
                                })(tl),
                                ty = (function (t) {
                                    function e(e) {
                                        if ((t.call(this, e), 2 !== this.type())) throw new y(u.EIO, "Invalid supplementary volume descriptor.");
                                        var r = this.escapeSequence(),
                                            n = r[2];
                                        if (37 !== r[0] || 47 !== r[1] || (64 !== n && 67 !== n && 69 !== n)) throw new y(u.EIO, "Unrecognized escape sequence for SupplementaryVolumeDescriptor: " + r.toString());
                                    }
                                    return (
                                        t && (e.__proto__ = t),
                                        (e.prototype = Object.create(t && t.prototype)),
                                        (e.prototype.constructor = e),
                                        (e.prototype.name = function () {
                                            return "Joliet";
                                        }),
                                        (e.prototype.escapeSequence = function () {
                                            return this._data.slice(88, 120);
                                        }),
                                        (e.prototype._constructRootDirectoryRecord = function (t) {
                                            return new tm(t, -1);
                                        }),
                                        (e.prototype._getString = function (t, e) {
                                            return tc(this._data, t, e);
                                        }),
                                        e
                                    );
                                })(tl),
                                tg = function (t, e) {
                                    (this._suEntries = null), (this._fileOrDir = null), (this._data = t), (this._rockRidgeOffset = e);
                                };
                            (tg.prototype.hasRockRidge = function () {
                                return this._rockRidgeOffset > -1;
                            }),
                                (tg.prototype.getRockRidgeOffset = function () {
                                    return this._rockRidgeOffset;
                                }),
                                (tg.prototype.rootCheckForRockRidge = function (t) {
                                    var e = this.getDirectory(t);
                                    (this._rockRidgeOffset = e.getDotEntry(t)._getRockRidgeOffset(t)), this._rockRidgeOffset > -1 && (this._fileOrDir = null);
                                }),
                                (tg.prototype.length = function () {
                                    return this._data[0];
                                }),
                                (tg.prototype.extendedAttributeRecordLength = function () {
                                    return this._data[1];
                                }),
                                (tg.prototype.lba = function () {
                                    return 2048 * this._data.readUInt32LE(2);
                                }),
                                (tg.prototype.dataLength = function () {
                                    return this._data.readUInt32LE(10);
                                }),
                                (tg.prototype.recordingDate = function () {
                                    return tf(this._data, 18);
                                }),
                                (tg.prototype.fileFlags = function () {
                                    return this._data[25];
                                }),
                                (tg.prototype.fileUnitSize = function () {
                                    return this._data[26];
                                }),
                                (tg.prototype.interleaveGapSize = function () {
                                    return this._data[27];
                                }),
                                (tg.prototype.volumeSequenceNumber = function () {
                                    return this._data.readUInt16LE(28);
                                }),
                                (tg.prototype.identifier = function () {
                                    return this._getString(33, this._data[32]);
                                }),
                                (tg.prototype.fileName = function (t) {
                                    if (this.hasRockRidge()) {
                                        var e = this._rockRidgeFilename(t);
                                        if (null !== e) return e;
                                    }
                                    var r = this.identifier();
                                    if (this.isDirectory(t)) return r;
                                    var n = r.indexOf(";");
                                    return -1 === n ? r : "." === r[n - 1] ? r.slice(0, n - 1) : r.slice(0, n);
                                }),
                                (tg.prototype.isDirectory = function (t) {
                                    var e = !!(2 & this.fileFlags());
                                    return (
                                        !e &&
                                        this.hasRockRidge() &&
                                        (e =
                                            this.getSUEntries(t).filter(function (t) {
                                                return t instanceof tA;
                                            }).length > 0),
                                        e
                                    );
                                }),
                                (tg.prototype.isSymlink = function (t) {
                                    return (
                                        this.hasRockRidge() &&
                                        this.getSUEntries(t).filter(function (t) {
                                            return t instanceof tT;
                                        }).length > 0
                                    );
                                }),
                                (tg.prototype.getSymlinkPath = function (t) {
                                    for (var e = "", r = this.getSUEntries(t), n = this._getGetString(), o = 0; o < r.length; o += 1) {
                                        var i = r[o];
                                        if (i instanceof tT) {
                                            for (var a = 0, s = i.componentRecords(); a < s.length; a += 1) {
                                                var c = s[a],
                                                    u = c.flags();
                                                2 & u ? (e += "./") : 4 & u ? (e += "../") : 8 & u ? (e += "/") : ((e += c.content(n)), 1 & u || (e += "/"));
                                            }
                                            if (!i.continueFlag()) break;
                                        }
                                    }
                                    return e.length > 1 && "/" === e[e.length - 1] ? e.slice(0, e.length - 1) : e;
                                }),
                                (tg.prototype.getFile = function (t) {
                                    if (this.isDirectory(t)) throw Error("Tried to get a File from a directory.");
                                    return null === this._fileOrDir && (this._fileOrDir = t.slice(this.lba(), this.lba() + this.dataLength())), this._fileOrDir;
                                }),
                                (tg.prototype.getDirectory = function (t) {
                                    if (!this.isDirectory(t)) throw Error("Tried to get a Directory from a file.");
                                    return null === this._fileOrDir && (this._fileOrDir = this._constructDirectory(t)), this._fileOrDir;
                                }),
                                (tg.prototype.getSUEntries = function (t) {
                                    return this._suEntries || this._constructSUEntries(t), this._suEntries;
                                }),
                                (tg.prototype._rockRidgeFilename = function (t) {
                                    var e = this.getSUEntries(t).filter(function (t) {
                                        return t instanceof tN;
                                    });
                                    if (0 === e.length || 6 & e[0].flags()) return null;
                                    for (var r = "", n = this._getGetString(), o = 0; o < e.length; o += 1) {
                                        var i = e[o];
                                        if (((r += i.name(n)), !(1 & i.flags()))) break;
                                    }
                                    return r;
                                }),
                                (tg.prototype._constructSUEntries = function (t) {
                                    var e = 33 + this._data[32];
                                    e % 2 == 1 && e++, (e += this._rockRidgeOffset), (this._suEntries = th(this._data, e, this.length(), t));
                                }),
                                (tg.prototype._getRockRidgeOffset = function (t) {
                                    this._rockRidgeOffset = 0;
                                    var e = this.getSUEntries(t);
                                    if (e.length > 0) {
                                        var r = e[0];
                                        if (r instanceof tS && r.checkBytesPass())
                                            for (var n = 1; n < e.length; n++) {
                                                var o = e[n];
                                                if (o instanceof tO || (o instanceof tI && "IEEE_P1282" === o.extensionIdentifier())) return r.bytesSkipped();
                                            }
                                    }
                                    return (this._rockRidgeOffset = -1), -1;
                                });
                            var t_ = (function (t) {
                                function e(e, r) {
                                    t.call(this, e, r);
                                }
                                return (
                                    t && (e.__proto__ = t),
                                    (e.prototype = Object.create(t && t.prototype)),
                                    (e.prototype.constructor = e),
                                    (e.prototype._getString = function (t, e) {
                                        return ts(this._data, t, e);
                                    }),
                                    (e.prototype._constructDirectory = function (t) {
                                        return new tB(this, t);
                                    }),
                                    (e.prototype._getGetString = function () {
                                        return ts;
                                    }),
                                    e
                                );
                            })(tg),
                                tm = (function (t) {
                                    function e(e, r) {
                                        t.call(this, e, r);
                                    }
                                    return (
                                        t && (e.__proto__ = t),
                                        (e.prototype = Object.create(t && t.prototype)),
                                        (e.prototype.constructor = e),
                                        (e.prototype._getString = function (t, e) {
                                            return tc(this._data, t, e);
                                        }),
                                        (e.prototype._constructDirectory = function (t) {
                                            return new tM(this, t);
                                        }),
                                        (e.prototype._getGetString = function () {
                                            return tc;
                                        }),
                                        e
                                    );
                                })(tg),
                                tw = function (t) {
                                    this._data = t;
                                };
                            (tw.prototype.signatureWord = function () {
                                return this._data.readUInt16BE(0);
                            }),
                                (tw.prototype.signatureWordString = function () {
                                    return ts(this._data, 0, 2);
                                }),
                                (tw.prototype.length = function () {
                                    return this._data[2];
                                }),
                                (tw.prototype.suVersion = function () {
                                    return this._data[3];
                                });
                            var tE = (function (t) {
                                function e(e) {
                                    t.call(this, e), (this._entries = null);
                                }
                                return (
                                    t && (e.__proto__ = t),
                                    (e.prototype = Object.create(t && t.prototype)),
                                    (e.prototype.constructor = e),
                                    (e.prototype.continuationLba = function () {
                                        return this._data.readUInt32LE(4);
                                    }),
                                    (e.prototype.continuationLbaOffset = function () {
                                        return this._data.readUInt32LE(12);
                                    }),
                                    (e.prototype.continuationLength = function () {
                                        return this._data.readUInt32LE(20);
                                    }),
                                    (e.prototype.getEntries = function (t) {
                                        if (!this._entries) {
                                            var e = 2048 * this.continuationLba() + this.continuationLbaOffset();
                                            this._entries = th(t, e, this.continuationLength(), t);
                                        }
                                        return this._entries;
                                    }),
                                    e
                                );
                            })(tw),
                                tv = (function (t) {
                                    function e(e) {
                                        t.call(this, e);
                                    }
                                    return t && (e.__proto__ = t), (e.prototype = Object.create(t && t.prototype)), (e.prototype.constructor = e), e;
                                })(tw),
                                tS = (function (t) {
                                    function e(e) {
                                        t.call(this, e);
                                    }
                                    return (
                                        t && (e.__proto__ = t),
                                        (e.prototype = Object.create(t && t.prototype)),
                                        (e.prototype.constructor = e),
                                        (e.prototype.checkBytesPass = function () {
                                            return 190 === this._data[4] && 239 === this._data[5];
                                        }),
                                        (e.prototype.bytesSkipped = function () {
                                            return this._data[6];
                                        }),
                                        e
                                    );
                                })(tw),
                                tb = (function (t) {
                                    function e(e) {
                                        t.call(this, e);
                                    }
                                    return t && (e.__proto__ = t), (e.prototype = Object.create(t && t.prototype)), (e.prototype.constructor = e), e;
                                })(tw),
                                tI = (function (t) {
                                    function e(e) {
                                        t.call(this, e);
                                    }
                                    return (
                                        t && (e.__proto__ = t),
                                        (e.prototype = Object.create(t && t.prototype)),
                                        (e.prototype.constructor = e),
                                        (e.prototype.identifierLength = function () {
                                            return this._data[4];
                                        }),
                                        (e.prototype.descriptorLength = function () {
                                            return this._data[5];
                                        }),
                                        (e.prototype.sourceLength = function () {
                                            return this._data[6];
                                        }),
                                        (e.prototype.extensionVersion = function () {
                                            return this._data[7];
                                        }),
                                        (e.prototype.extensionIdentifier = function () {
                                            return ts(this._data, 8, this.identifierLength());
                                        }),
                                        (e.prototype.extensionDescriptor = function () {
                                            return ts(this._data, 8 + this.identifierLength(), this.descriptorLength());
                                        }),
                                        (e.prototype.extensionSource = function () {
                                            return ts(this._data, 8 + this.identifierLength() + this.descriptorLength(), this.sourceLength());
                                        }),
                                        e
                                    );
                                })(tw),
                                tF = (function (t) {
                                    function e(e) {
                                        t.call(this, e);
                                    }
                                    return (
                                        t && (e.__proto__ = t),
                                        (e.prototype = Object.create(t && t.prototype)),
                                        (e.prototype.constructor = e),
                                        (e.prototype.extensionSequence = function () {
                                            return this._data[4];
                                        }),
                                        e
                                    );
                                })(tw),
                                tO = (function (t) {
                                    function e(e) {
                                        t.call(this, e);
                                    }
                                    return t && (e.__proto__ = t), (e.prototype = Object.create(t && t.prototype)), (e.prototype.constructor = e), e;
                                })(tw),
                                tR = (function (t) {
                                    function e(e) {
                                        t.call(this, e);
                                    }
                                    return (
                                        t && (e.__proto__ = t),
                                        (e.prototype = Object.create(t && t.prototype)),
                                        (e.prototype.constructor = e),
                                        (e.prototype.mode = function () {
                                            return this._data.readUInt32LE(4);
                                        }),
                                        (e.prototype.fileLinks = function () {
                                            return this._data.readUInt32LE(12);
                                        }),
                                        (e.prototype.uid = function () {
                                            return this._data.readUInt32LE(20);
                                        }),
                                        (e.prototype.gid = function () {
                                            return this._data.readUInt32LE(28);
                                        }),
                                        (e.prototype.inode = function () {
                                            return this._data.readUInt32LE(36);
                                        }),
                                        e
                                    );
                                })(tw),
                                tk = (function (t) {
                                    function e(e) {
                                        t.call(this, e);
                                    }
                                    return (
                                        t && (e.__proto__ = t),
                                        (e.prototype = Object.create(t && t.prototype)),
                                        (e.prototype.constructor = e),
                                        (e.prototype.devTHigh = function () {
                                            return this._data.readUInt32LE(4);
                                        }),
                                        (e.prototype.devTLow = function () {
                                            return this._data.readUInt32LE(12);
                                        }),
                                        e
                                    );
                                })(tw),
                                tT = (function (t) {
                                    function e(e) {
                                        t.call(this, e);
                                    }
                                    return (
                                        t && (e.__proto__ = t),
                                        (e.prototype = Object.create(t && t.prototype)),
                                        (e.prototype.constructor = e),
                                        (e.prototype.flags = function () {
                                            return this._data[4];
                                        }),
                                        (e.prototype.continueFlag = function () {
                                            return 1 & this.flags();
                                        }),
                                        (e.prototype.componentRecords = function () {
                                            for (var t = [], e = 5; e < this.length();) {
                                                var r = new tL(this._data.slice(e));
                                                t.push(r), (e += r.length());
                                            }
                                            return t;
                                        }),
                                        e
                                    );
                                })(tw),
                                tL = function (t) {
                                    this._data = t;
                                };
                            (tL.prototype.flags = function () {
                                return this._data[0];
                            }),
                                (tL.prototype.length = function () {
                                    return 2 + this.componentLength();
                                }),
                                (tL.prototype.componentLength = function () {
                                    return this._data[1];
                                }),
                                (tL.prototype.content = function (t) {
                                    return t(this._data, 2, this.componentLength());
                                });
                            var tN = (function (t) {
                                function e(e) {
                                    t.call(this, e);
                                }
                                return (
                                    t && (e.__proto__ = t),
                                    (e.prototype = Object.create(t && t.prototype)),
                                    (e.prototype.constructor = e),
                                    (e.prototype.flags = function () {
                                        return this._data[4];
                                    }),
                                    (e.prototype.name = function (t) {
                                        return t(this._data, 5, this.length() - 5);
                                    }),
                                    e
                                );
                            })(tw),
                                tA = (function (t) {
                                    function e(e) {
                                        t.call(this, e);
                                    }
                                    return (
                                        t && (e.__proto__ = t),
                                        (e.prototype = Object.create(t && t.prototype)),
                                        (e.prototype.constructor = e),
                                        (e.prototype.childDirectoryLba = function () {
                                            return this._data.readUInt32LE(4);
                                        }),
                                        e
                                    );
                                })(tw),
                                tD = (function (t) {
                                    function e(e) {
                                        t.call(this, e);
                                    }
                                    return (
                                        t && (e.__proto__ = t),
                                        (e.prototype = Object.create(t && t.prototype)),
                                        (e.prototype.constructor = e),
                                        (e.prototype.parentDirectoryLba = function () {
                                            return this._data.readUInt32LE(4);
                                        }),
                                        e
                                    );
                                })(tw),
                                tU = (function (t) {
                                    function e(e) {
                                        t.call(this, e);
                                    }
                                    return t && (e.__proto__ = t), (e.prototype = Object.create(t && t.prototype)), (e.prototype.constructor = e), e;
                                })(tw),
                                tx = (function (t) {
                                    function e(e) {
                                        t.call(this, e);
                                    }
                                    return (
                                        t && (e.__proto__ = t),
                                        (e.prototype = Object.create(t && t.prototype)),
                                        (e.prototype.constructor = e),
                                        (e.prototype.flags = function () {
                                            return this._data[4];
                                        }),
                                        (e.prototype.creation = function () {
                                            return 1 & this.flags() ? (this._longFormDates() ? tu(this._data, 5) : tf(this._data, 5)) : null;
                                        }),
                                        (e.prototype.modify = function () {
                                            if (2 & this.flags()) {
                                                var t = 1 & this.flags() ? 1 : 0;
                                                return this._longFormDates() ? tu(this._data, 5 + 17 * t) : tf(this._data, 5 + 7 * t);
                                            }
                                            return null;
                                        }),
                                        (e.prototype.access = function () {
                                            if (4 & this.flags()) {
                                                var t = 1 & this.flags() ? 1 : 0;
                                                return (t += 2 & this.flags() ? 1 : 0), this._longFormDates() ? tu(this._data, 5 + 17 * t) : tf(this._data, 5 + 7 * t);
                                            }
                                            return null;
                                        }),
                                        (e.prototype.backup = function () {
                                            if (16 & this.flags()) {
                                                var t = 1 & this.flags() ? 1 : 0;
                                                return (t += (2 & this.flags() ? 1 : 0) + (4 & this.flags() ? 1 : 0)), this._longFormDates() ? tu(this._data, 5 + 17 * t) : tf(this._data, 5 + 7 * t);
                                            }
                                            return null;
                                        }),
                                        (e.prototype.expiration = function () {
                                            if (32 & this.flags()) {
                                                var t = 1 & this.flags() ? 1 : 0;
                                                return (t += (2 & this.flags() ? 1 : 0) + (4 & this.flags() ? 1 : 0) + (16 & this.flags() ? 1 : 0)), this._longFormDates() ? tu(this._data, 5 + 17 * t) : tf(this._data, 5 + 7 * t);
                                            }
                                            return null;
                                        }),
                                        (e.prototype.effective = function () {
                                            if (64 & this.flags()) {
                                                var t = 1 & this.flags() ? 1 : 0;
                                                return (
                                                    (t += (2 & this.flags() ? 1 : 0) + (4 & this.flags() ? 1 : 0) + (16 & this.flags() ? 1 : 0) + (32 & this.flags() ? 1 : 0)),
                                                    this._longFormDates() ? tu(this._data, 5 + 17 * t) : tf(this._data, 5 + 7 * t)
                                                );
                                            }
                                            return null;
                                        }),
                                        (e.prototype._longFormDates = function () {
                                            return !!this.flags();
                                        }),
                                        e
                                    );
                                })(tw),
                                tP = (function (t) {
                                    function e(e) {
                                        t.call(this, e);
                                    }
                                    return (
                                        t && (e.__proto__ = t),
                                        (e.prototype = Object.create(t && t.prototype)),
                                        (e.prototype.constructor = e),
                                        (e.prototype.virtualSizeHigh = function () {
                                            return this._data.readUInt32LE(4);
                                        }),
                                        (e.prototype.virtualSizeLow = function () {
                                            return this._data.readUInt32LE(12);
                                        }),
                                        (e.prototype.tableDepth = function () {
                                            return this._data[20];
                                        }),
                                        e
                                    );
                                })(tw),
                                tC = function (t, e) {
                                    (this._fileList = []), (this._fileMap = {}), (this._record = t);
                                    var r = t.lba(),
                                        n = r + t.dataLength();
                                    for (
                                        2 & t.fileFlags() ||
                                        ((r =
                                            2048 *
                                            t
                                                .getSUEntries(e)
                                                .filter(function (t) {
                                                    return t instanceof tA;
                                                })[0]
                                                .childDirectoryLba()),
                                            (n = 1 / 0));
                                        r < n;

                                    )
                                        if (0 !== e[r]) {
                                            var o = this._constructDirectoryRecord(e.slice(r)),
                                                i = o.fileName(e);
                                            "\0" !== i && "\x01" !== i
                                                ? (o.hasRockRidge() &&
                                                    0 !==
                                                    o.getSUEntries(e).filter(function (t) {
                                                        return t instanceof tU;
                                                    }).length) ||
                                                ((this._fileMap[i] = o), this._fileList.push(i))
                                                : n === 1 / 0 && (n = r + o.dataLength()),
                                                (r += o.length());
                                        } else r++;
                                };
                            (tC.prototype.getRecord = function (t) {
                                return this._fileMap[t];
                            }),
                                (tC.prototype.getFileList = function () {
                                    return this._fileList;
                                }),
                                (tC.prototype.getDotEntry = function (t) {
                                    return this._constructDirectoryRecord(t.slice(this._record.lba()));
                                });
                            var tB = (function (t) {
                                function e(e, r) {
                                    t.call(this, e, r);
                                }
                                return (
                                    t && (e.__proto__ = t),
                                    (e.prototype = Object.create(t && t.prototype)),
                                    (e.prototype.constructor = e),
                                    (e.prototype._constructDirectoryRecord = function (t) {
                                        return new t_(t, this._record.getRockRidgeOffset());
                                    }),
                                    e
                                );
                            })(tC),
                                tM = (function (t) {
                                    function e(e, r) {
                                        t.call(this, e, r);
                                    }
                                    return (
                                        t && (e.__proto__ = t),
                                        (e.prototype = Object.create(t && t.prototype)),
                                        (e.prototype.constructor = e),
                                        (e.prototype._constructDirectoryRecord = function (t) {
                                            return new tm(t, this._record.getRockRidgeOffset());
                                        }),
                                        e
                                    );
                                })(tC),
                                tj = (function (t) {
                                    function e(e, r) {
                                        var n = this;
                                        void 0 === r && (r = ""), t.call(this), (this._data = e);
                                        for (var o = !1, i = 32768, a = []; !o;) {
                                            var s = e.slice(i);
                                            switch (new tp(s).type()) {
                                                case 1:
                                                    a.push(new td(s));
                                                    break;
                                                case 2:
                                                    a.push(new ty(s));
                                                    break;
                                                case 255:
                                                    o = !0;
                                            }
                                            i += 2048;
                                        }
                                        if (0 === a.length) throw new y(u.EIO, "Unable to find a suitable volume descriptor.");
                                        a.forEach(function (t) {
                                            (n._pvd && 2 === n._pvd.type()) || (n._pvd = t);
                                        }),
                                            (this._root = this._pvd.rootDirectoryEntry(e)),
                                            (this._name = r);
                                    }
                                    return (
                                        t && (e.__proto__ = t),
                                        (e.prototype = Object.create(t && t.prototype)),
                                        (e.prototype.constructor = e),
                                        (e.Create = function (t, r) {
                                            try {
                                                r(null, new e(t.data, t.name));
                                            } catch (t) {
                                                r(t);
                                            }
                                        }),
                                        (e.isAvailable = function () {
                                            return !0;
                                        }),
                                        (e.prototype.getName = function () {
                                            var t = "IsoFS" + this._name + (this._pvd ? "-" + this._pvd.name() : "");
                                            return this._root && this._root.hasRockRidge() && (t += "-RockRidge"), t;
                                        }),
                                        (e.prototype.diskSpace = function (t, e) {
                                            e(this._data.length, 0);
                                        }),
                                        (e.prototype.isReadOnly = function () {
                                            return !0;
                                        }),
                                        (e.prototype.supportsLinks = function () {
                                            return !1;
                                        }),
                                        (e.prototype.supportsProps = function () {
                                            return !1;
                                        }),
                                        (e.prototype.supportsSynch = function () {
                                            return !0;
                                        }),
                                        (e.prototype.statSync = function (t, e) {
                                            var r = this._getDirectoryRecord(t);
                                            if (null === r) throw y.ENOENT(t);
                                            return this._getStats(t, r);
                                        }),
                                        (e.prototype.openSync = function (t, e, r) {
                                            if (e.isWriteable()) throw new y(u.EPERM, t);
                                            var n = this._getDirectoryRecord(t);
                                            if (!n) throw y.ENOENT(t);
                                            if (n.isSymlink(this._data)) return this.openSync(h.resolve(t, n.getSymlinkPath(this._data)), e, r);
                                            if (n.isDirectory(this._data)) throw y.EISDIR(t);
                                            var o = n.getFile(this._data),
                                                i = this._getStats(t, n);
                                            switch (e.pathExistsAction()) {
                                                case d.THROW_EXCEPTION:
                                                case d.TRUNCATE_FILE:
                                                    throw y.EEXIST(t);
                                                case d.NOP:
                                                    return new tn(this, t, e, i, o);
                                                default:
                                                    throw new y(u.EINVAL, "Invalid FileMode object.");
                                            }
                                        }),
                                        (e.prototype.readdirSync = function (t) {
                                            var e = this._getDirectoryRecord(t);
                                            if (e) {
                                                if (e.isDirectory(this._data)) return e.getDirectory(this._data).getFileList().slice(0);
                                                throw y.ENOTDIR(t);
                                            }
                                            throw y.ENOENT(t);
                                        }),
                                        (e.prototype.readFileSync = function (t, e, r) {
                                            var n = this.openSync(t, r, 420);
                                            try {
                                                var o = n.getBuffer();
                                                return null === e ? V(o) : o.toString(e);
                                            } finally {
                                                n.closeSync();
                                            }
                                        }),
                                        (e.prototype._getDirectoryRecord = function (t) {
                                            if ("/" === t) return this._root;
                                            for (var e = t.split("/").slice(1), r = this._root, n = 0; n < e.length; n += 1) {
                                                var o = e[n];
                                                if (!r.isDirectory(this._data) || !(r = r.getDirectory(this._data).getRecord(o))) return null;
                                            }
                                            return r;
                                        }),
                                        (e.prototype._getStats = function (t, e) {
                                            if (e.isSymlink(this._data)) {
                                                var r = h.resolve(t, e.getSymlinkPath(this._data)),
                                                    n = this._getDirectoryRecord(r);
                                                return n ? this._getStats(r, n) : null;
                                            }
                                            var o = e.dataLength(),
                                                i = 365,
                                                a = e.recordingDate().getTime(),
                                                s = a,
                                                c = a,
                                                u = a;
                                            if (e.hasRockRidge())
                                                for (var f = 0, p = e.getSUEntries(this._data); f < p.length; f += 1) {
                                                    var l = p[f];
                                                    if (l instanceof tR) i = l.mode();
                                                    else if (l instanceof tx) {
                                                        var d = l.flags();
                                                        4 & d && (s = l.access().getTime()), 2 & d && (c = l.modify().getTime()), 1 & d && (u = l.creation().getTime());
                                                    }
                                                }
                                            return (i &= 365), new E(e.isDirectory(this._data) ? m.DIRECTORY : m.FILE, o, i, s, c, u);
                                        }),
                                        e
                                    );
                                })(J);
                            (tj.Name = "IsoFS"), (tj.Options = { data: { type: "object", description: "The ISO file in a buffer", validator: K } });
                            var tz = function () { };
                            (tz.str2byte = function (t, e) {
                                for (var r = t.length > e.length ? e.length : t.length, n = 0; n < r; n++) {
                                    var o = t.charCodeAt(n);
                                    if (o > 127) {
                                        var i = tz.extendedChars.indexOf(t.charAt(n));
                                        i > -1 && (o = i + 128);
                                    }
                                    e[o] = n;
                                }
                                return r;
                            }),
                                (tz.byte2str = function (t) {
                                    for (var e = Array(t.length), r = 0; r < t.length; r++) {
                                        var n = t[r];
                                        e[r] = n > 127 ? tz.extendedChars[n - 128] : String.fromCharCode(n);
                                    }
                                    return e.join("");
                                }),
                                (tz.byteLength = function (t) {
                                    return t.length;
                                }),
                                (tz.extendedChars = [
                                    "\xc7",
                                    "\xfc",
                                    "\xe9",
                                    "\xe2",
                                    "\xe4",
                                    "\xe0",
                                    "\xe5",
                                    "\xe7",
                                    "\xea",
                                    "\xeb",
                                    "\xe8",
                                    "\xef",
                                    "\xee",
                                    "\xec",
                                    "\xc4",
                                    "\xc5",
                                    "\xc9",
                                    "\xe6",
                                    "\xc6",
                                    "\xf4",
                                    "\xf6",
                                    "\xf2",
                                    "\xfb",
                                    "\xf9",
                                    "\xff",
                                    "\xd6",
                                    "\xdc",
                                    "\xf8",
                                    "\xa3",
                                    "\xd8",
                                    "\xd7",
                                    "ƒ",
                                    "\xe1",
                                    "\xed",
                                    "\xf3",
                                    "\xfa",
                                    "\xf1",
                                    "\xd1",
                                    "\xaa",
                                    "\xba",
                                    "\xbf",
                                    "\xae",
                                    "\xac",
                                    "\xbd",
                                    "\xbc",
                                    "\xa1",
                                    "\xab",
                                    "\xbb",
                                    "_",
                                    "_",
                                    "_",
                                    "\xa6",
                                    "\xa6",
                                    "\xc1",
                                    "\xc2",
                                    "\xc0",
                                    "\xa9",
                                    "\xa6",
                                    "\xa6",
                                    "+",
                                    "+",
                                    "\xa2",
                                    "\xa5",
                                    "+",
                                    "+",
                                    "-",
                                    "-",
                                    "+",
                                    "-",
                                    "+",
                                    "\xe3",
                                    "\xc3",
                                    "+",
                                    "+",
                                    "-",
                                    "-",
                                    "\xa6",
                                    "-",
                                    "+",
                                    "\xa4",
                                    "\xf0",
                                    "\xd0",
                                    "\xca",
                                    "\xcb",
                                    "\xc8",
                                    "i",
                                    "\xcd",
                                    "\xce",
                                    "\xcf",
                                    "+",
                                    "+",
                                    "_",
                                    "_",
                                    "\xa6",
                                    "\xcc",
                                    "_",
                                    "\xd3",
                                    "\xdf",
                                    "\xd4",
                                    "\xd2",
                                    "\xf5",
                                    "\xd5",
                                    "\xb5",
                                    "\xfe",
                                    "\xde",
                                    "\xda",
                                    "\xdb",
                                    "\xd9",
                                    "\xfd",
                                    "\xdd",
                                    "\xaf",
                                    "\xb4",
                                    "\xad",
                                    "\xb1",
                                    "_",
                                    "\xbe",
                                    "\xb6",
                                    "\xa7",
                                    "\xf7",
                                    "\xb8",
                                    "\xb0",
                                    "\xa8",
                                    "\xb7",
                                    "\xb9",
                                    "\xb3",
                                    "\xb2",
                                    "_",
                                    " ",
                                ]);
                            var tY = function () {
                                (this._index = {}), this.addPath("/", new tH());
                            };
                            (tY.fromListing = function (t) {
                                var e = new tY(),
                                    r = new tH();
                                e._index["/"] = r;
                                for (var n = [["", t, r]]; n.length > 0;) {
                                    var o = void 0,
                                        i = n.pop(),
                                        a = i[0],
                                        s = i[1],
                                        c = i[2];
                                    for (var u in s)
                                        if (s.hasOwnProperty(u)) {
                                            var f = s[u],
                                                h = a + "/" + u;
                                            f ? ((e._index[h] = o = new tH()), n.push([h, f, o])) : (o = new tZ(new E(m.FILE, -1, 365))), c && (c._ls[u] = o);
                                        }
                                }
                                return e;
                            }),
                                (tY.prototype.fileIterator = function (t) {
                                    for (var e in this._index)
                                        if (this._index.hasOwnProperty(e))
                                            for (var r = this._index[e], n = 0, o = r.getListing(); n < o.length; n += 1) {
                                                var i = o[n],
                                                    a = r.getItem(i);
                                                tV(a) && t(a.getData());
                                            }
                                }),
                                (tY.prototype.addPath = function (t, e) {
                                    if (!e) throw Error("Inode must be specified");
                                    if ("/" !== t[0]) throw Error("Path must be absolute, got: " + t);
                                    if (this._index.hasOwnProperty(t)) return this._index[t] === e;
                                    var r = this._split_path(t),
                                        n = r[0],
                                        o = r[1],
                                        i = this._index[n];
                                    return !(void 0 === i && "/" !== t && ((i = new tH()), !this.addPath(n, i))) && !("/" !== t && !i.addItem(o, e)) && (tW(e) && (this._index[t] = e), !0);
                                }),
                                (tY.prototype.addPathFast = function (t, e) {
                                    var r = t.lastIndexOf("/"),
                                        n = 0 === r ? "/" : t.substring(0, r),
                                        o = t.substring(r + 1),
                                        i = this._index[n];
                                    return void 0 === i && ((i = new tH()), this.addPathFast(n, i)), !!i.addItem(o, e) && (e.isDir() && (this._index[t] = e), !0);
                                }),
                                (tY.prototype.removePath = function (t) {
                                    var e = this._split_path(t),
                                        r = e[0],
                                        n = e[1],
                                        o = this._index[r];
                                    if (void 0 === o) return null;
                                    var i = o.remItem(n);
                                    if (null === i) return null;
                                    if (tW(i)) {
                                        for (var a = 0, s = i.getListing(); a < s.length; a += 1) {
                                            var c = s[a];
                                            this.removePath(t + "/" + c);
                                        }
                                        "/" !== t && delete this._index[t];
                                    }
                                    return i;
                                }),
                                (tY.prototype.ls = function (t) {
                                    var e = this._index[t];
                                    return void 0 === e ? null : e.getListing();
                                }),
                                (tY.prototype.getInode = function (t) {
                                    var e = this._split_path(t),
                                        r = e[0],
                                        n = e[1],
                                        o = this._index[r];
                                    return void 0 === o ? null : r === t ? o : o.getItem(n);
                                }),
                                (tY.prototype._split_path = function (t) {
                                    var e = h.dirname(t);
                                    return [e, t.substr(e.length + ("/" === e ? 0 : 1))];
                                });
                            var tZ = function (t) {
                                this.data = t;
                            };
                            (tZ.prototype.isFile = function () {
                                return !0;
                            }),
                                (tZ.prototype.isDir = function () {
                                    return !1;
                                }),
                                (tZ.prototype.getData = function () {
                                    return this.data;
                                }),
                                (tZ.prototype.setData = function (t) {
                                    this.data = t;
                                });
                            var tH = function (t) {
                                void 0 === t && (t = null), (this.data = t), (this._ls = {});
                            };
                            function tV(t) {
                                return !!t && t.isFile();
                            }
                            function tW(t) {
                                return !!t && t.isDir();
                            }
                            (tH.prototype.isFile = function () {
                                return !1;
                            }),
                                (tH.prototype.isDir = function () {
                                    return !0;
                                }),
                                (tH.prototype.getData = function () {
                                    return this.data;
                                }),
                                (tH.prototype.getStats = function () {
                                    return new E(m.DIRECTORY, 4096, 365);
                                }),
                                (tH.prototype.getListing = function () {
                                    return Object.keys(this._ls);
                                }),
                                (tH.prototype.getItem = function (t) {
                                    return this._ls[t] || null;
                                }),
                                (tH.prototype.addItem = function (t, e) {
                                    return !(t in this._ls) && ((this._ls[t] = e), !0);
                                }),
                                (tH.prototype.remItem = function (t) {
                                    var e = this._ls[t];
                                    return void 0 === e ? null : (delete this._ls[t], e);
                                });
                            var tX,
                                tK = r(8).inflateRaw,
                                tq = {};
                            function tG(t, e) {
                                return new Date(1980 + (e >> 9), ((e >> 5) & 15) - 1, 31 & e, t >> 11, (t >> 5) & 63, 31 & t);
                            }
                            function tJ(t, e, r, n) {
                                return 0 === n ? "" : e ? t.toString("utf8", r, r + n) : tz.byte2str(t.slice(r, r + n));
                            }
                            ((n = tX || (tX = {}))[(n.STORED = 0)] = "STORED"),
                                (n[(n.SHRUNK = 1)] = "SHRUNK"),
                                (n[(n.REDUCED_1 = 2)] = "REDUCED_1"),
                                (n[(n.REDUCED_2 = 3)] = "REDUCED_2"),
                                (n[(n.REDUCED_3 = 4)] = "REDUCED_3"),
                                (n[(n.REDUCED_4 = 5)] = "REDUCED_4"),
                                (n[(n.IMPLODE = 6)] = "IMPLODE"),
                                (n[(n.DEFLATE = 8)] = "DEFLATE"),
                                (n[(n.DEFLATE64 = 9)] = "DEFLATE64"),
                                (n[(n.TERSE_OLD = 10)] = "TERSE_OLD"),
                                (n[(n.BZIP2 = 12)] = "BZIP2"),
                                (n[(n.LZMA = 14)] = "LZMA"),
                                (n[(n.TERSE_NEW = 18)] = "TERSE_NEW"),
                                (n[(n.LZ77 = 19)] = "LZ77"),
                                (n[(n.WAVPACK = 97)] = "WAVPACK"),
                                (n[(n.PPMD = 98)] = "PPMD");
                            var t$ = function (t) {
                                if (((this.data = t), 67324752 !== t.readUInt32LE(0))) throw new y(u.EINVAL, "Invalid Zip file: Local file header has invalid signature: " + this.data.readUInt32LE(0));
                            };
                            (t$.prototype.versionNeeded = function () {
                                return this.data.readUInt16LE(4);
                            }),
                                (t$.prototype.flags = function () {
                                    return this.data.readUInt16LE(6);
                                }),
                                (t$.prototype.compressionMethod = function () {
                                    return this.data.readUInt16LE(8);
                                }),
                                (t$.prototype.lastModFileTime = function () {
                                    return tG(this.data.readUInt16LE(10), this.data.readUInt16LE(12));
                                }),
                                (t$.prototype.rawLastModFileTime = function () {
                                    return this.data.readUInt32LE(10);
                                }),
                                (t$.prototype.crc32 = function () {
                                    return this.data.readUInt32LE(14);
                                }),
                                (t$.prototype.fileNameLength = function () {
                                    return this.data.readUInt16LE(26);
                                }),
                                (t$.prototype.extraFieldLength = function () {
                                    return this.data.readUInt16LE(28);
                                }),
                                (t$.prototype.fileName = function () {
                                    return tJ(this.data, this.useUTF8(), 30, this.fileNameLength());
                                }),
                                (t$.prototype.extraField = function () {
                                    var t = 30 + this.fileNameLength();
                                    return this.data.slice(t, t + this.extraFieldLength());
                                }),
                                (t$.prototype.totalSize = function () {
                                    return 30 + this.fileNameLength() + this.extraFieldLength();
                                }),
                                (t$.prototype.useUTF8 = function () {
                                    return 2048 == (2048 & this.flags());
                                });
                            var tQ = function (t, e, r) {
                                (this.header = t), (this.record = e), (this.data = r);
                            };
                            (tQ.prototype.decompress = function () {
                                var t = this.header.compressionMethod(),
                                    e = tq[t];
                                if (e) return e(this.data, this.record.compressedSize(), this.record.uncompressedSize(), this.record.flag());
                                var r = tX[t];
                                throw (r || (r = "Unknown: " + t), new y(u.EINVAL, "Invalid compression method on file '" + this.header.fileName() + "': " + r));
                            }),
                                (tQ.prototype.getHeader = function () {
                                    return this.header;
                                }),
                                (tQ.prototype.getRecord = function () {
                                    return this.record;
                                }),
                                (tQ.prototype.getRawData = function () {
                                    return this.data;
                                });
                            var t1 = function (t, e) {
                                if (((this.zipData = t), (this.data = e), 33639248 !== this.data.readUInt32LE(0))) throw new y(u.EINVAL, "Invalid Zip file: Central directory record has invalid signature: " + this.data.readUInt32LE(0));
                                this._filename = this.produceFilename();
                            };
                            (t1.prototype.versionMadeBy = function () {
                                return this.data.readUInt16LE(4);
                            }),
                                (t1.prototype.versionNeeded = function () {
                                    return this.data.readUInt16LE(6);
                                }),
                                (t1.prototype.flag = function () {
                                    return this.data.readUInt16LE(8);
                                }),
                                (t1.prototype.compressionMethod = function () {
                                    return this.data.readUInt16LE(10);
                                }),
                                (t1.prototype.lastModFileTime = function () {
                                    return tG(this.data.readUInt16LE(12), this.data.readUInt16LE(14));
                                }),
                                (t1.prototype.rawLastModFileTime = function () {
                                    return this.data.readUInt32LE(12);
                                }),
                                (t1.prototype.crc32 = function () {
                                    return this.data.readUInt32LE(16);
                                }),
                                (t1.prototype.compressedSize = function () {
                                    return this.data.readUInt32LE(20);
                                }),
                                (t1.prototype.uncompressedSize = function () {
                                    return this.data.readUInt32LE(24);
                                }),
                                (t1.prototype.fileNameLength = function () {
                                    return this.data.readUInt16LE(28);
                                }),
                                (t1.prototype.extraFieldLength = function () {
                                    return this.data.readUInt16LE(30);
                                }),
                                (t1.prototype.fileCommentLength = function () {
                                    return this.data.readUInt16LE(32);
                                }),
                                (t1.prototype.diskNumberStart = function () {
                                    return this.data.readUInt16LE(34);
                                }),
                                (t1.prototype.internalAttributes = function () {
                                    return this.data.readUInt16LE(36);
                                }),
                                (t1.prototype.externalAttributes = function () {
                                    return this.data.readUInt32LE(38);
                                }),
                                (t1.prototype.headerRelativeOffset = function () {
                                    return this.data.readUInt32LE(42);
                                }),
                                (t1.prototype.produceFilename = function () {
                                    return tJ(this.data, this.useUTF8(), 46, this.fileNameLength()).replace(/\\/g, "/");
                                }),
                                (t1.prototype.fileName = function () {
                                    return this._filename;
                                }),
                                (t1.prototype.rawFileName = function () {
                                    return this.data.slice(46, 46 + this.fileNameLength());
                                }),
                                (t1.prototype.extraField = function () {
                                    var t = 44 + this.fileNameLength();
                                    return this.data.slice(t, t + this.extraFieldLength());
                                }),
                                (t1.prototype.fileComment = function () {
                                    var t = 46 + this.fileNameLength() + this.extraFieldLength();
                                    return tJ(this.data, this.useUTF8(), t, this.fileCommentLength());
                                }),
                                (t1.prototype.rawFileComment = function () {
                                    var t = 46 + this.fileNameLength() + this.extraFieldLength();
                                    return this.data.slice(t, t + this.fileCommentLength());
                                }),
                                (t1.prototype.totalSize = function () {
                                    return 46 + this.fileNameLength() + this.extraFieldLength() + this.fileCommentLength();
                                }),
                                (t1.prototype.isDirectory = function () {
                                    var t = this.fileName();
                                    return !!(16 & this.externalAttributes()) || "/" === t.charAt(t.length - 1);
                                }),
                                (t1.prototype.isFile = function () {
                                    return !this.isDirectory();
                                }),
                                (t1.prototype.useUTF8 = function () {
                                    return 2048 == (2048 & this.flag());
                                }),
                                (t1.prototype.isEncrypted = function () {
                                    return 1 == (1 & this.flag());
                                }),
                                (t1.prototype.getFileData = function () {
                                    var t = this.headerRelativeOffset(),
                                        e = new t$(this.zipData.slice(t));
                                    return new tQ(e, this, this.zipData.slice(t + e.totalSize()));
                                }),
                                (t1.prototype.getData = function () {
                                    return this.getFileData().decompress();
                                }),
                                (t1.prototype.getRawData = function () {
                                    return this.getFileData().getRawData();
                                }),
                                (t1.prototype.getStats = function () {
                                    return new E(m.FILE, this.uncompressedSize(), 365, Date.now(), this.lastModFileTime().getTime());
                                });
                            var t0 = function (t) {
                                if (((this.data = t), 101010256 !== this.data.readUInt32LE(0))) throw new y(u.EINVAL, "Invalid Zip file: End of central directory record has invalid signature: " + this.data.readUInt32LE(0));
                            };
                            (t0.prototype.diskNumber = function () {
                                return this.data.readUInt16LE(4);
                            }),
                                (t0.prototype.cdDiskNumber = function () {
                                    return this.data.readUInt16LE(6);
                                }),
                                (t0.prototype.cdDiskEntryCount = function () {
                                    return this.data.readUInt16LE(8);
                                }),
                                (t0.prototype.cdTotalEntryCount = function () {
                                    return this.data.readUInt16LE(10);
                                }),
                                (t0.prototype.cdSize = function () {
                                    return this.data.readUInt32LE(12);
                                }),
                                (t0.prototype.cdOffset = function () {
                                    return this.data.readUInt32LE(16);
                                }),
                                (t0.prototype.cdZipCommentLength = function () {
                                    return this.data.readUInt16LE(20);
                                }),
                                (t0.prototype.cdZipComment = function () {
                                    return tJ(this.data, !0, 22, this.cdZipCommentLength());
                                }),
                                (t0.prototype.rawCdZipComment = function () {
                                    return this.data.slice(22, 22 + this.cdZipCommentLength());
                                });
                            var t2 = (function (t) {
                                function e(e, r) {
                                    void 0 === r && (r = ""),
                                        t.call(this),
                                        (this.name = r),
                                        (this._index = new tY()),
                                        (this._directoryEntries = []),
                                        (this._eocd = null),
                                        (this._index = e.index),
                                        (this._directoryEntries = e.directoryEntries),
                                        (this._eocd = e.eocd),
                                        (this.data = e.data);
                                }
                                return (
                                    t && (e.__proto__ = t),
                                    (e.prototype = Object.create(t && t.prototype)),
                                    (e.prototype.constructor = e),
                                    (e.Create = function (t, r) {
                                        try {
                                            e._computeIndex(t.zipData, function (n, o) {
                                                if (o) {
                                                    var i = new e(o, t.name);
                                                    r(null, i);
                                                } else r(n);
                                            });
                                        } catch (t) {
                                            r(t);
                                        }
                                    }),
                                    (e.isAvailable = function () {
                                        return !0;
                                    }),
                                    (e.RegisterDecompressionMethod = function (t, e) {
                                        tq[t] = e;
                                    }),
                                    (e._getEOCD = function (t) {
                                        for (var e = Math.min(65557, t.length - 1), r = 22; r < e; r++) if (101010256 === t.readUInt32LE(t.length - r)) return new t0(t.slice(t.length - r));
                                        throw new y(u.EINVAL, "Invalid ZIP file: Could not locate End of Central Directory signature.");
                                    }),
                                    (e._addToIndex = function (t, e) {
                                        var r = t.fileName();
                                        if ("/" === r.charAt(0)) throw new y(u.EPERM, "Unexpectedly encountered an absolute path in a zip file. Please file a bug.");
                                        "/" === r.charAt(r.length - 1) && (r = r.substr(0, r.length - 1)), t.isDirectory() ? e.addPathFast("/" + r, new tH(t)) : e.addPathFast("/" + r, new tZ(t));
                                    }),
                                    (e._computeIndex = function (t, r) {
                                        try {
                                            var n = new tY(),
                                                o = e._getEOCD(t);
                                            if (o.diskNumber() !== o.cdDiskNumber()) return r(new y(u.EINVAL, "ZipFS does not support spanned zip files."));
                                            var i = o.cdOffset();
                                            if (4294967295 === i) return r(new y(u.EINVAL, "ZipFS does not support Zip64."));
                                            var a = i + o.cdSize();
                                            e._computeIndexResponsive(t, n, i, a, r, [], o);
                                        } catch (t) {
                                            r(t);
                                        }
                                    }),
                                    (e._computeIndexResponsiveTrampoline = function (t, r, n, o, i, a, s) {
                                        try {
                                            e._computeIndexResponsive(t, r, n, o, i, a, s);
                                        } catch (t) {
                                            i(t);
                                        }
                                    }),
                                    (e._computeIndexResponsive = function (t, r, n, o, i, a, s) {
                                        if (n < o) {
                                            for (var c = 0; c++ < 200 && n < o;) {
                                                var u = new t1(t, t.slice(n));
                                                e._addToIndex(u, r), (n += u.totalSize()), a.push(u);
                                            }
                                            k(function () {
                                                e._computeIndexResponsiveTrampoline(t, r, n, o, i, a, s);
                                            });
                                        } else
                                            i(
                                                null,
                                                new (function (t, e, r, n) {
                                                    (this.index = t), (this.directoryEntries = e), (this.eocd = r), (this.data = n);
                                                })(r, a, s, t)
                                            );
                                    }),
                                    (e.prototype.getName = function () {
                                        return e.Name + ("" !== this.name ? " " + this.name : "");
                                    }),
                                    (e.prototype.getCentralDirectoryEntry = function (t) {
                                        var e = this._index.getInode(t);
                                        if (null === e) throw y.ENOENT(t);
                                        if (tV(e) || tW(e)) return e.getData();
                                        throw y.EPERM("Invalid inode: " + e);
                                    }),
                                    (e.prototype.getCentralDirectoryEntryAt = function (t) {
                                        var e = this._directoryEntries[t];
                                        if (!e) throw RangeError("Invalid directory index: " + t + ".");
                                        return e;
                                    }),
                                    (e.prototype.getNumberOfCentralDirectoryEntries = function () {
                                        return this._directoryEntries.length;
                                    }),
                                    (e.prototype.getEndOfCentralDirectory = function () {
                                        return this._eocd;
                                    }),
                                    (e.prototype.diskSpace = function (t, e) {
                                        e(this.data.length, 0);
                                    }),
                                    (e.prototype.isReadOnly = function () {
                                        return !0;
                                    }),
                                    (e.prototype.supportsLinks = function () {
                                        return !1;
                                    }),
                                    (e.prototype.supportsProps = function () {
                                        return !1;
                                    }),
                                    (e.prototype.supportsSynch = function () {
                                        return !0;
                                    }),
                                    (e.prototype.statSync = function (t, e) {
                                        var r,
                                            n = this._index.getInode(t);
                                        if (null === n) throw y.ENOENT(t);
                                        if (tV(n)) r = n.getData().getStats();
                                        else {
                                            if (!tW(n)) throw new y(u.EINVAL, "Invalid inode.");
                                            r = n.getStats();
                                        }
                                        return r;
                                    }),
                                    (e.prototype.openSync = function (t, e, r) {
                                        if (e.isWriteable()) throw new y(u.EPERM, t);
                                        var n = this._index.getInode(t);
                                        if (!n) throw y.ENOENT(t);
                                        if (!tV(n)) throw y.EISDIR(t);
                                        var o = n.getData(),
                                            i = o.getStats();
                                        switch (e.pathExistsAction()) {
                                            case d.THROW_EXCEPTION:
                                            case d.TRUNCATE_FILE:
                                                throw y.EEXIST(t);
                                            case d.NOP:
                                                return new tn(this, t, e, i, o.getData());
                                            default:
                                                throw new y(u.EINVAL, "Invalid FileMode object.");
                                        }
                                    }),
                                    (e.prototype.readdirSync = function (t) {
                                        var e = this._index.getInode(t);
                                        if (e) {
                                            if (tW(e)) return e.getListing();
                                            throw y.ENOTDIR(t);
                                        }
                                        throw y.ENOENT(t);
                                    }),
                                    (e.prototype.readFileSync = function (t, e, r) {
                                        var n = this.openSync(t, r, 420);
                                        try {
                                            var o = n.getBuffer();
                                            return null === e ? V(o) : o.toString(e);
                                        } finally {
                                            n.closeSync();
                                        }
                                    }),
                                    e
                                );
                            })(J);
                            (t2.Name = "ZipFS"),
                                (t2.Options = { zipData: { type: "object", description: "The zip file as a Buffer object.", validator: K }, name: { type: "string", optional: !0, description: "The name of the zip file (optional)." } }),
                                (t2.CompressionMethod = tX),
                                t2.RegisterDecompressionMethod(tX.DEFLATE, function (t, e, r) {
                                    return Y(tK(t.slice(0, e), { chunkSize: r }));
                                }),
                                t2.RegisterDecompressionMethod(tX.STORED, function (t, e, r) {
                                    return V(t, 0, r);
                                });
                            var t6 = { Emscripten: te, FileSystemAccess: ta, IsoFS: tj, ZipFS: t2 };
                            function t5(t) {
                                switch (t) {
                                    case "fs":
                                        return M;
                                    case "path":
                                        return h;
                                    case "buffer":
                                        return f;
                                    case "process":
                                        return i;
                                    case "bfs_utils":
                                        return q;
                                    default:
                                        return t6[t];
                                }
                            }
                            function t8(t) {
                                return M.initialize(t);
                            }
                            function t3(t, e) {
                                var r = t.fs;
                                if (!r) return e(new y(u.EPERM, 'Missing "fs" property on configuration object.'));
                                var n = t.options,
                                    o = 0,
                                    i = !1;
                                function a() {
                                    if (!i) {
                                        i = !0;
                                        var t = t6[r];
                                        t ? t.Create(n, e) : e(new y(u.EPERM, "File system " + r + " is not available in BrowserFS."));
                                    }
                                }
                                if (null !== n && "object" == typeof n) {
                                    var s = !1;
                                    Object.keys(n)
                                        .filter(function (t) {
                                            return "fs" !== t;
                                        })
                                        .forEach(function (t) {
                                            var r = n[t];
                                            null !== r &&
                                                "object" == typeof r &&
                                                r.fs &&
                                                (o++,
                                                    t3(r, function (r, c) {
                                                        (o--, r) ? i || ((i = !0), e(r)) : ((n[t] = c), 0 === o && s && a());
                                                    }));
                                        }),
                                        (s = !0);
                                }
                                0 === o && a();
                            }
                            i.initializeTTYs && i.initializeTTYs(),
                                (e.BFSRequire = t5),
                                (e.Errors = g),
                                (e.FileSystem = t6),
                                (e.configure = function (t, e) {
                                    t3(t, function (t, r) {
                                        r ? (t8(r), e()) : e(t);
                                    });
                                }),
                                (e.getFileSystem = t3),
                                (e.initialize = t8),
                                (e.install = function (t) {
                                    (t.Buffer = o), (t.process = i);
                                    var e = t.require ? t.require : null;
                                    t.require = function (t) {
                                        return t5(t) || e.apply(null, Array.prototype.slice.call(arguments, 0));
                                    };
                                }),
                                (e.registerFileSystem = function (t, e) {
                                    t6[t] = e;
                                });
                        }.call(this, r(1)));
                    },
                    function (t, e, r) {
                        (function (t) {
                            /*!
                             * The buffer module from node.js, for the browser.
                             *
                             * @author   Feross Aboukhadijeh <http://feross.org>
                             * @license  MIT
                             */ var n = r(4),
                                o = r(5),
                                i = r(6);
                            function a() {
                                return c.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
                            }
                            function s(t, e) {
                                if (a() < e) throw RangeError("Invalid typed array length");
                                return c.TYPED_ARRAY_SUPPORT ? ((t = new Uint8Array(e)).__proto__ = c.prototype) : (null === t && (t = new c(e)), (t.length = e)), t;
                            }
                            function c(t, e, r) {
                                if (!(c.TYPED_ARRAY_SUPPORT || this instanceof c)) return new c(t, e, r);
                                if ("number" == typeof t) {
                                    if ("string" == typeof e) throw Error("If encoding is specified then the first argument must be a string");
                                    return h(this, t);
                                }
                                return u(this, t, e, r);
                            }
                            function u(t, e, r, n) {
                                if ("number" == typeof e) throw TypeError('"value" argument must not be a number');
                                return "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer
                                    ? (function (t, e, r, n) {
                                        if ((e.byteLength, r < 0 || e.byteLength < r)) throw RangeError("'offset' is out of bounds");
                                        if (e.byteLength < r + (n || 0)) throw RangeError("'length' is out of bounds");
                                        return (
                                            (e = void 0 === r && void 0 === n ? new Uint8Array(e) : void 0 === n ? new Uint8Array(e, r) : new Uint8Array(e, r, n)),
                                            c.TYPED_ARRAY_SUPPORT ? ((t = e).__proto__ = c.prototype) : (t = p(t, e)),
                                            t
                                        );
                                    })(t, e, r, n)
                                    : "string" == typeof e
                                        ? (function (t, e, r) {
                                            if ((("string" == typeof r && "" !== r) || (r = "utf8"), !c.isEncoding(r))) throw TypeError('"encoding" must be a valid string encoding');
                                            var n = 0 | d(e, r),
                                                o = (t = s(t, n)).write(e, r);
                                            return o !== n && (t = t.slice(0, o)), t;
                                        })(t, e, r)
                                        : (function (t, e) {
                                            if (c.isBuffer(e)) {
                                                var r,
                                                    n = 0 | l(e.length);
                                                return 0 === (t = s(t, n)).length || e.copy(t, 0, 0, n), t;
                                            }
                                            if (e) {
                                                if (("undefined" != typeof ArrayBuffer && e.buffer instanceof ArrayBuffer) || "length" in e) return "number" != typeof e.length || (r = e.length) != r ? s(t, 0) : p(t, e);
                                                if ("Buffer" === e.type && i(e.data)) return p(t, e.data);
                                            }
                                            throw TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
                                        })(t, e);
                            }
                            function f(t) {
                                if ("number" != typeof t) throw TypeError('"size" argument must be a number');
                                if (t < 0) throw RangeError('"size" argument must not be negative');
                            }
                            function h(t, e) {
                                if ((f(e), (t = s(t, e < 0 ? 0 : 0 | l(e))), !c.TYPED_ARRAY_SUPPORT)) for (var r = 0; r < e; ++r) t[r] = 0;
                                return t;
                            }
                            function p(t, e) {
                                var r = e.length < 0 ? 0 : 0 | l(e.length);
                                t = s(t, r);
                                for (var n = 0; n < r; n += 1) t[n] = 255 & e[n];
                                return t;
                            }
                            function l(t) {
                                if (t >= a()) throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + a().toString(16) + " bytes");
                                return 0 | t;
                            }
                            function d(t, e) {
                                if (c.isBuffer(t)) return t.length;
                                if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)) return t.byteLength;
                                "string" != typeof t && (t = "" + t);
                                var r = t.length;
                                if (0 === r) return 0;
                                for (var n = !1; ;)
                                    switch (e) {
                                        case "ascii":
                                        case "latin1":
                                        case "binary":
                                            return r;
                                        case "utf8":
                                        case "utf-8":
                                        case void 0:
                                            return k(t).length;
                                        case "ucs2":
                                        case "ucs-2":
                                        case "utf16le":
                                        case "utf-16le":
                                            return 2 * r;
                                        case "hex":
                                            return r >>> 1;
                                        case "base64":
                                            return T(t).length;
                                        default:
                                            if (n) return k(t).length;
                                            (e = ("" + e).toLowerCase()), (n = !0);
                                    }
                            }
                            function y(t, e, r) {
                                var n = t[e];
                                (t[e] = t[r]), (t[r] = n);
                            }
                            function g(t, e, r, n, o) {
                                if (0 === t.length) return -1;
                                if (
                                    ("string" == typeof r ? ((n = r), (r = 0)) : r > 2147483647 ? (r = 2147483647) : r < -2147483648 && (r = -2147483648),
                                        isNaN((r = +r)) && (r = o ? 0 : t.length - 1),
                                        r < 0 && (r = t.length + r),
                                        r >= t.length)
                                ) {
                                    if (o) return -1;
                                    r = t.length - 1;
                                } else if (r < 0) {
                                    if (!o) return -1;
                                    r = 0;
                                }
                                if (("string" == typeof e && (e = c.from(e, n)), c.isBuffer(e))) return 0 === e.length ? -1 : _(t, e, r, n, o);
                                if ("number" == typeof e)
                                    return (
                                        (e &= 255),
                                        c.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? (o ? Uint8Array.prototype.indexOf.call(t, e, r) : Uint8Array.prototype.lastIndexOf.call(t, e, r)) : _(t, [e], r, n, o)
                                    );
                                throw TypeError("val must be string, number or Buffer");
                            }
                            function _(t, e, r, n, o) {
                                var i,
                                    a = 1,
                                    s = t.length,
                                    c = e.length;
                                if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
                                    if (t.length < 2 || e.length < 2) return -1;
                                    (a = 2), (s /= 2), (c /= 2), (r /= 2);
                                }
                                function u(t, e) {
                                    return 1 === a ? t[e] : t.readUInt16BE(e * a);
                                }
                                if (o) {
                                    var f = -1;
                                    for (i = r; i < s; i++)
                                        if (u(t, i) === u(e, -1 === f ? 0 : i - f)) {
                                            if ((-1 === f && (f = i), i - f + 1 === c)) return f * a;
                                        } else -1 !== f && (i -= i - f), (f = -1);
                                } else
                                    for (r + c > s && (r = s - c), i = r; i >= 0; i--) {
                                        for (var h = !0, p = 0; p < c; p++)
                                            if (u(t, i + p) !== u(e, p)) {
                                                h = !1;
                                                break;
                                            }
                                        if (h) return i;
                                    }
                                return -1;
                            }
                            function m(t, e, r) {
                                r = Math.min(t.length, r);
                                for (var n = [], o = e; o < r;) {
                                    var i,
                                        a,
                                        s,
                                        c,
                                        u = t[o],
                                        f = null,
                                        h = u > 239 ? 4 : u > 223 ? 3 : u > 191 ? 2 : 1;
                                    if (o + h <= r)
                                        switch (h) {
                                            case 1:
                                                u < 128 && (f = u);
                                                break;
                                            case 2:
                                                128 == (192 & (i = t[o + 1])) && (c = ((31 & u) << 6) | (63 & i)) > 127 && (f = c);
                                                break;
                                            case 3:
                                                (i = t[o + 1]), (a = t[o + 2]), 128 == (192 & i) && 128 == (192 & a) && (c = ((15 & u) << 12) | ((63 & i) << 6) | (63 & a)) > 2047 && (c < 55296 || c > 57343) && (f = c);
                                                break;
                                            case 4:
                                                (i = t[o + 1]),
                                                    (a = t[o + 2]),
                                                    (s = t[o + 3]),
                                                    128 == (192 & i) && 128 == (192 & a) && 128 == (192 & s) && (c = ((15 & u) << 18) | ((63 & i) << 12) | ((63 & a) << 6) | (63 & s)) > 65535 && c < 1114112 && (f = c);
                                        }
                                    null === f ? ((f = 65533), (h = 1)) : f > 65535 && ((f -= 65536), n.push(((f >>> 10) & 1023) | 55296), (f = 56320 | (1023 & f))), n.push(f), (o += h);
                                }
                                return (function (t) {
                                    var e = t.length;
                                    if (e <= w) return String.fromCharCode.apply(String, t);
                                    for (var r = "", n = 0; n < e;) r += String.fromCharCode.apply(String, t.slice(n, (n += w)));
                                    return r;
                                })(n);
                            }
                            (e.Buffer = c),
                                (e.SlowBuffer = function (t) {
                                    return +t != t && (t = 0), c.alloc(+t);
                                }),
                                (e.INSPECT_MAX_BYTES = 50),
                                (c.TYPED_ARRAY_SUPPORT =
                                    void 0 !== t.TYPED_ARRAY_SUPPORT
                                        ? t.TYPED_ARRAY_SUPPORT
                                        : (function () {
                                            try {
                                                var t = new Uint8Array(1);
                                                return (
                                                    (t.__proto__ = {
                                                        __proto__: Uint8Array.prototype,
                                                        foo: function () {
                                                            return 42;
                                                        },
                                                    }),
                                                    42 === t.foo() && "function" == typeof t.subarray && 0 === t.subarray(1, 1).byteLength
                                                );
                                            } catch (t) {
                                                return !1;
                                            }
                                        })()),
                                (e.kMaxLength = a()),
                                (c.poolSize = 8192),
                                (c._augment = function (t) {
                                    return (t.__proto__ = c.prototype), t;
                                }),
                                (c.from = function (t, e, r) {
                                    return u(null, t, e, r);
                                }),
                                c.TYPED_ARRAY_SUPPORT &&
                                ((c.prototype.__proto__ = Uint8Array.prototype),
                                    (c.__proto__ = Uint8Array),
                                    "undefined" != typeof Symbol && Symbol.species && c[Symbol.species] === c && Object.defineProperty(c, Symbol.species, { value: null, configurable: !0 })),
                                (c.alloc = function (t, e, r) {
                                    return f(t), t <= 0 ? s(null, t) : void 0 !== e ? ("string" == typeof r ? s(null, t).fill(e, r) : s(null, t).fill(e)) : s(null, t);
                                }),
                                (c.allocUnsafe = function (t) {
                                    return h(null, t);
                                }),
                                (c.allocUnsafeSlow = function (t) {
                                    return h(null, t);
                                }),
                                (c.isBuffer = function (t) {
                                    return !(null == t || !t._isBuffer);
                                }),
                                (c.compare = function (t, e) {
                                    if (!c.isBuffer(t) || !c.isBuffer(e)) throw TypeError("Arguments must be Buffers");
                                    if (t === e) return 0;
                                    for (var r = t.length, n = e.length, o = 0, i = Math.min(r, n); o < i; ++o)
                                        if (t[o] !== e[o]) {
                                            (r = t[o]), (n = e[o]);
                                            break;
                                        }
                                    return r < n ? -1 : n < r ? 1 : 0;
                                }),
                                (c.isEncoding = function (t) {
                                    switch (String(t).toLowerCase()) {
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
                                (c.concat = function (t, e) {
                                    if (!i(t)) throw TypeError('"list" argument must be an Array of Buffers');
                                    if (0 === t.length) return c.alloc(0);
                                    if (void 0 === e) for (e = 0, r = 0; r < t.length; ++r) e += t[r].length;
                                    var r,
                                        n = c.allocUnsafe(e),
                                        o = 0;
                                    for (r = 0; r < t.length; ++r) {
                                        var a = t[r];
                                        if (!c.isBuffer(a)) throw TypeError('"list" argument must be an Array of Buffers');
                                        a.copy(n, o), (o += a.length);
                                    }
                                    return n;
                                }),
                                (c.byteLength = d),
                                (c.prototype._isBuffer = !0),
                                (c.prototype.swap16 = function () {
                                    var t = this.length;
                                    if (t % 2 != 0) throw RangeError("Buffer size must be a multiple of 16-bits");
                                    for (var e = 0; e < t; e += 2) y(this, e, e + 1);
                                    return this;
                                }),
                                (c.prototype.swap32 = function () {
                                    var t = this.length;
                                    if (t % 4 != 0) throw RangeError("Buffer size must be a multiple of 32-bits");
                                    for (var e = 0; e < t; e += 4) y(this, e, e + 3), y(this, e + 1, e + 2);
                                    return this;
                                }),
                                (c.prototype.swap64 = function () {
                                    var t = this.length;
                                    if (t % 8 != 0) throw RangeError("Buffer size must be a multiple of 64-bits");
                                    for (var e = 0; e < t; e += 8) y(this, e, e + 7), y(this, e + 1, e + 6), y(this, e + 2, e + 5), y(this, e + 3, e + 4);
                                    return this;
                                }),
                                (c.prototype.toString = function () {
                                    var t = 0 | this.length;
                                    return 0 === t
                                        ? ""
                                        : 0 == arguments.length
                                            ? m(this, 0, t)
                                            : function (t, e, r) {
                                                var o,
                                                    i,
                                                    a = !1;
                                                if (((void 0 === e || e < 0) && (e = 0), e > this.length || ((void 0 === r || r > this.length) && (r = this.length), r <= 0) || (r >>>= 0) <= (e >>>= 0))) return "";
                                                for (t || (t = "utf8"); ;)
                                                    switch (t) {
                                                        case "hex":
                                                            return (function (t, e, r) {
                                                                var n,
                                                                    o = t.length;
                                                                (!e || e < 0) && (e = 0), (!r || r < 0 || r > o) && (r = o);
                                                                for (var i = "", a = e; a < r; ++a) i += (n = t[a]) < 16 ? "0" + n.toString(16) : n.toString(16);
                                                                return i;
                                                            })(this, e, r);
                                                        case "utf8":
                                                        case "utf-8":
                                                            return m(this, e, r);
                                                        case "ascii":
                                                            return (function (t, e, r) {
                                                                var n = "";
                                                                r = Math.min(t.length, r);
                                                                for (var o = e; o < r; ++o) n += String.fromCharCode(127 & t[o]);
                                                                return n;
                                                            })(this, e, r);
                                                        case "latin1":
                                                        case "binary":
                                                            return (function (t, e, r) {
                                                                var n = "";
                                                                r = Math.min(t.length, r);
                                                                for (var o = e; o < r; ++o) n += String.fromCharCode(t[o]);
                                                                return n;
                                                            })(this, e, r);
                                                        case "base64":
                                                            return (o = e), (i = r), 0 === o && i === this.length ? n.fromByteArray(this) : n.fromByteArray(this.slice(o, i));
                                                        case "ucs2":
                                                        case "ucs-2":
                                                        case "utf16le":
                                                        case "utf-16le":
                                                            return (function (t, e, r) {
                                                                for (var n = t.slice(e, r), o = "", i = 0; i < n.length; i += 2) o += String.fromCharCode(n[i] + 256 * n[i + 1]);
                                                                return o;
                                                            })(this, e, r);
                                                        default:
                                                            if (a) throw TypeError("Unknown encoding: " + t);
                                                            (t = (t + "").toLowerCase()), (a = !0);
                                                    }
                                            }.apply(this, arguments);
                                }),
                                (c.prototype.equals = function (t) {
                                    if (!c.isBuffer(t)) throw TypeError("Argument must be a Buffer");
                                    return this === t || 0 === c.compare(this, t);
                                }),
                                (c.prototype.inspect = function () {
                                    var t = "",
                                        r = e.INSPECT_MAX_BYTES;
                                    return this.length > 0 && ((t = this.toString("hex", 0, r).match(/.{2}/g).join(" ")), this.length > r && (t += " ... ")), "<Buffer " + t + ">";
                                }),
                                (c.prototype.compare = function (t, e, r, n, o) {
                                    if (!c.isBuffer(t)) throw TypeError("Argument must be a Buffer");
                                    if ((void 0 === e && (e = 0), void 0 === r && (r = t ? t.length : 0), void 0 === n && (n = 0), void 0 === o && (o = this.length), e < 0 || r > t.length || n < 0 || o > this.length))
                                        throw RangeError("out of range index");
                                    if (n >= o && e >= r) return 0;
                                    if (n >= o) return -1;
                                    if (e >= r) return 1;
                                    if (((e >>>= 0), (r >>>= 0), (n >>>= 0), (o >>>= 0), this === t)) return 0;
                                    for (var i = o - n, a = r - e, s = Math.min(i, a), u = this.slice(n, o), f = t.slice(e, r), h = 0; h < s; ++h)
                                        if (u[h] !== f[h]) {
                                            (i = u[h]), (a = f[h]);
                                            break;
                                        }
                                    return i < a ? -1 : a < i ? 1 : 0;
                                }),
                                (c.prototype.includes = function (t, e, r) {
                                    return -1 !== this.indexOf(t, e, r);
                                }),
                                (c.prototype.indexOf = function (t, e, r) {
                                    return g(this, t, e, r, !0);
                                }),
                                (c.prototype.lastIndexOf = function (t, e, r) {
                                    return g(this, t, e, r, !1);
                                }),
                                (c.prototype.write = function (t, e, r, n) {
                                    if (void 0 === e) (n = "utf8"), (r = this.length), (e = 0);
                                    else if (void 0 === r && "string" == typeof e) (n = e), (r = this.length), (e = 0);
                                    else {
                                        if (!isFinite(e)) throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                                        (e |= 0), isFinite(r) ? ((r |= 0), void 0 === n && (n = "utf8")) : ((n = r), (r = void 0));
                                    }
                                    var o,
                                        i,
                                        a,
                                        s,
                                        c,
                                        u,
                                        f,
                                        h,
                                        p,
                                        l,
                                        d = this.length - e;
                                    if (((void 0 === r || r > d) && (r = d), (t.length > 0 && (r < 0 || e < 0)) || e > this.length)) throw RangeError("Attempt to write outside buffer bounds");
                                    n || (n = "utf8");
                                    for (var y = !1; ;)
                                        switch (n) {
                                            case "hex":
                                                return (function (t, e, r, n) {
                                                    r = Number(r) || 0;
                                                    var o = t.length - r;
                                                    n ? (n = Number(n)) > o && (n = o) : (n = o);
                                                    var i = e.length;
                                                    if (i % 2 != 0) throw TypeError("Invalid hex string");
                                                    n > i / 2 && (n = i / 2);
                                                    for (var a = 0; a < n; ++a) {
                                                        var s = parseInt(e.substr(2 * a, 2), 16);
                                                        if (isNaN(s)) break;
                                                        t[r + a] = s;
                                                    }
                                                    return a;
                                                })(this, t, e, r);
                                            case "utf8":
                                            case "utf-8":
                                                return (c = e), (u = r), L(k(t, this.length - c), this, c, u);
                                            case "ascii":
                                            case "latin1":
                                            case "binary":
                                                return (
                                                    (o = this),
                                                    (i = t),
                                                    (a = e),
                                                    (s = r),
                                                    L(
                                                        (function (t) {
                                                            for (var e = [], r = 0; r < t.length; ++r) e.push(255 & t.charCodeAt(r));
                                                            return e;
                                                        })(i),
                                                        o,
                                                        a,
                                                        s
                                                    )
                                                );
                                            case "base64":
                                                return (f = e), (h = r), L(T(t), this, f, h);
                                            case "ucs2":
                                            case "ucs-2":
                                            case "utf16le":
                                            case "utf-16le":
                                                return (
                                                    (p = e),
                                                    (l = r),
                                                    L(
                                                        (function (t, e) {
                                                            for (var r, n, o = [], i = 0; i < t.length && !((e -= 2) < 0); ++i) (n = (r = t.charCodeAt(i)) >> 8), o.push(r % 256), o.push(n);
                                                            return o;
                                                        })(t, this.length - p),
                                                        this,
                                                        p,
                                                        l
                                                    )
                                                );
                                            default:
                                                if (y) throw TypeError("Unknown encoding: " + n);
                                                (n = ("" + n).toLowerCase()), (y = !0);
                                        }
                                }),
                                (c.prototype.toJSON = function () {
                                    return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
                                });
                            var w = 4096;
                            function E(t, e, r) {
                                if (t % 1 != 0 || t < 0) throw RangeError("offset is not uint");
                                if (t + e > r) throw RangeError("Trying to access beyond buffer length");
                            }
                            function v(t, e, r, n, o, i) {
                                if (!c.isBuffer(t)) throw TypeError('"buffer" argument must be a Buffer instance');
                                if (e > o || e < i) throw RangeError('"value" argument is out of bounds');
                                if (r + n > t.length) throw RangeError("Index out of range");
                            }
                            function S(t, e, r, n) {
                                e < 0 && (e = 65535 + e + 1);
                                for (var o = 0, i = Math.min(t.length - r, 2); o < i; ++o) t[r + o] = (e & (255 << (8 * (n ? o : 1 - o)))) >>> (8 * (n ? o : 1 - o));
                            }
                            function b(t, e, r, n) {
                                e < 0 && (e = 4294967295 + e + 1);
                                for (var o = 0, i = Math.min(t.length - r, 4); o < i; ++o) t[r + o] = (e >>> (8 * (n ? o : 3 - o))) & 255;
                            }
                            function I(t, e, r, n, o, i) {
                                if (r + n > t.length || r < 0) throw RangeError("Index out of range");
                            }
                            function F(t, e, r, n, i) {
                                return i || I(t, 0, r, 4), o.write(t, e, r, n, 23, 4), r + 4;
                            }
                            function O(t, e, r, n, i) {
                                return i || I(t, 0, r, 8), o.write(t, e, r, n, 52, 8), r + 8;
                            }
                            (c.prototype.slice = function (t, e) {
                                var r,
                                    n = this.length;
                                if (((t = ~~t), (e = void 0 === e ? n : ~~e), t < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n), e < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n), e < t && (e = t), c.TYPED_ARRAY_SUPPORT))
                                    (r = this.subarray(t, e)).__proto__ = c.prototype;
                                else {
                                    var o = e - t;
                                    r = new c(o, void 0);
                                    for (var i = 0; i < o; ++i) r[i] = this[i + t];
                                }
                                return r;
                            }),
                                (c.prototype.readUIntLE = function (t, e, r) {
                                    (t |= 0), (e |= 0), r || E(t, e, this.length);
                                    for (var n = this[t], o = 1, i = 0; ++i < e && (o *= 256);) n += this[t + i] * o;
                                    return n;
                                }),
                                (c.prototype.readUIntBE = function (t, e, r) {
                                    (t |= 0), (e |= 0), r || E(t, e, this.length);
                                    for (var n = this[t + --e], o = 1; e > 0 && (o *= 256);) n += this[t + --e] * o;
                                    return n;
                                }),
                                (c.prototype.readUInt8 = function (t, e) {
                                    return e || E(t, 1, this.length), this[t];
                                }),
                                (c.prototype.readUInt16LE = function (t, e) {
                                    return e || E(t, 2, this.length), this[t] | (this[t + 1] << 8);
                                }),
                                (c.prototype.readUInt16BE = function (t, e) {
                                    return e || E(t, 2, this.length), (this[t] << 8) | this[t + 1];
                                }),
                                (c.prototype.readUInt32LE = function (t, e) {
                                    return e || E(t, 4, this.length), (this[t] | (this[t + 1] << 8) | (this[t + 2] << 16)) + 16777216 * this[t + 3];
                                }),
                                (c.prototype.readUInt32BE = function (t, e) {
                                    return e || E(t, 4, this.length), 16777216 * this[t] + ((this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3]);
                                }),
                                (c.prototype.readIntLE = function (t, e, r) {
                                    (t |= 0), (e |= 0), r || E(t, e, this.length);
                                    for (var n = this[t], o = 1, i = 0; ++i < e && (o *= 256);) n += this[t + i] * o;
                                    return n >= (o *= 128) && (n -= Math.pow(2, 8 * e)), n;
                                }),
                                (c.prototype.readIntBE = function (t, e, r) {
                                    (t |= 0), (e |= 0), r || E(t, e, this.length);
                                    for (var n = e, o = 1, i = this[t + --n]; n > 0 && (o *= 256);) i += this[t + --n] * o;
                                    return i >= (o *= 128) && (i -= Math.pow(2, 8 * e)), i;
                                }),
                                (c.prototype.readInt8 = function (t, e) {
                                    return e || E(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t];
                                }),
                                (c.prototype.readInt16LE = function (t, e) {
                                    e || E(t, 2, this.length);
                                    var r = this[t] | (this[t + 1] << 8);
                                    return 32768 & r ? 4294901760 | r : r;
                                }),
                                (c.prototype.readInt16BE = function (t, e) {
                                    e || E(t, 2, this.length);
                                    var r = this[t + 1] | (this[t] << 8);
                                    return 32768 & r ? 4294901760 | r : r;
                                }),
                                (c.prototype.readInt32LE = function (t, e) {
                                    return e || E(t, 4, this.length), this[t] | (this[t + 1] << 8) | (this[t + 2] << 16) | (this[t + 3] << 24);
                                }),
                                (c.prototype.readInt32BE = function (t, e) {
                                    return e || E(t, 4, this.length), (this[t] << 24) | (this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3];
                                }),
                                (c.prototype.readFloatLE = function (t, e) {
                                    return e || E(t, 4, this.length), o.read(this, t, !0, 23, 4);
                                }),
                                (c.prototype.readFloatBE = function (t, e) {
                                    return e || E(t, 4, this.length), o.read(this, t, !1, 23, 4);
                                }),
                                (c.prototype.readDoubleLE = function (t, e) {
                                    return e || E(t, 8, this.length), o.read(this, t, !0, 52, 8);
                                }),
                                (c.prototype.readDoubleBE = function (t, e) {
                                    return e || E(t, 8, this.length), o.read(this, t, !1, 52, 8);
                                }),
                                (c.prototype.writeUIntLE = function (t, e, r, n) {
                                    (t = +t), (e |= 0), (r |= 0), n || v(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
                                    var o = 1,
                                        i = 0;
                                    for (this[e] = 255 & t; ++i < r && (o *= 256);) this[e + i] = (t / o) & 255;
                                    return e + r;
                                }),
                                (c.prototype.writeUIntBE = function (t, e, r, n) {
                                    (t = +t), (e |= 0), (r |= 0), n || v(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
                                    var o = r - 1,
                                        i = 1;
                                    for (this[e + o] = 255 & t; --o >= 0 && (i *= 256);) this[e + o] = (t / i) & 255;
                                    return e + r;
                                }),
                                (c.prototype.writeUInt8 = function (t, e, r) {
                                    return (t = +t), (e |= 0), r || v(this, t, e, 1, 255, 0), c.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), (this[e] = 255 & t), e + 1;
                                }),
                                (c.prototype.writeUInt16LE = function (t, e, r) {
                                    return (t = +t), (e |= 0), r || v(this, t, e, 2, 65535, 0), c.TYPED_ARRAY_SUPPORT ? ((this[e] = 255 & t), (this[e + 1] = t >>> 8)) : S(this, t, e, !0), e + 2;
                                }),
                                (c.prototype.writeUInt16BE = function (t, e, r) {
                                    return (t = +t), (e |= 0), r || v(this, t, e, 2, 65535, 0), c.TYPED_ARRAY_SUPPORT ? ((this[e] = t >>> 8), (this[e + 1] = 255 & t)) : S(this, t, e, !1), e + 2;
                                }),
                                (c.prototype.writeUInt32LE = function (t, e, r) {
                                    return (
                                        (t = +t),
                                        (e |= 0),
                                        r || v(this, t, e, 4, 4294967295, 0),
                                        c.TYPED_ARRAY_SUPPORT ? ((this[e + 3] = t >>> 24), (this[e + 2] = t >>> 16), (this[e + 1] = t >>> 8), (this[e] = 255 & t)) : b(this, t, e, !0),
                                        e + 4
                                    );
                                }),
                                (c.prototype.writeUInt32BE = function (t, e, r) {
                                    return (
                                        (t = +t),
                                        (e |= 0),
                                        r || v(this, t, e, 4, 4294967295, 0),
                                        c.TYPED_ARRAY_SUPPORT ? ((this[e] = t >>> 24), (this[e + 1] = t >>> 16), (this[e + 2] = t >>> 8), (this[e + 3] = 255 & t)) : b(this, t, e, !1),
                                        e + 4
                                    );
                                }),
                                (c.prototype.writeIntLE = function (t, e, r, n) {
                                    if (((t = +t), (e |= 0), !n)) {
                                        var o = Math.pow(2, 8 * r - 1);
                                        v(this, t, e, r, o - 1, -o);
                                    }
                                    var i = 0,
                                        a = 1,
                                        s = 0;
                                    for (this[e] = 255 & t; ++i < r && (a *= 256);) t < 0 && 0 === s && 0 !== this[e + i - 1] && (s = 1), (this[e + i] = (((t / a) >> 0) - s) & 255);
                                    return e + r;
                                }),
                                (c.prototype.writeIntBE = function (t, e, r, n) {
                                    if (((t = +t), (e |= 0), !n)) {
                                        var o = Math.pow(2, 8 * r - 1);
                                        v(this, t, e, r, o - 1, -o);
                                    }
                                    var i = r - 1,
                                        a = 1,
                                        s = 0;
                                    for (this[e + i] = 255 & t; --i >= 0 && (a *= 256);) t < 0 && 0 === s && 0 !== this[e + i + 1] && (s = 1), (this[e + i] = (((t / a) >> 0) - s) & 255);
                                    return e + r;
                                }),
                                (c.prototype.writeInt8 = function (t, e, r) {
                                    return (t = +t), (e |= 0), r || v(this, t, e, 1, 127, -128), c.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), t < 0 && (t = 255 + t + 1), (this[e] = 255 & t), e + 1;
                                }),
                                (c.prototype.writeInt16LE = function (t, e, r) {
                                    return (t = +t), (e |= 0), r || v(this, t, e, 2, 32767, -32768), c.TYPED_ARRAY_SUPPORT ? ((this[e] = 255 & t), (this[e + 1] = t >>> 8)) : S(this, t, e, !0), e + 2;
                                }),
                                (c.prototype.writeInt16BE = function (t, e, r) {
                                    return (t = +t), (e |= 0), r || v(this, t, e, 2, 32767, -32768), c.TYPED_ARRAY_SUPPORT ? ((this[e] = t >>> 8), (this[e + 1] = 255 & t)) : S(this, t, e, !1), e + 2;
                                }),
                                (c.prototype.writeInt32LE = function (t, e, r) {
                                    return (
                                        (t = +t),
                                        (e |= 0),
                                        r || v(this, t, e, 4, 2147483647, -2147483648),
                                        c.TYPED_ARRAY_SUPPORT ? ((this[e] = 255 & t), (this[e + 1] = t >>> 8), (this[e + 2] = t >>> 16), (this[e + 3] = t >>> 24)) : b(this, t, e, !0),
                                        e + 4
                                    );
                                }),
                                (c.prototype.writeInt32BE = function (t, e, r) {
                                    return (
                                        (t = +t),
                                        (e |= 0),
                                        r || v(this, t, e, 4, 2147483647, -2147483648),
                                        t < 0 && (t = 4294967295 + t + 1),
                                        c.TYPED_ARRAY_SUPPORT ? ((this[e] = t >>> 24), (this[e + 1] = t >>> 16), (this[e + 2] = t >>> 8), (this[e + 3] = 255 & t)) : b(this, t, e, !1),
                                        e + 4
                                    );
                                }),
                                (c.prototype.writeFloatLE = function (t, e, r) {
                                    return F(this, t, e, !0, r);
                                }),
                                (c.prototype.writeFloatBE = function (t, e, r) {
                                    return F(this, t, e, !1, r);
                                }),
                                (c.prototype.writeDoubleLE = function (t, e, r) {
                                    return O(this, t, e, !0, r);
                                }),
                                (c.prototype.writeDoubleBE = function (t, e, r) {
                                    return O(this, t, e, !1, r);
                                }),
                                (c.prototype.copy = function (t, e, r, n) {
                                    if ((r || (r = 0), n || 0 === n || (n = this.length), e >= t.length && (e = t.length), e || (e = 0), n > 0 && n < r && (n = r), n === r || 0 === t.length || 0 === this.length)) return 0;
                                    if (e < 0) throw RangeError("targetStart out of bounds");
                                    if (r < 0 || r >= this.length) throw RangeError("sourceStart out of bounds");
                                    if (n < 0) throw RangeError("sourceEnd out of bounds");
                                    n > this.length && (n = this.length), t.length - e < n - r && (n = t.length - e + r);
                                    var o,
                                        i = n - r;
                                    if (this === t && r < e && e < n) for (o = i - 1; o >= 0; --o) t[o + e] = this[o + r];
                                    else if (i < 1e3 || !c.TYPED_ARRAY_SUPPORT) for (o = 0; o < i; ++o) t[o + e] = this[o + r];
                                    else Uint8Array.prototype.set.call(t, this.subarray(r, r + i), e);
                                    return i;
                                }),
                                (c.prototype.fill = function (t, e, r, n) {
                                    if ("string" == typeof t) {
                                        if (("string" == typeof e ? ((n = e), (e = 0), (r = this.length)) : "string" == typeof r && ((n = r), (r = this.length)), 1 === t.length)) {
                                            var o,
                                                i = t.charCodeAt(0);
                                            i < 256 && (t = i);
                                        }
                                        if (void 0 !== n && "string" != typeof n) throw TypeError("encoding must be a string");
                                        if ("string" == typeof n && !c.isEncoding(n)) throw TypeError("Unknown encoding: " + n);
                                    } else "number" == typeof t && (t &= 255);
                                    if (e < 0 || this.length < e || this.length < r) throw RangeError("Out of range index");
                                    if (r <= e) return this;
                                    if (((e >>>= 0), (r = void 0 === r ? this.length : r >>> 0), t || (t = 0), "number" == typeof t)) for (o = e; o < r; ++o) this[o] = t;
                                    else {
                                        var a = c.isBuffer(t) ? t : k(new c(t, n).toString()),
                                            s = a.length;
                                        for (o = 0; o < r - e; ++o) this[o + e] = a[o % s];
                                    }
                                    return this;
                                });
                            var R = /[^+\/0-9A-Za-z-_]/g;
                            function k(t, e) {
                                var r;
                                e = e || 1 / 0;
                                for (var n = t.length, o = null, i = [], a = 0; a < n; ++a) {
                                    if ((r = t.charCodeAt(a)) > 55295 && r < 57344) {
                                        if (!o) {
                                            if (r > 56319 || a + 1 === n) {
                                                (e -= 3) > -1 && i.push(239, 191, 189);
                                                continue;
                                            }
                                            o = r;
                                            continue;
                                        }
                                        if (r < 56320) {
                                            (e -= 3) > -1 && i.push(239, 191, 189), (o = r);
                                            continue;
                                        }
                                        r = 65536 + (((o - 55296) << 10) | (r - 56320));
                                    } else o && (e -= 3) > -1 && i.push(239, 191, 189);
                                    if (((o = null), r < 128)) {
                                        if ((e -= 1) < 0) break;
                                        i.push(r);
                                    } else if (r < 2048) {
                                        if ((e -= 2) < 0) break;
                                        i.push((r >> 6) | 192, (63 & r) | 128);
                                    } else if (r < 65536) {
                                        if ((e -= 3) < 0) break;
                                        i.push((r >> 12) | 224, ((r >> 6) & 63) | 128, (63 & r) | 128);
                                    } else {
                                        if (!(r < 1114112)) throw Error("Invalid code point");
                                        if ((e -= 4) < 0) break;
                                        i.push((r >> 18) | 240, ((r >> 12) & 63) | 128, ((r >> 6) & 63) | 128, (63 & r) | 128);
                                    }
                                }
                                return i;
                            }
                            function T(t) {
                                return n.toByteArray(
                                    (function (t) {
                                        var e;
                                        if ((t = ((e = t).trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")).replace(R, "")).length < 2) return "";
                                        for (; t.length % 4 != 0;) t += "=";
                                        return t;
                                    })(t)
                                );
                            }
                            function L(t, e, r, n) {
                                for (var o = 0; o < n && !(o + r >= e.length || o >= t.length); ++o) e[o + r] = t[o];
                                return o;
                            }
                        }.call(this, r(1)));
                    },
                    function (t, e, r) {
                        (e.byteLength = function (t) {
                            var e = u(t),
                                r = e[0],
                                n = e[1];
                            return (3 * (r + n)) / 4 - n;
                        }),
                            (e.toByteArray = function (t) {
                                var e,
                                    r,
                                    n = u(t),
                                    a = n[0],
                                    s = n[1],
                                    c = new i((3 * (a + s)) / 4 - s),
                                    f = 0,
                                    h = s > 0 ? a - 4 : a;
                                for (r = 0; r < h; r += 4)
                                    (e = (o[t.charCodeAt(r)] << 18) | (o[t.charCodeAt(r + 1)] << 12) | (o[t.charCodeAt(r + 2)] << 6) | o[t.charCodeAt(r + 3)]), (c[f++] = (e >> 16) & 255), (c[f++] = (e >> 8) & 255), (c[f++] = 255 & e);
                                return (
                                    2 === s && ((e = (o[t.charCodeAt(r)] << 2) | (o[t.charCodeAt(r + 1)] >> 4)), (c[f++] = 255 & e)),
                                    1 === s && ((e = (o[t.charCodeAt(r)] << 10) | (o[t.charCodeAt(r + 1)] << 4) | (o[t.charCodeAt(r + 2)] >> 2)), (c[f++] = (e >> 8) & 255), (c[f++] = 255 & e)),
                                    c
                                );
                            }),
                            (e.fromByteArray = function (t) {
                                for (var e, r = t.length, o = r % 3, i = [], a = 0, s = r - o; a < s; a += 16383)
                                    i.push(
                                        (function (t, e, r) {
                                            for (var o, i = [], a = e; a < r; a += 3) i.push(n[((o = ((t[a] << 16) & 16711680) + ((t[a + 1] << 8) & 65280) + (255 & t[a + 2])) >> 18) & 63] + n[(o >> 12) & 63] + n[(o >> 6) & 63] + n[63 & o]);
                                            return i.join("");
                                        })(t, a, a + 16383 > s ? s : a + 16383)
                                    );
                                return 1 === o ? i.push(n[(e = t[r - 1]) >> 2] + n[(e << 4) & 63] + "==") : 2 === o && i.push(n[(e = (t[r - 2] << 8) + t[r - 1]) >> 10] + n[(e >> 4) & 63] + n[(e << 2) & 63] + "="), i.join("");
                            });
                        for (var n = [], o = [], i = "undefined" != typeof Uint8Array ? Uint8Array : Array, a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", s = 0, c = a.length; s < c; ++s)
                            (n[s] = a[s]), (o[a.charCodeAt(s)] = s);
                        function u(t) {
                            var e = t.length;
                            if (e % 4 > 0) throw Error("Invalid string. Length must be a multiple of 4");
                            var r = t.indexOf("=");
                            return -1 === r && (r = e), [r, r === e ? 0 : 4 - (r % 4)];
                        }
                        (o["-".charCodeAt(0)] = 62), (o["_".charCodeAt(0)] = 63);
                    },
                    function (t, e) {
                        /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ (e.read = function (t, e, r, n, o) {
                            var i,
                                a,
                                s = 8 * o - n - 1,
                                c = (1 << s) - 1,
                                u = c >> 1,
                                f = -7,
                                h = r ? o - 1 : 0,
                                p = r ? -1 : 1,
                                l = t[e + h];
                            for (h += p, i = l & ((1 << -f) - 1), l >>= -f, f += s; f > 0; i = 256 * i + t[e + h], h += p, f -= 8);
                            for (a = i & ((1 << -f) - 1), i >>= -f, f += n; f > 0; a = 256 * a + t[e + h], h += p, f -= 8);
                            if (0 === i) i = 1 - u;
                            else {
                                if (i === c) return a ? NaN : (1 / 0) * (l ? -1 : 1);
                                (a += Math.pow(2, n)), (i -= u);
                            }
                            return (l ? -1 : 1) * a * Math.pow(2, i - n);
                        }),
                            (e.write = function (t, e, r, n, o, i) {
                                var a,
                                    s,
                                    c,
                                    u = 8 * i - o - 1,
                                    f = (1 << u) - 1,
                                    h = f >> 1,
                                    p = 23 === o ? 5960464477539062e-23 : 0,
                                    l = n ? 0 : i - 1,
                                    d = n ? 1 : -1,
                                    y = e < 0 || (0 === e && 1 / e < 0) ? 1 : 0;
                                for (
                                    isNaN((e = Math.abs(e))) || e === 1 / 0
                                        ? ((s = isNaN(e) ? 1 : 0), (a = f))
                                        : ((a = Math.floor(Math.log(e) / Math.LN2)),
                                            e * (c = Math.pow(2, -a)) < 1 && (a--, (c *= 2)),
                                            (e += a + h >= 1 ? p / c : p * Math.pow(2, 1 - h)) * c >= 2 && (a++, (c /= 2)),
                                            a + h >= f ? ((s = 0), (a = f)) : a + h >= 1 ? ((s = (e * c - 1) * Math.pow(2, o)), (a += h)) : ((s = e * Math.pow(2, h - 1) * Math.pow(2, o)), (a = 0)));
                                    o >= 8;
                                    t[r + l] = 255 & s, l += d, s /= 256, o -= 8
                                );
                                for (a = (a << o) | s, u += o; u > 0; t[r + l] = 255 & a, l += d, a /= 256, u -= 8);
                                t[r + l - d] |= 128 * y;
                            });
                    },
                    function (t, e) {
                        var r = {}.toString;
                        t.exports =
                            Array.isArray ||
                            function (t) {
                                return "[object Array]" == r.call(t);
                            };
                    },
                    function (t, e) {
                        function r(t, e) {
                            for (var r = 0, n = t.length - 1; n >= 0; n--) {
                                var o = t[n];
                                "." === o ? t.splice(n, 1) : ".." === o ? (t.splice(n, 1), r++) : r && (t.splice(n, 1), r--);
                            }
                            if (e) for (; r--; r) t.unshift("..");
                            return t;
                        }
                        var n = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,
                            o = function (t) {
                                return n.exec(t).slice(1);
                            };
                        function a(t, e) {
                            if (t.filter) return t.filter(e);
                            for (var r = [], n = 0; n < t.length; n++) e(t[n], n, t) && r.push(t[n]);
                            return r;
                        }
                        (e.resolve = function () {
                            for (var t = "", e = !1, n = arguments.length - 1; n >= -1 && !e; n--) {
                                var o = n >= 0 ? arguments[n] : i.cwd();
                                if ("string" != typeof o) throw TypeError("Arguments to path.resolve must be strings");
                                o && ((t = o + "/" + t), (e = "/" === o.charAt(0)));
                            }
                            return (
                                (t = r(
                                    a(t.split("/"), function (t) {
                                        return !!t;
                                    }),
                                    !e
                                ).join("/")),
                                (e ? "/" : "") + t || "."
                            );
                        }),
                            (e.normalize = function (t) {
                                var n = e.isAbsolute(t),
                                    o = "/" === s(t, -1);
                                return (
                                    (t = r(
                                        a(t.split("/"), function (t) {
                                            return !!t;
                                        }),
                                        !n
                                    ).join("/")) ||
                                    n ||
                                    (t = "."),
                                    t && o && (t += "/"),
                                    (n ? "/" : "") + t
                                );
                            }),
                            (e.isAbsolute = function (t) {
                                return "/" === t.charAt(0);
                            }),
                            (e.join = function () {
                                var t = Array.prototype.slice.call(arguments, 0);
                                return e.normalize(
                                    a(t, function (t, e) {
                                        if ("string" != typeof t) throw TypeError("Arguments to path.join must be strings");
                                        return t;
                                    }).join("/")
                                );
                            }),
                            (e.relative = function (t, r) {
                                function n(t) {
                                    for (var e = 0; e < t.length && "" === t[e]; e++);
                                    for (var r = t.length - 1; r >= 0 && "" === t[r]; r--);
                                    return e > r ? [] : t.slice(e, r - e + 1);
                                }
                                (t = e.resolve(t).substr(1)), (r = e.resolve(r).substr(1));
                                for (var o = n(t.split("/")), i = n(r.split("/")), a = Math.min(o.length, i.length), s = a, c = 0; c < a; c++)
                                    if (o[c] !== i[c]) {
                                        s = c;
                                        break;
                                    }
                                var u = [];
                                for (c = s; c < o.length; c++) u.push("..");
                                return (u = u.concat(i.slice(s))).join("/");
                            }),
                            (e.sep = "/"),
                            (e.delimiter = ":"),
                            (e.dirname = function (t) {
                                var e = o(t),
                                    r = e[0],
                                    n = e[1];
                                return r || n ? (n && (n = n.substr(0, n.length - 1)), r + n) : ".";
                            }),
                            (e.basename = function (t, e) {
                                var r = o(t)[2];
                                return e && r.substr(-1 * e.length) === e && (r = r.substr(0, r.length - e.length)), r;
                            }),
                            (e.extname = function (t) {
                                return o(t)[3];
                            });
                        var s = function (t, e, r) {
                            return t.substr(e, r);
                        };
                    },
                    function (t, e, r) {
                        let n = r(9),
                            o = r(14),
                            i = r(15),
                            a = r(16),
                            s = r(17),
                            c = r(18),
                            u = Object.prototype.toString,
                            { Z_NO_FLUSH: f, Z_FINISH: h, Z_OK: p, Z_STREAM_END: l, Z_NEED_DICT: d, Z_STREAM_ERROR: y, Z_DATA_ERROR: g, Z_MEM_ERROR: _ } = r(0);
                        function m(t) {
                            this.options = o.assign({ chunkSize: 65536, windowBits: 15, to: "" }, t || {});
                            let e = this.options;
                            e.raw && e.windowBits >= 0 && e.windowBits < 16 && ((e.windowBits = -e.windowBits), 0 === e.windowBits && (e.windowBits = -15)),
                                !(e.windowBits >= 0 && e.windowBits < 16) || (t && t.windowBits) || (e.windowBits += 32),
                                e.windowBits > 15 && e.windowBits < 48 && 0 == (15 & e.windowBits) && (e.windowBits |= 15),
                                (this.err = 0),
                                (this.msg = ""),
                                (this.ended = !1),
                                (this.chunks = []),
                                (this.strm = new s()),
                                (this.strm.avail_out = 0);
                            let r = n.inflateInit2(this.strm, e.windowBits);
                            if (
                                r !== p ||
                                ((this.header = new c()),
                                    n.inflateGetHeader(this.strm, this.header),
                                    e.dictionary &&
                                    ("string" == typeof e.dictionary ? (e.dictionary = i.string2buf(e.dictionary)) : "[object ArrayBuffer]" === u.call(e.dictionary) && (e.dictionary = new Uint8Array(e.dictionary)),
                                        e.raw && (r = n.inflateSetDictionary(this.strm, e.dictionary)) !== p))
                            )
                                throw Error(a[r]);
                        }
                        function w(t, e) {
                            let r = new m(e);
                            if ((r.push(t), r.err)) throw r.msg || a[r.err];
                            return r.result;
                        }
                        (m.prototype.push = function (t, e) {
                            let r, o, a;
                            let s = this.strm,
                                c = this.options.chunkSize,
                                m = this.options.dictionary;
                            if (this.ended) return !1;
                            for (o = e === ~~e ? e : !0 === e ? h : f, "[object ArrayBuffer]" === u.call(t) ? (s.input = new Uint8Array(t)) : (s.input = t), s.next_in = 0, s.avail_in = s.input.length; ;) {
                                for (
                                    0 === s.avail_out && ((s.output = new Uint8Array(c)), (s.next_out = 0), (s.avail_out = c)),
                                    (r = n.inflate(s, o)) === d && m && ((r = n.inflateSetDictionary(s, m)) === p ? (r = n.inflate(s, o)) : r === g && (r = d));
                                    s.avail_in > 0 && r === l && s.state.wrap > 0 && 0 !== t[s.next_in];

                                )
                                    n.inflateReset(s), (r = n.inflate(s, o));
                                switch (r) {
                                    case y:
                                    case g:
                                    case d:
                                    case _:
                                        return this.onEnd(r), (this.ended = !0), !1;
                                }
                                if (((a = s.avail_out), s.next_out && (0 === s.avail_out || r === l))) {
                                    if ("string" === this.options.to) {
                                        let t = i.utf8border(s.output, s.next_out),
                                            e = s.next_out - t,
                                            r = i.buf2string(s.output, t);
                                        (s.next_out = e), (s.avail_out = c - e), e && s.output.set(s.output.subarray(t, t + e), 0), this.onData(r);
                                    } else this.onData(s.output.length === s.next_out ? s.output : s.output.subarray(0, s.next_out));
                                }
                                if (r !== p || 0 !== a) {
                                    if (r === l) return (r = n.inflateEnd(this.strm)), this.onEnd(r), (this.ended = !0), !0;
                                    if (0 === s.avail_in) break;
                                }
                            }
                            return !0;
                        }),
                            (m.prototype.onData = function (t) {
                                this.chunks.push(t);
                            }),
                            (m.prototype.onEnd = function (t) {
                                t === p && ("string" === this.options.to ? (this.result = this.chunks.join("")) : (this.result = o.flattenChunks(this.chunks))), (this.chunks = []), (this.err = t), (this.msg = this.strm.msg);
                            }),
                            (t.exports.Inflate = m),
                            (t.exports.inflate = w),
                            (t.exports.inflateRaw = function (t, e) {
                                return ((e = e || {}).raw = !0), w(t, e);
                            }),
                            (t.exports.ungzip = w),
                            (t.exports.constants = r(0));
                    },
                    function (t, e, r) {
                        let n = r(10),
                            o = r(11),
                            i = r(12),
                            a = r(13),
                            { Z_FINISH: s, Z_BLOCK: c, Z_TREES: u, Z_OK: f, Z_STREAM_END: h, Z_NEED_DICT: p, Z_STREAM_ERROR: l, Z_DATA_ERROR: d, Z_MEM_ERROR: y, Z_BUF_ERROR: g, Z_DEFLATED: _ } = r(0),
                            m = (t) => ((t >>> 24) & 255) + ((t >>> 8) & 65280) + ((65280 & t) << 8) + ((255 & t) << 24),
                            w = (t) => {
                                if (!t) return 1;
                                let e = t.state;
                                return !e || e.strm !== t || e.mode < 16180 || e.mode > 16211 ? 1 : 0;
                            },
                            E = (t) => {
                                if (w(t)) return l;
                                let e = t.state;
                                return (
                                    (t.total_in = t.total_out = e.total = 0),
                                    (t.msg = ""),
                                    e.wrap && (t.adler = 1 & e.wrap),
                                    (e.mode = 16180),
                                    (e.last = 0),
                                    (e.havedict = 0),
                                    (e.flags = -1),
                                    (e.dmax = 32768),
                                    (e.head = null),
                                    (e.hold = 0),
                                    (e.bits = 0),
                                    (e.lencode = e.lendyn = new Int32Array(852)),
                                    (e.distcode = e.distdyn = new Int32Array(592)),
                                    (e.sane = 1),
                                    (e.back = -1),
                                    f
                                );
                            },
                            v = (t) => {
                                if (w(t)) return l;
                                let e = t.state;
                                return (e.wsize = 0), (e.whave = 0), (e.wnext = 0), E(t);
                            },
                            S = (t, e) => {
                                let r;
                                if (w(t)) return l;
                                let n = t.state;
                                return e < 0 ? ((r = 0), (e = -e)) : ((r = 5 + (e >> 4)), e < 48 && (e &= 15)), e && (e < 8 || e > 15) ? l : (null !== n.window && n.wbits !== e && (n.window = null), (n.wrap = r), (n.wbits = e), v(t));
                            },
                            b = (t, e) => {
                                if (!t) return l;
                                let r = new (function () {
                                    (this.strm = null),
                                        (this.mode = 0),
                                        (this.last = !1),
                                        (this.wrap = 0),
                                        (this.havedict = !1),
                                        (this.flags = 0),
                                        (this.dmax = 0),
                                        (this.check = 0),
                                        (this.total = 0),
                                        (this.head = null),
                                        (this.wbits = 0),
                                        (this.wsize = 0),
                                        (this.whave = 0),
                                        (this.wnext = 0),
                                        (this.window = null),
                                        (this.hold = 0),
                                        (this.bits = 0),
                                        (this.length = 0),
                                        (this.offset = 0),
                                        (this.extra = 0),
                                        (this.lencode = null),
                                        (this.distcode = null),
                                        (this.lenbits = 0),
                                        (this.distbits = 0),
                                        (this.ncode = 0),
                                        (this.nlen = 0),
                                        (this.ndist = 0),
                                        (this.have = 0),
                                        (this.next = null),
                                        (this.lens = new Uint16Array(320)),
                                        (this.work = new Uint16Array(288)),
                                        (this.lendyn = null),
                                        (this.distdyn = null),
                                        (this.sane = 0),
                                        (this.back = 0),
                                        (this.was = 0);
                                })();
                                (t.state = r), (r.strm = t), (r.window = null), (r.mode = 16180);
                                let n = S(t, e);
                                return n !== f && (t.state = null), n;
                            },
                            I,
                            F,
                            O = !0,
                            R = (t) => {
                                if (O) {
                                    (I = new Int32Array(512)), (F = new Int32Array(32));
                                    let e = 0;
                                    for (; e < 144;) t.lens[e++] = 8;
                                    for (; e < 256;) t.lens[e++] = 9;
                                    for (; e < 280;) t.lens[e++] = 7;
                                    for (; e < 288;) t.lens[e++] = 8;
                                    for (a(1, t.lens, 0, 288, I, 0, t.work, { bits: 9 }), e = 0; e < 32;) t.lens[e++] = 5;
                                    a(2, t.lens, 0, 32, F, 0, t.work, { bits: 5 }), (O = !1);
                                }
                                (t.lencode = I), (t.lenbits = 9), (t.distcode = F), (t.distbits = 5);
                            },
                            k = (t, e, r, n) => {
                                let o;
                                let i = t.state;
                                return (
                                    null === i.window && ((i.wsize = 1 << i.wbits), (i.wnext = 0), (i.whave = 0), (i.window = new Uint8Array(i.wsize))),
                                    n >= i.wsize
                                        ? (i.window.set(e.subarray(r - i.wsize, r), 0), (i.wnext = 0), (i.whave = i.wsize))
                                        : ((o = i.wsize - i.wnext) > n && (o = n),
                                            i.window.set(e.subarray(r - n, r - n + o), i.wnext),
                                            (n -= o) ? (i.window.set(e.subarray(r - n, r), 0), (i.wnext = n), (i.whave = i.wsize)) : ((i.wnext += o), i.wnext === i.wsize && (i.wnext = 0), i.whave < i.wsize && (i.whave += o))),
                                    0
                                );
                            };
                        (t.exports.inflateReset = v),
                            (t.exports.inflateReset2 = S),
                            (t.exports.inflateResetKeep = E),
                            (t.exports.inflateInit = (t) => b(t, 15)),
                            (t.exports.inflateInit2 = b),
                            (t.exports.inflate = (t, e) => {
                                let r,
                                    E,
                                    v,
                                    S,
                                    b,
                                    I,
                                    F,
                                    O,
                                    T,
                                    L,
                                    N,
                                    A,
                                    D,
                                    U,
                                    x,
                                    P,
                                    C,
                                    B,
                                    M,
                                    j,
                                    z,
                                    Y,
                                    Z,
                                    H,
                                    V = 0,
                                    W = new Uint8Array(4),
                                    X = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
                                if (w(t) || !t.output || (!t.input && 0 !== t.avail_in)) return l;
                                16191 === (v = t.state).mode && (v.mode = 16192), (F = t.next_out), (b = t.output), (T = t.avail_out), (I = t.next_in), (S = t.input), (O = t.avail_in), (L = v.hold), (N = v.bits), (A = O), (D = T), (H = f);
                                t: for (; ;)
                                    switch (v.mode) {
                                        case 16180:
                                            if (0 === v.wrap) {
                                                v.mode = 16192;
                                                break;
                                            }
                                            for (; N < 16;) {
                                                if (0 === O) break t;
                                                O--, (L += S[I++] << N), (N += 8);
                                            }
                                            if (2 & v.wrap && 35615 === L) {
                                                0 === v.wbits && (v.wbits = 15), (v.check = 0), (W[0] = 255 & L), (W[1] = (L >>> 8) & 255), (v.check = o(v.check, W, 2, 0)), (L = 0), (N = 0), (v.mode = 16181);
                                                break;
                                            }
                                            if ((v.head && (v.head.done = !1), !(1 & v.wrap) || (((255 & L) << 8) + (L >> 8)) % 31)) {
                                                (t.msg = "incorrect header check"), (v.mode = 16209);
                                                break;
                                            }
                                            if ((15 & L) !== _) {
                                                (t.msg = "unknown compression method"), (v.mode = 16209);
                                                break;
                                            }
                                            if (((N -= 4), (Z = 8 + (15 & (L >>>= 4))), 0 === v.wbits && (v.wbits = Z), Z > 15 || Z > v.wbits)) {
                                                (t.msg = "invalid window size"), (v.mode = 16209);
                                                break;
                                            }
                                            (v.dmax = 1 << v.wbits), (v.flags = 0), (t.adler = v.check = 1), (v.mode = 512 & L ? 16189 : 16191), (L = 0), (N = 0);
                                            break;
                                        case 16181:
                                            for (; N < 16;) {
                                                if (0 === O) break t;
                                                O--, (L += S[I++] << N), (N += 8);
                                            }
                                            if (((v.flags = L), (255 & v.flags) !== _)) {
                                                (t.msg = "unknown compression method"), (v.mode = 16209);
                                                break;
                                            }
                                            if (57344 & v.flags) {
                                                (t.msg = "unknown header flags set"), (v.mode = 16209);
                                                break;
                                            }
                                            v.head && (v.head.text = (L >> 8) & 1), 512 & v.flags && 4 & v.wrap && ((W[0] = 255 & L), (W[1] = (L >>> 8) & 255), (v.check = o(v.check, W, 2, 0))), (L = 0), (N = 0), (v.mode = 16182);
                                        case 16182:
                                            for (; N < 32;) {
                                                if (0 === O) break t;
                                                O--, (L += S[I++] << N), (N += 8);
                                            }
                                            v.head && (v.head.time = L),
                                                512 & v.flags && 4 & v.wrap && ((W[0] = 255 & L), (W[1] = (L >>> 8) & 255), (W[2] = (L >>> 16) & 255), (W[3] = (L >>> 24) & 255), (v.check = o(v.check, W, 4, 0))),
                                                (L = 0),
                                                (N = 0),
                                                (v.mode = 16183);
                                        case 16183:
                                            for (; N < 16;) {
                                                if (0 === O) break t;
                                                O--, (L += S[I++] << N), (N += 8);
                                            }
                                            v.head && ((v.head.xflags = 255 & L), (v.head.os = L >> 8)),
                                                512 & v.flags && 4 & v.wrap && ((W[0] = 255 & L), (W[1] = (L >>> 8) & 255), (v.check = o(v.check, W, 2, 0))),
                                                (L = 0),
                                                (N = 0),
                                                (v.mode = 16184);
                                        case 16184:
                                            if (1024 & v.flags) {
                                                for (; N < 16;) {
                                                    if (0 === O) break t;
                                                    O--, (L += S[I++] << N), (N += 8);
                                                }
                                                (v.length = L), v.head && (v.head.extra_len = L), 512 & v.flags && 4 & v.wrap && ((W[0] = 255 & L), (W[1] = (L >>> 8) & 255), (v.check = o(v.check, W, 2, 0))), (L = 0), (N = 0);
                                            } else v.head && (v.head.extra = null);
                                            v.mode = 16185;
                                        case 16185:
                                            if (
                                                1024 & v.flags &&
                                                ((U = v.length) > O && (U = O),
                                                    U &&
                                                    (v.head && ((Z = v.head.extra_len - v.length), v.head.extra || (v.head.extra = new Uint8Array(v.head.extra_len)), v.head.extra.set(S.subarray(I, I + U), Z)),
                                                        512 & v.flags && 4 & v.wrap && (v.check = o(v.check, S, U, I)),
                                                        (O -= U),
                                                        (I += U),
                                                        (v.length -= U)),
                                                    v.length)
                                            )
                                                break t;
                                            (v.length = 0), (v.mode = 16186);
                                        case 16186:
                                            if (2048 & v.flags) {
                                                if (0 === O) break t;
                                                U = 0;
                                                do (Z = S[I + U++]), v.head && Z && v.length < 65536 && (v.head.name += String.fromCharCode(Z));
                                                while (Z && U < O);
                                                if ((512 & v.flags && 4 & v.wrap && (v.check = o(v.check, S, U, I)), (O -= U), (I += U), Z)) break t;
                                            } else v.head && (v.head.name = null);
                                            (v.length = 0), (v.mode = 16187);
                                        case 16187:
                                            if (4096 & v.flags) {
                                                if (0 === O) break t;
                                                U = 0;
                                                do (Z = S[I + U++]), v.head && Z && v.length < 65536 && (v.head.comment += String.fromCharCode(Z));
                                                while (Z && U < O);
                                                if ((512 & v.flags && 4 & v.wrap && (v.check = o(v.check, S, U, I)), (O -= U), (I += U), Z)) break t;
                                            } else v.head && (v.head.comment = null);
                                            v.mode = 16188;
                                        case 16188:
                                            if (512 & v.flags) {
                                                for (; N < 16;) {
                                                    if (0 === O) break t;
                                                    O--, (L += S[I++] << N), (N += 8);
                                                }
                                                if (4 & v.wrap && L !== (65535 & v.check)) {
                                                    (t.msg = "header crc mismatch"), (v.mode = 16209);
                                                    break;
                                                }
                                                (L = 0), (N = 0);
                                            }
                                            v.head && ((v.head.hcrc = (v.flags >> 9) & 1), (v.head.done = !0)), (t.adler = v.check = 0), (v.mode = 16191);
                                            break;
                                        case 16189:
                                            for (; N < 32;) {
                                                if (0 === O) break t;
                                                O--, (L += S[I++] << N), (N += 8);
                                            }
                                            (t.adler = v.check = m(L)), (L = 0), (N = 0), (v.mode = 16190);
                                        case 16190:
                                            if (0 === v.havedict) return (t.next_out = F), (t.avail_out = T), (t.next_in = I), (t.avail_in = O), (v.hold = L), (v.bits = N), p;
                                            (t.adler = v.check = 1), (v.mode = 16191);
                                        case 16191:
                                            if (e === c || e === u) break t;
                                        case 16192:
                                            if (v.last) {
                                                (L >>>= 7 & N), (N -= 7 & N), (v.mode = 16206);
                                                break;
                                            }
                                            for (; N < 3;) {
                                                if (0 === O) break t;
                                                O--, (L += S[I++] << N), (N += 8);
                                            }
                                            switch (((v.last = 1 & L), (N -= 1), 3 & (L >>>= 1))) {
                                                case 0:
                                                    v.mode = 16193;
                                                    break;
                                                case 1:
                                                    if ((R(v), (v.mode = 16199), e === u)) {
                                                        (L >>>= 2), (N -= 2);
                                                        break t;
                                                    }
                                                    break;
                                                case 2:
                                                    v.mode = 16196;
                                                    break;
                                                case 3:
                                                    (t.msg = "invalid block type"), (v.mode = 16209);
                                            }
                                            (L >>>= 2), (N -= 2);
                                            break;
                                        case 16193:
                                            for (L >>>= 7 & N, N -= 7 & N; N < 32;) {
                                                if (0 === O) break t;
                                                O--, (L += S[I++] << N), (N += 8);
                                            }
                                            if ((65535 & L) != ((L >>> 16) ^ 65535)) {
                                                (t.msg = "invalid stored block lengths"), (v.mode = 16209);
                                                break;
                                            }
                                            if (((v.length = 65535 & L), (L = 0), (N = 0), (v.mode = 16194), e === u)) break t;
                                        case 16194:
                                            v.mode = 16195;
                                        case 16195:
                                            if ((U = v.length)) {
                                                if ((U > O && (U = O), U > T && (U = T), 0 === U)) break t;
                                                b.set(S.subarray(I, I + U), F), (O -= U), (I += U), (T -= U), (F += U), (v.length -= U);
                                                break;
                                            }
                                            v.mode = 16191;
                                            break;
                                        case 16196:
                                            for (; N < 14;) {
                                                if (0 === O) break t;
                                                O--, (L += S[I++] << N), (N += 8);
                                            }
                                            if (((v.nlen = 257 + (31 & L)), (L >>>= 5), (N -= 5), (v.ndist = 1 + (31 & L)), (L >>>= 5), (N -= 5), (v.ncode = 4 + (15 & L)), (L >>>= 4), (N -= 4), v.nlen > 286 || v.ndist > 30)) {
                                                (t.msg = "too many length or distance symbols"), (v.mode = 16209);
                                                break;
                                            }
                                            (v.have = 0), (v.mode = 16197);
                                        case 16197:
                                            for (; v.have < v.ncode;) {
                                                for (; N < 3;) {
                                                    if (0 === O) break t;
                                                    O--, (L += S[I++] << N), (N += 8);
                                                }
                                                (v.lens[X[v.have++]] = 7 & L), (L >>>= 3), (N -= 3);
                                            }
                                            for (; v.have < 19;) v.lens[X[v.have++]] = 0;
                                            if (((v.lencode = v.lendyn), (v.lenbits = 7), (r = { bits: v.lenbits }), (H = a(0, v.lens, 0, 19, v.lencode, 0, v.work, r)), (v.lenbits = r.bits), H)) {
                                                (t.msg = "invalid code lengths set"), (v.mode = 16209);
                                                break;
                                            }
                                            (v.have = 0), (v.mode = 16198);
                                        case 16198:
                                            for (; v.have < v.nlen + v.ndist;) {
                                                for (; (B = ((V = v.lencode[L & ((1 << v.lenbits) - 1)]) >>> 16) & 255), (M = 65535 & V), !((C = V >>> 24) <= N);) {
                                                    if (0 === O) break t;
                                                    O--, (L += S[I++] << N), (N += 8);
                                                }
                                                if (M < 16) (L >>>= C), (N -= C), (v.lens[v.have++] = M);
                                                else {
                                                    if (16 === M) {
                                                        for (E = C + 2; N < E;) {
                                                            if (0 === O) break t;
                                                            O--, (L += S[I++] << N), (N += 8);
                                                        }
                                                        if (((L >>>= C), (N -= C), 0 === v.have)) {
                                                            (t.msg = "invalid bit length repeat"), (v.mode = 16209);
                                                            break;
                                                        }
                                                        (Z = v.lens[v.have - 1]), (U = 3 + (3 & L)), (L >>>= 2), (N -= 2);
                                                    } else if (17 === M) {
                                                        for (E = C + 3; N < E;) {
                                                            if (0 === O) break t;
                                                            O--, (L += S[I++] << N), (N += 8);
                                                        }
                                                        (N -= C), (Z = 0), (U = 3 + (7 & (L >>>= C))), (L >>>= 3), (N -= 3);
                                                    } else {
                                                        for (E = C + 7; N < E;) {
                                                            if (0 === O) break t;
                                                            O--, (L += S[I++] << N), (N += 8);
                                                        }
                                                        (N -= C), (Z = 0), (U = 11 + (127 & (L >>>= C))), (L >>>= 7), (N -= 7);
                                                    }
                                                    if (v.have + U > v.nlen + v.ndist) {
                                                        (t.msg = "invalid bit length repeat"), (v.mode = 16209);
                                                        break;
                                                    }
                                                    for (; U--;) v.lens[v.have++] = Z;
                                                }
                                            }
                                            if (16209 === v.mode) break;
                                            if (0 === v.lens[256]) {
                                                (t.msg = "invalid code -- missing end-of-block"), (v.mode = 16209);
                                                break;
                                            }
                                            if (((v.lenbits = 9), (r = { bits: v.lenbits }), (H = a(1, v.lens, 0, v.nlen, v.lencode, 0, v.work, r)), (v.lenbits = r.bits), H)) {
                                                (t.msg = "invalid literal/lengths set"), (v.mode = 16209);
                                                break;
                                            }
                                            if (((v.distbits = 6), (v.distcode = v.distdyn), (r = { bits: v.distbits }), (H = a(2, v.lens, v.nlen, v.ndist, v.distcode, 0, v.work, r)), (v.distbits = r.bits), H)) {
                                                (t.msg = "invalid distances set"), (v.mode = 16209);
                                                break;
                                            }
                                            if (((v.mode = 16199), e === u)) break t;
                                        case 16199:
                                            v.mode = 16200;
                                        case 16200:
                                            if (O >= 6 && T >= 258) {
                                                (t.next_out = F),
                                                    (t.avail_out = T),
                                                    (t.next_in = I),
                                                    (t.avail_in = O),
                                                    (v.hold = L),
                                                    (v.bits = N),
                                                    i(t, D),
                                                    (F = t.next_out),
                                                    (b = t.output),
                                                    (T = t.avail_out),
                                                    (I = t.next_in),
                                                    (S = t.input),
                                                    (O = t.avail_in),
                                                    (L = v.hold),
                                                    (N = v.bits),
                                                    16191 === v.mode && (v.back = -1);
                                                break;
                                            }
                                            for (v.back = 0; (B = ((V = v.lencode[L & ((1 << v.lenbits) - 1)]) >>> 16) & 255), (M = 65535 & V), !((C = V >>> 24) <= N);) {
                                                if (0 === O) break t;
                                                O--, (L += S[I++] << N), (N += 8);
                                            }
                                            if (B && 0 == (240 & B)) {
                                                for (j = C, z = B, Y = M; (B = ((V = v.lencode[Y + ((L & ((1 << (j + z)) - 1)) >> j)]) >>> 16) & 255), (M = 65535 & V), !(j + (C = V >>> 24) <= N);) {
                                                    if (0 === O) break t;
                                                    O--, (L += S[I++] << N), (N += 8);
                                                }
                                                (L >>>= j), (N -= j), (v.back += j);
                                            }
                                            if (((L >>>= C), (N -= C), (v.back += C), (v.length = M), 0 === B)) {
                                                v.mode = 16205;
                                                break;
                                            }
                                            if (32 & B) {
                                                (v.back = -1), (v.mode = 16191);
                                                break;
                                            }
                                            if (64 & B) {
                                                (t.msg = "invalid literal/length code"), (v.mode = 16209);
                                                break;
                                            }
                                            (v.extra = 15 & B), (v.mode = 16201);
                                        case 16201:
                                            if (v.extra) {
                                                for (E = v.extra; N < E;) {
                                                    if (0 === O) break t;
                                                    O--, (L += S[I++] << N), (N += 8);
                                                }
                                                (v.length += L & ((1 << v.extra) - 1)), (L >>>= v.extra), (N -= v.extra), (v.back += v.extra);
                                            }
                                            (v.was = v.length), (v.mode = 16202);
                                        case 16202:
                                            for (; (B = ((V = v.distcode[L & ((1 << v.distbits) - 1)]) >>> 16) & 255), (M = 65535 & V), !((C = V >>> 24) <= N);) {
                                                if (0 === O) break t;
                                                O--, (L += S[I++] << N), (N += 8);
                                            }
                                            if (0 == (240 & B)) {
                                                for (j = C, z = B, Y = M; (B = ((V = v.distcode[Y + ((L & ((1 << (j + z)) - 1)) >> j)]) >>> 16) & 255), (M = 65535 & V), !(j + (C = V >>> 24) <= N);) {
                                                    if (0 === O) break t;
                                                    O--, (L += S[I++] << N), (N += 8);
                                                }
                                                (L >>>= j), (N -= j), (v.back += j);
                                            }
                                            if (((L >>>= C), (N -= C), (v.back += C), 64 & B)) {
                                                (t.msg = "invalid distance code"), (v.mode = 16209);
                                                break;
                                            }
                                            (v.offset = M), (v.extra = 15 & B), (v.mode = 16203);
                                        case 16203:
                                            if (v.extra) {
                                                for (E = v.extra; N < E;) {
                                                    if (0 === O) break t;
                                                    O--, (L += S[I++] << N), (N += 8);
                                                }
                                                (v.offset += L & ((1 << v.extra) - 1)), (L >>>= v.extra), (N -= v.extra), (v.back += v.extra);
                                            }
                                            if (v.offset > v.dmax) {
                                                (t.msg = "invalid distance too far back"), (v.mode = 16209);
                                                break;
                                            }
                                            v.mode = 16204;
                                        case 16204:
                                            if (0 === T) break t;
                                            if (((U = D - T), v.offset > U)) {
                                                if ((U = v.offset - U) > v.whave && v.sane) {
                                                    (t.msg = "invalid distance too far back"), (v.mode = 16209);
                                                    break;
                                                }
                                                U > v.wnext ? ((U -= v.wnext), (x = v.wsize - U)) : (x = v.wnext - U), U > v.length && (U = v.length), (P = v.window);
                                            } else (P = b), (x = F - v.offset), (U = v.length);
                                            U > T && (U = T), (T -= U), (v.length -= U);
                                            do b[F++] = P[x++];
                                            while (--U);
                                            0 === v.length && (v.mode = 16200);
                                            break;
                                        case 16205:
                                            if (0 === T) break t;
                                            (b[F++] = v.length), T--, (v.mode = 16200);
                                            break;
                                        case 16206:
                                            if (v.wrap) {
                                                for (; N < 32;) {
                                                    if (0 === O) break t;
                                                    O--, (L |= S[I++] << N), (N += 8);
                                                }
                                                if (
                                                    ((D -= T),
                                                        (t.total_out += D),
                                                        (v.total += D),
                                                        4 & v.wrap && D && (t.adler = v.check = v.flags ? o(v.check, b, D, F - D) : n(v.check, b, D, F - D)),
                                                        (D = T),
                                                        4 & v.wrap && (v.flags ? L : m(L)) !== v.check)
                                                ) {
                                                    (t.msg = "incorrect data check"), (v.mode = 16209);
                                                    break;
                                                }
                                                (L = 0), (N = 0);
                                            }
                                            v.mode = 16207;
                                        case 16207:
                                            if (v.wrap && v.flags) {
                                                for (; N < 32;) {
                                                    if (0 === O) break t;
                                                    O--, (L += S[I++] << N), (N += 8);
                                                }
                                                if (4 & v.wrap && L !== (4294967295 & v.total)) {
                                                    (t.msg = "incorrect length check"), (v.mode = 16209);
                                                    break;
                                                }
                                                (L = 0), (N = 0);
                                            }
                                            v.mode = 16208;
                                        case 16208:
                                            H = h;
                                            break t;
                                        case 16209:
                                            H = d;
                                            break t;
                                        case 16210:
                                            return y;
                                        default:
                                            return l;
                                    }
                                return (
                                    (t.next_out = F),
                                    (t.avail_out = T),
                                    (t.next_in = I),
                                    (t.avail_in = O),
                                    (v.hold = L),
                                    (v.bits = N),
                                    (v.wsize || (D !== t.avail_out && v.mode < 16209 && (v.mode < 16206 || e !== s))) && k(t, t.output, t.next_out, D - t.avail_out)
                                        ? ((v.mode = 16210), y)
                                        : ((A -= t.avail_in),
                                            (D -= t.avail_out),
                                            (t.total_in += A),
                                            (t.total_out += D),
                                            (v.total += D),
                                            4 & v.wrap && D && (t.adler = v.check = v.flags ? o(v.check, b, D, t.next_out - D) : n(v.check, b, D, t.next_out - D)),
                                            (t.data_type = v.bits + (v.last ? 64 : 0) + (16191 === v.mode ? 128 : 0) + (16199 === v.mode || 16194 === v.mode ? 256 : 0)),
                                            ((0 === A && 0 === D) || e === s) && H === f && (H = g),
                                            H)
                                );
                            }),
                            (t.exports.inflateEnd = (t) => {
                                if (w(t)) return l;
                                let e = t.state;
                                return e.window && (e.window = null), (t.state = null), f;
                            }),
                            (t.exports.inflateGetHeader = (t, e) => {
                                if (w(t)) return l;
                                let r = t.state;
                                return 0 == (2 & r.wrap) ? l : ((r.head = e), (e.done = !1), f);
                            }),
                            (t.exports.inflateSetDictionary = (t, e) => {
                                let r;
                                let o = e.length;
                                return w(t) ? l : 0 !== (r = t.state).wrap && 16190 !== r.mode ? l : 16190 === r.mode && n(1, e, o, 0) !== r.check ? d : k(t, e, o, o) ? ((r.mode = 16210), y) : ((r.havedict = 1), f);
                            }),
                            (t.exports.inflateInfo = "pako inflate (from Nodeca project)");
                    },
                    function (t, e, r) {
                        t.exports = (t, e, r, n) => {
                            let o = (65535 & t) | 0,
                                i = ((t >>> 16) & 65535) | 0,
                                a = 0;
                            for (; 0 !== r;) {
                                r -= a = r > 2e3 ? 2e3 : r;
                                do i = (i + (o = (o + e[n++]) | 0)) | 0;
                                while (--a);
                                (o %= 65521), (i %= 65521);
                            }
                            return o | (i << 16) | 0;
                        };
                    },
                    function (t, e, r) {
                        let n = new Uint32Array(
                            (() => {
                                let t,
                                    e = [];
                                for (var r = 0; r < 256; r++) {
                                    t = r;
                                    for (var n = 0; n < 8; n++) t = 1 & t ? 3988292384 ^ (t >>> 1) : t >>> 1;
                                    e[r] = t;
                                }
                                return e;
                            })()
                        );
                        t.exports = (t, e, r, o) => {
                            let i = o + r;
                            t ^= -1;
                            for (let r = o; r < i; r++) t = (t >>> 8) ^ n[255 & (t ^ e[r])];
                            return -1 ^ t;
                        };
                    },
                    function (t, e, r) {
                        t.exports = function (t, e) {
                            let r, n, o, i, a, s, c, u, f, h, p, l, d, y, g, _, m, w, E, v, S, b, I, F;
                            let O = t.state;
                            (r = t.next_in),
                                (I = t.input),
                                (n = r + (t.avail_in - 5)),
                                (o = t.next_out),
                                (F = t.output),
                                (i = o - (e - t.avail_out)),
                                (a = o + (t.avail_out - 257)),
                                (s = O.dmax),
                                (c = O.wsize),
                                (u = O.whave),
                                (f = O.wnext),
                                (h = O.window),
                                (p = O.hold),
                                (l = O.bits),
                                (d = O.lencode),
                                (y = O.distcode),
                                (g = (1 << O.lenbits) - 1),
                                (_ = (1 << O.distbits) - 1);
                            t: do
                                for (l < 15 && ((p += I[r++] << l), (l += 8), (p += I[r++] << l), (l += 8)), m = d[p & g]; ;) {
                                    if (((p >>>= w = m >>> 24), (l -= w), 0 == (w = (m >>> 16) & 255))) F[o++] = 65535 & m;
                                    else {
                                        if (!(16 & w)) {
                                            if (0 == (64 & w)) {
                                                m = d[(65535 & m) + (p & ((1 << w) - 1))];
                                                continue;
                                            }
                                            if (32 & w) {
                                                O.mode = 16191;
                                                break t;
                                            }
                                            (t.msg = "invalid literal/length code"), (O.mode = 16209);
                                            break t;
                                        }
                                        for (
                                            E = 65535 & m,
                                            (w &= 15) && (l < w && ((p += I[r++] << l), (l += 8)), (E += p & ((1 << w) - 1)), (p >>>= w), (l -= w)),
                                            l < 15 && ((p += I[r++] << l), (l += 8), (p += I[r++] << l), (l += 8)),
                                            m = y[p & _];
                                            ;

                                        ) {
                                            if (((p >>>= w = m >>> 24), (l -= w), !(16 & (w = (m >>> 16) & 255)))) {
                                                if (0 == (64 & w)) {
                                                    m = y[(65535 & m) + (p & ((1 << w) - 1))];
                                                    continue;
                                                }
                                                (t.msg = "invalid distance code"), (O.mode = 16209);
                                                break t;
                                            }
                                            if (((v = 65535 & m), l < (w &= 15) && ((p += I[r++] << l), (l += 8) < w && ((p += I[r++] << l), (l += 8))), (v += p & ((1 << w) - 1)) > s)) {
                                                (t.msg = "invalid distance too far back"), (O.mode = 16209);
                                                break t;
                                            }
                                            if (((p >>>= w), (l -= w), v > (w = o - i))) {
                                                if ((w = v - w) > u && O.sane) {
                                                    (t.msg = "invalid distance too far back"), (O.mode = 16209);
                                                    break t;
                                                }
                                                if (((S = 0), (b = h), 0 === f)) {
                                                    if (((S += c - w), w < E)) {
                                                        E -= w;
                                                        do F[o++] = h[S++];
                                                        while (--w);
                                                        (S = o - v), (b = F);
                                                    }
                                                } else if (f < w) {
                                                    if (((S += c + f - w), (w -= f) < E)) {
                                                        E -= w;
                                                        do F[o++] = h[S++];
                                                        while (--w);
                                                        if (((S = 0), f < E)) {
                                                            E -= w = f;
                                                            do F[o++] = h[S++];
                                                            while (--w);
                                                            (S = o - v), (b = F);
                                                        }
                                                    }
                                                } else if (((S += f - w), w < E)) {
                                                    E -= w;
                                                    do F[o++] = h[S++];
                                                    while (--w);
                                                    (S = o - v), (b = F);
                                                }
                                                for (; E > 2;) (F[o++] = b[S++]), (F[o++] = b[S++]), (F[o++] = b[S++]), (E -= 3);
                                                E && ((F[o++] = b[S++]), E > 1 && (F[o++] = b[S++]));
                                            } else {
                                                S = o - v;
                                                do (F[o++] = F[S++]), (F[o++] = F[S++]), (F[o++] = F[S++]), (E -= 3);
                                                while (E > 2);
                                                E && ((F[o++] = F[S++]), E > 1 && (F[o++] = F[S++]));
                                            }
                                            break;
                                        }
                                    }
                                    break;
                                }
                            while (r < n && o < a);
                            (r -= E = l >> 3),
                                (p &= (1 << (l -= E << 3)) - 1),
                                (t.next_in = r),
                                (t.next_out = o),
                                (t.avail_in = r < n ? n - r + 5 : 5 - (r - n)),
                                (t.avail_out = o < a ? a - o + 257 : 257 - (o - a)),
                                (O.hold = p),
                                (O.bits = l);
                        };
                    },
                    function (t, e, r) {
                        let n = new Uint16Array([3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0]),
                            o = new Uint8Array([16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78]),
                            i = new Uint16Array([1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0]),
                            a = new Uint8Array([16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64]);
                        t.exports = (t, e, r, s, c, u, f, h) => {
                            let p = h.bits,
                                l,
                                d,
                                y,
                                g,
                                _,
                                m,
                                w = 0,
                                E = 0,
                                v = 0,
                                S = 0,
                                b = 0,
                                I = 0,
                                F = 0,
                                O = 0,
                                R = 0,
                                k = 0,
                                T = null,
                                L = new Uint16Array(16),
                                N = new Uint16Array(16),
                                A,
                                D,
                                U,
                                x = null;
                            for (w = 0; w <= 15; w++) L[w] = 0;
                            for (E = 0; E < s; E++) L[e[r + E]]++;
                            for (b = p, S = 15; S >= 1 && 0 === L[S]; S--);
                            if ((b > S && (b = S), 0 === S)) return (c[u++] = 20971520), (c[u++] = 20971520), (h.bits = 1), 0;
                            for (v = 1; v < S && 0 === L[v]; v++);
                            for (b < v && (b = v), O = 1, w = 1; w <= 15; w++) if (((O <<= 1), (O -= L[w]) < 0)) return -1;
                            if (O > 0 && (0 === t || 1 !== S)) return -1;
                            for (N[1] = 0, w = 1; w < 15; w++) N[w + 1] = N[w] + L[w];
                            for (E = 0; E < s; E++) 0 !== e[r + E] && (f[N[e[r + E]]++] = E);
                            if (
                                (0 === t ? ((T = x = f), (m = 20)) : 1 === t ? ((T = n), (x = o), (m = 257)) : ((T = i), (x = a), (m = 0)),
                                    (k = 0),
                                    (E = 0),
                                    (w = v),
                                    (_ = u),
                                    (I = b),
                                    (F = 0),
                                    (y = -1),
                                    (g = (R = 1 << b) - 1),
                                    (1 === t && R > 852) || (2 === t && R > 592))
                            )
                                return 1;
                            for (; ;) {
                                (A = w - F), f[E] + 1 < m ? ((D = 0), (U = f[E])) : f[E] >= m ? ((D = x[f[E] - m]), (U = T[f[E] - m])) : ((D = 96), (U = 0)), (l = 1 << (w - F)), (v = d = 1 << I);
                                do c[_ + (k >> F) + (d -= l)] = (A << 24) | (D << 16) | U | 0;
                                while (0 !== d);
                                for (l = 1 << (w - 1); k & l;) l >>= 1;
                                if ((0 !== l ? ((k &= l - 1), (k += l)) : (k = 0), E++, 0 == --L[w])) {
                                    if (w === S) break;
                                    w = e[r + f[E]];
                                }
                                if (w > b && (k & g) !== y) {
                                    for (0 === F && (F = b), _ += v, O = 1 << (I = w - F); I + F < S && !((O -= L[I + F]) <= 0);) I++, (O <<= 1);
                                    if (((R += 1 << I), (1 === t && R > 852) || (2 === t && R > 592))) return 1;
                                    c[(y = k & g)] = (b << 24) | (I << 16) | (_ - u) | 0;
                                }
                            }
                            return 0 !== k && (c[_ + k] = ((w - F) << 24) | 4194304), (h.bits = b), 0;
                        };
                    },
                    function (t, e, r) {
                        let n = (t, e) => Object.prototype.hasOwnProperty.call(t, e);
                        (t.exports.assign = function (t) {
                            let e = Array.prototype.slice.call(arguments, 1);
                            for (; e.length;) {
                                let r = e.shift();
                                if (r) {
                                    if ("object" != typeof r) throw TypeError(r + "must be non-object");
                                    for (let e in r) n(r, e) && (t[e] = r[e]);
                                }
                            }
                            return t;
                        }),
                            (t.exports.flattenChunks = (t) => {
                                let e = 0;
                                for (let r = 0, n = t.length; r < n; r++) e += t[r].length;
                                let r = new Uint8Array(e);
                                for (let e = 0, n = 0, o = t.length; e < o; e++) {
                                    let o = t[e];
                                    r.set(o, n), (n += o.length);
                                }
                                return r;
                            });
                    },
                    function (t, e, r) {
                        let n = !0;
                        try {
                            String.fromCharCode.apply(null, new Uint8Array(1));
                        } catch (t) {
                            n = !1;
                        }
                        let o = new Uint8Array(256);
                        for (let t = 0; t < 256; t++) o[t] = t >= 252 ? 6 : t >= 248 ? 5 : t >= 240 ? 4 : t >= 224 ? 3 : t >= 192 ? 2 : 1;
                        (o[254] = o[254] = 1),
                            (t.exports.string2buf = (t) => {
                                if ("function" == typeof TextEncoder && TextEncoder.prototype.encode) return new TextEncoder().encode(t);
                                let e,
                                    r,
                                    n,
                                    o,
                                    i,
                                    a = t.length,
                                    s = 0;
                                for (o = 0; o < a; o++)
                                    55296 == (64512 & (r = t.charCodeAt(o))) && o + 1 < a && 56320 == (64512 & (n = t.charCodeAt(o + 1))) && ((r = 65536 + ((r - 55296) << 10) + (n - 56320)), o++),
                                        (s += r < 128 ? 1 : r < 2048 ? 2 : r < 65536 ? 3 : 4);
                                for (e = new Uint8Array(s), i = 0, o = 0; i < s; o++)
                                    55296 == (64512 & (r = t.charCodeAt(o))) && o + 1 < a && 56320 == (64512 & (n = t.charCodeAt(o + 1))) && ((r = 65536 + ((r - 55296) << 10) + (n - 56320)), o++),
                                        r < 128
                                            ? (e[i++] = r)
                                            : (r < 2048 ? (e[i++] = 192 | (r >>> 6)) : (r < 65536 ? (e[i++] = 224 | (r >>> 12)) : ((e[i++] = 240 | (r >>> 18)), (e[i++] = 128 | ((r >>> 12) & 63))), (e[i++] = 128 | ((r >>> 6) & 63))),
                                                (e[i++] = 128 | (63 & r)));
                                return e;
                            }),
                            (t.exports.buf2string = (t, e) => {
                                let r, i;
                                let a = e || t.length;
                                if ("function" == typeof TextDecoder && TextDecoder.prototype.decode) return new TextDecoder().decode(t.subarray(0, e));
                                let s = Array(2 * a);
                                for (i = 0, r = 0; r < a;) {
                                    let e = t[r++];
                                    if (e < 128) {
                                        s[i++] = e;
                                        continue;
                                    }
                                    let n = o[e];
                                    if (n > 4) (s[i++] = 65533), (r += n - 1);
                                    else {
                                        for (e &= 2 === n ? 31 : 3 === n ? 15 : 7; n > 1 && r < a;) (e = (e << 6) | (63 & t[r++])), n--;
                                        n > 1 ? (s[i++] = 65533) : e < 65536 ? (s[i++] = e) : ((e -= 65536), (s[i++] = 55296 | ((e >> 10) & 1023)), (s[i++] = 56320 | (1023 & e)));
                                    }
                                }
                                return ((t, e) => {
                                    if (e < 65534 && t.subarray && n) return String.fromCharCode.apply(null, t.length === e ? t : t.subarray(0, e));
                                    let r = "";
                                    for (let n = 0; n < e; n++) r += String.fromCharCode(t[n]);
                                    return r;
                                })(s, i);
                            }),
                            (t.exports.utf8border = (t, e) => {
                                (e = e || t.length) > t.length && (e = t.length);
                                let r = e - 1;
                                for (; r >= 0 && 128 == (192 & t[r]);) r--;
                                return r < 0 ? e : 0 === r ? e : r + o[t[r]] > e ? r : e;
                            });
                    },
                    function (t, e, r) {
                        t.exports = { 2: "need dictionary", 1: "stream end", 0: "", "-1": "file error", "-2": "stream error", "-3": "data error", "-4": "insufficient memory", "-5": "buffer error", "-6": "incompatible version" };
                    },
                    function (t, e, r) {
                        t.exports = function () {
                            (this.input = null),
                                (this.next_in = 0),
                                (this.avail_in = 0),
                                (this.total_in = 0),
                                (this.output = null),
                                (this.next_out = 0),
                                (this.avail_out = 0),
                                (this.total_out = 0),
                                (this.msg = ""),
                                (this.state = null),
                                (this.data_type = 2),
                                (this.adler = 0);
                        };
                    },
                    function (t, e, r) {
                        t.exports = function () {
                            (this.text = 0), (this.time = 0), (this.xflags = 0), (this.os = 0), (this.extra = null), (this.extra_len = 0), (this.name = ""), (this.comment = ""), (this.hcrc = 0), (this.done = !1);
                        };
                    },
                ]);
            }),
                (t.exports = n());
        },
    },
]);





// "use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2993],{2993:function(t,e,r){var n,o=r(48764).Buffer,i=r(34155);n=function(){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e||4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,(function(e){return t[e]}).bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=2)}([function(t,e,r){t.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_MEM_ERROR:-4,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},function(t,e){var r;r=function(){return this}();try{r=r||Function("return this")()||(0,eval)("this")}catch(t){r=window}t.exports=r},function(t,e,r){(function(t){var n,a=r(3),s=r(7);function c(t){var e=Object.create(null);return t&&Object.keys(t).forEach(function(r){if("default"!==r){var n=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(e,r,n.get?n:{enumerable:!0,get:function(){return t[r]}})}}),e.default=t,Object.freeze(e)}var u,f=c(a),h=c(s);(l=u||(u={}))[l.EPERM=1]="EPERM",l[l.ENOENT=2]="ENOENT",l[l.EIO=5]="EIO",l[l.EBADF=9]="EBADF",l[l.EACCES=13]="EACCES",l[l.EBUSY=16]="EBUSY",l[l.EEXIST=17]="EEXIST",l[l.ENOTDIR=20]="ENOTDIR",l[l.EISDIR=21]="EISDIR",l[l.EINVAL=22]="EINVAL",l[l.EFBIG=27]="EFBIG",l[l.ENOSPC=28]="ENOSPC",l[l.EROFS=30]="EROFS",l[l.ENOTEMPTY=39]="ENOTEMPTY",l[l.ENOTSUP=95]="ENOTSUP";var p={};p[u.EPERM]="Operation not permitted.",p[u.ENOENT]="No such file or directory.",p[u.EIO]="Input/output error.",p[u.EBADF]="Bad file descriptor.",p[u.EACCES]="Permission denied.",p[u.EBUSY]="Resource busy or locked.",p[u.EEXIST]="File exists.",p[u.ENOTDIR]="File is not a directory.",p[u.EISDIR]="File is a directory.",p[u.EINVAL]="Invalid argument.",p[u.EFBIG]="File is too big.",p[u.ENOSPC]="No space left on disk.",p[u.EROFS]="Cannot modify a read-only file system.",p[u.ENOTEMPTY]="Directory is not empty.",p[u.ENOTSUP]="Operation is not supported.";var l,d,y=function(t){function e(e,r,n){void 0===r&&(r=p[e]),t.call(this,r),this.syscall="",this.errno=e,this.code=u[e],this.path=n,this.stack=(new t).stack,this.message="Error: "+this.code+": "+r+(this.path?", '"+this.path+"'":"")}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.fromJSON=function(t){var r=new e(0);return r.errno=t.errno,r.code=t.code,r.path=t.path,r.stack=t.stack,r.message=t.message,r},e.fromBuffer=function(t,r){return void 0===r&&(r=0),e.fromJSON(JSON.parse(t.toString("utf8",r+4,r+4+t.readUInt32LE(r))))},e.FileError=function(t,r){return new e(t,p[t],r)},e.ENOENT=function(t){return this.FileError(u.ENOENT,t)},e.EEXIST=function(t){return this.FileError(u.EEXIST,t)},e.EISDIR=function(t){return this.FileError(u.EISDIR,t)},e.ENOTDIR=function(t){return this.FileError(u.ENOTDIR,t)},e.EPERM=function(t){return this.FileError(u.EPERM,t)},e.ENOTEMPTY=function(t){return this.FileError(u.ENOTEMPTY,t)},e.prototype.toString=function(){return this.message},e.prototype.toJSON=function(){return{errno:this.errno,code:this.code,path:this.path,stack:this.stack,message:this.message}},e.prototype.writeToBuffer=function(t,e){void 0===t&&(t=o.alloc(this.bufferSize())),void 0===e&&(e=0);var r=t.write(JSON.stringify(this.toJSON()),e+4);return t.writeUInt32LE(r,e),t},e.prototype.bufferSize=function(){return 4+o.byteLength(JSON.stringify(this.toJSON()))},e}(Error),g=Object.freeze({__proto__:null,ApiError:y,get ErrorCode(){return u},ErrorStrings:p});(_=d||(d={}))[_.NOP=0]="NOP",_[_.THROW_EXCEPTION=1]="THROW_EXCEPTION",_[_.TRUNCATE_FILE=2]="TRUNCATE_FILE",_[_.CREATE_FILE=3]="CREATE_FILE";var _,m,w=function t(e){if(this.flagStr=e,0>t.validFlagStrs.indexOf(e))throw new y(u.EINVAL,"Invalid flag: "+e)};w.getFileFlag=function(t){return w.flagCache.hasOwnProperty(t)?w.flagCache[t]:w.flagCache[t]=new w(t)},w.prototype.getFlagString=function(){return this.flagStr},w.prototype.isReadable=function(){return -1!==this.flagStr.indexOf("r")||-1!==this.flagStr.indexOf("+")},w.prototype.isWriteable=function(){return -1!==this.flagStr.indexOf("w")||-1!==this.flagStr.indexOf("a")||-1!==this.flagStr.indexOf("+")},w.prototype.isTruncating=function(){return -1!==this.flagStr.indexOf("w")},w.prototype.isAppendable=function(){return -1!==this.flagStr.indexOf("a")},w.prototype.isSynchronous=function(){return -1!==this.flagStr.indexOf("s")},w.prototype.isExclusive=function(){return -1!==this.flagStr.indexOf("x")},w.prototype.pathExistsAction=function(){return this.isExclusive()?d.THROW_EXCEPTION:this.isTruncating()?d.TRUNCATE_FILE:d.NOP},w.prototype.pathNotExistsAction=function(){return(this.isWriteable()||this.isAppendable())&&"r+"!==this.flagStr?d.CREATE_FILE:d.THROW_EXCEPTION},w.flagCache={},w.validFlagStrs=["r","r+","rs","rs+","w","wx","w+","wx+","a","ax","a+","ax+"],(S=m||(m={}))[S.FILE=32768]="FILE",S[S.DIRECTORY=16384]="DIRECTORY",S[S.SYMLINK=40960]="SYMLINK";var E=function(t,e,r,n,o,i,a){this.dev=0,this.ino=0,this.rdev=0,this.nlink=1,this.blksize=4096,this.uid=0,this.gid=0,this.fileData=null,this.size=e;var s=0;if("number"!=typeof n&&(n=s=Date.now()),"number"!=typeof o&&(s||(s=Date.now()),o=s),"number"!=typeof i&&(s||(s=Date.now()),i=s),"number"!=typeof a&&(s||(s=Date.now()),a=s),this.atimeMs=n,this.ctimeMs=i,this.mtimeMs=o,this.birthtimeMs=a,r)this.mode=r;else switch(t){case m.FILE:this.mode=420;break;case m.DIRECTORY:default:this.mode=511}this.blocks=Math.ceil(e/512),this.mode<4096&&(this.mode|=t)},v={atime:{configurable:!0},mtime:{configurable:!0},ctime:{configurable:!0},birthtime:{configurable:!0}};E.fromBuffer=function(t){var e=t.readUInt32LE(0),r=t.readUInt32LE(4);return new E(61440&r,e,4095&r,t.readDoubleLE(8),t.readDoubleLE(16),t.readDoubleLE(24))},E.clone=function(t){return new E(61440&t.mode,t.size,4095&t.mode,t.atimeMs,t.mtimeMs,t.ctimeMs,t.birthtimeMs)},v.atime.get=function(){return new Date(this.atimeMs)},v.mtime.get=function(){return new Date(this.mtimeMs)},v.ctime.get=function(){return new Date(this.ctimeMs)},v.birthtime.get=function(){return new Date(this.birthtimeMs)},E.prototype.toBuffer=function(){var t=o.alloc(32);return t.writeUInt32LE(this.size,0),t.writeUInt32LE(this.mode,4),t.writeDoubleLE(this.atime.getTime(),8),t.writeDoubleLE(this.mtime.getTime(),16),t.writeDoubleLE(this.ctime.getTime(),24),t},E.prototype.isFile=function(){return(61440&this.mode)===m.FILE},E.prototype.isDirectory=function(){return(61440&this.mode)===m.DIRECTORY},E.prototype.isSymbolicLink=function(){return(61440&this.mode)===m.SYMLINK},E.prototype.chmod=function(t){this.mode=61440&this.mode|t},E.prototype.isSocket=function(){return!1},E.prototype.isBlockDevice=function(){return!1},E.prototype.isCharacterDevice=function(){return!1},E.prototype.isFIFO=function(){return!1},Object.defineProperties(E.prototype,v);var S,b,I=window;if("undefined"!=typeof setImmediate)b=setImmediate;else{var F=[];if(function(){if(void 0!==I.importScripts||!I.postMessage)return!1;var t=!0,e=I.onmessage;return I.onmessage=function(){t=!1},I.postMessage("","*"),I.onmessage=e,t}()){b=function(t){F.push(t),I.postMessage("zero-timeout-message","*")};var O=function(t){if(t.source===self&&"zero-timeout-message"===t.data&&(t.stopPropagation?t.stopPropagation():t.cancelBubble=!0,F.length>0))return F.shift()()};I.addEventListener?I.addEventListener("message",O,!0):I.attachEvent("onmessage",O)}else if(I.MessageChannel){var R=new I.MessageChannel;R.port1.onmessage=function(t){if(F.length>0)return F.shift()()},b=function(t){F.push(t),R.port2.postMessage("")}}else b=function(t){return setTimeout(t,0)}}var k=b,T=function(t,e){return t};function L(t,e){if("function"!=typeof t)throw Error("Callback must be a function.");var r=T(t,e);switch(e){case 1:return function(t){k(function(){return r(t)})};case 2:return function(t,e){k(function(){return r(t,e)})};case 3:return function(t,e,n){k(function(){return r(t,e,n)})};default:throw Error("Invalid invocation of wrapCb.")}}function N(t){if(t)return t;throw new y(u.EIO,"Initialize BrowserFS with a file system using BrowserFS.initialize(filesystem)")}function A(t,e){switch(typeof t){case"number":return t;case"string":var r=parseInt(t,8);return isNaN(r)?e:r;default:return e}}function D(t){if(t instanceof Date)return t;if("number"==typeof t)return new Date(1e3*t);throw new y(u.EINVAL,"Invalid time.")}function U(t){if(t.indexOf("\0")>=0)throw new y(u.EINVAL,"Path must be a string without null bytes.");if(""===t)throw new y(u.EINVAL,"Path must not be empty.");return h.resolve(t)}function x(t,e,r,n){switch(null===t?"null":typeof t){case"object":return{encoding:void 0!==t.encoding?t.encoding:e,flag:void 0!==t.flag?t.flag:r,mode:A(t.mode,n)};case"string":return{encoding:t,flag:r,mode:n};case"null":case"undefined":case"function":return{encoding:e,flag:r,mode:n};default:throw TypeError('"options" must be a string or an object, got '+typeof t+" instead.")}}function P(){}var C=function(){this.F_OK=0,this.R_OK=4,this.W_OK=2,this.X_OK=1,this.root=null,this.fdMap={},this.nextFd=100};C.prototype.initialize=function(t){if(!t.constructor.isAvailable())throw new y(u.EINVAL,"Tried to instantiate BrowserFS with an unavailable file system.");return this.root=t},C.prototype._toUnixTimestamp=function(t){if("number"==typeof t)return t;if(t instanceof Date)return t.getTime()/1e3;throw Error("Cannot parse time: "+t)},C.prototype.getRootFS=function(){return this.root?this.root:null},C.prototype.rename=function(t,e,r){void 0===r&&(r=P);var n=L(r,1);try{N(this.root).rename(U(t),U(e),n)}catch(t){n(t)}},C.prototype.renameSync=function(t,e){N(this.root).renameSync(U(t),U(e))},C.prototype.exists=function(t,e){void 0===e&&(e=P);var r=L(e,1);try{return N(this.root).exists(U(t),r)}catch(t){return r(!1)}},C.prototype.existsSync=function(t){try{return N(this.root).existsSync(U(t))}catch(t){return!1}},C.prototype.stat=function(t,e){void 0===e&&(e=P);var r=L(e,2);try{return N(this.root).stat(U(t),!1,r)}catch(t){return r(t)}},C.prototype.statSync=function(t){return N(this.root).statSync(U(t),!1)},C.prototype.lstat=function(t,e){void 0===e&&(e=P);var r=L(e,2);try{return N(this.root).stat(U(t),!0,r)}catch(t){return r(t)}},C.prototype.lstatSync=function(t){return N(this.root).statSync(U(t),!0)},C.prototype.truncate=function(t,e,r){void 0===e&&(e=0),void 0===r&&(r=P);var n=0;"function"==typeof e?r=e:"number"==typeof e&&(n=e);var o=L(r,1);try{if(n<0)throw new y(u.EINVAL);return N(this.root).truncate(U(t),n,o)}catch(t){return o(t)}},C.prototype.truncateSync=function(t,e){if(void 0===e&&(e=0),e<0)throw new y(u.EINVAL);return N(this.root).truncateSync(U(t),e)},C.prototype.unlink=function(t,e){void 0===e&&(e=P);var r=L(e,1);try{return N(this.root).unlink(U(t),r)}catch(t){return r(t)}},C.prototype.unlinkSync=function(t){return N(this.root).unlinkSync(U(t))},C.prototype.open=function(t,e,r,n){var o=this;void 0===n&&(n=P);var i=A(r,420),a=L(n="function"==typeof r?r:n,2);try{N(this.root).open(U(t),w.getFileFlag(e),i,function(t,e){e?a(t,o.getFdForFile(e)):a(t)})}catch(t){a(t)}},C.prototype.openSync=function(t,e,r){return void 0===r&&(r=420),this.getFdForFile(N(this.root).openSync(U(t),w.getFileFlag(e),A(r,420)))},C.prototype.readFile=function(t,e,r){void 0===e&&(e={}),void 0===r&&(r=P);var n=x(e,null,"r",null),o=L(r="function"==typeof e?e:r,2);try{var i=w.getFileFlag(n.flag);return i.isReadable()?N(this.root).readFile(U(t),n.encoding,i,o):o(new y(u.EINVAL,"Flag passed to readFile must allow for reading."))}catch(t){return o(t)}},C.prototype.readFileSync=function(t,e){void 0===e&&(e={});var r=x(e,null,"r",null),n=w.getFileFlag(r.flag);if(!n.isReadable())throw new y(u.EINVAL,"Flag passed to readFile must allow for reading.");return N(this.root).readFileSync(U(t),r.encoding,n)},C.prototype.writeFile=function(t,e,r,n){void 0===r&&(r={}),void 0===n&&(n=P);var o=x(r,"utf8","w",420),i=L(n="function"==typeof r?r:n,1);try{var a=w.getFileFlag(o.flag);return a.isWriteable()?N(this.root).writeFile(U(t),e,o.encoding,a,o.mode,i):i(new y(u.EINVAL,"Flag passed to writeFile must allow for writing."))}catch(t){return i(t)}},C.prototype.writeFileSync=function(t,e,r){var n=x(r,"utf8","w",420),o=w.getFileFlag(n.flag);if(!o.isWriteable())throw new y(u.EINVAL,"Flag passed to writeFile must allow for writing.");return N(this.root).writeFileSync(U(t),e,n.encoding,o,n.mode)},C.prototype.appendFile=function(t,e,r,n){void 0===n&&(n=P);var o=x(r,"utf8","a",420),i=L(n="function"==typeof r?r:n,1);try{var a=w.getFileFlag(o.flag);if(!a.isAppendable())return i(new y(u.EINVAL,"Flag passed to appendFile must allow for appending."));N(this.root).appendFile(U(t),e,o.encoding,a,o.mode,i)}catch(t){i(t)}},C.prototype.appendFileSync=function(t,e,r){var n=x(r,"utf8","a",420),o=w.getFileFlag(n.flag);if(!o.isAppendable())throw new y(u.EINVAL,"Flag passed to appendFile must allow for appending.");return N(this.root).appendFileSync(U(t),e,n.encoding,o,n.mode)},C.prototype.fstat=function(t,e){void 0===e&&(e=P);var r=L(e,2);try{this.fd2file(t).stat(r)}catch(t){r(t)}},C.prototype.fstatSync=function(t){return this.fd2file(t).statSync()},C.prototype.close=function(t,e){var r=this;void 0===e&&(e=P);var n=L(e,1);try{this.fd2file(t).close(function(e){e||r.closeFd(t),n(e)})}catch(t){n(t)}},C.prototype.closeSync=function(t){this.fd2file(t).closeSync(),this.closeFd(t)},C.prototype.ftruncate=function(t,e,r){void 0===r&&(r=P);var n="number"==typeof e?e:0,o=L(r="function"==typeof e?e:r,1);try{var i=this.fd2file(t);if(n<0)throw new y(u.EINVAL);i.truncate(n,o)}catch(t){o(t)}},C.prototype.ftruncateSync=function(t,e){void 0===e&&(e=0);var r=this.fd2file(t);if(e<0)throw new y(u.EINVAL);r.truncateSync(e)},C.prototype.fsync=function(t,e){void 0===e&&(e=P);var r=L(e,1);try{this.fd2file(t).sync(r)}catch(t){r(t)}},C.prototype.fsyncSync=function(t){this.fd2file(t).syncSync()},C.prototype.fdatasync=function(t,e){void 0===e&&(e=P);var r=L(e,1);try{this.fd2file(t).datasync(r)}catch(t){r(t)}},C.prototype.fdatasyncSync=function(t){this.fd2file(t).datasyncSync()},C.prototype.write=function(t,e,r,n,i,a){void 0===a&&(a=P);var s,c,f,h=null;if("string"==typeof e){var p="utf8";switch(typeof r){case"function":a=r;break;case"number":h=r,p="string"==typeof n?n:"utf8",a="function"==typeof i?i:a;break;default:return(a="function"==typeof n?n:"function"==typeof i?i:a)(new y(u.EINVAL,"Invalid arguments."))}c=0,f=(s=o.from(e,p)).length}else s=e,c=r,f=n,h="number"==typeof i?i:null,a="function"==typeof i?i:a;var l=L(a,3);try{var d=this.fd2file(t);null!=h||(h=d.getPos()),d.write(s,c,f,h,l)}catch(t){l(t)}},C.prototype.writeSync=function(t,e,r,n,i){var a,s,c,u=0;"string"==typeof e?(c="number"==typeof r?r:null,u=0,s=(a=o.from(e,"string"==typeof n?n:"utf8")).length):(a=e,u=r,s=n,c="number"==typeof i?i:null);var f=this.fd2file(t);return null!=c||(c=f.getPos()),f.writeSync(a,u,s,c)},C.prototype.read=function(t,e,r,n,i,a){var s,c,u,f,h;(void 0===a&&(a=P),"number"==typeof e)?(u=e,s=r,a="function"==typeof i?i:a,c=0,f=o.alloc(u),h=L(function(t,e,r){if(t)return a(t);a(t,r.toString(n),e)},3)):(f=e,c=r,u=n,s=i,h=L(a,3));try{var p=this.fd2file(t);null!=s||(s=p.getPos()),p.read(f,c,u,s,h)}catch(t){h(t)}},C.prototype.readSync=function(t,e,r,n,i){var a,s,c,u,f=!1,h="utf8";"number"==typeof e?(c=e,u=r,h=n,s=0,a=o.alloc(c),f=!0):(a=e,s=r,c=n,u=i);var p=this.fd2file(t);null!=u||(u=p.getPos());var l=p.readSync(a,s,c,u);return f?[a.toString(h),l]:l},C.prototype.fchown=function(t,e,r,n){void 0===n&&(n=P);var o=L(n,1);try{this.fd2file(t).chown(e,r,o)}catch(t){o(t)}},C.prototype.fchownSync=function(t,e,r){this.fd2file(t).chownSync(e,r)},C.prototype.fchmod=function(t,e,r){var n=L(r,1);try{var o="string"==typeof e?parseInt(e,8):e;this.fd2file(t).chmod(o,n)}catch(t){n(t)}},C.prototype.fchmodSync=function(t,e){var r="string"==typeof e?parseInt(e,8):e;this.fd2file(t).chmodSync(r)},C.prototype.futimes=function(t,e,r,n){void 0===n&&(n=P);var o=L(n,1);try{var i=this.fd2file(t);"number"==typeof e&&(e=new Date(1e3*e)),"number"==typeof r&&(r=new Date(1e3*r)),i.utimes(e,r,o)}catch(t){o(t)}},C.prototype.futimesSync=function(t,e,r){this.fd2file(t).utimesSync(D(e),D(r))},C.prototype.rmdir=function(t,e){void 0===e&&(e=P);var r=L(e,1);try{t=U(t),N(this.root).rmdir(t,r)}catch(t){r(t)}},C.prototype.rmdirSync=function(t){return t=U(t),N(this.root).rmdirSync(t)},C.prototype.mkdir=function(t,e,r){void 0===r&&(r=P),"function"==typeof e&&(r=e,e=511);var n=L(r,1);try{t=U(t),N(this.root).mkdir(t,e,n)}catch(t){n(t)}},C.prototype.mkdirSync=function(t,e){N(this.root).mkdirSync(U(t),A(e,511))},C.prototype.readdir=function(t,e){void 0===e&&(e=P);var r=L(e,2);try{t=U(t),N(this.root).readdir(t,r)}catch(t){r(t)}},C.prototype.readdirSync=function(t){return t=U(t),N(this.root).readdirSync(t)},C.prototype.link=function(t,e,r){void 0===r&&(r=P);var n=L(r,1);try{t=U(t),e=U(e),N(this.root).link(t,e,n)}catch(t){n(t)}},C.prototype.linkSync=function(t,e){return t=U(t),e=U(e),N(this.root).linkSync(t,e)},C.prototype.symlink=function(t,e,r,n){void 0===n&&(n=P);var o="string"==typeof r?r:"file",i=L(n="function"==typeof r?r:n,1);try{if("file"!==o&&"dir"!==o)return i(new y(u.EINVAL,"Invalid type: "+o));t=U(t),e=U(e),N(this.root).symlink(t,e,o,i)}catch(t){i(t)}},C.prototype.symlinkSync=function(t,e,r){if(r){if("file"!==r&&"dir"!==r)throw new y(u.EINVAL,"Invalid type: "+r)}else r="file";return t=U(t),e=U(e),N(this.root).symlinkSync(t,e,r)},C.prototype.readlink=function(t,e){void 0===e&&(e=P);var r=L(e,2);try{t=U(t),N(this.root).readlink(t,r)}catch(t){r(t)}},C.prototype.readlinkSync=function(t){return t=U(t),N(this.root).readlinkSync(t)},C.prototype.chown=function(t,e,r,n){void 0===n&&(n=P);var o=L(n,1);try{t=U(t),N(this.root).chown(t,!1,e,r,o)}catch(t){o(t)}},C.prototype.chownSync=function(t,e,r){t=U(t),N(this.root).chownSync(t,!1,e,r)},C.prototype.lchown=function(t,e,r,n){void 0===n&&(n=P);var o=L(n,1);try{t=U(t),N(this.root).chown(t,!0,e,r,o)}catch(t){o(t)}},C.prototype.lchownSync=function(t,e,r){t=U(t),N(this.root).chownSync(t,!0,e,r)},C.prototype.chmod=function(t,e,r){void 0===r&&(r=P);var n=L(r,1);try{var o=A(e,-1);if(o<0)throw new y(u.EINVAL,"Invalid mode.");N(this.root).chmod(U(t),!1,o,n)}catch(t){n(t)}},C.prototype.chmodSync=function(t,e){var r=A(e,-1);if(r<0)throw new y(u.EINVAL,"Invalid mode.");t=U(t),N(this.root).chmodSync(t,!1,r)},C.prototype.lchmod=function(t,e,r){void 0===r&&(r=P);var n=L(r,1);try{var o=A(e,-1);if(o<0)throw new y(u.EINVAL,"Invalid mode.");N(this.root).chmod(U(t),!0,o,n)}catch(t){n(t)}},C.prototype.lchmodSync=function(t,e){var r=A(e,-1);if(r<1)throw new y(u.EINVAL,"Invalid mode.");N(this.root).chmodSync(U(t),!0,r)},C.prototype.utimes=function(t,e,r,n){void 0===n&&(n=P);var o=L(n,1);try{N(this.root).utimes(U(t),D(e),D(r),o)}catch(t){o(t)}},C.prototype.utimesSync=function(t,e,r){N(this.root).utimesSync(U(t),D(e),D(r))},C.prototype.realpath=function(t,e,r){void 0===r&&(r=P);var n=L(r="function"==typeof e?e:P,2);try{t=U(t),N(this.root).realpath(t,"object"==typeof e?e:{},n)}catch(t){n(t)}},C.prototype.realpathSync=function(t,e){return void 0===e&&(e={}),t=U(t),N(this.root).realpathSync(t,e)},C.prototype.watchFile=function(t,e,r){throw new y(u.ENOTSUP)},C.prototype.unwatchFile=function(t,e){throw new y(u.ENOTSUP)},C.prototype.watch=function(t,e,r){throw new y(u.ENOTSUP)},C.prototype.access=function(t,e,r){throw new y(u.ENOTSUP)},C.prototype.accessSync=function(t,e){throw new y(u.ENOTSUP)},C.prototype.createReadStream=function(t,e){throw new y(u.ENOTSUP)},C.prototype.createWriteStream=function(t,e){throw new y(u.ENOTSUP)},C.prototype.wrapCallbacks=function(t){T=t},C.prototype.getFdForFile=function(t){var e=this.nextFd++;return this.fdMap[e]=t,e},C.prototype.fd2file=function(t){var e=this.fdMap[t];if(e)return e;throw new y(u.EBADF,"Invalid file descriptor.")},C.prototype.closeFd=function(t){delete this.fdMap[t]},C.Stats=E;var B=new C,M={};function j(){throw Error("BFS has reached an impossible code path; please file a bug.")}function z(t){return t instanceof Uint8Array?t:new Uint8Array(t)}function Y(t){return t instanceof o?t:t instanceof Uint8Array?Z(t):o.from(t)}function Z(t){return t instanceof o?t:0===t.byteOffset&&t.byteLength===t.buffer.byteLength?H(t.buffer):o.from(t.buffer,t.byteOffset,t.byteLength)}function H(t){return o.from(t)}function V(t,e,r){if(void 0===e&&(e=0),void 0===r&&(r=t.length),e<0||r<0||r>t.length||e>r)throw TypeError("Invalid slice bounds on buffer of length "+t.length+": ["+e+", "+r+"]");if(0===t.length)return X();var n=z(t),o=t[0],i=(o+1)%255;return t[0]=i,n[0]===i?(n[0]=o,Z(n.slice(e,r))):(t[0]=o,Z(n.subarray(e,r)))}Object.keys(C.prototype).forEach(function(t){"function"==typeof B[t]?M[t]=function(){return B[t].apply(B,arguments)}:M[t]=B[t]}),M.changeFSModule=function(t){B=t},M.getFSModule=function(){return B},M.FS=C,M.Stats=C.Stats;var W=null;function X(){return W||(W=o.alloc(0))}function K(t,e){o.isBuffer(t)?e():e(new y(u.EINVAL,"option must be a Buffer."))}var q=Object.freeze({__proto__:null,arrayBuffer2Buffer:H,arrayish2Buffer:Y,buffer2ArrayBuffer:function(t){var e=z(t),r=e.byteOffset,n=e.byteLength;return 0===r&&n===e.buffer.byteLength?e.buffer:e.buffer.slice(r,r+n)},buffer2Uint8array:z,bufferValidator:K,copyingSlice:V,deprecationMessage:function(t,e,r){t&&console.warn("["+e+"] Direct file system constructor usage is deprecated for this file system, and will be removed in the next major version. Please use the '"+e+".Create("+JSON.stringify(r)+", callback)' method instead. See https://github.com/jvilk/BrowserFS/issues/176 for more details.")},emptyBuffer:X,fail:j,mkdirpSync:function t(e,r,n){n.existsSync(e)||(t(h.dirname(e),r,n),n.mkdirSync(e,r))},uint8Array2Buffer:Z}),G=function(){};G.prototype.supportsLinks=function(){return!1},G.prototype.diskSpace=function(t,e){e(0,0)},G.prototype.openFile=function(t,e,r){throw new y(u.ENOTSUP)},G.prototype.createFile=function(t,e,r,n){throw new y(u.ENOTSUP)},G.prototype.open=function(t,e,r,n){var o=this;this.stat(t,!1,function(i,a){if(i)switch(e.pathNotExistsAction()){case d.CREATE_FILE:return o.stat(h.dirname(t),!1,function(i,a){i?n(i):a&&!a.isDirectory()?n(y.ENOTDIR(h.dirname(t))):o.createFile(t,e,r,n)});case d.THROW_EXCEPTION:return n(y.ENOENT(t));default:return n(new y(u.EINVAL,"Invalid FileFlag object."))}else{if(a&&a.isDirectory())return n(y.EISDIR(t));switch(e.pathExistsAction()){case d.THROW_EXCEPTION:return n(y.EEXIST(t));case d.TRUNCATE_FILE:return o.openFile(t,e,function(t,e){t?n(t):e?e.truncate(0,function(){e.sync(function(){n(null,e)})}):j()});case d.NOP:return o.openFile(t,e,n);default:return n(new y(u.EINVAL,"Invalid FileFlag object."))}}})},G.prototype.rename=function(t,e,r){r(new y(u.ENOTSUP))},G.prototype.renameSync=function(t,e){throw new y(u.ENOTSUP)},G.prototype.stat=function(t,e,r){r(new y(u.ENOTSUP))},G.prototype.statSync=function(t,e){throw new y(u.ENOTSUP)},G.prototype.openFileSync=function(t,e,r){throw new y(u.ENOTSUP)},G.prototype.createFileSync=function(t,e,r){throw new y(u.ENOTSUP)},G.prototype.openSync=function(t,e,r){var n;try{n=this.statSync(t,!1)}catch(n){switch(e.pathNotExistsAction()){case d.CREATE_FILE:if(!this.statSync(h.dirname(t),!1).isDirectory())throw y.ENOTDIR(h.dirname(t));return this.createFileSync(t,e,r);case d.THROW_EXCEPTION:throw y.ENOENT(t);default:throw new y(u.EINVAL,"Invalid FileFlag object.")}}if(n.isDirectory())throw y.EISDIR(t);switch(e.pathExistsAction()){case d.THROW_EXCEPTION:throw y.EEXIST(t);case d.TRUNCATE_FILE:return this.unlinkSync(t),this.createFileSync(t,e,n.mode);case d.NOP:return this.openFileSync(t,e,r);default:throw new y(u.EINVAL,"Invalid FileFlag object.")}},G.prototype.unlink=function(t,e){e(new y(u.ENOTSUP))},G.prototype.unlinkSync=function(t){throw new y(u.ENOTSUP)},G.prototype.rmdir=function(t,e){e(new y(u.ENOTSUP))},G.prototype.rmdirSync=function(t){throw new y(u.ENOTSUP)},G.prototype.mkdir=function(t,e,r){r(new y(u.ENOTSUP))},G.prototype.mkdirSync=function(t,e){throw new y(u.ENOTSUP)},G.prototype.readdir=function(t,e){e(new y(u.ENOTSUP))},G.prototype.readdirSync=function(t){throw new y(u.ENOTSUP)},G.prototype.exists=function(t,e){this.stat(t,null,function(t){e(!t)})},G.prototype.existsSync=function(t){try{return this.statSync(t,!0),!0}catch(t){return!1}},G.prototype.realpath=function(t,e,r){if(this.supportsLinks())for(var n=t.split(h.sep),o=0;o<n.length;o++){var i=n.slice(0,o+1);n[o]=h.join.apply(null,i)}else this.exists(t,function(e){e?r(null,t):r(y.ENOENT(t))})},G.prototype.realpathSync=function(t,e){if(this.supportsLinks()){for(var r=t.split(h.sep),n=0;n<r.length;n++){var o=r.slice(0,n+1);r[n]=h.join.apply(h,o)}return r.join(h.sep)}if(this.existsSync(t))return t;throw y.ENOENT(t)},G.prototype.truncate=function(t,e,r){this.open(t,w.getFileFlag("r+"),420,function(t,n){if(t)return r(t);n.truncate(e,function(t){n.close(function(e){r(t||e)})})})},G.prototype.truncateSync=function(t,e){var r=this.openSync(t,w.getFileFlag("r+"),420);try{r.truncateSync(e)}catch(t){throw t}finally{r.closeSync()}},G.prototype.readFile=function(t,e,r,n){var i=n;this.open(t,r,420,function(t,r){if(t)return n(t);n=function(t,e){r.close(function(r){return t||(t=r),i(t,e)})},r.stat(function(t,i){if(t)return n(t);var a=o.alloc(i.size);r.read(a,0,i.size,0,function(t){if(t)return n(t);if(null===e)return n(t,a);try{n(null,a.toString(e))}catch(t){n(t)}})})})},G.prototype.readFileSync=function(t,e,r){var n=this.openSync(t,r,420);try{var i=n.statSync(),a=o.alloc(i.size);return n.readSync(a,0,i.size,0),n.closeSync(),null===e?a:a.toString(e)}finally{n.closeSync()}},G.prototype.writeFile=function(t,e,r,n,i,a){var s=a;this.open(t,n,420,function(t,n){if(t)return a(t);a=function(t){n.close(function(e){s(t||e)})};try{"string"==typeof e&&(e=o.from(e,r))}catch(t){return a(t)}n.write(e,0,e.length,0,a)})},G.prototype.writeFileSync=function(t,e,r,n,i){var a=this.openSync(t,n,i);try{"string"==typeof e&&(e=o.from(e,r)),a.writeSync(e,0,e.length,0)}finally{a.closeSync()}},G.prototype.appendFile=function(t,e,r,n,i,a){var s=a;this.open(t,n,i,function(t,n){if(t)return a(t);a=function(t){n.close(function(e){s(t||e)})},"string"==typeof e&&(e=o.from(e,r)),n.write(e,0,e.length,null,a)})},G.prototype.appendFileSync=function(t,e,r,n,i){var a=this.openSync(t,n,i);try{"string"==typeof e&&(e=o.from(e,r)),a.writeSync(e,0,e.length,null)}finally{a.closeSync()}},G.prototype.chmod=function(t,e,r,n){n(new y(u.ENOTSUP))},G.prototype.chmodSync=function(t,e,r){throw new y(u.ENOTSUP)},G.prototype.chown=function(t,e,r,n,o){o(new y(u.ENOTSUP))},G.prototype.chownSync=function(t,e,r,n){throw new y(u.ENOTSUP)},G.prototype.utimes=function(t,e,r,n){n(new y(u.ENOTSUP))},G.prototype.utimesSync=function(t,e,r){throw new y(u.ENOTSUP)},G.prototype.link=function(t,e,r){r(new y(u.ENOTSUP))},G.prototype.linkSync=function(t,e){throw new y(u.ENOTSUP)},G.prototype.symlink=function(t,e,r,n){n(new y(u.ENOTSUP))},G.prototype.symlinkSync=function(t,e,r){throw new y(u.ENOTSUP)},G.prototype.readlink=function(t,e){e(new y(u.ENOTSUP))},G.prototype.readlinkSync=function(t){throw new y(u.ENOTSUP)};var J=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.supportsSynch=function(){return!0},e.prototype.rename=function(t,e,r){try{this.renameSync(t,e),r()}catch(t){r(t)}},e.prototype.stat=function(t,e,r){try{r(null,this.statSync(t,e))}catch(t){r(t)}},e.prototype.open=function(t,e,r,n){try{n(null,this.openSync(t,e,r))}catch(t){n(t)}},e.prototype.unlink=function(t,e){try{this.unlinkSync(t),e()}catch(t){e(t)}},e.prototype.rmdir=function(t,e){try{this.rmdirSync(t),e()}catch(t){e(t)}},e.prototype.mkdir=function(t,e,r){try{this.mkdirSync(t,e),r()}catch(t){r(t)}},e.prototype.readdir=function(t,e){try{e(null,this.readdirSync(t))}catch(t){e(t)}},e.prototype.chmod=function(t,e,r,n){try{this.chmodSync(t,e,r),n()}catch(t){n(t)}},e.prototype.chown=function(t,e,r,n,o){try{this.chownSync(t,e,r,n),o()}catch(t){o(t)}},e.prototype.utimes=function(t,e,r,n){try{this.utimesSync(t,e,r),n()}catch(t){n(t)}},e.prototype.link=function(t,e,r){try{this.linkSync(t,e),r()}catch(t){r(t)}},e.prototype.symlink=function(t,e,r,n){try{this.symlinkSync(t,e,r),n()}catch(t){n(t)}},e.prototype.readlink=function(t,e){try{e(null,this.readlinkSync(t))}catch(t){e(t)}},e}(G),$=function(){};function Q(t,e){void 0===e&&(e="");for(var r=t.errno,n=t.node,o=[];n&&(o.unshift(n.name),n!==n.parent);)n=n.parent;return new y(r,p[r],o.length>0?"/"+o.join("/"):e)}$.prototype.sync=function(t){t(new y(u.ENOTSUP))},$.prototype.syncSync=function(){throw new y(u.ENOTSUP)},$.prototype.datasync=function(t){this.sync(t)},$.prototype.datasyncSync=function(){return this.syncSync()},$.prototype.chown=function(t,e,r){r(new y(u.ENOTSUP))},$.prototype.chownSync=function(t,e){throw new y(u.ENOTSUP)},$.prototype.chmod=function(t,e){e(new y(u.ENOTSUP))},$.prototype.chmodSync=function(t){throw new y(u.ENOTSUP)},$.prototype.utimes=function(t,e,r){r(new y(u.ENOTSUP))},$.prototype.utimesSync=function(t,e){throw new y(u.ENOTSUP)};var tt=function(t){function e(e,r,n,o){t.call(this),this._fs=e,this._FS=r,this._path=n,this._stream=o}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getPos=function(){},e.prototype.close=function(t){var e=null;try{this.closeSync()}catch(t){e=t}finally{t(e)}},e.prototype.closeSync=function(){try{this._FS.close(this._stream)}catch(t){throw Q(t,this._path)}},e.prototype.stat=function(t){try{t(null,this.statSync())}catch(e){t(e)}},e.prototype.statSync=function(){try{return this._fs.statSync(this._path,!1)}catch(t){throw Q(t,this._path)}},e.prototype.truncate=function(t,e){var r=null;try{this.truncateSync(t)}catch(t){r=t}finally{e(r)}},e.prototype.truncateSync=function(t){try{this._FS.ftruncate(this._stream.fd,t)}catch(t){throw Q(t,this._path)}},e.prototype.write=function(t,e,r,n,o){try{o(null,this.writeSync(t,e,r,n),t)}catch(t){o(t)}},e.prototype.writeSync=function(t,e,r,n){try{var o=z(t);return this._FS.write(this._stream,o,e,r,null===n?void 0:n)}catch(t){throw Q(t,this._path)}},e.prototype.read=function(t,e,r,n,o){try{o(null,this.readSync(t,e,r,n),t)}catch(t){o(t)}},e.prototype.readSync=function(t,e,r,n){try{var o=z(t);return this._FS.read(this._stream,o,e,r,null===n?void 0:n)}catch(t){throw Q(t,this._path)}},e.prototype.sync=function(t){t()},e.prototype.syncSync=function(){},e.prototype.chown=function(t,e,r){var n=null;try{this.chownSync(t,e)}catch(t){n=t}finally{r(n)}},e.prototype.chownSync=function(t,e){try{this._FS.fchown(this._stream.fd,t,e)}catch(t){throw Q(t,this._path)}},e.prototype.chmod=function(t,e){var r=null;try{this.chmodSync(t)}catch(t){r=t}finally{e(r)}},e.prototype.chmodSync=function(t){try{this._FS.fchmod(this._stream.fd,t)}catch(t){throw Q(t,this._path)}},e.prototype.utimes=function(t,e,r){var n=null;try{this.utimesSync(t,e)}catch(t){n=t}finally{r(n)}},e.prototype.utimesSync=function(t,e){this._fs.utimesSync(this._path,t,e)},e}($),te=function(t){function e(e){t.call(this),this._FS=e}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.Create=function(t,r){r(null,new e(t.FS))},e.isAvailable=function(){return!0},e.prototype.getName=function(){return this._FS.DB_NAME()},e.prototype.isReadOnly=function(){return!1},e.prototype.supportsLinks=function(){return!0},e.prototype.supportsProps=function(){return!0},e.prototype.supportsSynch=function(){return!0},e.prototype.renameSync=function(t,e){try{this._FS.rename(t,e)}catch(r){throw r.errno===u.ENOENT?Q(r,this.existsSync(t)?e:t):Q(r)}},e.prototype.statSync=function(t,e){try{var r=e?this._FS.lstat(t):this._FS.stat(t),n=this.modeToFileType(r.mode);return new E(n,r.size,r.mode,r.atime.getTime(),r.mtime.getTime(),r.ctime.getTime())}catch(e){throw Q(e,t)}},e.prototype.openSync=function(t,e,r){try{var n=this._FS.open(t,e.getFlagString(),r);if(this._FS.isDir(n.node.mode))throw this._FS.close(n),y.EISDIR(t);return new tt(this,this._FS,t,n)}catch(e){throw Q(e,t)}},e.prototype.unlinkSync=function(t){try{this._FS.unlink(t)}catch(e){throw Q(e,t)}},e.prototype.rmdirSync=function(t){try{this._FS.rmdir(t)}catch(e){throw Q(e,t)}},e.prototype.mkdirSync=function(t,e){try{this._FS.mkdir(t,e)}catch(e){throw Q(e,t)}},e.prototype.readdirSync=function(t){try{return this._FS.readdir(t).filter(function(t){return"."!==t&&".."!==t})}catch(e){throw Q(e,t)}},e.prototype.truncateSync=function(t,e){try{this._FS.truncate(t,e)}catch(e){throw Q(e,t)}},e.prototype.readFileSync=function(t,e,r){try{var n=Z(this._FS.readFile(t,{flags:r.getFlagString()}));return e?n.toString(e):n}catch(e){throw Q(e,t)}},e.prototype.writeFileSync=function(t,e,r,n,i){try{r&&(e=o.from(e,r));var a=z(e);this._FS.writeFile(t,a,{flags:n.getFlagString(),encoding:"binary"}),this._FS.chmod(t,i)}catch(e){throw Q(e,t)}},e.prototype.chmodSync=function(t,e,r){try{e?this._FS.lchmod(t,r):this._FS.chmod(t,r)}catch(e){throw Q(e,t)}},e.prototype.chownSync=function(t,e,r,n){try{e?this._FS.lchown(t,r,n):this._FS.chown(t,r,n)}catch(e){throw Q(e,t)}},e.prototype.symlinkSync=function(t,e,r){try{this._FS.symlink(t,e)}catch(t){throw Q(t)}},e.prototype.readlinkSync=function(t){try{return this._FS.readlink(t)}catch(e){throw Q(e,t)}},e.prototype.utimesSync=function(t,e,r){try{this._FS.utime(t,e.getTime(),r.getTime())}catch(e){throw Q(e,t)}},e.prototype.modeToFileType=function(t){if(this._FS.isDir(t))return m.DIRECTORY;if(this._FS.isFile(t))return m.FILE;if(this._FS.isLink(t))return m.SYMLINK;throw y.EPERM("Invalid mode: "+t)},e}(J);te.Name="EmscriptenFileSystem",te.Options={FS:{type:"object",description:"The Emscripten file system to use (the `FS` variable)"}};var tr=function(t){function e(e,r,n,o,i){if(t.call(this),this._pos=0,this._dirty=!1,this._fs=e,this._path=r,this._flag=n,this._stat=o,this._buffer=i||X(),this._stat.size!==this._buffer.length&&this._flag.isReadable())throw Error("Invalid buffer: Buffer is "+this._buffer.length+" long, yet Stats object specifies that file is "+this._stat.size+" long.")}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getBuffer=function(){return this._buffer},e.prototype.getStats=function(){return this._stat},e.prototype.getFlag=function(){return this._flag},e.prototype.getPath=function(){return this._path},e.prototype.getPos=function(){return this._flag.isAppendable()?this._stat.size:this._pos},e.prototype.advancePos=function(t){return this._pos+=t},e.prototype.setPos=function(t){return this._pos=t},e.prototype.sync=function(t){try{this.syncSync(),t()}catch(e){t(e)}},e.prototype.syncSync=function(){throw new y(u.ENOTSUP)},e.prototype.close=function(t){try{this.closeSync(),t()}catch(e){t(e)}},e.prototype.closeSync=function(){throw new y(u.ENOTSUP)},e.prototype.stat=function(t){try{t(null,E.clone(this._stat))}catch(e){t(e)}},e.prototype.statSync=function(){return E.clone(this._stat)},e.prototype.truncate=function(t,e){try{this.truncateSync(t),this._flag.isSynchronous()&&!M.getRootFS().supportsSynch()&&this.sync(e),e()}catch(t){return e(t)}},e.prototype.truncateSync=function(t){if(this._dirty=!0,!this._flag.isWriteable())throw new y(u.EPERM,"File not opened with a writeable mode.");if(this._stat.mtimeMs=Date.now(),t>this._buffer.length){var e=o.alloc(t-this._buffer.length,0);return this.writeSync(e,0,e.length,this._buffer.length),void(this._flag.isSynchronous()&&M.getRootFS().supportsSynch()&&this.syncSync())}this._stat.size=t;var r=o.alloc(t);this._buffer.copy(r,0,0,t),this._buffer=r,this._flag.isSynchronous()&&M.getRootFS().supportsSynch()&&this.syncSync()},e.prototype.write=function(t,e,r,n,o){try{o(null,this.writeSync(t,e,r,n),t)}catch(t){o(t)}},e.prototype.writeSync=function(t,e,r,n){if(this._dirty=!0,null!=n||(n=this.getPos()),!this._flag.isWriteable())throw new y(u.EPERM,"File not opened with a writeable mode.");var i=n+r;if(i>this._stat.size&&(this._stat.size=i,i>this._buffer.length)){var a=o.alloc(i);this._buffer.copy(a),this._buffer=a}var s=t.copy(this._buffer,n,e,e+r);return this._stat.mtimeMs=Date.now(),this._flag.isSynchronous()?this.syncSync():this.setPos(n+s),s},e.prototype.read=function(t,e,r,n,o){try{o(null,this.readSync(t,e,r,n),t)}catch(t){o(t)}},e.prototype.readSync=function(t,e,r,n){if(!this._flag.isReadable())throw new y(u.EPERM,"File not opened with a readable mode.");null!=n||(n=this.getPos()),n+r>this._stat.size&&(r=this._stat.size-n);var o=this._buffer.copy(t,e,n,n+r);return this._stat.atimeMs=Date.now(),this._pos=n+r,o},e.prototype.chmod=function(t,e){try{this.chmodSync(t),e()}catch(t){e(t)}},e.prototype.chmodSync=function(t){if(!this._fs.supportsProps())throw new y(u.ENOTSUP);this._dirty=!0,this._stat.chmod(t),this.syncSync()},e.prototype.isDirty=function(){return this._dirty},e.prototype.resetDirty=function(){this._dirty=!1},e}($),tn=function(t){function e(e,r,n,o,i){t.call(this,e,r,n,o,i)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.sync=function(t){t()},e.prototype.syncSync=function(){},e.prototype.close=function(t){t()},e.prototype.closeSync=function(){},e}(tr),to=function(t,e){return void 0===e&&(e=""),function(r){if("NotFoundError"===r.name)return t(y.ENOENT(e));t(r)}},ti=function(t){function e(e,r,n,o,i){t.call(this,e,r,n,o,i)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.sync=function(t){var e=this;this.isDirty()?this._fs._sync(this.getPath(),this.getBuffer(),this.getStats(),function(r){r||e.resetDirty(),t(r)}):t()},e.prototype.close=function(t){this.sync(t)},e}(tr),ta=function(t){function e(e){t.call(this),this._handles={"/":e}}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.Create=function(t,r){r(null,new e(t.handle))},e.isAvailable=function(){return"function"==typeof FileSystemHandle},e.prototype.getName=function(){return e.Name},e.prototype.isReadOnly=function(){return!1},e.prototype.supportsSymlinks=function(){return!1},e.prototype.supportsProps=function(){return!1},e.prototype.supportsSynch=function(){return!1},e.prototype._sync=function(t,e,r,n){var o=this;this.stat(t,!1,function(i,a){r.mtime!==a.mtime?o.writeFile(t,e,null,w.getFileFlag("w"),a.mode,n):n(i)})},e.prototype.rename=function(t,e,r){var n=this;this.getHandle(t,function(o,i){if(o)return r(o);i instanceof FileSystemDirectoryHandle&&n.readdir(t,function(o,i){if(void 0===i&&(i=[]),o)return r(o);n.mkdir(e,"wx",function(o){if(o)return r(o);0===i.length?n.unlink(t,r):i.forEach(function(o){return n.rename(s.join(t,o),s.join(e,o),function(){return n.unlink(t,r)})})})}),i instanceof FileSystemFileHandle&&i.getFile().then(function(o){return n.getHandle(s.dirname(e),function(i,a){if(i)return r(i);a instanceof FileSystemDirectoryHandle&&a.getFileHandle(s.basename(e),{create:!0}).then(function(i){return i.createWritable().then(function(i){return o.arrayBuffer().then(function(o){return i.write(o).then(function(){i.close(),n.unlink(t,r)}).catch(to(r,e))}).catch(to(r,t))}).catch(to(r,e))}).catch(to(r,e))})}).catch(to(r,t))})},e.prototype.writeFile=function(t,e,r,n,o,i,a){var c=this;this.getHandle(s.dirname(t),function(r,o){if(r)return i(r);o instanceof FileSystemDirectoryHandle&&o.getFileHandle(s.basename(t),{create:!0}).then(function(r){return r.createWritable().then(function(r){return r.write(e).then(function(){r.close().catch(to(i,t)),i(null,a?c.newFile(t,n,e):void 0)}).catch(to(i,t))}).catch(to(i,t))}).catch(to(i,t))})},e.prototype.createFile=function(t,e,r,n){this.writeFile(t,X(),null,e,r,n,!0)},e.prototype.stat=function(t,e,r){this.getHandle(t,function(e,n){return e?r(e):n?n instanceof FileSystemDirectoryHandle?r(null,new E(m.DIRECTORY,4096)):void(n instanceof FileSystemFileHandle&&n.getFile().then(function(t){var e=t.lastModified,n=t.size;return r(null,new E(m.FILE,n,void 0,void 0,e))}).catch(to(r,t))):r(y.FileError(u.EINVAL,t))})},e.prototype.exists=function(t,e){this.getHandle(t,function(t){return e(null===t)})},e.prototype.openFile=function(t,e,r){var n=this;this.getHandle(t,function(o,i){if(o)return r(o);i instanceof FileSystemFileHandle&&i.getFile().then(function(o){return o.arrayBuffer().then(function(i){return r(null,n.newFile(t,e,i,o.size,o.lastModified))}).catch(to(r,t))}).catch(to(r,t))})},e.prototype.unlink=function(t,e){this.getHandle(s.dirname(t),function(r,n){if(r)return e(r);n instanceof FileSystemDirectoryHandle&&n.removeEntry(s.basename(t),{recursive:!0}).then(function(){return e(null)}).catch(to(e,t))})},e.prototype.rmdir=function(t,e){this.unlink(t,e)},e.prototype.mkdir=function(t,e,r){var n=this,o=e&&e.flag&&e.flag.includes("w")&&!e.flag.includes("x");this.getHandle(t,function(e,i){if(i&&!o)return r(y.EEXIST(t));n.getHandle(s.dirname(t),function(e,n){if(e)return r(e);n instanceof FileSystemDirectoryHandle&&n.getDirectoryHandle(s.basename(t),{create:!0}).then(function(){return r(null)}).catch(to(r,t))})})},e.prototype.readdir=function(t,e){this.getHandle(t,function(r,n){var o,i,a;if(r)return e(r);n instanceof FileSystemDirectoryHandle&&(o=n.keys(),i=[],(a=function(){o.next().then(function(t){var r=t.done,n=t.value;if(r)return e(null,i);i.push(n),a()}).catch(to(e,t))})())})},e.prototype.newFile=function(t,e,r,n,i){return new ti(this,t,e,new E(m.FILE,n||0,void 0,void 0,i||(new Date).getTime()),o.from(r))},e.prototype.getHandle=function(t,e){var r=this;if("/"===t)return e(null,this._handles["/"]);var n="/",o=t.split("/").slice(1),i=function(o){var a=o[0],c=o.slice(1),f=s.join(n,a),h=function(o){if(n=f,r._handles[n]=o,0===c.length)return e(null,r._handles[t]);i(c)},p=r._handles[n];p.getDirectoryHandle(a).then(h).catch(function(t){"TypeMismatchError"===t.name?p.getFileHandle(a).then(h).catch(to(e,f)):"Name is not allowed."===t.message?e(new y(u.ENOENT,t.message,f)):to(e,f)(t)})};i(o)},e}(G);function ts(t,e,r){return t.toString("ascii",e,e+r).trim()}function tc(t,e,r){if(1===r)return String.fromCharCode(t[e]);for(var n=Math.floor(r/2),o=Array(n),i=0;i<n;i++){var a=e+(i<<1);o[i]=String.fromCharCode(t[a+1]|t[a]<<8)}return o.join("")}function tu(t,e){return new Date(parseInt(ts(t,e,4),10),parseInt(ts(t,e+4,2),10),parseInt(ts(t,e+6,2),10),parseInt(ts(t,e+8,2),10),parseInt(ts(t,e+10,2),10),parseInt(ts(t,e+12,2),10),100*parseInt(ts(t,e+14,2),10))}function tf(t,e){return new Date(t[e],t[e+1]-1,t[e+2],t[e+3],t[e+4],t[e+5])}function th(t,e,r,n){r-=4;for(var o=[];e<r;){var i=function(t,e){var r=t.slice(e),n=new tw(r);switch(n.signatureWord()){case 17221:return new tE(r);case 20548:return new tv(r);case 21328:return new tS(r);case 21332:return new tb(r);case 17746:return new tI(r);case 17747:return new tF(r);case 20568:return new tR(r);case 20558:return new tk(r);case 21324:return new tT(r);case 20045:return new tN(r);case 17228:return new tA(r);case 20556:return new tD(r);case 21061:return new tU(r);case 21574:return new tx(r);case 21318:return new tP(r);case 21074:return new tO(r);default:return n}}(t,e),a=i.length();if(0===a||(e+=a,i instanceof tb))break;i instanceof tE?o=o.concat(i.getEntries(n)):o.push(i)}return o}ta.Name="FileSystemAccess",ta.Options={};var tp=function(t){this._data=t};tp.prototype.type=function(){return this._data[0]},tp.prototype.standardIdentifier=function(){return ts(this._data,1,5)},tp.prototype.version=function(){return this._data[6]},tp.prototype.data=function(){return this._data.slice(7,2048)};var tl=function(t){function e(e){t.call(this,e),this._root=null}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.systemIdentifier=function(){return this._getString32(8)},e.prototype.volumeIdentifier=function(){return this._getString32(40)},e.prototype.volumeSpaceSize=function(){return this._data.readUInt32LE(80)},e.prototype.volumeSetSize=function(){return this._data.readUInt16LE(120)},e.prototype.volumeSequenceNumber=function(){return this._data.readUInt16LE(124)},e.prototype.logicalBlockSize=function(){return this._data.readUInt16LE(128)},e.prototype.pathTableSize=function(){return this._data.readUInt32LE(132)},e.prototype.locationOfTypeLPathTable=function(){return this._data.readUInt32LE(140)},e.prototype.locationOfOptionalTypeLPathTable=function(){return this._data.readUInt32LE(144)},e.prototype.locationOfTypeMPathTable=function(){return this._data.readUInt32BE(148)},e.prototype.locationOfOptionalTypeMPathTable=function(){return this._data.readUInt32BE(152)},e.prototype.rootDirectoryEntry=function(t){return null===this._root&&(this._root=this._constructRootDirectoryRecord(this._data.slice(156)),this._root.rootCheckForRockRidge(t)),this._root},e.prototype.volumeSetIdentifier=function(){return this._getString(190,128)},e.prototype.publisherIdentifier=function(){return this._getString(318,128)},e.prototype.dataPreparerIdentifier=function(){return this._getString(446,128)},e.prototype.applicationIdentifier=function(){return this._getString(574,128)},e.prototype.copyrightFileIdentifier=function(){return this._getString(702,38)},e.prototype.abstractFileIdentifier=function(){return this._getString(740,36)},e.prototype.bibliographicFileIdentifier=function(){return this._getString(776,37)},e.prototype.volumeCreationDate=function(){return tu(this._data,813)},e.prototype.volumeModificationDate=function(){return tu(this._data,830)},e.prototype.volumeExpirationDate=function(){return tu(this._data,847)},e.prototype.volumeEffectiveDate=function(){return tu(this._data,864)},e.prototype.fileStructureVersion=function(){return this._data[881]},e.prototype.applicationUsed=function(){return this._data.slice(883,1395)},e.prototype.reserved=function(){return this._data.slice(1395,2048)},e.prototype._getString32=function(t){return this._getString(t,32)},e}(tp),td=function(t){function e(e){if(t.call(this,e),1!==this.type())throw new y(u.EIO,"Invalid primary volume descriptor.")}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.name=function(){return"ISO9660"},e.prototype._constructRootDirectoryRecord=function(t){return new t_(t,-1)},e.prototype._getString=function(t,e){return this._getString(t,e)},e}(tl),ty=function(t){function e(e){if(t.call(this,e),2!==this.type())throw new y(u.EIO,"Invalid supplementary volume descriptor.");var r=this.escapeSequence(),n=r[2];if(37!==r[0]||47!==r[1]||64!==n&&67!==n&&69!==n)throw new y(u.EIO,"Unrecognized escape sequence for SupplementaryVolumeDescriptor: "+r.toString())}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.name=function(){return"Joliet"},e.prototype.escapeSequence=function(){return this._data.slice(88,120)},e.prototype._constructRootDirectoryRecord=function(t){return new tm(t,-1)},e.prototype._getString=function(t,e){return tc(this._data,t,e)},e}(tl),tg=function(t,e){this._suEntries=null,this._fileOrDir=null,this._data=t,this._rockRidgeOffset=e};tg.prototype.hasRockRidge=function(){return this._rockRidgeOffset>-1},tg.prototype.getRockRidgeOffset=function(){return this._rockRidgeOffset},tg.prototype.rootCheckForRockRidge=function(t){var e=this.getDirectory(t);this._rockRidgeOffset=e.getDotEntry(t)._getRockRidgeOffset(t),this._rockRidgeOffset>-1&&(this._fileOrDir=null)},tg.prototype.length=function(){return this._data[0]},tg.prototype.extendedAttributeRecordLength=function(){return this._data[1]},tg.prototype.lba=function(){return 2048*this._data.readUInt32LE(2)},tg.prototype.dataLength=function(){return this._data.readUInt32LE(10)},tg.prototype.recordingDate=function(){return tf(this._data,18)},tg.prototype.fileFlags=function(){return this._data[25]},tg.prototype.fileUnitSize=function(){return this._data[26]},tg.prototype.interleaveGapSize=function(){return this._data[27]},tg.prototype.volumeSequenceNumber=function(){return this._data.readUInt16LE(28)},tg.prototype.identifier=function(){return this._getString(33,this._data[32])},tg.prototype.fileName=function(t){if(this.hasRockRidge()){var e=this._rockRidgeFilename(t);if(null!==e)return e}var r=this.identifier();if(this.isDirectory(t))return r;var n=r.indexOf(";");return -1===n?r:"."===r[n-1]?r.slice(0,n-1):r.slice(0,n)},tg.prototype.isDirectory=function(t){var e=!!(2&this.fileFlags());return!e&&this.hasRockRidge()&&(e=this.getSUEntries(t).filter(function(t){return t instanceof tA}).length>0),e},tg.prototype.isSymlink=function(t){return this.hasRockRidge()&&this.getSUEntries(t).filter(function(t){return t instanceof tT}).length>0},tg.prototype.getSymlinkPath=function(t){for(var e="",r=this.getSUEntries(t),n=this._getGetString(),o=0;o<r.length;o+=1){var i=r[o];if(i instanceof tT){for(var a=0,s=i.componentRecords();a<s.length;a+=1){var c=s[a],u=c.flags();2&u?e+="./":4&u?e+="../":8&u?e+="/":(e+=c.content(n),1&u||(e+="/"))}if(!i.continueFlag())break}}return e.length>1&&"/"===e[e.length-1]?e.slice(0,e.length-1):e},tg.prototype.getFile=function(t){if(this.isDirectory(t))throw Error("Tried to get a File from a directory.");return null===this._fileOrDir&&(this._fileOrDir=t.slice(this.lba(),this.lba()+this.dataLength())),this._fileOrDir},tg.prototype.getDirectory=function(t){if(!this.isDirectory(t))throw Error("Tried to get a Directory from a file.");return null===this._fileOrDir&&(this._fileOrDir=this._constructDirectory(t)),this._fileOrDir},tg.prototype.getSUEntries=function(t){return this._suEntries||this._constructSUEntries(t),this._suEntries},tg.prototype._rockRidgeFilename=function(t){var e=this.getSUEntries(t).filter(function(t){return t instanceof tN});if(0===e.length||6&e[0].flags())return null;for(var r="",n=this._getGetString(),o=0;o<e.length;o+=1){var i=e[o];if(r+=i.name(n),!(1&i.flags()))break}return r},tg.prototype._constructSUEntries=function(t){var e=33+this._data[32];e%2==1&&e++,e+=this._rockRidgeOffset,this._suEntries=th(this._data,e,this.length(),t)},tg.prototype._getRockRidgeOffset=function(t){this._rockRidgeOffset=0;var e=this.getSUEntries(t);if(e.length>0){var r=e[0];if(r instanceof tS&&r.checkBytesPass())for(var n=1;n<e.length;n++){var o=e[n];if(o instanceof tO||o instanceof tI&&"IEEE_P1282"===o.extensionIdentifier())return r.bytesSkipped()}}return this._rockRidgeOffset=-1,-1};var t_=function(t){function e(e,r){t.call(this,e,r)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype._getString=function(t,e){return ts(this._data,t,e)},e.prototype._constructDirectory=function(t){return new tB(this,t)},e.prototype._getGetString=function(){return ts},e}(tg),tm=function(t){function e(e,r){t.call(this,e,r)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype._getString=function(t,e){return tc(this._data,t,e)},e.prototype._constructDirectory=function(t){return new tM(this,t)},e.prototype._getGetString=function(){return tc},e}(tg),tw=function(t){this._data=t};tw.prototype.signatureWord=function(){return this._data.readUInt16BE(0)},tw.prototype.signatureWordString=function(){return ts(this._data,0,2)},tw.prototype.length=function(){return this._data[2]},tw.prototype.suVersion=function(){return this._data[3]};var tE=function(t){function e(e){t.call(this,e),this._entries=null}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.continuationLba=function(){return this._data.readUInt32LE(4)},e.prototype.continuationLbaOffset=function(){return this._data.readUInt32LE(12)},e.prototype.continuationLength=function(){return this._data.readUInt32LE(20)},e.prototype.getEntries=function(t){if(!this._entries){var e=2048*this.continuationLba()+this.continuationLbaOffset();this._entries=th(t,e,this.continuationLength(),t)}return this._entries},e}(tw),tv=function(t){function e(e){t.call(this,e)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e}(tw),tS=function(t){function e(e){t.call(this,e)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.checkBytesPass=function(){return 190===this._data[4]&&239===this._data[5]},e.prototype.bytesSkipped=function(){return this._data[6]},e}(tw),tb=function(t){function e(e){t.call(this,e)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e}(tw),tI=function(t){function e(e){t.call(this,e)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.identifierLength=function(){return this._data[4]},e.prototype.descriptorLength=function(){return this._data[5]},e.prototype.sourceLength=function(){return this._data[6]},e.prototype.extensionVersion=function(){return this._data[7]},e.prototype.extensionIdentifier=function(){return ts(this._data,8,this.identifierLength())},e.prototype.extensionDescriptor=function(){return ts(this._data,8+this.identifierLength(),this.descriptorLength())},e.prototype.extensionSource=function(){return ts(this._data,8+this.identifierLength()+this.descriptorLength(),this.sourceLength())},e}(tw),tF=function(t){function e(e){t.call(this,e)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.extensionSequence=function(){return this._data[4]},e}(tw),tO=function(t){function e(e){t.call(this,e)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e}(tw),tR=function(t){function e(e){t.call(this,e)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.mode=function(){return this._data.readUInt32LE(4)},e.prototype.fileLinks=function(){return this._data.readUInt32LE(12)},e.prototype.uid=function(){return this._data.readUInt32LE(20)},e.prototype.gid=function(){return this._data.readUInt32LE(28)},e.prototype.inode=function(){return this._data.readUInt32LE(36)},e}(tw),tk=function(t){function e(e){t.call(this,e)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.devTHigh=function(){return this._data.readUInt32LE(4)},e.prototype.devTLow=function(){return this._data.readUInt32LE(12)},e}(tw),tT=function(t){function e(e){t.call(this,e)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.flags=function(){return this._data[4]},e.prototype.continueFlag=function(){return 1&this.flags()},e.prototype.componentRecords=function(){for(var t=[],e=5;e<this.length();){var r=new tL(this._data.slice(e));t.push(r),e+=r.length()}return t},e}(tw),tL=function(t){this._data=t};tL.prototype.flags=function(){return this._data[0]},tL.prototype.length=function(){return 2+this.componentLength()},tL.prototype.componentLength=function(){return this._data[1]},tL.prototype.content=function(t){return t(this._data,2,this.componentLength())};var tN=function(t){function e(e){t.call(this,e)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.flags=function(){return this._data[4]},e.prototype.name=function(t){return t(this._data,5,this.length()-5)},e}(tw),tA=function(t){function e(e){t.call(this,e)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.childDirectoryLba=function(){return this._data.readUInt32LE(4)},e}(tw),tD=function(t){function e(e){t.call(this,e)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.parentDirectoryLba=function(){return this._data.readUInt32LE(4)},e}(tw),tU=function(t){function e(e){t.call(this,e)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e}(tw),tx=function(t){function e(e){t.call(this,e)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.flags=function(){return this._data[4]},e.prototype.creation=function(){return 1&this.flags()?this._longFormDates()?tu(this._data,5):tf(this._data,5):null},e.prototype.modify=function(){if(2&this.flags()){var t=1&this.flags()?1:0;return this._longFormDates()?tu(this._data,5+17*t):tf(this._data,5+7*t)}return null},e.prototype.access=function(){if(4&this.flags()){var t=1&this.flags()?1:0;return t+=2&this.flags()?1:0,this._longFormDates()?tu(this._data,5+17*t):tf(this._data,5+7*t)}return null},e.prototype.backup=function(){if(16&this.flags()){var t=1&this.flags()?1:0;return t+=(2&this.flags()?1:0)+(4&this.flags()?1:0),this._longFormDates()?tu(this._data,5+17*t):tf(this._data,5+7*t)}return null},e.prototype.expiration=function(){if(32&this.flags()){var t=1&this.flags()?1:0;return t+=(2&this.flags()?1:0)+(4&this.flags()?1:0)+(16&this.flags()?1:0),this._longFormDates()?tu(this._data,5+17*t):tf(this._data,5+7*t)}return null},e.prototype.effective=function(){if(64&this.flags()){var t=1&this.flags()?1:0;return t+=(2&this.flags()?1:0)+(4&this.flags()?1:0)+(16&this.flags()?1:0)+(32&this.flags()?1:0),this._longFormDates()?tu(this._data,5+17*t):tf(this._data,5+7*t)}return null},e.prototype._longFormDates=function(){return!!this.flags()},e}(tw),tP=function(t){function e(e){t.call(this,e)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.virtualSizeHigh=function(){return this._data.readUInt32LE(4)},e.prototype.virtualSizeLow=function(){return this._data.readUInt32LE(12)},e.prototype.tableDepth=function(){return this._data[20]},e}(tw),tC=function(t,e){this._fileList=[],this._fileMap={},this._record=t;var r=t.lba(),n=r+t.dataLength();for(2&t.fileFlags()||(r=2048*t.getSUEntries(e).filter(function(t){return t instanceof tA})[0].childDirectoryLba(),n=1/0);r<n;)if(0!==e[r]){var o=this._constructDirectoryRecord(e.slice(r)),i=o.fileName(e);"\0"!==i&&"\x01"!==i?o.hasRockRidge()&&0!==o.getSUEntries(e).filter(function(t){return t instanceof tU}).length||(this._fileMap[i]=o,this._fileList.push(i)):n===1/0&&(n=r+o.dataLength()),r+=o.length()}else r++};tC.prototype.getRecord=function(t){return this._fileMap[t]},tC.prototype.getFileList=function(){return this._fileList},tC.prototype.getDotEntry=function(t){return this._constructDirectoryRecord(t.slice(this._record.lba()))};var tB=function(t){function e(e,r){t.call(this,e,r)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype._constructDirectoryRecord=function(t){return new t_(t,this._record.getRockRidgeOffset())},e}(tC),tM=function(t){function e(e,r){t.call(this,e,r)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype._constructDirectoryRecord=function(t){return new tm(t,this._record.getRockRidgeOffset())},e}(tC),tj=function(t){function e(e,r){var n=this;void 0===r&&(r=""),t.call(this),this._data=e;for(var o=!1,i=32768,a=[];!o;){var s=e.slice(i);switch(new tp(s).type()){case 1:a.push(new td(s));break;case 2:a.push(new ty(s));break;case 255:o=!0}i+=2048}if(0===a.length)throw new y(u.EIO,"Unable to find a suitable volume descriptor.");a.forEach(function(t){n._pvd&&2===n._pvd.type()||(n._pvd=t)}),this._root=this._pvd.rootDirectoryEntry(e),this._name=r}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.Create=function(t,r){try{r(null,new e(t.data,t.name))}catch(t){r(t)}},e.isAvailable=function(){return!0},e.prototype.getName=function(){var t="IsoFS"+this._name+(this._pvd?"-"+this._pvd.name():"");return this._root&&this._root.hasRockRidge()&&(t+="-RockRidge"),t},e.prototype.diskSpace=function(t,e){e(this._data.length,0)},e.prototype.isReadOnly=function(){return!0},e.prototype.supportsLinks=function(){return!1},e.prototype.supportsProps=function(){return!1},e.prototype.supportsSynch=function(){return!0},e.prototype.statSync=function(t,e){var r=this._getDirectoryRecord(t);if(null===r)throw y.ENOENT(t);return this._getStats(t,r)},e.prototype.openSync=function(t,e,r){if(e.isWriteable())throw new y(u.EPERM,t);var n=this._getDirectoryRecord(t);if(!n)throw y.ENOENT(t);if(n.isSymlink(this._data))return this.openSync(h.resolve(t,n.getSymlinkPath(this._data)),e,r);if(n.isDirectory(this._data))throw y.EISDIR(t);var o=n.getFile(this._data),i=this._getStats(t,n);switch(e.pathExistsAction()){case d.THROW_EXCEPTION:case d.TRUNCATE_FILE:throw y.EEXIST(t);case d.NOP:return new tn(this,t,e,i,o);default:throw new y(u.EINVAL,"Invalid FileMode object.")}},e.prototype.readdirSync=function(t){var e=this._getDirectoryRecord(t);if(e){if(e.isDirectory(this._data))return e.getDirectory(this._data).getFileList().slice(0);throw y.ENOTDIR(t)}throw y.ENOENT(t)},e.prototype.readFileSync=function(t,e,r){var n=this.openSync(t,r,420);try{var o=n.getBuffer();return null===e?V(o):o.toString(e)}finally{n.closeSync()}},e.prototype._getDirectoryRecord=function(t){if("/"===t)return this._root;for(var e=t.split("/").slice(1),r=this._root,n=0;n<e.length;n+=1){var o=e[n];if(!r.isDirectory(this._data)||!(r=r.getDirectory(this._data).getRecord(o)))return null}return r},e.prototype._getStats=function(t,e){if(e.isSymlink(this._data)){var r=h.resolve(t,e.getSymlinkPath(this._data)),n=this._getDirectoryRecord(r);return n?this._getStats(r,n):null}var o=e.dataLength(),i=365,a=e.recordingDate().getTime(),s=a,c=a,u=a;if(e.hasRockRidge())for(var f=0,p=e.getSUEntries(this._data);f<p.length;f+=1){var l=p[f];if(l instanceof tR)i=l.mode();else if(l instanceof tx){var d=l.flags();4&d&&(s=l.access().getTime()),2&d&&(c=l.modify().getTime()),1&d&&(u=l.creation().getTime())}}return i&=365,new E(e.isDirectory(this._data)?m.DIRECTORY:m.FILE,o,i,s,c,u)},e}(J);tj.Name="IsoFS",tj.Options={data:{type:"object",description:"The ISO file in a buffer",validator:K}};var tz=function(){};tz.str2byte=function(t,e){for(var r=t.length>e.length?e.length:t.length,n=0;n<r;n++){var o=t.charCodeAt(n);if(o>127){var i=tz.extendedChars.indexOf(t.charAt(n));i>-1&&(o=i+128)}e[o]=n}return r},tz.byte2str=function(t){for(var e=Array(t.length),r=0;r<t.length;r++){var n=t[r];e[r]=n>127?tz.extendedChars[n-128]:String.fromCharCode(n)}return e.join("")},tz.byteLength=function(t){return t.length},tz.extendedChars=["\xc7","\xfc","\xe9","\xe2","\xe4","\xe0","\xe5","\xe7","\xea","\xeb","\xe8","\xef","\xee","\xec","\xc4","\xc5","\xc9","\xe6","\xc6","\xf4","\xf6","\xf2","\xfb","\xf9","\xff","\xd6","\xdc","\xf8","\xa3","\xd8","\xd7","ƒ","\xe1","\xed","\xf3","\xfa","\xf1","\xd1","\xaa","\xba","\xbf","\xae","\xac","\xbd","\xbc","\xa1","\xab","\xbb","_","_","_","\xa6","\xa6","\xc1","\xc2","\xc0","\xa9","\xa6","\xa6","+","+","\xa2","\xa5","+","+","-","-","+","-","+","\xe3","\xc3","+","+","-","-","\xa6","-","+","\xa4","\xf0","\xd0","\xca","\xcb","\xc8","i","\xcd","\xce","\xcf","+","+","_","_","\xa6","\xcc","_","\xd3","\xdf","\xd4","\xd2","\xf5","\xd5","\xb5","\xfe","\xde","\xda","\xdb","\xd9","\xfd","\xdd","\xaf","\xb4","\xad","\xb1","_","\xbe","\xb6","\xa7","\xf7","\xb8","\xb0","\xa8","\xb7","\xb9","\xb3","\xb2","_"," "];var tY=function(){this._index={},this.addPath("/",new tH)};tY.fromListing=function(t){var e=new tY,r=new tH;e._index["/"]=r;for(var n=[["",t,r]];n.length>0;){var o=void 0,i=n.pop(),a=i[0],s=i[1],c=i[2];for(var u in s)if(s.hasOwnProperty(u)){var f=s[u],h=a+"/"+u;f?(e._index[h]=o=new tH,n.push([h,f,o])):o=new tZ(new E(m.FILE,-1,365)),c&&(c._ls[u]=o)}}return e},tY.prototype.fileIterator=function(t){for(var e in this._index)if(this._index.hasOwnProperty(e))for(var r=this._index[e],n=0,o=r.getListing();n<o.length;n+=1){var i=o[n],a=r.getItem(i);tV(a)&&t(a.getData())}},tY.prototype.addPath=function(t,e){if(!e)throw Error("Inode must be specified");if("/"!==t[0])throw Error("Path must be absolute, got: "+t);if(this._index.hasOwnProperty(t))return this._index[t]===e;var r=this._split_path(t),n=r[0],o=r[1],i=this._index[n];return!(void 0===i&&"/"!==t&&(i=new tH,!this.addPath(n,i)))&&!("/"!==t&&!i.addItem(o,e))&&(tW(e)&&(this._index[t]=e),!0)},tY.prototype.addPathFast=function(t,e){var r=t.lastIndexOf("/"),n=0===r?"/":t.substring(0,r),o=t.substring(r+1),i=this._index[n];return void 0===i&&(i=new tH,this.addPathFast(n,i)),!!i.addItem(o,e)&&(e.isDir()&&(this._index[t]=e),!0)},tY.prototype.removePath=function(t){var e=this._split_path(t),r=e[0],n=e[1],o=this._index[r];if(void 0===o)return null;var i=o.remItem(n);if(null===i)return null;if(tW(i)){for(var a=0,s=i.getListing();a<s.length;a+=1){var c=s[a];this.removePath(t+"/"+c)}"/"!==t&&delete this._index[t]}return i},tY.prototype.ls=function(t){var e=this._index[t];return void 0===e?null:e.getListing()},tY.prototype.getInode=function(t){var e=this._split_path(t),r=e[0],n=e[1],o=this._index[r];return void 0===o?null:r===t?o:o.getItem(n)},tY.prototype._split_path=function(t){var e=h.dirname(t);return[e,t.substr(e.length+("/"===e?0:1))]};var tZ=function(t){this.data=t};tZ.prototype.isFile=function(){return!0},tZ.prototype.isDir=function(){return!1},tZ.prototype.getData=function(){return this.data},tZ.prototype.setData=function(t){this.data=t};var tH=function(t){void 0===t&&(t=null),this.data=t,this._ls={}};function tV(t){return!!t&&t.isFile()}function tW(t){return!!t&&t.isDir()}tH.prototype.isFile=function(){return!1},tH.prototype.isDir=function(){return!0},tH.prototype.getData=function(){return this.data},tH.prototype.getStats=function(){return new E(m.DIRECTORY,4096,365)},tH.prototype.getListing=function(){return Object.keys(this._ls)},tH.prototype.getItem=function(t){return this._ls[t]||null},tH.prototype.addItem=function(t,e){return!(t in this._ls)&&(this._ls[t]=e,!0)},tH.prototype.remItem=function(t){var e=this._ls[t];return void 0===e?null:(delete this._ls[t],e)};var tX,tK=r(8).inflateRaw,tq={};function tG(t,e){return new Date(1980+(e>>9),(e>>5&15)-1,31&e,t>>11,t>>5&63,31&t)}function tJ(t,e,r,n){return 0===n?"":e?t.toString("utf8",r,r+n):tz.byte2str(t.slice(r,r+n))}(n=tX||(tX={}))[n.STORED=0]="STORED",n[n.SHRUNK=1]="SHRUNK",n[n.REDUCED_1=2]="REDUCED_1",n[n.REDUCED_2=3]="REDUCED_2",n[n.REDUCED_3=4]="REDUCED_3",n[n.REDUCED_4=5]="REDUCED_4",n[n.IMPLODE=6]="IMPLODE",n[n.DEFLATE=8]="DEFLATE",n[n.DEFLATE64=9]="DEFLATE64",n[n.TERSE_OLD=10]="TERSE_OLD",n[n.BZIP2=12]="BZIP2",n[n.LZMA=14]="LZMA",n[n.TERSE_NEW=18]="TERSE_NEW",n[n.LZ77=19]="LZ77",n[n.WAVPACK=97]="WAVPACK",n[n.PPMD=98]="PPMD";var t$=function(t){if(this.data=t,67324752!==t.readUInt32LE(0))throw new y(u.EINVAL,"Invalid Zip file: Local file header has invalid signature: "+this.data.readUInt32LE(0))};t$.prototype.versionNeeded=function(){return this.data.readUInt16LE(4)},t$.prototype.flags=function(){return this.data.readUInt16LE(6)},t$.prototype.compressionMethod=function(){return this.data.readUInt16LE(8)},t$.prototype.lastModFileTime=function(){return tG(this.data.readUInt16LE(10),this.data.readUInt16LE(12))},t$.prototype.rawLastModFileTime=function(){return this.data.readUInt32LE(10)},t$.prototype.crc32=function(){return this.data.readUInt32LE(14)},t$.prototype.fileNameLength=function(){return this.data.readUInt16LE(26)},t$.prototype.extraFieldLength=function(){return this.data.readUInt16LE(28)},t$.prototype.fileName=function(){return tJ(this.data,this.useUTF8(),30,this.fileNameLength())},t$.prototype.extraField=function(){var t=30+this.fileNameLength();return this.data.slice(t,t+this.extraFieldLength())},t$.prototype.totalSize=function(){return 30+this.fileNameLength()+this.extraFieldLength()},t$.prototype.useUTF8=function(){return 2048==(2048&this.flags())};var tQ=function(t,e,r){this.header=t,this.record=e,this.data=r};tQ.prototype.decompress=function(){var t=this.header.compressionMethod(),e=tq[t];if(e)return e(this.data,this.record.compressedSize(),this.record.uncompressedSize(),this.record.flag());var r=tX[t];throw r||(r="Unknown: "+t),new y(u.EINVAL,"Invalid compression method on file '"+this.header.fileName()+"': "+r)},tQ.prototype.getHeader=function(){return this.header},tQ.prototype.getRecord=function(){return this.record},tQ.prototype.getRawData=function(){return this.data};var t1=function(t,e){if(this.zipData=t,this.data=e,33639248!==this.data.readUInt32LE(0))throw new y(u.EINVAL,"Invalid Zip file: Central directory record has invalid signature: "+this.data.readUInt32LE(0));this._filename=this.produceFilename()};t1.prototype.versionMadeBy=function(){return this.data.readUInt16LE(4)},t1.prototype.versionNeeded=function(){return this.data.readUInt16LE(6)},t1.prototype.flag=function(){return this.data.readUInt16LE(8)},t1.prototype.compressionMethod=function(){return this.data.readUInt16LE(10)},t1.prototype.lastModFileTime=function(){return tG(this.data.readUInt16LE(12),this.data.readUInt16LE(14))},t1.prototype.rawLastModFileTime=function(){return this.data.readUInt32LE(12)},t1.prototype.crc32=function(){return this.data.readUInt32LE(16)},t1.prototype.compressedSize=function(){return this.data.readUInt32LE(20)},t1.prototype.uncompressedSize=function(){return this.data.readUInt32LE(24)},t1.prototype.fileNameLength=function(){return this.data.readUInt16LE(28)},t1.prototype.extraFieldLength=function(){return this.data.readUInt16LE(30)},t1.prototype.fileCommentLength=function(){return this.data.readUInt16LE(32)},t1.prototype.diskNumberStart=function(){return this.data.readUInt16LE(34)},t1.prototype.internalAttributes=function(){return this.data.readUInt16LE(36)},t1.prototype.externalAttributes=function(){return this.data.readUInt32LE(38)},t1.prototype.headerRelativeOffset=function(){return this.data.readUInt32LE(42)},t1.prototype.produceFilename=function(){return tJ(this.data,this.useUTF8(),46,this.fileNameLength()).replace(/\\/g,"/")},t1.prototype.fileName=function(){return this._filename},t1.prototype.rawFileName=function(){return this.data.slice(46,46+this.fileNameLength())},t1.prototype.extraField=function(){var t=44+this.fileNameLength();return this.data.slice(t,t+this.extraFieldLength())},t1.prototype.fileComment=function(){var t=46+this.fileNameLength()+this.extraFieldLength();return tJ(this.data,this.useUTF8(),t,this.fileCommentLength())},t1.prototype.rawFileComment=function(){var t=46+this.fileNameLength()+this.extraFieldLength();return this.data.slice(t,t+this.fileCommentLength())},t1.prototype.totalSize=function(){return 46+this.fileNameLength()+this.extraFieldLength()+this.fileCommentLength()},t1.prototype.isDirectory=function(){var t=this.fileName();return!!(16&this.externalAttributes())||"/"===t.charAt(t.length-1)},t1.prototype.isFile=function(){return!this.isDirectory()},t1.prototype.useUTF8=function(){return 2048==(2048&this.flag())},t1.prototype.isEncrypted=function(){return 1==(1&this.flag())},t1.prototype.getFileData=function(){var t=this.headerRelativeOffset(),e=new t$(this.zipData.slice(t));return new tQ(e,this,this.zipData.slice(t+e.totalSize()))},t1.prototype.getData=function(){return this.getFileData().decompress()},t1.prototype.getRawData=function(){return this.getFileData().getRawData()},t1.prototype.getStats=function(){return new E(m.FILE,this.uncompressedSize(),365,Date.now(),this.lastModFileTime().getTime())};var t0=function(t){if(this.data=t,101010256!==this.data.readUInt32LE(0))throw new y(u.EINVAL,"Invalid Zip file: End of central directory record has invalid signature: "+this.data.readUInt32LE(0))};t0.prototype.diskNumber=function(){return this.data.readUInt16LE(4)},t0.prototype.cdDiskNumber=function(){return this.data.readUInt16LE(6)},t0.prototype.cdDiskEntryCount=function(){return this.data.readUInt16LE(8)},t0.prototype.cdTotalEntryCount=function(){return this.data.readUInt16LE(10)},t0.prototype.cdSize=function(){return this.data.readUInt32LE(12)},t0.prototype.cdOffset=function(){return this.data.readUInt32LE(16)},t0.prototype.cdZipCommentLength=function(){return this.data.readUInt16LE(20)},t0.prototype.cdZipComment=function(){return tJ(this.data,!0,22,this.cdZipCommentLength())},t0.prototype.rawCdZipComment=function(){return this.data.slice(22,22+this.cdZipCommentLength())};var t2=function(t){function e(e,r){void 0===r&&(r=""),t.call(this),this.name=r,this._index=new tY,this._directoryEntries=[],this._eocd=null,this._index=e.index,this._directoryEntries=e.directoryEntries,this._eocd=e.eocd,this.data=e.data}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.Create=function(t,r){try{e._computeIndex(t.zipData,function(n,o){if(o){var i=new e(o,t.name);r(null,i)}else r(n)})}catch(t){r(t)}},e.isAvailable=function(){return!0},e.RegisterDecompressionMethod=function(t,e){tq[t]=e},e._getEOCD=function(t){for(var e=Math.min(65557,t.length-1),r=22;r<e;r++)if(101010256===t.readUInt32LE(t.length-r))return new t0(t.slice(t.length-r));throw new y(u.EINVAL,"Invalid ZIP file: Could not locate End of Central Directory signature.")},e._addToIndex=function(t,e){var r=t.fileName();if("/"===r.charAt(0))throw new y(u.EPERM,"Unexpectedly encountered an absolute path in a zip file. Please file a bug.");"/"===r.charAt(r.length-1)&&(r=r.substr(0,r.length-1)),t.isDirectory()?e.addPathFast("/"+r,new tH(t)):e.addPathFast("/"+r,new tZ(t))},e._computeIndex=function(t,r){try{var n=new tY,o=e._getEOCD(t);if(o.diskNumber()!==o.cdDiskNumber())return r(new y(u.EINVAL,"ZipFS does not support spanned zip files."));var i=o.cdOffset();if(4294967295===i)return r(new y(u.EINVAL,"ZipFS does not support Zip64."));var a=i+o.cdSize();e._computeIndexResponsive(t,n,i,a,r,[],o)}catch(t){r(t)}},e._computeIndexResponsiveTrampoline=function(t,r,n,o,i,a,s){try{e._computeIndexResponsive(t,r,n,o,i,a,s)}catch(t){i(t)}},e._computeIndexResponsive=function(t,r,n,o,i,a,s){if(n<o){for(var c=0;c++<200&&n<o;){var u=new t1(t,t.slice(n));e._addToIndex(u,r),n+=u.totalSize(),a.push(u)}k(function(){e._computeIndexResponsiveTrampoline(t,r,n,o,i,a,s)})}else i(null,new function(t,e,r,n){this.index=t,this.directoryEntries=e,this.eocd=r,this.data=n}(r,a,s,t))},e.prototype.getName=function(){return e.Name+(""!==this.name?" "+this.name:"")},e.prototype.getCentralDirectoryEntry=function(t){var e=this._index.getInode(t);if(null===e)throw y.ENOENT(t);if(tV(e)||tW(e))return e.getData();throw y.EPERM("Invalid inode: "+e)},e.prototype.getCentralDirectoryEntryAt=function(t){var e=this._directoryEntries[t];if(!e)throw RangeError("Invalid directory index: "+t+".");return e},e.prototype.getNumberOfCentralDirectoryEntries=function(){return this._directoryEntries.length},e.prototype.getEndOfCentralDirectory=function(){return this._eocd},e.prototype.diskSpace=function(t,e){e(this.data.length,0)},e.prototype.isReadOnly=function(){return!0},e.prototype.supportsLinks=function(){return!1},e.prototype.supportsProps=function(){return!1},e.prototype.supportsSynch=function(){return!0},e.prototype.statSync=function(t,e){var r,n=this._index.getInode(t);if(null===n)throw y.ENOENT(t);if(tV(n))r=n.getData().getStats();else{if(!tW(n))throw new y(u.EINVAL,"Invalid inode.");r=n.getStats()}return r},e.prototype.openSync=function(t,e,r){if(e.isWriteable())throw new y(u.EPERM,t);var n=this._index.getInode(t);if(!n)throw y.ENOENT(t);if(!tV(n))throw y.EISDIR(t);var o=n.getData(),i=o.getStats();switch(e.pathExistsAction()){case d.THROW_EXCEPTION:case d.TRUNCATE_FILE:throw y.EEXIST(t);case d.NOP:return new tn(this,t,e,i,o.getData());default:throw new y(u.EINVAL,"Invalid FileMode object.")}},e.prototype.readdirSync=function(t){var e=this._index.getInode(t);if(e){if(tW(e))return e.getListing();throw y.ENOTDIR(t)}throw y.ENOENT(t)},e.prototype.readFileSync=function(t,e,r){var n=this.openSync(t,r,420);try{var o=n.getBuffer();return null===e?V(o):o.toString(e)}finally{n.closeSync()}},e}(J);t2.Name="ZipFS",t2.Options={zipData:{type:"object",description:"The zip file as a Buffer object.",validator:K},name:{type:"string",optional:!0,description:"The name of the zip file (optional)."}},t2.CompressionMethod=tX,t2.RegisterDecompressionMethod(tX.DEFLATE,function(t,e,r){return Y(tK(t.slice(0,e),{chunkSize:r}))}),t2.RegisterDecompressionMethod(tX.STORED,function(t,e,r){return V(t,0,r)});var t6={Emscripten:te,FileSystemAccess:ta,IsoFS:tj,ZipFS:t2};function t5(t){switch(t){case"fs":return M;case"path":return h;case"buffer":return f;case"process":return i;case"bfs_utils":return q;default:return t6[t]}}function t8(t){return M.initialize(t)}function t3(t,e){var r=t.fs;if(!r)return e(new y(u.EPERM,'Missing "fs" property on configuration object.'));var n=t.options,o=0,i=!1;function a(){if(!i){i=!0;var t=t6[r];t?t.Create(n,e):e(new y(u.EPERM,"File system "+r+" is not available in BrowserFS."))}}if(null!==n&&"object"==typeof n){var s=!1;Object.keys(n).filter(function(t){return"fs"!==t}).forEach(function(t){var r=n[t];null!==r&&"object"==typeof r&&r.fs&&(o++,t3(r,function(r,c){(o--,r)?i||(i=!0,e(r)):(n[t]=c,0===o&&s&&a())}))}),s=!0}0===o&&a()}i.initializeTTYs&&i.initializeTTYs(),e.BFSRequire=t5,e.Errors=g,e.FileSystem=t6,e.configure=function(t,e){t3(t,function(t,r){r?(t8(r),e()):e(t)})},e.getFileSystem=t3,e.initialize=t8,e.install=function(t){t.Buffer=o,t.process=i;var e=t.require?t.require:null;t.require=function(t){return t5(t)||e.apply(null,Array.prototype.slice.call(arguments,0))}},e.registerFileSystem=function(t,e){t6[t]=e}}).call(this,r(1))},function(t,e,r){(function(t){/*!
//  * The buffer module from node.js, for the browser.
//  *
//  * @author   Feross Aboukhadijeh <http://feross.org>
//  * @license  MIT
//  */var n=r(4),o=r(5),i=r(6);function a(){return c.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function s(t,e){if(a()<e)throw RangeError("Invalid typed array length");return c.TYPED_ARRAY_SUPPORT?(t=new Uint8Array(e)).__proto__=c.prototype:(null===t&&(t=new c(e)),t.length=e),t}function c(t,e,r){if(!(c.TYPED_ARRAY_SUPPORT||this instanceof c))return new c(t,e,r);if("number"==typeof t){if("string"==typeof e)throw Error("If encoding is specified then the first argument must be a string");return h(this,t)}return u(this,t,e,r)}function u(t,e,r,n){if("number"==typeof e)throw TypeError('"value" argument must not be a number');return"undefined"!=typeof ArrayBuffer&&e instanceof ArrayBuffer?function(t,e,r,n){if(e.byteLength,r<0||e.byteLength<r)throw RangeError("'offset' is out of bounds");if(e.byteLength<r+(n||0))throw RangeError("'length' is out of bounds");return e=void 0===r&&void 0===n?new Uint8Array(e):void 0===n?new Uint8Array(e,r):new Uint8Array(e,r,n),c.TYPED_ARRAY_SUPPORT?(t=e).__proto__=c.prototype:t=p(t,e),t}(t,e,r,n):"string"==typeof e?function(t,e,r){if("string"==typeof r&&""!==r||(r="utf8"),!c.isEncoding(r))throw TypeError('"encoding" must be a valid string encoding');var n=0|d(e,r),o=(t=s(t,n)).write(e,r);return o!==n&&(t=t.slice(0,o)),t}(t,e,r):function(t,e){if(c.isBuffer(e)){var r,n=0|l(e.length);return 0===(t=s(t,n)).length||e.copy(t,0,0,n),t}if(e){if("undefined"!=typeof ArrayBuffer&&e.buffer instanceof ArrayBuffer||"length"in e)return"number"!=typeof e.length||(r=e.length)!=r?s(t,0):p(t,e);if("Buffer"===e.type&&i(e.data))return p(t,e.data)}throw TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}(t,e)}function f(t){if("number"!=typeof t)throw TypeError('"size" argument must be a number');if(t<0)throw RangeError('"size" argument must not be negative')}function h(t,e){if(f(e),t=s(t,e<0?0:0|l(e)),!c.TYPED_ARRAY_SUPPORT)for(var r=0;r<e;++r)t[r]=0;return t}function p(t,e){var r=e.length<0?0:0|l(e.length);t=s(t,r);for(var n=0;n<r;n+=1)t[n]=255&e[n];return t}function l(t){if(t>=a())throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+a().toString(16)+" bytes");return 0|t}function d(t,e){if(c.isBuffer(t))return t.length;if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(t)||t instanceof ArrayBuffer))return t.byteLength;"string"!=typeof t&&(t=""+t);var r=t.length;if(0===r)return 0;for(var n=!1;;)switch(e){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":case void 0:return k(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return T(t).length;default:if(n)return k(t).length;e=(""+e).toLowerCase(),n=!0}}function y(t,e,r){var n=t[e];t[e]=t[r],t[r]=n}function g(t,e,r,n,o){if(0===t.length)return -1;if("string"==typeof r?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),isNaN(r=+r)&&(r=o?0:t.length-1),r<0&&(r=t.length+r),r>=t.length){if(o)return -1;r=t.length-1}else if(r<0){if(!o)return -1;r=0}if("string"==typeof e&&(e=c.from(e,n)),c.isBuffer(e))return 0===e.length?-1:_(t,e,r,n,o);if("number"==typeof e)return e&=255,c.TYPED_ARRAY_SUPPORT&&"function"==typeof Uint8Array.prototype.indexOf?o?Uint8Array.prototype.indexOf.call(t,e,r):Uint8Array.prototype.lastIndexOf.call(t,e,r):_(t,[e],r,n,o);throw TypeError("val must be string, number or Buffer")}function _(t,e,r,n,o){var i,a=1,s=t.length,c=e.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(t.length<2||e.length<2)return -1;a=2,s/=2,c/=2,r/=2}function u(t,e){return 1===a?t[e]:t.readUInt16BE(e*a)}if(o){var f=-1;for(i=r;i<s;i++)if(u(t,i)===u(e,-1===f?0:i-f)){if(-1===f&&(f=i),i-f+1===c)return f*a}else -1!==f&&(i-=i-f),f=-1}else for(r+c>s&&(r=s-c),i=r;i>=0;i--){for(var h=!0,p=0;p<c;p++)if(u(t,i+p)!==u(e,p)){h=!1;break}if(h)return i}return -1}function m(t,e,r){r=Math.min(t.length,r);for(var n=[],o=e;o<r;){var i,a,s,c,u=t[o],f=null,h=u>239?4:u>223?3:u>191?2:1;if(o+h<=r)switch(h){case 1:u<128&&(f=u);break;case 2:128==(192&(i=t[o+1]))&&(c=(31&u)<<6|63&i)>127&&(f=c);break;case 3:i=t[o+1],a=t[o+2],128==(192&i)&&128==(192&a)&&(c=(15&u)<<12|(63&i)<<6|63&a)>2047&&(c<55296||c>57343)&&(f=c);break;case 4:i=t[o+1],a=t[o+2],s=t[o+3],128==(192&i)&&128==(192&a)&&128==(192&s)&&(c=(15&u)<<18|(63&i)<<12|(63&a)<<6|63&s)>65535&&c<1114112&&(f=c)}null===f?(f=65533,h=1):f>65535&&(f-=65536,n.push(f>>>10&1023|55296),f=56320|1023&f),n.push(f),o+=h}return function(t){var e=t.length;if(e<=w)return String.fromCharCode.apply(String,t);for(var r="",n=0;n<e;)r+=String.fromCharCode.apply(String,t.slice(n,n+=w));return r}(n)}e.Buffer=c,e.SlowBuffer=function(t){return+t!=t&&(t=0),c.alloc(+t)},e.INSPECT_MAX_BYTES=50,c.TYPED_ARRAY_SUPPORT=void 0!==t.TYPED_ARRAY_SUPPORT?t.TYPED_ARRAY_SUPPORT:function(){try{var t=new Uint8Array(1);return t.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===t.foo()&&"function"==typeof t.subarray&&0===t.subarray(1,1).byteLength}catch(t){return!1}}(),e.kMaxLength=a(),c.poolSize=8192,c._augment=function(t){return t.__proto__=c.prototype,t},c.from=function(t,e,r){return u(null,t,e,r)},c.TYPED_ARRAY_SUPPORT&&(c.prototype.__proto__=Uint8Array.prototype,c.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&c[Symbol.species]===c&&Object.defineProperty(c,Symbol.species,{value:null,configurable:!0})),c.alloc=function(t,e,r){return f(t),t<=0?s(null,t):void 0!==e?"string"==typeof r?s(null,t).fill(e,r):s(null,t).fill(e):s(null,t)},c.allocUnsafe=function(t){return h(null,t)},c.allocUnsafeSlow=function(t){return h(null,t)},c.isBuffer=function(t){return!(null==t||!t._isBuffer)},c.compare=function(t,e){if(!c.isBuffer(t)||!c.isBuffer(e))throw TypeError("Arguments must be Buffers");if(t===e)return 0;for(var r=t.length,n=e.length,o=0,i=Math.min(r,n);o<i;++o)if(t[o]!==e[o]){r=t[o],n=e[o];break}return r<n?-1:n<r?1:0},c.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},c.concat=function(t,e){if(!i(t))throw TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return c.alloc(0);if(void 0===e)for(e=0,r=0;r<t.length;++r)e+=t[r].length;var r,n=c.allocUnsafe(e),o=0;for(r=0;r<t.length;++r){var a=t[r];if(!c.isBuffer(a))throw TypeError('"list" argument must be an Array of Buffers');a.copy(n,o),o+=a.length}return n},c.byteLength=d,c.prototype._isBuffer=!0,c.prototype.swap16=function(){var t=this.length;if(t%2!=0)throw RangeError("Buffer size must be a multiple of 16-bits");for(var e=0;e<t;e+=2)y(this,e,e+1);return this},c.prototype.swap32=function(){var t=this.length;if(t%4!=0)throw RangeError("Buffer size must be a multiple of 32-bits");for(var e=0;e<t;e+=4)y(this,e,e+3),y(this,e+1,e+2);return this},c.prototype.swap64=function(){var t=this.length;if(t%8!=0)throw RangeError("Buffer size must be a multiple of 64-bits");for(var e=0;e<t;e+=8)y(this,e,e+7),y(this,e+1,e+6),y(this,e+2,e+5),y(this,e+3,e+4);return this},c.prototype.toString=function(){var t=0|this.length;return 0===t?"":0==arguments.length?m(this,0,t):(function(t,e,r){var o,i,a=!1;if((void 0===e||e<0)&&(e=0),e>this.length||((void 0===r||r>this.length)&&(r=this.length),r<=0)||(r>>>=0)<=(e>>>=0))return"";for(t||(t="utf8");;)switch(t){case"hex":return function(t,e,r){var n,o=t.length;(!e||e<0)&&(e=0),(!r||r<0||r>o)&&(r=o);for(var i="",a=e;a<r;++a)i+=(n=t[a])<16?"0"+n.toString(16):n.toString(16);return i}(this,e,r);case"utf8":case"utf-8":return m(this,e,r);case"ascii":return function(t,e,r){var n="";r=Math.min(t.length,r);for(var o=e;o<r;++o)n+=String.fromCharCode(127&t[o]);return n}(this,e,r);case"latin1":case"binary":return function(t,e,r){var n="";r=Math.min(t.length,r);for(var o=e;o<r;++o)n+=String.fromCharCode(t[o]);return n}(this,e,r);case"base64":return o=e,i=r,0===o&&i===this.length?n.fromByteArray(this):n.fromByteArray(this.slice(o,i));case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return function(t,e,r){for(var n=t.slice(e,r),o="",i=0;i<n.length;i+=2)o+=String.fromCharCode(n[i]+256*n[i+1]);return o}(this,e,r);default:if(a)throw TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),a=!0}}).apply(this,arguments)},c.prototype.equals=function(t){if(!c.isBuffer(t))throw TypeError("Argument must be a Buffer");return this===t||0===c.compare(this,t)},c.prototype.inspect=function(){var t="",r=e.INSPECT_MAX_BYTES;return this.length>0&&(t=this.toString("hex",0,r).match(/.{2}/g).join(" "),this.length>r&&(t+=" ... ")),"<Buffer "+t+">"},c.prototype.compare=function(t,e,r,n,o){if(!c.isBuffer(t))throw TypeError("Argument must be a Buffer");if(void 0===e&&(e=0),void 0===r&&(r=t?t.length:0),void 0===n&&(n=0),void 0===o&&(o=this.length),e<0||r>t.length||n<0||o>this.length)throw RangeError("out of range index");if(n>=o&&e>=r)return 0;if(n>=o)return -1;if(e>=r)return 1;if(e>>>=0,r>>>=0,n>>>=0,o>>>=0,this===t)return 0;for(var i=o-n,a=r-e,s=Math.min(i,a),u=this.slice(n,o),f=t.slice(e,r),h=0;h<s;++h)if(u[h]!==f[h]){i=u[h],a=f[h];break}return i<a?-1:a<i?1:0},c.prototype.includes=function(t,e,r){return -1!==this.indexOf(t,e,r)},c.prototype.indexOf=function(t,e,r){return g(this,t,e,r,!0)},c.prototype.lastIndexOf=function(t,e,r){return g(this,t,e,r,!1)},c.prototype.write=function(t,e,r,n){if(void 0===e)n="utf8",r=this.length,e=0;else if(void 0===r&&"string"==typeof e)n=e,r=this.length,e=0;else{if(!isFinite(e))throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");e|=0,isFinite(r)?(r|=0,void 0===n&&(n="utf8")):(n=r,r=void 0)}var o,i,a,s,c,u,f,h,p,l,d=this.length-e;if((void 0===r||r>d)&&(r=d),t.length>0&&(r<0||e<0)||e>this.length)throw RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var y=!1;;)switch(n){case"hex":return function(t,e,r,n){r=Number(r)||0;var o=t.length-r;n?(n=Number(n))>o&&(n=o):n=o;var i=e.length;if(i%2!=0)throw TypeError("Invalid hex string");n>i/2&&(n=i/2);for(var a=0;a<n;++a){var s=parseInt(e.substr(2*a,2),16);if(isNaN(s))break;t[r+a]=s}return a}(this,t,e,r);case"utf8":case"utf-8":return c=e,u=r,L(k(t,this.length-c),this,c,u);case"ascii":case"latin1":case"binary":return o=this,i=t,a=e,s=r,L(function(t){for(var e=[],r=0;r<t.length;++r)e.push(255&t.charCodeAt(r));return e}(i),o,a,s);case"base64":return f=e,h=r,L(T(t),this,f,h);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return p=e,l=r,L(function(t,e){for(var r,n,o=[],i=0;i<t.length&&!((e-=2)<0);++i)n=(r=t.charCodeAt(i))>>8,o.push(r%256),o.push(n);return o}(t,this.length-p),this,p,l);default:if(y)throw TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),y=!0}},c.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var w=4096;function E(t,e,r){if(t%1!=0||t<0)throw RangeError("offset is not uint");if(t+e>r)throw RangeError("Trying to access beyond buffer length")}function v(t,e,r,n,o,i){if(!c.isBuffer(t))throw TypeError('"buffer" argument must be a Buffer instance');if(e>o||e<i)throw RangeError('"value" argument is out of bounds');if(r+n>t.length)throw RangeError("Index out of range")}function S(t,e,r,n){e<0&&(e=65535+e+1);for(var o=0,i=Math.min(t.length-r,2);o<i;++o)t[r+o]=(e&255<<8*(n?o:1-o))>>>8*(n?o:1-o)}function b(t,e,r,n){e<0&&(e=4294967295+e+1);for(var o=0,i=Math.min(t.length-r,4);o<i;++o)t[r+o]=e>>>8*(n?o:3-o)&255}function I(t,e,r,n,o,i){if(r+n>t.length||r<0)throw RangeError("Index out of range")}function F(t,e,r,n,i){return i||I(t,0,r,4),o.write(t,e,r,n,23,4),r+4}function O(t,e,r,n,i){return i||I(t,0,r,8),o.write(t,e,r,n,52,8),r+8}c.prototype.slice=function(t,e){var r,n=this.length;if(t=~~t,e=void 0===e?n:~~e,t<0?(t+=n)<0&&(t=0):t>n&&(t=n),e<0?(e+=n)<0&&(e=0):e>n&&(e=n),e<t&&(e=t),c.TYPED_ARRAY_SUPPORT)(r=this.subarray(t,e)).__proto__=c.prototype;else{var o=e-t;r=new c(o,void 0);for(var i=0;i<o;++i)r[i]=this[i+t]}return r},c.prototype.readUIntLE=function(t,e,r){t|=0,e|=0,r||E(t,e,this.length);for(var n=this[t],o=1,i=0;++i<e&&(o*=256);)n+=this[t+i]*o;return n},c.prototype.readUIntBE=function(t,e,r){t|=0,e|=0,r||E(t,e,this.length);for(var n=this[t+--e],o=1;e>0&&(o*=256);)n+=this[t+--e]*o;return n},c.prototype.readUInt8=function(t,e){return e||E(t,1,this.length),this[t]},c.prototype.readUInt16LE=function(t,e){return e||E(t,2,this.length),this[t]|this[t+1]<<8},c.prototype.readUInt16BE=function(t,e){return e||E(t,2,this.length),this[t]<<8|this[t+1]},c.prototype.readUInt32LE=function(t,e){return e||E(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},c.prototype.readUInt32BE=function(t,e){return e||E(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},c.prototype.readIntLE=function(t,e,r){t|=0,e|=0,r||E(t,e,this.length);for(var n=this[t],o=1,i=0;++i<e&&(o*=256);)n+=this[t+i]*o;return n>=(o*=128)&&(n-=Math.pow(2,8*e)),n},c.prototype.readIntBE=function(t,e,r){t|=0,e|=0,r||E(t,e,this.length);for(var n=e,o=1,i=this[t+--n];n>0&&(o*=256);)i+=this[t+--n]*o;return i>=(o*=128)&&(i-=Math.pow(2,8*e)),i},c.prototype.readInt8=function(t,e){return e||E(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},c.prototype.readInt16LE=function(t,e){e||E(t,2,this.length);var r=this[t]|this[t+1]<<8;return 32768&r?4294901760|r:r},c.prototype.readInt16BE=function(t,e){e||E(t,2,this.length);var r=this[t+1]|this[t]<<8;return 32768&r?4294901760|r:r},c.prototype.readInt32LE=function(t,e){return e||E(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},c.prototype.readInt32BE=function(t,e){return e||E(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},c.prototype.readFloatLE=function(t,e){return e||E(t,4,this.length),o.read(this,t,!0,23,4)},c.prototype.readFloatBE=function(t,e){return e||E(t,4,this.length),o.read(this,t,!1,23,4)},c.prototype.readDoubleLE=function(t,e){return e||E(t,8,this.length),o.read(this,t,!0,52,8)},c.prototype.readDoubleBE=function(t,e){return e||E(t,8,this.length),o.read(this,t,!1,52,8)},c.prototype.writeUIntLE=function(t,e,r,n){t=+t,e|=0,r|=0,n||v(this,t,e,r,Math.pow(2,8*r)-1,0);var o=1,i=0;for(this[e]=255&t;++i<r&&(o*=256);)this[e+i]=t/o&255;return e+r},c.prototype.writeUIntBE=function(t,e,r,n){t=+t,e|=0,r|=0,n||v(this,t,e,r,Math.pow(2,8*r)-1,0);var o=r-1,i=1;for(this[e+o]=255&t;--o>=0&&(i*=256);)this[e+o]=t/i&255;return e+r},c.prototype.writeUInt8=function(t,e,r){return t=+t,e|=0,r||v(this,t,e,1,255,0),c.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),this[e]=255&t,e+1},c.prototype.writeUInt16LE=function(t,e,r){return t=+t,e|=0,r||v(this,t,e,2,65535,0),c.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8):S(this,t,e,!0),e+2},c.prototype.writeUInt16BE=function(t,e,r){return t=+t,e|=0,r||v(this,t,e,2,65535,0),c.TYPED_ARRAY_SUPPORT?(this[e]=t>>>8,this[e+1]=255&t):S(this,t,e,!1),e+2},c.prototype.writeUInt32LE=function(t,e,r){return t=+t,e|=0,r||v(this,t,e,4,4294967295,0),c.TYPED_ARRAY_SUPPORT?(this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t):b(this,t,e,!0),e+4},c.prototype.writeUInt32BE=function(t,e,r){return t=+t,e|=0,r||v(this,t,e,4,4294967295,0),c.TYPED_ARRAY_SUPPORT?(this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t):b(this,t,e,!1),e+4},c.prototype.writeIntLE=function(t,e,r,n){if(t=+t,e|=0,!n){var o=Math.pow(2,8*r-1);v(this,t,e,r,o-1,-o)}var i=0,a=1,s=0;for(this[e]=255&t;++i<r&&(a*=256);)t<0&&0===s&&0!==this[e+i-1]&&(s=1),this[e+i]=(t/a>>0)-s&255;return e+r},c.prototype.writeIntBE=function(t,e,r,n){if(t=+t,e|=0,!n){var o=Math.pow(2,8*r-1);v(this,t,e,r,o-1,-o)}var i=r-1,a=1,s=0;for(this[e+i]=255&t;--i>=0&&(a*=256);)t<0&&0===s&&0!==this[e+i+1]&&(s=1),this[e+i]=(t/a>>0)-s&255;return e+r},c.prototype.writeInt8=function(t,e,r){return t=+t,e|=0,r||v(this,t,e,1,127,-128),c.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),t<0&&(t=255+t+1),this[e]=255&t,e+1},c.prototype.writeInt16LE=function(t,e,r){return t=+t,e|=0,r||v(this,t,e,2,32767,-32768),c.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8):S(this,t,e,!0),e+2},c.prototype.writeInt16BE=function(t,e,r){return t=+t,e|=0,r||v(this,t,e,2,32767,-32768),c.TYPED_ARRAY_SUPPORT?(this[e]=t>>>8,this[e+1]=255&t):S(this,t,e,!1),e+2},c.prototype.writeInt32LE=function(t,e,r){return t=+t,e|=0,r||v(this,t,e,4,2147483647,-2147483648),c.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24):b(this,t,e,!0),e+4},c.prototype.writeInt32BE=function(t,e,r){return t=+t,e|=0,r||v(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),c.TYPED_ARRAY_SUPPORT?(this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t):b(this,t,e,!1),e+4},c.prototype.writeFloatLE=function(t,e,r){return F(this,t,e,!0,r)},c.prototype.writeFloatBE=function(t,e,r){return F(this,t,e,!1,r)},c.prototype.writeDoubleLE=function(t,e,r){return O(this,t,e,!0,r)},c.prototype.writeDoubleBE=function(t,e,r){return O(this,t,e,!1,r)},c.prototype.copy=function(t,e,r,n){if(r||(r=0),n||0===n||(n=this.length),e>=t.length&&(e=t.length),e||(e=0),n>0&&n<r&&(n=r),n===r||0===t.length||0===this.length)return 0;if(e<0)throw RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw RangeError("sourceStart out of bounds");if(n<0)throw RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),t.length-e<n-r&&(n=t.length-e+r);var o,i=n-r;if(this===t&&r<e&&e<n)for(o=i-1;o>=0;--o)t[o+e]=this[o+r];else if(i<1e3||!c.TYPED_ARRAY_SUPPORT)for(o=0;o<i;++o)t[o+e]=this[o+r];else Uint8Array.prototype.set.call(t,this.subarray(r,r+i),e);return i},c.prototype.fill=function(t,e,r,n){if("string"==typeof t){if("string"==typeof e?(n=e,e=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),1===t.length){var o,i=t.charCodeAt(0);i<256&&(t=i)}if(void 0!==n&&"string"!=typeof n)throw TypeError("encoding must be a string");if("string"==typeof n&&!c.isEncoding(n))throw TypeError("Unknown encoding: "+n)}else"number"==typeof t&&(t&=255);if(e<0||this.length<e||this.length<r)throw RangeError("Out of range index");if(r<=e)return this;if(e>>>=0,r=void 0===r?this.length:r>>>0,t||(t=0),"number"==typeof t)for(o=e;o<r;++o)this[o]=t;else{var a=c.isBuffer(t)?t:k(new c(t,n).toString()),s=a.length;for(o=0;o<r-e;++o)this[o+e]=a[o%s]}return this};var R=/[^+\/0-9A-Za-z-_]/g;function k(t,e){var r;e=e||1/0;for(var n=t.length,o=null,i=[],a=0;a<n;++a){if((r=t.charCodeAt(a))>55295&&r<57344){if(!o){if(r>56319||a+1===n){(e-=3)>-1&&i.push(239,191,189);continue}o=r;continue}if(r<56320){(e-=3)>-1&&i.push(239,191,189),o=r;continue}r=65536+(o-55296<<10|r-56320)}else o&&(e-=3)>-1&&i.push(239,191,189);if(o=null,r<128){if((e-=1)<0)break;i.push(r)}else if(r<2048){if((e-=2)<0)break;i.push(r>>6|192,63&r|128)}else if(r<65536){if((e-=3)<0)break;i.push(r>>12|224,r>>6&63|128,63&r|128)}else{if(!(r<1114112))throw Error("Invalid code point");if((e-=4)<0)break;i.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}}return i}function T(t){return n.toByteArray(function(t){var e;if((t=((e=t).trim?e.trim():e.replace(/^\s+|\s+$/g,"")).replace(R,"")).length<2)return"";for(;t.length%4!=0;)t+="=";return t}(t))}function L(t,e,r,n){for(var o=0;o<n&&!(o+r>=e.length||o>=t.length);++o)e[o+r]=t[o];return o}}).call(this,r(1))},function(t,e,r){e.byteLength=function(t){var e=u(t),r=e[0],n=e[1];return 3*(r+n)/4-n},e.toByteArray=function(t){var e,r,n=u(t),a=n[0],s=n[1],c=new i(3*(a+s)/4-s),f=0,h=s>0?a-4:a;for(r=0;r<h;r+=4)e=o[t.charCodeAt(r)]<<18|o[t.charCodeAt(r+1)]<<12|o[t.charCodeAt(r+2)]<<6|o[t.charCodeAt(r+3)],c[f++]=e>>16&255,c[f++]=e>>8&255,c[f++]=255&e;return 2===s&&(e=o[t.charCodeAt(r)]<<2|o[t.charCodeAt(r+1)]>>4,c[f++]=255&e),1===s&&(e=o[t.charCodeAt(r)]<<10|o[t.charCodeAt(r+1)]<<4|o[t.charCodeAt(r+2)]>>2,c[f++]=e>>8&255,c[f++]=255&e),c},e.fromByteArray=function(t){for(var e,r=t.length,o=r%3,i=[],a=0,s=r-o;a<s;a+=16383)i.push(function(t,e,r){for(var o,i=[],a=e;a<r;a+=3)i.push(n[(o=(t[a]<<16&16711680)+(t[a+1]<<8&65280)+(255&t[a+2]))>>18&63]+n[o>>12&63]+n[o>>6&63]+n[63&o]);return i.join("")}(t,a,a+16383>s?s:a+16383));return 1===o?i.push(n[(e=t[r-1])>>2]+n[e<<4&63]+"=="):2===o&&i.push(n[(e=(t[r-2]<<8)+t[r-1])>>10]+n[e>>4&63]+n[e<<2&63]+"="),i.join("")};for(var n=[],o=[],i="undefined"!=typeof Uint8Array?Uint8Array:Array,a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",s=0,c=a.length;s<c;++s)n[s]=a[s],o[a.charCodeAt(s)]=s;function u(t){var e=t.length;if(e%4>0)throw Error("Invalid string. Length must be a multiple of 4");var r=t.indexOf("=");return -1===r&&(r=e),[r,r===e?0:4-r%4]}o["-".charCodeAt(0)]=62,o["_".charCodeAt(0)]=63},function(t,e){/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */e.read=function(t,e,r,n,o){var i,a,s=8*o-n-1,c=(1<<s)-1,u=c>>1,f=-7,h=r?o-1:0,p=r?-1:1,l=t[e+h];for(h+=p,i=l&(1<<-f)-1,l>>=-f,f+=s;f>0;i=256*i+t[e+h],h+=p,f-=8);for(a=i&(1<<-f)-1,i>>=-f,f+=n;f>0;a=256*a+t[e+h],h+=p,f-=8);if(0===i)i=1-u;else{if(i===c)return a?NaN:1/0*(l?-1:1);a+=Math.pow(2,n),i-=u}return(l?-1:1)*a*Math.pow(2,i-n)},e.write=function(t,e,r,n,o,i){var a,s,c,u=8*i-o-1,f=(1<<u)-1,h=f>>1,p=23===o?5960464477539062e-23:0,l=n?0:i-1,d=n?1:-1,y=e<0||0===e&&1/e<0?1:0;for(isNaN(e=Math.abs(e))||e===1/0?(s=isNaN(e)?1:0,a=f):(a=Math.floor(Math.log(e)/Math.LN2),e*(c=Math.pow(2,-a))<1&&(a--,c*=2),(e+=a+h>=1?p/c:p*Math.pow(2,1-h))*c>=2&&(a++,c/=2),a+h>=f?(s=0,a=f):a+h>=1?(s=(e*c-1)*Math.pow(2,o),a+=h):(s=e*Math.pow(2,h-1)*Math.pow(2,o),a=0));o>=8;t[r+l]=255&s,l+=d,s/=256,o-=8);for(a=a<<o|s,u+=o;u>0;t[r+l]=255&a,l+=d,a/=256,u-=8);t[r+l-d]|=128*y}},function(t,e){var r={}.toString;t.exports=Array.isArray||function(t){return"[object Array]"==r.call(t)}},function(t,e){function r(t,e){for(var r=0,n=t.length-1;n>=0;n--){var o=t[n];"."===o?t.splice(n,1):".."===o?(t.splice(n,1),r++):r&&(t.splice(n,1),r--)}if(e)for(;r--;r)t.unshift("..");return t}var n=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,o=function(t){return n.exec(t).slice(1)};function a(t,e){if(t.filter)return t.filter(e);for(var r=[],n=0;n<t.length;n++)e(t[n],n,t)&&r.push(t[n]);return r}e.resolve=function(){for(var t="",e=!1,n=arguments.length-1;n>=-1&&!e;n--){var o=n>=0?arguments[n]:i.cwd();if("string"!=typeof o)throw TypeError("Arguments to path.resolve must be strings");o&&(t=o+"/"+t,e="/"===o.charAt(0))}return t=r(a(t.split("/"),function(t){return!!t}),!e).join("/"),(e?"/":"")+t||"."},e.normalize=function(t){var n=e.isAbsolute(t),o="/"===s(t,-1);return(t=r(a(t.split("/"),function(t){return!!t}),!n).join("/"))||n||(t="."),t&&o&&(t+="/"),(n?"/":"")+t},e.isAbsolute=function(t){return"/"===t.charAt(0)},e.join=function(){var t=Array.prototype.slice.call(arguments,0);return e.normalize(a(t,function(t,e){if("string"!=typeof t)throw TypeError("Arguments to path.join must be strings");return t}).join("/"))},e.relative=function(t,r){function n(t){for(var e=0;e<t.length&&""===t[e];e++);for(var r=t.length-1;r>=0&&""===t[r];r--);return e>r?[]:t.slice(e,r-e+1)}t=e.resolve(t).substr(1),r=e.resolve(r).substr(1);for(var o=n(t.split("/")),i=n(r.split("/")),a=Math.min(o.length,i.length),s=a,c=0;c<a;c++)if(o[c]!==i[c]){s=c;break}var u=[];for(c=s;c<o.length;c++)u.push("..");return(u=u.concat(i.slice(s))).join("/")},e.sep="/",e.delimiter=":",e.dirname=function(t){var e=o(t),r=e[0],n=e[1];return r||n?(n&&(n=n.substr(0,n.length-1)),r+n):"."},e.basename=function(t,e){var r=o(t)[2];return e&&r.substr(-1*e.length)===e&&(r=r.substr(0,r.length-e.length)),r},e.extname=function(t){return o(t)[3]};var s=function(t,e,r){return t.substr(e,r)}},function(t,e,r){let n=r(9),o=r(14),i=r(15),a=r(16),s=r(17),c=r(18),u=Object.prototype.toString,{Z_NO_FLUSH:f,Z_FINISH:h,Z_OK:p,Z_STREAM_END:l,Z_NEED_DICT:d,Z_STREAM_ERROR:y,Z_DATA_ERROR:g,Z_MEM_ERROR:_}=r(0);function m(t){this.options=o.assign({chunkSize:65536,windowBits:15,to:""},t||{});let e=this.options;e.raw&&e.windowBits>=0&&e.windowBits<16&&(e.windowBits=-e.windowBits,0===e.windowBits&&(e.windowBits=-15)),!(e.windowBits>=0&&e.windowBits<16)||t&&t.windowBits||(e.windowBits+=32),e.windowBits>15&&e.windowBits<48&&0==(15&e.windowBits)&&(e.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new s,this.strm.avail_out=0;let r=n.inflateInit2(this.strm,e.windowBits);if(r!==p||(this.header=new c,n.inflateGetHeader(this.strm,this.header),e.dictionary&&("string"==typeof e.dictionary?e.dictionary=i.string2buf(e.dictionary):"[object ArrayBuffer]"===u.call(e.dictionary)&&(e.dictionary=new Uint8Array(e.dictionary)),e.raw&&(r=n.inflateSetDictionary(this.strm,e.dictionary))!==p)))throw Error(a[r])}function w(t,e){let r=new m(e);if(r.push(t),r.err)throw r.msg||a[r.err];return r.result}m.prototype.push=function(t,e){let r,o,a;let s=this.strm,c=this.options.chunkSize,m=this.options.dictionary;if(this.ended)return!1;for(o=e===~~e?e:!0===e?h:f,"[object ArrayBuffer]"===u.call(t)?s.input=new Uint8Array(t):s.input=t,s.next_in=0,s.avail_in=s.input.length;;){for(0===s.avail_out&&(s.output=new Uint8Array(c),s.next_out=0,s.avail_out=c),(r=n.inflate(s,o))===d&&m&&((r=n.inflateSetDictionary(s,m))===p?r=n.inflate(s,o):r===g&&(r=d));s.avail_in>0&&r===l&&s.state.wrap>0&&0!==t[s.next_in];)n.inflateReset(s),r=n.inflate(s,o);switch(r){case y:case g:case d:case _:return this.onEnd(r),this.ended=!0,!1}if(a=s.avail_out,s.next_out&&(0===s.avail_out||r===l)){if("string"===this.options.to){let t=i.utf8border(s.output,s.next_out),e=s.next_out-t,r=i.buf2string(s.output,t);s.next_out=e,s.avail_out=c-e,e&&s.output.set(s.output.subarray(t,t+e),0),this.onData(r)}else this.onData(s.output.length===s.next_out?s.output:s.output.subarray(0,s.next_out))}if(r!==p||0!==a){if(r===l)return r=n.inflateEnd(this.strm),this.onEnd(r),this.ended=!0,!0;if(0===s.avail_in)break}}return!0},m.prototype.onData=function(t){this.chunks.push(t)},m.prototype.onEnd=function(t){t===p&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=o.flattenChunks(this.chunks)),this.chunks=[],this.err=t,this.msg=this.strm.msg},t.exports.Inflate=m,t.exports.inflate=w,t.exports.inflateRaw=function(t,e){return(e=e||{}).raw=!0,w(t,e)},t.exports.ungzip=w,t.exports.constants=r(0)},function(t,e,r){let n=r(10),o=r(11),i=r(12),a=r(13),{Z_FINISH:s,Z_BLOCK:c,Z_TREES:u,Z_OK:f,Z_STREAM_END:h,Z_NEED_DICT:p,Z_STREAM_ERROR:l,Z_DATA_ERROR:d,Z_MEM_ERROR:y,Z_BUF_ERROR:g,Z_DEFLATED:_}=r(0),m=t=>(t>>>24&255)+(t>>>8&65280)+((65280&t)<<8)+((255&t)<<24),w=t=>{if(!t)return 1;let e=t.state;return!e||e.strm!==t||e.mode<16180||e.mode>16211?1:0},E=t=>{if(w(t))return l;let e=t.state;return t.total_in=t.total_out=e.total=0,t.msg="",e.wrap&&(t.adler=1&e.wrap),e.mode=16180,e.last=0,e.havedict=0,e.flags=-1,e.dmax=32768,e.head=null,e.hold=0,e.bits=0,e.lencode=e.lendyn=new Int32Array(852),e.distcode=e.distdyn=new Int32Array(592),e.sane=1,e.back=-1,f},v=t=>{if(w(t))return l;let e=t.state;return e.wsize=0,e.whave=0,e.wnext=0,E(t)},S=(t,e)=>{let r;if(w(t))return l;let n=t.state;return e<0?(r=0,e=-e):(r=5+(e>>4),e<48&&(e&=15)),e&&(e<8||e>15)?l:(null!==n.window&&n.wbits!==e&&(n.window=null),n.wrap=r,n.wbits=e,v(t))},b=(t,e)=>{if(!t)return l;let r=new function(){this.strm=null,this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new Uint16Array(320),this.work=new Uint16Array(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0};t.state=r,r.strm=t,r.window=null,r.mode=16180;let n=S(t,e);return n!==f&&(t.state=null),n},I,F,O=!0,R=t=>{if(O){I=new Int32Array(512),F=new Int32Array(32);let e=0;for(;e<144;)t.lens[e++]=8;for(;e<256;)t.lens[e++]=9;for(;e<280;)t.lens[e++]=7;for(;e<288;)t.lens[e++]=8;for(a(1,t.lens,0,288,I,0,t.work,{bits:9}),e=0;e<32;)t.lens[e++]=5;a(2,t.lens,0,32,F,0,t.work,{bits:5}),O=!1}t.lencode=I,t.lenbits=9,t.distcode=F,t.distbits=5},k=(t,e,r,n)=>{let o;let i=t.state;return null===i.window&&(i.wsize=1<<i.wbits,i.wnext=0,i.whave=0,i.window=new Uint8Array(i.wsize)),n>=i.wsize?(i.window.set(e.subarray(r-i.wsize,r),0),i.wnext=0,i.whave=i.wsize):((o=i.wsize-i.wnext)>n&&(o=n),i.window.set(e.subarray(r-n,r-n+o),i.wnext),(n-=o)?(i.window.set(e.subarray(r-n,r),0),i.wnext=n,i.whave=i.wsize):(i.wnext+=o,i.wnext===i.wsize&&(i.wnext=0),i.whave<i.wsize&&(i.whave+=o))),0};t.exports.inflateReset=v,t.exports.inflateReset2=S,t.exports.inflateResetKeep=E,t.exports.inflateInit=t=>b(t,15),t.exports.inflateInit2=b,t.exports.inflate=(t,e)=>{let r,E,v,S,b,I,F,O,T,L,N,A,D,U,x,P,C,B,M,j,z,Y,Z,H,V=0,W=new Uint8Array(4),X=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]);if(w(t)||!t.output||!t.input&&0!==t.avail_in)return l;16191===(v=t.state).mode&&(v.mode=16192),F=t.next_out,b=t.output,T=t.avail_out,I=t.next_in,S=t.input,O=t.avail_in,L=v.hold,N=v.bits,A=O,D=T,H=f;t:for(;;)switch(v.mode){case 16180:if(0===v.wrap){v.mode=16192;break}for(;N<16;){if(0===O)break t;O--,L+=S[I++]<<N,N+=8}if(2&v.wrap&&35615===L){0===v.wbits&&(v.wbits=15),v.check=0,W[0]=255&L,W[1]=L>>>8&255,v.check=o(v.check,W,2,0),L=0,N=0,v.mode=16181;break}if(v.head&&(v.head.done=!1),!(1&v.wrap)||(((255&L)<<8)+(L>>8))%31){t.msg="incorrect header check",v.mode=16209;break}if((15&L)!==_){t.msg="unknown compression method",v.mode=16209;break}if(N-=4,Z=8+(15&(L>>>=4)),0===v.wbits&&(v.wbits=Z),Z>15||Z>v.wbits){t.msg="invalid window size",v.mode=16209;break}v.dmax=1<<v.wbits,v.flags=0,t.adler=v.check=1,v.mode=512&L?16189:16191,L=0,N=0;break;case 16181:for(;N<16;){if(0===O)break t;O--,L+=S[I++]<<N,N+=8}if(v.flags=L,(255&v.flags)!==_){t.msg="unknown compression method",v.mode=16209;break}if(57344&v.flags){t.msg="unknown header flags set",v.mode=16209;break}v.head&&(v.head.text=L>>8&1),512&v.flags&&4&v.wrap&&(W[0]=255&L,W[1]=L>>>8&255,v.check=o(v.check,W,2,0)),L=0,N=0,v.mode=16182;case 16182:for(;N<32;){if(0===O)break t;O--,L+=S[I++]<<N,N+=8}v.head&&(v.head.time=L),512&v.flags&&4&v.wrap&&(W[0]=255&L,W[1]=L>>>8&255,W[2]=L>>>16&255,W[3]=L>>>24&255,v.check=o(v.check,W,4,0)),L=0,N=0,v.mode=16183;case 16183:for(;N<16;){if(0===O)break t;O--,L+=S[I++]<<N,N+=8}v.head&&(v.head.xflags=255&L,v.head.os=L>>8),512&v.flags&&4&v.wrap&&(W[0]=255&L,W[1]=L>>>8&255,v.check=o(v.check,W,2,0)),L=0,N=0,v.mode=16184;case 16184:if(1024&v.flags){for(;N<16;){if(0===O)break t;O--,L+=S[I++]<<N,N+=8}v.length=L,v.head&&(v.head.extra_len=L),512&v.flags&&4&v.wrap&&(W[0]=255&L,W[1]=L>>>8&255,v.check=o(v.check,W,2,0)),L=0,N=0}else v.head&&(v.head.extra=null);v.mode=16185;case 16185:if(1024&v.flags&&((U=v.length)>O&&(U=O),U&&(v.head&&(Z=v.head.extra_len-v.length,v.head.extra||(v.head.extra=new Uint8Array(v.head.extra_len)),v.head.extra.set(S.subarray(I,I+U),Z)),512&v.flags&&4&v.wrap&&(v.check=o(v.check,S,U,I)),O-=U,I+=U,v.length-=U),v.length))break t;v.length=0,v.mode=16186;case 16186:if(2048&v.flags){if(0===O)break t;U=0;do Z=S[I+U++],v.head&&Z&&v.length<65536&&(v.head.name+=String.fromCharCode(Z));while(Z&&U<O);if(512&v.flags&&4&v.wrap&&(v.check=o(v.check,S,U,I)),O-=U,I+=U,Z)break t}else v.head&&(v.head.name=null);v.length=0,v.mode=16187;case 16187:if(4096&v.flags){if(0===O)break t;U=0;do Z=S[I+U++],v.head&&Z&&v.length<65536&&(v.head.comment+=String.fromCharCode(Z));while(Z&&U<O);if(512&v.flags&&4&v.wrap&&(v.check=o(v.check,S,U,I)),O-=U,I+=U,Z)break t}else v.head&&(v.head.comment=null);v.mode=16188;case 16188:if(512&v.flags){for(;N<16;){if(0===O)break t;O--,L+=S[I++]<<N,N+=8}if(4&v.wrap&&L!==(65535&v.check)){t.msg="header crc mismatch",v.mode=16209;break}L=0,N=0}v.head&&(v.head.hcrc=v.flags>>9&1,v.head.done=!0),t.adler=v.check=0,v.mode=16191;break;case 16189:for(;N<32;){if(0===O)break t;O--,L+=S[I++]<<N,N+=8}t.adler=v.check=m(L),L=0,N=0,v.mode=16190;case 16190:if(0===v.havedict)return t.next_out=F,t.avail_out=T,t.next_in=I,t.avail_in=O,v.hold=L,v.bits=N,p;t.adler=v.check=1,v.mode=16191;case 16191:if(e===c||e===u)break t;case 16192:if(v.last){L>>>=7&N,N-=7&N,v.mode=16206;break}for(;N<3;){if(0===O)break t;O--,L+=S[I++]<<N,N+=8}switch(v.last=1&L,N-=1,3&(L>>>=1)){case 0:v.mode=16193;break;case 1:if(R(v),v.mode=16199,e===u){L>>>=2,N-=2;break t}break;case 2:v.mode=16196;break;case 3:t.msg="invalid block type",v.mode=16209}L>>>=2,N-=2;break;case 16193:for(L>>>=7&N,N-=7&N;N<32;){if(0===O)break t;O--,L+=S[I++]<<N,N+=8}if((65535&L)!=(L>>>16^65535)){t.msg="invalid stored block lengths",v.mode=16209;break}if(v.length=65535&L,L=0,N=0,v.mode=16194,e===u)break t;case 16194:v.mode=16195;case 16195:if(U=v.length){if(U>O&&(U=O),U>T&&(U=T),0===U)break t;b.set(S.subarray(I,I+U),F),O-=U,I+=U,T-=U,F+=U,v.length-=U;break}v.mode=16191;break;case 16196:for(;N<14;){if(0===O)break t;O--,L+=S[I++]<<N,N+=8}if(v.nlen=257+(31&L),L>>>=5,N-=5,v.ndist=1+(31&L),L>>>=5,N-=5,v.ncode=4+(15&L),L>>>=4,N-=4,v.nlen>286||v.ndist>30){t.msg="too many length or distance symbols",v.mode=16209;break}v.have=0,v.mode=16197;case 16197:for(;v.have<v.ncode;){for(;N<3;){if(0===O)break t;O--,L+=S[I++]<<N,N+=8}v.lens[X[v.have++]]=7&L,L>>>=3,N-=3}for(;v.have<19;)v.lens[X[v.have++]]=0;if(v.lencode=v.lendyn,v.lenbits=7,r={bits:v.lenbits},H=a(0,v.lens,0,19,v.lencode,0,v.work,r),v.lenbits=r.bits,H){t.msg="invalid code lengths set",v.mode=16209;break}v.have=0,v.mode=16198;case 16198:for(;v.have<v.nlen+v.ndist;){for(;B=(V=v.lencode[L&(1<<v.lenbits)-1])>>>16&255,M=65535&V,!((C=V>>>24)<=N);){if(0===O)break t;O--,L+=S[I++]<<N,N+=8}if(M<16)L>>>=C,N-=C,v.lens[v.have++]=M;else{if(16===M){for(E=C+2;N<E;){if(0===O)break t;O--,L+=S[I++]<<N,N+=8}if(L>>>=C,N-=C,0===v.have){t.msg="invalid bit length repeat",v.mode=16209;break}Z=v.lens[v.have-1],U=3+(3&L),L>>>=2,N-=2}else if(17===M){for(E=C+3;N<E;){if(0===O)break t;O--,L+=S[I++]<<N,N+=8}N-=C,Z=0,U=3+(7&(L>>>=C)),L>>>=3,N-=3}else{for(E=C+7;N<E;){if(0===O)break t;O--,L+=S[I++]<<N,N+=8}N-=C,Z=0,U=11+(127&(L>>>=C)),L>>>=7,N-=7}if(v.have+U>v.nlen+v.ndist){t.msg="invalid bit length repeat",v.mode=16209;break}for(;U--;)v.lens[v.have++]=Z}}if(16209===v.mode)break;if(0===v.lens[256]){t.msg="invalid code -- missing end-of-block",v.mode=16209;break}if(v.lenbits=9,r={bits:v.lenbits},H=a(1,v.lens,0,v.nlen,v.lencode,0,v.work,r),v.lenbits=r.bits,H){t.msg="invalid literal/lengths set",v.mode=16209;break}if(v.distbits=6,v.distcode=v.distdyn,r={bits:v.distbits},H=a(2,v.lens,v.nlen,v.ndist,v.distcode,0,v.work,r),v.distbits=r.bits,H){t.msg="invalid distances set",v.mode=16209;break}if(v.mode=16199,e===u)break t;case 16199:v.mode=16200;case 16200:if(O>=6&&T>=258){t.next_out=F,t.avail_out=T,t.next_in=I,t.avail_in=O,v.hold=L,v.bits=N,i(t,D),F=t.next_out,b=t.output,T=t.avail_out,I=t.next_in,S=t.input,O=t.avail_in,L=v.hold,N=v.bits,16191===v.mode&&(v.back=-1);break}for(v.back=0;B=(V=v.lencode[L&(1<<v.lenbits)-1])>>>16&255,M=65535&V,!((C=V>>>24)<=N);){if(0===O)break t;O--,L+=S[I++]<<N,N+=8}if(B&&0==(240&B)){for(j=C,z=B,Y=M;B=(V=v.lencode[Y+((L&(1<<j+z)-1)>>j)])>>>16&255,M=65535&V,!(j+(C=V>>>24)<=N);){if(0===O)break t;O--,L+=S[I++]<<N,N+=8}L>>>=j,N-=j,v.back+=j}if(L>>>=C,N-=C,v.back+=C,v.length=M,0===B){v.mode=16205;break}if(32&B){v.back=-1,v.mode=16191;break}if(64&B){t.msg="invalid literal/length code",v.mode=16209;break}v.extra=15&B,v.mode=16201;case 16201:if(v.extra){for(E=v.extra;N<E;){if(0===O)break t;O--,L+=S[I++]<<N,N+=8}v.length+=L&(1<<v.extra)-1,L>>>=v.extra,N-=v.extra,v.back+=v.extra}v.was=v.length,v.mode=16202;case 16202:for(;B=(V=v.distcode[L&(1<<v.distbits)-1])>>>16&255,M=65535&V,!((C=V>>>24)<=N);){if(0===O)break t;O--,L+=S[I++]<<N,N+=8}if(0==(240&B)){for(j=C,z=B,Y=M;B=(V=v.distcode[Y+((L&(1<<j+z)-1)>>j)])>>>16&255,M=65535&V,!(j+(C=V>>>24)<=N);){if(0===O)break t;O--,L+=S[I++]<<N,N+=8}L>>>=j,N-=j,v.back+=j}if(L>>>=C,N-=C,v.back+=C,64&B){t.msg="invalid distance code",v.mode=16209;break}v.offset=M,v.extra=15&B,v.mode=16203;case 16203:if(v.extra){for(E=v.extra;N<E;){if(0===O)break t;O--,L+=S[I++]<<N,N+=8}v.offset+=L&(1<<v.extra)-1,L>>>=v.extra,N-=v.extra,v.back+=v.extra}if(v.offset>v.dmax){t.msg="invalid distance too far back",v.mode=16209;break}v.mode=16204;case 16204:if(0===T)break t;if(U=D-T,v.offset>U){if((U=v.offset-U)>v.whave&&v.sane){t.msg="invalid distance too far back",v.mode=16209;break}U>v.wnext?(U-=v.wnext,x=v.wsize-U):x=v.wnext-U,U>v.length&&(U=v.length),P=v.window}else P=b,x=F-v.offset,U=v.length;U>T&&(U=T),T-=U,v.length-=U;do b[F++]=P[x++];while(--U);0===v.length&&(v.mode=16200);break;case 16205:if(0===T)break t;b[F++]=v.length,T--,v.mode=16200;break;case 16206:if(v.wrap){for(;N<32;){if(0===O)break t;O--,L|=S[I++]<<N,N+=8}if(D-=T,t.total_out+=D,v.total+=D,4&v.wrap&&D&&(t.adler=v.check=v.flags?o(v.check,b,D,F-D):n(v.check,b,D,F-D)),D=T,4&v.wrap&&(v.flags?L:m(L))!==v.check){t.msg="incorrect data check",v.mode=16209;break}L=0,N=0}v.mode=16207;case 16207:if(v.wrap&&v.flags){for(;N<32;){if(0===O)break t;O--,L+=S[I++]<<N,N+=8}if(4&v.wrap&&L!==(4294967295&v.total)){t.msg="incorrect length check",v.mode=16209;break}L=0,N=0}v.mode=16208;case 16208:H=h;break t;case 16209:H=d;break t;case 16210:return y;default:return l}return t.next_out=F,t.avail_out=T,t.next_in=I,t.avail_in=O,v.hold=L,v.bits=N,(v.wsize||D!==t.avail_out&&v.mode<16209&&(v.mode<16206||e!==s))&&k(t,t.output,t.next_out,D-t.avail_out)?(v.mode=16210,y):(A-=t.avail_in,D-=t.avail_out,t.total_in+=A,t.total_out+=D,v.total+=D,4&v.wrap&&D&&(t.adler=v.check=v.flags?o(v.check,b,D,t.next_out-D):n(v.check,b,D,t.next_out-D)),t.data_type=v.bits+(v.last?64:0)+(16191===v.mode?128:0)+(16199===v.mode||16194===v.mode?256:0),(0===A&&0===D||e===s)&&H===f&&(H=g),H)},t.exports.inflateEnd=t=>{if(w(t))return l;let e=t.state;return e.window&&(e.window=null),t.state=null,f},t.exports.inflateGetHeader=(t,e)=>{if(w(t))return l;let r=t.state;return 0==(2&r.wrap)?l:(r.head=e,e.done=!1,f)},t.exports.inflateSetDictionary=(t,e)=>{let r;let o=e.length;return w(t)?l:0!==(r=t.state).wrap&&16190!==r.mode?l:16190===r.mode&&n(1,e,o,0)!==r.check?d:k(t,e,o,o)?(r.mode=16210,y):(r.havedict=1,f)},t.exports.inflateInfo="pako inflate (from Nodeca project)"},function(t,e,r){t.exports=(t,e,r,n)=>{let o=65535&t|0,i=t>>>16&65535|0,a=0;for(;0!==r;){r-=a=r>2e3?2e3:r;do i=i+(o=o+e[n++]|0)|0;while(--a);o%=65521,i%=65521}return o|i<<16|0}},function(t,e,r){let n=new Uint32Array((()=>{let t,e=[];for(var r=0;r<256;r++){t=r;for(var n=0;n<8;n++)t=1&t?3988292384^t>>>1:t>>>1;e[r]=t}return e})());t.exports=(t,e,r,o)=>{let i=o+r;t^=-1;for(let r=o;r<i;r++)t=t>>>8^n[255&(t^e[r])];return -1^t}},function(t,e,r){t.exports=function(t,e){let r,n,o,i,a,s,c,u,f,h,p,l,d,y,g,_,m,w,E,v,S,b,I,F;let O=t.state;r=t.next_in,I=t.input,n=r+(t.avail_in-5),o=t.next_out,F=t.output,i=o-(e-t.avail_out),a=o+(t.avail_out-257),s=O.dmax,c=O.wsize,u=O.whave,f=O.wnext,h=O.window,p=O.hold,l=O.bits,d=O.lencode,y=O.distcode,g=(1<<O.lenbits)-1,_=(1<<O.distbits)-1;t:do for(l<15&&(p+=I[r++]<<l,l+=8,p+=I[r++]<<l,l+=8),m=d[p&g];;){if(p>>>=w=m>>>24,l-=w,0==(w=m>>>16&255))F[o++]=65535&m;else{if(!(16&w)){if(0==(64&w)){m=d[(65535&m)+(p&(1<<w)-1)];continue}if(32&w){O.mode=16191;break t}t.msg="invalid literal/length code",O.mode=16209;break t}for(E=65535&m,(w&=15)&&(l<w&&(p+=I[r++]<<l,l+=8),E+=p&(1<<w)-1,p>>>=w,l-=w),l<15&&(p+=I[r++]<<l,l+=8,p+=I[r++]<<l,l+=8),m=y[p&_];;){if(p>>>=w=m>>>24,l-=w,!(16&(w=m>>>16&255))){if(0==(64&w)){m=y[(65535&m)+(p&(1<<w)-1)];continue}t.msg="invalid distance code",O.mode=16209;break t}if(v=65535&m,l<(w&=15)&&(p+=I[r++]<<l,(l+=8)<w&&(p+=I[r++]<<l,l+=8)),(v+=p&(1<<w)-1)>s){t.msg="invalid distance too far back",O.mode=16209;break t}if(p>>>=w,l-=w,v>(w=o-i)){if((w=v-w)>u&&O.sane){t.msg="invalid distance too far back",O.mode=16209;break t}if(S=0,b=h,0===f){if(S+=c-w,w<E){E-=w;do F[o++]=h[S++];while(--w);S=o-v,b=F}}else if(f<w){if(S+=c+f-w,(w-=f)<E){E-=w;do F[o++]=h[S++];while(--w);if(S=0,f<E){E-=w=f;do F[o++]=h[S++];while(--w);S=o-v,b=F}}}else if(S+=f-w,w<E){E-=w;do F[o++]=h[S++];while(--w);S=o-v,b=F}for(;E>2;)F[o++]=b[S++],F[o++]=b[S++],F[o++]=b[S++],E-=3;E&&(F[o++]=b[S++],E>1&&(F[o++]=b[S++]))}else{S=o-v;do F[o++]=F[S++],F[o++]=F[S++],F[o++]=F[S++],E-=3;while(E>2);E&&(F[o++]=F[S++],E>1&&(F[o++]=F[S++]))}break}}break}while(r<n&&o<a);r-=E=l>>3,p&=(1<<(l-=E<<3))-1,t.next_in=r,t.next_out=o,t.avail_in=r<n?n-r+5:5-(r-n),t.avail_out=o<a?a-o+257:257-(o-a),O.hold=p,O.bits=l}},function(t,e,r){let n=new Uint16Array([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0]),o=new Uint8Array([16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78]),i=new Uint16Array([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0]),a=new Uint8Array([16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64]);t.exports=(t,e,r,s,c,u,f,h)=>{let p=h.bits,l,d,y,g,_,m,w=0,E=0,v=0,S=0,b=0,I=0,F=0,O=0,R=0,k=0,T=null,L=new Uint16Array(16),N=new Uint16Array(16),A,D,U,x=null;for(w=0;w<=15;w++)L[w]=0;for(E=0;E<s;E++)L[e[r+E]]++;for(b=p,S=15;S>=1&&0===L[S];S--);if(b>S&&(b=S),0===S)return c[u++]=20971520,c[u++]=20971520,h.bits=1,0;for(v=1;v<S&&0===L[v];v++);for(b<v&&(b=v),O=1,w=1;w<=15;w++)if(O<<=1,(O-=L[w])<0)return -1;if(O>0&&(0===t||1!==S))return -1;for(N[1]=0,w=1;w<15;w++)N[w+1]=N[w]+L[w];for(E=0;E<s;E++)0!==e[r+E]&&(f[N[e[r+E]]++]=E);if(0===t?(T=x=f,m=20):1===t?(T=n,x=o,m=257):(T=i,x=a,m=0),k=0,E=0,w=v,_=u,I=b,F=0,y=-1,g=(R=1<<b)-1,1===t&&R>852||2===t&&R>592)return 1;for(;;){A=w-F,f[E]+1<m?(D=0,U=f[E]):f[E]>=m?(D=x[f[E]-m],U=T[f[E]-m]):(D=96,U=0),l=1<<w-F,v=d=1<<I;do c[_+(k>>F)+(d-=l)]=A<<24|D<<16|U|0;while(0!==d);for(l=1<<w-1;k&l;)l>>=1;if(0!==l?(k&=l-1,k+=l):k=0,E++,0==--L[w]){if(w===S)break;w=e[r+f[E]]}if(w>b&&(k&g)!==y){for(0===F&&(F=b),_+=v,O=1<<(I=w-F);I+F<S&&!((O-=L[I+F])<=0);)I++,O<<=1;if(R+=1<<I,1===t&&R>852||2===t&&R>592)return 1;c[y=k&g]=b<<24|I<<16|_-u|0}}return 0!==k&&(c[_+k]=w-F<<24|4194304),h.bits=b,0}},function(t,e,r){let n=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);t.exports.assign=function(t){let e=Array.prototype.slice.call(arguments,1);for(;e.length;){let r=e.shift();if(r){if("object"!=typeof r)throw TypeError(r+"must be non-object");for(let e in r)n(r,e)&&(t[e]=r[e])}}return t},t.exports.flattenChunks=t=>{let e=0;for(let r=0,n=t.length;r<n;r++)e+=t[r].length;let r=new Uint8Array(e);for(let e=0,n=0,o=t.length;e<o;e++){let o=t[e];r.set(o,n),n+=o.length}return r}},function(t,e,r){let n=!0;try{String.fromCharCode.apply(null,new Uint8Array(1))}catch(t){n=!1}let o=new Uint8Array(256);for(let t=0;t<256;t++)o[t]=t>=252?6:t>=248?5:t>=240?4:t>=224?3:t>=192?2:1;o[254]=o[254]=1,t.exports.string2buf=t=>{if("function"==typeof TextEncoder&&TextEncoder.prototype.encode)return(new TextEncoder).encode(t);let e,r,n,o,i,a=t.length,s=0;for(o=0;o<a;o++)55296==(64512&(r=t.charCodeAt(o)))&&o+1<a&&56320==(64512&(n=t.charCodeAt(o+1)))&&(r=65536+(r-55296<<10)+(n-56320),o++),s+=r<128?1:r<2048?2:r<65536?3:4;for(e=new Uint8Array(s),i=0,o=0;i<s;o++)55296==(64512&(r=t.charCodeAt(o)))&&o+1<a&&56320==(64512&(n=t.charCodeAt(o+1)))&&(r=65536+(r-55296<<10)+(n-56320),o++),r<128?e[i++]=r:(r<2048?e[i++]=192|r>>>6:(r<65536?e[i++]=224|r>>>12:(e[i++]=240|r>>>18,e[i++]=128|r>>>12&63),e[i++]=128|r>>>6&63),e[i++]=128|63&r);return e},t.exports.buf2string=(t,e)=>{let r,i;let a=e||t.length;if("function"==typeof TextDecoder&&TextDecoder.prototype.decode)return(new TextDecoder).decode(t.subarray(0,e));let s=Array(2*a);for(i=0,r=0;r<a;){let e=t[r++];if(e<128){s[i++]=e;continue}let n=o[e];if(n>4)s[i++]=65533,r+=n-1;else{for(e&=2===n?31:3===n?15:7;n>1&&r<a;)e=e<<6|63&t[r++],n--;n>1?s[i++]=65533:e<65536?s[i++]=e:(e-=65536,s[i++]=55296|e>>10&1023,s[i++]=56320|1023&e)}}return((t,e)=>{if(e<65534&&t.subarray&&n)return String.fromCharCode.apply(null,t.length===e?t:t.subarray(0,e));let r="";for(let n=0;n<e;n++)r+=String.fromCharCode(t[n]);return r})(s,i)},t.exports.utf8border=(t,e)=>{(e=e||t.length)>t.length&&(e=t.length);let r=e-1;for(;r>=0&&128==(192&t[r]);)r--;return r<0?e:0===r?e:r+o[t[r]]>e?r:e}},function(t,e,r){t.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},function(t,e,r){t.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},function(t,e,r){t.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}}])},t.exports=n()}}]);
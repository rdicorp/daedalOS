(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6173],
    {
        66173: function (r, e, t) {
            var n = t(34155);
            !(function () {
                var e,
                    t,
                    a,
                    i,
                    f,
                    o,
                    v,
                    u,
                    s,
                    l,
                    c,
                    h,
                    d,
                    w,
                    g,
                    _,
                    b,
                    p,
                    m,
                    A,
                    U,
                    I,
                    y,
                    E,
                    M,
                    D,
                    k,
                    B = {};
                function F() {
                    void 0 === n && console.log.apply(console, arguments);
                }
                (r.exports = B),
                    (function () {
                        "use strict";
                        var r = (function () {
                            function r(r) {
                                this.message = "JPEG error: " + r;
                            }
                            return (r.prototype = Error()), (r.prototype.name = "JpegError"), (r.constructor = r), r;
                        })(),
                            e = (function () {
                                var e = new Uint8Array([
                                    0,
                                    1,
                                    8,
                                    16,
                                    9,
                                    2,
                                    3,
                                    10,
                                    17,
                                    24,
                                    32,
                                    25,
                                    18,
                                    11,
                                    4,
                                    5,
                                    12,
                                    19,
                                    26,
                                    33,
                                    40,
                                    48,
                                    41,
                                    34,
                                    27,
                                    20,
                                    13,
                                    6,
                                    7,
                                    14,
                                    21,
                                    28,
                                    35,
                                    42,
                                    49,
                                    56,
                                    57,
                                    50,
                                    43,
                                    36,
                                    29,
                                    22,
                                    15,
                                    23,
                                    30,
                                    37,
                                    44,
                                    51,
                                    58,
                                    59,
                                    52,
                                    45,
                                    38,
                                    31,
                                    39,
                                    46,
                                    53,
                                    60,
                                    61,
                                    54,
                                    47,
                                    55,
                                    62,
                                    63,
                                ]);
                                function n(r) {
                                    null == r && (r = {}), null == r.w && (r.w = -1), (this.V = r.n), (this.N = r.w);
                                }
                                function a(r, e, t) {
                                    return 64 * ((r.P + 1) * e + t);
                                }
                                function i(r, e, n) {
                                    null == n && (n = e);
                                    var a = r.length - 1,
                                        i = n < e ? n : e;
                                    if (e >= a) return null;
                                    var f = t(r, e);
                                    if (f >= 65472 && f <= 65534) return { u: null, M: f, offset: e };
                                    for (var o = t(r, i); !(o >= 65472 && o <= 65534);) {
                                        if (++i >= a) return null;
                                        o = t(r, i);
                                    }
                                    return { u: f.toString(16), M: o, offset: i };
                                }
                                return (
                                    (n.prototype = {
                                        parse(n, f) {
                                            null == f && (f = {});
                                            var o,
                                                v,
                                                u = f.F,
                                                s = 0,
                                                l = null,
                                                c = null,
                                                h = 0,
                                                d = [],
                                                w = [],
                                                g = [],
                                                _ = t(n, 0);
                                            if (((s += 2), 65496 !== _)) throw new r("SOI not found");
                                            (_ = t(n, s)), (s += 2);
                                            r: for (; 65497 !== _;) {
                                                switch (_) {
                                                    case 65504:
                                                    case 65505:
                                                    case 65506:
                                                    case 65507:
                                                    case 65508:
                                                    case 65509:
                                                    case 65510:
                                                    case 65511:
                                                    case 65512:
                                                    case 65513:
                                                    case 65514:
                                                    case 65515:
                                                    case 65516:
                                                    case 65517:
                                                    case 65518:
                                                    case 65519:
                                                    case 65534:
                                                        var b = (function () {
                                                            var r = t(n, s),
                                                                e = (s += 2) + r - 2,
                                                                a = i(n, e, s);
                                                            a && a.u && (e = a.offset);
                                                            var f = n.subarray(s, e);
                                                            return (s += f.length), f;
                                                        })();
                                                        65504 === _ &&
                                                            74 === b[0] &&
                                                            70 === b[1] &&
                                                            73 === b[2] &&
                                                            70 === b[3] &&
                                                            0 === b[4] &&
                                                            (l = { version: { d: b[5], T: b[6] }, K: b[7], j: (b[8] << 8) | b[9], H: (b[10] << 8) | b[11], S: b[12], I: b[13], C: b.subarray(14, 14 + 3 * b[12] * b[13]) }),
                                                            65518 === _ &&
                                                            65 === b[0] &&
                                                            100 === b[1] &&
                                                            111 === b[2] &&
                                                            98 === b[3] &&
                                                            101 === b[4] &&
                                                            (c = { version: (b[5] << 8) | b[6], k: (b[7] << 8) | b[8], q: (b[9] << 8) | b[10], a: b[11] });
                                                        break;
                                                    case 65499:
                                                        for (var p, m, A, U = t(n, s), I = U + (s += 2) - 2; s < I;) {
                                                            var y = n[s++],
                                                                E = new Uint16Array(64);
                                                            if (y >> 4 == 0) for (m = 0; m < 64; m++) E[e[m]] = n[s++];
                                                            else if (y >> 4 == 1) for (m = 0; m < 64; m++) (E[e[m]] = t(n, s)), (s += 2);
                                                            else throw new r("DQT - invalid table spec");
                                                            d[15 & y] = E;
                                                        }
                                                        break;
                                                    case 65472:
                                                    case 65473:
                                                    case 65474:
                                                        if (o) throw new r("Only single frame JPEGs supported");
                                                        (s += 2), ((o = {}).G = 65473 === _), (o.Z = 65474 === _), (o.precision = n[s++]);
                                                        var M,
                                                            D = t(n, s),
                                                            k = 0,
                                                            B = 0;
                                                        (s += 2), (o.s = u || D), (o.o = t(n, s)), (s += 2), (o.W = []), (o._ = {});
                                                        var F = n[s++];
                                                        for (p = 0; p < F; p++) {
                                                            M = n[s];
                                                            var x = n[s + 1] >> 4,
                                                                P = 15 & n[s + 1];
                                                            k < x && (k = x), B < P && (B = P);
                                                            var C = n[s + 2];
                                                            (A = o.W.push({ h: x, A: P, L: C, $: null })), (o._[M] = A - 1), (s += 3);
                                                        }
                                                        (o.X = k),
                                                            (o.B = B),
                                                            (function (r) {
                                                                for (var e = Math.ceil(r.o / 8 / r.X), t = Math.ceil(r.s / 8 / r.B), n = 0; n < r.W.length; n++) {
                                                                    J = r.W[n];
                                                                    var a = Math.ceil((Math.ceil(r.o / 8) * J.h) / r.X),
                                                                        i = Math.ceil((Math.ceil(r.s / 8) * J.A) / r.B),
                                                                        f = e * J.h,
                                                                        o = t * J.A * 64 * (f + 1);
                                                                    (J.D = new Int16Array(o)), (J.P = a), (J.c = i);
                                                                }
                                                                (r.m = e), (r.R = t);
                                                            })(o);
                                                        break;
                                                    case 65476:
                                                        var H = t(n, s);
                                                        for (s += 2, p = 2; p < H;) {
                                                            var L = n[s++],
                                                                S = new Uint8Array(16),
                                                                N = 0;
                                                            for (m = 0; m < 16; m++, s++) N += S[m] = n[s];
                                                            var G = new Uint8Array(N);
                                                            for (m = 0; m < N; m++, s++) G[m] = n[s];
                                                            (p += 17 + N),
                                                                ((L >> 4 == 0 ? g : w)[15 & L] = (function (r, e) {
                                                                    for (var t, n, a, i = 0, f = [], o = 16; o > 0 && !r[o - 1];) o--;
                                                                    f.push({ children: [], index: 0 });
                                                                    var v = f[0];
                                                                    for (t = 0; t < o; t++) {
                                                                        for (n = 0; n < r[t]; n++) {
                                                                            for ((v = f.pop()).children[v.index] = e[i]; v.index > 0;) v = f.pop();
                                                                            for (v.index++, f.push(v); f.length <= t;) f.push((a = { children: [], index: 0 })), (v.children[v.index] = a.children), (v = a);
                                                                            i++;
                                                                        }
                                                                        t + 1 < o && (f.push((a = { children: [], index: 0 })), (v.children[v.index] = a.children), (v = a));
                                                                    }
                                                                    return f[0].children;
                                                                })(S, G));
                                                        }
                                                        break;
                                                    case 65501:
                                                        (s += 2), (v = t(n, s)), (s += 2);
                                                        break;
                                                    case 65498:
                                                        var J,
                                                            O = 1 == ++h && !u;
                                                        s += 2;
                                                        var W = n[s++],
                                                            j = [];
                                                        for (p = 0; p < W; p++) {
                                                            var T = n[s++],
                                                                R = o._[T];
                                                            (J = o.W[R]).index = T;
                                                            var Q = n[s++];
                                                            (J.J = g[Q >> 4]), (J.i = w[15 & Q]), j.push(J);
                                                        }
                                                        var q = n[s++],
                                                            Z = n[s++],
                                                            $ = n[s++];
                                                        try {
                                                            var V = (function (n, f, o, v, u, s, l, c, h, d) {
                                                                null == d && (d = !1);
                                                                var w,
                                                                    g,
                                                                    _,
                                                                    b,
                                                                    p,
                                                                    m,
                                                                    A,
                                                                    U,
                                                                    I,
                                                                    y,
                                                                    E,
                                                                    M = o.m,
                                                                    D = o.Z,
                                                                    k = f,
                                                                    B = 0,
                                                                    F = 0,
                                                                    x = 0,
                                                                    P = 0,
                                                                    C = 0,
                                                                    H = 0;
                                                                function L() {
                                                                    if (F > 0) return F--, (B >> F) & 1;
                                                                    if (255 === (B = n[f++])) {
                                                                        var e = n[f++];
                                                                        if (e) {
                                                                            if (220 === e && d) {
                                                                                var a = t(n, (f += 2));
                                                                                if (((f += 2), a > 0 && a !== o.s)) throw new DNLMarkerError("Found DNL marker (0xFFDC) while parsing scan data", a);
                                                                            } else if (217 === e) {
                                                                                if (d) {
                                                                                    var i = 8 * C;
                                                                                    if (i > 0 && i < o.s / 10)
                                                                                        throw new DNLMarkerError("Found EOI marker (0xFFD9) while parsing scan data, possibly caused by incorrect `scanLines` parameter", i);
                                                                                }
                                                                                throw new EOIMarkerError("Found EOI marker (0xFFD9) while parsing scan data");
                                                                            }
                                                                            throw new r("unexpected marker");
                                                                        }
                                                                    }
                                                                    return (F = 7), B >>> 7;
                                                                }
                                                                function S(e) {
                                                                    for (var t = e; ;) {
                                                                        switch (typeof (t = t[L()])) {
                                                                            case "number":
                                                                                return t;
                                                                            case "object":
                                                                                continue;
                                                                        }
                                                                        throw new r("invalid huffman sequence");
                                                                    }
                                                                }
                                                                function N(r) {
                                                                    for (var e = 0; r > 0;) (e = (e << 1) | L()), r--;
                                                                    return e;
                                                                }
                                                                function G(r) {
                                                                    if (1 === r) return 1 === L() ? 1 : -1;
                                                                    var e = N(r);
                                                                    return e >= 1 << (r - 1) ? e : e + (-1 << r) + 1;
                                                                }
                                                                var J = v.length;
                                                                for (
                                                                    A = D
                                                                        ? 0 === s
                                                                            ? 0 === c
                                                                                ? function (r, e) {
                                                                                    var t = S(r.J),
                                                                                        n = 0 === t ? 0 : G(t) << h;
                                                                                    r.D[e] = r.Q += n;
                                                                                }
                                                                                : function (r, e) {
                                                                                    r.D[e] |= L() << h;
                                                                                }
                                                                            : 0 === c
                                                                                ? function (r, t) {
                                                                                    if (x > 0) {
                                                                                        x--;
                                                                                        return;
                                                                                    }
                                                                                    for (var n = s; n <= l;) {
                                                                                        var a = S(r.i),
                                                                                            i = 15 & a,
                                                                                            f = a >> 4;
                                                                                        if (0 === i) {
                                                                                            if (f < 15) {
                                                                                                x = N(f) + (1 << f) - 1;
                                                                                                break;
                                                                                            }
                                                                                            n += 16;
                                                                                            continue;
                                                                                        }
                                                                                        var o = e[(n += f)];
                                                                                        (r.D[t + o] = G(i) * (1 << h)), n++;
                                                                                    }
                                                                                }
                                                                                : function (t, n) {
                                                                                    for (var a, i, f = s, o = 0; f <= l;) {
                                                                                        var v = n + e[f],
                                                                                            u = t.D[v] < 0 ? -1 : 1;
                                                                                        switch (P) {
                                                                                            case 0:
                                                                                                if (((a = 15 & (i = S(t.i))), (o = i >> 4), 0 === a)) o < 15 ? ((x = N(o) + (1 << o)), (P = 4)) : ((o = 16), (P = 1));
                                                                                                else {
                                                                                                    if (1 !== a) throw new r("invalid ACn encoding");
                                                                                                    (w = G(a)), (P = o ? 2 : 3);
                                                                                                }
                                                                                                continue;
                                                                                            case 1:
                                                                                            case 2:
                                                                                                t.D[v] ? (t.D[v] += u * (L() << h)) : 0 == --o && (P = 2 === P ? 3 : 0);
                                                                                                break;
                                                                                            case 3:
                                                                                                t.D[v] ? (t.D[v] += u * (L() << h)) : ((t.D[v] = w << h), (P = 0));
                                                                                                break;
                                                                                            case 4:
                                                                                                t.D[v] && (t.D[v] += u * (L() << h));
                                                                                        }
                                                                                        f++;
                                                                                    }
                                                                                    4 === P && 0 == --x && (P = 0);
                                                                                }
                                                                        : function (r, t) {
                                                                            var n = S(r.J),
                                                                                a = 0 === n ? 0 : G(n),
                                                                                i = 1;
                                                                            for (r.D[t] = r.Q += a; i < 64;) {
                                                                                var f = S(r.i),
                                                                                    o = 15 & f,
                                                                                    v = f >> 4;
                                                                                if (0 === o) {
                                                                                    if (v < 15) break;
                                                                                    i += 16;
                                                                                    continue;
                                                                                }
                                                                                var u = e[(i += v)];
                                                                                (r.D[t + u] = G(o)), i++;
                                                                            }
                                                                        },
                                                                    I = 1 === J ? v[0].P * v[0].c : M * o.R;
                                                                    H <= I;

                                                                ) {
                                                                    var O = u ? Math.min(I - H, u) : I;
                                                                    if (O > 0) {
                                                                        for (_ = 0; _ < J; _++) v[_].Q = 0;
                                                                        if (((x = 0), 1 === J))
                                                                            for (m = 0, g = v[0]; m < O; m++)
                                                                                (function (r, e, t) {
                                                                                    C = (t / r.P) | 0;
                                                                                    var n = t % r.P,
                                                                                        i = a(r, C, n);
                                                                                    e(r, i);
                                                                                })(g, A, H),
                                                                                    H++;
                                                                        else
                                                                            for (m = 0; m < O; m++) {
                                                                                for (_ = 0; _ < J; _++)
                                                                                    for (b = 0, y = (g = v[_]).h, E = g.A; b < E; b++)
                                                                                        for (p = 0; p < y; p++)
                                                                                            !(function (r, e, t, n, i) {
                                                                                                C = ((t / M) | 0) * r.A + n;
                                                                                                var f = (t % M) * r.h + i,
                                                                                                    o = a(r, C, f);
                                                                                                e(r, o);
                                                                                            })(g, A, H, b, p);
                                                                                H++;
                                                                            }
                                                                    }
                                                                    if (((F = 0), !(U = i(n, f)))) break;
                                                                    if ((U.u && (f = U.offset), U.M >= 65488 && U.M <= 65495)) f += 2;
                                                                    else break;
                                                                }
                                                                return f - k;
                                                            })(n, s, o, j, v, q, Z, $ >> 4, 15 & $, O);
                                                            s += V;
                                                        } catch (r) {
                                                            if (r instanceof DNLMarkerError) return this.parse(n, { F: r.s });
                                                            if (r instanceof EOIMarkerError) break r;
                                                            throw r;
                                                        }
                                                        break;
                                                    case 65500:
                                                        s += 4;
                                                        break;
                                                    case 65535:
                                                        255 !== n[s] && s--;
                                                        break;
                                                    default:
                                                        var X = i(n, s - 2, s - 3);
                                                        if (X && X.u) {
                                                            s = X.offset;
                                                            break;
                                                        }
                                                        if (s >= n.length - 1) break r;
                                                        throw new r("JpegImage.parse - unknown marker: " + _.toString(16));
                                                }
                                                (_ = t(n, s)), (s += 2);
                                            }
                                            for (p = 0, this.width = o.o, this.height = o.s, this.g = l, this.b = c, this.W = []; p < o.W.length; p++) {
                                                var z = d[(J = o.W[p]).L];
                                                z && (J.$ = z),
                                                    this.W.push({
                                                        index: J.index,
                                                        e: (function (e, t) {
                                                            for (var n = t.P, i = t.c, f = new Int16Array(64), o = 0; o < i; o++)
                                                                for (var v = 0; v < n; v++) {
                                                                    var u = a(t, o, v);
                                                                    !(function (e, t, n) {
                                                                        var a,
                                                                            i,
                                                                            f,
                                                                            o,
                                                                            v,
                                                                            u,
                                                                            s,
                                                                            l,
                                                                            c,
                                                                            h,
                                                                            d,
                                                                            w,
                                                                            g,
                                                                            _,
                                                                            b,
                                                                            p,
                                                                            m,
                                                                            A = e.$,
                                                                            U = e.D;
                                                                        if (!A) throw new r("missing required Quantization Table.");
                                                                        for (var I = 0; I < 64; I += 8) {
                                                                            if (
                                                                                ((c = U[t + I]),
                                                                                    (h = U[t + I + 1]),
                                                                                    (d = U[t + I + 2]),
                                                                                    (w = U[t + I + 3]),
                                                                                    (g = U[t + I + 4]),
                                                                                    (_ = U[t + I + 5]),
                                                                                    (b = U[t + I + 6]),
                                                                                    (p = U[t + I + 7]),
                                                                                    (c *= A[I]),
                                                                                    (h | d | w | g | _ | b | p) == 0)
                                                                            ) {
                                                                                (m = (5793 * c + 512) >> 10), (n[I] = m), (n[I + 1] = m), (n[I + 2] = m), (n[I + 3] = m), (n[I + 4] = m), (n[I + 5] = m), (n[I + 6] = m), (n[I + 7] = m);
                                                                                continue;
                                                                            }
                                                                            (h *= A[I + 1]),
                                                                                (d *= A[I + 2]),
                                                                                (w *= A[I + 3]),
                                                                                (g *= A[I + 4]),
                                                                                (_ *= A[I + 5]),
                                                                                (b *= A[I + 6]),
                                                                                (p *= A[I + 7]),
                                                                                (a = (5793 * c + 128) >> 8),
                                                                                (i = (5793 * g + 128) >> 8),
                                                                                (f = d),
                                                                                (o = b),
                                                                                (v = (2896 * (h - p) + 128) >> 8),
                                                                                (l = (2896 * (h + p) + 128) >> 8),
                                                                                (u = w << 4),
                                                                                (s = _ << 4),
                                                                                (i = (a = (a + i + 1) >> 1) - i),
                                                                                (m = (3784 * f + 1567 * o + 128) >> 8),
                                                                                (f = (1567 * f - 3784 * o + 128) >> 8),
                                                                                (o = m),
                                                                                (s = (v = (v + s + 1) >> 1) - s),
                                                                                (u = (l = (l + u + 1) >> 1) - u),
                                                                                (o = (a = (a + o + 1) >> 1) - o),
                                                                                (f = (i = (i + f + 1) >> 1) - f),
                                                                                (m = (2276 * v + 3406 * l + 2048) >> 12),
                                                                                (v = (3406 * v - 2276 * l + 2048) >> 12),
                                                                                (l = m),
                                                                                (m = (799 * u + 4017 * s + 2048) >> 12),
                                                                                (u = (4017 * u - 799 * s + 2048) >> 12),
                                                                                (s = m),
                                                                                (n[I] = a + l),
                                                                                (n[I + 7] = a - l),
                                                                                (n[I + 1] = i + s),
                                                                                (n[I + 6] = i - s),
                                                                                (n[I + 2] = f + u),
                                                                                (n[I + 5] = f - u),
                                                                                (n[I + 3] = o + v),
                                                                                (n[I + 4] = o - v);
                                                                        }
                                                                        for (var y = 0; y < 8; ++y) {
                                                                            if (((c = n[y]), (h = n[y + 8]), (d = n[y + 16]), (w = n[y + 24]), (g = n[y + 32]), (h | d | w | g | (_ = n[y + 40]) | (b = n[y + 48]) | (p = n[y + 56])) == 0)) {
                                                                                (m = (m = (5793 * c + 8192) >> 14) < -2040 ? 0 : m >= 2024 ? 255 : (m + 2056) >> 4),
                                                                                    (U[t + y] = m),
                                                                                    (U[t + y + 8] = m),
                                                                                    (U[t + y + 16] = m),
                                                                                    (U[t + y + 24] = m),
                                                                                    (U[t + y + 32] = m),
                                                                                    (U[t + y + 40] = m),
                                                                                    (U[t + y + 48] = m),
                                                                                    (U[t + y + 56] = m);
                                                                                continue;
                                                                            }
                                                                            (a = (5793 * c + 2048) >> 12),
                                                                                (i = (5793 * g + 2048) >> 12),
                                                                                (f = d),
                                                                                (o = b),
                                                                                (v = (2896 * (h - p) + 2048) >> 12),
                                                                                (l = (2896 * (h + p) + 2048) >> 12),
                                                                                (u = w),
                                                                                (s = _),
                                                                                (i = (a = ((a + i + 1) >> 1) + 4112) - i),
                                                                                (m = (3784 * f + 1567 * o + 2048) >> 12),
                                                                                (f = (1567 * f - 3784 * o + 2048) >> 12),
                                                                                (o = m),
                                                                                (s = (v = (v + s + 1) >> 1) - s),
                                                                                (u = (l = (l + u + 1) >> 1) - u),
                                                                                (o = (a = (a + o + 1) >> 1) - o),
                                                                                (f = (i = (i + f + 1) >> 1) - f),
                                                                                (m = (2276 * v + 3406 * l + 2048) >> 12),
                                                                                (v = (3406 * v - 2276 * l + 2048) >> 12),
                                                                                (l = m),
                                                                                (m = (799 * u + 4017 * s + 2048) >> 12),
                                                                                (u = (4017 * u - 799 * s + 2048) >> 12),
                                                                                (s = m),
                                                                                (c = a + l),
                                                                                (p = a - l),
                                                                                (h = i + s),
                                                                                (b = i - s),
                                                                                (d = f + u),
                                                                                (_ = f - u),
                                                                                c < 16 ? (c = 0) : c >= 4080 ? (c = 255) : (c >>= 4),
                                                                                h < 16 ? (h = 0) : h >= 4080 ? (h = 255) : (h >>= 4),
                                                                                d < 16 ? (d = 0) : d >= 4080 ? (d = 255) : (d >>= 4),
                                                                                (w = o + v) < 16 ? (w = 0) : w >= 4080 ? (w = 255) : (w >>= 4),
                                                                                (g = o - v) < 16 ? (g = 0) : g >= 4080 ? (g = 255) : (g >>= 4),
                                                                                _ < 16 ? (_ = 0) : _ >= 4080 ? (_ = 255) : (_ >>= 4),
                                                                                b < 16 ? (b = 0) : b >= 4080 ? (b = 255) : (b >>= 4),
                                                                                p < 16 ? (p = 0) : p >= 4080 ? (p = 255) : (p >>= 4),
                                                                                (U[t + y] = c),
                                                                                (U[t + y + 8] = h),
                                                                                (U[t + y + 16] = d),
                                                                                (U[t + y + 24] = w),
                                                                                (U[t + y + 32] = g),
                                                                                (U[t + y + 40] = _),
                                                                                (U[t + y + 48] = b),
                                                                                (U[t + y + 56] = p);
                                                                        }
                                                                    })(t, u, f);
                                                                }
                                                            return t.D;
                                                        })(0, J),
                                                        l: J.h / o.X,
                                                        t: J.A / o.B,
                                                        P: J.P,
                                                        c: J.c,
                                                    });
                                            }
                                            this.p = this.W.length;
                                        },
                                        Y(r, e, t) {
                                            null == t && (t = !1);
                                            var n,
                                                a,
                                                i,
                                                f,
                                                o,
                                                v,
                                                u,
                                                s,
                                                l,
                                                c,
                                                h,
                                                d,
                                                w = this.width / r,
                                                g = this.height / e,
                                                _ = 0,
                                                b = this.W.length,
                                                p = r * e * b,
                                                m = new Uint8ClampedArray(p),
                                                A = new Uint32Array(r);
                                            for (u = 0; u < b; u++) {
                                                if (((a = (n = this.W[u]).l * w), (i = n.t * g), (_ = u), (h = n.e), (f = (n.P + 1) << 3), a !== d)) {
                                                    for (o = 0; o < r; o++) (s = 0 | (o * a)), (A[o] = ((4294967288 & s) << 3) | (7 & s));
                                                    d = a;
                                                }
                                                for (v = 0; v < e; v++) for (o = 0, c = (f * (4294967288 & (s = 0 | (v * i)))) | ((7 & s) << 3); o < r; o++) (m[_] = h[c + A[o]]), (_ += b);
                                            }
                                            var U = this.V;
                                            if ((t || 4 !== b || U || (U = new Int32Array([-256, 255, -256, 255, -256, 255, -256, 255])), U))
                                                for (u = 0; u < p;) for (s = 0, l = 0; s < b; s++, u++, l += 2) m[u] = ((m[u] * U[l]) >> 8) + U[l + 1];
                                            return m;
                                        },
                                        get f() {
                                            if (this.b) return !!this.b.a;
                                            if (3 === this.p) {
                                                if (0 === this.N || (82 === this.W[0].index && 71 === this.W[1].index && 66 === this.W[2].index)) return !1;
                                                return !0;
                                            }
                                            if (1 === this.N) return !0;
                                            return !1;
                                        },
                                        z: function (r) {
                                            for (var e, t, n, a = 0, i = r.length; a < i; a += 3)
                                                (e = r[a]), (t = r[a + 1]), (n = r[a + 2]), (r[a] = e - 179.456 + 1.402 * n), (r[a + 1] = e + 135.459 - 0.344 * t - 0.714 * n), (r[a + 2] = e - 226.816 + 1.772 * t);
                                            return r;
                                        },
                                        O: function (r) {
                                            for (var e, t, n, a, i = 0, f = 0, o = r.length; f < o; f += 4)
                                                (e = r[f]),
                                                    (t = r[f + 1]),
                                                    (n = r[f + 2]),
                                                    (a = r[f + 3]),
                                                    (r[i++] =
                                                        -122.67195406894 +
                                                        t * (-0.0000660635669420364 * t + 437130475926232e-18 * n - 54080610064599e-18 * e + 48449797120281e-17 * a - 0.154362151871126) +
                                                        n * (-0.000957964378445773 * n + 817076911346625e-18 * e - 0.00477271405408747 * a + 1.53380253221734) +
                                                        e * (961250184130688e-18 * e - 0.00266257332283933 * a + 0.48357088451265) +
                                                        a * (-0.000336197177618394 * a + 0.484791561490776)),
                                                    (r[i++] =
                                                        107.268039397724 +
                                                        t * (219927104525741e-19 * t - 640992018297945e-18 * n + 659397001245577e-18 * e + 426105652938837e-18 * a - 0.176491792462875) +
                                                        n * (-0.000778269941513683 * n + 0.00130872261408275 * e + 770482631801132e-18 * a - 0.151051492775562) +
                                                        e * (0.00126935368114843 * e - 0.00265090189010898 * a + 0.25802910206845) +
                                                        a * (-0.000318913117588328 * a - 0.213742400323665)),
                                                    (r[i++] =
                                                        -20.810012546947 +
                                                        t * (-0.000570115196973677 * t - 263409051004589e-19 * n + 0.0020741088115012 * e - 0.00288260236853442 * a + 0.814272968359295) +
                                                        n * (-0.0000153496057440975 * n - 132689043961446e-18 * e + 560833691242812e-18 * a - 0.195152027534049) +
                                                        e * (0.00174418132927582 * e - 0.00255243321439347 * a + 0.116935020465145) +
                                                        a * (-0.000343531996510555 * a + 0.24165260232407));
                                            return r.subarray(0, i);
                                        },
                                        r: function (r) {
                                            for (var e, t, n, a = 0, i = r.length; a < i; a += 4)
                                                (e = r[a]), (t = r[a + 1]), (n = r[a + 2]), (r[a] = 434.456 - e - 1.402 * n), (r[a + 1] = 119.541 - e + 0.344 * t + 0.714 * n), (r[a + 2] = 481.816 - e - 1.772 * t);
                                            return r;
                                        },
                                        U: function (r) {
                                            for (var e, t, n, a, i = 0, f = 0, o = r.length; f < o; f += 4)
                                                (e = r[f]),
                                                    (t = r[f + 1]),
                                                    (n = r[f + 2]),
                                                    (a = r[f + 3]),
                                                    (r[i++] =
                                                        255 +
                                                        e * (-0.00006747147073602441 * e + 8379262121013727e-19 * t + 2894718188643294e-19 * n + 0.003264231057537806 * a - 1.1185611867203937) +
                                                        t * (26374107616089405e-21 * t - 8626949158638572e-20 * n - 2748769067499491e-19 * a - 0.02155688794978967) +
                                                        n * (-0.00003878099212869363 * n - 3267808279485286e-19 * a + 0.0686742238595345) -
                                                        a * (3361971776183937e-19 * a + 0.7430659151342254)),
                                                    (r[i++] =
                                                        255 +
                                                        e * (13596372813588848e-20 * e + 924537132573585e-18 * t + 10567359618683593e-20 * n + 4791864687436512e-19 * a - 0.3109689587515875) +
                                                        t * (-0.00023545346108370344 * t + 2702845253534714e-19 * n + 0.0020200308977307156 * a - 0.7488052167015494) +
                                                        n * (6834815998235662e-20 * n + 15168452363460973e-20 * a - 0.09751927774728933) -
                                                        a * (3189131175883281e-19 * a + 0.7364883807733168)),
                                                    (r[i++] =
                                                        255 +
                                                        e * (13598650411385307e-21 * e + 12423956175490851e-20 * t + 4751985097583589e-19 * n - 36729317476630422e-22 * a - 0.05562186980264034) +
                                                        t * (16141380598724676e-20 * t + 9692239130725186e-19 * n + 7782692450036253e-19 * a - 0.44015232367526463) +
                                                        n * (5068882914068769e-22 * n + 0.0017778369011375071 * a - 0.7591454649749609) -
                                                        a * (3435319965105553e-19 * a + 0.7063770186160144));
                                            return r.subarray(0, i);
                                        },
                                        getData: function (e) {
                                            var t = e.width,
                                                n = e.height,
                                                a = e.forceRGB,
                                                i = e.isSourcePDF;
                                            if (this.p > 4) throw new r("Unsupported color mode");
                                            var f = this.Y(t, n, i);
                                            if (1 === this.p && a) {
                                                for (var o = f.length, v = new Uint8ClampedArray(3 * o), u = 0, s = 0; s < o; s++) {
                                                    var l = f[s];
                                                    (v[u++] = l), (v[u++] = l), (v[u++] = l);
                                                }
                                                return v;
                                            }
                                            if (3 === this.p && this.f) return this.z(f);
                                            if (4 === this.p) {
                                                if (this.f) return a ? this.O(f) : this.r(f);
                                                if (a) return this.U(f);
                                            }
                                            return f;
                                        },
                                    }),
                                    n
                                );
                            })();
                        function t(r, e) {
                            return (r[e] << 8) | r[e + 1];
                        }
                        B.JpegDecoder = e;
                    })(),
                    (B.encodeImage = function (r, e, t, n) {
                        var a = {
                            t256: [e],
                            t257: [t],
                            t258: [8, 8, 8, 8],
                            t259: [1],
                            t262: [2],
                            t273: [1e3],
                            t277: [4],
                            t278: [t],
                            t279: [e * t * 4],
                            t282: [[72, 1]],
                            t283: [[72, 1]],
                            t284: [1],
                            t286: [[0, 1]],
                            t287: [[0, 1]],
                            t296: [1],
                            t305: ["Photopea (UTIF.js)"],
                            t338: [1],
                        };
                        if (n) for (var i in n) a[i] = n[i];
                        for (var f = new Uint8Array(B.encode([a])), o = new Uint8Array(r), v = new Uint8Array(1e3 + e * t * 4), i = 0; i < f.length; i++) v[i] = f[i];
                        for (var i = 0; i < o.length; i++) v[1e3 + i] = o[i];
                        return v.buffer;
                    }),
                    (B.encode = function (r) {
                        var e = new Uint8Array(2e4),
                            t = 4,
                            n = B._binBE;
                        (e[0] = e[1] = 77), n.writeUshort(e, 2, 42);
                        var a = 8;
                        n.writeUint(e, t, a), (t += 4);
                        for (var i = 0; i < r.length; i++) {
                            var f = B._writeIFD(n, B._types.basic, e, a, r[i]);
                            (a = f[1]), i < r.length - 1 && ((3 & a) != 0 && (a += 4 - (3 & a)), n.writeUint(e, f[0], a));
                        }
                        return e.slice(0, a).buffer;
                    }),
                    (B.decode = function (r, e) {
                        null == e && (e = { parseMN: !0, debug: !1 });
                        var t = new Uint8Array(r),
                            n = 0,
                            a = B._binBE.readASCII(t, n, 2);
                        n += 2;
                        var i = "II" == a ? B._binLE : B._binBE;
                        i.readUshort(t, n), (n += 2);
                        var f = i.readUint(t, n);
                        n += 4;
                        for (var o = []; ;) {
                            var v = i.readUshort(t, f),
                                u = i.readUshort(t, f + 4);
                            if (0 != v && (u < 1 || 13 < u)) {
                                F("error in TIFF");
                                break;
                            }
                            if ((B._readIFD(i, t, f, o, 0, e), 0 == (f = i.readUint(t, f + 2 + 12 * v)))) break;
                        }
                        return o;
                    }),
                    (B.decodeImage = function (r, e, t) {
                        if (!e.data) {
                            var n = new Uint8Array(r),
                                a = B._binBE.readASCII(n, 0, 2);
                            if (null != e.t256) {
                                (e.isLE = "II" == a), (e.width = e.t256[0]), (e.height = e.t257[0]);
                                var i = e.t259 ? e.t259[0] : 1,
                                    f = e.t266 ? e.t266[0] : 1;
                                7 == i && e.t258 && e.t258.length > 3 && (e.t258 = e.t258.slice(0, 3));
                                var o = e.t258 ? e.t258[0] : 1,
                                    v = e.t277 ? e.t277[0] : 1,
                                    u = e.t284 ? e.t284[0] : 1;
                                3 != v && (u = 1), 2 == u && F("PlanarConfiguration 2 should not be used!");
                                var s = o * v;
                                1 == i && null != e.t279 && e.t278 && 32803 == e.t262[0] && (s = Math.round((8 * e.t279[0]) / (e.width * e.t278[0]))), e.t50885 && 4 == e.t50885[0] && (s = 3 * e.t258[0]);
                                var l = 8 * Math.ceil((e.width * s) / 8),
                                    c = e.t273;
                                (null == c || e.t322) && (c = e.t324);
                                var h = e.t279;
                                1 == i && 1 == c.length && (h = [e.height * (l >>> 3)]), (null == h || e.t322) && (h = e.t325);
                                var d = new Uint8Array(e.height * (l >>> 3)),
                                    w = 0;
                                if (null != e.t322) {
                                    var g = e.t322[0],
                                        _ = e.t323[0],
                                        b = Math.floor((e.width + g - 1) / g),
                                        p = Math.floor((e.height + _ - 1) / _),
                                        m = new Uint8Array(0 | Math.ceil((g * _ * s) / 8));
                                    console.log("====", b, p);
                                    for (var A = 0; A < p; A++)
                                        for (var U = 0; U < b; U++) {
                                            var I = A * b + U;
                                            m.fill(0),
                                                B.decode._decompress(e, t, n, c[I], h[I], i, m, 0, f, g, _),
                                                6 == i ? (d = m) : B._copyTile(m, 0 | Math.ceil((g * s) / 8), _, d, 0 | Math.ceil((e.width * s) / 8), e.height, 0 | Math.ceil((U * g * s) / 8), A * _);
                                        }
                                    w = 8 * d.length;
                                } else {
                                    if (null == c) return;
                                    var y = e.t278 ? e.t278[0] : e.height;
                                    y = Math.min(y, e.height);
                                    for (var I = 0; I < c.length; I++) {
                                        if (1 == u) {
                                            var E = 0 | Math.ceil(w / 8);
                                            B.decode._decompress(e, t, n, c[I], h[I], i, d, E, f, e.width, y);
                                        } else {
                                            var M = new Uint8Array(e.width * y);
                                            B.decode._decompress(e, t, n, c[I], h[I], i, M, 0, f, e.width, y);
                                            for (var D = Math.ceil(c.length / 3), E = (I % D) * e.width * y * 3, k = Math.floor(I / D), x = 0; x < M.length; x++) d[E + 3 * x + k] = M[x];
                                        }
                                        w += l * y;
                                    }
                                    w = Math.min(w, 8 * d.length);
                                }
                                e.data = new Uint8Array(d.buffer, 0, 0 | Math.ceil(w / 8));
                            }
                        }
                    }),
                    (B.decode._decompress = function (r, e, t, n, a, i, f, o, v, u, s) {
                        if ((r.t271 && "Panasonic" == r.t271[0] && (r.t45 && 6 == r.t45[0] ? (i = 34316) : 34828 == i && (i = 1)), 1 == i)) for (var l = 0; l < a; l++) f[o + l] = t[n + l];
                        else if (2 == i) B.decode._decodeG2(t, n, a, f, o, u, v);
                        else if (3 == i) B.decode._decodeG3(t, n, a, f, o, u, v, !!r.t292 && (1 & r.t292[0]) == 1);
                        else if (4 == i) B.decode._decodeG4(t, n, a, f, o, u, v);
                        else if (5 == i) B.decode._decodeLZW(t, n, a, f, o, 8);
                        else if (6 == i) B.decode._decodeOldJPEG(r, t, n, a, f, o);
                        else if (7 == i || 34892 == i) B.decode._decodeNewJPEG(r, t, n, a, f, o);
                        else if (8 == i || 32946 == i) {
                            var c = new Uint8Array(t.buffer, n + 2, a - 6),
                                h = B._inflateRaw(c);
                            o + h.length <= f.length && f.set(h, o);
                        } else
                            9 == i
                                ? B.decode._decodeVC5(t, n, a, f, o, r.t33422)
                                : 32767 == i
                                    ? B.decode._decodeARW(r, t, n, a, f, o)
                                    : 32773 == i
                                        ? B.decode._decodePackBits(t, n, a, f, o)
                                        : 32809 == i
                                            ? B.decode._decodeThunder(t, n, a, f, o)
                                            : 34316 == i
                                                ? B.decode._decodePanasonic(r, t, n, a, f, o)
                                                : 34713 == i
                                                    ? B.decode._decodeNikon(r, e, t, n, a, f, o)
                                                    : 34676 == i
                                                        ? B.decode._decodeLogLuv32(r, t, n, a, f, o)
                                                        : F("Unknown compression", i);
                        var d = r.t284 ? r.t284[0] : 1,
                            w = r.t258 ? Math.min(32, r.t258[0]) : 1,
                            g = 2 == d ? 1 : r.t277 ? r.t277[0] : 1,
                            _ = (w * g) >>> 3,
                            b = Math.ceil((w * g * u) / 8);
                        if (16 == w && !r.isLE && null == r.t33422)
                            for (var p = 0; p < s; p++)
                                for (var m = o + p * b, A = 1; A < b; A += 2) {
                                    var U = f[m + A];
                                    (f[m + A] = f[m + A - 1]), (f[m + A - 1] = U);
                                }
                        if (r.t317 && 2 == r.t317[0])
                            for (var p = 0; p < s; p++) {
                                var I = o + p * b;
                                if (16 == w)
                                    for (var l = _; l < b; l += 2) {
                                        var y = ((f[I + l + 1] << 8) | f[I + l]) + ((f[I + l - _ + 1] << 8) | f[I + l - _]);
                                        (f[I + l] = 255 & y), (f[I + l + 1] = (y >>> 8) & 255);
                                    }
                                else if (3 == g) for (var l = 3; l < b; l += 3) (f[I + l] = (f[I + l] + f[I + l - 3]) & 255), (f[I + l + 1] = (f[I + l + 1] + f[I + l - 2]) & 255), (f[I + l + 2] = (f[I + l + 2] + f[I + l - 1]) & 255);
                                else for (var l = _; l < b; l++) f[I + l] = (f[I + l] + f[I + l - _]) & 255;
                            }
                    }),
                    (B.decode._decodePanasonic = function (r, e, t, n, a, i) {
                        var f,
                            o,
                            v,
                            u,
                            s,
                            l,
                            c,
                            h,
                            d = e.buffer,
                            w = r.t2[0],
                            g = r.t3[0],
                            _ = r.t10[0],
                            b = r.t45[0],
                            p = 0,
                            m = 0,
                            A = 0,
                            U = 0,
                            I = 6 == b ? new Uint32Array(18) : new Uint8Array(16),
                            y = [0, 0],
                            E = [0, 0],
                            M = 0,
                            D = new Uint8Array(16384),
                            k = new Uint16Array(a.buffer);
                        function B(r) {
                            if (0 == A) {
                                var e = new Uint8Array(d, t + m + 8184, 8200),
                                    n = new Uint8Array(d, t + m, 8184);
                                D.set(e), D.set(n, e.length), (m += 16384);
                            }
                            if (5 != b) return ((D[(U = ((A = (A - r) & 131071) >> 3) ^ 16368)] | (D[U + 1] << 8)) >> (7 & A)) & ~(-1 << r);
                            for (u = 0; u < 16; u++) (I[u] = D[A++]), (A &= 16383);
                        }
                        function F(r) {
                            return D[A + 15 - r];
                        }
                        function x() {
                            (y[0] = 0), (y[1] = 0), (E[0] = 0), (E[1] = 0);
                        }
                        if (7 == b) throw b;
                        if (6 == b) {
                            var P = 12 == _,
                                C = P
                                    ? function () {
                                        (I[0] = (F(0) << 4) | (F(1) >> 4)),
                                            (I[1] = (((15 & F(1)) << 8) | F(2)) & 4095),
                                            (I[2] = (F(3) >> 6) & 3),
                                            (I[3] = ((63 & F(3)) << 2) | (F(4) >> 6)),
                                            (I[4] = ((63 & F(4)) << 2) | (F(5) >> 6)),
                                            (I[5] = ((63 & F(5)) << 2) | (F(6) >> 6)),
                                            (I[6] = (F(6) >> 4) & 3),
                                            (I[7] = ((15 & F(6)) << 4) | (F(7) >> 4)),
                                            (I[8] = ((15 & F(7)) << 4) | (F(8) >> 4)),
                                            (I[9] = ((15 & F(8)) << 4) | (F(9) >> 4)),
                                            (I[10] = (F(9) >> 2) & 3),
                                            (I[11] = ((3 & F(9)) << 6) | (F(10) >> 2)),
                                            (I[12] = ((3 & F(10)) << 6) | (F(11) >> 2)),
                                            (I[13] = ((3 & F(11)) << 6) | (F(12) >> 2)),
                                            (I[14] = 3 & F(12)),
                                            (I[15] = F(13)),
                                            (I[16] = F(14)),
                                            (I[17] = F(15)),
                                            (A += 16),
                                            (U = 0);
                                    }
                                    : function () {
                                        (I[0] = (F(0) << 6) | (F(1) >> 2)),
                                            (I[1] = (((3 & F(1)) << 12) | (F(2) << 4) | (F(3) >> 4)) & 16383),
                                            (I[2] = (F(3) >> 2) & 3),
                                            (I[3] = ((3 & F(3)) << 8) | F(4)),
                                            (I[4] = (F(5) << 2) | (F(6) >> 6)),
                                            (I[5] = ((63 & F(6)) << 4) | (F(7) >> 4)),
                                            (I[6] = (F(7) >> 2) & 3),
                                            (I[7] = ((3 & F(7)) << 8) | F(8)),
                                            (I[8] = ((F(9) << 2) & 1020) | (F(10) >> 6)),
                                            (I[9] = ((F(10) << 4) | (F(11) >> 4)) & 1023),
                                            (I[10] = (F(11) >> 2) & 3),
                                            (I[11] = ((3 & F(11)) << 8) | F(12)),
                                            (I[12] = (((F(13) << 2) & 1020) | (F(14) >> 6)) & 1023),
                                            (I[13] = ((F(14) << 4) | (F(15) >> 4)) & 1023),
                                            (A += 16),
                                            (U = 0);
                                    },
                                H = P ? 14 : 11,
                                L = P ? 128 : 512,
                                S = P ? 2048 : 8192,
                                N = P ? 16383 : 65535,
                                G = P ? 4095 : 16383,
                                J = w / H,
                                O = 16 * J,
                                W = P ? 18 : 14;
                            for (f = 0; f < g - 15; f += 16) {
                                var j = Math.min(16, g - f),
                                    T = O * j;
                                for (D = new Uint8Array(d, t + p, T), A = 0, p += T, v = 0, o = 0; v < j; v++, o = 0) {
                                    M = (f + v) * w;
                                    for (var R = 0; R < J; R++)
                                        for (C(), x(), l = 0, h = 0, u = 0; u < H; u++) {
                                            if (((c = 1 & u), u % 3 == 2)) {
                                                var Q = U < W ? I[U++] : 0;
                                                3 == Q && (Q = 4), (h = L << Q), (l = 1 << Q);
                                            }
                                            var q = U < W ? I[U++] : 0;
                                            y[c] ? ((q *= l), h < S && E[c] > h && (q += E[c] - h), (E[c] = q)) : ((y[c] = q), q ? (E[c] = q) : (q = E[c])), (k[M + o++] = q - 15 <= N ? (q - 15) & N : ((q + 2147483633) >> 31) & G);
                                        }
                                }
                            }
                        } else if (5 == b) {
                            var Z = 12 == _ ? 10 : 9;
                            for (f = 0; f < g; f++)
                                for (o = 0; o < w; o += Z)
                                    B(0),
                                        12 == _
                                            ? ((k[M++] = ((15 & I[1]) << 8) + I[0]),
                                                (k[M++] = 16 * I[2] + (I[1] >> 4)),
                                                (k[M++] = ((15 & I[4]) << 8) + I[3]),
                                                (k[M++] = 16 * I[5] + (I[4] >> 4)),
                                                (k[M++] = ((15 & I[7]) << 8) + I[6]),
                                                (k[M++] = 16 * I[8] + (I[7] >> 4)),
                                                (k[M++] = ((15 & I[10]) << 8) + I[9]),
                                                (k[M++] = 16 * I[11] + (I[10] >> 4)),
                                                (k[M++] = ((15 & I[13]) << 8) + I[12]),
                                                (k[M++] = 16 * I[14] + (I[13] >> 4)))
                                            : 14 == _ &&
                                            ((k[M++] = I[0] + ((63 & I[1]) << 8)),
                                                (k[M++] = (I[1] >> 6) + 4 * I[2] + ((15 & I[3]) << 10)),
                                                (k[M++] = (I[3] >> 4) + 16 * I[4] + ((3 & I[5]) << 12)),
                                                (k[M++] = ((252 & I[5]) >> 2) + (I[6] << 6)),
                                                (k[M++] = I[7] + ((63 & I[8]) << 8)),
                                                (k[M++] = (I[8] >> 6) + 4 * I[9] + ((15 & I[10]) << 10)),
                                                (k[M++] = (I[10] >> 4) + 16 * I[11] + ((3 & I[12]) << 12)),
                                                (k[M++] = ((252 & I[12]) >> 2) + (I[13] << 6)),
                                                (k[M++] = I[14] + ((63 & I[15]) << 8)));
                        } else if (4 == b)
                            for (f = 0; f < g; f++)
                                for (o = 0; o < w; o++)
                                    (c = 1 & (u = o % 14)),
                                        0 == u && x(),
                                        u % 3 == 2 && (l = 4 >> (3 - B(2))),
                                        E[c] ? 0 != (s = B(8)) && ((y[c] -= 128 << l), (y[c] < 0 || 4 == l) && (y[c] &= ~(-1 << l)), (y[c] += s << l)) : ((E[c] = B(8)), (E[c] || u > 11) && (y[c] = (E[c] << 4) | B(4))),
                                        (k[M++] = y[1 & o]);
                        else throw b;
                    }),
                    (B.decode._decodeVC5 = (function () {
                        var r,
                            e,
                            t,
                            n = [
                                1,
                                0,
                                1,
                                0,
                                2,
                                2,
                                1,
                                1,
                                3,
                                7,
                                1,
                                2,
                                5,
                                25,
                                1,
                                3,
                                6,
                                48,
                                1,
                                4,
                                6,
                                54,
                                1,
                                5,
                                7,
                                111,
                                1,
                                8,
                                7,
                                99,
                                1,
                                6,
                                7,
                                105,
                                12,
                                0,
                                7,
                                107,
                                1,
                                7,
                                8,
                                209,
                                20,
                                0,
                                8,
                                212,
                                1,
                                9,
                                8,
                                220,
                                1,
                                10,
                                9,
                                393,
                                1,
                                11,
                                9,
                                394,
                                32,
                                0,
                                9,
                                416,
                                1,
                                12,
                                9,
                                427,
                                1,
                                13,
                                10,
                                887,
                                1,
                                18,
                                10,
                                784,
                                1,
                                14,
                                10,
                                790,
                                1,
                                15,
                                10,
                                835,
                                60,
                                0,
                                10,
                                852,
                                1,
                                16,
                                10,
                                885,
                                1,
                                17,
                                11,
                                1571,
                                1,
                                19,
                                11,
                                1668,
                                1,
                                20,
                                11,
                                1669,
                                100,
                                0,
                                11,
                                1707,
                                1,
                                21,
                                11,
                                1772,
                                1,
                                22,
                                12,
                                3547,
                                1,
                                29,
                                12,
                                3164,
                                1,
                                24,
                                12,
                                3166,
                                1,
                                25,
                                12,
                                3140,
                                1,
                                23,
                                12,
                                3413,
                                1,
                                26,
                                12,
                                3537,
                                1,
                                27,
                                12,
                                3539,
                                1,
                                28,
                                13,
                                7093,
                                1,
                                35,
                                13,
                                6283,
                                1,
                                30,
                                13,
                                6331,
                                1,
                                31,
                                13,
                                6335,
                                180,
                                0,
                                13,
                                6824,
                                1,
                                32,
                                13,
                                7072,
                                1,
                                33,
                                13,
                                7077,
                                320,
                                0,
                                13,
                                7076,
                                1,
                                34,
                                14,
                                12565,
                                1,
                                36,
                                14,
                                12661,
                                1,
                                37,
                                14,
                                12669,
                                1,
                                38,
                                14,
                                13651,
                                1,
                                39,
                                14,
                                14184,
                                1,
                                40,
                                15,
                                28295,
                                1,
                                46,
                                15,
                                28371,
                                1,
                                47,
                                15,
                                25320,
                                1,
                                42,
                                15,
                                25336,
                                1,
                                43,
                                15,
                                25128,
                                1,
                                41,
                                15,
                                27300,
                                1,
                                44,
                                15,
                                28293,
                                1,
                                45,
                                16,
                                50259,
                                1,
                                48,
                                16,
                                50643,
                                1,
                                49,
                                16,
                                50675,
                                1,
                                50,
                                16,
                                56740,
                                1,
                                53,
                                16,
                                56584,
                                1,
                                51,
                                16,
                                56588,
                                1,
                                52,
                                17,
                                113483,
                                1,
                                61,
                                17,
                                113482,
                                1,
                                60,
                                17,
                                101285,
                                1,
                                55,
                                17,
                                101349,
                                1,
                                56,
                                17,
                                109205,
                                1,
                                57,
                                17,
                                109207,
                                1,
                                58,
                                17,
                                100516,
                                1,
                                54,
                                17,
                                113171,
                                1,
                                59,
                                18,
                                202568,
                                1,
                                62,
                                18,
                                202696,
                                1,
                                63,
                                18,
                                218408,
                                1,
                                64,
                                18,
                                218412,
                                1,
                                65,
                                18,
                                226340,
                                1,
                                66,
                                18,
                                226356,
                                1,
                                67,
                                18,
                                226358,
                                1,
                                68,
                                19,
                                402068,
                                1,
                                69,
                                19,
                                405138,
                                1,
                                70,
                                19,
                                405394,
                                1,
                                71,
                                19,
                                436818,
                                1,
                                72,
                                19,
                                436826,
                                1,
                                73,
                                19,
                                452714,
                                1,
                                75,
                                19,
                                452718,
                                1,
                                76,
                                19,
                                452682,
                                1,
                                74,
                                20,
                                804138,
                                1,
                                77,
                                20,
                                810279,
                                1,
                                78,
                                20,
                                810790,
                                1,
                                79,
                                20,
                                873638,
                                1,
                                80,
                                20,
                                873654,
                                1,
                                81,
                                20,
                                905366,
                                1,
                                82,
                                20,
                                905430,
                                1,
                                83,
                                20,
                                905438,
                                1,
                                84,
                                21,
                                1608278,
                                1,
                                85,
                                21,
                                1620557,
                                1,
                                86,
                                21,
                                1621582,
                                1,
                                87,
                                21,
                                1621583,
                                1,
                                88,
                                21,
                                1747310,
                                1,
                                89,
                                21,
                                1810734,
                                1,
                                90,
                                21,
                                1810735,
                                1,
                                91,
                                21,
                                1810863,
                                1,
                                92,
                                21,
                                1810879,
                                1,
                                93,
                                22,
                                3621725,
                                1,
                                99,
                                22,
                                3621757,
                                1,
                                100,
                                22,
                                3241112,
                                1,
                                94,
                                22,
                                3494556,
                                1,
                                95,
                                22,
                                3494557,
                                1,
                                96,
                                22,
                                3494622,
                                1,
                                97,
                                22,
                                3494623,
                                1,
                                98,
                                23,
                                6482227,
                                1,
                                102,
                                23,
                                6433117,
                                1,
                                101,
                                23,
                                6989117,
                                1,
                                103,
                                23,
                                6989119,
                                1,
                                105,
                                23,
                                6989118,
                                1,
                                104,
                                23,
                                7243449,
                                1,
                                106,
                                23,
                                7243512,
                                1,
                                107,
                                24,
                                13978233,
                                1,
                                111,
                                24,
                                12964453,
                                1,
                                109,
                                24,
                                12866232,
                                1,
                                108,
                                24,
                                14486897,
                                1,
                                113,
                                24,
                                13978232,
                                1,
                                110,
                                24,
                                14486896,
                                1,
                                112,
                                24,
                                14487026,
                                1,
                                114,
                                24,
                                14487027,
                                1,
                                115,
                                25,
                                25732598,
                                1,
                                225,
                                25,
                                25732597,
                                1,
                                189,
                                25,
                                25732596,
                                1,
                                188,
                                25,
                                25732595,
                                1,
                                203,
                                25,
                                25732594,
                                1,
                                202,
                                25,
                                25732593,
                                1,
                                197,
                                25,
                                25732592,
                                1,
                                207,
                                25,
                                25732591,
                                1,
                                169,
                                25,
                                25732590,
                                1,
                                223,
                                25,
                                25732589,
                                1,
                                159,
                                25,
                                25732522,
                                1,
                                235,
                                25,
                                25732579,
                                1,
                                152,
                                25,
                                25732575,
                                1,
                                192,
                                25,
                                25732489,
                                1,
                                179,
                                25,
                                25732573,
                                1,
                                201,
                                25,
                                25732472,
                                1,
                                172,
                                25,
                                25732576,
                                1,
                                149,
                                25,
                                25732488,
                                1,
                                178,
                                25,
                                25732566,
                                1,
                                120,
                                25,
                                25732571,
                                1,
                                219,
                                25,
                                25732577,
                                1,
                                150,
                                25,
                                25732487,
                                1,
                                127,
                                25,
                                25732506,
                                1,
                                211,
                                25,
                                25732548,
                                1,
                                125,
                                25,
                                25732588,
                                1,
                                158,
                                25,
                                25732486,
                                1,
                                247,
                                25,
                                25732467,
                                1,
                                238,
                                25,
                                25732508,
                                1,
                                163,
                                25,
                                25732552,
                                1,
                                228,
                                25,
                                25732603,
                                1,
                                183,
                                25,
                                25732513,
                                1,
                                217,
                                25,
                                25732587,
                                1,
                                168,
                                25,
                                25732520,
                                1,
                                122,
                                25,
                                25732484,
                                1,
                                128,
                                25,
                                25732562,
                                1,
                                249,
                                25,
                                25732505,
                                1,
                                187,
                                25,
                                25732504,
                                1,
                                186,
                                25,
                                25732483,
                                1,
                                136,
                                25,
                                25928905,
                                1,
                                181,
                                25,
                                25732560,
                                1,
                                255,
                                25,
                                25732500,
                                1,
                                230,
                                25,
                                25732482,
                                1,
                                135,
                                25,
                                25732555,
                                1,
                                233,
                                25,
                                25732568,
                                1,
                                222,
                                25,
                                25732583,
                                1,
                                145,
                                25,
                                25732481,
                                1,
                                134,
                                25,
                                25732586,
                                1,
                                167,
                                25,
                                25732521,
                                1,
                                248,
                                25,
                                25732518,
                                1,
                                209,
                                25,
                                25732480,
                                1,
                                243,
                                25,
                                25732512,
                                1,
                                216,
                                25,
                                25732509,
                                1,
                                164,
                                25,
                                25732547,
                                1,
                                140,
                                25,
                                25732479,
                                1,
                                157,
                                25,
                                25732544,
                                1,
                                239,
                                25,
                                25732574,
                                1,
                                191,
                                25,
                                25732564,
                                1,
                                251,
                                25,
                                25732478,
                                1,
                                156,
                                25,
                                25732546,
                                1,
                                139,
                                25,
                                25732498,
                                1,
                                242,
                                25,
                                25732557,
                                1,
                                133,
                                25,
                                25732477,
                                1,
                                162,
                                25,
                                25732515,
                                1,
                                213,
                                25,
                                25732584,
                                1,
                                165,
                                25,
                                25732514,
                                1,
                                212,
                                25,
                                25732476,
                                1,
                                227,
                                25,
                                25732494,
                                1,
                                198,
                                25,
                                25732531,
                                1,
                                236,
                                25,
                                25732530,
                                1,
                                234,
                                25,
                                25732529,
                                1,
                                117,
                                25,
                                25732528,
                                1,
                                215,
                                25,
                                25732527,
                                1,
                                124,
                                25,
                                25732526,
                                1,
                                123,
                                25,
                                25732525,
                                1,
                                254,
                                25,
                                25732524,
                                1,
                                253,
                                25,
                                25732523,
                                1,
                                148,
                                25,
                                25732570,
                                1,
                                218,
                                25,
                                25732580,
                                1,
                                146,
                                25,
                                25732581,
                                1,
                                147,
                                25,
                                25732569,
                                1,
                                224,
                                25,
                                25732533,
                                1,
                                143,
                                25,
                                25732540,
                                1,
                                184,
                                25,
                                25732541,
                                1,
                                185,
                                25,
                                25732585,
                                1,
                                166,
                                25,
                                25732556,
                                1,
                                132,
                                25,
                                25732485,
                                1,
                                129,
                                25,
                                25732563,
                                1,
                                250,
                                25,
                                25732578,
                                1,
                                151,
                                25,
                                25732501,
                                1,
                                119,
                                25,
                                25732502,
                                1,
                                193,
                                25,
                                25732536,
                                1,
                                176,
                                25,
                                25732496,
                                1,
                                245,
                                25,
                                25732553,
                                1,
                                229,
                                25,
                                25732516,
                                1,
                                206,
                                25,
                                25732582,
                                1,
                                144,
                                25,
                                25732517,
                                1,
                                208,
                                25,
                                25732558,
                                1,
                                137,
                                25,
                                25732543,
                                1,
                                241,
                                25,
                                25732466,
                                1,
                                237,
                                25,
                                25732507,
                                1,
                                190,
                                25,
                                25732542,
                                1,
                                240,
                                25,
                                25732551,
                                1,
                                131,
                                25,
                                25732554,
                                1,
                                232,
                                25,
                                25732565,
                                1,
                                252,
                                25,
                                25732475,
                                1,
                                171,
                                25,
                                25732493,
                                1,
                                205,
                                25,
                                25732492,
                                1,
                                204,
                                25,
                                25732491,
                                1,
                                118,
                                25,
                                25732490,
                                1,
                                214,
                                25,
                                25928904,
                                1,
                                180,
                                25,
                                25732549,
                                1,
                                126,
                                25,
                                25732602,
                                1,
                                182,
                                25,
                                25732539,
                                1,
                                175,
                                25,
                                25732545,
                                1,
                                141,
                                25,
                                25732559,
                                1,
                                138,
                                25,
                                25732537,
                                1,
                                177,
                                25,
                                25732534,
                                1,
                                153,
                                25,
                                25732503,
                                1,
                                194,
                                25,
                                25732606,
                                1,
                                160,
                                25,
                                25732567,
                                1,
                                121,
                                25,
                                25732538,
                                1,
                                174,
                                25,
                                25732497,
                                1,
                                246,
                                25,
                                25732550,
                                1,
                                130,
                                25,
                                25732572,
                                1,
                                200,
                                25,
                                25732474,
                                1,
                                170,
                                25,
                                25732511,
                                1,
                                221,
                                25,
                                25732601,
                                1,
                                196,
                                25,
                                25732532,
                                1,
                                142,
                                25,
                                25732519,
                                1,
                                210,
                                25,
                                25732495,
                                1,
                                199,
                                25,
                                25732605,
                                1,
                                155,
                                25,
                                25732535,
                                1,
                                154,
                                25,
                                25732499,
                                1,
                                244,
                                25,
                                25732510,
                                1,
                                220,
                                25,
                                25732600,
                                1,
                                195,
                                25,
                                25732607,
                                1,
                                161,
                                25,
                                25732604,
                                1,
                                231,
                                25,
                                25732473,
                                1,
                                173,
                                25,
                                25732599,
                                1,
                                226,
                                26,
                                51465122,
                                1,
                                116,
                                26,
                                51465123,
                                0,
                                1,
                            ],
                            a = [3, 3, 3, 3, 2, 2, 2, 1, 1, 1];
                        function i(r) {
                            var e = r[1],
                                t = (r[0][e >>> 3] >>> (7 - (7 & e))) & 1;
                            return r[1]++, t;
                        }
                        function f(r, e) {
                            for (var t = 0; t < e; t++) (1 & r) == 1 && r++, (r >>>= 1);
                            return r;
                        }
                        function o(r, e, t, n, a, i) {
                            (e[t] = (((11 * r[a] - 4 * r[a + i] + r[a + i + i] + 4) >> 3) + r[n]) >> 1), (e[t + i] = (((5 * r[a] + 4 * r[a + i] - r[a + i + i] + 4) >> 3) - r[n]) >> 1);
                        }
                        function v(r, e, t, n, a, i) {
                            var f = r[a - i] - r[a + i],
                                o = r[a],
                                v = r[n];
                            (e[t] = (((f + 4) >> 3) + o + v) >> 1), (e[t + i] = (((-f + 4) >> 3) + o - v) >> 1);
                        }
                        function u(r, e, t, n, a, i) {
                            (e[t] = (((5 * r[a] + 4 * r[a - i] - r[a - i - i] + 4) >> 3) + r[n]) >> 1), (e[t + i] = (((11 * r[a] - 4 * r[a - i] + r[a - i - i] + 4) >> 3) - r[n]) >> 1);
                        }
                        function s(r) {
                            return (r = t[(r = r < 0 ? 0 : r > 4095 ? 4095 : r)] >>> 2);
                        }
                        return function (l, c, h, d, w, g) {
                            d = new Uint16Array(d.buffer);
                            var _,
                                b,
                                p,
                                m,
                                A,
                                U,
                                I,
                                y,
                                E,
                                M,
                                D = Date.now(),
                                k = B._binBE,
                                F = c + h;
                            c += 4;
                            for (var x = 1 == g[0]; c < F;) {
                                var P = k.readShort(l, c),
                                    C = k.readUshort(l, c + 2);
                                if (((c += 4), 12 == P)) _ = C;
                                else if (20 == P) b = C;
                                else if (21 == P) p = C;
                                else if (48 == P) m = C;
                                else if (53 == P) A = C;
                                else if (35 == P);
                                else if (62 == P) U = C;
                                else if (101 == P);
                                else if (109 == P) I = C;
                                else if (84 == P);
                                else if (106 == P);
                                else if (107 == P);
                                else if (108 == P);
                                else if (102 == P);
                                else if (104 == P) y = C;
                                else if (105 == P);
                                else {
                                    var H = P < 0 ? -P : P,
                                        L = 65280 & H,
                                        S = 0;
                                    if ((24576 & H && (S = 8192 & H ? (65535 & C) + ((255 & H) << 16) : 65535 & C), (24576 & H) == 24576)) {
                                        if (null == E) {
                                            E = [];
                                            for (var N = 0; N < 4; N++) E[N] = new Int16Array((b >>> 1) * (p >>> 1));
                                            (M = new Int16Array((b >>> 1) * (p >>> 1))), (e = new Int16Array(1024));
                                            for (var N = 0; N < 1024; N++) {
                                                var G = N - 512,
                                                    J = Math.abs(G),
                                                    _ = Math.floor((768 * J * J * J) / 16581375) + J;
                                                e[N] = Math.sign(G) * _;
                                            }
                                            t = new Uint16Array(4096);
                                            for (var N = 0; N < 4096; N++) {
                                                var O = (65535 * (Math.pow(113, N / 4095) - 1)) / 112;
                                                t[N] = Math.min(O, 65535);
                                            }
                                        }
                                        var W = E[U],
                                            j = f(b, 1 + a[m]),
                                            T = f(p, 1 + a[m]);
                                        if (0 == m)
                                            for (var R = 0; R < T; R++)
                                                for (var Q = 0; Q < j; Q++) {
                                                    var q = c + (R * j + Q) * 2;
                                                    W[R * (b >>> 1) + Q] = (l[q] << 8) | l[q + 1];
                                                }
                                        else {
                                            for (var Z = [l, 8 * c], $ = [], V = 0, X = j * T, z = [0, 0], Y = 0, C = 0; V < X;)
                                                for (
                                                    (function (e, t) {
                                                        if (null == r) {
                                                            r = {};
                                                            for (var a = 0; a < n.length; a += 4) r[n[a + 1]] = n.slice(a, a + 4);
                                                        }
                                                        for (var f = i(e), o = r[f]; null == o;) o = r[(f = (f << 1) | i(e))];
                                                        var v = o[3];
                                                        0 != v && (v = 0 == i(e) ? v : -v), (t[0] = o[2]), (t[1] = v);
                                                    })(Z, z),
                                                    Y = z[0],
                                                    C = z[1];
                                                    Y > 0;

                                                )
                                                    ($[V++] = C), Y--;
                                            for (var K = (m - 1) % 3, rr = 1 != K ? j : 0, re = 0 != K ? T : 0, R = 0; R < T; R++) for (var rt = (R + re) * (b >>> 1) + rr, rn = R * j, Q = 0; Q < j; Q++) W[rt + Q] = e[$[rn + Q] + 512] * A;
                                            if (2 == K) {
                                                for (var y = b >>> 1, ra = 2 * j, ri = 2 * T, R = 0; R < T; R++)
                                                    for (var Q = 0; Q < ra; Q++) {
                                                        var N = 2 * R * y + Q,
                                                            rf = R * y + Q,
                                                            ro = T * y + rf;
                                                        0 == R ? o(W, M, N, ro, rf, y) : R == T - 1 ? u(W, M, N, ro, rf, y) : v(W, M, N, ro, rf, y);
                                                    }
                                                var rv = W;
                                                (W = M), (M = rv);
                                                for (var R = 0; R < ri; R++)
                                                    for (var Q = 0; Q < j; Q++) {
                                                        var N = R * y + 2 * Q,
                                                            rf = R * y + Q,
                                                            ro = j + rf;
                                                        0 == Q ? o(W, M, N, ro, rf, 1) : Q == j - 1 ? u(W, M, N, ro, rf, 1) : v(W, M, N, ro, rf, 1);
                                                    }
                                                var rv = W;
                                                (W = M), (M = rv);
                                                for (var ru = [], rs = 2 - ~~((m - 1) / 3), rl = 0; rl < 3; rl++) ru[rl] = (I >> (14 - 2 * rl)) & 3;
                                                var rc = ru[rs];
                                                if (0 != rc)
                                                    for (var R = 0; R < ri; R++)
                                                        for (var Q = 0; Q < ra; Q++) {
                                                            var N = R * y + Q;
                                                            W[N] = W[N] << rc;
                                                        }
                                            }
                                        }
                                        if (9 == m && 3 == U)
                                            for (var rh = E[0], rd = E[1], rw = E[2], rg = E[3], R = 0; R < p; R += 2)
                                                for (var Q = 0; Q < b; Q += 2) {
                                                    var r_ = R * b + Q,
                                                        q = (R >>> 1) * (b >>> 1) + (Q >>> 1),
                                                        rb = rh[q],
                                                        rp = rd[q] - 2048,
                                                        rm = rw[q] - 2048,
                                                        rA = rg[q] - 2048,
                                                        rU = (rp << 1) + rb,
                                                        rI = (rm << 1) + rb,
                                                        ry = rb + rA,
                                                        rE = rb - rA;
                                                    x ? ((d[r_] = s(ry)), (d[r_ + 1] = s(rI)), (d[r_ + b] = s(rU)), (d[r_ + b + 1] = s(rE))) : ((d[r_] = s(rU)), (d[r_ + 1] = s(ry)), (d[r_ + b] = s(rE)), (d[r_ + b + 1] = s(rI)));
                                                }
                                        c += 4 * S;
                                    } else if (16388 == H) c += 4 * S;
                                    else if (8192 == L || 8448 == L || 9216 == L);
                                    else throw H.toString(16);
                                }
                            }
                            console.log(Date.now() - D);
                        };
                    })()),
                    (B.decode._decodeLogLuv32 = function (r, e, t, n, a, i) {
                        for (var f = r.width, o = 4 * f, v = 0, u = new Uint8Array(o); v < n;) {
                            for (var s = 0; s < o;) {
                                var l = e[t + v];
                                if ((v++, l < 128)) {
                                    for (var c = 0; c < l; c++) u[s + c] = e[t + v + c];
                                    (s += l), (v += l);
                                } else {
                                    l -= 126;
                                    for (var c = 0; c < l; c++) u[s + c] = e[t + v];
                                    (s += l), v++;
                                }
                            }
                            for (var h = 0; h < f; h++) (a[i + 0] = u[h]), (a[i + 1] = u[h + f]), (a[i + 2] = u[h + 2 * f]), (a[i + 4] = u[h + 3 * f]), (i += 6);
                        }
                    }),
                    (B.decode._ljpeg_diff = function (r, e, t) {
                        var n,
                            a,
                            i = B.decode._getbithuff;
                        return (n = i(r, e, t[0], t)), ((a = i(r, e, n, 0)) & (1 << (n - 1))) == 0 && (a -= (1 << n) - 1), a;
                    }),
                    (B.decode._decodeARW = function (r, e, t, n, a, i) {
                        var f,
                            o,
                            v,
                            u,
                            s,
                            l,
                            c,
                            h,
                            d,
                            w,
                            g,
                            _ = r.t256[0],
                            b = r.t257[0],
                            p = r.t258[0],
                            m = r.isLE ? B._binLE : B._binBE;
                        if (!(_ * b == n || _ * b * 1.5 == n)) {
                            b += 8;
                            var w,
                                A,
                                U,
                                o,
                                f,
                                I = [t, 0, 0, 0],
                                y = new Uint16Array(32770),
                                E = [3857, 3856, 3599, 3342, 3085, 2828, 2571, 2314, 2057, 1800, 1543, 1286, 1029, 772, 771, 768, 514, 513],
                                M = 0,
                                D = B.decode._ljpeg_diff;
                            for (y[0] = 15, U = w = 0; w < 18; w++) for (var k = 32768 >>> (E[w] >>> 8), A = 0; A < k; A++) y[++U] = E[w];
                            for (o = _; o--;)
                                for (f = 0; f < b + 1; f += 2)
                                    if ((f == b && (f = 1), (M += D(e, I, y)), f < b)) {
                                        var F = 4095 & M;
                                        B.decode._putsF(a, (f * _ + o) * p, F << (16 - p));
                                    }
                            return;
                        }
                        if (_ * b * 1.5 == n) {
                            for (var w = 0; w < n; w += 3) {
                                var x = e[t + w + 0],
                                    P = e[t + w + 1],
                                    C = e[t + w + 2];
                                (a[i + w] = (P << 4) | (x >>> 4)), (a[i + w + 1] = (x << 4) | (C >>> 4)), (a[i + w + 2] = (C << 4) | (P >>> 4));
                            }
                            return;
                        }
                        var H = new Uint16Array(16),
                            L = new Uint8Array(_ + 1);
                        for (f = 0; f < b; f++) {
                            for (var S = 0; S < _; S++) L[S] = e[t++];
                            for (g = 0, o = 0; o < _ - 30; g += 16) {
                                for (h = 0, u = 2047 & (v = m.readUint(L, g)), s = 2047 & (v >>> 11), l = 15 & (v >>> 22), c = 15 & (v >>> 26); h < 4 && 128 << h <= u - s; h++);
                                for (d = 30, w = 0; w < 16; w++) w == l ? (H[w] = u) : w == c ? (H[w] = s) : ((H[w] = (((m.readUshort(L, g + (d >> 3)) >>> (7 & d)) & 127) << h) + s), H[w] > 2047 && (H[w] = 2047), (d += 7));
                                for (w = 0; w < 16; w++, o += 2) {
                                    var F = H[w] << 1;
                                    B.decode._putsF(a, (f * _ + o) * p, F << (16 - p));
                                }
                                o -= 1 & o ? 1 : 31;
                            }
                        }
                    }),
                    (B.decode._decodeNikon = function (r, e, t, n, a, i, f) {
                        var o,
                            v,
                            u,
                            s,
                            l,
                            c,
                            h = [
                                [0, 0, 1, 5, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 5, 4, 3, 6, 2, 7, 1, 0, 8, 9, 11, 10, 12],
                                [0, 0, 1, 5, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 57, 90, 56, 39, 22, 5, 4, 3, 2, 1, 0, 11, 12, 12],
                                [0, 0, 1, 4, 2, 3, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 4, 6, 3, 7, 2, 8, 1, 9, 0, 10, 11, 12],
                                [0, 0, 1, 4, 3, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 5, 6, 4, 7, 8, 3, 9, 2, 1, 0, 10, 11, 12, 13, 14],
                                [0, 0, 1, 5, 1, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 8, 92, 75, 58, 41, 7, 6, 5, 4, 3, 2, 1, 0, 13, 14],
                                [0, 0, 1, 4, 2, 2, 3, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 7, 6, 8, 5, 9, 4, 10, 3, 11, 12, 2, 0, 1, 13, 14],
                            ],
                            d = r.t256[0],
                            w = r.t257[0],
                            g = r.t258[0],
                            _ = 0,
                            b = 0,
                            p = B.decode._make_decoder,
                            m = B.decode._getbithuff,
                            A = e[0].exifIFD.makerNote,
                            U = A.t150 ? A.t150 : A.t140,
                            I = 0,
                            y = U[I++],
                            E = U[I++];
                        (73 == y || 88 == E) && (I += 2110), 70 == y && (_ = 2), 14 == g && (_ += 3);
                        for (
                            var M = [
                                [0, 0],
                                [0, 0],
                            ],
                            D = r.isLE ? B._binLE : B._binBE,
                            o = 0;
                            o < 2;
                            o++
                        )
                            for (var k = 0; k < 2; k++) (M[o][k] = D.readShort(U, I)), (I += 2);
                        var F = 0,
                            x = D.readShort(U, I);
                        (I += 2), x > 1 && (F = Math.floor(((1 << g) & 32767) / (x - 1))), 68 == y && 32 == E && F > 0 && (b = D.readShort(U, 562));
                        var P = [0, 0],
                            C = p(h[_]),
                            H = [n, 0, 0, 0];
                        for (v = 0; v < w; v++)
                            for (b && v == b && (C = p(h[_ + 1])), u = 0; u < d; u++) {
                                (s = 15 & (o = m(t, H, C[0], C))),
                                    ((c = (((m(t, H, s - (l = o >>> 4), 0) << 1) + 1) << l) >>> 1) & (1 << (s - 1))) == 0 && (c -= (1 << s) - (0 == l ? 1 : 0)),
                                    u < 2 ? (P[u] = M[1 & v][u] += c) : (P[1 & u] += c);
                                var L = Math.min(Math.max(P[1 & u], 0), (1 << g) - 1),
                                    S = (v * d + u) * g;
                                B.decode._putsF(i, S, L << (16 - g));
                            }
                    }),
                    (B.decode._putsF = function (r, e, t) {
                        t <<= 8 - (7 & e);
                        var n = e >>> 3;
                        (r[n] |= t >>> 16), (r[n + 1] |= t >>> 8), (r[n + 2] |= t);
                    }),
                    (B.decode._getbithuff = function (r, e, t, n) {
                        B.decode._get_byte;
                        var a,
                            i = e[0],
                            f = e[1],
                            o = e[2],
                            v = e[3];
                        if (0 == t || o < 0) return 0;
                        for (; !v && o < t && -1 != (a = r[i++]) && ((v = 0), 1);) (f = (f << 8) + a), (o += 8);
                        if (((a = (f << (32 - o)) >>> (32 - t)), n ? ((o -= n[a + 1] >>> 8), (a = 255 & n[a + 1])) : (o -= t), o < 0)) throw "e";
                        return (e[0] = i), (e[1] = f), (e[2] = o), (e[3] = v), a;
                    }),
                    (B.decode._make_decoder = function (r) {
                        var e,
                            t,
                            n,
                            a,
                            i,
                            f = [];
                        for (e = 16; 0 != e && !r[e]; e--);
                        var o = 17;
                        for (f[0] = e, n = t = 1; t <= e; t++) for (a = 0; a < r[t]; a++, ++o) for (i = 0; i < 1 << (e - t); i++) n <= 1 << e && (f[n++] = (t << 8) | r[o]);
                        return f;
                    }),
                    (B.decode._decodeNewJPEG = function (r, e, t, n, a, i) {
                        n = Math.min(n, e.length - t);
                        var f = r.t347,
                            o = f ? f.length : 0,
                            v = new Uint8Array(o + n);
                        if (f) {
                            for (var u = 0, s = 0; s < o - 1 && (255 != f[s] || 217 != f[s + 1]); s++) v[u++] = f[s];
                            var l = e[t],
                                c = e[t + 1];
                            (255 != l || 216 != c) && ((v[u++] = l), (v[u++] = c));
                            for (var s = 2; s < n; s++) v[u++] = e[t + s];
                        } else for (var s = 0; s < n; s++) v[s] = e[t + s];
                        if (32803 == r.t262[0] || (7 == r.t259[0] && 34892 == r.t262[0])) {
                            var h = r.t258[0],
                                d = B.LosslessJpegDecode(v),
                                w = d[0],
                                g = w.length;
                            if (4 == d[3] && r.t29456) {
                                var _ = w.slice(0);
                                _.fill(0);
                                for (var b = d[1], p = d[2], m = 2 * b, A = 0; A < p; A++)
                                    for (var U = 0; U < b; U++) {
                                        var I = A * b * 4 + 2 * U,
                                            y = I + 2 * U;
                                        (_[I] = w[y]), (_[I + 1] = w[y + 1]), (_[I + m] = w[y + 2]), (_[I + m + 1] = w[y + 3]);
                                    }
                                w = _;
                            }
                            if (16 == h) {
                                if (r.isLE) for (var s = 0; s < g; s++) (a[i + (s << 1)] = 255 & w[s]), (a[i + (s << 1) + 1] = w[s] >>> 8);
                                else for (var s = 0; s < g; s++) (a[i + (s << 1)] = w[s] >>> 8), (a[i + (s << 1) + 1] = 255 & w[s]);
                            } else if (14 == h || 12 == h || 10 == h) for (var E = 16 - h, s = 0; s < g; s++) B.decode._putsF(a, s * h, w[s] << E);
                            else if (8 == h) for (var s = 0; s < g; s++) a[i + s] = w[s];
                            else throw Error("unsupported bit depth " + h);
                        } else {
                            var M = new B.JpegDecoder();
                            M.parse(v);
                            for (var D = M.getData({ width: M.width, height: M.height, forceRGB: !0, isSourcePDF: !1 }), s = 0; s < D.length; s++) a[i + s] = D[s];
                        }
                        6 == r.t262[0] && (r.t262[0] = 2);
                    }),
                    (B.decode._decodeOldJPEGInit = function (r, e, t, n) {
                        var a,
                            i,
                            f,
                            o,
                            v,
                            u = 0,
                            s = 0,
                            l = !1,
                            c = r.t513,
                            h = c ? c[0] : 0,
                            d = r.t514,
                            w = d ? d[0] : 0,
                            g = r.t324 || r.t273 || c,
                            _ = r.t530,
                            b = 0,
                            p = 0,
                            m = r.t277 ? r.t277[0] : 1,
                            A = r.t515;
                        if ((g && ((s = g[0]), (l = g.length > 1)), !l)) {
                            if (255 == e[t] && 216 == e[t + 1]) return { jpegOffset: t };
                            if (
                                null != c &&
                                (255 == e[t + h] && 216 == e[t + h + 1] ? (u = t + h) : F("JPEGInterchangeFormat does not point to SOI"),
                                    null == d ? F("JPEGInterchangeFormatLength field is missing") : (h >= s || h + w <= s) && F("JPEGInterchangeFormatLength field value is invalid"),
                                    null != u)
                            )
                                return { jpegOffset: u };
                        }
                        if ((null != _ && ((b = _[0]), (p = _[1])), null != c && null != d)) {
                            if (w >= 2 && h + w <= s) {
                                for (f = 0, a = new Uint8Array(255 == e[t + h + w - 2] && 216 == e[t + h + w - 1] ? w - 2 : w); f < a.length; f++) a[f] = e[t + h + f];
                                F("Incorrect JPEG interchange format: using JPEGInterchangeFormat offset to derive tables");
                            } else F("JPEGInterchangeFormat+JPEGInterchangeFormatLength > offset to first strip or tile");
                        }
                        if (null == a) {
                            var U = 0,
                                I = [];
                            (I[U++] = 255), (I[U++] = 216);
                            var y = r.t519;
                            if (null == y) throw Error("JPEGQTables tag is missing");
                            for (f = 0; f < y.length; f++) for (o = 0, I[U++] = 255, I[U++] = 219, I[U++] = 0, I[U++] = 67, I[U++] = f; o < 64; o++) I[U++] = e[t + y[f] + o];
                            for (v = 0; v < 2; v++) {
                                var E = r[0 == v ? "t520" : "t521"];
                                if (null == E) throw Error((0 == v ? "JPEGDCTables" : "JPEGACTables") + " tag is missing");
                                for (f = 0; f < E.length; f++) {
                                    (I[U++] = 255), (I[U++] = 196);
                                    var M = 19;
                                    for (o = 0; o < 16; o++) M += e[t + E[f] + o];
                                    for (o = 0, I[U++] = M >>> 8, I[U++] = 255 & M, I[U++] = f | (v << 4); o < 16; o++) I[U++] = e[t + E[f] + o];
                                    for (o = 0; o < M; o++) I[U++] = e[t + E[f] + 16 + o];
                                }
                            }
                            if (
                                ((I[U++] = 255),
                                    (I[U++] = 192),
                                    (I[U++] = 0),
                                    (I[U++] = 8 + 3 * m),
                                    (I[U++] = 8),
                                    (I[U++] = (r.height >>> 8) & 255),
                                    (I[U++] = 255 & r.height),
                                    (I[U++] = (r.width >>> 8) & 255),
                                    (I[U++] = 255 & r.width),
                                    (I[U++] = m),
                                    1 == m)
                            )
                                (I[U++] = 1), (I[U++] = 17), (I[U++] = 0);
                            else for (f = 0; f < 3; f++) (I[U++] = f + 1), (I[U++] = 0 != f ? 17 : ((15 & b) << 4) | (15 & p)), (I[U++] = f);
                            null != A && 0 != A[0] && ((I[U++] = 255), (I[U++] = 221), (I[U++] = 0), (I[U++] = 4), (I[U++] = (A[0] >>> 8) & 255), (I[U++] = 255 & A[0])), (a = new Uint8Array(I));
                        }
                        var D = -1;
                        for (f = 0; f < a.length - 1;) {
                            if (255 == a[f] && 192 == a[f + 1]) {
                                D = f;
                                break;
                            }
                            f++;
                        }
                        if (-1 == D) {
                            var k = new Uint8Array(a.length + 10 + 3 * m);
                            k.set(a);
                            var B = a.length;
                            if (
                                ((D = a.length),
                                    ((a = k)[B++] = 255),
                                    (a[B++] = 192),
                                    (a[B++] = 0),
                                    (a[B++] = 8 + 3 * m),
                                    (a[B++] = 8),
                                    (a[B++] = (r.height >>> 8) & 255),
                                    (a[B++] = 255 & r.height),
                                    (a[B++] = (r.width >>> 8) & 255),
                                    (a[B++] = 255 & r.width),
                                    (a[B++] = m),
                                    1 == m)
                            )
                                (a[B++] = 1), (a[B++] = 17), (a[B++] = 0);
                            else for (f = 0; f < 3; f++) (a[B++] = f + 1), (a[B++] = 0 != f ? 17 : ((15 & b) << 4) | (15 & p)), (a[B++] = f);
                        }
                        if (255 == e[s] && 218 == e[s + 1]) {
                            var x = (e[s + 2] << 8) | e[s + 3];
                            for (f = 0, (i = new Uint8Array(x + 2))[0] = e[s], i[1] = e[s + 1], i[2] = e[s + 2], i[3] = e[s + 3]; f < x - 2; f++) i[f + 4] = e[s + f + 4];
                        } else {
                            i = new Uint8Array(8 + 2 * m);
                            var P = 0;
                            if (((i[P++] = 255), (i[P++] = 218), (i[P++] = 0), (i[P++] = 6 + 2 * m), (i[P++] = m), 1 == m)) (i[P++] = 1), (i[P++] = 0);
                            else for (f = 0; f < 3; f++) (i[P++] = f + 1), (i[P++] = (f << 4) | f);
                            (i[P++] = 0), (i[P++] = 63), (i[P++] = 0);
                        }
                        return { jpegOffset: t, tables: a, sosMarker: i, sofPosition: D };
                    }),
                    (B.decode._decodeOldJPEG = function (r, e, t, n, a, i) {
                        var f,
                            o,
                            v,
                            u,
                            s,
                            l = B.decode._decodeOldJPEGInit(r, e, t, n);
                        if (null != l.jpegOffset) for (f = 0, u = new Uint8Array((o = t + n - l.jpegOffset)); f < o; f++) u[f] = e[l.jpegOffset + f];
                        else {
                            for (
                                (u = new Uint8Array((v = l.tables.length) + l.sosMarker.length + n + 2)).set(l.tables),
                                s = v,
                                u[l.sofPosition + 5] = (r.height >>> 8) & 255,
                                u[l.sofPosition + 6] = 255 & r.height,
                                u[l.sofPosition + 7] = (r.width >>> 8) & 255,
                                u[l.sofPosition + 8] = 255 & r.width,
                                (255 != e[t] || e[t + 1] != SOS) && (u.set(l.sosMarker, s), (s += sosMarker.length)),
                                f = 0;
                                f < n;
                                f++
                            )
                                u[s++] = e[t + f];
                            (u[s++] = 255), (u[s++] = EOI);
                        }
                        var c = new B.JpegDecoder();
                        c.parse(u);
                        for (var h = c.getData({ width: c.width, height: c.height, forceRGB: !0, isSourcePDF: !1 }), f = 0; f < h.length; f++) a[i + f] = h[f];
                        r.t262 && 6 == r.t262[0] && (r.t262[0] = 2);
                    }),
                    (B.decode._decodePackBits = function (r, e, t, n, a) {
                        for (var i = new Int8Array(r.buffer), f = new Int8Array(n.buffer), o = e + t; e < o;) {
                            var v = i[e];
                            if ((e++, v >= 0 && v < 128)) for (var u = 0; u < v + 1; u++) (f[a] = i[e]), a++, e++;
                            if (v >= -127 && v < 0) {
                                for (var u = 0; u < -v + 1; u++) (f[a] = i[e]), a++;
                                e++;
                            }
                        }
                        return a;
                    }),
                    (B.decode._decodeThunder = function (r, e, t, n, a) {
                        for (var i = [0, 1, 0, -1], f = [0, 1, 2, 3, 0, -3, -2, -1], o = e + t, v = 2 * a, u = 0; e < o;) {
                            var s = r[e],
                                l = s >>> 6,
                                c = 63 & s;
                            if ((e++, 3 == l && ((u = 15 & c), (n[v >>> 1] |= u << (4 * ((1 - v) & 1))), v++), 0 == l)) for (var h = 0; h < c; h++) (n[v >>> 1] |= u << (4 * ((1 - v) & 1))), v++;
                            if (2 == l)
                                for (var h = 0; h < 2; h++) {
                                    var d = (c >>> (3 * (1 - h))) & 7;
                                    4 != d && ((u += f[d]), (n[v >>> 1] |= u << (4 * ((1 - v) & 1))), v++);
                                }
                            if (1 == l)
                                for (var h = 0; h < 3; h++) {
                                    var d = (c >>> (2 * (2 - h))) & 3;
                                    2 != d && ((u += i[d]), (n[v >>> 1] |= u << (4 * ((1 - v) & 1))), v++);
                                }
                        }
                    }),
                    (B.decode._dmap = { 1: 0, "011": 1, "000011": 2, "0000011": 3, "010": -1, "000010": -2, "0000010": -3 }),
                    (B.decode._lens =
                        ((e = function (r, e, t, n) {
                            for (var a = 0; a < e.length; a++) r[e[a]] = t + a * n;
                        }),
                            (a =
                                "0000110111,010,11,10,011,0011,0010,00011,000101,000100,0000100,0000101,0000111,00000100,00000111,000011000,0000010111,0000011000,0000001000,00001100111,00001101000,00001101100,00000110111,00000101000,00000010111,00000011000,000011001010,000011001011,000011001100,000011001101,000001101000,000001101001,000001101010,000001101011,000011010010,000011010011,000011010100,000011010101,000011010110,000011010111,000001101100,000001101101,000011011010,000011011011,000001010100,000001010101,000001010110,000001010111,000001100100,000001100101,000001010010,000001010011,000000100100,000000110111,000000111000,000000100111,000000101000,000001011000,000001011001,000000101011,000000101100,000001011010,000001100110,000001100111"),
                            (i =
                                "11011,10010,010111,0110111,00110110,00110111,01100100,01100101,01101000,01100111,011001100,011001101,011010010,011010011,011010100,011010101,011010110,011010111,011011000,011011001,011011010,011011011,010011000,010011001,010011010,011000,010011011"),
                            (f =
                                "0000001111,000011001000,000011001001,000001011011,000000110011,000000110100,000000110101,0000001101100,0000001101101,0000001001010,0000001001011,0000001001100,0000001001101,0000001110010,0000001110011,0000001110100,0000001110101,0000001110110,0000001110111,0000001010010,0000001010011,0000001010100,0000001010101,0000001011010,0000001011011,0000001100100,0000001100101"),
                            (o = "00000001000,00000001100,00000001101,000000010010,000000010011,000000010100,000000010101,000000010110,000000010111,000000011100,000000011101,000000011110,000000011111"),
                            (t = (t =
                                "00110101,000111,0111,1000,1011,1100,1110,1111,10011,10100,00111,01000,001000,000011,110100,110101,101010,101011,0100111,0001100,0001000,0010111,0000011,0000100,0101000,0101011,0010011,0100100,0011000,00000010,00000011,00011010,00011011,00010010,00010011,00010100,00010101,00010110,00010111,00101000,00101001,00101010,00101011,00101100,00101101,00000100,00000101,00001010,00001011,01010010,01010011,01010100,01010101,00100100,00100101,01011000,01011001,01011010,01011011,01001010,01001011,00110010,00110011,00110100").split(
                                    ","
                                )),
                            (a = a.split(",")),
                            (i = i.split(",")),
                            (f = f.split(",")),
                            (o = o.split(",")),
                            (u = {}),
                            e((v = {}), t, 0, 1),
                            e(v, i, 64, 64),
                            e(v, o, 1792, 64),
                            e(u, a, 0, 1),
                            e(u, f, 64, 64),
                            e(u, o, 1792, 64),
                            [v, u])),
                    (B.decode._decodeG4 = function (r, e, t, n, a, i, f) {
                        for (var o = B.decode, v = e << 3, u = 0, s = "", l = [], c = [], h = 0; h < i; h++) c.push(0);
                        c = o._makeDiff(c);
                        for (var d = 0, w = 0, g = 0, _ = 0, b = 0, p = 0, m = "", A = 0, U = 8 * Math.ceil(i / 8); v >>> 3 < e + t;) {
                            (g = o._findDiff(c, d + (0 == d ? 0 : 1), 1 - b)), (_ = o._findDiff(c, g, b));
                            var I = 0;
                            if ((1 == f && (I = (r[v >>> 3] >>> (7 - (7 & v))) & 1), 2 == f && (I = (r[v >>> 3] >>> (7 & v)) & 1), v++, (s += I), "H" == m)) {
                                if (null != o._lens[b][s]) {
                                    var y = o._lens[b][s];
                                    (s = ""), (u += y), y < 64 && (o._addNtimes(l, u, b), (d += u), (b = 1 - b), (u = 0), 0 == --A && (m = ""));
                                }
                            } else
                                "0001" == s && ((s = ""), o._addNtimes(l, _ - d, b), (d = _)),
                                    "001" == s && ((s = ""), (m = "H"), (A = 2)),
                                    null != o._dmap[s] && ((w = g + o._dmap[s]), o._addNtimes(l, w - d, b), (d = w), (s = ""), (b = 1 - b));
                            l.length == i && "" == m && (o._writeBits(l, n, 8 * a + p * U), (b = 0), p++, (d = 0), (c = o._makeDiff(l)), (l = []));
                        }
                    }),
                    (B.decode._findDiff = function (r, e, t) {
                        for (var n = 0; n < r.length; n += 2) if (r[n] >= e && r[n + 1] == t) return r[n];
                    }),
                    (B.decode._makeDiff = function (r) {
                        var e = [];
                        1 == r[0] && e.push(0, 1);
                        for (var t = 1; t < r.length; t++) r[t - 1] != r[t] && e.push(t, r[t]);
                        return e.push(r.length, 0, r.length, 1), e;
                    }),
                    (B.decode._decodeG2 = function (r, e, t, n, a, i, f) {
                        for (var o = B.decode, v = e << 3, u = 0, s = "", l = [], c = 0, h = 0, d = 8 * Math.ceil(i / 8); v >>> 3 < e + t;) {
                            var w = 0;
                            1 == f && (w = (r[v >>> 3] >>> (7 - (7 & v))) & 1),
                                2 == f && (w = (r[v >>> 3] >>> (7 & v)) & 1),
                                v++,
                                (s += w),
                                null != (u = o._lens[c][s]) &&
                                (o._addNtimes(l, u, c), (s = ""), u < 64 && (c = 1 - c), l.length == i && (o._writeBits(l, n, 8 * a + h * d), (l = []), h++, (c = 0), (7 & v) != 0 && (v += 8 - (7 & v)), u >= 64 && (v += 8)));
                        }
                    }),
                    (B.decode._decodeG3 = function (r, e, t, n, a, i, f, o) {
                        for (var v = B.decode, u = e << 3, s = 0, l = "", c = [], h = [], d = 0; d < i; d++) c.push(0);
                        for (var w = 0, g = 0, _ = 0, b = 0, p = 0, m = -1, A = "", U = 0, I = !0, y = 8 * Math.ceil(i / 8); u >>> 3 < e + t;) {
                            (_ = v._findDiff(h, w + (0 == w ? 0 : 1), 1 - p)), (b = v._findDiff(h, _, p));
                            var E = 0;
                            if ((1 == f && (E = (r[u >>> 3] >>> (7 - (7 & u))) & 1), 2 == f && (E = (r[u >>> 3] >>> (7 & u)) & 1), u++, (l += E), I)) {
                                if (null != v._lens[p][l]) {
                                    var M = v._lens[p][l];
                                    (l = ""), (s += M), M < 64 && (v._addNtimes(c, s, p), (p = 1 - p), (s = 0));
                                }
                            } else if ("H" == A) {
                                if (null != v._lens[p][l]) {
                                    var M = v._lens[p][l];
                                    (l = ""), (s += M), M < 64 && (v._addNtimes(c, s, p), (w += s), (p = 1 - p), (s = 0), 0 == --U && (A = ""));
                                }
                            } else
                                "0001" == l && ((l = ""), v._addNtimes(c, b - w, p), (w = b)),
                                    "001" == l && ((l = ""), (A = "H"), (U = 2)),
                                    null != v._dmap[l] && ((g = _ + v._dmap[l]), v._addNtimes(c, g - w, p), (w = g), (l = ""), (p = 1 - p));
                            l.endsWith("000000000001") &&
                                (m >= 0 && v._writeBits(c, n, 8 * a + m * y),
                                    o && (1 == f && (I = ((r[u >>> 3] >>> (7 - (7 & u))) & 1) == 1), 2 == f && (I = ((r[u >>> 3] >>> (7 & u)) & 1) == 1), u++),
                                    (l = ""),
                                    (p = 0),
                                    m++,
                                    (w = 0),
                                    (h = v._makeDiff(c)),
                                    (c = []));
                        }
                        c.length == i && v._writeBits(c, n, 8 * a + m * y);
                    }),
                    (B.decode._addNtimes = function (r, e, t) {
                        for (var n = 0; n < e; n++) r.push(t);
                    }),
                    (B.decode._writeBits = function (r, e, t) {
                        for (var n = 0; n < r.length; n++) e[(t + n) >>> 3] |= r[n] << (7 - ((t + n) & 7));
                    }),
                    (B.decode._decodeLZW = B.decode._decodeLZW =
                        ((d = 0),
                            (w = 0),
                            (g = 0),
                            (_ = 0),
                            (b = function () {
                                var r = s >>> 3,
                                    e = (((l[r] << 16) | (l[r + 1] << 8) | l[r + 2]) >>> (24 - (7 & s) - w)) & ((1 << w) - 1);
                                return (s += w), e;
                            }),
                            (p = new Uint32Array(16384)),
                            (m = 0),
                            (A = function (r) {
                                if (r != m) {
                                    (m = r), (_ = (g = 1 << r) + 1);
                                    for (var e = 0; e < _ + 1; e++) (p[4 * e] = p[4 * e + 3] = e), (p[4 * e + 1] = 65535), (p[4 * e + 2] = 1);
                                }
                            }),
                            (U = function (r) {
                                (w = r + 1), (d = _ + 1);
                            }),
                            (I = function (r) {
                                for (var e = r << 2, t = p[e + 2], n = h + t - 1; 65535 != e;) (c[n--] = p[e]), (e = p[e + 1]);
                                h += t;
                            }),
                            (y = function (r, e) {
                                var t = d << 2,
                                    n = r << 2;
                                (p[t] = p[(e << 2) + 3]), (p[t + 1] = n), (p[t + 2] = p[n + 2] + 1), (p[t + 3] = p[n + 3]), ++d + 1 == 1 << w && 12 != w && w++;
                            }),
                            function (r, e, t, n, a, i) {
                                (s = e << 3), (l = r), (c = n), (h = a);
                                var f = (e + t) << 3,
                                    o = 0,
                                    v = 0;
                                for (A(i), U(i); s < f && (o = b()) != _;) {
                                    if (o == g) {
                                        if ((U(i), (o = b()) == _)) break;
                                        I(o);
                                    } else o < d ? (I(o), y(v, o)) : (y(v, v), I(d - 1));
                                    v = o;
                                }
                                return h;
                            })),
                    (B.tags = {}),
                    (B._types =
                        ((E = Array(250)).fill(0),
                        {
                            basic: {
                                main: (E = E.concat([
                                    0,
                                    0,
                                    0,
                                    0,
                                    4,
                                    3,
                                    3,
                                    3,
                                    3,
                                    3,
                                    0,
                                    0,
                                    3,
                                    0,
                                    0,
                                    0,
                                    3,
                                    0,
                                    0,
                                    2,
                                    2,
                                    2,
                                    2,
                                    4,
                                    3,
                                    0,
                                    0,
                                    3,
                                    4,
                                    4,
                                    3,
                                    3,
                                    5,
                                    5,
                                    3,
                                    2,
                                    5,
                                    5,
                                    0,
                                    0,
                                    0,
                                    0,
                                    4,
                                    4,
                                    0,
                                    0,
                                    3,
                                    3,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    2,
                                    2,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    2,
                                    2,
                                    3,
                                    5,
                                    5,
                                    3,
                                    0,
                                    3,
                                    3,
                                    4,
                                    4,
                                    4,
                                    3,
                                    4,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    3,
                                    3,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    7,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    4,
                                    4,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    3,
                                    3,
                                    5,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    7,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                ])),
                                rest: {
                                    33432: 2,
                                    33434: 5,
                                    33437: 5,
                                    34665: 4,
                                    34850: 3,
                                    34853: 4,
                                    34855: 3,
                                    34864: 3,
                                    34866: 4,
                                    36864: 7,
                                    36867: 2,
                                    36868: 2,
                                    37121: 7,
                                    37377: 10,
                                    37378: 5,
                                    37380: 10,
                                    37381: 5,
                                    37383: 3,
                                    37384: 3,
                                    37385: 3,
                                    37386: 5,
                                    37510: 7,
                                    37520: 2,
                                    37521: 2,
                                    37522: 2,
                                    40960: 7,
                                    40961: 3,
                                    40962: 4,
                                    40963: 4,
                                    40965: 4,
                                    41486: 5,
                                    41487: 5,
                                    41488: 3,
                                    41985: 3,
                                    41986: 3,
                                    41987: 3,
                                    41988: 5,
                                    41989: 3,
                                    41990: 3,
                                    41993: 3,
                                    41994: 3,
                                    41995: 7,
                                    41996: 3,
                                    42032: 2,
                                    42033: 2,
                                    42034: 5,
                                    42036: 2,
                                    42037: 2,
                                    59932: 7,
                                },
                            },
                            gps: { main: [1, 2, 5, 2, 5, 1, 5, 5, 0, 9], rest: { 18: 2, 29: 2 } },
                        })),
                    (B._readIFD = function (r, e, t, n, a, i) {
                        var f = r.readUshort(e, t);
                        t += 2;
                        var o = {};
                        i.debug && F("   ".repeat(a), n.length - 1, ">>>----------------");
                        for (var v = 0; v < f; v++) {
                            var u = r.readUshort(e, t);
                            t += 2;
                            var s = r.readUshort(e, t);
                            t += 2;
                            var l = r.readUint(e, t);
                            t += 4;
                            var c = r.readUint(e, t);
                            t += 4;
                            var h = [];
                            if (1 == s || 7 == s) {
                                var d = l < 5 ? t - 4 : c;
                                d + l > e.buffer.byteLength && (l = e.buffer.byteLength - d), (h = new Uint8Array(e.buffer, d, l));
                            }
                            if (2 == s) {
                                var w = l < 5 ? t - 4 : c,
                                    g = e[w],
                                    _ = Math.max(0, Math.min(l - 1, e.length - w));
                                g < 128 || 0 == _ ? h.push(r.readASCII(e, w, _)) : (h = new Uint8Array(e.buffer, w, _));
                            }
                            if (3 == s) for (var b = 0; b < l; b++) h.push(r.readUshort(e, (l < 3 ? t - 4 : c) + 2 * b));
                            if (4 == s || 13 == s) for (var b = 0; b < l; b++) h.push(r.readUint(e, (l < 2 ? t - 4 : c) + 4 * b));
                            if (5 == s || 10 == s) for (var p = 5 == s ? r.readUint : r.readInt, b = 0; b < l; b++) h.push([p(e, c + 8 * b), p(e, c + 8 * b + 4)]);
                            if (8 == s) for (var b = 0; b < l; b++) h.push(r.readShort(e, (l < 3 ? t - 4 : c) + 2 * b));
                            if (9 == s) for (var b = 0; b < l; b++) h.push(r.readInt(e, (l < 2 ? t - 4 : c) + 4 * b));
                            if (11 == s) for (var b = 0; b < l; b++) h.push(r.readFloat(e, c + 4 * b));
                            if (12 == s) for (var b = 0; b < l; b++) h.push(r.readDouble(e, c + 8 * b));
                            if (0 != l && 0 == h.length) {
                                if ((F(u, "unknown TIFF tag type: ", s, "num:", l), 0 == v)) return;
                                continue;
                            }
                            if ((i.debug && F("   ".repeat(a), u, s, B.tags[u], h), (o["t" + u] = h), 330 == u && o.t272 && "DSLR-A100" == o.t272[0]));
                            else if (330 == u || 34665 == u || 34853 == u || (50740 == u && 300 > r.readUshort(e, r.readUint(h, 0))) || 61440 == u) {
                                for (var m = 50740 == u ? [r.readUint(h, 0)] : h, A = [], b = 0; b < m.length; b++) B._readIFD(r, e, m[b], A, a + 1, i);
                                330 == u && (o.subIFD = A), 34665 == u && (o.exifIFD = A[0]), 34853 == u && (o.gpsiIFD = A[0]), 50740 == u && (o.dngPrvt = A[0]), 61440 == u && (o.fujiIFD = A[0]);
                            }
                            if (37500 == u && i.parseMN) {
                                var U = h;
                                if ("Nikon" == r.readASCII(U, 0, 5)) o.makerNote = B.decode(U.slice(10).buffer)[0];
                                else if ("OLYMP" == r.readASCII(U, 0, 5) || "OM SYSTEM" == r.readASCII(U, 0, 9)) {
                                    var I = [8208, 8224, 8240, 8256, 8272],
                                        y = [];
                                    B._readIFD(r, U, 77 == U[1] ? 16 : 85 == U[5] ? 12 : 8, y, a + 1, i);
                                    for (var E = (o.makerNote = y.pop()), b = 0; b < I.length; b++) {
                                        var M = "t" + I[b];
                                        null != E[M] && (B._readIFD(r, U, E[M][0], y, a + 1, i), (E[M] = y.pop()));
                                    }
                                    E.t12288 && (B._readIFD(r, E.t12288, 0, y, a + 1, i), (E.t12288 = y.pop()));
                                } else if (300 > r.readUshort(e, c) && 12 >= r.readUshort(e, c + 4)) {
                                    var y = [];
                                    B._readIFD(r, e, c, y, a + 1, i), (o.makerNote = y[0]);
                                }
                            }
                        }
                        return n.push(o), i.debug && F("   ".repeat(a), "<<<---------------"), t;
                    }),
                    (B._writeIFD = function (r, e, t, n, a) {
                        var i = Object.keys(a),
                            f = i.length;
                        a.exifIFD && f--, a.gpsiIFD && f--, r.writeUshort(t, n, f);
                        for (var o = (n += 2) + 12 * f + 4, v = 0; v < i.length; v++) {
                            var u = i[v];
                            if ("t34665" != u && "t34853" != u) {
                                "exifIFD" == u && (u = "t34665"), "gpsiIFD" == u && (u = "t34853");
                                var s = parseInt(u.slice(1)),
                                    l = e.main[s];
                                if ((null == l && (l = e.rest[s]), null == l || 0 == l)) throw Error("unknown type of tag: " + s);
                                var c = a[u];
                                if (34665 == s) {
                                    var h = B._writeIFD(r, e, t, o, a.exifIFD);
                                    (c = [o]), (o = h[1]);
                                }
                                if (34853 == s) {
                                    var h = B._writeIFD(r, B._types.gps, t, o, a.gpsiIFD);
                                    (c = [o]), (o = h[1]);
                                }
                                2 == l && (c = c[0] + "\0");
                                var d = c.length;
                                r.writeUshort(t, n, s), (n += 2), r.writeUshort(t, n, l), (n += 2), r.writeUint(t, n, d);
                                var w = [-1, 1, 1, 2, 4, 8, 0, 1, 0, 4, 8, 0, 8][l] * d,
                                    g = (n += 4);
                                if ((w > 4 && (r.writeUint(t, n, o), (g = o)), 1 == l || 7 == l)) for (var _ = 0; _ < d; _++) t[g + _] = c[_];
                                else if (2 == l) r.writeASCII(t, g, c);
                                else if (3 == l) for (var _ = 0; _ < d; _++) r.writeUshort(t, g + 2 * _, c[_]);
                                else if (4 == l) for (var _ = 0; _ < d; _++) r.writeUint(t, g + 4 * _, c[_]);
                                else if (5 == l || 10 == l)
                                    for (var b = 5 == l ? r.writeUint : r.writeInt, _ = 0; _ < d; _++) {
                                        var p = c[_],
                                            m = p[0],
                                            A = p[1];
                                        if (null == m) throw "e";
                                        b(t, g + 8 * _, m), b(t, g + 8 * _ + 4, A);
                                    }
                                else if (9 == l) for (var _ = 0; _ < d; _++) r.writeInt(t, g + 4 * _, c[_]);
                                else if (12 == l) for (var _ = 0; _ < d; _++) r.writeDouble(t, g + 8 * _, c[_]);
                                else throw l;
                                w > 4 && ((w += 1 & w), (o += w)), (n += 4);
                            }
                        }
                        return [n, o];
                    }),
                    (B.toRGBA8 = function (r, e) {
                        function t(r) {
                            return r < 0.0031308 ? 12.92 * r : 1.055 * Math.pow(r, 1 / 2.4) - 0.055;
                        }
                        var n = r.width,
                            a = r.height,
                            i = n * a,
                            f = r.data,
                            o = new Uint8Array(4 * i),
                            v = r.t262 ? r.t262[0] : 2,
                            u = r.t258 ? Math.min(32, r.t258[0]) : 1;
                        null == r.t262 && 1 == u && (v = 0);
                        var s = r.t277 ? r.t277[0] : r.t258 ? r.t258.length : [1, 1, 3, 1, 1, 4, 3][v],
                            l = r.t339 ? r.t339[0] : null;
                        if (1 == v && 32 == u && 3 != l) throw "e";
                        var c = Math.ceil((s * u * n) / 8);
                        if (0 == v) {
                            e = 1 / 256;
                            for (var h = 0; h < a; h++) {
                                var d = h * c,
                                    w = h * n;
                                if (1 == u)
                                    for (var g = 0; g < n; g++) {
                                        var _ = (w + g) << 2,
                                            b = (f[d + (g >> 3)] >> (7 - (7 & g))) & 1;
                                        (o[_] = o[_ + 1] = o[_ + 2] = (1 - b) * 255), (o[_ + 3] = 255);
                                    }
                                if (4 == u)
                                    for (var g = 0; g < n; g++) {
                                        var _ = (w + g) << 2,
                                            b = (f[d + (g >> 1)] >> (4 - 4 * (1 & g))) & 15;
                                        (o[_] = o[_ + 1] = o[_ + 2] = (15 - b) * 17), (o[_ + 3] = 255);
                                    }
                                if (8 == u)
                                    for (var g = 0; g < n; g++) {
                                        var _ = (w + g) << 2,
                                            b = f[d + g];
                                        (o[_] = o[_ + 1] = o[_ + 2] = 255 - b), (o[_ + 3] = 255);
                                    }
                                if (16 == u)
                                    for (var g = 0; g < n; g++) {
                                        var _ = (w + g) << 2,
                                            p = d + 2 * g,
                                            b = (f[p + 1] << 8) | f[p];
                                        (o[_] = o[_ + 1] = o[_ + 2] = Math.min(255, 255 - ~~(b * e))), (o[_ + 3] = 255);
                                    }
                            }
                        } else if (1 == v) {
                            null == e && (e = 1 / 256);
                            for (var m = (3 & f.length) == 0 ? new Float32Array(f.buffer) : null, h = 0; h < a; h++) {
                                var d = h * c,
                                    w = h * n;
                                if (1 == u)
                                    for (var g = 0; g < n; g++) {
                                        var _ = (w + g) << 2,
                                            b = (f[d + (g >> 3)] >> (7 - (7 & g))) & 1;
                                        (o[_] = o[_ + 1] = o[_ + 2] = 255 * b), (o[_ + 3] = 255);
                                    }
                                if (2 == u)
                                    for (var g = 0; g < n; g++) {
                                        var _ = (w + g) << 2,
                                            b = (f[d + (g >> 2)] >> (6 - 2 * (3 & g))) & 3;
                                        (o[_] = o[_ + 1] = o[_ + 2] = 85 * b), (o[_ + 3] = 255);
                                    }
                                if (8 == u)
                                    for (var g = 0; g < n; g++) {
                                        var _ = (w + g) << 2,
                                            b = f[d + g * s];
                                        (o[_] = o[_ + 1] = o[_ + 2] = b), (o[_ + 3] = 255);
                                    }
                                if (16 == u)
                                    for (var g = 0; g < n; g++) {
                                        var _ = (w + g) << 2,
                                            p = d + 2 * g,
                                            b = (f[p + 1] << 8) | f[p];
                                        (o[_] = o[_ + 1] = o[_ + 2] = Math.min(255, ~~(b * e))), (o[_ + 3] = 255);
                                    }
                                if (32 == u)
                                    for (var g = 0; g < n; g++) {
                                        var _ = (w + g) << 2,
                                            p = (d >>> 2) + g,
                                            b = m[p];
                                        (o[_] = o[_ + 1] = o[_ + 2] = ~~(0.5 + 255 * b)), (o[_ + 3] = 255);
                                    }
                            }
                        } else if (2 == v) {
                            if (8 == u) {
                                if (1 == s) for (var g = 0; g < i; g++) (o[4 * g] = o[4 * g + 1] = o[4 * g + 2] = f[g]), (o[4 * g + 3] = 255);
                                if (3 == s)
                                    for (var g = 0; g < i; g++) {
                                        var _ = g << 2,
                                            A = 3 * g;
                                        (o[_] = f[A]), (o[_ + 1] = f[A + 1]), (o[_ + 2] = f[A + 2]), (o[_ + 3] = 255);
                                    }
                                if (s >= 4)
                                    for (var g = 0; g < i; g++) {
                                        var _ = g << 2,
                                            A = g * s;
                                        (o[_] = f[A]), (o[_ + 1] = f[A + 1]), (o[_ + 2] = f[A + 2]), (o[_ + 3] = f[A + 3]);
                                    }
                            } else if (16 == u) {
                                if (4 == s)
                                    for (var g = 0; g < i; g++) {
                                        var _ = g << 2,
                                            A = 8 * g + 1;
                                        (o[_] = f[A]), (o[_ + 1] = f[A + 2]), (o[_ + 2] = f[A + 4]), (o[_ + 3] = f[A + 6]);
                                    }
                                if (3 == s)
                                    for (var g = 0; g < i; g++) {
                                        var _ = g << 2,
                                            A = 6 * g + 1;
                                        (o[_] = f[A]), (o[_ + 1] = f[A + 2]), (o[_ + 2] = f[A + 4]), (o[_ + 3] = 255);
                                    }
                            } else if (32 == u) {
                                for (var U = new Float32Array(f.buffer), I = 0, g = 0; g < U.length; g++) I = Math.min(I, U[g]);
                                if (I < 0)
                                    for (var g = 0; g < f.length; g += 4) {
                                        var y = f[g];
                                        (f[g] = f[g + 3]), (f[g + 3] = y), (y = f[g + 1]), (f[g + 1] = f[g + 2]), (f[g + 2] = y);
                                    }
                                for (var E = [], g = 0; g < 65536; g++) E.push(t(g / 65535));
                                for (var g = 0; g < U.length; g++) {
                                    var M = Math.max(0, Math.min(1, U[g]));
                                    U[g] = E[~~(0.5 + 65535 * M)];
                                }
                                if (3 == s)
                                    for (var g = 0; g < i; g++) {
                                        var _ = g << 2,
                                            A = 3 * g;
                                        (o[_] = ~~(0.5 + 255 * U[A])), (o[_ + 1] = ~~(0.5 + 255 * U[A + 1])), (o[_ + 2] = ~~(0.5 + 255 * U[A + 2])), (o[_ + 3] = 255);
                                    }
                                else if (4 == s)
                                    for (var g = 0; g < i; g++) {
                                        var _ = g << 2,
                                            A = 4 * g;
                                        (o[_] = ~~(0.5 + 255 * U[A])), (o[_ + 1] = ~~(0.5 + 255 * U[A + 1])), (o[_ + 2] = ~~(0.5 + 255 * U[A + 2])), (o[_ + 3] = ~~(0.5 + 255 * U[A + 3]));
                                    }
                                else throw s;
                            } else throw u;
                        } else if (3 == v)
                            for (var D = r.t320, k = 1 << u, B = 8 == u && s > 1 && r.t338 && 0 != r.t338[0], h = 0; h < a; h++)
                                for (var x = 0; x < n; x++) {
                                    var g = h * n + x,
                                        _ = g << 2,
                                        P = 0,
                                        C = h * c;
                                    if (1 == u) P = (f[C + (x >>> 3)] >>> (7 - (7 & x))) & 1;
                                    else if (2 == u) P = (f[C + (x >>> 2)] >>> (6 - 2 * (3 & x))) & 3;
                                    else if (4 == u) P = (f[C + (x >>> 1)] >>> (4 - 4 * (1 & x))) & 15;
                                    else if (8 == u) P = f[C + x * s];
                                    else throw u;
                                    (o[_] = D[P] >> 8), (o[_ + 1] = D[k + P] >> 8), (o[_ + 2] = D[k + k + P] >> 8), (o[_ + 3] = B ? f[C + x * s + 1] : 255);
                                }
                        else if (5 == v)
                            for (var H = s > 4 ? 1 : 0, g = 0; g < i; g++) {
                                var _ = g << 2,
                                    L = g * s;
                                if (window.UDOC) {
                                    var S = f[L],
                                        N = f[L + 1],
                                        G = f[L + 2],
                                        J = f[L + 3],
                                        O = UDOC.C.cmykToRgb([(1 / 255) * S, (1 / 255) * N, (1 / 255) * G, (1 / 255) * J]);
                                    (o[_] = ~~(0.5 + 255 * O[0])), (o[_ + 1] = ~~(0.5 + 255 * O[1])), (o[_ + 2] = ~~(0.5 + 255 * O[2]));
                                } else {
                                    var S = 255 - f[L],
                                        N = 255 - f[L + 1],
                                        G = 255 - f[L + 2],
                                        J = (255 - f[L + 3]) * (1 / 255);
                                    (o[_] = ~~(S * J + 0.5)), (o[_ + 1] = ~~(N * J + 0.5)), (o[_ + 2] = ~~(G * J + 0.5));
                                }
                                o[_ + 3] = 255 * (1 - H) + f[L + 4] * H;
                            }
                        else if (6 == v && r.t278)
                            for (var W = r.t278[0], h = 0; h < a; h += W)
                                for (var g = h * n, j = W * n, T = 0; T < j; T++) {
                                    var _ = 4 * (g + T),
                                        L = 3 * g + 4 * (T >>> 1),
                                        G = f[L + (1 & T)],
                                        R = f[L + 2] - 128,
                                        Q = f[L + 3] - 128,
                                        q = G + ((Q >> 2) + (Q >> 3) + (Q >> 5)),
                                        Z = G - ((R >> 2) + (R >> 4) + (R >> 5)) - ((Q >> 1) + (Q >> 3) + (Q >> 4) + (Q >> 5)),
                                        $ = G + (R + (R >> 1) + (R >> 2) + (R >> 6));
                                    (o[_] = Math.max(0, Math.min(255, q))), (o[_ + 1] = Math.max(0, Math.min(255, Z))), (o[_ + 2] = Math.max(0, Math.min(255, $))), (o[_ + 3] = 255);
                                }
                        else if (8 == v) {
                            if (3 != s || 16 != u) throw "e";
                            for (var V = new Uint16Array(f.buffer), X = new Int16Array(f.buffer), N = [3.1338561, -1.6168667, -0.4906146, -0.9787684, 1.9161415, 0.033454, 0.0719453, -0.2289914, 1.4052427], h = 0; h < a; h++)
                                for (var x = 0; x < n; x++) {
                                    var g = h * n + x,
                                        _ = 4 * g,
                                        A = 3 * g,
                                        z = V[A] * (100 / 65535),
                                        Y = X[A + 1] * (255 / 65535),
                                        $ = X[A + 2] * (255 / 65535),
                                        K = (z + 16) / 116,
                                        rr = K * K * K,
                                        re = K - $ / 200,
                                        rt = re * re * re,
                                        rn = Y / 500 + K,
                                        ra = rn * rn * rn,
                                        ri = (96.42 / 100) * (ra > 0.008856 ? ra : (116 * rn - 16) / 903.3),
                                        G = 1 * (rr > 0.008856 ? rr : (116 * K - 16) / 903.3),
                                        rf = 0.8249 * (rt > 0.008856 ? rt : (116 * re - 16) / 903.3);
                                    (o[_] = Math.max(0, Math.min(255, 255 * t(ri * N[0] + G * N[1] + rf * N[2])))),
                                        (o[_ + 1] = Math.max(0, Math.min(255, 255 * t(ri * N[3] + G * N[4] + rf * N[5])))),
                                        (o[_ + 2] = Math.max(0, Math.min(255, 255 * t(ri * N[6] + G * N[7] + rf * N[8])))),
                                        (o[_ + 3] = 255);
                                }
                        } else if (32845 == v)
                            for (var h = 0; h < a; h++)
                                for (var x = 0; x < n; x++) {
                                    var L = (h * n + x) * 6,
                                        _ = (h * n + x) * 4,
                                        z = (f[L + 1] << 8) | f[L],
                                        z = Math.pow(2, (z + 0.5) / 256 - 64),
                                        ro = (f[L + 3] + 0.5) / 410,
                                        rv = (f[L + 5] + 0.5) / 410,
                                        ru = (9 * ro) / (6 * ro - 16 * rv + 12),
                                        rs = (4 * rv) / (6 * ro - 16 * rv + 12),
                                        rl = z,
                                        ri = (ru * rl) / rs,
                                        G = rl,
                                        rf = ((1 - ru - rs) * rl) / rs,
                                        q = 2.69 * ri - 1.276 * G - 0.414 * rf,
                                        Z = -1.022 * ri + 1.978 * G + 0.044 * rf,
                                        $ = 0.061 * ri - 0.224 * G + 1.163 * rf;
                                    (o[_] = 255 * t(Math.min(q, 1))), (o[_ + 1] = 255 * t(Math.min(Z, 1))), (o[_ + 2] = 255 * t(Math.min($, 1))), (o[_ + 3] = 255);
                                }
                        else F("Unknown Photometric interpretation: " + v);
                        return o;
                    }),
                    (B.replaceIMG = function (r) {
                        null == r && (r = document.getElementsByTagName("img"));
                        for (var e = ["tif", "tiff", "dng", "cr2", "nef"], t = 0; t < r.length; t++) {
                            var n = r[t],
                                a = n.getAttribute("src");
                            if (null != a) {
                                var i = a.split(".").pop().toLowerCase();
                                if (-1 != e.indexOf(i)) {
                                    var f = new XMLHttpRequest();
                                    B._xhrs.push(f), B._imgs.push(n), f.open("GET", a), (f.responseType = "arraybuffer"), (f.onload = B._imgLoaded), f.send();
                                }
                            }
                        }
                    }),
                    (B._xhrs = []),
                    (B._imgs = []),
                    (B._imgLoaded = function (r) {
                        var e = B._xhrs.indexOf(r.target),
                            t = B._imgs[e];
                        B._xhrs.splice(e, 1), B._imgs.splice(e, 1), t.setAttribute("src", B.bufferToURI(r.target.response));
                    }),
                    (B.bufferToURI = function (r) {
                        var e = B.decode(r),
                            t = e,
                            n = 0,
                            a = t[0];
                        e[0].subIFD && (t = t.concat(e[0].subIFD));
                        for (var i = 0; i < t.length; i++) {
                            var f = t[i];
                            if (null != f.t258 && !(f.t258.length < 3)) {
                                var o = f.t256 * f.t257;
                                o > n && ((n = o), (a = f));
                            }
                        }
                        B.decodeImage(r, a, e);
                        var v = B.toRGBA8(a),
                            u = a.width,
                            s = a.height,
                            l = document.createElement("canvas");
                        (l.width = u), (l.height = s);
                        var c = l.getContext("2d"),
                            h = new ImageData(new Uint8ClampedArray(v.buffer), u, s);
                        return c.putImageData(h, 0, 0), l.toDataURL();
                    }),
                    (B._binBE = {
                        nextZero: function (r, e) {
                            for (; 0 != r[e];) e++;
                            return e;
                        },
                        readUshort: function (r, e) {
                            return (r[e] << 8) | r[e + 1];
                        },
                        readShort: function (r, e) {
                            var t = B._binBE.ui8;
                            return (t[0] = r[e + 1]), (t[1] = r[e + 0]), B._binBE.i16[0];
                        },
                        readInt: function (r, e) {
                            var t = B._binBE.ui8;
                            return (t[0] = r[e + 3]), (t[1] = r[e + 2]), (t[2] = r[e + 1]), (t[3] = r[e + 0]), B._binBE.i32[0];
                        },
                        readUint: function (r, e) {
                            var t = B._binBE.ui8;
                            return (t[0] = r[e + 3]), (t[1] = r[e + 2]), (t[2] = r[e + 1]), (t[3] = r[e + 0]), B._binBE.ui32[0];
                        },
                        readASCII: function (r, e, t) {
                            for (var n = "", a = 0; a < t; a++) n += String.fromCharCode(r[e + a]);
                            return n;
                        },
                        readFloat: function (r, e) {
                            for (var t = B._binBE.ui8, n = 0; n < 4; n++) t[n] = r[e + 3 - n];
                            return B._binBE.fl32[0];
                        },
                        readDouble: function (r, e) {
                            for (var t = B._binBE.ui8, n = 0; n < 8; n++) t[n] = r[e + 7 - n];
                            return B._binBE.fl64[0];
                        },
                        writeUshort: function (r, e, t) {
                            (r[e] = (t >> 8) & 255), (r[e + 1] = 255 & t);
                        },
                        writeInt: function (r, e, t) {
                            var n = B._binBE.ui8;
                            (B._binBE.i32[0] = t), (r[e + 3] = n[0]), (r[e + 2] = n[1]), (r[e + 1] = n[2]), (r[e + 0] = n[3]);
                        },
                        writeUint: function (r, e, t) {
                            (r[e] = (t >> 24) & 255), (r[e + 1] = (t >> 16) & 255), (r[e + 2] = (t >> 8) & 255), (r[e + 3] = (t >> 0) & 255);
                        },
                        writeASCII: function (r, e, t) {
                            for (var n = 0; n < t.length; n++) r[e + n] = t.charCodeAt(n);
                        },
                        writeDouble: function (r, e, t) {
                            B._binBE.fl64[0] = t;
                            for (var n = 0; n < 8; n++) r[e + n] = B._binBE.ui8[7 - n];
                        },
                    }),
                    (B._binBE.ui8 = new Uint8Array(8)),
                    (B._binBE.i16 = new Int16Array(B._binBE.ui8.buffer)),
                    (B._binBE.i32 = new Int32Array(B._binBE.ui8.buffer)),
                    (B._binBE.ui32 = new Uint32Array(B._binBE.ui8.buffer)),
                    (B._binBE.fl32 = new Float32Array(B._binBE.ui8.buffer)),
                    (B._binBE.fl64 = new Float64Array(B._binBE.ui8.buffer)),
                    (B._binLE = {
                        nextZero: B._binBE.nextZero,
                        readUshort: function (r, e) {
                            return (r[e + 1] << 8) | r[e];
                        },
                        readShort: function (r, e) {
                            var t = B._binBE.ui8;
                            return (t[0] = r[e + 0]), (t[1] = r[e + 1]), B._binBE.i16[0];
                        },
                        readInt: function (r, e) {
                            var t = B._binBE.ui8;
                            return (t[0] = r[e + 0]), (t[1] = r[e + 1]), (t[2] = r[e + 2]), (t[3] = r[e + 3]), B._binBE.i32[0];
                        },
                        readUint: function (r, e) {
                            var t = B._binBE.ui8;
                            return (t[0] = r[e + 0]), (t[1] = r[e + 1]), (t[2] = r[e + 2]), (t[3] = r[e + 3]), B._binBE.ui32[0];
                        },
                        readASCII: B._binBE.readASCII,
                        readFloat: function (r, e) {
                            for (var t = B._binBE.ui8, n = 0; n < 4; n++) t[n] = r[e + n];
                            return B._binBE.fl32[0];
                        },
                        readDouble: function (r, e) {
                            for (var t = B._binBE.ui8, n = 0; n < 8; n++) t[n] = r[e + n];
                            return B._binBE.fl64[0];
                        },
                        writeUshort: function (r, e, t) {
                            (r[e] = 255 & t), (r[e + 1] = (t >> 8) & 255);
                        },
                        writeInt: function (r, e, t) {
                            var n = B._binBE.ui8;
                            (B._binBE.i32[0] = t), (r[e + 0] = n[0]), (r[e + 1] = n[1]), (r[e + 2] = n[2]), (r[e + 3] = n[3]);
                        },
                        writeUint: function (r, e, t) {
                            (r[e] = (t >>> 0) & 255), (r[e + 1] = (t >>> 8) & 255), (r[e + 2] = (t >>> 16) & 255), (r[e + 3] = (t >>> 24) & 255);
                        },
                        writeASCII: B._binBE.writeASCII,
                    }),
                    (B._copyTile = function (r, e, t, n, a, i, f, o) {
                        for (var v = Math.min(e, a - f), u = Math.min(t, i - o), s = 0; s < u; s++) for (var l = (o + s) * a + f, c = s * e, h = 0; h < v; h++) n[l + h] = r[c + h];
                    }),
                    (B._inflateRaw =
                        (((M = {}).H = {}),
                            (M.H.N = function (r, e) {
                                var t,
                                    n,
                                    a = Uint8Array,
                                    i = 0,
                                    f = 0,
                                    o = 0,
                                    v = 0,
                                    u = 0,
                                    s = 0,
                                    l = 0,
                                    c = 0,
                                    h = 0;
                                if (3 == r[0] && 0 == r[1]) return e || new a(0);
                                var d = M.H,
                                    w = d.b,
                                    g = d.e,
                                    _ = d.R,
                                    b = d.n,
                                    p = d.A,
                                    m = d.Z,
                                    A = d.m,
                                    U = null == e;
                                for (U && (e = new a((r.length >>> 2) << 5)); 0 == i;) {
                                    if (((i = w(r, h, 1)), (f = w(r, h + 1, 2)), (h += 3), 0 == f)) {
                                        (7 & h) != 0 && (h += 8 - (7 & h));
                                        var I = (h >>> 3) + 4,
                                            y = r[I - 4] | (r[I - 3] << 8);
                                        U && (e = M.H.W(e, c + y)), e.set(new a(r.buffer, r.byteOffset + I, y), c), (h = (I + y) << 3), (c += y);
                                        continue;
                                    }
                                    if ((U && (e = M.H.W(e, c + 131072)), 1 == f && ((t = A.J), (n = A.h), (s = 511), (l = 31)), 2 == f)) {
                                        (o = g(r, h, 5) + 257), (v = g(r, h + 5, 5) + 1), (u = g(r, h + 10, 4) + 4), (h += 14);
                                        for (var E = 1, D = 0; D < 38; D += 2) (A.Q[D] = 0), (A.Q[D + 1] = 0);
                                        for (var D = 0; D < u; D++) {
                                            var k = g(r, h + 3 * D, 3);
                                            (A.Q[(A.X[D] << 1) + 1] = k), k > E && (E = k);
                                        }
                                        (h += 3 * u), b(A.Q, E), p(A.Q, E, A.u), (t = A.w), (n = A.d), (h = _(A.u, (1 << E) - 1, o + v, r, h, A.v));
                                        var B = d.V(A.v, 0, o, A.C);
                                        s = (1 << B) - 1;
                                        var F = d.V(A.v, o, v, A.D);
                                        (l = (1 << F) - 1), b(A.C, B), p(A.C, B, t), b(A.D, F), p(A.D, F, n);
                                    }
                                    for (; ;) {
                                        var x = t[m(r, h) & s];
                                        h += 15 & x;
                                        var P = x >>> 4;
                                        if (P >>> 8 == 0) e[c++] = P;
                                        else if (256 == P) break;
                                        else {
                                            var C = c + P - 254;
                                            if (P > 264) {
                                                var H = A.q[P - 257];
                                                (C = c + (H >>> 3) + g(r, h, 7 & H)), (h += 7 & H);
                                            }
                                            var L = n[m(r, h) & l];
                                            h += 15 & L;
                                            var S = L >>> 4,
                                                N = A.c[S],
                                                G = (N >>> 4) + w(r, h, 15 & N);
                                            for (h += 15 & N; c < C;) (e[c] = e[c++ - G]), (e[c] = e[c++ - G]), (e[c] = e[c++ - G]), (e[c] = e[c++ - G]);
                                            c = C;
                                        }
                                    }
                                }
                                return e.length == c ? e : e.slice(0, c);
                            }),
                            (M.H.W = function (r, e) {
                                var t = r.length;
                                if (e <= t) return r;
                                var n = new Uint8Array(t << 1);
                                return n.set(r, 0), n;
                            }),
                            (M.H.R = function (r, e, t, n, a, i) {
                                for (var f = M.H.e, o = M.H.Z, v = 0; v < t;) {
                                    var u = r[o(n, a) & e];
                                    a += 15 & u;
                                    var s = u >>> 4;
                                    if (s <= 15) (i[v] = s), v++;
                                    else {
                                        var l = 0,
                                            c = 0;
                                        16 == s ? ((c = 3 + f(n, a, 2)), (a += 2), (l = i[v - 1])) : 17 == s ? ((c = 3 + f(n, a, 3)), (a += 3)) : 18 == s && ((c = 11 + f(n, a, 7)), (a += 7));
                                        for (var h = v + c; v < h;) (i[v] = l), v++;
                                    }
                                }
                                return a;
                            }),
                            (M.H.V = function (r, e, t, n) {
                                for (var a = 0, i = 0, f = n.length >>> 1; i < t;) {
                                    var o = r[i + e];
                                    (n[i << 1] = 0), (n[(i << 1) + 1] = o), o > a && (a = o), i++;
                                }
                                for (; i < f;) (n[i << 1] = 0), (n[(i << 1) + 1] = 0), i++;
                                return a;
                            }),
                            (M.H.n = function (r, e) {
                                for (var t, n, a, i, f, o = M.H.m, v = r.length, u = o.j, i = 0; i <= e; i++) u[i] = 0;
                                for (i = 1; i < v; i += 2) u[r[i]]++;
                                var s = o.K;
                                for (n = 1, t = 0, u[0] = 0; n <= e; n++) (t = (t + u[n - 1]) << 1), (s[n] = t);
                                for (a = 0; a < v; a += 2) 0 != (f = r[a + 1]) && ((r[a] = s[f]), s[f]++);
                            }),
                            (M.H.A = function (r, e, t) {
                                for (var n = r.length, a = M.H.m.r, i = 0; i < n; i += 2)
                                    if (0 != r[i + 1]) for (var f = i >> 1, o = r[i + 1], v = (f << 4) | o, u = e - o, s = r[i] << u, l = s + (1 << u); s != l;) (t[a[s] >>> (15 - e)] = v), s++;
                            }),
                            (M.H.l = function (r, e) {
                                for (var t = M.H.m.r, n = 15 - e, a = 0; a < r.length; a += 2) {
                                    var i = r[a] << (e - r[a + 1]);
                                    r[a] = t[i] >>> n;
                                }
                            }),
                            (M.H.M = function (r, e, t) {
                                t <<= 7 & e;
                                var n = e >>> 3;
                                (r[n] |= t), (r[n + 1] |= t >>> 8);
                            }),
                            (M.H.I = function (r, e, t) {
                                t <<= 7 & e;
                                var n = e >>> 3;
                                (r[n] |= t), (r[n + 1] |= t >>> 8), (r[n + 2] |= t >>> 16);
                            }),
                            (M.H.e = function (r, e, t) {
                                return ((r[e >>> 3] | (r[(e >>> 3) + 1] << 8)) >>> (7 & e)) & ((1 << t) - 1);
                            }),
                            (M.H.b = function (r, e, t) {
                                return ((r[e >>> 3] | (r[(e >>> 3) + 1] << 8) | (r[(e >>> 3) + 2] << 16)) >>> (7 & e)) & ((1 << t) - 1);
                            }),
                            (M.H.Z = function (r, e) {
                                return (r[e >>> 3] | (r[(e >>> 3) + 1] << 8) | (r[(e >>> 3) + 2] << 16)) >>> (7 & e);
                            }),
                            (M.H.i = function (r, e) {
                                return (r[e >>> 3] | (r[(e >>> 3) + 1] << 8) | (r[(e >>> 3) + 2] << 16) | (r[(e >>> 3) + 3] << 24)) >>> (7 & e);
                            }),
                            (M.H.m =
                                ((D = Uint16Array),
                                    (k = Uint32Array),
                                {
                                    K: new D(16),
                                    j: new D(16),
                                    X: [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
                                    S: [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 999, 999, 999],
                                    T: [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0],
                                    q: new D(32),
                                    p: [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 65535, 65535],
                                    z: [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0],
                                    c: new k(32),
                                    J: new D(512),
                                    _: [],
                                    h: new D(32),
                                    $: [],
                                    w: new D(32768),
                                    C: [],
                                    v: [],
                                    d: new D(32768),
                                    D: [],
                                    u: new D(512),
                                    Q: [],
                                    r: new D(32768),
                                    s: new k(286),
                                    Y: new k(30),
                                    a: new k(19),
                                    t: new k(15e3),
                                    k: new D(65536),
                                    g: new D(32768),
                                })),
                            (function () {
                                for (var r = M.H.m, e = 0; e < 32768; e++) {
                                    var t = e;
                                    (t =
                                        ((4278255360 & (t = ((4042322160 & (t = ((3435973836 & (t = ((2863311530 & t) >>> 1) | ((1431655765 & t) << 1))) >>> 2) | ((858993459 & t) << 2))) >>> 4) | ((252645135 & t) << 4))) >>> 8) |
                                        ((16711935 & t) << 8)),
                                        (r.r[e] = ((t >>> 16) | (t << 16)) >>> 17);
                                }
                                function n(r, e, t) {
                                    for (; 0 != e--;) r.push(0, t);
                                }
                                for (var e = 0; e < 32; e++) (r.q[e] = (r.S[e] << 3) | r.T[e]), (r.c[e] = (r.p[e] << 4) | r.z[e]);
                                n(r._, 144, 8),
                                    n(r._, 112, 9),
                                    n(r._, 24, 7),
                                    n(r._, 8, 8),
                                    M.H.n(r._, 9),
                                    M.H.A(r._, 9, r.J),
                                    M.H.l(r._, 9),
                                    n(r.$, 32, 5),
                                    M.H.n(r.$, 5),
                                    M.H.A(r.$, 5, r.h),
                                    M.H.l(r.$, 5),
                                    n(r.Q, 19, 0),
                                    n(r.C, 286, 0),
                                    n(r.D, 30, 0),
                                    n(r.v, 320, 0);
                            })(),
                            M.H.N)),
                    (B.LosslessJpegDecode = (function () {
                        var r, e;
                        function t() {
                            return r[e++];
                        }
                        function n() {
                            return (r[e++] << 8) | r[e++];
                        }
                        function a(r) {
                            for (var e = r.c, t = r.f; e < 25 && r.d < r.a;) {
                                var n = r.data[r.d++];
                                255 == n && !r.b && r.d++, (t = (t << 8) | n), (e += 8);
                            }
                            if (e < 0) throw "e";
                            (r.c = e), (r.f = t);
                        }
                        function i(r, e) {
                            return e.c < r && a(e), (e.f >> (e.c -= r)) & (65535 >> (16 - r));
                        }
                        function f(r, e) {
                            var t = r[0],
                                n = 0,
                                i = 255;
                            e.c < 16 && a(e);
                            var f = (e.f >> (e.c - 8)) & 255;
                            for (i = t[(n = r[1][f]) + 3], e.c -= t[n + 2]; 255 == i;) (n = t[n + ((e.f >> --e.c) & 1)]), (i = t[n + 3]);
                            return i;
                        }
                        function o(r, e) {
                            return r < 32768 >> (16 - e) && (r += -(1 << e) + 1), r;
                        }
                        function v(r, e, t, n, a, v) {
                            for (var u = 0, s = 0; s < v; s++) {
                                for (var l = s * e, c = 0; c < e; c += a) {
                                    u++;
                                    for (var h = 0; h < a; h++)
                                        r[l + c + h] = (function (r, e) {
                                            var t = f(r, e);
                                            return 0 == t ? 0 : 16 == t ? -32768 : o(i(t, e), t);
                                        })(n[h], t);
                                }
                                if (0 != t.e && u % t.e == 0 && 0 != s) {
                                    for (var d = t.d, w = t.data; 255 != w[d] || !(208 <= w[d + 1] && w[d + 1] <= 215);) d--;
                                    (t.d = d + 2), (t.f = 0), (t.c = 0);
                                }
                            }
                        }
                        function u(r, e, t, n, a, i, f, o) {
                            for (var v = t * f, u = a; u < i; u++) r[u] += 1 << (o - 1);
                            for (var s = f; s < v; s += f) for (var u = a; u < i; u++) r[s + u] += r[s + u - f];
                            for (var l = 1; l < n; l++) {
                                for (var c = l * v, u = a; u < i; u++) r[c + u] += r[c + u - v];
                                for (var s = f; s < v; s += f)
                                    for (var u = a; u < i; u++) {
                                        var h = c + s + u,
                                            d = h - v,
                                            w = r[h - f],
                                            g = 0;
                                        if (0 == e) g = 0;
                                        else if (1 == e) g = w;
                                        else if (2 == e) g = r[d];
                                        else if (3 == e) g = r[d - f];
                                        else if (4 == e) g = w + (r[d] - r[d - f]);
                                        else if (5 == e) g = w + ((r[d] - r[d - f]) >>> 1);
                                        else if (6 == e) g = r[d] + ((w - r[d - f]) >>> 1);
                                        else if (7 == e) g = (w + r[d]) >>> 1;
                                        else throw e;
                                        r[h] += g;
                                    }
                            }
                        }
                        return function (a) {
                            if (((r = a), (e = 0), 65496 != n())) throw "e";
                            for (var s = [], l = 0, c = 0, h = 0, d = [], w = [], g = [], _ = 0, b = 0, p = 0; ;) {
                                var m = n();
                                if (65535 == m) {
                                    e--;
                                    continue;
                                }
                                var A = n();
                                if (65475 == m) {
                                    (c = t()), (b = n()), (p = n()), (_ = t());
                                    for (var U = 0; U < _; U++) {
                                        var I = t(),
                                            y = t();
                                        if (0 != t()) throw "e";
                                        s[I] = [U, y >> 4, 15 & y];
                                    }
                                } else if (65476 == m)
                                    for (var E = e + A - 2; e < E;)
                                        !(function (r) {
                                            for (var e = t(), n = [0, 0, 0, 255], a = [], i = 0; i < 16; i++) a[i] = t();
                                            for (var i = 0; i < 16; i++)
                                                for (var f = 0; f < a[i]; f++) {
                                                    var o = (function r(e, t, n, a) {
                                                        if (255 != e[t + 3]) return 0;
                                                        if (0 == n) return t;
                                                        for (var i = 0; i < 2; i++) {
                                                            0 == e[t + i] && ((e[t + i] = e.length), e.push(0, 0, a, 255));
                                                            var f = r(e, e[t + i], n - 1, a + 1);
                                                            if (0 != f) return f;
                                                        }
                                                        return 0;
                                                    })(n, 0, i + 1, 1);
                                                    n[o + 3] = t();
                                                }
                                            var v = new Uint8Array(256);
                                            r[e] = [new Uint8Array(n), v];
                                            for (var i = 0; i < 256; i++) {
                                                for (var u = 8, s = i, l = 0; 255 == n[l + 3] && 0 != u;) l = n[l + ((s >> --u) & 1)];
                                                v[i] = l;
                                            }
                                        })(w);
                                else if (65498 == m) {
                                    e++;
                                    for (var U = 0; U < _; U++) {
                                        var M = s[t()];
                                        (g[M[0]] = w[t() >>> 4]), (d[M[0]] = M.slice(1));
                                    }
                                    (l = t()), (e += 2);
                                    break;
                                } else 65501 == m ? (h = n()) : (e += A - 2);
                            }
                            var D = new (c > 8 ? Uint16Array : Uint8Array)(b * p * _),
                                k = { c: 0, f: 0, b: 8 == l, d: e, data: r, a: r.length, e: h };
                            if (k.b)
                                !(function (t, n, a, v, u) {
                                    for (var s = r.length - e, l = 0; l < s; l += 4) {
                                        var c = r[e + l];
                                        (r[e + l] = r[e + l + 3]), (r[e + l + 3] = c);
                                        var c = r[e + l + 1];
                                        (r[e + l + 1] = r[e + l + 2]), (r[e + l + 2] = c);
                                    }
                                    for (var h = 0; h < u; h++)
                                        for (var d = 32768, w = 32768, g = 0; g < n; g += 2) {
                                            var _ = f(v, a),
                                                b = f(v, a);
                                            0 != _ && (d += o(i(_, a), _)), 0 != b && (w += o(i(b, a), b)), (t[h * n + g] = 65535 & d), (t[h * n + g + 1] = 65535 & w);
                                        }
                                })(D, p * _, k, g[0], b);
                            else {
                                for (var B = [], F = 0, x = 0, U = 0; U < _; U++) {
                                    var P = d[U],
                                        C = P[0],
                                        H = P[1];
                                    C > F && (F = C), H > x && (x = H), B.push(C * H);
                                }
                                if (1 != F || 1 != x) {
                                    if (3 != _ || 1 != B[1] || 1 != B[2] || 2 != F || (1 != x && 2 != x)) throw "e";
                                    for (var L = [], S = 0, U = 0; U < _; U++) {
                                        for (var N = 0; N < B[U]; N++) L.push(g[U]);
                                        S += B[U];
                                    }
                                    var G = p / F,
                                        J = b / x,
                                        O = G * J;
                                    v(D, G * S, k, L, S, J), u(D, l, G, J, S - 2, S, S, c);
                                    var W = new Uint16Array(O * B[0]);
                                    if (2 == F && 2 == x) {
                                        for (var U = 0; U < O; U++) (W[4 * U] = D[6 * U]), (W[4 * U + 1] = D[6 * U + 1]), (W[4 * U + 2] = D[6 * U + 2]), (W[4 * U + 3] = D[6 * U + 3]);
                                        u(W, l, 4 * G, J, 0, 1, 1, c);
                                        for (var U = 0; U < O; U++) (D[6 * U] = W[4 * U]), (D[6 * U + 1] = W[4 * U + 1]), (D[6 * U + 2] = W[4 * U + 2]), (D[6 * U + 3] = W[4 * U + 3]);
                                    }
                                    if (2 == F && 1 == x) {
                                        for (var U = 0; U < O; U++) (W[2 * U] = D[4 * U]), (W[2 * U + 1] = D[4 * U + 1]);
                                        u(W, l, 2 * G, J, 0, 1, 1, c);
                                        for (var U = 0; U < O; U++) (D[4 * U] = W[2 * U]), (D[4 * U + 1] = W[2 * U + 1]);
                                    }
                                    for (var j = D.slice(0), H = 0; H < b; H++)
                                        if (2 == x)
                                            for (var C = 0; C < p; C++) {
                                                var T = (H * p + C) * _,
                                                    R = ((H >>> 1) * G + (C >>> 1)) * S,
                                                    Q = (1 & H) * 2 + (1 & C);
                                                (D[T] = j[R + Q]), (D[T + 1] = j[R + 4]), (D[T + 2] = j[R + 5]);
                                            }
                                        else
                                            for (var C = 0; C < p; C++) {
                                                var T = (H * p + C) * _,
                                                    R = (H * G + (C >>> 1)) * S,
                                                    Q = 1 & C;
                                                (D[T] = j[R + Q]), (D[T + 1] = j[R + 2]), (D[T + 2] = j[R + 3]);
                                            }
                                } else if ((v(D, p * _, k, g, _, b), 0 == h)) u(D, l, p, b, 0, _, _, c);
                                else
                                    for (var q = Math.floor(h / p), H = 0; H < b; H += q) {
                                        var Z = D.slice(H * p * _, (H + q) * p * _);
                                        u(Z, l, p, q, 0, _, _, c), D.set(Z, H * p * _);
                                    }
                            }
                            return [D, p, b, _];
                        };
                    })()),
                    (function () {
                        function r(r) {
                            for (var e = [[], [], []], t = Math.max(2, (r.w + 32) >>> 6), n = 0; n < 3; n++) for (var a = 0; a < 41; a++) e[n][a] = [t, 1];
                            return e;
                        }
                        function e(r, e) {
                            var t = 0,
                                n = 8 - r.a;
                            if ((r.j, r.a, e)) {
                                if (e >= n)
                                    do (t <<= n), (e -= n), (t |= r[r.j] & ((1 << n) - 1)), r.j++, (n = 8);
                                    while (e >= 8);
                                e && ((t <<= e), (n -= e), (t |= (r[r.j] >>> n) & ((1 << e) - 1))), (r.a = 8 - n);
                            }
                            return t;
                        }
                        function t(r, t, n, a, i, f, o, v) {
                            null == v && (v = 0);
                            var u,
                                s,
                                l,
                                c,
                                h,
                                d,
                                w = f + 1,
                                g = w % 2,
                                _ = 0,
                                b = a[i],
                                p = a[i - 1],
                                m = a[i - 2][w],
                                A = p[w - 1],
                                U = p[w],
                                I = p[w + 1],
                                y = b[w - 1],
                                E = b[w + 1],
                                M = Math.abs;
                            if ((g && ((l = M(I - U)), (c = M(m - U)), (h = M(A - U))), g)) {
                                if (((d = ((d = l > h && c < l ? m + A : l < h && c < h ? m + I : I + A) + 2 * U) >>> 2), v)) {
                                    b[w] = d;
                                    return;
                                }
                                u = t.t * t.c[r.g + U - m] + t.c[r.g + A - U];
                            } else (d = (U > A && U > I) || (U < A && U < I) ? (E + y + 2 * U) >>> 2 : (y + E) >>> 1), (u = t.t * t.c[r.g + U - A] + t.c[r.g + A - y]);
                            s = M(u);
                            var D = (function (r) {
                                for (var e = -1, t = 0; !t; e++) (t = (r[r.j] >>> (7 - r.a)) & 1), r.a++, (r.a &= 7), !r.a && r.j++;
                                return e;
                            })(n);
                            if (D < r.n - t.v - 1) {
                                var k = (function (r, e) {
                                    var t = 0;
                                    if (e < r) for (; t <= 14 && e << ++t < r;);
                                    return t;
                                })(o[s][0], o[s][1]);
                                _ = e(n, k) + (D << k);
                            } else _ = e(n, t.v) + 1;
                            (_ = 1 & _ ? -1 - (_ >>> 1) : _ >>> 1),
                                (o[s][0] += M(_)),
                                o[s][1] == r.f && ((o[s][0] >>>= 1), (o[s][1] >>>= 1)),
                                o[s][1]++,
                                (d = u < 0 ? d - _ : d + _),
                                r.i && (d < 0 ? (d += t.w) : d > r.g && (d -= t.w)),
                                (b[w] = d >= 0 ? Math.min(d, r.g) : 0);
                        }
                        function n(r, e, t) {
                            for (var n = r[0].length, a = e; a <= t; a++) (r[a][0] = r[a - 1][1]), (r[a][n - 1] = r[a - 1][n - 2]);
                        }
                        function a(r) {
                            n(r, 7, 12), n(r, 2, 4), n(r, 15, 17);
                        }
                        function i(r, e, n, i, f, o, v, u, s, l, c, h, d) {
                            for (var w = 0, g = 1, _ = f < 13 && f > 4; g < r.m;)
                                w < r.m && (t(r, e, n, i, f, w, v[s], r.h && ((_ && l) || (!_ && (c || (w & h) == d)))), t(r, e, n, i, o, w, v[s], r.h && ((!_ && l) || (_ && (c || (w & h) == d)))), (w += 2)),
                                    w > 8 && (t(r, e, n, i, f, g, u[s]), t(r, e, n, i, o, g, u[s]), (g += 2));
                            a(i);
                        }
                        B._decompressRAF = function (e, t) {
                            var n = (function (r) {
                                var e = B._binBE.readUshort,
                                    t = { b: e(r, 0), i: r[2], C: r[3], u: r[4], q: e(r, 5), k: e(r, 7), e: e(r, 9), l: e(r, 11), s: r[13], d: e(r, 14) };
                                if (
                                    18771 != t.b ||
                                    t.i > 1 ||
                                    t.q < 6 ||
                                    t.q % 6 ||
                                    t.e < 768 ||
                                    t.e % 24 ||
                                    768 != t.l ||
                                    t.k < t.l ||
                                    t.k % t.l ||
                                    t.k - t.e >= t.l ||
                                    t.s > 16 ||
                                    t.s != t.k / t.l ||
                                    t.s != Math.ceil(t.e / t.l) ||
                                    t.d != t.q / 6 ||
                                    (12 != t.u && 14 != t.u && 16 != t.u) ||
                                    (16 != t.C && 0 != t.C)
                                )
                                    throw "Invalid data";
                                if (0 == t.i) throw "Not implemented. We need this file!";
                                return (t.h = 16 == t.C), (t.m = (t.h ? (2 * t.l) / 3 : t.l >>> 1) | 0), (t.A = t.m + 2), (t.f = 64), (t.g = (1 << t.u) - 1), (t.n = 4 * t.u), t;
                            })(e),
                                f = (function (r, e) {
                                    var t = Array(e.s),
                                        n = 4 * e.s,
                                        a = 16 + n;
                                    12 & n && (a += 16 - (12 & n));
                                    for (var i = 0, f = 16; i < e.s; f += 4) {
                                        var o = B._binBE.readUint(r, f);
                                        (t[i] = r.slice(a, a + o)), (t[i].j = 0), (t[i].a = 0), (a += o), i++;
                                    }
                                    if (a != r.length) throw "Invalid data";
                                    return t;
                                })(e, n),
                                o =
                                    ((d = h = { c: new Int8Array(2 << n.u) }),
                                        (w = [0, 18, 67, 276, n.g]),
                                        (d.o = 0),
                                        (d.w = ((w[4] + 0) / 1 + 1) | 0),
                                        (d.v = Math.ceil(Math.log2(d.w))),
                                        (d.t = 9),
                                        (function (r, e) {
                                            for (var t = -e[4], n = 0; t <= e[4]; n++, t++) r[n] = t <= -e[3] ? -4 : t <= -e[2] ? -3 : t <= -e[1] ? -2 : t < -e[0] ? -1 : t <= e[0] ? 0 : t < e[1] ? 1 : t < e[2] ? 2 : t < e[3] ? 3 : 4;
                                        })(d.c, w),
                                        h),
                                v = new Int16Array(n.e * n.q);
                            null == t &&
                                (t = n.h
                                    ? [
                                        [1, 1, 0, 1, 1, 2],
                                        [1, 1, 2, 1, 1, 0],
                                        [2, 0, 1, 0, 2, 1],
                                        [1, 1, 2, 1, 1, 0],
                                        [1, 1, 0, 1, 1, 2],
                                        [0, 2, 1, 2, 0, 1],
                                    ]
                                    : [
                                        [0, 1],
                                        [3, 2],
                                    ]);
                            for (
                                var u = [
                                    [0, 3],
                                    [1, 4],
                                    [5, 11],
                                    [6, 12],
                                    [13, 16],
                                    [14, 17],
                                ],
                                s = [],
                                l = 0;
                                l < 18;
                                l++
                            )
                                s[l] = new Uint16Array(n.A);
                            for (var c = 0; c < n.s; c++) {
                                for (var h, d, w, g, _ = r(o), b = r(o), l = 0; l < 18; l++) for (var p = 0; p < n.A; p++) s[l][p] = 0;
                                for (var m = 0; m < n.d; m++) {
                                    i(n, o, (g = f[c]), s, 2, 7, _, b, 0, 0, 1, 0, 8),
                                        i(n, o, g, s, 8, 15, _, b, 1, 0, 1, 0, 8),
                                        i(n, o, g, s, 3, 9, _, b, 2, 1, 0, 3, 0),
                                        i(n, o, g, s, 10, 16, _, b, 0, 0, 0, 3, 2),
                                        i(n, o, g, s, 4, 11, _, b, 1, 0, 0, 3, 2),
                                        i(n, o, g, s, 12, 17, _, b, 2, 1, 0, 3, 0);
                                    for (var l = 0; l < 6; l++) for (var p = 0; p < n.A; p++) s[u[l][0]][p] = s[u[l][1]][p];
                                    !(function (r, e, t, n, a, i) {
                                        var f = i.length,
                                            o = r.l;
                                        a + 1 == r.s && (o = r.e - a * r.l);
                                        for (var v = 6 * r.e * n + a * r.l, u = 0; u < 6; u++) {
                                            for (var s = 0; s < o; s++) {
                                                var l,
                                                    c = i[u % f][s % f];
                                                l = 0 == c ? 2 + (u >>> 1) : 2 == c ? 15 + (u >>> 1) : 7 + u;
                                                var h = r.h ? ((((2 * s) / 3) & 2147483646) | (s % 3 & 1)) + (s % 3 >>> 1) : s >>> 1;
                                                e[v + s] = t[l][h + 1];
                                            }
                                            v += r.e;
                                        }
                                    })(n, v, s, m, c, t);
                                    for (var l = 2; l < 18; l++) if (-1 == [5, 6, 13, 14].indexOf(l)) for (var p = 0; p < n.A; p++) s[l][p] = 0;
                                    a(s);
                                }
                            }
                            return v;
                        };
                    })();
            })();
        },
    },
]);



// (self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6173],{66173:function(r,e,t){var n=t(34155);!function(){var e,t,a,i,f,o,v,u,s,l,c,h,d,w,g,_,b,p,m,A,U,I,y,E,M,D,k,B={};function F(){void 0===n&&console.log.apply(console,arguments)}r.exports=B,function(){"use strict";var r=function(){function r(r){this.message="JPEG error: "+r}return r.prototype=Error(),r.prototype.name="JpegError",r.constructor=r,r}(),e=function(){var e=new Uint8Array([0,1,8,16,9,2,3,10,17,24,32,25,18,11,4,5,12,19,26,33,40,48,41,34,27,20,13,6,7,14,21,28,35,42,49,56,57,50,43,36,29,22,15,23,30,37,44,51,58,59,52,45,38,31,39,46,53,60,61,54,47,55,62,63]);function n(r){null==r&&(r={}),null==r.w&&(r.w=-1),this.V=r.n,this.N=r.w}function a(r,e,t){return 64*((r.P+1)*e+t)}function i(r,e,n){null==n&&(n=e);var a=r.length-1,i=n<e?n:e;if(e>=a)return null;var f=t(r,e);if(f>=65472&&f<=65534)return{u:null,M:f,offset:e};for(var o=t(r,i);!(o>=65472&&o<=65534);){if(++i>=a)return null;o=t(r,i)}return{u:f.toString(16),M:o,offset:i}}return n.prototype={parse(n,f){null==f&&(f={});var o,v,u=f.F,s=0,l=null,c=null,h=0,d=[],w=[],g=[],_=t(n,0);if(s+=2,65496!==_)throw new r("SOI not found");_=t(n,s),s+=2;r:for(;65497!==_;){switch(_){case 65504:case 65505:case 65506:case 65507:case 65508:case 65509:case 65510:case 65511:case 65512:case 65513:case 65514:case 65515:case 65516:case 65517:case 65518:case 65519:case 65534:var b=function(){var r=t(n,s),e=(s+=2)+r-2,a=i(n,e,s);a&&a.u&&(e=a.offset);var f=n.subarray(s,e);return s+=f.length,f}();65504===_&&74===b[0]&&70===b[1]&&73===b[2]&&70===b[3]&&0===b[4]&&(l={version:{d:b[5],T:b[6]},K:b[7],j:b[8]<<8|b[9],H:b[10]<<8|b[11],S:b[12],I:b[13],C:b.subarray(14,14+3*b[12]*b[13])}),65518===_&&65===b[0]&&100===b[1]&&111===b[2]&&98===b[3]&&101===b[4]&&(c={version:b[5]<<8|b[6],k:b[7]<<8|b[8],q:b[9]<<8|b[10],a:b[11]});break;case 65499:for(var p,m,A,U=t(n,s),I=U+(s+=2)-2;s<I;){var y=n[s++],E=new Uint16Array(64);if(y>>4==0)for(m=0;m<64;m++)E[e[m]]=n[s++];else if(y>>4==1)for(m=0;m<64;m++)E[e[m]]=t(n,s),s+=2;else throw new r("DQT - invalid table spec");d[15&y]=E}break;case 65472:case 65473:case 65474:if(o)throw new r("Only single frame JPEGs supported");s+=2,(o={}).G=65473===_,o.Z=65474===_,o.precision=n[s++];var M,D=t(n,s),k=0,B=0;s+=2,o.s=u||D,o.o=t(n,s),s+=2,o.W=[],o._={};var F=n[s++];for(p=0;p<F;p++){M=n[s];var x=n[s+1]>>4,P=15&n[s+1];k<x&&(k=x),B<P&&(B=P);var C=n[s+2];A=o.W.push({h:x,A:P,L:C,$:null}),o._[M]=A-1,s+=3}o.X=k,o.B=B,function(r){for(var e=Math.ceil(r.o/8/r.X),t=Math.ceil(r.s/8/r.B),n=0;n<r.W.length;n++){J=r.W[n];var a=Math.ceil(Math.ceil(r.o/8)*J.h/r.X),i=Math.ceil(Math.ceil(r.s/8)*J.A/r.B),f=e*J.h,o=t*J.A*64*(f+1);J.D=new Int16Array(o),J.P=a,J.c=i}r.m=e,r.R=t}(o);break;case 65476:var H=t(n,s);for(s+=2,p=2;p<H;){var L=n[s++],S=new Uint8Array(16),N=0;for(m=0;m<16;m++,s++)N+=S[m]=n[s];var G=new Uint8Array(N);for(m=0;m<N;m++,s++)G[m]=n[s];p+=17+N,(L>>4==0?g:w)[15&L]=function(r,e){for(var t,n,a,i=0,f=[],o=16;o>0&&!r[o-1];)o--;f.push({children:[],index:0});var v=f[0];for(t=0;t<o;t++){for(n=0;n<r[t];n++){for((v=f.pop()).children[v.index]=e[i];v.index>0;)v=f.pop();for(v.index++,f.push(v);f.length<=t;)f.push(a={children:[],index:0}),v.children[v.index]=a.children,v=a;i++}t+1<o&&(f.push(a={children:[],index:0}),v.children[v.index]=a.children,v=a)}return f[0].children}(S,G)}break;case 65501:s+=2,v=t(n,s),s+=2;break;case 65498:var J,O=1==++h&&!u;s+=2;var W=n[s++],j=[];for(p=0;p<W;p++){var T=n[s++],R=o._[T];(J=o.W[R]).index=T;var Q=n[s++];J.J=g[Q>>4],J.i=w[15&Q],j.push(J)}var q=n[s++],Z=n[s++],$=n[s++];try{var V=function(n,f,o,v,u,s,l,c,h,d){null==d&&(d=!1);var w,g,_,b,p,m,A,U,I,y,E,M=o.m,D=o.Z,k=f,B=0,F=0,x=0,P=0,C=0,H=0;function L(){if(F>0)return F--,B>>F&1;if(255===(B=n[f++])){var e=n[f++];if(e){if(220===e&&d){var a=t(n,f+=2);if(f+=2,a>0&&a!==o.s)throw new DNLMarkerError("Found DNL marker (0xFFDC) while parsing scan data",a)}else if(217===e){if(d){var i=8*C;if(i>0&&i<o.s/10)throw new DNLMarkerError("Found EOI marker (0xFFD9) while parsing scan data, possibly caused by incorrect `scanLines` parameter",i)}throw new EOIMarkerError("Found EOI marker (0xFFD9) while parsing scan data")}throw new r("unexpected marker")}}return F=7,B>>>7}function S(e){for(var t=e;;){switch(typeof(t=t[L()])){case"number":return t;case"object":continue}throw new r("invalid huffman sequence")}}function N(r){for(var e=0;r>0;)e=e<<1|L(),r--;return e}function G(r){if(1===r)return 1===L()?1:-1;var e=N(r);return e>=1<<r-1?e:e+(-1<<r)+1}var J=v.length;for(A=D?0===s?0===c?function(r,e){var t=S(r.J),n=0===t?0:G(t)<<h;r.D[e]=r.Q+=n}:function(r,e){r.D[e]|=L()<<h}:0===c?function(r,t){if(x>0){x--;return}for(var n=s;n<=l;){var a=S(r.i),i=15&a,f=a>>4;if(0===i){if(f<15){x=N(f)+(1<<f)-1;break}n+=16;continue}var o=e[n+=f];r.D[t+o]=G(i)*(1<<h),n++}}:function(t,n){for(var a,i,f=s,o=0;f<=l;){var v=n+e[f],u=t.D[v]<0?-1:1;switch(P){case 0:if(a=15&(i=S(t.i)),o=i>>4,0===a)o<15?(x=N(o)+(1<<o),P=4):(o=16,P=1);else{if(1!==a)throw new r("invalid ACn encoding");w=G(a),P=o?2:3}continue;case 1:case 2:t.D[v]?t.D[v]+=u*(L()<<h):0==--o&&(P=2===P?3:0);break;case 3:t.D[v]?t.D[v]+=u*(L()<<h):(t.D[v]=w<<h,P=0);break;case 4:t.D[v]&&(t.D[v]+=u*(L()<<h))}f++}4===P&&0==--x&&(P=0)}:function(r,t){var n=S(r.J),a=0===n?0:G(n),i=1;for(r.D[t]=r.Q+=a;i<64;){var f=S(r.i),o=15&f,v=f>>4;if(0===o){if(v<15)break;i+=16;continue}var u=e[i+=v];r.D[t+u]=G(o),i++}},I=1===J?v[0].P*v[0].c:M*o.R;H<=I;){var O=u?Math.min(I-H,u):I;if(O>0){for(_=0;_<J;_++)v[_].Q=0;if(x=0,1===J)for(m=0,g=v[0];m<O;m++)(function(r,e,t){C=t/r.P|0;var n=t%r.P,i=a(r,C,n);e(r,i)})(g,A,H),H++;else for(m=0;m<O;m++){for(_=0;_<J;_++)for(b=0,y=(g=v[_]).h,E=g.A;b<E;b++)for(p=0;p<y;p++)!function(r,e,t,n,i){C=(t/M|0)*r.A+n;var f=t%M*r.h+i,o=a(r,C,f);e(r,o)}(g,A,H,b,p);H++}}if(F=0,!(U=i(n,f)))break;if(U.u&&(f=U.offset),U.M>=65488&&U.M<=65495)f+=2;else break}return f-k}(n,s,o,j,v,q,Z,$>>4,15&$,O);s+=V}catch(r){if(r instanceof DNLMarkerError)return this.parse(n,{F:r.s});if(r instanceof EOIMarkerError)break r;throw r}break;case 65500:s+=4;break;case 65535:255!==n[s]&&s--;break;default:var X=i(n,s-2,s-3);if(X&&X.u){s=X.offset;break}if(s>=n.length-1)break r;throw new r("JpegImage.parse - unknown marker: "+_.toString(16))}_=t(n,s),s+=2}for(p=0,this.width=o.o,this.height=o.s,this.g=l,this.b=c,this.W=[];p<o.W.length;p++){var z=d[(J=o.W[p]).L];z&&(J.$=z),this.W.push({index:J.index,e:function(e,t){for(var n=t.P,i=t.c,f=new Int16Array(64),o=0;o<i;o++)for(var v=0;v<n;v++){var u=a(t,o,v);!function(e,t,n){var a,i,f,o,v,u,s,l,c,h,d,w,g,_,b,p,m,A=e.$,U=e.D;if(!A)throw new r("missing required Quantization Table.");for(var I=0;I<64;I+=8){if(c=U[t+I],h=U[t+I+1],d=U[t+I+2],w=U[t+I+3],g=U[t+I+4],_=U[t+I+5],b=U[t+I+6],p=U[t+I+7],c*=A[I],(h|d|w|g|_|b|p)==0){m=5793*c+512>>10,n[I]=m,n[I+1]=m,n[I+2]=m,n[I+3]=m,n[I+4]=m,n[I+5]=m,n[I+6]=m,n[I+7]=m;continue}h*=A[I+1],d*=A[I+2],w*=A[I+3],g*=A[I+4],_*=A[I+5],b*=A[I+6],p*=A[I+7],a=5793*c+128>>8,i=5793*g+128>>8,f=d,o=b,v=2896*(h-p)+128>>8,l=2896*(h+p)+128>>8,u=w<<4,s=_<<4,i=(a=a+i+1>>1)-i,m=3784*f+1567*o+128>>8,f=1567*f-3784*o+128>>8,o=m,s=(v=v+s+1>>1)-s,u=(l=l+u+1>>1)-u,o=(a=a+o+1>>1)-o,f=(i=i+f+1>>1)-f,m=2276*v+3406*l+2048>>12,v=3406*v-2276*l+2048>>12,l=m,m=799*u+4017*s+2048>>12,u=4017*u-799*s+2048>>12,s=m,n[I]=a+l,n[I+7]=a-l,n[I+1]=i+s,n[I+6]=i-s,n[I+2]=f+u,n[I+5]=f-u,n[I+3]=o+v,n[I+4]=o-v}for(var y=0;y<8;++y){if(c=n[y],h=n[y+8],d=n[y+16],w=n[y+24],g=n[y+32],(h|d|w|g|(_=n[y+40])|(b=n[y+48])|(p=n[y+56]))==0){m=(m=5793*c+8192>>14)<-2040?0:m>=2024?255:m+2056>>4,U[t+y]=m,U[t+y+8]=m,U[t+y+16]=m,U[t+y+24]=m,U[t+y+32]=m,U[t+y+40]=m,U[t+y+48]=m,U[t+y+56]=m;continue}a=5793*c+2048>>12,i=5793*g+2048>>12,f=d,o=b,v=2896*(h-p)+2048>>12,l=2896*(h+p)+2048>>12,u=w,s=_,i=(a=(a+i+1>>1)+4112)-i,m=3784*f+1567*o+2048>>12,f=1567*f-3784*o+2048>>12,o=m,s=(v=v+s+1>>1)-s,u=(l=l+u+1>>1)-u,o=(a=a+o+1>>1)-o,f=(i=i+f+1>>1)-f,m=2276*v+3406*l+2048>>12,v=3406*v-2276*l+2048>>12,l=m,m=799*u+4017*s+2048>>12,u=4017*u-799*s+2048>>12,s=m,c=a+l,p=a-l,h=i+s,b=i-s,d=f+u,_=f-u,c<16?c=0:c>=4080?c=255:c>>=4,h<16?h=0:h>=4080?h=255:h>>=4,d<16?d=0:d>=4080?d=255:d>>=4,(w=o+v)<16?w=0:w>=4080?w=255:w>>=4,(g=o-v)<16?g=0:g>=4080?g=255:g>>=4,_<16?_=0:_>=4080?_=255:_>>=4,b<16?b=0:b>=4080?b=255:b>>=4,p<16?p=0:p>=4080?p=255:p>>=4,U[t+y]=c,U[t+y+8]=h,U[t+y+16]=d,U[t+y+24]=w,U[t+y+32]=g,U[t+y+40]=_,U[t+y+48]=b,U[t+y+56]=p}}(t,u,f)}return t.D}(0,J),l:J.h/o.X,t:J.A/o.B,P:J.P,c:J.c})}this.p=this.W.length},Y(r,e,t){null==t&&(t=!1);var n,a,i,f,o,v,u,s,l,c,h,d,w=this.width/r,g=this.height/e,_=0,b=this.W.length,p=r*e*b,m=new Uint8ClampedArray(p),A=new Uint32Array(r);for(u=0;u<b;u++){if(a=(n=this.W[u]).l*w,i=n.t*g,_=u,h=n.e,f=n.P+1<<3,a!==d){for(o=0;o<r;o++)s=0|o*a,A[o]=(4294967288&s)<<3|7&s;d=a}for(v=0;v<e;v++)for(o=0,c=f*(4294967288&(s=0|v*i))|(7&s)<<3;o<r;o++)m[_]=h[c+A[o]],_+=b}var U=this.V;if(t||4!==b||U||(U=new Int32Array([-256,255,-256,255,-256,255,-256,255])),U)for(u=0;u<p;)for(s=0,l=0;s<b;s++,u++,l+=2)m[u]=(m[u]*U[l]>>8)+U[l+1];return m},get f(){if(this.b)return!!this.b.a;if(3===this.p){if(0===this.N||82===this.W[0].index&&71===this.W[1].index&&66===this.W[2].index)return!1;return!0}if(1===this.N)return!0;return!1},z:function(r){for(var e,t,n,a=0,i=r.length;a<i;a+=3)e=r[a],t=r[a+1],n=r[a+2],r[a]=e-179.456+1.402*n,r[a+1]=e+135.459-.344*t-.714*n,r[a+2]=e-226.816+1.772*t;return r},O:function(r){for(var e,t,n,a,i=0,f=0,o=r.length;f<o;f+=4)e=r[f],t=r[f+1],n=r[f+2],a=r[f+3],r[i++]=-122.67195406894+t*(-.0000660635669420364*t+437130475926232e-18*n-54080610064599e-18*e+48449797120281e-17*a-.154362151871126)+n*(-.000957964378445773*n+817076911346625e-18*e-.00477271405408747*a+1.53380253221734)+e*(961250184130688e-18*e-.00266257332283933*a+.48357088451265)+a*(-.000336197177618394*a+.484791561490776),r[i++]=107.268039397724+t*(219927104525741e-19*t-640992018297945e-18*n+659397001245577e-18*e+426105652938837e-18*a-.176491792462875)+n*(-.000778269941513683*n+.00130872261408275*e+770482631801132e-18*a-.151051492775562)+e*(.00126935368114843*e-.00265090189010898*a+.25802910206845)+a*(-.000318913117588328*a-.213742400323665),r[i++]=-20.810012546947+t*(-.000570115196973677*t-263409051004589e-19*n+.0020741088115012*e-.00288260236853442*a+.814272968359295)+n*(-.0000153496057440975*n-132689043961446e-18*e+560833691242812e-18*a-.195152027534049)+e*(.00174418132927582*e-.00255243321439347*a+.116935020465145)+a*(-.000343531996510555*a+.24165260232407);return r.subarray(0,i)},r:function(r){for(var e,t,n,a=0,i=r.length;a<i;a+=4)e=r[a],t=r[a+1],n=r[a+2],r[a]=434.456-e-1.402*n,r[a+1]=119.541-e+.344*t+.714*n,r[a+2]=481.816-e-1.772*t;return r},U:function(r){for(var e,t,n,a,i=0,f=0,o=r.length;f<o;f+=4)e=r[f],t=r[f+1],n=r[f+2],a=r[f+3],r[i++]=255+e*(-.00006747147073602441*e+8379262121013727e-19*t+2894718188643294e-19*n+.003264231057537806*a-1.1185611867203937)+t*(26374107616089405e-21*t-8626949158638572e-20*n-2748769067499491e-19*a-.02155688794978967)+n*(-.00003878099212869363*n-3267808279485286e-19*a+.0686742238595345)-a*(3361971776183937e-19*a+.7430659151342254),r[i++]=255+e*(13596372813588848e-20*e+924537132573585e-18*t+10567359618683593e-20*n+4791864687436512e-19*a-.3109689587515875)+t*(-.00023545346108370344*t+2702845253534714e-19*n+.0020200308977307156*a-.7488052167015494)+n*(6834815998235662e-20*n+15168452363460973e-20*a-.09751927774728933)-a*(3189131175883281e-19*a+.7364883807733168),r[i++]=255+e*(13598650411385307e-21*e+12423956175490851e-20*t+4751985097583589e-19*n-36729317476630422e-22*a-.05562186980264034)+t*(16141380598724676e-20*t+9692239130725186e-19*n+7782692450036253e-19*a-.44015232367526463)+n*(5068882914068769e-22*n+.0017778369011375071*a-.7591454649749609)-a*(3435319965105553e-19*a+.7063770186160144);return r.subarray(0,i)},getData:function(e){var t=e.width,n=e.height,a=e.forceRGB,i=e.isSourcePDF;if(this.p>4)throw new r("Unsupported color mode");var f=this.Y(t,n,i);if(1===this.p&&a){for(var o=f.length,v=new Uint8ClampedArray(3*o),u=0,s=0;s<o;s++){var l=f[s];v[u++]=l,v[u++]=l,v[u++]=l}return v}if(3===this.p&&this.f)return this.z(f);if(4===this.p){if(this.f)return a?this.O(f):this.r(f);if(a)return this.U(f)}return f}},n}();function t(r,e){return r[e]<<8|r[e+1]}B.JpegDecoder=e}(),B.encodeImage=function(r,e,t,n){var a={t256:[e],t257:[t],t258:[8,8,8,8],t259:[1],t262:[2],t273:[1e3],t277:[4],t278:[t],t279:[e*t*4],t282:[[72,1]],t283:[[72,1]],t284:[1],t286:[[0,1]],t287:[[0,1]],t296:[1],t305:["Photopea (UTIF.js)"],t338:[1]};if(n)for(var i in n)a[i]=n[i];for(var f=new Uint8Array(B.encode([a])),o=new Uint8Array(r),v=new Uint8Array(1e3+e*t*4),i=0;i<f.length;i++)v[i]=f[i];for(var i=0;i<o.length;i++)v[1e3+i]=o[i];return v.buffer},B.encode=function(r){var e=new Uint8Array(2e4),t=4,n=B._binBE;e[0]=e[1]=77,n.writeUshort(e,2,42);var a=8;n.writeUint(e,t,a),t+=4;for(var i=0;i<r.length;i++){var f=B._writeIFD(n,B._types.basic,e,a,r[i]);a=f[1],i<r.length-1&&((3&a)!=0&&(a+=4-(3&a)),n.writeUint(e,f[0],a))}return e.slice(0,a).buffer},B.decode=function(r,e){null==e&&(e={parseMN:!0,debug:!1});var t=new Uint8Array(r),n=0,a=B._binBE.readASCII(t,n,2);n+=2;var i="II"==a?B._binLE:B._binBE;i.readUshort(t,n),n+=2;var f=i.readUint(t,n);n+=4;for(var o=[];;){var v=i.readUshort(t,f),u=i.readUshort(t,f+4);if(0!=v&&(u<1||13<u)){F("error in TIFF");break}if(B._readIFD(i,t,f,o,0,e),0==(f=i.readUint(t,f+2+12*v)))break}return o},B.decodeImage=function(r,e,t){if(!e.data){var n=new Uint8Array(r),a=B._binBE.readASCII(n,0,2);if(null!=e.t256){e.isLE="II"==a,e.width=e.t256[0],e.height=e.t257[0];var i=e.t259?e.t259[0]:1,f=e.t266?e.t266[0]:1;7==i&&e.t258&&e.t258.length>3&&(e.t258=e.t258.slice(0,3));var o=e.t258?e.t258[0]:1,v=e.t277?e.t277[0]:1,u=e.t284?e.t284[0]:1;3!=v&&(u=1),2==u&&F("PlanarConfiguration 2 should not be used!");var s=o*v;1==i&&null!=e.t279&&e.t278&&32803==e.t262[0]&&(s=Math.round(8*e.t279[0]/(e.width*e.t278[0]))),e.t50885&&4==e.t50885[0]&&(s=3*e.t258[0]);var l=8*Math.ceil(e.width*s/8),c=e.t273;(null==c||e.t322)&&(c=e.t324);var h=e.t279;1==i&&1==c.length&&(h=[e.height*(l>>>3)]),(null==h||e.t322)&&(h=e.t325);var d=new Uint8Array(e.height*(l>>>3)),w=0;if(null!=e.t322){var g=e.t322[0],_=e.t323[0],b=Math.floor((e.width+g-1)/g),p=Math.floor((e.height+_-1)/_),m=new Uint8Array(0|Math.ceil(g*_*s/8));console.log("====",b,p);for(var A=0;A<p;A++)for(var U=0;U<b;U++){var I=A*b+U;m.fill(0),B.decode._decompress(e,t,n,c[I],h[I],i,m,0,f,g,_),6==i?d=m:B._copyTile(m,0|Math.ceil(g*s/8),_,d,0|Math.ceil(e.width*s/8),e.height,0|Math.ceil(U*g*s/8),A*_)}w=8*d.length}else{if(null==c)return;var y=e.t278?e.t278[0]:e.height;y=Math.min(y,e.height);for(var I=0;I<c.length;I++){if(1==u){var E=0|Math.ceil(w/8);B.decode._decompress(e,t,n,c[I],h[I],i,d,E,f,e.width,y)}else{var M=new Uint8Array(e.width*y);B.decode._decompress(e,t,n,c[I],h[I],i,M,0,f,e.width,y);for(var D=Math.ceil(c.length/3),E=I%D*e.width*y*3,k=Math.floor(I/D),x=0;x<M.length;x++)d[E+3*x+k]=M[x]}w+=l*y}w=Math.min(w,8*d.length)}e.data=new Uint8Array(d.buffer,0,0|Math.ceil(w/8))}}},B.decode._decompress=function(r,e,t,n,a,i,f,o,v,u,s){if(r.t271&&"Panasonic"==r.t271[0]&&(r.t45&&6==r.t45[0]?i=34316:34828==i&&(i=1)),1==i)for(var l=0;l<a;l++)f[o+l]=t[n+l];else if(2==i)B.decode._decodeG2(t,n,a,f,o,u,v);else if(3==i)B.decode._decodeG3(t,n,a,f,o,u,v,!!r.t292&&(1&r.t292[0])==1);else if(4==i)B.decode._decodeG4(t,n,a,f,o,u,v);else if(5==i)B.decode._decodeLZW(t,n,a,f,o,8);else if(6==i)B.decode._decodeOldJPEG(r,t,n,a,f,o);else if(7==i||34892==i)B.decode._decodeNewJPEG(r,t,n,a,f,o);else if(8==i||32946==i){var c=new Uint8Array(t.buffer,n+2,a-6),h=B._inflateRaw(c);o+h.length<=f.length&&f.set(h,o)}else 9==i?B.decode._decodeVC5(t,n,a,f,o,r.t33422):32767==i?B.decode._decodeARW(r,t,n,a,f,o):32773==i?B.decode._decodePackBits(t,n,a,f,o):32809==i?B.decode._decodeThunder(t,n,a,f,o):34316==i?B.decode._decodePanasonic(r,t,n,a,f,o):34713==i?B.decode._decodeNikon(r,e,t,n,a,f,o):34676==i?B.decode._decodeLogLuv32(r,t,n,a,f,o):F("Unknown compression",i);var d=r.t284?r.t284[0]:1,w=r.t258?Math.min(32,r.t258[0]):1,g=2==d?1:r.t277?r.t277[0]:1,_=w*g>>>3,b=Math.ceil(w*g*u/8);if(16==w&&!r.isLE&&null==r.t33422)for(var p=0;p<s;p++)for(var m=o+p*b,A=1;A<b;A+=2){var U=f[m+A];f[m+A]=f[m+A-1],f[m+A-1]=U}if(r.t317&&2==r.t317[0])for(var p=0;p<s;p++){var I=o+p*b;if(16==w)for(var l=_;l<b;l+=2){var y=(f[I+l+1]<<8|f[I+l])+(f[I+l-_+1]<<8|f[I+l-_]);f[I+l]=255&y,f[I+l+1]=y>>>8&255}else if(3==g)for(var l=3;l<b;l+=3)f[I+l]=f[I+l]+f[I+l-3]&255,f[I+l+1]=f[I+l+1]+f[I+l-2]&255,f[I+l+2]=f[I+l+2]+f[I+l-1]&255;else for(var l=_;l<b;l++)f[I+l]=f[I+l]+f[I+l-_]&255}},B.decode._decodePanasonic=function(r,e,t,n,a,i){var f,o,v,u,s,l,c,h,d=e.buffer,w=r.t2[0],g=r.t3[0],_=r.t10[0],b=r.t45[0],p=0,m=0,A=0,U=0,I=6==b?new Uint32Array(18):new Uint8Array(16),y=[0,0],E=[0,0],M=0,D=new Uint8Array(16384),k=new Uint16Array(a.buffer);function B(r){if(0==A){var e=new Uint8Array(d,t+m+8184,8200),n=new Uint8Array(d,t+m,8184);D.set(e),D.set(n,e.length),m+=16384}if(5!=b)return(D[U=(A=A-r&131071)>>3^16368]|D[U+1]<<8)>>(7&A)&~(-1<<r);for(u=0;u<16;u++)I[u]=D[A++],A&=16383}function F(r){return D[A+15-r]}function x(){y[0]=0,y[1]=0,E[0]=0,E[1]=0}if(7==b)throw b;if(6==b){var P=12==_,C=P?function(){I[0]=F(0)<<4|F(1)>>4,I[1]=((15&F(1))<<8|F(2))&4095,I[2]=F(3)>>6&3,I[3]=(63&F(3))<<2|F(4)>>6,I[4]=(63&F(4))<<2|F(5)>>6,I[5]=(63&F(5))<<2|F(6)>>6,I[6]=F(6)>>4&3,I[7]=(15&F(6))<<4|F(7)>>4,I[8]=(15&F(7))<<4|F(8)>>4,I[9]=(15&F(8))<<4|F(9)>>4,I[10]=F(9)>>2&3,I[11]=(3&F(9))<<6|F(10)>>2,I[12]=(3&F(10))<<6|F(11)>>2,I[13]=(3&F(11))<<6|F(12)>>2,I[14]=3&F(12),I[15]=F(13),I[16]=F(14),I[17]=F(15),A+=16,U=0}:function(){I[0]=F(0)<<6|F(1)>>2,I[1]=((3&F(1))<<12|F(2)<<4|F(3)>>4)&16383,I[2]=F(3)>>2&3,I[3]=(3&F(3))<<8|F(4),I[4]=F(5)<<2|F(6)>>6,I[5]=(63&F(6))<<4|F(7)>>4,I[6]=F(7)>>2&3,I[7]=(3&F(7))<<8|F(8),I[8]=F(9)<<2&1020|F(10)>>6,I[9]=(F(10)<<4|F(11)>>4)&1023,I[10]=F(11)>>2&3,I[11]=(3&F(11))<<8|F(12),I[12]=(F(13)<<2&1020|F(14)>>6)&1023,I[13]=(F(14)<<4|F(15)>>4)&1023,A+=16,U=0},H=P?14:11,L=P?128:512,S=P?2048:8192,N=P?16383:65535,G=P?4095:16383,J=w/H,O=16*J,W=P?18:14;for(f=0;f<g-15;f+=16){var j=Math.min(16,g-f),T=O*j;for(D=new Uint8Array(d,t+p,T),A=0,p+=T,v=0,o=0;v<j;v++,o=0){M=(f+v)*w;for(var R=0;R<J;R++)for(C(),x(),l=0,h=0,u=0;u<H;u++){if(c=1&u,u%3==2){var Q=U<W?I[U++]:0;3==Q&&(Q=4),h=L<<Q,l=1<<Q}var q=U<W?I[U++]:0;y[c]?(q*=l,h<S&&E[c]>h&&(q+=E[c]-h),E[c]=q):(y[c]=q,q?E[c]=q:q=E[c]),k[M+o++]=q-15<=N?q-15&N:q+2147483633>>31&G}}}}else if(5==b){var Z=12==_?10:9;for(f=0;f<g;f++)for(o=0;o<w;o+=Z)B(0),12==_?(k[M++]=((15&I[1])<<8)+I[0],k[M++]=16*I[2]+(I[1]>>4),k[M++]=((15&I[4])<<8)+I[3],k[M++]=16*I[5]+(I[4]>>4),k[M++]=((15&I[7])<<8)+I[6],k[M++]=16*I[8]+(I[7]>>4),k[M++]=((15&I[10])<<8)+I[9],k[M++]=16*I[11]+(I[10]>>4),k[M++]=((15&I[13])<<8)+I[12],k[M++]=16*I[14]+(I[13]>>4)):14==_&&(k[M++]=I[0]+((63&I[1])<<8),k[M++]=(I[1]>>6)+4*I[2]+((15&I[3])<<10),k[M++]=(I[3]>>4)+16*I[4]+((3&I[5])<<12),k[M++]=((252&I[5])>>2)+(I[6]<<6),k[M++]=I[7]+((63&I[8])<<8),k[M++]=(I[8]>>6)+4*I[9]+((15&I[10])<<10),k[M++]=(I[10]>>4)+16*I[11]+((3&I[12])<<12),k[M++]=((252&I[12])>>2)+(I[13]<<6),k[M++]=I[14]+((63&I[15])<<8))}else if(4==b)for(f=0;f<g;f++)for(o=0;o<w;o++)c=1&(u=o%14),0==u&&x(),u%3==2&&(l=4>>3-B(2)),E[c]?0!=(s=B(8))&&(y[c]-=128<<l,(y[c]<0||4==l)&&(y[c]&=~(-1<<l)),y[c]+=s<<l):(E[c]=B(8),(E[c]||u>11)&&(y[c]=E[c]<<4|B(4))),k[M++]=y[1&o];else throw b},B.decode._decodeVC5=function(){var r,e,t,n=[1,0,1,0,2,2,1,1,3,7,1,2,5,25,1,3,6,48,1,4,6,54,1,5,7,111,1,8,7,99,1,6,7,105,12,0,7,107,1,7,8,209,20,0,8,212,1,9,8,220,1,10,9,393,1,11,9,394,32,0,9,416,1,12,9,427,1,13,10,887,1,18,10,784,1,14,10,790,1,15,10,835,60,0,10,852,1,16,10,885,1,17,11,1571,1,19,11,1668,1,20,11,1669,100,0,11,1707,1,21,11,1772,1,22,12,3547,1,29,12,3164,1,24,12,3166,1,25,12,3140,1,23,12,3413,1,26,12,3537,1,27,12,3539,1,28,13,7093,1,35,13,6283,1,30,13,6331,1,31,13,6335,180,0,13,6824,1,32,13,7072,1,33,13,7077,320,0,13,7076,1,34,14,12565,1,36,14,12661,1,37,14,12669,1,38,14,13651,1,39,14,14184,1,40,15,28295,1,46,15,28371,1,47,15,25320,1,42,15,25336,1,43,15,25128,1,41,15,27300,1,44,15,28293,1,45,16,50259,1,48,16,50643,1,49,16,50675,1,50,16,56740,1,53,16,56584,1,51,16,56588,1,52,17,113483,1,61,17,113482,1,60,17,101285,1,55,17,101349,1,56,17,109205,1,57,17,109207,1,58,17,100516,1,54,17,113171,1,59,18,202568,1,62,18,202696,1,63,18,218408,1,64,18,218412,1,65,18,226340,1,66,18,226356,1,67,18,226358,1,68,19,402068,1,69,19,405138,1,70,19,405394,1,71,19,436818,1,72,19,436826,1,73,19,452714,1,75,19,452718,1,76,19,452682,1,74,20,804138,1,77,20,810279,1,78,20,810790,1,79,20,873638,1,80,20,873654,1,81,20,905366,1,82,20,905430,1,83,20,905438,1,84,21,1608278,1,85,21,1620557,1,86,21,1621582,1,87,21,1621583,1,88,21,1747310,1,89,21,1810734,1,90,21,1810735,1,91,21,1810863,1,92,21,1810879,1,93,22,3621725,1,99,22,3621757,1,100,22,3241112,1,94,22,3494556,1,95,22,3494557,1,96,22,3494622,1,97,22,3494623,1,98,23,6482227,1,102,23,6433117,1,101,23,6989117,1,103,23,6989119,1,105,23,6989118,1,104,23,7243449,1,106,23,7243512,1,107,24,13978233,1,111,24,12964453,1,109,24,12866232,1,108,24,14486897,1,113,24,13978232,1,110,24,14486896,1,112,24,14487026,1,114,24,14487027,1,115,25,25732598,1,225,25,25732597,1,189,25,25732596,1,188,25,25732595,1,203,25,25732594,1,202,25,25732593,1,197,25,25732592,1,207,25,25732591,1,169,25,25732590,1,223,25,25732589,1,159,25,25732522,1,235,25,25732579,1,152,25,25732575,1,192,25,25732489,1,179,25,25732573,1,201,25,25732472,1,172,25,25732576,1,149,25,25732488,1,178,25,25732566,1,120,25,25732571,1,219,25,25732577,1,150,25,25732487,1,127,25,25732506,1,211,25,25732548,1,125,25,25732588,1,158,25,25732486,1,247,25,25732467,1,238,25,25732508,1,163,25,25732552,1,228,25,25732603,1,183,25,25732513,1,217,25,25732587,1,168,25,25732520,1,122,25,25732484,1,128,25,25732562,1,249,25,25732505,1,187,25,25732504,1,186,25,25732483,1,136,25,25928905,1,181,25,25732560,1,255,25,25732500,1,230,25,25732482,1,135,25,25732555,1,233,25,25732568,1,222,25,25732583,1,145,25,25732481,1,134,25,25732586,1,167,25,25732521,1,248,25,25732518,1,209,25,25732480,1,243,25,25732512,1,216,25,25732509,1,164,25,25732547,1,140,25,25732479,1,157,25,25732544,1,239,25,25732574,1,191,25,25732564,1,251,25,25732478,1,156,25,25732546,1,139,25,25732498,1,242,25,25732557,1,133,25,25732477,1,162,25,25732515,1,213,25,25732584,1,165,25,25732514,1,212,25,25732476,1,227,25,25732494,1,198,25,25732531,1,236,25,25732530,1,234,25,25732529,1,117,25,25732528,1,215,25,25732527,1,124,25,25732526,1,123,25,25732525,1,254,25,25732524,1,253,25,25732523,1,148,25,25732570,1,218,25,25732580,1,146,25,25732581,1,147,25,25732569,1,224,25,25732533,1,143,25,25732540,1,184,25,25732541,1,185,25,25732585,1,166,25,25732556,1,132,25,25732485,1,129,25,25732563,1,250,25,25732578,1,151,25,25732501,1,119,25,25732502,1,193,25,25732536,1,176,25,25732496,1,245,25,25732553,1,229,25,25732516,1,206,25,25732582,1,144,25,25732517,1,208,25,25732558,1,137,25,25732543,1,241,25,25732466,1,237,25,25732507,1,190,25,25732542,1,240,25,25732551,1,131,25,25732554,1,232,25,25732565,1,252,25,25732475,1,171,25,25732493,1,205,25,25732492,1,204,25,25732491,1,118,25,25732490,1,214,25,25928904,1,180,25,25732549,1,126,25,25732602,1,182,25,25732539,1,175,25,25732545,1,141,25,25732559,1,138,25,25732537,1,177,25,25732534,1,153,25,25732503,1,194,25,25732606,1,160,25,25732567,1,121,25,25732538,1,174,25,25732497,1,246,25,25732550,1,130,25,25732572,1,200,25,25732474,1,170,25,25732511,1,221,25,25732601,1,196,25,25732532,1,142,25,25732519,1,210,25,25732495,1,199,25,25732605,1,155,25,25732535,1,154,25,25732499,1,244,25,25732510,1,220,25,25732600,1,195,25,25732607,1,161,25,25732604,1,231,25,25732473,1,173,25,25732599,1,226,26,51465122,1,116,26,51465123,0,1],a=[3,3,3,3,2,2,2,1,1,1];function i(r){var e=r[1],t=r[0][e>>>3]>>>7-(7&e)&1;return r[1]++,t}function f(r,e){for(var t=0;t<e;t++)(1&r)==1&&r++,r>>>=1;return r}function o(r,e,t,n,a,i){e[t]=(11*r[a]-4*r[a+i]+r[a+i+i]+4>>3)+r[n]>>1,e[t+i]=(5*r[a]+4*r[a+i]-r[a+i+i]+4>>3)-r[n]>>1}function v(r,e,t,n,a,i){var f=r[a-i]-r[a+i],o=r[a],v=r[n];e[t]=(f+4>>3)+o+v>>1,e[t+i]=(-f+4>>3)+o-v>>1}function u(r,e,t,n,a,i){e[t]=(5*r[a]+4*r[a-i]-r[a-i-i]+4>>3)+r[n]>>1,e[t+i]=(11*r[a]-4*r[a-i]+r[a-i-i]+4>>3)-r[n]>>1}function s(r){return r=t[r=r<0?0:r>4095?4095:r]>>>2}return function(l,c,h,d,w,g){d=new Uint16Array(d.buffer);var _,b,p,m,A,U,I,y,E,M,D=Date.now(),k=B._binBE,F=c+h;c+=4;for(var x=1==g[0];c<F;){var P=k.readShort(l,c),C=k.readUshort(l,c+2);if(c+=4,12==P)_=C;else if(20==P)b=C;else if(21==P)p=C;else if(48==P)m=C;else if(53==P)A=C;else if(35==P);else if(62==P)U=C;else if(101==P);else if(109==P)I=C;else if(84==P);else if(106==P);else if(107==P);else if(108==P);else if(102==P);else if(104==P)y=C;else if(105==P);else{var H=P<0?-P:P,L=65280&H,S=0;if(24576&H&&(S=8192&H?(65535&C)+((255&H)<<16):65535&C),(24576&H)==24576){if(null==E){E=[];for(var N=0;N<4;N++)E[N]=new Int16Array((b>>>1)*(p>>>1));M=new Int16Array((b>>>1)*(p>>>1)),e=new Int16Array(1024);for(var N=0;N<1024;N++){var G=N-512,J=Math.abs(G),_=Math.floor(768*J*J*J/16581375)+J;e[N]=Math.sign(G)*_}t=new Uint16Array(4096);for(var N=0;N<4096;N++){var O=65535*(Math.pow(113,N/4095)-1)/112;t[N]=Math.min(O,65535)}}var W=E[U],j=f(b,1+a[m]),T=f(p,1+a[m]);if(0==m)for(var R=0;R<T;R++)for(var Q=0;Q<j;Q++){var q=c+(R*j+Q)*2;W[R*(b>>>1)+Q]=l[q]<<8|l[q+1]}else{for(var Z=[l,8*c],$=[],V=0,X=j*T,z=[0,0],Y=0,C=0;V<X;)for(function(e,t){if(null==r){r={};for(var a=0;a<n.length;a+=4)r[n[a+1]]=n.slice(a,a+4)}for(var f=i(e),o=r[f];null==o;)o=r[f=f<<1|i(e)];var v=o[3];0!=v&&(v=0==i(e)?v:-v),t[0]=o[2],t[1]=v}(Z,z),Y=z[0],C=z[1];Y>0;)$[V++]=C,Y--;for(var K=(m-1)%3,rr=1!=K?j:0,re=0!=K?T:0,R=0;R<T;R++)for(var rt=(R+re)*(b>>>1)+rr,rn=R*j,Q=0;Q<j;Q++)W[rt+Q]=e[$[rn+Q]+512]*A;if(2==K){for(var y=b>>>1,ra=2*j,ri=2*T,R=0;R<T;R++)for(var Q=0;Q<ra;Q++){var N=2*R*y+Q,rf=R*y+Q,ro=T*y+rf;0==R?o(W,M,N,ro,rf,y):R==T-1?u(W,M,N,ro,rf,y):v(W,M,N,ro,rf,y)}var rv=W;W=M,M=rv;for(var R=0;R<ri;R++)for(var Q=0;Q<j;Q++){var N=R*y+2*Q,rf=R*y+Q,ro=j+rf;0==Q?o(W,M,N,ro,rf,1):Q==j-1?u(W,M,N,ro,rf,1):v(W,M,N,ro,rf,1)}var rv=W;W=M,M=rv;for(var ru=[],rs=2-~~((m-1)/3),rl=0;rl<3;rl++)ru[rl]=I>>14-2*rl&3;var rc=ru[rs];if(0!=rc)for(var R=0;R<ri;R++)for(var Q=0;Q<ra;Q++){var N=R*y+Q;W[N]=W[N]<<rc}}}if(9==m&&3==U)for(var rh=E[0],rd=E[1],rw=E[2],rg=E[3],R=0;R<p;R+=2)for(var Q=0;Q<b;Q+=2){var r_=R*b+Q,q=(R>>>1)*(b>>>1)+(Q>>>1),rb=rh[q],rp=rd[q]-2048,rm=rw[q]-2048,rA=rg[q]-2048,rU=(rp<<1)+rb,rI=(rm<<1)+rb,ry=rb+rA,rE=rb-rA;x?(d[r_]=s(ry),d[r_+1]=s(rI),d[r_+b]=s(rU),d[r_+b+1]=s(rE)):(d[r_]=s(rU),d[r_+1]=s(ry),d[r_+b]=s(rE),d[r_+b+1]=s(rI))}c+=4*S}else if(16388==H)c+=4*S;else if(8192==L||8448==L||9216==L);else throw H.toString(16)}}console.log(Date.now()-D)}}(),B.decode._decodeLogLuv32=function(r,e,t,n,a,i){for(var f=r.width,o=4*f,v=0,u=new Uint8Array(o);v<n;){for(var s=0;s<o;){var l=e[t+v];if(v++,l<128){for(var c=0;c<l;c++)u[s+c]=e[t+v+c];s+=l,v+=l}else{l-=126;for(var c=0;c<l;c++)u[s+c]=e[t+v];s+=l,v++}}for(var h=0;h<f;h++)a[i+0]=u[h],a[i+1]=u[h+f],a[i+2]=u[h+2*f],a[i+4]=u[h+3*f],i+=6}},B.decode._ljpeg_diff=function(r,e,t){var n,a,i=B.decode._getbithuff;return n=i(r,e,t[0],t),((a=i(r,e,n,0))&1<<n-1)==0&&(a-=(1<<n)-1),a},B.decode._decodeARW=function(r,e,t,n,a,i){var f,o,v,u,s,l,c,h,d,w,g,_=r.t256[0],b=r.t257[0],p=r.t258[0],m=r.isLE?B._binLE:B._binBE;if(!(_*b==n||_*b*1.5==n)){b+=8;var w,A,U,o,f,I=[t,0,0,0],y=new Uint16Array(32770),E=[3857,3856,3599,3342,3085,2828,2571,2314,2057,1800,1543,1286,1029,772,771,768,514,513],M=0,D=B.decode._ljpeg_diff;for(y[0]=15,U=w=0;w<18;w++)for(var k=32768>>>(E[w]>>>8),A=0;A<k;A++)y[++U]=E[w];for(o=_;o--;)for(f=0;f<b+1;f+=2)if(f==b&&(f=1),M+=D(e,I,y),f<b){var F=4095&M;B.decode._putsF(a,(f*_+o)*p,F<<16-p)}return}if(_*b*1.5==n){for(var w=0;w<n;w+=3){var x=e[t+w+0],P=e[t+w+1],C=e[t+w+2];a[i+w]=P<<4|x>>>4,a[i+w+1]=x<<4|C>>>4,a[i+w+2]=C<<4|P>>>4}return}var H=new Uint16Array(16),L=new Uint8Array(_+1);for(f=0;f<b;f++){for(var S=0;S<_;S++)L[S]=e[t++];for(g=0,o=0;o<_-30;g+=16){for(h=0,u=2047&(v=m.readUint(L,g)),s=2047&v>>>11,l=15&v>>>22,c=15&v>>>26;h<4&&128<<h<=u-s;h++);for(d=30,w=0;w<16;w++)w==l?H[w]=u:w==c?H[w]=s:(H[w]=((m.readUshort(L,g+(d>>3))>>>(7&d)&127)<<h)+s,H[w]>2047&&(H[w]=2047),d+=7);for(w=0;w<16;w++,o+=2){var F=H[w]<<1;B.decode._putsF(a,(f*_+o)*p,F<<16-p)}o-=1&o?1:31}}},B.decode._decodeNikon=function(r,e,t,n,a,i,f){var o,v,u,s,l,c,h=[[0,0,1,5,1,1,1,1,1,1,2,0,0,0,0,0,0,5,4,3,6,2,7,1,0,8,9,11,10,12],[0,0,1,5,1,1,1,1,1,1,2,0,0,0,0,0,0,57,90,56,39,22,5,4,3,2,1,0,11,12,12],[0,0,1,4,2,3,1,2,0,0,0,0,0,0,0,0,0,5,4,6,3,7,2,8,1,9,0,10,11,12],[0,0,1,4,3,1,1,1,1,1,2,0,0,0,0,0,0,5,6,4,7,8,3,9,2,1,0,10,11,12,13,14],[0,0,1,5,1,1,1,1,1,1,1,2,0,0,0,0,0,8,92,75,58,41,7,6,5,4,3,2,1,0,13,14],[0,0,1,4,2,2,3,1,2,0,0,0,0,0,0,0,0,7,6,8,5,9,4,10,3,11,12,2,0,1,13,14]],d=r.t256[0],w=r.t257[0],g=r.t258[0],_=0,b=0,p=B.decode._make_decoder,m=B.decode._getbithuff,A=e[0].exifIFD.makerNote,U=A.t150?A.t150:A.t140,I=0,y=U[I++],E=U[I++];(73==y||88==E)&&(I+=2110),70==y&&(_=2),14==g&&(_+=3);for(var M=[[0,0],[0,0]],D=r.isLE?B._binLE:B._binBE,o=0;o<2;o++)for(var k=0;k<2;k++)M[o][k]=D.readShort(U,I),I+=2;var F=0,x=D.readShort(U,I);I+=2,x>1&&(F=Math.floor((1<<g&32767)/(x-1))),68==y&&32==E&&F>0&&(b=D.readShort(U,562));var P=[0,0],C=p(h[_]),H=[n,0,0,0];for(v=0;v<w;v++)for(b&&v==b&&(C=p(h[_+1])),u=0;u<d;u++){s=15&(o=m(t,H,C[0],C)),((c=(m(t,H,s-(l=o>>>4),0)<<1)+1<<l>>>1)&1<<s-1)==0&&(c-=(1<<s)-(0==l?1:0)),u<2?P[u]=M[1&v][u]+=c:P[1&u]+=c;var L=Math.min(Math.max(P[1&u],0),(1<<g)-1),S=(v*d+u)*g;B.decode._putsF(i,S,L<<16-g)}},B.decode._putsF=function(r,e,t){t<<=8-(7&e);var n=e>>>3;r[n]|=t>>>16,r[n+1]|=t>>>8,r[n+2]|=t},B.decode._getbithuff=function(r,e,t,n){B.decode._get_byte;var a,i=e[0],f=e[1],o=e[2],v=e[3];if(0==t||o<0)return 0;for(;!v&&o<t&&-1!=(a=r[i++])&&(v=0,1);)f=(f<<8)+a,o+=8;if(a=f<<32-o>>>32-t,n?(o-=n[a+1]>>>8,a=255&n[a+1]):o-=t,o<0)throw"e";return e[0]=i,e[1]=f,e[2]=o,e[3]=v,a},B.decode._make_decoder=function(r){var e,t,n,a,i,f=[];for(e=16;0!=e&&!r[e];e--);var o=17;for(f[0]=e,n=t=1;t<=e;t++)for(a=0;a<r[t];a++,++o)for(i=0;i<1<<e-t;i++)n<=1<<e&&(f[n++]=t<<8|r[o]);return f},B.decode._decodeNewJPEG=function(r,e,t,n,a,i){n=Math.min(n,e.length-t);var f=r.t347,o=f?f.length:0,v=new Uint8Array(o+n);if(f){for(var u=0,s=0;s<o-1&&(255!=f[s]||217!=f[s+1]);s++)v[u++]=f[s];var l=e[t],c=e[t+1];(255!=l||216!=c)&&(v[u++]=l,v[u++]=c);for(var s=2;s<n;s++)v[u++]=e[t+s]}else for(var s=0;s<n;s++)v[s]=e[t+s];if(32803==r.t262[0]||7==r.t259[0]&&34892==r.t262[0]){var h=r.t258[0],d=B.LosslessJpegDecode(v),w=d[0],g=w.length;if(4==d[3]&&r.t29456){var _=w.slice(0);_.fill(0);for(var b=d[1],p=d[2],m=2*b,A=0;A<p;A++)for(var U=0;U<b;U++){var I=A*b*4+2*U,y=I+2*U;_[I]=w[y],_[I+1]=w[y+1],_[I+m]=w[y+2],_[I+m+1]=w[y+3]}w=_}if(16==h){if(r.isLE)for(var s=0;s<g;s++)a[i+(s<<1)]=255&w[s],a[i+(s<<1)+1]=w[s]>>>8;else for(var s=0;s<g;s++)a[i+(s<<1)]=w[s]>>>8,a[i+(s<<1)+1]=255&w[s]}else if(14==h||12==h||10==h)for(var E=16-h,s=0;s<g;s++)B.decode._putsF(a,s*h,w[s]<<E);else if(8==h)for(var s=0;s<g;s++)a[i+s]=w[s];else throw Error("unsupported bit depth "+h)}else{var M=new B.JpegDecoder;M.parse(v);for(var D=M.getData({width:M.width,height:M.height,forceRGB:!0,isSourcePDF:!1}),s=0;s<D.length;s++)a[i+s]=D[s]}6==r.t262[0]&&(r.t262[0]=2)},B.decode._decodeOldJPEGInit=function(r,e,t,n){var a,i,f,o,v,u=0,s=0,l=!1,c=r.t513,h=c?c[0]:0,d=r.t514,w=d?d[0]:0,g=r.t324||r.t273||c,_=r.t530,b=0,p=0,m=r.t277?r.t277[0]:1,A=r.t515;if(g&&(s=g[0],l=g.length>1),!l){if(255==e[t]&&216==e[t+1])return{jpegOffset:t};if(null!=c&&(255==e[t+h]&&216==e[t+h+1]?u=t+h:F("JPEGInterchangeFormat does not point to SOI"),null==d?F("JPEGInterchangeFormatLength field is missing"):(h>=s||h+w<=s)&&F("JPEGInterchangeFormatLength field value is invalid"),null!=u))return{jpegOffset:u}}if(null!=_&&(b=_[0],p=_[1]),null!=c&&null!=d){if(w>=2&&h+w<=s){for(f=0,a=new Uint8Array(255==e[t+h+w-2]&&216==e[t+h+w-1]?w-2:w);f<a.length;f++)a[f]=e[t+h+f];F("Incorrect JPEG interchange format: using JPEGInterchangeFormat offset to derive tables")}else F("JPEGInterchangeFormat+JPEGInterchangeFormatLength > offset to first strip or tile")}if(null==a){var U=0,I=[];I[U++]=255,I[U++]=216;var y=r.t519;if(null==y)throw Error("JPEGQTables tag is missing");for(f=0;f<y.length;f++)for(o=0,I[U++]=255,I[U++]=219,I[U++]=0,I[U++]=67,I[U++]=f;o<64;o++)I[U++]=e[t+y[f]+o];for(v=0;v<2;v++){var E=r[0==v?"t520":"t521"];if(null==E)throw Error((0==v?"JPEGDCTables":"JPEGACTables")+" tag is missing");for(f=0;f<E.length;f++){I[U++]=255,I[U++]=196;var M=19;for(o=0;o<16;o++)M+=e[t+E[f]+o];for(o=0,I[U++]=M>>>8,I[U++]=255&M,I[U++]=f|v<<4;o<16;o++)I[U++]=e[t+E[f]+o];for(o=0;o<M;o++)I[U++]=e[t+E[f]+16+o]}}if(I[U++]=255,I[U++]=192,I[U++]=0,I[U++]=8+3*m,I[U++]=8,I[U++]=r.height>>>8&255,I[U++]=255&r.height,I[U++]=r.width>>>8&255,I[U++]=255&r.width,I[U++]=m,1==m)I[U++]=1,I[U++]=17,I[U++]=0;else for(f=0;f<3;f++)I[U++]=f+1,I[U++]=0!=f?17:(15&b)<<4|15&p,I[U++]=f;null!=A&&0!=A[0]&&(I[U++]=255,I[U++]=221,I[U++]=0,I[U++]=4,I[U++]=A[0]>>>8&255,I[U++]=255&A[0]),a=new Uint8Array(I)}var D=-1;for(f=0;f<a.length-1;){if(255==a[f]&&192==a[f+1]){D=f;break}f++}if(-1==D){var k=new Uint8Array(a.length+10+3*m);k.set(a);var B=a.length;if(D=a.length,(a=k)[B++]=255,a[B++]=192,a[B++]=0,a[B++]=8+3*m,a[B++]=8,a[B++]=r.height>>>8&255,a[B++]=255&r.height,a[B++]=r.width>>>8&255,a[B++]=255&r.width,a[B++]=m,1==m)a[B++]=1,a[B++]=17,a[B++]=0;else for(f=0;f<3;f++)a[B++]=f+1,a[B++]=0!=f?17:(15&b)<<4|15&p,a[B++]=f}if(255==e[s]&&218==e[s+1]){var x=e[s+2]<<8|e[s+3];for(f=0,(i=new Uint8Array(x+2))[0]=e[s],i[1]=e[s+1],i[2]=e[s+2],i[3]=e[s+3];f<x-2;f++)i[f+4]=e[s+f+4]}else{i=new Uint8Array(8+2*m);var P=0;if(i[P++]=255,i[P++]=218,i[P++]=0,i[P++]=6+2*m,i[P++]=m,1==m)i[P++]=1,i[P++]=0;else for(f=0;f<3;f++)i[P++]=f+1,i[P++]=f<<4|f;i[P++]=0,i[P++]=63,i[P++]=0}return{jpegOffset:t,tables:a,sosMarker:i,sofPosition:D}},B.decode._decodeOldJPEG=function(r,e,t,n,a,i){var f,o,v,u,s,l=B.decode._decodeOldJPEGInit(r,e,t,n);if(null!=l.jpegOffset)for(f=0,u=new Uint8Array(o=t+n-l.jpegOffset);f<o;f++)u[f]=e[l.jpegOffset+f];else{for((u=new Uint8Array((v=l.tables.length)+l.sosMarker.length+n+2)).set(l.tables),s=v,u[l.sofPosition+5]=r.height>>>8&255,u[l.sofPosition+6]=255&r.height,u[l.sofPosition+7]=r.width>>>8&255,u[l.sofPosition+8]=255&r.width,(255!=e[t]||e[t+1]!=SOS)&&(u.set(l.sosMarker,s),s+=sosMarker.length),f=0;f<n;f++)u[s++]=e[t+f];u[s++]=255,u[s++]=EOI}var c=new B.JpegDecoder;c.parse(u);for(var h=c.getData({width:c.width,height:c.height,forceRGB:!0,isSourcePDF:!1}),f=0;f<h.length;f++)a[i+f]=h[f];r.t262&&6==r.t262[0]&&(r.t262[0]=2)},B.decode._decodePackBits=function(r,e,t,n,a){for(var i=new Int8Array(r.buffer),f=new Int8Array(n.buffer),o=e+t;e<o;){var v=i[e];if(e++,v>=0&&v<128)for(var u=0;u<v+1;u++)f[a]=i[e],a++,e++;if(v>=-127&&v<0){for(var u=0;u<-v+1;u++)f[a]=i[e],a++;e++}}return a},B.decode._decodeThunder=function(r,e,t,n,a){for(var i=[0,1,0,-1],f=[0,1,2,3,0,-3,-2,-1],o=e+t,v=2*a,u=0;e<o;){var s=r[e],l=s>>>6,c=63&s;if(e++,3==l&&(u=15&c,n[v>>>1]|=u<<4*(1-v&1),v++),0==l)for(var h=0;h<c;h++)n[v>>>1]|=u<<4*(1-v&1),v++;if(2==l)for(var h=0;h<2;h++){var d=c>>>3*(1-h)&7;4!=d&&(u+=f[d],n[v>>>1]|=u<<4*(1-v&1),v++)}if(1==l)for(var h=0;h<3;h++){var d=c>>>2*(2-h)&3;2!=d&&(u+=i[d],n[v>>>1]|=u<<4*(1-v&1),v++)}}},B.decode._dmap={1:0,"011":1,"000011":2,"0000011":3,"010":-1,"000010":-2,"0000010":-3},B.decode._lens=(e=function(r,e,t,n){for(var a=0;a<e.length;a++)r[e[a]]=t+a*n},a="0000110111,010,11,10,011,0011,0010,00011,000101,000100,0000100,0000101,0000111,00000100,00000111,000011000,0000010111,0000011000,0000001000,00001100111,00001101000,00001101100,00000110111,00000101000,00000010111,00000011000,000011001010,000011001011,000011001100,000011001101,000001101000,000001101001,000001101010,000001101011,000011010010,000011010011,000011010100,000011010101,000011010110,000011010111,000001101100,000001101101,000011011010,000011011011,000001010100,000001010101,000001010110,000001010111,000001100100,000001100101,000001010010,000001010011,000000100100,000000110111,000000111000,000000100111,000000101000,000001011000,000001011001,000000101011,000000101100,000001011010,000001100110,000001100111",i="11011,10010,010111,0110111,00110110,00110111,01100100,01100101,01101000,01100111,011001100,011001101,011010010,011010011,011010100,011010101,011010110,011010111,011011000,011011001,011011010,011011011,010011000,010011001,010011010,011000,010011011",f="0000001111,000011001000,000011001001,000001011011,000000110011,000000110100,000000110101,0000001101100,0000001101101,0000001001010,0000001001011,0000001001100,0000001001101,0000001110010,0000001110011,0000001110100,0000001110101,0000001110110,0000001110111,0000001010010,0000001010011,0000001010100,0000001010101,0000001011010,0000001011011,0000001100100,0000001100101",o="00000001000,00000001100,00000001101,000000010010,000000010011,000000010100,000000010101,000000010110,000000010111,000000011100,000000011101,000000011110,000000011111",t=(t="00110101,000111,0111,1000,1011,1100,1110,1111,10011,10100,00111,01000,001000,000011,110100,110101,101010,101011,0100111,0001100,0001000,0010111,0000011,0000100,0101000,0101011,0010011,0100100,0011000,00000010,00000011,00011010,00011011,00010010,00010011,00010100,00010101,00010110,00010111,00101000,00101001,00101010,00101011,00101100,00101101,00000100,00000101,00001010,00001011,01010010,01010011,01010100,01010101,00100100,00100101,01011000,01011001,01011010,01011011,01001010,01001011,00110010,00110011,00110100").split(","),a=a.split(","),i=i.split(","),f=f.split(","),o=o.split(","),u={},e(v={},t,0,1),e(v,i,64,64),e(v,o,1792,64),e(u,a,0,1),e(u,f,64,64),e(u,o,1792,64),[v,u]),B.decode._decodeG4=function(r,e,t,n,a,i,f){for(var o=B.decode,v=e<<3,u=0,s="",l=[],c=[],h=0;h<i;h++)c.push(0);c=o._makeDiff(c);for(var d=0,w=0,g=0,_=0,b=0,p=0,m="",A=0,U=8*Math.ceil(i/8);v>>>3<e+t;){g=o._findDiff(c,d+(0==d?0:1),1-b),_=o._findDiff(c,g,b);var I=0;if(1==f&&(I=r[v>>>3]>>>7-(7&v)&1),2==f&&(I=r[v>>>3]>>>(7&v)&1),v++,s+=I,"H"==m){if(null!=o._lens[b][s]){var y=o._lens[b][s];s="",u+=y,y<64&&(o._addNtimes(l,u,b),d+=u,b=1-b,u=0,0==--A&&(m=""))}}else"0001"==s&&(s="",o._addNtimes(l,_-d,b),d=_),"001"==s&&(s="",m="H",A=2),null!=o._dmap[s]&&(w=g+o._dmap[s],o._addNtimes(l,w-d,b),d=w,s="",b=1-b);l.length==i&&""==m&&(o._writeBits(l,n,8*a+p*U),b=0,p++,d=0,c=o._makeDiff(l),l=[])}},B.decode._findDiff=function(r,e,t){for(var n=0;n<r.length;n+=2)if(r[n]>=e&&r[n+1]==t)return r[n]},B.decode._makeDiff=function(r){var e=[];1==r[0]&&e.push(0,1);for(var t=1;t<r.length;t++)r[t-1]!=r[t]&&e.push(t,r[t]);return e.push(r.length,0,r.length,1),e},B.decode._decodeG2=function(r,e,t,n,a,i,f){for(var o=B.decode,v=e<<3,u=0,s="",l=[],c=0,h=0,d=8*Math.ceil(i/8);v>>>3<e+t;){var w=0;1==f&&(w=r[v>>>3]>>>7-(7&v)&1),2==f&&(w=r[v>>>3]>>>(7&v)&1),v++,s+=w,null!=(u=o._lens[c][s])&&(o._addNtimes(l,u,c),s="",u<64&&(c=1-c),l.length==i&&(o._writeBits(l,n,8*a+h*d),l=[],h++,c=0,(7&v)!=0&&(v+=8-(7&v)),u>=64&&(v+=8)))}},B.decode._decodeG3=function(r,e,t,n,a,i,f,o){for(var v=B.decode,u=e<<3,s=0,l="",c=[],h=[],d=0;d<i;d++)c.push(0);for(var w=0,g=0,_=0,b=0,p=0,m=-1,A="",U=0,I=!0,y=8*Math.ceil(i/8);u>>>3<e+t;){_=v._findDiff(h,w+(0==w?0:1),1-p),b=v._findDiff(h,_,p);var E=0;if(1==f&&(E=r[u>>>3]>>>7-(7&u)&1),2==f&&(E=r[u>>>3]>>>(7&u)&1),u++,l+=E,I){if(null!=v._lens[p][l]){var M=v._lens[p][l];l="",s+=M,M<64&&(v._addNtimes(c,s,p),p=1-p,s=0)}}else if("H"==A){if(null!=v._lens[p][l]){var M=v._lens[p][l];l="",s+=M,M<64&&(v._addNtimes(c,s,p),w+=s,p=1-p,s=0,0==--U&&(A=""))}}else"0001"==l&&(l="",v._addNtimes(c,b-w,p),w=b),"001"==l&&(l="",A="H",U=2),null!=v._dmap[l]&&(g=_+v._dmap[l],v._addNtimes(c,g-w,p),w=g,l="",p=1-p);l.endsWith("000000000001")&&(m>=0&&v._writeBits(c,n,8*a+m*y),o&&(1==f&&(I=(r[u>>>3]>>>7-(7&u)&1)==1),2==f&&(I=(r[u>>>3]>>>(7&u)&1)==1),u++),l="",p=0,m++,w=0,h=v._makeDiff(c),c=[])}c.length==i&&v._writeBits(c,n,8*a+m*y)},B.decode._addNtimes=function(r,e,t){for(var n=0;n<e;n++)r.push(t)},B.decode._writeBits=function(r,e,t){for(var n=0;n<r.length;n++)e[t+n>>>3]|=r[n]<<7-(t+n&7)},B.decode._decodeLZW=B.decode._decodeLZW=(d=0,w=0,g=0,_=0,b=function(){var r=s>>>3,e=(l[r]<<16|l[r+1]<<8|l[r+2])>>>24-(7&s)-w&(1<<w)-1;return s+=w,e},p=new Uint32Array(16384),m=0,A=function(r){if(r!=m){m=r,_=(g=1<<r)+1;for(var e=0;e<_+1;e++)p[4*e]=p[4*e+3]=e,p[4*e+1]=65535,p[4*e+2]=1}},U=function(r){w=r+1,d=_+1},I=function(r){for(var e=r<<2,t=p[e+2],n=h+t-1;65535!=e;)c[n--]=p[e],e=p[e+1];h+=t},y=function(r,e){var t=d<<2,n=r<<2;p[t]=p[(e<<2)+3],p[t+1]=n,p[t+2]=p[n+2]+1,p[t+3]=p[n+3],++d+1==1<<w&&12!=w&&w++},function(r,e,t,n,a,i){s=e<<3,l=r,c=n,h=a;var f=e+t<<3,o=0,v=0;for(A(i),U(i);s<f&&(o=b())!=_;){if(o==g){if(U(i),(o=b())==_)break;I(o)}else o<d?(I(o),y(v,o)):(y(v,v),I(d-1));v=o}return h}),B.tags={},B._types=((E=Array(250)).fill(0),{basic:{main:E=E.concat([0,0,0,0,4,3,3,3,3,3,0,0,3,0,0,0,3,0,0,2,2,2,2,4,3,0,0,3,4,4,3,3,5,5,3,2,5,5,0,0,0,0,4,4,0,0,3,3,0,0,0,0,0,0,0,2,2,0,0,0,0,0,0,0,0,2,2,3,5,5,3,0,3,3,4,4,4,3,4,0,0,0,0,0,0,0,0,0,3,3,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]),rest:{33432:2,33434:5,33437:5,34665:4,34850:3,34853:4,34855:3,34864:3,34866:4,36864:7,36867:2,36868:2,37121:7,37377:10,37378:5,37380:10,37381:5,37383:3,37384:3,37385:3,37386:5,37510:7,37520:2,37521:2,37522:2,40960:7,40961:3,40962:4,40963:4,40965:4,41486:5,41487:5,41488:3,41985:3,41986:3,41987:3,41988:5,41989:3,41990:3,41993:3,41994:3,41995:7,41996:3,42032:2,42033:2,42034:5,42036:2,42037:2,59932:7}},gps:{main:[1,2,5,2,5,1,5,5,0,9],rest:{18:2,29:2}}}),B._readIFD=function(r,e,t,n,a,i){var f=r.readUshort(e,t);t+=2;var o={};i.debug&&F("   ".repeat(a),n.length-1,">>>----------------");for(var v=0;v<f;v++){var u=r.readUshort(e,t);t+=2;var s=r.readUshort(e,t);t+=2;var l=r.readUint(e,t);t+=4;var c=r.readUint(e,t);t+=4;var h=[];if(1==s||7==s){var d=l<5?t-4:c;d+l>e.buffer.byteLength&&(l=e.buffer.byteLength-d),h=new Uint8Array(e.buffer,d,l)}if(2==s){var w=l<5?t-4:c,g=e[w],_=Math.max(0,Math.min(l-1,e.length-w));g<128||0==_?h.push(r.readASCII(e,w,_)):h=new Uint8Array(e.buffer,w,_)}if(3==s)for(var b=0;b<l;b++)h.push(r.readUshort(e,(l<3?t-4:c)+2*b));if(4==s||13==s)for(var b=0;b<l;b++)h.push(r.readUint(e,(l<2?t-4:c)+4*b));if(5==s||10==s)for(var p=5==s?r.readUint:r.readInt,b=0;b<l;b++)h.push([p(e,c+8*b),p(e,c+8*b+4)]);if(8==s)for(var b=0;b<l;b++)h.push(r.readShort(e,(l<3?t-4:c)+2*b));if(9==s)for(var b=0;b<l;b++)h.push(r.readInt(e,(l<2?t-4:c)+4*b));if(11==s)for(var b=0;b<l;b++)h.push(r.readFloat(e,c+4*b));if(12==s)for(var b=0;b<l;b++)h.push(r.readDouble(e,c+8*b));if(0!=l&&0==h.length){if(F(u,"unknown TIFF tag type: ",s,"num:",l),0==v)return;continue}if(i.debug&&F("   ".repeat(a),u,s,B.tags[u],h),o["t"+u]=h,330==u&&o.t272&&"DSLR-A100"==o.t272[0]);else if(330==u||34665==u||34853==u||50740==u&&300>r.readUshort(e,r.readUint(h,0))||61440==u){for(var m=50740==u?[r.readUint(h,0)]:h,A=[],b=0;b<m.length;b++)B._readIFD(r,e,m[b],A,a+1,i);330==u&&(o.subIFD=A),34665==u&&(o.exifIFD=A[0]),34853==u&&(o.gpsiIFD=A[0]),50740==u&&(o.dngPrvt=A[0]),61440==u&&(o.fujiIFD=A[0])}if(37500==u&&i.parseMN){var U=h;if("Nikon"==r.readASCII(U,0,5))o.makerNote=B.decode(U.slice(10).buffer)[0];else if("OLYMP"==r.readASCII(U,0,5)||"OM SYSTEM"==r.readASCII(U,0,9)){var I=[8208,8224,8240,8256,8272],y=[];B._readIFD(r,U,77==U[1]?16:85==U[5]?12:8,y,a+1,i);for(var E=o.makerNote=y.pop(),b=0;b<I.length;b++){var M="t"+I[b];null!=E[M]&&(B._readIFD(r,U,E[M][0],y,a+1,i),E[M]=y.pop())}E.t12288&&(B._readIFD(r,E.t12288,0,y,a+1,i),E.t12288=y.pop())}else if(300>r.readUshort(e,c)&&12>=r.readUshort(e,c+4)){var y=[];B._readIFD(r,e,c,y,a+1,i),o.makerNote=y[0]}}}return n.push(o),i.debug&&F("   ".repeat(a),"<<<---------------"),t},B._writeIFD=function(r,e,t,n,a){var i=Object.keys(a),f=i.length;a.exifIFD&&f--,a.gpsiIFD&&f--,r.writeUshort(t,n,f);for(var o=(n+=2)+12*f+4,v=0;v<i.length;v++){var u=i[v];if("t34665"!=u&&"t34853"!=u){"exifIFD"==u&&(u="t34665"),"gpsiIFD"==u&&(u="t34853");var s=parseInt(u.slice(1)),l=e.main[s];if(null==l&&(l=e.rest[s]),null==l||0==l)throw Error("unknown type of tag: "+s);var c=a[u];if(34665==s){var h=B._writeIFD(r,e,t,o,a.exifIFD);c=[o],o=h[1]}if(34853==s){var h=B._writeIFD(r,B._types.gps,t,o,a.gpsiIFD);c=[o],o=h[1]}2==l&&(c=c[0]+"\0");var d=c.length;r.writeUshort(t,n,s),n+=2,r.writeUshort(t,n,l),n+=2,r.writeUint(t,n,d);var w=[-1,1,1,2,4,8,0,1,0,4,8,0,8][l]*d,g=n+=4;if(w>4&&(r.writeUint(t,n,o),g=o),1==l||7==l)for(var _=0;_<d;_++)t[g+_]=c[_];else if(2==l)r.writeASCII(t,g,c);else if(3==l)for(var _=0;_<d;_++)r.writeUshort(t,g+2*_,c[_]);else if(4==l)for(var _=0;_<d;_++)r.writeUint(t,g+4*_,c[_]);else if(5==l||10==l)for(var b=5==l?r.writeUint:r.writeInt,_=0;_<d;_++){var p=c[_],m=p[0],A=p[1];if(null==m)throw"e";b(t,g+8*_,m),b(t,g+8*_+4,A)}else if(9==l)for(var _=0;_<d;_++)r.writeInt(t,g+4*_,c[_]);else if(12==l)for(var _=0;_<d;_++)r.writeDouble(t,g+8*_,c[_]);else throw l;w>4&&(w+=1&w,o+=w),n+=4}}return[n,o]},B.toRGBA8=function(r,e){function t(r){return r<.0031308?12.92*r:1.055*Math.pow(r,1/2.4)-.055}var n=r.width,a=r.height,i=n*a,f=r.data,o=new Uint8Array(4*i),v=r.t262?r.t262[0]:2,u=r.t258?Math.min(32,r.t258[0]):1;null==r.t262&&1==u&&(v=0);var s=r.t277?r.t277[0]:r.t258?r.t258.length:[1,1,3,1,1,4,3][v],l=r.t339?r.t339[0]:null;if(1==v&&32==u&&3!=l)throw"e";var c=Math.ceil(s*u*n/8);if(0==v){e=1/256;for(var h=0;h<a;h++){var d=h*c,w=h*n;if(1==u)for(var g=0;g<n;g++){var _=w+g<<2,b=f[d+(g>>3)]>>7-(7&g)&1;o[_]=o[_+1]=o[_+2]=(1-b)*255,o[_+3]=255}if(4==u)for(var g=0;g<n;g++){var _=w+g<<2,b=f[d+(g>>1)]>>4-4*(1&g)&15;o[_]=o[_+1]=o[_+2]=(15-b)*17,o[_+3]=255}if(8==u)for(var g=0;g<n;g++){var _=w+g<<2,b=f[d+g];o[_]=o[_+1]=o[_+2]=255-b,o[_+3]=255}if(16==u)for(var g=0;g<n;g++){var _=w+g<<2,p=d+2*g,b=f[p+1]<<8|f[p];o[_]=o[_+1]=o[_+2]=Math.min(255,255-~~(b*e)),o[_+3]=255}}}else if(1==v){null==e&&(e=1/256);for(var m=(3&f.length)==0?new Float32Array(f.buffer):null,h=0;h<a;h++){var d=h*c,w=h*n;if(1==u)for(var g=0;g<n;g++){var _=w+g<<2,b=f[d+(g>>3)]>>7-(7&g)&1;o[_]=o[_+1]=o[_+2]=255*b,o[_+3]=255}if(2==u)for(var g=0;g<n;g++){var _=w+g<<2,b=f[d+(g>>2)]>>6-2*(3&g)&3;o[_]=o[_+1]=o[_+2]=85*b,o[_+3]=255}if(8==u)for(var g=0;g<n;g++){var _=w+g<<2,b=f[d+g*s];o[_]=o[_+1]=o[_+2]=b,o[_+3]=255}if(16==u)for(var g=0;g<n;g++){var _=w+g<<2,p=d+2*g,b=f[p+1]<<8|f[p];o[_]=o[_+1]=o[_+2]=Math.min(255,~~(b*e)),o[_+3]=255}if(32==u)for(var g=0;g<n;g++){var _=w+g<<2,p=(d>>>2)+g,b=m[p];o[_]=o[_+1]=o[_+2]=~~(.5+255*b),o[_+3]=255}}}else if(2==v){if(8==u){if(1==s)for(var g=0;g<i;g++)o[4*g]=o[4*g+1]=o[4*g+2]=f[g],o[4*g+3]=255;if(3==s)for(var g=0;g<i;g++){var _=g<<2,A=3*g;o[_]=f[A],o[_+1]=f[A+1],o[_+2]=f[A+2],o[_+3]=255}if(s>=4)for(var g=0;g<i;g++){var _=g<<2,A=g*s;o[_]=f[A],o[_+1]=f[A+1],o[_+2]=f[A+2],o[_+3]=f[A+3]}}else if(16==u){if(4==s)for(var g=0;g<i;g++){var _=g<<2,A=8*g+1;o[_]=f[A],o[_+1]=f[A+2],o[_+2]=f[A+4],o[_+3]=f[A+6]}if(3==s)for(var g=0;g<i;g++){var _=g<<2,A=6*g+1;o[_]=f[A],o[_+1]=f[A+2],o[_+2]=f[A+4],o[_+3]=255}}else if(32==u){for(var U=new Float32Array(f.buffer),I=0,g=0;g<U.length;g++)I=Math.min(I,U[g]);if(I<0)for(var g=0;g<f.length;g+=4){var y=f[g];f[g]=f[g+3],f[g+3]=y,y=f[g+1],f[g+1]=f[g+2],f[g+2]=y}for(var E=[],g=0;g<65536;g++)E.push(t(g/65535));for(var g=0;g<U.length;g++){var M=Math.max(0,Math.min(1,U[g]));U[g]=E[~~(.5+65535*M)]}if(3==s)for(var g=0;g<i;g++){var _=g<<2,A=3*g;o[_]=~~(.5+255*U[A]),o[_+1]=~~(.5+255*U[A+1]),o[_+2]=~~(.5+255*U[A+2]),o[_+3]=255}else if(4==s)for(var g=0;g<i;g++){var _=g<<2,A=4*g;o[_]=~~(.5+255*U[A]),o[_+1]=~~(.5+255*U[A+1]),o[_+2]=~~(.5+255*U[A+2]),o[_+3]=~~(.5+255*U[A+3])}else throw s}else throw u}else if(3==v)for(var D=r.t320,k=1<<u,B=8==u&&s>1&&r.t338&&0!=r.t338[0],h=0;h<a;h++)for(var x=0;x<n;x++){var g=h*n+x,_=g<<2,P=0,C=h*c;if(1==u)P=f[C+(x>>>3)]>>>7-(7&x)&1;else if(2==u)P=f[C+(x>>>2)]>>>6-2*(3&x)&3;else if(4==u)P=f[C+(x>>>1)]>>>4-4*(1&x)&15;else if(8==u)P=f[C+x*s];else throw u;o[_]=D[P]>>8,o[_+1]=D[k+P]>>8,o[_+2]=D[k+k+P]>>8,o[_+3]=B?f[C+x*s+1]:255}else if(5==v)for(var H=s>4?1:0,g=0;g<i;g++){var _=g<<2,L=g*s;if(window.UDOC){var S=f[L],N=f[L+1],G=f[L+2],J=f[L+3],O=UDOC.C.cmykToRgb([1/255*S,1/255*N,1/255*G,1/255*J]);o[_]=~~(.5+255*O[0]),o[_+1]=~~(.5+255*O[1]),o[_+2]=~~(.5+255*O[2])}else{var S=255-f[L],N=255-f[L+1],G=255-f[L+2],J=(255-f[L+3])*(1/255);o[_]=~~(S*J+.5),o[_+1]=~~(N*J+.5),o[_+2]=~~(G*J+.5)}o[_+3]=255*(1-H)+f[L+4]*H}else if(6==v&&r.t278)for(var W=r.t278[0],h=0;h<a;h+=W)for(var g=h*n,j=W*n,T=0;T<j;T++){var _=4*(g+T),L=3*g+4*(T>>>1),G=f[L+(1&T)],R=f[L+2]-128,Q=f[L+3]-128,q=G+((Q>>2)+(Q>>3)+(Q>>5)),Z=G-((R>>2)+(R>>4)+(R>>5))-((Q>>1)+(Q>>3)+(Q>>4)+(Q>>5)),$=G+(R+(R>>1)+(R>>2)+(R>>6));o[_]=Math.max(0,Math.min(255,q)),o[_+1]=Math.max(0,Math.min(255,Z)),o[_+2]=Math.max(0,Math.min(255,$)),o[_+3]=255}else if(8==v){if(3!=s||16!=u)throw"e";for(var V=new Uint16Array(f.buffer),X=new Int16Array(f.buffer),N=[3.1338561,-1.6168667,-.4906146,-.9787684,1.9161415,.033454,.0719453,-.2289914,1.4052427],h=0;h<a;h++)for(var x=0;x<n;x++){var g=h*n+x,_=4*g,A=3*g,z=V[A]*(100/65535),Y=X[A+1]*(255/65535),$=X[A+2]*(255/65535),K=(z+16)/116,rr=K*K*K,re=K-$/200,rt=re*re*re,rn=Y/500+K,ra=rn*rn*rn,ri=96.42/100*(ra>.008856?ra:(116*rn-16)/903.3),G=1*(rr>.008856?rr:(116*K-16)/903.3),rf=.8249*(rt>.008856?rt:(116*re-16)/903.3);o[_]=Math.max(0,Math.min(255,255*t(ri*N[0]+G*N[1]+rf*N[2]))),o[_+1]=Math.max(0,Math.min(255,255*t(ri*N[3]+G*N[4]+rf*N[5]))),o[_+2]=Math.max(0,Math.min(255,255*t(ri*N[6]+G*N[7]+rf*N[8]))),o[_+3]=255}}else if(32845==v)for(var h=0;h<a;h++)for(var x=0;x<n;x++){var L=(h*n+x)*6,_=(h*n+x)*4,z=f[L+1]<<8|f[L],z=Math.pow(2,(z+.5)/256-64),ro=(f[L+3]+.5)/410,rv=(f[L+5]+.5)/410,ru=9*ro/(6*ro-16*rv+12),rs=4*rv/(6*ro-16*rv+12),rl=z,ri=ru*rl/rs,G=rl,rf=(1-ru-rs)*rl/rs,q=2.69*ri-1.276*G-.414*rf,Z=-1.022*ri+1.978*G+.044*rf,$=.061*ri-.224*G+1.163*rf;o[_]=255*t(Math.min(q,1)),o[_+1]=255*t(Math.min(Z,1)),o[_+2]=255*t(Math.min($,1)),o[_+3]=255}else F("Unknown Photometric interpretation: "+v);return o},B.replaceIMG=function(r){null==r&&(r=document.getElementsByTagName("img"));for(var e=["tif","tiff","dng","cr2","nef"],t=0;t<r.length;t++){var n=r[t],a=n.getAttribute("src");if(null!=a){var i=a.split(".").pop().toLowerCase();if(-1!=e.indexOf(i)){var f=new XMLHttpRequest;B._xhrs.push(f),B._imgs.push(n),f.open("GET",a),f.responseType="arraybuffer",f.onload=B._imgLoaded,f.send()}}}},B._xhrs=[],B._imgs=[],B._imgLoaded=function(r){var e=B._xhrs.indexOf(r.target),t=B._imgs[e];B._xhrs.splice(e,1),B._imgs.splice(e,1),t.setAttribute("src",B.bufferToURI(r.target.response))},B.bufferToURI=function(r){var e=B.decode(r),t=e,n=0,a=t[0];e[0].subIFD&&(t=t.concat(e[0].subIFD));for(var i=0;i<t.length;i++){var f=t[i];if(null!=f.t258&&!(f.t258.length<3)){var o=f.t256*f.t257;o>n&&(n=o,a=f)}}B.decodeImage(r,a,e);var v=B.toRGBA8(a),u=a.width,s=a.height,l=document.createElement("canvas");l.width=u,l.height=s;var c=l.getContext("2d"),h=new ImageData(new Uint8ClampedArray(v.buffer),u,s);return c.putImageData(h,0,0),l.toDataURL()},B._binBE={nextZero:function(r,e){for(;0!=r[e];)e++;return e},readUshort:function(r,e){return r[e]<<8|r[e+1]},readShort:function(r,e){var t=B._binBE.ui8;return t[0]=r[e+1],t[1]=r[e+0],B._binBE.i16[0]},readInt:function(r,e){var t=B._binBE.ui8;return t[0]=r[e+3],t[1]=r[e+2],t[2]=r[e+1],t[3]=r[e+0],B._binBE.i32[0]},readUint:function(r,e){var t=B._binBE.ui8;return t[0]=r[e+3],t[1]=r[e+2],t[2]=r[e+1],t[3]=r[e+0],B._binBE.ui32[0]},readASCII:function(r,e,t){for(var n="",a=0;a<t;a++)n+=String.fromCharCode(r[e+a]);return n},readFloat:function(r,e){for(var t=B._binBE.ui8,n=0;n<4;n++)t[n]=r[e+3-n];return B._binBE.fl32[0]},readDouble:function(r,e){for(var t=B._binBE.ui8,n=0;n<8;n++)t[n]=r[e+7-n];return B._binBE.fl64[0]},writeUshort:function(r,e,t){r[e]=t>>8&255,r[e+1]=255&t},writeInt:function(r,e,t){var n=B._binBE.ui8;B._binBE.i32[0]=t,r[e+3]=n[0],r[e+2]=n[1],r[e+1]=n[2],r[e+0]=n[3]},writeUint:function(r,e,t){r[e]=t>>24&255,r[e+1]=t>>16&255,r[e+2]=t>>8&255,r[e+3]=t>>0&255},writeASCII:function(r,e,t){for(var n=0;n<t.length;n++)r[e+n]=t.charCodeAt(n)},writeDouble:function(r,e,t){B._binBE.fl64[0]=t;for(var n=0;n<8;n++)r[e+n]=B._binBE.ui8[7-n]}},B._binBE.ui8=new Uint8Array(8),B._binBE.i16=new Int16Array(B._binBE.ui8.buffer),B._binBE.i32=new Int32Array(B._binBE.ui8.buffer),B._binBE.ui32=new Uint32Array(B._binBE.ui8.buffer),B._binBE.fl32=new Float32Array(B._binBE.ui8.buffer),B._binBE.fl64=new Float64Array(B._binBE.ui8.buffer),B._binLE={nextZero:B._binBE.nextZero,readUshort:function(r,e){return r[e+1]<<8|r[e]},readShort:function(r,e){var t=B._binBE.ui8;return t[0]=r[e+0],t[1]=r[e+1],B._binBE.i16[0]},readInt:function(r,e){var t=B._binBE.ui8;return t[0]=r[e+0],t[1]=r[e+1],t[2]=r[e+2],t[3]=r[e+3],B._binBE.i32[0]},readUint:function(r,e){var t=B._binBE.ui8;return t[0]=r[e+0],t[1]=r[e+1],t[2]=r[e+2],t[3]=r[e+3],B._binBE.ui32[0]},readASCII:B._binBE.readASCII,readFloat:function(r,e){for(var t=B._binBE.ui8,n=0;n<4;n++)t[n]=r[e+n];return B._binBE.fl32[0]},readDouble:function(r,e){for(var t=B._binBE.ui8,n=0;n<8;n++)t[n]=r[e+n];return B._binBE.fl64[0]},writeUshort:function(r,e,t){r[e]=255&t,r[e+1]=t>>8&255},writeInt:function(r,e,t){var n=B._binBE.ui8;B._binBE.i32[0]=t,r[e+0]=n[0],r[e+1]=n[1],r[e+2]=n[2],r[e+3]=n[3]},writeUint:function(r,e,t){r[e]=t>>>0&255,r[e+1]=t>>>8&255,r[e+2]=t>>>16&255,r[e+3]=t>>>24&255},writeASCII:B._binBE.writeASCII},B._copyTile=function(r,e,t,n,a,i,f,o){for(var v=Math.min(e,a-f),u=Math.min(t,i-o),s=0;s<u;s++)for(var l=(o+s)*a+f,c=s*e,h=0;h<v;h++)n[l+h]=r[c+h]},B._inflateRaw=((M={}).H={},M.H.N=function(r,e){var t,n,a=Uint8Array,i=0,f=0,o=0,v=0,u=0,s=0,l=0,c=0,h=0;if(3==r[0]&&0==r[1])return e||new a(0);var d=M.H,w=d.b,g=d.e,_=d.R,b=d.n,p=d.A,m=d.Z,A=d.m,U=null==e;for(U&&(e=new a(r.length>>>2<<5));0==i;){if(i=w(r,h,1),f=w(r,h+1,2),h+=3,0==f){(7&h)!=0&&(h+=8-(7&h));var I=(h>>>3)+4,y=r[I-4]|r[I-3]<<8;U&&(e=M.H.W(e,c+y)),e.set(new a(r.buffer,r.byteOffset+I,y),c),h=I+y<<3,c+=y;continue}if(U&&(e=M.H.W(e,c+131072)),1==f&&(t=A.J,n=A.h,s=511,l=31),2==f){o=g(r,h,5)+257,v=g(r,h+5,5)+1,u=g(r,h+10,4)+4,h+=14;for(var E=1,D=0;D<38;D+=2)A.Q[D]=0,A.Q[D+1]=0;for(var D=0;D<u;D++){var k=g(r,h+3*D,3);A.Q[(A.X[D]<<1)+1]=k,k>E&&(E=k)}h+=3*u,b(A.Q,E),p(A.Q,E,A.u),t=A.w,n=A.d,h=_(A.u,(1<<E)-1,o+v,r,h,A.v);var B=d.V(A.v,0,o,A.C);s=(1<<B)-1;var F=d.V(A.v,o,v,A.D);l=(1<<F)-1,b(A.C,B),p(A.C,B,t),b(A.D,F),p(A.D,F,n)}for(;;){var x=t[m(r,h)&s];h+=15&x;var P=x>>>4;if(P>>>8==0)e[c++]=P;else if(256==P)break;else{var C=c+P-254;if(P>264){var H=A.q[P-257];C=c+(H>>>3)+g(r,h,7&H),h+=7&H}var L=n[m(r,h)&l];h+=15&L;var S=L>>>4,N=A.c[S],G=(N>>>4)+w(r,h,15&N);for(h+=15&N;c<C;)e[c]=e[c++-G],e[c]=e[c++-G],e[c]=e[c++-G],e[c]=e[c++-G];c=C}}}return e.length==c?e:e.slice(0,c)},M.H.W=function(r,e){var t=r.length;if(e<=t)return r;var n=new Uint8Array(t<<1);return n.set(r,0),n},M.H.R=function(r,e,t,n,a,i){for(var f=M.H.e,o=M.H.Z,v=0;v<t;){var u=r[o(n,a)&e];a+=15&u;var s=u>>>4;if(s<=15)i[v]=s,v++;else{var l=0,c=0;16==s?(c=3+f(n,a,2),a+=2,l=i[v-1]):17==s?(c=3+f(n,a,3),a+=3):18==s&&(c=11+f(n,a,7),a+=7);for(var h=v+c;v<h;)i[v]=l,v++}}return a},M.H.V=function(r,e,t,n){for(var a=0,i=0,f=n.length>>>1;i<t;){var o=r[i+e];n[i<<1]=0,n[(i<<1)+1]=o,o>a&&(a=o),i++}for(;i<f;)n[i<<1]=0,n[(i<<1)+1]=0,i++;return a},M.H.n=function(r,e){for(var t,n,a,i,f,o=M.H.m,v=r.length,u=o.j,i=0;i<=e;i++)u[i]=0;for(i=1;i<v;i+=2)u[r[i]]++;var s=o.K;for(n=1,t=0,u[0]=0;n<=e;n++)t=t+u[n-1]<<1,s[n]=t;for(a=0;a<v;a+=2)0!=(f=r[a+1])&&(r[a]=s[f],s[f]++)},M.H.A=function(r,e,t){for(var n=r.length,a=M.H.m.r,i=0;i<n;i+=2)if(0!=r[i+1])for(var f=i>>1,o=r[i+1],v=f<<4|o,u=e-o,s=r[i]<<u,l=s+(1<<u);s!=l;)t[a[s]>>>15-e]=v,s++},M.H.l=function(r,e){for(var t=M.H.m.r,n=15-e,a=0;a<r.length;a+=2){var i=r[a]<<e-r[a+1];r[a]=t[i]>>>n}},M.H.M=function(r,e,t){t<<=7&e;var n=e>>>3;r[n]|=t,r[n+1]|=t>>>8},M.H.I=function(r,e,t){t<<=7&e;var n=e>>>3;r[n]|=t,r[n+1]|=t>>>8,r[n+2]|=t>>>16},M.H.e=function(r,e,t){return(r[e>>>3]|r[(e>>>3)+1]<<8)>>>(7&e)&(1<<t)-1},M.H.b=function(r,e,t){return(r[e>>>3]|r[(e>>>3)+1]<<8|r[(e>>>3)+2]<<16)>>>(7&e)&(1<<t)-1},M.H.Z=function(r,e){return(r[e>>>3]|r[(e>>>3)+1]<<8|r[(e>>>3)+2]<<16)>>>(7&e)},M.H.i=function(r,e){return(r[e>>>3]|r[(e>>>3)+1]<<8|r[(e>>>3)+2]<<16|r[(e>>>3)+3]<<24)>>>(7&e)},M.H.m=(D=Uint16Array,k=Uint32Array,{K:new D(16),j:new D(16),X:[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],S:[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,999,999,999],T:[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0],q:new D(32),p:[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,65535,65535],z:[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0],c:new k(32),J:new D(512),_:[],h:new D(32),$:[],w:new D(32768),C:[],v:[],d:new D(32768),D:[],u:new D(512),Q:[],r:new D(32768),s:new k(286),Y:new k(30),a:new k(19),t:new k(15e3),k:new D(65536),g:new D(32768)}),function(){for(var r=M.H.m,e=0;e<32768;e++){var t=e;t=(4278255360&(t=(4042322160&(t=(3435973836&(t=(2863311530&t)>>>1|(1431655765&t)<<1))>>>2|(858993459&t)<<2))>>>4|(252645135&t)<<4))>>>8|(16711935&t)<<8,r.r[e]=(t>>>16|t<<16)>>>17}function n(r,e,t){for(;0!=e--;)r.push(0,t)}for(var e=0;e<32;e++)r.q[e]=r.S[e]<<3|r.T[e],r.c[e]=r.p[e]<<4|r.z[e];n(r._,144,8),n(r._,112,9),n(r._,24,7),n(r._,8,8),M.H.n(r._,9),M.H.A(r._,9,r.J),M.H.l(r._,9),n(r.$,32,5),M.H.n(r.$,5),M.H.A(r.$,5,r.h),M.H.l(r.$,5),n(r.Q,19,0),n(r.C,286,0),n(r.D,30,0),n(r.v,320,0)}(),M.H.N),B.LosslessJpegDecode=function(){var r,e;function t(){return r[e++]}function n(){return r[e++]<<8|r[e++]}function a(r){for(var e=r.c,t=r.f;e<25&&r.d<r.a;){var n=r.data[r.d++];255==n&&!r.b&&r.d++,t=t<<8|n,e+=8}if(e<0)throw"e";r.c=e,r.f=t}function i(r,e){return e.c<r&&a(e),e.f>>(e.c-=r)&65535>>16-r}function f(r,e){var t=r[0],n=0,i=255;e.c<16&&a(e);var f=e.f>>e.c-8&255;for(i=t[(n=r[1][f])+3],e.c-=t[n+2];255==i;)n=t[n+(e.f>>--e.c&1)],i=t[n+3];return i}function o(r,e){return r<32768>>16-e&&(r+=-(1<<e)+1),r}function v(r,e,t,n,a,v){for(var u=0,s=0;s<v;s++){for(var l=s*e,c=0;c<e;c+=a){u++;for(var h=0;h<a;h++)r[l+c+h]=function(r,e){var t=f(r,e);return 0==t?0:16==t?-32768:o(i(t,e),t)}(n[h],t)}if(0!=t.e&&u%t.e==0&&0!=s){for(var d=t.d,w=t.data;255!=w[d]||!(208<=w[d+1]&&w[d+1]<=215);)d--;t.d=d+2,t.f=0,t.c=0}}}function u(r,e,t,n,a,i,f,o){for(var v=t*f,u=a;u<i;u++)r[u]+=1<<o-1;for(var s=f;s<v;s+=f)for(var u=a;u<i;u++)r[s+u]+=r[s+u-f];for(var l=1;l<n;l++){for(var c=l*v,u=a;u<i;u++)r[c+u]+=r[c+u-v];for(var s=f;s<v;s+=f)for(var u=a;u<i;u++){var h=c+s+u,d=h-v,w=r[h-f],g=0;if(0==e)g=0;else if(1==e)g=w;else if(2==e)g=r[d];else if(3==e)g=r[d-f];else if(4==e)g=w+(r[d]-r[d-f]);else if(5==e)g=w+(r[d]-r[d-f]>>>1);else if(6==e)g=r[d]+(w-r[d-f]>>>1);else if(7==e)g=w+r[d]>>>1;else throw e;r[h]+=g}}}return function(a){if(r=a,e=0,65496!=n())throw"e";for(var s=[],l=0,c=0,h=0,d=[],w=[],g=[],_=0,b=0,p=0;;){var m=n();if(65535==m){e--;continue}var A=n();if(65475==m){c=t(),b=n(),p=n(),_=t();for(var U=0;U<_;U++){var I=t(),y=t();if(0!=t())throw"e";s[I]=[U,y>>4,15&y]}}else if(65476==m)for(var E=e+A-2;e<E;)!function(r){for(var e=t(),n=[0,0,0,255],a=[],i=0;i<16;i++)a[i]=t();for(var i=0;i<16;i++)for(var f=0;f<a[i];f++){var o=function r(e,t,n,a){if(255!=e[t+3])return 0;if(0==n)return t;for(var i=0;i<2;i++){0==e[t+i]&&(e[t+i]=e.length,e.push(0,0,a,255));var f=r(e,e[t+i],n-1,a+1);if(0!=f)return f}return 0}(n,0,i+1,1);n[o+3]=t()}var v=new Uint8Array(256);r[e]=[new Uint8Array(n),v];for(var i=0;i<256;i++){for(var u=8,s=i,l=0;255==n[l+3]&&0!=u;)l=n[l+(s>>--u&1)];v[i]=l}}(w);else if(65498==m){e++;for(var U=0;U<_;U++){var M=s[t()];g[M[0]]=w[t()>>>4],d[M[0]]=M.slice(1)}l=t(),e+=2;break}else 65501==m?h=n():e+=A-2}var D=new(c>8?Uint16Array:Uint8Array)(b*p*_),k={c:0,f:0,b:8==l,d:e,data:r,a:r.length,e:h};if(k.b)!function(t,n,a,v,u){for(var s=r.length-e,l=0;l<s;l+=4){var c=r[e+l];r[e+l]=r[e+l+3],r[e+l+3]=c;var c=r[e+l+1];r[e+l+1]=r[e+l+2],r[e+l+2]=c}for(var h=0;h<u;h++)for(var d=32768,w=32768,g=0;g<n;g+=2){var _=f(v,a),b=f(v,a);0!=_&&(d+=o(i(_,a),_)),0!=b&&(w+=o(i(b,a),b)),t[h*n+g]=65535&d,t[h*n+g+1]=65535&w}}(D,p*_,k,g[0],b);else{for(var B=[],F=0,x=0,U=0;U<_;U++){var P=d[U],C=P[0],H=P[1];C>F&&(F=C),H>x&&(x=H),B.push(C*H)}if(1!=F||1!=x){if(3!=_||1!=B[1]||1!=B[2]||2!=F||1!=x&&2!=x)throw"e";for(var L=[],S=0,U=0;U<_;U++){for(var N=0;N<B[U];N++)L.push(g[U]);S+=B[U]}var G=p/F,J=b/x,O=G*J;v(D,G*S,k,L,S,J),u(D,l,G,J,S-2,S,S,c);var W=new Uint16Array(O*B[0]);if(2==F&&2==x){for(var U=0;U<O;U++)W[4*U]=D[6*U],W[4*U+1]=D[6*U+1],W[4*U+2]=D[6*U+2],W[4*U+3]=D[6*U+3];u(W,l,4*G,J,0,1,1,c);for(var U=0;U<O;U++)D[6*U]=W[4*U],D[6*U+1]=W[4*U+1],D[6*U+2]=W[4*U+2],D[6*U+3]=W[4*U+3]}if(2==F&&1==x){for(var U=0;U<O;U++)W[2*U]=D[4*U],W[2*U+1]=D[4*U+1];u(W,l,2*G,J,0,1,1,c);for(var U=0;U<O;U++)D[4*U]=W[2*U],D[4*U+1]=W[2*U+1]}for(var j=D.slice(0),H=0;H<b;H++)if(2==x)for(var C=0;C<p;C++){var T=(H*p+C)*_,R=((H>>>1)*G+(C>>>1))*S,Q=(1&H)*2+(1&C);D[T]=j[R+Q],D[T+1]=j[R+4],D[T+2]=j[R+5]}else for(var C=0;C<p;C++){var T=(H*p+C)*_,R=(H*G+(C>>>1))*S,Q=1&C;D[T]=j[R+Q],D[T+1]=j[R+2],D[T+2]=j[R+3]}}else if(v(D,p*_,k,g,_,b),0==h)u(D,l,p,b,0,_,_,c);else for(var q=Math.floor(h/p),H=0;H<b;H+=q){var Z=D.slice(H*p*_,(H+q)*p*_);u(Z,l,p,q,0,_,_,c),D.set(Z,H*p*_)}}return[D,p,b,_]}}(),function(){function r(r){for(var e=[[],[],[]],t=Math.max(2,r.w+32>>>6),n=0;n<3;n++)for(var a=0;a<41;a++)e[n][a]=[t,1];return e}function e(r,e){var t=0,n=8-r.a;if(r.j,r.a,e){if(e>=n)do t<<=n,e-=n,t|=r[r.j]&(1<<n)-1,r.j++,n=8;while(e>=8);e&&(t<<=e,n-=e,t|=r[r.j]>>>n&(1<<e)-1),r.a=8-n}return t}function t(r,t,n,a,i,f,o,v){null==v&&(v=0);var u,s,l,c,h,d,w=f+1,g=w%2,_=0,b=a[i],p=a[i-1],m=a[i-2][w],A=p[w-1],U=p[w],I=p[w+1],y=b[w-1],E=b[w+1],M=Math.abs;if(g&&(l=M(I-U),c=M(m-U),h=M(A-U)),g){if(d=(d=l>h&&c<l?m+A:l<h&&c<h?m+I:I+A)+2*U>>>2,v){b[w]=d;return}u=t.t*t.c[r.g+U-m]+t.c[r.g+A-U]}else d=U>A&&U>I||U<A&&U<I?E+y+2*U>>>2:y+E>>>1,u=t.t*t.c[r.g+U-A]+t.c[r.g+A-y];s=M(u);var D=function(r){for(var e=-1,t=0;!t;e++)t=r[r.j]>>>7-r.a&1,r.a++,r.a&=7,!r.a&&r.j++;return e}(n);if(D<r.n-t.v-1){var k=function(r,e){var t=0;if(e<r)for(;t<=14&&e<<++t<r;);return t}(o[s][0],o[s][1]);_=e(n,k)+(D<<k)}else _=e(n,t.v)+1;_=1&_?-1-(_>>>1):_>>>1,o[s][0]+=M(_),o[s][1]==r.f&&(o[s][0]>>>=1,o[s][1]>>>=1),o[s][1]++,d=u<0?d-_:d+_,r.i&&(d<0?d+=t.w:d>r.g&&(d-=t.w)),b[w]=d>=0?Math.min(d,r.g):0}function n(r,e,t){for(var n=r[0].length,a=e;a<=t;a++)r[a][0]=r[a-1][1],r[a][n-1]=r[a-1][n-2]}function a(r){n(r,7,12),n(r,2,4),n(r,15,17)}function i(r,e,n,i,f,o,v,u,s,l,c,h,d){for(var w=0,g=1,_=f<13&&f>4;g<r.m;)w<r.m&&(t(r,e,n,i,f,w,v[s],r.h&&(_&&l||!_&&(c||(w&h)==d))),t(r,e,n,i,o,w,v[s],r.h&&(!_&&l||_&&(c||(w&h)==d))),w+=2),w>8&&(t(r,e,n,i,f,g,u[s]),t(r,e,n,i,o,g,u[s]),g+=2);a(i)}B._decompressRAF=function(e,t){var n=function(r){var e=B._binBE.readUshort,t={b:e(r,0),i:r[2],C:r[3],u:r[4],q:e(r,5),k:e(r,7),e:e(r,9),l:e(r,11),s:r[13],d:e(r,14)};if(18771!=t.b||t.i>1||t.q<6||t.q%6||t.e<768||t.e%24||768!=t.l||t.k<t.l||t.k%t.l||t.k-t.e>=t.l||t.s>16||t.s!=t.k/t.l||t.s!=Math.ceil(t.e/t.l)||t.d!=t.q/6||12!=t.u&&14!=t.u&&16!=t.u||16!=t.C&&0!=t.C)throw"Invalid data";if(0==t.i)throw"Not implemented. We need this file!";return t.h=16==t.C,t.m=(t.h?2*t.l/3:t.l>>>1)|0,t.A=t.m+2,t.f=64,t.g=(1<<t.u)-1,t.n=4*t.u,t}(e),f=function(r,e){var t=Array(e.s),n=4*e.s,a=16+n;12&n&&(a+=16-(12&n));for(var i=0,f=16;i<e.s;f+=4){var o=B._binBE.readUint(r,f);t[i]=r.slice(a,a+o),t[i].j=0,t[i].a=0,a+=o,i++}if(a!=r.length)throw"Invalid data";return t}(e,n),o=(d=h={c:new Int8Array(2<<n.u)},w=[0,18,67,276,n.g],d.o=0,d.w=(w[4]+0)/1+1|0,d.v=Math.ceil(Math.log2(d.w)),d.t=9,function(r,e){for(var t=-e[4],n=0;t<=e[4];n++,t++)r[n]=t<=-e[3]?-4:t<=-e[2]?-3:t<=-e[1]?-2:t<-e[0]?-1:t<=e[0]?0:t<e[1]?1:t<e[2]?2:t<e[3]?3:4}(d.c,w),h),v=new Int16Array(n.e*n.q);null==t&&(t=n.h?[[1,1,0,1,1,2],[1,1,2,1,1,0],[2,0,1,0,2,1],[1,1,2,1,1,0],[1,1,0,1,1,2],[0,2,1,2,0,1]]:[[0,1],[3,2]]);for(var u=[[0,3],[1,4],[5,11],[6,12],[13,16],[14,17]],s=[],l=0;l<18;l++)s[l]=new Uint16Array(n.A);for(var c=0;c<n.s;c++){for(var h,d,w,g,_=r(o),b=r(o),l=0;l<18;l++)for(var p=0;p<n.A;p++)s[l][p]=0;for(var m=0;m<n.d;m++){i(n,o,g=f[c],s,2,7,_,b,0,0,1,0,8),i(n,o,g,s,8,15,_,b,1,0,1,0,8),i(n,o,g,s,3,9,_,b,2,1,0,3,0),i(n,o,g,s,10,16,_,b,0,0,0,3,2),i(n,o,g,s,4,11,_,b,1,0,0,3,2),i(n,o,g,s,12,17,_,b,2,1,0,3,0);for(var l=0;l<6;l++)for(var p=0;p<n.A;p++)s[u[l][0]][p]=s[u[l][1]][p];!function(r,e,t,n,a,i){var f=i.length,o=r.l;a+1==r.s&&(o=r.e-a*r.l);for(var v=6*r.e*n+a*r.l,u=0;u<6;u++){for(var s=0;s<o;s++){var l,c=i[u%f][s%f];l=0==c?2+(u>>>1):2==c?15+(u>>>1):7+u;var h=r.h?(2*s/3&2147483646|s%3&1)+(s%3>>>1):s>>>1;e[v+s]=t[l][h+1]}v+=r.e}}(n,v,s,m,c,t);for(var l=2;l<18;l++)if(-1==[5,6,13,14].indexOf(l))for(var p=0;p<n.A;p++)s[l][p]=0;a(s)}}return v}}()}()}}]);
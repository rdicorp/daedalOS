"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1622],
  {
    51526: function (e, t, r) {
      r.d(t, {
        M: function () {
          return w;
        },
      });
      var n = r(85893),
        i = r(67294),
        o = r(58868);
      function a() {
        let e = (0, i.useRef)(!1);
        return (
          (0, o.L)(
            () => (
              (e.current = !0),
              () => {
                e.current = !1;
              }
            ),
            []
          ),
          e
        );
      }
      var s = r(26166),
        l = r(240),
        u = r(96681),
        c = r(16014);
      class h extends i.Component {
        getSnapshotBeforeUpdate(e) {
          let t = this.props.childRef.current;
          if (t && e.isPresent && !this.props.isPresent) {
            let e = this.props.sizeRef.current;
            (e.height = t.offsetHeight || 0), (e.width = t.offsetWidth || 0), (e.top = t.offsetTop), (e.left = t.offsetLeft);
          }
          return null;
        }
        componentDidUpdate() { }
        render() {
          return this.props.children;
        }
      }
      function f({ children: e, isPresent: t }) {
        let r = (0, i.useId)(),
          o = (0, i.useRef)(null),
          a = (0, i.useRef)({ width: 0, height: 0, top: 0, left: 0 }),
          { nonce: s } = (0, i.useContext)(c._);
        return (
          (0, i.useInsertionEffect)(() => {
            let { width: e, height: n, top: i, left: l } = a.current;
            if (t || !o.current || !e || !n) return;
            o.current.dataset.motionPopId = r;
            let u = document.createElement("style");
            return (
              s && (u.nonce = s),
              document.head.appendChild(u),
              u.sheet &&
              u.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${n}px !important;
            top: ${i}px !important;
            left: ${l}px !important;
          }
        `),
              () => {
                document.head.removeChild(u);
              }
            );
          }, [t]),
          (0, n.jsx)(h, { isPresent: t, childRef: o, sizeRef: a, children: i.cloneElement(e, { ref: o }) })
        );
      }
      let d = ({ children: e, initial: t, isPresent: r, onExitComplete: o, custom: a, presenceAffectsLayout: s, mode: c }) => {
        let h = (0, u.h)(p),
          d = (0, i.useId)(),
          g = (0, i.useMemo)(
            () => ({
              id: d,
              initial: t,
              isPresent: r,
              custom: a,
              onExitComplete: (e) => {
                for (let t of (h.set(e, !0), h.values())) if (!t) return;
                o && o();
              },
              register: (e) => (h.set(e, !1), () => h.delete(e)),
            }),
            s ? [Math.random()] : [r]
          );
        return (
          (0, i.useMemo)(() => {
            h.forEach((e, t) => h.set(t, !1));
          }, [r]),
          i.useEffect(() => {
            r || h.size || !o || o();
          }, [r]),
          "popLayout" === c && (e = (0, n.jsx)(f, { isPresent: r, children: e })),
          (0, n.jsx)(l.O.Provider, { value: g, children: e })
        );
      };
      function p() {
        return new Map();
      }
      var g = r(25364),
        y = r(45487);
      let b = (e) => e.key || "",
        w = ({ children: e, custom: t, initial: r = !0, onExitComplete: l, exitBeforeEnter: u, presenceAffectsLayout: c = !0, mode: h = "sync" }) => {
          var f;
          (0, y.k)(!u, "Replace exitBeforeEnter with mode='wait'");
          let p =
            (0, i.useContext)(g.p).forceRender ||
            (function () {
              let e = a(),
                [t, r] = (0, i.useState)(0),
                n = (0, i.useCallback)(() => {
                  e.current && r(t + 1);
                }, [t]);
              return [(0, i.useCallback)(() => s.Wi.postRender(n), [n]), t];
            })()[0],
            w = a(),
            m = (function (e) {
              let t = [];
              return (
                i.Children.forEach(e, (e) => {
                  (0, i.isValidElement)(e) && t.push(e);
                }),
                t
              );
            })(e),
            v = m,
            E = (0, i.useRef)(new Map()).current,
            x = (0, i.useRef)(v),
            A = (0, i.useRef)(new Map()).current,
            k = (0, i.useRef)(!0);
          if (
            ((0, o.L)(() => {
              (k.current = !1),
                (function (e, t) {
                  e.forEach((e) => {
                    let r = b(e);
                    t.set(r, e);
                  });
                })(m, A),
                (x.current = v);
            }),
              (f = () => {
                (k.current = !0), A.clear(), E.clear();
              }),
              (0, i.useEffect)(() => () => f(), []),
              k.current)
          )
            return (0, n.jsx)(n.Fragment, { children: v.map((e) => (0, n.jsx)(d, { isPresent: !0, initial: !!r && void 0, presenceAffectsLayout: c, mode: h, children: e }, b(e))) });
          v = [...v];
          let B = x.current.map(b),
            U = m.map(b),
            I = B.length;
          for (let e = 0; e < I; e++) {
            let t = B[e];
            -1 !== U.indexOf(t) || E.has(t) || E.set(t, void 0);
          }
          return (
            "wait" === h && E.size && (v = []),
            E.forEach((e, r) => {
              if (-1 !== U.indexOf(r)) return;
              let i = A.get(r);
              if (!i) return;
              let o = B.indexOf(r),
                a = e;
              a ||
                ((a = (0, n.jsx)(
                  d,
                  {
                    isPresent: !1,
                    onExitComplete: () => {
                      E.delete(r);
                      let e = Array.from(A.keys()).filter((e) => !U.includes(e));
                      if (
                        (e.forEach((e) => A.delete(e)),
                          (x.current = m.filter((t) => {
                            let n = b(t);
                            return n === r || e.includes(n);
                          })),
                          !E.size)
                      ) {
                        if (!1 === w.current) return;
                        p(), l && l();
                      }
                    },
                    custom: t,
                    presenceAffectsLayout: c,
                    mode: h,
                    children: i,
                  },
                  b(i)
                )),
                  E.set(r, a)),
                v.splice(o, 0, a);
            }),
            (v = v.map((e) => {
              let t = e.key;
              return E.has(t) ? e : (0, n.jsx)(d, { isPresent: !0, presenceAffectsLayout: c, mode: h, children: e }, b(e));
            })),
            (0, n.jsx)(n.Fragment, { children: E.size ? v : v.map((e) => (0, i.cloneElement)(e)) })
          );
        };
    },
    45487: function (e, t, r) {
      r.d(t, {
        K: function () {
          return i;
        },
        k: function () {
          return o;
        },
      });
      var n = r(81662);
      let i = n.Z,
        o = n.Z;
    },
    11093: function (e, t, r) {
      r.d(t, {
        wQ: function () {
          return na;
        },
        s_: function () {
          return nw;
        },
        $3: function () {
          return ns;
        },
        o$: function () {
          return nx;
        },
        _J: function () {
          return nF;
        },
        uD: function () {
          return n_;
        },
        L6: function () {
          return nH;
        },
        Z5: function () {
          return nv;
        },
        q9: function () {
          return ng;
        },
        uM: function () {
          return nE;
        },
      });
      var n,
        i,
        o,
        a,
        s = {};
      function l(e) {
        if (!Number.isSafeInteger(e) || e < 0) throw Error(`Wrong positive integer: ${e}`);
      }
      function u(e, ...t) {
        if (!(e instanceof Uint8Array)) throw Error("Expected Uint8Array");
        if (t.length > 0 && !t.includes(e.length)) throw Error(`Expected Uint8Array of length ${t}, not of length=${e.length}`);
      }
      r.r(s),
        r.d(s, {
          dQ: function () {
            return Z;
          },
          ci: function () {
            return K;
          },
          bytesToNumberBE: function () {
            return T;
          },
          ty: function () {
            return P;
          },
          eV: function () {
            return V;
          },
          n$: function () {
            return J;
          },
          ql: function () {
            return F;
          },
          hexToBytes: function () {
            return q;
          },
          tL: function () {
            return D;
          },
          S5: function () {
            return M;
          },
          FF: function () {
            return Q;
          },
        });
      var c = function (e) {
        if ("function" != typeof e || "function" != typeof e.create) throw Error("Hash should be wrapped by utils.wrapConstructor");
        l(e.outputLen), l(e.blockLen);
      },
        h = function (e, t = !0) {
          if (e.destroyed) throw Error("Hash instance has been destroyed");
          if (t && e.finished) throw Error("Hash#digest() has already been called");
        },
        f = function (e, t) {
          u(e);
          let r = t.outputLen;
          if (e.length < r) throw Error(`digestInto() expects output buffer of length at least ${r}`);
        };
      let d = "object" == typeof globalThis && "crypto" in globalThis ? globalThis.crypto : void 0,
        p = (e) => e instanceof Uint8Array,
        g = (e) => new DataView(e.buffer, e.byteOffset, e.byteLength),
        y = (e, t) => (e << (32 - t)) | (e >>> t);
      if (68 !== new Uint8Array(new Uint32Array([287454020]).buffer)[0]) throw Error("Non little-endian hardware is not supported");
      let b = Array.from({ length: 256 }, (e, t) => t.toString(16).padStart(2, "0"));
      function w(e) {
        if (!p(e)) throw Error("Uint8Array expected");
        let t = "";
        for (let r = 0; r < e.length; r++) t += b[e[r]];
        return t;
      }
      function m(e) {
        if ("string" != typeof e) throw Error("hex string expected, got " + typeof e);
        let t = e.length;
        if (t % 2) throw Error("padded hex string expected, got unpadded hex of length " + t);
        let r = new Uint8Array(t / 2);
        for (let t = 0; t < r.length; t++) {
          let n = 2 * t,
            i = Number.parseInt(e.slice(n, n + 2), 16);
          if (Number.isNaN(i) || i < 0) throw Error("Invalid byte sequence");
          r[t] = i;
        }
        return r;
      }
      function v(e) {
        if (
          ("string" == typeof e &&
            (e = (function (e) {
              if ("string" != typeof e) throw Error(`utf8ToBytes expected string, got ${typeof e}`);
              return new Uint8Array(new TextEncoder().encode(e));
            })(e)),
            !p(e))
        )
          throw Error(`expected Uint8Array, got ${typeof e}`);
        return e;
      }
      function E(...e) {
        let t = new Uint8Array(e.reduce((e, t) => e + t.length, 0)),
          r = 0;
        return (
          e.forEach((e) => {
            if (!p(e)) throw Error("Uint8Array expected");
            t.set(e, r), (r += e.length);
          }),
          t
        );
      }
      class x {
        clone() {
          return this._cloneInto();
        }
      }
      function A(e) {
        let t = (t) => e().update(v(t)).digest(),
          r = e();
        return (t.outputLen = r.outputLen), (t.blockLen = r.blockLen), (t.create = () => e()), t;
      }
      function k(e = 32) {
        if (d && "function" == typeof d.getRandomValues) return d.getRandomValues(new Uint8Array(e));
        throw Error("crypto.getRandomValues must be defined");
      }
      class B extends x {
        constructor(e, t, r, n) {
          super(),
            (this.blockLen = e),
            (this.outputLen = t),
            (this.padOffset = r),
            (this.isLE = n),
            (this.finished = !1),
            (this.length = 0),
            (this.pos = 0),
            (this.destroyed = !1),
            (this.buffer = new Uint8Array(e)),
            (this.view = g(this.buffer));
        }
        update(e) {
          h(this);
          let { view: t, buffer: r, blockLen: n } = this,
            i = (e = v(e)).length;
          for (let o = 0; o < i;) {
            let a = Math.min(n - this.pos, i - o);
            if (a === n) {
              let t = g(e);
              for (; n <= i - o; o += n) this.process(t, o);
              continue;
            }
            r.set(e.subarray(o, o + a), this.pos), (this.pos += a), (o += a), this.pos === n && (this.process(t, 0), (this.pos = 0));
          }
          return (this.length += e.length), this.roundClean(), this;
        }
        digestInto(e) {
          h(this), f(e, this), (this.finished = !0);
          let { buffer: t, view: r, blockLen: n, isLE: i } = this,
            { pos: o } = this;
          (t[o++] = 128), this.buffer.subarray(o).fill(0), this.padOffset > n - o && (this.process(r, 0), (o = 0));
          for (let e = o; e < n; e++) t[e] = 0;
          !(function (e, t, r, n) {
            if ("function" == typeof e.setBigUint64) return e.setBigUint64(t, r, n);
            let i = BigInt(32),
              o = BigInt(4294967295),
              a = Number((r >> i) & o),
              s = Number(r & o),
              l = n ? 4 : 0,
              u = n ? 0 : 4;
            e.setUint32(t + l, a, n), e.setUint32(t + u, s, n);
          })(r, n - 8, BigInt(8 * this.length), i),
            this.process(r, 0);
          let a = g(e),
            s = this.outputLen;
          if (s % 4) throw Error("_sha2: outputLen should be aligned to 32bit");
          let l = s / 4,
            u = this.get();
          if (l > u.length) throw Error("_sha2: outputLen bigger than state");
          for (let e = 0; e < l; e++) a.setUint32(4 * e, u[e], i);
        }
        digest() {
          let { buffer: e, outputLen: t } = this;
          this.digestInto(e);
          let r = e.slice(0, t);
          return this.destroy(), r;
        }
        _cloneInto(e) {
          e || (e = new this.constructor()), e.set(...this.get());
          let { blockLen: t, buffer: r, length: n, finished: i, destroyed: o, pos: a } = this;
          return (e.length = n), (e.pos = a), (e.finished = i), (e.destroyed = o), n % t && e.buffer.set(r), e;
        }
      }
      let U = (e, t, r) => (e & t) ^ (~e & r),
        I = (e, t, r) => (e & t) ^ (e & r) ^ (t & r),
        S = new Uint32Array([
          1116352408,
          1899447441,
          3049323471,
          3921009573,
          961987163,
          1508970993,
          2453635748,
          2870763221,
          3624381080,
          310598401,
          607225278,
          1426881987,
          1925078388,
          2162078206,
          2614888103,
          3248222580,
          3835390401,
          4022224774,
          264347078,
          604807628,
          770255983,
          1249150122,
          1555081692,
          1996064986,
          2554220882,
          2821834349,
          2952996808,
          3210313671,
          3336571891,
          3584528711,
          113926993,
          338241895,
          666307205,
          773529912,
          1294757372,
          1396182291,
          1695183700,
          1986661051,
          2177026350,
          2456956037,
          2730485921,
          2820302411,
          3259730800,
          3345764771,
          3516065817,
          3600352804,
          4094571909,
          275423344,
          430227734,
          506948616,
          659060556,
          883997877,
          958139571,
          1322822218,
          1537002063,
          1747873779,
          1955562222,
          2024104815,
          2227730452,
          2361852424,
          2428436474,
          2756734187,
          3204031479,
          3329325298,
        ]),
        L = new Uint32Array([1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225]),
        H = new Uint32Array(64);
      class $ extends B {
        constructor() {
          super(64, 32, 8, !1), (this.A = 0 | L[0]), (this.B = 0 | L[1]), (this.C = 0 | L[2]), (this.D = 0 | L[3]), (this.E = 0 | L[4]), (this.F = 0 | L[5]), (this.G = 0 | L[6]), (this.H = 0 | L[7]);
        }
        get() {
          let { A: e, B: t, C: r, D: n, E: i, F: o, G: a, H: s } = this;
          return [e, t, r, n, i, o, a, s];
        }
        set(e, t, r, n, i, o, a, s) {
          (this.A = 0 | e), (this.B = 0 | t), (this.C = 0 | r), (this.D = 0 | n), (this.E = 0 | i), (this.F = 0 | o), (this.G = 0 | a), (this.H = 0 | s);
        }
        process(e, t) {
          for (let r = 0; r < 16; r++, t += 4) H[r] = e.getUint32(t, !1);
          for (let e = 16; e < 64; e++) {
            let t = H[e - 15],
              r = H[e - 2],
              n = y(t, 7) ^ y(t, 18) ^ (t >>> 3),
              i = y(r, 17) ^ y(r, 19) ^ (r >>> 10);
            H[e] = (i + H[e - 7] + n + H[e - 16]) | 0;
          }
          let { A: r, B: n, C: i, D: o, E: a, F: s, G: l, H: u } = this;
          for (let e = 0; e < 64; e++) {
            let t = (u + (y(a, 6) ^ y(a, 11) ^ y(a, 25)) + U(a, s, l) + S[e] + H[e]) | 0,
              c = ((y(r, 2) ^ y(r, 13) ^ y(r, 22)) + I(r, n, i)) | 0;
            (u = l), (l = s), (s = a), (a = (o + t) | 0), (o = i), (i = n), (n = r), (r = (t + c) | 0);
          }
          (r = (r + this.A) | 0),
            (n = (n + this.B) | 0),
            (i = (i + this.C) | 0),
            (o = (o + this.D) | 0),
            (a = (a + this.E) | 0),
            (s = (s + this.F) | 0),
            (l = (l + this.G) | 0),
            (u = (u + this.H) | 0),
            this.set(r, n, i, o, a, s, l, u);
        }
        roundClean() {
          H.fill(0);
        }
        destroy() {
          this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
        }
      }
      class _ extends $ {
        constructor() {
          super(), (this.A = -1056596264), (this.B = 914150663), (this.C = 812702999), (this.D = -150054599), (this.E = -4191439), (this.F = 1750603025), (this.G = 1694076839), (this.H = -1090891868), (this.outputLen = 28);
        }
      }
      let C = A(() => new $());
      A(() => new _()), BigInt(0);
      let R = BigInt(1),
        O = BigInt(2),
        N = (e) => e instanceof Uint8Array,
        j = Array.from({ length: 256 }, (e, t) => t.toString(16).padStart(2, "0"));
      function K(e) {
        if (!N(e)) throw Error("Uint8Array expected");
        let t = "";
        for (let r = 0; r < e.length; r++) t += j[e[r]];
        return t;
      }
      function z(e) {
        if ("string" != typeof e) throw Error("hex string expected, got " + typeof e);
        return BigInt("" === e ? "0" : `0x${e}`);
      }
      function q(e) {
        if ("string" != typeof e) throw Error("hex string expected, got " + typeof e);
        let t = e.length;
        if (t % 2) throw Error("padded hex string expected, got unpadded hex of length " + t);
        let r = new Uint8Array(t / 2);
        for (let t = 0; t < r.length; t++) {
          let n = 2 * t,
            i = Number.parseInt(e.slice(n, n + 2), 16);
          if (Number.isNaN(i) || i < 0) throw Error("Invalid byte sequence");
          r[t] = i;
        }
        return r;
      }
      function T(e) {
        return z(K(e));
      }
      function P(e) {
        if (!N(e)) throw Error("Uint8Array expected");
        return z(K(Uint8Array.from(e).reverse()));
      }
      function D(e, t) {
        return q(e.toString(16).padStart(2 * t, "0"));
      }
      function M(e, t) {
        return D(e, t).reverse();
      }
      function F(e, t, r) {
        let n;
        if ("string" == typeof t)
          try {
            n = q(t);
          } catch (r) {
            throw Error(`${e} must be valid hex string, got "${t}". Cause: ${r}`);
          }
        else if (N(t)) n = Uint8Array.from(t);
        else throw Error(`${e} must be hex string or Uint8Array`);
        let i = n.length;
        if ("number" == typeof r && i !== r) throw Error(`${e} expected ${r} bytes, got ${i}`);
        return n;
      }
      function V(...e) {
        let t = new Uint8Array(e.reduce((e, t) => e + t.length, 0)),
          r = 0;
        return (
          e.forEach((e) => {
            if (!N(e)) throw Error("Uint8Array expected");
            t.set(e, r), (r += e.length);
          }),
          t
        );
      }
      let Z = (e) => (O << BigInt(e - 1)) - R,
        G = (e) => new Uint8Array(e),
        W = (e) => Uint8Array.from(e);
      function J(e, t, r) {
        if ("number" != typeof e || e < 2) throw Error("hashLen must be a number");
        if ("number" != typeof t || t < 2) throw Error("qByteLen must be a number");
        if ("function" != typeof r) throw Error("hmacFn must be a function");
        let n = G(e),
          i = G(e),
          o = 0,
          a = () => {
            n.fill(1), i.fill(0), (o = 0);
          },
          s = (...e) => r(i, n, ...e),
          l = (e = G()) => {
            (i = s(W([0]), e)), (n = s()), 0 !== e.length && ((i = s(W([1]), e)), (n = s()));
          },
          u = () => {
            if (o++ >= 1e3) throw Error("drbg: tried 1000 values");
            let e = 0,
              r = [];
            for (; e < t;) {
              let t = (n = s()).slice();
              r.push(t), (e += n.length);
            }
            return V(...r);
          };
        return (e, t) => {
          let r;
          for (a(), l(e); !(r = t(u()));) l();
          return a(), r;
        };
      }
      let Y = {
        bigint: (e) => "bigint" == typeof e,
        function: (e) => "function" == typeof e,
        boolean: (e) => "boolean" == typeof e,
        string: (e) => "string" == typeof e,
        isSafeInteger: (e) => Number.isSafeInteger(e),
        array: (e) => Array.isArray(e),
        field: (e, t) => t.Fp.isValid(e),
        hash: (e) => "function" == typeof e && Number.isSafeInteger(e.outputLen),
      };
      function Q(e, t, r = {}) {
        let n = (t, r, n) => {
          let i = Y[r];
          if ("function" != typeof i) throw Error(`Invalid validator "${r}", expected function`);
          let o = e[t];
          if ((!n || void 0 !== o) && !i(o, e)) throw Error(`Invalid param ${String(t)}=${o} (${typeof o}), expected ${r}`);
        };
        for (let [e, r] of Object.entries(t)) n(e, r, !1);
        for (let [e, t] of Object.entries(r)) n(e, t, !0);
        return e;
      }
            /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */ let X = BigInt(0),
        ee = BigInt(1),
        et = BigInt(2),
        er = BigInt(3),
        en = BigInt(4),
        ei = BigInt(5),
        eo = BigInt(8);
      function ea(e, t) {
        let r = e % t;
        return r >= X ? r : t + r;
      }
      function es(e, t, r) {
        let n = e;
        for (; t-- > X;) (n *= n), (n %= r);
        return n;
      }
      function el(e, t) {
        if (e === X || t <= X) throw Error(`invert: expected positive integers, got n=${e} mod=${t}`);
        let r = ea(e, t),
          n = t,
          i = X,
          o = ee,
          a = ee,
          s = X;
        for (; r !== X;) {
          let e = n / r,
            t = n % r,
            l = i - a * e,
            u = o - s * e;
          (n = r), (r = t), (i = a), (o = s), (a = l), (s = u);
        }
        if (n !== ee) throw Error("invert: does not exist");
        return ea(i, t);
      }
      BigInt(9), BigInt(16);
      let eu = ["create", "isValid", "is0", "neg", "inv", "sqrt", "sqr", "eql", "add", "sub", "mul", "pow", "div", "addN", "subN", "mulN", "sqrN"];
      function ec(e, t) {
        let r = void 0 !== t ? t : e.toString(2).length;
        return { nBitLength: r, nByteLength: Math.ceil(r / 8) };
      }
            /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */ let eh = BigInt(0),
        ef = BigInt(1);
      function ed(e) {
        return (
          Q(
            e.Fp,
            eu.reduce((e, t) => ((e[t] = "function"), e), { ORDER: "bigint", MASK: "bigint", BYTES: "isSafeInteger", BITS: "isSafeInteger" })
          ),
          Q(e, { n: "bigint", h: "bigint", Gx: "field", Gy: "field" }, { nBitLength: "isSafeInteger", nByteLength: "isSafeInteger" }),
          Object.freeze({ ...ec(e.n, e.nBitLength), ...e, p: e.Fp.ORDER })
        );
      }
      let { bytesToNumberBE: ep, hexToBytes: eg } = s,
        ey = {
          Err: class extends Error {
            constructor(e = "") {
              super(e);
            }
          },
          _parseInt(e) {
            let { Err: t } = ey;
            if (e.length < 2 || 2 !== e[0]) throw new t("Invalid signature integer tag");
            let r = e[1],
              n = e.subarray(2, r + 2);
            if (!r || n.length !== r) throw new t("Invalid signature integer: wrong length");
            if (128 & n[0]) throw new t("Invalid signature integer: negative");
            if (0 === n[0] && !(128 & n[1])) throw new t("Invalid signature integer: unnecessary leading zero");
            return { d: ep(n), l: e.subarray(r + 2) };
          },
          toSig(e) {
            let { Err: t } = ey,
              r = "string" == typeof e ? eg(e) : e;
            if (!(r instanceof Uint8Array)) throw Error("ui8a expected");
            let n = r.length;
            if (n < 2 || 48 != r[0]) throw new t("Invalid signature tag");
            if (r[1] !== n - 2) throw new t("Invalid signature: incorrect length");
            let { d: i, l: o } = ey._parseInt(r.subarray(2)),
              { d: a, l: s } = ey._parseInt(o);
            if (s.length) throw new t("Invalid signature: left bytes after parsing");
            return { r: i, s: a };
          },
          hexFromSig(e) {
            let t = (e) => (8 & Number.parseInt(e[0], 16) ? "00" + e : e),
              r = (e) => {
                let t = e.toString(16);
                return 1 & t.length ? `0${t}` : t;
              },
              n = t(r(e.s)),
              i = t(r(e.r)),
              o = n.length / 2,
              a = i.length / 2,
              s = r(o),
              l = r(a);
            return `30${r(a + o + 4)}02${l}${i}02${s}${n}`;
          },
        },
        eb = BigInt(0),
        ew = BigInt(1),
        em = (BigInt(2), BigInt(3));
      BigInt(4);
      class ev extends x {
        constructor(e, t) {
          super(), (this.finished = !1), (this.destroyed = !1), c(e);
          let r = v(t);
          if (((this.iHash = e.create()), "function" != typeof this.iHash.update)) throw Error("Expected instance of class which extends utils.Hash");
          (this.blockLen = this.iHash.blockLen), (this.outputLen = this.iHash.outputLen);
          let n = this.blockLen,
            i = new Uint8Array(n);
          i.set(r.length > n ? e.create().update(r).digest() : r);
          for (let e = 0; e < i.length; e++) i[e] ^= 54;
          this.iHash.update(i), (this.oHash = e.create());
          for (let e = 0; e < i.length; e++) i[e] ^= 106;
          this.oHash.update(i), i.fill(0);
        }
        update(e) {
          return h(this), this.iHash.update(e), this;
        }
        digestInto(e) {
          h(this), u(e, this.outputLen), (this.finished = !0), this.iHash.digestInto(e), this.oHash.update(e), this.oHash.digestInto(e), this.destroy();
        }
        digest() {
          let e = new Uint8Array(this.oHash.outputLen);
          return this.digestInto(e), e;
        }
        _cloneInto(e) {
          e || (e = Object.create(Object.getPrototypeOf(this), {}));
          let { oHash: t, iHash: r, finished: n, destroyed: i, blockLen: o, outputLen: a } = this;
          return (e.finished = n), (e.destroyed = i), (e.blockLen = o), (e.outputLen = a), (e.oHash = t._cloneInto(e.oHash)), (e.iHash = r._cloneInto(e.iHash)), e;
        }
        destroy() {
          (this.destroyed = !0), this.oHash.destroy(), this.iHash.destroy();
        }
      }
      let eE = (e, t, r) => new ev(e, t).update(r).digest();
      eE.create = (e, t) => new ev(e, t);
            /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */ let ex = BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),
        eA = BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),
        ek = BigInt(1),
        eB = BigInt(2),
        eU = (e, t) => (e + t / eB) / t;
      function eI(e) {
        let t = BigInt(3),
          r = BigInt(6),
          n = BigInt(11),
          i = BigInt(22),
          o = BigInt(23),
          a = BigInt(44),
          s = BigInt(88),
          l = (e * e * e) % ex,
          u = (l * l * e) % ex,
          c = (es(u, t, ex) * u) % ex,
          h = (es(c, t, ex) * u) % ex,
          f = (es(h, eB, ex) * l) % ex,
          d = (es(f, n, ex) * f) % ex,
          p = (es(d, i, ex) * d) % ex,
          g = (es(p, a, ex) * p) % ex,
          y = (es(g, s, ex) * g) % ex,
          b = (es(y, a, ex) * p) % ex,
          w = (es(b, t, ex) * u) % ex,
          m = (es(w, o, ex) * d) % ex,
          v = (es(m, r, ex) * l) % ex,
          E = es(v, eB, ex);
        if (!eS.eql(eS.sqr(E), e)) throw Error("Cannot find square root");
        return E;
      }
      let eS = (function (e, t, r = !1, n = {}) {
        if (e <= X) throw Error(`Expected Fp ORDER > 0, got ${e}`);
        let { nBitLength: i, nByteLength: o } = ec(e, t);
        if (o > 2048) throw Error("Field lengths over 2048 bytes are not supported");
        let a = (function (e) {
          if (e % en === er) {
            let t = (e + ee) / en;
            return function (e, r) {
              let n = e.pow(r, t);
              if (!e.eql(e.sqr(n), r)) throw Error("Cannot find square root");
              return n;
            };
          }
          if (e % eo === ei) {
            let t = (e - ei) / eo;
            return function (e, r) {
              let n = e.mul(r, et),
                i = e.pow(n, t),
                o = e.mul(r, i),
                a = e.mul(e.mul(o, et), i),
                s = e.mul(o, e.sub(a, e.ONE));
              if (!e.eql(e.sqr(s), r)) throw Error("Cannot find square root");
              return s;
            };
          }
          return (function (e) {
            let t, r, n;
            let i = (e - ee) / et;
            for (t = e - ee, r = 0; t % et === X; t /= et, r++);
            for (
              n = et;
              n < e &&
              (function (e, t, r) {
                if (r <= X || t < X) throw Error("Expected power/modulo > 0");
                if (r === ee) return X;
                let n = ee;
                for (; t > X;) t & ee && (n = (n * e) % r), (e = (e * e) % r), (t >>= ee);
                return n;
              })(n, i, e) !==
              e - ee;
              n++
            );
            if (1 === r) {
              let t = (e + ee) / en;
              return function (e, r) {
                let n = e.pow(r, t);
                if (!e.eql(e.sqr(n), r)) throw Error("Cannot find square root");
                return n;
              };
            }
            let o = (t + ee) / et;
            return function (e, a) {
              if (e.pow(a, i) === e.neg(e.ONE)) throw Error("Cannot find square root");
              let s = r,
                l = e.pow(e.mul(e.ONE, n), t),
                u = e.pow(a, o),
                c = e.pow(a, t);
              for (; !e.eql(c, e.ONE);) {
                if (e.eql(c, e.ZERO)) return e.ZERO;
                let t = 1;
                for (let r = e.sqr(c); t < s && !e.eql(r, e.ONE); t++) r = e.sqr(r);
                let r = e.pow(l, ee << BigInt(s - t - 1));
                (l = e.sqr(r)), (u = e.mul(u, r)), (c = e.mul(c, l)), (s = t);
              }
              return u;
            };
          })(e);
        })(e),
          s = Object.freeze({
            ORDER: e,
            BITS: i,
            BYTES: o,
            MASK: Z(i),
            ZERO: X,
            ONE: ee,
            create: (t) => ea(t, e),
            isValid: (t) => {
              if ("bigint" != typeof t) throw Error(`Invalid field element: expected bigint, got ${typeof t}`);
              return X <= t && t < e;
            },
            is0: (e) => e === X,
            isOdd: (e) => (e & ee) === ee,
            neg: (t) => ea(-t, e),
            eql: (e, t) => e === t,
            sqr: (t) => ea(t * t, e),
            add: (t, r) => ea(t + r, e),
            sub: (t, r) => ea(t - r, e),
            mul: (t, r) => ea(t * r, e),
            pow: (e, t) =>
              (function (e, t, r) {
                if (r < X) throw Error("Expected power > 0");
                if (r === X) return e.ONE;
                if (r === ee) return t;
                let n = e.ONE,
                  i = t;
                for (; r > X;) r & ee && (n = e.mul(n, i)), (i = e.sqr(i)), (r >>= ee);
                return n;
              })(s, e, t),
            div: (t, r) => ea(t * el(r, e), e),
            sqrN: (e) => e * e,
            addN: (e, t) => e + t,
            subN: (e, t) => e - t,
            mulN: (e, t) => e * t,
            inv: (t) => el(t, e),
            sqrt: n.sqrt || ((e) => a(s, e)),
            invertBatch: (e) =>
              (function (e, t) {
                let r = Array(t.length),
                  n = t.reduce((t, n, i) => (e.is0(n) ? t : ((r[i] = t), e.mul(t, n))), e.ONE),
                  i = e.inv(n);
                return t.reduceRight((t, n, i) => (e.is0(n) ? t : ((r[i] = e.mul(t, r[i])), e.mul(t, n))), i), r;
              })(s, e),
            cmov: (e, t, r) => (r ? t : e),
            toBytes: (e) => (r ? M(e, o) : D(e, o)),
            fromBytes: (e) => {
              if (e.length !== o) throw Error(`Fp.fromBytes: expected ${o}, got ${e.length}`);
              return r ? P(e) : T(e);
            },
          });
        return Object.freeze(s);
      })(ex, void 0, void 0, { sqrt: eI }),
        eL = (function (e, t) {
          let r = (t) =>
            (function (e) {
              let t = (function (e) {
                let t = ed(e);
                return Q(t, { hash: "hash", hmac: "function", randomBytes: "function" }, { bits2int: "function", bits2int_modN: "function", lowS: "boolean" }), Object.freeze({ lowS: !0, ...t });
              })(e),
                { Fp: r, n: n } = t,
                i = r.BYTES + 1,
                o = 2 * r.BYTES + 1;
              function a(e) {
                return ea(e, n);
              }
              let { ProjectivePoint: s, normPrivateKeyToScalar: l, weierstrassEquation: u, isWithinCurveOrder: c } = (function (e) {
                let t = /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */ (function (e) {
                  let t = ed(e);
                  Q(
                    t,
                    { a: "field", b: "field" },
                    {
                      allowedPrivateKeyLengths: "array",
                      wrapPrivateKey: "boolean",
                      isTorsionFree: "function",
                      clearCofactor: "function",
                      allowInfinityPoint: "boolean",
                      fromBytes: "function",
                      toBytes: "function",
                    }
                  );
                  let { endo: r, Fp: n, a: i } = t;
                  if (r) {
                    if (!n.eql(i, n.ZERO)) throw Error("Endomorphism can only be defined for Koblitz curves that have a=0");
                    if ("object" != typeof r || "bigint" != typeof r.beta || "function" != typeof r.splitScalar) throw Error("Expected endomorphism with beta: bigint and splitScalar: function");
                  }
                  return Object.freeze({ ...t });
                })(e),
                  { Fp: r } = t,
                  n =
                    t.toBytes ||
                    ((e, t, n) => {
                      let i = t.toAffine();
                      return V(Uint8Array.from([4]), r.toBytes(i.x), r.toBytes(i.y));
                    }),
                  i =
                    t.fromBytes ||
                    ((e) => {
                      let t = e.subarray(1);
                      return { x: r.fromBytes(t.subarray(0, r.BYTES)), y: r.fromBytes(t.subarray(r.BYTES, 2 * r.BYTES)) };
                    });
                function o(e) {
                  let { a: n, b: i } = t,
                    o = r.sqr(e),
                    a = r.mul(o, e);
                  return r.add(r.add(a, r.mul(e, n)), i);
                }
                if (!r.eql(r.sqr(t.Gy), o(t.Gx))) throw Error("bad generator point: equation left != right");
                function a(e) {
                  return "bigint" == typeof e && eb < e && e < t.n;
                }
                function s(e) {
                  if (!a(e)) throw Error("Expected valid bigint: 0 < bigint < curve.n");
                }
                function l(e) {
                  let r;
                  let { allowedPrivateKeyLengths: n, nByteLength: i, wrapPrivateKey: o, n: a } = t;
                  if (n && "bigint" != typeof e) {
                    if ((e instanceof Uint8Array && (e = K(e)), "string" != typeof e || !n.includes(e.length))) throw Error("Invalid key");
                    e = e.padStart(2 * i, "0");
                  }
                  try {
                    r = "bigint" == typeof e ? e : T(F("private key", e, i));
                  } catch (t) {
                    throw Error(`private key must be ${i} bytes, hex or bigint, not ${typeof e}`);
                  }
                  return o && (r = ea(r, a)), s(r), r;
                }
                let u = new Map();
                function c(e) {
                  if (!(e instanceof h)) throw Error("ProjectivePoint expected");
                }
                class h {
                  constructor(e, t, n) {
                    if (((this.px = e), (this.py = t), (this.pz = n), null == e || !r.isValid(e))) throw Error("x required");
                    if (null == t || !r.isValid(t)) throw Error("y required");
                    if (null == n || !r.isValid(n)) throw Error("z required");
                  }
                  static fromAffine(e) {
                    let { x: t, y: n } = e || {};
                    if (!e || !r.isValid(t) || !r.isValid(n)) throw Error("invalid affine point");
                    if (e instanceof h) throw Error("projective point not allowed");
                    let i = (e) => r.eql(e, r.ZERO);
                    return i(t) && i(n) ? h.ZERO : new h(t, n, r.ONE);
                  }
                  get x() {
                    return this.toAffine().x;
                  }
                  get y() {
                    return this.toAffine().y;
                  }
                  static normalizeZ(e) {
                    let t = r.invertBatch(e.map((e) => e.pz));
                    return e.map((e, r) => e.toAffine(t[r])).map(h.fromAffine);
                  }
                  static fromHex(e) {
                    let t = h.fromAffine(i(F("pointHex", e)));
                    return t.assertValidity(), t;
                  }
                  static fromPrivateKey(e) {
                    return h.BASE.multiply(l(e));
                  }
                  _setWindowSize(e) {
                    (this._WINDOW_SIZE = e), u.delete(this);
                  }
                  assertValidity() {
                    if (this.is0()) {
                      if (t.allowInfinityPoint) return;
                      throw Error("bad point: ZERO");
                    }
                    let { x: e, y: n } = this.toAffine();
                    if (!r.isValid(e) || !r.isValid(n)) throw Error("bad point: x or y not FE");
                    let i = r.sqr(n),
                      a = o(e);
                    if (!r.eql(i, a)) throw Error("bad point: equation left != right");
                    if (!this.isTorsionFree()) throw Error("bad point: not in prime-order subgroup");
                  }
                  hasEvenY() {
                    let { y: e } = this.toAffine();
                    if (r.isOdd) return !r.isOdd(e);
                    throw Error("Field doesn't support isOdd");
                  }
                  equals(e) {
                    c(e);
                    let { px: t, py: n, pz: i } = this,
                      { px: o, py: a, pz: s } = e,
                      l = r.eql(r.mul(t, s), r.mul(o, i)),
                      u = r.eql(r.mul(n, s), r.mul(a, i));
                    return l && u;
                  }
                  negate() {
                    return new h(this.px, r.neg(this.py), this.pz);
                  }
                  double() {
                    let { a: e, b: n } = t,
                      i = r.mul(n, em),
                      { px: o, py: a, pz: s } = this,
                      l = r.ZERO,
                      u = r.ZERO,
                      c = r.ZERO,
                      f = r.mul(o, o),
                      d = r.mul(a, a),
                      p = r.mul(s, s),
                      g = r.mul(o, a);
                    return (
                      (g = r.add(g, g)),
                      (c = r.mul(o, s)),
                      (c = r.add(c, c)),
                      (l = r.mul(e, c)),
                      (u = r.mul(i, p)),
                      (u = r.add(l, u)),
                      (l = r.sub(d, u)),
                      (u = r.add(d, u)),
                      (u = r.mul(l, u)),
                      (l = r.mul(g, l)),
                      (c = r.mul(i, c)),
                      (p = r.mul(e, p)),
                      (g = r.sub(f, p)),
                      (g = r.mul(e, g)),
                      (g = r.add(g, c)),
                      (c = r.add(f, f)),
                      (f = r.add(c, f)),
                      (f = r.add(f, p)),
                      (f = r.mul(f, g)),
                      (u = r.add(u, f)),
                      (p = r.mul(a, s)),
                      (p = r.add(p, p)),
                      (f = r.mul(p, g)),
                      (l = r.sub(l, f)),
                      (c = r.mul(p, d)),
                      (c = r.add(c, c)),
                      new h(l, u, (c = r.add(c, c)))
                    );
                  }
                  add(e) {
                    c(e);
                    let { px: n, py: i, pz: o } = this,
                      { px: a, py: s, pz: l } = e,
                      u = r.ZERO,
                      f = r.ZERO,
                      d = r.ZERO,
                      p = t.a,
                      g = r.mul(t.b, em),
                      y = r.mul(n, a),
                      b = r.mul(i, s),
                      w = r.mul(o, l),
                      m = r.add(n, i),
                      v = r.add(a, s);
                    (m = r.mul(m, v)), (v = r.add(y, b)), (m = r.sub(m, v)), (v = r.add(n, o));
                    let E = r.add(a, l);
                    return (
                      (v = r.mul(v, E)),
                      (E = r.add(y, w)),
                      (v = r.sub(v, E)),
                      (E = r.add(i, o)),
                      (u = r.add(s, l)),
                      (E = r.mul(E, u)),
                      (u = r.add(b, w)),
                      (E = r.sub(E, u)),
                      (d = r.mul(p, v)),
                      (u = r.mul(g, w)),
                      (d = r.add(u, d)),
                      (u = r.sub(b, d)),
                      (d = r.add(b, d)),
                      (f = r.mul(u, d)),
                      (b = r.add(y, y)),
                      (b = r.add(b, y)),
                      (w = r.mul(p, w)),
                      (v = r.mul(g, v)),
                      (b = r.add(b, w)),
                      (w = r.sub(y, w)),
                      (w = r.mul(p, w)),
                      (v = r.add(v, w)),
                      (y = r.mul(b, v)),
                      (f = r.add(f, y)),
                      (y = r.mul(E, v)),
                      (u = r.mul(m, u)),
                      (u = r.sub(u, y)),
                      (y = r.mul(m, b)),
                      (d = r.mul(E, d)),
                      new h(u, f, (d = r.add(d, y)))
                    );
                  }
                  subtract(e) {
                    return this.add(e.negate());
                  }
                  is0() {
                    return this.equals(h.ZERO);
                  }
                  wNAF(e) {
                    return d.wNAFCached(this, u, e, (e) => {
                      let t = r.invertBatch(e.map((e) => e.pz));
                      return e.map((e, r) => e.toAffine(t[r])).map(h.fromAffine);
                    });
                  }
                  multiplyUnsafe(e) {
                    let n = h.ZERO;
                    if (e === eb) return n;
                    if ((s(e), e === ew)) return this;
                    let { endo: i } = t;
                    if (!i) return d.unsafeLadder(this, e);
                    let { k1neg: o, k1: a, k2neg: l, k2: u } = i.splitScalar(e),
                      c = n,
                      f = n,
                      p = this;
                    for (; a > eb || u > eb;) a & ew && (c = c.add(p)), u & ew && (f = f.add(p)), (p = p.double()), (a >>= ew), (u >>= ew);
                    return o && (c = c.negate()), l && (f = f.negate()), (f = new h(r.mul(f.px, i.beta), f.py, f.pz)), c.add(f);
                  }
                  multiply(e) {
                    let n, i;
                    s(e);
                    let { endo: o } = t;
                    if (o) {
                      let { k1neg: t, k1: a, k2neg: s, k2: l } = o.splitScalar(e),
                        { p: u, f: c } = this.wNAF(a),
                        { p: f, f: p } = this.wNAF(l);
                      (u = d.constTimeNegate(t, u)), (f = d.constTimeNegate(s, f)), (f = new h(r.mul(f.px, o.beta), f.py, f.pz)), (n = u.add(f)), (i = c.add(p));
                    } else {
                      let { p: t, f: r } = this.wNAF(e);
                      (n = t), (i = r);
                    }
                    return h.normalizeZ([n, i])[0];
                  }
                  multiplyAndAddUnsafe(e, t, r) {
                    let n = h.BASE,
                      i = (e, t) => (t !== eb && t !== ew && e.equals(n) ? e.multiply(t) : e.multiplyUnsafe(t)),
                      o = i(this, t).add(i(e, r));
                    return o.is0() ? void 0 : o;
                  }
                  toAffine(e) {
                    let { px: t, py: n, pz: i } = this,
                      o = this.is0();
                    null == e && (e = o ? r.ONE : r.inv(i));
                    let a = r.mul(t, e),
                      s = r.mul(n, e),
                      l = r.mul(i, e);
                    if (o) return { x: r.ZERO, y: r.ZERO };
                    if (!r.eql(l, r.ONE)) throw Error("invZ was invalid");
                    return { x: a, y: s };
                  }
                  isTorsionFree() {
                    let { h: e, isTorsionFree: r } = t;
                    if (e === ew) return !0;
                    if (r) return r(h, this);
                    throw Error("isTorsionFree() has not been declared for the elliptic curve");
                  }
                  clearCofactor() {
                    let { h: e, clearCofactor: r } = t;
                    return e === ew ? this : r ? r(h, this) : this.multiplyUnsafe(t.h);
                  }
                  toRawBytes(e = !0) {
                    return this.assertValidity(), n(h, this, e);
                  }
                  toHex(e = !0) {
                    return K(this.toRawBytes(e));
                  }
                }
                (h.BASE = new h(t.Gx, t.Gy, r.ONE)), (h.ZERO = new h(r.ZERO, r.ONE, r.ZERO));
                let f = t.nBitLength,
                  d = (function (e, t) {
                    let r = (e, t) => {
                      let r = t.negate();
                      return e ? r : t;
                    },
                      n = (e) => ({ windows: Math.ceil(t / e) + 1, windowSize: 2 ** (e - 1) });
                    return {
                      constTimeNegate: r,
                      unsafeLadder(t, r) {
                        let n = e.ZERO,
                          i = t;
                        for (; r > eh;) r & ef && (n = n.add(i)), (i = i.double()), (r >>= ef);
                        return n;
                      },
                      precomputeWindow(e, t) {
                        let { windows: r, windowSize: i } = n(t),
                          o = [],
                          a = e,
                          s = a;
                        for (let e = 0; e < r; e++) {
                          (s = a), o.push(s);
                          for (let e = 1; e < i; e++) (s = s.add(a)), o.push(s);
                          a = s.double();
                        }
                        return o;
                      },
                      wNAF(t, i, o) {
                        let { windows: a, windowSize: s } = n(t),
                          l = e.ZERO,
                          u = e.BASE,
                          c = BigInt(2 ** t - 1),
                          h = 2 ** t,
                          f = BigInt(t);
                        for (let e = 0; e < a; e++) {
                          let t = e * s,
                            n = Number(o & c);
                          (o >>= f), n > s && ((n -= h), (o += ef));
                          let a = t + Math.abs(n) - 1,
                            d = e % 2 != 0,
                            p = n < 0;
                          0 === n ? (u = u.add(r(d, i[t]))) : (l = l.add(r(p, i[a])));
                        }
                        return { p: l, f: u };
                      },
                      wNAFCached(e, t, r, n) {
                        let i = e._WINDOW_SIZE || 1,
                          o = t.get(e);
                        return o || ((o = this.precomputeWindow(e, i)), 1 !== i && t.set(e, n(o))), this.wNAF(i, o, r);
                      },
                    };
                  })(h, t.endo ? Math.ceil(f / 2) : f);
                return { CURVE: t, ProjectivePoint: h, normPrivateKeyToScalar: l, weierstrassEquation: o, isWithinCurveOrder: a };
              })({
                ...t,
                toBytes(e, t, n) {
                  let i = t.toAffine(),
                    o = r.toBytes(i.x),
                    a = V;
                  return n ? a(Uint8Array.from([t.hasEvenY() ? 2 : 3]), o) : a(Uint8Array.from([4]), o, r.toBytes(i.y));
                },
                fromBytes(e) {
                  let t = e.length,
                    n = e[0],
                    a = e.subarray(1);
                  if (t === i && (2 === n || 3 === n)) {
                    let e = T(a);
                    if (!(eb < e && e < r.ORDER)) throw Error("Point is not on curve");
                    let t = u(e),
                      i = r.sqrt(t);
                    return ((1 & n) == 1) != ((i & ew) === ew) && (i = r.neg(i)), { x: e, y: i };
                  }
                  if (t === o && 4 === n) return { x: r.fromBytes(a.subarray(0, r.BYTES)), y: r.fromBytes(a.subarray(r.BYTES, 2 * r.BYTES)) };
                  throw Error(`Point of length ${t} was invalid. Expected ${i} compressed bytes or ${o} uncompressed bytes`);
                },
              }),
                h = (e) => K(D(e, t.nByteLength)),
                f = (e, t, r) => T(e.slice(t, r));
              class d {
                constructor(e, t, r) {
                  (this.r = e), (this.s = t), (this.recovery = r), this.assertValidity();
                }
                static fromCompact(e) {
                  let r = t.nByteLength;
                  return new d(f((e = F("compactSignature", e, 2 * r)), 0, r), f(e, r, 2 * r));
                }
                static fromDER(e) {
                  let { r: t, s: r } = ey.toSig(F("DER", e));
                  return new d(t, r);
                }
                assertValidity() {
                  if (!c(this.r)) throw Error("r must be 0 < r < CURVE.n");
                  if (!c(this.s)) throw Error("s must be 0 < s < CURVE.n");
                }
                addRecoveryBit(e) {
                  return new d(this.r, this.s, e);
                }
                recoverPublicKey(e) {
                  let { r: i, s: o, recovery: l } = this,
                    u = y(F("msgHash", e));
                  if (null == l || ![0, 1, 2, 3].includes(l)) throw Error("recovery id invalid");
                  let c = 2 === l || 3 === l ? i + t.n : i;
                  if (c >= r.ORDER) throw Error("recovery id 2 or 3 invalid");
                  let f = (1 & l) == 0 ? "02" : "03",
                    d = s.fromHex(f + h(c)),
                    p = el(c, n),
                    g = a(-u * p),
                    b = a(o * p),
                    w = s.BASE.multiplyAndAddUnsafe(d, g, b);
                  if (!w) throw Error("point at infinify");
                  return w.assertValidity(), w;
                }
                hasHighS() {
                  return this.s > n >> ew;
                }
                normalizeS() {
                  return this.hasHighS() ? new d(this.r, a(-this.s), this.recovery) : this;
                }
                toDERRawBytes() {
                  return q(this.toDERHex());
                }
                toDERHex() {
                  return ey.hexFromSig({ r: this.r, s: this.s });
                }
                toCompactRawBytes() {
                  return q(this.toCompactHex());
                }
                toCompactHex() {
                  return h(this.r) + h(this.s);
                }
              }
              function p(e) {
                let t = e instanceof Uint8Array,
                  r = "string" == typeof e,
                  n = (t || r) && e.length;
                return t ? n === i || n === o : r ? n === 2 * i || n === 2 * o : e instanceof s;
              }
              let g =
                t.bits2int ||
                function (e) {
                  let r = T(e),
                    n = 8 * e.length - t.nBitLength;
                  return n > 0 ? r >> BigInt(n) : r;
                },
                y =
                  t.bits2int_modN ||
                  function (e) {
                    return a(g(e));
                  },
                b = Z(t.nBitLength);
              function w(e) {
                if ("bigint" != typeof e) throw Error("bigint expected");
                if (!(eb <= e && e < b)) throw Error(`bigint expected < 2^${t.nBitLength}`);
                return D(e, t.nByteLength);
              }
              let m = { lowS: t.lowS, prehash: !1 },
                v = { lowS: t.lowS, prehash: !1 };
              return (
                s.BASE._setWindowSize(8),
                {
                  CURVE: t,
                  getPublicKey: function (e, t = !0) {
                    return s.fromPrivateKey(e).toRawBytes(t);
                  },
                  getSharedSecret: function (e, t, r = !0) {
                    if (p(e)) throw Error("first arg must be private key");
                    if (!p(t)) throw Error("second arg must be public key");
                    return s.fromHex(t).multiply(l(e)).toRawBytes(r);
                  },
                  sign: function (e, i, o = m) {
                    let { seed: u, k2sig: h } = (function (e, i, o = m) {
                      if (["recovered", "canonical"].some((e) => e in o)) throw Error("sign() legacy options not supported");
                      let { hash: u, randomBytes: h } = t,
                        { lowS: f, prehash: p, extraEntropy: b } = o;
                      null == f && (f = !0), (e = F("msgHash", e)), p && (e = F("prehashed msgHash", u(e)));
                      let v = y(e),
                        E = l(i),
                        x = [w(E), w(v)];
                      if (null != b) {
                        let e = !0 === b ? h(r.BYTES) : b;
                        x.push(F("extraEntropy", e, r.BYTES));
                      }
                      return {
                        seed: V(...x),
                        k2sig: function (e) {
                          let t = g(e);
                          if (!c(t)) return;
                          let r = el(t, n),
                            i = s.BASE.multiply(t).toAffine(),
                            o = a(i.x);
                          if (o === eb) return;
                          let l = a(r * a(v + o * E));
                          if (l === eb) return;
                          let u = (i.x === o ? 0 : 2) | Number(i.y & ew),
                            h = l;
                          if (f && l > n >> ew) (h = l > n >> ew ? a(-l) : l), (u ^= 1);
                          return new d(o, h, u);
                        },
                      };
                    })(e, i, o);
                    return J(t.hash.outputLen, t.nByteLength, t.hmac)(u, h);
                  },
                  verify: function (e, r, i, o = v) {
                    let l, u;
                    if (((r = F("msgHash", r)), (i = F("publicKey", i)), "strict" in o)) throw Error("options.strict was renamed to lowS");
                    let { lowS: c, prehash: h } = o;
                    try {
                      if ("string" == typeof e || e instanceof Uint8Array)
                        try {
                          u = d.fromDER(e);
                        } catch (t) {
                          if (!(t instanceof ey.Err)) throw t;
                          u = d.fromCompact(e);
                        }
                      else if ("object" == typeof e && "bigint" == typeof e.r && "bigint" == typeof e.s) {
                        let { r: t, s: r } = e;
                        u = new d(t, r);
                      } else throw Error("PARSE");
                      l = s.fromHex(i);
                    } catch (e) {
                      if ("PARSE" === e.message) throw Error("signature must be Signature instance, Uint8Array or hex string");
                      return !1;
                    }
                    if (c && u.hasHighS()) return !1;
                    h && (r = t.hash(r));
                    let { r: f, s: p } = u,
                      g = y(r),
                      b = el(p, n),
                      w = a(g * b),
                      m = a(f * b),
                      E = s.BASE.multiplyAndAddUnsafe(l, w, m)?.toAffine();
                    return !!E && a(E.x) === f;
                  },
                  ProjectivePoint: s,
                  Signature: d,
                  utils: {
                    isValidPrivateKey(e) {
                      try {
                        return l(e), !0;
                      } catch (e) {
                        return !1;
                      }
                    },
                    normPrivateKeyToScalar: l,
                    randomPrivateKey: () =>
                      D(
                        (function (e, t, r = !1) {
                          let n = (e = F("privateHash", e)).length,
                            i = ec(t).nByteLength + 8;
                          if (i < 24 || n < i || n > 1024) throw Error(`hashToPrivateScalar: expected ${i}-1024 bytes of input, got ${n}`);
                          return ea(r ? P(e) : T(e), t - ee) + ee;
                        })(t.randomBytes(r.BYTES + 8), n),
                        t.nByteLength
                      ),
                    precompute: (e = 8, t = s.BASE) => (t._setWindowSize(e), t.multiply(BigInt(3)), t),
                  },
                }
              );
            })({ ...e, hash: t, hmac: (e, ...r) => eE(t, e, E(...r)), randomBytes: k });
          return Object.freeze({ ...r(t), create: r });
        })(
          {
            a: BigInt(0),
            b: BigInt(7),
            Fp: eS,
            n: eA,
            Gx: BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),
            Gy: BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),
            h: BigInt(1),
            lowS: !0,
            endo: {
              beta: BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),
              splitScalar: (e) => {
                let t = BigInt("0x3086d221a7d46bcde86c90e49284eb15"),
                  r = -ek * BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),
                  n = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),
                  i = BigInt("0x100000000000000000000000000000000"),
                  o = eU(t * e, eA),
                  a = eU(-r * e, eA),
                  s = ea(e - o * t - a * n, eA),
                  l = ea(-o * r - a * t, eA),
                  u = s > i,
                  c = l > i;
                if ((u && (s = eA - s), c && (l = eA - l), s > i || l > i)) throw Error("splitScalar: Endomorphism failed, k=" + e);
                return { k1neg: u, k1: s, k2neg: c, k2: l };
              },
            },
          },
          C
        ),
        eH = BigInt(0),
        e$ = (e) => "bigint" == typeof e && eH < e && e < ex,
        e_ = (e) => "bigint" == typeof e && eH < e && e < eA,
        eC = {};
      function eR(e, ...t) {
        let r = eC[e];
        if (void 0 === r) {
          let t = C(Uint8Array.from(e, (e) => e.charCodeAt(0)));
          (r = V(t, t)), (eC[e] = r);
        }
        return C(V(r, ...t));
      }
      let eO = (e) => e.toRawBytes(!0).slice(1),
        eN = (e) => D(e, 32),
        ej = (e) => ea(e, ex),
        eK = (e) => ea(e, eA),
        ez = eL.ProjectivePoint,
        eq = (e, t, r) => ez.BASE.multiplyAndAddUnsafe(e, t, r);
      function eT(e) {
        let t = eL.utils.normPrivateKeyToScalar(e),
          r = ez.fromPrivateKey(t);
        return { scalar: r.hasEvenY() ? t : eK(-t), bytes: eO(r) };
      }
      function eP(e) {
        if (!e$(e)) throw Error("bad x: need 0 < x < p");
        let t = ej(e * e),
          r = eI(ej(t * e + BigInt(7)));
        r % eB !== eH && (r = ej(-r));
        let n = new ez(e, r, ek);
        return n.assertValidity(), n;
      }
      function eD(...e) {
        return eK(T(eR("BIP0340/challenge", ...e)));
      }
      function eM(e, t, r) {
        let n = F("signature", e, 64),
          i = F("message", t),
          o = F("publicKey", r, 32);
        try {
          let e = eP(T(o)),
            t = T(n.subarray(0, 32));
          if (!e$(t)) return !1;
          let r = T(n.subarray(32, 64));
          if (!e_(r)) return !1;
          let a = eD(eN(t), eO(e), i),
            s = eq(e, r, eK(-a));
          if (!s || !s.hasEvenY() || s.toAffine().x !== t) return !1;
          return !0;
        } catch (e) {
          return !1;
        }
      }
      let eF = {
        getPublicKey: function (e) {
          return eT(e).bytes;
        },
        sign: function (e, t, r = k(32)) {
          let n = F("message", e),
            { bytes: i, scalar: o } = eT(t),
            a = eN(o ^ T(eR("BIP0340/aux", F("auxRand", r, 32)))),
            s = eK(T(eR("BIP0340/nonce", a, i, n)));
          if (s === eH) throw Error("sign failed: k is zero");
          let { bytes: l, scalar: u } = eT(s),
            c = eD(l, i, n),
            h = new Uint8Array(64);
          if ((h.set(l, 0), h.set(eN(eK(u + c * o)), 32), !eM(h, n, i))) throw Error("sign: Invalid signature produced");
          return h;
        },
        verify: eM,
        utils: { randomPrivateKey: eL.utils.randomPrivateKey, lift_x: eP, pointToBytes: eO, numberToBytesBE: D, bytesToNumberBE: T, taggedHash: eR, mod: ea },
      };
            /*! scure-base - MIT License (c) 2022 Paul Miller (paulmillr.com) */ function eV(e) {
        if (!Number.isSafeInteger(e)) throw Error(`Wrong integer: ${e}`);
      }
      function eZ(...e) {
        let t = (e, t) => (r) => e(t(r));
        return {
          encode: Array.from(e)
            .reverse()
            .reduce((e, r) => (e ? t(e, r.encode) : r.encode), void 0),
          decode: e.reduce((e, r) => (e ? t(e, r.decode) : r.decode), void 0),
        };
      }
      function eG(e) {
        return {
          encode: (t) => {
            if (!Array.isArray(t) || (t.length && "number" != typeof t[0])) throw Error("alphabet.encode input should be an array of numbers");
            return t.map((t) => {
              if ((eV(t), t < 0 || t >= e.length)) throw Error(`Digit index outside alphabet: ${t} (alphabet: ${e.length})`);
              return e[t];
            });
          },
          decode: (t) => {
            if (!Array.isArray(t) || (t.length && "string" != typeof t[0])) throw Error("alphabet.decode input should be array of strings");
            return t.map((t) => {
              if ("string" != typeof t) throw Error(`alphabet.decode: not string element=${t}`);
              let r = e.indexOf(t);
              if (-1 === r) throw Error(`Unknown letter: "${t}". Allowed: ${e}`);
              return r;
            });
          },
        };
      }
      function eW(e = "") {
        if ("string" != typeof e) throw Error("join separator should be string");
        return {
          encode: (t) => {
            if (!Array.isArray(t) || (t.length && "string" != typeof t[0])) throw Error("join.encode input should be array of strings");
            for (let e of t) if ("string" != typeof e) throw Error(`join.encode: non-string input=${e}`);
            return t.join(e);
          },
          decode: (t) => {
            if ("string" != typeof t) throw Error("join.decode input should be string");
            return t.split(e);
          },
        };
      }
      function eJ(e, t = "=") {
        if ((eV(e), "string" != typeof t)) throw Error("padding chr should be string");
        return {
          encode(r) {
            if (!Array.isArray(r) || (r.length && "string" != typeof r[0])) throw Error("padding.encode input should be array of strings");
            for (let e of r) if ("string" != typeof e) throw Error(`padding.encode: non-string input=${e}`);
            for (; (r.length * e) % 8;) r.push(t);
            return r;
          },
          decode(r) {
            if (!Array.isArray(r) || (r.length && "string" != typeof r[0])) throw Error("padding.encode input should be array of strings");
            for (let e of r) if ("string" != typeof e) throw Error(`padding.decode: non-string input=${e}`);
            let n = r.length;
            if ((n * e) % 8) throw Error("Invalid padding: string should have whole number of bytes");
            for (; n > 0 && r[n - 1] === t; n--) if (!(((n - 1) * e) % 8)) throw Error("Invalid padding: string has too much padding");
            return r.slice(0, n);
          },
        };
      }
      function eY(e) {
        if ("function" != typeof e) throw Error("normalize fn should be function");
        return { encode: (e) => e, decode: (t) => e(t) };
      }
      function eQ(e, t, r) {
        if (t < 2) throw Error(`convertRadix: wrong from=${t}, base cannot be less than 2`);
        if (r < 2) throw Error(`convertRadix: wrong to=${r}, base cannot be less than 2`);
        if (!Array.isArray(e)) throw Error("convertRadix: data should be array");
        if (!e.length) return [];
        let n = 0,
          i = [],
          o = Array.from(e);
        for (
          o.forEach((e) => {
            if ((eV(e), e < 0 || e >= t)) throw Error(`Wrong integer: ${e}`);
          });
          ;

        ) {
          let e = 0,
            a = !0;
          for (let i = n; i < o.length; i++) {
            let s = o[i],
              l = t * e + s;
            if (!Number.isSafeInteger(l) || (t * e) / t !== e || l - s != t * e || ((e = l % r), (o[i] = Math.floor(l / r)), !Number.isSafeInteger(o[i]) || o[i] * r + e !== l)) throw Error("convertRadix: carry overflow");
            a && (o[i] ? (a = !1) : (n = i));
          }
          if ((i.push(e), a)) break;
        }
        for (let t = 0; t < e.length - 1 && 0 === e[t]; t++) i.push(0);
        return i.reverse();
      }
      let eX = (e, t) => (t ? eX(t, e % t) : e),
        e0 = (e, t) => e + (t - eX(e, t));
      function e1(e, t, r, n) {
        if (!Array.isArray(e)) throw Error("convertRadix2: data should be array");
        if (t <= 0 || t > 32) throw Error(`convertRadix2: wrong from=${t}`);
        if (r <= 0 || r > 32) throw Error(`convertRadix2: wrong to=${r}`);
        if (e0(t, r) > 32) throw Error(`convertRadix2: carry overflow from=${t} to=${r} carryBits=${e0(t, r)}`);
        let i = 0,
          o = 0,
          a = 2 ** r - 1,
          s = [];
        for (let n of e) {
          if ((eV(n), n >= 2 ** t)) throw Error(`convertRadix2: invalid data word=${n} from=${t}`);
          if (((i = (i << t) | n), o + t > 32)) throw Error(`convertRadix2: carry overflow pos=${o} from=${t}`);
          for (o += t; o >= r; o -= r) s.push(((i >> (o - r)) & a) >>> 0);
          i &= 2 ** o - 1;
        }
        if (((i = (i << (r - o)) & a), !n && o >= t)) throw Error("Excess padding");
        if (!n && i) throw Error(`Non-zero padding: ${i}`);
        return n && o > 0 && s.push(i >>> 0), s;
      }
      function e2(e, t = !1) {
        if ((eV(e), e <= 0 || e > 32)) throw Error("radix2: bits should be in (0..32]");
        if (e0(8, e) > 32 || e0(e, 8) > 32) throw Error("radix2: carry overflow");
        return {
          encode: (r) => {
            if (!(r instanceof Uint8Array)) throw Error("radix2.encode input should be Uint8Array");
            return e1(Array.from(r), 8, e, !t);
          },
          decode: (r) => {
            if (!Array.isArray(r) || (r.length && "number" != typeof r[0])) throw Error("radix2.decode input should be array of strings");
            return Uint8Array.from(e1(r, e, 8, t));
          },
        };
      }
      function e3(e) {
        if ("function" != typeof e) throw Error("unsafeWrapper fn should be function");
        return function (...t) {
          try {
            return e.apply(null, t);
          } catch (e) { }
        };
      }
      eZ(e2(4), eG("0123456789ABCDEF"), eW("")),
        eZ(e2(5), eG("ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"), eJ(5), eW("")),
        eZ(e2(5), eG("0123456789ABCDEFGHIJKLMNOPQRSTUV"), eJ(5), eW("")),
        eZ(
          e2(5),
          eG("0123456789ABCDEFGHJKMNPQRSTVWXYZ"),
          eW(""),
          eY((e) => e.toUpperCase().replace(/O/g, "0").replace(/[IL]/g, "1"))
        );
      let e8 = eZ(e2(6), eG("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"), eJ(6), eW("")),
        e4 =
          (eZ(e2(6), eG("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"), eJ(6), eW("")),
            (e) =>
              eZ(
                (eV(58),
                {
                  encode: (e) => {
                    if (!(e instanceof Uint8Array)) throw Error("radix.encode input should be Uint8Array");
                    return eQ(Array.from(e), 256, 58);
                  },
                  decode: (e) => {
                    if (!Array.isArray(e) || (e.length && "number" != typeof e[0])) throw Error("radix.decode input should be array of strings");
                    return Uint8Array.from(eQ(e, 58, 256));
                  },
                }),
                eG(e),
                eW("")
              ));
      e4("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"), e4("123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"), e4("rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz");
      let e5 = eZ(eG("qpzry9x8gf2tvdw0s3jn54khce6mua7l"), eW("")),
        e6 = [996825010, 642813549, 513874426, 1027748829, 705979059];
      function e7(e) {
        let t = e >> 25,
          r = (33554431 & e) << 5;
        for (let e = 0; e < e6.length; e++) ((t >> e) & 1) == 1 && (r ^= e6[e]);
        return r;
      }
      function e9(e, t, r = 1) {
        let n = e.length,
          i = 1;
        for (let t = 0; t < n; t++) {
          let r = e.charCodeAt(t);
          if (r < 33 || r > 126) throw Error(`Invalid prefix (${e})`);
          i = e7(i) ^ (r >> 5);
        }
        i = e7(i);
        for (let t = 0; t < n; t++) i = e7(i) ^ (31 & e.charCodeAt(t));
        for (let e of t) i = e7(i) ^ e;
        for (let e = 0; e < 6; e++) i = e7(i);
        return (i ^= r), e5.encode(e1([i % 1073741824], 30, 5, !1));
      }
      function te(e) {
        let t = "bech32" === e ? 1 : 734539939,
          r = e2(5),
          n = r.decode,
          i = r.encode,
          o = e3(n);
        function a(e, r = 90) {
          if ("string" != typeof e) throw Error(`bech32.decode input should be string, not ${typeof e}`);
          if (e.length < 8 || (!1 !== r && e.length > r)) throw TypeError(`Wrong string length: ${e.length} (${e}). Expected (8..${r})`);
          let n = e.toLowerCase();
          if (e !== n && e !== e.toUpperCase()) throw Error("String must be lowercase or uppercase");
          let i = (e = n).lastIndexOf("1");
          if (0 === i || -1 === i) throw Error('Letter "1" must be present between prefix and data only');
          let o = e.slice(0, i),
            a = e.slice(i + 1);
          if (a.length < 6) throw Error("Data must be at least 6 characters long");
          let s = e5.decode(a).slice(0, -6),
            l = e9(o, s, t);
          if (!a.endsWith(l)) throw Error(`Invalid checksum in ${e}: expected "${l}"`);
          return { prefix: o, words: s };
        }
        let s = e3(a);
        return {
          encode: function (e, r, n = 90) {
            if ("string" != typeof e) throw Error(`bech32.encode prefix should be string, not ${typeof e}`);
            if (!Array.isArray(r) || (r.length && "number" != typeof r[0])) throw Error(`bech32.encode words should be array of numbers, not ${typeof r}`);
            let i = e.length + 7 + r.length;
            if (!1 !== n && i > n) throw TypeError(`Length ${i} exceeds limit ${n}`);
            return (e = e.toLowerCase()), `${e}1${e5.encode(r)}${e9(e, r, t)}`;
          },
          decode: a,
          decodeToBytes: function (e) {
            let { prefix: t, words: r } = a(e, !1);
            return { prefix: t, words: r, bytes: n(r) };
          },
          decodeUnsafe: s,
          fromWords: n,
          fromWordsUnsafe: o,
          toWords: i,
        };
      }
      let tt = te("bech32");
      te("bech32m"),
        eZ(
          e2(4),
          eG("0123456789abcdef"),
          eW(""),
          eY((e) => {
            if ("string" != typeof e || e.length % 2) throw TypeError(`hex.decode: expected string, got ${typeof e} with length ${e.length}`);
            return e.toLowerCase();
          })
        );
      let tr = `abandon
ability
able
about
above
absent
absorb
abstract
absurd
abuse
access
accident
account
accuse
achieve
acid
acoustic
acquire
across
act
action
actor
actress
actual
adapt
add
addict
address
adjust
admit
adult
advance
advice
aerobic
affair
afford
afraid
again
age
agent
agree
ahead
aim
air
airport
aisle
alarm
album
alcohol
alert
alien
all
alley
allow
almost
alone
alpha
already
also
alter
always
amateur
amazing
among
amount
amused
analyst
anchor
ancient
anger
angle
angry
animal
ankle
announce
annual
another
answer
antenna
antique
anxiety
any
apart
apology
appear
apple
approve
april
arch
arctic
area
arena
argue
arm
armed
armor
army
around
arrange
arrest
arrive
arrow
art
artefact
artist
artwork
ask
aspect
assault
asset
assist
assume
asthma
athlete
atom
attack
attend
attitude
attract
auction
audit
august
aunt
author
auto
autumn
average
avocado
avoid
awake
aware
away
awesome
awful
awkward
axis
baby
bachelor
bacon
badge
bag
balance
balcony
ball
bamboo
banana
banner
bar
barely
bargain
barrel
base
basic
basket
battle
beach
bean
beauty
because
become
beef
before
begin
behave
behind
believe
below
belt
bench
benefit
best
betray
better
between
beyond
bicycle
bid
bike
bind
biology
bird
birth
bitter
black
blade
blame
blanket
blast
bleak
bless
blind
blood
blossom
blouse
blue
blur
blush
board
boat
body
boil
bomb
bone
bonus
book
boost
border
boring
borrow
boss
bottom
bounce
box
boy
bracket
brain
brand
brass
brave
bread
breeze
brick
bridge
brief
bright
bring
brisk
broccoli
broken
bronze
broom
brother
brown
brush
bubble
buddy
budget
buffalo
build
bulb
bulk
bullet
bundle
bunker
burden
burger
burst
bus
business
busy
butter
buyer
buzz
cabbage
cabin
cable
cactus
cage
cake
call
calm
camera
camp
can
canal
cancel
candy
cannon
canoe
canvas
canyon
capable
capital
captain
car
carbon
card
cargo
carpet
carry
cart
case
cash
casino
castle
casual
cat
catalog
catch
category
cattle
caught
cause
caution
cave
ceiling
celery
cement
census
century
cereal
certain
chair
chalk
champion
change
chaos
chapter
charge
chase
chat
cheap
check
cheese
chef
cherry
chest
chicken
chief
child
chimney
choice
choose
chronic
chuckle
chunk
churn
cigar
cinnamon
circle
citizen
city
civil
claim
clap
clarify
claw
clay
clean
clerk
clever
click
client
cliff
climb
clinic
clip
clock
clog
close
cloth
cloud
clown
club
clump
cluster
clutch
coach
coast
coconut
code
coffee
coil
coin
collect
color
column
combine
come
comfort
comic
common
company
concert
conduct
confirm
congress
connect
consider
control
convince
cook
cool
copper
copy
coral
core
corn
correct
cost
cotton
couch
country
couple
course
cousin
cover
coyote
crack
cradle
craft
cram
crane
crash
crater
crawl
crazy
cream
credit
creek
crew
cricket
crime
crisp
critic
crop
cross
crouch
crowd
crucial
cruel
cruise
crumble
crunch
crush
cry
crystal
cube
culture
cup
cupboard
curious
current
curtain
curve
cushion
custom
cute
cycle
dad
damage
damp
dance
danger
daring
dash
daughter
dawn
day
deal
debate
debris
decade
december
decide
decline
decorate
decrease
deer
defense
define
defy
degree
delay
deliver
demand
demise
denial
dentist
deny
depart
depend
deposit
depth
deputy
derive
describe
desert
design
desk
despair
destroy
detail
detect
develop
device
devote
diagram
dial
diamond
diary
dice
diesel
diet
differ
digital
dignity
dilemma
dinner
dinosaur
direct
dirt
disagree
discover
disease
dish
dismiss
disorder
display
distance
divert
divide
divorce
dizzy
doctor
document
dog
doll
dolphin
domain
donate
donkey
donor
door
dose
double
dove
draft
dragon
drama
drastic
draw
dream
dress
drift
drill
drink
drip
drive
drop
drum
dry
duck
dumb
dune
during
dust
dutch
duty
dwarf
dynamic
eager
eagle
early
earn
earth
easily
east
easy
echo
ecology
economy
edge
edit
educate
effort
egg
eight
either
elbow
elder
electric
elegant
element
elephant
elevator
elite
else
embark
embody
embrace
emerge
emotion
employ
empower
empty
enable
enact
end
endless
endorse
enemy
energy
enforce
engage
engine
enhance
enjoy
enlist
enough
enrich
enroll
ensure
enter
entire
entry
envelope
episode
equal
equip
era
erase
erode
erosion
error
erupt
escape
essay
essence
estate
eternal
ethics
evidence
evil
evoke
evolve
exact
example
excess
exchange
excite
exclude
excuse
execute
exercise
exhaust
exhibit
exile
exist
exit
exotic
expand
expect
expire
explain
expose
express
extend
extra
eye
eyebrow
fabric
face
faculty
fade
faint
faith
fall
false
fame
family
famous
fan
fancy
fantasy
farm
fashion
fat
fatal
father
fatigue
fault
favorite
feature
february
federal
fee
feed
feel
female
fence
festival
fetch
fever
few
fiber
fiction
field
figure
file
film
filter
final
find
fine
finger
finish
fire
firm
first
fiscal
fish
fit
fitness
fix
flag
flame
flash
flat
flavor
flee
flight
flip
float
flock
floor
flower
fluid
flush
fly
foam
focus
fog
foil
fold
follow
food
foot
force
forest
forget
fork
fortune
forum
forward
fossil
foster
found
fox
fragile
frame
frequent
fresh
friend
fringe
frog
front
frost
frown
frozen
fruit
fuel
fun
funny
furnace
fury
future
gadget
gain
galaxy
gallery
game
gap
garage
garbage
garden
garlic
garment
gas
gasp
gate
gather
gauge
gaze
general
genius
genre
gentle
genuine
gesture
ghost
giant
gift
giggle
ginger
giraffe
girl
give
glad
glance
glare
glass
glide
glimpse
globe
gloom
glory
glove
glow
glue
goat
goddess
gold
good
goose
gorilla
gospel
gossip
govern
gown
grab
grace
grain
grant
grape
grass
gravity
great
green
grid
grief
grit
grocery
group
grow
grunt
guard
guess
guide
guilt
guitar
gun
gym
habit
hair
half
hammer
hamster
hand
happy
harbor
hard
harsh
harvest
hat
have
hawk
hazard
head
health
heart
heavy
hedgehog
height
hello
helmet
help
hen
hero
hidden
high
hill
hint
hip
hire
history
hobby
hockey
hold
hole
holiday
hollow
home
honey
hood
hope
horn
horror
horse
hospital
host
hotel
hour
hover
hub
huge
human
humble
humor
hundred
hungry
hunt
hurdle
hurry
hurt
husband
hybrid
ice
icon
idea
identify
idle
ignore
ill
illegal
illness
image
imitate
immense
immune
impact
impose
improve
impulse
inch
include
income
increase
index
indicate
indoor
industry
infant
inflict
inform
inhale
inherit
initial
inject
injury
inmate
inner
innocent
input
inquiry
insane
insect
inside
inspire
install
intact
interest
into
invest
invite
involve
iron
island
isolate
issue
item
ivory
jacket
jaguar
jar
jazz
jealous
jeans
jelly
jewel
job
join
joke
journey
joy
judge
juice
jump
jungle
junior
junk
just
kangaroo
keen
keep
ketchup
key
kick
kid
kidney
kind
kingdom
kiss
kit
kitchen
kite
kitten
kiwi
knee
knife
knock
know
lab
label
labor
ladder
lady
lake
lamp
language
laptop
large
later
latin
laugh
laundry
lava
law
lawn
lawsuit
layer
lazy
leader
leaf
learn
leave
lecture
left
leg
legal
legend
leisure
lemon
lend
length
lens
leopard
lesson
letter
level
liar
liberty
library
license
life
lift
light
like
limb
limit
link
lion
liquid
list
little
live
lizard
load
loan
lobster
local
lock
logic
lonely
long
loop
lottery
loud
lounge
love
loyal
lucky
luggage
lumber
lunar
lunch
luxury
lyrics
machine
mad
magic
magnet
maid
mail
main
major
make
mammal
man
manage
mandate
mango
mansion
manual
maple
marble
march
margin
marine
market
marriage
mask
mass
master
match
material
math
matrix
matter
maximum
maze
meadow
mean
measure
meat
mechanic
medal
media
melody
melt
member
memory
mention
menu
mercy
merge
merit
merry
mesh
message
metal
method
middle
midnight
milk
million
mimic
mind
minimum
minor
minute
miracle
mirror
misery
miss
mistake
mix
mixed
mixture
mobile
model
modify
mom
moment
monitor
monkey
monster
month
moon
moral
more
morning
mosquito
mother
motion
motor
mountain
mouse
move
movie
much
muffin
mule
multiply
muscle
museum
mushroom
music
must
mutual
myself
mystery
myth
naive
name
napkin
narrow
nasty
nation
nature
near
neck
need
negative
neglect
neither
nephew
nerve
nest
net
network
neutral
never
news
next
nice
night
noble
noise
nominee
noodle
normal
north
nose
notable
note
nothing
notice
novel
now
nuclear
number
nurse
nut
oak
obey
object
oblige
obscure
observe
obtain
obvious
occur
ocean
october
odor
off
offer
office
often
oil
okay
old
olive
olympic
omit
once
one
onion
online
only
open
opera
opinion
oppose
option
orange
orbit
orchard
order
ordinary
organ
orient
original
orphan
ostrich
other
outdoor
outer
output
outside
oval
oven
over
own
owner
oxygen
oyster
ozone
pact
paddle
page
pair
palace
palm
panda
panel
panic
panther
paper
parade
parent
park
parrot
party
pass
patch
path
patient
patrol
pattern
pause
pave
payment
peace
peanut
pear
peasant
pelican
pen
penalty
pencil
people
pepper
perfect
permit
person
pet
phone
photo
phrase
physical
piano
picnic
picture
piece
pig
pigeon
pill
pilot
pink
pioneer
pipe
pistol
pitch
pizza
place
planet
plastic
plate
play
please
pledge
pluck
plug
plunge
poem
poet
point
polar
pole
police
pond
pony
pool
popular
portion
position
possible
post
potato
pottery
poverty
powder
power
practice
praise
predict
prefer
prepare
present
pretty
prevent
price
pride
primary
print
priority
prison
private
prize
problem
process
produce
profit
program
project
promote
proof
property
prosper
protect
proud
provide
public
pudding
pull
pulp
pulse
pumpkin
punch
pupil
puppy
purchase
purity
purpose
purse
push
put
puzzle
pyramid
quality
quantum
quarter
question
quick
quit
quiz
quote
rabbit
raccoon
race
rack
radar
radio
rail
rain
raise
rally
ramp
ranch
random
range
rapid
rare
rate
rather
raven
raw
razor
ready
real
reason
rebel
rebuild
recall
receive
recipe
record
recycle
reduce
reflect
reform
refuse
region
regret
regular
reject
relax
release
relief
rely
remain
remember
remind
remove
render
renew
rent
reopen
repair
repeat
replace
report
require
rescue
resemble
resist
resource
response
result
retire
retreat
return
reunion
reveal
review
reward
rhythm
rib
ribbon
rice
rich
ride
ridge
rifle
right
rigid
ring
riot
ripple
risk
ritual
rival
river
road
roast
robot
robust
rocket
romance
roof
rookie
room
rose
rotate
rough
round
route
royal
rubber
rude
rug
rule
run
runway
rural
sad
saddle
sadness
safe
sail
salad
salmon
salon
salt
salute
same
sample
sand
satisfy
satoshi
sauce
sausage
save
say
scale
scan
scare
scatter
scene
scheme
school
science
scissors
scorpion
scout
scrap
screen
script
scrub
sea
search
season
seat
second
secret
section
security
seed
seek
segment
select
sell
seminar
senior
sense
sentence
series
service
session
settle
setup
seven
shadow
shaft
shallow
share
shed
shell
sheriff
shield
shift
shine
ship
shiver
shock
shoe
shoot
shop
short
shoulder
shove
shrimp
shrug
shuffle
shy
sibling
sick
side
siege
sight
sign
silent
silk
silly
silver
similar
simple
since
sing
siren
sister
situate
six
size
skate
sketch
ski
skill
skin
skirt
skull
slab
slam
sleep
slender
slice
slide
slight
slim
slogan
slot
slow
slush
small
smart
smile
smoke
smooth
snack
snake
snap
sniff
snow
soap
soccer
social
sock
soda
soft
solar
soldier
solid
solution
solve
someone
song
soon
sorry
sort
soul
sound
soup
source
south
space
spare
spatial
spawn
speak
special
speed
spell
spend
sphere
spice
spider
spike
spin
spirit
split
spoil
sponsor
spoon
sport
spot
spray
spread
spring
spy
square
squeeze
squirrel
stable
stadium
staff
stage
stairs
stamp
stand
start
state
stay
steak
steel
stem
step
stereo
stick
still
sting
stock
stomach
stone
stool
story
stove
strategy
street
strike
strong
struggle
student
stuff
stumble
style
subject
submit
subway
success
such
sudden
suffer
sugar
suggest
suit
summer
sun
sunny
sunset
super
supply
supreme
sure
surface
surge
surprise
surround
survey
suspect
sustain
swallow
swamp
swap
swarm
swear
sweet
swift
swim
swing
switch
sword
symbol
symptom
syrup
system
table
tackle
tag
tail
talent
talk
tank
tape
target
task
taste
tattoo
taxi
teach
team
tell
ten
tenant
tennis
tent
term
test
text
thank
that
theme
then
theory
there
they
thing
this
thought
three
thrive
throw
thumb
thunder
ticket
tide
tiger
tilt
timber
time
tiny
tip
tired
tissue
title
toast
tobacco
today
toddler
toe
together
toilet
token
tomato
tomorrow
tone
tongue
tonight
tool
tooth
top
topic
topple
torch
tornado
tortoise
toss
total
tourist
toward
tower
town
toy
track
trade
traffic
tragic
train
transfer
trap
trash
travel
tray
treat
tree
trend
trial
tribe
trick
trigger
trim
trip
trophy
trouble
truck
true
truly
trumpet
trust
truth
try
tube
tuition
tumble
tuna
tunnel
turkey
turn
turtle
twelve
twenty
twice
twin
twist
two
type
typical
ugly
umbrella
unable
unaware
uncle
uncover
under
undo
unfair
unfold
unhappy
uniform
unique
unit
universe
unknown
unlock
until
unusual
unveil
update
upgrade
uphold
upon
upper
upset
urban
urge
usage
use
used
useful
useless
usual
utility
vacant
vacuum
vague
valid
valley
valve
van
vanish
vapor
various
vast
vault
vehicle
velvet
vendor
venture
venue
verb
verify
version
very
vessel
veteran
viable
vibrant
vicious
victory
video
view
village
vintage
violin
virtual
virus
visa
visit
visual
vital
vivid
vocal
voice
void
volcano
volume
vote
voyage
wage
wagon
wait
walk
wall
walnut
want
warfare
warm
warrior
wash
wasp
waste
water
wave
way
wealth
weapon
wear
weasel
weather
web
wedding
weekend
weird
welcome
west
wet
whale
what
wheat
wheel
when
where
whip
whisper
wide
width
wife
wild
will
win
window
wine
wing
wink
winner
winter
wire
wisdom
wise
wish
witness
wolf
woman
wonder
wood
wool
word
work
world
worry
worth
wrap
wreck
wrestle
wrist
write
wrong
yard
year
yellow
you
young
youth
zebra
zero
zone
zoo`.split("\n");
      function tn(e) {
        if (!Number.isSafeInteger(e) || e < 0) throw Error(`Wrong positive integer: ${e}`);
      }
      function ti(e, ...t) {
        if (!(e instanceof Uint8Array || (null != e && "object" == typeof e && "Uint8Array" === e.constructor.name))) throw Error("Expected Uint8Array");
        if (t.length > 0 && !t.includes(e.length)) throw Error(`Expected Uint8Array of length ${t}, not of length=${e.length}`);
      }
      function to(e) {
        if ("function" != typeof e || "function" != typeof e.create) throw Error("Hash should be wrapped by utils.wrapConstructor");
        tn(e.outputLen), tn(e.blockLen);
      }
      function ta(e, t = !0) {
        if (e.destroyed) throw Error("Hash instance has been destroyed");
        if (t && e.finished) throw Error("Hash#digest() has already been called");
      }
      let ts = "object" == typeof globalThis && "crypto" in globalThis ? globalThis.crypto : void 0,
        tl = (e) => new DataView(e.buffer, e.byteOffset, e.byteLength),
        tu = (e, t) => (e << (32 - t)) | (e >>> t);
      if (68 !== new Uint8Array(new Uint32Array([287454020]).buffer)[0]) throw Error("Non little-endian hardware is not supported");
      function tc(e) {
        var t;
        if (
          ("string" == typeof e &&
            (e = (function (e) {
              if ("string" != typeof e) throw Error(`utf8ToBytes expected string, got ${typeof e}`);
              return new Uint8Array(new TextEncoder().encode(e));
            })(e)),
            !((t = e) instanceof Uint8Array || (null != t && "object" == typeof t && "Uint8Array" === t.constructor.name)))
        )
          throw Error(`expected Uint8Array, got ${typeof e}`);
        return e;
      }
      class th {
        clone() {
          return this._cloneInto();
        }
      }
      let tf = {}.toString;
      function td(e) {
        let t = (t) => e().update(tc(t)).digest(),
          r = e();
        return (t.outputLen = r.outputLen), (t.blockLen = r.blockLen), (t.create = () => e()), t;
      }
      class tp extends th {
        constructor(e, t) {
          super(), (this.finished = !1), (this.destroyed = !1), to(e);
          let r = tc(t);
          if (((this.iHash = e.create()), "function" != typeof this.iHash.update)) throw Error("Expected instance of class which extends utils.Hash");
          (this.blockLen = this.iHash.blockLen), (this.outputLen = this.iHash.outputLen);
          let n = this.blockLen,
            i = new Uint8Array(n);
          i.set(r.length > n ? e.create().update(r).digest() : r);
          for (let e = 0; e < i.length; e++) i[e] ^= 54;
          this.iHash.update(i), (this.oHash = e.create());
          for (let e = 0; e < i.length; e++) i[e] ^= 106;
          this.oHash.update(i), i.fill(0);
        }
        update(e) {
          return ta(this), this.iHash.update(e), this;
        }
        digestInto(e) {
          ta(this), ti(e, this.outputLen), (this.finished = !0), this.iHash.digestInto(e), this.oHash.update(e), this.oHash.digestInto(e), this.destroy();
        }
        digest() {
          let e = new Uint8Array(this.oHash.outputLen);
          return this.digestInto(e), e;
        }
        _cloneInto(e) {
          e || (e = Object.create(Object.getPrototypeOf(this), {}));
          let { oHash: t, iHash: r, finished: n, destroyed: i, blockLen: o, outputLen: a } = this;
          return (e.finished = n), (e.destroyed = i), (e.blockLen = o), (e.outputLen = a), (e.oHash = t._cloneInto(e.oHash)), (e.iHash = r._cloneInto(e.iHash)), e;
        }
        destroy() {
          (this.destroyed = !0), this.oHash.destroy(), this.iHash.destroy();
        }
      }
      let tg = (e, t, r) => new tp(e, t).update(r).digest();
      tg.create = (e, t) => new tp(e, t);
      class ty extends th {
        constructor(e, t, r, n) {
          super(),
            (this.blockLen = e),
            (this.outputLen = t),
            (this.padOffset = r),
            (this.isLE = n),
            (this.finished = !1),
            (this.length = 0),
            (this.pos = 0),
            (this.destroyed = !1),
            (this.buffer = new Uint8Array(e)),
            (this.view = tl(this.buffer));
        }
        update(e) {
          ta(this);
          let { view: t, buffer: r, blockLen: n } = this,
            i = (e = tc(e)).length;
          for (let o = 0; o < i;) {
            let a = Math.min(n - this.pos, i - o);
            if (a === n) {
              let t = tl(e);
              for (; n <= i - o; o += n) this.process(t, o);
              continue;
            }
            r.set(e.subarray(o, o + a), this.pos), (this.pos += a), (o += a), this.pos === n && (this.process(t, 0), (this.pos = 0));
          }
          return (this.length += e.length), this.roundClean(), this;
        }
        digestInto(e) {
          ta(this),
            (function (e, t) {
              ti(e);
              let r = t.outputLen;
              if (e.length < r) throw Error(`digestInto() expects output buffer of length at least ${r}`);
            })(e, this),
            (this.finished = !0);
          let { buffer: t, view: r, blockLen: n, isLE: i } = this,
            { pos: o } = this;
          (t[o++] = 128), this.buffer.subarray(o).fill(0), this.padOffset > n - o && (this.process(r, 0), (o = 0));
          for (let e = o; e < n; e++) t[e] = 0;
          !(function (e, t, r, n) {
            if ("function" == typeof e.setBigUint64) return e.setBigUint64(t, r, n);
            let i = BigInt(32),
              o = BigInt(4294967295),
              a = Number((r >> i) & o),
              s = Number(r & o),
              l = n ? 4 : 0,
              u = n ? 0 : 4;
            e.setUint32(t + l, a, n), e.setUint32(t + u, s, n);
          })(r, n - 8, BigInt(8 * this.length), i),
            this.process(r, 0);
          let a = tl(e),
            s = this.outputLen;
          if (s % 4) throw Error("_sha2: outputLen should be aligned to 32bit");
          let l = s / 4,
            u = this.get();
          if (l > u.length) throw Error("_sha2: outputLen bigger than state");
          for (let e = 0; e < l; e++) a.setUint32(4 * e, u[e], i);
        }
        digest() {
          let { buffer: e, outputLen: t } = this;
          this.digestInto(e);
          let r = e.slice(0, t);
          return this.destroy(), r;
        }
        _cloneInto(e) {
          e || (e = new this.constructor()), e.set(...this.get());
          let { blockLen: t, buffer: r, length: n, finished: i, destroyed: o, pos: a } = this;
          return (e.length = n), (e.pos = a), (e.finished = i), (e.destroyed = o), n % t && e.buffer.set(r), e;
        }
      }
      let tb = (e, t, r) => (e & t) ^ (~e & r),
        tw = (e, t, r) => (e & t) ^ (e & r) ^ (t & r),
        tm = new Uint32Array([
          1116352408,
          1899447441,
          3049323471,
          3921009573,
          961987163,
          1508970993,
          2453635748,
          2870763221,
          3624381080,
          310598401,
          607225278,
          1426881987,
          1925078388,
          2162078206,
          2614888103,
          3248222580,
          3835390401,
          4022224774,
          264347078,
          604807628,
          770255983,
          1249150122,
          1555081692,
          1996064986,
          2554220882,
          2821834349,
          2952996808,
          3210313671,
          3336571891,
          3584528711,
          113926993,
          338241895,
          666307205,
          773529912,
          1294757372,
          1396182291,
          1695183700,
          1986661051,
          2177026350,
          2456956037,
          2730485921,
          2820302411,
          3259730800,
          3345764771,
          3516065817,
          3600352804,
          4094571909,
          275423344,
          430227734,
          506948616,
          659060556,
          883997877,
          958139571,
          1322822218,
          1537002063,
          1747873779,
          1955562222,
          2024104815,
          2227730452,
          2361852424,
          2428436474,
          2756734187,
          3204031479,
          3329325298,
        ]),
        tv = new Uint32Array([1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225]),
        tE = new Uint32Array(64);
      class tx extends ty {
        constructor() {
          super(64, 32, 8, !1), (this.A = 0 | tv[0]), (this.B = 0 | tv[1]), (this.C = 0 | tv[2]), (this.D = 0 | tv[3]), (this.E = 0 | tv[4]), (this.F = 0 | tv[5]), (this.G = 0 | tv[6]), (this.H = 0 | tv[7]);
        }
        get() {
          let { A: e, B: t, C: r, D: n, E: i, F: o, G: a, H: s } = this;
          return [e, t, r, n, i, o, a, s];
        }
        set(e, t, r, n, i, o, a, s) {
          (this.A = 0 | e), (this.B = 0 | t), (this.C = 0 | r), (this.D = 0 | n), (this.E = 0 | i), (this.F = 0 | o), (this.G = 0 | a), (this.H = 0 | s);
        }
        process(e, t) {
          for (let r = 0; r < 16; r++, t += 4) tE[r] = e.getUint32(t, !1);
          for (let e = 16; e < 64; e++) {
            let t = tE[e - 15],
              r = tE[e - 2],
              n = tu(t, 7) ^ tu(t, 18) ^ (t >>> 3),
              i = tu(r, 17) ^ tu(r, 19) ^ (r >>> 10);
            tE[e] = (i + tE[e - 7] + n + tE[e - 16]) | 0;
          }
          let { A: r, B: n, C: i, D: o, E: a, F: s, G: l, H: u } = this;
          for (let e = 0; e < 64; e++) {
            let t = (u + (tu(a, 6) ^ tu(a, 11) ^ tu(a, 25)) + tb(a, s, l) + tm[e] + tE[e]) | 0,
              c = ((tu(r, 2) ^ tu(r, 13) ^ tu(r, 22)) + tw(r, n, i)) | 0;
            (u = l), (l = s), (s = a), (a = (o + t) | 0), (o = i), (i = n), (n = r), (r = (t + c) | 0);
          }
          (r = (r + this.A) | 0),
            (n = (n + this.B) | 0),
            (i = (i + this.C) | 0),
            (o = (o + this.D) | 0),
            (a = (a + this.E) | 0),
            (s = (s + this.F) | 0),
            (l = (l + this.G) | 0),
            (u = (u + this.H) | 0),
            this.set(r, n, i, o, a, s, l, u);
        }
        roundClean() {
          tE.fill(0);
        }
        destroy() {
          this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
        }
      }
      let tA = td(() => new tx()),
        tk = BigInt(4294967296 - 1),
        tB = BigInt(32);
      var tU = {
        split: function (e, t = !1) {
          let r = new Uint32Array(e.length),
            n = new Uint32Array(e.length);
          for (let i = 0; i < e.length; i++) {
            let { h: o, l: a } = (function (e, t = !1) {
              return t ? { h: Number(e & tk), l: Number((e >> tB) & tk) } : { h: 0 | Number((e >> tB) & tk), l: 0 | Number(e & tk) };
            })(e[i], t);
            [r[i], n[i]] = [o, a];
          }
          return [r, n];
        },
        shrSH: (e, t, r) => e >>> r,
        shrSL: (e, t, r) => (e << (32 - r)) | (t >>> r),
        rotrSH: (e, t, r) => (e >>> r) | (t << (32 - r)),
        rotrSL: (e, t, r) => (e << (32 - r)) | (t >>> r),
        rotrBH: (e, t, r) => (e << (64 - r)) | (t >>> (r - 32)),
        rotrBL: (e, t, r) => (e >>> (r - 32)) | (t << (64 - r)),
        add: function (e, t, r, n) {
          let i = (t >>> 0) + (n >>> 0);
          return { h: (e + r + ((i / 4294967296) | 0)) | 0, l: 0 | i };
        },
        add3L: (e, t, r) => (e >>> 0) + (t >>> 0) + (r >>> 0),
        add3H: (e, t, r, n) => (t + r + n + ((e / 4294967296) | 0)) | 0,
        add4L: (e, t, r, n) => (e >>> 0) + (t >>> 0) + (r >>> 0) + (n >>> 0),
        add4H: (e, t, r, n, i) => (t + r + n + i + ((e / 4294967296) | 0)) | 0,
        add5H: (e, t, r, n, i, o) => (t + r + n + i + o + ((e / 4294967296) | 0)) | 0,
        add5L: (e, t, r, n, i) => (e >>> 0) + (t >>> 0) + (r >>> 0) + (n >>> 0) + (i >>> 0),
      };
      let [tI, tS] = tU.split(
        [
          "0x428a2f98d728ae22",
          "0x7137449123ef65cd",
          "0xb5c0fbcfec4d3b2f",
          "0xe9b5dba58189dbbc",
          "0x3956c25bf348b538",
          "0x59f111f1b605d019",
          "0x923f82a4af194f9b",
          "0xab1c5ed5da6d8118",
          "0xd807aa98a3030242",
          "0x12835b0145706fbe",
          "0x243185be4ee4b28c",
          "0x550c7dc3d5ffb4e2",
          "0x72be5d74f27b896f",
          "0x80deb1fe3b1696b1",
          "0x9bdc06a725c71235",
          "0xc19bf174cf692694",
          "0xe49b69c19ef14ad2",
          "0xefbe4786384f25e3",
          "0x0fc19dc68b8cd5b5",
          "0x240ca1cc77ac9c65",
          "0x2de92c6f592b0275",
          "0x4a7484aa6ea6e483",
          "0x5cb0a9dcbd41fbd4",
          "0x76f988da831153b5",
          "0x983e5152ee66dfab",
          "0xa831c66d2db43210",
          "0xb00327c898fb213f",
          "0xbf597fc7beef0ee4",
          "0xc6e00bf33da88fc2",
          "0xd5a79147930aa725",
          "0x06ca6351e003826f",
          "0x142929670a0e6e70",
          "0x27b70a8546d22ffc",
          "0x2e1b21385c26c926",
          "0x4d2c6dfc5ac42aed",
          "0x53380d139d95b3df",
          "0x650a73548baf63de",
          "0x766a0abb3c77b2a8",
          "0x81c2c92e47edaee6",
          "0x92722c851482353b",
          "0xa2bfe8a14cf10364",
          "0xa81a664bbc423001",
          "0xc24b8b70d0f89791",
          "0xc76c51a30654be30",
          "0xd192e819d6ef5218",
          "0xd69906245565a910",
          "0xf40e35855771202a",
          "0x106aa07032bbd1b8",
          "0x19a4c116b8d2d0c8",
          "0x1e376c085141ab53",
          "0x2748774cdf8eeb99",
          "0x34b0bcb5e19b48a8",
          "0x391c0cb3c5c95a63",
          "0x4ed8aa4ae3418acb",
          "0x5b9cca4f7763e373",
          "0x682e6ff3d6b2b8a3",
          "0x748f82ee5defb2fc",
          "0x78a5636f43172f60",
          "0x84c87814a1f0ab72",
          "0x8cc702081a6439ec",
          "0x90befffa23631e28",
          "0xa4506cebde82bde9",
          "0xbef9a3f7b2c67915",
          "0xc67178f2e372532b",
          "0xca273eceea26619c",
          "0xd186b8c721c0c207",
          "0xeada7dd6cde0eb1e",
          "0xf57d4f7fee6ed178",
          "0x06f067aa72176fba",
          "0x0a637dc5a2c898a6",
          "0x113f9804bef90dae",
          "0x1b710b35131c471b",
          "0x28db77f523047d84",
          "0x32caab7b40c72493",
          "0x3c9ebe0a15c9bebc",
          "0x431d67c49c100d4c",
          "0x4cc5d4becb3e42b6",
          "0x597f299cfc657e2a",
          "0x5fcb6fab3ad6faec",
          "0x6c44198c4a475817",
        ].map((e) => BigInt(e))
      ),
        tL = new Uint32Array(80),
        tH = new Uint32Array(80);
      class t$ extends ty {
        constructor() {
          super(128, 64, 16, !1),
            (this.Ah = 1779033703),
            (this.Al = -205731576),
            (this.Bh = -1150833019),
            (this.Bl = -2067093701),
            (this.Ch = 1013904242),
            (this.Cl = -23791573),
            (this.Dh = -1521486534),
            (this.Dl = 1595750129),
            (this.Eh = 1359893119),
            (this.El = -1377402159),
            (this.Fh = -1694144372),
            (this.Fl = 725511199),
            (this.Gh = 528734635),
            (this.Gl = -79577749),
            (this.Hh = 1541459225),
            (this.Hl = 327033209);
        }
        get() {
          let { Ah: e, Al: t, Bh: r, Bl: n, Ch: i, Cl: o, Dh: a, Dl: s, Eh: l, El: u, Fh: c, Fl: h, Gh: f, Gl: d, Hh: p, Hl: g } = this;
          return [e, t, r, n, i, o, a, s, l, u, c, h, f, d, p, g];
        }
        set(e, t, r, n, i, o, a, s, l, u, c, h, f, d, p, g) {
          (this.Ah = 0 | e),
            (this.Al = 0 | t),
            (this.Bh = 0 | r),
            (this.Bl = 0 | n),
            (this.Ch = 0 | i),
            (this.Cl = 0 | o),
            (this.Dh = 0 | a),
            (this.Dl = 0 | s),
            (this.Eh = 0 | l),
            (this.El = 0 | u),
            (this.Fh = 0 | c),
            (this.Fl = 0 | h),
            (this.Gh = 0 | f),
            (this.Gl = 0 | d),
            (this.Hh = 0 | p),
            (this.Hl = 0 | g);
        }
        process(e, t) {
          for (let r = 0; r < 16; r++, t += 4) (tL[r] = e.getUint32(t)), (tH[r] = e.getUint32((t += 4)));
          for (let e = 16; e < 80; e++) {
            let t = 0 | tL[e - 15],
              r = 0 | tH[e - 15],
              n = tU.rotrSH(t, r, 1) ^ tU.rotrSH(t, r, 8) ^ tU.shrSH(t, r, 7),
              i = tU.rotrSL(t, r, 1) ^ tU.rotrSL(t, r, 8) ^ tU.shrSL(t, r, 7),
              o = 0 | tL[e - 2],
              a = 0 | tH[e - 2],
              s = tU.rotrSH(o, a, 19) ^ tU.rotrBH(o, a, 61) ^ tU.shrSH(o, a, 6),
              l = tU.rotrSL(o, a, 19) ^ tU.rotrBL(o, a, 61) ^ tU.shrSL(o, a, 6),
              u = tU.add4L(i, l, tH[e - 7], tH[e - 16]),
              c = tU.add4H(u, n, s, tL[e - 7], tL[e - 16]);
            (tL[e] = 0 | c), (tH[e] = 0 | u);
          }
          let { Ah: r, Al: n, Bh: i, Bl: o, Ch: a, Cl: s, Dh: l, Dl: u, Eh: c, El: h, Fh: f, Fl: d, Gh: p, Gl: g, Hh: y, Hl: b } = this;
          for (let e = 0; e < 80; e++) {
            let t = tU.rotrSH(c, h, 14) ^ tU.rotrSH(c, h, 18) ^ tU.rotrBH(c, h, 41),
              w = tU.rotrSL(c, h, 14) ^ tU.rotrSL(c, h, 18) ^ tU.rotrBL(c, h, 41),
              m = (c & f) ^ (~c & p),
              v = (h & d) ^ (~h & g),
              E = tU.add5L(b, w, v, tS[e], tH[e]),
              x = tU.add5H(E, y, t, m, tI[e], tL[e]),
              A = 0 | E,
              k = tU.rotrSH(r, n, 28) ^ tU.rotrBH(r, n, 34) ^ tU.rotrBH(r, n, 39),
              B = tU.rotrSL(r, n, 28) ^ tU.rotrBL(r, n, 34) ^ tU.rotrBL(r, n, 39),
              U = (r & i) ^ (r & a) ^ (i & a),
              I = (n & o) ^ (n & s) ^ (o & s);
            (y = 0 | p), (b = 0 | g), (p = 0 | f), (g = 0 | d), (f = 0 | c), (d = 0 | h), ({ h: c, l: h } = tU.add(0 | l, 0 | u, 0 | x, 0 | A)), (l = 0 | a), (u = 0 | s), (a = 0 | i), (s = 0 | o), (i = 0 | r), (o = 0 | n);
            let S = tU.add3L(A, B, I);
            (r = tU.add3H(S, x, k, U)), (n = 0 | S);
          }
          ({ h: r, l: n } = tU.add(0 | this.Ah, 0 | this.Al, 0 | r, 0 | n)),
            ({ h: i, l: o } = tU.add(0 | this.Bh, 0 | this.Bl, 0 | i, 0 | o)),
            ({ h: a, l: s } = tU.add(0 | this.Ch, 0 | this.Cl, 0 | a, 0 | s)),
            ({ h: l, l: u } = tU.add(0 | this.Dh, 0 | this.Dl, 0 | l, 0 | u)),
            ({ h: c, l: h } = tU.add(0 | this.Eh, 0 | this.El, 0 | c, 0 | h)),
            ({ h: f, l: d } = tU.add(0 | this.Fh, 0 | this.Fl, 0 | f, 0 | d)),
            ({ h: p, l: g } = tU.add(0 | this.Gh, 0 | this.Gl, 0 | p, 0 | g)),
            ({ h: y, l: b } = tU.add(0 | this.Hh, 0 | this.Hl, 0 | y, 0 | b)),
            this.set(r, n, i, o, a, s, l, u, c, h, f, d, p, g, y, b);
        }
        roundClean() {
          tL.fill(0), tH.fill(0);
        }
        destroy() {
          this.buffer.fill(0), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        }
      }
      let t_ = td(() => new t$());
      function tC(e) {
        return e instanceof Uint8Array || (null != e && "object" == typeof e && "Uint8Array" === e.constructor.name);
      }
      function tR(...e) {
        let t = (e) => e,
          r = (e, t) => (r) => e(t(r));
        return { encode: e.map((e) => e.encode).reduceRight(r, t), decode: e.map((e) => e.decode).reduce(r, t) };
      }
      function tO(e) {
        return {
          encode: (t) => {
            if (!Array.isArray(t) || (t.length && "number" != typeof t[0])) throw Error("alphabet.encode input should be an array of numbers");
            return t.map((t) => {
              if (t < 0 || t >= e.length) throw Error(`Digit index outside alphabet: ${t} (alphabet: ${e.length})`);
              return e[t];
            });
          },
          decode: (t) => {
            if (!Array.isArray(t) || (t.length && "string" != typeof t[0])) throw Error("alphabet.decode input should be array of strings");
            return t.map((t) => {
              if ("string" != typeof t) throw Error(`alphabet.decode: not string element=${t}`);
              let r = e.indexOf(t);
              if (-1 === r) throw Error(`Unknown letter: "${t}". Allowed: ${e}`);
              return r;
            });
          },
        };
      }
      function tN(e = "") {
        if ("string" != typeof e) throw Error("join separator should be string");
        return {
          encode: (t) => {
            if (!Array.isArray(t) || (t.length && "string" != typeof t[0])) throw Error("join.encode input should be array of strings");
            for (let e of t) if ("string" != typeof e) throw Error(`join.encode: non-string input=${e}`);
            return t.join(e);
          },
          decode: (t) => {
            if ("string" != typeof t) throw Error("join.decode input should be string");
            return t.split(e);
          },
        };
      }
      function tj(e, t, r) {
        if (t < 2) throw Error(`convertRadix: wrong from=${t}, base cannot be less than 2`);
        if (r < 2) throw Error(`convertRadix: wrong to=${r}, base cannot be less than 2`);
        if (!Array.isArray(e)) throw Error("convertRadix: data should be array");
        if (!e.length) return [];
        let n = 0,
          i = [],
          o = Array.from(e);
        for (
          o.forEach((e) => {
            if (e < 0 || e >= t) throw Error(`Wrong integer: ${e}`);
          });
          ;

        ) {
          let e = 0,
            a = !0;
          for (let i = n; i < o.length; i++) {
            let s = o[i],
              l = t * e + s;
            if (!Number.isSafeInteger(l) || (t * e) / t !== e || l - s != t * e) throw Error("convertRadix: carry overflow");
            e = l % r;
            let u = Math.floor(l / r);
            if (((o[i] = u), !Number.isSafeInteger(u) || u * r + e !== l)) throw Error("convertRadix: carry overflow");
            a && (u ? (a = !1) : (n = i));
          }
          if ((i.push(e), a)) break;
        }
        for (let t = 0; t < e.length - 1 && 0 === e[t]; t++) i.push(0);
        return i.reverse();
      }
      let tK = (e, t) => (t ? tK(t, e % t) : e),
        tz = (e, t) => e + (t - tK(e, t));
      function tq(e, t, r, n) {
        if (!Array.isArray(e)) throw Error("convertRadix2: data should be array");
        if (t <= 0 || t > 32) throw Error(`convertRadix2: wrong from=${t}`);
        if (r <= 0 || r > 32) throw Error(`convertRadix2: wrong to=${r}`);
        if (tz(t, r) > 32) throw Error(`convertRadix2: carry overflow from=${t} to=${r} carryBits=${tz(t, r)}`);
        let i = 0,
          o = 0,
          a = 2 ** r - 1,
          s = [];
        for (let n of e) {
          if (n >= 2 ** t) throw Error(`convertRadix2: invalid data word=${n} from=${t}`);
          if (((i = (i << t) | n), o + t > 32)) throw Error(`convertRadix2: carry overflow pos=${o} from=${t}`);
          for (o += t; o >= r; o -= r) s.push(((i >> (o - r)) & a) >>> 0);
          i &= 2 ** o - 1;
        }
        if (((i = (i << (r - o)) & a), !n && o >= t)) throw Error("Excess padding");
        if (!n && i) throw Error(`Non-zero padding: ${i}`);
        return n && o > 0 && s.push(i >>> 0), s;
      }
      function tT(e, t) {
        if ("function" != typeof t) throw Error("checksum fn should be function");
        return {
          encode(r) {
            if (!tC(r)) throw Error("checksum.encode: input should be Uint8Array");
            let n = t(r).slice(0, e),
              i = new Uint8Array(r.length + e);
            return i.set(r), i.set(n, r.length), i;
          },
          decode(r) {
            if (!tC(r)) throw Error("checksum.decode: input should be Uint8Array");
            let n = r.slice(0, -e),
              i = t(n).slice(0, e),
              o = r.slice(-e);
            for (let t = 0; t < e; t++) if (i[t] !== o[t]) throw Error("Invalid checksum");
            return n;
          },
        };
      }
      let tP = function (e, t = !1) {
        if (e <= 0 || e > 32) throw Error("radix2: bits should be in (0..32]");
        if (tz(8, e) > 32 || tz(e, 8) > 32) throw Error("radix2: carry overflow");
        return {
          encode: (r) => {
            if (!tC(r)) throw Error("radix2.encode input should be Uint8Array");
            return tq(Array.from(r), 8, e, !t);
          },
          decode: (r) => {
            if (!Array.isArray(r) || (r.length && "number" != typeof r[0])) throw Error("radix2.decode input should be array of numbers");
            return Uint8Array.from(tq(r, e, 8, t));
          },
        };
      },
        tD = tR(
          {
            encode: (e) => {
              if (!tC(e)) throw Error("radix.encode input should be Uint8Array");
              return tj(Array.from(e), 256, 58);
            },
            decode: (e) => {
              if (!Array.isArray(e) || (e.length && "number" != typeof e[0])) throw Error("radix.decode input should be array of numbers");
              return Uint8Array.from(tj(e, 58, 256));
            },
          },
          tO("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"),
          tN("")
        ),
        tM = (e) => "あいこくしん" === e[0];
      function tF(e) {
        if ("string" != typeof e) throw TypeError(`Invalid mnemonic type: ${typeof e}`);
        return e.normalize("NFKD");
      }
      function tV(e) {
        let t = tF(e),
          r = t.split(" ");
        if (![12, 15, 18, 21, 24].includes(r.length)) throw Error("Invalid mnemonic");
        return { nfkd: t, words: r };
      }
      function tZ(e) {
        ti(e, 16, 20, 24, 28, 32);
      }
      let tG = (e) => {
        let t = 8 - e.length / 4;
        return new Uint8Array([(tA(e)[0] >> t) << t]);
      };
      function tW(e) {
        if (!Array.isArray(e) || 2048 !== e.length || "string" != typeof e[0]) throw Error("Worlist: expected array of 2048 strings");
        return (
          e.forEach((e) => {
            if ("string" != typeof e) throw Error(`Wordlist: non-string element: ${e}`);
          }),
          tR(tT(1, tG), tP(11, !0), tO(e))
        );
      }
      let tJ = (e) => tF(`mnemonic${e}`);
      function tY(e) {
        if (!Number.isSafeInteger(e) || e < 0) throw Error(`Wrong positive integer: ${e}`);
      }
      function tQ(e, ...t) {
        if (!(e instanceof Uint8Array || (null != e && "object" == typeof e && "Uint8Array" === e.constructor.name))) throw Error("Expected Uint8Array");
        if (t.length > 0 && !t.includes(e.length)) throw Error(`Expected Uint8Array of length ${t}, not of length=${e.length}`);
      }
      function tX(e, t = !0) {
        if (e.destroyed) throw Error("Hash instance has been destroyed");
        if (t && e.finished) throw Error("Hash#digest() has already been called");
      }
      function t0(e) {
        return e instanceof Uint8Array || (null != e && "object" == typeof e && "Uint8Array" === e.constructor.name);
      }
      let t1 = (e) => new DataView(e.buffer, e.byteOffset, e.byteLength),
        t2 = (e, t) => (e << (32 - t)) | (e >>> t);
      if (68 !== new Uint8Array(new Uint32Array([287454020]).buffer)[0]) throw Error("Non little-endian hardware is not supported");
      let t3 = Array.from({ length: 256 }, (e, t) => t.toString(16).padStart(2, "0")),
        t8 = { _0: 48, _9: 57, _A: 65, _F: 70, _a: 97, _f: 102 };
      function t4(e) {
        return e >= t8._0 && e <= t8._9 ? e - t8._0 : e >= t8._A && e <= t8._F ? e - (t8._A - 10) : e >= t8._a && e <= t8._f ? e - (t8._a - 10) : void 0;
      }
      function t5(e) {
        if ("string" != typeof e) throw Error(`utf8ToBytes expected string, got ${typeof e}`);
        return new Uint8Array(new TextEncoder().encode(e));
      }
      function t6(e) {
        if (("string" == typeof e && (e = t5(e)), !t0(e))) throw Error(`expected Uint8Array, got ${typeof e}`);
        return e;
      }
      function t7(...e) {
        let t = 0;
        for (let r = 0; r < e.length; r++) {
          let n = e[r];
          if (!t0(n)) throw Error("Uint8Array expected");
          t += n.length;
        }
        let r = new Uint8Array(t);
        for (let t = 0, n = 0; t < e.length; t++) {
          let i = e[t];
          r.set(i, n), (n += i.length);
        }
        return r;
      }
      class t9 {
        clone() {
          return this._cloneInto();
        }
      }
      function re(e) {
        let t = (t) => e().update(t6(t)).digest(),
          r = e();
        return (t.outputLen = r.outputLen), (t.blockLen = r.blockLen), (t.create = () => e()), t;
      }
      class rt extends t9 {
        constructor(e, t) {
          super(),
            (this.finished = !1),
            (this.destroyed = !1),
            (function (e) {
              if ("function" != typeof e || "function" != typeof e.create) throw Error("Hash should be wrapped by utils.wrapConstructor");
              tY(e.outputLen), tY(e.blockLen);
            })(e);
          let r = t6(t);
          if (((this.iHash = e.create()), "function" != typeof this.iHash.update)) throw Error("Expected instance of class which extends utils.Hash");
          (this.blockLen = this.iHash.blockLen), (this.outputLen = this.iHash.outputLen);
          let n = this.blockLen,
            i = new Uint8Array(n);
          i.set(r.length > n ? e.create().update(r).digest() : r);
          for (let e = 0; e < i.length; e++) i[e] ^= 54;
          this.iHash.update(i), (this.oHash = e.create());
          for (let e = 0; e < i.length; e++) i[e] ^= 106;
          this.oHash.update(i), i.fill(0);
        }
        update(e) {
          return tX(this), this.iHash.update(e), this;
        }
        digestInto(e) {
          tX(this), tQ(e, this.outputLen), (this.finished = !0), this.iHash.digestInto(e), this.oHash.update(e), this.oHash.digestInto(e), this.destroy();
        }
        digest() {
          let e = new Uint8Array(this.oHash.outputLen);
          return this.digestInto(e), e;
        }
        _cloneInto(e) {
          e || (e = Object.create(Object.getPrototypeOf(this), {}));
          let { oHash: t, iHash: r, finished: n, destroyed: i, blockLen: o, outputLen: a } = this;
          return (e.finished = n), (e.destroyed = i), (e.blockLen = o), (e.outputLen = a), (e.oHash = t._cloneInto(e.oHash)), (e.iHash = r._cloneInto(e.iHash)), e;
        }
        destroy() {
          (this.destroyed = !0), this.oHash.destroy(), this.iHash.destroy();
        }
      }
      let rr = (e, t, r) => new rt(e, t).update(r).digest();
      rr.create = (e, t) => new rt(e, t);
      class rn extends t9 {
        constructor(e, t, r, n) {
          super(),
            (this.blockLen = e),
            (this.outputLen = t),
            (this.padOffset = r),
            (this.isLE = n),
            (this.finished = !1),
            (this.length = 0),
            (this.pos = 0),
            (this.destroyed = !1),
            (this.buffer = new Uint8Array(e)),
            (this.view = t1(this.buffer));
        }
        update(e) {
          tX(this);
          let { view: t, buffer: r, blockLen: n } = this,
            i = (e = t6(e)).length;
          for (let o = 0; o < i;) {
            let a = Math.min(n - this.pos, i - o);
            if (a === n) {
              let t = t1(e);
              for (; n <= i - o; o += n) this.process(t, o);
              continue;
            }
            r.set(e.subarray(o, o + a), this.pos), (this.pos += a), (o += a), this.pos === n && (this.process(t, 0), (this.pos = 0));
          }
          return (this.length += e.length), this.roundClean(), this;
        }
        digestInto(e) {
          tX(this),
            (function (e, t) {
              tQ(e);
              let r = t.outputLen;
              if (e.length < r) throw Error(`digestInto() expects output buffer of length at least ${r}`);
            })(e, this),
            (this.finished = !0);
          let { buffer: t, view: r, blockLen: n, isLE: i } = this,
            { pos: o } = this;
          (t[o++] = 128), this.buffer.subarray(o).fill(0), this.padOffset > n - o && (this.process(r, 0), (o = 0));
          for (let e = o; e < n; e++) t[e] = 0;
          !(function (e, t, r, n) {
            if ("function" == typeof e.setBigUint64) return e.setBigUint64(t, r, n);
            let i = BigInt(32),
              o = BigInt(4294967295),
              a = Number((r >> i) & o),
              s = Number(r & o),
              l = n ? 4 : 0,
              u = n ? 0 : 4;
            e.setUint32(t + l, a, n), e.setUint32(t + u, s, n);
          })(r, n - 8, BigInt(8 * this.length), i),
            this.process(r, 0);
          let a = t1(e),
            s = this.outputLen;
          if (s % 4) throw Error("_sha2: outputLen should be aligned to 32bit");
          let l = s / 4,
            u = this.get();
          if (l > u.length) throw Error("_sha2: outputLen bigger than state");
          for (let e = 0; e < l; e++) a.setUint32(4 * e, u[e], i);
        }
        digest() {
          let { buffer: e, outputLen: t } = this;
          this.digestInto(e);
          let r = e.slice(0, t);
          return this.destroy(), r;
        }
        _cloneInto(e) {
          e || (e = new this.constructor()), e.set(...this.get());
          let { blockLen: t, buffer: r, length: n, finished: i, destroyed: o, pos: a } = this;
          return (e.length = n), (e.pos = a), (e.finished = i), (e.destroyed = o), n % t && e.buffer.set(r), e;
        }
      }
      let ri = new Uint8Array([7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8]),
        ro = Uint8Array.from({ length: 16 }, (e, t) => t),
        ra = ro.map((e) => (9 * e + 5) % 16),
        rs = [ro],
        rl = [ra];
      for (let e = 0; e < 4; e++) for (let t of [rs, rl]) t.push(t[e].map((e) => ri[e]));
      let ru = [
        [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8],
        [12, 13, 11, 15, 6, 9, 9, 7, 12, 15, 11, 13, 7, 8, 7, 7],
        [13, 15, 14, 11, 7, 7, 6, 8, 13, 14, 13, 12, 5, 5, 6, 9],
        [14, 11, 12, 14, 8, 6, 5, 5, 15, 12, 15, 14, 9, 9, 8, 6],
        [15, 12, 13, 13, 9, 5, 8, 6, 14, 11, 12, 11, 8, 6, 5, 5],
      ].map((e) => new Uint8Array(e)),
        rc = rs.map((e, t) => e.map((e) => ru[t][e])),
        rh = rl.map((e, t) => e.map((e) => ru[t][e])),
        rf = new Uint32Array([0, 1518500249, 1859775393, 2400959708, 2840853838]),
        rd = new Uint32Array([1352829926, 1548603684, 1836072691, 2053994217, 0]),
        rp = (e, t) => (e << t) | (e >>> (32 - t));
      function rg(e, t, r, n) {
        return 0 === e ? t ^ r ^ n : 1 === e ? (t & r) | (~t & n) : 2 === e ? (t | ~r) ^ n : 3 === e ? (t & n) | (r & ~n) : t ^ (r | ~n);
      }
      let ry = new Uint32Array(16);
      class rb extends rn {
        constructor() {
          super(64, 20, 8, !0), (this.h0 = 1732584193), (this.h1 = -271733879), (this.h2 = -1732584194), (this.h3 = 271733878), (this.h4 = -1009589776);
        }
        get() {
          let { h0: e, h1: t, h2: r, h3: n, h4: i } = this;
          return [e, t, r, n, i];
        }
        set(e, t, r, n, i) {
          (this.h0 = 0 | e), (this.h1 = 0 | t), (this.h2 = 0 | r), (this.h3 = 0 | n), (this.h4 = 0 | i);
        }
        process(e, t) {
          for (let r = 0; r < 16; r++, t += 4) ry[r] = e.getUint32(t, !0);
          let r = 0 | this.h0,
            n = r,
            i = 0 | this.h1,
            o = i,
            a = 0 | this.h2,
            s = a,
            l = 0 | this.h3,
            u = l,
            c = 0 | this.h4,
            h = c;
          for (let e = 0; e < 5; e++) {
            let t = 4 - e,
              f = rf[e],
              d = rd[e],
              p = rs[e],
              g = rl[e],
              y = rc[e],
              b = rh[e];
            for (let t = 0; t < 16; t++) {
              let n = (rp(r + rg(e, i, a, l) + ry[p[t]] + f, y[t]) + c) | 0;
              (r = c), (c = l), (l = 0 | rp(a, 10)), (a = i), (i = n);
            }
            for (let e = 0; e < 16; e++) {
              let r = (rp(n + rg(t, o, s, u) + ry[g[e]] + d, b[e]) + h) | 0;
              (n = h), (h = u), (u = 0 | rp(s, 10)), (s = o), (o = r);
            }
          }
          this.set((this.h1 + a + u) | 0, (this.h2 + l + h) | 0, (this.h3 + c + n) | 0, (this.h4 + r + o) | 0, (this.h0 + i + s) | 0);
        }
        roundClean() {
          ry.fill(0);
        }
        destroy() {
          (this.destroyed = !0), this.buffer.fill(0), this.set(0, 0, 0, 0, 0);
        }
      }
      let rw = re(() => new rb()),
        rm = (e, t, r) => (e & t) ^ (~e & r),
        rv = (e, t, r) => (e & t) ^ (e & r) ^ (t & r),
        rE = new Uint32Array([
          1116352408,
          1899447441,
          3049323471,
          3921009573,
          961987163,
          1508970993,
          2453635748,
          2870763221,
          3624381080,
          310598401,
          607225278,
          1426881987,
          1925078388,
          2162078206,
          2614888103,
          3248222580,
          3835390401,
          4022224774,
          264347078,
          604807628,
          770255983,
          1249150122,
          1555081692,
          1996064986,
          2554220882,
          2821834349,
          2952996808,
          3210313671,
          3336571891,
          3584528711,
          113926993,
          338241895,
          666307205,
          773529912,
          1294757372,
          1396182291,
          1695183700,
          1986661051,
          2177026350,
          2456956037,
          2730485921,
          2820302411,
          3259730800,
          3345764771,
          3516065817,
          3600352804,
          4094571909,
          275423344,
          430227734,
          506948616,
          659060556,
          883997877,
          958139571,
          1322822218,
          1537002063,
          1747873779,
          1955562222,
          2024104815,
          2227730452,
          2361852424,
          2428436474,
          2756734187,
          3204031479,
          3329325298,
        ]),
        rx = new Uint32Array([1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225]),
        rA = new Uint32Array(64);
      class rk extends rn {
        constructor() {
          super(64, 32, 8, !1), (this.A = 0 | rx[0]), (this.B = 0 | rx[1]), (this.C = 0 | rx[2]), (this.D = 0 | rx[3]), (this.E = 0 | rx[4]), (this.F = 0 | rx[5]), (this.G = 0 | rx[6]), (this.H = 0 | rx[7]);
        }
        get() {
          let { A: e, B: t, C: r, D: n, E: i, F: o, G: a, H: s } = this;
          return [e, t, r, n, i, o, a, s];
        }
        set(e, t, r, n, i, o, a, s) {
          (this.A = 0 | e), (this.B = 0 | t), (this.C = 0 | r), (this.D = 0 | n), (this.E = 0 | i), (this.F = 0 | o), (this.G = 0 | a), (this.H = 0 | s);
        }
        process(e, t) {
          for (let r = 0; r < 16; r++, t += 4) rA[r] = e.getUint32(t, !1);
          for (let e = 16; e < 64; e++) {
            let t = rA[e - 15],
              r = rA[e - 2],
              n = t2(t, 7) ^ t2(t, 18) ^ (t >>> 3),
              i = t2(r, 17) ^ t2(r, 19) ^ (r >>> 10);
            rA[e] = (i + rA[e - 7] + n + rA[e - 16]) | 0;
          }
          let { A: r, B: n, C: i, D: o, E: a, F: s, G: l, H: u } = this;
          for (let e = 0; e < 64; e++) {
            let t = (u + (t2(a, 6) ^ t2(a, 11) ^ t2(a, 25)) + rm(a, s, l) + rE[e] + rA[e]) | 0,
              c = ((t2(r, 2) ^ t2(r, 13) ^ t2(r, 22)) + rv(r, n, i)) | 0;
            (u = l), (l = s), (s = a), (a = (o + t) | 0), (o = i), (i = n), (n = r), (r = (t + c) | 0);
          }
          (r = (r + this.A) | 0),
            (n = (n + this.B) | 0),
            (i = (i + this.C) | 0),
            (o = (o + this.D) | 0),
            (a = (a + this.E) | 0),
            (s = (s + this.F) | 0),
            (l = (l + this.G) | 0),
            (u = (u + this.H) | 0),
            this.set(r, n, i, o, a, s, l, u);
        }
        roundClean() {
          rA.fill(0);
        }
        destroy() {
          this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
        }
      }
      let rB = re(() => new rk()),
        rU = BigInt(4294967296 - 1),
        rI = BigInt(32);
      var rS = {
        split: function (e, t = !1) {
          let r = new Uint32Array(e.length),
            n = new Uint32Array(e.length);
          for (let i = 0; i < e.length; i++) {
            let { h: o, l: a } = (function (e, t = !1) {
              return t ? { h: Number(e & rU), l: Number((e >> rI) & rU) } : { h: 0 | Number((e >> rI) & rU), l: 0 | Number(e & rU) };
            })(e[i], t);
            [r[i], n[i]] = [o, a];
          }
          return [r, n];
        },
        shrSH: (e, t, r) => e >>> r,
        shrSL: (e, t, r) => (e << (32 - r)) | (t >>> r),
        rotrSH: (e, t, r) => (e >>> r) | (t << (32 - r)),
        rotrSL: (e, t, r) => (e << (32 - r)) | (t >>> r),
        rotrBH: (e, t, r) => (e << (64 - r)) | (t >>> (r - 32)),
        rotrBL: (e, t, r) => (e >>> (r - 32)) | (t << (64 - r)),
        add: function (e, t, r, n) {
          let i = (t >>> 0) + (n >>> 0);
          return { h: (e + r + ((i / 4294967296) | 0)) | 0, l: 0 | i };
        },
        add3L: (e, t, r) => (e >>> 0) + (t >>> 0) + (r >>> 0),
        add3H: (e, t, r, n) => (t + r + n + ((e / 4294967296) | 0)) | 0,
        add4L: (e, t, r, n) => (e >>> 0) + (t >>> 0) + (r >>> 0) + (n >>> 0),
        add4H: (e, t, r, n, i) => (t + r + n + i + ((e / 4294967296) | 0)) | 0,
        add5H: (e, t, r, n, i, o) => (t + r + n + i + o + ((e / 4294967296) | 0)) | 0,
        add5L: (e, t, r, n, i) => (e >>> 0) + (t >>> 0) + (r >>> 0) + (n >>> 0) + (i >>> 0),
      };
      let [rL, rH] = rS.split(
        [
          "0x428a2f98d728ae22",
          "0x7137449123ef65cd",
          "0xb5c0fbcfec4d3b2f",
          "0xe9b5dba58189dbbc",
          "0x3956c25bf348b538",
          "0x59f111f1b605d019",
          "0x923f82a4af194f9b",
          "0xab1c5ed5da6d8118",
          "0xd807aa98a3030242",
          "0x12835b0145706fbe",
          "0x243185be4ee4b28c",
          "0x550c7dc3d5ffb4e2",
          "0x72be5d74f27b896f",
          "0x80deb1fe3b1696b1",
          "0x9bdc06a725c71235",
          "0xc19bf174cf692694",
          "0xe49b69c19ef14ad2",
          "0xefbe4786384f25e3",
          "0x0fc19dc68b8cd5b5",
          "0x240ca1cc77ac9c65",
          "0x2de92c6f592b0275",
          "0x4a7484aa6ea6e483",
          "0x5cb0a9dcbd41fbd4",
          "0x76f988da831153b5",
          "0x983e5152ee66dfab",
          "0xa831c66d2db43210",
          "0xb00327c898fb213f",
          "0xbf597fc7beef0ee4",
          "0xc6e00bf33da88fc2",
          "0xd5a79147930aa725",
          "0x06ca6351e003826f",
          "0x142929670a0e6e70",
          "0x27b70a8546d22ffc",
          "0x2e1b21385c26c926",
          "0x4d2c6dfc5ac42aed",
          "0x53380d139d95b3df",
          "0x650a73548baf63de",
          "0x766a0abb3c77b2a8",
          "0x81c2c92e47edaee6",
          "0x92722c851482353b",
          "0xa2bfe8a14cf10364",
          "0xa81a664bbc423001",
          "0xc24b8b70d0f89791",
          "0xc76c51a30654be30",
          "0xd192e819d6ef5218",
          "0xd69906245565a910",
          "0xf40e35855771202a",
          "0x106aa07032bbd1b8",
          "0x19a4c116b8d2d0c8",
          "0x1e376c085141ab53",
          "0x2748774cdf8eeb99",
          "0x34b0bcb5e19b48a8",
          "0x391c0cb3c5c95a63",
          "0x4ed8aa4ae3418acb",
          "0x5b9cca4f7763e373",
          "0x682e6ff3d6b2b8a3",
          "0x748f82ee5defb2fc",
          "0x78a5636f43172f60",
          "0x84c87814a1f0ab72",
          "0x8cc702081a6439ec",
          "0x90befffa23631e28",
          "0xa4506cebde82bde9",
          "0xbef9a3f7b2c67915",
          "0xc67178f2e372532b",
          "0xca273eceea26619c",
          "0xd186b8c721c0c207",
          "0xeada7dd6cde0eb1e",
          "0xf57d4f7fee6ed178",
          "0x06f067aa72176fba",
          "0x0a637dc5a2c898a6",
          "0x113f9804bef90dae",
          "0x1b710b35131c471b",
          "0x28db77f523047d84",
          "0x32caab7b40c72493",
          "0x3c9ebe0a15c9bebc",
          "0x431d67c49c100d4c",
          "0x4cc5d4becb3e42b6",
          "0x597f299cfc657e2a",
          "0x5fcb6fab3ad6faec",
          "0x6c44198c4a475817",
        ].map((e) => BigInt(e))
      ),
        r$ = new Uint32Array(80),
        r_ = new Uint32Array(80);
      class rC extends rn {
        constructor() {
          super(128, 64, 16, !1),
            (this.Ah = 1779033703),
            (this.Al = -205731576),
            (this.Bh = -1150833019),
            (this.Bl = -2067093701),
            (this.Ch = 1013904242),
            (this.Cl = -23791573),
            (this.Dh = -1521486534),
            (this.Dl = 1595750129),
            (this.Eh = 1359893119),
            (this.El = -1377402159),
            (this.Fh = -1694144372),
            (this.Fl = 725511199),
            (this.Gh = 528734635),
            (this.Gl = -79577749),
            (this.Hh = 1541459225),
            (this.Hl = 327033209);
        }
        get() {
          let { Ah: e, Al: t, Bh: r, Bl: n, Ch: i, Cl: o, Dh: a, Dl: s, Eh: l, El: u, Fh: c, Fl: h, Gh: f, Gl: d, Hh: p, Hl: g } = this;
          return [e, t, r, n, i, o, a, s, l, u, c, h, f, d, p, g];
        }
        set(e, t, r, n, i, o, a, s, l, u, c, h, f, d, p, g) {
          (this.Ah = 0 | e),
            (this.Al = 0 | t),
            (this.Bh = 0 | r),
            (this.Bl = 0 | n),
            (this.Ch = 0 | i),
            (this.Cl = 0 | o),
            (this.Dh = 0 | a),
            (this.Dl = 0 | s),
            (this.Eh = 0 | l),
            (this.El = 0 | u),
            (this.Fh = 0 | c),
            (this.Fl = 0 | h),
            (this.Gh = 0 | f),
            (this.Gl = 0 | d),
            (this.Hh = 0 | p),
            (this.Hl = 0 | g);
        }
        process(e, t) {
          for (let r = 0; r < 16; r++, t += 4) (r$[r] = e.getUint32(t)), (r_[r] = e.getUint32((t += 4)));
          for (let e = 16; e < 80; e++) {
            let t = 0 | r$[e - 15],
              r = 0 | r_[e - 15],
              n = rS.rotrSH(t, r, 1) ^ rS.rotrSH(t, r, 8) ^ rS.shrSH(t, r, 7),
              i = rS.rotrSL(t, r, 1) ^ rS.rotrSL(t, r, 8) ^ rS.shrSL(t, r, 7),
              o = 0 | r$[e - 2],
              a = 0 | r_[e - 2],
              s = rS.rotrSH(o, a, 19) ^ rS.rotrBH(o, a, 61) ^ rS.shrSH(o, a, 6),
              l = rS.rotrSL(o, a, 19) ^ rS.rotrBL(o, a, 61) ^ rS.shrSL(o, a, 6),
              u = rS.add4L(i, l, r_[e - 7], r_[e - 16]),
              c = rS.add4H(u, n, s, r$[e - 7], r$[e - 16]);
            (r$[e] = 0 | c), (r_[e] = 0 | u);
          }
          let { Ah: r, Al: n, Bh: i, Bl: o, Ch: a, Cl: s, Dh: l, Dl: u, Eh: c, El: h, Fh: f, Fl: d, Gh: p, Gl: g, Hh: y, Hl: b } = this;
          for (let e = 0; e < 80; e++) {
            let t = rS.rotrSH(c, h, 14) ^ rS.rotrSH(c, h, 18) ^ rS.rotrBH(c, h, 41),
              w = rS.rotrSL(c, h, 14) ^ rS.rotrSL(c, h, 18) ^ rS.rotrBL(c, h, 41),
              m = (c & f) ^ (~c & p),
              v = (h & d) ^ (~h & g),
              E = rS.add5L(b, w, v, rH[e], r_[e]),
              x = rS.add5H(E, y, t, m, rL[e], r$[e]),
              A = 0 | E,
              k = rS.rotrSH(r, n, 28) ^ rS.rotrBH(r, n, 34) ^ rS.rotrBH(r, n, 39),
              B = rS.rotrSL(r, n, 28) ^ rS.rotrBL(r, n, 34) ^ rS.rotrBL(r, n, 39),
              U = (r & i) ^ (r & a) ^ (i & a),
              I = (n & o) ^ (n & s) ^ (o & s);
            (y = 0 | p), (b = 0 | g), (p = 0 | f), (g = 0 | d), (f = 0 | c), (d = 0 | h), ({ h: c, l: h } = rS.add(0 | l, 0 | u, 0 | x, 0 | A)), (l = 0 | a), (u = 0 | s), (a = 0 | i), (s = 0 | o), (i = 0 | r), (o = 0 | n);
            let S = rS.add3L(A, B, I);
            (r = rS.add3H(S, x, k, U)), (n = 0 | S);
          }
          ({ h: r, l: n } = rS.add(0 | this.Ah, 0 | this.Al, 0 | r, 0 | n)),
            ({ h: i, l: o } = rS.add(0 | this.Bh, 0 | this.Bl, 0 | i, 0 | o)),
            ({ h: a, l: s } = rS.add(0 | this.Ch, 0 | this.Cl, 0 | a, 0 | s)),
            ({ h: l, l: u } = rS.add(0 | this.Dh, 0 | this.Dl, 0 | l, 0 | u)),
            ({ h: c, l: h } = rS.add(0 | this.Eh, 0 | this.El, 0 | c, 0 | h)),
            ({ h: f, l: d } = rS.add(0 | this.Fh, 0 | this.Fl, 0 | f, 0 | d)),
            ({ h: p, l: g } = rS.add(0 | this.Gh, 0 | this.Gl, 0 | p, 0 | g)),
            ({ h: y, l: b } = rS.add(0 | this.Hh, 0 | this.Hl, 0 | y, 0 | b)),
            this.set(r, n, i, o, a, s, l, u, c, h, f, d, p, g, y, b);
        }
        roundClean() {
          r$.fill(0), r_.fill(0);
        }
        destroy() {
          this.buffer.fill(0), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        }
      }
      let rR = re(() => new rC()),
        rO = eL.ProjectivePoint,
        rN = tR(
          tT(4, (e) => rB(rB(e))),
          tD
        );
      function rj(e) {
        return BigInt(
          `0x${(function (e) {
            if (!t0(e)) throw Error("Uint8Array expected");
            let t = "";
            for (let r = 0; r < e.length; r++) t += t3[e[r]];
            return t;
          })(e)}`
        );
      }
      let rK = t5("Bitcoin seed"),
        rz = { private: 76066276, public: 76067358 },
        rq = (e) => rw(rB(e)),
        rT = (e) => t1(e).getUint32(0, !1),
        rP = (e) => {
          if (!Number.isSafeInteger(e) || e < 0 || e > 4294967296 - 1) throw Error(`Invalid number=${e}. Should be from 0 to 2 ** 32 - 1`);
          let t = new Uint8Array(4);
          return t1(t).setUint32(0, e, !1), t;
        };
      class rD {
        get fingerprint() {
          if (!this.pubHash) throw Error("No publicKey set!");
          return rT(this.pubHash);
        }
        get identifier() {
          return this.pubHash;
        }
        get pubKeyHash() {
          return this.pubHash;
        }
        get privateKey() {
          return this.privKeyBytes || null;
        }
        get publicKey() {
          return this.pubKey || null;
        }
        get privateExtendedKey() {
          let e = this.privateKey;
          if (!e) throw Error("No private key");
          return rN.encode(this.serialize(this.versions.private, t7(new Uint8Array([0]), e)));
        }
        get publicExtendedKey() {
          if (!this.pubKey) throw Error("No public key");
          return rN.encode(this.serialize(this.versions.public, this.pubKey));
        }
        static fromMasterSeed(e, t = rz) {
          if ((tQ(e), 8 * e.length < 128 || 8 * e.length > 512)) throw Error(`HDKey: wrong seed length=${e.length}. Should be between 128 and 512 bits; 256 bits is advised)`);
          let r = rr(rR, rK, e);
          return new rD({ versions: t, chainCode: r.slice(32), privateKey: r.slice(0, 32) });
        }
        static fromExtendedKey(e, t = rz) {
          let r = rN.decode(e),
            n = t1(r),
            i = n.getUint32(0, !1),
            o = { versions: t, depth: r[4], parentFingerprint: n.getUint32(5, !1), index: n.getUint32(9, !1), chainCode: r.slice(13, 45) },
            a = r.slice(45),
            s = 0 === a[0];
          if (i !== t[s ? "private" : "public"]) throw Error("Version mismatch");
          return new rD(s ? { ...o, privateKey: a.slice(1) } : { ...o, publicKey: a });
        }
        static fromJSON(e) {
          return rD.fromExtendedKey(e.xpriv);
        }
        constructor(e) {
          if (((this.depth = 0), (this.index = 0), (this.chainCode = null), (this.parentFingerprint = 0), !e || "object" != typeof e)) throw Error("HDKey.constructor must not be called directly");
          if (
            ((this.versions = e.versions || rz),
              (this.depth = e.depth || 0),
              (this.chainCode = e.chainCode),
              (this.index = e.index || 0),
              (this.parentFingerprint = e.parentFingerprint || 0),
              !this.depth && (this.parentFingerprint || this.index))
          )
            throw Error("HDKey: zero depth with non-zero index/parent fingerprint");
          if (e.publicKey && e.privateKey) throw Error("HDKey: publicKey and privateKey at same time.");
          if (e.privateKey) {
            if (!eL.utils.isValidPrivateKey(e.privateKey)) throw Error("Invalid private key");
            (this.privKey = "bigint" == typeof e.privateKey ? e.privateKey : rj(e.privateKey)),
              (this.privKeyBytes = (function (e) {
                if ("string" != typeof e) throw Error("hex string expected, got " + typeof e);
                let t = e.length,
                  r = t / 2;
                if (t % 2) throw Error("padded hex string expected, got unpadded hex of length " + t);
                let n = new Uint8Array(r);
                for (let t = 0, i = 0; t < r; t++, i += 2) {
                  let r = t4(e.charCodeAt(i)),
                    o = t4(e.charCodeAt(i + 1));
                  if (void 0 === r || void 0 === o) throw Error('hex string expected, got non-hex character "' + (e[i] + e[i + 1]) + '" at index ' + i);
                  n[t] = 16 * r + o;
                }
                return n;
              })(this.privKey.toString(16).padStart(64, "0"))),
              (this.pubKey = eL.getPublicKey(e.privateKey, !0));
          } else if (e.publicKey) this.pubKey = rO.fromHex(e.publicKey).toRawBytes(!0);
          else throw Error("HDKey: no public or private key provided");
          this.pubHash = rq(this.pubKey);
        }
        derive(e) {
          if (!/^[mM]'?/.test(e)) throw Error('Path must start with "m" or "M"');
          if (/^[mM]'?$/.test(e)) return this;
          let t = e.replace(/^[mM]'?\//, "").split("/"),
            r = this;
          for (let e of t) {
            let t = /^(\d+)('?)$/.exec(e);
            if (!t || 3 !== t.length) throw Error(`Invalid child index: ${e}`);
            let n = +t[1];
            if (!Number.isSafeInteger(n) || n >= 2147483648) throw Error("Invalid index");
            "'" === t[2] && (n += 2147483648), (r = r.deriveChild(n));
          }
          return r;
        }
        deriveChild(e) {
          if (!this.pubKey || !this.chainCode) throw Error("No publicKey or chainCode set");
          let t = rP(e);
          if (e >= 2147483648) {
            let e = this.privateKey;
            if (!e) throw Error("Could not derive hardened child key");
            t = t7(new Uint8Array([0]), e, t);
          } else t = t7(this.pubKey, t);
          let r = rr(rR, this.chainCode, t),
            n = rj(r.slice(0, 32)),
            i = r.slice(32);
          if (!eL.utils.isValidPrivateKey(n)) throw Error("Tweak bigger than curve order");
          let o = { versions: this.versions, chainCode: i, depth: this.depth + 1, parentFingerprint: this.fingerprint, index: e };
          try {
            if (this.privateKey) {
              let e = ea(this.privKey + n, eL.CURVE.n);
              if (!eL.utils.isValidPrivateKey(e)) throw Error("The tweak was out of range or the resulted private key is invalid");
              o.privateKey = e;
            } else {
              let e = rO.fromHex(this.pubKey).add(rO.fromPrivateKey(n));
              if (e.equals(rO.ZERO)) throw Error("The tweak was equal to negative P, which made the result key invalid");
              o.publicKey = e.toRawBytes(!0);
            }
            return new rD(o);
          } catch (t) {
            return this.deriveChild(e + 1);
          }
        }
        sign(e) {
          if (!this.privateKey) throw Error("No privateKey set!");
          return tQ(e, 32), eL.sign(e, this.privKey).toCompactRawBytes();
        }
        verify(e, t) {
          let r;
          if ((tQ(e, 32), tQ(t, 64), !this.publicKey)) throw Error("No publicKey set!");
          try {
            r = eL.Signature.fromCompact(t);
          } catch (e) {
            return !1;
          }
          return eL.verify(r, e, this.publicKey);
        }
        wipePrivateData() {
          return (this.privKey = void 0), this.privKeyBytes && (this.privKeyBytes.fill(0), (this.privKeyBytes = void 0)), this;
        }
        toJSON() {
          return { xpriv: this.privateExtendedKey, xpub: this.publicExtendedKey };
        }
        serialize(e, t) {
          if (!this.chainCode) throw Error("No chainCode set");
          return tQ(t, 33), t7(rP(e), new Uint8Array([this.depth]), rP(this.parentFingerprint), rP(this.index), this.chainCode, t);
        }
      }
            /*! noble-ciphers - MIT License (c) 2023 Paul Miller (paulmillr.com) */ let rM = (e) => e instanceof Uint8Array,
        rF = (e) => new Uint32Array(e.buffer, e.byteOffset, Math.floor(e.byteLength / 4));
      if (68 !== new Uint8Array(new Uint32Array([287454020]).buffer)[0]) throw Error("Non little-endian hardware is not supported");
      function rV(e) {
        if ("string" != typeof e) throw Error(`utf8ToBytes expected string, got ${typeof e}`);
        return new Uint8Array(new TextEncoder().encode(e));
      }
      function rZ(e) {
        if (("string" == typeof e && (e = rV(e)), !rM(e))) throw Error(`expected Uint8Array, got ${typeof e}`);
        return e;
      }
      let rG = (e) => "[object Object]" === Object.prototype.toString.call(e) && e.constructor === Object;
      function rW(e, t) {
        if (!(e instanceof Uint8Array)) throw Error("Uint8Array expected");
        if ("number" == typeof t && e.length !== t) throw Error(`Uint8Array length ${t} expected`);
      }
      function rJ(e, ...t) {
        if (!(e instanceof Uint8Array)) throw Error("Expected Uint8Array");
        if (t.length > 0 && !t.includes(e.length)) throw Error(`Expected Uint8Array of length ${t}, not of length=${e.length}`);
      }
      var rY = function (e) {
        if (!Number.isSafeInteger(e) || e < 0) throw Error(`Wrong positive integer: ${e}`);
      },
        rQ = function (e) {
          if ("boolean" != typeof e) throw Error(`Expected boolean, not ${e}`);
        },
        rX = function (e, t = !0) {
          if (e.destroyed) throw Error("Hash instance has been destroyed");
          if (t && e.finished) throw Error("Hash#digest() has already been called");
        },
        r0 = function (e, t) {
          rJ(e);
          let r = t.outputLen;
          if (e.length < r) throw Error(`digestInto() expects output buffer of length at least ${r}`);
        };
      let r1 = (e, t) => (255 & e[t++]) | ((255 & e[t++]) << 8);
      class r2 {
        constructor(e) {
          (this.blockLen = 16),
            (this.outputLen = 16),
            (this.buffer = new Uint8Array(16)),
            (this.r = new Uint16Array(10)),
            (this.h = new Uint16Array(10)),
            (this.pad = new Uint16Array(8)),
            (this.pos = 0),
            (this.finished = !1),
            rW((e = rZ(e)), 32);
          let t = r1(e, 0),
            r = r1(e, 2),
            n = r1(e, 4),
            i = r1(e, 6),
            o = r1(e, 8),
            a = r1(e, 10),
            s = r1(e, 12),
            l = r1(e, 14);
          (this.r[0] = 8191 & t),
            (this.r[1] = ((t >>> 13) | (r << 3)) & 8191),
            (this.r[2] = ((r >>> 10) | (n << 6)) & 7939),
            (this.r[3] = ((n >>> 7) | (i << 9)) & 8191),
            (this.r[4] = ((i >>> 4) | (o << 12)) & 255),
            (this.r[5] = (o >>> 1) & 8190),
            (this.r[6] = ((o >>> 14) | (a << 2)) & 8191),
            (this.r[7] = ((a >>> 11) | (s << 5)) & 8065),
            (this.r[8] = ((s >>> 8) | (l << 8)) & 8191),
            (this.r[9] = (l >>> 5) & 127);
          for (let t = 0; t < 8; t++) this.pad[t] = r1(e, 16 + 2 * t);
        }
        process(e, t, r = !1) {
          let { h: n, r: i } = this,
            o = i[0],
            a = i[1],
            s = i[2],
            l = i[3],
            u = i[4],
            c = i[5],
            h = i[6],
            f = i[7],
            d = i[8],
            p = i[9],
            g = r1(e, t + 0),
            y = r1(e, t + 2),
            b = r1(e, t + 4),
            w = r1(e, t + 6),
            m = r1(e, t + 8),
            v = r1(e, t + 10),
            E = r1(e, t + 12),
            x = r1(e, t + 14),
            A = n[0] + (8191 & g),
            k = n[1] + (((g >>> 13) | (y << 3)) & 8191),
            B = n[2] + (((y >>> 10) | (b << 6)) & 8191),
            U = n[3] + (((b >>> 7) | (w << 9)) & 8191),
            I = n[4] + (((w >>> 4) | (m << 12)) & 8191),
            S = n[5] + ((m >>> 1) & 8191),
            L = n[6] + (((m >>> 14) | (v << 2)) & 8191),
            H = n[7] + (((v >>> 11) | (E << 5)) & 8191),
            $ = n[8] + (((E >>> 8) | (x << 8)) & 8191),
            _ = n[9] + ((x >>> 5) | (r ? 0 : 2048)),
            C = 0,
            R = 0 + A * o + 5 * p * k + 5 * d * B + 5 * f * U + 5 * h * I;
          (C = R >>> 13), (R &= 8191), (R += 5 * c * S + 5 * u * L + 5 * l * H + 5 * s * $ + 5 * a * _), (C += R >>> 13), (R &= 8191);
          let O = C + A * a + k * o + 5 * p * B + 5 * d * U + 5 * f * I;
          (C = O >>> 13), (O &= 8191), (O += 5 * h * S + 5 * c * L + 5 * u * H + 5 * l * $ + 5 * s * _), (C += O >>> 13), (O &= 8191);
          let N = C + A * s + k * a + B * o + 5 * p * U + 5 * d * I;
          (C = N >>> 13), (N &= 8191), (N += 5 * f * S + 5 * h * L + 5 * c * H + 5 * u * $ + 5 * l * _), (C += N >>> 13), (N &= 8191);
          let j = C + A * l + k * s + B * a + U * o + 5 * p * I;
          (C = j >>> 13), (j &= 8191), (j += 5 * d * S + 5 * f * L + 5 * h * H + 5 * c * $ + 5 * u * _), (C += j >>> 13), (j &= 8191);
          let K = C + A * u + k * l + B * s + U * a + I * o;
          (C = K >>> 13), (K &= 8191), (K += 5 * p * S + 5 * d * L + 5 * f * H + 5 * h * $ + 5 * c * _), (C += K >>> 13), (K &= 8191);
          let z = C + A * c + k * u + B * l + U * s + I * a;
          (C = z >>> 13), (z &= 8191), (z += S * o + 5 * p * L + 5 * d * H + 5 * f * $ + 5 * h * _), (C += z >>> 13), (z &= 8191);
          let q = C + A * h + k * c + B * u + U * l + I * s;
          (C = q >>> 13), (q &= 8191), (q += S * a + L * o + 5 * p * H + 5 * d * $ + 5 * f * _), (C += q >>> 13), (q &= 8191);
          let T = C + A * f + k * h + B * c + U * u + I * l;
          (C = T >>> 13), (T &= 8191), (T += S * s + L * a + H * o + 5 * p * $ + 5 * d * _), (C += T >>> 13), (T &= 8191);
          let P = C + A * d + k * f + B * h + U * c + I * u;
          (C = P >>> 13), (P &= 8191), (P += S * l + L * s + H * a + $ * o + 5 * p * _), (C += P >>> 13), (P &= 8191);
          let D = C + A * p + k * d + B * f + U * h + I * c;
          (C = D >>> 13),
            (D &= 8191),
            (D += S * u + L * l + H * s + $ * a + _ * o),
            (C += D >>> 13),
            (D &= 8191),
            (R = 8191 & (C = ((C = ((C << 2) + C) | 0) + R) | 0)),
            (C >>>= 13),
            (O += C),
            (n[0] = R),
            (n[1] = O),
            (n[2] = N),
            (n[3] = j),
            (n[4] = K),
            (n[5] = z),
            (n[6] = q),
            (n[7] = T),
            (n[8] = P),
            (n[9] = D);
        }
        finalize() {
          let { h: e, pad: t } = this,
            r = new Uint16Array(10),
            n = e[1] >>> 13;
          e[1] &= 8191;
          for (let t = 2; t < 10; t++) (e[t] += n), (n = e[t] >>> 13), (e[t] &= 8191);
          (e[0] += 5 * n), (n = e[0] >>> 13), (e[0] &= 8191), (e[1] += n), (n = e[1] >>> 13), (e[1] &= 8191), (e[2] += n), (r[0] = e[0] + 5), (n = r[0] >>> 13), (r[0] &= 8191);
          for (let t = 1; t < 10; t++) (r[t] = e[t] + n), (n = r[t] >>> 13), (r[t] &= 8191);
          r[9] -= 8192;
          let i = (1 ^ n) - 1;
          for (let e = 0; e < 10; e++) r[e] &= i;
          i = ~i;
          for (let t = 0; t < 10; t++) e[t] = (e[t] & i) | r[t];
          (e[0] = (e[0] | (e[1] << 13)) & 65535),
            (e[1] = ((e[1] >>> 3) | (e[2] << 10)) & 65535),
            (e[2] = ((e[2] >>> 6) | (e[3] << 7)) & 65535),
            (e[3] = ((e[3] >>> 9) | (e[4] << 4)) & 65535),
            (e[4] = ((e[4] >>> 12) | (e[5] << 1) | (e[6] << 14)) & 65535),
            (e[5] = ((e[6] >>> 2) | (e[7] << 11)) & 65535),
            (e[6] = ((e[7] >>> 5) | (e[8] << 8)) & 65535),
            (e[7] = ((e[8] >>> 8) | (e[9] << 5)) & 65535);
          let o = e[0] + t[0];
          e[0] = 65535 & o;
          for (let r = 1; r < 8; r++) (o = (((e[r] + t[r]) | 0) + (o >>> 16)) | 0), (e[r] = 65535 & o);
        }
        update(e) {
          rX(this);
          let { buffer: t, blockLen: r } = this,
            n = (e = rZ(e)).length;
          for (let i = 0; i < n;) {
            let o = Math.min(r - this.pos, n - i);
            if (o === r) {
              for (; r <= n - i; i += r) this.process(e, i);
              continue;
            }
            t.set(e.subarray(i, i + o), this.pos), (this.pos += o), (i += o), this.pos === r && (this.process(t, 0, !1), (this.pos = 0));
          }
          return this;
        }
        destroy() {
          this.h.fill(0), this.r.fill(0), this.buffer.fill(0), this.pad.fill(0);
        }
        digestInto(e) {
          rX(this), r0(e, this), (this.finished = !0);
          let { buffer: t, h: r } = this,
            { pos: n } = this;
          if (n) {
            for (t[n++] = 1; n < 16; n++) t[n] = 0;
            this.process(t, 0, !0);
          }
          this.finalize();
          let i = 0;
          for (let t = 0; t < 8; t++) (e[i++] = r[t] >>> 0), (e[i++] = r[t] >>> 8);
          return e;
        }
        digest() {
          let { buffer: e, outputLen: t } = this;
          this.digestInto(e);
          let r = e.slice(0, t);
          return this.destroy(), r;
        }
      }
      !(function (e) {
        let t = (t, r) => e(r).update(rZ(t)).digest(),
          r = e(new Uint8Array(32));
        (t.outputLen = r.outputLen), (t.blockLen = r.blockLen), (t.create = (t) => e(t));
      })((e) => new r2(e));
      let r3 = rV("expand 16-byte k"),
        r8 = rV("expand 32-byte k"),
        r4 = rF(r3),
        r5 = rF(r8),
        r6 = (e) => !(e.byteOffset % 4),
        r7 = (e, t) => (e << t) | (e >>> (32 - t)),
        r9 = ((e) => {
          let { core: t, rounds: r, counterRight: n, counterLen: i, allow128bitKeys: o, extendNonceFn: a, blockLen: s } = (function (e, t) {
            if (void 0 !== t && ("object" != typeof t || !rG(t))) throw Error("options must be object or undefined");
            return Object.assign(e, t);
          })({ rounds: 20, counterRight: !1, counterLen: 8, allow128bitKeys: !0, blockLen: 64 }, e);
          rY(i), rY(r), rY(s), rQ(n), rQ(o);
          let l = s / 4;
          if (s % 4 != 0) throw Error("Salsa/ChaCha: blockLen must be aligned to 4 bytes");
          return (e, u, c, h, f = 0) => {
            let d, p;
            if ((rJ(e), rJ(u), rJ(c), h || (h = new Uint8Array(c.length)), rJ(h), rY(f), f < 0 || f >= 4294967296 - 1)) throw Error("Salsa/ChaCha: counter overflow");
            if (h.length < c.length) throw Error(`Salsa/ChaCha: output (${h.length}) is shorter than data (${c.length})`);
            let g = [];
            if (32 === e.length) (d = e), (p = r5);
            else if (16 === e.length && o) (d = new Uint8Array(32)).set(e), d.set(e, 16), (p = r4), g.push(d);
            else throw Error(`Salsa/ChaCha: invalid 32-byte key, got length=${e.length}`);
            if (a) {
              if (u.length <= 16) throw Error("Salsa/ChaCha: extended nonce must be bigger than 16 bytes");
              (d = a(p, d, u.subarray(0, 16), new Uint8Array(32))), g.push(d), (u = u.subarray(16));
            }
            let y = 16 - i;
            if (u.length !== y) throw Error(`Salsa/ChaCha: nonce must be ${y} or 16 bytes`);
            if (12 !== y) {
              let e = new Uint8Array(12);
              e.set(u, n ? 0 : 12 - u.length), g.push((u = e));
            }
            let b = new Uint8Array(s),
              w = rF(b),
              m = rF(d),
              v = rF(u),
              E = r6(c) && rF(c),
              x = r6(h) && rF(h);
            g.push(w);
            let A = c.length;
            for (let e = 0, n = f; e < A; n++) {
              if ((t(p, m, v, w, n, r), n >= 4294967296 - 1)) throw Error("Salsa/ChaCha: counter overflow");
              let i = Math.min(s, A - e);
              if (i === s && x && E) {
                let t = e / 4;
                if (e % 4 != 0) throw Error("Salsa/ChaCha: invalid block position");
                for (let e = 0; e < l; e++) x[t + e] = E[t + e] ^ w[e];
                e += s;
                continue;
              }
              for (let t = 0; t < i; t++) h[e + t] = c[e + t] ^ b[t];
              e += i;
            }
            for (let e = 0; e < g.length; e++) g[e].fill(0);
            return h;
          };
        })({
          core: function (e, t, r, n, i, o = 20) {
            let a = e[0],
              s = e[1],
              l = e[2],
              u = e[3],
              c = t[0],
              h = t[1],
              f = t[2],
              d = t[3],
              p = t[4],
              g = t[5],
              y = t[6],
              b = t[7],
              w = r[0],
              m = r[1],
              v = r[2],
              E = a,
              x = s,
              A = l,
              k = u,
              B = c,
              U = h,
              I = f,
              S = d,
              L = p,
              H = g,
              $ = y,
              _ = b,
              C = i,
              R = w,
              O = m,
              N = v;
            for (let e = 0; e < o; e += 2)
              (L = (L + (C = r7(C ^ (E = (E + B) | 0), 16))) | 0),
                (E = (E + (B = r7(B ^ L, 12))) | 0),
                (L = (L + (C = r7(C ^ E, 8))) | 0),
                (B = r7(B ^ L, 7)),
                (H = (H + (R = r7(R ^ (x = (x + U) | 0), 16))) | 0),
                (x = (x + (U = r7(U ^ H, 12))) | 0),
                (H = (H + (R = r7(R ^ x, 8))) | 0),
                (U = r7(U ^ H, 7)),
                ($ = ($ + (O = r7(O ^ (A = (A + I) | 0), 16))) | 0),
                (A = (A + (I = r7(I ^ $, 12))) | 0),
                ($ = ($ + (O = r7(O ^ A, 8))) | 0),
                (I = r7(I ^ $, 7)),
                (_ = (_ + (N = r7(N ^ (k = (k + S) | 0), 16))) | 0),
                (k = (k + (S = r7(S ^ _, 12))) | 0),
                (_ = (_ + (N = r7(N ^ k, 8))) | 0),
                (S = r7(S ^ _, 7)),
                ($ = ($ + (N = r7(N ^ (E = (E + U) | 0), 16))) | 0),
                (E = (E + (U = r7(U ^ $, 12))) | 0),
                ($ = ($ + (N = r7(N ^ E, 8))) | 0),
                (U = r7(U ^ $, 7)),
                (_ = (_ + (C = r7(C ^ (x = (x + I) | 0), 16))) | 0),
                (x = (x + (I = r7(I ^ _, 12))) | 0),
                (_ = (_ + (C = r7(C ^ x, 8))) | 0),
                (I = r7(I ^ _, 7)),
                (L = (L + (R = r7(R ^ (A = (A + S) | 0), 16))) | 0),
                (A = (A + (S = r7(S ^ L, 12))) | 0),
                (L = (L + (R = r7(R ^ A, 8))) | 0),
                (S = r7(S ^ L, 7)),
                (H = (H + (O = r7(O ^ (k = (k + B) | 0), 16))) | 0),
                (k = (k + (B = r7(B ^ H, 12))) | 0),
                (H = (H + (O = r7(O ^ k, 8))) | 0),
                (B = r7(B ^ H, 7));
            let j = 0;
            (n[j++] = (a + E) | 0),
              (n[j++] = (s + x) | 0),
              (n[j++] = (l + A) | 0),
              (n[j++] = (u + k) | 0),
              (n[j++] = (c + B) | 0),
              (n[j++] = (h + U) | 0),
              (n[j++] = (f + I) | 0),
              (n[j++] = (d + S) | 0),
              (n[j++] = (p + L) | 0),
              (n[j++] = (g + H) | 0),
              (n[j++] = (y + $) | 0),
              (n[j++] = (b + _) | 0),
              (n[j++] = (i + C) | 0),
              (n[j++] = (w + R) | 0),
              (n[j++] = (m + O) | 0),
              (n[j++] = (v + N) | 0);
          },
          counterRight: !1,
          counterLen: 4,
          allow128bitKeys: !1,
        }),
        ne = new Uint8Array(16),
        nt = new Uint8Array([0]),
        nr = new Uint8Array(),
        nn = (e, t, r, n, i) => {
          var o;
          return (function (e, t, r, n = 32) {
            if ((c(e), l(n), n > 255 * e.outputLen)) throw Error("Length should be <= 255*HashLen");
            let i = Math.ceil(n / e.outputLen);
            void 0 === r && (r = nr);
            let o = new Uint8Array(i * e.outputLen),
              a = eE.create(e, t),
              s = a._cloneInto(),
              u = new Uint8Array(a.outputLen);
            for (let t = 0; t < i; t++)
              (nt[0] = t + 1),
                s
                  .update(0 === t ? nr : u)
                  .update(r)
                  .update(nt)
                  .digestInto(u),
                o.set(u, e.outputLen * t),
                a._cloneInto(s);
            return a.destroy(), s.destroy(), u.fill(0), nt.fill(0), o.slice(0, n);
          })(e, ((o = r), c(e), void 0 === o && (o = new Uint8Array(e.outputLen)), eE(e, v(o), v(t))), n, i);
        };
      var ni = Object.defineProperty,
        no = (e, t) => {
          for (var r in t) ni(e, r, { get: t[r], enumerable: !0 });
        };
      function na() {
        return w(eF.utils.randomPrivateKey());
      }
      function ns(e) {
        return w(eF.getPublicKey(e));
      }
      no({}, { MessageNode: () => nd, MessageQueue: () => np, insertEventIntoAscendingList: () => nf, insertEventIntoDescendingList: () => nh, normalizeURL: () => nc, utf8Decoder: () => nl, utf8Encoder: () => nu });
      var nl = new TextDecoder("utf-8"),
        nu = new TextEncoder();
      function nc(e) {
        let t = new URL(e);
        return (
          (t.pathname = t.pathname.replace(/\/+/g, "/")),
          t.pathname.endsWith("/") && (t.pathname = t.pathname.slice(0, -1)),
          (("80" === t.port && "ws:" === t.protocol) || ("443" === t.port && "wss:" === t.protocol)) && (t.port = ""),
          t.searchParams.sort(),
          (t.hash = ""),
          t.toString()
        );
      }
      function nh(e, t) {
        let r,
          n = 0,
          i = e.length - 1,
          o = n;
        if (i < 0) o = 0;
        else if (t.created_at < e[i].created_at) o = i + 1;
        else if (t.created_at >= e[n].created_at) o = n;
        else
          for (; ;) {
            if (i <= n + 1) {
              o = i;
              break;
            }
            if (e[(r = Math.floor(n + (i - n) / 2))].created_at > t.created_at) n = r;
            else if (e[r].created_at < t.created_at) i = r;
            else {
              o = r;
              break;
            }
          }
        return e[o]?.id !== t.id ? [...e.slice(0, o), t, ...e.slice(o)] : e;
      }
      function nf(e, t) {
        let r,
          n = 0,
          i = e.length - 1,
          o = n;
        if (i < 0) o = 0;
        else if (t.created_at > e[i].created_at) o = i + 1;
        else if (t.created_at <= e[n].created_at) o = n;
        else
          for (; ;) {
            if (i <= n + 1) {
              o = i;
              break;
            }
            if (e[(r = Math.floor(n + (i - n) / 2))].created_at < t.created_at) n = r;
            else if (e[r].created_at > t.created_at) i = r;
            else {
              o = r;
              break;
            }
          }
        return e[o]?.id !== t.id ? [...e.slice(0, o), t, ...e.slice(o)] : e;
      }
      var nd = class {
        _value;
        _next;
        get value() {
          return this._value;
        }
        set value(e) {
          this._value = e;
        }
        get next() {
          return this._next;
        }
        set next(e) {
          this._next = e;
        }
        constructor(e) {
          (this._value = e), (this._next = null);
        }
      },
        np = class {
          _first;
          _last;
          get first() {
            return this._first;
          }
          set first(e) {
            this._first = e;
          }
          get last() {
            return this._last;
          }
          set last(e) {
            this._last = e;
          }
          _size;
          get size() {
            return this._size;
          }
          set size(e) {
            this._size = e;
          }
          constructor() {
            (this._first = null), (this._last = null), (this._size = 0);
          }
          enqueue(e) {
            let t = new nd(e);
            return 0 !== this._size && this._last ? (this._last.next = t) : (this._first = t), (this._last = t), this._size++, !0;
          }
          dequeue() {
            if (0 === this._size || !this._first) return null;
            let e = this._first;
            return (this._first = e.next), (e.next = null), this._size--, e.value;
          }
        },
        ng = Symbol("verified"),
        ny =
          (((n = ny || {})[(n.Metadata = 0)] = "Metadata"),
            (n[(n.Text = 1)] = "Text"),
            (n[(n.RecommendRelay = 2)] = "RecommendRelay"),
            (n[(n.Contacts = 3)] = "Contacts"),
            (n[(n.EncryptedDirectMessage = 4)] = "EncryptedDirectMessage"),
            (n[(n.EventDeletion = 5)] = "EventDeletion"),
            (n[(n.Repost = 6)] = "Repost"),
            (n[(n.Reaction = 7)] = "Reaction"),
            (n[(n.BadgeAward = 8)] = "BadgeAward"),
            (n[(n.ChannelCreation = 40)] = "ChannelCreation"),
            (n[(n.ChannelMetadata = 41)] = "ChannelMetadata"),
            (n[(n.ChannelMessage = 42)] = "ChannelMessage"),
            (n[(n.ChannelHideMessage = 43)] = "ChannelHideMessage"),
            (n[(n.ChannelMuteUser = 44)] = "ChannelMuteUser"),
            (n[(n.Blank = 255)] = "Blank"),
            (n[(n.Report = 1984)] = "Report"),
            (n[(n.ZapRequest = 9734)] = "ZapRequest"),
            (n[(n.Zap = 9735)] = "Zap"),
            (n[(n.RelayList = 10002)] = "RelayList"),
            (n[(n.ClientAuth = 22242)] = "ClientAuth"),
            (n[(n.NwcRequest = 23194)] = "NwcRequest"),
            (n[(n.HttpAuth = 27235)] = "HttpAuth"),
            (n[(n.ProfileBadge = 30008)] = "ProfileBadge"),
            (n[(n.BadgeDefinition = 30009)] = "BadgeDefinition"),
            (n[(n.Article = 30023)] = "Article"),
            (n[(n.FileMetadata = 1063)] = "FileMetadata"),
            n);
      function nb(e, t) {
        return (e.pubkey = ns(t)), (e.id = nw(e)), (e.sig = nx(e, t)), (e[ng] = !0), e;
      }
      function nw(e) {
        return w(
          C(
            nu.encode(
              (function (e) {
                if (!nv(e)) throw Error("can't serialize event with wrong or missing properties");
                return JSON.stringify([0, e.pubkey, e.created_at, e.kind, e.tags, e.content]);
              })(e)
            )
          )
        );
      }
      var nm = (e) => e instanceof Object;
      function nv(e) {
        if (!nm(e) || "number" != typeof e.kind || "string" != typeof e.content || "number" != typeof e.created_at || "string" != typeof e.pubkey || !e.pubkey.match(/^[a-f0-9]{64}$/) || !Array.isArray(e.tags)) return !1;
        for (let t = 0; t < e.tags.length; t++) {
          let r = e.tags[t];
          if (!Array.isArray(r)) return !1;
          for (let e = 0; e < r.length; e++) if ("object" == typeof r[e]) return !1;
        }
        return !0;
      }
      function nE(e) {
        if ("boolean" == typeof e[ng]) return e[ng];
        let t = nw(e);
        if (t !== e.id) return (e[ng] = !1);
        try {
          return (e[ng] = eF.verify(e.sig, t, e.pubkey));
        } catch (t) {
          return (e[ng] = !1);
        }
      }
      function nx(e, t) {
        return w(eF.sign(nw(e), t));
      }
      function nA(e, t) {
        let r = t.length + 3,
          n = e.indexOf(`"${t}":`) + r,
          i = e.slice(n).indexOf('"') + n + 1;
        return e.slice(i, i + 64);
      }
      function nk(e, t) {
        let r = t.length,
          n = e.indexOf(`"${t}":`) + r + 3,
          i = e.slice(n),
          o = Math.min(i.indexOf(","), i.indexOf("}"));
        return parseInt(i.slice(0, o), 10);
      }
      function nB(e) {
        let t = e.slice(0, 22).indexOf('"EVENT"');
        if (-1 === t) return null;
        let r = e.slice(t + 7 + 1).indexOf('"');
        if (-1 === r) return null;
        let n = t + 7 + 1 + r,
          i = e.slice(n + 1, 80).indexOf('"');
        return -1 === i ? null : e.slice(n + 1, n + 1 + i);
      }
      function nU(e, t) {
        return t === nA(e, "id");
      }
      function nI(e, t) {
        return t === nA(e, "pubkey");
      }
      function nS(e, t) {
        return t === nk(e, "kind");
      }
      no({}, { getHex64: () => nA, getInt: () => nk, getSubscriptionId: () => nB, matchEventId: () => nU, matchEventKind: () => nS, matchEventPubkey: () => nI });
      var nL = () => ({ connect: [], disconnect: [], error: [], notice: [], auth: [] });
      function nH(e, t = {}) {
        let { listTimeout: r = 3e3, getTimeout: n = 3e3, countTimeout: i = 3e3 } = t;
        var o,
          a,
          s = {},
          l = nL(),
          u = {},
          c = {};
        async function h() {
          return (
            a ||
            (a = new Promise((t, r) => {
              let n;
              try {
                o = new WebSocket(e);
              } catch (e) {
                r(e);
              }
              (o.onopen = () => {
                l.connect.forEach((e) => e()), t();
              }),
                (o.onerror = () => {
                  (a = void 0), l.error.forEach((e) => e()), r();
                }),
                (o.onclose = async () => {
                  (a = void 0), l.disconnect.forEach((e) => e());
                });
              let i = new np();
              function h() {
                if (0 === i.size) {
                  clearInterval(n), (n = null);
                  return;
                }
                var t = i.dequeue();
                if (!t) return;
                let r = nB(t);
                if (r) {
                  let n = s[r];
                  if (n && n.alreadyHaveEvent && n.alreadyHaveEvent(nA(t, "id"), e)) return;
                }
                try {
                  let e = JSON.parse(t);
                  switch (e[0]) {
                    case "EVENT": {
                      let t = e[1],
                        r = e[2];
                      nv(r) &&
                        s[t] &&
                        (s[t].skipVerification || nE(r)) &&
                        (function (e, t) {
                          for (let r = 0; r < e.length; r++)
                            if (
                              (function (e, t) {
                                if (
                                  (e.ids && -1 === e.ids.indexOf(t.id) && !e.ids.some((e) => t.id.startsWith(e))) ||
                                  (e.kinds && -1 === e.kinds.indexOf(t.kind)) ||
                                  (e.authors && -1 === e.authors.indexOf(t.pubkey) && !e.authors.some((e) => t.pubkey.startsWith(e)))
                                )
                                  return !1;
                                for (let r in e)
                                  if ("#" === r[0]) {
                                    let n = r.slice(1),
                                      i = e[`#${n}`];
                                    if (i && !t.tags.find(([e, t]) => e === r.slice(1) && -1 !== i.indexOf(t))) return !1;
                                  }
                                return (!e.since || !(t.created_at < e.since)) && (!e.until || !(t.created_at > e.until));
                              })(e[r], t)
                            )
                              return !0;
                          return !1;
                        })(s[t].filters, r) &&
                        (s[t], (u[t]?.event || []).forEach((e) => e(r)));
                      return;
                    }
                    case "COUNT":
                      let r = e[1],
                        n = e[2];
                      s[r] && (u[r]?.count || []).forEach((e) => e(n));
                      return;
                    case "EOSE": {
                      let t = e[1];
                      t in u && (u[t].eose.forEach((e) => e()), (u[t].eose = []));
                      return;
                    }
                    case "OK": {
                      let t = e[1],
                        r = e[2],
                        n = e[3] || "";
                      if (t in c) {
                        let { resolve: e, reject: i } = c[t];
                        r ? e(null) : i(Error(n));
                      }
                      return;
                    }
                    case "NOTICE":
                      let i = e[1];
                      l.notice.forEach((e) => e(i));
                      return;
                    case "AUTH": {
                      let t = e[1];
                      l.auth?.forEach((e) => e(t));
                      return;
                    }
                  }
                } catch (e) {
                  return;
                }
              }
              o.onmessage = (e) => {
                i.enqueue(e.data), n || (n = setInterval(h, 0));
              };
            }))
          );
        }
        function f() {
          return o?.readyState === 1;
        }
        async function d(e) {
          let t = JSON.stringify(e);
          if (f() || (await new Promise((e) => setTimeout(e, 1e3)), f()))
            try {
              o.send(t);
            } catch (e) {
              console.log(e);
            }
        }
        let p = (e, { verb: t = "REQ", skipVerification: r = !1, alreadyHaveEvent: n = null, id: i = Math.random().toString().slice(2) } = {}) => {
          (s[i] = { id: i, filters: e, skipVerification: r, alreadyHaveEvent: n }), d([t, i, ...e]);
          let o = {
            sub: (t, o = {}) => p(t || e, { skipVerification: o.skipVerification || r, alreadyHaveEvent: o.alreadyHaveEvent || n, id: i }),
            unsub: () => {
              delete s[i], delete u[i], d(["CLOSE", i]);
            },
            on: (e, t) => {
              (u[i] = u[i] || { event: [], count: [], eose: [] }), u[i][e].push(t);
            },
            off: (e, t) => {
              let r = u[i],
                n = r[e].indexOf(t);
              n >= 0 && r[e].splice(n, 1);
            },
            get events() {
              return n$(o);
            },
          };
          return o;
        };
        function g(e, t) {
          return new Promise((r, n) => {
            if (!e.id) {
              n(Error(`event ${e} has no id`));
              return;
            }
            let i = e.id;
            d([t, e]), (c[i] = { resolve: r, reject: n });
          });
        }
        return {
          url: e,
          sub: p,
          on: (e, t) => {
            l[e].push(t), "connect" === e && o?.readyState === 1 && t();
          },
          off: (e, t) => {
            let r = l[e].indexOf(t);
            -1 !== r && l[e].splice(r, 1);
          },
          list: (e, t) =>
            new Promise((n) => {
              let i = p(e, t),
                o = [],
                a = setTimeout(() => {
                  i.unsub(), n(o);
                }, r);
              i.on("eose", () => {
                i.unsub(), clearTimeout(a), n(o);
              }),
                i.on("event", (e) => {
                  o.push(e);
                });
            }),
          get: (e, t) =>
            new Promise((r) => {
              let i = p([e], t),
                o = setTimeout(() => {
                  i.unsub(), r(null);
                }, n);
              i.on("event", (e) => {
                i.unsub(), clearTimeout(o), r(e);
              });
            }),
          count: (e) =>
            new Promise((t) => {
              let r = p(e, { ...p, verb: "COUNT" }),
                n = setTimeout(() => {
                  r.unsub(), t(null);
                }, i);
              r.on("count", (e) => {
                r.unsub(), clearTimeout(n), t(e);
              });
            }),
          async publish(e) {
            await g(e, "EVENT");
          },
          async auth(e) {
            await g(e, "AUTH");
          },
          connect: async function () {
            f() || (await h());
          },
          close() {
            (l = nL()), (u = {}), (c = {}), o?.readyState === WebSocket.OPEN && o.close();
          },
          get status() {
            return o?.readyState ?? 3;
          },
        };
      }
      async function* n$(e) {
        let t;
        let r = [],
          n = (e) => {
            t ? (t(e), (t = void 0)) : r.push(e);
          };
        e.on("event", n);
        try {
          for (; ;)
            if (r.length > 0) yield r.shift();
            else {
              let e = await new Promise((e) => {
                t = e;
              });
              yield e;
            }
        } finally {
          e.off("event", n);
        }
      }
      var n_ = {};
      no(n_, { BECH32_REGEX: () => nC, decode: () => nR, naddrEncode: () => nP, neventEncode: () => nT, noteEncode: () => nK, nprofileEncode: () => nq, npubEncode: () => nj, nrelayEncode: () => nD, nsecEncode: () => nN });
      var nC = /[\x21-\x7E]{1,83}1[023456789acdefghjklmnpqrstuvwxyz]{6,}/;
      function nR(e) {
        let { prefix: t, words: r } = tt.decode(e, 5e3),
          n = new Uint8Array(tt.fromWords(r));
        switch (t) {
          case "nprofile": {
            let e = nO(n);
            if (!e[0]?.[0]) throw Error("missing TLV 0 for nprofile");
            if (32 !== e[0][0].length) throw Error("TLV 0 should be 32 bytes");
            return { type: "nprofile", data: { pubkey: w(e[0][0]), relays: e[1] ? e[1].map((e) => nl.decode(e)) : [] } };
          }
          case "nevent": {
            let e = nO(n);
            if (!e[0]?.[0]) throw Error("missing TLV 0 for nevent");
            if (32 !== e[0][0].length) throw Error("TLV 0 should be 32 bytes");
            if (e[2] && 32 !== e[2][0].length) throw Error("TLV 2 should be 32 bytes");
            if (e[3] && 4 !== e[3][0].length) throw Error("TLV 3 should be 4 bytes");
            return { type: "nevent", data: { id: w(e[0][0]), relays: e[1] ? e[1].map((e) => nl.decode(e)) : [], author: e[2]?.[0] ? w(e[2][0]) : void 0, kind: e[3]?.[0] ? parseInt(w(e[3][0]), 16) : void 0 } };
          }
          case "naddr": {
            let e = nO(n);
            if (!e[0]?.[0]) throw Error("missing TLV 0 for naddr");
            if (!e[2]?.[0]) throw Error("missing TLV 2 for naddr");
            if (32 !== e[2][0].length) throw Error("TLV 2 should be 32 bytes");
            if (!e[3]?.[0]) throw Error("missing TLV 3 for naddr");
            if (4 !== e[3][0].length) throw Error("TLV 3 should be 4 bytes");
            return { type: "naddr", data: { identifier: nl.decode(e[0][0]), pubkey: w(e[2][0]), kind: parseInt(w(e[3][0]), 16), relays: e[1] ? e[1].map((e) => nl.decode(e)) : [] } };
          }
          case "nrelay": {
            let e = nO(n);
            if (!e[0]?.[0]) throw Error("missing TLV 0 for nrelay");
            return { type: "nrelay", data: nl.decode(e[0][0]) };
          }
          case "nsec":
          case "npub":
          case "note":
            return { type: t, data: w(n) };
          default:
            throw Error(`unknown prefix ${t}`);
        }
      }
      function nO(e) {
        let t = {},
          r = e;
        for (; r.length > 0;) {
          let e = r[0],
            n = r[1];
          if (!n) throw Error(`malformed TLV ${e}`);
          let i = r.slice(2, 2 + n);
          if (((r = r.slice(2 + n)), i.length < n)) throw Error(`not enough data to read on TLV ${e}`);
          (t[e] = t[e] || []), t[e].push(i);
        }
        return t;
      }
      function nN(e) {
        return nz("nsec", m(e));
      }
      function nj(e) {
        return nz("npub", m(e));
      }
      function nK(e) {
        return nz("note", m(e));
      }
      function nz(e, t) {
        let r = tt.toWords(t);
        return tt.encode(e, r, 5e3);
      }
      function nq(e) {
        return nz("nprofile", nM({ 0: [m(e.pubkey)], 1: (e.relays || []).map((e) => nu.encode(e)) }));
      }
      function nT(e) {
        let t;
        return (
          void 0 != e.kind &&
          (t = (function (e) {
            let t = new Uint8Array(4);
            return (t[0] = (e >> 24) & 255), (t[1] = (e >> 16) & 255), (t[2] = (e >> 8) & 255), (t[3] = 255 & e), t;
          })(e.kind)),
          nz("nevent", nM({ 0: [m(e.id)], 1: (e.relays || []).map((e) => nu.encode(e)), 2: e.author ? [m(e.author)] : [], 3: t ? [new Uint8Array(t)] : [] }))
        );
      }
      function nP(e) {
        let t = new ArrayBuffer(4);
        return new DataView(t).setUint32(0, e.kind, !1), nz("naddr", nM({ 0: [nu.encode(e.identifier)], 1: (e.relays || []).map((e) => nu.encode(e)), 2: [m(e.pubkey)], 3: [new Uint8Array(t)] }));
      }
      function nD(e) {
        return nz("nrelay", nM({ 0: [nu.encode(e)] }));
      }
      function nM(e) {
        let t = [];
        return (
          Object.entries(e).forEach(([e, r]) => {
            r.forEach((r) => {
              let n = new Uint8Array(r.length + 2);
              n.set([parseInt(e)], 0), n.set([r.length], 1), n.set(r, 2), t.push(n);
            });
          }),
          E(...t)
        );
      }
      var nF = {};
      async function nV(e, t, r) {
        let n = nG(eL.getSharedSecret(e, "02" + t)),
          i = Uint8Array.from(k(16)),
          o = nu.encode(r),
          a = await crypto.subtle.importKey("raw", n, { name: "AES-CBC" }, !1, ["encrypt"]),
          s = await crypto.subtle.encrypt({ name: "AES-CBC", iv: i }, a, o),
          l = e8.encode(new Uint8Array(s)),
          u = e8.encode(new Uint8Array(i.buffer));
        return `${l}?iv=${u}`;
      }
      async function nZ(e, t, r) {
        let [n, i] = r.split("?iv="),
          o = nG(eL.getSharedSecret(e, "02" + t)),
          a = await crypto.subtle.importKey("raw", o, { name: "AES-CBC" }, !1, ["decrypt"]),
          s = e8.decode(n),
          l = e8.decode(i),
          u = await crypto.subtle.decrypt({ name: "AES-CBC", iv: l }, a, s);
        return nl.decode(u);
      }
      function nG(e) {
        return e.slice(1, 33);
      }
      no(nF, { decrypt: () => nZ, encrypt: () => nV }),
        "undefined" != typeof crypto && !crypto.subtle && crypto.webcrypto && (crypto.subtle = crypto.webcrypto.subtle),
        no({}, { NIP05_REGEX: () => nW, queryProfile: () => nQ, searchDomain: () => nY, useFetchImplementation: () => nJ });
      var nW = /^(?:([\w.+-]+)@)?([\w.-]+)$/;
      try {
        i = fetch;
      } catch { }
      function nJ(e) {
        i = e;
      }
      async function nY(e, t = "") {
        try {
          return (await (await i(`https://${e}/.well-known/nostr.json?name=${t}`)).json()).names;
        } catch (e) {
          return {};
        }
      }
      async function nQ(e) {
        let t = e.match(nW);
        if (!t) return null;
        let [r, n = "_", o] = t;
        try {
          let e = await i(`https://${o}/.well-known/nostr.json?name=${n}`),
            { names: t, relays: r } = (function (e) {
              let t = { names: {} };
              for (let [r, n] of Object.entries(e.names)) "string" == typeof r && "string" == typeof n && (t.names[r] = n);
              if (e.relays) for (let [r, n] of ((t.relays = {}), Object.entries(e.relays))) "string" == typeof r && Array.isArray(n) && (t.relays[r] = n.filter((e) => "string" == typeof e));
              return t;
            })(await e.json()),
            a = t[n];
          return a ? { pubkey: a, relays: r?.[a] } : null;
        } catch (e) {
          return null;
        }
      }
      function nX(e, t) {
        let r = rD
          .fromMasterSeed(
            (function (e, t = "") {
              return (function (e, t, r, n) {
                var i;
                let o;
                let { c: a, dkLen: s, DK: l, PRF: u, PRFSalt: c } = (function (e, t, r, n) {
                  to(e);
                  let { c: i, dkLen: o, asyncTick: a } = (function (e, t) {
                    if (void 0 !== t && "[object Object]" !== tf.call(t)) throw Error("Options should be object or undefined");
                    return Object.assign(e, t);
                  })({ dkLen: 32, asyncTick: 10 }, n);
                  if ((tn(i), tn(o), tn(a), i < 1)) throw Error("PBKDF2: iterations (c) should be >= 1");
                  let s = tc(t),
                    l = tc(r),
                    u = new Uint8Array(o),
                    c = tg.create(e, s),
                    h = c._cloneInto().update(l);
                  return { c: i, dkLen: o, asyncTick: a, DK: u, PRF: c, PRFSalt: h };
                })(e, t, r, n),
                  h = new Uint8Array(4),
                  f = tl(h),
                  d = new Uint8Array(u.outputLen);
                for (let e = 1, t = 0; t < s; e++, t += u.outputLen) {
                  let r = l.subarray(t, t + u.outputLen);
                  f.setInt32(0, e, !1), (o = c._cloneInto(o)).update(h).digestInto(d), r.set(d.subarray(0, r.length));
                  for (let e = 1; e < a; e++) {
                    u._cloneInto(o).update(d).digestInto(d);
                    for (let e = 0; e < r.length; e++) r[e] ^= d[e];
                  }
                }
                return (i = o), u.destroy(), c.destroy(), i && i.destroy(), d.fill(0), l;
              })(t_, tV(e).nfkd, tJ(t), { c: 2048, dkLen: 64 });
            })(e, t)
          )
          .derive("m/44'/1237'/0'/0/0").privateKey;
        if (!r) throw Error("could not derive private key");
        return w(r);
      }
      function n0() {
        return (function (e, t = 128) {
          var r;
          if ((tn(t), t % 32 != 0 || t > 256)) throw TypeError("Invalid entropy");
          return (
            tZ(
              (r = (function (e = 32) {
                if (ts && "function" == typeof ts.getRandomValues) return ts.getRandomValues(new Uint8Array(e));
                throw Error("crypto.getRandomValues must be defined");
              })(t / 8))
            ),
            tW(e)
              .encode(r)
              .join(tM(e) ? "　" : " ")
          );
        })(tr);
      }
      function n1(e) {
        return (function (e, t) {
          try {
            !(function (e, t) {
              let { words: r } = tV(e),
                n = tW(t).decode(r);
              tZ(n);
            })(e, t);
          } catch (e) {
            return !1;
          }
          return !0;
        })(e, tr);
      }
      function n2(e) {
        let t = { reply: void 0, root: void 0, mentions: [], profiles: [] },
          r = [];
        for (let n of e.tags) "e" === n[0] && n[1] && r.push(n), "p" === n[0] && n[1] && t.profiles.push({ pubkey: n[1], relays: n[2] ? [n[2]] : [] });
        for (let e = 0; e < r.length; e++) {
          let [n, i, o, a] = r[e],
            s = { id: i, relays: o ? [o] : [] },
            l = 0 === e,
            u = e === r.length - 1;
          if ("root" === a) {
            t.root = s;
            continue;
          }
          if ("reply" === a) {
            t.reply = s;
            continue;
          }
          if ("mention" === a) {
            t.mentions.push(s);
            continue;
          }
          if (l) {
            t.root = s;
            continue;
          }
          if (u) {
            t.reply = s;
            continue;
          }
          t.mentions.push(s);
        }
        return t;
      }
      function n3(e) {
        let t = 0;
        for (let r = 0; r < e.length; r++) {
          let n = parseInt(e[r], 16);
          if (0 === n) t += 4;
          else {
            t += Math.clz32(n) - 28;
            break;
          }
        }
        return t;
      }
      function n8(e, t) {
        let r = 0,
          n = ["nonce", "0", t.toString()];
        for (e.tags.push(n); ;) {
          let i = Math.floor(new Date().getTime() / 1e3);
          if ((i !== e.created_at && ((r = 0), (e.created_at = i)), (n[1] = (++r).toString()), (e.id = nw(e)), n3(e.id) >= t)) break;
        }
        return e;
      }
      function n4(e, t, r, n) {
        return nb({ kind: 6, tags: [...(e.tags ?? []), ["e", t.id, r], ["p", t.pubkey]], content: "" === e.content ? "" : JSON.stringify(t), created_at: e.created_at }, n);
      }
      function n5(e) {
        let t, r;
        if (6 === e.kind) {
          for (let n = e.tags.length - 1; n >= 0 && (void 0 === t || void 0 === r); n--) {
            let i = e.tags[n];
            i.length >= 2 && ("e" === i[0] && void 0 === t ? (t = i) : "p" === i[0] && void 0 === r && (r = i));
          }
          if (void 0 !== t) return { id: t[1], relays: [t[2], r?.[2]].filter((e) => "string" == typeof e), author: r?.[1] };
        }
      }
      function n6(e, { skipVerification: t } = {}) {
        let r;
        let n = n5(e);
        if (void 0 !== n && "" !== e.content) {
          try {
            r = JSON.parse(e.content);
          } catch (e) {
            return;
          }
          if (r.id === n.id && (t || nE(r))) return r;
        }
      }
      no({}, { generateSeedWords: () => n0, privateKeyFromSeedWords: () => nX, validateWords: () => n1 }),
        no({}, { parse: () => n2 }),
        no({}, { getPow: () => n3, minePow: () => n8 }),
        no({}, { finishRepostEvent: () => n4, getRepostedEvent: () => n6, getRepostedEventPointer: () => n5 }),
        no({}, { NOSTR_URI_REGEX: () => n7, parse: () => ie, test: () => n9 });
      var n7 = RegExp(`nostr:(${nC.source})`);
      function n9(e) {
        return "string" == typeof e && RegExp(`^${n7.source}$`).test(e);
      }
      function ie(e) {
        let t = e.match(RegExp(`^${n7.source}$`));
        if (!t) throw Error(`Invalid Nostr URI: ${e}`);
        return { uri: t[0], value: t[1], decoded: nR(t[1]) };
      }
      function it(e, t, r) {
        let n = t.tags.filter((e) => e.length >= 2 && ("e" === e[0] || "p" === e[0]));
        return nb({ ...e, kind: 7, tags: [...(e.tags ?? []), ...n, ["e", t.id], ["p", t.pubkey]], content: e.content ?? "+" }, r);
      }
      function ir(e) {
        let t, r;
        if (7 === e.kind) {
          for (let n = e.tags.length - 1; n >= 0 && (void 0 === t || void 0 === r); n--) {
            let i = e.tags[n];
            i.length >= 2 && ("e" === i[0] && void 0 === t ? (t = i) : "p" === i[0] && void 0 === r && (r = i));
          }
          if (void 0 !== t && void 0 !== r) return { id: t[1], relays: [t[2], r[2]].filter((e) => void 0 !== e), author: r[1] };
        }
      }
      function ii(e, t) {
        let r = [];
        (t.kind || -1) >= 0 && r.push(`kind=${t.kind}`), t.until && r.push(`created_at<${t.until}`), t.since && r.push(`created_at>${t.since}`);
        let n = r.join("&");
        if ("" === n) throw Error("refusing to create a delegation without any conditions");
        let i = C(nu.encode(`nostr:delegation:${t.pubkey}:${n}`)),
          o = w(eF.sign(i, e));
        return { from: ns(e), to: t.pubkey, cond: n, sig: o };
      }
      function io(e) {
        let t = e.tags.find((e) => "delegation" === e[0] && e.length >= 4);
        if (!t) return null;
        let r = t[1],
          n = t[2],
          i = t[3],
          o = n.split("&");
        for (let t = 0; t < o.length; t++) {
          let [r, n, i] = o[t].split(/\b/);
          if ("kind" !== r || "=" !== n || e.kind !== parseInt(i)) {
            if ("created_at" === r && "<" === n && e.created_at < parseInt(i)) continue;
            if ("created_at" === r && ">" === n && e.created_at > parseInt(i)) continue;
            else return null;
          }
        }
        let a = C(nu.encode(`nostr:delegation:${e.pubkey}:${n}`));
        return eF.verify(i, a, r) ? r : null;
      }
      no({}, { finishReactionEvent: () => it, getReactedEventPointer: () => ir }), no({}, { createDelegation: () => ii, getDelegator: () => io }), no({}, { matchAll: () => is, regex: () => ia, replaceAll: () => il });
      var ia = () => RegExp(`\\b${n7.source}\\b`, "g");
      function* is(e) {
        for (let t of e.matchAll(ia()))
          try {
            let [e, r] = t;
            yield { uri: e, value: r, decoded: nR(r), start: t.index, end: t.index + e.length };
          } catch (e) { }
      }
      function il(e, t) {
        return e.replaceAll(ia(), (e, r) => t({ uri: e, value: r, decoded: nR(r) }));
      }
      no({}, { channelCreateEvent: () => iu, channelHideMessageEvent: () => id, channelMessageEvent: () => ih, channelMetadataEvent: () => ic, channelMuteUserEvent: () => ip });
      var iu = (e, t) => {
        let r;
        if ("object" == typeof e.content) r = JSON.stringify(e.content);
        else {
          if ("string" != typeof e.content) return;
          r = e.content;
        }
        return nb({ kind: 40, tags: [...(e.tags ?? [])], content: r, created_at: e.created_at }, t);
      },
        ic = (e, t) => {
          let r;
          if ("object" == typeof e.content) r = JSON.stringify(e.content);
          else {
            if ("string" != typeof e.content) return;
            r = e.content;
          }
          return nb({ kind: 41, tags: [["e", e.channel_create_event_id], ...(e.tags ?? [])], content: r, created_at: e.created_at }, t);
        },
        ih = (e, t) => {
          let r = [["e", e.channel_create_event_id, e.relay_url, "root"]];
          return e.reply_to_channel_message_event_id && r.push(["e", e.reply_to_channel_message_event_id, e.relay_url, "reply"]), nb({ kind: 42, tags: [...r, ...(e.tags ?? [])], content: e.content, created_at: e.created_at }, t);
        },
        id = (e, t) => {
          let r;
          if ("object" == typeof e.content) r = JSON.stringify(e.content);
          else {
            if ("string" != typeof e.content) return;
            r = e.content;
          }
          return nb({ kind: 43, tags: [["e", e.channel_message_event_id], ...(e.tags ?? [])], content: r, created_at: e.created_at }, t);
        },
        ip = (e, t) => {
          let r;
          if ("object" == typeof e.content) r = JSON.stringify(e.content);
          else {
            if ("string" != typeof e.content) return;
            r = e.content;
          }
          return nb({ kind: 44, tags: [["p", e.pubkey_to_mute], ...(e.tags ?? [])], content: r, created_at: e.created_at }, t);
        };
      no({}, { useFetchImplementation: () => ig, validateGithub: () => iy });
      try {
        o = fetch;
      } catch { }
      function ig(e) {
        o = e;
      }
      async function iy(e, t, r) {
        try {
          return (await (await o(`https://gist.github.com/${t}/${r}/raw`)).text()) === `Verifying that I control the following Nostr public key: ${e}`;
        } catch (e) {
          return !1;
        }
      }
      no({}, { authenticate: () => ib });
      var ib = async ({ challenge: e, relay: t, sign: r }) => {
        let n = {
          kind: 22242,
          created_at: Math.floor(Date.now() / 1e3),
          tags: [
            ["relay", t.url],
            ["challenge", e],
          ],
          content: "",
        };
        return t.auth(await r(n));
      };
      no({}, { decrypt: () => iv, encrypt: () => im, utils: () => iw });
      var iw = {
        v2: {
          maxPlaintextSize: 65408,
          minCiphertextSize: 100,
          maxCiphertextSize: 102400,
          getConversationKey: (e, t) => eL.getSharedSecret(e, "02" + t).subarray(1, 33),
          getMessageKeys(e, t) {
            let r = nn(C, e, t, "nip44-v2", 76);
            return { encryption: r.subarray(0, 32), nonce: r.subarray(32, 44), auth: r.subarray(44, 76) };
          },
          calcPadding(e) {
            if (!Number.isSafeInteger(e) || e < 0) throw Error("expected positive integer");
            if (e <= 32) return 32;
            let t = 1 << (Math.floor(Math.log2(e - 1)) + 1),
              r = t <= 256 ? 32 : t / 8;
            return r * (Math.floor((e - 1) / r) + 1);
          },
          pad(e) {
            let t = nu.encode(e),
              r = t.length;
            if (r < 1 || r >= iw.v2.maxPlaintextSize) throw Error("invalid plaintext length: must be between 1b and 64KB");
            let n = new Uint8Array(iw.v2.calcPadding(r) - r),
              i = new Uint8Array(2);
            return new DataView(i.buffer).setUint16(0, r), E(i, t, n);
          },
          unpad(e) {
            let t = new DataView(e.buffer).getUint16(0),
              r = e.subarray(2, 2 + t);
            if (0 === t || r.length !== t || e.length !== 2 + iw.v2.calcPadding(t)) throw Error("invalid padding");
            return nl.decode(r);
          },
        },
      };
      function im(e, t, r = {}) {
        let n = r.version ?? 2;
        if (2 !== n) throw Error("unknown encryption version " + n);
        let i = r.salt ?? k(32);
        rW(i, 32);
        let o = iw.v2.getMessageKeys(e, i),
          a = iw.v2.pad(t),
          s = r9(o.encryption, o.nonce, a),
          l = eE(C, o.auth, s);
        return e8.encode(E(new Uint8Array([n]), i, s, l));
      }
      function iv(e, t) {
        let r;
        let n = iw.v2;
        rW(e, 32);
        let i = t.length;
        if (i < n.minCiphertextSize || i >= n.maxCiphertextSize) throw Error("invalid ciphertext length: " + i);
        if ("#" === t[0]) throw Error("unknown encryption version");
        try {
          r = e8.decode(t);
        } catch (e) {
          throw Error("invalid base64: " + e.message);
        }
        let o = r.subarray(0, 1)[0];
        if (2 !== o) throw Error("unknown encryption version " + o);
        let a = r.subarray(1, 33),
          s = r.subarray(33, -32),
          l = r.subarray(-32),
          u = n.getMessageKeys(e, a);
        if (
          !(function (e, t) {
            if (e.length !== t.length) throw Error("equalBytes: Different size of Uint8Arrays");
            let r = !0;
            for (let n = 0; n < e.length; n++) r && (r = e[n] === t[n]);
            return r;
          })(eE(C, u.auth, s), l)
        )
          throw Error("invalid MAC");
        let c = r9(u.encryption, u.nonce, s);
        return n.unpad(c);
      }
      function iE(e) {
        let { pathname: t, searchParams: r } = new URL(e),
          n = r.get("relay"),
          i = r.get("secret");
        if (!t || !n || !i) throw Error("invalid connection string");
        return { pubkey: t, relay: n, secret: i };
      }
      async function ix({ pubkey: e, secret: t, invoice: r }) {
        let n = await nV(t, e, JSON.stringify({ method: "pay_invoice", params: { invoice: r } }));
        return nb({ kind: 23194, created_at: Math.round(Date.now() / 1e3), content: n, tags: [["p", e]] }, t);
      }
      no({}, { makeNwcRequestEvent: () => ix, parseConnectionString: () => iE }),
        no({}, { getZapEndpoint: () => ik, makeZapReceipt: () => iI, makeZapRequest: () => iB, useFetchImplementation: () => iA, validateZapRequest: () => iU });
      try {
        a = fetch;
      } catch { }
      function iA(e) {
        a = e;
      }
      async function ik(e) {
        try {
          let t = "",
            { lud06: r, lud16: n } = JSON.parse(e.content);
          if (r) {
            let { words: e } = tt.decode(r, 1e3),
              n = tt.fromWords(e);
            t = nl.decode(n);
          } else {
            if (!n) return null;
            let [e, r] = n.split("@");
            t = `https://${r}/.well-known/lnurlp/${e}`;
          }
          let i = await a(t),
            o = await i.json();
          if (o.allowsNostr && o.nostrPubkey) return o.callback;
        } catch (e) { }
        return null;
      }
      function iB({ profile: e, event: t, amount: r, relays: n, comment: i = "" }) {
        if (!r) throw Error("amount not given");
        if (!e) throw Error("profile not given");
        let o = {
          kind: 9734,
          created_at: Math.round(Date.now() / 1e3),
          content: i,
          tags: [
            ["p", e],
            ["amount", r.toString()],
            ["relays", ...n],
          ],
        };
        return t && o.tags.push(["e", t]), o;
      }
      function iU(e) {
        let t;
        try {
          t = JSON.parse(e);
        } catch (e) {
          return "Invalid zap request JSON.";
        }
        if (!nv(t)) return "Zap request is not a valid Nostr event.";
        if (!nE(t)) return "Invalid signature on zap request.";
        let r = t.tags.find(([e, t]) => "p" === e && t);
        if (!r) return "Zap request doesn't have a 'p' tag.";
        if (!r[1].match(/^[a-f0-9]{64}$/)) return "Zap request 'p' tag is not valid hex.";
        let n = t.tags.find(([e, t]) => "e" === e && t);
        return n && !n[1].match(/^[a-f0-9]{64}$/) ? "Zap request 'e' tag is not valid hex." : t.tags.find(([e, t]) => "relays" === e && t) ? null : "Zap request doesn't have a 'relays' tag.";
      }
      function iI({ zapRequest: e, preimage: t, bolt11: r, paidAt: n }) {
        let i = JSON.parse(e).tags.filter(([e]) => "e" === e || "p" === e || "a" === e),
          o = { kind: 9735, created_at: Math.round(n.getTime() / 1e3), content: "", tags: [...i, ["bolt11", r], ["description", e]] };
        return t && o.tags.push(["preimage", t]), o;
      }
      no({}, { getToken: () => iL, unpackEventFromToken: () => i$, validateEvent: () => i_, validateToken: () => iH });
      var iS = "Nostr ";
      async function iL(e, t, r, n = !1) {
        if (!e || !t) throw Error("Missing loginUrl or httpMethod");
        let i = (function (e = 255) {
          return { kind: e, content: "", tags: [], created_at: 0 };
        })(27235);
        (i.tags = [
          ["u", e],
          ["method", t],
        ]),
          (i.created_at = Math.round(new Date().getTime() / 1e3));
        let o = await r(i);
        return (n ? iS : "") + e8.encode(nu.encode(JSON.stringify(o)));
      }
      async function iH(e, t, r) {
        let n = await i$(e).catch((e) => {
          throw e;
        });
        return await i_(n, t, r).catch((e) => {
          throw e;
        });
      }
      async function i$(e) {
        if (!e) throw Error("Missing token");
        e = e.replace(iS, "");
        let t = nl.decode(e8.decode(e));
        if (!t || 0 === t.length || !t.startsWith("{")) throw Error("Invalid token");
        return JSON.parse(t);
      }
      async function i_(e, t, r) {
        if (!e) throw Error("Invalid nostr event");
        if (!nE(e)) throw Error("Invalid nostr event, signature invalid");
        if (27235 !== e.kind) throw Error("Invalid nostr event, kind invalid");
        if (!e.created_at) throw Error("Invalid nostr event, created_at invalid");
        if (Math.round(new Date().getTime() / 1e3) - e.created_at > 60) throw Error("Invalid nostr event, expired");
        let n = e.tags.find((e) => "u" === e[0]);
        if (n?.length !== 1 && n?.[1] !== t) throw Error("Invalid nostr event, url tag invalid");
        let i = e.tags.find((e) => "method" === e[0]);
        if (i?.length !== 1 && i?.[1].toLowerCase() !== r.toLowerCase()) throw Error("Invalid nostr event, method tag invalid");
        return !0;
      }
    },
  },
]);





// "use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1622],{51526:function(e,t,r){r.d(t,{M:function(){return w}});var n=r(85893),i=r(67294),o=r(58868);function a(){let e=(0,i.useRef)(!1);return(0,o.L)(()=>(e.current=!0,()=>{e.current=!1}),[]),e}var s=r(26166),l=r(240),u=r(96681),c=r(16014);class h extends i.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){let e=this.props.sizeRef.current;e.height=t.offsetHeight||0,e.width=t.offsetWidth||0,e.top=t.offsetTop,e.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function f({children:e,isPresent:t}){let r=(0,i.useId)(),o=(0,i.useRef)(null),a=(0,i.useRef)({width:0,height:0,top:0,left:0}),{nonce:s}=(0,i.useContext)(c._);return(0,i.useInsertionEffect)(()=>{let{width:e,height:n,top:i,left:l}=a.current;if(t||!o.current||!e||!n)return;o.current.dataset.motionPopId=r;let u=document.createElement("style");return s&&(u.nonce=s),document.head.appendChild(u),u.sheet&&u.sheet.insertRule(`
//           [data-motion-pop-id="${r}"] {
//             position: absolute !important;
//             width: ${e}px !important;
//             height: ${n}px !important;
//             top: ${i}px !important;
//             left: ${l}px !important;
//           }
//         `),()=>{document.head.removeChild(u)}},[t]),(0,n.jsx)(h,{isPresent:t,childRef:o,sizeRef:a,children:i.cloneElement(e,{ref:o})})}let d=({children:e,initial:t,isPresent:r,onExitComplete:o,custom:a,presenceAffectsLayout:s,mode:c})=>{let h=(0,u.h)(p),d=(0,i.useId)(),g=(0,i.useMemo)(()=>({id:d,initial:t,isPresent:r,custom:a,onExitComplete:e=>{for(let t of(h.set(e,!0),h.values()))if(!t)return;o&&o()},register:e=>(h.set(e,!1),()=>h.delete(e))}),s?[Math.random()]:[r]);return(0,i.useMemo)(()=>{h.forEach((e,t)=>h.set(t,!1))},[r]),i.useEffect(()=>{r||h.size||!o||o()},[r]),"popLayout"===c&&(e=(0,n.jsx)(f,{isPresent:r,children:e})),(0,n.jsx)(l.O.Provider,{value:g,children:e})};function p(){return new Map}var g=r(25364),y=r(45487);let b=e=>e.key||"",w=({children:e,custom:t,initial:r=!0,onExitComplete:l,exitBeforeEnter:u,presenceAffectsLayout:c=!0,mode:h="sync"})=>{var f;(0,y.k)(!u,"Replace exitBeforeEnter with mode='wait'");let p=(0,i.useContext)(g.p).forceRender||function(){let e=a(),[t,r]=(0,i.useState)(0),n=(0,i.useCallback)(()=>{e.current&&r(t+1)},[t]);return[(0,i.useCallback)(()=>s.Wi.postRender(n),[n]),t]}()[0],w=a(),m=function(e){let t=[];return i.Children.forEach(e,e=>{(0,i.isValidElement)(e)&&t.push(e)}),t}(e),v=m,E=(0,i.useRef)(new Map).current,x=(0,i.useRef)(v),A=(0,i.useRef)(new Map).current,k=(0,i.useRef)(!0);if((0,o.L)(()=>{k.current=!1,function(e,t){e.forEach(e=>{let r=b(e);t.set(r,e)})}(m,A),x.current=v}),f=()=>{k.current=!0,A.clear(),E.clear()},(0,i.useEffect)(()=>()=>f(),[]),k.current)return(0,n.jsx)(n.Fragment,{children:v.map(e=>(0,n.jsx)(d,{isPresent:!0,initial:!!r&&void 0,presenceAffectsLayout:c,mode:h,children:e},b(e)))});v=[...v];let B=x.current.map(b),U=m.map(b),I=B.length;for(let e=0;e<I;e++){let t=B[e];-1!==U.indexOf(t)||E.has(t)||E.set(t,void 0)}return"wait"===h&&E.size&&(v=[]),E.forEach((e,r)=>{if(-1!==U.indexOf(r))return;let i=A.get(r);if(!i)return;let o=B.indexOf(r),a=e;a||(a=(0,n.jsx)(d,{isPresent:!1,onExitComplete:()=>{E.delete(r);let e=Array.from(A.keys()).filter(e=>!U.includes(e));if(e.forEach(e=>A.delete(e)),x.current=m.filter(t=>{let n=b(t);return n===r||e.includes(n)}),!E.size){if(!1===w.current)return;p(),l&&l()}},custom:t,presenceAffectsLayout:c,mode:h,children:i},b(i)),E.set(r,a)),v.splice(o,0,a)}),v=v.map(e=>{let t=e.key;return E.has(t)?e:(0,n.jsx)(d,{isPresent:!0,presenceAffectsLayout:c,mode:h,children:e},b(e))}),(0,n.jsx)(n.Fragment,{children:E.size?v:v.map(e=>(0,i.cloneElement)(e))})}},45487:function(e,t,r){r.d(t,{K:function(){return i},k:function(){return o}});var n=r(81662);let i=n.Z,o=n.Z},11093:function(e,t,r){r.d(t,{wQ:function(){return na},s_:function(){return nw},$3:function(){return ns},o$:function(){return nx},_J:function(){return nF},uD:function(){return n_},L6:function(){return nH},Z5:function(){return nv},q9:function(){return ng},uM:function(){return nE}});var n,i,o,a,s={};function l(e){if(!Number.isSafeInteger(e)||e<0)throw Error(`Wrong positive integer: ${e}`)}function u(e,...t){if(!(e instanceof Uint8Array))throw Error("Expected Uint8Array");if(t.length>0&&!t.includes(e.length))throw Error(`Expected Uint8Array of length ${t}, not of length=${e.length}`)}r.r(s),r.d(s,{dQ:function(){return Z},ci:function(){return K},bytesToNumberBE:function(){return T},ty:function(){return P},eV:function(){return V},n$:function(){return J},ql:function(){return F},hexToBytes:function(){return q},tL:function(){return D},S5:function(){return M},FF:function(){return Q}});var c=function(e){if("function"!=typeof e||"function"!=typeof e.create)throw Error("Hash should be wrapped by utils.wrapConstructor");l(e.outputLen),l(e.blockLen)},h=function(e,t=!0){if(e.destroyed)throw Error("Hash instance has been destroyed");if(t&&e.finished)throw Error("Hash#digest() has already been called")},f=function(e,t){u(e);let r=t.outputLen;if(e.length<r)throw Error(`digestInto() expects output buffer of length at least ${r}`)};let d="object"==typeof globalThis&&"crypto"in globalThis?globalThis.crypto:void 0,p=e=>e instanceof Uint8Array,g=e=>new DataView(e.buffer,e.byteOffset,e.byteLength),y=(e,t)=>e<<32-t|e>>>t;if(68!==new Uint8Array(new Uint32Array([287454020]).buffer)[0])throw Error("Non little-endian hardware is not supported");let b=Array.from({length:256},(e,t)=>t.toString(16).padStart(2,"0"));function w(e){if(!p(e))throw Error("Uint8Array expected");let t="";for(let r=0;r<e.length;r++)t+=b[e[r]];return t}function m(e){if("string"!=typeof e)throw Error("hex string expected, got "+typeof e);let t=e.length;if(t%2)throw Error("padded hex string expected, got unpadded hex of length "+t);let r=new Uint8Array(t/2);for(let t=0;t<r.length;t++){let n=2*t,i=Number.parseInt(e.slice(n,n+2),16);if(Number.isNaN(i)||i<0)throw Error("Invalid byte sequence");r[t]=i}return r}function v(e){if("string"==typeof e&&(e=function(e){if("string"!=typeof e)throw Error(`utf8ToBytes expected string, got ${typeof e}`);return new Uint8Array(new TextEncoder().encode(e))}(e)),!p(e))throw Error(`expected Uint8Array, got ${typeof e}`);return e}function E(...e){let t=new Uint8Array(e.reduce((e,t)=>e+t.length,0)),r=0;return e.forEach(e=>{if(!p(e))throw Error("Uint8Array expected");t.set(e,r),r+=e.length}),t}class x{clone(){return this._cloneInto()}}function A(e){let t=t=>e().update(v(t)).digest(),r=e();return t.outputLen=r.outputLen,t.blockLen=r.blockLen,t.create=()=>e(),t}function k(e=32){if(d&&"function"==typeof d.getRandomValues)return d.getRandomValues(new Uint8Array(e));throw Error("crypto.getRandomValues must be defined")}class B extends x{constructor(e,t,r,n){super(),this.blockLen=e,this.outputLen=t,this.padOffset=r,this.isLE=n,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(e),this.view=g(this.buffer)}update(e){h(this);let{view:t,buffer:r,blockLen:n}=this,i=(e=v(e)).length;for(let o=0;o<i;){let a=Math.min(n-this.pos,i-o);if(a===n){let t=g(e);for(;n<=i-o;o+=n)this.process(t,o);continue}r.set(e.subarray(o,o+a),this.pos),this.pos+=a,o+=a,this.pos===n&&(this.process(t,0),this.pos=0)}return this.length+=e.length,this.roundClean(),this}digestInto(e){h(this),f(e,this),this.finished=!0;let{buffer:t,view:r,blockLen:n,isLE:i}=this,{pos:o}=this;t[o++]=128,this.buffer.subarray(o).fill(0),this.padOffset>n-o&&(this.process(r,0),o=0);for(let e=o;e<n;e++)t[e]=0;!function(e,t,r,n){if("function"==typeof e.setBigUint64)return e.setBigUint64(t,r,n);let i=BigInt(32),o=BigInt(4294967295),a=Number(r>>i&o),s=Number(r&o),l=n?4:0,u=n?0:4;e.setUint32(t+l,a,n),e.setUint32(t+u,s,n)}(r,n-8,BigInt(8*this.length),i),this.process(r,0);let a=g(e),s=this.outputLen;if(s%4)throw Error("_sha2: outputLen should be aligned to 32bit");let l=s/4,u=this.get();if(l>u.length)throw Error("_sha2: outputLen bigger than state");for(let e=0;e<l;e++)a.setUint32(4*e,u[e],i)}digest(){let{buffer:e,outputLen:t}=this;this.digestInto(e);let r=e.slice(0,t);return this.destroy(),r}_cloneInto(e){e||(e=new this.constructor),e.set(...this.get());let{blockLen:t,buffer:r,length:n,finished:i,destroyed:o,pos:a}=this;return e.length=n,e.pos=a,e.finished=i,e.destroyed=o,n%t&&e.buffer.set(r),e}}let U=(e,t,r)=>e&t^~e&r,I=(e,t,r)=>e&t^e&r^t&r,S=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),L=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),H=new Uint32Array(64);class $ extends B{constructor(){super(64,32,8,!1),this.A=0|L[0],this.B=0|L[1],this.C=0|L[2],this.D=0|L[3],this.E=0|L[4],this.F=0|L[5],this.G=0|L[6],this.H=0|L[7]}get(){let{A:e,B:t,C:r,D:n,E:i,F:o,G:a,H:s}=this;return[e,t,r,n,i,o,a,s]}set(e,t,r,n,i,o,a,s){this.A=0|e,this.B=0|t,this.C=0|r,this.D=0|n,this.E=0|i,this.F=0|o,this.G=0|a,this.H=0|s}process(e,t){for(let r=0;r<16;r++,t+=4)H[r]=e.getUint32(t,!1);for(let e=16;e<64;e++){let t=H[e-15],r=H[e-2],n=y(t,7)^y(t,18)^t>>>3,i=y(r,17)^y(r,19)^r>>>10;H[e]=i+H[e-7]+n+H[e-16]|0}let{A:r,B:n,C:i,D:o,E:a,F:s,G:l,H:u}=this;for(let e=0;e<64;e++){let t=u+(y(a,6)^y(a,11)^y(a,25))+U(a,s,l)+S[e]+H[e]|0,c=(y(r,2)^y(r,13)^y(r,22))+I(r,n,i)|0;u=l,l=s,s=a,a=o+t|0,o=i,i=n,n=r,r=t+c|0}r=r+this.A|0,n=n+this.B|0,i=i+this.C|0,o=o+this.D|0,a=a+this.E|0,s=s+this.F|0,l=l+this.G|0,u=u+this.H|0,this.set(r,n,i,o,a,s,l,u)}roundClean(){H.fill(0)}destroy(){this.set(0,0,0,0,0,0,0,0),this.buffer.fill(0)}}class _ extends ${constructor(){super(),this.A=-1056596264,this.B=914150663,this.C=812702999,this.D=-150054599,this.E=-4191439,this.F=1750603025,this.G=1694076839,this.H=-1090891868,this.outputLen=28}}let C=A(()=>new $);A(()=>new _),BigInt(0);let R=BigInt(1),O=BigInt(2),N=e=>e instanceof Uint8Array,j=Array.from({length:256},(e,t)=>t.toString(16).padStart(2,"0"));function K(e){if(!N(e))throw Error("Uint8Array expected");let t="";for(let r=0;r<e.length;r++)t+=j[e[r]];return t}function z(e){if("string"!=typeof e)throw Error("hex string expected, got "+typeof e);return BigInt(""===e?"0":`0x${e}`)}function q(e){if("string"!=typeof e)throw Error("hex string expected, got "+typeof e);let t=e.length;if(t%2)throw Error("padded hex string expected, got unpadded hex of length "+t);let r=new Uint8Array(t/2);for(let t=0;t<r.length;t++){let n=2*t,i=Number.parseInt(e.slice(n,n+2),16);if(Number.isNaN(i)||i<0)throw Error("Invalid byte sequence");r[t]=i}return r}function T(e){return z(K(e))}function P(e){if(!N(e))throw Error("Uint8Array expected");return z(K(Uint8Array.from(e).reverse()))}function D(e,t){return q(e.toString(16).padStart(2*t,"0"))}function M(e,t){return D(e,t).reverse()}function F(e,t,r){let n;if("string"==typeof t)try{n=q(t)}catch(r){throw Error(`${e} must be valid hex string, got "${t}". Cause: ${r}`)}else if(N(t))n=Uint8Array.from(t);else throw Error(`${e} must be hex string or Uint8Array`);let i=n.length;if("number"==typeof r&&i!==r)throw Error(`${e} expected ${r} bytes, got ${i}`);return n}function V(...e){let t=new Uint8Array(e.reduce((e,t)=>e+t.length,0)),r=0;return e.forEach(e=>{if(!N(e))throw Error("Uint8Array expected");t.set(e,r),r+=e.length}),t}let Z=e=>(O<<BigInt(e-1))-R,G=e=>new Uint8Array(e),W=e=>Uint8Array.from(e);function J(e,t,r){if("number"!=typeof e||e<2)throw Error("hashLen must be a number");if("number"!=typeof t||t<2)throw Error("qByteLen must be a number");if("function"!=typeof r)throw Error("hmacFn must be a function");let n=G(e),i=G(e),o=0,a=()=>{n.fill(1),i.fill(0),o=0},s=(...e)=>r(i,n,...e),l=(e=G())=>{i=s(W([0]),e),n=s(),0!==e.length&&(i=s(W([1]),e),n=s())},u=()=>{if(o++>=1e3)throw Error("drbg: tried 1000 values");let e=0,r=[];for(;e<t;){let t=(n=s()).slice();r.push(t),e+=n.length}return V(...r)};return(e,t)=>{let r;for(a(),l(e);!(r=t(u()));)l();return a(),r}}let Y={bigint:e=>"bigint"==typeof e,function:e=>"function"==typeof e,boolean:e=>"boolean"==typeof e,string:e=>"string"==typeof e,isSafeInteger:e=>Number.isSafeInteger(e),array:e=>Array.isArray(e),field:(e,t)=>t.Fp.isValid(e),hash:e=>"function"==typeof e&&Number.isSafeInteger(e.outputLen)};function Q(e,t,r={}){let n=(t,r,n)=>{let i=Y[r];if("function"!=typeof i)throw Error(`Invalid validator "${r}", expected function`);let o=e[t];if((!n||void 0!==o)&&!i(o,e))throw Error(`Invalid param ${String(t)}=${o} (${typeof o}), expected ${r}`)};for(let[e,r]of Object.entries(t))n(e,r,!1);for(let[e,t]of Object.entries(r))n(e,t,!0);return e}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */let X=BigInt(0),ee=BigInt(1),et=BigInt(2),er=BigInt(3),en=BigInt(4),ei=BigInt(5),eo=BigInt(8);function ea(e,t){let r=e%t;return r>=X?r:t+r}function es(e,t,r){let n=e;for(;t-- >X;)n*=n,n%=r;return n}function el(e,t){if(e===X||t<=X)throw Error(`invert: expected positive integers, got n=${e} mod=${t}`);let r=ea(e,t),n=t,i=X,o=ee,a=ee,s=X;for(;r!==X;){let e=n/r,t=n%r,l=i-a*e,u=o-s*e;n=r,r=t,i=a,o=s,a=l,s=u}if(n!==ee)throw Error("invert: does not exist");return ea(i,t)}BigInt(9),BigInt(16);let eu=["create","isValid","is0","neg","inv","sqrt","sqr","eql","add","sub","mul","pow","div","addN","subN","mulN","sqrN"];function ec(e,t){let r=void 0!==t?t:e.toString(2).length;return{nBitLength:r,nByteLength:Math.ceil(r/8)}}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */let eh=BigInt(0),ef=BigInt(1);function ed(e){return Q(e.Fp,eu.reduce((e,t)=>(e[t]="function",e),{ORDER:"bigint",MASK:"bigint",BYTES:"isSafeInteger",BITS:"isSafeInteger"})),Q(e,{n:"bigint",h:"bigint",Gx:"field",Gy:"field"},{nBitLength:"isSafeInteger",nByteLength:"isSafeInteger"}),Object.freeze({...ec(e.n,e.nBitLength),...e,p:e.Fp.ORDER})}let{bytesToNumberBE:ep,hexToBytes:eg}=s,ey={Err:class extends Error{constructor(e=""){super(e)}},_parseInt(e){let{Err:t}=ey;if(e.length<2||2!==e[0])throw new t("Invalid signature integer tag");let r=e[1],n=e.subarray(2,r+2);if(!r||n.length!==r)throw new t("Invalid signature integer: wrong length");if(128&n[0])throw new t("Invalid signature integer: negative");if(0===n[0]&&!(128&n[1]))throw new t("Invalid signature integer: unnecessary leading zero");return{d:ep(n),l:e.subarray(r+2)}},toSig(e){let{Err:t}=ey,r="string"==typeof e?eg(e):e;if(!(r instanceof Uint8Array))throw Error("ui8a expected");let n=r.length;if(n<2||48!=r[0])throw new t("Invalid signature tag");if(r[1]!==n-2)throw new t("Invalid signature: incorrect length");let{d:i,l:o}=ey._parseInt(r.subarray(2)),{d:a,l:s}=ey._parseInt(o);if(s.length)throw new t("Invalid signature: left bytes after parsing");return{r:i,s:a}},hexFromSig(e){let t=e=>8&Number.parseInt(e[0],16)?"00"+e:e,r=e=>{let t=e.toString(16);return 1&t.length?`0${t}`:t},n=t(r(e.s)),i=t(r(e.r)),o=n.length/2,a=i.length/2,s=r(o),l=r(a);return`30${r(a+o+4)}02${l}${i}02${s}${n}`}},eb=BigInt(0),ew=BigInt(1),em=(BigInt(2),BigInt(3));BigInt(4);class ev extends x{constructor(e,t){super(),this.finished=!1,this.destroyed=!1,c(e);let r=v(t);if(this.iHash=e.create(),"function"!=typeof this.iHash.update)throw Error("Expected instance of class which extends utils.Hash");this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;let n=this.blockLen,i=new Uint8Array(n);i.set(r.length>n?e.create().update(r).digest():r);for(let e=0;e<i.length;e++)i[e]^=54;this.iHash.update(i),this.oHash=e.create();for(let e=0;e<i.length;e++)i[e]^=106;this.oHash.update(i),i.fill(0)}update(e){return h(this),this.iHash.update(e),this}digestInto(e){h(this),u(e,this.outputLen),this.finished=!0,this.iHash.digestInto(e),this.oHash.update(e),this.oHash.digestInto(e),this.destroy()}digest(){let e=new Uint8Array(this.oHash.outputLen);return this.digestInto(e),e}_cloneInto(e){e||(e=Object.create(Object.getPrototypeOf(this),{}));let{oHash:t,iHash:r,finished:n,destroyed:i,blockLen:o,outputLen:a}=this;return e.finished=n,e.destroyed=i,e.blockLen=o,e.outputLen=a,e.oHash=t._cloneInto(e.oHash),e.iHash=r._cloneInto(e.iHash),e}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}}let eE=(e,t,r)=>new ev(e,t).update(r).digest();eE.create=(e,t)=>new ev(e,t);/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */let ex=BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),eA=BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),ek=BigInt(1),eB=BigInt(2),eU=(e,t)=>(e+t/eB)/t;function eI(e){let t=BigInt(3),r=BigInt(6),n=BigInt(11),i=BigInt(22),o=BigInt(23),a=BigInt(44),s=BigInt(88),l=e*e*e%ex,u=l*l*e%ex,c=es(u,t,ex)*u%ex,h=es(c,t,ex)*u%ex,f=es(h,eB,ex)*l%ex,d=es(f,n,ex)*f%ex,p=es(d,i,ex)*d%ex,g=es(p,a,ex)*p%ex,y=es(g,s,ex)*g%ex,b=es(y,a,ex)*p%ex,w=es(b,t,ex)*u%ex,m=es(w,o,ex)*d%ex,v=es(m,r,ex)*l%ex,E=es(v,eB,ex);if(!eS.eql(eS.sqr(E),e))throw Error("Cannot find square root");return E}let eS=function(e,t,r=!1,n={}){if(e<=X)throw Error(`Expected Fp ORDER > 0, got ${e}`);let{nBitLength:i,nByteLength:o}=ec(e,t);if(o>2048)throw Error("Field lengths over 2048 bytes are not supported");let a=function(e){if(e%en===er){let t=(e+ee)/en;return function(e,r){let n=e.pow(r,t);if(!e.eql(e.sqr(n),r))throw Error("Cannot find square root");return n}}if(e%eo===ei){let t=(e-ei)/eo;return function(e,r){let n=e.mul(r,et),i=e.pow(n,t),o=e.mul(r,i),a=e.mul(e.mul(o,et),i),s=e.mul(o,e.sub(a,e.ONE));if(!e.eql(e.sqr(s),r))throw Error("Cannot find square root");return s}}return function(e){let t,r,n;let i=(e-ee)/et;for(t=e-ee,r=0;t%et===X;t/=et,r++);for(n=et;n<e&&function(e,t,r){if(r<=X||t<X)throw Error("Expected power/modulo > 0");if(r===ee)return X;let n=ee;for(;t>X;)t&ee&&(n=n*e%r),e=e*e%r,t>>=ee;return n}(n,i,e)!==e-ee;n++);if(1===r){let t=(e+ee)/en;return function(e,r){let n=e.pow(r,t);if(!e.eql(e.sqr(n),r))throw Error("Cannot find square root");return n}}let o=(t+ee)/et;return function(e,a){if(e.pow(a,i)===e.neg(e.ONE))throw Error("Cannot find square root");let s=r,l=e.pow(e.mul(e.ONE,n),t),u=e.pow(a,o),c=e.pow(a,t);for(;!e.eql(c,e.ONE);){if(e.eql(c,e.ZERO))return e.ZERO;let t=1;for(let r=e.sqr(c);t<s&&!e.eql(r,e.ONE);t++)r=e.sqr(r);let r=e.pow(l,ee<<BigInt(s-t-1));l=e.sqr(r),u=e.mul(u,r),c=e.mul(c,l),s=t}return u}}(e)}(e),s=Object.freeze({ORDER:e,BITS:i,BYTES:o,MASK:Z(i),ZERO:X,ONE:ee,create:t=>ea(t,e),isValid:t=>{if("bigint"!=typeof t)throw Error(`Invalid field element: expected bigint, got ${typeof t}`);return X<=t&&t<e},is0:e=>e===X,isOdd:e=>(e&ee)===ee,neg:t=>ea(-t,e),eql:(e,t)=>e===t,sqr:t=>ea(t*t,e),add:(t,r)=>ea(t+r,e),sub:(t,r)=>ea(t-r,e),mul:(t,r)=>ea(t*r,e),pow:(e,t)=>(function(e,t,r){if(r<X)throw Error("Expected power > 0");if(r===X)return e.ONE;if(r===ee)return t;let n=e.ONE,i=t;for(;r>X;)r&ee&&(n=e.mul(n,i)),i=e.sqr(i),r>>=ee;return n})(s,e,t),div:(t,r)=>ea(t*el(r,e),e),sqrN:e=>e*e,addN:(e,t)=>e+t,subN:(e,t)=>e-t,mulN:(e,t)=>e*t,inv:t=>el(t,e),sqrt:n.sqrt||(e=>a(s,e)),invertBatch:e=>(function(e,t){let r=Array(t.length),n=t.reduce((t,n,i)=>e.is0(n)?t:(r[i]=t,e.mul(t,n)),e.ONE),i=e.inv(n);return t.reduceRight((t,n,i)=>e.is0(n)?t:(r[i]=e.mul(t,r[i]),e.mul(t,n)),i),r})(s,e),cmov:(e,t,r)=>r?t:e,toBytes:e=>r?M(e,o):D(e,o),fromBytes:e=>{if(e.length!==o)throw Error(`Fp.fromBytes: expected ${o}, got ${e.length}`);return r?P(e):T(e)}});return Object.freeze(s)}(ex,void 0,void 0,{sqrt:eI}),eL=function(e,t){let r=t=>(function(e){let t=function(e){let t=ed(e);return Q(t,{hash:"hash",hmac:"function",randomBytes:"function"},{bits2int:"function",bits2int_modN:"function",lowS:"boolean"}),Object.freeze({lowS:!0,...t})}(e),{Fp:r,n:n}=t,i=r.BYTES+1,o=2*r.BYTES+1;function a(e){return ea(e,n)}let{ProjectivePoint:s,normPrivateKeyToScalar:l,weierstrassEquation:u,isWithinCurveOrder:c}=function(e){let t=/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */function(e){let t=ed(e);Q(t,{a:"field",b:"field"},{allowedPrivateKeyLengths:"array",wrapPrivateKey:"boolean",isTorsionFree:"function",clearCofactor:"function",allowInfinityPoint:"boolean",fromBytes:"function",toBytes:"function"});let{endo:r,Fp:n,a:i}=t;if(r){if(!n.eql(i,n.ZERO))throw Error("Endomorphism can only be defined for Koblitz curves that have a=0");if("object"!=typeof r||"bigint"!=typeof r.beta||"function"!=typeof r.splitScalar)throw Error("Expected endomorphism with beta: bigint and splitScalar: function")}return Object.freeze({...t})}(e),{Fp:r}=t,n=t.toBytes||((e,t,n)=>{let i=t.toAffine();return V(Uint8Array.from([4]),r.toBytes(i.x),r.toBytes(i.y))}),i=t.fromBytes||(e=>{let t=e.subarray(1);return{x:r.fromBytes(t.subarray(0,r.BYTES)),y:r.fromBytes(t.subarray(r.BYTES,2*r.BYTES))}});function o(e){let{a:n,b:i}=t,o=r.sqr(e),a=r.mul(o,e);return r.add(r.add(a,r.mul(e,n)),i)}if(!r.eql(r.sqr(t.Gy),o(t.Gx)))throw Error("bad generator point: equation left != right");function a(e){return"bigint"==typeof e&&eb<e&&e<t.n}function s(e){if(!a(e))throw Error("Expected valid bigint: 0 < bigint < curve.n")}function l(e){let r;let{allowedPrivateKeyLengths:n,nByteLength:i,wrapPrivateKey:o,n:a}=t;if(n&&"bigint"!=typeof e){if(e instanceof Uint8Array&&(e=K(e)),"string"!=typeof e||!n.includes(e.length))throw Error("Invalid key");e=e.padStart(2*i,"0")}try{r="bigint"==typeof e?e:T(F("private key",e,i))}catch(t){throw Error(`private key must be ${i} bytes, hex or bigint, not ${typeof e}`)}return o&&(r=ea(r,a)),s(r),r}let u=new Map;function c(e){if(!(e instanceof h))throw Error("ProjectivePoint expected")}class h{constructor(e,t,n){if(this.px=e,this.py=t,this.pz=n,null==e||!r.isValid(e))throw Error("x required");if(null==t||!r.isValid(t))throw Error("y required");if(null==n||!r.isValid(n))throw Error("z required")}static fromAffine(e){let{x:t,y:n}=e||{};if(!e||!r.isValid(t)||!r.isValid(n))throw Error("invalid affine point");if(e instanceof h)throw Error("projective point not allowed");let i=e=>r.eql(e,r.ZERO);return i(t)&&i(n)?h.ZERO:new h(t,n,r.ONE)}get x(){return this.toAffine().x}get y(){return this.toAffine().y}static normalizeZ(e){let t=r.invertBatch(e.map(e=>e.pz));return e.map((e,r)=>e.toAffine(t[r])).map(h.fromAffine)}static fromHex(e){let t=h.fromAffine(i(F("pointHex",e)));return t.assertValidity(),t}static fromPrivateKey(e){return h.BASE.multiply(l(e))}_setWindowSize(e){this._WINDOW_SIZE=e,u.delete(this)}assertValidity(){if(this.is0()){if(t.allowInfinityPoint)return;throw Error("bad point: ZERO")}let{x:e,y:n}=this.toAffine();if(!r.isValid(e)||!r.isValid(n))throw Error("bad point: x or y not FE");let i=r.sqr(n),a=o(e);if(!r.eql(i,a))throw Error("bad point: equation left != right");if(!this.isTorsionFree())throw Error("bad point: not in prime-order subgroup")}hasEvenY(){let{y:e}=this.toAffine();if(r.isOdd)return!r.isOdd(e);throw Error("Field doesn't support isOdd")}equals(e){c(e);let{px:t,py:n,pz:i}=this,{px:o,py:a,pz:s}=e,l=r.eql(r.mul(t,s),r.mul(o,i)),u=r.eql(r.mul(n,s),r.mul(a,i));return l&&u}negate(){return new h(this.px,r.neg(this.py),this.pz)}double(){let{a:e,b:n}=t,i=r.mul(n,em),{px:o,py:a,pz:s}=this,l=r.ZERO,u=r.ZERO,c=r.ZERO,f=r.mul(o,o),d=r.mul(a,a),p=r.mul(s,s),g=r.mul(o,a);return g=r.add(g,g),c=r.mul(o,s),c=r.add(c,c),l=r.mul(e,c),u=r.mul(i,p),u=r.add(l,u),l=r.sub(d,u),u=r.add(d,u),u=r.mul(l,u),l=r.mul(g,l),c=r.mul(i,c),p=r.mul(e,p),g=r.sub(f,p),g=r.mul(e,g),g=r.add(g,c),c=r.add(f,f),f=r.add(c,f),f=r.add(f,p),f=r.mul(f,g),u=r.add(u,f),p=r.mul(a,s),p=r.add(p,p),f=r.mul(p,g),l=r.sub(l,f),c=r.mul(p,d),c=r.add(c,c),new h(l,u,c=r.add(c,c))}add(e){c(e);let{px:n,py:i,pz:o}=this,{px:a,py:s,pz:l}=e,u=r.ZERO,f=r.ZERO,d=r.ZERO,p=t.a,g=r.mul(t.b,em),y=r.mul(n,a),b=r.mul(i,s),w=r.mul(o,l),m=r.add(n,i),v=r.add(a,s);m=r.mul(m,v),v=r.add(y,b),m=r.sub(m,v),v=r.add(n,o);let E=r.add(a,l);return v=r.mul(v,E),E=r.add(y,w),v=r.sub(v,E),E=r.add(i,o),u=r.add(s,l),E=r.mul(E,u),u=r.add(b,w),E=r.sub(E,u),d=r.mul(p,v),u=r.mul(g,w),d=r.add(u,d),u=r.sub(b,d),d=r.add(b,d),f=r.mul(u,d),b=r.add(y,y),b=r.add(b,y),w=r.mul(p,w),v=r.mul(g,v),b=r.add(b,w),w=r.sub(y,w),w=r.mul(p,w),v=r.add(v,w),y=r.mul(b,v),f=r.add(f,y),y=r.mul(E,v),u=r.mul(m,u),u=r.sub(u,y),y=r.mul(m,b),d=r.mul(E,d),new h(u,f,d=r.add(d,y))}subtract(e){return this.add(e.negate())}is0(){return this.equals(h.ZERO)}wNAF(e){return d.wNAFCached(this,u,e,e=>{let t=r.invertBatch(e.map(e=>e.pz));return e.map((e,r)=>e.toAffine(t[r])).map(h.fromAffine)})}multiplyUnsafe(e){let n=h.ZERO;if(e===eb)return n;if(s(e),e===ew)return this;let{endo:i}=t;if(!i)return d.unsafeLadder(this,e);let{k1neg:o,k1:a,k2neg:l,k2:u}=i.splitScalar(e),c=n,f=n,p=this;for(;a>eb||u>eb;)a&ew&&(c=c.add(p)),u&ew&&(f=f.add(p)),p=p.double(),a>>=ew,u>>=ew;return o&&(c=c.negate()),l&&(f=f.negate()),f=new h(r.mul(f.px,i.beta),f.py,f.pz),c.add(f)}multiply(e){let n,i;s(e);let{endo:o}=t;if(o){let{k1neg:t,k1:a,k2neg:s,k2:l}=o.splitScalar(e),{p:u,f:c}=this.wNAF(a),{p:f,f:p}=this.wNAF(l);u=d.constTimeNegate(t,u),f=d.constTimeNegate(s,f),f=new h(r.mul(f.px,o.beta),f.py,f.pz),n=u.add(f),i=c.add(p)}else{let{p:t,f:r}=this.wNAF(e);n=t,i=r}return h.normalizeZ([n,i])[0]}multiplyAndAddUnsafe(e,t,r){let n=h.BASE,i=(e,t)=>t!==eb&&t!==ew&&e.equals(n)?e.multiply(t):e.multiplyUnsafe(t),o=i(this,t).add(i(e,r));return o.is0()?void 0:o}toAffine(e){let{px:t,py:n,pz:i}=this,o=this.is0();null==e&&(e=o?r.ONE:r.inv(i));let a=r.mul(t,e),s=r.mul(n,e),l=r.mul(i,e);if(o)return{x:r.ZERO,y:r.ZERO};if(!r.eql(l,r.ONE))throw Error("invZ was invalid");return{x:a,y:s}}isTorsionFree(){let{h:e,isTorsionFree:r}=t;if(e===ew)return!0;if(r)return r(h,this);throw Error("isTorsionFree() has not been declared for the elliptic curve")}clearCofactor(){let{h:e,clearCofactor:r}=t;return e===ew?this:r?r(h,this):this.multiplyUnsafe(t.h)}toRawBytes(e=!0){return this.assertValidity(),n(h,this,e)}toHex(e=!0){return K(this.toRawBytes(e))}}h.BASE=new h(t.Gx,t.Gy,r.ONE),h.ZERO=new h(r.ZERO,r.ONE,r.ZERO);let f=t.nBitLength,d=function(e,t){let r=(e,t)=>{let r=t.negate();return e?r:t},n=e=>({windows:Math.ceil(t/e)+1,windowSize:2**(e-1)});return{constTimeNegate:r,unsafeLadder(t,r){let n=e.ZERO,i=t;for(;r>eh;)r&ef&&(n=n.add(i)),i=i.double(),r>>=ef;return n},precomputeWindow(e,t){let{windows:r,windowSize:i}=n(t),o=[],a=e,s=a;for(let e=0;e<r;e++){s=a,o.push(s);for(let e=1;e<i;e++)s=s.add(a),o.push(s);a=s.double()}return o},wNAF(t,i,o){let{windows:a,windowSize:s}=n(t),l=e.ZERO,u=e.BASE,c=BigInt(2**t-1),h=2**t,f=BigInt(t);for(let e=0;e<a;e++){let t=e*s,n=Number(o&c);o>>=f,n>s&&(n-=h,o+=ef);let a=t+Math.abs(n)-1,d=e%2!=0,p=n<0;0===n?u=u.add(r(d,i[t])):l=l.add(r(p,i[a]))}return{p:l,f:u}},wNAFCached(e,t,r,n){let i=e._WINDOW_SIZE||1,o=t.get(e);return o||(o=this.precomputeWindow(e,i),1!==i&&t.set(e,n(o))),this.wNAF(i,o,r)}}}(h,t.endo?Math.ceil(f/2):f);return{CURVE:t,ProjectivePoint:h,normPrivateKeyToScalar:l,weierstrassEquation:o,isWithinCurveOrder:a}}({...t,toBytes(e,t,n){let i=t.toAffine(),o=r.toBytes(i.x),a=V;return n?a(Uint8Array.from([t.hasEvenY()?2:3]),o):a(Uint8Array.from([4]),o,r.toBytes(i.y))},fromBytes(e){let t=e.length,n=e[0],a=e.subarray(1);if(t===i&&(2===n||3===n)){let e=T(a);if(!(eb<e&&e<r.ORDER))throw Error("Point is not on curve");let t=u(e),i=r.sqrt(t);return(1&n)==1!=((i&ew)===ew)&&(i=r.neg(i)),{x:e,y:i}}if(t===o&&4===n)return{x:r.fromBytes(a.subarray(0,r.BYTES)),y:r.fromBytes(a.subarray(r.BYTES,2*r.BYTES))};throw Error(`Point of length ${t} was invalid. Expected ${i} compressed bytes or ${o} uncompressed bytes`)}}),h=e=>K(D(e,t.nByteLength)),f=(e,t,r)=>T(e.slice(t,r));class d{constructor(e,t,r){this.r=e,this.s=t,this.recovery=r,this.assertValidity()}static fromCompact(e){let r=t.nByteLength;return new d(f(e=F("compactSignature",e,2*r),0,r),f(e,r,2*r))}static fromDER(e){let{r:t,s:r}=ey.toSig(F("DER",e));return new d(t,r)}assertValidity(){if(!c(this.r))throw Error("r must be 0 < r < CURVE.n");if(!c(this.s))throw Error("s must be 0 < s < CURVE.n")}addRecoveryBit(e){return new d(this.r,this.s,e)}recoverPublicKey(e){let{r:i,s:o,recovery:l}=this,u=y(F("msgHash",e));if(null==l||![0,1,2,3].includes(l))throw Error("recovery id invalid");let c=2===l||3===l?i+t.n:i;if(c>=r.ORDER)throw Error("recovery id 2 or 3 invalid");let f=(1&l)==0?"02":"03",d=s.fromHex(f+h(c)),p=el(c,n),g=a(-u*p),b=a(o*p),w=s.BASE.multiplyAndAddUnsafe(d,g,b);if(!w)throw Error("point at infinify");return w.assertValidity(),w}hasHighS(){return this.s>n>>ew}normalizeS(){return this.hasHighS()?new d(this.r,a(-this.s),this.recovery):this}toDERRawBytes(){return q(this.toDERHex())}toDERHex(){return ey.hexFromSig({r:this.r,s:this.s})}toCompactRawBytes(){return q(this.toCompactHex())}toCompactHex(){return h(this.r)+h(this.s)}}function p(e){let t=e instanceof Uint8Array,r="string"==typeof e,n=(t||r)&&e.length;return t?n===i||n===o:r?n===2*i||n===2*o:e instanceof s}let g=t.bits2int||function(e){let r=T(e),n=8*e.length-t.nBitLength;return n>0?r>>BigInt(n):r},y=t.bits2int_modN||function(e){return a(g(e))},b=Z(t.nBitLength);function w(e){if("bigint"!=typeof e)throw Error("bigint expected");if(!(eb<=e&&e<b))throw Error(`bigint expected < 2^${t.nBitLength}`);return D(e,t.nByteLength)}let m={lowS:t.lowS,prehash:!1},v={lowS:t.lowS,prehash:!1};return s.BASE._setWindowSize(8),{CURVE:t,getPublicKey:function(e,t=!0){return s.fromPrivateKey(e).toRawBytes(t)},getSharedSecret:function(e,t,r=!0){if(p(e))throw Error("first arg must be private key");if(!p(t))throw Error("second arg must be public key");return s.fromHex(t).multiply(l(e)).toRawBytes(r)},sign:function(e,i,o=m){let{seed:u,k2sig:h}=function(e,i,o=m){if(["recovered","canonical"].some(e=>e in o))throw Error("sign() legacy options not supported");let{hash:u,randomBytes:h}=t,{lowS:f,prehash:p,extraEntropy:b}=o;null==f&&(f=!0),e=F("msgHash",e),p&&(e=F("prehashed msgHash",u(e)));let v=y(e),E=l(i),x=[w(E),w(v)];if(null!=b){let e=!0===b?h(r.BYTES):b;x.push(F("extraEntropy",e,r.BYTES))}return{seed:V(...x),k2sig:function(e){let t=g(e);if(!c(t))return;let r=el(t,n),i=s.BASE.multiply(t).toAffine(),o=a(i.x);if(o===eb)return;let l=a(r*a(v+o*E));if(l===eb)return;let u=(i.x===o?0:2)|Number(i.y&ew),h=l;if(f&&l>n>>ew)h=l>n>>ew?a(-l):l,u^=1;return new d(o,h,u)}}}(e,i,o);return J(t.hash.outputLen,t.nByteLength,t.hmac)(u,h)},verify:function(e,r,i,o=v){let l,u;if(r=F("msgHash",r),i=F("publicKey",i),"strict"in o)throw Error("options.strict was renamed to lowS");let{lowS:c,prehash:h}=o;try{if("string"==typeof e||e instanceof Uint8Array)try{u=d.fromDER(e)}catch(t){if(!(t instanceof ey.Err))throw t;u=d.fromCompact(e)}else if("object"==typeof e&&"bigint"==typeof e.r&&"bigint"==typeof e.s){let{r:t,s:r}=e;u=new d(t,r)}else throw Error("PARSE");l=s.fromHex(i)}catch(e){if("PARSE"===e.message)throw Error("signature must be Signature instance, Uint8Array or hex string");return!1}if(c&&u.hasHighS())return!1;h&&(r=t.hash(r));let{r:f,s:p}=u,g=y(r),b=el(p,n),w=a(g*b),m=a(f*b),E=s.BASE.multiplyAndAddUnsafe(l,w,m)?.toAffine();return!!E&&a(E.x)===f},ProjectivePoint:s,Signature:d,utils:{isValidPrivateKey(e){try{return l(e),!0}catch(e){return!1}},normPrivateKeyToScalar:l,randomPrivateKey:()=>D(function(e,t,r=!1){let n=(e=F("privateHash",e)).length,i=ec(t).nByteLength+8;if(i<24||n<i||n>1024)throw Error(`hashToPrivateScalar: expected ${i}-1024 bytes of input, got ${n}`);return ea(r?P(e):T(e),t-ee)+ee}(t.randomBytes(r.BYTES+8),n),t.nByteLength),precompute:(e=8,t=s.BASE)=>(t._setWindowSize(e),t.multiply(BigInt(3)),t)}}})({...e,hash:t,hmac:(e,...r)=>eE(t,e,E(...r)),randomBytes:k});return Object.freeze({...r(t),create:r})}({a:BigInt(0),b:BigInt(7),Fp:eS,n:eA,Gx:BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),Gy:BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),h:BigInt(1),lowS:!0,endo:{beta:BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),splitScalar:e=>{let t=BigInt("0x3086d221a7d46bcde86c90e49284eb15"),r=-ek*BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),n=BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),i=BigInt("0x100000000000000000000000000000000"),o=eU(t*e,eA),a=eU(-r*e,eA),s=ea(e-o*t-a*n,eA),l=ea(-o*r-a*t,eA),u=s>i,c=l>i;if(u&&(s=eA-s),c&&(l=eA-l),s>i||l>i)throw Error("splitScalar: Endomorphism failed, k="+e);return{k1neg:u,k1:s,k2neg:c,k2:l}}}},C),eH=BigInt(0),e$=e=>"bigint"==typeof e&&eH<e&&e<ex,e_=e=>"bigint"==typeof e&&eH<e&&e<eA,eC={};function eR(e,...t){let r=eC[e];if(void 0===r){let t=C(Uint8Array.from(e,e=>e.charCodeAt(0)));r=V(t,t),eC[e]=r}return C(V(r,...t))}let eO=e=>e.toRawBytes(!0).slice(1),eN=e=>D(e,32),ej=e=>ea(e,ex),eK=e=>ea(e,eA),ez=eL.ProjectivePoint,eq=(e,t,r)=>ez.BASE.multiplyAndAddUnsafe(e,t,r);function eT(e){let t=eL.utils.normPrivateKeyToScalar(e),r=ez.fromPrivateKey(t);return{scalar:r.hasEvenY()?t:eK(-t),bytes:eO(r)}}function eP(e){if(!e$(e))throw Error("bad x: need 0 < x < p");let t=ej(e*e),r=eI(ej(t*e+BigInt(7)));r%eB!==eH&&(r=ej(-r));let n=new ez(e,r,ek);return n.assertValidity(),n}function eD(...e){return eK(T(eR("BIP0340/challenge",...e)))}function eM(e,t,r){let n=F("signature",e,64),i=F("message",t),o=F("publicKey",r,32);try{let e=eP(T(o)),t=T(n.subarray(0,32));if(!e$(t))return!1;let r=T(n.subarray(32,64));if(!e_(r))return!1;let a=eD(eN(t),eO(e),i),s=eq(e,r,eK(-a));if(!s||!s.hasEvenY()||s.toAffine().x!==t)return!1;return!0}catch(e){return!1}}let eF={getPublicKey:function(e){return eT(e).bytes},sign:function(e,t,r=k(32)){let n=F("message",e),{bytes:i,scalar:o}=eT(t),a=eN(o^T(eR("BIP0340/aux",F("auxRand",r,32)))),s=eK(T(eR("BIP0340/nonce",a,i,n)));if(s===eH)throw Error("sign failed: k is zero");let{bytes:l,scalar:u}=eT(s),c=eD(l,i,n),h=new Uint8Array(64);if(h.set(l,0),h.set(eN(eK(u+c*o)),32),!eM(h,n,i))throw Error("sign: Invalid signature produced");return h},verify:eM,utils:{randomPrivateKey:eL.utils.randomPrivateKey,lift_x:eP,pointToBytes:eO,numberToBytesBE:D,bytesToNumberBE:T,taggedHash:eR,mod:ea}};/*! scure-base - MIT License (c) 2022 Paul Miller (paulmillr.com) */function eV(e){if(!Number.isSafeInteger(e))throw Error(`Wrong integer: ${e}`)}function eZ(...e){let t=(e,t)=>r=>e(t(r));return{encode:Array.from(e).reverse().reduce((e,r)=>e?t(e,r.encode):r.encode,void 0),decode:e.reduce((e,r)=>e?t(e,r.decode):r.decode,void 0)}}function eG(e){return{encode:t=>{if(!Array.isArray(t)||t.length&&"number"!=typeof t[0])throw Error("alphabet.encode input should be an array of numbers");return t.map(t=>{if(eV(t),t<0||t>=e.length)throw Error(`Digit index outside alphabet: ${t} (alphabet: ${e.length})`);return e[t]})},decode:t=>{if(!Array.isArray(t)||t.length&&"string"!=typeof t[0])throw Error("alphabet.decode input should be array of strings");return t.map(t=>{if("string"!=typeof t)throw Error(`alphabet.decode: not string element=${t}`);let r=e.indexOf(t);if(-1===r)throw Error(`Unknown letter: "${t}". Allowed: ${e}`);return r})}}}function eW(e=""){if("string"!=typeof e)throw Error("join separator should be string");return{encode:t=>{if(!Array.isArray(t)||t.length&&"string"!=typeof t[0])throw Error("join.encode input should be array of strings");for(let e of t)if("string"!=typeof e)throw Error(`join.encode: non-string input=${e}`);return t.join(e)},decode:t=>{if("string"!=typeof t)throw Error("join.decode input should be string");return t.split(e)}}}function eJ(e,t="="){if(eV(e),"string"!=typeof t)throw Error("padding chr should be string");return{encode(r){if(!Array.isArray(r)||r.length&&"string"!=typeof r[0])throw Error("padding.encode input should be array of strings");for(let e of r)if("string"!=typeof e)throw Error(`padding.encode: non-string input=${e}`);for(;r.length*e%8;)r.push(t);return r},decode(r){if(!Array.isArray(r)||r.length&&"string"!=typeof r[0])throw Error("padding.encode input should be array of strings");for(let e of r)if("string"!=typeof e)throw Error(`padding.decode: non-string input=${e}`);let n=r.length;if(n*e%8)throw Error("Invalid padding: string should have whole number of bytes");for(;n>0&&r[n-1]===t;n--)if(!((n-1)*e%8))throw Error("Invalid padding: string has too much padding");return r.slice(0,n)}}}function eY(e){if("function"!=typeof e)throw Error("normalize fn should be function");return{encode:e=>e,decode:t=>e(t)}}function eQ(e,t,r){if(t<2)throw Error(`convertRadix: wrong from=${t}, base cannot be less than 2`);if(r<2)throw Error(`convertRadix: wrong to=${r}, base cannot be less than 2`);if(!Array.isArray(e))throw Error("convertRadix: data should be array");if(!e.length)return[];let n=0,i=[],o=Array.from(e);for(o.forEach(e=>{if(eV(e),e<0||e>=t)throw Error(`Wrong integer: ${e}`)});;){let e=0,a=!0;for(let i=n;i<o.length;i++){let s=o[i],l=t*e+s;if(!Number.isSafeInteger(l)||t*e/t!==e||l-s!=t*e||(e=l%r,o[i]=Math.floor(l/r),!Number.isSafeInteger(o[i])||o[i]*r+e!==l))throw Error("convertRadix: carry overflow");a&&(o[i]?a=!1:n=i)}if(i.push(e),a)break}for(let t=0;t<e.length-1&&0===e[t];t++)i.push(0);return i.reverse()}let eX=(e,t)=>t?eX(t,e%t):e,e0=(e,t)=>e+(t-eX(e,t));function e1(e,t,r,n){if(!Array.isArray(e))throw Error("convertRadix2: data should be array");if(t<=0||t>32)throw Error(`convertRadix2: wrong from=${t}`);if(r<=0||r>32)throw Error(`convertRadix2: wrong to=${r}`);if(e0(t,r)>32)throw Error(`convertRadix2: carry overflow from=${t} to=${r} carryBits=${e0(t,r)}`);let i=0,o=0,a=2**r-1,s=[];for(let n of e){if(eV(n),n>=2**t)throw Error(`convertRadix2: invalid data word=${n} from=${t}`);if(i=i<<t|n,o+t>32)throw Error(`convertRadix2: carry overflow pos=${o} from=${t}`);for(o+=t;o>=r;o-=r)s.push((i>>o-r&a)>>>0);i&=2**o-1}if(i=i<<r-o&a,!n&&o>=t)throw Error("Excess padding");if(!n&&i)throw Error(`Non-zero padding: ${i}`);return n&&o>0&&s.push(i>>>0),s}function e2(e,t=!1){if(eV(e),e<=0||e>32)throw Error("radix2: bits should be in (0..32]");if(e0(8,e)>32||e0(e,8)>32)throw Error("radix2: carry overflow");return{encode:r=>{if(!(r instanceof Uint8Array))throw Error("radix2.encode input should be Uint8Array");return e1(Array.from(r),8,e,!t)},decode:r=>{if(!Array.isArray(r)||r.length&&"number"!=typeof r[0])throw Error("radix2.decode input should be array of strings");return Uint8Array.from(e1(r,e,8,t))}}}function e3(e){if("function"!=typeof e)throw Error("unsafeWrapper fn should be function");return function(...t){try{return e.apply(null,t)}catch(e){}}}eZ(e2(4),eG("0123456789ABCDEF"),eW("")),eZ(e2(5),eG("ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"),eJ(5),eW("")),eZ(e2(5),eG("0123456789ABCDEFGHIJKLMNOPQRSTUV"),eJ(5),eW("")),eZ(e2(5),eG("0123456789ABCDEFGHJKMNPQRSTVWXYZ"),eW(""),eY(e=>e.toUpperCase().replace(/O/g,"0").replace(/[IL]/g,"1")));let e8=eZ(e2(6),eG("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"),eJ(6),eW("")),e4=(eZ(e2(6),eG("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"),eJ(6),eW("")),e=>eZ((eV(58),{encode:e=>{if(!(e instanceof Uint8Array))throw Error("radix.encode input should be Uint8Array");return eQ(Array.from(e),256,58)},decode:e=>{if(!Array.isArray(e)||e.length&&"number"!=typeof e[0])throw Error("radix.decode input should be array of strings");return Uint8Array.from(eQ(e,58,256))}}),eG(e),eW("")));e4("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"),e4("123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"),e4("rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz");let e5=eZ(eG("qpzry9x8gf2tvdw0s3jn54khce6mua7l"),eW("")),e6=[996825010,642813549,513874426,1027748829,705979059];function e7(e){let t=e>>25,r=(33554431&e)<<5;for(let e=0;e<e6.length;e++)(t>>e&1)==1&&(r^=e6[e]);return r}function e9(e,t,r=1){let n=e.length,i=1;for(let t=0;t<n;t++){let r=e.charCodeAt(t);if(r<33||r>126)throw Error(`Invalid prefix (${e})`);i=e7(i)^r>>5}i=e7(i);for(let t=0;t<n;t++)i=e7(i)^31&e.charCodeAt(t);for(let e of t)i=e7(i)^e;for(let e=0;e<6;e++)i=e7(i);return i^=r,e5.encode(e1([i%1073741824],30,5,!1))}function te(e){let t="bech32"===e?1:734539939,r=e2(5),n=r.decode,i=r.encode,o=e3(n);function a(e,r=90){if("string"!=typeof e)throw Error(`bech32.decode input should be string, not ${typeof e}`);if(e.length<8||!1!==r&&e.length>r)throw TypeError(`Wrong string length: ${e.length} (${e}). Expected (8..${r})`);let n=e.toLowerCase();if(e!==n&&e!==e.toUpperCase())throw Error("String must be lowercase or uppercase");let i=(e=n).lastIndexOf("1");if(0===i||-1===i)throw Error('Letter "1" must be present between prefix and data only');let o=e.slice(0,i),a=e.slice(i+1);if(a.length<6)throw Error("Data must be at least 6 characters long");let s=e5.decode(a).slice(0,-6),l=e9(o,s,t);if(!a.endsWith(l))throw Error(`Invalid checksum in ${e}: expected "${l}"`);return{prefix:o,words:s}}let s=e3(a);return{encode:function(e,r,n=90){if("string"!=typeof e)throw Error(`bech32.encode prefix should be string, not ${typeof e}`);if(!Array.isArray(r)||r.length&&"number"!=typeof r[0])throw Error(`bech32.encode words should be array of numbers, not ${typeof r}`);let i=e.length+7+r.length;if(!1!==n&&i>n)throw TypeError(`Length ${i} exceeds limit ${n}`);return e=e.toLowerCase(),`${e}1${e5.encode(r)}${e9(e,r,t)}`},decode:a,decodeToBytes:function(e){let{prefix:t,words:r}=a(e,!1);return{prefix:t,words:r,bytes:n(r)}},decodeUnsafe:s,fromWords:n,fromWordsUnsafe:o,toWords:i}}let tt=te("bech32");te("bech32m"),eZ(e2(4),eG("0123456789abcdef"),eW(""),eY(e=>{if("string"!=typeof e||e.length%2)throw TypeError(`hex.decode: expected string, got ${typeof e} with length ${e.length}`);return e.toLowerCase()}));let tr=`abandon
// ability
// able
// about
// above
// absent
// absorb
// abstract
// absurd
// abuse
// access
// accident
// account
// accuse
// achieve
// acid
// acoustic
// acquire
// across
// act
// action
// actor
// actress
// actual
// adapt
// add
// addict
// address
// adjust
// admit
// adult
// advance
// advice
// aerobic
// affair
// afford
// afraid
// again
// age
// agent
// agree
// ahead
// aim
// air
// airport
// aisle
// alarm
// album
// alcohol
// alert
// alien
// all
// alley
// allow
// almost
// alone
// alpha
// already
// also
// alter
// always
// amateur
// amazing
// among
// amount
// amused
// analyst
// anchor
// ancient
// anger
// angle
// angry
// animal
// ankle
// announce
// annual
// another
// answer
// antenna
// antique
// anxiety
// any
// apart
// apology
// appear
// apple
// approve
// april
// arch
// arctic
// area
// arena
// argue
// arm
// armed
// armor
// army
// around
// arrange
// arrest
// arrive
// arrow
// art
// artefact
// artist
// artwork
// ask
// aspect
// assault
// asset
// assist
// assume
// asthma
// athlete
// atom
// attack
// attend
// attitude
// attract
// auction
// audit
// august
// aunt
// author
// auto
// autumn
// average
// avocado
// avoid
// awake
// aware
// away
// awesome
// awful
// awkward
// axis
// baby
// bachelor
// bacon
// badge
// bag
// balance
// balcony
// ball
// bamboo
// banana
// banner
// bar
// barely
// bargain
// barrel
// base
// basic
// basket
// battle
// beach
// bean
// beauty
// because
// become
// beef
// before
// begin
// behave
// behind
// believe
// below
// belt
// bench
// benefit
// best
// betray
// better
// between
// beyond
// bicycle
// bid
// bike
// bind
// biology
// bird
// birth
// bitter
// black
// blade
// blame
// blanket
// blast
// bleak
// bless
// blind
// blood
// blossom
// blouse
// blue
// blur
// blush
// board
// boat
// body
// boil
// bomb
// bone
// bonus
// book
// boost
// border
// boring
// borrow
// boss
// bottom
// bounce
// box
// boy
// bracket
// brain
// brand
// brass
// brave
// bread
// breeze
// brick
// bridge
// brief
// bright
// bring
// brisk
// broccoli
// broken
// bronze
// broom
// brother
// brown
// brush
// bubble
// buddy
// budget
// buffalo
// build
// bulb
// bulk
// bullet
// bundle
// bunker
// burden
// burger
// burst
// bus
// business
// busy
// butter
// buyer
// buzz
// cabbage
// cabin
// cable
// cactus
// cage
// cake
// call
// calm
// camera
// camp
// can
// canal
// cancel
// candy
// cannon
// canoe
// canvas
// canyon
// capable
// capital
// captain
// car
// carbon
// card
// cargo
// carpet
// carry
// cart
// case
// cash
// casino
// castle
// casual
// cat
// catalog
// catch
// category
// cattle
// caught
// cause
// caution
// cave
// ceiling
// celery
// cement
// census
// century
// cereal
// certain
// chair
// chalk
// champion
// change
// chaos
// chapter
// charge
// chase
// chat
// cheap
// check
// cheese
// chef
// cherry
// chest
// chicken
// chief
// child
// chimney
// choice
// choose
// chronic
// chuckle
// chunk
// churn
// cigar
// cinnamon
// circle
// citizen
// city
// civil
// claim
// clap
// clarify
// claw
// clay
// clean
// clerk
// clever
// click
// client
// cliff
// climb
// clinic
// clip
// clock
// clog
// close
// cloth
// cloud
// clown
// club
// clump
// cluster
// clutch
// coach
// coast
// coconut
// code
// coffee
// coil
// coin
// collect
// color
// column
// combine
// come
// comfort
// comic
// common
// company
// concert
// conduct
// confirm
// congress
// connect
// consider
// control
// convince
// cook
// cool
// copper
// copy
// coral
// core
// corn
// correct
// cost
// cotton
// couch
// country
// couple
// course
// cousin
// cover
// coyote
// crack
// cradle
// craft
// cram
// crane
// crash
// crater
// crawl
// crazy
// cream
// credit
// creek
// crew
// cricket
// crime
// crisp
// critic
// crop
// cross
// crouch
// crowd
// crucial
// cruel
// cruise
// crumble
// crunch
// crush
// cry
// crystal
// cube
// culture
// cup
// cupboard
// curious
// current
// curtain
// curve
// cushion
// custom
// cute
// cycle
// dad
// damage
// damp
// dance
// danger
// daring
// dash
// daughter
// dawn
// day
// deal
// debate
// debris
// decade
// december
// decide
// decline
// decorate
// decrease
// deer
// defense
// define
// defy
// degree
// delay
// deliver
// demand
// demise
// denial
// dentist
// deny
// depart
// depend
// deposit
// depth
// deputy
// derive
// describe
// desert
// design
// desk
// despair
// destroy
// detail
// detect
// develop
// device
// devote
// diagram
// dial
// diamond
// diary
// dice
// diesel
// diet
// differ
// digital
// dignity
// dilemma
// dinner
// dinosaur
// direct
// dirt
// disagree
// discover
// disease
// dish
// dismiss
// disorder
// display
// distance
// divert
// divide
// divorce
// dizzy
// doctor
// document
// dog
// doll
// dolphin
// domain
// donate
// donkey
// donor
// door
// dose
// double
// dove
// draft
// dragon
// drama
// drastic
// draw
// dream
// dress
// drift
// drill
// drink
// drip
// drive
// drop
// drum
// dry
// duck
// dumb
// dune
// during
// dust
// dutch
// duty
// dwarf
// dynamic
// eager
// eagle
// early
// earn
// earth
// easily
// east
// easy
// echo
// ecology
// economy
// edge
// edit
// educate
// effort
// egg
// eight
// either
// elbow
// elder
// electric
// elegant
// element
// elephant
// elevator
// elite
// else
// embark
// embody
// embrace
// emerge
// emotion
// employ
// empower
// empty
// enable
// enact
// end
// endless
// endorse
// enemy
// energy
// enforce
// engage
// engine
// enhance
// enjoy
// enlist
// enough
// enrich
// enroll
// ensure
// enter
// entire
// entry
// envelope
// episode
// equal
// equip
// era
// erase
// erode
// erosion
// error
// erupt
// escape
// essay
// essence
// estate
// eternal
// ethics
// evidence
// evil
// evoke
// evolve
// exact
// example
// excess
// exchange
// excite
// exclude
// excuse
// execute
// exercise
// exhaust
// exhibit
// exile
// exist
// exit
// exotic
// expand
// expect
// expire
// explain
// expose
// express
// extend
// extra
// eye
// eyebrow
// fabric
// face
// faculty
// fade
// faint
// faith
// fall
// false
// fame
// family
// famous
// fan
// fancy
// fantasy
// farm
// fashion
// fat
// fatal
// father
// fatigue
// fault
// favorite
// feature
// february
// federal
// fee
// feed
// feel
// female
// fence
// festival
// fetch
// fever
// few
// fiber
// fiction
// field
// figure
// file
// film
// filter
// final
// find
// fine
// finger
// finish
// fire
// firm
// first
// fiscal
// fish
// fit
// fitness
// fix
// flag
// flame
// flash
// flat
// flavor
// flee
// flight
// flip
// float
// flock
// floor
// flower
// fluid
// flush
// fly
// foam
// focus
// fog
// foil
// fold
// follow
// food
// foot
// force
// forest
// forget
// fork
// fortune
// forum
// forward
// fossil
// foster
// found
// fox
// fragile
// frame
// frequent
// fresh
// friend
// fringe
// frog
// front
// frost
// frown
// frozen
// fruit
// fuel
// fun
// funny
// furnace
// fury
// future
// gadget
// gain
// galaxy
// gallery
// game
// gap
// garage
// garbage
// garden
// garlic
// garment
// gas
// gasp
// gate
// gather
// gauge
// gaze
// general
// genius
// genre
// gentle
// genuine
// gesture
// ghost
// giant
// gift
// giggle
// ginger
// giraffe
// girl
// give
// glad
// glance
// glare
// glass
// glide
// glimpse
// globe
// gloom
// glory
// glove
// glow
// glue
// goat
// goddess
// gold
// good
// goose
// gorilla
// gospel
// gossip
// govern
// gown
// grab
// grace
// grain
// grant
// grape
// grass
// gravity
// great
// green
// grid
// grief
// grit
// grocery
// group
// grow
// grunt
// guard
// guess
// guide
// guilt
// guitar
// gun
// gym
// habit
// hair
// half
// hammer
// hamster
// hand
// happy
// harbor
// hard
// harsh
// harvest
// hat
// have
// hawk
// hazard
// head
// health
// heart
// heavy
// hedgehog
// height
// hello
// helmet
// help
// hen
// hero
// hidden
// high
// hill
// hint
// hip
// hire
// history
// hobby
// hockey
// hold
// hole
// holiday
// hollow
// home
// honey
// hood
// hope
// horn
// horror
// horse
// hospital
// host
// hotel
// hour
// hover
// hub
// huge
// human
// humble
// humor
// hundred
// hungry
// hunt
// hurdle
// hurry
// hurt
// husband
// hybrid
// ice
// icon
// idea
// identify
// idle
// ignore
// ill
// illegal
// illness
// image
// imitate
// immense
// immune
// impact
// impose
// improve
// impulse
// inch
// include
// income
// increase
// index
// indicate
// indoor
// industry
// infant
// inflict
// inform
// inhale
// inherit
// initial
// inject
// injury
// inmate
// inner
// innocent
// input
// inquiry
// insane
// insect
// inside
// inspire
// install
// intact
// interest
// into
// invest
// invite
// involve
// iron
// island
// isolate
// issue
// item
// ivory
// jacket
// jaguar
// jar
// jazz
// jealous
// jeans
// jelly
// jewel
// job
// join
// joke
// journey
// joy
// judge
// juice
// jump
// jungle
// junior
// junk
// just
// kangaroo
// keen
// keep
// ketchup
// key
// kick
// kid
// kidney
// kind
// kingdom
// kiss
// kit
// kitchen
// kite
// kitten
// kiwi
// knee
// knife
// knock
// know
// lab
// label
// labor
// ladder
// lady
// lake
// lamp
// language
// laptop
// large
// later
// latin
// laugh
// laundry
// lava
// law
// lawn
// lawsuit
// layer
// lazy
// leader
// leaf
// learn
// leave
// lecture
// left
// leg
// legal
// legend
// leisure
// lemon
// lend
// length
// lens
// leopard
// lesson
// letter
// level
// liar
// liberty
// library
// license
// life
// lift
// light
// like
// limb
// limit
// link
// lion
// liquid
// list
// little
// live
// lizard
// load
// loan
// lobster
// local
// lock
// logic
// lonely
// long
// loop
// lottery
// loud
// lounge
// love
// loyal
// lucky
// luggage
// lumber
// lunar
// lunch
// luxury
// lyrics
// machine
// mad
// magic
// magnet
// maid
// mail
// main
// major
// make
// mammal
// man
// manage
// mandate
// mango
// mansion
// manual
// maple
// marble
// march
// margin
// marine
// market
// marriage
// mask
// mass
// master
// match
// material
// math
// matrix
// matter
// maximum
// maze
// meadow
// mean
// measure
// meat
// mechanic
// medal
// media
// melody
// melt
// member
// memory
// mention
// menu
// mercy
// merge
// merit
// merry
// mesh
// message
// metal
// method
// middle
// midnight
// milk
// million
// mimic
// mind
// minimum
// minor
// minute
// miracle
// mirror
// misery
// miss
// mistake
// mix
// mixed
// mixture
// mobile
// model
// modify
// mom
// moment
// monitor
// monkey
// monster
// month
// moon
// moral
// more
// morning
// mosquito
// mother
// motion
// motor
// mountain
// mouse
// move
// movie
// much
// muffin
// mule
// multiply
// muscle
// museum
// mushroom
// music
// must
// mutual
// myself
// mystery
// myth
// naive
// name
// napkin
// narrow
// nasty
// nation
// nature
// near
// neck
// need
// negative
// neglect
// neither
// nephew
// nerve
// nest
// net
// network
// neutral
// never
// news
// next
// nice
// night
// noble
// noise
// nominee
// noodle
// normal
// north
// nose
// notable
// note
// nothing
// notice
// novel
// now
// nuclear
// number
// nurse
// nut
// oak
// obey
// object
// oblige
// obscure
// observe
// obtain
// obvious
// occur
// ocean
// october
// odor
// off
// offer
// office
// often
// oil
// okay
// old
// olive
// olympic
// omit
// once
// one
// onion
// online
// only
// open
// opera
// opinion
// oppose
// option
// orange
// orbit
// orchard
// order
// ordinary
// organ
// orient
// original
// orphan
// ostrich
// other
// outdoor
// outer
// output
// outside
// oval
// oven
// over
// own
// owner
// oxygen
// oyster
// ozone
// pact
// paddle
// page
// pair
// palace
// palm
// panda
// panel
// panic
// panther
// paper
// parade
// parent
// park
// parrot
// party
// pass
// patch
// path
// patient
// patrol
// pattern
// pause
// pave
// payment
// peace
// peanut
// pear
// peasant
// pelican
// pen
// penalty
// pencil
// people
// pepper
// perfect
// permit
// person
// pet
// phone
// photo
// phrase
// physical
// piano
// picnic
// picture
// piece
// pig
// pigeon
// pill
// pilot
// pink
// pioneer
// pipe
// pistol
// pitch
// pizza
// place
// planet
// plastic
// plate
// play
// please
// pledge
// pluck
// plug
// plunge
// poem
// poet
// point
// polar
// pole
// police
// pond
// pony
// pool
// popular
// portion
// position
// possible
// post
// potato
// pottery
// poverty
// powder
// power
// practice
// praise
// predict
// prefer
// prepare
// present
// pretty
// prevent
// price
// pride
// primary
// print
// priority
// prison
// private
// prize
// problem
// process
// produce
// profit
// program
// project
// promote
// proof
// property
// prosper
// protect
// proud
// provide
// public
// pudding
// pull
// pulp
// pulse
// pumpkin
// punch
// pupil
// puppy
// purchase
// purity
// purpose
// purse
// push
// put
// puzzle
// pyramid
// quality
// quantum
// quarter
// question
// quick
// quit
// quiz
// quote
// rabbit
// raccoon
// race
// rack
// radar
// radio
// rail
// rain
// raise
// rally
// ramp
// ranch
// random
// range
// rapid
// rare
// rate
// rather
// raven
// raw
// razor
// ready
// real
// reason
// rebel
// rebuild
// recall
// receive
// recipe
// record
// recycle
// reduce
// reflect
// reform
// refuse
// region
// regret
// regular
// reject
// relax
// release
// relief
// rely
// remain
// remember
// remind
// remove
// render
// renew
// rent
// reopen
// repair
// repeat
// replace
// report
// require
// rescue
// resemble
// resist
// resource
// response
// result
// retire
// retreat
// return
// reunion
// reveal
// review
// reward
// rhythm
// rib
// ribbon
// rice
// rich
// ride
// ridge
// rifle
// right
// rigid
// ring
// riot
// ripple
// risk
// ritual
// rival
// river
// road
// roast
// robot
// robust
// rocket
// romance
// roof
// rookie
// room
// rose
// rotate
// rough
// round
// route
// royal
// rubber
// rude
// rug
// rule
// run
// runway
// rural
// sad
// saddle
// sadness
// safe
// sail
// salad
// salmon
// salon
// salt
// salute
// same
// sample
// sand
// satisfy
// satoshi
// sauce
// sausage
// save
// say
// scale
// scan
// scare
// scatter
// scene
// scheme
// school
// science
// scissors
// scorpion
// scout
// scrap
// screen
// script
// scrub
// sea
// search
// season
// seat
// second
// secret
// section
// security
// seed
// seek
// segment
// select
// sell
// seminar
// senior
// sense
// sentence
// series
// service
// session
// settle
// setup
// seven
// shadow
// shaft
// shallow
// share
// shed
// shell
// sheriff
// shield
// shift
// shine
// ship
// shiver
// shock
// shoe
// shoot
// shop
// short
// shoulder
// shove
// shrimp
// shrug
// shuffle
// shy
// sibling
// sick
// side
// siege
// sight
// sign
// silent
// silk
// silly
// silver
// similar
// simple
// since
// sing
// siren
// sister
// situate
// six
// size
// skate
// sketch
// ski
// skill
// skin
// skirt
// skull
// slab
// slam
// sleep
// slender
// slice
// slide
// slight
// slim
// slogan
// slot
// slow
// slush
// small
// smart
// smile
// smoke
// smooth
// snack
// snake
// snap
// sniff
// snow
// soap
// soccer
// social
// sock
// soda
// soft
// solar
// soldier
// solid
// solution
// solve
// someone
// song
// soon
// sorry
// sort
// soul
// sound
// soup
// source
// south
// space
// spare
// spatial
// spawn
// speak
// special
// speed
// spell
// spend
// sphere
// spice
// spider
// spike
// spin
// spirit
// split
// spoil
// sponsor
// spoon
// sport
// spot
// spray
// spread
// spring
// spy
// square
// squeeze
// squirrel
// stable
// stadium
// staff
// stage
// stairs
// stamp
// stand
// start
// state
// stay
// steak
// steel
// stem
// step
// stereo
// stick
// still
// sting
// stock
// stomach
// stone
// stool
// story
// stove
// strategy
// street
// strike
// strong
// struggle
// student
// stuff
// stumble
// style
// subject
// submit
// subway
// success
// such
// sudden
// suffer
// sugar
// suggest
// suit
// summer
// sun
// sunny
// sunset
// super
// supply
// supreme
// sure
// surface
// surge
// surprise
// surround
// survey
// suspect
// sustain
// swallow
// swamp
// swap
// swarm
// swear
// sweet
// swift
// swim
// swing
// switch
// sword
// symbol
// symptom
// syrup
// system
// table
// tackle
// tag
// tail
// talent
// talk
// tank
// tape
// target
// task
// taste
// tattoo
// taxi
// teach
// team
// tell
// ten
// tenant
// tennis
// tent
// term
// test
// text
// thank
// that
// theme
// then
// theory
// there
// they
// thing
// this
// thought
// three
// thrive
// throw
// thumb
// thunder
// ticket
// tide
// tiger
// tilt
// timber
// time
// tiny
// tip
// tired
// tissue
// title
// toast
// tobacco
// today
// toddler
// toe
// together
// toilet
// token
// tomato
// tomorrow
// tone
// tongue
// tonight
// tool
// tooth
// top
// topic
// topple
// torch
// tornado
// tortoise
// toss
// total
// tourist
// toward
// tower
// town
// toy
// track
// trade
// traffic
// tragic
// train
// transfer
// trap
// trash
// travel
// tray
// treat
// tree
// trend
// trial
// tribe
// trick
// trigger
// trim
// trip
// trophy
// trouble
// truck
// true
// truly
// trumpet
// trust
// truth
// try
// tube
// tuition
// tumble
// tuna
// tunnel
// turkey
// turn
// turtle
// twelve
// twenty
// twice
// twin
// twist
// two
// type
// typical
// ugly
// umbrella
// unable
// unaware
// uncle
// uncover
// under
// undo
// unfair
// unfold
// unhappy
// uniform
// unique
// unit
// universe
// unknown
// unlock
// until
// unusual
// unveil
// update
// upgrade
// uphold
// upon
// upper
// upset
// urban
// urge
// usage
// use
// used
// useful
// useless
// usual
// utility
// vacant
// vacuum
// vague
// valid
// valley
// valve
// van
// vanish
// vapor
// various
// vast
// vault
// vehicle
// velvet
// vendor
// venture
// venue
// verb
// verify
// version
// very
// vessel
// veteran
// viable
// vibrant
// vicious
// victory
// video
// view
// village
// vintage
// violin
// virtual
// virus
// visa
// visit
// visual
// vital
// vivid
// vocal
// voice
// void
// volcano
// volume
// vote
// voyage
// wage
// wagon
// wait
// walk
// wall
// walnut
// want
// warfare
// warm
// warrior
// wash
// wasp
// waste
// water
// wave
// way
// wealth
// weapon
// wear
// weasel
// weather
// web
// wedding
// weekend
// weird
// welcome
// west
// wet
// whale
// what
// wheat
// wheel
// when
// where
// whip
// whisper
// wide
// width
// wife
// wild
// will
// win
// window
// wine
// wing
// wink
// winner
// winter
// wire
// wisdom
// wise
// wish
// witness
// wolf
// woman
// wonder
// wood
// wool
// word
// work
// world
// worry
// worth
// wrap
// wreck
// wrestle
// wrist
// write
// wrong
// yard
// year
// yellow
// you
// young
// youth
// zebra
// zero
// zone
// zoo`.split("\n");function tn(e){if(!Number.isSafeInteger(e)||e<0)throw Error(`Wrong positive integer: ${e}`)}function ti(e,...t){if(!(e instanceof Uint8Array||null!=e&&"object"==typeof e&&"Uint8Array"===e.constructor.name))throw Error("Expected Uint8Array");if(t.length>0&&!t.includes(e.length))throw Error(`Expected Uint8Array of length ${t}, not of length=${e.length}`)}function to(e){if("function"!=typeof e||"function"!=typeof e.create)throw Error("Hash should be wrapped by utils.wrapConstructor");tn(e.outputLen),tn(e.blockLen)}function ta(e,t=!0){if(e.destroyed)throw Error("Hash instance has been destroyed");if(t&&e.finished)throw Error("Hash#digest() has already been called")}let ts="object"==typeof globalThis&&"crypto"in globalThis?globalThis.crypto:void 0,tl=e=>new DataView(e.buffer,e.byteOffset,e.byteLength),tu=(e,t)=>e<<32-t|e>>>t;if(68!==new Uint8Array(new Uint32Array([287454020]).buffer)[0])throw Error("Non little-endian hardware is not supported");function tc(e){var t;if("string"==typeof e&&(e=function(e){if("string"!=typeof e)throw Error(`utf8ToBytes expected string, got ${typeof e}`);return new Uint8Array(new TextEncoder().encode(e))}(e)),!((t=e)instanceof Uint8Array||null!=t&&"object"==typeof t&&"Uint8Array"===t.constructor.name))throw Error(`expected Uint8Array, got ${typeof e}`);return e}class th{clone(){return this._cloneInto()}}let tf={}.toString;function td(e){let t=t=>e().update(tc(t)).digest(),r=e();return t.outputLen=r.outputLen,t.blockLen=r.blockLen,t.create=()=>e(),t}class tp extends th{constructor(e,t){super(),this.finished=!1,this.destroyed=!1,to(e);let r=tc(t);if(this.iHash=e.create(),"function"!=typeof this.iHash.update)throw Error("Expected instance of class which extends utils.Hash");this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;let n=this.blockLen,i=new Uint8Array(n);i.set(r.length>n?e.create().update(r).digest():r);for(let e=0;e<i.length;e++)i[e]^=54;this.iHash.update(i),this.oHash=e.create();for(let e=0;e<i.length;e++)i[e]^=106;this.oHash.update(i),i.fill(0)}update(e){return ta(this),this.iHash.update(e),this}digestInto(e){ta(this),ti(e,this.outputLen),this.finished=!0,this.iHash.digestInto(e),this.oHash.update(e),this.oHash.digestInto(e),this.destroy()}digest(){let e=new Uint8Array(this.oHash.outputLen);return this.digestInto(e),e}_cloneInto(e){e||(e=Object.create(Object.getPrototypeOf(this),{}));let{oHash:t,iHash:r,finished:n,destroyed:i,blockLen:o,outputLen:a}=this;return e.finished=n,e.destroyed=i,e.blockLen=o,e.outputLen=a,e.oHash=t._cloneInto(e.oHash),e.iHash=r._cloneInto(e.iHash),e}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}}let tg=(e,t,r)=>new tp(e,t).update(r).digest();tg.create=(e,t)=>new tp(e,t);class ty extends th{constructor(e,t,r,n){super(),this.blockLen=e,this.outputLen=t,this.padOffset=r,this.isLE=n,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(e),this.view=tl(this.buffer)}update(e){ta(this);let{view:t,buffer:r,blockLen:n}=this,i=(e=tc(e)).length;for(let o=0;o<i;){let a=Math.min(n-this.pos,i-o);if(a===n){let t=tl(e);for(;n<=i-o;o+=n)this.process(t,o);continue}r.set(e.subarray(o,o+a),this.pos),this.pos+=a,o+=a,this.pos===n&&(this.process(t,0),this.pos=0)}return this.length+=e.length,this.roundClean(),this}digestInto(e){ta(this),function(e,t){ti(e);let r=t.outputLen;if(e.length<r)throw Error(`digestInto() expects output buffer of length at least ${r}`)}(e,this),this.finished=!0;let{buffer:t,view:r,blockLen:n,isLE:i}=this,{pos:o}=this;t[o++]=128,this.buffer.subarray(o).fill(0),this.padOffset>n-o&&(this.process(r,0),o=0);for(let e=o;e<n;e++)t[e]=0;!function(e,t,r,n){if("function"==typeof e.setBigUint64)return e.setBigUint64(t,r,n);let i=BigInt(32),o=BigInt(4294967295),a=Number(r>>i&o),s=Number(r&o),l=n?4:0,u=n?0:4;e.setUint32(t+l,a,n),e.setUint32(t+u,s,n)}(r,n-8,BigInt(8*this.length),i),this.process(r,0);let a=tl(e),s=this.outputLen;if(s%4)throw Error("_sha2: outputLen should be aligned to 32bit");let l=s/4,u=this.get();if(l>u.length)throw Error("_sha2: outputLen bigger than state");for(let e=0;e<l;e++)a.setUint32(4*e,u[e],i)}digest(){let{buffer:e,outputLen:t}=this;this.digestInto(e);let r=e.slice(0,t);return this.destroy(),r}_cloneInto(e){e||(e=new this.constructor),e.set(...this.get());let{blockLen:t,buffer:r,length:n,finished:i,destroyed:o,pos:a}=this;return e.length=n,e.pos=a,e.finished=i,e.destroyed=o,n%t&&e.buffer.set(r),e}}let tb=(e,t,r)=>e&t^~e&r,tw=(e,t,r)=>e&t^e&r^t&r,tm=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),tv=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),tE=new Uint32Array(64);class tx extends ty{constructor(){super(64,32,8,!1),this.A=0|tv[0],this.B=0|tv[1],this.C=0|tv[2],this.D=0|tv[3],this.E=0|tv[4],this.F=0|tv[5],this.G=0|tv[6],this.H=0|tv[7]}get(){let{A:e,B:t,C:r,D:n,E:i,F:o,G:a,H:s}=this;return[e,t,r,n,i,o,a,s]}set(e,t,r,n,i,o,a,s){this.A=0|e,this.B=0|t,this.C=0|r,this.D=0|n,this.E=0|i,this.F=0|o,this.G=0|a,this.H=0|s}process(e,t){for(let r=0;r<16;r++,t+=4)tE[r]=e.getUint32(t,!1);for(let e=16;e<64;e++){let t=tE[e-15],r=tE[e-2],n=tu(t,7)^tu(t,18)^t>>>3,i=tu(r,17)^tu(r,19)^r>>>10;tE[e]=i+tE[e-7]+n+tE[e-16]|0}let{A:r,B:n,C:i,D:o,E:a,F:s,G:l,H:u}=this;for(let e=0;e<64;e++){let t=u+(tu(a,6)^tu(a,11)^tu(a,25))+tb(a,s,l)+tm[e]+tE[e]|0,c=(tu(r,2)^tu(r,13)^tu(r,22))+tw(r,n,i)|0;u=l,l=s,s=a,a=o+t|0,o=i,i=n,n=r,r=t+c|0}r=r+this.A|0,n=n+this.B|0,i=i+this.C|0,o=o+this.D|0,a=a+this.E|0,s=s+this.F|0,l=l+this.G|0,u=u+this.H|0,this.set(r,n,i,o,a,s,l,u)}roundClean(){tE.fill(0)}destroy(){this.set(0,0,0,0,0,0,0,0),this.buffer.fill(0)}}let tA=td(()=>new tx),tk=BigInt(4294967296-1),tB=BigInt(32);var tU={split:function(e,t=!1){let r=new Uint32Array(e.length),n=new Uint32Array(e.length);for(let i=0;i<e.length;i++){let{h:o,l:a}=function(e,t=!1){return t?{h:Number(e&tk),l:Number(e>>tB&tk)}:{h:0|Number(e>>tB&tk),l:0|Number(e&tk)}}(e[i],t);[r[i],n[i]]=[o,a]}return[r,n]},shrSH:(e,t,r)=>e>>>r,shrSL:(e,t,r)=>e<<32-r|t>>>r,rotrSH:(e,t,r)=>e>>>r|t<<32-r,rotrSL:(e,t,r)=>e<<32-r|t>>>r,rotrBH:(e,t,r)=>e<<64-r|t>>>r-32,rotrBL:(e,t,r)=>e>>>r-32|t<<64-r,add:function(e,t,r,n){let i=(t>>>0)+(n>>>0);return{h:e+r+(i/4294967296|0)|0,l:0|i}},add3L:(e,t,r)=>(e>>>0)+(t>>>0)+(r>>>0),add3H:(e,t,r,n)=>t+r+n+(e/4294967296|0)|0,add4L:(e,t,r,n)=>(e>>>0)+(t>>>0)+(r>>>0)+(n>>>0),add4H:(e,t,r,n,i)=>t+r+n+i+(e/4294967296|0)|0,add5H:(e,t,r,n,i,o)=>t+r+n+i+o+(e/4294967296|0)|0,add5L:(e,t,r,n,i)=>(e>>>0)+(t>>>0)+(r>>>0)+(n>>>0)+(i>>>0)};let[tI,tS]=tU.split(["0x428a2f98d728ae22","0x7137449123ef65cd","0xb5c0fbcfec4d3b2f","0xe9b5dba58189dbbc","0x3956c25bf348b538","0x59f111f1b605d019","0x923f82a4af194f9b","0xab1c5ed5da6d8118","0xd807aa98a3030242","0x12835b0145706fbe","0x243185be4ee4b28c","0x550c7dc3d5ffb4e2","0x72be5d74f27b896f","0x80deb1fe3b1696b1","0x9bdc06a725c71235","0xc19bf174cf692694","0xe49b69c19ef14ad2","0xefbe4786384f25e3","0x0fc19dc68b8cd5b5","0x240ca1cc77ac9c65","0x2de92c6f592b0275","0x4a7484aa6ea6e483","0x5cb0a9dcbd41fbd4","0x76f988da831153b5","0x983e5152ee66dfab","0xa831c66d2db43210","0xb00327c898fb213f","0xbf597fc7beef0ee4","0xc6e00bf33da88fc2","0xd5a79147930aa725","0x06ca6351e003826f","0x142929670a0e6e70","0x27b70a8546d22ffc","0x2e1b21385c26c926","0x4d2c6dfc5ac42aed","0x53380d139d95b3df","0x650a73548baf63de","0x766a0abb3c77b2a8","0x81c2c92e47edaee6","0x92722c851482353b","0xa2bfe8a14cf10364","0xa81a664bbc423001","0xc24b8b70d0f89791","0xc76c51a30654be30","0xd192e819d6ef5218","0xd69906245565a910","0xf40e35855771202a","0x106aa07032bbd1b8","0x19a4c116b8d2d0c8","0x1e376c085141ab53","0x2748774cdf8eeb99","0x34b0bcb5e19b48a8","0x391c0cb3c5c95a63","0x4ed8aa4ae3418acb","0x5b9cca4f7763e373","0x682e6ff3d6b2b8a3","0x748f82ee5defb2fc","0x78a5636f43172f60","0x84c87814a1f0ab72","0x8cc702081a6439ec","0x90befffa23631e28","0xa4506cebde82bde9","0xbef9a3f7b2c67915","0xc67178f2e372532b","0xca273eceea26619c","0xd186b8c721c0c207","0xeada7dd6cde0eb1e","0xf57d4f7fee6ed178","0x06f067aa72176fba","0x0a637dc5a2c898a6","0x113f9804bef90dae","0x1b710b35131c471b","0x28db77f523047d84","0x32caab7b40c72493","0x3c9ebe0a15c9bebc","0x431d67c49c100d4c","0x4cc5d4becb3e42b6","0x597f299cfc657e2a","0x5fcb6fab3ad6faec","0x6c44198c4a475817"].map(e=>BigInt(e))),tL=new Uint32Array(80),tH=new Uint32Array(80);class t$ extends ty{constructor(){super(128,64,16,!1),this.Ah=1779033703,this.Al=-205731576,this.Bh=-1150833019,this.Bl=-2067093701,this.Ch=1013904242,this.Cl=-23791573,this.Dh=-1521486534,this.Dl=1595750129,this.Eh=1359893119,this.El=-1377402159,this.Fh=-1694144372,this.Fl=725511199,this.Gh=528734635,this.Gl=-79577749,this.Hh=1541459225,this.Hl=327033209}get(){let{Ah:e,Al:t,Bh:r,Bl:n,Ch:i,Cl:o,Dh:a,Dl:s,Eh:l,El:u,Fh:c,Fl:h,Gh:f,Gl:d,Hh:p,Hl:g}=this;return[e,t,r,n,i,o,a,s,l,u,c,h,f,d,p,g]}set(e,t,r,n,i,o,a,s,l,u,c,h,f,d,p,g){this.Ah=0|e,this.Al=0|t,this.Bh=0|r,this.Bl=0|n,this.Ch=0|i,this.Cl=0|o,this.Dh=0|a,this.Dl=0|s,this.Eh=0|l,this.El=0|u,this.Fh=0|c,this.Fl=0|h,this.Gh=0|f,this.Gl=0|d,this.Hh=0|p,this.Hl=0|g}process(e,t){for(let r=0;r<16;r++,t+=4)tL[r]=e.getUint32(t),tH[r]=e.getUint32(t+=4);for(let e=16;e<80;e++){let t=0|tL[e-15],r=0|tH[e-15],n=tU.rotrSH(t,r,1)^tU.rotrSH(t,r,8)^tU.shrSH(t,r,7),i=tU.rotrSL(t,r,1)^tU.rotrSL(t,r,8)^tU.shrSL(t,r,7),o=0|tL[e-2],a=0|tH[e-2],s=tU.rotrSH(o,a,19)^tU.rotrBH(o,a,61)^tU.shrSH(o,a,6),l=tU.rotrSL(o,a,19)^tU.rotrBL(o,a,61)^tU.shrSL(o,a,6),u=tU.add4L(i,l,tH[e-7],tH[e-16]),c=tU.add4H(u,n,s,tL[e-7],tL[e-16]);tL[e]=0|c,tH[e]=0|u}let{Ah:r,Al:n,Bh:i,Bl:o,Ch:a,Cl:s,Dh:l,Dl:u,Eh:c,El:h,Fh:f,Fl:d,Gh:p,Gl:g,Hh:y,Hl:b}=this;for(let e=0;e<80;e++){let t=tU.rotrSH(c,h,14)^tU.rotrSH(c,h,18)^tU.rotrBH(c,h,41),w=tU.rotrSL(c,h,14)^tU.rotrSL(c,h,18)^tU.rotrBL(c,h,41),m=c&f^~c&p,v=h&d^~h&g,E=tU.add5L(b,w,v,tS[e],tH[e]),x=tU.add5H(E,y,t,m,tI[e],tL[e]),A=0|E,k=tU.rotrSH(r,n,28)^tU.rotrBH(r,n,34)^tU.rotrBH(r,n,39),B=tU.rotrSL(r,n,28)^tU.rotrBL(r,n,34)^tU.rotrBL(r,n,39),U=r&i^r&a^i&a,I=n&o^n&s^o&s;y=0|p,b=0|g,p=0|f,g=0|d,f=0|c,d=0|h,({h:c,l:h}=tU.add(0|l,0|u,0|x,0|A)),l=0|a,u=0|s,a=0|i,s=0|o,i=0|r,o=0|n;let S=tU.add3L(A,B,I);r=tU.add3H(S,x,k,U),n=0|S}({h:r,l:n}=tU.add(0|this.Ah,0|this.Al,0|r,0|n)),({h:i,l:o}=tU.add(0|this.Bh,0|this.Bl,0|i,0|o)),({h:a,l:s}=tU.add(0|this.Ch,0|this.Cl,0|a,0|s)),({h:l,l:u}=tU.add(0|this.Dh,0|this.Dl,0|l,0|u)),({h:c,l:h}=tU.add(0|this.Eh,0|this.El,0|c,0|h)),({h:f,l:d}=tU.add(0|this.Fh,0|this.Fl,0|f,0|d)),({h:p,l:g}=tU.add(0|this.Gh,0|this.Gl,0|p,0|g)),({h:y,l:b}=tU.add(0|this.Hh,0|this.Hl,0|y,0|b)),this.set(r,n,i,o,a,s,l,u,c,h,f,d,p,g,y,b)}roundClean(){tL.fill(0),tH.fill(0)}destroy(){this.buffer.fill(0),this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)}}let t_=td(()=>new t$);function tC(e){return e instanceof Uint8Array||null!=e&&"object"==typeof e&&"Uint8Array"===e.constructor.name}function tR(...e){let t=e=>e,r=(e,t)=>r=>e(t(r));return{encode:e.map(e=>e.encode).reduceRight(r,t),decode:e.map(e=>e.decode).reduce(r,t)}}function tO(e){return{encode:t=>{if(!Array.isArray(t)||t.length&&"number"!=typeof t[0])throw Error("alphabet.encode input should be an array of numbers");return t.map(t=>{if(t<0||t>=e.length)throw Error(`Digit index outside alphabet: ${t} (alphabet: ${e.length})`);return e[t]})},decode:t=>{if(!Array.isArray(t)||t.length&&"string"!=typeof t[0])throw Error("alphabet.decode input should be array of strings");return t.map(t=>{if("string"!=typeof t)throw Error(`alphabet.decode: not string element=${t}`);let r=e.indexOf(t);if(-1===r)throw Error(`Unknown letter: "${t}". Allowed: ${e}`);return r})}}}function tN(e=""){if("string"!=typeof e)throw Error("join separator should be string");return{encode:t=>{if(!Array.isArray(t)||t.length&&"string"!=typeof t[0])throw Error("join.encode input should be array of strings");for(let e of t)if("string"!=typeof e)throw Error(`join.encode: non-string input=${e}`);return t.join(e)},decode:t=>{if("string"!=typeof t)throw Error("join.decode input should be string");return t.split(e)}}}function tj(e,t,r){if(t<2)throw Error(`convertRadix: wrong from=${t}, base cannot be less than 2`);if(r<2)throw Error(`convertRadix: wrong to=${r}, base cannot be less than 2`);if(!Array.isArray(e))throw Error("convertRadix: data should be array");if(!e.length)return[];let n=0,i=[],o=Array.from(e);for(o.forEach(e=>{if(e<0||e>=t)throw Error(`Wrong integer: ${e}`)});;){let e=0,a=!0;for(let i=n;i<o.length;i++){let s=o[i],l=t*e+s;if(!Number.isSafeInteger(l)||t*e/t!==e||l-s!=t*e)throw Error("convertRadix: carry overflow");e=l%r;let u=Math.floor(l/r);if(o[i]=u,!Number.isSafeInteger(u)||u*r+e!==l)throw Error("convertRadix: carry overflow");a&&(u?a=!1:n=i)}if(i.push(e),a)break}for(let t=0;t<e.length-1&&0===e[t];t++)i.push(0);return i.reverse()}let tK=(e,t)=>t?tK(t,e%t):e,tz=(e,t)=>e+(t-tK(e,t));function tq(e,t,r,n){if(!Array.isArray(e))throw Error("convertRadix2: data should be array");if(t<=0||t>32)throw Error(`convertRadix2: wrong from=${t}`);if(r<=0||r>32)throw Error(`convertRadix2: wrong to=${r}`);if(tz(t,r)>32)throw Error(`convertRadix2: carry overflow from=${t} to=${r} carryBits=${tz(t,r)}`);let i=0,o=0,a=2**r-1,s=[];for(let n of e){if(n>=2**t)throw Error(`convertRadix2: invalid data word=${n} from=${t}`);if(i=i<<t|n,o+t>32)throw Error(`convertRadix2: carry overflow pos=${o} from=${t}`);for(o+=t;o>=r;o-=r)s.push((i>>o-r&a)>>>0);i&=2**o-1}if(i=i<<r-o&a,!n&&o>=t)throw Error("Excess padding");if(!n&&i)throw Error(`Non-zero padding: ${i}`);return n&&o>0&&s.push(i>>>0),s}function tT(e,t){if("function"!=typeof t)throw Error("checksum fn should be function");return{encode(r){if(!tC(r))throw Error("checksum.encode: input should be Uint8Array");let n=t(r).slice(0,e),i=new Uint8Array(r.length+e);return i.set(r),i.set(n,r.length),i},decode(r){if(!tC(r))throw Error("checksum.decode: input should be Uint8Array");let n=r.slice(0,-e),i=t(n).slice(0,e),o=r.slice(-e);for(let t=0;t<e;t++)if(i[t]!==o[t])throw Error("Invalid checksum");return n}}}let tP=function(e,t=!1){if(e<=0||e>32)throw Error("radix2: bits should be in (0..32]");if(tz(8,e)>32||tz(e,8)>32)throw Error("radix2: carry overflow");return{encode:r=>{if(!tC(r))throw Error("radix2.encode input should be Uint8Array");return tq(Array.from(r),8,e,!t)},decode:r=>{if(!Array.isArray(r)||r.length&&"number"!=typeof r[0])throw Error("radix2.decode input should be array of numbers");return Uint8Array.from(tq(r,e,8,t))}}},tD=tR({encode:e=>{if(!tC(e))throw Error("radix.encode input should be Uint8Array");return tj(Array.from(e),256,58)},decode:e=>{if(!Array.isArray(e)||e.length&&"number"!=typeof e[0])throw Error("radix.decode input should be array of numbers");return Uint8Array.from(tj(e,58,256))}},tO("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"),tN("")),tM=e=>"あいこくしん"===e[0];function tF(e){if("string"!=typeof e)throw TypeError(`Invalid mnemonic type: ${typeof e}`);return e.normalize("NFKD")}function tV(e){let t=tF(e),r=t.split(" ");if(![12,15,18,21,24].includes(r.length))throw Error("Invalid mnemonic");return{nfkd:t,words:r}}function tZ(e){ti(e,16,20,24,28,32)}let tG=e=>{let t=8-e.length/4;return new Uint8Array([tA(e)[0]>>t<<t])};function tW(e){if(!Array.isArray(e)||2048!==e.length||"string"!=typeof e[0])throw Error("Worlist: expected array of 2048 strings");return e.forEach(e=>{if("string"!=typeof e)throw Error(`Wordlist: non-string element: ${e}`)}),tR(tT(1,tG),tP(11,!0),tO(e))}let tJ=e=>tF(`mnemonic${e}`);function tY(e){if(!Number.isSafeInteger(e)||e<0)throw Error(`Wrong positive integer: ${e}`)}function tQ(e,...t){if(!(e instanceof Uint8Array||null!=e&&"object"==typeof e&&"Uint8Array"===e.constructor.name))throw Error("Expected Uint8Array");if(t.length>0&&!t.includes(e.length))throw Error(`Expected Uint8Array of length ${t}, not of length=${e.length}`)}function tX(e,t=!0){if(e.destroyed)throw Error("Hash instance has been destroyed");if(t&&e.finished)throw Error("Hash#digest() has already been called")}function t0(e){return e instanceof Uint8Array||null!=e&&"object"==typeof e&&"Uint8Array"===e.constructor.name}let t1=e=>new DataView(e.buffer,e.byteOffset,e.byteLength),t2=(e,t)=>e<<32-t|e>>>t;if(68!==new Uint8Array(new Uint32Array([287454020]).buffer)[0])throw Error("Non little-endian hardware is not supported");let t3=Array.from({length:256},(e,t)=>t.toString(16).padStart(2,"0")),t8={_0:48,_9:57,_A:65,_F:70,_a:97,_f:102};function t4(e){return e>=t8._0&&e<=t8._9?e-t8._0:e>=t8._A&&e<=t8._F?e-(t8._A-10):e>=t8._a&&e<=t8._f?e-(t8._a-10):void 0}function t5(e){if("string"!=typeof e)throw Error(`utf8ToBytes expected string, got ${typeof e}`);return new Uint8Array(new TextEncoder().encode(e))}function t6(e){if("string"==typeof e&&(e=t5(e)),!t0(e))throw Error(`expected Uint8Array, got ${typeof e}`);return e}function t7(...e){let t=0;for(let r=0;r<e.length;r++){let n=e[r];if(!t0(n))throw Error("Uint8Array expected");t+=n.length}let r=new Uint8Array(t);for(let t=0,n=0;t<e.length;t++){let i=e[t];r.set(i,n),n+=i.length}return r}class t9{clone(){return this._cloneInto()}}function re(e){let t=t=>e().update(t6(t)).digest(),r=e();return t.outputLen=r.outputLen,t.blockLen=r.blockLen,t.create=()=>e(),t}class rt extends t9{constructor(e,t){super(),this.finished=!1,this.destroyed=!1,function(e){if("function"!=typeof e||"function"!=typeof e.create)throw Error("Hash should be wrapped by utils.wrapConstructor");tY(e.outputLen),tY(e.blockLen)}(e);let r=t6(t);if(this.iHash=e.create(),"function"!=typeof this.iHash.update)throw Error("Expected instance of class which extends utils.Hash");this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;let n=this.blockLen,i=new Uint8Array(n);i.set(r.length>n?e.create().update(r).digest():r);for(let e=0;e<i.length;e++)i[e]^=54;this.iHash.update(i),this.oHash=e.create();for(let e=0;e<i.length;e++)i[e]^=106;this.oHash.update(i),i.fill(0)}update(e){return tX(this),this.iHash.update(e),this}digestInto(e){tX(this),tQ(e,this.outputLen),this.finished=!0,this.iHash.digestInto(e),this.oHash.update(e),this.oHash.digestInto(e),this.destroy()}digest(){let e=new Uint8Array(this.oHash.outputLen);return this.digestInto(e),e}_cloneInto(e){e||(e=Object.create(Object.getPrototypeOf(this),{}));let{oHash:t,iHash:r,finished:n,destroyed:i,blockLen:o,outputLen:a}=this;return e.finished=n,e.destroyed=i,e.blockLen=o,e.outputLen=a,e.oHash=t._cloneInto(e.oHash),e.iHash=r._cloneInto(e.iHash),e}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}}let rr=(e,t,r)=>new rt(e,t).update(r).digest();rr.create=(e,t)=>new rt(e,t);class rn extends t9{constructor(e,t,r,n){super(),this.blockLen=e,this.outputLen=t,this.padOffset=r,this.isLE=n,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(e),this.view=t1(this.buffer)}update(e){tX(this);let{view:t,buffer:r,blockLen:n}=this,i=(e=t6(e)).length;for(let o=0;o<i;){let a=Math.min(n-this.pos,i-o);if(a===n){let t=t1(e);for(;n<=i-o;o+=n)this.process(t,o);continue}r.set(e.subarray(o,o+a),this.pos),this.pos+=a,o+=a,this.pos===n&&(this.process(t,0),this.pos=0)}return this.length+=e.length,this.roundClean(),this}digestInto(e){tX(this),function(e,t){tQ(e);let r=t.outputLen;if(e.length<r)throw Error(`digestInto() expects output buffer of length at least ${r}`)}(e,this),this.finished=!0;let{buffer:t,view:r,blockLen:n,isLE:i}=this,{pos:o}=this;t[o++]=128,this.buffer.subarray(o).fill(0),this.padOffset>n-o&&(this.process(r,0),o=0);for(let e=o;e<n;e++)t[e]=0;!function(e,t,r,n){if("function"==typeof e.setBigUint64)return e.setBigUint64(t,r,n);let i=BigInt(32),o=BigInt(4294967295),a=Number(r>>i&o),s=Number(r&o),l=n?4:0,u=n?0:4;e.setUint32(t+l,a,n),e.setUint32(t+u,s,n)}(r,n-8,BigInt(8*this.length),i),this.process(r,0);let a=t1(e),s=this.outputLen;if(s%4)throw Error("_sha2: outputLen should be aligned to 32bit");let l=s/4,u=this.get();if(l>u.length)throw Error("_sha2: outputLen bigger than state");for(let e=0;e<l;e++)a.setUint32(4*e,u[e],i)}digest(){let{buffer:e,outputLen:t}=this;this.digestInto(e);let r=e.slice(0,t);return this.destroy(),r}_cloneInto(e){e||(e=new this.constructor),e.set(...this.get());let{blockLen:t,buffer:r,length:n,finished:i,destroyed:o,pos:a}=this;return e.length=n,e.pos=a,e.finished=i,e.destroyed=o,n%t&&e.buffer.set(r),e}}let ri=new Uint8Array([7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8]),ro=Uint8Array.from({length:16},(e,t)=>t),ra=ro.map(e=>(9*e+5)%16),rs=[ro],rl=[ra];for(let e=0;e<4;e++)for(let t of[rs,rl])t.push(t[e].map(e=>ri[e]));let ru=[[11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8],[12,13,11,15,6,9,9,7,12,15,11,13,7,8,7,7],[13,15,14,11,7,7,6,8,13,14,13,12,5,5,6,9],[14,11,12,14,8,6,5,5,15,12,15,14,9,9,8,6],[15,12,13,13,9,5,8,6,14,11,12,11,8,6,5,5]].map(e=>new Uint8Array(e)),rc=rs.map((e,t)=>e.map(e=>ru[t][e])),rh=rl.map((e,t)=>e.map(e=>ru[t][e])),rf=new Uint32Array([0,1518500249,1859775393,2400959708,2840853838]),rd=new Uint32Array([1352829926,1548603684,1836072691,2053994217,0]),rp=(e,t)=>e<<t|e>>>32-t;function rg(e,t,r,n){return 0===e?t^r^n:1===e?t&r|~t&n:2===e?(t|~r)^n:3===e?t&n|r&~n:t^(r|~n)}let ry=new Uint32Array(16);class rb extends rn{constructor(){super(64,20,8,!0),this.h0=1732584193,this.h1=-271733879,this.h2=-1732584194,this.h3=271733878,this.h4=-1009589776}get(){let{h0:e,h1:t,h2:r,h3:n,h4:i}=this;return[e,t,r,n,i]}set(e,t,r,n,i){this.h0=0|e,this.h1=0|t,this.h2=0|r,this.h3=0|n,this.h4=0|i}process(e,t){for(let r=0;r<16;r++,t+=4)ry[r]=e.getUint32(t,!0);let r=0|this.h0,n=r,i=0|this.h1,o=i,a=0|this.h2,s=a,l=0|this.h3,u=l,c=0|this.h4,h=c;for(let e=0;e<5;e++){let t=4-e,f=rf[e],d=rd[e],p=rs[e],g=rl[e],y=rc[e],b=rh[e];for(let t=0;t<16;t++){let n=rp(r+rg(e,i,a,l)+ry[p[t]]+f,y[t])+c|0;r=c,c=l,l=0|rp(a,10),a=i,i=n}for(let e=0;e<16;e++){let r=rp(n+rg(t,o,s,u)+ry[g[e]]+d,b[e])+h|0;n=h,h=u,u=0|rp(s,10),s=o,o=r}}this.set(this.h1+a+u|0,this.h2+l+h|0,this.h3+c+n|0,this.h4+r+o|0,this.h0+i+s|0)}roundClean(){ry.fill(0)}destroy(){this.destroyed=!0,this.buffer.fill(0),this.set(0,0,0,0,0)}}let rw=re(()=>new rb),rm=(e,t,r)=>e&t^~e&r,rv=(e,t,r)=>e&t^e&r^t&r,rE=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),rx=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),rA=new Uint32Array(64);class rk extends rn{constructor(){super(64,32,8,!1),this.A=0|rx[0],this.B=0|rx[1],this.C=0|rx[2],this.D=0|rx[3],this.E=0|rx[4],this.F=0|rx[5],this.G=0|rx[6],this.H=0|rx[7]}get(){let{A:e,B:t,C:r,D:n,E:i,F:o,G:a,H:s}=this;return[e,t,r,n,i,o,a,s]}set(e,t,r,n,i,o,a,s){this.A=0|e,this.B=0|t,this.C=0|r,this.D=0|n,this.E=0|i,this.F=0|o,this.G=0|a,this.H=0|s}process(e,t){for(let r=0;r<16;r++,t+=4)rA[r]=e.getUint32(t,!1);for(let e=16;e<64;e++){let t=rA[e-15],r=rA[e-2],n=t2(t,7)^t2(t,18)^t>>>3,i=t2(r,17)^t2(r,19)^r>>>10;rA[e]=i+rA[e-7]+n+rA[e-16]|0}let{A:r,B:n,C:i,D:o,E:a,F:s,G:l,H:u}=this;for(let e=0;e<64;e++){let t=u+(t2(a,6)^t2(a,11)^t2(a,25))+rm(a,s,l)+rE[e]+rA[e]|0,c=(t2(r,2)^t2(r,13)^t2(r,22))+rv(r,n,i)|0;u=l,l=s,s=a,a=o+t|0,o=i,i=n,n=r,r=t+c|0}r=r+this.A|0,n=n+this.B|0,i=i+this.C|0,o=o+this.D|0,a=a+this.E|0,s=s+this.F|0,l=l+this.G|0,u=u+this.H|0,this.set(r,n,i,o,a,s,l,u)}roundClean(){rA.fill(0)}destroy(){this.set(0,0,0,0,0,0,0,0),this.buffer.fill(0)}}let rB=re(()=>new rk),rU=BigInt(4294967296-1),rI=BigInt(32);var rS={split:function(e,t=!1){let r=new Uint32Array(e.length),n=new Uint32Array(e.length);for(let i=0;i<e.length;i++){let{h:o,l:a}=function(e,t=!1){return t?{h:Number(e&rU),l:Number(e>>rI&rU)}:{h:0|Number(e>>rI&rU),l:0|Number(e&rU)}}(e[i],t);[r[i],n[i]]=[o,a]}return[r,n]},shrSH:(e,t,r)=>e>>>r,shrSL:(e,t,r)=>e<<32-r|t>>>r,rotrSH:(e,t,r)=>e>>>r|t<<32-r,rotrSL:(e,t,r)=>e<<32-r|t>>>r,rotrBH:(e,t,r)=>e<<64-r|t>>>r-32,rotrBL:(e,t,r)=>e>>>r-32|t<<64-r,add:function(e,t,r,n){let i=(t>>>0)+(n>>>0);return{h:e+r+(i/4294967296|0)|0,l:0|i}},add3L:(e,t,r)=>(e>>>0)+(t>>>0)+(r>>>0),add3H:(e,t,r,n)=>t+r+n+(e/4294967296|0)|0,add4L:(e,t,r,n)=>(e>>>0)+(t>>>0)+(r>>>0)+(n>>>0),add4H:(e,t,r,n,i)=>t+r+n+i+(e/4294967296|0)|0,add5H:(e,t,r,n,i,o)=>t+r+n+i+o+(e/4294967296|0)|0,add5L:(e,t,r,n,i)=>(e>>>0)+(t>>>0)+(r>>>0)+(n>>>0)+(i>>>0)};let[rL,rH]=rS.split(["0x428a2f98d728ae22","0x7137449123ef65cd","0xb5c0fbcfec4d3b2f","0xe9b5dba58189dbbc","0x3956c25bf348b538","0x59f111f1b605d019","0x923f82a4af194f9b","0xab1c5ed5da6d8118","0xd807aa98a3030242","0x12835b0145706fbe","0x243185be4ee4b28c","0x550c7dc3d5ffb4e2","0x72be5d74f27b896f","0x80deb1fe3b1696b1","0x9bdc06a725c71235","0xc19bf174cf692694","0xe49b69c19ef14ad2","0xefbe4786384f25e3","0x0fc19dc68b8cd5b5","0x240ca1cc77ac9c65","0x2de92c6f592b0275","0x4a7484aa6ea6e483","0x5cb0a9dcbd41fbd4","0x76f988da831153b5","0x983e5152ee66dfab","0xa831c66d2db43210","0xb00327c898fb213f","0xbf597fc7beef0ee4","0xc6e00bf33da88fc2","0xd5a79147930aa725","0x06ca6351e003826f","0x142929670a0e6e70","0x27b70a8546d22ffc","0x2e1b21385c26c926","0x4d2c6dfc5ac42aed","0x53380d139d95b3df","0x650a73548baf63de","0x766a0abb3c77b2a8","0x81c2c92e47edaee6","0x92722c851482353b","0xa2bfe8a14cf10364","0xa81a664bbc423001","0xc24b8b70d0f89791","0xc76c51a30654be30","0xd192e819d6ef5218","0xd69906245565a910","0xf40e35855771202a","0x106aa07032bbd1b8","0x19a4c116b8d2d0c8","0x1e376c085141ab53","0x2748774cdf8eeb99","0x34b0bcb5e19b48a8","0x391c0cb3c5c95a63","0x4ed8aa4ae3418acb","0x5b9cca4f7763e373","0x682e6ff3d6b2b8a3","0x748f82ee5defb2fc","0x78a5636f43172f60","0x84c87814a1f0ab72","0x8cc702081a6439ec","0x90befffa23631e28","0xa4506cebde82bde9","0xbef9a3f7b2c67915","0xc67178f2e372532b","0xca273eceea26619c","0xd186b8c721c0c207","0xeada7dd6cde0eb1e","0xf57d4f7fee6ed178","0x06f067aa72176fba","0x0a637dc5a2c898a6","0x113f9804bef90dae","0x1b710b35131c471b","0x28db77f523047d84","0x32caab7b40c72493","0x3c9ebe0a15c9bebc","0x431d67c49c100d4c","0x4cc5d4becb3e42b6","0x597f299cfc657e2a","0x5fcb6fab3ad6faec","0x6c44198c4a475817"].map(e=>BigInt(e))),r$=new Uint32Array(80),r_=new Uint32Array(80);class rC extends rn{constructor(){super(128,64,16,!1),this.Ah=1779033703,this.Al=-205731576,this.Bh=-1150833019,this.Bl=-2067093701,this.Ch=1013904242,this.Cl=-23791573,this.Dh=-1521486534,this.Dl=1595750129,this.Eh=1359893119,this.El=-1377402159,this.Fh=-1694144372,this.Fl=725511199,this.Gh=528734635,this.Gl=-79577749,this.Hh=1541459225,this.Hl=327033209}get(){let{Ah:e,Al:t,Bh:r,Bl:n,Ch:i,Cl:o,Dh:a,Dl:s,Eh:l,El:u,Fh:c,Fl:h,Gh:f,Gl:d,Hh:p,Hl:g}=this;return[e,t,r,n,i,o,a,s,l,u,c,h,f,d,p,g]}set(e,t,r,n,i,o,a,s,l,u,c,h,f,d,p,g){this.Ah=0|e,this.Al=0|t,this.Bh=0|r,this.Bl=0|n,this.Ch=0|i,this.Cl=0|o,this.Dh=0|a,this.Dl=0|s,this.Eh=0|l,this.El=0|u,this.Fh=0|c,this.Fl=0|h,this.Gh=0|f,this.Gl=0|d,this.Hh=0|p,this.Hl=0|g}process(e,t){for(let r=0;r<16;r++,t+=4)r$[r]=e.getUint32(t),r_[r]=e.getUint32(t+=4);for(let e=16;e<80;e++){let t=0|r$[e-15],r=0|r_[e-15],n=rS.rotrSH(t,r,1)^rS.rotrSH(t,r,8)^rS.shrSH(t,r,7),i=rS.rotrSL(t,r,1)^rS.rotrSL(t,r,8)^rS.shrSL(t,r,7),o=0|r$[e-2],a=0|r_[e-2],s=rS.rotrSH(o,a,19)^rS.rotrBH(o,a,61)^rS.shrSH(o,a,6),l=rS.rotrSL(o,a,19)^rS.rotrBL(o,a,61)^rS.shrSL(o,a,6),u=rS.add4L(i,l,r_[e-7],r_[e-16]),c=rS.add4H(u,n,s,r$[e-7],r$[e-16]);r$[e]=0|c,r_[e]=0|u}let{Ah:r,Al:n,Bh:i,Bl:o,Ch:a,Cl:s,Dh:l,Dl:u,Eh:c,El:h,Fh:f,Fl:d,Gh:p,Gl:g,Hh:y,Hl:b}=this;for(let e=0;e<80;e++){let t=rS.rotrSH(c,h,14)^rS.rotrSH(c,h,18)^rS.rotrBH(c,h,41),w=rS.rotrSL(c,h,14)^rS.rotrSL(c,h,18)^rS.rotrBL(c,h,41),m=c&f^~c&p,v=h&d^~h&g,E=rS.add5L(b,w,v,rH[e],r_[e]),x=rS.add5H(E,y,t,m,rL[e],r$[e]),A=0|E,k=rS.rotrSH(r,n,28)^rS.rotrBH(r,n,34)^rS.rotrBH(r,n,39),B=rS.rotrSL(r,n,28)^rS.rotrBL(r,n,34)^rS.rotrBL(r,n,39),U=r&i^r&a^i&a,I=n&o^n&s^o&s;y=0|p,b=0|g,p=0|f,g=0|d,f=0|c,d=0|h,({h:c,l:h}=rS.add(0|l,0|u,0|x,0|A)),l=0|a,u=0|s,a=0|i,s=0|o,i=0|r,o=0|n;let S=rS.add3L(A,B,I);r=rS.add3H(S,x,k,U),n=0|S}({h:r,l:n}=rS.add(0|this.Ah,0|this.Al,0|r,0|n)),({h:i,l:o}=rS.add(0|this.Bh,0|this.Bl,0|i,0|o)),({h:a,l:s}=rS.add(0|this.Ch,0|this.Cl,0|a,0|s)),({h:l,l:u}=rS.add(0|this.Dh,0|this.Dl,0|l,0|u)),({h:c,l:h}=rS.add(0|this.Eh,0|this.El,0|c,0|h)),({h:f,l:d}=rS.add(0|this.Fh,0|this.Fl,0|f,0|d)),({h:p,l:g}=rS.add(0|this.Gh,0|this.Gl,0|p,0|g)),({h:y,l:b}=rS.add(0|this.Hh,0|this.Hl,0|y,0|b)),this.set(r,n,i,o,a,s,l,u,c,h,f,d,p,g,y,b)}roundClean(){r$.fill(0),r_.fill(0)}destroy(){this.buffer.fill(0),this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)}}let rR=re(()=>new rC),rO=eL.ProjectivePoint,rN=tR(tT(4,e=>rB(rB(e))),tD);function rj(e){return BigInt(`0x${function(e){if(!t0(e))throw Error("Uint8Array expected");let t="";for(let r=0;r<e.length;r++)t+=t3[e[r]];return t}(e)}`)}let rK=t5("Bitcoin seed"),rz={private:76066276,public:76067358},rq=e=>rw(rB(e)),rT=e=>t1(e).getUint32(0,!1),rP=e=>{if(!Number.isSafeInteger(e)||e<0||e>4294967296-1)throw Error(`Invalid number=${e}. Should be from 0 to 2 ** 32 - 1`);let t=new Uint8Array(4);return t1(t).setUint32(0,e,!1),t};class rD{get fingerprint(){if(!this.pubHash)throw Error("No publicKey set!");return rT(this.pubHash)}get identifier(){return this.pubHash}get pubKeyHash(){return this.pubHash}get privateKey(){return this.privKeyBytes||null}get publicKey(){return this.pubKey||null}get privateExtendedKey(){let e=this.privateKey;if(!e)throw Error("No private key");return rN.encode(this.serialize(this.versions.private,t7(new Uint8Array([0]),e)))}get publicExtendedKey(){if(!this.pubKey)throw Error("No public key");return rN.encode(this.serialize(this.versions.public,this.pubKey))}static fromMasterSeed(e,t=rz){if(tQ(e),8*e.length<128||8*e.length>512)throw Error(`HDKey: wrong seed length=${e.length}. Should be between 128 and 512 bits; 256 bits is advised)`);let r=rr(rR,rK,e);return new rD({versions:t,chainCode:r.slice(32),privateKey:r.slice(0,32)})}static fromExtendedKey(e,t=rz){let r=rN.decode(e),n=t1(r),i=n.getUint32(0,!1),o={versions:t,depth:r[4],parentFingerprint:n.getUint32(5,!1),index:n.getUint32(9,!1),chainCode:r.slice(13,45)},a=r.slice(45),s=0===a[0];if(i!==t[s?"private":"public"])throw Error("Version mismatch");return new rD(s?{...o,privateKey:a.slice(1)}:{...o,publicKey:a})}static fromJSON(e){return rD.fromExtendedKey(e.xpriv)}constructor(e){if(this.depth=0,this.index=0,this.chainCode=null,this.parentFingerprint=0,!e||"object"!=typeof e)throw Error("HDKey.constructor must not be called directly");if(this.versions=e.versions||rz,this.depth=e.depth||0,this.chainCode=e.chainCode,this.index=e.index||0,this.parentFingerprint=e.parentFingerprint||0,!this.depth&&(this.parentFingerprint||this.index))throw Error("HDKey: zero depth with non-zero index/parent fingerprint");if(e.publicKey&&e.privateKey)throw Error("HDKey: publicKey and privateKey at same time.");if(e.privateKey){if(!eL.utils.isValidPrivateKey(e.privateKey))throw Error("Invalid private key");this.privKey="bigint"==typeof e.privateKey?e.privateKey:rj(e.privateKey),this.privKeyBytes=function(e){if("string"!=typeof e)throw Error("hex string expected, got "+typeof e);let t=e.length,r=t/2;if(t%2)throw Error("padded hex string expected, got unpadded hex of length "+t);let n=new Uint8Array(r);for(let t=0,i=0;t<r;t++,i+=2){let r=t4(e.charCodeAt(i)),o=t4(e.charCodeAt(i+1));if(void 0===r||void 0===o)throw Error('hex string expected, got non-hex character "'+(e[i]+e[i+1])+'" at index '+i);n[t]=16*r+o}return n}(this.privKey.toString(16).padStart(64,"0")),this.pubKey=eL.getPublicKey(e.privateKey,!0)}else if(e.publicKey)this.pubKey=rO.fromHex(e.publicKey).toRawBytes(!0);else throw Error("HDKey: no public or private key provided");this.pubHash=rq(this.pubKey)}derive(e){if(!/^[mM]'?/.test(e))throw Error('Path must start with "m" or "M"');if(/^[mM]'?$/.test(e))return this;let t=e.replace(/^[mM]'?\//,"").split("/"),r=this;for(let e of t){let t=/^(\d+)('?)$/.exec(e);if(!t||3!==t.length)throw Error(`Invalid child index: ${e}`);let n=+t[1];if(!Number.isSafeInteger(n)||n>=2147483648)throw Error("Invalid index");"'"===t[2]&&(n+=2147483648),r=r.deriveChild(n)}return r}deriveChild(e){if(!this.pubKey||!this.chainCode)throw Error("No publicKey or chainCode set");let t=rP(e);if(e>=2147483648){let e=this.privateKey;if(!e)throw Error("Could not derive hardened child key");t=t7(new Uint8Array([0]),e,t)}else t=t7(this.pubKey,t);let r=rr(rR,this.chainCode,t),n=rj(r.slice(0,32)),i=r.slice(32);if(!eL.utils.isValidPrivateKey(n))throw Error("Tweak bigger than curve order");let o={versions:this.versions,chainCode:i,depth:this.depth+1,parentFingerprint:this.fingerprint,index:e};try{if(this.privateKey){let e=ea(this.privKey+n,eL.CURVE.n);if(!eL.utils.isValidPrivateKey(e))throw Error("The tweak was out of range or the resulted private key is invalid");o.privateKey=e}else{let e=rO.fromHex(this.pubKey).add(rO.fromPrivateKey(n));if(e.equals(rO.ZERO))throw Error("The tweak was equal to negative P, which made the result key invalid");o.publicKey=e.toRawBytes(!0)}return new rD(o)}catch(t){return this.deriveChild(e+1)}}sign(e){if(!this.privateKey)throw Error("No privateKey set!");return tQ(e,32),eL.sign(e,this.privKey).toCompactRawBytes()}verify(e,t){let r;if(tQ(e,32),tQ(t,64),!this.publicKey)throw Error("No publicKey set!");try{r=eL.Signature.fromCompact(t)}catch(e){return!1}return eL.verify(r,e,this.publicKey)}wipePrivateData(){return this.privKey=void 0,this.privKeyBytes&&(this.privKeyBytes.fill(0),this.privKeyBytes=void 0),this}toJSON(){return{xpriv:this.privateExtendedKey,xpub:this.publicExtendedKey}}serialize(e,t){if(!this.chainCode)throw Error("No chainCode set");return tQ(t,33),t7(rP(e),new Uint8Array([this.depth]),rP(this.parentFingerprint),rP(this.index),this.chainCode,t)}}/*! noble-ciphers - MIT License (c) 2023 Paul Miller (paulmillr.com) */let rM=e=>e instanceof Uint8Array,rF=e=>new Uint32Array(e.buffer,e.byteOffset,Math.floor(e.byteLength/4));if(68!==new Uint8Array(new Uint32Array([287454020]).buffer)[0])throw Error("Non little-endian hardware is not supported");function rV(e){if("string"!=typeof e)throw Error(`utf8ToBytes expected string, got ${typeof e}`);return new Uint8Array(new TextEncoder().encode(e))}function rZ(e){if("string"==typeof e&&(e=rV(e)),!rM(e))throw Error(`expected Uint8Array, got ${typeof e}`);return e}let rG=e=>"[object Object]"===Object.prototype.toString.call(e)&&e.constructor===Object;function rW(e,t){if(!(e instanceof Uint8Array))throw Error("Uint8Array expected");if("number"==typeof t&&e.length!==t)throw Error(`Uint8Array length ${t} expected`)}function rJ(e,...t){if(!(e instanceof Uint8Array))throw Error("Expected Uint8Array");if(t.length>0&&!t.includes(e.length))throw Error(`Expected Uint8Array of length ${t}, not of length=${e.length}`)}var rY=function(e){if(!Number.isSafeInteger(e)||e<0)throw Error(`Wrong positive integer: ${e}`)},rQ=function(e){if("boolean"!=typeof e)throw Error(`Expected boolean, not ${e}`)},rX=function(e,t=!0){if(e.destroyed)throw Error("Hash instance has been destroyed");if(t&&e.finished)throw Error("Hash#digest() has already been called")},r0=function(e,t){rJ(e);let r=t.outputLen;if(e.length<r)throw Error(`digestInto() expects output buffer of length at least ${r}`)};let r1=(e,t)=>255&e[t++]|(255&e[t++])<<8;class r2{constructor(e){this.blockLen=16,this.outputLen=16,this.buffer=new Uint8Array(16),this.r=new Uint16Array(10),this.h=new Uint16Array(10),this.pad=new Uint16Array(8),this.pos=0,this.finished=!1,rW(e=rZ(e),32);let t=r1(e,0),r=r1(e,2),n=r1(e,4),i=r1(e,6),o=r1(e,8),a=r1(e,10),s=r1(e,12),l=r1(e,14);this.r[0]=8191&t,this.r[1]=(t>>>13|r<<3)&8191,this.r[2]=(r>>>10|n<<6)&7939,this.r[3]=(n>>>7|i<<9)&8191,this.r[4]=(i>>>4|o<<12)&255,this.r[5]=o>>>1&8190,this.r[6]=(o>>>14|a<<2)&8191,this.r[7]=(a>>>11|s<<5)&8065,this.r[8]=(s>>>8|l<<8)&8191,this.r[9]=l>>>5&127;for(let t=0;t<8;t++)this.pad[t]=r1(e,16+2*t)}process(e,t,r=!1){let{h:n,r:i}=this,o=i[0],a=i[1],s=i[2],l=i[3],u=i[4],c=i[5],h=i[6],f=i[7],d=i[8],p=i[9],g=r1(e,t+0),y=r1(e,t+2),b=r1(e,t+4),w=r1(e,t+6),m=r1(e,t+8),v=r1(e,t+10),E=r1(e,t+12),x=r1(e,t+14),A=n[0]+(8191&g),k=n[1]+((g>>>13|y<<3)&8191),B=n[2]+((y>>>10|b<<6)&8191),U=n[3]+((b>>>7|w<<9)&8191),I=n[4]+((w>>>4|m<<12)&8191),S=n[5]+(m>>>1&8191),L=n[6]+((m>>>14|v<<2)&8191),H=n[7]+((v>>>11|E<<5)&8191),$=n[8]+((E>>>8|x<<8)&8191),_=n[9]+(x>>>5|(r?0:2048)),C=0,R=0+A*o+5*p*k+5*d*B+5*f*U+5*h*I;C=R>>>13,R&=8191,R+=5*c*S+5*u*L+5*l*H+5*s*$+5*a*_,C+=R>>>13,R&=8191;let O=C+A*a+k*o+5*p*B+5*d*U+5*f*I;C=O>>>13,O&=8191,O+=5*h*S+5*c*L+5*u*H+5*l*$+5*s*_,C+=O>>>13,O&=8191;let N=C+A*s+k*a+B*o+5*p*U+5*d*I;C=N>>>13,N&=8191,N+=5*f*S+5*h*L+5*c*H+5*u*$+5*l*_,C+=N>>>13,N&=8191;let j=C+A*l+k*s+B*a+U*o+5*p*I;C=j>>>13,j&=8191,j+=5*d*S+5*f*L+5*h*H+5*c*$+5*u*_,C+=j>>>13,j&=8191;let K=C+A*u+k*l+B*s+U*a+I*o;C=K>>>13,K&=8191,K+=5*p*S+5*d*L+5*f*H+5*h*$+5*c*_,C+=K>>>13,K&=8191;let z=C+A*c+k*u+B*l+U*s+I*a;C=z>>>13,z&=8191,z+=S*o+5*p*L+5*d*H+5*f*$+5*h*_,C+=z>>>13,z&=8191;let q=C+A*h+k*c+B*u+U*l+I*s;C=q>>>13,q&=8191,q+=S*a+L*o+5*p*H+5*d*$+5*f*_,C+=q>>>13,q&=8191;let T=C+A*f+k*h+B*c+U*u+I*l;C=T>>>13,T&=8191,T+=S*s+L*a+H*o+5*p*$+5*d*_,C+=T>>>13,T&=8191;let P=C+A*d+k*f+B*h+U*c+I*u;C=P>>>13,P&=8191,P+=S*l+L*s+H*a+$*o+5*p*_,C+=P>>>13,P&=8191;let D=C+A*p+k*d+B*f+U*h+I*c;C=D>>>13,D&=8191,D+=S*u+L*l+H*s+$*a+_*o,C+=D>>>13,D&=8191,R=8191&(C=(C=(C<<2)+C|0)+R|0),C>>>=13,O+=C,n[0]=R,n[1]=O,n[2]=N,n[3]=j,n[4]=K,n[5]=z,n[6]=q,n[7]=T,n[8]=P,n[9]=D}finalize(){let{h:e,pad:t}=this,r=new Uint16Array(10),n=e[1]>>>13;e[1]&=8191;for(let t=2;t<10;t++)e[t]+=n,n=e[t]>>>13,e[t]&=8191;e[0]+=5*n,n=e[0]>>>13,e[0]&=8191,e[1]+=n,n=e[1]>>>13,e[1]&=8191,e[2]+=n,r[0]=e[0]+5,n=r[0]>>>13,r[0]&=8191;for(let t=1;t<10;t++)r[t]=e[t]+n,n=r[t]>>>13,r[t]&=8191;r[9]-=8192;let i=(1^n)-1;for(let e=0;e<10;e++)r[e]&=i;i=~i;for(let t=0;t<10;t++)e[t]=e[t]&i|r[t];e[0]=(e[0]|e[1]<<13)&65535,e[1]=(e[1]>>>3|e[2]<<10)&65535,e[2]=(e[2]>>>6|e[3]<<7)&65535,e[3]=(e[3]>>>9|e[4]<<4)&65535,e[4]=(e[4]>>>12|e[5]<<1|e[6]<<14)&65535,e[5]=(e[6]>>>2|e[7]<<11)&65535,e[6]=(e[7]>>>5|e[8]<<8)&65535,e[7]=(e[8]>>>8|e[9]<<5)&65535;let o=e[0]+t[0];e[0]=65535&o;for(let r=1;r<8;r++)o=(e[r]+t[r]|0)+(o>>>16)|0,e[r]=65535&o}update(e){rX(this);let{buffer:t,blockLen:r}=this,n=(e=rZ(e)).length;for(let i=0;i<n;){let o=Math.min(r-this.pos,n-i);if(o===r){for(;r<=n-i;i+=r)this.process(e,i);continue}t.set(e.subarray(i,i+o),this.pos),this.pos+=o,i+=o,this.pos===r&&(this.process(t,0,!1),this.pos=0)}return this}destroy(){this.h.fill(0),this.r.fill(0),this.buffer.fill(0),this.pad.fill(0)}digestInto(e){rX(this),r0(e,this),this.finished=!0;let{buffer:t,h:r}=this,{pos:n}=this;if(n){for(t[n++]=1;n<16;n++)t[n]=0;this.process(t,0,!0)}this.finalize();let i=0;for(let t=0;t<8;t++)e[i++]=r[t]>>>0,e[i++]=r[t]>>>8;return e}digest(){let{buffer:e,outputLen:t}=this;this.digestInto(e);let r=e.slice(0,t);return this.destroy(),r}}!function(e){let t=(t,r)=>e(r).update(rZ(t)).digest(),r=e(new Uint8Array(32));t.outputLen=r.outputLen,t.blockLen=r.blockLen,t.create=t=>e(t)}(e=>new r2(e));let r3=rV("expand 16-byte k"),r8=rV("expand 32-byte k"),r4=rF(r3),r5=rF(r8),r6=e=>!(e.byteOffset%4),r7=(e,t)=>e<<t|e>>>32-t,r9=(e=>{let{core:t,rounds:r,counterRight:n,counterLen:i,allow128bitKeys:o,extendNonceFn:a,blockLen:s}=function(e,t){if(void 0!==t&&("object"!=typeof t||!rG(t)))throw Error("options must be object or undefined");return Object.assign(e,t)}({rounds:20,counterRight:!1,counterLen:8,allow128bitKeys:!0,blockLen:64},e);rY(i),rY(r),rY(s),rQ(n),rQ(o);let l=s/4;if(s%4!=0)throw Error("Salsa/ChaCha: blockLen must be aligned to 4 bytes");return(e,u,c,h,f=0)=>{let d,p;if(rJ(e),rJ(u),rJ(c),h||(h=new Uint8Array(c.length)),rJ(h),rY(f),f<0||f>=4294967296-1)throw Error("Salsa/ChaCha: counter overflow");if(h.length<c.length)throw Error(`Salsa/ChaCha: output (${h.length}) is shorter than data (${c.length})`);let g=[];if(32===e.length)d=e,p=r5;else if(16===e.length&&o)(d=new Uint8Array(32)).set(e),d.set(e,16),p=r4,g.push(d);else throw Error(`Salsa/ChaCha: invalid 32-byte key, got length=${e.length}`);if(a){if(u.length<=16)throw Error("Salsa/ChaCha: extended nonce must be bigger than 16 bytes");d=a(p,d,u.subarray(0,16),new Uint8Array(32)),g.push(d),u=u.subarray(16)}let y=16-i;if(u.length!==y)throw Error(`Salsa/ChaCha: nonce must be ${y} or 16 bytes`);if(12!==y){let e=new Uint8Array(12);e.set(u,n?0:12-u.length),g.push(u=e)}let b=new Uint8Array(s),w=rF(b),m=rF(d),v=rF(u),E=r6(c)&&rF(c),x=r6(h)&&rF(h);g.push(w);let A=c.length;for(let e=0,n=f;e<A;n++){if(t(p,m,v,w,n,r),n>=4294967296-1)throw Error("Salsa/ChaCha: counter overflow");let i=Math.min(s,A-e);if(i===s&&x&&E){let t=e/4;if(e%4!=0)throw Error("Salsa/ChaCha: invalid block position");for(let e=0;e<l;e++)x[t+e]=E[t+e]^w[e];e+=s;continue}for(let t=0;t<i;t++)h[e+t]=c[e+t]^b[t];e+=i}for(let e=0;e<g.length;e++)g[e].fill(0);return h}})({core:function(e,t,r,n,i,o=20){let a=e[0],s=e[1],l=e[2],u=e[3],c=t[0],h=t[1],f=t[2],d=t[3],p=t[4],g=t[5],y=t[6],b=t[7],w=r[0],m=r[1],v=r[2],E=a,x=s,A=l,k=u,B=c,U=h,I=f,S=d,L=p,H=g,$=y,_=b,C=i,R=w,O=m,N=v;for(let e=0;e<o;e+=2)L=L+(C=r7(C^(E=E+B|0),16))|0,E=E+(B=r7(B^L,12))|0,L=L+(C=r7(C^E,8))|0,B=r7(B^L,7),H=H+(R=r7(R^(x=x+U|0),16))|0,x=x+(U=r7(U^H,12))|0,H=H+(R=r7(R^x,8))|0,U=r7(U^H,7),$=$+(O=r7(O^(A=A+I|0),16))|0,A=A+(I=r7(I^$,12))|0,$=$+(O=r7(O^A,8))|0,I=r7(I^$,7),_=_+(N=r7(N^(k=k+S|0),16))|0,k=k+(S=r7(S^_,12))|0,_=_+(N=r7(N^k,8))|0,S=r7(S^_,7),$=$+(N=r7(N^(E=E+U|0),16))|0,E=E+(U=r7(U^$,12))|0,$=$+(N=r7(N^E,8))|0,U=r7(U^$,7),_=_+(C=r7(C^(x=x+I|0),16))|0,x=x+(I=r7(I^_,12))|0,_=_+(C=r7(C^x,8))|0,I=r7(I^_,7),L=L+(R=r7(R^(A=A+S|0),16))|0,A=A+(S=r7(S^L,12))|0,L=L+(R=r7(R^A,8))|0,S=r7(S^L,7),H=H+(O=r7(O^(k=k+B|0),16))|0,k=k+(B=r7(B^H,12))|0,H=H+(O=r7(O^k,8))|0,B=r7(B^H,7);let j=0;n[j++]=a+E|0,n[j++]=s+x|0,n[j++]=l+A|0,n[j++]=u+k|0,n[j++]=c+B|0,n[j++]=h+U|0,n[j++]=f+I|0,n[j++]=d+S|0,n[j++]=p+L|0,n[j++]=g+H|0,n[j++]=y+$|0,n[j++]=b+_|0,n[j++]=i+C|0,n[j++]=w+R|0,n[j++]=m+O|0,n[j++]=v+N|0},counterRight:!1,counterLen:4,allow128bitKeys:!1}),ne=new Uint8Array(16),nt=new Uint8Array([0]),nr=new Uint8Array,nn=(e,t,r,n,i)=>{var o;return function(e,t,r,n=32){if(c(e),l(n),n>255*e.outputLen)throw Error("Length should be <= 255*HashLen");let i=Math.ceil(n/e.outputLen);void 0===r&&(r=nr);let o=new Uint8Array(i*e.outputLen),a=eE.create(e,t),s=a._cloneInto(),u=new Uint8Array(a.outputLen);for(let t=0;t<i;t++)nt[0]=t+1,s.update(0===t?nr:u).update(r).update(nt).digestInto(u),o.set(u,e.outputLen*t),a._cloneInto(s);return a.destroy(),s.destroy(),u.fill(0),nt.fill(0),o.slice(0,n)}(e,(o=r,c(e),void 0===o&&(o=new Uint8Array(e.outputLen)),eE(e,v(o),v(t))),n,i)};var ni=Object.defineProperty,no=(e,t)=>{for(var r in t)ni(e,r,{get:t[r],enumerable:!0})};function na(){return w(eF.utils.randomPrivateKey())}function ns(e){return w(eF.getPublicKey(e))}no({},{MessageNode:()=>nd,MessageQueue:()=>np,insertEventIntoAscendingList:()=>nf,insertEventIntoDescendingList:()=>nh,normalizeURL:()=>nc,utf8Decoder:()=>nl,utf8Encoder:()=>nu});var nl=new TextDecoder("utf-8"),nu=new TextEncoder;function nc(e){let t=new URL(e);return t.pathname=t.pathname.replace(/\/+/g,"/"),t.pathname.endsWith("/")&&(t.pathname=t.pathname.slice(0,-1)),("80"===t.port&&"ws:"===t.protocol||"443"===t.port&&"wss:"===t.protocol)&&(t.port=""),t.searchParams.sort(),t.hash="",t.toString()}function nh(e,t){let r,n=0,i=e.length-1,o=n;if(i<0)o=0;else if(t.created_at<e[i].created_at)o=i+1;else if(t.created_at>=e[n].created_at)o=n;else for(;;){if(i<=n+1){o=i;break}if(e[r=Math.floor(n+(i-n)/2)].created_at>t.created_at)n=r;else if(e[r].created_at<t.created_at)i=r;else{o=r;break}}return e[o]?.id!==t.id?[...e.slice(0,o),t,...e.slice(o)]:e}function nf(e,t){let r,n=0,i=e.length-1,o=n;if(i<0)o=0;else if(t.created_at>e[i].created_at)o=i+1;else if(t.created_at<=e[n].created_at)o=n;else for(;;){if(i<=n+1){o=i;break}if(e[r=Math.floor(n+(i-n)/2)].created_at<t.created_at)n=r;else if(e[r].created_at>t.created_at)i=r;else{o=r;break}}return e[o]?.id!==t.id?[...e.slice(0,o),t,...e.slice(o)]:e}var nd=class{_value;_next;get value(){return this._value}set value(e){this._value=e}get next(){return this._next}set next(e){this._next=e}constructor(e){this._value=e,this._next=null}},np=class{_first;_last;get first(){return this._first}set first(e){this._first=e}get last(){return this._last}set last(e){this._last=e}_size;get size(){return this._size}set size(e){this._size=e}constructor(){this._first=null,this._last=null,this._size=0}enqueue(e){let t=new nd(e);return 0!==this._size&&this._last?this._last.next=t:this._first=t,this._last=t,this._size++,!0}dequeue(){if(0===this._size||!this._first)return null;let e=this._first;return this._first=e.next,e.next=null,this._size--,e.value}},ng=Symbol("verified"),ny=((n=ny||{})[n.Metadata=0]="Metadata",n[n.Text=1]="Text",n[n.RecommendRelay=2]="RecommendRelay",n[n.Contacts=3]="Contacts",n[n.EncryptedDirectMessage=4]="EncryptedDirectMessage",n[n.EventDeletion=5]="EventDeletion",n[n.Repost=6]="Repost",n[n.Reaction=7]="Reaction",n[n.BadgeAward=8]="BadgeAward",n[n.ChannelCreation=40]="ChannelCreation",n[n.ChannelMetadata=41]="ChannelMetadata",n[n.ChannelMessage=42]="ChannelMessage",n[n.ChannelHideMessage=43]="ChannelHideMessage",n[n.ChannelMuteUser=44]="ChannelMuteUser",n[n.Blank=255]="Blank",n[n.Report=1984]="Report",n[n.ZapRequest=9734]="ZapRequest",n[n.Zap=9735]="Zap",n[n.RelayList=10002]="RelayList",n[n.ClientAuth=22242]="ClientAuth",n[n.NwcRequest=23194]="NwcRequest",n[n.HttpAuth=27235]="HttpAuth",n[n.ProfileBadge=30008]="ProfileBadge",n[n.BadgeDefinition=30009]="BadgeDefinition",n[n.Article=30023]="Article",n[n.FileMetadata=1063]="FileMetadata",n);function nb(e,t){return e.pubkey=ns(t),e.id=nw(e),e.sig=nx(e,t),e[ng]=!0,e}function nw(e){return w(C(nu.encode(function(e){if(!nv(e))throw Error("can't serialize event with wrong or missing properties");return JSON.stringify([0,e.pubkey,e.created_at,e.kind,e.tags,e.content])}(e))))}var nm=e=>e instanceof Object;function nv(e){if(!nm(e)||"number"!=typeof e.kind||"string"!=typeof e.content||"number"!=typeof e.created_at||"string"!=typeof e.pubkey||!e.pubkey.match(/^[a-f0-9]{64}$/)||!Array.isArray(e.tags))return!1;for(let t=0;t<e.tags.length;t++){let r=e.tags[t];if(!Array.isArray(r))return!1;for(let e=0;e<r.length;e++)if("object"==typeof r[e])return!1}return!0}function nE(e){if("boolean"==typeof e[ng])return e[ng];let t=nw(e);if(t!==e.id)return e[ng]=!1;try{return e[ng]=eF.verify(e.sig,t,e.pubkey)}catch(t){return e[ng]=!1}}function nx(e,t){return w(eF.sign(nw(e),t))}function nA(e,t){let r=t.length+3,n=e.indexOf(`"${t}":`)+r,i=e.slice(n).indexOf('"')+n+1;return e.slice(i,i+64)}function nk(e,t){let r=t.length,n=e.indexOf(`"${t}":`)+r+3,i=e.slice(n),o=Math.min(i.indexOf(","),i.indexOf("}"));return parseInt(i.slice(0,o),10)}function nB(e){let t=e.slice(0,22).indexOf('"EVENT"');if(-1===t)return null;let r=e.slice(t+7+1).indexOf('"');if(-1===r)return null;let n=t+7+1+r,i=e.slice(n+1,80).indexOf('"');return -1===i?null:e.slice(n+1,n+1+i)}function nU(e,t){return t===nA(e,"id")}function nI(e,t){return t===nA(e,"pubkey")}function nS(e,t){return t===nk(e,"kind")}no({},{getHex64:()=>nA,getInt:()=>nk,getSubscriptionId:()=>nB,matchEventId:()=>nU,matchEventKind:()=>nS,matchEventPubkey:()=>nI});var nL=()=>({connect:[],disconnect:[],error:[],notice:[],auth:[]});function nH(e,t={}){let{listTimeout:r=3e3,getTimeout:n=3e3,countTimeout:i=3e3}=t;var o,a,s={},l=nL(),u={},c={};async function h(){return a||(a=new Promise((t,r)=>{let n;try{o=new WebSocket(e)}catch(e){r(e)}o.onopen=()=>{l.connect.forEach(e=>e()),t()},o.onerror=()=>{a=void 0,l.error.forEach(e=>e()),r()},o.onclose=async()=>{a=void 0,l.disconnect.forEach(e=>e())};let i=new np;function h(){if(0===i.size){clearInterval(n),n=null;return}var t=i.dequeue();if(!t)return;let r=nB(t);if(r){let n=s[r];if(n&&n.alreadyHaveEvent&&n.alreadyHaveEvent(nA(t,"id"),e))return}try{let e=JSON.parse(t);switch(e[0]){case"EVENT":{let t=e[1],r=e[2];nv(r)&&s[t]&&(s[t].skipVerification||nE(r))&&function(e,t){for(let r=0;r<e.length;r++)if(function(e,t){if(e.ids&&-1===e.ids.indexOf(t.id)&&!e.ids.some(e=>t.id.startsWith(e))||e.kinds&&-1===e.kinds.indexOf(t.kind)||e.authors&&-1===e.authors.indexOf(t.pubkey)&&!e.authors.some(e=>t.pubkey.startsWith(e)))return!1;for(let r in e)if("#"===r[0]){let n=r.slice(1),i=e[`#${n}`];if(i&&!t.tags.find(([e,t])=>e===r.slice(1)&&-1!==i.indexOf(t)))return!1}return(!e.since||!(t.created_at<e.since))&&(!e.until||!(t.created_at>e.until))}(e[r],t))return!0;return!1}(s[t].filters,r)&&(s[t],(u[t]?.event||[]).forEach(e=>e(r)));return}case"COUNT":let r=e[1],n=e[2];s[r]&&(u[r]?.count||[]).forEach(e=>e(n));return;case"EOSE":{let t=e[1];t in u&&(u[t].eose.forEach(e=>e()),u[t].eose=[]);return}case"OK":{let t=e[1],r=e[2],n=e[3]||"";if(t in c){let{resolve:e,reject:i}=c[t];r?e(null):i(Error(n))}return}case"NOTICE":let i=e[1];l.notice.forEach(e=>e(i));return;case"AUTH":{let t=e[1];l.auth?.forEach(e=>e(t));return}}}catch(e){return}}o.onmessage=e=>{i.enqueue(e.data),n||(n=setInterval(h,0))}}))}function f(){return o?.readyState===1}async function d(e){let t=JSON.stringify(e);if(f()||(await new Promise(e=>setTimeout(e,1e3)),f()))try{o.send(t)}catch(e){console.log(e)}}let p=(e,{verb:t="REQ",skipVerification:r=!1,alreadyHaveEvent:n=null,id:i=Math.random().toString().slice(2)}={})=>{s[i]={id:i,filters:e,skipVerification:r,alreadyHaveEvent:n},d([t,i,...e]);let o={sub:(t,o={})=>p(t||e,{skipVerification:o.skipVerification||r,alreadyHaveEvent:o.alreadyHaveEvent||n,id:i}),unsub:()=>{delete s[i],delete u[i],d(["CLOSE",i])},on:(e,t)=>{u[i]=u[i]||{event:[],count:[],eose:[]},u[i][e].push(t)},off:(e,t)=>{let r=u[i],n=r[e].indexOf(t);n>=0&&r[e].splice(n,1)},get events(){return n$(o)}};return o};function g(e,t){return new Promise((r,n)=>{if(!e.id){n(Error(`event ${e} has no id`));return}let i=e.id;d([t,e]),c[i]={resolve:r,reject:n}})}return{url:e,sub:p,on:(e,t)=>{l[e].push(t),"connect"===e&&o?.readyState===1&&t()},off:(e,t)=>{let r=l[e].indexOf(t);-1!==r&&l[e].splice(r,1)},list:(e,t)=>new Promise(n=>{let i=p(e,t),o=[],a=setTimeout(()=>{i.unsub(),n(o)},r);i.on("eose",()=>{i.unsub(),clearTimeout(a),n(o)}),i.on("event",e=>{o.push(e)})}),get:(e,t)=>new Promise(r=>{let i=p([e],t),o=setTimeout(()=>{i.unsub(),r(null)},n);i.on("event",e=>{i.unsub(),clearTimeout(o),r(e)})}),count:e=>new Promise(t=>{let r=p(e,{...p,verb:"COUNT"}),n=setTimeout(()=>{r.unsub(),t(null)},i);r.on("count",e=>{r.unsub(),clearTimeout(n),t(e)})}),async publish(e){await g(e,"EVENT")},async auth(e){await g(e,"AUTH")},connect:async function(){f()||await h()},close(){l=nL(),u={},c={},o?.readyState===WebSocket.OPEN&&o.close()},get status(){return o?.readyState??3}}}async function*n$(e){let t;let r=[],n=e=>{t?(t(e),t=void 0):r.push(e)};e.on("event",n);try{for(;;)if(r.length>0)yield r.shift();else{let e=await new Promise(e=>{t=e});yield e}}finally{e.off("event",n)}}var n_={};no(n_,{BECH32_REGEX:()=>nC,decode:()=>nR,naddrEncode:()=>nP,neventEncode:()=>nT,noteEncode:()=>nK,nprofileEncode:()=>nq,npubEncode:()=>nj,nrelayEncode:()=>nD,nsecEncode:()=>nN});var nC=/[\x21-\x7E]{1,83}1[023456789acdefghjklmnpqrstuvwxyz]{6,}/;function nR(e){let{prefix:t,words:r}=tt.decode(e,5e3),n=new Uint8Array(tt.fromWords(r));switch(t){case"nprofile":{let e=nO(n);if(!e[0]?.[0])throw Error("missing TLV 0 for nprofile");if(32!==e[0][0].length)throw Error("TLV 0 should be 32 bytes");return{type:"nprofile",data:{pubkey:w(e[0][0]),relays:e[1]?e[1].map(e=>nl.decode(e)):[]}}}case"nevent":{let e=nO(n);if(!e[0]?.[0])throw Error("missing TLV 0 for nevent");if(32!==e[0][0].length)throw Error("TLV 0 should be 32 bytes");if(e[2]&&32!==e[2][0].length)throw Error("TLV 2 should be 32 bytes");if(e[3]&&4!==e[3][0].length)throw Error("TLV 3 should be 4 bytes");return{type:"nevent",data:{id:w(e[0][0]),relays:e[1]?e[1].map(e=>nl.decode(e)):[],author:e[2]?.[0]?w(e[2][0]):void 0,kind:e[3]?.[0]?parseInt(w(e[3][0]),16):void 0}}}case"naddr":{let e=nO(n);if(!e[0]?.[0])throw Error("missing TLV 0 for naddr");if(!e[2]?.[0])throw Error("missing TLV 2 for naddr");if(32!==e[2][0].length)throw Error("TLV 2 should be 32 bytes");if(!e[3]?.[0])throw Error("missing TLV 3 for naddr");if(4!==e[3][0].length)throw Error("TLV 3 should be 4 bytes");return{type:"naddr",data:{identifier:nl.decode(e[0][0]),pubkey:w(e[2][0]),kind:parseInt(w(e[3][0]),16),relays:e[1]?e[1].map(e=>nl.decode(e)):[]}}}case"nrelay":{let e=nO(n);if(!e[0]?.[0])throw Error("missing TLV 0 for nrelay");return{type:"nrelay",data:nl.decode(e[0][0])}}case"nsec":case"npub":case"note":return{type:t,data:w(n)};default:throw Error(`unknown prefix ${t}`)}}function nO(e){let t={},r=e;for(;r.length>0;){let e=r[0],n=r[1];if(!n)throw Error(`malformed TLV ${e}`);let i=r.slice(2,2+n);if(r=r.slice(2+n),i.length<n)throw Error(`not enough data to read on TLV ${e}`);t[e]=t[e]||[],t[e].push(i)}return t}function nN(e){return nz("nsec",m(e))}function nj(e){return nz("npub",m(e))}function nK(e){return nz("note",m(e))}function nz(e,t){let r=tt.toWords(t);return tt.encode(e,r,5e3)}function nq(e){return nz("nprofile",nM({0:[m(e.pubkey)],1:(e.relays||[]).map(e=>nu.encode(e))}))}function nT(e){let t;return void 0!=e.kind&&(t=function(e){let t=new Uint8Array(4);return t[0]=e>>24&255,t[1]=e>>16&255,t[2]=e>>8&255,t[3]=255&e,t}(e.kind)),nz("nevent",nM({0:[m(e.id)],1:(e.relays||[]).map(e=>nu.encode(e)),2:e.author?[m(e.author)]:[],3:t?[new Uint8Array(t)]:[]}))}function nP(e){let t=new ArrayBuffer(4);return new DataView(t).setUint32(0,e.kind,!1),nz("naddr",nM({0:[nu.encode(e.identifier)],1:(e.relays||[]).map(e=>nu.encode(e)),2:[m(e.pubkey)],3:[new Uint8Array(t)]}))}function nD(e){return nz("nrelay",nM({0:[nu.encode(e)]}))}function nM(e){let t=[];return Object.entries(e).forEach(([e,r])=>{r.forEach(r=>{let n=new Uint8Array(r.length+2);n.set([parseInt(e)],0),n.set([r.length],1),n.set(r,2),t.push(n)})}),E(...t)}var nF={};async function nV(e,t,r){let n=nG(eL.getSharedSecret(e,"02"+t)),i=Uint8Array.from(k(16)),o=nu.encode(r),a=await crypto.subtle.importKey("raw",n,{name:"AES-CBC"},!1,["encrypt"]),s=await crypto.subtle.encrypt({name:"AES-CBC",iv:i},a,o),l=e8.encode(new Uint8Array(s)),u=e8.encode(new Uint8Array(i.buffer));return`${l}?iv=${u}`}async function nZ(e,t,r){let[n,i]=r.split("?iv="),o=nG(eL.getSharedSecret(e,"02"+t)),a=await crypto.subtle.importKey("raw",o,{name:"AES-CBC"},!1,["decrypt"]),s=e8.decode(n),l=e8.decode(i),u=await crypto.subtle.decrypt({name:"AES-CBC",iv:l},a,s);return nl.decode(u)}function nG(e){return e.slice(1,33)}no(nF,{decrypt:()=>nZ,encrypt:()=>nV}),"undefined"!=typeof crypto&&!crypto.subtle&&crypto.webcrypto&&(crypto.subtle=crypto.webcrypto.subtle),no({},{NIP05_REGEX:()=>nW,queryProfile:()=>nQ,searchDomain:()=>nY,useFetchImplementation:()=>nJ});var nW=/^(?:([\w.+-]+)@)?([\w.-]+)$/;try{i=fetch}catch{}function nJ(e){i=e}async function nY(e,t=""){try{return(await (await i(`https://${e}/.well-known/nostr.json?name=${t}`)).json()).names}catch(e){return{}}}async function nQ(e){let t=e.match(nW);if(!t)return null;let[r,n="_",o]=t;try{let e=await i(`https://${o}/.well-known/nostr.json?name=${n}`),{names:t,relays:r}=function(e){let t={names:{}};for(let[r,n]of Object.entries(e.names))"string"==typeof r&&"string"==typeof n&&(t.names[r]=n);if(e.relays)for(let[r,n]of(t.relays={},Object.entries(e.relays)))"string"==typeof r&&Array.isArray(n)&&(t.relays[r]=n.filter(e=>"string"==typeof e));return t}(await e.json()),a=t[n];return a?{pubkey:a,relays:r?.[a]}:null}catch(e){return null}}function nX(e,t){let r=rD.fromMasterSeed(function(e,t=""){return function(e,t,r,n){var i;let o;let{c:a,dkLen:s,DK:l,PRF:u,PRFSalt:c}=function(e,t,r,n){to(e);let{c:i,dkLen:o,asyncTick:a}=function(e,t){if(void 0!==t&&"[object Object]"!==tf.call(t))throw Error("Options should be object or undefined");return Object.assign(e,t)}({dkLen:32,asyncTick:10},n);if(tn(i),tn(o),tn(a),i<1)throw Error("PBKDF2: iterations (c) should be >= 1");let s=tc(t),l=tc(r),u=new Uint8Array(o),c=tg.create(e,s),h=c._cloneInto().update(l);return{c:i,dkLen:o,asyncTick:a,DK:u,PRF:c,PRFSalt:h}}(e,t,r,n),h=new Uint8Array(4),f=tl(h),d=new Uint8Array(u.outputLen);for(let e=1,t=0;t<s;e++,t+=u.outputLen){let r=l.subarray(t,t+u.outputLen);f.setInt32(0,e,!1),(o=c._cloneInto(o)).update(h).digestInto(d),r.set(d.subarray(0,r.length));for(let e=1;e<a;e++){u._cloneInto(o).update(d).digestInto(d);for(let e=0;e<r.length;e++)r[e]^=d[e]}}return i=o,u.destroy(),c.destroy(),i&&i.destroy(),d.fill(0),l}(t_,tV(e).nfkd,tJ(t),{c:2048,dkLen:64})}(e,t)).derive("m/44'/1237'/0'/0/0").privateKey;if(!r)throw Error("could not derive private key");return w(r)}function n0(){return function(e,t=128){var r;if(tn(t),t%32!=0||t>256)throw TypeError("Invalid entropy");return tZ(r=function(e=32){if(ts&&"function"==typeof ts.getRandomValues)return ts.getRandomValues(new Uint8Array(e));throw Error("crypto.getRandomValues must be defined")}(t/8)),tW(e).encode(r).join(tM(e)?"　":" ")}(tr)}function n1(e){return function(e,t){try{!function(e,t){let{words:r}=tV(e),n=tW(t).decode(r);tZ(n)}(e,t)}catch(e){return!1}return!0}(e,tr)}function n2(e){let t={reply:void 0,root:void 0,mentions:[],profiles:[]},r=[];for(let n of e.tags)"e"===n[0]&&n[1]&&r.push(n),"p"===n[0]&&n[1]&&t.profiles.push({pubkey:n[1],relays:n[2]?[n[2]]:[]});for(let e=0;e<r.length;e++){let[n,i,o,a]=r[e],s={id:i,relays:o?[o]:[]},l=0===e,u=e===r.length-1;if("root"===a){t.root=s;continue}if("reply"===a){t.reply=s;continue}if("mention"===a){t.mentions.push(s);continue}if(l){t.root=s;continue}if(u){t.reply=s;continue}t.mentions.push(s)}return t}function n3(e){let t=0;for(let r=0;r<e.length;r++){let n=parseInt(e[r],16);if(0===n)t+=4;else{t+=Math.clz32(n)-28;break}}return t}function n8(e,t){let r=0,n=["nonce","0",t.toString()];for(e.tags.push(n);;){let i=Math.floor(new Date().getTime()/1e3);if(i!==e.created_at&&(r=0,e.created_at=i),n[1]=(++r).toString(),e.id=nw(e),n3(e.id)>=t)break}return e}function n4(e,t,r,n){return nb({kind:6,tags:[...e.tags??[],["e",t.id,r],["p",t.pubkey]],content:""===e.content?"":JSON.stringify(t),created_at:e.created_at},n)}function n5(e){let t,r;if(6===e.kind){for(let n=e.tags.length-1;n>=0&&(void 0===t||void 0===r);n--){let i=e.tags[n];i.length>=2&&("e"===i[0]&&void 0===t?t=i:"p"===i[0]&&void 0===r&&(r=i))}if(void 0!==t)return{id:t[1],relays:[t[2],r?.[2]].filter(e=>"string"==typeof e),author:r?.[1]}}}function n6(e,{skipVerification:t}={}){let r;let n=n5(e);if(void 0!==n&&""!==e.content){try{r=JSON.parse(e.content)}catch(e){return}if(r.id===n.id&&(t||nE(r)))return r}}no({},{generateSeedWords:()=>n0,privateKeyFromSeedWords:()=>nX,validateWords:()=>n1}),no({},{parse:()=>n2}),no({},{getPow:()=>n3,minePow:()=>n8}),no({},{finishRepostEvent:()=>n4,getRepostedEvent:()=>n6,getRepostedEventPointer:()=>n5}),no({},{NOSTR_URI_REGEX:()=>n7,parse:()=>ie,test:()=>n9});var n7=RegExp(`nostr:(${nC.source})`);function n9(e){return"string"==typeof e&&RegExp(`^${n7.source}$`).test(e)}function ie(e){let t=e.match(RegExp(`^${n7.source}$`));if(!t)throw Error(`Invalid Nostr URI: ${e}`);return{uri:t[0],value:t[1],decoded:nR(t[1])}}function it(e,t,r){let n=t.tags.filter(e=>e.length>=2&&("e"===e[0]||"p"===e[0]));return nb({...e,kind:7,tags:[...e.tags??[],...n,["e",t.id],["p",t.pubkey]],content:e.content??"+"},r)}function ir(e){let t,r;if(7===e.kind){for(let n=e.tags.length-1;n>=0&&(void 0===t||void 0===r);n--){let i=e.tags[n];i.length>=2&&("e"===i[0]&&void 0===t?t=i:"p"===i[0]&&void 0===r&&(r=i))}if(void 0!==t&&void 0!==r)return{id:t[1],relays:[t[2],r[2]].filter(e=>void 0!==e),author:r[1]}}}function ii(e,t){let r=[];(t.kind||-1)>=0&&r.push(`kind=${t.kind}`),t.until&&r.push(`created_at<${t.until}`),t.since&&r.push(`created_at>${t.since}`);let n=r.join("&");if(""===n)throw Error("refusing to create a delegation without any conditions");let i=C(nu.encode(`nostr:delegation:${t.pubkey}:${n}`)),o=w(eF.sign(i,e));return{from:ns(e),to:t.pubkey,cond:n,sig:o}}function io(e){let t=e.tags.find(e=>"delegation"===e[0]&&e.length>=4);if(!t)return null;let r=t[1],n=t[2],i=t[3],o=n.split("&");for(let t=0;t<o.length;t++){let[r,n,i]=o[t].split(/\b/);if("kind"!==r||"="!==n||e.kind!==parseInt(i)){if("created_at"===r&&"<"===n&&e.created_at<parseInt(i))continue;if("created_at"===r&&">"===n&&e.created_at>parseInt(i))continue;else return null}}let a=C(nu.encode(`nostr:delegation:${e.pubkey}:${n}`));return eF.verify(i,a,r)?r:null}no({},{finishReactionEvent:()=>it,getReactedEventPointer:()=>ir}),no({},{createDelegation:()=>ii,getDelegator:()=>io}),no({},{matchAll:()=>is,regex:()=>ia,replaceAll:()=>il});var ia=()=>RegExp(`\\b${n7.source}\\b`,"g");function*is(e){for(let t of e.matchAll(ia()))try{let[e,r]=t;yield{uri:e,value:r,decoded:nR(r),start:t.index,end:t.index+e.length}}catch(e){}}function il(e,t){return e.replaceAll(ia(),(e,r)=>t({uri:e,value:r,decoded:nR(r)}))}no({},{channelCreateEvent:()=>iu,channelHideMessageEvent:()=>id,channelMessageEvent:()=>ih,channelMetadataEvent:()=>ic,channelMuteUserEvent:()=>ip});var iu=(e,t)=>{let r;if("object"==typeof e.content)r=JSON.stringify(e.content);else{if("string"!=typeof e.content)return;r=e.content}return nb({kind:40,tags:[...e.tags??[]],content:r,created_at:e.created_at},t)},ic=(e,t)=>{let r;if("object"==typeof e.content)r=JSON.stringify(e.content);else{if("string"!=typeof e.content)return;r=e.content}return nb({kind:41,tags:[["e",e.channel_create_event_id],...e.tags??[]],content:r,created_at:e.created_at},t)},ih=(e,t)=>{let r=[["e",e.channel_create_event_id,e.relay_url,"root"]];return e.reply_to_channel_message_event_id&&r.push(["e",e.reply_to_channel_message_event_id,e.relay_url,"reply"]),nb({kind:42,tags:[...r,...e.tags??[]],content:e.content,created_at:e.created_at},t)},id=(e,t)=>{let r;if("object"==typeof e.content)r=JSON.stringify(e.content);else{if("string"!=typeof e.content)return;r=e.content}return nb({kind:43,tags:[["e",e.channel_message_event_id],...e.tags??[]],content:r,created_at:e.created_at},t)},ip=(e,t)=>{let r;if("object"==typeof e.content)r=JSON.stringify(e.content);else{if("string"!=typeof e.content)return;r=e.content}return nb({kind:44,tags:[["p",e.pubkey_to_mute],...e.tags??[]],content:r,created_at:e.created_at},t)};no({},{useFetchImplementation:()=>ig,validateGithub:()=>iy});try{o=fetch}catch{}function ig(e){o=e}async function iy(e,t,r){try{return await (await o(`https://gist.github.com/${t}/${r}/raw`)).text()===`Verifying that I control the following Nostr public key: ${e}`}catch(e){return!1}}no({},{authenticate:()=>ib});var ib=async({challenge:e,relay:t,sign:r})=>{let n={kind:22242,created_at:Math.floor(Date.now()/1e3),tags:[["relay",t.url],["challenge",e]],content:""};return t.auth(await r(n))};no({},{decrypt:()=>iv,encrypt:()=>im,utils:()=>iw});var iw={v2:{maxPlaintextSize:65408,minCiphertextSize:100,maxCiphertextSize:102400,getConversationKey:(e,t)=>eL.getSharedSecret(e,"02"+t).subarray(1,33),getMessageKeys(e,t){let r=nn(C,e,t,"nip44-v2",76);return{encryption:r.subarray(0,32),nonce:r.subarray(32,44),auth:r.subarray(44,76)}},calcPadding(e){if(!Number.isSafeInteger(e)||e<0)throw Error("expected positive integer");if(e<=32)return 32;let t=1<<Math.floor(Math.log2(e-1))+1,r=t<=256?32:t/8;return r*(Math.floor((e-1)/r)+1)},pad(e){let t=nu.encode(e),r=t.length;if(r<1||r>=iw.v2.maxPlaintextSize)throw Error("invalid plaintext length: must be between 1b and 64KB");let n=new Uint8Array(iw.v2.calcPadding(r)-r),i=new Uint8Array(2);return new DataView(i.buffer).setUint16(0,r),E(i,t,n)},unpad(e){let t=new DataView(e.buffer).getUint16(0),r=e.subarray(2,2+t);if(0===t||r.length!==t||e.length!==2+iw.v2.calcPadding(t))throw Error("invalid padding");return nl.decode(r)}}};function im(e,t,r={}){let n=r.version??2;if(2!==n)throw Error("unknown encryption version "+n);let i=r.salt??k(32);rW(i,32);let o=iw.v2.getMessageKeys(e,i),a=iw.v2.pad(t),s=r9(o.encryption,o.nonce,a),l=eE(C,o.auth,s);return e8.encode(E(new Uint8Array([n]),i,s,l))}function iv(e,t){let r;let n=iw.v2;rW(e,32);let i=t.length;if(i<n.minCiphertextSize||i>=n.maxCiphertextSize)throw Error("invalid ciphertext length: "+i);if("#"===t[0])throw Error("unknown encryption version");try{r=e8.decode(t)}catch(e){throw Error("invalid base64: "+e.message)}let o=r.subarray(0,1)[0];if(2!==o)throw Error("unknown encryption version "+o);let a=r.subarray(1,33),s=r.subarray(33,-32),l=r.subarray(-32),u=n.getMessageKeys(e,a);if(!function(e,t){if(e.length!==t.length)throw Error("equalBytes: Different size of Uint8Arrays");let r=!0;for(let n=0;n<e.length;n++)r&&(r=e[n]===t[n]);return r}(eE(C,u.auth,s),l))throw Error("invalid MAC");let c=r9(u.encryption,u.nonce,s);return n.unpad(c)}function iE(e){let{pathname:t,searchParams:r}=new URL(e),n=r.get("relay"),i=r.get("secret");if(!t||!n||!i)throw Error("invalid connection string");return{pubkey:t,relay:n,secret:i}}async function ix({pubkey:e,secret:t,invoice:r}){let n=await nV(t,e,JSON.stringify({method:"pay_invoice",params:{invoice:r}}));return nb({kind:23194,created_at:Math.round(Date.now()/1e3),content:n,tags:[["p",e]]},t)}no({},{makeNwcRequestEvent:()=>ix,parseConnectionString:()=>iE}),no({},{getZapEndpoint:()=>ik,makeZapReceipt:()=>iI,makeZapRequest:()=>iB,useFetchImplementation:()=>iA,validateZapRequest:()=>iU});try{a=fetch}catch{}function iA(e){a=e}async function ik(e){try{let t="",{lud06:r,lud16:n}=JSON.parse(e.content);if(r){let{words:e}=tt.decode(r,1e3),n=tt.fromWords(e);t=nl.decode(n)}else{if(!n)return null;let[e,r]=n.split("@");t=`https://${r}/.well-known/lnurlp/${e}`}let i=await a(t),o=await i.json();if(o.allowsNostr&&o.nostrPubkey)return o.callback}catch(e){}return null}function iB({profile:e,event:t,amount:r,relays:n,comment:i=""}){if(!r)throw Error("amount not given");if(!e)throw Error("profile not given");let o={kind:9734,created_at:Math.round(Date.now()/1e3),content:i,tags:[["p",e],["amount",r.toString()],["relays",...n]]};return t&&o.tags.push(["e",t]),o}function iU(e){let t;try{t=JSON.parse(e)}catch(e){return"Invalid zap request JSON."}if(!nv(t))return"Zap request is not a valid Nostr event.";if(!nE(t))return"Invalid signature on zap request.";let r=t.tags.find(([e,t])=>"p"===e&&t);if(!r)return"Zap request doesn't have a 'p' tag.";if(!r[1].match(/^[a-f0-9]{64}$/))return"Zap request 'p' tag is not valid hex.";let n=t.tags.find(([e,t])=>"e"===e&&t);return n&&!n[1].match(/^[a-f0-9]{64}$/)?"Zap request 'e' tag is not valid hex.":t.tags.find(([e,t])=>"relays"===e&&t)?null:"Zap request doesn't have a 'relays' tag."}function iI({zapRequest:e,preimage:t,bolt11:r,paidAt:n}){let i=JSON.parse(e).tags.filter(([e])=>"e"===e||"p"===e||"a"===e),o={kind:9735,created_at:Math.round(n.getTime()/1e3),content:"",tags:[...i,["bolt11",r],["description",e]]};return t&&o.tags.push(["preimage",t]),o}no({},{getToken:()=>iL,unpackEventFromToken:()=>i$,validateEvent:()=>i_,validateToken:()=>iH});var iS="Nostr ";async function iL(e,t,r,n=!1){if(!e||!t)throw Error("Missing loginUrl or httpMethod");let i=function(e=255){return{kind:e,content:"",tags:[],created_at:0}}(27235);i.tags=[["u",e],["method",t]],i.created_at=Math.round(new Date().getTime()/1e3);let o=await r(i);return(n?iS:"")+e8.encode(nu.encode(JSON.stringify(o)))}async function iH(e,t,r){let n=await i$(e).catch(e=>{throw e});return await i_(n,t,r).catch(e=>{throw e})}async function i$(e){if(!e)throw Error("Missing token");e=e.replace(iS,"");let t=nl.decode(e8.decode(e));if(!t||0===t.length||!t.startsWith("{"))throw Error("Invalid token");return JSON.parse(t)}async function i_(e,t,r){if(!e)throw Error("Invalid nostr event");if(!nE(e))throw Error("Invalid nostr event, signature invalid");if(27235!==e.kind)throw Error("Invalid nostr event, kind invalid");if(!e.created_at)throw Error("Invalid nostr event, created_at invalid");if(Math.round(new Date().getTime()/1e3)-e.created_at>60)throw Error("Invalid nostr event, expired");let n=e.tags.find(e=>"u"===e[0]);if(n?.length!==1&&n?.[1]!==t)throw Error("Invalid nostr event, url tag invalid");let i=e.tags.find(e=>"method"===e[0]);if(i?.length!==1&&i?.[1].toLowerCase()!==r.toLowerCase())throw Error("Invalid nostr event, method tag invalid");return!0}}}]);
// @ts-nocheck
var Em = Object.create
var jn = Object.defineProperty,
  _m = Object.defineProperties,
  Gm = Object.getOwnPropertyDescriptor,
  zm = Object.getOwnPropertyDescriptors,
  Rm = Object.getOwnPropertyNames,
  bc = Object.getOwnPropertySymbols,
  Fm = Object.getPrototypeOf,
  Sc = Object.prototype.hasOwnProperty,
  Vm = Object.prototype.propertyIsEnumerable
var vc = (n, t, e) =>
    t in n ? jn(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : (n[t] = e),
  O = (n, t) => {
    for (var e in t || (t = {})) Sc.call(t, e) && vc(n, e, t[e])
    if (bc) for (var e of bc(t)) Vm.call(t, e) && vc(n, e, t[e])
    return n
  },
  H = (n, t) => _m(n, zm(t))
var jm = (n, t) => () => (t || n((t = { exports: {} }).exports, t), t.exports),
  wc = (n, t) => {
    for (var e in t) jn(n, e, { get: t[e], enumerable: !0 })
  },
  Um = (n, t, e, r) => {
    if ((t && typeof t == 'object') || typeof t == 'function')
      for (let o of Rm(t))
        !Sc.call(n, o) &&
          o !== e &&
          jn(n, o, { get: () => t[o], enumerable: !(r = Gm(t, o)) || r.enumerable })
    return n
  }
var km = (n, t, e) => (
  (e = n != null ? Em(Fm(n)) : {}),
  Um(t || !n || !n.__esModule ? jn(e, 'default', { value: n, enumerable: !0 }) : e, n)
)
var hm = jm((Ea, cm) => {
  ;(function (n, t) {
    typeof Ea == 'object' && typeof cm < 'u'
      ? t(Ea)
      : typeof define == 'function' && define.amd
      ? define(['exports'], t)
      : t(((n = typeof globalThis < 'u' ? globalThis : n || self).SVDJS = {}))
  })(Ea, function (n) {
    'use strict'
    ;(n.SVD = function (t, e, r, o, i) {
      if (
        ((e = e === void 0 || e),
        (r = r === void 0 || r),
        (i = 1e-64 / (o = o || Math.pow(2, -52))),
        !t)
      )
        throw new TypeError('Matrix a is not defined')
      var s,
        a,
        l,
        c,
        h,
        p,
        u,
        m,
        f,
        g,
        w,
        y,
        b = t[0].length,
        A = t.length
      if (A < b) throw new TypeError('Invalid matrix: m < n')
      for (var N = [], v = [], k = [], L = e === 'f' ? A : b, d = (g = u = 0); d < A; d++)
        v[d] = new Array(L).fill(0)
      for (d = 0; d < b; d++) k[d] = new Array(b).fill(0)
      var I,
        x = new Array(b).fill(0)
      for (d = 0; d < A; d++) for (s = 0; s < b; s++) v[d][s] = t[d][s]
      for (d = 0; d < b; d++) {
        for (N[d] = u, f = 0, l = d + 1, s = d; s < A; s++) f += Math.pow(v[s][d], 2)
        if (f < i) u = 0
        else
          for (
            m = (p = v[d][d]) * (u = p < 0 ? Math.sqrt(f) : -Math.sqrt(f)) - f,
              v[d][d] = p - u,
              s = l;
            s < b;
            s++
          ) {
            for (f = 0, a = d; a < A; a++) f += v[a][d] * v[a][s]
            for (p = f / m, a = d; a < A; a++) v[a][s] = v[a][s] + p * v[a][d]
          }
        for (x[d] = u, f = 0, s = l; s < b; s++) f += Math.pow(v[d][s], 2)
        if (f < i) u = 0
        else {
          for (
            m = (p = v[d][d + 1]) * (u = p < 0 ? Math.sqrt(f) : -Math.sqrt(f)) - f,
              v[d][d + 1] = p - u,
              s = l;
            s < b;
            s++
          )
            N[s] = v[d][s] / m
          for (s = l; s < A; s++) {
            for (f = 0, a = l; a < b; a++) f += v[s][a] * v[d][a]
            for (a = l; a < b; a++) v[s][a] = v[s][a] + f * N[a]
          }
        }
        g < (w = Math.abs(x[d]) + Math.abs(N[d])) && (g = w)
      }
      if (r)
        for (d = b - 1; 0 <= d; d--) {
          if (u !== 0) {
            for (m = v[d][d + 1] * u, s = l; s < b; s++) k[s][d] = v[d][s] / m
            for (s = l; s < b; s++) {
              for (f = 0, a = l; a < b; a++) f += v[d][a] * k[a][s]
              for (a = l; a < b; a++) k[a][s] = k[a][s] + f * k[a][d]
            }
          }
          for (s = l; s < b; s++) (k[d][s] = 0), (k[s][d] = 0)
          ;(k[d][d] = 1), (u = N[d]), (l = d)
        }
      if (e) {
        if (e === 'f')
          for (d = b; d < A; d++) {
            for (s = b; s < A; s++) v[d][s] = 0
            v[d][d] = 1
          }
        for (d = b - 1; 0 <= d; d--) {
          for (l = d + 1, u = x[d], s = l; s < L; s++) v[d][s] = 0
          if (u !== 0) {
            for (m = v[d][d] * u, s = l; s < L; s++) {
              for (f = 0, a = l; a < A; a++) f += v[a][d] * v[a][s]
              for (p = f / m, a = d; a < A; a++) v[a][s] = v[a][s] + p * v[a][d]
            }
            for (s = d; s < A; s++) v[s][d] = v[s][d] / u
          } else for (s = d; s < A; s++) v[s][d] = 0
          v[d][d] = v[d][d] + 1
        }
      }
      for (o *= g, a = b - 1; 0 <= a; a--)
        for (var C = 0; C < 50; C++) {
          for (I = !1, l = a; 0 <= l; l--) {
            if (Math.abs(N[l]) <= o) {
              I = !0
              break
            }
            if (Math.abs(x[l - 1]) <= o) break
          }
          if (!I) {
            for (
              h = 0, c = l - (f = 1), d = l;
              d < a + 1 && ((p = f * N[d]), (N[d] = h * N[d]), !(Math.abs(p) <= o));
              d++
            )
              if (
                ((u = x[d]),
                (x[d] = Math.sqrt(p * p + u * u)),
                (h = u / (m = x[d])),
                (f = -p / m),
                e)
              )
                for (s = 0; s < A; s++)
                  (w = v[s][c]),
                    (y = v[s][d]),
                    (v[s][c] = w * h + y * f),
                    (v[s][d] = -w * f + y * h)
          }
          if (((y = x[a]), l === a)) {
            if (y < 0 && ((x[a] = -y), r)) for (s = 0; s < b; s++) k[s][a] = -k[s][a]
            break
          }
          for (
            g = x[l],
              p =
                (((w = x[a - 1]) - y) * (w + y) + ((u = N[a - 1]) - (m = N[a])) * (u + m)) /
                (2 * m * w),
              u = Math.sqrt(p * p + 1),
              p = ((g - y) * (g + y) + m * (w / (p < 0 ? p - u : p + u) - m)) / g,
              d = l + (f = h = 1);
            d < a + 1;
            d++
          ) {
            if (
              ((u = N[d]),
              (w = x[d]),
              (m = f * u),
              (u *= h),
              (y = Math.sqrt(p * p + m * m)),
              (p = g * (h = p / (N[d - 1] = y)) + u * (f = m / y)),
              (u = -g * f + u * h),
              (m = w * f),
              (w *= h),
              r)
            )
              for (s = 0; s < b; s++)
                (g = k[s][d - 1]),
                  (y = k[s][d]),
                  (k[s][d - 1] = g * h + y * f),
                  (k[s][d] = -g * f + y * h)
            if (
              ((y = Math.sqrt(p * p + m * m)),
              (p = (h = p / (x[d - 1] = y)) * u + (f = m / y) * w),
              (g = -f * u + h * w),
              e)
            )
              for (s = 0; s < A; s++)
                (w = v[s][d - 1]),
                  (y = v[s][d]),
                  (v[s][d - 1] = w * h + y * f),
                  (v[s][d] = -w * f + y * h)
          }
          ;(N[l] = 0), (N[a] = p), (x[a] = g)
        }
      for (d = 0; d < b; d++) x[d] < o && (x[d] = 0)
      return { u: v, q: x, v: k }
    }),
      (n.VERSION = '1.1.1'),
      Object.defineProperty(n, '__esModule', { value: !0 })
  })
})
import { FileLoader as b1, Loader as v1 } from 'three'
function Lc(n) {
  return Array.isArray(n) ? n : [n]
}
var Hm = typeof global == 'object' && global && global.Object === Object && global,
  Un = Hm
var qm = typeof self == 'object' && self && self.Object === Object && self,
  Wm = Un || qm || Function('return this')(),
  Qe = Wm
var $m = Qe.Symbol,
  Ct = $m
var Cc = Object.prototype,
  Jm = Cc.hasOwnProperty,
  Ym = Cc.toString,
  zi = Ct ? Ct.toStringTag : void 0
function Km(n) {
  var t = Jm.call(n, zi),
    e = n[zi]
  try {
    n[zi] = void 0
    var r = !0
  } catch {}
  var o = Ym.call(n)
  return r && (t ? (n[zi] = e) : delete n[zi]), o
}
var Tc = Km
var Xm = Object.prototype,
  Zm = Xm.toString
function Qm(n) {
  return Zm.call(n)
}
var Nc = Qm
var ef = '[object Null]',
  tf = '[object Undefined]',
  Mc = Ct ? Ct.toStringTag : void 0
function rf(n) {
  return n == null ? (n === void 0 ? tf : ef) : Mc && Mc in Object(n) ? Tc(n) : Nc(n)
}
var zt = rf
function of(n) {
  return n != null && typeof n == 'object'
}
var xt = of
var nf = '[object Symbol]'
function sf(n) {
  return typeof n == 'symbol' || (xt(n) && zt(n) == nf)
}
var Oo = sf
function af(n, t) {
  for (var e = -1, r = n == null ? 0 : n.length, o = Array(r); ++e < r; ) o[e] = t(n[e], e, n)
  return o
}
var kn = af
var lf = Array.isArray,
  et = lf
var cf = 1 / 0,
  Pc = Ct ? Ct.prototype : void 0,
  Oc = Pc ? Pc.toString : void 0
function Ic(n) {
  if (typeof n == 'string') return n
  if (et(n)) return kn(n, Ic) + ''
  if (Oo(n)) return Oc ? Oc.call(n) : ''
  var t = n + ''
  return t == '0' && 1 / n == -cf ? '-0' : t
}
var Ac = Ic
function hf(n) {
  var t = typeof n
  return n != null && (t == 'object' || t == 'function')
}
var bt = hf
function pf(n) {
  return n
}
var Hn = pf
var uf = '[object AsyncFunction]',
  df = '[object Function]',
  mf = '[object GeneratorFunction]',
  ff = '[object Proxy]'
function yf(n) {
  if (!bt(n)) return !1
  var t = zt(n)
  return t == df || t == mf || t == uf || t == ff
}
var Io = yf
var gf = Qe['__core-js_shared__'],
  qn = gf
var Dc = (function () {
  var n = /[^.]+$/.exec((qn && qn.keys && qn.keys.IE_PROTO) || '')
  return n ? 'Symbol(src)_1.' + n : ''
})()
function xf(n) {
  return !!Dc && Dc in n
}
var Bc = xf
var bf = Function.prototype,
  vf = bf.toString
function Sf(n) {
  if (n != null) {
    try {
      return vf.call(n)
    } catch {}
    try {
      return n + ''
    } catch {}
  }
  return ''
}
var Mr = Sf
var wf = /[\\^$.*+?()[\]{}|]/g,
  Lf = /^\[object .+?Constructor\]$/,
  Cf = Function.prototype,
  Tf = Object.prototype,
  Nf = Cf.toString,
  Mf = Tf.hasOwnProperty,
  Pf = RegExp(
    '^' +
      Nf.call(Mf)
        .replace(wf, '\\$&')
        .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
      '$'
  )
function Of(n) {
  if (!bt(n) || Bc(n)) return !1
  var t = Io(n) ? Pf : Lf
  return t.test(Mr(n))
}
var Ec = Of
function If(n, t) {
  return n == null ? void 0 : n[t]
}
var _c = If
function Af(n, t) {
  var e = _c(n, t)
  return Ec(e) ? e : void 0
}
var It = Af
var Df = It(Qe, 'WeakMap'),
  Wn = Df
var Gc = Object.create,
  Bf = (function () {
    function n() {}
    return function (t) {
      if (!bt(t)) return {}
      if (Gc) return Gc(t)
      n.prototype = t
      var e = new n()
      return (n.prototype = void 0), e
    }
  })(),
  zc = Bf
function Ef(n, t, e) {
  switch (e.length) {
    case 0:
      return n.call(t)
    case 1:
      return n.call(t, e[0])
    case 2:
      return n.call(t, e[0], e[1])
    case 3:
      return n.call(t, e[0], e[1], e[2])
  }
  return n.apply(t, e)
}
var Rc = Ef
function _f(n, t) {
  var e = -1,
    r = n.length
  for (t || (t = Array(r)); ++e < r; ) t[e] = n[e]
  return t
}
var $n = _f
var Gf = 800,
  zf = 16,
  Rf = Date.now
function Ff(n) {
  var t = 0,
    e = 0
  return function () {
    var r = Rf(),
      o = zf - (r - e)
    if (((e = r), o > 0)) {
      if (++t >= Gf) return arguments[0]
    } else t = 0
    return n.apply(void 0, arguments)
  }
}
var Fc = Ff
function Vf(n) {
  return function () {
    return n
  }
}
var Vc = Vf
var jf = (function () {
    try {
      var n = It(Object, 'defineProperty')
      return n({}, '', {}), n
    } catch {}
  })(),
  Ao = jf
var Uf = Ao
    ? function (n, t) {
        return Ao(n, 'toString', { configurable: !0, enumerable: !1, value: Vc(t), writable: !0 })
      }
    : Hn,
  jc = Uf
var kf = Fc(jc),
  Jn = kf
function Hf(n, t) {
  for (var e = -1, r = n == null ? 0 : n.length; ++e < r && t(n[e], e, n) !== !1; );
  return n
}
var Uc = Hf
var qf = 9007199254740991,
  Wf = /^(?:0|[1-9]\d*)$/
function $f(n, t) {
  var e = typeof n
  return (
    (t = t == null ? qf : t),
    !!t && (e == 'number' || (e != 'symbol' && Wf.test(n))) && n > -1 && n % 1 == 0 && n < t
  )
}
var Yn = $f
function Jf(n, t, e) {
  t == '__proto__' && Ao
    ? Ao(n, t, { configurable: !0, enumerable: !0, value: e, writable: !0 })
    : (n[t] = e)
}
var Do = Jf
function Yf(n, t) {
  return n === t || (n !== n && t !== t)
}
var jr = Yf
var Kf = Object.prototype,
  Xf = Kf.hasOwnProperty
function Zf(n, t, e) {
  var r = n[t]
  ;(!(Xf.call(n, t) && jr(r, e)) || (e === void 0 && !(t in n))) && Do(n, t, e)
}
var Kn = Zf
function Qf(n, t, e, r) {
  var o = !e
  e || (e = {})
  for (var i = -1, s = t.length; ++i < s; ) {
    var a = t[i],
      l = r ? r(e[a], n[a], a, e, n) : void 0
    l === void 0 && (l = n[a]), o ? Do(e, a, l) : Kn(e, a, l)
  }
  return e
}
var kt = Qf
var kc = Math.max
function ey(n, t, e) {
  return (
    (t = kc(t === void 0 ? n.length - 1 : t, 0)),
    function () {
      for (var r = arguments, o = -1, i = kc(r.length - t, 0), s = Array(i); ++o < i; )
        s[o] = r[t + o]
      o = -1
      for (var a = Array(t + 1); ++o < t; ) a[o] = r[o]
      return (a[t] = e(s)), Rc(n, this, a)
    }
  )
}
var Xn = ey
function ty(n, t) {
  return Jn(Xn(n, t, Hn), n + '')
}
var Hc = ty
var ry = 9007199254740991
function oy(n) {
  return typeof n == 'number' && n > -1 && n % 1 == 0 && n <= ry
}
var Zn = oy
function iy(n) {
  return n != null && Zn(n.length) && !Io(n)
}
var Ur = iy
function ny(n, t, e) {
  if (!bt(e)) return !1
  var r = typeof t
  return (r == 'number' ? Ur(e) && Yn(t, e.length) : r == 'string' && t in e) ? jr(e[t], n) : !1
}
var qc = ny
function sy(n) {
  return Hc(function (t, e) {
    var r = -1,
      o = e.length,
      i = o > 1 ? e[o - 1] : void 0,
      s = o > 2 ? e[2] : void 0
    for (
      i = n.length > 3 && typeof i == 'function' ? (o--, i) : void 0,
        s && qc(e[0], e[1], s) && ((i = o < 3 ? void 0 : i), (o = 1)),
        t = Object(t);
      ++r < o;

    ) {
      var a = e[r]
      a && n(t, a, r, i)
    }
    return t
  })
}
var Wc = sy
var ay = Object.prototype
function ly(n) {
  var t = n && n.constructor,
    e = (typeof t == 'function' && t.prototype) || ay
  return n === e
}
var Bo = ly
function cy(n, t) {
  for (var e = -1, r = Array(n); ++e < n; ) r[e] = t(e)
  return r
}
var $c = cy
var hy = '[object Arguments]'
function py(n) {
  return xt(n) && zt(n) == hy
}
var za = py
var Jc = Object.prototype,
  uy = Jc.hasOwnProperty,
  dy = Jc.propertyIsEnumerable,
  my = za(
    (function () {
      return arguments
    })()
  )
    ? za
    : function (n) {
        return xt(n) && uy.call(n, 'callee') && !dy.call(n, 'callee')
      },
  ho = my
function fy() {
  return !1
}
var Yc = fy
var Zc = typeof exports == 'object' && exports && !exports.nodeType && exports,
  Kc = Zc && typeof module == 'object' && module && !module.nodeType && module,
  yy = Kc && Kc.exports === Zc,
  Xc = yy ? Qe.Buffer : void 0,
  gy = Xc ? Xc.isBuffer : void 0,
  xy = gy || Yc,
  Eo = xy
var by = '[object Arguments]',
  vy = '[object Array]',
  Sy = '[object Boolean]',
  wy = '[object Date]',
  Ly = '[object Error]',
  Cy = '[object Function]',
  Ty = '[object Map]',
  Ny = '[object Number]',
  My = '[object Object]',
  Py = '[object RegExp]',
  Oy = '[object Set]',
  Iy = '[object String]',
  Ay = '[object WeakMap]',
  Dy = '[object ArrayBuffer]',
  By = '[object DataView]',
  Ey = '[object Float32Array]',
  _y = '[object Float64Array]',
  Gy = '[object Int8Array]',
  zy = '[object Int16Array]',
  Ry = '[object Int32Array]',
  Fy = '[object Uint8Array]',
  Vy = '[object Uint8ClampedArray]',
  jy = '[object Uint16Array]',
  Uy = '[object Uint32Array]',
  Ue = {}
Ue[Ey] = Ue[_y] = Ue[Gy] = Ue[zy] = Ue[Ry] = Ue[Fy] = Ue[Vy] = Ue[jy] = Ue[Uy] = !0
Ue[by] =
  Ue[vy] =
  Ue[Dy] =
  Ue[Sy] =
  Ue[By] =
  Ue[wy] =
  Ue[Ly] =
  Ue[Cy] =
  Ue[Ty] =
  Ue[Ny] =
  Ue[My] =
  Ue[Py] =
  Ue[Oy] =
  Ue[Iy] =
  Ue[Ay] =
    !1
function ky(n) {
  return xt(n) && Zn(n.length) && !!Ue[zt(n)]
}
var Qc = ky
function Hy(n) {
  return function (t) {
    return n(t)
  }
}
var _o = Hy
var eh = typeof exports == 'object' && exports && !exports.nodeType && exports,
  Ri = eh && typeof module == 'object' && module && !module.nodeType && module,
  qy = Ri && Ri.exports === eh,
  Ra = qy && Un.process,
  Wy = (function () {
    try {
      var n = Ri && Ri.require && Ri.require('util').types
      return n || (Ra && Ra.binding && Ra.binding('util'))
    } catch {}
  })(),
  Pr = Wy
var th = Pr && Pr.isTypedArray,
  $y = th ? _o(th) : Qc,
  Qn = $y
var Jy = Object.prototype,
  Yy = Jy.hasOwnProperty
function Ky(n, t) {
  var e = et(n),
    r = !e && ho(n),
    o = !e && !r && Eo(n),
    i = !e && !r && !o && Qn(n),
    s = e || r || o || i,
    a = s ? $c(n.length, String) : [],
    l = a.length
  for (var c in n)
    (t || Yy.call(n, c)) &&
      !(
        s &&
        (c == 'length' ||
          (o && (c == 'offset' || c == 'parent')) ||
          (i && (c == 'buffer' || c == 'byteLength' || c == 'byteOffset')) ||
          Yn(c, l))
      ) &&
      a.push(c)
  return a
}
var es = Ky
function Xy(n, t) {
  return function (e) {
    return n(t(e))
  }
}
var ts = Xy
var Zy = ts(Object.keys, Object),
  rh = Zy
var Qy = Object.prototype,
  eg = Qy.hasOwnProperty
function tg(n) {
  if (!Bo(n)) return rh(n)
  var t = []
  for (var e in Object(n)) eg.call(n, e) && e != 'constructor' && t.push(e)
  return t
}
var oh = tg
function rg(n) {
  return Ur(n) ? es(n) : oh(n)
}
var Go = rg
function og(n) {
  var t = []
  if (n != null) for (var e in Object(n)) t.push(e)
  return t
}
var ih = og
var ig = Object.prototype,
  ng = ig.hasOwnProperty
function sg(n) {
  if (!bt(n)) return ih(n)
  var t = Bo(n),
    e = []
  for (var r in n) (r == 'constructor' && (t || !ng.call(n, r))) || e.push(r)
  return e
}
var nh = sg
function ag(n) {
  return Ur(n) ? es(n, !0) : nh(n)
}
var lr = ag
var lg = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
  cg = /^\w*$/
function hg(n, t) {
  if (et(n)) return !1
  var e = typeof n
  return e == 'number' || e == 'symbol' || e == 'boolean' || n == null || Oo(n)
    ? !0
    : cg.test(n) || !lg.test(n) || (t != null && n in Object(t))
}
var sh = hg
var pg = It(Object, 'create'),
  Or = pg
function ug() {
  ;(this.__data__ = Or ? Or(null) : {}), (this.size = 0)
}
var ah = ug
function dg(n) {
  var t = this.has(n) && delete this.__data__[n]
  return (this.size -= t ? 1 : 0), t
}
var lh = dg
var mg = '__lodash_hash_undefined__',
  fg = Object.prototype,
  yg = fg.hasOwnProperty
function gg(n) {
  var t = this.__data__
  if (Or) {
    var e = t[n]
    return e === mg ? void 0 : e
  }
  return yg.call(t, n) ? t[n] : void 0
}
var ch = gg
var xg = Object.prototype,
  bg = xg.hasOwnProperty
function vg(n) {
  var t = this.__data__
  return Or ? t[n] !== void 0 : bg.call(t, n)
}
var hh = vg
var Sg = '__lodash_hash_undefined__'
function wg(n, t) {
  var e = this.__data__
  return (this.size += this.has(n) ? 0 : 1), (e[n] = Or && t === void 0 ? Sg : t), this
}
var ph = wg
function zo(n) {
  var t = -1,
    e = n == null ? 0 : n.length
  for (this.clear(); ++t < e; ) {
    var r = n[t]
    this.set(r[0], r[1])
  }
}
zo.prototype.clear = ah
zo.prototype.delete = lh
zo.prototype.get = ch
zo.prototype.has = hh
zo.prototype.set = ph
var Fa = zo
function Lg() {
  ;(this.__data__ = []), (this.size = 0)
}
var uh = Lg
function Cg(n, t) {
  for (var e = n.length; e--; ) if (jr(n[e][0], t)) return e
  return -1
}
var kr = Cg
var Tg = Array.prototype,
  Ng = Tg.splice
function Mg(n) {
  var t = this.__data__,
    e = kr(t, n)
  if (e < 0) return !1
  var r = t.length - 1
  return e == r ? t.pop() : Ng.call(t, e, 1), --this.size, !0
}
var dh = Mg
function Pg(n) {
  var t = this.__data__,
    e = kr(t, n)
  return e < 0 ? void 0 : t[e][1]
}
var mh = Pg
function Og(n) {
  return kr(this.__data__, n) > -1
}
var fh = Og
function Ig(n, t) {
  var e = this.__data__,
    r = kr(e, n)
  return r < 0 ? (++this.size, e.push([n, t])) : (e[r][1] = t), this
}
var yh = Ig
function Ro(n) {
  var t = -1,
    e = n == null ? 0 : n.length
  for (this.clear(); ++t < e; ) {
    var r = n[t]
    this.set(r[0], r[1])
  }
}
Ro.prototype.clear = uh
Ro.prototype.delete = dh
Ro.prototype.get = mh
Ro.prototype.has = fh
Ro.prototype.set = yh
var Hr = Ro
var Ag = It(Qe, 'Map'),
  qr = Ag
function Dg() {
  ;(this.size = 0), (this.__data__ = { hash: new Fa(), map: new (qr || Hr)(), string: new Fa() })
}
var gh = Dg
function Bg(n) {
  var t = typeof n
  return t == 'string' || t == 'number' || t == 'symbol' || t == 'boolean'
    ? n !== '__proto__'
    : n === null
}
var xh = Bg
function Eg(n, t) {
  var e = n.__data__
  return xh(t) ? e[typeof t == 'string' ? 'string' : 'hash'] : e.map
}
var Wr = Eg
function _g(n) {
  var t = Wr(this, n).delete(n)
  return (this.size -= t ? 1 : 0), t
}
var bh = _g
function Gg(n) {
  return Wr(this, n).get(n)
}
var vh = Gg
function zg(n) {
  return Wr(this, n).has(n)
}
var Sh = zg
function Rg(n, t) {
  var e = Wr(this, n),
    r = e.size
  return e.set(n, t), (this.size += e.size == r ? 0 : 1), this
}
var wh = Rg
function Fo(n) {
  var t = -1,
    e = n == null ? 0 : n.length
  for (this.clear(); ++t < e; ) {
    var r = n[t]
    this.set(r[0], r[1])
  }
}
Fo.prototype.clear = gh
Fo.prototype.delete = bh
Fo.prototype.get = vh
Fo.prototype.has = Sh
Fo.prototype.set = wh
var Fi = Fo
var Fg = 'Expected a function'
function Va(n, t) {
  if (typeof n != 'function' || (t != null && typeof t != 'function')) throw new TypeError(Fg)
  var e = function () {
    var r = arguments,
      o = t ? t.apply(this, r) : r[0],
      i = e.cache
    if (i.has(o)) return i.get(o)
    var s = n.apply(this, r)
    return (e.cache = i.set(o, s) || i), s
  }
  return (e.cache = new (Va.Cache || Fi)()), e
}
Va.Cache = Fi
var Lh = Va
var Vg = 500
function jg(n) {
  var t = Lh(n, function (r) {
      return e.size === Vg && e.clear(), r
    }),
    e = t.cache
  return t
}
var Ch = jg
var Ug =
    /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
  kg = /\\(\\)?/g,
  Hg = Ch(function (n) {
    var t = []
    return (
      n.charCodeAt(0) === 46 && t.push(''),
      n.replace(Ug, function (e, r, o, i) {
        t.push(o ? i.replace(kg, '$1') : r || e)
      }),
      t
    )
  }),
  Th = Hg
function qg(n) {
  return n == null ? '' : Ac(n)
}
var Nh = qg
function Wg(n, t) {
  return et(n) ? n : sh(n, t) ? [n] : Th(Nh(n))
}
var Vo = Wg
var $g = 1 / 0
function Jg(n) {
  if (typeof n == 'string' || Oo(n)) return n
  var t = n + ''
  return t == '0' && 1 / n == -$g ? '-0' : t
}
var rs = Jg
function Yg(n, t) {
  t = Vo(t, n)
  for (var e = 0, r = t.length; n != null && e < r; ) n = n[rs(t[e++])]
  return e && e == r ? n : void 0
}
var Mh = Yg
function Kg(n, t) {
  for (var e = -1, r = t.length, o = n.length; ++e < r; ) n[o + e] = t[e]
  return n
}
var jo = Kg
var Ph = Ct ? Ct.isConcatSpreadable : void 0
function Xg(n) {
  return et(n) || ho(n) || !!(Ph && n && n[Ph])
}
var Oh = Xg
function Ih(n, t, e, r, o) {
  var i = -1,
    s = n.length
  for (e || (e = Oh), o || (o = []); ++i < s; ) {
    var a = n[i]
    t > 0 && e(a) ? (t > 1 ? Ih(a, t - 1, e, r, o) : jo(o, a)) : r || (o[o.length] = a)
  }
  return o
}
var Ah = Ih
function Zg(n) {
  var t = n == null ? 0 : n.length
  return t ? Ah(n, 1) : []
}
var Dh = Zg
function Qg(n) {
  return Jn(Xn(n, void 0, Dh), n + '')
}
var Bh = Qg
var ex = ts(Object.getPrototypeOf, Object),
  Uo = ex
var tx = '[object Object]',
  rx = Function.prototype,
  ox = Object.prototype,
  Eh = rx.toString,
  ix = ox.hasOwnProperty,
  nx = Eh.call(Object)
function sx(n) {
  if (!xt(n) || zt(n) != tx) return !1
  var t = Uo(n)
  if (t === null) return !0
  var e = ix.call(t, 'constructor') && t.constructor
  return typeof e == 'function' && e instanceof e && Eh.call(e) == nx
}
var os = sx
function ax(n, t, e) {
  var r = -1,
    o = n.length
  t < 0 && (t = -t > o ? 0 : o + t),
    (e = e > o ? o : e),
    e < 0 && (e += o),
    (o = t > e ? 0 : (e - t) >>> 0),
    (t >>>= 0)
  for (var i = Array(o); ++r < o; ) i[r] = n[r + t]
  return i
}
var _h = ax
function lx() {
  ;(this.__data__ = new Hr()), (this.size = 0)
}
var Gh = lx
function cx(n) {
  var t = this.__data__,
    e = t.delete(n)
  return (this.size = t.size), e
}
var zh = cx
function hx(n) {
  return this.__data__.get(n)
}
var Rh = hx
function px(n) {
  return this.__data__.has(n)
}
var Fh = px
var ux = 200
function dx(n, t) {
  var e = this.__data__
  if (e instanceof Hr) {
    var r = e.__data__
    if (!qr || r.length < ux - 1) return r.push([n, t]), (this.size = ++e.size), this
    e = this.__data__ = new Fi(r)
  }
  return e.set(n, t), (this.size = e.size), this
}
var Vh = dx
function ko(n) {
  var t = (this.__data__ = new Hr(n))
  this.size = t.size
}
ko.prototype.clear = Gh
ko.prototype.delete = zh
ko.prototype.get = Rh
ko.prototype.has = Fh
ko.prototype.set = Vh
var is = ko
function mx(n, t) {
  return n && kt(t, Go(t), n)
}
var jh = mx
function fx(n, t) {
  return n && kt(t, lr(t), n)
}
var Uh = fx
var Wh = typeof exports == 'object' && exports && !exports.nodeType && exports,
  kh = Wh && typeof module == 'object' && module && !module.nodeType && module,
  yx = kh && kh.exports === Wh,
  Hh = yx ? Qe.Buffer : void 0,
  qh = Hh ? Hh.allocUnsafe : void 0
function gx(n, t) {
  if (t) return n.slice()
  var e = n.length,
    r = qh ? qh(e) : new n.constructor(e)
  return n.copy(r), r
}
var ns = gx
function xx(n, t) {
  for (var e = -1, r = n == null ? 0 : n.length, o = 0, i = []; ++e < r; ) {
    var s = n[e]
    t(s, e, n) && (i[o++] = s)
  }
  return i
}
var $h = xx
function bx() {
  return []
}
var ss = bx
var vx = Object.prototype,
  Sx = vx.propertyIsEnumerable,
  Jh = Object.getOwnPropertySymbols,
  wx = Jh
    ? function (n) {
        return n == null
          ? []
          : ((n = Object(n)),
            $h(Jh(n), function (t) {
              return Sx.call(n, t)
            }))
      }
    : ss,
  Ho = wx
function Lx(n, t) {
  return kt(n, Ho(n), t)
}
var Yh = Lx
var Cx = Object.getOwnPropertySymbols,
  Tx = Cx
    ? function (n) {
        for (var t = []; n; ) jo(t, Ho(n)), (n = Uo(n))
        return t
      }
    : ss,
  as = Tx
function Nx(n, t) {
  return kt(n, as(n), t)
}
var Kh = Nx
function Mx(n, t, e) {
  var r = t(n)
  return et(n) ? r : jo(r, e(n))
}
var ls = Mx
function Px(n) {
  return ls(n, Go, Ho)
}
var Xh = Px
function Ox(n) {
  return ls(n, lr, as)
}
var cs = Ox
var Ix = It(Qe, 'DataView'),
  hs = Ix
var Ax = It(Qe, 'Promise'),
  ps = Ax
var Dx = It(Qe, 'Set'),
  us = Dx
var Zh = '[object Map]',
  Bx = '[object Object]',
  Qh = '[object Promise]',
  ep = '[object Set]',
  tp = '[object WeakMap]',
  rp = '[object DataView]',
  Ex = Mr(hs),
  _x = Mr(qr),
  Gx = Mr(ps),
  zx = Mr(us),
  Rx = Mr(Wn),
  po = zt
;((hs && po(new hs(new ArrayBuffer(1))) != rp) ||
  (qr && po(new qr()) != Zh) ||
  (ps && po(ps.resolve()) != Qh) ||
  (us && po(new us()) != ep) ||
  (Wn && po(new Wn()) != tp)) &&
  (po = function (n) {
    var t = zt(n),
      e = t == Bx ? n.constructor : void 0,
      r = e ? Mr(e) : ''
    if (r)
      switch (r) {
        case Ex:
          return rp
        case _x:
          return Zh
        case Gx:
          return Qh
        case zx:
          return ep
        case Rx:
          return tp
      }
    return t
  })
var qo = po
var Fx = Object.prototype,
  Vx = Fx.hasOwnProperty
function jx(n) {
  var t = n.length,
    e = new n.constructor(t)
  return (
    t &&
      typeof n[0] == 'string' &&
      Vx.call(n, 'index') &&
      ((e.index = n.index), (e.input = n.input)),
    e
  )
}
var op = jx
var Ux = Qe.Uint8Array,
  ja = Ux
function kx(n) {
  var t = new n.constructor(n.byteLength)
  return new ja(t).set(new ja(n)), t
}
var Wo = kx
function Hx(n, t) {
  var e = t ? Wo(n.buffer) : n.buffer
  return new n.constructor(e, n.byteOffset, n.byteLength)
}
var ip = Hx
var qx = /\w*$/
function Wx(n) {
  var t = new n.constructor(n.source, qx.exec(n))
  return (t.lastIndex = n.lastIndex), t
}
var np = Wx
var sp = Ct ? Ct.prototype : void 0,
  ap = sp ? sp.valueOf : void 0
function $x(n) {
  return ap ? Object(ap.call(n)) : {}
}
var lp = $x
function Jx(n, t) {
  var e = t ? Wo(n.buffer) : n.buffer
  return new n.constructor(e, n.byteOffset, n.length)
}
var ds = Jx
var Yx = '[object Boolean]',
  Kx = '[object Date]',
  Xx = '[object Map]',
  Zx = '[object Number]',
  Qx = '[object RegExp]',
  e0 = '[object Set]',
  t0 = '[object String]',
  r0 = '[object Symbol]',
  o0 = '[object ArrayBuffer]',
  i0 = '[object DataView]',
  n0 = '[object Float32Array]',
  s0 = '[object Float64Array]',
  a0 = '[object Int8Array]',
  l0 = '[object Int16Array]',
  c0 = '[object Int32Array]',
  h0 = '[object Uint8Array]',
  p0 = '[object Uint8ClampedArray]',
  u0 = '[object Uint16Array]',
  d0 = '[object Uint32Array]'
function m0(n, t, e) {
  var r = n.constructor
  switch (t) {
    case o0:
      return Wo(n)
    case Yx:
    case Kx:
      return new r(+n)
    case i0:
      return ip(n, e)
    case n0:
    case s0:
    case a0:
    case l0:
    case c0:
    case h0:
    case p0:
    case u0:
    case d0:
      return ds(n, e)
    case Xx:
      return new r()
    case Zx:
    case t0:
      return new r(n)
    case Qx:
      return np(n)
    case e0:
      return new r()
    case r0:
      return lp(n)
  }
}
var cp = m0
function f0(n) {
  return typeof n.constructor == 'function' && !Bo(n) ? zc(Uo(n)) : {}
}
var ms = f0
var y0 = '[object Map]'
function g0(n) {
  return xt(n) && qo(n) == y0
}
var hp = g0
var pp = Pr && Pr.isMap,
  x0 = pp ? _o(pp) : hp,
  up = x0
var b0 = '[object Set]'
function v0(n) {
  return xt(n) && qo(n) == b0
}
var dp = v0
var mp = Pr && Pr.isSet,
  S0 = mp ? _o(mp) : dp,
  fp = S0
var w0 = 1,
  L0 = 2,
  C0 = 4,
  yp = '[object Arguments]',
  T0 = '[object Array]',
  N0 = '[object Boolean]',
  M0 = '[object Date]',
  P0 = '[object Error]',
  gp = '[object Function]',
  O0 = '[object GeneratorFunction]',
  I0 = '[object Map]',
  A0 = '[object Number]',
  xp = '[object Object]',
  D0 = '[object RegExp]',
  B0 = '[object Set]',
  E0 = '[object String]',
  _0 = '[object Symbol]',
  G0 = '[object WeakMap]',
  z0 = '[object ArrayBuffer]',
  R0 = '[object DataView]',
  F0 = '[object Float32Array]',
  V0 = '[object Float64Array]',
  j0 = '[object Int8Array]',
  U0 = '[object Int16Array]',
  k0 = '[object Int32Array]',
  H0 = '[object Uint8Array]',
  q0 = '[object Uint8ClampedArray]',
  W0 = '[object Uint16Array]',
  $0 = '[object Uint32Array]',
  Re = {}
Re[yp] =
  Re[T0] =
  Re[z0] =
  Re[R0] =
  Re[N0] =
  Re[M0] =
  Re[F0] =
  Re[V0] =
  Re[j0] =
  Re[U0] =
  Re[k0] =
  Re[I0] =
  Re[A0] =
  Re[xp] =
  Re[D0] =
  Re[B0] =
  Re[E0] =
  Re[_0] =
  Re[H0] =
  Re[q0] =
  Re[W0] =
  Re[$0] =
    !0
Re[P0] = Re[gp] = Re[G0] = !1
function fs(n, t, e, r, o, i) {
  var s,
    a = t & w0,
    l = t & L0,
    c = t & C0
  if ((e && (s = o ? e(n, r, o, i) : e(n)), s !== void 0)) return s
  if (!bt(n)) return n
  var h = et(n)
  if (h) {
    if (((s = op(n)), !a)) return $n(n, s)
  } else {
    var p = qo(n),
      u = p == gp || p == O0
    if (Eo(n)) return ns(n, a)
    if (p == xp || p == yp || (u && !o)) {
      if (((s = l || u ? {} : ms(n)), !a)) return l ? Kh(n, Uh(s, n)) : Yh(n, jh(s, n))
    } else {
      if (!Re[p]) return o ? n : {}
      s = cp(n, p, a)
    }
  }
  i || (i = new is())
  var m = i.get(n)
  if (m) return m
  i.set(n, s),
    fp(n)
      ? n.forEach(function (w) {
          s.add(fs(w, t, e, w, n, i))
        })
      : up(n) &&
        n.forEach(function (w, y) {
          s.set(y, fs(w, t, e, y, n, i))
        })
  var f = c ? (l ? cs : Xh) : l ? lr : Go,
    g = h ? void 0 : f(n)
  return (
    Uc(g || n, function (w, y) {
      g && ((y = w), (w = n[y])), Kn(s, y, fs(w, t, e, y, n, i))
    }),
    s
  )
}
var ys = fs
var J0 = 1,
  Y0 = 4
function K0(n) {
  return ys(n, J0 | Y0)
}
var Vi = K0
function X0(n) {
  return function (t, e, r) {
    for (var o = -1, i = Object(t), s = r(t), a = s.length; a--; ) {
      var l = s[n ? a : ++o]
      if (e(i[l], l, i) === !1) break
    }
    return t
  }
}
var bp = X0
var Z0 = bp(),
  vp = Z0
function Q0(n, t, e) {
  ;((e !== void 0 && !jr(n[t], e)) || (e === void 0 && !(t in n))) && Do(n, t, e)
}
var ji = Q0
function eb(n) {
  return xt(n) && Ur(n)
}
var Sp = eb
function tb(n, t) {
  if (!(t === 'constructor' && typeof n[t] == 'function') && t != '__proto__') return n[t]
}
var Ui = tb
function rb(n) {
  return kt(n, lr(n))
}
var wp = rb
function ob(n, t, e, r, o, i, s) {
  var a = Ui(n, e),
    l = Ui(t, e),
    c = s.get(l)
  if (c) {
    ji(n, e, c)
    return
  }
  var h = i ? i(a, l, e + '', n, t, s) : void 0,
    p = h === void 0
  if (p) {
    var u = et(l),
      m = !u && Eo(l),
      f = !u && !m && Qn(l)
    ;(h = l),
      u || m || f
        ? et(a)
          ? (h = a)
          : Sp(a)
          ? (h = $n(a))
          : m
          ? ((p = !1), (h = ns(l, !0)))
          : f
          ? ((p = !1), (h = ds(l, !0)))
          : (h = [])
        : os(l) || ho(l)
        ? ((h = a), ho(a) ? (h = wp(a)) : (!bt(a) || Io(a)) && (h = ms(l)))
        : (p = !1)
  }
  p && (s.set(l, h), o(h, l, r, i, s), s.delete(l)), ji(n, e, h)
}
var Lp = ob
function Cp(n, t, e, r, o) {
  n !== t &&
    vp(
      t,
      function (i, s) {
        if ((o || (o = new is()), bt(i))) Lp(n, t, s, e, Cp, r, o)
        else {
          var a = r ? r(Ui(n, s), i, s + '', n, t, o) : void 0
          a === void 0 && (a = i), ji(n, s, a)
        }
      },
      lr
    )
}
var Tp = Cp
function ib(n) {
  var t = n == null ? 0 : n.length
  return t ? n[t - 1] : void 0
}
var Np = ib
function nb(n, t) {
  return t.length < 2 ? n : Mh(n, _h(t, 0, -1))
}
var Mp = nb
var sb = Wc(function (n, t, e) {
    Tp(n, t, e)
  }),
  uo = sb
function ab(n, t) {
  return (t = Vo(t, n)), (n = Mp(n, t)), n == null || delete n[rs(Np(t))]
}
var Pp = ab
function lb(n) {
  return os(n) ? void 0 : n
}
var Op = lb
var cb = 1,
  hb = 2,
  pb = 4,
  ub = Bh(function (n, t) {
    var e = {}
    if (n == null) return e
    var r = !1
    ;(t = kn(t, function (i) {
      return (i = Vo(i, n)), r || (r = i.length > 1), i
    })),
      kt(n, cs(n), e),
      r && (e = ys(e, cb | hb | pb, Op))
    for (var o = t.length; o--; ) Pp(e, t[o])
    return e
  }),
  $o = ub
var Jo
;((e) => {
  e.all = ['PerspectiveCamera', 'OrthographicCamera']
  function t(r) {
    return e.all.includes(r)
  }
  e.is = t
})(Jo || (Jo = {}))
var mo
;((o) => {
  ;(o.DefaultUp = [0, 1, 0]),
    (o.DefaultTargetOffset = 1e3),
    (o.defaultData = {
      far: 1e5,
      type: 'OrthographicCamera',
      perspective: { near: 5, fov: 45, zoom: 1 },
      orthographic: { near: -1e5, zoom: 1 },
      up: o.DefaultUp,
      isUpVectorFlipped: !1,
      targetOffset: o.DefaultTargetOffset,
    })
  function r(i) {
    return i.type === 'PerspectiveCamera' ? i.perspective.zoom : i.orthographic.zoom
  }
  o.getZoom = r
})(mo || (mo = {}))
var Ip
;((e) => {
  function n(r, o) {
    return r[0] === o[0] && r[1] === o[1]
  }
  e.isEqual = n
  function t(r, o, i) {
    return [r[0] + (o[0] - r[0]) * i, r[1] + (o[1] - r[1]) * i]
  }
  e.lerp = t
})(Ip || (Ip = {}))
var Yo
;((o) => {
  function n(i, s) {
    return i[0] === s[0] && i[1] === s[1] && i[2] === s[2]
  }
  o.isEqual = n
  function t(i, s) {
    return [i[0] + s[0], i[1] + s[1], i[2] + s[2]]
  }
  o.add = t
  function e(i, s) {
    return [i[0] - s[0], i[1] - s[1], i[2] - s[2]]
  }
  o.sub = e
  function r(i, s, a) {
    return [i[0] + (s[0] - i[0]) * a, i[1] + (s[1] - i[1]) * a, i[2] + (s[2] - i[2]) * a]
  }
  o.lerp = r
})(Yo || (Yo = {}))
var Ap
;((e) => {
  function n(r, o) {
    return r[0] === o[0] && r[1] === o[1] && r[2] === o[2] && r[3] === o[3]
  }
  e.isEqual = n
  function t(r, o, i) {
    return [
      r[0] + (o[0] - r[0]) * i,
      r[1] + (o[1] - r[1]) * i,
      r[2] + (o[2] - r[2]) * i,
      r[3] + (o[3] - r[3]) * i,
    ]
  }
  e.lerp = t
})(Ap || (Ap = {}))
var $r
;((o) => {
  o.identity = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
  function t(i, s) {
    for (let a = 0; a < 16; a++) if (i[a] !== s[a]) return !1
    return !0
  }
  o.isEqual = t
  function e(i) {
    return i != null ? i : o.identity
  }
  o.simplify = e
  function r(i, s) {
    let a = s.slice(0)
    for (var l = 0, c = s.length; l < c; l += 3) {
      let h = i[3] * s[l] + i[7] * s[l + 1] + i[11] * s[l + 2] + i[15]
      ;(a[l] = (i[0] * s[l] + i[4] * s[l + 1] + i[8] * s[l + 2] + i[12]) / h),
        (a[l + 1] = (i[1] * s[l] + i[5] * s[l + 1] + i[9] * s[l + 2] + i[13]) / h),
        (a[l + 2] = (i[2] * s[l] + i[6] * s[l + 1] + i[10] * s[l + 2] + i[14]) / h)
    }
    return a
  }
  o.applyMatrix4 = r
})($r || ($r = {}))
var Rt
;((l) => {
  ;(l.white = { r: 1, g: 1, b: 1 }),
    (l.red = { r: 1, g: 0, b: 0 }),
    (l.black = { r: 0, g: 0, b: 0 })
  function r(c) {
    return { r: Math.round(c.r * 255), g: Math.round(c.g * 255), b: Math.round(c.b * 255), a: 1 }
  }
  l.toRgb255a1 = r
  function o(c) {
    return { r: c.r, g: c.g, b: c.b }
  }
  l.clone = o
  function i(c) {
    return (
      (c = Math.floor(c)),
      { r: ((c >> 16) & 255) / 255, g: ((c >> 8) & 255) / 255, b: (c & 255) / 255 }
    )
  }
  l.fromHex = i
  function s(c, h) {
    return c.r === h.r && c.g === h.g && c.b === h.b
  }
  l.equals = s
  function a(c, h, p) {
    return { r: c.r + (h.r - c.r) * p, g: c.g + (h.g - c.g) * p, b: c.b + (h.b - c.b) * p }
  }
  l.lerp = a
})(Rt || (Rt = {}))
var cr
;((s) => {
  s.white = H(O({}, Rt.white), { a: 1 })
  function t(a) {
    return { r: a[0], g: a[1], b: a[2], a: a[3] }
  }
  s.from0to1 = t
  function e(a, l) {
    return H(O({}, Rt.fromHex(a)), { a: l })
  }
  s.fromHexAndA = e
  function r(a) {
    return { r: Math.round(a.r * 255), g: Math.round(a.g * 255), b: Math.round(a.b * 255), a: a.a }
  }
  s.toRgb255a1 = r
  function o(a, l) {
    return Rt.equals(a, l) && a.a === l.a
  }
  s.equals = o
  function i(a, l, c) {
    return {
      r: a.r + (l.r - a.r) * c,
      g: a.g + (l.g - a.g) * c,
      b: a.b + (l.b - a.b) * c,
      a: a.a + (l.a - a.a) * c,
    }
  }
  s.lerp = i
})(cr || (cr = {}))
var gs
;((t) => (t.identity = { position: [0, 0, 0], rotation: [0, 0, 0], scale: [1, 1, 1] }))(
  gs || (gs = {})
)
var Dp
;((t) => (t.defaultData = { mass: 1, stiffness: 80, damping: 10, velocity: 0 }))(Dp || (Dp = {}))
var Bp
;((t) => (t.defaultData = { control1: [0.5, 0.05], control2: [0.1, 0.3] }))(Bp || (Bp = {}))
var xs
;((t) => {
  function n(e, r = 0.1) {
    return {
      type: 'radial',
      hideBase: !1,
      count: 3,
      radial: {
        radius: Math.max(e[0], e[1]) * 2,
        start: 0,
        end: 360,
        alignment: !1,
        axis: 'y',
        scale: [1, 1, 1],
        rotation: [0, 0, 0],
        position: [0, 0, 0],
      },
      linear: { scale: [1, 1, 1], rotation: [0, 0, 0], position: [e[0] + e[0] * r, 0, 0] },
      grid: { count: [2, 2, 2], size: e.map((o) => o * (1 + r)), useCenter: !0 },
    }
  }
  t.defaultData = n
})(xs || (xs = {}))
var Ht = class {
  modifyById(t, e) {
    let r = this
    if (r[t] === void 0) throw new Error('not expected')
    {
      let i = H(O({}, r), { [t]: e })
      return Object.setPrototypeOf(i, Ht.prototype), i
    }
  }
  add(t, e) {
    var o
    let r = this.runOp({ type: 1, id: t, data: e })
    return (o = r == null ? void 0 : r.data) != null ? o : this
  }
  runOp(t) {
    let e = this
    if (t.type === 1) {
      let r = e[t.id],
        o
      r === void 0 ? (o = { type: 2, id: t.id }) : (o = { type: 1, id: t.id, data: r })
      let { id: i, data: s } = t,
        a = H(O({}, e), { [i]: s })
      return Object.setPrototypeOf(a, Ht.prototype), { data: a, actual: t, reverse: o }
    } else if (t.type === 2) {
      let { id: r } = t,
        o = e[r]
      if (o === void 0) return null
      {
        let i = O({}, e)
        return (
          Object.setPrototypeOf(i, Ht.prototype),
          delete i[r],
          { data: i, actual: t, reverse: { type: 1, id: r, data: o } }
        )
      }
    }
    throw new Error('illegal arg')
  }
}
function ki(n) {
  if (n.deepFreeze !== void 0) {
    n.deepFreeze(n)
    return
  }
  let t = Object.getOwnPropertyNames(n)
  for (let e of t) {
    let r = n[e]
    r && typeof r == 'object' && ki(r)
  }
  return Object.freeze(n)
}
function Ep(n, t) {
  let e = 0
  for (; e < n.length && e < t.length; ) {
    if (n[e] < t[e]) return -1
    if (n[e] > t[e]) return 1
    e += 1
  }
  return e !== t.length ? -1 : e !== n.length ? 1 : 0
}
var bs = class extends Error {}
function hr(n, t, e) {
  if (
    (n === void 0
      ? t === void 0
        ? ((n = 0), (t = 10))
        : (n = t - 10)
      : t === void 0 && (t = n + 10),
    n > t)
  ) {
    let i = n
    ;(n = t), (t = i)
  }
  let r = [],
    o = 1 / (e + 1)
  for (let i = 0; i < e; i++) {
    let s = n + (t - n) * (i + 0.75 + Math.random() * 0.5) * o
    r.push(s)
  }
  return r
}
function _p(n) {
  return (
    n instanceof Uint8Array ||
    n instanceof Uint16Array ||
    n instanceof Uint32Array ||
    n instanceof Int8Array ||
    n instanceof Int16Array ||
    n instanceof Int32Array ||
    n instanceof Float32Array ||
    n instanceof Float64Array
  )
}
function Gp() {
  return typeof process < 'u'
}
function zp(n, t) {
  for (let e of n) t(e.id, e.data), zp(e.children, t)
}
function Rp(n, t) {
  t(n.id, n.data)
  for (let e of n.children) Rp(e, t)
}
var qt = class extends Array {
  constructor(...e) {
    super(...e)
    Object.setPrototypeOf(this, qt.prototype)
  }
  deepFreeze() {
    let e = 0
    for (; e < this.length; ) ki(this[e]), e++
  }
  fillCaches0(e, r) {
    this.objCaches.set(e.id, e), this.parentCaches.set(e.id, r)
    for (let o of e.children) this.fillCaches0(o, e.id)
  }
  fillCaches() {
    if (this.objCaches === void 0) {
      ;(this.objCaches = new Map()), (this.parentCaches = new Map())
      for (let e of this) this.fillCaches0(e, null)
    }
  }
  randomId() {
    this.fillCaches()
    let e = Array.from(this.objCaches.keys())
    if (e.length !== 0) return e[Math.max(0, Math.floor(Math.random() * e.length) - 1)]
  }
  isDescendantOf(e, r) {
    for (; e; ) {
      let o = this.parent(e)
      if (o === r) return !0
      e = o
    }
    return !1
  }
  data(e) {
    var r
    return (r = this.get(e)) == null ? void 0 : r.data
  }
  has(e) {
    return this.childrenOf(e) !== void 0
  }
  get(e) {
    return this.fillCaches(), this.objCaches.get(e)
  }
  childrenOf(e) {
    var r
    return e === null ? this : (r = this.get(e)) == null ? void 0 : r.children
  }
  traverseFrom(e, r) {
    if (e === null) this.traverse(r)
    else {
      let o = this.get(e)
      o && Rp(o, r)
    }
  }
  traverse(e) {
    zp(this, e)
  }
  totalSize() {
    return this.fillCaches(), this.objCaches.size
  }
  parent(e) {
    return this.fillCaches(), this.parentCaches.get(e)
  }
  childrenArray(e) {
    return e === null ? this : this.get(e).children
  }
  modifyById(e, r) {
    if (this.get(e) === void 0) throw new Error('not expected')
    {
      let i = this.parent(e),
        s = this.childrenArray(i),
        a = s.findIndex((h) => h.id === e)
      if (a < 0) throw new Error('not expected')
      let l = s[a]
      return (s = [...s]), (s[a] = H(O({}, l), { data: r })), this.modifyArrayBy(i, s)
    }
  }
  modifyArrayBy(e, r) {
    let o = e,
      i = r
    for (; o !== null; ) {
      let a = i,
        l = o
      if (((o = this.parent(o)), o === void 0)) throw new Error()
      i = this.childrenArray(o)
      let c = i.findIndex((h) => h.id === l)
      if (c < 0) throw new Error()
      ;(i = [...i]), (i[c] = H(O({}, i[c]), { children: a }))
    }
    Object.setPrototypeOf(i, qt.prototype)
    let s = i
    return s.fillCaches(), s
  }
  runOp(e) {
    switch (e.type) {
      case 7:
        return this.addOp(e)
      case 8:
        return this.deleteOp(e)
      case 9:
        return this.moveOp(e)
    }
  }
  checkDuplicatedIdRec({ id: e, children: r }) {
    if (this.get(e) !== void 0) return !0
    for (let o of r) if (this.checkDuplicatedIdRec(o)) return !0
    return !1
  }
  addOp(e) {
    let { parent: r, fi: o, id: i, data: s, children: a } = e
    if (r !== null && this.get(r) === void 0) return null
    if (this.checkDuplicatedIdRec(e)) return null
    {
      let l = r,
        c = this.childrenArray(l),
        h = { fi: o, id: i, data: s, children: a }
      return (
        (c = [...c, h]),
        c.sort((u, m) => u.fi - m.fi),
        (e.localIndex = c.indexOf(h)),
        { data: this.modifyArrayBy(l, c), actual: e, reverse: { type: 8, id: i } }
      )
    }
  }
  deleteOp(e) {
    let { id: r } = e
    if (this.get(r) === null) return null
    {
      let o = this.parent(r)
      if (o === void 0) return null
      let i = this.childrenArray(o),
        s = i.findIndex((c) => c.id === r)
      ;(e.localIndex = s), (i = [...i])
      let a = i.splice(s, 1)[0]
      return {
        data: this.modifyArrayBy(o, i),
        actual: e,
        reverse: H(O({ type: 7 }, a), { parent: o }),
      }
    }
  }
  moveOp(e) {
    let { parent: r, fi: o, id: i } = e
    if (r !== null && this.get(r) === void 0) return this.deleteOp({ type: 8, id: i })
    if (r !== null) {
      let m = r
      for (; m !== null; ) {
        if (m === void 0) throw new Error()
        if (m === i) throw new bs('cyclic tree')
        m = this.parent(m)
      }
    }
    let s = this.parent(i)
    if (s === void 0) return null
    let a = s,
      l = this.childrenArray(s),
      c = l.findIndex((m) => m.id === i)
    l = [...l]
    let h = l.splice(c, 1)[0],
      p = this.modifyArrayBy(s, l)
    ;(s = r), (l = p.childrenArray(s))
    let u = h.fi
    return (
      (h = H(O({}, h), { fi: o })),
      (l = [...l, h]),
      l.sort((m, f) => m.fi - f.fi),
      (e.localIndex = l.indexOf(h)),
      (p = p.modifyArrayBy(s, l)),
      { data: p, actual: e, reverse: { type: 9, parent: a, fi: u, id: i } }
    )
  }
  previous(e, r) {
    if (r === null) {
      let i = this.childrenArray(e)
      return i.length === 0 ? null : i[i.length - 1].id
    }
    let o = null
    for (let i of this.childrenArray(e)) {
      if (i.id === r) return o
      o = i.id
    }
    return null
  }
  traverseSortNext(e) {
    let r = this.parent(e)
    if (r !== void 0) {
      let o = this.childrenArray(r),
        i = o.findIndex((s) => s.id === e) + 1
      if (i < o.length) return o[i].id
      if (r) return this.traverseSortNext(r)
    }
  }
  sortNext(e) {
    let r = this.childrenArray(e)
    return r.length > 0 ? r[0].id : this.traverseSortNext(e)
  }
  traverseSortPrevious(e) {
    let r = this.childrenArray(e)
    return r.length > 0 ? this.traverseSortPrevious(r[r.length - 1].id) : e
  }
  sortPrevious(e) {
    let r = this.parent(e)
    if (r !== void 0) {
      let o = this.childrenArray(r),
        i = o.findIndex((s) => s.id === e) - 1
      return i >= 0 ? this.traverseSortPrevious(o[i].id) : r
    }
  }
  getAllSorted(e) {
    let r = []
    for (let o of e) {
      let i = this.getWithSortKey(o.id)
      i !== void 0 && r.push(O(O({}, o), i))
    }
    r.sort((o, i) => Ep(o.sortKey, i.sortKey))
    for (let o of r) delete o.sortKey
    return r
  }
  getWithSortKey(e) {
    var r = e
    let o = [],
      i = this.get(r),
      s = i
    if (i !== void 0) {
      for (; r; ) o.splice(0, 0, i.fi), (r = this.parent(r)), r !== null && (i = this.get(r))
      return H(O({}, s), { sortKey: o })
    }
  }
  insertBeforeHelper(e, r, o) {
    return this.insertAfterHelper(e, this.previous(e, r), o)
  }
  insertAfterHelper(e, r, o) {
    let i = this.childrenArray(e)
    if (r === null) {
      if (i.length === 0) return hr(0, o, o)
      {
        let s = i[0].fi
        return hr(s - o, s, o)
      }
    } else {
      let s = this.get(r)
      if (s === void 0 || this.parent(r) !== e) throw new Error('illegal args')
      let a = i.find((l) => l.fi > s.fi)
      if (a === void 0) {
        let l = i[i.length - 1].fi
        return hr(l, l + o, o)
      } else return hr(s.fi, a.fi, o)
    }
  }
}
var vs
;((t) => {
  function n(e, r) {
    if (Array.isArray(e)) {
      let o = r.props,
        i = {},
        s = [...e],
        a = !1
      if (o)
        for (let l of Object.keys(o)) {
          let c = parseInt(l)
          if (isNaN(c)) throw new Error('wrong index')
          ;(i[l] = s[c]), (s[c] = o[l]), (a = !0)
        }
      return a ? { data: s, actual: r, reverse: { type: 0, props: i } } : null
    } else {
      let o = r.props,
        i = {},
        s = O({}, e),
        a = !1
      if (o)
        for (let l of Object.keys(o)) {
          i[l] = s[l]
          let c = o[l]
          c === void 0 ? delete s[l] : (s[l] = c), (a = !0)
        }
      return a ? { data: s, actual: r, reverse: { type: 0, props: i } } : null
    }
  }
  t.runOp = n
})(vs || (vs = {}))
var Je = class extends Array {
  constructor(...e) {
    super(...e)
    Object.setPrototypeOf(this, Je.prototype)
  }
  deepFreeze() {
    let e = 0
    for (; e < this.length; ) ki(this[e]), e++
  }
  fillCaches0(e) {
    this.objCaches.set(e.id, e)
  }
  fillCaches() {
    if (this.objCaches === void 0) {
      ;(this.objCaches = new Map()),
        (Object.getOwnPropertyDescriptor(this, 'objCaches').enumerable = !1)
      for (let e of this) this.fillCaches0(e)
    }
  }
  randomId() {
    this.fillCaches()
    let e = Array.from(this.objCaches.keys())
    if (e.length !== 0) return e[Math.max(0, Math.floor(Math.random() * e.length) - 1)]
  }
  data(e) {
    var r
    return (r = this.get(e)) == null ? void 0 : r.data
  }
  get(e) {
    return this.fillCaches(), this.objCaches.get(e)
  }
  modifyById(e, r) {
    if (this.get(e) === void 0) throw new Error('not expected')
    {
      let i = this,
        s = i.findIndex((c) => c.id === e)
      if (s < 0) throw new Error('not expected')
      let a = i[s]
      return (i = [...i]), (i[s] = H(O({}, a), { data: r })), this.modifyArrayBy(i)
    }
  }
  modifyArrayBy(e) {
    Object.setPrototypeOf(e, Je.prototype)
    let r = e
    return Gp() || r.fillCaches(), r
  }
  runOp(e) {
    switch (e.type) {
      case 4:
        return this.addOp(e)
      case 5:
        return this.deleteOp(e)
      case 6:
        return this.moveOp(e)
    }
  }
  addOp(e) {
    let { fi: r, id: o, data: i } = e,
      s = this,
      a = { fi: r, id: o, data: i }
    return (
      (s = [...s, a]),
      s.sort((c, h) => c.fi - h.fi),
      (e.localIndex = s.indexOf(a)),
      { data: this.modifyArrayBy(s), actual: e, reverse: { type: 5, id: o } }
    )
  }
  deleteOp(e) {
    let { id: r } = e,
      o = this,
      i = o.findIndex((l) => l.id === r)
    if (i === -1) return null
    ;(e.localIndex = i), (o = [...o])
    let s = o.splice(i, 1)[0]
    return { data: this.modifyArrayBy(o), actual: e, reverse: O({ type: 4 }, s) }
  }
  moveOp(e) {
    let { fi: r, id: o } = e,
      i = this
    i = [...i]
    let s = i.findIndex((h) => h.id === o)
    if (s === -1) return null
    let a = i[s].fi,
      l = H(O({}, i[s]), { fi: r })
    return (
      (i[s] = l),
      i.sort((h, p) => h.fi - p.fi),
      (e.localIndex = i.indexOf(l)),
      { data: this.modifyArrayBy(i), actual: e, reverse: { type: 6, fi: a, id: o } }
    )
  }
  previous(e) {
    if (e === null) return this.length === 0 ? null : this[this.length - 1].id
    let r = null
    for (let o of this) {
      if (o.id === e) return r
      r = o.id
    }
    return null
  }
  insertBeforeHelper(e, r) {
    return this.insertAfterHelper(this.previous(e), r)
  }
  insertAfterHelper(e, r) {
    let o = this
    if (e === null) {
      if (o.length === 0) return hr(0, r, r)
      {
        let i = o[0].fi
        return hr(i - r, i, r)
      }
    } else {
      let i = this.get(e)
      if (i === void 0) throw new Error('illegal args')
      let s = o.find((a) => a.fi > i.fi)
      if (s === void 0) {
        let a = o[o.length - 1].fi
        return hr(a, a + r, r)
      } else return hr(i.fi, s.fi, r)
    }
  }
}
var Fp = Symbol(),
  ws = Symbol(),
  Ko = class {
    reportOp(t, e) {
      let r = this
      if (e === null) return
      r._current = e.data
      let o = []
      for (; !(r instanceof Ss); ) {
        let i = r._path,
          s = r._current
        if ((i !== '' && o.splice(0, 0, i), (r = r._parent), r === null)) return
        r.update(i, s)
      }
      r.push(o, t, e.actual, e.reverse)
    }
    deleteChildren(t) {
      if (this._children) {
        let e = this._children[t]
        if (e) {
          let r = e[ws]
          r && r(), delete this._children[t]
        }
      }
    }
  },
  ka = class extends Ko {
    constructor(t, e, r) {
      super(), (this._parent = t), (this._path = e), (this._current = r)
    }
    update(t, e) {
      if (Array.isArray(this._current)) {
        if (typeof t == 'string' && ((t = parseInt(t)), isNaN(t))) throw new Error('Invalid path')
        ;(this._current = [...this._current]), (this._current[t] = e)
      } else this._current = H(O({}, this._current), { [t]: e })
    }
    runOp(t) {
      this.reportOp(t, vs.runOp(this._current, t))
    }
  },
  Ha = class extends Ko {
    constructor(t, e, r) {
      super(), (this._parent = t), (this._path = e), (this._current = r)
    }
    update(t, e) {
      ;(this._current = H(O({}, this._current), { [t]: e })),
        Object.setPrototypeOf(this._current, Ht.prototype)
    }
    runOp(t) {
      this.reportOp(t, this._current.runOp(t))
    }
  },
  Vp = {
    get(n, t) {
      if (t === ws)
        return () => {
          n._parent = null
        }
      if (t === Fp) return n._current
      let { _current: e, _children: r } = n
      if (t === 'push' && Array.isArray(e)) throw new Error('not supported to expand array')
      let o = r === void 0 ? void 0 : r[t]
      if (o !== void 0) return o
      let i = e[t],
        s = Ls(n, t, i)
      return s !== i ? (r === void 0 && ((r = {}), (n._children = r)), (r[t] = s), s) : i
    },
    has(n, t) {
      return t in n._current
    },
    ownKeys(n) {
      return Reflect.ownKeys(n._current)
    },
    defineProperty() {
      throw Error('not supported')
    },
    getPrototypeOf(n) {
      return Object.getPrototypeOf(n._current)
    },
    setPrototypeOf() {
      throw Error('not supported')
    },
    getOwnPropertyDescriptor(n, t) {
      let e = n._current,
        r = Reflect.getOwnPropertyDescriptor(e, t)
      return r && { writable: !0, configurable: !0, enumerable: r.enumerable, value: e[t] }
    },
  },
  db = H(O({}, Vp), {
    set(n, t, e) {
      var o
      let r = { type: 0, props: { [t]: (o = $a(e)) != null ? o : e } }
      return n.deleteChildren(t), n.runOp(r), !0
    },
    deleteProperty(n, t) {
      let e = { type: 0, props: { [t]: void 0 } }
      return n.deleteChildren(t), n.runOp(e), !0
    },
  }),
  mb = H(O({}, Vp), {
    set(n, t, e) {
      return (
        e === void 0
          ? this.deleteProperty(n, t)
          : (n.deleteChildren(t), n.runOp({ type: 1, id: t, data: e })),
        !0
      )
    },
    deleteProperty(n, t) {
      return n.runOp({ type: 2, id: t }), !0
    },
  }),
  Xo = class extends Ko {
    constructor(t, e, r) {
      super(),
        (this._children = {}),
        (this._parent = t),
        (this._path = e),
        (this._current = r),
        (this[ws] = () => {
          this._parent = null
        })
    }
    unproxy() {
      return this._current
    }
    update(t, e) {
      this._current = this._current.modifyById(t, e)
    }
    runOp(t) {
      this.reportOp(t, this._current.runOp(t))
    }
    randomId() {
      return this._current.randomId()
    }
    isDescendantOf(t, e) {
      return this._current.isDescendantOf(t, e)
    }
    childrenOf(t) {
      return this._current.childrenOf(t)
    }
    traverse(t) {
      return this._current.traverse(t)
    }
    get(t) {
      return this._current.get(t)
    }
    parent(t) {
      return this._current.parent(t)
    }
    traverse(t) {
      this._current.traverse((e, r) => {
        t(e, this.data(e))
      })
    }
    data(t) {
      var a
      let { _current: e, _children: r } = this,
        o = r === void 0 ? void 0 : r[t]
      if (o !== void 0) return o
      let i = (a = e.get(t)) == null ? void 0 : a.data,
        s = Ls(this, t, i)
      return s !== i ? (r === void 0 && ((r = {}), (this._children = r)), (r[t] = s), s) : i
    }
    add(t, e, r, o, i) {
      this.runOp({ type: 7, parent: t, fi: e, id: r, data: o, children: i })
    }
    move(t, e, r) {
      this.runOp({ type: 9, parent: t, fi: e, id: r })
    }
    insertAfter(t, e, r) {
      let o = this._current.insertAfterHelper(t, e, r.length)
      for (let i = 0; i < r.length; i++) {
        let s = r[i]
        this.add(t, o[i], s.id, s.data, s.children)
      }
    }
    insertBefore(t, e, r) {
      let o = this._current.insertBeforeHelper(t, e, r.length)
      for (let i = 0; i < r.length; i++) {
        let s = r[i]
        this.add(t, o[i], s.id, s.data, s.children)
      }
    }
    moveAfter(t, e, r) {
      let o = this._current.insertAfterHelper(t, e, r.length)
      for (let i = 0; i < r.length; i++) {
        let s = r[i]
        this.move(t, o[i], s)
      }
    }
    moveBefore(t, e, r) {
      let o = this._current.insertBeforeHelper(t, e, r.length)
      for (let i = 0; i < r.length; i++) {
        let s = r[i]
        this.move(t, o[i], s)
      }
    }
    delete(t) {
      this.deleteChildren(t), this.runOp({ type: 8, id: t })
    }
    sortNext(t) {
      return this._current.sortNext(t)
    }
    sortPrevious(t) {
      return this._current.sortPrevious(t)
    }
    getAllSorted(t) {
      return this._current.getAllSorted(t)
    }
  },
  Zo = class extends Ko {
    constructor(t, e, r) {
      super(),
        (this._children = {}),
        (this._parent = t),
        (this._path = e),
        (this._current = r),
        (this[ws] = () => {
          this._parent = null
        })
    }
    unproxy() {
      return this._current
    }
    get length() {
      return this._current.length
    }
    forEach(t) {
      let e = this.length
      for (let r = 0; r < e; r++) {
        let o = this._current[r].id
        t(this.data(this._current[r].id), o)
      }
    }
    update(t, e) {
      this._current = this._current.modifyById(t, e)
    }
    randomId() {
      return this._current.randomId()
    }
    get(t) {
      return H(O({}, this._current.get(t)), { data: this.data(t) })
    }
    data(t) {
      var a
      let { _current: e, _children: r } = this,
        o = r === void 0 ? void 0 : r[t]
      if (o !== void 0) return o
      let i = (a = e.get(t)) == null ? void 0 : a.data,
        s = Ls(this, t, i)
      return s !== i ? (r === void 0 && ((r = {}), (this._children = r)), (r[t] = s), s) : i
    }
    runOp(t) {
      this.reportOp(t, this._current.runOp(t))
    }
    add(t, e, r) {
      this.runOp({ type: 4, fi: t, id: e, data: r })
    }
    move(t, e) {
      this.runOp({ type: 6, fi: t, id: e })
    }
    insertAfter(t, e) {
      let r = this._current.insertAfterHelper(t, e.length)
      for (let o = 0; o < e.length; o++) {
        let i = e[o]
        this.add(r[o], i.id, i.data)
      }
    }
    insertBefore(t, e) {
      let r = this._current.insertBeforeHelper(t, e.length)
      for (let o = 0; o < e.length; o++) {
        let i = e[o]
        this.add(r[o], i.id, i.data)
      }
    }
    moveAfter(t, e) {
      let r = this._current.insertAfterHelper(t, e.length)
      for (let o = 0; o < e.length; o++) {
        let i = e[o]
        this.move(r[o], i)
      }
    }
    moveBefore(t, e) {
      let r = this._current.insertBeforeHelper(t, e.length)
      for (let o = 0; o < e.length; o++) {
        let i = e[o]
        this.move(r[o], i)
      }
    }
    delete(t) {
      this.deleteChildren(t), this.runOp({ type: 5, id: t })
    }
  }
function Ua(n, t, e) {
  if (n.length > 0) {
    let r = n[n.length - 1]
    if (r.type === 0 && t.type === 0 && Cs.equal(r.path, e)) {
      Object.assign(r.props, t.props)
      return
    }
  }
  n.push(H(O({}, t), { path: e }))
}
var Ss = class {
  constructor(t) {
    ;(this.ts = []), (this.actual = []), (this.reverse = []), (this._current = t)
  }
  update(t, e) {
    if (t !== '') throw new Error('')
    this._current = e
  }
  push(t, e, r, o) {
    Ua(this.ts, e, t), Ua(this.actual, r, t), Ua(this.reverse, o, t)
  }
  result() {
    return {
      data: this._current,
      ts: this.ts,
      actual: this.actual,
      reverse: this.reverse.reverse(),
    }
  }
}
function Ls(n, t, e) {
  return e instanceof qt
    ? new Xo(n, t, e)
    : e instanceof Je
    ? new Zo(n, t, e)
    : e instanceof Ht
    ? new Proxy(new Ha(n, t, e), mb)
    : e !== null && typeof e == 'object'
    ? _p(e)
      ? e
      : new Proxy(new ka(n, t, e), db)
    : e
}
function qa(n) {
  let t = new Ss(n)
  return [Ls(t, '', n), t]
}
function Wa(n, t) {
  let [e, r] = qa(n)
  return t(e), r.result()
}
function $a(n) {
  return n instanceof Xo || n instanceof Zo
    ? n._current
    : n !== null && typeof n == 'object'
    ? n[Fp]
    : n
}
var Cs
;((r) => {
  function n(o, i) {
    if (i.length === o.length)
      for (var s = 0; s < o.length; ) {
        if (o[s] !== i[s]) return !1
        s += 1
      }
    else return !1
    return !0
  }
  r.equal = n
  function t(o, i, s) {
    let a = e(s, o)
    if (a !== void 0 && typeof a == 'object' && a !== null) {
      let l = O({}, i)
      return (
        Object.keys(a).forEach((c) => {
          delete l[c]
        }),
        l
      )
    } else return i
  }
  r.removeOverridden = t
  function e(o, i, s = 0) {
    if (i.length <= s) return o
    if ((o instanceof qt || o instanceof Xo) && typeof i[s] == 'string')
      return e(o.data(i[s]), i, s + 1)
    if ((o instanceof Je || o instanceof Zo) && typeof i[s] == 'string')
      return e(o.data(i[s]), i, s + 1)
    if (typeof i[s] == 'number' && Array.isArray(o)) return e(o[i[s]], i, s + 1)
    if (typeof i[s] == 'string' && typeof o == 'object') return e(o[i[s]], i, s + 1)
  }
  r.zoom = e
})(Cs || (Cs = {}))
var Ts = class {},
  Hi = class extends Ts {
    constructor(e) {
      super()
      this.id = e
    }
  },
  qi = class extends Ts {
    constructor(e) {
      super()
      this.data = e
    }
  }
var Ya
try {
  Ya = new TextDecoder()
} catch {}
var ee,
  Yr,
  S = 0
var Jp = [],
  Ka = Jp,
  Xa = 0,
  At = {},
  Oe,
  Jr,
  Wt = 0,
  pr = 0,
  Ft,
  Ir,
  Tt = [],
  Ie,
  jp = { useRecords: !1, mapsAsObjects: !0 },
  Wi = class {},
  Qa = new Wi()
Qa.name = 'MessagePack 0xC1'
var Qo = !1,
  ur = class {
    constructor(t) {
      t &&
        (t.useRecords === !1 && t.mapsAsObjects === void 0 && (t.mapsAsObjects = !0),
        t.structures
          ? (t.structures.sharedLength = t.structures.length)
          : t.getStructures &&
            (((t.structures = []).uninitialized = !0), (t.structures.sharedLength = 0))),
        Object.assign(this, t)
    }
    unpack(t, e) {
      if (ee) return Qp(() => (Ms(), this ? this.unpack(t, e) : ur.prototype.unpack.call(jp, t, e)))
      ;(Yr = e > -1 ? e : t.length),
        (S = 0),
        (Xa = 0),
        (pr = 0),
        (Jr = null),
        (Ka = Jp),
        (Ft = null),
        (ee = t)
      try {
        Ie = t.dataView || (t.dataView = new DataView(t.buffer, t.byteOffset, t.byteLength))
      } catch (r) {
        throw (
          ((ee = null),
          t instanceof Uint8Array
            ? r
            : new Error(
                'Source must be a Uint8Array or Buffer but was a ' +
                  (t && typeof t == 'object' ? t.constructor.name : typeof t)
              ))
        )
      }
      if (this instanceof ur) {
        if (((At = this), this.structures)) return (Oe = this.structures), Ns()
        ;(!Oe || Oe.length > 0) && (Oe = [])
      } else (At = jp), (!Oe || Oe.length > 0) && (Oe = [])
      return Ns()
    }
    unpackMultiple(t, e) {
      let r,
        o = 0
      try {
        Qo = !0
        let i = t.length,
          s = this ? this.unpack(t, i) : Is.unpack(t, i)
        if (e) {
          for (e(s); S < i; ) if (((o = S), e(Ns()) === !1)) return
        } else {
          for (r = [s]; S < i; ) (o = S), r.push(Ns())
          return r
        }
      } catch (i) {
        throw ((i.lastPosition = o), (i.values = r), i)
      } finally {
        ;(Qo = !1), Ms()
      }
    }
    _mergeStructures(t, e) {
      t = t || []
      for (let r = 0, o = t.length; r < o; r++) {
        let i = t[r]
        i && ((i.isShared = !0), r >= 32 && (i.highByte = (r - 32) >> 5))
      }
      t.sharedLength = t.length
      for (let r in e || [])
        if (r >= 0) {
          let o = t[r],
            i = e[r]
          i && (o && ((t.restoreStructures || (t.restoreStructures = []))[r] = o), (t[r] = i))
        }
      return (this.structures = t)
    }
    decode(t, e) {
      return this.unpack(t, e)
    }
  }
function Ns() {
  try {
    if (!At.trusted && !Qo) {
      let t = Oe.sharedLength || 0
      t < Oe.length && (Oe.length = t)
    }
    let n = Ye()
    if (S == Yr) Oe.restoreStructures && Up(), (Oe = null), (ee = null), Ir && (Ir = null)
    else if (S > Yr) {
      let t = new Error('Unexpected end of MessagePack data')
      throw ((t.incomplete = !0), t)
    } else if (!Qo) throw new Error('Data read, but end of buffer not reached')
    return n
  } catch (n) {
    throw (
      (Oe.restoreStructures && Up(),
      Ms(),
      (n instanceof RangeError || n.message.startsWith('Unexpected end of buffer')) &&
        (n.incomplete = !0),
      n)
    )
  }
}
function Up() {
  for (let n in Oe.restoreStructures) Oe[n] = Oe.restoreStructures[n]
  Oe.restoreStructures = null
}
function Ye() {
  let n = ee[S++]
  if (n < 160)
    if (n < 128) {
      if (n < 64) return n
      {
        let t = Oe[n & 63] || (At.getStructures && Yp()[n & 63])
        return t ? (t.read || (t.read = el(t, n & 63)), t.read()) : n
      }
    } else if (n < 144)
      if (((n -= 128), At.mapsAsObjects)) {
        let t = {}
        for (let e = 0; e < n; e++) t[Xp()] = Ye()
        return t
      } else {
        let t = new Map()
        for (let e = 0; e < n; e++) t.set(Ye(), Ye())
        return t
      }
    else {
      n -= 144
      let t = new Array(n)
      for (let e = 0; e < n; e++) t[e] = Ye()
      return t
    }
  else if (n < 192) {
    let t = n - 160
    if (pr >= S) return Jr.slice(S - Wt, (S += t) - Wt)
    if (pr == 0 && Yr < 140) {
      let e = t < 16 ? tl(t) : Kp(t)
      if (e != null) return e
    }
    return Za(t)
  } else {
    let t
    switch (n) {
      case 192:
        return null
      case 193:
        return Ft
          ? ((t = Ye()),
            t > 0
              ? Ft[1].slice(Ft.position1, (Ft.position1 += t))
              : Ft[0].slice(Ft.position0, (Ft.position0 -= t)))
          : Qa
      case 194:
        return !1
      case 195:
        return !0
      case 196:
        return Ja(ee[S++])
      case 197:
        return (t = Ie.getUint16(S)), (S += 2), Ja(t)
      case 198:
        return (t = Ie.getUint32(S)), (S += 4), Ja(t)
      case 199:
        return fo(ee[S++])
      case 200:
        return (t = Ie.getUint16(S)), (S += 2), fo(t)
      case 201:
        return (t = Ie.getUint32(S)), (S += 4), fo(t)
      case 202:
        if (((t = Ie.getFloat32(S)), At.useFloat32 > 2)) {
          let e = Os[((ee[S] & 127) << 1) | (ee[S + 1] >> 7)]
          return (S += 4), ((e * t + (t > 0 ? 0.5 : -0.5)) >> 0) / e
        }
        return (S += 4), t
      case 203:
        return (t = Ie.getFloat64(S)), (S += 8), t
      case 204:
        return ee[S++]
      case 205:
        return (t = Ie.getUint16(S)), (S += 2), t
      case 206:
        return (t = Ie.getUint32(S)), (S += 4), t
      case 207:
        return (
          At.int64AsNumber
            ? ((t = Ie.getUint32(S) * 4294967296), (t += Ie.getUint32(S + 4)))
            : (t = Ie.getBigUint64(S)),
          (S += 8),
          t
        )
      case 208:
        return Ie.getInt8(S++)
      case 209:
        return (t = Ie.getInt16(S)), (S += 2), t
      case 210:
        return (t = Ie.getInt32(S)), (S += 4), t
      case 211:
        return (
          At.int64AsNumber
            ? ((t = Ie.getInt32(S) * 4294967296), (t += Ie.getUint32(S + 4)))
            : (t = Ie.getBigInt64(S)),
          (S += 8),
          t
        )
      case 212:
        if (((t = ee[S++]), t == 114)) return $p(ee[S++] & 63)
        {
          let e = Tt[t]
          if (e)
            return e.read ? (S++, e.read(Ye())) : e.noBuffer ? (S++, e()) : e(ee.subarray(S, ++S))
          throw new Error('Unknown extension ' + t)
        }
      case 213:
        return (t = ee[S]), t == 114 ? (S++, $p(ee[S++] & 63, ee[S++])) : fo(2)
      case 214:
        return fo(4)
      case 215:
        return fo(8)
      case 216:
        return fo(16)
      case 217:
        return (t = ee[S++]), pr >= S ? Jr.slice(S - Wt, (S += t) - Wt) : yb(t)
      case 218:
        return (t = Ie.getUint16(S)), (S += 2), pr >= S ? Jr.slice(S - Wt, (S += t) - Wt) : gb(t)
      case 219:
        return (t = Ie.getUint32(S)), (S += 4), pr >= S ? Jr.slice(S - Wt, (S += t) - Wt) : xb(t)
      case 220:
        return (t = Ie.getUint16(S)), (S += 2), Hp(t)
      case 221:
        return (t = Ie.getUint32(S)), (S += 4), Hp(t)
      case 222:
        return (t = Ie.getUint16(S)), (S += 2), qp(t)
      case 223:
        return (t = Ie.getUint32(S)), (S += 4), qp(t)
      default:
        if (n >= 224) return n - 256
        if (n === void 0) {
          let e = new Error('Unexpected end of MessagePack data')
          throw ((e.incomplete = !0), e)
        }
        throw new Error('Unknown MessagePack token ' + n)
    }
  }
}
var fb = /^[a-zA-Z_$][a-zA-Z\d_$]*$/
function el(n, t) {
  function e() {
    if (e.count++ > 2) {
      let o = (n.read = new Function(
        'r',
        'return function(){return {' +
          n.map((i) => (fb.test(i) ? i + ':r()' : '[' + JSON.stringify(i) + ']:r()')).join(',') +
          '}}'
      )(Ye))
      return n.highByte === 0 && (n.read = kp(t, n.read)), o()
    }
    let r = {}
    for (let o = 0, i = n.length; o < i; o++) {
      let s = n[o]
      r[s] = Ye()
    }
    return r
  }
  return (e.count = 0), n.highByte === 0 ? kp(t, e) : e
}
var kp = (n, t) =>
  function () {
    let e = ee[S++]
    if (e === 0) return t()
    let r = n < 32 ? -(n + (e << 5)) : n + (e << 5),
      o = Oe[r] || Yp()[r]
    if (!o) throw new Error('Record id is not defined for ' + r)
    return o.read || (o.read = el(o, n)), o.read()
  }
function Yp() {
  let n = Qp(() => ((ee = null), At.getStructures()))
  return (Oe = At._mergeStructures(n, Oe))
}
var Za = Ps,
  yb = Ps,
  gb = Ps,
  xb = Ps
function Ps(n) {
  let t
  if (n < 16 && (t = tl(n))) return t
  if (n > 64 && Ya) return Ya.decode(ee.subarray(S, (S += n)))
  let e = S + n,
    r = []
  for (t = ''; S < e; ) {
    let o = ee[S++]
    if ((o & 128) === 0) r.push(o)
    else if ((o & 224) === 192) {
      let i = ee[S++] & 63
      r.push(((o & 31) << 6) | i)
    } else if ((o & 240) === 224) {
      let i = ee[S++] & 63,
        s = ee[S++] & 63
      r.push(((o & 31) << 12) | (i << 6) | s)
    } else if ((o & 248) === 240) {
      let i = ee[S++] & 63,
        s = ee[S++] & 63,
        a = ee[S++] & 63,
        l = ((o & 7) << 18) | (i << 12) | (s << 6) | a
      l > 65535 && ((l -= 65536), r.push(((l >>> 10) & 1023) | 55296), (l = 56320 | (l & 1023))),
        r.push(l)
    } else r.push(o)
    r.length >= 4096 && ((t += at.apply(String, r)), (r.length = 0))
  }
  return r.length > 0 && (t += at.apply(String, r)), t
}
function Hp(n) {
  let t = new Array(n)
  for (let e = 0; e < n; e++) t[e] = Ye()
  return t
}
function qp(n) {
  if (At.mapsAsObjects) {
    let t = {}
    for (let e = 0; e < n; e++) t[Xp()] = Ye()
    return t
  } else {
    let t = new Map()
    for (let e = 0; e < n; e++) t.set(Ye(), Ye())
    return t
  }
}
var at = String.fromCharCode
function Kp(n) {
  let t = S,
    e = new Array(n)
  for (let r = 0; r < n; r++) {
    let o = ee[S++]
    if ((o & 128) > 0) {
      S = t
      return
    }
    e[r] = o
  }
  return at.apply(String, e)
}
function tl(n) {
  if (n < 4)
    if (n < 2) {
      if (n === 0) return ''
      {
        let t = ee[S++]
        if ((t & 128) > 1) {
          S -= 1
          return
        }
        return at(t)
      }
    } else {
      let t = ee[S++],
        e = ee[S++]
      if ((t & 128) > 0 || (e & 128) > 0) {
        S -= 2
        return
      }
      if (n < 3) return at(t, e)
      let r = ee[S++]
      if ((r & 128) > 0) {
        S -= 3
        return
      }
      return at(t, e, r)
    }
  else {
    let t = ee[S++],
      e = ee[S++],
      r = ee[S++],
      o = ee[S++]
    if ((t & 128) > 0 || (e & 128) > 0 || (r & 128) > 0 || (o & 128) > 0) {
      S -= 4
      return
    }
    if (n < 6) {
      if (n === 4) return at(t, e, r, o)
      {
        let i = ee[S++]
        if ((i & 128) > 0) {
          S -= 5
          return
        }
        return at(t, e, r, o, i)
      }
    } else if (n < 8) {
      let i = ee[S++],
        s = ee[S++]
      if ((i & 128) > 0 || (s & 128) > 0) {
        S -= 6
        return
      }
      if (n < 7) return at(t, e, r, o, i, s)
      let a = ee[S++]
      if ((a & 128) > 0) {
        S -= 7
        return
      }
      return at(t, e, r, o, i, s, a)
    } else {
      let i = ee[S++],
        s = ee[S++],
        a = ee[S++],
        l = ee[S++]
      if ((i & 128) > 0 || (s & 128) > 0 || (a & 128) > 0 || (l & 128) > 0) {
        S -= 8
        return
      }
      if (n < 10) {
        if (n === 8) return at(t, e, r, o, i, s, a, l)
        {
          let c = ee[S++]
          if ((c & 128) > 0) {
            S -= 9
            return
          }
          return at(t, e, r, o, i, s, a, l, c)
        }
      } else if (n < 12) {
        let c = ee[S++],
          h = ee[S++]
        if ((c & 128) > 0 || (h & 128) > 0) {
          S -= 10
          return
        }
        if (n < 11) return at(t, e, r, o, i, s, a, l, c, h)
        let p = ee[S++]
        if ((p & 128) > 0) {
          S -= 11
          return
        }
        return at(t, e, r, o, i, s, a, l, c, h, p)
      } else {
        let c = ee[S++],
          h = ee[S++],
          p = ee[S++],
          u = ee[S++]
        if ((c & 128) > 0 || (h & 128) > 0 || (p & 128) > 0 || (u & 128) > 0) {
          S -= 12
          return
        }
        if (n < 14) {
          if (n === 12) return at(t, e, r, o, i, s, a, l, c, h, p, u)
          {
            let m = ee[S++]
            if ((m & 128) > 0) {
              S -= 13
              return
            }
            return at(t, e, r, o, i, s, a, l, c, h, p, u, m)
          }
        } else {
          let m = ee[S++],
            f = ee[S++]
          if ((m & 128) > 0 || (f & 128) > 0) {
            S -= 14
            return
          }
          if (n < 15) return at(t, e, r, o, i, s, a, l, c, h, p, u, m, f)
          let g = ee[S++]
          if ((g & 128) > 0) {
            S -= 15
            return
          }
          return at(t, e, r, o, i, s, a, l, c, h, p, u, m, f, g)
        }
      }
    }
  }
}
function Ja(n) {
  return At.copyBuffers
    ? Uint8Array.prototype.slice.call(ee, S, (S += n))
    : ee.subarray(S, (S += n))
}
function fo(n) {
  let t = ee[S++]
  if (Tt[t]) return Tt[t](ee.subarray(S, (S += n)))
  throw new Error('Unknown extension type ' + t)
}
var Wp = new Array(4096)
function Xp() {
  let n = ee[S++]
  if (n >= 160 && n < 192) {
    if (((n = n - 160), pr >= S)) return Jr.slice(S - Wt, (S += n) - Wt)
    if (!(pr == 0 && Yr < 180)) return Za(n)
  } else return S--, Ye()
  let t = ((n << 5) ^ (n > 1 ? Ie.getUint16(S) : n > 0 ? ee[S] : 0)) & 4095,
    e = Wp[t],
    r = S,
    o = S + n - 3,
    i,
    s = 0
  if (e && e.bytes == n) {
    for (; r < o; ) {
      if (((i = Ie.getUint32(r)), i != e[s++])) {
        r = 1879048192
        break
      }
      r += 4
    }
    for (o += 3; r < o; )
      if (((i = ee[r++]), i != e[s++])) {
        r = 1879048192
        break
      }
    if (r === o) return (S = r), e.string
    ;(o -= 3), (r = S)
  }
  for (e = [], Wp[t] = e, e.bytes = n; r < o; ) (i = Ie.getUint32(r)), e.push(i), (r += 4)
  for (o += 3; r < o; ) (i = ee[r++]), e.push(i)
  let a = n < 16 ? tl(n) : Kp(n)
  return a != null ? (e.string = a) : (e.string = Za(n))
}
var $p = (n, t) => {
    var e = Ye()
    let r = n
    t !== void 0 && ((n = n < 32 ? -((t << 5) + n) : (t << 5) + n), (e.highByte = t))
    let o = Oe[n]
    return (
      o && o.isShared && ((Oe.restoreStructures || (Oe.restoreStructures = []))[n] = o),
      (Oe[n] = e),
      (e.read = el(e, r)),
      e.read()
    )
  },
  Zp = typeof self == 'object' ? self : global
Tt[0] = () => {}
Tt[0].noBuffer = !0
Tt[101] = () => {
  let n = Ye()
  return (Zp[n[0]] || Error)(n[1])
}
Tt[105] = (n) => {
  let t = Ie.getUint32(S - 4)
  Ir || (Ir = new Map())
  let e = ee[S],
    r
  ;(e >= 144 && e < 160) || e == 220 || e == 221 ? (r = []) : (r = {})
  let o = { target: r }
  Ir.set(t, o)
  let i = Ye()
  return o.used ? Object.assign(r, i) : ((o.target = i), i)
}
Tt[112] = (n) => {
  let t = Ie.getUint32(S - 4),
    e = Ir.get(t)
  return (e.used = !0), e.target
}
Tt[115] = () => new Set(Ye())
var rl = [
  'Int8',
  'Uint8',
  'Uint8Clamped',
  'Int16',
  'Uint16',
  'Int32',
  'Uint32',
  'Float32',
  'Float64',
  'BigInt64',
  'BigUint64',
].map((n) => n + 'Array')
Tt[116] = (n) => {
  let t = n[0],
    e = rl[t]
  if (!e) throw new Error('Could not find typed array for code ' + t)
  return new Zp[e](Uint8Array.prototype.slice.call(n, 1).buffer)
}
Tt[120] = () => {
  let n = Ye()
  return new RegExp(n[0], n[1])
}
Tt[98] = (n) => {
  let t = (n[0] << 24) + (n[1] << 16) + (n[2] << 8) + n[3],
    e = S
  ;(S += t - 4), (Ft = [Ye(), Ye()]), (Ft.position0 = 0), (Ft.position1 = 0)
  let r = S
  S = e
  try {
    return Ye()
  } finally {
    S = r
  }
}
Tt[255] = (n) =>
  n.length == 4
    ? new Date((n[0] * 16777216 + (n[1] << 16) + (n[2] << 8) + n[3]) * 1e3)
    : n.length == 8
    ? new Date(
        ((n[0] << 22) + (n[1] << 14) + (n[2] << 6) + (n[3] >> 2)) / 1e6 +
          ((n[3] & 3) * 4294967296 + n[4] * 16777216 + (n[5] << 16) + (n[6] << 8) + n[7]) * 1e3
      )
    : n.length == 12
    ? new Date(
        ((n[0] << 24) + (n[1] << 16) + (n[2] << 8) + n[3]) / 1e6 +
          ((n[4] & 128 ? -281474976710656 : 0) +
            n[6] * 1099511627776 +
            n[7] * 4294967296 +
            n[8] * 16777216 +
            (n[9] << 16) +
            (n[10] << 8) +
            n[11]) *
            1e3
      )
    : new Date('invalid')
function Qp(n) {
  let t = Yr,
    e = S,
    r = Xa,
    o = Wt,
    i = pr,
    s = Jr,
    a = Ka,
    l = Ir,
    c = Ft,
    h = new Uint8Array(ee.slice(0, Yr)),
    p = Oe,
    u = Oe.slice(0, Oe.length),
    m = At,
    f = Qo,
    g = n()
  return (
    (Yr = t),
    (S = e),
    (Xa = r),
    (Wt = o),
    (pr = i),
    (Jr = s),
    (Ka = a),
    (Ir = l),
    (Ft = c),
    (ee = h),
    (Qo = f),
    (Oe = p),
    Oe.splice(0, Oe.length, ...u),
    (At = m),
    (Ie = new DataView(ee.buffer, ee.byteOffset, ee.byteLength)),
    g
  )
}
function Ms() {
  ;(ee = null), (Ir = null), (Oe = null)
}
function eu(n) {
  n.unpack ? (Tt[n.type] = n.unpack) : (Tt[n.type] = n)
}
var Os = new Array(147)
for (let n = 0; n < 256; n++) Os[n] = +('1e' + Math.floor(45.15 - n * 0.30103))
var Is = new ur({ useRecords: !1 }),
  bb = Is.unpack,
  vb = Is.unpackMultiple,
  Sb = Is.unpack,
  As = { NEVER: 0, ALWAYS: 1, DECIMAL_ROUND: 3, DECIMAL_FIT: 4 },
  wb = new Float32Array(1),
  KI = new Uint8Array(wb.buffer, 0, 4)
var Ds
try {
  Ds = new TextEncoder()
} catch {}
var Bs,
  il,
  Es = typeof Buffer < 'u',
  ol = Es ? Buffer.allocUnsafeSlow : Uint8Array,
  iu = Es ? Buffer : Uint8Array,
  tu = Es ? 4294967296 : 2144337920,
  _,
  Ke,
  M = 0,
  dr,
  mr = null,
  Lb = /[\u0080-\uFFFF]/,
  $i = Symbol('record-id'),
  yo = class extends ur {
    constructor(t) {
      super(t), (this.offset = 0)
      let e,
        r,
        o,
        i,
        s,
        a,
        l = 0,
        c = iu.prototype.utf8Write
          ? function (d, I, x) {
              return _.utf8Write(d, I, x)
            }
          : Ds && Ds.encodeInto
          ? function (d, I) {
              return Ds.encodeInto(d, _.subarray(I)).written
            }
          : !1,
        h = this
      t || (t = {})
      let p = t && t.sequential,
        u = t.structures || t.saveStructures,
        m = t.maxSharedStructures
      if ((m == null && (m = u ? 32 : 0), m > 8160))
        throw new Error('Maximum maxSharedStructure is 8160')
      let f = t.maxOwnStructures
      f == null && (f = u ? 32 : 64), p && !t.saveStructures && (this.structures = [])
      let g = m > 32 || f + m > 64,
        w = m + 64,
        y = m + f + 64
      if (y > 8256) throw new Error('Maximum maxSharedStructure + maxOwnStructure is 8192')
      let b = [],
        A = 0,
        N = 0
      this.pack = this.encode = function (d, I) {
        if (
          (_ || ((_ = new ol(8192)), (Ke = new DataView(_.buffer, 0, 8192)), (M = 0)),
          (dr = _.length - 10),
          dr - M < 2048
            ? ((_ = new ol(_.length)),
              (Ke = new DataView(_.buffer, 0, _.length)),
              (dr = _.length - 10),
              (M = 0))
            : (M = (M + 7) & 2147483640),
          (r = M),
          (a = h.structuredClone ? new Map() : null),
          h.bundleStrings
            ? ((mr = ['', '']), (_[M++] = 214), (_[M++] = 98), (mr.position = M - r), (M += 4))
            : (mr = null),
          (o = h.structures),
          o)
        ) {
          o.uninitialized && (o = h._mergeStructures(h.getStructures()))
          let x = o.sharedLength || 0
          if (x > m)
            throw new Error(
              'Shared structures is larger than maximum shared structures, try increasing maxSharedStructures to ' +
                o.sharedLength
            )
          if (!o.transitions) {
            o.transitions = Object.create(null)
            for (let C = 0; C < x; C++) {
              let T = o[C]
              if (!T) continue
              let P,
                $ = o.transitions
              for (let J = 0, ie = T.length; J < ie; J++) {
                let ue = T[J]
                ;(P = $[ue]), P || (P = $[ue] = Object.create(null)), ($ = P)
              }
              $[$i] = C + 64
            }
            l = x
          }
          p || (o.nextId = x + 64)
        }
        i && (i = !1), (s = o || [])
        try {
          if ((v(d), mr)) {
            Ke.setUint32(mr.position + r, M - mr.position - r)
            let x = mr
            ;(mr = null), v(x[0]), v(x[1])
          }
          if (((h.offset = M), a && a.idsToInsert)) {
            ;(M += a.idsToInsert.length * 6), M > dr && L(M), (h.offset = M)
            let x = Tb(_.subarray(r, M), a.idsToInsert)
            return (a = null), x
          }
          return I & su ? ((_.start = r), (_.end = M), _) : _.subarray(r, M)
        } finally {
          if (o) {
            if ((N < 10 && N++, A > 1e4))
              (o.transitions = null), (N = 0), (A = 0), b.length > 0 && (b = [])
            else if (b.length > 0 && !p) {
              for (let x = 0, C = b.length; x < C; x++) b[x][$i] = 0
              b = []
            }
            if (i && h.saveStructures) {
              let x = o.sharedLength || m
              o.length > x && (o = o.slice(0, x))
              let C = _.subarray(r, M)
              return h.saveStructures(o, l) === !1
                ? (h._mergeStructures(h.getStructures()), h.pack(d))
                : ((l = x), C)
            }
          }
          I & Db && (M = r)
        }
      }
      let v = (d) => {
          M > dr && (_ = L(M))
          var I = typeof d,
            x
          if (I === 'string') {
            let C = d.length
            if (mr && C >= 8 && C < 4096) {
              let $ = Lb.test(d)
              ;(mr[$ ? 0 : 1] += d), (_[M++] = 193), v($ ? -C : C)
              return
            }
            let T
            C < 32 ? (T = 1) : C < 256 ? (T = 2) : C < 65536 ? (T = 3) : (T = 5)
            let P = C * 3
            if ((M + P > dr && (_ = L(M + P)), C < 64 || !c)) {
              let $,
                J,
                ie,
                ue = M + T
              for ($ = 0; $ < C; $++)
                (J = d.charCodeAt($)),
                  J < 128
                    ? (_[ue++] = J)
                    : J < 2048
                    ? ((_[ue++] = (J >> 6) | 192), (_[ue++] = (J & 63) | 128))
                    : (J & 64512) === 55296 && ((ie = d.charCodeAt($ + 1)) & 64512) === 56320
                    ? ((J = 65536 + ((J & 1023) << 10) + (ie & 1023)),
                      $++,
                      (_[ue++] = (J >> 18) | 240),
                      (_[ue++] = ((J >> 12) & 63) | 128),
                      (_[ue++] = ((J >> 6) & 63) | 128),
                      (_[ue++] = (J & 63) | 128))
                    : ((_[ue++] = (J >> 12) | 224),
                      (_[ue++] = ((J >> 6) & 63) | 128),
                      (_[ue++] = (J & 63) | 128))
              x = ue - M - T
            } else x = c(d, M + T, P)
            x < 32
              ? (_[M++] = 160 | x)
              : x < 256
              ? (T < 2 && _.copyWithin(M + 2, M + 1, M + 1 + x), (_[M++] = 217), (_[M++] = x))
              : x < 65536
              ? (T < 3 && _.copyWithin(M + 3, M + 2, M + 2 + x),
                (_[M++] = 218),
                (_[M++] = x >> 8),
                (_[M++] = x & 255))
              : (T < 5 && _.copyWithin(M + 5, M + 3, M + 3 + x),
                (_[M++] = 219),
                Ke.setUint32(M, x),
                (M += 4)),
              (M += x)
          } else if (I === 'number')
            if (d >>> 0 === d)
              d < 64
                ? (_[M++] = d)
                : d < 256
                ? ((_[M++] = 204), (_[M++] = d))
                : d < 65536
                ? ((_[M++] = 205), (_[M++] = d >> 8), (_[M++] = d & 255))
                : ((_[M++] = 206), Ke.setUint32(M, d), (M += 4))
            else if (d >> 0 === d)
              d >= -32
                ? (_[M++] = 256 + d)
                : d >= -128
                ? ((_[M++] = 208), (_[M++] = d + 256))
                : d >= -32768
                ? ((_[M++] = 209), Ke.setInt16(M, d), (M += 2))
                : ((_[M++] = 210), Ke.setInt32(M, d), (M += 4))
            else {
              let C
              if ((C = this.useFloat32) > 0 && d < 4294967296 && d >= -2147483648) {
                ;(_[M++] = 202), Ke.setFloat32(M, d)
                let T
                if (C < 4 || (T = d * Os[((_[M] & 127) << 1) | (_[M + 1] >> 7)]) >> 0 === T) {
                  M += 4
                  return
                } else M--
              }
              ;(_[M++] = 203), Ke.setFloat64(M, d), (M += 8)
            }
          else if (I === 'object')
            if (!d) _[M++] = 192
            else {
              if (a) {
                let T = a.get(d)
                if (T) {
                  if (!T.id) {
                    let P = a.idsToInsert || (a.idsToInsert = [])
                    T.id = P.push(T)
                  }
                  ;(_[M++] = 214), (_[M++] = 112), Ke.setUint32(M, T.id), (M += 4)
                  return
                } else a.set(d, { offset: M - r })
              }
              let C = d.constructor
              if (C === Object) k(d, !0)
              else if (C === Array) {
                ;(x = d.length),
                  x < 16
                    ? (_[M++] = 144 | x)
                    : x < 65536
                    ? ((_[M++] = 220), (_[M++] = x >> 8), (_[M++] = x & 255))
                    : ((_[M++] = 221), Ke.setUint32(M, x), (M += 4))
                for (let T = 0; T < x; T++) v(d[T])
              } else if (C === Map) {
                ;(x = d.size),
                  x < 16
                    ? (_[M++] = 128 | x)
                    : x < 65536
                    ? ((_[M++] = 222), (_[M++] = x >> 8), (_[M++] = x & 255))
                    : ((_[M++] = 223), Ke.setUint32(M, x), (M += 4))
                for (let [T, P] of d) v(T), v(P)
              } else {
                for (let T = 0, P = Bs.length; T < P; T++) {
                  let $ = il[T]
                  if (d instanceof $) {
                    let J = Bs[T]
                    if (J.write) {
                      J.type && ((_[M++] = 212), (_[M++] = J.type), (_[M++] = 0)),
                        v(J.write.call(this, d))
                      return
                    }
                    let ie = _,
                      ue = Ke,
                      ce = M
                    _ = null
                    let ve
                    try {
                      ve = J.pack.call(
                        this,
                        d,
                        (F) => (
                          (_ = ie),
                          (ie = null),
                          (M += F),
                          M > dr && L(M),
                          { target: _, targetView: Ke, position: M - F }
                        ),
                        v
                      )
                    } finally {
                      ie && ((_ = ie), (Ke = ue), (M = ce), (dr = _.length - 10))
                    }
                    ve && (ve.length + M > dr && L(ve.length + M), (M = Cb(ve, _, M, J.type)))
                    return
                  }
                }
                k(d, !d.hasOwnProperty)
              }
            }
          else if (I === 'boolean') _[M++] = d ? 195 : 194
          else if (I === 'bigint') {
            if (d < BigInt(1) << BigInt(63) && d >= -(BigInt(1) << BigInt(63)))
              (_[M++] = 211), Ke.setBigInt64(M, d)
            else if (d < BigInt(1) << BigInt(64) && d > 0) (_[M++] = 207), Ke.setBigUint64(M, d)
            else if (this.largeBigIntToFloat) (_[M++] = 203), Ke.setFloat64(M, Number(d))
            else
              throw new RangeError(
                d +
                  ' was too large to fit in MessagePack 64-bit integer format, set largeBigIntToFloat to convert to float-64'
              )
            M += 8
          } else if (I === 'undefined')
            this.encodeUndefinedAsNil
              ? (_[M++] = 192)
              : ((_[M++] = 212), (_[M++] = 0), (_[M++] = 0))
          else if (I === 'function') v(this.writeFunction && this.writeFunction())
          else throw new Error('Unknown type: ' + I)
        },
        k =
          this.useRecords === !1
            ? this.variableMapSize
              ? (d) => {
                  let I = Object.keys(d),
                    x = I.length
                  x < 16
                    ? (_[M++] = 128 | x)
                    : x < 65536
                    ? ((_[M++] = 222), (_[M++] = x >> 8), (_[M++] = x & 255))
                    : ((_[M++] = 223), Ke.setUint32(M, x), (M += 4))
                  let C
                  for (let T = 0; T < x; T++) v((C = I[T])), v(d[C])
                }
              : (d, I) => {
                  _[M++] = 222
                  let x = M - r
                  M += 2
                  let C = 0
                  for (let T in d) (I || d.hasOwnProperty(T)) && (v(T), v(d[T]), C++)
                  ;(_[x++ + r] = C >> 8), (_[x + r] = C & 255)
                }
            : (d) => {
                let I = Object.keys(d),
                  x,
                  C = s.transitions || (s.transitions = Object.create(null)),
                  T = 0
                for (let $ = 0, J = I.length; $ < J; $++) {
                  let ie = I[$]
                  ;(x = C[ie]), x || ((x = C[ie] = Object.create(null)), T++), (C = x)
                }
                let P = C[$i]
                if (P)
                  P >= 96 && g
                    ? ((_[M++] = ((P -= 96) & 31) + 96), (_[M++] = P >> 5))
                    : (_[M++] = P)
                else {
                  ;(P = s.nextId),
                    P || (P = 64),
                    P < w && this.shouldShareStructure && !this.shouldShareStructure(I)
                      ? ((P = s.nextOwnId), P < y || (P = w), (s.nextOwnId = P + 1))
                      : (P >= y && (P = w), (s.nextId = P + 1))
                  let $ = (I.highByte = P >= 96 && g ? (P - 96) >> 5 : -1)
                  ;(C[$i] = P),
                    (s[P - 64] = I),
                    P < w
                      ? ((I.isShared = !0),
                        (s.sharedLength = P - 63),
                        (i = !0),
                        $ >= 0 ? ((_[M++] = (P & 31) + 96), (_[M++] = $)) : (_[M++] = P))
                      : ($ >= 0
                          ? ((_[M++] = 213), (_[M++] = 114), (_[M++] = (P & 31) + 96), (_[M++] = $))
                          : ((_[M++] = 212), (_[M++] = 114), (_[M++] = P)),
                        T && (A += N * T),
                        b.length >= f && (b.shift()[$i] = 0),
                        b.push(C),
                        v(I))
                }
                for (let $ = 0, J = I.length; $ < J; $++) v(d[I[$]])
              },
        L = (d) => {
          let I
          if (d > 16777216) {
            if (d - r > tu)
              throw new Error('Packed buffer would be larger than maximum buffer size')
            I = Math.min(
              tu,
              Math.round(Math.max((d - r) * (d > 67108864 ? 1.25 : 2), 4194304) / 4096) * 4096
            )
          } else I = ((Math.max((d - r) << 2, _.length - 1) >> 12) + 1) << 12
          let x = new ol(I)
          return (
            (Ke = new DataView(x.buffer, 0, I)),
            _.copy ? _.copy(x, 0, r, d) : x.set(_.slice(r, d)),
            (M -= r),
            (r = 0),
            (dr = x.length - 10),
            (_ = x)
          )
        }
    }
    useBuffer(t) {
      ;(_ = t), (Ke = new DataView(_.buffer, _.byteOffset, _.byteLength)), (M = 0)
    }
  }
il = [
  Date,
  Set,
  Error,
  RegExp,
  ArrayBuffer,
  Object.getPrototypeOf(Uint8Array.prototype).constructor,
  Wi,
]
Bs = [
  {
    pack(n, t, e) {
      let r = n.getTime() / 1e3
      if ((this.useTimestamp32 || n.getMilliseconds() === 0) && r >= 0 && r < 4294967296) {
        let { target: o, targetView: i, position: s } = t(6)
        ;(o[s++] = 214), (o[s++] = 255), i.setUint32(s, r)
      } else if (r > 0 && r < 17179869184) {
        let { target: o, targetView: i, position: s } = t(10)
        ;(o[s++] = 215),
          (o[s++] = 255),
          i.setUint32(s, n.getMilliseconds() * 4e6 + ((r / 1e3 / 4294967296) >> 0)),
          i.setUint32(s + 4, r)
      } else if (isNaN(r)) {
        if (this.onInvalidDate) return t(0), e(this.onInvalidDate())
        let { target: o, targetView: i, position: s } = t(3)
        ;(o[s++] = 212), (o[s++] = 255), (o[s++] = 255)
      } else {
        let { target: o, targetView: i, position: s } = t(15)
        ;(o[s++] = 199),
          (o[s++] = 12),
          (o[s++] = 255),
          i.setUint32(s, n.getMilliseconds() * 1e6),
          i.setBigInt64(s + 4, BigInt(Math.floor(r)))
      }
    },
  },
  {
    pack(n, t, e) {
      let r = Array.from(n),
        { target: o, position: i } = t(this.structuredClone ? 3 : 0)
      this.structuredClone && ((o[i++] = 212), (o[i++] = 115), (o[i++] = 0)), e(r)
    },
  },
  {
    pack(n, t, e) {
      let { target: r, position: o } = t(this.structuredClone ? 3 : 0)
      this.structuredClone && ((r[o++] = 212), (r[o++] = 101), (r[o++] = 0)), e([n.name, n.message])
    },
  },
  {
    pack(n, t, e) {
      let { target: r, position: o } = t(this.structuredClone ? 3 : 0)
      this.structuredClone && ((r[o++] = 212), (r[o++] = 120), (r[o++] = 0)), e([n.source, n.flags])
    },
  },
  {
    pack(n, t) {
      this.structuredClone ? ru(n, 16, t) : ou(Es ? Buffer.from(n) : new Uint8Array(n), t)
    },
  },
  {
    pack(n, t) {
      let e = n.constructor
      e !== iu && this.structuredClone ? ru(n, rl.indexOf(e.name), t) : ou(n, t)
    },
  },
  {
    pack(n, t) {
      let { target: e, position: r } = t(1)
      e[r] = 193
    },
  },
]
function ru(n, t, e, r) {
  let o = n.byteLength
  if (o + 1 < 256) {
    var { target: i, position: s } = e(4 + o)
    ;(i[s++] = 199), (i[s++] = o + 1)
  } else if (o + 1 < 65536) {
    var { target: i, position: s } = e(5 + o)
    ;(i[s++] = 200), (i[s++] = (o + 1) >> 8), (i[s++] = (o + 1) & 255)
  } else {
    var { target: i, position: s, targetView: a } = e(7 + o)
    ;(i[s++] = 201), a.setUint32(s, o + 1), (s += 4)
  }
  ;(i[s++] = 116), (i[s++] = t), i.set(new Uint8Array(n.buffer, n.byteOffset, n.byteLength), s)
}
function ou(n, t) {
  let e = n.byteLength
  var r, o
  if (e < 256) {
    var { target: r, position: o } = t(e + 2)
    ;(r[o++] = 196), (r[o++] = e)
  } else if (e < 65536) {
    var { target: r, position: o } = t(e + 3)
    ;(r[o++] = 197), (r[o++] = e >> 8), (r[o++] = e & 255)
  } else {
    var { target: r, position: o, targetView: i } = t(e + 5)
    ;(r[o++] = 198), i.setUint32(o, e), (o += 4)
  }
  r.set(n, o)
}
function Cb(n, t, e, r) {
  let o = n.length
  switch (o) {
    case 1:
      t[e++] = 212
      break
    case 2:
      t[e++] = 213
      break
    case 4:
      t[e++] = 214
      break
    case 8:
      t[e++] = 215
      break
    case 16:
      t[e++] = 216
      break
    default:
      o < 256
        ? ((t[e++] = 199), (t[e++] = o))
        : o < 65536
        ? ((t[e++] = 200), (t[e++] = o >> 8), (t[e++] = o & 255))
        : ((t[e++] = 201),
          (t[e++] = o >> 24),
          (t[e++] = (o >> 16) & 255),
          (t[e++] = (o >> 8) & 255),
          (t[e++] = o & 255))
  }
  return (t[e++] = r), t.set(n, e), (e += o), e
}
function Tb(n, t) {
  let e,
    r = t.length * 6,
    o = n.length - r
  for (t.sort((i, s) => (i.offset > s.offset ? 1 : -1)); (e = t.pop()); ) {
    let i = e.offset,
      s = e.id
    n.copyWithin(i + r, i, o), (r -= 6)
    let a = i + r
    ;(n[a++] = 214),
      (n[a++] = 105),
      (n[a++] = s >> 24),
      (n[a++] = (s >> 16) & 255),
      (n[a++] = (s >> 8) & 255),
      (n[a++] = s & 255),
      (o = i)
  }
  return n
}
function go(n) {
  if (n.Class) {
    if (!n.pack && !n.write) throw new Error('Extension has no pack or write function')
    if (n.pack && !n.type)
      throw new Error('Extension has no type (numeric code to identify the extension)')
    il.unshift(n.Class), Bs.unshift(n)
  }
  eu(n)
}
var nu = new yo({ useRecords: !1 }),
  Nb = nu.pack,
  Mb = nu.pack
var { NEVER: Pb, ALWAYS: Ob, DECIMAL_ROUND: Ib, DECIMAL_FIT: Ab } = As,
  su = 512,
  Db = 1024
var au = new yo({ structuredClone: !0 })
go({
  Class: Ht.prototype.constructor,
  type: 1,
  write(n) {
    return O({}, n)
  },
  read(n) {
    return Object.setPrototypeOf(n, Ht.prototype), n
  },
})
go({
  Class: Je.prototype.constructor,
  type: 2,
  write(n) {
    return [...n]
  },
  read(n) {
    return Object.setPrototypeOf(n, Je.prototype), n
  },
})
go({
  Class: qt.prototype.constructor,
  type: 3,
  write(n) {
    return [...n]
  },
  read(n) {
    return Object.setPrototypeOf(n, qt.prototype), n
  },
})
go({
  Class: Hi.prototype.constructor,
  type: 4,
  write(n) {
    return n.id
  },
  read(n) {
    return new Hi(n)
  },
})
go({
  Class: qi.prototype.constructor,
  type: 5,
  write(n) {
    return n.data
  },
  read(n) {
    return new qi(n)
  },
})
function Bb(n) {
  var t = 0
  if (n.length === 0) return t
  for (let e = 0; e < n.length; e++) {
    let r = n[e]
    ;(t = (t << 5) - t + r), (t = t & t)
  }
  return t
}
var _s
;((r) => {
  function n(o) {
    return au.pack(o)
  }
  r.serialize = n
  function t(o) {
    return au.unpack(o)
  }
  r.deserialize = t
  function e(o) {
    return Bb(n(o)).toString()
  }
  r.checksum = e
})(_s || (_s = {}))
var Gs
;((e) => {
  e.all = ['PointLight', 'SpotLight', 'DirectionalLight', 'HemisphereLight']
  function t(r) {
    return e.all.includes(r)
  }
  e.is = t
})(Gs || (Gs = {}))
var zs
;((e) => {
  function n(r) {
    return t(r)
  }
  e.defaultData = n
  function t(r) {
    if (r === 'PointLight')
      return {
        type: r,
        color: cr.white,
        intensity: 1,
        distance: 2e3,
        decay: 1,
        shadows: !0,
        shadowResolution: 1024,
        shadowRadius: 1,
        depth: 2500,
        helper: !0,
      }
    if (r === 'SpotLight')
      return {
        type: r,
        color: cr.white,
        intensity: 1,
        distance: 2e3,
        decay: 1,
        shadows: !0,
        penumbra: 0,
        angle: (30 / 180) * Math.PI,
        depth: 2500,
        helper: !0,
      }
    if (r === 'DirectionalLight')
      return {
        type: r,
        color: cr.white,
        intensity: 1,
        shadows: !0,
        size: 2500,
        depth: 2500,
        helper: !0,
      }
    throw new Error('not implemented')
  }
})(zs || (zs = {}))
var nl
;((e) => {
  e.defaultData = { castShadow: !0, receiveShadow: !0 }
  function t(r, o) {
    return r.castShadow === o.castShadow && r.receiveShadow === o.receiveShadow
  }
  e.equals = t
})(nl || (nl = {}))
var sl
;((e) => {
  e.defaultData = { flatShading: !1, wireframe: !1, side: 0 }
  function t(r, o) {
    return r.flatShading === o.flatShading && r.side === o.side && r.wireframe === o.wireframe
  }
  e.equals = t
})(sl || (sl = {}))
var Rs
;((t) =>
  (t.defaultData = H(O(O({}, sl.defaultData), nl.defaultData), {
    cloner: null,
    booleanExclude: null,
  })))(Rs || (Rs = {}))
var al = ((o) => (
    (o[(o.Left = 1)] = 'Left'),
    (o[(o.Right = 2)] = 'Right'),
    (o[(o.Center = 3)] = 'Center'),
    (o[(o.Justify = 4)] = 'Justify'),
    o
  ))(al || {}),
  ll = ((r) => (
    (r[(r.Top = 1)] = 'Top'), (r[(r.Center = 2)] = 'Center'), (r[(r.Bottom = 3)] = 'Bottom'), r
  ))(ll || {}),
  cl = ((r) => (
    (r[(r.None = 1)] = 'None'), (r[(r.Upper = 2)] = 'Upper'), (r[(r.Lower = 3)] = 'Lower'), r
  ))(cl || {}),
  Fs
;((t) =>
  (t.defaultData = {
    width: 100,
    height: 100,
    horizontalAlign: 1,
    verticalAlign: 1,
    fontSize: 16,
    lineHeight: 1.5,
    letterSpacing: 1,
    text: '',
    textTransform: 1,
    color: cr.fromHexAndA(6974058, 1),
    alpha: 1,
    font: 'roboto_regular',
  }))(Fs || (Fs = {}))
var ei
;((r) => {
  function n(o, i) {
    return o === 'light' && i ? t(i) : e(o)
  }
  r.defaultData = n
  function t(o) {
    switch (o) {
      case 'basic':
        return { type: 'light', category: 'basic', alpha: 1, visible: !0, mode: 0 }
      case 'phong':
        return {
          category: 'phong',
          specular: { r: 0.2, g: 0.2, b: 0.2 },
          shininess: 10,
          type: 'light',
          alpha: 1,
          visible: !0,
          mode: 0,
        }
      case 'toon':
        return {
          category: 'toon',
          specular: { r: 0.2, g: 0.2, b: 0.2 },
          shininess: 10,
          type: 'light',
          alpha: 1,
          visible: !0,
          mode: 0,
        }
      case 'lambert':
        return {
          category: 'lambert',
          emissive: { r: 0, g: 0, b: 0, a: 1 },
          type: 'light',
          alpha: 1,
          visible: !0,
          mode: 0,
        }
      case 'physical':
        return {
          category: 'physical',
          roughness: 0.2,
          metalness: 0.2,
          reflectivity: 0.2,
          type: 'light',
          alpha: 1,
          visible: !0,
          mode: 0,
        }
    }
  }
  function e(o) {
    switch (o) {
      case 'texture':
        return {
          alpha: 1,
          visible: !0,
          size: [128, 128],
          mode: 0,
          axis: 'x',
          side: 2,
          type: 'texture',
          projection: 0,
          texture: { image: 'image_0', wrapping: 1001, repeat: [1, 1], offset: [0, 0] },
          crop: !0,
        }
      case 'color':
        return { type: 'color', alpha: 1, visible: !0, mode: 0, color: Rt.fromHex(4737101) }
      case 'depth':
        return {
          type: 'depth',
          alpha: 1,
          visible: !0,
          mode: 0,
          gradientType: 1,
          smooth: !1,
          isVector: !0,
          isWorldSpace: !1,
          origin: [0, 0, 0],
          direction: [1, 0, 0],
          colors: [
            [1, 1, 1, 1],
            [0, 0, 0, 1],
            [0, 0, 0, 1],
            [0, 0, 0, 1],
            [0, 0, 0, 1],
            [0, 0, 0, 1],
            [0, 0, 0, 1],
            [0, 0, 0, 1],
            [0, 0, 0, 1],
            [0, 0, 0, 1],
          ],
          steps: [0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
          num: 2,
          near: 50,
          far: 200,
        }
      case 'normal':
        return { type: 'normal', alpha: 1, visible: !0, mode: 0, cnormal: [1, 1, 1] }
      case 'gradient':
        return {
          type: 'gradient',
          alpha: 1,
          visible: !0,
          mode: 0,
          gradientType: 0,
          smooth: !1,
          colors: [
            [0, 0, 0, 1],
            [1, 1, 1, 1],
            [1, 1, 1, 1],
            [1, 1, 1, 1],
            [1, 1, 1, 1],
            [1, 1, 1, 1],
            [1, 1, 1, 1],
            [1, 1, 1, 1],
            [1, 1, 1, 1],
            [1, 1, 1, 1],
          ],
          steps: [0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
          num: 2,
          angle: 0,
          offset: [0, 0],
          morph: [0, 0],
        }
      case 'noise':
        return {
          type: 'noise',
          alpha: 1,
          visible: !0,
          mode: 0,
          size: [100, 100, 100],
          noiseType: 0,
          scale: 1,
          move: 1,
          colorA: H(O({}, Rt.fromHex(6710886)), { a: 1 }),
          colorB: H(O({}, Rt.fromHex(6710886)), { a: 1 }),
          colorC: H(O({}, Rt.fromHex(16777215)), { a: 1 }),
          colorD: H(O({}, Rt.fromHex(16777215)), { a: 1 }),
          distortion: [1, 1],
          fA: [1.7, 9.2],
          fB: [8.3, 2.8],
        }
      case 'fresnel':
        return {
          type: 'fresnel',
          alpha: 1,
          visible: !0,
          mode: 0,
          color: cr.fromHexAndA(16777215, 1),
          bias: 0.1,
          scale: 1,
          intensity: 2,
          factor: 1,
        }
      case 'rainbow':
        return {
          type: 'rainbow',
          alpha: 1,
          visible: !0,
          mode: 0,
          filmThickness: 30,
          movement: 0,
          wavelengths: [0, 0, 0],
          noiseStrength: 0,
          noiseScale: 1,
          offset: [0, 0, 0],
        }
      case 'matcap':
        return {
          type: 'matcap',
          alpha: 1,
          visible: !0,
          mode: 0,
          texture: { image: 'matcap_0', wrapping: 1001, repeat: [1, 1], offset: [0, 0] },
        }
      case 'transmission':
        return {
          type: 'transmission',
          alpha: 1,
          visible: !0,
          mode: 0,
          thickness: 10,
          ior: 1.5,
          roughness: 1,
        }
      case 'displace':
        return {
          type: 'displace',
          displacementType: 'noise',
          noiseType: 0,
          scale: 10,
          movement: 1,
          offset: [0, 0, 0],
          intensity: 8,
          visible: !0,
        }
    }
  }
})(ei || (ei = {}))
var xo
;((a) => {
  function n(l) {
    return (
      !l.layers.some((h) => {
        if (
          (h.data.type === 'texture' && h.data.projection !== 0) ||
          (h.data.type === 'depth' && !h.data.isWorldSpace) ||
          h.data.type === 'noise' ||
          h.data.type === 'displace'
        )
          return !0
      }) && !e(l)
    )
  }
  a.isMergable = n
  function t(l) {
    let c = ''
    return (
      l.layers.forEach((h) => {
        Object.entries(h.data).forEach(([p, u]) => {
          ;(c += `${p}${u}`),
            Array.isArray(u)
              ? u.forEach((m) => (c += `${m}`))
              : typeof u == 'object'
              ? Object.values(u).forEach((m) => {
                  typeof m == 'number' ? (c += `${m.toFixed(4)}`) : (c += `${m}`)
                })
              : (c += `${u}`)
        })
      }),
      c
    )
  }
  a.getHash = t
  function e(l) {
    let c = 0
    for (let h of l.layers)
      'alpha' in h.data &&
        h.data.type !== 'light' &&
        h.data.type !== 'fresnel' &&
        (c += (1 - c) * h.data.alpha)
    return c < 1
  }
  a.isTransparent = e
  function r() {
    return { layers: new Je() }
  }
  a.defaultEmptyData = r
  function o(l = 'layer1', c = 'layer2') {
    return i('phong', l, c)
  }
  a.defaultData = o
  function i(l, c = 'layer1', h = 'layer2') {
    let p = new Je()
    return (
      p.push({ fi: 0, data: ei.defaultData('light', l), id: c }),
      p.push({ fi: 1, data: ei.defaultData('color'), id: h }),
      { layers: p }
    )
  }
  a.defaultTwoLayerData = i
  function s(l, c = 'basic', h = 'layer1', p = 'layer2') {
    let u = ei.defaultData('texture')
    Object.assign(u.texture, { image: l })
    let m = new Je()
    return (
      m.push({ fi: 0, data: u, id: h }),
      m.push({ fi: 1, data: ei.defaultData('light', c), id: p }),
      { layers: m }
    )
  }
  a.defaultTwoLayerTextureData = s
})(xo || (xo = {}))
var ti
;((t) => {
  function n() {
    return { points: new Je(), roundness: 0, shapeHoles: [], isClosed: !1 }
  }
  t.defaultData = n
})(ti || (ti = {}))
var Vs
;((t) => {
  function n(e) {
    return (
      e === 'PolygonGeometry' ||
      e === 'RectangleGeometry' ||
      e === 'StarGeometry' ||
      e === 'TriangleGeometry' ||
      e === 'EllipseGeometry'
    )
  }
  t.is2DParametricMesh = n
})(Vs || (Vs = {}))
var Ji
;((t) => {
  function n(e) {
    if (e === 'RectangleGeometry')
      return {
        width: 320,
        height: 320,
        type: e,
        cornerRadius: [0, 0, 0, 0],
        cornerType: 0,
        depth: 0,
        extrudeBevelSize: 0,
        extrudeBevelSegments: 1,
      }
    if (e === 'VectorGeometry')
      return {
        width: 1,
        height: 1,
        type: e,
        subdivisions: 12,
        shape: ti.defaultData(),
        depth: 0,
        extrudeBevelSize: 0,
        extrudeBevelSegments: 1,
      }
    if (e === 'BooleanGeometry') return { type: e, operation: 2, width: 0, height: 0, depth: 0 }
    throw new Error('not implemented')
  }
  t.defaultData = n
})(Ji || (Ji = {}))
var Yi
;((o) => {
  o.identity = H(O({}, gs.identity), { hiddenMatrix: $r.identity })
  function t(i) {
    return {
      position: i.position,
      rotation: i.rotation,
      scale: i.scale,
      hiddenMatrix: i.hiddenMatrix,
    }
  }
  o.fromObject = t
  function e(i, s) {
    return {
      position: (s == null ? void 0 : s.position) || i.position,
      rotation: (s == null ? void 0 : s.rotation) || i.rotation,
      scale: (s == null ? void 0 : s.scale) || i.scale,
      hiddenMatrix: (s == null ? void 0 : s.hiddenMatrix) || i.hiddenMatrix,
    }
  }
  o.merge = e
  function r(i, s) {
    return {
      position: Yo.isEqual(i.position, s.position) ? null : s.position,
      rotation: Yo.isEqual(i.rotation, s.rotation) ? null : s.rotation,
      scale: Yo.isEqual(i.scale, s.scale) ? null : s.scale,
      hiddenMatrix: $r.isEqual(i.hiddenMatrix, s.hiddenMatrix) ? null : s.hiddenMatrix,
    }
  }
  o.diff = r
})(Yi || (Yi = {}))
var Ar
;((t) =>
  (t.defaultData = O(
    { states: new Je(), events: new Je(), visible: !0, raycastLock: !1 },
    Yi.identity
  )))(Ar || (Ar = {}))
var lu
;((t) => (t.defaultData = O({ type: 'Empty' }, Ar.defaultData)))(lu || (lu = {}))
var js
;((t) => (t.defaultData = O(O({ type: 'Mesh' }, Ar.defaultData), Rs.defaultData)))(js || (js = {}))
var cu
;((t) => (t.defaultData = O(O({ type: 'TextFrame' }, Ar.defaultData), Fs.defaultData)))(
  cu || (cu = {})
)
var Us
;((t) => (t.defaultData = O(O(O({}, Ar.defaultData), Yi.identity), mo.defaultData)))(
  Us || (Us = {})
)
var hu
;((t) => {
  function n(e) {
    return O(O({}, Ar.defaultData), zs.defaultData(e))
  }
  t.defaultData = n
})(hu || (hu = {}))
var pu
;((r) => (
  (r.defaultCamera = O(
    {
      position: [0, 0, 1e3],
      scale: [1, 1, 1],
      rotation: [0, 0, 0],
      hiddenMatrix: $r.identity,
      name: 'Play Camera',
      visible: !0,
      raycastLock: !1,
      states: new Je(),
      events: new Je(),
    },
    mo.defaultData
  )),
  (r.defaultMeshObject = H(O(O({ name: 'Rectangle' }, Ar.defaultData), js.defaultData), {
    geometry: Ji.defaultData('RectangleGeometry'),
    material: xo.defaultTwoLayerData('basic', 'layer1', 'layer2'),
  })),
  (r.defaultBooleanObject = H(O(O({ name: 'Boolean' }, Ar.defaultData), js.defaultData), {
    geometry: Ji.defaultData('BooleanGeometry'),
    material: xo.defaultTwoLayerData('phong', 'layer1', 'layer2'),
  }))
))(pu || (pu = {}))
var uu
;((e) => {
  function n(r, o) {
    if (o === void 0) return r
    let i = O({}, r)
    return (
      'material' in i &&
        'material' in o &&
        o.material &&
        (i.material = Wa(i.material, (s) => {
          if (typeof s != 'string')
            for (let [a, l] of Object.entries(o.material.layers)) {
              let c = s.layers.data(a)
              c && uo(c, l)
            }
        }).data),
      i.materials &&
        o.materials &&
        (i.materials = Wa(i.materials, (s) => {
          var a, l
          for (let c = 0; c < i.materials.length; c++) {
            let h = o.materials[c]
            if (typeof h != 'string')
              for (let [p, u] of Object.entries(h.layers)) {
                let m = (l = (a = s[c]) == null ? void 0 : a.layers) == null ? void 0 : l.data(p)
                m && uo(m, u)
              }
          }
        }).data),
      i
    )
  }
  e.patchMaterialState = n
  function t(r, o) {
    var s, a
    if (o === void 0) return r
    let i = O({}, r)
    if ((Object.assign(i, Yi.merge(i, o)), Jo.is(r.type))) {
      ;(i.orthographic = O({}, i.orthographic)), (i.perspective = O({}, i.perspective))
      let l = o
      ;((s = l.orthographic) == null ? void 0 : s.zoom) !== void 0 &&
        (i.orthographic.zoom = l.orthographic.zoom),
        ((a = l.perspective) == null ? void 0 : a.zoom) !== void 0 &&
          (i.perspective.zoom = l.perspective.zoom)
    } else if (r.type === 'Mesh')
      (i.geometry = O({}, i.geometry)), Object.assign(i.geometry, o.geometry), (i = n(i, o))
    else if (Gs.is(r.type)) {
      let l = o
      i.intensity !== void 0 && (i.intensity = l.intensity),
        l.color !== void 0 &&
          (typeof l.color == 'string' ? (i.color = l.color) : (i.color = Rt.clone(l.color)))
    }
    return i
  }
  e.patch = t
})(uu || (uu = {}))
import { ConeBufferGeometry as Gb } from 'three'
import {
  BufferGeometry as Eb,
  CylinderBufferGeometry as _b,
  Float32BufferAttribute as hl,
  Vector2 as Qt,
  Vector3 as ks,
} from 'three'
var mu = class {
  static create(n) {
    return this.build(this.normalizeInputs(n))
  }
  static normalizeInputs(n, t) {
    var s, a, l, c, h
    let e = Object.assign(
        {},
        (s = t == null ? void 0 : t.parameters) != null
          ? s
          : {
              width: 100,
              radialSegments: 64,
              heightSegments: 1,
              openEnded: !1,
              thetaStart: 0,
              thetaLength: 360,
              cornerRadius: 0,
              cornerSegments: 8,
              hollow: 0,
            },
        n.parameters
      ),
      r = e.width / 2,
      o = (a = e.radiusTop) != null ? a : r,
      i = (l = e.radiusBottom) != null ? l : r
    return (
      o === i
        ? ((o = r), (i = r))
        : o > i
        ? ((o = r), (i = (i * r) / o))
        : ((o = (o * r) / i), (i = r)),
      {
        parameters: Object.assign(e, {
          width: Math.abs(e.width),
          height: Math.abs((c = e.height) != null ? c : e.width),
          depth: Math.abs((h = e.depth) != null ? h : e.width),
          radiusTop: o,
          radiusBottom: i,
        }),
      }
    )
  }
  static build(n) {
    let {
        width: t,
        depth: e,
        height: r,
        radialSegments: o,
        heightSegments: i,
        openEnded: s,
        thetaStart: a,
        thetaLength: l,
        radiusTop: c,
        radiusBottom: h,
        cornerRadius: p,
        cornerSegments: u,
        hollow: m,
      } = n.parameters,
      f
    return (
      p || m
        ? (f = new Ki(c, h, r, o, i, s, a, (l * Math.PI) / 180, p, p, u, m))
        : (f = new _b(c, h, r, o, i, s, a, (l * Math.PI) / 180)),
      f.scale(1, 1, e / t),
      Object.assign(f, { userData: H(O({}, n), { type: 'CylinderGeometry' }) })
    )
  }
}
function Kr(n, t, e) {
  ;(e.x = n.x * t.x), (e.y = n.y), (e.z = n.x * t.y)
}
function du(n) {
  return new Qt(n.y, -n.x)
}
var Ki = class extends Eb {
  constructor(t, e, r, o, i, s, a, l, c, h, p, u, m = !1) {
    super(),
      (this.type = 'RoundedCylinderBufferGeometry'),
      (t = t !== void 0 ? t : 1),
      (e = e !== void 0 ? e : 1),
      (r = r || 1),
      (o = Math.floor(o) || 8),
      (i = Math.floor(i) || 1),
      (s = s !== void 0 ? s : !1),
      (a = a !== void 0 ? a : 0),
      (l = l !== void 0 ? l : Math.PI * 2),
      s && ((c = 0), (h = 0))
    let f = [],
      g = [],
      w = [],
      y = [],
      b = 0,
      A = r / 2,
      N = new ks(),
      v = new ks()
    m && t == 0 && (t = c), m && e == 0 && (e = h)
    let k = new Qt(t, A),
      L = new Qt(e, -A),
      d = null,
      I = null,
      x = null,
      C = null,
      T = k.clone().sub(L),
      P = 0,
      $ = 0,
      J = 0
    u > 0 && ((P = Math.min(t, e) * (1 - u)), ($ = t - P), (J = e - P))
    let ie = k.clone()
    ie.x -= P
    let ue = Math.PI - T.angle(),
      ce = T.angle(),
      ve = Math.tan(ce / 2),
      F = Math.tan(ue / 2),
      G = ve + F,
      B = u ? G : F,
      z = u ? G : ve
    if (
      ((c = Math.min(c, (t - $) / B, T.length() / G)),
      (h = Math.min(h, (e - J) / z, T.length() / G)),
      c > 0)
    ) {
      let V = c / ve
      ;(d = k.clone().sub(new Qt(V, c))),
        u && ((x = d.clone()), (x.x -= P - G * c)),
        k.sub(T.clone().setLength(V))
    }
    if (h > 0) {
      let V = h / F
      ;(I = L.clone().sub(new Qt(V, -h))),
        L.add(T.clone().setLength(V)),
        u && ((C = I.clone()), (C.x -= P - G * h), ie.sub(T.clone().setLength(V)))
    }
    T = k.clone().sub(L)
    let D = T.length() < 0.5,
      R = []
    for (let V = 0; V <= o; V++) {
      let E = [],
        U = V / o,
        ne = U * l + a,
        q = new Qt(Math.sin(ne), Math.cos(ne))
      C && I
        ? (Y(E, U, q, ue, h, C, -1, !0), Y(E, U, q, ce, h, I, -1, !1))
        : I
        ? (Z(E, q, I.x, 0, -1), Y(E, U, q, ce, h, I, -1, !1))
        : s || Z(E, q, e, J, -1)
      let W = du(T).normalize()
      if ((Kr(W, q, N), !D))
        for (let K = 0; K <= i; K++) {
          let X = K / i,
            Q = T.clone().multiplyScalar(X).add(L)
          Kr(Q, q, v),
            g.push(v.x, v.y, v.z),
            w.push(N.x, N.y, N.z),
            y.push(U, 0.5 + v.y / r),
            E.push(b++)
        }
      if (
        (x && d
          ? (Y(E, U, q, ue, c, d, 1, !1), Y(E, U, q, ce, c, x, 1, !0))
          : d
          ? (Y(E, U, q, ue, c, d, 1, !1), Z(E, q, d.x, 0, 1))
          : s || Z(E, q, t, $, 1),
        u && !D)
      ) {
        let K = du(T).multiplyScalar(-1).normalize()
        Kr(K, q, N)
        for (let X = 0; X <= i; X++) {
          let Q = X / i,
            se = T.clone().multiplyScalar(-Q).add(ie)
          Kr(se, q, v),
            g.push(v.x, v.y, v.z),
            w.push(N.x, N.y, N.z),
            y.push(U, 0.5 + v.y / r),
            E.push(b++)
        }
      }
      u && !s && E.push(E[0]), R.push(E)
    }
    for (let V = 0; V < R.length - 1; V++)
      for (let E = 0; E < R[0].length - 1; E++) {
        if (s && u && E == i) continue
        let U = R[V][E],
          ne = R[V + 1][E],
          q = R[V + 1][E + 1],
          W = R[V][E + 1],
          K = g[q * 3 + 0],
          X = g[q * 3 + 2]
        f.push(U, ne, W), (K != 0 || X != 0) && f.push(ne, q, W)
      }
    l < Math.PI * 2 && (j(-1, R[0], a), j(1, R[R.length - 1], a + l)),
      this.setIndex(f),
      this.setAttribute('position', new hl(g, 3)),
      this.setAttribute('normal', new hl(w, 3)),
      this.setAttribute('uv', new hl(y, 2))
    function Y(V, E, U, ne, q, W, K, X) {
      for (let Q = 0; Q < p + 1; Q++) {
        let se = Q / p,
          oe = K < 0 ? se : 1 - se
        X && (oe -= 1), (oe *= ne)
        let he = new Qt(Math.sin(oe), Math.cos(oe) * K),
          Ge = he.clone().multiplyScalar(q).add(W)
        Kr(Ge, U, v),
          g.push(v.x, v.y, v.z),
          Kr(he, U, N),
          w.push(N.x, N.y, N.z),
          y.push(E, 0.5 + v.y / r),
          V.push(b++)
      }
    }
    function Z(V, E, U, ne, q) {
      let W = new ks(),
        K = new Qt(),
        X = [U, ne]
      q < 0 && X.reverse()
      for (let Q of X)
        K.set(Q, A * q),
          Kr(K, E, W),
          g.push(W.x, W.y, W.z),
          w.push(0, q, 0),
          y.push(0.5, 0.5),
          V.push(b++)
    }
    function j(V, E, U) {
      let ne = new Qt(Math.sin(U), Math.cos(U)),
        q = new Qt(-Math.cos(U), Math.sin(U)),
        W = new ks(),
        K = V < 0 ? (se, oe, he) => f.push(se, oe, he) : (se, oe, he) => f.push(se, he, oe),
        X = new Qt((t + e + $ + J) / 4, 0)
      Kr(X, ne, W), g.push(W.x, W.y, W.z), w.push(q.x, 0, q.y), y.push(0.5, 0.5)
      let Q = b++
      for (let se of E) {
        let oe = g.slice(se * 3, se * 3 + 3)
        g.push(...oe), w.push(q.x, 0, q.y)
        let he = y.slice(se * 2, se * 2 + 2)
        y.push(...he), b++
      }
      for (let se = Q + 1; se < b - 1; se++) K(Q, se, se + 1)
      K(Q, b - 1, Q + 1)
    }
  }
}
var fu = class {
  static create(n) {
    return this.build(this.normalizeInputs(n))
  }
  static normalizeInputs(n, t) {
    var r, o, i
    let e = Object.assign(
      {},
      (r = t == null ? void 0 : t.parameters) != null
        ? r
        : {
            width: 100,
            radialSegments: 32,
            heightSegments: 8,
            openEnded: !1,
            thetaStart: 0,
            thetaLength: 360,
            cornerRadiusTop: 0,
            cornerRadiusBottom: 0,
            cornerSegments: 8,
          },
      n.parameters
    )
    return {
      parameters: Object.assign(e, {
        width: Math.abs(e.width),
        height: Math.abs((o = e.height) != null ? o : e.width),
        depth: Math.abs((i = e.depth) != null ? i : e.width),
      }),
    }
  }
  static build(n) {
    let {
        width: t,
        depth: e,
        height: r,
        radialSegments: o,
        heightSegments: i,
        openEnded: s,
        thetaStart: a,
        thetaLength: l,
        cornerRadiusTop: c,
        cornerRadiusBottom: h,
        cornerSegments: p,
      } = n.parameters,
      u
    return (
      c > 0 || h > 0 || l < 360
        ? (u = new Ki(0, t / 2, r, o, i, s, a, (l * Math.PI) / 180, c, h, p, 0, !0))
        : (u = new Gb(t / 2, r, o, i, s)),
      u.scale(1, 1, e / t),
      Object.assign(u, { userData: H(O({}, n), { type: 'ConeGeometry' }) })
    )
  }
}
import {
  BoxBufferGeometry as zb,
  BufferGeometry as Rb,
  Float32BufferAttribute as pl,
  Vector3 as Xi,
} from 'three'
var yu = class {
    static create(n) {
      return this.build(this.normalizeInputs(n))
    }
    static normalizeInputs(n, t) {
      var r, o, i
      let e = Object.assign(
        {},
        (r = t == null ? void 0 : t.parameters) != null
          ? r
          : {
              width: 100,
              widthSegments: 1,
              heightSegments: 1,
              depthSegments: 1,
              cornerRadius: 0,
              cornerSegments: 8,
            },
        n.parameters
      )
      return {
        parameters: Object.assign(e, {
          width: Math.abs(e.width),
          height: Math.abs((o = e.height) != null ? o : e.width),
          depth: Math.abs((i = e.depth) != null ? i : e.width),
        }),
      }
    }
    static build(n) {
      let {
          width: t,
          height: e,
          depth: r,
          widthSegments: o,
          heightSegments: i,
          depthSegments: s,
          cornerRadius: a,
          cornerSegments: l,
        } = n.parameters,
        c
      return (
        a == 0 ? (c = new zb(t, e, r, o, i, s)) : (c = new dl(t, e, r, o, i, s, a, l)),
        Object.assign(c, { userData: H(O({}, n), { type: 'CubeGeometry' }) })
      )
    }
  },
  ul = Math.PI / 2,
  dl = class extends Rb {
    constructor(t = 1, e = 1, r = 1, o = 1, i = 1, s = 1, a = 0, l = 4) {
      super(), (this.type = 'BoxBufferGeometry')
      let c = this
      ;(o = Math.floor(o)),
        (i = Math.floor(i)),
        (s = Math.floor(s)),
        (l = Math.floor(l)),
        (a = Math.min(a, t / 2, e / 2, r / 2))
      let h = [],
        p = [],
        u = [],
        m = [],
        f = 0,
        g = 0
      w('z', 'y', 'x', -1, -1, r, e, t, s, i, 0),
        w('z', 'y', 'x', 1, -1, r, e, -t, s, i, 1),
        w('x', 'z', 'y', 1, 1, t, r, e, o, s, 2),
        w('x', 'z', 'y', 1, -1, t, r, -e, o, s, 3),
        w('x', 'y', 'z', 1, -1, t, e, r, o, i, 4),
        w('x', 'y', 'z', -1, -1, t, e, -r, o, i, 5),
        a > 0 &&
          (y('z', 'y', 'x', -1, -1, 1, r, e, t, s, 0),
          y('z', 'y', 'x', 1, -1, -1, r, e, t, s, 1),
          y('z', 'y', 'x', -1, 1, -1, r, e, t, s, 1),
          y('z', 'y', 'x', 1, 1, 1, r, e, t, s, 0),
          y('x', 'y', 'z', -1, -1, -1, t, e, r, o, 0),
          y('x', 'y', 'z', 1, -1, 1, t, e, r, o, 1),
          y('x', 'y', 'z', -1, 1, 1, t, e, r, o, 0),
          y('x', 'y', 'z', 1, 1, -1, t, e, r, o, 1),
          y('y', 'x', 'z', -1, -1, 1, e, t, r, i, 0),
          y('y', 'x', 'z', 1, -1, -1, e, t, r, i, 1),
          y('y', 'x', 'z', 1, 1, 1, e, t, r, i, 1),
          y('y', 'x', 'z', -1, 1, -1, e, t, r, i, 0),
          b(1, 1, 1),
          b(-1, 1, 1),
          b(1, -1, 1),
          b(-1, -1, 1),
          b(1, 1, -1),
          b(-1, 1, -1),
          b(1, -1, -1),
          b(-1, -1, -1)),
        this.setIndex(h),
        this.setAttribute('position', new pl(p, 3)),
        this.setAttribute('normal', new pl(u, 3)),
        this.setAttribute('uv', new pl(m, 2))
      function w(A, N, v, k, L, d, I, x, C, T, P) {
        let $ = (d - 2 * a) / C,
          J = (I - 2 * a) / T,
          ie = d / 2 - a,
          ue = I / 2 - a,
          ce = x / 2,
          ve = C + 1,
          F = T + 1,
          G = 0,
          B = 0,
          z = new Xi()
        for (let D = 0; D < F; D++) {
          let R = D * J - ue
          for (let Y = 0; Y < ve; Y++) {
            let Z = Y * $ - ie
            ;(z[A] = Z * k),
              (z[N] = R * L),
              (z[v] = ce),
              p.push(z.x, z.y, z.z),
              (z[A] = 0),
              (z[N] = 0),
              (z[v] = x > 0 ? 1 : -1),
              u.push(z.x, z.y, z.z),
              m.push(Y / C),
              m.push(1 - D / T),
              (G += 1)
          }
        }
        for (let D = 0; D < T; D++)
          for (let R = 0; R < C; R++) {
            let Y = f + R + ve * D,
              Z = f + R + ve * (D + 1),
              j = f + (R + 1) + ve * (D + 1),
              V = f + (R + 1) + ve * D
            h.push(Y, Z, V), h.push(Z, j, V), (B += 6)
          }
        c.addGroup(g, B, P), (g += B), (f += G)
      }
      function y(A, N, v, k, L, d, I, x, C, T, P) {
        let $ = (I - 2 * a) / T,
          J = I / 2 - a,
          ie = x / 2 - a,
          ue = C / 2,
          ce = T + 1,
          ve = 0,
          F = 0,
          G = new Xi(),
          B = new Xi()
        for (let z = 0; z < l + 1; z++) {
          let D = (z / l) * ul,
            R = Math.sin(D) * a,
            Y = (1 - Math.cos(D)) * a,
            Z = Math.sin(D),
            j = Math.cos(D)
          ;(G[N] = (ie + R) * L),
            (G[v] = (ue - Y) * d),
            (B[A] = 0),
            (B[N] = Z * Math.sign(G[N])),
            (B[v] = j * Math.sign(G[v]))
          for (let V = 0; V < ce; V++) {
            let E = V * $ - J
            ;(G[A] = E * k),
              p.push(G.x, G.y, G.z),
              u.push(B.x, B.y, B.z),
              m.push(V / T),
              m.push(0),
              (ve += 1)
          }
        }
        for (let z = 0; z < l; z++)
          for (let D = 0; D < T; D++) {
            let R = f + D + ce * z,
              Y = f + D + ce * (z + 1),
              Z = f + (D + 1) + ce * (z + 1),
              j = f + (D + 1) + ce * z
            h.push(R, Y, j), h.push(Y, Z, j), (F += 6)
          }
        c.addGroup(g, F, P), (g += F), (f += ve)
      }
      function b(A, N, v) {
        let k = new Xi(),
          L = new Xi(t / 2, e / 2, r / 2)
        L.subScalar(a)
        let d = [],
          I = A * N * v > 0 ? (C, T, P) => h.push(C, T, P) : (C, T, P) => h.push(C, P, T)
        for (let C = 0; C <= l; C++) {
          let T = [],
            P = ul * (1 - C / l),
            $ = Math.cos(P),
            J = Math.sin(P),
            ie = 0
          for (let ue = 0; ue <= C; ue++) {
            let ce = Math.cos(ie),
              ve = Math.sin(ie)
            ;(k.x = $ * ce), (k.y = J), (k.z = $ * ve)
            let F = L.clone().addScaledVector(k, a)
            p.push(A * F.x, N * F.y, v * F.z),
              u.push(A * k.x, N * k.y, v * k.z),
              m.push(0, 0),
              T.push(f++),
              (ie += ul / C)
          }
          d.push(T)
        }
        let x = d.length - 1
        for (let C = 0; C < x; C++) {
          let T = d[C],
            P = d[C + 1],
            $ = T.length - 1
          I(T[0], P[1], P[0])
          for (let J = 1; J <= $; J++) I(T[J - 1], T[J], P[J]), I(T[J], P[J + 1], P[J])
        }
      }
    }
  }
import {
  BufferGeometry as Fb,
  Float32BufferAttribute as ml,
  Triangle as Vb,
  Vector3 as Dr,
  Vector2 as fl,
} from 'three'
var Xr = class extends Fb {
  constructor(t = [], e = [], r = '', o = 1, i = 0.2, s = 4) {
    super(), (this.type = 'PolyhedronGeometryRound')
    let a = [],
      l = [],
      c = []
    h(),
      p(),
      this.setAttribute('position', new ml(a, 3)),
      this.setAttribute('normal', new ml(c, 3)),
      this.setAttribute('uv', new ml(l, 2))
    return
    function h() {
      var ve
      ;(i = Math.min(1 - 1e-5, i)), i == 0 && (s = 0)
      let m = {
          IcosahedronGeometry: 5,
          DodecahedronGeometry: 3,
          HexahedronGeometry: 3,
          OctahedronGeometry: 4,
          TetrahedronGeometry: 3,
        }[r],
        f = new Dr(),
        g = f.clone(),
        w = new Vb(),
        y = i * o,
        b = o - y,
        A = s + 1,
        N = new Dr(),
        v = (F, G) => N.subVectors(F, G).normalize(),
        k = (F, G) =>
          Array(F)
            .fill(void 0)
            .map(G),
        L = k(t.length / 3, (F, G) => new Dr().fromArray(t, G * 3).setLength(o)),
        d = [],
        I = 1e6
      for (let F = 0; F < L.length; F++) {
        let G = L[F],
          B = [],
          z,
          D,
          R,
          Y = 1e10,
          Z = -1
        for (; (Z = e.indexOf(F, Z + 1)) != -1; ) {
          let U = Z - (Z % 3)
          ;(z = e[U + ((Z + 1) % 3)]),
            (D = e[U + ((Z + 2) % 3)]),
            (R = G.distanceToSquared(L[z])),
            (Y = Math.min(Y, R)),
            B.push([z, D, R])
        }
        Y += 1e-6
        let j = [],
          V = 0,
          E = B.length
        for (let U = 0; U < E; U++) {
          ;[z, D, R] = B[V]
          let ne = ((ve = d[z]) == null ? void 0 : ve.includes(F)) == !0
          R <= Y && j.push(z + +ne * I), (V = B.findIndex((q) => q[0] == D))
        }
        d.push(j)
      }
      let x = []
      {
        let F = 0,
          G = 0,
          B,
          z,
          D = m == 3
        for (let R = 0; R <= s; R++) {
          ;(B = (R * (R + 1)) / 2), (z = ((R + 1) * (R + 2)) / 2)
          for (let Y = 0; Y < s - R; Y++)
            ([F, G] = [B + Y + R + 2, z + Y + R + 3]),
              x.push(B, z, ...(D ? [G, B] : [F, z]), G, F),
              ([B, z] = [F, G])
          x.push(B, z, B + s + 2)
        }
      }
      let C = f.clone(),
        T = f.clone(),
        P = f.clone(),
        $ = f.clone(),
        J = f.clone(),
        ie = [],
        ue = k(L.length, () => k(m, () => f.clone()))
      for (let F = 0; F < L.length; F++) {
        f.copy(L[F]).normalize(), C.copy(f).multiplyScalar(b)
        let G = d[F]
        for (let j = 0; j < G.length; j++) {
          let V = G[j],
            E = G[(j + 1) % m]
          w.setFromPointsAndIndices(L, F, V % I, E % I),
            w.b.sub(w.a).setLength(1e10).add(w.a),
            w.c.sub(w.a).setLength(1e10).add(w.a),
            w.closestPointToPoint(C, ue[F][j])
        }
        let B = [],
          z = [],
          D = [],
          R = new Dr()
        s == 0 && [...ue[F]].reduce((j, V) => j.add(V), R).multiplyScalar(1 / m)
        for (let j = 0; j < m; j++) {
          let V = [],
            E = (j - 1 + m) % m,
            U = ue[F][E],
            ne = ue[F][j]
          f.copy(U).sub(C), g.copy(ne).sub(C)
          let q = C.angleTo(f),
            W = f.angleTo(g),
            K = Math.cos(q) * y
          s == 0 ? T.copy(R) : T.copy(C).setLength(b + K), z.push(K)
          let X = [T, U, ne]
          for (let Q = 0; Q < 2; Q++) {
            let se = X[Q],
              oe = X[Q + 1]
            $.subVectors(se, C), J.subVectors(oe, C), P.crossVectors($, J).normalize()
            for (let he = 0; he < A; he++) {
              let Ge = ([q, W][Q] * he) / A
              f.copy($).applyAxisAngle(P, Ge).add(C),
                B.push(f.clone()),
                Q && (v(f, C), V.push([he == 0 ? se : f.clone(), N.clone()]))
            }
            Q && (v(oe, C), V.push([oe, N.clone()]))
          }
          D.push(V)
        }
        ie.push(D)
        let Y = 2 * A,
          Z = 2
        for (let j = 0; j < m; j++) {
          let V = Y * j,
            E = Y * ((j + 1) % m),
            U = [B[V]]
          for (let q = 1; q < A; q++) {
            ;($ = B[V + q]), (J = B[E + q]), U.push($)
            for (let W = 1, K = q - Z + 1; W <= K; W++)
              f.lerpVectors($, J, W / (K + 1)), f.sub(C).setLength(z[j]).add(C), U.push(f.clone())
            U.push(J)
          }
          for (let q = 0; q < A; q++) U.push(B[q + A + V])
          U.push(B[E + A])
          let ne = x.map((q) => U[q])
          a.push(...ne.map((q) => [q.x, q.y, q.z]).flat()),
            c.push(...ne.map((q) => (v(q, C), [N.x, N.y, N.z])).flat())
        }
      }
      let ce = []
      for (let F = 0; F < d.length; F++)
        for (let G = 0; G < m; G++) {
          let B = d[F][G]
          if (B < I) {
            let z = d[B].findIndex((Y) => Y % I == F),
              D = ie[F][G],
              R = ie[B][z]
            for (let Y = 0; Y < A; Y++) {
              let Z = D[Y],
                j = R[A - Y],
                V = D[Y + 1],
                E = R[A - (Y + 1)]
              ;[Z, j, V, V, j, E].forEach((U) => {
                a.push(U[0].x, U[0].y, U[0].z), c.push(U[1].x, U[1].y, U[1].z)
              })
            }
            ce.push(D[0][0], R[A][0], D[A][0], R[0][0])
          }
        }
      for (; ce.length; ) {
        let F, G, B, z
        ;[F, G] = ce.splice(0, 2)
        let D = [F]
        for (; F != G; )
          D.push(G), (B = ce.indexOf(G)), (z = B % 2), (G = ce.splice(B - z, 2)[1 - z])
        N.subVectors(D[0], D[1]).cross(f.subVectors(D[0], D[2])).normalize()
        let R = N.dot(D[0]) < 0
        R && N.negate()
        for (let Y = 1; Y <= D.length - 2; Y++)
          [D[Y + +R], D[Y + 1 - +R], D[0]].forEach((Z) => {
            a.push(Z.x, Z.y, Z.z), c.push(N.x, N.y, N.z)
          })
      }
    }
    function p() {
      let u = new Dr()
      for (let L = 0; L < a.length; L += 3) {
        ;(u.x = a[L + 0]), (u.y = a[L + 1]), (u.z = a[L + 2])
        let d = v(u) / 2 / Math.PI + 0.5,
          I = k(u) / Math.PI + 0.5
        l.push(d, 1 - I)
      }
      let m = new Dr(),
        f = new Dr(),
        g = new Dr(),
        w = new Dr(),
        y = new fl(),
        b = new fl(),
        A = new fl(),
        N = (L, d, I, x) => {
          x < 0 && L.x === 1 && (l[d] = L.x - 1),
            I.x === 0 && I.z === 0 && (l[d] = x / 2 / Math.PI + 0.5)
        }
      for (let L = 0, d = 0; L < a.length; L += 9, d += 6) {
        m.set(a[L + 0], a[L + 1], a[L + 2]),
          f.set(a[L + 3], a[L + 4], a[L + 5]),
          g.set(a[L + 6], a[L + 7], a[L + 8]),
          y.set(l[d + 0], l[d + 1]),
          b.set(l[d + 2], l[d + 3]),
          A.set(l[d + 4], l[d + 5]),
          w.copy(m).add(f).add(g).divideScalar(3)
        let I = v(w)
        N(y, d + 0, m, I), N(b, d + 2, f, I), N(A, d + 4, g, I)
      }
      for (let L = 0; L < l.length; L += 6) {
        let d = l[L + 0],
          I = l[L + 2],
          x = l[L + 4],
          C = Math.max(d, I, x),
          T = Math.min(d, I, x)
        C > 0.9 &&
          T < 0.1 &&
          (d < 0.2 && (l[L + 0] += 1), I < 0.2 && (l[L + 2] += 1), x < 0.2 && (l[L + 4] += 1))
      }
      function v(L) {
        return Math.atan2(L.z, -L.x)
      }
      function k(L) {
        return Math.atan2(-L.y, Math.sqrt(L.x * L.x + L.z * L.z))
      }
    }
  }
  static fromJSON(t) {
    return new Xr(t.vertices, t.indices, t.radius, t.corner, t.cornerSides)
  }
}
import { DodecahedronBufferGeometry as jb } from 'three'
var gu = class {
    static create(n) {
      return this.build(this.normalizeInputs(n))
    }
    static normalizeInputs(n, t) {
      var r, o, i
      let e = Object.assign(
        {},
        (r = t == null ? void 0 : t.parameters) != null
          ? r
          : { width: 100, detail: 0, corner: 0, cornerSides: 4 },
        n.parameters
      )
      return {
        parameters: Object.assign(e, {
          width: Math.abs(e.width),
          height: Math.abs((o = e.height) != null ? o : e.width),
          depth: Math.abs((i = e.depth) != null ? i : e.width),
        }),
      }
    }
    static build(n) {
      let { width: t, height: e, depth: r, detail: o, corner: i, cornerSides: s } = n.parameters,
        a = o === 0 && i !== 0 ? new Zi(t * 0.5, i, s) : new jb(t * 0.5, o)
      return (
        a.scale(1, e / t, r / t),
        Object.assign(a, { userData: H(O({}, n), { type: 'DodecahedronGeometry' }) })
      )
    }
  },
  Zi = class extends Xr {
    constructor(t = 1, e = 0.2, r = 4) {
      let o = (1 + Math.sqrt(5)) / 2,
        i = 1 / o,
        s = [
          -1,
          -1,
          -1,
          -1,
          -1,
          1,
          -1,
          1,
          -1,
          -1,
          1,
          1,
          1,
          -1,
          -1,
          1,
          -1,
          1,
          1,
          1,
          -1,
          1,
          1,
          1,
          0,
          -i,
          -o,
          0,
          -i,
          o,
          0,
          i,
          -o,
          0,
          i,
          o,
          -i,
          -o,
          0,
          -i,
          o,
          0,
          i,
          -o,
          0,
          i,
          o,
          0,
          -o,
          0,
          -i,
          o,
          0,
          -i,
          -o,
          0,
          i,
          o,
          0,
          i,
        ],
        a = [
          3, 11, 7, 3, 7, 15, 3, 15, 13, 7, 19, 17, 7, 17, 6, 7, 6, 15, 17, 4, 8, 17, 8, 10, 17, 10,
          6, 8, 0, 16, 8, 16, 2, 8, 2, 10, 0, 12, 1, 0, 1, 18, 0, 18, 16, 6, 10, 2, 6, 2, 13, 6, 13,
          15, 2, 16, 18, 2, 18, 3, 2, 3, 13, 18, 1, 9, 18, 9, 11, 18, 11, 3, 4, 14, 12, 4, 12, 0, 4,
          0, 8, 11, 9, 5, 11, 5, 19, 11, 19, 7, 19, 5, 14, 19, 14, 4, 19, 4, 17, 1, 12, 14, 1, 14,
          5, 1, 5, 9,
        ],
        l = 'DodecahedronGeometry'
      super(s, a, l, t, e, r), (this.type = l)
    }
    static fromJSON(t) {
      return new Zi(t.radius, t.corner, t.cornerSides)
    }
  }
import {
  EventDispatcher as Zb,
  Plane as Qb,
  Shape as Ou,
  Vector2 as Br,
  Vector3 as ev,
  MathUtils as wl,
  LineCurve as Ll,
  QuadraticBezierCurve as Iu,
  CubicBezierCurve as Ws,
} from 'three'
import {
  CubicBezierCurve as Hs,
  EllipseCurve as Ub,
  LineCurve as qs,
  LineCurve3 as kb,
  MathUtils as Hb,
  QuadraticBezierCurve as yl,
  SplineCurve as qb,
  Vector2 as er,
  Vector3 as xu,
} from 'three'
var Qi = 1e-12,
  ri = class {
    constructor(t) {
      this.position = new er()
      this.startPosition = new er()
      this.uuid = Hb.generateUUID()
      this.position = t.clone()
    }
    start() {
      this.reset()
    }
    reset() {
      this.startPosition.copy(this.position)
    }
    applyOffset(t) {
      this.position.copy(this.startPosition).add(t)
    }
    copy(t) {
      return this.position.copy(t.position), this.startPosition.copy(t.startPosition), this
    }
    clone() {
      return new ri(this.position).copy(this)
    }
    toJSON() {
      return [this.position.x, this.position.y]
    }
  },
  oi = class extends ri {
    constructor(e) {
      super(e.position)
      this.parent = e
    }
    copy(e) {
      return super.copy(e), this
    }
    clone() {
      return new oi(this.parent).copy(this)
    }
  },
  tr = class extends ri {
    constructor(e, r) {
      super(r)
      this.controls = []
      this.roundness = 0
      this.areControlsDirectionsMirrored = !0
      ;(this.uuid = e), this.controls.push(new oi(this), new oi(this))
    }
    static create(e, r) {
      let o = new tr(e, new er(...r.position))
      return (
        o.controls[0].position.set(...r.controlPrevious.position),
        o.controls[1].position.set(...r.controlNext.position),
        (o.roundness = r.roundness),
        (o.areControlsDirectionsMirrored = r.areControlsDirectionsMirrored),
        o
      )
    }
    getOppositeControl(e) {
      let r = this.controls.indexOf(e)
      return r === 0 ? this.controls[1] : r === 1 ? this.controls[0] : null
    }
    applyOffsetToControls(e, r = 1) {
      for (let o = 0, i = this.controls.length; o < i; o++) {
        let s = this.controls[o]
        this.position.distanceTo(s.position) <= r
          ? s.position.copy(this.position)
          : s.applyOffset(e)
      }
    }
    controlsMoved() {
      return !(
        this.position.equals(this.controls[0].position) &&
        this.position.equals(this.controls[1].position)
      )
    }
    copy(e) {
      return (
        super.copy(e),
        this.controls[0].copy(e.controls[0]),
        this.controls[1].copy(e.controls[1]),
        (this.roundness = e.roundness),
        (this.uuid = e.uuid),
        this
      )
    }
    clone() {
      return new tr(this.uuid, this.position).copy(this)
    }
    toJSON() {
      return super
        .toJSON()
        .concat(this.controls[0].toJSON(), this.controls[1].toJSON(), [this.roundness])
    }
  },
  gl = (n) => n,
  tn = new er(),
  xl = new er(),
  Wb = new er(),
  $b = new er(),
  Jb = new er(),
  Yb = new er(),
  bu = new xu(),
  vu = new xu()
function Su(n) {
  let t = new er()
  t.addVectors(n.v0, tn.subVectors(n.v1, n.v0).multiplyScalar(2 / 3))
  let e = new er()
  return (
    e.addVectors(n.v2, xl.subVectors(n.v1, n.v2).multiplyScalar(2 / 3)), new Hs(n.v0, t, e, n.v2)
  )
}
function en(n, t, e = Number.EPSILON) {
  return Math.abs(n - t) < e
}
function Kb(n, t, e = Number.EPSILON) {
  return n.distanceTo(t) < e
}
function Xb(n, t, e = Number.EPSILON) {
  return n.distanceTo(t) < e
}
function bl(n, t, e) {
  let r = Math.sqrt(Math.pow(t.x - n.x, 2) + Math.pow(t.y - n.y, 2)),
    o = Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2)),
    i = Math.sqrt(Math.pow(e.x - n.x, 2) + Math.pow(e.y - n.y, 2))
  return Math.acos((o * o + r * r - i * i) / (2 * o * r))
}
function wu(n, t, e, r, o) {
  let i = Math.sqrt(Math.pow(t.x - n.x, 2) + Math.pow(t.y - n.y, 2)),
    s = (n.y + t.y) / 2,
    a = (n.x + t.x) / 2,
    l = (Math.sqrt(Math.pow(e, 2) - Math.pow(i / 2, 2)) * (n.y - t.y)) / i,
    c = (Math.sqrt(Math.pow(e, 2) - Math.pow(i / 2, 2)) * (t.x - n.x)) / i
  return r.set(a + l, s + c), o.set(a - l, s - c), [r, o]
}
function Lu(n, t, e) {
  let r = n.distanceTo(e),
    o = t.distanceTo(e)
  return r < o ? t : n
}
function Cu(n, t, e, r, o, i) {
  let s = t.x - n.x,
    a = t.y - n.y,
    l = e.x - n.x,
    c = e.y - n.y,
    h = Math.sqrt((s + l) * (s + l) + (a + c) * (a + c)),
    p
  return (
    bl(t, n, e) > Math.PI && (h *= -1),
    en(c, a)
      ? (p = ((a + c) * (r / h - 0.5) * 8) / 3 / (s - l))
      : (p = ((s + l) * (r / h - 0.5) * 8) / 3 / (c - a)),
    o.set(t.x - p * a, t.y + p * s),
    i.set(e.x + p * c, e.y - p * l),
    [o, i]
  )
}
function vl(n, t) {
  return n.position.equals(n.controls[1].position) && t.position.equals(t.controls[0].position)
}
function Tu(n, t, e, r, o = 0.5) {
  let i = tn.subVectors(t, n).multiplyScalar(o).add(n),
    s = xl.subVectors(e, t).multiplyScalar(o).add(t),
    a = Wb.subVectors(r, e).multiplyScalar(o).add(e),
    l = i,
    c = $b.subVectors(s, i).multiplyScalar(o).add(i),
    h = Jb.subVectors(a, s).multiplyScalar(o).add(s),
    p = a,
    u = Yb.subVectors(h, c).multiplyScalar(o).add(c)
  return [n.x, n.y, l.x, l.y, c.x, c.y, u.x, u.y, h.x, h.y, p.x, p.y, r.x, r.y]
}
function Nu(n, t, e = 12, r = !0) {
  let o = vu.set(0, 0, 0),
    i,
    s = 0,
    a = []
  for (let l = 0; l < t.length; l++) {
    let c = gl(t[l]),
      h = tn,
      p = Zr(c, e)
    a.push(p)
    for (let u = 0; u <= p; u++)
      if (c instanceof Hs || c instanceof yl || c instanceof qs) {
        if ((c.getPoint(u / p, h), o.set(h.x, h.y, 0), i !== void 0 && Xb(i, o))) continue
        i === void 0 && (i = bu), i.copy(o), n.setXYZ(s, o.x, o.y, o.z), s++
      }
  }
  return (
    r &&
      s > 1 &&
      !(
        n.getX(s - 1) === n.getX(0) &&
        n.getY(s - 1) === n.getY(0) &&
        n.getZ(s - 1) === n.getZ(0)
      ) &&
      (n.setXYZ(s, n.getX(0), n.getY(0), n.getZ(0)), s++),
    n
  )
}
function Mu(n, t, e, r = 12, o = !0) {
  let i = vu.set(0, 0, 0),
    s = 0,
    a = []
  for (let l = 0; l < t.length; l++) {
    if (e[l] === !1) continue
    let c,
      h = gl(t[l]),
      p = tn,
      u = Zr(h, r)
    a.push(u)
    for (let m = 0; m <= u; m++)
      if (h instanceof Hs || h instanceof yl || h instanceof qs) {
        if ((h.getPoint(m / u, p), i.set(p.x, p.y, 0), c != null && c.equals(i))) continue
        c === void 0
          ? (c = bu)
          : (n.setXYZ(s, c.x, c.y, c.z), s++, n.setXYZ(s, i.x, i.y, i.z), s++),
          c.copy(i)
      }
  }
  return (
    o &&
      s > 1 &&
      !(
        n.getX(s - 1) === n.getX(0) &&
        n.getY(s - 1) === n.getY(0) &&
        n.getZ(s - 1) === n.getZ(0)
      ) &&
      (n.setXYZ(s, n.getX(0), n.getY(0), n.getZ(0)), s++),
    a
  )
}
function Sl(n, t = 12, e = !1) {
  let r = []
  for (let o = 0, i = n.length; o < i; o++) {
    let s = n[o],
      a = 0
    if (e && s.roundedCurveCorner !== void 0) {
      let l = Zr(s.roundedCurveCorner, t) * 0.5
      o > 0 && (r[o - 1] += l), (a += l)
    }
    s.curveAfter !== void 0 && (a += Zr(s.curveAfter, t)), r.push(a)
  }
  return (
    n.length > 0 &&
      e &&
      n[0].roundedCurveCorner !== void 0 &&
      (r[n.length - 1] += Zr(n[0].roundedCurveCorner, t) * 0.5),
    r
  )
}
function Zr(n, t = 12) {
  return n && n instanceof Ub
    ? t * 2
    : n && (n instanceof qs || n instanceof kb)
    ? 1
    : n && n instanceof qb
    ? t * n.points.length
    : t
}
function Pu(n, t, e = 12, r = !0) {
  let o,
    i = 0
  for (let s = 0; s < t.length; s++) {
    let a = gl(t[s]),
      l = Zr(a, e),
      c = tn
    for (let h = 0; h <= l; h++)
      if (a instanceof Hs || a instanceof yl || a instanceof qs) {
        if ((a.getPoint(h / l, c), o !== void 0 && Kb(o, c, Qi))) continue
        o === void 0 && (o = xl), o.copy(c), n.push(c.x, c.y), i++
      }
  }
  return (
    en(n[0], n[n.length - 2], Qi) && en(n[1], n[n.length - 1], Qi) && (n.pop(), n.pop()),
    r && i > 1 && !(en(n[i - 1], n[1], Qi) && en(n[i - 2], n[0], Qi)) && (n.push(n[0], n[1]), i++),
    n
  )
}
var Cl = new Br(),
  tv = new Br(),
  rv = new Br(),
  ov = new Br(),
  iv = new Br(),
  nv = new Br(),
  Pe = class extends Ou {
    constructor(e = 100, r = 100) {
      super()
      this.points = []
      this.shapeHoles = []
      this.eventDispatcher = new Zb()
      this.plane = new Qb(new ev(0, 0, -1))
      this.subdivision = 0
      this.controlSnapDistance = 4
      this.pointIDs = 0
      this.isMesh2D = !1
      this._roundness = 0
      this.isClosed = !1
      this.useCubicForRoundedCorners = !0
      this.uuid = wl.generateUUID()
      this.needsUpdate = !1
      this.roundedCurves = []
      ;(this._width = e), (this._height = r)
    }
    static createFromState(e, r, o) {
      let i = new Pe()
      return (
        (i.isClosed = e.isClosed),
        (i.points = e.points.map((s) => tr.create(s.id, s.data))),
        typeof e.roundness == 'number' && (i.roundness = e.roundness),
        (i.shapeHoles = e.shapeHoles.map((s) => Pe.createFromState(s))),
        r !== void 0 && o !== void 0 && i.applySize(r, o),
        i.update(),
        i
      )
    }
    get width() {
      return this._width
    }
    get height() {
      return this._height
    }
    get roundness() {
      return this._roundness
    }
    set roundness(e) {
      if (this._roundness !== e) {
        this._roundness = e
        for (let r = 0, o = this.points.length; r < o; r++) this.points[r].roundness = e
        this.needsUpdate = !0
      }
    }
    getPointsIndexesByIds(e) {
      return e.map((r) => this.getPointIndexById(r)).filter((r) => r >= 0)
    }
    getPointIndexById(e) {
      let r = this.points.length,
        o = this.points.findIndex((i) => i.uuid === e)
      if (o < 0) {
        let i = r
        for (let s = 0, a = this.shapeHoles.length; s < a; s++) {
          let l = this.shapeHoles[s],
            c = l.points.length - 1,
            h = l.getPointIndexById(e)
          if (h < 0) i += c
          else return h + i
        }
      }
      return o
    }
    getLineIndexById(e) {
      return this.getPointIndexById(e)
    }
    getBezierPoint(e) {
      if (e <= this.points.length - 1) return this.points[e]
      if (this.shapeHoles.length > 0)
        for (let r = 0, o = this.shapeHoles.length; r < o; r++) {
          let i = this.shapeHoles[r],
            s = e - this.points.length
          if (s <= i.points.length - 1) return i.points[s]
        }
      throw new Error('This shape does not have a point for this index: ' + e)
    }
    getBezierPointIndex(e) {
      let r = this.points.indexOf(e)
      if (r >= 0) return r
      if (((r = this.points.length), this.shapeHoles.length > 0))
        for (let o = 0, i = this.shapeHoles.length; o < i; o++) {
          let s = this.shapeHoles[o],
            a = s.points.indexOf(e)
          if (a >= 0) return r + a
          r += s.points.length
        }
      return -1
    }
    getAllPoints() {
      let e = [].concat(...this.shapeHoles.map((r) => r.points))
      return [...this.points, ...e]
    }
    applySize(e, r) {
      e === 0 && (e = 0.001), r === 0 && (r = 0.001), (this._width = e), (this._height = r)
    }
    applyScale(e, r) {
      let o = Cl.set(e, r)
      for (let i = 0, s = this.points.length; i < s; i++) {
        let a = this.points[i]
        a.position.multiply(o),
          a.controls[0].position.multiply(o),
          a.controls[1].position.multiply(o)
      }
      for (let i = 0, s = this.shapeHoles.length; i < s; i++) this.shapeHoles[i].applyScale(e, r)
      this._update(!1)
    }
    createPoint(e, r = 0, o = wl.generateUUID()) {
      let i
      e instanceof Br ? (i = e) : (i = new Br(e, r))
      let s = new tr(o, i)
      return (s.roundness = this.roundness), s
    }
    addPoint(e) {
      this.points.push(e), (this.needsUpdate = !0)
    }
    addPointAt(e, r) {
      this.points.splice(r, 0, e), (this.needsUpdate = !0)
    }
    getPointByUuid(e) {
      for (let r = 0, o = this.points.length; r < o; r++) {
        let i = this.points[r]
        if (i.uuid === e) return i
      }
      for (let r = 0, o = this.shapeHoles.length; r < o; r++) {
        let s = this.shapeHoles[r].getPointByUuid(e)
        if (s) return s
      }
    }
    getFirstPoint() {
      return this.points[0]
    }
    getLastPoint() {
      return this.points[this.points.length - 1]
    }
    removePoint(e) {
      let r = this.points.indexOf(e)
      r >= 0 && this.points.splice(r, 1), (this.needsUpdate = !0)
    }
    removePointById(e) {
      let r = this.points.find((o) => o.uuid === e)
      r && this.removePoint(r)
    }
    update(e = !0) {
      for (let r = 0, o = this.shapeHoles.length; r < o; r++) this.shapeHoles[r].update(!1)
      this._update(e)
    }
    extractShapePointsToBuffer(e, r = 12, o = !1) {
      ;(this.subdivision = r), this.curveDivisions === void 0 && this.computeCurveDivisions(r)
      let i = o ? this.roundedCurveDivisions : this.curveDivisions
      return (
        Nu(e, o ? this.roundedCurves : this.curves, r, this.autoClose),
        i.reduce((s, a) => s + a, 0) + 1
      )
    }
    computeCurveDivisions(e = 12) {
      return (
        (this.curveDivisions = Sl(this.points, e, !1)),
        (this.roundedCurveDivisions = Sl(this.points, e, !0)),
        this.curveDivisions
      )
    }
    extractFilteredShapePointsToBuffer(e, r, o = 12) {
      return Mu(e, this.curves, r, o, this.autoClose).reduce((s, a) => s + a, 0) * 2
    }
    extractShapePointsToFlatArray(e, r = 12) {
      return (
        (this.subdivision = r),
        this.curveDivisions === void 0 && this.computeCurveDivisions(r),
        Pu(e, this.roundedCurves, r, this.autoClose)
      )
    }
    getCurveIndexFromVertexId(e, r = !1) {
      let o = 0
      this.curveDivisions === void 0 && this.computeCurveDivisions(this.subdivision)
      let i = r ? this.roundedCurveDivisions : this.curveDivisions,
        s = 0
      r &&
        this.points[0].roundedCurveCorner !== void 0 &&
        (s = Zr(this.points[0].roundedCurveCorner, this.subdivision) * 0.5)
      let a = e - s
      a < 0 && (a += i.reduce((l, c) => l + c, 0))
      for (let l = 0, c = i.length; l < c; l++) {
        let h = i[l]
        if (a < o + h) return [l, (a - o + 1) / h]
        o += h
      }
      return [0, 1]
    }
    getCurveT(e, r, o) {
      let i = this.points[e],
        s = this.points[e >= this.points.length - 1 ? 0 : e + 1],
        a = this.curveDivisions,
        l = a[e]
      if (vl(i, s)) {
        let p = i.position.distanceTo(s.position)
        return i.position.distanceTo(Cl.set(o.x, o.y)) / p
      }
      let c = 0
      for (let p = 0; p < e; p++) c += a[p]
      return (r - c) / l
    }
    dispose() {
      this.eventDispatcher = null
    }
    _applyCurveForPoint(e, r) {
      vl(r, e)
        ? this.lineTo(e.position.x, e.position.y)
        : this.bezierCurveTo(
            r.controls[1].position.x,
            r.controls[1].position.y,
            e.controls[0].position.x,
            e.controls[0].position.y,
            e.position.x,
            e.position.y
          )
      let o = this.curves[this.curves.length - 1]
      ;(e.curveBefore = o), (r.curveAfter = o)
      let i = o.clone()
      ;(e.roundedCurveBefore = i),
        (r.roundedCurveAfter = i),
        (e.roundedCurveCorner = void 0),
        this.roundedCurves.push(i)
    }
    _update(e = !0) {
      var o
      if (((this.curves = []), (this.roundedCurves = []), !this.points.length)) return
      for (let i = 0, s = this.points.length; i < s; i++) {
        let a = this.points[i]
        if (i === 0) this.moveTo(a.position.x, a.position.y)
        else {
          let l = this.points[i - 1]
          this._applyCurveForPoint(a, l)
        }
      }
      let r = this.getLastPoint()
      if ((r != null && r.curveAfter && (r.curveAfter = void 0), this.isClosed)) {
        let i = this.points[0],
          s = this.points[this.points.length - 1]
        this._applyCurveForPoint(i, s)
      }
      if (this.points.length > 2) {
        let i = 0
        for (let s = 0, a = this.points.length; s < a; s++) {
          let l = this.points[s],
            c = l.roundness
          if (!l.controlsMoved() && c > 0) {
            let h = l.curveBefore,
              p = l.curveAfter
            if (h === void 0 || p === void 0) continue
            let u = l.roundedCurveBefore,
              m = l.roundedCurveAfter,
              f = h.getLength(),
              g = p.getLength(),
              w = Math.min(c, f * 0.499),
              y = Math.min(c, g * 0.499),
              b = Math.min(w, y),
              A = 1 - b / f,
              N = b / g,
              v = h.getPointAt(A, Cl),
              k = p.getPointAt(N, tv)
            this._subSplitCurve(h, u, A, v, void 0), this._subSplitCurve(p, m, N, void 0, k)
            let L
            if (this.useCubicForRoundedCorners) {
              let d = bl(v, l.position, k) / 2,
                I = Math.tan(d) * v.distanceTo(l.position),
                [x, C] = wu(v, k, I, rv, ov),
                T = Lu(x, C, l.position),
                [P, $] = Cu(T, v, k, I, iv, nv)
              L = new Ws(v.clone(), P.clone(), $.clone(), k.clone())
            } else L = new Iu(v.clone(), l.position.clone(), k.clone())
            ;(l.roundedCurveCorner = L), this.roundedCurves.splice(s + i, 0, L), i++
          }
        }
      }
      e && ((o = this.eventDispatcher) == null || o.dispatchEvent({ type: 'update' }))
    }
    _subSplitCurve(e, r, o, i, s) {
      if (e instanceof Ll) i !== void 0 && r.v2.copy(i), s !== void 0 && r.v1.copy(s)
      else {
        let a = e,
          l = r,
          c = a.getUtoTmapping(o, 0),
          h = Tu(a.v0, a.v1, a.v2, a.v3, c)
        return (
          i !== void 0 &&
            (l.v0.set(h[0], h[1]),
            l.v1.set(h[2], h[3]),
            l.v2.set(h[4], h[5]),
            l.v3.set(h[6], h[7])),
          s !== void 0 &&
            (l.v0.set(h[6], h[7]),
            l.v1.set(h[8], h[9]),
            l.v2.set(h[10], h[11]),
            l.v3.set(h[12], h[13])),
          l
        )
      }
      return r
    }
    clone() {
      let e = new Pe(this._width, this._height)
      return (
        (e.points = this.points.map((r) => r.clone())),
        (e.isClosed = this.isClosed),
        (e.roundness = this.roundness),
        (e.isMesh2D = this.isMesh2D),
        (e.shapeHoles = this.shapeHoles.map((r) => r.clone())),
        e
      )
    }
    toJSON() {
      return {
        points: this.points.reduce((e, r) => e.concat(r.toJSON()), []),
        shapeHoles: this.shapeHoles.map((e) => e.toJSON()),
        isClosed: this.isClosed,
        roundness: this.roundness,
      }
    }
    fromJSON(e) {
      var o
      ;(this.points = []), (this.pointIDs = 0)
      let r = e.points.length / 7
      for (let i = 0; i < r; i++) {
        let s = i * 7,
          a = e.points[s + 0],
          l = e.points[s + 1],
          c = e.points[s + 2],
          h = e.points[s + 3],
          p = e.points[s + 4],
          u = e.points[s + 5],
          m = e.points[s + 6],
          f = new tr(wl.generateUUID(), new Br(a, l))
        f.controls[0].position.set(c, h),
          f.controls[1].position.set(p, u),
          (f.roundness = m),
          this.points.push(f)
      }
      return (
        (this.shapeHoles =
          (o = e.shapeHoles) != null && o.length
            ? e.shapeHoles.map((i) => {
                let s = new Pe()
                return s.fromJSON(i), s
              })
            : []),
        (this.isClosed = e.isClosed),
        (this._roundness = e.roundness),
        this._update(),
        this
      )
    }
    fromShape(e) {
      let r = (i, s) => {
          s instanceof Ws && s.v3.equals(i.position) && i.controls[0].position.copy(s.v2)
        },
        o = (i) => {
          let s = [],
            a,
            l
          for (a = 0, l = i.length; a < l; a++) i[a] instanceof Iu && (i[a] = Su(i[a]))
          for (a = 0, l = i.length; a < l; a++) {
            let p = i[a],
              u = a > 0 ? i[a - 1] : null,
              m
            p instanceof Ws
              ? ((m = this.createPoint(p.v0)), m.controls[1].position.copy(p.v1))
              : p instanceof Ll && (m = this.createPoint(p.v1)),
              m !== void 0 && (u !== null && r(m, u), s.push(m))
          }
          let c = i[i.length - 1],
            h = !1
          return (
            c instanceof Ws
              ? c.v3.equals(s[0].position) && (s[0].controls[0].position.copy(c.v2), (h = !0))
              : c instanceof Ll && c.v2.equals(s[0].position) && (h = !0),
            (this.isClosed = h),
            s
          )
        }
      return (
        (this.points = o(e.curves)),
        e instanceof Ou &&
          (this.shapeHoles = e.holes.map((i) => {
            let s = new Pe()
            return s.fromShape(i), s
          })),
        this.update(),
        this
      )
    }
  }
var Nl = Math.PI * 2
function Tl({ x: n, y: t }, e, r, o, i) {
  return { x: n * e + o, y: t * r + i }
}
function sv(n, t) {
  let e =
      t === 1.5707963267948966
        ? 0.551915024494
        : t === -1.5707963267948966
        ? -0.551915024494
        : 1.3333333333333333 * Math.tan(t / 4),
    r = Math.cos(n),
    o = Math.sin(n),
    i = Math.cos(n + t),
    s = Math.sin(n + t)
  return [
    { x: r - o * e, y: o + r * e },
    { x: i + s * e, y: s - i * e },
    { x: i, y: s },
  ]
}
function Au(n, t, e, r) {
  let o = n * r - t * e < 0 ? -1 : 1,
    i = Math.min(1, Math.max(-1, n * e + t * r))
  return o * Math.acos(i)
}
function av(n, t, e, r, o, i, s, a, l, c) {
  let h = Math.pow(o, 2),
    p = Math.pow(i, 2),
    u = Math.pow(s, 2),
    m = Math.pow(a, 2),
    f = h * p - h * m - p * u
  f < 0 && (f = 0), (f /= h * m + p * u), (f = Math.sqrt(f) * (l === c ? -1 : 1))
  let g = ((f * o) / i) * a,
    w = ((f * -i) / o) * s,
    y = g + (n + e) / 2,
    b = w + (t + r) / 2,
    A = (s - g) / o,
    N = (a - w) / i,
    v = (-s - g) / o,
    k = (-a - w) / i,
    L = Au(1, 0, A, N),
    d = Au(A, N, v, k)
  return (
    !c && d > 0 && (d -= Nl), c && d < 0 && (d += Nl), { centerx: y, centery: b, ang1: L, ang2: d }
  )
}
function Du({ px: n, py: t, cx: e, cy: r, rx: o, ry: i, largeArcFlag: s, sweepFlag: a }) {
  let l = []
  if (o === 0 || i === 0) return []
  let c = (n - e) / 2,
    h = (t - r) / 2
  if (c === 0 && h === 0) return []
  ;(o = Math.abs(o)), (i = Math.abs(i))
  let p = Math.pow(c, 2) / Math.pow(o, 2) + Math.pow(h, 2) / Math.pow(i, 2)
  p > 1 && ((o *= Math.sqrt(p)), (i *= Math.sqrt(p)))
  let u = av(n, t, e, r, o, i, c, h, s, a),
    { ang1: m, ang2: f } = u,
    { centerx: g, centery: w } = u,
    y = Math.abs(f) / (Nl / 4)
  Math.abs(1 - y) < 1e-7 && (y = 1)
  let b = Math.max(Math.ceil(y), 1)
  f /= b
  for (let A = 0; A < b; A++) l.push(sv(m, f)), (m += f)
  return l.map((A) => {
    let { x: N, y: v } = Tl(A[0], o, i, g, w),
      { x: k, y: L } = Tl(A[1], o, i, g, w),
      { x: d, y: I } = Tl(A[2], o, i, g, w)
    return { x1: N, y1: v, x2: k, y2: L, x: d, y: I }
  })
}
import { BufferAttribute as Js, BufferGeometry as uv } from 'three'
var qe
;(function (n) {
  ;(n[(n.ODD = 0)] = 'ODD'),
    (n[(n.NONZERO = 1)] = 'NONZERO'),
    (n[(n.POSITIVE = 2)] = 'POSITIVE'),
    (n[(n.NEGATIVE = 3)] = 'NEGATIVE'),
    (n[(n.ABS_GEQ_TWO = 4)] = 'ABS_GEQ_TWO')
})(qe || (qe = {}))
var ot
;(function (n) {
  ;(n[(n.POLYGONS = 0)] = 'POLYGONS'),
    (n[(n.CONNECTED_POLYGONS = 1)] = 'CONNECTED_POLYGONS'),
    (n[(n.BOUNDARY_CONTOURS = 2)] = 'BOUNDARY_CONTOURS')
})(ot || (ot = {}))
function de(n, t) {
  if (!n) throw t || 'Assertion Failed!'
}
var ae = (function () {
    function n() {}
    return (
      (n.vertEq = function (t, e) {
        return t.s === e.s && t.t === e.t
      }),
      (n.vertLeq = function (t, e) {
        return t.s < e.s || (t.s === e.s && t.t <= e.t)
      }),
      (n.transLeq = function (t, e) {
        return t.t < e.t || (t.t === e.t && t.s <= e.s)
      }),
      (n.edgeGoesLeft = function (t) {
        return n.vertLeq(t.Dst, t.Org)
      }),
      (n.edgeGoesRight = function (t) {
        return n.vertLeq(t.Org, t.Dst)
      }),
      (n.vertL1dist = function (t, e) {
        return Math.abs(t.s - e.s) + Math.abs(t.t - e.t)
      }),
      (n.edgeEval = function (t, e, r) {
        de(n.vertLeq(t, e) && n.vertLeq(e, r))
        var o = e.s - t.s,
          i = r.s - e.s
        return o + i > 0
          ? o < i
            ? e.t - t.t + (t.t - r.t) * (o / (o + i))
            : e.t - r.t + (r.t - t.t) * (i / (o + i))
          : 0
      }),
      (n.edgeSign = function (t, e, r) {
        de(n.vertLeq(t, e) && n.vertLeq(e, r))
        var o = e.s - t.s,
          i = r.s - e.s
        return o + i > 0 ? (e.t - r.t) * o + (e.t - t.t) * i : 0
      }),
      (n.transEval = function (t, e, r) {
        de(n.transLeq(t, e) && n.transLeq(e, r))
        var o = e.t - t.t,
          i = r.t - e.t
        return o + i > 0
          ? o < i
            ? e.s - t.s + (t.s - r.s) * (o / (o + i))
            : e.s - r.s + (r.s - t.s) * (i / (o + i))
          : 0
      }),
      (n.transSign = function (t, e, r) {
        de(n.transLeq(t, e) && n.transLeq(e, r))
        var o = e.t - t.t,
          i = r.t - e.t
        return o + i > 0 ? (e.s - r.s) * o + (e.s - t.s) * i : 0
      }),
      (n.vertCCW = function (t, e, r) {
        return t.s * (e.t - r.t) + e.s * (r.t - t.t) + r.s * (t.t - e.t) >= 0
      }),
      (n.interpolate = function (t, e, r, o) {
        return (
          (t = t < 0 ? 0 : t),
          (r = r < 0 ? 0 : r),
          t <= r
            ? r === 0
              ? (e + o) / 2
              : e + (o - e) * (t / (t + r))
            : o + (e - o) * (r / (t + r))
        )
      }),
      (n.intersect = function (t, e, r, o, i) {
        var s, a, l
        n.vertLeq(t, e) || ((l = t), (t = e), (e = l)),
          n.vertLeq(r, o) || ((l = r), (r = o), (o = l)),
          n.vertLeq(t, r) || ((l = t), (t = r), (r = l), (l = e), (e = o), (o = l)),
          n.vertLeq(r, e)
            ? n.vertLeq(e, o)
              ? ((s = n.edgeEval(t, r, e)),
                (a = n.edgeEval(r, e, o)),
                s + a < 0 && ((s = -s), (a = -a)),
                (i.s = n.interpolate(s, r.s, a, e.s)))
              : ((s = n.edgeSign(t, r, e)),
                (a = -n.edgeSign(t, o, e)),
                s + a < 0 && ((s = -s), (a = -a)),
                (i.s = n.interpolate(s, r.s, a, o.s)))
            : (i.s = (r.s + e.s) / 2),
          n.transLeq(t, e) || ((l = t), (t = e), (e = l)),
          n.transLeq(r, o) || ((l = r), (r = o), (o = l)),
          n.transLeq(t, r) || ((l = t), (t = r), (r = l), (l = e), (e = o), (o = l)),
          n.transLeq(r, e)
            ? n.transLeq(e, o)
              ? ((s = n.transEval(t, r, e)),
                (a = n.transEval(r, e, o)),
                s + a < 0 && ((s = -s), (a = -a)),
                (i.t = n.interpolate(s, r.t, a, e.t)))
              : ((s = n.transSign(t, r, e)),
                (a = -n.transSign(t, o, e)),
                s + a < 0 && ((s = -s), (a = -a)),
                (i.t = n.interpolate(s, r.t, a, o.t)))
            : (i.t = (r.t + e.t) / 2)
      }),
      n
    )
  })(),
  rn = (function () {
    function n() {
      ;(this.next = null),
        (this.prev = null),
        (this.anEdge = null),
        (this.trail = null),
        (this.n = 0),
        (this.marked = !1),
        (this.inside = !1)
    }
    return n
  })(),
  $s = (function () {
    function n(t) {
      ;(this.side = t),
        (this.next = null),
        (this.Org = null),
        (this.Sym = null),
        (this.Onext = null),
        (this.Lnext = null),
        (this.Lface = null),
        (this.activeRegion = null),
        (this.winding = 0)
    }
    return (
      Object.defineProperty(n.prototype, 'Rface', {
        get: function () {
          return this.Sym.Lface
        },
        set: function (t) {
          this.Sym.Lface = t
        },
        enumerable: !0,
        configurable: !0,
      }),
      Object.defineProperty(n.prototype, 'Dst', {
        get: function () {
          return this.Sym.Org
        },
        set: function (t) {
          this.Sym.Org = t
        },
        enumerable: !0,
        configurable: !0,
      }),
      Object.defineProperty(n.prototype, 'Oprev', {
        get: function () {
          return this.Sym.Lnext
        },
        set: function (t) {
          this.Sym.Lnext = t
        },
        enumerable: !0,
        configurable: !0,
      }),
      Object.defineProperty(n.prototype, 'Lprev', {
        get: function () {
          return this.Onext.Sym
        },
        set: function (t) {
          this.Onext.Sym = t
        },
        enumerable: !0,
        configurable: !0,
      }),
      Object.defineProperty(n.prototype, 'Dprev', {
        get: function () {
          return this.Lnext.Sym
        },
        set: function (t) {
          this.Lnext.Sym = t
        },
        enumerable: !0,
        configurable: !0,
      }),
      Object.defineProperty(n.prototype, 'Rprev', {
        get: function () {
          return this.Sym.Onext
        },
        set: function (t) {
          this.Sym.Onext = t
        },
        enumerable: !0,
        configurable: !0,
      }),
      Object.defineProperty(n.prototype, 'Dnext', {
        get: function () {
          return this.Sym.Onext.Sym
        },
        set: function (t) {
          this.Sym.Onext.Sym = t
        },
        enumerable: !0,
        configurable: !0,
      }),
      Object.defineProperty(n.prototype, 'Rnext', {
        get: function () {
          return this.Sym.Lnext.Sym
        },
        set: function (t) {
          this.Sym.Lnext.Sym = t
        },
        enumerable: !0,
        configurable: !0,
      }),
      n
    )
  })(),
  ii = (function () {
    function n() {
      ;(this.next = null),
        (this.prev = null),
        (this.anEdge = null),
        (this.coords = [0, 0, 0]),
        (this.s = 0),
        (this.t = 0),
        (this.pqHandle = 0),
        (this.n = 0),
        (this.idx = 0)
    }
    return n
  })(),
  Bu = (function () {
    function n() {
      var t = new ii(),
        e = new rn(),
        r = new $s(0),
        o = new $s(1)
      ;(t.next = t.prev = t),
        (t.anEdge = null),
        (e.next = e.prev = e),
        (r.next = r),
        (r.Sym = o),
        (o.next = o),
        (o.Sym = r),
        (this.vHead = t),
        (this.fHead = e),
        (this.eHead = r),
        (this.eHeadSym = o)
    }
    return (
      (n.prototype.makeEdge_ = function (t) {
        var e = new $s(0),
          r = new $s(1)
        t.Sym.side < t.side && (t = t.Sym)
        var o = t.Sym.next
        return (
          (r.next = o),
          (o.Sym.next = e),
          (e.next = t),
          (t.Sym.next = r),
          (e.Sym = r),
          (e.Onext = e),
          (e.Lnext = r),
          (e.Org = null),
          (e.Lface = null),
          (e.winding = 0),
          (e.activeRegion = null),
          (r.Sym = e),
          (r.Onext = r),
          (r.Lnext = e),
          (r.Org = null),
          (r.Lface = null),
          (r.winding = 0),
          (r.activeRegion = null),
          e
        )
      }),
      (n.prototype.splice_ = function (t, e) {
        var r = t.Onext,
          o = e.Onext
        ;(r.Sym.Lnext = e), (o.Sym.Lnext = t), (t.Onext = o), (e.Onext = r)
      }),
      (n.prototype.makeVertex_ = function (t, e, r) {
        var o = t
        de(o, "Vertex can't be null!")
        var i = r.prev
        ;(o.prev = i), (i.next = o), (o.next = r), (r.prev = o), (o.anEdge = e)
        var s = e
        do (s.Org = o), (s = s.Onext)
        while (s !== e)
      }),
      (n.prototype.makeFace_ = function (t, e, r) {
        var o = t
        de(o, "Face can't be null")
        var i = r.prev
        ;(o.prev = i),
          (i.next = o),
          (o.next = r),
          (r.prev = o),
          (o.anEdge = e),
          (o.trail = null),
          (o.marked = !1),
          (o.inside = r.inside)
        var s = e
        do (s.Lface = o), (s = s.Lnext)
        while (s !== e)
      }),
      (n.prototype.killEdge_ = function (t) {
        t.Sym.side < t.side && (t = t.Sym)
        var e = t.next,
          r = t.Sym.next
        ;(e.Sym.next = r), (r.Sym.next = e)
      }),
      (n.prototype.killVertex_ = function (t, e) {
        var r = t.anEdge,
          o = r
        do (o.Org = e), (o = o.Onext)
        while (o !== r)
        var i = t.prev,
          s = t.next
        ;(s.prev = i), (i.next = s)
      }),
      (n.prototype.killFace_ = function (t, e) {
        var r = t.anEdge,
          o = r
        do (o.Lface = e), (o = o.Lnext)
        while (o !== r)
        var i = t.prev,
          s = t.next
        ;(s.prev = i), (i.next = s)
      }),
      (n.prototype.makeEdge = function () {
        var t = new ii(),
          e = new ii(),
          r = new rn(),
          o = this.makeEdge_(this.eHead)
        return (
          this.makeVertex_(t, o, this.vHead),
          this.makeVertex_(e, o.Sym, this.vHead),
          this.makeFace_(r, o, this.fHead),
          o
        )
      }),
      (n.prototype.splice = function (t, e) {
        var r = !1,
          o = !1
        if (t !== e) {
          if (
            (e.Org !== t.Org && ((o = !0), this.killVertex_(e.Org, t.Org)),
            e.Lface !== t.Lface && ((r = !0), this.killFace_(e.Lface, t.Lface)),
            this.splice_(e, t),
            !o)
          ) {
            var i = new ii()
            this.makeVertex_(i, e, t.Org), (t.Org.anEdge = t)
          }
          if (!r) {
            var s = new rn()
            this.makeFace_(s, e, t.Lface), (t.Lface.anEdge = t)
          }
        }
      }),
      (n.prototype.delete = function (t) {
        var e = t.Sym,
          r = !1
        if ((t.Lface !== t.Rface && ((r = !0), this.killFace_(t.Lface, t.Rface)), t.Onext === t))
          this.killVertex_(t.Org, null)
        else if (
          ((t.Rface.anEdge = t.Oprev), (t.Org.anEdge = t.Onext), this.splice_(t, t.Oprev), !r)
        ) {
          var o = new rn()
          this.makeFace_(o, t, t.Lface)
        }
        e.Onext === e
          ? (this.killVertex_(e.Org, null), this.killFace_(e.Lface, null))
          : ((t.Lface.anEdge = e.Oprev), (e.Org.anEdge = e.Onext), this.splice_(e, e.Oprev)),
          this.killEdge_(t)
      }),
      (n.prototype.addEdgeVertex = function (t) {
        var e = this.makeEdge_(t),
          r = e.Sym
        this.splice_(e, t.Lnext), (e.Org = t.Dst)
        var o = new ii()
        return this.makeVertex_(o, r, e.Org), (e.Lface = r.Lface = t.Lface), e
      }),
      (n.prototype.splitEdge = function (t) {
        var e = this.addEdgeVertex(t),
          r = e.Sym
        return (
          this.splice_(t.Sym, t.Sym.Oprev),
          this.splice_(t.Sym, r),
          (t.Dst = r.Org),
          (r.Dst.anEdge = r.Sym),
          (r.Rface = t.Rface),
          (r.winding = t.winding),
          (r.Sym.winding = t.Sym.winding),
          (r.idx = t.idx),
          (r.Sym.idx = t.Sym.idx),
          r
        )
      }),
      (n.prototype.connect = function (t, e) {
        var r = !1,
          o = this.makeEdge_(t),
          i = o.Sym
        if (
          (e.Lface !== t.Lface && ((r = !0), this.killFace_(e.Lface, t.Lface)),
          this.splice_(o, t.Lnext),
          this.splice_(i, e),
          (o.Org = t.Dst),
          (i.Org = e.Org),
          (o.Lface = i.Lface = t.Lface),
          (t.Lface.anEdge = i),
          !r)
        ) {
          var s = new rn()
          this.makeFace_(s, o, t.Lface)
        }
        return o
      }),
      (n.prototype.zapFace = function (t) {
        var e = t.anEdge,
          r,
          o,
          i,
          s,
          a
        o = e.Lnext
        do
          (r = o),
            (o = r.Lnext),
            (r.Lface = null),
            r.Rface === null &&
              (r.Onext === r
                ? this.killVertex_(r.Org, null)
                : ((r.Org.anEdge = r.Onext), this.splice_(r, r.Oprev)),
              (i = r.Sym),
              i.Onext === i
                ? this.killVertex_(i.Org, null)
                : ((i.Org.anEdge = i.Onext), this.splice_(i, i.Oprev)),
              this.killEdge_(r))
        while (r != e)
        ;(s = t.prev), (a = t.next), (a.prev = s), (s.next = a)
      }),
      (n.prototype.countFaceVerts_ = function (t) {
        var e = t.anEdge,
          r = 0
        do r++, (e = e.Lnext)
        while (e !== t.anEdge)
        return r
      }),
      (n.prototype.mergeConvexFaces = function (t) {
        var e, r, o, i, s, a, l
        for (e = this.fHead.next; e !== this.fHead; e = e.next)
          if (!!e.inside)
            for (
              r = e.anEdge, s = r.Org;
              (o = r.Lnext),
                (i = r.Sym),
                i &&
                  i.Lface &&
                  i.Lface.inside &&
                  ((a = this.countFaceVerts_(e)),
                  (l = this.countFaceVerts_(i.Lface)),
                  a + l - 2 <= t &&
                    ae.vertCCW(r.Lprev.Org, r.Org, i.Lnext.Lnext.Org) &&
                    ae.vertCCW(i.Lprev.Org, i.Org, r.Lnext.Lnext.Org) &&
                    ((o = i.Lnext), this.delete(i), (r = null), (i = null))),
                !(r && r.Lnext.Org === s);

            )
              r = o
        return !0
      }),
      (n.prototype.check = function () {
        var t = this.fHead,
          e = this.vHead,
          r = this.eHead,
          o,
          i,
          s,
          a,
          l,
          c
        for (i = t, i = t; (o = i.next) !== t; i = o) {
          de(o.prev === i), (l = o.anEdge)
          do
            de(l.Sym !== l),
              de(l.Sym.Sym === l),
              de(l.Lnext.Onext.Sym === l),
              de(l.Onext.Sym.Lnext === l),
              de(l.Lface === o),
              (l = l.Lnext)
          while (l !== o.anEdge)
        }
        for (de(o.prev === i && o.anEdge === null), a = e, a = e; (s = a.next) !== e; a = s) {
          de(s.prev === a), (l = s.anEdge)
          do
            de(l.Sym !== l),
              de(l.Sym.Sym === l),
              de(l.Lnext.Onext.Sym === l),
              de(l.Onext.Sym.Lnext === l),
              de(l.Org === s),
              (l = l.Onext)
          while (l !== s.anEdge)
        }
        for (de(s.prev === a && s.anEdge === null), c = r, c = r; (l = c.next) !== r; c = l)
          de(l.Sym.next === c.Sym),
            de(l.Sym !== l),
            de(l.Sym.Sym === l),
            de(l.Org !== null),
            de(l.Dst !== null),
            de(l.Lnext.Onext.Sym === l),
            de(l.Onext.Sym.Lnext === l)
        de(
          l.Sym.next === c.Sym &&
            l.Sym === this.eHeadSym &&
            l.Sym.Sym === l &&
            l.Org === null &&
            l.Dst === null &&
            l.Lface === null &&
            l.Rface === null
        )
      }),
      n
    )
  })(),
  Eu = (function () {
    function n() {
      this.handle = null
    }
    return n
  })(),
  _u = (function () {
    function n() {
      ;(this.key = null), (this.node = 0)
    }
    return n
  })(),
  lv = (function () {
    function n(t, e) {
      ;(this.leq = e),
        (this.max = 0),
        (this.nodes = []),
        (this.handles = []),
        (this.initialized = !1),
        (this.freeList = 0),
        (this.size = 0),
        (this.max = t),
        (this.nodes = []),
        (this.handles = [])
      for (var r = 0; r < t + 1; r++) (this.nodes[r] = new Eu()), (this.handles[r] = new _u())
      ;(this.initialized = !1), (this.nodes[1].handle = 1), (this.handles[1].key = null)
    }
    return (
      (n.prototype.floatDown_ = function (t) {
        var e = this.nodes,
          r = this.handles,
          o,
          i,
          s
        for (o = e[t].handle; ; ) {
          if (
            ((s = t << 1),
            s < this.size && this.leq(r[e[s + 1].handle].key, r[e[s].handle].key) && ++s,
            de(s <= this.max),
            (i = e[s].handle),
            s > this.size || this.leq(r[o].key, r[i].key))
          ) {
            ;(e[t].handle = o), (r[o].node = t)
            break
          }
          ;(e[t].handle = i), (r[i].node = t), (t = s)
        }
      }),
      (n.prototype.floatUp_ = function (t) {
        var e = this.nodes,
          r = this.handles,
          o,
          i,
          s
        for (o = e[t].handle; ; ) {
          if (((s = t >> 1), (i = e[s].handle), s === 0 || this.leq(r[i].key, r[o].key))) {
            ;(e[t].handle = o), (r[o].node = t)
            break
          }
          ;(e[t].handle = i), (r[i].node = t), (t = s)
        }
      }),
      (n.prototype.init = function () {
        for (var t = this.size; t >= 1; --t) this.floatDown_(t)
        this.initialized = !0
      }),
      (n.prototype.min = function () {
        return this.handles[this.nodes[1].handle].key
      }),
      (n.prototype.insert = function (t) {
        var e, r
        if (((e = ++this.size), e * 2 > this.max)) {
          this.max *= 2
          var o, i
          for (
            i = this.nodes.length, this.nodes.length = this.max + 1, o = i;
            o < this.nodes.length;
            o++
          )
            this.nodes[o] = new Eu()
          for (
            i = this.handles.length, this.handles.length = this.max + 1, o = i;
            o < this.handles.length;
            o++
          )
            this.handles[o] = new _u()
        }
        return (
          this.freeList === 0
            ? (r = e)
            : ((r = this.freeList), (this.freeList = this.handles[r].node)),
          (this.nodes[e].handle = r),
          (this.handles[r].node = e),
          (this.handles[r].key = t),
          this.initialized && this.floatUp_(e),
          r
        )
      }),
      (n.prototype.extractMin = function () {
        var t = this.nodes,
          e = this.handles,
          r = t[1].handle,
          o = e[r].key
        return (
          this.size > 0 &&
            ((t[1].handle = t[this.size].handle),
            (e[t[1].handle].node = 1),
            (e[r].key = null),
            (e[r].node = this.freeList),
            (this.freeList = r),
            --this.size,
            this.size > 0 && this.floatDown_(1)),
          o
        )
      }),
      (n.prototype.delete = function (t) {
        var e = this.nodes,
          r = this.handles,
          o
        de(t >= 1 && t <= this.max && r[t].key !== null),
          (o = r[t].node),
          (e[o].handle = e[this.size].handle),
          (r[e[o].handle].node = o),
          --this.size,
          o <= this.size &&
            (o <= 1 || this.leq(r[e[o >> 1].handle].key, r[e[o].handle].key)
              ? this.floatDown_(o)
              : this.floatUp_(o)),
          (r[t].key = null),
          (r[t].node = this.freeList),
          (this.freeList = t)
      }),
      n
    )
  })(),
  Ml = (function () {
    function n() {
      ;(this.eUp = null),
        (this.nodeUp = null),
        (this.windingNumber = 0),
        (this.inside = !1),
        (this.sentinel = !1),
        (this.dirty = !1),
        (this.fixUpperEdge = !1)
    }
    return n
  })(),
  Gu = (function () {
    function n() {
      ;(this.key = null), (this.next = null), (this.prev = null)
    }
    return n
  })(),
  cv = (function () {
    function n(t, e) {
      ;(this.frame = t),
        (this.leq = e),
        (this.head = new Gu()),
        (this.head.next = this.head),
        (this.head.prev = this.head)
    }
    return (
      (n.prototype.min = function () {
        return this.head.next
      }),
      (n.prototype.max = function () {
        return this.head.prev
      }),
      (n.prototype.insert = function (t) {
        return this.insertBefore(this.head, t)
      }),
      (n.prototype.search = function (t) {
        var e = this.head
        do e = e.next
        while (e.key !== null && !this.leq(this.frame, t, e.key))
        return e
      }),
      (n.prototype.insertBefore = function (t, e) {
        do t = t.prev
        while (t.key !== null && !this.leq(this.frame, t.key, e))
        var r = new Gu()
        return (r.key = e), (r.next = t.next), (t.next.prev = r), (r.prev = t), (t.next = r), r
      }),
      (n.prototype.delete = function (t) {
        ;(t.next.prev = t.prev), (t.prev.next = t.next)
      }),
      n
    )
  })(),
  hv = (function () {
    function n() {}
    return (
      (n.regionBelow = function (t) {
        return t.nodeUp.prev.key
      }),
      (n.regionAbove = function (t) {
        return t.nodeUp.next.key
      }),
      (n.debugEvent = function (t) {}),
      (n.addWinding = function (t, e) {
        ;(t.winding += e.winding), (t.Sym.winding += e.Sym.winding)
      }),
      (n.edgeLeq = function (t, e, r) {
        var o = t.event,
          i = e.eUp,
          s = r.eUp
        if (i.Dst === o)
          return s.Dst === o
            ? ae.vertLeq(i.Org, s.Org)
              ? ae.edgeSign(s.Dst, i.Org, s.Org) <= 0
              : ae.edgeSign(i.Dst, s.Org, i.Org) >= 0
            : ae.edgeSign(s.Dst, o, s.Org) <= 0
        if (s.Dst === o) return ae.edgeSign(i.Dst, o, i.Org) >= 0
        var a = ae.edgeEval(i.Dst, o, i.Org),
          l = ae.edgeEval(s.Dst, o, s.Org)
        return a >= l
      }),
      (n.deleteRegion = function (t, e) {
        e.fixUpperEdge && de(e.eUp.winding === 0),
          (e.eUp.activeRegion = null),
          t.dict.delete(e.nodeUp)
      }),
      (n.fixUpperEdge = function (t, e, r) {
        de(e.fixUpperEdge),
          t.mesh.delete(e.eUp),
          (e.fixUpperEdge = !1),
          (e.eUp = r),
          (r.activeRegion = e)
      }),
      (n.topLeftRegion = function (t, e) {
        var r = e.eUp.Org,
          o
        do e = n.regionAbove(e)
        while (e.eUp.Org === r)
        if (e.fixUpperEdge) {
          if (((o = t.mesh.connect(n.regionBelow(e).eUp.Sym, e.eUp.Lnext)), o === null)) return null
          n.fixUpperEdge(t, e, o), (e = n.regionAbove(e))
        }
        return e
      }),
      (n.topRightRegion = function (t) {
        var e = t.eUp.Dst
        do t = n.regionAbove(t)
        while (t.eUp.Dst === e)
        return t
      }),
      (n.addRegionBelow = function (t, e, r) {
        var o = new Ml()
        return (
          (o.eUp = r),
          (o.nodeUp = t.dict.insertBefore(e.nodeUp, o)),
          (o.fixUpperEdge = !1),
          (o.sentinel = !1),
          (o.dirty = !1),
          (r.activeRegion = o),
          o
        )
      }),
      (n.isWindingInside = function (t, e) {
        switch (t.windingRule) {
          case qe.ODD:
            return (e & 1) !== 0
          case qe.NONZERO:
            return e !== 0
          case qe.POSITIVE:
            return e > 0
          case qe.NEGATIVE:
            return e < 0
          case qe.ABS_GEQ_TWO:
            return e >= 2 || e <= -2
        }
        throw new Error('Invalid winding rulle')
      }),
      (n.computeWinding = function (t, e) {
        ;(e.windingNumber = n.regionAbove(e).windingNumber + e.eUp.winding),
          (e.inside = n.isWindingInside(t, e.windingNumber))
      }),
      (n.finishRegion = function (t, e) {
        var r = e.eUp,
          o = r.Lface
        ;(o.inside = e.inside), (o.anEdge = r), n.deleteRegion(t, e)
      }),
      (n.finishLeftRegions = function (t, e, r) {
        for (var o, i = null, s = e, a = e.eUp; s !== r; ) {
          if (((s.fixUpperEdge = !1), (i = n.regionBelow(s)), (o = i.eUp), o.Org != a.Org)) {
            if (!i.fixUpperEdge) {
              n.finishRegion(t, s)
              break
            }
            ;(o = t.mesh.connect(a.Lprev, o.Sym)), n.fixUpperEdge(t, i, o)
          }
          a.Onext !== o && (t.mesh.splice(o.Oprev, o), t.mesh.splice(a, o)),
            n.finishRegion(t, s),
            (a = i.eUp),
            (s = i)
        }
        return a
      }),
      (n.addRightEdges = function (t, e, r, o, i, s) {
        var a,
          l,
          c,
          h,
          p = !0
        c = r
        do de(ae.vertLeq(c.Org, c.Dst)), n.addRegionBelow(t, e, c.Sym), (c = c.Onext)
        while (c !== o)
        for (
          i === null && (i = n.regionBelow(e).eUp.Rprev), l = e, h = i;
          (a = n.regionBelow(l)), (c = a.eUp.Sym), c.Org === h.Org;

        )
          c.Onext !== h && (t.mesh.splice(c.Oprev, c), t.mesh.splice(h.Oprev, c)),
            (a.windingNumber = l.windingNumber - c.winding),
            (a.inside = n.isWindingInside(t, a.windingNumber)),
            (l.dirty = !0),
            !p &&
              n.checkForRightSplice(t, l) &&
              (n.addWinding(c, h), n.deleteRegion(t, l), t.mesh.delete(h)),
            (p = !1),
            (l = a),
            (h = c)
        ;(l.dirty = !0),
          de(l.windingNumber - c.winding === a.windingNumber),
          s && n.walkDirtyRegions(t, l)
      }),
      (n.spliceMergeVertices = function (t, e, r) {
        t.mesh.splice(e, r)
      }),
      (n.vertexWeights = function (t, e, r) {
        var o = ae.vertL1dist(e, t),
          i = ae.vertL1dist(r, t),
          s = (0.5 * i) / (o + i),
          a = (0.5 * o) / (o + i)
        ;(t.coords[0] += s * e.coords[0] + a * r.coords[0]),
          (t.coords[1] += s * e.coords[1] + a * r.coords[1]),
          (t.coords[2] += s * e.coords[2] + a * r.coords[2])
      }),
      (n.getIntersectData = function (t, e, r, o, i, s) {
        ;(e.coords[0] = e.coords[1] = e.coords[2] = 0),
          (e.idx = -1),
          n.vertexWeights(e, r, o),
          n.vertexWeights(e, i, s)
      }),
      (n.checkForRightSplice = function (t, e) {
        var r = n.regionBelow(e),
          o = e.eUp,
          i = r.eUp
        if (ae.vertLeq(o.Org, i.Org)) {
          if (ae.edgeSign(i.Dst, o.Org, i.Org) > 0) return !1
          ae.vertEq(o.Org, i.Org)
            ? o.Org !== i.Org && (t.pq.delete(o.Org.pqHandle), n.spliceMergeVertices(t, i.Oprev, o))
            : (t.mesh.splitEdge(i.Sym), t.mesh.splice(o, i.Oprev), (e.dirty = r.dirty = !0))
        } else {
          if (ae.edgeSign(o.Dst, i.Org, o.Org) < 0) return !1
          ;(n.regionAbove(e).dirty = e.dirty = !0),
            t.mesh.splitEdge(o.Sym),
            t.mesh.splice(i.Oprev, o)
        }
        return !0
      }),
      (n.checkForLeftSplice = function (t, e) {
        var r = n.regionBelow(e),
          o = e.eUp,
          i = r.eUp,
          s
        if ((de(!ae.vertEq(o.Dst, i.Dst)), ae.vertLeq(o.Dst, i.Dst))) {
          if (ae.edgeSign(o.Dst, i.Dst, o.Org) < 0) return !1
          ;(n.regionAbove(e).dirty = e.dirty = !0),
            (s = t.mesh.splitEdge(o)),
            t.mesh.splice(i.Sym, s),
            (s.Lface.inside = e.inside)
        } else {
          if (ae.edgeSign(i.Dst, o.Dst, i.Org) > 0) return !1
          ;(e.dirty = r.dirty = !0),
            (s = t.mesh.splitEdge(i)),
            t.mesh.splice(o.Lnext, i.Sym),
            (s.Rface.inside = e.inside)
        }
        return !0
      }),
      (n.checkForIntersect = function (t, e) {
        var r = n.regionBelow(e),
          o = e.eUp,
          i = r.eUp,
          s = o.Org,
          a = i.Org,
          l = o.Dst,
          c = i.Dst,
          h,
          p,
          u = new ii(),
          m,
          f
        if (
          (de(!ae.vertEq(c, l)),
          de(ae.edgeSign(l, t.event, s) <= 0),
          de(ae.edgeSign(c, t.event, a) >= 0),
          de(s !== t.event && a !== t.event),
          de(!e.fixUpperEdge && !r.fixUpperEdge),
          s === a || ((h = Math.min(s.t, l.t)), (p = Math.max(a.t, c.t)), h > p))
        )
          return !1
        if (ae.vertLeq(s, a)) {
          if (ae.edgeSign(c, s, a) > 0) return !1
        } else if (ae.edgeSign(l, a, s) < 0) return !1
        return (
          n.debugEvent(t),
          ae.intersect(l, s, c, a, u),
          de(Math.min(s.t, l.t) <= u.t),
          de(u.t <= Math.max(a.t, c.t)),
          de(Math.min(c.s, l.s) <= u.s),
          de(u.s <= Math.max(a.s, s.s)),
          ae.vertLeq(u, t.event) && ((u.s = t.event.s), (u.t = t.event.t)),
          (m = ae.vertLeq(s, a) ? s : a),
          ae.vertLeq(m, u) && ((u.s = m.s), (u.t = m.t)),
          ae.vertEq(u, s) || ae.vertEq(u, a)
            ? (n.checkForRightSplice(t, e), !1)
            : (!ae.vertEq(l, t.event) && ae.edgeSign(l, t.event, u) >= 0) ||
              (!ae.vertEq(c, t.event) && ae.edgeSign(c, t.event, u) <= 0)
            ? c === t.event
              ? (t.mesh.splitEdge(o.Sym),
                t.mesh.splice(i.Sym, o),
                (e = n.topLeftRegion(t, e)),
                (o = n.regionBelow(e).eUp),
                n.finishLeftRegions(t, n.regionBelow(e), r),
                n.addRightEdges(t, e, o.Oprev, o, o, !0),
                !0)
              : l === t.event
              ? (t.mesh.splitEdge(i.Sym),
                t.mesh.splice(o.Lnext, i.Oprev),
                (r = e),
                (e = n.topRightRegion(e)),
                (f = n.regionBelow(e).eUp.Rprev),
                (r.eUp = i.Oprev),
                (i = n.finishLeftRegions(t, r, null)),
                n.addRightEdges(t, e, i.Onext, o.Rprev, f, !0),
                !0)
              : (ae.edgeSign(l, t.event, u) >= 0 &&
                  ((n.regionAbove(e).dirty = e.dirty = !0),
                  t.mesh.splitEdge(o.Sym),
                  (o.Org.s = t.event.s),
                  (o.Org.t = t.event.t)),
                ae.edgeSign(c, t.event, u) <= 0 &&
                  ((e.dirty = r.dirty = !0),
                  t.mesh.splitEdge(i.Sym),
                  (i.Org.s = t.event.s),
                  (i.Org.t = t.event.t)),
                !1)
            : (t.mesh.splitEdge(o.Sym),
              t.mesh.splitEdge(i.Sym),
              t.mesh.splice(i.Oprev, o),
              (o.Org.s = u.s),
              (o.Org.t = u.t),
              (o.Org.pqHandle = t.pq.insert(o.Org)),
              n.getIntersectData(t, o.Org, s, l, a, c),
              (n.regionAbove(e).dirty = e.dirty = r.dirty = !0),
              !1)
        )
      }),
      (n.walkDirtyRegions = function (t, e) {
        for (var r = n.regionBelow(e), o, i; ; ) {
          for (; r.dirty; ) (e = r), (r = n.regionBelow(r))
          if (!e.dirty && ((r = e), (e = n.regionAbove(e)), e === null || !e.dirty)) return
          if (
            ((e.dirty = !1),
            (o = e.eUp),
            (i = r.eUp),
            o.Dst !== i.Dst &&
              n.checkForLeftSplice(t, e) &&
              (r.fixUpperEdge
                ? (n.deleteRegion(t, r), t.mesh.delete(i), (r = n.regionBelow(e)), (i = r.eUp))
                : e.fixUpperEdge &&
                  (n.deleteRegion(t, e), t.mesh.delete(o), (e = n.regionAbove(r)), (o = e.eUp))),
            o.Org !== i.Org)
          )
            if (
              o.Dst !== i.Dst &&
              !e.fixUpperEdge &&
              !r.fixUpperEdge &&
              (o.Dst === t.event || i.Dst === t.event)
            ) {
              if (n.checkForIntersect(t, e)) return
            } else n.checkForRightSplice(t, e)
          o.Org === i.Org &&
            o.Dst === i.Dst &&
            (n.addWinding(i, o), n.deleteRegion(t, e), t.mesh.delete(o), (e = n.regionAbove(r)))
        }
      }),
      (n.connectRightVertex = function (t, e, r) {
        var o,
          i = r.Onext,
          s = n.regionBelow(e),
          a = e.eUp,
          l = s.eUp,
          c = !1
        if (
          (a.Dst !== l.Dst && n.checkForIntersect(t, e),
          ae.vertEq(a.Org, t.event) &&
            (t.mesh.splice(i.Oprev, a),
            (e = n.topLeftRegion(t, e)),
            (i = n.regionBelow(e).eUp),
            n.finishLeftRegions(t, n.regionBelow(e), s),
            (c = !0)),
          ae.vertEq(l.Org, t.event) &&
            (t.mesh.splice(r, l.Oprev), (r = n.finishLeftRegions(t, s, null)), (c = !0)),
          c)
        ) {
          n.addRightEdges(t, e, r.Onext, i, i, !0)
          return
        }
        ae.vertLeq(l.Org, a.Org) ? (o = l.Oprev) : (o = a),
          (o = t.mesh.connect(r.Lprev, o)),
          n.addRightEdges(t, e, o, o.Onext, o.Onext, !1),
          (o.Sym.activeRegion.fixUpperEdge = !0),
          n.walkDirtyRegions(t, e)
      }),
      (n.connectLeftDegenerate = function (t, e, r) {
        var o, i, s, a, l
        if (((o = e.eUp), ae.vertEq(o.Org, r))) {
          de(!1), n.spliceMergeVertices(t, o, r.anEdge)
          return
        }
        if (!ae.vertEq(o.Dst, r)) {
          t.mesh.splitEdge(o.Sym),
            e.fixUpperEdge && (t.mesh.delete(o.Onext), (e.fixUpperEdge = !1)),
            t.mesh.splice(r.anEdge, o),
            n.sweepEvent(t, r)
          return
        }
        de(!1),
          (e = n.topRightRegion(e)),
          (l = n.regionBelow(e)),
          (s = l.eUp.Sym),
          (i = a = s.Onext),
          l.fixUpperEdge && (de(i !== s), n.deleteRegion(t, l), t.mesh.delete(s), (s = i.Oprev)),
          t.mesh.splice(r.anEdge, s),
          ae.edgeGoesLeft(i) || (i = null),
          n.addRightEdges(t, e, s.Onext, a, i, !0)
      }),
      (n.connectLeftVertex = function (t, e) {
        var r,
          o,
          i,
          s,
          a,
          l,
          c = new Ml()
        if (((c.eUp = e.anEdge.Sym), (r = t.dict.search(c).key), (o = n.regionBelow(r)), !!o)) {
          if (((s = r.eUp), (a = o.eUp), ae.edgeSign(s.Dst, e, s.Org) === 0)) {
            n.connectLeftDegenerate(t, r, e)
            return
          }
          if (((i = ae.vertLeq(a.Dst, s.Dst) ? r : o), r.inside || i.fixUpperEdge)) {
            if (i === r) l = t.mesh.connect(e.anEdge.Sym, s.Lnext)
            else {
              var h = t.mesh.connect(a.Dnext, e.anEdge)
              l = h.Sym
            }
            i.fixUpperEdge
              ? n.fixUpperEdge(t, i, l)
              : n.computeWinding(t, n.addRegionBelow(t, r, l)),
              n.sweepEvent(t, e)
          } else n.addRightEdges(t, r, e.anEdge, e.anEdge, null, !0)
        }
      }),
      (n.sweepEvent = function (t, e) {
        ;(t.event = e), n.debugEvent(t)
        for (var r = e.anEdge; r.activeRegion === null; )
          if (((r = r.Onext), r === e.anEdge)) {
            n.connectLeftVertex(t, e)
            return
          }
        var o = n.topLeftRegion(t, r.activeRegion)
        de(o !== null)
        var i = n.regionBelow(o),
          s = i.eUp,
          a = n.finishLeftRegions(t, i, null)
        a.Onext === s ? n.connectRightVertex(t, o, a) : n.addRightEdges(t, o, a.Onext, s, s, !0)
      }),
      (n.addSentinel = function (t, e, r, o) {
        var i = new Ml(),
          s = t.mesh.makeEdge()
        ;(s.Org.s = r),
          (s.Org.t = o),
          (s.Dst.s = e),
          (s.Dst.t = o),
          (t.event = s.Dst),
          (i.eUp = s),
          (i.windingNumber = 0),
          (i.inside = !1),
          (i.fixUpperEdge = !1),
          (i.sentinel = !0),
          (i.dirty = !1),
          (i.nodeUp = t.dict.insert(i))
      }),
      (n.initEdgeDict = function (t) {
        t.dict = new cv(t, n.edgeLeq)
        var e = t.bmax[0] - t.bmin[0],
          r = t.bmax[1] - t.bmin[1],
          o = t.bmin[0] - e,
          i = t.bmax[0] + e,
          s = t.bmin[1] - r,
          a = t.bmax[1] + r
        n.addSentinel(t, o, i, s), n.addSentinel(t, o, i, a)
      }),
      (n.doneEdgeDict = function (t) {
        for (var e, r = 0; (e = t.dict.min().key) !== null; )
          e.sentinel || (de(e.fixUpperEdge), de(++r === 1)),
            de(e.windingNumber === 0),
            n.deleteRegion(t, e)
      }),
      (n.removeDegenerateEdges = function (t) {
        var e,
          r,
          o,
          i = t.mesh.eHead
        for (e = i.next; e !== i; e = r)
          (r = e.next),
            (o = e.Lnext),
            ae.vertEq(e.Org, e.Dst) &&
              e.Lnext.Lnext !== e &&
              (n.spliceMergeVertices(t, o, e), t.mesh.delete(e), (e = o), (o = e.Lnext)),
            o.Lnext === e &&
              (o !== e && ((o === r || o === r.Sym) && (r = r.next), t.mesh.delete(o)),
              (e === r || e === r.Sym) && (r = r.next),
              t.mesh.delete(e))
      }),
      (n.initPriorityQ = function (t) {
        var e,
          r,
          o,
          i = 0
        for (o = t.mesh.vHead, r = o.next; r !== o; r = r.next) i++
        for (
          i += 8, e = t.pq = new lv(i, ae.vertLeq), o = t.mesh.vHead, r = o.next;
          r !== o;
          r = r.next
        )
          r.pqHandle = e.insert(r)
        return r !== o ? !1 : (e.init(), !0)
      }),
      (n.donePriorityQ = function (t) {
        t.pq = null
      }),
      (n.removeDegenerateFaces = function (t, e) {
        var r, o, i
        for (r = e.fHead.next; r !== e.fHead; r = o)
          (o = r.next),
            (i = r.anEdge),
            de(i.Lnext !== i),
            i.Lnext.Lnext === i && (n.addWinding(i.Onext, i), t.mesh.delete(i))
        return !0
      }),
      (n.computeInterior = function (t, e) {
        e === void 0 && (e = !0)
        var r, o
        if ((n.removeDegenerateEdges(t), !n.initPriorityQ(t))) return !1
        for (n.initEdgeDict(t); (r = t.pq.extractMin()) !== null; ) {
          for (; (o = t.pq.min()), !(o === null || !ae.vertEq(o, r)); )
            (o = t.pq.extractMin()), n.spliceMergeVertices(t, r.anEdge, o.anEdge)
          n.sweepEvent(t, r)
        }
        return (
          (t.event = t.dict.min().key.eUp.Org),
          n.debugEvent(t),
          n.doneEdgeDict(t),
          n.donePriorityQ(t),
          n.removeDegenerateFaces(t, t.mesh) ? (e && t.mesh.check(), !0) : !1
        )
      }),
      n
    )
  })(),
  pv = (function () {
    function n() {
      ;(this.mesh = new Bu()),
        (this.normal = [0, 0, 0]),
        (this.sUnit = [0, 0, 0]),
        (this.tUnit = [0, 0, 0]),
        (this.bmin = [0, 0]),
        (this.bmax = [0, 0]),
        (this.windingRule = qe.ODD),
        (this.dict = null),
        (this.pq = null),
        (this.event = null),
        (this.vertexIndexCounter = 0),
        (this.vertices = []),
        (this.vertexIndices = []),
        (this.vertexCount = 0),
        (this.elements = []),
        (this.elementCount = 0)
    }
    return (
      (n.prototype.dot_ = function (t, e) {
        return t[0] * e[0] + t[1] * e[1] + t[2] * e[2]
      }),
      (n.prototype.normalize_ = function (t) {
        var e = t[0] * t[0] + t[1] * t[1] + t[2] * t[2]
        if (!e) throw 'Zero-size vector!'
        ;(e = Math.sqrt(e)), (t[0] /= e), (t[1] /= e), (t[2] /= e)
      }),
      (n.prototype.longAxis_ = function (t) {
        var e = 0
        return (
          Math.abs(t[1]) > Math.abs(t[0]) && (e = 1), Math.abs(t[2]) > Math.abs(t[e]) && (e = 2), e
        )
      }),
      (n.prototype.computeNormal_ = function (t) {
        var e,
          r,
          o,
          i,
          s,
          a,
          l = [0, 0, 0],
          c = [0, 0, 0],
          h = [0, 0, 0],
          p = [0, 0, 0],
          u = [0, 0, 0],
          m = [null, null, null],
          f = [null, null, null],
          g = this.mesh.vHead
        e = g.next
        for (var w = 0; w < 3; ++w)
          (i = e.coords[w]), (c[w] = i), (f[w] = e), (l[w] = i), (m[w] = e)
        for (e = g.next; e !== g; e = e.next)
          for (var y = 0; y < 3; ++y)
            (i = e.coords[y]),
              i < c[y] && ((c[y] = i), (f[y] = e)),
              i > l[y] && ((l[y] = i), (m[y] = e))
        var b = 0
        if (
          (l[1] - c[1] > l[0] - c[0] && (b = 1), l[2] - c[2] > l[b] - c[b] && (b = 2), c[b] >= l[b])
        ) {
          ;(t[0] = 0), (t[1] = 0), (t[2] = 1)
          return
        }
        for (
          a = 0,
            r = f[b],
            o = m[b],
            h[0] = r.coords[0] - o.coords[0],
            h[1] = r.coords[1] - o.coords[1],
            h[2] = r.coords[2] - o.coords[2],
            e = g.next;
          e !== g;
          e = e.next
        )
          (p[0] = e.coords[0] - o.coords[0]),
            (p[1] = e.coords[1] - o.coords[1]),
            (p[2] = e.coords[2] - o.coords[2]),
            (u[0] = h[1] * p[2] - h[2] * p[1]),
            (u[1] = h[2] * p[0] - h[0] * p[2]),
            (u[2] = h[0] * p[1] - h[1] * p[0]),
            (s = u[0] * u[0] + u[1] * u[1] + u[2] * u[2]),
            s > a && ((a = s), (t[0] = u[0]), (t[1] = u[1]), (t[2] = u[2]))
        a <= 0 && ((t[0] = t[1] = t[2] = 0), (t[this.longAxis_(h)] = 1))
      }),
      (n.prototype.checkOrientation_ = function () {
        for (
          var t = this.mesh.fHead, e, r = this.mesh.vHead, o, i = 0, s = t.next;
          s !== t;
          s = s.next
        )
          if (((o = s.anEdge), !(o.winding <= 0)))
            do (i += (o.Org.s - o.Dst.s) * (o.Org.t + o.Dst.t)), (o = o.Lnext)
            while (o !== s.anEdge)
        if (i < 0) {
          for (e = r.next; e !== r; e = e.next) e.t = -e.t
          ;(this.tUnit[0] = -this.tUnit[0]),
            (this.tUnit[1] = -this.tUnit[1]),
            (this.tUnit[2] = -this.tUnit[2])
        }
      }),
      (n.prototype.projectPolygon_ = function () {
        var t = this.mesh.vHead,
          e = [0, 0, 0],
          r,
          o,
          i = !1
        ;(e[0] = this.normal[0]),
          (e[1] = this.normal[1]),
          (e[2] = this.normal[2]),
          !e[0] && !e[1] && !e[2] && (this.computeNormal_(e), (i = !0)),
          (r = this.sUnit),
          (o = this.tUnit)
        var s = this.longAxis_(e)
        ;(r[s] = 0),
          (r[(s + 1) % 3] = 1),
          (r[(s + 2) % 3] = 0),
          (o[s] = 0),
          (o[(s + 1) % 3] = 0),
          (o[(s + 2) % 3] = e[s] > 0 ? 1 : -1)
        for (var a = t.next; a !== t; a = a.next)
          (a.s = this.dot_(a.coords, r)), (a.t = this.dot_(a.coords, o))
        i && this.checkOrientation_()
        for (var l = !0, c = t.next; c !== t; c = c.next)
          l
            ? ((this.bmin[0] = this.bmax[0] = c.s), (this.bmin[1] = this.bmax[1] = c.t), (l = !1))
            : (c.s < this.bmin[0] && (this.bmin[0] = c.s),
              c.s > this.bmax[0] && (this.bmax[0] = c.s),
              c.t < this.bmin[1] && (this.bmin[1] = c.t),
              c.t > this.bmax[1] && (this.bmax[1] = c.t))
      }),
      (n.prototype.addWinding_ = function (t, e) {
        ;(t.winding += e.winding), (t.Sym.winding += e.Sym.winding)
      }),
      (n.prototype.tessellateMonoRegion_ = function (t, e) {
        var r, o
        if (((r = e.anEdge), !(r.Lnext !== r && r.Lnext.Lnext !== r))) throw 'Mono region invalid'
        for (; ae.vertLeq(r.Dst, r.Org); r = r.Lprev);
        for (; ae.vertLeq(r.Org, r.Dst); r = r.Lnext);
        o = r.Lprev
        for (var i = void 0; r.Lnext !== o; )
          if (ae.vertLeq(r.Dst, o.Org)) {
            for (
              ;
              o.Lnext !== r &&
              (ae.edgeGoesLeft(o.Lnext) || ae.edgeSign(o.Org, o.Dst, o.Lnext.Dst) <= 0);

            )
              (i = t.connect(o.Lnext, o)), (o = i.Sym)
            o = o.Lprev
          } else {
            for (
              ;
              o.Lnext !== r &&
              (ae.edgeGoesRight(r.Lprev) || ae.edgeSign(r.Dst, r.Org, r.Lprev.Org) >= 0);

            )
              (i = t.connect(r, r.Lprev)), (r = i.Sym)
            r = r.Lnext
          }
        if (o.Lnext === r) throw 'Mono region invalid'
        for (; o.Lnext.Lnext !== r; ) (i = t.connect(o.Lnext, o)), (o = i.Sym)
        return !0
      }),
      (n.prototype.tessellateInterior_ = function (t) {
        for (var e, r = t.fHead.next; r !== t.fHead; r = e)
          if (((e = r.next), r.inside && !this.tessellateMonoRegion_(t, r))) return !1
        return !0
      }),
      (n.prototype.discardExterior_ = function (t) {
        for (var e, r = t.fHead.next; r !== t.fHead; r = e) (e = r.next), r.inside || t.zapFace(r)
      }),
      (n.prototype.setWindingNumber_ = function (t, e, r) {
        for (var o, i = t.eHead.next; i !== t.eHead; i = o)
          (o = i.next),
            i.Rface.inside !== i.Lface.inside
              ? (i.winding = i.Lface.inside ? e : -e)
              : r
              ? t.delete(i)
              : (i.winding = 0)
      }),
      (n.prototype.getNeighbourFace_ = function (t) {
        return !t.Rface || !t.Rface.inside ? -1 : t.Rface.n
      }),
      (n.prototype.outputPolymesh_ = function (t, e, r, o) {
        var i,
          s = 0,
          a = 0,
          l
        r > 3 && t.mergeConvexFaces(r)
        for (var c = t.vHead.next; c !== t.vHead; c = c.next) c.n = -1
        for (var h = t.fHead.next; h !== t.fHead; h = h.next)
          if (((h.n = -1), !!h.inside)) {
            ;(i = h.anEdge), (l = 0)
            do {
              var c = i.Org
              c.n === -1 && ((c.n = a), a++), l++, (i = i.Lnext)
            } while (i !== h.anEdge)
            if (l > r) throw 'Face vertex greater that support polygon'
            ;(h.n = s), ++s
          }
        ;(this.elementCount = s),
          e === ot.CONNECTED_POLYGONS && (s *= 2),
          (this.elements = []),
          (this.elements.length = s * r),
          (this.vertexCount = a),
          (this.vertices = []),
          (this.vertices.length = a * o),
          (this.vertexIndices = []),
          (this.vertexIndices.length = a)
        for (var c = t.vHead.next; c !== t.vHead; c = c.next)
          if (c.n !== -1) {
            var p = c.n * o
            ;(this.vertices[p + 0] = c.coords[0]),
              (this.vertices[p + 1] = c.coords[1]),
              o > 2 && (this.vertices[p + 2] = c.coords[2]),
              (this.vertexIndices[c.n] = c.idx)
          }
        for (var u = 0, h = t.fHead.next; h !== t.fHead; h = h.next)
          if (!!h.inside) {
            ;(i = h.anEdge), (l = 0)
            do {
              var c = i.Org
              ;(this.elements[u++] = c.n), l++, (i = i.Lnext)
            } while (i !== h.anEdge)
            for (var m = l; m < r; ++m) this.elements[u++] = -1
            if (e === ot.CONNECTED_POLYGONS) {
              i = h.anEdge
              do (this.elements[u++] = this.getNeighbourFace_(i)), (i = i.Lnext)
              while (i !== h.anEdge)
              for (var f = l; f < r; ++f) this.elements[u++] = -1
            }
          }
      }),
      (n.prototype.outputContours_ = function (t, e) {
        var r,
          o,
          i = 0,
          s = 0
        ;(this.vertexCount = 0), (this.elementCount = 0)
        for (var a = t.fHead.next; a !== t.fHead; a = a.next)
          if (!!a.inside) {
            o = r = a.anEdge
            do this.vertexCount++, (r = r.Lnext)
            while (r !== o)
            this.elementCount++
          }
        ;(this.elements = []),
          (this.elements.length = this.elementCount * 2),
          (this.vertices = []),
          (this.vertices.length = this.vertexCount * e),
          (this.vertexIndices = []),
          (this.vertexIndices.length = this.vertexCount)
        var l = 0,
          c = 0,
          h = 0
        i = 0
        for (var a = t.fHead.next; a !== t.fHead; a = a.next)
          if (!!a.inside) {
            ;(s = 0), (o = r = a.anEdge)
            do
              (this.vertices[l++] = r.Org.coords[0]),
                (this.vertices[l++] = r.Org.coords[1]),
                e > 2 && (this.vertices[l++] = r.Org.coords[2]),
                (this.vertexIndices[c++] = this.vertexIdCallback
                  ? this.vertexIdCallback(r)
                  : r.Org.idx),
                s++,
                (r = r.Lnext)
            while (r !== o)
            ;(this.elements[h++] = i), (this.elements[h++] = s), (i += s)
          }
      }),
      (n.prototype.addContour = function (t, e) {
        this.mesh === null && (this.mesh = new Bu()), t < 2 && (t = 2), t > 3 && (t = 3)
        for (var r = null, o = 0; o < e.length; o += t)
          r === null
            ? ((r = this.mesh.makeEdge()), this.mesh.splice(r, r.Sym))
            : (this.mesh.splitEdge(r), (r = r.Lnext)),
            (r.Org.coords[0] = e[o + 0]),
            (r.Org.coords[1] = e[o + 1]),
            t > 2 ? (r.Org.coords[2] = e[o + 2]) : (r.Org.coords[2] = 0),
            (r.Org.idx = this.vertexIndexCounter++),
            this.edgeCreateCallback && this.edgeCreateCallback(r),
            (r.winding = 1),
            (r.Sym.winding = -1)
      }),
      (n.prototype.tesselate = function (t, e, r, o, i, s) {
        if (
          (t === void 0 && (t = qe.ODD),
          e === void 0 && (e = ot.POLYGONS),
          s === void 0 && (s = !0),
          (this.vertices = []),
          (this.elements = []),
          (this.vertexIndices = []),
          (this.vertexIndexCounter = 0),
          i && ((this.normal[0] = i[0]), (this.normal[1] = i[1]), (this.normal[2] = i[2])),
          (this.windingRule = t),
          o < 2 && (o = 2),
          o > 3 && (o = 3),
          !this.mesh)
        )
          return !1
        this.projectPolygon_(), hv.computeInterior(this, s)
        var a = this.mesh
        return (
          e === ot.BOUNDARY_CONTOURS
            ? this.setWindingNumber_(a, 1, !0)
            : this.tessellateInterior_(a),
          s && a.check(),
          e === ot.BOUNDARY_CONTOURS
            ? this.outputContours_(a, o)
            : this.outputPolymesh_(a, e, r, o),
          !0
        )
      }),
      n
    )
  })()
function bo(n) {
  var t = n.windingRule,
    e = t === void 0 ? qe.ODD : t,
    r = n.elementType,
    o = r === void 0 ? ot.POLYGONS : r,
    i = n.polySize,
    s = i === void 0 ? 3 : i,
    a = n.vertexSize,
    l = a === void 0 ? 2 : a,
    c = n.normal,
    h = c === void 0 ? [0, 0, 1] : c,
    p = n.contours,
    u = p === void 0 ? [] : p,
    m = n.strict,
    f = m === void 0 ? !0 : m,
    g = n.debug,
    w = g === void 0 ? !1 : g
  if (!u && f) throw new Error("Contours can't be empty")
  if (!!u) {
    var y = new pv()
    n.edgeCreateCallback && (y.edgeCreateCallback = n.edgeCreateCallback),
      n.vertexIdCallback && (y.vertexIdCallback = n.vertexIdCallback)
    for (var b = 0; b < u.length; b++) y.addContour(l || 2, u[b])
    return (
      y.tesselate(e, o, s, l, h, f),
      {
        vertices: y.vertices,
        vertexIndices: y.vertexIndices,
        vertexCount: y.vertexCount,
        elements: y.elements,
        elementCount: y.elementCount,
        mesh: w ? y.mesh : void 0,
      }
    )
  }
}
var RD = qe.ODD,
  FD = qe.NONZERO,
  VD = qe.POSITIVE,
  jD = qe.NEGATIVE,
  UD = qe.ABS_GEQ_TWO,
  kD = ot.POLYGONS,
  HD = ot.CONNECTED_POLYGONS,
  qD = ot.BOUNDARY_CONTOURS
var ni = class extends uv {
  constructor(e, r = 12, o = {}) {
    var f, g, w
    super()
    this.type = 'ShapeGeometry'
    this.windingRule = qe.ODD
    this.elementType = ot.POLYGONS
    this.polySize = 3
    this.vertexSize = 2
    this.strict = !0
    ;(this._shape = e),
      (this._curveSegments = r),
      (this._triangulationOptions = Object.assign(
        { windingRule: qe.ODD, elementType: ot.POLYGONS, polySize: 3, vertexSize: 2, strict: !0 },
        o
      ))
    let i = this._shape.extractShapePointsToFlatArray([], this._curveSegments),
      s = this._shape.shapeHoles.map((y) =>
        y.extractShapePointsToFlatArray([], this._curveSegments)
      ),
      a,
      l = !0,
      c = !0,
      h,
      p
    for (let y = 0, b = i.length / 2; y < b; y++) {
      let A = y * 2,
        N = i[A + 0],
        v = i[A + 1]
      if (
        (h !== void 0 && N !== h && (l = !1),
        p !== void 0 && v !== p && (c = !1),
        (h = N),
        (p = v),
        !l && !c)
      )
        break
    }
    !l &&
      !c &&
      (a = bo({
        contours: [i, ...s],
        windingRule: this._triangulationOptions.windingRule,
        elementType: this._triangulationOptions.elementType,
        polySize: this._triangulationOptions.polySize,
        vertexSize: this._triangulationOptions.vertexSize,
        strict: this._triangulationOptions.strict,
      }))
    let u = (f = a == null ? void 0 : a.vertexCount) != null ? f : 1,
      m = (g = a == null ? void 0 : a.elementCount) != null ? g : 1
    if (
      ((this._positionAttribute = new Js(new Float32Array(u * 3), 3)),
      (this._normalAttribute = new Js(new Float32Array(u * 3), 3)),
      (this._uvAttribute = new Js(new Float32Array(u * 2), 2)),
      (this._indexAttribute = new Js(new Uint32Array(m * 3), 1)),
      a)
    ) {
      let y = 1 / 0,
        b = -1 / 0,
        A = 1 / 0,
        N = -1 / 0
      for (let L = 0, d = u; L < d; L++) {
        let I = L * 2,
          x = a.vertices[I + 0],
          C = a.vertices[I + 1]
        x < y && (y = x), x > b && (b = x), C < A && (A = C), C > N && (N = C)
      }
      let v = b - y,
        k = N - A
      for (let L = 0, d = u; L < d; L++) {
        let I = L * 2,
          x = a.vertices[I + 0],
          C = a.vertices[I + 1],
          T = (x - y) / v,
          P = (C - A) / k
        this._positionAttribute.setXYZ(L, x, C, 0),
          this._normalAttribute.setXYZ(L, 0, 0, 1),
          this._uvAttribute.setXY(L, T, P)
      }
      for (let L = 0, d = m; L < d; L++) {
        let I = L * 3,
          x = a.elements[I + 0],
          C = a.elements[I + 1],
          T = a.elements[I + 2]
        this._indexAttribute.setX(I + 0, x),
          this._indexAttribute.setX(I + 1, C),
          this._indexAttribute.setX(I + 2, T)
      }
    }
    this.setAttribute('position', this._positionAttribute),
      this.setAttribute('normal', this._normalAttribute),
      this.setAttribute('uv', this._uvAttribute),
      this.setIndex(this._indexAttribute),
      this.setDrawRange(0, ((w = a == null ? void 0 : a.elementCount) != null ? w : 1) * 3)
  }
  clone() {
    let e = new ni(this._shape, this._curveSegments)
    return (e.userData = Vi(this.userData)), e
  }
}
import { BufferAttribute as Ks, BufferGeometry as dv } from 'three'
var Ys = class {
    constructor(t = 256, e = !1) {
      ;(this.capacity = t),
        (this.size = 0),
        (this.debug = e),
        this.debug && console.log(`allocating with cap ${t}`)
      let r = t * Ys.eSize
      this.buffer = new ArrayBuffer(r)
      let o = Float32Array.BYTES_PER_ELEMENT,
        i = 0
      ;(this.positions = new Float32Array(this.buffer, i * o, 3 * t)),
        (i += 3 * t),
        (this.normals = new Float32Array(this.buffer, i * o, 3 * t)),
        (i += 3 * t),
        (this.uvs = new Float32Array(this.buffer, i * o, 2 * t))
    }
    realloc(t, e = !1) {
      if (t < this.size) throw Error('cannot shrink buffer')
      if (t <= this.capacity && !e) return
      this.debug && console.log(`resizing from ${this.capacity} \u2192 ${t}`)
      let r = t * Ys.eSize,
        o = new ArrayBuffer(r),
        i = Float32Array.BYTES_PER_ELEMENT,
        s = 0,
        a = new Float32Array(o, s * i, 3 * t)
      s += 3 * t
      let l = new Float32Array(o, s * i, 3 * t)
      s += 3 * t
      let c = new Float32Array(o, s * i, 2 * t)
      a.set(this.positions.slice(0, this.size * 3)),
        l.set(this.normals.slice(0, this.size * 3)),
        c.set(this.uvs.slice(0, this.size * 2)),
        (this.buffer = o),
        (this.positions = a),
        (this.normals = l),
        (this.uvs = c),
        (this.capacity = t)
    }
    get(t = 1) {
      let e = this.size + t
      if (e > this.capacity) {
        let o = this.capacity
        for (; e > o; ) o *= 2
        this.realloc(o)
      }
      let r = this.size
      return (this.size = e), r
    }
    reserve(t) {
      let e = this.size + t
      e > this.capacity && this.realloc(e)
    }
    shrink() {
      this.debug && console.log(`shrinking ${this.capacity} \u2192 ${this.size}`),
        this.realloc(this.size, !0)
    }
  },
  on = Ys
on.eSize = (3 + 3 + 2) * Float32Array.BYTES_PER_ELEMENT
var Pl =
    (n, t) =>
    ([e, r]) => (r < e && (r += t), (n >= e ? n : n + t) <= r),
  si = class extends dv {
    constructor(e, r, o = 0, i = 12, s = 3) {
      super()
      this.type = 'ShapeGeometry'
      this.vertexCache = {}
      ;(this._shape = e),
        (this._depth = r),
        (this._bevel = o),
        (this._curveSegments = i),
        (this._bevelSegmentsInput = s),
        o <= 0
          ? ((this._bevelSize = 0), (this._bevelSegments = 0))
          : ((this._bevelSize = Math.min(o, r / 2 - 1e-12)), (this._bevelSegments = Math.floor(s)))
      let a = this._shape.extractShapePointsToFlatArray([], i),
        l = this._shape.shapeHoles.map((L) => {
          let d = L.extractShapePointsToFlatArray([], i),
            I = []
          for (let x = d.length - 1; x >= 1; x -= 2) {
            let C = d[x - 1],
              T = d[x - 0]
            I.push(C, T)
          }
          return I
        }),
        c = bo({
          windingRule: qe.ODD,
          elementType: ot.BOUNDARY_CONTOURS,
          vertexSize: 2,
          strict: !0,
          contours: [a],
        }),
        h = bo({
          windingRule: qe.ODD,
          elementType: ot.BOUNDARY_CONTOURS,
          vertexSize: 2,
          strict: !0,
          contours: [...l],
        })
      if (!c) throw new Error('error generating geometry')
      let p = c.elementCount
      if (h) {
        c.elementCount += h.elementCount
        for (let L = 0; L < h.elements.length; L++) {
          let d = h.elements[L],
            I = L % 2 === 0 ? c.vertexCount : 0
          c.elements.push(d + I)
        }
        for (let L = 0; L < h.vertexIndices.length; L++) {
          let d = h.vertexIndices[L],
            I = c.vertexCount
          c.vertexIndices.push(d + I)
        }
        for (let L = 0; L < h.vertices.length; L++) {
          let d = h.vertices[L]
          c.vertices.push(d)
        }
      }
      let u = 1 / 0,
        m = -1 / 0,
        f = 1 / 0,
        g = -1 / 0
      for (let L = 0, d = c.vertexCount; L < d; L++) {
        let I = L * 2,
          x = c.vertices[I + 0],
          C = c.vertices[I + 1]
        x < u && (u = x), x > m && (m = x), C < f && (f = C), C > g && (g = C)
      }
      ;(this._minX = u), (this._minY = f), (this._width = m - u), (this._height = g - f)
      let w = c.vertexCount * 2 * (2 + this._bevelSegments)
      this._buffer = new on(w)
      let y = [],
        b = []
      for (let L = c.elementCount - 1; L >= 0; L--) {
        let d = L >= p,
          I = L * 2,
          x = c.elements[I + 0],
          C = c.elements[I + 1],
          T = x + C,
          P = { start: x, count: C, normals: [], continuous: [], concave: [] },
          $ = x,
          J = T - 1,
          ie = x + 1,
          ue = this._shape.roundedCurves.length
        do {
          let G = $ - x,
            B = c.vertices[J * 2 + 0],
            z = c.vertices[J * 2 + 1],
            D = c.vertices[$ * 2 + 0],
            R = c.vertices[$ * 2 + 1],
            Y = c.vertices[ie * 2 + 0],
            Z = c.vertices[ie * 2 + 1],
            j = D - B,
            V = R - z,
            E = Math.sqrt(j * j + V * V)
          ;(j /= E), (V /= E)
          let U = D - Y,
            ne = R - Z,
            q = Math.sqrt(U * U + ne * ne)
          ;(U /= q),
            (ne /= q),
            (P.normals[G * 2 + 0] = -ne),
            (P.normals[G * 2 + 1] = U),
            (P.concave[G] = j * ne - V * U > 0)
          let W = c.vertexIndices[$]
          if (Array.isArray(W)) P.continuous[G] = !1
          else {
            let [K, X] = this._shape.getCurveIndexFromVertexId(W - 1, !0)
            if (X > 0 && X < 1) P.continuous[G] = !0
            else {
              let Q = X === 1 ? K + 1 : K - 1
              Q = (Q + ue) % ue
              let se = X === 1 ? 0 : 1,
                oe = this._shape.roundedCurves[K].getTangent(X),
                he = this._shape.roundedCurves[Q].getTangent(se)
              P.continuous[G] = oe.dot(he) > 0.95
            }
          }
          d && ((P.normals[G * 2 + 0] *= -1), (P.normals[G * 2 + 1] *= -1)),
            ([J, $, ie] = [$, ie, ie + 1]),
            ie >= T && (ie -= C)
        } while (ie !== x + 1)
        let ce = []
        ce.push({
          bevelI: 0,
          angle: 0,
          size: 0,
          boundary: {
            vertices: c.vertices.slice(x * 2, T * 2),
            vertexCount: C,
            vertexIndices: new Array(C).fill(!0).map((G, B) => [B, B]),
            elements: [0, C],
            elementCount: 1,
            mesh: null,
          },
          reverseMap: [],
          insetPoints: c.vertices.slice(x * 2, T * 2),
        })
        for (let G = 1; G <= this._bevelSegments; G++) {
          let B = ((G / this._bevelSegments) * Math.PI) / 2,
            z = (1 - Math.cos(B)) * this._bevelSize,
            D = [],
            R = [],
            Y = [],
            Z = [],
            j = 0
          for (let E = 0; E < C; E++) {
            let U = E * 2,
              ne = ((E - 1 + C) % C) * 2,
              q = c.vertices[P.start * 2 + U + 0],
              W = c.vertices[P.start * 2 + U + 1],
              K = -P.normals[ne + 0] * z,
              X = -P.normals[ne + 1] * z,
              Q = -P.normals[U + 0] * z,
              se = -P.normals[U + 1] * z
            if (P.concave[E] || (!P.concave[E] && d)) {
              let oe = Math.atan2(X, K),
                he = Math.atan2(se, Q)
              he > oe && (he -= Math.PI * 2)
              let Ge = he - oe
              if (P.continuous[E] || d) {
                let ge = oe + Ge / 2,
                  $e = Math.cos(ge) * z,
                  Te = Math.sin(ge) * z
                ;(D[2 * j + 0] = q + $e * (d ? -1 : 1)),
                  (D[2 * j + 1] = W + Te * (d ? -1 : 1)),
                  (Z[j] = E),
                  j++
              } else {
                let ge = Math.max(1, Math.floor(((i / 4) * Math.abs(Ge)) / Math.PI))
                for (let $e = 0; $e <= ge; $e++) {
                  let Te = oe + Ge * ($e / ge),
                    ht = Math.cos(Te) * z,
                    Lt = Math.sin(Te) * z
                  ;(D[2 * j + 0] = q + ht), (D[2 * j + 1] = W + Lt), (Z[j] = E), j++
                }
              }
            } else
              (D[2 * j + 0] = q + K),
                (D[2 * j + 1] = W + X),
                (Z[j] = E),
                (R[E] = j),
                j++,
                (D[2 * j + 0] = q),
                (D[2 * j + 1] = W),
                (Z[j] = E),
                j++,
                (D[2 * j + 0] = q + Q),
                (D[2 * j + 1] = W + se),
                (Z[j] = E),
                (Y[E] = j),
                j++
          }
          let V = bo({
            windingRule: qe.POSITIVE,
            elementType: ot.BOUNDARY_CONTOURS,
            vertexSize: 2,
            strict: !0,
            contours: [D],
            edgeCreateCallback: (E) => {
              let ne = E.Org.idx,
                q = Z[ne],
                W = Z[(ne + 1) % Z.length]
              ;(E.idx = [q, W]), (E.Sym.idx = [W, q])
            },
            vertexIdCallback: (E) => {
              let U = E.Lprev.idx
              return [U ? U[1] : 0, E.idx[0]]
            },
          })
          if (!V)
            throw (
              (console.log('Error'), new Error(`error generating bevel geometry for ${G}'th loop`))
            )
          if (!V.vertexCount) break
          for (let E = 0; E < V.vertexIndices.length; E++) {
            let [U, ne] = V.vertexIndices[E]
            if (U === ne) continue
            let q = ne
            ne < U && (q += C)
            for (let W = U; W < q; W++) {
              let K = W % C,
                X = (W + 1) % C
              if (!P.continuous[K] || !P.continuous[X]) {
                ;(V.vertexIndices[E] = [U, K]),
                  V.vertexIndices.splice(E + 1, 0, [X, ne]),
                  V.vertices.splice((E + 1) * 2, 0, V.vertices[E * 2], V.vertices[E * 2 + 1])
                break
              }
            }
          }
          ce.push({ bevelI: G, angle: B, size: z, boundary: V, reverseMap: Z, insetPoints: D })
        }
        let ve = (G, B, z) => {
            let D = 0,
              R = G.boundary.vertexIndices.length
            for (; D < R && z(G.boundary.vertexIndices[B]); ) (B = (B + 1) % R), D++
            return D
          },
          F = y.length
        for (let G = 1; G < ce.length; G++) {
          let B = ce[G - 1],
            z = ce[G],
            D = B.boundary.vertexIndices.length,
            R = z.boundary.vertexIndices.length
          if (!D || !R) break
          let Y = P.concave.length,
            Z = 0,
            j = Pl(Z, C)
          for (
            ;
            !B.boundary.vertexIndices.filter(j).length ||
            !z.boundary.vertexIndices.filter(j).length;

          )
            Z++, (j = Pl(Z, C))
          let V = B.boundary.vertexIndices.findIndex(j),
            E = z.boundary.vertexIndices.findIndex(j)
          do V = (V + 1) % D
          while (j(B.boundary.vertexIndices[V]))
          do E = (E + 1) % R
          while (j(z.boundary.vertexIndices[E]))
          Z = (Z + 1) % C
          let U = Z,
            ne = this.buildBevelVert(P, B, (V - 1 + D) % D),
            q = this.buildBevelVert(P, z, (E - 1 + R) % R),
            W = ne,
            K = q,
            X,
            Q,
            se = !1
          do {
            j = Pl(Z, C)
            let oe = ve(B, V, j),
              he = ve(z, E, j),
              Ge = se
            if (((se = !1), oe && !he)) {
              for (let ge = 0; ge < oe; ge++)
                (X = this.buildBevelVert(P, B, (V + ge) % D, ge / (oe - 1))),
                  y.push(W.topN, X.topP, K.topN),
                  y.push(X.bottomP, W.bottomN, K.bottomN),
                  (W = X)
              se = !0
            } else if (!oe && he)
              for (let ge = 0; ge < he; ge++)
                (Q = this.buildBevelVert(P, z, (E + ge) % R, ge / (he - 1))),
                  y.push(K.topN, W.topP, Q.topP),
                  y.push(W.bottomP, K.bottomN, Q.bottomP),
                  (K = Q)
            else if (oe && he)
              if (
                ((X = this.buildBevelVert(P, B, V, 0)),
                (Q = this.buildBevelVert(P, z, E, 0)),
                Ge
                  ? (y.push(W.topN, Q.topP, K.topN),
                    y.push(W.topN, X.topP, Q.topP),
                    y.push(Q.bottomP, W.bottomN, K.bottomN),
                    y.push(Q.bottomP, X.bottomP, W.bottomN))
                  : (y.push(K.topN, W.topN, X.topP),
                    y.push(K.topN, X.topP, Q.topP),
                    y.push(X.bottomP, W.bottomN, K.bottomN),
                    y.push(X.bottomP, K.bottomN, Q.bottomP)),
                (W = X),
                (K = Q),
                oe === he)
              )
                for (let ge = 1; ge < oe; ge++)
                  (X = this.buildBevelVert(P, B, (V + ge) % D, ge / (oe - 1))),
                    (Q = this.buildBevelVert(P, z, (E + ge) % R, ge / (he - 1))),
                    y.push(W.topN, X.topP, K.topN),
                    y.push(K.topN, X.topP, Q.topP),
                    y.push(X.bottomP, W.bottomN, K.bottomN),
                    y.push(X.bottomP, K.bottomN, Q.bottomP),
                    (W = X),
                    (K = Q)
              else if (oe > he) {
                let ge = oe / he,
                  $e = 0
                for (let Te = 1; Te < oe; Te++)
                  (X = this.buildBevelVert(P, B, (V + Te) % D, Te / (oe - 1))),
                    y.push(W.topN, X.topP, K.topN),
                    y.push(X.bottomP, W.bottomN, K.bottomN),
                    (W = X),
                    Te > ($e + 1) * ge &&
                      ($e++,
                      (Q = this.buildBevelVert(P, z, (E + $e) % R, $e / (he - 1))),
                      y.push(K.topN, X.topP, Q.topP),
                      y.push(X.bottomP, K.bottomN, Q.bottomP),
                      (K = Q))
              } else {
                let ge = he / oe,
                  $e = 0
                for (let Te = 1; Te < he; Te++)
                  (Q = this.buildBevelVert(P, z, (E + Te) % R, Te / (he - 1))),
                    y.push(K.topN, X.topP, Q.topP),
                    y.push(X.bottomP, K.bottomN, Q.bottomP),
                    (K = Q),
                    Te > ($e + 1) * ge &&
                      ($e++,
                      (X = this.buildBevelVert(P, B, (V + $e) % D, $e / (oe - 1))),
                      y.push(W.topN, X.topP, K.topN),
                      y.push(X.bottomP, W.bottomN, K.bottomN),
                      (W = X))
              }
            ;(V = (V + oe) % D), (E = (E + he) % R), (Z = (Z + 1) % Y)
          } while (Z !== U)
        }
        {
          let G = ce[0]
          for (let B = 0, z = G.boundary.vertexCount; B < z; B++) {
            let D = this.buildBevelVert(P, G, B),
              R = this.buildBevelVert(P, G, (B + 1) % z)
            y.push(R.topP, D.topN, D.bottomN), y.push(R.topP, D.bottomN, R.bottomP)
          }
        }
        if (d) {
          let G = []
          for (let B = y.length - 1; B >= F + 2; B -= 3) {
            let z = y[B - 2],
              D = y[B - 1],
              R = y[B - 0]
            G.push(R, D, z)
          }
          y.splice(F, y.length - F, ...G)
        }
        if (d) {
          let G = []
          for (let B = ce[ce.length - 1].boundary.vertices.length - 1; B >= 1; B -= 2) {
            let z = ce[ce.length - 1].boundary.vertices[B - 1],
              D = ce[ce.length - 1].boundary.vertices[B - 0]
            G.push(z, D)
          }
          b.push(G)
        }
        if (!d) {
          let G = ce[ce.length - 1],
            B = bo({
              windingRule: ce.length > 1 ? qe.POSITIVE : qe.ODD,
              elementType: ot.POLYGONS,
              vertexSize: 2,
              strict: !0,
              contours: [G.insetPoints, ...b],
            })
          if (!B) throw new Error('Error generating geometry for surface')
          Object.assign(this, { capStartIndex: y.length })
          for (let z = 0; z < B.elementCount * 3; z += 3) {
            let D = this.buildSurfaceVert(B, B.elements[z + 0]),
              R = this.buildSurfaceVert(B, B.elements[z + 1]),
              Y = this.buildSurfaceVert(B, B.elements[z + 2])
            y.push(D.top, R.top, Y.top), y.push(Y.bottom, R.bottom, D.bottom)
          }
        }
        this.vertexCache = {}
      }
      this._buffer.shrink()
      let A = new Ks(Uint32Array.from(y), 1),
        N = new Ks(this._buffer.positions, 3),
        v = new Ks(this._buffer.normals, 3),
        k = new Ks(this._buffer.uvs, 2)
      ;(N.needsUpdate = !0),
        (v.needsUpdate = !0),
        (k.needsUpdate = !0),
        (A.needsUpdate = !0),
        this.setAttribute('position', N),
        this.setAttribute('normal', v),
        this.setAttribute('uv', k),
        this.setIndex(A)
    }
    buildSurfaceVert(e, r) {
      let o = r.toString()
      if (o in this.vertexCache) return this.vertexCache[o]
      let i = e.vertices[r * 2 + 0],
        s = e.vertices[r * 2 + 1],
        a = (i - this._minX) / this._width,
        l = (s - this._minY) / this._height,
        c = this._buffer.get(2),
        h = c * 3,
        p = c * 2,
        u = { top: c + 0, bottom: c + 1 }
      return (
        (this._buffer.positions[h + 0] = i),
        (this._buffer.positions[h + 1] = s),
        (this._buffer.positions[h + 2] = this._depth),
        (this._buffer.normals[h + 0] = 0),
        (this._buffer.normals[h + 1] = 0),
        (this._buffer.normals[h + 2] = 1),
        (this._buffer.uvs[p + 0] = a),
        (this._buffer.uvs[p + 1] = l),
        (this._buffer.positions[h + 3] = i),
        (this._buffer.positions[h + 4] = s),
        (this._buffer.positions[h + 5] = 0),
        (this._buffer.normals[h + 3] = 0),
        (this._buffer.normals[h + 4] = 0),
        (this._buffer.normals[h + 5] = -1),
        (this._buffer.uvs[p + 2] = a),
        (this._buffer.uvs[p + 3] = l),
        (this.vertexCache[o] = u),
        u
      )
    }
    buildBevelVert(e, r, o, i = 1) {
      let s = `${r.bevelI}:${o}`
      if (s in this.vertexCache) return this.vertexCache[s]
      let [a, l] = r.boundary.vertexIndices[o],
        c,
        h,
        p,
        u
      a !== l
        ? ((h = a), (c = l), (u = !1), (p = e.continuous[h] && e.continuous[c]))
        : ((c = a),
          (h = (c - 1 + e.count) % e.count),
          (u = e.concave[c] && r.bevelI > 0),
          (p = e.continuous[c] || u))
      let m = Math.cos(r.angle),
        f = Math.sin(r.angle),
        g = o * 2,
        w = c * 2,
        y = h * 2,
        b = r.boundary.vertices[g + 0],
        A = r.boundary.vertices[g + 1],
        N = (1 - f) * this._bevelSize,
        v = (b - this._minX) / this._width,
        k = (A - this._minY) / this._height,
        L = e.normals[w + 0],
        d = e.normals[w + 1],
        I = e.normals[y + 0],
        x = e.normals[y + 1]
      if (u) {
        let J = I - L,
          ie = x - d
        ;(L = L + J * (1 - i)), (d = d + ie * (1 - i))
        let ue = Math.sqrt(L * L + d * d)
        ;(L /= ue), (d /= ue)
      }
      let C = this._buffer.get(p ? 2 : 4),
        T = C * 3,
        P = C * 2,
        $ = { i: o, fi: c, topP: C + 0, topN: C + 0, bottomP: C + 1, bottomN: C + 1 }
      return (
        (this._buffer.positions[T + 0] = b),
        (this._buffer.positions[T + 1] = A),
        (this._buffer.positions[T + 2] = this._depth - N),
        (this._buffer.normals[T + 0] = L * m),
        (this._buffer.normals[T + 1] = d * m),
        (this._buffer.normals[T + 2] = f),
        (this._buffer.uvs[P + 0] = v),
        (this._buffer.uvs[P + 1] = k),
        (this._buffer.positions[T + 3] = b),
        (this._buffer.positions[T + 4] = A),
        (this._buffer.positions[T + 5] = N),
        (this._buffer.normals[T + 3] = L * m),
        (this._buffer.normals[T + 4] = d * m),
        (this._buffer.normals[T + 5] = -f),
        (this._buffer.uvs[P + 2] = k),
        (this._buffer.uvs[P + 3] = v),
        p ||
          ((C += 2),
          (T += 6),
          (P += 4),
          ($.topP = C + 0),
          ($.bottomP = C + 1),
          (this._buffer.positions[T + 0] = b),
          (this._buffer.positions[T + 1] = A),
          (this._buffer.positions[T + 2] = this._depth - N),
          (this._buffer.normals[T + 0] = I * m),
          (this._buffer.normals[T + 1] = x * m),
          (this._buffer.normals[T + 2] = f),
          (this._buffer.uvs[P + 0] = v),
          (this._buffer.uvs[P + 1] = k),
          (this._buffer.positions[T + 3] = b),
          (this._buffer.positions[T + 4] = A),
          (this._buffer.positions[T + 5] = N),
          (this._buffer.normals[T + 3] = I * m),
          (this._buffer.normals[T + 4] = x * m),
          (this._buffer.normals[T + 5] = -f),
          (this._buffer.uvs[P + 2] = k),
          (this._buffer.uvs[P + 3] = v)),
        (this.vertexCache[s] = $),
        $
      )
    }
    clone() {
      let e = new si(
        this._shape,
        this._depth,
        this._bevel,
        this._curveSegments,
        this._bevelSegmentsInput
      )
      return (e.userData = Vi(this.userData)), e
    }
  }
var ut = class {
  static create(n) {
    return this.build(this.normalizeInputs(n))
  }
  static normalizeInputs(n, t) {
    var c, h, p, u, m, f, g
    let e = Object.assign(
        {},
        (c = t == null ? void 0 : t.parameters) != null
          ? c
          : {
              width: 100,
              subdivisions: 40,
              roundness: 0,
              extrudeBevelSize: 0,
              extrudeBevelSegments: 3,
            },
        n.parameters
      ),
      r = Math.abs(e.width),
      o = Math.abs((h = e.height) != null ? h : e.width),
      i = Math.abs((p = e.depth) != null ? p : 0),
      s = (u = n.shape) != null ? u : t == null ? void 0 : t.shape,
      a = (m = s == null ? void 0 : s.roundness) != null ? m : e.roundness
    s !== void 0 &&
      (s instanceof Pe
        ? (s.width !== r || s.height !== o) && s.applySize(r, o)
        : (s = new Pe(r, o).fromJSON(s)),
      ((f = n.parameters) == null ? void 0 : f.roundness) !== void 0 &&
        ((g = n.parameters) == null ? void 0 : g.roundness) > 0 &&
        s.update(!1))
    let l = s != null ? s : new Pe(r, o)
    return {
      parameters: Object.assign(e, { width: r, height: o, depth: i, roundness: a }),
      shape: l,
    }
  }
  static build(n) {
    let {
      depth: t,
      extrudeBevelSize: e,
      extrudeBevelSegments: r,
      subdivisions: o,
      roundness: i,
    } = n.parameters
    n.shape.roundness = i
    let s
    return (
      t <= 0 ? (s = new ni(n.shape, o)) : (s = new si(n.shape, t, e, o, r)),
      Object.assign(s, { userData: H(O({}, n), { type: 'VectorGeometry' }) })
    )
  }
}
import { MathUtils as Ru, Vector2 as Fu } from 'three'
var Vu = Math.PI * 2,
  ju = class {
    static create(n) {
      return this.build(this.normalizeInputs(n))
    }
    static normalizeInputs(n, t) {
      var o, i, s
      let e = Object.assign(
        {},
        (o = t == null ? void 0 : t.parameters) != null
          ? o
          : {
              width: 100,
              depth: 0,
              spikes: 64,
              angle: 360,
              innerRadius: 0,
              extrudeBevelSize: 0,
              extrudeBevelSegments: 1,
            },
        n.parameters
      )
      return {
        shape: n.shape && n.shape instanceof Pe ? n.shape : new Pe(),
        parameters: Object.assign(e, {
          width: Math.abs(e.width),
          height: Math.abs((i = e.height) != null ? i : e.width),
          depth: Math.abs((s = e.depth) != null ? s : 0),
        }),
      }
    }
    static build(n) {
      let {
          width: t,
          height: e,
          spikes: r,
          angle: o,
          innerRadius: i,
          depth: s,
          extrudeBevelSize: a,
          extrudeBevelSegments: l,
        } = n.parameters,
        c = n.shape,
        h = t * 0.5,
        p = e * 0.5,
        u = mv(c, h, p, (o * Math.PI) / 180, r, i)
      ;(c.isClosed = !0), c.update()
      let m = ut.create({
        shape: c,
        parameters: { subdivisions: u, depth: s, extrudeBevelSize: a, extrudeBevelSegments: l },
      })
      return Object.assign(m, { userData: H(O({}, n), { type: 'EllipseGeometry' }) })
    }
  }
function mv(n, t, e, r, o, i) {
  if (r >= Vu)
    return o > 30 || o % 4 === 0 ? (yv(n, t, e, i), Math.round(o / 4)) : zu(n, r, o, t, e, i)
  let s = { x: 0, y: e },
    a = r + Math.PI * 0.5,
    l = { x: Math.cos(a) * t, y: Math.sin(a) * e },
    c = Du({
      px: s.x,
      py: s.y,
      cx: l.x,
      cy: l.y,
      rx: t,
      ry: e,
      largeArcFlag: r > Math.PI,
      sweepFlag: !0,
    })
  return o > 30 || o % c.length === 0 ? fv(n, s.x, s.y, c, o, t, e, i) : zu(n, r, o, t, e, i)
}
function fv(n, t, e, r, o, i, s, a) {
  let l = Math.round(o / r.length)
  n.addPoint(ai(t, e))
  for (let c = 0, h = r.length; c < h; c++) {
    let p = r[c],
      u = n.points[c],
      m = ai(p.x, p.y)
    u.controls[1].position.set(p.x1, p.y1), m.controls[0].position.set(p.x2, p.y2), n.addPoint(m)
  }
  return a > 0 ? Uu(n, i, s, a) : n.addPoint(ai(0, 0)), l
}
function zu(n, t, e, r, o, i) {
  let s = -t / e
  for (let a = 0; a <= e; a++) {
    let l = s * a,
      c = Math.sin(l) * r,
      h = Math.cos(l) * o
    n.addPoint(ai(c, h))
  }
  return (
    t < Vu
      ? i > 0
        ? Uu(n, r, o, i)
        : n.addPoint(ai(0, 0))
      : (n.removePoint(n.points[n.points.length - 1]), i > 0 && ku(n, r, o, i)),
    1
  )
}
function yv(n, t, e, r = 0, o = 0, i = 0) {
  let s = 0.5522847498,
    a = t * s,
    l = e * s
  n.addPoint(Xs(o - t, i, o - t, i - l, o - t, i + l)),
    n.addPoint(Xs(o, i + e, o - a, i + e, o + a, i + e)),
    n.addPoint(Xs(o + t, i, o + t, i + l, o + t, i - l)),
    n.addPoint(Xs(o, i - e, o + a, i - e, o - a, i - e)),
    r > 0 && ku(n, t, e, r)
}
function ai(n, t) {
  return new tr(Ru.generateUUID(), new Fu(n, t))
}
function Xs(n, t, e, r, o, i) {
  let s = ai(n, t)
  return s.controls[0].position.set(e, r), s.controls[1].position.set(o, i), s
}
function Uu(n, t, e, r) {
  Hu(n, t, e, r).forEach((i) => n.addPoint(i))
}
function ku(n, t, e, r) {
  let o = Hu(n, t, e, r),
    i = new Pe()
  o.forEach((s) => i.addPoint(s)), (i.isClosed = !0), n.shapeHoles.push(i)
}
function Hu(n, t, e, r) {
  let o = (r * t) / 100,
    i = o * (Math.abs(e) / Math.abs(t)),
    s = new Fu(o / t, i / e),
    a = n.points
      .map((l) => {
        let c = l.clone()
        return (c.uuid = Ru.generateUUID()), c
      })
      .reverse()
  return (
    a.forEach((l) => {
      l.position.multiply(s)
      let c = l.controls[0].position.clone().multiply(s),
        h = l.controls[1].position.clone().multiply(s)
      l.controls[0].position.copy(h), l.controls[1].position.copy(c)
    }),
    a
  )
}
import { BufferGeometry as gv, Float32BufferAttribute as Ol, Vector3 as qu } from 'three'
var Wu = class {
    static create(n) {
      return this.build(this.normalizeInputs(n))
    }
    static normalizeInputs(n, t) {
      var a, l, c
      let e = Object.assign(
          {},
          (a = t == null ? void 0 : t.parameters) != null
            ? a
            : {
                width: 100,
                revolutions: 2,
                segments: 40,
                pathRadius: 10,
                pathType: 0,
                pathSegments: 30,
                cornerRadius: 30,
                cornerSegments: 4,
              },
          n.parameters
        ),
        r = Math.abs(e.width),
        o = Math.abs((l = e.height) != null ? l : r),
        i = Math.abs((c = e.depth) != null ? c : r),
        s = Math.abs(Math.min(r, i)) / 2
      return {
        parameters: Object.assign(e, {
          width: r,
          height: o,
          depth: i,
          radius: s,
          segments: Math.round(e.segments),
          pathSegments: Math.round(e.pathSegments),
          cornerSegments: Math.round(e.cornerSegments),
        }),
      }
    }
    static build(n) {
      let {
          width: t,
          height: e,
          depth: r,
          radius: o,
          revolutions: i,
          segments: s,
          pathRadius: a,
          pathType: l,
          pathSegments: c,
          cornerRadius: h,
          cornerSegments: p,
        } = n.parameters,
        u = new nn(!1, t, e, r, o, i, s, a, l, c, h, p)
      return Object.assign(u, { userData: H(O({}, n), { type: 'HelixGeometry' }) })
    }
  },
  nn = class extends gv {
    constructor(
      t = !0,
      e = 1,
      r = 1,
      o = 1,
      i = 1,
      s = 1,
      a = 1,
      l = 1,
      c = 1,
      h = 1,
      p = 1,
      u = 1
    ) {
      super()
      let m = t && s === 1
      m && (u = 0), p > 100 && (p = 100)
      let f = () => new qu(),
        g = new qu(),
        w = f(),
        y = f(),
        b = f(),
        A,
        N,
        v,
        k,
        L,
        d,
        I,
        x,
        C = f(),
        T = f(),
        P = f(),
        $ = f(),
        J = f(),
        ie = f(),
        ue = f(),
        ce = f(),
        ve = r - 2 * l + 0.001,
        F = ve / s,
        G = Math.ceil(a * s),
        B = G + 1,
        z = ve / G,
        D = -ve / 2,
        R = h + 1,
        Y = (2 * Math.PI) / h,
        Z = Math.PI / 2 / u,
        j = 0.01,
        V = Math.min((1 - p / 100) * l, l - j),
        E = l - V,
        U = 0,
        ne = 2,
        q = u * ne + ne,
        W = (R * q) / ne,
        K = W + R * B,
        X = R * (B + q),
        [Q, se, oe] = [3, 3, 2].map((ke) => Array(X * ke).fill(0)),
        he = [],
        Ge = i - l
      function ge(ke, gt) {
        let _t = Math.PI / 2
        ;(d = gt * z),
          (x = (2 * Math.PI * (d % F)) / F + _t),
          (d += D),
          (I = Math.sin(x) * Ge),
          (L = Math.cos(x) * Ge),
          t ? ke.set(L, I, d) : ke.set(L, d, I)
      }
      ge(g, -1e-10), ge(w, 0), C.copy(g), ge(g, 1)
      let $e = g.distanceTo(w),
        Te = E + V,
        ht = $e * G + 2 * Te,
        Lt = V,
        Cr = ht - Te
      for (let ke = 0; ke <= G; ke++) {
        ge(y, ke),
          ce.subVectors(y, C).normalize(),
          C.copy(y),
          ie
            .copy(y)
            .setComponent(+t + 1, 0)
            .normalize(),
          ue.crossVectors(ce, ie).normalize()
        let gt = ke === 0,
          _t = ke === G,
          En = gt ? (3 * Math.PI) / 2 : Z,
          _n = gt ? Lt : Cr,
          Gn = gt ? R : K,
          zn = gt ? 0 : X - R,
          Rn = ce
            .clone()
            .multiplyScalar(gt ? -E : E)
            .add(y),
          Fn = ce
            .clone()
            .multiplyScalar(gt ? -1 : 1)
            .normalize()
        for (let Ut = 0; Ut < R; Ut++) {
          let Gi = Ut * Y
          if (
            (T.addVectors(
              g.copy(ie).multiplyScalar(l * Math.cos(Gi)),
              w.copy(ue).multiplyScalar(l * Math.sin(Gi))
            ),
            P.copy(T).normalize(),
            gt || _t)
          ) {
            m ||
              ((U = zn + Ut),
              [0, 1, 2].forEach((pt) => {
                ;(Q[U * 3 + pt] = Rn.getComponent(pt)), (se[U * 3 + pt] = Fn.getComponent(pt))
              }),
              (oe[U * 2] = +_t),
              (oe[U * 2 + 1] = Ut / h)),
              w.copy(P).multiplyScalar(V),
              b.addVectors(y, w)
            for (let pt = 0; pt < u; pt++) {
              let Po = pt * Z + En
              $.addVectors(
                g.copy(ce).multiplyScalar(E * Math.sin(Po)),
                w.copy(P).multiplyScalar(E * Math.cos(Po))
              ),
                J.copy($).normalize(),
                w.addVectors(b, $),
                $.normalize(),
                (U = Gn + pt * R + Ut),
                [0, 1, 2].forEach((co) => {
                  ;(Q[U * 3 + co] = w.getComponent(co)), (se[U * 3 + co] = J.getComponent(co))
                })
              let Vn = +gt + Math.sin(Po)
              ;(oe[U * 2] = (_n + E * Vn) / ht), (oe[U * 2 + 1] = Ut / h)
            }
          }
          w.addVectors(y, T),
            (U = W + ke * R + Ut),
            [0, 1, 2].forEach((pt) => {
              ;(Q[U * 3 + pt] = w.getComponent(pt)), (se[U * 3 + pt] = P.getComponent(pt))
            }),
            (oe[U * 2] = (Te + ke * $e) / ht),
            (oe[U * 2 + 1] = Ut / h)
        }
      }
      let yt = B + 2 * u + ne,
        Tr = 1,
        [ao, lo] = m ? [Tr, Tr + B - 1] : [0, yt - 1]
      for (let ke = ao; ke <= lo - 1; ke++) {
        let gt = m && ke === lo - 1
        for (let _t = 0; _t < R - 1; _t++)
          (A = ke * R + _t),
            (N = A + 1),
            (v = (gt ? _t : A) + R),
            (k = (gt ? _t + 1 : N) + R),
            ke === 0
              ? he.push(N, k, v)
              : ke === yt - 2
              ? he.push(A, N, v)
              : he.push(A, N, v, N, k, v)
      }
      this.setIndex(he),
        this.setAttribute('position', new Ol(Q, 3)),
        this.setAttribute('normal', new Ol(se, 3)),
        this.setAttribute('uv', new Ol(oe, 2))
    }
  }
import { IcosahedronBufferGeometry as xv } from 'three'
var $u = class {
    static create(n) {
      return this.build(this.normalizeInputs(n))
    }
    static normalizeInputs(n, t) {
      var r, o, i
      let e = Object.assign(
        {},
        (r = t == null ? void 0 : t.parameters) != null
          ? r
          : { width: 100, detail: 0, corner: 0, cornerSides: 4 },
        n.parameters
      )
      return {
        parameters: Object.assign(e, {
          width: Math.abs(e.width),
          height: Math.abs((o = e.height) != null ? o : e.width),
          depth: Math.abs((i = e.depth) != null ? i : e.width),
        }),
      }
    }
    static build(n) {
      let { width: t, height: e, depth: r, detail: o, corner: i, cornerSides: s } = n.parameters,
        a = o === 0 && i !== 0 ? new sn(t * 0.5, i, s) : new xv(t * 0.5, o)
      return (
        a.scale(1, e / t, r / t),
        Object.assign(a, { userData: H(O({}, n), { type: 'IcosahedronGeometry' }) })
      )
    }
  },
  sn = class extends Xr {
    constructor(t = 1, e = 0.2, r = 4) {
      let o = (1 + Math.sqrt(5)) / 2,
        i = [
          -1,
          o,
          0,
          1,
          o,
          0,
          -1,
          -o,
          0,
          1,
          -o,
          0,
          0,
          -1,
          o,
          0,
          1,
          o,
          0,
          -1,
          -o,
          0,
          1,
          -o,
          o,
          0,
          -1,
          o,
          0,
          1,
          -o,
          0,
          -1,
          -o,
          0,
          1,
        ],
        s = [
          0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4, 11, 10, 2, 10, 7, 6,
          7, 1, 8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3, 8, 9, 4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6,
          7, 9, 8, 1,
        ],
        a = 'IcosahedronGeometry'
      super(i, s, a, t, e, r), (this.type = a)
    }
    static fromJSON(t) {
      return new sn(t.radius, t.corner, t.cornerSides)
    }
  }
import { LatheBufferGeometry as bv, Shape as vv } from 'three'
var Ju = class {
  static create(n) {
    return this.build(this.normalizeInputs(n))
  }
  static normalizeInputs(n, t) {
    var r, o, i, s, a
    ;((o = (r = n.parameters) == null ? void 0 : r.points) != null ? o : []).forEach((l) => {
      Array.isArray(l) && ((l.x = l[0]), (l.y = l[1]))
    })
    let e = Object.assign(
      {},
      (i = t == null ? void 0 : t.parameters) != null
        ? i
        : {
            width: 100,
            segments: 64,
            verticalSegments: 64,
            points: [
              { x: 0, y: -50, id: 0 },
              { x: 50, y: -50, id: 1 },
              { x: 50, y: 50, id: 2 },
              { x: 0, y: 50, id: 3 },
            ],
          },
      n.parameters
    )
    return {
      parameters: Object.assign(e, {
        width: Math.abs(e.width),
        height: Math.abs((s = e.height) != null ? s : e.width),
        depth: Math.abs((a = e.depth) != null ? a : e.width),
      }),
    }
  }
  static build(n) {
    let { points: t, segments: e, verticalSegments: r } = n.parameters,
      o = new vv()
    o.moveTo(t[0].x, t[0].y), o.bezierCurveTo(t[1].x, t[1].y, t[2].x, t[2].y, t[3].x, t[3].y)
    let i = new bv(o.extractPoints(r).shape, e)
    return (
      i.rotateZ(Math.PI), Object.assign(i, { userData: H(O({}, n), { type: 'LatheGeometry' }) })
    )
  }
}
import {
  BufferGeometry as Ku,
  BufferGeometryLoader as Mv,
  Vector3 as Pv,
  BoxBufferGeometry as Xu,
} from 'three'
import { BufferGeometry as Sv, Vector2 as Il, Vector3 as Yu } from 'three'
import { Geometry as wv, Face3 as Lv } from 'three/examples/jsm/deprecated/Geometry.js'
var Cv = ['a', 'b', 'c']
function Tv(n, t) {
  switch (t) {
    case 'c':
      return n.c
    case 'b':
      return n.b
    case 'a':
    default:
      return n.a
  }
}
function Al(n, t, e) {
  let r = Math.min(n, t),
    o = Math.max(n, t),
    i = r + '_' + o
  return e.get(i)
}
function Dl(n, t, e, r, o, i) {
  let s = Math.min(n, t),
    a = Math.max(n, t),
    l = s + '_' + a,
    c
  if (r.has(l)) c = r.get(l)
  else {
    let h = e[s],
      p = e[a]
    ;(c = { a: h, b: p, newEdge: null, faces: [] }), r.set(l, c)
  }
  c.faces.push(o), i[n].edges.push(c), i[t].edges.push(c)
}
function Nv(n, t, e, r) {
  let o, i, s
  for (o = 0, i = n.length; o < i; o++) e[o] = { edges: [] }
  for (o = 0, i = t.length; o < i; o++)
    (s = t[o]), Dl(s.a, s.b, n, r, s, e), Dl(s.b, s.c, n, r, s, e), Dl(s.c, s.a, n, r, s, e)
}
function Zs(n, t, e, r, o) {
  n.push(new Lv(t, e, r, void 0, void 0, o))
}
function li(n, t) {
  return Math.abs(t - n) / 2 + Math.min(n, t)
}
function Qs(n, t, e, r) {
  n.push([t.clone(), e.clone(), r.clone()])
}
var ea = class {
  constructor(t = 1) {
    this.subdivisions = t
  }
  modify(t) {
    t instanceof Sv ? (t = new wv().fromBufferGeometry(t)) : (t = t.clone()), t.mergeVertices()
    let e = this.subdivisions
    for (; e-- > 0; ) this._smooth(t)
    return t.computeFaceNormals(), t.computeVertexNormals(), t
  }
  _smooth(t) {
    let e = new Yu(),
      r,
      o,
      i,
      s,
      a,
      l = t.vertices,
      c = t.faces,
      h = t.faceVertexUvs[0],
      p = h !== void 0 && h.length > 0,
      u = [],
      m = new Map()
    Nv(l, c, u, m)
    let f = [],
      g,
      w,
      y,
      b,
      A,
      N,
      v
    for (let j of Array.from(m.keys())) {
      for (
        w = m.get(j),
          y = new Yu(),
          A = 3 / 8,
          N = 1 / 8,
          v = w.faces.length,
          v != 2 && ((A = 0.5), (N = 0), v != 1),
          y.addVectors(w.a, w.b).multiplyScalar(A),
          e.set(0, 0, 0),
          s = 0;
        s < v;
        s++
      ) {
        for (
          b = w.faces[s], a = 0;
          a < 3 && ((g = l[Tv(b, Cv[a])]), !(g !== w.a && g !== w.b));
          a++
        );
        g && e.add(g)
      }
      e.multiplyScalar(N), y.add(e), (w.newEdge = f.length), f.push(y)
    }
    let k,
      L,
      d,
      I,
      x,
      C,
      T,
      P = []
    for (o = 0, i = l.length; o < i; o++) {
      for (
        C = l[o],
          x = u[o].edges,
          r = x.length,
          r == 3 ? (k = 3 / 16) : r > 3 && (k = 3 / (8 * r)),
          L = 1 - r * Number(k),
          d = k,
          r <= 2 && (r == 2 ? ((L = 3 / 4), (d = 1 / 8)) : r == 1 || r == 0),
          T = C.clone().multiplyScalar(L),
          e.set(0, 0, 0),
          s = 0;
        s < r;
        s++
      )
        (I = x[s]), (g = I.a !== C ? I.a : I.b), e.add(g)
      e.multiplyScalar(Number(d)), T.add(e), P.push(T)
    }
    let $ = P.concat(f),
      J = P.length,
      ie,
      ue,
      ce,
      ve = [],
      F = [],
      G,
      B,
      z,
      D,
      R = new Il(),
      Y = new Il(),
      Z = new Il()
    for (o = 0, i = c.length; o < i; o++)
      (b = c[o]),
        (ie = Number(Al(b.a, b.b, m).newEdge) + J),
        (ue = Number(Al(b.b, b.c, m).newEdge) + J),
        (ce = Number(Al(b.c, b.a, m).newEdge) + J),
        Zs(ve, ie, ue, ce, b.materialIndex),
        Zs(ve, b.a, ie, ce, b.materialIndex),
        Zs(ve, b.b, ue, ie, b.materialIndex),
        Zs(ve, b.c, ce, ue, b.materialIndex),
        p &&
          ((G = h[o]),
          (B = G[0]),
          (z = G[1]),
          (D = G[2]),
          R.set(li(B.x, z.x), li(B.y, z.y)),
          Y.set(li(z.x, D.x), li(z.y, D.y)),
          Z.set(li(B.x, D.x), li(B.y, D.y)),
          Qs(F, R, Y, Z),
          Qs(F, B, R, Z),
          Qs(F, z, Y, R),
          Qs(F, D, Z, Y))
    ;(t.vertices = $), (t.faces = ve), p && (t.faceVertexUvs[0] = F)
  }
}
var it = new Pv(),
  Zu = class {
    static create(n) {
      return this.build(this.normalizeInputs(n))
    }
    static normalizeInputs(n, t) {
      var i, s
      let e =
          (s = (i = n.geometry) != null ? i : t == null ? void 0 : t.geometry) != null
            ? s
            : new Ku().copy(new Xu(100, 100, 100)),
        r
      t === void 0
        ? (e.computeBoundingBox(),
          e.boundingBox.getSize(it),
          (r = { width: it.x, height: it.y, depth: it.z, subdivisions: 0 }))
        : (r = t.parameters)
      let o = O(O({}, r), n.parameters)
      return {
        parameters: {
          width: Math.abs(o.width),
          height: Math.abs(o.height),
          depth: Math.abs(o.depth),
          subdivisions: Math.abs(o.subdivisions),
        },
        geometry: e,
      }
    }
    static build(n) {
      var l
      let { width: t, height: e, depth: r, subdivisions: o } = n.parameters,
        i = (l = n.geometry) != null ? l : new Ku().copy(new Xu(100, 100, 100)),
        s = i.userData.parameters
      s === void 0
        ? (i.computeBoundingBox(), i.boundingBox.getSize(it))
        : it.set(s.width, s.height, s.depth),
        (t !== it.x || e !== it.y || r !== it.z) &&
          i.scale(it.x === 0 ? 1 : t / it.x, it.y === 0 ? 1 : e / it.y, it.z === 0 ? 1 : r / it.z)
      let a = i.originalGeometry
      return (
        o > 0
          ? (a === void 0 || (s == null ? void 0 : s.subdivisions) !== o) &&
            (a === void 0 && (a = i), (i = new ea(o).modify(a).toBufferGeometry()))
          : (a !== void 0 && (i = a),
            (a = void 0),
            i.getAttribute('normal') === void 0 && i.computeVertexNormals()),
        a !== void 0 && Object.assign(i, { originalGeometry: a }),
        delete n.geometry,
        Object.assign(i, { userData: H(O({}, n), { type: 'NonParametricGeometry' }) })
      )
    }
    static loadFromUrl(n, t, e) {
      new Mv(e).load(n, (o) => {
        let i = this.normalizeInputs({ geometry: o })
        o.boundingBox.getSize(it)
        let s = 100 / it.x
        Object.assign(i.parameters, { width: 100, height: it.y * s, depth: it.z * s }),
          t(this.build(i))
      })
    }
  }
var Qu = class {
  static create(n) {
    return this.build(this.normalizeInputs(n))
  }
  static normalizeInputs(n, t) {
    var o, i, s
    let e = Object.assign(
      {},
      (o = t == null ? void 0 : t.parameters) != null
        ? o
        : {
            width: 100,
            depth: 0,
            spikes: 5,
            cornerRadius: 0,
            extrudeBevelSize: 0,
            extrudeBevelSegments: 3,
          },
      n.parameters
    )
    return {
      shape: n.shape && n.shape instanceof Pe ? n.shape : new Pe(),
      parameters: Object.assign(e, {
        width: Math.abs(e.width),
        height: Math.abs((i = e.height) != null ? i : e.width),
        depth: Math.abs((s = e.depth) != null ? s : 0),
      }),
    }
  }
  static build(n) {
    let {
        width: t,
        height: e,
        spikes: r,
        cornerRadius: o,
        depth: i,
        extrudeBevelSize: s,
        extrudeBevelSegments: a,
      } = n.parameters,
      l = n.shape,
      c = t * 0.5,
      h = e * 0.5,
      p = 0,
      u = 0,
      m = (2 * Math.PI) / r
    for (let g = 0; g < r; g++) {
      let w = m * g,
        y = p + Math.sin(w) * c,
        b = u + Math.cos(w) * h
      l.addPoint(l.createPoint(y, b))
    }
    l.isClosed = !0
    for (let g = 0, w = l.points.length; g < w; g++) l.points[g].roundness = o
    ;(l.roundness = o), l.update()
    let f = ut.create({
      shape: l,
      parameters: { roundness: o, depth: i, extrudeBevelSize: s, extrudeBevelSegments: a },
    })
    return Object.assign(f, { userData: H(O({}, n), { type: 'PolygonGeometry' }) })
  }
}
import {
  BufferGeometry as Ov,
  Float32BufferAttribute as Bl,
  Vector2 as fr,
  Vector3 as lt,
} from 'three'
var ed = class {
  static create(n) {
    return this.build(this.normalizeInputs(n))
  }
  static normalizeInputs(n, t) {
    var r, o, i
    let e = Object.assign(
      {},
      (r = t == null ? void 0 : t.parameters) != null
        ? r
        : {
            width: 100,
            radialSegments: 4,
            heightSegments: 1,
            cornerRadius: 0,
            cornerSegments: 8,
            openEnded: !1,
          },
      n.parameters
    )
    return {
      parameters: Object.assign(e, {
        width: Math.abs(e.width),
        height: Math.abs((o = e.height) != null ? o : e.width),
        depth: Math.abs((i = e.depth) != null ? i : e.width),
      }),
    }
  }
  static build(n) {
    let {
        width: t,
        height: e,
        depth: r,
        radialSegments: o,
        heightSegments: i,
        openEnded: s,
        cornerRadius: a,
        cornerSegments: l,
      } = n.parameters,
      c = new _l(t * 0.5, e, o, i, s, a, l)
    return (
      c.scale(1, 1, r / t), Object.assign(c, { userData: H(O({}, n), { type: 'PyramidGeometry' }) })
    )
  }
}
function an(n, t, e) {
  ;(e.x = n.x * t.x), (e.y = n.y), (e.z = n.x * t.y)
}
function El(n, t, e, r, o, i) {
  let s = t.clone().sub(n),
    a = e.clone().sub(n),
    l = s.angleTo(a)
  if ((s.normalize(), a.normalize(), r === o)) {
    let c = s.add(a).normalize()
    i.copy(n).addScaledVector(c, r / Math.sin(l / 2))
  } else {
    let c = s.angleTo(a)
    i.copy(n), i.addScaledVector(s, o / Math.sin(c)), i.addScaledVector(a, r / Math.sin(c))
  }
}
function Iv(n, t, e) {
  let r = n.clone().sub(t),
    o = e.clone().sub(t)
  return r.projectOnVector(o), r.add(t)
}
var _l = class extends Ov {
  constructor(t = 0.5, e = 1, r = 4, o = 1, i = !1, s = 0, a = 4) {
    super(), (r = Math.floor(Math.max(3, r))), (o = Math.floor(o)), (a = Math.floor(a))
    let l = [],
      c = [],
      h = [],
      p = [],
      u = 0,
      m = e / 2,
      f = Math.PI / r,
      g = t * Math.cos(Math.PI / r),
      w = (2 * Math.PI) / r,
      y = ((r - 2) * Math.PI) / r,
      b = Math.PI - y,
      A = new lt(0, -m, 0),
      N = new lt(0, m, 0),
      v = new fr(t, -m),
      k = new fr(g, -m),
      L = new fr(0, N.y).sub(k),
      d = new fr(0, N.y).sub(v),
      I = new fr(L.y, -L.x).normalize(),
      x = new fr(d.y, -d.x).normalize(),
      T = t * Math.cos(Math.PI / r) * Math.tan((Math.PI - L.angle()) / 2) - 1e-8
    s = Math.min(s, T)
    let P
    {
      let F = new lt(I.x, I.y, 0),
        G = new lt(Math.cos(w) * F.x, F.y, Math.sin(w) * F.x)
      P = F.angleTo(G)
    }
    let $ = s / Math.tan((Math.PI - L.angle()) / 2),
      J = s / Math.tan((Math.PI - P) / 2),
      ie = new lt()
    if (!i) {
      c.push(A.x, A.y, A.z), h.push(0, -1, 0), p.push(0, 0)
      let F = u++,
        G = [],
        B = v.clone(),
        z = $ / Math.cos(Math.PI / r)
      B.x -= z
      for (let D = 0; D < r; D++) {
        let R = (D / r) * Math.PI * 2 + f,
          Y = new fr(Math.sin(R), Math.cos(R))
        an(B, Y, ie), c.push(ie.x, ie.y, ie.z), h.push(0, -1, 0), p.push(0, 0), G.push(u++)
      }
      for (let D = 0; D < G.length; D++) l.push(G[D], F, G[(D + 1) % G.length])
    }
    let ue = []
    {
      let F = new lt(),
        G = new lt(),
        B = new lt(),
        z = new lt(),
        D = new lt(),
        R = new lt()
      for (let Y = 0; Y < r; Y++) {
        let Z = (Y / r) * Math.PI * 2 + f,
          j = ((Y + 0.5) / r) * Math.PI * 2 + f,
          V = ((Y + 1) / r) * Math.PI * 2 + f,
          E = new fr(Math.sin(Z), Math.cos(Z)),
          U = new fr(Math.sin(j), Math.cos(j)),
          ne = new fr(Math.sin(V), Math.cos(V))
        an(v, E, G),
          an(v, ne, B),
          an(I, U, F),
          El(N, G, B, J, J, z),
          c.push(z.x, z.y, z.z),
          El(G, N, B, J, $, D),
          c.push(D.x, D.y, D.z),
          El(B, G, N, $, J, R),
          c.push(R.x, R.y, R.z),
          h.push(F.x, F.y, F.z),
          h.push(F.x, F.y, F.z),
          h.push(F.x, F.y, F.z),
          p.push(0, 0),
          p.push(0, 0),
          p.push(0, 0)
        let q = u++,
          W = u++,
          K = u++
        if ((l.push(q, W, K), s > 0)) {
          {
            let se = G.clone().add(B).multiplyScalar(0.5),
              oe = N.clone().sub(se).normalize(),
              Ge = A.clone().sub(se).normalize().add(oe).normalize().multiplyScalar(-1),
              ge = R.clone().sub(D)
            ce(se, ge, Ge, L.angle())
          }
          let X, Q
          {
            let se = new lt()
            an(x, ne, se)
            let oe = R.clone().add(z).multiplyScalar(0.5)
            oe = Iv(oe, B, N)
            let he = R.clone().sub(z)
            ;[X, Q] = ce(oe, he, se, P, z.y)
          }
          {
            let se = X,
              oe = se.clone().setY(0).normalize(),
              he = new lt(0, -1, 0),
              Ge = oe.clone().cross(he)
            ve(se, oe, he, Ge)
          }
          ue.concat(Q)
          {
            let se = L.angle(),
              oe = Math.PI - se,
              he = N.clone()
            he.y -= s / Math.sin(se - Math.PI / 2)
            let Ge = new lt(),
              ge = []
            for (let Te = 0; Te < a; Te++) {
              let ht = [],
                Lt = Math.PI / 2 - (oe * Te) / a,
                Cr = Math.cos(Lt),
                yt = Math.sin(Lt),
                Tr = j
              for (let ao = 0; ao <= Te; ao++) {
                let lo = Math.cos(Tr),
                  ke = Math.sin(Tr)
                ;(F.x = Cr * ke),
                  (F.y = yt),
                  (F.z = Cr * lo),
                  Ge.copy(he).addScaledVector(F, s),
                  c.push(Ge.x, Ge.y, Ge.z),
                  h.push(F.x, F.y, F.z),
                  p.push(0, 0),
                  ht.push(u++),
                  (Tr += (Math.PI * 2) / Te / r)
              }
              ge.push(ht)
            }
            Q.reverse(), ge.push(Q)
            let $e = ge.length - 1
            for (let Te = 0; Te < $e; Te++) {
              let ht = ge[Te],
                Lt = ge[Te + 1],
                Cr = ht.length - 1
              l.push(Lt[1], ht[0], Lt[0])
              for (let yt = 1; yt <= Cr; yt++)
                l.push(ht[yt], ht[yt - 1], Lt[yt]), l.push(Lt[yt + 1], ht[yt], Lt[yt])
            }
          }
        }
      }
    }
    this.setIndex(l),
      this.setAttribute('position', new Bl(c, 3)),
      this.setAttribute('normal', new Bl(h, 3)),
      this.setAttribute('uv', new Bl(p, 2))
    function ce(F, G, B, z, D) {
      let R = -z / 2,
        Y = (Math.PI - z) / 2,
        Z = G.clone().normalize().cross(B)
      F.addScaledVector(B, -s / Math.sin(Y))
      let j = new lt(),
        V = new lt(),
        E = 1,
        U = u,
        ne = []
      for (let q = 0; q <= a; q++) {
        let W = R + (q / a) * z
        V.set(0, 0, 0), V.addScaledVector(Z, Math.sin(W)), V.addScaledVector(B, Math.cos(W))
        for (let K = 0; K <= E; K++) {
          let X = K / E - 0.5
          if ((j.copy(F), j.addScaledVector(G, X), j.addScaledVector(V, s), D != null)) {
            let Q = Math.max(0, j.y - D)
            j.addScaledVector(G, -Q / G.y)
          }
          c.push(j.x, j.y, j.z), h.push(V.x, V.y, V.z), p.push(0, 0), K === 0 && ne.push(u), u++
        }
      }
      for (let q = 0; q < a; q++)
        for (let W = 0; W < E; W++) {
          let K = U + W + (E + 1) * q,
            X = K + (E + 1),
            Q = X + 1,
            se = K + 1
          l.push(K, X, se), l.push(X, Q, se)
        }
      return [F.clone().addScaledVector(G, 0.5), ne]
    }
    function ve(F, G, B, z) {
      let D = Math.PI / 2,
        R = d.angle() - D,
        Y = [],
        Z = new lt(),
        j = new lt()
      for (let E = 0; E <= a; E++) {
        let U = [],
          ne = E / a
        for (let q = 0; q <= E; q++) {
          let K = ((E ? q / E : 0) - 0.5) * b,
            X = Math.cos(K),
            Q = Math.sin(K),
            se = Math.atan(Math.tan(R) * X),
            oe = (D + se) * ne,
            he = Math.cos(oe),
            Ge = Math.sin(oe)
          Z.set(0, 0, 0),
            Z.addScaledVector(G, Ge * X),
            Z.addScaledVector(B, he),
            Z.addScaledVector(z, Ge * Q),
            j.copy(F).addScaledVector(Z, s),
            c.push(j.x, j.y, j.z),
            h.push(Z.x, Z.y, Z.z),
            p.push(0, 0),
            U.push(u++)
        }
        Y.push(U)
      }
      let V = Y.length - 1
      for (let E = 0; E < V; E++) {
        let U = Y[E],
          ne = Y[E + 1],
          q = U.length - 1
        l.push(U[0], ne[1], ne[0])
        for (let W = 1; W <= q; W++) l.push(U[W - 1], U[W], ne[W]), l.push(U[W], ne[W + 1], ne[W])
      }
    }
  }
}
var ta = class {
  static create(n) {
    return this.build(this.normalizeInputs(n))
  }
  static normalizeInputs(n, t) {
    var i, s, a, l
    let e = Object.assign(
        {},
        (i = t == null ? void 0 : t.parameters) != null
          ? i
          : {
              width: 100,
              depth: 0,
              cornerRadius: [0, 0, 0, 0],
              cornerType: 1,
              extrudeBevelSize: 0,
              extrudeBevelSegments: 1,
            },
        n.parameters
      ),
      r = Object.assign(
        (s = t == null ? void 0 : t.ui) != null ? s : { enabledIndieCorners: !1 },
        n.ui
      )
    return {
      shape: n.shape && n.shape instanceof Pe ? n.shape : new Pe(),
      parameters: Object.assign(e, {
        width: Math.abs(e.width),
        height: Math.abs((a = e.height) != null ? a : e.width),
        depth: Math.abs((l = e.depth) != null ? l : 0),
      }),
      ui: r,
    }
  }
  static build(n) {
    let t = n.shape,
      {
        width: e,
        height: r,
        cornerRadius: o,
        cornerType: i,
        depth: s,
        extrudeBevelSize: a,
        extrudeBevelSegments: l,
      } = n.parameters,
      c = { x: e * 0.5, y: r * 0.5 },
      h = { x: -c.x, y: -c.y },
      p = { x: c.x, y: c.y }
    function u(N, v, k) {
      return v > e && k > r
        ? Math.min((N * e) / v, (N * r) / k)
        : v > e
        ? (N * e) / v
        : k > r
        ? (N * r) / k
        : N
    }
    let m = []
    ;(m[0] = o[0] === 0 ? 0 : u(o[0], o[0] + o[3], o[0] + o[1])),
      (m[1] = o[1] === 0 ? 0 : u(o[1], o[1] + o[2], o[1] + o[0])),
      (m[2] = o[2] === 0 ? 0 : u(o[2], o[2] + o[1], o[2] + o[3])),
      (m[3] = o[3] === 0 ? 0 : u(o[3], o[3] + o[0], o[3] + o[2]))
    let f = h.x,
      g = p.x,
      w = p.y,
      y = h.y
    t.addPoint(t.createPoint(f, w)),
      t.addPoint(t.createPoint(g, w)),
      t.addPoint(t.createPoint(g, y)),
      t.addPoint(t.createPoint(f, y)),
      (t.isClosed = !0)
    let b = !0
    for (let N = 0, v = t.points.length; N < v; N++)
      (t.points[N].roundness = m[N]), N > 0 && m[N] !== m[N - 1] && (b = !1)
    b && (t.roundness = m[0]), (t.useCubicForRoundedCorners = i !== 1), t.update()
    let A = ut.create({
      shape: t,
      parameters: { depth: s, extrudeBevelSize: a, extrudeBevelSegments: l },
    })
    return Object.assign(A, { userData: H(O({}, n), { type: 'RectangleGeometry' }) })
  }
}
import { SphereBufferGeometry as Av } from 'three'
var td = class {
  static create(n) {
    return this.build(this.normalizeInputs(n))
  }
  static normalizeInputs(n, t) {
    var r, o, i
    let e = Object.assign(
      {},
      (r = t == null ? void 0 : t.parameters) != null
        ? r
        : {
            width: 100,
            widthSegments: 64,
            heightSegments: 64,
            phiStart: 0,
            phiLength: 2 * Math.PI,
            thetaStart: 0,
            thetaLength: Math.PI,
          },
      n.parameters
    )
    return {
      parameters: Object.assign(e, {
        width: Math.abs(e.width),
        height: Math.abs((o = e.height) != null ? o : e.width),
        depth: Math.abs((i = e.depth) != null ? i : e.width),
      }),
    }
  }
  static build(n) {
    let {
        width: t = 100,
        height: e = t,
        depth: r = t,
        widthSegments: o = 64,
        heightSegments: i = 64,
        phiStart: s,
        phiLength: a,
        thetaStart: l,
        thetaLength: c,
      } = n.parameters,
      h = new Av(0.5 * t, o, i, s, a, l, c)
    return (
      h.scale(1, e / t, r / t),
      Object.assign(h, { userData: H(O({}, n), { type: 'SphereGeometry' }) })
    )
  }
}
import { PlaneBufferGeometry as Dv } from 'three'
var rd = class {
  static create(n) {
    return this.build(this.normalizeInputs(n))
  }
  static normalizeInputs(n, t) {
    var r, o
    let e = Object.assign(
      {},
      (r = t == null ? void 0 : t.parameters) != null
        ? r
        : { width: 100, depth: 0, widthSegments: 8, heightSegments: 8 },
      n.parameters
    )
    return {
      parameters: Object.assign(e, {
        width: Math.abs(e.width),
        height: Math.abs((o = e.height) != null ? o : e.width),
        depth: 0,
      }),
    }
  }
  static build(n) {
    let {
        width: t = 100,
        height: e = t,
        widthSegments: r = 8,
        heightSegments: o = 8,
      } = n.parameters,
      i = new Dv(t, e, r, o)
    return i.scale(1, 1, 1), Object.assign(i, { userData: H(O({}, n), { type: 'PlaneGeometry' }) })
  }
}
var od = class {
  static create(n) {
    return this.build(this.normalizeInputs(n))
  }
  static normalizeInputs(n, t) {
    var o, i, s
    let e = Object.assign(
      {},
      (o = t == null ? void 0 : t.parameters) != null
        ? o
        : {
            width: 100,
            depth: 0,
            innerRadiusPercent: 38.19,
            spikes: 5,
            cornerRadius: 0,
            angle: 360,
            extrudeBevelSize: 0,
            extrudeBevelSegments: 1,
          },
      n.parameters
    )
    return {
      shape: n.shape && n.shape instanceof Pe ? n.shape : new Pe(),
      parameters: Object.assign(e, {
        width: Math.abs(e.width),
        height: Math.abs((i = e.height) != null ? i : e.width),
        depth: Math.abs((s = e.depth) != null ? s : 0),
      }),
    }
  }
  static build(n) {
    let {
        width: t,
        height: e,
        innerRadiusPercent: r,
        spikes: o,
        cornerRadius: i,
        angle: s,
        depth: a,
        extrudeBevelSize: l,
        extrudeBevelSegments: c,
      } = n.parameters,
      h = n.shape,
      p = t * 0.5,
      u = e * 0.5,
      m = 0,
      f = 0,
      g = (s * Math.PI) / 360 / o,
      w = (Math.PI / 2) * 3 * -1,
      y = (p * r) / 100,
      b = (u * r) / 100
    if (o === 3 && r === 50) {
      g = (2 * Math.PI) / o
      for (let N = 0; N < o; N++) {
        let v = g * N,
          k = m + Math.sin(v) * p,
          L = f + Math.cos(v) * u
        h.addPoint(h.createPoint(k, L))
      }
    } else
      for (let N = 0; N < o; N++) {
        let v = m + Math.cos(w) * p,
          k = f + Math.sin(w) * u
        h.addPoint(h.createPoint(v, k)),
          (w += g),
          (v = m + Math.cos(w) * y),
          (k = f + Math.sin(w) * b),
          N <= o,
          h.addPoint(h.createPoint(v, k)),
          (w += g)
      }
    h.isClosed = !0
    for (let N = 0, v = h.points.length; N < v; N++) h.points[N].roundness = i
    ;(h.roundness = i), h.update()
    let A = ut.create({
      shape: h,
      parameters: { roundness: i, depth: a, extrudeBevelSize: l, extrudeBevelSegments: c },
    })
    return Object.assign(A, { userData: H(O({}, n), { type: 'StarGeometry' }) })
  }
}
import { PlaneBufferGeometry as Bv } from 'three'
var ra = class {
  static create(n) {
    return this.build(this.normalizeInputs(n))
  }
  static normalizeInputs(n, t) {
    var r, o, i
    let e = Object.assign(
      {},
      (r = t == null ? void 0 : t.parameters) != null ? r : { width: 100, depth: 0 },
      n.parameters
    )
    return {
      parameters: Object.assign(e, {
        width: Math.abs(e.width),
        height: Math.abs((o = e.height) != null ? o : e.width),
        depth: Math.abs((i = e.depth) != null ? i : 0),
      }),
    }
  }
  static build(n) {
    let { width: t, height: e } = n.parameters,
      r = new Bv(t, e)
    return Object.assign(r, { userData: H(O({}, n), { type: 'TextFrameGeometry' }) })
  }
}
var id = class {
  static create(n) {
    return this.build(this.normalizeInputs(n))
  }
  static normalizeInputs(n, t) {
    var s, a, l
    let e = Object.assign(
        {},
        (s = t == null ? void 0 : t.parameters) != null
          ? s
          : {
              width: 100,
              radialSegments: 32,
              tubularSegments: 64,
              arc: Math.PI * 2,
              cornerRadius: 30,
              cornerSegments: 8,
            },
        n.parameters
      ),
      r = Math.abs(e.width),
      o = Math.abs((a = e.height) != null ? a : e.width),
      i = Math.abs((l = e.depth) != null ? l : e.width * 0.25)
    return { parameters: Object.assign(e, { width: r, height: o, depth: i }) }
  }
  static build(n) {
    let {
        width: t,
        height: e,
        depth: r,
        radialSegments: o,
        tubularSegments: i,
        arc: s,
        cornerRadius: a,
        cornerSegments: l,
      } = n.parameters,
      c = Ev(t, e, r, t * 0.5, s, i, 0, 0, o, a, l)
    return (
      c.scale(1, e / t, 1), Object.assign(c, { userData: H(O({}, n), { type: 'TorusGeometry' }) })
    )
  }
}
function Ev(n, t, e, r, o, i, s, a, l, c, h) {
  return (
    ([t, e] = [e, t]),
    (s = t / 2),
    (o /= 2 * Math.PI),
    o == 1 && (c = 0),
    new nn(!0, n, t, e, r, o, i, s, a, l, c, h)
  )
}
import { TorusKnotBufferGeometry as _v } from 'three'
var nd = class {
  static create(n) {
    return this.build(this.normalizeInputs(n))
  }
  static normalizeInputs(n, t) {
    var r, o, i, s
    let e = Object.assign(
      {},
      (r = t == null ? void 0 : t.parameters) != null
        ? r
        : { width: 100, tubularSegments: 64, radialSegments: 32, p: 2, q: 3 },
      n.parameters
    )
    return {
      parameters: Object.assign(e, {
        width: Math.abs(e.width),
        height: Math.abs((o = e.height) != null ? o : e.width),
        depth: Math.abs((i = e.depth) != null ? i : e.width),
        tube: (s = e.tube) != null ? s : e.width * 0.125,
      }),
    }
  }
  static build(n) {
    let { width: t, tube: e, tubularSegments: r, radialSegments: o, p: i, q: s } = n.parameters,
      a = t * 0.5
    a !== e && (a -= e)
    let l = new _v(a, e, r, o, i, s)
    return Object.assign(l, { userData: H(O({}, n), { type: 'TorusKnotGeometry' }) })
  }
}
var sd = class {
  static create(n) {
    return this.build(this.normalizeInputs(n))
  }
  static normalizeInputs(n, t) {
    var o, i, s
    let e = Object.assign(
      {},
      (o = t == null ? void 0 : t.parameters) != null
        ? o
        : {
            width: 100,
            depth: 0,
            spikes: 5,
            cornerRadius: 0,
            extrudeBevelSize: 0,
            extrudeBevelSegments: 1,
            isRect: !1,
          },
      n.parameters
    )
    return {
      shape: n.shape && n.shape instanceof Pe ? n.shape : new Pe(),
      parameters: Object.assign(e, {
        width: Math.abs(e.width),
        height: Math.abs((i = e.height) != null ? i : e.width * (e.isRect ? 1 : Math.sqrt(3) / 2)),
        depth: Math.abs((s = e.depth) != null ? s : 0),
      }),
    }
  }
  static build(n) {
    let {
        width: t = 100,
        height: e,
        cornerRadius: r,
        depth: o,
        extrudeBevelSize: i,
        extrudeBevelSegments: s,
        isRect: a,
      } = n.parameters,
      l = n.shape,
      c = t * 0.5,
      h = e * 0.5
    a
      ? (l.addPoint(l.createPoint(-c, h)),
        l.addPoint(l.createPoint(c, -h)),
        l.addPoint(l.createPoint(-c, -h)))
      : (l.addPoint(l.createPoint(0, h)),
        l.addPoint(l.createPoint(c, -h)),
        l.addPoint(l.createPoint(-c, -h))),
      (l.isClosed = !0)
    for (let u = 0, m = l.points.length; u < m; u++) l.points[u].roundness = r
    ;(l.roundness = r), l.update()
    let p = ut.create({
      shape: l,
      parameters: { roundness: r, depth: o, extrudeBevelSize: i, extrudeBevelSegments: s },
    })
    return Object.assign(p, { userData: H(O({}, n), { type: 'TriangleGeometry' }) })
  }
}
var ln = {}
wc(ln, {
  addBarycentricAttribute: () => Vv,
  fixUvs: () => Uv,
  loadFromUrl: () => jv,
  resizeGeometry: () => Fv,
  roundShapePolygon: () => Rv,
})
import { BufferGeometryLoader as Gv, Float32BufferAttribute as zv, Vector3 as Gl } from 'three'
var ad = function (n, t) {
    let e = t.x - n.x,
      r = t.y - n.y,
      o = Math.sqrt(e * e + r * r),
      i = e / o,
      s = r / o,
      a = Math.atan2(s, i)
    return { x: e, y: r, len: o, nx: i, ny: s, ang: a }
  },
  Rv = (n, t, e) => {
    let r,
      o,
      i,
      s,
      a,
      l,
      c,
      h,
      p,
      u,
      m,
      f,
      g,
      w,
      y = t.length
    for (s = t[y - 2], n.curves = [], r = 1; r < y - 1; r++) {
      ;(a = t[r % y]), (l = t[(r + 1) % y])
      let b = ad(a, s),
        A = ad(a, l)
      ;(c = b.nx * A.ny - b.ny * A.nx),
        (h = b.nx * A.nx - b.ny * -A.ny),
        (m = Math.asin(c)),
        (p = 1),
        (u = !1),
        h < 0
          ? m < 0
            ? (m = Math.PI + m)
            : ((m = Math.PI - m), (p = -1), (u = !0))
          : m > 0 && ((p = -1), (u = !0)),
        (f = m / 2),
        (w = Math.abs((Math.cos(f) * e) / Math.sin(f))),
        w > Math.min(b.len / 2, A.len / 2)
          ? ((w = Math.min(b.len / 2, A.len / 2)), (g = Math.abs((w * Math.sin(f)) / Math.cos(f))))
          : (g = e),
        (o = a.x + A.nx * w),
        (i = a.y + A.ny * w),
        (o += -A.ny * g * p),
        (i += A.nx * g * p),
        n.absarc(o, i, g, b.ang + (Math.PI / 2) * p, A.ang - (Math.PI / 2) * p, u),
        (s = a),
        (a = l)
    }
    n.closePath()
  },
  Fv = (n, { width: t, height: e, depth: r }) => {
    ;(t = Math.abs(t)), (e = Math.abs(e)), (r = Math.abs(r))
    let o = n.userData.parameters,
      i,
      s,
      a
    t === 0 ? ((t = o.width), (i = 1)) : (i = t / o.width),
      e === 0 ? ((e = o.height), (s = 1)) : (s = e / o.height),
      r === 0 ? ((r = o.depth), (a = 1)) : (a = r / o.depth),
      n.scale(i, s, a),
      (o.width = t),
      (o.height = e),
      (o.depth = r)
  },
  Vv = (n, t) => {
    let e = [new Gl(1, 0, 0), new Gl(0, 1, 0), new Gl(0, 0, 1)],
      r = n.attributes.position,
      o = new Float32Array(r.count * 3)
    for (let i = 0, s = r.count; i < s; i++) e[i % 3].toArray(o, i * 3)
    n.setAttribute(t, new zv(o, 3))
  },
  jv = (n) =>
    new Promise((t) => {
      new Gv().load(n, (r) => t(r))
    }),
  Uv = (n, t, e) => {
    let r = n.getAttribute('uv')
    if (r)
      for (let o = 0; o < r.count; o++) {
        let i = r.getX(o),
          s = r.getY(o)
        r.setXY(o, (i + t / 2) / t, 1 - ((s - e / 2) / e) * -1)
      }
  }
import {
  BufferGeometry as Vd,
  BufferAttribute as jd,
  Uint32BufferAttribute as rc,
  Float32BufferAttribute as oc,
  Matrix4 as XS,
  Vector3 as wa,
} from 'three'
var kv,
  oa = new Promise((n) => {
    kv = n
  })
import { BufferGeometryLoader as YS } from 'three'
import { DoubleSide as qS, EventDispatcher as WS, Matrix3 as $S, Vector3 as tc } from 'three'
import { NormalBlending as pS, ShaderMaterial as uS, FrontSide as dS } from 'three'
import {
  CubeReflectionMapping as rS,
  CubeRefractionMapping as oS,
  CubeUVReflectionMapping as iS,
  LinearEncoding as ud,
  sRGBEncoding as nS,
} from 'three'
var cn = class {
  constructor(t) {
    ;(t = t != null ? t : {}),
      (this.name = t.name),
      (this.type = t.type),
      (this.node = t.node),
      (this.size = t.size),
      (this.needsUpdate = t.needsUpdate)
  }
  get value() {
    return this.node.value
  }
  set value(t) {
    this.node.value = t
  }
}
import { MathUtils as Hv } from 'three'
var pe = class {
  constructor(t) {
    this.hashProperties = void 0
    this.isNode = !0
    this.shortcuts = {}
    ;(this.uuid = Hv.generateUUID()), (this.type = t), (this.name = ''), (this.userData = {})
  }
  analyze(t, e) {
    ;(e = e != null ? e : {}),
      (t.analyzing = !0),
      this.build(t.addFlow(e.slot, e.cache, e.context), 'v4'),
      t.clearVertexNodeCode(),
      t.clearFragmentNodeCode(),
      t.removeFlow(),
      (t.analyzing = !1)
  }
  analyzeAndFlow(t, e, r) {
    return (r = r != null ? r : {}), this.analyze(t, r), this.flow(t, e, r)
  }
  flow(t, e, r) {
    ;(r = r != null ? r : {}), t.addFlow(r.slot, r.cache, r.context)
    let o = { result: this.build(t, e), code: t.clearNodeCode(), extra: t.context.extra }
    return t.removeFlow(), o
  }
  build(t, e, r) {
    e = e != null ? e : this.getType(t, e)
    let o = t.getNodeData(r != null ? r : this)
    return (
      t.analyzing && this.appendDepsNode(t, o, e),
      t.nodes.indexOf(this) === -1 && t.nodes.push(this),
      this.updateFrame !== void 0 && t.updaters.indexOf(this) === -1 && t.updaters.push(this),
      this.generate(t, e, r)
    )
  }
  updateFrame(t) {}
  generateReadonly(t, e, r, o, i, s) {
    return ''
  }
  generate(t, e, r, o, i) {
    return ''
  }
  parse(t, e, r, o) {}
  appendDepsNode(t, e, r) {
    e.deps = (e.deps || 0) + 1
    let o = t.getTypeLength(r)
    ;(o > (e.outputMax || 0) || this.getType(t, r)) && ((e.outputMax = o), (e.output = r))
  }
  setName(t) {
    this.name = t
  }
  getName() {
    return this.name
  }
  getType(t, e) {
    return e === 'sampler2D' || e === 'samplerCube' ? e : this.type
  }
  getJSONNode(t) {
    if (
      (t == null ? void 0 : t.materials) &&
      (t == null ? void 0 : t.materials[this.uuid]) !== void 0
    )
      return t.materials[this.uuid]
  }
  getHash() {
    let t = '{',
      e,
      r
    for (e in this) (r = this[e]), r instanceof pe && (t += '"' + e + '":' + r.getHash() + ',')
    if (this.hashProperties)
      for (let o = 0; o < this.hashProperties.length; o++)
        (e = this.hashProperties[o]), (r = this[e]), (t += '"' + e + '":"' + String(r) + '",')
    return (t += '"id":"' + this.uuid + '"}'), t
  }
  copy(t) {
    return (
      (this.name = t.name),
      t.type && (this.type = t.type),
      t.frameId && (this.frameId = t.frameId),
      t.hashProperties && (this.hashProperties = t.hashProperties.map((e) => e)),
      (this.userData = JSON.parse(JSON.stringify(t.userData))),
      (this.shortcuts = JSON.parse(JSON.stringify(t.shortcuts))),
      this
    )
  }
  clone() {
    return new this.constructor().copy(this)
  }
  createJSONNode(t) {
    let e = t === void 0 || typeof t == 'string'
    if (typeof this.type != 'string') throw new Error('Node does not allow serialization.')
    let r = {}
    return (
      (r.uuid = this.uuid),
      (r.type = this.type),
      this.name !== '' && (r.name = this.name),
      JSON.stringify(this.userData) !== '{}' && (r.userData = this.userData),
      !e && t && (t.nodes[this.uuid] = r),
      r
    )
  }
  toJSON(t) {
    var e
    return (e = this.getJSONNode(t)) != null ? e : this.createJSONNode(t)
  }
  fromJSON(t, e) {
    return (
      (this.uuid = t.uuid),
      (this.type = t.type),
      t.name && (this.name = t.name),
      t.userData && (this.userData = t.userData),
      this
    )
  }
}
var zl = class {
    constructor() {
      this.nodes = {}
      this.keywords = {}
    }
    add(t) {
      this.nodes[t.name] = t
    }
    addKeyword(t, e, r) {
      ;(r = r !== void 0 ? r : !0), (this.keywords[t] = { callback: e, cache: r })
    }
    remove(t) {
      delete this.nodes[t.name]
    }
    removeKeyword(t) {
      delete this.keywords[t]
    }
    get(t) {
      return this.nodes[t]
    }
    getKeyword(t, e) {
      return this.keywords[t].callback(e)
    }
    getKeywordData(t) {
      return this.keywords[t]
    }
    contains(t) {
      return this.nodes[t] !== void 0
    }
    containsKeyword(t) {
      return this.keywords[t] !== void 0
    }
  },
  nt = new zl()
import { Vector2 as ld } from 'three'
import { MathUtils as qv } from 'three'
var me = class extends pe {
  constructor(e, r) {
    super(e)
    this.scope = ''
    ;(r = r != null ? r : {}),
      (this.shared = r.shared !== void 0 ? r.shared : !0),
      (this.unique = r.unique !== void 0 ? r.unique : !1)
  }
  build(e, r, o, i) {
    if (((r = r != null ? r : this.getType(e)), this.getShared(e, r))) {
      let s = this.getUnique(e, r)
      s && this.uuid === void 0 && (this.uuid = qv.generateUUID()),
        (o = e.getUUID(o != null ? o : this.getUUID(), !s))
      let a = e.getNodeData(o),
        l = a.output || this.getType(e)
      if (e.analyzing)
        return (a.deps || 0) > 0 || this.getLabel()
          ? (this.appendDepsNode(e, a, r), this.generate(e, r, o))
          : super.build(e, r, o)
      if (s) return (a.name = a.name || super.build(e, r, o)), a.name
      if (!this.getLabel() && (!this.getShared(e, l) || e.context.ignoreCache || a.deps === 1))
        return super.build(e, r, o)
      o = this.getUUID(!1)
      let c = this.getTemp(e, o)
      if (c) return e.format(c, l, r)
      {
        c = super.generate(e, r, o, a.output, i)
        let h = this.generate(e, l, o)
        return e.addNodeCode(c + ' = ' + h + ';'), e.format(c, l, r)
      }
    }
    return super.build(e, r, o)
  }
  getShared(e, r) {
    return r !== 'sampler2D' && r !== 'samplerCube' && this.shared
  }
  getUnique(e, r) {
    return this.unique
  }
  setLabel(e) {
    return (this.label = e), this
  }
  getLabel() {
    return this.label
  }
  getUUID(e) {
    let r = this.uuid
    return typeof this.scope == 'string' && (r = this.scope + '-' + r), r
  }
  getTemp(e, r) {
    r = r || this.uuid
    let o = e.getVars()[r]
    return o ? o.name : void 0
  }
  generate(e, r, o, i, s) {
    return (
      this.getShared(e, r) || console.error('TempNode is not shared'),
      (o = o != null ? o : this.uuid),
      e.getTempVar(o, i != null ? i : this.getType(e), s, this.getLabel()).name
    )
  }
}
var Fe = class extends me {
  constructor(e, r) {
    ;(r = r != null ? r : {}), (r.shared = r.shared !== void 0 ? r.shared : !1)
    super(e, r)
    this.readonly = !1
  }
  setReadonly(e) {
    return (this.readonly = e), (this.hashProperties = this.readonly ? ['value'] : void 0), this
  }
  getReadonly() {
    return this.readonly
  }
  createJSONNode(e) {
    let r = super.createJSONNode(e)
    return this.readonly === !0 && (r.readonly = this.readonly), r
  }
  fromJSON(e, r) {
    return super.fromJSON(e, r), e.readonly !== void 0 && this.setReadonly(e.readonly), this
  }
  generate(e, r, o, i, s, a) {
    ;(o = e.getUUID(o != null ? o : this.getUUID())), (i = i != null ? i : this.getType(e))
    let l = e.getNodeData(o)
    return this.getReadonly() && this.generateReadonly !== void 0
      ? this.generateReadonly(e, r, o, i, s, a)
      : e.isShader('vertex')
      ? (l.vertex || (l.vertex = e.createVertexUniform(i, this, s, a, this.getLabel())),
        e.format(l.vertex.name, i, r))
      : (l.fragment || (l.fragment = e.createFragmentUniform(i, this, s, a, this.getLabel())),
        e.format(l.fragment.name, i, r))
  }
  copy(e) {
    return super.copy(e), (this.readonly = e.readonly), this
  }
}
var vt = class extends Fe {
  constructor(e = 0, r) {
    super('v2')
    this.nodeType = 'Vector2'
    this.value = e instanceof ld ? e : new ld(e, r)
  }
  get x() {
    return this.value.x
  }
  set x(e) {
    this.value.x = e
  }
  get y() {
    return this.value.y
  }
  set y(e) {
    this.value.y = e
  }
  generateReadonly(e, r, o, i, s, a) {
    return e.format('vec2(' + this.value.x + ', ' + this.value.y + ')', i, r)
  }
  copy(e) {
    return super.copy(e), this.value.copy(e.value), this
  }
}
import { Vector3 as cd } from 'three'
var St = class extends Fe {
  constructor(e = 0, r, o) {
    super('v3')
    this.nodeType = 'Vector3'
    this.value = e instanceof cd ? e : new cd(e, r, o)
  }
  get x() {
    return this.value.x
  }
  set x(e) {
    this.value.x = e
  }
  get y() {
    return this.value.y
  }
  set y(e) {
    this.value.y = e
  }
  get z() {
    return this.value.z
  }
  set z(e) {
    this.value.z = e
  }
  generateReadonly(e, r, o, i, s, a) {
    return e.format('vec3(' + this.value.x + ', ' + this.value.y + ', ' + this.value.z + ')', i, r)
  }
  copy(e) {
    return super.copy(e), this.value.copy(e.value), this
  }
}
import { Color as Wv } from 'three'
var Dt = class extends Wv {
  constructor(e, r, o, i) {
    super(e, r, o)
    this.isColorA = !0
    this.a = i
  }
  setRGBA(e, r, o, i) {
    super.setRGB(e, r, o), (this.a = i)
  }
  copy(e) {
    return super.copy(e), (this.a = 'a' in e ? e.a : 1), this
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b, this.a)
  }
  get x() {
    return this.r
  }
  get y() {
    return this.g
  }
  get z() {
    return this.b
  }
  get w() {
    return this.a
  }
  set x(e) {
    this.r = e
  }
  set y(e) {
    this.g = e
  }
  set z(e) {
    this.b = e
  }
  set w(e) {
    this.a = e
  }
}
var Er = class extends Fe {
  constructor(e) {
    super('v4')
    this.nodeType = 'Vector4'
    this.value = e instanceof Dt ? e : new Dt(e.r, e.g, e.b, e.a)
  }
  generateReadonly(e, r, o, i, s, a) {
    return e.format(
      'vec4(' +
        this.value.r +
        ', ' +
        this.value.g +
        ', ' +
        this.value.b +
        ', ' +
        this.value.a +
        ')',
      i,
      r
    )
  }
  copy(e) {
    return super.copy(e), this.value.copy(e.value), this
  }
}
var $v = /^\s*([a-z_0-9]+)\s([a-z_0-9]+)\s*\((.*?)\)/i,
  hd = /[a-z_0-9]+/gi,
  re = class extends me {
    constructor(e, r, o, i, s) {
      super(s)
      this.src = ''
      this.nodeType = 'Function'
      this.useKeywords = !0
      this.includes = []
      this.extensions = {}
      this.keywords = {}
      ;(this.isMethod = s === void 0), (this.isInterface = !1), this.parse(e, r, o, i)
    }
    getShared(e, r) {
      return !this.isMethod
    }
    getType(e) {
      return e.getTypeByFormat(this.type)
    }
    getInputByName(e) {
      if (this.inputs) {
        let r = this.inputs.length
        for (; r--; ) if (this.inputs[r].name === e) return this.inputs[r]
      }
    }
    getIncludeByName(e) {
      if (this.includes) {
        let r = this.includes.length
        for (; r--; ) if (this.includes[r].name === e) return this.includes[r]
      }
    }
    generate(e, r, o, i, s) {
      let a,
        l = 0,
        c = this.src
      if (this.includes)
        for (let p = 0; p < this.includes.length; p++) e.include(this.includes[p], this)
      for (let p in this.extensions) e.extensions[p] = !0
      let h = []
      for (; (a = hd.exec(this.src)); ) h.push(a)
      for (let p = 0; p < h.length; p++) {
        let u = h[p],
          m = u[0],
          f = this.isMethod ? !this.getInputByName(m) : !0,
          g = m
        if (this.keywords[m] || (this.useKeywords && f && nt.containsKeyword(m))) {
          let w = this.keywords[m]
          if (!w) {
            let y = nt.getKeywordData(m)
            y.cache && (w = e.keywords[m]),
              (w = w || nt.getKeyword(m, e)),
              y.cache && (e.keywords[m] = w)
          }
          g = w.build(e)
        }
        m !== g &&
          ((c = c.substring(0, u.index + l) + g + c.substring(u.index + m.length + l)),
          (l += g.length - m.length)),
          this.getIncludeByName(g) === void 0 && nt.contains(g) && e.include(nt.get(g))
      }
      return r === 'source'
        ? c
        : this.isMethod
        ? (this.isInterface || e.include(this, void 0, c), this.name)
        : e.format('( ' + c + ' )', this.getType(e), r)
    }
    parse(e, r, o, i) {
      if (
        ((this.src = e || ''),
        (this.includes = r != null ? r : []),
        (this.extensions = o != null ? o : {}),
        (this.keywords = i != null ? i : {}),
        this.isMethod)
      ) {
        let s = $v.exec(this.src)
        if (((this.inputs = []), s && s.length == 4)) {
          ;(this.type = s[1]), (this.name = s[2])
          let a = s[3].match(hd)
          if (a) {
            let l = 0
            for (; l < a.length; ) {
              let c = a[l++],
                h
              c === 'in' || c === 'out' || c === 'inout' ? (h = a[l++]) : ((h = c), (c = ''))
              let p = a[l++]
              this.inputs.push({ name: p, type: h, qualifier: c })
            }
          }
          this.isInterface = this.src.indexOf('{') === -1
        } else (this.type = ''), (this.name = '')
      }
    }
    copy(e) {
      return (
        super.copy(e),
        (this.isMethod = e.isMethod),
        (this.useKeywords = e.useKeywords),
        e.type !== void 0 && (this.type = e.type),
        this.parse(e.src, e.includes, e.extensions, e.keywords),
        this
      )
    }
    toJSON(e) {
      var o
      let r = this.getJSONNode(e)
      if (!r) {
        ;(r = this.createJSONNode(e)),
          (r.src = this.src),
          (r.isMethod = this.isMethod),
          (r.useKeywords = this.useKeywords),
          this.isMethod || (r.type = this.type),
          (r.extensions = JSON.parse(JSON.stringify(this.extensions)))
        let i = {}
        for (let s in this.keywords) i[s] = this.keywords[s].toJSON(e).uuid
        if (((r.keywords = i), (o = this.includes) != null && o.length)) {
          let s = []
          for (let a = 0; a < this.includes.length; a++) s.push(this.includes[a].toJSON(e).uuid)
          r.includes = s
        }
        ;(r.isMethod = this.isMethod), (r.inputs = this.inputs)
      }
      return (r.nodeType = this.nodeType), r
    }
    fromJSON(e, r) {
      if (
        (super.fromJSON(e, r),
        e.inputs !== void 0 && (this.inputs = e.inputs),
        e.isMethod !== void 0 && (this.isMethod = e.isMethod),
        e.src && (this.src = e.src),
        e.isMethod && (this.isMethod = e.isMethod),
        e.useKeywords && (this.useKeywords = e.useKeywords),
        e.type && (this.type = e.type),
        e.extensions && (this.extensions = e.extensions),
        e.keywords && r)
      ) {
        this.keywords = {}
        for (let o in e.keywords) this.keywords[o] = r.getNode(e.keywords[o])
      }
      return e.includes && r && (this.includes = e.includes.map((o) => r.getNode(o))), this
    }
  }
var Jv = /^([a-z_0-9]+)\s([a-z_0-9]+)\s?\=?\s?(.*?)(\;|$)/i,
  Rl = class extends me {
    constructor(e = '', r) {
      super()
      this.src = ''
      this.useDefine = !1
      this.nodeType = 'Const'
      this.parse(e || Rl.PI, void 0, void 0, void 0, r)
    }
    getType(e) {
      return e.getTypeByFormat(this.type)
    }
    parse(e, r, o, i, s) {
      this.src = e || ''
      let a,
        l,
        c = '',
        h = Jv.exec(e)
      ;(this.useDefine = s != null ? s : this.src.charAt(0) === '#'),
        h && h.length > 1 ? ((l = h[1]), (a = h[2]), (c = h[3])) : ((a = this.src), (l = 'f')),
        (this.name = a),
        (this.type = l),
        (this.value = c)
    }
    build(e, r) {
      if (r === 'source') {
        if (this.value)
          return this.useDefine
            ? '#define ' + this.name + ' ' + this.value
            : 'const ' + this.type + ' ' + this.name + ' = ' + this.value + ';'
        if (this.useDefine) return this.src
      }
      return e.include(this), e.format(this.name, this.getType(e), r)
    }
    generate(e, r, o, i, s) {
      return e.format(this.name, this.getType(e), r)
    }
    copy(e) {
      return super.copy(e), this.parse(e.src, void 0, void 0, void 0, e.useDefine), this
    }
  },
  Ne = Rl
;(Ne.PI = 'PI'),
  (Ne.PI2 = 'PI2'),
  (Ne.RECIPROCAL_PI = 'RECIPROCAL_PI'),
  (Ne.RECIPROCAL_PI2 = 'RECIPROCAL_PI2'),
  (Ne.LOG2 = 'LOG2'),
  (Ne.EPSILON = 'EPSILON')
var Yv = new RegExp(
    `^structs*([a-z_0-9]+)s*{s*((.|
)*?)}`,
    'gim'
  ),
  Kv = new RegExp('s*(w*?)s*(w*?)(=|;)', 'gim'),
  ci = class extends me {
    constructor(e = '') {
      super()
      this.inputs = []
      this.src = ''
      this.nodeType = 'Struct'
      this.parse(e)
    }
    getType(e) {
      return e.getTypeByFormat(this.name)
    }
    getInputByName(e) {
      let r = this.inputs.length
      for (; r--; ) if (this.inputs[r].name === e) return this.inputs[r]
    }
    generate(e, r, o, i, s) {
      return r === 'source' ? this.src + ';' : e.format('( ' + this.src + ' )', this.getType(e), r)
    }
    parse(e = '') {
      ;(this.src = e), (this.inputs = [])
      let r = Yv.exec(e)
      if (r) {
        let o = r[2],
          i
        for (; (i = Kv.exec(o)); ) this.inputs.push({ type: i[1], name: i[2] })
        this.name = r[1]
      } else this.name = ''
      this.type = this.name
    }
  }
var hi = class extends me {
  constructor(e) {
    super('v2', { shared: !1 })
    this.nodeType = 'UV'
    this.index = e != null ? e : 0
  }
  generate(e, r) {
    e.requires.uv[this.index] = !0
    let o = this.index > 0 ? this.index + 1 : '',
      i = e.isShader('vertex') ? 'uv' + o : 'vUv' + o
    return e.format(i, this.getType(e), r)
  }
  copy(e) {
    return super.copy(e), (this.index = e.index), this
  }
  toJSON(e) {
    let r = this.getJSONNode(e)
    return (
      r || ((r = this.createJSONNode(e)), (r.index = this.index)), (r.nodeType = this.nodeType), r
    )
  }
  fromJSON(e, r) {
    return super.fromJSON(e, r), e.index && (this.index = e.index), this
  }
}
nt.addKeyword('uv', function () {
  return new hi()
})
nt.addKeyword('uv2', function () {
  return new hi(1)
})
import { LinearEncoding as Xv, sRGBEncoding as Zv } from 'three'
var vo = class extends me {
    constructor(e = new pe(), r) {
      super('v4')
      this.nodeType = 'ColorSpace'
      this.factor = new pe()
      ;(this.input = e),
        (this.method = r != null ? r : vo.LINEAR_TO_LINEAR),
        (this.hashProperties = ['method'])
    }
    static getEncodingComponents(e) {
      switch (e) {
        case Xv:
          return ['Linear']
        case Zv:
          return ['sRGB']
        default:
          return []
      }
    }
    generate(e, r) {
      var l
      let o = this.input.build(e, 'v4'),
        i = this.getType(e),
        s = vo.Nodes[this.method],
        a = e.include(s)
      if (a === vo.LINEAR_TO_LINEAR) return e.format(o, i, r)
      if (((l = s.inputs) == null ? void 0 : l.length) === 2) {
        let c = this.factor.build(e, 'f')
        return e.format(a + '( ' + o + ', ' + c + ' )', i, r)
      } else return e.format(a + '( ' + o + ' )', i, r)
    }
    fromEncoding(e) {
      let r = vo.getEncodingComponents(e)
      ;(this.method = 'LinearTo' + r[0]), (this.factor = r[1])
    }
    fromDecoding(e) {
      let r = vo.getEncodingComponents(e)
      ;(this.method = r[0] + 'ToLinear'), (this.factor = r[1])
    }
    copy(e) {
      return (
        super.copy(e),
        this.input.copy(e.input),
        (this.method = e.method),
        this.factor.copy(e.factor),
        this
      )
    }
  },
  Nt = vo
;(Nt.Nodes = {
  LinearToLinear: new re(
    ['vec4 LinearToLinear( in vec4 value ) {', '	return value;', '}'].join(`
`)
  ),
  sRGBToLinear: new re(
    [
      'vec4 sRGBToLinear( in vec4 value ) {',
      '	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.w );',
      '}',
    ].join(`
`)
  ),
  LinearTosRGB: new re(
    [
      'vec4 LinearTosRGB( in vec4 value ) {',
      '	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.w );',
      '}',
    ].join(`
`)
  ),
}),
  (Nt.LINEAR_TO_LINEAR = 'LinearToLinear'),
  (Nt.SRGB_TO_LINEAR = 'sRGBToLinear'),
  (Nt.LINEAR_TO_SRGB = 'LinearTosRGB')
var Ee = class extends re {
  constructor(e = '', r, o, i, s) {
    super(e, s, i, o, r)
    this.nodeType = 'Expression'
  }
}
import { Texture as Qv } from 'three'
var yr = class extends Qv {
  toJSON(t) {
    let e = super.toJSON(t),
      r = t === void 0 || typeof t == 'string'
    if (this.image !== void 0 && !r) {
      let o = this.image
      if (Array.isArray(o)) {
        t.images[o.uuid].url = []
        for (let i = 0; i < o.length; i++) t.images[o.uuid].url[i] = pd(o[i])
      } else t.images[o.uuid].url = pd(o)
    }
    return e
  }
}
function pd(n) {
  return (typeof HTMLImageElement < 'u' && n instanceof HTMLImageElement) ||
    (typeof HTMLCanvasElement < 'u' && n instanceof HTMLCanvasElement) ||
    (typeof ImageBitmap < 'u' && n instanceof ImageBitmap)
    ? eS(n)
    : (console.warn('THREE.Texture: Unable to serialize Texture.'), '')
}
var pi
function eS(n) {
  if (/^data:/i.test(n.src)) return n.src
  let t
  if (n instanceof HTMLCanvasElement) t = n
  else {
    pi === void 0 && (pi = document.createElement('canvas')),
      (pi.width = n.width),
      (pi.height = n.height)
    let r = pi.getContext('2d')
    n instanceof ImageData ? r.putImageData(n, 0, 0) : r.drawImage(n, 0, 0, n.width, n.height),
      (t = pi)
  }
  let e = n.src.startsWith('blob:') ? n.fileName : n.src
  return /\.jpe?g$/i.test(e) ? t.toDataURL('image/jpeg', 0.6) : t.toDataURL('image/png')
}
var Mt = class extends Fe {
  constructor(e = new yr(), r, o, i) {
    super('v4', { shared: !0 })
    this.nodeType = 'Texture'
    ;(this.value = e),
      (this.uv = r != null ? r : new hi()),
      (this.bias = o),
      (this.project = i !== void 0 ? i : !1)
  }
  getTexture(e, r) {
    return super.generate(e, r, this.value.uuid, 't')
  }
  generate(e, r) {
    var p
    if (r === 'sampler2D') return this.getTexture(e, r)
    let o = this.getTexture(e, r),
      i = this.uv.build(e, this.project ? 'v4' : 'v2'),
      s = this.bias ? this.bias.build(e, 'f') : void 0
    s === void 0 && e.context.bias && (s = e.context.bias.setTexture(this).build(e, 'f'))
    let a, l
    this.project ? (a = 'texture2DProj') : (a = s ? 'tex2DBias' : 'tex2D'),
      s ? (l = a + '( ' + o + ', ' + i + ', ' + s + ' )') : (l = a + '( ' + o + ', ' + i + ' )')
    let c = { include: e.isShader('vertex'), ignoreCache: !0 },
      h = this.getType(e)
    return (
      e.addContext(c),
      (this.colorSpace = (p = this.colorSpace) != null ? p : new Nt(new Ee('', h))),
      this.colorSpace.fromDecoding(e.getTextureEncodingFromMap(this.value)),
      this.colorSpace.input.parse(l),
      (l = this.colorSpace.build(e, h)),
      e.removeContext(),
      e.format(l, h, r)
    )
  }
  copy(e) {
    return (
      super.copy(e),
      e.value.isRenderTargetTexture ? (this.value = e.value) : this.value.copy(e.value),
      this.uv.copy(e.uv),
      e.bias
        ? this.bias
          ? this.bias.copy(e.bias)
          : (this.bias = e.bias.clone())
        : (this.bias = void 0),
      e.colorSpace
        ? this.colorSpace
          ? this.colorSpace.copy(e.colorSpace)
          : (this.colorSpace = e.colorSpace.clone())
        : (this.colorSpace = void 0),
      (this.project = e.project),
      e.value.isRenderTargetTexture || (this.value.updateMatrix(), (this.value.needsUpdate = !0)),
      this
    )
  }
}
var te = class extends Fe {
  constructor(e) {
    super('f')
    this.nodeType = 'Float'
    this.value = e != null ? e : 0
  }
  generateReadonly(e, r, o, i, s, a) {
    return e.format(this.value + (this.value % 1 ? '' : '.0'), i, r)
  }
  copy(e) {
    return super.copy(e), (this.value = e.value), this
  }
}
var hn = class extends me {
  constructor(e, r) {
    super()
    this.inputs = []
    this.nodeType = 'FunctionCall'
    ;(this.value = e), (this.inputs = r != null ? r : [])
  }
  getFunction() {
    return this.value
  }
  getType(e) {
    return this.value.getType(e)
  }
  generate(e, r, o, i, s) {
    i = this.getType(e)
    let a = this.value,
      l = a.build(e, r) + '( ',
      c = []
    if (a.inputs) {
      for (let h = 0; h < a.inputs.length; h++) {
        let p = a.inputs[h],
          u = this.inputs[h] || this.inputs[p.name]
        c.push(u.build(e, e.getTypeByFormat(p.type)))
      }
      l += c.join(', ') + ' )'
    }
    return e.format(l, i, r)
  }
  copy(e) {
    return (
      super.copy(e), this.value.copy(e.value), (this.inputs = e.inputs.map((r) => r.clone())), this
    )
  }
  toJSON(e) {
    var o
    let r = this.getJSONNode(e)
    if (!r) {
      let i = this.value
      if (
        ((r = this.createJSONNode(e)),
        (r.value = this.value.toJSON(e).uuid),
        (o = i.inputs) != null && o.length)
      ) {
        r.inputs = {}
        for (let s = 0; s < i.inputs.length; s++) {
          let a = i.inputs[s],
            l = this.inputs[s]
          r.inputs[a.name] = l.toJSON(e).uuid
        }
      }
    }
    return r
  }
}
var Fl = class extends me {
    constructor(e = new pe(), r = new pe(), o = Fl.ADD) {
      super()
      this.nodeType = 'Operator'
      ;(this.type = e.type), (this.a = e), (this.b = r), (this.op = o)
    }
    getType(e) {
      let r = this.a.getType(e),
        o = this.b.getType(e)
      return e.isTypeMatrix(r) ? 'v4' : e.getTypeLength(o) > e.getTypeLength(r) ? o : r
    }
    generate(e, r) {
      let o = this.getType(e)
      this.type = o
      let i = this.a.build(e, o),
        s = this.b.build(e, o)
      return e.format('( ' + i + ' ' + this.op + ' ' + s + ' )', o, r)
    }
    copy(e) {
      return super.copy(e), this.a.copy(e.a), this.b.copy(e.b), (this.op = e.op), this
    }
  },
  Bt = Fl
;(Bt.ADD = '+'), (Bt.SUB = '-'), (Bt.MUL = '*'), (Bt.DIV = '/')
var Ae = class extends me {
    constructor(e = new pe(), r = Ae.ABS, o, i) {
      super()
      this.nodeType = 'Math'
      ;(this.a = e),
        typeof r != 'string' ? (this.b = r) : (i = r),
        typeof o != 'string' ? (this.c = o) : (i = o),
        (this.method = i),
        (this.hashProperties = ['method'])
    }
    getNumInputs(e) {
      switch (this.method) {
        case Ae.MIX:
        case Ae.CLAMP:
        case Ae.REFRACT:
        case Ae.SMOOTHSTEP:
        case Ae.FACEFORWARD:
          return 3
        case Ae.MIN:
        case Ae.MAX:
        case Ae.MOD:
        case Ae.STEP:
        case Ae.REFLECT:
        case Ae.DISTANCE:
        case Ae.DOT:
        case Ae.CROSS:
        case Ae.POW:
          return 2
        default:
          return 1
      }
    }
    getInputType(e) {
      let r = e.getTypeLength(this.a.getType(e)),
        o = this.b ? e.getTypeLength(this.b.getType(e)) : 0,
        i = this.c ? e.getTypeLength(this.c.getType(e)) : 0
      return r > o && r > i ? this.a.getType(e) : o > i ? this.b.getType(e) : this.c.getType(e)
    }
    getType(e) {
      switch (this.method) {
        case Ae.LENGTH:
        case Ae.DISTANCE:
        case Ae.DOT:
          return 'f'
        case Ae.CROSS:
          return 'v3'
      }
      return this.getInputType(e)
    }
    generate(e, r) {
      let o,
        i,
        s,
        a = this.a ? e.getTypeLength(this.a.getType(e)) : 0,
        l = this.b ? e.getTypeLength(this.b.getType(e)) : 0,
        c = this.c ? e.getTypeLength(this.c.getType(e)) : 0,
        h = this.getInputType(e),
        p = this.getType(e)
      switch (((this.type = p), this.method)) {
        case Ae.NEGATE:
          return e.format('( -' + this.a.build(e, h) + ' )', h, r)
        case Ae.INVERT:
          return e.format('( 1.0 - ' + this.a.build(e, h) + ' )', h, r)
        case Ae.CROSS:
          ;(o = this.a.build(e, 'v3')), (i = this.b.build(e, 'v3'))
          break
        case Ae.STEP:
          ;(o = this.a.build(e, a === 1 ? 'f' : h)), (i = this.b.build(e, h))
          break
        case Ae.MIN:
        case Ae.MAX:
        case Ae.MOD:
          ;(o = this.a.build(e, h)), (i = this.b.build(e, l === 1 ? 'f' : h))
          break
        case Ae.REFRACT:
          ;(o = this.a.build(e, h)), (i = this.b.build(e, h)), (s = this.c.build(e, 'f'))
          break
        case Ae.MIX:
          ;(o = this.a.build(e, h)),
            (i = this.b.build(e, h)),
            (s = this.c.build(e, c === 1 ? 'f' : h))
          break
        default:
          ;(o = this.a.build(e, h)),
            this.b && (i = this.b.build(e, h)),
            this.c && (s = this.c.build(e, h))
          break
      }
      let u = []
      u.push(o), i && u.push(i), s && u.push(s)
      let m = this.getNumInputs(e)
      if (u.length !== m)
        throw Error(
          `Arguments not match used in "${this.method}". Require ${m}, currently ${u.length}.`
        )
      return e.format(this.method + '( ' + u.join(', ') + ' )', p, r)
    }
    copy(e) {
      return (
        super.copy(e),
        this.a.copy(e.a),
        (this.b = e.b instanceof pe ? e.b.clone() : e.b),
        (this.c = e.c instanceof pe ? e.c.clone() : e.c),
        (this.method = e.method),
        this
      )
    }
  },
  ye = Ae
;(ye.RAD = 'radians'),
  (ye.DEG = 'degrees'),
  (ye.EXP = 'exp'),
  (ye.EXP2 = 'exp2'),
  (ye.LOG = 'log'),
  (ye.LOG2 = 'log2'),
  (ye.SQRT = 'sqrt'),
  (ye.INV_SQRT = 'inversesqrt'),
  (ye.FLOOR = 'floor'),
  (ye.CEIL = 'ceil'),
  (ye.NORMALIZE = 'normalize'),
  (ye.FRACT = 'fract'),
  (ye.SATURATE = 'saturate'),
  (ye.SIN = 'sin'),
  (ye.COS = 'cos'),
  (ye.TAN = 'tan'),
  (ye.ASIN = 'asin'),
  (ye.ACOS = 'acos'),
  (ye.ARCTAN = 'atan'),
  (ye.ABS = 'abs'),
  (ye.SIGN = 'sign'),
  (ye.LENGTH = 'length'),
  (ye.NEGATE = 'negate'),
  (ye.INVERT = 'invert'),
  (ye.MIN = 'min'),
  (ye.MAX = 'max'),
  (ye.MOD = 'mod'),
  (ye.STEP = 'step'),
  (ye.REFLECT = 'reflect'),
  (ye.DISTANCE = 'distance'),
  (ye.DOT = 'dot'),
  (ye.CROSS = 'cross'),
  (ye.POW = 'pow'),
  (ye.MIX = 'mix'),
  (ye.CLAMP = 'clamp'),
  (ye.REFRACT = 'refract'),
  (ye.SMOOTHSTEP = 'smoothstep'),
  (ye.FACEFORWARD = 'faceforward')
var ui = class extends me {
    constructor(e = new pe(), r = new pe(), o = new pe()) {
      super('v4')
      this.nodeType = 'TextureCubeUV'
      ;(this.value = e), (this.uv = r), (this.bias = o)
    }
    bilinearCubeUV(e, r, o, i) {
      var c, h, p, u
      let s = new hn(ui.Nodes.bilinearCubeUV, [r, o, i])
      ;(this.colorSpaceTL = (c = this.colorSpaceTL) != null ? c : new Nt(new Ee('', 'v4'))),
        this.colorSpaceTL.fromDecoding(e.getTextureEncodingFromMap(this.value.value)),
        this.colorSpaceTL.input.parse(s.build(e) + '.tl'),
        (this.colorSpaceTR = (h = this.colorSpaceTR) != null ? h : new Nt(new Ee('', 'v4'))),
        this.colorSpaceTR.fromDecoding(e.getTextureEncodingFromMap(this.value.value)),
        this.colorSpaceTR.input.parse(s.build(e) + '.tr'),
        (this.colorSpaceBL = (p = this.colorSpaceBL) != null ? p : new Nt(new Ee('', 'v4'))),
        this.colorSpaceBL.fromDecoding(e.getTextureEncodingFromMap(this.value.value)),
        this.colorSpaceBL.input.parse(s.build(e) + '.bl'),
        (this.colorSpaceBR = (u = this.colorSpaceBR) != null ? u : new Nt(new Ee('', 'v4'))),
        this.colorSpaceBR.fromDecoding(e.getTextureEncodingFromMap(this.value.value)),
        this.colorSpaceBR.input.parse(s.build(e) + '.br')
      let a = { include: e.isShader('vertex'), ignoreCache: !0 }
      e.addContext(a),
        (this.colorSpaceTLExp = new Ee(this.colorSpaceTL.build(e, 'v4'), 'v4')),
        (this.colorSpaceTRExp = new Ee(this.colorSpaceTR.build(e, 'v4'), 'v4')),
        (this.colorSpaceBLExp = new Ee(this.colorSpaceBL.build(e, 'v4'), 'v4')),
        (this.colorSpaceBRExp = new Ee(this.colorSpaceBR.build(e, 'v4'), 'v4')),
        e.removeContext()
      let l = new Ee(
        'mix( mix( cubeUV_TL, cubeUV_TR, cubeUV.f.x ), mix( cubeUV_BL, cubeUV_BR, cubeUV.f.x ), cubeUV.f.y )',
        'v4'
      )
      return (
        (l.keywords.cubeUV_TL = this.colorSpaceTLExp),
        (l.keywords.cubeUV_TR = this.colorSpaceTRExp),
        (l.keywords.cubeUV_BL = this.colorSpaceBLExp),
        (l.keywords.cubeUV_BR = this.colorSpaceBRExp),
        (l.keywords.cubeUV = s),
        l
      )
    }
    generate(e, r) {
      if (e.isShader('fragment')) {
        let o = this.uv,
          i = this.bias || e.context.roughness,
          s = new hn(ui.Nodes.roughnessToMip, [i]),
          a = new ye(s, ui.Nodes.m0, ui.Nodes.cubeUV_maxMipLevel, ye.CLAMP),
          l = new ye(a, ye.FLOOR),
          c = new ye(a, ye.FRACT),
          h = this.bilinearCubeUV(e, this.value, o, l),
          p = this.bilinearCubeUV(e, this.value, o, new Bt(l, new te(1).setReadonly(!0), Bt.ADD)),
          u = new ye(h, p, c, ye.MIX)
        return e.format(u.build(e), 'v4', r)
      } else
        return (
          console.warn('TextureCubeUVNode is not compatible with ' + e.shader + ' shader.'),
          e.format('vec4( 0.0 )', this.getType(e), r)
        )
    }
    copy(e) {
      return (
        super.copy(e),
        this.uv.copy(e.uv),
        this.bias.copy(e.bias),
        this.value.copy(e.value),
        e.colorSpaceTL
          ? this.colorSpaceTL
            ? this.colorSpaceTL.copy(e.colorSpaceTL)
            : (this.colorSpaceTL = e.colorSpaceTL.clone())
          : (this.colorSpaceTL = void 0),
        e.colorSpaceTR
          ? this.colorSpaceTR
            ? this.colorSpaceTR.copy(e.colorSpaceTR)
            : (this.colorSpaceTR = e.colorSpaceTR.clone())
          : (this.colorSpaceTR = void 0),
        e.colorSpaceBL
          ? this.colorSpaceBL
            ? this.colorSpaceBL.copy(e.colorSpaceBL)
            : (this.colorSpaceBL = e.colorSpaceBL.clone())
          : (this.colorSpaceBL = void 0),
        e.colorSpaceBR
          ? this.colorSpaceBR
            ? this.colorSpaceBR.copy(e.colorSpaceBR)
            : (this.colorSpaceBR = e.colorSpaceBR.clone())
          : (this.colorSpaceBR = void 0),
        e.colorSpaceTLExp
          ? this.colorSpaceTLExp
            ? this.colorSpaceTLExp.copy(e.colorSpaceTLExp)
            : (this.colorSpaceTLExp = e.colorSpaceTLExp.clone())
          : (this.colorSpaceTLExp = void 0),
        e.colorSpaceTRExp
          ? this.colorSpaceTRExp
            ? this.colorSpaceTRExp.copy(e.colorSpaceTRExp)
            : (this.colorSpaceTRExp = e.colorSpaceTRExp.clone())
          : (this.colorSpaceTRExp = void 0),
        e.colorSpaceBLExp
          ? this.colorSpaceBLExp
            ? this.colorSpaceBLExp.copy(e.colorSpaceBLExp)
            : (this.colorSpaceBLExp = e.colorSpaceBLExp.clone())
          : (this.colorSpaceBLExp = void 0),
        e.colorSpaceBRExp
          ? this.colorSpaceBRExp
            ? this.colorSpaceBRExp.copy(e.colorSpaceBRExp)
            : (this.colorSpaceBRExp = e.colorSpaceBRExp.clone())
          : (this.colorSpaceBRExp = void 0),
        this
      )
    }
  },
  di = ui
di.Nodes = (function () {
  let e = new ci(`struct TextureCubeUVData {
			vec4 tl;
			vec4 tr;
			vec4 br;
			vec4 bl;
			vec2 f;
		}`),
    r = new Ne('float cubeUV_maxMipLevel 8.0', !0),
    o = new Ne('float cubeUV_minMipLevel 4.0', !0),
    i = new Ne('float cubeUV_maxTileSize 256.0', !0),
    s = new Ne('float cubeUV_minTileSize 16.0', !0),
    a = new re(`float getFace(vec3 direction) {
				vec3 absDirection = abs(direction);
				float face = -1.0;
				if (absDirection.x > absDirection.z) {
					if (absDirection.x > absDirection.y)
						face = direction.x > 0.0 ? 0.0 : 3.0;
					else
						face = direction.y > 0.0 ? 1.0 : 4.0;
				} else {
					if (absDirection.z > absDirection.y)
						face = direction.z > 0.0 ? 2.0 : 5.0;
					else
						face = direction.y > 0.0 ? 1.0 : 4.0;
				}
				return face;
		}`)
  a.useKeywords = !1
  let l = new re(`vec2 getUV(vec3 direction, float face) {
				vec2 uv;
				if (face == 0.0) {
					uv = vec2(direction.z, direction.y) / abs(direction.x); // pos x
				} else if (face == 1.0) {
					uv = vec2(-direction.x, -direction.z) / abs(direction.y); // pos y
				} else if (face == 2.0) {
					uv = vec2(-direction.x, direction.y) / abs(direction.z); // pos z
				} else if (face == 3.0) {
					uv = vec2(-direction.z, direction.y) / abs(direction.x); // neg x
				} else if (face == 4.0) {
					uv = vec2(-direction.x, direction.z) / abs(direction.y); // neg y
				} else {
					uv = vec2(direction.x, direction.y) / abs(direction.z); // neg z
				}
				return 0.5 * (uv + 1.0);
		}`)
  l.useKeywords = !1
  let c = new re(
    `TextureCubeUVData bilinearCubeUV(sampler2D envMap, vec3 direction, float mipInt) {
			float face = getFace(direction);
			float filterInt = max(cubeUV_minMipLevel - mipInt, 0.0);
			mipInt = max(mipInt, cubeUV_minMipLevel);
			float faceSize = exp2(mipInt);
			float texelSize = 1.0 / (3.0 * cubeUV_maxTileSize);
			vec2 uv = getUV(direction, face) * (faceSize - 1.0);
			vec2 f = fract(uv);
			uv += 0.5 - f;
			if (face > 2.0) {
				uv.y += faceSize;
				face -= 3.0;
			}
			uv.x += face * faceSize;
			if(mipInt < cubeUV_maxMipLevel){
				uv.y += 2.0 * cubeUV_maxTileSize;
			}
			uv.y += filterInt * 2.0 * cubeUV_minTileSize;
			uv.x += 3.0 * max(0.0, cubeUV_maxTileSize - 2.0 * faceSize);
			uv *= texelSize;
			vec4 tl = texture2D(envMap, uv);
			uv.x += texelSize;
			vec4 tr = texture2D(envMap, uv);
			uv.y += texelSize;
			vec4 br = texture2D(envMap, uv);
			uv.x -= texelSize;
			vec4 bl = texture2D(envMap, uv);
			return TextureCubeUVData( tl, tr, br, bl, f );
		}`,
    [e, a, l, r, o, i, s]
  )
  c.useKeywords = !1
  let h = new Ne('float r0 1.0', !0),
    p = new Ne('float v0 0.339', !0),
    u = new Ne('float m0 -2.0', !0),
    m = new Ne('float r1 0.8', !0),
    f = new Ne('float v1 0.276', !0),
    g = new Ne('float m1 -1.0', !0),
    w = new Ne('float r4 0.4', !0),
    y = new Ne('float v4 0.046', !0),
    b = new Ne('float m4 2.0', !0),
    A = new Ne('float r5 0.305', !0),
    N = new Ne('float v5 0.016', !0),
    v = new Ne('float m5 3.0', !0),
    k = new Ne('float r6 0.21', !0),
    L = new Ne('float v6 0.0038', !0),
    d = new Ne('float m6 4.0', !0),
    I = [h, p, u, m, f, g, w, y, b, A, N, v, k, L, d],
    x = new re(
      `float roughnessToMip(float roughness) {
			float mip = 0.0;
			if (roughness >= r1) {
				mip = (r0 - roughness) * (m1 - m0) / (r0 - r1) + m0;
			} else if (roughness >= r4) {
				mip = (r1 - roughness) * (m4 - m1) / (r1 - r4) + m1;
			} else if (roughness >= r5) {
				mip = (r4 - roughness) * (m5 - m4) / (r4 - r5) + m4;
			} else if (roughness >= r6) {
				mip = (r5 - roughness) * (m6 - m5) / (r5 - r6) + m5;
			} else {
				mip = -2.0 * log2(1.16 * roughness);// 1.16 = 1.79^0.25
			}
			return mip;
		}`,
      I
    )
  return { bilinearCubeUV: c, roughnessToMip: x, m0: u, cubeUV_maxMipLevel: r }
})()
var So = class extends me {
    constructor(e) {
      super('v3')
      this.nodeType = 'Normal'
      this.scope = e != null ? e : So.VIEW
    }
    getShared() {
      return this.scope === So.WORLD
    }
    build(e, r, o, i) {
      let s = e.context[this.scope + 'Normal']
      return s ? s.build(e, r, o, i) : super.build(e, r, o)
    }
    generate(e, r, o, i, s) {
      let a
      switch (this.scope) {
        case So.VIEW:
          e.isShader('vertex') ? (a = 'transformedNormal') : (a = 'geometryNormal')
          break
        case So.LOCAL:
          e.isShader('vertex')
            ? (a = 'objectNormal')
            : ((e.requires.normal = !0), (a = 'vObjectNormal'))
          break
        case So.WORLD:
          e.isShader('vertex')
            ? (a = 'inverseTransformDirection( transformedNormal, viewMatrix ).xyz')
            : ((e.requires.worldNormal = !0), (a = 'vWNormal'))
          break
      }
      return e.format(a, this.getType(e), r)
    }
    copy(e) {
      return super.copy(e), (this.scope = e.scope), this
    }
    toJSON(e) {
      let r = this.getJSONNode(e)
      return (
        r || ((r = this.createJSONNode(e)), (r.scope = this.scope)), (r.nodeType = this.nodeType), r
      )
    }
    fromJSON(e, r) {
      return super.fromJSON(e, r), e.scope && (this.scope = e.scope), this
    }
  },
  ct = So
;(ct.LOCAL = 'local'), (ct.WORLD = 'world'), (ct.VIEW = 'view'), (ct.NORMAL = 'normal')
nt.addKeyword('viewNormal', function () {
  return new ct(ct.VIEW)
})
nt.addKeyword('localNormal', function () {
  return new ct(ct.NORMAL)
})
nt.addKeyword('worldNormal', function () {
  return new ct(ct.WORLD)
})
var gr = class extends me {
    constructor(e) {
      super('v3')
      this.nodeType = 'Position'
      this.scope = e != null ? e : gr.LOCAL
    }
    getType() {
      switch (this.scope) {
        case gr.PROJECTION:
          return 'v4'
      }
      return this.type
    }
    getShader() {
      switch (this.scope) {
        case gr.LOCAL:
        case gr.WORLD:
          return !1
      }
      return !0
    }
    generate(e, r, o, i, s) {
      let a
      switch (this.scope) {
        case gr.LOCAL:
          e.isShader('vertex')
            ? (a = 'transformed')
            : ((e.requires.position = !0), (a = 'vPosition'))
          break
        case gr.WORLD:
          if (e.isShader('vertex')) return '( modelMatrix * vec4( transformed, 1.0 ) ).xyz'
          ;(e.requires.worldPosition = !0), (a = 'vWPosition')
          break
        case gr.VIEW:
          a = e.isShader('vertex') ? '-mvPosition.xyz' : 'vViewPosition'
          break
        case gr.PROJECTION:
          a = e.isShader('vertex')
            ? '( projectionMatrix * modelViewMatrix * vec4( position, 1.0 ) )'
            : 'vec4( 0.0 )'
          break
      }
      return e.format(a, this.getType(), r)
    }
    copy(e) {
      return super.copy(e), (this.scope = e.scope), this
    }
    toJSON(e) {
      let r = this.getJSONNode(e)
      return (
        r || ((r = this.createJSONNode(e)), (r.scope = this.scope)), (r.nodeType = this.nodeType), r
      )
    }
    fromJSON(e, r) {
      return super.fromJSON(e, r), e.scope && (this.scope = e.scope), this
    }
  },
  dt = gr
;(dt.LOCAL = 'local'), (dt.WORLD = 'world'), (dt.VIEW = 'view'), (dt.PROJECTION = 'projection')
nt.addKeyword('position', function () {
  return new dt()
})
nt.addKeyword('worldPosition', function () {
  return new dt(dt.WORLD)
})
nt.addKeyword('viewPosition', function () {
  return new dt(dt.VIEW)
})
var rr = class extends me {
    constructor(e) {
      super('v3')
      this.nodeType = 'Reflect'
      this.scope = e != null ? e : rr.CUBE
    }
    getUnique(e) {
      return !e.context.viewNormal
    }
    getType() {
      switch (this.scope) {
        case rr.SPHERE:
          return 'v2'
      }
      return this.type
    }
    generate(e, r) {
      let o = this.getUnique(e)
      if (e.isShader('fragment')) {
        let i
        switch (this.scope) {
          case rr.VECTOR: {
            let s = new ct(ct.VIEW),
              a = e.context.roughness,
              l = s.build(e, 'v3'),
              c = new dt(dt.VIEW).build(e, 'v3'),
              h = a ? a.build(e, 'f') : void 0,
              p = `reflect( -normalize( ${c} ), ${l} )`
            h && (p = `normalize( mix( ${p}, ${l}, ${h} * ${h} ) )`)
            let u = `inverseTransformDirection( ${p}, viewMatrix )`
            o ? (e.addNodeCode(`vec3 reflectVec = ${u};`), (i = 'reflectVec')) : (i = u)
            break
          }
          case rr.CUBE: {
            let s = new rr(rr.VECTOR).build(e, 'v3'),
              a = 'vec3( -' + s + '.x, ' + s + '.yz )'
            o ? (e.addNodeCode(`vec3 reflectCubeVec = ${a};`), (i = 'reflectCubeVec')) : (i = a)
            break
          }
          case rr.SPHERE: {
            let s = new rr(rr.VECTOR).build(e, 'v3'),
              a =
                'normalize( ( viewMatrix * vec4( ' +
                s +
                ', 0.0 ) ).xyz + vec3( 0.0, 0.0, 1.0 ) ).xy * 0.5 + 0.5'
            o ? (e.addNodeCode(`vec2 reflectSphereVec = ${a};`), (i = 'reflectSphereVec')) : (i = a)
            break
          }
        }
        return e.format(i, this.getType(), r)
      } else
        return (
          console.warn('ReflectNode is not compatible with ' + e.shader + ' shader.'),
          e.format('vec3( 0.0 )', this.type, r)
        )
    }
    copy(e) {
      return super.copy(e), (this.scope = e.scope), this
    }
    toJSON(e) {
      let r = this.getJSONNode(e)
      return (
        r || ((r = this.createJSONNode(e)), (r.scope = this.scope)), (r.nodeType = this.nodeType), r
      )
    }
    fromJSON(e, r) {
      return super.fromJSON(e, r), e.scope && (this.scope = e.scope), this
    }
  },
  xr = rr
;(xr.CUBE = 'cube'), (xr.SPHERE = 'sphere'), (xr.VECTOR = 'vector')
var ia = class extends me {
  constructor(e = new Mt(), r, o) {
    super('v4')
    this.nodeType = 'TextureCube'
    ;(this.value = e),
      (this.radianceNode = new di(this.value, r != null ? r : new xr(xr.VECTOR), o)),
      (this.irradianceNode = new di(this.value, new ct(ct.WORLD), new te(1).setReadonly(!0)))
  }
  generate(e, r) {
    return e.isShader('fragment')
      ? (e.require('irradiance'),
        e.context.bias && e.context.bias.setTexture(this.value),
        (e.slot === 'irradiance' ? this.irradianceNode : this.radianceNode).build(e, r))
      : (console.warn('TextureCubeNode is not compatible with ' + e.shader + ' shader.'),
        e.format('vec4( 0.0 )', this.getType(e), r))
  }
  copy(e) {
    return (
      super.copy(e),
      this.value.copy(e.value),
      this.radianceNode.copy(e.radianceNode),
      this.irradianceNode.copy(e.irradianceNode),
      this
    )
  }
}
import { CubeTexture as tS } from 'three'
var na = class extends Fe {
  constructor(e = new tS(), r, o) {
    super('v4', { shared: !0 })
    this.nodeType = 'CubeTexture'
    ;(this.value = e), (this.uv = r != null ? r : new xr()), (this.bias = o)
  }
  getTexture(e, r) {
    return super.generate(e, r, this.value.uuid, 'tc')
  }
  generate(e, r) {
    var h, p
    if (r === 'samplerCube') return this.getTexture(e, r)
    let o = this.getTexture(e, r),
      i = (h = this.uv) == null ? void 0 : h.build(e, 'v3'),
      s = this.bias ? this.bias.build(e, 'f') : void 0
    s === void 0 && e.context.bias && (s = e.context.bias.setTexture(this).build(e, 'f'))
    let a
    s
      ? (a = 'texCubeBias( ' + o + ', ' + i + ', ' + s + ' )')
      : (a = 'texCube( ' + o + ', ' + i + ' )')
    let l = { include: e.isShader('vertex'), ignoreCache: !0 },
      c = this.getType(e)
    return (
      e.addContext(l),
      (this.colorSpace = (p = this.colorSpace) != null ? p : new Nt(new Ee('', c))),
      this.colorSpace.fromDecoding(e.getTextureEncodingFromMap(this.value)),
      this.colorSpace.input.parse(a),
      (a = this.colorSpace.build(e, c)),
      e.removeContext(),
      e.format(a, c, r)
    )
  }
  copy(e) {
    return (
      super.copy(e),
      this.value.copy(e.value),
      e.uv ? (this.uv ? this.uv.copy(e.uv) : (this.uv = e.uv.clone())) : (this.uv = void 0),
      e.bias
        ? this.bias
          ? this.bias.copy(e.bias)
          : (this.bias = e.bias.clone())
        : (this.bias = void 0),
      this
    )
  }
}
var dd = ['x', 'y', 'z', 'w'],
  sS = ['float', 'vec2', 'vec3', 'vec4'],
  aS = {
    float: 'f',
    vec2: 'v2',
    vec3: 'v3',
    vec4: 'v4',
    mat4: 'v4',
    int: 'i',
    bool: 'b',
    'float[]': 'f[]',
    'vec4[]': 'v4[]',
  },
  lS = {
    t: 'sampler2D',
    tc: 'samplerCube',
    b: 'bool',
    i: 'int',
    f: 'float',
    c: 'vec3',
    v2: 'vec2',
    v3: 'vec3',
    v4: 'vec4',
    m3: 'mat3',
    m4: 'mat4',
    'f[]': 'float[]',
    'v4[]': 'vec4[]',
  },
  sa = class {
    constructor() {
      this.includes = { consts: {}, functions: {}, structs: {} }
      this.cache = ''
      this.slot = ''
      this.shader = ''
      this.context = {}
      this.getIncludesCode = (function () {
        function t(e, r) {
          return e.deps.length - r.deps.length
        }
        return function (r, o) {
          let i = this.getIncludes(r, o)
          if (!i) return ''
          let s = ''
          i = i.sort(t)
          for (let a = 0; a < i.length; a++)
            i[a].src &&
              (s +=
                i[a].src +
                `
`)
          return s
        }
      })()
      ;(this.slots = []),
        (this.caches = []),
        (this.contexts = []),
        (this.keywords = {}),
        (this.nodeData = {}),
        (this.fragmentVariables = {}),
        (this.requires = {
          uv: [],
          color: [],
          lights: !1,
          fog: !1,
          transparent: !1,
          irradiance: !1,
          position: !1,
          worldPosition: !1,
          normal: !1,
          worldNormal: !1,
          vWorldViewDir: !1,
          modelMatrix: !1,
          viewMatrix: !1,
          projectionMatrix: !1,
        }),
        (this.includes = { consts: [], functions: [], structs: [] }),
        (this.attributes = {}),
        (this.prefixCode = [
          '#ifdef TEXTURE_LOD_EXT',
          '	#define texCube(a, b) textureCube(a, b)',
          '	#define texCubeBias(a, b, c) textureCubeLodEXT(a, b, c)',
          '	#define tex2D(a, b) texture2D(a, b)',
          '	#define tex2DBias(a, b, c) texture2DLodEXT(a, b, c)',
          '#else',
          '	#define texCube(a, b) textureCube(a, b)',
          '	#define texCubeBias(a, b, c) textureCube(a, b, c)',
          '	#define tex2D(a, b) texture2D(a, b)',
          '	#define tex2DBias(a, b, c) texture2D(a, b, c)',
          '#endif',
          `
			// NOTE: Include Spline's blending modes. This could be part of BlendNode
			#define SPE_BLENDING_NORMAL 0
			#define SPE_BLENDING_MULTIPLY 1
			#define SPE_BLENDING_SCREEN 2
			#define SPE_BLENDING_OVERLAY 3

			vec3 spe_normalBlend( vec3 a, vec3 b, float alpha ) {
				return mix( a, b, alpha );
			}

			vec3 spe_multiplyBlend( vec3 a, vec3 b, float alpha ) {
				return mix( a, a * b, alpha );
			}

			vec3 spe_screenBlend( vec3 a, vec3 b, float alpha ) {
				vec3 tmp = 1.0 - ( 1.0 - a ) * ( 1.0 - b );
				return mix( a, tmp, alpha );
			}

			vec3 spe_overlayBlend( vec3 a, vec3 b, float alpha ) {
				vec3 tmp = mix( 1. - 2. * (1. - a) * (1. - b), 2. * a * b, step( a, vec3(.5) ) );
				return clamp( mix( a, tmp, alpha ), 0.0, 1.0 );
			}

			vec3 spe_blend( vec3 a, vec3 b, float alpha, int mode ) {
				if ( mode == SPE_BLENDING_NORMAL ) return spe_normalBlend( a, b, alpha );
				else if ( mode == SPE_BLENDING_MULTIPLY ) return spe_multiplyBlend( a, b, alpha );
				else if ( mode == SPE_BLENDING_SCREEN ) return spe_screenBlend( a, b, alpha );
				else if ( mode == SPE_BLENDING_OVERLAY ) return spe_overlayBlend( a, b, alpha );
				return vec3( 1.0 );
			}
			`,
          '#include <packing>',
          '#include <common>',
        ].join(`
`)),
        (this.parsCode = {
          vertex: ['float neighbor_offset = 0.0001;', ''].join(`
`),
          fragment: [
            'float accumAlpha = 0.0;',
            `void accumulateAlpha(float alpha) {
					accumAlpha += (1.0 - accumAlpha) * alpha;
				}`,
            '',
          ].join(`
`),
        }),
        (this.code = { vertex: '', fragment: '' }),
        (this.nodeCode = { vertex: '', fragment: '' }),
        (this.resultCode = { vertex: '', fragment: '' }),
        (this.finalCode = { vertex: '', fragment: '' }),
        (this.inputs = {
          uniforms: { list: [], vertex: [], fragment: [] },
          arrayUniforms: { list: [], vertex: [], fragment: [] },
          vars: { varying: [], vertex: [], fragment: [] },
        }),
        (this.defines = {}),
        (this.uniforms = {}),
        (this.extensions = {
          derivatives: !1,
          fragDepth: !1,
          drawBuffers: !1,
          shaderTextureLOD: !1,
        }),
        (this.updaters = []),
        (this.nodes = []),
        (this.analyzing = !1)
    }
    build(t, e) {
      this.buildShader('vertex', t), this.buildShader('fragment', e)
      for (let r = 0; r < this.requires.uv.length; r++)
        if (this.requires.uv[r]) {
          let o = r > 0 ? r + 1 : ''
          this.addVaryCode('varying vec2 vUv' + o + ';'),
            r > 0 && this.addVertexParsCode('attribute vec2 uv' + o + ';'),
            this.addVertexFinalCode('vUv' + o + ' = uv' + o + ';')
        }
      return (
        this.requires.color[0] &&
          (this.addVaryCode('varying vec4 vColor;'),
          this.addVertexParsCode('attribute vec4 color;'),
          this.addVertexFinalCode('vColor = color;')),
        this.requires.color[1] &&
          (this.addVaryCode('varying vec4 vColor2;'),
          this.addVertexParsCode('attribute vec4 color2;'),
          this.addVertexFinalCode('vColor2 = color2;')),
        this.requires.position &&
          (this.addVaryCode('varying vec3 vPosition;'),
          this.addVertexFinalCode('vPosition = transformed;')),
        this.requires.worldPosition &&
          (this.addVaryCode('varying vec3 vWPosition;'),
          this.addVertexFinalCode('vWPosition = ( modelMatrix * vec4( transformed, 1.0 ) ).xyz;')),
        this.requires.normal &&
          (this.addVaryCode('varying vec3 vObjectNormal;'),
          this.addVertexFinalCode('vObjectNormal = normal;')),
        this.requires.modelMatrix && this.addFragmentParsCode('uniform mat4 modelMatrix;'),
        this.requires.viewMatrix && this.addFragmentParsCode('uniform mat4 viewMatrix;'),
        this.requires.projectionMatrix &&
          this.addFragmentParsCode('uniform mat4 projectionMatrix;'),
        this.requires.worldNormal &&
          (this.addVaryCode('varying vec3 vWNormal;'),
          this.addVertexFinalCode(
            'vWNormal = inverseTransformDirection( transformedNormal, viewMatrix ).xyz;'
          )),
        this.requires.vWorldViewDir &&
          (this.addVaryCode('varying vec3 vWorldViewDir;'),
          this.addVertexFinalCode(
            'vWorldViewDir = isPerspectiveMatrix( projectionMatrix ) ?  ( (modelMatrix * vec4(position, 1.0)).xyz - cameraPosition ) : vec3( -viewMatrix[0][2], -viewMatrix[1][2], -viewMatrix[2][2] );'
          )),
        this
      )
    }
    buildShader(t, e) {
      this.resultCode[t] = e.build(this.setShader(t), 'v4')
    }
    setMaterial(t, e) {
      return (
        (this.material = t),
        (this.renderer = e),
        (this.requires.lights = t.lights),
        (this.requires.fog = t.fog),
        this.mergeDefines(t.defines),
        this
      )
    }
    addFlow(t, e, r) {
      return this.addSlot(t).addCache(e).addContext(r)
    }
    removeFlow() {
      return this.removeSlot().removeCache().removeContext()
    }
    addCache(t) {
      return (this.cache = t != null ? t : ''), this.caches.push(this.cache), this
    }
    removeCache() {
      return this.caches.pop(), (this.cache = this.caches[this.caches.length - 1] || ''), this
    }
    addContext(t) {
      return (
        (this.context = Object.assign({}, this.context, t)),
        (this.context.extra = this.context.extra || {}),
        this.contexts.push(this.context),
        this
      )
    }
    removeContext() {
      return (
        this.contexts.pop(), (this.context = this.contexts[this.contexts.length - 1] || {}), this
      )
    }
    addSlot(t) {
      return (this.slot = t || ''), this.slots.push(this.slot), this
    }
    removeSlot() {
      return this.slots.pop(), (this.slot = this.slots[this.slots.length - 1] || ''), this
    }
    addFragmentVariable(t, e) {
      this.fragmentVariables[t] === void 0 &&
        (this.addFragmentCode(`${e} ${t};`), (this.fragmentVariables[t] = ''))
    }
    addVertexCode(t) {
      this.addCode(t, 'vertex')
    }
    addFragmentCode(t) {
      this.addCode(t, 'fragment')
    }
    addCode(t, e) {
      this.code[e != null ? e : this.shader] +=
        t +
        `
`
    }
    addVertexNodeCode(t) {
      this.addNodeCode(t, 'vertex')
    }
    addFragmentNodeCode(t) {
      this.addNodeCode(t, 'fragment')
    }
    addNodeCode(t, e) {
      this.nodeCode[e != null ? e : this.shader] +=
        t +
        `
`
    }
    clearNodeCode(t) {
      t = t != null ? t : this.shader
      let e = this.nodeCode[t]
      return (this.nodeCode[t] = ''), e
    }
    clearVertexNodeCode() {
      return this.clearNodeCode('vertex')
    }
    clearFragmentNodeCode() {
      return this.clearNodeCode('fragment')
    }
    addVertexFinalCode(t) {
      this.addFinalCode(t, 'vertex')
    }
    addFragmentFinalCode(t) {
      this.addFinalCode(t, 'fragment')
    }
    addFinalCode(t, e) {
      this.finalCode[e != null ? e : this.shader] +=
        t +
        `
`
    }
    addVertexParsCode(t) {
      this.addParsCode(t, 'vertex')
    }
    addFragmentParsCode(t) {
      this.addParsCode(t, 'fragment')
    }
    addParsCode(t, e) {
      this.parsCode[e != null ? e : this.shader] +=
        t +
        `
`
    }
    addVaryCode(t) {
      this.addVertexParsCode(t), this.addFragmentParsCode(t)
    }
    isCache(t) {
      return this.caches.indexOf(t) !== -1
    }
    isSlot(t) {
      return this.slots.indexOf(t) !== -1
    }
    define(t, e) {
      this.defines[t] = e === void 0 ? 1 : e
    }
    require(t) {
      this.requires[t] = !0
    }
    isDefined(t) {
      return this.defines[t] !== void 0
    }
    getVar(t, e, r, o = 'varying', i = 'V', s = '') {
      let a = this.getVars(o),
        l = a[t]
      if (!l) {
        let c = a.length
        ;(l = { name: r || 'node' + i + c + (s ? '_' + s : ''), type: e }), a.push(l), (a[t] = l)
      }
      return l
    }
    getTempVar(t, e, r, o) {
      return this.getVar(t, e, r, this.shader, 'T', o)
    }
    getAttribute(t, e) {
      if (!this.attributes[t]) {
        let r = this.getVar(t, e)
        this.addVertexParsCode('attribute ' + e + ' ' + t + ';'),
          this.addVertexFinalCode(r.name + ' = ' + t + ';'),
          (this.attributes[t] = { varying: r, name: t, type: e })
      }
      return this.attributes[t]
    }
    getCode(t) {
      return [
        this.prefixCode,
        this.parsCode[t],
        this.getVarListCode(this.getVars('varying'), 'varying'),
        this.getVarListCode(this.inputs.uniforms[t], 'uniform'),
        this.getVarListCode(this.inputs.arrayUniforms[t], 'uniform'),
        this.getIncludesCode('consts', t),
        this.getIncludesCode('structs', t),
        this.getIncludesCode('functions', t),
        'void main() {',
        this.getVarListCode(this.getVars(t)),
        this.code[t],
        this.resultCode[t],
        this.finalCode[t],
        '}',
      ].join(`
`)
    }
    getVarListCode(t, e) {
      e = e != null ? e : ''
      let r = ''
      for (let o = 0, i = t.length; o < i; ++o) {
        let s = t[o],
          a = s.type,
          l = s.name,
          c = s.size,
          h = this.getFormatByType(a)
        if (h === void 0) throw new Error('Node pars ' + h + ' not found.')
        h.includes('[]')
          ? (r +=
              e +
              ' ' +
              h.substring(0, h.length - 2) +
              ' ' +
              l +
              `[${c}];
`)
          : (r +=
              e +
              ' ' +
              h +
              ' ' +
              l +
              `;
`)
      }
      return r
    }
    getVars(t) {
      return this.inputs.vars[t != null ? t : this.shader]
    }
    getNodeData(t) {
      let e = t instanceof pe ? t.uuid : t
      return (this.nodeData[e] = this.nodeData[e] || {})
    }
    createUniform(t, e, r, o, i, s) {
      if (e.includes('[]')) {
        let a = this.inputs.arrayUniforms,
          l = a.list.length,
          c = new cn({
            type: e,
            size: r.size,
            name: o || 'nodeUA' + l + (s ? '_' + s : ''),
            node: r,
            needsUpdate: i,
          })
        return a.list.push(c), a[t].push(c), (a[t][c.name] = c), (this.uniforms[c.name] = c), c
      } else {
        let a = this.inputs.uniforms,
          l = a.list.length,
          c = new cn({
            type: e,
            name: o || 'nodeU' + l + (s ? '_' + s : ''),
            node: r,
            needsUpdate: i,
          })
        return a.list.push(c), a[t].push(c), (a[t][c.name] = c), (this.uniforms[c.name] = c), c
      }
    }
    createVertexUniform(t, e, r, o, i) {
      return this.createUniform('vertex', t, e, r, o, i)
    }
    createFragmentUniform(t, e, r, o, i) {
      return this.createUniform('fragment', t, e, r, o, i)
    }
    include(t, e, r) {
      var s
      let o
      if (((t = typeof t == 'string' ? nt.get(t) : t), this.context.include === !1)) return t.name
      t instanceof re
        ? (o = this.includes.functions)
        : t instanceof Ne
        ? (o = this.includes.consts)
        : t instanceof ci && (o = this.includes.structs)
      let i = (o[this.shader] = o[this.shader] || [])
      if (t) {
        let a = i[t.name]
        if (
          (a ||
            ((a = i[t.name] = { node: t, deps: [] }), i.push(a), (a.src = t.build(this, 'source'))),
          t instanceof re &&
            e &&
            i[e.name] &&
            i[e.name].deps.indexOf(t) === -1 &&
            (i[e.name].deps.push(t), (s = t.includes) != null && s.length))
        ) {
          let l = 0
          do this.include(t.includes[l++], e)
          while (l < t.includes.length)
        }
        return r && (a.src = r), t.name
      } else throw new Error('Include not found.')
    }
    colorToVectorProperties(t) {
      return t.replace('r', 'x').replace('g', 'y').replace('b', 'z').replace('a', 'w')
    }
    colorToVector(t) {
      return t.replace(/c/g, 'v3')
    }
    getIncludes(t, e) {
      return this.includes[t][e || this.shader]
    }
    getConstructorFromLength(t) {
      return sS[t - 1]
    }
    isTypeMatrix(t) {
      return /^m/.test(t)
    }
    getTypeLength(t) {
      return t === 'f' ? 1 : parseInt(this.colorToVector(t).substr(1))
    }
    getTypeFromLength(t) {
      return t === 1 ? 'f' : 'v' + t
    }
    findNode(...t) {
      for (let e = 0; e < arguments.length; e++) {
        let r = t[e]
        if (r != null && r.isNode) return r
      }
    }
    resolve(...t) {
      for (let e = 0; e < arguments.length; e++) {
        let r = t[e]
        if (r !== void 0) {
          if (r.isNode) return r
          if (r.isTexture)
            switch (r.mapping) {
              case rS:
              case oS:
                return new na(r)
              case iS:
                return new ia(new Mt(r))
              default:
                return new Mt(r)
            }
          else {
            if (r.isVector2) return new vt(r)
            if (r.isVector3) return new St(r)
            if (r.isVector4) return new Er(r)
          }
        }
      }
    }
    format(t, e, r) {
      switch (this.colorToVector(r + ' <- ' + e)) {
        case 'f <- v2':
          return t + '.x'
        case 'f <- v3':
          return t + '.x'
        case 'f <- v4':
          return t + '.x'
        case 'f <- i':
        case 'f <- b':
          return 'float( ' + t + ' )'
        case 'v2 <- f':
          return 'vec2( ' + t + ' )'
        case 'v2 <- v3':
          return t + '.xy'
        case 'v2 <- v4':
          return t + '.xy'
        case 'v2 <- i':
        case 'v2 <- b':
          return 'vec2( float( ' + t + ' ) )'
        case 'v3 <- f':
          return 'vec3( ' + t + ' )'
        case 'v3 <- v2':
          return 'vec3( ' + t + ', 0.0 )'
        case 'v3 <- v4':
          return t + '.xyz'
        case 'v3 <- i':
        case 'v3 <- b':
          return 'vec2( float( ' + t + ' ) )'
        case 'v4 <- f':
          return 'vec4( ' + t + ' )'
        case 'v4 <- v2':
          return 'vec4( ' + t + ', 0.0, 1.0 )'
        case 'v4 <- v3':
          return 'vec4( ' + t + ', 1.0 )'
        case 'v4 <- i':
        case 'v4 <- b':
          return 'vec4( float( ' + t + ' ) )'
        case 'i <- f':
        case 'i <- b':
          return 'int( ' + t + ' )'
        case 'i <- v2':
          return 'int( ' + t + '.x )'
        case 'i <- v3':
          return 'int( ' + t + '.x )'
        case 'i <- v4':
          return 'int( ' + t + '.x )'
        case 'b <- f':
          return '( ' + t + ' != 0.0 )'
        case 'b <- v2':
          return '( ' + t + ' != vec2( 0.0 ) )'
        case 'b <- v3':
          return '( ' + t + ' != vec3( 0.0 ) )'
        case 'b <- v4':
          return '( ' + t + ' != vec4( 0.0 ) )'
        case 'b <- i':
          return '( ' + t + ' != 0 )'
      }
      return t
    }
    getTypeByFormat(t) {
      return aS[t] || t
    }
    getFormatByType(t) {
      return lS[t] || t
    }
    getUUID(t, e) {
      return (e = e !== void 0 ? e : !0), e && this.cache && (t = this.cache + '-' + t), t
    }
    getElementByIndex(t) {
      return dd[t]
    }
    getIndexByElement(t) {
      return dd.indexOf(t)
    }
    isShader(t) {
      return this.shader === t
    }
    setShader(t) {
      return (this.shader = t), this
    }
    mergeDefines(t) {
      for (let e in t) this.defines[e] = t[e]
      return this.defines
    }
    mergeUniform(t) {
      for (let e in t) this.uniforms[e] = t[e]
      return this.uniforms
    }
    getTextureEncodingFromMap(t) {
      let e
      return (
        t ? t.isTexture && (e = t.encoding) : (e = ud),
        e === ud && this.context.gamma && (e = nS),
        e
      )
    }
  }
var pn = class extends pe {
  constructor(e = new pe()) {
    super('v4')
    this.nodeType = 'Raw'
    this.value = e
  }
  generate(e) {
    let r = this.value.analyzeAndFlow(e, this.type),
      o =
        r.code +
        `
`
    return (
      e.isShader('vertex')
        ? (o += 'gl_Position = ' + r.result + ';')
        : (o += 'gl_FragColor = ' + r.result + ';'),
      o
    )
  }
  copy(e) {
    return super.copy(e), this.value.copy(e.value), this
  }
}
var _e = class extends Fe {
  constructor(e = 0, r, o, i) {
    super('c')
    this.nodeType = 'Color'
    this.value = e instanceof Dt ? e : new Dt(e || 0, r, o, i)
  }
  setRGBA(e) {
    this.value.setRGBA(e.r, e.g, e.b, e.a)
  }
  generate(e, r, o, i, s, a) {
    ;(o = e.getUUID(o != null ? o : this.getUUID())), (i = i != null ? i : this.getType(e))
    let l = e.getNodeData(o),
      c = this.getReadonly() && this.generateReadonly !== void 0
    if (this.alpha) {
      let h = this.alpha.build(e, 'f')
      e.addFragmentNodeCode(`accumAlpha += ( 1.0 - accumAlpha ) * ${h};`)
    }
    return c
      ? this.generateReadonly(e, r, o, i, s, a)
      : e.isShader('vertex')
      ? (l.vertex || (l.vertex = e.createVertexUniform(i, this, s, a, this.getLabel())),
        e.format(l.vertex.name, i, r))
      : (l.fragment || (l.fragment = e.createFragmentUniform(i, this, s, a, this.getLabel())),
        e.format(l.fragment.name, i, r))
  }
  generateReadonly(e, r, o, i, s, a) {
    return e.format('vec3(' + this.value.r + ', ' + this.value.g + ', ' + this.value.b + ')', i, r)
  }
}
import { MathUtils as _r, Vector2 as Qr, Vector3 as eo, Vector4 as aa } from 'three'
import { Texture as cS } from 'three'
var be = class extends Fe {
  constructor(e) {
    super('i')
    this.nodeType = 'Int'
    this.value = Math.floor(e != null ? e : 0)
  }
  generateReadonly(e, r, o, i, s, a) {
    return e.format(this.value.toString(), i, r)
  }
  copy(e) {
    return super.copy(e), (this.value = e.value), this
  }
}
var We = class {
  constructor(t, e, r, o) {
    this.next = void 0
    this.uniforms = {}
    this.textures = {}
    this.defines = {}
    if (((this.id = t), (this.uuid = e), r)) {
      this.type = r.type
      for (let i in r) i !== 'type' && i !== 'calpha' && (this.uniforms[`f${this.id}_${i}`] = r[i])
      for (let i in o) this.defines[i] = o[i]
    }
  }
  copy(t) {
    ;(this.id = t.id), (this.type = t.type), (this.defines = O({}, t.defines))
    for (let e in t.uniforms)
      this.getName(e) === 'transmissionSamplerMap' ||
        this.getName(e) === 'transmissionDepthMap' ||
        (this.uniforms[e]
          ? this.uniforms[e].copy(t.uniforms[e])
          : (this.uniforms[e] = t.uniforms[e].clone()))
    return this
  }
  clone() {
    return new We(this.id).copy(this)
  }
  fromJSON(t, e) {
    ;(this.id = t.id), (this.defines = O({}, t.defines))
    for (let r in t.uniforms) this.uniforms[r] = e.getNode(t.uniforms[r])
    if (t.type === 'texture') {
      if (!(`f${this.id}_textureSize` in this.uniforms)) {
        let r = this.uniforms[`f${this.id}_texture`].value.image
        this.uniforms[`f${t.id}_textureSize`] = new St(r.width, r.height)
      }
      ;`f${this.id}_size` in this.uniforms || (this.uniforms[`f${t.id}_size`] = new vt(200, 200)),
        `f${t.id}_axis` in this.uniforms || (this.uniforms[`f${t.id}_axis`] = new be(0)),
        `f${t.id}_side` in this.uniforms || (this.uniforms[`f${t.id}_side`] = new be(0)),
        `f${t.id}_projection` in this.uniforms || (this.uniforms[`f${t.id}_projection`] = new be(0))
    } else
      t.type === 'noise'
        ? (`f${t.id}_noiseType` in this.uniforms ||
            (this.uniforms[`f${t.id}_noiseType`] = new be(0)),
          `f${t.id}_size` in this.uniforms || (this.uniforms[`f${t.id}_size`] = new St(-1, -1, -1)))
        : t.type === 'depth' &&
          (`f${t.id}_isWorldSpace` in this.uniforms ||
            (this.uniforms[`f${t.id}_isWorldSpace`] = new te(1)))
    return this
  }
  toJSON(t) {
    let e = {}
    for (let o in this.uniforms) e[o] = this.uniforms[o].toJSON(t).uuid
    return {
      id: this.id,
      type: this.type,
      defines: JSON.parse(JSON.stringify(this.defines)),
      uniforms: e,
      next: this.next == null ? void 0 : this.next.toJSON(t),
    }
  }
  copyUniforms(t) {
    for (let e in this.uniforms) {
      let r = this.getName(e)
      r !== void 0 &&
        t.uniforms[`f${t.id}_${r}`] &&
        r !== 'transmissionDepthMap' &&
        r !== 'transmissionSamplerMap' &&
        this.uniforms[e].copy(t.uniforms[`f${t.id}_${r}`])
    }
    return this
  }
  hasValueByKey(t) {
    return this.uniforms[t] !== void 0
  }
  hasValue(t) {
    return this.hasValueByKey(`f${this.id}_${t}`)
  }
  setValue(t, e) {
    let r = `f${this.id}_${t}`
    this.hasValueByKey(r) && e !== void 0 && (this.uniforms[r].value = e)
  }
  getValue(t) {
    let e = `f${this.id}_${t}`
    if (this.hasValueByKey(e)) return this.uniforms[e].value
  }
  getValues() {
    let t = { type: this.type }
    for (let e in this.uniforms) {
      let r = this.getName(e)
      if (r === void 0) continue
      let i = this.uniforms[`f${this.id}_${r}`].value
      i !== void 0 &&
        (Array.isArray(i)
          ? (t[r] = i.map((s) => (s.clone ? s.clone() : s)))
          : (t[r] = i.clone ? i.clone() : i))
    }
    return t
  }
  getName(t) {
    let r = /f\d+_(.*)/.exec(t)
    if (r && r.length > 1) return r[1]
    console.log(`Layer.getName: error ${t}`)
  }
  getNames() {
    let t = []
    for (let e in this.uniforms) {
      let r = this.getName(e)
      r && t.push(r)
    }
    return t
  }
  isEqual(t) {
    for (let e in t.uniforms) {
      let r = t.getName(e)
      if (!r) return !1
      let o = this.getValue(r),
        i = t.uniforms[e].value
      if (i.value instanceof cS) {
        if (o.image !== i.image) return !1
      } else if (Array.isArray(i)) {
        let s = o
        for (let a = 0, l = s.length; a < l; ++a) if (s[a] !== i[a]) return !1
      } else {
        let s = o
        if (s.equals) {
          if (!s.equals(i)) return !1
        } else if (o !== i) return !1
      }
    }
    return !0
  }
  dispose() {}
}
function md(n) {
  let t = n instanceof We ? n.type : n
  return t === 'texture' || t === 'displace_map' || t === 'matcap'
}
var un = class extends Fe {
  constructor(e) {
    super('b')
    this.nodeType = 'Bool'
    this.value = e != null ? e : !1
  }
  generateReadonly(e, r, o, i) {
    return e.format(this.value ? 'true' : 'false', i, r)
  }
  copy(e) {
    return super.copy(e), (this.value = e.value), this
  }
}
import { Vector4 as fd } from 'three'
var wo = class extends Fe {
  constructor(e = 1, r) {
    super('v4[]')
    this.nodeType = 'Vector4Array'
    ;(this.size = e),
      (this.value = Array.isArray(r)
        ? r
        : r instanceof fd
        ? new Array(e).fill(r)
        : new Array(e).fill(new fd(0)))
  }
  copy(e) {
    return super.copy(e), (this.value = e.value.map((r) => r.clone())), this
  }
}
var Lo = class extends Fe {
  constructor(e = 1, r) {
    super('f[]')
    this.nodeType = 'FloatArray'
    ;(this.size = e),
      (this.value = Array.isArray(r)
        ? r
        : typeof r == 'number'
        ? new Array(e).fill(r)
        : new Array(e).fill(0))
  }
  copy(e) {
    return super.copy(e), (this.size = e.size), (this.value = [...e.value]), this
  }
}
import { Matrix3 as hS } from 'three'
var mi = class extends Fe {
  constructor(e) {
    super('m3')
    this.nodeType = 'Matrix3'
    this.value = e != null ? e : new hS()
  }
  generateReadonly(e, r, o, i, s, a) {
    return e.format('mat3(' + this.value.elements.join(', ') + ')', i, r)
  }
  copy(e) {
    return super.copy(e), (this.elements = e.elements), this
  }
  get elements() {
    return this.value.elements
  }
  set elements(e) {
    this.value.fromArray(e)
  }
}
var mn = class extends me {
    constructor(e = new Mt(), r, o, i, s, a, l, c, h) {
      super('v3')
      this.nodeType = 'CustomTexture'
      ;(this.firstTime = !0),
        (this.texture = e),
        (this.textureSize = r),
        (this.crop = o),
        (this.projection = i),
        (this.axis = s),
        (this.side = a),
        (this.size = l),
        (this.mat = new mi(this.texture.value.matrix)),
        (this.alpha = c),
        (this.mode = h),
        (this.calpha = `g${this.uuid.toString().replace(/-/g, '')}_calpha`)
    }
    generate(e, r) {
      e.require('position'),
        e.require('normal'),
        e.require('uv'),
        (e.requires.uv = [!0]),
        (e.extensions.shaderTextureLOD = !0),
        (e.extensions.derivatives = !0)
      let o = `g${this.uuid.toString().replace(/-/g, '')}`,
        i
      switch (this.projection.value) {
        case 3:
          i = e.include(mn.Nodes.cylindrical)
          break
        case 2:
          i = e.include(mn.Nodes.spherical)
          break
        case 1:
          let a = ['vec3(1.0, 0.0, 0.0)', 'vec3(0.0, 1.0, 0.0)', 'vec3(0.0, 0.0, 1.0)'][
              this.axis.value
            ],
            l = new re(`
		vec3 ${o}_planarTexture(sampler2D tex, vec2 textureSize, float crop, mat3 mat, vec2 size, float alpha, int mode, out float calpha) {

				vec2 uvs = ( mat * vec3( (${o}_vCustomUv * 2. - 1.) / (size * .5), 1. ) / 2. + 0.5 ).xy;

				vec4 tmp = texture2D( tex, uvs );

				vec3 col = tmp.rgb;
				float lalpha = alpha * tmp.a;
				${
          this.side.value === 0
            ? ''
            : `lalpha *= step(0.0, ${
                this.side.value === 2 ? '-1.0 * ' : ''
              }dot(vObjectNormal, mat * ${a}));`
        }

				if ( crop > 0.5 ) {
					if ( uvs.x < 0.0 || uvs.x > 1.0 || uvs.y < 0.0 || uvs.y > 1.0 )  {
						lalpha = 0.0;
					}
				}
				calpha =  lalpha / clamp( lalpha + accumAlpha, 0.00001, 1.0 );
				accumAlpha += ( 1.0 - accumAlpha ) * lalpha;
				return col;
			}`)
          i = e.include(l)
          break
        default:
          i = e.include(mn.Nodes.uv)
          break
      }
      if (this.projection.value === 1 && this.firstTime) {
        e.addVertexParsCode(`varying vec2 ${o}_vCustomUv;`),
          e.addFragmentParsCode(`varying vec2 ${o}_vCustomUv;`)
        let a = ['zy', 'xz', 'xy'][this.axis.value]
        e.addVertexFinalCode(`${o}_vCustomUv = (1. + (transformed.${a})) / 2.;`)
      }
      e.addFragmentVariable(this.calpha, 'float')
      let s = []
      return (
        s.push(this.texture.getTexture(e, 't')),
        s.push(this.textureSize.build(e, 'v2')),
        s.push(this.crop.build(e, 'f')),
        s.push(this.mat.build(e, 'mat3')),
        s.push(this.size.build(e, 'v2')),
        s.push(this.alpha.build(e, 'f')),
        s.push(this.mode.build(e, 'i')),
        s.push(this.calpha),
        (this.firstTime = !this.firstTime),
        e.format(i + '(' + s.join(',') + ')', this.getType(e), r)
      )
    }
    copy(e) {
      return (
        super.copy(e),
        this.texture.copy(e.texture),
        (this.textureSize = e.textureSize.clone()),
        (this.crop = e.crop.clone()),
        (this.projection = e.projection.clone()),
        (this.axis = e.axis.clone()),
        (this.size = e.size.clone()),
        (this.alpha = e.alpha.clone()),
        (this.mode = e.mode.clone()),
        this
      )
    }
  },
  dn = mn
dn.Nodes = (function () {
  let e = new re(`
vec3 cylindricalTexture(sampler2D tex, vec2 textureSize, float crop, mat3 mat, vec2 size, float alpha, int mode, out float calpha) {
                vec3 posN = normalize(position);
                float u = 0.5 + atan(posN.z, posN.x) / (2.*3.1415);
                float scaledHeight = position.y / (size.y * 0.5);
                float v =  (scaledHeight / 2.) + .5;

                vec2 calculatedUv = vec2(u,v);
				vec2 uvs = ( mat * vec3( calculatedUv * 2. - 1., 1. ) / 2. + 0.5 ).xy;

                vec2 df = fwidth(uvs);
               	if(df.x > 0.5) df.x = 0.;

				#ifdef GL_EXT_shader_texture_lod
                vec4 tmp = texture2DLodEXT(tex, uvs, log2(max(df.x, df.y)*min(textureSize.x, textureSize.y)));
				#else
                vec4 tmp = textureLod(tex, uvs, log2(max(df.x, df.y)*min(textureSize.x, textureSize.y)));
				#endif

				vec3 col = tmp.rgb;
				float lalpha = alpha * tmp.a;
				if ( crop > 0.5 ) {
					if ( uvs.x < 0.0 || uvs.x > 1.0 || uvs.y < 0.0 || uvs.y > 1.0 )  {
						lalpha = 0.0;
					}
				}
				calpha =  lalpha / clamp( lalpha + accumAlpha, 0.00001, 1.0 );
				accumAlpha += ( 1.0 - accumAlpha ) * lalpha;
				return col;
			}
`),
    r = new re(`
vec3 sphericalTexture(sampler2D tex, vec2 textureSize, float crop, mat3 mat, vec2 size, float alpha, int mode, out float calpha) {
                vec3 posN = normalize(vPosition);
                float u = 0.5 + atan(posN.z, posN.x) / (2.*3.1415);
                float v = 0.5 + asin(posN.y) / 3.1415;

                vec2 calculatedUv = vec2(u,v);
				vec2 uvs = ( mat * vec3( calculatedUv * 2. - 1., 1. ) / 2. + 0.5 ).xy;

                vec2 df = fwidth(uvs);
               	if(df.x > 0.5) df.x = 0.;
				#ifdef GL_EXT_shader_texture_lod
                vec4 tmp = texture2DLodEXT(tex, uvs, log2(max(df.x, df.y)*min(textureSize.x, textureSize.y)));
				#else
                vec4 tmp = textureLod(tex, uvs, log2(max(df.x, df.y)*min(textureSize.x, textureSize.y)));
				#endif

				vec3 col = tmp.rgb;
				float lalpha = alpha * tmp.a;
				if ( crop > 0.5 ) {
					if ( uvs.x < 0.0 || uvs.x > 1.0 || uvs.y < 0.0 || uvs.y > 1.0 )  {
						lalpha = 0.0;
					}
				}
				calpha =  lalpha / clamp( lalpha + accumAlpha, 0.00001, 1.0 );
				accumAlpha += ( 1.0 - accumAlpha ) * lalpha;
				return col;
			}
`),
    o =
      new re(`vec3 uvTexture(sampler2D tex, vec2 textureSize, float crop, mat3 mat, vec2 size, float alpha, int mode, out float calpha) {

				vec2 uvs = ( mat * vec3( vUv * 2. - 1., 1. ) / 2. + 0.5 ).xy;
				vec4 tmp = texture2D( tex, uvs );

				vec3 col = tmp.rgb;

				float lalpha = alpha * tmp.a;
				if ( crop > 0.5 ) {
					if ( uvs.x < 0.0 || uvs.x > 1.0 || uvs.y < 0.0 || uvs.y > 1.0 )  {
						lalpha = 0.0;
					}
				}
				calpha =  lalpha / clamp( lalpha + accumAlpha, 0.00001, 1.0 );
				accumAlpha += ( 1.0 - accumAlpha ) * lalpha;
				return col;
			}`)
  return { cylindrical: e, spherical: r, uv: o }
})()
var Vl = class extends me {
    constructor(e, r, o, i, s, a, l) {
      super('v3')
      this.nodeType = 'Fresnel'
      ;(this.color = e),
        (this.bias = r),
        (this.scale = o),
        (this.intensity = i),
        (this.factor = s),
        (this.alpha = a),
        (this.mode = l),
        (this.calpha = `g${this.uuid.toString().replace(/-/g, '')}_calpha`)
    }
    generate(e, r) {
      if ((e.require('vWorldViewDir'), e.require('worldNormal'), e.isShader('fragment'))) {
        e.addFragmentVariable(this.calpha, 'float')
        let o = e.include(Vl.Nodes.fresnel),
          i = []
        return (
          i.push(this.color.build(e, 'c')),
          i.push(this.bias.build(e, 'f')),
          i.push(this.scale.build(e, 'f')),
          i.push(this.intensity.build(e, 'f')),
          i.push(this.factor.build(e, 'f')),
          i.push(this.alpha.build(e, 'f')),
          i.push(this.mode.build(e, 'i')),
          i.push(this.calpha),
          e.format(o + '(' + i.join(',') + ')', this.getType(e), r)
        )
      } else
        return (
          console.warn('FresnelNode is not compatible with ' + e.shader + ' shader.'),
          e.format('vec3( 0.0 )', this.getType(e), r)
        )
    }
    copy(e) {
      return (
        super.copy(e),
        (this.color = e.color.clone()),
        (this.bias = e.bias.clone()),
        (this.scale = e.scale.clone()),
        (this.intensity = e.intensity.clone()),
        (this.factor = e.factor.clone()),
        (this.alpha = e.alpha.clone()),
        (this.mode = e.mode.clone()),
        (this.calpha = e.calpha),
        this
      )
    }
  },
  fn = Vl
fn.Nodes = (function () {
  return {
    fresnel:
      new re(`vec3 fresnel(vec3 color, float bias, float scale, float intensity, float factor, float alpha, int mode, out float calpha) {
				float fresnel = bias + scale * pow( abs( factor + dot( normalize( vWorldViewDir ), normalize( vWNormal ) ) ), intensity );

				float lalpha = clamp( fresnel, 0.0, 1.0 ) * alpha;
				calpha = lalpha / clamp(lalpha + accumAlpha, 0.001, 1.0);
				accumAlpha += (1.0 - accumAlpha) * lalpha;
				return color;
			}`),
  }
})()
var yn = ((i) => (
    (i.SIMPLEX = 'simplex3d'),
    (i.SIMPLEX_FRACTAL = 'simplex3dFractal'),
    (i.ASHIMA = 'simplexAshima'),
    (i.FBM = 'fbm'),
    (i.PERLIN = 'perlin'),
    i
  ))(yn || {}),
  Et = (function () {
    let t = new re(`vec3 random3(vec3 c) {
			float j = 4096.0*sin(dot(c,vec3(17.0, 59.4, 15.0)));
			vec3 r;
			r.z = fract(512.0*j);
			j *= .125;
			r.x = fract(512.0*j);
			j *= .125;
			r.y = fract(512.0*j);
			return r-0.5;
		}`),
      e = new re(
        `float simplex3d(vec3 p) {
			 vec3 s = floor(p + dot(p, vec3(F3)));
			 vec3 x = p - s + dot(s, vec3(G3));
			 
			 vec3 e = step(vec3(0.0), x - x.yzx);
			 vec3 i1 = e*(1.0 - e.zxy);
			 vec3 i2 = 1.0 - e.zxy*(1.0 - e);
				
			 vec3 x1 = x - i1 + G3;
			 vec3 x2 = x - i2 + 2.0*G3;
			 vec3 x3 = x - 1.0 + 3.0*G3;
			 
			 vec4 w, d;
			 
			 w.x = dot(x, x);
			 w.y = dot(x1, x1);
			 w.z = dot(x2, x2);
			 w.w = dot(x3, x3);
			 
			 w = max(0.6 - w, 0.0);
			 
			 d.x = dot(random3(s), x);
			 d.y = dot(random3(s + i1), x1);
			 d.z = dot(random3(s + i2), x2);
			 d.w = dot(random3(s + 1.0), x3);
			 
			 w *= w;
			 w *= w;
			 d *= w;
			 
			 return dot(d, vec4(52.0));
		}`,
        [t]
      )
    ;(e.keywords.F3 = new Ne('float F3 0.3333333')), (e.keywords.G3 = new Ne('float G3 0.1666667'))
    let r = new re(
        `float simplex3dFractal(vec3 m) {
			mat3 rot1 = mat3(-0.37, 0.36, 0.85,-0.14,-0.93, 0.34,0.92, 0.01,0.4);
			mat3 rot2 = mat3(-0.55,-0.39, 0.74, 0.33,-0.91,-0.24,0.77, 0.12,0.63);
			mat3 rot3 = mat3(-0.71, 0.52,-0.47,-0.08,-0.72,-0.68,-0.7,-0.45,0.56);
			return 0.5333333 * simplex3d(m * rot1)
				 + 0.2666667 * simplex3d(2.0 * m * rot2)
				 + 0.1333333 * simplex3d(4.0 * m * rot3)
				 + 0.0666667 * simplex3d(8.0 * m);
		}`,
        [e]
      ),
      o = new re('vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}'),
      i = new re('vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}'),
      s = new re(
        `float simplexAshima(vec3 v) {
		  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
		  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);
		  vec3 i  = floor(v + dot(v, C.yyy) );
		  vec3 x0 =   v - i + dot(i, C.xxx) ;
		  vec3 g = step(x0.yzx, x0.xyz);
		  vec3 l = 1.0 - g;
		  vec3 i1 = min( g.xyz, l.zxy );
		  vec3 i2 = max( g.xyz, l.zxy );
		  vec3 x1 = x0 - i1 + 1.0 * C.xxx;
		  vec3 x2 = x0 - i2 + 2.0 * C.xxx;
		  vec3 x3 = x0 - 1. + 3.0 * C.xxx;
		  i = mod(i, 289.0 ); 
		  vec4 p = permute( permute( permute( 
					 i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
				   + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) 
				   + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));
		  float n_ = 1.0/7.0; // N=7
		  vec3  ns = n_ * D.wyz - D.xzx;
		  vec4 j = p - 49.0 * floor(p * ns.z *ns.z);  //  mod(p,N*N)
		  vec4 x_ = floor(j * ns.z);
		  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)
		  vec4 x = x_ *ns.x + ns.yyyy;
		  vec4 y = y_ *ns.x + ns.yyyy;
		  vec4 h = 1.0 - abs(x) - abs(y);
		  vec4 b0 = vec4( x.xy, y.xy );
		  vec4 b1 = vec4( x.zw, y.zw );
		  vec4 s0 = floor(b0)*2.0 + 1.0;
		  vec4 s1 = floor(b1)*2.0 + 1.0;
		  vec4 sh = -step(h, vec4(0.0));
		  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
		  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;
		  vec3 p0 = vec3(a0.xy,h.x);
		  vec3 p1 = vec3(a0.zw,h.y);
		  vec3 p2 = vec3(a1.xy,h.z);
		  vec3 p3 = vec3(a1.zw,h.w);
		  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
		  p0 *= norm.x;
		  p1 *= norm.y;
		  p2 *= norm.z;
		  p3 *= norm.w;
		  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
		  m = m * m;
		  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), 
										dot(p2,x2), dot(p3,x3) ) );
		}`,
        [o, i]
      ),
      a = new re('vec4 mod289(vec4 x){return x - floor(x * (1.0 / 289.0)) * 289.0;}'),
      l = new re('vec4 perm(vec4 x){return mod289(((x * 34.0) + 1.0) * x);}', [a]),
      c = new re(
        `float noise(vec3 p){
			vec3 a = floor(p);
			vec3 d = p - a;
			d = d * d * (3.0 - 2.0 * d);
			vec4 b = a.xxyy + vec4(0.0, 1.0, 0.0, 1.0);
			vec4 k1 = perm(b.xyxy);
			vec4 k2 = perm(k1.xyxy + b.zzww);
			vec4 c = k2 + a.zzzz;
			vec4 k3 = perm(c);
			vec4 k4 = perm(c + 1.0);
			vec4 o1 = fract(k3 * (1.0 / 41.0));
			vec4 o2 = fract(k4 * (1.0 / 41.0));
			vec4 o3 = o2 * d.z + o1 * (1.0 - d.z);
			vec2 o4 = o3.yw * d.x + o3.xz * (1.0 - d.x);
			return o4.y * d.y + o4.x * (1.0 - d.y);
		}`,
        [l]
      ),
      h = new re(
        `float fbm(vec3 x) {
			float v = 0.0;
			float a = 0.5;
			vec3 shift = vec3(100);
			for (int i = 0; i < NUM_OCTAVES; ++i) {
				v += a * noise(x);
				x = x * 2.0 + shift;
				a *= 0.5;
			}
			return v;
		}`,
        [c]
      )
    h.keywords.NUM_OCTAVES = new Ne(`int NUM_OCTAVES ${5}`)
    let p = new re('vec3 fade(vec3 t) {return t*t*t*(t*(t*6.0-15.0)+10.0);}'),
      u = new re(
        `float perlin(vec3 P){
		  vec3 Pi0 = floor(P);
		  vec3 Pi1 = Pi0 + vec3(1.0);
		  Pi0 = mod(Pi0, 289.0);
		  Pi1 = mod(Pi1, 289.0);
		  vec3 Pf0 = fract(P);
		  vec3 Pf1 = Pf0 - vec3(1.0);
		  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
		  vec4 iy = vec4(Pi0.yy, Pi1.yy);
		  vec4 iz0 = Pi0.zzzz;
		  vec4 iz1 = Pi1.zzzz;
		  vec4 ixy = permute(permute(ix) + iy);
		  vec4 ixy0 = permute(ixy + iz0);
		  vec4 ixy1 = permute(ixy + iz1);
		  vec4 gx0 = ixy0 / 7.0;
		  vec4 gy0 = fract(floor(gx0) / 7.0) - 0.5;
		  gx0 = fract(gx0);
		  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
		  vec4 sz0 = step(gz0, vec4(0.0));
		  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
		  gy0 -= sz0 * (step(0.0, gy0) - 0.5);
		  vec4 gx1 = ixy1 / 7.0;
		  vec4 gy1 = fract(floor(gx1) / 7.0) - 0.5;
		  gx1 = fract(gx1);
		  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
		  vec4 sz1 = step(gz1, vec4(0.0));
		  gx1 -= sz1 * (step(0.0, gx1) - 0.5);
		  gy1 -= sz1 * (step(0.0, gy1) - 0.5);
		  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
		  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
		  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
		  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
		  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
		  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
		  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
		  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);
		  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
		  g000 *= norm0.x;
		  g010 *= norm0.y;
		  g100 *= norm0.z;
		  g110 *= norm0.w;
		  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
		  g001 *= norm1.x;
		  g011 *= norm1.y;
		  g101 *= norm1.z;
		  g111 *= norm1.w;
		  float n000 = dot(g000, Pf0);
		  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
		  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
		  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
		  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
		  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
		  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
		  float n111 = dot(g111, Pf1);
		  vec3 fade_xyz = fade(Pf0);
		  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
		  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
		  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); 
		  return 2.2 * n_xyz;
		}`,
        [o, i, p]
      )
    return { simplex: e, simplexFractal: r, simplexAshima: s, fbm: h, perlin: u }
  })()
var jl = class extends me {
    constructor(e, r, o, i, s, a, l) {
      super('v3')
      this.nodeType = 'Rainbow'
      ;(this.filmThickness = e),
        (this.movement = r),
        (this.wavelengths = o),
        (this.noiseStrength = i),
        (this.noiseScale = s),
        (this.offset = a),
        (this.alpha = l),
        (this.calpha = `g${this.uuid.toString().replace(/-/g, '')}_calpha`)
    }
    generate(e, r) {
      if ((e.require('vWorldViewDir'), e.require('worldNormal'), e.isShader('fragment'))) {
        e.require('uv'), (e.requires.uv = [!0]), e.addFragmentVariable(this.calpha, 'float')
        let o = e.include(jl.Nodes.rainbow),
          i = []
        return (
          i.push(this.filmThickness.build(e, 'f')),
          i.push(this.movement.build(e, 'f')),
          i.push(this.wavelengths.build(e, 'v3')),
          i.push(this.noiseStrength.build(e, 'f')),
          i.push(this.noiseScale.build(e, 'f')),
          i.push(this.offset.build(e, 'v3')),
          i.push(this.alpha.build(e, 'f')),
          i.push(this.calpha),
          e.format(o + '(' + i.join(',') + ')', this.getType(e), r)
        )
      } else
        return (
          console.warn('RainbowNode is not compatible with ' + e.shader + ' shader.'),
          e.format('vec3( 0.0 )', this.getType(e), r)
        )
    }
    copy(e) {
      return (
        super.copy(e),
        (this.filmThickness = e.filmThickness.clone()),
        (this.movement = e.movement.clone()),
        (this.wavelengths = e.wavelengths.clone()),
        (this.noiseStrength = e.noiseStrength.clone()),
        (this.noiseScale = e.noiseScale.clone()),
        (this.offset = e.offset.clone()),
        (this.alpha = e.alpha.clone()),
        (this.calpha = e.calpha),
        this
      )
    }
  },
  gn = jl
gn.Nodes = (function () {
  let e = new re(
    `vec3 attenuation(vec3 wavelengths, float filmThickness, float movement, float noiseStrength, float noiseScale, vec3 offset) {
                 vec3 st = position / noiseScale;
				 vec3 q = vec3(simplex3d(st),
							  simplex3d(st + vec3(1.0)),
							  simplex3d(st + vec3(1.0)));

				 vec3 r = vec3(simplex3d(st + vec3(1.4, 1.3, 1.0) * q + vec3(1.7, 9.2, 1.0)),
							  simplex3d(st + vec3(2.0, 1.2, 1.0) * q + vec3(8.3, 2.8, 1.0)),
							  simplex3d(st * q));

                 float noise = simplex3d(st + r);

                 return .5 + .5 * cos((((filmThickness + (noise * noiseStrength)) / (vec3(wavelengths.r * 1.0, wavelengths.g * 0.8, wavelengths.b * 0.6) + 1.0)) * dot(normalize(vWorldViewDir + (offset * -0.001)), normalize(vWNormal))) + movement);
             }`,
    [Et.simplex]
  )
  return {
    rainbow: new re(
      `vec3 rainbow(float filmThickness, float movement, vec3 wavelengths, float noiseStrength, float noiseScale, vec3 offset, float alpha, out float calpha) {
                 vec3 res = clamp(attenuation(wavelengths, filmThickness, movement, noiseStrength, noiseScale, offset), 0.0, 2.0);

                 float rainbowContribution = clamp(res.r + res.g + res.b, 0.0, 1.0);
                 float lalpha = alpha * rainbowContribution;
                 calpha =  lalpha / clamp( lalpha + accumAlpha, 0.00001, 1.0 );
                 accumAlpha += ( 1.0 - accumAlpha ) * lalpha;

                 return res;
             }`,
      [e]
    ),
  }
})()
var Ul = class extends me {
    constructor(e, r, o, i, s, a, l, c) {
      super('v3')
      this.nodeType = 'Transmission'
      ;(this.thickness = e),
        (this.ior = r),
        (this.roughness = o),
        (this.transmissionSamplerSize = i),
        (this.transmissionSamplerMap = s),
        (this.transmissionDepthMap = a),
        (this.aspectRatio = l),
        (this.alpha = c),
        (this.calpha = `g${this.uuid.toString().replace(/-/g, '')}_calpha`)
    }
    generate(e, r) {
      if (
        ((e.extensions.shaderTextureLOD = !0),
        (e.extensions.derivatives = !0),
        e.isShader('fragment'))
      ) {
        e.define('NUM_SAMPLES', 30),
          e.require('worldPosition'),
          (e.requires.worldNormal = !0),
          (e.requires.modelMatrix = !0),
          (e.requires.projectionMatrix = !0),
          e.addFragmentVariable(this.calpha, 'float')
        let o = e.include(Ul.Nodes.transmission),
          i = []
        return (
          i.push(this.thickness.build(e, 'f')),
          i.push(this.ior.build(e, 'f')),
          i.push(this.roughness.build(e, 'f')),
          i.push(this.transmissionSamplerSize.build(e, 'v2')),
          i.push(this.transmissionSamplerMap.getTexture(e, 't')),
          i.push(this.transmissionDepthMap.getTexture(e, 't')),
          i.push(this.aspectRatio.build(e, 'v2')),
          i.push('normal'),
          i.push(this.alpha.build(e, 'f')),
          i.push(this.calpha),
          e.format(o + '(' + i.join(',') + ')', this.getType(e), r)
        )
      } else
        return (
          console.warn('TransmissionNode is not compatible with ' + e.shader + ' shader.'),
          e.format('vec3( 0.0 )', this.getType(e), r)
        )
    }
    copy(e) {
      return (
        super.copy(this),
        (this.thickness = e.thickness.clone()),
        (this.ior = e.ior.clone()),
        (this.roughness = e.roughness.clone()),
        (this.transmissionSamplerSize = e.transmissionSamplerSize.clone()),
        (this.transmissionSamplerMap = e.transmissionSamplerMap),
        (this.transmissionDepthMap = e.transmissionDepthMap),
        (this.alpha = e.alpha.clone()),
        (this.calpha = e.calpha),
        this
      )
    }
  },
  xn = Ul
xn.Nodes = (function () {
  let e = new re(`
            float gaussian(vec2 i) {
                const float sigma = float(NUM_SAMPLES) * .25;
                return exp( -.5* dot(i/=sigma,i) ) / ( 6.28 * sigma*sigma );
            }`),
    r = new re(
      `
            vec4 blur(sampler2D sp, vec2 U, vec2 scale, float lod, sampler2D dm, vec2 unrefractedU, vec2 aspectRatio) {
                // Slightly modified version of this:
                // https://www.shadertoy.com/view/ltScRG

                const int LOD = 2;
                const int sLOD = 4; // tile size = 2^LOD

                vec4 O = vec4(0);
                const int s = NUM_SAMPLES/sLOD;
                for ( int i = 0; i < s*s; i++ ) {
                    int modulo = (i)-((i)/(s))*(s);
                    vec2 d = vec2(float(modulo), float(i/s))*float(sLOD) - float(NUM_SAMPLES)/2.;
                    vec2 uv = U + (scale * aspectRatio) * d;
                    // What is the depth of the opaque object we're trying to sample
                    float opaqueDepth = texture2D(dm, uv).r;
                    if (opaqueDepth < gl_FragCoord.z) {
                        uv = unrefractedU + ((scale * min(lod / 2., 1.)) * aspectRatio) * d;
                        lod = lod > 4.0 ? lod : lod / 2.0;
                    }
		            #ifdef TEXTURE_LOD_EXT
                    O += gaussian(d) * texture2DLodEXT( sp, uv, lod);
                    #else
                    O += gaussian(d) * textureLod( sp, uv, lod);
                    #endif
                }
                return O / O.a;
            }`,
      [e]
    ),
    o = new re(`
            vec3 getVolumeTransmissionRay( vec3 n, vec3 v, float thickness, float ior, mat4 modelMatrix ) {
		        // Direction of refracted light.
		        vec3 refractionVector = refract( -v,  n, 1.0 / ior );
		        // Compute rotation-independant scaling of the model matrix.
		        vec3 modelScale;
		        modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		        modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		        modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		        // The thickness is specified in local space.
		        return normalize( refractionVector ) * thickness * modelScale;
	        }`),
    i = new re(`
float applyIorToRoughness( float roughness, float ior ) {
		// Scale roughness with IOR so that an IOR of 1.0 results in no microfacet refraction and
		// an IOR of 1.5 results in the default amount of microfacet refraction.
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	} `),
    s = new re(
      `
vec4 getTransmissionSample( vec2 fragCoord, float roughness, float ior, vec2 transmissionSamplerSize, sampler2D transmissionSamplerMap, sampler2D transmissionDepthMap, vec2 unrefractedCoords, vec2 aspectRatio) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
        float lod = applyIorToRoughness(roughness, ior);

        return blur(transmissionSamplerMap, fragCoord, vec2(lod / (transmissionSamplerSize.x / 2.)), min(framebufferLod / 5.5, 8.5), transmissionDepthMap, unrefractedCoords, aspectRatio);
	}`,
      [i, r]
    ),
    a = new re(
      `
vec4 getIBLVolumeRefraction( vec3 n, vec3 v, float roughness, vec3 position, mat4 modelMatrix, mat4 viewMatrix, mat4 projMatrix, float ior, float thickness, vec2 transmissionSamplerSize, sampler2D transmissionSamplerMap, sampler2D transmissionDepthMap, vec2 aspectRatio ) {
        vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
        vec3 refractedRayExit = position + transmissionRay;

        // Project refracted vector on the framebuffer, while mapping to normalized device coordinates.
        vec4 ndcPos = projMatrix * viewMatrix *  vec4( refractedRayExit, 1.0 );
        vec2 refractionCoords = ndcPos.xy / ndcPos.w;
        refractionCoords += 1.0;
        refractionCoords /= 2.0;

        vec4 ndcPosUnrefracted = projMatrix * viewMatrix * vec4(position, 1.0 );
        vec2 unrefractedCoords = ndcPosUnrefracted.xy / ndcPosUnrefracted.w;
        unrefractedCoords += 1.0;
        unrefractedCoords /= 2.0;

        // Sample framebuffer to get pixel the refracted ray hits.
        vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior, transmissionSamplerSize, transmissionSamplerMap, transmissionDepthMap, unrefractedCoords, aspectRatio );
        // Get the specular component.
        return vec4( ( 1.0 ) * transmittedLight.rgb, transmittedLight.a );
    }`,
      [s, o]
    )
  return {
    transmission: new re(
      `
            vec3 transmission(float thickness, float ior, float roughness, vec2 transmissionSamplerSize, sampler2D transmissionSamplerMap, sampler2D transmissionDepthMap, vec2 aspectRatio, vec3 normal, float alpha, out float calpha) {
                vec3 v = vec3(0.);
                if (isOrthographic) {
                    v = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
                } else {
                    v = normalize(vWPosition - cameraPosition);
                }
                vec4 transmission = getIBLVolumeRefraction(vWNormal, -v, roughness,  vWPosition, modelMatrix, viewMatrix, projectionMatrix, ior, thickness, transmissionSamplerSize, transmissionSamplerMap, transmissionDepthMap, aspectRatio );
                float lalpha = alpha;

                 calpha =  lalpha / clamp( lalpha + accumAlpha, 0.00001, 1.0 );
                 accumAlpha += ( 1.0 - accumAlpha ) * lalpha;
                 return transmission.rgb;
            }`,
      [a]
    ),
  }
})()
var kl = class extends me {
    constructor(e, r) {
      super('v3')
      this.nodeType = 'CustomNormal'
      ;(this.cnormal = e), (this.alpha = r)
    }
    generate(e, r) {
      if (e.isShader('fragment')) {
        let o = e.include(kl.Nodes.customNormal),
          i = []
        return (
          i.push(this.cnormal.build(e, 'v3')),
          i.push('normal'),
          i.push(this.alpha.build(e, 'f')),
          e.format(o + '(' + i.join(',') + ')', this.getType(e), r)
        )
      } else
        return (
          console.warn('CustomNormalNode is not compatible with ' + e.shader + ' shader.'),
          e.format('vec3( 0.0 )', this.getType(e), r)
        )
    }
    copy(e) {
      return super.copy(e), this.cnormal.copy(e.cnormal), this.alpha.copy(e.alpha), this
    }
  },
  bn = kl
bn.Nodes = (function () {
  return {
    customNormal: new re(`vec3 customNormal(vec3 cnormal, vec3 norm, float alpha) {
				vec3 normal = packNormalToRGB( norm ).rgb;
				normal *= step( vec3(0.5), cnormal );

				accumAlpha += ( 1.0 - accumAlpha ) * alpha;

				return normal;
			}`),
  }
})()
var Hl = class extends me {
    constructor(e, r, o, i, s, a, l, c) {
      super('v3')
      this.nodeType = 'Gradient'
      ;(this.gradientType = e),
        (this.smooth = r),
        (this.colors = o),
        (this.steps = i),
        (this.offset = s),
        (this.morph = a),
        (this.angle = l),
        (this.alpha = c),
        (this.calpha = `g${this.uuid.toString().replace(/-/g, '')}_calpha`)
    }
    generate(e, r) {
      if (e.isShader('fragment')) {
        e.define('GRAD_MAX', 10),
          e.require('uv'),
          (e.requires.uv = [!0]),
          e.addFragmentVariable(this.calpha, 'float')
        let o = e.include(Hl.Nodes.gradient),
          i = []
        return (
          i.push(this.gradientType.build(e, 'i')),
          i.push(this.smooth.build(e, 'b')),
          i.push(this.colors.build(e, 'v4[]')),
          i.push(this.steps.build(e, 'f[]')),
          i.push(this.offset.build(e, 'v2')),
          i.push(this.morph.build(e, 'v2')),
          i.push(this.angle.build(e, 'f')),
          i.push(this.alpha.build(e, 'f')),
          i.push(this.calpha),
          e.format(o + '(' + i.join(',') + ')', this.getType(e), r)
        )
      } else
        return (
          console.warn('GradientNode is not compatible with ' + e.shader + ' shader.'),
          e.format('vec3( 0.0 )', this.getType(e), r)
        )
    }
    copy(e) {
      return (
        super.copy(e),
        (this.gradientType = e.gradientType.clone()),
        (this.smooth = e.smooth.clone()),
        (this.colors = e.colors.clone()),
        (this.steps = e.steps.clone()),
        (this.offset = e.offset.clone()),
        (this.morph = e.morph.clone()),
        (this.angle = e.angle.clone()),
        (this.alpha = e.alpha.clone()),
        (this.calpha = e.calpha),
        this
      )
    }
  },
  vn = Hl
vn.Nodes = (function () {
  return {
    gradient:
      new re(`vec3 gradient(int gradientType, bool smoothed, vec4 colors[GRAD_MAX], float steps[GRAD_MAX], vec2 offset, vec2 morph, float angle, float alpha, out float calpha) {
				vec4 color = colors[0];
				vec2 m = morph / vUv.xy;
				vec2 rot = vec2( 0.5 + m.x, m.y );
				vec2 dt = vec2(
					cos( angle ) * rot.x - sin( angle ) * rot.y,
					sin( angle ) * rot.x + cos( angle ) * rot.y
				);
				vec2 pt = ( vUv - 0.5 + offset ) / 2.0 + dt / 2.0;
				float t = dot( pt, dt ) / dot( dt, dt );
				if ( gradientType == 1 ) {
					t = distance (
						( vUv + morph ) * 3.0,
						( vUv + offset ) + 1.0
					) + angle;
				} else if ( gradientType == 2 ) {
					float polar = atan(
						vUv.x + morph.x - 0.5 + offset.x,
						vUv.y + morph.y - 0.5 + offset.y
					) * -1.0;
					t = fract( ( angle / PI / -2.0 ) + 0.5 * ( polar / PI ) );
				}

				float p;
				if (smoothed) {
					for ( int i = 1; i < GRAD_MAX; i++ ) {
						p = clamp( ( t - steps[i-1] ) / ( steps[i] - steps[i-1] ), 0.0, 1.0 );
						color = mix(color, colors[i], smoothstep(0.0, 1.0, p));
					}

				} else {
					for ( int i = 1; i < GRAD_MAX; i++ ) {
						p = clamp( ( t - steps[i-1] ) / ( steps[i] - steps[i-1] ), 0.0, 1.0 );
						color = mix(color, colors[i], p);
					}
				}

				float lalpha = alpha * color.a;
				calpha =  lalpha / clamp( lalpha + accumAlpha, 0.00001, 1.0 );
				accumAlpha += ( 1.0 - accumAlpha ) * lalpha;

				return color.xyz;
			}`),
  }
})()
var ql = ((e) => ((e.NOISE = 'noise'), (e.MAP = 'map'), e))(ql || {}),
  Wl = class extends me {
    constructor(e = new be(0), r, o, i, s, a) {
      super('v3')
      this.nodeType = 'VertexDisplacement'
      ;(this.displacementTypeIndex = e),
        (this.intensity = r),
        (this.movementOrTexture = o),
        Object.values(ql)[this.displacementTypeIndex.value] === 'map' &&
          (this.mat = new mi(this.movementOrTexture.value.matrix)),
        (this.cropOrOffset = i),
        (this.scale = s),
        (this.noiseFunctionIndex = a)
    }
    generate(e, r) {
      if (e.isShader('vertex')) {
        e.define('USE_LAYER_DISPLACE')
        let o,
          i = []
        switch (
          (i.push('displaced_position'),
          i.push('displaced_normal'),
          Object.values(ql)[this.displacementTypeIndex.value])
        ) {
          case 'map': {
            ;(o = e.include(Wl.Nodes.map)),
              i.push(this.movementOrTexture.getTexture(e, 't')),
              i.push('uv'),
              i.push(this.cropOrOffset.build(e, 'f')),
              this.mat && i.push(this.mat.build(e, 'mat3'))
            break
          }
          case 'noise': {
            let a = Object.values(yn)[this.noiseFunctionIndex.value],
              l = new re(`vec3 orthogonal(vec3 v) {
							return normalize(abs(v.x) > abs(v.z) ? vec3(-v.y, v.x, 0.0) : vec3(0.0, -v.z, v.y));
						}`),
              c = new re(
                `vec3 distorted(vec3 p, vec3 n, float scale, float intensity, vec3 offset, float neighbour_offset, float movement) {
							return p + n * ${a}((p + offset) * scale * 0.001 + neighbour_offset + (movement * 0.1)) * intensity;
						}`,
                [Et.simplex, Et.simplexFractal, Et.simplexAshima, Et.fbm, Et.perlin]
              ),
              h = new re(
                `vec3 vertexDisplacementNoise(vec3 position, vec3 normal, float scale, vec3 offset, float movement, float intensity, out vec3 displaced_normal) {
							vec3 displaced_position = distorted(position, normal, scale, intensity, offset, neighbor_offset, movement);
							vec3 tangent1 = orthogonal(normal);
							vec3 tangent2 = normalize(cross(normal, tangent1));

                            // TODO(Max): The distance to the neighbors was originally scaled by 0.1.
                            // This caused some small oval/circular visual artifacts in the lighting.
                            // For now, simply using neighbors further away betters the problem,
                            // but we should figure out the underlying cause when we have some time.
                            // Maybe its related to how we calculate the tangent and bitangent?
							vec3 nearby1 = position + tangent1;
							vec3 nearby2 = position + tangent2;
							vec3 distorted1 = distorted(nearby1, normal, scale, intensity, offset, neighbor_offset, movement);
							vec3 distorted2 = distorted(nearby2, normal, scale, intensity, offset, neighbor_offset, movement);
							displaced_normal = normalize(cross(distorted1 - displaced_position, distorted2 - displaced_position));
							return displaced_position;
						}`,
                [c, l]
              )
            ;(o = e.include(h)),
              i.push(this.scale.build(e, 'f')),
              i.push(this.cropOrOffset.build(e, 'v3')),
              i.push(this.movementOrTexture.build(e, 'f'))
            break
          }
        }
        return (
          i.push(this.intensity.build(e, 'f')),
          i.push('displaced_normal'),
          e.format(o + '(' + i.join(',') + ')', this.getType(e), r)
        )
      } else
        return (
          console.warn('VertexDisplacementNode is not compatible with ' + e.shader + ' shader.'),
          e.format('vec3( 0.0 )', this.getType(e), r)
        )
    }
    copy(e) {
      var r, o
      return (
        super.copy(e),
        (this.noiseFunctionIndex = (r = e.noiseFunctionIndex) == null ? void 0 : r.clone()),
        (this.scale = (o = e.scale) == null ? void 0 : o.clone()),
        (this.cropOrOffset = e.cropOrOffset.clone()),
        (this.intensity = e.intensity.clone()),
        (this.movementOrTexture = e.movementOrTexture.clone()),
        this
      )
    }
  },
  fi = Wl
fi.Nodes = (function () {
  let e = new re(`vec3 orthogonal(vec3 v) {
				return normalize(abs(v.x) > abs(v.z) ? vec3(-v.y, v.x, 0.0) : vec3(0.0, -v.z, v.y));
			}`),
    r =
      new re(`float displacementMapTexture(sampler2D tex, float crop, vec2 uv, mat3 mat, vec2 offset) {
				vec2 uvs = (mat * vec3(uv * 2.0 - 1.0, 1.0) / 2.0 + 0.5).xy + offset;
				vec4 tmp = texture2D(tex, uvs);
				vec3 col = tmp.rgb;
				if (crop > 0.5) {
					if ( uvs.x < 0.0 || uvs.x > 1.0 || uvs.y < 0.0 || uvs.y > 1.0 )  {
						return 0.0;
					}
				}
				return col.r;
			}`)
  return {
    map: new re(
      `vec3 vertexDisplacementMap(vec3 position, vec3 normal, sampler2D tex, vec2 uv, float crop, mat3 mat, float intensity, out vec3 displaced_normal) {
				vec3 displaced_position = position + normal * displacementMapTexture(tex, crop, uv, mat, vec2(0.0)) * intensity;
				vec3 tangent1 = normalize(orthogonal(normal));
				vec3 tangent2 = normalize(cross(normal, tangent1));
				vec3 nearby1 = position + tangent1 * 0.1;
				vec3 nearby2 = position + tangent2 * 0.1;
				vec3 distorted1 = nearby1 + normal * displacementMapTexture(tex, crop, uv, mat, vec2(neighbor_offset)) * intensity;
				vec3 distorted2 = nearby2 + normal * displacementMapTexture(tex, crop, uv, mat, vec2(neighbor_offset)) * intensity;
				displaced_normal = normalize(cross(distorted1 - displaced_position, distorted2 - displaced_position));
				return displaced_position;
			}`,
      [e, r]
    ),
  }
})()
var Sn = class extends me {
  constructor(
    e = new pe(),
    r = new pe(),
    o = new pe(),
    i = new pe(),
    s = new pe(),
    a = new pe(),
    l = new pe(),
    c = new pe(),
    h = new pe(),
    p = new pe(),
    u = new pe(),
    m = new pe()
  ) {
    super('v3')
    this.nodeType = 'Noise'
    ;(this.scale = e),
      (this.size = r),
      (this.move = o),
      (this.fA = i),
      (this.fB = s),
      (this.distortion = a),
      (this.colorA = l),
      (this.colorB = c),
      (this.colorC = h),
      (this.colorD = p),
      (this.alpha = u),
      (this.noiseType = m),
      (this.calpha = `g${this.uuid.toString().replace(/-/g, '')}_calpha`)
  }
  generate(e, r, o, i, s) {
    e.require('uv'), (e.requires.uv = [!0]), e.addFragmentVariable(this.calpha, 'float')
    let a = Object.values(yn)[this.noiseType.value],
      l = new re(
        `vec3 ${a}customNoise(float scale, vec3 size, float move, vec2 fA, vec2 fB, vec2 distortion, vec4 colorA, vec4 colorB, vec4 colorC, vec4 colorD, float alpha, out float calpha) {
                vec3 st = position / size;
				st /= scale;
				vec3 q = vec3(${a}(st),
							  ${a}(st + vec3(1.0)),
							  ${a}(st + vec3(1.0)));
				vec3 r = vec3(${a}(st + vec3(distortion, 1.0) * q + vec3(fA, 1.0) + move),
							  ${a}(st + vec3(distortion, 1.0) * q + vec3(fB, 1.0) + move), 
							  ${a}(st * q));
				float f = ${a}(st + r);
				vec4 color;
				color = mix(colorA, colorB, clamp((f * f) * 4.0, 0.0, 1.0));
				color = mix(color, colorC, clamp(length(q), 0.0, 1.0));
				color = mix(color, colorD, clamp(length(r.x), 0.0, 1.0));

                float lalpha = alpha * color.a;
                calpha =  lalpha / clamp( lalpha + accumAlpha, 0.00001, 1.0 );

			    accumAlpha += ( 1.0 - accumAlpha ) * lalpha;
				return clamp(color, 0.0, 1.0).rgb;
			}`,
        [Et.simplex, Et.simplexFractal, Et.simplexAshima, Et.fbm, Et.perlin]
      ),
      c = e.include(l),
      h = []
    return (
      h.push(this.scale.build(e, 'f')),
      h.push(this.size.build(e, 'v3')),
      h.push(this.move.build(e, 'f')),
      h.push(this.fA.build(e, 'v2')),
      h.push(this.fB.build(e, 'v2')),
      h.push(this.distortion.build(e, 'v2')),
      h.push(this.colorA.build(e, 'v4')),
      h.push(this.colorB.build(e, 'v4')),
      h.push(this.colorC.build(e, 'v4')),
      h.push(this.colorD.build(e, 'v4')),
      h.push(this.alpha.build(e, 'f')),
      h.push(this.calpha),
      e.format(c + '(' + h.join(',') + ')', this.getType(e), r)
    )
  }
  copy(e) {
    return (
      super.copy(e),
      this.scale.copy(e.scale),
      this.size.copy(e.size),
      this.move.copy(e.move),
      this.fA.copy(e.fA),
      this.fB.copy(e.fB),
      this.distortion.copy(e.distortion),
      this.colorA.copy(e.colorA),
      this.colorB.copy(e.colorB),
      this.colorC.copy(e.colorC),
      this.colorD.copy(e.colorD),
      this.alpha.copy(e.alpha),
      (this.calpha = e.calpha),
      this.noiseType.copy(e.noiseType),
      this
    )
  }
}
Sn.numOctaves = 5
var wn = class extends me {
  constructor(e = new pe(), r = new pe(), o = new pe(), i = new pe()) {
    super('v3')
    this.nodeType = 'Blend'
    ;(this.a = e), (this.b = r), (this.alpha = o), (this.mode = i)
  }
  generate(e, r) {
    if (e.isShader('fragment')) {
      let o = []
      return (
        o.push(this.a.build(e, 'c')),
        o.push(this.b.build(e, 'c')),
        o.push(this.alpha.build(e, 'f')),
        o.push(this.mode.build(e, 'i')),
        e.format('spe_blend(' + o.join(',') + ')', this.getType(e), r)
      )
    } else
      return (
        console.warn('BlendNode is not compatible with ' + e.shader + ' shader.'),
        e.format('vec3( 0.0 )', this.getType(e), r)
      )
  }
  copy(e) {
    return (
      super.copy(e),
      this.a.copy(e.a),
      this.b.copy(e.b),
      this.alpha.copy(e.alpha),
      this.mode.copy(e.mode),
      this
    )
  }
}
var yi = class extends me {
    constructor(e, r, o, i, s, a, l, c, h, p, u, m) {
      super('v3')
      this.nodeType = 'Depth'
      ;(this.gradientType = e),
        (this.smooth = r),
        (this.near = o),
        (this.far = i),
        (this.isVector = s),
        (this.isWorldSpace = a),
        (this.origin = l),
        (this.direction = c),
        (this.colors = h),
        (this.steps = p),
        (this.num = u),
        (this.alpha = m),
        (this.calpha = `g${this.uuid.toString().replace(/-/g, '')}_calpha`)
    }
    generate(e, r) {
      let o = `g${this.uuid.toString().replace(/-/g, '')}`,
        i = new re(
          `vec3 ${o}_sdepth(float near, float far, vec3 origin, vec3 direction, vec4 colors[${o}_MAX_COLORS], float steps[10], float alpha, out float calpha) {
               vec4 color = colors[0];
               #ifdef ${o}_IS_VECTOR
                   #ifdef ${o}_LINEAR
                       #ifdef ${o}_WORLDSPACE
                       float depth = vectorLinearWorldSpaceDepth(direction, origin, near, far);
                       #else
                       float depth = vectorLinearObjectSpaceDepth(direction, origin, near, far);
                       #endif
                   #else
                       #ifdef ${o}_WORLDSPACE
                           float depth = vectorSphericalWorldSpaceDepth(origin, near, far);
                       #else
                           float depth = vectorSphericalObjectSpaceDepth(origin, near, far);
                       #endif
                   #endif
               #else
                   float dist = length(vWPosition - cameraPosition);
			       float depth = ( dist - near ) / ( far - near );
               #endif


              float p;
              #ifdef ${o}_SMOOTH
				for ( int i = 1; i < ${o}_MAX_COLORS; i++ ) {
						p = clamp( ( depth - steps[i-1] ) / ( steps[i] - steps[i-1] ), 0.0, 1.0 );
						color = mix(color, colors[i], smoothstep(0.0, 1.0, p));
					}
              #else
                for ( int i = 1; i < ${o}_MAX_COLORS; i++ ) {
                   p = clamp(( depth - steps[i - 1] ) / ( steps[i] - steps[i - 1] ), 0.0, 1.0);
                   color = mix(color, colors[i], p);
                 }
              #endif

               float lalpha = alpha * color.a;
               calpha =  lalpha / clamp( lalpha + accumAlpha, 0.00001, 1.0 );

			   accumAlpha += ( 1.0 - accumAlpha ) * lalpha;
               return color.rgb;
			}`,
          [
            yi.Nodes.vectorLinearWorldSpaceDepth,
            yi.Nodes.vectorLinearObjectSpaceDepth,
            yi.Nodes.vectorSphericalObjectSpaceDepth,
            yi.Nodes.vectorSphericalWorldSpaceDepth,
          ]
        )
      if (e.isShader('fragment')) {
        e.define(`${o}_MAX_COLORS`, this.num.value + 1),
          this.smooth.value && e.define(`${o}_SMOOTH`),
          this.isVector.value > 0.5 && e.define(`${o}_IS_VECTOR`),
          this.gradientType.value === 0 && e.define(`${o}_LINEAR`),
          this.isWorldSpace.value > 0.5 && e.define(`${o}_WORLDSPACE`),
          e.require('worldPosition'),
          e.addFragmentVariable(this.calpha, 'float')
        let s = e.include(i),
          a = []
        return (
          a.push(this.near.build(e, 'f')),
          a.push(this.far.build(e, 'f')),
          a.push(this.origin.build(e, 'v3')),
          a.push(this.direction.build(e, 'v3')),
          a.push(this.colors.build(e, 'v4[]')),
          a.push(this.steps.build(e, 'f[]')),
          a.push(this.alpha.build(e, 'f')),
          a.push(this.calpha),
          e.format(s + '(' + a.join(',') + ')', this.getType(e), r)
        )
      } else
        return (
          console.warn('DepthNode is not compatible with ' + e.shader + ' shader.'),
          e.format('vec3( 0.0 )', this.getType(e), r)
        )
    }
    copy(e) {
      return (
        super.copy(e),
        (this.gradientType = e.gradientType.clone()),
        (this.smooth = e.smooth.clone()),
        (this.near = e.near.clone()),
        (this.far = e.far.clone()),
        (this.isVector = e.isVector.clone()),
        (this.isWorldSpace = e.isWorldSpace.clone()),
        (this.origin = e.origin.clone()),
        (this.direction = e.direction.clone()),
        (this.colors = e.colors.clone()),
        (this.steps = e.steps.clone()),
        (this.alpha = e.alpha.clone()),
        (this.calpha = e.calpha),
        this
      )
    }
  },
  Ln = yi
Ln.Nodes = (function () {
  let e =
      new re(`float vectorLinearWorldSpaceDepth(vec3 direction, vec3 origin, float near, float far) {
               vec3 n = normalize(direction);
               float dist = (n.x*(vWPosition.x - origin.x) + n.y*(vWPosition.y - origin.y) + n.z*(vWPosition.z - origin.z));
               return ( dist - near ) / ( far - near );
            }`),
    r =
      new re(`float vectorLinearObjectSpaceDepth(vec3 direction, vec3 origin, float near, float far) {
               vec3 n = normalize(direction);
               float dist = (n.x*(position.x - origin.x) + n.y*(position.y - origin.y) + n.z*(position.z - origin.z));
               return ( dist - near ) / ( far - near );
            }`),
    o = new re(`float vectorSphericalWorldSpaceDepth(vec3 origin, float near, float far) {
               float dist = length(vWPosition - origin);
               return ( dist - near ) / ( far - near );
            }`),
    i = new re(`float vectorSphericalObjectSpaceDepth(vec3 origin, float near, float far) {
               float dist = length(position - origin);
               return ( dist - near ) / ( far - near );
            }`)
  return {
    vectorLinearWorldSpaceDepth: e,
    vectorLinearObjectSpaceDepth: r,
    vectorSphericalWorldSpaceDepth: o,
    vectorSphericalObjectSpaceDepth: i,
  }
})()
var $l = class extends me {
    constructor(e, r, o) {
      super('v3')
      this.nodeType = 'Matcap'
      ;(this.texture = e),
        (this.alpha = r),
        (this.mode = o),
        (this.calpha = `g${this.uuid.toString().replace(/-/g, '')}_calpha`)
    }
    generate(e, r) {
      if (e.isShader('fragment')) {
        e.addFragmentVariable(this.calpha, 'float')
        let o = e.include($l.Nodes.matcap)
        e.require('normal'), (e.requires.normal = !0)
        let i = []
        return (
          i.push(this.texture.getTexture(e, 't')),
          i.push('normal'),
          i.push(this.alpha.build(e, 'f')),
          i.push(this.mode.build(e, 'i')),
          i.push(this.calpha),
          e.format(o + '(' + i.join(',') + ')', this.getType(e), r)
        )
      } else
        return (
          console.warn('MatcapNode is not compatible with ' + e.shader + ' shader.'),
          e.format('vec3( 0.0 )', this.getType(e), r)
        )
    }
    copy(e) {
      return (
        super.copy(e),
        (this.texture = e.texture.clone()),
        (this.alpha = e.alpha.clone()),
        (this.mode = e.mode.clone()),
        (this.calpha = e.calpha),
        this
      )
    }
  },
  Cn = $l
Cn.Nodes = (function () {
  return {
    matcap:
      new re(`vec3 matcap(sampler2D matcapTex, vec3 normal, float alpha, int mode, out float calpha) {
                vec3 viewDir = normalize( vViewPosition );
                vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
                vec3 y = cross( viewDir, x );
                vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5; // 0.495 to remove artifacts caused by undersized matcap disks
                vec4 matcapColor = texture2D( matcapTex, uv );

                calpha =  alpha / clamp( alpha + accumAlpha, 0.00001, 1.0 );
				accumAlpha += ( 1.0 - accumAlpha ) * alpha;
                
                return matcapColor.rgb;
            }
            `),
  }
})()
var wt = class {
  constructor(t) {
    ;(this.id = 2),
      (this.layerCount = 2),
      (this.uuid = _r.generateUUID()),
      (this.needsUpdate = !1),
      (this._material = t),
      (this._layerNodes = [])
    let e = this._createLayer({ id: 0, type: 'color' })
    ;(this._material.color = e.color),
      this._material.alpha === void 0 && (this._material.alpha = new te(1))
    let r = new te(1),
      o = new be(0)
    'shadingAlpha' in this._material &&
      'shadingBlend' in this._material &&
      ((this._material.shadingAlpha = r), (this._material.shadingBlend = o)),
      this._layerNodes.push({ id: 0, type: 'color', color: e.color, alpha: e.alpha, mode: e.mode }),
      this._layerNodes.push({ id: 1, type: 'light', alpha: r, mode: o }),
      (this.head = e.layer),
      (this.head.next = new We(1, void 0, { type: 'light', alpha: r, mode: o })),
      this.attachLightNodes(this.getLightLayer())
  }
  get material() {
    return this._material
  }
  set material(t) {
    var i
    this._material = t
    let e,
      r,
      o = this.head
    for (; o !== void 0; ) {
      if (o.type === 'light') {
        ;(e = o.uniforms[`f${o.id}_alpha`]), (r = o.uniforms[`f${o.id}_mode`])
        break
      }
      o = o.next
    }
    'shadingAlpha' in this._material &&
      'shadingBlend' in this._material &&
      ((this._material.shadingAlpha = e), (this._material.shadingBlend = r)),
      this.attachLightNodes((i = t.userData.layers) == null ? void 0 : i.getLightLayer()),
      this.blendColors(),
      this.blendAfterColors(),
      this.blendPositions()
  }
  getLayersOfType(t) {
    let e = [],
      r = this.head
    for (; r; ) r.type === t && e.push(r), (r = r.next)
    return e
  }
  addLayer(t) {
    var o
    if (((t.id = (o = t.id) != null ? o : ++this.id), this.layerCount++, t.type === 'light')) {
      let i = this.createLightLayer(t)
      return (
        (this.uuid = _r.generateUUID()),
        this.blendColors(),
        this.blendAfterColors(),
        this.blendPositions(),
        i
      )
    }
    let e = this._createLayer(t),
      r = e.layer
    if (this.head === void 0) this.head = r
    else {
      let i = this.head
      for (; i.next != null; ) i = i.next
      i.next = r
    }
    return (
      e.color &&
        this._layerNodes.push({
          id: r.id,
          type: 'color',
          color: e.color,
          alpha: e.alpha,
          mode: e.mode,
        }),
      e.position && this._layerNodes.push({ id: r.id, type: 'position', position: e.position }),
      (this.uuid = _r.generateUUID()),
      this.blendColors(),
      this.blendAfterColors(),
      this.blendPositions(),
      r
    )
  }
  addLayerBeforeAt(t, e) {
    var a
    let r = this.head
    ;(t.id = (a = t.id) != null ? a : ++this.id), this.layerCount++
    let o = this._createLayer(t),
      i = o.layer
    i.next = e
    let s = 0
    if (r === e)
      (this.head = i),
        o.color &&
          this._layerNodes.splice(0, 0, {
            id: i.id,
            type: 'color',
            color: o.color,
            alpha: o.alpha,
            mode: o.mode,
          }),
        o.position &&
          this._layerNodes.splice(0, 0, { id: i.id, type: 'position', position: o.position })
    else {
      for (s = 1; (r == null ? void 0 : r.next) !== e; ) (r = r == null ? void 0 : r.next), s++
      ;(r.next = i),
        o.color &&
          this._layerNodes.splice(s, 0, {
            id: i.id,
            type: 'color',
            color: o.color,
            alpha: o.alpha,
            mode: o.mode,
          }),
        o.position &&
          this._layerNodes.splice(s, 0, { id: i.id, type: 'position', position: o.position })
    }
    return (
      (this.uuid = _r.generateUUID()),
      this.blendColors(),
      this.blendAfterColors(),
      this.blendPositions(),
      i
    )
  }
  addLayerAt(t, e) {
    var i
    ;(e.id = (i = e.id) != null ? i : ++this.id), this.layerCount++
    let r = this._createLayer(e),
      o = r.layer
    if (
      (r.color &&
        this._layerNodes.splice(t, 0, {
          id: o.id,
          type: 'color',
          color: r.color,
          alpha: r.alpha,
          mode: r.mode,
        }),
      r.position &&
        this._layerNodes.splice(t, 0, { id: o.id, type: 'position', position: r.position }),
      t == 0)
    )
      (o.next = this.head), (this.head = o)
    else {
      let s = this.head,
        a = this.head.next
      for (let l = 0; l < t - 1; l++) (s = a), (a = a.next)
      ;(o.next = a), (s.next = o)
    }
    return (
      (this.uuid = _r.generateUUID()),
      this.blendColors(),
      this.blendAfterColors(),
      this.blendPositions(),
      o
    )
  }
  removeLayer(t) {
    let e = this.head,
      r,
      o = 0
    if ((e == null ? void 0 : e.id) == t) this.head = e.next
    else
      for (o = 1, r = e, e = e == null ? void 0 : e.next; e != null; ) {
        if (e.id == t) {
          r.next = e.next
          break
        }
        o++, (r = e), (e = e.next)
      }
    return (
      this.cleanupChangedLayer(e),
      this.blendColors(),
      this.blendAfterColors(),
      this.blendPositions(),
      (this.uuid = _r.generateUUID()),
      this.layerCount--,
      o
    )
  }
  changeLayer(t, e) {
    let r,
      o = this.head,
      i
    if ((o == null ? void 0 : o.id) == t) {
      let s = this._createLayer(O({ id: t, uuid: o.uuid }, e))
      ;(i = s.layer),
        (i.next = o.next),
        (this.head = i),
        s.color &&
          (this._layerNodes[0] = {
            id: i.id,
            type: 'color',
            color: s.color,
            alpha: s.alpha,
            mode: s.mode,
          }),
        s.position && (this._layerNodes[0] = { id: i.id, type: 'position', position: s.position }),
        (i.uniforms[`f${t}_mode`].value = o.uniforms[`f${t}_mode`].value),
        (i.uniforms[`f${t}_alpha`].value = o.uniforms[`f${t}_alpha`].value)
    } else {
      ;(r = o), (o = o.next)
      let s = 1
      for (; o != null; ) {
        if (o.id == t) {
          let a = this._createLayer(O({ id: t, uuid: o.uuid }, e))
          ;(i = a.layer),
            (r.next = i),
            (i.next = o.next),
            a.color &&
              (this._layerNodes[s] = {
                id: t,
                type: 'color',
                color: a.color,
                alpha: a.alpha,
                mode: a.mode,
              }),
            a.position && (this._layerNodes[s] = { id: t, type: 'position', position: a.position }),
            (i.uniforms[`f${t}_mode`].value = o.uniforms[`f${t}_mode`].value),
            (i.uniforms[`f${t}_alpha`].value = o.uniforms[`f${t}_alpha`].value)
          break
        }
        ;(r = o), (o = o.next), s++
      }
    }
    return (
      (this.uuid = _r.generateUUID()),
      this.blendColors(),
      this.blendAfterColors(),
      this.blendPositions(),
      i
    )
  }
  getLayer(t) {
    let e = this.head
    for (; e != null && e.id != t; ) e = e.next
    return e
  }
  getLayerByUuid(t) {
    let e = this.head
    for (; e !== void 0; ) {
      if (e.uuid === t) return e
      e = e.next
    }
  }
  getLayers() {
    let t = [],
      e = this.head
    for (; e != null; ) t.push(e), (e = e.next)
    return t
  }
  getLayerPosition(t) {
    let e = this.head,
      r = 0
    for (; e !== void 0 && e.id != t; ) r++, (e = e.next)
    return r
  }
  getDefines() {}
  getBeforeProgram() {}
  getLightingProgram() {}
  getAfterProgram() {}
  getVarPrograms() {}
  getUniforms() {}
  moveLayer(t, e) {
    let r,
      o = this.head,
      i
    if (t == 0) (r = this.head), (this.head = r.next)
    else {
      for (let a = 0; a < t; a++) (i = o), (o = o.next)
      ;(i.next = o.next), (r = o)
    }
    if (((o = this.head), (i = void 0), e == 0)) (r.next = this.head), (this.head = r)
    else {
      for (let a = 0; a < e - 1; a++) o = o.next
      ;(r.next = o == null ? void 0 : o.next), (o.next = r)
    }
    let s = this._layerNodes.splice(t, 1)[0]
    this._layerNodes.splice(e, 0, s),
      (this.uuid = _r.generateUUID()),
      this.blendColors(),
      this.blendAfterColors()
  }
  updateLayerUniform() {
    ;(this.uuid = _r.generateUUID()), this.blendColors(), this.blendAfterColors()
  }
  copy(t) {
    ;(this.needsUpdate = !1),
      (this.layerCount = t.layerCount),
      (this._layerNodes = []),
      (this.layerCount = 0),
      (this.head = void 0),
      this.rebuildLayerNodes(this.head, t.head)
    let e = t.head,
      r = this.head
    for (; e.next != null; ) this.rebuildLayerNodes(r, e.next), (r = r.next), (e = e.next)
    return (
      (this.id = t.id),
      (this.uuid = t.uuid),
      this.blendColors(),
      this.blendAfterColors(),
      this.blendPositions(),
      this
    )
  }
  createLightLayer(t) {
    let e = new te(t.alpha),
      r = new be(t.mode)
    ;(this._material.shadingAlpha = e),
      (this._material.shadingBlend = r),
      this._layerNodes.push({ id: t.id, type: 'light', alpha: e, mode: r })
    let o = new We(t.id, void 0, { type: 'light', alpha: e, mode: r })
    if (this.head === void 0) this.head = o
    else {
      let i = this.head
      for (; i.next != null; ) i = i.next
      i.next = o
    }
    return this.attachLightNodes(this.getLightLayer()), o
  }
  rebuildLayerNodes(t, e, r = !1) {
    if (e.type === 'light') {
      let o = r ? e.uniforms[`f${e.id}_alpha`] : new te(e.uniforms[`f${e.id}_alpha`].value),
        i = r ? e.uniforms[`f${e.id}_mode`] : new be(e.uniforms[`f${e.id}_mode`].value)
      ;(this._material.shadingAlpha = o),
        (this._material.shadingBlend = i),
        this._layerNodes.push({ id: e.id, type: 'light', alpha: o, mode: i }),
        this.head === void 0
          ? (this.head = new We(e.id, e.uuid, { type: 'light', alpha: o, mode: i }))
          : t && (t.next = new We(e.id, e.uuid, { type: 'light', alpha: o, mode: i })),
        this.attachLightNodes(e)
    } else {
      let o = { type: e.type, id: e.id }
      for (let i in e.uniforms) {
        let s = e.getName(i)
        if (!s) continue
        let a = `f${e.id}_${s}`
        if (Array.isArray(e.uniforms[a].value))
          o[s] = e.uniforms[a].value.map((l) => (l.clone && !r ? l.clone() : l))
        else {
          let l = e.uniforms[a].value
          if (s === 'transmissionDepthMap') {
            o[s] = l
            continue
          }
          l != null && (o[s] = l.clone && !r && !l.isRenderTargetTexture ? l.clone() : l)
        }
      }
      this.addLayer(o)
    }
  }
  attachLightNodes(t) {
    var o, i, s, a, l, c, h, p, u, m, f
    let e = {},
      r = this.getLightLayer()
    switch (this._material.userData.category) {
      case 'Lambert':
        e.emissive = new _e(
          (i = (o = t == null ? void 0 : t.getValue('emissive')) == null ? void 0 : o.clone()) !=
          null
            ? i
            : 0
        )
        break
      case 'Phong':
        ;(e.shininess = new te(
          (s = t == null ? void 0 : t.getValue('shininess')) != null ? s : 30
        )),
          (e.specular = new _e(
            (l = (a = t == null ? void 0 : t.getValue('specular')) == null ? void 0 : a.clone()) !=
            null
              ? l
              : 1118481
          ))
        break
      case 'Toon':
        ;(e.shininess = new te(
          (c = t == null ? void 0 : t.getValue('shininess')) != null ? c : 30
        )),
          (e.specular = new _e(
            (p = (h = t == null ? void 0 : t.getValue('specular')) == null ? void 0 : h.clone()) !=
            null
              ? p
              : 1118481
          ))
        break
      case 'Physical':
        ;(e.roughness = new te(
          (u = t == null ? void 0 : t.getValue('roughness')) != null ? u : 0.3
        )),
          (e.metalness = new te(
            (m = t == null ? void 0 : t.getValue('metalness')) != null ? m : 0
          )),
          (e.reflectivity = new te(
            (f = t == null ? void 0 : t.getValue('reflectivity')) != null ? f : 0.5
          ))
        break
      default:
        break
    }
    Object.keys(e).forEach((g) => {
      ;(this._material[g] = e[g]), (r.uniforms[`f${r.id}_${g}`] = e[g])
    })
  }
  clone(t) {
    return new wt(t).copy(this)
  }
  toJSON(t) {
    return { id: this.id, uuid: this.uuid, head: this.head.toJSON(t) }
  }
  fromJSON(t, e, r) {
    let o = new We(t.head.id, void 0, { type: t.head.type }).fromJSON(t.head, e),
      i = t.head.next,
      s = o
    for (; i != null; )
      (s.next = new We(i.id, void 0, { type: i.type }).fromJSON(i, e)), (i = i.next), (s = s.next)
    ;(this._layerNodes = []), (this.head = void 0), this.rebuildLayerNodes(this.head, o, !0)
    let a = o
    for (s = this.head; a.next != null; )
      this.rebuildLayerNodes(s, a.next, !0), (s = s.next), (a = a.next)
    return (
      (this._material = r),
      (this.id = t.id),
      (this.uuid = t.uuid),
      this.blendColors(),
      this.blendAfterColors(),
      this.blendPositions(),
      this
    )
  }
  getLightLayer() {
    var e
    let t = this.head
    for (; t !== void 0 && t.type !== 'light'; ) t = (e = t.next) != null ? e : t
    return t
  }
  dispose() {
    let t = this.head
    for (this._layerNodes = [], this.layerCount = 0; t !== void 0; )
      t.hasOwnProperty('dispose') === !0 && t.dispose(), (t = t.next)
    this.head = void 0
  }
  _createLayer(t) {
    var r,
      o,
      i,
      s,
      a,
      l,
      c,
      h,
      p,
      u,
      m,
      f,
      g,
      w,
      y,
      b,
      A,
      N,
      v,
      k,
      L,
      d,
      I,
      x,
      C,
      T,
      P,
      $,
      J,
      ie,
      ue,
      ce,
      ve,
      F,
      G,
      B,
      z,
      D,
      R,
      Y,
      Z,
      j,
      V,
      E,
      U,
      ne,
      q,
      W,
      K,
      X,
      Q,
      se,
      oe,
      he,
      Ge,
      ge,
      $e,
      Te,
      ht,
      Lt,
      Cr,
      yt,
      Tr,
      ao,
      lo,
      ke,
      gt,
      _t,
      En,
      _n,
      Gn,
      zn,
      Rn,
      Fn,
      Ut,
      Gi,
      pt,
      Po,
      Vn,
      co
    let e = t.type
    switch (e) {
      case 'color': {
        let xe = new _e((r = t.color) != null ? r : 5855577),
          Ce = new te((o = t.alpha) != null ? o : 1),
          Se = new Ee('alpha / clamp(alpha + accumAlpha, 0.00001, 1.0 )', 'f')
        Se.keywords.alpha = Ce
        let we = new be((i = t.mode) != null ? i : 0)
        return (
          (xe.alpha = Ce),
          {
            layer: new We(t.id, t.uuid, { type: e, color: xe, alpha: Ce, calpha: Se, mode: we }),
            color: xe,
            alpha: Se,
            mode: we,
          }
        )
      }
      case 'texture': {
        let xe = (s = t.texture) != null ? s : new yr(),
          Ce = xe.matrix
        t.mat && Ce.copy(t.mat), (xe.needsUpdate = !0)
        let Se = new te((a = t.crop) != null ? a : 0),
          we = new be((l = t.projection) != null ? l : 0),
          Me = new be((c = t.axis) != null ? c : 0),
          Be = new be((h = t.side) != null ? h : 0),
          ze = new vt(t.size ? new Qr(t.size[0], t.size[1]) : new Qr(100, 100)),
          je = new te((p = t.alpha) != null ? p : 1),
          De = new be((u = t.mode) != null ? u : 0),
          He = new Mt(xe),
          st = new St(
            (m = t.textureSize) != null
              ? m
              : new eo(xe.image ? xe.image.width : 0, xe.image ? xe.image.height : 0)
          ),
          Gt = new dn(He, st, Se, we, Me, Be, ze, je, De),
          Zt = new Ee(Gt.calpha, 'f')
        return {
          layer: new We(t.id, t.uuid, {
            type: e,
            texture: He,
            textureSize: st,
            crop: Se,
            projection: we,
            axis: Me,
            side: Be,
            size: ze,
            mat: Gt.mat,
            alpha: je,
            calpha: Zt,
            mode: De,
          }),
          color: Gt,
          alpha: Zt,
          mode: De,
        }
      }
      case 'matcap': {
        let xe = (f = t.texture) != null ? f : new yr()
        xe.needsUpdate = !0
        let Ce = new te((g = t.alpha) != null ? g : 1),
          Se = new Mt(xe),
          we = new be((w = t.mode) != null ? w : 0),
          Me = new Cn(Se, Ce, we),
          Be = new Ee(Me.calpha, 'f')
        return {
          layer: new We(t.id, t.uuid, { type: e, texture: Se, alpha: Ce, calpha: Be, mode: we }),
          color: Me,
          alpha: Be,
          mode: we,
        }
      }
      case 'fresnel': {
        let xe = new _e((y = t.color) != null ? y : 16777215),
          Ce = new te((b = t.bias) != null ? b : 0.1),
          Se = new te((A = t.scale) != null ? A : 1),
          we = new te((N = t.intensity) != null ? N : 2),
          Me = new te((v = t.factor) != null ? v : 1),
          Be = new te((k = t.alpha) != null ? k : 1),
          ze = new be((L = t.mode) != null ? L : 0),
          je = new fn(xe, Ce, Se, we, Me, Be, ze),
          De = new Ee(je.calpha, 'f')
        return {
          layer: new We(t.id, t.uuid, {
            type: e,
            color: xe,
            bias: Ce,
            scale: Se,
            intensity: we,
            factor: Me,
            alpha: Be,
            calpha: De,
            mode: ze,
          }),
          color: je,
          alpha: De,
          mode: ze,
        }
      }
      case 'rainbow': {
        let xe = new te((d = t.filmThickness) != null ? d : 30),
          Ce = new te((I = t.movement) != null ? I : 0),
          Se = new St((x = t.wavelengths) != null ? x : new eo(0, 0, 0)),
          we = new te((C = t.noiseStrength) != null ? C : 0),
          Me = new te((T = t.noiseScale) != null ? T : 1),
          Be = new St((P = t.offset) != null ? P : new eo(0, 0, 0)),
          ze = new te(($ = t.alpha) != null ? $ : 1),
          je = new gn(xe, Ce, Se, we, Me, Be, ze),
          De = new Ee(je.calpha, 'f'),
          He = new be((J = t.mode) != null ? J : 0)
        return {
          layer: new We(t.id, t.uuid, {
            type: e,
            filmThickness: xe,
            movement: Ce,
            wavelengths: Se,
            noiseStrength: we,
            noiseScale: Me,
            offset: Be,
            alpha: ze,
            calpha: De,
            mode: He,
          }),
          color: je,
          alpha: De,
          mode: He,
        }
      }
      case 'transmission': {
        let xe = new te((ie = t.thickness) != null ? ie : 10),
          Ce = new te((ue = t.ior) != null ? ue : 1.5),
          Se = new te((ce = t.roughness) != null ? ce : 0.5),
          we = new vt((ve = t.transmissionSamplerSize) != null ? ve : new Qr(2048, 2048)),
          Me = (F = t.transmissionSamplerMap) != null ? F : new yr(),
          Be = (G = t.transmissionDepthMap) != null ? G : new yr(),
          ze = new Mt(Me),
          je = new Mt(Be),
          De = window.innerWidth,
          He = window.innerHeight,
          st = De >= He ? new vt(He / De, 1) : new vt(1, De / He),
          Gt = new te((B = t.alpha) != null ? B : 1),
          Zt = new xn(xe, Ce, Se, we, ze, je, st, Gt),
          Nr = new Ee(Zt.calpha, 'f'),
          Vr = new be((z = t.mode) != null ? z : 0)
        return {
          layer: new We(t.id, t.uuid, {
            type: e,
            thickness: xe,
            ior: Ce,
            roughness: Se,
            transmissionSamplerSize: we,
            transmissionSamplerMap: ze,
            transmissionDepthMap: je,
            aspectRatio: st,
            alpha: Gt,
            calpha: Nr,
            mode: Vr,
          }),
          color: Zt,
          alpha: Nr,
          mode: Vr,
        }
      }
      case 'depth': {
        let xe = new be((D = t.gradientType) != null ? D : 0),
          Ce = new un((R = t.smooth) != null ? R : !1),
          Se = new te((Y = t.near) != null ? Y : 50),
          we = new te((Z = t.far) != null ? Z : 200),
          Me = new te((j = t.isVector) != null ? j : 1),
          Be = new te((V = t.isWorldSpace) != null ? V : 0),
          ze = new St((E = t.origin) != null ? E : new eo()),
          je = new St((U = t.direction) != null ? U : new eo()),
          De = new be((ne = t.num) != null ? ne : 0),
          He
        t.colors
          ? (He = new wo(De.value + 1, t.colors))
          : ((He = new wo(De.value + 1, new aa(0, 0, 0, 1))), (He.value[1] = new aa(1, 1, 1, 1)))
        let st
        t.steps ? (st = new Lo(t.steps.length, t.steps)) : ((st = new Lo(10, 1)), (st.value[0] = 0))
        let Gt = new te((q = t.alpha) != null ? q : 1),
          Zt = new be((W = t.mode) != null ? W : 0),
          Nr = new Ln(xe, Ce, Se, we, Me, Be, ze, je, He, st, De, Gt),
          Vr = new Ee(Nr.calpha, 'f')
        return {
          layer: new We(t.id, t.uuid, {
            type: e,
            gradientType: xe,
            smooth: Ce,
            near: Se,
            far: we,
            isVector: Me,
            isWorldSpace: Be,
            origin: ze,
            direction: je,
            colors: He,
            steps: st,
            num: De,
            alpha: Gt,
            calpha: Vr,
            mode: Zt,
          }),
          color: Nr,
          alpha: Vr,
          mode: Zt,
        }
      }
      case 'noise': {
        let xe = new te((K = t.scale) != null ? K : 1),
          Ce = new St((X = t.size) != null ? X : new eo(100, 100, 100)),
          Se = new te((Q = t.move) != null ? Q : 1),
          we = new vt((se = t.fA) != null ? se : new Qr(1.7, 9.2)),
          Me = new vt((oe = t.fB) != null ? oe : new Qr(8.3, 2.8)),
          Be = new vt((he = t.distortion) != null ? he : new Qr(1, 1)),
          ze = new Er(t.colorA),
          je = new Er(t.colorB),
          De = new Er(t.colorC),
          He = new Er(t.colorD),
          st = new te((Ge = t.alpha) != null ? Ge : 1),
          Gt = new be((ge = t.mode) != null ? ge : 0),
          Zt = new be(($e = t.noiseType) != null ? $e : 0),
          Nr = new Sn(xe, Ce, Se, we, Me, Be, ze, je, De, He, st, Zt),
          Vr = new Ee(Nr.calpha, 'f')
        return {
          layer: new We(t.id, t.uuid, {
            type: e,
            scale: xe,
            size: Ce,
            move: Se,
            fA: we,
            fB: Me,
            distortion: Be,
            colorA: ze,
            colorB: je,
            colorC: De,
            colorD: He,
            alpha: st,
            calpha: Vr,
            mode: Gt,
            noiseType: Zt,
          }),
          color: Nr,
          alpha: Vr,
          mode: Gt,
        }
      }
      case 'normal': {
        let xe = new St((Te = t.cnormal) != null ? Te : new eo(1, 1, 1)),
          Ce = new te((ht = t.alpha) != null ? ht : 1),
          Se = new be((Lt = t.mode) != null ? Lt : 0),
          we = new bn(xe, Ce),
          Me = new Ee('alpha / clamp(alpha + accumAlpha, 0.00001, 1.0 )', 'f')
        return (
          (Me.keywords.alpha = Ce),
          {
            layer: new We(t.id, t.uuid, { type: e, cnormal: xe, alpha: Ce, calpha: Me, mode: Se }),
            color: we,
            alpha: Me,
            mode: Se,
          }
        )
      }
      case 'gradient': {
        let xe = new be((Cr = t.gradientType) != null ? Cr : 0),
          Ce = new un((yt = t.smooth) != null ? yt : !1),
          Se
        t.colors
          ? (Se = new wo(t.colors.length, t.colors))
          : ((Se = new wo(10, new aa(0, 0, 0, 1))), (Se.value[1] = new aa(1, 1, 1, 1)))
        let we
        t.steps ? (we = new Lo(t.steps.length, t.steps)) : ((we = new Lo(10, 1)), (we.value[0] = 0))
        let Me = new vt((Tr = t.offset) != null ? Tr : new Qr(0, 0)),
          Be = new vt((ao = t.morph) != null ? ao : new Qr(0, 0)),
          ze = new te((lo = t.angle) != null ? lo : 0),
          je = new te((ke = t.alpha) != null ? ke : 1),
          De = new be((gt = t.mode) != null ? gt : 0),
          He = new vn(xe, Ce, Se, we, Me, Be, ze, je),
          st = new Ee(He.calpha, 'f')
        return {
          layer: new We(t.id, t.uuid, {
            type: e,
            gradientType: xe,
            smooth: Ce,
            colors: Se,
            steps: we,
            offset: Me,
            morph: Be,
            angle: ze,
            alpha: je,
            calpha: st,
            mode: De,
          }),
          color: He,
          alpha: st,
          mode: De,
        }
      }
      case 'displace': {
        let xe = new be((_t = t.displacementType) != null ? _t : 0)
        if (xe.value === 0) {
          let Ce = new St((En = t.offset) != null ? En : new eo(0, 0, 0)),
            Se = new te((_n = t.scale) != null ? _n : 10),
            we = new te((Gn = t.intensity) != null ? Gn : 8),
            Me = new te((zn = t.movement) != null ? zn : 1),
            Be = new te((Rn = t.alpha) != null ? Rn : 1),
            ze = new be((Fn = t.mode) != null ? Fn : 0),
            je = new be((Ut = t.noiseType) != null ? Ut : 0),
            De = new fi(xe, we, Me, Ce, Se, je)
          return {
            layer: new We(t.id, t.uuid, {
              displacementType: xe,
              type: e,
              offset: Ce,
              scale: Se,
              intensity: we,
              movement: Me,
              alpha: Be,
              mode: ze,
              noiseType: je,
            }),
            position: De,
          }
        } else if (xe.value === 1) {
          let Ce = (Gi = t.texture) != null ? Gi : new yr(),
            Se = Ce.matrix
          t.mat && Se.copy(t.mat), (Ce.needsUpdate = !0)
          let we = new te((pt = t.intensity) != null ? pt : 8),
            Me = new Mt(Ce),
            Be = new te((Po = t.crop) != null ? Po : 0),
            ze = new te((Vn = t.alpha) != null ? Vn : 1),
            je = new be((co = t.mode) != null ? co : 0),
            De = new fi(xe, we, Me, Be)
          return {
            layer: new We(t.id, t.uuid, {
              displacementType: xe,
              type: e,
              intensity: we,
              texture: Me,
              crop: Be,
              mat: De.mat,
              alpha: ze,
              mode: je,
            }),
            position: De,
          }
        }
        return {}
      }
    }
    return {}
  }
  blendColors() {
    let t = this._layerNodes.findIndex((r) => r.type === 'color'),
      e = this._layerNodes.findIndex((r) => r.type === 'light')
    if (t !== -1 && t < e) {
      let r = this._layerNodes[t].color
      for (let o = t + 1; o < e; ++o) {
        let i = this._layerNodes[o]
        i.type === 'color' && (r = new wn(r, i.color, i.alpha, i.mode))
      }
      this._material.color = r
    } else this._material.color = void 0
  }
  blendAfterColors() {
    let t = new Ee('outgoingLight', 'f'),
      e = this._layerNodes.findIndex((r) => r.type === 'light')
    if (this._layerNodes.length > e + 1) {
      for (let r = e + 1; r < this._layerNodes.length; ++r) {
        let o = this._layerNodes[r]
        o.type === 'color' && (t = new wn(t, o.color, o.alpha, o.mode))
      }
      'afterColor' in this._material && (this._material.afterColor = t)
    } else 'afterColor' in this._material && (this._material.afterColor = void 0)
  }
  blendPositions() {
    let t = this._layerNodes.filter((e) => e.type === 'position')
    if (t.length > 0) {
      let e = t[0].position
      for (let r = 1; r < t.length; ++r)
        t[r] &&
          ((e = new Bt(e, t[r].position, Bt.ADD)),
          (e = new Bt(e, new te(0.5).setReadonly(!0), Bt.MUL)))
      this._material.position = e
    } else this._material.position = void 0
  }
  cleanupChangedLayer(t) {
    switch (((this._layerNodes = this._layerNodes.filter((e) => e.id !== t.id)), t.type)) {
      case 'displace': {
        this.blendPositions()
        break
      }
      default: {
        this.blendColors(), this.blendAfterColors()
        break
      }
    }
  }
}
var Vt = class extends uS {
  constructor(e, r, o) {
    super(o)
    this.isNodeMaterial = !0
    this.type = 'NodeMaterial'
    this.wireframeLinecap = ''
    this.wireframeLinejoin = ''
    this.uniformsBackup = {}
    this.userData = { type: '', category: '', nodeType: '' }
    ;(this.fog = !0),
      (this.vertex = e != null ? e : new pn(new dt(dt.PROJECTION))),
      (this.fragment = r != null ? r : new pn(new _e(5855577))),
      (this.updaters = []),
      (this.isDetached = !0),
      (this.dithering = !0),
      (this.onBeforeCompile = this._onBeforeCompile)
  }
  getDefines() {
    return this.defines
  }
  getUniforms() {
    return this.uniforms
  }
  getVertexShader() {
    return this.vertexShader
  }
  getFragmentShader() {
    return this.fragmentShader
  }
  _onBeforeCompile(e, r) {
    this.build({ renderer: r }),
      (e.defines = this.defines),
      (e.uniforms = this.uniforms),
      (e.vertexShader = this.vertexShader),
      (e.fragmentShader = this.fragmentShader),
      (e.extensionDerivatives = this.extensions.derivatives === !0),
      (e.extensionFragDepth = this.extensions.fragDepth === !0),
      (e.extensionDrawBuffers = this.extensions.drawBuffers === !0),
      (e.extensionShaderTextureLOD = this.extensions.shaderTextureLOD === !0)
  }
  _getLayerStack(e) {
    let r = new wt(this)
    return (
      e &&
        (async () => {
          for (; e.image === void 0; ) await new Promise((o) => requestAnimationFrame(o))
          r.addLayerAt(1, { type: 'texture', texture: e }), this.dispose()
        })(),
      r
    )
  }
  clampUniformsForPreview(e, r) {
    let o = (i, s, a) => Math.min(Math.max(i, s), a)
    if (this.userData.layers) {
      for (let i of this.userData.layers.getLayers())
        if (i.type == 'displace') {
          this.uniformsBackup[`f${i.id}_intensity`] = i.uniforms[`f${i.id}_intensity`].value
          let s = o(i.uniforms[`f${i.id}_intensity`].value, e, r)
          i.uniforms[`f${i.id}_intensity`].value = s
        }
    }
  }
  restoreClampedUniforms() {
    if (this.userData.layers)
      for (let e of this.userData.layers.getLayers())
        e.type == 'displace' &&
          (e.uniforms[`f${e.id}_intensity`].value = this.uniformsBackup[`f${e.id}_intensity`])
  }
  customProgramCacheKey() {
    return this.getHash()
  }
  updateFrame(e) {
    for (let r = 0; r < this.updaters.length; ++r) e.updateNode(this.updaters[r])
  }
  build(e) {
    var o
    e = e != null ? e : {}
    let r = (o = e.builder) != null ? o : new sa()
    return (
      r.setMaterial(this, e.renderer),
      r.build(this.vertex, this.fragment),
      (this.vertexShader = r.getCode('vertex')),
      (this.fragmentShader = r.getCode('fragment')),
      (this.defines = r.defines),
      (this.uniforms = r.uniforms),
      (this.extensions = r.extensions),
      (this.updaters = r.updaters),
      (this.fog = r.requires.fog),
      (this.lights = r.requires.lights),
      (this.transparent = r.requires.transparent || this.blending > pS),
      this
    )
  }
  getHash() {
    let e = '{'
    return (
      (e += '"vertex":' + this.vertex.getHash() + ','),
      (e += '"fragment":' + this.fragment.getHash()),
      (e += '}'),
      e
    )
  }
  copy(e) {
    let r = this.uuid
    for (let o in e) this[o] = e[o]
    return (
      (this.uuid = r),
      e.userData !== void 0 && (this.userData = JSON.parse(JSON.stringify(e.userData))),
      this
    )
  }
  toJSON(e) {
    let r = this.userData.layers
    this.userData.layers = void 0
    let o = super.toJSON(e)
    return (
      (o.type = 'ShaderMaterial'),
      (o.userData = {
        type: this.userData.type,
        category: this.userData.category,
        nodeType: this.type,
        layers: r.toJSON(e),
      }),
      (o.vertex = this.vertex.toJSON(e).uuid),
      (o.fragment = this.fragment.toJSON(e).uuid),
      delete o.vertexShader,
      delete o.fragmentShader,
      delete o.color,
      delete o.shininess,
      delete o.specular,
      delete o.roughness,
      delete o.metalness,
      delete o.uniforms,
      e && !e.materials[this.uuid] && (e.materials[this.uuid] = o),
      (this.userData.layers = r),
      o
    )
  }
  fromJSON(e, r) {
    var o
    ;(this.defines = (o = e.defines) != null ? o : {}),
      (this.depthFunc = e.depthFunc),
      (this.depthWrite = e.depthWrite),
      (this.side = e.side !== void 0 ? e.side : dS),
      (this.transparent = e.transparent),
      (this.wireframeLinecap = e.wireframeLinecap),
      (this.wireframeLinejoin = e.wireframeLinejoin),
      (this.flatShading = e.flatShading),
      (this.wireframe = e.wireframe),
      this.userData.layers.fromJSON(e.userData.layers, r, this)
  }
}
Object.defineProperties(Vt.prototype, {
  properties: {
    get: function () {
      return this.fragment.properties
    },
  },
  needsUpdate: {
    set: function (n) {
      n === !0 && this.version++, (this.needsCompile = n)
    },
    get: function () {
      return this.needsCompile
    },
  },
})
import { UniformsLib as mS, UniformsUtils as fS } from 'three'
var la = class extends pe {
  constructor() {
    super('basic')
    this.nodeType = 'Basic'
    this.color = new _e(5855577)
  }
  generate(e) {
    let r
    if (e.isShader('vertex')) {
      let o = this.position ? this.position.analyzeAndFlow(e, 'v3', { cache: 'position' }) : void 0
      e.mergeUniform(fS.merge([mS.fog])),
        e.addParsCode(
          [
            'varying vec3 vViewPosition;',
            '#include <fog_pars_vertex>',
            '#include <normal_pars_vertex>',
          ].join(`
`)
        )
      let i = [
        '#include <beginnormal_vertex>',
        `
				#if !defined( USE_LAYER_DISPLACE )
					#include <defaultnormal_vertex>
				#endif

				vec3 displaced_position = position;
				vec3 displaced_normal = normal;

				#if defined( USE_LAYER_DISPLACE )
					vec3 transformed;
					vec3 transformedNormal;
				#endif
				`,
        '#include <normal_vertex>',
        `
				#if !defined( USE_LAYER_DISPLACE )
					#include <begin_vertex>
				#endif /* !USE_LAYER_DISPLACE */
				`,
      ]
      o && i.push(o.code, o.result ? 'displaced_position = ' + o.result + ';' : ''),
        i.push(
          'transformed = displaced_position;',
          'transformedNormal = normalMatrix * displaced_normal;',
          '#ifndef FLAT_SHADED',
          '	vNormal = transformedNormal;',
          '#endif'
        ),
        i.push(
          '#include <project_vertex>',
          '#include <fog_vertex>',
          '#include <clipping_planes_vertex>',
          '	vViewPosition = - mvPosition.xyz;',
          '#include <worldpos_vertex>'
        ),
        (r = i.join(`
`))
    } else {
      this.color === void 0 && (this.color = new _e(5855577)),
        this.color.analyze(e, { slot: 'color' }),
        this.alpha && this.alpha.analyze(e),
        this.afterColor && this.afterColor.analyze(e, { slot: 'afterColor' })
      let o = this.color.flow(e, 'c', { slot: 'color' }),
        i = this.alpha ? this.alpha.flow(e, 'f') : void 0,
        s = this.afterColor ? this.afterColor.flow(e, 'c', { slot: 'afterColor' }) : void 0
      ;(e.requires.transparent = i !== void 0),
        e.addParsCode(
          [
            '#include <fog_pars_fragment>',
            '#include <dithering_pars_fragment>',
            'varying vec3 vViewPosition;',
            '#include <normal_pars_fragment>',
          ].join(`
`)
        )
      let a = ['#include <normal_fragment_begin>', o.code]
      i &&
        a.push(
          i.code,
          '#ifdef ALPHATEST',
          ' if ( ' + i.result + ' <= ALPHATEST ) discard;',
          '#endif'
        ),
        s
          ? a.push(
              s.code,
              `vec3 outgoingLight = ${o.result};`,
              `vec3 finalColor = spe_blend(outgoingLight, ${s.result}, 1.0, SPE_BLENDING_NORMAL);`
            )
          : a.push(`vec3 finalColor = ${o.result};`),
        i
          ? a.push(`gl_FragColor = vec4( finalColor, accumAlpha * ${i.result} );`)
          : a.push('gl_FragColor = vec4(' + o.result + ', 1.0 );'),
        a.push('#include <fog_fragment>', '#include <dithering_fragment>'),
        (r = a.join(`
`))
    }
    return r
  }
  copy(e) {
    return (
      super.copy(e),
      e.color && (this.color = e.color.clone()),
      e.position && (this.position = e.position.clone()),
      e.alpha && (this.alpha = e.alpha.clone()),
      e.afterColor && (this.afterColor = e.afterColor.clone()),
      e.shadingAlpha && (this.shadingAlpha = e.shadingAlpha.clone()),
      e.shadingBlend && (this.shadingBlend = e.shadingBlend.clone()),
      this
    )
  }
}
var ca = class extends Vt {
  constructor(e = new la(), r) {
    super(e, e, r)
    ;(this.type = 'BasicNodeMaterial'), (this.fragment = e)
  }
  get color() {
    return this.fragment.color
  }
  set color(e) {
    this.fragment.color = e
  }
  get afterColor() {
    return this.fragment.afterColor
  }
  set afterColor(e) {
    this.fragment.afterColor = e
  }
  get alpha() {
    return this.fragment.alpha
  }
  set alpha(e) {
    this.fragment.alpha = e
  }
  get shadingAlpha() {
    return this.fragment.shadingAlpha
  }
  set shadingAlpha(e) {
    this.fragment.shadingAlpha = e
  }
  get shadingBlend() {
    return this.fragment.shadingBlend
  }
  set shadingBlend(e) {
    this.fragment.shadingBlend = e
  }
  get position() {
    return this.fragment.position
  }
  set position(e) {
    this.fragment.position = e
  }
}
var mt = class extends ca {
  constructor(t, e, r) {
    super(e, t),
      (this.userData.type = 'BasicMaterial'),
      (this.userData.category = 'Basic'),
      (this.userData.layers = r != null ? r : this._getLayerStack(t == null ? void 0 : t.map))
  }
  get layersList() {
    return this.userData.layers
  }
  set layersList(t) {
    this.userData.layers = t
  }
  equals(t) {
    return (
      this.userData.type === t.userData.type && this.userData.layers.uuid == t.userData.layers.uuid
    )
  }
  copy(t) {
    if (t.userData.layers !== void 0 && t.userData.layers instanceof wt) {
      let e = t.userData.layers,
        r = t.fragment
      super.copy(t)
      let o = r.clone()
      ;(this.fragment = o), (this.vertex = o)
      let i = e.clone(this)
      this.userData.layers = i
    } else super.copy(t)
    return this
  }
  static fromJSON(t, e, r) {
    let o = r.getNode(e.vertex),
      i = new mt(void 0, o)
    return i.fromJSON(e, r), i
  }
  static fromMaterial(t) {
    let e = new mt(t.map ? { map: t.map } : {}),
      r = e.fragment
    return r.color.value.copy(t.color), (r.alpha.value = t.opacity), e
  }
  dispose() {
    super.dispose()
  }
}
import { UniformsLib as gd, UniformsUtils as yS } from 'three'
var ha = class extends pe {
  constructor() {
    super('phong')
    this.nodeType = 'Phong'
    ;(this.color = new _e(5855577)),
      (this.specular = new _e(1118481)),
      (this.shininess = new te(30)),
      (this.shadingAlpha = new te(1)),
      (this.shadingBlend = new be(0))
  }
  build(e) {
    let r
    if (
      (e.define('PHONG'),
      (e.requires.lights = !0),
      (e.extensions.derivatives = !0),
      e.isShader('vertex'))
    ) {
      let o = this.position ? this.position.analyzeAndFlow(e, 'v3', { cache: 'position' }) : void 0
      e.mergeUniform(yS.merge([gd.fog, gd.lights])),
        e.addParsCode(
          [
            'varying vec3 vViewPosition;',
            '#include <fog_pars_vertex>',
            '#include <normal_pars_vertex>',
            '#include <shadowmap_pars_vertex>',
            '#include <clipping_planes_pars_vertex>',
          ].join(`
`)
        )
      let i = [
        '#include <beginnormal_vertex>',
        `
				#ifndef USE_LAYER_DISPLACE
					#include <defaultnormal_vertex>
				#endif

				vec3 displaced_position = position;
				vec3 displaced_normal = normal;

				#ifdef USE_LAYER_DISPLACE
					vec3 transformed;
					vec3 transformedNormal;
				#endif
				`,
        '#include <normal_vertex>',
        `
				#ifndef USE_LAYER_DISPLACE
					#include <begin_vertex>
				#endif
				`,
      ]
      o && i.push(o.code, o.result ? 'displaced_position = ' + o.result + ';' : ''),
        i.push(
          'transformed = displaced_position;',
          'transformedNormal = normalMatrix * displaced_normal;',
          '#ifndef FLAT_SHADED',
          '    vNormal = transformedNormal;',
          '#endif'
        ),
        i.push(
          '	#include <project_vertex>',
          '	#include <clipping_planes_vertex>',
          '	vViewPosition = - mvPosition.xyz;',
          '	#include <worldpos_vertex>',
          '	#include <shadowmap_vertex>',
          '	#include <fog_vertex>'
        ),
        (r = i.join(`
`))
    } else {
      this.color === void 0 && (this.color = new _e(5855577)),
        this.color.analyze(e, { slot: 'color' }),
        this.specular.analyze(e),
        this.shininess.analyze(e),
        this.shadingAlpha.analyze(e),
        this.shadingBlend.analyze(e),
        this.afterColor && this.afterColor.analyze(e, { slot: 'afterColor' }),
        this.alpha && this.alpha.analyze(e)
      let o = this.color.flow(e, 'c', { slot: 'color' }),
        i = this.specular.flow(e, 'c'),
        s = this.shininess.flow(e, 'f'),
        a = this.shadingAlpha.flow(e, 'f'),
        l = this.shadingBlend.flow(e, 'i'),
        c = this.afterColor ? this.afterColor.flow(e, 'c', { slot: 'afterColor' }) : void 0,
        h = this.alpha ? this.alpha.flow(e, 'f') : void 0
      ;(e.requires.transparent = h !== void 0),
        e.addParsCode(
          [
            'uniform vec3 emissive;',
            '#include <normal_pars_fragment>',
            '#include <fog_pars_fragment>',
            '#include <bsdfs>',
            '#include <lights_pars_begin>',
            '#include <lights_phong_pars_fragment>',
            '#include <shadowmap_pars_fragment>',
            '#include <dithering_pars_fragment>',
          ].join(`
`)
        )
      let p = [
        '#include <normal_fragment_begin>',
        `
				// NOTE: gl_FrontFacing alternative using face normal estimation.
				vec3 viewdx = dFdx(vViewPosition);
				vec3 viewdy = dFdy(vViewPosition);
				vec3 faceNormal = normalize(cross(viewdx,viewdy));
				if (dot(normal, faceNormal) < 0.0) {
					normal *= -1.0;
				}
				`,
        '	BlinnPhongMaterial material;',
      ]
      p.push(
        o.code,
        '	vec3 diffuseColor = ' + o.result + ';',
        '	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );',
        '	vec3 totalEmissiveRadiance = emissive;',
        i.code,
        '	vec3 specular = ' + i.result + ';',
        s.code,
        '	float shininess = max( 0.0001, ' + s.result + ' );',
        '	float specularStrength = 1.0;'
      ),
        h &&
          p.push(
            h.code,
            '#ifdef ALPHATEST',
            'if ( ' + h.result + ' <= ALPHATEST ) discard;',
            '#endif'
          ),
        p.push('material.diffuseColor = diffuseColor;'),
        p.push(
          'material.specularColor = specular;',
          'material.specularShininess = shininess;',
          'material.specularStrength = specularStrength;',
          '#include <lights_fragment_begin>',
          '#include <lights_fragment_end>'
        ),
        p.push(
          'vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;'
        ),
        p.push(`
				if (outgoingLight != diffuseColor) {
					float lightAccu = clamp( length( reflectedLight.directSpecular + reflectedLight.indirectSpecular ), 0.0, 1.0 );
					accumAlpha += ( 1.0 - accumAlpha ) * ${a.result} * lightAccu;
					outgoingLight = spe_blend( diffuseColor, outgoingLight, ${a.result}, ${l.result} );
				}
				`),
        c &&
          p.push(
            c.code,
            `outgoingLight = spe_blend(outgoingLight, ${c.result}, 1.0, SPE_BLENDING_NORMAL);`
          ),
        h
          ? p.push(`gl_FragColor = vec4( outgoingLight, accumAlpha * ${h.result} );`)
          : p.push('gl_FragColor = vec4( outgoingLight, 1.0 );'),
        p.push(
          '#include <encodings_fragment>',
          '#include <fog_fragment>',
          '#include <dithering_fragment>'
        ),
        (r = p.join(`
`))
    }
    return r
  }
  copy(e) {
    return (
      super.copy(e),
      e.color && (this.color = e.color.clone()),
      (this.specular = e.specular.clone()),
      (this.shininess = e.shininess.clone()),
      e.position && (this.position = e.position.clone()),
      e.afterColor && (this.afterColor = e.afterColor.clone()),
      e.alpha && (this.alpha = e.alpha.clone()),
      e.shadingAlpha && (this.shadingAlpha = e.shadingAlpha.clone()),
      e.shadingBlend && (this.shadingBlend = e.shadingBlend.clone()),
      this
    )
  }
}
var pa = class extends Vt {
  constructor(e = new ha(), r) {
    super(e, e, r)
    ;(this.type = 'PhongNodeMaterial'), (this.fragment = e)
  }
  get color() {
    return this.fragment.color
  }
  set color(e) {
    this.fragment.color = e
  }
  get afterColor() {
    return this.fragment.afterColor
  }
  set afterColor(e) {
    this.fragment.afterColor = e
  }
  get alpha() {
    return this.fragment.alpha
  }
  set alpha(e) {
    this.fragment.alpha = e
  }
  get shadingAlpha() {
    return this.fragment.shadingAlpha
  }
  set shadingAlpha(e) {
    this.fragment.shadingAlpha = e
  }
  get shadingBlend() {
    return this.fragment.shadingBlend
  }
  set shadingBlend(e) {
    this.fragment.shadingBlend = e
  }
  get position() {
    return this.fragment.position
  }
  set position(e) {
    this.fragment.position = e
  }
  get specular() {
    return this.fragment.specular
  }
  set specular(e) {
    this.fragment.specular = e
  }
  get shininess() {
    return this.fragment.shininess
  }
  set shininess(e) {
    this.fragment.shininess = e
  }
}
var Pt = class extends pa {
  constructor(t, e, r) {
    super(e, t),
      (this.userData.type = 'PhongMaterial'),
      (this.userData.category = 'Phong'),
      (this.userData.layers = r != null ? r : this._getLayerStack(t == null ? void 0 : t.map))
  }
  get layersList() {
    return this.userData.layers
  }
  set layersList(t) {
    this.userData.layers = t
  }
  equals(t) {
    return (
      this.userData.type === t.userData.type && this.userData.layers.uuid == t.userData.layers.uuid
    )
  }
  copy(t) {
    if (t.userData.layers !== void 0 && t.userData.layers instanceof wt) {
      let e = t.userData.layers,
        r = t.fragment
      super.copy(t)
      let o = r.clone()
      ;(this.fragment = o), (this.vertex = o)
      let i = e.clone(this)
      ;(this.userData.layers = i),
        (o.shadingAlpha.value = r.shadingAlpha.value),
        (o.shadingBlend.value = r.shadingBlend.value)
    } else super.copy(t)
    return this
  }
  static fromJSON(t, e, r) {
    let o = r.getNode(e.vertex),
      i = new Pt(void 0, o)
    return i.fromJSON(e, r), i
  }
  static fromMaterial(t) {
    let e = new Pt(t.map ? { map: t.map } : {}),
      r = e.fragment
    return r.color.value.copy(t.color), (r.alpha.value = t.opacity), e
  }
  dispose() {
    super.dispose()
  }
}
import { UniformsLib as xd, UniformsUtils as gS } from 'three'
var ua = class extends pe {
  constructor() {
    super('lambert')
    this.nodeType = 'Lambert'
    ;(this.color = new _e(5855577)),
      (this.emissive = new _e(0)),
      (this.emissiveIntensity = new te(1)),
      (this.shadingAlpha = new te(1)),
      (this.shadingBlend = new be(0))
  }
  build(e) {
    let r
    if (
      (e.define('LAMBERT'),
      (e.requires.lights = !0),
      (e.extensions.derivatives = !0),
      e.isShader('vertex'))
    ) {
      let o = this.position ? this.position.analyzeAndFlow(e, 'v3', { cache: 'position' }) : void 0
      e.mergeUniform(gS.merge([xd.fog, xd.lights])),
        e.addParsCode(
          [
            'varying vec3 vViewPosition;',
            'varying vec3 vLightFront;',
            'varying vec3 vIndirectFront;',
            '#ifndef DOUBLE_SIDED',
            '   #define DOUBLE_SIDED',
            '#endif',
            '#ifdef DOUBLE_SIDED',
            '	varying vec3 vLightBack;',
            '	varying vec3 vIndirectBack;',
            '#endif',
            '#include <bsdfs>',
            '#include <lights_pars_begin>',
            '#include <color_pars_vertex>',
            '#include <fog_pars_vertex>',
            '#include <normal_pars_vertex>',
            '#include <shadowmap_pars_vertex>',
            '#include <clipping_planes_pars_vertex>',
          ].join(`
`)
        )
      let i = [
        '#include <beginnormal_vertex>',
        `
				#ifndef USE_LAYER_DISPLACE
					#include <defaultnormal_vertex>
				#endif

				vec3 displaced_position = position;
				vec3 displaced_normal = normal;

				#ifdef USE_LAYER_DISPLACE
					vec3 transformed;
					vec3 transformedNormal;
				#endif
				`,
        '#include <normal_vertex>',
        `
				#ifndef USE_LAYER_DISPLACE
					#include <begin_vertex>
				#endif
				`,
      ]
      o && i.push(o.code, o.result ? 'displaced_position = ' + o.result + ';' : ''),
        i.push(
          'transformed = displaced_position;',
          'transformedNormal = normalMatrix * displaced_normal;',
          '#ifndef FLAT_SHADED',
          '    vNormal = transformedNormal;',
          '#endif'
        ),
        i.push(
          '	#include <project_vertex>',
          '	#include <clipping_planes_vertex>',
          '	vViewPosition = - mvPosition.xyz;',
          '	#include <worldpos_vertex>',
          `
					vec3 diffuse = vec3( 1.0 );
					GeometricContext geometry;
					geometry.position = mvPosition.xyz;
					geometry.normal = normalize( transformedNormal );
					geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
					GeometricContext backGeometry;
					backGeometry.position = geometry.position;
					backGeometry.normal = -geometry.normal;
					backGeometry.viewDir = geometry.viewDir;
					vLightFront = vec3( 0.0 );
					vIndirectFront = vec3( 0.0 );
					#ifdef DOUBLE_SIDED
						vLightBack = vec3( 0.0 );
						vIndirectBack = vec3( 0.0 );
					#endif
					IncidentLight directLight;
					float dotNL;
					vec3 directLightColor_Diffuse;
					vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
					vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
					#ifdef DOUBLE_SIDED
						vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
						vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
					#endif
					#if NUM_POINT_LIGHTS > 0
						#pragma unroll_loop_start
						for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
							getPointLightInfo( pointLights[ i ], geometry, directLight );
							dotNL = dot( geometry.normal, directLight.direction );
							directLightColor_Diffuse = directLight.color;
							vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
							#ifdef DOUBLE_SIDED
								vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
							#endif
						}
						#pragma unroll_loop_end
					#endif
					#if NUM_SPOT_LIGHTS > 0
						#pragma unroll_loop_start
						for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
							getSpotLightInfo( spotLights[ i ], geometry, directLight );
							dotNL = dot( geometry.normal, directLight.direction );
							directLightColor_Diffuse = directLight.color;
							vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
							#ifdef DOUBLE_SIDED
								vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
							#endif
						}
						#pragma unroll_loop_end
					#endif
					#if NUM_DIR_LIGHTS > 0
						#pragma unroll_loop_start
						for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
							getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
							dotNL = dot( geometry.normal, directLight.direction );
							directLightColor_Diffuse = directLight.color;
							vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
							#ifdef DOUBLE_SIDED
								vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
							#endif
						}
						#pragma unroll_loop_end
					#endif
					#if NUM_HEMI_LIGHTS > 0
						#pragma unroll_loop_start
						for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
							vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
							#ifdef DOUBLE_SIDED
								vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
							#endif
						}
						#pragma unroll_loop_end
					#endif
				`,
          '	#include <shadowmap_vertex>',
          '	#include <fog_vertex>'
        ),
        (r = i.join(`
`))
    } else {
      this.color === void 0 && (this.color = new _e(5855577)),
        this.color.analyze(e, { slot: 'color' }),
        this.shadingAlpha.analyze(e),
        this.shadingBlend.analyze(e),
        this.afterColor && this.afterColor.analyze(e, { slot: 'afterColor' }),
        this.alpha && this.alpha.analyze(e)
      let o = this.color.flow(e, 'c', { slot: 'color' }),
        i = this.emissive.flow(e, 'c', { slot: 'emissive' }),
        s = this.emissiveIntensity.flow(e, 'f', { slot: 'emissive' }),
        a = this.shadingAlpha.flow(e, 'f'),
        l = this.shadingBlend.flow(e, 'i'),
        c = this.afterColor ? this.afterColor.flow(e, 'c', { slot: 'afterColor' }) : void 0,
        h = this.alpha ? this.alpha.flow(e, 'f') : void 0
      ;(e.requires.transparent = h !== void 0),
        e.addParsCode(
          [
            'varying vec3 vViewPosition;',
            'varying vec3 vLightFront;',
            'varying vec3 vIndirectFront;',
            '#ifndef DOUBLE_SIDED',
            '   #define DOUBLE_SIDED',
            '#endif',
            '#include <normal_pars_fragment>',
            '#ifdef DOUBLE_SIDED',
            '	varying vec3 vLightBack;',
            '	varying vec3 vIndirectBack;',
            '#endif',
            '#include <bsdfs>',
            '#include <lights_pars_begin>',
            '#include <fog_pars_fragment>',
            '#include <shadowmap_pars_fragment>',
            '#include <shadowmask_pars_fragment>',
            '#include <clipping_planes_pars_fragment>',
            '#include <dithering_pars_fragment>',
          ].join(`
`)
        )
      let p = [
        '#include <normal_fragment_begin>',
        `
				// NOTE: gl_FrontFacing alternative using face normal estimation.
				vec3 viewdx = dFdx(vViewPosition);
				vec3 viewdy = dFdy(vViewPosition);
				vec3 faceNormal = normalize(cross(viewdx, viewdy));
				bool isFrontFacing = (dot(normal, faceNormal) >= 0.0);
				`,
        '#include <clipping_planes_fragment>',
      ]
      p.push(
        o.code,
        'vec3 diffuseColor = ' + o.result + ';',
        'ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );'
      ),
        h &&
          p.push(
            h.code,
            '#ifdef ALPHATEST',
            'if ( ' + h.result + ' <= ALPHATEST ) discard;',
            '#endif'
          ),
        p.push(
          '#ifdef DOUBLE_SIDED',
          '	reflectedLight.indirectDiffuse += ( isFrontFacing ) ? vIndirectFront : vIndirectBack;',
          '#else',
          '	reflectedLight.indirectDiffuse += vIndirectFront;',
          '#endif',
          '#include <lightmap_fragment>',
          'reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );',
          '#ifdef DOUBLE_SIDED',
          '	reflectedLight.directDiffuse = ( isFrontFacing ) ? vLightFront : vLightBack;',
          '#else',
          '	reflectedLight.directDiffuse = vLightFront;',
          '#endif',
          'reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();'
        ),
        i && p.push(i.code, 'reflectedLight.directDiffuse += ' + i.result + ' * ' + s.result + ';'),
        p.push(
          'vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;'
        ),
        p.push(`
				if (outgoingLight != diffuseColor) {
					float lightAccu = clamp( length( reflectedLight.directSpecular + reflectedLight.indirectSpecular ), 0.0, 1.0 );
					accumAlpha += ( 1.0 - accumAlpha ) * ${a.result} * lightAccu;
					outgoingLight = spe_blend( diffuseColor, outgoingLight, ${a.result}, ${l.result} );
				}
				`),
        c &&
          p.push(
            c.code,
            `outgoingLight = spe_blend(outgoingLight, ${c.result}, 1.0, SPE_BLENDING_NORMAL);`
          ),
        h
          ? p.push(`gl_FragColor = vec4( outgoingLight, accumAlpha * ${h.result} );`)
          : p.push('gl_FragColor = vec4( outgoingLight, 1.0 );'),
        p.push(
          '#include <encodings_fragment>',
          '#include <fog_fragment>',
          '#include <dithering_fragment>'
        ),
        (r = p.join(`
`))
    }
    return r
  }
  copy(e) {
    return (
      super.copy(e),
      (this.emissiveIntensity = e.emissiveIntensity.clone()),
      e.color && (this.color = e.color.clone()),
      e.position && (this.position = e.position.clone()),
      e.afterColor && (this.afterColor = e.afterColor.clone()),
      e.alpha && (this.alpha = e.alpha.clone()),
      e.shadingAlpha && (this.shadingAlpha = e.shadingAlpha.clone()),
      e.shadingBlend && (this.shadingBlend = e.shadingBlend.clone()),
      e.emissive && (this.emissive = e.emissive.clone()),
      this
    )
  }
}
var da = class extends Vt {
  constructor(e = new ua(), r) {
    super(e, e, r)
    ;(this.type = 'LambertNodeMaterial'), (this.fragment = e)
  }
  get color() {
    return this.fragment.color
  }
  set color(e) {
    this.fragment.color = e
  }
  get afterColor() {
    return this.fragment.afterColor
  }
  set afterColor(e) {
    this.fragment.afterColor = e
  }
  get alpha() {
    return this.fragment.alpha
  }
  set alpha(e) {
    this.fragment.alpha = e
  }
  get shadingAlpha() {
    return this.fragment.shadingAlpha
  }
  set shadingAlpha(e) {
    this.fragment.shadingAlpha = e
  }
  get shadingBlend() {
    return this.fragment.shadingBlend
  }
  set shadingBlend(e) {
    this.fragment.shadingBlend = e
  }
  get position() {
    return this.fragment.position
  }
  set position(e) {
    this.fragment.position = e
  }
  get emissive() {
    return this.fragment.emissive
  }
  set emissive(e) {
    this.fragment.emissive = e
  }
  get emissiveIntensity() {
    return this.fragment.emissiveIntensity
  }
  set emissiveIntensity(e) {
    this.fragment.emissiveIntensity = e
  }
}
var gi = class extends da {
  constructor(t, e, r) {
    super(e, t),
      (this.userData.type = 'LambertMaterial'),
      (this.userData.category = 'Lambert'),
      (this.userData.layers = r != null ? r : this._getLayerStack(t == null ? void 0 : t.map))
  }
  get layersList() {
    return this.userData.layers
  }
  set layersList(t) {
    this.userData.layers = t
  }
  equals(t) {
    return (
      this.userData.type === t.userData.type && this.userData.layers.uuid == t.userData.layers.uuid
    )
  }
  copy(t) {
    if (t.userData.layers !== void 0 && t.userData.layers instanceof wt) {
      let e = t.userData.layers,
        r = t.fragment
      super.copy(t)
      let o = r.clone()
      ;(this.fragment = o), (this.vertex = o)
      let i = e.clone(this)
      ;(this.userData.layers = i),
        (o.shadingAlpha.value = r.shadingAlpha.value),
        (o.shadingBlend.value = r.shadingBlend.value)
    } else super.copy(t)
    return this
  }
  static fromJSON(t, e, r) {
    let o = r.getNode(e.vertex),
      i = new gi(void 0, o)
    return i.fromJSON(e, r), i
  }
  dispose() {
    super.dispose()
  }
}
import { UniformsLib as bd, UniformsUtils as xS } from 'three'
var ma = class extends pe {
  constructor() {
    super('toon')
    this.nodeType = 'Toon'
    ;(this.color = new _e(5855577)),
      (this.specular = new _e(1118481)),
      (this.shininess = new te(30)),
      (this.shadingAlpha = new te(1)),
      (this.shadingBlend = new be(0))
  }
  build(e) {
    let r
    if (
      (e.define('TOON'),
      (e.requires.lights = !0),
      (e.extensions.derivatives = !0),
      e.isShader('vertex'))
    ) {
      let o = this.position ? this.position.analyzeAndFlow(e, 'v3', { cache: 'position' }) : void 0
      e.mergeUniform(xS.merge([bd.fog, bd.lights])),
        e.addParsCode(
          [
            'varying vec3 vViewPosition;',
            '#include <fog_pars_vertex>',
            '#include <normal_pars_vertex>',
            '#include <shadowmap_pars_vertex>',
            '#include <clipping_planes_pars_vertex>',
          ].join(`
`)
        )
      let i = [
        '#include <beginnormal_vertex>',
        `
				#ifndef USE_LAYER_DISPLACE
					#include <defaultnormal_vertex>
				#endif

				vec3 displaced_position = position;
				vec3 displaced_normal = normal;

				#ifdef USE_LAYER_DISPLACE
					vec3 transformed;
					vec3 transformedNormal;
				#endif
				`,
        '#include <normal_vertex>',
        `
				#ifndef USE_LAYER_DISPLACE
					#include <begin_vertex>
				#endif
				`,
      ]
      o && i.push(o.code, o.result ? 'displaced_position = ' + o.result + ';' : ''),
        i.push(
          'transformed = displaced_position;',
          'transformedNormal = normalMatrix * displaced_normal;',
          '#ifndef FLAT_SHADED',
          '    vNormal = transformedNormal;',
          '#endif'
        ),
        i.push(
          '	#include <project_vertex>',
          '	#include <fog_vertex>',
          '	#include <clipping_planes_vertex>',
          '	vViewPosition = - mvPosition.xyz;',
          '	#include <worldpos_vertex>',
          '	#include <shadowmap_vertex>',
          '	#include <fog_vertex>'
        ),
        (r = i.join(`
`))
    } else {
      this.color === void 0 && (this.color = new _e(5855577)),
        this.color.analyze(e, { slot: 'color' }),
        this.specular.analyze(e),
        this.shininess.analyze(e),
        this.shadingAlpha.analyze(e),
        this.shadingBlend.analyze(e),
        this.afterColor && this.afterColor.analyze(e, { slot: 'afterColor' }),
        this.alpha && this.alpha.analyze(e)
      let o = this.color.flow(e, 'c', { slot: 'color' }),
        i = this.specular.flow(e, 'c'),
        s = this.shininess.flow(e, 'f'),
        a = this.shadingAlpha.flow(e, 'f'),
        l = this.shadingBlend.flow(e, 'i'),
        c = this.afterColor ? this.afterColor.flow(e, 'c', { slot: 'afterColor' }) : void 0,
        h = this.alpha ? this.alpha.flow(e, 'f') : void 0
      ;(e.requires.transparent = h !== void 0),
        e.addParsCode(
          [
            '#include <normal_pars_fragment>',
            '#include <gradientmap_pars_fragment>',
            '#include <fog_pars_fragment>',
            '#include <bsdfs>',
            '#include <lights_pars_begin>',
            '#include <dithering_pars_fragment>',
            `
					varying vec3 vViewPosition;
					struct ToonMaterial {
						vec3	diffuseColor;
						vec3	specularColor;
						float	specularShininess;
						float	specularStrength;
					};
					void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
						vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
			
						reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
						reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
					}
					void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
						reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
					}
					#define RE_Direct				RE_Direct_Toon
					#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
					#define Material_LightProbeLOD( material )	(0)
					`,
            '#include <shadowmap_pars_fragment>',
            '#include <bumpmap_pars_fragment>',
            '#include <normalmap_pars_fragment>',
          ].join(`
`)
        )
      let p = [
        '#include <normal_fragment_begin>',
        `
				// NOTE: gl_FrontFacing alternative using face normal estimation.
				vec3 viewdx = dFdx(vViewPosition);
				vec3 viewdy = dFdy(vViewPosition);
				vec3 faceNormal = normalize(cross(viewdx,viewdy));
				if (dot(normal, faceNormal) < 0.0) {
					normal *= -1.0;
				}
				`,
        '	ToonMaterial material;',
      ]
      p.push(
        o.code,
        '	vec3 diffuseColor = ' + o.result + ';',
        '	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );',
        i.code,
        '	vec3 specular = ' + i.result + ';',
        s.code,
        '	float shininess = max( 0.0001, ' + s.result + ' );',
        '	float specularStrength = 1.0;'
      ),
        h &&
          p.push(
            h.code,
            '#ifdef ALPHATEST',
            'if ( ' + h.result + ' <= ALPHATEST ) discard;',
            '#endif'
          ),
        p.push('material.diffuseColor = diffuseColor;'),
        p.push(
          'material.specularColor = specular;',
          'material.specularShininess = shininess;',
          'material.specularStrength = specularStrength;',
          '#include <lights_fragment_begin>',
          '#include <lights_fragment_end>'
        ),
        p.push(
          'vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular;'
        ),
        p.push(`
				if (outgoingLight != diffuseColor) {
					float lightAccu = clamp( length( reflectedLight.directSpecular + reflectedLight.indirectSpecular ), 0.0, 1.0 );
					accumAlpha += ( 1.0 - accumAlpha ) * ${a.result} * lightAccu;
					outgoingLight = spe_blend( diffuseColor, outgoingLight, ${a.result}, ${l.result} );
				}
				`),
        c &&
          p.push(
            c.code,
            `outgoingLight = spe_blend(outgoingLight, ${c.result}, 1.0, SPE_BLENDING_NORMAL);`
          ),
        h
          ? p.push(`gl_FragColor = vec4( outgoingLight, accumAlpha * ${h.result} );`)
          : p.push('gl_FragColor = vec4( outgoingLight, 1.0 );'),
        p.push(
          '#include <encodings_fragment>',
          '#include <fog_fragment>',
          '#include <dithering_fragment>'
        ),
        (r = p.join(`
`))
    }
    return r
  }
  copy(e) {
    return (
      super.copy(e),
      e.color && (this.color = e.color.clone()),
      (this.specular = e.specular.clone()),
      (this.shininess = e.shininess.clone()),
      e.position && (this.position = e.position.clone()),
      e.afterColor && (this.afterColor = e.afterColor.clone()),
      e.alpha && (this.alpha = e.alpha.clone()),
      e.shadingAlpha && (this.shadingAlpha = e.shadingAlpha.clone()),
      e.shadingBlend && (this.shadingBlend = e.shadingBlend.clone()),
      this
    )
  }
}
var fa = class extends Vt {
  constructor(e = new ma(), r) {
    super(e, e, r)
    ;(this.type = 'ToonNodeMaterial'), (this.fragment = e)
  }
  get color() {
    return this.fragment.color
  }
  set color(e) {
    this.fragment.color = e
  }
  get afterColor() {
    return this.fragment.afterColor
  }
  set afterColor(e) {
    this.fragment.afterColor = e
  }
  get alpha() {
    return this.fragment.alpha
  }
  set alpha(e) {
    this.fragment.alpha = e
  }
  get shadingAlpha() {
    return this.fragment.shadingAlpha
  }
  set shadingAlpha(e) {
    this.fragment.shadingAlpha = e
  }
  get shadingBlend() {
    return this.fragment.shadingBlend
  }
  set shadingBlend(e) {
    this.fragment.shadingBlend = e
  }
  get position() {
    return this.fragment.position
  }
  set position(e) {
    this.fragment.position = e
  }
  get specular() {
    return this.fragment.specular
  }
  set specular(e) {
    this.fragment.specular = e
  }
  get shininess() {
    return this.fragment.shininess
  }
  set shininess(e) {
    this.fragment.shininess = e
  }
}
var xi = class extends fa {
  constructor(t, e, r) {
    super(e, t),
      (this.userData.type = 'ToonMaterial'),
      (this.userData.category = 'Toon'),
      (this.userData.layers = r != null ? r : this._getLayerStack(t == null ? void 0 : t.map))
  }
  get layersList() {
    return this.userData.layers
  }
  set layersList(t) {
    this.userData.layers = t
  }
  equals(t) {
    return (
      this.userData.type === t.userData.type && this.userData.layers.uuid == t.userData.layers.uuid
    )
  }
  copy(t) {
    if (t.userData.layers !== void 0 && t.userData.layers instanceof wt) {
      let e = t.userData.layers,
        r = t.fragment
      super.copy(t)
      let o = r.clone()
      ;(this.fragment = o), (this.vertex = o)
      let i = e.clone(this)
      ;(this.userData.layers = i),
        (o.shadingAlpha.value = r.shadingAlpha.value),
        (o.shadingBlend.value = r.shadingBlend.value)
    } else super.copy(t)
    return this
  }
  static fromJSON(t, e, r) {
    let o = r.getNode(e.vertex),
      i = new xi(void 0, o)
    return i.fromJSON(e, r), i
  }
  dispose() {
    super.dispose()
  }
}
import { UniformsLib as Jl, UniformsUtils as bS } from 'three'
var ya = class extends pe {
  constructor() {
    super('standard')
    this.nodeType = 'Standard'
    ;(this.color = new _e(5855577)),
      (this.roughness = new te(0.3)),
      (this.metalness = new te(0)),
      (this.reflectivity = new te(0.5)),
      (this.shadingAlpha = new te(1)),
      (this.shadingBlend = new be(0))
  }
  build(e) {
    let r
    if (
      (e.define('STANDARD'),
      (e.requires.lights = !0),
      (e.extensions.derivatives = !0),
      (e.extensions.shaderTextureLOD = !0),
      e.isShader('vertex'))
    ) {
      let o = this.position ? this.position.analyzeAndFlow(e, 'v3', { cache: 'position' }) : void 0
      e.mergeUniform(bS.merge([Jl.fog, Jl.lights])),
        Jl.LTC_1 &&
          ((e.uniforms.ltc_1 = { value: void 0 }), (e.uniforms.ltc_2 = { value: void 0 })),
        e.addParsCode(
          [
            'varying vec3 vViewPosition;',
            '#include <fog_pars_vertex>',
            '#include <normal_pars_vertex>',
            '#include <shadowmap_pars_vertex>',
            '#include <clipping_planes_pars_vertex>',
          ].join(`
`)
        )
      let i = [
        '#include <beginnormal_vertex>',
        `
				#if !defined( USE_LAYER_DISPLACE )
					#include <defaultnormal_vertex>
				#endif

				vec3 displaced_position = position;
				vec3 displaced_normal = normal;

				#if defined( USE_LAYER_DISPLACE )
					vec3 transformed;
					vec3 transformedNormal;
				#endif
				`,
        '#include <normal_vertex>',
        `
				#if !defined( USE_LAYER_DISPLACE )
					#include <begin_vertex>
				#endif /* !USE_LAYER_DISPLACE */
				`,
      ]
      o && i.push(o.code, o.result ? 'displaced_position = ' + o.result + ';' : ''),
        i.push(
          'transformed = displaced_position;',
          'transformedNormal = normalMatrix * displaced_normal;',
          '#ifndef FLAT_SHADED',
          '    vNormal = transformedNormal;',
          '#endif'
        ),
        i.push(
          '#include <project_vertex>',
          '#include <fog_vertex>',
          '#include <clipping_planes_vertex>',
          '	vViewPosition = - mvPosition.xyz;',
          '#include <worldpos_vertex>',
          '#include <shadowmap_vertex>'
        ),
        (r = i.join(`
`))
    } else {
      let o = { gamma: !0 }
      this.color === void 0 && (this.color = new _e(5855577)),
        this.color.analyze(e, { slot: 'color', context: o }),
        this.roughness.analyze(e),
        this.metalness.analyze(e),
        this.shadingAlpha.analyze(e),
        this.shadingBlend.analyze(e),
        this.afterColor && this.afterColor.analyze(e, { slot: 'afterColor' }),
        this.alpha && this.alpha.analyze(e),
        this.reflectivity && this.reflectivity.analyze(e)
      let i = this.color.flow(e, 'c', { slot: 'color', context: o }),
        s = this.roughness.flow(e, 'f'),
        a = this.metalness.flow(e, 'f'),
        l = this.shadingAlpha.flow(e, 'f'),
        c = this.shadingBlend.flow(e, 'i'),
        h = this.afterColor ? this.afterColor.flow(e, 'c', { slot: 'afterColor' }) : void 0,
        p = this.alpha ? this.alpha.flow(e, 'f') : void 0,
        u = this.reflectivity ? this.reflectivity.flow(e, 'f') : void 0
      ;(e.requires.transparent = p !== void 0),
        e.addParsCode(
          [
            'varying vec3 vViewPosition;',
            '#include <normal_pars_fragment>',
            '#include <dithering_pars_fragment>',
            '#include <fog_pars_fragment>',
            '#include <bsdfs>',
            '#include <lights_pars_begin>',
            '#include <lights_physical_pars_fragment>',
            '#include <shadowmap_pars_fragment>',
          ].join(`
`)
        )
      let m = [
        '#include <clipping_planes_fragment>',
        '	#include <normal_fragment_begin>',
        `
				// NOTE: gl_FrontFacing alternative using face normal estimation.
				vec3 viewdx = dFdx(vViewPosition);
				vec3 viewdy = dFdy(vViewPosition);
				vec3 faceNormal = normalize(cross(viewdx,viewdy));
				if (dot(normal, faceNormal) < 0.0) {
					normal *= -1.0;
				}
				`,
        '	PhysicalMaterial material;',
        '	material.diffuseColor = vec3( 1.0 );',
      ]
      m.push(
        i.code,
        '	vec3 diffuseColor = ' + i.result + ';',
        '	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );',
        s.code,
        '	float roughnessFactor = ' + s.result + ';',
        a.code,
        '	float metalnessFactor = ' + a.result + ';'
      ),
        p &&
          m.push(
            p.code,
            '#ifdef ALPHATEST',
            '	if ( ' + p.result + ' <= ALPHATEST ) discard;',
            '#endif'
          ),
        m.push(
          'vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );',
          'float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );'
        ),
        m.push(
          'material.diffuseColor = diffuseColor * ( 1.0 - metalnessFactor );',
          'material.roughness = max( roughnessFactor, 0.0525 );',
          'material.roughness += geometryRoughness;',
          'material.roughness = min( material.roughness, 1.0 );',
          'material.roughness = clamp( roughnessFactor, 0.04, 1.0 );'
        ),
        u
          ? m.push(
              u.code,
              'material.specularColor = mix( vec3( 0.16 * pow2( ' +
                u.result +
                ' ) ), diffuseColor, metalnessFactor );'
            )
          : m.push('material.specularColor = mix( vec3( 0.04 ), diffuseColor, metalnessFactor );'),
        m.push('#include <lights_fragment_begin>'),
        m.push('#include <lights_fragment_end>'),
        m.push(
          'vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular;'
        ),
        m.push(`
				if (outgoingLight != diffuseColor) {
					float lightAccu = clamp( length( reflectedLight.directSpecular + reflectedLight.indirectSpecular ), 0.0, 1.0 );
					accumAlpha += ( 1.0 - accumAlpha ) * ${l.result} * lightAccu;
					outgoingLight = spe_blend( diffuseColor, outgoingLight, ${l.result}, ${c.result} );
				}
				`),
        h &&
          m.push(
            h.code,
            `outgoingLight = spe_blend(outgoingLight, ${h.result}, 1.0, SPE_BLENDING_NORMAL);`
          ),
        p
          ? m.push(`gl_FragColor = vec4( outgoingLight, accumAlpha * ${p.result} );`)
          : m.push('gl_FragColor = vec4( outgoingLight, 1.0 );'),
        m.push(
          '#include <encodings_fragment>',
          '#include <fog_fragment>',
          '#include <dithering_fragment>'
        ),
        (r = m.join(`
`))
    }
    return r
  }
  copy(e) {
    return (
      super.copy(e),
      e.color && (this.color = e.color.clone()),
      (this.roughness = e.roughness.clone()),
      (this.metalness = e.metalness.clone()),
      e.position && (this.position = e.position.clone()),
      e.afterColor && (this.afterColor = e.afterColor.clone()),
      e.alpha && (this.alpha = e.alpha.clone()),
      e.reflectivity && (this.reflectivity = e.reflectivity.clone()),
      e.shadingAlpha && (this.shadingAlpha = e.shadingAlpha.clone()),
      e.shadingBlend && (this.shadingBlend = e.shadingBlend.clone()),
      this
    )
  }
}
var ga = class extends Vt {
  constructor(e = new ya(), r) {
    super(e, e, r)
    ;(this.type = 'StandardNodeMaterial'), (this.fragment = e)
  }
  get color() {
    return this.fragment.color
  }
  set color(e) {
    this.fragment.color = e
  }
  get afterColor() {
    return this.fragment.afterColor
  }
  set afterColor(e) {
    this.fragment.afterColor = e
  }
  get alpha() {
    return this.fragment.alpha
  }
  set alpha(e) {
    this.fragment.alpha = e
  }
  get shadingAlpha() {
    return this.fragment.shadingAlpha
  }
  set shadingAlpha(e) {
    this.fragment.shadingAlpha = e
  }
  get shadingBlend() {
    return this.fragment.shadingBlend
  }
  set shadingBlend(e) {
    this.fragment.shadingBlend = e
  }
  get position() {
    return this.fragment.position
  }
  set position(e) {
    this.fragment.position = e
  }
  get roughness() {
    return this.fragment.roughness
  }
  set roughness(e) {
    this.fragment.roughness = e
  }
  get metalness() {
    return this.fragment.metalness
  }
  set metalness(e) {
    this.fragment.metalness = e
  }
  get reflectivity() {
    return this.fragment.reflectivity
  }
  set reflectivity(e) {
    this.fragment.reflectivity = e
  }
}
var bi = class extends ga {
  constructor(t, e, r) {
    super(e, t),
      (this.userData.type = 'PhysicalMaterial'),
      (this.userData.category = 'Physical'),
      (this.userData.layers = r != null ? r : this._getLayerStack(t == null ? void 0 : t.map))
  }
  get layersList() {
    return this.userData.layers
  }
  set layersList(t) {
    this.userData.layers = t
  }
  equals(t) {
    return (
      this.userData.type === t.userData.type && this.userData.layers.uuid == t.userData.layers.uuid
    )
  }
  copy(t) {
    if (t.userData.layers !== void 0 && t.userData.layers instanceof wt) {
      let e = t.userData.layers,
        r = t.fragment
      super.copy(t)
      let o = r.clone()
      ;(this.fragment = o), (this.vertex = o)
      let i = e.clone(this)
      ;(this.userData.layers = i),
        (o.shadingAlpha.value = r.shadingAlpha.value),
        (o.shadingBlend.value = r.shadingBlend.value)
    } else super.copy(t)
    return this
  }
  static fromJSON(t, e, r) {
    let o = r.getNode(e.vertex),
      i = new bi(void 0, o)
    return i.fromJSON(e, r), i
  }
  dispose() {
    super.dispose()
  }
}
import { Color as Kl } from 'three'
function Xe(n, t) {
  let e
  if (typeof n == 'string') {
    let r = t == null ? void 0 : t.getColor(n)
    r
      ? (e = r)
      : (console.warn(
          'Tried to create color layer params with a color key that does not exist in the assets manager'
        ),
        (e = new Dt(0, 0, 0, 0)))
  } else return 'a' in n ? new Dt(n.r, n.g, n.b, n.a) : new Dt(n.r, n.g, n.b, 1)
  return e
}
import { Matrix3 as vd, Texture as Yl, Vector2 as Tn, Vector3 as to, Vector4 as Sd } from 'three'
function wd(n, t) {
  switch (n.data.type) {
    case 'light':
      return ir(n)
    case 'fresnel':
      return SS(n, t)
    case 'gradient':
      return wS(n)
    case 'depth':
      return LS(n)
    case 'normal':
      return CS(n)
    case 'noise':
      return TS(n, t)
    case 'texture':
      return NS(n, t)
    case 'rainbow':
      return MS(n)
    case 'transmission':
      return PS(n, t)
    case 'matcap':
      return OS(n, t)
    case 'displace':
      return IS(n)
    case 'color':
    default:
      return vS(n, t)
  }
}
function Ld(n) {
  return { type: n.data.type }
}
function ir(n) {
  let { alpha: t, mode: e } = n.data
  return H(O({}, Ld(n)), { alpha: t, mode: e })
}
function vS(n, t) {
  return H(O({}, ir(n)), { color: Xe(n.data.color, t) })
}
function SS(n, t) {
  let { bias: e, scale: r, intensity: o, factor: i, color: s } = n.data
  return H(O({}, ir(n)), { color: Xe(s, t), bias: e, scale: r, intensity: o, factor: i })
}
function wS(n) {
  let { gradientType: t, smooth: e, colors: r, steps: o, angle: i, offset: s, morph: a } = n.data
  return H(O({}, ir(n)), {
    gradientType: t,
    smooth: e,
    colors: r.map((l) => new Sd(l[0], l[1], l[2], l[3])),
    num: r.length,
    steps: o,
    offset: new Tn(...s),
    morph: new Tn(...a),
    angle: i,
  })
}
function LS(n) {
  let {
    gradientType: t,
    near: e,
    far: r,
    isVector: o,
    isWorldSpace: i,
    origin: s,
    direction: a,
    colors: l,
    steps: c,
    smooth: h,
    num: p,
  } = n.data
  return H(O({}, ir(n)), {
    gradientType: t,
    near: e,
    far: r,
    isVector: o,
    isWorldSpace: i,
    origin: new to(...s),
    direction: a ? new to(...a) : new to(1, 0, 0),
    num: p,
    colors: l.map((u) => new Sd(u[0], u[1], u[2], u[3])),
    steps: c,
    smooth: h,
  })
}
function CS(n) {
  let { cnormal: t } = n.data
  return H(O({}, ir(n)), { cnormal: new to(t[0], t[1], t[2]) })
}
function TS(n, t) {
  let { data: e } = n
  return H(O({}, ir(n)), {
    scale: e.scale,
    move: e.move,
    fA: new Tn(...e.fA),
    fB: new Tn(...e.fB),
    size: new to(...e.size),
    distortion: new Tn(...e.distortion),
    colorA: Xe(e.colorA, t),
    colorB: Xe(e.colorB, t),
    colorC: Xe(e.colorC, t),
    colorD: Xe(e.colorD, t),
    noiseType: e.noiseType,
  })
}
function NS(n, t) {
  let { projection: e, axis: r, side: o, crop: i, size: s } = n.data,
    { image: a, wrapping: l, repeat: c, offset: h } = n.data.texture,
    p = new Yl(),
    u
  if (typeof a == 'string') u = t == null ? void 0 : t.getImage(a)
  else {
    let m = new Image()
    ;(m.src = vi(a.data)),
      (m.onload = () => {
        t != null && t.onImageLoad && (t == null || t.onImageLoad())
      }),
      (u = m)
  }
  return (
    (p.image = u),
    p.repeat.set(c[0], c[1]),
    p.offset.set(h[0], h[1]),
    (p.wrapS = p.wrapT = l),
    H(O({}, ir(n)), {
      texture: p,
      mat: new vd().setUvTransform(h[0], h[1], c[0], c[1], 0, 0, 0),
      crop: i,
      projection: e,
      axis: ['x', 'y', 'z'].indexOf(r),
      side: [2, 0, 1].indexOf(o),
      size: s,
    })
  )
}
function MS(n) {
  let { data: t } = n
  return H(O({}, ir(n)), {
    filmThickness: t.filmThickness,
    movement: t.movement,
    wavelengths: new to(...t.wavelengths),
    noiseStrength: t.noiseStrength,
    noiseScale: t.noiseScale,
    offset: new to(...t.offset),
  })
}
function PS(n, t) {
  let { data: e } = n
  return H(O({}, ir(n)), {
    thickness: e.thickness,
    ior: e.ior,
    roughness: e.roughness,
    transmissionSamplerMap: t.transmissionSamplerMap,
    transmissionDepthMap: t.transmissionDepthMap,
  })
}
function OS(n, t) {
  let e = new Yl(),
    { image: r } = n.data.texture,
    o
  if (typeof r == 'string') o = t == null ? void 0 : t.getImage(r)
  else {
    let s = new Image()
    ;(s.src = vi(r.data)),
      (s.onload = () => {
        t != null && t.onImageLoad && (t == null || t.onImageLoad())
      }),
      (o = s)
  }
  e.image = o
  let i = 16777215
  return H(O({}, ir(n)), { color: i, texture: e })
}
function IS(n) {
  let { data: t } = n,
    e = H(O({}, Ld(n)), { intensity: t.intensity })
  if (t.displacementType === 'noise')
    return H(O({}, e), {
      offset: new to(...t.offset),
      scale: t.scale,
      movement: t.movement,
      noiseType: t.noiseType,
    })
  {
    let r = new Yl(),
      o = new vd().setUvTransform(0, 0, 1, 1, 0, 0, 0)
    return H(O({}, e), { texture: r, mat: o, crop: t.crop })
  }
}
function Cd(n, t, e) {
  if (e.type === 'displace' && (n === 'intensity' || n === 'visible')) {
    let r = t.uniforms[`f${t.id}_intensity`]
    return r ? ((r.value = e.intensity * (e.visible ? 1 : 0)), r) : void 0
  }
  if (e.type !== 'displace' && (n === 'alpha' || n === 'visible')) {
    let r = t.uniforms[`f${t.id}_alpha`]
    return r ? ((r.value = e.alpha * (e.visible ? 1 : 0)), r) : void 0
  }
}
import { Color as Md, Vector4 as AS } from 'three'
var Si
;((t) => {
  function n(e) {
    return new Md(e.x, e.y, e.z).getHex()
  }
  t.getHex = n
})(Si || (Si = {}))
var Td
;((t) => {
  function n(e) {
    return new AS(e.r, e.g, e.b, e.a)
  }
  t.getThreeVector4 = n
})(Td || (Td = {}))
var Nd
;((e) => {
  function n(r, o) {
    r.setRGB(o.r, o.g, o.b)
  }
  e.setThreeColor = n
  function t(r) {
    return new Md(r.r, r.g, r.b).getHex()
  }
  e.getHex = t
})(Nd || (Nd = {}))
function Nn(n, t) {
  return typeof n == 'string' ? t.getMaterialOrDeletedPlaceholder(n) : Xl(n, t)
}
function Pd(n, t) {
  return n.map((e) => Nn(e, t))
}
function Xl(n, t) {
  var s, a
  let e = (s = n.layers) != null ? s : xo.defaultTwoLayerData('phong').layers,
    r = DS(e),
    o
  switch (r.category) {
    case 'basic':
      o = new mt()
      break
    case 'lambert': {
      o = new gi()
      break
    }
    case 'toon': {
      o = new xi()
      break
    }
    case 'physical':
      o = new bi()
      break
    case 'phong':
    default: {
      o = new Pt()
      break
    }
  }
  o.name = (a = n.name) != null ? a : 'Untitled Material'
  let i = o.userData.layers
  BS(i)
  for (let l = e.length - 1; l >= 0; l--) ES(i, e[l], t)
  switch (r.category) {
    case 'basic':
      break
    case 'lambert': {
      let h = o,
        u = Xe(r.emissive, t)
      u instanceof Kl ? (h.emissive.value = u) : h.emissive.value.setHex(Si.getHex(u))
      break
    }
    case 'toon': {
      let h = o,
        p = r
      h.shininess.value = p.shininess
      let u = Xe(p.specular, t)
      u instanceof Kl ? (h.specular.value = u) : h.specular.value.setHex(Si.getHex(u))
      break
    }
    case 'physical':
      let l = o,
        c = r
      ;(l.metalness.value = c.metalness),
        (l.roughness.value = c.roughness),
        (l.reflectivity.value = c.reflectivity)
      break
    case 'phong':
    default: {
      let h = o,
        p = r
      h.shininess.value = p.shininess
      let u = Xe(p.specular, t)
      u instanceof Kl ? (h.specular.value = u) : h.specular.value.setHex(Si.getHex(u))
      break
    }
  }
  return i.blendColors(), i.blendAfterColors(), i.blendPositions(), o
}
function DS(n) {
  for (let t of n) if (t.data.type === 'light') return t.data
  return { type: 'light', category: 'basic', visible: !0, alpha: 1, mode: 0 }
}
function BS(n) {
  for (let t of n.getLayers()) n.removeLayer(t.id)
}
function ES(n, t, e) {
  let r = wd(t, e)
  r.type === 'transmission' &&
    ((r.transmissionSamplerMap = e == null ? void 0 : e.transmissionSamplerMap),
    (r.transmissionDepthMap = e == null ? void 0 : e.transmissionDepthMap))
  let o = n.addLayer(r)
  o.uuid = t.id
  for (let i in t.data) Cd(i, o, t.data)
}
import { Mesh as kS, Matrix4 as HS } from 'three'
import { Matrix4 as Ql } from 'three'
import { Box3 as Ed, Line3 as $t, Matrix4 as Zl, Vector3 as Ve } from 'three'
import { HemisphereLight as Od } from 'three'
var xa = (n) => 'isEntity' in n,
  br = (n) => 'isAbstractMesh' in n,
  vr = (n) => n !== null && n.isBooleanMesh,
  Id = (n) => n.objectType === 'CombinedCamera'
var Gr = (n) => 'objectHelper' in n
function _S(n, t) {
  var r
  let e = !1
  t.position && (n.position.fromArray(t.position), (e = !0)),
    t.rotation && (n.rotation.fromArray(t.rotation), (e = !0)),
    t.scale && ((e = !0), n.scale.fromArray(t.scale)),
    t.hiddenMatrix !== void 0 &&
      'hiddenMatrix' in n &&
      ((e = !0), n.hiddenMatrix.fromArray((r = t.hiddenMatrix) != null ? r : $r.identity)),
    e &&
      (n.updateMatrix(),
      vr(n.parent) && br(n) && n.invalidateDownstreamBooleanData(!0).recomputeBoolean()),
    t.position && t.rotation && t.scale && t.hiddenMatrix !== void 0 && n.updateWorldMatrix(!1, !0),
    n.objectType === 'CombinedCamera' &&
      (t.isUpVectorFlipped !== void 0 && (n.isUpVectorFlipped = t.isUpVectorFlipped), n.updateUp())
}
function GS(n, t) {
  _S(n, t),
    t.name !== void 0 && (n.name = t.name),
    t.visible !== void 0 && (n.isEntity ? (n.visibility = t.visible) : (n.visible = t.visible))
}
function Ad(n, t, e) {
  GS(n, t),
    t.color !== void 0 && (n.color = Xe(t.color, e)),
    t.intensity !== void 0 && (n.intensity = t.intensity),
    t.shadows !== void 0 && !(n instanceof Od) && (n.castShadow = t.shadows),
    n.shadow &&
      !(n instanceof Od) &&
      t.depth !== void 0 &&
      ((n.shadow.camera.far = t.depth), (n.shadow.needsUpdate = !0)),
    t.helper !== void 0 &&
      Gr(n) &&
      ((n.enableHelper = t.helper), (n.gizmos.shadowmap.visible = t.helper))
}
function Dd(n, t) {
  ;(n.shadow.camera.right = t / 2),
    (n.shadow.camera.left = -t / 2),
    (n.shadow.camera.top = t / 2),
    (n.shadow.camera.bottom = -t / 2),
    (n.shadow.needsUpdate = !0)
}
var wi = new Ed(),
  ft = new Ve(),
  le = new Ve(),
  tt = new Zl()
function zS(n, t, e = 0, r = t.count) {
  let o = 1 / 0,
    i = 1 / 0,
    s = 1 / 0,
    a = -1 / 0,
    l = -1 / 0,
    c = -1 / 0
  for (let h = e; h < r; h++) {
    let p = t.getX(h),
      u = t.getY(h),
      m = t.getZ(h)
    p < o && (o = p),
      u < i && (i = u),
      m < s && (s = m),
      p > a && (a = p),
      u > l && (l = u),
      m > c && (c = m)
  }
  return n.min.set(o, i, s), n.max.set(a, l, c), n
}
var Bd = (n, t, e, r) => {
    var o
    if (br(n)) {
      let i = n.geometry.userData.parameters,
        s = n.geometry.getAttribute('position')
      n.geometry.userData.type === 'SubdivGeometry'
        ? ft.copy(n.originalGeometry.boundingSphere.center)
        : s !== void 0 &&
          (zS(
            wi,
            s,
            n.geometry.drawRange.start,
            n.geometry.drawRange.count < 1 / 0 ? n.geometry.drawRange.count : s.count
          ),
          wi.getCenter(ft)),
        n.forceComputeSize
          ? wi.getSize(le).multiplyScalar(0.5)
          : le.set(i.width, i.height, (o = i.depth) != null ? o : 0).multiplyScalar(0.5)
    } else if (Gr(n) && r === !0) {
      let i = n.geometryHelper.getAttribute('position')
      wi.setFromArray(i.array), wi.getCenter(ft), wi.getSize(le).multiplyScalar(0.5)
    } else ft.setScalar(0), le.setScalar(0)
    tt.copy(t).multiply(n.matrixWorld),
      le.x === 0 && le.y === 0 && le.z === 0
        ? e.push(new Ve(ft.x, ft.y, ft.z).applyMatrix4(tt))
        : e.push(
            new Ve(-le.x, le.y, le.z).add(ft).applyMatrix4(tt),
            new Ve(-le.x, -le.y, le.z).add(ft).applyMatrix4(tt),
            new Ve(le.x, -le.y, le.z).add(ft).applyMatrix4(tt),
            new Ve(le.x, le.y, le.z).add(ft).applyMatrix4(tt),
            new Ve(-le.x, le.y, -le.z).add(ft).applyMatrix4(tt),
            new Ve(-le.x, -le.y, -le.z).add(ft).applyMatrix4(tt),
            new Ve(le.x, -le.y, -le.z).add(ft).applyMatrix4(tt),
            new Ve(le.x, le.y, -le.z).add(ft).applyMatrix4(tt)
          )
  },
  Mn = class extends Ed {
    constructor() {
      super(...arguments)
      this.matrix = new Zl()
      this.vertices = []
      this.faces = []
      this.edges = []
      this.centerEdges = []
    }
    copy(e) {
      return (
        super.copy(e),
        this.matrix.copy(e.matrix),
        (this.vertices = e.vertices.map((r) => r.clone())),
        (this.faces = e.faces.map((r) => r.clone())),
        (this.edges = e.edges.map((r) => r.clone())),
        (this.centerEdges = e.centerEdges.map((r) => r.clone())),
        this
      )
    }
    setFromObjectSize(e, r = !1) {
      e.updateWorldMatrix(!1, r), this.makeEmpty(), this.matrix.copy(e.matrixWorld)
      let o = new Zl().copy(e.matrixWorld).invert()
      return this.expandByObjectSize(e, o, r)
    }
    expandByObjectSize(e, r, o = !1) {
      let i = []
      return (
        o === !0
          ? e.traverseEntity((s) => {
              s.visible && Bd(s, r, i, e.enableHelper === !0)
            })
          : Bd(e, r, i, e.enableHelper === !0),
        this.setFromPoints(i)
      )
    }
    getCenter(e) {
      return (e = super.getCenter(e)), e.applyMatrix4(this.matrix), e
    }
    getPositionToCenter(e) {
      return (e = super.getCenter(e)), e.applyMatrix4(tt.copy(this.matrix).setPosition(0, 0, 0)), e
    }
    computeVertices() {
      this.getSize(le).multiplyScalar(0.5),
        this.getCenter(ft),
        tt.copy(this.matrix).setPosition(ft),
        (this.vertices = [
          new Ve(-le.x, le.y, le.z).applyMatrix4(tt),
          new Ve(-le.x, -le.y, le.z).applyMatrix4(tt),
          new Ve(le.x, -le.y, le.z).applyMatrix4(tt),
          new Ve(le.x, le.y, le.z).applyMatrix4(tt),
          new Ve(-le.x, le.y, -le.z).applyMatrix4(tt),
          new Ve(-le.x, -le.y, -le.z).applyMatrix4(tt),
          new Ve(le.x, -le.y, -le.z).applyMatrix4(tt),
          new Ve(le.x, le.y, -le.z).applyMatrix4(tt),
        ])
    }
    computeEdges() {
      this.vertices.length > 0 && this.computeVertices(),
        (this.edges = [
          new $t(this.vertices[0], this.vertices[3]),
          new $t(this.vertices[1], this.vertices[2]),
          new $t(this.vertices[5], this.vertices[6]),
          new $t(this.vertices[4], this.vertices[7]),
          new $t(this.vertices[0], this.vertices[1]),
          new $t(this.vertices[3], this.vertices[2]),
          new $t(this.vertices[7], this.vertices[6]),
          new $t(this.vertices[4], this.vertices[5]),
          new $t(this.vertices[0], this.vertices[4]),
          new $t(this.vertices[1], this.vertices[5]),
          new $t(this.vertices[2], this.vertices[6]),
          new $t(this.vertices[3], this.vertices[7]),
        ]),
        (this.centerEdges = this.edges.map((e) => e.getCenter(new Ve())))
    }
    computeFaces() {
      this.vertices.length > 0 && this.computeVertices(),
        (this.faces = [
          new Ve()
            .copy(this.vertices[0])
            .sub(this.vertices[2])
            .multiplyScalar(0.5)
            .add(this.vertices[2]),
          new Ve()
            .copy(this.vertices[7])
            .sub(this.vertices[5])
            .multiplyScalar(0.5)
            .add(this.vertices[5]),
          new Ve()
            .copy(this.vertices[4])
            .sub(this.vertices[1])
            .multiplyScalar(0.5)
            .add(this.vertices[1]),
          new Ve()
            .copy(this.vertices[3])
            .sub(this.vertices[6])
            .multiplyScalar(0.5)
            .add(this.vertices[6]),
          new Ve()
            .copy(this.vertices[4])
            .sub(this.vertices[3])
            .multiplyScalar(0.5)
            .add(this.vertices[3]),
          new Ve()
            .copy(this.vertices[1])
            .sub(this.vertices[6])
            .multiplyScalar(0.5)
            .add(this.vertices[6]),
        ])
    }
  }
import { Object3D as RS, Matrix4 as FS, Light as VS } from 'three'
function Pn(n) {
  let t = []
  for (let e in n) {
    let r = n[e]
    delete r.metadata, t.push(r)
  }
  return t
}
function jS(n) {
  let t = []
  for (let e in n) t.push(n[e])
  return t
}
var ba = (n) =>
  class extends n {
    hasEntityChild() {
      return this.children.some((e) => xa(e))
    }
    isDescendantOf(e) {
      e instanceof RS && (e = e.uuid)
      let r = this
      for (; r.parent; ) {
        if (r.parent.uuid === e) return !0
        r = r.parent
      }
      return !1
    }
    attach(e, r) {
      this.updateWorldMatrix(!0, !1)
      let o = new FS().copy(this.matrixWorld).invert()
      return (
        e.parent !== null && (e.parent.updateWorldMatrix(!0, !1), o.multiply(e.parent.matrixWorld)),
        xa(e) ? e.hiddenMatrix.premultiply(o) : e.applyMatrix4(o),
        e.updateWorldMatrix(!1, !1),
        this.add(e),
        r !== void 0 && (this.children.pop(), this.children.splice(r, 0, e)),
        this
      )
    }
    copy(e, r = !0) {
      if (
        ((this.name = e.name),
        this.up.copy(e.up),
        this.position.copy(e.position),
        (this.rotation.order = e.rotation.order),
        this.quaternion.copy(e.quaternion),
        this.scale.copy(e.scale),
        this.matrix.copy(e.matrix),
        this.matrixWorld.copy(e.matrixWorld),
        (this.matrixAutoUpdate = e.matrixAutoUpdate),
        (this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate),
        (this.layers.mask = e.layers.mask),
        (this.visible = e.visible),
        (this.castShadow = e.castShadow),
        (this.receiveShadow = e.receiveShadow),
        (this.frustumCulled = e.frustumCulled),
        (this.renderOrder = e.renderOrder),
        (this.userData = JSON.parse(JSON.stringify(e.userData))),
        r === !0)
      )
        for (let o = 0; o < e.children.length; o++) {
          let i = e.children[o]
          this.add(i.clone())
        }
      return this
    }
    toJSON(e) {
      let r = e === void 0,
        o = { object: { uuid: '', objectType: '' } }
      e === void 0 &&
        ((e = {
          geometries: {},
          materials: {},
          textures: {},
          images: {},
          interactionStates: {},
          nodes: {},
        }),
        (o.metadata = { version: 1.5, type: 'Object', generator: 'Object3D.toJSON' }))
      let i = { uuid: this.uuid, objectType: this.type }
      if (
        (this.name !== '' && (i.name = this.name),
        (i.matrix = this.matrix.toArray()),
        this.castShadow === !0 && (i.castShadow = !0),
        this.receiveShadow === !0 && (i.receiveShadow = !0),
        this.visible === !1 && (i.visible = !1),
        this.frustumCulled === !1 && (i.frustumCulled = !1),
        this.renderOrder !== 0 && (i.renderOrder = this.renderOrder),
        (i.layers = this.layers.mask),
        JSON.stringify(this.userData) !== '{}' && (i.userData = this.userData),
        this.children.length > 0)
      ) {
        i.children = []
        for (let s of this.children)
          (xa(s) || s instanceof VS) && i.children.push(s.toJSON(e).object)
      }
      if (r) {
        let s = Pn(e.geometries),
          a = Pn(e.materials),
          l = Pn(e.textures),
          c = Pn(e.images),
          h = Pn(e.interactionStates),
          p = jS(e.nodes)
        s.length > 0 && (o.geometries = s),
          a.length > 0 && (o.materials = a),
          l.length > 0 && (o.textures = l),
          c.length > 0 && (o.images = c),
          h.length > 0 && (o.interactionStates = h),
          p.length > 0 && (o.nodes = p)
      }
      return (o.object = i), o
    }
    fromJSON(e) {
      return (
        (this.uuid = e.uuid),
        e.name !== void 0 && (this.name = e.name),
        e.matrix !== void 0
          ? (this.matrix.fromArray(e.matrix),
            e.matrixAutoUpdate !== void 0 && (this.matrixAutoUpdate = e.matrixAutoUpdate),
            this.matrixAutoUpdate &&
              this.matrix.decompose(this.position, this.quaternion, this.scale))
          : (e.position !== void 0 && this.position.fromArray(e.position),
            e.rotation !== void 0 && this.rotation.fromArray(e.rotation),
            e.quaternion !== void 0 && this.quaternion.fromArray(e.quaternion),
            e.scale !== void 0 && this.scale.fromArray(e.scale)),
        (this.castShadow = e.castShadow !== void 0),
        (this.receiveShadow = e.receiveShadow !== void 0),
        e.visible !== void 0 && (this.visible = e.visible),
        e.frustumCulled !== void 0 && (this.frustumCulled = e.frustumCulled),
        e.renderOrder !== void 0 && (this.renderOrder = e.renderOrder),
        e.layers !== void 0 && (this.layers.mask = e.layers),
        e.userData !== void 0 && (this.userData = e.userData),
        this
      )
    }
  }
var Jt = (n) => 'isEntity' in n,
  _d = (n) => 'isAbstractMesh' in n,
  Yt = (n) =>
    class extends ba(n) {
      constructor() {
        super(...arguments)
        this.objectType = ''
        this.isEntity = !0
        this.raycastLock = !1
        this.scaleLock = !1
        this.hiddenMatrix = new Ql()
        this._singleBBox = new Mn()
        this._recursiveBBox = new Mn()
        this.singleBBoxNeedsUpdate = !0
        this.recursiveBBoxNeedsUpdate = !0
        this.forceComputeSize = !1
      }
      set visibility(r) {
        this.visible = r
        for (let o of this.children)
          Jt(o) &&
            o.traverseEntity((i) => {
              Gr(i) && i.visible && (i.objectHelper.visible = r)
            })
      }
      get visibility() {
        return this.visible
      }
      get singleBBox() {
        return (
          this.singleBBoxNeedsUpdate &&
            ((this.singleBBoxNeedsUpdate = !1),
            this._singleBBox.setFromObjectSize(this, !1),
            this._singleBBox.computeVertices(),
            this._singleBBox.computeEdges(),
            this._singleBBox.computeFaces()),
          this._singleBBox
        )
      }
      get recursiveBBox() {
        return (
          this.recursiveBBoxNeedsUpdate &&
            ((this.recursiveBBoxNeedsUpdate = !1),
            this._recursiveBBox.setFromObjectSize(this, !0),
            this._recursiveBBox.computeVertices(),
            this._recursiveBBox.computeEdges(),
            this._recursiveBBox.computeFaces()),
          this._recursiveBBox
        )
      }
      resetBBoxNeedsUpdate() {
        ;(this.singleBBoxNeedsUpdate = !0),
          (this.recursiveBBoxNeedsUpdate = !0),
          this.traverseAncestors((r) => {
            Jt(r) && ((r.singleBBoxNeedsUpdate = !0), (r.recursiveBBoxNeedsUpdate = !0))
          }),
          this.traverseEntity((r) => {
            ;(r.singleBBoxNeedsUpdate = !0), (r.recursiveBBoxNeedsUpdate = !0)
          })
      }
      traverseEntity(r) {
        r(this)
        for (let o of this.children) Jt(o) && o.traverseEntity(r)
      }
      updateMatrixWorld(r) {
        this.matrixAutoUpdate && this.updateMatrix(),
          (this.matrixWorldNeedsUpdate || r) &&
            (this.parent === null
              ? this.matrixWorld.multiplyMatrices(this.hiddenMatrix, this.matrix)
              : (this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.hiddenMatrix),
                this.matrixWorld.multiplyMatrices(this.matrixWorld, this.matrix)),
            (this.matrixWorldNeedsUpdate = !1),
            (r = !0))
        for (let o of this.children) o.updateMatrixWorld(r)
      }
      updateWorldMatrix(r, o) {
        let i = this.parent
        if (
          (r && i !== null && i.updateWorldMatrix(!0, !1),
          this.matrixAutoUpdate && this.updateMatrix(),
          this.parent === null
            ? this.matrixWorld.multiplyMatrices(this.hiddenMatrix, this.matrix)
            : (this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.hiddenMatrix),
              this.matrixWorld.multiplyMatrices(this.matrixWorld, this.matrix)),
          o)
        )
          for (let s of this.children) s.updateWorldMatrix(!1, !0)
      }
      shallowClone(r) {
        return new this.constructor().shallowCopy(this, r)
      }
      shallowCopy(r, o = !0) {
        if (
          (super.copy(r, !1),
          (this.raycastLock = r.raycastLock),
          (this.scaleLock = r.scaleLock),
          this.hiddenMatrix.copy(r.hiddenMatrix),
          o === !0)
        )
          for (let i of r.children) Jt(i) && this.add(i.shallowClone())
        return this
      }
      clone(r) {
        return new this.constructor().copy(this, r)
      }
      copy(r, o = !0) {
        if (
          (super.copy(r, !1),
          (this.raycastLock = r.raycastLock),
          (this.scaleLock = r.scaleLock),
          this.hiddenMatrix.copy(r.hiddenMatrix),
          o === !0)
        )
          for (let i of r.children) Jt(i) && this.add(i.clone())
        return this
      }
      keepChildrenMatrixWorld() {
        let r = new Ql(),
          o = this.matrixWorld.clone()
        this.updateWorldMatrix(!1, !1), r.copy(this.matrixWorld).invert(), r.multiply(o)
        for (let i of this.children) Jt(i) && i.hiddenMatrix.premultiply(r)
      }
      toJSON(r) {
        let o = super.toJSON(r),
          i = o.object
        return (
          this.raycastLock === !0 && (i.raycastLock = !0),
          this.scaleLock === !0 && (i.scaleLock = !0),
          (i.hiddenMatrix = this.hiddenMatrix.toArray()),
          o
        )
      }
      fromJSON(r) {
        return (
          super.fromJSON(r),
          r.raycastLock !== void 0 && (this.raycastLock = r.raycastLock),
          r.scaleLock !== void 0 && (this.scaleLock = r.scaleLock),
          this.hiddenMatrix.fromArray(r.hiddenMatrix),
          this
        )
      }
      fromObject3D(r) {
        let o = r.children
        return (
          (r.children = []),
          Object.assign(r, { raycastLock: !1, scaleLock: !1, hiddenMatrix: new Ql() }),
          this.copy(r),
          (r.children = o),
          this
        )
      }
      toObjectTransformState(r = []) {
        this.updateWorldMatrix(!0, !1)
        let o = {
          position: this.position.toArray(),
          rotation: [this.rotation.x, this.rotation.y, this.rotation.z],
          scale: this.scale.toArray(),
          hiddenMatrix: this.hiddenMatrix.toArray(),
        }
        return $o(o, r)
      }
      fromObjectTransformState(r) {
        return (
          r.position && this.position.fromArray(r.position),
          r.rotation && this.rotation.fromArray(r.rotation),
          r.scale && this.scale.fromArray(r.scale),
          r.hiddenMatrix && this.hiddenMatrix.fromArray(r.hiddenMatrix),
          this.updateMatrix(),
          this
        )
      }
      toState(r = []) {
        let o = O(
          { name: this.name, visible: this.visible, raycastLock: this.raycastLock },
          this.toObjectTransformState(r)
        )
        return $o(o, r)
      }
      fromState(r, o) {
        return (
          r.name && (this.name = r.name),
          r.raycastLock !== void 0 && (this.raycastLock = r.raycastLock),
          r.type !== 'OrthographicCamera' &&
            r.type !== 'PerspectiveCamera' &&
            (this.matrixAutoUpdate = !1),
          r.visible !== void 0 && (this.visibility = r.visible),
          this.fromObjectTransformState(r),
          this
        )
      }
    }
import { Object3D as US, Vector3 as On, Euler as Gd, MathUtils as ro } from 'three'
var Co = class extends US {
  constructor(e, r = {}) {
    super()
    this.object = e
    let o = e.recursiveBBox.getSize(new On()),
      i = 0.1
    ;(this.parameters = xs.defaultData(o.toArray(), i)),
      uo(this.parameters, r),
      this.update(),
      this.setHideBase(this.parameters.hideBase)
  }
  refreshMaterial() {
    if ('material' in this.object) for (let e of this.children) e.material = this.object.material
  }
  setHideBase(e) {
    if ('material' in this.object) {
      if (Array.isArray(this.object.material)) {
        if (this.children.length > 0) {
          for (let r of this.object.material) r.visible = !0
          if (e) {
            let r = this.object.material.map((o) => o.clone())
            for (let o of this.children) o.material = r
          } else for (let r of this.children) r.material = this.object.material
        }
        for (let r of this.object.material) r.visible = !e
      } else {
        if (this.children.length > 0)
          if (((this.object.material.visible = !0), e)) {
            let r = this.object.material.clone()
            for (let o of this.children) o.material = r
          } else for (let r of this.children) r.material = this.object.material
        this.object.material.visible = !e
      }
      this.parameters.hideBase = e
    }
  }
  update() {
    switch ((this._updateCount(), this.parameters.type)) {
      case 'radial':
        this._updateRadial(this.parameters)
        break
      case 'linear':
        this._updateLinear(this.parameters)
        break
      case 'grid':
        this._updateGrid(this.parameters)
    }
    this.children.forEach((e) => e.updateMatrix())
  }
  _updateCount() {
    let e =
      this.parameters.type === 'grid'
        ? this.parameters.grid.count[0] *
          this.parameters.grid.count[1] *
          this.parameters.grid.count[2]
        : this.parameters.count
    if (this.children.length !== e)
      if (this.children.length < e)
        for (let r = 0, o = e - this.children.length; r < o; ++r) {
          let i = this.object.shallowClone(!1)
          ;(i.visible = !0), this.add(i), this.parameters.hideBase && this.setHideBase(!0)
        }
      else for (let r = 0, o = this.children.length - e; r < o; ++r) this.remove(this.children[0])
  }
  _updateRadial(e) {
    let r = e.radial,
      o = r.start * ro.DEG2RAD,
      i = r.end * ro.DEG2RAD,
      s = o - i,
      a = new Gd(
        r.rotation[0] * ro.DEG2RAD,
        r.rotation[1] * ro.DEG2RAD,
        r.rotation[2] * ro.DEG2RAD
      ),
      l
    switch (r.axis) {
      case 'z':
        l = new On(0, 0, 1)
        break
      case 'y':
        l = new On(0, 1, 0)
        break
      default:
      case 'x':
        l = new On(1, 0, 0)
        break
    }
    for (let [c, h] of this.children.entries()) {
      h.hiddenMatrix.identity(),
        (h.scale.x = r.scale[0]),
        (h.scale.y = r.scale[1]),
        (h.scale.z = r.scale[2]),
        h.position.setScalar(0)
      let p = (s / e.count) * c - o
      switch (r.axis) {
        case 'x':
          h.rotation.set(0, p, 0)
          break
        case 'y':
          h.rotation.set(0, 0, p)
          break
        case 'z':
          h.rotation.set(p, 0, 0)
          break
      }
      h.translateOnAxis(l, r.radius),
        (h.position.x += r.position[0]),
        (h.position.y += r.position[1]),
        (h.position.z += r.position[2]),
        r.alignment === !0
          ? ((h.rotation.x += a.x), (h.rotation.y += a.y), (h.rotation.z += a.z))
          : h.rotation.copy(a)
    }
  }
  _updateLinear(e) {
    if (e.type !== 'linear') throw new Error()
    let r = e.linear,
      o = new Gd(r.rotation[0] * ro.DEG2RAD, r.rotation[1] * ro.DEG2RAD, r.rotation[2] * ro.DEG2RAD)
    for (let [i, s] of this.children.entries())
      s.hiddenMatrix.identity(),
        (s.scale.x = 1 + (r.scale[0] - 1) * i),
        (s.scale.y = 1 + (r.scale[1] - 1) * i),
        (s.scale.z = 1 + (r.scale[2] - 1) * i),
        (s.rotation.x = o.x * i),
        (s.rotation.y = o.y * i),
        (s.rotation.z = o.z * i),
        (s.position.x = r.position[0] * i),
        (s.position.y = r.position[1] * i),
        (s.position.z = r.position[2] * i)
  }
  _updateGrid(e) {
    let r = 0,
      o = e.grid
    if (o.useCenter === !0) {
      let i = {
          x: o.count[0] % 2 === 0 ? 2 : 1,
          y: o.count[1] % 2 === 0 ? 2 : 1,
          z: o.count[2] % 2 === 0 ? 2 : 1,
        },
        s = new On(
          o.size[0] * (o.count[0] - i.x) * 0.5,
          o.size[1] * (o.count[1] - i.y) * 0.5,
          o.size[2] * (o.count[2] - i.z) * 0.5
        )
      for (let a = 0; a < o.count[0]; a++)
        for (let l = 0; l < o.count[1]; l++)
          for (let c = 0; c < o.count[2]; c++) {
            let h = this.children[r++]
            h.hiddenMatrix.identity(),
              h.scale.setScalar(1),
              h.rotation.set(0, 0, 0),
              (h.position.x = o.size[0] * a - s.x),
              (h.position.y = o.size[1] * l - s.y),
              (h.position.z = o.size[2] * c - s.z)
          }
    } else
      for (let i = 0; i < o.count[0]; i++)
        for (let s = 0; s < o.count[1]; s++)
          for (let a = 0; a < o.count[2]; a++) {
            let l = this.children[r++]
            l.hiddenMatrix.identity(),
              l.scale.setScalar(1),
              l.rotation.set(0, 0, 0),
              (l.position.x = o.size[0] * i),
              (l.position.y = -o.size[1] * s),
              (l.position.z = -o.size[2] * a)
          }
  }
  fromJSON(e) {
    return this
  }
  toJSON() {
    return {}
  }
  fromClonerState(e) {
    return (
      e.hideBase !== void 0 && this.setHideBase(e.hideBase),
      uo(this.parameters, e),
      this.update(),
      this
    )
  }
}
var rt = class extends Yt(kS) {
  constructor(e, r) {
    super(e, r)
    this.isAbstractMesh = !0
    this.isBooleanMesh = !1
    this.booleanMeshSetAddress = -1
    this.booleanWasTransformed = !1
    this.booleanMatrixInvOld = new HS()
    this.booleanExclude = null
    Array.isArray(r) &&
      ((this.selectedMaterial = 0),
      e.groups.length === 0 && e.addGroup(0, e.getAttribute('position').count, 0))
  }
  get cloner() {
    return this._cloner
  }
  set cloner(e) {
    this._cloner && this.remove(this._cloner), e && this.add(e), (this._cloner = e)
  }
  getSelectedMaterial(e) {
    return Array.isArray(this.material)
      ? (this.selectedMaterial === void 0 && (this.selectedMaterial = e != null ? e : 0),
        this.material[e != null ? e : this.selectedMaterial])
      : this.material
  }
  setSelectedMaterial(e, r) {
    Array.isArray(this.material)
      ? (this.selectedMaterial === void 0 && (this.selectedMaterial = r != null ? r : 0),
        (r = r != null ? r : this.selectedMaterial),
        this.material[r].dispose(),
        (this.material[r] = e))
      : (this.material.dispose(), (this.material = e))
  }
  updateGeometry(e) {
    let r = this.geometry,
      o = ec[r.userData.type],
      i =
        this.objectType === 'NonParametric'
          ? Object.assign({}, r.userData, { geometry: r })
          : r.userData,
      s = o.build(o.normalizeInputs(e, i)),
      a = r.uuid
    if (
      (this.geometry.dispose(),
      (this.geometry = s),
      (this.geometry.uuid = a),
      this.geometry.computeBoundingSphere(),
      this.cloner)
    )
      for (let l of this.cloner.children) l.geometry = this.geometry
  }
  resizeGeometry(e, r, o) {
    ln.resizeGeometry(this.geometry, { width: e, height: r, depth: o })
  }
  shallowClone(e) {
    return new this.constructor(this.geometry, this.material).shallowCopy(this, e)
  }
  clone(e) {
    let r =
        this.objectType === 'NonParametric'
          ? Object.assign({}, this.geometry.userData, { geometry: this.geometry.clone() })
          : this.geometry.userData,
      o = In(r),
      i = Array.isArray(this.material) ? this.material.map((s) => s.clone()) : this.material.clone()
    return new this.constructor(o, i).copy(this, e)
  }
  copy(e, r = !0) {
    return (
      super.copy(e, r),
      e.cloner && ((this.cloner = new Co(e, e.cloner.parameters)), this.add(this.cloner)),
      this
    )
  }
  setFromClonerState(e) {
    e === null
      ? (this.cloner = void 0)
      : (this.cloner === void 0 && (this.cloner = new Co(this)), this.cloner.fromClonerState(e))
  }
  fromState(e, r) {
    var o, i, s
    return (
      super.fromState(e),
      e.type === 'Mesh' &&
        (this.setFromClonerState(e.cloner),
        (this.castShadow = (o = e.castShadow) != null ? o : !0),
        (this.receiveShadow = (i = e.receiveShadow) != null ? i : !0),
        (this.booleanExclude = (s = e.booleanExclude) != null ? s : null)),
      this
    )
  }
  freeBooleanPointer() {
    this.booleanMeshSetAddress !== -1 &&
      (Kt.freeMeshSet(this.booleanMeshSetAddress), (this.booleanMeshSetAddress = -1))
  }
  invalidateDownstreamBooleanData(e = !1) {
    return (
      e ? (this.booleanWasTransformed = !0) : this.freeBooleanPointer(),
      vr(this.parent) ? this.parent.invalidateDownstreamBooleanData() : this
    )
  }
  invalidateUpstreamBooleanData() {
    this.freeBooleanPointer()
    for (let e of this.children)
      br(e) && (e.freeBooleanPointer(), vr(e) && e.invalidateUpstreamBooleanData())
  }
}
var JS = new tc(0, 0, 1),
  zd = new tc(),
  Rd = new tc(),
  Fd = new $S(),
  oo = class extends rt {
    constructor(e = ut.create({}), r = new mt({ side: qS })) {
      var o
      super(e, r)
      this.recursiveSelection = !1
      this.objectType = 'VectorObject'
      this.eventDispatcher = new WS()
      this._onShapeUpdate = () => {
        this.updateGeometry({}),
          this.geometry.computeBoundingSphere(),
          this.geometry.computeBoundingBox()
      }
      ;(this.castShadow = !0),
        (this.receiveShadow = !0),
        (this.forceComputeSize = !0),
        (this.shape = e.userData.shape),
        (o = this.shape.eventDispatcher) == null ||
          o.addEventListener('update', this._onShapeUpdate)
    }
    toJSON(e) {
      let r = super.toJSON(e)
      return (r.object.objectType = 'VectorObject'), r
    }
    fromState(e) {
      return super.fromState(e), this.shape.update(), this
    }
    setHelperVisibility() {}
    updateGeometry(e) {
      if ((super.updateGeometry(e), 'userData' in this.geometry)) {
        let r = this.geometry.userData.parameters
        this.eventDispatcher.dispatchEvent({ type: 'geometryUpdate', parameters: r })
      }
    }
    setShape(e) {
      var r, o
      this.shape &&
        ((r = this.shape.eventDispatcher) == null ||
          r.removeEventListener('update', this._onShapeUpdate)),
        (this.shape = e),
        (o = this.shape.eventDispatcher) == null ||
          o.addEventListener('update', this._onShapeUpdate)
    }
    updateWorldMatrix(e, r) {
      super.updateWorldMatrix(e, r),
        Fd.getNormalMatrix(this.matrixWorld),
        zd.copy(JS).applyMatrix3(Fd).normalize(),
        Rd.setFromMatrixPosition(this.matrixWorld),
        this.shape.plane.setFromNormalAndCoplanarPoint(zd, Rd)
    }
    clone(e) {
      let r = this.shape.clone(),
        o = this.material.clone(),
        i = this.geometry.userData,
        s = ut.create(Object.assign({}, i, { shape: r })),
        a = new oo(s, o).copy(this, e)
      return (a.shape = r), r.update(), a
    }
    raycast(e, r) {
      rt.prototype.raycast.call(this, e, r)
    }
  }
function va(n, t) {
  return KS(n)
}
function KS(n) {
  let t = { parameters: n, type: n.type }
  if (n.type === 'VectorGeometry') {
    let r = Pe.createFromState(n.shape, n.width, n.height)
    t.shape = r
  } else
    n.type === 'NonParametricGeometry' &&
      (n.data.groups &&
        n.data.groups.forEach((r) => {
          var o
          return (r.materialIndex = Math.max((o = r.materialIndex) != null ? o : 0, 0))
        }),
      (t.geometry = new YS().parse(n)))
  let e
  try {
    e = In(t)
  } catch (r) {
    console.error(r)
  }
  if (!e) {
    let r = Pe.createFromState(ti.defaultData(), 100, 100)
    ;(t.shape = r), (e = In(t))
  }
  return e
}
var fe
oa.then((n) => {
  fe = n
})
var Ud = new Float32Array([10, 10, 0, -10, 10, 0, -10, -10, 0, 10, -10, 0]),
  kd = new Uint32Array([0, 1, 2, 3]),
  Hd = new Uint8Array([4]),
  nr = class {
    static build(n, t, e, r) {
      let o, i, s
      if ((n == null ? void 0 : n.positionWASM) !== void 0) {
        t && t !== 0 && (fe.free_bvh(t), fe.free_subdivision_surface(t))
        try {
          o = nr.allocate(n, r)
        } catch (a) {
          console.error(a, n),
            (o = nr.allocate({ positionWASM: Ud, indexWASM: kd, verticesPerFaceWASM: Hd }, r))
        }
        fe.set_destination_refinement_level(o, 0), (i = nr.buildLevel(o, !0, e))
      } else o = t
      if (n !== void 0 && n.subdivisions !== void 0) {
        let a = ZS(n.subdivisions, n.positionWASM.length)
        fe.set_destination_refinement_level(o, a),
          a > 0 ? (s = nr.buildLevel(o, !1, e)) : (s = null)
      }
      return { subdivPointer: o, originalGeometry: i, subdividedGeometry: s }
    }
    static primitiveToQuads(n, t) {
      n.widthSegments > 16 && (n.widthSegments = 16),
        n.heightSegments > 16 && (n.heightSegments = 16),
        n.depthSegments > 16 && (n.depthSegments = 16),
        n.radialSegments > 16 && (n.radialSegments = 16),
        n.type === 'DodecahedronGeometry' && (n.detail = 0)
      let e = n.shape !== void 0 ? t.geometry : va(n),
        r,
        o,
        i,
        s
      return (
        ({ positions: r, triIndices: s } = ac(e.getAttribute('position'), e.getIndex())),
        ({ indices: o, verticesPerFace: i } = lc(r, s, e)),
        { positions: r, indices: o, verticesPerFace: i }
      )
    }
    static allocate(n, t) {
      var N
      let e,
        r,
        o,
        i = [],
        s = []
      n.positionWASM && n.positionWASM.length > 0
        ? ((e = n.positionWASM), (r = n.indexWASM), (o = n.verticesPerFaceWASM))
        : ((e = Ud), (r = kd), (o = Hd))
      let a = e.length,
        l = r.length,
        c = o.length,
        h = e.length + i.length + s.length,
        p = r.length + o.length,
        u = h * Float32Array.BYTES_PER_ELEMENT + p * Uint32Array.BYTES_PER_ELEMENT,
        m = h * Float32Array.BYTES_PER_ELEMENT,
        f = p * Uint32Array.BYTES_PER_ELEMENT,
        g = fe._malloc(u),
        w = new Float32Array(fe.HEAPF32.buffer, g, h),
        y = new Uint32Array(fe.HEAPU32.buffer, g + m, p)
      w.set(e, 0),
        w.set(i, e.length),
        w.set(s, e.length + i.length),
        y.set(r, 0),
        y.set(o, r.length)
      let b
      ;(N = n == null ? void 0 : n.scaleBaked) != null &&
        N.some((v) => v !== 1) &&
        (b = new XS().makeScale(...n.scaleBaked)),
        t && (b ? b.premultiply(t) : (b = t))
      let A = b
        ? fe.alloc_subdivision_surface2(
            g,
            a,
            g + m,
            l,
            g + m + r.length * Uint32Array.BYTES_PER_ELEMENT,
            c,
            b.elements
          )
        : fe.alloc_subdivision_surface(
            g,
            a,
            g + m,
            l,
            g + m + r.length * Uint32Array.BYTES_PER_ELEMENT,
            c
          )
      return fe._free(g), A
    }
    static buildLevel(n, t, e, r, o) {
      let i = o
          ? fe.get_mesh_data2(
              n,
              t ? fe.Level.CONTROL : fe.Level.REFINED,
              e != null ? e : !t,
              o.elements
            )
          : fe.get_mesh_data(n, t ? fe.Level.CONTROL : fe.Level.REFINED, e != null ? e : !t),
        s = 8,
        a = fe.HEAPU32.subarray(i >> 2, (i >> 2) + s),
        l = a.subarray(4, 4 + 4),
        c = 0,
        h = fe.HEAPU32[a[c] >> 2],
        p = fe.HEAPF32.subarray(h >> 2, (h >> 2) + l[c])
      c++
      let u = fe.HEAPU32[a[c] >> 2],
        m = fe.HEAPF32.subarray(u >> 2, (u >> 2) + l[c])
      c++
      let f = fe.HEAPU32[a[c] >> 2],
        g = fe.HEAPU32.subarray(f >> 2, (f >> 2) + l[c])
      c++
      let w = fe.HEAPU32[a[c] >> 2],
        y = fe.HEAPU32.subarray(w >> 2, (w >> 2) + l[c])
      if ((c++, r === void 0)) {
        let b = new Vd()
        if (
          (b.setIndex(new rc(y, 1)),
          b.setAttribute('position', new oc(p, 3)),
          b.setAttribute('normal', new oc(m, 3)),
          t)
        ) {
          b.setAttribute('faceMap', new rc(g, 1))
          let A = new Float32Array((m.length / 3) * 4).fill(0)
          b.setAttribute('color', new jd(A, 4))
        }
        return fe.free_mesh_data(i), (b.userData.type = 'SubdivGeometry'), b
      }
      r.getAttribute('position').copyArray(p),
        r.getAttribute('normal').copyArray(m),
        (r.attributes.position.needsUpdate = !0),
        (r.attributes.normal.needsUpdate = !0),
        fe.free_mesh_data(i)
    }
    static buildControlCageWireframe(n, t, e) {
      let r = fe.get_wireframe_data_for_base_level(n),
        o = 4,
        i = fe.HEAPU32.subarray(r >> 2, (r >> 2) + o),
        s = i.subarray(2, 2 + 2),
        a = 0,
        l = fe.HEAPU32[i[a] >> 2],
        c = fe.HEAPF32.subarray(l >> 2, (l >> 2) + s[a])
      a++
      let h = fe.HEAPU32[i[a] >> 2],
        p = fe.HEAPU32.subarray(h >> 2, (h >> 2) + s[a])
      if (t === void 0) {
        let u = new Vd()
        u.setAttribute('position', new oc(c, 3))
        let m = new Float32Array(c.length)
        for (let f = 0, g = c.length; f < g; ) (m[f++] = e.r), (m[f++] = e.g), (m[f++] = e.b)
        return (
          u.setAttribute('color', new jd(m, 3)),
          u.setIndex(new rc(p, 1)),
          fe.free_wireframe_data_for_base_level(r),
          u
        )
      }
      t.getAttribute('position').copyArray(c),
        (t.attributes.position.needsUpdate = !0),
        fe.free_wireframe_data_for_base_level(r)
    }
    static updateCollabMesh(n, t, e) {
      t || fe.set_destination_refinement_level(n, 1)
      let r = e
          ? fe.get_topological_data2(n, t ? fe.Level.CONTROL : fe.Level.REFINED, e.elements)
          : fe.get_topological_data(n, t ? fe.Level.CONTROL : fe.Level.REFINED),
        o = 6,
        i = fe.HEAPU32.subarray(r >> 2, (r >> 2) + o),
        s = i.subarray(3, 3 + 3),
        a = 0,
        l = fe.HEAPU32[i[a] >> 2],
        c = new Float32Array(fe.HEAPF32.subarray(l >> 2, (l >> 2) + s[a]))
      a++
      let h = fe.HEAPU32[i[a] >> 2],
        p = new Uint32Array(fe.HEAPU32.subarray(h >> 2, (h >> 2) + s[a]))
      a++
      let u = fe.HEAPU32[i[a] >> 2],
        m = new Uint8Array(fe.HEAPU32.subarray(u >> 2, (u >> 2) + s[a]))
      return fe.free_topological_data(r), { positions: c, indices: p, verticesPerFace: m }
    }
  }
function ZS(n, t) {
  let e = n
  return (e = Math.min(e, 3 - Math.ceil(Math.log(t / 172e3) / Math.log(4)))), Math.max(e, 0)
}
var qd = ['getX', 'getY', 'getZ']
function ac(n, t) {
  let e = {},
    r = t ? t.count : n.count,
    o = 0,
    i = [],
    s = [],
    a = 1e4
  for (let c = 0; c < r; c++) {
    let h = t ? t.getX(c) : c,
      p = ''
    for (let u = 0; u < 3; u++) p += `${~~(n[qd[u]](h) * a)},`
    if (p in e) i.push(e[p])
    else {
      for (let u = 0; u < 3; u++) s.push(n[qd[u]](h))
      ;(e[p] = o), i.push(o), o++
    }
  }
  let l = []
  for (let c = 0; c < i.length; c += 3)
    i[c] === i[c + 1] ||
      i[c] === i[c + 2] ||
      i[c + 1] === i[c + 2] ||
      l.push(i[c], i[c + 1], i[c + 2])
  return { positions: s, triIndices: l }
}
var Sa = new wa(),
  ic = new wa(),
  nc = new wa(),
  sc = new wa()
function lc(n, t, e) {
  var i
  let r = [],
    o = []
  if (e.userData.shape !== void 0 && e.userData.parameters.depth === 0) {
    let s = e.userData.shape.extractShapePointsToFlatArray([]),
      a = 0
    for (let c = 0; c < s.length; c += 2)
      a += (s[c] - s[(c === 0 ? s.length : c) - 2]) * (s[c + 1] + s[(c === 0 ? s.length : c) - 1])
    n.length = 0
    let l = 0
    if (a < 0) for (let c = 0; c < s.length; c += 2) n.push(s[c], s[c + 1], 0), r.push(l++)
    else for (let c = s.length - 2; c >= 0; c -= 2) n.push(s[c], s[c + 1], 0), r.push(l++)
    return o.push(l), { indices: r, verticesPerFace: o }
  }
  for (let s = 0, a = (i = e.capStartIndex) != null ? i : t.length; s < a; )
    if (
      (t[s + 1] === t[s + 3] && t[s + 2] === t[s + 5]) ||
      (t[s + 0] === t[s + 3] && t[s + 2] === t[s + 4])
    ) {
      Sa.set(n[t[s] * 3], n[t[s] * 3 + 1], n[t[s] * 3 + 2]),
        ic.set(n[t[s + 1] * 3], n[t[s + 1] * 3 + 1], n[t[s + 1] * 3 + 2]),
        nc.set(n[t[s + 4] * 3], n[t[s + 4] * 3 + 1], n[t[s + 4] * 3 + 2]),
        sc.set(n[t[s + 5] * 3], n[t[s + 5] * 3 + 1], n[t[s + 5] * 3 + 2]),
        ic.sub(Sa).normalize(),
        nc.sub(Sa).normalize(),
        sc.sub(Sa).normalize()
      let l = ic.cross(nc).dot(sc)
      Math.abs(l) > 0.005
        ? (r.push(t[s], t[s + 1], t[s + 2]), o.push(3), (s += 3))
        : (r.push(t[s], t[s + 1], t[s + 4], t[s + 5]), o.push(4), (s += 6))
    } else r.push(t[s], t[s + 1], t[s + 2]), o.push(3), (s += 3)
  if (e.capStartIndex !== void 0) {
    let s = [],
      a = [],
      l = 0
    for (let c = 0, h = 0; c < n.length; c += 3, h++)
      n[c + 2] === 0 && (s.push(h), l++), n[c + 2] === e.userData.parameters.depth && a.push(h)
    if (e.userData.parameters.extrudeBevelSize === 0) {
      let c = a[0]
      ;(a[0] = a[1]), (a[1] = c)
    }
    s.reverse(), r.push(...s, ...a), o.push(l, l)
  }
  return { indices: r, verticesPerFace: o }
}
var Kt = {}
wc(Kt, {
  calcBoolean: () => ow,
  calcBooleanTopological: () => rw,
  freeMeshSet: () => sw,
  getMeshSet: () => iw,
  transformMeshSet: () => nw,
})
var QS,
  Wd = new Promise((n) => {
    QS = n
  })
import { Float32BufferAttribute as $d, Sphere as ew } from 'three'
var Le, Li
Wd.then((n) => (Le = n))
function tw(n, t) {
  let e,
    { positions: r, triIndices: o } = ac(n.getAttribute('position'), n.getIndex()),
    i
  if (t) {
    let { indices: s, verticesPerFace: a } = lc(r, o, n)
    ;(i = a.length), (e = [])
    for (let l = 0, c = 0; l < i; l++) {
      e.push(a[l])
      for (let h = 0; h < a[l]; h++) e.push(s[c++])
    }
  } else {
    let s = o.length
    ;(e = Array(s + s / 3)), (i = 0)
    for (let a = 0, l = 0; l < e.length; )
      (e[l++] = 3), i++, (e[l++] = o[a++]), (e[l++] = o[a++]), (e[l++] = o[a++])
  }
  return { positions: r, faceIndices: e, nFaces: i }
}
function Jd(n) {
  let t = n.length,
    e = t * Uint32Array.BYTES_PER_ELEMENT,
    r = t * Float32Array.BYTES_PER_ELEMENT,
    o = Number.isInteger(n[0]) ? e : r,
    i = Le._malloc(o)
  return (
    (Number.isInteger(n[0])
      ? new Uint32Array(Le.HEAPU32.buffer, i, t)
      : new Float32Array(Le.HEAPF32.buffer, i, t)
    ).set(n, 0),
    i
  )
}
function Yd(n) {
  switch (n) {
    case 0:
      return Le.OP.UNION
    case 1:
      return Le.OP.INTERSECTION
    case 2:
      return Le.OP.A_MINUS_B
    case 3:
      return Le.OP.B_MINUS_A
    case 4:
      return Le.OP.SYMMETRIC_DIFFERENCE
    case 5:
      return Le.OP.ALL
    default:
      throw new Error('Unknown boolean operation ' + n)
  }
}
function rw(n, t) {
  Li === void 0 && (Li = Le.init_csg())
  let e = Jd(n),
    r = Le.csg_calc_topological(Li, e, n.length, Yd(t))
  Le._free(e)
  let o = 6,
    i = Le.HEAPU32.subarray(r >> 2, (r >> 2) + o),
    s = i.subarray(3, 3 + 3),
    a = 0,
    l = Le.HEAPU32[i[a] >> 2],
    c = new Float32Array(Le.HEAPF32.subarray(l >> 2, (l >> 2) + s[a]))
  a++
  let h = Le.HEAPU32[i[a] >> 2],
    p = new Uint32Array(Le.HEAPU32.subarray(h >> 2, (h >> 2) + s[a]))
  a++
  let u = Le.HEAPU32[i[a] >> 2],
    m = new Uint8Array(Le.HEAPU32.subarray(u >> 2, (u >> 2) + s[a]))
  return Le.free_mesh_data(r), { positions: c, indices: p, verticesPerFace: m }
}
function ow(n, t, e) {
  Li === void 0 && (Li = Le.init_csg())
  let r = Jd(n),
    o = Le.csg_calc(Li, r, n.length, Yd(t))
  Le._free(r)
  let i = 5,
    s = Le.HEAPU32.subarray(o >> 2, (o >> 2) + i),
    a = s.subarray(2, 2 + 3),
    l = 0,
    c = Le.HEAPU32[s[l] >> 2],
    h = Le.HEAPF32.subarray(c >> 2, (c >> 2) + a[l])
  l++
  let p = Le.HEAPU32[s[l] >> 2],
    u = Le.HEAPF32.subarray(p >> 2, (p >> 2) + a[l])
  l++
  let m = a[l]
  e.setAttribute('position', new $d(h, 3)), e.setAttribute('normal', new $d(u, 3))
  let f = Le.HEAPF32.subarray((o >> 2) + 5, (o >> 2) + 5 + 6)
  return (
    e.boundingSphere === null && (e.boundingSphere = new ew()),
    e.boundingSphere.center.set(f[0], f[1], f[2]),
    (e.boundingSphere.radius = (f[3] ** 2 + f[4] ** 2 + f[5] ** 2) ** 0.5),
    (e.userData.parameters = { width: f[3] * 2, height: f[4] * 2, depth: f[5] * 2 }),
    Le.free_mesh_data(o),
    m
  )
}
function iw(n, t) {
  if (Le === void 0) return -1
  let e, r, o
  if (t && n.userData.positions !== void 0) {
    let g = n.userData
    ;(o = g.verticesPerFace.length),
      (e = g.positions),
      (r = Array(g.verticesPerFace.reduce((w, y) => w + y, 0) + o))
    for (let w = 0, y = 0, b = 0; w < g.verticesPerFace.length; w++) {
      r[b++] = g.verticesPerFace[w]
      for (let A = 0; A < g.verticesPerFace[w]; A++) r[b++] = g.indices[y++]
    }
  } else ({ positions: e, faceIndices: r, nFaces: o } = tw(n, t))
  let i = e.length,
    s = r.length,
    a = e.length,
    l = r.length,
    c = a * Float32Array.BYTES_PER_ELEMENT + l * Uint32Array.BYTES_PER_ELEMENT,
    h = a * Float32Array.BYTES_PER_ELEMENT,
    p = l * Uint32Array.BYTES_PER_ELEMENT,
    u = Le._malloc(c),
    m = new Float32Array(Le.HEAPF32.buffer, u, a),
    f = new Uint32Array(Le.HEAPU32.buffer, u + h, l)
  return m.set(e, 0), f.set(r, 0), Le.get_csg_mesh(u, i, u + h, s, o)
}
function nw(n, t) {
  Le.transform_csg_mesh(n, t.elements)
}
function sw(n) {
  Le.free_csg_mesh(n)
}
var ec = {
    ConeGeometry: fu,
    CubeGeometry: yu,
    CylinderGeometry: mu,
    DodecahedronGeometry: gu,
    EllipseGeometry: ju,
    HelixGeometry: Wu,
    IcosahedronGeometry: $u,
    LatheGeometry: Ju,
    NonParametricGeometry: Zu,
    PolygonGeometry: Qu,
    PyramidGeometry: ed,
    RectangleGeometry: ta,
    SphereGeometry: td,
    PlaneGeometry: rd,
    StarGeometry: od,
    TextFrameGeometry: ra,
    TorusGeometry: id,
    TorusKnotGeometry: nd,
    TriangleGeometry: sd,
    VectorGeometry: ut,
  },
  In = (n) => ec[n.type].create(n)
import { BufferGeometry as Kd, Matrix4 as aw } from 'three'
var Xd = new aw()
var La = class extends rt {
  constructor(e = new Kd(), r = new Pt()) {
    super(e, r)
    this.booleanOp = 2
    this.meshSetAddresses = []
    this.needsTransformForDownstream = !1
    ;(this.isBooleanMesh = !0),
      (this.castShadow = !0),
      (this.receiveShadow = !0),
      (this.geometry.userData.parameters = { width: 0, height: 0, depth: 0 }),
      (this.onAfterRender = this.recomputeBoolean.bind(this))
  }
  reInit() {
    ;(this.isBooleanMesh = !0),
      (this.meshSetAddresses = []),
      (this.needsTransformForDownstream = !1),
      (this.geometry.userData.parameters = { width: 0, height: 0, depth: 0 }),
      (this.onAfterRender = this.recomputeBoolean.bind(this))
  }
  recomputeBoolean(e) {
    if (this.booleanMeshSetAddress !== -1) return
    for (let o = 0; o < this.children.length; o++) {
      let i = this.children[o]
      vr(i) && i.recomputeBoolean(e === !0)
    }
    this.meshSetAddresses = []
    for (let o = 0; o < this.children.length; o++) {
      let i = this.children[o]
      if (_d(i) && i.booleanExclude === !1 && i.geometry.drawRange.count > 0) {
        if (i.booleanMeshSetAddress === -1) {
          if (
            ((i.booleanMeshSetAddress = Kt.getMeshSet(i.geometry, e === !0)),
            i.booleanMeshSetAddress === -1)
          )
            return
          Kt.transformMeshSet(i.booleanMeshSetAddress, i.matrix),
            i.booleanMatrixInvOld.copy(i.matrix).invert(),
            (i.booleanWasTransformed = !1)
        } else
          vr(i) && i.needsTransformForDownstream === !0
            ? (Kt.transformMeshSet(i.booleanMeshSetAddress, i.matrix),
              (i.needsTransformForDownstream = !1))
            : i.booleanWasTransformed === !0 &&
              (Xd.multiplyMatrices(i.matrix, i.booleanMatrixInvOld),
              Kt.transformMeshSet(i.booleanMeshSetAddress, Xd),
              i.booleanMatrixInvOld.copy(i.matrix).invert(),
              (i.booleanWasTransformed = !1))
        this.meshSetAddresses.push(i.booleanMeshSetAddress)
      }
    }
    if (this.meshSetAddresses.length === 0) {
      this.geometry.setDrawRange(0, 0)
      return
    }
    if (e === !0) return Kt.calcBooleanTopological(this.meshSetAddresses, this.booleanOp)
    let r = this.geometry
    r.dispose(),
      (this.geometry = new Kd()),
      (this.geometry.userData = r.userData),
      (this.geometry.boundingSphere = r.boundingSphere),
      (this.booleanMeshSetAddress = Kt.calcBoolean(
        this.meshSetAddresses,
        this.booleanOp,
        this.geometry
      )),
      this.booleanMatrixInvOld.copy(this.matrix).invert(),
      (this.needsTransformForDownstream = !0)
  }
  toJSON(e) {
    let r = super.toJSON(e)
    return (r.object.objectType = 'Mesh3D'), r
  }
  updateGeometry(e) {
    ;(this.booleanOp = e.parameters.operation),
      this.invalidateDownstreamBooleanData().recomputeBoolean()
  }
}
import {
  Camera as Lw,
  OrthographicCamera as Cw,
  PerspectiveCamera as Tw,
  Vector3 as jt,
  Object3D as em,
  Quaternion as Nw,
} from 'three'
import { BoxBufferGeometry as lw } from 'three'
var Sr = (n) => {
  var t
  return (
    (t = class extends n {
      constructor() {
        super(...arguments)
        this.isObjectHelper = !0
      }
    }),
    (t.geometryHelper = new lw(30, 30, 30)),
    t
  )
}
import {
  Camera as dw,
  LineSegments as mw,
  BufferGeometry as fw,
  LineBasicMaterial as yw,
  Color as hc,
  Vector3 as gw,
  Float32BufferAttribute as Qd,
} from 'three'
import { Ray as cw, Sphere as hw, Matrix4 as pw, Vector3 as zr } from 'three'
var Ca = new cw(),
  cc = new hw(),
  Zd = new pw(),
  wr = (n, t, e, r, o = !1) => {
    let i = t,
      s = n.matrixWorld
    if (
      (i.boundingSphere === null && i.computeBoundingSphere(),
      cc.copy(i.boundingSphere),
      cc.applyMatrix4(s),
      e.ray.intersectsSphere(cc) === !1 ||
        (Zd.copy(s).invert(),
        Ca.copy(e.ray).applyMatrix4(Zd),
        i.boundingBox !== null && Ca.intersectsBox(i.boundingBox) === !1))
    )
      return
    let a,
      l,
      c,
      h,
      p = i.index,
      u = i.attributes.position,
      m = i.drawRange,
      f,
      g
    if (o === !1) {
      let y = Math.max(0, m.start),
        b = Math.min(p.count, m.start + m.count)
      for (f = y, g = b; f < g; f += 3)
        if (
          ((l = p.getX(f)),
          (c = p.getX(f + 1)),
          (h = p.getX(f + 2)),
          (a = w(n, e, Ca, u, l, c, h)),
          a)
        ) {
          ;(a.faceIndex = Math.floor(f / 3)), r.push(a)
          return
        }
    } else {
      let b = i.attributes.position,
        A = new zr(),
        N = new zr(),
        v = new zr(),
        k = new zr(),
        L = 2,
        I = 1 / ((n.scale.x + n.scale.y + n.scale.z) / 3),
        x = I * I,
        C = Math.max(0, m.start),
        T = Math.min(b.count, m.start + m.count)
      for (let P = C, $ = T - 1; P < $; P += L) {
        if (
          (A.fromBufferAttribute(b, P),
          N.fromBufferAttribute(b, P + 1),
          Ca.distanceSqToSegment(A, N, k, v) > x)
        )
          continue
        k.applyMatrix4(n.matrixWorld)
        let ie = e.ray.origin.distanceTo(k)
        ie < e.near ||
          ie > e.far ||
          r.push({ distance: ie, point: v.clone().applyMatrix4(n.matrixWorld), object: n })
      }
    }
    function w(y, b, A, N, v, k, L) {
      let d = new zr(),
        I = new zr(),
        x = new zr(),
        C = new zr(),
        T = new zr()
      if (
        (d.fromBufferAttribute(N, v),
        I.fromBufferAttribute(N, k),
        x.fromBufferAttribute(N, L),
        A.intersectTriangle(d, I, x, !1, C) === null)
      )
        return null
      T.copy(C), T.applyMatrix4(y.matrixWorld)
      let $ = b.ray.origin.distanceTo(T)
      return $ < b.near || $ > b.far
        ? null
        : { faceIndex: 1, distance: $, point: T.clone(), object: y }
    }
  }
var Ta = new gw(),
  Xt = new dw(),
  pc = class extends mw {
    constructor(e) {
      let r = new fw(),
        o = new yw({ color: 16777215, vertexColors: !0, toneMapped: !1 }),
        i = [],
        s = [],
        a = {},
        l = new hc(15711266),
        c = new hc(15711266),
        h = new hc(2857471)
      p('n1', 'n2', l),
        p('n2', 'n4', l),
        p('n4', 'n3', l),
        p('n3', 'n1', l),
        p('f1', 'f2', l),
        p('f2', 'f4', l),
        p('f4', 'f3', l),
        p('f3', 'f1', l),
        p('n1', 'f1', l),
        p('n2', 'f2', l),
        p('n3', 'f3', l),
        p('n4', 'f4', l),
        p('p', 'n1', c),
        p('p', 'n2', c),
        p('p', 'n3', c),
        p('p', 'n4', c),
        p('u1', 'u2', h),
        p('u2', 'u3', h),
        p('u3', 'u1', h)
      function p(m, f, g) {
        u(m, g), u(f, g)
      }
      function u(m, f) {
        i.push(0, 0, 0),
          s.push(f.r, f.g, f.b),
          a[m] === void 0 && (a[m] = []),
          a[m].push(i.length / 3 - 1)
      }
      r.setAttribute('position', new Qd(i, 3)), r.setAttribute('color', new Qd(s, 3))
      super(r, o)
      ;(this.type = 'CameraHelper'),
        (this.camera = e),
        this.camera.updateProjectionMatrix && this.camera.updateProjectionMatrix(),
        (this.matrix = e.matrixWorld),
        (this.matrixAutoUpdate = !1),
        (this.pointMap = a),
        this.update()
    }
    update() {
      let e = this.geometry,
        r = this.pointMap,
        o = !0
      Xt.projectionMatrixInverse.elements = [
        0.5112609807824982, -0, -0, -0, -0, 0.41421356237309503, -0, -0, -0, -0, -0, -0.099999, -0,
        -0, -1.0000000000000002, 0.100001,
      ]
      let i = 1,
        s = 1,
        a = o ? 0.8 : 1e-4
      sr('n1', r, e, Xt, -i, -s, a),
        sr('n2', r, e, Xt, i, -s, a),
        sr('n3', r, e, Xt, -i, s, a),
        sr('n4', r, e, Xt, i, s, a)
      let l = a
      sr('f1', r, e, Xt, -i, -s, l),
        sr('f2', r, e, Xt, i, -s, l),
        sr('f3', r, e, Xt, -i, s, l),
        sr('f4', r, e, Xt, i, s, l)
      let c = l,
        h = 0.5
      sr('u1', r, e, Xt, i * 0.7 * h, s * 1.1, c),
        sr('u2', r, e, Xt, -i * 0.7 * h, s * 1.1, c),
        sr('u3', r, e, Xt, 0, s * (1.1 + 0.9 * h), c),
        (e.getAttribute('position').needsUpdate = !0)
    }
    dispose() {
      this.geometry.dispose(), this.material.dispose()
    }
  }
function sr(n, t, e, r, o, i, s) {
  Ta.set(o, i, s).unproject(r)
  let a = t[n]
  if (a !== void 0) {
    let l = e.getAttribute('position')
    for (let c = 0, h = a.length; c < h; c++) l.setXYZ(a[c], Ta.x, Ta.y, Ta.z)
  }
}
var Na = class extends Sr(pc) {
  constructor(e) {
    super(e)
    this.object = e
    ;(this.object = e), (this.name = `CombinedCameraHelper: ${e.uuid}`)
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e), this.updateTarget()
  }
  updateTarget() {
    let e = this.object.getTarget()
    this.updateWorldMatrix(!0, !1), this.worldToLocal(e)
  }
  raycast(e, r) {
    wr(this.object, this.geometry, e, r, !0)
  }
}
import { DirectionalLightHelper as xw } from 'three'
var Ci = class extends Sr(xw) {
  constructor(e, r = 15, o = 10066329) {
    super(e, r, o)
    this.object = e
    this.name = `DirectionalLightHelper: ${e.uuid}`
  }
  raycast(e, r) {
    wr(this.object, Ci.geometryHelper, e, r)
  }
}
import { AxesHelper as bw } from 'three'
var Ti = class extends Sr(bw) {
  constructor(e, r = 15) {
    super(r)
    this.object = e
    this.object.updateMatrixWorld(),
      (this.name = `EmptyObjectHelper: ${e.uuid}`),
      (this.matrix = e.matrixWorld),
      (this.matrixAutoUpdate = !1)
  }
  raycast(e, r) {
    wr(this.object, Ti.geometryHelper, e, r)
  }
  update() {}
}
import { PointLightHelper as vw } from 'three'
var Ni = class extends Sr(vw) {
  constructor(e, r = 15, o = 6710886) {
    super(e, r, o)
    this.object = e
    this.name = `PointLightHelper: ${e.uuid}`
  }
  raycast(e, r) {
    wr(this.object, Ni.geometryHelper, e, r)
  }
}
import { SpotLightHelper as Sw, Vector3 as ww } from 'three'
var Ma = class extends Sr(Sw) {
    constructor(e, r = 6710886) {
      super(e, r)
      this.object = e
      this.name = `SpotLightHelper: ${e.uuid}`
    }
    raycast(e, r) {
      wr(this.object, Ma.geometryHelper, e, r)
    }
    update() {
      if (this.object !== void 0) {
        let e = Ma._vector,
          r = this.object.distance ? this.object.distance : 1e3,
          o = r * Math.tan(this.object.angle)
        this.cone.scale.set(o, o, r),
          e.setFromMatrixPosition(this.object.target.matrixWorld),
          this.cone.lookAt(e)
        let i = this.color !== void 0 ? this.color : this.light.color
        if (this.cone.material instanceof Array)
          for (let s = 0, a = this.cone.material.length; s < a; s++)
            this.cone.material[s].color.set(i)
        else this.cone.material.color.set(i)
      }
    }
  },
  An = Ma
An._vector = new ww()
var Lr = (n, t) =>
  class extends n {
    constructor() {
      super(...arguments)
      this.objectHelper = new t(this)
      this.enableHelper = !1
    }
    set visibility(o) {
      ;(this.visible = o), this.setHelperVisibility(o), this.setHelperChildrenVisibility(o)
    }
    get visibility() {
      return this.visible
    }
    get geometryHelper() {
      return t.geometryHelper
    }
    setHelperVisibility(o) {
      this.objectHelper.visible = o
    }
    setHelperChildrenVisibility(o) {
      for (let i of this.children)
        Jt(i) &&
          i.traverseEntity((s) => {
            Gr(s) && s.visible && (s.objectHelper.visible = o)
          })
    }
    raycast(o, i) {
      this.objectHelper.raycast(o, i)
    }
    copy(o, i = !0) {
      return (
        super.copy(o, i),
        o.enableHelper !== void 0 && (this.enableHelper = o.enableHelper),
        o.objectHelper !== void 0 && (this.objectHelper.visible = o.objectHelper.visible),
        this
      )
    }
    toJSON(o) {
      let i = super.toJSON(o),
        s = i.object
      return (s.enableHelper = this.enableHelper), i
    }
    fromJSON(o) {
      return super.fromJSON(o), o.enableHelper !== void 0 && (this.enableHelper = !0), this
    }
    fromLightState(o, i) {
      if (
        this.objectType === 'LightDirectional' ||
        this.objectType === 'LightPoint' ||
        this.objectType === 'LightSpot'
      ) {
        let s = this
        o.color !== void 0 && (s.color = Xe(o.color, i)),
          o.intensity !== void 0 && (s.intensity = o.intensity),
          o.depth !== void 0 && ((s.shadow.camera.far = o.depth), (s.shadow.needsUpdate = !0)),
          o.shadows !== void 0 && (this.castShadow = o.shadows),
          o.helper !== void 0 &&
            ((this.enableHelper = o.helper), (s.gizmos.shadowmap.visible = o.helper))
      }
      return this
    }
  }
var Mi = new jt(),
  uc = new jt(),
  Rr = class extends Lr(Yt(Lw), Na) {
    constructor(e = window.innerWidth, r = window.innerHeight, o = 45, i, s = 1e5) {
      super()
      this.objectType = 'CombinedCamera'
      this._cameraType = 'OrthographicCamera'
      this.targetOffset = mo.DefaultTargetOffset
      this.isUpVectorFlipped = !1
      this.angleOffsetFromUp = 0
      ;(this.width = e),
        (this.height = r),
        (this.orthoCamera = new Cw(e * -0.5, e * 0.5, r * 0.5, r * -0.5, i != null ? i : -5e4, s)),
        (this.perspCamera = new Tw(o, e / r, i != null ? i : 50, s)),
        (this.left = this.orthoCamera.left),
        (this.right = this.orthoCamera.right),
        (this.top = this.orthoCamera.top),
        (this.bottom = this.orthoCamera.bottom),
        (this.far = this.orthoCamera.far),
        (this.view = this.orthoCamera.view),
        (this.aspect = this.perspCamera.aspect),
        (this.fov = this.perspCamera.fov),
        (this.focus = this.perspCamera.focus),
        (this.filmGauge = this.perspCamera.filmGauge),
        (this.filmOffset = this.perspCamera.filmOffset),
        this.toOrthographic(!0)
    }
    static createFromState(e, r) {
      let o = new Rr().fromState(r)
      return (o.enableHelper = !0), o.objectHelper.update(), (o.uuid = e), o
    }
    get isPerspectiveCamera() {
      return this.cameraType === 'PerspectiveCamera'
    }
    get isOrthographicCamera() {
      return !this.isPerspectiveCamera
    }
    get cameraType() {
      return this._cameraType
    }
    setNear(e, r) {
      e === 'PerspectiveCamera' ? (this.perspCamera.near = r) : (this.orthoCamera.near = r)
    }
    setZoom(e, r) {
      r >= 0 &&
        (e === 'PerspectiveCamera' ? (this.perspCamera.zoom = r) : (this.orthoCamera.zoom = r))
    }
    set cameraType(e) {
      e === 'PerspectiveCamera'
        ? this.toPerspective()
        : e === 'OrthographicCamera' && this.toOrthographic()
    }
    get near() {
      return this._cameraType === 'PerspectiveCamera'
        ? this.perspCamera.near
        : this.orthoCamera.near
    }
    set near(e) {
      this._cameraType === 'PerspectiveCamera'
        ? (this.perspCamera.near = e)
        : (this.orthoCamera.near = e)
    }
    get zoom() {
      return this._cameraType === 'PerspectiveCamera'
        ? this.perspCamera.zoom
        : this.orthoCamera.zoom
    }
    set zoom(e) {
      e >= 0 &&
        (this._cameraType === 'PerspectiveCamera'
          ? (this.perspCamera.zoom = e)
          : (this.orthoCamera.zoom = e))
    }
    lookAt(e) {
      super.lookAt(e), this.getWorldPosition(Mi), (this.targetOffset = Mi.distanceTo(e))
    }
    getTarget(e = new jt()) {
      return (
        this.getWorldDirection(uc),
        this.getWorldPosition(Mi),
        uc.multiplyScalar(this.targetOffset),
        e.copy(Mi).add(uc),
        e
      )
    }
    getDistanceToTarget() {
      let e = this.getTarget()
      return this.getWorldPosition(Mi), Mi.distanceTo(e)
    }
    updateUp() {
      let e = this.getWorldQuaternion(new Nw()),
        r = new jt(0, 0, 1).applyQuaternion(e),
        o = new jt().copy(em.DefaultUp)
      this.isUpVectorFlipped && o.negate(), o.applyQuaternion(e)
      let i = new jt().copy(em.DefaultUp).projectOnPlane(r),
        s = new jt().crossVectors(i, o).dot(r) >= 0 ? 1 : -1
      this.angleOffsetFromUp = i.angleTo(o) * s
    }
    getViewFrontToObject(e) {
      let r = e.getWorldPosition(new jt()),
        i = e.getWorldDirection(new jt()).multiplyScalar(this.targetOffset)
      return { position: r.clone().add(i), target: r }
    }
    getViewToObject(e) {
      let r = e.getWorldPosition(new jt()),
        i = this.getWorldDirection(new jt()).multiplyScalar(this.targetOffset)
      return { position: r.clone().sub(i), target: r }
    }
    setViewplaneSize(e, r) {
      ;(this.left = -e * 0.5),
        (this.right = e * 0.5),
        (this.top = r * 0.5),
        (this.bottom = -r * 0.5),
        (this.aspect = e / r),
        this.updateProjectionMatrix()
    }
    toOrthographic(e) {
      ;(this.orthoCamera.left = this.left),
        (this.orthoCamera.right = this.right),
        (this.orthoCamera.top = this.top),
        (this.orthoCamera.bottom = this.bottom),
        (this.orthoCamera.view = this.view),
        (this.orthoCamera.far = this.far),
        this.orthoCamera.updateProjectionMatrix(),
        (this.projectionMatrix = this.orthoCamera.projectionMatrix),
        (this.projectionMatrixInverse = this.orthoCamera.projectionMatrixInverse),
        (this._cameraType = 'OrthographicCamera'),
        (this.enableHelper === !0 || e === !0) && this.objectHelper.update()
    }
    toPerspective(e) {
      ;(this.perspCamera.aspect = this.aspect),
        (this.perspCamera.fov = this.fov),
        (this.perspCamera.view = this.view),
        (this.perspCamera.far = this.far),
        this.perspCamera.updateProjectionMatrix(),
        (this.projectionMatrix = this.perspCamera.projectionMatrix),
        (this.projectionMatrixInverse = this.perspCamera.projectionMatrixInverse),
        (this._cameraType = 'PerspectiveCamera'),
        (this.enableHelper === !0 || e === !0) && this.objectHelper.update()
    }
    setFocalLength(e) {
      this.perspCamera.setFocalLength(e), this.toPerspective()
    }
    getFocalLength() {
      return this.perspCamera.getFocalLength()
    }
    getEffectiveFOV() {
      return this.perspCamera.getEffectiveFOV()
    }
    getFilmWidth() {
      return this.perspCamera.getFilmWidth()
    }
    getFilmHeight() {
      return this.perspCamera.getFilmHeight()
    }
    setViewOffset(e, r, o, i, s, a) {
      this._cameraType === 'PerspectiveCamera'
        ? this.perspCamera.setViewOffset(e, r, o, i, s, a)
        : this.orthoCamera.setViewOffset(e, r, o, i, s, a)
    }
    clearViewOffset() {
      this._cameraType === 'PerspectiveCamera'
        ? (this.perspCamera.clearViewOffset(), this.toPerspective())
        : (this.orthoCamera.clearViewOffset(), this.toOrthographic())
    }
    updateProjectionMatrix(e) {
      this._cameraType === 'PerspectiveCamera'
        ? this.toPerspective(e)
        : this._cameraType === 'OrthographicCamera' && this.toOrthographic(e)
    }
    updateMatrixWorld(e) {
      super.updateMatrixWorld(e), this.matrixWorldInverse.copy(this.matrixWorld).invert()
    }
    updateWorldMatrix(e, r) {
      super.updateWorldMatrix(e, r), this.matrixWorldInverse.copy(this.matrixWorld).invert()
    }
    copy(e, r) {
      return (
        super.copy(e, r),
        this.orthoCamera.copy(e.orthoCamera),
        this.perspCamera.copy(e.perspCamera),
        (this.left = e.left),
        (this.right = e.right),
        (this.top = e.top),
        (this.bottom = e.bottom),
        (this.far = e.far),
        (this.view = e.view === null ? null : Object.assign({}, e.view)),
        (this._cameraType = e._cameraType),
        (this.aspect = e.aspect),
        (this.fov = e.fov),
        (this.focus = e.focus),
        (this.filmGauge = e.filmGauge),
        (this.filmOffset = e.filmOffset),
        (this.targetOffset = e.targetOffset),
        this.updateProjectionMatrix(),
        this
      )
    }
    fromCameraRender(e) {
      let r = { near: this.orthoCamera.near, far: this.orthoCamera.far },
        o = { near: this.perspCamera.near, far: this.perspCamera.far }
      return (
        this.copy(e),
        (this.name = ''),
        (this.enableHelper = !0),
        (this.objectHelper.visible = !0),
        (this.orthoCamera.near = r.near),
        (this.orthoCamera.far = r.far),
        (this.perspCamera.near = o.near),
        (this.perspCamera.far = o.far),
        this.updateProjectionMatrix(),
        this
      )
    }
    toJSON(e) {
      let r = super.toJSON(e),
        o = r.object
      return (
        (o.objectType = 'CombinedCamera'),
        (o.cameraType = this.cameraType),
        (o.targetOffset = this.targetOffset),
        (o.isUpVectorFlipped = this.isUpVectorFlipped),
        (o.angleOffsetFromUp = this.angleOffsetFromUp),
        (o.left = this.left),
        (o.right = this.right),
        (o.top = this.top),
        (o.bottom = this.bottom),
        this.view !== null && (o.view = Object.assign({}, this.view)),
        (o.zoomOrtho = this.orthoCamera.zoom),
        (o.nearOrtho = this.orthoCamera.near),
        (o.far = this.far),
        (o.aspect = this.aspect),
        (o.fov = this.fov),
        (o.focus = this.focus),
        (o.filmGauge = this.filmGauge),
        (o.filmOffset = this.filmOffset),
        (o.zoomPersp = this.perspCamera.zoom),
        (o.nearPersp = this.perspCamera.near),
        r
      )
    }
    fromJSON(e) {
      var r
      if (
        (super.fromJSON(e),
        (this.cameraType = e.cameraType),
        e.targetOffset !== void 0 && (this.targetOffset = e.targetOffset),
        e.orbitControlsTarget !== void 0)
      ) {
        let o = this.getWorldPosition(new jt()),
          i = new jt().fromArray(e.orbitControlsTarget)
        this.targetOffset = i.distanceTo(o)
      } else e.targetOffset !== void 0 && (this.targetOffset = e.targetOffset)
      return (
        (this.isUpVectorFlipped = !1),
        (this.angleOffsetFromUp = (r = e.angleOffsetFromUp) != null ? r : 0),
        e.left !== void 0 && (this.left = e.left),
        e.right !== void 0 && (this.right = e.right),
        e.top !== void 0 && (this.top = e.top),
        e.bottom !== void 0 && (this.bottom = e.bottom),
        e.view !== void 0 && (this.view = Object.assign({}, e.view)),
        e.zoomOrtho !== void 0 && (this.orthoCamera.zoom = e.zoomOrtho),
        e.nearOrtho !== void 0 && (this.orthoCamera.near = e.nearOrtho),
        e.far !== void 0 && (this.far = e.far),
        e.aspect !== void 0 && (this.aspect = e.aspect),
        e.fov !== void 0 && (this.fov = e.fov),
        e.focus !== void 0 && (this.focus = e.focus),
        e.filmGauge !== void 0 && (this.filmGauge = e.filmGauge),
        e.filmOffset !== void 0 && (this.filmOffset = e.filmOffset),
        e.zoomPersp !== void 0 && (this.perspCamera.zoom = e.zoomPersp),
        e.nearPersp !== void 0 && (this.perspCamera.near = e.nearPersp),
        this.updateProjectionMatrix(),
        this
      )
    }
    toCameraState(e = []) {
      let r = {
        type: this.cameraType,
        far: this.far,
        orthographic: { near: this.orthoCamera.near, zoom: this.orthoCamera.zoom },
        perspective: {
          near: this.perspCamera.near,
          fov: this.perspCamera.fov,
          zoom: this.perspCamera.zoom,
        },
        up: this.up.toArray(),
        targetOffset: this.targetOffset,
        isUpVectorFlipped: this.isUpVectorFlipped,
      }
      return $o(r, e)
    }
    fromCameraState(e) {
      let { orthographic: r, perspective: o } = e
      return (
        e.type !== void 0 && (this.cameraType = e.type),
        e.far !== void 0 && (this.far = e.far),
        r !== void 0 &&
          (r.near !== void 0 && (this.orthoCamera.near = r.near),
          r.zoom !== void 0 && (this.orthoCamera.zoom = r.zoom)),
        o !== void 0 &&
          (o.near !== void 0 && (this.perspCamera.near = o.near),
          o.fov !== void 0 && (this.perspCamera.fov = o.fov),
          o.zoom !== void 0 && (this.perspCamera.zoom = o.zoom)),
        e.up !== void 0 && this.up.fromArray(e.up),
        e.targetOffset !== void 0 && (this.targetOffset = e.targetOffset),
        e.isUpVectorFlipped !== void 0 && (this.isUpVectorFlipped = e.isUpVectorFlipped),
        this.updateProjectionMatrix(),
        this
      )
    }
    toState(e) {
      return H(O(O({}, super.toState(e)), this.toCameraState(e)), { type: this.cameraType })
    }
    fromState(e) {
      return super.fromState(e), this.fromCameraState(e), this
    }
  }
import { Group as Mw } from 'three'
var Fr = class extends Lr(Yt(Mw), Ti) {
  constructor() {
    super(...arguments)
    this.objectType = 'EmptyObject'
  }
  static createFromState(e, r) {
    let o = new Fr().fromState(r)
    return (o.uuid = e), (o.enableHelper = !0), o.objectHelper.update(), o
  }
  toJSON(e) {
    let r = super.toJSON(e)
    return (r.object.objectType = 'EmptyObject'), r
  }
}
import { DirectionalLight as Pw, CameraHelper as Pa } from 'three'
var Pi = class extends Lr(Yt(Pw), Ci) {
  constructor(...e) {
    super(...e)
    this.objectType = 'LightDirectional'
    this._gizmos = {}
    ;(this.castShadow = !0), (this.shadow.mapSize.width = 1024), (this.shadow.mapSize.height = 1024)
    let o = this.shadow.camera
    ;(o.top = 1250),
      (o.bottom = -1250),
      (o.right = 1250),
      (o.left = -1250),
      (o.near = 1),
      (o.far = 2500)
    let i = new Pa(this.shadow.camera)
    ;(i.visible = !1), (this._gizmos.shadowmap = i), this.update()
  }
  static createFromState(e, r, o) {
    let i = new Pi().fromState(r, o)
    return (i.uuid = e), i
  }
  get gizmos() {
    return this._gizmos
  }
  showGizmos() {
    for (let e in this._gizmos) {
      let r = this._gizmos[e]
      r instanceof Pa && (r.visible = !0)
    }
  }
  hideGizmos() {
    for (let e in this._gizmos) {
      let r = this._gizmos[e]
      r instanceof Pa && (r.visible = !1)
    }
  }
  update() {
    this.shadow.camera.updateProjectionMatrix()
    for (let e in this._gizmos) {
      let r = this._gizmos[e]
      r instanceof Pa && r.update()
    }
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e),
      this.enableHelper === !0 && this.objectHelper.visible === !0 && this.objectHelper.update()
  }
  copy(e, r = !0) {
    return (
      super.copy(e, r),
      this.color.copy(e.color),
      (this.intensity = e.intensity),
      (this.target = e.target.clone()),
      (this.shadow = e.shadow.clone()),
      this
    )
  }
  toJSON(e) {
    let r = super.toJSON(e),
      o = r.object
    return (
      (o.objectType = 'LightDirectional'),
      (o.color = this.color.getHex()),
      (o.intensity = this.intensity),
      (o.shadow = this.shadow.toJSON()),
      r
    )
  }
  fromJSON(e) {
    var i
    super.fromJSON(e),
      this.color.set(e.color),
      (this.intensity = e.intensity),
      (this.shadow.normalBias = (i = e.shadow.normalBias) != null ? i : 0),
      (this.shadow.radius = e.shadow.radius),
      this.shadow.mapSize.fromArray(e.shadow.mapSize)
    let r = this.shadow.camera,
      o = e.shadow.camera
    return (
      (r.near = o.near),
      (r.far = o.far),
      (r.zoom = o.zoom),
      (r.left = o.left),
      (r.right = o.right),
      (r.top = o.top),
      (r.bottom = o.bottom),
      o.view !== void 0 && (r.view = Object.assign({}, o.view)),
      this
    )
  }
  fromDirectionalLightState(e, r) {
    let o =
      (e.depth !== void 0 && e.depth !== this.shadow.camera.far) ||
      (e.size !== void 0 && e.size / 2 !== this.shadow.camera.right)
    return (
      super.fromLightState(e, r), e.size !== void 0 && Dd(this, e.size), o && this.update(), this
    )
  }
  fromState(e, r) {
    return super.fromState(e), this.fromDirectionalLightState(e, r), this
  }
}
import { PointLight as Ow, Vector3 as Oa, Box3 as Iw, Box3Helper as Ia, Color as Aw } from 'three'
var Oi = class extends Lr(Yt(Ow), Ni) {
  constructor(...e) {
    super(...e)
    this.objectType = 'LightPoint'
    this._gizmos = {}
    ;(this.castShadow = !0), (this.shadow.mapSize.width = 1024), (this.shadow.mapSize.height = 1024)
    let o = this.shadow.camera
    ;(o.fov = 90), (o.aspect = 1), (o.near = 100), (o.far = 2500)
    let i = new Oa(-o.far + this.position.x, -o.far + this.position.y, -o.far + this.position.z),
      s = new Oa(o.far + this.position.x, o.far + this.position.y, o.far + this.position.z),
      a = new Iw(i, s),
      l = new Ia(a, new Aw(16755200))
    ;(l.visible = !1), (this._gizmos.shadowmap = l), this.update()
  }
  static createFromState(e, r, o) {
    let i = new Oi().fromState(r, o)
    return (i.uuid = e), i
  }
  get gizmos() {
    return this._gizmos
  }
  showGizmos() {
    for (let e in this._gizmos) {
      let r = this._gizmos[e]
      r instanceof Ia && (r.visible = !0)
    }
  }
  hideGizmos() {
    for (let e in this._gizmos) {
      let r = this._gizmos[e]
      r instanceof Ia && (r.visible = !1)
    }
  }
  update() {
    if (this.shadow && (this.shadow.camera.updateProjectionMatrix(), this._gizmos))
      for (let e in this._gizmos) {
        let r = this._gizmos[e]
        if (r instanceof Ia) {
          let o = this.shadow.camera,
            i = new Oa(
              -o.far + this.position.x,
              -o.far + this.position.y,
              -o.far + this.position.z
            ),
            s = new Oa(o.far + this.position.x, o.far + this.position.y, o.far + this.position.z)
          r.box.set(i, s), r.updateMatrixWorld(!0)
        }
      }
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e),
      this.enableHelper === !0 && this.objectHelper.visible === !0 && this.objectHelper.update()
  }
  copy(e, r = !0) {
    return (
      super.copy(e, r),
      this.color.copy(e.color),
      (this.intensity = e.intensity),
      (this.distance = e.distance),
      (this.decay = e.decay),
      (this.shadow = e.shadow.clone()),
      this
    )
  }
  toJSON(e) {
    let r = super.toJSON(e),
      o = r.object
    return (
      (o.objectType = 'LightPoint'),
      (o.color = this.color.getHex()),
      (o.intensity = this.intensity),
      (o.distance = this.distance),
      (o.decay = this.decay),
      (o.shadow = this.shadow.toJSON()),
      r
    )
  }
  fromJSON(e) {
    var i, s
    super.fromJSON(e),
      this.color.set(e.color),
      (this.intensity = e.intensity),
      (this.distance = e.distance),
      (this.decay = e.decay),
      (this.shadow.normalBias = (i = e.shadow.normalBias) != null ? i : 0),
      (this.shadow.radius = e.shadow.radius),
      this.shadow.mapSize.fromArray((s = e.shadow.mapSize) != null ? s : [512, 512]),
      this.shadow.map && (this.shadow.map.dispose(), (this.shadow.map = null))
    let r = this.shadow.camera,
      o = e.shadow.camera
    return (
      (r.near = o.near),
      (r.far = o.far),
      (r.zoom = o.zoom),
      (r.fov = o.fov),
      (r.focus = o.focus),
      (r.aspect = o.aspect),
      (r.filmGauge = o.filmGauge),
      (r.filmOffset = o.filmOffset),
      o.view !== void 0 && (r.view = Object.assign({}, o.view)),
      this
    )
  }
  fromPointLightState(e, r) {
    return (
      super.fromLightState(e, r),
      e.distance !== void 0 && (this.distance = e.distance),
      e.decay !== void 0 && (this.decay = e.decay),
      e.shadowRadius !== void 0 && (this.shadow.radius = e.shadowRadius),
      e.shadowResolution !== void 0 &&
        (this.shadow.mapSize.set(e.shadowResolution, e.shadowResolution),
        this.shadow.map && (this.shadow.map.dispose(), (this.shadow.map = null))),
      this
    )
  }
  fromState(e, r) {
    return super.fromState(e), this.fromPointLightState(e, r), this
  }
}
import {
  SpotLight as Dw,
  CameraHelper as Aa,
  MathUtils as Bw,
  Vector3 as im,
  Quaternion as Ew,
} from 'three'
var tm = new im(),
  rm = new im(),
  om = new Ew(),
  Ii = class extends Lr(Yt(Dw), An) {
    constructor(...e) {
      super(...e)
      this.objectType = 'LightSpot'
      this._gizmos = {}
      ;(this.castShadow = !0),
        (this.shadow.mapSize.width = 1024),
        (this.shadow.mapSize.height = 1024)
      let o = this.shadow.camera
      ;(o.fov = Bw.RAD2DEG * 2 * this.angle), (o.aspect = 1), (o.near = 100), (o.far = 2500)
      let i = new Aa(this.shadow.camera)
      ;(i.visible = !1), (this._gizmos.shadowmap = i), this.update()
    }
    static createFromState(e, r, o) {
      let i = new Ii().fromState(r, o)
      return (i.uuid = e), i
    }
    get gizmos() {
      return this._gizmos
    }
    showGizmos() {
      for (let e in this._gizmos) {
        let r = this._gizmos[e]
        r instanceof Aa && (r.visible = !0)
      }
    }
    hideGizmos() {
      for (let e in this._gizmos) {
        let r = this._gizmos[e]
        r instanceof Aa && (r.visible = !1)
      }
    }
    update() {
      this.shadow.camera.updateProjectionMatrix()
      for (let e in this._gizmos) {
        let r = this._gizmos[e]
        r instanceof Aa && r.update()
      }
    }
    updateMatrixWorld(e) {
      super.updateMatrixWorld(e),
        rm.setFromMatrixPosition(this.matrixWorld),
        om.setFromRotationMatrix(this.matrixWorld),
        tm.copy(this.up).applyQuaternion(om).negate().multiplyScalar(this.distance),
        this.target.position.copy(rm).add(tm),
        this.target.updateMatrixWorld(),
        this.enableHelper === !0 && this.objectHelper.visible === !0 && this.objectHelper.update()
    }
    copy(e, r = !0) {
      return (
        super.copy(e, r),
        this.color.copy(e.color),
        (this.intensity = e.intensity),
        (this.distance = e.distance),
        (this.angle = e.angle),
        (this.penumbra = e.penumbra),
        (this.decay = e.decay),
        (this.target = e.target.clone()),
        (this.shadow = e.shadow.clone()),
        this
      )
    }
    toJSON(e) {
      let r = super.toJSON(e),
        o = r.object
      return (
        (o.objectType = 'LightSpot'),
        (o.color = this.color.getHex()),
        (o.intensity = this.intensity),
        (o.distance = this.distance),
        (o.angle = this.angle),
        (o.decay = this.decay),
        (o.penumbra = this.penumbra),
        (o.shadow = this.shadow.toJSON()),
        r
      )
    }
    fromJSON(e) {
      var i
      super.fromJSON(e),
        this.color.set(e.color),
        (this.intensity = e.intensity),
        (this.distance = e.distance),
        (this.angle = e.angle),
        (this.decay = e.decay),
        (this.penumbra = e.penumbra),
        (this.shadow.normalBias = (i = e.shadow.normalBias) != null ? i : 0),
        (this.shadow.radius = e.shadow.radius),
        this.shadow.mapSize.fromArray(e.shadow.mapSize)
      let r = this.shadow.camera,
        o = e.shadow.camera
      return (
        (r.near = o.near),
        (r.far = o.far),
        (r.zoom = o.zoom),
        (r.fov = o.fov),
        (r.focus = o.focus),
        (r.aspect = o.aspect),
        (r.filmGauge = o.filmGauge),
        (r.filmOffset = o.filmOffset),
        o.view !== void 0 && (r.view = Object.assign({}, o.view)),
        this
      )
    }
    fromSpotLightState(e, r) {
      return (
        super.fromLightState(e, r),
        e.distance !== void 0 && (this.distance = e.distance),
        e.decay !== void 0 && (this.decay = e.decay),
        e.angle !== void 0 && (this.angle = e.angle),
        e.penumbra !== void 0 && (this.penumbra = e.penumbra),
        this
      )
    }
    fromState(e, r) {
      return super.fromState(e), this.fromSpotLightState(e, r), this
    }
  }
import { VideoTexture as _w } from 'three'
var nm = (n) => n.tagName === 'VIDEO',
  To = class {
    static resize(t, e, r) {
      let o = t / e,
        i
      if (!r.image) return
      let s = r.image
      nm(s) ? (i = s.videoWidth / s.videoHeight) : (i = s.width / s.height),
        o > i &&
          (r.imageType == 'WEBCAM' ? r.repeat.set(-1, (1 * i) / o) : r.repeat.set(1, (1 * i) / o)),
        o < i &&
          (r.imageType == 'WEBCAM'
            ? r.repeat.set(((1 * o) / i) * -1, 1)
            : r.repeat.set((1 * o) / i, 1)),
        o == i && (r.imageType == 'WEBCAM' ? r.repeat.set(-1, 1) : r.repeat.set(1, 1))
    }
    static resizeTextureLayer(t, e, r) {
      let o = t / e,
        i = r.image !== void 0 ? r.image.width / r.image.height : 1,
        s
      o > i ? (s = { x: 1, y: i / o }) : o < i ? (s = { x: o / i, y: 1 }) : (s = { x: 1, y: 1 }),
        r.repeat.set(s.x, s.y),
        r.updateMatrix()
    }
    static resizeTextureLayers(t, e, r) {
      let o = r.userData.layers,
        i = o.getLayers()
      for (let s = 0; s < i.length; s++) {
        let a = i[s]
        md(a) &&
          (To.resizeTextureLayer(t, e, a.uniforms[`f${a.id}_texture`].value),
          o.updateLayerUniform())
      }
    }
    static resizeComplex(t, e, r, o) {
      let i = t / e,
        s,
        a = r.image
      nm(a) ? (s = a.videoWidth / a.videoHeight) : (s = a.width / a.height),
        o.geometry.type.includes('Shape')
          ? (i > s &&
              (r.imageType == 'WEBCAM'
                ? r.repeat.set((1 / t) * -1, ((1 / e) * s) / i)
                : r.repeat.set(1 / t, ((1 / e) * s) / i)),
            i < s &&
              (r.imageType == 'WEBCAM'
                ? r.repeat.set((((1 / t) * i) / s) * -1, 1 / e)
                : r.repeat.set(((1 / t) * i) / s, 1 / e)),
            i == s &&
              (r.imageType == 'WEBCAM'
                ? r.repeat.set((1 / t) * -1, 1 / e)
                : r.repeat.set(1 / t, 1 / e)))
          : (i > s &&
              (r.imageType == 'WEBCAM'
                ? r.repeat.set(-1, (1 * s) / i)
                : r.repeat.set(1, (1 * s) / i)),
            i < s &&
              (r.imageType == 'WEBCAM'
                ? r.repeat.set(((1 * i) / s) * -1, 1)
                : r.repeat.set((1 * i) / s, 1)),
            i == s && (r.imageType == 'WEBCAM' ? r.repeat.set(-1, 1) : r.repeat.set(1, 1)))
    }
  }
var Ai = class extends rt {
  constructor(e, r = new mt()) {
    super(e, r)
    this.objectType = 'Mesh2D'
    ;(this.castShadow = !0), (this.receiveShadow = !0)
  }
  updateGeometry(e) {
    super.updateGeometry(e),
      this.material.userData.layers &&
        To.resizeTextureLayers(
          this.geometry.userData.parameters.width,
          this.geometry.userData.parameters.height,
          this.material
        )
  }
  resizeGeometry(e, r) {
    super.resizeGeometry(e, r, 0),
      this.material.userData.layers &&
        To.resizeTextureLayers(
          this.geometry.userData.parameters.width,
          this.geometry.userData.parameters.height,
          this.material
        )
  }
  toJSON(e) {
    let r = super.toJSON(e)
    return (r.object.objectType = 'Mesh2D'), r
  }
  clone() {
    let e = super.clone()
    return e.updateGeometry({}), e
  }
  static fromTexture(e) {
    let r, o
    if (e instanceof _w) {
      let a = e.image
      ;(r = a.videoWidth * 0.5), (o = a.videoHeight * 0.5)
    } else {
      let a = e.image
      ;(r = a.width * 0.5), (o = a.height * 0.5)
    }
    let i = ta.create({ parameters: { width: r, height: o } }),
      s = new mt()
    return (
      s.layersList.changeLayer(0, { type: 'texture', texture: e }),
      s.layersList.moveLayer(0, 1),
      s.dispose(),
      new Ai(i, s)
    )
  }
}
var Di = class extends rt {
  constructor(e, r = new Pt()) {
    super(e, r)
    this.objectType = 'Mesh3D'
    ;(this.castShadow = !0), (this.receiveShadow = !0)
  }
  toJSON(e) {
    let r = super.toJSON(e)
    return (r.object.objectType = 'Mesh3D'), r
  }
}
var Bi = class extends Di {
  constructor(e, r = new Pt()) {
    super(e, r)
    this.objectType = 'NonParametric'
  }
  toJSON(e) {
    let r = super.toJSON(e)
    return (r.object.objectType = 'NonParametric'), r
  }
}
import {
  DoubleSide as Gw,
  Mesh as zw,
  MeshBasicMaterial as Rw,
  ShapeBufferGeometry as Fw,
  Vector2 as Vw,
  Vector3 as jw,
} from 'three'
import { FontLoader as Uw } from 'three/examples/jsm/loaders/FontLoader.js'
var Ze = class extends zw {
    constructor(
      { char: e, originalChar: r, fontFamily: o, letterSpacing: i, fontSize: s, LOD: a = 16 },
      l = new Rw({ color: 0, opacity: 1, visible: !0, transparent: !0, side: Gw })
    ) {
      let c = Ze.loadChar(e, o, a)
      super(c.geometry, l)
      ;(this.char = e),
        (this.originalChar = r != null ? r : e),
        (this.fontFamily = o),
        (this.letterSpacing = i),
        (this.fontSize = s),
        (this.LOD = a),
        (this.resolution = c.resolution),
        (this.glyphsHa = c.glyphsHa),
        (this.localPosition = new Vw()),
        (this.charSize = 0),
        (this.geometry.userData = {
          type: 'CharacterGeometry',
          parameters: {
            char: this.char,
            fontFamily: this.fontFamily,
            letterSpacing: this.letterSpacing,
            fontSize: this.fontSize,
            lod: this.LOD,
            resolution: this.resolution,
            charSize: this.charSize,
            localPosition: this.localPosition,
          },
        }),
        this.updateFontSize(this.fontSize)
    }
    static get FONTS_PATH() {
      return Ze._fontPath
    }
    static set FONTS_PATH(e) {
      Ze._fontPath = e
    }
    updatePosition(e, r) {
      this.localPosition.copy(e)
      let o = new jw(this.localPosition.x, -this.localPosition.y, 0)
      this.position.copy(o).add(r)
    }
    updateFontSize(e) {
      let r = e / this.resolution
      ;(this.fontSize = e),
        this.scale.set(this.fontSize, this.fontSize, 1),
        (this.charSize = this.glyphsHa * r * this.letterSpacing)
    }
    updateFontFamily(e) {
      if (this.fontFamily === e) return
      this.fontFamily = e
      let r = Ze.loadChar(this.char, e, this.LOD)
      ;(this.geometry = r.geometry),
        (this.resolution = r.resolution),
        (this.glyphsHa = r.glyphsHa),
        (this.geometry.userData = {
          type: 'CharacterGeometry',
          parameters: {
            char: this.char,
            fontFamily: this.fontFamily,
            letterSpacing: this.letterSpacing,
            fontSize: this.fontSize,
            lod: this.LOD,
            resolution: this.resolution,
            charSize: this.charSize,
            localPosition: this.localPosition,
          },
        }),
        this.updateFontSize(this.fontSize)
    }
    updateChar(e) {
      if (this.char === e) return
      this.char = e
      let r = Ze.loadChar(e, this.fontFamily, this.LOD)
      ;(this.geometry = r.geometry),
        (this.resolution = r.resolution),
        (this.glyphsHa = r.glyphsHa),
        (this.geometry.userData = {
          type: 'CharacterGeometry',
          parameters: {
            char: this.char,
            fontFamily: this.fontFamily,
            letterSpacing: this.letterSpacing,
            fontSize: this.fontSize,
            lod: this.LOD,
            resolution: this.resolution,
            charSize: this.charSize,
            localPosition: this.localPosition,
          },
        }),
        this.updateFontSize(this.fontSize)
    }
    updateLetterSpacing(e) {
      this.letterSpacing !== e && ((this.letterSpacing = e), this.updateFontSize(this.fontSize))
    }
    updateLOD(e) {
      if (this.LOD === e) return
      this.LOD = e
      let r = Ze.loadChar(this.char, this.fontFamily, this.LOD)
      ;(this.geometry = r.geometry),
        (this.resolution = r.resolution),
        (this.glyphsHa = r.glyphsHa),
        (this.geometry.userData = {
          type: 'CharacterGeometry',
          parameters: {
            char: this.char,
            fontFamily: this.fontFamily,
            letterSpacing: this.letterSpacing,
            fontSize: this.fontSize,
            lod: this.LOD,
            resolution: this.resolution,
            charSize: this.charSize,
            localPosition: this.localPosition,
          },
        }),
        this.updateFontSize(this.fontSize)
    }
    clone() {
      let e = {
        char: this.char,
        originalChar: this.originalChar,
        fontFamily: this.fontFamily,
        letterSpacing: this.letterSpacing,
        fontSize: this.fontSize,
        LOD: this.LOD,
      }
      return new Ze(e).copy(this)
    }
    static loadFont(e) {
      return new Promise(function (r, o) {
        Ze.fontCache[e]
          ? r(Ze.fontCache[e])
          : new Uw().load(
              Ze.FONTS_PATH + e + '.json',
              (s) => {
                ;(Ze.fontCache[e] = s), r(s)
              },
              void 0,
              o
            )
      })
    }
    static loadChar(e, r, o) {
      if (Ze.charCache[e]) {
        if (Ze.charCache[e][o] && Ze.charCache[e][o].fontFamily === r) return Ze.charCache[e][o]
      } else Ze.charCache[e] = {}
      let i = Ze.fontCache[r],
        s = i.generateShapes(e, 1)
      return (
        (Ze.charCache[e][o] = {
          geometry: new Fw(s, o),
          fontFamily: r,
          resolution: i.data.resolution,
          glyphsHa: i.data.glyphs[e].ha,
        }),
        Ze.charCache[e][o]
      )
    }
  },
  Ot = Ze
;(Ot.charCache = {}), (Ot.fontCache = {}), (Ot._fontPath = '/_assets/_fonts/')
import { DoubleSide as Ba, MeshBasicMaterial as am, Vector3 as lm, Object3D as kw } from 'three'
import { Vector2 as sm } from 'three'
var Da = new sm(),
  io = class {
    constructor(t, e, r) {
      this.message = []
      this.endLine = !0
      ;(this.yLinePos = t),
        (this.lineHeight = e),
        (this.maxCharSize = r),
        (this.nextChar3DPos = new sm(0, this.yLinePos + this.maxCharSize * this.lineHeight)),
        (this.align = 1)
    }
    addChar3D(t, e, r = this.message.length) {
      this.message.splice(r, 0, t),
        t.fontSize > this.maxCharSize
          ? ((this.maxCharSize = t.fontSize),
            (this.nextChar3DPos.y = this.yLinePos + this.maxCharSize * this.lineHeight),
            this.fullUpdate(e))
          : (t.updatePosition(this.nextChar3DPos, e), (this.nextChar3DPos.x += t.charSize))
    }
    deleteChar3D(t = this.message.length - 1) {
      let e = this.message[t]
      if (e) return this.message.splice(t, 1), (this.nextChar3DPos.x -= e.charSize), e
    }
    isEndLine(t) {
      this.endLine = t
    }
    fullUpdate(t, e = 0) {
      this.nextChar3DPos.x = 0
      for (let r = e, o = this.message.length; r < o; r += 1)
        this.message[r].updatePosition(this.nextChar3DPos, t),
          (this.nextChar3DPos.x += this.message[r].charSize)
    }
    checkOverFlow(t) {
      let e,
        r = this.message.length - 1
      if (r <= 0) return !1
      for (; r >= 0; ) {
        if (this.message[r].char !== ' ') {
          e = this.message[r]
          break
        }
        r -= 1
      }
      return !!(r >= 0 && e && e.localPosition.x + e.charSize > t)
    }
    containSpaceOverFlow(t = this.message.length - 1) {
      for (let e = t; e >= 0; e -= 1) if (this.message[e].char === ' ') return !0
      return !1
    }
    containSpace(t = this.message.length - 1) {
      if (this.endLine) return !0
      for (let e = t; e >= 0; e -= 1) if (this.message[e].char === ' ') return !0
      return !1
    }
    popWord(t = this.message.length - 1) {
      let e = [],
        r = !0,
        o
      for (o = t; o >= 0; o -= 1)
        if (this.message[o].char === ' ') {
          ;(r = !1), e.length === 0 && ((o -= 1), e.splice(0, 0, this.message[o]))
          break
        } else e.splice(0, 0, this.message[o])
      return r ? (e = []) : this.message.splice(o + 1, e.length), e
    }
    getWord(t = 0, e = 1) {
      let r = [],
        o = t
      for (o = t; ; o += e) {
        if (!this.message[o] || this.message[o].char === ' ') {
          r.length === 0 && this.message[o] && (r.push(this.message[o]), this.message.splice(o, 1))
          break
        }
        e > 0
          ? (r.push(this.message[o]), this.message.splice(o, 1), (o -= e))
          : (r.splice(0, 0, this.message[o]), this.message.splice(o, 1))
      }
      return r
    }
    getWordAtIndex(t) {
      let e = []
      for (let r = t; r < this.message.length && this.message[r].char !== ' '; r++)
        e.push(this.message[r])
      for (let r = t - 1; r >= 0 && this.message[r].char !== ' '; r--)
        e.splice(0, 0, this.message[r])
      return e
    }
    wordSize(t = 0, e = -1) {
      let r = 0,
        o = t
      for (; o >= 0 && o < this.message.length; ) {
        if (this.message[o].char === ' ') {
          r === 0 && (r = this.message[o].charSize)
          break
        }
        ;(r += this.message[o].charSize), (o += e)
      }
      return (o < 0 || o >= this.message.length) && !this.endLine
        ? this.message[t]
          ? this.message[t].charSize
          : 999999999
        : r === 0
        ? 999999999
        : r
    }
    spaceLeft(t) {
      return t - this.nextChar3DPos.x
    }
    popChar(t = this.message.length - 1) {
      return (this.nextChar3DPos.x -= this.message[t].charSize), this.message.splice(t, 1)
    }
    isEmpty() {
      return !this.message.length
    }
    updateNextCharPosY() {
      this.nextChar3DPos.y = this.yLinePos + this.maxCharSize * this.lineHeight
    }
    updateYLinePos(t) {
      ;(this.yLinePos = t), this.updateNextCharPosY()
    }
    updatelineHeight(t) {
      ;(this.lineHeight = t), this.updateNextCharPosY()
    }
    updateFontSize(t, e = 0, r = this.message.length - 1) {
      for (let o = e; o <= r; o += 1) this.message[o].updateFontSize(t)
      ;(this.maxCharSize = t),
        (this.nextChar3DPos.y = this.yLinePos + this.maxCharSize * this.lineHeight)
    }
    countSpaces() {
      let t = 0
      for (let e = 0; e < this.message.length; e++) this.message[e].char === ' ' && (t += 1)
      return t
    }
    alignText(t, e, r, o, i) {
      switch (r) {
        case 1:
          this.leftAlign(t, i)
          break
        case 3:
          this.centerAlign(this.spaceLeft(e), t, i)
          break
        case 2:
          this.rightAlign(this.spaceLeft(e), t, i)
          break
        case 4:
          this.justifyAlign(this.spaceLeft(e), t, i)
          break
      }
    }
    offsetCharacters(t, e, r) {
      Da.set(e, r)
      let o = this.message.length
      for (let i = 0; i < o; i++)
        this.message[i].updatePosition(this.message[i].localPosition.add(Da), t)
    }
    leftAlign(t, e) {
      ;(this.align = 1), this.offsetCharacters(t, 0, e)
    }
    centerAlign(t, e, r) {
      ;(this.align = 3), this.offsetCharacters(e, t / 2, r)
    }
    rightAlign(t, e, r) {
      ;(this.align = 2), this.offsetCharacters(e, t, r)
    }
    justifyAlign(t, e, r) {
      if (((this.align = 4), this.endLine)) {
        this.offsetCharacters(e, 0, r)
        return
      }
      let o = this.countSpaces()
      if (o === 0) {
        this.offsetCharacters(e, 0, r)
        return
      }
      let i = t / o,
        s = 0
      for (let a = 0; a < this.message.length; a++)
        this.message[a].char === ' ' && (s += i),
          Da.set(s, r),
          this.message[a].updatePosition(this.message[a].localPosition.add(Da), e)
    }
    clone() {
      let t = new io(this.yLinePos, this.lineHeight, this.maxCharSize)
      ;(t.nextChar3DPos = this.nextChar3DPos.clone()),
        (t.align = this.align),
        (t.endLine = this.endLine)
      for (let e = 0; e < this.message.length; e++) t.message.push(this.message[e].clone())
      return t
    }
  }
var dc = class extends rt {
    constructor(e, r = new mt({ transparent: !0, opacity: 1, visible: !1, side: Ba })) {
      super(e, r)
      this.objectType = 'TextFrame'
      ;(this.charContainer = new kw()),
        this.add(this.charContainer),
        (this.material.visible = !1),
        (this._geometryUserData = e.userData),
        (this.userData.textFrame = {
          hexColor: null,
          opacity: 1,
          visible: !0,
          text: '',
          fontSize: 16,
          lineHeight: 1.5,
          letterSpacing: 1,
          fontFamily: 'roboto_regular',
          textTransform: 1,
          horizontalAlignment: 1,
          verticalAlignment: 1,
          LOD: 16,
          maxLineSize: this._geometryUserData.parameters.width,
          textOrigin: new lm(
            this._geometryUserData.parameters.width * -0.5,
            this._geometryUserData.parameters.height * 0.5,
            0
          ),
          textLines: [],
        }),
        this.createTextLine()
    }
    static createFromState(e, r, o) {
      let i = ra.create({ parameters: { width: r.width, height: r.height } }),
        s = new dc(i).fromState(r, o)
      return (s.uuid = e), s
    }
    async updateText(e) {
      this.clearText()
      let r = this.userData.textFrame,
        o = r.fontFamily
      await Ot.loadFont(o), (r.text = e)
      let i = r.textOrigin,
        s = new am({ visible: r.visible, transparent: !0, side: Ba }),
        a = e.split(`
`),
        l = 0
      ;(this.userData.textFrame.textLines = a.map((c, h) => {
        let p = new io(l, r.lineHeight, r.fontSize)
        return (
          (p.message = c.split('').map((u) => {
            let m = {
                char: u,
                fontFamily: o,
                letterSpacing: r.letterSpacing,
                fontSize: r.fontSize,
                LOD: 16,
              },
              f = s.clone()
            ;(f.color = r.hexColor), (f.opacity = r.opacity)
            let g = new Ot(m, f)
            return p.addChar3D(g, i), this.charContainer.add(g), g
          })),
          (l += p.maxCharSize * p.lineHeight),
          p
        )
      })),
        this.textFullUpdate(),
        this.checkOverFlow()
    }
    clearText() {
      let e = this.userData.textFrame.textLines
      for (; this.charContainer.children.length; ) {
        let r = this.charContainer.children[0]
        this.charContainer.remove(r)
      }
      for (; e.length; ) e.pop()
    }
    raycast(e, r) {
      let o = []
      if ((super.raycast(e, o), o.length > 0)) {
        r.push(o[0])
        return
      }
      let i = []
      for (let s = 0, a = this.charContainer.children.length; s < a; ++s)
        if (
          this.charContainer.children[s] instanceof Ot &&
          (e.intersectObject(this.charContainer.children[s], !1, i), i.length > 0)
        ) {
          ;(i[0].object = this), r.push(i[0])
          return
        }
    }
    updateGeometry(e) {
      var h, p, u, m
      let r = this.userData,
        o = this.geometry.userData,
        i = o.parameters.width,
        s = o.parameters.height,
        a = (p = (h = e.parameters) == null ? void 0 : h.width) != null ? p : i,
        l = (m = (u = e.parameters) == null ? void 0 : u.height) != null ? m : s,
        c = r.textFrame
      super.updateGeometry(e),
        (c.maxLineSize = a),
        c.textOrigin.set(-0.5 * a, 0.5 * l, 0),
        l !== s
          ? (this.checkOverFlow(), this.checkCapacity())
          : a !== i && (i < a ? this.checkCapacity() : i > a && this.checkOverFlow())
    }
    checkOverFlow(e = 0) {
      let r = this.userData,
        o = r.textFrame.textOrigin,
        i = r.textFrame.textLines
      for (let s = e; s < i.length; s++) {
        i[s].updateYLinePos(this.getNewLinePosition(s)), i[s].fullUpdate(o)
        let a = []
        for (; i[s].checkOverFlow(r.textFrame.maxLineSize); )
          i[s].containSpaceOverFlow()
            ? a.unshift(i[s].getWord(i[s].message.length - 1, -1))
            : a.unshift(i[s].popChar())
        if (a.length > 0) {
          i[s + 1] === void 0
            ? (i[s].isEndLine(!1), this.createTextLine())
            : i[s].endLine &&
              (this.createTextLine(s + 1), i[s].isEndLine(!1), i[s + 1].isEndLine(!0))
          let l = 0
          for (let c = 0; c < a.length; c += 1)
            for (let h = 0; h < a[c].length; h += 1) i[s + 1].addChar3D(a[c][h], o, l), (l += 1)
          i[s + 1].fullUpdate(o)
        }
        i[s].fullUpdate(o)
      }
      this.textFullUpdate(e)
    }
    checkCapacity(e = 0) {
      let r = this.userData,
        o = r.textFrame.textOrigin,
        i = r.textFrame.maxLineSize,
        s = r.textFrame.textLines
      for (let a = e; a < s.length; a += 1)
        if ((s[a].updateYLinePos(this.getNewLinePosition(a)), s[a].fullUpdate(o), !!s[a - 1]))
          for (; !s[a - 1].endLine; ) {
            let l,
              c = s[a - 1].spaceLeft(i)
            if (s[a].wordSize(0, 1) <= c) {
              s[a].containSpace() ? (l = s[a].getWord(0, 1)) : (l = s[a].popChar(0))
              for (let h = 0; h < l.length; h += 1) l[h] && s[a - 1].addChar3D(l[h], o)
            } else {
              s[a].isEmpty()
                ? (s[a].endLine && s[a - 1].isEndLine(!0), s.splice(a, 1), (a -= 1))
                : (s[a].updateYLinePos(this.getNewLinePosition(a)), s[a].fullUpdate(o))
              break
            }
          }
      this.textFullUpdate(e)
    }
    createTextLine(e = this.userData.textFrame.textLines.length) {
      let o = this.userData.textFrame
      o.textLines.splice(e, 0, new io(this.getNewLinePosition(e), o.lineHeight, o.fontSize))
    }
    textFullUpdate(e = 0) {
      let o = this.userData.textFrame,
        i = o.textLines,
        s = this.getVerticalAlignmentOffSet()
      for (let a = e; a < i.length; a++)
        i[a].updateYLinePos(this.getNewLinePosition(a)),
          i[a].fullUpdate(o.textOrigin),
          i[a].alignText(o.textOrigin, o.maxLineSize, o.horizontalAlignment, o.verticalAlignment, s)
    }
    getVerticalAlignmentOffSet() {
      switch (this.userData.textFrame.verticalAlignment) {
        case 1:
          return 0
        case 2:
          return this.getRemainingVerticalSpace() / 2
        case 3:
          return this.getRemainingVerticalSpace()
        default:
          return 0
      }
    }
    getRemainingVerticalSpace() {
      let r = this.userData.textFrame.textLines
      return this.geometry.userData.parameters.height - this.getNewLinePosition(r.length)
    }
    getNewLinePosition(e) {
      let o = this.userData.textFrame.textLines,
        i = 0
      for (let s = 0; s < e; s += 1) i += o[s].maxCharSize * o[s].lineHeight
      return i
    }
    updateColor(e) {
      var i
      let r = this.userData
      r.textFrame.hexColor = e
      let o = r.textFrame.textLines
      for (let s = 0; s < o.length; s++) {
        let a = o[s].message
        for (let l = 0; l < a.length; l++) {
          let c = a[l].material
          ;(i = c.color) != null && i.isColor && (c.color = e)
        }
      }
    }
    updateOpacity(e) {
      let r = this.userData
      r.textFrame.opacity = e
      let o = r.textFrame.textLines
      for (let i = 0; i < o.length; i++) {
        let s = o[i].message
        for (let a = 0; a < s.length; a++) {
          let l = s[a].material
          l.opacity = e
        }
      }
    }
    updateVisible(e) {
      let r = this.userData
      r.textFrame.visible = e
      let o = r.textFrame.textLines
      for (let i = 0; i < o.length; i++) {
        let s = o[i].message
        for (let a = 0; a < s.length; a++) {
          let l = s[a].material
          l.visible = e
        }
      }
    }
    async updateFontFamily(e) {
      await Ot.loadFont(e)
      let o = this.userData.textFrame,
        i = o.textLines
      o.fontFamily = e
      for (let s = 0; s < i.length; s++) {
        let a = i[s].message
        for (let l = 0; l < a.length; l++) a[l].updateFontFamily(e)
      }
      this.textFullUpdate(), this.checkOverFlow(), this.checkCapacity()
    }
    updateFontSize(e) {
      let o = this.userData.textFrame,
        i = o.textLines,
        s = o.fontSize
      o.fontSize = e
      for (let a = 0; a < i.length; a++) i[a].updateFontSize(e)
      this.textFullUpdate(), e > s ? this.checkOverFlow() : e < s && this.checkCapacity()
    }
    async updateTextTransform(e) {
      let o = this.userData.textFrame
      await Ot.loadFont(o.fontFamily)
      let i = o.textLines
      switch (((o.textTransform = e), e)) {
        case 2:
          for (let s = 0; s < i.length; s++) {
            let a = i[s].message
            for (let l = 0; l < a.length; l++) i[s].message[l].updateChar(a[l].char.toUpperCase())
          }
          break
        case 3:
          for (let s = 0; s < i.length; s++) {
            let a = i[s].message
            for (let l = 0; l < a.length; l++) i[s].message[l].updateChar(a[l].char.toLowerCase())
          }
          break
        default:
          for (let s = 0; s < i.length; s++) {
            let a = i[s].message
            for (let l = 0; l < a.length; l++) i[s].message[l].updateChar(a[l].originalChar)
          }
      }
      this.textFullUpdate(), this.checkOverFlow(), this.checkCapacity()
    }
    updateLetterSpacing(e) {
      let r = this.userData,
        o = r.textFrame.textLines
      r.textFrame.letterSpacing = e
      for (let i = 0; i < o.length; i++) {
        let s = o[i].message
        for (let a = 0; a < s.length; a++) s[a].updateLetterSpacing(e)
      }
      this.textFullUpdate(), this.checkOverFlow(), this.checkCapacity()
    }
    updateLOD(e) {
      let r = this.userData
      r.textFrame.LOD = e
      let o = r.textFrame.textLines
      for (let i = 0; i < o.length; i++);
      this.textFullUpdate(), this.checkOverFlow(), this.checkCapacity()
    }
    updateLineHeight(e) {
      let r = this.userData,
        o = r.textFrame.textLines
      r.textFrame.lineHeight = e
      for (let i = 0; i < o.length; i++) o[i].updatelineHeight(e)
      this.textFullUpdate()
    }
    updateVerticalAlignment(e) {
      let r = this.userData
      ;(r.textFrame.verticalAlignment = e), this.textFullUpdate()
    }
    updateHorizontalAlignment(e) {
      let r = this.userData
      ;(r.textFrame.horizontalAlignment = e), this.textFullUpdate()
    }
    toJSON(e) {
      let r = super.toJSON(e),
        o = r.object
      o.objectType = 'TextFrame'
      let s = this.userData.textFrame.textLines.map((a) => {
        let l = a.message.map((c) => ({
          char: c.char,
          originalChar: c.originalChar,
          fontFamily: c.fontFamily,
          letterSpacing: c.letterSpacing,
          fontSize: c.fontSize,
          LOD: c.LOD,
        }))
        return {
          align: a.align,
          endLine: a.endLine,
          lineHeight: a.lineHeight,
          maxCharSize: a.maxCharSize,
          yLinePos: a.yLinePos,
          message: l,
        }
      })
      return (o.userData.textFrame.textLinesData = s), r
    }
    async fromJSONasync(e) {
      if ((super.fromJSON(e), e.userData !== void 0)) {
        let r = e.userData.textFrame
        await Ot.loadFont(r.fontFamily),
          (r.textOrigin = new lm(r.textOrigin.x, r.textOrigin.y, r.textOrigin.z))
        let o = new am({
          color: r.hexColor,
          opacity: r.opacity,
          visible: r.visible,
          transparent: !0,
          side: Ba,
        })
        r.textLinesData &&
          ((r.textLines = r.textLinesData.map((i, s) => {
            let a = new io(Number(i.yLinePos), Number(i.lineHeight), Number(i.maxCharSize)),
              l = i.message.map((c, h) => {
                if (c.char === void 0) {
                  let m = r.textLines[s].message[h]
                  if ('geometries' in m) {
                    let f = m.geometries[0].userData.parameters
                    Object.assign(c, {
                      LOD: f.lod,
                      char: f.char,
                      fontFamily: f.fontFamily,
                      fontSize: f.fontSize,
                      letterSpacing: f.letterSpacing,
                      originalChar: f.char,
                    })
                  }
                }
                let p = {
                    char: c.char,
                    fontFamily: c.fontFamily,
                    letterSpacing: Number(c.letterSpacing),
                    fontSize: Number(c.fontSize),
                    LOD: c.LOD,
                  },
                  u = new Ot(p, o.clone())
                return a.addChar3D(u, r.textOrigin), this.charContainer.add(u), u
              })
            return (a.message = l), a
          })),
          (this.userData.textFrame = r)),
          this.textFullUpdate()
      }
      return this
    }
    fromTextFrameData(e, r) {
      if (e.color !== void 0) {
        let o = Xe(e.color, r)
        this.updateColor(o), this.updateOpacity(o.a)
      }
      e.alpha !== void 0 && this.updateOpacity(e.alpha),
        e.font !== void 0 && this.updateFontFamily(e.font),
        e.horizontalAlign !== void 0 && this.updateHorizontalAlignment(e.horizontalAlign),
        e.verticalAlign !== void 0 && this.updateVerticalAlignment(e.verticalAlign),
        e.textTransform !== void 0 && this.updateTextTransform(e.textTransform),
        e.fontSize !== void 0 && this.updateFontSize(e.fontSize),
        e.lineHeight !== void 0 && this.updateLineHeight(e.lineHeight),
        e.letterSpacing !== void 0 && this.updateLetterSpacing(e.letterSpacing),
        e.text !== void 0 && e.text !== '' && this.updateText(e.text),
        (e.width !== void 0 || e.height !== void 0) &&
          this.updateGeometry({ parameters: { width: e.width, height: e.height } })
    }
    fromState(e, r) {
      return super.fromState(e), this.fromTextFrameData(e, r), this
    }
    convertToVector() {
      let { fontFamily: e, hexColor: r } = this.userData.textFrame,
        o = new Fr()
      o.name = 'Text Shape'
      let i = Ot.fontCache[e]
      for (let s of this.charContainer.children)
        s instanceof Ot &&
          i.generateShapes(s.char, 1).forEach((a) => {
            let l = new Pe().fromShape(a)
            l.applyScale(s.scale.x, s.scale.y)
            let c = ut.create({ shape: l }),
              h = new mt({ side: Ba })
            h.color = r
            let p = new oo(c, h)
            ;(p.name = s.char),
              p.position.copy(s.position),
              p.rotation.copy(s.rotation),
              o.attach(p)
          })
      return o
    }
  },
  No = dc
;(No.VerticalAlign = ll), (No.HorizontalAlign = al), (No.TextTransform = cl)
import {
  HemisphereLight as o1,
  Scene as i1,
  Vector3 as n1,
  Color as Sm,
  Fog as s1,
  Box3 as a1,
} from 'three'
import { Box3 as Hw, Matrix4 as Mo, Sphere as pm, Vector3 as qw } from 'three'
var dm = km(hm())
var mc
oa.then((n) => {
  mc = n
})
var mm = new Mo(),
  Ww = new Mo(),
  $w = new Mo(),
  ar = new Hw(),
  no = new qw(),
  Jw = new Mo(),
  Yw = new Mo(),
  Ei = class extends rt {
    constructor(e, r, o, i = new Pt()) {
      super(o != null ? o : r, i)
      this.subdivPointer = e
      this.originalGeometry = r
      this.subdividedGeometry = o
      this.objectType = 'SubdivObject'
      this.hiddenMatrixOld = new Mo()
      this.smoothShading = !0
      this.matrixWorldRigid = new Mo()
      ;(this.castShadow = !0), (this.receiveShadow = !0), (this.forceComputeSize = !1)
    }
    static createFromState(e, r, o) {
      let {
          subdivPointer: i,
          originalGeometry: s,
          subdividedGeometry: a,
        } = nr.build(r.geometry, void 0, !r.flatShading),
        l = Nn(r.material, o),
        c = new Ei(i, s, a || void 0, l)
      return c.calcBoundingBox(), c.freeSubdivPointer(), (c.uuid = e), c.fromState(r), c
    }
    shallowClone(e) {
      return new Bi(this.geometry, this.material).shallowCopy(this, e)
    }
    toJSON(e) {
      let r = super.toJSON(e)
      return (r.object.objectType = 'SubdivObject'), r
    }
    buildFromStore(e) {
      var s, a, l
      let {
        originalGeometry: r,
        subdividedGeometry: o,
        subdivPointer: i,
      } = nr.build(e, this.subdivPointer, this.smoothShading, this.shearScale)
      if (
        ((this.subdivPointer = i),
        r !== void 0 &&
          ((s = this.originalGeometry) == null || s.dispose(), (this.originalGeometry = r)),
        o !== void 0 &&
          ((a = this.subdividedGeometry) == null || a.dispose(),
          (this.subdividedGeometry = o != null ? o : void 0)),
        (this.geometry = (l = this.subdividedGeometry) != null ? l : this.originalGeometry),
        this.cloner)
      )
        for (let c of this.cloner.children) c.geometry = this.geometry
      e.width &&
        (this.geometry.userData.parameters = { width: e.width, height: e.height, depth: e.depth })
    }
    updateMesh(e = !1) {
      nr.buildLevel(
        this.subdivPointer,
        !0,
        this.smoothShading,
        this.originalGeometry,
        e ? this.shearScaleInv : void 0
      ),
        this.subdividedGeometry &&
          nr.buildLevel(
            this.subdivPointer,
            !1,
            this.smoothShading,
            this.subdividedGeometry,
            e ? this.shearScaleInv : void 0
          )
    }
    updateTopology() {
      var e
      this.originalGeometry.dispose(),
        (this.originalGeometry = nr.buildLevel(this.subdivPointer, !0, this.smoothShading)),
        this.subdividedGeometry &&
          (this.subdividedGeometry.dispose(),
          (this.subdividedGeometry = nr.buildLevel(this.subdivPointer, !1, this.smoothShading))),
        (this.geometry = (e = this.subdividedGeometry) != null ? e : this.originalGeometry)
    }
    raycast(e, r) {
      var o
      ;(this.geometry = this.originalGeometry),
        rt.prototype.raycast.call(this, e, r),
        (this.geometry = (o = this.subdividedGeometry) != null ? o : this.originalGeometry)
    }
    updateMatrixWorldSVD() {
      let e = this.matrixWorld.elements,
        r = [
          [e[0], e[4], e[8]],
          [e[1], e[5], e[9]],
          [e[2], e[6], e[10]],
        ],
        { u: o, v: i, q: s } = (0, dm.SVD)(r),
        a = mm.set(
          o[0][0],
          o[0][1],
          o[0][2],
          0,
          o[1][0],
          o[1][1],
          o[1][2],
          0,
          o[2][0],
          o[2][1],
          o[2][2],
          0,
          0,
          0,
          0,
          1
        ),
        l = Ww.set(
          i[0][0],
          i[0][1],
          i[0][2],
          0,
          i[1][0],
          i[1][1],
          i[1][2],
          0,
          i[2][0],
          i[2][1],
          i[2][2],
          0,
          0,
          0,
          0,
          1
        ),
        c = $w.copy(l).transpose()
      ;(this.shearScale = Jw.makeScale(s[0], s[1], s[2]).multiply(c).premultiply(l)),
        (this.shearScaleInv = Yw.copy(this.shearScale).invert()),
        this.matrixWorldRigid.multiplyMatrices(a, c),
        s.every((h) => Math.abs(s[0] - h) < 0.01) &&
          ((this.shearScale = void 0), (this.shearScaleInv = void 0))
    }
    activateSVDCompensation() {
      this.shearScale !== void 0 &&
        ((this.matrixAutoUpdate = !1),
        this.matrix.copy(this.matrixWorldRigid).copyPosition(this.matrixWorld),
        this.hiddenMatrixOld.copy(this.hiddenMatrix),
        this.hiddenMatrix.copy(this.parent.matrixWorld).invert())
    }
    deactivateSVDCompensation() {
      this.shearScale !== void 0 &&
        ((this.shearScale = void 0),
        (this.shearScaleInv = void 0),
        (this.matrixAutoUpdate = !0),
        this.hiddenMatrix.copy(this.hiddenMatrixOld))
    }
    calcBoundingBox() {
      let e = this.originalGeometry
      e.boundingSphere === null && (e.boundingSphere = new pm())
      let r = e.attributes.position,
        o = e.boundingSphere.center
      ar.setFromBufferAttribute(r),
        ar.getCenter(o),
        (e.boundingSphere.radius = o.distanceTo(ar.max)),
        isNaN(e.boundingSphere.radius) &&
          console.error(
            'THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',
            this
          ),
        ar.getSize(no)
      let i = { width: no.x, height: no.y, depth: no.z }
      return (this.geometry.userData.parameters = i), i
    }
    updateBoundingBox(e) {
      let r = this.originalGeometry
      ar.min.set(e[0], e[2], e[4]),
        ar.max.set(e[1], e[3], e[5]),
        this.shearScaleInv &&
          (ar.min.applyMatrix4(this.shearScaleInv), ar.max.applyMatrix4(this.shearScaleInv)),
        r.boundingSphere === null && (r.boundingSphere = new pm())
      let o = r.boundingSphere.center
      ar.getCenter(o),
        (r.boundingSphere.radius = o.distanceTo(ar.max)),
        isNaN(r.boundingSphere.radius) &&
          console.error(
            'THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',
            this
          ),
        ar.getSize(no)
      let i = { width: no.x, height: no.y, depth: no.z }
      return (this.geometry.userData.parameters = i), i
    }
    freeSubdivPointer() {
      this.subdivPointer &&
        (mc.free_bvh(this.subdivPointer),
        mc.free_subdivision_surface(this.subdivPointer),
        (this.subdivPointer = 0))
    }
    updateGeometry(e) {
      this.geometry.userData.scale || (this.geometry.userData.scale = Array(3)),
        (this.geometry.userData.scale[0] =
          this.geometry.userData.parameters.width === 0
            ? 1
            : e.parameters.width / this.geometry.userData.parameters.width),
        (this.geometry.userData.scale[1] =
          this.geometry.userData.parameters.height === 0
            ? 1
            : e.parameters.height / this.geometry.userData.parameters.height),
        (this.geometry.userData.scale[2] =
          this.geometry.userData.parameters.depth === 0
            ? 1
            : e.parameters.depth / this.geometry.userData.parameters.depth),
        um(this.originalGeometry.attributes, ...this.geometry.userData.scale),
        (this.originalGeometry.attributes.position.needsUpdate = !0),
        (this.originalGeometry.attributes.normal.needsUpdate = !0),
        this.subdividedGeometry &&
          (um(this.subdividedGeometry.attributes, ...this.subdividedGeometry.userData.scale),
          (this.subdividedGeometry.attributes.position.needsUpdate = !0),
          (this.subdividedGeometry.attributes.normal.needsUpdate = !0)),
        (this.geometry.userData.parameters = O({}, e.parameters))
    }
  }
function um(n, t, e, r) {
  let o = n.position.array,
    i = n.normal.array,
    s = mm.makeScale(t, e, r).invert().elements,
    a,
    l,
    c
  for (var h = 0, p = o.length; h < p; h += 3)
    (o[h] *= t),
      (o[h + 1] *= e),
      (o[h + 2] *= r),
      (a = i[h]),
      (l = i[h + 1]),
      (c = i[h + 2]),
      (i[h] = s[0] * a + s[4] * l + s[8] * c),
      (i[h + 1] = s[1] * a + s[5] * l + s[9] * c),
      (i[h + 2] = s[2] * a + s[6] * l + s[10] * c)
}
import { BackSide as Kw, BufferGeometry as Xw, DoubleSide as Zw, FrontSide as Qw } from 'three'
function fm(n, t) {
  t.flatShading !== void 0 && ((n.flatShading = t.flatShading), (n.needsUpdate = !0)),
    t.wireframe !== void 0 && (n.wireframe = t.wireframe),
    t.side !== void 0 &&
      (t.side === 0 ? (n.side = Qw) : t.side === 1 ? (n.side = Kw) : (n.side = Zw))
}
function e1(n, t) {
  if (Array.isArray(n.material)) for (let e of n.material) fm(e, t)
  else {
    let e = n.material
    fm(e, t)
  }
  n.objectType === 'SubdivObject' &&
    t.flatShading !== void 0 &&
    ((n.material.flatShading = !1), (n.smoothShading = !t.flatShading), n.updateMesh())
}
function ym(n, t, e) {
  let r
  if (t.geometry.type === 'SubdivGeometry') r = Ei.createFromState(n, t, e)
  else {
    let o = t.geometry.type === 'BooleanGeometry' ? new Xw() : va(t.geometry, e),
      i = 'materials' in t ? Pd(t.materials, e) : Nn(t.material, e)
    Vs.is2DParametricMesh(o.userData.type)
      ? (r = new Ai(o, i))
      : (o == null ? void 0 : o.userData.type) === 'VectorGeometry'
      ? (r = new oo(o, i))
      : t.geometry.type === 'NonParametricGeometry'
      ? (r = new Bi(o, i))
      : t.geometry.type === 'BooleanGeometry'
      ? ((r = new La(void 0, i)), (r.booleanOp = t.geometry.operation))
      : (r = new Di(o, i)),
      (r.uuid = n),
      r.fromState(t)
  }
  return e1(r, t), r
}
function gm(n, t, e) {
  return t.type === 'Mesh'
    ? ym(n, t, e)
    : t.type === 'TextFrame'
    ? No.createFromState(n, t, e)
    : t.type === 'Empty'
    ? Fr.createFromState(n, t)
    : t.type === 'PointLight'
    ? Oi.createFromState(n, t, e)
    : t.type === 'SpotLight'
    ? Ii.createFromState(n, t, e)
    : t.type === 'DirectionalLight'
    ? Pi.createFromState(n, t, e)
    : Jo.is(t.type)
    ? Rr.createFromState(n, t)
    : (console.error(t), new Fr())
}
function t1(n, t) {
  ;(t.uniforms[`f${t.id}_transmissionSamplerMap`].value = n.texture),
    (t.uniforms[`f${t.id}_transmissionDepthMap`].value = n.depthTexture)
}
function xm(n, t, e) {
  if (!e.userData.layers) return !1
  let r = !1,
    o = e.userData.layers.getLayersOfType('transmission')
  return (
    o.length > 0
      ? (t.layers.set(3), (r = !0), n !== void 0 && o.forEach((i) => t1(n, i)))
      : t.layers.set(0),
    r
  )
}
function bm(n, t) {
  let e = !1
  return (
    t.traverseEntity((r) => {
      if (r instanceof rt)
        if (Array.isArray(r.material))
          for (let o = 0; o < r.material.length; o++) xm(n, r, r.material[o]) && (e = !0)
        else xm(n, r, r.material) && (e = !0)
    }),
    e
  )
}
function vm(n, t) {
  'material' in n && r1(n.material, t), 'geometry' in n && n.geometry.dispose()
}
function r1(n, t) {
  Lc(n).forEach((e) => {
    t.isSharedMaterial(e) || e.dispose()
  })
}
var wm = new n1(),
  fc = class extends ba(i1) {
    constructor(e, r) {
      super()
      this.objectType = 'Scene'
      this.alpha = 1
      this.backupFog = new s1(16777215, 0.1, 2e3)
      this.fogUseBGColor = !1
      this.wireframeState = !1
      this.needsTransmissionDirty = !0
      this._needsTransmission = !1
      this._color = new Sm(1, 0, 0)
      this.bgColor = new Sm(1, 1, 1)
      this.entityByUuid = {}
      ;(this.ambientLight = new o1(13882323, 8553090, 0.75)),
        (this.ambientLight.name = 'Default Ambient Light'),
        (this.personalCamera = this.createPersonalCamera()),
        (this.activeCamera = this.personalCamera),
        (this.sharedAssetManager = r),
        this.init(e, r)
    }
    needsTransmission(e) {
      return (
        this.needsTransmissionDirty &&
          ((this._needsTransmission = bm(e, this)),
          e !== void 0 && (this.needsTransmissionDirty = !1)),
        this._needsTransmission
      )
    }
    find(e) {
      if (e === '' || e === void 0) return
      let r = this.entityByUuid[e]
      return r === void 0 ? this.getObjectByProperty('uuid', e) : r
    }
    get color() {
      return this._color
    }
    set color(e) {
      this.fogUseBGColor === !0 && this.backupFog.color.copy(e), this._color.copy(e)
    }
    get enableFog() {
      return this.fog !== null
    }
    set enableFog(e) {
      this.fog = e === !0 ? this.backupFog : null
    }
    init(e, r) {
      if (
        (this.createChildrenObjects(e.objects, this, r),
        this.personalCamera.removeFromParent(),
        this.add(this.personalCamera),
        this.ambientLight.removeFromParent(),
        this.add(this.ambientLight),
        this.setBackgroundColor(Xe(e.backgroundColor, r)),
        this.updateFog(e.fog, r),
        this.updateAmbientLight(e.environment.ambientLight, r),
        (this.activeCamera = this.personalCamera),
        e.publish.playCamera !== null)
      ) {
        let o = this.find(e.publish.playCamera)
        o instanceof Rr && this.switchActiveCamera(o)
      }
      this.traverse((o) => {
        vr(o) && o.recomputeBoolean()
      })
    }
    clearScene(e) {
      this.traverseEntity((r) => {
        vm(r, e)
      })
      for (let r of this.children) Jt(r) && r.removeFromParent()
    }
    resetAfterClear(e, r) {
      this.init(e, r)
    }
    createPersonalCamera() {
      let e = Rr.createFromState(
        fc.PERSONAL_CAMERA_ID,
        H(O({}, Us.defaultData), { name: 'Personal Camera' })
      )
      return (
        (e.enableHelper = !1),
        (e.objectHelper.visible = !1),
        delete e.isEntity,
        this.registerObjectCreatedInLegacy(e),
        e
      )
    }
    raycast(e) {
      let r = [],
        o = (i) => {
          for (let s of i.children)
            Jt(s) &&
              !s.raycastLock &&
              s.visible &&
              ((br(s) || (Gr(s) && s.enableHelper && s.objectHelper.parent)) &&
                e.intersectObject(s, !1, r),
              o(s))
        }
      return o(this), r
    }
    traverseEntity(e) {
      for (let r of this.children) Jt(r) && r.traverseEntity(e)
    }
    updateFog(e, r) {
      ;(this.enableFog = e.enabled),
        (this.fogUseBGColor = e.useBackgroundColor),
        e.useBackgroundColor
          ? this.backupFog.color.set(this.bgColor)
          : (this.backupFog.color = Xe(e.color, r)),
        (this.backupFog.near = e.near),
        (this.backupFog.far = e.far)
    }
    toJSON(e) {
      return {}
    }
    fromJSON(e) {
      return this
    }
    dispose() {
      this.clearScene(this.sharedAssetManager), this.sharedAssetManager.dispose()
    }
    updateAmbientLight(e, r) {
      Ad(this.ambientLight, e, r),
        e.groundColor !== void 0 && (this.ambientLight.groundColor = Xe(e.groundColor, r)),
        e.enabled !== void 0 && (this.ambientLight.visible = e.enabled)
    }
    switchActiveCamera(e) {
      this.activeCamera !== this.personalCamera && (this.activeCamera.enableHelper = !0),
        (this.activeCamera = e),
        (e.enableHelper = !1)
    }
    setBackgroundColor(e) {
      ;(this.bgColor = e), (this.alpha = e.a)
    }
    createChildrenObjects(e, r, o) {
      for (let i of e) this.createChildObject(i.id, i.data, i.children, r, o)
    }
    registerObjectCreatedInLegacy(e) {
      this.entityByUuid[e.uuid] = e
    }
    unregisterObject(e) {
      delete this.entityByUuid[e.uuid]
      for (let r of e.children) this.unregisterObject(r)
    }
    createChildObject(e, r, o, i, s) {
      let a = gm(e, r, s)
      return (
        a &&
          ((this.entityByUuid[e] = a),
          i.add(a),
          vr(i) && br(a) && (a.prevBooleanObjectParent = i),
          this.createChildrenObjects(o, a, s)),
        a
      )
    }
    getCenter(e) {
      let r = []
      for (let i = 0, s = e.length; i < s; ++i) {
        let { id: a, recursive: l } = e[i],
          c = this.find(a),
          h = l ? c.recursiveBBox : c.singleBBox
        r.push(...h.vertices)
      }
      let o = new a1()
      return o.setFromPoints(r), o.getCenter(wm), wm
    }
    copyMatrixWorld(e, r) {
      if (e === null) {
        r.identity()
        return
      }
      let o = this.find(e)
      o ? r.copy(o.matrixWorld) : r.identity()
    }
    copyParentMatrixWorld(e, r) {
      var i
      if (e === null) {
        r.identity()
        return
      }
      let o = (i = this.find(e)) == null ? void 0 : i.parent
      o ? r.copy(o.matrixWorld) : r.identity()
    }
    traverseMaterial(e) {
      this.traverseEntity((r) => {
        if (r instanceof rt)
          if (Array.isArray(r.material))
            for (let o = 0; o < r.material.length; o++) e(r.material[o])
          else e(r.material)
      })
    }
    updateCanvasSize(e, r) {
      this.activeCamera.setViewplaneSize(e, r)
      let o, i
      e >= r ? ((o = r / e), (i = 1)) : ((o = 1), (i = e / r)),
        this.traverseMaterial((s) => {
          s.layersList.getLayersOfType('transmission').forEach((l) => {
            ;(l.uniforms[`f${l.id}_aspectRatio`].value.x = o),
              (l.uniforms[`f${l.id}_aspectRatio`].value.y = i)
          })
        })
    }
  },
  Dn = fc
Dn.PERSONAL_CAMERA_ID = 'f23858d0-4a3b-4bd8-8173-66ed0af7f6fb-personalCamera'
import { DRACOLoader as l1 } from 'three/examples/jsm/loaders/DRACOLoader.js'
var so
function c1() {
  return (
    so ||
      ((so = new l1()),
      so.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.2/').preload()),
    so.decoderPending
  )
}
async function h1(n) {
  if (so) {
    let t = {
        attributeIDs: so.defaultAttributeIDs,
        attributeTypes: so.defaultAttributeTypes,
        useUniqueIDs: !1,
      },
      e
    try {
      e = await so.decodeGeometry(new Int8Array(n).buffer, t)
    } catch (r) {
      console.error(r)
    }
    if (e)
      return {
        index: e.index ? { array: e.index.array } : void 0,
        attributes: Object.entries(e.attributes).map(([r, o]) => ({
          name: r,
          itemSize: o.itemSize,
          array: o.array,
        })),
      }
  }
  return null
}
async function Lm(n) {
  let [t, e] = qa(_s.deserialize(new Uint8Array(n))),
    r = []
  t.scene.objects.traverse((o, i) => {
    i.type === 'Mesh' &&
      i.geometry.type === 'NonParametricGeometry' &&
      i.geometry.data.draco !== void 0 &&
      r.push(i)
  }),
    r.length && (await c1())
  for (let o of r) {
    let i = await h1($a(o.geometry.data.draco))
    if (i) {
      i.index &&
        (o.geometry.data.index = {
          array: i.index.array,
          itemSize: 1,
          normalized: !1,
          type: 'Uint32Array',
        })
      let s = {}
      i.attributes.forEach(({ name: a, array: l, itemSize: c }) => {
        s[a] = { array: l, itemSize: c, type: 'Float32Array', normalized: !1 }
      }),
        (o.geometry.data.attributes = s),
        (o.geometry.data.draco = void 0)
    }
  }
  return e.result().data
}
var yc = new Map(),
  Bn = { url: 'head', time: 0, data: null, next: null, prev: null },
  _i = { url: 'tail', time: 1 / 0, data: null, next: null, prev: null }
Bn.next = _i
_i.prev = Bn
var Cm = 0
function vi(n) {
  if (typeof n == 'string') return n
  let t = Date.now(),
    e = yc.get(n)
  return (
    e === void 0
      ? ((e = {
          url: URL.createObjectURL(new Blob([n])),
          data: n,
          time: t,
          next: null,
          prev: null,
        }),
        yc.set(n, e))
      : ((e.time = t), (e.prev.next = e.next), (e.next.prev = e.prev)),
    (e.prev = _i.prev),
    (e.next = _i),
    (_i.prev.next = e),
    (_i.prev = e),
    t - Cm > 1e3 * 10 &&
      ((Cm = t + 1e3),
      setTimeout(() => {
        let r = Date.now(),
          o = Bn.next
        for (; o.time < r - 1e3 * 10; )
          URL.revokeObjectURL(o.url), yc.delete(o.data), (o = o.next), (o.prev = Bn), (Bn.next = o)
      }, 900)),
    e.url
  )
}
import {
  WebGLRenderTarget as p1,
  LinearMipmapLinearFilter as u1,
  LinearFilter as d1,
  ClampToEdgeWrapping as Tm,
  DepthTexture as m1,
} from 'three'
var Nm = new mt(),
  _a = class extends Dt {},
  Ga = class {
    constructor(t) {
      this.materials = {}
      this.images = {}
      this.colors = {}
      ;(this.transmissionRenderTarget = new p1(2048, 2048, {
        generateMipmaps: !0,
        minFilter: u1,
        magFilter: d1,
        wrapS: Tm,
        wrapT: Tm,
      })),
        (this.transmissionRenderTarget.depthTexture = new m1(2048, 2048)),
        this.reset(t)
    }
    reset(t) {
      for (let [e, r] of Object.entries(t.images)) this.addImage(e, r.data)
      for (let [e, r] of Object.entries(t.colors)) this.addColor(e, r)
      for (let [e, r] of Object.entries(t.materials)) this.addMaterial(e, Xl(r, this))
    }
    get transmissionSamplerMap() {
      return this.transmissionRenderTarget.texture
    }
    get transmissionDepthMap() {
      return this.transmissionRenderTarget.depthTexture
    }
    addMaterial(t, e) {
      ;(e.uuid = t), (this.materials[t] = e)
    }
    deleteMaterial(t) {
      this.materials[t] && (this.materials[t].dispose(), delete this.materials[t])
    }
    isSharedMaterial(t) {
      return t.uuid in this.materials || t === Nm
    }
    getMaterial(t) {
      let e = this.materials[t]
      return e
    }
    getMaterialOrDeletedPlaceholder(t) {
      var e
      return (e = this.materials[t]) != null ? e : Nm
    }
    getMaterials() {
      return this.materials
    }
    addImage(t, e) {
      if (this.images[t])
        return (
          (this.images[t].onload = () => {
            this.onImageLoad && this.onImageLoad()
          }),
          (this.images[t].src = vi(e)),
          !0
        )
      {
        let r = new Image()
        return (
          (r.src = vi(e)),
          (r.onload = () => {
            this.onImageLoad && this.onImageLoad()
          }),
          (this.images[t] = r),
          !1
        )
      }
    }
    deleteImage(t) {
      this.images[t] && delete this.images[t]
    }
    getDefaultImage() {
      return this.images.image_0
    }
    getImage(t) {
      return this.images[t]
    }
    getImages() {
      return this.images
    }
    addColor(t, e) {
      return this.colors[t]
        ? ('a' in e
            ? this.colors[t].setRGBA(e.r, e.g, e.b, e.a)
            : this.colors[t].setRGBA(e.r, e.g, e.b, 1),
          !0)
        : ('a' in e
            ? (this.colors[t] = new _a(e.r, e.g, e.b, e.a))
            : (this.colors[t] = new _a(e.r, e.g, e.b, 1)),
          !1)
    }
    updateColor(t, e) {
      var r, o, i, s
      if (this.colors[t]) {
        let a = this.colors[t]
        return (
          (this.colors[t].r = (r = e.r) != null ? r : a.r),
          (this.colors[t].g = (o = e.g) != null ? o : a.g),
          (this.colors[t].b = (i = e.b) != null ? i : a.b),
          (this.colors[t].a = (s = e.a) != null ? s : a.a),
          !0
        )
      }
      return !1
    }
    deleteColor(t) {
      this.colors[t] && delete this.colors[t]
    }
    getColor(t) {
      return this.colors[t]
    }
    dispose() {
      Object.keys(this.materials).forEach((e) => this.deleteMaterial(e)),
        this.transmissionRenderTarget.depthTexture.dispose(),
        this.transmissionRenderTarget.dispose(),
        (this.onImageLoad = void 0)
    }
  }
import { Mesh as K4 } from 'three'
import { mergeBufferGeometries as Q4 } from 'three/examples/jsm/utils/BufferGeometryUtils.js'
function Mm(n) {
  let t
  if (!!n.index)
    for (let e = 0; e < n.index.array.length; e += 3)
      (t = n.index.array[e]), (n.index.array[e] = n.index.array[e + 2]), (n.index.array[e + 2] = t)
}
import { Color as Pm, ShaderLib as f1 } from 'three'
function Om(n) {
  let t = new Set()
  return (
    n.traverse((e) => {
      if (br(e))
        if (et(e.material))
          e.material.forEach((r) => {
            let o = r
            t.has(o) || t.add(o)
          })
        else {
          let r = e.material
          t.has(r) || t.add(r)
        }
    }),
    t.forEach((e) => {
      if (e instanceof Array) return
      let r = e.onBeforeCompile.bind(e)
      y1(e)
        ? (Object.assign(e, {
            isMeshStandardMaterial: !0,
            isMeshPhysicalMaterial: !0,
            transmission: 1,
            attenuationColor: new Pm(),
            specularColor: new Pm(),
          }),
          (e.onBeforeCompile = (o, i) => {
            r && r(o, i),
              (o.uniforms = Object.assign(f1.physical.uniforms, o.uniforms)),
              e.userData.layers.getLayersOfType('transmission').forEach((s) => {
                o.uniforms.transmissionSamplerMap.value &&
                  ((s.uniforms['f' + s.id + '_transmissionSamplerMap'].value =
                    o.uniforms.transmissionSamplerMap.value),
                  (s.uniforms['f' + s.id + '_transmissionSamplerSize'].value =
                    o.uniforms.transmissionSamplerSize.value))
              })
          }))
        : g1(e) ||
          (e.onBeforeCompile = (o, i) => {
            r && r(o, i), (e.transparent = !1)
          })
    }),
    n
  )
}
function y1(n) {
  return n.userData.layers.getLayersOfType('transmission').length > 0
}
function g1(n) {
  let t = n.userData.layers.head,
    e = 0
  for (; t !== void 0; ) {
    if (t.type !== 'light' && t.type !== 'fresnel') {
      let r = t.uniforms['f' + t.id + '_alpha']
      r && (e += (1 - e) * r.value)
    }
    t = t.next
  }
  return e < 1
}
function Im(n) {
  return (
    n.traverse((t) => {
      if (t.type === 'Camera') {
        let e = t
        e.type = e.cameraType
      }
    }),
    n
  )
}
function Am(n) {
  let t = [],
    e = (r, o = 0) => {
      let i = o > 0 ? r + o : r
      return t.includes(i) ? e(r, o + 1) : i
    }
  return (
    n.traverse((r) => {
      if (t.includes(r.name)) {
        let o = r.name,
          i = e(r.name)
        if (((r.name = i), r.isMesh)) {
          let s = r
          s.material instanceof Array
            ? s.material.forEach((a) => {
                a.name = a.name.replace(o, i)
              })
            : s.material.isAsset || (s.material.name = s.material.name.replace(o, i))
        }
      }
      t.push(r.name)
    }),
    n
  )
}
import { mergeBufferGeometries as x1 } from 'three/examples/jsm/utils/BufferGeometryUtils'
function Dm(n) {
  let t = []
  return (
    n.traverse((e) => {
      e instanceof Co && t.push(e)
    }),
    t.forEach((e) => {
      let r = e.object,
        o = e.children,
        i = o.map((a) => {
          a.updateMatrix()
          let l = a.geometry.clone().applyMatrix4(a.matrix)
          return a.matrix.determinant() < 0 && Mm(l), l
        }),
        s = x1(e.parameters.hideBase ? i : [r.geometry, ...i])
      ;(r.geometry = s), (r.material = o[0].material), r.remove(e)
    }),
    n
  )
}
var Bm =
    'The SplineLoader only accepts .splinecode files that are generated from Spline export panel.',
  gc = class extends v1 {
    load(t, e, r, o = console.error) {
      let i = new b1(this.manager)
      i.setPath(this.path),
        i.setResponseType('arraybuffer'),
        i.setRequestHeader(this.requestHeader),
        i.setWithCredentials(this.withCredentials),
        t.endsWith('.spline')
          ? console.warn(Bm + ' The .spline files are only meant to be used by the Editor.')
          : t.endsWith('.splinecode') || console.warn(Bm),
        i.load(
          t,
          async (s) => {
            try {
              if (typeof s == 'string') throw new Error('The .spline file is not binary!')
              let a = await this.parse(s)
              e(a)
            } catch (a) {
              o(a)
            }
          },
          r,
          o
        )
    }
    async parse(t) {
      let e = await Lm(t),
        r = new Ga(e.shared)
      Object.values(r.getMaterials()).forEach((s) => Object.assign(s, { isAsset: !0 }))
      let o = new Dn(e.scene, r)
      o.remove(o.personalCamera),
        e.scene.environment.ambientLight.enabled || o.remove(o.ambientLight)
      let i = e.scene.publish.playCamera
      if (i) {
        let s = o.find(i)
        s && Id(s) && Object.assign(s, { makeDefault: !0 })
      }
      return (o = Dm(o)), (o = Om(o)), (o = Im(o)), (o = Am(o)), o
    }
  }
export { gc as default }

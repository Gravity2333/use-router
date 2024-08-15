import * as t from "react";
var e = {
    d: (t, n) => {
      for (var r in n)
        e.o(n, r) &&
          !e.o(t, r) &&
          Object.defineProperty(t, r, { enumerable: !0, get: n[r] });
    },
    o: (t, e) => Object.prototype.hasOwnProperty.call(t, e),
  },
  n = {};
e.d(n, { A: () => U });
const r =
  ((o = {
    createElement: () => t.createElement,
    useEffect: () => t.useEffect,
    useMemo: () => t.useMemo,
    useRef: () => t.useRef,
    useState: () => t.useState,
  }),
  (i = {}),
  e.d(i, o),
  i);
var o, i, a;
function s(t) {
  return (
    (s =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              "function" == typeof Symbol &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    s(t)
  );
}
function u(t) {
  var e = (function (t) {
    if ("object" != s(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var n = e.call(t, "string");
      if ("object" != s(n)) return n;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return String(t);
  })(t);
  return "symbol" == s(e) ? e : e + "";
}
function c(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(t, u(r.key), r);
  }
}
function l(t, e, n) {
  return (
    e && c(t.prototype, e),
    n && c(t, n),
    Object.defineProperty(t, "prototype", { writable: !1 }),
    t
  );
}
function h(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function f(t, e, n) {
  return (
    (e = u(e)) in t
      ? Object.defineProperty(t, e, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = n),
    t
  );
}
!(function (t) {
  (t.POP = "POP"), (t.PUSH = "PUSH"), (t.REPLACE = "REPLACE");
})(a || (a = {}));
let p = l(function t() {
    h(this, t),
      f(this, "handlers", []),
      f(
        this,
        "listen",
        (t) => (
          this.handlers.push(t),
          () => {
            this.handlers.filter((e) => e !== t);
          }
        )
      ),
      f(this, "trigger", (t) => {
        this.handlers.forEach((e) => e(t));
      }),
      f(this, "getLength", () => this.handlers.length);
  }),
  m = (function () {
    return l(
      function t() {
        h(this, t), f(this, "list", []), f(this, "pointer", 0);
      },
      [
        {
          key: "pop",
          value: function (t = -1) {
            return (
              (this.pointer += t),
              this.pointer < 0 && (this.pointer = 0),
              0 === this.list?.length
                ? (this.pointer = 0)
                : this.pointer > this.list?.length - 1 &&
                  (this.pointer = this.list?.length - 1),
              this.list[this.pointer]
            );
          },
        },
        {
          key: "push",
          value: function (t) {
            (0 === this.pointer && 0 === this.list.length) ||
              (this.list = this.list.slice(0, ++this.pointer)),
              this.list.push(t);
          },
        },
        {
          key: "replace",
          value: function (t) {
            0 === this.list?.length
              ? this.list.push(t)
              : this.list.splice(this.pointer, 1, t);
          },
        },
        {
          key: "length",
          value: function () {
            return this.list.length;
          },
        },
        {
          key: "current",
          value: function () {
            return this.pointer;
          },
        },
      ]
    );
  })();
const y = {
  randomUUID:
    "undefined" != typeof crypto &&
    crypto.randomUUID &&
    crypto.randomUUID.bind(crypto),
};
var g,
  d = new Uint8Array(16);
function b() {
  if (
    !g &&
    !(g =
      "undefined" != typeof crypto &&
      crypto.getRandomValues &&
      crypto.getRandomValues.bind(crypto))
  )
    throw new Error(
      "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported"
    );
  return g(d);
}
for (var v = [], P = 0; P < 256; ++P) v.push((P + 256).toString(16).slice(1));
const E = function (t, e, n) {
    if (y.randomUUID && !e && !t) return y.randomUUID();
    var r = (t = t || {}).random || (t.rng || b)();
    if (((r[6] = (15 & r[6]) | 64), (r[8] = (63 & r[8]) | 128), e)) {
      n = n || 0;
      for (var o = 0; o < 16; ++o) e[n + o] = r[o];
      return e;
    }
    return (function (t, e = 0) {
      return (
        v[t[e + 0]] +
        v[t[e + 1]] +
        v[t[e + 2]] +
        v[t[e + 3]] +
        "-" +
        v[t[e + 4]] +
        v[t[e + 5]] +
        "-" +
        v[t[e + 6]] +
        v[t[e + 7]] +
        "-" +
        v[t[e + 8]] +
        v[t[e + 9]] +
        "-" +
        v[t[e + 10]] +
        v[t[e + 11]] +
        v[t[e + 12]] +
        v[t[e + 13]] +
        v[t[e + 14]] +
        v[t[e + 15]]
      ).toLowerCase();
    })(r);
  },
  S = { pathname: "/", search: "", key: "default", state: {} };
function k(t) {
  if ("string" == typeof t) {
    const e = {};
    let n = t;
    const r = n.indexOf("?");
    return (
      r >= 0 && ((e.search = n.substring(r)), (n = n.substring(0, r))),
      (e.pathname = n),
      e
    );
  }
  return t;
}
function w({ back: t }) {
  return r.createElement(
    "div",
    null,
    "404Page ",
    r.createElement("span", { onClick: t }, "back")
  );
}
function U({
  routes: t,
  callbacks: e = [],
  initialPath: n,
  NotFoundPage: o = w,
}) {
  const i = (0, r.useRef)(
      (function () {
        const t = new p(),
          e = new m();
        let n = S,
          r = a.POP;
        function o(t, e = {}) {
          const { pathname: r, search: o } = n;
          return { pathname: r, search: o, ...k(t), state: e, key: E() };
        }
        function i(o) {
          (n = e.pop(o) || S),
            (r = a.POP),
            t.trigger({ action: r, location: n });
        }
        return (
          e.push(n),
          {
            get location() {
              return n;
            },
            get action() {
              return r;
            },
            get length() {
              return e.length();
            },
            get current() {
              return e.current();
            },
            push: function (i, s) {
              const u = o(i, s);
              (s || u.pathname !== n.pathname || u.search !== n.search) &&
                (e.push(u),
                (r = a.PUSH),
                (n = u),
                t.trigger({ action: r, location: n }));
            },
            replace: function (i, s) {
              const u = o(i, s);
              (s || u.pathname !== n.pathname || u.search !== n.search) &&
                (e.replace(u),
                (r = a.REPLACE),
                (n = u),
                t.trigger({ action: r, location: n }));
            },
            listen: t.listen,
            go: i,
            forward: () => i(1),
            back: () => i(-1),
          }
        );
      })()
    ),
    s = (0, r.useRef)(t.reduce((t, e) => ({ ...t, [e.pathname]: e }), {})),
    [u, c] = (0, r.useState)(s.current[i.current?.location?.pathname || "/"]),
    l = (0, r.useMemo)(() => (u?.component ? u.component : null), [u]);
  return (
    (0, r.useEffect)(() => {
      e.forEach((t) => i.current.listen(t));
      const t = i.current.listen(function (t) {
        const { location: e } = t,
          { pathname: n } = e,
          r = s.current[n];
        if (r) {
          const { callback: e } = r;
          e && e(t), c(r);
        } else c(null);
      });
      return () => {
        t();
      };
    }, []),
    (0, r.useEffect)(() => {
      n && i.current.push(n);
    }, []),
    [
      i.current,
      function () {
        const t =
          l ||
          (() =>
            r.createElement(o, {
              back: () => {
                i.current?.push("/");
              },
            }));
        return r.createElement(t, {
          history: i.current,
          location: {
            ...(i.current?.location || {}),
            state: {
              ...(u?.initialState || {}),
              ...(i.current?.location?.state || {}),
            },
          },
        });
      },
    ]
  );
}
var O = n.A;
export { O as default };

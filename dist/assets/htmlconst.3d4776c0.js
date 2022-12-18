(function () {
  const N = document.createElement("link").relList;
  if (N && N.supports && N.supports("modulepreload")) return;
  for (const I of document.querySelectorAll('link[rel="modulepreload"]')) j(I);
  new MutationObserver((I) => {
    for (const E of I)
      if (E.type === "childList")
        for (const oe of E.addedNodes)
          oe.tagName === "LINK" && oe.rel === "modulepreload" && j(oe);
  }).observe(document, { childList: !0, subtree: !0 });
  function $(I) {
    const E = {};
    return (
      I.integrity && (E.integrity = I.integrity),
      I.referrerpolicy && (E.referrerPolicy = I.referrerpolicy),
      I.crossorigin === "use-credentials"
        ? (E.credentials = "include")
        : I.crossorigin === "anonymous"
        ? (E.credentials = "omit")
        : (E.credentials = "same-origin"),
      E
    );
  }
  function j(I) {
    if (I.ep) return;
    I.ep = !0;
    const E = $(I);
    fetch(I.href, E);
  }
})();
var Zn =
    typeof globalThis < "u"
      ? globalThis
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : typeof self < "u"
      ? self
      : {},
  eo = { exports: {} };
/*!
 * Bootstrap v5.2.2 (https://getbootstrap.com/)
 * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */ (function (_, N) {
  (function ($, j) {
    _.exports = j();
  })(Zn, function () {
    const $ = "transitionend",
      j = (i) => {
        let e = i.getAttribute("data-bs-target");
        if (!e || e === "#") {
          let t = i.getAttribute("href");
          if (!t || (!t.includes("#") && !t.startsWith("."))) return null;
          t.includes("#") && !t.startsWith("#") && (t = `#${t.split("#")[1]}`),
            (e = t && t !== "#" ? t.trim() : null);
        }
        return e;
      },
      I = (i) => {
        const e = j(i);
        return e && document.querySelector(e) ? e : null;
      },
      E = (i) => {
        const e = j(i);
        return e ? document.querySelector(e) : null;
      },
      oe = (i) => {
        i.dispatchEvent(new Event($));
      },
      re = (i) =>
        !(!i || typeof i != "object") &&
        (i.jquery !== void 0 && (i = i[0]), i.nodeType !== void 0),
      ue = (i) =>
        re(i)
          ? i.jquery
            ? i[0]
            : i
          : typeof i == "string" && i.length > 0
          ? document.querySelector(i)
          : null,
      Ee = (i) => {
        if (!re(i) || i.getClientRects().length === 0) return !1;
        const e =
            getComputedStyle(i).getPropertyValue("visibility") === "visible",
          t = i.closest("details:not([open])");
        if (!t) return e;
        if (t !== i) {
          const s = i.closest("summary");
          if ((s && s.parentNode !== t) || s === null) return !1;
        }
        return e;
      },
      he = (i) =>
        !i ||
        i.nodeType !== Node.ELEMENT_NODE ||
        !!i.classList.contains("disabled") ||
        (i.disabled !== void 0
          ? i.disabled
          : i.hasAttribute("disabled") &&
            i.getAttribute("disabled") !== "false"),
      Zt = (i) => {
        if (!document.documentElement.attachShadow) return null;
        if (typeof i.getRootNode == "function") {
          const e = i.getRootNode();
          return e instanceof ShadowRoot ? e : null;
        }
        return i instanceof ShadowRoot
          ? i
          : i.parentNode
          ? Zt(i.parentNode)
          : null;
      },
      Ye = () => {},
      $e = (i) => {
        i.offsetHeight;
      },
      ei = () =>
        window.jQuery && !document.body.hasAttribute("data-bs-no-jquery")
          ? window.jQuery
          : null,
      vt = [],
      V = () => document.documentElement.dir === "rtl",
      K = (i) => {
        var e;
        (e = () => {
          const t = ei();
          if (t) {
            const s = i.NAME,
              n = t.fn[s];
            (t.fn[s] = i.jQueryInterface),
              (t.fn[s].Constructor = i),
              (t.fn[s].noConflict = () => ((t.fn[s] = n), i.jQueryInterface));
          }
        }),
          document.readyState === "loading"
            ? (vt.length ||
                document.addEventListener("DOMContentLoaded", () => {
                  for (const t of vt) t();
                }),
              vt.push(e))
            : e();
      },
      ae = (i) => {
        typeof i == "function" && i();
      },
      ti = (i, e, t = !0) => {
        if (!t) return void ae(i);
        const s =
          ((r) => {
            if (!r) return 0;
            let { transitionDuration: a, transitionDelay: c } =
              window.getComputedStyle(r);
            const u = Number.parseFloat(a),
              h = Number.parseFloat(c);
            return u || h
              ? ((a = a.split(",")[0]),
                (c = c.split(",")[0]),
                1e3 * (Number.parseFloat(a) + Number.parseFloat(c)))
              : 0;
          })(e) + 5;
        let n = !1;
        const o = ({ target: r }) => {
          r === e && ((n = !0), e.removeEventListener($, o), ae(i));
        };
        e.addEventListener($, o),
          setTimeout(() => {
            n || oe(e);
          }, s);
      },
      yt = (i, e, t, s) => {
        const n = i.length;
        let o = i.indexOf(e);
        return o === -1
          ? !t && s
            ? i[n - 1]
            : i[0]
          : ((o += t ? 1 : -1),
            s && (o = (o + n) % n),
            i[Math.max(0, Math.min(o, n - 1))]);
      },
      Bs = /[^.]*(?=\..*)\.|.*/,
      Fs = /\..*/,
      Rs = /::\d+$/,
      wt = {};
    let ii = 1;
    const si = { mouseenter: "mouseover", mouseleave: "mouseout" },
      Ws = new Set([
        "click",
        "dblclick",
        "mouseup",
        "mousedown",
        "contextmenu",
        "mousewheel",
        "DOMMouseScroll",
        "mouseover",
        "mouseout",
        "mousemove",
        "selectstart",
        "selectend",
        "keydown",
        "keypress",
        "keyup",
        "orientationchange",
        "touchstart",
        "touchmove",
        "touchend",
        "touchcancel",
        "pointerdown",
        "pointermove",
        "pointerup",
        "pointerleave",
        "pointercancel",
        "gesturestart",
        "gesturechange",
        "gestureend",
        "focus",
        "blur",
        "change",
        "reset",
        "select",
        "submit",
        "focusin",
        "focusout",
        "load",
        "unload",
        "beforeunload",
        "resize",
        "move",
        "DOMContentLoaded",
        "readystatechange",
        "error",
        "abort",
        "scroll",
      ]);
    function ni(i, e) {
      return (e && `${e}::${ii++}`) || i.uidEvent || ii++;
    }
    function oi(i) {
      const e = ni(i);
      return (i.uidEvent = e), (wt[e] = wt[e] || {}), wt[e];
    }
    function ri(i, e, t = null) {
      return Object.values(i).find(
        (s) => s.callable === e && s.delegationSelector === t
      );
    }
    function ai(i, e, t) {
      const s = typeof e == "string",
        n = s ? t : e || t;
      let o = ci(i);
      return Ws.has(o) || (o = i), [s, n, o];
    }
    function li(i, e, t, s, n) {
      if (typeof e != "string" || !i) return;
      let [o, r, a] = ai(e, t, s);
      e in si &&
        (r = ((m) =>
          function (p) {
            if (
              !p.relatedTarget ||
              (p.relatedTarget !== p.delegateTarget &&
                !p.delegateTarget.contains(p.relatedTarget))
            )
              return m.call(this, p);
          })(r));
      const c = oi(i),
        u = c[a] || (c[a] = {}),
        h = ri(u, r, o ? t : null);
      if (h) return void (h.oneOff = h.oneOff && n);
      const d = ni(r, e.replace(Bs, "")),
        v = o
          ? (function (f, m, p) {
              return function g(O) {
                const D = f.querySelectorAll(m);
                for (let { target: w } = O; w && w !== this; w = w.parentNode)
                  for (const x of D)
                    if (x === w)
                      return (
                        xt(O, { delegateTarget: w }),
                        g.oneOff && l.off(f, O.type, m, p),
                        p.apply(w, [O])
                      );
              };
            })(i, t, r)
          : (function (f, m) {
              return function p(g) {
                return (
                  xt(g, { delegateTarget: f }),
                  p.oneOff && l.off(f, g.type, m),
                  m.apply(f, [g])
                );
              };
            })(i, r);
      (v.delegationSelector = o ? t : null),
        (v.callable = r),
        (v.oneOff = n),
        (v.uidEvent = d),
        (u[d] = v),
        i.addEventListener(a, v, o);
    }
    function At(i, e, t, s, n) {
      const o = ri(e[t], s, n);
      o && (i.removeEventListener(t, o, Boolean(n)), delete e[t][o.uidEvent]);
    }
    function qs(i, e, t, s) {
      const n = e[t] || {};
      for (const o of Object.keys(n))
        if (o.includes(s)) {
          const r = n[o];
          At(i, e, t, r.callable, r.delegationSelector);
        }
    }
    function ci(i) {
      return (i = i.replace(Fs, "")), si[i] || i;
    }
    const l = {
      on(i, e, t, s) {
        li(i, e, t, s, !1);
      },
      one(i, e, t, s) {
        li(i, e, t, s, !0);
      },
      off(i, e, t, s) {
        if (typeof e != "string" || !i) return;
        const [n, o, r] = ai(e, t, s),
          a = r !== e,
          c = oi(i),
          u = c[r] || {},
          h = e.startsWith(".");
        if (o === void 0) {
          if (h) for (const d of Object.keys(c)) qs(i, c, d, e.slice(1));
          for (const d of Object.keys(u)) {
            const v = d.replace(Rs, "");
            if (!a || e.includes(v)) {
              const f = u[d];
              At(i, c, r, f.callable, f.delegationSelector);
            }
          }
        } else {
          if (!Object.keys(u).length) return;
          At(i, c, r, o, n ? t : null);
        }
      },
      trigger(i, e, t) {
        if (typeof e != "string" || !i) return null;
        const s = ei();
        let n = null,
          o = !0,
          r = !0,
          a = !1;
        e !== ci(e) &&
          s &&
          ((n = s.Event(e, t)),
          s(i).trigger(n),
          (o = !n.isPropagationStopped()),
          (r = !n.isImmediatePropagationStopped()),
          (a = n.isDefaultPrevented()));
        let c = new Event(e, { bubbles: o, cancelable: !0 });
        return (
          (c = xt(c, t)),
          a && c.preventDefault(),
          r && i.dispatchEvent(c),
          c.defaultPrevented && n && n.preventDefault(),
          c
        );
      },
    };
    function xt(i, e) {
      for (const [t, s] of Object.entries(e || {}))
        try {
          i[t] = s;
        } catch {
          Object.defineProperty(i, t, { configurable: !0, get: () => s });
        }
      return i;
    }
    const fe = new Map(),
      Et = {
        set(i, e, t) {
          fe.has(i) || fe.set(i, new Map());
          const s = fe.get(i);
          s.has(e) || s.size === 0
            ? s.set(e, t)
            : console.error(
                `Bootstrap doesn't allow more than one instance per element. Bound instance: ${
                  Array.from(s.keys())[0]
                }.`
              );
        },
        get: (i, e) => (fe.has(i) && fe.get(i).get(e)) || null,
        remove(i, e) {
          if (!fe.has(i)) return;
          const t = fe.get(i);
          t.delete(e), t.size === 0 && fe.delete(i);
        },
      };
    function di(i) {
      if (i === "true") return !0;
      if (i === "false") return !1;
      if (i === Number(i).toString()) return Number(i);
      if (i === "" || i === "null") return null;
      if (typeof i != "string") return i;
      try {
        return JSON.parse(decodeURIComponent(i));
      } catch {
        return i;
      }
    }
    function Tt(i) {
      return i.replace(/[A-Z]/g, (e) => `-${e.toLowerCase()}`);
    }
    const le = {
      setDataAttribute(i, e, t) {
        i.setAttribute(`data-bs-${Tt(e)}`, t);
      },
      removeDataAttribute(i, e) {
        i.removeAttribute(`data-bs-${Tt(e)}`);
      },
      getDataAttributes(i) {
        if (!i) return {};
        const e = {},
          t = Object.keys(i.dataset).filter(
            (s) => s.startsWith("bs") && !s.startsWith("bsConfig")
          );
        for (const s of t) {
          let n = s.replace(/^bs/, "");
          (n = n.charAt(0).toLowerCase() + n.slice(1, n.length)),
            (e[n] = di(i.dataset[s]));
        }
        return e;
      },
      getDataAttribute: (i, e) => di(i.getAttribute(`data-bs-${Tt(e)}`)),
    };
    class He {
      static get Default() {
        return {};
      }
      static get DefaultType() {
        return {};
      }
      static get NAME() {
        throw new Error(
          'You have to implement the static method "NAME", for each component!'
        );
      }
      _getConfig(e) {
        return (
          (e = this._mergeConfigObj(e)),
          (e = this._configAfterMerge(e)),
          this._typeCheckConfig(e),
          e
        );
      }
      _configAfterMerge(e) {
        return e;
      }
      _mergeConfigObj(e, t) {
        const s = re(t) ? le.getDataAttribute(t, "config") : {};
        return {
          ...this.constructor.Default,
          ...(typeof s == "object" ? s : {}),
          ...(re(t) ? le.getDataAttributes(t) : {}),
          ...(typeof e == "object" ? e : {}),
        };
      }
      _typeCheckConfig(e, t = this.constructor.DefaultType) {
        for (const n of Object.keys(t)) {
          const o = t[n],
            r = e[n],
            a = re(r)
              ? "element"
              : (s = r) == null
              ? `${s}`
              : Object.prototype.toString
                  .call(s)
                  .match(/\s([a-z]+)/i)[1]
                  .toLowerCase();
          if (!new RegExp(o).test(a))
            throw new TypeError(
              `${this.constructor.NAME.toUpperCase()}: Option "${n}" provided type "${a}" but expected type "${o}".`
            );
        }
        var s;
      }
    }
    class J extends He {
      constructor(e, t) {
        super(),
          (e = ue(e)) &&
            ((this._element = e),
            (this._config = this._getConfig(t)),
            Et.set(this._element, this.constructor.DATA_KEY, this));
      }
      dispose() {
        Et.remove(this._element, this.constructor.DATA_KEY),
          l.off(this._element, this.constructor.EVENT_KEY);
        for (const e of Object.getOwnPropertyNames(this)) this[e] = null;
      }
      _queueCallback(e, t, s = !0) {
        ti(e, t, s);
      }
      _getConfig(e) {
        return (
          (e = this._mergeConfigObj(e, this._element)),
          (e = this._configAfterMerge(e)),
          this._typeCheckConfig(e),
          e
        );
      }
      static getInstance(e) {
        return Et.get(ue(e), this.DATA_KEY);
      }
      static getOrCreateInstance(e, t = {}) {
        return (
          this.getInstance(e) || new this(e, typeof t == "object" ? t : null)
        );
      }
      static get VERSION() {
        return "5.2.2";
      }
      static get DATA_KEY() {
        return `bs.${this.NAME}`;
      }
      static get EVENT_KEY() {
        return `.${this.DATA_KEY}`;
      }
      static eventName(e) {
        return `${e}${this.EVENT_KEY}`;
      }
    }
    const Qe = (i, e = "hide") => {
      const t = `click.dismiss${i.EVENT_KEY}`,
        s = i.NAME;
      l.on(document, t, `[data-bs-dismiss="${s}"]`, function (n) {
        if (
          (["A", "AREA"].includes(this.tagName) && n.preventDefault(), he(this))
        )
          return;
        const o = E(this) || this.closest(`.${s}`);
        i.getOrCreateInstance(o)[e]();
      });
    };
    class Be extends J {
      static get NAME() {
        return "alert";
      }
      close() {
        if (l.trigger(this._element, "close.bs.alert").defaultPrevented) return;
        this._element.classList.remove("show");
        const e = this._element.classList.contains("fade");
        this._queueCallback(() => this._destroyElement(), this._element, e);
      }
      _destroyElement() {
        this._element.remove(),
          l.trigger(this._element, "closed.bs.alert"),
          this.dispose();
      }
      static jQueryInterface(e) {
        return this.each(function () {
          const t = Be.getOrCreateInstance(this);
          if (typeof e == "string") {
            if (t[e] === void 0 || e.startsWith("_") || e === "constructor")
              throw new TypeError(`No method named "${e}"`);
            t[e](this);
          }
        });
      }
    }
    Qe(Be, "close"), K(Be);
    const ui = '[data-bs-toggle="button"]';
    class Fe extends J {
      static get NAME() {
        return "button";
      }
      toggle() {
        this._element.setAttribute(
          "aria-pressed",
          this._element.classList.toggle("active")
        );
      }
      static jQueryInterface(e) {
        return this.each(function () {
          const t = Fe.getOrCreateInstance(this);
          e === "toggle" && t[e]();
        });
      }
    }
    l.on(document, "click.bs.button.data-api", ui, (i) => {
      i.preventDefault();
      const e = i.target.closest(ui);
      Fe.getOrCreateInstance(e).toggle();
    }),
      K(Fe);
    const b = {
        find: (i, e = document.documentElement) =>
          [].concat(...Element.prototype.querySelectorAll.call(e, i)),
        findOne: (i, e = document.documentElement) =>
          Element.prototype.querySelector.call(e, i),
        children: (i, e) =>
          [].concat(...i.children).filter((t) => t.matches(e)),
        parents(i, e) {
          const t = [];
          let s = i.parentNode.closest(e);
          for (; s; ) t.push(s), (s = s.parentNode.closest(e));
          return t;
        },
        prev(i, e) {
          let t = i.previousElementSibling;
          for (; t; ) {
            if (t.matches(e)) return [t];
            t = t.previousElementSibling;
          }
          return [];
        },
        next(i, e) {
          let t = i.nextElementSibling;
          for (; t; ) {
            if (t.matches(e)) return [t];
            t = t.nextElementSibling;
          }
          return [];
        },
        focusableChildren(i) {
          const e = [
            "a",
            "button",
            "input",
            "textarea",
            "select",
            "details",
            "[tabindex]",
            '[contenteditable="true"]',
          ]
            .map((t) => `${t}:not([tabindex^="-"])`)
            .join(",");
          return this.find(e, i).filter((t) => !he(t) && Ee(t));
        },
      },
      zs = { endCallback: null, leftCallback: null, rightCallback: null },
      Us = {
        endCallback: "(function|null)",
        leftCallback: "(function|null)",
        rightCallback: "(function|null)",
      };
    class Ge extends He {
      constructor(e, t) {
        super(),
          (this._element = e),
          e &&
            Ge.isSupported() &&
            ((this._config = this._getConfig(t)),
            (this._deltaX = 0),
            (this._supportPointerEvents = Boolean(window.PointerEvent)),
            this._initEvents());
      }
      static get Default() {
        return zs;
      }
      static get DefaultType() {
        return Us;
      }
      static get NAME() {
        return "swipe";
      }
      dispose() {
        l.off(this._element, ".bs.swipe");
      }
      _start(e) {
        this._supportPointerEvents
          ? this._eventIsPointerPenTouch(e) && (this._deltaX = e.clientX)
          : (this._deltaX = e.touches[0].clientX);
      }
      _end(e) {
        this._eventIsPointerPenTouch(e) &&
          (this._deltaX = e.clientX - this._deltaX),
          this._handleSwipe(),
          ae(this._config.endCallback);
      }
      _move(e) {
        this._deltaX =
          e.touches && e.touches.length > 1
            ? 0
            : e.touches[0].clientX - this._deltaX;
      }
      _handleSwipe() {
        const e = Math.abs(this._deltaX);
        if (e <= 40) return;
        const t = e / this._deltaX;
        (this._deltaX = 0),
          t &&
            ae(t > 0 ? this._config.rightCallback : this._config.leftCallback);
      }
      _initEvents() {
        this._supportPointerEvents
          ? (l.on(this._element, "pointerdown.bs.swipe", (e) => this._start(e)),
            l.on(this._element, "pointerup.bs.swipe", (e) => this._end(e)),
            this._element.classList.add("pointer-event"))
          : (l.on(this._element, "touchstart.bs.swipe", (e) => this._start(e)),
            l.on(this._element, "touchmove.bs.swipe", (e) => this._move(e)),
            l.on(this._element, "touchend.bs.swipe", (e) => this._end(e)));
      }
      _eventIsPointerPenTouch(e) {
        return (
          this._supportPointerEvents &&
          (e.pointerType === "pen" || e.pointerType === "touch")
        );
      }
      static isSupported() {
        return (
          "ontouchstart" in document.documentElement ||
          navigator.maxTouchPoints > 0
        );
      }
    }
    const Re = "next",
      Te = "prev",
      Ce = "left",
      Je = "right",
      Ct = "slid.bs.carousel",
      hi = "carousel",
      Ze = "active",
      Vs = { ArrowLeft: Je, ArrowRight: Ce },
      Ks = {
        interval: 5e3,
        keyboard: !0,
        pause: "hover",
        ride: !1,
        touch: !0,
        wrap: !0,
      },
      Xs = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        pause: "(string|boolean)",
        ride: "(boolean|string)",
        touch: "boolean",
        wrap: "boolean",
      };
    class Oe extends J {
      constructor(e, t) {
        super(e, t),
          (this._interval = null),
          (this._activeElement = null),
          (this._isSliding = !1),
          (this.touchTimeout = null),
          (this._swipeHelper = null),
          (this._indicatorsElement = b.findOne(
            ".carousel-indicators",
            this._element
          )),
          this._addEventListeners(),
          this._config.ride === hi && this.cycle();
      }
      static get Default() {
        return Ks;
      }
      static get DefaultType() {
        return Xs;
      }
      static get NAME() {
        return "carousel";
      }
      next() {
        this._slide(Re);
      }
      nextWhenVisible() {
        !document.hidden && Ee(this._element) && this.next();
      }
      prev() {
        this._slide(Te);
      }
      pause() {
        this._isSliding && oe(this._element), this._clearInterval();
      }
      cycle() {
        this._clearInterval(),
          this._updateInterval(),
          (this._interval = setInterval(
            () => this.nextWhenVisible(),
            this._config.interval
          ));
      }
      _maybeEnableCycle() {
        this._config.ride &&
          (this._isSliding
            ? l.one(this._element, Ct, () => this.cycle())
            : this.cycle());
      }
      to(e) {
        const t = this._getItems();
        if (e > t.length - 1 || e < 0) return;
        if (this._isSliding)
          return void l.one(this._element, Ct, () => this.to(e));
        const s = this._getItemIndex(this._getActive());
        if (s === e) return;
        const n = e > s ? Re : Te;
        this._slide(n, t[e]);
      }
      dispose() {
        this._swipeHelper && this._swipeHelper.dispose(), super.dispose();
      }
      _configAfterMerge(e) {
        return (e.defaultInterval = e.interval), e;
      }
      _addEventListeners() {
        this._config.keyboard &&
          l.on(this._element, "keydown.bs.carousel", (e) => this._keydown(e)),
          this._config.pause === "hover" &&
            (l.on(this._element, "mouseenter.bs.carousel", () => this.pause()),
            l.on(this._element, "mouseleave.bs.carousel", () =>
              this._maybeEnableCycle()
            )),
          this._config.touch &&
            Ge.isSupported() &&
            this._addTouchEventListeners();
      }
      _addTouchEventListeners() {
        for (const t of b.find(".carousel-item img", this._element))
          l.on(t, "dragstart.bs.carousel", (s) => s.preventDefault());
        const e = {
          leftCallback: () => this._slide(this._directionToOrder(Ce)),
          rightCallback: () => this._slide(this._directionToOrder(Je)),
          endCallback: () => {
            this._config.pause === "hover" &&
              (this.pause(),
              this.touchTimeout && clearTimeout(this.touchTimeout),
              (this.touchTimeout = setTimeout(
                () => this._maybeEnableCycle(),
                500 + this._config.interval
              )));
          },
        };
        this._swipeHelper = new Ge(this._element, e);
      }
      _keydown(e) {
        if (/input|textarea/i.test(e.target.tagName)) return;
        const t = Vs[e.key];
        t && (e.preventDefault(), this._slide(this._directionToOrder(t)));
      }
      _getItemIndex(e) {
        return this._getItems().indexOf(e);
      }
      _setActiveIndicatorElement(e) {
        if (!this._indicatorsElement) return;
        const t = b.findOne(".active", this._indicatorsElement);
        t.classList.remove(Ze), t.removeAttribute("aria-current");
        const s = b.findOne(
          `[data-bs-slide-to="${e}"]`,
          this._indicatorsElement
        );
        s && (s.classList.add(Ze), s.setAttribute("aria-current", "true"));
      }
      _updateInterval() {
        const e = this._activeElement || this._getActive();
        if (!e) return;
        const t = Number.parseInt(e.getAttribute("data-bs-interval"), 10);
        this._config.interval = t || this._config.defaultInterval;
      }
      _slide(e, t = null) {
        if (this._isSliding) return;
        const s = this._getActive(),
          n = e === Re,
          o = t || yt(this._getItems(), s, n, this._config.wrap);
        if (o === s) return;
        const r = this._getItemIndex(o),
          a = (d) =>
            l.trigger(this._element, d, {
              relatedTarget: o,
              direction: this._orderToDirection(e),
              from: this._getItemIndex(s),
              to: r,
            });
        if (a("slide.bs.carousel").defaultPrevented || !s || !o) return;
        const c = Boolean(this._interval);
        this.pause(),
          (this._isSliding = !0),
          this._setActiveIndicatorElement(r),
          (this._activeElement = o);
        const u = n ? "carousel-item-start" : "carousel-item-end",
          h = n ? "carousel-item-next" : "carousel-item-prev";
        o.classList.add(h),
          $e(o),
          s.classList.add(u),
          o.classList.add(u),
          this._queueCallback(
            () => {
              o.classList.remove(u, h),
                o.classList.add(Ze),
                s.classList.remove(Ze, h, u),
                (this._isSliding = !1),
                a(Ct);
            },
            s,
            this._isAnimated()
          ),
          c && this.cycle();
      }
      _isAnimated() {
        return this._element.classList.contains("slide");
      }
      _getActive() {
        return b.findOne(".active.carousel-item", this._element);
      }
      _getItems() {
        return b.find(".carousel-item", this._element);
      }
      _clearInterval() {
        this._interval &&
          (clearInterval(this._interval), (this._interval = null));
      }
      _directionToOrder(e) {
        return V() ? (e === Ce ? Te : Re) : e === Ce ? Re : Te;
      }
      _orderToDirection(e) {
        return V() ? (e === Te ? Ce : Je) : e === Te ? Je : Ce;
      }
      static jQueryInterface(e) {
        return this.each(function () {
          const t = Oe.getOrCreateInstance(this, e);
          if (typeof e != "number") {
            if (typeof e == "string") {
              if (t[e] === void 0 || e.startsWith("_") || e === "constructor")
                throw new TypeError(`No method named "${e}"`);
              t[e]();
            }
          } else t.to(e);
        });
      }
    }
    l.on(
      document,
      "click.bs.carousel.data-api",
      "[data-bs-slide], [data-bs-slide-to]",
      function (i) {
        const e = E(this);
        if (!e || !e.classList.contains(hi)) return;
        i.preventDefault();
        const t = Oe.getOrCreateInstance(e),
          s = this.getAttribute("data-bs-slide-to");
        return s
          ? (t.to(s), void t._maybeEnableCycle())
          : le.getDataAttribute(this, "slide") === "next"
          ? (t.next(), void t._maybeEnableCycle())
          : (t.prev(), void t._maybeEnableCycle());
      }
    ),
      l.on(window, "load.bs.carousel.data-api", () => {
        const i = b.find('[data-bs-ride="carousel"]');
        for (const e of i) Oe.getOrCreateInstance(e);
      }),
      K(Oe);
    const Ot = "show",
      et = "collapse",
      tt = "collapsing",
      kt = '[data-bs-toggle="collapse"]',
      Ys = { parent: null, toggle: !0 },
      Qs = { parent: "(null|element)", toggle: "boolean" };
    class ke extends J {
      constructor(e, t) {
        super(e, t), (this._isTransitioning = !1), (this._triggerArray = []);
        const s = b.find(kt);
        for (const n of s) {
          const o = I(n),
            r = b.find(o).filter((a) => a === this._element);
          o !== null && r.length && this._triggerArray.push(n);
        }
        this._initializeChildren(),
          this._config.parent ||
            this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()),
          this._config.toggle && this.toggle();
      }
      static get Default() {
        return Ys;
      }
      static get DefaultType() {
        return Qs;
      }
      static get NAME() {
        return "collapse";
      }
      toggle() {
        this._isShown() ? this.hide() : this.show();
      }
      show() {
        if (this._isTransitioning || this._isShown()) return;
        let e = [];
        if (
          (this._config.parent &&
            (e = this._getFirstLevelChildren(
              ".collapse.show, .collapse.collapsing"
            )
              .filter((n) => n !== this._element)
              .map((n) => ke.getOrCreateInstance(n, { toggle: !1 }))),
          (e.length && e[0]._isTransitioning) ||
            l.trigger(this._element, "show.bs.collapse").defaultPrevented)
        )
          return;
        for (const n of e) n.hide();
        const t = this._getDimension();
        this._element.classList.remove(et),
          this._element.classList.add(tt),
          (this._element.style[t] = 0),
          this._addAriaAndCollapsedClass(this._triggerArray, !0),
          (this._isTransitioning = !0);
        const s = `scroll${t[0].toUpperCase() + t.slice(1)}`;
        this._queueCallback(
          () => {
            (this._isTransitioning = !1),
              this._element.classList.remove(tt),
              this._element.classList.add(et, Ot),
              (this._element.style[t] = ""),
              l.trigger(this._element, "shown.bs.collapse");
          },
          this._element,
          !0
        ),
          (this._element.style[t] = `${this._element[s]}px`);
      }
      hide() {
        if (
          this._isTransitioning ||
          !this._isShown() ||
          l.trigger(this._element, "hide.bs.collapse").defaultPrevented
        )
          return;
        const e = this._getDimension();
        (this._element.style[e] = `${
          this._element.getBoundingClientRect()[e]
        }px`),
          $e(this._element),
          this._element.classList.add(tt),
          this._element.classList.remove(et, Ot);
        for (const t of this._triggerArray) {
          const s = E(t);
          s && !this._isShown(s) && this._addAriaAndCollapsedClass([t], !1);
        }
        (this._isTransitioning = !0),
          (this._element.style[e] = ""),
          this._queueCallback(
            () => {
              (this._isTransitioning = !1),
                this._element.classList.remove(tt),
                this._element.classList.add(et),
                l.trigger(this._element, "hidden.bs.collapse");
            },
            this._element,
            !0
          );
      }
      _isShown(e = this._element) {
        return e.classList.contains(Ot);
      }
      _configAfterMerge(e) {
        return (e.toggle = Boolean(e.toggle)), (e.parent = ue(e.parent)), e;
      }
      _getDimension() {
        return this._element.classList.contains("collapse-horizontal")
          ? "width"
          : "height";
      }
      _initializeChildren() {
        if (!this._config.parent) return;
        const e = this._getFirstLevelChildren(kt);
        for (const t of e) {
          const s = E(t);
          s && this._addAriaAndCollapsedClass([t], this._isShown(s));
        }
      }
      _getFirstLevelChildren(e) {
        const t = b.find(":scope .collapse .collapse", this._config.parent);
        return b.find(e, this._config.parent).filter((s) => !t.includes(s));
      }
      _addAriaAndCollapsedClass(e, t) {
        if (e.length)
          for (const s of e)
            s.classList.toggle("collapsed", !t),
              s.setAttribute("aria-expanded", t);
      }
      static jQueryInterface(e) {
        const t = {};
        return (
          typeof e == "string" && /show|hide/.test(e) && (t.toggle = !1),
          this.each(function () {
            const s = ke.getOrCreateInstance(this, t);
            if (typeof e == "string") {
              if (s[e] === void 0)
                throw new TypeError(`No method named "${e}"`);
              s[e]();
            }
          })
        );
      }
    }
    l.on(document, "click.bs.collapse.data-api", kt, function (i) {
      (i.target.tagName === "A" ||
        (i.delegateTarget && i.delegateTarget.tagName === "A")) &&
        i.preventDefault();
      const e = I(this),
        t = b.find(e);
      for (const s of t) ke.getOrCreateInstance(s, { toggle: !1 }).toggle();
    }),
      K(ke);
    var H = "top",
      q = "bottom",
      z = "right",
      B = "left",
      it = "auto",
      Le = [H, q, z, B],
      ge = "start",
      De = "end",
      fi = "clippingParents",
      Lt = "viewport",
      Ie = "popper",
      pi = "reference",
      Dt = Le.reduce(function (i, e) {
        return i.concat([e + "-" + ge, e + "-" + De]);
      }, []),
      It = [].concat(Le, [it]).reduce(function (i, e) {
        return i.concat([e, e + "-" + ge, e + "-" + De]);
      }, []),
      mi = "beforeRead",
      gi = "read",
      _i = "afterRead",
      bi = "beforeMain",
      vi = "main",
      yi = "afterMain",
      wi = "beforeWrite",
      Ai = "write",
      xi = "afterWrite",
      Ei = [mi, gi, _i, bi, vi, yi, wi, Ai, xi];
    function te(i) {
      return i ? (i.nodeName || "").toLowerCase() : null;
    }
    function X(i) {
      if (i == null) return window;
      if (i.toString() !== "[object Window]") {
        var e = i.ownerDocument;
        return (e && e.defaultView) || window;
      }
      return i;
    }
    function _e(i) {
      return i instanceof X(i).Element || i instanceof Element;
    }
    function Y(i) {
      return i instanceof X(i).HTMLElement || i instanceof HTMLElement;
    }
    function St(i) {
      return (
        typeof ShadowRoot < "u" &&
        (i instanceof X(i).ShadowRoot || i instanceof ShadowRoot)
      );
    }
    const Pt = {
      name: "applyStyles",
      enabled: !0,
      phase: "write",
      fn: function (i) {
        var e = i.state;
        Object.keys(e.elements).forEach(function (t) {
          var s = e.styles[t] || {},
            n = e.attributes[t] || {},
            o = e.elements[t];
          Y(o) &&
            te(o) &&
            (Object.assign(o.style, s),
            Object.keys(n).forEach(function (r) {
              var a = n[r];
              a === !1
                ? o.removeAttribute(r)
                : o.setAttribute(r, a === !0 ? "" : a);
            }));
        });
      },
      effect: function (i) {
        var e = i.state,
          t = {
            popper: {
              position: e.options.strategy,
              left: "0",
              top: "0",
              margin: "0",
            },
            arrow: { position: "absolute" },
            reference: {},
          };
        return (
          Object.assign(e.elements.popper.style, t.popper),
          (e.styles = t),
          e.elements.arrow && Object.assign(e.elements.arrow.style, t.arrow),
          function () {
            Object.keys(e.elements).forEach(function (s) {
              var n = e.elements[s],
                o = e.attributes[s] || {},
                r = Object.keys(
                  e.styles.hasOwnProperty(s) ? e.styles[s] : t[s]
                ).reduce(function (a, c) {
                  return (a[c] = ""), a;
                }, {});
              Y(n) &&
                te(n) &&
                (Object.assign(n.style, r),
                Object.keys(o).forEach(function (a) {
                  n.removeAttribute(a);
                }));
            });
          }
        );
      },
      requires: ["computeStyles"],
    };
    function ie(i) {
      return i.split("-")[0];
    }
    var be = Math.max,
      st = Math.min,
      Se = Math.round;
    function Nt() {
      var i = navigator.userAgentData;
      return i != null && i.brands
        ? i.brands
            .map(function (e) {
              return e.brand + "/" + e.version;
            })
            .join(" ")
        : navigator.userAgent;
    }
    function Ti() {
      return !/^((?!chrome|android).)*safari/i.test(Nt());
    }
    function Pe(i, e, t) {
      e === void 0 && (e = !1), t === void 0 && (t = !1);
      var s = i.getBoundingClientRect(),
        n = 1,
        o = 1;
      e &&
        Y(i) &&
        ((n = (i.offsetWidth > 0 && Se(s.width) / i.offsetWidth) || 1),
        (o = (i.offsetHeight > 0 && Se(s.height) / i.offsetHeight) || 1));
      var r = (_e(i) ? X(i) : window).visualViewport,
        a = !Ti() && t,
        c = (s.left + (a && r ? r.offsetLeft : 0)) / n,
        u = (s.top + (a && r ? r.offsetTop : 0)) / o,
        h = s.width / n,
        d = s.height / o;
      return {
        width: h,
        height: d,
        top: u,
        right: c + h,
        bottom: u + d,
        left: c,
        x: c,
        y: u,
      };
    }
    function jt(i) {
      var e = Pe(i),
        t = i.offsetWidth,
        s = i.offsetHeight;
      return (
        Math.abs(e.width - t) <= 1 && (t = e.width),
        Math.abs(e.height - s) <= 1 && (s = e.height),
        { x: i.offsetLeft, y: i.offsetTop, width: t, height: s }
      );
    }
    function Ci(i, e) {
      var t = e.getRootNode && e.getRootNode();
      if (i.contains(e)) return !0;
      if (t && St(t)) {
        var s = e;
        do {
          if (s && i.isSameNode(s)) return !0;
          s = s.parentNode || s.host;
        } while (s);
      }
      return !1;
    }
    function ce(i) {
      return X(i).getComputedStyle(i);
    }
    function Gs(i) {
      return ["table", "td", "th"].indexOf(te(i)) >= 0;
    }
    function pe(i) {
      return (
        (_e(i) ? i.ownerDocument : i.document) || window.document
      ).documentElement;
    }
    function nt(i) {
      return te(i) === "html"
        ? i
        : i.assignedSlot || i.parentNode || (St(i) ? i.host : null) || pe(i);
    }
    function Oi(i) {
      return Y(i) && ce(i).position !== "fixed" ? i.offsetParent : null;
    }
    function We(i) {
      for (var e = X(i), t = Oi(i); t && Gs(t) && ce(t).position === "static"; )
        t = Oi(t);
      return t &&
        (te(t) === "html" || (te(t) === "body" && ce(t).position === "static"))
        ? e
        : t ||
            (function (s) {
              var n = /firefox/i.test(Nt());
              if (/Trident/i.test(Nt()) && Y(s) && ce(s).position === "fixed")
                return null;
              var o = nt(s);
              for (
                St(o) && (o = o.host);
                Y(o) && ["html", "body"].indexOf(te(o)) < 0;

              ) {
                var r = ce(o);
                if (
                  r.transform !== "none" ||
                  r.perspective !== "none" ||
                  r.contain === "paint" ||
                  ["transform", "perspective"].indexOf(r.willChange) !== -1 ||
                  (n && r.willChange === "filter") ||
                  (n && r.filter && r.filter !== "none")
                )
                  return o;
                o = o.parentNode;
              }
              return null;
            })(i) ||
            e;
    }
    function Mt(i) {
      return ["top", "bottom"].indexOf(i) >= 0 ? "x" : "y";
    }
    function qe(i, e, t) {
      return be(i, st(e, t));
    }
    function ki(i) {
      return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, i);
    }
    function Li(i, e) {
      return e.reduce(function (t, s) {
        return (t[s] = i), t;
      }, {});
    }
    const Di = {
      name: "arrow",
      enabled: !0,
      phase: "main",
      fn: function (i) {
        var e,
          t = i.state,
          s = i.name,
          n = i.options,
          o = t.elements.arrow,
          r = t.modifiersData.popperOffsets,
          a = ie(t.placement),
          c = Mt(a),
          u = [B, z].indexOf(a) >= 0 ? "height" : "width";
        if (o && r) {
          var h = (function (k, C) {
              return ki(
                typeof (k =
                  typeof k == "function"
                    ? k(Object.assign({}, C.rects, { placement: C.placement }))
                    : k) != "number"
                  ? k
                  : Li(k, Le)
              );
            })(n.padding, t),
            d = jt(o),
            v = c === "y" ? H : B,
            f = c === "y" ? q : z,
            m =
              t.rects.reference[u] +
              t.rects.reference[c] -
              r[c] -
              t.rects.popper[u],
            p = r[c] - t.rects.reference[c],
            g = We(o),
            O = g ? (c === "y" ? g.clientHeight || 0 : g.clientWidth || 0) : 0,
            D = m / 2 - p / 2,
            w = h[v],
            x = O - d[u] - h[f],
            y = O / 2 - d[u] / 2 + D,
            A = qe(w, y, x),
            T = c;
          t.modifiersData[s] = (((e = {})[T] = A), (e.centerOffset = A - y), e);
        }
      },
      effect: function (i) {
        var e = i.state,
          t = i.options.element,
          s = t === void 0 ? "[data-popper-arrow]" : t;
        s != null &&
          (typeof s != "string" || (s = e.elements.popper.querySelector(s))) &&
          Ci(e.elements.popper, s) &&
          (e.elements.arrow = s);
      },
      requires: ["popperOffsets"],
      requiresIfExists: ["preventOverflow"],
    };
    function Ne(i) {
      return i.split("-")[1];
    }
    var Js = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
    function Ii(i) {
      var e,
        t = i.popper,
        s = i.popperRect,
        n = i.placement,
        o = i.variation,
        r = i.offsets,
        a = i.position,
        c = i.gpuAcceleration,
        u = i.adaptive,
        h = i.roundOffsets,
        d = i.isFixed,
        v = r.x,
        f = v === void 0 ? 0 : v,
        m = r.y,
        p = m === void 0 ? 0 : m,
        g = typeof h == "function" ? h({ x: f, y: p }) : { x: f, y: p };
      (f = g.x), (p = g.y);
      var O = r.hasOwnProperty("x"),
        D = r.hasOwnProperty("y"),
        w = B,
        x = H,
        y = window;
      if (u) {
        var A = We(t),
          T = "clientHeight",
          k = "clientWidth";
        A === X(t) &&
          ce((A = pe(t))).position !== "static" &&
          a === "absolute" &&
          ((T = "scrollHeight"), (k = "scrollWidth")),
          (n === H || ((n === B || n === z) && o === De)) &&
            ((x = q),
            (p -=
              (d && A === y && y.visualViewport
                ? y.visualViewport.height
                : A[T]) - s.height),
            (p *= c ? 1 : -1)),
          (n !== B && ((n !== H && n !== q) || o !== De)) ||
            ((w = z),
            (f -=
              (d && A === y && y.visualViewport
                ? y.visualViewport.width
                : A[k]) - s.width),
            (f *= c ? 1 : -1));
      }
      var C,
        S = Object.assign({ position: a }, u && Js),
        U =
          h === !0
            ? (function (ee) {
                var F = ee.x,
                  Q = ee.y,
                  R = window.devicePixelRatio || 1;
                return { x: Se(F * R) / R || 0, y: Se(Q * R) / R || 0 };
              })({ x: f, y: p })
            : { x: f, y: p };
      return (
        (f = U.x),
        (p = U.y),
        c
          ? Object.assign(
              {},
              S,
              (((C = {})[x] = D ? "0" : ""),
              (C[w] = O ? "0" : ""),
              (C.transform =
                (y.devicePixelRatio || 1) <= 1
                  ? "translate(" + f + "px, " + p + "px)"
                  : "translate3d(" + f + "px, " + p + "px, 0)"),
              C)
            )
          : Object.assign(
              {},
              S,
              (((e = {})[x] = D ? p + "px" : ""),
              (e[w] = O ? f + "px" : ""),
              (e.transform = ""),
              e)
            )
      );
    }
    const $t = {
      name: "computeStyles",
      enabled: !0,
      phase: "beforeWrite",
      fn: function (i) {
        var e = i.state,
          t = i.options,
          s = t.gpuAcceleration,
          n = s === void 0 || s,
          o = t.adaptive,
          r = o === void 0 || o,
          a = t.roundOffsets,
          c = a === void 0 || a,
          u = {
            placement: ie(e.placement),
            variation: Ne(e.placement),
            popper: e.elements.popper,
            popperRect: e.rects.popper,
            gpuAcceleration: n,
            isFixed: e.options.strategy === "fixed",
          };
        e.modifiersData.popperOffsets != null &&
          (e.styles.popper = Object.assign(
            {},
            e.styles.popper,
            Ii(
              Object.assign({}, u, {
                offsets: e.modifiersData.popperOffsets,
                position: e.options.strategy,
                adaptive: r,
                roundOffsets: c,
              })
            )
          )),
          e.modifiersData.arrow != null &&
            (e.styles.arrow = Object.assign(
              {},
              e.styles.arrow,
              Ii(
                Object.assign({}, u, {
                  offsets: e.modifiersData.arrow,
                  position: "absolute",
                  adaptive: !1,
                  roundOffsets: c,
                })
              )
            )),
          (e.attributes.popper = Object.assign({}, e.attributes.popper, {
            "data-popper-placement": e.placement,
          }));
      },
      data: {},
    };
    var ot = { passive: !0 };
    const Ht = {
      name: "eventListeners",
      enabled: !0,
      phase: "write",
      fn: function () {},
      effect: function (i) {
        var e = i.state,
          t = i.instance,
          s = i.options,
          n = s.scroll,
          o = n === void 0 || n,
          r = s.resize,
          a = r === void 0 || r,
          c = X(e.elements.popper),
          u = [].concat(e.scrollParents.reference, e.scrollParents.popper);
        return (
          o &&
            u.forEach(function (h) {
              h.addEventListener("scroll", t.update, ot);
            }),
          a && c.addEventListener("resize", t.update, ot),
          function () {
            o &&
              u.forEach(function (h) {
                h.removeEventListener("scroll", t.update, ot);
              }),
              a && c.removeEventListener("resize", t.update, ot);
          }
        );
      },
      data: {},
    };
    var Zs = { left: "right", right: "left", bottom: "top", top: "bottom" };
    function rt(i) {
      return i.replace(/left|right|bottom|top/g, function (e) {
        return Zs[e];
      });
    }
    var en = { start: "end", end: "start" };
    function Si(i) {
      return i.replace(/start|end/g, function (e) {
        return en[e];
      });
    }
    function Bt(i) {
      var e = X(i);
      return { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
    }
    function Ft(i) {
      return Pe(pe(i)).left + Bt(i).scrollLeft;
    }
    function Rt(i) {
      var e = ce(i),
        t = e.overflow,
        s = e.overflowX,
        n = e.overflowY;
      return /auto|scroll|overlay|hidden/.test(t + n + s);
    }
    function Pi(i) {
      return ["html", "body", "#document"].indexOf(te(i)) >= 0
        ? i.ownerDocument.body
        : Y(i) && Rt(i)
        ? i
        : Pi(nt(i));
    }
    function ze(i, e) {
      var t;
      e === void 0 && (e = []);
      var s = Pi(i),
        n = s === ((t = i.ownerDocument) == null ? void 0 : t.body),
        o = X(s),
        r = n ? [o].concat(o.visualViewport || [], Rt(s) ? s : []) : s,
        a = e.concat(r);
      return n ? a : a.concat(ze(nt(r)));
    }
    function Wt(i) {
      return Object.assign({}, i, {
        left: i.x,
        top: i.y,
        right: i.x + i.width,
        bottom: i.y + i.height,
      });
    }
    function Ni(i, e, t) {
      return e === Lt
        ? Wt(
            (function (s, n) {
              var o = X(s),
                r = pe(s),
                a = o.visualViewport,
                c = r.clientWidth,
                u = r.clientHeight,
                h = 0,
                d = 0;
              if (a) {
                (c = a.width), (u = a.height);
                var v = Ti();
                (v || (!v && n === "fixed")) &&
                  ((h = a.offsetLeft), (d = a.offsetTop));
              }
              return { width: c, height: u, x: h + Ft(s), y: d };
            })(i, t)
          )
        : _e(e)
        ? (function (s, n) {
            var o = Pe(s, !1, n === "fixed");
            return (
              (o.top = o.top + s.clientTop),
              (o.left = o.left + s.clientLeft),
              (o.bottom = o.top + s.clientHeight),
              (o.right = o.left + s.clientWidth),
              (o.width = s.clientWidth),
              (o.height = s.clientHeight),
              (o.x = o.left),
              (o.y = o.top),
              o
            );
          })(e, t)
        : Wt(
            (function (s) {
              var n,
                o = pe(s),
                r = Bt(s),
                a = (n = s.ownerDocument) == null ? void 0 : n.body,
                c = be(
                  o.scrollWidth,
                  o.clientWidth,
                  a ? a.scrollWidth : 0,
                  a ? a.clientWidth : 0
                ),
                u = be(
                  o.scrollHeight,
                  o.clientHeight,
                  a ? a.scrollHeight : 0,
                  a ? a.clientHeight : 0
                ),
                h = -r.scrollLeft + Ft(s),
                d = -r.scrollTop;
              return (
                ce(a || o).direction === "rtl" &&
                  (h += be(o.clientWidth, a ? a.clientWidth : 0) - c),
                { width: c, height: u, x: h, y: d }
              );
            })(pe(i))
          );
    }
    function ji(i) {
      var e,
        t = i.reference,
        s = i.element,
        n = i.placement,
        o = n ? ie(n) : null,
        r = n ? Ne(n) : null,
        a = t.x + t.width / 2 - s.width / 2,
        c = t.y + t.height / 2 - s.height / 2;
      switch (o) {
        case H:
          e = { x: a, y: t.y - s.height };
          break;
        case q:
          e = { x: a, y: t.y + t.height };
          break;
        case z:
          e = { x: t.x + t.width, y: c };
          break;
        case B:
          e = { x: t.x - s.width, y: c };
          break;
        default:
          e = { x: t.x, y: t.y };
      }
      var u = o ? Mt(o) : null;
      if (u != null) {
        var h = u === "y" ? "height" : "width";
        switch (r) {
          case ge:
            e[u] = e[u] - (t[h] / 2 - s[h] / 2);
            break;
          case De:
            e[u] = e[u] + (t[h] / 2 - s[h] / 2);
        }
      }
      return e;
    }
    function je(i, e) {
      e === void 0 && (e = {});
      var t = e,
        s = t.placement,
        n = s === void 0 ? i.placement : s,
        o = t.strategy,
        r = o === void 0 ? i.strategy : o,
        a = t.boundary,
        c = a === void 0 ? fi : a,
        u = t.rootBoundary,
        h = u === void 0 ? Lt : u,
        d = t.elementContext,
        v = d === void 0 ? Ie : d,
        f = t.altBoundary,
        m = f !== void 0 && f,
        p = t.padding,
        g = p === void 0 ? 0 : p,
        O = ki(typeof g != "number" ? g : Li(g, Le)),
        D = v === Ie ? pi : Ie,
        w = i.rects.popper,
        x = i.elements[m ? D : v],
        y = (function (F, Q, R, M) {
          var se =
              Q === "clippingParents"
                ? (function (L) {
                    var W = ze(nt(L)),
                      G =
                        ["absolute", "fixed"].indexOf(ce(L).position) >= 0 &&
                        Y(L)
                          ? We(L)
                          : L;
                    return _e(G)
                      ? W.filter(function (me) {
                          return _e(me) && Ci(me, G) && te(me) !== "body";
                        })
                      : [];
                  })(F)
                : [].concat(Q),
            ne = [].concat(se, [R]),
            Me = ne[0],
            P = ne.reduce(function (L, W) {
              var G = Ni(F, W, M);
              return (
                (L.top = be(G.top, L.top)),
                (L.right = st(G.right, L.right)),
                (L.bottom = st(G.bottom, L.bottom)),
                (L.left = be(G.left, L.left)),
                L
              );
            }, Ni(F, Me, M));
          return (
            (P.width = P.right - P.left),
            (P.height = P.bottom - P.top),
            (P.x = P.left),
            (P.y = P.top),
            P
          );
        })(_e(x) ? x : x.contextElement || pe(i.elements.popper), c, h, r),
        A = Pe(i.elements.reference),
        T = ji({
          reference: A,
          element: w,
          strategy: "absolute",
          placement: n,
        }),
        k = Wt(Object.assign({}, w, T)),
        C = v === Ie ? k : A,
        S = {
          top: y.top - C.top + O.top,
          bottom: C.bottom - y.bottom + O.bottom,
          left: y.left - C.left + O.left,
          right: C.right - y.right + O.right,
        },
        U = i.modifiersData.offset;
      if (v === Ie && U) {
        var ee = U[n];
        Object.keys(S).forEach(function (F) {
          var Q = [z, q].indexOf(F) >= 0 ? 1 : -1,
            R = [H, q].indexOf(F) >= 0 ? "y" : "x";
          S[F] += ee[R] * Q;
        });
      }
      return S;
    }
    function tn(i, e) {
      e === void 0 && (e = {});
      var t = e,
        s = t.placement,
        n = t.boundary,
        o = t.rootBoundary,
        r = t.padding,
        a = t.flipVariations,
        c = t.allowedAutoPlacements,
        u = c === void 0 ? It : c,
        h = Ne(s),
        d = h
          ? a
            ? Dt
            : Dt.filter(function (m) {
                return Ne(m) === h;
              })
          : Le,
        v = d.filter(function (m) {
          return u.indexOf(m) >= 0;
        });
      v.length === 0 && (v = d);
      var f = v.reduce(function (m, p) {
        return (
          (m[p] = je(i, {
            placement: p,
            boundary: n,
            rootBoundary: o,
            padding: r,
          })[ie(p)]),
          m
        );
      }, {});
      return Object.keys(f).sort(function (m, p) {
        return f[m] - f[p];
      });
    }
    const Mi = {
      name: "flip",
      enabled: !0,
      phase: "main",
      fn: function (i) {
        var e = i.state,
          t = i.options,
          s = i.name;
        if (!e.modifiersData[s]._skip) {
          for (
            var n = t.mainAxis,
              o = n === void 0 || n,
              r = t.altAxis,
              a = r === void 0 || r,
              c = t.fallbackPlacements,
              u = t.padding,
              h = t.boundary,
              d = t.rootBoundary,
              v = t.altBoundary,
              f = t.flipVariations,
              m = f === void 0 || f,
              p = t.allowedAutoPlacements,
              g = e.options.placement,
              O = ie(g),
              D =
                c ||
                (O !== g && m
                  ? (function (L) {
                      if (ie(L) === it) return [];
                      var W = rt(L);
                      return [Si(L), W, Si(W)];
                    })(g)
                  : [rt(g)]),
              w = [g].concat(D).reduce(function (L, W) {
                return L.concat(
                  ie(W) === it
                    ? tn(e, {
                        placement: W,
                        boundary: h,
                        rootBoundary: d,
                        padding: u,
                        flipVariations: m,
                        allowedAutoPlacements: p,
                      })
                    : W
                );
              }, []),
              x = e.rects.reference,
              y = e.rects.popper,
              A = new Map(),
              T = !0,
              k = w[0],
              C = 0;
            C < w.length;
            C++
          ) {
            var S = w[C],
              U = ie(S),
              ee = Ne(S) === ge,
              F = [H, q].indexOf(U) >= 0,
              Q = F ? "width" : "height",
              R = je(e, {
                placement: S,
                boundary: h,
                rootBoundary: d,
                altBoundary: v,
                padding: u,
              }),
              M = F ? (ee ? z : B) : ee ? q : H;
            x[Q] > y[Q] && (M = rt(M));
            var se = rt(M),
              ne = [];
            if (
              (o && ne.push(R[U] <= 0),
              a && ne.push(R[M] <= 0, R[se] <= 0),
              ne.every(function (L) {
                return L;
              }))
            ) {
              (k = S), (T = !1);
              break;
            }
            A.set(S, ne);
          }
          if (T)
            for (
              var Me = function (L) {
                  var W = w.find(function (G) {
                    var me = A.get(G);
                    if (me)
                      return me.slice(0, L).every(function (gt) {
                        return gt;
                      });
                  });
                  if (W) return (k = W), "break";
                },
                P = m ? 3 : 1;
              P > 0 && Me(P) !== "break";
              P--
            );
          e.placement !== k &&
            ((e.modifiersData[s]._skip = !0),
            (e.placement = k),
            (e.reset = !0));
        }
      },
      requiresIfExists: ["offset"],
      data: { _skip: !1 },
    };
    function $i(i, e, t) {
      return (
        t === void 0 && (t = { x: 0, y: 0 }),
        {
          top: i.top - e.height - t.y,
          right: i.right - e.width + t.x,
          bottom: i.bottom - e.height + t.y,
          left: i.left - e.width - t.x,
        }
      );
    }
    function Hi(i) {
      return [H, z, q, B].some(function (e) {
        return i[e] >= 0;
      });
    }
    const Bi = {
        name: "hide",
        enabled: !0,
        phase: "main",
        requiresIfExists: ["preventOverflow"],
        fn: function (i) {
          var e = i.state,
            t = i.name,
            s = e.rects.reference,
            n = e.rects.popper,
            o = e.modifiersData.preventOverflow,
            r = je(e, { elementContext: "reference" }),
            a = je(e, { altBoundary: !0 }),
            c = $i(r, s),
            u = $i(a, n, o),
            h = Hi(c),
            d = Hi(u);
          (e.modifiersData[t] = {
            referenceClippingOffsets: c,
            popperEscapeOffsets: u,
            isReferenceHidden: h,
            hasPopperEscaped: d,
          }),
            (e.attributes.popper = Object.assign({}, e.attributes.popper, {
              "data-popper-reference-hidden": h,
              "data-popper-escaped": d,
            }));
        },
      },
      Fi = {
        name: "offset",
        enabled: !0,
        phase: "main",
        requires: ["popperOffsets"],
        fn: function (i) {
          var e = i.state,
            t = i.options,
            s = i.name,
            n = t.offset,
            o = n === void 0 ? [0, 0] : n,
            r = It.reduce(function (h, d) {
              return (
                (h[d] = (function (v, f, m) {
                  var p = ie(v),
                    g = [B, H].indexOf(p) >= 0 ? -1 : 1,
                    O =
                      typeof m == "function"
                        ? m(Object.assign({}, f, { placement: v }))
                        : m,
                    D = O[0],
                    w = O[1];
                  return (
                    (D = D || 0),
                    (w = (w || 0) * g),
                    [B, z].indexOf(p) >= 0 ? { x: w, y: D } : { x: D, y: w }
                  );
                })(d, e.rects, o)),
                h
              );
            }, {}),
            a = r[e.placement],
            c = a.x,
            u = a.y;
          e.modifiersData.popperOffsets != null &&
            ((e.modifiersData.popperOffsets.x += c),
            (e.modifiersData.popperOffsets.y += u)),
            (e.modifiersData[s] = r);
        },
      },
      qt = {
        name: "popperOffsets",
        enabled: !0,
        phase: "read",
        fn: function (i) {
          var e = i.state,
            t = i.name;
          e.modifiersData[t] = ji({
            reference: e.rects.reference,
            element: e.rects.popper,
            strategy: "absolute",
            placement: e.placement,
          });
        },
        data: {},
      },
      Ri = {
        name: "preventOverflow",
        enabled: !0,
        phase: "main",
        fn: function (i) {
          var e = i.state,
            t = i.options,
            s = i.name,
            n = t.mainAxis,
            o = n === void 0 || n,
            r = t.altAxis,
            a = r !== void 0 && r,
            c = t.boundary,
            u = t.rootBoundary,
            h = t.altBoundary,
            d = t.padding,
            v = t.tether,
            f = v === void 0 || v,
            m = t.tetherOffset,
            p = m === void 0 ? 0 : m,
            g = je(e, {
              boundary: c,
              rootBoundary: u,
              padding: d,
              altBoundary: h,
            }),
            O = ie(e.placement),
            D = Ne(e.placement),
            w = !D,
            x = Mt(O),
            y = x === "x" ? "y" : "x",
            A = e.modifiersData.popperOffsets,
            T = e.rects.reference,
            k = e.rects.popper,
            C =
              typeof p == "function"
                ? p(Object.assign({}, e.rects, { placement: e.placement }))
                : p,
            S =
              typeof C == "number"
                ? { mainAxis: C, altAxis: C }
                : Object.assign({ mainAxis: 0, altAxis: 0 }, C),
            U = e.modifiersData.offset
              ? e.modifiersData.offset[e.placement]
              : null,
            ee = { x: 0, y: 0 };
          if (A) {
            if (o) {
              var F,
                Q = x === "y" ? H : B,
                R = x === "y" ? q : z,
                M = x === "y" ? "height" : "width",
                se = A[x],
                ne = se + g[Q],
                Me = se - g[R],
                P = f ? -k[M] / 2 : 0,
                L = D === ge ? T[M] : k[M],
                W = D === ge ? -k[M] : -T[M],
                G = e.elements.arrow,
                me = f && G ? jt(G) : { width: 0, height: 0 },
                gt = e.modifiersData["arrow#persistent"]
                  ? e.modifiersData["arrow#persistent"].padding
                  : { top: 0, right: 0, bottom: 0, left: 0 },
                Ts = gt[Q],
                Cs = gt[R],
                _t = qe(0, T[M], me[M]),
                Un = w
                  ? T[M] / 2 - P - _t - Ts - S.mainAxis
                  : L - _t - Ts - S.mainAxis,
                Vn = w
                  ? -T[M] / 2 + P + _t + Cs + S.mainAxis
                  : W + _t + Cs + S.mainAxis,
                Qt = e.elements.arrow && We(e.elements.arrow),
                Kn = Qt
                  ? x === "y"
                    ? Qt.clientTop || 0
                    : Qt.clientLeft || 0
                  : 0,
                Os = (F = U == null ? void 0 : U[x]) != null ? F : 0,
                Xn = se + Vn - Os,
                ks = qe(
                  f ? st(ne, se + Un - Os - Kn) : ne,
                  se,
                  f ? be(Me, Xn) : Me
                );
              (A[x] = ks), (ee[x] = ks - se);
            }
            if (a) {
              var Ls,
                Yn = x === "x" ? H : B,
                Qn = x === "x" ? q : z,
                xe = A[y],
                bt = y === "y" ? "height" : "width",
                Ds = xe + g[Yn],
                Is = xe - g[Qn],
                Gt = [H, B].indexOf(O) !== -1,
                Ss = (Ls = U == null ? void 0 : U[y]) != null ? Ls : 0,
                Ps = Gt ? Ds : xe - T[bt] - k[bt] - Ss + S.altAxis,
                Ns = Gt ? xe + T[bt] + k[bt] - Ss - S.altAxis : Is,
                js =
                  f && Gt
                    ? (function (Gn, Jn, Jt) {
                        var Ms = qe(Gn, Jn, Jt);
                        return Ms > Jt ? Jt : Ms;
                      })(Ps, xe, Ns)
                    : qe(f ? Ps : Ds, xe, f ? Ns : Is);
              (A[y] = js), (ee[y] = js - xe);
            }
            e.modifiersData[s] = ee;
          }
        },
        requiresIfExists: ["offset"],
      };
    function sn(i, e, t) {
      t === void 0 && (t = !1);
      var s,
        n,
        o = Y(e),
        r =
          Y(e) &&
          (function (d) {
            var v = d.getBoundingClientRect(),
              f = Se(v.width) / d.offsetWidth || 1,
              m = Se(v.height) / d.offsetHeight || 1;
            return f !== 1 || m !== 1;
          })(e),
        a = pe(e),
        c = Pe(i, r, t),
        u = { scrollLeft: 0, scrollTop: 0 },
        h = { x: 0, y: 0 };
      return (
        (o || (!o && !t)) &&
          ((te(e) !== "body" || Rt(a)) &&
            (u =
              (s = e) !== X(s) && Y(s)
                ? { scrollLeft: (n = s).scrollLeft, scrollTop: n.scrollTop }
                : Bt(s)),
          Y(e)
            ? (((h = Pe(e, !0)).x += e.clientLeft), (h.y += e.clientTop))
            : a && (h.x = Ft(a))),
        {
          x: c.left + u.scrollLeft - h.x,
          y: c.top + u.scrollTop - h.y,
          width: c.width,
          height: c.height,
        }
      );
    }
    function nn(i) {
      var e = new Map(),
        t = new Set(),
        s = [];
      function n(o) {
        t.add(o.name),
          []
            .concat(o.requires || [], o.requiresIfExists || [])
            .forEach(function (r) {
              if (!t.has(r)) {
                var a = e.get(r);
                a && n(a);
              }
            }),
          s.push(o);
      }
      return (
        i.forEach(function (o) {
          e.set(o.name, o);
        }),
        i.forEach(function (o) {
          t.has(o.name) || n(o);
        }),
        s
      );
    }
    var Wi = { placement: "bottom", modifiers: [], strategy: "absolute" };
    function qi() {
      for (var i = arguments.length, e = new Array(i), t = 0; t < i; t++)
        e[t] = arguments[t];
      return !e.some(function (s) {
        return !(s && typeof s.getBoundingClientRect == "function");
      });
    }
    function at(i) {
      i === void 0 && (i = {});
      var e = i,
        t = e.defaultModifiers,
        s = t === void 0 ? [] : t,
        n = e.defaultOptions,
        o = n === void 0 ? Wi : n;
      return function (r, a, c) {
        c === void 0 && (c = o);
        var u,
          h,
          d = {
            placement: "bottom",
            orderedModifiers: [],
            options: Object.assign({}, Wi, o),
            modifiersData: {},
            elements: { reference: r, popper: a },
            attributes: {},
            styles: {},
          },
          v = [],
          f = !1,
          m = {
            state: d,
            setOptions: function (g) {
              var O = typeof g == "function" ? g(d.options) : g;
              p(),
                (d.options = Object.assign({}, o, d.options, O)),
                (d.scrollParents = {
                  reference: _e(r)
                    ? ze(r)
                    : r.contextElement
                    ? ze(r.contextElement)
                    : [],
                  popper: ze(a),
                });
              var D,
                w,
                x = (function (y) {
                  var A = nn(y);
                  return Ei.reduce(function (T, k) {
                    return T.concat(
                      A.filter(function (C) {
                        return C.phase === k;
                      })
                    );
                  }, []);
                })(
                  ((D = [].concat(s, d.options.modifiers)),
                  (w = D.reduce(function (y, A) {
                    var T = y[A.name];
                    return (
                      (y[A.name] = T
                        ? Object.assign({}, T, A, {
                            options: Object.assign({}, T.options, A.options),
                            data: Object.assign({}, T.data, A.data),
                          })
                        : A),
                      y
                    );
                  }, {})),
                  Object.keys(w).map(function (y) {
                    return w[y];
                  }))
                );
              return (
                (d.orderedModifiers = x.filter(function (y) {
                  return y.enabled;
                })),
                d.orderedModifiers.forEach(function (y) {
                  var A = y.name,
                    T = y.options,
                    k = T === void 0 ? {} : T,
                    C = y.effect;
                  if (typeof C == "function") {
                    var S = C({ state: d, name: A, instance: m, options: k });
                    v.push(S || function () {});
                  }
                }),
                m.update()
              );
            },
            forceUpdate: function () {
              if (!f) {
                var g = d.elements,
                  O = g.reference,
                  D = g.popper;
                if (qi(O, D)) {
                  (d.rects = {
                    reference: sn(O, We(D), d.options.strategy === "fixed"),
                    popper: jt(D),
                  }),
                    (d.reset = !1),
                    (d.placement = d.options.placement),
                    d.orderedModifiers.forEach(function (C) {
                      return (d.modifiersData[C.name] = Object.assign(
                        {},
                        C.data
                      ));
                    });
                  for (var w = 0; w < d.orderedModifiers.length; w++)
                    if (d.reset !== !0) {
                      var x = d.orderedModifiers[w],
                        y = x.fn,
                        A = x.options,
                        T = A === void 0 ? {} : A,
                        k = x.name;
                      typeof y == "function" &&
                        (d =
                          y({ state: d, options: T, name: k, instance: m }) ||
                          d);
                    } else (d.reset = !1), (w = -1);
                }
              }
            },
            update:
              ((u = function () {
                return new Promise(function (g) {
                  m.forceUpdate(), g(d);
                });
              }),
              function () {
                return (
                  h ||
                    (h = new Promise(function (g) {
                      Promise.resolve().then(function () {
                        (h = void 0), g(u());
                      });
                    })),
                  h
                );
              }),
            destroy: function () {
              p(), (f = !0);
            },
          };
        if (!qi(r, a)) return m;
        function p() {
          v.forEach(function (g) {
            return g();
          }),
            (v = []);
        }
        return (
          m.setOptions(c).then(function (g) {
            !f && c.onFirstUpdate && c.onFirstUpdate(g);
          }),
          m
        );
      };
    }
    var on = at(),
      rn = at({ defaultModifiers: [Ht, qt, $t, Pt] }),
      zt = at({ defaultModifiers: [Ht, qt, $t, Pt, Fi, Mi, Ri, Di, Bi] });
    const zi = Object.freeze(
        Object.defineProperty(
          {
            __proto__: null,
            popperGenerator: at,
            detectOverflow: je,
            createPopperBase: on,
            createPopper: zt,
            createPopperLite: rn,
            top: H,
            bottom: q,
            right: z,
            left: B,
            auto: it,
            basePlacements: Le,
            start: ge,
            end: De,
            clippingParents: fi,
            viewport: Lt,
            popper: Ie,
            reference: pi,
            variationPlacements: Dt,
            placements: It,
            beforeRead: mi,
            read: gi,
            afterRead: _i,
            beforeMain: bi,
            main: vi,
            afterMain: yi,
            beforeWrite: wi,
            write: Ai,
            afterWrite: xi,
            modifierPhases: Ei,
            applyStyles: Pt,
            arrow: Di,
            computeStyles: $t,
            eventListeners: Ht,
            flip: Mi,
            hide: Bi,
            offset: Fi,
            popperOffsets: qt,
            preventOverflow: Ri,
          },
          Symbol.toStringTag,
          { value: "Module" }
        )
      ),
      Ui = "dropdown",
      an = "ArrowUp",
      Vi = "ArrowDown",
      Ki = "click.bs.dropdown.data-api",
      Xi = "keydown.bs.dropdown.data-api",
      Ue = "show",
      ve = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',
      ln = `${ve}.show`,
      lt = ".dropdown-menu",
      cn = V() ? "top-end" : "top-start",
      dn = V() ? "top-start" : "top-end",
      un = V() ? "bottom-end" : "bottom-start",
      hn = V() ? "bottom-start" : "bottom-end",
      fn = V() ? "left-start" : "right-start",
      pn = V() ? "right-start" : "left-start",
      mn = {
        autoClose: !0,
        boundary: "clippingParents",
        display: "dynamic",
        offset: [0, 2],
        popperConfig: null,
        reference: "toggle",
      },
      gn = {
        autoClose: "(boolean|string)",
        boundary: "(string|element)",
        display: "string",
        offset: "(array|string|function)",
        popperConfig: "(null|object|function)",
        reference: "(string|element|object)",
      };
    class Z extends J {
      constructor(e, t) {
        super(e, t),
          (this._popper = null),
          (this._parent = this._element.parentNode),
          (this._menu =
            b.next(this._element, lt)[0] ||
            b.prev(this._element, lt)[0] ||
            b.findOne(lt, this._parent)),
          (this._inNavbar = this._detectNavbar());
      }
      static get Default() {
        return mn;
      }
      static get DefaultType() {
        return gn;
      }
      static get NAME() {
        return Ui;
      }
      toggle() {
        return this._isShown() ? this.hide() : this.show();
      }
      show() {
        if (he(this._element) || this._isShown()) return;
        const e = { relatedTarget: this._element };
        if (!l.trigger(this._element, "show.bs.dropdown", e).defaultPrevented) {
          if (
            (this._createPopper(),
            "ontouchstart" in document.documentElement &&
              !this._parent.closest(".navbar-nav"))
          )
            for (const t of [].concat(...document.body.children))
              l.on(t, "mouseover", Ye);
          this._element.focus(),
            this._element.setAttribute("aria-expanded", !0),
            this._menu.classList.add(Ue),
            this._element.classList.add(Ue),
            l.trigger(this._element, "shown.bs.dropdown", e);
        }
      }
      hide() {
        if (he(this._element) || !this._isShown()) return;
        const e = { relatedTarget: this._element };
        this._completeHide(e);
      }
      dispose() {
        this._popper && this._popper.destroy(), super.dispose();
      }
      update() {
        (this._inNavbar = this._detectNavbar()),
          this._popper && this._popper.update();
      }
      _completeHide(e) {
        if (!l.trigger(this._element, "hide.bs.dropdown", e).defaultPrevented) {
          if ("ontouchstart" in document.documentElement)
            for (const t of [].concat(...document.body.children))
              l.off(t, "mouseover", Ye);
          this._popper && this._popper.destroy(),
            this._menu.classList.remove(Ue),
            this._element.classList.remove(Ue),
            this._element.setAttribute("aria-expanded", "false"),
            le.removeDataAttribute(this._menu, "popper"),
            l.trigger(this._element, "hidden.bs.dropdown", e);
        }
      }
      _getConfig(e) {
        if (
          typeof (e = super._getConfig(e)).reference == "object" &&
          !re(e.reference) &&
          typeof e.reference.getBoundingClientRect != "function"
        )
          throw new TypeError(
            `${Ui.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`
          );
        return e;
      }
      _createPopper() {
        if (zi === void 0)
          throw new TypeError(
            "Bootstrap's dropdowns require Popper (https://popper.js.org)"
          );
        let e = this._element;
        this._config.reference === "parent"
          ? (e = this._parent)
          : re(this._config.reference)
          ? (e = ue(this._config.reference))
          : typeof this._config.reference == "object" &&
            (e = this._config.reference);
        const t = this._getPopperConfig();
        this._popper = zt(e, this._menu, t);
      }
      _isShown() {
        return this._menu.classList.contains(Ue);
      }
      _getPlacement() {
        const e = this._parent;
        if (e.classList.contains("dropend")) return fn;
        if (e.classList.contains("dropstart")) return pn;
        if (e.classList.contains("dropup-center")) return "top";
        if (e.classList.contains("dropdown-center")) return "bottom";
        const t =
          getComputedStyle(this._menu)
            .getPropertyValue("--bs-position")
            .trim() === "end";
        return e.classList.contains("dropup") ? (t ? dn : cn) : t ? hn : un;
      }
      _detectNavbar() {
        return this._element.closest(".navbar") !== null;
      }
      _getOffset() {
        const { offset: e } = this._config;
        return typeof e == "string"
          ? e.split(",").map((t) => Number.parseInt(t, 10))
          : typeof e == "function"
          ? (t) => e(t, this._element)
          : e;
      }
      _getPopperConfig() {
        const e = {
          placement: this._getPlacement(),
          modifiers: [
            {
              name: "preventOverflow",
              options: { boundary: this._config.boundary },
            },
            { name: "offset", options: { offset: this._getOffset() } },
          ],
        };
        return (
          (this._inNavbar || this._config.display === "static") &&
            (le.setDataAttribute(this._menu, "popper", "static"),
            (e.modifiers = [{ name: "applyStyles", enabled: !1 }])),
          {
            ...e,
            ...(typeof this._config.popperConfig == "function"
              ? this._config.popperConfig(e)
              : this._config.popperConfig),
          }
        );
      }
      _selectMenuItem({ key: e, target: t }) {
        const s = b
          .find(
            ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
            this._menu
          )
          .filter((n) => Ee(n));
        s.length && yt(s, t, e === Vi, !s.includes(t)).focus();
      }
      static jQueryInterface(e) {
        return this.each(function () {
          const t = Z.getOrCreateInstance(this, e);
          if (typeof e == "string") {
            if (t[e] === void 0) throw new TypeError(`No method named "${e}"`);
            t[e]();
          }
        });
      }
      static clearMenus(e) {
        if (e.button === 2 || (e.type === "keyup" && e.key !== "Tab")) return;
        const t = b.find(ln);
        for (const s of t) {
          const n = Z.getInstance(s);
          if (!n || n._config.autoClose === !1) continue;
          const o = e.composedPath(),
            r = o.includes(n._menu);
          if (
            o.includes(n._element) ||
            (n._config.autoClose === "inside" && !r) ||
            (n._config.autoClose === "outside" && r) ||
            (n._menu.contains(e.target) &&
              ((e.type === "keyup" && e.key === "Tab") ||
                /input|select|option|textarea|form/i.test(e.target.tagName)))
          )
            continue;
          const a = { relatedTarget: n._element };
          e.type === "click" && (a.clickEvent = e), n._completeHide(a);
        }
      }
      static dataApiKeydownHandler(e) {
        const t = /input|textarea/i.test(e.target.tagName),
          s = e.key === "Escape",
          n = [an, Vi].includes(e.key);
        if ((!n && !s) || (t && !s)) return;
        e.preventDefault();
        const o = this.matches(ve)
            ? this
            : b.prev(this, ve)[0] ||
              b.next(this, ve)[0] ||
              b.findOne(ve, e.delegateTarget.parentNode),
          r = Z.getOrCreateInstance(o);
        if (n) return e.stopPropagation(), r.show(), void r._selectMenuItem(e);
        r._isShown() && (e.stopPropagation(), r.hide(), o.focus());
      }
    }
    l.on(document, Xi, ve, Z.dataApiKeydownHandler),
      l.on(document, Xi, lt, Z.dataApiKeydownHandler),
      l.on(document, Ki, Z.clearMenus),
      l.on(document, "keyup.bs.dropdown.data-api", Z.clearMenus),
      l.on(document, Ki, ve, function (i) {
        i.preventDefault(), Z.getOrCreateInstance(this).toggle();
      }),
      K(Z);
    const Yi = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
      Qi = ".sticky-top",
      ct = "padding-right",
      Gi = "margin-right";
    class Ut {
      constructor() {
        this._element = document.body;
      }
      getWidth() {
        const e = document.documentElement.clientWidth;
        return Math.abs(window.innerWidth - e);
      }
      hide() {
        const e = this.getWidth();
        this._disableOverFlow(),
          this._setElementAttributes(this._element, ct, (t) => t + e),
          this._setElementAttributes(Yi, ct, (t) => t + e),
          this._setElementAttributes(Qi, Gi, (t) => t - e);
      }
      reset() {
        this._resetElementAttributes(this._element, "overflow"),
          this._resetElementAttributes(this._element, ct),
          this._resetElementAttributes(Yi, ct),
          this._resetElementAttributes(Qi, Gi);
      }
      isOverflowing() {
        return this.getWidth() > 0;
      }
      _disableOverFlow() {
        this._saveInitialAttribute(this._element, "overflow"),
          (this._element.style.overflow = "hidden");
      }
      _setElementAttributes(e, t, s) {
        const n = this.getWidth();
        this._applyManipulationCallback(e, (o) => {
          if (o !== this._element && window.innerWidth > o.clientWidth + n)
            return;
          this._saveInitialAttribute(o, t);
          const r = window.getComputedStyle(o).getPropertyValue(t);
          o.style.setProperty(t, `${s(Number.parseFloat(r))}px`);
        });
      }
      _saveInitialAttribute(e, t) {
        const s = e.style.getPropertyValue(t);
        s && le.setDataAttribute(e, t, s);
      }
      _resetElementAttributes(e, t) {
        this._applyManipulationCallback(e, (s) => {
          const n = le.getDataAttribute(s, t);
          n !== null
            ? (le.removeDataAttribute(s, t), s.style.setProperty(t, n))
            : s.style.removeProperty(t);
        });
      }
      _applyManipulationCallback(e, t) {
        if (re(e)) t(e);
        else for (const s of b.find(e, this._element)) t(s);
      }
    }
    const Ji = "show",
      Zi = "mousedown.bs.backdrop",
      _n = {
        className: "modal-backdrop",
        clickCallback: null,
        isAnimated: !1,
        isVisible: !0,
        rootElement: "body",
      },
      bn = {
        className: "string",
        clickCallback: "(function|null)",
        isAnimated: "boolean",
        isVisible: "boolean",
        rootElement: "(element|string)",
      };
    class es extends He {
      constructor(e) {
        super(),
          (this._config = this._getConfig(e)),
          (this._isAppended = !1),
          (this._element = null);
      }
      static get Default() {
        return _n;
      }
      static get DefaultType() {
        return bn;
      }
      static get NAME() {
        return "backdrop";
      }
      show(e) {
        if (!this._config.isVisible) return void ae(e);
        this._append();
        const t = this._getElement();
        this._config.isAnimated && $e(t),
          t.classList.add(Ji),
          this._emulateAnimation(() => {
            ae(e);
          });
      }
      hide(e) {
        this._config.isVisible
          ? (this._getElement().classList.remove(Ji),
            this._emulateAnimation(() => {
              this.dispose(), ae(e);
            }))
          : ae(e);
      }
      dispose() {
        this._isAppended &&
          (l.off(this._element, Zi),
          this._element.remove(),
          (this._isAppended = !1));
      }
      _getElement() {
        if (!this._element) {
          const e = document.createElement("div");
          (e.className = this._config.className),
            this._config.isAnimated && e.classList.add("fade"),
            (this._element = e);
        }
        return this._element;
      }
      _configAfterMerge(e) {
        return (e.rootElement = ue(e.rootElement)), e;
      }
      _append() {
        if (this._isAppended) return;
        const e = this._getElement();
        this._config.rootElement.append(e),
          l.on(e, Zi, () => {
            ae(this._config.clickCallback);
          }),
          (this._isAppended = !0);
      }
      _emulateAnimation(e) {
        ti(e, this._getElement(), this._config.isAnimated);
      }
    }
    const ts = ".bs.focustrap",
      is = "backward",
      vn = { autofocus: !0, trapElement: null },
      yn = { autofocus: "boolean", trapElement: "element" };
    class ss extends He {
      constructor(e) {
        super(),
          (this._config = this._getConfig(e)),
          (this._isActive = !1),
          (this._lastTabNavDirection = null);
      }
      static get Default() {
        return vn;
      }
      static get DefaultType() {
        return yn;
      }
      static get NAME() {
        return "focustrap";
      }
      activate() {
        this._isActive ||
          (this._config.autofocus && this._config.trapElement.focus(),
          l.off(document, ts),
          l.on(document, "focusin.bs.focustrap", (e) => this._handleFocusin(e)),
          l.on(document, "keydown.tab.bs.focustrap", (e) =>
            this._handleKeydown(e)
          ),
          (this._isActive = !0));
      }
      deactivate() {
        this._isActive && ((this._isActive = !1), l.off(document, ts));
      }
      _handleFocusin(e) {
        const { trapElement: t } = this._config;
        if (e.target === document || e.target === t || t.contains(e.target))
          return;
        const s = b.focusableChildren(t);
        s.length === 0
          ? t.focus()
          : this._lastTabNavDirection === is
          ? s[s.length - 1].focus()
          : s[0].focus();
      }
      _handleKeydown(e) {
        e.key === "Tab" &&
          (this._lastTabNavDirection = e.shiftKey ? is : "forward");
      }
    }
    const ns = "hidden.bs.modal",
      os = "show.bs.modal",
      rs = "modal-open",
      as = "show",
      Vt = "modal-static",
      wn = { backdrop: !0, focus: !0, keyboard: !0 },
      An = {
        backdrop: "(boolean|string)",
        focus: "boolean",
        keyboard: "boolean",
      };
    class ye extends J {
      constructor(e, t) {
        super(e, t),
          (this._dialog = b.findOne(".modal-dialog", this._element)),
          (this._backdrop = this._initializeBackDrop()),
          (this._focustrap = this._initializeFocusTrap()),
          (this._isShown = !1),
          (this._isTransitioning = !1),
          (this._scrollBar = new Ut()),
          this._addEventListeners();
      }
      static get Default() {
        return wn;
      }
      static get DefaultType() {
        return An;
      }
      static get NAME() {
        return "modal";
      }
      toggle(e) {
        return this._isShown ? this.hide() : this.show(e);
      }
      show(e) {
        this._isShown ||
          this._isTransitioning ||
          l.trigger(this._element, os, { relatedTarget: e }).defaultPrevented ||
          ((this._isShown = !0),
          (this._isTransitioning = !0),
          this._scrollBar.hide(),
          document.body.classList.add(rs),
          this._adjustDialog(),
          this._backdrop.show(() => this._showElement(e)));
      }
      hide() {
        this._isShown &&
          !this._isTransitioning &&
          (l.trigger(this._element, "hide.bs.modal").defaultPrevented ||
            ((this._isShown = !1),
            (this._isTransitioning = !0),
            this._focustrap.deactivate(),
            this._element.classList.remove(as),
            this._queueCallback(
              () => this._hideModal(),
              this._element,
              this._isAnimated()
            )));
      }
      dispose() {
        for (const e of [window, this._dialog]) l.off(e, ".bs.modal");
        this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
      }
      handleUpdate() {
        this._adjustDialog();
      }
      _initializeBackDrop() {
        return new es({
          isVisible: Boolean(this._config.backdrop),
          isAnimated: this._isAnimated(),
        });
      }
      _initializeFocusTrap() {
        return new ss({ trapElement: this._element });
      }
      _showElement(e) {
        document.body.contains(this._element) ||
          document.body.append(this._element),
          (this._element.style.display = "block"),
          this._element.removeAttribute("aria-hidden"),
          this._element.setAttribute("aria-modal", !0),
          this._element.setAttribute("role", "dialog"),
          (this._element.scrollTop = 0);
        const t = b.findOne(".modal-body", this._dialog);
        t && (t.scrollTop = 0),
          $e(this._element),
          this._element.classList.add(as),
          this._queueCallback(
            () => {
              this._config.focus && this._focustrap.activate(),
                (this._isTransitioning = !1),
                l.trigger(this._element, "shown.bs.modal", {
                  relatedTarget: e,
                });
            },
            this._dialog,
            this._isAnimated()
          );
      }
      _addEventListeners() {
        l.on(this._element, "keydown.dismiss.bs.modal", (e) => {
          if (e.key === "Escape")
            return this._config.keyboard
              ? (e.preventDefault(), void this.hide())
              : void this._triggerBackdropTransition();
        }),
          l.on(window, "resize.bs.modal", () => {
            this._isShown && !this._isTransitioning && this._adjustDialog();
          }),
          l.on(this._element, "mousedown.dismiss.bs.modal", (e) => {
            l.one(this._element, "click.dismiss.bs.modal", (t) => {
              this._element === e.target &&
                this._element === t.target &&
                (this._config.backdrop !== "static"
                  ? this._config.backdrop && this.hide()
                  : this._triggerBackdropTransition());
            });
          });
      }
      _hideModal() {
        (this._element.style.display = "none"),
          this._element.setAttribute("aria-hidden", !0),
          this._element.removeAttribute("aria-modal"),
          this._element.removeAttribute("role"),
          (this._isTransitioning = !1),
          this._backdrop.hide(() => {
            document.body.classList.remove(rs),
              this._resetAdjustments(),
              this._scrollBar.reset(),
              l.trigger(this._element, ns);
          });
      }
      _isAnimated() {
        return this._element.classList.contains("fade");
      }
      _triggerBackdropTransition() {
        if (l.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented)
          return;
        const e =
            this._element.scrollHeight > document.documentElement.clientHeight,
          t = this._element.style.overflowY;
        t === "hidden" ||
          this._element.classList.contains(Vt) ||
          (e || (this._element.style.overflowY = "hidden"),
          this._element.classList.add(Vt),
          this._queueCallback(() => {
            this._element.classList.remove(Vt),
              this._queueCallback(() => {
                this._element.style.overflowY = t;
              }, this._dialog);
          }, this._dialog),
          this._element.focus());
      }
      _adjustDialog() {
        const e =
            this._element.scrollHeight > document.documentElement.clientHeight,
          t = this._scrollBar.getWidth(),
          s = t > 0;
        if (s && !e) {
          const n = V() ? "paddingLeft" : "paddingRight";
          this._element.style[n] = `${t}px`;
        }
        if (!s && e) {
          const n = V() ? "paddingRight" : "paddingLeft";
          this._element.style[n] = `${t}px`;
        }
      }
      _resetAdjustments() {
        (this._element.style.paddingLeft = ""),
          (this._element.style.paddingRight = "");
      }
      static jQueryInterface(e, t) {
        return this.each(function () {
          const s = ye.getOrCreateInstance(this, e);
          if (typeof e == "string") {
            if (s[e] === void 0) throw new TypeError(`No method named "${e}"`);
            s[e](t);
          }
        });
      }
    }
    l.on(
      document,
      "click.bs.modal.data-api",
      '[data-bs-toggle="modal"]',
      function (i) {
        const e = E(this);
        ["A", "AREA"].includes(this.tagName) && i.preventDefault(),
          l.one(e, os, (s) => {
            s.defaultPrevented ||
              l.one(e, ns, () => {
                Ee(this) && this.focus();
              });
          });
        const t = b.findOne(".modal.show");
        t && ye.getInstance(t).hide(), ye.getOrCreateInstance(e).toggle(this);
      }
    ),
      Qe(ye),
      K(ye);
    const ls = "show",
      cs = "showing",
      ds = "hiding",
      us = ".offcanvas.show",
      hs = "hidePrevented.bs.offcanvas",
      fs = "hidden.bs.offcanvas",
      xn = { backdrop: !0, keyboard: !0, scroll: !1 },
      En = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        scroll: "boolean",
      };
    class de extends J {
      constructor(e, t) {
        super(e, t),
          (this._isShown = !1),
          (this._backdrop = this._initializeBackDrop()),
          (this._focustrap = this._initializeFocusTrap()),
          this._addEventListeners();
      }
      static get Default() {
        return xn;
      }
      static get DefaultType() {
        return En;
      }
      static get NAME() {
        return "offcanvas";
      }
      toggle(e) {
        return this._isShown ? this.hide() : this.show(e);
      }
      show(e) {
        this._isShown ||
          l.trigger(this._element, "show.bs.offcanvas", { relatedTarget: e })
            .defaultPrevented ||
          ((this._isShown = !0),
          this._backdrop.show(),
          this._config.scroll || new Ut().hide(),
          this._element.setAttribute("aria-modal", !0),
          this._element.setAttribute("role", "dialog"),
          this._element.classList.add(cs),
          this._queueCallback(
            () => {
              (this._config.scroll && !this._config.backdrop) ||
                this._focustrap.activate(),
                this._element.classList.add(ls),
                this._element.classList.remove(cs),
                l.trigger(this._element, "shown.bs.offcanvas", {
                  relatedTarget: e,
                });
            },
            this._element,
            !0
          ));
      }
      hide() {
        this._isShown &&
          (l.trigger(this._element, "hide.bs.offcanvas").defaultPrevented ||
            (this._focustrap.deactivate(),
            this._element.blur(),
            (this._isShown = !1),
            this._element.classList.add(ds),
            this._backdrop.hide(),
            this._queueCallback(
              () => {
                this._element.classList.remove(ls, ds),
                  this._element.removeAttribute("aria-modal"),
                  this._element.removeAttribute("role"),
                  this._config.scroll || new Ut().reset(),
                  l.trigger(this._element, fs);
              },
              this._element,
              !0
            )));
      }
      dispose() {
        this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
      }
      _initializeBackDrop() {
        const e = Boolean(this._config.backdrop);
        return new es({
          className: "offcanvas-backdrop",
          isVisible: e,
          isAnimated: !0,
          rootElement: this._element.parentNode,
          clickCallback: e
            ? () => {
                this._config.backdrop !== "static"
                  ? this.hide()
                  : l.trigger(this._element, hs);
              }
            : null,
        });
      }
      _initializeFocusTrap() {
        return new ss({ trapElement: this._element });
      }
      _addEventListeners() {
        l.on(this._element, "keydown.dismiss.bs.offcanvas", (e) => {
          e.key === "Escape" &&
            (this._config.keyboard
              ? this.hide()
              : l.trigger(this._element, hs));
        });
      }
      static jQueryInterface(e) {
        return this.each(function () {
          const t = de.getOrCreateInstance(this, e);
          if (typeof e == "string") {
            if (t[e] === void 0 || e.startsWith("_") || e === "constructor")
              throw new TypeError(`No method named "${e}"`);
            t[e](this);
          }
        });
      }
    }
    l.on(
      document,
      "click.bs.offcanvas.data-api",
      '[data-bs-toggle="offcanvas"]',
      function (i) {
        const e = E(this);
        if (
          (["A", "AREA"].includes(this.tagName) && i.preventDefault(), he(this))
        )
          return;
        l.one(e, fs, () => {
          Ee(this) && this.focus();
        });
        const t = b.findOne(us);
        t && t !== e && de.getInstance(t).hide(),
          de.getOrCreateInstance(e).toggle(this);
      }
    ),
      l.on(window, "load.bs.offcanvas.data-api", () => {
        for (const i of b.find(us)) de.getOrCreateInstance(i).show();
      }),
      l.on(window, "resize.bs.offcanvas", () => {
        for (const i of b.find("[aria-modal][class*=show][class*=offcanvas-]"))
          getComputedStyle(i).position !== "fixed" &&
            de.getOrCreateInstance(i).hide();
      }),
      Qe(de),
      K(de);
    const Tn = new Set([
        "background",
        "cite",
        "href",
        "itemtype",
        "longdesc",
        "poster",
        "src",
        "xlink:href",
      ]),
      Cn = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,
      On =
        /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
      kn = (i, e) => {
        const t = i.nodeName.toLowerCase();
        return e.includes(t)
          ? !Tn.has(t) || Boolean(Cn.test(i.nodeValue) || On.test(i.nodeValue))
          : e.filter((s) => s instanceof RegExp).some((s) => s.test(t));
      },
      ps = {
        "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
        a: ["target", "href", "title", "rel"],
        area: [],
        b: [],
        br: [],
        col: [],
        code: [],
        div: [],
        em: [],
        hr: [],
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        i: [],
        img: ["src", "srcset", "alt", "title", "width", "height"],
        li: [],
        ol: [],
        p: [],
        pre: [],
        s: [],
        small: [],
        span: [],
        sub: [],
        sup: [],
        strong: [],
        u: [],
        ul: [],
      },
      Ln = {
        allowList: ps,
        content: {},
        extraClass: "",
        html: !1,
        sanitize: !0,
        sanitizeFn: null,
        template: "<div></div>",
      },
      Dn = {
        allowList: "object",
        content: "object",
        extraClass: "(string|function)",
        html: "boolean",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        template: "string",
      },
      In = {
        entry: "(string|element|function|null)",
        selector: "(string|element)",
      };
    class Sn extends He {
      constructor(e) {
        super(), (this._config = this._getConfig(e));
      }
      static get Default() {
        return Ln;
      }
      static get DefaultType() {
        return Dn;
      }
      static get NAME() {
        return "TemplateFactory";
      }
      getContent() {
        return Object.values(this._config.content)
          .map((e) => this._resolvePossibleFunction(e))
          .filter(Boolean);
      }
      hasContent() {
        return this.getContent().length > 0;
      }
      changeContent(e) {
        return (
          this._checkContent(e),
          (this._config.content = { ...this._config.content, ...e }),
          this
        );
      }
      toHtml() {
        const e = document.createElement("div");
        e.innerHTML = this._maybeSanitize(this._config.template);
        for (const [n, o] of Object.entries(this._config.content))
          this._setContent(e, o, n);
        const t = e.children[0],
          s = this._resolvePossibleFunction(this._config.extraClass);
        return s && t.classList.add(...s.split(" ")), t;
      }
      _typeCheckConfig(e) {
        super._typeCheckConfig(e), this._checkContent(e.content);
      }
      _checkContent(e) {
        for (const [t, s] of Object.entries(e))
          super._typeCheckConfig({ selector: t, entry: s }, In);
      }
      _setContent(e, t, s) {
        const n = b.findOne(s, e);
        n &&
          ((t = this._resolvePossibleFunction(t))
            ? re(t)
              ? this._putElementInTemplate(ue(t), n)
              : this._config.html
              ? (n.innerHTML = this._maybeSanitize(t))
              : (n.textContent = t)
            : n.remove());
      }
      _maybeSanitize(e) {
        return this._config.sanitize
          ? (function (t, s, n) {
              if (!t.length) return t;
              if (n && typeof n == "function") return n(t);
              const o = new window.DOMParser().parseFromString(t, "text/html"),
                r = [].concat(...o.body.querySelectorAll("*"));
              for (const a of r) {
                const c = a.nodeName.toLowerCase();
                if (!Object.keys(s).includes(c)) {
                  a.remove();
                  continue;
                }
                const u = [].concat(...a.attributes),
                  h = [].concat(s["*"] || [], s[c] || []);
                for (const d of u) kn(d, h) || a.removeAttribute(d.nodeName);
              }
              return o.body.innerHTML;
            })(e, this._config.allowList, this._config.sanitizeFn)
          : e;
      }
      _resolvePossibleFunction(e) {
        return typeof e == "function" ? e(this) : e;
      }
      _putElementInTemplate(e, t) {
        if (this._config.html) return (t.innerHTML = ""), void t.append(e);
        t.textContent = e.textContent;
      }
    }
    const Pn = new Set(["sanitize", "allowList", "sanitizeFn"]),
      Kt = "fade",
      dt = "show",
      ms = ".modal",
      gs = "hide.bs.modal",
      ut = "hover",
      _s = "focus",
      Nn = {
        AUTO: "auto",
        TOP: "top",
        RIGHT: V() ? "left" : "right",
        BOTTOM: "bottom",
        LEFT: V() ? "right" : "left",
      },
      jn = {
        allowList: ps,
        animation: !0,
        boundary: "clippingParents",
        container: !1,
        customClass: "",
        delay: 0,
        fallbackPlacements: ["top", "right", "bottom", "left"],
        html: !1,
        offset: [0, 0],
        placement: "top",
        popperConfig: null,
        sanitize: !0,
        sanitizeFn: null,
        selector: !1,
        template:
          '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        title: "",
        trigger: "hover focus",
      },
      Mn = {
        allowList: "object",
        animation: "boolean",
        boundary: "(string|element)",
        container: "(string|element|boolean)",
        customClass: "(string|function)",
        delay: "(number|object)",
        fallbackPlacements: "array",
        html: "boolean",
        offset: "(array|string|function)",
        placement: "(string|function)",
        popperConfig: "(null|object|function)",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        selector: "(string|boolean)",
        template: "string",
        title: "(string|element|function)",
        trigger: "string",
      };
    class we extends J {
      constructor(e, t) {
        if (zi === void 0)
          throw new TypeError(
            "Bootstrap's tooltips require Popper (https://popper.js.org)"
          );
        super(e, t),
          (this._isEnabled = !0),
          (this._timeout = 0),
          (this._isHovered = null),
          (this._activeTrigger = {}),
          (this._popper = null),
          (this._templateFactory = null),
          (this._newContent = null),
          (this.tip = null),
          this._setListeners(),
          this._config.selector || this._fixTitle();
      }
      static get Default() {
        return jn;
      }
      static get DefaultType() {
        return Mn;
      }
      static get NAME() {
        return "tooltip";
      }
      enable() {
        this._isEnabled = !0;
      }
      disable() {
        this._isEnabled = !1;
      }
      toggleEnabled() {
        this._isEnabled = !this._isEnabled;
      }
      toggle() {
        this._isEnabled &&
          ((this._activeTrigger.click = !this._activeTrigger.click),
          this._isShown() ? this._leave() : this._enter());
      }
      dispose() {
        clearTimeout(this._timeout),
          l.off(this._element.closest(ms), gs, this._hideModalHandler),
          this.tip && this.tip.remove(),
          this._element.getAttribute("data-bs-original-title") &&
            this._element.setAttribute(
              "title",
              this._element.getAttribute("data-bs-original-title")
            ),
          this._disposePopper(),
          super.dispose();
      }
      show() {
        if (this._element.style.display === "none")
          throw new Error("Please use show on visible elements");
        if (!this._isWithContent() || !this._isEnabled) return;
        const e = l.trigger(this._element, this.constructor.eventName("show")),
          t = (
            Zt(this._element) || this._element.ownerDocument.documentElement
          ).contains(this._element);
        if (e.defaultPrevented || !t) return;
        this.tip && (this.tip.remove(), (this.tip = null));
        const s = this._getTipElement();
        this._element.setAttribute("aria-describedby", s.getAttribute("id"));
        const { container: n } = this._config;
        if (
          (this._element.ownerDocument.documentElement.contains(this.tip) ||
            (n.append(s),
            l.trigger(this._element, this.constructor.eventName("inserted"))),
          this._popper
            ? this._popper.update()
            : (this._popper = this._createPopper(s)),
          s.classList.add(dt),
          "ontouchstart" in document.documentElement)
        )
          for (const o of [].concat(...document.body.children))
            l.on(o, "mouseover", Ye);
        this._queueCallback(
          () => {
            l.trigger(this._element, this.constructor.eventName("shown")),
              this._isHovered === !1 && this._leave(),
              (this._isHovered = !1);
          },
          this.tip,
          this._isAnimated()
        );
      }
      hide() {
        if (
          !this._isShown() ||
          l.trigger(this._element, this.constructor.eventName("hide"))
            .defaultPrevented
        )
          return;
        const e = this._getTipElement();
        if (
          (e.classList.remove(dt), "ontouchstart" in document.documentElement)
        )
          for (const t of [].concat(...document.body.children))
            l.off(t, "mouseover", Ye);
        (this._activeTrigger.click = !1),
          (this._activeTrigger.focus = !1),
          (this._activeTrigger.hover = !1),
          (this._isHovered = null),
          this._queueCallback(
            () => {
              this._isWithActiveTrigger() ||
                (this._isHovered || e.remove(),
                this._element.removeAttribute("aria-describedby"),
                l.trigger(this._element, this.constructor.eventName("hidden")),
                this._disposePopper());
            },
            this.tip,
            this._isAnimated()
          );
      }
      update() {
        this._popper && this._popper.update();
      }
      _isWithContent() {
        return Boolean(this._getTitle());
      }
      _getTipElement() {
        return (
          this.tip ||
            (this.tip = this._createTipElement(
              this._newContent || this._getContentForTemplate()
            )),
          this.tip
        );
      }
      _createTipElement(e) {
        const t = this._getTemplateFactory(e).toHtml();
        if (!t) return null;
        t.classList.remove(Kt, dt),
          t.classList.add(`bs-${this.constructor.NAME}-auto`);
        const s = ((n) => {
          do n += Math.floor(1e6 * Math.random());
          while (document.getElementById(n));
          return n;
        })(this.constructor.NAME).toString();
        return (
          t.setAttribute("id", s), this._isAnimated() && t.classList.add(Kt), t
        );
      }
      setContent(e) {
        (this._newContent = e),
          this._isShown() && (this._disposePopper(), this.show());
      }
      _getTemplateFactory(e) {
        return (
          this._templateFactory
            ? this._templateFactory.changeContent(e)
            : (this._templateFactory = new Sn({
                ...this._config,
                content: e,
                extraClass: this._resolvePossibleFunction(
                  this._config.customClass
                ),
              })),
          this._templateFactory
        );
      }
      _getContentForTemplate() {
        return { ".tooltip-inner": this._getTitle() };
      }
      _getTitle() {
        return (
          this._resolvePossibleFunction(this._config.title) ||
          this._element.getAttribute("data-bs-original-title")
        );
      }
      _initializeOnDelegatedTarget(e) {
        return this.constructor.getOrCreateInstance(
          e.delegateTarget,
          this._getDelegateConfig()
        );
      }
      _isAnimated() {
        return (
          this._config.animation ||
          (this.tip && this.tip.classList.contains(Kt))
        );
      }
      _isShown() {
        return this.tip && this.tip.classList.contains(dt);
      }
      _createPopper(e) {
        const t =
            typeof this._config.placement == "function"
              ? this._config.placement.call(this, e, this._element)
              : this._config.placement,
          s = Nn[t.toUpperCase()];
        return zt(this._element, e, this._getPopperConfig(s));
      }
      _getOffset() {
        const { offset: e } = this._config;
        return typeof e == "string"
          ? e.split(",").map((t) => Number.parseInt(t, 10))
          : typeof e == "function"
          ? (t) => e(t, this._element)
          : e;
      }
      _resolvePossibleFunction(e) {
        return typeof e == "function" ? e.call(this._element) : e;
      }
      _getPopperConfig(e) {
        const t = {
          placement: e,
          modifiers: [
            {
              name: "flip",
              options: { fallbackPlacements: this._config.fallbackPlacements },
            },
            { name: "offset", options: { offset: this._getOffset() } },
            {
              name: "preventOverflow",
              options: { boundary: this._config.boundary },
            },
            {
              name: "arrow",
              options: { element: `.${this.constructor.NAME}-arrow` },
            },
            {
              name: "preSetPlacement",
              enabled: !0,
              phase: "beforeMain",
              fn: (s) => {
                this._getTipElement().setAttribute(
                  "data-popper-placement",
                  s.state.placement
                );
              },
            },
          ],
        };
        return {
          ...t,
          ...(typeof this._config.popperConfig == "function"
            ? this._config.popperConfig(t)
            : this._config.popperConfig),
        };
      }
      _setListeners() {
        const e = this._config.trigger.split(" ");
        for (const t of e)
          if (t === "click")
            l.on(
              this._element,
              this.constructor.eventName("click"),
              this._config.selector,
              (s) => {
                this._initializeOnDelegatedTarget(s).toggle();
              }
            );
          else if (t !== "manual") {
            const s =
                t === ut
                  ? this.constructor.eventName("mouseenter")
                  : this.constructor.eventName("focusin"),
              n =
                t === ut
                  ? this.constructor.eventName("mouseleave")
                  : this.constructor.eventName("focusout");
            l.on(this._element, s, this._config.selector, (o) => {
              const r = this._initializeOnDelegatedTarget(o);
              (r._activeTrigger[o.type === "focusin" ? _s : ut] = !0),
                r._enter();
            }),
              l.on(this._element, n, this._config.selector, (o) => {
                const r = this._initializeOnDelegatedTarget(o);
                (r._activeTrigger[o.type === "focusout" ? _s : ut] =
                  r._element.contains(o.relatedTarget)),
                  r._leave();
              });
          }
        (this._hideModalHandler = () => {
          this._element && this.hide();
        }),
          l.on(this._element.closest(ms), gs, this._hideModalHandler);
      }
      _fixTitle() {
        const e = this._element.getAttribute("title");
        e &&
          (this._element.getAttribute("aria-label") ||
            this._element.textContent.trim() ||
            this._element.setAttribute("aria-label", e),
          this._element.setAttribute("data-bs-original-title", e),
          this._element.removeAttribute("title"));
      }
      _enter() {
        this._isShown() || this._isHovered
          ? (this._isHovered = !0)
          : ((this._isHovered = !0),
            this._setTimeout(() => {
              this._isHovered && this.show();
            }, this._config.delay.show));
      }
      _leave() {
        this._isWithActiveTrigger() ||
          ((this._isHovered = !1),
          this._setTimeout(() => {
            this._isHovered || this.hide();
          }, this._config.delay.hide));
      }
      _setTimeout(e, t) {
        clearTimeout(this._timeout), (this._timeout = setTimeout(e, t));
      }
      _isWithActiveTrigger() {
        return Object.values(this._activeTrigger).includes(!0);
      }
      _getConfig(e) {
        const t = le.getDataAttributes(this._element);
        for (const s of Object.keys(t)) Pn.has(s) && delete t[s];
        return (
          (e = { ...t, ...(typeof e == "object" && e ? e : {}) }),
          (e = this._mergeConfigObj(e)),
          (e = this._configAfterMerge(e)),
          this._typeCheckConfig(e),
          e
        );
      }
      _configAfterMerge(e) {
        return (
          (e.container = e.container === !1 ? document.body : ue(e.container)),
          typeof e.delay == "number" &&
            (e.delay = { show: e.delay, hide: e.delay }),
          typeof e.title == "number" && (e.title = e.title.toString()),
          typeof e.content == "number" && (e.content = e.content.toString()),
          e
        );
      }
      _getDelegateConfig() {
        const e = {};
        for (const t in this._config)
          this.constructor.Default[t] !== this._config[t] &&
            (e[t] = this._config[t]);
        return (e.selector = !1), (e.trigger = "manual"), e;
      }
      _disposePopper() {
        this._popper && (this._popper.destroy(), (this._popper = null));
      }
      static jQueryInterface(e) {
        return this.each(function () {
          const t = we.getOrCreateInstance(this, e);
          if (typeof e == "string") {
            if (t[e] === void 0) throw new TypeError(`No method named "${e}"`);
            t[e]();
          }
        });
      }
    }
    K(we);
    const $n = {
        ...we.Default,
        content: "",
        offset: [0, 8],
        placement: "right",
        template:
          '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
        trigger: "click",
      },
      Hn = { ...we.DefaultType, content: "(null|string|element|function)" };
    class ht extends we {
      static get Default() {
        return $n;
      }
      static get DefaultType() {
        return Hn;
      }
      static get NAME() {
        return "popover";
      }
      _isWithContent() {
        return this._getTitle() || this._getContent();
      }
      _getContentForTemplate() {
        return {
          ".popover-header": this._getTitle(),
          ".popover-body": this._getContent(),
        };
      }
      _getContent() {
        return this._resolvePossibleFunction(this._config.content);
      }
      static jQueryInterface(e) {
        return this.each(function () {
          const t = ht.getOrCreateInstance(this, e);
          if (typeof e == "string") {
            if (t[e] === void 0) throw new TypeError(`No method named "${e}"`);
            t[e]();
          }
        });
      }
    }
    K(ht);
    const bs = "click.bs.scrollspy",
      Ve = "active",
      vs = "[href]",
      Bn = {
        offset: null,
        rootMargin: "0px 0px -25%",
        smoothScroll: !1,
        target: null,
        threshold: [0.1, 0.5, 1],
      },
      Fn = {
        offset: "(number|null)",
        rootMargin: "string",
        smoothScroll: "boolean",
        target: "element",
        threshold: "array",
      };
    class Ke extends J {
      constructor(e, t) {
        super(e, t),
          (this._targetLinks = new Map()),
          (this._observableSections = new Map()),
          (this._rootElement =
            getComputedStyle(this._element).overflowY === "visible"
              ? null
              : this._element),
          (this._activeTarget = null),
          (this._observer = null),
          (this._previousScrollData = {
            visibleEntryTop: 0,
            parentScrollTop: 0,
          }),
          this.refresh();
      }
      static get Default() {
        return Bn;
      }
      static get DefaultType() {
        return Fn;
      }
      static get NAME() {
        return "scrollspy";
      }
      refresh() {
        this._initializeTargetsAndObservables(),
          this._maybeEnableSmoothScroll(),
          this._observer
            ? this._observer.disconnect()
            : (this._observer = this._getNewObserver());
        for (const e of this._observableSections.values())
          this._observer.observe(e);
      }
      dispose() {
        this._observer.disconnect(), super.dispose();
      }
      _configAfterMerge(e) {
        return (
          (e.target = ue(e.target) || document.body),
          (e.rootMargin = e.offset ? `${e.offset}px 0px -30%` : e.rootMargin),
          typeof e.threshold == "string" &&
            (e.threshold = e.threshold
              .split(",")
              .map((t) => Number.parseFloat(t))),
          e
        );
      }
      _maybeEnableSmoothScroll() {
        this._config.smoothScroll &&
          (l.off(this._config.target, bs),
          l.on(this._config.target, bs, vs, (e) => {
            const t = this._observableSections.get(e.target.hash);
            if (t) {
              e.preventDefault();
              const s = this._rootElement || window,
                n = t.offsetTop - this._element.offsetTop;
              if (s.scrollTo)
                return void s.scrollTo({ top: n, behavior: "smooth" });
              s.scrollTop = n;
            }
          }));
      }
      _getNewObserver() {
        const e = {
          root: this._rootElement,
          threshold: this._config.threshold,
          rootMargin: this._config.rootMargin,
        };
        return new IntersectionObserver((t) => this._observerCallback(t), e);
      }
      _observerCallback(e) {
        const t = (r) => this._targetLinks.get(`#${r.target.id}`),
          s = (r) => {
            (this._previousScrollData.visibleEntryTop = r.target.offsetTop),
              this._process(t(r));
          },
          n = (this._rootElement || document.documentElement).scrollTop,
          o = n >= this._previousScrollData.parentScrollTop;
        this._previousScrollData.parentScrollTop = n;
        for (const r of e) {
          if (!r.isIntersecting) {
            (this._activeTarget = null), this._clearActiveClass(t(r));
            continue;
          }
          const a =
            r.target.offsetTop >= this._previousScrollData.visibleEntryTop;
          if (o && a) {
            if ((s(r), !n)) return;
          } else o || a || s(r);
        }
      }
      _initializeTargetsAndObservables() {
        (this._targetLinks = new Map()), (this._observableSections = new Map());
        const e = b.find(vs, this._config.target);
        for (const t of e) {
          if (!t.hash || he(t)) continue;
          const s = b.findOne(t.hash, this._element);
          Ee(s) &&
            (this._targetLinks.set(t.hash, t),
            this._observableSections.set(t.hash, s));
        }
      }
      _process(e) {
        this._activeTarget !== e &&
          (this._clearActiveClass(this._config.target),
          (this._activeTarget = e),
          e.classList.add(Ve),
          this._activateParents(e),
          l.trigger(this._element, "activate.bs.scrollspy", {
            relatedTarget: e,
          }));
      }
      _activateParents(e) {
        if (e.classList.contains("dropdown-item"))
          b.findOne(".dropdown-toggle", e.closest(".dropdown")).classList.add(
            Ve
          );
        else
          for (const t of b.parents(e, ".nav, .list-group"))
            for (const s of b.prev(
              t,
              ".nav-link, .nav-item > .nav-link, .list-group-item"
            ))
              s.classList.add(Ve);
      }
      _clearActiveClass(e) {
        e.classList.remove(Ve);
        const t = b.find("[href].active", e);
        for (const s of t) s.classList.remove(Ve);
      }
      static jQueryInterface(e) {
        return this.each(function () {
          const t = Ke.getOrCreateInstance(this, e);
          if (typeof e == "string") {
            if (t[e] === void 0 || e.startsWith("_") || e === "constructor")
              throw new TypeError(`No method named "${e}"`);
            t[e]();
          }
        });
      }
    }
    l.on(window, "load.bs.scrollspy.data-api", () => {
      for (const i of b.find('[data-bs-spy="scroll"]'))
        Ke.getOrCreateInstance(i);
    }),
      K(Ke);
    const Rn = "ArrowLeft",
      ys = "ArrowRight",
      Wn = "ArrowUp",
      ws = "ArrowDown",
      ft = "active",
      As = "fade",
      Xt = "show",
      xs =
        '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
      Yt = `.nav-link:not(.dropdown-toggle), .list-group-item:not(.dropdown-toggle), [role="tab"]:not(.dropdown-toggle), ${xs}`;
    class Ae extends J {
      constructor(e) {
        super(e),
          (this._parent = this._element.closest(
            '.list-group, .nav, [role="tablist"]'
          )),
          this._parent &&
            (this._setInitialAttributes(this._parent, this._getChildren()),
            l.on(this._element, "keydown.bs.tab", (t) => this._keydown(t)));
      }
      static get NAME() {
        return "tab";
      }
      show() {
        const e = this._element;
        if (this._elemIsActive(e)) return;
        const t = this._getActiveElem(),
          s = t ? l.trigger(t, "hide.bs.tab", { relatedTarget: e }) : null;
        l.trigger(e, "show.bs.tab", { relatedTarget: t }).defaultPrevented ||
          (s && s.defaultPrevented) ||
          (this._deactivate(t, e), this._activate(e, t));
      }
      _activate(e, t) {
        e &&
          (e.classList.add(ft),
          this._activate(E(e)),
          this._queueCallback(
            () => {
              e.getAttribute("role") === "tab"
                ? (e.removeAttribute("tabindex"),
                  e.setAttribute("aria-selected", !0),
                  this._toggleDropDown(e, !0),
                  l.trigger(e, "shown.bs.tab", { relatedTarget: t }))
                : e.classList.add(Xt);
            },
            e,
            e.classList.contains(As)
          ));
      }
      _deactivate(e, t) {
        e &&
          (e.classList.remove(ft),
          e.blur(),
          this._deactivate(E(e)),
          this._queueCallback(
            () => {
              e.getAttribute("role") === "tab"
                ? (e.setAttribute("aria-selected", !1),
                  e.setAttribute("tabindex", "-1"),
                  this._toggleDropDown(e, !1),
                  l.trigger(e, "hidden.bs.tab", { relatedTarget: t }))
                : e.classList.remove(Xt);
            },
            e,
            e.classList.contains(As)
          ));
      }
      _keydown(e) {
        if (![Rn, ys, Wn, ws].includes(e.key)) return;
        e.stopPropagation(), e.preventDefault();
        const t = [ys, ws].includes(e.key),
          s = yt(
            this._getChildren().filter((n) => !he(n)),
            e.target,
            t,
            !0
          );
        s && (s.focus({ preventScroll: !0 }), Ae.getOrCreateInstance(s).show());
      }
      _getChildren() {
        return b.find(Yt, this._parent);
      }
      _getActiveElem() {
        return this._getChildren().find((e) => this._elemIsActive(e)) || null;
      }
      _setInitialAttributes(e, t) {
        this._setAttributeIfNotExists(e, "role", "tablist");
        for (const s of t) this._setInitialAttributesOnChild(s);
      }
      _setInitialAttributesOnChild(e) {
        e = this._getInnerElement(e);
        const t = this._elemIsActive(e),
          s = this._getOuterElement(e);
        e.setAttribute("aria-selected", t),
          s !== e && this._setAttributeIfNotExists(s, "role", "presentation"),
          t || e.setAttribute("tabindex", "-1"),
          this._setAttributeIfNotExists(e, "role", "tab"),
          this._setInitialAttributesOnTargetPanel(e);
      }
      _setInitialAttributesOnTargetPanel(e) {
        const t = E(e);
        t &&
          (this._setAttributeIfNotExists(t, "role", "tabpanel"),
          e.id &&
            this._setAttributeIfNotExists(t, "aria-labelledby", `#${e.id}`));
      }
      _toggleDropDown(e, t) {
        const s = this._getOuterElement(e);
        if (!s.classList.contains("dropdown")) return;
        const n = (o, r) => {
          const a = b.findOne(o, s);
          a && a.classList.toggle(r, t);
        };
        n(".dropdown-toggle", ft),
          n(".dropdown-menu", Xt),
          s.setAttribute("aria-expanded", t);
      }
      _setAttributeIfNotExists(e, t, s) {
        e.hasAttribute(t) || e.setAttribute(t, s);
      }
      _elemIsActive(e) {
        return e.classList.contains(ft);
      }
      _getInnerElement(e) {
        return e.matches(Yt) ? e : b.findOne(Yt, e);
      }
      _getOuterElement(e) {
        return e.closest(".nav-item, .list-group-item") || e;
      }
      static jQueryInterface(e) {
        return this.each(function () {
          const t = Ae.getOrCreateInstance(this);
          if (typeof e == "string") {
            if (t[e] === void 0 || e.startsWith("_") || e === "constructor")
              throw new TypeError(`No method named "${e}"`);
            t[e]();
          }
        });
      }
    }
    l.on(document, "click.bs.tab", xs, function (i) {
      ["A", "AREA"].includes(this.tagName) && i.preventDefault(),
        he(this) || Ae.getOrCreateInstance(this).show();
    }),
      l.on(window, "load.bs.tab", () => {
        for (const i of b.find(
          '.active[data-bs-toggle="tab"], .active[data-bs-toggle="pill"], .active[data-bs-toggle="list"]'
        ))
          Ae.getOrCreateInstance(i);
      }),
      K(Ae);
    const Es = "hide",
      pt = "show",
      mt = "showing",
      qn = { animation: "boolean", autohide: "boolean", delay: "number" },
      zn = { animation: !0, autohide: !0, delay: 5e3 };
    class Xe extends J {
      constructor(e, t) {
        super(e, t),
          (this._timeout = null),
          (this._hasMouseInteraction = !1),
          (this._hasKeyboardInteraction = !1),
          this._setListeners();
      }
      static get Default() {
        return zn;
      }
      static get DefaultType() {
        return qn;
      }
      static get NAME() {
        return "toast";
      }
      show() {
        l.trigger(this._element, "show.bs.toast").defaultPrevented ||
          (this._clearTimeout(),
          this._config.animation && this._element.classList.add("fade"),
          this._element.classList.remove(Es),
          $e(this._element),
          this._element.classList.add(pt, mt),
          this._queueCallback(
            () => {
              this._element.classList.remove(mt),
                l.trigger(this._element, "shown.bs.toast"),
                this._maybeScheduleHide();
            },
            this._element,
            this._config.animation
          ));
      }
      hide() {
        this.isShown() &&
          (l.trigger(this._element, "hide.bs.toast").defaultPrevented ||
            (this._element.classList.add(mt),
            this._queueCallback(
              () => {
                this._element.classList.add(Es),
                  this._element.classList.remove(mt, pt),
                  l.trigger(this._element, "hidden.bs.toast");
              },
              this._element,
              this._config.animation
            )));
      }
      dispose() {
        this._clearTimeout(),
          this.isShown() && this._element.classList.remove(pt),
          super.dispose();
      }
      isShown() {
        return this._element.classList.contains(pt);
      }
      _maybeScheduleHide() {
        this._config.autohide &&
          (this._hasMouseInteraction ||
            this._hasKeyboardInteraction ||
            (this._timeout = setTimeout(() => {
              this.hide();
            }, this._config.delay)));
      }
      _onInteraction(e, t) {
        switch (e.type) {
          case "mouseover":
          case "mouseout":
            this._hasMouseInteraction = t;
            break;
          case "focusin":
          case "focusout":
            this._hasKeyboardInteraction = t;
        }
        if (t) return void this._clearTimeout();
        const s = e.relatedTarget;
        this._element === s ||
          this._element.contains(s) ||
          this._maybeScheduleHide();
      }
      _setListeners() {
        l.on(this._element, "mouseover.bs.toast", (e) =>
          this._onInteraction(e, !0)
        ),
          l.on(this._element, "mouseout.bs.toast", (e) =>
            this._onInteraction(e, !1)
          ),
          l.on(this._element, "focusin.bs.toast", (e) =>
            this._onInteraction(e, !0)
          ),
          l.on(this._element, "focusout.bs.toast", (e) =>
            this._onInteraction(e, !1)
          );
      }
      _clearTimeout() {
        clearTimeout(this._timeout), (this._timeout = null);
      }
      static jQueryInterface(e) {
        return this.each(function () {
          const t = Xe.getOrCreateInstance(this, e);
          if (typeof e == "string") {
            if (t[e] === void 0) throw new TypeError(`No method named "${e}"`);
            t[e](this);
          }
        });
      }
    }
    return (
      Qe(Xe),
      K(Xe),
      {
        Alert: Be,
        Button: Fe,
        Carousel: Oe,
        Collapse: ke,
        Dropdown: Z,
        Modal: ye,
        Offcanvas: de,
        Popover: ht,
        ScrollSpy: Ke,
        Tab: Ae,
        Toast: Xe,
        Tooltip: we,
      }
    );
  });
})(eo);
const to = "https://nf-api.onrender.com",
  io = "/api/v1",
  so = "/auction",
  no = `${to}${io}${so}`,
  oo = "/profiles",
  ao = "/auth/login",
  lo = "/auth/register",
  co = "/listings/",
  uo = "/listings",
  ho = "?_seller=true&_bids=true",
  fo = "?sort=created&sortOrder=desc&_active=true&_seller=true&_bids=true";
function po(_, N, $) {
  const j = new Headers();
  j.append("Authorization", `Bearer ${N}`),
    j.append("Content-Type", "application/json");
  const I = { method: "GET", headers: j };
  fetch(`${no}${oo}/${$}?_listings=true`, I)
    .then((E) => E.json())
    .then((E) => {
      _(E, $);
    })
    .catch((E) => console.log("error", E));
}
const mo = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  },
  ro = localStorage.getItem("token"),
  go = localStorage.getItem("username");
document.querySelector("#userNav");
function _o(_) {
  return {
    createDate: new Date(_.created),
    updateDate: new Date(_.updated),
    endDate: new Date(_.endsAt),
  };
}
const Hs = new Headers();
Hs.append("Authorization", `Bearer ${ro}`);
Hs.append("Content-Type", "application/json");
const bo = new RegExp(/[^\s]+(.*?).(jpg|jpeg|png|gif|JPG|JPEG|PNG|GIF)$/),
  vo = "https://dummyimage.com/600x400/000/fff.png&text=No+Images+Available",
  yo = `
    <form action="" class="row g-3" id="loginForm">
      <div class="card mb-2">
        <div class="card-body">
          <div class="">
              <label for="userEmail"
                  class="form-label">Email</label>
              <input type="email" class="form-control"
                  id="userEmail">
          </div>
          <div class="">
              <label for="userPassword"
                  class="form-label">Password</label>
              <input type="password" class="form-control"
                  id="userPassword">
          </div>
          <div class="col-md-6 pt-1">
              <button type="button" class="btn btn-info mt-2"
              id="loginBtn">Login</button>
          </div>
        </div>
      </div>
    </form>`,
  wo = `
  <form action="" class="row g-3" id="registerForm">
  <div class="card mb-2">
    <div class="card-body">
      <div class="">
          <label for="newUserName"
              class="form-label">Username (Case sensitive)</label>
          <input type="text" class="form-control"
              id="newUserName">
      </div>
      <div class="">
          <label for="newUserEmail"
              class="form-label">Email</label>
          <input type="email" class="form-control"
              id="newUserEmail" pattern="^[w-.]+@(stud.)?noroff.no$">
      </div>
      <div class="">
          <label for="userPassword"
              class="form-label">Password (Case sensitive)</label>
          <input type="password" class="form-control"
              id="newUserPassword">
      </div>
      <div class="">
          <label for="repeatPassword"
              class="form-label">Repeat Password</label>
          <input type="password" class="form-control"
              id="repeatPassword">
      </div>
      <div class="">
          <label for="avatar" class="form-label">Profile
              Avatar</label>
          <input type="url" class="my-3" name="avatar" id="newUserAvatar" placeholder="URL">
      </div>
      <div class="col-md-6">
        <button type="button" class="btn btn-info"
        id="registerBtn">Create Profile</button>
        </div>
        </div>
      </div>
  </form>`,
  Ao = `
    <form action="" class="row g-3 bg-white"
    id="listingForm">
    <div class="mb-3">
      <div>
        <label for="listingName"
          class="form-label">Title</label>
        <input type="text" class="form-control"
          id="listingTitle" placeholder="">
      </div>
      <div>
        <span class="text-muted helpText">Short
          description of
          the item.</span>
      </div>
    </div>
    <div class="mb-3">
      <div><label for="itemDescription"
          class="form-label">Description</label>
        <textarea class="form-control"
          id="itemDescription" rows="3"
          placeholder=""></textarea>
      </div>
      <div>
        <span class="text-muted helpText">Please
          describe your item in full.</span>
      </div>
    </div>
    <div class="mb-3">
      <div>
        <label for="itemTags"
          class="form-label">Tags</label>
        <input type="text" class="form-control"
          id="itemTags" placeholder="Tags">
      </div>
      <div>
        <span class="text-muted helpText">Please
          use relevant tags for the item.</span>
      </div>
    </div>
    <div class="mb-3">
      <div>
        <label for="endDate"
          class="form-label">Auction
          end  </label>
        <input type="datetime-local" name="endDate"
          id="endDate">
      </div>
      <div>
        <span class="text-muted helpText">Please
          set desired end date for the auction.</span>
      </div>
    </div>
    <div class="mb-3">
      <div><label for="listingMedia"
          class="form-label">Image URLs(Not
          Required)</label>
        <input class="form-control" type="url"
          id="listingMedia" multiple>
      </div>
      <div>
        <span class="text-muted helpText">For multiple
          images use comma (,) and a space between
          URLs.</span>
      </div>
    </div>
    <div class="mb-3">
      <div><button type="button" class="btn btn-info"
          id="publishListing">Publish Listing</button>
      </div>
      <div>
        <span class="text-muted helpText">Please
          check your listing to see everything is
          correct.</span>
      </div>
    </div>
    </form>`;
function xo(_, N) {
  return `
  <section class="vh-50 bg-light">
    <div class="container py-5 h-100">
      <div
        class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-md-12 col-xl-4">
          <div class="card rounded-3" >
            <div class="card-body text-center">
              <div class="mt-3 mb-4">
                <img src="${_.avatar}"
                  class="rounded-circle img-fluid profileImg" 
                   />
              </div>
              <h4 class="mb-2">${N}</h4>
              <button class="btn btn-info" type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseExample"
                aria-expanded="false"
                aria-controls="collapseExample">
                Change Avatar URL
              </button>
              <div class="collapse mt-2" id="collapseExample">
                <div class="card card-body">
                  <form>
                    <label for="avatar"
                      class="form-label"></label>
                    <input type="url" name="avatar"
                      id="newAvatarURL" placeholder="URL">
                    <button
                      class="btn btn-light btn-outline-primary"
                      id="avatarUrlBtn">Change</button>
                  </form>
                </div>
              </div>
              <div class=" d-flex justify-content-evenly
                      text-center mt-5 mb-2">
                <div>
                  <p class="mb-2 h5">Credits</p>
                  <p class="text-muted mb-0">
                    ${_.credits}</p>
                </div>
                <div class="px-3">
                  <p class="mb-2 h5">Listings</p>
                  <p class="text-muted mb-0">
                    ${_._count.listings}
                  </p>
                </div>
                <div>
                  <p class="mb-2 h5">Won</p>
                  <p class="text-muted mb-0">
                    ${_.wins.length}</p>
                </div>
              </div>
              <div><button class="btn btn-danger "
              id="logoutBtn">Logout</button></div> 
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="album container py-5 " >
  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3" id="listingsContainer">
  </div>
  </section>`;
}
function Eo(_, N) {
  return `  
<li class="nav-item px-1">
            <span>Hello, <span class="fw-bold">${N}</span>!
            </span>
          </li>
          <li class="nav-item px-1">
            <span>Credits ${_.credits}</span>
          </li>
          <li class="nav-item px-1">
            <span>Listings
              ${_._count.listings}</span>
          </li>
          <li class="nav-item px-1">
            <span>Won
              ${_.wins.length}</span>
          </li>
          <li class="nav-item px-1">
          <button class="btn btn-danger btn-sm"
              id="logoutBtn">Logout</button>
          </li>`;
}
function To(_, N, $, j, I, E, oe) {
  return `  
                <div class="col">
                    <div class="card shadow-sm">
                        <a href="${
                          oe ? "." : ""
                        }./listing/index.html?listings=${_.id}"><img
                                src="${_.media[0]}"
                                class="img-fluid img-thumbnail imgForm"
                                alt="..."></a>                        
                        <div class="card-body">
                        <h5 class="card-title text-truncate">${
                          _.title
                        }</h5>                            
                            <p class="card-text text-truncate"
                                id='itemDscr${E}'></p>           
                                    <p
                                        class=" mb-0">
                                        <span class="fw-bold">Ends at</span>:
                                        ${j.toLocaleDateString("en-US", I)}
                                    </p>
                                    ${
                                      _._count
                                        ? `<p
                                        class="">
                                        <span class="fw-bold">Number of bids</span>:
                                        <span class="badge text-bg-info">${_._count.bids}</span>
                                    </p>`
                                        : ""
                                    }
                            <div
                                class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                    <a href="${
                                      oe ? "." : ""
                                    }./listing/index.html?listings=${_.id}"
                                        class="card-link"><button
                                            type="button"
                                            class="btn btn-sm btn-outline-secondary">View</button></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
}
function Co(_, N, $, j) {
  return `
  <div class="container py-5">
    <div class="row justify-content-center">
      <div class="col-md-8 col-lg-8 col-xl-8 ">
        <div class="card text-black">
          <div class="text-center">
            <h3 class="card-title">
              ${_.title}</h3>
          </div>
          ${
            _.media.length > 1
              ? $s(_, "listingCarousel")
              : `<img src="${_.media[0]}"
            class="card-img-top carouselImg px-1 rounded-3"
            alt="" data-bs-toggle="modal"
            data-bs-target="#exampleModal" />`
          }
          
          <div class="card-body mt-1 mb-1">
          <div class="d-flex align-items-center">                
                <div class="">
                  <img src="${_.seller.avatar}"
                  class="img-fluid rounded-3 sellerImg rounded-circle "
                  alt="profile image for ${_.seller.name}">
                </div>
                <div class="ms-2">
                  <span class="fw-bold ">Seller</span> :<br> ${_.seller.name}
                </div>
                <div class="ms-3 align-self-start">
                <span class="fw-bold">Wins</span>  : ${_.seller.wins.length}
                </div>
              </div>
            <div>
              <p class="text-muted mb-4">
                ${_.tags}
              </p>
              <p>${_.description}
              </p>
              
              <div class="">
                <p>
                  <span class="fw-semibold">Auction
                    ends</span> :
                  ${N.toLocaleDateString("en-US", $)}
                </p>
              </div>
              <div class="">
                <p>
                  <span class="fw-semibold">Number of bids :
                    ${_._count.bids}</span>
                </p>
              </div>
              <div class="">
                <p>
                  ${
                    _.bids.length > 0
                      ? `
                  <span class="fw-semibold">Highest
                    bid</span> :
                  <span class="fw-bold">${_.bids.at(-1).amount}</span>
                  `
                      : ""
                  }
                </p>
              </div>
              <div class="">
                <form class="row">
                  <div class="row align-items-center">
                    <div class="col">
                      <label for="userBid"
                        class="form-label mt-1"><span
                          class="fw-semibold">Your
                          bid</span> :
                      </label>
                    </div>
                    <div class="col">
                      <input type="number"
                        class="form-control" id="userBid"
                        placeholder="0">
                    </div>
                    <div class="col">
                      <button type="submit"
                        class="btn btn-info"
                        id="bidBtn">Place
                        Bid</button>
                    </div>
                  </div>
                </form>
              </div>
              <div class=" mt-1  text-center pt-5">
                <h4 class="mt-2 fw-semibold ">Bid
                  Timeline</h4>
                <hr>
                <div
                  class="container-fluid row row-cols-auto m-1 justify-content-center"
                  id="bidsContainer">
                  ${j}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div>
    <div class="modal fade" id="exampleModal" tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true">
      <div class="modal-dialog modal-fullscreen">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5"
              id="exampleModalLabel">Modal title</h1>
            <button type="button" class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"></button>
          </div>
          <div class="modal-body">
            ${
              _.media.length > 1
                ? $s(_, "modalImg", !0)
                : `<img src="${_.media[0]}"
              class="card-img-top modalImg px-1 rounded-3"
              alt="" />`
            }
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary"
              data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>`;
}
function $s(_, N, $) {
  return `
  <div id="${N}"
                      class="carousel slide"
                      data-bs-ride="carousel">
                      <div class="carousel-inner">
                          ${_.media
                            .map(
                              (j, I) => `<div
                              class="carousel-item ${I == 0 ? "active" : ""}">
                              <img src="${j}"
                                  class="card-img-top ${
                                    $ ? "modalImg" : "carouselImg"
                                  } px-1 rounded-3"
                                  alt="" ${
                                    $
                                      ? ""
                                      : 'data-bs-toggle="modal" data-bs-target="#exampleModal"'
                                  }/>
                          </div>`
                            )
                            .join("")}
                      </div>
                      <button class="carousel-control-prev"
                          type="button"
                          data-bs-target="#${N}"
                          data-bs-slide="prev">
                          <span
                              class="carousel-control-prev-icon border border-dark"
                              aria-hidden="true"></span>
                          <span
                              class="visually-hidden">Previous</span>
                      </button>
                      <button class="carousel-control-next"
                          type="button"
                          data-bs-target="#${N}"
                          data-bs-slide="next">
                          <span
                              class="carousel-control-next-icon border border-dark"
                              aria-hidden="true"></span>
                          <span
                              class="visually-hidden">Next</span>
                      </button>
                  </div>`;
}
function Oo() {
  return `
  <div class="container d-flex justify-content-center">
  <div class="card mb-3 col-lg-6">
    <div class="row g-0">
      <div
        class="col-md-4 d-flex align-items-center justify-content-center py-2">
        <img
          src="https://st3.depositphotos.com/1767687/16607/v/450/depositphotos_166074422-stock-illustration-default-avatar-profile-icon-grey.jpg"
          class="img-fluid rounded-circle profileImg"
          alt="default profile image for guest user">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">Hello!</h5>
          <p class="card-text">It seems that you are not
            logged in. Please log in to make bids or make
            an
            account by pressing the button
            underneath.</p>
          <div class="">
            <a href="./login/index.html"><button
                class="btn btn-primary"
                id="profileBtn">Login/Register</button></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`;
}
export {
  no as A,
  co as a,
  fo as b,
  Oo as c,
  vo as d,
  _o as e,
  mo as f,
  ho as g,
  Hs as h,
  To as i,
  lo as j,
  ao as k,
  yo as l,
  bo as m,
  Eo as n,
  xo as o,
  po as p,
  Ao as q,
  wo as r,
  Co as s,
  ro as t,
  go as u,
  uo as v,
};

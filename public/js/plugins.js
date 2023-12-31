! function(e, t) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).bootstrap = t()
}(this, function() {
  "use strict";
  const o = 1e3,
      a = "transitionend",
      i = t => {
          let i = t.getAttribute("data-bs-target");
          if (!i || "#" === i) {
              let e = t.getAttribute("href");
              if (!e || !e.includes("#") && !e.startsWith(".")) return null;
              e.includes("#") && !e.startsWith("#") && (e = "#" + e.split("#")[1]), i = e && "#" !== e ? e.trim() : null
          }
          return i
      },
      l = e => {
          e = i(e);
          return e && document.querySelector(e) ? e : null
      },
      c = e => {
          e = i(e);
          return e ? document.querySelector(e) : null
      },
      d = e => {
          e.dispatchEvent(new Event(a))
      },
      h = e => !(!e || "object" != typeof e) && void 0 !== (e = void 0 !== e.jquery ? e[0] : e).nodeType,
      n = e => h(e) ? e.jquery ? e[0] : e : "string" == typeof e && 0 < e.length ? document.querySelector(e) : null,
      p = (s, n, r) => {
          Object.keys(r).forEach(e => {
              var t = r[e],
                  i = n[e],
                  i = i && h(i) ? "element" : null == (i = i) ? "" + i : {}.toString.call(i).match(/\s([a-z]+)/i)[1].toLowerCase();
              if (!new RegExp(t).test(i)) throw new TypeError(s.toUpperCase() + `: Option "${e}" provided type "${i}" but expected type "${t}".`)
          })
      },
      m = e => !(!h(e) || 0 === e.getClientRects().length) && "visible" === getComputedStyle(e).getPropertyValue("visibility"),
      f = e => !e || e.nodeType !== Node.ELEMENT_NODE || (!!e.classList.contains("disabled") || (void 0 !== e.disabled ? e.disabled : e.hasAttribute("disabled") && "false" !== e.getAttribute("disabled"))),
      g = e => {
          return document.documentElement.attachShadow ? "function" == typeof e.getRootNode ? (t = e.getRootNode()) instanceof ShadowRoot ? t : null : e instanceof ShadowRoot ? e : e.parentNode ? g(e.parentNode) : null : null;
          var t
      },
      y = () => {},
      b = e => {
          e.offsetHeight
      },
      w = () => {
          var e = window["jQuery"];
          return e && !document.body.hasAttribute("data-bs-no-jquery") ? e : null
      },
      x = [],
      s = () => "rtl" === document.documentElement.dir;
  var T = s => {
      var e;
      e = () => {
          const e = w();
          if (e) {
              const t = s.NAME,
                  i = e.fn[t];
              e.fn[t] = s.jQueryInterface, e.fn[t].Constructor = s, e.fn[t].noConflict = () => (e.fn[t] = i, s.jQueryInterface)
          }
      }, "loading" === document.readyState ? (x.length || document.addEventListener("DOMContentLoaded", () => {
          x.forEach(e => e())
      }), x.push(e)) : e()
  };
  const E = e => {
          "function" == typeof e && e()
      },
      _ = (i, s, e = !0) => {
          if (e) {
              e = (e => {
                  if (!e) return 0;
                  let {
                      transitionDuration: t,
                      transitionDelay: i
                  } = window.getComputedStyle(e);
                  var e = Number.parseFloat(t),
                      s = Number.parseFloat(i);
                  return e || s ? (t = t.split(",")[0], i = i.split(",")[0], (Number.parseFloat(t) + Number.parseFloat(i)) * o) : 0
              })(s) + 5;
              let t = !1;
              const n = ({
                  target: e
              }) => {
                  e === s && (t = !0, s.removeEventListener(a, n), E(i))
              };
              s.addEventListener(a, n), setTimeout(() => {
                  t || d(s)
              }, e)
          } else E(i)
      },
      S = (e, t, i, s) => {
          let n = e.indexOf(t);
          if (-1 === n) return e[!i && s ? e.length - 1 : 0];
          t = e.length;
          return n += i ? 1 : -1, s && (n = (n + t) % t), e[Math.max(0, Math.min(n, t - 1))]
      },
      C = /[^.]*(?=\..*)\.|.*/,
      O = /\..*/,
      I = /::\d+$/,
      L = {};
  let $ = 1;
  const z = {
          mouseenter: "mouseover",
          mouseleave: "mouseout"
      },
      N = /^(mouseenter|mouseleave)/i,
      D = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);

  function j(e, t) {
      return t && t + "::" + $++ || e.uidEvent || $++
  }

  function F(e) {
      var t = j(e);
      return e.uidEvent = t, L[t] = L[t] || {}, L[t]
  }

  function H(i, s, n = null) {
      var r = Object.keys(i);
      for (let e = 0, t = r.length; e < t; e++) {
          var o = i[r[e]];
          if (o.originalHandler === s && o.delegationSelector === n) return o
      }
      return null
  }

  function q(e, t, i) {
      var s = "string" == typeof t,
          i = s ? i : t;
      let n = W(e);
      return D.has(n) || (n = e), [s, i, n]
  }

  function B(e, t, i, s, d) {
      if ("string" == typeof t && e) {
          i || (i = s, s = null), N.test(t) && (n = t => function(e) {
              if (!e.relatedTarget || e.relatedTarget !== e.delegateTarget && !e.delegateTarget.contains(e.relatedTarget)) return t.call(this, e)
          }, s ? s = n(s) : i = n(i));
          var [n, r, o] = q(t, i, s);
          const f = F(e),
              g = f[o] || (f[o] = {}),
              l = H(g, r, n ? i : null);
          if (l) l.oneOff = l.oneOff && d;
          else {
              var a, u, h, p, m, t = j(r, t.replace(C, ""));
              const c = n ? (h = e, p = i, m = s, function i(s) {
                  var n = h.querySelectorAll(p);
                  for (let t = s["target"]; t && t !== this; t = t.parentNode)
                      for (let e = n.length; e--;)
                          if (n[e] === t) return s.delegateTarget = t, i.oneOff && v.off(h, s.type, p, m), m.apply(t, [s]);
                  return null
              }) : (a = e, u = i, function e(t) {
                  return t.delegateTarget = a, e.oneOff && v.off(a, t.type, u), u.apply(a, [t])
              });
              c.delegationSelector = n ? i : null, c.originalHandler = r, c.oneOff = d, c.uidEvent = t, g[t] = c, e.addEventListener(o, c, n)
          }
      }
  }

  function R(e, t, i, s, n) {
      s = H(t[i], s, n);
      s && (e.removeEventListener(i, s, Boolean(n)), delete t[i][s.uidEvent])
  }

  function W(e) {
      return e = e.replace(O, ""), z[e] || e
  }
  const v = {
          on(e, t, i, s) {
              B(e, t, i, s, !1)
          },
          one(e, t, i, s) {
              B(e, t, i, s, !0)
          },
          off(o, a, e, t) {
              if ("string" == typeof a && o) {
                  const [i, s, n] = q(a, e, t), r = n !== a, l = F(o);
                  t = a.startsWith(".");
                  if (void 0 !== s) return l && l[n] ? void R(o, l, n, s, i ? e : null) : void 0;
                  t && Object.keys(l).forEach(e => {
                      {
                          var t = o,
                              i = l,
                              s = e,
                              n = a.slice(1);
                          const r = i[s] || {};
                          return void Object.keys(r).forEach(e => {
                              e.includes(n) && (e = r[e], R(t, i, s, e.originalHandler, e.delegationSelector))
                          })
                      }
                  });
                  const c = l[n] || {};
                  Object.keys(c).forEach(e => {
                      var t = e.replace(I, "");
                      r && !a.includes(t) || (t = c[e], R(o, l, n, t.originalHandler, t.delegationSelector))
                  })
              }
          },
          trigger(e, t, i) {
              if ("string" != typeof t || !e) return null;
              const s = w();
              var n = W(t),
                  d = t !== n,
                  u = D.has(n);
              let r, o = !0,
                  a = !0,
                  l = !1,
                  c = null;
              return d && s && (r = s.Event(t, i), s(e).trigger(r), o = !r.isPropagationStopped(), a = !r.isImmediatePropagationStopped(), l = r.isDefaultPrevented()), u ? (c = document.createEvent("HTMLEvents"), c.initEvent(n, o, !0)) : c = new CustomEvent(t, {
                  bubbles: o,
                  cancelable: !0
              }), void 0 !== i && Object.keys(i).forEach(e => {
                  Object.defineProperty(c, e, {
                      get() {
                          return i[e]
                      }
                  })
              }), l && c.preventDefault(), a && e.dispatchEvent(c), c.defaultPrevented && void 0 !== r && r.preventDefault(), c
          }
      },
      Y = new Map,
      X = {
          set(e, t, i) {
              Y.has(e) || Y.set(e, new Map);
              const s = Y.get(e);
              s.has(t) || 0 === s.size ? s.set(t, i) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(s.keys())[0]}.`)
          },
          get(e, t) {
              return Y.has(e) && Y.get(e).get(t) || null
          },
          remove(e, t) {
              if (Y.has(e)) {
                  const i = Y.get(e);
                  i.delete(t), 0 === i.size && Y.delete(e)
              }
          }
      };
  class V {
      constructor(e) {
          (e = n(e)) && (this._element = e, X.set(this._element, this.constructor.DATA_KEY, this))
      }
      dispose() {
          X.remove(this._element, this.constructor.DATA_KEY), v.off(this._element, this.constructor.EVENT_KEY), Object.getOwnPropertyNames(this).forEach(e => {
              this[e] = null
          })
      }
      _queueCallback(e, t, i = !0) {
          _(e, t, i)
      }
      static getInstance(e) {
          return X.get(n(e), this.DATA_KEY)
      }
      static getOrCreateInstance(e, t = {}) {
          return this.getInstance(e) || new this(e, "object" == typeof t ? t : null)
      }
      static get VERSION() {
          return "5.1.3"
      }
      static get NAME() {
          throw new Error('You have to implement the static method "NAME", for each component!')
      }
      static get DATA_KEY() {
          return "bs." + this.NAME
      }
      static get EVENT_KEY() {
          return "." + this.DATA_KEY
      }
  }
  var G = (i, s = "hide") => {
      var e = "click.dismiss" + i.EVENT_KEY;
      const n = i.NAME;
      v.on(document, e, `[data-bs-dismiss="${n}"]`, function(e) {
          if (["A", "AREA"].includes(this.tagName) && e.preventDefault(), !f(this)) {
              e = c(this) || this.closest("." + n);
              const t = i.getOrCreateInstance(e);
              t[s]()
          }
      })
  };
  class U extends V {
      static get NAME() {
          return "alert"
      }
      close() {
          var e;
          v.trigger(this._element, "close.bs.alert").defaultPrevented || (this._element.classList.remove("show"), e = this._element.classList.contains("fade"), this._queueCallback(() => this._destroyElement(), this._element, e))
      }
      _destroyElement() {
          this._element.remove(), v.trigger(this._element, "closed.bs.alert"), this.dispose()
      }
      static jQueryInterface(t) {
          return this.each(function() {
              const e = U.getOrCreateInstance(this);
              if ("string" == typeof t) {
                  if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                  e[t](this)
              }
          })
      }
  }
  G(U, "close"), T(U);
  const Q = '[data-bs-toggle="button"]';
  class K extends V {
      static get NAME() {
          return "button"
      }
      toggle() {
          this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"))
      }
      static jQueryInterface(t) {
          return this.each(function() {
              const e = K.getOrCreateInstance(this);
              "toggle" === t && e[t]()
          })
      }
  }

  function Z(e) {
      return "true" === e || "false" !== e && (e === Number(e).toString() ? Number(e) : "" === e || "null" === e ? null : e)
  }

  function J(e) {
      return e.replace(/[A-Z]/g, e => "-" + e.toLowerCase())
  }
  v.on(document, "click.bs.button.data-api", Q, e => {
      e.preventDefault();
      e = e.target.closest(Q);
      const t = K.getOrCreateInstance(e);
      t.toggle()
  }), T(K);
  const r = {
          setDataAttribute(e, t, i) {
              e.setAttribute("data-bs-" + J(t), i)
          },
          removeDataAttribute(e, t) {
              e.removeAttribute("data-bs-" + J(t))
          },
          getDataAttributes(i) {
              if (!i) return {};
              const s = {};
              return Object.keys(i.dataset).filter(e => e.startsWith("bs")).forEach(e => {
                  let t = e.replace(/^bs/, "");
                  t = t.charAt(0).toLowerCase() + t.slice(1, t.length), s[t] = Z(i.dataset[e])
              }), s
          },
          getDataAttribute(e, t) {
              return Z(e.getAttribute("data-bs-" + J(t)))
          },
          offset(e) {
              e = e.getBoundingClientRect();
              return {
                  top: e.top + window.pageYOffset,
                  left: e.left + window.pageXOffset
              }
          },
          position(e) {
              return {
                  top: e.offsetTop,
                  left: e.offsetLeft
              }
          }
      },
      u = {
          find(e, t = document.documentElement) {
              return [].concat(...Element.prototype.querySelectorAll.call(t, e))
          },
          findOne(e, t = document.documentElement) {
              return Element.prototype.querySelector.call(t, e)
          },
          children(e, t) {
              return [].concat(...e.children).filter(e => e.matches(t))
          },
          parents(e, t) {
              const i = [];
              let s = e.parentNode;
              for (; s && s.nodeType === Node.ELEMENT_NODE && 3 !== s.nodeType;) s.matches(t) && i.push(s), s = s.parentNode;
              return i
          },
          prev(e, t) {
              let i = e.previousElementSibling;
              for (; i;) {
                  if (i.matches(t)) return [i];
                  i = i.previousElementSibling
              }
              return []
          },
          next(e, t) {
              let i = e.nextElementSibling;
              for (; i;) {
                  if (i.matches(t)) return [i];
                  i = i.nextElementSibling
              }
              return []
          },
          focusableChildren(e) {
              var t = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map(e => e + ':not([tabindex^="-"])').join(", ");
              return this.find(t, e).filter(e => !f(e) && m(e))
          }
      },
      ee = "carousel";
  var te = ".bs.carousel";
  const ie = {
          interval: 5e3,
          keyboard: !0,
          slide: !1,
          pause: "hover",
          wrap: !0,
          touch: !0
      },
      se = {
          interval: "(number|boolean)",
          keyboard: "boolean",
          slide: "(boolean|string)",
          pause: "(string|boolean)",
          wrap: "boolean",
          touch: "boolean"
      },
      ne = "next",
      re = "prev",
      oe = "left",
      ae = "right",
      le = {
          ArrowLeft: ae,
          ArrowRight: oe
      },
      ce = "slid" + te;
  const de = "active",
      ue = ".active.carousel-item";
  class he extends V {
      constructor(e, t) {
          super(e), this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(t), this._indicatorsElement = u.findOne(".carousel-indicators", this._element), this._touchSupported = "ontouchstart" in document.documentElement || 0 < navigator.maxTouchPoints, this._pointerEvent = Boolean(window.PointerEvent), this._addEventListeners()
      }
      static get Default() {
          return ie
      }
      static get NAME() {
          return ee
      }
      next() {
          this._slide(ne)
      }
      nextWhenVisible() {
          !document.hidden && m(this._element) && this.next()
      }
      prev() {
          this._slide(re)
      }
      pause(e) {
          e || (this._isPaused = !0), u.findOne(".carousel-item-next, .carousel-item-prev", this._element) && (d(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
      }
      cycle(e) {
          e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config && this._config.interval && !this._isPaused && (this._updateInterval(), this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
      }
      to(e) {
          this._activeElement = u.findOne(ue, this._element);
          var t = this._getItemIndex(this._activeElement);
          if (!(e > this._items.length - 1 || e < 0))
              if (this._isSliding) v.one(this._element, ce, () => this.to(e));
              else {
                  if (t === e) return this.pause(), void this.cycle();
                  t = t < e ? ne : re;
                  this._slide(t, this._items[e])
              }
      }
      _getConfig(e) {
          return e = {
              ...ie,
              ...r.getDataAttributes(this._element),
              ..."object" == typeof e ? e : {}
          }, p(ee, e, se), e
      }
      _handleSwipe() {
          var e = Math.abs(this.touchDeltaX);
          e <= 40 || (e = e / this.touchDeltaX, this.touchDeltaX = 0, e && this._slide(0 < e ? ae : oe))
      }
      _addEventListeners() {
          this._config.keyboard && v.on(this._element, "keydown.bs.carousel", e => this._keydown(e)), "hover" === this._config.pause && (v.on(this._element, "mouseenter.bs.carousel", e => this.pause(e)), v.on(this._element, "mouseleave.bs.carousel", e => this.cycle(e))), this._config.touch && this._touchSupported && this._addTouchEventListeners()
      }
      _addTouchEventListeners() {
          const t = e => this._pointerEvent && ("pen" === e.pointerType || "touch" === e.pointerType),
              i = e => {
                  t(e) ? this.touchStartX = e.clientX : this._pointerEvent || (this.touchStartX = e.touches[0].clientX)
              },
              s = e => {
                  this.touchDeltaX = e.touches && 1 < e.touches.length ? 0 : e.touches[0].clientX - this.touchStartX
              },
              n = e => {
                  t(e) && (this.touchDeltaX = e.clientX - this.touchStartX), this._handleSwipe(), "hover" === this._config.pause && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout(e => this.cycle(e), 500 + this._config.interval))
              };
          u.find(".carousel-item img", this._element).forEach(e => {
              v.on(e, "dragstart.bs.carousel", e => e.preventDefault())
          }), this._pointerEvent ? (v.on(this._element, "pointerdown.bs.carousel", e => i(e)), v.on(this._element, "pointerup.bs.carousel", e => n(e)), this._element.classList.add("pointer-event")) : (v.on(this._element, "touchstart.bs.carousel", e => i(e)), v.on(this._element, "touchmove.bs.carousel", e => s(e)), v.on(this._element, "touchend.bs.carousel", e => n(e)))
      }
      _keydown(e) {
          var t;
          /input|textarea/i.test(e.target.tagName) || (t = le[e.key]) && (e.preventDefault(), this._slide(t))
      }
      _getItemIndex(e) {
          return this._items = e && e.parentNode ? u.find(".carousel-item", e.parentNode) : [], this._items.indexOf(e)
      }
      _getItemByOrder(e, t) {
          e = e === ne;
          return S(this._items, t, e, this._config.wrap)
      }
      _triggerSlideEvent(e, t) {
          var i = this._getItemIndex(e),
              s = this._getItemIndex(u.findOne(ue, this._element));
          return v.trigger(this._element, "slide.bs.carousel", {
              relatedTarget: e,
              direction: t,
              from: s,
              to: i
          })
      }
      _setActiveIndicatorElement(t) {
          if (this._indicatorsElement) {
              const e = u.findOne(".active", this._indicatorsElement),
                  i = (e.classList.remove(de), e.removeAttribute("aria-current"), u.find("[data-bs-target]", this._indicatorsElement));
              for (let e = 0; e < i.length; e++)
                  if (Number.parseInt(i[e].getAttribute("data-bs-slide-to"), 10) === this._getItemIndex(t)) {
                      i[e].classList.add(de), i[e].setAttribute("aria-current", "true");
                      break
                  }
          }
      }
      _updateInterval() {
          const e = this._activeElement || u.findOne(ue, this._element);
          var t;
          e && ((t = Number.parseInt(e.getAttribute("data-bs-interval"), 10)) ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = t) : this._config.interval = this._config.defaultInterval || this._config.interval)
      }
      _slide(e, t) {
          e = this._directionToOrder(e);
          const i = u.findOne(ue, this._element),
              s = this._getItemIndex(i),
              n = t || this._getItemByOrder(e, i),
              d = this._getItemIndex(n);
          var t = Boolean(this._interval),
              r = e === ne;
          const o = r ? "carousel-item-start" : "carousel-item-end",
              a = r ? "carousel-item-next" : "carousel-item-prev",
              l = this._orderToDirection(e);
          if (n && n.classList.contains(de)) this._isSliding = !1;
          else if (!this._isSliding) {
              r = this._triggerSlideEvent(n, l);
              if (!r.defaultPrevented && i && n) {
                  this._isSliding = !0, t && this.pause(), this._setActiveIndicatorElement(n), this._activeElement = n;
                  const c = () => {
                      v.trigger(this._element, ce, {
                          relatedTarget: n,
                          direction: l,
                          from: s,
                          to: d
                      })
                  };
                  this._element.classList.contains("slide") ? (n.classList.add(a), b(n), i.classList.add(o), n.classList.add(o), this._queueCallback(() => {
                      n.classList.remove(o, a), n.classList.add(de), i.classList.remove(de, a, o), this._isSliding = !1, setTimeout(c, 0)
                  }, i, !0)) : (i.classList.remove(de), n.classList.add(de), this._isSliding = !1, c()), t && this.cycle()
              }
          }
      }
      _directionToOrder(e) {
          return [ae, oe].includes(e) ? s() ? e === oe ? re : ne : e === oe ? ne : re : e
      }
      _orderToDirection(e) {
          return [ne, re].includes(e) ? s() ? e === re ? oe : ae : e === re ? ae : oe : e
      }
      static carouselInterface(e, t) {
          const i = he.getOrCreateInstance(e, t);
          let s = i["_config"];
          "object" == typeof t && (s = {
              ...s,
              ...t
          });
          e = "string" == typeof t ? t : s.slide;
          if ("number" == typeof t) i.to(t);
          else if ("string" == typeof e) {
              if (void 0 === i[e]) throw new TypeError(`No method named "${e}"`);
              i[e]()
          } else s.interval && s.ride && (i.pause(), i.cycle())
      }
      static jQueryInterface(e) {
          return this.each(function() {
              he.carouselInterface(this, e)
          })
      }
      static dataApiClickHandler(e) {
          const t = c(this);
          if (t && t.classList.contains("carousel")) {
              const s = {
                  ...r.getDataAttributes(t),
                  ...r.getDataAttributes(this)
              };
              var i = this.getAttribute("data-bs-slide-to");
              i && (s.interval = !1), he.carouselInterface(t, s), i && he.getInstance(t).to(i), e.preventDefault()
          }
      }
  }
  v.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", he.dataApiClickHandler), v.on(window, "load.bs.carousel.data-api", () => {
      var i = u.find('[data-bs-ride="carousel"]');
      for (let e = 0, t = i.length; e < t; e++) he.carouselInterface(i[e], he.getInstance(i[e]))
  }), T(he);
  const pe = "collapse",
      me = "bs.collapse";
  me;
  const fe = {
          toggle: !0,
          parent: null
      },
      ge = {
          toggle: "boolean",
          parent: "(null|element)"
      };
  const ve = "show",
      ye = "collapse",
      be = "collapsing",
      we = "collapsed",
      xe = `:scope .${ye} .` + ye,
      Te = '[data-bs-toggle="collapse"]';
  class Ee extends V {
      constructor(e, t) {
          super(e), this._isTransitioning = !1, this._config = this._getConfig(t), this._triggerArray = [];
          var i = u.find(Te);
          for (let e = 0, t = i.length; e < t; e++) {
              var s = i[e],
                  n = l(s),
                  r = u.find(n).filter(e => e === this._element);
              null !== n && r.length && (this._selector = n, this._triggerArray.push(s))
          }
          this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle()
      }
      static get Default() {
          return fe
      }
      static get NAME() {
          return pe
      }
      toggle() {
          this._isShown() ? this.hide() : this.show()
      }
      show() {
          if (!this._isTransitioning && !this._isShown()) {
              let e = [],
                  t;
              if (this._config.parent) {
                  const n = u.find(xe, this._config.parent);
                  e = u.find(".collapse.show, .collapse.collapsing", this._config.parent).filter(e => !n.includes(e))
              }
              const s = u.findOne(this._selector);
              if (e.length) {
                  var i = e.find(e => s !== e);
                  if (t = i ? Ee.getInstance(i) : null, t && t._isTransitioning) return
              }
              if (!v.trigger(this._element, "show.bs.collapse").defaultPrevented) {
                  e.forEach(e => {
                      s !== e && Ee.getOrCreateInstance(e, {
                          toggle: !1
                      }).hide(), t || X.set(e, me, null)
                  });
                  const r = this._getDimension();
                  this._element.classList.remove(ye), this._element.classList.add(be), this._element.style[r] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
                  i = "scroll" + (r[0].toUpperCase() + r.slice(1));
                  this._queueCallback(() => {
                      this._isTransitioning = !1, this._element.classList.remove(be), this._element.classList.add(ye, ve), this._element.style[r] = "", v.trigger(this._element, "shown.bs.collapse")
                  }, this._element, !0), this._element.style[r] = this._element[i] + "px"
              }
          }
      }
      hide() {
          if (!this._isTransitioning && this._isShown() && !v.trigger(this._element, "hide.bs.collapse").defaultPrevented) {
              var e = this._getDimension(),
                  t = (this._element.style[e] = this._element.getBoundingClientRect()[e] + "px", b(this._element), this._element.classList.add(be), this._element.classList.remove(ye, ve), this._triggerArray.length);
              for (let e = 0; e < t; e++) {
                  var i = this._triggerArray[e],
                      s = c(i);
                  s && !this._isShown(s) && this._addAriaAndCollapsedClass([i], !1)
              }
              this._isTransitioning = !0;
              this._element.style[e] = "", this._queueCallback(() => {
                  this._isTransitioning = !1, this._element.classList.remove(be), this._element.classList.add(ye), v.trigger(this._element, "hidden.bs.collapse")
              }, this._element, !0)
          }
      }
      _isShown(e = this._element) {
          return e.classList.contains(ve)
      }
      _getConfig(e) {
          return (e = {
              ...fe,
              ...r.getDataAttributes(this._element),
              ...e
          }).toggle = Boolean(e.toggle), e.parent = n(e.parent), p(pe, e, ge), e
      }
      _getDimension() {
          return this._element.classList.contains("collapse-horizontal") ? "width" : "height"
      }
      _initializeChildren() {
          if (this._config.parent) {
              const t = u.find(xe, this._config.parent);
              u.find(Te, this._config.parent).filter(e => !t.includes(e)).forEach(e => {
                  var t = c(e);
                  t && this._addAriaAndCollapsedClass([e], this._isShown(t))
              })
          }
      }
      _addAriaAndCollapsedClass(e, t) {
          e.length && e.forEach(e => {
              t ? e.classList.remove(we) : e.classList.add(we), e.setAttribute("aria-expanded", t)
          })
      }
      static jQueryInterface(i) {
          return this.each(function() {
              const e = {},
                  t = ("string" == typeof i && /show|hide/.test(i) && (e.toggle = !1), Ee.getOrCreateInstance(this, e));
              if ("string" == typeof i) {
                  if (void 0 === t[i]) throw new TypeError(`No method named "${i}"`);
                  t[i]()
              }
          })
      }
  }
  v.on(document, "click.bs.collapse.data-api", Te, function(e) {
      ("A" === e.target.tagName || e.delegateTarget && "A" === e.delegateTarget.tagName) && e.preventDefault();
      e = l(this);
      const t = u.find(e);
      t.forEach(e => {
          Ee.getOrCreateInstance(e, {
              toggle: !1
          }).toggle()
      })
  }), T(Ee);
  var k = "top",
      A = "bottom",
      M = "right",
      P = "left",
      _e = "auto",
      Se = [k, A, M, P],
      Ce = "start",
      ke = "end",
      Ae = "clippingParents",
      Me = "viewport",
      Pe = "popper",
      Oe = "reference",
      Ie = Se.reduce(function(e, t) {
          return e.concat([t + "-" + Ce, t + "-" + ke])
      }, []),
      Le = [].concat(Se, [_e]).reduce(function(e, t) {
          return e.concat([t, t + "-" + Ce, t + "-" + ke])
      }, []),
      te = "beforeRead",
      $e = "afterRead",
      ze = "beforeMain",
      Ne = "afterMain",
      De = "beforeWrite",
      je = "afterWrite",
      Fe = [te, "read", $e, ze, "main", Ne, De, "write", je];

  function He(e) {
      return e ? (e.nodeName || "").toLowerCase() : null
  }

  function qe(e) {
      return null == e ? window : "[object Window]" !== e.toString() ? (t = e.ownerDocument) && t.defaultView || window : e;
      var t
  }

  function Be(e) {
      return e instanceof qe(e).Element || e instanceof Element
  }

  function Re(e) {
      return e instanceof qe(e).HTMLElement || e instanceof HTMLElement
  }

  function We(e) {
      return "undefined" != typeof ShadowRoot && (e instanceof qe(e).ShadowRoot || e instanceof ShadowRoot)
  }
  var e = {
      name: "applyStyles",
      enabled: !0,
      phase: "write",
      fn: function(e) {
          var n = e.state;
          Object.keys(n.elements).forEach(function(e) {
              var t = n.styles[e] || {},
                  i = n.attributes[e] || {},
                  s = n.elements[e];
              Re(s) && He(s) && (Object.assign(s.style, t), Object.keys(i).forEach(function(e) {
                  var t = i[e];
                  !1 === t ? s.removeAttribute(e) : s.setAttribute(e, !0 === t ? "" : t)
              }))
          })
      },
      effect: function(e) {
          var s = e.state,
              n = {
                  popper: {
                      position: s.options.strategy,
                      left: "0",
                      top: "0",
                      margin: "0"
                  },
                  arrow: {
                      position: "absolute"
                  },
                  reference: {}
              };
          return Object.assign(s.elements.popper.style, n.popper), s.styles = n, s.elements.arrow && Object.assign(s.elements.arrow.style, n.arrow),
              function() {
                  Object.keys(s.elements).forEach(function(e) {
                      var t = s.elements[e],
                          i = s.attributes[e] || {},
                          e = Object.keys((s.styles.hasOwnProperty(e) ? s.styles : n)[e]).reduce(function(e, t) {
                              return e[t] = "", e
                          }, {});
                      Re(t) && He(t) && (Object.assign(t.style, e), Object.keys(i).forEach(function(e) {
                          t.removeAttribute(e)
                      }))
                  })
              }
      },
      requires: ["computeStyles"]
  };

  function Ye(e) {
      return e.split("-")[0]
  }

  function Xe(e) {
      e = e.getBoundingClientRect();
      return {
          width: +e.width,
          height: +e.height,
          top: +e.top,
          right: +e.right,
          bottom: +e.bottom,
          left: +e.left,
          x: +e.left,
          y: +e.top
      }
  }

  function Ve(e) {
      var t = Xe(e),
          i = e.offsetWidth,
          s = e.offsetHeight;
      return Math.abs(t.width - i) <= 1 && (i = t.width), Math.abs(t.height - s) <= 1 && (s = t.height), {
          x: e.offsetLeft,
          y: e.offsetTop,
          width: i,
          height: s
      }
  }

  function Ge(e, t) {
      var i = t.getRootNode && t.getRootNode();
      if (e.contains(t)) return !0;
      if (i && We(i)) {
          var s = t;
          do {
              if (s && e.isSameNode(s)) return !0
          } while (s = s.parentNode || s.host)
      }
      return !1
  }

  function Ue(e) {
      return qe(e).getComputedStyle(e)
  }

  function Qe(e) {
      return ((Be(e) ? e.ownerDocument : e.document) || window.document).documentElement
  }

  function Ke(e) {
      return "html" === He(e) ? e : e.assignedSlot || e.parentNode || (We(e) ? e.host : null) || Qe(e)
  }

  function Ze(e) {
      return Re(e) && "fixed" !== Ue(e).position ? e.offsetParent : null
  }

  function Je(e) {
      for (var t, i = qe(e), s = Ze(e); s && (t = s, 0 <= ["table", "td", "th"].indexOf(He(t))) && "static" === Ue(s).position;) s = Ze(s);
      return (!s || "html" !== He(s) && ("body" !== He(s) || "static" !== Ue(s).position)) && (s || function(e) {
          var t = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox"),
              i = -1 !== navigator.userAgent.indexOf("Trident");
          if (i && Re(e) && "fixed" === Ue(e).position) return null;
          for (var s = Ke(e); Re(s) && ["html", "body"].indexOf(He(s)) < 0;) {
              var n = Ue(s);
              if ("none" !== n.transform || "none" !== n.perspective || "paint" === n.contain || -1 !== ["transform", "perspective"].indexOf(n.willChange) || t && "filter" === n.willChange || t && n.filter && "none" !== n.filter) return s;
              s = s.parentNode
          }
          return null
      }(e)) || i
  }

  function et(e) {
      return 0 <= ["top", "bottom"].indexOf(e) ? "x" : "y"
  }
  var tt = Math.max,
      it = Math.min,
      st = Math.round;

  function nt(e, t, i) {
      return tt(e, it(t, i))
  }

  function rt() {
      return {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
      }
  }

  function ot(e) {
      return Object.assign({}, rt(), e)
  }

  function at(i, e) {
      return e.reduce(function(e, t) {
          return e[t] = i, e
      }, {})
  }
  var t = {
      name: "arrow",
      enabled: !0,
      phase: "main",
      fn: function(e) {
          var t, i, s, n, r = e.state,
              d = e.name,
              e = e.options,
              o = r.elements.arrow,
              a = r.modifiersData.popperOffsets,
              l = et(c = Ye(r.placement)),
              c = 0 <= [P, M].indexOf(c) ? "height" : "width";
          o && a && (e = e.padding, i = r, i = ot("number" != typeof(e = "function" == typeof e ? e(Object.assign({}, i.rects, {
              placement: i.placement
          })) : e) ? e : at(e, Se)), e = Ve(o), n = "y" === l ? k : P, s = "y" === l ? A : M, t = r.rects.reference[c] + r.rects.reference[l] - a[l] - r.rects.popper[c], a = a[l] - r.rects.reference[l], o = (o = Je(o)) ? "y" === l ? o.clientHeight || 0 : o.clientWidth || 0 : 0, n = i[n], i = o - e[c] - i[s], n = nt(n, s = o / 2 - e[c] / 2 + (t / 2 - a / 2), i), r.modifiersData[d] = ((o = {})[l] = n, o.centerOffset = n - s, o))
      },
      effect: function(e) {
          var t = e.state;
          null != (e = void 0 === (e = e.options.element) ? "[data-popper-arrow]" : e) && ("string" != typeof e || (e = t.elements.popper.querySelector(e))) && Ge(t.elements.popper, e) && (t.elements.arrow = e)
      },
      requires: ["popperOffsets"],
      requiresIfExists: ["preventOverflow"]
  };

  function lt(e) {
      return e.split("-")[1]
  }
  var ct = {
      top: "auto",
      right: "auto",
      bottom: "auto",
      left: "auto"
  };

  function dt(e) {
      var t, i, s, n = e.popper,
          d = e.popperRect,
          r = e.placement,
          u = e.variation,
          o = e.offsets,
          h = e.position,
          p = e.gpuAcceleration,
          m = e.adaptive,
          e = e.roundOffsets,
          a = !0 === e ? (a = (l = o).x, l = o.y, c = window.devicePixelRatio || 1, {
              x: st(st(a * c) / c) || 0,
              y: st(st(l * c) / c) || 0
          }) : "function" == typeof e ? e(o) : o,
          l = a.x,
          c = void 0 === l ? 0 : l,
          e = a.y,
          e = void 0 === e ? 0 : e,
          f = o.hasOwnProperty("x"),
          o = o.hasOwnProperty("y"),
          g = P,
          v = k,
          y = window,
          n = (m && (s = "clientHeight", i = "clientWidth", (t = Je(n)) === qe(n) && "static" !== Ue(t = Qe(n)).position && "absolute" === h && (s = "scrollHeight", i = "scrollWidth"), r !== k && (r !== P && r !== M || u !== ke) || (v = A, e = (e - (t[s] - d.height)) * (p ? 1 : -1)), r !== P && (r !== k && r !== A || u !== ke) || (g = M, c = (c - (t[i] - d.width)) * (p ? 1 : -1))), Object.assign({
              position: h
          }, m && ct));
      return p ? Object.assign({}, n, ((s = {})[v] = o ? "0" : "", s[g] = f ? "0" : "", s.transform = (y.devicePixelRatio || 1) <= 1 ? "translate(" + c + "px, " + e + "px)" : "translate3d(" + c + "px, " + e + "px, 0)", s)) : Object.assign({}, n, ((r = {})[v] = o ? e + "px" : "", r[g] = f ? c + "px" : "", r.transform = "", r))
  }
  var ut = {
          name: "computeStyles",
          enabled: !0,
          phase: "beforeWrite",
          fn: function(e) {
              var t = e.state,
                  e = e.options,
                  i = void 0 === (i = e.gpuAcceleration) || i,
                  s = void 0 === (s = e.adaptive) || s,
                  e = void 0 === (e = e.roundOffsets) || e,
                  i = {
                      placement: Ye(t.placement),
                      variation: lt(t.placement),
                      popper: t.elements.popper,
                      popperRect: t.rects.popper,
                      gpuAcceleration: i
                  };
              null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign({}, t.styles.popper, dt(Object.assign({}, i, {
                  offsets: t.modifiersData.popperOffsets,
                  position: t.options.strategy,
                  adaptive: s,
                  roundOffsets: e
              })))), null != t.modifiersData.arrow && (t.styles.arrow = Object.assign({}, t.styles.arrow, dt(Object.assign({}, i, {
                  offsets: t.modifiersData.arrow,
                  position: "absolute",
                  adaptive: !1,
                  roundOffsets: e
              })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
                  "data-popper-placement": t.placement
              })
          },
          data: {}
      },
      ht = {
          passive: !0
      };
  var pt = {
          name: "eventListeners",
          enabled: !0,
          phase: "write",
          fn: function() {},
          effect: function(e) {
              var t = e.state,
                  i = e.instance,
                  s = (e = e.options).scroll,
                  n = void 0 === s || s,
                  r = void 0 === (s = e.resize) || s,
                  o = qe(t.elements.popper),
                  a = [].concat(t.scrollParents.reference, t.scrollParents.popper);
              return n && a.forEach(function(e) {
                      e.addEventListener("scroll", i.update, ht)
                  }), r && o.addEventListener("resize", i.update, ht),
                  function() {
                      n && a.forEach(function(e) {
                          e.removeEventListener("scroll", i.update, ht)
                      }), r && o.removeEventListener("resize", i.update, ht)
                  }
          },
          data: {}
      },
      mt = {
          left: "right",
          right: "left",
          bottom: "top",
          top: "bottom"
      };

  function ft(e) {
      return e.replace(/left|right|bottom|top/g, function(e) {
          return mt[e]
      })
  }
  var gt = {
      start: "end",
      end: "start"
  };

  function vt(e) {
      return e.replace(/start|end/g, function(e) {
          return gt[e]
      })
  }

  function yt(e) {
      e = qe(e);
      return {
          scrollLeft: e.pageXOffset,
          scrollTop: e.pageYOffset
      }
  }

  function bt(e) {
      return Xe(Qe(e)).left + yt(e).scrollLeft
  }

  function wt(e) {
      var e = Ue(e),
          t = e.overflow,
          i = e.overflowX,
          e = e.overflowY;
      return /auto|scroll|overlay|hidden/.test(t + e + i)
  }

  function xt(e, t) {
      void 0 === t && (t = []);
      var i = function e(t) {
              return 0 <= ["html", "body", "#document"].indexOf(He(t)) ? t.ownerDocument.body : Re(t) && wt(t) ? t : e(Ke(t))
          }(e),
          e = i === (null == (e = e.ownerDocument) ? void 0 : e.body),
          s = qe(i),
          s = e ? [s].concat(s.visualViewport || [], wt(i) ? i : []) : i,
          i = t.concat(s);
      return e ? i : i.concat(xt(Ke(s)))
  }

  function Tt(e) {
      return Object.assign({}, e, {
          left: e.x,
          top: e.y,
          right: e.x + e.width,
          bottom: e.y + e.height
      })
  }

  function Et(e, t) {
      return t === Me ? Tt((s = qe(i = e), n = Qe(i), s = s.visualViewport, r = n.clientWidth, n = n.clientHeight, a = o = 0, s && (r = s.width, n = s.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (o = s.offsetLeft, a = s.offsetTop)), {
          width: r,
          height: n,
          x: o + bt(i),
          y: a
      })) : Re(t) ? ((r = Xe(s = t)).top = r.top + s.clientTop, r.left = r.left + s.clientLeft, r.bottom = r.top + s.clientHeight, r.right = r.left + s.clientWidth, r.width = s.clientWidth, r.height = s.clientHeight, r.x = r.left, r.y = r.top, r) : Tt((n = Qe(e), o = Qe(n), i = yt(n), a = null == (a = n.ownerDocument) ? void 0 : a.body, t = tt(o.scrollWidth, o.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0), e = tt(o.scrollHeight, o.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0), n = -i.scrollLeft + bt(n), i = -i.scrollTop, "rtl" === Ue(a || o).direction && (n += tt(o.clientWidth, a ? a.clientWidth : 0) - t), {
          width: t,
          height: e,
          x: n,
          y: i
      }));
      var i, s, n, r, o, a
  }

  function _t(i, e, t) {
      var s, n = "clippingParents" === e ? (r = xt(Ke(n = i)), Be(s = 0 <= ["absolute", "fixed"].indexOf(Ue(n).position) && Re(n) ? Je(n) : n) ? r.filter(function(e) {
              return Be(e) && Ge(e, s) && "body" !== He(e)
          }) : []) : [].concat(e),
          r = [].concat(n, [t]),
          e = r[0],
          t = r.reduce(function(e, t) {
              t = Et(i, t);
              return e.top = tt(t.top, e.top), e.right = it(t.right, e.right), e.bottom = it(t.bottom, e.bottom), e.left = tt(t.left, e.left), e
          }, Et(i, e));
      return t.width = t.right - t.left, t.height = t.bottom - t.top, t.x = t.left, t.y = t.top, t
  }

  function St(e) {
      var t, i = e.reference,
          s = e.element,
          e = e.placement,
          n = e ? Ye(e) : null,
          e = e ? lt(e) : null,
          r = i.x + i.width / 2 - s.width / 2,
          o = i.y + i.height / 2 - s.height / 2;
      switch (n) {
          case k:
              t = {
                  x: r,
                  y: i.y - s.height
              };
              break;
          case A:
              t = {
                  x: r,
                  y: i.y + i.height
              };
              break;
          case M:
              t = {
                  x: i.x + i.width,
                  y: o
              };
              break;
          case P:
              t = {
                  x: i.x - s.width,
                  y: o
              };
              break;
          default:
              t = {
                  x: i.x,
                  y: i.y
              }
      }
      var a = n ? et(n) : null;
      if (null != a) {
          var l = "y" === a ? "height" : "width";
          switch (e) {
              case Ce:
                  t[a] = t[a] - (i[l] / 2 - s[l] / 2);
                  break;
              case ke:
                  t[a] = t[a] + (i[l] / 2 - s[l] / 2)
          }
      }
      return t
  }

  function Ct(e, t) {
      var s, t = t = void 0 === t ? {} : t,
          i = t.placement,
          i = void 0 === i ? e.placement : i,
          n = t.boundary,
          n = void 0 === n ? Ae : n,
          r = t.rootBoundary,
          r = void 0 === r ? Me : r,
          o = t.elementContext,
          o = void 0 === o ? Pe : o,
          a = t.altBoundary,
          a = void 0 !== a && a,
          t = t.padding,
          t = void 0 === t ? 0 : t,
          t = ot("number" != typeof t ? t : at(t, Se)),
          l = e.rects.popper,
          a = e.elements[a ? o === Pe ? Oe : Pe : o],
          a = _t(Be(a) ? a : a.contextElement || Qe(e.elements.popper), n, r),
          n = Xe(e.elements.reference),
          r = St({
              reference: n,
              element: l,
              strategy: "absolute",
              placement: i
          }),
          l = Tt(Object.assign({}, l, r)),
          r = o === Pe ? l : n,
          c = {
              top: a.top - r.top + t.top,
              bottom: r.bottom - a.bottom + t.bottom,
              left: a.left - r.left + t.left,
              right: r.right - a.right + t.right
          },
          l = e.modifiersData.offset;
      return o === Pe && l && (s = l[i], Object.keys(c).forEach(function(e) {
          var t = 0 <= [M, A].indexOf(e) ? 1 : -1,
              i = 0 <= [k, A].indexOf(e) ? "y" : "x";
          c[e] += s[i] * t
      })), c
  }
  var kt = {
      name: "flip",
      enabled: !0,
      phase: "main",
      fn: function(e) {
          var u = e.state,
              t = e.options,
              e = e.name;
          if (!u.modifiersData[e]._skip) {
              for (var i = t.mainAxis, c = void 0 === i || i, i = t.altAxis, d = void 0 === i || i, i = t.fallbackPlacements, h = t.padding, p = t.boundary, m = t.rootBoundary, f = t.altBoundary, s = t.flipVariations, g = void 0 === s || s, v = t.allowedAutoPlacements, s = u.options.placement, t = Ye(s), i = i || (t === s || !g ? [ft(s)] : function(e) {
                      if (Ye(e) === _e) return [];
                      var t = ft(e);
                      return [vt(e), t, vt(t)]
                  }(s)), n = [s].concat(i).reduce(function(e, t) {
                      return e.concat(Ye(t) === _e ? (i = u, s = (e = e = void 0 === (e = {
                          placement: t,
                          boundary: p,
                          rootBoundary: m,
                          padding: h,
                          flipVariations: g,
                          allowedAutoPlacements: v
                      }) ? {} : e).placement, n = e.boundary, r = e.rootBoundary, o = e.padding, a = e.flipVariations, d = void 0 === (e = e.allowedAutoPlacements) ? Le : e, l = lt(s), e = l ? a ? Ie : Ie.filter(function(e) {
                          return lt(e) === l
                      }) : Se, c = (s = 0 === (s = e.filter(function(e) {
                          return 0 <= d.indexOf(e)
                      })).length ? e : s).reduce(function(e, t) {
                          return e[t] = Ct(i, {
                              placement: t,
                              boundary: n,
                              rootBoundary: r,
                              padding: o
                          })[Ye(t)], e
                      }, {}), Object.keys(c).sort(function(e, t) {
                          return c[e] - c[t]
                      })) : t);
                      var i, s, n, r, o, a, d, l, c
                  }, []), y = u.rects.reference, b = u.rects.popper, w = new Map, x = !0, r = n[0], T = 0; T < n.length; T++) {
                  var o = n[T],
                      E = Ye(o),
                      _ = lt(o) === Ce,
                      a = 0 <= [k, A].indexOf(E),
                      l = a ? "width" : "height",
                      S = Ct(u, {
                          placement: o,
                          boundary: p,
                          rootBoundary: m,
                          altBoundary: f,
                          padding: h
                      }),
                      a = a ? _ ? M : P : _ ? A : k,
                      _ = (y[l] > b[l] && (a = ft(a)), ft(a)),
                      l = [];
                  if (c && l.push(S[E] <= 0), d && l.push(S[a] <= 0, S[_] <= 0), l.every(function(e) {
                          return e
                      })) {
                      r = o, x = !1;
                      break
                  }
                  w.set(o, l)
              }
              if (x)
                  for (var C = g ? 3 : 1; 0 < C; C--)
                      if ("break" === function(t) {
                              var e = n.find(function(e) {
                                  e = w.get(e);
                                  if (e) return e.slice(0, t).every(function(e) {
                                      return e
                                  })
                              });
                              if (e) return r = e, "break"
                          }(C)) break;
              u.placement !== r && (u.modifiersData[e]._skip = !0, u.placement = r, u.reset = !0)
          }
      },
      requiresIfExists: ["offset"],
      data: {
          _skip: !1
      }
  };

  function At(e, t, i) {
      return {
          top: e.top - t.height - (i = void 0 === i ? {
              x: 0,
              y: 0
          } : i).y,
          right: e.right - t.width + i.x,
          bottom: e.bottom - t.height + i.y,
          left: e.left - t.width - i.x
      }
  }

  function Mt(t) {
      return [k, M, A, P].some(function(e) {
          return 0 <= t[e]
      })
  }
  var Pt = {
      name: "hide",
      enabled: !0,
      phase: "main",
      requiresIfExists: ["preventOverflow"],
      fn: function(e) {
          var t = e.state,
              e = e.name,
              i = t.rects.reference,
              s = t.rects.popper,
              n = t.modifiersData.preventOverflow,
              r = Ct(t, {
                  elementContext: "reference"
              }),
              o = Ct(t, {
                  altBoundary: !0
              }),
              r = At(r, i),
              i = At(o, s, n),
              o = Mt(r),
              s = Mt(i);
          t.modifiersData[e] = {
              referenceClippingOffsets: r,
              popperEscapeOffsets: i,
              isReferenceHidden: o,
              hasPopperEscaped: s
          }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
              "data-popper-reference-hidden": o,
              "data-popper-escaped": s
          })
      }
  };
  var Ot = {
      name: "offset",
      enabled: !0,
      phase: "main",
      requires: ["popperOffsets"],
      fn: function(e) {
          var o = e.state,
              t = e.options,
              e = e.name,
              a = void 0 === (t = t.offset) ? [0, 0] : t,
              t = Le.reduce(function(e, t) {
                  var i, s, n, r;
                  return e[t] = (t = t, i = o.rects, s = a, n = Ye(t), r = 0 <= [P, k].indexOf(n) ? -1 : 1, t = (i = "function" == typeof s ? s(Object.assign({}, i, {
                      placement: t
                  })) : s)[0] || 0, s = (i[1] || 0) * r, 0 <= [P, M].indexOf(n) ? {
                      x: s,
                      y: t
                  } : {
                      x: t,
                      y: s
                  }), e
              }, {}),
              i = (s = t[o.placement]).x,
              s = s.y;
          null != o.modifiersData.popperOffsets && (o.modifiersData.popperOffsets.x += i, o.modifiersData.popperOffsets.y += s), o.modifiersData[e] = t
      }
  };
  var It = {
      name: "popperOffsets",
      enabled: !0,
      phase: "read",
      fn: function(e) {
          var t = e.state,
              e = e.name;
          t.modifiersData[e] = St({
              reference: t.rects.reference,
              element: t.rects.popper,
              strategy: "absolute",
              placement: t.placement
          })
      },
      data: {}
  };
  var Lt = {
      name: "preventOverflow",
      enabled: !0,
      phase: "main",
      fn: function(d) {
          var u, h, p, m, e, f, t, i, s, n = d.state,
              r = d.options,
              d = d.name,
              g = void 0 === (g = r.mainAxis) || g,
              v = void 0 !== (v = r.altAxis) && v,
              y = r.boundary,
              o = r.rootBoundary,
              b = r.altBoundary,
              a = r.padding,
              w = void 0 === (w = r.tether) || w,
              r = void 0 === (r = r.tetherOffset) ? 0 : r,
              y = Ct(n, {
                  boundary: y,
                  rootBoundary: o,
                  padding: a,
                  altBoundary: b
              }),
              o = Ye(n.placement),
              b = !(a = lt(n.placement)),
              x = "x" === (o = et(o)) ? "y" : "x",
              l = n.modifiersData.popperOffsets,
              T = n.rects.reference,
              c = n.rects.popper,
              r = "function" == typeof r ? r(Object.assign({}, n.rects, {
                  placement: n.placement
              })) : r,
              E = {
                  x: 0,
                  y: 0
              };
          l && ((g || v) && (e = "y" === o ? "height" : "width", u = l[o], h = l[o] + y[s = "y" === o ? k : P], p = l[o] - y[t = "y" === o ? A : M], f = w ? -c[e] / 2 : 0, m = (a === Ce ? T : c)[e], a = a === Ce ? -c[e] : -T[e], c = n.elements.arrow, c = w && c ? Ve(c) : {
              width: 0,
              height: 0
          }, s = (i = n.modifiersData["arrow#persistent"] ? n.modifiersData["arrow#persistent"].padding : rt())[s], i = i[t], t = nt(0, T[e], c[e]), c = b ? T[e] / 2 - f - t - s - r : m - t - s - r, m = b ? -T[e] / 2 + f + t + i + r : a + t + i + r, b = (s = n.elements.arrow && Je(n.elements.arrow)) ? "y" === o ? s.clientTop || 0 : s.clientLeft || 0 : 0, T = n.modifiersData.offset ? n.modifiersData.offset[n.placement][o] : 0, e = l[o] + c - T - b, f = l[o] + m - T, g && (a = nt(w ? it(h, e) : h, u, w ? tt(p, f) : p), l[o] = a, E[o] = a - u), v && (i = (t = l[x]) + y["x" === o ? k : P], r = t - y["x" === o ? A : M], s = nt(w ? it(i, e) : i, t, w ? tt(r, f) : r), l[x] = s, E[x] = s - t)), n.modifiersData[d] = E)
      },
      requiresIfExists: ["offset"]
  };

  function $t(e, t, i) {
      void 0 === i && (i = !1);
      var s = Re(t),
          n = (Re(t) && ((r = (n = t).getBoundingClientRect()).width, n.offsetWidth, r = r.height / n.offsetHeight || 1), Qe(t)),
          r = Xe(e),
          e = {
              scrollLeft: 0,
              scrollTop: 0
          },
          o = {
              x: 0,
              y: 0
          };
      return !s && i || ("body" === He(t) && !wt(n) || (e = (s = t) !== qe(s) && Re(s) ? {
          scrollLeft: s.scrollLeft,
          scrollTop: s.scrollTop
      } : yt(s)), Re(t) ? ((o = Xe(t)).x += t.clientLeft, o.y += t.clientTop) : n && (o.x = bt(n))), {
          x: r.left + e.scrollLeft - o.x,
          y: r.top + e.scrollTop - o.y,
          width: r.width,
          height: r.height
      }
  }

  function zt(e) {
      var i = new Map,
          s = new Set,
          n = [];
      return e.forEach(function(e) {
          i.set(e.name, e)
      }), e.forEach(function(e) {
          s.has(e.name) || ! function t(e) {
              s.add(e.name), [].concat(e.requires || [], e.requiresIfExists || []).forEach(function(e) {
                  s.has(e) || (e = i.get(e)) && t(e)
              }), n.push(e)
          }(e)
      }), n
  }
  var Nt = {
      placement: "bottom",
      modifiers: [],
      strategy: "absolute"
  };

  function Dt() {
      for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
      return !t.some(function(e) {
          return !(e && "function" == typeof e.getBoundingClientRect)
      })
  }

  function jt(e) {
      var e = e = void 0 === e ? {} : e,
          t = e.defaultModifiers,
          u = void 0 === t ? [] : t,
          t = e.defaultOptions,
          h = void 0 === t ? Nt : t;
      return function(s, n, t) {
          void 0 === t && (t = h);
          var i, r, o = {
                  placement: "bottom",
                  orderedModifiers: [],
                  options: Object.assign({}, Nt, h),
                  modifiersData: {},
                  elements: {
                      reference: s,
                      popper: n
                  },
                  attributes: {},
                  styles: {}
              },
              a = [],
              l = !1,
              c = {
                  state: o,
                  setOptions: function(e) {
                      var i, t, e = "function" == typeof e ? e(o.options) : e,
                          e = (d(), o.options = Object.assign({}, h, o.options, e), o.scrollParents = {
                              reference: Be(s) ? xt(s) : s.contextElement ? xt(s.contextElement) : [],
                              popper: xt(n)
                          }, e = [].concat(u, o.options.modifiers), t = e.reduce(function(e, t) {
                              var i = e[t.name];
                              return e[t.name] = i ? Object.assign({}, i, t, {
                                  options: Object.assign({}, i.options, t.options),
                                  data: Object.assign({}, i.data, t.data)
                              }) : t, e
                          }, {}), e = Object.keys(t).map(function(e) {
                              return t[e]
                          }), i = zt(e), Fe.reduce(function(e, t) {
                              return e.concat(i.filter(function(e) {
                                  return e.phase === t
                              }))
                          }, []));
                      return o.orderedModifiers = e.filter(function(e) {
                          return e.enabled
                      }), o.orderedModifiers.forEach(function(e) {
                          var t = e.name,
                              i = e.options,
                              e = e.effect;
                          "function" == typeof e && (e = e({
                              state: o,
                              name: t,
                              instance: c,
                              options: void 0 === i ? {} : i
                          }), a.push(e || function() {}))
                      }), c.update()
                  },
                  forceUpdate: function() {
                      if (!l) {
                          var e = o.elements,
                              t = e.reference,
                              e = e.popper;
                          if (Dt(t, e)) {
                              o.rects = {
                                  reference: $t(t, Je(e), "fixed" === o.options.strategy),
                                  popper: Ve(e)
                              }, o.reset = !1, o.placement = o.options.placement, o.orderedModifiers.forEach(function(e) {
                                  return o.modifiersData[e.name] = Object.assign({}, e.data)
                              });
                              for (var i, s, n, r = 0; r < o.orderedModifiers.length; r++) !0 !== o.reset ? (i = (n = o.orderedModifiers[r]).fn, s = n.options, n = n.name, "function" == typeof i && (o = i({
                                  state: o,
                                  options: void 0 === s ? {} : s,
                                  name: n,
                                  instance: c
                              }) || o)) : (o.reset = !1, r = -1)
                          }
                      }
                  },
                  update: (i = function() {
                      return new Promise(function(e) {
                          c.forceUpdate(), e(o)
                      })
                  }, function() {
                      return r = r || new Promise(function(e) {
                          Promise.resolve().then(function() {
                              r = void 0, e(i())
                          })
                      })
                  }),
                  destroy: function() {
                      d(), l = !0
                  }
              };
          return Dt(s, n) && c.setOptions(t).then(function(e) {
              !l && t.onFirstUpdate && t.onFirstUpdate(e)
          }), c;

          function d() {
              a.forEach(function(e) {
                  return e()
              }), a = []
          }
      }
  }
  var Ft = jt({
      defaultModifiers: [pt, It, ut, e, Ot, kt, Lt, t, Pt]
  });
  const Ht = Object.freeze({
          __proto__: null,
          popperGenerator: jt,
          detectOverflow: Ct,
          createPopperBase: jt(),
          createPopper: Ft,
          createPopperLite: jt({
              defaultModifiers: [pt, It, ut, e]
          }),
          top: k,
          bottom: A,
          right: M,
          left: P,
          auto: _e,
          basePlacements: Se,
          start: Ce,
          end: ke,
          clippingParents: Ae,
          viewport: Me,
          popper: Pe,
          reference: Oe,
          variationPlacements: Ie,
          placements: Le,
          beforeRead: te,
          read: "read",
          afterRead: $e,
          beforeMain: ze,
          main: "main",
          afterMain: Ne,
          beforeWrite: De,
          write: "write",
          afterWrite: je,
          modifierPhases: Fe,
          applyStyles: e,
          arrow: t,
          computeStyles: ut,
          eventListeners: pt,
          flip: kt,
          hide: Pt,
          offset: Ot,
          popperOffsets: It,
          preventOverflow: Lt
      }),
      qt = "dropdown";
  te = ".bs.dropdown", $e = ".data-api";
  const Bt = "Escape",
      Rt = "ArrowUp",
      Wt = "ArrowDown",
      Yt = new RegExp(Rt + `|${Wt}|` + Bt);
  ze = "click" + te + $e, Ne = "keydown" + te + $e;
  const Xt = "show",
      Vt = '[data-bs-toggle="dropdown"]',
      Gt = ".dropdown-menu",
      Ut = s() ? "top-end" : "top-start",
      Qt = s() ? "top-start" : "top-end",
      Kt = s() ? "bottom-end" : "bottom-start",
      Zt = s() ? "bottom-start" : "bottom-end",
      Jt = s() ? "left-start" : "right-start",
      ei = s() ? "right-start" : "left-start",
      ti = {
          offset: [0, 2],
          boundary: "clippingParents",
          reference: "toggle",
          display: "dynamic",
          popperConfig: null,
          autoClose: !0
      },
      ii = {
          offset: "(array|string|function)",
          boundary: "(string|element)",
          reference: "(string|element|object)",
          display: "string",
          popperConfig: "(null|object|function)",
          autoClose: "(boolean|string)"
      };
  class si extends V {
      constructor(e, t) {
          super(e), this._popper = null, this._config = this._getConfig(t), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar()
      }
      static get Default() {
          return ti
      }
      static get DefaultType() {
          return ii
      }
      static get NAME() {
          return qt
      }
      toggle() {
          return this._isShown() ? this.hide() : this.show()
      }
      show() {
          if (!f(this._element) && !this._isShown(this._menu)) {
              var e = {
                  relatedTarget: this._element
              };
              if (!v.trigger(this._element, "show.bs.dropdown", e).defaultPrevented) {
                  const t = si.getParentFromElement(this._element);
                  this._inNavbar ? r.setDataAttribute(this._menu, "popper", "none") : this._createPopper(t), "ontouchstart" in document.documentElement && !t.closest(".navbar-nav") && [].concat(...document.body.children).forEach(e => v.on(e, "mouseover", y)), this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add(Xt), this._element.classList.add(Xt), v.trigger(this._element, "shown.bs.dropdown", e)
              }
          }
      }
      hide() {
          var e;
          !f(this._element) && this._isShown(this._menu) && (e = {
              relatedTarget: this._element
          }, this._completeHide(e))
      }
      dispose() {
          this._popper && this._popper.destroy(), super.dispose()
      }
      update() {
          this._inNavbar = this._detectNavbar(), this._popper && this._popper.update()
      }
      _completeHide(e) {
          v.trigger(this._element, "hide.bs.dropdown", e).defaultPrevented || ("ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach(e => v.off(e, "mouseover", y)), this._popper && this._popper.destroy(), this._menu.classList.remove(Xt), this._element.classList.remove(Xt), this._element.setAttribute("aria-expanded", "false"), r.removeDataAttribute(this._menu, "popper"), v.trigger(this._element, "hidden.bs.dropdown", e))
      }
      _getConfig(e) {
          if (e = {
                  ...this.constructor.Default,
                  ...r.getDataAttributes(this._element),
                  ...e
              }, p(qt, e, this.constructor.DefaultType), "object" == typeof e.reference && !h(e.reference) && "function" != typeof e.reference.getBoundingClientRect) throw new TypeError(qt.toUpperCase() + ': Option "reference" provided type "object" without a required "getBoundingClientRect" method.');
          return e
      }
      _createPopper(e) {
          if (void 0 === Ht) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
          let t = this._element;
          "parent" === this._config.reference ? t = e : h(this._config.reference) ? t = n(this._config.reference) : "object" == typeof this._config.reference && (t = this._config.reference);
          const i = this._getPopperConfig();
          e = i.modifiers.find(e => "applyStyles" === e.name && !1 === e.enabled);
          this._popper = Ft(t, this._menu, i), e && r.setDataAttribute(this._menu, "popper", "static")
      }
      _isShown(e = this._element) {
          return e.classList.contains(Xt)
      }
      _getMenuElement() {
          return u.next(this._element, Gt)[0]
      }
      _getPlacement() {
          const e = this._element.parentNode;
          if (e.classList.contains("dropend")) return Jt;
          if (e.classList.contains("dropstart")) return ei;
          var t = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
          return e.classList.contains("dropup") ? t ? Qt : Ut : t ? Zt : Kt
      }
      _detectNavbar() {
          return null !== this._element.closest(".navbar")
      }
      _getOffset() {
          const t = this._config["offset"];
          return "string" == typeof t ? t.split(",").map(e => Number.parseInt(e, 10)) : "function" == typeof t ? e => t(e, this._element) : t
      }
      _getPopperConfig() {
          const e = {
              placement: this._getPlacement(),
              modifiers: [{
                  name: "preventOverflow",
                  options: {
                      boundary: this._config.boundary
                  }
              }, {
                  name: "offset",
                  options: {
                      offset: this._getOffset()
                  }
              }]
          };
          return "static" === this._config.display && (e.modifiers = [{
              name: "applyStyles",
              enabled: !1
          }]), {
              ...e,
              ..."function" == typeof this._config.popperConfig ? this._config.popperConfig(e) : this._config.popperConfig
          }
      }
      _selectMenuItem({
          key: e,
          target: t
      }) {
          const i = u.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter(m);
          i.length && S(i, t, e === Wt, !i.includes(t)).focus()
      }
      static jQueryInterface(t) {
          return this.each(function() {
              const e = si.getOrCreateInstance(this, t);
              if ("string" == typeof t) {
                  if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                  e[t]()
              }
          })
      }
      static clearMenus(i) {
          if (!i || 2 !== i.button && ("keyup" !== i.type || "Tab" === i.key)) {
              var s = u.find(Vt);
              for (let e = 0, t = s.length; e < t; e++) {
                  const r = si.getInstance(s[e]);
                  if (r && !1 !== r._config.autoClose && r._isShown()) {
                      const o = {
                          relatedTarget: r._element
                      };
                      if (i) {
                          const a = i.composedPath();
                          var n = a.includes(r._menu);
                          if (a.includes(r._element) || "inside" === r._config.autoClose && !n || "outside" === r._config.autoClose && n) continue;
                          if (r._menu.contains(i.target) && ("keyup" === i.type && "Tab" === i.key || /input|select|option|textarea|form/i.test(i.target.tagName))) continue;
                          "click" === i.type && (o.clickEvent = i)
                      }
                      r._completeHide(o)
                  }
              }
          }
      }
      static getParentFromElement(e) {
          return c(e) || e.parentNode
      }
      static dataApiKeydownHandler(e) {
          if (/input|textarea/i.test(e.target.tagName) ? !("Space" === e.key || e.key !== Bt && (e.key !== Wt && e.key !== Rt || e.target.closest(Gt))) : Yt.test(e.key)) {
              var t = this.classList.contains(Xt);
              if ((t || e.key !== Bt) && (e.preventDefault(), e.stopPropagation(), !f(this))) {
                  var i = this.matches(Vt) ? this : u.prev(this, Vt)[0];
                  const s = si.getOrCreateInstance(i);
                  if (e.key !== Bt) return e.key === Rt || e.key === Wt ? (t || s.show(), void s._selectMenuItem(e)) : void(t && "Space" !== e.key || si.clearMenus());
                  s.hide()
              }
          }
      }
  }
  v.on(document, Ne, Vt, si.dataApiKeydownHandler), v.on(document, Ne, Gt, si.dataApiKeydownHandler), v.on(document, ze, si.clearMenus), v.on(document, "keyup.bs.dropdown.data-api", si.clearMenus), v.on(document, ze, Vt, function(e) {
      e.preventDefault(), si.getOrCreateInstance(this).toggle()
  }), T(si);
  const ni = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
      ri = ".sticky-top";
  class oi {
      constructor() {
          this._element = document.body
      }
      getWidth() {
          var e = document.documentElement.clientWidth;
          return Math.abs(window.innerWidth - e)
      }
      hide() {
          const t = this.getWidth();
          this._disableOverFlow(), this._setElementAttributes(this._element, "paddingRight", e => e + t), this._setElementAttributes(ni, "paddingRight", e => e + t), this._setElementAttributes(ri, "marginRight", e => e - t)
      }
      _disableOverFlow() {
          this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden"
      }
      _setElementAttributes(e, i, s) {
          const n = this.getWidth();
          this._applyManipulationCallback(e, e => {
              var t;
              e !== this._element && window.innerWidth > e.clientWidth + n || (this._saveInitialAttribute(e, i), t = window.getComputedStyle(e)[i], e.style[i] = s(Number.parseFloat(t)) + "px")
          })
      }
      reset() {
          this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, "paddingRight"), this._resetElementAttributes(ni, "paddingRight"), this._resetElementAttributes(ri, "marginRight")
      }
      _saveInitialAttribute(e, t) {
          var i = e.style[t];
          i && r.setDataAttribute(e, t, i)
      }
      _resetElementAttributes(e, i) {
          this._applyManipulationCallback(e, e => {
              var t = r.getDataAttribute(e, i);
              void 0 === t ? e.style.removeProperty(i) : (r.removeDataAttribute(e, i), e.style[i] = t)
          })
      }
      _applyManipulationCallback(e, t) {
          h(e) ? t(e) : u.find(e, this._element).forEach(t)
      }
      isOverflowing() {
          return 0 < this.getWidth()
      }
  }
  const ai = {
          className: "modal-backdrop",
          isVisible: !0,
          isAnimated: !1,
          rootElement: "body",
          clickCallback: null
      },
      li = {
          className: "string",
          isVisible: "boolean",
          isAnimated: "boolean",
          rootElement: "(element|string)",
          clickCallback: "(function|null)"
      },
      ci = "backdrop",
      di = "mousedown.bs." + ci;
  class ui {
      constructor(e) {
          this._config = this._getConfig(e), this._isAppended = !1, this._element = null
      }
      show(e) {
          this._config.isVisible ? (this._append(), this._config.isAnimated && b(this._getElement()), this._getElement().classList.add("show"), this._emulateAnimation(() => {
              E(e)
          })) : E(e)
      }
      hide(e) {
          this._config.isVisible ? (this._getElement().classList.remove("show"), this._emulateAnimation(() => {
              this.dispose(), E(e)
          })) : E(e)
      }
      _getElement() {
          if (!this._element) {
              const e = document.createElement("div");
              e.className = this._config.className, this._config.isAnimated && e.classList.add("fade"), this._element = e
          }
          return this._element
      }
      _getConfig(e) {
          return (e = {
              ...ai,
              ..."object" == typeof e ? e : {}
          }).rootElement = n(e.rootElement), p(ci, e, li), e
      }
      _append() {
          this._isAppended || (this._config.rootElement.append(this._getElement()), v.on(this._getElement(), di, () => {
              E(this._config.clickCallback)
          }), this._isAppended = !0)
      }
      dispose() {
          this._isAppended && (v.off(this._element, di), this._element.remove(), this._isAppended = !1)
      }
      _emulateAnimation(e) {
          _(e, this._getElement(), this._config.isAnimated)
      }
  }
  const hi = {
          trapElement: null,
          autofocus: !0
      },
      pi = {
          trapElement: "element",
          autofocus: "boolean"
      };
  const mi = ".bs.focustrap",
      fi = (mi, mi, "backward");
  class gi {
      constructor(e) {
          this._config = this._getConfig(e), this._isActive = !1, this._lastTabNavDirection = null
      }
      activate() {
          const {
              trapElement: e,
              autofocus: t
          } = this._config;
          this._isActive || (t && e.focus(), v.off(document, mi), v.on(document, "focusin.bs.focustrap", e => this._handleFocusin(e)), v.on(document, "keydown.tab.bs.focustrap", e => this._handleKeydown(e)), this._isActive = !0)
      }
      deactivate() {
          this._isActive && (this._isActive = !1, v.off(document, mi))
      }
      _handleFocusin(e) {
          e = e.target;
          const t = this._config["trapElement"];
          if (e !== document && e !== t && !t.contains(e)) {
              const i = u.focusableChildren(t);
              (0 === i.length ? t : this._lastTabNavDirection === fi ? i[i.length - 1] : i[0]).focus()
          }
      }
      _handleKeydown(e) {
          "Tab" === e.key && (this._lastTabNavDirection = e.shiftKey ? fi : "forward")
      }
      _getConfig(e) {
          return e = {
              ...hi,
              ..."object" == typeof e ? e : {}
          }, p("focustrap", e, pi), e
      }
  }
  const vi = ".bs.modal";
  const yi = {
          backdrop: !0,
          keyboard: !0,
          focus: !0
      },
      bi = {
          backdrop: "(boolean|string)",
          keyboard: "boolean",
          focus: "boolean"
      },
      wi = (vi, vi, "hidden" + vi),
      xi = "show" + vi,
      Ti = (vi, "resize" + vi),
      Ei = "click.dismiss" + vi,
      _i = "keydown.dismiss" + vi,
      Si = (vi, "mousedown.dismiss" + vi);
  vi;
  const Ci = "modal-open",
      ki = "modal-static";
  class Ai extends V {
      constructor(e, t) {
          super(e), this._config = this._getConfig(t), this._dialog = u.findOne(".modal-dialog", this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollBar = new oi
      }
      static get Default() {
          return yi
      }
      static get NAME() {
          return "modal"
      }
      toggle(e) {
          return this._isShown ? this.hide() : this.show(e)
      }
      show(e) {
          this._isShown || this._isTransitioning || v.trigger(this._element, xi, {
              relatedTarget: e
          }).defaultPrevented || (this._isShown = !0, this._isAnimated() && (this._isTransitioning = !0), this._scrollBar.hide(), document.body.classList.add(Ci), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), v.on(this._dialog, Si, () => {
              v.one(this._element, "mouseup.dismiss.bs.modal", e => {
                  e.target === this._element && (this._ignoreBackdropClick = !0)
              })
          }), this._showBackdrop(() => this._showElement(e)))
      }
      hide() {
          var e;
          this._isShown && !this._isTransitioning && (v.trigger(this._element, "hide.bs.modal").defaultPrevented || (this._isShown = !1, (e = this._isAnimated()) && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), this._focustrap.deactivate(), this._element.classList.remove("show"), v.off(this._element, Ei), v.off(this._dialog, Si), this._queueCallback(() => this._hideModal(), this._element, e)))
      }
      dispose() {
          [window, this._dialog].forEach(e => v.off(e, vi)), this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose()
      }
      handleUpdate() {
          this._adjustDialog()
      }
      _initializeBackDrop() {
          return new ui({
              isVisible: Boolean(this._config.backdrop),
              isAnimated: this._isAnimated()
          })
      }
      _initializeFocusTrap() {
          return new gi({
              trapElement: this._element
          })
      }
      _getConfig(e) {
          return e = {
              ...yi,
              ...r.getDataAttributes(this._element),
              ..."object" == typeof e ? e : {}
          }, p("modal", e, bi), e
      }
      _showElement(e) {
          var t = this._isAnimated();
          const i = u.findOne(".modal-body", this._dialog);
          this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0, i && (i.scrollTop = 0), t && b(this._element), this._element.classList.add("show");
          this._queueCallback(() => {
              this._config.focus && this._focustrap.activate(), this._isTransitioning = !1, v.trigger(this._element, "shown.bs.modal", {
                  relatedTarget: e
              })
          }, this._dialog, t)
      }
      _setEscapeEvent() {
          this._isShown ? v.on(this._element, _i, e => {
              this._config.keyboard && "Escape" === e.key ? (e.preventDefault(), this.hide()) : this._config.keyboard || "Escape" !== e.key || this._triggerBackdropTransition()
          }) : v.off(this._element, _i)
      }
      _setResizeEvent() {
          this._isShown ? v.on(window, Ti, () => this._adjustDialog()) : v.off(window, Ti)
      }
      _hideModal() {
          this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide(() => {
              document.body.classList.remove(Ci), this._resetAdjustments(), this._scrollBar.reset(), v.trigger(this._element, wi)
          })
      }
      _showBackdrop(e) {
          v.on(this._element, Ei, e => {
              this._ignoreBackdropClick ? this._ignoreBackdropClick = !1 : e.target === e.currentTarget && (!0 === this._config.backdrop ? this.hide() : "static" === this._config.backdrop && this._triggerBackdropTransition())
          }), this._backdrop.show(e)
      }
      _isAnimated() {
          return this._element.classList.contains("fade")
      }
      _triggerBackdropTransition() {
          if (!v.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented) {
              const {
                  classList: e,
                  scrollHeight: t,
                  style: i
              } = this._element, s = t > document.documentElement.clientHeight;
              !s && "hidden" === i.overflowY || e.contains(ki) || (s || (i.overflowY = "hidden"), e.add(ki), this._queueCallback(() => {
                  e.remove(ki), s || this._queueCallback(() => {
                      i.overflowY = ""
                  }, this._dialog)
              }, this._dialog), this._element.focus())
          }
      }
      _adjustDialog() {
          var e = this._element.scrollHeight > document.documentElement.clientHeight,
              t = this._scrollBar.getWidth(),
              i = 0 < t;
          (!i && e && !s() || i && !e && s()) && (this._element.style.paddingLeft = t + "px"), (i && !e && !s() || !i && e && s()) && (this._element.style.paddingRight = t + "px")
      }
      _resetAdjustments() {
          this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
      }
      static jQueryInterface(t, i) {
          return this.each(function() {
              const e = Ai.getOrCreateInstance(this, t);
              if ("string" == typeof t) {
                  if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                  e[t](i)
              }
          })
      }
  }
  v.on(document, "click.bs.modal.data-api", '[data-bs-toggle="modal"]', function(e) {
      const t = c(this);
      ["A", "AREA"].includes(this.tagName) && e.preventDefault(), v.one(t, xi, e => {
          e.defaultPrevented || v.one(t, wi, () => {
              m(this) && this.focus()
          })
      });
      e = u.findOne(".modal.show");
      e && Ai.getInstance(e).hide();
      const i = Ai.getOrCreateInstance(t);
      i.toggle(this)
  }), G(Ai), T(Ai);
  const Mi = "offcanvas";
  De = ".bs.offcanvas";
  const Pi = {
          backdrop: !0,
          keyboard: !0,
          scroll: !1
      },
      Oi = {
          backdrop: "boolean",
          keyboard: "boolean",
          scroll: "boolean"
      },
      Ii = ".offcanvas.show",
      Li = "hidden" + De;
  class $i extends V {
      constructor(e, t) {
          super(e), this._config = this._getConfig(t), this._isShown = !1, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners()
      }
      static get NAME() {
          return Mi
      }
      static get Default() {
          return Pi
      }
      toggle(e) {
          return this._isShown ? this.hide() : this.show(e)
      }
      show(e) {
          this._isShown || v.trigger(this._element, "show.bs.offcanvas", {
              relatedTarget: e
          }).defaultPrevented || (this._isShown = !0, this._element.style.visibility = "visible", this._backdrop.show(), this._config.scroll || (new oi).hide(), this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add("show"), this._queueCallback(() => {
              this._config.scroll || this._focustrap.activate(), v.trigger(this._element, "shown.bs.offcanvas", {
                  relatedTarget: e
              })
          }, this._element, !0))
      }
      hide() {
          this._isShown && (v.trigger(this._element, "hide.bs.offcanvas").defaultPrevented || (this._focustrap.deactivate(), this._element.blur(), this._isShown = !1, this._element.classList.remove("show"), this._backdrop.hide(), this._queueCallback(() => {
              this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._element.style.visibility = "hidden", this._config.scroll || (new oi).reset(), v.trigger(this._element, Li)
          }, this._element, !0)))
      }
      dispose() {
          this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose()
      }
      _getConfig(e) {
          return e = {
              ...Pi,
              ...r.getDataAttributes(this._element),
              ..."object" == typeof e ? e : {}
          }, p(Mi, e, Oi), e
      }
      _initializeBackDrop() {
          return new ui({
              className: "offcanvas-backdrop",
              isVisible: this._config.backdrop,
              isAnimated: !0,
              rootElement: this._element.parentNode,
              clickCallback: () => this.hide()
          })
      }
      _initializeFocusTrap() {
          return new gi({
              trapElement: this._element
          })
      }
      _addEventListeners() {
          v.on(this._element, "keydown.dismiss.bs.offcanvas", e => {
              this._config.keyboard && "Escape" === e.key && this.hide()
          })
      }
      static jQueryInterface(t) {
          return this.each(function() {
              const e = $i.getOrCreateInstance(this, t);
              if ("string" == typeof t) {
                  if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                  e[t](this)
              }
          })
      }
  }
  v.on(document, "click.bs.offcanvas.data-api", '[data-bs-toggle="offcanvas"]', function(e) {
      var t = c(this);
      if (["A", "AREA"].includes(this.tagName) && e.preventDefault(), !f(this)) {
          v.one(t, Li, () => {
              m(this) && this.focus()
          });
          e = u.findOne(Ii);
          e && e !== t && $i.getInstance(e).hide();
          const i = $i.getOrCreateInstance(t);
          i.toggle(this)
      }
  }), v.on(window, "load.bs.offcanvas.data-api", () => u.find(Ii).forEach(e => $i.getOrCreateInstance(e).show())), G($i), T($i);
  const zi = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]);
  const Ni = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,
      Di = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;
  je = {
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
      ul: []
  };

  function ji(e, i, t) {
      if (!e.length) return e;
      if (t && "function" == typeof t) return t(e);
      const s = new window.DOMParser,
          n = s.parseFromString(e, "text/html");
      var r = [].concat(...n.body.querySelectorAll("*"));
      for (let e = 0, t = r.length; e < t; e++) {
          const a = r[e];
          var o = a.nodeName.toLowerCase();
          if (Object.keys(i).includes(o)) {
              const l = [].concat(...a.attributes),
                  c = [].concat(i["*"] || [], i[o] || []);
              l.forEach(e => {
                  ((e, t) => {
                      var i = e.nodeName.toLowerCase();
                      if (t.includes(i)) return !zi.has(i) || Boolean(Ni.test(e.nodeValue) || Di.test(e.nodeValue));
                      const s = t.filter(e => e instanceof RegExp);
                      for (let e = 0, t = s.length; e < t; e++)
                          if (s[e].test(i)) return !0;
                      return !1
                  })(e, c) || a.removeAttribute(e.nodeName)
              })
          } else a.remove()
      }
      return n.body.innerHTML
  }
  const Fi = "tooltip";
  e = ".bs.tooltip";
  const Hi = new Set(["sanitize", "allowList", "sanitizeFn"]),
      qi = {
          animation: "boolean",
          template: "string",
          title: "(string|element|function)",
          trigger: "string",
          delay: "(number|object)",
          html: "boolean",
          selector: "(string|boolean)",
          placement: "(string|function)",
          offset: "(array|string|function)",
          container: "(string|element|boolean)",
          fallbackPlacements: "array",
          boundary: "(string|element)",
          customClass: "(string|function)",
          sanitize: "boolean",
          sanitizeFn: "(null|function)",
          allowList: "object",
          popperConfig: "(null|object|function)"
      },
      Bi = {
          AUTO: "auto",
          TOP: "top",
          RIGHT: s() ? "left" : "right",
          BOTTOM: "bottom",
          LEFT: s() ? "right" : "left"
      },
      Ri = {
          animation: !0,
          template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
          trigger: "hover focus",
          title: "",
          delay: 0,
          html: !1,
          selector: !1,
          placement: "top",
          offset: [0, 0],
          container: !1,
          fallbackPlacements: ["top", "right", "bottom", "left"],
          boundary: "clippingParents",
          customClass: "",
          sanitize: !0,
          sanitizeFn: null,
          allowList: je,
          popperConfig: null
      },
      Wi = {
          HIDE: "hide" + e,
          HIDDEN: "hidden" + e,
          SHOW: "show" + e,
          SHOWN: "shown" + e,
          INSERTED: "inserted" + e,
          CLICK: "click" + e,
          FOCUSIN: "focusin" + e,
          FOCUSOUT: "focusout" + e,
          MOUSEENTER: "mouseenter" + e,
          MOUSELEAVE: "mouseleave" + e
      },
      Yi = "fade";
  const Xi = "show",
      Vi = "show",
      Gi = ".tooltip-inner",
      Ui = "hide.bs.modal",
      Qi = "hover",
      Ki = "focus";
  class Zi extends V {
      constructor(e, t) {
          if (void 0 === Ht) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
          super(e), this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this._config = this._getConfig(t), this.tip = null, this._setListeners()
      }
      static get Default() {
          return Ri
      }
      static get NAME() {
          return Fi
      }
      static get Event() {
          return Wi
      }
      static get DefaultType() {
          return qi
      }
      enable() {
          this._isEnabled = !0
      }
      disable() {
          this._isEnabled = !1
      }
      toggleEnabled() {
          this._isEnabled = !this._isEnabled
      }
      toggle(e) {
          if (this._isEnabled)
              if (e) {
                  const t = this._initializeOnDelegatedTarget(e);
                  t._activeTrigger.click = !t._activeTrigger.click, t._isWithActiveTrigger() ? t._enter(null, t) : t._leave(null, t)
              } else this.getTipElement().classList.contains(Xi) ? this._leave(null, this) : this._enter(null, this)
      }
      dispose() {
          clearTimeout(this._timeout), v.off(this._element.closest(".modal"), Ui, this._hideModalHandler), this.tip && this.tip.remove(), this._disposePopper(), super.dispose()
      }
      show() {
          if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");
          if (this.isWithContent() && this._isEnabled) {
              var e = v.trigger(this._element, this.constructor.Event.SHOW);
              const i = g(this._element);
              var t = (null === i ? this._element.ownerDocument.documentElement : i).contains(this._element);
              if (!e.defaultPrevented && t) {
                  "tooltip" === this.constructor.NAME && this.tip && this.getTitle() !== this.tip.querySelector(Gi).innerHTML && (this._disposePopper(), this.tip.remove(), this.tip = null);
                  const s = this.getTipElement();
                  e = (e => {
                      for (; e += Math.floor(1e6 * Math.random()), document.getElementById(e););
                      return e
                  })(this.constructor.NAME), t = (s.setAttribute("id", e), this._element.setAttribute("aria-describedby", e), this._config.animation && s.classList.add(Yi), "function" == typeof this._config.placement ? this._config.placement.call(this, s, this._element) : this._config.placement), e = this._getAttachment(t);
                  this._addAttachmentClass(e);
                  const n = this._config["container"],
                      r = (X.set(s, this.constructor.DATA_KEY, this), this._element.ownerDocument.documentElement.contains(this.tip) || (n.append(s), v.trigger(this._element, this.constructor.Event.INSERTED)), this._popper ? this._popper.update() : this._popper = Ft(this._element, s, this._getPopperConfig(e)), s.classList.add(Xi), this._resolvePossibleFunction(this._config.customClass));
                  r && s.classList.add(...r.split(" ")), "ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach(e => {
                      v.on(e, "mouseover", y)
                  });
                  t = this.tip.classList.contains(Yi);
                  this._queueCallback(() => {
                      var e = this._hoverState;
                      this._hoverState = null, v.trigger(this._element, this.constructor.Event.SHOWN), "out" === e && this._leave(null, this)
                  }, this.tip, t)
              }
          }
      }
      hide() {
          if (this._popper) {
              const t = this.getTipElement();
              var e;
              v.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented || (t.classList.remove(Xi), "ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach(e => v.off(e, "mouseover", y)), this._activeTrigger.click = !1, this._activeTrigger[Ki] = !1, this._activeTrigger[Qi] = !1, e = this.tip.classList.contains(Yi), this._queueCallback(() => {
                  this._isWithActiveTrigger() || (this._hoverState !== Vi && t.remove(), this._cleanTipClass(), this._element.removeAttribute("aria-describedby"), v.trigger(this._element, this.constructor.Event.HIDDEN), this._disposePopper())
              }, this.tip, e), this._hoverState = "")
          }
      }
      update() {
          null !== this._popper && this._popper.update()
      }
      isWithContent() {
          return Boolean(this.getTitle())
      }
      getTipElement() {
          if (this.tip) return this.tip;
          const e = document.createElement("div"),
              t = (e.innerHTML = this._config.template, e.children[0]);
          return this.setContent(t), t.classList.remove(Yi, Xi), this.tip = t, this.tip
      }
      setContent(e) {
          this._sanitizeAndSetContent(e, this.getTitle(), Gi)
      }
      _sanitizeAndSetContent(e, t, i) {
          const s = u.findOne(i, e);
          t || !s ? this.setElementContent(s, t) : s.remove()
      }
      setElementContent(e, t) {
          if (null !== e) return h(t) ? (t = n(t), void(this._config.html ? t.parentNode !== e && (e.innerHTML = "", e.append(t)) : e.textContent = t.textContent)) : void(this._config.html ? (this._config.sanitize && (t = ji(t, this._config.allowList, this._config.sanitizeFn)), e.innerHTML = t) : e.textContent = t)
      }
      getTitle() {
          var e = this._element.getAttribute("data-bs-original-title") || this._config.title;
          return this._resolvePossibleFunction(e)
      }
      updateAttachment(e) {
          return "right" === e ? "end" : "left" === e ? "start" : e
      }
      _initializeOnDelegatedTarget(e, t) {
          return t || this.constructor.getOrCreateInstance(e.delegateTarget, this._getDelegateConfig())
      }
      _getOffset() {
          const t = this._config["offset"];
          return "string" == typeof t ? t.split(",").map(e => Number.parseInt(e, 10)) : "function" == typeof t ? e => t(e, this._element) : t
      }
      _resolvePossibleFunction(e) {
          return "function" == typeof e ? e.call(this._element) : e
      }
      _getPopperConfig(e) {
          e = {
              placement: e,
              modifiers: [{
                  name: "flip",
                  options: {
                      fallbackPlacements: this._config.fallbackPlacements
                  }
              }, {
                  name: "offset",
                  options: {
                      offset: this._getOffset()
                  }
              }, {
                  name: "preventOverflow",
                  options: {
                      boundary: this._config.boundary
                  }
              }, {
                  name: "arrow",
                  options: {
                      element: `.${this.constructor.NAME}-arrow`
                  }
              }, {
                  name: "onChange",
                  enabled: !0,
                  phase: "afterWrite",
                  fn: e => this._handlePopperPlacementChange(e)
              }],
              onFirstUpdate: e => {
                  e.options.placement !== e.placement && this._handlePopperPlacementChange(e)
              }
          };
          return {
              ...e,
              ..."function" == typeof this._config.popperConfig ? this._config.popperConfig(e) : this._config.popperConfig
          }
      }
      _addAttachmentClass(e) {
          this.getTipElement().classList.add(this._getBasicClassPrefix() + "-" + this.updateAttachment(e))
      }
      _getAttachment(e) {
          return Bi[e.toUpperCase()]
      }
      _setListeners() {
          const e = this._config.trigger.split(" ");
          e.forEach(e => {
              var t;
              "click" === e ? v.on(this._element, this.constructor.Event.CLICK, this._config.selector, e => this.toggle(e)) : "manual" !== e && (t = e === Qi ? this.constructor.Event.MOUSEENTER : this.constructor.Event.FOCUSIN, e = e === Qi ? this.constructor.Event.MOUSELEAVE : this.constructor.Event.FOCUSOUT, v.on(this._element, t, this._config.selector, e => this._enter(e)), v.on(this._element, e, this._config.selector, e => this._leave(e)))
          }), this._hideModalHandler = () => {
              this._element && this.hide()
          }, v.on(this._element.closest(".modal"), Ui, this._hideModalHandler), this._config.selector ? this._config = {
              ...this._config,
              trigger: "manual",
              selector: ""
          } : this._fixTitle()
      }
      _fixTitle() {
          var e = this._element.getAttribute("title"),
              t = typeof this._element.getAttribute("data-bs-original-title");
          !e && "string" == t || (this._element.setAttribute("data-bs-original-title", e || ""), !e || this._element.getAttribute("aria-label") || this._element.textContent || this._element.setAttribute("aria-label", e), this._element.setAttribute("title", ""))
      }
      _enter(e, t) {
          t = this._initializeOnDelegatedTarget(e, t), e && (t._activeTrigger["focusin" === e.type ? Ki : Qi] = !0), t.getTipElement().classList.contains(Xi) || t._hoverState === Vi ? t._hoverState = Vi : (clearTimeout(t._timeout), t._hoverState = Vi, t._config.delay && t._config.delay.show ? t._timeout = setTimeout(() => {
              t._hoverState === Vi && t.show()
          }, t._config.delay.show) : t.show())
      }
      _leave(e, t) {
          t = this._initializeOnDelegatedTarget(e, t), e && (t._activeTrigger["focusout" === e.type ? Ki : Qi] = t._element.contains(e.relatedTarget)), t._isWithActiveTrigger() || (clearTimeout(t._timeout), t._hoverState = "out", t._config.delay && t._config.delay.hide ? t._timeout = setTimeout(() => {
              "out" === t._hoverState && t.hide()
          }, t._config.delay.hide) : t.hide())
      }
      _isWithActiveTrigger() {
          for (const e in this._activeTrigger)
              if (this._activeTrigger[e]) return !0;
          return !1
      }
      _getConfig(e) {
          const t = r.getDataAttributes(this._element);
          return Object.keys(t).forEach(e => {
              Hi.has(e) && delete t[e]
          }), (e = {
              ...this.constructor.Default,
              ...t,
              ..."object" == typeof e && e ? e : {}
          }).container = !1 === e.container ? document.body : n(e.container), "number" == typeof e.delay && (e.delay = {
              show: e.delay,
              hide: e.delay
          }), "number" == typeof e.title && (e.title = e.title.toString()), "number" == typeof e.content && (e.content = e.content.toString()), p(Fi, e, this.constructor.DefaultType), e.sanitize && (e.template = ji(e.template, e.allowList, e.sanitizeFn)), e
      }
      _getDelegateConfig() {
          const e = {};
          for (const t in this._config) this.constructor.Default[t] !== this._config[t] && (e[t] = this._config[t]);
          return e
      }
      _cleanTipClass() {
          const t = this.getTipElement();
          var e = new RegExp(`(^|\\s)${this._getBasicClassPrefix()}\\S+`, "g");
          const i = t.getAttribute("class").match(e);
          null !== i && 0 < i.length && i.map(e => e.trim()).forEach(e => t.classList.remove(e))
      }
      _getBasicClassPrefix() {
          return "bs-tooltip"
      }
      _handlePopperPlacementChange(e) {
          e = e.state;
          e && (this.tip = e.elements.popper, this._cleanTipClass(), this._addAttachmentClass(this._getAttachment(e.placement)))
      }
      _disposePopper() {
          this._popper && (this._popper.destroy(), this._popper = null)
      }
      static jQueryInterface(t) {
          return this.each(function() {
              const e = Zi.getOrCreateInstance(this, t);
              if ("string" == typeof t) {
                  if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                  e[t]()
              }
          })
      }
  }
  T(Zi);
  t = ".bs.popover";
  const Ji = {
          ...Zi.Default,
          placement: "right",
          offset: [0, 8],
          trigger: "click",
          content: "",
          template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
      },
      es = {
          ...Zi.DefaultType,
          content: "(string|element|function)"
      },
      ts = {
          HIDE: "hide" + t,
          HIDDEN: "hidden" + t,
          SHOW: "show" + t,
          SHOWN: "shown" + t,
          INSERTED: "inserted" + t,
          CLICK: "click" + t,
          FOCUSIN: "focusin" + t,
          FOCUSOUT: "focusout" + t,
          MOUSEENTER: "mouseenter" + t,
          MOUSELEAVE: "mouseleave" + t
      };
  class is extends Zi {
      static get Default() {
          return Ji
      }
      static get NAME() {
          return "popover"
      }
      static get Event() {
          return ts
      }
      static get DefaultType() {
          return es
      }
      isWithContent() {
          return this.getTitle() || this._getContent()
      }
      setContent(e) {
          this._sanitizeAndSetContent(e, this.getTitle(), ".popover-header"), this._sanitizeAndSetContent(e, this._getContent(), ".popover-body")
      }
      _getContent() {
          return this._resolvePossibleFunction(this._config.content)
      }
      _getBasicClassPrefix() {
          return "bs-popover"
      }
      static jQueryInterface(t) {
          return this.each(function() {
              const e = is.getOrCreateInstance(this, t);
              if ("string" == typeof t) {
                  if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                  e[t]()
              }
          })
      }
  }
  T(is);
  const ss = "scrollspy";
  const ns = ".bs.scrollspy";
  const rs = {
          offset: 10,
          method: "auto",
          target: ""
      },
      os = {
          offset: "number",
          method: "string",
          target: "(string|element)"
      };
  ns, ns;
  ns;
  const as = "dropdown-item",
      ls = "active",
      cs = ".nav-link",
      ds = ".list-group-item",
      us = cs + `, ${ds}, .` + as,
      hs = "position";
  class ps extends V {
      constructor(e, t) {
          super(e), this._scrollElement = "BODY" === this._element.tagName ? window : this._element, this._config = this._getConfig(t), this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, v.on(this._scrollElement, "scroll.bs.scrollspy", () => this._process()), this.refresh(), this._process()
      }
      static get Default() {
          return rs
      }
      static get NAME() {
          return ss
      }
      refresh() {
          var e = this._scrollElement === this._scrollElement.window ? "offset" : hs;
          const s = "auto" === this._config.method ? e : this._config.method,
              n = s === hs ? this._getScrollTop() : 0,
              t = (this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), u.find(us, this._config.target));
          t.map(e => {
              e = l(e);
              const t = e ? u.findOne(e) : null;
              if (t) {
                  var i = t.getBoundingClientRect();
                  if (i.width || i.height) return [r[s](t).top + n, e]
              }
              return null
          }).filter(e => e).sort((e, t) => e[0] - t[0]).forEach(e => {
              this._offsets.push(e[0]), this._targets.push(e[1])
          })
      }
      dispose() {
          v.off(this._scrollElement, ns), super.dispose()
      }
      _getConfig(e) {
          return (e = {
              ...rs,
              ...r.getDataAttributes(this._element),
              ..."object" == typeof e && e ? e : {}
          }).target = n(e.target) || document.documentElement, p(ss, e, os), e
      }
      _getScrollTop() {
          return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
      }
      _getScrollHeight() {
          return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
      }
      _getOffsetHeight() {
          return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
      }
      _process() {
          var t = this._getScrollTop() + this._config.offset,
              e = this._getScrollHeight(),
              i = this._config.offset + e - this._getOffsetHeight();
          if (this._scrollHeight !== e && this.refresh(), i <= t) return e = this._targets[this._targets.length - 1], void(this._activeTarget !== e && this._activate(e));
          if (this._activeTarget && t < this._offsets[0] && 0 < this._offsets[0]) return this._activeTarget = null, void this._clear();
          for (let e = this._offsets.length; e--;) this._activeTarget !== this._targets[e] && t >= this._offsets[e] && (void 0 === this._offsets[e + 1] || t < this._offsets[e + 1]) && this._activate(this._targets[e])
      }
      _activate(t) {
          this._activeTarget = t, this._clear();
          const e = us.split(",").map(e => e + `[data-bs-target="${t}"],${e}[href="${t}"]`),
              i = u.findOne(e.join(","), this._config.target);
          i.classList.add(ls), i.classList.contains(as) ? u.findOne(".dropdown-toggle", i.closest(".dropdown")).classList.add(ls) : u.parents(i, ".nav, .list-group").forEach(e => {
              u.prev(e, cs + ", " + ds).forEach(e => e.classList.add(ls)), u.prev(e, ".nav-item").forEach(e => {
                  u.children(e, cs).forEach(e => e.classList.add(ls))
              })
          }), v.trigger(this._scrollElement, "activate.bs.scrollspy", {
              relatedTarget: t
          })
      }
      _clear() {
          u.find(us, this._config.target).filter(e => e.classList.contains(ls)).forEach(e => e.classList.remove(ls))
      }
      static jQueryInterface(t) {
          return this.each(function() {
              const e = ps.getOrCreateInstance(this, t);
              if ("string" == typeof t) {
                  if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                  e[t]()
              }
          })
      }
  }
  v.on(window, "load.bs.scrollspy.data-api", () => {
      u.find('[data-bs-spy="scroll"]').forEach(e => new ps(e))
  }), T(ps);
  const ms = "active",
      fs = ".active",
      gs = ":scope > li > .active";
  class vs extends V {
      static get NAME() {
          return "tab"
      }
      show() {
          if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE || !this._element.classList.contains(ms)) {
              let e;
              var t = c(this._element),
                  i = this._element.closest(".nav, .list-group"),
                  s = (i && (s = "UL" === i.nodeName || "OL" === i.nodeName ? gs : fs, e = u.find(s, i), e = e[e.length - 1]), e ? v.trigger(e, "hide.bs.tab", {
                      relatedTarget: this._element
                  }) : null);
              v.trigger(this._element, "show.bs.tab", {
                  relatedTarget: e
              }).defaultPrevented || null !== s && s.defaultPrevented || (this._activate(this._element, i), s = () => {
                  v.trigger(e, "hidden.bs.tab", {
                      relatedTarget: this._element
                  }), v.trigger(this._element, "shown.bs.tab", {
                      relatedTarget: e
                  })
              }, t ? this._activate(t, t.parentNode, s) : s())
          }
      }
      _activate(e, t, i) {
          const s = (!t || "UL" !== t.nodeName && "OL" !== t.nodeName ? u.children(t, fs) : u.find(gs, t))[0];
          var t = i && s && s.classList.contains("fade"),
              n = () => this._transitionComplete(e, s, i);
          s && t ? (s.classList.remove("show"), this._queueCallback(n, e, !0)) : n()
      }
      _transitionComplete(e, t, i) {
          if (t) {
              t.classList.remove(ms);
              const n = u.findOne(":scope > .dropdown-menu .active", t.parentNode);
              n && n.classList.remove(ms), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !1)
          }
          e.classList.add(ms), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), b(e), e.classList.contains("fade") && e.classList.add("show");
          let s = e.parentNode;
          s && "LI" === s.nodeName && (s = s.parentNode), s && s.classList.contains("dropdown-menu") && ((t = e.closest(".dropdown")) && u.find(".dropdown-toggle", t).forEach(e => e.classList.add(ms)), e.setAttribute("aria-expanded", !0)), i && i()
      }
      static jQueryInterface(t) {
          return this.each(function() {
              const e = vs.getOrCreateInstance(this);
              if ("string" == typeof t) {
                  if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                  e[t]()
              }
          })
      }
  }
  v.on(document, "click.bs.tab.data-api", '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', function(e) {
      if (["A", "AREA"].includes(this.tagName) && e.preventDefault(), !f(this)) {
          const t = vs.getOrCreateInstance(this);
          t.show()
      }
  }), T(vs);
  const ys = "show",
      bs = "showing",
      ws = {
          animation: "boolean",
          autohide: "boolean",
          delay: "number"
      },
      xs = {
          animation: !0,
          autohide: !0,
          delay: 5e3
      };
  class Ts extends V {
      constructor(e, t) {
          super(e), this._config = this._getConfig(t), this._timeout = null, this._hasMouseInteraction = !1, this._hasKeyboardInteraction = !1, this._setListeners()
      }
      static get DefaultType() {
          return ws
      }
      static get Default() {
          return xs
      }
      static get NAME() {
          return "toast"
      }
      show() {
          v.trigger(this._element, "show.bs.toast").defaultPrevented || (this._clearTimeout(), this._config.animation && this._element.classList.add("fade"), this._element.classList.remove("hide"), b(this._element), this._element.classList.add(ys), this._element.classList.add(bs), this._queueCallback(() => {
              this._element.classList.remove(bs), v.trigger(this._element, "shown.bs.toast"), this._maybeScheduleHide()
          }, this._element, this._config.animation))
      }
      hide() {
          this._element.classList.contains(ys) && (v.trigger(this._element, "hide.bs.toast").defaultPrevented || (this._element.classList.add(bs), this._queueCallback(() => {
              this._element.classList.add("hide"), this._element.classList.remove(bs), this._element.classList.remove(ys), v.trigger(this._element, "hidden.bs.toast")
          }, this._element, this._config.animation)))
      }
      dispose() {
          this._clearTimeout(), this._element.classList.contains(ys) && this._element.classList.remove(ys), super.dispose()
      }
      _getConfig(e) {
          return e = {
              ...xs,
              ...r.getDataAttributes(this._element),
              ..."object" == typeof e && e ? e : {}
          }, p("toast", e, this.constructor.DefaultType), e
      }
      _maybeScheduleHide() {
          this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(() => {
              this.hide()
          }, this._config.delay)))
      }
      _onInteraction(e, t) {
          switch (e.type) {
              case "mouseover":
              case "mouseout":
                  this._hasMouseInteraction = t;
                  break;
              case "focusin":
              case "focusout":
                  this._hasKeyboardInteraction = t
          }
          t ? this._clearTimeout() : (e = e.relatedTarget, this._element === e || this._element.contains(e) || this._maybeScheduleHide())
      }
      _setListeners() {
          v.on(this._element, "mouseover.bs.toast", e => this._onInteraction(e, !0)), v.on(this._element, "mouseout.bs.toast", e => this._onInteraction(e, !1)), v.on(this._element, "focusin.bs.toast", e => this._onInteraction(e, !0)), v.on(this._element, "focusout.bs.toast", e => this._onInteraction(e, !1))
      }
      _clearTimeout() {
          clearTimeout(this._timeout), this._timeout = null
      }
      static jQueryInterface(t) {
          return this.each(function() {
              const e = Ts.getOrCreateInstance(this, t);
              if ("string" == typeof t) {
                  if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                  e[t](this)
              }
          })
      }
  }
  return G(Ts), T(Ts), {
      Alert: U,
      Button: K,
      Carousel: he,
      Collapse: Ee,
      Dropdown: si,
      Modal: Ai,
      Offcanvas: $i,
      Popover: is,
      ScrollSpy: ps,
      Tab: vs,
      Toast: Ts,
      Tooltip: Zi
  }
}),
function(e, t) {
  "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.ClipboardJS = t() : e.ClipboardJS = t()
}(this, function() {
  return i = {
      686: function(i, e, t) {
          "use strict";
          t.d(e, {
              default: function() {
                  return s
              }
          });
          var e = t(279),
              m = t.n(e),
              e = t(370),
              f = t.n(e),
              e = t(817),
              o = t.n(e);

          function a(e) {
              try {
                  return document.execCommand(e)
              } catch (e) {
                  return
              }
          }

          function l(e) {
              return e = o()(e), a("cut"), e
          }

          function c(e) {
              var t, i, s, n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {
                      container: document.body
                  },
                  r = "";
              return "string" == typeof e ? (t = e, i = "rtl" === document.documentElement.getAttribute("dir"), (s = document.createElement("textarea")).style.fontSize = "12pt", s.style.border = "0", s.style.padding = "0", s.style.margin = "0", s.style.position = "absolute", s.style[i ? "right" : "left"] = "-9999px", i = window.pageYOffset || document.documentElement.scrollTop, s.style.top = "".concat(i, "px"), s.setAttribute("readonly", ""), s.value = t, n.container.appendChild(s), r = o()(s), a("copy"), s.remove()) : (r = o()(e), a("copy")), r
          }

          function d(e) {
              return (d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                  return typeof e
              } : function(e) {
                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
              })(e)
          }

          function u(e) {
              return (u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                  return typeof e
              } : function(e) {
                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
              })(e)
          }

          function g(e, t) {
              for (var i = 0; i < t.length; i++) {
                  var s = t[i];
                  s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
              }
          }

          function v(e, t) {
              return (v = Object.setPrototypeOf || function(e, t) {
                  return e.__proto__ = t, e
              })(e, t)
          }

          function h(e) {
              return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                  return e.__proto__ || Object.getPrototypeOf(e)
              })(e)
          }

          function p(e, t) {
              if (e = "data-clipboard-".concat(e), t.hasAttribute(e)) return t.getAttribute(e)
          }
          var s = function() {
              var e = r,
                  t = m();
              if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
              e.prototype = Object.create(t && t.prototype, {
                  constructor: {
                      value: e,
                      writable: !0,
                      configurable: !0
                  }
              }), t && v(e, t);
              i = r, s = function() {
                  if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                  if (Reflect.construct.sham) return !1;
                  if ("function" == typeof Proxy) return !0;
                  try {
                      return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
                  } catch (e) {
                      return !1
                  }
              }();
              var i, s, n = function() {
                  var e = h(i),
                      t = s ? (t = h(this).constructor, Reflect.construct(e, arguments, t)) : e.apply(this, arguments),
                      e = this;
                  if (!t || "object" !== u(t) && "function" != typeof t) {
                      if (void 0 !== e) return e;
                      throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
                  }
                  return t
              };

              function r(e, t) {
                  var i = this;
                  if (!(i instanceof r)) throw new TypeError("Cannot call a class as a function");
                  return (i = n.call(this)).resolveOptions(t), i.listenClick(e), i
              }
              return e = [{
                  key: "copy",
                  value: function(e) {
                      var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {
                          container: document.body
                      };
                      return c(e, t)
                  }
              }, {
                  key: "cut",
                  value: l
              }, {
                  key: "isSupported",
                  value: function() {
                      var e = "string" == typeof(e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : ["copy", "cut"]) ? [e] : e,
                          t = !!document.queryCommandSupported;
                      return e.forEach(function(e) {
                          t = t && !!document.queryCommandSupported(e)
                      }), t
                  }
              }], g((t = r).prototype, [{
                  key: "resolveOptions",
                  value: function() {
                      var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                      this.action = "function" == typeof e.action ? e.action : this.defaultAction, this.target = "function" == typeof e.target ? e.target : this.defaultTarget, this.text = "function" == typeof e.text ? e.text : this.defaultText, this.container = "object" === u(e.container) ? e.container : document.body
                  }
              }, {
                  key: "listenClick",
                  value: function(e) {
                      var t = this;
                      this.listener = f()(e, "click", function(e) {
                          return t.onClick(e)
                      })
                  }
              }, {
                  key: "onClick",
                  value: function(e) {
                      var t = e.delegateTarget || e.currentTarget,
                          e = function() {
                              var e = void 0 === (i = (s = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}).action) ? "copy" : i,
                                  t = s.container,
                                  i = s.target,
                                  s = s.text;
                              if ("copy" !== e && "cut" !== e) throw new Error('Invalid "action" value, use either "copy" or "cut"');
                              if (void 0 !== i) {
                                  if (!i || "object" !== d(i) || 1 !== i.nodeType) throw new Error('Invalid "target" value, use a valid Element');
                                  if ("copy" === e && i.hasAttribute("disabled")) throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                                  if ("cut" === e && (i.hasAttribute("readonly") || i.hasAttribute("disabled"))) throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes')
                              }
                              return s ? c(s, {
                                  container: t
                              }) : i ? "cut" === e ? l(i) : c(i, {
                                  container: t
                              }) : void 0
                          }({
                              action: this.action(t),
                              container: this.container,
                              target: this.target(t),
                              text: this.text(t)
                          });
                      this.emit(e ? "success" : "error", {
                          action: this.action,
                          text: e,
                          trigger: t,
                          clearSelection: function() {
                              t && t.focus(), document.activeElement.blur(), window.getSelection().removeAllRanges()
                          }
                      })
                  }
              }, {
                  key: "defaultAction",
                  value: function(e) {
                      return p("action", e)
                  }
              }, {
                  key: "defaultTarget",
                  value: function(e) {
                      if (e = p("target", e)) return document.querySelector(e)
                  }
              }, {
                  key: "defaultText",
                  value: function(e) {
                      return p("text", e)
                  }
              }, {
                  key: "destroy",
                  value: function() {
                      this.listener.destroy()
                  }
              }]), g(t, e), r
          }()
      },
      828: function(e) {
          var t;
          "undefined" == typeof Element || Element.prototype.matches || ((t = Element.prototype).matches = t.matchesSelector || t.mozMatchesSelector || t.msMatchesSelector || t.oMatchesSelector || t.webkitMatchesSelector), e.exports = function(e, t) {
              for (; e && 9 !== e.nodeType;) {
                  if ("function" == typeof e.matches && e.matches(t)) return e;
                  e = e.parentNode
              }
          }
      },
      438: function(e, t, i) {
          var o = i(828);

          function r(e, t, i, s, n) {
              var r = function(t, i, e, s) {
                  return function(e) {
                      e.delegateTarget = o(e.target, i), e.delegateTarget && s.call(t, e)
                  }
              }.apply(this, arguments);
              return e.addEventListener(i, r, n), {
                  destroy: function() {
                      e.removeEventListener(i, r, n)
                  }
              }
          }
          e.exports = function(e, t, i, s, n) {
              return "function" == typeof e.addEventListener ? r.apply(null, arguments) : "function" == typeof i ? r.bind(null, document).apply(null, arguments) : ("string" == typeof e && (e = document.querySelectorAll(e)), Array.prototype.map.call(e, function(e) {
                  return r(e, t, i, s, n)
              }))
          }
      },
      879: function(e, i) {
          i.node = function(e) {
              return void 0 !== e && e instanceof HTMLElement && 1 === e.nodeType
          }, i.nodeList = function(e) {
              var t = Object.prototype.toString.call(e);
              return void 0 !== e && ("[object NodeList]" === t || "[object HTMLCollection]" === t) && "length" in e && (0 === e.length || i.node(e[0]))
          }, i.string = function(e) {
              return "string" == typeof e || e instanceof String
          }, i.fn = function(e) {
              return "[object Function]" === Object.prototype.toString.call(e)
          }
      },
      370: function(e, t, i) {
          var c = i(879),
              d = i(438);
          e.exports = function(e, t, i) {
              if (!e && !t && !i) throw new Error("Missing required arguments");
              if (!c.string(t)) throw new TypeError("Second argument must be a String");
              if (!c.fn(i)) throw new TypeError("Third argument must be a Function");
              if (c.node(e)) return (o = e).addEventListener(a = t, l = i), {
                  destroy: function() {
                      o.removeEventListener(a, l)
                  }
              };
              if (c.nodeList(e)) return s = e, n = t, r = i, Array.prototype.forEach.call(s, function(e) {
                  e.addEventListener(n, r)
              }), {
                  destroy: function() {
                      Array.prototype.forEach.call(s, function(e) {
                          e.removeEventListener(n, r)
                      })
                  }
              };
              if (c.string(e)) return d(document.body, e, t, i);
              throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");
              var s, n, r, o, a, l
          }
      },
      817: function(e) {
          e.exports = function(e) {
              var t, i = "SELECT" === e.nodeName ? (e.focus(), e.value) : "INPUT" === e.nodeName || "TEXTAREA" === e.nodeName ? ((t = e.hasAttribute("readonly")) || e.setAttribute("readonly", ""), e.select(), e.setSelectionRange(0, e.value.length), t || e.removeAttribute("readonly"), e.value) : (e.hasAttribute("contenteditable") && e.focus(), i = window.getSelection(), (t = document.createRange()).selectNodeContents(e), i.removeAllRanges(), i.addRange(t), i.toString());
              return i
          }
      },
      279: function(e) {
          function t() {}
          t.prototype = {
              on: function(e, t, i) {
                  var s = this.e || (this.e = {});
                  return (s[e] || (s[e] = [])).push({
                      fn: t,
                      ctx: i
                  }), this
              },
              once: function(e, t, i) {
                  var s = this;

                  function n() {
                      s.off(e, n), t.apply(i, arguments)
                  }
                  return n._ = t, this.on(e, n, i)
              },
              emit: function(e) {
                  for (var t = [].slice.call(arguments, 1), i = ((this.e || (this.e = {}))[e] || []).slice(), s = 0, n = i.length; s < n; s++) i[s].fn.apply(i[s].ctx, t);
                  return this
              },
              off: function(e, t) {
                  var i = this.e || (this.e = {}),
                      s = i[e],
                      n = [];
                  if (s && t)
                      for (var r = 0, o = s.length; r < o; r++) s[r].fn !== t && s[r].fn._ !== t && n.push(s[r]);
                  return n.length ? i[e] = n : delete i[e], this
              }
          }, e.exports = t, e.exports.TinyEmitter = t
      }
  }, n = {}, s.n = function(e) {
      var t = e && e.__esModule ? function() {
          return e.default
      } : function() {
          return e
      };
      return s.d(t, {
          a: t
      }), t
  }, s.d = function(e, t) {
      for (var i in t) s.o(t, i) && !s.o(e, i) && Object.defineProperty(e, i, {
          enumerable: !0,
          get: t[i]
      })
  }, s.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
  }, s(686).default;

  function s(e) {
      if (n[e]) return n[e].exports;
      var t = n[e] = {
          exports: {}
      };
      return i[e](t, t.exports, s), t.exports
  }
  var i, n
}),
function(e, t) {
  "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.counterUp = t() : e.counterUp = t()
}(self, function() {
  return (() => {
      "use strict";
      var s = {
              d: (e, t) => {
                  for (var i in t) s.o(t, i) && !s.o(e, i) && Object.defineProperty(e, i, {
                      enumerable: !0,
                      get: t[i]
                  })
              },
              o: (e, t) => Object.prototype.hasOwnProperty.call(e, t),
              r: e => {
                  "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                      value: "Module"
                  }), Object.defineProperty(e, "__esModule", {
                      value: !0
                  })
              }
          },
          e = {};
      s.r(e), s.d(e, {
          default: () => t,
          divideNumbers: () => l
      });
      const t = (e, t = {}) => {
              const {
                  action: i = "start",
                  duration: s = 1e3,
                  delay: n = 16
              } = t;
              if ("stop" !== i) {
                  if (a(e), /[0-9]/.test(e.innerHTML)) {
                      const r = l(e.innerHTML, {
                              duration: s || e.getAttribute("data-duration"),
                              delay: n || e.getAttribute("data-delay")
                          }),
                          o = (e._countUpOrigInnerHTML = e.innerHTML, e.innerHTML = r[0] || "&nbsp;", e.style.visibility = "visible", function() {
                              e.innerHTML = r.shift() || "&nbsp;", r.length ? (clearTimeout(e.countUpTimeout), e.countUpTimeout = setTimeout(o, n)) : e._countUpOrigInnerHTML = void 0
                          });
                      e.countUpTimeout = setTimeout(o, n)
                  }
              } else a(e)
          },
          a = e => {
              clearTimeout(e.countUpTimeout), e._countUpOrigInnerHTML && (e.innerHTML = e._countUpOrigInnerHTML, e._countUpOrigInnerHTML = void 0), e.style.visibility = ""
          },
          l = (e, t = {}) => {
              const {
                  duration: n = 1e3,
                  delay: i = 16
              } = t, r = n / i, o = e.toString().split(/(<[^>]+>|[0-9.][,.0-9]*[0-9]*)/), a = [];
              for (let e = 0; e < r; e++) a.push("");
              for (let t = 0; t < o.length; t++)
                  if (/([0-9.][,.0-9]*[0-9]*)/.test(o[t]) && !/<[^>]+>/.test(o[t])) {
                      let i = o[t];
                      const n = [...i.matchAll(/[.,]/g)].map(e => ({
                          char: e[0],
                          i: i.length - e.index - 1
                      })).sort((e, t) => e.i - t.i);
                      i = i.replace(/[.,]/g, "");
                      let s = a.length - 1;
                      for (let t = r; 1 <= t; t--) {
                          let e = parseInt(i / r * t, 10);
                          e = n.reduce((e, {
                              char: t,
                              i
                          }) => e.length <= i ? e : e.slice(0, -i) + t + e.slice(-i), e.toString()), a[s--] += e
                      }
                  } else
                      for (let e = 0; e < r; e++) a[e] += o[t];
              return a[a.length] = e.toString(), a
          };
      return e
  })()
}),
function(e, t) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).GLightbox = t()
}(this, function() {
  "use strict";

  function t(e) {
      return (t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
      } : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      })(e)
  }

  function o(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
  }

  function n(e, t) {
      for (var i = 0; i < t.length; i++) {
          var s = t[i];
          s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
      }
  }

  function e(e, t, i) {
      return t && n(e.prototype, t), i && n(e, i), e
  }
  var a = Date.now();

  function c(e) {
      var t = {},
          i = !0,
          s = 0,
          n = arguments.length;
      for ("[object Boolean]" === Object.prototype.toString.call(e) && (i = e, s++); s < n; s++) {
          r = void 0;
          var r, o = arguments[s];
          for (r in o) Object.prototype.hasOwnProperty.call(o, r) && (i && "[object Object]" === Object.prototype.toString.call(o[r]) ? t[r] = c(!0, t[r], o[r]) : t[r] = o[r])
      }
      return t
  }

  function h(e, t) {
      if (0 != f(e = !r(e = B(e) || e === window || e === document ? [e] : e) && !m(e) ? [e] : e))
          if (r(e) && !m(e))
              for (var i = e.length, s = 0; s < i && !1 !== t.call(e[s], e[s], s, e); s++);
          else if (m(e))
          for (var n in e)
              if (v(e, n) && !1 === t.call(e[n], e[n], n, e)) break
  }

  function p(e, t, i) {
      var s = 1 < arguments.length && void 0 !== t ? t : null,
          n = 2 < arguments.length && void 0 !== i ? i : null,
          t = e[a] = e[a] || [],
          r = {
              all: t,
              evt: null,
              found: null
          };
      return s && n && 0 < f(t) && h(t, function(e, t) {
          if (e.eventName == s && e.fn.toString() == n.toString()) return r.found = !0, r.evt = t, !1
      }), r
  }

  function I(i, e, t) {
      var e = 1 < arguments.length && void 0 !== e ? e : {},
          c = e.onElement,
          s = e.withCallback,
          n = e.avoidDuplicate,
          r = void 0 === n || n,
          n = e.once,
          d = void 0 !== n && n,
          n = e.useCapture,
          o = void 0 !== n && n,
          u = 2 < arguments.length ? t : void 0,
          a = c || [];

      function l(e) {
          D(s) && s.call(u, e, this), d && l.destroy()
      }
      return w(a) && (a = document.querySelectorAll(a)), l.destroy = function() {
          h(a, function(e) {
              var t = p(e, i, l);
              t.found && t.all.splice(t.evt, 1), e.removeEventListener && e.removeEventListener(i, l, o)
          })
      }, h(a, function(e) {
          var t = p(e, i, l);
          (e.addEventListener && r && !t.found || !r) && (e.addEventListener(i, l, o), t.all.push({
              eventName: i,
              fn: l
          }))
      }), l
  }

  function L(t, e) {
      h(e.split(" "), function(e) {
          return t.classList.add(e)
      })
  }

  function $(t, e) {
      h(e.split(" "), function(e) {
          return t.classList.remove(e)
      })
  }

  function z(e, t) {
      return e.classList.contains(t)
  }

  function N(e, t) {
      for (; e !== document.body;) {
          if (!(e = e.parentElement)) return !1;
          if ("function" == typeof e.matches ? e.matches(t) : e.msMatchesSelector(t)) return e
      }
  }

  function F(t, e, i) {
      var s, e = 1 < arguments.length && void 0 !== e ? e : "",
          n = 2 < arguments.length && void 0 !== i && i;
      t && "" !== e && ("none" != e ? (i = function() {
          var e, t = document.createElement("fakeelement"),
              i = {
                  animation: "animationend",
                  OAnimation: "oAnimationEnd",
                  MozAnimation: "animationend",
                  WebkitAnimation: "webkitAnimationEnd"
              };
          for (e in i)
              if (void 0 !== t.style[e]) return i[e]
      }(), h(s = e.split(" "), function(e) {
          L(t, "g" + e)
      }), I(i, {
          onElement: t,
          avoidDuplicate: !1,
          once: !0,
          withCallback: function(e, t) {
              h(s, function(e) {
                  $(t, "g" + e)
              }), D(n) && n()
          }
      })) : D(n) && n())
  }

  function H(e, t) {
      t = 1 < arguments.length && void 0 !== t ? t : "";
      if ("" == t) return e.style.webkitTransform = "", e.style.MozTransform = "", e.style.msTransform = "", e.style.OTransform = "", e.style.transform = "", !1;
      e.style.webkitTransform = t, e.style.MozTransform = t, e.style.msTransform = t, e.style.OTransform = t, e.style.transform = t
  }

  function l(e) {
      e.style.display = "block"
  }

  function d(e) {
      e.style.display = "none"
  }

  function y(e) {
      var t = document.createDocumentFragment(),
          i = document.createElement("div");
      for (i.innerHTML = e; i.firstChild;) t.appendChild(i.firstChild);
      return t
  }

  function q() {
      return {
          width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
          height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
      }
  }

  function b(e, t, i, s) {
      var n, r;
      e() ? t() : (i = i || 100, r = setInterval(function() {
          e() && (clearInterval(r), n && clearTimeout(n), t())
      }, i), s && (n = setTimeout(function() {
          clearInterval(r)
      }, s)))
  }

  function i(e, t, i) {
      if (j(e)) console.error("Inject assets error");
      else if (D(t) && (i = t, t = !1), w(t) && t in window) D(i) && i();
      else {
          var s;
          if (-1 !== e.indexOf(".css")) {
              if ((s = document.querySelectorAll('link[href="' + e + '"]')) && 0 < s.length) return void(D(i) && i());
              var n = document.getElementsByTagName("head")[0],
                  r = n.querySelectorAll('link[rel="stylesheet"]'),
                  o = document.createElement("link");
              return o.rel = "stylesheet", o.type = "text/css", o.href = e, o.media = "all", r ? n.insertBefore(o, r[0]) : n.appendChild(o), void(D(i) && i())
          }
          if ((s = document.querySelectorAll('script[src="' + e + '"]')) && 0 < s.length) {
              if (D(i)) {
                  if (w(t)) return void b(function() {
                      return void 0 !== window[t]
                  }, function() {
                      i()
                  });
                  i()
              }
          } else {
              r = document.createElement("script");
              r.type = "text/javascript", r.src = e, r.onload = function() {
                  if (D(i)) {
                      if (w(t)) return b(function() {
                          return void 0 !== window[t]
                      }, function() {
                          i()
                      }), !1;
                      i()
                  }
              }, document.body.appendChild(r)
          }
      }
  }

  function g() {
      return "navigator" in window && window.navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(Android)|(PlayBook)|(BB10)|(BlackBerry)|(Opera Mini)|(IEMobile)|(webOS)|(MeeGo)/i)
  }

  function D(e) {
      return "function" == typeof e
  }

  function w(e) {
      return "string" == typeof e
  }

  function B(e) {
      return e && e.nodeType && 1 == e.nodeType
  }

  function u(e) {
      return Array.isArray(e)
  }

  function r(e) {
      return e && e.length && isFinite(e.length)
  }

  function m(e) {
      return "object" === t(e) && null != e && !D(e) && !u(e)
  }

  function j(e) {
      return null == e
  }

  function v(e, t) {
      return null !== e && hasOwnProperty.call(e, t)
  }

  function f(e) {
      if (m(e)) {
          if (e.keys) return e.keys().length;
          var t, i = 0;
          for (t in e) v(e, t) && i++;
          return i
      }
      return e.length
  }

  function R(e) {
      return !isNaN(parseFloat(e)) && isFinite(e)
  }

  function W(e) {
      var e = 0 < arguments.length && void 0 !== e ? e : -1,
          t = document.querySelectorAll(".gbtn[data-taborder]:not(.disabled)");
      if (!t.length) return !1;
      if (1 == t.length) return t[0];
      var i = (e = "string" == typeof e ? parseInt(e) : e) < 0 ? 1 : e + 1,
          s = (i > t.length && (i = "1"), []);
      h(t, function(e) {
          s.push(e.getAttribute("data-taborder"))
      });
      e = s.filter(function(e) {
          return e >= parseInt(i)
      }).sort()[0];
      return document.querySelector('.gbtn[data-taborder="'.concat(e, '"]'))
  }

  function x(e) {
      return Math.sqrt(e.x * e.x + e.y * e.y)
  }

  function T(e, t) {
      n = t;
      var i, s, n = 0 == (s = x(i = e) * x(n)) ? 0 : (1 < (i = (i.x * n.x + i.y * n.y) / s) && (i = 1), Math.acos(i));
      return 0 < e.x * t.y - t.x * e.y && (n *= -1), 180 * n / Math.PI
  }
  e(_, [{
      key: "add",
      value: function(e) {
          this.handlers.push(e)
      }
  }, {
      key: "del",
      value: function(e) {
          e || (this.handlers = []);
          for (var t = this.handlers.length; 0 <= t; t--) this.handlers[t] === e && this.handlers.splice(t, 1)
      }
  }, {
      key: "dispatch",
      value: function() {
          for (var e = 0, t = this.handlers.length; e < t; e++) {
              var i = this.handlers[e];
              "function" == typeof i && i.apply(this.el, arguments)
          }
      }
  }]);
  var E = _;

  function _(e) {
      o(this, _), this.handlers = [], this.el = e
  }

  function s(e, t) {
      e = new E(e);
      return e.add(t), e
  }
  e(S, [{
      key: "start",
      value: function(e) {
          var t, i;
          e.touches && (e.target && e.target.nodeName && 0 <= ["a", "button", "input"].indexOf(e.target.nodeName.toLowerCase()) ? console.log("ignore drag for this touched element", e.target.nodeName.toLowerCase()) : (this.now = Date.now(), this.x1 = e.touches[0].pageX, this.y1 = e.touches[0].pageY, this.delta = this.now - (this.last || this.now), this.touchStart.dispatch(e, this.element), null !== this.preTapPosition.x && (this.isDoubleTap = 0 < this.delta && this.delta <= 250 && Math.abs(this.preTapPosition.x - this.x1) < 30 && Math.abs(this.preTapPosition.y - this.y1) < 30, this.isDoubleTap && clearTimeout(this.singleTapTimeout)), this.preTapPosition.x = this.x1, this.preTapPosition.y = this.y1, this.last = this.now, t = this.preV, 1 < e.touches.length && (this._cancelLongTap(), this._cancelSingleTap(), i = {
              x: e.touches[1].pageX - this.x1,
              y: e.touches[1].pageY - this.y1
          }, t.x = i.x, t.y = i.y, this.pinchStartLen = x(t), this.multipointStart.dispatch(e, this.element)), this._preventTap = !1, this.longTapTimeout = setTimeout(function() {
              this.longTap.dispatch(e, this.element), this._preventTap = !0
          }.bind(this), 750)))
      }
  }, {
      key: "move",
      value: function(e) {
          var t, i, s, n, r, o, a;
          e.touches && (o = this.preV, t = e.touches.length, i = e.touches[0].pageX, s = e.touches[0].pageY, this.isDoubleTap = !1, 1 < t ? (n = e.touches[1].pageX, r = e.touches[1].pageY, a = {
              x: e.touches[1].pageX - i,
              y: e.touches[1].pageY - s
          }, null !== o.x && (0 < this.pinchStartLen && (e.zoom = x(a) / this.pinchStartLen, this.pinch.dispatch(e, this.element)), e.angle = T(a, o), this.rotate.dispatch(e, this.element)), o.x = a.x, o.y = a.y, null !== this.x2 && null !== this.sx2 ? (e.deltaX = (i - this.x2 + n - this.sx2) / 2, e.deltaY = (s - this.y2 + r - this.sy2) / 2) : (e.deltaX = 0, e.deltaY = 0), this.twoFingerPressMove.dispatch(e, this.element), this.sx2 = n, this.sy2 = r) : (null !== this.x2 ? (e.deltaX = i - this.x2, e.deltaY = s - this.y2, o = Math.abs(this.x1 - this.x2), a = Math.abs(this.y1 - this.y2), (10 < o || 10 < a) && (this._preventTap = !0)) : (e.deltaX = 0, e.deltaY = 0), this.pressMove.dispatch(e, this.element)), this.touchMove.dispatch(e, this.element), this._cancelLongTap(), this.x2 = i, this.y2 = s, 1 < t && e.preventDefault())
      }
  }, {
      key: "end",
      value: function(e) {
          var t;
          e.changedTouches && (this._cancelLongTap(), t = this, e.touches.length < 2 && (this.multipointEnd.dispatch(e, this.element), this.sx2 = this.sy2 = null), this.x2 && 30 < Math.abs(this.x1 - this.x2) || this.y2 && 30 < Math.abs(this.y1 - this.y2) ? (e.direction = this._swipeDirection(this.x1, this.x2, this.y1, this.y2), this.swipeTimeout = setTimeout(function() {
              t.swipe.dispatch(e, t.element)
          }, 0)) : (this.tapTimeout = setTimeout(function() {
              t._preventTap || t.tap.dispatch(e, t.element), t.isDoubleTap && (t.doubleTap.dispatch(e, t.element), t.isDoubleTap = !1)
          }, 0), t.isDoubleTap || (t.singleTapTimeout = setTimeout(function() {
              t.singleTap.dispatch(e, t.element)
          }, 250))), this.touchEnd.dispatch(e, this.element), this.preV.x = 0, this.preV.y = 0, this.zoom = 1, this.pinchStartLen = null, this.x1 = this.x2 = this.y1 = this.y2 = null)
      }
  }, {
      key: "cancelAll",
      value: function() {
          this._preventTap = !0, clearTimeout(this.singleTapTimeout), clearTimeout(this.tapTimeout), clearTimeout(this.longTapTimeout), clearTimeout(this.swipeTimeout)
      }
  }, {
      key: "cancel",
      value: function(e) {
          this.cancelAll(), this.touchCancel.dispatch(e, this.element)
      }
  }, {
      key: "_cancelLongTap",
      value: function() {
          clearTimeout(this.longTapTimeout)
      }
  }, {
      key: "_cancelSingleTap",
      value: function() {
          clearTimeout(this.singleTapTimeout)
      }
  }, {
      key: "_swipeDirection",
      value: function(e, t, i, s) {
          return Math.abs(e - t) >= Math.abs(i - s) ? 0 < e - t ? "Left" : "Right" : 0 < i - s ? "Up" : "Down"
      }
  }, {
      key: "on",
      value: function(e, t) {
          this[e] && this[e].add(t)
      }
  }, {
      key: "off",
      value: function(e, t) {
          this[e] && this[e].del(t)
      }
  }, {
      key: "destroy",
      value: function() {
          return this.singleTapTimeout && clearTimeout(this.singleTapTimeout), this.tapTimeout && clearTimeout(this.tapTimeout), this.longTapTimeout && clearTimeout(this.longTapTimeout), this.swipeTimeout && clearTimeout(this.swipeTimeout), this.element.removeEventListener("touchstart", this.start), this.element.removeEventListener("touchmove", this.move), this.element.removeEventListener("touchend", this.end), this.element.removeEventListener("touchcancel", this.cancel), this.rotate.del(), this.touchStart.del(), this.multipointStart.del(), this.multipointEnd.del(), this.pinch.del(), this.swipe.del(), this.tap.del(), this.doubleTap.del(), this.longTap.del(), this.singleTap.del(), this.pressMove.del(), this.twoFingerPressMove.del(), this.touchMove.del(), this.touchEnd.del(), this.touchCancel.del(), this.preV = this.pinchStartLen = this.zoom = this.isDoubleTap = this.delta = this.last = this.now = this.tapTimeout = this.singleTapTimeout = this.longTapTimeout = this.swipeTimeout = this.x1 = this.x2 = this.y1 = this.y2 = this.preTapPosition = this.rotate = this.touchStart = this.multipointStart = this.multipointEnd = this.pinch = this.swipe = this.tap = this.doubleTap = this.longTap = this.singleTap = this.pressMove = this.touchMove = this.touchEnd = this.touchCancel = this.twoFingerPressMove = null, window.removeEventListener("scroll", this._cancelAllHandler), null
      }
  }]);
  var Y = S;

  function S(e, t) {
      o(this, S), this.element = "string" == typeof e ? document.querySelector(e) : e, this.start = this.start.bind(this), this.move = this.move.bind(this), this.end = this.end.bind(this), this.cancel = this.cancel.bind(this), this.element.addEventListener("touchstart", this.start, !1), this.element.addEventListener("touchmove", this.move, !1), this.element.addEventListener("touchend", this.end, !1), this.element.addEventListener("touchcancel", this.cancel, !1), this.preV = {
          x: null,
          y: null
      }, this.pinchStartLen = null, this.zoom = 1, this.isDoubleTap = !1;

      function i() {}
      this.rotate = s(this.element, t.rotate || i), this.touchStart = s(this.element, t.touchStart || i), this.multipointStart = s(this.element, t.multipointStart || i), this.multipointEnd = s(this.element, t.multipointEnd || i), this.pinch = s(this.element, t.pinch || i), this.swipe = s(this.element, t.swipe || i), this.tap = s(this.element, t.tap || i), this.doubleTap = s(this.element, t.doubleTap || i), this.longTap = s(this.element, t.longTap || i), this.singleTap = s(this.element, t.singleTap || i), this.pressMove = s(this.element, t.pressMove || i), this.twoFingerPressMove = s(this.element, t.twoFingerPressMove || i), this.touchMove = s(this.element, t.touchMove || i), this.touchEnd = s(this.element, t.touchEnd || i), this.touchCancel = s(this.element, t.touchCancel || i), this.translateContainer = this.element, this._cancelAllHandler = this.cancelAll.bind(this), window.addEventListener("scroll", this._cancelAllHandler), this.delta = null, this.last = null, this.now = null, this.tapTimeout = null, this.singleTapTimeout = null, this.longTapTimeout = null, this.swipeTimeout = null, this.x1 = this.x2 = this.y1 = this.y2 = null, this.preTapPosition = {
          x: null,
          y: null
      }
  }

  function X(e) {
      var t = function() {
              var e, t = document.createElement("fakeelement"),
                  i = {
                      transition: "transitionend",
                      OTransition: "oTransitionEnd",
                      MozTransition: "transitionend",
                      WebkitTransition: "webkitTransitionEnd"
                  };
              for (e in i)
                  if (void 0 !== t.style[e]) return i[e]
          }(),
          i = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
          s = z(e, "gslide-media") ? e : e.querySelector(".gslide-media"),
          n = N(s, ".ginner-container"),
          e = e.querySelector(".gslide-description");
      L(s = 769 < i ? n : s, "greset"), H(s, "translate3d(0, 0, 0)"), I(t, {
          onElement: s,
          once: !0,
          withCallback: function(e, t) {
              $(s, "greset")
          }
      }), s.style.opacity = "", e && (e.style.opacity = "")
  }
  e(k, [{
      key: "zoomIn",
      value: function() {
          var e, t = this.widowWidth();
          this.zoomedIn || t <= 768 || ((e = this.img).setAttribute("data-style", e.getAttribute("style")), e.style.maxWidth = e.naturalWidth + "px", e.style.maxHeight = e.naturalHeight + "px", e.naturalWidth > t && (t = t / 2 - e.naturalWidth / 2, this.setTranslate(this.img.parentNode, t, 0)), this.slide.classList.add("zoomed"), this.zoomedIn = !0)
      }
  }, {
      key: "zoomOut",
      value: function() {
          this.img.parentNode.setAttribute("style", ""), this.img.setAttribute("style", this.img.getAttribute("data-style")), this.slide.classList.remove("zoomed"), this.zoomedIn = !1, this.currentX = null, this.currentY = null, this.initialX = null, this.initialY = null, this.xOffset = 0, this.yOffset = 0, this.onclose && "function" == typeof this.onclose && this.onclose()
      }
  }, {
      key: "dragStart",
      value: function(e) {
          e.preventDefault(), this.zoomedIn ? ("touchstart" === e.type ? (this.initialX = e.touches[0].clientX - this.xOffset, this.initialY = e.touches[0].clientY - this.yOffset) : (this.initialX = e.clientX - this.xOffset, this.initialY = e.clientY - this.yOffset), e.target === this.img && (this.active = !0, this.img.classList.add("dragging"))) : this.active = !1
      }
  }, {
      key: "dragEnd",
      value: function(e) {
          var t = this;
          e.preventDefault(), this.initialX = this.currentX, this.initialY = this.currentY, this.active = !1, setTimeout(function() {
              t.dragging = !1, t.img.isDragging = !1, t.img.classList.remove("dragging")
          }, 100)
      }
  }, {
      key: "drag",
      value: function(e) {
          this.active && (e.preventDefault(), "touchmove" === e.type ? (this.currentX = e.touches[0].clientX - this.initialX, this.currentY = e.touches[0].clientY - this.initialY) : (this.currentX = e.clientX - this.initialX, this.currentY = e.clientY - this.initialY), this.xOffset = this.currentX, this.yOffset = this.currentY, this.img.isDragging = !0, this.dragging = !0, this.setTranslate(this.img, this.currentX, this.currentY))
      }
  }, {
      key: "onMove",
      value: function(e) {
          var t;
          this.zoomedIn && (t = e.clientX - this.img.naturalWidth / 2, e = e.clientY - this.img.naturalHeight / 2, this.setTranslate(this.img, t, e))
      }
  }, {
      key: "setTranslate",
      value: function(e, t, i) {
          e.style.transform = "translate3d(" + t + "px, " + i + "px, 0)"
      }
  }, {
      key: "widowWidth",
      value: function() {
          return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
      }
  }]);
  var C = k;

  function k(e, t) {
      var i = this,
          s = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
      if (o(this, k), this.img = e, this.slide = t, this.onclose = s, this.img.setZoomEvents) return !1;
      this.active = !1, this.zoomedIn = !1, this.dragging = !1, this.currentX = null, this.currentY = null, this.initialX = null, this.initialY = null, this.xOffset = 0, this.yOffset = 0, this.img.addEventListener("mousedown", function(e) {
          return i.dragStart(e)
      }, !1), this.img.addEventListener("mouseup", function(e) {
          return i.dragEnd(e)
      }, !1), this.img.addEventListener("mousemove", function(e) {
          return i.drag(e)
      }, !1), this.img.addEventListener("click", function(e) {
          return i.slide.classList.contains("dragging-nav") ? (i.zoomOut(), !1) : i.zoomedIn ? void(i.zoomedIn && !i.dragging && i.zoomOut()) : i.zoomIn()
      }, !1), this.img.setZoomEvents = !0
  }
  e(M, [{
      key: "dragStart",
      value: function(e) {
          var t;
          this.slide.classList.contains("zoomed") ? this.active = !1 : ("touchstart" === e.type ? (this.initialX = e.touches[0].clientX - this.xOffset, this.initialY = e.touches[0].clientY - this.yOffset) : (this.initialX = e.clientX - this.xOffset, this.initialY = e.clientY - this.yOffset), t = e.target.nodeName.toLowerCase(), e.target.classList.contains("nodrag") || N(e.target, ".nodrag") || -1 !== ["input", "select", "textarea", "button", "a"].indexOf(t) ? this.active = !1 : (e.preventDefault(), (e.target === this.el || "img" !== t && N(e.target, ".gslide-inline")) && (this.active = !0, this.el.classList.add("dragging"), this.dragContainer = N(e.target, ".ginner-container"))))
      }
  }, {
      key: "dragEnd",
      value: function(e) {
          var t = this;
          e && e.preventDefault(), this.initialX = 0, this.initialY = 0, this.currentX = null, this.currentY = null, this.initialX = null, this.initialY = null, this.xOffset = 0, this.yOffset = 0, this.active = !1, this.doSlideChange && (this.instance.preventOutsideClick = !0, "right" == this.doSlideChange && this.instance.prevSlide(), "left" == this.doSlideChange && this.instance.nextSlide()), this.doSlideClose && this.instance.close(), this.toleranceReached || this.setTranslate(this.dragContainer, 0, 0, !0), setTimeout(function() {
              t.instance.preventOutsideClick = !1, t.toleranceReached = !1, t.lastDirection = null, t.dragging = !1, t.el.isDragging = !1, t.el.classList.remove("dragging"), t.slide.classList.remove("dragging-nav"), t.dragContainer.style.transform = "", t.dragContainer.style.transition = ""
          }, 100)
      }
  }, {
      key: "drag",
      value: function(e) {
          if (this.active) {
              e.preventDefault(), this.slide.classList.add("dragging-nav"), "touchmove" === e.type ? (this.currentX = e.touches[0].clientX - this.initialX, this.currentY = e.touches[0].clientY - this.initialY) : (this.currentX = e.clientX - this.initialX, this.currentY = e.clientY - this.initialY), this.xOffset = this.currentX, this.yOffset = this.currentY, this.el.isDragging = !0, this.dragging = !0, this.doSlideChange = !1, this.doSlideClose = !1;
              var e = Math.abs(this.currentX),
                  t = Math.abs(this.currentY);
              if (0 < e && e >= Math.abs(this.currentY) && (!this.lastDirection || "x" == this.lastDirection)) {
                  this.yOffset = 0, this.lastDirection = "x", this.setTranslate(this.dragContainer, this.currentX, 0);
                  var i = this.shouldChange();
                  if (!this.instance.settings.dragAutoSnap && i && (this.doSlideChange = i), this.instance.settings.dragAutoSnap && i) return this.instance.preventOutsideClick = !0, this.toleranceReached = !0, this.active = !1, this.instance.preventOutsideClick = !0, this.dragEnd(null), "right" == i && this.instance.prevSlide(), void("left" == i && this.instance.nextSlide())
              }
              0 < this.toleranceY && 0 < t && e <= t && (!this.lastDirection || "y" == this.lastDirection) && (this.xOffset = 0, this.lastDirection = "y", this.setTranslate(this.dragContainer, 0, this.currentY), i = this.shouldClose(), !this.instance.settings.dragAutoSnap && i && (this.doSlideClose = !0), this.instance.settings.dragAutoSnap && i && this.instance.close())
          }
      }
  }, {
      key: "shouldChange",
      value: function() {
          var e, t = !1;
          return Math.abs(this.currentX) >= this.toleranceX && (("left" == (e = 0 < this.currentX ? "right" : "left") && this.slide !== this.slide.parentNode.lastChild || "right" == e && this.slide !== this.slide.parentNode.firstChild) && (t = e)), t
      }
  }, {
      key: "shouldClose",
      value: function() {
          var e = !1;
          return e = Math.abs(this.currentY) >= this.toleranceY ? !0 : e
      }
  }, {
      key: "setTranslate",
      value: function(e, t, i) {
          e.style.transition = 3 < arguments.length && void 0 !== arguments[3] && arguments[3] ? "all .2s ease" : "", e.style.transform = "translate3d(".concat(t, "px, ").concat(i, "px, 0)")
      }
  }]);
  var A = M;

  function M() {
      var t = this,
          e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
          i = (o(this, M), e.dragEl),
          s = e.toleranceX,
          s = void 0 === s ? 40 : s,
          n = e.toleranceY,
          n = void 0 === n ? 65 : n,
          r = e.slide,
          r = void 0 === r ? null : r,
          e = e.instance,
          e = void 0 === e ? null : e;
      this.el = i, this.active = !1, this.dragging = !1, this.currentX = null, this.currentY = null, this.initialX = null, this.initialY = null, this.xOffset = 0, this.yOffset = 0, this.direction = null, this.lastDirection = null, this.toleranceX = s, this.toleranceY = n, this.toleranceReached = !1, this.dragContainer = this.el, this.slide = r, this.instance = e, this.el.addEventListener("mousedown", function(e) {
          return t.dragStart(e)
      }, !1), this.el.addEventListener("mouseup", function(e) {
          return t.dragEnd(e)
      }, !1), this.el.addEventListener("mousemove", function(e) {
          return t.drag(e)
      }, !1)
  }

  function P(r, o, a, m) {
      var l = this,
          t = r.querySelector(".ginner-container"),
          c = "gvideo" + a,
          e = r.querySelector(".gslide-media"),
          f = this.getAllPlayers(),
          d = (L(t, "gvideo-container"), e.insertBefore(y('<div class="gvideo-wrapper"></div>'), e.firstChild), r.querySelector(".gvideo-wrapper")),
          u = (i(this.settings.plyr.css, "Plyr"), o.href),
          h = (location.protocol.replace(":", ""), ""),
          p = "",
          g = !1;
      e.style.maxWidth = o.width, i(this.settings.plyr.js, "Plyr", function() {
          if (u.match(/vimeo\.com\/([0-9]*)/) && (s = /vimeo.*\/(\d+)/i.exec(u), h = "vimeo", p = s[1]), (u.match(/(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/) || u.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/) || u.match(/(youtube\.com|youtube-nocookie\.com)\/embed\/([a-zA-Z0-9\-_]+)/)) && (s = function(e) {
                  var t = "";
                  t = void 0 !== (e = e.replace(/(>|<)/gi, "").split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/))[2] ? (t = e[2].split(/[^0-9a-z_\-]/i))[0] : e;
                  return t
              }(u), h = "youtube", p = s), null !== u.match(/\.(mp4|ogg|webm|mov)$/)) {
              h = "local";
              var e, t, i = '<video id="' + c + '" ',
                  s = (i = (i = (i = (i += 'style="background:#000; max-width: '.concat(o.width, ';" ')) + 'preload="metadata" ' + ('poster="' + o.poster + '" ')) + 'x-webkit-airplay="allow" ' + "playsinline ") + "controls " + 'class="gvideo-local">', u.toLowerCase().split(".").pop()),
                  n = {
                      mp4: "",
                      ogg: "",
                      webm: ""
                  };
              for (e in n[s = "mov" == s ? "mp4" : s] = u, n) n.hasOwnProperty(e) && (t = n[e], "" !== (t = o.hasOwnProperty(e) ? o[e] : t) && (i += '<source src="'.concat(t, '" type="video/').concat(e, '">')));
              g = y(i += "</video>")
          }
          s = g || y('<div id="'.concat(c, '" data-plyr-provider="').concat(h, '" data-plyr-embed-id="').concat(p, '"></div>')), L(d, "".concat(h, "-video gvideo")), d.appendChild(s), d.setAttribute("data-id", c), d.setAttribute("data-index", a), s = v(l.settings.plyr, "config") ? l.settings.plyr.config : {}, s = new Plyr("#" + c, s);
          s.on("ready", function(e) {
              e = e.detail.plyr;
              f[c] = e, D(m) && m()
          }), b(function() {
              return r.querySelector("iframe") && "true" == r.querySelector("iframe").dataset.ready
          }, function() {
              l.resize(r)
          }), s.on("enterfullscreen", O), s.on("exitfullscreen", O)
      })
  }

  function O(e) {
      var t = N(e.target, ".gslide-media");
      "enterfullscreen" == e.type && L(t, "fullscreen"), "exitfullscreen" == e.type && $(t, "fullscreen")
  }

  function V(e, t, i, s) {
      var n, r, o, e = e.querySelector(".gslide-media"),
          a = (s = {
              url: t.href,
              callback: s
          }, a = s.url, n = s.allow, r = s.callback, s = s.appendTo, (o = document.createElement("iframe")).className = "vimeo-video gvideo", o.src = a, o.style.width = "100%", o.style.height = "100%", n && o.setAttribute("allow", n), o.onload = function() {
              L(o, "node-ready"), D(r) && r()
          }, s && s.appendChild(o), o);
      e.parentNode.style.maxWidth = t.width, e.parentNode.style.height = t.height, e.appendChild(a)
  }
  e(U, [{
      key: "sourceType",
      value: function(e) {
          var t = e;
          if (null !== (e = e.toLowerCase()).match(/\.(jpeg|jpg|jpe|gif|png|apn|webp|avif|svg)/)) return "image";
          if (e.match(/(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/) || e.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/) || e.match(/(youtube\.com|youtube-nocookie\.com)\/embed\/([a-zA-Z0-9\-_]+)/)) return "video";
          if (e.match(/vimeo\.com\/([0-9]*)/)) return "video";
          if (null !== e.match(/\.(mp4|ogg|webm|mov)/)) return "video";
          if (null !== e.match(/\.(mp3|wav|wma|aac|ogg)/)) return "audio";
          if (-1 < e.indexOf("#") && "" !== t.split("#").pop().trim()) return "inline";
          return -1 < e.indexOf("goajax=true") ? "ajax" : "external"
      }
  }, {
      key: "parseConfig",
      value: function(s, n) {
          var r = this,
              o = c({
                  descPosition: n.descPosition
              }, this.defaults);
          if (m(s) && !B(s)) return v(s, "type") || (v(s, "content") && s.content ? s.type = "inline" : v(s, "href") && (s.type = this.sourceType(s.href))), t = c(o, s), this.setSize(t, n), t;
          var a, e, t = "",
              l = s.getAttribute("data-glightbox"),
              i = s.nodeName.toLowerCase();
          if ("a" === i && (t = s.href), "img" === i && (t = s.src, o.alt = s.alt), o.href = t, h(o, function(e, t) {
                  v(n, t) && "width" !== t && (o[t] = n[t]);
                  var i = s.dataset[t];
                  j(i) || (o[t] = r.sanitizeValue(i))
              }), o.content && (o.type = "inline"), !o.type && t && (o.type = this.sourceType(t)), j(l) ? (o.title || "a" != i || (j(t = s.title) || "" === t || (o.title = t)), o.title || "img" != i || (j(t = s.alt) || "" === t || (o.title = t))) : (a = [], h(o, function(e, t) {
                  a.push(";\\s?" + t)
              }), a = a.join("\\s?:|"), "" !== l.trim() && h(o, function(e, t) {
                  var i = l,
                      s = new RegExp("s?" + t + "s?:s?(.*?)(" + a + "s?:|$)"),
                      i = i.match(s);
                  i && i.length && i[1] && (s = i[1].trim().replace(/;\s*$/, ""), o[t] = r.sanitizeValue(s))
              })), o.description && "." === o.description.substring(0, 1)) {
              try {
                  e = document.querySelector(o.description).innerHTML
              } catch (e) {
                  if (!(e instanceof DOMException)) throw e
              }
              e && (o.description = e)
          }
          return o.description || (i = s.querySelector(".glightbox-desc")) && (o.description = i.innerHTML), this.setSize(o, n, s), this.slideConfig = o
      }
  }, {
      key: "setSize",
      value: function(e, t) {
          var i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null,
              s = "video" == e.type ? this.checkSize(t.videosWidth) : this.checkSize(t.width),
              t = this.checkSize(t.height);
          return e.width = v(e, "width") && "" !== e.width ? this.checkSize(e.width) : s, e.height = v(e, "height") && "" !== e.height ? this.checkSize(e.height) : t, i && "image" == e.type && (e._hasCustomWidth = !!i.dataset.width, e._hasCustomHeight = !!i.dataset.height), e
      }
  }, {
      key: "checkSize",
      value: function(e) {
          return R(e) ? "".concat(e, "px") : e
      }
  }, {
      key: "sanitizeValue",
      value: function(e) {
          return "true" !== e && "false" !== e ? e : "true" === e
      }
  }]);
  var G = U;

  function U() {
      var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
      o(this, U), this.defaults = {
          href: "",
          sizes: "",
          srcset: "",
          title: "",
          type: "",
          description: "",
          alt: "",
          descPosition: "bottom",
          effect: "",
          width: "",
          height: "",
          content: !1,
          zoomable: !0,
          draggable: !0
      }, m(e) && (this.defaults = c(this.defaults, e))
  }
  e(K, [{
      key: "setContent",
      value: function() {
          var t = this,
              i = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null,
              c = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
          if (z(i, "loaded")) return !1;
          var d, s = this.instance.settings,
              n = this.slideConfig,
              e = g(),
              u = (D(s.beforeSlideLoad) && s.beforeSlideLoad({
                  index: this.index,
                  slide: i,
                  player: !1
              }), n.type),
              h = n.descPosition,
              p = i.querySelector(".gslide-media"),
              r = i.querySelector(".gslide-title"),
              o = i.querySelector(".gslide-desc"),
              m = i.querySelector(".gdesc-inner"),
              a = c,
              f = "gSlideTitle_" + this.index,
              l = "gSlideDesc_" + this.index;
          if (D(s.afterSlideLoad) && (a = function() {
                  D(c) && c(), s.afterSlideLoad({
                      index: t.index,
                      slide: i,
                      player: t.instance.getSlidePlayerInstance(t.index)
                  })
              }), "" == n.title && "" == n.description ? m && m.parentNode.parentNode.removeChild(m.parentNode) : (r && "" !== n.title ? (r.id = f, r.innerHTML = n.title) : r.parentNode.removeChild(r), o && "" !== n.description ? (o.id = l, e && 0 < s.moreLength ? (n.smallDescription = this.slideShortDesc(n.description, s.moreLength, s.moreText), o.innerHTML = n.smallDescription, this.descriptionEvents(o, n)) : o.innerHTML = n.description) : o.parentNode.removeChild(o), L(p.parentNode, "desc-".concat(h)), L(m.parentNode, "description-".concat(h))), L(p, "gslide-".concat(u)), L(i, "loaded"), "video" !== u) {
              if ("external" !== u) return "inline" === u ? (function(e, t, i, s) {
                  var n, r = this,
                      e = e.querySelector(".gslide-media"),
                      o = !(!v(t, "href") || !t.href) && t.href.split("#").pop().trim(),
                      a = !(!v(t, "content") || !t.content) && t.content;
                  if (a && (w(a) && (n = y('<div class="ginlined-content">'.concat(a, "</div>"))), B(a) && ("none" == a.style.display && (a.style.display = "block"), (l = document.createElement("div")).className = "ginlined-content", l.appendChild(a), n = l)), o) {
                      a = document.getElementById(o);
                      if (!a) return !1;
                      var l = a.cloneNode(!0);
                      l.style.height = t.height, l.style.maxWidth = t.width, L(l, "ginlined-content"), n = l
                  }
                  if (!n) return console.error("Unable to append inline slide content", t), !1;
                  e.style.height = t.height, e.style.width = t.width, e.appendChild(n), this.events["inlineclose" + o] = I("click", {
                      onElement: e.querySelectorAll(".gtrigger-close"),
                      withCallback: function(e) {
                          e.preventDefault(), r.close()
                      }
                  }), D(s) && s()
              }.apply(this.instance, [i, n, this.index, a]), void(n.draggable && new A({
                  dragEl: i.querySelector(".gslide-inline"),
                  toleranceX: s.dragToleranceX,
                  toleranceY: s.dragToleranceY,
                  slide: i,
                  instance: this.instance
              }))) : "image" === u ? (r = n, l = this.index, d = function() {
                  var e = i.querySelector("img");
                  n.draggable && new A({
                      dragEl: e,
                      toleranceX: s.dragToleranceX,
                      toleranceY: s.dragToleranceY,
                      slide: i,
                      instance: t.instance
                  }), n.zoomable && e.naturalWidth > e.offsetWidth && (L(e, "zoomable"), new C(e, i, function() {
                      t.instance.resize()
                  })), D(a) && a()
              }, f = (f = i).querySelector(".gslide-media"), e = new Image, o = "gSlideTitle_" + l, l = "gSlideDesc_" + l, e.addEventListener("load", function() {
                  D(d) && d()
              }, !1), e.src = r.href, "" != r.sizes && "" != r.srcset && (e.sizes = r.sizes, e.srcset = r.srcset), e.alt = "", j(r.alt) || "" === r.alt || (e.alt = r.alt), "" !== r.title && e.setAttribute("aria-labelledby", o), "" !== r.description && e.setAttribute("aria-describedby", l), r.hasOwnProperty("_hasCustomWidth") && r._hasCustomWidth && (e.style.width = r.width), r.hasOwnProperty("_hasCustomHeight") && r._hasCustomHeight && (e.style.height = r.height), void f.insertBefore(e, f.firstChild)) : void(D(a) && a());
              V.apply(this, [i, n, this.index, a])
          } else P.apply(this.instance, [i, n, this.index, a])
      }
  }, {
      key: "slideShortDesc",
      value: function(e) {
          var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 50,
              i = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
              s = document.createElement("div");
          s.innerHTML = e;
          var n = i;
          if ((e = s.innerText.trim()).length <= t) return e;
          e = e.substr(0, t - 1);
          return n ? (s = null, e + '... <a href="#" class="desc-more">' + i + "</a>") : e
      }
  }, {
      key: "descriptionEvents",
      value: function(e, r) {
          var o = this,
              e = e.querySelector(".desc-more");
          if (!e) return !1;
          I("click", {
              onElement: e,
              withCallback: function(e, t) {
                  e.preventDefault();
                  var i = document.body,
                      s = N(t, ".gslide-desc");
                  if (!s) return !1;
                  s.innerHTML = r.description, L(i, "gdesc-open");
                  var n = I("click", {
                      onElement: [i, N(s, ".gslide-description")],
                      withCallback: function(e, t) {
                          "a" !== e.target.nodeName.toLowerCase() && ($(i, "gdesc-open"), L(i, "gdesc-closed"), s.innerHTML = r.smallDescription, o.descriptionEvents(s, r), setTimeout(function() {
                              $(i, "gdesc-closed")
                          }, 400), n.destroy())
                      }
                  })
              }
          })
      }
  }, {
      key: "create",
      value: function() {
          return y(this.instance.settings.slideHTML)
      }
  }, {
      key: "getConfig",
      value: function() {
          B(this.element) || this.element.hasOwnProperty("draggable") || (this.element.draggable = this.instance.settings.draggable);
          var e = new G(this.instance.settings.slideExtraAttributes);
          return this.slideConfig = e.parseConfig(this.element, this.instance.settings), this.slideConfig
      }
  }]);
  var Q = K;

  function K(e, t, i) {
      o(this, K), this.element = e, this.instance = t, this.index = i
  }
  var Z = g(),
      J = null !== g() || void 0 !== document.createTouch || "ontouchstart" in window || "onmsgesturechange" in window || navigator.msMaxTouchPoints,
      ee = document.getElementsByTagName("html")[0],
      te = {
          selector: ".glightbox",
          elements: null,
          skin: "clean",
          theme: "clean",
          closeButton: !0,
          startAt: null,
          autoplayVideos: !0,
          autofocusVideos: !0,
          descPosition: "bottom",
          width: "900px",
          height: "506px",
          videosWidth: "960px",
          beforeSlideChange: null,
          afterSlideChange: null,
          beforeSlideLoad: null,
          afterSlideLoad: null,
          slideInserted: null,
          slideRemoved: null,
          slideExtraAttributes: null,
          onOpen: null,
          onClose: null,
          loop: !1,
          zoomable: !0,
          draggable: !0,
          dragAutoSnap: !1,
          dragToleranceX: 40,
          dragToleranceY: 65,
          preload: !0,
          oneSlidePerOpen: !1,
          touchNavigation: !0,
          touchFollowAxis: !0,
          keyboardNavigation: !0,
          closeOnOutsideClick: !0,
          plugins: !1,
          plyr: {
              css: "https://cdn.plyr.io/3.6.8/plyr.css",
              js: "https://cdn.plyr.io/3.6.8/plyr.js",
              config: {
                  ratio: "16:9",
                  fullscreen: {
                      enabled: !0,
                      iosNative: !0
                  },
                  youtube: {
                      noCookie: !0,
                      rel: 0,
                      showinfo: 0,
                      iv_load_policy: 3
                  },
                  vimeo: {
                      byline: !1,
                      portrait: !1,
                      title: !1,
                      transparent: !1
                  }
              }
          },
          openEffect: "zoom",
          closeEffect: "zoom",
          slideEffect: "slide",
          moreText: "See more",
          moreLength: 60,
          cssEfects: {
              fade: {
                  in: "fadeIn",
                  out: "fadeOut"
              },
              zoom: {
                  in: "zoomIn",
                  out: "zoomOut"
              },
              slide: {
                  in: "slideInRight",
                  out: "slideOutLeft"
              },
              slideBack: {
                  in: "slideInLeft",
                  out: "slideOutRight"
              },
              none: {
                  in: "none",
                  out: "none"
              }
          },
          svg: {
              close: '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve"><g><g><path d="M505.943,6.058c-8.077-8.077-21.172-8.077-29.249,0L6.058,476.693c-8.077,8.077-8.077,21.172,0,29.249C10.096,509.982,15.39,512,20.683,512c5.293,0,10.586-2.019,14.625-6.059L505.943,35.306C514.019,27.23,514.019,14.135,505.943,6.058z"/></g></g><g><g><path d="M505.942,476.694L35.306,6.059c-8.076-8.077-21.172-8.077-29.248,0c-8.077,8.076-8.077,21.171,0,29.248l470.636,470.636c4.038,4.039,9.332,6.058,14.625,6.058c5.293,0,10.587-2.019,14.624-6.057C514.018,497.866,514.018,484.771,505.942,476.694z"/></g></g></svg>',
              next: '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" xml:space="preserve"> <g><path d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z"/></g></svg>',
              prev: '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" xml:space="preserve"><g><path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"/></g></svg>'
          },
          slideHTML: '<div class="gslide">\n    <div class="gslide-inner-content">\n        <div class="ginner-container">\n            <div class="gslide-media">\n            </div>\n            <div class="gslide-description">\n                <div class="gdesc-inner">\n                    <h4 class="gslide-title"></h4>\n                    <div class="gslide-desc"></div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>',
          lightboxHTML: '<div id="glightbox-body" class="glightbox-container" tabindex="-1" role="dialog" aria-hidden="false">\n    <div class="gloader visible"></div>\n    <div class="goverlay"></div>\n    <div class="gcontainer">\n    <div id="glightbox-slider" class="gslider"></div>\n    <button class="gclose gbtn" aria-label="Close" data-taborder="3">{closeSVG}</button>\n    <button class="gprev gbtn" aria-label="Previous" data-taborder="2">{prevSVG}</button>\n    <button class="gnext gbtn" aria-label="Next" data-taborder="1">{nextSVG}</button>\n</div>\n</div>'
      },
      ie = (e(se, [{
          key: "init",
          value: function() {
              var i = this,
                  e = this.getSelector();
              e && (this.baseEvents = I("click", {
                  onElement: e,
                  withCallback: function(e, t) {
                      e.preventDefault(), i.open(t)
                  }
              })), this.elements = this.getElements()
          }
      }, {
          key: "open",
          value: function() {
              var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null,
                  t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
              if (0 == this.elements.length) return !1;
              this.activeSlide = null, this.prevActiveSlideIndex = null, this.prevActiveSlide = null;
              var s, u, h, n, i, r, o, p, m, f, a, l, g, v, y, b, w, x, T, E, _, S, c, d, C, k, A, M, P, t = R(t) ? t : this.settings.startAt,
                  O = (B(e) && ((O = e.getAttribute("data-gallery")) && (this.fullElementsList = this.elements, this.elements = this.getGalleryElements(this.elements, O)), j(t) && (t = this.getElementIndex(e)) < 0 && (t = 0)), R(t) || (t = 0), this.build(), F(this.overlay, "none" == this.settings.openEffect ? "none" : this.settings.cssEfects.fade.in), document.body);
              0 < window.innerWidth - document.documentElement.clientWidth && ((e = document.createElement("style")).type = "text/css", e.className = "gcss-styles", document.head.appendChild(e), L(O, "gscrollbar-fixer")), L(O, "glightbox-open"), L(ee, "glightbox-open"), Z && (L(document.body, "glightbox-mobile"), this.settings.slideEffect = "slide", this.settings.autoplayVideos = !1), this.showSlide(t, !0), 1 == this.elements.length ? (L(this.prevButton, "glightbox-button-hidden"), L(this.nextButton, "glightbox-button-hidden")) : ($(this.prevButton, "glightbox-button-hidden"), $(this.nextButton, "glightbox-button-hidden")), this.lightboxOpen = !0, this.trigger("open"), D(this.settings.onOpen) && this.settings.onOpen(), J && this.settings.touchNavigation && ((s = this).events.hasOwnProperty("touch") || (e = q(), u = e.width, h = e.height, p = n = !1, b = y = v = g = o = r = i = null, S = _ = l = a = !(f = m = 1), c = {}, d = {}, k = C = E = T = 0, e = document.getElementById("glightbox-slider"), M = document.querySelector(".goverlay"), e = new Y(e, {
                  touchStart: function(e) {
                      n = !0, (z(e.targetTouches[0].target, "ginner-container") || N(e.targetTouches[0].target, ".gslide-desc") || "a" == e.targetTouches[0].target.nodeName.toLowerCase()) && (n = !1), (n = N(e.targetTouches[0].target, ".gslide-inline") && !z(e.targetTouches[0].target.parentNode, "gslide-inline") ? !1 : n) && (d = e.targetTouches[0], c.pageX = e.targetTouches[0].pageX, c.pageY = e.targetTouches[0].pageY, C = e.targetTouches[0].clientX, k = e.targetTouches[0].clientY, i = s.activeSlide, r = i.querySelector(".gslide-media"), A = i.querySelector(".gslide-inline"), o = null, z(r, "gslide-image") && (o = r.querySelector("img")), 769 < (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) && (r = i.querySelector(".ginner-container")), $(M, "greset"), 20 < e.pageX && e.pageX < window.innerWidth - 20 || e.preventDefault())
                  },
                  touchMove: function(e) {
                      if (n && (d = e.targetTouches[0], !a && !l)) {
                          if (A && A.offsetHeight > h) {
                              var t = c.pageX - d.pageX;
                              if (Math.abs(t) <= 13) return !1
                          }
                          p = !0;
                          var i, t = e.targetTouches[0].clientX,
                              e = e.targetTouches[0].clientY,
                              t = C - t,
                              e = k - e;
                          if (Math.abs(t) > Math.abs(e) ? S = !(_ = !1) : _ = !(S = !1), w = d.pageX - c.pageX, T = 100 * w / u, x = d.pageY - c.pageY, E = 100 * x / h, _ && o && (i = 1 - Math.abs(x) / h, M.style.opacity = i, s.settings.touchFollowAxis && (T = 0)), S && (i = 1 - Math.abs(w) / u, r.style.opacity = i, s.settings.touchFollowAxis && (E = 0)), !o) return H(r, "translate3d(".concat(T, "%, 0, 0)"));
                          H(r, "translate3d(".concat(T, "%, ").concat(E, "%, 0)"))
                      }
                  },
                  touchEnd: function() {
                      if (n) {
                          if (p = !1, l || a) return y = g, void(b = v);
                          var e = Math.abs(parseInt(E)),
                              t = Math.abs(parseInt(T));
                          if (!(29 < e && o)) return e < 29 && t < 25 ? (L(M, "greset"), M.style.opacity = 1, X(r)) : void 0;
                          s.close()
                      }
                  },
                  multipointEnd: function() {
                      setTimeout(function() {
                          a = !1
                      }, 50)
                  },
                  multipointStart: function() {
                      a = !0, m = f || 1
                  },
                  pinch: function(e) {
                      if (!o || p) return !1;
                      a = !0, o.scaleX = o.scaleY = m * e.zoom;
                      e = m * e.zoom;
                      if (l = !0, e <= 1) return l = !1, e = 1, v = g = y = b = null, void o.setAttribute("style", "");
                      o.style.transform = "scale3d(".concat(e = 4.5 < e ? 4.5 : e, ", ").concat(e, ", 1)"), f = e
                  },
                  pressMove: function(e) {
                      var t, i;
                      l && !a && (i = d.pageX - c.pageX, t = d.pageY - c.pageY, y && (i += y), b && (t += b), g = i, v = t, i = "translate3d(".concat(i, "px, ").concat(t, "px, 0)"), f && (i += " scale3d(".concat(f, ", ").concat(f, ", 1)")), H(o, i))
                  },
                  swipe: function(e) {
                      if (!l)
                          if (a) a = !1;
                          else {
                              if ("Left" == e.direction) {
                                  if (s.index == s.elements.length - 1) return X(r);
                                  s.nextSlide()
                              }
                              if ("Right" == e.direction) {
                                  if (0 == s.index) return X(r);
                                  s.prevSlide()
                              }
                          }
                  }
              }), s.events.touch = e)), this.settings.keyboardNavigation && ((P = this).events.hasOwnProperty("keyboard") || (P.events.keyboard = I("keydown", {
                  onElement: window,
                  withCallback: function(e, t) {
                      var i = (e = e || window.event).keyCode;
                      if (9 == i) {
                          var s = document.querySelector(".gbtn.focused");
                          if (!s) {
                              var n = !(!document.activeElement || !document.activeElement.nodeName) && document.activeElement.nodeName.toLocaleLowerCase();
                              if ("input" == n || "textarea" == n || "button" == n) return
                          }
                          e.preventDefault();
                          n = document.querySelectorAll(".gbtn[data-taborder]");
                          if (!n || n.length <= 0) return;
                          if (!s) return void((e = W()) && (e.focus(), L(e, "focused")));
                          n = W(s.getAttribute("data-taborder"));
                          $(s, "focused"), n && (n.focus(), L(n, "focused"))
                      }
                      39 == i && P.nextSlide(), 37 == i && P.prevSlide(), 27 == i && P.close()
                  }
              })))
          }
      }, {
          key: "openAt",
          value: function() {
              this.open(null, 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0)
          }
      }, {
          key: "showSlide",
          value: function() {
              var e, t = this,
                  i = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0,
                  s = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
                  n = (l(this.loader), this.index = parseInt(i), this.slidesContainer.querySelector(".current")),
                  r = (n && $(n, "current"), this.slideAnimateOut(), this.slidesContainer.querySelectorAll(".gslide")[i]);
              z(r, "loaded") ? (this.slideAnimateIn(r, s), d(this.loader)) : (l(this.loader), n = this.elements[i], e = {
                  index: this.index,
                  slide: r,
                  slideNode: r,
                  slideConfig: n.slideConfig,
                  slideIndex: this.index,
                  trigger: n.node,
                  player: null
              }, this.trigger("slide_before_load", e), n.instance.setContent(r, function() {
                  d(t.loader), t.resize(), t.slideAnimateIn(r, s), t.trigger("slide_after_load", e)
              })), this.slideDescription = r.querySelector(".gslide-description"), this.slideDescriptionContained = this.slideDescription && z(this.slideDescription.parentNode, "gslide-media"), this.settings.preload && (this.preloadSlide(i + 1), this.preloadSlide(i - 1)), this.updateNavigationClasses(), this.activeSlide = r
          }
      }, {
          key: "preloadSlide",
          value: function(e) {
              var t = this;
              if (e < 0 || e > this.elements.length - 1) return !1;
              if (j(this.elements[e])) return !1;
              var i = this.slidesContainer.querySelectorAll(".gslide")[e];
              if (z(i, "loaded")) return !1;
              var s = this.elements[e],
                  n = s.type,
                  r = {
                      index: e,
                      slide: i,
                      slideNode: i,
                      slideConfig: s.slideConfig,
                      slideIndex: e,
                      trigger: s.node,
                      player: null
                  };
              this.trigger("slide_before_load", r), "video" == n || "external" == n ? setTimeout(function() {
                  s.instance.setContent(i, function() {
                      t.trigger("slide_after_load", r)
                  })
              }, 200) : s.instance.setContent(i, function() {
                  t.trigger("slide_after_load", r)
              })
          }
      }, {
          key: "prevSlide",
          value: function() {
              this.goToSlide(this.index - 1)
          }
      }, {
          key: "nextSlide",
          value: function() {
              this.goToSlide(this.index + 1)
          }
      }, {
          key: "goToSlide",
          value: function() {
              var e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
              if (this.prevActiveSlide = this.activeSlide, this.prevActiveSlideIndex = this.index, !this.loop() && (e < 0 || e > this.elements.length - 1)) return !1;
              e < 0 ? e = this.elements.length - 1 : e >= this.elements.length && (e = 0), this.showSlide(e)
          }
      }, {
          key: "insertSlide",
          value: function() {
              var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                  t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : -1,
                  e = (t < 0 && (t = this.elements.length), new Q(e, this, t)),
                  i = e.getConfig(),
                  s = c({}, i),
                  n = e.create(),
                  r = this.elements.length - 1,
                  e = (s.index = t, s.node = !1, s.instance = e, s.slideConfig = i, this.elements.splice(t, 0, s), null),
                  o = null;
              this.slidesContainer && (r < t ? this.slidesContainer.appendChild(n) : (r = this.slidesContainer.querySelectorAll(".gslide")[t], this.slidesContainer.insertBefore(n, r)), (this.settings.preload && 0 == this.index && 0 == t || this.index - 1 == t || this.index + 1 == t) && this.preloadSlide(t), 0 == this.index && 0 == t && (this.index = 1), this.updateNavigationClasses(), e = this.slidesContainer.querySelectorAll(".gslide")[t], o = this.getSlidePlayerInstance(t), s.slideNode = e), this.trigger("slide_inserted", {
                  index: t,
                  slide: e,
                  slideNode: e,
                  slideConfig: i,
                  slideIndex: t,
                  trigger: null,
                  player: o
              }), D(this.settings.slideInserted) && this.settings.slideInserted({
                  index: t,
                  slide: e,
                  player: o
              })
          }
      }, {
          key: "removeSlide",
          value: function() {
              var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : -1;
              if (e < 0 || e > this.elements.length - 1) return !1;
              var t = this.slidesContainer && this.slidesContainer.querySelectorAll(".gslide")[e];
              t && (this.getActiveSlideIndex() == e && (e == this.elements.length - 1 ? this.prevSlide() : this.nextSlide()), t.parentNode.removeChild(t)), this.elements.splice(e, 1), this.trigger("slide_removed", e), D(this.settings.slideRemoved) && this.settings.slideRemoved(e)
          }
      }, {
          key: "slideAnimateIn",
          value: function(e, t) {
              var i = this,
                  s = e.querySelector(".gslide-media"),
                  n = e.querySelector(".gslide-description"),
                  r = {
                      index: this.prevActiveSlideIndex,
                      slide: this.prevActiveSlide,
                      slideNode: this.prevActiveSlide,
                      slideIndex: this.prevActiveSlide,
                      slideConfig: j(this.prevActiveSlideIndex) ? null : this.elements[this.prevActiveSlideIndex].slideConfig,
                      trigger: j(this.prevActiveSlideIndex) ? null : this.elements[this.prevActiveSlideIndex].node,
                      player: this.getSlidePlayerInstance(this.prevActiveSlideIndex)
                  },
                  o = {
                      index: this.index,
                      slide: this.activeSlide,
                      slideNode: this.activeSlide,
                      slideConfig: this.elements[this.index].slideConfig,
                      slideIndex: this.index,
                      trigger: this.elements[this.index].node,
                      player: this.getSlidePlayerInstance(this.index)
                  };
              0 < s.offsetWidth && n && (d(n), n.style.display = ""), $(e, this.effectsClasses), t ? F(e, this.settings.cssEfects[this.settings.openEffect].in, function() {
                  i.settings.autoplayVideos && i.slidePlayerPlay(e), i.trigger("slide_changed", {
                      prev: r,
                      current: o
                  }), D(i.settings.afterSlideChange) && i.settings.afterSlideChange.apply(i, [r, o])
              }) : (n = "none" !== (s = this.settings.slideEffect) ? this.settings.cssEfects[s].in : s, this.prevActiveSlideIndex > this.index && "slide" == this.settings.slideEffect && (n = this.settings.cssEfects.slideBack.in), F(e, n, function() {
                  i.settings.autoplayVideos && i.slidePlayerPlay(e), i.trigger("slide_changed", {
                      prev: r,
                      current: o
                  }), D(i.settings.afterSlideChange) && i.settings.afterSlideChange.apply(i, [r, o])
              })), setTimeout(function() {
                  i.resize(e)
              }, 100), L(e, "current")
          }
      }, {
          key: "slideAnimateOut",
          value: function() {
              if (!this.prevActiveSlide) return !1;
              var s = this.prevActiveSlide,
                  e = ($(s, this.effectsClasses), L(s, "prev"), this.settings.slideEffect),
                  e = "none" !== e ? this.settings.cssEfects[e].out : e;
              this.slidePlayerPause(s), this.trigger("slide_before_change", {
                  prev: {
                      index: this.prevActiveSlideIndex,
                      slide: this.prevActiveSlide,
                      slideNode: this.prevActiveSlide,
                      slideIndex: this.prevActiveSlideIndex,
                      slideConfig: j(this.prevActiveSlideIndex) ? null : this.elements[this.prevActiveSlideIndex].slideConfig,
                      trigger: j(this.prevActiveSlideIndex) ? null : this.elements[this.prevActiveSlideIndex].node,
                      player: this.getSlidePlayerInstance(this.prevActiveSlideIndex)
                  },
                  current: {
                      index: this.index,
                      slide: this.activeSlide,
                      slideNode: this.activeSlide,
                      slideIndex: this.index,
                      slideConfig: this.elements[this.index].slideConfig,
                      trigger: this.elements[this.index].node,
                      player: this.getSlidePlayerInstance(this.index)
                  }
              }), D(this.settings.beforeSlideChange) && this.settings.beforeSlideChange.apply(this, [{
                  index: this.prevActiveSlideIndex,
                  slide: this.prevActiveSlide,
                  player: this.getSlidePlayerInstance(this.prevActiveSlideIndex)
              }, {
                  index: this.index,
                  slide: this.activeSlide,
                  player: this.getSlidePlayerInstance(this.index)
              }]), this.prevActiveSlideIndex > this.index && "slide" == this.settings.slideEffect && (e = this.settings.cssEfects.slideBack.out), F(s, e, function() {
                  var e = s.querySelector(".ginner-container"),
                      t = s.querySelector(".gslide-media"),
                      i = s.querySelector(".gslide-description");
                  e.style.transform = "", t.style.transform = "", $(t, "greset"), t.style.opacity = "", i && (i.style.opacity = ""), $(s, "prev")
              })
          }
      }, {
          key: "getAllPlayers",
          value: function() {
              return this.videoPlayers
          }
      }, {
          key: "getSlidePlayerInstance",
          value: function(e) {
              var e = "gvideo" + e,
                  t = this.getAllPlayers();
              return !(!v(t, e) || !t[e]) && t[e]
          }
      }, {
          key: "stopSlideVideo",
          value: function(e) {
              !B(e) || (t = e.querySelector(".gvideo-wrapper")) && (e = t.getAttribute("data-index")), console.log("stopSlideVideo is deprecated, use slidePlayerPause");
              var t = this.getSlidePlayerInstance(e);
              t && t.playing && t.pause()
          }
      }, {
          key: "slidePlayerPause",
          value: function(e) {
              !B(e) || (t = e.querySelector(".gvideo-wrapper")) && (e = t.getAttribute("data-index"));
              var t = this.getSlidePlayerInstance(e);
              t && t.playing && t.pause()
          }
      }, {
          key: "playSlideVideo",
          value: function(e) {
              !B(e) || (t = e.querySelector(".gvideo-wrapper")) && (e = t.getAttribute("data-index")), console.log("playSlideVideo is deprecated, use slidePlayerPlay");
              var t = this.getSlidePlayerInstance(e);
              t && !t.playing && t.play()
          }
      }, {
          key: "slidePlayerPlay",
          value: function(e) {
              !B(e) || (t = e.querySelector(".gvideo-wrapper")) && (e = t.getAttribute("data-index"));
              var t = this.getSlidePlayerInstance(e);
              t && !t.playing && (t.play(), this.settings.autofocusVideos && t.elements.container.focus())
          }
      }, {
          key: "setElements",
          value: function(e) {
              var n = this,
                  r = (this.settings.elements = !1, []);
              e && e.length && h(e, function(e, t) {
                  var e = new Q(e, n, t),
                      i = e.getConfig(),
                      s = c({}, i);
                  s.slideConfig = i, s.instance = e, s.index = t, r.push(s)
              }), this.elements = r, this.lightboxOpen && (this.slidesContainer.innerHTML = "", this.elements.length && (h(this.elements, function() {
                  var e = y(n.settings.slideHTML);
                  n.slidesContainer.appendChild(e)
              }), this.showSlide(0, !0)))
          }
      }, {
          key: "getElementIndex",
          value: function(i) {
              var s = !1;
              return h(this.elements, function(e, t) {
                  if (v(e, "node") && e.node == i) return s = t, !0
              }), s
          }
      }, {
          key: "getElements",
          value: function() {
              var r = this,
                  o = [],
                  e = (this.elements = this.elements || [], !j(this.settings.elements) && u(this.settings.elements) && this.settings.elements.length && h(this.settings.elements, function(e, t) {
                      var e = new Q(e, r, t),
                          i = e.getConfig(),
                          s = c({}, i);
                      s.node = !1, s.index = t, s.instance = e, s.slideConfig = i, o.push(s)
                  }), !1);
              return (e = this.getSelector() ? document.querySelectorAll(this.getSelector()) : e) && h(e, function(e, t) {
                  var i = new Q(e, r, t),
                      s = i.getConfig(),
                      n = c({}, s);
                  n.node = e, n.index = t, n.instance = i, n.slideConfig = s, n.gallery = e.getAttribute("data-gallery"), o.push(n)
              }), o
          }
      }, {
          key: "getGalleryElements",
          value: function(e, t) {
              return e.filter(function(e) {
                  return e.gallery == t
              })
          }
      }, {
          key: "getSelector",
          value: function() {
              return !this.settings.elements && (this.settings.selector && "data-" == this.settings.selector.substring(0, 5) ? "*[".concat(this.settings.selector, "]") : this.settings.selector)
          }
      }, {
          key: "getActiveSlide",
          value: function() {
              return this.slidesContainer.querySelectorAll(".gslide")[this.index]
          }
      }, {
          key: "getActiveSlideIndex",
          value: function() {
              return this.index
          }
      }, {
          key: "getAnimationClasses",
          value: function() {
              var e, t, i = [];
              for (e in this.settings.cssEfects) this.settings.cssEfects.hasOwnProperty(e) && (t = this.settings.cssEfects[e], i.push("g".concat(t.in)), i.push("g".concat(t.out)));
              return i.join(" ")
          }
      }, {
          key: "build",
          value: function() {
              var i = this;
              if (this.built) return !1;
              var e = document.body.childNodes,
                  t = [],
                  e = (h(e, function(e) {
                      e.parentNode == document.body && "#" !== e.nodeName.charAt(0) && e.hasAttribute && !e.hasAttribute("aria-hidden") && (t.push(e), e.setAttribute("aria-hidden", "true"))
                  }), v(this.settings.svg, "next") ? this.settings.svg.next : ""),
                  s = v(this.settings.svg, "prev") ? this.settings.svg.prev : "",
                  n = v(this.settings.svg, "close") ? this.settings.svg.close : "",
                  r = this.settings.lightboxHTML,
                  e = (r = y(r = (r = (r = r.replace(/{nextSVG}/g, e)).replace(/{prevSVG}/g, s)).replace(/{closeSVG}/g, n)), document.body.appendChild(r), document.getElementById("glightbox-body")),
                  s = (this.modal = e).querySelector(".gclose");
              this.prevButton = e.querySelector(".gprev"), this.nextButton = e.querySelector(".gnext"), this.overlay = e.querySelector(".goverlay"), this.loader = e.querySelector(".gloader"), this.slidesContainer = document.getElementById("glightbox-slider"), this.bodyHiddenChildElms = t, this.events = {}, L(this.modal, "glightbox-" + this.settings.skin), this.settings.closeButton && s && (this.events.close = I("click", {
                  onElement: s,
                  withCallback: function(e, t) {
                      e.preventDefault(), i.close()
                  }
              })), s && !this.settings.closeButton && s.parentNode.removeChild(s), this.nextButton && (this.events.next = I("click", {
                  onElement: this.nextButton,
                  withCallback: function(e, t) {
                      e.preventDefault(), i.nextSlide()
                  }
              })), this.prevButton && (this.events.prev = I("click", {
                  onElement: this.prevButton,
                  withCallback: function(e, t) {
                      e.preventDefault(), i.prevSlide()
                  }
              })), this.settings.closeOnOutsideClick && (this.events.outClose = I("click", {
                  onElement: e,
                  withCallback: function(e, t) {
                      i.preventOutsideClick || z(document.body, "glightbox-mobile") || N(e.target, ".ginner-container") || N(e.target, ".gbtn") || z(e.target, "gnext") || z(e.target, "gprev") || i.close()
                  }
              })), h(this.elements, function(e, t) {
                  i.slidesContainer.appendChild(e.instance.create()), e.slideNode = i.slidesContainer.querySelectorAll(".gslide")[t]
              }), J && (L(document.body, "glightbox-touch"), this.settings.autoplayVideos = !1), this.events.resize = I("resize", {
                  onElement: window,
                  withCallback: function() {
                      i.resize()
                  }
              }), this.built = !0
          }
      }, {
          key: "resize",
          value: function() {
              var e, t, i, s, n, r, o, a = (a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null) || this.activeSlide;
              a && !z(a, "zoomed") && (i = q(), e = a.querySelector(".gvideo-wrapper"), a = a.querySelector(".gslide-image"), t = this.slideDescription, r = i.width, i = i.height, (r <= 768 ? L : $)(document.body, "glightbox-mobile"), (e || a) && (s = !1, t && (z(t, "description-bottom") || z(t, "description-top")) && !z(t, "gabsolute") && (s = !0), a && (r <= 768 ? a.querySelector("img") : s && (n = t.offsetHeight, (a = a.querySelector("img")).setAttribute("style", "max-height: calc(100vh - ".concat(n, "px)")), t.setAttribute("style", "max-width: ".concat(a.offsetWidth, "px;")))), e && ((n = v(this.settings.plyr.config, "ratio") ? this.settings.plyr.config.ratio : "") || (a = e.clientWidth, o = e.clientHeight, n = "".concat(a / (a = a / o), ":").concat(o / a)), o = n.split(":"), a = this.settings.videosWidth, n = this.settings.videosWidth, o = (n = R(a) || -1 !== a.indexOf("px") ? parseInt(a) : -1 !== a.indexOf("vw") ? r * parseInt(a) / 100 : -1 !== a.indexOf("vh") ? i * parseInt(a) / 100 : -1 !== a.indexOf("%") ? r * parseInt(a) / 100 : parseInt(e.clientWidth)) / (parseInt(o[0]) / parseInt(o[1])), o = Math.floor(o), s && (i -= t.offsetHeight), r < n || i < o || i < o && n < r ? (o = e.offsetWidth, n = e.offsetHeight, e.parentNode.setAttribute("style", "max-width: ".concat((o = {
                  width: o * (r = i / n),
                  height: n * r
              }).width, "px")), s && t.setAttribute("style", "max-width: ".concat(o.width, "px;"))) : (e.parentNode.style.maxWidth = "".concat(a), s && t.setAttribute("style", "max-width: ".concat(a, ";"))))))
          }
      }, {
          key: "reload",
          value: function() {
              this.init()
          }
      }, {
          key: "updateNavigationClasses",
          value: function() {
              var e = this.loop();
              $(this.nextButton, "disabled"), $(this.prevButton, "disabled"), 0 == this.index && this.elements.length - 1 == 0 ? (L(this.prevButton, "disabled"), L(this.nextButton, "disabled")) : 0 !== this.index || e ? this.index !== this.elements.length - 1 || e || L(this.nextButton, "disabled") : L(this.prevButton, "disabled")
          }
      }, {
          key: "loop",
          value: function() {
              var e = v(this.settings, "loopAtEnd") ? this.settings.loopAtEnd : null;
              return e = v(this.settings, "loop") ? this.settings.loop : e
          }
      }, {
          key: "close",
          value: function() {
              var i = this;
              if (!this.lightboxOpen) {
                  if (this.events) {
                      for (var e in this.events) this.events.hasOwnProperty(e) && this.events[e].destroy();
                      this.events = null
                  }
                  return !1
              }
              if (this.closing) return !1;
              this.closing = !0, this.slidePlayerPause(this.activeSlide), this.fullElementsList && (this.elements = this.fullElementsList), this.bodyHiddenChildElms.length && h(this.bodyHiddenChildElms, function(e) {
                  e.removeAttribute("aria-hidden")
              }), L(this.modal, "glightbox-closing"), F(this.overlay, "none" == this.settings.openEffect ? "none" : this.settings.cssEfects.fade.out), F(this.activeSlide, this.settings.cssEfects[this.settings.closeEffect].out, function() {
                  if (i.activeSlide = null, i.prevActiveSlideIndex = null, i.prevActiveSlide = null, i.built = !1, i.events) {
                      for (var e in i.events) i.events.hasOwnProperty(e) && i.events[e].destroy();
                      i.events = null
                  }
                  var t = document.body,
                      t = ($(ee, "glightbox-open"), $(t, "glightbox-open touching gdesc-open glightbox-touch glightbox-mobile gscrollbar-fixer"), i.modal.parentNode.removeChild(i.modal), i.trigger("close"), D(i.settings.onClose) && i.settings.onClose(), document.querySelector(".gcss-styles"));
                  t && t.parentNode.removeChild(t), i.lightboxOpen = !1, i.closing = null
              })
          }
      }, {
          key: "destroy",
          value: function() {
              this.close(), this.clearAllEvents(), this.baseEvents && this.baseEvents.destroy()
          }
      }, {
          key: "on",
          value: function(e, t) {
              var i = 2 < arguments.length && void 0 !== arguments[2] && arguments[2];
              if (!e || !D(t)) throw new TypeError("Event name and callback must be defined");
              this.apiEvents.push({
                  evt: e,
                  once: i,
                  callback: t
              })
          }
      }, {
          key: "once",
          value: function(e, t) {
              this.on(e, t, !0)
          }
      }, {
          key: "trigger",
          value: function(n) {
              var t = this,
                  r = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null,
                  o = [];
              h(this.apiEvents, function(e, t) {
                  var i = e.evt,
                      s = e.once,
                      e = e.callback;
                  i == n && (e(r), s && o.push(t))
              }), o.length && h(o, function(e) {
                  return t.apiEvents.splice(e, 1)
              })
          }
      }, {
          key: "clearAllEvents",
          value: function() {
              this.apiEvents.splice(0, this.apiEvents.length)
          }
      }, {
          key: "version",
          value: function() {
              return "3.1.1"
          }
      }]), se);

  function se() {
      var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
      o(this, se), this.customOptions = e, this.settings = c(te, e), this.effectsClasses = this.getAnimationClasses(), this.videoPlayers = {}, this.apiEvents = [], this.fullElementsList = !1
  }
  return function() {
      var e = new ie(0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {});
      return e.init(), e
  }
}),
function(e, t) {
  "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? module.exports = t() : e.Headhesive = t()
}(this, function() {
  "use strict";

  function e(i, s) {
      function n() {
          d = l(), c = null, a = i.apply(r, o), r = o = null
      }
      var r, o, a, l = Date.now || function() {
              return (new Date).getTime()
          },
          c = null,
          d = 0;
      return function() {
          var e = l(),
              t = s - (e - d);
          return r = this, o = arguments, t <= 0 ? (clearTimeout(c), c = null, d = e, a = i.apply(r, o), r = o = null) : c = c || setTimeout(n, t), a
      }
  }

  function t(e, t) {
      "querySelector" in document && "addEventListener" in window && (this.visible = !1, this.options = {
          offset: 300,
          offsetSide: "top",
          classes: {
              clone: "headhesive",
              stick: "headhesive--stick",
              unstick: "headhesive--unstick"
          },
          throttle: 250,
          onInit: function() {},
          onStick: function() {},
          onUnstick: function() {},
          onDestroy: function() {}
      }, this.elem = "string" == typeof e ? document.querySelector(e) : e, this.options = s(this.options, t), this.init())
  }
  var s = function(e, t) {
      for (var i in t) t.hasOwnProperty(i) && (e[i] = "object" == typeof t[i] ? s(e[i], t[i]) : t[i]);
      return e
  };
  return t.prototype = {
      constructor: t,
      init: function() {
          if (this.clonedElem = this.elem.cloneNode(!0), this.clonedElem.className += " " + this.options.classes.clone, document.body.insertBefore(this.clonedElem, document.body.firstChild), "number" == typeof this.options.offset) this.scrollOffset = this.options.offset;
          else {
              if ("string" != typeof this.options.offset) throw new Error("Invalid offset: " + this.options.offset);
              this._setScrollOffset()
          }
          this._throttleUpdate = e(this.update.bind(this), this.options.throttle), this._throttleScrollOffset = e(this._setScrollOffset.bind(this), this.options.throttle), window.addEventListener("scroll", this._throttleUpdate, !1), window.addEventListener("resize", this._throttleScrollOffset, !1), this.options.onInit.call(this)
      },
      _setScrollOffset: function() {
          "string" == typeof this.options.offset && (this.scrollOffset = function(e, t) {
              for (var i = 0, s = e.offsetHeight; e;) i += e.offsetTop, e = e.offsetParent;
              return "bottom" === t && (i += s), i
          }(document.querySelector(this.options.offset), this.options.offsetSide))
      },
      destroy: function() {
          document.body.removeChild(this.clonedElem), window.removeEventListener("scroll", this._throttleUpdate), window.removeEventListener("resize", this._throttleScrollOffset), this.options.onDestroy.call(this)
      },
      stick: function() {
          this.visible || (this.clonedElem.className = this.clonedElem.className.replace(new RegExp("(^|\\s)*" + this.options.classes.unstick + "(\\s|$)*", "g"), ""), this.clonedElem.className += " " + this.options.classes.stick, this.visible = !0, this.options.onStick.call(this))
      },
      unstick: function() {
          this.visible && (this.clonedElem.className = this.clonedElem.className.replace(new RegExp("(^|\\s)*" + this.options.classes.stick + "(\\s|$)*", "g"), ""), this.clonedElem.className += " " + this.options.classes.unstick, this.visible = !1, this.options.onUnstick.call(this))
      },
      update: function() {
          (void 0 !== window.pageYOffset ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop) > this.scrollOffset ? this.stick() : this.unstick()
      }
  }, t
}),
function(e, t) {
  "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", t) : "object" == typeof module && module.exports ? module.exports = t() : e.EvEmitter = t()
}("undefined" != typeof window ? window : this, function() {
  function e() {}
  var t = e.prototype;
  return t.on = function(e, t) {
      var i;
      if (e && t) return -1 == (i = (i = this._events = this._events || {})[e] = i[e] || []).indexOf(t) && i.push(t), this
  }, t.once = function(e, t) {
      var i;
      if (e && t) return this.on(e, t), ((i = this._onceEvents = this._onceEvents || {})[e] = i[e] || {})[t] = !0, this
  }, t.off = function(e, t) {
      e = this._events && this._events[e];
      if (e && e.length) return -1 != (t = e.indexOf(t)) && e.splice(t, 1), this
  }, t.emitEvent = function(e, t) {
      var i = this._events && this._events[e];
      if (i && i.length) {
          i = i.slice(0), t = t || [];
          for (var s = this._onceEvents && this._onceEvents[e], n = 0; n < i.length; n++) {
              var r = i[n];
              s && s[r] && (this.off(e, r), delete s[r]), r.apply(this, t)
          }
          return this
      }
  }, t.allOff = function() {
      delete this._events, delete this._onceEvents
  }, e
}),
function(t, i) {
  "use strict";
  "function" == typeof define && define.amd ? define(["ev-emitter/ev-emitter"], function(e) {
      return i(t, e)
  }) : "object" == typeof module && module.exports ? module.exports = i(t, require("ev-emitter")) : t.imagesLoaded = i(t, t.EvEmitter)
}("undefined" != typeof window ? window : this, function(t, e) {
  function r(e, t) {
      for (var i in t) e[i] = t[i];
      return e
  }

  function o(e, t, i) {
      if (!(this instanceof o)) return new o(e, t, i);
      var s, n = e;
      return (n = "string" == typeof e ? document.querySelectorAll(e) : n) ? (this.elements = (s = n, Array.isArray(s) ? s : "object" == typeof s && "number" == typeof s.length ? c.call(s) : [s]), this.options = r({}, this.options), "function" == typeof t ? i = t : r(this.options, t), i && this.on("always", i), this.getImages(), a && (this.jqDeferred = new a.Deferred), void setTimeout(this.check.bind(this))) : void l.error("Bad element for imagesLoaded " + (n || e))
  }

  function i(e) {
      this.img = e
  }

  function s(e, t) {
      this.url = e, this.element = t, this.img = new Image
  }
  var a = t.jQuery,
      l = t.console,
      c = Array.prototype.slice,
      d = ((o.prototype = Object.create(e.prototype)).options = {}, o.prototype.getImages = function() {
          this.images = [], this.elements.forEach(this.addElementImages, this)
      }, o.prototype.addElementImages = function(e) {
          "IMG" == e.nodeName && this.addImage(e), !0 === this.options.background && this.addElementBackgroundImages(e);
          var t = e.nodeType;
          if (t && d[t]) {
              for (var i = e.querySelectorAll("img"), s = 0; s < i.length; s++) {
                  var n = i[s];
                  this.addImage(n)
              }
              if ("string" == typeof this.options.background)
                  for (var r = e.querySelectorAll(this.options.background), s = 0; s < r.length; s++) {
                      var o = r[s];
                      this.addElementBackgroundImages(o)
                  }
          }
      }, {
          1: !0,
          9: !0,
          11: !0
      });
  return o.prototype.addElementBackgroundImages = function(e) {
      var t = getComputedStyle(e);
      if (t)
          for (var i = /url\((['"])?(.*?)\1\)/gi, s = i.exec(t.backgroundImage); null !== s;) {
              var n = s && s[2];
              n && this.addBackground(n, e), s = i.exec(t.backgroundImage)
          }
  }, o.prototype.addImage = function(e) {
      e = new i(e);
      this.images.push(e)
  }, o.prototype.addBackground = function(e, t) {
      e = new s(e, t);
      this.images.push(e)
  }, o.prototype.check = function() {
      function t(e, t, i) {
          setTimeout(function() {
              s.progress(e, t, i)
          })
      }
      var s = this;
      return this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? void this.images.forEach(function(e) {
          e.once("progress", t), e.check()
      }) : void this.complete()
  }, o.prototype.progress = function(e, t, i) {
      this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded, this.emitEvent("progress", [this, e, t]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, e), this.progressedCount == this.images.length && this.complete(), this.options.debug && l && l.log("progress: " + i, e, t)
  }, o.prototype.complete = function() {
      var e = this.hasAnyBroken ? "fail" : "done";
      this.isComplete = !0, this.emitEvent(e, [this]), this.emitEvent("always", [this]), this.jqDeferred && (e = this.hasAnyBroken ? "reject" : "resolve", this.jqDeferred[e](this))
  }, (i.prototype = Object.create(e.prototype)).check = function() {
      return this.getIsImageComplete() ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), void(this.proxyImage.src = this.img.src))
  }, i.prototype.getIsImageComplete = function() {
      return this.img.complete && this.img.naturalWidth
  }, i.prototype.confirm = function(e, t) {
      this.isLoaded = e, this.emitEvent("progress", [this, this.img, t])
  }, i.prototype.handleEvent = function(e) {
      var t = "on" + e.type;
      this[t] && this[t](e)
  }, i.prototype.onload = function() {
      this.confirm(!0, "onload"), this.unbindEvents()
  }, i.prototype.onerror = function() {
      this.confirm(!1, "onerror"), this.unbindEvents()
  }, i.prototype.unbindEvents = function() {
      this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
  }, (s.prototype = Object.create(i.prototype)).check = function() {
      this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url, this.getIsImageComplete() && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
  }, s.prototype.unbindEvents = function() {
      this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
  }, s.prototype.confirm = function(e, t) {
      this.isLoaded = e, this.emitEvent("progress", [this, this.element, t])
  }, (o.makeJQueryPlugin = function(e) {
      (e = e || t.jQuery) && ((a = e).fn.imagesLoaded = function(e, t) {
          return new o(this, e, t).jqDeferred.promise(a(this))
      })
  })(), o
}),
function(t, i) {
  "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function(e) {
      return i(t, e)
  }) : "object" == typeof module && module.exports ? module.exports = i(t, require("jquery")) : t.jQueryBridget = i(t, t.jQuery)
}(window, function(e, t) {
  "use strict";

  function i(l, c, d) {
      (d = d || t || e.jQuery) && (c.prototype.option || (c.prototype.option = function(e) {
          d.isPlainObject(e) && (this.options = d.extend(!0, this.options, e))
      }), d.fn[l] = function(e) {
          var t, s, n, r, o, a;
          return "string" == typeof e ? (t = u.call(arguments, 1), n = t, o = "$()." + l + '("' + (s = e) + '")', (t = this).each(function(e, t) {
              var i, t = d.data(t, l);
              t ? (i = t[s]) && "_" != s.charAt(0) ? (i = i.apply(t, n), r = void 0 === r ? i : r) : h(o + " is not a valid method") : h(l + " not initialized. Cannot call methods, i.e. " + o)
          }), void 0 !== r ? r : t) : (a = e, this.each(function(e, t) {
              var i = d.data(t, l);
              i ? (i.option(a), i._init()) : (i = new c(t, a), d.data(t, l, i))
          }), this)
      }, s(d))
  }

  function s(e) {
      !e || e.bridget || (e.bridget = i)
  }
  var u = Array.prototype.slice,
      n = e.console,
      h = void 0 === n ? function() {} : function(e) {
          n.error(e)
      };
  return s(t || e.jQuery), i
}),
function(e, t) {
  "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", t) : "object" == typeof module && module.exports ? module.exports = t() : e.EvEmitter = t()
}("undefined" != typeof window ? window : this, function() {
  function e() {}
  var t = e.prototype;
  return t.on = function(e, t) {
      var i;
      if (e && t) return -1 == (i = (i = this._events = this._events || {})[e] = i[e] || []).indexOf(t) && i.push(t), this
  }, t.once = function(e, t) {
      var i;
      if (e && t) return this.on(e, t), ((i = this._onceEvents = this._onceEvents || {})[e] = i[e] || {})[t] = !0, this
  }, t.off = function(e, t) {
      e = this._events && this._events[e];
      if (e && e.length) return -1 != (t = e.indexOf(t)) && e.splice(t, 1), this
  }, t.emitEvent = function(e, t) {
      var i = this._events && this._events[e];
      if (i && i.length) {
          i = i.slice(0), t = t || [];
          for (var s = this._onceEvents && this._onceEvents[e], n = 0; n < i.length; n++) {
              var r = i[n];
              s && s[r] && (this.off(e, r), delete s[r]), r.apply(this, t)
          }
          return this
      }
  }, t.allOff = function() {
      delete this._events, delete this._onceEvents
  }, e
}),
function(e, t) {
  "function" == typeof define && define.amd ? define("get-size/get-size", t) : "object" == typeof module && module.exports ? module.exports = t() : e.getSize = t()
}(window, function() {
  "use strict";

  function g(e) {
      var t = parseFloat(e);
      return -1 == e.indexOf("%") && !isNaN(t) && t
  }

  function v(e) {
      e = getComputedStyle(e);
      return e || t("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"), e
  }

  function y(e) {
      if (T || (T = !0, (a = document.createElement("div")).style.width = "200px", a.style.padding = "1px 2px 3px 4px", a.style.borderStyle = "solid", a.style.borderWidth = "1px 2px 3px 4px", a.style.boxSizing = "border-box", (o = document.body || document.documentElement).appendChild(a), s = v(a), b = 200 == Math.round(g(s.width)), y.isBoxSizeOuter = b, o.removeChild(a)), (e = "string" == typeof e ? document.querySelector(e) : e) && "object" == typeof e && e.nodeType) {
          var t = v(e);
          if ("none" != t.display) {
              var i = {};
              i.width = e.offsetWidth, i.height = e.offsetHeight;
              for (var s = i.isBorderBox = "border-box" == t.boxSizing, n = 0; n < x; n++) {
                  var d = w[n],
                      r = t[d],
                      r = parseFloat(r);
                  i[d] = isNaN(r) ? 0 : r
              }
              var o = i.paddingLeft + i.paddingRight,
                  a = i.paddingTop + i.paddingBottom,
                  e = i.marginLeft + i.marginRight,
                  u = i.marginTop + i.marginBottom,
                  h = i.borderLeftWidth + i.borderRightWidth,
                  p = i.borderTopWidth + i.borderBottomWidth,
                  m = s && b,
                  l = g(t.width),
                  l = (!1 !== l && (i.width = l + (m ? 0 : o + h)), g(t.height));
              return !1 !== l && (i.height = l + (m ? 0 : a + p)), i.innerWidth = i.width - (o + h), i.innerHeight = i.height - (a + p), i.outerWidth = i.width + e, i.outerHeight = i.height + u, i
          }
          for (var f = {
                  width: 0,
                  height: 0,
                  innerWidth: 0,
                  innerHeight: 0,
                  outerWidth: 0,
                  outerHeight: 0
              }, c = 0; c < x; c++) f[w[c]] = 0;
          return f
      }
      var a, o, s
  }
  var b, t = "undefined" == typeof console ? function() {} : function(e) {
          console.error(e)
      },
      w = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
      x = w.length,
      T = !1;
  return y
}),
function(e, t) {
  "use strict";
  "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", t) : "object" == typeof module && module.exports ? module.exports = t() : e.matchesSelector = t()
}(window, function() {
  "use strict";
  var i = function() {
      var e = window.Element.prototype;
      if (e.matches) return "matches";
      if (e.matchesSelector) return "matchesSelector";
      for (var t = ["webkit", "moz", "ms", "o"], i = 0; i < t.length; i++) {
          var s = t[i] + "MatchesSelector";
          if (e[s]) return s
      }
  }();
  return function(e, t) {
      return e[i](t)
  }
}),
function(t, i) {
  "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function(e) {
      return i(t, e)
  }) : "object" == typeof module && module.exports ? module.exports = i(t, require("desandro-matches-selector")) : t.fizzyUIUtils = i(t, t.matchesSelector)
}(window, function(i, r) {
  var l = {
          extend: function(e, t) {
              for (var i in t) e[i] = t[i];
              return e
          },
          modulo: function(e, t) {
              return (e % t + t) % t
          }
      },
      t = Array.prototype.slice,
      c = (l.makeArray = function(e) {
          return Array.isArray(e) ? e : null == e ? [] : "object" == typeof e && "number" == typeof e.length ? t.call(e) : [e]
      }, l.removeFrom = function(e, t) {
          t = e.indexOf(t); - 1 != t && e.splice(t, 1)
      }, l.getParent = function(e, t) {
          for (; e.parentNode && e != document.body;)
              if (e = e.parentNode, r(e, t)) return e
      }, l.getQueryElement = function(e) {
          return "string" == typeof e ? document.querySelector(e) : e
      }, l.handleEvent = function(e) {
          var t = "on" + e.type;
          this[t] && this[t](e)
      }, l.filterFindElements = function(e, s) {
          e = l.makeArray(e);
          var n = [];
          return e.forEach(function(e) {
              if (e instanceof HTMLElement)
                  if (s) {
                      r(e, s) && n.push(e);
                      for (var t = e.querySelectorAll(s), i = 0; i < t.length; i++) n.push(t[i])
                  } else n.push(e)
          }), n
      }, l.debounceMethod = function(e, t, s) {
          s = s || 100;
          var n = e.prototype[t],
              r = t + "Timeout";
          e.prototype[t] = function() {
              var e = this[r],
                  t = (clearTimeout(e), arguments),
                  i = this;
              this[r] = setTimeout(function() {
                  n.apply(i, t), delete i[r]
              }, s)
          }
      }, l.docReady = function(e) {
          var t = document.readyState;
          "complete" == t || "interactive" == t ? setTimeout(e) : document.addEventListener("DOMContentLoaded", e)
      }, l.toDashed = function(e) {
          return e.replace(/(.)([A-Z])/g, function(e, t, i) {
              return t + "-" + i
          }).toLowerCase()
      }, i.console);
  return l.htmlInit = function(o, a) {
      l.docReady(function() {
          var e = l.toDashed(a),
              s = "data-" + e,
              t = document.querySelectorAll("[" + s + "]"),
              e = document.querySelectorAll(".js-" + e),
              t = l.makeArray(t).concat(l.makeArray(e)),
              n = s + "-options",
              r = i.jQuery;
          t.forEach(function(t) {
              var e, i = t.getAttribute(s) || t.getAttribute(n);
              try {
                  e = i && JSON.parse(i)
              } catch (e) {
                  return void(c && c.error("Error parsing " + s + " on " + t.className + ": " + e))
              }
              i = new o(t, e);
              r && r.data(t, a, i)
          })
      })
  }, l
}),
function(e, t) {
  "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], t) : "object" == typeof module && module.exports ? module.exports = t(require("ev-emitter"), require("get-size")) : (e.Outlayer = {}, e.Outlayer.Item = t(e.EvEmitter, e.getSize))
}(window, function(e, t) {
  "use strict";

  function i(e, t) {
      e && (this.element = e, this.layout = t, this.position = {
          x: 0,
          y: 0
      }, this._create())
  }
  var s = document.documentElement.style,
      n = "string" == typeof s.transition ? "transition" : "WebkitTransition",
      s = "string" == typeof s.transform ? "transform" : "WebkitTransform",
      r = {
          WebkitTransition: "webkitTransitionEnd",
          transition: "transitionend"
      } [n],
      o = {
          transform: s,
          transition: n,
          transitionDuration: n + "Duration",
          transitionProperty: n + "Property",
          transitionDelay: n + "Delay"
      },
      e = i.prototype = Object.create(e.prototype),
      a = (e.constructor = i, e._create = function() {
          this._transn = {
              ingProperties: {},
              clean: {},
              onEnd: {}
          }, this.css({
              position: "absolute"
          })
      }, e.handleEvent = function(e) {
          var t = "on" + e.type;
          this[t] && this[t](e)
      }, e.getSize = function() {
          this.size = t(this.element)
      }, e.css = function(e) {
          var t, i = this.element.style;
          for (t in e) i[o[t] || t] = e[t]
      }, e.getPosition = function() {
          var e = getComputedStyle(this.element),
              t = this.layout._getOption("originLeft"),
              i = this.layout._getOption("originTop"),
              s = e[t ? "left" : "right"],
              e = e[i ? "top" : "bottom"],
              n = parseFloat(s),
              r = parseFloat(e),
              o = this.layout.size; - 1 != s.indexOf("%") && (n = n / 100 * o.width), -1 != e.indexOf("%") && (r = r / 100 * o.height), n = isNaN(n) ? 0 : n, r = isNaN(r) ? 0 : r, n -= t ? o.paddingLeft : o.paddingRight, r -= i ? o.paddingTop : o.paddingBottom, this.position.x = n, this.position.y = r
      }, e.layoutPosition = function() {
          var e = this.layout.size,
              t = {},
              i = this.layout._getOption("originLeft"),
              s = this.layout._getOption("originTop"),
              n = i ? "right" : "left",
              r = this.position.x + e[i ? "paddingLeft" : "paddingRight"],
              i = (t[i ? "left" : "right"] = this.getXValue(r), t[n] = "", s ? "paddingTop" : "paddingBottom"),
              r = s ? "bottom" : "top",
              n = this.position.y + e[i];
          t[s ? "top" : "bottom"] = this.getYValue(n), t[r] = "", this.css(t), this.emitEvent("layout", [this])
      }, e.getXValue = function(e) {
          var t = this.layout._getOption("horizontal");
          return this.layout.options.percentPosition && !t ? e / this.layout.size.width * 100 + "%" : e + "px"
      }, e.getYValue = function(e) {
          var t = this.layout._getOption("horizontal");
          return this.layout.options.percentPosition && t ? e / this.layout.size.height * 100 + "%" : e + "px"
      }, e._transitionTo = function(e, t) {
          this.getPosition();
          var i = this.position.x,
              s = this.position.y,
              n = e == this.position.x && t == this.position.y;
          this.setPosition(e, t), !n || this.isTransitioning ? ((n = {}).transform = this.getTranslate(e - i, t - s), this.transition({
              to: n,
              onTransitionEnd: {
                  transform: this.layoutPosition
              },
              isCleaning: !0
          })) : this.layoutPosition()
      }, e.getTranslate = function(e, t) {
          return "translate3d(" + (e = this.layout._getOption("originLeft") ? e : -e) + "px, " + (t = this.layout._getOption("originTop") ? t : -t) + "px, 0)"
      }, e.goTo = function(e, t) {
          this.setPosition(e, t), this.layoutPosition()
      }, e.moveTo = e._transitionTo, e.setPosition = function(e, t) {
          this.position.x = parseFloat(e), this.position.y = parseFloat(t)
      }, e._nonTransition = function(e) {
          for (var t in this.css(e.to), e.isCleaning && this._removeStyles(e.to), e.onTransitionEnd) e.onTransitionEnd[t].call(this)
      }, e.transition = function(e) {
          if (parseFloat(this.layout.options.transitionDuration)) {
              var t, i = this._transn;
              for (t in e.onTransitionEnd) i.onEnd[t] = e.onTransitionEnd[t];
              for (t in e.to) i.ingProperties[t] = !0, e.isCleaning && (i.clean[t] = !0);
              e.from && (this.css(e.from), this.element.offsetHeight, 0), this.enableTransition(e.to), this.css(e.to), this.isTransitioning = !0
          } else this._nonTransition(e)
      }, "opacity," + s.replace(/([A-Z])/g, function(e) {
          return "-" + e.toLowerCase()
      })),
      l = (e.enableTransition = function() {
          var e;
          this.isTransitioning || (e = "number" == typeof(e = this.layout.options.transitionDuration) ? e + "ms" : e, this.css({
              transitionProperty: a,
              transitionDuration: e,
              transitionDelay: this.staggerDelay || 0
          }), this.element.addEventListener(r, this, !1))
      }, e.onwebkitTransitionEnd = function(e) {
          this.ontransitionend(e)
      }, e.onotransitionend = function(e) {
          this.ontransitionend(e)
      }, {
          "-webkit-transform": "transform"
      }),
      c = (e.ontransitionend = function(e) {
          var t, i;
          e.target === this.element && (t = this._transn, i = l[e.propertyName] || e.propertyName, delete t.ingProperties[i], function(e) {
              for (var t in e) return;
              return 1
          }(t.ingProperties) && this.disableTransition(), i in t.clean && (this.element.style[e.propertyName] = "", delete t.clean[i]), i in t.onEnd && (t.onEnd[i].call(this), delete t.onEnd[i]), this.emitEvent("transitionEnd", [this]))
      }, e.disableTransition = function() {
          this.removeTransitionStyles(), this.element.removeEventListener(r, this, !1), this.isTransitioning = !1
      }, e._removeStyles = function(e) {
          var t, i = {};
          for (t in e) i[t] = "";
          this.css(i)
      }, {
          transitionProperty: "",
          transitionDuration: "",
          transitionDelay: ""
      });
  return e.removeTransitionStyles = function() {
      this.css(c)
  }, e.stagger = function(e) {
      e = isNaN(e) ? 0 : e, this.staggerDelay = e + "ms"
  }, e.removeElem = function() {
      this.element.parentNode.removeChild(this.element), this.css({
          display: ""
      }), this.emitEvent("remove", [this])
  }, e.remove = function() {
      return n && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function() {
          this.removeElem()
      }), void this.hide()) : void this.removeElem()
  }, e.reveal = function() {
      delete this.isHidden, this.css({
          display: ""
      });
      var e = this.layout.options,
          t = {};
      t[this.getHideRevealTransitionEndProperty("visibleStyle")] = this.onRevealTransitionEnd, this.transition({
          from: e.hiddenStyle,
          to: e.visibleStyle,
          isCleaning: !0,
          onTransitionEnd: t
      })
  }, e.onRevealTransitionEnd = function() {
      this.isHidden || this.emitEvent("reveal")
  }, e.getHideRevealTransitionEndProperty = function(e) {
      var t, e = this.layout.options[e];
      if (e.opacity) return "opacity";
      for (t in e) return t
  }, e.hide = function() {
      this.isHidden = !0, this.css({
          display: ""
      });
      var e = this.layout.options,
          t = {};
      t[this.getHideRevealTransitionEndProperty("hiddenStyle")] = this.onHideTransitionEnd, this.transition({
          from: e.visibleStyle,
          to: e.hiddenStyle,
          isCleaning: !0,
          onTransitionEnd: t
      })
  }, e.onHideTransitionEnd = function() {
      this.isHidden && (this.css({
          display: "none"
      }), this.emitEvent("hide"))
  }, e.destroy = function() {
      this.css({
          position: "",
          left: "",
          right: "",
          top: "",
          bottom: "",
          transition: "",
          transform: ""
      })
  }, i
}),
function(n, r) {
  "use strict";
  "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(e, t, i, s) {
      return r(n, e, t, i, s)
  }) : "object" == typeof module && module.exports ? module.exports = r(n, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : n.Outlayer = r(n, n.EvEmitter, n.getSize, n.fizzyUIUtils, n.Outlayer.Item)
}(window, function(e, d, n, s, r) {
  "use strict";

  function o(e, t) {
      var i = s.getQueryElement(e);
      i ? (this.element = i, l && (this.$element = l(this.element)), this.options = s.extend({}, this.constructor.defaults), this.option(t), t = ++h, this.element.outlayerGUID = t, (c[t] = this)._create(), this._getOption("initLayout") && this.layout()) : u && u.error("Bad element for " + this.constructor.namespace + ": " + (i || e))
  }

  function a(e) {
      function t() {
          e.apply(this, arguments)
      }
      return (t.prototype = Object.create(e.prototype)).constructor = t
  }

  function t() {}
  var u = e.console,
      l = e.jQuery,
      h = 0,
      c = {},
      i = (o.namespace = "outlayer", o.Item = r, o.defaults = {
          containerStyle: {
              position: "relative"
          },
          initLayout: !0,
          originLeft: !0,
          originTop: !0,
          resize: !0,
          resizeContainer: !0,
          transitionDuration: "0.4s",
          hiddenStyle: {
              opacity: 0,
              transform: "scale(0.001)"
          },
          visibleStyle: {
              opacity: 1,
              transform: "scale(1)"
          }
      }, o.prototype),
      p = (s.extend(i, d.prototype), i.option = function(e) {
          s.extend(this.options, e)
      }, i._getOption = function(e) {
          var t = this.constructor.compatOptions[e];
          return t && void 0 !== this.options[t] ? this.options[t] : this.options[e]
      }, o.compatOptions = {
          initLayout: "isInitLayout",
          horizontal: "isHorizontal",
          layoutInstant: "isLayoutInstant",
          originLeft: "isOriginLeft",
          originTop: "isOriginTop",
          resize: "isResizeBound",
          resizeContainer: "isResizingContainer"
      }, i._create = function() {
          this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), s.extend(this.element.style, this.options.containerStyle), this._getOption("resize") && this.bindResize()
      }, i.reloadItems = function() {
          this.items = this._itemize(this.element.children)
      }, i._itemize = function(e) {
          for (var t = this._filterFindItemElements(e), i = this.constructor.Item, s = [], n = 0; n < t.length; n++) {
              var r = new i(t[n], this);
              s.push(r)
          }
          return s
      }, i._filterFindItemElements = function(e) {
          return s.filterFindElements(e, this.options.itemSelector)
      }, i.getItemElements = function() {
          return this.items.map(function(e) {
              return e.element
          })
      }, i.layout = function() {
          this._resetLayout(), this._manageStamps();
          var e = this._getOption("layoutInstant"),
              e = void 0 !== e ? e : !this._isLayoutInited;
          this.layoutItems(this.items, e), this._isLayoutInited = !0
      }, i._init = i.layout, i._resetLayout = function() {
          this.getSize()
      }, i.getSize = function() {
          this.size = n(this.element)
      }, i._getMeasurement = function(e, t) {
          var i, s = this.options[e];
          s ? ("string" == typeof s ? i = this.element.querySelector(s) : s instanceof HTMLElement && (i = s), this[e] = i ? n(i)[t] : s) : this[e] = 0
      }, i.layoutItems = function(e, t) {
          e = this._getItemsForLayout(e), this._layoutItems(e, t), this._postLayout()
      }, i._getItemsForLayout = function(e) {
          return e.filter(function(e) {
              return !e.isIgnored
          })
      }, i._layoutItems = function(e, i) {
          var s;
          this._emitCompleteOnItems("layout", e), e && e.length && (s = [], e.forEach(function(e) {
              var t = this._getItemLayoutPosition(e);
              t.item = e, t.isInstant = i || e.isLayoutInstant, s.push(t)
          }, this), this._processLayoutQueue(s))
      }, i._getItemLayoutPosition = function() {
          return {
              x: 0,
              y: 0
          }
      }, i._processLayoutQueue = function(e) {
          this.updateStagger(), e.forEach(function(e, t) {
              this._positionItem(e.item, e.x, e.y, e.isInstant, t)
          }, this)
      }, i.updateStagger = function() {
          var e = this.options.stagger;
          return null == e ? void(this.stagger = 0) : (this.stagger = function(e) {
              if ("number" == typeof e) return e;
              var t = (e = e.match(/(^\d*\.?\d*)(\w*)/)) && e[1],
                  e = e && e[2];
              return t.length ? parseFloat(t) * (p[e] || 1) : 0
          }(e), this.stagger)
      }, i._positionItem = function(e, t, i, s, n) {
          s ? e.goTo(t, i) : (e.stagger(n * this.stagger), e.moveTo(t, i))
      }, i._postLayout = function() {
          this.resizeContainer()
      }, i.resizeContainer = function() {
          var e;
          !this._getOption("resizeContainer") || (e = this._getContainerSize()) && (this._setContainerMeasure(e.width, !0), this._setContainerMeasure(e.height, !1))
      }, i._getContainerSize = t, i._setContainerMeasure = function(e, t) {
          var i;
          void 0 !== e && ((i = this.size).isBorderBox && (e += t ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), e = Math.max(e, 0), this.element.style[t ? "width" : "height"] = e + "px")
      }, i._emitCompleteOnItems = function(t, e) {
          function i() {
              r.dispatchEvent(t + "Complete", null, [e])
          }

          function s() {
              ++n == o && i()
          }
          var n, r = this,
              o = e.length;
          e && o ? (n = 0, e.forEach(function(e) {
              e.once(t, s)
          })) : i()
      }, i.dispatchEvent = function(e, t, i) {
          var s = t ? [t].concat(i) : i;
          this.emitEvent(e, s), l && (this.$element = this.$element || l(this.element), t ? ((s = l.Event(t)).type = e, this.$element.trigger(s, i)) : this.$element.trigger(e, i))
      }, i.ignore = function(e) {
          e = this.getItem(e);
          e && (e.isIgnored = !0)
      }, i.unignore = function(e) {
          e = this.getItem(e);
          e && delete e.isIgnored
      }, i.stamp = function(e) {
          (e = this._find(e)) && (this.stamps = this.stamps.concat(e), e.forEach(this.ignore, this))
      }, i.unstamp = function(e) {
          (e = this._find(e)) && e.forEach(function(e) {
              s.removeFrom(this.stamps, e), this.unignore(e)
          }, this)
      }, i._find = function(e) {
          if (e) return "string" == typeof e && (e = this.element.querySelectorAll(e)), s.makeArray(e)
      }, i._manageStamps = function() {
          this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this))
      }, i._getBoundingRect = function() {
          var e = this.element.getBoundingClientRect(),
              t = this.size;
          this._boundingRect = {
              left: e.left + t.paddingLeft + t.borderLeftWidth,
              top: e.top + t.paddingTop + t.borderTopWidth,
              right: e.right - (t.paddingRight + t.borderRightWidth),
              bottom: e.bottom - (t.paddingBottom + t.borderBottomWidth)
          }
      }, i._manageStamp = t, i._getElementOffset = function(e) {
          var t = e.getBoundingClientRect(),
              i = this._boundingRect,
              e = n(e);
          return {
              left: t.left - i.left - e.marginLeft,
              top: t.top - i.top - e.marginTop,
              right: i.right - t.right - e.marginRight,
              bottom: i.bottom - t.bottom - e.marginBottom
          }
      }, i.handleEvent = s.handleEvent, i.bindResize = function() {
          e.addEventListener("resize", this), this.isResizeBound = !0
      }, i.unbindResize = function() {
          e.removeEventListener("resize", this), this.isResizeBound = !1
      }, i.onresize = function() {
          this.resize()
      }, s.debounceMethod(o, "onresize", 100), i.resize = function() {
          this.isResizeBound && this.needsResizeLayout() && this.layout()
      }, i.needsResizeLayout = function() {
          var e = n(this.element);
          return this.size && e && e.innerWidth !== this.size.innerWidth
      }, i.addItems = function(e) {
          e = this._itemize(e);
          return e.length && (this.items = this.items.concat(e)), e
      }, i.appended = function(e) {
          e = this.addItems(e);
          e.length && (this.layoutItems(e, !0), this.reveal(e))
      }, i.prepended = function(e) {
          var t, e = this._itemize(e);
          e.length && (t = this.items.slice(0), this.items = e.concat(t), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(t))
      }, i.reveal = function(e) {
          var i;
          this._emitCompleteOnItems("reveal", e), e && e.length && (i = this.updateStagger(), e.forEach(function(e, t) {
              e.stagger(t * i), e.reveal()
          }))
      }, i.hide = function(e) {
          var i;
          this._emitCompleteOnItems("hide", e), e && e.length && (i = this.updateStagger(), e.forEach(function(e, t) {
              e.stagger(t * i), e.hide()
          }))
      }, i.revealItemElements = function(e) {
          e = this.getItems(e);
          this.reveal(e)
      }, i.hideItemElements = function(e) {
          e = this.getItems(e);
          this.hide(e)
      }, i.getItem = function(e) {
          for (var t = 0; t < this.items.length; t++) {
              var i = this.items[t];
              if (i.element == e) return i
          }
      }, i.getItems = function(e) {
          e = s.makeArray(e);
          var t = [];
          return e.forEach(function(e) {
              e = this.getItem(e);
              e && t.push(e)
          }, this), t
      }, i.remove = function(e) {
          e = this.getItems(e);
          this._emitCompleteOnItems("remove", e), e && e.length && e.forEach(function(e) {
              e.remove(), s.removeFrom(this.items, e)
          }, this)
      }, i.destroy = function() {
          var e = this.element.style,
              e = (e.height = "", e.position = "", e.width = "", this.items.forEach(function(e) {
                  e.destroy()
              }), this.unbindResize(), this.element.outlayerGUID);
          delete c[e], delete this.element.outlayerGUID, l && l.removeData(this.element, this.constructor.namespace)
      }, o.data = function(e) {
          e = (e = s.getQueryElement(e)) && e.outlayerGUID;
          return e && c[e]
      }, o.create = function(e, t) {
          var i = a(o);
          return i.defaults = s.extend({}, o.defaults), s.extend(i.defaults, t), i.compatOptions = s.extend({}, o.compatOptions), i.namespace = e, i.data = o.data, i.Item = a(r), s.htmlInit(i, e), l && l.bridget && l.bridget(e, i), i
      }, {
          ms: 1,
          s: 1e3
      });
  return o.Item = r, o
}),
function(e, t) {
  "function" == typeof define && define.amd ? define("isotope-layout/js/item", ["outlayer/outlayer"], t) : "object" == typeof module && module.exports ? module.exports = t(require("outlayer")) : (e.Isotope = e.Isotope || {}, e.Isotope.Item = t(e.Outlayer))
}(window, function(e) {
  "use strict";

  function t() {
      e.Item.apply(this, arguments)
  }
  var i = t.prototype = Object.create(e.Item.prototype),
      s = i._create,
      n = (i._create = function() {
          this.id = this.layout.itemGUID++, s.call(this), this.sortData = {}
      }, i.updateSortData = function() {
          if (!this.isIgnored) {
              this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
              var e, t = this.layout.options.getSortData,
                  i = this.layout._sorters;
              for (e in t) {
                  var s = i[e];
                  this.sortData[e] = s(this.element, this)
              }
          }
      }, i.destroy);
  return i.destroy = function() {
      n.apply(this, arguments), this.css({
          display: ""
      })
  }, t
}),
function(e, t) {
  "function" == typeof define && define.amd ? define("isotope-layout/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], t) : "object" == typeof module && module.exports ? module.exports = t(require("get-size"), require("outlayer")) : (e.Isotope = e.Isotope || {}, e.Isotope.LayoutMode = t(e.getSize, e.Outlayer))
}(window, function(t, i) {
  "use strict";

  function s(e) {
      (this.isotope = e) && (this.options = e.options[this.namespace], this.element = e.element, this.items = e.filteredItems, this.size = e.size)
  }
  var n = s.prototype;
  return ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"].forEach(function(e) {
      n[e] = function() {
          return i.prototype[e].apply(this.isotope, arguments)
      }
  }), n.needsVerticalResizeLayout = function() {
      var e = t(this.isotope.element);
      return this.isotope.size && e && e.innerHeight != this.isotope.size.innerHeight
  }, n._getMeasurement = function() {
      this.isotope._getMeasurement.apply(this, arguments)
  }, n.getColumnWidth = function() {
      this.getSegmentSize("column", "Width")
  }, n.getRowHeight = function() {
      this.getSegmentSize("row", "Height")
  }, n.getSegmentSize = function(e, t) {
      var i, e = e + t,
          s = "outer" + t;
      this._getMeasurement(e, s), this[e] || (i = this.getFirstItemSize(), this[e] = i && i[s] || this.isotope.size["inner" + t])
  }, n.getFirstItemSize = function() {
      var e = this.isotope.filteredItems[0];
      return e && e.element && t(e.element)
  }, n.layout = function() {
      this.isotope.layout.apply(this.isotope, arguments)
  }, n.getSize = function() {
      this.isotope.getSize(), this.size = this.isotope.size
  }, s.modes = {}, s.create = function(e, t) {
      function i() {
          s.apply(this, arguments)
      }
      return (i.prototype = Object.create(n)).constructor = i, t && (i.options = t), s.modes[i.prototype.namespace = e] = i
  }, s
}),
function(e, t) {
  "function" == typeof define && define.amd ? define("masonry-layout/masonry", ["outlayer/outlayer", "get-size/get-size"], t) : "object" == typeof module && module.exports ? module.exports = t(require("outlayer"), require("get-size")) : e.Masonry = t(e.Outlayer, e.getSize)
}(window, function(e, a) {
  var e = e.create("masonry"),
      t = (e.compatOptions.fitWidth = "isFitWidth", e.prototype);
  return t._resetLayout = function() {
      this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];
      for (var e = 0; e < this.cols; e++) this.colYs.push(0);
      this.maxY = 0, this.horizontalColIndex = 0
  }, t.measureColumns = function() {
      this.getContainerWidth(), this.columnWidth || (e = (e = this.items[0]) && e.element, this.columnWidth = e && a(e).outerWidth || this.containerWidth);
      var e = this.columnWidth += this.gutter,
          t = this.containerWidth + this.gutter,
          i = t / e,
          t = e - t % e,
          i = Math[t && t < 1 ? "round" : "floor"](i);
      this.cols = Math.max(i, 1)
  }, t.getContainerWidth = function() {
      var e = this._getOption("fitWidth") ? this.element.parentNode : this.element,
          e = a(e);
      this.containerWidth = e && e.innerWidth
  }, t._getItemLayoutPosition = function(e) {
      e.getSize();
      for (var t = e.size.outerWidth % this.columnWidth, t = Math[t && t < 1 ? "round" : "ceil"](e.size.outerWidth / this.columnWidth), t = Math.min(t, this.cols), i = this[this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition"](t, e), s = {
              x: this.columnWidth * i.col,
              y: i.y
          }, n = i.y + e.size.outerHeight, r = t + i.col, o = i.col; o < r; o++) this.colYs[o] = n;
      return s
  }, t._getTopColPosition = function(e) {
      var e = this._getTopColGroup(e),
          t = Math.min.apply(Math, e);
      return {
          col: e.indexOf(t),
          y: t
      }
  }, t._getTopColGroup = function(e) {
      if (e < 2) return this.colYs;
      for (var t = [], i = this.cols + 1 - e, s = 0; s < i; s++) t[s] = this._getColGroupY(s, e);
      return t
  }, t._getColGroupY = function(e, t) {
      if (t < 2) return this.colYs[e];
      e = this.colYs.slice(e, e + t);
      return Math.max.apply(Math, e)
  }, t._getHorizontalColPosition = function(e, t) {
      var i = this.horizontalColIndex % this.cols,
          i = 1 < e && i + e > this.cols ? 0 : i,
          t = t.size.outerWidth && t.size.outerHeight;
      return this.horizontalColIndex = t ? i + e : this.horizontalColIndex, {
          col: i,
          y: this._getColGroupY(i, e)
      }
  }, t._manageStamp = function(e) {
      var t = a(e),
          e = this._getElementOffset(e),
          i = this._getOption("originLeft") ? e.left : e.right,
          s = i + t.outerWidth,
          i = Math.floor(i / this.columnWidth),
          i = Math.max(0, i),
          n = Math.floor(s / this.columnWidth);
      n -= s % this.columnWidth ? 0 : 1;
      for (var n = Math.min(this.cols - 1, n), r = (this._getOption("originTop") ? e.top : e.bottom) + t.outerHeight, o = i; o <= n; o++) this.colYs[o] = Math.max(r, this.colYs[o])
  }, t._getContainerSize = function() {
      this.maxY = Math.max.apply(Math, this.colYs);
      var e = {
          height: this.maxY
      };
      return this._getOption("fitWidth") && (e.width = this._getContainerFitWidth()), e
  }, t._getContainerFitWidth = function() {
      for (var e = 0, t = this.cols; --t && 0 === this.colYs[t];) e++;
      return (this.cols - e) * this.columnWidth - this.gutter
  }, t.needsResizeLayout = function() {
      var e = this.containerWidth;
      return this.getContainerWidth(), e != this.containerWidth
  }, e
}),
function(e, t) {
  "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/masonry", ["../layout-mode", "masonry-layout/masonry"], t) : "object" == typeof module && module.exports ? module.exports = t(require("../layout-mode"), require("masonry-layout")) : t(e.Isotope.LayoutMode, e.Masonry)
}(window, function(e, t) {
  "use strict";
  var i, e = e.create("masonry"),
      s = e.prototype,
      n = {
          _getElementOffset: !0,
          layout: !0,
          _getMeasurement: !0
      };
  for (i in t.prototype) n[i] || (s[i] = t.prototype[i]);
  var r = s.measureColumns,
      o = (s.measureColumns = function() {
          this.items = this.isotope.filteredItems, r.call(this)
      }, s._getOption);
  return s._getOption = function(e) {
      return "fitWidth" == e ? void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth : o.apply(this.isotope, arguments)
  }, e
}),
function(e, t) {
  "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/fit-rows", ["../layout-mode"], t) : "object" == typeof exports ? module.exports = t(require("../layout-mode")) : t(e.Isotope.LayoutMode)
}(window, function(e) {
  "use strict";
  var e = e.create("fitRows"),
      t = e.prototype;
  return t._resetLayout = function() {
      this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth")
  }, t._getItemLayoutPosition = function(e) {
      e.getSize();
      var t = e.size.outerWidth + this.gutter,
          i = this.isotope.size.innerWidth + this.gutter,
          i = (0 !== this.x && t + this.x > i && (this.x = 0, this.y = this.maxY), {
              x: this.x,
              y: this.y
          });
      return this.maxY = Math.max(this.maxY, this.y + e.size.outerHeight), this.x += t, i
  }, t._getContainerSize = function() {
      return {
          height: this.maxY
      }
  }, e
}),
function(e, t) {
  "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/vertical", ["../layout-mode"], t) : "object" == typeof module && module.exports ? module.exports = t(require("../layout-mode")) : t(e.Isotope.LayoutMode)
}(window, function(e) {
  "use strict";
  var e = e.create("vertical", {
          horizontalAlignment: 0
      }),
      t = e.prototype;
  return t._resetLayout = function() {
      this.y = 0
  }, t._getItemLayoutPosition = function(e) {
      e.getSize();
      var t = (this.isotope.size.innerWidth - e.size.outerWidth) * this.options.horizontalAlignment,
          i = this.y;
      return this.y += e.size.outerHeight, {
          x: t,
          y: i
      }
  }, t._getContainerSize = function() {
      return {
          height: this.y
      }
  }, e
}),
function(o, a) {
  "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "desandro-matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope-layout/js/item", "isotope-layout/js/layout-mode", "isotope-layout/js/layout-modes/masonry", "isotope-layout/js/layout-modes/fit-rows", "isotope-layout/js/layout-modes/vertical"], function(e, t, i, s, n, r) {
      return a(o, e, 0, i, s, n, r)
  }) : "object" == typeof module && module.exports ? module.exports = a(o, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("isotope-layout/js/item"), require("isotope-layout/js/layout-mode"), require("isotope-layout/js/layout-modes/masonry"), require("isotope-layout/js/layout-modes/fit-rows"), require("isotope-layout/js/layout-modes/vertical")) : o.Isotope = a(o, o.Outlayer, o.getSize, o.matchesSelector, o.fizzyUIUtils, o.Isotope.Item, o.Isotope.LayoutMode)
}(window, function(e, i, d, s, r, t, n) {
  var o = e.jQuery,
      a = String.prototype.trim ? function(e) {
          return e.trim()
      } : function(e) {
          return e.replace(/^\s+|\s+$/g, "")
      },
      l = i.create("isotope", {
          layoutMode: "masonry",
          isJQueryFiltering: !0,
          sortAscending: !0
      }),
      e = (l.Item = t, l.LayoutMode = n, l.prototype),
      c = (e._create = function() {
          for (var e in this.itemGUID = 0, this._sorters = {}, this._getSorters(), i.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"], n.modes) this._initLayoutMode(e)
      }, e.reloadItems = function() {
          this.itemGUID = 0, i.prototype.reloadItems.call(this)
      }, e._itemize = function() {
          for (var e = i.prototype._itemize.apply(this, arguments), t = 0; t < e.length; t++) e[t].id = this.itemGUID++;
          return this._updateItemsSortData(e), e
      }, e._initLayoutMode = function(e) {
          var t = n.modes[e],
              i = this.options[e] || {};
          this.options[e] = t.options ? r.extend(t.options, i) : i, this.modes[e] = new t(this)
      }, e.layout = function() {
          return !this._isLayoutInited && this._getOption("initLayout") ? void this.arrange() : void this._layout()
      }, e._layout = function() {
          var e = this._getIsInstant();
          this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, e), this._isLayoutInited = !0
      }, e.arrange = function(e) {
          this.option(e), this._getIsInstant();
          e = this._filter(this.items);
          this.filteredItems = e.matches, this._bindArrangeComplete(), this._isInstant ? this._noTransition(this._hideReveal, [e]) : this._hideReveal(e), this._sort(), this._layout()
      }, e._init = e.arrange, e._hideReveal = function(e) {
          this.reveal(e.needReveal), this.hide(e.needHide)
      }, e._getIsInstant = function() {
          var e = this._getOption("layoutInstant"),
              e = void 0 !== e ? e : !this._isLayoutInited;
          return this._isInstant = e
      }, e._bindArrangeComplete = function() {
          function e() {
              t && i && s && n.dispatchEvent("arrangeComplete", null, [n.filteredItems])
          }
          var t, i, s, n = this;
          this.once("layoutComplete", function() {
              t = !0, e()
          }), this.once("hideComplete", function() {
              i = !0, e()
          }), this.once("revealComplete", function() {
              s = !0, e()
          })
      }, e._filter = function(e) {
          for (var t = this.options.filter, i = [], s = [], n = [], r = this._getFilterTest(t || "*"), o = 0; o < e.length; o++) {
              var a, l = e[o];
              l.isIgnored || ((a = r(l)) && i.push(l), a && l.isHidden ? s.push(l) : a || l.isHidden || n.push(l))
          }
          return {
              matches: i,
              needReveal: s,
              needHide: n
          }
      }, e._getFilterTest = function(t) {
          return o && this.options.isJQueryFiltering ? function(e) {
              return o(e.element).is(t)
          } : "function" == typeof t ? function(e) {
              return t(e.element)
          } : function(e) {
              return s(e.element, t)
          }
      }, e.updateSortData = function(e) {
          e = e ? (e = r.makeArray(e), this.getItems(e)) : this.items;
          this._getSorters(), this._updateItemsSortData(e)
      }, e._getSorters = function() {
          var e, t = this.options.getSortData;
          for (e in t) {
              var i = t[e];
              this._sorters[e] = c(i)
          }
      }, e._updateItemsSortData = function(e) {
          for (var t = e && e.length, i = 0; t && i < t; i++) e[i].updateSortData()
      }, function(e) {
          if ("string" != typeof e) return e;
          var t, i, s = (e = a(e).split(" "))[0],
              n = (n = s.match(/^\[(.+)\]$/)) && n[1],
              r = (i = s, (t = n) ? function(e) {
                  return e.getAttribute(t)
              } : function(e) {
                  e = e.querySelector(i);
                  return e && e.textContent
              }),
              o = l.sortDataParsers[e[1]];
          return o ? function(e) {
              return e && o(r(e))
          } : function(e) {
              return e && r(e)
          }
      }),
      u = (l.sortDataParsers = {
          parseInt: function(e) {
              return parseInt(e, 10)
          },
          parseFloat: function(e) {
              return parseFloat(e)
          }
      }, e._sort = function() {
          var e, o, a;
          this.options.sortBy && (e = r.makeArray(this.options.sortBy), this._getIsSameSortBy(e) || (this.sortHistory = e.concat(this.sortHistory)), o = this.sortHistory, a = this.options.sortAscending, this.filteredItems.sort(function(e, t) {
              for (var i = 0; i < o.length; i++) {
                  var s = o[i],
                      n = e.sortData[s],
                      r = t.sortData[s];
                  if (r < n || n < r) return (r < n ? 1 : -1) * ((void 0 !== a[s] ? a[s] : a) ? 1 : -1)
              }
              return 0
          }))
      }, e._getIsSameSortBy = function(e) {
          for (var t = 0; t < e.length; t++)
              if (e[t] != this.sortHistory[t]) return !1;
          return !0
      }, e._mode = function() {
          var e = this.options.layoutMode,
              t = this.modes[e];
          if (!t) throw new Error("No layout mode: " + e);
          return t.options = this.options[e], t
      }, e._resetLayout = function() {
          i.prototype._resetLayout.call(this), this._mode()._resetLayout()
      }, e._getItemLayoutPosition = function(e) {
          return this._mode()._getItemLayoutPosition(e)
      }, e._manageStamp = function(e) {
          this._mode()._manageStamp(e)
      }, e._getContainerSize = function() {
          return this._mode()._getContainerSize()
      }, e.needsResizeLayout = function() {
          return this._mode().needsResizeLayout()
      }, e.appended = function(e) {
          var e = this.addItems(e);
          e.length && (e = this._filterRevealAdded(e), this.filteredItems = this.filteredItems.concat(e))
      }, e.prepended = function(e) {
          var t, e = this._itemize(e);
          e.length && (this._resetLayout(), this._manageStamps(), t = this._filterRevealAdded(e), this.layoutItems(this.filteredItems), this.filteredItems = t.concat(this.filteredItems), this.items = e.concat(this.items))
      }, e._filterRevealAdded = function(e) {
          e = this._filter(e);
          return this.hide(e.needHide), this.reveal(e.matches), this.layoutItems(e.matches, !0), e.matches
      }, e.insert = function(e) {
          var t = this.addItems(e);
          if (t.length) {
              for (var i, s = t.length, n = 0; n < s; n++) i = t[n], this.element.appendChild(i.element);
              e = this._filter(t).matches;
              for (n = 0; n < s; n++) t[n].isLayoutInstant = !0;
              for (this.arrange(), n = 0; n < s; n++) delete t[n].isLayoutInstant;
              this.reveal(e)
          }
      }, e.remove);
  return e.remove = function(e) {
      e = r.makeArray(e);
      var t = this.getItems(e);
      u.call(this, e);
      for (var i = t && t.length, s = 0; i && s < i; s++) {
          var n = t[s];
          r.removeFrom(this.filteredItems, n)
      }
  }, e.shuffle = function() {
      for (var e = 0; e < this.items.length; e++) this.items[e].sortData.random = Math.random();
      this.options.sortBy = "random", this._sort(), this._layout()
  }, e._noTransition = function(e, t) {
      var i = this.options.transitionDuration,
          e = (this.options.transitionDuration = 0, e.apply(this, t));
      return this.options.transitionDuration = i, e
  }, e.getFilteredItemElements = function() {
      return this.filteredItems.map(function(e) {
          return e.element
      })
  }, l
});
class DoubleCenterException {
  constructor() {
      window.console.error('iTooltip Error: positionX and positionY properties cannot be "center" at the same time.')
  }
}
class iTooltip {
  constructor(e = "*") {
      this.objects = document.querySelectorAll("*" !== e ? e : "*[title]")
  }
  init(e = {}) {
      if (this.settings = Object.assign({
              className: "tooltip",
              indentX: 10,
              indentY: 15,
              positionX: "right",
              positionY: "bottom"
          }, e), "center" === this.settings.positionX && "center" === this.settings.positionY) throw new DoubleCenterException;
      this.objects.forEach(e => {
          e.getAttribute("title") && (e.addEventListener("mouseenter", e => this.createTooltip(e)), e.addEventListener("mouseleave", e => this.removeTooltip(e)))
      })
  }
  createTooltip(e) {
      const t = e.target;
      this.tooltip = document.createElement("div"), this.tooltip.classList.add(this.settings.className), this.tooltip.innerHTML = t.getAttribute("title");
      var i = e.target.className.split(" ").find(e => e.startsWith("itooltip-"));
      i && this.tooltip.classList.add(i), this.tooltip.style.position = "absolute", this.changePosition(e), t.removeAttribute("title"), document.body.appendChild(this.tooltip), t.addEventListener("mousemove", e => this.changePosition(e))
  }
  removeTooltip(e) {
      e.target.setAttribute("title", this.tooltip.innerHTML), this.tooltip.remove()
  }
  changePosition(e) {
      var [t, i] = this.getSizeTooltip(), s = this.getEdges(e), n = window.pageYOffset || document.documentElement.scrollTop;
      let r = e.pageY,
          o = void e.pageX;
      if (o = "right" === this.settings.positionX ? s.right <= t ? e.clientX - t - this.settings.indentX : e.clientX + this.settings.indentX : "left" === this.settings.positionX ? s.left <= t ? s.left + this.settings.indentX : e.clientX - t - this.settings.indentX : s.left <= Math.round(t / 2) ? e.clientX - s.left : e.clientX - Math.round(t / 2), "top" === this.settings.positionY) r = s.top <= i ? n + e.clientY + this.settings.indentY : e.pageY - i - this.settings.indentY;
      else if ("bottom" === this.settings.positionY) r = s.bottom < i && s.top > i + this.settings.indentY ? e.pageY - i - this.settings.indentY : n + e.clientY + this.settings.indentY;
      else {
          let e = Math.round(i / 2);
          s.bottom <= e && (e = Math.round(i - s.bottom)), s.top <= e && (e = s.top), r -= e
      }
      this.tooltip.style.top = r + "px", this.tooltip.style.left = o + "px"
  }
  getSizeTooltip() {
      var e = this.tooltip.getBoundingClientRect();
      return [e.right - e.left, e.bottom - e.top]
  }
  getEdges(e) {
      var t = document.documentElement;
      return {
          left: e.clientX,
          right: t.clientWidth - e.clientX,
          top: e.clientY,
          bottom: t.clientHeight - e.clientY
      }
  }
}! function() {
  "use strict";

  function t(e) {
      if (!e) throw new Error("No options passed to Waypoint constructor");
      if (!e.element) throw new Error("No element option passed to Waypoint constructor");
      if (!e.handler) throw new Error("No handler option passed to Waypoint constructor");
      this.key = "waypoint-" + i, this.options = t.Adapter.extend({}, t.defaults, e), this.element = this.options.element, this.adapter = new t.Adapter(this.element), this.callback = e.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = t.Group.findOrCreate({
          name: this.options.group,
          axis: this.axis
      }), this.context = t.Context.findOrCreateByElement(this.options.context), t.offsetAliases[this.options.offset] && (this.options.offset = t.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), r[this.key] = this, i += 1
  }
  var i = 0,
      r = {};
  t.prototype.queueTrigger = function(e) {
      this.group.queueTrigger(this, e)
  }, t.prototype.trigger = function(e) {
      this.enabled && this.callback && this.callback.apply(this, e)
  }, t.prototype.destroy = function() {
      this.context.remove(this), this.group.remove(this), delete r[this.key]
  }, t.prototype.disable = function() {
      return this.enabled = !1, this
  }, t.prototype.enable = function() {
      return this.context.refresh(), this.enabled = !0, this
  }, t.prototype.next = function() {
      return this.group.next(this)
  }, t.prototype.previous = function() {
      return this.group.previous(this)
  }, t.invokeAll = function(e) {
      var t, i = [];
      for (t in r) i.push(r[t]);
      for (var s = 0, n = i.length; s < n; s++) i[s][e]()
  }, t.destroyAll = function() {
      t.invokeAll("destroy")
  }, t.disableAll = function() {
      t.invokeAll("disable")
  }, t.enableAll = function() {
      for (var e in t.Context.refreshAll(), r) r[e].enabled = !0;
      return this
  }, t.refreshAll = function() {
      t.Context.refreshAll()
  }, t.viewportHeight = function() {
      return window.innerHeight || document.documentElement.clientHeight
  }, t.viewportWidth = function() {
      return document.documentElement.clientWidth
  }, t.adapters = [], t.defaults = {
      context: window,
      continuous: !0,
      enabled: !0,
      group: "default",
      horizontal: !1,
      offset: 0
  }, t.offsetAliases = {
      "bottom-in-view": function() {
          return this.context.innerHeight() - this.adapter.outerHeight()
      },
      "right-in-view": function() {
          return this.context.innerWidth() - this.adapter.outerWidth()
      }
  }, window.Waypoint = t
}(),
function() {
  "use strict";

  function t(e) {
      window.setTimeout(e, 1e3 / 60)
  }

  function i(e) {
      this.element = e, this.Adapter = p.Adapter, this.adapter = new this.Adapter(e), this.key = "waypoint-context-" + s, this.didScroll = !1, this.didResize = !1, this.oldScroll = {
          x: this.adapter.scrollLeft(),
          y: this.adapter.scrollTop()
      }, this.waypoints = {
          vertical: {},
          horizontal: {}
      }, e.waypointContextKey = this.key, n[e.waypointContextKey] = this, s += 1, p.windowContext || (p.windowContext = !0, p.windowContext = new i(window)), this.createThrottledScrollHandler(), this.createThrottledResizeHandler()
  }
  var s = 0,
      n = {},
      p = window.Waypoint,
      e = window.onload;
  i.prototype.add = function(e) {
      var t = e.options.horizontal ? "horizontal" : "vertical";
      this.waypoints[t][e.key] = e, this.refresh()
  }, i.prototype.checkEmpty = function() {
      var e = this.Adapter.isEmptyObject(this.waypoints.horizontal),
          t = this.Adapter.isEmptyObject(this.waypoints.vertical),
          i = this.element == this.element.window;
      e && t && !i && (this.adapter.off(".waypoints"), delete n[this.key])
  }, i.prototype.createThrottledResizeHandler = function() {
      function e() {
          t.handleResize(), t.didResize = !1
      }
      var t = this;
      this.adapter.on("resize.waypoints", function() {
          t.didResize || (t.didResize = !0, p.requestAnimationFrame(e))
      })
  }, i.prototype.createThrottledScrollHandler = function() {
      function e() {
          t.handleScroll(), t.didScroll = !1
      }
      var t = this;
      this.adapter.on("scroll.waypoints", function() {
          t.didScroll && !p.isTouch || (t.didScroll = !0, p.requestAnimationFrame(e))
      })
  }, i.prototype.handleResize = function() {
      p.Context.refreshAll()
  }, i.prototype.handleScroll = function() {
      var e, t, i = {},
          s = {
              horizontal: {
                  newScroll: this.adapter.scrollLeft(),
                  oldScroll: this.oldScroll.x,
                  forward: "right",
                  backward: "left"
              },
              vertical: {
                  newScroll: this.adapter.scrollTop(),
                  oldScroll: this.oldScroll.y,
                  forward: "down",
                  backward: "up"
              }
          };
      for (e in s) {
          var n, r = s[e],
              o = r.newScroll > r.oldScroll ? r.forward : r.backward;
          for (n in this.waypoints[e]) {
              var a, l, c = this.waypoints[e][n];
              null !== c.triggerPoint && (a = r.oldScroll < c.triggerPoint, l = r.newScroll >= c.triggerPoint, (a && l || !a && !l) && (c.queueTrigger(o), i[c.group.id] = c.group))
          }
      }
      for (t in i) i[t].flushTriggers();
      this.oldScroll = {
          x: s.horizontal.newScroll,
          y: s.vertical.newScroll
      }
  }, i.prototype.innerHeight = function() {
      return this.element == this.element.window ? p.viewportHeight() : this.adapter.innerHeight()
  }, i.prototype.remove = function(e) {
      delete this.waypoints[e.axis][e.key], this.checkEmpty()
  }, i.prototype.innerWidth = function() {
      return this.element == this.element.window ? p.viewportWidth() : this.adapter.innerWidth()
  }, i.prototype.destroy = function() {
      var e, t = [];
      for (e in this.waypoints)
          for (var i in this.waypoints[e]) t.push(this.waypoints[e][i]);
      for (var s = 0, n = t.length; s < n; s++) t[s].destroy()
  }, i.prototype.refresh = function() {
      var e, t, i = this.element == this.element.window,
          d = i ? void 0 : this.adapter.offset(),
          s = {};
      for (t in this.handleScroll(), e = {
              horizontal: {
                  contextOffset: i ? 0 : d.left,
                  contextScroll: i ? 0 : this.oldScroll.x,
                  contextDimension: this.innerWidth(),
                  oldScroll: this.oldScroll.x,
                  forward: "right",
                  backward: "left",
                  offsetProp: "left"
              },
              vertical: {
                  contextOffset: i ? 0 : d.top,
                  contextScroll: i ? 0 : this.oldScroll.y,
                  contextDimension: this.innerHeight(),
                  oldScroll: this.oldScroll.y,
                  forward: "down",
                  backward: "up",
                  offsetProp: "top"
              }
          }) {
          var u, n = e[t];
          for (u in this.waypoints[t]) {
              var r, o = this.waypoints[t][u],
                  a = o.options.offset,
                  h = o.triggerPoint,
                  l = 0,
                  c = null == h;
              o.element !== o.element.window && (l = o.adapter.offset()[n.offsetProp]), "function" == typeof a ? a = a.apply(o) : "string" == typeof a && (a = parseFloat(a), -1 < o.options.offset.indexOf("%") && (a = Math.ceil(n.contextDimension * a / 100))), r = n.contextScroll - n.contextOffset, o.triggerPoint = Math.floor(l + r - a), l = h < n.oldScroll, r = o.triggerPoint >= n.oldScroll, a = !l && !r, !c && (l && r) ? (o.queueTrigger(n.backward), s[o.group.id] = o.group) : (!c && a || c && n.oldScroll >= o.triggerPoint) && (o.queueTrigger(n.forward), s[o.group.id] = o.group)
          }
      }
      return p.requestAnimationFrame(function() {
          for (var e in s) s[e].flushTriggers()
      }), this
  }, i.findOrCreateByElement = function(e) {
      return i.findByElement(e) || new i(e)
  }, i.refreshAll = function() {
      for (var e in n) n[e].refresh()
  }, i.findByElement = function(e) {
      return n[e.waypointContextKey]
  }, window.onload = function() {
      e && e(), i.refreshAll()
  }, p.requestAnimationFrame = function(e) {
      (window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || t).call(window, e)
  }, p.Context = i
}(),
function() {
  "use strict";

  function r(e, t) {
      return e.triggerPoint - t.triggerPoint
  }

  function o(e, t) {
      return t.triggerPoint - e.triggerPoint
  }

  function t(e) {
      this.name = e.name, this.axis = e.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this.clearTriggerQueues(), i[this.axis][this.name] = this
  }
  var i = {
          vertical: {},
          horizontal: {}
      },
      s = window.Waypoint;
  t.prototype.add = function(e) {
      this.waypoints.push(e)
  }, t.prototype.clearTriggerQueues = function() {
      this.triggerQueues = {
          up: [],
          down: [],
          left: [],
          right: []
      }
  }, t.prototype.flushTriggers = function() {
      for (var e in this.triggerQueues) {
          var t = this.triggerQueues[e];
          t.sort("up" === e || "left" === e ? o : r);
          for (var i = 0, s = t.length; i < s; i += 1) {
              var n = t[i];
              !n.options.continuous && i !== t.length - 1 || n.trigger([e])
          }
      }
      this.clearTriggerQueues()
  }, t.prototype.next = function(e) {
      this.waypoints.sort(r);
      e = s.Adapter.inArray(e, this.waypoints);
      return e === this.waypoints.length - 1 ? null : this.waypoints[e + 1]
  }, t.prototype.previous = function(e) {
      this.waypoints.sort(r);
      e = s.Adapter.inArray(e, this.waypoints);
      return e ? this.waypoints[e - 1] : null
  }, t.prototype.queueTrigger = function(e, t) {
      this.triggerQueues[t].push(e)
  }, t.prototype.remove = function(e) {
      e = s.Adapter.inArray(e, this.waypoints); - 1 < e && this.waypoints.splice(e, 1)
  }, t.prototype.first = function() {
      return this.waypoints[0]
  }, t.prototype.last = function() {
      return this.waypoints[this.waypoints.length - 1]
  }, t.findOrCreate = function(e) {
      return i[e.axis][e.name] || new t(e)
  }, s.Group = t
}(),
function() {
  "use strict";

  function i(e) {
      return e === e.window
  }

  function s(e) {
      return i(e) ? e : e.defaultView
  }

  function e(e) {
      this.element = e, this.handlers = {}
  }
  var t = window.Waypoint;
  e.prototype.innerHeight = function() {
      return i(this.element) ? this.element.innerHeight : this.element.clientHeight
  }, e.prototype.innerWidth = function() {
      return i(this.element) ? this.element.innerWidth : this.element.clientWidth
  }, e.prototype.off = function(e, t) {
      function i(e, t, i) {
          for (var s = 0, n = t.length - 1; s < n; s++) {
              var r = t[s];
              i && i !== r || e.removeEventListener(r)
          }
      }
      var e = e.split("."),
          s = e[0],
          n = e[1],
          r = this.element;
      if (n && this.handlers[n] && s) i(r, this.handlers[n][s], t), this.handlers[n][s] = [];
      else if (s)
          for (var o in this.handlers) i(r, this.handlers[o][s] || [], t), this.handlers[o][s] = [];
      else if (n && this.handlers[n]) {
          for (var a in this.handlers[n]) i(r, this.handlers[n][a], t);
          this.handlers[n] = {}
      }
  }, e.prototype.offset = function() {
      if (!this.element.ownerDocument) return null;
      var e = this.element.ownerDocument.documentElement,
          t = s(this.element.ownerDocument),
          i = {
              top: 0,
              left: 0
          };
      return {
          top: (i = this.element.getBoundingClientRect ? this.element.getBoundingClientRect() : i).top + t.pageYOffset - e.clientTop,
          left: i.left + t.pageXOffset - e.clientLeft
      }
  }, e.prototype.on = function(e, t) {
      var e = e.split("."),
          i = e[0],
          e = e[1] || "__default",
          e = this.handlers[e] = this.handlers[e] || {};
      (e[i] = e[i] || []).push(t), this.element.addEventListener(i, t)
  }, e.prototype.outerHeight = function(e) {
      var t = this.innerHeight();
      return e && !i(this.element) && (e = window.getComputedStyle(this.element), t = (t += parseInt(e.marginTop, 10)) + parseInt(e.marginBottom, 10)), t
  }, e.prototype.outerWidth = function(e) {
      var t = this.innerWidth();
      return e && !i(this.element) && (e = window.getComputedStyle(this.element), t = (t += parseInt(e.marginLeft, 10)) + parseInt(e.marginRight, 10)), t
  }, e.prototype.scrollLeft = function() {
      var e = s(this.element);
      return e ? e.pageXOffset : this.element.scrollLeft
  }, e.prototype.scrollTop = function() {
      var e = s(this.element);
      return e ? e.pageYOffset : this.element.scrollTop
  }, e.extend = function() {
      for (var e = Array.prototype.slice.call(arguments), t = 1, i = e.length; t < i; t++) {
          s = void 0;
          n = void 0;
          r = void 0;
          var s = e[0];
          var n = e[t];
          if ("object" == typeof s && "object" == typeof n)
              for (var r in n) n.hasOwnProperty(r) && (s[r] = n[r])
      }
      return e[0]
  }, e.inArray = function(e, t, i) {
      return null == t ? -1 : t.indexOf(e, i)
  }, e.isEmptyObject = function(e) {
      for (var t in e) return !1;
      return !0
  }, t.adapters.push({
      name: "noframework",
      Adapter: e
  }), t.Adapter = e
}(),
function(e) {
  var t, n, i, s, r = navigator.userAgent;

  function o() {
      clearTimeout(t), t = setTimeout(i, 99)
  }

  function a() {
      o(), s && s.addListener && s.addListener(o)
  }
  e.HTMLPictureElement && /ecko/.test(r) && r.match(/rv\:(\d+)/) && RegExp.$1 < 45 && addEventListener("resize", (n = document.createElement("source"), i = function() {
      for (var e = document.querySelectorAll("picture > img, img[srcset][sizes]"), t = 0; t < e.length; t++) ! function(e) {
          var t, i, s = e.parentNode;
          "PICTURE" === s.nodeName.toUpperCase() ? (t = n.cloneNode(), s.insertBefore(t, s.firstElementChild), setTimeout(function() {
              s.removeChild(t)
          })) : (!e._pfLastSize || e.offsetWidth > e._pfLastSize) && (e._pfLastSize = e.offsetWidth, i = e.sizes, e.sizes += ",100vw", setTimeout(function() {
              e.sizes = i
          }))
      }(e[t])
  }, s = e.matchMedia && matchMedia("(orientation: landscape)"), n.srcset = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", /^[c|i]|d$/.test(document.readyState || "") ? a() : document.addEventListener("DOMContentLoaded", a), o))
}(window),
function(e, r) {
  "use strict";

  function m(e) {
      return " " === e || "\t" === e || "\n" === e || "\f" === e || "\r" === e
  }

  function x(e, t) {
      return e.res - t.res
  }

  function T(e, t) {
      var i, s, n;
      if (e && t)
          for (n = w.parseSet(t), e = w.makeUrl(e), i = 0; i < n.length; i++)
              if (e === w.makeUrl(n[i].url)) {
                  s = n[i];
                  break
              } return s
  }

  function c(t, d) {
      function e(e) {
          var e = e.exec(t.substring(o));
          return e ? (e = e[0], o += e.length, e) : void 0
      }

      function i() {
          for (var e, t, i, s, n, r, o, a = !1, l = {}, c = 0; c < h.length; c++) s = (n = h[c])[n.length - 1], n = n.substring(0, n.length - 1), r = parseInt(n, 10), o = parseFloat(n), se.test(n) && "w" === s ? ((e || t) && (a = !0), 0 === r ? a = !0 : e = r) : ne.test(n) && "x" === s ? ((e || t || i) && (a = !0), o < 0 ? a = !0 : t = o) : se.test(n) && "h" === s ? ((i || t) && (a = !0), 0 === r ? a = !0 : i = r) : a = !0;
          a || (l.url = u, e && (l.w = e), t && (l.d = t), i && (l.h = i), i || t || e || (l.d = 1), 1 === l.d && (d.has1x = !0), l.set = d, p.push(l))
      }
      for (var u, h, s, n, r, a = t.length, o = 0, p = [];;) {
          if (e(ee), a <= o) return p;
          u = e(te), h = [], "," === u.slice(-1) ? (u = u.replace(ie, ""), i()) : function() {
              for (e(J), s = "", n = "in descriptor";;) {
                  if (r = t.charAt(o), "in descriptor" === n)
                      if (m(r)) s && (h.push(s), s = "", n = "after descriptor");
                      else {
                          if ("," === r) return o += 1, s && h.push(s), i();
                          if ("(" === r) s += r, n = "in parens";
                          else {
                              if ("" === r) return s && h.push(s), i();
                              s += r
                          }
                      }
                  else if ("in parens" === n)
                      if (")" === r) s += r, n = "in descriptor";
                      else {
                          if ("" === r) return h.push(s), i();
                          s += r
                      }
                  else if ("after descriptor" === n && !m(r)) {
                      if ("" === r) return i();
                      n = "in descriptor", --o
                  }
                  o += 1
              }
          }()
      }
  }

  function d(e) {
      for (var t, i, s, n = /^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i, r = /^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i, o = function(e) {
              function t() {
                  n && (r.push(n), n = "")
              }

              function i() {
                  r[0] && (o.push(r), r = [])
              }
              for (var s, n = "", r = [], o = [], a = 0, l = 0, c = !1;;) {
                  if ("" === (s = e.charAt(l))) return t(), i(), o;
                  if (c) "*" !== s || "/" !== e[l + 1] ? l += 1 : (c = !1, l += 2, t());
                  else {
                      if (m(s)) {
                          if (e.charAt(l - 1) && m(e.charAt(l - 1)) || !n) {
                              l += 1;
                              continue
                          }
                          if (0 === a) {
                              t(), l += 1;
                              continue
                          }
                          s = " "
                      } else if ("(" === s) a += 1;
                      else if (")" === s) --a;
                      else {
                          if ("," === s) {
                              t(), i(), l += 1;
                              continue
                          }
                          if ("/" === s && "*" === e.charAt(l + 1)) {
                              c = !0, l += 2;
                              continue
                          }
                      }
                      n += s, l += 1
                  }
              }
          }(e), a = o.length, l = 0; l < a; l++)
          if (i = (t = o[l])[t.length - 1], s = i, n.test(s) && 0 <= parseFloat(s) || (r.test(s) || ("0" === s || "-0" === s || "+0" === s))) {
              if (s = i, t.pop(), 0 === t.length) return s;
              if (t = t.join(" "), w.matchesMedia(t)) return s
          } return "100vw"
  }
  r.createElement("picture");

  function u() {}

  function h(e, t, i, s) {
      e.addEventListener ? e.addEventListener(t, i, s || !1) : e.attachEvent && e.attachEvent("on" + t, i)
  }

  function p(t) {
      var i = {};
      return function(e) {
          return e in i || (i[e] = t(e)), i[e]
      }
  }

  function E(e, t) {
      return e.w ? (e.cWidth = w.calcListLength(t || "100vw"), e.res = e.w / e.cWidth) : e.res = e.d, e
  }
  var f, g, v, y, b, _, S, C, k, A, M, P, O, t, I, L, w = {},
      $ = !1,
      i = r.createElement("img"),
      z = i.getAttribute,
      N = i.setAttribute,
      D = i.removeAttribute,
      n = r.documentElement,
      s = {},
      j = {
          algorithm: ""
      },
      F = "data-pfsrc",
      H = F + "set",
      o = navigator.userAgent,
      q = /rident/.test(o) || /ecko/.test(o) && o.match(/rv\:(\d+)/) && 35 < RegExp.$1,
      B = "currentSrc",
      R = /\s+\+?\d+(e\d+)?w/,
      W = /(\([^)]+\))?\s*(.+)/,
      Y = e.picturefillCFG,
      X = "font-size:100%!important;",
      V = !0,
      G = {},
      U = {},
      Q = e.devicePixelRatio,
      a = {
          px: 1,
          in: 96
      },
      K = r.createElement("a"),
      Z = !1,
      J = /^[ \t\n\r\u000c]+/,
      ee = /^[, \t\n\r\u000c]+/,
      te = /^[^ \t\n\r\u000c]+/,
      ie = /[,]+$/,
      se = /^\d+$/,
      ne = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,
      re = (y = /^([\d\.]+)(em|vw|px)$/, b = p(function(e) {
          return "return " + function() {
              for (var e = arguments, t = 0, i = e[0]; ++t in e;) i = i.replace(e[t], e[++t]);
              return i
          }((e || "").toLowerCase(), /\band\b/g, "&&", /,/g, "||", /min-([a-z-\s]+):/g, "e.$1>=", /max-([a-z-\s]+):/g, "e.$1<=", /calc([^)]+)/g, "($1)", /(\d+[\.]*[\d]*)([a-z]+)/g, "($1 * e.$2)", /^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi, "") + ";"
      }), function(e, t) {
          var i;
          if (!(e in G))
              if (G[e] = !1, t && (i = e.match(y))) G[e] = i[1] * a[i[2]];
              else try {
                  G[e] = new Function("e", b(e))(a)
              } catch (e) {}
          return G[e]
      }),
      l = function(e) {
          if ($) {
              var t, i, s, n = e || {};
              if (n.elements && 1 === n.elements.nodeType && ("IMG" === n.elements.nodeName.toUpperCase() ? n.elements = [n.elements] : (n.context = n.elements, n.elements = null)), s = (t = n.elements || w.qsa(n.context || r, n.reevaluate || n.reselect ? w.sel : w.selShort)).length) {
                  for (w.setupRun(n), Z = !0, i = 0; i < s; i++) w.fillImg(t[i], n);
                  w.teardownRun(n)
              }
          }
      };

  function oe() {
      var e = r.readyState || "";
      P = setTimeout(oe, "loading" === e ? 200 : 999), r.body && (w.fillImgs(), (_ = _ || M.test(e)) && clearTimeout(P))
  }

  function ae() {
      var e = new Date - A;
      e < C ? k = setTimeout(ae, C - e) : (k = null, S())
  }

  function le() {
      2 === t.width && (w.supSizes = !0), g = w.supSrcset && !w.supSizes, $ = !0, setTimeout(l)
  }
  e.console && console.warn, B in i || (B = "src"), s["image/jpeg"] = !0, s["image/gif"] = !0, s["image/png"] = !0, s["image/svg+xml"] = r.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1"), w.ns = ("pf" + (new Date).getTime()).substr(0, 9), w.supSrcset = "srcset" in i, w.supSizes = "sizes" in i, w.supPicture = !!e.HTMLPictureElement, w.supSrcset && w.supPicture && !w.supSizes && (o = r.createElement("img"), i.srcset = "data:,a", o.src = "data:,a", w.supSrcset = i.complete === o.complete, w.supPicture = w.supSrcset && w.supPicture), w.supSrcset && !w.supSizes ? (i = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", (t = r.createElement("img")).onload = le, t.onerror = le, t.setAttribute("sizes", "9px"), t.srcset = i + " 1w,data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw== 9w", t.src = i) : $ = !0, w.selShort = "picture>img,img[srcset]", w.sel = w.selShort, w.cfg = j, w.DPR = Q || 1, w.u = a, w.types = s, w.setSize = u, w.makeUrl = p(function(e) {
      return K.href = e, K.href
  }), w.qsa = function(e, t) {
      return "querySelector" in e ? e.querySelectorAll(t) : []
  }, w.matchesMedia = function() {
      return e.matchMedia && (matchMedia("(min-width: 0.1em)") || {}).matches ? w.matchesMedia = function(e) {
          return !e || matchMedia(e).matches
      } : w.matchesMedia = w.mMQ, w.matchesMedia.apply(this, arguments)
  }, w.mMQ = function(e) {
      return !e || re(e)
  }, w.calcLength = function(e) {
      e = re(e, !0) || !1;
      return e = e < 0 ? !1 : e
  }, w.supportsType = function(e) {
      return !e || s[e]
  }, w.parseSize = p(function(e) {
      e = (e || "").match(W);
      return {
          media: e && e[1],
          length: e && e[2]
      }
  }), w.parseSet = function(e) {
      return e.cands || (e.cands = c(e.srcset, e)), e.cands
  }, w.getEmValue = function() {
      var e, t, i, s;
      return !f && (e = r.body) && (t = r.createElement("div"), i = n.style.cssText, s = e.style.cssText, t.style.cssText = "position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)", n.style.cssText = X, e.style.cssText = X, e.appendChild(t), f = t.offsetWidth, e.removeChild(t), f = parseFloat(f, 10), n.style.cssText = i, e.style.cssText = s), f || 16
  }, w.calcListLength = function(e) {
      var t;
      return e in U && !j.uT || (t = w.calcLength(d(e)), U[e] = t || a.width), U[e]
  }, w.setRes = function(e) {
      if (e)
          for (var t, i = 0, s = (t = w.parseSet(e)).length; i < s; i++) E(t[i], e.sizes);
      return t
  }, w.setRes.res = E, w.applySetCandidate = function(e, t) {
      if (e.length) {
          var i, s, d, u, n, h, p = t[w.ns],
              m = w.DPR,
              f = p.curSrc || t[B],
              r = p.curCan || (l = t, r = f, c = e[0].set, (c = T(r, c = !c && r ? (c = l[w.ns].sets) && c[c.length - 1] : c)) && (r = w.makeUrl(r), l[w.ns].curSrc = r, (l[w.ns].curCan = c).res || E(c, c.set.sizes)), c);
          if (r && r.set === e[0].set && ((h = q && !t.complete && r.res - .1 > m) || (r.cached = !0, r.res >= m && (n = r))), !n)
              for (e.sort(x), n = e[(u = e.length) - 1], s = 0; s < u; s++)
                  if ((i = e[s]).res >= m) {
                      n = e[d = s - 1] && (h || f !== w.makeUrl(i.url)) && (o = e[d].res, g = i.res, a = m, v = e[d].cached, b = y = void 0, v = "saveData" === j.algorithm ? 2.7 < o ? a + 1 : (b = (g - a) * (y = Math.pow(o - .6, 1.5)), v && (b += .1 * y), o + b) : 1 < a ? Math.sqrt(o * g) : o, a < v) ? e[d] : i;
                      break
                  } n && (l = w.makeUrl(n.url), p.curSrc = l, p.curCan = n, l !== f && w.setSrc(t, n), w.setSize(t))
      }
      var o, g, a, v, y, b, l, r, c
  }, w.setSrc = function(e, t) {
      e.src = t.url, "image/svg+xml" === t.set.type && (t = e.style.width, e.style.width = e.offsetWidth + 1 + "px", e.offsetWidth + 1 && (e.style.width = t))
  }, w.getSet = function(e) {
      for (var t, i, s = !1, n = e[w.ns].sets, r = 0; r < n.length && !s; r++)
          if ((t = n[r]).srcset && w.matchesMedia(t.media) && (i = w.supportsType(t.type))) {
              s = t = "pending" === i ? i : t;
              break
          } return s
  }, w.parseSets = function(e, t, i) {
      var s, n, r, o, d = t && "PICTURE" === t.nodeName.toUpperCase(),
          a = e[w.ns];
      if (void 0 !== a.src && !i.src || (a.src = z.call(e, "src"), a.src ? N.call(e, F, a.src) : D.call(e, F)), void 0 !== a.srcset && !i.srcset && w.supSrcset && !e.srcset || (s = z.call(e, "srcset"), a.srcset = s, o = !0), a.sets = [], d) {
          a.pic = !0;
          for (var u = a.sets, l, h, p = (i = t).getElementsByTagName("source"), c = 0, m = p.length; c < m; c++)(l = p[c])[w.ns] = !0, (h = l.getAttribute("srcset")) && u.push({
              srcset: h,
              media: l.getAttribute("media"),
              type: l.getAttribute("type"),
              sizes: l.getAttribute("sizes")
          })
      }
      a.srcset ? (n = {
          srcset: a.srcset,
          sizes: z.call(e, "sizes")
      }, a.sets.push(n), (r = (g || a.src) && R.test(a.srcset || "")) || !a.src || T(a.src, n) || n.has1x || (n.srcset += ", " + a.src, n.cands.push({
          url: a.src,
          d: 1,
          set: n
      }))) : a.src && a.sets.push({
          srcset: a.src,
          sizes: null
      }), a.curCan = null, a.curSrc = void 0, a.supported = !(d || n && !w.supSrcset || r && !w.supSizes), o && w.supSrcset && !a.supported && (s ? (N.call(e, H, s), e.srcset = "") : D.call(e, H)), a.supported && !a.srcset && (!a.src && e.src || e.src !== w.makeUrl(a.src)) && (null === a.src ? e.removeAttribute("src") : e.src = a.src), a.parsed = !0
  }, w.fillImg = function(e, t) {
      var i, s = t.reselect || t.reevaluate;
      e[w.ns] || (e[w.ns] = {}), i = e[w.ns], !s && i.evaled === v || (i.parsed && !t.reevaluate || w.parseSets(e, e.parentNode, t), i.supported ? i.evaled = v : (s = e, t = w.getSet(s), i = !1, "pending" !== t && (i = v, t && (t = w.setRes(t), w.applySetCandidate(t, s))), s[w.ns].evaled = i))
  }, w.setupRun = function() {
      Z && !V && Q === e.devicePixelRatio || (V = !1, Q = e.devicePixelRatio, G = {}, U = {}, w.DPR = Q || 1, a.width = Math.max(e.innerWidth || 0, n.clientWidth), a.height = Math.max(e.innerHeight || 0, n.clientHeight), a.vw = a.width / 100, a.vh = a.height / 100, v = [a.height, a.width, Q].join("-"), a.em = w.getEmValue(), a.rem = a.em)
  }, w.supPicture ? (l = u, w.fillImg = u) : (M = e.attachEvent ? /d$|^c/ : /d$|^c|^i/, P = setTimeout(oe, r.body ? 9 : 99), O = n.clientHeight, h(e, "resize", (S = function() {
      V = Math.max(e.innerWidth || 0, n.clientWidth) !== a.width || n.clientHeight !== O, O = n.clientHeight, V && w.fillImgs()
  }, C = 99, function() {
      A = new Date, k = k || setTimeout(ae, C)
  })), h(r, "readystatechange", oe)), w.picturefill = l, w.fillImgs = l, w.teardownRun = u, l._ = w, e.picturefillCFG = {
      pf: w,
      push: function(e) {
          var t = e.shift();
          "function" == typeof w[t] ? w[t].apply(w, e) : (j[t] = e[0], Z && w.fillImgs({
              reselect: !0
          }))
      }
  };
  for (; Y && Y.length;) e.picturefillCFG.push(Y.shift());
  e.picturefill = l, "object" == typeof module && "object" == typeof module.exports ? module.exports = l : "function" == typeof define && define.amd && define("picturefill", function() {
      return l
  }), w.supPicture || (s["image/webp"] = (I = "image/webp", o = "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==", (L = new e.Image).onerror = function() {
      s[I] = !1, l()
  }, L.onload = function() {
      s[I] = 1 === L.width, l()
  }, L.src = o, "pending"))
}(window, document), "object" == typeof navigator && function(e, t) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("Plyr", t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).Plyr = t()
}(this, function() {
  "use strict";

  function r(e, t, i) {
      return t in e ? Object.defineProperty(e, t, {
          value: i,
          enumerable: !0,
          configurable: !0,
          writable: !0
      }) : e[t] = i, e
  }

  function e(e, t) {
      for (var i = 0; i < t.length; i++) {
          var s = t[i];
          s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
      }
  }

  function t(t, e) {
      var i, s = Object.keys(t);
      return Object.getOwnPropertySymbols && (i = Object.getOwnPropertySymbols(t), e && (i = i.filter(function(e) {
          return Object.getOwnPropertyDescriptor(t, e).enumerable
      })), s.push.apply(s, i)), s
  }

  function n(s) {
      for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2 ? t(Object(n), !0).forEach(function(e) {
              var t, i;
              t = s, i = n[e = e], e in t ? Object.defineProperty(t, e, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              }) : t[e] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(n)) : t(Object(n)).forEach(function(e) {
              Object.defineProperty(s, e, Object.getOwnPropertyDescriptor(n, e))
          })
      }
      return s
  }
  var o = {
      addCSS: !0,
      thumbWidth: 15,
      watch: !0
  };

  function i(e) {
      return null != e ? e.constructor : null
  }

  function l(e) {
      return s(e, Element)
  }

  function c(e) {
      return s(e, Event)
  }

  function d(e) {
      return h(e) || (m(e) || f(e) || E(e)) && !e.length || p(e) && !Object.keys(e).length
  }
  var s = function(e, t) {
          return !!(e && t && e instanceof t)
      },
      h = function(e) {
          return null == e
      },
      p = function(e) {
          return i(e) === Object
      },
      m = function(e) {
          return i(e) === String
      },
      f = function(e) {
          return Array.isArray(e)
      },
      E = function(e) {
          return s(e, NodeList)
      },
      _ = m,
      S = f,
      C = E;
  k = [{
      key: "setup",
      value: function(i) {
          var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
              e = null;
          if (d(i) || _(i) ? e = Array.from(document.querySelectorAll(_(i) ? i : 'input[type="range"]')) : l(i) ? e = [i] : C(i) ? e = Array.from(i) : S(i) && (e = i.filter(l)), d(e)) return null;
          var s = n({}, o, {}, t);
          return _(i) && s.watch && new MutationObserver(function(e) {
              Array.from(e).forEach(function(e) {
                  Array.from(e.addedNodes).forEach(function(e) {
                      var t;
                      l(e) && function() {
                          return Array.from(document.querySelectorAll(t)).includes(this)
                      }.call(e, t = i) && new M(e, s)
                  })
              })
          }).observe(document.body, {
              childList: !0,
              subtree: !0
          }), e.map(function(e) {
              return new M(e, t)
          })
      }
  }, {
      key: "enabled",
      get: function() {
          return "ontouchstart" in document.documentElement
      }
  }], e((Je = M).prototype, [{
      key: "init",
      value: function() {
          M.enabled && (this.config.addCSS && (this.element.style.userSelect = "none", this.element.style.webKitUserSelect = "none", this.element.style.touchAction = "manipulation"), this.listeners(!0), this.element.rangeTouch = this)
      }
  }, {
      key: "destroy",
      value: function() {
          M.enabled && (this.config.addCSS && (this.element.style.userSelect = "", this.element.style.webKitUserSelect = "", this.element.style.touchAction = ""), this.listeners(!1), this.element.rangeTouch = null)
      }
  }, {
      key: "listeners",
      value: function(e) {
          var t = this,
              i = e ? "addEventListener" : "removeEventListener";
          ["touchstart", "touchmove", "touchend"].forEach(function(e) {
              t.element[i](e, function(e) {
                  return t.set(e)
              }, !1)
          })
      }
  }, {
      key: "get",
      value: function(e) {
          if (!M.enabled || !c(e)) return null;
          var t = e.target,
              e = e.changedTouches[0],
              i = parseFloat(t.getAttribute("min")) || 0,
              s = parseFloat(t.getAttribute("max")) || 100,
              n = parseFloat(t.getAttribute("step")) || 1,
              t = t.getBoundingClientRect(),
              r = 100 / t.width * (this.config.thumbWidth / 2) / 100;
          return (e = 100 / t.width * (e.clientX - t.left)) < 0 ? e = 0 : 100 < e && (e = 100), e < 50 ? e -= (100 - 2 * e) * r : 50 < e && (e += 2 * (e - 50) * r), i + (t = e / 100 * (s - i), (r = n) < 1 ? (e = (e = "".concat(r).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/)) ? Math.max(0, (e[1] ? e[1].length : 0) - (e[2] ? +e[2] : 0)) : 0, parseFloat(t.toFixed(e))) : Math.round(t / r) * r)
      }
  }, {
      key: "set",
      value: function(e) {
          var t;
          M.enabled && c(e) && !e.target.disabled && (e.preventDefault(), e.target.value = this.get(e), t = e.target, e = "touchend" === e.type ? "change" : "input", t && e && (e = new Event(e, {
              bubbles: !0
          }), t.dispatchEvent(e)))
      }
  }]), e(Je, k);
  var k, A = M;

  function M(e, t) {
      var i = this;
      if (!(i instanceof M)) throw new TypeError("Cannot call a class as a function");
      l(e) ? this.element = e : _(e) && (this.element = document.querySelector(e)), l(this.element) && d(this.element.rangeTouch) && (this.config = n({}, o, {}, t), this.init())
  }
  const P = e => null != e ? e.constructor : null,
      O = (e, t) => Boolean(e && t && e instanceof t),
      I = e => null == e,
      L = e => P(e) === Object,
      $ = e => P(e) === String,
      z = e => P(e) === Function,
      N = e => Array.isArray(e),
      D = e => O(e, NodeList),
      j = e => I(e) || ($(e) || N(e) || D(e)) && !e.length || L(e) && !Object.keys(e).length;
  var F = I,
      H = L,
      q = e => P(e) === Number && !Number.isNaN(e),
      B = $,
      R = e => P(e) === Boolean,
      W = z,
      Y = N,
      X = D,
      g = e => null !== e && "object" == typeof e && 1 === e.nodeType && "object" == typeof e.style && "object" == typeof e.ownerDocument,
      V = e => O(e, Event),
      G = e => O(e, KeyboardEvent),
      U = e => O(e, TextTrack) || !I(e) && $(e.kind),
      Q = e => {
          if (O(e, window.URL)) return !0;
          if (!$(e)) return !1;
          let t = e;
          e.startsWith("http://") && e.startsWith("https://") || (t = "http://" + e);
          try {
              return !j(new URL(t).hostname)
          } catch (e) {
              return !1
          }
      },
      v = j;
  const K = (() => {
      const t = document.createElement("span"),
          e = {
              WebkitTransition: "webkitTransitionEnd",
              MozTransition: "transitionend",
              OTransition: "oTransitionEnd otransitionend",
              transition: "transitionend"
          },
          i = Object.keys(e).find(e => void 0 !== t.style[e]);
      return !!B(i) && e[i]
  })();

  function Z(e, t) {
      setTimeout(() => {
          try {
              e.hidden = !0, e.offsetHeight, e.hidden = !1
          } catch (e) {}
      }, t)
  }
  const J = {
      isIE: Boolean(window.document.documentMode),
      isEdge: window.navigator.userAgent.includes("Edge"),
      isWebkit: "WebkitAppearance" in document.documentElement.style && !/Edge/.test(navigator.userAgent),
      isIPhone: /(iPhone|iPod)/gi.test(navigator.platform),
      isIos: "MacIntel" === navigator.platform && 1 < navigator.maxTouchPoints || /(iPad|iPhone|iPod)/gi.test(navigator.platform)
  };

  function ee(e, t) {
      return t.split(".").reduce((e, t) => e && e[t], e)
  }

  function te(t = {}, ...e) {
      if (!e.length) return t;
      const i = e.shift();
      return H(i) ? (Object.keys(i).forEach(e => {
          H(i[e]) ? (Object.keys(t).includes(e) || Object.assign(t, {
              [e]: {}
          }), te(t[e], i[e])) : Object.assign(t, {
              [e]: i[e]
          })
      }), te(t, ...e)) : t
  }

  function ie(e, r) {
      e = e.length ? e : [e];
      Array.from(e).reverse().forEach((e, t) => {
          const i = 0 < t ? r.cloneNode(!0) : r,
              s = e.parentNode,
              n = e.nextSibling;
          i.appendChild(e), n ? s.insertBefore(i, n) : s.appendChild(i)
      })
  }

  function se(i, e) {
      g(i) && !v(e) && Object.entries(e).filter(([, e]) => !F(e)).forEach(([e, t]) => i.setAttribute(e, t))
  }

  function y(e, t, i) {
      const s = document.createElement(e);
      return H(t) && se(s, t), B(i) && (s.innerText = i), s
  }

  function ne(e, t, i, s) {
      g(t) && t.appendChild(y(e, i, s))
  }

  function re(e) {
      X(e) || Y(e) ? Array.from(e).forEach(re) : g(e) && g(e.parentNode) && e.parentNode.removeChild(e)
  }

  function oe(t) {
      if (g(t)) {
          let e = t.childNodes["length"];
          for (; 0 < e;) t.removeChild(t.lastChild), --e
      }
  }

  function ae(e, t) {
      return g(t) && g(t.parentNode) && g(e) ? (t.parentNode.replaceChild(e, t), e) : null
  }

  function le(e, t) {
      if (!B(e) || v(e)) return {};
      const o = {},
          a = te({}, t);
      return e.split(",").forEach(e => {
          const t = e.trim(),
              i = t.replace(".", ""),
              s = t.replace(/[[\]]/g, "").split("="),
              [n] = s,
              r = 1 < s.length ? s[1].replace(/["']/g, "") : "";
          switch (t.charAt(0)) {
              case ".":
                  B(a.class) ? o.class = a.class + " " + i : o.class = i;
                  break;
              case "#":
                  o.id = t.replace("#", "");
                  break;
              case "[":
                  o[n] = r
          }
      }), te(a, o)
  }

  function ce(t, i) {
      if (g(t)) {
          let e = i;
          R(e) || (e = !t.hidden), t.hidden = e
      }
  }

  function a(t, i, s) {
      if (X(t)) return Array.from(t).map(e => a(e, i, s));
      if (g(t)) {
          let e = void 0 !== s ? s ? "add" : "remove" : "toggle";
          return t.classList[e](i), t.classList.contains(i)
      }
      return !1
  }

  function de(e, t) {
      return g(e) && e.classList.contains(t)
  }

  function ue(e, t) {
      const i = Element["prototype"];
      return (i.matches || i.webkitMatchesSelector || i.mozMatchesSelector || i.msMatchesSelector || function() {
          return Array.from(document.querySelectorAll(t)).includes(this)
      }).call(e, t)
  }

  function he(e) {
      return this.elements.container.querySelectorAll(e)
  }

  function pe(e) {
      return this.elements.container.querySelector(e)
  }

  function me(e = null, t = !1) {
      g(e) && (e.focus({
          preventScroll: !0
      }), t && a(e, this.config.classNames.tabFocus))
  }
  const fe = {
          "audio/ogg": "vorbis",
          "audio/wav": "1",
          "video/webm": "vp8, vorbis",
          "video/mp4": "avc1.42E01E, mp4a.40.2",
          "video/ogg": "theora"
      },
      ge = {
          audio: "canPlayType" in document.createElement("audio"),
          video: "canPlayType" in document.createElement("video"),
          check(e, t, i) {
              i = J.isIPhone && i && ge.playsinline, t = ge[e] || "html5" !== t;
              return {
                  api: t,
                  ui: t && ge.rangeInput && ("video" !== e || !J.isIPhone || i)
              }
          },
          pip: !(J.isIPhone || !W(y("video").webkitSetPresentationMode) && (!document.pictureInPictureEnabled || y("video").disablePictureInPicture)),
          airplay: W(window.WebKitPlaybackTargetAvailabilityEvent),
          playsinline: "playsInline" in document.createElement("video"),
          mime(e) {
              if (v(e)) return !1;
              var [t] = e.split("/");
              let i = e;
              if (!this.isHTML5 || t !== this.type) return !1;
              Object.keys(fe).includes(i) && (i += `; codecs="${fe[e]}"`);
              try {
                  return Boolean(i && this.media.canPlayType(i).replace(/no/, ""))
              } catch (e) {
                  return !1
              }
          },
          textTracks: "textTracks" in document.createElement("video"),
          rangeInput: (() => {
              const e = document.createElement("input");
              return (e.type = "range") === e.type
          })(),
          touch: "ontouchstart" in document.documentElement,
          transitions: !1 !== K,
          reducedMotion: "matchMedia" in window && window.matchMedia("(prefers-reduced-motion)").matches
      },
      ve = (() => {
          let e = !1;
          try {
              var t = Object.defineProperty({}, "passive", {
                  get: () => (e = !0, null)
              });
              window.addEventListener("test", null, t), window.removeEventListener("test", null, t)
          } catch (e) {}
          return e
      })();

  function ye(i, e, s, n = !1, r = !0, o = !1) {
      if (i && "addEventListener" in i && !v(e) && W(s)) {
          const a = e.split(" ");
          let t = o;
          ve && (t = {
              passive: r,
              capture: o
          }), a.forEach(e => {
              this && this.eventListeners && n && this.eventListeners.push({
                  element: i,
                  type: e,
                  callback: s,
                  options: t
              }), i[n ? "addEventListener" : "removeEventListener"](e, s, t)
          })
      }
  }

  function u(e, t = "", i, s = !0, n = !1) {
      ye.call(this, e, t, i, !0, s, n)
  }

  function be(e, t = "", i, s = !0, n = !1) {
      ye.call(this, e, t, i, !1, s, n)
  }

  function we(t, i = "", s, n = !0, r = !1) {
      const o = (...e) => {
          be(t, i, o, n, r), s.apply(this, e)
      };
      ye.call(this, t, i, o, !0, n, r)
  }

  function b(e, t = "", i = !1, s = {}) {
      g(e) && !v(t) && (t = new CustomEvent(t, {
          bubbles: i,
          detail: {
              ...s,
              plyr: this
          }
      }), e.dispatchEvent(t))
  }

  function xe(e) {
      var t;
      t = e, O(t, Promise) && z(t.then) && e.then(null, () => {})
  }

  function Te(i) {
      return Y(i) ? i.filter((e, t) => i.indexOf(e) === t) : i
  }

  function Ee(e, i) {
      return Y(e) && e.length ? e.reduce((e, t) => Math.abs(t - i) < Math.abs(e - i) ? t : e) : null
  }

  function _e(e) {
      return !(!window || !window.CSS) && window.CSS.supports(e)
  }
  const Se = [
      [1, 1],
      [4, 3],
      [3, 4],
      [5, 4],
      [4, 5],
      [3, 2],
      [2, 3],
      [16, 10],
      [10, 16],
      [16, 9],
      [9, 16],
      [21, 9],
      [9, 21],
      [32, 9],
      [9, 32]
  ].reduce((e, [t, i]) => ({
      ...e,
      [t / i]: [t, i]
  }), {});

  function Ce(e) {
      return (Y(e) || B(e) && e.includes(":")) && (Y(e) ? e : e.split(":")).map(Number).every(q)
  }

  function ke(e) {
      if (!Y(e) || !e.every(q)) return null;
      const [t, i] = e, s = (e, t) => 0 === t ? e : s(t, e % t), n = s(t, i);
      return [t / n, i / n]
  }

  function Ae(e) {
      const t = e => Ce(e) ? e.split(":").map(Number) : null;
      let i = t(e);
      if (null === i && (i = t(this.config.ratio)), null === i && !v(this.embed) && Y(this.embed.ratio) && ({
              ratio: i
          } = this.embed), null === i && this.isHTML5) {
          const {
              videoWidth: e,
              videoHeight: t
          } = this.media;
          i = [e, t]
      }
      return ke(i)
  }

  function Me(e) {
      if (!this.isVideo) return {};
      const t = this.elements["wrapper"],
          i = Ae.call(this, e);
      if (!Y(i)) return {};
      var [e, s] = ke(i), n = 100 / e * s;
      if (_e(`aspect-ratio: ${e}/` + s) ? t.style.aspectRatio = e + "/" + s : t.style.paddingBottom = n + "%", this.isVimeo && !this.config.vimeo.premium && this.supported.ui) {
          const e = 100 / this.media.offsetWidth * parseInt(window.getComputedStyle(this.media).paddingBottom, 10),
              i = (e - n) / (e / 50);
          this.fullscreen.active ? t.style.paddingBottom = null : this.media.style.transform = `translateY(-${i}%)`
      } else this.isHTML5 && t.classList.add(this.config.classNames.videoFixedRatio);
      return {
          padding: n,
          ratio: i
      }
  }

  function Pe(e, t, i = .05) {
      var s = e / t,
          n = Ee(Object.keys(Se), s);
      return Math.abs(n - s) <= i ? Se[n] : [e, t]
  }
  const Oe = {
      getSources() {
          return this.isHTML5 ? Array.from(this.media.querySelectorAll("source")).filter(e => {
              e = e.getAttribute("type");
              return !!v(e) || ge.mime.call(this, e)
          }) : []
      },
      getQualityOptions() {
          return this.config.quality.forced ? this.config.quality.options : Oe.getSources.call(this).map(e => Number(e.getAttribute("size"))).filter(Boolean)
      },
      setup() {
          if (this.isHTML5) {
              const a = this;
              a.options.speed = a.config.speed.options, v(this.config.ratio) || Me.call(a), Object.defineProperty(a.media, "quality", {
                  get() {
                      const e = Oe.getSources.call(a).find(e => e.getAttribute("src") === a.source);
                      return e && Number(e.getAttribute("size"))
                  },
                  set(t) {
                      if (a.quality !== t) {
                          if (a.config.quality.forced && W(a.config.quality.onChange)) a.config.quality.onChange(t);
                          else {
                              const e = Oe.getSources.call(a).find(e => Number(e.getAttribute("size")) === t);
                              if (!e) return;
                              const {
                                  currentTime: i,
                                  paused: s,
                                  preload: n,
                                  readyState: r,
                                  playbackRate: o
                              } = a.media;
                              a.media.src = e.getAttribute("src"), "none" === n && !r || (a.once("loadedmetadata", () => {
                                  a.speed = o, a.currentTime = i, s || xe(a.play())
                              }), a.media.load())
                          }
                          b.call(a, a.media, "qualitychange", !1, {
                              quality: t
                          })
                      }
                  }
              })
          }
      },
      cancelRequests() {
          this.isHTML5 && (re(Oe.getSources.call(this)), this.media.setAttribute("src", this.config.blankVideo), this.media.load(), this.debug.log("Cancelled network requests"))
      }
  };

  function Ie(e, ...i) {
      return v(e) ? e : e.toString().replace(/{(\d+)}/g, (e, t) => i[t].toString())
  }
  const Le = (e = "", t = "", i = "") => e.replace(new RegExp(t.toString().replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1"), "g"), i.toString()),
      $e = (e = "") => e.toString().replace(/\w\S*/g, e => e.charAt(0).toUpperCase() + e.substr(1).toLowerCase());

  function ze(e) {
      const t = document.createElement("div");
      return t.appendChild(e), t.innerHTML
  }
  const Ne = {
          pip: "PIP",
          airplay: "AirPlay",
          html5: "HTML5",
          vimeo: "Vimeo",
          youtube: "YouTube"
      },
      De = {
          get(e = "", t = {}) {
              if (v(e) || v(t)) return "";
              let i = ee(t.i18n, e);
              if (v(i)) return Object.keys(Ne).includes(e) ? Ne[e] : "";
              e = {
                  "{seektime}": t.seekTime,
                  "{title}": t.title
              };
              return Object.entries(e).forEach(([e, t]) => {
                  i = Le(i, e, t)
              }), i
          }
      };
  class je {
      constructor(e) {
          r(this, "get", e => {
              if (!je.supported || !this.enabled) return null;
              var t = window.localStorage.getItem(this.key);
              if (v(t)) return null;
              t = JSON.parse(t);
              return B(e) && e.length ? t[e] : t
          }), r(this, "set", t => {
              if (je.supported && this.enabled && H(t)) {
                  let e = this.get();
                  v(e) && (e = {}), te(e, t), window.localStorage.setItem(this.key, JSON.stringify(e))
              }
          }), this.enabled = e.config.storage.enabled, this.key = e.config.storage.key
      }
      static get supported() {
          try {
              if (!("localStorage" in window)) return !1;
              var e = "___test";
              return window.localStorage.setItem(e, e), window.localStorage.removeItem(e), !0
          } catch (e) {
              return !1
          }
      }
  }

  function Fe(e, s = "text") {
      return new Promise((t, i) => {
          try {
              const i = new XMLHttpRequest;
              if (!("withCredentials" in i)) return;
              i.addEventListener("load", () => {
                  if ("text" === s) try {
                      t(JSON.parse(i.responseText))
                  } catch (e) {
                      t(i.responseText)
                  } else t(i.response)
              }), i.addEventListener("error", () => {
                  throw new Error(i.status)
              }), i.open("GET", e, !0), i.responseType = s, i.send()
          } catch (e) {
              i(e)
          }
      })
  }

  function He(e, t) {
      if (B(e)) {
          const i = B(t);
          const s = () => null !== document.getElementById(t),
              n = (e, t) => {
                  e.innerHTML = t, i && s() || document.body.insertAdjacentElement("afterbegin", e)
              };
          if (!i || !s()) {
              const s = je.supported,
                  r = document.createElement("div");
              if (r.setAttribute("hidden", ""), i && r.setAttribute("id", t), s) {
                  const e = window.localStorage.getItem("cache-" + t);
                  if (null !== e) {
                      const t = JSON.parse(e);
                      n(r, t.content)
                  }
              }
              Fe(e).then(e => {
                  v(e) || (s && window.localStorage.setItem("cache-" + t, JSON.stringify({
                      content: e
                  })), n(r, e))
              }).catch(() => {})
          }
      }
  }
  const qe = e => Math.trunc(e / 60 / 60 % 60, 10);

  function Be(e = 0, t = !1, i = !1) {
      if (!q(e)) return Be(void 0, t, i);
      var s = e => ("0" + e).slice(-2);
      let n = qe(e);
      var r = Math.trunc(e / 60 % 60, 10),
          o = Math.trunc(e % 60, 10);
      return n = t || 0 < n ? n + ":" : "", (i && 0 < e ? "-" : "") + n + s(r) + ":" + s(o)
  }
  const w = {
      getIconUrl() {
          var e = new URL(this.config.iconUrl, window.location).host !== window.location.host || J.isIE && !window.svg4everybody;
          return {
              url: this.config.iconUrl,
              cors: e
          }
      },
      findElements() {
          try {
              return this.elements.controls = pe.call(this, this.config.selectors.controls.wrapper), this.elements.buttons = {
                  play: he.call(this, this.config.selectors.buttons.play),
                  pause: pe.call(this, this.config.selectors.buttons.pause),
                  restart: pe.call(this, this.config.selectors.buttons.restart),
                  rewind: pe.call(this, this.config.selectors.buttons.rewind),
                  fastForward: pe.call(this, this.config.selectors.buttons.fastForward),
                  mute: pe.call(this, this.config.selectors.buttons.mute),
                  pip: pe.call(this, this.config.selectors.buttons.pip),
                  airplay: pe.call(this, this.config.selectors.buttons.airplay),
                  settings: pe.call(this, this.config.selectors.buttons.settings),
                  captions: pe.call(this, this.config.selectors.buttons.captions),
                  fullscreen: pe.call(this, this.config.selectors.buttons.fullscreen)
              }, this.elements.progress = pe.call(this, this.config.selectors.progress), this.elements.inputs = {
                  seek: pe.call(this, this.config.selectors.inputs.seek),
                  volume: pe.call(this, this.config.selectors.inputs.volume)
              }, this.elements.display = {
                  buffer: pe.call(this, this.config.selectors.display.buffer),
                  currentTime: pe.call(this, this.config.selectors.display.currentTime),
                  duration: pe.call(this, this.config.selectors.display.duration)
              }, g(this.elements.progress) && (this.elements.display.seekTooltip = this.elements.progress.querySelector("." + this.config.classNames.tooltip)), !0
          } catch (e) {
              return this.debug.warn("It looks like there is a problem with your custom controls HTML", e), this.toggleNativeControls(!0), !1
          }
      },
      createIcon(e, t) {
          const i = "http://www.w3.org/2000/svg",
              s = w.getIconUrl.call(this),
              n = `${s.cors?"":s.url}#` + this.config.iconPrefix,
              r = document.createElementNS(i, "svg"),
              o = (se(r, te(t, {
                  "aria-hidden": "true",
                  focusable: "false"
              })), document.createElementNS(i, "use")),
              a = n + "-" + e;
          return "href" in o && o.setAttributeNS("http://www.w3.org/1999/xlink", "href", a), o.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a), r.appendChild(o), r
      },
      createLabel(e, t = {}) {
          e = De.get(e, this.config);
          return y("span", {
              ...t,
              class: [t.class, this.config.classNames.hidden].filter(Boolean).join(" ")
          }, e)
      },
      createBadge(e) {
          if (v(e)) return null;
          const t = y("span", {
              class: this.config.classNames.menu.value
          });
          return t.appendChild(y("span", {
              class: this.config.classNames.menu.badge
          }, e)), t
      },
      createButton(e, t) {
          const i = te({}, t);
          let s = function(e = "") {
              let t = e.toString();
              return t = function(e = "") {
                  e = e.toString(), e = Le(e, "-", " ");
                  return e = Le(e, "_", " "), e = $e(e), Le(e, " ", "")
              }(t), t.charAt(0).toLowerCase() + t.slice(1)
          }(e);
          const n = {
              element: "button",
              toggle: !1,
              label: null,
              icon: null,
              labelPressed: null,
              iconPressed: null
          };
          switch (["element", "icon", "label"].forEach(e => {
                  Object.keys(i).includes(e) && (n[e] = i[e], delete i[e])
              }), "button" !== n.element || Object.keys(i).includes("type") || (i.type = "button"), Object.keys(i).includes("class") ? i.class.split(" ").some(e => e === this.config.classNames.control) || te(i, {
                  class: i.class + " " + this.config.classNames.control
              }) : i.class = this.config.classNames.control, e) {
              case "play":
                  n.toggle = !0, n.label = "play", n.labelPressed = "pause", n.icon = "play", n.iconPressed = "pause";
                  break;
              case "mute":
                  n.toggle = !0, n.label = "mute", n.labelPressed = "unmute", n.icon = "volume", n.iconPressed = "muted";
                  break;
              case "captions":
                  n.toggle = !0, n.label = "enableCaptions", n.labelPressed = "disableCaptions", n.icon = "captions-off", n.iconPressed = "captions-on";
                  break;
              case "fullscreen":
                  n.toggle = !0, n.label = "enterFullscreen", n.labelPressed = "exitFullscreen", n.icon = "enter-fullscreen", n.iconPressed = "exit-fullscreen";
                  break;
              case "play-large":
                  i.class += ` ${this.config.classNames.control}--overlaid`, s = "play", n.label = "play", n.icon = "play";
                  break;
              default:
                  v(n.label) && (n.label = s), v(n.icon) && (n.icon = e)
          }
          const r = y(n.element);
          return n.toggle ? (r.appendChild(w.createIcon.call(this, n.iconPressed, {
              class: "icon--pressed"
          })), r.appendChild(w.createIcon.call(this, n.icon, {
              class: "icon--not-pressed"
          })), r.appendChild(w.createLabel.call(this, n.labelPressed, {
              class: "label--pressed"
          })), r.appendChild(w.createLabel.call(this, n.label, {
              class: "label--not-pressed"
          }))) : (r.appendChild(w.createIcon.call(this, n.icon)), r.appendChild(w.createLabel.call(this, n.label))), te(i, le(this.config.selectors.buttons[s], i)), se(r, i), "play" === s ? (Y(this.elements.buttons[s]) || (this.elements.buttons[s] = []), this.elements.buttons[s].push(r)) : this.elements.buttons[s] = r, r
      },
      createRange(e, t) {
          t = y("input", te(le(this.config.selectors.inputs[e]), {
              type: "range",
              min: 0,
              max: 100,
              step: .01,
              value: 0,
              autocomplete: "off",
              role: "slider",
              "aria-label": De.get(e, this.config),
              "aria-valuemin": 0,
              "aria-valuemax": 100,
              "aria-valuenow": 0
          }, t));
          return this.elements.inputs[e] = t, w.updateRangeFill.call(this, t), A.setup(t), t
      },
      createProgress(e, t) {
          const i = y("progress", te(le(this.config.selectors.display[e]), {
              min: 0,
              max: 100,
              value: 0,
              role: "progressbar",
              "aria-hidden": !0
          }, t));
          if ("volume" !== e) {
              i.appendChild(y("span", null, "0"));
              const t = {
                      played: "played",
                      buffer: "buffered"
                  } [e],
                  s = t ? De.get(t, this.config) : "";
              i.innerText = "% " + s.toLowerCase()
          }
          return this.elements.display[e] = i, i
      },
      createTime(e, t) {
          t = le(this.config.selectors.display[e], t), t = y("div", te(t, {
              class: `${t.class||""} ${this.config.classNames.display.time} `.trim(),
              "aria-label": De.get(e, this.config)
          }), "00:00");
          return this.elements.display[e] = t
      },
      bindMenuItemShortcuts(s, e) {
          u.call(this, s, "keydown keyup", t => {
              if ([32, 38, 39, 40].includes(t.which) && (t.preventDefault(), t.stopPropagation(), "keydown" !== t.type)) {
                  var i = ue(s, '[role="menuitemradio"]');
                  if (!i && [32, 39].includes(t.which)) w.showMenuPanel.call(this, e, !0);
                  else {
                      let e;
                      32 !== t.which && (40 === t.which || i && 39 === t.which ? (e = s.nextElementSibling, g(e) || (e = s.parentNode.firstElementChild)) : (e = s.previousElementSibling, g(e) || (e = s.parentNode.lastElementChild)), me.call(this, e, !0))
                  }
              }
          }, !1), u.call(this, s, "keyup", e => {
              13 === e.which && w.focusFirstMenuItem.call(this, null, !0)
          })
      },
      createMenuItem({
          value: t,
          list: e,
          type: i,
          title: s,
          badge: n = null,
          checked: r = !1
      }) {
          const o = le(this.config.selectors.inputs[i]),
              a = y("button", te(o, {
                  type: "button",
                  role: "menuitemradio",
                  class: (this.config.classNames.control + " " + (o.class || "")).trim(),
                  "aria-checked": r,
                  value: t
              })),
              l = y("span");
          l.innerHTML = s, g(n) && l.appendChild(n), a.appendChild(l), Object.defineProperty(a, "checked", {
              enumerable: !0,
              get: () => "true" === a.getAttribute("aria-checked"),
              set(e) {
                  e && Array.from(a.parentNode.children).filter(e => ue(e, '[role="menuitemradio"]')).forEach(e => e.setAttribute("aria-checked", "false")), a.setAttribute("aria-checked", e ? "true" : "false")
              }
          }), this.listeners.bind(a, "click keyup", e => {
              if (!G(e) || 32 === e.which) {
                  switch (e.preventDefault(), e.stopPropagation(), a.checked = !0, i) {
                      case "language":
                          this.currentTrack = Number(t);
                          break;
                      case "quality":
                          this.quality = t;
                          break;
                      case "speed":
                          this.speed = parseFloat(t)
                  }
                  w.showMenuPanel.call(this, "home", G(e))
              }
          }, i, !1), w.bindMenuItemShortcuts.call(this, a, i), e.appendChild(a)
      },
      formatTime(e = 0, t = !1) {
          return q(e) ? Be(e, 0 < qe(this.duration), t) : e
      },
      updateTimeDisplay(e = null, t = 0, i = !1) {
          g(e) && q(t) && (e.innerText = w.formatTime(t, i))
      },
      updateVolume() {
          this.supported.ui && (g(this.elements.inputs.volume) && w.setRange.call(this, this.elements.inputs.volume, this.muted ? 0 : this.volume), g(this.elements.buttons.mute) && (this.elements.buttons.mute.pressed = this.muted || 0 === this.volume))
      },
      setRange(e, t = 0) {
          g(e) && (e.value = t, w.updateRangeFill.call(this, e))
      },
      updateProgress(e) {
          if (this.supported.ui && V(e)) {
              var t, i, s = (e, t) => {
                  const i = q(t) ? t : 0,
                      s = g(e) ? e : this.elements.display.buffer;
                  if (g(s)) {
                      s.value = i;
                      const e = s.getElementsByTagName("span")[0];
                      g(e) && (e.childNodes[0].nodeValue = i)
                  }
              };
              if (e) switch (e.type) {
                  case "timeupdate":
                  case "seeking":
                  case "seeked":
                      t = this.currentTime, i = this.duration, t = 0 === t || 0 === i || Number.isNaN(t) || Number.isNaN(i) ? 0 : (t / i * 100).toFixed(2), "timeupdate" === e.type && w.setRange.call(this, this.elements.inputs.seek, t);
                      break;
                  case "playing":
                  case "progress":
                      s(this.elements.display.buffer, 100 * this.buffered)
              }
          }
      },
      updateRangeFill(e) {
          const t = V(e) ? e.target : e;
          if (g(t) && "range" === t.getAttribute("type")) {
              if (ue(t, this.config.selectors.inputs.seek)) {
                  t.setAttribute("aria-valuenow", this.currentTime);
                  const e = w.formatTime(this.currentTime),
                      i = w.formatTime(this.duration),
                      s = De.get("seekLabel", this.config);
                  t.setAttribute("aria-valuetext", s.replace("{currentTime}", e).replace("{duration}", i))
              } else if (ue(t, this.config.selectors.inputs.volume)) {
                  const e = 100 * t.value;
                  t.setAttribute("aria-valuenow", e), t.setAttribute("aria-valuetext", e.toFixed(1) + "%")
              } else t.setAttribute("aria-valuenow", t.value);
              J.isWebkit && t.style.setProperty("--value", t.value / t.max * 100 + "%")
          }
      },
      updateSeekTooltip(t) {
          if (this.config.tooltips.seek && g(this.elements.inputs.seek) && g(this.elements.display.seekTooltip) && 0 !== this.duration) {
              const s = this.config.classNames.tooltip + "--visible",
                  n = e => a(this.elements.display.seekTooltip, s, e);
              if (this.touch) n(!1);
              else {
                  let e = 0;
                  var i = this.elements.progress.getBoundingClientRect();
                  if (V(t)) e = 100 / i.width * (t.pageX - i.left);
                  else {
                      if (!de(this.elements.display.seekTooltip, s)) return;
                      e = parseFloat(this.elements.display.seekTooltip.style.left, 10)
                  }
                  e < 0 ? e = 0 : 100 < e && (e = 100), w.updateTimeDisplay.call(this, this.elements.display.seekTooltip, this.duration / 100 * e), this.elements.display.seekTooltip.style.left = e + "%", V(t) && ["mouseenter", "mouseleave"].includes(t.type) && n("mouseenter" === t.type)
              }
          }
      },
      timeUpdate(e) {
          var t = !g(this.elements.display.duration) && this.config.invertTime;
          w.updateTimeDisplay.call(this, this.elements.display.currentTime, t ? this.duration - this.currentTime : this.currentTime, t), e && "timeupdate" === e.type && this.media.seeking || w.updateProgress.call(this, e)
      },
      durationUpdate() {
          if (this.supported.ui && (this.config.invertTime || !this.currentTime)) {
              if (this.duration >= 2 ** 32) return ce(this.elements.display.currentTime, !0), void ce(this.elements.progress, !0);
              g(this.elements.inputs.seek) && this.elements.inputs.seek.setAttribute("aria-valuemax", this.duration);
              var e = g(this.elements.display.duration);
              !e && this.config.displayDuration && this.paused && w.updateTimeDisplay.call(this, this.elements.display.currentTime, this.duration), e && w.updateTimeDisplay.call(this, this.elements.display.duration, this.duration), w.updateSeekTooltip.call(this)
          }
      },
      toggleMenuButton(e, t) {
          ce(this.elements.settings.buttons[e], !t)
      },
      updateSetting(e, t, i) {
          const s = this.elements.settings.panels[e];
          let n = null,
              r = t;
          if ("captions" === e) n = this.currentTrack;
          else {
              if (n = v(i) ? this[e] : i, v(n) && (n = this.config[e].default), !v(this.options[e]) && !this.options[e].includes(n)) return void this.debug.warn(`Unsupported value of '${n}' for ` + e);
              if (!this.config[e].options.includes(n)) return void this.debug.warn(`Disabled value of '${n}' for ` + e)
          }
          if (g(r) || (r = s && s.querySelector('[role="menu"]')), g(r)) {
              this.elements.settings.buttons[e].querySelector("." + this.config.classNames.menu.value).innerHTML = w.getLabel.call(this, e, n);
              const o = r && r.querySelector(`[value="${n}"]`);
              g(o) && (o.checked = !0)
          }
      },
      getLabel(e, t) {
          switch (e) {
              case "speed":
                  return 1 === t ? De.get("normal", this.config) : t + "&times;";
              case "quality":
                  if (q(t)) {
                      const e = De.get("qualityLabel." + t, this.config);
                      return e.length ? e : t + "p"
                  }
                  return $e(t);
              case "captions":
                  return x.getLabel.call(this);
              default:
                  return null
          }
      },
      setQualityMenu(e) {
          if (g(this.elements.settings.panels.quality)) {
              const t = "quality",
                  i = this.elements.settings.panels.quality.querySelector('[role="menu"]');
              Y(e) && (this.options.quality = Te(e).filter(e => this.config.quality.options.includes(e)));
              e = !v(this.options.quality) && 1 < this.options.quality.length;
              if (w.toggleMenuButton.call(this, t, e), oe(i), w.checkMenu.call(this), e) {
                  const s = e => {
                      e = De.get("qualityBadge." + e, this.config);
                      return e.length ? w.createBadge.call(this, e) : null
                  };
                  this.options.quality.sort((e, t) => {
                      const i = this.config.quality.options;
                      return i.indexOf(e) > i.indexOf(t) ? 1 : -1
                  }).forEach(e => {
                      w.createMenuItem.call(this, {
                          value: e,
                          list: i,
                          type: t,
                          title: w.getLabel.call(this, "quality", e),
                          badge: s(e)
                      })
                  }), w.updateSetting.call(this, t, i)
              }
          }
      },
      setCaptionsMenu() {
          if (g(this.elements.settings.panels.captions)) {
              const i = this.elements.settings.panels.captions.querySelector('[role="menu"]'),
                  e = x.getTracks.call(this),
                  t = Boolean(e.length);
              if (w.toggleMenuButton.call(this, "captions", t), oe(i), w.checkMenu.call(this), t) {
                  const s = e.map((e, t) => ({
                      value: t,
                      checked: this.captions.toggled && this.currentTrack === t,
                      title: x.getLabel.call(this, e),
                      badge: e.language && w.createBadge.call(this, e.language.toUpperCase()),
                      list: i,
                      type: "language"
                  }));
                  s.unshift({
                      value: -1,
                      checked: !this.captions.toggled,
                      title: De.get("disabled", this.config),
                      list: i,
                      type: "language"
                  }), s.forEach(w.createMenuItem.bind(this)), w.updateSetting.call(this, "captions", i)
              }
          }
      },
      setSpeedMenu() {
          if (g(this.elements.settings.panels.speed)) {
              const t = this.elements.settings.panels.speed.querySelector('[role="menu"]');
              this.options.speed = this.options.speed.filter(e => e >= this.minimumSpeed && e <= this.maximumSpeed);
              var e = !v(this.options.speed) && 1 < this.options.speed.length;
              w.toggleMenuButton.call(this, "speed", e), oe(t), w.checkMenu.call(this), e && (this.options.speed.forEach(e => {
                  w.createMenuItem.call(this, {
                      value: e,
                      list: t,
                      type: "speed",
                      title: w.getLabel.call(this, "speed", e)
                  })
              }), w.updateSetting.call(this, "speed", t))
          }
      },
      checkMenu() {
          var e = this.elements.settings["buttons"],
              e = !v(e) && Object.values(e).some(e => !e.hidden);
          ce(this.elements.settings.menu, !e)
      },
      focusFirstMenuItem(t, i = !1) {
          if (!this.elements.settings.popup.hidden) {
              let e = t;
              g(e) || (e = Object.values(this.elements.settings.panels).find(e => !e.hidden));
              t = e.querySelector('[role^="menuitem"]');
              me.call(this, t, i)
          }
      },
      toggleMenu(t) {
          const i = this.elements.settings["popup"],
              s = this.elements.buttons.settings;
          if (g(i) && g(s)) {
              const n = i["hidden"];
              let e = n;
              if (R(t)) e = t;
              else if (G(t) && 27 === t.which) e = !1;
              else if (V(t)) {
                  const n = W(t.composedPath) ? t.composedPath()[0] : t.target,
                      r = i.contains(n);
                  if (r || !r && t.target !== s && e) return
              }
              s.setAttribute("aria-expanded", e), ce(i, !e), a(this.elements.container, this.config.classNames.menu.open, e), e && G(t) ? w.focusFirstMenuItem.call(this, null, !0) : e || n || me.call(this, s, G(t))
          }
      },
      getMenuSize(e) {
          const t = e.cloneNode(!0);
          t.style.position = "absolute", t.style.opacity = 0, t.removeAttribute("hidden"), e.parentNode.appendChild(t);
          var e = t.scrollWidth,
              i = t.scrollHeight;
          return re(t), {
              width: e,
              height: i
          }
      },
      showMenuPanel(e = "", t = !1) {
          var i = this.elements.container.querySelector(`#plyr-settings-${this.id}-` + e);
          if (g(i)) {
              const s = i.parentNode,
                  n = Array.from(s.children).find(e => !e.hidden);
              if (ge.transitions && !ge.reducedMotion) {
                  s.style.width = n.scrollWidth + "px", s.style.height = n.scrollHeight + "px";
                  const e = w.getMenuSize.call(this, i),
                      t = e => {
                          e.target === s && ["width", "height"].includes(e.propertyName) && (s.style.width = "", s.style.height = "", be.call(this, s, K, t))
                      };
                  u.call(this, s, K, t), s.style.width = e.width + "px", s.style.height = e.height + "px"
              }
              ce(n, !0), ce(i, !1), w.focusFirstMenuItem.call(this, i, t)
          }
      },
      setDownloadUrl() {
          const e = this.elements.buttons.download;
          g(e) && e.setAttribute("href", this.download)
      },
      create(a) {
          const {
              bindMenuItemShortcuts: l,
              createButton: i,
              createProgress: e,
              createRange: s,
              createTime: c,
              setQualityMenu: t,
              setSpeedMenu: o,
              showMenuPanel: d
          } = w, n = (this.elements.controls = null, Y(this.config.controls) && this.config.controls.includes("play-large") && this.elements.container.appendChild(i.call(this, "play-large")), y("div", le(this.config.selectors.controls.wrapper))), r = (this.elements.controls = n, {
              class: "plyr__controls__item"
          });
          return Te(Y(this.config.controls) ? this.config.controls : []).forEach(t => {
              if ("restart" === t && n.appendChild(i.call(this, "restart", r)), "rewind" === t && n.appendChild(i.call(this, "rewind", r)), "play" === t && n.appendChild(i.call(this, "play", r)), "fast-forward" === t && n.appendChild(i.call(this, "fast-forward", r)), "progress" === t) {
                  const l = y("div", {
                          class: r.class + " plyr__progress__container"
                      }),
                      i = y("div", le(this.config.selectors.progress));
                  if (i.appendChild(s.call(this, "seek", {
                          id: "plyr-seek-" + a.id
                      })), i.appendChild(e.call(this, "buffer")), this.config.tooltips.seek) {
                      const a = y("span", {
                          class: this.config.classNames.tooltip
                      }, "00:00");
                      i.appendChild(a), this.elements.display.seekTooltip = a
                  }
                  this.elements.progress = i, l.appendChild(this.elements.progress), n.appendChild(l)
              }
              if ("current-time" === t && n.appendChild(c.call(this, "currentTime", r)), "duration" === t && n.appendChild(c.call(this, "duration", r)), "mute" === t || "volume" === t) {
                  let e = this.elements["volume"];
                  if (g(e) && n.contains(e) || (e = y("div", te({}, r, {
                          class: (r.class + " plyr__volume").trim()
                      })), this.elements.volume = e, n.appendChild(e)), "mute" === t && e.appendChild(i.call(this, "mute")), "volume" === t && !J.isIos) {
                      const i = {
                          max: 1,
                          step: .05,
                          value: this.config.volume
                      };
                      e.appendChild(s.call(this, "volume", te(i, {
                          id: "plyr-volume-" + a.id
                      })))
                  }
              }
              if ("captions" === t && n.appendChild(i.call(this, "captions", r)), "settings" === t && !v(this.config.settings)) {
                  const e = y("div", te({}, r, {
                          class: (r.class + " plyr__menu").trim(),
                          hidden: ""
                      })),
                      s = (e.appendChild(i.call(this, "settings", {
                          "aria-haspopup": !0,
                          "aria-controls": "plyr-settings-" + a.id,
                          "aria-expanded": !1
                      })), y("div", {
                          class: "plyr__menu__container",
                          id: "plyr-settings-" + a.id,
                          hidden: ""
                      })),
                      c = y("div"),
                      t = y("div", {
                          id: `plyr-settings-${a.id}-home`
                      }),
                      o = y("div", {
                          role: "menu"
                      });
                  t.appendChild(o), c.appendChild(t), this.elements.settings.panels.home = t, this.config.settings.forEach(e => {
                      const t = y("button", te(le(this.config.selectors.buttons.settings), {
                              type: "button",
                              class: `${this.config.classNames.control} ${this.config.classNames.control}--forward`,
                              role: "menuitem",
                              "aria-haspopup": !0,
                              hidden: ""
                          })),
                          i = (l.call(this, t, e), u.call(this, t, "click", () => {
                              d.call(this, e, !1)
                          }), y("span", null, De.get(e, this.config))),
                          s = y("span", {
                              class: this.config.classNames.menu.value
                          }),
                          n = (s.innerHTML = a[e], i.appendChild(s), t.appendChild(i), o.appendChild(t), y("div", {
                              id: `plyr-settings-${a.id}-` + e,
                              hidden: ""
                          })),
                          r = y("button", {
                              type: "button",
                              class: `${this.config.classNames.control} ${this.config.classNames.control}--back`
                          });
                      r.appendChild(y("span", {
                          "aria-hidden": !0
                      }, De.get(e, this.config))), r.appendChild(y("span", {
                          class: this.config.classNames.hidden
                      }, De.get("menuBack", this.config))), u.call(this, n, "keydown", e => {
                          37 === e.which && (e.preventDefault(), e.stopPropagation(), d.call(this, "home", !0))
                      }, !1), u.call(this, r, "click", () => {
                          d.call(this, "home", !1)
                      }), n.appendChild(r), n.appendChild(y("div", {
                          role: "menu"
                      })), c.appendChild(n), this.elements.settings.buttons[e] = t, this.elements.settings.panels[e] = n
                  }), s.appendChild(c), e.appendChild(s), n.appendChild(e), this.elements.settings.popup = s, this.elements.settings.menu = e
              }
              if ("pip" === t && ge.pip && n.appendChild(i.call(this, "pip", r)), "airplay" === t && ge.airplay && n.appendChild(i.call(this, "airplay", r)), "download" === t) {
                  const a = te({}, r, {
                          element: "a",
                          href: this.download,
                          target: "_blank"
                      }),
                      l = (this.isHTML5 && (a.download = ""), this.config.urls)["download"];
                  !Q(l) && this.isEmbed && te(a, {
                      icon: "logo-" + this.provider,
                      label: this.provider
                  }), n.appendChild(i.call(this, "download", a))
              }
              "fullscreen" === t && n.appendChild(i.call(this, "fullscreen", r))
          }), this.isHTML5 && t.call(this, Oe.getQualityOptions.call(this)), o.call(this), n
      },
      inject() {
          if (this.config.loadSprite) {
              const t = w.getIconUrl.call(this);
              t.cors && He(t.url, "sprite-plyr")
          }
          this.id = Math.floor(1e4 * Math.random());
          let t = null;
          this.elements.controls = null;
          const e = {
              id: this.id,
              seektime: this.config.seekTime,
              title: this.config.title
          };
          let i = !0;
          W(this.config.controls) && (this.config.controls = this.config.controls.call(this, e)), this.config.controls || (this.config.controls = []), g(this.config.controls) || B(this.config.controls) ? t = this.config.controls : (t = w.create.call(this, {
              id: this.id,
              seektime: this.config.seekTime,
              speed: this.speed,
              quality: this.quality,
              captions: x.getLabel.call(this)
          }), i = !1);
          let s;
          if (i && B(this.config.controls) && (t = (() => {
                  let i = t;
                  return Object.entries(e).forEach(([e, t]) => {
                      i = Le(i, `{${e}}`, t)
                  }), i
              })()), B(this.config.selectors.controls.container) && (s = document.querySelector(this.config.selectors.controls.container)), g(s) || (s = this.elements.container), s[g(t) ? "insertAdjacentElement" : "insertAdjacentHTML"]("afterbegin", t), g(this.elements.controls) || w.findElements.call(this), !v(this.elements.buttons)) {
              const t = t => {
                  const i = this.config.classNames.controlPressed;
                  Object.defineProperty(t, "pressed", {
                      enumerable: !0,
                      get: () => de(t, i),
                      set(e = !1) {
                          a(t, i, e)
                      }
                  })
              };
              Object.values(this.elements.buttons).filter(Boolean).forEach(e => {
                  Y(e) || X(e) ? Array.from(e).filter(Boolean).forEach(t) : t(e)
              })
          }
          if (J.isEdge && Z(s), this.config.tooltips.controls) {
              const {
                  classNames: t,
                  selectors: e
              } = this.config, i = `${e.controls.wrapper} ${e.labels} .` + t.hidden, s = he.call(this, i);
              Array.from(s).forEach(e => {
                  a(e, this.config.classNames.hidden, !1), a(e, this.config.classNames.tooltip, !0)
              })
          }
      }
  };

  function Re(e, t = !0) {
      let i = e;
      if (t) {
          const e = document.createElement("a");
          e.href = i, i = e.href
      }
      try {
          return new URL(i)
      } catch (e) {
          return null
      }
  }

  function We(e) {
      const i = new URLSearchParams;
      return H(e) && Object.entries(e).forEach(([e, t]) => {
          i.set(e, t)
      }), i
  }
  const x = {
          setup() {
              if (this.supported.ui)
                  if (!this.isVideo || this.isYouTube || this.isHTML5 && !ge.textTracks) Y(this.config.controls) && this.config.controls.includes("settings") && this.config.settings.includes("captions") && w.setCaptionsMenu.call(this);
                  else {
                      var i;
                      if (g(this.elements.captions) || (this.elements.captions = y("div", le(this.config.selectors.captions)), s = this.elements.captions, i = this.elements.wrapper, g(s) && g(i) && i.parentNode.insertBefore(s, i.nextSibling)), J.isIE && window.URL) {
                          const s = this.media.querySelectorAll("track");
                          Array.from(s).forEach(t => {
                              var e = t.getAttribute("src"),
                                  i = Re(e);
                              null !== i && i.hostname !== window.location.href.hostname && ["http:", "https:"].includes(i.protocol) && Fe(e, "blob").then(e => {
                                  t.setAttribute("src", window.URL.createObjectURL(e))
                              }).catch(() => {
                                  re(t)
                              })
                          })
                      }
                      var s = Te((navigator.languages || [navigator.language || navigator.userLanguage || "en"]).map(e => e.split("-")[0]));
                      let e = (this.storage.get("language") || this.config.captions.language || "auto").toLowerCase(),
                          t = ("auto" === e && ([e] = s), this.storage.get("captions"));
                      if (R(t) || ({
                              active: t
                          } = this.config.captions), Object.assign(this.captions, {
                              toggled: !1,
                              active: t,
                              language: e,
                              languages: s
                          }), this.isHTML5) {
                          const s = this.config.captions.update ? "addtrack removetrack" : "removetrack";
                          u.call(this, this.media.textTracks, s, x.update.bind(this))
                      }
                      setTimeout(x.update.bind(this), 0)
                  }
          },
          update() {
              const e = x.getTracks.call(this, !0),
                  {
                      active: t,
                      language: i,
                      meta: s,
                      currentTrackNode: n
                  } = this.captions,
                  r = Boolean(e.find(e => e.language === i));
              this.isHTML5 && this.isVideo && e.filter(e => !s.get(e)).forEach(e => {
                  this.debug.log("Track added", e), s.set(e, {
                      default: "showing" === e.mode
                  }), "showing" === e.mode && (e.mode = "hidden"), u.call(this, e, "cuechange", () => x.updateCues.call(this))
              }), (r && this.language !== i || !e.includes(n)) && (x.setLanguage.call(this, i), x.toggle.call(this, t && r)), a(this.elements.container, this.config.classNames.captions.enabled, !v(e)), Y(this.config.controls) && this.config.controls.includes("settings") && this.config.settings.includes("captions") && w.setCaptionsMenu.call(this)
          },
          toggle(e, t = !0) {
              if (this.supported.ui) {
                  const i = this.captions["toggled"],
                      s = this.config.classNames.captions.active,
                      n = F(e) ? !i : e;
                  if (n !== i) {
                      if (t || (this.captions.active = n, this.storage.set({
                              captions: n
                          })), !this.language && n && !t) {
                          const e = x.getTracks.call(this),
                              t = x.findTrack.call(this, [this.captions.language, ...this.captions.languages], !0);
                          return this.captions.language = t.language, void x.set.call(this, e.indexOf(t))
                      }
                      this.elements.buttons.captions && (this.elements.buttons.captions.pressed = n), a(this.elements.container, s, n), this.captions.toggled = n, w.updateSetting.call(this, "captions"), b.call(this, this.media, n ? "captionsenabled" : "captionsdisabled")
                  }
                  setTimeout(() => {
                      n && this.captions.toggled && (this.captions.currentTrackNode.mode = "hidden")
                  })
              }
          },
          set(e, t = !0) {
              var i, s = x.getTracks.call(this); - 1 !== e ? q(e) ? e in s ? (this.captions.currentTrack !== e && (i = ((s = s[this.captions.currentTrack = e]) || {})["language"], this.captions.currentTrackNode = s, w.updateSetting.call(this, "captions"), t || (this.captions.language = i, this.storage.set({
                  language: i
              })), this.isVimeo && this.embed.enableTextTrack(i), b.call(this, this.media, "languagechange")), x.toggle.call(this, !0, t), this.isHTML5 && this.isVideo && x.updateCues.call(this)) : this.debug.warn("Track not found", e) : this.debug.warn("Invalid caption argument", e) : x.toggle.call(this, !1, t)
          },
          setLanguage(e, t = !0) {
              if (B(e)) {
                  var i = e.toLowerCase();
                  this.captions.language = i;
                  const s = x.getTracks.call(this),
                      n = x.findTrack.call(this, [i]);
                  x.set.call(this, s.indexOf(n), t)
              } else this.debug.warn("Invalid language argument", e)
          },
          getTracks(t = !1) {
              return Array.from((this.media || {}).textTracks || []).filter(e => !this.isHTML5 || t || this.captions.meta.has(e)).filter(e => ["captions", "subtitles"].includes(e.kind))
          },
          findTrack(e, t = !1) {
              const i = x.getTracks.call(this),
                  s = e => Number((this.captions.meta.get(e) || {}).default),
                  n = Array.from(i).sort((e, t) => s(t) - s(e));
              let r;
              return e.every(t => (r = n.find(e => e.language === t), !r)), r || (t ? n[0] : void 0)
          },
          getCurrentTrack() {
              return x.getTracks.call(this)[this.currentTrack]
          },
          getLabel(e) {
              let t = e;
              return !U(t) && ge.textTracks && this.captions.toggled && (t = x.getCurrentTrack.call(this)), U(t) ? v(t.label) ? v(t.language) ? De.get("enabled", this.config) : e.language.toUpperCase() : t.label : De.get("disabled", this.config)
          },
          updateCues(t) {
              if (this.supported.ui)
                  if (g(this.elements.captions))
                      if (F(t) || Array.isArray(t)) {
                          let e = t;
                          if (!e) {
                              const t = x.getCurrentTrack.call(this);
                              e = Array.from((t || {}).activeCues || []).map(e => e.getCueAsHTML()).map(ze)
                          }
                          var i = e.map(e => e.trim()).join("\n");
                          if (i !== this.elements.captions.innerHTML) {
                              oe(this.elements.captions);
                              const t = y("span", le(this.config.selectors.caption));
                              t.innerHTML = i, this.elements.captions.appendChild(t), b.call(this, this.media, "cuechange")
                          }
                      } else this.debug.warn("updateCues: Invalid input", t);
              else this.debug.warn("No captions element to render to")
          }
      },
      Ye = {
          enabled: !0,
          title: "",
          debug: !1,
          autoplay: !1,
          autopause: !0,
          playsinline: !0,
          seekTime: 10,
          volume: 1,
          muted: !1,
          duration: null,
          displayDuration: !0,
          invertTime: !0,
          toggleInvert: !0,
          ratio: null,
          clickToPlay: !0,
          hideControls: !0,
          resetOnEnd: !1,
          disableContextMenu: !0,
          loadSprite: !0,
          iconPrefix: "plyr",
          iconUrl: "https://cdn.plyr.io/3.6.8/plyr.svg",
          blankVideo: "https://cdn.plyr.io/static/blank.mp4",
          quality: {
              default: 576,
              options: [4320, 2880, 2160, 1440, 1080, 720, 576, 480, 360, 240],
              forced: !1,
              onChange: null
          },
          loop: {
              active: !1
          },
          speed: {
              selected: 1,
              options: [.5, .75, 1, 1.25, 1.5, 1.75, 2, 4]
          },
          keyboard: {
              focused: !0,
              global: !1
          },
          tooltips: {
              controls: !1,
              seek: !0
          },
          captions: {
              active: !1,
              language: "auto",
              update: !1
          },
          fullscreen: {
              enabled: !0,
              fallback: !0,
              iosNative: !1
          },
          storage: {
              enabled: !0,
              key: "plyr"
          },
          controls: ["play-large", "play", "progress", "current-time", "mute", "volume", "captions", "settings", "pip", "airplay", "fullscreen"],
          settings: ["captions", "quality", "speed"],
          i18n: {
              restart: "Restart",
              rewind: "Rewind {seektime}s",
              play: "Play",
              pause: "Pause",
              fastForward: "Forward {seektime}s",
              seek: "Seek",
              seekLabel: "{currentTime} of {duration}",
              played: "Played",
              buffered: "Buffered",
              currentTime: "Current time",
              duration: "Duration",
              volume: "Volume",
              mute: "Mute",
              unmute: "Unmute",
              enableCaptions: "Enable captions",
              disableCaptions: "Disable captions",
              download: "Download",
              enterFullscreen: "Enter fullscreen",
              exitFullscreen: "Exit fullscreen",
              frameTitle: "Player for {title}",
              captions: "Captions",
              settings: "Settings",
              pip: "PIP",
              menuBack: "Go back to previous menu",
              speed: "Speed",
              normal: "Normal",
              quality: "Quality",
              loop: "Loop",
              start: "Start",
              end: "End",
              all: "All",
              reset: "Reset",
              disabled: "Disabled",
              enabled: "Enabled",
              advertisement: "Ad",
              qualityBadge: {
                  2160: "4K",
                  1440: "HD",
                  1080: "HD",
                  720: "HD",
                  576: "SD",
                  480: "SD"
              }
          },
          urls: {
              download: null,
              vimeo: {
                  sdk: "https://player.vimeo.com/api/player.js",
                  iframe: "https://player.vimeo.com/video/{0}?{1}",
                  api: "https://vimeo.com/api/oembed.json?url={0}"
              },
              youtube: {
                  sdk: "https://www.youtube.com/iframe_api",
                  api: "https://noembed.com/embed?url=https://www.youtube.com/watch?v={0}"
              },
              googleIMA: {
                  sdk: "https://imasdk.googleapis.com/js/sdkloader/ima3.js"
              }
          },
          listeners: {
              seek: null,
              play: null,
              pause: null,
              restart: null,
              rewind: null,
              fastForward: null,
              mute: null,
              volume: null,
              captions: null,
              download: null,
              fullscreen: null,
              pip: null,
              airplay: null,
              speed: null,
              quality: null,
              loop: null,
              language: null
          },
          events: ["ended", "progress", "stalled", "playing", "waiting", "canplay", "canplaythrough", "loadstart", "loadeddata", "loadedmetadata", "timeupdate", "volumechange", "play", "pause", "error", "seeking", "seeked", "emptied", "ratechange", "cuechange", "download", "enterfullscreen", "exitfullscreen", "captionsenabled", "captionsdisabled", "languagechange", "controlshidden", "controlsshown", "ready", "statechange", "qualitychange", "adsloaded", "adscontentpause", "adscontentresume", "adstarted", "adsmidpoint", "adscomplete", "adsallcomplete", "adsimpression", "adsclick"],
          selectors: {
              editable: "input, textarea, select, [contenteditable]",
              container: ".plyr",
              controls: {
                  container: null,
                  wrapper: ".plyr__controls"
              },
              labels: "[data-plyr]",
              buttons: {
                  play: '[data-plyr="play"]',
                  pause: '[data-plyr="pause"]',
                  restart: '[data-plyr="restart"]',
                  rewind: '[data-plyr="rewind"]',
                  fastForward: '[data-plyr="fast-forward"]',
                  mute: '[data-plyr="mute"]',
                  captions: '[data-plyr="captions"]',
                  download: '[data-plyr="download"]',
                  fullscreen: '[data-plyr="fullscreen"]',
                  pip: '[data-plyr="pip"]',
                  airplay: '[data-plyr="airplay"]',
                  settings: '[data-plyr="settings"]',
                  loop: '[data-plyr="loop"]'
              },
              inputs: {
                  seek: '[data-plyr="seek"]',
                  volume: '[data-plyr="volume"]',
                  speed: '[data-plyr="speed"]',
                  language: '[data-plyr="language"]',
                  quality: '[data-plyr="quality"]'
              },
              display: {
                  currentTime: ".plyr__time--current",
                  duration: ".plyr__time--duration",
                  buffer: ".plyr__progress__buffer",
                  loop: ".plyr__progress__loop",
                  volume: ".plyr__volume--display"
              },
              progress: ".plyr__progress",
              captions: ".plyr__captions",
              caption: ".plyr__caption"
          },
          classNames: {
              type: "plyr--{0}",
              provider: "plyr--{0}",
              video: "plyr__video-wrapper",
              embed: "plyr__video-embed",
              videoFixedRatio: "plyr__video-wrapper--fixed-ratio",
              embedContainer: "plyr__video-embed__container",
              poster: "plyr__poster",
              posterEnabled: "plyr__poster-enabled",
              ads: "plyr__ads",
              control: "plyr__control",
              controlPressed: "plyr__control--pressed",
              playing: "plyr--playing",
              paused: "plyr--paused",
              stopped: "plyr--stopped",
              loading: "plyr--loading",
              hover: "plyr--hover",
              tooltip: "plyr__tooltip",
              cues: "plyr__cues",
              hidden: "plyr__sr-only",
              hideControls: "plyr--hide-controls",
              isIos: "plyr--is-ios",
              isTouch: "plyr--is-touch",
              uiSupported: "plyr--full-ui",
              noTransition: "plyr--no-transition",
              display: {
                  time: "plyr__time"
              },
              menu: {
                  value: "plyr__menu__value",
                  badge: "plyr__badge",
                  open: "plyr--menu-open"
              },
              captions: {
                  enabled: "plyr--captions-enabled",
                  active: "plyr--captions-active"
              },
              fullscreen: {
                  enabled: "plyr--fullscreen-enabled",
                  fallback: "plyr--fullscreen-fallback"
              },
              pip: {
                  supported: "plyr--pip-supported",
                  active: "plyr--pip-active"
              },
              airplay: {
                  supported: "plyr--airplay-supported",
                  active: "plyr--airplay-active"
              },
              tabFocus: "plyr__tab-focus",
              previewThumbnails: {
                  thumbContainer: "plyr__preview-thumb",
                  thumbContainerShown: "plyr__preview-thumb--is-shown",
                  imageContainer: "plyr__preview-thumb__image-container",
                  timeContainer: "plyr__preview-thumb__time-container",
                  scrubbingContainer: "plyr__preview-scrubbing",
                  scrubbingContainerShown: "plyr__preview-scrubbing--is-shown"
              }
          },
          attributes: {
              embed: {
                  provider: "data-plyr-provider",
                  id: "data-plyr-embed-id"
              }
          },
          ads: {
              enabled: !1,
              publisherId: "",
              tagUrl: ""
          },
          previewThumbnails: {
              enabled: !1,
              src: ""
          },
          vimeo: {
              byline: !1,
              portrait: !1,
              title: !1,
              speed: !0,
              transparent: !1,
              customControls: !0,
              referrerPolicy: null,
              premium: !1
          },
          youtube: {
              rel: 0,
              showinfo: 0,
              iv_load_policy: 3,
              modestbranding: 1,
              customControls: !0,
              noCookie: !1
          }
      },
      Xe = "picture-in-picture",
      Ve = {
          html5: "html5",
          youtube: "youtube",
          vimeo: "vimeo"
      },
      Ge = () => {};
  class Ue {
      constructor(e = !1) {
          this.enabled = window.console && e, this.enabled && this.log("Debugging enabled")
      }
      get log() {
          return this.enabled ? Function.prototype.bind.call(console.log, console) : Ge
      }
      get warn() {
          return this.enabled ? Function.prototype.bind.call(console.warn, console) : Ge
      }
      get error() {
          return this.enabled ? Function.prototype.bind.call(console.error, console) : Ge
      }
  }
  class Qe {
      constructor(e) {
          r(this, "onChange", () => {
              if (this.enabled) {
                  const t = this.player.elements.buttons.fullscreen;
                  g(t) && (t.pressed = this.active);
                  var e = this.target === this.player.media ? this.target : this.player.elements.container;
                  b.call(this.player, e, this.active ? "enterfullscreen" : "exitfullscreen", !0)
              }
          }), r(this, "toggleFallback", (t = !1) => {
              if (t ? this.scrollPosition = {
                      x: window.scrollX || 0,
                      y: window.scrollY || 0
                  } : window.scrollTo(this.scrollPosition.x, this.scrollPosition.y), document.body.style.overflow = t ? "hidden" : "", a(this.target, this.player.config.classNames.fullscreen.fallback, t), J.isIos) {
                  let e = document.head.querySelector('meta[name="viewport"]');
                  const s = "viewport-fit=cover";
                  e || (e = document.createElement("meta"), e.setAttribute("name", "viewport"));
                  var i = B(e.content) && e.content.includes(s);
                  t ? (this.cleanupViewport = !i, i || (e.content += "," + s)) : this.cleanupViewport && (e.content = e.content.split(",").filter(e => e.trim() !== s).join(","))
              }
              this.onChange()
          }), r(this, "trapFocus", e => {
              if (!J.isIos && this.active && "Tab" === e.key && 9 === e.keyCode) {
                  const t = document.activeElement,
                      i = he.call(this.player, "a[href], button:not(:disabled), input:not(:disabled), [tabindex]"),
                      [s] = i,
                      n = i[i.length - 1];
                  t !== n || e.shiftKey ? t === s && e.shiftKey && (n.focus(), e.preventDefault()) : (s.focus(), e.preventDefault())
              }
          }), r(this, "update", () => {
              var e;
              this.enabled ? (e = this.forceFallback ? "Fallback (forced)" : Qe.native ? "Native" : "Fallback", this.player.debug.log(e + " fullscreen enabled")) : this.player.debug.log("Fullscreen not supported and fallback disabled"), a(this.player.elements.container, this.player.config.classNames.fullscreen.enabled, this.enabled)
          }), r(this, "enter", () => {
              this.enabled && (J.isIos && this.player.config.fullscreen.iosNative ? this.player.isVimeo ? this.player.embed.requestFullscreen() : this.target.webkitEnterFullscreen() : !Qe.native || this.forceFallback ? this.toggleFallback(!0) : this.prefix ? v(this.prefix) || this.target[this.prefix + "Request" + this.property]() : this.target.requestFullscreen({
                  navigationUI: "hide"
              }))
          }), r(this, "exit", () => {
              var e;
              this.enabled && (J.isIos && this.player.config.fullscreen.iosNative ? (this.target.webkitExitFullscreen(), xe(this.player.play())) : !Qe.native || this.forceFallback ? this.toggleFallback(!1) : this.prefix ? v(this.prefix) || (e = "moz" === this.prefix ? "Cancel" : "Exit", document[this.prefix + e + this.property]()) : (document.cancelFullScreen || document.exitFullscreen).call(document))
          }), r(this, "toggle", () => {
              this.active ? this.exit() : this.enter()
          }), this.player = e, this.prefix = Qe.prefix, this.property = Qe.property, this.scrollPosition = {
              x: 0,
              y: 0
          }, this.forceFallback = "force" === e.config.fullscreen.fallback, this.player.elements.fullscreen = e.config.fullscreen.container && function(e, t) {
              const i = Element["prototype"];
              return (i.closest || function() {
                  let e = this;
                  do {
                      if (ue.matches(e, t)) return e
                  } while (e = e.parentElement || e.parentNode, null !== e && 1 === e.nodeType);
                  return null
              }).call(e, t)
          }(this.player.elements.container, e.config.fullscreen.container), u.call(this.player, document, "ms" === this.prefix ? "MSFullscreenChange" : this.prefix + "fullscreenchange", () => {
              this.onChange()
          }), u.call(this.player, this.player.elements.container, "dblclick", e => {
              g(this.player.elements.controls) && this.player.elements.controls.contains(e.target) || this.player.listeners.proxy(e, this.toggle, "fullscreen")
          }), u.call(this, this.player.elements.container, "keydown", e => this.trapFocus(e)), this.update()
      }
      static get native() {
          return !!(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled)
      }
      get usingNative() {
          return Qe.native && !this.forceFallback
      }
      static get prefix() {
          if (W(document.exitFullscreen)) return "";
          let t = "";
          return ["webkit", "moz", "ms"].some(e => !(!W(document[e + "ExitFullscreen"]) && !W(document[e + "CancelFullScreen"]) || (t = e, 0))), t
      }
      static get property() {
          return "moz" === this.prefix ? "FullScreen" : "Fullscreen"
      }
      get enabled() {
          return (Qe.native || this.player.config.fullscreen.fallback) && this.player.config.fullscreen.enabled && this.player.supported.ui && this.player.isVideo
      }
      get active() {
          if (!this.enabled) return !1;
          if (!Qe.native || this.forceFallback) return de(this.target, this.player.config.classNames.fullscreen.fallback);
          var e = this.prefix ? document["" + this.prefix + this.property + "Element"] : document.fullscreenElement;
          return e && e.shadowRoot ? e === this.target.getRootNode().host : e === this.target
      }
      get target() {
          return J.isIos && this.player.config.fullscreen.iosNative ? this.player.media : this.player.elements.fullscreen || this.player.elements.container
      }
  }

  function Ke(n, r = 1) {
      return new Promise((e, t) => {
          const i = new Image,
              s = () => {
                  delete i.onload, delete i.onerror, (i.naturalWidth >= r ? e : t)(i)
              };
          Object.assign(i, {
              onload: s,
              onerror: s,
              src: n
          })
      })
  }
  const T = {
      addStyleHook() {
          a(this.elements.container, this.config.selectors.container.replace(".", ""), !0), a(this.elements.container, this.config.classNames.uiSupported, this.supported.ui)
      },
      toggleNativeControls(e = !1) {
          e && this.isHTML5 ? this.media.setAttribute("controls", "") : this.media.removeAttribute("controls")
      },
      build() {
          if (this.listeners.media(), !this.supported.ui) return this.debug.warn(`Basic support only for ${this.provider} ` + this.type), void T.toggleNativeControls.call(this, !0);
          g(this.elements.controls) || (w.inject.call(this), this.listeners.controls()), T.toggleNativeControls.call(this), this.isHTML5 && x.setup.call(this), this.volume = null, this.muted = null, this.loop = null, this.quality = null, this.speed = null, w.updateVolume.call(this), w.timeUpdate.call(this), T.checkPlaying.call(this), a(this.elements.container, this.config.classNames.pip.supported, ge.pip && this.isHTML5 && this.isVideo), a(this.elements.container, this.config.classNames.airplay.supported, ge.airplay && this.isHTML5), a(this.elements.container, this.config.classNames.isIos, J.isIos), a(this.elements.container, this.config.classNames.isTouch, this.touch), this.ready = !0, setTimeout(() => {
              b.call(this, this.media, "ready")
          }, 0), T.setTitle.call(this), this.poster && T.setPoster.call(this, this.poster, !1).catch(() => {}), this.config.duration && w.durationUpdate.call(this)
      },
      setTitle() {
          let t = De.get("play", this.config);
          if (B(this.config.title) && !v(this.config.title) && (t += ", " + this.config.title), Array.from(this.elements.buttons.play || []).forEach(e => {
                  e.setAttribute("aria-label", t)
              }), this.isEmbed) {
              const t = pe.call(this, "iframe");
              if (g(t)) {
                  const e = v(this.config.title) ? "video" : this.config.title,
                      i = De.get("frameTitle", this.config);
                  t.setAttribute("title", i.replace("{title}", e))
              }
          }
      },
      togglePoster(e) {
          a(this.elements.container, this.config.classNames.posterEnabled, e)
      },
      setPoster(t, e = !0) {
          return e && this.poster ? Promise.reject(new Error("Poster already set")) : (this.media.setAttribute("data-poster", t), this.elements.poster.removeAttribute("hidden"), function() {
              return new Promise(e => this.ready ? setTimeout(e, 0) : u.call(this, this.elements.container, "ready", e)).then(() => {})
          }.call(this).then(() => Ke(t)).catch(e => {
              throw t === this.poster && T.togglePoster.call(this, !1), e
          }).then(() => {
              if (t !== this.poster) throw new Error("setPoster cancelled by later call to setPoster")
          }).then(() => (Object.assign(this.elements.poster.style, {
              backgroundImage: `url('${t}')`,
              backgroundSize: ""
          }), T.togglePoster.call(this, !0), t)))
      },
      checkPlaying(e) {
          a(this.elements.container, this.config.classNames.playing, this.playing), a(this.elements.container, this.config.classNames.paused, this.paused), a(this.elements.container, this.config.classNames.stopped, this.stopped), Array.from(this.elements.buttons.play || []).forEach(e => {
              Object.assign(e, {
                  pressed: this.playing
              }), e.setAttribute("aria-label", De.get(this.playing ? "pause" : "play", this.config))
          }), V(e) && "timeupdate" === e.type || T.toggleControls.call(this)
      },
      checkLoading(e) {
          this.loading = ["stalled", "waiting"].includes(e.type), clearTimeout(this.timers.loading), this.timers.loading = setTimeout(() => {
              a(this.elements.container, this.config.classNames.loading, this.loading), T.toggleControls.call(this)
          }, this.loading ? 250 : 0)
      },
      toggleControls(e) {
          var t, i = this.elements["controls"];
          i && this.config.hideControls && (t = this.touch && this.lastSeekTime + 2e3 > Date.now(), this.toggleControls(Boolean(e || this.loading || this.paused || i.pressed || i.hover || t)))
      },
      migrateStyles() {
          Object.values({
              ...this.media.style
          }).filter(e => !v(e) && B(e) && e.startsWith("--plyr")).forEach(e => {
              this.elements.container.style.setProperty(e, this.media.style.getPropertyValue(e)), this.media.style.removeProperty(e)
          }), v(this.media.style) && this.media.removeAttribute("style")
      }
  };
  class Ze {
      constructor(e) {
          r(this, "firstTouch", () => {
              const e = this["player"],
                  t = e["elements"];
              e.touch = !0, a(t.container, e.config.classNames.isTouch, !0)
          }), r(this, "setTabFocus", e => {
              const t = this["player"],
                  i = t["elements"];
              var s;
              clearTimeout(this.focusTimer), "keydown" === e.type && 9 !== e.which || ("keydown" === e.type && (this.lastKeyDown = e.timeStamp), s = e.timeStamp - this.lastKeyDown <= 20, "focus" === e.type && !s || (s = t.config.classNames.tabFocus, a(he.call(t, "." + s), s, !1), "focusout" !== e.type && (this.focusTimer = setTimeout(() => {
                  var e = document.activeElement;
                  i.container.contains(e) && a(document.activeElement, t.config.classNames.tabFocus, !0)
              }, 10))))
          }), r(this, "global", (e = !0) => {
              var t = this["player"];
              t.config.keyboard.global && ye.call(t, window, "keydown keyup", this.handleKey, e, !1), ye.call(t, document.body, "click", this.toggleMenu, e), we.call(t, document.body, "touchstart", this.firstTouch), ye.call(t, document.body, "keydown focus blur focusout", this.setTabFocus, e, !1, !0)
          }), r(this, "container", () => {
              const a = this["player"],
                  {
                      config: e,
                      elements: l,
                      timers: s
                  } = a,
                  i = (!e.keyboard.global && e.keyboard.focused && u.call(a, l.container, "keydown keyup", this.handleKey, !1), u.call(a, l.container, "mousemove mouseleave touchstart touchmove enterfullscreen exitfullscreen", e => {
                      const t = l["controls"];
                      t && "enterfullscreen" === e.type && (t.pressed = !1, t.hover = !1);
                      let i = 0;
                      ["touchstart", "touchmove", "mousemove"].includes(e.type) && (T.toggleControls.call(a, !0), i = a.touch ? 3e3 : 2e3), clearTimeout(s.controls), s.controls = setTimeout(() => T.toggleControls.call(a, !1), i)
                  }), () => {
                      if (a.isVimeo && !a.config.vimeo.premium) {
                          const i = l.wrapper,
                              s = a.fullscreen["active"],
                              [n, r] = Ae.call(a),
                              o = _e(`aspect-ratio: ${n} / ` + r);
                          var e, t;
                          s ? ([t, e] = [Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0), Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)], t = n / r < t / e, o ? (i.style.width = t ? "auto" : "100%", i.style.height = t ? "100%" : "auto") : (i.style.maxWidth = t ? e / r * n + "px" : null, i.style.margin = t ? "0 auto" : null)) : o ? (i.style.width = null, i.style.height = null) : (i.style.maxWidth = null, i.style.margin = null)
                      }
                  }),
                  n = () => {
                      clearTimeout(s.resized), s.resized = setTimeout(i, 50)
                  };
              u.call(a, l.container, "enterfullscreen exitfullscreen", e => {
                  var t = a.fullscreen["target"];
                  t === l.container && (!a.isEmbed && v(a.config.ratio) || (i(), ("enterfullscreen" === e.type ? u : be).call(a, window, "resize", n)))
              })
          }), r(this, "media", () => {
              const i = this["player"],
                  s = i["elements"];
              if (u.call(i, i.media, "timeupdate seeking seeked", e => w.timeUpdate.call(i, e)), u.call(i, i.media, "durationchange loadeddata loadedmetadata", e => w.durationUpdate.call(i, e)), u.call(i, i.media, "ended", () => {
                      i.isHTML5 && i.isVideo && i.config.resetOnEnd && (i.restart(), i.pause())
                  }), u.call(i, i.media, "progress playing seeking seeked", e => w.updateProgress.call(i, e)), u.call(i, i.media, "volumechange", e => w.updateVolume.call(i, e)), u.call(i, i.media, "playing play pause ended emptied timeupdate", e => T.checkPlaying.call(i, e)), u.call(i, i.media, "waiting canplay seeked playing", e => T.checkLoading.call(i, e)), i.supported.ui && i.config.clickToPlay && !i.isAudio) {
                  const t = pe.call(i, "." + i.config.classNames.video);
                  if (!g(t)) return;
                  u.call(i, s.container, "click", e => {
                      ([s.container, t].includes(e.target) || t.contains(e.target)) && (i.touch && i.config.hideControls || (i.ended ? (this.proxy(e, i.restart, "restart"), this.proxy(e, () => {
                          xe(i.play())
                      }, "play")) : this.proxy(e, () => {
                          xe(i.togglePlay())
                      }, "play")))
                  })
              }
              i.supported.ui && i.config.disableContextMenu && u.call(i, s.wrapper, "contextmenu", e => {
                  e.preventDefault()
              }, !1), u.call(i, i.media, "volumechange", () => {
                  i.storage.set({
                      volume: i.volume,
                      muted: i.muted
                  })
              }), u.call(i, i.media, "ratechange", () => {
                  w.updateSetting.call(i, "speed"), i.storage.set({
                      speed: i.speed
                  })
              }), u.call(i, i.media, "qualitychange", e => {
                  w.updateSetting.call(i, "quality", null, e.detail.quality)
              }), u.call(i, i.media, "ready qualitychange", () => {
                  w.setDownloadUrl.call(i)
              });
              const t = i.config.events.concat(["keyup", "keydown"]).join(" ");
              u.call(i, i.media, t, e => {
                  let {
                      detail: t = {}
                  } = e;
                  "error" === e.type && (t = i.media.error), b.call(i, s.container, e.type, !0, t)
              })
          }), r(this, "proxy", (e, t, i) => {
              const s = this["player"],
                  n = s.config.listeners[i];
              let r = !0;
              W(n) && (r = n.call(s, e)), !1 !== r && W(t) && t.call(s, e)
          }), r(this, "bind", (e, t, i, s, n = !0) => {
              var r = this["player"],
                  o = r.config.listeners[s],
                  o = W(o);
              u.call(r, e, t, e => this.proxy(e, i, s), n && !o)
          }), r(this, "controls", () => {
              const o = this["player"],
                  s = o["elements"],
                  t = J.isIE ? "change" : "input";
              if (s.buttons.play && Array.from(s.buttons.play).forEach(e => {
                      this.bind(e, "click", () => {
                          xe(o.togglePlay())
                      }, "play")
                  }), this.bind(s.buttons.restart, "click", o.restart, "restart"), this.bind(s.buttons.rewind, "click", () => {
                      o.lastSeekTime = Date.now(), o.rewind()
                  }, "rewind"), this.bind(s.buttons.fastForward, "click", () => {
                      o.lastSeekTime = Date.now(), o.forward()
                  }, "fastForward"), this.bind(s.buttons.mute, "click", () => {
                      o.muted = !o.muted
                  }, "mute"), this.bind(s.buttons.captions, "click", () => o.toggleCaptions()), this.bind(s.buttons.download, "click", () => {
                      b.call(o, o.media, "download")
                  }, "download"), this.bind(s.buttons.fullscreen, "click", () => {
                      o.fullscreen.toggle()
                  }, "fullscreen"), this.bind(s.buttons.pip, "click", () => {
                      o.pip = "toggle"
                  }, "pip"), this.bind(s.buttons.airplay, "click", o.airplay, "airplay"), this.bind(s.buttons.settings, "click", e => {
                      e.stopPropagation(), e.preventDefault(), w.toggleMenu.call(o, e)
                  }, null, !1), this.bind(s.buttons.settings, "keyup", e => {
                      var t = e.which;
                      [13, 32].includes(t) && (13 !== t ? (e.preventDefault(), e.stopPropagation(), w.toggleMenu.call(o, e)) : w.focusFirstMenuItem.call(o, null, !0))
                  }, null, !1), this.bind(s.settings.menu, "keydown", e => {
                      27 === e.which && w.toggleMenu.call(o, e)
                  }), this.bind(s.inputs.seek, "mousedown mousemove", e => {
                      var t = s.progress.getBoundingClientRect(),
                          t = 100 / t.width * (e.pageX - t.left);
                      e.currentTarget.setAttribute("seek-value", t)
                  }), this.bind(s.inputs.seek, "mousedown mouseup keydown keyup touchstart touchend", e => {
                      const t = e.currentTarget,
                          i = e.keyCode || e.which,
                          s = "play-on-seeked";
                      var n;
                      G(e) && 39 !== i && 37 !== i || (o.lastSeekTime = Date.now(), n = t.hasAttribute(s), e = ["mouseup", "touchend", "keyup"].includes(e.type), n && e ? (t.removeAttribute(s), xe(o.play())) : !e && o.playing && (t.setAttribute(s, ""), o.pause()))
                  }), J.isIos) {
                  const s = he.call(o, 'input[type="range"]');
                  Array.from(s).forEach(e => this.bind(e, t, e => Z(e.target)))
              }
              this.bind(s.inputs.seek, t, e => {
                  const t = e.currentTarget;
                  let i = t.getAttribute("seek-value");
                  v(i) && (i = t.value), t.removeAttribute("seek-value"), o.currentTime = i / t.max * o.duration
              }, "seek"), this.bind(s.progress, "mouseenter mouseleave mousemove", e => w.updateSeekTooltip.call(o, e)), this.bind(s.progress, "mousemove touchmove", e => {
                  const t = o["previewThumbnails"];
                  t && t.loaded && t.startMove(e)
              }), this.bind(s.progress, "mouseleave touchend click", () => {
                  const e = o["previewThumbnails"];
                  e && e.loaded && e.endMove(!1, !0)
              }), this.bind(s.progress, "mousedown touchstart", e => {
                  const t = o["previewThumbnails"];
                  t && t.loaded && t.startScrubbing(e)
              }), this.bind(s.progress, "mouseup touchend", e => {
                  const t = o["previewThumbnails"];
                  t && t.loaded && t.endScrubbing(e)
              }), J.isWebkit && Array.from(he.call(o, 'input[type="range"]')).forEach(e => {
                  this.bind(e, "input", e => w.updateRangeFill.call(o, e.target))
              }), o.config.toggleInvert && !g(s.display.duration) && this.bind(s.display.currentTime, "click", () => {
                  0 !== o.currentTime && (o.config.invertTime = !o.config.invertTime, w.timeUpdate.call(o))
              }), this.bind(s.inputs.volume, t, e => {
                  o.volume = e.target.value
              }, "volume"), this.bind(s.controls, "mouseenter mouseleave", e => {
                  s.controls.hover = !o.touch && "mouseenter" === e.type
              }), s.fullscreen && Array.from(s.fullscreen.children).filter(e => !e.contains(s.container)).forEach(e => {
                  this.bind(e, "mouseenter mouseleave", e => {
                      s.controls.hover = !o.touch && "mouseenter" === e.type
                  })
              }), this.bind(s.controls, "mousedown mouseup touchstart touchend touchcancel", e => {
                  s.controls.pressed = ["mousedown", "touchstart"].includes(e.type)
              }), this.bind(s.controls, "focusin", () => {
                  const {
                      config: e,
                      timers: t
                  } = o;
                  a(s.controls, e.classNames.noTransition, !0), T.toggleControls.call(o, !0), setTimeout(() => {
                      a(s.controls, e.classNames.noTransition, !1)
                  }, 0);
                  var i = this.touch ? 3e3 : 4e3;
                  clearTimeout(t.controls), t.controls = setTimeout(() => T.toggleControls.call(o, !1), i)
              }), this.bind(s.inputs.volume, "wheel", e => {
                  const t = e.webkitDirectionInvertedFromDevice,
                      [i, s] = [e.deltaX, -e.deltaY].map(e => t ? -e : e),
                      n = Math.sign(Math.abs(i) > Math.abs(s) ? i : s);
                  o.increaseVolume(n / 50);
                  var r = o.media["volume"];
                  (1 === n && r < 1 || -1 === n && 0 < r) && e.preventDefault()
              }, "volume", !1)
          }), this.player = e, this.lastKey = null, this.focusTimer = null, this.lastKeyDown = null, this.handleKey = this.handleKey.bind(this), this.toggleMenu = this.toggleMenu.bind(this), this.setTabFocus = this.setTabFocus.bind(this), this.firstTouch = this.firstTouch.bind(this)
      }
      handleKey(e) {
          const t = this["player"],
              i = t["elements"],
              s = e.keyCode || e.which,
              n = "keydown" === e.type,
              r = n && s === this.lastKey;
          if (!(e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) && q(s))
              if (n) {
                  const n = document.activeElement;
                  if (g(n)) {
                      const s = t.config.selectors["editable"],
                          r = i.inputs["seek"];
                      if (n !== r && ue(n, s)) return;
                      if (32 === e.which && ue(n, 'button, [role^="menuitem"]')) return
                  }
                  switch ([32, 37, 38, 39, 40, 48, 49, 50, 51, 52, 53, 54, 56, 57, 67, 70, 73, 75, 76, 77, 79].includes(s) && (e.preventDefault(), e.stopPropagation()), s) {
                      case 48:
                      case 49:
                      case 50:
                      case 51:
                      case 52:
                      case 53:
                      case 54:
                      case 55:
                      case 56:
                      case 57:
                          r || (t.currentTime = t.duration / 10 * (s - 48));
                          break;
                      case 32:
                      case 75:
                          r || xe(t.togglePlay());
                          break;
                      case 38:
                          t.increaseVolume(.1);
                          break;
                      case 40:
                          t.decreaseVolume(.1);
                          break;
                      case 77:
                          r || (t.muted = !t.muted);
                          break;
                      case 39:
                          t.forward();
                          break;
                      case 37:
                          t.rewind();
                          break;
                      case 70:
                          t.fullscreen.toggle();
                          break;
                      case 67:
                          r || t.toggleCaptions();
                          break;
                      case 76:
                          t.loop = !t.loop
                  }
                  27 === s && !t.fullscreen.usingNative && t.fullscreen.active && t.fullscreen.toggle(), this.lastKey = s
              } else this.lastKey = null
      }
      toggleMenu(e) {
          w.toggleMenu.call(this.player, e)
      }
  }
  var Je, et = function() {
      var p = function() {},
          o = {},
          d = {},
          u = {};

      function a(e, t) {
          if (e) {
              var i = u[e];
              if (d[e] = t, i)
                  for (; i.length;) i[0](e, t), i.splice(0, 1)
          }
      }

      function h(e, t) {
          e.call && (e = {
              success: e
          }), t.length ? (e.error || p)(t) : (e.success || p)(e)
      }

      function l(e, s, t) {
          for (var n = (e = e.push ? e : [e]).length, i = n, r = [], o = function(e, t, i) {
                  if ("e" == t && r.push(e), "b" == t) {
                      if (!i) return;
                      r.push(e)
                  }--n || s(r)
              }, a = 0; a < i; a++) ! function d(i, s, n, r) {
              var o, a, e = document,
                  t = n.async,
                  u = (n.numRetries || 0) + 1,
                  h = n.before || p,
                  l = i.replace(/[\?|#].*$/, ""),
                  c = i.replace(/^(css|img)!/, "");
              r = r || 0, /(^css!|\.css$)/.test(l) ? ((a = e.createElement("link")).rel = "stylesheet", a.href = c, (o = "hideFocus" in a) && a.relList && (o = 0, a.rel = "preload", a.as = "style")) : /(^img!|\.(png|gif|jpg|svg|webp)$)/.test(l) ? (a = e.createElement("img")).src = c : ((a = e.createElement("script")).src = i, a.async = void 0 === t || t), a.onload = a.onerror = a.onbeforeload = function(e) {
                  var t = e.type[0];
                  if (o) try {
                      a.sheet.cssText.length || (t = "e")
                  } catch (e) {
                      18 != e.code && (t = "e")
                  }
                  if ("e" == t) {
                      if ((r += 1) < u) return d(i, s, n, r)
                  } else if ("preload" == a.rel && "style" == a.as) return a.rel = "stylesheet";
                  s(i, t, e.defaultPrevented)
              }, !1 !== h(i, a) && e.head.appendChild(a)
          }(e[a], o, t)
      }

      function m(e, t, i) {
          var s, n;
          if (t && t.trim && (s = t), n = (s ? i : t) || {}, s) {
              if (s in o) throw "LoadJS";
              o[s] = !0
          }

          function r(t, i) {
              l(e, function(e) {
                  h(n, e), t && h({
                      success: t,
                      error: i
                  }, e), a(s, e)
              }, n)
          }
          if (n.returnPromise) return new Promise(r);
          r()
      }
      return m.ready = function(e, t) {
          var i = e,
              s = function(e) {
                  h(t, e)
              };
          i = i.push ? i : [i];
          for (var n, r, o = [], a = i.length, l = a, c = function(e, t) {
                  t.length && o.push(e), --l || s(o)
              }; a--;) n = i[a], (r = d[n]) ? c(n, r) : (u[n] = u[n] || []).push(c);
          return m
      }, m.done = function(e) {
          a(e, [])
      }, m.reset = function() {
          o = {}, d = {}, u = {}
      }, m.isDefined = function(e) {
          return e in o
      }, m
  }();

  function tt(i) {
      return new Promise((e, t) => {
          et(i, {
              success: e,
              error: t
          })
      })
  }

  function it(e) {
      e && !this.embed.hasPlayed && (this.embed.hasPlayed = !0), this.media.paused === e && (this.media.paused = !e, b.call(this, this.media, e ? "play" : "pause"))
  }
  const st = {
      setup() {
          const t = this;
          a(t.elements.wrapper, t.config.classNames.embed, !0), t.options.speed = t.config.speed.options, Me.call(t), H(window.Vimeo) ? st.ready.call(t) : tt(t.config.urls.vimeo.sdk).then(() => {
              st.ready.call(t)
          }).catch(e => {
              t.debug.warn("Vimeo SDK (player.js) failed to load", e)
          })
      },
      ready() {
          const o = this,
              e = o.config.vimeo,
              {
                  premium: t,
                  referrerPolicy: i,
                  ...s
              } = e;
          t && Object.assign(s, {
              controls: !1,
              sidedock: !1
          });
          var d = We({
              loop: o.config.loop.active,
              autoplay: o.autoplay,
              muted: o.muted,
              gesture: "media",
              playsinline: !this.config.fullscreen.iosNative,
              ...s
          });
          let n = o.media.getAttribute("src");
          v(n) && (n = o.media.getAttribute(o.config.attributes.embed.id));
          var r = v(r = n) ? null : !q(Number(r)) && r.match(/^.*(vimeo.com\/|video\/)(\d+).*/) ? RegExp.$2 : r;
          const a = y("iframe"),
              l = Ie(o.config.urls.vimeo.iframe, r, d);
          if (a.setAttribute("src", l), a.setAttribute("allowfullscreen", ""), a.setAttribute("allow", ["autoplay", "fullscreen", "picture-in-picture", "encrypted-media", "accelerometer", "gyroscope"].join("; ")), v(i) || a.setAttribute("referrerPolicy", i), t || !e.customControls) a.setAttribute("data-poster", o.poster), o.media = ae(a, o.media);
          else {
              const e = y("div", {
                  class: o.config.classNames.embedContainer,
                  "data-poster": o.poster
              });
              e.appendChild(a), o.media = ae(e, o.media)
          }
          e.customControls || Fe(Ie(o.config.urls.vimeo.api, l)).then(e => {
              !v(e) && e.thumbnail_url && T.setPoster.call(o, e.thumbnail_url).catch(() => {})
          }), o.embed = new window.Vimeo.Player(a, {
              autopause: o.config.autopause,
              muted: o.muted
          }), o.media.paused = !0, o.media.currentTime = 0, o.supported.ui && o.embed.disableTextTrack(), o.media.play = () => (it.call(o, !0), o.embed.play()), o.media.pause = () => (it.call(o, !1), o.embed.pause()), o.media.stop = () => {
              o.pause(), o.currentTime = 0
          };
          let c = o.media["currentTime"],
              u = (Object.defineProperty(o.media, "currentTime", {
                  get: () => c,
                  set(e) {
                      const {
                          embed: t,
                          media: i,
                          paused: s,
                          volume: n
                      } = o, r = s && !t.hasPlayed;
                      i.seeking = !0, b.call(o, i, "seeking"), Promise.resolve(r && t.setVolume(0)).then(() => t.setCurrentTime(e)).then(() => r && t.pause()).then(() => r && t.setVolume(n)).catch(() => {})
                  }
              }), o.config.speed.selected),
              h = (Object.defineProperty(o.media, "playbackRate", {
                  get: () => u,
                  set(e) {
                      o.embed.setPlaybackRate(e).then(() => {
                          u = e, b.call(o, o.media, "ratechange")
                      }).catch(() => {
                          o.options.speed = [1]
                      })
                  }
              }), o.config)["volume"],
              p = (Object.defineProperty(o.media, "volume", {
                  get: () => h,
                  set(e) {
                      o.embed.setVolume(e).then(() => {
                          h = e, b.call(o, o.media, "volumechange")
                      })
                  }
              }), o.config)["muted"];
          Object.defineProperty(o.media, "muted", {
              get: () => p,
              set(e) {
                  const t = !!R(e) && e;
                  o.embed.setVolume(t ? 0 : o.config.volume).then(() => {
                      p = t, b.call(o, o.media, "volumechange")
                  })
              }
          });
          let m, f = o.config["loop"];
          Object.defineProperty(o.media, "loop", {
              get: () => f,
              set(e) {
                  const t = R(e) ? e : o.config.loop.active;
                  o.embed.setLoop(t).then(() => {
                      f = t
                  })
              }
          }), o.embed.getVideoUrl().then(e => {
              m = e, w.setDownloadUrl.call(o)
          }).catch(e => {
              this.debug.warn(e)
          }), Object.defineProperty(o.media, "currentSrc", {
              get: () => m
          }), Object.defineProperty(o.media, "ended", {
              get: () => o.currentTime === o.duration
          }), Promise.all([o.embed.getVideoWidth(), o.embed.getVideoHeight()]).then(e => {
              var [e, t] = e;
              o.embed.ratio = Pe(e, t), Me.call(this)
          }), o.embed.setAutopause(o.config.autopause).then(e => {
              o.config.autopause = e
          }), o.embed.getVideoTitle().then(e => {
              o.config.title = e, T.setTitle.call(this)
          }), o.embed.getCurrentTime().then(e => {
              c = e, b.call(o, o.media, "timeupdate")
          }), o.embed.getDuration().then(e => {
              o.media.duration = e, b.call(o, o.media, "durationchange")
          }), o.embed.getTextTracks().then(e => {
              o.media.textTracks = e, x.setup.call(o)
          }), o.embed.on("cuechange", ({
              cues: e = []
          }) => {
              e = e.map(e => {
                  {
                      e = e.text;
                      const t = document.createDocumentFragment(),
                          i = document.createElement("div");
                      return t.appendChild(i), i.innerHTML = e, t.firstChild.innerText
                  }
              });
              x.updateCues.call(o, e)
          }), o.embed.on("loaded", () => {
              o.embed.getPaused().then(e => {
                  it.call(o, !e), e || b.call(o, o.media, "playing")
              }), g(o.embed.element) && o.supported.ui && o.embed.element.setAttribute("tabindex", -1)
          }), o.embed.on("bufferstart", () => {
              b.call(o, o.media, "waiting")
          }), o.embed.on("bufferend", () => {
              b.call(o, o.media, "playing")
          }), o.embed.on("play", () => {
              it.call(o, !0), b.call(o, o.media, "playing")
          }), o.embed.on("pause", () => {
              it.call(o, !1)
          }), o.embed.on("timeupdate", e => {
              o.media.seeking = !1, c = e.seconds, b.call(o, o.media, "timeupdate")
          }), o.embed.on("progress", e => {
              o.media.buffered = e.percent, b.call(o, o.media, "progress"), 1 === parseInt(e.percent, 10) && b.call(o, o.media, "canplaythrough"), o.embed.getDuration().then(e => {
                  e !== o.media.duration && (o.media.duration = e, b.call(o, o.media, "durationchange"))
              })
          }), o.embed.on("seeked", () => {
              o.media.seeking = !1, b.call(o, o.media, "seeked")
          }), o.embed.on("ended", () => {
              o.media.paused = !0, b.call(o, o.media, "ended")
          }), o.embed.on("error", e => {
              o.media.error = e, b.call(o, o.media, "error")
          }), e.customControls && setTimeout(() => T.build.call(o), 0)
      }
  };

  function nt(e) {
      e && !this.embed.hasPlayed && (this.embed.hasPlayed = !0), this.media.paused === e && (this.media.paused = !e, b.call(this, this.media, e ? "play" : "pause"))
  }
  const rt = {
          setup() {
              if (a(this.elements.wrapper, this.config.classNames.embed, !0), H(window.YT) && W(window.YT.Player)) rt.ready.call(this);
              else {
                  const e = window.onYouTubeIframeAPIReady;
                  window.onYouTubeIframeAPIReady = () => {
                      W(e) && e(), rt.ready.call(this)
                  }, tt(this.config.urls.youtube.sdk).catch(e => {
                      this.debug.warn("YouTube API failed to load", e)
                  })
              }
          },
          getTitle(e) {
              Fe(Ie(this.config.urls.youtube.api, e)).then(e => {
                  var t, i;
                  H(e) && ({
                      title: e,
                      height: t,
                      width: i
                  } = e, this.config.title = e, T.setTitle.call(this), this.embed.ratio = Pe(i, t)), Me.call(this)
              }).catch(() => {
                  Me.call(this)
              })
          },
          ready() {
              const r = this,
                  o = r.config.youtube,
                  e = r.media && r.media.getAttribute("id");
              if (v(e) || !e.startsWith("youtube-")) {
                  let e = r.media.getAttribute("src");
                  v(e) && (e = r.media.getAttribute(this.config.attributes.embed.id));
                  const a = v(t = e) ? null : t.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/) ? RegExp.$2 : t;
                  var t = y("div", {
                      id: r.provider + "-" + Math.floor(1e4 * Math.random()),
                      "data-poster": o.customControls ? r.poster : void 0
                  });
                  if (r.media = ae(t, r.media), o.customControls) {
                      const o = e => `https://i.ytimg.com/vi/${a}/${e}default.jpg`;
                      Ke(o("maxres"), 121).catch(() => Ke(o("sd"), 121)).catch(() => Ke(o("hq"))).then(e => T.setPoster.call(r, e.src)).then(e => {
                          e.includes("maxres") || (r.elements.poster.style.backgroundSize = "cover")
                      }).catch(() => {})
                  }
                  r.embed = new window.YT.Player(r.media, {
                      videoId: a,
                      host: o.noCookie ? "https://www.youtube-nocookie.com" : "http:" === window.location.protocol ? "http://www.youtube.com" : void 0,
                      playerVars: te({}, {
                          autoplay: r.config.autoplay ? 1 : 0,
                          hl: r.config.hl,
                          controls: r.supported.ui && o.customControls ? 0 : 1,
                          disablekb: 1,
                          playsinline: r.config.fullscreen.iosNative ? 0 : 1,
                          cc_load_policy: r.captions.active ? 1 : 0,
                          cc_lang_pref: r.config.captions.language,
                          widget_referrer: window ? window.location.href : null
                      }, o),
                      events: {
                          onError(e) {
                              var t;
                              r.media.error || (t = {
                                  2: "The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.",
                                  5: "The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.",
                                  100: "The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.",
                                  101: "The owner of the requested video does not allow it to be played in embedded players.",
                                  150: "The owner of the requested video does not allow it to be played in embedded players."
                              } [e = e.data] || "An unknown error occured", r.media.error = {
                                  code: e,
                                  message: t
                              }, b.call(r, r.media, "error"))
                          },
                          onPlaybackRateChange(e) {
                              const t = e.target;
                              r.media.playbackRate = t.getPlaybackRate(), b.call(r, r.media, "ratechange")
                          },
                          onReady(e) {
                              if (!W(r.media.play)) {
                                  const s = e.target;
                                  rt.getTitle.call(r, a), r.media.play = () => {
                                      nt.call(r, !0), s.playVideo()
                                  }, r.media.pause = () => {
                                      nt.call(r, !1), s.pauseVideo()
                                  }, r.media.stop = () => {
                                      s.stopVideo()
                                  }, r.media.duration = s.getDuration(), r.media.paused = !0, r.media.currentTime = 0, Object.defineProperty(r.media, "currentTime", {
                                      get: () => Number(s.getCurrentTime()),
                                      set(e) {
                                          r.paused && !r.embed.hasPlayed && r.embed.mute(), r.media.seeking = !0, b.call(r, r.media, "seeking"), s.seekTo(e)
                                      }
                                  }), Object.defineProperty(r.media, "playbackRate", {
                                      get: () => s.getPlaybackRate(),
                                      set(e) {
                                          s.setPlaybackRate(e)
                                      }
                                  });
                                  let t = r.config["volume"],
                                      i = (Object.defineProperty(r.media, "volume", {
                                          get: () => t,
                                          set(e) {
                                              t = e, s.setVolume(100 * t), b.call(r, r.media, "volumechange")
                                          }
                                      }), r.config)["muted"];
                                  Object.defineProperty(r.media, "muted", {
                                      get: () => i,
                                      set(e) {
                                          e = R(e) ? e : i;
                                          i = e, s[e ? "mute" : "unMute"](), s.setVolume(100 * t), b.call(r, r.media, "volumechange")
                                      }
                                  }), Object.defineProperty(r.media, "currentSrc", {
                                      get: () => s.getVideoUrl()
                                  }), Object.defineProperty(r.media, "ended", {
                                      get: () => r.currentTime === r.duration
                                  });
                                  const n = s.getAvailablePlaybackRates();
                                  r.options.speed = n.filter(e => r.config.speed.options.includes(e)), r.supported.ui && o.customControls && r.media.setAttribute("tabindex", -1), b.call(r, r.media, "timeupdate"), b.call(r, r.media, "durationchange"), clearInterval(r.timers.buffering), r.timers.buffering = setInterval(() => {
                                      r.media.buffered = s.getVideoLoadedFraction(), (null === r.media.lastBuffered || r.media.lastBuffered < r.media.buffered) && b.call(r, r.media, "progress"), r.media.lastBuffered = r.media.buffered, 1 === r.media.buffered && (clearInterval(r.timers.buffering), b.call(r, r.media, "canplaythrough"))
                                  }, 200), o.customControls && setTimeout(() => T.build.call(r), 50)
                              }
                          },
                          onStateChange(e) {
                              const t = e.target;
                              switch (clearInterval(r.timers.playing), r.media.seeking && [1, 2].includes(e.data) && (r.media.seeking = !1, b.call(r, r.media, "seeked")), e.data) {
                                  case -1:
                                      b.call(r, r.media, "timeupdate"), r.media.buffered = t.getVideoLoadedFraction(), b.call(r, r.media, "progress");
                                      break;
                                  case 0:
                                      nt.call(r, !1), r.media.loop ? (t.stopVideo(), t.playVideo()) : b.call(r, r.media, "ended");
                                      break;
                                  case 1:
                                      o.customControls && !r.config.autoplay && r.media.paused && !r.embed.hasPlayed ? r.media.pause() : (nt.call(r, !0), b.call(r, r.media, "playing"), r.timers.playing = setInterval(() => {
                                          b.call(r, r.media, "timeupdate")
                                      }, 50), r.media.duration !== t.getDuration() && (r.media.duration = t.getDuration(), b.call(r, r.media, "durationchange")));
                                      break;
                                  case 2:
                                      r.muted || r.embed.unMute(), nt.call(r, !1);
                                      break;
                                  case 3:
                                      b.call(r, r.media, "waiting")
                              }
                              b.call(r, r.elements.container, "statechange", !1, {
                                  code: e.data
                              })
                          }
                      }
                  })
              }
          }
      },
      ot = {
          setup() {
              this.media ? (a(this.elements.container, this.config.classNames.type.replace("{0}", this.type), !0), a(this.elements.container, this.config.classNames.provider.replace("{0}", this.provider), !0), this.isEmbed && a(this.elements.container, this.config.classNames.type.replace("{0}", "video"), !0), this.isVideo && (this.elements.wrapper = y("div", {
                  class: this.config.classNames.video
              }), ie(this.media, this.elements.wrapper), this.elements.poster = y("div", {
                  class: this.config.classNames.poster
              }), this.elements.wrapper.appendChild(this.elements.poster)), this.isHTML5 ? Oe.setup.call(this) : this.isYouTube ? rt.setup.call(this) : this.isVimeo && st.setup.call(this)) : this.debug.warn("No media element found!")
          }
      };
  class at {
      constructor(e) {
          r(this, "load", () => {
              this.enabled && (H(window.google) && H(window.google.ima) ? this.ready() : tt(this.player.config.urls.googleIMA.sdk).then(() => {
                  this.ready()
              }).catch(() => {
                  this.trigger("error", new Error("Google IMA SDK failed to load"))
              }))
          }), r(this, "ready", () => {
              this.enabled || (this.manager && this.manager.destroy(), this.elements.displayContainer && this.elements.displayContainer.destroy(), this.elements.container.remove()), this.startSafetyTimer(12e3, "ready()"), this.managerPromise.then(() => {
                  this.clearSafetyTimer("onAdsManagerLoaded()")
              }), this.listeners(), this.setupIMA()
          }), r(this, "setupIMA", () => {
              this.elements.container = y("div", {
                  class: this.player.config.classNames.ads
              }), this.player.elements.container.appendChild(this.elements.container), google.ima.settings.setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.ENABLED), google.ima.settings.setLocale(this.player.config.ads.language), google.ima.settings.setDisableCustomPlaybackForIOS10Plus(this.player.config.playsinline), this.elements.displayContainer = new google.ima.AdDisplayContainer(this.elements.container, this.player.media), this.loader = new google.ima.AdsLoader(this.elements.displayContainer), this.loader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, e => this.onAdsManagerLoaded(e), !1), this.loader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, e => this.onAdError(e), !1), this.requestAds()
          }), r(this, "requestAds", () => {
              var e = this.player.elements["container"];
              try {
                  const t = new google.ima.AdsRequest;
                  t.adTagUrl = this.tagUrl, t.linearAdSlotWidth = e.offsetWidth, t.linearAdSlotHeight = e.offsetHeight, t.nonLinearAdSlotWidth = e.offsetWidth, t.nonLinearAdSlotHeight = e.offsetHeight, t.forceNonLinearFullSlot = !1, t.setAdWillPlayMuted(!this.player.muted), this.loader.requestAds(t)
              } catch (e) {
                  this.onAdError(e)
              }
          }), r(this, "pollCountdown", (e = !1) => e ? void(this.countdownTimer = setInterval(() => {
              var e = Be(Math.max(this.manager.getRemainingTime(), 0)),
                  e = De.get("advertisement", this.player.config) + " - " + e;
              this.elements.container.setAttribute("data-badge-text", e)
          }, 100)) : (clearInterval(this.countdownTimer), void this.elements.container.removeAttribute("data-badge-text"))), r(this, "onAdsManagerLoaded", e => {
              if (this.enabled) {
                  const t = new google.ima.AdsRenderingSettings;
                  t.restoreCustomPlaybackStateOnAdBreakComplete = !0, t.enablePreloading = !0, this.manager = e.getAdsManager(this.player, t), this.cuePoints = this.manager.getCuePoints(), this.manager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, e => this.onAdError(e)), Object.keys(google.ima.AdEvent.Type).forEach(e => {
                      this.manager.addEventListener(google.ima.AdEvent.Type[e], e => this.onAdEvent(e))
                  }), this.trigger("loaded")
              }
          }), r(this, "addCuePoints", () => {
              v(this.cuePoints) || this.cuePoints.forEach(e => {
                  if (0 !== e && -1 !== e && e < this.player.duration) {
                      const t = this.player.elements.progress;
                      if (g(t)) {
                          const i = 100 / this.player.duration * e,
                              s = y("span", {
                                  class: this.player.config.classNames.cues
                              });
                          s.style.left = i.toString() + "%", t.appendChild(s)
                      }
                  }
              })
          }), r(this, "onAdEvent", e => {
              const t = this.player.elements["container"],
                  i = e.getAd(),
                  s = e.getAdData();
              switch (n = e.type, b.call(this.player, this.player.media, "ads" + n.replace(/_/g, "").toLowerCase()), e.type) {
                  case google.ima.AdEvent.Type.LOADED:
                      this.trigger("loaded"), this.pollCountdown(!0), i.isLinear() || (i.width = t.offsetWidth, i.height = t.offsetHeight);
                      break;
                  case google.ima.AdEvent.Type.STARTED:
                      this.manager.setVolume(this.player.volume);
                      break;
                  case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:
                      this.player.ended ? this.loadAds() : this.loader.contentComplete();
                      break;
                  case google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED:
                      this.pauseContent();
                      break;
                  case google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED:
                      this.pollCountdown(), this.resumeContent();
                      break;
                  case google.ima.AdEvent.Type.LOG:
                      s.adError && this.player.debug.warn("Non-fatal ad error: " + s.adError.getMessage())
              }
              var n
          }), r(this, "onAdError", e => {
              this.cancel(), this.player.debug.warn("Ads error", e)
          }), r(this, "listeners", () => {
              const e = this.player.elements["container"];
              let s;
              this.player.on("canplay", () => {
                  this.addCuePoints()
              }), this.player.on("ended", () => {
                  this.loader.contentComplete()
              }), this.player.on("timeupdate", () => {
                  s = this.player.currentTime
              }), this.player.on("seeked", () => {
                  const i = this.player.currentTime;
                  v(this.cuePoints) || this.cuePoints.forEach((e, t) => {
                      s < e && e < i && (this.manager.discardAdBreak(), this.cuePoints.splice(t, 1))
                  })
              }), window.addEventListener("resize", () => {
                  this.manager && this.manager.resize(e.offsetWidth, e.offsetHeight, google.ima.ViewMode.NORMAL)
              })
          }), r(this, "play", () => {
              const e = this.player.elements["container"];
              this.managerPromise || this.resumeContent(), this.managerPromise.then(() => {
                  this.manager.setVolume(this.player.volume), this.elements.displayContainer.initialize();
                  try {
                      this.initialized || (this.manager.init(e.offsetWidth, e.offsetHeight, google.ima.ViewMode.NORMAL), this.manager.start()), this.initialized = !0
                  } catch (e) {
                      this.onAdError(e)
                  }
              }).catch(() => {})
          }), r(this, "resumeContent", () => {
              this.elements.container.style.zIndex = "", this.playing = !1, xe(this.player.media.play())
          }), r(this, "pauseContent", () => {
              this.elements.container.style.zIndex = 3, this.playing = !0, this.player.media.pause()
          }), r(this, "cancel", () => {
              this.initialized && this.resumeContent(), this.trigger("error"), this.loadAds()
          }), r(this, "loadAds", () => {
              this.managerPromise.then(() => {
                  this.manager && this.manager.destroy(), this.managerPromise = new Promise(e => {
                      this.on("loaded", e), this.player.debug.log(this.manager)
                  }), this.initialized = !1, this.requestAds()
              }).catch(() => {})
          }), r(this, "trigger", (e, ...t) => {
              const i = this.events[e];
              Y(i) && i.forEach(e => {
                  W(e) && e.apply(this, t)
              })
          }), r(this, "on", (e, t) => (Y(this.events[e]) || (this.events[e] = []), this.events[e].push(t), this)), r(this, "startSafetyTimer", (e, t) => {
              this.player.debug.log("Safety timer invoked from: " + t), this.safetyTimer = setTimeout(() => {
                  this.cancel(), this.clearSafetyTimer("startSafetyTimer()")
              }, e)
          }), r(this, "clearSafetyTimer", e => {
              F(this.safetyTimer) || (this.player.debug.log("Safety timer cleared from: " + e), clearTimeout(this.safetyTimer), this.safetyTimer = null)
          }), this.player = e, this.config = e.config.ads, this.playing = !1, this.initialized = !1, this.elements = {
              container: null,
              displayContainer: null
          }, this.manager = null, this.loader = null, this.cuePoints = null, this.events = {}, this.safetyTimer = null, this.countdownTimer = null, this.managerPromise = new Promise((e, t) => {
              this.on("loaded", e), this.on("error", t)
          }), this.load()
      }
      get enabled() {
          var e = this["config"];
          return this.player.isHTML5 && this.player.isVideo && e.enabled && (!v(e.publisherId) || Q(e.tagUrl))
      }
      get tagUrl() {
          var e = this["config"];
          return Q(e.tagUrl) ? e.tagUrl : "https://go.aniview.com/api/adserver6/vast/?" + We({
              AV_PUBLISHERID: "58c25bb0073ef448b1087ad6",
              AV_CHANNELID: "5a0458dc28a06145e4519d21",
              AV_URL: window.location.hostname,
              cb: Date.now(),
              AV_WIDTH: 640,
              AV_HEIGHT: 480,
              AV_CDIM2: e.publisherId
          })
      }
  }
  const lt = (e, t) => {
      const i = {};
      return e > t.width / t.height ? (i.width = t.width, i.height = 1 / e * t.width) : (i.height = t.height, i.width = e * t.height), i
  };
  class ct {
      constructor(e) {
          r(this, "load", () => {
              this.player.elements.display.seekTooltip && (this.player.elements.display.seekTooltip.hidden = this.enabled), this.enabled && this.getThumbnails().then(() => {
                  this.enabled && (this.render(), this.determineContainerAutoSizing(), this.loaded = !0)
              })
          }), r(this, "getThumbnails", () => new Promise(e => {
              const t = this.player.config.previewThumbnails["src"];
              if (v(t)) throw new Error("Missing previewThumbnails.src config attribute");
              const i = () => {
                  this.thumbnails.sort((e, t) => e.height - t.height), this.player.debug.log("Preview thumbnails", this.thumbnails), e()
              };
              if (W(t)) t(e => {
                  this.thumbnails = e, i()
              });
              else {
                  const e = (B(t) ? [t] : t).map(e => this.getThumbnail(e));
                  Promise.all(e).then(i)
              }
          })), r(this, "getThumbnail", n => new Promise(s => {
              Fe(n).then(e => {
                  const t = {
                          frames: (e => {
                              const t = [];
                              return e.split(/\r\n\r\n|\n\n|\r\r/).forEach(e => {
                                  const i = {};
                                  e.split(/\r\n|\n|\r/).forEach(e => {
                                      if (q(i.startTime)) {
                                          if (!v(e.trim()) && v(i.text)) {
                                              const t = e.trim().split("#xywh=");
                                              [i.text] = t, t[1] && ([i.x, i.y, i.w, i.h] = t[1].split(","))
                                          }
                                      } else {
                                          e = e.match(/([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})( ?--> ?)([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})/);
                                          e && (i.startTime = 60 * Number(e[1] || 0) * 60 + 60 * Number(e[2]) + Number(e[3]) + Number("0." + e[4]), i.endTime = 60 * Number(e[6] || 0) * 60 + 60 * Number(e[7]) + Number(e[8]) + Number("0." + e[9]))
                                      }
                                  }), i.text && t.push(i)
                              }), t
                          })(e),
                          height: null,
                          urlPrefix: ""
                      },
                      i = (t.frames[0].text.startsWith("/") || t.frames[0].text.startsWith("http://") || t.frames[0].text.startsWith("https://") || (t.urlPrefix = n.substring(0, n.lastIndexOf("/") + 1)), new Image);
                  i.onload = () => {
                      t.height = i.naturalHeight, t.width = i.naturalWidth, this.thumbnails.push(t), s()
                  }, i.src = t.urlPrefix + t.frames[0].text
              })
          })), r(this, "startMove", e => {
              var t;
              this.loaded && V(e) && ["touchmove", "mousemove"].includes(e.type) && this.player.media.duration && ("touchmove" === e.type ? this.seekTime = this.player.media.duration * (this.player.elements.inputs.seek.value / 100) : (t = 100 / (t = this.player.elements.progress.getBoundingClientRect()).width * (e.pageX - t.left), this.seekTime = this.player.media.duration * (t / 100), this.seekTime < 0 && (this.seekTime = 0), this.seekTime > this.player.media.duration - 1 && (this.seekTime = this.player.media.duration - 1), this.mousePosX = e.pageX, this.elements.thumb.time.innerText = Be(this.seekTime)), this.showImageAtCurrentTime())
          }), r(this, "endMove", () => {
              this.toggleThumbContainer(!1, !0)
          }), r(this, "startScrubbing", e => {
              !F(e.button) && !1 !== e.button && 0 !== e.button || (this.mouseDown = !0, this.player.media.duration && (this.toggleScrubbingContainer(!0), this.toggleThumbContainer(!1, !0), this.showImageAtCurrentTime()))
          }), r(this, "endScrubbing", () => {
              this.mouseDown = !1, Math.ceil(this.lastTime) === Math.ceil(this.player.media.currentTime) ? this.toggleScrubbingContainer(!1) : we.call(this.player, this.player.media, "timeupdate", () => {
                  this.mouseDown || this.toggleScrubbingContainer(!1)
              })
          }), r(this, "listeners", () => {
              this.player.on("play", () => {
                  this.toggleThumbContainer(!1, !0)
              }), this.player.on("seeked", () => {
                  this.toggleThumbContainer(!1)
              }), this.player.on("timeupdate", () => {
                  this.lastTime = this.player.media.currentTime
              })
          }), r(this, "render", () => {
              this.elements.thumb.container = y("div", {
                  class: this.player.config.classNames.previewThumbnails.thumbContainer
              }), this.elements.thumb.imageContainer = y("div", {
                  class: this.player.config.classNames.previewThumbnails.imageContainer
              }), this.elements.thumb.container.appendChild(this.elements.thumb.imageContainer);
              const e = y("div", {
                  class: this.player.config.classNames.previewThumbnails.timeContainer
              });
              this.elements.thumb.time = y("span", {}, "00:00"), e.appendChild(this.elements.thumb.time), this.elements.thumb.container.appendChild(e), g(this.player.elements.progress) && this.player.elements.progress.appendChild(this.elements.thumb.container), this.elements.scrubbing.container = y("div", {
                  class: this.player.config.classNames.previewThumbnails.scrubbingContainer
              }), this.player.elements.wrapper.appendChild(this.elements.scrubbing.container)
          }), r(this, "destroy", () => {
              this.elements.thumb.container && this.elements.thumb.container.remove(), this.elements.scrubbing.container && this.elements.scrubbing.container.remove()
          }), r(this, "showImageAtCurrentTime", () => {
              this.mouseDown ? this.setScrubbingContainerSize() : this.setThumbContainerSizeAndPos();
              const i = this.thumbnails[0].frames.findIndex(e => this.seekTime >= e.startTime && this.seekTime <= e.endTime),
                  e = 0 <= i;
              let s = 0;
              this.mouseDown || this.toggleThumbContainer(e), e && (this.thumbnails.forEach((e, t) => {
                  this.loadedImages.includes(e.frames[i].text) && (s = t)
              }), i !== this.showingThumb && (this.showingThumb = i, this.loadImage(s)))
          }), r(this, "loadImage", (e = 0) => {
              const t = this.showingThumb,
                  i = this.thumbnails[e],
                  s = i["urlPrefix"],
                  n = i.frames[t],
                  r = i.frames[t].text,
                  o = s + r;
              if (this.currentImageElement && this.currentImageElement.dataset.filename === r) this.showImage(this.currentImageElement, n, e, t, r, !1), this.currentImageElement.dataset.index = t, this.removeOldImages(this.currentImageElement);
              else {
                  this.loadingImage && this.usingSprites && (this.loadingImage.onload = null);
                  const i = new Image;
                  i.src = o, i.dataset.index = t, i.dataset.filename = r, this.showingThumbFilename = r, this.player.debug.log("Loading image: " + o), i.onload = () => this.showImage(i, n, e, t, r, !0), this.loadingImage = i, this.removeOldImages(i)
              }
          }), r(this, "showImage", (e, t, i, s, n, r = !0) => {
              this.player.debug.log(`Showing thumb: ${n}. num: ${s}. qual: ${i}. newimg: ` + r), this.setImageSizeAndOffset(e, t), r && (this.currentImageContainer.appendChild(e), this.currentImageElement = e, this.loadedImages.includes(n) || this.loadedImages.push(n)), this.preloadNearby(s, !0).then(this.preloadNearby(s, !1)).then(this.getHigherQuality(i, e, t, n))
          }), r(this, "removeOldImages", i => {
              Array.from(this.currentImageContainer.children).forEach(e => {
                  if ("img" === e.tagName.toLowerCase()) {
                      var t = this.usingSprites ? 500 : 1e3;
                      if (e.dataset.index !== i.dataset.index && !e.dataset.deleting) {
                          e.dataset.deleting = !0;
                          const i = this["currentImageContainer"];
                          setTimeout(() => {
                              i.removeChild(e), this.player.debug.log("Removing thumb: " + e.dataset.filename)
                          }, t)
                      }
                  }
              })
          }), r(this, "preloadNearby", (t, i = !0) => new Promise(r => {
              setTimeout(() => {
                  const n = this.thumbnails[0].frames[t].text;
                  if (this.showingThumbFilename === n) {
                      let e, s = (e = i ? this.thumbnails[0].frames.slice(t) : this.thumbnails[0].frames.slice(0, t).reverse(), !1);
                      e.forEach(e => {
                          const t = e.text;
                          if (t !== n && !this.loadedImages.includes(t)) {
                              s = !0, this.player.debug.log("Preloading thumb filename: " + t);
                              const e = this.thumbnails[0]["urlPrefix"],
                                  n = e + t,
                                  i = new Image;
                              i.src = n, i.onload = () => {
                                  this.player.debug.log("Preloaded thumb filename: " + t), this.loadedImages.includes(t) || this.loadedImages.push(t), r()
                              }
                          }
                      }), s || r()
                  }
              }, 300)
          })), r(this, "getHigherQuality", (t, i, s, n) => {
              if (t < this.thumbnails.length - 1) {
                  let e = i.naturalHeight;
                  this.usingSprites && (e = s.h), e < this.thumbContainerHeight && setTimeout(() => {
                      this.showingThumbFilename === n && (this.player.debug.log("Showing higher quality thumb for: " + n), this.loadImage(t + 1))
                  }, 300)
              }
          }), r(this, "toggleThumbContainer", (e = !1, t = !1) => {
              var i = this.player.config.classNames.previewThumbnails.thumbContainerShown;
              this.elements.thumb.container.classList.toggle(i, e), !e && t && (this.showingThumb = null, this.showingThumbFilename = null)
          }), r(this, "toggleScrubbingContainer", (e = !1) => {
              var t = this.player.config.classNames.previewThumbnails.scrubbingContainerShown;
              this.elements.scrubbing.container.classList.toggle(t, e), e || (this.showingThumb = null, this.showingThumbFilename = null)
          }), r(this, "determineContainerAutoSizing", () => {
              (20 < this.elements.thumb.imageContainer.clientHeight || 20 < this.elements.thumb.imageContainer.clientWidth) && (this.sizeSpecifiedInCSS = !0)
          }), r(this, "setThumbContainerSizeAndPos", () => {
              var e;
              this.sizeSpecifiedInCSS ? 20 < this.elements.thumb.imageContainer.clientHeight && this.elements.thumb.imageContainer.clientWidth < 20 ? (e = Math.floor(this.elements.thumb.imageContainer.clientHeight * this.thumbAspectRatio), this.elements.thumb.imageContainer.style.width = e + "px") : this.elements.thumb.imageContainer.clientHeight < 20 && 20 < this.elements.thumb.imageContainer.clientWidth && (e = Math.floor(this.elements.thumb.imageContainer.clientWidth / this.thumbAspectRatio), this.elements.thumb.imageContainer.style.height = e + "px") : (e = Math.floor(this.thumbContainerHeight * this.thumbAspectRatio), this.elements.thumb.imageContainer.style.height = this.thumbContainerHeight + "px", this.elements.thumb.imageContainer.style.width = e + "px"), this.setThumbContainerPos()
          }), r(this, "setThumbContainerPos", () => {
              const e = this.player.elements.progress.getBoundingClientRect(),
                  t = this.player.elements.container.getBoundingClientRect(),
                  i = this.elements.thumb["container"],
                  s = t.left - e.left + 10,
                  n = t.right - e.left - i.clientWidth - 10;
              let r = this.mousePosX - e.left - i.clientWidth / 2;
              r < s && (r = s), r > n && (r = n), i.style.left = r + "px"
          }), r(this, "setScrubbingContainerSize", () => {
              var {
                  width: e,
                  height: t
              } = lt(this.thumbAspectRatio, {
                  width: this.player.media.clientWidth,
                  height: this.player.media.clientHeight
              });
              this.elements.scrubbing.container.style.width = e + "px", this.elements.scrubbing.container.style.height = t + "px"
          }), r(this, "setImageSizeAndOffset", (e, t) => {
              var i;
              this.usingSprites && (i = this.thumbContainerHeight / t.h, e.style.height = e.naturalHeight * i + "px", e.style.width = e.naturalWidth * i + "px", e.style.left = `-${t.x*i}px`, e.style.top = `-${t.y*i}px`)
          }), this.player = e, this.thumbnails = [], this.loaded = !1, this.lastMouseMoveTime = Date.now(), this.mouseDown = !1, this.loadedImages = [], this.elements = {
              thumb: {},
              scrubbing: {}
          }, this.load()
      }
      get enabled() {
          return this.player.isHTML5 && this.player.isVideo && this.player.config.previewThumbnails.enabled
      }
      get currentImageContainer() {
          return this.mouseDown ? this.elements.scrubbing.container : this.elements.thumb.imageContainer
      }
      get usingSprites() {
          return Object.keys(this.thumbnails[0].frames[0]).includes("w")
      }
      get thumbAspectRatio() {
          return this.usingSprites ? this.thumbnails[0].frames[0].w / this.thumbnails[0].frames[0].h : this.thumbnails[0].width / this.thumbnails[0].height
      }
      get thumbContainerHeight() {
          var e;
          return this.mouseDown ? (e = lt(this.thumbAspectRatio, {
              width: this.player.media.clientWidth,
              height: this.player.media.clientHeight
          })["height"], e) : this.sizeSpecifiedInCSS ? this.elements.thumb.imageContainer.clientHeight : Math.floor(this.player.media.clientWidth / this.thumbAspectRatio / 4)
      }
      get currentImageElement() {
          return this.mouseDown ? this.currentScrubbingImageElement : this.currentThumbnailImageElement
      }
      set currentImageElement(e) {
          this.mouseDown ? this.currentScrubbingImageElement = e : this.currentThumbnailImageElement = e
      }
  }
  const dt = {
      insertElements(t, e) {
          B(e) ? ne(t, this.media, {
              src: e
          }) : Y(e) && e.forEach(e => {
              ne(t, this.media, e)
          })
      },
      change(r) {
          ee(r, "sources.length") ? (Oe.cancelRequests.call(this), this.destroy.call(this, () => {
              this.options.quality = [], re(this.media), this.media = null, g(this.elements.container) && this.elements.container.removeAttribute("class");
              var {
                  sources: e,
                  type: t
              } = r, [{
                  provider: i = Ve.html5,
                  src: s
              }] = e, n = "html5" === i ? t : "div", s = "html5" === i ? {} : {
                  src: s
              };
              Object.assign(this, {
                  provider: i,
                  type: t,
                  supported: ge.check(t, i, this.config.playsinline),
                  media: y(n, s)
              }), this.elements.container.appendChild(this.media), R(r.autoplay) && (this.config.autoplay = r.autoplay), this.isHTML5 && (this.config.crossorigin && this.media.setAttribute("crossorigin", ""), this.config.autoplay && this.media.setAttribute("autoplay", ""), v(r.poster) || (this.poster = r.poster), this.config.loop.active && this.media.setAttribute("loop", ""), this.config.muted && this.media.setAttribute("muted", ""), this.config.playsinline && this.media.setAttribute("playsinline", "")), T.addStyleHook.call(this), this.isHTML5 && dt.insertElements.call(this, "source", e), this.config.title = r.title, ot.setup.call(this), this.isHTML5 && Object.keys(r).includes("tracks") && dt.insertElements.call(this, "track", r.tracks), (this.isHTML5 || this.isEmbed && !this.supported.ui) && T.build.call(this), this.isHTML5 && this.media.load(), v(r.previewThumbnails) || (Object.assign(this.config.previewThumbnails, r.previewThumbnails), this.previewThumbnails && this.previewThumbnails.loaded && (this.previewThumbnails.destroy(), this.previewThumbnails = null), this.config.previewThumbnails.enabled && (this.previewThumbnails = new ct(this))), this.fullscreen.update()
          }, !0)) : this.debug.warn("Invalid source format")
      }
  };
  class ut {
      constructor(e, t) {
          if (r(this, "play", () => W(this.media.play) ? (this.ads && this.ads.enabled && this.ads.managerPromise.then(() => this.ads.play()).catch(() => xe(this.media.play())), this.media.play()) : null), r(this, "pause", () => this.playing && W(this.media.pause) ? this.media.pause() : null), r(this, "togglePlay", e => (R(e) ? e : !this.playing) ? this.play() : this.pause()), r(this, "stop", () => {
                  this.isHTML5 ? (this.pause(), this.restart()) : W(this.media.stop) && this.media.stop()
              }), r(this, "restart", () => {
                  this.currentTime = 0
              }), r(this, "rewind", e => {
                  this.currentTime -= q(e) ? e : this.config.seekTime
              }), r(this, "forward", e => {
                  this.currentTime += q(e) ? e : this.config.seekTime
              }), r(this, "increaseVolume", e => {
                  var t = this.media.muted ? 0 : this.volume;
                  this.volume = t + (q(e) ? e : 0)
              }), r(this, "decreaseVolume", e => {
                  this.increaseVolume(-e)
              }), r(this, "airplay", () => {
                  ge.airplay && this.media.webkitShowPlaybackTargetPicker()
              }), r(this, "toggleControls", e => {
                  if (!this.supported.ui || this.isAudio) return !1;
                  var t = de(this.elements.container, this.config.classNames.hideControls),
                      i = a(this.elements.container, this.config.classNames.hideControls, void 0 === e ? void 0 : !e);
                  if (i && Y(this.config.controls) && this.config.controls.includes("settings") && !v(this.config.settings) && w.toggleMenu.call(this, !1), i !== t) {
                      const e = i ? "controlshidden" : "controlsshown";
                      b.call(this, this.media, e)
                  }
                  return !i
              }), r(this, "on", (e, t) => {
                  u.call(this, this.elements.container, e, t)
              }), r(this, "once", (e, t) => {
                  we.call(this, this.elements.container, e, t)
              }), r(this, "off", (e, t) => {
                  be(this.elements.container, e, t)
              }), r(this, "destroy", (e, t = !1) => {
                  var i;
                  this.ready && (i = () => {
                      document.body.style.overflow = "", this.embed = null, t ? (Object.keys(this.elements).length && (re(this.elements.buttons.play), re(this.elements.captions), re(this.elements.controls), re(this.elements.wrapper), this.elements.buttons.play = null, this.elements.captions = null, this.elements.controls = null, this.elements.wrapper = null), W(e) && e()) : (function() {
                          this && this.eventListeners && (this.eventListeners.forEach(e => {
                              const {
                                  element: t,
                                  type: i,
                                  callback: s,
                                  options: n
                              } = e;
                              t.removeEventListener(i, s, n)
                          }), this.eventListeners = [])
                      }.call(this), Oe.cancelRequests.call(this), ae(this.elements.original, this.elements.container), b.call(this, this.elements.original, "destroyed", !0), W(e) && e.call(this.elements.original), this.ready = !1, setTimeout(() => {
                          this.elements = null, this.media = null
                      }, 200))
                  }, this.stop(), clearTimeout(this.timers.loading), clearTimeout(this.timers.controls), clearTimeout(this.timers.resized), this.isHTML5 ? (T.toggleNativeControls.call(this, !0), i()) : this.isYouTube ? (clearInterval(this.timers.buffering), clearInterval(this.timers.playing), null !== this.embed && W(this.embed.destroy) && this.embed.destroy(), i()) : this.isVimeo && (null !== this.embed && this.embed.unload().then(i), setTimeout(i, 200)))
              }), r(this, "supports", e => ge.mime.call(this, e)), this.timers = {}, this.ready = !1, this.loading = !1, this.failed = !1, this.touch = ge.touch, this.media = e, B(this.media) && (this.media = document.querySelectorAll(this.media)), (window.jQuery && this.media instanceof jQuery || X(this.media) || Y(this.media)) && (this.media = this.media[0]), this.config = te({}, Ye, ut.defaults, t || {}, (() => {
                  try {
                      return JSON.parse(this.media.getAttribute("data-plyr-config"))
                  } catch (e) {
                      return {}
                  }
              })()), this.elements = {
                  container: null,
                  fullscreen: null,
                  captions: null,
                  buttons: {},
                  display: {},
                  progress: {},
                  inputs: {},
                  settings: {
                      popup: null,
                      menu: null,
                      panels: {},
                      buttons: {}
                  }
              }, this.captions = {
                  active: null,
                  currentTrack: -1,
                  meta: new WeakMap
              }, this.fullscreen = {
                  active: !1
              }, this.options = {
                  speed: [],
                  quality: []
              }, this.debug = new Ue(this.config.debug), this.debug.log("Config", this.config), this.debug.log("Support", ge), !F(this.media) && g(this.media))
              if (this.media.plyr) this.debug.warn("Target already setup");
              else if (this.config.enabled)
              if (ge.check().api) {
                  const n = this.media.cloneNode(!0);
                  n.autoplay = !1, this.elements.original = n;
                  var i, s = this.media.tagName.toLowerCase();
                  let e = null,
                      t = null;
                  switch (s) {
                      case "div":
                          if (e = this.media.querySelector("iframe"), g(e)) {
                              if (t = Re(e.getAttribute("src")), this.provider = (i = t.toString(), /^(https?:\/\/)?(www\.)?(youtube\.com|youtube-nocookie\.com|youtu\.?be)\/.+$/.test(i) ? Ve.youtube : /^https?:\/\/player.vimeo.com\/video\/\d{0,9}(?=\b|\/)/.test(i) ? Ve.vimeo : null), this.elements.container = this.media, this.media = e, this.elements.container.className = "", t.search.length) {
                                  const r = ["1", "true"];
                                  r.includes(t.searchParams.get("autoplay")) && (this.config.autoplay = !0), r.includes(t.searchParams.get("loop")) && (this.config.loop.active = !0), this.isYouTube ? (this.config.playsinline = r.includes(t.searchParams.get("playsinline")), this.config.youtube.hl = t.searchParams.get("hl")) : this.config.playsinline = !0
                              }
                          } else this.provider = this.media.getAttribute(this.config.attributes.embed.provider), this.media.removeAttribute(this.config.attributes.embed.provider);
                          if (v(this.provider) || !Object.values(Ve).includes(this.provider)) return void this.debug.error("Setup failed: Invalid provider");
                          this.type = "video";
                          break;
                      case "video":
                      case "audio":
                          this.type = s, this.provider = Ve.html5, this.media.hasAttribute("crossorigin") && (this.config.crossorigin = !0), this.media.hasAttribute("autoplay") && (this.config.autoplay = !0), (this.media.hasAttribute("playsinline") || this.media.hasAttribute("webkit-playsinline")) && (this.config.playsinline = !0), this.media.hasAttribute("muted") && (this.config.muted = !0), this.media.hasAttribute("loop") && (this.config.loop.active = !0);
                          break;
                      default:
                          return void this.debug.error("Setup failed: unsupported type")
                  }
                  this.supported = ge.check(this.type, this.provider, this.config.playsinline), this.supported.api ? (this.eventListeners = [], this.listeners = new Ze(this), this.storage = new je(this), this.media.plyr = this, g(this.elements.container) || (this.elements.container = y("div", {
                      tabindex: 0
                  }), ie(this.media, this.elements.container)), T.migrateStyles.call(this), T.addStyleHook.call(this), ot.setup.call(this), this.config.debug && u.call(this, this.elements.container, this.config.events.join(" "), e => {
                      this.debug.log("event: " + e.type)
                  }), this.fullscreen = new Qe(this), (this.isHTML5 || this.isEmbed && !this.supported.ui) && T.build.call(this), this.listeners.container(), this.listeners.global(), this.config.ads.enabled && (this.ads = new at(this)), this.isHTML5 && this.config.autoplay && this.once("canplay", () => xe(this.play())), this.lastSeekTime = 0, this.config.previewThumbnails.enabled && (this.previewThumbnails = new ct(this))) : this.debug.error("Setup failed: no support")
              } else this.debug.error("Setup failed: no support");
          else this.debug.error("Setup failed: disabled by config");
          else this.debug.error("Setup failed: no suitable element passed")
      }
      get isHTML5() {
          return this.provider === Ve.html5
      }
      get isEmbed() {
          return this.isYouTube || this.isVimeo
      }
      get isYouTube() {
          return this.provider === Ve.youtube
      }
      get isVimeo() {
          return this.provider === Ve.vimeo
      }
      get isVideo() {
          return "video" === this.type
      }
      get isAudio() {
          return "audio" === this.type
      }
      get playing() {
          return Boolean(this.ready && !this.paused && !this.ended)
      }
      get paused() {
          return Boolean(this.media.paused)
      }
      get stopped() {
          return Boolean(this.paused && 0 === this.currentTime)
      }
      get ended() {
          return Boolean(this.media.ended)
      }
      set currentTime(e) {
          var t;
          this.duration && (t = q(e) && 0 < e, this.media.currentTime = t ? Math.min(e, this.duration) : 0, this.debug.log(`Seeking to ${this.currentTime} seconds`))
      }
      get currentTime() {
          return Number(this.media.currentTime)
      }
      get buffered() {
          const e = this.media["buffered"];
          return q(e) ? e : e && e.length && 0 < this.duration ? e.end(0) / this.duration : 0
      }
      get seeking() {
          return Boolean(this.media.seeking)
      }
      get duration() {
          var e = parseFloat(this.config.duration),
              t = (this.media || {}).duration,
              t = q(t) && t !== 1 / 0 ? t : 0;
          return e || t
      }
      set volume(e) {
          let t = e;
          B(t) && (t = Number(t)), q(t) || (t = this.storage.get("volume")), q(t) || ({
              volume: t
          } = this.config), 1 < t && (t = 1), t < 0 && (t = 0), this.config.volume = t, this.media.volume = t, !v(e) && this.muted && 0 < t && (this.muted = !1)
      }
      get volume() {
          return Number(this.media.volume)
      }
      set muted(e) {
          let t = e;
          R(t) || (t = this.storage.get("muted")), R(t) || (t = this.config.muted), this.config.muted = t, this.media.muted = t
      }
      get muted() {
          return Boolean(this.media.muted)
      }
      get hasAudio() {
          return !this.isHTML5 || !!this.isAudio || Boolean(this.media.mozHasAudio) || Boolean(this.media.webkitAudioDecodedByteCount) || Boolean(this.media.audioTracks && this.media.audioTracks.length)
      }
      set speed(e) {
          let t = null;
          q(e) && (t = e), q(t) || (t = this.storage.get("speed")), q(t) || (t = this.config.speed.selected);
          var i, {
              minimumSpeed: e,
              maximumSpeed: s
          } = this;
          t = ([e = 0, s = 0, i = 255] = [t, e, s], Math.min(Math.max(e, s), i)), this.config.speed.selected = t, setTimeout(() => {
              this.media.playbackRate = t
          }, 0)
      }
      get speed() {
          return Number(this.media.playbackRate)
      }
      get minimumSpeed() {
          return this.isYouTube ? Math.min(...this.options.speed) : this.isVimeo ? .5 : .0625
      }
      get maximumSpeed() {
          return this.isYouTube ? Math.max(...this.options.speed) : this.isVimeo ? 2 : 16
      }
      set quality(i) {
          const s = this.config.quality,
              n = this.options.quality;
          if (n.length) {
              let e = [!v(i) && Number(i), this.storage.get("quality"), s.selected, s.default].find(q),
                  t = !0;
              if (!n.includes(e)) {
                  const i = Ee(n, e);
                  this.debug.warn(`Unsupported quality option: ${e}, using ${i} instead`), e = i, t = !1
              }
              s.selected = e, this.media.quality = e, t && this.storage.set({
                  quality: e
              })
          }
      }
      get quality() {
          return this.media.quality
      }
      set loop(e) {
          e = R(e) ? e : this.config.loop.active;
          this.config.loop.active = e, this.media.loop = e
      }
      get loop() {
          return Boolean(this.media.loop)
      }
      set source(e) {
          dt.change.call(this, e)
      }
      get source() {
          return this.media.currentSrc
      }
      get download() {
          var e = this.config.urls["download"];
          return Q(e) ? e : this.source
      }
      set download(e) {
          Q(e) && (this.config.urls.download = e, w.setDownloadUrl.call(this))
      }
      set poster(e) {
          this.isVideo ? T.setPoster.call(this, e, !1).catch(() => {}) : this.debug.warn("Poster can only be set for video")
      }
      get poster() {
          return this.isVideo ? this.media.getAttribute("poster") || this.media.getAttribute("data-poster") : null
      }
      get ratio() {
          if (!this.isVideo) return null;
          const e = ke(Ae.call(this));
          return Y(e) ? e.join(":") : e
      }
      set ratio(e) {
          this.isVideo ? B(e) && Ce(e) ? (this.config.ratio = ke(e), Me.call(this)) : this.debug.error(`Invalid aspect ratio specified (${e})`) : this.debug.warn("Aspect ratio can only be set for video")
      }
      set autoplay(e) {
          e = R(e) ? e : this.config.autoplay;
          this.config.autoplay = e
      }
      get autoplay() {
          return Boolean(this.config.autoplay)
      }
      toggleCaptions(e) {
          x.toggle.call(this, e, !1)
      }
      set currentTrack(e) {
          x.set.call(this, e, !1)
      }
      get currentTrack() {
          var {
              toggled: e,
              currentTrack: t
          } = this.captions;
          return e ? t : -1
      }
      set language(e) {
          x.setLanguage.call(this, e, !1)
      }
      get language() {
          return (x.getCurrentTrack.call(this) || {}).language
      }
      set pip(e) {
          ge.pip && (e = R(e) ? e : !this.pip, W(this.media.webkitSetPresentationMode) && this.media.webkitSetPresentationMode(e ? Xe : "inline"), W(this.media.requestPictureInPicture) && (!this.pip && e ? this.media.requestPictureInPicture() : this.pip && !e && document.exitPictureInPicture()))
      }
      get pip() {
          return ge.pip ? v(this.media.webkitPresentationMode) ? this.media === document.pictureInPictureElement : this.media.webkitPresentationMode === Xe : null
      }
      static supported(e, t, i) {
          return ge.check(e, t, i)
      }
      static loadSprite(e, t) {
          return He(e, t)
      }
      static setup(e, t = {}) {
          let i = null;
          return B(e) ? i = Array.from(document.querySelectorAll(e)) : X(e) ? i = Array.from(e) : Y(e) && (i = e.filter(g)), v(i) ? null : i.map(e => new ut(e, t))
      }
  }
  return ut.defaults = (Je = Ye, JSON.parse(JSON.stringify(Je))), ut
});
var _self = "undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {},
  Prism = function(l) {
      var c = /\blang(?:uage)?-([\w-]+)\b/i,
          t = 0,
          e = {},
          $ = {
              manual: l.Prism && l.Prism.manual,
              disableWorkerMessageHandler: l.Prism && l.Prism.disableWorkerMessageHandler,
              util: {
                  encode: function e(t) {
                      return t instanceof z ? new z(t.type, e(t.content), t.alias) : Array.isArray(t) ? t.map(e) : t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ")
                  },
                  type: function(e) {
                      return Object.prototype.toString.call(e).slice(8, -1)
                  },
                  objId: function(e) {
                      return e.__id || Object.defineProperty(e, "__id", {
                          value: ++t
                      }), e.__id
                  },
                  clone: function i(e, s) {
                      var n, t;
                      switch (s = s || {}, $.util.type(e)) {
                          case "Object":
                              if (t = $.util.objId(e), s[t]) return s[t];
                              for (var r in n = {}, s[t] = n, e) e.hasOwnProperty(r) && (n[r] = i(e[r], s));
                              return n;
                          case "Array":
                              return t = $.util.objId(e), s[t] || (n = [], s[t] = n, e.forEach(function(e, t) {
                                  n[t] = i(e, s)
                              }), n);
                          default:
                              return e
                      }
                  },
                  getLanguage: function(e) {
                      for (; e && !c.test(e.className);) e = e.parentElement;
                      return e ? (e.className.match(c) || [, "none"])[1].toLowerCase() : "none"
                  },
                  currentScript: function() {
                      if ("undefined" == typeof document) return null;
                      if ("currentScript" in document) return document.currentScript;
                      try {
                          throw new Error
                      } catch (e) {
                          var t = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(e.stack) || [])[1];
                          if (t) {
                              var i, s = document.getElementsByTagName("script");
                              for (i in s)
                                  if (s[i].src == t) return s[i]
                          }
                          return null
                      }
                  },
                  isActive: function(e, t, i) {
                      for (var s = "no-" + t; e;) {
                          var n = e.classList;
                          if (n.contains(t)) return !0;
                          if (n.contains(s)) return !1;
                          e = e.parentElement
                      }
                      return !!i
                  }
              },
              languages: {
                  plain: e,
                  plaintext: e,
                  text: e,
                  txt: e,
                  extend: function(e, t) {
                      var i, s = $.util.clone($.languages[e]);
                      for (i in t) s[i] = t[i];
                      return s
                  },
                  insertBefore: function(i, e, t, s) {
                      var n, r = (s = s || $.languages)[i],
                          o = {};
                      for (n in r)
                          if (r.hasOwnProperty(n)) {
                              if (n == e)
                                  for (var a in t) t.hasOwnProperty(a) && (o[a] = t[a]);
                              t.hasOwnProperty(n) || (o[n] = r[n])
                          } var l = s[i];
                      return s[i] = o, $.languages.DFS($.languages, function(e, t) {
                          t === l && e != i && (this[e] = o)
                      }), o
                  },
                  DFS: function e(t, i, s, n) {
                      n = n || {};
                      var r, o, a, l = $.util.objId;
                      for (r in t) t.hasOwnProperty(r) && (i.call(t, r, t[r], s || r), o = t[r], "Object" !== (a = $.util.type(o)) || n[l(o)] ? "Array" !== a || n[l(o)] || (n[l(o)] = !0, e(o, i, r, n)) : (n[l(o)] = !0, e(o, i, null, n)))
                  }
              },
              plugins: {},
              highlightAll: function(e, t) {
                  $.highlightAllUnder(document, e, t)
              },
              highlightAllUnder: function(e, t, i) {
                  var s = {
                      callback: i,
                      container: e,
                      selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
                  };
                  $.hooks.run("before-highlightall", s), s.elements = Array.prototype.slice.apply(s.container.querySelectorAll(s.selector)), $.hooks.run("before-all-elements-highlight", s);
                  for (var n, r = 0; n = s.elements[r++];) $.highlightElement(n, !0 === t, s.callback)
              },
              highlightElement: function(e, t, i) {
                  var s = $.util.getLanguage(e),
                      n = $.languages[s],
                      r = (e.className = e.className.replace(c, "").replace(/\s+/g, " ") + " language-" + s, e.parentElement),
                      o = (r && "pre" === r.nodeName.toLowerCase() && (r.className = r.className.replace(c, "").replace(/\s+/g, " ") + " language-" + s), {
                          element: e,
                          language: s,
                          grammar: n,
                          code: e.textContent
                      });

                  function a(e) {
                      o.highlightedCode = e, $.hooks.run("before-insert", o), o.element.innerHTML = o.highlightedCode, $.hooks.run("after-highlight", o), $.hooks.run("complete", o), i && i.call(o.element)
                  }
                  if ($.hooks.run("before-sanity-check", o), (r = o.element.parentElement) && "pre" === r.nodeName.toLowerCase() && !r.hasAttribute("tabindex") && r.setAttribute("tabindex", "0"), !o.code) return $.hooks.run("complete", o), void(i && i.call(o.element));
                  $.hooks.run("before-highlight", o), o.grammar ? t && l.Worker ? ((s = new Worker($.filename)).onmessage = function(e) {
                      a(e.data)
                  }, s.postMessage(JSON.stringify({
                      language: o.language,
                      code: o.code,
                      immediateClose: !0
                  }))) : a($.highlight(o.code, o.grammar, o.language)) : a($.util.encode(o.code))
              },
              highlight: function(e, t, i) {
                  e = {
                      code: e,
                      grammar: t,
                      language: i
                  };
                  return $.hooks.run("before-tokenize", e), e.tokens = $.tokenize(e.code, e.grammar), $.hooks.run("after-tokenize", e), z.stringify($.util.encode(e.tokens), e.language)
              },
              tokenize: function(e, t) {
                  var i = t.rest;
                  if (i) {
                      for (var s in i) t[s] = i[s];
                      delete t.rest
                  }
                  for (var n = new d, r = (D(n, n.head, e), function d(u, e, h, p, m, t) {
                          for (var i in h)
                              if (h.hasOwnProperty(i) && h[i])
                                  for (var f = h[i], f = Array.isArray(f) ? f : [f], g = 0; g < f.length; ++g) {
                                      if (t && t.cause == i + "," + g) return;
                                      var v, s = f[g],
                                          y = s.inside,
                                          b = !!s.lookbehind,
                                          w = !!s.greedy,
                                          x = s.alias;
                                      w && !s.pattern.global && (v = s.pattern.toString().match(/[imsuy]*$/)[0], s.pattern = RegExp(s.pattern.source, v + "g"));
                                      for (var T = s.pattern || s, n = p.next, r = m; n !== e.tail && !(t && r >= t.reach); r += n.value.length, n = n.next) {
                                          var o = n.value;
                                          if (e.length > u.length) return;
                                          if (!(o instanceof z)) {
                                              var a, E = 1;
                                              if (w) {
                                                  if (!(a = N(T, r, u, b))) break;
                                                  var _ = a.index,
                                                      S = a.index + a[0].length,
                                                      l = r;
                                                  for (l += n.value.length; l <= _;) l += (n = n.next).value.length;
                                                  if (r = l -= n.value.length, n.value instanceof z) continue;
                                                  for (var C = n; C !== e.tail && (l < S || "string" == typeof C.value); C = C.next) E++, l += C.value.length;
                                                  E--, o = u.slice(r, l), a.index -= r
                                              } else if (!(a = N(T, 0, o, b))) continue;
                                              for (var _ = a.index, k = a[0], c = o.slice(0, _), A = o.slice(_ + k.length), o = r + o.length, M = (t && o > t.reach && (t.reach = o), n.prev), P = (c && (M = D(e, M, c), r += c.length), L = I = O = c = P = void 0, e), c = M, O = E, I = c.next, L = 0; L < O && I !== P.tail; L++) I = I.next;
                                              (c.next = I).prev = c, P.length -= L;
                                              n = D(e, M, new z(i, y ? $.tokenize(k, y) : k, x, k));
                                              A && D(e, n, A), 1 < E && (d(u, e, h, n.prev, r, c = {
                                                  cause: i + "," + g,
                                                  reach: o
                                              }), t && c.reach > t.reach && (t.reach = c.reach))
                                          }
                                      }
                                  }
                      }(e, n, t, n.head, 0), n), o = [], a = r.head.next; a !== r.tail;) o.push(a.value), a = a.next;
                  return o
              },
              hooks: {
                  all: {},
                  add: function(e, t) {
                      var i = $.hooks.all;
                      i[e] = i[e] || [], i[e].push(t)
                  },
                  run: function(e, t) {
                      var i = $.hooks.all[e];
                      if (i && i.length)
                          for (var s, n = 0; s = i[n++];) s(t)
                  }
              },
              Token: z
          };

      function z(e, t, i, s) {
          this.type = e, this.content = t, this.alias = i, this.length = 0 | (s || "").length
      }

      function N(e, t, i, s) {
          e.lastIndex = t;
          t = e.exec(i);
          return t && s && t[1] && (e = t[1].length, t.index += e, t[0] = t[0].slice(e)), t
      }

      function d() {
          var e = {
                  value: null,
                  prev: null,
                  next: null
              },
              t = {
                  value: null,
                  prev: e,
                  next: null
              };
          e.next = t, this.head = e, this.tail = t, this.length = 0
      }

      function D(e, t, i) {
          var s = t.next,
              i = {
                  value: i,
                  prev: t,
                  next: s
              };
          return t.next = i, s.prev = i, e.length++, i
      }
      if (l.Prism = $, z.stringify = function t(e, i) {
              if ("string" == typeof e) return e;
              var s;
              if (Array.isArray(e)) return s = "", e.forEach(function(e) {
                  s += t(e, i)
              }), s;
              var n, r = {
                      type: e.type,
                      content: t(e.content, i),
                      tag: "span",
                      classes: ["token", e.type],
                      attributes: {},
                      language: i
                  },
                  e = e.alias,
                  o = (e && (Array.isArray(e) ? Array.prototype.push.apply(r.classes, e) : r.classes.push(e)), $.hooks.run("wrap", r), "");
              for (n in r.attributes) o += " " + n + '="' + (r.attributes[n] || "").replace(/"/g, "&quot;") + '"';
              return "<" + r.tag + ' class="' + r.classes.join(" ") + '"' + o + ">" + r.content + "</" + r.tag + ">"
          }, !l.document) return l.addEventListener && ($.disableWorkerMessageHandler || l.addEventListener("message", function(e) {
          var e = JSON.parse(e.data),
              t = e.language,
              i = e.code,
              e = e.immediateClose;
          l.postMessage($.highlight(i, $.languages[t], t)), e && l.close()
      }, !1)), $;
      var i, e = $.util.currentScript();

      function s() {
          $.manual || $.highlightAll()
      }
      return e && ($.filename = e.src, e.hasAttribute("data-manual") && ($.manual = !0)), $.manual || ("loading" === (i = document.readyState) || "interactive" === i && e && e.defer ? document.addEventListener("DOMContentLoaded", s) : window.requestAnimationFrame ? window.requestAnimationFrame(s) : window.setTimeout(s, 16)), $
  }(_self),
  $jscomp = ("undefined" != typeof module && module.exports && (module.exports = Prism), "undefined" != typeof global && (global.Prism = Prism), Prism.languages.markup = {
      comment: /<!--[\s\S]*?-->/,
      prolog: /<\?[\s\S]+?\?>/,
      doctype: {
          pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
          greedy: !0,
          inside: {
              "internal-subset": {
                  pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
                  lookbehind: !0,
                  greedy: !0,
                  inside: null
              },
              string: {
                  pattern: /"[^"]*"|'[^']*'/,
                  greedy: !0
              },
              punctuation: /^<!|>$|[[\]]/,
              "doctype-tag": /^DOCTYPE/,
              name: /[^\s<>'"]+/
          }
      },
      cdata: /<!\[CDATA\[[\s\S]*?\]\]>/i,
      tag: {
          pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
          greedy: !0,
          inside: {
              tag: {
                  pattern: /^<\/?[^\s>\/]+/,
                  inside: {
                      punctuation: /^<\/?/,
                      namespace: /^[^\s>\/:]+:/
                  }
              },
              "special-attr": [],
              "attr-value": {
                  pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
                  inside: {
                      punctuation: [{
                          pattern: /^=/,
                          alias: "attr-equals"
                      }, /"|'/]
                  }
              },
              punctuation: /\/?>/,
              "attr-name": {
                  pattern: /[^\s>\/]+/,
                  inside: {
                      namespace: /^[^\s>\/:]+:/
                  }
              }
          }
      },
      entity: [{
          pattern: /&[\da-z]{1,8};/i,
          alias: "named-entity"
      }, /&#x?[\da-f]{1,8};/i]
  }, Prism.languages.markup.tag.inside["attr-value"].inside.entity = Prism.languages.markup.entity, Prism.languages.markup.doctype.inside["internal-subset"].inside = Prism.languages.markup, Prism.hooks.add("wrap", function(e) {
      "entity" === e.type && (e.attributes.title = e.content.replace(/&amp;/, "&"))
  }), Object.defineProperty(Prism.languages.markup.tag, "addInlined", {
      value: function(e, t) {
          var i = {},
              i = (i["language-" + t] = {
                  pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
                  lookbehind: !0,
                  inside: Prism.languages[t]
              }, i.cdata = /^<!\[CDATA\[|\]\]>$/i, {
                  "included-cdata": {
                      pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
                      inside: i
                  }
              }),
              t = (i["language-" + t] = {
                  pattern: /[\s\S]+/,
                  inside: Prism.languages[t]
              }, {});
          t[e] = {
              pattern: RegExp("(<__[^>]*>)(?:<!\\[CDATA\\[(?:[^\\]]|\\](?!\\]>))*\\]\\]>|(?!<!\\[CDATA\\[)[^])*?(?=</__>)".replace(/__/g, function() {
                  return e
              }), "i"),
              lookbehind: !0,
              greedy: !0,
              inside: i
          }, Prism.languages.insertBefore("markup", "cdata", t)
      }
  }), Object.defineProperty(Prism.languages.markup.tag, "addAttribute", {
      value: function(e, t) {
          Prism.languages.markup.tag.inside["special-attr"].push({
              pattern: RegExp("(^|[\"'\\s])(?:" + e + ")\\s*=\\s*(?:\"[^\"]*\"|'[^']*'|[^\\s'\">=]+(?=[\\s>]))", "i"),
              lookbehind: !0,
              inside: {
                  "attr-name": /^[^\s=]+/,
                  "attr-value": {
                      pattern: /=[\s\S]+/,
                      inside: {
                          value: {
                              pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                              lookbehind: !0,
                              alias: [t, "language-" + t],
                              inside: Prism.languages[t]
                          },
                          punctuation: [{
                              pattern: /^=/,
                              alias: "attr-equals"
                          }, /"|'/]
                      }
                  }
              }
          })
      }
  }), Prism.languages.html = Prism.languages.markup, Prism.languages.mathml = Prism.languages.markup, Prism.languages.svg = Prism.languages.markup, Prism.languages.xml = Prism.languages.extend("markup", {}), Prism.languages.ssml = Prism.languages.xml, Prism.languages.atom = Prism.languages.xml, Prism.languages.rss = Prism.languages.xml, function(e) {
      var t = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/,
          t = (e.languages.css = {
              comment: /\/\*[\s\S]*?\*\//,
              atrule: {
                  pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
                  inside: {
                      rule: /^@[\w-]+/,
                      "selector-function-argument": {
                          pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
                          lookbehind: !0,
                          alias: "selector"
                      },
                      keyword: {
                          pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
                          lookbehind: !0
                      }
                  }
              },
              url: {
                  pattern: RegExp("\\burl\\((?:" + t.source + "|(?:[^\\\\\r\n()\"']|\\\\[^])*)\\)", "i"),
                  greedy: !0,
                  inside: {
                      function: /^url/i,
                      punctuation: /^\(|\)$/,
                      string: {
                          pattern: RegExp("^" + t.source + "$"),
                          alias: "url"
                      }
                  }
              },
              selector: {
                  pattern: RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|" + t.source + ")*(?=\\s*\\{)"),
                  lookbehind: !0
              },
              string: {
                  pattern: t,
                  greedy: !0
              },
              property: {
                  pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
                  lookbehind: !0
              },
              important: /!important\b/i,
              function: {
                  pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
                  lookbehind: !0
              },
              punctuation: /[(){};:,]/
          }, e.languages.css.atrule.inside.rest = e.languages.css, e.languages.markup);
      t && (t.tag.addInlined("style", "css"), t.tag.addAttribute("style", "css"))
  }(Prism), Prism.languages.clike = {
      comment: [{
          pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
          lookbehind: !0,
          greedy: !0
      }, {
          pattern: /(^|[^\\:])\/\/.*/,
          lookbehind: !0,
          greedy: !0
      }],
      string: {
          pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
          greedy: !0
      },
      "class-name": {
          pattern: /(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,
          lookbehind: !0,
          inside: {
              punctuation: /[.\\]/
          }
      },
      keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
      boolean: /\b(?:true|false)\b/,
      function: /\b\w+(?=\()/,
      number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
      operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
      punctuation: /[{}[\];(),.:]/
  }, Prism.languages.javascript = Prism.languages.extend("clike", {
      "class-name": [Prism.languages.clike["class-name"], {
          pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:prototype|constructor))/,
          lookbehind: !0
      }],
      keyword: [{
          pattern: /((?:^|\})\s*)catch\b/,
          lookbehind: !0
      }, {
          pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
          lookbehind: !0
      }],
      function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
      number: /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
      operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
  }), Prism.languages.javascript["class-name"][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/, Prism.languages.insertBefore("javascript", "keyword", {
      regex: {
          pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
          lookbehind: !0,
          greedy: !0,
          inside: {
              "regex-source": {
                  pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
                  lookbehind: !0,
                  alias: "language-regex",
                  inside: Prism.languages.regex
              },
              "regex-delimiter": /^\/|\/$/,
              "regex-flags": /^[a-z]+$/
          }
      },
      "function-variable": {
          pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
          alias: "function"
      },
      parameter: [{
          pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
          lookbehind: !0,
          inside: Prism.languages.javascript
      }, {
          pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
          lookbehind: !0,
          inside: Prism.languages.javascript
      }, {
          pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
          lookbehind: !0,
          inside: Prism.languages.javascript
      }, {
          pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
          lookbehind: !0,
          inside: Prism.languages.javascript
      }],
      constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
  }), Prism.languages.insertBefore("javascript", "string", {
      hashbang: {
          pattern: /^#!.*/,
          greedy: !0,
          alias: "comment"
      },
      "template-string": {
          pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
          greedy: !0,
          inside: {
              "template-punctuation": {
                  pattern: /^`|`$/,
                  alias: "string"
              },
              interpolation: {
                  pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
                  lookbehind: !0,
                  inside: {
                      "interpolation-punctuation": {
                          pattern: /^\$\{|\}$/,
                          alias: "punctuation"
                      },
                      rest: Prism.languages.javascript
                  }
              },
              string: /[\s\S]+/
          }
      }
  }), Prism.languages.markup && (Prism.languages.markup.tag.addInlined("script", "javascript"), Prism.languages.markup.tag.addAttribute("on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)", "javascript")), Prism.languages.js = Prism.languages.javascript, function(p) {
      function m(e, t) {
          return "___" + e.toUpperCase() + t + "___"
      }
      Object.defineProperties(p.languages["markup-templating"] = {}, {
          buildPlaceholders: {
              value: function(s, n, e, r) {
                  var o;
                  s.language === n && (o = s.tokenStack = [], s.code = s.code.replace(e, function(e) {
                      if ("function" == typeof r && !r(e)) return e;
                      for (var t, i = o.length; - 1 !== s.code.indexOf(t = m(n, i));) ++i;
                      return o[i] = e, t
                  }), s.grammar = p.languages.markup)
              }
          },
          tokenizePlaceholders: {
              value: function(c, d) {
                  var u, h;
                  c.language === d && c.tokenStack && (c.grammar = p.languages[d], u = 0, h = Object.keys(c.tokenStack), function e(t) {
                      for (var i = 0; i < t.length && !(u >= h.length); i++) {
                          var s, n, r, o, a, l = t[i];
                          "string" == typeof l || l.content && "string" == typeof l.content ? (s = h[u], r = c.tokenStack[s], o = "string" == typeof l ? l : l.content, s = m(d, s), -1 < (a = o.indexOf(s)) && (++u, n = o.substring(0, a), r = new p.Token(d, p.tokenize(r, c.grammar), "language-" + d, r), o = o.substring(a + s.length), a = [], n && a.push.apply(a, e([n])), a.push(r), o && a.push.apply(a, e([o])), "string" == typeof l ? t.splice.apply(t, [i, 1].concat(a)) : l.content = a)) : l.content && e(l.content)
                      }
                      return t
                  }(c.tokens))
              }
          }
      })
  }(Prism), function(t) {
      var e = /\/\*[\s\S]*?\*\/|\/\/.*|#(?!\[).*/,
          i = [{
              pattern: /\b(?:false|true)\b/i,
              alias: "boolean"
          }, {
              pattern: /(::\s*)\b[a-z_]\w*\b(?!\s*\()/i,
              greedy: !0,
              lookbehind: !0
          }, {
              pattern: /(\b(?:case|const)\s+)\b[a-z_]\w*(?=\s*[;=])/i,
              greedy: !0,
              lookbehind: !0
          }, /\b(?:null)\b/i, /\b[A-Z_][A-Z0-9_]*\b(?!\s*\()/],
          s = /\b0b[01]+(?:_[01]+)*\b|\b0o[0-7]+(?:_[0-7]+)*\b|\b0x[\da-f]+(?:_[\da-f]+)*\b|(?:\b\d+(?:_\d+)*\.?(?:\d+(?:_\d+)*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
          n = /<?=>|\?\?=?|\.{3}|\??->|[!=]=?=?|::|\*\*=?|--|\+\+|&&|\|\||<<|>>|[?~]|[/^|%*&<>.+-]=?/,
          r = /[{}\[\](),:;]/,
          o = (t.languages.php = {
              delimiter: {
                  pattern: /\?>$|^<\?(?:php(?=\s)|=)?/i,
                  alias: "important"
              },
              comment: e,
              variable: /\$+(?:\w+\b|(?=\{))/i,
              package: {
                  pattern: /(namespace\s+|use\s+(?:function\s+)?)(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,
                  lookbehind: !0,
                  inside: {
                      punctuation: /\\/
                  }
              },
              "class-name-definition": {
                  pattern: /(\b(?:class|enum|interface|trait)\s+)\b[a-z_]\w*(?!\\)\b/i,
                  lookbehind: !0,
                  alias: "class-name"
              },
              "function-definition": {
                  pattern: /(\bfunction\s+)[a-z_]\w*(?=\s*\()/i,
                  lookbehind: !0,
                  alias: "function"
              },
              keyword: [{
                  pattern: /(\(\s*)\b(?:bool|boolean|int|integer|float|string|object|array)\b(?=\s*\))/i,
                  alias: "type-casting",
                  greedy: !0,
                  lookbehind: !0
              }, {
                  pattern: /([(,?]\s*)\b(?:bool|int|float|string|object|array(?!\s*\()|mixed|self|static|callable|iterable|(?:null|false)(?=\s*\|))\b(?=\s*\$)/i,
                  alias: "type-hint",
                  greedy: !0,
                  lookbehind: !0
              }, {
                  pattern: /([(,?]\s*[\w|]\|\s*)(?:null|false)\b(?=\s*\$)/i,
                  alias: "type-hint",
                  greedy: !0,
                  lookbehind: !0
              }, {
                  pattern: /(\)\s*:\s*(?:\?\s*)?)\b(?:bool|int|float|string|object|void|array(?!\s*\()|mixed|self|static|callable|iterable|(?:null|false)(?=\s*\|))\b/i,
                  alias: "return-type",
                  greedy: !0,
                  lookbehind: !0
              }, {
                  pattern: /(\)\s*:\s*(?:\?\s*)?[\w|]\|\s*)(?:null|false)\b/i,
                  alias: "return-type",
                  greedy: !0,
                  lookbehind: !0
              }, {
                  pattern: /\b(?:bool|int|float|string|object|void|array(?!\s*\()|mixed|iterable|(?:null|false)(?=\s*\|))\b/i,
                  alias: "type-declaration",
                  greedy: !0
              }, {
                  pattern: /(\|\s*)(?:null|false)\b/i,
                  alias: "type-declaration",
                  greedy: !0,
                  lookbehind: !0
              }, {
                  pattern: /\b(?:parent|self|static)(?=\s*::)/i,
                  alias: "static-context",
                  greedy: !0
              }, {
                  pattern: /(\byield\s+)from\b/i,
                  lookbehind: !0
              }, /\bclass\b/i, {
                  pattern: /((?:^|[^\s>:]|(?:^|[^-])>|(?:^|[^:]):)\s*)\b(?:__halt_compiler|abstract|and|array|as|break|callable|case|catch|clone|const|continue|declare|default|die|do|echo|else|elseif|empty|enddeclare|endfor|endforeach|endif|endswitch|endwhile|enum|eval|exit|extends|final|finally|fn|for|foreach|function|global|goto|if|implements|include|include_once|instanceof|insteadof|interface|isset|list|namespace|match|new|or|parent|print|private|protected|public|require|require_once|return|self|static|switch|throw|trait|try|unset|use|var|while|xor|yield)\b/i,
                  lookbehind: !0
              }],
              "argument-name": {
                  pattern: /([(,]\s+)\b[a-z_]\w*(?=\s*:(?!:))/i,
                  lookbehind: !0
              },
              "class-name": [{
                  pattern: /(\b(?:extends|implements|instanceof|new(?!\s+self|\s+static))\s+|\bcatch\s*\()\b[a-z_]\w*(?!\\)\b/i,
                  greedy: !0,
                  lookbehind: !0
              }, {
                  pattern: /(\|\s*)\b[a-z_]\w*(?!\\)\b/i,
                  greedy: !0,
                  lookbehind: !0
              }, {
                  pattern: /\b[a-z_]\w*(?!\\)\b(?=\s*\|)/i,
                  greedy: !0
              }, {
                  pattern: /(\|\s*)(?:\\?\b[a-z_]\w*)+\b/i,
                  alias: "class-name-fully-qualified",
                  greedy: !0,
                  lookbehind: !0,
                  inside: {
                      punctuation: /\\/
                  }
              }, {
                  pattern: /(?:\\?\b[a-z_]\w*)+\b(?=\s*\|)/i,
                  alias: "class-name-fully-qualified",
                  greedy: !0,
                  inside: {
                      punctuation: /\\/
                  }
              }, {
                  pattern: /(\b(?:extends|implements|instanceof|new(?!\s+self\b|\s+static\b))\s+|\bcatch\s*\()(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,
                  alias: "class-name-fully-qualified",
                  greedy: !0,
                  lookbehind: !0,
                  inside: {
                      punctuation: /\\/
                  }
              }, {
                  pattern: /\b[a-z_]\w*(?=\s*\$)/i,
                  alias: "type-declaration",
                  greedy: !0
              }, {
                  pattern: /(?:\\?\b[a-z_]\w*)+(?=\s*\$)/i,
                  alias: ["class-name-fully-qualified", "type-declaration"],
                  greedy: !0,
                  inside: {
                      punctuation: /\\/
                  }
              }, {
                  pattern: /\b[a-z_]\w*(?=\s*::)/i,
                  alias: "static-context",
                  greedy: !0
              }, {
                  pattern: /(?:\\?\b[a-z_]\w*)+(?=\s*::)/i,
                  alias: ["class-name-fully-qualified", "static-context"],
                  greedy: !0,
                  inside: {
                      punctuation: /\\/
                  }
              }, {
                  pattern: /([(,?]\s*)[a-z_]\w*(?=\s*\$)/i,
                  alias: "type-hint",
                  greedy: !0,
                  lookbehind: !0
              }, {
                  pattern: /([(,?]\s*)(?:\\?\b[a-z_]\w*)+(?=\s*\$)/i,
                  alias: ["class-name-fully-qualified", "type-hint"],
                  greedy: !0,
                  lookbehind: !0,
                  inside: {
                      punctuation: /\\/
                  }
              }, {
                  pattern: /(\)\s*:\s*(?:\?\s*)?)\b[a-z_]\w*(?!\\)\b/i,
                  alias: "return-type",
                  greedy: !0,
                  lookbehind: !0
              }, {
                  pattern: /(\)\s*:\s*(?:\?\s*)?)(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,
                  alias: ["class-name-fully-qualified", "return-type"],
                  greedy: !0,
                  lookbehind: !0,
                  inside: {
                      punctuation: /\\/
                  }
              }],
              constant: i,
              function: {
                  pattern: /(^|[^\\\w])\\?[a-z_](?:[\w\\]*\w)?(?=\s*\()/i,
                  lookbehind: !0,
                  inside: {
                      punctuation: /\\/
                  }
              },
              property: {
                  pattern: /(->\s*)\w+/,
                  lookbehind: !0
              },
              number: s,
              operator: n,
              punctuation: r
          }, {
              pattern: /\{\$(?:\{(?:\{[^{}]+\}|[^{}]+)\}|[^{}])+\}|(^|[^\\{])\$+(?:\w+(?:\[[^\r\n\[\]]+\]|->\w+)?)/,
              lookbehind: !0,
              inside: t.languages.php
          }),
          o = [{
              pattern: /<<<'([^']+)'[\r\n](?:.*[\r\n])*?\1;/,
              alias: "nowdoc-string",
              greedy: !0,
              inside: {
                  delimiter: {
                      pattern: /^<<<'[^']+'|[a-z_]\w*;$/i,
                      alias: "symbol",
                      inside: {
                          punctuation: /^<<<'?|[';]$/
                      }
                  }
              }
          }, {
              pattern: /<<<(?:"([^"]+)"[\r\n](?:.*[\r\n])*?\1;|([a-z_]\w*)[\r\n](?:.*[\r\n])*?\2;)/i,
              alias: "heredoc-string",
              greedy: !0,
              inside: {
                  delimiter: {
                      pattern: /^<<<(?:"[^"]+"|[a-z_]\w*)|[a-z_]\w*;$/i,
                      alias: "symbol",
                      inside: {
                          punctuation: /^<<<"?|[";]$/
                      }
                  },
                  interpolation: o
              }
          }, {
              pattern: /`(?:\\[\s\S]|[^\\`])*`/,
              alias: "backtick-quoted-string",
              greedy: !0
          }, {
              pattern: /'(?:\\[\s\S]|[^\\'])*'/,
              alias: "single-quoted-string",
              greedy: !0
          }, {
              pattern: /"(?:\\[\s\S]|[^\\"])*"/,
              alias: "double-quoted-string",
              greedy: !0,
              inside: {
                  interpolation: o
              }
          }];
      t.languages.insertBefore("php", "variable", {
          string: o,
          attribute: {
              pattern: /#\[(?:[^"'\/#]|\/(?![*/])|\/\/.*$|#(?!\[).*$|\/\*(?:[^*]|\*(?!\/))*\*\/|"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*')+\](?=\s*[a-z$#])/im,
              greedy: !0,
              inside: {
                  "attribute-content": {
                      pattern: /^(#\[)[\s\S]+(?=\]$)/,
                      lookbehind: !0,
                      inside: {
                          comment: e,
                          string: o,
                          "attribute-class-name": [{
                              pattern: /([^:]|^)\b[a-z_]\w*(?!\\)\b/i,
                              alias: "class-name",
                              greedy: !0,
                              lookbehind: !0
                          }, {
                              pattern: /([^:]|^)(?:\\?\b[a-z_]\w*)+/i,
                              alias: ["class-name", "class-name-fully-qualified"],
                              greedy: !0,
                              lookbehind: !0,
                              inside: {
                                  punctuation: /\\/
                              }
                          }],
                          constant: i,
                          number: s,
                          operator: n,
                          punctuation: r
                      }
                  },
                  delimiter: {
                      pattern: /^#\[|\]$/,
                      alias: "punctuation"
                  }
              }
          }
      }), t.hooks.add("before-tokenize", function(e) {
          /<\?/.test(e.code) && t.languages["markup-templating"].buildPlaceholders(e, "php", /<\?(?:[^"'/#]|\/(?![*/])|("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|(?:\/\/|#(?!\[))(?:[^?\n\r]|\?(?!>))*(?=$|\?>|[\r\n])|#\[|\/\*(?:[^*]|\*(?!\/))*(?:\*\/|$))*?(?:\?>|$)/gi)
      }), t.hooks.add("after-tokenize", function(e) {
          t.languages["markup-templating"].tokenizePlaceholders(e, "php")
      })
  }(Prism), function(e) {
      e.languages.sass = e.languages.extend("css", {
          comment: {
              pattern: /^([ \t]*)\/[\/*].*(?:(?:\r?\n|\r)\1[ \t].+)*/m,
              lookbehind: !0,
              greedy: !0
          }
      }), e.languages.insertBefore("sass", "atrule", {
          "atrule-line": {
              pattern: /^(?:[ \t]*)[@+=].+/m,
              greedy: !0,
              inside: {
                  atrule: /(?:@[\w-]+|[+=])/m
              }
          }
      }), delete e.languages.sass.atrule;
      var t = /\$[-\w]+|#\{\$[-\w]+\}/,
          i = [/[+*\/%]|[=!]=|<=?|>=?|\b(?:and|or|not)\b/, {
              pattern: /(\s)-(?=\s)/,
              lookbehind: !0
          }];
      e.languages.insertBefore("sass", "property", {
          "variable-line": {
              pattern: /^[ \t]*\$.+/m,
              greedy: !0,
              inside: {
                  punctuation: /:/,
                  variable: t,
                  operator: i
              }
          },
          "property-line": {
              pattern: /^[ \t]*(?:[^:\s]+ *:.*|:[^:\s].*)/m,
              greedy: !0,
              inside: {
                  property: [/[^:\s]+(?=\s*:)/, {
                      pattern: /(:)[^:\s]+/,
                      lookbehind: !0
                  }],
                  punctuation: /:/,
                  variable: t,
                  operator: i,
                  important: e.languages.sass.important
              }
          }
      }), delete e.languages.sass.property, delete e.languages.sass.important, e.languages.insertBefore("sass", "punctuation", {
          selector: {
              pattern: /^([ \t]*)\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*(?:,(?:\r?\n|\r)\1[ \t]+\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*)*/m,
              lookbehind: !0,
              greedy: !0
          }
      })
  }(Prism), Prism.languages.scss = Prism.languages.extend("css", {
      comment: {
          pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
          lookbehind: !0
      },
      atrule: {
          pattern: /@[\w-](?:\([^()]+\)|[^()\s]|\s+(?!\s))*?(?=\s+[{;])/,
          inside: {
              rule: /@[\w-]+/
          }
      },
      url: /(?:[-a-z]+-)?url(?=\()/i,
      selector: {
          pattern: /(?=\S)[^@;{}()]?(?:[^@;{}()\s]|\s+(?!\s)|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}][^:{}]*[:{][^}]))/m,
          inside: {
              parent: {
                  pattern: /&/,
                  alias: "important"
              },
              placeholder: /%[-\w]+/,
              variable: /\$[-\w]+|#\{\$[-\w]+\}/
          }
      },
      property: {
          pattern: /(?:[-\w]|\$[-\w]|#\{\$[-\w]+\})+(?=\s*:)/,
          inside: {
              variable: /\$[-\w]+|#\{\$[-\w]+\}/
          }
      }
  }), Prism.languages.insertBefore("scss", "atrule", {
      keyword: [/@(?:if|else(?: if)?|forward|for|each|while|import|use|extend|debug|warn|mixin|include|function|return|content)\b/i, {
          pattern: /( )(?:from|through)(?= )/,
          lookbehind: !0
      }]
  }), Prism.languages.insertBefore("scss", "important", {
      variable: /\$[-\w]+|#\{\$[-\w]+\}/
  }), Prism.languages.insertBefore("scss", "function", {
      "module-modifier": {
          pattern: /\b(?:as|with|show|hide)\b/i,
          alias: "keyword"
      },
      placeholder: {
          pattern: /%[-\w]+/,
          alias: "selector"
      },
      statement: {
          pattern: /\B!(?:default|optional)\b/i,
          alias: "keyword"
      },
      boolean: /\b(?:true|false)\b/,
      null: {
          pattern: /\bnull\b/,
          alias: "keyword"
      },
      operator: {
          pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|or|not)(?=\s)/,
          lookbehind: !0
      }
  }), Prism.languages.scss.atrule.inside.rest = Prism.languages.scss, function(e) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).ProgressBar = e()
  }(function() {
      return function s(n, r, o) {
          function a(i, e) {
              if (!r[i]) {
                  if (!n[i]) {
                      var t = "function" == typeof require && require;
                      if (!e && t) return t(i, !0);
                      if (l) return l(i, !0);
                      e = new Error("Cannot find module '" + i + "'");
                      throw e.code = "MODULE_NOT_FOUND", e
                  }
                  t = r[i] = {
                      exports: {}
                  };
                  n[i][0].call(t.exports, function(e) {
                      var t = n[i][1][e];
                      return a(t || e)
                  }, t, t.exports, s, n, r, o)
              }
              return r[i].exports
          }
          for (var l = "function" == typeof require && require, e = 0; e < o.length; e++) a(o[e]);
          return a
      }({
          1: [function(e, _, S) {
              ! function() {
                  var c, u, h, r, p, m, s, l, t, n, a, y = this || Function("return this")(),
                      d = function() {
                          "use strict";

                          function n() {}

                          function r(e, t) {
                              for (var i in e) Object.hasOwnProperty.call(e, i) && t(i)
                          }

                          function o(t, i) {
                              return r(i, function(e) {
                                  t[e] = i[e]
                              }), t
                          }

                          function l(t, i) {
                              r(i, function(e) {
                                  void 0 === t[e] && (t[e] = i[e])
                              })
                          }

                          function u(e, t, i, s, n, r, o) {
                              var a, l, c = e < r ? 0 : (e - r) / n;
                              for (a in t) t.hasOwnProperty(a) && (l = o[a], l = "function" == typeof l ? l : g[l], t[a] = d(i[a], s[a], l, c));
                              return t
                          }

                          function d(e, t, i, s) {
                              return e + (t - e) * i(s)
                          }

                          function h(t, i) {
                              var s = e.prototype.filter,
                                  n = t._filterArgs;
                              r(s, function(e) {
                                  void 0 !== s[e][i] && s[e][i].apply(t, n)
                              })
                          }

                          function a(e, t, i, s, n, r, o, a, l, c, d) {
                              m = t + i + s, p = Math.min(d || f(), m), v = m <= p, m = s - (m - p), e.isPlaying() && (v ? (l(o, e._attachment, m), e.stop(!0)) : (e._scheduleId = c(e._timeoutHandler, 1e3 / 60), h(e, "beforeTween"), p < t + i ? u(1, n, r, o, 1, 1, a) : u(p, n, r, o, s, t + i, a), h(e, "afterTween"), l(n, e._attachment, m)))
                          }

                          function c(e, t) {
                              var i = {},
                                  s = typeof t;
                              return r(e, "string" == s || "function" == s ? function(e) {
                                  i[e] = t
                              } : function(e) {
                                  i[e] || (i[e] = t[e] || "linear")
                              }), i
                          }

                          function e(e, t) {
                              this._currentState = e || {}, this._configured = !1, this._scheduleFunction = i, void 0 !== t && this.setConfig(t)
                          }
                          var g, p, v, m, t = Date.now || function() {
                                  return +new Date
                              },
                              f = "undefined" != typeof SHIFTY_DEBUG_NOW ? SHIFTY_DEBUG_NOW : t,
                              i = "undefined" != typeof window && (window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || window.mozCancelRequestAnimationFrame && window.mozRequestAnimationFrame) || setTimeout;
                          return e.prototype.tween = function(e) {
                              return this._isTweening ? this : (void 0 === e && this._configured || this.setConfig(e), this._timestamp = f(), this._start(this.get(), this._attachment), this.resume())
                          }, e.prototype.setConfig = function(e) {
                              e = e || {}, this._configured = !0, this._attachment = e.attachment, this._pausedAtTime = null, this._scheduleId = null, this._delay = e.delay || 0, this._start = e.start || n, this._step = e.step || n, this._finish = e.finish || n, this._duration = e.duration || 500, this._currentState = o({}, e.from) || this.get(), this._originalState = this.get(), this._targetState = o({}, e.to) || this.get();
                              var t = this,
                                  i = (this._timeoutHandler = function() {
                                      a(t, t._timestamp, t._delay, t._duration, t._currentState, t._originalState, t._targetState, t._easing, t._step, t._scheduleFunction)
                                  }, this._currentState),
                                  s = this._targetState;
                              return l(s, i), this._easing = c(i, e.easing || "linear"), this._filterArgs = [i, this._originalState, s, this._easing], h(this, "tweenCreated"), this
                          }, e.prototype.get = function() {
                              return o({}, this._currentState)
                          }, e.prototype.set = function(e) {
                              this._currentState = e
                          }, e.prototype.pause = function() {
                              return this._pausedAtTime = f(), this._isPaused = !0, this
                          }, e.prototype.resume = function() {
                              return this._isPaused && (this._timestamp += f() - this._pausedAtTime), this._isPaused = !1, this._isTweening = !0, this._timeoutHandler(), this
                          }, e.prototype.seek = function(e) {
                              e = Math.max(e, 0);
                              var t = f();
                              return this._timestamp + e === 0 || (this._timestamp = t - e, this.isPlaying() || (this._isTweening = !0, this._isPaused = !1, a(this, this._timestamp, this._delay, this._duration, this._currentState, this._originalState, this._targetState, this._easing, this._step, this._scheduleFunction, t), this.pause())), this
                          }, e.prototype.stop = function(e) {
                              return this._isTweening = !1, this._isPaused = !1, this._timeoutHandler = n, (y.cancelAnimationFrame || y.webkitCancelAnimationFrame || y.oCancelAnimationFrame || y.msCancelAnimationFrame || y.mozCancelRequestAnimationFrame || y.clearTimeout)(this._scheduleId), e && (h(this, "beforeTween"), u(1, this._currentState, this._originalState, this._targetState, 1, 0, this._easing), h(this, "afterTween"), h(this, "afterTweenEnd"), this._finish.call(this, this._currentState, this._attachment)), this
                          }, e.prototype.isPlaying = function() {
                              return this._isTweening && !this._isPaused
                          }, e.prototype.setScheduleFunction = function(e) {
                              this._scheduleFunction = e
                          }, e.prototype.dispose = function() {
                              for (var e in this) this.hasOwnProperty(e) && delete this[e]
                          }, e.prototype.filter = {}, g = e.prototype.formula = {
                              linear: function(e) {
                                  return e
                              }
                          }, o(e, {
                              now: f,
                              each: r,
                              tweenProps: u,
                              tweenProp: d,
                              applyFilter: h,
                              shallowCopy: o,
                              defaults: l,
                              composeEasingObject: c
                          }), "function" == typeof SHIFTY_DEBUG_NOW && (y.timeoutHandler = a), "object" == typeof S ? _.exports = e : void 0 === y.Tweenable && (y.Tweenable = e), e
                      }();

                  function o(i) {
                      c.each(i, function(e) {
                          var t = i[e];
                          "string" == typeof t && t.match(s) && (i[e] = g(s, t, f))
                      })
                  }

                  function f(e) {
                      return 3 === (e = (e = e).replace(/#/, "")).length && (e = (e = e.split(""))[0] + e[0] + e[1] + e[1] + e[2] + e[2]), t[0] = i(e.substr(0, 2)), t[1] = i(e.substr(2, 2)), t[2] = i(e.substr(4, 2)), "rgb(" + t[0] + "," + t[1] + "," + t[2] + ")"
                  }

                  function i(e) {
                      return parseInt(e, 16)
                  }

                  function g(e, t, i) {
                      var s = t.match(e),
                          n = t.replace(e, l);
                      if (s)
                          for (var r, o = s.length, a = 0; a < o; a++) r = s.shift(), n = n.replace(l, i(r));
                      return n
                  }

                  function v(e) {
                      for (var t = e.match(r), i = t.length, s = e.match(m)[0], n = 0; n < i; n++) s += parseInt(t[n], 10) + ",";
                      return s.slice(0, -1) + ")"
                  }

                  function b(n) {
                      var r = {};
                      return c.each(n, function(e) {
                          var t, i, s = n[e];
                          "string" == typeof s && (t = T(s), r[e] = {
                              formatString: ((i = (s = s).match(h)) ? 1 !== i.length && !s[0].match(u) || i.unshift("") : i = ["", ""], i.join(l)),
                              chunkNames: function(e, t) {
                                  for (var i = [], s = e.length, n = 0; n < s; n++) i.push("_" + t + "_" + n);
                                  return i
                              }(t, e)
                          })
                      }), r
                  }

                  function w(n, r) {
                      c.each(r, function(e) {
                          for (var t = T(n[e]), i = t.length, s = 0; s < i; s++) n[r[e].chunkNames[s]] = +t[s];
                          delete n[e]
                      })
                  }

                  function x(i, s) {
                      c.each(s, function(e) {
                          i[e];
                          var t = function(e, t) {
                                  n.length = 0;
                                  for (var i = t.length, s = 0; s < i; s++) n.push(e[t[s]]);
                                  return n
                              }(function(e, t) {
                                  for (var i, s = {}, n = t.length, r = 0; r < n; r++) i = t[r], s[i] = e[i], delete e[i];
                                  return s
                              }(i, s[e].chunkNames), s[e].chunkNames),
                              t = function(e, t) {
                                  for (var i = e, s = t.length, n = 0; n < s; n++) i = i.replace(l, +t[n].toFixed(4));
                                  return i
                              }(s[e].formatString, t);
                          i[e] = g(p, t, v)
                      })
                  }

                  function T(e) {
                      return e.match(r)
                  }

                  function E(r, e, t, i, o, a) {
                      function l(e) {
                          return ((d * e + u) * e + h) * e
                      }

                      function c(e) {
                          return 0 <= e ? e : 0 - e
                      }
                      var d = 0,
                          u = 0,
                          h = 0,
                          p = 0,
                          s = 0,
                          n = 0,
                          d = 1 - (h = 3 * e) - (u = 3 * (i - e) - h),
                          p = 1 - (n = 3 * t) - (s = 3 * (o - t) - n);
                      return i = function(e, t) {
                          var i, s, n, r, o, a;
                          for (n = e, a = 0; a < 8; a++) {
                              if (c(r = l(n) - e) < t) return n;
                              if (c(o = function(e) {
                                      return (3 * d * e + 2 * u) * e + h
                                  }(n)) < 1e-6) break;
                              n -= r / o
                          }
                          if (s = 1, (i = 0) > (n = e)) return i;
                          if (s < n) return s;
                          for (; i < s;) {
                              if (c((r = l(n)) - e) < t) return n;
                              r < e ? i = n : s = n, n = .5 * (s - i) + i
                          }
                          return n
                      }(i = r, 1 / (200 * a)), ((p * i + s) * i + n) * i
                  }
                  d.shallowCopy(d.prototype.formula, {
                      easeInQuad: function(e) {
                          return Math.pow(e, 2)
                      },
                      easeOutQuad: function(e) {
                          return -(Math.pow(e - 1, 2) - 1)
                      },
                      easeInOutQuad: function(e) {
                          return (e /= .5) < 1 ? .5 * Math.pow(e, 2) : -.5 * ((e -= 2) * e - 2)
                      },
                      easeInCubic: function(e) {
                          return Math.pow(e, 3)
                      },
                      easeOutCubic: function(e) {
                          return Math.pow(e - 1, 3) + 1
                      },
                      easeInOutCubic: function(e) {
                          return (e /= .5) < 1 ? .5 * Math.pow(e, 3) : .5 * (Math.pow(e - 2, 3) + 2)
                      },
                      easeInQuart: function(e) {
                          return Math.pow(e, 4)
                      },
                      easeOutQuart: function(e) {
                          return -(Math.pow(e - 1, 4) - 1)
                      },
                      easeInOutQuart: function(e) {
                          return (e /= .5) < 1 ? .5 * Math.pow(e, 4) : -.5 * ((e -= 2) * Math.pow(e, 3) - 2)
                      },
                      easeInQuint: function(e) {
                          return Math.pow(e, 5)
                      },
                      easeOutQuint: function(e) {
                          return Math.pow(e - 1, 5) + 1
                      },
                      easeInOutQuint: function(e) {
                          return (e /= .5) < 1 ? .5 * Math.pow(e, 5) : .5 * (Math.pow(e - 2, 5) + 2)
                      },
                      easeInSine: function(e) {
                          return 1 - Math.cos(e * (Math.PI / 2))
                      },
                      easeOutSine: function(e) {
                          return Math.sin(e * (Math.PI / 2))
                      },
                      easeInOutSine: function(e) {
                          return -.5 * (Math.cos(Math.PI * e) - 1)
                      },
                      easeInExpo: function(e) {
                          return 0 === e ? 0 : Math.pow(2, 10 * (e - 1))
                      },
                      easeOutExpo: function(e) {
                          return 1 === e ? 1 : 1 - Math.pow(2, -10 * e)
                      },
                      easeInOutExpo: function(e) {
                          return 0 === e ? 0 : 1 === e ? 1 : (e /= .5) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (2 - Math.pow(2, -10 * --e))
                      },
                      easeInCirc: function(e) {
                          return -(Math.sqrt(1 - e * e) - 1)
                      },
                      easeOutCirc: function(e) {
                          return Math.sqrt(1 - Math.pow(e - 1, 2))
                      },
                      easeInOutCirc: function(e) {
                          return (e /= .5) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
                      },
                      easeOutBounce: function(e) {
                          return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
                      },
                      easeInBack: function(e) {
                          return e * e * (2.70158 * e - 1.70158)
                      },
                      easeOutBack: function(e) {
                          return --e * e * (2.70158 * e + 1.70158) + 1
                      },
                      easeInOutBack: function(e) {
                          var t = 1.70158;
                          return (e /= .5) < 1 ? e * e * ((1 + (t *= 1.525)) * e - t) * .5 : .5 * ((e -= 2) * e * ((1 + (t *= 1.525)) * e + t) + 2)
                      },
                      elastic: function(e) {
                          return -1 * Math.pow(4, -8 * e) * Math.sin((6 * e - 1) * (2 * Math.PI) / 2) + 1
                      },
                      swingFromTo: function(e) {
                          var t = 1.70158;
                          return (e /= .5) < 1 ? e * e * ((1 + (t *= 1.525)) * e - t) * .5 : .5 * ((e -= 2) * e * ((1 + (t *= 1.525)) * e + t) + 2)
                      },
                      swingFrom: function(e) {
                          return e * e * (2.70158 * e - 1.70158)
                      },
                      swingTo: function(e) {
                          return --e * e * (2.70158 * e + 1.70158) + 1
                      },
                      bounce: function(e) {
                          return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
                      },
                      bouncePast: function(e) {
                          return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + .75) : e < 2.5 / 2.75 ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
                      },
                      easeFromTo: function(e) {
                          return (e /= .5) < 1 ? .5 * Math.pow(e, 4) : -.5 * ((e -= 2) * Math.pow(e, 3) - 2)
                      },
                      easeFrom: function(e) {
                          return Math.pow(e, 4)
                      },
                      easeTo: function(e) {
                          return Math.pow(e, .25)
                      }
                  }), d.setBezierFunction = function(e, t, i, s, n) {
                      r = t, o = i, a = s, l = n;
                      var r, o, a, l, c = function(e) {
                          return E(e, r, o, a, l, 1)
                      };
                      return c.displayName = e, c.x1 = t, c.y1 = i, c.x2 = s, c.y2 = n, d.prototype.formula[e] = c
                  }, d.unsetBezierFunction = function(e) {
                      delete d.prototype.formula[e]
                  }, (a = new d)._filterArgs = [], d.interpolate = function(e, t, i, s, n) {
                      var r = d.shallowCopy({}, e),
                          n = n || 0,
                          s = d.composeEasingObject(e, s || "linear"),
                          o = (a.set({}), a._filterArgs),
                          o = (o.length = 0, o[0] = r, o[1] = e, o[2] = t, o[3] = s, d.applyFilter(a, "tweenCreated"), d.applyFilter(a, "beforeTween"), d.tweenProps(i, r, e, t, 1, n, s));
                      return d.applyFilter(a, "afterTween"), o
                  }, c = d, u = /(\d|\-|\.)/, h = /([^\-0-9\.]+)/g, r = /[0-9.\-]+/g, p = new RegExp("rgb\\(" + r.source + /,\s*/.source + r.source + /,\s*/.source + r.source + "\\)", "g"), m = /^.*\(/, s = /#([0-9]|[a-f]){3,6}/gi, l = "VAL", t = [], n = [], c.prototype.filter.token = {
                      tweenCreated: function(e, t, i, s) {
                          o(e), o(t), o(i), this._tokenData = b(e)
                      },
                      beforeTween: function(e, t, i, s) {
                          var a, l;
                          a = s, l = this._tokenData, c.each(l, function(e) {
                              var t = l[e].chunkNames,
                                  i = t.length,
                                  s = a[e];
                              if ("string" == typeof s)
                                  for (var n = s.split(" "), r = n[n.length - 1], o = 0; o < i; o++) a[t[o]] = n[o] || r;
                              else
                                  for (o = 0; o < i; o++) a[t[o]] = s;
                              delete a[e]
                          }), w(e, this._tokenData), w(t, this._tokenData), w(i, this._tokenData)
                      },
                      afterTween: function(e, t, i, s) {
                          var o, a;
                          x(e, this._tokenData), x(t, this._tokenData), x(i, this._tokenData), o = s, a = this._tokenData, c.each(a, function(e) {
                              var t = a[e].chunkNames,
                                  i = t.length,
                                  s = o[t[0]];
                              if ("string" == typeof s) {
                                  for (var n = "", r = 0; r < i; r++) n += " " + o[t[r]], delete o[t[r]];
                                  o[e] = n.substr(1)
                              } else o[e] = s
                          })
                      }
                  }
              }.call(null)
          }, {}],
          2: [function(e, t, i) {
              function s(e, t) {
                  this._pathTemplate = "M 50,50 m 0,-{radius} a {radius},{radius} 0 1 1 0,{2radius} a {radius},{radius} 0 1 1 0,-{2radius}", this.containerAspectRatio = 1, n.apply(this, arguments)
              }
              var n = e("./shape"),
                  r = e("./utils");
              ((s.prototype = new n).constructor = s).prototype._pathString = function(e) {
                  var t = e.strokeWidth,
                      e = 50 - (t = e.trailWidth && e.trailWidth > e.strokeWidth ? e.trailWidth : t) / 2;
                  return r.render(this._pathTemplate, {
                      radius: e,
                      "2radius": 2 * e
                  })
              }, s.prototype._trailString = function(e) {
                  return this._pathString(e)
              }, t.exports = s
          }, {
              "./shape": 7,
              "./utils": 8
          }],
          3: [function(e, t, i) {
              function s(e, t) {
                  this._pathTemplate = "M 0,{center} L 100,{center}", n.apply(this, arguments)
              }
              var n = e("./shape"),
                  r = e("./utils");
              ((s.prototype = new n).constructor = s).prototype._initializeSvg = function(e, t) {
                  e.setAttribute("viewBox", "0 0 100 " + t.strokeWidth), e.setAttribute("preserveAspectRatio", "none")
              }, s.prototype._pathString = function(e) {
                  return r.render(this._pathTemplate, {
                      center: e.strokeWidth / 2
                  })
              }, s.prototype._trailString = function(e) {
                  return this._pathString(e)
              }, t.exports = s
          }, {
              "./shape": 7,
              "./utils": 8
          }],
          4: [function(e, t, i) {
              t.exports = {
                  Line: e("./line"),
                  Circle: e("./circle"),
                  SemiCircle: e("./semicircle"),
                  Path: e("./path"),
                  Shape: e("./shape"),
                  utils: e("./utils")
              }
          }, {
              "./circle": 2,
              "./line": 3,
              "./path": 5,
              "./semicircle": 6,
              "./shape": 7,
              "./utils": 8
          }],
          5: [function(e, t, i) {
              function s(e, t) {
                  if (!(this instanceof s)) throw new Error("Constructor was called without new keyword");
                  t = l.extend({
                      duration: 800,
                      easing: "linear",
                      from: {},
                      to: {},
                      step: function() {}
                  }, t), e = l.isString(e) ? document.querySelector(e) : e, this.path = e, this._opts = t, this._tweenable = null, e = this.path.getTotalLength(), this.path.style.strokeDasharray = e + " " + e, this.set(0)
              }
              var a = e("shifty"),
                  l = e("./utils"),
                  n = {
                      easeIn: "easeInCubic",
                      easeOut: "easeOutCubic",
                      easeInOut: "easeInOutCubic"
                  };
              s.prototype.value = function() {
                  var e = this._getComputedDashOffset(),
                      t = this.path.getTotalLength();
                  return parseFloat((1 - e / t).toFixed(6), 10)
              }, s.prototype.set = function(e) {
                  this.stop(), this.path.style.strokeDashoffset = this._progressToOffset(e);
                  var t, i = this._opts.step;
                  l.isFunction(i) && (t = this._easing(this._opts.easing), i(this._calculateTo(e, t), this._opts.shape || this, this._opts.attachment))
              }, s.prototype.stop = function() {
                  this._stopTween(), this.path.style.strokeDashoffset = this._getComputedDashOffset()
              }, s.prototype.animate = function(e, i, t) {
                  i = i || {}, l.isFunction(i) && (t = i, i = {});
                  var s = l.extend({}, i),
                      n = l.extend({}, this._opts),
                      n = (i = l.extend(n, i), this._easing(i.easing)),
                      s = this._resolveFromAndTo(e, n, s),
                      r = (this.stop(), this.path.getBoundingClientRect(), this._getComputedDashOffset()),
                      e = this._progressToOffset(e),
                      o = this;
                  this._tweenable = new a, this._tweenable.tween({
                      from: l.extend({
                          offset: r
                      }, s.from),
                      to: l.extend({
                          offset: e
                      }, s.to),
                      duration: i.duration,
                      easing: n,
                      step: function(e) {
                          o.path.style.strokeDashoffset = e.offset;
                          var t = i.shape || o;
                          i.step(e, t, i.attachment)
                      },
                      finish: function(e) {
                          l.isFunction(t) && t()
                      }
                  })
              }, s.prototype._getComputedDashOffset = function() {
                  var e = window.getComputedStyle(this.path, null);
                  return parseFloat(e.getPropertyValue("stroke-dashoffset"), 10)
              }, s.prototype._progressToOffset = function(e) {
                  var t = this.path.getTotalLength();
                  return t - e * t
              }, s.prototype._resolveFromAndTo = function(e, t, i) {
                  return i.from && i.to ? {
                      from: i.from,
                      to: i.to
                  } : {
                      from: this._calculateFrom(t),
                      to: this._calculateTo(e, t)
                  }
              }, s.prototype._calculateFrom = function(e) {
                  return a.interpolate(this._opts.from, this._opts.to, this.value(), e)
              }, s.prototype._calculateTo = function(e, t) {
                  return a.interpolate(this._opts.from, this._opts.to, e, t)
              }, s.prototype._stopTween = function() {
                  null !== this._tweenable && (this._tweenable.stop(), this._tweenable = null)
              }, s.prototype._easing = function(e) {
                  return n.hasOwnProperty(e) ? n[e] : e
              }, t.exports = s
          }, {
              "./utils": 8,
              shifty: 1
          }],
          6: [function(e, t, i) {
              function s(e, t) {
                  this._pathTemplate = "M 50,50 m -{radius},0 a {radius},{radius} 0 1 1 {2radius},0", this.containerAspectRatio = 2, n.apply(this, arguments)
              }
              var n = e("./shape"),
                  r = e("./circle"),
                  o = e("./utils");
              ((s.prototype = new n).constructor = s).prototype._initializeSvg = function(e, t) {
                  e.setAttribute("viewBox", "0 0 100 50")
              }, s.prototype._initializeTextContainer = function(e, t, i) {
                  e.text.style && (i.style.top = "auto", i.style.bottom = "0", e.text.alignToBottom ? o.setStyle(i, "transform", "translate(-50%, 0)") : o.setStyle(i, "transform", "translate(-50%, 50%)"))
              }, s.prototype._pathString = r.prototype._pathString, s.prototype._trailString = r.prototype._trailString, t.exports = s
          }, {
              "./circle": 2,
              "./shape": 7,
              "./utils": 8
          }],
          7: [function(e, t, i) {
              function n(e, t) {
                  if (!(this instanceof n)) throw new Error("Constructor was called without new keyword");
                  if (0 !== arguments.length) {
                      this._opts = o.extend({
                          color: "#555",
                          strokeWidth: 1,
                          trailColor: null,
                          trailWidth: null,
                          fill: null,
                          text: {
                              style: {
                                  color: null,
                                  position: "absolute",
                                  left: "50%",
                                  top: "50%",
                                  padding: 0,
                                  margin: 0,
                                  transform: {
                                      prefix: !0,
                                      value: "translate(-50%, -50%)"
                                  }
                              },
                              autoStyleContainer: !0,
                              alignToBottom: !0,
                              value: null,
                              className: "progressbar-text"
                          },
                          svgStyle: {
                              display: "block",
                              width: "100%"
                          },
                          warnings: !1
                      }, t, !0), o.isObject(t) && void 0 !== t.svgStyle && (this._opts.svgStyle = t.svgStyle), o.isObject(t) && o.isObject(t.text) && void 0 !== t.text.style && (this._opts.text.style = t.text.style);
                      var i = this._createSvgView(this._opts),
                          s = o.isString(e) ? document.querySelector(e) : e;
                      if (!s) throw new Error("Container does not exist: " + e);
                      this._container = s, this._container.appendChild(i.svg), this._opts.warnings && this._warnContainerAspectRatio(this._container), this._opts.svgStyle && o.setStyles(i.svg, this._opts.svgStyle), this.svg = i.svg, this.path = i.path, this.trail = i.trail, this.text = null;
                      s = o.extend({
                          attachment: void 0,
                          shape: this
                      }, this._opts);
                      this._progressPath = new r(i.path, s), o.isObject(this._opts.text) && null !== this._opts.text.value && this.setText(this._opts.text.value)
                  }
              }
              var r = e("./path"),
                  o = e("./utils"),
                  s = "Object is destroyed";
              n.prototype.animate = function(e, t, i) {
                  if (null === this._progressPath) throw new Error(s);
                  this._progressPath.animate(e, t, i)
              }, n.prototype.stop = function() {
                  if (null === this._progressPath) throw new Error(s);
                  void 0 !== this._progressPath && this._progressPath.stop()
              }, n.prototype.destroy = function() {
                  if (null === this._progressPath) throw new Error(s);
                  this.stop(), this.svg.parentNode.removeChild(this.svg), this.svg = null, this.path = null, this.trail = null, (this._progressPath = null) !== this.text && (this.text.parentNode.removeChild(this.text), this.text = null)
              }, n.prototype.set = function(e) {
                  if (null === this._progressPath) throw new Error(s);
                  this._progressPath.set(e)
              }, n.prototype.value = function() {
                  if (null === this._progressPath) throw new Error(s);
                  return void 0 === this._progressPath ? 0 : this._progressPath.value()
              }, n.prototype.setText = function(e) {
                  if (null === this._progressPath) throw new Error(s);
                  null === this.text && (this.text = this._createTextContainer(this._opts, this._container), this._container.appendChild(this.text)), o.isObject(e) ? (o.removeChildren(this.text), this.text.appendChild(e)) : this.text.innerHTML = e
              }, n.prototype._createSvgView = function(e) {
                  var t = document.createElementNS("http://www.w3.org/2000/svg", "svg"),
                      i = (this._initializeSvg(t, e), null),
                      e = ((e.trailColor || e.trailWidth) && (i = this._createTrail(e), t.appendChild(i)), this._createPath(e));
                  return t.appendChild(e), {
                      svg: t,
                      path: e,
                      trail: i
                  }
              }, n.prototype._initializeSvg = function(e, t) {
                  e.setAttribute("viewBox", "0 0 100 100")
              }, n.prototype._createPath = function(e) {
                  var t = this._pathString(e);
                  return this._createPathElement(t, e)
              }, n.prototype._createTrail = function(e) {
                  var t = this._trailString(e),
                      e = o.extend({}, e);
                  return e.trailColor || (e.trailColor = "#eee"), e.trailWidth || (e.trailWidth = e.strokeWidth), e.color = e.trailColor, e.strokeWidth = e.trailWidth, e.fill = null, this._createPathElement(t, e)
              }, n.prototype._createPathElement = function(e, t) {
                  var i = document.createElementNS("http://www.w3.org/2000/svg", "path");
                  return i.setAttribute("d", e), i.setAttribute("stroke", t.color), i.setAttribute("stroke-width", t.strokeWidth), t.fill ? i.setAttribute("fill", t.fill) : i.setAttribute("fill-opacity", "0"), i
              }, n.prototype._createTextContainer = function(e, t) {
                  var i = document.createElement("div"),
                      s = (i.className = e.text.className, e.text.style);
                  return s && (e.text.autoStyleContainer && (t.style.position = "relative"), o.setStyles(i, s), s.color || (i.style.color = e.color)), this._initializeTextContainer(e, t, i), i
              }, n.prototype._initializeTextContainer = function(e, t, i) {}, n.prototype._pathString = function(e) {
                  throw new Error("Override this function for each progress bar")
              }, n.prototype._trailString = function(e) {
                  throw new Error("Override this function for each progress bar")
              }, n.prototype._warnContainerAspectRatio = function(e) {
                  var t, i, s;
                  this.containerAspectRatio && (t = window.getComputedStyle(e, null), i = parseFloat(t.getPropertyValue("width"), 10), s = parseFloat(t.getPropertyValue("height"), 10), o.floatEquals(this.containerAspectRatio, i / s) || (console.warn("Incorrect aspect ratio of container", "#" + e.id, "detected:", t.getPropertyValue("width") + "(width)", "/", t.getPropertyValue("height") + "(height)", "=", i / s), console.warn("Aspect ratio of should be", this.containerAspectRatio)))
              }, t.exports = n
          }, {
              "./path": 5,
              "./utils": 8
          }],
          8: [function(e, t, i) {
              function s(e, t, i) {
                  for (var s = e.style, n = 0; n < o.length; ++n) s[o[n] + r(t)] = i;
                  s[t] = i
              }

              function r(e) {
                  return e.charAt(0).toUpperCase() + e.slice(1)
              }

              function a(e) {
                  return "[object Array]" !== Object.prototype.toString.call(e) && ("object" == typeof e && !!e)
              }

              function n(e, t) {
                  for (var i in e) e.hasOwnProperty(i) && t(e[i], i)
              }
              var o = "Webkit Moz O ms".split(" ");
              t.exports = {
                  extend: function e(t, i, s) {
                      for (var n in t = t || {}, s = s || !1, i = i || {}) {
                          var r, o;
                          i.hasOwnProperty(n) && (r = t[n], o = i[n], s && a(r) && a(o) ? t[n] = e(r, o, s) : t[n] = o)
                      }
                      return t
                  },
                  render: function(e, t) {
                      var i, s, n, r = e;
                      for (i in t) t.hasOwnProperty(i) && (s = t[i], n = new RegExp("\\{" + i + "\\}", "g"), r = r.replace(n, s));
                      return r
                  },
                  setStyle: s,
                  setStyles: function(i, e) {
                      n(e, function(e, t) {
                          null != e && (a(e) && !0 === e.prefix ? s(i, t, e.value) : i.style[t] = e)
                      })
                  },
                  capitalize: r,
                  isString: function(e) {
                      return "string" == typeof e || e instanceof String
                  },
                  isFunction: function(e) {
                      return "function" == typeof e
                  },
                  isObject: a,
                  forEachObject: n,
                  floatEquals: function(e, t) {
                      return Math.abs(e - t) < .001
                  },
                  removeChildren: function(e) {
                      for (; e.firstChild;) e.removeChild(e.firstChild)
                  }
              }
          }, {}]
      }, {}, [4])(4)
  }), function(e, t) {
      "function" == typeof define && define.amd ? define([], t) : "object" == typeof module && module.exports ? module.exports = t() : e.Rellax = t()
  }("undefined" != typeof window ? window : global, function() {
      function u(s, t) {
          var E = Object.create(u.prototype),
              r = 0,
              _ = 0,
              o = 0,
              S = 0,
              C = [],
              k = !0,
              n = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame || function(e) {
                  return setTimeout(e, 1e3 / 60)
              },
              a = null,
              l = !1;
          try {
              var e = Object.defineProperty({}, "passive", {
                  get: function() {
                      l = !0
                  }
              });
              window.addEventListener("testPassive", null, e), window.removeEventListener("testPassive", null, e)
          } catch (e) {}
          var c = window.cancelAnimationFrame || window.mozCancelAnimationFrame || clearTimeout,
              d = window.transformProp || function() {
                  var e = document.createElement("div");
                  if (null === e.style.transform) {
                      var t, i = ["Webkit", "Moz", "ms"];
                      for (t in i)
                          if (void 0 !== e.style[i[t] + "Transform"]) return i[t] + "Transform"
                  }
                  return "transform"
              }();
          if (E.options = {
                  speed: -2,
                  verticalSpeed: null,
                  horizontalSpeed: null,
                  breakpoints: [576, 768, 1201],
                  center: !1,
                  wrapper: null,
                  relativeToWrapper: !1,
                  round: !0,
                  vertical: !0,
                  horizontal: !1,
                  verticalScrollAxis: "y",
                  horizontalScrollAxis: "x",
                  callback: function() {}
              }, t && Object.keys(t).forEach(function(e) {
                  E.options[e] = t[e]
              }), t && t.breakpoints && function() {
                  if (3 === E.options.breakpoints.length && Array.isArray(E.options.breakpoints)) {
                      var t, i = !0,
                          s = !0;
                      if (E.options.breakpoints.forEach(function(e) {
                              "number" != typeof e && (s = !1), null !== t && e < t && (i = !1), t = e
                          }), i && s) return
                  }
                  E.options.breakpoints = [576, 768, 1201], console.warn("Rellax: You must pass an array of 3 numbers in ascending order to the breakpoints option. Defaults reverted")
              }(), 0 < (e = "string" == typeof(s = s || ".rellax") ? document.querySelectorAll(s) : [s]).length) {
              if (E.elems = e, E.options.wrapper && !E.options.wrapper.nodeType) {
                  if (!(e = document.querySelector(E.options.wrapper))) return void console.warn("Rellax: The wrapper you're trying to use doesn't exist.");
                  E.options.wrapper = e
              }

              function A() {
                  for (var e = 0; e < C.length; e++) E.elems[e].style.cssText = C[e].style;
                  for (C = [], _ = window.innerHeight, S = window.innerWidth, e = E.options.breakpoints, M = S < e[0] ? "xs" : S >= e[0] && S < e[1] ? "sm" : S >= e[1] && S < e[2] ? "md" : "lg", P(), e = 0; e < E.elems.length; e++) {
                      var t = void 0,
                          i = E.elems[e],
                          s = i.getAttribute("data-rellax-percentage"),
                          n = i.getAttribute("data-rellax-speed"),
                          r = i.getAttribute("data-rellax-xs-speed"),
                          o = i.getAttribute("data-rellax-mobile-speed"),
                          a = i.getAttribute("data-rellax-tablet-speed"),
                          l = i.getAttribute("data-rellax-desktop-speed"),
                          d = i.getAttribute("data-rellax-vertical-speed"),
                          u = i.getAttribute("data-rellax-horizontal-speed"),
                          h = i.getAttribute("data-rellax-vertical-scroll-axis"),
                          p = i.getAttribute("data-rellax-horizontal-scroll-axis"),
                          m = i.getAttribute("data-rellax-zindex") || 0,
                          f = i.getAttribute("data-rellax-min"),
                          g = i.getAttribute("data-rellax-max"),
                          v = i.getAttribute("data-rellax-min-x"),
                          y = i.getAttribute("data-rellax-max-x"),
                          b = i.getAttribute("data-rellax-min-y"),
                          w = i.getAttribute("data-rellax-max-y"),
                          c = !0,
                          x = (r || o || a || l ? t = {
                              xs: r,
                              sm: o,
                              md: a,
                              lg: l
                          } : c = !1, r = E.options.wrapper ? E.options.wrapper.scrollTop : window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop, E.options.relativeToWrapper && (r = (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) - E.options.wrapper.offsetTop), E.options.vertical && (s || E.options.center) ? r : 0),
                          T = E.options.horizontal && (s || E.options.center) ? E.options.wrapper ? E.options.wrapper.scrollLeft : window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft : 0,
                          r = x + i.getBoundingClientRect().top,
                          o = i.clientHeight || i.offsetHeight || i.scrollHeight,
                          a = T + i.getBoundingClientRect().left,
                          l = i.clientWidth || i.offsetWidth || i.scrollWidth,
                          x = s || (x - r + _) / (o + _),
                          s = s || (T - a + S) / (l + S);
                      E.options.center && (x = s = .5), t = c && null !== t[M] ? Number(t[M]) : n || E.options.speed, d = d || E.options.verticalSpeed, u = u || E.options.horizontalSpeed, h = h || E.options.verticalScrollAxis, p = p || E.options.horizontalScrollAxis, n = O(s, x, t, d, u), i = i.style.cssText, c = "", (s = /transform\s*:/i.exec(i)) && (c = (s = (c = i.slice(s.index)).indexOf(";")) ? " " + c.slice(11, s).replace(/\s/g, "") : " " + c.slice(11).replace(/\s/g, "")), C.push({
                          baseX: n.x,
                          baseY: n.y,
                          top: r,
                          left: a,
                          height: o,
                          width: l,
                          speed: t,
                          verticalSpeed: d,
                          horizontalSpeed: u,
                          verticalScrollAxis: h,
                          horizontalScrollAxis: p,
                          style: i,
                          transform: c,
                          zindex: m,
                          min: f,
                          max: g,
                          minX: v,
                          maxX: y,
                          minY: b,
                          maxY: w
                      })
                  }
                  L(), k && (window.addEventListener("resize", A), k = !1, I())
              }
              var M, P = function() {
                      var e = r,
                          t = o;
                      return r = E.options.wrapper ? E.options.wrapper.scrollTop : (document.documentElement || document.body.parentNode || document.body).scrollTop || window.pageYOffset, o = E.options.wrapper ? E.options.wrapper.scrollLeft : (document.documentElement || document.body.parentNode || document.body).scrollLeft || window.pageXOffset, !!(e != (r = E.options.relativeToWrapper ? ((document.documentElement || document.body.parentNode || document.body).scrollTop || window.pageYOffset) - E.options.wrapper.offsetTop : r) && E.options.vertical || t != o && E.options.horizontal)
                  },
                  O = function(e, t, i, s, n) {
                      var r = {};
                      return e = 100 * (n || i) * (1 - e), t = 100 * (s || i) * (1 - t), r.x = E.options.round ? Math.round(e) : Math.round(100 * e) / 100, r.y = E.options.round ? Math.round(t) : Math.round(100 * t) / 100, r
                  },
                  i = function() {
                      window.removeEventListener("resize", i), window.removeEventListener("orientationchange", i), (E.options.wrapper || window).removeEventListener("scroll", i), (E.options.wrapper || document).removeEventListener("touchmove", i), a = n(I)
                  },
                  I = function() {
                      P() && !1 === k ? (L(), a = n(I)) : (a = null, window.addEventListener("resize", i), window.addEventListener("orientationchange", i), (E.options.wrapper || window).addEventListener("scroll", i, !!l && {
                          passive: !0
                      }), (E.options.wrapper || document).addEventListener("touchmove", i, !!l && {
                          passive: !0
                      }))
                  },
                  L = function() {
                      for (var e = 0; e < E.elems.length; e++) {
                          var t = C[e].verticalScrollAxis.toLowerCase(),
                              i = C[e].horizontalScrollAxis.toLowerCase(),
                              s = -1 != t.indexOf("x") ? r : 0,
                              t = -1 != t.indexOf("y") ? r : 0,
                              n = -1 != i.indexOf("x") ? o : 0,
                              i = -1 != i.indexOf("y") ? o : 0;
                          i = (s = O((s + n - C[e].left + S) / (C[e].width + S), (t + i - C[e].top + _) / (C[e].height + _), C[e].speed, C[e].verticalSpeed, C[e].horizontalSpeed)).y - C[e].baseY, t = s.x - C[e].baseX, null !== C[e].min && (E.options.vertical && !E.options.horizontal && (i = i <= C[e].min ? C[e].min : i), E.options.horizontal && !E.options.vertical && (t = t <= C[e].min ? C[e].min : t)), null != C[e].minY && (i = i <= C[e].minY ? C[e].minY : i), null != C[e].minX && (t = t <= C[e].minX ? C[e].minX : t), null !== C[e].max && (E.options.vertical && !E.options.horizontal && (i = i >= C[e].max ? C[e].max : i), E.options.horizontal && !E.options.vertical && (t = t >= C[e].max ? C[e].max : t)), null != C[e].maxY && (i = i >= C[e].maxY ? C[e].maxY : i), null != C[e].maxX && (t = t >= C[e].maxX ? C[e].maxX : t), E.elems[e].style[d] = "translate3d(" + (E.options.horizontal ? t : "0") + "px," + (E.options.vertical ? i : "0") + "px," + C[e].zindex + "px) " + C[e].transform
                      }
                      E.options.callback(s)
                  };
              return E.destroy = function() {
                  for (var e = 0; e < E.elems.length; e++) E.elems[e].style.cssText = C[e].style;
                  k || (window.removeEventListener("resize", A), k = !0), c(a), a = null
              }, A(), E.refresh = A, E
          }
          console.warn("Rellax: The elements you're trying to select don't exist.")
      }
      return u
  }), function(e, t) {
      "use strict";

      function i(e, t) {
          var i = {
              animation: "animated fadeIn",
              speed: 2e3,
              separator: ",",
              hoverStop: !1,
              clickChange: !1,
              loopCount: "infinite",
              autoRun: !0,
              onInit: !1,
              onChange: !1,
              onComplete: !1
          };
          if (this.options = "object" == typeof t ? function(e, t) {
                  for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
                  return e
              }(i, t) : i, void 0 === e) throw new Error('ReplaceMe [constructor]: "element" parameter is required');
          if ("object" == typeof e) this.element = e;
          else {
              if ("string" != typeof e) throw new Error('ReplaceMe [constructor]: wrong "element" parameter');
              this.element = document.querySelector(e)
          }
          this.init()
      }
      i.prototype.init = function() {
          "function" == typeof this.options.onInit && this.options.onInit(), this.words = this.escapeHTML(this.element.innerHTML).split(this.options.separator), this.count = this.words.length, this.position = this.loopCount = 0, this.running = !1, this.bindAll(), !0 === this.options.autoRun && this.start()
      }, i.prototype.bindAll = function() {
          !0 === this.options.hoverStop && (this.element.addEventListener("mouseover", this.pause.bind(this)), this.element.addEventListener("mouseout", this.start.bind(this))), !0 === this.options.clickChange && this.element.addEventListener("click", this.change.bind(this))
      }, i.prototype.changeAnimation = function() {
          this.change(), this.loop = setTimeout(this.changeAnimation.bind(this), this.options.speed)
      }, i.prototype.start = function() {
          !0 !== this.running && (this.running = !0, this.changeWord(this.words[this.position]), this.position++), this.loop = setTimeout(this.changeAnimation.bind(this), this.options.speed)
      }, i.prototype.change = function() {
          return this.position > this.count - 1 && (this.position = 0, this.loopCount++, this.loopCount >= this.options.loopCount) ? void this.stop() : (this.changeWord(this.words[this.position]), this.position++, void("function" == typeof this.options.onChange && this.options.onChange()))
      }, i.prototype.stop = function() {
          this.running = !1, this.position = this.loopCount = 0, this.pause(), "function" == typeof this.options.onComplete && this.options.onComplete()
      }, i.prototype.pause = function() {
          clearTimeout(this.loop)
      }, i.prototype.changeWord = function(e) {
          this.element.innerHTML = '<span class="' + this.options.animation + '" style="display:inline-block;">' + e + "</span>"
      }, i.prototype.escapeHTML = function(e) {
          var t = /<\/?\w+\s*[^>]*>/g;
          return !0 === t.test(e) ? e.replace(t, "") : e
      }, e.ReplaceMe = i, "function" == typeof t && t.fn.extend({
          ReplaceMe: function(e) {
              return this.each(function() {
                  new i(this, e)
              })
          }
      })
  }(window, window.jQuery), $jscomp || {}),
  $jscomp$lookupPolyfilledValue = ($jscomp.scope = {}, $jscomp.arrayIteratorImpl = function(e) {
      var t = 0;
      return function() {
          return t < e.length ? {
              done: !1,
              value: e[t++]
          } : {
              done: !0
          }
      }
  }, $jscomp.arrayIterator = function(e) {
      return {
          next: $jscomp.arrayIteratorImpl(e)
      }
  }, $jscomp.ASSUME_ES5 = !1, $jscomp.ASSUME_NO_NATIVE_MAP = !1, $jscomp.ASSUME_NO_NATIVE_SET = !1, $jscomp.SIMPLE_FROUND_POLYFILL = !1, $jscomp.ISOLATE_POLYFILLS = !1, $jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function(e, t, i) {
      return e == Array.prototype || e == Object.prototype || (e[t] = i.value), e
  }, $jscomp.getGlobal = function(e) {
      e = ["object" == typeof globalThis && globalThis, e, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
      for (var t = 0; t < e.length; ++t) {
          var i = e[t];
          if (i && i.Math == Math) return i
      }
      throw Error("Cannot find global object")
  }, $jscomp.global = $jscomp.getGlobal(this), $jscomp.IS_SYMBOL_NATIVE = "function" == typeof Symbol && "symbol" == typeof Symbol("x"), $jscomp.TRUST_ES6_POLYFILLS = !$jscomp.ISOLATE_POLYFILLS || $jscomp.IS_SYMBOL_NATIVE, $jscomp.polyfills = {}, $jscomp.propertyToPolyfillSymbol = {}, $jscomp.POLYFILL_PREFIX = "$jscp$", function(e, t) {
      var i = $jscomp.propertyToPolyfillSymbol[t];
      return null != i && void 0 !== (i = e[i]) ? i : e[t]
  }),
  scrollCue = ($jscomp.polyfill = function(e, t, i, s) {
      t && ($jscomp.ISOLATE_POLYFILLS ? $jscomp.polyfillIsolated(e, t, i, s) : $jscomp.polyfillUnisolated(e, t, i, s))
  }, $jscomp.polyfillUnisolated = function(e, t, i, s) {
      for (i = $jscomp.global, e = e.split("."), s = 0; s < e.length - 1; s++) {
          var n = e[s];
          n in i || (i[n] = {}), i = i[n]
      }(t = t(s = i[e = e[e.length - 1]])) != s && null != t && $jscomp.defineProperty(i, e, {
          configurable: !0,
          writable: !0,
          value: t
      })
  }, $jscomp.polyfillIsolated = function(e, t, i, s) {
      var n = e.split(".");
      e = 1 === n.length, s = n[0], s = !e && s in $jscomp.polyfills ? $jscomp.polyfills : $jscomp.global;
      for (var r = 0; r < n.length - 1; r++) {
          var o = n[r];
          o in s || (s[o] = {}), s = s[o]
      }
      n = n[n.length - 1], null != (t = t(i = $jscomp.IS_SYMBOL_NATIVE && "es6" === i ? s[n] : null)) && (e ? $jscomp.defineProperty($jscomp.polyfills, n, {
          configurable: !0,
          writable: !0,
          value: t
      }) : t !== i && ($jscomp.propertyToPolyfillSymbol[n] = $jscomp.IS_SYMBOL_NATIVE ? $jscomp.global.Symbol(n) : $jscomp.POLYFILL_PREFIX + n, n = $jscomp.propertyToPolyfillSymbol[n], $jscomp.defineProperty(s, n, {
          configurable: !0,
          writable: !0,
          value: t
      })))
  }, $jscomp.initSymbol = function() {}, $jscomp.polyfill("Symbol", function(e) {
      if (e) return e;

      function t(e, t) {
          this.$jscomp$symbol$id_ = e, $jscomp.defineProperty(this, "description", {
              configurable: !0,
              writable: !0,
              value: t
          })
      }

      function i(e) {
          if (this instanceof i) throw new TypeError("Symbol is not a constructor");
          return new t("jscomp_symbol_" + (e || "") + "_" + s++, e)
      }
      t.prototype.toString = function() {
          return this.$jscomp$symbol$id_
      };
      var s = 0;
      return i
  }, "es6", "es3"), $jscomp.initSymbolIterator = function() {}, $jscomp.polyfill("Symbol.iterator", function(e) {
      if (e) return e;
      e = Symbol("Symbol.iterator");
      for (var t = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), i = 0; i < t.length; i++) {
          var s = $jscomp.global[t[i]];
          "function" == typeof s && "function" != typeof s.prototype[e] && $jscomp.defineProperty(s.prototype, e, {
              configurable: !0,
              writable: !0,
              value: function() {
                  return $jscomp.iteratorPrototype($jscomp.arrayIteratorImpl(this))
              }
          })
      }
      return e
  }, "es6", "es3"), $jscomp.initSymbolAsyncIterator = function() {}, $jscomp.iteratorPrototype = function(e) {
      return (e = {
          next: e
      })[Symbol.iterator] = function() {
          return this
      }, e
  }, $jscomp.iteratorFromArray = function(t, i) {
      t instanceof String && (t += "");
      var s = 0,
          n = {
              next: function() {
                  var e;
                  return s < t.length ? (e = s++, {
                      value: i(e, t[e]),
                      done: !1
                  }) : (n.next = function() {
                      return {
                          done: !0,
                          value: void 0
                      }
                  }, n.next())
              }
          };
      return n[Symbol.iterator] = function() {
          return n
      }, n
  }, $jscomp.polyfill("Array.prototype.keys", function(e) {
      return e || function() {
          return $jscomp.iteratorFromArray(this, function(e) {
              return e
          })
      }
  }, "es6", "es3"), function() {
      var r, n, o, a = {},
          s = 0,
          l = !0,
          c = !0,
          d = !1,
          t = !1,
          i = {
              duration: 600,
              interval: -.7,
              percentage: .75,
              enable: !0,
              docSlider: !1,
              pageChangeReset: !1
          },
          a = {
              setEvents: function(e) {
                  function t() {
                      l && (requestAnimationFrame(function() {
                          l = !0, c && (a.setQuery(), a.runQuery())
                      }), l = !1)
                  }
                  if (c && !e && window.addEventListener("load", a.runQuery), window.addEventListener("scroll", t), d) {
                      e = docSlider.getElements().pages;
                      for (var i = 0; i < e.length; i++) e[i].addEventListener("scroll", function(e) {
                          return docSlider.getCurrentIndex() + "" === (e = e.target.getAttribute("data-ds-index")) && void(docSlider._getWheelEnable() && t())
                      })
                  }
                  window.addEventListener("resize", function() {
                      0 < s && clearTimeout(s), s = setTimeout(function() {
                          c && (a.searchElements(), a.setQuery(), a.runQuery())
                      }, 200)
                  })
              },
              setOptions: function(t, i) {
                  var s = {};
                  if (void 0 !== t) return Object.keys(t).forEach(function(e) {
                      "[object Object]" === Object.prototype.toString.call(t[e]) ? s[e] = a.setOptions(t[e], i[e]) : (s[e] = t[e], void 0 !== i && void 0 !== i[e] && (s[e] = i[e]))
                  }), s
              },
              searchElements: function() {
                  r = [];
                  for (var e = document.querySelectorAll("[data-cues]:not([data-disabled])"), t = 0; t < e.length; t++) {
                      for (var i = e[t], s = 0; s < i.children.length; s++) {
                          var n = i.children[s];
                          a.setAttrPtoC(n, "data-cue", i, "data-cues", ""), a.setAttrPtoC(n, "data-duration", i, "data-duration", !1), a.setAttrPtoC(n, "data-interval", i, "data-interval", !1), a.setAttrPtoC(n, "data-sort", i, "data-sort", !1), a.setAttrPtoC(n, "data-addClass", i, "data-addClass", !1), a.setAttrPtoC(n, "data-group", i, "data-group", !1), a.setAttrPtoC(n, "data-delay", i, "data-delay", !1)
                      }
                      i.setAttribute("data-disabled", "true")
                  }
                  for (e = document.querySelectorAll('[data-cue]:not([data-show="true"])'), t = 0; t < e.length; t++) i = e[t], r.push({
                      elm: i,
                      cue: a.getAttr(i, "data-cue", "fadeIn"),
                      duration: Number(a.getAttr(i, "data-duration", o.duration)),
                      interval: Number(a.getAttr(i, "data-interval", o.interval)),
                      order: a.getOrderNumber(i),
                      sort: a.getAttr(i, "data-sort", null),
                      addClass: a.getAttr(i, "data-addClass", null),
                      group: a.getAttr(i, "data-group", null),
                      delay: Number(a.getAttr(i, "data-delay", 0))
                  });
                  if (d)
                      for (e = docSlider.getElements().pages.length, t = 0; t < e; t++)
                          for (i = document.querySelectorAll('[data-ds-index="' + t + '"] [data-cue]:not([data-scpage])'), s = 0; s < i.length; s++) i[s].setAttribute("data-scpage", t)
              },
              sortElements: function() {
                  for (var e = arguments[0], r = [].slice.call(arguments).slice(1), t = {
                          $jscomp$loop$prop$i$4: 0
                      }; t.$jscomp$loop$prop$i$4 < r.length;
                      (t = {
                          $jscomp$loop$prop$i$4: t.$jscomp$loop$prop$i$4
                      }).$jscomp$loop$prop$i$4++) e.sort(function(n) {
                      return function(e, t) {
                          var i = void 0 === r[n.$jscomp$loop$prop$i$4][1] || r[n.$jscomp$loop$prop$i$4][1],
                              s = r[n.$jscomp$loop$prop$i$4][0];
                          return e[s] > t[s] ? i ? 1 : -1 : e[s] < t[s] ? i ? -1 : 1 : 0
                      }
                  }(t))
              },
              randElements: function(e) {
                  for (var t = e.length - 1; 0 < t; t--) {
                      var i = Math.floor(Math.random() * (t + 1)),
                          s = e[t];
                      e[t] = e[i], e[i] = s
                  }
                  return e
              },
              setDurationValue: function(e, t, i) {
                  return void 0 === t ? e : (t = t.duration, (e = -1 === (i + "").indexOf(".") ? e + t + i : e + t + t * i) < 0 ? 0 : e)
              },
              getOrderNumber: function(e) {
                  return e.hasAttribute("data-order") ? 0 <= (e = Number(e.getAttribute("data-order"))) ? e : Math.pow(2, 53) - 1 + e : Math.pow(2, 52) - 1
              },
              setAttrPtoC: function(e, t, i, s, n) {
                  i.hasAttribute(s) ? e.hasAttribute(t) || e.setAttribute(t, i.getAttribute(s)) : !1 !== n && e.setAttribute(t, n)
              },
              getAttr: function(e, t, i) {
                  return e.hasAttribute(t) ? e.getAttribute(t) : i
              },
              getOffsetTop: function(e) {
                  return e.getBoundingClientRect().top + (window.pageYOffset || document.documentElement.scrollTop)
              },
              setClassNames: function(e, t) {
                  if (t) {
                      t = t.split(" ");
                      for (var i = 0; i < t.length; i++) e.classList.add(t[i])
                  }
              },
              setQuery: function() {
                  n = {};
                  for (var e = 0; e < r.length; e++) {
                      var t = r[e],
                          i = t.group || "$" + a.getOffsetTop(t.elm);
                      if (!t.elm.hasAttribute("data-show")) {
                          if (d) {
                              var s = t.elm.getAttribute("data-scpage");
                              if (s !== docSlider.getCurrentIndex() + "" && null !== s) continue
                          }
                          void 0 === n[i] && (n[i] = []), n[i].push(t)
                      }
                  }
              },
              runQuery: function() {
                  for (var e = Object.keys(n), t = {}, i = 0; i < e.length; t = {
                          $jscomp$loop$prop$elms$6: t.$jscomp$loop$prop$elms$6,
                          $jscomp$loop$prop$interval$7: t.$jscomp$loop$prop$interval$7
                      }, i++)
                      if (t.$jscomp$loop$prop$elms$6 = n[e[i]], a.isElementIn(t.$jscomp$loop$prop$elms$6[0].elm)) {
                          "reverse" === t.$jscomp$loop$prop$elms$6[0].sort ? t.$jscomp$loop$prop$elms$6.reverse() : "random" === t.$jscomp$loop$prop$elms$6[0].sort && a.randElements(t.$jscomp$loop$prop$elms$6), a.sortElements(t.$jscomp$loop$prop$elms$6, ["order"]);
                          for (var s = t.$jscomp$loop$prop$interval$7 = 0; s < t.$jscomp$loop$prop$elms$6.length; s++) ! function(t) {
                              return function(e) {
                                  t.$jscomp$loop$prop$elms$6[e].elm.setAttribute("data-show", "true"), a.setClassNames(t.$jscomp$loop$prop$elms$6[e].elm, t.$jscomp$loop$prop$elms$6[e].addClass), t.$jscomp$loop$prop$interval$7 = a.setDurationValue(t.$jscomp$loop$prop$interval$7, t.$jscomp$loop$prop$elms$6[e - 1], t.$jscomp$loop$prop$elms$6[e].interval), t.$jscomp$loop$prop$elms$6[e].elm.style.animationName = t.$jscomp$loop$prop$elms$6[e].cue, t.$jscomp$loop$prop$elms$6[e].elm.style.animationDuration = t.$jscomp$loop$prop$elms$6[e].duration + "ms", t.$jscomp$loop$prop$elms$6[e].elm.style.animationTimingFunction = "ease", t.$jscomp$loop$prop$elms$6[e].elm.style.animationDelay = t.$jscomp$loop$prop$interval$7 + t.$jscomp$loop$prop$elms$6[e].delay + "ms", t.$jscomp$loop$prop$elms$6[e].elm.style.animationDirection = "normal", t.$jscomp$loop$prop$elms$6[e].elm.style.animationFillMode = "both"
                              }
                          }(t)(s);
                          delete n[e[i]]
                      }
              },
              isElementIn: function(e) {
                  var t = e.hasAttribute("data-scpage") ? a.isScrollEndWithDocSlider : a.isScrollEnd;
                  return window.pageYOffset > a.getOffsetTop(e) - window.innerHeight * o.percentage || t()
              },
              isScrollEnd: function() {
                  var e = window.document.documentElement;
                  return (window.document.body.scrollTop || e.scrollTop) >= e.scrollHeight - e.clientHeight
              },
              isScrollEndWithDocSlider: function() {
                  var e = docSlider.getCurrentPage();
                  return e.scrollTop >= e.scrollHeight - e.clientHeight
              }
          };
      return {
          init: function(e) {
              o = a.setOptions(i, e), c = o.enable, d = o.docSlider, t = o.pageChangeReset, d || (a.setEvents(), a.searchElements(), a.setQuery())
          },
          update: function() {
              c && (a.searchElements(), a.setQuery(), a.runQuery())
          },
          enable: function(e) {
              c = void 0 === e ? !c : e, scrollCue.update()
          },
          _hasDocSlider: function() {
              return d
          },
          _hasPageChangeReset: function() {
              return t
          },
          _initWithDocSlider: function(e) {
              a.setEvents(e), a.searchElements(), a.setQuery()
          },
          _updateWithDocSlider: function() {
              c && (a.setQuery(), a.runQuery())
          },
          _searchElements: function() {
              a.searchElements()
          }
      }
  }());

function polyfill() {
  var e, s, a, l, i, t, c = window,
      d = document;

  function u(e, t) {
      this.scrollLeft = e, this.scrollTop = t
  }

  function n(e) {
      if (null === e || "object" != typeof e || void 0 === e.behavior || "auto" === e.behavior || "instant" === e.behavior) return !0;
      if ("object" == typeof e && "smooth" === e.behavior) return !1;
      throw new TypeError("behavior member of ScrollOptions " + e.behavior + " is not a valid value for enumeration ScrollBehavior.")
  }

  function o(e, t) {
      return "Y" === t ? e.clientHeight + i < e.scrollHeight : "X" === t ? e.clientWidth + i < e.scrollWidth : void 0
  }

  function h(e, t) {
      e = c.getComputedStyle(e, null)["overflow" + t];
      return "auto" === e || "scroll" === e
  }

  function p(e) {
      for (; e !== d.body && !1 === (i = void 0, i = o(t = e, "Y") && h(t, "Y"), t = o(t, "X") && h(t, "X"), i || t);) e = e.parentNode || e.host;
      var t, i;
      return e
  }

  function m(e) {
      var t, i = (l() - e.startTime) / s;
      i = i = 1 < i ? 1 : i, i = .5 * (1 - Math.cos(Math.PI * i)), t = e.startX + (e.x - e.startX) * i, i = e.startY + (e.y - e.startY) * i, e.method.call(e.scrollable, t, i), t === e.x && i === e.y || c.requestAnimationFrame(m.bind(c, e))
  }

  function r(e, t, i) {
      var s, n, r, o = l(),
          e = e === d.body ? (n = (s = c).scrollX || c.pageXOffset, r = c.scrollY || c.pageYOffset, a.scroll) : (n = (s = e).scrollLeft, r = e.scrollTop, u);
      m({
          scrollable: s,
          method: e,
          startTime: o,
          startX: n,
          startY: r,
          x: t,
          y: i
      })
  }
  "scrollBehavior" in d.documentElement.style && !0 !== c.__forceSmoothScrollPolyfill__ || (e = c.HTMLElement || c.Element, s = 468, a = {
      scroll: c.scroll || c.scrollTo,
      scrollBy: c.scrollBy,
      elementScroll: e.prototype.scroll || u,
      scrollIntoView: e.prototype.scrollIntoView
  }, l = c.performance && c.performance.now ? c.performance.now.bind(c.performance) : Date.now, t = c.navigator.userAgent, i = new RegExp(["MSIE ", "Trident/", "Edge/"].join("|")).test(t) ? 1 : 0, c.scroll = c.scrollTo = function() {
      void 0 !== arguments[0] && (!0 !== n(arguments[0]) ? r.call(c, d.body, void 0 !== arguments[0].left ? ~~arguments[0].left : c.scrollX || c.pageXOffset, void 0 !== arguments[0].top ? ~~arguments[0].top : c.scrollY || c.pageYOffset) : a.scroll.call(c, void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : c.scrollX || c.pageXOffset, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : c.scrollY || c.pageYOffset))
  }, c.scrollBy = function() {
      void 0 !== arguments[0] && (n(arguments[0]) ? a.scrollBy.call(c, void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : 0, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : 0) : r.call(c, d.body, ~~arguments[0].left + (c.scrollX || c.pageXOffset), ~~arguments[0].top + (c.scrollY || c.pageYOffset)))
  }, e.prototype.scroll = e.prototype.scrollTo = function() {
      if (void 0 !== arguments[0])
          if (!0 !== n(arguments[0])) {
              var e = arguments[0].left,
                  t = arguments[0].top;
              r.call(this, this, void 0 === e ? this.scrollLeft : ~~e, void 0 === t ? this.scrollTop : ~~t)
          } else {
              if ("number" == typeof arguments[0] && void 0 === arguments[1]) throw new SyntaxError("Value could not be converted");
              a.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left : "object" != typeof arguments[0] ? ~~arguments[0] : this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top : void 0 !== arguments[1] ? ~~arguments[1] : this.scrollTop)
          }
  }, e.prototype.scrollBy = function() {
      void 0 !== arguments[0] && (!0 !== n(arguments[0]) ? this.scroll({
          left: ~~arguments[0].left + this.scrollLeft,
          top: ~~arguments[0].top + this.scrollTop,
          behavior: arguments[0].behavior
      }) : a.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop))
  }, e.prototype.scrollIntoView = function() {
      var e, t, i;
      !0 !== n(arguments[0]) ? (t = (e = p(this)).getBoundingClientRect(), i = this.getBoundingClientRect(), e !== d.body ? (r.call(this, e, e.scrollLeft + i.left - t.left, e.scrollTop + i.top - t.top), "fixed" !== c.getComputedStyle(e).position && c.scrollBy({
          left: t.left,
          top: t.top,
          behavior: "smooth"
      })) : c.scrollBy({
          left: i.left,
          top: i.top,
          behavior: "smooth"
      })) : a.scrollIntoView.call(this, void 0 === arguments[0] || arguments[0])
  })
}
"object" == typeof exports && "undefined" != typeof module ? module.exports = {
      polyfill: polyfill
  } : polyfill(),
  function(a, h) {
      var t, n, p = "createElement",
          E = "getElementsByTagName",
          y = "length",
          _ = "style",
          m = "title",
          f = "undefined",
          b = "setAttribute",
          S = "getAttribute",
          w = null,
          g = "__svgInject",
          C = "--inject-",
          k = new RegExp(C + "\\d+", "g"),
          A = "LOAD_FAIL",
          M = "SVG_INVALID",
          P = ["src", "alt", "onload", "onerror"],
          O = h[p]("a"),
          I = typeof SVGRect != f,
          c = {
              useCache: !0,
              copyAttributes: !0,
              makeIdsUnique: !0
          },
          L = {
              clipPath: ["clip-path"],
              "color-profile": w,
              cursor: w,
              filter: w,
              linearGradient: ["fill", "stroke"],
              marker: ["marker", "marker-end", "marker-mid", "marker-start"],
              mask: w,
              pattern: ["fill", "stroke"],
              radialGradient: ["fill", "stroke"]
          },
          $ = 1,
          d = 2,
          z = 1;

      function N(e) {
          return (t = t || new XMLSerializer).serializeToString(e)
      }

      function D(d, u) {
          var h, e, t, i = C + z++,
              p = /url\("?#([a-zA-Z][\w:.-]*)"?\)/g,
              s = d.querySelectorAll("[id]"),
              n = u ? [] : w,
              m = {},
              r = [],
              f = !1;
          if (s[y]) {
              for (c = 0; c < s[y]; c++)(e = s[c].localName) in L && (m[e] = 1);
              for (e in m)(L[e] || [e]).forEach(function(e) {
                  r.indexOf(e) < 0 && r.push(e)
              });
              r[y] && r.push(_);
              for (var g, o, a, v = d[E]("*"), l = d, c = -1; l != w;) {
                  if (l.localName == _)(a = (o = l.textContent) && o.replace(p, function(e, t) {
                      return n && (n[t] = 1), "url(#" + t + i + ")"
                  })) !== o && (l.textContent = a);
                  else if (l.hasAttributes()) {
                      for (t = 0; t < r[y]; t++) g = r[t], (a = (o = l[S](g)) && o.replace(p, function(e, t) {
                          return n && (n[t] = 1), "url(#" + t + i + ")"
                      })) !== o && l[b](g, a);
                      ["xlink:href", "href"].forEach(function(e) {
                          var t = l[S](e);
                          /^\s*#/.test(t) && (t = t.trim(), l[b](e, t + i), n && (n[t.substring(1)] = 1))
                      })
                  }
                  l = v[++c]
              }
              for (c = 0; c < s[y]; c++) h = s[c], n && !n[h.id] || (h.id += i, f = !0)
          }
          return f
      }

      function j(e, t, i, s) {
          if (t) {
              t[b]("data-inject-url", i);
              i = e.parentNode;
              if (i) {
                  if (s.copyAttributes) {
                      var n = e;
                      var r = t;
                      for (var o, d = n.attributes, a = 0; a < d[y]; a++) {
                          var l, c, u = (o = d[a]).name; - 1 == P.indexOf(u) && (o = o.value, u == m ? ((c = r.firstElementChild) && c.localName.toLowerCase() == m ? l = c : (l = h[p + "NS"]("http://www.w3.org/2000/svg", m), r.insertBefore(l, c)), l.textContent = o) : r[b](u, o))
                      }
                  }
                  n = s.beforeInject, t = n && n(e, t) || t, i = (i.replaceChild(t, e), e[g] = $, x(e), s.afterInject);
                  i && i(e, t)
              }
          } else F(e, s)
      }

      function u() {
          for (var e = {}, t = arguments, i = 0; i < t[y]; i++) {
              var s, n = t[i];
              for (s in n) n.hasOwnProperty(s) && (e[s] = n[s])
          }
          return e
      }

      function v(e, t) {
          if (t) {
              var i;
              try {
                  s = e, i = (n = n || new DOMParser).parseFromString(s, "text/xml")
              } catch (e) {
                  return w
              }
              return i[E]("parsererror")[y] ? w : i.documentElement
          }
          var s, t = h.createElement("div");
          return t.innerHTML = e, t.firstElementChild
      }

      function x(e) {
          e.removeAttribute("onload")
      }

      function s(e) {
          console.error("SVGInject: " + e)
      }

      function i(e, t, i) {
          e[g] = d, i.onFail ? i.onFail(e, t) : s(t)
      }

      function F(e, t) {
          x(e), i(e, M, t)
      }

      function H(e, t) {
          x(e), i(e, "SVG_NOT_SUPPORTED", t)
      }

      function T(e, t) {
          i(e, A, t)
      }

      function q(e) {
          e.onload = w, e.onerror = w
      }

      function B() {
          s("no img element")
      }
      var e = function e(t, i) {
          var s, n, r = u(c, i),
              m = {};

          function o(o, a) {
              a = u(r, a);

              function e(t) {
                  function e() {
                      var e = a.onAllFinish;
                      e && e(), t && t()
                  }
                  if (o && typeof o[y] != f) {
                      var i = 0,
                          s = o[y];
                      if (0 == s) e();
                      else {
                          function n() {
                              ++i == s && e()
                          }
                          for (var r = 0; r < s; r++) l(o[r], a, n)
                      }
                  } else l(o, a, e)
              }
              return typeof Promise == f ? e() : new Promise(e)
          }

          function l(r, o, e) {
              if (r) {
                  var t = r[g];
                  if (t) Array.isArray(t) ? t.push(e) : e();
                  else {
                      if (q(r), !I) return H(r, o), e(), 0;
                      t = o.beforeLoad, t = t && t(r) || r[S]("src");
                      if (!t) return "" === t && T(r, o), e(), 0;

                      function a() {
                          e(), i.forEach(function(e) {
                              e()
                          })
                      }

                      function n(t) {
                          c && (m[l].forEach(function(e) {
                              e(t)
                          }), m[l] = t)
                      }
                      var i = [],
                          l = (r[g] = i, O.href = t, O.href),
                          c = o.useCache,
                          d = o.makeIdsUnique;
                      if (c) {
                          function u(e) {
                              var t, i, s, n;
                              e === A ? T(r, o) : e === M ? F(r, o) : (i = e[0], s = e[1], n = e[2], d && (i === w ? (i = D(t = v(s, !1), !1), e[0] = i, e[2] = i && N(t)) : i && (s = n.replace(k, C + z++))), t = t || v(s, !1), j(r, t, l, o)), a()
                          }
                          if (typeof(t = m[l]) != f) return t.isCallbackQueue ? t.push(u) : u(t), 0;
                          (t = []).isCallbackQueue = !0, m[l] = t
                      }
                      h = function(e, t) {
                          var i, e = e instanceof Document ? e.documentElement : v(t, !0),
                              s = o.afterLoad;
                          !s || (s = s(e, t) || e) && (t = (i = "string" == typeof s) ? s : N(e), e = i ? v(s, !0) : s), e instanceof SVGElement ? (i = w, d && (i = D(e, !1)), c && (s = i && N(e), n([i, t, s])), j(r, e, l, o)) : (F(r, o), n(M)), a()
                      }, p = function() {
                          T(r, o), n(A), a()
                      }, (t = l) && ((s = new XMLHttpRequest).onreadystatechange = function() {
                          var e;
                          4 == s.readyState && (200 == (e = s.status) ? h(s.responseXML, s.responseText.trim()) : (400 <= e || 0 == e) && p())
                      }, s.open("GET", t, !0), s.send())
                  }
              } else B();
              var h, p, s
          }
          return I && (i = 'img[onload^="' + t + '("]{visibility:hidden;}', (n = h[E]("head")[0]) && ((s = h[p](_)).type = "text/css", s.appendChild(h.createTextNode(i)), n.appendChild(s))), o.setOptions = function(e) {
              r = u(r, e)
          }, o.create = e, o.err = function(e, t) {
              e ? e[g] != d && (q(e), I ? (x(e), T(e, r)) : H(e, r), t && (x(e), e.src = t)) : B()
          }, a[t] = o
      }("SVGInject");
      "object" == typeof module && "object" == typeof module.exports && (module.exports = e)
  }(window, document),
  function(e, t) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).Swiper = t()
  }(this, function() {
      "use strict";

      function r(e) {
          return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object
      }

      function a(t = {}, i = {}) {
          Object.keys(i).forEach(e => {
              void 0 === t[e] ? t[e] = i[e] : r(i[e]) && r(t[e]) && 0 < Object.keys(i[e]).length && a(t[e], i[e])
          })
      }
      const t = {
          body: {},
          addEventListener() {},
          removeEventListener() {},
          activeElement: {
              blur() {},
              nodeName: ""
          },
          querySelector: () => null,
          querySelectorAll: () => [],
          getElementById: () => null,
          createEvent: () => ({
              initEvent() {}
          }),
          createElement: () => ({
              children: [],
              childNodes: [],
              style: {},
              setAttribute() {},
              getElementsByTagName: () => []
          }),
          createElementNS: () => ({}),
          importNode: () => null,
          location: {
              hash: "",
              host: "",
              hostname: "",
              href: "",
              origin: "",
              pathname: "",
              protocol: "",
              search: ""
          }
      };

      function T() {
          var e = "undefined" != typeof document ? document : {};
          return a(e, t), e
      }
      const i = {
          document: t,
          navigator: {
              userAgent: ""
          },
          location: {
              hash: "",
              host: "",
              hostname: "",
              href: "",
              origin: "",
              pathname: "",
              protocol: "",
              search: ""
          },
          history: {
              replaceState() {},
              pushState() {},
              go() {},
              back() {}
          },
          CustomEvent: function() {
              return this
          },
          addEventListener() {},
          removeEventListener() {},
          getComputedStyle: () => ({
              getPropertyValue: () => ""
          }),
          Image() {},
          Date() {},
          screen: {},
          setTimeout() {},
          clearTimeout() {},
          matchMedia: () => ({}),
          requestAnimationFrame: e => "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
          cancelAnimationFrame(e) {
              "undefined" != typeof setTimeout && clearTimeout(e)
          }
      };

      function P() {
          var e = "undefined" != typeof window ? window : {};
          return a(e, i), e
      }
      class o extends Array {
          constructor(e) {
              super(...e || []); {
                  const t = (e = this).__proto__;
                  return void Object.defineProperty(e, "__proto__", {
                      get: () => t,
                      set(e) {
                          t.__proto__ = e
                      }
                  })
              }
          }
      }

      function l(e = []) {
          const t = [];
          return e.forEach(e => {
              Array.isArray(e) ? t.push(...l(e)) : t.push(e)
          }), t
      }

      function c(e, t) {
          return Array.prototype.filter.call(e, t)
      }

      function O(e, t) {
          const i = P(),
              s = T();
          let n = [];
          if (!t && e instanceof o) return e;
          if (!e) return new o(n);
          if ("string" == typeof e) {
              const i = e.trim();
              if (0 <= i.indexOf("<") && 0 <= i.indexOf(">")) {
                  let e = "div";
                  0 === i.indexOf("<li") && (e = "ul"), 0 === i.indexOf("<tr") && (e = "tbody"), 0 !== i.indexOf("<td") && 0 !== i.indexOf("<th") || (e = "tr"), 0 === i.indexOf("<tbody") && (e = "table"), 0 === i.indexOf("<option") && (e = "select");
                  const t = s.createElement(e);
                  t.innerHTML = i;
                  for (let e = 0; e < t.childNodes.length; e += 1) n.push(t.childNodes[e])
              } else n = function(e, t) {
                  if ("string" != typeof e) return [e];
                  const i = [],
                      s = t.querySelectorAll(e);
                  for (let e = 0; e < s.length; e += 1) i.push(s[e]);
                  return i
              }(e.trim(), t || s)
          } else if (e.nodeType || e === i || e === s) n.push(e);
          else if (Array.isArray(e)) {
              if (e instanceof o) return e;
              n = e
          }
          return new o(function(t) {
              const i = [];
              for (let e = 0; e < t.length; e += 1) - 1 === i.indexOf(t[e]) && i.push(t[e]);
              return i
          }(n))
      }
      O.fn = o.prototype;
      const d = {
          addClass: function(...e) {
              const t = l(e.map(e => e.split(" ")));
              return this.forEach(e => {
                  e.classList.add(...t)
              }), this
          },
          removeClass: function(...e) {
              const t = l(e.map(e => e.split(" ")));
              return this.forEach(e => {
                  e.classList.remove(...t)
              }), this
          },
          hasClass: function(...e) {
              const i = l(e.map(e => e.split(" ")));
              return 0 < c(this, t => 0 < i.filter(e => t.classList.contains(e)).length).length
          },
          toggleClass: function(...e) {
              const i = l(e.map(e => e.split(" ")));
              this.forEach(t => {
                  i.forEach(e => {
                      t.classList.toggle(e)
                  })
              })
          },
          attr: function(t, i) {
              if (1 === arguments.length && "string" == typeof t) return this[0] ? this[0].getAttribute(t) : void 0;
              for (let e = 0; e < this.length; e += 1)
                  if (2 === arguments.length) this[e].setAttribute(t, i);
                  else
                      for (const i in t) this[e][i] = t[i], this[e].setAttribute(i, t[i]);
              return this
          },
          removeAttr: function(t) {
              for (let e = 0; e < this.length; e += 1) this[e].removeAttribute(t);
              return this
          },
          transform: function(t) {
              for (let e = 0; e < this.length; e += 1) this[e].style.transform = t;
              return this
          },
          transition: function(t) {
              for (let e = 0; e < this.length; e += 1) this[e].style.transitionDuration = "string" != typeof t ? t + "ms" : t;
              return this
          },
          on: function(...t) {
              let [i, s, n, r] = t;

              function o(t) {
                  var e = t.target;
                  if (e) {
                      const i = t.target.dom7EventData || [];
                      if (i.indexOf(t) < 0 && i.unshift(t), O(e).is(s)) n.apply(e, i);
                      else {
                          const t = O(e).parents();
                          for (let e = 0; e < t.length; e += 1) O(t[e]).is(s) && n.apply(t[e], i)
                      }
                  }
              }

              function a(e) {
                  const t = e && e.target && e.target.dom7EventData || [];
                  t.indexOf(e) < 0 && t.unshift(e), n.apply(this, t)
              }
              "function" == typeof t[1] && ([i, n, r] = t, s = void 0), r = r || !1;
              var l = i.split(" ");
              let c;
              for (let e = 0; e < this.length; e += 1) {
                  const i = this[e];
                  if (s)
                      for (c = 0; c < l.length; c += 1) {
                          const t = l[c];
                          i.dom7LiveListeners || (i.dom7LiveListeners = {}), i.dom7LiveListeners[t] || (i.dom7LiveListeners[t] = []), i.dom7LiveListeners[t].push({
                              listener: n,
                              proxyListener: o
                          }), i.addEventListener(t, o, r)
                      } else
                          for (c = 0; c < l.length; c += 1) {
                              const t = l[c];
                              i.dom7Listeners || (i.dom7Listeners = {}), i.dom7Listeners[t] || (i.dom7Listeners[t] = []), i.dom7Listeners[t].push({
                                  listener: n,
                                  proxyListener: a
                              }), i.addEventListener(t, a, r)
                          }
              }
              return this
          },
          off: function(...e) {
              let [i, s, n, r] = e;
              "function" == typeof e[1] && ([i, n, r] = e, s = void 0), r = r || !1;
              const o = i.split(" ");
              for (let e = 0; e < o.length; e += 1) {
                  const i = o[e];
                  for (let e = 0; e < this.length; e += 1) {
                      const o = this[e];
                      let t;
                      if (!s && o.dom7Listeners ? t = o.dom7Listeners[i] : s && o.dom7LiveListeners && (t = o.dom7LiveListeners[i]), t && t.length)
                          for (let e = t.length - 1; 0 <= e; --e) {
                              const s = t[e];
                              !(n && s.listener === n || n && s.listener && s.listener.dom7proxy && s.listener.dom7proxy === n) && n || (o.removeEventListener(i, s.proxyListener, r), t.splice(e, 1))
                          }
                  }
              }
              return this
          },
          trigger: function(...t) {
              const i = P(),
                  s = t[0].split(" "),
                  n = t[1];
              for (let e = 0; e < s.length; e += 1) {
                  const P = s[e];
                  for (let e = 0; e < this.length; e += 1) {
                      const r = this[e];
                      if (i.CustomEvent) {
                          const s = new i.CustomEvent(P, {
                              detail: n,
                              bubbles: !0,
                              cancelable: !0
                          });
                          r.dom7EventData = t.filter((e, t) => 0 < t), r.dispatchEvent(s), r.dom7EventData = [], delete r.dom7EventData
                      }
                  }
              }
              return this
          },
          transitionEnd: function(i) {
              const s = this;
              return i && s.on("transitionend", function e(t) {
                  t.target === this && (i.call(this, t), s.off("transitionend", e))
              }), this
          },
          outerWidth: function(e) {
              if (0 < this.length) {
                  if (e) {
                      const e = this.styles();
                      return this[0].offsetWidth + parseFloat(e.getPropertyValue("margin-right")) + parseFloat(e.getPropertyValue("margin-left"))
                  }
                  return this[0].offsetWidth
              }
              return null
          },
          outerHeight: function(e) {
              if (0 < this.length) {
                  if (e) {
                      const e = this.styles();
                      return this[0].offsetHeight + parseFloat(e.getPropertyValue("margin-top")) + parseFloat(e.getPropertyValue("margin-bottom"))
                  }
                  return this[0].offsetHeight
              }
              return null
          },
          styles: function() {
              const e = P();
              return this[0] ? e.getComputedStyle(this[0], null) : {}
          },
          offset: function() {
              if (0 < this.length) {
                  const e = P(),
                      t = T(),
                      i = this[0],
                      s = i.getBoundingClientRect(),
                      n = t.body,
                      r = i.clientTop || n.clientTop || 0,
                      o = i.clientLeft || n.clientLeft || 0,
                      a = i === e ? e.scrollY : i.scrollTop,
                      l = i === e ? e.scrollX : i.scrollLeft;
                  return {
                      top: s.top + a - r,
                      left: s.left + l - o
                  }
              }
              return null
          },
          css: function(e, t) {
              const i = P();
              let s;
              if (1 === arguments.length) {
                  if ("string" != typeof e) {
                      for (s = 0; s < this.length; s += 1)
                          for (const t in e) this[s].style[t] = e[t];
                      return this
                  }
                  if (this[0]) return i.getComputedStyle(this[0], null).getPropertyValue(e)
              }
              if (2 !== arguments.length || "string" != typeof e) return this;
              for (s = 0; s < this.length; s += 1) this[s].style[e] = t;
              return this
          },
          each: function(i) {
              return i && this.forEach((e, t) => {
                  i.apply(e, [e, t])
              }), this
          },
          html: function(t) {
              if (void 0 === t) return this[0] ? this[0].innerHTML : null;
              for (let e = 0; e < this.length; e += 1) this[e].innerHTML = t;
              return this
          },
          text: function(t) {
              if (void 0 === t) return this[0] ? this[0].textContent.trim() : null;
              for (let e = 0; e < this.length; e += 1) this[e].textContent = t;
              return this
          },
          is: function(e) {
              const t = P(),
                  i = T(),
                  s = this[0];
              let n, r;
              if (!s || void 0 === e) return !1;
              if ("string" == typeof e) {
                  if (s.matches) return s.matches(e);
                  if (s.webkitMatchesSelector) return s.webkitMatchesSelector(e);
                  if (s.msMatchesSelector) return s.msMatchesSelector(e);
                  for (n = O(e), r = 0; r < n.length; r += 1)
                      if (n[r] === s) return !0;
                  return !1
              }
              if (e === i) return s === i;
              if (e === t) return s === t;
              if (e.nodeType || e instanceof o) {
                  for (n = e.nodeType ? [e] : e, r = 0; r < n.length; r += 1)
                      if (n[r] === s) return !0;
                  return !1
              }
              return !1
          },
          index: function() {
              let e, t = this[0];
              if (t) {
                  for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
                  return e
              }
          },
          eq: function(e) {
              if (void 0 === e) return this;
              var t = this.length;
              return O(t - 1 < e ? [] : e < 0 ? (t = t + e) < 0 ? [] : [this[t]] : [this[e]])
          },
          append: function(...t) {
              var i;
              const s = T();
              for (let e = 0; e < t.length; e += 1) {
                  i = t[e];
                  for (let t = 0; t < this.length; t += 1)
                      if ("string" == typeof i) {
                          const T = s.createElement("div");
                          for (T.innerHTML = i; T.firstChild;) this[t].appendChild(T.firstChild)
                      } else if (i instanceof o)
                      for (let e = 0; e < i.length; e += 1) this[t].appendChild(i[e]);
                  else this[t].appendChild(i)
              }
              return this
          },
          prepend: function(e) {
              const t = T();
              let i, s;
              for (i = 0; i < this.length; i += 1)
                  if ("string" == typeof e) {
                      const T = t.createElement("div");
                      for (T.innerHTML = e, s = T.childNodes.length - 1; 0 <= s; --s) this[i].insertBefore(T.childNodes[s], this[i].childNodes[0])
                  } else if (e instanceof o)
                  for (s = 0; s < e.length; s += 1) this[i].insertBefore(e[s], this[i].childNodes[0]);
              else this[i].insertBefore(e, this[i].childNodes[0]);
              return this
          },
          next: function(e) {
              return 0 < this.length ? e ? this[0].nextElementSibling && O(this[0].nextElementSibling).is(e) ? O([this[0].nextElementSibling]) : O([]) : this[0].nextElementSibling ? O([this[0].nextElementSibling]) : O([]) : O([])
          },
          nextAll: function(e) {
              const t = [];
              let i = this[0];
              if (!i) return O([]);
              for (; i.nextElementSibling;) {
                  var s = i.nextElementSibling;
                  e && !O(s).is(e) || t.push(s), i = s
              }
              return O(t)
          },
          prev: function(e) {
              var t;
              return 0 < this.length ? (t = this[0], e ? t.previousElementSibling && O(t.previousElementSibling).is(e) ? O([t.previousElementSibling]) : O([]) : t.previousElementSibling ? O([t.previousElementSibling]) : O([])) : O([])
          },
          prevAll: function(e) {
              const t = [];
              let i = this[0];
              if (!i) return O([]);
              for (; i.previousElementSibling;) {
                  var s = i.previousElementSibling;
                  e && !O(s).is(e) || t.push(s), i = s
              }
              return O(t)
          },
          parent: function(t) {
              const i = [];
              for (let e = 0; e < this.length; e += 1) null === this[e].parentNode || t && !O(this[e].parentNode).is(t) || i.push(this[e].parentNode);
              return O(i)
          },
          parents: function(i) {
              const s = [];
              for (let t = 0; t < this.length; t += 1) {
                  let e = this[t].parentNode;
                  for (; e;) i && !O(e).is(i) || s.push(e), e = e.parentNode
              }
              return O(s)
          },
          closest: function(e) {
              let t = this;
              return void 0 === e ? O([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
          },
          find: function(t) {
              const i = [];
              for (let e = 0; e < this.length; e += 1) {
                  var s = this[e].querySelectorAll(t);
                  for (let e = 0; e < s.length; e += 1) i.push(s[e])
              }
              return O(i)
          },
          children: function(t) {
              const i = [];
              for (let e = 0; e < this.length; e += 1) {
                  var s = this[e].children;
                  for (let e = 0; e < s.length; e += 1) t && !O(s[e]).is(t) || i.push(s[e])
              }
              return O(i)
          },
          filter: function(e) {
              return O(c(this, e))
          },
          remove: function() {
              for (let e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
              return this
          }
      };

      function E(e, t = 0) {
          return setTimeout(e, t)
      }

      function g() {
          return Date.now()
      }

      function I(e, t = "x") {
          const i = P();
          let s, n, r;
          const o = function(e) {
              const t = P();
              let i;
              return t.getComputedStyle && (i = t.getComputedStyle(e, null)), !i && e.currentStyle && (i = e.currentStyle), i = i || e.style, i
          }(e);
          return i.WebKitCSSMatrix ? (n = o.transform || o.webkitTransform, 6 < n.split(",").length && (n = n.split(", ").map(e => e.replace(",", ".")).join(", ")), r = new i.WebKitCSSMatrix("none" === n ? "" : n)) : (r = o.MozTransform || o.OTransform || o.MsTransform || o.msTransform || o.transform || o.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), s = r.toString().split(",")), "x" === t && (n = i.WebKitCSSMatrix ? r.m41 : 16 === s.length ? parseFloat(s[12]) : parseFloat(s[4])), "y" === t && (n = i.WebKitCSSMatrix ? r.m42 : 16 === s.length ? parseFloat(s[13]) : parseFloat(s[5])), n || 0
      }

      function u(e) {
          return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
      }

      function h(...i) {
          const s = Object(i[0]),
              t = ["__proto__", "constructor", "prototype"];
          for (let e = 1; e < i.length; e += 1) {
              var n = i[e];
              if (null != n && !("undefined" != typeof window && void 0 !== window.HTMLElement ? n instanceof HTMLElement : n && (1 === n.nodeType || 11 === n.nodeType))) {
                  const i = Object.keys(Object(n)).filter(e => t.indexOf(e) < 0);
                  for (let e = 0, t = i.length; e < t; e += 1) {
                      const r = i[e],
                          o = Object.getOwnPropertyDescriptor(n, r);
                      void 0 !== o && o.enumerable && (u(s[r]) && u(n[r]) ? n[r].__swiper__ ? s[r] = n[r] : h(s[r], n[r]) : !u(s[r]) && u(n[r]) ? (s[r] = {}, n[r].__swiper__ ? s[r] = n[r] : h(s[r], n[r])) : s[r] = n[r])
                  }
              }
          }
          var r;
          return s
      }

      function C(e, t, i) {
          e.style.setProperty(t, i)
      }

      function y({
          swiper: i,
          targetPosition: s,
          side: n
      }) {
          const r = P(),
              o = -i.translate;
          let a, l = null;
          const h = i.params.speed,
              c = (i.wrapperEl.style.scrollSnapType = "none", r.cancelAnimationFrame(i.cssModeFrameID), s > o ? "next" : "prev"),
              d = (e, t) => "next" === c && t <= e || "prev" === c && e <= t,
              u = () => {
                  a = (new Date).getTime(), null === l && (l = a);
                  var e = Math.max(Math.min((a - l) / h, 1), 0),
                      e = .5 - Math.cos(e * Math.PI) / 2;
                  let t = o + e * (s - o);
                  if (d(t, s) && (t = s), i.wrapperEl.scrollTo({
                          [n]: t
                      }), d(t, s)) return i.wrapperEl.style.overflow = "hidden", i.wrapperEl.style.scrollSnapType = "", setTimeout(() => {
                      i.wrapperEl.style.overflow = "", i.wrapperEl.scrollTo({
                          [n]: t
                      })
                  }), void r.cancelAnimationFrame(i.cssModeFrameID);
                  i.cssModeFrameID = r.requestAnimationFrame(u)
              };
          u()
      }
      let e, p, m;

      function f() {
          return e = e || function() {
              const i = P(),
                  e = T();
              return {
                  smoothScroll: e.documentElement && "scrollBehavior" in e.documentElement.style,
                  touch: !!("ontouchstart" in i || i.DocumentTouch && e instanceof i.DocumentTouch),
                  passiveListener: function() {
                      let e = !1;
                      try {
                          var t = Object.defineProperty({}, "passive", {
                              get() {
                                  e = !0
                              }
                          });
                          i.addEventListener("testPassiveListener", null, t)
                      } catch (e) {}
                      return e
                  }(),
                  gestures: "ongesturestart" in i
              }
          }(), e
      }

      function b({
          swiper: e,
          runCallbacks: t,
          direction: i,
          step: s
      }) {
          var {
              activeIndex: n,
              previousIndex: r
          } = e;
          let o = i;
          if (o = o || (r < n ? "next" : n < r ? "prev" : "reset"), e.emit("transition" + s), t && n !== r) {
              if ("reset" === o) return e.emit("slideResetTransition" + s), 0;
              e.emit("slideChangeTransition" + s), "next" === o ? e.emit("slideNextTransition" + s) : e.emit("slidePrevTransition" + s)
          }
      }

      function w() {
          var e, t, i = this,
              {
                  params: s,
                  el: n
              } = i;
          n && 0 === n.offsetWidth || (s.breakpoints && i.setBreakpoint(), {
              allowSlideNext: n,
              allowSlidePrev: e,
              snapGrid: t
          } = i, i.allowSlideNext = !0, i.allowSlidePrev = !0, i.updateSize(), i.updateSlides(), i.updateSlidesClasses(), ("auto" === s.slidesPerView || 1 < s.slidesPerView) && i.isEnd && !i.isBeginning && !i.params.centeredSlides ? i.slideTo(i.slides.length - 1, 0, !1, !0) : i.slideTo(i.activeIndex, 0, !1, !0), i.autoplay && i.autoplay.running && i.autoplay.paused && i.autoplay.run(), i.allowSlidePrev = e, i.allowSlideNext = n, i.params.watchOverflow && t !== i.snapGrid && i.checkOverflow())
      }
      Object.keys(d).forEach(e => {
          Object.defineProperty(O.fn, e, {
              value: d[e],
              writable: !0
          })
      });
      let x = !1;

      function _() {}
      const S = (e, t) => {
              const i = T(),
                  {
                      params: s,
                      touchEvents: n,
                      el: r,
                      wrapperEl: d,
                      device: o,
                      support: a
                  } = e,
                  l = !!s.nested,
                  c = "on" === t ? "addEventListener" : "removeEventListener",
                  u = t;
              if (a.touch) {
                  const t = !("touchstart" !== n.start || !a.passiveListener || !s.passiveListeners) && {
                      passive: !0,
                      capture: !1
                  };
                  r[c](n.start, e.onTouchStart, t), r[c](n.move, e.onTouchMove, a.passiveListener ? {
                      passive: !1,
                      capture: l
                  } : l), r[c](n.end, e.onTouchEnd, t), n.cancel && r[c](n.cancel, e.onTouchEnd, t)
              } else r[c](n.start, e.onTouchStart, !1), i[c](n.move, e.onTouchMove, l), i[c](n.end, e.onTouchEnd, !1);
              (s.preventClicks || s.preventClicksPropagation) && r[c]("click", e.onClick, !0), s.cssMode && d[c]("scroll", e.onScroll), s.updateOnWindowResize ? e[u](o.ios || o.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", w, !0) : e[u]("observerUpdate", w, !0)
          },
          k = (e, t) => e.grid && t.grid && 1 < t.grid.rows;
      var A = {
          init: !0,
          direction: "horizontal",
          touchEventsTarget: "wrapper",
          initialSlide: 0,
          speed: 300,
          cssMode: !1,
          updateOnWindowResize: !0,
          resizeObserver: !0,
          nested: !1,
          createElements: !1,
          enabled: !0,
          focusableElements: "input, select, option, textarea, button, video, label",
          width: null,
          height: null,
          preventInteractionOnTransition: !1,
          userAgent: null,
          url: null,
          edgeSwipeDetection: !1,
          edgeSwipeThreshold: 20,
          autoHeight: !1,
          setWrapperSize: !1,
          virtualTranslate: !1,
          effect: "slide",
          breakpoints: void 0,
          breakpointsBase: "window",
          spaceBetween: 0,
          slidesPerView: 1,
          slidesPerGroup: 1,
          slidesPerGroupSkip: 0,
          slidesPerGroupAuto: !1,
          centeredSlides: !1,
          centeredSlidesBounds: !1,
          slidesOffsetBefore: 0,
          slidesOffsetAfter: 0,
          normalizeSlideIndex: !0,
          centerInsufficientSlides: !1,
          watchOverflow: !0,
          roundLengths: !1,
          touchRatio: 1,
          touchAngle: 45,
          simulateTouch: !0,
          shortSwipes: !0,
          longSwipes: !0,
          longSwipesRatio: .5,
          longSwipesMs: 300,
          followFinger: !0,
          allowTouchMove: !0,
          threshold: 0,
          touchMoveStopPropagation: !1,
          touchStartPreventDefault: !0,
          touchStartForcePreventDefault: !1,
          touchReleaseOnEdges: !1,
          uniqueNavElements: !0,
          resistance: !0,
          resistanceRatio: .85,
          watchSlidesProgress: !1,
          grabCursor: !1,
          preventClicks: !0,
          preventClicksPropagation: !0,
          slideToClickedSlide: !1,
          preloadImages: !0,
          updateOnImagesReady: !0,
          loop: !1,
          loopAdditionalSlides: 0,
          loopedSlides: null,
          loopFillGroupWithBlank: !1,
          loopPreventsSlide: !0,
          rewind: !1,
          allowSlidePrev: !0,
          allowSlideNext: !0,
          swipeHandler: null,
          noSwiping: !0,
          noSwipingClass: "swiper-no-swiping",
          noSwipingSelector: null,
          passiveListeners: !0,
          containerModifierClass: "swiper-",
          slideClass: "swiper-slide",
          slideBlankClass: "swiper-slide-invisible-blank",
          slideActiveClass: "swiper-slide-active",
          slideDuplicateActiveClass: "swiper-slide-duplicate-active",
          slideVisibleClass: "swiper-slide-visible",
          slideDuplicateClass: "swiper-slide-duplicate",
          slideNextClass: "swiper-slide-next",
          slideDuplicateNextClass: "swiper-slide-duplicate-next",
          slidePrevClass: "swiper-slide-prev",
          slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
          wrapperClass: "swiper-wrapper",
          runCallbacksOnInit: !0,
          _emitClasses: !1
      };
      const M = {
              eventsEmitter: {
                  on(e, t, i) {
                      const s = this;
                      if ("function" != typeof t) return s;
                      const n = i ? "unshift" : "push";
                      return e.split(" ").forEach(e => {
                          s.eventsListeners[e] || (s.eventsListeners[e] = []), s.eventsListeners[e][n](t)
                      }), s
                  },
                  once(t, i, e) {
                      const s = this;
                      return "function" != typeof i ? s : (n.__emitterProxy = i, s.on(t, n, e));

                      function n(...e) {
                          s.off(t, n), n.__emitterProxy && delete n.__emitterProxy, i.apply(s, e)
                      }
                  },
                  onAny(e, t) {
                      if ("function" != typeof e) return this;
                      t = t ? "unshift" : "push";
                      return this.eventsAnyListeners.indexOf(e) < 0 && this.eventsAnyListeners[t](e), this
                  },
                  offAny(e) {
                      if (!this.eventsAnyListeners) return this;
                      e = this.eventsAnyListeners.indexOf(e);
                      return 0 <= e && this.eventsAnyListeners.splice(e, 1), this
                  },
                  off(e, s) {
                      const n = this;
                      return n.eventsListeners && e.split(" ").forEach(i => {
                          void 0 === s ? n.eventsListeners[i] = [] : n.eventsListeners[i] && n.eventsListeners[i].forEach((e, t) => {
                              (e === s || e.__emitterProxy && e.__emitterProxy === s) && n.eventsListeners[i].splice(t, 1)
                          })
                      }), n
                  },
                  emit(...e) {
                      const i = this;
                      if (!i.eventsListeners) return i;
                      let t, s, n;
                      return n = "string" == typeof e[0] || Array.isArray(e[0]) ? (t = e[0], s = e.slice(1, e.length), i) : (t = e[0].events, s = e[0].data, e[0].context || i), s.unshift(n), (Array.isArray(t) ? t : t.split(" ")).forEach(t => {
                          i.eventsAnyListeners && i.eventsAnyListeners.length && i.eventsAnyListeners.forEach(e => {
                              e.apply(n, [t, ...s])
                          }), i.eventsListeners && i.eventsListeners[t] && i.eventsListeners[t].forEach(e => {
                              e.apply(n, s)
                          })
                      }), i
                  }
              },
              update: {
                  updateSize: function() {
                      var e = this;
                      let t, i;
                      const s = e.$el;
                      t = void 0 !== e.params.width && null !== e.params.width ? e.params.width : s[0].clientWidth, i = void 0 !== e.params.height && null !== e.params.height ? e.params.height : s[0].clientHeight, 0 === t && e.isHorizontal() || 0 === i && e.isVertical() || (t = t - parseInt(s.css("padding-left") || 0, 10) - parseInt(s.css("padding-right") || 0, 10), i = i - parseInt(s.css("padding-top") || 0, 10) - parseInt(s.css("padding-bottom") || 0, 10), Number.isNaN(t) && (t = 0), Number.isNaN(i) && (i = 0), Object.assign(e, {
                          width: t,
                          height: i,
                          size: e.isHorizontal() ? t : i
                      }))
                  },
                  updateSlides: function() {
                      const i = this;

                      function s(e) {
                          return i.isHorizontal() ? e : {
                              width: "height",
                              "margin-top": "margin-left",
                              "margin-bottom ": "margin-right",
                              "margin-left": "margin-top",
                              "margin-right": "margin-bottom",
                              "padding-left": "padding-top",
                              "padding-right": "padding-bottom",
                              marginRight: "marginBottom"
                          } [e]
                      }

                      function n(e, t) {
                          return parseFloat(e.getPropertyValue(s(t)) || 0)
                      }
                      const r = i.params,
                          {
                              $wrapperEl: h,
                              size: o,
                              rtlTranslate: a,
                              wrongRTL: p
                          } = i,
                          m = i.virtual && r.virtual.enabled,
                          e = (m ? i.virtual : i).slides.length,
                          l = h.children("." + i.params.slideClass),
                          f = (m ? i.virtual.slides : l).length;
                      let c = [];
                      const g = [],
                          v = [];
                      let y = r.slidesOffsetBefore,
                          b = ("function" == typeof y && (y = r.slidesOffsetBefore.call(i)), r.slidesOffsetAfter);
                      "function" == typeof b && (b = r.slidesOffsetAfter.call(i));
                      var w = i.snapGrid.length,
                          x = i.slidesGrid.length;
                      let d = r.spaceBetween,
                          u = -y,
                          T = 0,
                          E = 0;
                      if (void 0 !== o) {
                          "string" == typeof d && 0 <= d.indexOf("%") && (d = parseFloat(d.replace("%", "")) / 100 * o), i.virtualSize = -d, a ? l.css({
                              marginLeft: "",
                              marginBottom: "",
                              marginTop: ""
                          }) : l.css({
                              marginRight: "",
                              marginBottom: "",
                              marginTop: ""
                          }), r.centeredSlides && r.cssMode && (C(i.wrapperEl, "--swiper-centered-offset-before", ""), C(i.wrapperEl, "--swiper-centered-offset-after", ""));
                          var _ = r.grid && 1 < r.grid.rows && i.grid;
                          let t;
                          _ && i.grid.initSlides(f);
                          var S = "auto" === r.slidesPerView && r.breakpoints && 0 < Object.keys(r.breakpoints).filter(e => void 0 !== r.breakpoints[e].slidesPerView).length;
                          for (let e = 0; e < f; e += 1) {
                              t = 0;
                              const a = l.eq(e);
                              if (_ && i.grid.updateSlide(e, a, f, s), "none" !== a.css("display")) {
                                  if ("auto" === r.slidesPerView) {
                                      S && (l[e].style[s("width")] = "");
                                      const o = getComputedStyle(a[0]),
                                          p = a[0].style.transform,
                                          m = a[0].style.webkitTransform;
                                      if (p && (a[0].style.transform = "none"), m && (a[0].style.webkitTransform = "none"), r.roundLengths) t = i.isHorizontal() ? a.outerWidth(!0) : a.outerHeight(!0);
                                      else {
                                          const i = n(o, "width"),
                                              s = n(o, "padding-left"),
                                              r = n(o, "padding-right"),
                                              h = n(o, "margin-left"),
                                              p = n(o, "margin-right"),
                                              m = o.getPropertyValue("box-sizing");
                                          if (m && "border-box" === m) t = i + h + p;
                                          else {
                                              const {
                                                  clientWidth: n,
                                                  offsetWidth: o
                                              } = a[0];
                                              t = i + s + r + h + p + (o - n)
                                          }
                                      }
                                      p && (a[0].style.transform = p), m && (a[0].style.webkitTransform = m), r.roundLengths && (t = Math.floor(t))
                                  } else t = (o - (r.slidesPerView - 1) * d) / r.slidesPerView, r.roundLengths && (t = Math.floor(t)), l[e] && (l[e].style[s("width")] = t + "px");
                                  l[e] && (l[e].swiperSlideSize = t), v.push(t), r.centeredSlides ? (u = u + t / 2 + T / 2 + d, 0 === T && 0 !== e && (u = u - o / 2 - d), 0 === e && (u = u - o / 2 - d), Math.abs(u) < .001 && (u = 0), r.roundLengths && (u = Math.floor(u)), E % r.slidesPerGroup == 0 && c.push(u), g.push(u)) : (r.roundLengths && (u = Math.floor(u)), (E - Math.min(i.params.slidesPerGroupSkip, E)) % i.params.slidesPerGroup == 0 && c.push(u), g.push(u), u = u + t + d), i.virtualSize += t + d, T = t, E += 1
                              }
                          }
                          if (i.virtualSize = Math.max(i.virtualSize, o) + b, a && p && ("slide" === r.effect || "coverflow" === r.effect) && h.css({
                                  width: i.virtualSize + r.spaceBetween + "px"
                              }), r.setWrapperSize && h.css({
                                  [s("width")]: i.virtualSize + r.spaceBetween + "px"
                              }), _ && i.grid.updateWrapperSize(t, c, s), !r.centeredSlides) {
                              const s = [];
                              for (let t = 0; t < c.length; t += 1) {
                                  let e = c[t];
                                  r.roundLengths && (e = Math.floor(e)), c[t] <= i.virtualSize - o && s.push(e)
                              }
                              c = s, 1 < Math.floor(i.virtualSize - o) - Math.floor(c[c.length - 1]) && c.push(i.virtualSize - o)
                          }
                          if (0 === c.length && (c = [0]), 0 !== r.spaceBetween) {
                              const n = i.isHorizontal() && a ? "marginLeft" : s("marginRight");
                              l.filter((e, t) => !r.cssMode || t !== l.length - 1).css({
                                  [n]: d + "px"
                              })
                          }
                          if (r.centeredSlides && r.centeredSlidesBounds) {
                              let t = 0;
                              v.forEach(e => {
                                  t += e + (r.spaceBetween || 0)
                              }), t -= r.spaceBetween;
                              const s = t - o;
                              c = c.map(e => e < 0 ? -y : e > s ? s + b : e)
                          }
                          if (r.centerInsufficientSlides) {
                              let t = 0;
                              if (v.forEach(e => {
                                      t += e + (r.spaceBetween || 0)
                                  }), t -= r.spaceBetween, t < o) {
                                  const s = (o - t) / 2;
                                  c.forEach((e, t) => {
                                      c[t] = e - s
                                  }), g.forEach((e, t) => {
                                      g[t] = e + s
                                  })
                              }
                          }
                          if (Object.assign(i, {
                                  slides: l,
                                  snapGrid: c,
                                  slidesGrid: g,
                                  slidesSizesGrid: v
                              }), r.centeredSlides && r.cssMode && !r.centeredSlidesBounds) {
                              C(i.wrapperEl, "--swiper-centered-offset-before", -c[0] + "px"), C(i.wrapperEl, "--swiper-centered-offset-after", i.size / 2 - v[v.length - 1] / 2 + "px");
                              const s = -i.snapGrid[0],
                                  n = -i.slidesGrid[0];
                              i.snapGrid = i.snapGrid.map(e => e + s), i.slidesGrid = i.slidesGrid.map(e => e + n)
                          }
                          f !== e && i.emit("slidesLengthChange"), c.length !== w && (i.params.watchOverflow && i.checkOverflow(), i.emit("snapGridLengthChange")), g.length !== x && i.emit("slidesGridLengthChange"), r.watchSlidesProgress && i.updateSlidesOffset()
                      }
                  },
                  updateAutoHeight: function(e) {
                      const i = this,
                          t = [],
                          s = i.virtual && i.params.virtual.enabled;
                      let n, r = 0;
                      "number" == typeof e ? i.setTransition(e) : !0 === e && i.setTransition(i.params.speed);
                      var o = t => (s ? i.slides.filter(e => parseInt(e.getAttribute("data-swiper-slide-index"), 10) === t) : i.slides.eq(t))[0];
                      if ("auto" !== i.params.slidesPerView && 1 < i.params.slidesPerView)
                          if (i.params.centeredSlides) i.visibleSlides.each(e => {
                              t.push(e)
                          });
                          else
                              for (n = 0; n < Math.ceil(i.params.slidesPerView); n += 1) {
                                  const e = i.activeIndex + n;
                                  if (e > i.slides.length && !s) break;
                                  t.push(o(e))
                              } else t.push(o(i.activeIndex));
                      for (n = 0; n < t.length; n += 1)
                          if (void 0 !== t[n]) {
                              const e = t[n].offsetHeight;
                              r = e > r ? e : r
                          }! r && 0 !== r || i.$wrapperEl.css("height", r + "px")
                  },
                  updateSlidesOffset: function() {
                      const t = this.slides;
                      for (let e = 0; e < t.length; e += 1) t[e].swiperSlideOffset = this.isHorizontal() ? t[e].offsetLeft : t[e].offsetTop
                  },
                  updateSlidesProgress: function(e = this && this.translate || 0) {
                      const s = this,
                          n = s.params,
                          {
                              slides: r,
                              rtlTranslate: o,
                              snapGrid: a
                          } = s;
                      if (0 !== r.length) {
                          void 0 === r[0].swiperSlideOffset && s.updateSlidesOffset();
                          let i = o ? e : -e;
                          r.removeClass(n.slideVisibleClass), s.visibleSlidesIndexes = [], s.visibleSlides = [];
                          for (let t = 0; t < r.length; t += 1) {
                              const l = r[t];
                              let e = l.swiperSlideOffset;
                              n.cssMode && n.centeredSlides && (e -= r[0].swiperSlideOffset);
                              const O = (i + (n.centeredSlides ? s.minTranslate() : 0) - e) / (l.swiperSlideSize + n.spaceBetween),
                                  c = (i - a[0] + (n.centeredSlides ? s.minTranslate() : 0) - e) / (l.swiperSlideSize + n.spaceBetween),
                                  d = -(i - e),
                                  u = d + s.slidesSizesGrid[t];
                              (0 <= d && d < s.size - 1 || 1 < u && u <= s.size || d <= 0 && u >= s.size) && (s.visibleSlides.push(l), s.visibleSlidesIndexes.push(t), r.eq(t).addClass(n.slideVisibleClass)), l.progress = o ? -O : O, l.originalProgress = o ? -c : c
                          }
                          s.visibleSlides = O(s.visibleSlides)
                      }
                  },
                  updateProgress: function(e) {
                      var t = this;
                      if (void 0 === e) {
                          const i = t.rtlTranslate ? -1 : 1;
                          e = t && t.translate && t.translate * i || 0
                      }
                      const i = t.params,
                          s = t.maxTranslate() - t.minTranslate();
                      let {
                          progress: n,
                          isBeginning: r,
                          isEnd: o
                      } = t;
                      var a = r,
                          l = o;
                      o = 0 == s ? (n = 0, r = !0) : (n = (e - t.minTranslate()) / s, r = n <= 0, 1 <= n), Object.assign(t, {
                          progress: n,
                          isBeginning: r,
                          isEnd: o
                      }), (i.watchSlidesProgress || i.centeredSlides && i.autoHeight) && t.updateSlidesProgress(e), r && !a && t.emit("reachBeginning toEdge"), o && !l && t.emit("reachEnd toEdge"), (a && !r || l && !o) && t.emit("fromEdge"), t.emit("progress", n)
                  },
                  updateSlidesClasses: function() {
                      const {
                          slides: e,
                          params: t,
                          $wrapperEl: i,
                          activeIndex: s,
                          realIndex: n
                      } = this, r = this.virtual && t.virtual.enabled;
                      let o, a = (e.removeClass(`${t.slideActiveClass} ${t.slideNextClass} ${t.slidePrevClass} ${t.slideDuplicateActiveClass} ${t.slideDuplicateNextClass} ` + t.slideDuplicatePrevClass), o = r ? this.$wrapperEl.find(`.${t.slideClass}[data-swiper-slide-index="${s}"]`) : e.eq(s), o.addClass(t.slideActiveClass), t.loop && (o.hasClass(t.slideDuplicateClass) ? i.children(`.${t.slideClass}:not(.${t.slideDuplicateClass})[data-swiper-slide-index="${n}"]`) : i.children(`.${t.slideClass}.${t.slideDuplicateClass}[data-swiper-slide-index="${n}"]`)).addClass(t.slideDuplicateActiveClass), o.nextAll("." + t.slideClass).eq(0).addClass(t.slideNextClass)),
                          l = (t.loop && 0 === a.length && (a = e.eq(0), a.addClass(t.slideNextClass)), o.prevAll("." + t.slideClass).eq(0).addClass(t.slidePrevClass));
                      t.loop && 0 === l.length && (l = e.eq(-1), l.addClass(t.slidePrevClass)), t.loop && ((a.hasClass(t.slideDuplicateClass) ? i.children(`.${t.slideClass}:not(.${t.slideDuplicateClass})[data-swiper-slide-index="${a.attr("data-swiper-slide-index")}"]`) : i.children(`.${t.slideClass}.${t.slideDuplicateClass}[data-swiper-slide-index="${a.attr("data-swiper-slide-index")}"]`)).addClass(t.slideDuplicateNextClass), (l.hasClass(t.slideDuplicateClass) ? i.children(`.${t.slideClass}:not(.${t.slideDuplicateClass})[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`) : i.children(`.${t.slideClass}.${t.slideDuplicateClass}[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`)).addClass(t.slideDuplicatePrevClass)), this.emitSlidesClasses()
                  },
                  updateActiveIndex: function(e) {
                      const t = this,
                          i = t.rtlTranslate ? t.translate : -t.translate,
                          {
                              slidesGrid: s,
                              snapGrid: n,
                              params: r,
                              activeIndex: o,
                              realIndex: a,
                              snapIndex: d
                          } = t;
                      let l, c = e;
                      if (void 0 === c) {
                          for (let e = 0; e < s.length; e += 1) void 0 !== s[e + 1] ? i >= s[e] && i < s[e + 1] - (s[e + 1] - s[e]) / 2 ? c = e : i >= s[e] && i < s[e + 1] && (c = e + 1) : i >= s[e] && (c = e);
                          r.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0)
                      }
                      if (0 <= n.indexOf(i)) l = n.indexOf(i);
                      else {
                          const e = Math.min(r.slidesPerGroupSkip, c);
                          l = e + Math.floor((c - e) / r.slidesPerGroup)
                      }
                      l >= n.length && (l = n.length - 1), c !== o ? (e = parseInt(t.slides.eq(c).attr("data-swiper-slide-index") || c, 10), Object.assign(t, {
                          snapIndex: l,
                          realIndex: e,
                          previousIndex: o,
                          activeIndex: c
                      }), t.emit("activeIndexChange"), t.emit("snapIndexChange"), a !== e && t.emit("realIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange")) : l !== d && (t.snapIndex = l, t.emit("snapIndexChange"))
                  },
                  updateClickedSlide: function(e) {
                      var t = this,
                          i = t.params,
                          s = O(e).closest("." + i.slideClass)[0];
                      let n, r = !1;
                      if (s)
                          for (let e = 0; e < t.slides.length; e += 1)
                              if (t.slides[e] === s) {
                                  r = !0, n = e;
                                  break
                              } if (!s || !r) return t.clickedSlide = void 0, void(t.clickedIndex = void 0);
                      t.clickedSlide = s, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(O(s).attr("data-swiper-slide-index"), 10) : t.clickedIndex = n, i.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
                  }
              },
              translate: {
                  getTranslate: function(e = this.isHorizontal() ? "x" : "y") {
                      var {
                          params: t,
                          rtlTranslate: i,
                          translate: s,
                          $wrapperEl: n
                      } = this;
                      if (t.virtualTranslate) return i ? -s : s;
                      if (t.cssMode) return s;
                      let r = I(n[0], e);
                      return i && (r = -r), r || 0
                  },
                  setTranslate: function(e, t) {
                      const i = this,
                          {
                              rtlTranslate: s,
                              params: n,
                              $wrapperEl: r,
                              wrapperEl: o,
                              progress: d
                          } = i;
                      let a = 0,
                          l = 0;
                      i.isHorizontal() ? a = s ? -e : e : l = e, n.roundLengths && (a = Math.floor(a), l = Math.floor(l)), n.cssMode ? o[i.isHorizontal() ? "scrollLeft" : "scrollTop"] = i.isHorizontal() ? -a : -l : n.virtualTranslate || r.transform(`translate3d(${a}px, ${l}px, 0px)`), i.previousTranslate = i.translate, i.translate = i.isHorizontal() ? a : l;
                      var c = i.maxTranslate() - i.minTranslate();
                      (0 == c ? 0 : (e - i.minTranslate()) / c) !== d && i.updateProgress(e), i.emit("setTranslate", i.translate, t)
                  },
                  minTranslate: function() {
                      return -this.snapGrid[0]
                  },
                  maxTranslate: function() {
                      return -this.snapGrid[this.snapGrid.length - 1]
                  },
                  translateTo: function(e = 0, t = this.params.speed, i = !0, s = !0, n) {
                      const r = this,
                          {
                              params: o,
                              wrapperEl: a
                          } = r;
                      if (r.animating && o.preventInteractionOnTransition) return !1;
                      var l = r.minTranslate(),
                          c = r.maxTranslate(),
                          l = s && l < e ? l : s && e < c ? c : e;
                      if (r.updateProgress(l), o.cssMode) {
                          const e = r.isHorizontal();
                          if (0 === t) a[e ? "scrollLeft" : "scrollTop"] = -l;
                          else {
                              if (!r.support.smoothScroll) return y({
                                  swiper: r,
                                  targetPosition: -l,
                                  side: e ? "left" : "top"
                              }), !0;
                              a.scrollTo({
                                  [e ? "left" : "top"]: -l,
                                  behavior: "smooth"
                              })
                          }
                          return !0
                      }
                      return 0 === t ? (r.setTransition(0), r.setTranslate(l), i && (r.emit("beforeTransitionStart", t, n), r.emit("transitionEnd"))) : (r.setTransition(t), r.setTranslate(l), i && (r.emit("beforeTransitionStart", t, n), r.emit("transitionStart")), r.animating || (r.animating = !0, r.onTranslateToWrapperTransitionEnd || (r.onTranslateToWrapperTransitionEnd = function(e) {
                          r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd), r.onTranslateToWrapperTransitionEnd = null, delete r.onTranslateToWrapperTransitionEnd, i && r.emit("transitionEnd"))
                      }), r.$wrapperEl[0].addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd))), !0
                  }
              },
              transition: {
                  setTransition: function(e, t) {
                      this.params.cssMode || this.$wrapperEl.transition(e), this.emit("setTransition", e, t)
                  },
                  transitionStart: function(e = !0, t) {
                      var i = this["params"];
                      i.cssMode || (i.autoHeight && this.updateAutoHeight(), b({
                          swiper: this,
                          runCallbacks: e,
                          direction: t,
                          step: "Start"
                      }))
                  },
                  transitionEnd: function(e = !0, t) {
                      var i = this["params"];
                      this.animating = !1, i.cssMode || (this.setTransition(0), b({
                          swiper: this,
                          runCallbacks: e,
                          direction: t,
                          step: "End"
                      }))
                  }
              },
              slide: {
                  slideTo: function(e = 0, t = this.params.speed, i = !0, s, d) {
                      if ("number" != typeof e && "string" != typeof e) throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`);
                      if ("string" == typeof e) {
                          const t = parseInt(e, 10);
                          if (!isFinite(t)) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);
                          e = t
                      }
                      const n = this;
                      let r = e;
                      r < 0 && (r = 0);
                      const {
                          params: o,
                          snapGrid: u,
                          slidesGrid: h,
                          previousIndex: p,
                          activeIndex: a,
                          rtlTranslate: m,
                          wrapperEl: f,
                          enabled: g
                      } = n;
                      if (n.animating && o.preventInteractionOnTransition || !g && !s && !d) return !1;
                      e = Math.min(n.params.slidesPerGroupSkip, r);
                      let v = e + Math.floor((r - e) / n.params.slidesPerGroup);
                      v >= u.length && (v = u.length - 1), (a || o.initialSlide || 0) === (p || 0) && i && n.emit("beforeSlideChangeStart");
                      var l = -u[v];
                      if (n.updateProgress(l), o.normalizeSlideIndex)
                          for (let e = 0; e < h.length; e += 1) {
                              const t = -Math.floor(100 * l),
                                  i = Math.floor(100 * h[e]),
                                  s = Math.floor(100 * h[e + 1]);
                              void 0 !== h[e + 1] ? t >= i && t < s - (s - i) / 2 ? r = e : t >= i && t < s && (r = e + 1) : t >= i && (r = e)
                          }
                      if (n.initialized && r !== a) {
                          if (!n.allowSlideNext && l < n.translate && l < n.minTranslate()) return !1;
                          if (!n.allowSlidePrev && l > n.translate && l > n.maxTranslate() && (a || 0) !== r) return !1
                      }
                      let c;
                      if (c = r > a ? "next" : r < a ? "prev" : "reset", m && -l === n.translate || !m && l === n.translate) return n.updateActiveIndex(r), o.autoHeight && n.updateAutoHeight(), n.updateSlidesClasses(), "slide" !== o.effect && n.setTranslate(l), "reset" != c && (n.transitionStart(i, c), n.transitionEnd(i, c)), !1;
                      if (o.cssMode) {
                          const e = n.isHorizontal(),
                              i = m ? l : -l;
                          if (0 === t) {
                              const t = n.virtual && n.params.virtual.enabled;
                              t && (n.wrapperEl.style.scrollSnapType = "none", n._immediateVirtual = !0), f[e ? "scrollLeft" : "scrollTop"] = i, t && requestAnimationFrame(() => {
                                  n.wrapperEl.style.scrollSnapType = "", n._swiperImmediateVirtual = !1
                              })
                          } else {
                              if (!n.support.smoothScroll) return y({
                                  swiper: n,
                                  targetPosition: i,
                                  side: e ? "left" : "top"
                              }), !0;
                              f.scrollTo({
                                  [e ? "left" : "top"]: i,
                                  behavior: "smooth"
                              })
                          }
                          return !0
                      }
                      return n.setTransition(t), n.setTranslate(l), n.updateActiveIndex(r), n.updateSlidesClasses(), n.emit("beforeTransitionStart", t, s), n.transitionStart(i, c), 0 === t ? n.transitionEnd(i, c) : n.animating || (n.animating = !0, n.onSlideToWrapperTransitionEnd || (n.onSlideToWrapperTransitionEnd = function(e) {
                          n && !n.destroyed && e.target === this && (n.$wrapperEl[0].removeEventListener("transitionend", n.onSlideToWrapperTransitionEnd), n.$wrapperEl[0].removeEventListener("webkitTransitionEnd", n.onSlideToWrapperTransitionEnd), n.onSlideToWrapperTransitionEnd = null, delete n.onSlideToWrapperTransitionEnd, n.transitionEnd(i, c))
                      }), n.$wrapperEl[0].addEventListener("transitionend", n.onSlideToWrapperTransitionEnd), n.$wrapperEl[0].addEventListener("webkitTransitionEnd", n.onSlideToWrapperTransitionEnd)), !0
                  },
                  slideToLoop: function(e = 0, t = this.params.speed, i = !0, s) {
                      let n = e;
                      return this.params.loop && (n += this.loopedSlides), this.slideTo(n, t, i, s)
                  },
                  slideNext: function(e = this.params.speed, t = !0, i) {
                      var s = this,
                          {
                              animating: n,
                              enabled: r,
                              params: o
                          } = s;
                      if (!r) return s;
                      let a = o.slidesPerGroup;
                      "auto" === o.slidesPerView && 1 === o.slidesPerGroup && o.slidesPerGroupAuto && (a = Math.max(s.slidesPerViewDynamic("current", !0), 1));
                      r = s.activeIndex < o.slidesPerGroupSkip ? 1 : a;
                      if (o.loop) {
                          if (n && o.loopPreventsSlide) return !1;
                          s.loopFix(), s._clientLeft = s.$wrapperEl[0].clientLeft
                      }
                      return o.rewind && s.isEnd ? s.slideTo(0, e, t, i) : s.slideTo(s.activeIndex + r, e, t, i)
                  },
                  slidePrev: function(e = this.params.speed, t = !0, i) {
                      const s = this,
                          {
                              params: n,
                              animating: d,
                              snapGrid: r,
                              slidesGrid: u,
                              rtlTranslate: h,
                              enabled: p
                          } = s;
                      if (!p) return s;
                      if (n.loop) {
                          if (d && n.loopPreventsSlide) return !1;
                          s.loopFix(), s._clientLeft = s.$wrapperEl[0].clientLeft
                      }

                      function o(e) {
                          return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
                      }
                      const a = o(h ? s.translate : -s.translate),
                          m = r.map(e => o(e));
                      let l = r[m.indexOf(a) - 1];
                      if (void 0 === l && n.cssMode) {
                          let i;
                          r.forEach((e, t) => {
                              a >= e && (i = t)
                          }), void 0 !== i && (l = r[0 < i ? i - 1 : i])
                      }
                      let c = 0;
                      return void 0 !== l && (c = u.indexOf(l), c < 0 && (c = s.activeIndex - 1), "auto" === n.slidesPerView && 1 === n.slidesPerGroup && n.slidesPerGroupAuto && (c = c - s.slidesPerViewDynamic("previous", !0) + 1, c = Math.max(c, 0))), n.rewind && s.isBeginning ? s.slideTo(s.slides.length - 1, e, t, i) : s.slideTo(c, e, t, i)
                  },
                  slideReset: function(e = this.params.speed, t = !0, i) {
                      return this.slideTo(this.activeIndex, e, t, i)
                  },
                  slideToClosest: function(e = this.params.speed, t = !0, i, s = .5) {
                      var n = this;
                      let r = n.activeIndex;
                      var o = Math.min(n.params.slidesPerGroupSkip, r),
                          o = o + Math.floor((r - o) / n.params.slidesPerGroup),
                          a = n.rtlTranslate ? n.translate : -n.translate;
                      if (a >= n.snapGrid[o]) {
                          const e = n.snapGrid[o];
                          a - e > (n.snapGrid[o + 1] - e) * s && (r += n.params.slidesPerGroup)
                      } else {
                          const e = n.snapGrid[o - 1];
                          a - e <= (n.snapGrid[o] - e) * s && (r -= n.params.slidesPerGroup)
                      }
                      return r = Math.max(r, 0), r = Math.min(r, n.slidesGrid.length - 1), n.slideTo(r, e, t, i)
                  },
                  slideToClickedSlide: function() {
                      const e = this,
                          {
                              params: t,
                              $wrapperEl: i
                          } = e,
                          s = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
                      let n, r = e.clickedIndex;
                      t.loop ? e.animating || (n = parseInt(O(e.clickedSlide).attr("data-swiper-slide-index"), 10), t.centeredSlides ? r < e.loopedSlides - s / 2 || r > e.slides.length - e.loopedSlides + s / 2 ? (e.loopFix(), r = i.children(`.${t.slideClass}[data-swiper-slide-index="${n}"]:not(.${t.slideDuplicateClass})`).eq(0).index(), E(() => {
                          e.slideTo(r)
                      })) : e.slideTo(r) : r > e.slides.length - s ? (e.loopFix(), r = i.children(`.${t.slideClass}[data-swiper-slide-index="${n}"]:not(.${t.slideDuplicateClass})`).eq(0).index(), E(() => {
                          e.slideTo(r)
                      })) : e.slideTo(r)) : e.slideTo(r)
                  }
              },
              loop: {
                  loopCreate: function() {
                      const s = this,
                          t = T(),
                          {
                              params: i,
                              $wrapperEl: e
                          } = s,
                          n = 0 < e.children().length ? O(e.children()[0].parentNode) : e;
                      n.children(`.${i.slideClass}.` + i.slideDuplicateClass).remove();
                      let r = n.children("." + i.slideClass);
                      if (i.loopFillGroupWithBlank) {
                          const s = i.slidesPerGroup - r.length % i.slidesPerGroup;
                          if (s !== i.slidesPerGroup) {
                              for (let e = 0; e < s; e += 1) {
                                  const s = O(t.createElement("div")).addClass(i.slideClass + " " + i.slideBlankClass);
                                  n.append(s)
                              }
                              r = n.children("." + i.slideClass)
                          }
                      }
                      "auto" !== i.slidesPerView || i.loopedSlides || (i.loopedSlides = r.length), s.loopedSlides = Math.ceil(parseFloat(i.loopedSlides || i.slidesPerView, 10)), s.loopedSlides += i.loopAdditionalSlides, s.loopedSlides > r.length && (s.loopedSlides = r.length);
                      const o = [],
                          a = [];
                      r.each((e, t) => {
                          const i = O(e);
                          t < s.loopedSlides && a.push(e), t < r.length && t >= r.length - s.loopedSlides && o.push(e), i.attr("data-swiper-slide-index", t)
                      });
                      for (let e = 0; e < a.length; e += 1) n.append(O(a[e].cloneNode(!0)).addClass(i.slideDuplicateClass));
                      for (let e = o.length - 1; 0 <= e; --e) n.prepend(O(o[e].cloneNode(!0)).addClass(i.slideDuplicateClass))
                  },
                  loopFix: function() {
                      var e = this,
                          {
                              activeIndex: t,
                              slides: i,
                              loopedSlides: s,
                              allowSlidePrev: n,
                              allowSlideNext: r,
                              snapGrid: o,
                              rtlTranslate: a
                          } = (e.emit("beforeLoopFix"), e);
                      let l;
                      e.allowSlidePrev = !0, e.allowSlideNext = !0;
                      o = -o[t] - e.getTranslate();
                      t < s ? (l = i.length - 3 * s + t, l += s, e.slideTo(l, 0, !1, !0) && 0 != o && e.setTranslate((a ? -e.translate : e.translate) - o)) : t >= i.length - s && (l = -i.length + t + s, l += s, e.slideTo(l, 0, !1, !0) && 0 != o && e.setTranslate((a ? -e.translate : e.translate) - o)), e.allowSlidePrev = n, e.allowSlideNext = r, e.emit("loopFix")
                  },
                  loopDestroy: function() {
                      const {
                          $wrapperEl: e,
                          params: t,
                          slides: i
                      } = this;
                      e.children(`.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.` + t.slideBlankClass).remove(), i.removeAttr("data-swiper-slide-index")
                  }
              },
              grabCursor: {
                  setGrabCursor: function(e) {
                      if (!(this.support.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked || this.params.cssMode)) {
                          const t = "container" === this.params.touchEventsTarget ? this.el : this.wrapperEl;
                          t.style.cursor = "move", t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", t.style.cursor = e ? "-moz-grabbin" : "-moz-grab", t.style.cursor = e ? "grabbing" : "grab"
                      }
                  },
                  unsetGrabCursor: function() {
                      this.support.touch || this.params.watchOverflow && this.isLocked || this.params.cssMode || (this["container" === this.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "")
                  }
              },
              events: {
                  attachEvents: function() {
                      const e = this,
                          t = T(),
                          {
                              params: i,
                              support: s
                          } = e;
                      e.onTouchStart = function(e) {
                          const s = this,
                              n = T(),
                              h = P(),
                              r = s.touchEventsData,
                              {
                                  params: o,
                                  touches: a,
                                  enabled: t
                              } = s;
                          if (t && (!s.animating || !o.preventInteractionOnTransition)) {
                              !s.animating && o.cssMode && o.loop && s.loopFix();
                              let t = e,
                                  i = (t.originalEvent && (t = t.originalEvent), O(t.target));
                              if (("wrapper" !== o.touchEventsTarget || i.closest(s.wrapperEl).length) && (r.isTouchEvent = "touchstart" === t.type, (r.isTouchEvent || !("which" in t) || 3 !== t.which) && !(!r.isTouchEvent && "button" in t && 0 < t.button || r.isTouched && r.isMoved))) {
                                  o.noSwipingClass && "" !== o.noSwipingClass && t.target && t.target.shadowRoot && e.path && e.path[0] && (i = O(e.path[0]));
                                  var l = o.noSwipingSelector || "." + o.noSwipingClass,
                                      c = !(!t.target || !t.target.shadowRoot);
                                  if (o.noSwiping && (c ? function(i, e = this) {
                                          return function e(t) {
                                              return t && t !== T() && t !== P() ? (t = t.assignedSlot ? t.assignedSlot : t).closest(i) || e(t.getRootNode().host) : null
                                          }(e)
                                      }(l, t.target) : i.closest(l)[0])) s.allowClick = !0;
                                  else if (!o.swipeHandler || i.closest(o.swipeHandler)[0]) {
                                      a.currentX = ("touchstart" === t.type ? t.targetTouches[0] : t).pageX, a.currentY = ("touchstart" === t.type ? t.targetTouches[0] : t).pageY;
                                      var c = a.currentX,
                                          l = a.currentY,
                                          d = o.edgeSwipeDetection || o.iOSEdgeSwipeDetection,
                                          u = o.edgeSwipeThreshold || o.iOSEdgeSwipeThreshold;
                                      if (d && (c <= u || c >= h.innerWidth - u)) {
                                          if ("prevent" !== d) return;
                                          e.preventDefault()
                                      }
                                      if (Object.assign(r, {
                                              isTouched: !0,
                                              isMoved: !1,
                                              allowTouchCallbacks: !0,
                                              isScrolling: void 0,
                                              startMoving: void 0
                                          }), a.startX = c, a.startY = l, r.touchStartTime = g(), s.allowClick = !0, s.updateSize(), s.swipeDirection = void 0, 0 < o.threshold && (r.allowThresholdMove = !1), "touchstart" !== t.type) {
                                          let e = !0;
                                          i.is(r.focusableElements) && (e = !1), n.activeElement && O(n.activeElement).is(r.focusableElements) && n.activeElement !== i[0] && n.activeElement.blur();
                                          const T = e && s.allowTouchMove && o.touchStartPreventDefault;
                                          !o.touchStartForcePreventDefault && !T || i[0].isContentEditable || t.preventDefault()
                                      }
                                      s.emit("touchStart", t)
                                  }
                              }
                          }
                      }.bind(e), e.onTouchMove = function(n) {
                          const e = T(),
                              r = this,
                              o = r.touchEventsData,
                              {
                                  params: a,
                                  touches: l,
                                  rtlTranslate: c,
                                  enabled: t
                              } = r;
                          if (t) {
                              let s = n;
                              if (s.originalEvent && (s = s.originalEvent), o.isTouched) {
                                  if (!o.isTouchEvent || "touchmove" === s.type) {
                                      var n = "touchmove" === s.type && s.targetTouches && (s.targetTouches[0] || s.changedTouches[0]),
                                          d = ("touchmove" === s.type ? n : s).pageX,
                                          n = ("touchmove" === s.type ? n : s).pageY;
                                      if (s.preventedByNestedSwiper) return l.startX = d, void(l.startY = n);
                                      if (!r.allowTouchMove) return r.allowClick = !1, void(o.isTouched && (Object.assign(l, {
                                          startX: d,
                                          startY: n,
                                          currentX: d,
                                          currentY: n
                                      }), o.touchStartTime = g()));
                                      if (o.isTouchEvent && a.touchReleaseOnEdges && !a.loop)
                                          if (r.isVertical()) {
                                              if (n < l.startY && r.translate <= r.maxTranslate() || n > l.startY && r.translate >= r.minTranslate()) return o.isTouched = !1, void(o.isMoved = !1)
                                          } else if (d < l.startX && r.translate <= r.maxTranslate() || d > l.startX && r.translate >= r.minTranslate()) return;
                                      if (o.isTouchEvent && e.activeElement && s.target === e.activeElement && O(s.target).is(o.focusableElements)) return o.isMoved = !0, void(r.allowClick = !1);
                                      if (o.allowTouchCallbacks && r.emit("touchMove", s), !(s.targetTouches && 1 < s.targetTouches.length)) {
                                          l.currentX = d, l.currentY = n;
                                          var i, d = l.currentX - l.startX,
                                              n = l.currentY - l.startY;
                                          if (!(r.params.threshold && Math.sqrt(d ** 2 + n ** 2) < r.params.threshold))
                                              if (void 0 === o.isScrolling && (r.isHorizontal() && l.currentY === l.startY || r.isVertical() && l.currentX === l.startX ? o.isScrolling = !1 : 25 <= d * d + n * n && (i = 180 * Math.atan2(Math.abs(n), Math.abs(d)) / Math.PI, o.isScrolling = r.isHorizontal() ? i > a.touchAngle : 90 - i > a.touchAngle)), o.isScrolling && r.emit("touchMoveOpposite", s), void 0 === o.startMoving && (l.currentX === l.startX && l.currentY === l.startY || (o.startMoving = !0)), o.isScrolling) o.isTouched = !1;
                                              else if (o.startMoving) {
                                              r.allowClick = !1, !a.cssMode && s.cancelable && s.preventDefault(), a.touchMoveStopPropagation && !a.nested && s.stopPropagation(), o.isMoved || (a.loop && !a.cssMode && r.loopFix(), o.startTranslate = r.getTranslate(), r.setTransition(0), r.animating && r.$wrapperEl.trigger("webkitTransitionEnd transitionend"), o.allowMomentumBounce = !1, !a.grabCursor || !0 !== r.allowSlideNext && !0 !== r.allowSlidePrev || r.setGrabCursor(!0), r.emit("sliderFirstMove", s)), r.emit("sliderMove", s), o.isMoved = !0;
                                              let e = r.isHorizontal() ? d : n,
                                                  t = (l.diff = e, e *= a.touchRatio, c && (e = -e), r.swipeDirection = 0 < e ? "prev" : "next", o.currentTranslate = e + o.startTranslate, !0),
                                                  i = a.resistanceRatio;
                                              if (a.touchReleaseOnEdges && (i = 0), 0 < e && o.currentTranslate > r.minTranslate() ? (t = !1, a.resistance && (o.currentTranslate = r.minTranslate() - 1 + (-r.minTranslate() + o.startTranslate + e) ** i)) : e < 0 && o.currentTranslate < r.maxTranslate() && (t = !1, a.resistance && (o.currentTranslate = r.maxTranslate() + 1 - (r.maxTranslate() - o.startTranslate - e) ** i)), t && (s.preventedByNestedSwiper = !0), !r.allowSlideNext && "next" === r.swipeDirection && o.currentTranslate < o.startTranslate && (o.currentTranslate = o.startTranslate), !r.allowSlidePrev && "prev" === r.swipeDirection && o.currentTranslate > o.startTranslate && (o.currentTranslate = o.startTranslate), r.allowSlidePrev || r.allowSlideNext || (o.currentTranslate = o.startTranslate), 0 < a.threshold) {
                                                  if (!(Math.abs(e) > a.threshold || o.allowThresholdMove)) return void(o.currentTranslate = o.startTranslate);
                                                  if (!o.allowThresholdMove) return o.allowThresholdMove = !0, l.startX = l.currentX, l.startY = l.currentY, o.currentTranslate = o.startTranslate, void(l.diff = r.isHorizontal() ? l.currentX - l.startX : l.currentY - l.startY)
                                              }
                                              a.followFinger && !a.cssMode && ((a.freeMode && a.freeMode.enabled && r.freeMode || a.watchSlidesProgress) && (r.updateActiveIndex(), r.updateSlidesClasses()), r.params.freeMode && a.freeMode.enabled && r.freeMode && r.freeMode.onTouchMove(), r.updateProgress(o.currentTranslate), r.setTranslate(o.currentTranslate))
                                          }
                                      }
                                  }
                              } else o.startMoving && o.isScrolling && r.emit("touchMoveOpposite", s)
                          }
                      }.bind(e), e.onTouchEnd = function(s) {
                          const n = this,
                              t = n.touchEventsData,
                              {
                                  params: r,
                                  touches: i,
                                  rtlTranslate: o,
                                  slidesGrid: a,
                                  enabled: e
                              } = n;
                          if (e) {
                              let e = s;
                              if (e.originalEvent && (e = e.originalEvent), t.allowTouchCallbacks && n.emit("touchEnd", e), t.allowTouchCallbacks = !1, !t.isTouched) return t.isMoved && r.grabCursor && n.setGrabCursor(!1), t.isMoved = !1, void(t.startMoving = !1);
                              r.grabCursor && t.isMoved && t.isTouched && (!0 === n.allowSlideNext || !0 === n.allowSlidePrev) && n.setGrabCursor(!1);
                              var l, c = g(),
                                  d = c - t.touchStartTime;
                              if (n.allowClick) {
                                  const s = e.path || e.composedPath && e.composedPath();
                                  n.updateClickedSlide(s && s[0] || e.target), n.emit("tap click", e), d < 300 && c - t.lastClickTime < 300 && n.emit("doubleTap doubleClick", e)
                              }
                              if (t.lastClickTime = g(), E(() => {
                                      n.destroyed || (n.allowClick = !0)
                                  }), !t.isTouched || !t.isMoved || !n.swipeDirection || 0 === i.diff || t.currentTranslate === t.startTranslate) return t.isTouched = !1, t.isMoved = !1, void(t.startMoving = !1);
                              if (t.isTouched = !1, t.isMoved = !1, t.startMoving = !1, l = r.followFinger ? o ? n.translate : -n.translate : -t.currentTranslate, !r.cssMode)
                                  if (n.params.freeMode && r.freeMode.enabled) n.freeMode.onTouchEnd({
                                      currentPos: l
                                  });
                                  else {
                                      let t = 0,
                                          i = n.slidesSizesGrid[0];
                                      for (let e = 0; e < a.length; e += e < r.slidesPerGroupSkip ? 1 : r.slidesPerGroup) {
                                          const n = e < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
                                          void 0 !== a[e + n] ? l >= a[e] && l < a[e + n] && (t = e, i = a[e + n] - a[e]) : l >= a[e] && (t = e, i = a[a.length - 1] - a[a.length - 2])
                                      }
                                      s = (l - a[t]) / i, c = t < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
                                      d > r.longSwipesMs ? r.longSwipes ? ("next" === n.swipeDirection && (s >= r.longSwipesRatio ? n.slideTo(t + c) : n.slideTo(t)), "prev" === n.swipeDirection && (s > 1 - r.longSwipesRatio ? n.slideTo(t + c) : n.slideTo(t))) : n.slideTo(n.activeIndex) : r.shortSwipes ? !n.navigation || e.target !== n.navigation.nextEl && e.target !== n.navigation.prevEl ? ("next" === n.swipeDirection && n.slideTo(t + c), "prev" === n.swipeDirection && n.slideTo(t)) : e.target === n.navigation.nextEl ? n.slideTo(t + c) : n.slideTo(t) : n.slideTo(n.activeIndex)
                                  }
                          }
                      }.bind(e), i.cssMode && (e.onScroll = function() {
                          var e = this,
                              {
                                  wrapperEl: t,
                                  rtlTranslate: i,
                                  enabled: s
                              } = e;
                          s && (e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, -0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses(), (0 == (s = e.maxTranslate() - e.minTranslate()) ? 0 : (e.translate - e.minTranslate()) / s) !== e.progress && e.updateProgress(i ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1))
                      }.bind(e)), e.onClick = function(e) {
                          this.enabled && (this.allowClick || (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation())))
                      }.bind(e), s.touch && !x && (t.addEventListener("touchstart", _), x = !0), S(e, "on")
                  },
                  detachEvents: function() {
                      S(this, "off")
                  }
              },
              breakpoints: {
                  setBreakpoint: function() {
                      const e = this,
                          {
                              activeIndex: d,
                              initialized: t,
                              loopedSlides: u = 0,
                              params: i,
                              $el: s
                          } = e,
                          n = i.breakpoints;
                      var r, o, a, l, c;
                      !n || 0 === Object.keys(n).length || (r = e.getBreakpoint(n, e.params.breakpointsBase, e.el)) && e.currentBreakpoint !== r && (o = (r in n ? n[r] : void 0) || e.originalParams, c = k(e, i), l = k(e, o), a = i.enabled, c && !l ? (s.removeClass(`${i.containerModifierClass}grid ${i.containerModifierClass}grid-column`), e.emitContainerClasses()) : !c && l && (s.addClass(i.containerModifierClass + "grid"), (o.grid.fill && "column" === o.grid.fill || !o.grid.fill && "column" === i.grid.fill) && s.addClass(i.containerModifierClass + "grid-column"), e.emitContainerClasses()), c = o.direction && o.direction !== i.direction, l = i.loop && (o.slidesPerView !== i.slidesPerView || c), c && t && e.changeDirection(), h(e.params, o), c = e.params.enabled, Object.assign(e, {
                          allowTouchMove: e.params.allowTouchMove,
                          allowSlideNext: e.params.allowSlideNext,
                          allowSlidePrev: e.params.allowSlidePrev
                      }), a && !c ? e.disable() : !a && c && e.enable(), e.currentBreakpoint = r, e.emit("_beforeBreakpoint", o), l && t && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(d - u + e.loopedSlides, 0, !1)), e.emit("breakpoint", o))
                  },
                  getBreakpoint: function(e, i = "window", s) {
                      if (e && ("container" !== i || s)) {
                          let t = !1;
                          const n = P(),
                              r = "window" === i ? n.innerHeight : s.clientHeight,
                              o = Object.keys(e).map(e => {
                                  var t;
                                  return "string" == typeof e && 0 === e.indexOf("@") ? (t = parseFloat(e.substr(1)), {
                                      value: r * t,
                                      point: e
                                  }) : {
                                      value: e,
                                      point: e
                                  }
                              });
                          o.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
                          for (let e = 0; e < o.length; e += 1) {
                              const {
                                  point: P,
                                  value: r
                              } = o[e];
                              "window" === i ? n.matchMedia(`(min-width: ${r}px)`).matches && (t = P) : r <= s.clientWidth && (t = P)
                          }
                          return t || "max"
                      }
                  }
              },
              checkOverflow: {
                  checkOverflow: function() {
                      const e = this,
                          {
                              isLocked: t,
                              params: i
                          } = e,
                          s = i["slidesOffsetBefore"];
                      if (s) {
                          const t = e.slides.length - 1,
                              i = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * s;
                          e.isLocked = e.size > i
                      } else e.isLocked = 1 === e.snapGrid.length;
                      !0 === i.allowSlideNext && (e.allowSlideNext = !e.isLocked), !0 === i.allowSlidePrev && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock")
                  }
              },
              classes: {
                  addClasses: function() {
                      const {
                          classNames: e,
                          params: t,
                          rtl: i,
                          $el: s,
                          device: n,
                          support: r
                      } = this, o = function(e, i) {
                          const s = [];
                          return e.forEach(t => {
                              "object" == typeof t ? Object.keys(t).forEach(e => {
                                  t[e] && s.push(i + e)
                              }) : "string" == typeof t && s.push(i + t)
                          }), s
                      }(["initialized", t.direction, {
                          "pointer-events": !r.touch
                      }, {
                          "free-mode": this.params.freeMode && t.freeMode.enabled
                      }, {
                          autoheight: t.autoHeight
                      }, {
                          rtl: i
                      }, {
                          grid: t.grid && 1 < t.grid.rows
                      }, {
                          "grid-column": t.grid && 1 < t.grid.rows && "column" === t.grid.fill
                      }, {
                          android: n.android
                      }, {
                          ios: n.ios
                      }, {
                          "css-mode": t.cssMode
                      }, {
                          centered: t.cssMode && t.centeredSlides
                      }], t.containerModifierClass);
                      e.push(...o), s.addClass([...e].join(" ")), this.emitContainerClasses()
                  },
                  removeClasses: function() {
                      const {
                          $el: e,
                          classNames: t
                      } = this;
                      e.removeClass(t.join(" ")), this.emitContainerClasses()
                  }
              },
              images: {
                  loadImage: function(e, t, i, s, n, r) {
                      const o = P();
                      let a;

                      function l() {
                          r && r()
                      }!(O(e).parent("picture")[0] || e.complete && n) && t ? (a = new o.Image, a.onload = l, a.onerror = l, s && (a.sizes = s), i && (a.srcset = i), t && (a.src = t)) : l()
                  },
                  preloadImages: function() {
                      const t = this;

                      function i() {
                          null != t && t && !t.destroyed && (void 0 !== t.imagesLoaded && (t.imagesLoaded += 1), t.imagesLoaded === t.imagesToLoad.length && (t.params.updateOnImagesReady && t.update(), t.emit("imagesReady")))
                      }
                      t.imagesToLoad = t.$el.find("img");
                      for (let e = 0; e < t.imagesToLoad.length; e += 1) {
                          const s = t.imagesToLoad[e];
                          t.loadImage(s, s.currentSrc || s.getAttribute("src"), s.srcset || s.getAttribute("srcset"), s.sizes || s.getAttribute("sizes"), !0, i)
                      }
                  }
              }
          },
          L = {};
      class n {
          constructor(...t) {
              let e, i;
              if (1 === t.length && t[0].constructor && "Object" === Object.prototype.toString.call(t[0]).slice(8, -1) ? i = t[0] : [e, i] = t, i = i || {}, i = h({}, i), e && !i.el && (i.el = e), i.el && 1 < O(i.el).length) {
                  const t = [];
                  return O(i.el).each(e => {
                      e = h({}, i, {
                          el: e
                      });
                      t.push(new n(e))
                  }), t
              }
              const r = this;
              r.__swiper__ = !0, r.support = f(), r.device = (t = {
                  userAgent: i.userAgent
              }, p = p || function({
                  userAgent: e
              } = {}) {
                  const t = f(),
                      i = P(),
                      s = i.navigator.platform,
                      n = e || i.navigator.userAgent,
                      r = {
                          ios: !1,
                          android: !1
                      },
                      o = i.screen.width,
                      a = i.screen.height,
                      d = n.match(/(Android);?[\s\/]+([\d.]+)?/);
                  let l = n.match(/(iPad).*OS\s([\d_]+)/);
                  var e = n.match(/(iPod)(.*OS\s([\d_]+))?/),
                      u = !l && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                      h = "Win32" === s;
                  let c = "MacIntel" === s;
                  return !l && c && t.touch && 0 <= ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(o + "x" + a) && (l = n.match(/(Version)\/([\d.]+)/), l = l || [0, 1, "13_0_0"], c = !1), d && !h && (r.os = "android", r.android = !0), (l || u || e) && (r.os = "ios", r.ios = !0), r
              }(t), p), r.browser = (m = m || function() {
                  const t = P();
                  return {
                      isSafari: function() {
                          const e = t.navigator.userAgent.toLowerCase();
                          return 0 <= e.indexOf("safari") && e.indexOf("chrome") < 0 && e.indexOf("android") < 0
                      }(),
                      isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent)
                  }
              }(), m), r.eventsListeners = {}, r.eventsAnyListeners = [], r.modules = [...r.__modules__], i.modules && Array.isArray(i.modules) && r.modules.push(...i.modules);
              const o = {};
              r.modules.forEach(e => {
                  var s, n;
                  e({
                      swiper: r,
                      extendParams: (s = i, n = o, function(e = {}) {
                          var t = Object.keys(e)[0],
                              i = e[t];
                          "object" == typeof i && null !== i && (0 <= ["navigation", "pagination", "scrollbar"].indexOf(t) && !0 === s[t] && (s[t] = {
                              auto: !0
                          }), t in s && "enabled" in i && (!0 === s[t] && (s[t] = {
                              enabled: !0
                          }), "object" != typeof s[t] || "enabled" in s[t] || (s[t].enabled = !0), s[t] || (s[t] = {
                              enabled: !1
                          }))), h(n, e)
                      }),
                      on: r.on.bind(r),
                      once: r.once.bind(r),
                      off: r.off.bind(r),
                      emit: r.emit.bind(r)
                  })
              });
              var s, t = h({}, A, o);
              return r.params = h({}, t, L, i), r.originalParams = h({}, r.params), r.passedParams = h({}, i), r.params && r.params.on && Object.keys(r.params.on).forEach(e => {
                  r.on(e, r.params.on[e])
              }), r.params && r.params.onAny && r.onAny(r.params.onAny), r.$ = O, Object.assign(r, {
                  enabled: r.params.enabled,
                  el: e,
                  classNames: [],
                  slides: O(),
                  slidesGrid: [],
                  snapGrid: [],
                  slidesSizesGrid: [],
                  isHorizontal: () => "horizontal" === r.params.direction,
                  isVertical: () => "vertical" === r.params.direction,
                  activeIndex: 0,
                  realIndex: 0,
                  isBeginning: !0,
                  isEnd: !1,
                  translate: 0,
                  previousTranslate: 0,
                  progress: 0,
                  velocity: 0,
                  animating: !1,
                  allowSlideNext: r.params.allowSlideNext,
                  allowSlidePrev: r.params.allowSlidePrev,
                  touchEvents: (t = ["touchstart", "touchmove", "touchend", "touchcancel"], s = ["pointerdown", "pointermove", "pointerup"], r.touchEventsTouch = {
                      start: t[0],
                      move: t[1],
                      end: t[2],
                      cancel: t[3]
                  }, r.touchEventsDesktop = {
                      start: s[0],
                      move: s[1],
                      end: s[2]
                  }, r.support.touch || !r.params.simulateTouch ? r.touchEventsTouch : r.touchEventsDesktop),
                  touchEventsData: {
                      isTouched: void 0,
                      isMoved: void 0,
                      allowTouchCallbacks: void 0,
                      touchStartTime: void 0,
                      isScrolling: void 0,
                      currentTranslate: void 0,
                      startTranslate: void 0,
                      allowThresholdMove: void 0,
                      focusableElements: r.params.focusableElements,
                      lastClickTime: g(),
                      clickTimeout: void 0,
                      velocities: [],
                      allowMomentumBounce: void 0,
                      isTouchEvent: void 0,
                      startMoving: void 0
                  },
                  allowClick: !0,
                  allowTouchMove: r.params.allowTouchMove,
                  touches: {
                      startX: 0,
                      startY: 0,
                      currentX: 0,
                      currentY: 0,
                      diff: 0
                  },
                  imagesToLoad: [],
                  imagesLoaded: 0
              }), r.emit("_swiper"), r.params.init && r.init(), r
          }
          enable() {
              this.enabled || (this.enabled = !0, this.params.grabCursor && this.setGrabCursor(), this.emit("enable"))
          }
          disable() {
              this.enabled && (this.enabled = !1, this.params.grabCursor && this.unsetGrabCursor(), this.emit("disable"))
          }
          setProgress(e, t) {
              e = Math.min(Math.max(e, 0), 1);
              var i = this.minTranslate(),
                  e = (this.maxTranslate() - i) * e + i;
              this.translateTo(e, void 0 === t ? 0 : t), this.updateActiveIndex(), this.updateSlidesClasses()
          }
          emitContainerClasses() {
              const t = this;
              if (t.params._emitClasses && t.el) {
                  const e = t.el.className.split(" ").filter(e => 0 === e.indexOf("swiper") || 0 === e.indexOf(t.params.containerModifierClass));
                  t.emit("_containerClasses", e.join(" "))
              }
          }
          getSlideClasses(e) {
              const t = this;
              return e.className.split(" ").filter(e => 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass)).join(" ")
          }
          emitSlidesClasses() {
              const i = this;
              if (i.params._emitClasses && i.el) {
                  const s = [];
                  i.slides.each(e => {
                      var t = i.getSlideClasses(e);
                      s.push({
                          slideEl: e,
                          classNames: t
                      }), i.emit("_slideClass", e, t)
                  }), i.emit("_slideClasses", s)
              }
          }
          slidesPerViewDynamic(e = "current", t = !1) {
              var {
                  params: i,
                  slides: s,
                  slidesGrid: n,
                  slidesSizesGrid: r,
                  size: o,
                  activeIndex: a
              } = this;
              let l = 1;
              if (i.centeredSlides) {
                  let t, i = s[a].swiperSlideSize;
                  for (let e = a + 1; e < s.length; e += 1) s[e] && !t && (i += s[e].swiperSlideSize, l += 1, i > o && (t = !0));
                  for (let e = a - 1; 0 <= e; --e) s[e] && !t && (i += s[e].swiperSlideSize, l += 1, i > o && (t = !0))
              } else if ("current" === e)
                  for (let e = a + 1; e < s.length; e += 1)(t ? n[e] + r[e] - n[a] < o : n[e] - n[a] < o) && (l += 1);
              else
                  for (let e = a - 1; 0 <= e; --e) n[a] - n[e] < o && (l += 1);
              return l
          }
          update() {
              const t = this;
              var e, i;

              function s() {
                  var e = t.rtlTranslate ? -1 * t.translate : t.translate,
                      e = Math.min(Math.max(e, t.maxTranslate()), t.minTranslate());
                  t.setTranslate(e), t.updateActiveIndex(), t.updateSlidesClasses()
              }
              t && !t.destroyed && ({
                  snapGrid: e,
                  params: i
              } = t, i.breakpoints && t.setBreakpoint(), t.updateSize(), t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.params.freeMode && t.params.freeMode.enabled ? (s(), t.params.autoHeight && t.updateAutoHeight()) : (("auto" === t.params.slidesPerView || 1 < t.params.slidesPerView) && t.isEnd && !t.params.centeredSlides ? t.slideTo(t.slides.length - 1, 0, !1, !0) : t.slideTo(t.activeIndex, 0, !1, !0)) || s(), i.watchOverflow && e !== t.snapGrid && t.checkOverflow(), t.emit("update"))
          }
          changeDirection(t, e = !0) {
              var i = this,
                  s = i.params.direction;
              return (t = t || ("horizontal" === s ? "vertical" : "horizontal")) === s || "horizontal" !== t && "vertical" !== t || (i.$el.removeClass("" + i.params.containerModifierClass + s).addClass("" + i.params.containerModifierClass + t), i.emitContainerClasses(), i.params.direction = t, i.slides.each(e => {
                  "vertical" === t ? e.style.width = "" : e.style.height = ""
              }), i.emit("changeDirection"), e && i.update()), i
          }
          mount(t) {
              const e = this;
              if (e.mounted) return !0;
              const i = O(t || e.params.el);
              if (!(t = i[0])) return !1;
              t.swiper = e;
              const s = () => "." + (e.params.wrapperClass || "").trim().split(" ").join(".");
              let n = (() => {
                  if (t && t.shadowRoot && t.shadowRoot.querySelector) {
                      const e = O(t.shadowRoot.querySelector(s()));
                      return e.children = e => i.children(e), e
                  }
                  return i.children(s())
              })();
              if (0 === n.length && e.params.createElements) {
                  const t = T().createElement("div");
                  n = O(t), t.className = e.params.wrapperClass, i.append(t), i.children("." + e.params.slideClass).each(e => {
                      n.append(e)
                  })
              }
              return Object.assign(e, {
                  $el: i,
                  el: t,
                  $wrapperEl: n,
                  wrapperEl: n[0],
                  mounted: !0,
                  rtl: "rtl" === t.dir.toLowerCase() || "rtl" === i.css("direction"),
                  rtlTranslate: "horizontal" === e.params.direction && ("rtl" === t.dir.toLowerCase() || "rtl" === i.css("direction")),
                  wrongRTL: "-webkit-box" === n.css("display")
              }), !0
          }
          init(e) {
              var t = this;
              return t.initialized || !1 === t.mount(e) || (t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.params.loop && t.loopCreate(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.preloadImages && t.preloadImages(), t.params.loop ? t.slideTo(t.params.initialSlide + t.loopedSlides, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.attachEvents(), t.initialized = !0, t.emit("init"), t.emit("afterInit")), t
          }
          destroy(e = !0, t = !0) {
              const i = this,
                  {
                      params: s,
                      $el: n,
                      $wrapperEl: r,
                      slides: o
                  } = i;
              if (void 0 !== i.params && !i.destroyed) {
                  if (i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), s.loop && i.loopDestroy(), t && (i.removeClasses(), n.removeAttr("style"), r.removeAttr("style"), o && o.length && o.removeClass([s.slideVisibleClass, s.slideActiveClass, s.slideNextClass, s.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), i.emit("destroy"), Object.keys(i.eventsListeners).forEach(e => {
                          i.off(e)
                      }), !1 !== e) {
                      i.$el[0].swiper = null; {
                          const a = i;
                          Object.keys(a).forEach(e => {
                              try {
                                  a[e] = null
                              } catch (e) {}
                              try {
                                  delete a[e]
                              } catch (e) {}
                          })
                      }
                  }
                  i.destroyed = !0
              }
              return null
          }
          static extendDefaults(e) {
              h(L, e)
          }
          static get extendedDefaults() {
              return L
          }
          static get defaults() {
              return A
          }
          static installModule(e) {
              n.prototype.__modules__ || (n.prototype.__modules__ = []);
              const t = n.prototype.__modules__;
              "function" == typeof e && t.indexOf(e) < 0 && t.push(e)
          }
          static use(e) {
              return Array.isArray(e) ? e.forEach(e => n.installModule(e)) : n.installModule(e), n
          }
      }

      function $(i, s, n, r) {
          const o = T();
          return i.params.createElements && Object.keys(r).forEach(t => {
              if (!n[t] && !0 === n.auto) {
                  let e = i.$el.children("." + r[t])[0];
                  e || (e = o.createElement("div"), e.className = r[t], i.$el.append(e)), n[t] = e, s[t] = e
              }
          }), n
      }

      function v(e = "") {
          return "." + e.trim().replace(/([\.:!\/])/g, "\\$1").replace(/ /g, ".")
      }

      function s(e) {
          const {
              effect: i,
              swiper: s,
              on: t,
              setTranslate: n,
              setTransition: r,
              overwriteParams: o,
              perspective: a
          } = e;
          t("beforeInit", () => {
              var e;
              s.params.effect === i && (s.classNames.push("" + s.params.containerModifierClass + i), a && a() && s.classNames.push(s.params.containerModifierClass + "3d"), e = o ? o() : {}, Object.assign(s.params, e), Object.assign(s.originalParams, e))
          }), t("setTranslate", () => {
              s.params.effect === i && n()
          }), t("setTransition", (e, t) => {
              s.params.effect === i && r(t)
          })
      }

      function z(e, t) {
          return e.transformEl ? t.find(e.transformEl).css({
              "backface-visibility": "hidden",
              "-webkit-backface-visibility": "hidden"
          }) : t
      }

      function N({
          swiper: s,
          duration: e,
          transformEl: t,
          allSlides: n
      }) {
          const {
              slides: r,
              activeIndex: o,
              $wrapperEl: a
          } = s;
          if (s.params.virtualTranslate && 0 !== e) {
              let e, i = !1;
              e = n ? t ? r.find(t) : r : t ? r.eq(o).find(t) : r.eq(o), e.transitionEnd(() => {
                  if (!i && s && !s.destroyed) {
                      i = !0, s.animating = !1;
                      var t = ["webkitTransitionEnd", "transitionend"];
                      for (let e = 0; e < t.length; e += 1) a.trigger(t[e])
                  }
              })
          }
      }

      function D(e, t, i) {
          const s = "swiper-slide-shadow" + (i ? "-" + i : ""),
              n = e.transformEl ? t.find(e.transformEl) : t;
          let r = n.children("." + s);
          return r.length || (r = O(`<div class="swiper-slide-shadow${i?"-"+i:""}"></div>`), n.append(r)), r
      }
      return Object.keys(M).forEach(t => {
          Object.keys(M[t]).forEach(e => {
              n.prototype[e] = M[t][e]
          })
      }), n.use([function({
          swiper: r,
          on: e,
          emit: t
      }) {
          const i = P();
          let s = null;
          const o = () => {
                  r && !r.destroyed && r.initialized && (t("beforeResize"), t("resize"))
              },
              n = () => {
                  r && !r.destroyed && r.initialized && t("orientationchange")
              };
          e("init", () => {
              r.params.resizeObserver && void 0 !== i.ResizeObserver ? r && !r.destroyed && r.initialized && (s = new ResizeObserver(e => {
                  var {
                      width: t,
                      height: i
                  } = r;
                  let s = t,
                      n = i;
                  e.forEach(({
                      contentBoxSize: e,
                      contentRect: t,
                      target: i
                  }) => {
                      i && i !== r.el || (s = t ? t.width : (e[0] || e).inlineSize, n = t ? t.height : (e[0] || e).blockSize)
                  }), s === t && n === i || o()
              }), s.observe(r.el)) : (i.addEventListener("resize", o), i.addEventListener("orientationchange", n))
          }), e("destroy", () => {
              s && s.unobserve && r.el && (s.unobserve(r.el), s = null), i.removeEventListener("resize", o), i.removeEventListener("orientationchange", n)
          })
      }, function({
          swiper: e,
          extendParams: t,
          on: i,
          emit: s
      }) {
          const n = [],
              r = P(),
              o = (e, t = {}) => {
                  const i = new(r.MutationObserver || r.WebkitMutationObserver)(e => {
                      var t;
                      1 !== e.length ? (t = function() {
                          s("observerUpdate", e[0])
                      }, r.requestAnimationFrame ? r.requestAnimationFrame(t) : r.setTimeout(t, 0)) : s("observerUpdate", e[0])
                  });
                  i.observe(e, {
                      attributes: void 0 === t.attributes || t.attributes,
                      childList: void 0 === t.childList || t.childList,
                      characterData: void 0 === t.characterData || t.characterData
                  }), n.push(i)
              };
          t({
              observer: !1,
              observeParents: !1,
              observeSlideChildren: !1
          }), i("init", () => {
              if (e.params.observer) {
                  if (e.params.observeParents) {
                      var t = e.$el.parents();
                      for (let e = 0; e < t.length; e += 1) o(t[e])
                  }
                  o(e.$el[0], {
                      childList: e.params.observeSlideChildren
                  }), o(e.$wrapperEl[0], {
                      attributes: !1
                  })
              }
          }), i("destroy", () => {
              n.forEach(e => {
                  e.disconnect()
              }), n.splice(0, n.length)
          })
      }]), n.use([function({
          swiper: x,
          extendParams: e,
          on: t
      }) {
          let i;

          function T(e, t) {
              const i = x.params.virtual;
              if (i.cache && x.virtual.cache[t]) return x.virtual.cache[t];
              const s = i.renderSlide ? O(i.renderSlide.call(x, e, t)) : O(`<div class="${x.params.slideClass}" data-swiper-slide-index="${t}">${e}</div>`);
              return s.attr("data-swiper-slide-index") || s.attr("data-swiper-slide-index", t), i.cache && (x.virtual.cache[t] = s), s
          }

          function o(t) {
              const {
                  slidesPerView: e,
                  slidesPerGroup: i,
                  centeredSlides: d
              } = x.params, {
                  addSlidesBefore: u,
                  addSlidesAfter: h
              } = x.params.virtual, {
                  from: s,
                  to: n,
                  slides: r,
                  slidesGrid: p,
                  offset: m
              } = x.virtual;
              x.params.cssMode || x.updateActiveIndex();
              var f = x.activeIndex || 0;
              let o, g, v;
              o = x.rtlTranslate ? "right" : x.isHorizontal() ? "left" : "top", v = d ? (g = Math.floor(e / 2) + i + h, Math.floor(e / 2) + i + u) : (g = e + (i - 1) + h, i + u);
              const a = Math.max((f || 0) - v, 0),
                  l = Math.min((f || 0) + g, r.length - 1),
                  c = (x.slidesGrid[a] || 0) - (x.slidesGrid[0] || 0);

              function y() {
                  x.updateSlides(), x.updateProgress(), x.updateSlidesClasses(), x.lazy && x.params.lazy.enabled && x.lazy.load()
              }
              if (Object.assign(x.virtual, {
                      from: a,
                      to: l,
                      offset: c,
                      slidesGrid: x.slidesGrid
                  }), s === a && n === l && !t) return x.slidesGrid !== p && c !== m && x.slides.css(o, c + "px"), void x.updateProgress();
              if (x.params.virtual.renderExternal) return x.params.virtual.renderExternal.call(x, {
                  offset: c,
                  from: a,
                  to: l,
                  slides: function() {
                      const t = [];
                      for (let e = a; e <= l; e += 1) t.push(r[e]);
                      return t
                  }()
              }), void(x.params.virtual.renderExternalUpdate && y());
              const b = [],
                  w = [];
              if (t) x.$wrapperEl.find("." + x.params.slideClass).remove();
              else
                  for (let e = s; e <= n; e += 1)(e < a || e > l) && x.$wrapperEl.find(`.${x.params.slideClass}[data-swiper-slide-index="${e}"]`).remove();
              for (let e = 0; e < r.length; e += 1) e >= a && e <= l && (void 0 === n || t ? w.push(e) : (e > n && w.push(e), e < s && b.push(e)));
              w.forEach(e => {
                  x.$wrapperEl.append(T(r[e], e))
              }), b.sort((e, t) => t - e).forEach(e => {
                  x.$wrapperEl.prepend(T(r[e], e))
              }), x.$wrapperEl.children(".swiper-slide").css(o, c + "px"), y()
          }
          e({
              virtual: {
                  enabled: !1,
                  slides: [],
                  cache: !0,
                  renderSlide: null,
                  renderExternal: null,
                  renderExternalUpdate: !0,
                  addSlidesBefore: 0,
                  addSlidesAfter: 0
              }
          }), x.virtual = {
              cache: {},
              from: void 0,
              to: void 0,
              slides: [],
              offset: 0,
              slidesGrid: []
          }, t("beforeInit", () => {
              x.params.virtual.enabled && (x.virtual.slides = x.params.virtual.slides, x.classNames.push(x.params.containerModifierClass + "virtual"), x.params.watchSlidesProgress = !0, x.originalParams.watchSlidesProgress = !0, x.params.initialSlide || o())
          }), t("setTranslate", () => {
              x.params.virtual.enabled && (x.params.cssMode && !x._immediateVirtual ? (clearTimeout(i), i = setTimeout(() => {
                  o()
              }, 100)) : o())
          }), t("init update resize", () => {
              x.params.virtual.enabled && x.params.cssMode && C(x.wrapperEl, "--swiper-virtual-size", x.virtualSize + "px")
          }), Object.assign(x.virtual, {
              appendSlide: function(t) {
                  if ("object" == typeof t && "length" in t)
                      for (let e = 0; e < t.length; e += 1) t[e] && x.virtual.slides.push(t[e]);
                  else x.virtual.slides.push(t);
                  o(!0)
              },
              prependSlide: function(s) {
                  const n = x.activeIndex;
                  let e = n + 1,
                      r = 1;
                  if (Array.isArray(s)) {
                      for (let e = 0; e < s.length; e += 1) s[e] && x.virtual.slides.unshift(s[e]);
                      e = n + s.length, r = s.length
                  } else x.virtual.slides.unshift(s);
                  if (x.params.virtual.cache) {
                      const s = x.virtual.cache,
                          n = {};
                      Object.keys(s).forEach(e => {
                          const t = s[e],
                              i = t.attr("data-swiper-slide-index");
                          i && t.attr("data-swiper-slide-index", parseInt(i, 10) + r), n[parseInt(e, 10) + r] = t
                      }), x.virtual.cache = n
                  }
                  o(!0), x.slideTo(e, 0)
              },
              removeSlide: function(i) {
                  if (null != i) {
                      let t = x.activeIndex;
                      if (Array.isArray(i))
                          for (let e = i.length - 1; 0 <= e; --e) x.virtual.slides.splice(i[e], 1), x.params.virtual.cache && delete x.virtual.cache[i[e]], i[e] < t && --t, t = Math.max(t, 0);
                      else x.virtual.slides.splice(i, 1), x.params.virtual.cache && delete x.virtual.cache[i], i < t && --t, t = Math.max(t, 0);
                      o(!0), x.slideTo(t, 0)
                  }
              },
              removeAllSlides: function() {
                  x.virtual.slides = [], x.params.virtual.cache && (x.virtual.cache = {}), o(!0), x.slideTo(0, 0)
              },
              update: o
          })
      }, function({
          swiper: u,
          extendParams: e,
          on: t,
          emit: h
      }) {
          const p = T(),
              m = P();

          function i(t) {
              if (u.enabled) {
                  const i = u["rtlTranslate"];
                  let e = t;
                  e.originalEvent && (e = e.originalEvent);
                  const s = e.keyCode || e.charCode,
                      n = u.params.keyboard.pageUpDown,
                      r = n && 33 === s,
                      o = n && 34 === s,
                      a = 37 === s,
                      l = 39 === s,
                      c = 38 === s,
                      d = 40 === s;
                  if (!u.allowSlideNext && (u.isHorizontal() && l || u.isVertical() && d || o)) return !1;
                  if (!u.allowSlidePrev && (u.isHorizontal() && a || u.isVertical() && c || r)) return !1;
                  if (!(e.shiftKey || e.altKey || e.ctrlKey || e.metaKey || p.activeElement && p.activeElement.nodeName && ("input" === p.activeElement.nodeName.toLowerCase() || "textarea" === p.activeElement.nodeName.toLowerCase()))) {
                      if (u.params.keyboard.onlyInViewport && (r || o || a || l || c || d)) {
                          let t = !1;
                          if (0 < u.$el.parents("." + u.params.slideClass).length && 0 === u.$el.parents("." + u.params.slideActiveClass).length) return;
                          const e = u.$el,
                              h = e[0].clientWidth,
                              s = e[0].clientHeight,
                              p = m.innerWidth,
                              n = m.innerHeight,
                              r = u.$el.offset(),
                              o = (i && (r.left -= u.$el[0].scrollLeft), [
                                  [r.left, r.top],
                                  [r.left + h, r.top],
                                  [r.left, r.top + s],
                                  [r.left + h, r.top + s]
                              ]);
                          for (let e = 0; e < o.length; e += 1) {
                              const i = o[e];
                              0 <= i[0] && i[0] <= p && 0 <= i[1] && i[1] <= n && (0 === i[0] && 0 === i[1] || (t = !0))
                          }
                          if (!t) return
                      }
                      u.isHorizontal() ? ((r || o || a || l) && (e.preventDefault ? e.preventDefault() : e.returnValue = !1), ((o || l) && !i || (r || a) && i) && u.slideNext(), ((r || a) && !i || (o || l) && i) && u.slidePrev()) : ((r || o || c || d) && (e.preventDefault ? e.preventDefault() : e.returnValue = !1), (o || d) && u.slideNext(), (r || c) && u.slidePrev()), h("keyPress", s)
                  }
              }
          }

          function s() {
              u.keyboard.enabled || (O(p).on("keydown", i), u.keyboard.enabled = !0)
          }

          function n() {
              u.keyboard.enabled && (O(p).off("keydown", i), u.keyboard.enabled = !1)
          }
          e({
              keyboard: {
                  enabled: !(u.keyboard = {
                      enabled: !1
                  }),
                  onlyInViewport: !0,
                  pageUpDown: !0
              }
          }), t("init", () => {
              u.params.keyboard.enabled && s()
          }), t("destroy", () => {
              u.keyboard.enabled && n()
          }), Object.assign(u.keyboard, {
              enable: s,
              disable: n
          })
      }, function({
          swiper: c,
          extendParams: r,
          on: e,
          emit: d
      }) {
          const o = P();
          let u;
          r({
              mousewheel: {
                  enabled: !1,
                  releaseOnEdges: !1,
                  invert: !1,
                  forceToAxis: !1,
                  sensitivity: 1,
                  eventsTarget: "container",
                  thresholdDelta: null,
                  thresholdTime: null
              }
          }), c.mousewheel = {
              enabled: !1
          };
          let h, t = g();
          const p = [];

          function a() {
              c.enabled && (c.mouseEntered = !0)
          }

          function l() {
              c.enabled && (c.mouseEntered = !1)
          }

          function m(e) {
              return !(c.params.mousewheel.thresholdDelta && e.delta < c.params.mousewheel.thresholdDelta) && !(c.params.mousewheel.thresholdTime && g() - t < c.params.mousewheel.thresholdTime) && (6 <= e.delta && g() - t < 60 || (e.direction < 0 ? c.isEnd && !c.params.loop || c.animating || (c.slideNext(), d("scroll", e.raw)) : c.isBeginning && !c.params.loop || c.animating || (c.slidePrev(), d("scroll", e.raw)), t = (new o.Date).getTime(), 0))
          }

          function i(s) {
              let n = s,
                  r = !0;
              if (c.enabled) {
                  var o = c.params.mousewheel;
                  c.params.cssMode && n.preventDefault();
                  let e = c.$el;
                  if ("container" !== c.params.mousewheel.eventsTarget && (e = O(c.params.mousewheel.eventsTarget)), !c.mouseEntered && !e[0].contains(n.target) && !o.releaseOnEdges) return !0;
                  n.originalEvent && (n = n.originalEvent);
                  let t = 0;
                  var a = c.rtlTranslate ? -1 : 1,
                      l = function(e) {
                          let t = 0,
                              i = 0,
                              s = 0,
                              n = 0;
                          return "detail" in e && (i = e.detail), "wheelDelta" in e && (i = -e.wheelDelta / 120), "wheelDeltaY" in e && (i = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = i, i = 0), s = 10 * t, n = 10 * i, "deltaY" in e && (n = e.deltaY), "deltaX" in e && (s = e.deltaX), e.shiftKey && !s && (s = n, n = 0), (s || n) && e.deltaMode && (1 === e.deltaMode ? (s *= 40, n *= 40) : (s *= 800, n *= 800)), s && !t && (t = s < 1 ? -1 : 1), n && !i && (i = n < 1 ? -1 : 1), {
                              spinX: t,
                              spinY: i,
                              pixelX: s,
                              pixelY: n
                          }
                      }(n);
                  if (o.forceToAxis)
                      if (c.isHorizontal()) {
                          if (!(Math.abs(l.pixelX) > Math.abs(l.pixelY))) return !0;
                          t = -l.pixelX * a
                      } else {
                          if (!(Math.abs(l.pixelY) > Math.abs(l.pixelX))) return !0;
                          t = -l.pixelY
                      }
                  else t = Math.abs(l.pixelX) > Math.abs(l.pixelY) ? -l.pixelX * a : -l.pixelY;
                  if (0 === t) return !0;
                  o.invert && (t = -t);
                  let i = c.getTranslate() + t * o.sensitivity;
                  if (i >= c.minTranslate() && (i = c.minTranslate()), i <= c.maxTranslate() && (i = c.maxTranslate()), r = !!c.params.loop || !(i === c.minTranslate() || i === c.maxTranslate()), r && c.params.nested && n.stopPropagation(), c.params.freeMode && c.params.freeMode.enabled) {
                      const s = {
                              time: g(),
                              delta: Math.abs(t),
                              direction: Math.sign(t)
                          },
                          r = h && s.time < h.time + 500 && s.delta <= h.delta && s.direction === h.direction;
                      if (!r) {
                          h = void 0, c.params.loop && c.loopFix();
                          let e = c.getTranslate() + t * o.sensitivity;
                          const O = c.isBeginning,
                              g = c.isEnd;
                          if (e >= c.minTranslate() && (e = c.minTranslate()), e <= c.maxTranslate() && (e = c.maxTranslate()), c.setTransition(0), c.setTranslate(e), c.updateProgress(), c.updateActiveIndex(), c.updateSlidesClasses(), (!O && c.isBeginning || !g && c.isEnd) && c.updateSlidesClasses(), c.params.freeMode.sticky) {
                              clearTimeout(u), u = void 0, 15 <= p.length && p.shift();
                              const n = p.length ? p[p.length - 1] : void 0,
                                  d = p[0];
                              if (p.push(s), n && (s.delta > n.delta || s.direction !== n.direction)) p.splice(0);
                              else if (15 <= p.length && s.time - d.time < 500 && 1 <= d.delta - s.delta && s.delta <= 6) {
                                  const n = 0 < t ? .8 : .2;
                                  h = s, p.splice(0), u = E(() => {
                                      c.slideToClosest(c.params.speed, !0, void 0, n)
                                  }, 0)
                              }
                              u = u || E(() => {
                                  h = s, p.splice(0), c.slideToClosest(c.params.speed, !0, void 0, .5)
                              }, 500)
                          }
                          if (r || d("scroll", n), c.params.autoplay && c.params.autoplayDisableOnInteraction && c.autoplay.stop(), e === c.minTranslate() || e === c.maxTranslate()) return !0
                      }
                  } else {
                      const n = {
                              time: g(),
                              delta: Math.abs(t),
                              direction: Math.sign(t),
                              raw: s
                          },
                          d = (2 <= p.length && p.shift(), p.length ? p[p.length - 1] : void 0);
                      if (p.push(n), (!d || n.direction !== d.direction || n.delta > d.delta || n.time > d.time + 150) && m(n), function(e) {
                              var t = c.params.mousewheel;
                              if (e.direction < 0) {
                                  if (c.isEnd && !c.params.loop && t.releaseOnEdges) return 1
                              } else if (c.isBeginning && !c.params.loop && t.releaseOnEdges) return 1
                          }(n)) return !0
                  }
                  return n.preventDefault ? n.preventDefault() : n.returnValue = !1, !1
              }
          }

          function f(e) {
              let t = c.$el;
              "container" !== c.params.mousewheel.eventsTarget && (t = O(c.params.mousewheel.eventsTarget)), t[e]("mouseenter", a), t[e]("mouseleave", l), t[e]("wheel", i)
          }

          function s() {
              return c.params.cssMode ? (c.wrapperEl.removeEventListener("wheel", i), !0) : !c.mousewheel.enabled && (f("on"), c.mousewheel.enabled = !0)
          }

          function n() {
              return c.params.cssMode ? (c.wrapperEl.addEventListener(event, i), !0) : !!c.mousewheel.enabled && (f("off"), !(c.mousewheel.enabled = !1))
          }
          e("init", () => {
              !c.params.mousewheel.enabled && c.params.cssMode && n(), c.params.mousewheel.enabled && s()
          }), e("destroy", () => {
              c.params.cssMode && s(), c.mousewheel.enabled && n()
          }), Object.assign(c.mousewheel, {
              enable: s,
              disable: n
          })
      }, function({
          swiper: r,
          extendParams: e,
          on: t,
          emit: d
      }) {
          function s(e) {
              let t;
              return e && (t = O(e), r.params.uniqueNavElements && "string" == typeof e && 1 < t.length && 1 === r.$el.find(e).length && (t = r.$el.find(e))), t
          }

          function i(e, t) {
              var i = r.params.navigation;
              e && 0 < e.length && (e[t ? "addClass" : "removeClass"](i.disabledClass), e[0] && "BUTTON" === e[0].tagName && (e[0].disabled = t), r.params.watchOverflow && r.enabled && e[r.isLocked ? "addClass" : "removeClass"](i.lockClass))
          }

          function n() {
              var e, t;
              r.params.loop || ({
                  $nextEl: e,
                  $prevEl: t
              } = r.navigation, i(t, r.isBeginning && !r.params.rewind), i(e, r.isEnd && !r.params.rewind))
          }

          function o(e) {
              e.preventDefault(), r.isBeginning && !r.params.loop && !r.params.rewind || r.slidePrev()
          }

          function a(e) {
              e.preventDefault(), r.isEnd && !r.params.loop && !r.params.rewind || r.slideNext()
          }

          function l() {
              var e = r.params.navigation;
              if (r.params.navigation = $(r, r.originalParams.navigation, r.params.navigation, {
                      nextEl: "swiper-button-next",
                      prevEl: "swiper-button-prev"
                  }), e.nextEl || e.prevEl) {
                  const t = s(e.nextEl),
                      i = s(e.prevEl);
                  t && 0 < t.length && t.on("click", a), i && 0 < i.length && i.on("click", o), Object.assign(r.navigation, {
                      $nextEl: t,
                      nextEl: t && t[0],
                      $prevEl: i,
                      prevEl: i && i[0]
                  }), r.enabled || (t && t.addClass(e.lockClass), i && i.addClass(e.lockClass))
              }
          }

          function c() {
              const {
                  $nextEl: e,
                  $prevEl: t
              } = r.navigation;
              e && e.length && (e.off("click", a), e.removeClass(r.params.navigation.disabledClass)), t && t.length && (t.off("click", o), t.removeClass(r.params.navigation.disabledClass))
          }
          e({
              navigation: {
                  nextEl: null,
                  prevEl: null,
                  hideOnClick: !1,
                  disabledClass: "swiper-button-disabled",
                  hiddenClass: "swiper-button-hidden",
                  lockClass: "swiper-button-lock"
              }
          }), r.navigation = {
              nextEl: null,
              $nextEl: null,
              prevEl: null,
              $prevEl: null
          }, t("init", () => {
              l(), n()
          }), t("toEdge fromEdge lock unlock", () => {
              n()
          }), t("destroy", () => {
              c()
          }), t("enable disable", () => {
              const {
                  $nextEl: e,
                  $prevEl: t
              } = r.navigation;
              e && e[r.enabled ? "removeClass" : "addClass"](r.params.navigation.lockClass), t && t[r.enabled ? "removeClass" : "addClass"](r.params.navigation.lockClass)
          }), t("click", (e, t) => {
              const {
                  $nextEl: i,
                  $prevEl: s
              } = r.navigation, n = t.target;
              if (r.params.navigation.hideOnClick && !O(n).is(s) && !O(n).is(i) && (!(r.pagination && r.params.pagination && r.params.pagination.clickable) || r.pagination.el !== n && !r.pagination.el.contains(n))) {
                  let e;
                  i ? e = i.hasClass(r.params.navigation.hiddenClass) : s && (e = s.hasClass(r.params.navigation.hiddenClass)), d(!0 === e ? "navigationShow" : "navigationHide"), i && i.toggleClass(r.params.navigation.hiddenClass), s && s.toggleClass(r.params.navigation.hiddenClass)
              }
          }), Object.assign(r.navigation, {
              update: n,
              init: l,
              destroy: c
          })
      }, function({
          swiper: c,
          extendParams: n,
          on: e,
          emit: d
      }) {
          var t = "swiper-pagination";
          let u, h = (n({
              pagination: {
                  el: null,
                  bulletElement: "span",
                  clickable: !1,
                  hideOnClick: !1,
                  renderBullet: null,
                  renderProgressbar: null,
                  renderFraction: null,
                  renderCustom: null,
                  progressbarOpposite: !1,
                  type: "bullets",
                  dynamicBullets: !1,
                  dynamicMainBullets: 1,
                  formatFractionCurrent: e => e,
                  formatFractionTotal: e => e,
                  bulletClass: t + "-bullet",
                  bulletActiveClass: t + "-bullet-active",
                  modifierClass: t + "-",
                  currentClass: t + "-current",
                  totalClass: t + "-total",
                  hiddenClass: t + "-hidden",
                  progressbarFillClass: t + "-progressbar-fill",
                  progressbarOppositeClass: t + "-progressbar-opposite",
                  clickableClass: t + "-clickable",
                  lockClass: t + "-lock",
                  horizontalClass: t + "-horizontal",
                  verticalClass: t + "-vertical"
              }
          }), c.pagination = {
              el: null,
              $el: null,
              bullets: []
          }, 0);

          function p() {
              return !c.params.pagination.el || !c.pagination.el || !c.pagination.$el || 0 === c.pagination.$el.length
          }

          function m(e, t) {
              var i = c.params.pagination["bulletActiveClass"];
              e[t]().addClass(i + "-" + t)[t]().addClass(i + `-${t}-` + t)
          }

          function i() {
              const t = c.rtl,
                  o = c.params.pagination;
              if (!p()) {
                  const a = (c.virtual && c.params.virtual.enabled ? c.virtual : c).slides.length,
                      l = c.pagination.$el;
                  let r;
                  var i = c.params.loop ? Math.ceil((a - 2 * c.loopedSlides) / c.params.slidesPerGroup) : c.snapGrid.length;
                  if (c.params.loop ? (r = Math.ceil((c.activeIndex - c.loopedSlides) / c.params.slidesPerGroup), r > a - 1 - 2 * c.loopedSlides && (r -= a - 2 * c.loopedSlides), r > i - 1 && (r -= i), r < 0 && "bullets" !== c.params.paginationType && (r = i + r)) : r = void 0 !== c.snapIndex ? c.snapIndex : c.activeIndex || 0, "bullets" === o.type && c.pagination.bullets && 0 < c.pagination.bullets.length) {
                      const d = c.pagination.bullets;
                      let s, n, e;
                      if (o.dynamicBullets && (u = d.eq(0)[c.isHorizontal() ? "outerWidth" : "outerHeight"](!0), l.css(c.isHorizontal() ? "width" : "height", u * (o.dynamicMainBullets + 4) + "px"), 1 < o.dynamicMainBullets && void 0 !== c.previousIndex && (h += r - (c.previousIndex - c.loopedSlides || 0), h > o.dynamicMainBullets - 1 ? h = o.dynamicMainBullets - 1 : h < 0 && (h = 0)), s = Math.max(r - h, 0), n = s + (Math.min(d.length, o.dynamicMainBullets) - 1), e = (n + s) / 2), d.removeClass(["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map(e => "" + o.bulletActiveClass + e).join(" ")), 1 < l.length) d.each(e => {
                          const t = O(e),
                              i = t.index();
                          i === r && t.addClass(o.bulletActiveClass), o.dynamicBullets && (i >= s && i <= n && t.addClass(o.bulletActiveClass + "-main"), i === s && m(t, "prev"), i === n && m(t, "next"))
                      });
                      else {
                          const t = d.eq(r),
                              u = t.index();
                          if (t.addClass(o.bulletActiveClass), o.dynamicBullets) {
                              const t = d.eq(s),
                                  h = d.eq(n);
                              for (let e = s; e <= n; e += 1) d.eq(e).addClass(o.bulletActiveClass + "-main");
                              if (c.params.loop)
                                  if (u >= d.length) {
                                      for (let e = o.dynamicMainBullets; 0 <= e; --e) d.eq(d.length - e).addClass(o.bulletActiveClass + "-main");
                                      d.eq(d.length - o.dynamicMainBullets - 1).addClass(o.bulletActiveClass + "-prev")
                                  } else m(t, "prev"), m(h, "next");
                              else m(t, "prev"), m(h, "next")
                          }
                      }
                      if (o.dynamicBullets) {
                          const a = Math.min(d.length, o.dynamicMainBullets + 4),
                              h = (u * a - u) / 2 - e * u,
                              p = t ? "right" : "left";
                          d.css(c.isHorizontal() ? p : "top", h + "px")
                      }
                  }
                  if ("fraction" === o.type && (l.find(v(o.currentClass)).text(o.formatFractionCurrent(r + 1)), l.find(v(o.totalClass)).text(o.formatFractionTotal(i))), "progressbar" === o.type) {
                      var s = o.progressbarOpposite ? c.isHorizontal() ? "vertical" : "horizontal" : c.isHorizontal() ? "horizontal" : "vertical";
                      const d = (r + 1) / i;
                      let e = 1,
                          t = 1;
                      "horizontal" == s ? e = d : t = d, l.find(v(o.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${e}) scaleY(${t})`).transition(c.params.speed)
                  }
                  "custom" === o.type && o.renderCustom ? (l.html(o.renderCustom(c, r + 1, i)), d("paginationRender", l[0])) : d("paginationUpdate", l[0]), c.params.watchOverflow && c.enabled && l[c.isLocked ? "addClass" : "removeClass"](o.lockClass)
              }
          }

          function s() {
              const s = c.params.pagination;
              if (!p()) {
                  const e = (c.virtual && c.params.virtual.enabled ? c.virtual : c).slides.length,
                      n = c.pagination.$el;
                  let i = "";
                  if ("bullets" === s.type) {
                      let t = c.params.loop ? Math.ceil((e - 2 * c.loopedSlides) / c.params.slidesPerGroup) : c.snapGrid.length;
                      c.params.freeMode && c.params.freeMode.enabled && !c.params.loop && t > e && (t = e);
                      for (let e = 0; e < t; e += 1) s.renderBullet ? i += s.renderBullet.call(c, e, s.bulletClass) : i += `<${s.bulletElement} class="${s.bulletClass}"></${s.bulletElement}>`;
                      n.html(i), c.pagination.bullets = n.find(v(s.bulletClass))
                  }
                  "fraction" === s.type && (i = s.renderFraction ? s.renderFraction.call(c, s.currentClass, s.totalClass) : `<span class="${s.currentClass}"></span> / <span class="${s.totalClass}"></span>`, n.html(i)), "progressbar" === s.type && (i = s.renderProgressbar ? s.renderProgressbar.call(c, s.progressbarFillClass) : `<span class="${s.progressbarFillClass}"></span>`, n.html(i)), "custom" !== s.type && d("paginationRender", c.pagination.$el[0])
              }
          }

          function r() {
              c.params.pagination = $(c, c.originalParams.pagination, c.params.pagination, {
                  el: "swiper-pagination"
              });
              const t = c.params.pagination;
              if (t.el) {
                  let e = O(t.el);
                  0 !== e.length && (c.params.uniqueNavElements && "string" == typeof t.el && 1 < e.length && (e = c.$el.find(t.el), 1 < e.length && (e = e.filter(e => O(e).parents(".swiper")[0] === c.el))), "bullets" === t.type && t.clickable && e.addClass(t.clickableClass), e.addClass(t.modifierClass + t.type), e.addClass(t.modifierClass + c.params.direction), "bullets" === t.type && t.dynamicBullets && (e.addClass("" + t.modifierClass + t.type + "-dynamic"), h = 0, t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)), "progressbar" === t.type && t.progressbarOpposite && e.addClass(t.progressbarOppositeClass), t.clickable && e.on("click", v(t.bulletClass), function(e) {
                      e.preventDefault();
                      let t = O(this).index() * c.params.slidesPerGroup;
                      c.params.loop && (t += c.loopedSlides), c.slideTo(t)
                  }), Object.assign(c.pagination, {
                      $el: e,
                      el: e[0]
                  }), c.enabled || e.addClass(t.lockClass))
              }
          }

          function o() {
              var e = c.params.pagination;
              if (!p()) {
                  const t = c.pagination.$el;
                  t.removeClass(e.hiddenClass), t.removeClass(e.modifierClass + e.type), t.removeClass(e.modifierClass + c.params.direction), c.pagination.bullets && c.pagination.bullets.removeClass && c.pagination.bullets.removeClass(e.bulletActiveClass), e.clickable && t.off("click", v(e.bulletClass))
              }
          }
          e("init", () => {
              r(), s(), i()
          }), e("activeIndexChange", () => {
              !c.params.loop && void 0 !== c.snapIndex || i()
          }), e("snapIndexChange", () => {
              c.params.loop || i()
          }), e("slidesLengthChange", () => {
              c.params.loop && (s(), i())
          }), e("snapGridLengthChange", () => {
              c.params.loop || (s(), i())
          }), e("destroy", () => {
              o()
          }), e("enable disable", () => {
              const e = c.pagination["$el"];
              e && e[c.enabled ? "removeClass" : "addClass"](c.params.pagination.lockClass)
          }), e("lock unlock", () => {
              i()
          }), e("click", (e, t) => {
              const i = t.target,
                  s = c.pagination["$el"];
              if (c.params.pagination.el && c.params.pagination.hideOnClick && 0 < s.length && !O(i).hasClass(c.params.pagination.bulletClass) && (!c.navigation || !(c.navigation.nextEl && i === c.navigation.nextEl || c.navigation.prevEl && i === c.navigation.prevEl))) {
                  const e = s.hasClass(c.params.pagination.hiddenClass);
                  d(!0 === e ? "paginationShow" : "paginationHide"), s.toggleClass(c.params.pagination.hiddenClass)
              }
          }), Object.assign(c.pagination, {
              render: s,
              update: i,
              init: r,
              destroy: o
          })
      }, function({
          swiper: c,
          extendParams: i,
          on: e,
          emit: o
      }) {
          const p = T();
          let a, l, d, s, u = !1,
              m = null,
              h = null;

          function t() {
              if (c.params.scrollbar.el && c.scrollbar.el) {
                  const {
                      scrollbar: i,
                      rtlTranslate: s,
                      progress: n
                  } = c, {
                      $dragEl: r,
                      $el: o
                  } = i, a = c.params.scrollbar;
                  let e = l,
                      t = (d - l) * n;
                  s ? (t = -t, 0 < t ? (e = l - t, t = 0) : -t + l > d && (e = d + t)) : t < 0 ? (e = l + t, t = 0) : t + l > d && (e = d - t), c.isHorizontal() ? (r.transform(`translate3d(${t}px, 0, 0)`), r[0].style.width = e + "px") : (r.transform(`translate3d(0px, ${t}px, 0)`), r[0].style.height = e + "px"), a.hide && (clearTimeout(m), o[0].style.opacity = 1, m = setTimeout(() => {
                      o[0].style.opacity = 0, o.transition(400)
                  }, 1e3))
              }
          }

          function n() {
              if (c.params.scrollbar.el && c.scrollbar.el) {
                  const e = c["scrollbar"],
                      {
                          $dragEl: t,
                          $el: i
                      } = e;
                  t[0].style.width = "", t[0].style.height = "", d = c.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight, s = c.size / (c.virtualSize + c.params.slidesOffsetBefore - (c.params.centeredSlides ? c.snapGrid[0] : 0)), l = "auto" === c.params.scrollbar.dragSize ? d * s : parseInt(c.params.scrollbar.dragSize, 10), c.isHorizontal() ? t[0].style.width = l + "px" : t[0].style.height = l + "px", i[0].style.display = 1 <= s ? "none" : "", c.params.scrollbar.hide && (i[0].style.opacity = 0), c.params.watchOverflow && c.enabled && e.$el[c.isLocked ? "addClass" : "removeClass"](c.params.scrollbar.lockClass)
              }
          }

          function f(e) {
              return c.isHorizontal() ? ("touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0] : e).clientX : ("touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0] : e).clientY
          }

          function g(e) {
              const {
                  scrollbar: t,
                  rtlTranslate: i
              } = c, s = t["$el"];
              let n;
              n = (f(e) - s.offset()[c.isHorizontal() ? "left" : "top"] - (null !== a ? a : l / 2)) / (d - l), n = Math.max(Math.min(n, 1), 0), i && (n = 1 - n);
              e = c.minTranslate() + (c.maxTranslate() - c.minTranslate()) * n;
              c.updateProgress(e), c.setTranslate(e), c.updateActiveIndex(), c.updateSlidesClasses()
          }

          function v(e) {
              const t = c.params.scrollbar,
                  {
                      scrollbar: i,
                      $wrapperEl: s
                  } = c,
                  {
                      $el: n,
                      $dragEl: r
                  } = i;
              u = !0, a = e.target === r[0] || e.target === r ? f(e) - e.target.getBoundingClientRect()[c.isHorizontal() ? "left" : "top"] : null, e.preventDefault(), e.stopPropagation(), s.transition(100), r.transition(100), g(e), clearTimeout(h), n.transition(0), t.hide && n.css("opacity", 1), c.params.cssMode && c.$wrapperEl.css("scroll-snap-type", "none"), o("scrollbarDragStart", e)
          }

          function y(e) {
              const {
                  scrollbar: t,
                  $wrapperEl: i
              } = c, {
                  $el: s,
                  $dragEl: n
              } = t;
              u && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, g(e), i.transition(0), s.transition(0), n.transition(0), o("scrollbarDragMove", e))
          }

          function b(e) {
              const t = c.params.scrollbar,
                  {
                      scrollbar: i,
                      $wrapperEl: s
                  } = c,
                  n = i["$el"];
              u && (u = !1, c.params.cssMode && (c.$wrapperEl.css("scroll-snap-type", ""), s.transition("")), t.hide && (clearTimeout(h), h = E(() => {
                  n.css("opacity", 0), n.transition(400)
              }, 1e3)), o("scrollbarDragEnd", e), t.snapOnRelease && c.slideToClosest())
          }

          function r(e) {
              const {
                  scrollbar: t,
                  touchEventsTouch: i,
                  touchEventsDesktop: s,
                  params: n,
                  support: r
              } = c, o = t.$el[0], a = !(!r.passiveListener || !n.passiveListeners) && {
                  passive: !1,
                  capture: !1
              }, l = !(!r.passiveListener || !n.passiveListeners) && {
                  passive: !0,
                  capture: !1
              };
              o && (e = "on" === e ? "addEventListener" : "removeEventListener", r.touch ? (o[e](i.start, v, a), o[e](i.move, y, a), o[e](i.end, b, l)) : (o[e](s.start, v, a), p[e](s.move, y, a), p[e](s.end, b, l)))
          }

          function w() {
              const {
                  scrollbar: i,
                  $el: s
              } = c;
              c.params.scrollbar = $(c, c.originalParams.scrollbar, c.params.scrollbar, {
                  el: "swiper-scrollbar"
              });
              var n = c.params.scrollbar;
              if (n.el) {
                  let e = O(n.el),
                      t = (c.params.uniqueNavElements && "string" == typeof n.el && 1 < e.length && 1 === s.find(n.el).length && (e = s.find(n.el)), e.find("." + c.params.scrollbar.dragClass));
                  0 === t.length && (t = O(`<div class="${c.params.scrollbar.dragClass}"></div>`), e.append(t)), Object.assign(i, {
                      $el: e,
                      el: e[0],
                      $dragEl: t,
                      dragEl: t[0]
                  }), n.draggable && c.params.scrollbar.el && r("on"), e && e[c.enabled ? "removeClass" : "addClass"](c.params.scrollbar.lockClass)
              }
          }

          function x() {
              c.params.scrollbar.el && r("off")
          }
          i({
              scrollbar: {
                  el: null,
                  dragSize: "auto",
                  hide: !1,
                  draggable: !1,
                  snapOnRelease: !0,
                  lockClass: "swiper-scrollbar-lock",
                  dragClass: "swiper-scrollbar-drag"
              }
          }), c.scrollbar = {
              el: null,
              dragEl: null,
              $el: null,
              $dragEl: null
          }, e("init", () => {
              w(), n(), t()
          }), e("update resize observerUpdate lock unlock", () => {
              n()
          }), e("setTranslate", () => {
              t()
          }), e("setTransition", (e, t) => {
              c.params.scrollbar.el && c.scrollbar.el && c.scrollbar.$dragEl.transition(t)
          }), e("enable disable", () => {
              const e = c.scrollbar["$el"];
              e && e[c.enabled ? "removeClass" : "addClass"](c.params.scrollbar.lockClass)
          }), e("destroy", () => {
              x()
          }), Object.assign(c.scrollbar, {
              updateSize: n,
              setTranslate: t,
              init: w,
              destroy: x
          })
      }, function({
          swiper: c,
          extendParams: e,
          on: t
      }) {
          e({
              parallax: {
                  enabled: !1
              }
          });
          const r = (e, t) => {
                  const i = c["rtl"],
                      s = O(e),
                      n = i ? -1 : 1,
                      r = s.attr("data-swiper-parallax") || "0";
                  let o = s.attr("data-swiper-parallax-x"),
                      a = s.attr("data-swiper-parallax-y");
                  var e = s.attr("data-swiper-parallax-scale"),
                      l = s.attr("data-swiper-parallax-opacity");
                  if (o || a ? (o = o || "0", a = a || "0") : c.isHorizontal() ? (o = r, a = "0") : (a = r, o = "0"), o = 0 <= o.indexOf("%") ? parseInt(o, 10) * t * n + "%" : o * t * n + "px", a = 0 <= a.indexOf("%") ? parseInt(a, 10) * t + "%" : a * t + "px", null != l) {
                      const c = l - (l - 1) * (1 - Math.abs(t));
                      s[0].style.opacity = c
                  }
                  if (null == e) s.transform(`translate3d(${o}, ${a}, 0px)`);
                  else {
                      const c = e - (e - 1) * (1 - Math.abs(t));
                      s.transform(`translate3d(${o}, ${a}, 0px) scale(${c})`)
                  }
              },
              i = () => {
                  const {
                      $el: e,
                      slides: t,
                      progress: s,
                      snapGrid: n
                  } = c;
                  e.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(e => {
                      r(e, s)
                  }), t.each((e, t) => {
                      let i = e.progress;
                      1 < c.params.slidesPerGroup && "auto" !== c.params.slidesPerView && (i += Math.ceil(t / 2) - s * (n.length - 1)), i = Math.min(Math.max(i, -1), 1), O(e).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(e => {
                          r(e, i)
                      })
                  })
              };
          t("beforeInit", () => {
              c.params.parallax.enabled && (c.params.watchSlidesProgress = !0, c.originalParams.watchSlidesProgress = !0)
          }), t("init", () => {
              c.params.parallax.enabled && i()
          }), t("setTranslate", () => {
              c.params.parallax.enabled && i()
          }), t("setTransition", (e, t) => {
              if (c.params.parallax.enabled) {
                  var [s = c.params.speed] = [t];
                  const i = c["$el"];
                  i.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(e => {
                      const t = O(e);
                      let i = parseInt(t.attr("data-swiper-parallax-duration"), 10) || s;
                      0 === s && (i = 0), t.transition(i)
                  })
              } else;
          })
      }, function({
          swiper: x,
          extendParams: i,
          on: e,
          emit: s
      }) {
          const S = P();
          i({
              zoom: {
                  enabled: !1,
                  maxRatio: 3,
                  minRatio: 1,
                  toggle: !0,
                  containerClass: "swiper-zoom-container",
                  zoomedSlideClass: "swiper-slide-zoomed"
              }
          }), x.zoom = {
              enabled: !1
          };
          let t, r, o, T = 1,
              c = !1;
          const E = {
                  $slideEl: void 0,
                  slideWidth: void 0,
                  slideHeight: void 0,
                  $imageEl: void 0,
                  $imageWrapEl: void 0,
                  maxRatio: 3
              },
              _ = {
                  isTouched: void 0,
                  isMoved: void 0,
                  currentX: void 0,
                  currentY: void 0,
                  minX: void 0,
                  minY: void 0,
                  maxX: void 0,
                  maxY: void 0,
                  width: void 0,
                  height: void 0,
                  startX: void 0,
                  startY: void 0,
                  touchesStart: {},
                  touchesCurrent: {}
              },
              a = {
                  x: void 0,
                  y: void 0,
                  prevPositionX: void 0,
                  prevPositionY: void 0,
                  prevTime: void 0
              };
          let n = 1;

          function d(e) {
              if (e.targetTouches.length < 2) return 1;
              var t = e.targetTouches[0].pageX,
                  i = e.targetTouches[0].pageY,
                  s = e.targetTouches[1].pageX,
                  e = e.targetTouches[1].pageY;
              return Math.sqrt((s - t) ** 2 + (e - i) ** 2)
          }

          function u(e) {
              var t = x.support,
                  i = x.params.zoom;
              if (r = !1, o = !1, !t.gestures) {
                  if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
                  r = !0, E.scaleStart = d(e)
              }
              E.$slideEl && E.$slideEl.length || (E.$slideEl = O(e.target).closest("." + x.params.slideClass), 0 === E.$slideEl.length && (E.$slideEl = x.slides.eq(x.activeIndex)), E.$imageEl = E.$slideEl.find("." + i.containerClass).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0), E.$imageWrapEl = E.$imageEl.parent("." + i.containerClass), E.maxRatio = E.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio, 0 !== E.$imageWrapEl.length) ? (E.$imageEl && E.$imageEl.transition(0), c = !0) : E.$imageEl = void 0
          }

          function h(e) {
              const t = x.support,
                  i = x.params.zoom,
                  s = x.zoom;
              if (!t.gestures) {
                  if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
                  o = !0, E.scaleMove = d(e)
              }
              E.$imageEl && 0 !== E.$imageEl.length ? (t.gestures ? s.scale = e.scale * T : s.scale = E.scaleMove / E.scaleStart * T, s.scale > E.maxRatio && (s.scale = E.maxRatio - 1 + (s.scale - E.maxRatio + 1) ** .5), s.scale < i.minRatio && (s.scale = i.minRatio + 1 - (i.minRatio - s.scale + 1) ** .5), E.$imageEl.transform(`translate3d(0,0,0) scale(${s.scale})`)) : "gesturechange" === e.type && u(e)
          }

          function l(e) {
              const t = x.device,
                  i = x.support,
                  s = x.params.zoom,
                  n = x.zoom;
              if (!i.gestures) {
                  if (!r || !o) return;
                  if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !t.android) return;
                  r = !1, o = !1
              }
              E.$imageEl && 0 !== E.$imageEl.length && (n.scale = Math.max(Math.min(n.scale, E.maxRatio), s.minRatio), E.$imageEl.transition(x.params.speed).transform(`translate3d(0,0,0) scale(${n.scale})`), T = n.scale, c = !1, 1 === n.scale && (E.$slideEl = void 0))
          }

          function p(e) {
              var t = x.zoom;
              if (E.$imageEl && 0 !== E.$imageEl.length && (x.allowClick = !1, _.isTouched && E.$slideEl)) {
                  _.isMoved || (_.width = E.$imageEl[0].offsetWidth, _.height = E.$imageEl[0].offsetHeight, _.startX = I(E.$imageWrapEl[0], "x") || 0, _.startY = I(E.$imageWrapEl[0], "y") || 0, E.slideWidth = E.$slideEl[0].offsetWidth, E.slideHeight = E.$slideEl[0].offsetHeight, E.$imageWrapEl.transition(0));
                  var i = _.width * t.scale,
                      t = _.height * t.scale;
                  if (!(i < E.slideWidth && t < E.slideHeight)) {
                      if (_.minX = Math.min(E.slideWidth / 2 - i / 2, 0), _.maxX = -_.minX, _.minY = Math.min(E.slideHeight / 2 - t / 2, 0), _.maxY = -_.minY, _.touchesCurrent.x = ("touchmove" === e.type ? e.targetTouches[0] : e).pageX, _.touchesCurrent.y = ("touchmove" === e.type ? e.targetTouches[0] : e).pageY, !_.isMoved && !c) {
                          if (x.isHorizontal() && (Math.floor(_.minX) === Math.floor(_.startX) && _.touchesCurrent.x < _.touchesStart.x || Math.floor(_.maxX) === Math.floor(_.startX) && _.touchesCurrent.x > _.touchesStart.x)) return void(_.isTouched = !1);
                          if (!x.isHorizontal() && (Math.floor(_.minY) === Math.floor(_.startY) && _.touchesCurrent.y < _.touchesStart.y || Math.floor(_.maxY) === Math.floor(_.startY) && _.touchesCurrent.y > _.touchesStart.y)) return void(_.isTouched = !1)
                      }
                      e.cancelable && e.preventDefault(), e.stopPropagation(), _.isMoved = !0, _.currentX = _.touchesCurrent.x - _.touchesStart.x + _.startX, _.currentY = _.touchesCurrent.y - _.touchesStart.y + _.startY, _.currentX < _.minX && (_.currentX = _.minX + 1 - (_.minX - _.currentX + 1) ** .8), _.currentX > _.maxX && (_.currentX = _.maxX - 1 + (_.currentX - _.maxX + 1) ** .8), _.currentY < _.minY && (_.currentY = _.minY + 1 - (_.minY - _.currentY + 1) ** .8), _.currentY > _.maxY && (_.currentY = _.maxY - 1 + (_.currentY - _.maxY + 1) ** .8), a.prevPositionX || (a.prevPositionX = _.touchesCurrent.x), a.prevPositionY || (a.prevPositionY = _.touchesCurrent.y), a.prevTime || (a.prevTime = Date.now()), a.x = (_.touchesCurrent.x - a.prevPositionX) / (Date.now() - a.prevTime) / 2, a.y = (_.touchesCurrent.y - a.prevPositionY) / (Date.now() - a.prevTime) / 2, Math.abs(_.touchesCurrent.x - a.prevPositionX) < 2 && (a.x = 0), Math.abs(_.touchesCurrent.y - a.prevPositionY) < 2 && (a.y = 0), a.prevPositionX = _.touchesCurrent.x, a.prevPositionY = _.touchesCurrent.y, a.prevTime = Date.now(), E.$imageWrapEl.transform(`translate3d(${_.currentX}px, ${_.currentY}px,0)`)
                  }
              }
          }

          function m() {
              const e = x.zoom;
              E.$slideEl && x.previousIndex !== x.activeIndex && (E.$imageEl && E.$imageEl.transform("translate3d(0,0,0) scale(1)"), E.$imageWrapEl && E.$imageWrapEl.transform("translate3d(0,0,0)"), e.scale = 1, T = 1, E.$slideEl = void 0, E.$imageEl = void 0, E.$imageWrapEl = void 0)
          }

          function f(y) {
              const b = x.zoom,
                  w = x.params.zoom;
              if (E.$slideEl || (y && y.target && (E.$slideEl = O(y.target).closest("." + x.params.slideClass)), E.$slideEl || (x.params.virtual && x.params.virtual.enabled && x.virtual ? E.$slideEl = x.$wrapperEl.children("." + x.params.slideActiveClass) : E.$slideEl = x.slides.eq(x.activeIndex)), E.$imageEl = E.$slideEl.find("." + w.containerClass).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0), E.$imageWrapEl = E.$imageEl.parent("." + w.containerClass)), E.$imageEl && 0 !== E.$imageEl.length && E.$imageWrapEl && 0 !== E.$imageWrapEl.length) {
                  let e, t, d, u, h, p, i, s, m, f, g, v, n, r, o, a, l, c;
                  x.params.cssMode && (x.wrapperEl.style.overflow = "hidden", x.wrapperEl.style.touchAction = "none"), E.$slideEl.addClass("" + w.zoomedSlideClass), t = void 0 === _.touchesStart.x && y ? (e = ("touchend" === y.type ? y.changedTouches[0] : y).pageX, ("touchend" === y.type ? y.changedTouches[0] : y).pageY) : (e = _.touchesStart.x, _.touchesStart.y), b.scale = E.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio, T = E.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio, y ? (l = E.$slideEl[0].offsetWidth, c = E.$slideEl[0].offsetHeight, d = E.$slideEl.offset().left + S.scrollX, u = E.$slideEl.offset().top + S.scrollY, h = d + l / 2 - e, p = u + c / 2 - t, m = E.$imageEl[0].offsetWidth, f = E.$imageEl[0].offsetHeight, g = m * b.scale, v = f * b.scale, o = -(n = Math.min(l / 2 - g / 2, 0)), a = -(r = Math.min(c / 2 - v / 2, 0)), i = h * b.scale, s = p * b.scale, i < n && (i = n), i > o && (i = o), s < r && (s = r), s > a && (s = a)) : (i = 0, s = 0), E.$imageWrapEl.transition(300).transform(`translate3d(${i}px, ${s}px,0)`), E.$imageEl.transition(300).transform(`translate3d(0,0,0) scale(${b.scale})`)
              }
          }

          function g() {
              const e = x.zoom,
                  t = x.params.zoom;
              E.$slideEl || (x.params.virtual && x.params.virtual.enabled && x.virtual ? E.$slideEl = x.$wrapperEl.children("." + x.params.slideActiveClass) : E.$slideEl = x.slides.eq(x.activeIndex), E.$imageEl = E.$slideEl.find("." + t.containerClass).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0), E.$imageWrapEl = E.$imageEl.parent("." + t.containerClass)), E.$imageEl && 0 !== E.$imageEl.length && E.$imageWrapEl && 0 !== E.$imageWrapEl.length && (x.params.cssMode && (x.wrapperEl.style.overflow = "", x.wrapperEl.style.touchAction = ""), e.scale = 1, T = 1, E.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), E.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), E.$slideEl.removeClass("" + t.zoomedSlideClass), E.$slideEl = void 0)
          }

          function v(e) {
              var t = x.zoom;
              t.scale && 1 !== t.scale ? g() : f(e)
          }

          function y() {
              var e = x.support;
              return {
                  passiveListener: !("touchstart" !== x.touchEvents.start || !e.passiveListener || !x.params.passiveListeners) && {
                      passive: !0,
                      capture: !1
                  },
                  activeListenerWithCapture: !e.passiveListener || {
                      passive: !1,
                      capture: !0
                  }
              }
          }

          function b() {
              return "." + x.params.slideClass
          }

          function w(e) {
              var t = y()["passiveListener"],
                  i = b();
              x.$wrapperEl[e]("gesturestart", i, u, t), x.$wrapperEl[e]("gesturechange", i, h, t), x.$wrapperEl[e]("gestureend", i, l, t)
          }

          function C() {
              t || (t = !0, w("on"))
          }

          function k() {
              t && (t = !1, w("off"))
          }

          function A() {
              const e = x.zoom;
              var t, i, s, n;
              e.enabled || (e.enabled = !0, t = x.support, {
                  passiveListener: i,
                  activeListenerWithCapture: s
              } = y(), n = b(), t.gestures ? (x.$wrapperEl.on(x.touchEvents.start, C, i), x.$wrapperEl.on(x.touchEvents.end, k, i)) : "touchstart" === x.touchEvents.start && (x.$wrapperEl.on(x.touchEvents.start, n, u, i), x.$wrapperEl.on(x.touchEvents.move, n, h, s), x.$wrapperEl.on(x.touchEvents.end, n, l, i), x.touchEvents.cancel && x.$wrapperEl.on(x.touchEvents.cancel, n, l, i)), x.$wrapperEl.on(x.touchEvents.move, "." + x.params.zoom.containerClass, p, s))
          }

          function M() {
              const e = x.zoom;
              var t, i, s, n;
              e.enabled && (t = x.support, {
                  passiveListener: i,
                  activeListenerWithCapture: s
              } = (e.enabled = !1, y()), n = b(), t.gestures ? (x.$wrapperEl.off(x.touchEvents.start, C, i), x.$wrapperEl.off(x.touchEvents.end, k, i)) : "touchstart" === x.touchEvents.start && (x.$wrapperEl.off(x.touchEvents.start, n, u, i), x.$wrapperEl.off(x.touchEvents.move, n, h, s), x.$wrapperEl.off(x.touchEvents.end, n, l, i), x.touchEvents.cancel && x.$wrapperEl.off(x.touchEvents.cancel, n, l, i)), x.$wrapperEl.off(x.touchEvents.move, "." + x.params.zoom.containerClass, p, s))
          }
          Object.defineProperty(x.zoom, "scale", {
              get: () => n,
              set(e) {
                  var t, i;
                  n !== e && (t = E.$imageEl ? E.$imageEl[0] : void 0, i = E.$slideEl ? E.$slideEl[0] : void 0, s("zoomChange", e, t, i)), n = e
              }
          }), e("init", () => {
              x.params.zoom.enabled && A()
          }), e("destroy", () => {
              M()
          }), e("touchStart", (e, t) => {
              var i;
              x.zoom.enabled && (t = t, i = x.device, E.$imageEl && 0 !== E.$imageEl.length && (_.isTouched || (i.android && t.cancelable && t.preventDefault(), _.isTouched = !0, _.touchesStart.x = ("touchstart" === t.type ? t.targetTouches[0] : t).pageX, _.touchesStart.y = ("touchstart" === t.type ? t.targetTouches[0] : t).pageY)))
          }), e("touchEnd", (e, t) => {
              if (x.zoom.enabled) {
                  var i = x.zoom;
                  if (E.$imageEl && 0 !== E.$imageEl.length) {
                      if (!_.isTouched || !_.isMoved) return void(_.isTouched = !1, _.isMoved = !1);
                      _.isTouched = !1, _.isMoved = !1;
                      let e = 300,
                          t = 300;
                      var s = a.x * e,
                          s = _.currentX + s,
                          n = a.y * t,
                          n = _.currentY + n,
                          r = (0 !== a.x && (e = Math.abs((s - _.currentX) / a.x)), 0 !== a.y && (t = Math.abs((n - _.currentY) / a.y)), Math.max(e, t)),
                          s = (_.currentX = s, _.currentY = n, _.width * i.scale),
                          n = _.height * i.scale;
                      _.minX = Math.min(E.slideWidth / 2 - s / 2, 0), _.maxX = -_.minX, _.minY = Math.min(E.slideHeight / 2 - n / 2, 0), _.maxY = -_.minY, _.currentX = Math.max(Math.min(_.currentX, _.maxX), _.minX), _.currentY = Math.max(Math.min(_.currentY, _.maxY), _.minY), E.$imageWrapEl.transition(r).transform(`translate3d(${_.currentX}px, ${_.currentY}px,0)`)
                  }
              } else;
          }), e("doubleTap", (e, t) => {
              !x.animating && x.params.zoom.enabled && x.zoom.enabled && x.params.zoom.toggle && v(t)
          }), e("transitionEnd", () => {
              x.zoom.enabled && x.params.zoom.enabled && m()
          }), e("slideChange", () => {
              x.zoom.enabled && x.params.zoom.enabled && x.params.cssMode && m()
          }), Object.assign(x.zoom, {
              enable: A,
              disable: M,
              in: f,
              out: g,
              toggle: v
          })
      }, function({
          swiper: d,
          extendParams: e,
          on: t,
          emit: u
      }) {
          e({
              lazy: {
                  checkInView: !1,
                  enabled: !1,
                  loadPrevNext: !1,
                  loadPrevNextAmount: 1,
                  loadOnTransitionStart: !1,
                  scrollingElement: "",
                  elementClass: "swiper-lazy",
                  loadingClass: "swiper-lazy-loading",
                  loadedClass: "swiper-lazy-loaded",
                  preloaderClass: "swiper-lazy-preloader"
              }
          });
          let h = !(d.lazy = {}),
              c = !1;

          function p(e, a = !0) {
              const l = d.params.lazy;
              if (void 0 !== e && 0 !== d.slides.length) {
                  const c = d.virtual && d.params.virtual.enabled ? d.$wrapperEl.children(`.${d.params.slideClass}[data-swiper-slide-index="${e}"]`) : d.slides.eq(e),
                      t = c.find(`.${l.elementClass}:not(.${l.loadedClass}):not(.${l.loadingClass})`);
                  !c.hasClass(l.elementClass) || c.hasClass(l.loadedClass) || c.hasClass(l.loadingClass) || t.push(c[0]), 0 !== t.length && t.each(e => {
                      const t = O(e),
                          i = (t.addClass(l.loadingClass), t.attr("data-background")),
                          s = t.attr("data-src"),
                          n = t.attr("data-srcset"),
                          r = t.attr("data-sizes"),
                          o = t.parent("picture");
                      d.loadImage(t[0], s || i, n, r, !1, () => {
                          var e;
                          null == d || !d || d && !d.params || d.destroyed || (i ? (t.css("background-image", `url("${i}")`), t.removeAttr("data-background")) : (n && (t.attr("srcset", n), t.removeAttr("data-srcset")), r && (t.attr("sizes", r), t.removeAttr("data-sizes")), o.length && o.children("source").each(e => {
                              const t = O(e);
                              t.attr("data-srcset") && (t.attr("srcset", t.attr("data-srcset")), t.removeAttr("data-srcset"))
                          }), s && (t.attr("src", s), t.removeAttr("data-src"))), t.addClass(l.loadedClass).removeClass(l.loadingClass), c.find("." + l.preloaderClass).remove(), d.params.loop && a && (e = c.attr("data-swiper-slide-index"), c.hasClass(d.params.slideDuplicateClass) ? p(d.$wrapperEl.children(`[data-swiper-slide-index="${e}"]:not(.${d.params.slideDuplicateClass})`).index(), !1) : p(d.$wrapperEl.children(`.${d.params.slideDuplicateClass}[data-swiper-slide-index="${e}"]`).index(), !1)), u("lazyImageReady", c[0], t[0]), d.params.autoHeight && d.updateAutoHeight())
                      }), u("lazyImageLoad", c[0], t[0])
                  })
              }
          }

          function m() {
              const {
                  $wrapperEl: t,
                  params: i,
                  slides: s,
                  activeIndex: n
              } = d, r = d.virtual && i.virtual.enabled, e = i.lazy;
              let o = i.slidesPerView;

              function a(e) {
                  if (r) {
                      if (t.children(`.${i.slideClass}[data-swiper-slide-index="${e}"]`).length) return 1
                  } else if (s[e]) return 1
              }

              function l(e) {
                  return r ? O(e).attr("data-swiper-slide-index") : O(e).index()
              }
              if ("auto" === o && (o = 0), c = c || !0, d.params.watchSlidesProgress) t.children("." + i.slideVisibleClass).each(e => {
                  p(r ? O(e).attr("data-swiper-slide-index") : O(e).index())
              });
              else if (1 < o)
                  for (let e = n; e < n + o; e += 1) a(e) && p(e);
              else p(n);
              if (e.loadPrevNext)
                  if (1 < o || e.loadPrevNextAmount && 1 < e.loadPrevNextAmount) {
                      const d = e.loadPrevNextAmount,
                          t = o,
                          i = Math.min(n + t + Math.max(d, t), s.length),
                          r = Math.max(n - Math.max(t, d), 0);
                      for (let e = n + o; e < i; e += 1) a(e) && p(e);
                      for (let e = r; e < n; e += 1) a(e) && p(e)
                  } else {
                      const d = t.children("." + i.slideNextClass),
                          s = (0 < d.length && p(l(d)), t.children("." + i.slidePrevClass));
                      0 < s.length && p(l(s))
                  }
          }

          function f() {
              const i = P();
              if (d && !d.destroyed) {
                  const n = d.params.lazy.scrollingElement ? O(d.params.lazy.scrollingElement) : O(i),
                      r = n[0] === i,
                      o = r ? i.innerWidth : n[0].offsetWidth,
                      a = r ? i.innerHeight : n[0].offsetHeight,
                      l = d.$el.offset(),
                      c = d["rtlTranslate"];
                  let t = !1;
                  c && (l.left -= d.$el[0].scrollLeft);
                  var s = [
                      [l.left, l.top],
                      [l.left + d.width, l.top],
                      [l.left, l.top + d.height],
                      [l.left + d.width, l.top + d.height]
                  ];
                  for (let e = 0; e < s.length; e += 1) {
                      const i = s[e];
                      0 <= i[0] && i[0] <= o && 0 <= i[1] && i[1] <= a && (0 === i[0] && 0 === i[1] || (t = !0))
                  }
                  var e = !("touchstart" !== d.touchEvents.start || !d.support.passiveListener || !d.params.passiveListeners) && {
                      passive: !0,
                      capture: !1
                  };
                  t ? (m(), n.off("scroll", f, e)) : h || (h = !0, n.on("scroll", f, e))
              }
          }
          t("beforeInit", () => {
              d.params.lazy.enabled && d.params.preloadImages && (d.params.preloadImages = !1)
          }), t("init", () => {
              d.params.lazy.enabled && (d.params.lazy.checkInView ? f : m)()
          }), t("scroll", () => {
              d.params.freeMode && d.params.freeMode.enabled && !d.params.freeMode.sticky && m()
          }), t("scrollbarDragMove resize _freeModeNoMomentumRelease", () => {
              d.params.lazy.enabled && (d.params.lazy.checkInView ? f : m)()
          }), t("transitionStart", () => {
              d.params.lazy.enabled && (d.params.lazy.loadOnTransitionStart || !d.params.lazy.loadOnTransitionStart && !c) && (d.params.lazy.checkInView ? f : m)()
          }), t("transitionEnd", () => {
              d.params.lazy.enabled && !d.params.lazy.loadOnTransitionStart && (d.params.lazy.checkInView ? f : m)()
          }), t("slideChange", () => {
              var {
                  lazy: e,
                  cssMode: t,
                  watchSlidesProgress: i,
                  touchReleaseOnEdges: s,
                  resistanceRatio: n
              } = d.params;
              e.enabled && (t || i && (s || 0 === n)) && m()
          }), Object.assign(d.lazy, {
              load: m,
              loadInSlide: p
          })
      }, function({
          swiper: a,
          extendParams: e,
          on: t
      }) {
          function l(e, t) {
              const i = function() {
                  let i, s, n;
                  return (e, t) => {
                      for (s = -1, i = e.length; 1 < i - s;) n = i + s >> 1, e[n] <= t ? s = n : i = n;
                      return i
                  }
              }();
              let s, n;
              return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function(e) {
                  return e ? (n = i(this.x, e), s = n - 1, (e - this.x[s]) * (this.y[n] - this.y[s]) / (this.x[n] - this.x[s]) + this.y[s]) : 0
              }, this
          }

          function i() {
              a.controller.control && a.controller.spline && (a.controller.spline = void 0, delete a.controller.spline)
          }
          e({
              controller: {
                  control: void 0,
                  inverse: !1,
                  by: "slide"
              }
          }), a.controller = {
              control: void 0
          }, t("beforeInit", () => {
              a.controller.control = a.params.controller.control
          }), t("update", () => {
              i()
          }), t("resize", () => {
              i()
          }), t("observerUpdate", () => {
              i()
          }), t("setTranslate", (e, t, i) => {
              a.controller.control && a.controller.setTranslate(t, i)
          }), t("setTransition", (e, t, i) => {
              a.controller.control && a.controller.setTransition(t, i)
          }), Object.assign(a.controller, {
              setTranslate: function(e, t) {
                  var i = a.controller.control;
                  let s, n;
                  var r = a.constructor;

                  function o(e) {
                      var t, i = a.rtlTranslate ? -a.translate : a.translate;
                      "slide" === a.params.controller.by && (t = e, a.controller.spline || (a.controller.spline = a.params.loop ? new l(a.slidesGrid, t.slidesGrid) : new l(a.snapGrid, t.snapGrid)), n = -a.controller.spline.interpolate(-i)), n && "container" !== a.params.controller.by || (s = (e.maxTranslate() - e.minTranslate()) / (a.maxTranslate() - a.minTranslate()), n = (i - a.minTranslate()) * s + e.minTranslate()), a.params.controller.inverse && (n = e.maxTranslate() - n), e.updateProgress(n), e.setTranslate(n, a), e.updateActiveIndex(), e.updateSlidesClasses()
                  }
                  if (Array.isArray(i))
                      for (let e = 0; e < i.length; e += 1) i[e] !== t && i[e] instanceof r && o(i[e]);
                  else i instanceof r && t !== i && o(i)
              },
              setTransition: function(t, e) {
                  const i = a.constructor,
                      s = a.controller.control;
                  let n;

                  function r(e) {
                      e.setTransition(t, a), 0 !== t && (e.transitionStart(), e.params.autoHeight && E(() => {
                          e.updateAutoHeight()
                      }), e.$wrapperEl.transitionEnd(() => {
                          s && (e.params.loop && "slide" === a.params.controller.by && e.loopFix(), e.transitionEnd())
                      }))
                  }
                  if (Array.isArray(s))
                      for (n = 0; n < s.length; n += 1) s[n] !== e && s[n] instanceof i && r(s[n]);
                  else s instanceof i && e !== s && r(s)
              }
          })
      }, function({
          swiper: l,
          extendParams: r,
          on: e
      }) {
          r({
              a11y: {
                  enabled: !0,
                  notificationClass: "swiper-notification",
                  prevSlideMessage: "Previous slide",
                  nextSlideMessage: "Next slide",
                  firstSlideMessage: "This is the first slide",
                  lastSlideMessage: "This is the last slide",
                  paginationBulletMessage: "Go to slide {{index}}",
                  slideLabelMessage: "{{index}} / {{slidesLength}}",
                  containerMessage: null,
                  containerRoleDescriptionMessage: null,
                  itemRoleDescriptionMessage: null,
                  slideRole: "group"
              }
          });
          let c = null;

          function s(e) {
              const t = c;
              0 !== t.length && (t.html(""), t.html(e))
          }

          function n(e) {
              e.attr("tabIndex", "0")
          }

          function i(e) {
              e.attr("tabIndex", "-1")
          }

          function d(e, t) {
              e.attr("role", t)
          }

          function p(e, t) {
              e.attr("aria-roledescription", t)
          }

          function u(e, t) {
              e.attr("aria-label", t)
          }

          function o(e) {
              e.attr("aria-disabled", !0)
          }

          function a(e) {
              e.attr("aria-disabled", !1)
          }

          function h(e) {
              if (13 === e.keyCode || 32 === e.keyCode) {
                  const t = l.params.a11y,
                      i = O(e.target);
                  l.navigation && l.navigation.$nextEl && i.is(l.navigation.$nextEl) && (l.isEnd && !l.params.loop || l.slideNext(), l.isEnd ? s(t.lastSlideMessage) : s(t.nextSlideMessage)), l.navigation && l.navigation.$prevEl && i.is(l.navigation.$prevEl) && (l.isBeginning && !l.params.loop || l.slidePrev(), l.isBeginning ? s(t.firstSlideMessage) : s(t.prevSlideMessage)), l.pagination && i.is(v(l.params.pagination.bulletClass)) && i[0].click()
              }
          }

          function t() {
              var e, t;
              l.params.loop || l.params.rewind || !l.navigation || ({
                  $nextEl: e,
                  $prevEl: t
              } = l.navigation, t && 0 < t.length && (l.isBeginning ? (o(t), i(t)) : (a(t), n(t))), e && 0 < e.length && (l.isEnd ? (o(e), i(e)) : (a(e), n(e))))
          }

          function m() {
              return l.pagination && l.pagination.bullets && l.pagination.bullets.length
          }

          function f() {
              return m() && l.params.pagination.clickable
          }
          const g = (e, t, i) => {
              n(e), "BUTTON" !== e[0].tagName && (d(e, "button"), e.on("keydown", h)), u(e, i), e.attr("aria-controls", t)
          };
          e("beforeInit", () => {
              c = O(`<span class="${l.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`)
          }), e("afterInit", () => {
              if (l.params.a11y.enabled) {
                  {
                      const n = l.params.a11y;
                      l.$el.append(c);
                      var i = l.$el;
                      n.containerRoleDescriptionMessage && p(i, n.containerRoleDescriptionMessage), n.containerMessage && u(i, n.containerMessage);
                      const s = l.$wrapperEl,
                          r = s.attr("id") || "swiper-wrapper-" + "x".repeat(16).replace(/x/g, () => Math.round(16 * Math.random()).toString(16)),
                          o = l.params.autoplay && l.params.autoplay.enabled ? "off" : "polite",
                          a = (s.attr("id", r), s.attr("aria-live", o), n.itemRoleDescriptionMessage && p(O(l.slides), n.itemRoleDescriptionMessage), d(O(l.slides), n.slideRole), (l.params.loop ? l.slides.filter(e => !e.classList.contains(l.params.slideDuplicateClass)) : l.slides).length);
                      let e, t;
                      l.slides.each((e, t) => {
                          const i = O(e),
                              s = l.params.loop ? parseInt(i.attr("data-swiper-slide-index"), 10) : t;
                          u(i, n.slideLabelMessage.replace(/\{\{index\}\}/, s + 1).replace(/\{\{slidesLength\}\}/, a))
                      }), l.navigation && l.navigation.$nextEl && (e = l.navigation.$nextEl), l.navigation && l.navigation.$prevEl && (t = l.navigation.$prevEl), e && e.length && g(e, r, n.nextSlideMessage), t && t.length && g(t, r, n.prevSlideMessage), f() && l.pagination.$el.on("keydown", v(l.params.pagination.bulletClass), h)
                  }
                  t()
              } else;
          }), e("toEdge", () => {
              l.params.a11y.enabled && t()
          }), e("fromEdge", () => {
              l.params.a11y.enabled && t()
          }), e("paginationUpdate", () => {
              if (l.params.a11y.enabled) {
                  const i = l.params.a11y;
                  m() && l.pagination.bullets.each(e => {
                      const t = O(e);
                      l.params.pagination.clickable && (n(t), l.params.pagination.renderBullet || (d(t, "button"), u(t, i.paginationBulletMessage.replace(/\{\{index\}\}/, t.index() + 1)))), t.is("." + l.params.pagination.bulletActiveClass) ? t.attr("aria-current", "true") : t.removeAttr("aria-current")
                  })
              } else;
          }), e("destroy", () => {
              if (l.params.a11y.enabled) {
                  let e, t;
                  c && 0 < c.length && c.remove(), l.navigation && l.navigation.$nextEl && (e = l.navigation.$nextEl), l.navigation && l.navigation.$prevEl && (t = l.navigation.$prevEl), e && e.off("keydown", h), t && t.off("keydown", h), f() && l.pagination.$el.off("keydown", v(l.params.pagination.bulletClass), h)
              } else;
          })
      }, function({
          swiper: o,
          extendParams: e,
          on: t
      }) {
          e({
              history: {
                  enabled: !1,
                  root: "",
                  replaceState: !1,
                  key: "slides"
              }
          });
          let a = !1,
              i = {};
          const l = e => e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, ""),
              s = e => {
                  var t = P();
                  let i;
                  i = e ? new URL(e) : t.location;
                  e = i.pathname.slice(1).split("/").filter(e => "" !== e), t = e.length;
                  return {
                      key: e[t - 2],
                      value: e[t - 1]
                  }
              },
              n = (i, s) => {
                  const n = P();
                  if (a && o.params.history.enabled) {
                      let e;
                      e = o.params.url ? new URL(o.params.url) : n.location;
                      const r = o.slides.eq(s);
                      let t = l(r.attr("data-history"));
                      if (0 < o.params.history.root.length) {
                          let e = o.params.history.root;
                          "/" === e[e.length - 1] && (e = e.slice(0, e.length - 1)), t = e + `/${i}/` + t
                      } else e.pathname.includes(i) || (t = i + "/" + t);
                      s = n.history.state;
                      s && s.value === t || (o.params.history.replaceState ? n.history.replaceState({
                          value: t
                      }, null, t) : n.history.pushState({
                          value: t
                      }, null, t))
                  }
              },
              r = (i, s, n) => {
                  if (s)
                      for (let e = 0, t = o.slides.length; e < t; e += 1) {
                          const r = o.slides.eq(e);
                          if (l(r.attr("data-history")) === s && !r.hasClass(o.params.slideDuplicateClass)) {
                              const s = r.index();
                              o.slideTo(s, i, n)
                          }
                      } else o.slideTo(0, i, n)
              },
              c = () => {
                  i = s(o.params.url), r(o.params.speed, o.paths.value, !1)
              };
          t("init", () => {
              if (o.params.history.enabled) {
                  const e = P();
                  if (o.params.history) {
                      if (!e.history || !e.history.pushState) return void(o.params.history.enabled = !1, o.params.hashNavigation.enabled = !0);
                      a = !0, i = s(o.params.url), (i.key || i.value) && (r(0, i.value, o.params.runCallbacksOnInit), o.params.history.replaceState || e.addEventListener("popstate", c))
                  }
              } else;
          }), t("destroy", () => {
              if (o.params.history.enabled) {
                  const e = P();
                  o.params.history.replaceState || e.removeEventListener("popstate", c)
              } else;
          }), t("transitionEnd _freeModeNoMomentumRelease", () => {
              a && n(o.params.history.key, o.activeIndex)
          }), t("slideChange", () => {
              a && o.params.cssMode && n(o.params.history.key, o.activeIndex)
          })
      }, function({
          swiper: n,
          extendParams: e,
          emit: i,
          on: t
      }) {
          let r = !1;
          const o = T(),
              a = P(),
              l = (e({
                  hashNavigation: {
                      enabled: !1,
                      replaceState: !1,
                      watchState: !1
                  }
              }), () => {
                  i("hashChange");
                  var e = o.location.hash.replace("#", "");
                  if (e !== n.slides.eq(n.activeIndex).attr("data-hash")) {
                      const i = n.$wrapperEl.children(`.${n.params.slideClass}[data-hash="${e}"]`).index();
                      void 0 !== i && n.slideTo(i)
                  }
              }),
              s = () => {
                  if (r && n.params.hashNavigation.enabled)
                      if (n.params.hashNavigation.replaceState && a.history && a.history.replaceState) a.history.replaceState(null, null, "#" + n.slides.eq(n.activeIndex).attr("data-hash") || ""), i("hashSet");
                      else {
                          const e = n.slides.eq(n.activeIndex),
                              t = e.attr("data-hash") || e.attr("data-history");
                          o.location.hash = t || "", i("hashSet")
                      }
              };
          t("init", () => {
              if (n.params.hashNavigation.enabled) {
                  if (!(!n.params.hashNavigation.enabled || n.params.history && n.params.history.enabled)) {
                      r = !0;
                      const i = o.location.hash.replace("#", "");
                      if (i)
                          for (let e = 0, t = n.slides.length; e < t; e += 1) {
                              const s = n.slides.eq(e);
                              if ((s.attr("data-hash") || s.attr("data-history")) === i && !s.hasClass(n.params.slideDuplicateClass)) {
                                  const i = s.index();
                                  n.slideTo(i, 0, n.params.runCallbacksOnInit, !0)
                              }
                          }
                      n.params.hashNavigation.watchState && O(a).on("hashchange", l)
                  }
              } else;
          }), t("destroy", () => {
              n.params.hashNavigation.enabled && n.params.hashNavigation.watchState && O(a).off("hashchange", l)
          }), t("transitionEnd _freeModeNoMomentumRelease", () => {
              r && s()
          }), t("slideChange", () => {
              r && n.params.cssMode && s()
          })
      }, function({
          swiper: s,
          extendParams: d,
          on: e,
          emit: i
      }) {
          let n;

          function r() {
              const e = s.slides.eq(s.activeIndex);
              let t = s.params.autoplay.delay;
              e.attr("data-swiper-autoplay") && (t = e.attr("data-swiper-autoplay") || s.params.autoplay.delay), clearTimeout(n), n = E(() => {
                  let e;
                  s.params.autoplay.reverseDirection ? s.params.loop ? (s.loopFix(), e = s.slidePrev(s.params.speed, !0, !0), i("autoplay")) : s.isBeginning ? s.params.autoplay.stopOnLastSlide ? o() : (e = s.slideTo(s.slides.length - 1, s.params.speed, !0, !0), i("autoplay")) : (e = s.slidePrev(s.params.speed, !0, !0), i("autoplay")) : s.params.loop ? (s.loopFix(), e = s.slideNext(s.params.speed, !0, !0), i("autoplay")) : s.isEnd ? s.params.autoplay.stopOnLastSlide ? o() : (e = s.slideTo(0, s.params.speed, !0, !0), i("autoplay")) : (e = s.slideNext(s.params.speed, !0, !0), i("autoplay")), (s.params.cssMode && s.autoplay.running || !1 === e) && r()
              }, t)
          }

          function t() {
              return void 0 === n && !s.autoplay.running && (s.autoplay.running = !0, i("autoplayStart"), r(), !0)
          }

          function o() {
              return !!s.autoplay.running && void 0 !== n && (n && (clearTimeout(n), n = void 0), s.autoplay.running = !1, i("autoplayStop"), !0)
          }

          function a(e) {
              s.autoplay.running && (s.autoplay.paused || (n && clearTimeout(n), s.autoplay.paused = !0, 0 !== e && s.params.autoplay.waitForTransition ? ["transitionend", "webkitTransitionEnd"].forEach(e => {
                  s.$wrapperEl[0].addEventListener(e, c)
              }) : (s.autoplay.paused = !1, r())))
          }

          function l() {
              var e = T();
              "hidden" === e.visibilityState && s.autoplay.running && a(), "visible" === e.visibilityState && s.autoplay.paused && (r(), s.autoplay.paused = !1)
          }

          function c(e) {
              s && !s.destroyed && s.$wrapperEl && e.target === s.$wrapperEl[0] && (["transitionend", "webkitTransitionEnd"].forEach(e => {
                  s.$wrapperEl[0].removeEventListener(e, c)
              }), s.autoplay.paused = !1, (s.autoplay.running ? r : o)())
          }

          function u() {
              (s.params.autoplay.disableOnInteraction ? o : a)(), ["transitionend", "webkitTransitionEnd"].forEach(e => {
                  s.$wrapperEl[0].removeEventListener(e, c)
              })
          }

          function h() {
              s.params.autoplay.disableOnInteraction || (s.autoplay.paused = !1, r())
          }
          d({
              autoplay: {
                  enabled: !(s.autoplay = {
                      running: !1,
                      paused: !1
                  }),
                  delay: 3e3,
                  waitForTransition: !0,
                  disableOnInteraction: !0,
                  stopOnLastSlide: !1,
                  reverseDirection: !1,
                  pauseOnMouseEnter: !1
              }
          }), e("init", () => {
              s.params.autoplay.enabled && (t(), T().addEventListener("visibilitychange", l), s.params.autoplay.pauseOnMouseEnter && (s.$el.on("mouseenter", u), s.$el.on("mouseleave", h)))
          }), e("beforeTransitionStart", (e, t, i) => {
              s.autoplay.running && (i || !s.params.autoplay.disableOnInteraction ? s.autoplay.pause(t) : o())
          }), e("sliderFirstMove", () => {
              s.autoplay.running && (s.params.autoplay.disableOnInteraction ? o : a)()
          }), e("touchEnd", () => {
              s.params.cssMode && s.autoplay.paused && !s.params.autoplay.disableOnInteraction && r()
          }), e("destroy", () => {
              s.$el.off("mouseenter", u), s.$el.off("mouseleave", h), s.autoplay.running && o(), T().removeEventListener("visibilitychange", l)
          }), Object.assign(s.autoplay, {
              pause: a,
              run: r,
              start: t,
              stop: o
          })
      }, function({
          swiper: l,
          extendParams: e,
          on: t
      }) {
          e({
              thumbs: {
                  swiper: null,
                  multipleActiveThumbs: !0,
                  autoScrollOffset: 0,
                  slideThumbActiveClass: "swiper-slide-thumb-active",
                  thumbsContainerClass: "swiper-thumbs"
              }
          });
          let i = !1,
              s = !1;

          function n() {
              var e = l.thumbs.swiper;
              if (e) {
                  const i = e.clickedIndex,
                      s = e.clickedSlide;
                  if (!(s && O(s).hasClass(l.params.thumbs.slideThumbActiveClass) || null == i)) {
                      let t;
                      if (t = e.params.loop ? parseInt(O(e.clickedSlide).attr("data-swiper-slide-index"), 10) : i, l.params.loop) {
                          let e = l.activeIndex;
                          l.slides.eq(e).hasClass(l.params.slideDuplicateClass) && (l.loopFix(), l._clientLeft = l.$wrapperEl[0].clientLeft, e = l.activeIndex);
                          const i = l.slides.eq(e).prevAll(`[data-swiper-slide-index="${t}"]`).eq(0).index(),
                              s = l.slides.eq(e).nextAll(`[data-swiper-slide-index="${t}"]`).eq(0).index();
                          t = void 0 === i || void 0 !== s && s - e < e - i ? s : i
                      }
                      l.slideTo(t)
                  }
              }
          }

          function r() {
              var e = l.params["thumbs"];
              if (i) return !1;
              i = !0;
              const t = l.constructor;
              if (e.swiper instanceof t) l.thumbs.swiper = e.swiper, Object.assign(l.thumbs.swiper.originalParams, {
                  watchSlidesProgress: !0,
                  slideToClickedSlide: !1
              }), Object.assign(l.thumbs.swiper.params, {
                  watchSlidesProgress: !0,
                  slideToClickedSlide: !1
              });
              else if (u(e.swiper)) {
                  const i = Object.assign({}, e.swiper);
                  Object.assign(i, {
                      watchSlidesProgress: !0,
                      slideToClickedSlide: !1
                  }), l.thumbs.swiper = new t(i), s = !0
              }
              return l.thumbs.swiper.$el.addClass(l.params.thumbs.thumbsContainerClass), l.thumbs.swiper.on("tap", n), !0
          }

          function o(s) {
              const n = l.thumbs.swiper;
              if (n) {
                  const r = "auto" === n.params.slidesPerView ? n.slidesPerViewDynamic() : n.params.slidesPerView,
                      o = l.params.thumbs.autoScrollOffset,
                      a = o && !n.params.loop;
                  if (l.realIndex !== n.realIndex || a) {
                      let e, t, i = n.activeIndex;
                      if (n.params.loop) {
                          n.slides.eq(i).hasClass(n.params.slideDuplicateClass) && (n.loopFix(), n._clientLeft = n.$wrapperEl[0].clientLeft, i = n.activeIndex);
                          const s = n.slides.eq(i).prevAll(`[data-swiper-slide-index="${l.realIndex}"]`).eq(0).index(),
                              r = n.slides.eq(i).nextAll(`[data-swiper-slide-index="${l.realIndex}"]`).eq(0).index();
                          e = void 0 === s ? r : void 0 === r ? s : r - i == i - s ? 1 < n.params.slidesPerGroup ? r : i : r - i < i - s ? r : s, t = l.activeIndex > l.previousIndex ? "next" : "prev"
                      } else e = l.realIndex, t = e > l.previousIndex ? "next" : "prev";
                      a && (e += "next" === t ? o : -1 * o), n.visibleSlidesIndexes && n.visibleSlidesIndexes.indexOf(e) < 0 && (n.params.centeredSlides ? e = e > i ? e - Math.floor(r / 2) + 1 : e + Math.floor(r / 2) - 1 : e > i && n.params.slidesPerGroup, n.slideTo(e, s ? 0 : void 0))
                  }
                  let t = 1;
                  var i = l.params.thumbs.slideThumbActiveClass;
                  if (1 < l.params.slidesPerView && !l.params.centeredSlides && (t = l.params.slidesPerView), l.params.thumbs.multipleActiveThumbs || (t = 1), t = Math.floor(t), n.slides.removeClass(i), n.params.loop || n.params.virtual && n.params.virtual.enabled)
                      for (let e = 0; e < t; e += 1) n.$wrapperEl.children(`[data-swiper-slide-index="${l.realIndex+e}"]`).addClass(i);
                  else
                      for (let e = 0; e < t; e += 1) n.slides.eq(l.realIndex + e).addClass(i)
              }
          }
          l.thumbs = {
              swiper: null
          }, t("beforeInit", () => {
              var e = l.params["thumbs"];
              e && e.swiper && (r(), o(!0))
          }), t("slideChange update resize observerUpdate", () => {
              l.thumbs.swiper && o()
          }), t("setTransition", (e, t) => {
              const i = l.thumbs.swiper;
              i && i.setTransition(t)
          }), t("beforeDestroy", () => {
              const e = l.thumbs.swiper;
              e && s && e && e.destroy()
          }), Object.assign(l.thumbs, {
              init: r,
              update: o
          })
      }, function({
          swiper: h,
          extendParams: e,
          emit: p,
          once: m
      }) {
          e({
              freeMode: {
                  enabled: !1,
                  momentum: !0,
                  momentumRatio: 1,
                  momentumBounce: !0,
                  momentumBounceRatio: 1,
                  momentumVelocityRatio: 1,
                  sticky: !1,
                  minimumVelocity: .02
              }
          }), Object.assign(h, {
              freeMode: {
                  onTouchMove: function() {
                      const {
                          touchEventsData: e,
                          touches: t
                      } = h;
                      0 === e.velocities.length && e.velocities.push({
                          position: t[h.isHorizontal() ? "startX" : "startY"],
                          time: e.touchStartTime
                      }), e.velocities.push({
                          position: t[h.isHorizontal() ? "currentX" : "currentY"],
                          time: g()
                      })
                  },
                  onTouchEnd: function({
                      currentPos: r
                  }) {
                      const {
                          params: o,
                          $wrapperEl: a,
                          rtlTranslate: l,
                          snapGrid: c,
                          touchEventsData: d
                      } = h, u = g() - d.touchStartTime;
                      if (r < -h.minTranslate()) h.slideTo(h.activeIndex);
                      else if (r > -h.maxTranslate()) h.slides.length < c.length ? h.slideTo(c.length - 1) : h.slideTo(h.slides.length - 1);
                      else {
                          if (o.freeMode.momentum) {
                              if (1 < d.velocities.length) {
                                  const r = d.velocities.pop(),
                                      p = d.velocities.pop(),
                                      m = r.position - p.position,
                                      a = r.time - p.time;
                                  h.velocity = m / a, h.velocity /= 2, Math.abs(h.velocity) < o.freeMode.minimumVelocity && (h.velocity = 0), (150 < a || 300 < g() - r.time) && (h.velocity = 0)
                              } else h.velocity = 0;
                              h.velocity *= o.freeMode.momentumVelocityRatio, d.velocities.length = 0;
                              let e = 1e3 * o.freeMode.momentumRatio;
                              const u = h.velocity * e;
                              let i = h.translate + u;
                              l && (i = -i);
                              let t, s = !1;
                              r = 20 * Math.abs(h.velocity) * o.freeMode.momentumBounceRatio;
                              let n;
                              if (i < h.maxTranslate()) o.freeMode.momentumBounce ? (i + h.maxTranslate() < -r && (i = h.maxTranslate() - r), t = h.maxTranslate(), s = !0, d.allowMomentumBounce = !0) : i = h.maxTranslate(), o.loop && o.centeredSlides && (n = !0);
                              else if (i > h.minTranslate()) o.freeMode.momentumBounce ? (i - h.minTranslate() > r && (i = h.minTranslate() + r), t = h.minTranslate(), s = !0, d.allowMomentumBounce = !0) : i = h.minTranslate(), o.loop && o.centeredSlides && (n = !0);
                              else if (o.freeMode.sticky) {
                                  let t;
                                  for (let e = 0; e < c.length; e += 1)
                                      if (c[e] > -i) {
                                          t = e;
                                          break
                                      } i = Math.abs(c[t] - i) < Math.abs(c[t - 1] - i) || "next" === h.swipeDirection ? c[t] : c[t - 1], i = -i
                              }
                              if (n && m("transitionEnd", () => {
                                      h.loopFix()
                                  }), 0 !== h.velocity) {
                                  if (e = l ? Math.abs((-i - h.translate) / h.velocity) : Math.abs((i - h.translate) / h.velocity), o.freeMode.sticky) {
                                      const p = Math.abs((l ? -i : i) - h.translate),
                                          m = h.slidesSizesGrid[h.activeIndex];
                                      e = p < m ? o.speed : p < 2 * m ? 1.5 * o.speed : 2.5 * o.speed
                                  }
                              } else if (o.freeMode.sticky) return void h.slideToClosest();
                              o.freeMode.momentumBounce && s ? (h.updateProgress(t), h.setTransition(e), h.setTranslate(i), h.transitionStart(!0, h.swipeDirection), h.animating = !0, a.transitionEnd(() => {
                                  h && !h.destroyed && d.allowMomentumBounce && (p("momentumBounce"), h.setTransition(o.speed), setTimeout(() => {
                                      h.setTranslate(t), a.transitionEnd(() => {
                                          h && !h.destroyed && h.transitionEnd()
                                      })
                                  }, 0))
                              })) : h.velocity ? (p("_freeModeNoMomentumRelease"), h.updateProgress(i), h.setTransition(e), h.setTranslate(i), h.transitionStart(!0, h.swipeDirection), h.animating || (h.animating = !0, a.transitionEnd(() => {
                                  h && !h.destroyed && h.transitionEnd()
                              }))) : h.updateProgress(i), h.updateActiveIndex(), h.updateSlidesClasses()
                          } else {
                              if (o.freeMode.sticky) return void h.slideToClosest();
                              o.freeMode && p("_freeModeNoMomentumRelease")
                          }(!o.freeMode.momentum || u >= o.longSwipesMs) && (h.updateProgress(), h.updateActiveIndex(), h.updateSlidesClasses())
                      }
                  }
              }
          })
      }, function({
          swiper: u,
          extendParams: e
      }) {
          let h, p, m;
          e({
              grid: {
                  rows: 1,
                  fill: "column"
              }
          }), u.grid = {
              initSlides: e => {
                  var t = u.params["slidesPerView"],
                      {
                          rows: i,
                          fill: s
                      } = u.params.grid;
                  p = h / i, m = Math.floor(e / i), h = Math.floor(e / i) === e / i ? e : Math.ceil(e / i) * i, "auto" !== t && "row" === s && (h = Math.max(h, t * i))
              },
              updateSlide: (e, t, i, d) => {
                  var {
                      slidesPerGroup: s,
                      spaceBetween: n
                  } = u.params, {
                      rows: r,
                      fill: o
                  } = u.params.grid;
                  let a, l, c;
                  if ("row" === o && 1 < s) {
                      const u = Math.floor(e / (s * r)),
                          p = e - r * s * u,
                          m = 0 === u ? s : Math.min(Math.ceil((i - u * r * s) / r), s);
                      c = Math.floor(p / m), l = p - c * m + u * s, a = l + c * h / r, t.css({
                          "-webkit-order": a,
                          order: a
                      })
                  } else "column" === o ? (l = Math.floor(e / r), c = e - l * r, (l > m || l === m && c === r - 1) && (c += 1, c >= r && (c = 0, l += 1))) : (c = Math.floor(e / p), l = e - c * p);
                  t.css(d("margin-top"), 0 !== c ? n && n + "px" : "")
              },
              updateWrapperSize: (i, s, e) => {
                  var {
                      spaceBetween: t,
                      centeredSlides: n,
                      roundLengths: r
                  } = u.params, o = u.params.grid["rows"];
                  if (u.virtualSize = (i + t) * h, u.virtualSize = Math.ceil(u.virtualSize / o) - t, u.$wrapperEl.css({
                          [e("width")]: u.virtualSize + t + "px"
                      }), n) {
                      s.splice(0, s.length);
                      const i = [];
                      for (let t = 0; t < s.length; t += 1) {
                          let e = s[t];
                          r && (e = Math.floor(e)), s[t] < u.virtualSize + s[0] && i.push(e)
                      }
                      s.push(...i)
                  }
              }
          }
      }, function({
          swiper: e
      }) {
          Object.assign(e, {
              appendSlide: function(t) {
                  const {
                      $wrapperEl: i,
                      params: e
                  } = this;
                  if (e.loop && this.loopDestroy(), "object" == typeof t && "length" in t)
                      for (let e = 0; e < t.length; e += 1) t[e] && i.append(t[e]);
                  else i.append(t);
                  e.loop && this.loopCreate(), e.observer || this.update()
              }.bind(e),
              prependSlide: function(t) {
                  const {
                      params: e,
                      $wrapperEl: i,
                      activeIndex: s
                  } = this;
                  e.loop && this.loopDestroy();
                  let n = s + 1;
                  if ("object" == typeof t && "length" in t) {
                      for (let e = 0; e < t.length; e += 1) t[e] && i.prepend(t[e]);
                      n = s + t.length
                  } else i.prepend(t);
                  e.loop && this.loopCreate(), e.observer || this.update(), this.slideTo(n, 0, !1)
              }.bind(e),
              addSlide: function(t, i) {
                  const s = this,
                      {
                          $wrapperEl: n,
                          params: r,
                          activeIndex: e
                      } = s;
                  let o = e;
                  r.loop && (o -= s.loopedSlides, s.loopDestroy(), s.slides = n.children("." + r.slideClass));
                  var a = s.slides.length;
                  if (t <= 0) s.prependSlide(i);
                  else if (a <= t) s.appendSlide(i);
                  else {
                      let e = o > t ? o + 1 : o;
                      const l = [];
                      for (let e = a - 1; e >= t; --e) {
                          const t = s.slides.eq(e);
                          t.remove(), l.unshift(t)
                      }
                      if ("object" == typeof i && "length" in i) {
                          for (let e = 0; e < i.length; e += 1) i[e] && n.append(i[e]);
                          e = o > t ? o + i.length : o
                      } else n.append(i);
                      for (let e = 0; e < l.length; e += 1) n.append(l[e]);
                      r.loop && s.loopCreate(), r.observer || s.update(), r.loop ? s.slideTo(e + s.loopedSlides, 0, !1) : s.slideTo(e, 0, !1)
                  }
              }.bind(e),
              removeSlide: function(t) {
                  const i = this,
                      {
                          params: e,
                          $wrapperEl: s,
                          activeIndex: n
                      } = i;
                  let r = n;
                  e.loop && (r -= i.loopedSlides, i.loopDestroy(), i.slides = s.children("." + e.slideClass));
                  let o, a = r;
                  if ("object" == typeof t && "length" in t) {
                      for (let e = 0; e < t.length; e += 1) o = t[e], i.slides[o] && i.slides.eq(o).remove(), o < a && --a;
                      a = Math.max(a, 0)
                  } else o = t, i.slides[o] && i.slides.eq(o).remove(), o < a && --a, a = Math.max(a, 0);
                  e.loop && i.loopCreate(), e.observer || i.update(), e.loop ? i.slideTo(a + i.loopedSlides, 0, !1) : i.slideTo(a, 0, !1)
              }.bind(e),
              removeAllSlides: function() {
                  const t = [];
                  for (let e = 0; e < this.slides.length; e += 1) t.push(e);
                  this.removeSlide(t)
              }.bind(e)
          })
      }, function({
          swiper: o,
          extendParams: e,
          on: t
      }) {
          e({
              fadeEffect: {
                  crossFade: !1,
                  transformEl: null
              }
          }), s({
              effect: "fade",
              swiper: o,
              on: t,
              setTranslate: () => {
                  const s = o["slides"],
                      n = o.params.fadeEffect;
                  for (let i = 0; i < s.length; i += 1) {
                      const s = o.slides.eq(i);
                      let e = -s[0].swiperSlideOffset,
                          t = (o.params.virtualTranslate || (e -= o.translate), 0);
                      o.isHorizontal() || (t = e, e = 0);
                      var r = o.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(s[0].progress), 0) : 1 + Math.min(Math.max(s[0].progress, -1), 0);
                      z(n, s).css({
                          opacity: r
                      }).transform(`translate3d(${e}px, ${t}px, 0px)`)
                  }
              },
              setTransition: e => {
                  var t = o.params.fadeEffect["transformEl"];
                  (t ? o.slides.find(t) : o.slides).transition(e), N({
                      swiper: o,
                      duration: e,
                      transformEl: t,
                      allSlides: !0
                  })
              },
              overwriteParams: () => ({
                  slidesPerView: 1,
                  slidesPerGroup: 1,
                  watchSlidesProgress: !0,
                  spaceBetween: 0,
                  virtualTranslate: !o.params.cssMode
              })
          })
      }, function({
          swiper: r,
          extendParams: e,
          on: t
      }) {
          e({
              cubeEffect: {
                  slideShadows: !0,
                  shadow: !0,
                  shadowOffset: 20,
                  shadowScale: .94
              }
          }), s({
              effect: "cube",
              swiper: r,
              on: t,
              setTranslate: () => {
                  const {
                      $el: a,
                      $wrapperEl: e,
                      slides: l,
                      width: t,
                      height: s,
                      rtlTranslate: m,
                      size: c,
                      browser: d
                  } = r, u = r.params.cubeEffect, h = r.isHorizontal(), f = r.virtual && r.params.virtual.enabled;
                  let i, p = 0;
                  u.shadow && (h ? (i = e.find(".swiper-cube-shadow"), 0 === i.length && (i = O('<div class="swiper-cube-shadow"></div>'), e.append(i)), i.css({
                      height: t + "px"
                  })) : (i = a.find(".swiper-cube-shadow"), 0 === i.length && (i = O('<div class="swiper-cube-shadow"></div>'), a.append(i))));
                  for (let o = 0; o < l.length; o += 1) {
                      const a = l.eq(o);
                      let e = o,
                          t = (f && (e = parseInt(a.attr("data-swiper-slide-index"), 10)), 90 * e),
                          i = Math.floor(t / 360);
                      m && (t = -t, i = Math.floor(-t / 360));
                      const d = Math.max(Math.min(a[0].progress, 1), -1);
                      let s = 0,
                          n = 0,
                          r = 0;
                      e % 4 == 0 ? (s = 4 * -i * c, r = 0) : (e - 1) % 4 == 0 ? (s = 0, r = 4 * -i * c) : (e - 2) % 4 == 0 ? (s = c + 4 * i * c, r = c) : (e - 3) % 4 == 0 && (s = -c, r = 3 * c + 4 * c * i), m && (s = -s), h || (n = s, s = 0);
                      var g = `rotateX(${h?0:-t}deg) rotateY(${h?t:0}deg) translate3d(${s}px, ${n}px, ${r}px)`;
                      if (d <= 1 && -1 < d && (p = 90 * e + 90 * d, m && (p = 90 * -e - 90 * d)), a.transform(g), u.slideShadows) {
                          let e = h ? a.find(".swiper-slide-shadow-left") : a.find(".swiper-slide-shadow-top"),
                              t = h ? a.find(".swiper-slide-shadow-right") : a.find(".swiper-slide-shadow-bottom");
                          0 === e.length && (e = O(`<div class="swiper-slide-shadow-${h?"left":"top"}"></div>`), a.append(e)), 0 === t.length && (t = O(`<div class="swiper-slide-shadow-${h?"right":"bottom"}"></div>`), a.append(t)), e.length && (e[0].style.opacity = Math.max(-d, 0)), t.length && (t[0].style.opacity = Math.max(d, 0))
                      }
                  }
                  if (e.css({
                          "-webkit-transform-origin": `50% 50% -${c/2}px`,
                          "transform-origin": `50% 50% -${c/2}px`
                      }), u.shadow)
                      if (h) i.transform(`translate3d(0px, ${t/2+u.shadowOffset}px, ${-t/2}px) rotateX(90deg) rotateZ(0deg) scale(${u.shadowScale})`);
                      else {
                          const r = Math.abs(p) - 90 * Math.floor(Math.abs(p) / 90),
                              a = 1.5 - (Math.sin(2 * r * Math.PI / 360) / 2 + Math.cos(2 * r * Math.PI / 360) / 2),
                              e = u.shadowScale,
                              l = u.shadowScale / a,
                              t = u.shadowOffset;
                          i.transform(`scale3d(${e}, 1, ${l}) translate3d(0px, ${s/2+t}px, ${-s/2/l}px) rotateX(-90deg)`)
                      } var n = d.isSafari || d.isWebView ? -c / 2 : 0;
                  e.transform(`translate3d(0px,0,${n}px) rotateX(${r.isHorizontal()?0:p}deg) rotateY(${r.isHorizontal()?-p:0}deg)`)
              },
              setTransition: e => {
                  const {
                      $el: t,
                      slides: i
                  } = r;
                  i.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), r.params.cubeEffect.shadow && !r.isHorizontal() && t.find(".swiper-cube-shadow").transition(e)
              },
              perspective: () => !0,
              overwriteParams: () => ({
                  slidesPerView: 1,
                  slidesPerGroup: 1,
                  watchSlidesProgress: !0,
                  resistanceRatio: 0,
                  spaceBetween: 0,
                  centeredSlides: !1,
                  virtualTranslate: !0
              })
          })
      }, function({
          swiper: u,
          extendParams: e,
          on: t
      }) {
          e({
              flipEffect: {
                  slideShadows: !0,
                  limitRotation: !0,
                  transformEl: null
              }
          }), s({
              effect: "flip",
              swiper: u,
              on: t,
              setTranslate: () => {
                  const {
                      slides: o,
                      rtlTranslate: a
                  } = u, l = u.params.flipEffect;
                  for (let r = 0; r < o.length; r += 1) {
                      const d = o.eq(r);
                      let i = d[0].progress;
                      u.params.flipEffect.limitRotation && (i = Math.max(Math.min(d[0].progress, 1), -1));
                      var c = d[0].swiperSlideOffset;
                      let e = -180 * i,
                          t = 0,
                          s = u.params.cssMode ? -c - u.translate : -c,
                          n = 0;
                      if (u.isHorizontal() ? a && (e = -e) : (n = s, s = 0, t = -e, e = 0), d[0].style.zIndex = -Math.abs(Math.round(i)) + o.length, l.slideShadows) {
                          let e = u.isHorizontal() ? d.find(".swiper-slide-shadow-left") : d.find(".swiper-slide-shadow-top"),
                              t = u.isHorizontal() ? d.find(".swiper-slide-shadow-right") : d.find(".swiper-slide-shadow-bottom");
                          0 === e.length && (e = D(l, d, u.isHorizontal() ? "left" : "top")), 0 === t.length && (t = D(l, d, u.isHorizontal() ? "right" : "bottom")), e.length && (e[0].style.opacity = Math.max(-i, 0)), t.length && (t[0].style.opacity = Math.max(i, 0))
                      }
                      c = `translate3d(${s}px, ${n}px, 0px) rotateX(${t}deg) rotateY(${e}deg)`;
                      z(l, d).transform(c)
                  }
              },
              setTransition: e => {
                  var t = u.params.flipEffect["transformEl"];
                  (t ? u.slides.find(t) : u.slides).transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), N({
                      swiper: u,
                      duration: e,
                      transformEl: t
                  })
              },
              perspective: () => !0,
              overwriteParams: () => ({
                  slidesPerView: 1,
                  slidesPerGroup: 1,
                  watchSlidesProgress: !0,
                  spaceBetween: 0,
                  virtualTranslate: !u.params.cssMode
              })
          })
      }, function({
          swiper: i,
          extendParams: e,
          on: t
      }) {
          e({
              coverflowEffect: {
                  rotate: 50,
                  stretch: 0,
                  depth: 100,
                  scale: 1,
                  modifier: 1,
                  slideShadows: !0,
                  transformEl: null
              }
          }), s({
              effect: "coverflow",
              swiper: i,
              on: t,
              setTranslate: () => {
                  const {
                      width: l,
                      height: c,
                      slides: d,
                      slidesSizesGrid: u
                  } = i, h = i.params.coverflowEffect, p = i.isHorizontal(), m = i.translate, f = p ? l / 2 - m : c / 2 - m, g = p ? h.rotate : -h.rotate, v = h.depth;
                  for (let a = 0, e = d.length; a < e; a += 1) {
                      const l = d.eq(a),
                          c = u[a],
                          m = (f - l[0].swiperSlideOffset - c / 2) / c * h.modifier;
                      let e = p ? g * m : 0,
                          t = p ? 0 : g * m,
                          i = -v * Math.abs(m),
                          s = h.stretch,
                          n = ("string" == typeof s && -1 !== s.indexOf("%") && (s = parseFloat(h.stretch) / 100 * c), p ? 0 : s * m),
                          r = p ? s * m : 0,
                          o = 1 - (1 - h.scale) * Math.abs(m);
                      Math.abs(r) < .001 && (r = 0), Math.abs(n) < .001 && (n = 0), Math.abs(i) < .001 && (i = 0), Math.abs(e) < .001 && (e = 0), Math.abs(t) < .001 && (t = 0), Math.abs(o) < .001 && (o = 0);
                      var y = `translate3d(${r}px,${n}px,${i}px)  rotateX(${t}deg) rotateY(${e}deg) scale(${o})`;
                      if (z(h, l).transform(y), l[0].style.zIndex = 1 - Math.abs(Math.round(m)), h.slideShadows) {
                          let e = p ? l.find(".swiper-slide-shadow-left") : l.find(".swiper-slide-shadow-top"),
                              t = p ? l.find(".swiper-slide-shadow-right") : l.find(".swiper-slide-shadow-bottom");
                          0 === e.length && (e = D(h, l, p ? "left" : "top")), 0 === t.length && (t = D(h, l, p ? "right" : "bottom")), e.length && (e[0].style.opacity = 0 < m ? m : 0), t.length && (t[0].style.opacity = 0 < -m ? -m : 0)
                      }
                  }
              },
              setTransition: e => {
                  var t = i.params.coverflowEffect["transformEl"];
                  (t ? i.slides.find(t) : i.slides).transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
              },
              perspective: () => !0,
              overwriteParams: () => ({
                  watchSlidesProgress: !0
              })
          })
      }, function({
          swiper: b,
          extendParams: e,
          on: t
      }) {
          e({
              creativeEffect: {
                  transformEl: null,
                  limitProgress: 1,
                  shadowPerProgress: !1,
                  progressMultiplier: 1,
                  perspective: !0,
                  prev: {
                      translate: [0, 0, 0],
                      rotate: [0, 0, 0],
                      opacity: 1,
                      scale: 1
                  },
                  next: {
                      translate: [0, 0, 0],
                      rotate: [0, 0, 0],
                      opacity: 1,
                      scale: 1
                  }
              }
          });
          s({
              effect: "creative",
              swiper: b,
              on: t,
              setTranslate: () => {
                  const {
                      slides: n,
                      $wrapperEl: e,
                      slidesSizesGrid: r
                  } = b, o = b.params.creativeEffect, a = o["progressMultiplier"], l = b.params.centeredSlides;
                  if (l) {
                      const n = r[0] / 2 - b.params.slidesOffsetBefore || 0;
                      e.transform(`translateX(calc(50% - ${n}px))`)
                  }
                  for (let s = 0; s < n.length; s += 1) {
                      const r = n.eq(s),
                          y = r[0].progress,
                          c = Math.min(Math.max(r[0].progress, -o.limitProgress), o.limitProgress);
                      let e = c;
                      l || (e = Math.min(Math.max(r[0].originalProgress, -o.limitProgress), o.limitProgress));
                      const d = r[0].swiperSlideOffset,
                          u = [b.params.cssMode ? -d - b.translate : -d, 0, 0],
                          h = [0, 0, 0];
                      let t = !1,
                          i = (b.isHorizontal() || (u[1] = u[0], u[0] = 0), {
                              translate: [0, 0, 0],
                              rotate: [0, 0, 0],
                              scale: 1,
                              opacity: 1
                          });
                      c < 0 ? (i = o.next, t = !0) : 0 < c && (i = o.prev, t = !0), u.forEach((e, t) => {
                          u[t] = `calc(${e}px + (${e=i.translate[t],"string"==typeof e?e:e+"px"} * ${Math.abs(c*a)}))`
                      }), h.forEach((e, t) => {
                          h[t] = i.rotate[t] * Math.abs(c * a)
                      }), r[0].style.zIndex = -Math.abs(Math.round(y)) + n.length;
                      var m = u.join(", "),
                          f = `rotateX(${h[0]}deg) rotateY(${h[1]}deg) rotateZ(${h[2]}deg)`,
                          g = e < 0 ? `scale(${1+(1-i.scale)*e*a})` : `scale(${1-(1-i.scale)*e*a})`,
                          v = e < 0 ? 1 + (1 - i.opacity) * e * a : 1 - (1 - i.opacity) * e * a,
                          m = `translate3d(${m}) ${f} ` + g;
                      if (t && i.shadow || !t) {
                          let e = r.children(".swiper-slide-shadow");
                          if (0 === e.length && i.shadow && (e = D(o, r)), e.length) {
                              const n = o.shadowPerProgress ? c * (1 / o.limitProgress) : c;
                              e[0].style.opacity = Math.min(Math.max(Math.abs(n), 0), 1)
                          }
                      }
                      const p = z(o, r);
                      p.transform(m).css({
                          opacity: v
                      }), i.origin && p.css("transform-origin", i.origin)
                  }
              },
              setTransition: e => {
                  var t = b.params.creativeEffect["transformEl"];
                  (t ? b.slides.find(t) : b.slides).transition(e).find(".swiper-slide-shadow").transition(e), N({
                      swiper: b,
                      duration: e,
                      transformEl: t,
                      allSlides: !0
                  })
              },
              perspective: () => b.params.creativeEffect.perspective,
              overwriteParams: () => ({
                  watchSlidesProgress: !0,
                  virtualTranslate: !b.params.cssMode
              })
          })
      }, function({
          swiper: b,
          extendParams: e,
          on: t
      }) {
          e({
              cardsEffect: {
                  slideShadows: !0,
                  transformEl: null
              }
          }), s({
              effect: "cards",
              swiper: b,
              on: t,
              setTranslate: () => {
                  const {
                      slides: a,
                      activeIndex: l
                  } = b, c = b.params.cardsEffect, {
                      startTranslate: d,
                      isTouched: u
                  } = b.touchEventsData, h = b.translate;
                  for (let o = 0; o < a.length; o += 1) {
                      const m = a.eq(o),
                          f = m[0].progress,
                          g = Math.min(Math.max(f, -4), 4);
                      let e = m[0].swiperSlideOffset,
                          t = (b.params.centeredSlides && !b.params.cssMode && b.$wrapperEl.transform(`translateX(${b.minTranslate()}px)`), b.params.centeredSlides && b.params.cssMode && (e -= a[0].swiperSlideOffset), b.params.cssMode ? -e - b.translate : -e),
                          i = 0;
                      var v = -100 * Math.abs(g);
                      let s = 1,
                          n = -2 * g,
                          r = 8 - .75 * Math.abs(g);
                      var p = (o === l || o === l - 1) && 0 < g && g < 1 && (u || b.params.cssMode) && h < d,
                          y = (o === l || o === l + 1) && g < 0 && -1 < g && (u || b.params.cssMode) && d < h;
                      if (p || y) {
                          const b = (1 - Math.abs((Math.abs(g) - .5) / .5)) ** .5;
                          n += -28 * g * b, s += -.5 * b, r += 96 * b, i = -25 * b * Math.abs(g) + "%"
                      }
                      if (t = g < 0 ? `calc(${t}px + (${r*Math.abs(g)}%))` : 0 < g ? `calc(${t}px + (-${r*Math.abs(g)}%))` : t + "px", !b.isHorizontal()) {
                          const b = i;
                          i = t, t = b
                      }
                      p = `
      translate3d(${t}, ${i}, ${v}px)
      rotateZ(${n}deg)
      scale(${g<0?""+(1+(1-s)*g):""+(1-(1-s)*g)})
    `;
                      if (c.slideShadows) {
                          let e = m.find(".swiper-slide-shadow");
                          0 === e.length && (e = D(c, m)), e.length && (e[0].style.opacity = Math.min(Math.max((Math.abs(g) - .5) / .5, 0), 1))
                      }
                      m[0].style.zIndex = -Math.abs(Math.round(f)) + a.length, z(c, m).transform(p)
                  }
              },
              setTransition: e => {
                  var t = b.params.cardsEffect["transformEl"];
                  (t ? b.slides.find(t) : b.slides).transition(e).find(".swiper-slide-shadow").transition(e), N({
                      swiper: b,
                      duration: e,
                      transformEl: t
                  })
              },
              perspective: () => !0,
              overwriteParams: () => ({
                  watchSlidesProgress: !0,
                  virtualTranslate: !b.params.cssMode
              })
          })
      }]), n
  });
var Typer = function(e) {
      var t = (this.element = e).dataset.delim || ",",
          i = e.dataset.words || "override these,sample typing",
          i = (this.words = i.split(t).filter(e => e), this.delayVariance = parseInt(e.dataset.delayVariance) || 0, this.delay = parseInt(e.dataset.delay) || 200, this.loop = e.dataset.loop || "true", "false" === this.loop && (this.loop = 1), this.deleteDelay = e.dataset.deletedelay || e.dataset.deleteDelay || 800, this.progress = {
              word: 0,
              char: 0,
              building: !0,
              looped: 0
          }, this.typing = !0, e.dataset.colors || "black");
      this.colors = i.split(","), this.element.style.color = this.colors[0], this.colorIndex = 0, this.doTyping()
  },
  Cursor = (Typer.prototype.start = function() {
      this.typing || (this.typing = !0, this.doTyping())
  }, Typer.prototype.stop = function() {
      this.typing = !1
  }, Typer.prototype.doTyping = function() {
      var e, t = this.element,
          i = this.progress,
          s = i.word,
          n = i.char,
          n = [...this.words[s]].slice(0, n).join(""),
          r = (2 * Math.random() - 1) * this.delayVariance + this.delay;
      this.cursor && (this.cursor.element.style.opacity = "1", this.cursor.on = !0, clearInterval(this.cursor.interval), this.cursor.interval = setInterval(() => this.cursor.updateBlinkState(), 400)), t.innerHTML = n, i.building ? (e = i.char === this.words[s].length) ? i.building = !1 : i.char += 1 : 0 === i.char ? (i.building = !0, i.word = (i.word + 1) % this.words.length, this.colorIndex = (this.colorIndex + 1) % this.colors.length, this.element.style.color = this.colors[this.colorIndex]) : --i.char, i.word === this.words.length - 1 && (i.looped += 1), !i.building && this.loop <= i.looped && (this.typing = !1), setTimeout(() => {
          this.typing && this.doTyping()
      }, e ? this.deleteDelay : r)
  }, function(e) {
      this.element = e, this.cursorDisplay = e.dataset.cursordisplay || e.dataset.cursorDisplay || "|", e.innerHTML = this.cursorDisplay, this.on = !0, e.style.transition = "all 0.1s", this.interval = setInterval(() => this.updateBlinkState(), 400)
  });

function TyperSetup() {
  var e, t, i, s, n = {};
  for (e of document.getElementsByClassName("typer")) n[e.id] = new Typer(e);
  for (t of document.getElementsByClassName("typer-stop")) {
      let e = n[t.dataset.owner];
      t.onclick = () => e.stop()
  }
  for (i of document.getElementsByClassName("typer-start")) {
      let e = n[i.dataset.owner];
      i.onclick = () => e.start()
  }
  for (s of document.getElementsByClassName("cursor")) {
      let e = new Cursor(s);
      e.owner = n[s.dataset.owner]
  }
}
Cursor.prototype.updateBlinkState = function() {
  this.on ? (this.element.style.opacity = "0", this.on = !1) : (this.element.style.opacity = "1", this.on = !0)
}, TyperSetup();
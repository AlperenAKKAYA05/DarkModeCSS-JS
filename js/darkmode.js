! function(e, t) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.darken = t()
}(this, function() {
  var e = function(e, t) {
    var r = this;
    "function" == typeof e && (t = e, e = {}), e = Object.assign({
      container: null,
      default: "light",
      toggle: null,
      remember: "darken-mode",
      usePrefersColorScheme: !0,
      class: "darken",
      variables: {}
    }, e), this.dark = !1, e.remember ? localStorage.getItem(e.remember) ? e.default = localStorage.getItem(e.remember) : e.usePrefersColorScheme && (window.matchMedia("(prefers-color-scheme: dark)") ? e.default = "dark" : window.matchMedia("(prefers-color-scheme: light)") && (e.default = "light")) : e.usePrefersColorScheme && (window.matchMedia("(prefers-color-scheme: dark)") ? e.default = "dark" : window.matchMedia("(prefers-color-scheme: light)") && (e.default = "light"), window.matchMedia("(prefers-color-scheme: dark)").addListener(function(e) {
      e.matches && r.on()
    }), window.matchMedia("(prefers-color-scheme: light)").addListener(function(e) {
      e.matches && r.off()
    })), e.toggle && document.querySelector(e.toggle).addEventListener("click", function(e) {
      e.preventDefault(), r.toggle()
    }), document.addEventListener("darken-dark", function() {
      e.container ? document.querySelector(e.container).classList.add(e.class) : document.body.classList.add(e.class);
      for (var o = e.container ? document.querySelector(e.container) : document.documentElement, n = 0, a = Object.entries(e.variables); n < a.length; n += 1) {
        var d = a[n],
          c = d[0],
          i = d[1];
        i && "object" == typeof i && (Array.isArray(i) ? o.style.setProperty(c, i[1]) : o.style.setProperty(c, i.dark))
      }
      e.remember && localStorage.setItem(e.remember, r.dark ? "dark" : "light"), "function" == typeof t && t(r.dark)
    }, !1), document.addEventListener("darken-light", function() {
      e.container ? document.querySelector(e.container).classList.remove(e.class) : document.body.classList.remove(e.class);
      for (var o = e.container ? document.querySelector(e.container) : document.documentElement, n = 0, a = Object.entries(e.variables); n < a.length; n += 1) {
        var d = a[n],
          c = d[0],
          i = d[1];
        i && "object" == typeof i && (Array.isArray(i) ? o.style.setProperty(c, i[0]) : o.style.setProperty(c, i.light))
      }
      e.remember && localStorage.setItem(e.remember, r.dark ? "dark" : "light"), "function" == typeof t && t(r.dark)
    }, !1), "light" === e.default ? this.off() : "dark" === e.default && this.on()
  };
  return e.prototype.toggle = function() {
    this.dark = !this.dark, this.dark ? document.dispatchEvent(new Event("darken-dark")) : document.dispatchEvent(new Event("darken-light"))
  }, e.prototype.on = function() {
    this.dark = !0, document.dispatchEvent(new Event("darken-dark"))
  }, e.prototype.off = function() {
    this.dark = !1, document.dispatchEvent(new Event("darken-light"))
  }, e
});

const darkmode = new darken({
  toggle: "#dark-mode-toggle",
  variables: {
    "--primary-color": ["#ffffff", "#000000"],
    "--secondary-color": ["#000000", "#ffffff"],
    "--mode-icon": ["'\\f185'", "'\\f186'"],
    "--mode-icon-color": ["#FDB813", "#E5E5E5"],
  }
});

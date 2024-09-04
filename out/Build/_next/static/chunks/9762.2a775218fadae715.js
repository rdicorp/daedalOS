(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9762],
    {
        89762: function (e) {
            var t;
            (t = function () {
                return (function e(t, i, n) {
                    function r(o, a) {
                        if (!i[o]) {
                            if (!t[o]) {
                                if (s) return s(o, !0);
                                var h = Error("Cannot find module '" + o + "'");
                                throw ((h.code = "MODULE_NOT_FOUND"), h);
                            }
                            var l = (i[o] = { exports: {} });
                            t[o][0].call(
                                l.exports,
                                function (e) {
                                    return r(t[o][1][e] || e);
                                },
                                l,
                                l.exports,
                                e,
                                t,
                                i,
                                n
                            );
                        }
                        return i[o].exports;
                    }
                    for (var s = void 0, o = 0; o < n.length; o++) r(n[o]);
                    return r;
                })(
                    {
                        1: [
                            function (e, t, i) {
                                function n() {
                                    (this._events = this._events || {}), (this._maxListeners = this._maxListeners || void 0);
                                }
                                function r(e) {
                                    return "function" == typeof e;
                                }
                                function s(e) {
                                    return "object" == typeof e && null !== e;
                                }
                                (t.exports = n),
                                    (n.EventEmitter = n),
                                    (n.prototype._events = void 0),
                                    (n.prototype._maxListeners = void 0),
                                    (n.defaultMaxListeners = 10),
                                    (n.prototype.setMaxListeners = function (e) {
                                        if ("number" != typeof e || e < 0 || isNaN(e)) throw TypeError("n must be a positive number");
                                        return (this._maxListeners = e), this;
                                    }),
                                    (n.prototype.emit = function (e) {
                                        var t, i, n, o, a, h;
                                        if ((this._events || (this._events = {}), "error" === e && (!this._events.error || (s(this._events.error) && !this._events.error.length)))) {
                                            if (((t = arguments[1]), t instanceof Error)) throw t;
                                            var l = Error('Uncaught, unspecified "error" event. (' + t + ")");
                                            throw ((l.context = t), l);
                                        }
                                        if (void 0 === (i = this._events[e])) return !1;
                                        if (r(i))
                                            switch (arguments.length) {
                                                case 1:
                                                    i.call(this);
                                                    break;
                                                case 2:
                                                    i.call(this, arguments[1]);
                                                    break;
                                                case 3:
                                                    i.call(this, arguments[1], arguments[2]);
                                                    break;
                                                default:
                                                    (o = Array.prototype.slice.call(arguments, 1)), i.apply(this, o);
                                            }
                                        else if (s(i)) for (a = 0, o = Array.prototype.slice.call(arguments, 1), n = (h = i.slice()).length; a < n; a++) h[a].apply(this, o);
                                        return !0;
                                    }),
                                    (n.prototype.addListener = function (e, t) {
                                        var i;
                                        if (!r(t)) throw TypeError("listener must be a function");
                                        return (
                                            this._events || (this._events = {}),
                                            this._events.newListener && this.emit("newListener", e, r(t.listener) ? t.listener : t),
                                            this._events[e] ? (s(this._events[e]) ? this._events[e].push(t) : (this._events[e] = [this._events[e], t])) : (this._events[e] = t),
                                            s(this._events[e]) &&
                                            !this._events[e].warned &&
                                            (i = void 0 === this._maxListeners ? n.defaultMaxListeners : this._maxListeners) &&
                                            i > 0 &&
                                            this._events[e].length > i &&
                                            ((this._events[e].warned = !0),
                                                console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[e].length),
                                                "function" == typeof console.trace && console.trace()),
                                            this
                                        );
                                    }),
                                    (n.prototype.on = n.prototype.addListener),
                                    (n.prototype.once = function (e, t) {
                                        if (!r(t)) throw TypeError("listener must be a function");
                                        var i = !1;
                                        function n() {
                                            this.removeListener(e, n), i || ((i = !0), t.apply(this, arguments));
                                        }
                                        return (n.listener = t), this.on(e, n), this;
                                    }),
                                    (n.prototype.removeListener = function (e, t) {
                                        var i, n, o, a;
                                        if (!r(t)) throw TypeError("listener must be a function");
                                        if (!this._events || !this._events[e]) return this;
                                        if (((o = (i = this._events[e]).length), (n = -1), i === t || (r(i.listener) && i.listener === t))) delete this._events[e], this._events.removeListener && this.emit("removeListener", e, t);
                                        else if (s(i)) {
                                            for (a = o; a-- > 0;)
                                                if (i[a] === t || (i[a].listener && i[a].listener === t)) {
                                                    n = a;
                                                    break;
                                                }
                                            if (n < 0) return this;
                                            1 === i.length ? ((i.length = 0), delete this._events[e]) : i.splice(n, 1), this._events.removeListener && this.emit("removeListener", e, t);
                                        }
                                        return this;
                                    }),
                                    (n.prototype.removeAllListeners = function (e) {
                                        var t, i;
                                        if (!this._events) return this;
                                        if (!this._events.removeListener) return 0 == arguments.length ? (this._events = {}) : this._events[e] && delete this._events[e], this;
                                        if (0 == arguments.length) {
                                            for (t in this._events) "removeListener" !== t && this.removeAllListeners(t);
                                            return this.removeAllListeners("removeListener"), (this._events = {}), this;
                                        }
                                        if (r((i = this._events[e]))) this.removeListener(e, i);
                                        else if (i) for (; i.length;) this.removeListener(e, i[i.length - 1]);
                                        return delete this._events[e], this;
                                    }),
                                    (n.prototype.listeners = function (e) {
                                        return this._events && this._events[e] ? (r(this._events[e]) ? [this._events[e]] : this._events[e].slice()) : [];
                                    }),
                                    (n.prototype.listenerCount = function (e) {
                                        if (this._events) {
                                            var t = this._events[e];
                                            if (r(t)) return 1;
                                            if (t) return t.length;
                                        }
                                        return 0;
                                    }),
                                    (n.listenerCount = function (e, t) {
                                        return e.listenerCount(t);
                                    });
                            },
                            {},
                        ],
                        2: [
                            function (e, t, i) {
                                var n, r, s, o, a;
                                (a = navigator.userAgent.toLowerCase()),
                                    (o = navigator.platform.toLowerCase()),
                                    (s = "ie" === (n = a.match(/(opera|ie|firefox|chrome|version)[\s\/:]([\w\d\.]+)?.*?(safari|version[\s\/:]([\w\d\.]+)|$)/) || [null, "unknown", 0])[1] && document.documentMode),
                                    ((r = {
                                        name: "version" === n[1] ? n[3] : n[1],
                                        version: s || parseFloat("opera" === n[1] && n[4] ? n[4] : n[2]),
                                        platform: { name: a.match(/ip(?:ad|od|hone)/) ? "ios" : (a.match(/(?:webos|android)/) || o.match(/mac|win|linux/) || ["other"])[0] },
                                    })[r.name] = !0),
                                    (r[r.name + parseInt(r.version, 10)] = !0),
                                    (r.platform[r.platform.name] = !0),
                                    (t.exports = r);
                            },
                            {},
                        ],
                        3: [
                            function (e, t, i) {
                                var n,
                                    r,
                                    s,
                                    o = function (e, t) {
                                        for (var i in t) a.call(t, i) && (e[i] = t[i]);
                                        function n() {
                                            this.constructor = e;
                                        }
                                        return (n.prototype = t.prototype), (e.prototype = new n()), (e.__super__ = t.prototype), e;
                                    },
                                    a = {}.hasOwnProperty,
                                    h =
                                        [].indexOf ||
                                        function (e) {
                                            for (var t = 0, i = this.length; t < i; t++) if (t in this && this[t] === e) return t;
                                            return -1;
                                        },
                                    l = [].slice;
                                (n = e("events").EventEmitter),
                                    (s = e("./browser.coffee")),
                                    (r = (function (e) {
                                        var t, i;
                                        function n(e) {
                                            var i, n, r;
                                            for (n in ((this.running = !1), (this.options = {}), (this.frames = []), (this.freeWorkers = []), (this.activeWorkers = []), this.setOptions(e), t))
                                                (r = t[n]), null == (i = this.options)[n] && (i[n] = r);
                                        }
                                        return (
                                            o(n, e),
                                            (t = { workerScript: "gif.worker.js", workers: 2, repeat: 0, background: "#fff", quality: 10, width: null, height: null, transparent: null, debug: !1, dither: !1 }),
                                            (i = { delay: 500, copy: !1 }),
                                            (n.prototype.setOption = function (e, t) {
                                                if (((this.options[e] = t), null != this._canvas && ("width" === e || "height" === e))) return (this._canvas[e] = t);
                                            }),
                                            (n.prototype.setOptions = function (e) {
                                                var t, i, n;
                                                for (t in ((i = []), e)) a.call(e, t) && ((n = e[t]), i.push(this.setOption(t, n)));
                                                return i;
                                            }),
                                            (n.prototype.addFrame = function (e, t) {
                                                var n, r;
                                                for (r in (null == t && (t = {}), ((n = {}).transparent = this.options.transparent), i)) n[r] = t[r] || i[r];
                                                if (
                                                    (null == this.options.width && this.setOption("width", e.width),
                                                        null == this.options.height && this.setOption("height", e.height),
                                                        "undefined" != typeof ImageData && null !== ImageData && e instanceof ImageData)
                                                )
                                                    n.data = e.data;
                                                else if (
                                                    ("undefined" != typeof CanvasRenderingContext2D && null !== CanvasRenderingContext2D && e instanceof CanvasRenderingContext2D) ||
                                                    ("undefined" != typeof WebGLRenderingContext && null !== WebGLRenderingContext && e instanceof WebGLRenderingContext)
                                                )
                                                    t.copy ? (n.data = this.getContextData(e)) : (n.context = e);
                                                else if (null != e.childNodes) t.copy ? (n.data = this.getImageData(e)) : (n.image = e);
                                                else throw Error("Invalid image");
                                                return this.frames.push(n);
                                            }),
                                            (n.prototype.render = function () {
                                                var e, t;
                                                if (this.running) throw Error("Already running");
                                                if (null == this.options.width || null == this.options.height) throw Error("Width and height must be set prior to rendering");
                                                if (
                                                    ((this.running = !0),
                                                        (this.nextFrame = 0),
                                                        (this.finishedFrames = 0),
                                                        (this.imageParts = function () {
                                                            var e, t, i;
                                                            for (i = [], e = 0, t = this.frames.length; 0 <= t ? e < t : e > t; 0 <= t ? ++e : --e) i.push(null);
                                                            return i;
                                                        }.call(this)),
                                                        (t = this.spawnWorkers()),
                                                        !0 === this.options.globalPalette)
                                                )
                                                    this.renderNextFrame();
                                                else for (e = 0; 0 <= t ? e < t : e > t; 0 <= t ? ++e : --e) this.renderNextFrame();
                                                return this.emit("start"), this.emit("progress", 0);
                                            }),
                                            (n.prototype.abort = function () {
                                                for (var e; null != (e = this.activeWorkers.shift());) this.log("killing active worker"), e.terminate();
                                                return (this.running = !1), this.emit("abort");
                                            }),
                                            (n.prototype.spawnWorkers = function () {
                                                var e, t, i, n;
                                                return (
                                                    (e = Math.min(this.options.workers, this.frames.length)),
                                                    function () {
                                                        i = [];
                                                        for (var n = (t = this.freeWorkers.length); t <= e ? n < e : n > e; t <= e ? n++ : n--) i.push(n);
                                                        return i;
                                                    }
                                                        .apply(this)
                                                        .forEach(
                                                            ((n = this),
                                                                function (e) {
                                                                    var t;
                                                                    return (
                                                                        n.log("spawning worker " + e),
                                                                        ((t = new Worker(n.options.workerScript)).onmessage = function (e) {
                                                                            return n.activeWorkers.splice(n.activeWorkers.indexOf(t), 1), n.freeWorkers.push(t), n.frameFinished(e.data);
                                                                        }),
                                                                        n.freeWorkers.push(t)
                                                                    );
                                                                })
                                                        ),
                                                    e
                                                );
                                            }),
                                            (n.prototype.frameFinished = function (e) {
                                                var t, i;
                                                if (
                                                    (this.log("frame " + e.index + " finished - " + this.activeWorkers.length + " active"),
                                                        this.finishedFrames++,
                                                        this.emit("progress", this.finishedFrames / this.frames.length),
                                                        (this.imageParts[e.index] = e),
                                                        !0 === this.options.globalPalette && ((this.options.globalPalette = e.globalPalette), this.log("global palette analyzed"), this.frames.length > 2))
                                                )
                                                    for (t = 1, i = this.freeWorkers.length; 1 <= i ? t < i : t > i; 1 <= i ? ++t : --t) this.renderNextFrame();
                                                return h.call(this.imageParts, null) >= 0 ? this.renderNextFrame() : this.finishRendering();
                                            }),
                                            (n.prototype.finishRendering = function () {
                                                var e, t, i, n, r, s, o, a, h, l, f, p, u, c, v, d;
                                                for (r = 0, a = 0, h = (c = this.imageParts).length; r < h; r++) a += ((t = c[r]).data.length - 1) * t.pageSize + t.cursor;
                                                for (a += t.pageSize - t.cursor, this.log("rendering finished - filesize " + Math.round(a / 1e3) + "kb"), e = new Uint8Array(a), p = 0, s = 0, l = (v = this.imageParts).length; s < l; s++)
                                                    for (d = (t = v[s]).data, i = o = 0, f = d.length; o < f; i = ++o) (u = d[i]), e.set(u, p), i === t.data.length - 1 ? (p += t.cursor) : (p += t.pageSize);
                                                return (n = new Blob([e], { type: "image/gif" })), this.emit("finished", n, e);
                                            }),
                                            (n.prototype.renderNextFrame = function () {
                                                var e, t, i;
                                                if (0 === this.freeWorkers.length) throw Error("No free workers");
                                                if (!(this.nextFrame >= this.frames.length))
                                                    return (
                                                        (e = this.frames[this.nextFrame++]),
                                                        (i = this.freeWorkers.shift()),
                                                        (t = this.getTask(e)),
                                                        this.log("starting frame " + (t.index + 1) + " of " + this.frames.length),
                                                        this.activeWorkers.push(i),
                                                        i.postMessage(t)
                                                    );
                                            }),
                                            (n.prototype.getContextData = function (e) {
                                                return e.getImageData(0, 0, this.options.width, this.options.height).data;
                                            }),
                                            (n.prototype.getImageData = function (e) {
                                                var t;
                                                return (
                                                    null == this._canvas && ((this._canvas = document.createElement("canvas")), (this._canvas.width = this.options.width), (this._canvas.height = this.options.height)),
                                                    ((t = this._canvas.getContext("2d")).setFill = this.options.background),
                                                    t.fillRect(0, 0, this.options.width, this.options.height),
                                                    t.drawImage(e, 0, 0),
                                                    this.getContextData(t)
                                                );
                                            }),
                                            (n.prototype.getTask = function (e) {
                                                var t, i;
                                                if (
                                                    ((i = {
                                                        index: (t = this.frames.indexOf(e)),
                                                        last: t === this.frames.length - 1,
                                                        delay: e.delay,
                                                        transparent: e.transparent,
                                                        width: this.options.width,
                                                        height: this.options.height,
                                                        quality: this.options.quality,
                                                        dither: this.options.dither,
                                                        globalPalette: this.options.globalPalette,
                                                        repeat: this.options.repeat,
                                                        canTransfer: "chrome" === s.name,
                                                    }),
                                                        null != e.data)
                                                )
                                                    i.data = e.data;
                                                else if (null != e.context) i.data = this.getContextData(e.context);
                                                else if (null != e.image) i.data = this.getImageData(e.image);
                                                else throw Error("Invalid frame");
                                                return i;
                                            }),
                                            (n.prototype.log = function () {
                                                var e;
                                                if (((e = 1 <= arguments.length ? l.call(arguments, 0) : []), this.options.debug)) return console.log.apply(console, e);
                                            }),
                                            n
                                        );
                                    })(n)),
                                    (t.exports = r);
                            },
                            { "./browser.coffee": 2, events: 1 },
                        ],
                    },
                    {},
                    [3]
                )(3);
            }),
                (e.exports = t());
        },
    },
]);




// (self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9762],{89762:function(e){var t;t=function(){return(function e(t,i,n){function r(o,a){if(!i[o]){if(!t[o]){if(s)return s(o,!0);var h=Error("Cannot find module '"+o+"'");throw h.code="MODULE_NOT_FOUND",h}var l=i[o]={exports:{}};t[o][0].call(l.exports,function(e){return r(t[o][1][e]||e)},l,l.exports,e,t,i,n)}return i[o].exports}for(var s=void 0,o=0;o<n.length;o++)r(n[o]);return r})({1:[function(e,t,i){function n(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function r(e){return"function"==typeof e}function s(e){return"object"==typeof e&&null!==e}t.exports=n,n.EventEmitter=n,n.prototype._events=void 0,n.prototype._maxListeners=void 0,n.defaultMaxListeners=10,n.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||isNaN(e))throw TypeError("n must be a positive number");return this._maxListeners=e,this},n.prototype.emit=function(e){var t,i,n,o,a,h;if(this._events||(this._events={}),"error"===e&&(!this._events.error||s(this._events.error)&&!this._events.error.length)){if(t=arguments[1],t instanceof Error)throw t;var l=Error('Uncaught, unspecified "error" event. ('+t+")");throw l.context=t,l}if(void 0===(i=this._events[e]))return!1;if(r(i))switch(arguments.length){case 1:i.call(this);break;case 2:i.call(this,arguments[1]);break;case 3:i.call(this,arguments[1],arguments[2]);break;default:o=Array.prototype.slice.call(arguments,1),i.apply(this,o)}else if(s(i))for(a=0,o=Array.prototype.slice.call(arguments,1),n=(h=i.slice()).length;a<n;a++)h[a].apply(this,o);return!0},n.prototype.addListener=function(e,t){var i;if(!r(t))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",e,r(t.listener)?t.listener:t),this._events[e]?s(this._events[e])?this._events[e].push(t):this._events[e]=[this._events[e],t]:this._events[e]=t,s(this._events[e])&&!this._events[e].warned&&(i=void 0===this._maxListeners?n.defaultMaxListeners:this._maxListeners)&&i>0&&this._events[e].length>i&&(this._events[e].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[e].length),"function"==typeof console.trace&&console.trace()),this},n.prototype.on=n.prototype.addListener,n.prototype.once=function(e,t){if(!r(t))throw TypeError("listener must be a function");var i=!1;function n(){this.removeListener(e,n),i||(i=!0,t.apply(this,arguments))}return n.listener=t,this.on(e,n),this},n.prototype.removeListener=function(e,t){var i,n,o,a;if(!r(t))throw TypeError("listener must be a function");if(!this._events||!this._events[e])return this;if(o=(i=this._events[e]).length,n=-1,i===t||r(i.listener)&&i.listener===t)delete this._events[e],this._events.removeListener&&this.emit("removeListener",e,t);else if(s(i)){for(a=o;a-- >0;)if(i[a]===t||i[a].listener&&i[a].listener===t){n=a;break}if(n<0)return this;1===i.length?(i.length=0,delete this._events[e]):i.splice(n,1),this._events.removeListener&&this.emit("removeListener",e,t)}return this},n.prototype.removeAllListeners=function(e){var t,i;if(!this._events)return this;if(!this._events.removeListener)return 0==arguments.length?this._events={}:this._events[e]&&delete this._events[e],this;if(0==arguments.length){for(t in this._events)"removeListener"!==t&&this.removeAllListeners(t);return this.removeAllListeners("removeListener"),this._events={},this}if(r(i=this._events[e]))this.removeListener(e,i);else if(i)for(;i.length;)this.removeListener(e,i[i.length-1]);return delete this._events[e],this},n.prototype.listeners=function(e){return this._events&&this._events[e]?r(this._events[e])?[this._events[e]]:this._events[e].slice():[]},n.prototype.listenerCount=function(e){if(this._events){var t=this._events[e];if(r(t))return 1;if(t)return t.length}return 0},n.listenerCount=function(e,t){return e.listenerCount(t)}},{}],2:[function(e,t,i){var n,r,s,o,a;a=navigator.userAgent.toLowerCase(),o=navigator.platform.toLowerCase(),s="ie"===(n=a.match(/(opera|ie|firefox|chrome|version)[\s\/:]([\w\d\.]+)?.*?(safari|version[\s\/:]([\w\d\.]+)|$)/)||[null,"unknown",0])[1]&&document.documentMode,(r={name:"version"===n[1]?n[3]:n[1],version:s||parseFloat("opera"===n[1]&&n[4]?n[4]:n[2]),platform:{name:a.match(/ip(?:ad|od|hone)/)?"ios":(a.match(/(?:webos|android)/)||o.match(/mac|win|linux/)||["other"])[0]}})[r.name]=!0,r[r.name+parseInt(r.version,10)]=!0,r.platform[r.platform.name]=!0,t.exports=r},{}],3:[function(e,t,i){var n,r,s,o=function(e,t){for(var i in t)a.call(t,i)&&(e[i]=t[i]);function n(){this.constructor=e}return n.prototype=t.prototype,e.prototype=new n,e.__super__=t.prototype,e},a={}.hasOwnProperty,h=[].indexOf||function(e){for(var t=0,i=this.length;t<i;t++)if(t in this&&this[t]===e)return t;return -1},l=[].slice;n=e("events").EventEmitter,s=e("./browser.coffee"),r=function(e){var t,i;function n(e){var i,n,r;for(n in this.running=!1,this.options={},this.frames=[],this.freeWorkers=[],this.activeWorkers=[],this.setOptions(e),t)r=t[n],null==(i=this.options)[n]&&(i[n]=r)}return o(n,e),t={workerScript:"gif.worker.js",workers:2,repeat:0,background:"#fff",quality:10,width:null,height:null,transparent:null,debug:!1,dither:!1},i={delay:500,copy:!1},n.prototype.setOption=function(e,t){if(this.options[e]=t,null!=this._canvas&&("width"===e||"height"===e))return this._canvas[e]=t},n.prototype.setOptions=function(e){var t,i,n;for(t in i=[],e)a.call(e,t)&&(n=e[t],i.push(this.setOption(t,n)));return i},n.prototype.addFrame=function(e,t){var n,r;for(r in null==t&&(t={}),(n={}).transparent=this.options.transparent,i)n[r]=t[r]||i[r];if(null==this.options.width&&this.setOption("width",e.width),null==this.options.height&&this.setOption("height",e.height),"undefined"!=typeof ImageData&&null!==ImageData&&e instanceof ImageData)n.data=e.data;else if("undefined"!=typeof CanvasRenderingContext2D&&null!==CanvasRenderingContext2D&&e instanceof CanvasRenderingContext2D||"undefined"!=typeof WebGLRenderingContext&&null!==WebGLRenderingContext&&e instanceof WebGLRenderingContext)t.copy?n.data=this.getContextData(e):n.context=e;else if(null!=e.childNodes)t.copy?n.data=this.getImageData(e):n.image=e;else throw Error("Invalid image");return this.frames.push(n)},n.prototype.render=function(){var e,t;if(this.running)throw Error("Already running");if(null==this.options.width||null==this.options.height)throw Error("Width and height must be set prior to rendering");if(this.running=!0,this.nextFrame=0,this.finishedFrames=0,this.imageParts=(function(){var e,t,i;for(i=[],e=0,t=this.frames.length;0<=t?e<t:e>t;0<=t?++e:--e)i.push(null);return i}).call(this),t=this.spawnWorkers(),!0===this.options.globalPalette)this.renderNextFrame();else for(e=0;0<=t?e<t:e>t;0<=t?++e:--e)this.renderNextFrame();return this.emit("start"),this.emit("progress",0)},n.prototype.abort=function(){for(var e;null!=(e=this.activeWorkers.shift());)this.log("killing active worker"),e.terminate();return this.running=!1,this.emit("abort")},n.prototype.spawnWorkers=function(){var e,t,i,n;return e=Math.min(this.options.workers,this.frames.length),(function(){i=[];for(var n=t=this.freeWorkers.length;t<=e?n<e:n>e;t<=e?n++:n--)i.push(n);return i}).apply(this).forEach((n=this,function(e){var t;return n.log("spawning worker "+e),(t=new Worker(n.options.workerScript)).onmessage=function(e){return n.activeWorkers.splice(n.activeWorkers.indexOf(t),1),n.freeWorkers.push(t),n.frameFinished(e.data)},n.freeWorkers.push(t)})),e},n.prototype.frameFinished=function(e){var t,i;if(this.log("frame "+e.index+" finished - "+this.activeWorkers.length+" active"),this.finishedFrames++,this.emit("progress",this.finishedFrames/this.frames.length),this.imageParts[e.index]=e,!0===this.options.globalPalette&&(this.options.globalPalette=e.globalPalette,this.log("global palette analyzed"),this.frames.length>2))for(t=1,i=this.freeWorkers.length;1<=i?t<i:t>i;1<=i?++t:--t)this.renderNextFrame();return h.call(this.imageParts,null)>=0?this.renderNextFrame():this.finishRendering()},n.prototype.finishRendering=function(){var e,t,i,n,r,s,o,a,h,l,f,p,u,c,v,d;for(r=0,a=0,h=(c=this.imageParts).length;r<h;r++)a+=((t=c[r]).data.length-1)*t.pageSize+t.cursor;for(a+=t.pageSize-t.cursor,this.log("rendering finished - filesize "+Math.round(a/1e3)+"kb"),e=new Uint8Array(a),p=0,s=0,l=(v=this.imageParts).length;s<l;s++)for(d=(t=v[s]).data,i=o=0,f=d.length;o<f;i=++o)u=d[i],e.set(u,p),i===t.data.length-1?p+=t.cursor:p+=t.pageSize;return n=new Blob([e],{type:"image/gif"}),this.emit("finished",n,e)},n.prototype.renderNextFrame=function(){var e,t,i;if(0===this.freeWorkers.length)throw Error("No free workers");if(!(this.nextFrame>=this.frames.length))return e=this.frames[this.nextFrame++],i=this.freeWorkers.shift(),t=this.getTask(e),this.log("starting frame "+(t.index+1)+" of "+this.frames.length),this.activeWorkers.push(i),i.postMessage(t)},n.prototype.getContextData=function(e){return e.getImageData(0,0,this.options.width,this.options.height).data},n.prototype.getImageData=function(e){var t;return null==this._canvas&&(this._canvas=document.createElement("canvas"),this._canvas.width=this.options.width,this._canvas.height=this.options.height),(t=this._canvas.getContext("2d")).setFill=this.options.background,t.fillRect(0,0,this.options.width,this.options.height),t.drawImage(e,0,0),this.getContextData(t)},n.prototype.getTask=function(e){var t,i;if(i={index:t=this.frames.indexOf(e),last:t===this.frames.length-1,delay:e.delay,transparent:e.transparent,width:this.options.width,height:this.options.height,quality:this.options.quality,dither:this.options.dither,globalPalette:this.options.globalPalette,repeat:this.options.repeat,canTransfer:"chrome"===s.name},null!=e.data)i.data=e.data;else if(null!=e.context)i.data=this.getContextData(e.context);else if(null!=e.image)i.data=this.getImageData(e.image);else throw Error("Invalid frame");return i},n.prototype.log=function(){var e;if(e=1<=arguments.length?l.call(arguments,0):[],this.options.debug)return console.log.apply(console,e)},n}(n),t.exports=r},{"./browser.coffee":2,events:1}]},{},[3])(3)},e.exports=t()}}]);
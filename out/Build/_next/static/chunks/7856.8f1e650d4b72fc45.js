(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7856],
    {
        27856: function (e) {
            var t;
            (t = function () {
                "use strict";
                let { entries: e, setPrototypeOf: t, isFrozen: n, getPrototypeOf: o, getOwnPropertyDescriptor: r } = Object,
                    { freeze: i, seal: a, create: l } = Object,
                    { apply: c, construct: s } = "undefined" != typeof Reflect && Reflect;
                i ||
                    (i = function (e) {
                        return e;
                    }),
                    a ||
                    (a = function (e) {
                        return e;
                    }),
                    c ||
                    (c = function (e, t, n) {
                        return e.apply(t, n);
                    }),
                    s ||
                    (s = function (e, t) {
                        return new e(...t);
                    });
                let u = N(Array.prototype.forEach),
                    m = N(Array.prototype.pop),
                    p = N(Array.prototype.push),
                    f = N(String.prototype.toLowerCase),
                    d = N(String.prototype.toString),
                    h = N(String.prototype.match),
                    g = N(String.prototype.replace),
                    _ = N(String.prototype.indexOf),
                    y = N(String.prototype.trim),
                    T = N(Object.prototype.hasOwnProperty),
                    E = N(RegExp.prototype.test),
                    A =
                        ((X = TypeError),
                            function () {
                                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                                return s(X, t);
                            }),
                    b = N(Number.isNaN);
                function N(e) {
                    return function (t) {
                        for (var n = arguments.length, o = Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) o[r - 1] = arguments[r];
                        return c(e, t, o);
                    };
                }
                function S(e, o) {
                    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : f;
                    t && t(e, null);
                    let i = o.length;
                    for (; i--;) {
                        let t = o[i];
                        if ("string" == typeof t) {
                            let e = r(t);
                            e !== t && (n(o) || (o[i] = e), (t = e));
                        }
                        e[t] = !0;
                    }
                    return e;
                }
                function w(t) {
                    let n = l(null);
                    for (let [o, r] of e(t))
                        T(t, o) &&
                            (Array.isArray(r)
                                ? (n[o] = (function (e) {
                                    for (let t = 0; t < e.length; t++) T(e, t) || (e[t] = null);
                                    return e;
                                })(r))
                                : r && "object" == typeof r && r.constructor === Object
                                    ? (n[o] = w(r))
                                    : (n[o] = r));
                    return n;
                }
                function C(e, t) {
                    for (; null !== e;) {
                        let n = r(e, t);
                        if (n) {
                            if (n.get) return N(n.get);
                            if ("function" == typeof n.value) return N(n.value);
                        }
                        e = o(e);
                    }
                    return function () {
                        return null;
                    };
                }
                let v = i([
                    "a",
                    "abbr",
                    "acronym",
                    "address",
                    "area",
                    "article",
                    "aside",
                    "audio",
                    "b",
                    "bdi",
                    "bdo",
                    "big",
                    "blink",
                    "blockquote",
                    "body",
                    "br",
                    "button",
                    "canvas",
                    "caption",
                    "center",
                    "cite",
                    "code",
                    "col",
                    "colgroup",
                    "content",
                    "data",
                    "datalist",
                    "dd",
                    "decorator",
                    "del",
                    "details",
                    "dfn",
                    "dialog",
                    "dir",
                    "div",
                    "dl",
                    "dt",
                    "element",
                    "em",
                    "fieldset",
                    "figcaption",
                    "figure",
                    "font",
                    "footer",
                    "form",
                    "h1",
                    "h2",
                    "h3",
                    "h4",
                    "h5",
                    "h6",
                    "head",
                    "header",
                    "hgroup",
                    "hr",
                    "html",
                    "i",
                    "img",
                    "input",
                    "ins",
                    "kbd",
                    "label",
                    "legend",
                    "li",
                    "main",
                    "map",
                    "mark",
                    "marquee",
                    "menu",
                    "menuitem",
                    "meter",
                    "nav",
                    "nobr",
                    "ol",
                    "optgroup",
                    "option",
                    "output",
                    "p",
                    "picture",
                    "pre",
                    "progress",
                    "q",
                    "rp",
                    "rt",
                    "ruby",
                    "s",
                    "samp",
                    "section",
                    "select",
                    "shadow",
                    "small",
                    "source",
                    "spacer",
                    "span",
                    "strike",
                    "strong",
                    "style",
                    "sub",
                    "summary",
                    "sup",
                    "table",
                    "tbody",
                    "td",
                    "template",
                    "textarea",
                    "tfoot",
                    "th",
                    "thead",
                    "time",
                    "tr",
                    "track",
                    "tt",
                    "u",
                    "ul",
                    "var",
                    "video",
                    "wbr",
                ]),
                    R = i([
                        "svg",
                        "a",
                        "altglyph",
                        "altglyphdef",
                        "altglyphitem",
                        "animatecolor",
                        "animatemotion",
                        "animatetransform",
                        "circle",
                        "clippath",
                        "defs",
                        "desc",
                        "ellipse",
                        "filter",
                        "font",
                        "g",
                        "glyph",
                        "glyphref",
                        "hkern",
                        "image",
                        "line",
                        "lineargradient",
                        "marker",
                        "mask",
                        "metadata",
                        "mpath",
                        "path",
                        "pattern",
                        "polygon",
                        "polyline",
                        "radialgradient",
                        "rect",
                        "stop",
                        "style",
                        "switch",
                        "symbol",
                        "text",
                        "textpath",
                        "title",
                        "tref",
                        "tspan",
                        "view",
                        "vkern",
                    ]),
                    L = i([
                        "feBlend",
                        "feColorMatrix",
                        "feComponentTransfer",
                        "feComposite",
                        "feConvolveMatrix",
                        "feDiffuseLighting",
                        "feDisplacementMap",
                        "feDistantLight",
                        "feDropShadow",
                        "feFlood",
                        "feFuncA",
                        "feFuncB",
                        "feFuncG",
                        "feFuncR",
                        "feGaussianBlur",
                        "feImage",
                        "feMerge",
                        "feMergeNode",
                        "feMorphology",
                        "feOffset",
                        "fePointLight",
                        "feSpecularLighting",
                        "feSpotLight",
                        "feTile",
                        "feTurbulence",
                    ]),
                    k = i([
                        "animate",
                        "color-profile",
                        "cursor",
                        "discard",
                        "font-face",
                        "font-face-format",
                        "font-face-name",
                        "font-face-src",
                        "font-face-uri",
                        "foreignobject",
                        "hatch",
                        "hatchpath",
                        "mesh",
                        "meshgradient",
                        "meshpatch",
                        "meshrow",
                        "missing-glyph",
                        "script",
                        "set",
                        "solidcolor",
                        "unknown",
                        "use",
                    ]),
                    D = i([
                        "math",
                        "menclose",
                        "merror",
                        "mfenced",
                        "mfrac",
                        "mglyph",
                        "mi",
                        "mlabeledtr",
                        "mmultiscripts",
                        "mn",
                        "mo",
                        "mover",
                        "mpadded",
                        "mphantom",
                        "mroot",
                        "mrow",
                        "ms",
                        "mspace",
                        "msqrt",
                        "mstyle",
                        "msub",
                        "msup",
                        "msubsup",
                        "mtable",
                        "mtd",
                        "mtext",
                        "mtr",
                        "munder",
                        "munderover",
                        "mprescripts",
                    ]),
                    x = i(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]),
                    O = i(["#text"]),
                    I = i([
                        "accept",
                        "action",
                        "align",
                        "alt",
                        "autocapitalize",
                        "autocomplete",
                        "autopictureinpicture",
                        "autoplay",
                        "background",
                        "bgcolor",
                        "border",
                        "capture",
                        "cellpadding",
                        "cellspacing",
                        "checked",
                        "cite",
                        "class",
                        "clear",
                        "color",
                        "cols",
                        "colspan",
                        "controls",
                        "controlslist",
                        "coords",
                        "crossorigin",
                        "datetime",
                        "decoding",
                        "default",
                        "dir",
                        "disabled",
                        "disablepictureinpicture",
                        "disableremoteplayback",
                        "download",
                        "draggable",
                        "enctype",
                        "enterkeyhint",
                        "face",
                        "for",
                        "headers",
                        "height",
                        "hidden",
                        "high",
                        "href",
                        "hreflang",
                        "id",
                        "inputmode",
                        "integrity",
                        "ismap",
                        "kind",
                        "label",
                        "lang",
                        "list",
                        "loading",
                        "loop",
                        "low",
                        "max",
                        "maxlength",
                        "media",
                        "method",
                        "min",
                        "minlength",
                        "multiple",
                        "muted",
                        "name",
                        "nonce",
                        "noshade",
                        "novalidate",
                        "nowrap",
                        "open",
                        "optimum",
                        "pattern",
                        "placeholder",
                        "playsinline",
                        "poster",
                        "preload",
                        "pubdate",
                        "radiogroup",
                        "readonly",
                        "rel",
                        "required",
                        "rev",
                        "reversed",
                        "role",
                        "rows",
                        "rowspan",
                        "spellcheck",
                        "scope",
                        "selected",
                        "shape",
                        "size",
                        "sizes",
                        "span",
                        "srclang",
                        "start",
                        "src",
                        "srcset",
                        "step",
                        "style",
                        "summary",
                        "tabindex",
                        "title",
                        "translate",
                        "type",
                        "usemap",
                        "valign",
                        "value",
                        "width",
                        "wrap",
                        "xmlns",
                        "slot",
                    ]),
                    M = i([
                        "accent-height",
                        "accumulate",
                        "additive",
                        "alignment-baseline",
                        "ascent",
                        "attributename",
                        "attributetype",
                        "azimuth",
                        "basefrequency",
                        "baseline-shift",
                        "begin",
                        "bias",
                        "by",
                        "class",
                        "clip",
                        "clippathunits",
                        "clip-path",
                        "clip-rule",
                        "color",
                        "color-interpolation",
                        "color-interpolation-filters",
                        "color-profile",
                        "color-rendering",
                        "cx",
                        "cy",
                        "d",
                        "dx",
                        "dy",
                        "diffuseconstant",
                        "direction",
                        "display",
                        "divisor",
                        "dur",
                        "edgemode",
                        "elevation",
                        "end",
                        "fill",
                        "fill-opacity",
                        "fill-rule",
                        "filter",
                        "filterunits",
                        "flood-color",
                        "flood-opacity",
                        "font-family",
                        "font-size",
                        "font-size-adjust",
                        "font-stretch",
                        "font-style",
                        "font-variant",
                        "font-weight",
                        "fx",
                        "fy",
                        "g1",
                        "g2",
                        "glyph-name",
                        "glyphref",
                        "gradientunits",
                        "gradienttransform",
                        "height",
                        "href",
                        "id",
                        "image-rendering",
                        "in",
                        "in2",
                        "k",
                        "k1",
                        "k2",
                        "k3",
                        "k4",
                        "kerning",
                        "keypoints",
                        "keysplines",
                        "keytimes",
                        "lang",
                        "lengthadjust",
                        "letter-spacing",
                        "kernelmatrix",
                        "kernelunitlength",
                        "lighting-color",
                        "local",
                        "marker-end",
                        "marker-mid",
                        "marker-start",
                        "markerheight",
                        "markerunits",
                        "markerwidth",
                        "maskcontentunits",
                        "maskunits",
                        "max",
                        "mask",
                        "media",
                        "method",
                        "mode",
                        "min",
                        "name",
                        "numoctaves",
                        "offset",
                        "operator",
                        "opacity",
                        "order",
                        "orient",
                        "orientation",
                        "origin",
                        "overflow",
                        "paint-order",
                        "path",
                        "pathlength",
                        "patterncontentunits",
                        "patterntransform",
                        "patternunits",
                        "points",
                        "preservealpha",
                        "preserveaspectratio",
                        "primitiveunits",
                        "r",
                        "rx",
                        "ry",
                        "radius",
                        "refx",
                        "refy",
                        "repeatcount",
                        "repeatdur",
                        "restart",
                        "result",
                        "rotate",
                        "scale",
                        "seed",
                        "shape-rendering",
                        "specularconstant",
                        "specularexponent",
                        "spreadmethod",
                        "startoffset",
                        "stddeviation",
                        "stitchtiles",
                        "stop-color",
                        "stop-opacity",
                        "stroke-dasharray",
                        "stroke-dashoffset",
                        "stroke-linecap",
                        "stroke-linejoin",
                        "stroke-miterlimit",
                        "stroke-opacity",
                        "stroke",
                        "stroke-width",
                        "style",
                        "surfacescale",
                        "systemlanguage",
                        "tabindex",
                        "targetx",
                        "targety",
                        "transform",
                        "transform-origin",
                        "text-anchor",
                        "text-decoration",
                        "text-rendering",
                        "textlength",
                        "type",
                        "u1",
                        "u2",
                        "unicode",
                        "values",
                        "viewbox",
                        "visibility",
                        "version",
                        "vert-adv-y",
                        "vert-origin-x",
                        "vert-origin-y",
                        "width",
                        "word-spacing",
                        "wrap",
                        "writing-mode",
                        "xchannelselector",
                        "ychannelselector",
                        "x",
                        "x1",
                        "x2",
                        "xmlns",
                        "y",
                        "y1",
                        "y2",
                        "z",
                        "zoomandpan",
                    ]),
                    U = i([
                        "accent",
                        "accentunder",
                        "align",
                        "bevelled",
                        "close",
                        "columnsalign",
                        "columnlines",
                        "columnspan",
                        "denomalign",
                        "depth",
                        "dir",
                        "display",
                        "displaystyle",
                        "encoding",
                        "fence",
                        "frame",
                        "height",
                        "href",
                        "id",
                        "largeop",
                        "length",
                        "linethickness",
                        "lspace",
                        "lquote",
                        "mathbackground",
                        "mathcolor",
                        "mathsize",
                        "mathvariant",
                        "maxsize",
                        "minsize",
                        "movablelimits",
                        "notation",
                        "numalign",
                        "open",
                        "rowalign",
                        "rowlines",
                        "rowspacing",
                        "rowspan",
                        "rspace",
                        "rquote",
                        "scriptlevel",
                        "scriptminsize",
                        "scriptsizemultiplier",
                        "selection",
                        "separator",
                        "separators",
                        "stretchy",
                        "subscriptshift",
                        "supscriptshift",
                        "symmetric",
                        "voffset",
                        "width",
                        "xmlns",
                    ]),
                    P = i(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]),
                    H = a(/\{\{[\w\W]*|[\w\W]*\}\}/gm),
                    F = a(/<%[\w\W]*|[\w\W]*%>/gm),
                    z = a(/\${[\w\W]*}/gm),
                    W = a(/^data-[\-\w.\u00B7-\uFFFF]/),
                    B = a(/^aria-[\-\w]+$/),
                    G = a(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),
                    Y = a(/^(?:\w+script|data):/i),
                    j = a(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
                    q = a(/^html$/i);
                var X,
                    $ = Object.freeze({
                        __proto__: null,
                        MUSTACHE_EXPR: H,
                        ERB_EXPR: F,
                        TMPLIT_EXPR: z,
                        DATA_ATTR: W,
                        ARIA_ATTR: B,
                        IS_ALLOWED_URI: G,
                        IS_SCRIPT_OR_DATA: Y,
                        ATTR_WHITESPACE: j,
                        DOCTYPE_NAME: q,
                        CUSTOM_ELEMENT: a(/^[a-z][.\w]*(-[.\w]+)+$/i),
                    });
                let K = { element: 1, text: 3, progressingInstruction: 7, comment: 8, document: 9 },
                    V = function (e, t) {
                        if ("object" != typeof e || "function" != typeof e.createPolicy) return null;
                        let n = null,
                            o = "data-tt-policy-suffix";
                        t && t.hasAttribute(o) && (n = t.getAttribute(o));
                        let r = "dompurify" + (n ? "#" + n : "");
                        try {
                            return e.createPolicy(r, { createHTML: (e) => e, createScriptURL: (e) => e });
                        } catch (e) {
                            return console.warn("TrustedTypes policy " + r + " could not be created."), null;
                        }
                    };
                return (function t() {
                    let n,
                        o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "undefined" == typeof window ? null : window,
                        r = (e) => t(e);
                    if (((r.version = "3.1.3"), (r.removed = []), !o || !o.document || o.document.nodeType !== K.document)) return (r.isSupported = !1), r;
                    let { document: a } = o,
                        c = a,
                        s = c.currentScript,
                        { DocumentFragment: N, HTMLTemplateElement: H, Node: F, Element: z, NodeFilter: W, NamedNodeMap: B = o.NamedNodeMap || o.MozNamedAttrMap, HTMLFormElement: Y, DOMParser: j, trustedTypes: X } = o,
                        Z = z.prototype,
                        J = C(Z, "cloneNode"),
                        Q = C(Z, "nextSibling"),
                        ee = C(Z, "childNodes"),
                        et = C(Z, "parentNode");
                    if ("function" == typeof H) {
                        let e = a.createElement("template");
                        e.content && e.content.ownerDocument && (a = e.content.ownerDocument);
                    }
                    let en = "",
                        { implementation: eo, createNodeIterator: er, createDocumentFragment: ei, getElementsByTagName: ea } = a,
                        { importNode: el } = c,
                        ec = {};
                    r.isSupported = "function" == typeof e && "function" == typeof et && eo && void 0 !== eo.createHTMLDocument;
                    let { MUSTACHE_EXPR: es, ERB_EXPR: eu, TMPLIT_EXPR: em, DATA_ATTR: ep, ARIA_ATTR: ef, IS_SCRIPT_OR_DATA: ed, ATTR_WHITESPACE: eh, CUSTOM_ELEMENT: eg } = $,
                        { IS_ALLOWED_URI: e_ } = $,
                        ey = null,
                        eT = S({}, [...v, ...R, ...L, ...D, ...O]),
                        eE = null,
                        eA = S({}, [...I, ...M, ...U, ...P]),
                        eb = Object.seal(
                            l(null, {
                                tagNameCheck: { writable: !0, configurable: !1, enumerable: !0, value: null },
                                attributeNameCheck: { writable: !0, configurable: !1, enumerable: !0, value: null },
                                allowCustomizedBuiltInElements: { writable: !0, configurable: !1, enumerable: !0, value: !1 },
                            })
                        ),
                        eN = null,
                        eS = null,
                        ew = !0,
                        eC = !0,
                        ev = !1,
                        eR = !0,
                        eL = !1,
                        ek = !0,
                        eD = !1,
                        ex = !1,
                        eO = !1,
                        eI = !1,
                        eM = !1,
                        eU = !1,
                        eP = !0,
                        eH = !1,
                        eF = !0,
                        ez = !1,
                        eW = {},
                        eB = null,
                        eG = S({}, [
                            "annotation-xml",
                            "audio",
                            "colgroup",
                            "desc",
                            "foreignobject",
                            "head",
                            "iframe",
                            "math",
                            "mi",
                            "mn",
                            "mo",
                            "ms",
                            "mtext",
                            "noembed",
                            "noframes",
                            "noscript",
                            "plaintext",
                            "script",
                            "style",
                            "svg",
                            "template",
                            "thead",
                            "title",
                            "video",
                            "xmp",
                        ]),
                        eY = null,
                        ej = S({}, ["audio", "video", "img", "source", "image", "track"]),
                        eq = null,
                        eX = S({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]),
                        e$ = "http://www.w3.org/1998/Math/MathML",
                        eK = "http://www.w3.org/2000/svg",
                        eV = "http://www.w3.org/1999/xhtml",
                        eZ = eV,
                        eJ = !1,
                        eQ = null,
                        e0 = S({}, [e$, eK, eV], d),
                        e1 = null,
                        e2 = ["application/xhtml+xml", "text/html"],
                        e3 = null,
                        e9 = null,
                        e5 = a.createElement("form"),
                        e8 = function (e) {
                            return e instanceof RegExp || e instanceof Function;
                        },
                        e6 = function () {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            if (!e9 || e9 !== e) {
                                if (
                                    ((e && "object" == typeof e) || (e = {}),
                                        (e = w(e)),
                                        (e3 = "application/xhtml+xml" === (e1 = -1 === e2.indexOf(e.PARSER_MEDIA_TYPE) ? "text/html" : e.PARSER_MEDIA_TYPE) ? d : f),
                                        (ey = T(e, "ALLOWED_TAGS") ? S({}, e.ALLOWED_TAGS, e3) : eT),
                                        (eE = T(e, "ALLOWED_ATTR") ? S({}, e.ALLOWED_ATTR, e3) : eA),
                                        (eQ = T(e, "ALLOWED_NAMESPACES") ? S({}, e.ALLOWED_NAMESPACES, d) : e0),
                                        (eq = T(e, "ADD_URI_SAFE_ATTR") ? S(w(eX), e.ADD_URI_SAFE_ATTR, e3) : eX),
                                        (eY = T(e, "ADD_DATA_URI_TAGS") ? S(w(ej), e.ADD_DATA_URI_TAGS, e3) : ej),
                                        (eB = T(e, "FORBID_CONTENTS") ? S({}, e.FORBID_CONTENTS, e3) : eG),
                                        (eN = T(e, "FORBID_TAGS") ? S({}, e.FORBID_TAGS, e3) : {}),
                                        (eS = T(e, "FORBID_ATTR") ? S({}, e.FORBID_ATTR, e3) : {}),
                                        (eW = !!T(e, "USE_PROFILES") && e.USE_PROFILES),
                                        (ew = !1 !== e.ALLOW_ARIA_ATTR),
                                        (eC = !1 !== e.ALLOW_DATA_ATTR),
                                        (ev = e.ALLOW_UNKNOWN_PROTOCOLS || !1),
                                        (eR = !1 !== e.ALLOW_SELF_CLOSE_IN_ATTR),
                                        (eL = e.SAFE_FOR_TEMPLATES || !1),
                                        (ek = !1 !== e.SAFE_FOR_XML),
                                        (eD = e.WHOLE_DOCUMENT || !1),
                                        (eI = e.RETURN_DOM || !1),
                                        (eM = e.RETURN_DOM_FRAGMENT || !1),
                                        (eU = e.RETURN_TRUSTED_TYPE || !1),
                                        (eO = e.FORCE_BODY || !1),
                                        (eP = !1 !== e.SANITIZE_DOM),
                                        (eH = e.SANITIZE_NAMED_PROPS || !1),
                                        (eF = !1 !== e.KEEP_CONTENT),
                                        (ez = e.IN_PLACE || !1),
                                        (e_ = e.ALLOWED_URI_REGEXP || G),
                                        (eZ = e.NAMESPACE || eV),
                                        (eb = e.CUSTOM_ELEMENT_HANDLING || {}),
                                        e.CUSTOM_ELEMENT_HANDLING && e8(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (eb.tagNameCheck = e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),
                                        e.CUSTOM_ELEMENT_HANDLING && e8(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (eb.attributeNameCheck = e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),
                                        e.CUSTOM_ELEMENT_HANDLING && "boolean" == typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements && (eb.allowCustomizedBuiltInElements = e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),
                                        eL && (eC = !1),
                                        eM && (eI = !0),
                                        eW &&
                                        ((ey = S({}, O)),
                                            (eE = []),
                                            !0 === eW.html && (S(ey, v), S(eE, I)),
                                            !0 === eW.svg && (S(ey, R), S(eE, M), S(eE, P)),
                                            !0 === eW.svgFilters && (S(ey, L), S(eE, M), S(eE, P)),
                                            !0 === eW.mathMl && (S(ey, D), S(eE, U), S(eE, P))),
                                        e.ADD_TAGS && (ey === eT && (ey = w(ey)), S(ey, e.ADD_TAGS, e3)),
                                        e.ADD_ATTR && (eE === eA && (eE = w(eE)), S(eE, e.ADD_ATTR, e3)),
                                        e.ADD_URI_SAFE_ATTR && S(eq, e.ADD_URI_SAFE_ATTR, e3),
                                        e.FORBID_CONTENTS && (eB === eG && (eB = w(eB)), S(eB, e.FORBID_CONTENTS, e3)),
                                        eF && (ey["#text"] = !0),
                                        eD && S(ey, ["html", "head", "body"]),
                                        ey.table && (S(ey, ["tbody"]), delete eN.tbody),
                                        e.TRUSTED_TYPES_POLICY)
                                ) {
                                    if ("function" != typeof e.TRUSTED_TYPES_POLICY.createHTML) throw A('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
                                    if ("function" != typeof e.TRUSTED_TYPES_POLICY.createScriptURL) throw A('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
                                    en = (n = e.TRUSTED_TYPES_POLICY).createHTML("");
                                } else void 0 === n && (n = V(X, s)), null !== n && "string" == typeof en && (en = n.createHTML(""));
                                i && i(e), (e9 = e);
                            }
                        },
                        e7 = S({}, ["mi", "mo", "mn", "ms", "mtext"]),
                        e4 = S({}, ["foreignobject", "annotation-xml"]),
                        te = S({}, ["title", "style", "font", "a", "script"]),
                        tt = S({}, [...R, ...L, ...k]),
                        tn = S({}, [...D, ...x]),
                        to = function (e) {
                            let t = et(e);
                            (t && t.tagName) || (t = { namespaceURI: eZ, tagName: "template" });
                            let n = f(e.tagName),
                                o = f(t.tagName);
                            return (
                                !!eQ[e.namespaceURI] &&
                                (e.namespaceURI === eK
                                    ? t.namespaceURI === eV
                                        ? "svg" === n
                                        : t.namespaceURI === e$
                                            ? "svg" === n && ("annotation-xml" === o || e7[o])
                                            : !!tt[n]
                                    : e.namespaceURI === e$
                                        ? t.namespaceURI === eV
                                            ? "math" === n
                                            : t.namespaceURI === eK
                                                ? "math" === n && e4[o]
                                                : !!tn[n]
                                        : e.namespaceURI === eV
                                            ? (t.namespaceURI !== eK || !!e4[o]) && (t.namespaceURI !== e$ || !!e7[o]) && !tn[n] && (te[n] || !tt[n])
                                            : "application/xhtml+xml" === e1 && !!eQ[e.namespaceURI])
                            );
                        },
                        tr = function (e) {
                            p(r.removed, { element: e });
                            try {
                                e.parentNode.removeChild(e);
                            } catch (t) {
                                e.remove();
                            }
                        },
                        ti = function (e, t) {
                            try {
                                p(r.removed, { attribute: t.getAttributeNode(e), from: t });
                            } catch (e) {
                                p(r.removed, { attribute: null, from: t });
                            }
                            if ((t.removeAttribute(e), "is" === e && !eE[e])) {
                                if (eI || eM)
                                    try {
                                        tr(t);
                                    } catch (e) { }
                                else
                                    try {
                                        t.setAttribute(e, "");
                                    } catch (e) { }
                            }
                        },
                        ta = function (e) {
                            let t = null,
                                o = null;
                            if (eO) e = "<remove></remove>" + e;
                            else {
                                let t = h(e, /^[\r\n\t ]+/);
                                o = t && t[0];
                            }
                            "application/xhtml+xml" === e1 && eZ === eV && (e = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + e + "</body></html>");
                            let r = n ? n.createHTML(e) : e;
                            if (eZ === eV)
                                try {
                                    t = new j().parseFromString(r, e1);
                                } catch (e) { }
                            if (!t || !t.documentElement) {
                                t = eo.createDocument(eZ, "template", null);
                                try {
                                    t.documentElement.innerHTML = eJ ? en : r;
                                } catch (e) { }
                            }
                            let i = t.body || t.documentElement;
                            return (e && o && i.insertBefore(a.createTextNode(o), i.childNodes[0] || null), eZ === eV) ? ea.call(t, eD ? "html" : "body")[0] : eD ? t.documentElement : i;
                        },
                        tl = function (e) {
                            return er.call(e.ownerDocument || e, e, W.SHOW_ELEMENT | W.SHOW_COMMENT | W.SHOW_TEXT | W.SHOW_PROCESSING_INSTRUCTION | W.SHOW_CDATA_SECTION, null);
                        },
                        tc = function (e) {
                            return (
                                e instanceof Y &&
                                ((void 0 !== e.__depth && "number" != typeof e.__depth) ||
                                    (void 0 !== e.__removalCount && "number" != typeof e.__removalCount) ||
                                    "string" != typeof e.nodeName ||
                                    "string" != typeof e.textContent ||
                                    "function" != typeof e.removeChild ||
                                    !(e.attributes instanceof B) ||
                                    "function" != typeof e.removeAttribute ||
                                    "function" != typeof e.setAttribute ||
                                    "string" != typeof e.namespaceURI ||
                                    "function" != typeof e.insertBefore ||
                                    "function" != typeof e.hasChildNodes)
                            );
                        },
                        ts = function (e) {
                            return "function" == typeof F && e instanceof F;
                        },
                        tu = function (e, t, n) {
                            ec[e] &&
                                u(ec[e], (e) => {
                                    e.call(r, t, n, e9);
                                });
                        },
                        tm = function (e) {
                            let t = null;
                            if ((tu("beforeSanitizeElements", e, null), tc(e))) return tr(e), !0;
                            let n = e3(e.nodeName);
                            if (
                                (tu("uponSanitizeElement", e, { tagName: n, allowedTags: ey }),
                                    (e.hasChildNodes() && !ts(e.firstElementChild) && E(/<[/\w]/g, e.innerHTML) && E(/<[/\w]/g, e.textContent)) ||
                                    e.nodeType === K.progressingInstruction ||
                                    (ek && e.nodeType === K.comment && E(/<[/\w]/g, e.data)))
                            )
                                return tr(e), !0;
                            if (!ey[n] || eN[n]) {
                                if (!eN[n] && tf(n) && ((eb.tagNameCheck instanceof RegExp && E(eb.tagNameCheck, n)) || (eb.tagNameCheck instanceof Function && eb.tagNameCheck(n)))) return !1;
                                if (eF && !eB[n]) {
                                    let t = et(e) || e.parentNode,
                                        n = ee(e) || e.childNodes;
                                    if (n && t) {
                                        let o = n.length;
                                        for (let r = o - 1; r >= 0; --r) {
                                            let o = J(n[r], !0);
                                            (o.__removalCount = (e.__removalCount || 0) + 1), t.insertBefore(o, Q(e));
                                        }
                                    }
                                }
                                return tr(e), !0;
                            }
                            return (e instanceof z && !to(e)) || (("noscript" === n || "noembed" === n || "noframes" === n) && E(/<\/no(script|embed|frames)/i, e.innerHTML))
                                ? (tr(e), !0)
                                : (eL &&
                                    e.nodeType === K.text &&
                                    ((t = e.textContent),
                                        u([es, eu, em], (e) => {
                                            t = g(t, e, " ");
                                        }),
                                        e.textContent !== t && (p(r.removed, { element: e.cloneNode() }), (e.textContent = t))),
                                    tu("afterSanitizeElements", e, null),
                                    !1);
                        },
                        tp = function (e, t, n) {
                            if (eP && ("id" === t || "name" === t) && (n in a || n in e5 || "__depth" === n || "__removalCount" === n)) return !1;
                            if (eC && !eS[t] && E(ep, t));
                            else if (ew && E(ef, t));
                            else if (!eE[t] || eS[t]) {
                                if (
                                    !(
                                        (tf(e) &&
                                            ((eb.tagNameCheck instanceof RegExp && E(eb.tagNameCheck, e)) || (eb.tagNameCheck instanceof Function && eb.tagNameCheck(e))) &&
                                            ((eb.attributeNameCheck instanceof RegExp && E(eb.attributeNameCheck, t)) || (eb.attributeNameCheck instanceof Function && eb.attributeNameCheck(t)))) ||
                                        ("is" === t && eb.allowCustomizedBuiltInElements && ((eb.tagNameCheck instanceof RegExp && E(eb.tagNameCheck, n)) || (eb.tagNameCheck instanceof Function && eb.tagNameCheck(n))))
                                    )
                                )
                                    return !1;
                            } else if (eq[t]);
                            else if (E(e_, g(n, eh, "")));
                            else if (("src" === t || "xlink:href" === t || "href" === t) && "script" !== e && 0 === _(n, "data:") && eY[e]);
                            else if (ev && !E(ed, g(n, eh, "")));
                            else if (n) return !1;
                            return !0;
                        },
                        tf = function (e) {
                            return "annotation-xml" !== e && h(e, eg);
                        },
                        td = function (e) {
                            tu("beforeSanitizeAttributes", e, null);
                            let { attributes: t } = e;
                            if (!t) return;
                            let o = { attrName: "", attrValue: "", keepAttr: !0, allowedAttributes: eE },
                                i = t.length;
                            for (; i--;) {
                                let { name: a, namespaceURI: l, value: c } = t[i],
                                    s = e3(a),
                                    p = "value" === a ? c : y(c);
                                if (((o.attrName = s), (o.attrValue = p), (o.keepAttr = !0), (o.forceKeepAttr = void 0), tu("uponSanitizeAttribute", e, o), (p = o.attrValue), o.forceKeepAttr || (ti(a, e), !o.keepAttr))) continue;
                                if ((!eR && E(/\/>/i, p)) || (ek && E(/((--!?|])>)|<\/(style|title)/i, p))) {
                                    ti(a, e);
                                    continue;
                                }
                                eL &&
                                    u([es, eu, em], (e) => {
                                        p = g(p, e, " ");
                                    });
                                let f = e3(e.nodeName);
                                if (tp(f, s, p)) {
                                    if ((eH && ("id" === s || "name" === s) && (ti(a, e), (p = "user-content-" + p)), n && "object" == typeof X && "function" == typeof X.getAttributeType)) {
                                        if (l);
                                        else
                                            switch (X.getAttributeType(f, s)) {
                                                case "TrustedHTML":
                                                    p = n.createHTML(p);
                                                    break;
                                                case "TrustedScriptURL":
                                                    p = n.createScriptURL(p);
                                            }
                                    }
                                    try {
                                        l ? e.setAttributeNS(l, a, p) : e.setAttribute(a, p), tc(e) ? tr(e) : m(r.removed);
                                    } catch (e) { }
                                }
                            }
                            tu("afterSanitizeAttributes", e, null);
                        },
                        th = function e(t) {
                            let n = null,
                                o = tl(t);
                            for (tu("beforeSanitizeShadowDOM", t, null); (n = o.nextNode());) {
                                if ((tu("uponSanitizeShadowNode", n, null), tm(n))) continue;
                                let t = et(n);
                                n.nodeType === K.element && (t && t.__depth ? (n.__depth = (n.__removalCount || 0) + t.__depth + 1) : (n.__depth = 1)),
                                    (n.__depth >= 255 || n.__depth < 0 || b(n.__depth)) && tr(n),
                                    n.content instanceof N && ((n.content.__depth = n.__depth), e(n.content)),
                                    td(n);
                            }
                            tu("afterSanitizeShadowDOM", t, null);
                        };
                    return (
                        (r.sanitize = function (e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                o = null,
                                i = null,
                                a = null,
                                l = null;
                            if (((eJ = !e) && (e = "<!-->"), "string" != typeof e && !ts(e))) {
                                if ("function" == typeof e.toString) {
                                    if ("string" != typeof (e = e.toString())) throw A("dirty is not a string, aborting");
                                } else throw A("toString is not a function");
                            }
                            if (!r.isSupported) return e;
                            if ((ex || e6(t), (r.removed = []), "string" == typeof e && (ez = !1), ez)) {
                                if (e.nodeName) {
                                    let t = e3(e.nodeName);
                                    if (!ey[t] || eN[t]) throw A("root node is forbidden and cannot be sanitized in-place");
                                }
                            } else if (e instanceof F) (i = (o = ta("<!---->")).ownerDocument.importNode(e, !0)).nodeType === K.element && "BODY" === i.nodeName ? (o = i) : "HTML" === i.nodeName ? (o = i) : o.appendChild(i);
                            else {
                                if (!eI && !eL && !eD && -1 === e.indexOf("<")) return n && eU ? n.createHTML(e) : e;
                                if (!(o = ta(e))) return eI ? null : eU ? en : "";
                            }
                            o && eO && tr(o.firstChild);
                            let s = tl(ez ? e : o);
                            for (; (a = s.nextNode());) {
                                if (tm(a)) continue;
                                let e = et(a);
                                a.nodeType === K.element && (e && e.__depth ? (a.__depth = (a.__removalCount || 0) + e.__depth + 1) : (a.__depth = 1)),
                                    (a.__depth >= 255 || a.__depth < 0 || b(a.__depth)) && tr(a),
                                    a.content instanceof N && ((a.content.__depth = a.__depth), th(a.content)),
                                    td(a);
                            }
                            if (ez) return e;
                            if (eI) {
                                if (eM) for (l = ei.call(o.ownerDocument); o.firstChild;) l.appendChild(o.firstChild);
                                else l = o;
                                return (eE.shadowroot || eE.shadowrootmode) && (l = el.call(c, l, !0)), l;
                            }
                            let m = eD ? o.outerHTML : o.innerHTML;
                            return (
                                eD && ey["!doctype"] && o.ownerDocument && o.ownerDocument.doctype && o.ownerDocument.doctype.name && E(q, o.ownerDocument.doctype.name) && (m = "<!DOCTYPE " + o.ownerDocument.doctype.name + ">\n" + m),
                                eL &&
                                u([es, eu, em], (e) => {
                                    m = g(m, e, " ");
                                }),
                                n && eU ? n.createHTML(m) : m
                            );
                        }),
                        (r.setConfig = function () {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            e6(e), (ex = !0);
                        }),
                        (r.clearConfig = function () {
                            (e9 = null), (ex = !1);
                        }),
                        (r.isValidAttribute = function (e, t, n) {
                            return e9 || e6({}), tp(e3(e), e3(t), n);
                        }),
                        (r.addHook = function (e, t) {
                            "function" == typeof t && ((ec[e] = ec[e] || []), p(ec[e], t));
                        }),
                        (r.removeHook = function (e) {
                            if (ec[e]) return m(ec[e]);
                        }),
                        (r.removeHooks = function (e) {
                            ec[e] && (ec[e] = []);
                        }),
                        (r.removeAllHooks = function () {
                            ec = {};
                        }),
                        r
                    );
                })();
            }),
                (e.exports = t());
        },
    },
]);



// (self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7856],{27856:function(e){var t;t=function(){"use strict";let{entries:e,setPrototypeOf:t,isFrozen:n,getPrototypeOf:o,getOwnPropertyDescriptor:r}=Object,{freeze:i,seal:a,create:l}=Object,{apply:c,construct:s}="undefined"!=typeof Reflect&&Reflect;i||(i=function(e){return e}),a||(a=function(e){return e}),c||(c=function(e,t,n){return e.apply(t,n)}),s||(s=function(e,t){return new e(...t)});let u=N(Array.prototype.forEach),m=N(Array.prototype.pop),p=N(Array.prototype.push),f=N(String.prototype.toLowerCase),d=N(String.prototype.toString),h=N(String.prototype.match),g=N(String.prototype.replace),_=N(String.prototype.indexOf),y=N(String.prototype.trim),T=N(Object.prototype.hasOwnProperty),E=N(RegExp.prototype.test),A=(X=TypeError,function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return s(X,t)}),b=N(Number.isNaN);function N(e){return function(t){for(var n=arguments.length,o=Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];return c(e,t,o)}}function S(e,o){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:f;t&&t(e,null);let i=o.length;for(;i--;){let t=o[i];if("string"==typeof t){let e=r(t);e!==t&&(n(o)||(o[i]=e),t=e)}e[t]=!0}return e}function w(t){let n=l(null);for(let[o,r]of e(t))T(t,o)&&(Array.isArray(r)?n[o]=function(e){for(let t=0;t<e.length;t++)T(e,t)||(e[t]=null);return e}(r):r&&"object"==typeof r&&r.constructor===Object?n[o]=w(r):n[o]=r);return n}function C(e,t){for(;null!==e;){let n=r(e,t);if(n){if(n.get)return N(n.get);if("function"==typeof n.value)return N(n.value)}e=o(e)}return function(){return null}}let v=i(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),R=i(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),L=i(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),k=i(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),D=i(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),x=i(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),O=i(["#text"]),I=i(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),M=i(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),U=i(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),P=i(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),H=a(/\{\{[\w\W]*|[\w\W]*\}\}/gm),F=a(/<%[\w\W]*|[\w\W]*%>/gm),z=a(/\${[\w\W]*}/gm),W=a(/^data-[\-\w.\u00B7-\uFFFF]/),B=a(/^aria-[\-\w]+$/),G=a(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Y=a(/^(?:\w+script|data):/i),j=a(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),q=a(/^html$/i);var X,$=Object.freeze({__proto__:null,MUSTACHE_EXPR:H,ERB_EXPR:F,TMPLIT_EXPR:z,DATA_ATTR:W,ARIA_ATTR:B,IS_ALLOWED_URI:G,IS_SCRIPT_OR_DATA:Y,ATTR_WHITESPACE:j,DOCTYPE_NAME:q,CUSTOM_ELEMENT:a(/^[a-z][.\w]*(-[.\w]+)+$/i)});let K={element:1,text:3,progressingInstruction:7,comment:8,document:9},V=function(e,t){if("object"!=typeof e||"function"!=typeof e.createPolicy)return null;let n=null,o="data-tt-policy-suffix";t&&t.hasAttribute(o)&&(n=t.getAttribute(o));let r="dompurify"+(n?"#"+n:"");try{return e.createPolicy(r,{createHTML:e=>e,createScriptURL:e=>e})}catch(e){return console.warn("TrustedTypes policy "+r+" could not be created."),null}};return function t(){let n,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"undefined"==typeof window?null:window,r=e=>t(e);if(r.version="3.1.3",r.removed=[],!o||!o.document||o.document.nodeType!==K.document)return r.isSupported=!1,r;let{document:a}=o,c=a,s=c.currentScript,{DocumentFragment:N,HTMLTemplateElement:H,Node:F,Element:z,NodeFilter:W,NamedNodeMap:B=o.NamedNodeMap||o.MozNamedAttrMap,HTMLFormElement:Y,DOMParser:j,trustedTypes:X}=o,Z=z.prototype,J=C(Z,"cloneNode"),Q=C(Z,"nextSibling"),ee=C(Z,"childNodes"),et=C(Z,"parentNode");if("function"==typeof H){let e=a.createElement("template");e.content&&e.content.ownerDocument&&(a=e.content.ownerDocument)}let en="",{implementation:eo,createNodeIterator:er,createDocumentFragment:ei,getElementsByTagName:ea}=a,{importNode:el}=c,ec={};r.isSupported="function"==typeof e&&"function"==typeof et&&eo&&void 0!==eo.createHTMLDocument;let{MUSTACHE_EXPR:es,ERB_EXPR:eu,TMPLIT_EXPR:em,DATA_ATTR:ep,ARIA_ATTR:ef,IS_SCRIPT_OR_DATA:ed,ATTR_WHITESPACE:eh,CUSTOM_ELEMENT:eg}=$,{IS_ALLOWED_URI:e_}=$,ey=null,eT=S({},[...v,...R,...L,...D,...O]),eE=null,eA=S({},[...I,...M,...U,...P]),eb=Object.seal(l(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),eN=null,eS=null,ew=!0,eC=!0,ev=!1,eR=!0,eL=!1,ek=!0,eD=!1,ex=!1,eO=!1,eI=!1,eM=!1,eU=!1,eP=!0,eH=!1,eF=!0,ez=!1,eW={},eB=null,eG=S({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),eY=null,ej=S({},["audio","video","img","source","image","track"]),eq=null,eX=S({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),e$="http://www.w3.org/1998/Math/MathML",eK="http://www.w3.org/2000/svg",eV="http://www.w3.org/1999/xhtml",eZ=eV,eJ=!1,eQ=null,e0=S({},[e$,eK,eV],d),e1=null,e2=["application/xhtml+xml","text/html"],e3=null,e9=null,e5=a.createElement("form"),e8=function(e){return e instanceof RegExp||e instanceof Function},e6=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!e9||e9!==e){if(e&&"object"==typeof e||(e={}),e=w(e),e3="application/xhtml+xml"===(e1=-1===e2.indexOf(e.PARSER_MEDIA_TYPE)?"text/html":e.PARSER_MEDIA_TYPE)?d:f,ey=T(e,"ALLOWED_TAGS")?S({},e.ALLOWED_TAGS,e3):eT,eE=T(e,"ALLOWED_ATTR")?S({},e.ALLOWED_ATTR,e3):eA,eQ=T(e,"ALLOWED_NAMESPACES")?S({},e.ALLOWED_NAMESPACES,d):e0,eq=T(e,"ADD_URI_SAFE_ATTR")?S(w(eX),e.ADD_URI_SAFE_ATTR,e3):eX,eY=T(e,"ADD_DATA_URI_TAGS")?S(w(ej),e.ADD_DATA_URI_TAGS,e3):ej,eB=T(e,"FORBID_CONTENTS")?S({},e.FORBID_CONTENTS,e3):eG,eN=T(e,"FORBID_TAGS")?S({},e.FORBID_TAGS,e3):{},eS=T(e,"FORBID_ATTR")?S({},e.FORBID_ATTR,e3):{},eW=!!T(e,"USE_PROFILES")&&e.USE_PROFILES,ew=!1!==e.ALLOW_ARIA_ATTR,eC=!1!==e.ALLOW_DATA_ATTR,ev=e.ALLOW_UNKNOWN_PROTOCOLS||!1,eR=!1!==e.ALLOW_SELF_CLOSE_IN_ATTR,eL=e.SAFE_FOR_TEMPLATES||!1,ek=!1!==e.SAFE_FOR_XML,eD=e.WHOLE_DOCUMENT||!1,eI=e.RETURN_DOM||!1,eM=e.RETURN_DOM_FRAGMENT||!1,eU=e.RETURN_TRUSTED_TYPE||!1,eO=e.FORCE_BODY||!1,eP=!1!==e.SANITIZE_DOM,eH=e.SANITIZE_NAMED_PROPS||!1,eF=!1!==e.KEEP_CONTENT,ez=e.IN_PLACE||!1,e_=e.ALLOWED_URI_REGEXP||G,eZ=e.NAMESPACE||eV,eb=e.CUSTOM_ELEMENT_HANDLING||{},e.CUSTOM_ELEMENT_HANDLING&&e8(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(eb.tagNameCheck=e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),e.CUSTOM_ELEMENT_HANDLING&&e8(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(eb.attributeNameCheck=e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),e.CUSTOM_ELEMENT_HANDLING&&"boolean"==typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements&&(eb.allowCustomizedBuiltInElements=e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),eL&&(eC=!1),eM&&(eI=!0),eW&&(ey=S({},O),eE=[],!0===eW.html&&(S(ey,v),S(eE,I)),!0===eW.svg&&(S(ey,R),S(eE,M),S(eE,P)),!0===eW.svgFilters&&(S(ey,L),S(eE,M),S(eE,P)),!0===eW.mathMl&&(S(ey,D),S(eE,U),S(eE,P))),e.ADD_TAGS&&(ey===eT&&(ey=w(ey)),S(ey,e.ADD_TAGS,e3)),e.ADD_ATTR&&(eE===eA&&(eE=w(eE)),S(eE,e.ADD_ATTR,e3)),e.ADD_URI_SAFE_ATTR&&S(eq,e.ADD_URI_SAFE_ATTR,e3),e.FORBID_CONTENTS&&(eB===eG&&(eB=w(eB)),S(eB,e.FORBID_CONTENTS,e3)),eF&&(ey["#text"]=!0),eD&&S(ey,["html","head","body"]),ey.table&&(S(ey,["tbody"]),delete eN.tbody),e.TRUSTED_TYPES_POLICY){if("function"!=typeof e.TRUSTED_TYPES_POLICY.createHTML)throw A('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if("function"!=typeof e.TRUSTED_TYPES_POLICY.createScriptURL)throw A('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');en=(n=e.TRUSTED_TYPES_POLICY).createHTML("")}else void 0===n&&(n=V(X,s)),null!==n&&"string"==typeof en&&(en=n.createHTML(""));i&&i(e),e9=e}},e7=S({},["mi","mo","mn","ms","mtext"]),e4=S({},["foreignobject","annotation-xml"]),te=S({},["title","style","font","a","script"]),tt=S({},[...R,...L,...k]),tn=S({},[...D,...x]),to=function(e){let t=et(e);t&&t.tagName||(t={namespaceURI:eZ,tagName:"template"});let n=f(e.tagName),o=f(t.tagName);return!!eQ[e.namespaceURI]&&(e.namespaceURI===eK?t.namespaceURI===eV?"svg"===n:t.namespaceURI===e$?"svg"===n&&("annotation-xml"===o||e7[o]):!!tt[n]:e.namespaceURI===e$?t.namespaceURI===eV?"math"===n:t.namespaceURI===eK?"math"===n&&e4[o]:!!tn[n]:e.namespaceURI===eV?(t.namespaceURI!==eK||!!e4[o])&&(t.namespaceURI!==e$||!!e7[o])&&!tn[n]&&(te[n]||!tt[n]):"application/xhtml+xml"===e1&&!!eQ[e.namespaceURI])},tr=function(e){p(r.removed,{element:e});try{e.parentNode.removeChild(e)}catch(t){e.remove()}},ti=function(e,t){try{p(r.removed,{attribute:t.getAttributeNode(e),from:t})}catch(e){p(r.removed,{attribute:null,from:t})}if(t.removeAttribute(e),"is"===e&&!eE[e]){if(eI||eM)try{tr(t)}catch(e){}else try{t.setAttribute(e,"")}catch(e){}}},ta=function(e){let t=null,o=null;if(eO)e="<remove></remove>"+e;else{let t=h(e,/^[\r\n\t ]+/);o=t&&t[0]}"application/xhtml+xml"===e1&&eZ===eV&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");let r=n?n.createHTML(e):e;if(eZ===eV)try{t=new j().parseFromString(r,e1)}catch(e){}if(!t||!t.documentElement){t=eo.createDocument(eZ,"template",null);try{t.documentElement.innerHTML=eJ?en:r}catch(e){}}let i=t.body||t.documentElement;return(e&&o&&i.insertBefore(a.createTextNode(o),i.childNodes[0]||null),eZ===eV)?ea.call(t,eD?"html":"body")[0]:eD?t.documentElement:i},tl=function(e){return er.call(e.ownerDocument||e,e,W.SHOW_ELEMENT|W.SHOW_COMMENT|W.SHOW_TEXT|W.SHOW_PROCESSING_INSTRUCTION|W.SHOW_CDATA_SECTION,null)},tc=function(e){return e instanceof Y&&(void 0!==e.__depth&&"number"!=typeof e.__depth||void 0!==e.__removalCount&&"number"!=typeof e.__removalCount||"string"!=typeof e.nodeName||"string"!=typeof e.textContent||"function"!=typeof e.removeChild||!(e.attributes instanceof B)||"function"!=typeof e.removeAttribute||"function"!=typeof e.setAttribute||"string"!=typeof e.namespaceURI||"function"!=typeof e.insertBefore||"function"!=typeof e.hasChildNodes)},ts=function(e){return"function"==typeof F&&e instanceof F},tu=function(e,t,n){ec[e]&&u(ec[e],e=>{e.call(r,t,n,e9)})},tm=function(e){let t=null;if(tu("beforeSanitizeElements",e,null),tc(e))return tr(e),!0;let n=e3(e.nodeName);if(tu("uponSanitizeElement",e,{tagName:n,allowedTags:ey}),e.hasChildNodes()&&!ts(e.firstElementChild)&&E(/<[/\w]/g,e.innerHTML)&&E(/<[/\w]/g,e.textContent)||e.nodeType===K.progressingInstruction||ek&&e.nodeType===K.comment&&E(/<[/\w]/g,e.data))return tr(e),!0;if(!ey[n]||eN[n]){if(!eN[n]&&tf(n)&&(eb.tagNameCheck instanceof RegExp&&E(eb.tagNameCheck,n)||eb.tagNameCheck instanceof Function&&eb.tagNameCheck(n)))return!1;if(eF&&!eB[n]){let t=et(e)||e.parentNode,n=ee(e)||e.childNodes;if(n&&t){let o=n.length;for(let r=o-1;r>=0;--r){let o=J(n[r],!0);o.__removalCount=(e.__removalCount||0)+1,t.insertBefore(o,Q(e))}}}return tr(e),!0}return e instanceof z&&!to(e)||("noscript"===n||"noembed"===n||"noframes"===n)&&E(/<\/no(script|embed|frames)/i,e.innerHTML)?(tr(e),!0):(eL&&e.nodeType===K.text&&(t=e.textContent,u([es,eu,em],e=>{t=g(t,e," ")}),e.textContent!==t&&(p(r.removed,{element:e.cloneNode()}),e.textContent=t)),tu("afterSanitizeElements",e,null),!1)},tp=function(e,t,n){if(eP&&("id"===t||"name"===t)&&(n in a||n in e5||"__depth"===n||"__removalCount"===n))return!1;if(eC&&!eS[t]&&E(ep,t));else if(ew&&E(ef,t));else if(!eE[t]||eS[t]){if(!(tf(e)&&(eb.tagNameCheck instanceof RegExp&&E(eb.tagNameCheck,e)||eb.tagNameCheck instanceof Function&&eb.tagNameCheck(e))&&(eb.attributeNameCheck instanceof RegExp&&E(eb.attributeNameCheck,t)||eb.attributeNameCheck instanceof Function&&eb.attributeNameCheck(t))||"is"===t&&eb.allowCustomizedBuiltInElements&&(eb.tagNameCheck instanceof RegExp&&E(eb.tagNameCheck,n)||eb.tagNameCheck instanceof Function&&eb.tagNameCheck(n))))return!1}else if(eq[t]);else if(E(e_,g(n,eh,"")));else if(("src"===t||"xlink:href"===t||"href"===t)&&"script"!==e&&0===_(n,"data:")&&eY[e]);else if(ev&&!E(ed,g(n,eh,"")));else if(n)return!1;return!0},tf=function(e){return"annotation-xml"!==e&&h(e,eg)},td=function(e){tu("beforeSanitizeAttributes",e,null);let{attributes:t}=e;if(!t)return;let o={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:eE},i=t.length;for(;i--;){let{name:a,namespaceURI:l,value:c}=t[i],s=e3(a),p="value"===a?c:y(c);if(o.attrName=s,o.attrValue=p,o.keepAttr=!0,o.forceKeepAttr=void 0,tu("uponSanitizeAttribute",e,o),p=o.attrValue,o.forceKeepAttr||(ti(a,e),!o.keepAttr))continue;if(!eR&&E(/\/>/i,p)||ek&&E(/((--!?|])>)|<\/(style|title)/i,p)){ti(a,e);continue}eL&&u([es,eu,em],e=>{p=g(p,e," ")});let f=e3(e.nodeName);if(tp(f,s,p)){if(eH&&("id"===s||"name"===s)&&(ti(a,e),p="user-content-"+p),n&&"object"==typeof X&&"function"==typeof X.getAttributeType){if(l);else switch(X.getAttributeType(f,s)){case"TrustedHTML":p=n.createHTML(p);break;case"TrustedScriptURL":p=n.createScriptURL(p)}}try{l?e.setAttributeNS(l,a,p):e.setAttribute(a,p),tc(e)?tr(e):m(r.removed)}catch(e){}}}tu("afterSanitizeAttributes",e,null)},th=function e(t){let n=null,o=tl(t);for(tu("beforeSanitizeShadowDOM",t,null);n=o.nextNode();){if(tu("uponSanitizeShadowNode",n,null),tm(n))continue;let t=et(n);n.nodeType===K.element&&(t&&t.__depth?n.__depth=(n.__removalCount||0)+t.__depth+1:n.__depth=1),(n.__depth>=255||n.__depth<0||b(n.__depth))&&tr(n),n.content instanceof N&&(n.content.__depth=n.__depth,e(n.content)),td(n)}tu("afterSanitizeShadowDOM",t,null)};return r.sanitize=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=null,i=null,a=null,l=null;if((eJ=!e)&&(e="<!-->"),"string"!=typeof e&&!ts(e)){if("function"==typeof e.toString){if("string"!=typeof(e=e.toString()))throw A("dirty is not a string, aborting")}else throw A("toString is not a function")}if(!r.isSupported)return e;if(ex||e6(t),r.removed=[],"string"==typeof e&&(ez=!1),ez){if(e.nodeName){let t=e3(e.nodeName);if(!ey[t]||eN[t])throw A("root node is forbidden and cannot be sanitized in-place")}}else if(e instanceof F)(i=(o=ta("<!---->")).ownerDocument.importNode(e,!0)).nodeType===K.element&&"BODY"===i.nodeName?o=i:"HTML"===i.nodeName?o=i:o.appendChild(i);else{if(!eI&&!eL&&!eD&&-1===e.indexOf("<"))return n&&eU?n.createHTML(e):e;if(!(o=ta(e)))return eI?null:eU?en:""}o&&eO&&tr(o.firstChild);let s=tl(ez?e:o);for(;a=s.nextNode();){if(tm(a))continue;let e=et(a);a.nodeType===K.element&&(e&&e.__depth?a.__depth=(a.__removalCount||0)+e.__depth+1:a.__depth=1),(a.__depth>=255||a.__depth<0||b(a.__depth))&&tr(a),a.content instanceof N&&(a.content.__depth=a.__depth,th(a.content)),td(a)}if(ez)return e;if(eI){if(eM)for(l=ei.call(o.ownerDocument);o.firstChild;)l.appendChild(o.firstChild);else l=o;return(eE.shadowroot||eE.shadowrootmode)&&(l=el.call(c,l,!0)),l}let m=eD?o.outerHTML:o.innerHTML;return eD&&ey["!doctype"]&&o.ownerDocument&&o.ownerDocument.doctype&&o.ownerDocument.doctype.name&&E(q,o.ownerDocument.doctype.name)&&(m="<!DOCTYPE "+o.ownerDocument.doctype.name+">\n"+m),eL&&u([es,eu,em],e=>{m=g(m,e," ")}),n&&eU?n.createHTML(m):m},r.setConfig=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e6(e),ex=!0},r.clearConfig=function(){e9=null,ex=!1},r.isValidAttribute=function(e,t,n){return e9||e6({}),tp(e3(e),e3(t),n)},r.addHook=function(e,t){"function"==typeof t&&(ec[e]=ec[e]||[],p(ec[e],t))},r.removeHook=function(e){if(ec[e])return m(ec[e])},r.removeHooks=function(e){ec[e]&&(ec[e]=[])},r.removeAllHooks=function(){ec={}},r}()},e.exports=t()}}]);